var B = wx.$z;
// 引入渠道JS文件
import SDKyyw from './zzsshz';
var config = {
    game_id: B[441648],
    game_pkg: B[441649], //有一 --飞剑 --萌神战姬
    partner_id: B[441650],
    game_ver: B[441651],
    is_auth: false, //授权登录   
    from: null, //来源
    tmpId: {} // 订阅的类型 和 模板id
};
window.config = config;
// 渠道配置
var partner_config = {
    app_id: 1000220,
    app_key: B[441652]
};

var z0RJD0Y = z0RDY0J();
var HOST = B[441653];
var z0RJDY0 = null;
var z0RD0YJ = null;
var z0RD0JY = null;
var partner_user_info = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function z0RDY0J() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(B[441654]);
            var self = this;

            var uuid = wx.getStorageSync(B[441655]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(B[441655], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(B[441656]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(B[441656], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(B[441657], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(B[441658], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                z0RD0YJ = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }

            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },

        //登录接口
        login: function (data, callback) {
            console.log(B[441659]);
            var self = this;
            callbacks[B[441024]] = typeof callback == B[440130] ? callback : null;

            //初始化参数
            SDKyyw.initLoginCallback = res => {
                console.log(B[441660] + JSON.stringify(res));
                if (res.status == 0) {
                    console.log(B[441661]);
                    callback(1, {
                        errMsg: B[441662]
                    });
                    return;
                }

                partner_user_info = res.data;
                self.do_login(partner_user_info);
            };

            SDKyyw.init(partner_config.app_id, partner_config.app_key);
        },

        do_login: function (info) {
            var self = this;
            var public_data = self.getPublicData();
            public_data[B[441663]] = info ? info.nick_name : '';
            public_data[B[441664]] = info ? info.head_img : '';

            if (z0RD0YJ && typeof z0RD0YJ == B[440013]) {
                for (var key in z0RD0YJ) {
                    public_data[key] = z0RD0YJ[key];
                }
            }

            public_data[B[441665]] = info.uid;

            var lastTime = Date.now();
            wx.request({
                url: B[441666] + HOST + B[441667],
                method: B[440993],
                dataType: B[440393],
                header: {
                    'content-type': B[441142] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(B[441668] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            var userData = {
                                userid: data.data.user_id,
                                account: data.data.nick_name,
                                token: data.data.token,
                                invite_uid: data.data.invite_uid || '',
                                invite_nickname: data.data.invite_nickname || '',
                                invite_head_img: data.data.invite_head_img || '',
                                head_img: data.data.head_img || '',
                                is_client: data.data.is_client || '0',
                                ios_pay: data.data.ios_pay || '0'
                            };
                            try {
                                wx.setStorageSync(B[441669], data.data.sdk_token);
                                wx.setStorageSync(B[441670], data.data.user_id);
                                wx.setStorageSync(B[441671], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(B[441672], data.data.ext);
                                }
                            } catch (e) {}

                            callbacks[B[441024]] && callbacks[B[441024]](0, userData);
                        } else {
                            callbacks[B[441024]] && callbacks[B[441024]](1, { type: B[441673], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(B[441674], function (data) {
                            console.log(B[441675]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(B[441674]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[B[441024]] && callbacks[B[441024]](1, { type: B[441673], errMsg: B[441676], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(B[441677]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[B[441024]] && callbacks[B[441024]](1, { type: B[441678], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(B[441679]);

                    callbacks[B[441024]] && callbacks[B[441024]](1, { type: B[441680], errMsg: B[441681], time: Date.now() - lastTime });
                    callbacks[B[441024]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[B[441098]] = typeof callback == B[440130] ? callback : null;
            var type = data.type || B[441098];
            console.log(B[441682] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);
                wx.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(B[441669]);
            wx.request({
                url: B[441666] + HOST + B[441683],
                method: B[440993],
                dataType: B[440393],
                header: {
                    'content-type': B[441142] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: z0RJDY0 ? z0RJDY0.server_id : '',
                    role_id: z0RJDY0 ? z0RJDY0.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(B[441684]);
            callbacks[B[441685]] = typeof callback == B[440130] ? callback : null;
            var sdk_token = wx.getStorageSync(B[441669]);
            wx.request({
                url: B[441666] + HOST + B[441686],
                method: B[440993],
                dataType: B[440393],
                header: {
                    'content-type': B[441142] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(B[441687]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[B[441685]] && callbacks[B[441685]](data.data);
                        } else {
                            callbacks[B[441685]] && callbacks[B[441685]]({ develop: 0 });
                        }
                    } else {
                        callbacks[B[441685]] && callbacks[B[441685]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(B[441688]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[B[441685]] && callbacks[B[441685]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(B[441689]);
                    callbacks[B[441685]] && callbacks[B[441685]]({ develop: 0 });
                    callbacks[B[441685]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(B[441690]);
            var sdk_token = wx.getStorageSync(B[441669]);
            wx.request({
                url: B[441666] + HOST + B[441691],
                method: B[440993],
                dataType: B[440393],
                header: {
                    'content-type': B[441142] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: z0RJDY0 ? z0RJDY0.server_id : '',
                    role_id: z0RJDY0 ? z0RJDY0.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(B[441692]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[B[441098]] && callbacks[B[441098]](1, { errMsg: B[441693] + data.msg });
                        }
                    } else {
                        callbacks[B[441098]] && callbacks[B[441098]](1, { errMsg: B[441694] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(B[441695]);
            var sdk_token = wx.getStorageSync(B[441669]);
            wx.request({
                url: B[441666] + HOST + B[441696],
                method: B[440993],
                dataType: B[440393],
                header: {
                    'content-type': B[441142] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    role_id: role_id,
                    sever_id: server_id,
                    scene: scene
                },
                success: function (res) {
                    console.log(B[441697]);
                    console.log(res);
                }
            });
        },

        pay: function (data, callback) {
            var self = this;

            wx.checkSession({
                success: function () {
                    self.startPay(data, callback);
                },
                fail: function () {
                    console.log(B[441698]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(B[441699]);
            console.log(data);

            var self = this;
            callbacks[B[441085]] = typeof callback == B[440130] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(B[441669]);
            var session_key = wx.getStorageSync(B[441672]);
            if (!sdk_token && !session_key) {
                callbacks[B[441085]] && callbacks[B[441085]](1, { errMsg: B[441700] });
                return;
            }

            var sysInfo = wx.getSystemInfoSync();

            var order_data = {
                cpbill: data.cpbill,
                productid: data.productid,
                productname: data.productname,
                productdesc: data.productdesc,
                serverid: data.serverid,
                servername: data.servername,
                roleid: data.roleid,
                rolename: data.rolename,
                rolelevel: data.rolelevel,
                price: data.price,
                extension: data.extension,
                sdk_token: sdk_token,
                session_key: session_key,
                platform: sysInfo.platform
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[B[441701]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: B[441666] + HOST + B[441702],
                method: B[440993],
                dataType: B[440393],
                header: {
                    'content-type': B[441142] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(B[441703] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //支付回调
                            SDKyyw.onPayCallback = data => {}
                            //不要通过客户端回调来作为充值判断
                            //支付成功 data = {status:"1", data: {gameOrderid:"this is order id",money:"充值金额",productId:"商品id"}, msg:"支付成功"}


                            //拉起支付
                            ;let payData = {};
                            payData.serverId = data.data.pay_data.serverId; //服务器id
                            payData.serverName = data.data.pay_data.serverName; //服务器名称
                            payData.roleId = data.data.pay_data.roleId; //角色id
                            payData.roleName = data.data.pay_data.roleName; //角色名称
                            payData.roleLevel = data.data.pay_data.roleLevel; //角色等级
                            payData.gameOrderid = data.data.pay_data.orderId; //cp支付订单id
                            payData.pext = data.data.pay_data.orderId; //扩展字段，服务端回调原样返回
                            payData.money = data.data.pay_data.amount; //充值金额 单位元
                            payData.productName = data.data.pay_data.productName;
                            payData.productId = data.data.pay_data.productId;

                            console.log(B[441704] + JSON.stringify(payData));
                            SDKyyw.pay(payData);
                        } else {
                            callbacks[B[441085]] && callbacks[B[441085]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[B[441024]] && callbacks[B[441024]](1, { errMsg: B[441676] });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(B[441670]);
            var username = wx.getStorageSync(B[441671]);

            var postData = {};
            postData[B[441705]] = uid;
            postData[B[441706]] = username;
            postData[B[441707]] = data.roleid;
            postData[B[441708]] = data.rolelevel;
            postData[B[441709]] = data.rolename;
            postData[B[440980]] = data.serverid;

            if (data.roleid && data.serverid) {
                z0RJDY0 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(B[440014], postData);

            let report_data = {};
            report_data.type = 2; //1:登录，2:创建角色
            report_data.roleId = data.roleid;
            report_data.roleName = data.rolename;
            SDKyyw.pushData(report_data);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(B[441670]);
            var username = wx.getStorageSync(B[441671]);

            var postData = {};
            postData[B[441705]] = uid;
            postData[B[441706]] = username;
            postData[B[441707]] = data.roleid;
            postData[B[441708]] = data.rolelevel;
            postData[B[441709]] = data.rolename;
            postData[B[440980]] = data.serverid;

            if (data.roleid && data.serverid) {
                z0RJDY0 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(B[441710], postData);

            //进入游戏确认邀请成功
            if (z0RD0YJ) {
                this.updateShare(z0RD0YJ.invite, z0RD0YJ.invite_type, z0RD0YJ.is_new, data.roleid, data.serverid, z0RD0YJ.scene);
            }

            let report_data1 = {};
            report_data1.type = 1; //1:登录，2:创建角色
            report_data1.roleId = data.roleid;
            report_data1.roleName = data.rolename;
            SDKyyw.pushData(report_data1);

            let report_data2 = {};
            report_data2.type = 5; //5:在线
            report_data2.roleId = data.roleid;
            report_data2.roleName = data.rolename;
            SDKyyw.pushData(report_data2);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(B[441670]);
            var username = wx.getStorageSync(B[441671]);

            var postData = {};
            postData[B[441705]] = uid;
            postData[B[441706]] = username;
            postData[B[441707]] = data.roleid;
            postData[B[441708]] = data.rolelevel;
            postData[B[441709]] = data.rolename;
            postData[B[440980]] = data.serverid;

            if (data.roleid && data.serverid) {
                z0RJDY0 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(B[441711], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = B[441712].split('');
            var uuid = [],
                i;
            radix = radix || chars.length;

            if (len) {
                for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
            } else {
                var r;

                uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                uuid[14] = '4';

                for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                        r = 0 | Math.random() * 16;
                        uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
                    }
                }
            }

            return uuid.join('');
        },

        //获取公共参数
        getPublicData: function () {
            var system = wx.getSystemInfoSync();
            var uuid = wx.getStorageSync(B[441655]);
            var idfv = wx.getStorageSync(B[441656]);
            var ad_code = wx.getStorageSync(B[441657]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                is_from_min: 1,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: B[441713],
                net_type: system.wifiSignal == 0 ? '4G' : B[441714],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == B[441284] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(B[441715] + type);
            console.log(public_data);

            wx.request({
                url: B[441666] + HOST + B[441716] + type + B[441717] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        // 获取当前场景值
        getLaunchOptionsSync: function (callback) {
            let launchOptions = SDKyyw.getLaunchOptionsSync();
            callback(launchOptions);
            console.log(B[441718] + JSON.stringify(launchOptions));

            // 返回的数据 {query:{}, scene:1001, shareTicket: '', referrerInfo: {}}        }
        },

        // 关键字屏蔽
        msgCheck: function (msg, callback) {
            SDKyyw.msgSecCheck(msg, function (res) {
                console.log(B[441719] + JSON.stringify(res));
                // 返回内容和微信返回内容一样
                // errcode 0 内容正常 87014 内容有违规内容
                // errMsg ok 内容正常 risky 内容有违规内容

                let ret_res = {
                    data: {}
                };
                if (res.status == 1) {
                    ret_res.statusCode = 200;
                    ret_res.data.state = 1;
                } else {
                    ret_res.statusCode = 0;
                    ret_res.data.state = 0;
                }
                callback && callback(ret_res);
            });
        }
    };
}

function run(method, data, callback) {
    method in z0RJD0Y && z0RJD0Y[method](data, callback);
}

exports.init = function (data, callback) {
    run(B[441004], data, callback);
};

exports.login = function (callback) {
    run(B[441024], '', callback);
};

exports.login = function (callback) {
    run(B[441024], '', callback);
};

exports.pay = function (data, callback) {
    run(B[441085], data, callback);
};

exports.openService = function () {
    run(B[441099]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(B[441093], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(B[441095], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(B[441097], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(B[441098], data);
};

exports.downloadClient = function () {
    run(B[441720]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getLaunchOptionsSync = function (callback) {
    run(B[441189], callback);
};

exports.msgCheck = function (msg, callback) {
    run(B[440964], msg, callback);
};