var C = wx.$a;
// const {AladinSDK} = require('./a5ssha.js');
import helper from "./a5ssha.js";
var AladinSDK = helper.AladinSDK;
//TODO 替换对应参数
var config = {
    game_id: C[489703],
    game_pkg: C[489704], //萌蛋-仙尘-九阳服
    partner_label: C[489705],
    partner_id: C[489706],
    game_ver: C[489707],
    is_auth: false, //授权登录
    wx_app_id: C[489708],
    tmpId: { 1: C[489709], 2: C[489710], 3: C[489711] // 订阅的类型 和 模板id
    } };
window.config = config;
var a1C4MJ8 = a1CM8J4();
var HOST = C[489712];
var a1C4M8J = null;
var a1CMJ84 = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

// 初始化SDK
AladinSDK.init(config.wx_app_id, config.game_ver);
// 启动时长上报
AladinSDK.reportWithAppId(config.wx_app_id, C[489713], "");

function a1CM8J4() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(C[489714]);
            var self = this;

            var uuid = wx.getStorageSync(C[489715]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(C[489715], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(C[489716]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(C[489716], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(C[489717], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(C[461890], data);

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
            console.log(C[489718]);
            callbacks[C[460632]] = typeof callback == C[461353] ? callback : null;
            var self = this;

            AladinSDK.login(function (res) {
                if (res.code == 0) {
                    //登录成功
                    partner_user_info = res;
                    self.do_login(res);

                    console.log(C[489719] + JSON.stringify(res));
                } else {
                    callbacks[C[460632]] && callbacks[C[460632]](1, {
                        errMsg: res.msg
                    });
                    console.log(C[489720] + JSON.stringify(res));
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[C[489721]] = JSON.stringify(info);
            if (a1CMJ84 && typeof a1CMJ84 == C[461252]) {
                for (var key in a1CMJ84) {
                    public_data[key] = a1CMJ84[key];
                }
            }

            wx.request({
                url: C[486723] + HOST + C[489722],
                method: C[460600],
                dataType: C[461598],
                header: {
                    'content-type': C[460736] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(C[489723] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(C[489724], data.data.sdk_token);
                                wx.setStorageSync(C[489725], data.data.user_id);
                                wx.setStorageSync(C[489726], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(C[489727], data.data.ext);
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
                            callbacks[C[460632]] && callbacks[C[460632]](0, userData);
                        } else {
                            callbacks[C[460632]] && callbacks[C[460632]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(C[489728], function (data) {
                            console.log(C[489729]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(C[489728]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[C[460632]] && callbacks[C[460632]](1, {
                            errMsg: C[489730]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[C[460699]] = typeof callback == C[461353] ? callback : null;
            var type = data.type || C[460699];
            console.log(C[489731] + type);
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
            var sdk_token = wx.getStorageSync(C[489724]);
            wx.request({
                url: C[486723] + HOST + C[489732],
                method: C[460600],
                dataType: C[461598],
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
            console.log(C[489733]);
            var sdk_token = wx.getStorageSync(C[489724]);
            wx.request({
                url: C[486723] + HOST + C[489734],
                method: C[460600],
                dataType: C[461598],
                header: {
                    'content-type': C[460736] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(C[489735] + JSON.stringify(res));

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
            console.log(C[489736]);
            var sdk_token = wx.getStorageSync(C[489724]);
            wx.request({
                url: C[486723] + HOST + C[489737],
                method: C[460600],
                dataType: C[461598],
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
                    console.log(C[489738]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[C[460699]] && callbacks[C[460699]](1, {
                                errMsg: C[489739] + data.msg
                            });
                        }
                    } else {
                        callbacks[C[460699]] && callbacks[C[460699]](1, {
                            errMsg: C[489740]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(C[489741]);
            var sdk_token = wx.getStorageSync(C[489724]);
            wx.request({
                url: C[486723] + HOST + C[489742],
                method: C[460600],
                dataType: C[461598],
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
                    console.log(C[489743] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(C[489744] + content);

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
            console.log(C[489745] + JSON.stringify(data));

            var self = this;
            callbacks[C[460686]] = typeof callback == C[461353] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(C[489724]);
            var session_key = wx.getStorageSync(C[489727]);
            if (!sdk_token) {
                callbacks[C[460686]] && callbacks[C[460686]](1, {
                    errMsg: C[489746]
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
            public_data[C[489747]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: C[486723] + HOST + C[489748],
                method: C[460600],
                dataType: C[461598],
                header: {
                    'content-type': C[460736] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(C[489749] + JSON.stringify(res));
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
                                    console.log(C[489750], res);
                                }
                            };
                            AladinSDK.midasPay(pay_data);
                        } else {
                            callbacks[C[460686]] && callbacks[C[460686]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[C[460632]] && callbacks[C[460632]](1, {
                            errMsg: C[489730]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(C[489725]);
            var username = wx.getStorageSync(C[489726]);

            var postData = {};
            postData[C[489751]] = uid;
            postData[C[489752]] = username;
            postData[C[472255]] = data.roleid;
            postData[C[489753]] = data.rolelevel;
            postData[C[489754]] = data.rolename;
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
            var uid = wx.getStorageSync(C[489725]);
            var username = wx.getStorageSync(C[489726]);

            var postData = {};
            postData[C[489751]] = uid;
            postData[C[489752]] = username;
            postData[C[472255]] = data.roleid;
            postData[C[489753]] = data.rolelevel;
            postData[C[489754]] = data.rolename;
            postData[C[460020]] = data.serverid;

            if (data.roleid && data.serverid) {
                a1C4M8J = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(C[467184], postData);

            // 渠道 openid上报
            AladinSDK.reportOpenId(partner_user_info.openid);

            //进入游戏确认邀请成功
            if (a1CMJ84) {
                this.updateShare(a1CMJ84.invite, a1CMJ84.invite_type, a1CMJ84.is_new, data.roleid, data.serverid, a1CMJ84.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(C[489725]);
            var username = wx.getStorageSync(C[489726]);

            var postData = {};
            postData[C[489751]] = uid;
            postData[C[489752]] = username;
            postData[C[472255]] = data.roleid;
            postData[C[489753]] = data.rolelevel;
            postData[C[489754]] = data.rolename;
            postData[C[460020]] = data.serverid;

            if (data.roleid && data.serverid) {
                a1C4M8J = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(C[489755], postData);

            // 渠道上报
            AladinSDK.reportWithAppId(config.wx_app_id, C[489756], data.rolelevel);
            AladinSDK.reportCheck(); //查看所有上报项的上报情况
            AladinSDK.reportCheckSingle(C[460121]); //查看指定上报项的上报情况
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = C[489757].split('');
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
            var uuid = wx.getStorageSync(C[489715]);
            var idfv = wx.getStorageSync(C[489716]);
            var ad_code = wx.getStorageSync(C[489717]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: C[489758],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : C[489759],
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

            console.log(C[489760] + type);
            console.log(public_data);

            wx.request({
                url: C[486723] + HOST + C[489761] + type + C[489762] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(C[489763] + step);
            AladinSDK.reportAnalytics(config.wx_app_id, step); //step只能为1-50的数字
        }

    };
}

function run(method, data, callback) {
    method in a1C4MJ8 && a1C4MJ8[method](data, callback);
}

exports.init = function (data, callback) {
    run(C[460455], data, callback);
};

exports.login = function (callback) {
    run(C[460632], '', callback);
};

exports.login = function (callback) {
    run(C[460632], '', callback);
};

exports.pay = function (data, callback) {
    run(C[460686], data, callback);
};

exports.openService = function () {
    run(C[460700]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(C[460694], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(C[460696], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(C[460698], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(C[460699], data);
};

exports.msgCheck = function (data, callback) {
    run(C[460584], data, callback);
};

exports.downloadClient = function () {
    run(C[489764]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(C[489765]);
};

exports.onShareMessageToFriend = function (callback) {
    run(C[489766], callback);
};

exports.reportAnalytics = function (step) {
    run(C[489767], step);
};