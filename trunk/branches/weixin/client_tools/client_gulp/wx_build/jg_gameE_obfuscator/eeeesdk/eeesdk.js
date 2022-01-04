var b = wx.$e;
// 引入渠道JS文件
import SDKyyw from './eeehelp';
var config = {
    game_id: b[68939],
    game_pkg: b[68940], //有一 --飞剑 --侠义九州
    partner_id: b[68941],
    game_ver: b[68942],
    is_auth: false, //授权登录   
    from: null, //来源
    tmpId: {} // 订阅的类型 和 模板id
};
window.config = config;
// 渠道配置
var partner_config = {
    app_id: 1000207,
    app_key: b[68943]
};

var e1IU01G = e1I0G1U();
var HOST = b[68944];
var e1IU0G1 = null;
var e1I01GU = null;
var e1I01UG = null;
var partner_user_info = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function e1I0G1U() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(b[68945]);
            var self = this;

            var uuid = wx.getStorageSync(b[68946]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(b[68946], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(b[68947]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(b[68947], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(b[68948], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(b[40748], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                e1I01GU = {
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
            console.log(b[68949]);
            var self = this;
            callbacks[b[68804]] = typeof callback == b[40352] ? callback : null;

            //初始化参数
            SDKyyw.initLoginCallback = res => {
                console.log(b[68950] + JSON.stringify(res));
                if (res.status == 0) {
                    console.log(b[68951]);
                    callback(1, {
                        errMsg: b[68952]
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
            public_data[b[68953]] = info ? info.nick_name : '';
            public_data[b[68954]] = info ? info.head_img : '';

            if (e1I01GU && typeof e1I01GU == b[40268]) {
                for (var key in e1I01GU) {
                    public_data[key] = e1I01GU[key];
                }
            }

            public_data[b[68955]] = info.uid;

            var lastTime = Date.now();
            wx.request({
                url: b[65715] + HOST + b[68956],
                method: b[68957],
                dataType: b[40480],
                header: {
                    'content-type': b[68830] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(b[68958] + JSON.stringify(res));
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
                                wx.setStorageSync(b[68959], data.data.sdk_token);
                                wx.setStorageSync(b[68960], data.data.user_id);
                                wx.setStorageSync(b[68961], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(b[68962], data.data.ext);
                                }
                            } catch (e) {}

                            callbacks[b[68804]] && callbacks[b[68804]](0, userData);
                        } else {
                            callbacks[b[68804]] && callbacks[b[68804]](1, { type: b[68963], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(b[68964], function (data) {
                            console.log(b[68965]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(b[68964]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[b[68804]] && callbacks[b[68804]](1, { type: b[68963], errMsg: b[68966], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(b[68967]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[b[68804]] && callbacks[b[68804]](1, { type: b[68968], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(b[68969]);

                    callbacks[b[68804]] && callbacks[b[68804]](1, { type: b[68970], errMsg: b[68971], time: Date.now() - lastTime });
                    callbacks[b[68804]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[b[68928]] = typeof callback == b[40352] ? callback : null;
            var type = data.type || b[68928];
            console.log(b[68972] + type);
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
            var sdk_token = wx.getStorageSync(b[68959]);
            wx.request({
                url: b[65715] + HOST + b[68973],
                method: b[68957],
                dataType: b[40480],
                header: {
                    'content-type': b[68830] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: e1IU0G1 ? e1IU0G1.server_id : '',
                    role_id: e1IU0G1 ? e1IU0G1.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(b[68974]);
            callbacks[b[47482]] = typeof callback == b[40352] ? callback : null;
            var sdk_token = wx.getStorageSync(b[68959]);
            wx.request({
                url: b[65715] + HOST + b[68975],
                method: b[68957],
                dataType: b[40480],
                header: {
                    'content-type': b[68830] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(b[68976]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[b[47482]] && callbacks[b[47482]](data.data);
                        } else {
                            callbacks[b[47482]] && callbacks[b[47482]]({ develop: 0 });
                        }
                    } else {
                        callbacks[b[47482]] && callbacks[b[47482]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(b[68977]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[b[47482]] && callbacks[b[47482]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(b[68978]);
                    callbacks[b[47482]] && callbacks[b[47482]]({ develop: 0 });
                    callbacks[b[47482]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(b[68979]);
            var sdk_token = wx.getStorageSync(b[68959]);
            wx.request({
                url: b[65715] + HOST + b[68980],
                method: b[68957],
                dataType: b[40480],
                header: {
                    'content-type': b[68830] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: e1IU0G1 ? e1IU0G1.server_id : '',
                    role_id: e1IU0G1 ? e1IU0G1.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(b[68981]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[b[68928]] && callbacks[b[68928]](1, { errMsg: b[68982] + data.msg });
                        }
                    } else {
                        callbacks[b[68928]] && callbacks[b[68928]](1, { errMsg: b[68983] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(b[68984]);
            var sdk_token = wx.getStorageSync(b[68959]);
            wx.request({
                url: b[65715] + HOST + b[68985],
                method: b[68957],
                dataType: b[40480],
                header: {
                    'content-type': b[68830] // 默认值
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
                    console.log(b[68986]);
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
                    console.log(b[68987]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(b[68988]);
            console.log(data);

            var self = this;
            callbacks[b[68989]] = typeof callback == b[40352] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(b[68959]);
            var session_key = wx.getStorageSync(b[68962]);
            if (!sdk_token && !session_key) {
                callbacks[b[68989]] && callbacks[b[68989]](1, { errMsg: b[68990] });
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
            public_data[b[68991]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: b[65715] + HOST + b[68992],
                method: b[68957],
                dataType: b[40480],
                header: {
                    'content-type': b[68830] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(b[68993] + JSON.stringify(res));

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

                            console.log(b[68994] + JSON.stringify(payData));
                            SDKyyw.pay(payData);
                        } else {
                            callbacks[b[68989]] && callbacks[b[68989]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[b[68804]] && callbacks[b[68804]](1, { errMsg: b[68966] });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(b[68960]);
            var username = wx.getStorageSync(b[68961]);

            var postData = {};
            postData[b[68995]] = uid;
            postData[b[68996]] = username;
            postData[b[51222]] = data.roleid;
            postData[b[68997]] = data.rolelevel;
            postData[b[68998]] = data.rolename;
            postData[b[51895]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1IU0G1 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[40269], postData);

            let report_data = {};
            report_data.type = 2; //1:登录，2:创建角色
            report_data.roleId = data.roleid;
            report_data.roleName = data.rolename;
            SDKyyw.pushData(report_data);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(b[68960]);
            var username = wx.getStorageSync(b[68961]);

            var postData = {};
            postData[b[68995]] = uid;
            postData[b[68996]] = username;
            postData[b[51222]] = data.roleid;
            postData[b[68997]] = data.rolelevel;
            postData[b[68998]] = data.rolename;
            postData[b[51895]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1IU0G1 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[46126], postData);

            //进入游戏确认邀请成功
            if (e1I01GU) {
                this.updateShare(e1I01GU.invite, e1I01GU.invite_type, e1I01GU.is_new, data.roleid, data.serverid, e1I01GU.scene);
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
            var uid = wx.getStorageSync(b[68960]);
            var username = wx.getStorageSync(b[68961]);

            var postData = {};
            postData[b[68995]] = uid;
            postData[b[68996]] = username;
            postData[b[51222]] = data.roleid;
            postData[b[68997]] = data.rolelevel;
            postData[b[68998]] = data.rolename;
            postData[b[51895]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1IU0G1 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[68999], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = b[69000].split('');
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
            var uuid = wx.getStorageSync(b[68946]);
            var idfv = wx.getStorageSync(b[68947]);
            var ad_code = wx.getStorageSync(b[68948]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                is_from_min: 1,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: b[69001],
                net_type: system.wifiSignal == 0 ? '4G' : b[69002],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == b[68716] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(b[69003] + type);
            console.log(public_data);

            wx.request({
                url: b[65715] + HOST + b[69004] + type + b[69005] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(b[69006] + JSON.stringify(launchOptions));

            // 返回的数据 {query:{}, scene:1001, shareTicket: '', referrerInfo: {}}        }
        },

        // 关键字屏蔽
        msgCheck: function (msg, callback) {
            SDKyyw.msgSecCheck(msg, function (res) {
                console.log(b[69007] + JSON.stringify(res));
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
    method in e1IU01G && e1IU01G[method](data, callback);
}

exports.init = function (data, callback) {
    run(b[40823], data, callback);
};

exports.login = function (callback) {
    run(b[68804], '', callback);
};

exports.login = function (callback) {
    run(b[68804], '', callback);
};

exports.pay = function (data, callback) {
    run(b[68989], data, callback);
};

exports.openService = function () {
    run(b[65181]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(b[69008], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(b[69009], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(b[69010], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(b[68928], data);
};

exports.downloadClient = function () {
    run(b[69011]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getLaunchOptionsSync = function (callback) {
    run(b[69012], callback);
};

exports.msgCheck = function (msg, callback) {
    run(b[52507], msg, callback);
};