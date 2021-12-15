var B = wx.$B;
import zshySdk from '../utils/zshySdk.js';

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: B[521692], //9130vs掌上-我和我的影子
    partner_label: B[521693],
    partner_id: B[521694],
    game_ver: B[521695],
    is_auth: false, //授权登录

    partner_app_id: B[521696],
    partner_channel_id: B[521697],
    partner_ad_id: B[521698],
    partner_ad_flag: B[521699]
};
window.config = config;
var B12NL_S = B12LS_N();
var HOST = B[521700];
var B12NLS_ = null;
var B12L_SN = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

let sdk = new zshySdk();

function B12LS_N() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(B[521701]);
            var self = this;

            var uuid = wx.getStorageSync(B[521702]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(B[521702], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(B[521703]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(B[521703], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            wx.showShareMenu();
            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(B[521704], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(B[521705], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                B12L_SN = {
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
            console.log(B[521706]);
            callbacks[B[520253]] = typeof callback == B[520931] ? callback : null;
            var self = this;
            sdk.init({
                data: {
                    appId: config.partner_app_id,
                    channelId: config.partner_channel_id,
                    adId: config.partner_ad_id,
                    adFlag: config.partner_ad_flag
                },
                success: function () {
                    // 初始化成功
                    sdk.login({
                        success: function (res) {
                            // sdk登陆成功
                            console.log(B[521707] + res.uid + B[521708] + res.token);
                            partner_user_info = res;
                            self.do_login(res);
                        },
                        fail: function () {
                            callbacks[B[520253]] && callbacks[B[520253]](1, {
                                errMsg: B[521709]
                            });
                        }
                    });
                },
                fail: function () {
                    callbacks[B[520253]] && callbacks[B[520253]](1, {
                        errMsg: B[521710]
                    });
                }
            });
        },

        do_login: function (info) {
            var self = this;
            //发起网络请求
            var public_data = self.getPublicData();
            public_data[B[521711]] = JSON.stringify(info);
            if (B12L_SN && typeof B12L_SN == B[520830]) {
                for (var key in B12L_SN) {
                    public_data[key] = B12L_SN[key];
                }
            }

            wx.request({
                url: B[521712] + HOST + B[521713],
                method: B[520218],
                dataType: B[521176],
                header: {
                    'content-type': B[520366] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(B[521714] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(B[521715], data.data.sdk_token);
                                wx.setStorageSync(B[521716], data.data.user_id);
                                wx.setStorageSync(B[521717], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(B[521718], data.data.ext);
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
                            callbacks[B[520253]] && callbacks[B[520253]](0, userData);
                        } else {
                            callbacks[B[520253]] && callbacks[B[520253]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(B[521719], function (data) {
                            console.log(B[521720]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(B[521719]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[B[520253]] && callbacks[B[520253]](1, {
                            errMsg: B[521721]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[B[520326]] = typeof callback == B[520931] ? callback : null;
            var type = data.type || B[520326];
            console.log(B[521722] + type);
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
            var sdk_token = wx.getStorageSync(B[521715]);
            wx.request({
                url: B[521712] + HOST + B[521723],
                method: B[520218],
                dataType: B[521176],
                header: {
                    'content-type': B[520366] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: B12NLS_ ? B12NLS_.server_id : '',
                    role_id: B12NLS_ ? B12NLS_.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(B[521724]);
            var sdk_token = wx.getStorageSync(B[521715]);
            wx.request({
                url: B[521712] + HOST + B[521725],
                method: B[520218],
                dataType: B[521176],
                header: {
                    'content-type': B[520366] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(B[521726] + JSON.stringify(res));

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
            console.log(B[521727]);
            var sdk_token = wx.getStorageSync(B[521715]);
            wx.request({
                url: B[521712] + HOST + B[521728],
                method: B[520218],
                dataType: B[521176],
                header: {
                    'content-type': B[520366] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: B12NLS_ ? B12NLS_.server_id : '',
                    role_id: B12NLS_ ? B12NLS_.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(B[521729]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[B[520326]] && callbacks[B[520326]](1, {
                                errMsg: B[521730] + data.msg
                            });
                        }
                    } else {
                        callbacks[B[520326]] && callbacks[B[520326]](1, {
                            errMsg: B[521731]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(B[521732]);
            var sdk_token = wx.getStorageSync(B[521715]);
            wx.request({
                url: B[521712] + HOST + B[521733],
                method: B[520218],
                dataType: B[521176],
                header: {
                    'content-type': B[520366] // 默认值
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
                    console.log(B[521734] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(B[521735] + content);
            var sdk_token = wx.getStorageSync(B[521715]);

            wx.request({
                url: B[521712] + HOST + B[521736] + config.partner_id + '/' + config.game_pkg,
                method: B[520218],
                dataType: B[521176],
                header: {
                    'content-type': B[520366] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    adId: config.partner_ad_id,
                    uid: partner_user_info.uid,
                    content: content
                },
                success: function (res) {
                    console.log(B[521737]);
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(B[521738] + JSON.stringify(data));

            var self = this;
            callbacks[B[520313]] = typeof callback == B[520931] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(B[521715]);
            var session_key = wx.getStorageSync(B[521718]);
            if (!sdk_token) {
                callbacks[B[520313]] && callbacks[B[520313]](1, {
                    errMsg: B[521739]
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
            public_data[B[521740]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: B[521712] + HOST + B[521741],
                method: B[520218],
                dataType: B[521176],
                header: {
                    'content-type': B[520366] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(B[521742] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            sdk.payCheck({
                                data: data.data.pay_data,
                                success: function () {},
                                fail: function () {}
                            });
                        } else {
                            callbacks[B[520313]] && callbacks[B[520313]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[B[520253]] && callbacks[B[520253]](1, {
                            errMsg: B[521721]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data, callback) {
            var uid = wx.getStorageSync(B[521716]);
            var username = wx.getStorageSync(B[521717]);

            var postData = {};
            postData[B[521743]] = uid;
            postData[B[521744]] = username;
            postData[B[521745]] = data.roleid;
            postData[B[521746]] = data.rolelevel;
            postData[B[521747]] = data.rolename;
            postData[B[520023]] = data.serverid;

            if (data.roleid && data.serverid) {
                B12NLS_ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(B[520439], postData);
            // 渠道上报
            sdk.sendRoleInfo({
                data: {
                    uid: partner_user_info.uid,
                    roleName: data.rolename, // 角色名称
                    roleLev: data.rolelevel + '', // 角色等级
                    gameServerId: data.serverid + '', // 区服id
                    roleId: data.roleid + '' // 角色id
                },
                success: function () {
                    console.log(B[521748]);
                },
                fail: function () {
                    console.log(B[521749]);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(B[521716]);
            var username = wx.getStorageSync(B[521717]);

            var postData = {};
            postData[B[521743]] = uid;
            postData[B[521744]] = username;
            postData[B[521745]] = data.roleid;
            postData[B[521746]] = data.rolelevel;
            postData[B[521747]] = data.rolename;
            postData[B[520023]] = data.serverid;

            if (data.roleid && data.serverid) {
                B12NLS_ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(B[521750], postData);

            //进入游戏确认邀请成功
            if (B12L_SN) {
                this.updateShare(B12L_SN.invite, B12L_SN.invite_type, B12L_SN.is_new, data.roleid, data.serverid, B12L_SN.scene);
            }

            // 渠道上报
            sdk.sendRoleInfo({
                data: {
                    uid: partner_user_info.uid,
                    roleName: data.rolename, // 角色名称
                    roleLev: data.rolelevel + '', // 角色等级
                    gameServerId: data.serverid + '', // 区服id
                    roleId: data.roleid + '' // 角色id
                },
                success: function () {
                    console.log(B[521748]);
                },
                fail: function () {
                    console.log(B[521749]);
                }
            });
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(B[521716]);
            var username = wx.getStorageSync(B[521717]);

            var postData = {};
            postData[B[521743]] = uid;
            postData[B[521744]] = username;
            postData[B[521745]] = data.roleid;
            postData[B[521746]] = data.rolelevel;
            postData[B[521747]] = data.rolename;
            postData[B[520023]] = data.serverid;

            if (data.roleid && data.serverid) {
                B12NLS_ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(B[521751], postData);

            // 渠道上报
            sdk.sendRoleInfo({
                data: {
                    uid: partner_user_info.uid,
                    roleName: data.rolename, // 角色名称
                    roleLev: data.rolelevel + '', // 角色等级
                    gameServerId: data.serverid + '', // 区服id
                    roleId: data.roleid + '' // 角色id
                },
                success: function () {
                    console.log(B[521748]);
                },
                fail: function () {
                    console.log(B[521749]);
                }
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = B[521752].split('');
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
            var uuid = wx.getStorageSync(B[521702]);
            var idfv = wx.getStorageSync(B[521703]);
            var ad_code = wx.getStorageSync(B[521704]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: B[521753],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : B[521754],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == B[520110] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(B[521755] + type);
            console.log(public_data);

            wx.request({
                url: B[521712] + HOST + B[521756] + type + B[521757] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        // 微端小助手
        weiduanHelper: function () {},

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        },

        // 获取互推游戏列表
        getGameList: function (callback) {
            sdk.getGameList(function (res) {
                console.log(B[521758] + JSON.stringify(res));
                callback && callback(res);
            });
        }

    };
}

function run(method, data, callback) {
    method in B12NL_S && B12NL_S[method](data, callback);
}

exports.init = function (data, callback) {
    run(B[520231], data, callback);
};

exports.login = function (callback) {
    run(B[520253], '', callback);
};

exports.login = function (callback) {
    run(B[520253], '', callback);
};

exports.pay = function (data, callback) {
    run(B[520313], data, callback);
};

exports.openService = function () {
    run(B[520327]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower : 0
    };
    run(B[520321], data, extra.callback);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower : 0
    };

    run(B[520323], data, extra ? extra.callback : null);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower : 0
    };
    run(B[520325], data, extra ? extra.callback : null);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(B[520326], data);
};

exports.msgCheck = function (data, callback) {
    run(B[520196], data, callback);
};

exports.downloadClient = function () {
    run(B[521759]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(B[521760]);
};

exports.weiduanHelper = function () {
    run(B[520329]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(B[521761], data, callback);
};

exports.getGameList = function (callback) {
    run(B[521762], callback);
};