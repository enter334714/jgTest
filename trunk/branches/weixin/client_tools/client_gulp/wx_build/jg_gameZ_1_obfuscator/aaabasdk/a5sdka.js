var C = wx.$a;
// const {AladinSDK} = require('./a5ssha.js');
import helper from "./a5ssha.js";
var AladinSDK = helper.AladinSDK;
//TODO 替换对应参数
var config = {
    game_id: C[461675],
    game_pkg: C[461676], //萌蛋-仙尘-九阳服
    partner_label: C[461677],
    partner_id: C[461678],
    game_ver: C[461679],
    is_auth: false, //授权登录
    wx_app_id: C[461680],
    tmpId: { 1: C[461681], 2: C[461682], 3: C[461683] // 订阅的类型 和 模板id
    } };
window.config = config;
var a1C4MJ8 = a1CM8J4();
var HOST = C[461684];
var a1C4M8J = null;
var a1CMJ84 = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

// 初始化SDK
AladinSDK.init(config.wx_app_id, config.game_ver);
// 启动时长上报
AladinSDK.reportWithAppId(config.wx_app_id, C[461685], "");

function a1CM8J4() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(C[461686]);
            var self = this;

            var uuid = wx.getStorageSync(C[461687]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(C[461687], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(C[461688]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(C[461688], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(C[461689], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(C[461690], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                a1CMJ84 = {
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

        login: function (data, callback) {
            console.log(C[461691]);
            callbacks[C[460630]] = typeof callback == C[461354] ? callback : null;
            var self = this;

            AladinSDK.login(function (res) {
                if (res.code == 0) {
                    //登录成功
                    partner_user_info = res;
                    self.do_login(res);

                    console.log(C[461692] + JSON.stringify(res));
                } else {
                    callbacks[C[460630]] && callbacks[C[460630]](1, {
                        errMsg: res.msg
                    });
                    console.log(C[461693] + JSON.stringify(res));
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[C[461694]] = JSON.stringify(info);
            if (a1CMJ84 && typeof a1CMJ84 == C[461253]) {
                for (var key in a1CMJ84) {
                    public_data[key] = a1CMJ84[key];
                }
            }

            wx.request({
                url: C[461695] + HOST + C[461696],
                method: C[460598],
                dataType: C[461599],
                header: {
                    'content-type': C[460736] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(C[461697] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(C[461698], data.data.sdk_token);
                                wx.setStorageSync(C[461699], data.data.user_id);
                                wx.setStorageSync(C[461700], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(C[461701], data.data.ext);
                                }
                            } catch (e) {}
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
                            callbacks[C[460630]] && callbacks[C[460630]](0, userData);
                        } else {
                            callbacks[C[460630]] && callbacks[C[460630]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(C[461702], function (data) {
                            console.log(C[461703]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(C[461702]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[C[460630]] && callbacks[C[460630]](1, {
                            errMsg: C[461704]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[C[460697]] = typeof callback == C[461354] ? callback : null;
            var type = data.type || C[460697];
            console.log(C[461705] + type);
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
            var sdk_token = wx.getStorageSync(C[461698]);
            wx.request({
                url: C[461695] + HOST + C[461706],
                method: C[460598],
                dataType: C[461599],
                header: {
                    'content-type': C[460736] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: a1C4M8J ? a1C4M8J.server_id : '',
                    role_id: a1C4M8J ? a1C4M8J.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(C[461707]);
            var sdk_token = wx.getStorageSync(C[461698]);
            wx.request({
                url: C[461695] + HOST + C[461708],
                method: C[460598],
                dataType: C[461599],
                header: {
                    'content-type': C[460736] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(C[461709] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callback && callback({
                                develop: 0
                            });
                        }
                    } else {
                        callback && callback({
                            develop: 0
                        });
                    }
                }
            });
        },

        getShareInfo: function (type, callback) {
            console.log(C[461710]);
            var sdk_token = wx.getStorageSync(C[461698]);
            wx.request({
                url: C[461695] + HOST + C[461711],
                method: C[460598],
                dataType: C[461599],
                header: {
                    'content-type': C[460736] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: a1C4M8J ? a1C4M8J.server_id : '',
                    role_id: a1C4M8J ? a1C4M8J.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(C[461712]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[C[460697]] && callbacks[C[460697]](1, {
                                errMsg: C[461713] + data.msg
                            });
                        }
                    } else {
                        callbacks[C[460697]] && callbacks[C[460697]](1, {
                            errMsg: C[461714]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(C[461715]);
            var sdk_token = wx.getStorageSync(C[461698]);
            wx.request({
                url: C[461695] + HOST + C[461716],
                method: C[460598],
                dataType: C[461599],
                header: {
                    'content-type': C[460736] // 默认值
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
                    console.log(C[461717] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(C[461718] + content);

            AladinSDK.msgCheck(content, function (res) {
                if (res.ret == 0) {
                    //合法
                    console.log(res.content); //传的内容“123”
                    callback && callback({ data: { state: 1 } });
                } else {
                    console.log(res.msg); //不合法
                    callback && callback({ data: { state: 0 } });
                }
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(C[461719] + JSON.stringify(data));

            var self = this;
            callbacks[C[460684]] = typeof callback == C[461354] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(C[461698]);
            var session_key = wx.getStorageSync(C[461701]);
            if (!sdk_token) {
                callbacks[C[460684]] && callbacks[C[460684]](1, {
                    errMsg: C[461720]
                });
                return;
            }

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
                platform: platform
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[C[461721]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: C[461695] + HOST + C[461722],
                method: C[460598],
                dataType: C[461599],
                header: {
                    'content-type': C[460736] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(C[461723] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            var pay_data = {
                                appid: config.wx_app_id,
                                amount: data.data.pay_data.amount,
                                pid: data.data.pay_data.productId,
                                orderTitle: data.data.pay_data.productName,
                                orderDesc: data.data.pay_data.productDec,
                                imgUrl: "",
                                limit: 0,
                                params: data.data.pay_data.orderId,
                                zone_id: 0,
                                role_id: data.data.pay_data.roleId,
                                cb: function (res) {
                                    console.log(C[461724], res);
                                }
                            };
                            AladinSDK.midasPay(pay_data);
                        } else {
                            callbacks[C[460684]] && callbacks[C[460684]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[C[460630]] && callbacks[C[460630]](1, {
                            errMsg: C[461704]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(C[461699]);
            var username = wx.getStorageSync(C[461700]);

            var postData = {};
            postData[C[461725]] = uid;
            postData[C[461726]] = username;
            postData[C[461727]] = data.roleid;
            postData[C[461728]] = data.rolelevel;
            postData[C[461729]] = data.rolename;
            postData[C[460020]] = data.serverid;

            if (data.roleid && data.serverid) {
                a1C4M8J = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(C[460150], postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(C[461699]);
            var username = wx.getStorageSync(C[461700]);

            var postData = {};
            postData[C[461725]] = uid;
            postData[C[461726]] = username;
            postData[C[461727]] = data.roleid;
            postData[C[461728]] = data.rolelevel;
            postData[C[461729]] = data.rolename;
            postData[C[460020]] = data.serverid;

            if (data.roleid && data.serverid) {
                a1C4M8J = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(C[461730], postData);

            // 渠道 openid上报
            AladinSDK.reportOpenId(partner_user_info.openid);

            //进入游戏确认邀请成功
            if (a1CMJ84) {
                this.updateShare(a1CMJ84.invite, a1CMJ84.invite_type, a1CMJ84.is_new, data.roleid, data.serverid, a1CMJ84.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(C[461699]);
            var username = wx.getStorageSync(C[461700]);

            var postData = {};
            postData[C[461725]] = uid;
            postData[C[461726]] = username;
            postData[C[461727]] = data.roleid;
            postData[C[461728]] = data.rolelevel;
            postData[C[461729]] = data.rolename;
            postData[C[460020]] = data.serverid;

            if (data.roleid && data.serverid) {
                a1C4M8J = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(C[461731], postData);

            // 渠道上报
            AladinSDK.reportWithAppId(config.wx_app_id, C[461732], data.rolelevel);
            AladinSDK.reportCheck(); //查看所有上报项的上报情况
            AladinSDK.reportCheckSingle(C[460121]); //查看指定上报项的上报情况
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = C[461733].split('');
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
            var uuid = wx.getStorageSync(C[461687]);
            var idfv = wx.getStorageSync(C[461688]);
            var ad_code = wx.getStorageSync(C[461689]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: C[461734],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : C[461735],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == C[460106] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(C[461736] + type);
            console.log(public_data);

            wx.request({
                url: C[461695] + HOST + C[461737] + type + C[461738] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        // 监听主域接收 wx.shareMessageToFriend 接口的成功失败通知
        onShareMessageToFriend: function (callback) {
            wx.onShareMessageToFriend(function (res) {
                callback(res);
            });
        },

        // 渠道自定义上报
        reportAnalytics: function (step) {
            console.log(C[461739] + step);
            AladinSDK.reportAnalytics(config.wx_app_id, step); //step只能为1-50的数字
        }

    };
}

function run(method, data, callback) {
    method in a1C4MJ8 && a1C4MJ8[method](data, callback);
}

exports.init = function (data, callback) {
    run(C[460453], data, callback);
};

exports.login = function (callback) {
    run(C[460630], '', callback);
};

exports.login = function (callback) {
    run(C[460630], '', callback);
};

exports.pay = function (data, callback) {
    run(C[460684], data, callback);
};

exports.openService = function () {
    run(C[460698]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(C[460692], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(C[460694], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(C[460696], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(C[460697], data);
};

exports.msgCheck = function (data, callback) {
    run(C[460582], data, callback);
};

exports.downloadClient = function () {
    run(C[461740]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(C[461741]);
};

exports.onShareMessageToFriend = function (callback) {
    run(C[461742], callback);
};

exports.reportAnalytics = function (step) {
    run(C[461743], step);
};