var B = wx.$z;
// 引入渠道JS文件
import SDKyyw from './zzsshz';
var config = {
    game_id: B[441805],
    game_pkg: B[441806], //有一 --飞剑 --萌神战姬
    partner_id: B[441807],
    game_ver: B[441808],
    is_auth: false, //授权登录   
    from: null, //来源  
    tmpId: { 1: B[441809], 2: B[441810], 3: B[441811] // 订阅的类型 和 模板id
    } };
window.config = config;

// 渠道配置
var partner_config = {
    app_id: 1000220,
    app_key: B[441812]
};

var partner_swtich_info = null;

var z0RJD0Y = z0RDY0J();
var HOST = B[441813];
var z0RJDY0 = null;
var z0RD0YJ = null;
var z0RD0JY = null;
var partner_user_info = null;

function z0RDY0J() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(B[441814]);
            var self = this;

            var uuid = wx.getStorageSync(B[441815]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(B[441815], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(B[441816]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(B[441816], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(B[441817], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(B[441818], data);

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
            console.log(B[441819]);
            var self = this;
            callbacks[B[440140]] = typeof callback == B[441017] ? callback : null;

            //初始化参数
            SDKyyw.initLoginCallback = res => {
                console.log(B[441820] + JSON.stringify(res));
                if (res.status == 0) {
                    console.log(B[441821]);
                    callback(1, {
                        errMsg: B[441822]
                    });
                    return;
                }
                partner_swtich_info = {
                    showSwitchOn: res.data.showSwitchOn,
                    switchApp: res.data.switchApp,
                    switchContent: res.data.switchContent
                };
                partner_user_info = res.data;
                self.do_login(partner_user_info);
            };

            SDKyyw.init(partner_config.app_id, partner_config.app_key);
        },

        do_login: function (info) {
            var self = this;
            var public_data = self.getPublicData();
            public_data[B[441823]] = info ? info.nick_name : '';
            public_data[B[441824]] = info ? info.head_img : '';

            if (z0RD0YJ && typeof z0RD0YJ == B[440917]) {
                for (var key in z0RD0YJ) {
                    public_data[key] = z0RD0YJ[key];
                }
            }

            public_data[B[441825]] = info.uid;

            wx.request({
                url: B[441826] + HOST + B[441827],
                method: B[440105],
                dataType: B[441262],
                header: {
                    'content-type': B[440310] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(B[441828] + JSON.stringify(res));
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
                                wx.setStorageSync(B[441829], data.data.sdk_token);
                                wx.setStorageSync(B[441830], data.data.user_id);
                                wx.setStorageSync(B[441831], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(B[441832], data.data.ext);
                                }
                            } catch (e) {}

                            callbacks[B[440140]] && callbacks[B[440140]](0, userData);
                        } else {
                            callbacks[B[440140]] && callbacks[B[440140]](1, { errMsg: data.msg });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(B[441833], function (data) {
                            console.log(B[441834]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(B[441833]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[B[440140]] && callbacks[B[440140]](1, { errMsg: B[441835] });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[B[440257]] = typeof callback == B[441017] ? callback : null;
            var type = data.type || B[440257];
            console.log(B[441836] + type);
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
            var sdk_token = wx.getStorageSync(B[441829]);
            wx.request({
                url: B[441826] + HOST + B[441837],
                method: B[440105],
                dataType: B[441262],
                header: {
                    'content-type': B[440310] // 默认值
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
            console.log(B[441838]);
            var sdk_token = wx.getStorageSync(B[441829]);
            wx.request({
                url: B[441826] + HOST + B[441839],
                method: B[440105],
                dataType: B[441262],
                header: {
                    'content-type': B[440310] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(B[441840]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callback && callback({ develop: 0 });
                        }
                    } else {
                        callback && callback({ develop: 0 });
                    }
                }
            });
        },

        getShareInfo: function (type, callback) {
            console.log(B[441841]);
            var sdk_token = wx.getStorageSync(B[441829]);
            wx.request({
                url: B[441826] + HOST + B[441842],
                method: B[440105],
                dataType: B[441262],
                header: {
                    'content-type': B[440310] // 默认值
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
                    console.log(B[441843]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[B[440257]] && callbacks[B[440257]](1, { errMsg: B[441844] + data.msg });
                        }
                    } else {
                        callbacks[B[440257]] && callbacks[B[440257]](1, { errMsg: B[441845] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(B[441846]);
            var sdk_token = wx.getStorageSync(B[441829]);
            wx.request({
                url: B[441826] + HOST + B[441847],
                method: B[440105],
                dataType: B[441262],
                header: {
                    'content-type': B[440310] // 默认值
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
                    console.log(B[441848]);
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
                    console.log(B[441849]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(B[441850]);
            console.log(data);

            var self = this;
            callbacks[B[440239]] = typeof callback == B[441017] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(B[441829]);
            var session_key = wx.getStorageSync(B[441832]);
            if (!sdk_token && !session_key) {
                callbacks[B[440239]] && callbacks[B[440239]](1, { errMsg: B[441851] });
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
            public_data[B[441852]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: B[441826] + HOST + B[441853],
                method: B[440105],
                dataType: B[441262],
                header: {
                    'content-type': B[440310] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(B[441854] + JSON.stringify(res));

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

                            console.log(B[441855] + JSON.stringify(payData));
                            SDKyyw.pay(payData);
                        } else {
                            callbacks[B[440239]] && callbacks[B[440239]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[B[440140]] && callbacks[B[440140]](1, { errMsg: B[441835] });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(B[441830]);
            var username = wx.getStorageSync(B[441831]);

            var postData = {};
            postData[B[441856]] = uid;
            postData[B[441857]] = username;
            postData[B[441858]] = data.roleid;
            postData[B[441859]] = data.rolelevel;
            postData[B[441860]] = data.rolename;
            postData[B[440088]] = data.serverid;

            if (data.roleid && data.serverid) {
                z0RJDY0 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(B[440497], postData);

            let report_data = {};
            report_data.type = 2; //1:登录，2:创建角色
            report_data.roleId = data.roleid;
            report_data.roleName = data.rolename;
            report_data.serverId = data.serverid;
            SDKyyw.pushData(report_data);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(B[441830]);
            var username = wx.getStorageSync(B[441831]);

            var postData = {};
            postData[B[441856]] = uid;
            postData[B[441857]] = username;
            postData[B[441858]] = data.roleid;
            postData[B[441859]] = data.rolelevel;
            postData[B[441860]] = data.rolename;
            postData[B[440088]] = data.serverid;

            if (data.roleid && data.serverid) {
                z0RJDY0 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(B[441861], postData);

            //进入游戏确认邀请成功
            if (z0RD0YJ) {
                this.updateShare(z0RD0YJ.invite, z0RD0YJ.invite_type, z0RD0YJ.is_new, data.roleid, data.serverid, z0RD0YJ.scene);
            }

            let report_data1 = {};
            report_data1.type = 1; //1:登录，2:创建角色
            report_data1.roleId = data.roleid;
            report_data1.roleName = data.rolename;
            report_data1.serverId = data.serverid;
            SDKyyw.pushData(report_data1);

            let report_data2 = {};
            report_data2.type = 5; //5:在线
            report_data2.roleId = data.roleid;
            report_data2.roleName = data.rolename;
            report_data2.serverId = data.serverid;
            SDKyyw.pushData(report_data2);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(B[441830]);
            var username = wx.getStorageSync(B[441831]);

            var postData = {};
            postData[B[441856]] = uid;
            postData[B[441857]] = username;
            postData[B[441858]] = data.roleid;
            postData[B[441859]] = data.rolelevel;
            postData[B[441860]] = data.rolename;
            postData[B[440088]] = data.serverid;

            if (data.roleid && data.serverid) {
                z0RJDY0 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(B[441862], postData);

            let upgradeData = {};
            upgradeData.type = 4; //4:角色升级
            upgradeData.roleId = data.roleid;
            upgradeData.roleName = data.rolename;
            upgradeData.serverId = data.serverid;
            upgradeData.level = data.rolelevel;
            SDKyyw.pushData(upgradeData);
        },

        switchEnv: function (callbacks) {
            callbacks(partner_swtich_info);
        },

        switchGame: function (callbacks) {
            SDKyyw.cutGameCallback = data => {
                // {status: 1,msg: "success", data: res } 跳转成功
                // {status: 0,msg: "fail", data: err } 跳转失败
                callbacks(data);
            };

            // 跳转
            if (partner_swtich_info.showSwitchOn == 1) {
                SDKyyw.cutGame();
            } else {
                callbacks({ status: 0, msg: B[441863] });
            }
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = B[441864].split('');
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
            var uuid = wx.getStorageSync(B[441815]);
            var idfv = wx.getStorageSync(B[441816]);
            var ad_code = wx.getStorageSync(B[441817]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                is_from_min: 1,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: B[441865],
                net_type: system.wifiSignal == 0 ? '4G' : B[441866],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == B[440467] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(B[441867] + type);
            console.log(public_data);

            wx.request({
                url: B[441826] + HOST + B[441868] + type + B[441869] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(B[441870] + JSON.stringify(launchOptions));

            // 返回的数据 {query:{}, scene:1001, shareTicket: '', referrerInfo: {}}        }
        },

        // 关键字屏蔽
        msgCheck: function (msg, callback) {
            SDKyyw.msgSecCheck(msg, function (res) {
                console.log(B[441871] + JSON.stringify(res));
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
        },
        //获取验证码
        sendCode: function (data, callback) {

            console.log(B[441872], data.phone);

            SDKyyw.getCaptchaCallback = data => {
                console.log(data);
                // 成功data = {status:"1", data: res, msg: success}
                // 失败data = {status:"0", data: fail, msg: fail}
                if (data.status == 1) {
                    callback && callback(0, data);
                } else {
                    callback && callback(1, data);
                }
            };
            SDKyyw.getCaptcha({ telephone: data.phone });
        },
        //绑定手机
        bindPhone: function (data, callback) {

            console.log(B[441873], data.phone, data.code);

            SDKyyw.bindTelephoneCallback = data => {
                console.log(B[441874], data);
                // 成功data = {status:"1", data: res, msg: success}
                // 失败data = {status:"0", data: fail, msg: fail}
                if (data.status == 1) {
                    callback && callback(0, data);
                } else {
                    callback && callback(1, data);
                }
            };
            SDKyyw.bindTelephone({ telephone: data.phone, captcha: data.code });
        }
    };
}

function run(method, data, callback) {
    method in z0RJD0Y && z0RJD0Y[method](data, callback);
}

exports.init = function (data, callback) {
    run(B[440118], data, callback);
};

exports.login = function (callback) {
    run(B[440140], '', callback);
};

exports.login = function (callback) {
    run(B[440140], '', callback);
};

exports.pay = function (data, callback) {
    run(B[440239], data, callback);
};

exports.openService = function () {
    run(B[440258]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(B[440252], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(B[440254], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(B[440256], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(B[440257], data);
};

exports.downloadClient = function () {
    run(B[441875]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getLaunchOptionsSync = function (callback) {
    run(B[440365], callback);
};

exports.msgCheck = function (msg, callback) {
    run(B[440069], msg, callback);
};

exports.switchEnv = function (callback) {
    run(B[440202], callback);
};
exports.switchGame = function (callback) {
    run(B[440217], callback);
};

exports.sendCode = function (data, callback) {
    run(B[441876], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(B[441877], data, callback);
};