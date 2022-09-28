var g = wx.$Q;
import Gzsdk from '../utils/gzsdk';
import md5 from '../utils/md5';
//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: g[291496], //趣侬vs果子--全民来打怪
    partner_label: g[291497],
    partner_id: g[291498],
    game_ver: g[291499],
    is_auth: false, //授权登录
    partner_game_id: g[291500],
    partner_channel_id: g[291501],
    partner_app_id: g[291502],
    partner_secret: g[291503]
};
window.config = config;
var _qAO7YU = _qA7UYO();
var HOST = g[291504];
var _qAO7UY = null;
var _qA7YUO = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

const gzsdk = new Gzsdk();

function _qA7UYO() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(g[291505]);
            var self = this;

            var uuid = wx.getStorageSync(g[291506]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(g[291506], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(g[291507]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(g[291507], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(g[291508], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(g[261246], data);
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                _qA7YUO = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }

            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    gzsdk.init({ game_id: config.partner_game_id, channel_id: config.partner_channel_id, appid: config.partner_app_id,
                        version: game_ver }, function (_res) {
                        console.log(g[291509] + JSON.stringify(_res));
                        data.res_msg = _res.res_msg;
                        callback && callback(data);
                        if (_res && 200 == _res.res_code) {
                            // 初始化成功，可以调用后续接口
                            if (1 == _res.res_msg.iosPay) {
                                // 开启 IOS 支付
                            } else {
                                    // 不开启 IOS 支付
                                }
                        } else {
                                // 初始化失败，不能调用后续接口
                            }
                    });
                });
            }
        },

        login: function (data, callback) {
            console.log(g[291510]);
            callbacks[g[260304]] = typeof callback == g[291511] ? callback : null;
            var self = this;

            gzsdk.login(function (_res) {
                if (_res && 200 == _res.res_code) {
                    // 登录成功
                    console.log(g[291512] + JSON.stringify(_res));
                    self.do_login(_res.res_msg);
                } else {
                    // 登录失败
                    console.log(g[291513] + JSON.stringify(_res));
                }
            });
        },

        do_login: function (info) {
            var self = this;
            //发起网络请求
            var public_data = self.getPublicData();
            public_data[g[291514]] = JSON.stringify(info);
            if (_qA7YUO && typeof _qA7YUO == g[261241]) {
                for (var key in _qA7YUO) {
                    public_data[key] = _qA7YUO[key];
                }
            }

            wx.request({
                url: g[287259] + HOST + g[291515],
                method: g[260263],
                dataType: g[266293],
                header: {
                    'content-type': g[260469] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(g[291516] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_info = {
                                user_id: data.data.ext.partner_uid,
                                token: info.token
                            };
                            try {
                                wx.setStorageSync(g[291517], data.data.sdk_token);
                                wx.setStorageSync(g[291518], data.data.user_id);
                                wx.setStorageSync(g[291519], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(g[291520], data.data.ext);
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
                            callbacks[g[260304]] && callbacks[g[260304]](0, userData);
                        } else {
                            callbacks[g[260304]] && callbacks[g[260304]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(g[291521], function (data) {
                            console.log(g[291522]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(g[291521]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[g[260304]] && callbacks[g[260304]](1, {
                            errMsg: g[291523]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[g[260422]] = typeof callback == g[291511] ? callback : null;
            var type = data.type || g[260422];
            console.log(g[291524] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);
                var query_str = data.query;
                wx.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(g[291517]);
            wx.request({
                url: g[287259] + HOST + g[291525],
                method: g[260263],
                dataType: g[266293],
                header: {
                    'content-type': g[260469] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: _qAO7UY ? _qAO7UY.server_id : '',
                    role_id: _qAO7UY ? _qAO7UY.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(g[291526]);
            var sdk_token = wx.getStorageSync(g[291517]);
            wx.request({
                url: g[287259] + HOST + g[291527],
                method: g[260263],
                dataType: g[266293],
                header: {
                    'content-type': g[260469] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(g[291528] + JSON.stringify(res));

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
            console.log(g[291529]);
            var sdk_token = wx.getStorageSync(g[291517]);
            wx.request({
                url: g[287259] + HOST + g[291530],
                method: g[260263],
                dataType: g[266293],
                header: {
                    'content-type': g[260469] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: _qAO7UY ? _qAO7UY.server_id : '',
                    role_id: _qAO7UY ? _qAO7UY.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(g[291531]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[g[260422]] && callbacks[g[260422]](1, {
                                errMsg: g[291532] + data.msg
                            });
                        }
                    } else {
                        callbacks[g[260422]] && callbacks[g[260422]](1, {
                            errMsg: g[291533]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(g[291534]);
            var sdk_token = wx.getStorageSync(g[291517]);
            wx.request({
                url: g[287259] + HOST + g[291535],
                method: g[260263],
                dataType: g[266293],
                header: {
                    'content-type': g[260469] // 默认值
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
                    console.log(g[291536] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(g[291537] + content);

            let ret = {
                data: {}
            };
            gzsdk.msgCheck({
                user_id: partner_user_info.user_id,
                content: content
            }, function (_res) {
                if (_res && 200 == _res.res_code) {
                    // 成功
                    ret.data.state = 1;
                    ret.statusCode = 200;
                } else {
                    // 失败
                    ret.data.state = 0;
                    ret.statusCode = 200;
                }
                callback && callback(ret);
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(g[291538] + JSON.stringify(data));

            var self = this;
            callbacks[g[260398]] = typeof callback == g[291511] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(g[291517]);
            var session_key = wx.getStorageSync(g[291520]);
            if (!sdk_token) {
                callbacks[g[260398]] && callbacks[g[260398]](1, {
                    errMsg: g[291539]
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
                platform: platform,
                user_id: partner_user_info.user_id
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[g[291540]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: g[287259] + HOST + g[291541],
                method: g[260263],
                dataType: g[266293],
                header: {
                    'content-type': g[260469] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(g[291542] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            if (data.data.ext == '') {
                                gzsdk.pay(data.data.pay_data, function (res) {
                                    console.log(g[291543] + JSON.stringify(res));
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[g[260398]] && callbacks[g[260398]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[g[260304]] && callbacks[g[260304]](1, {
                            errMsg: g[291523]
                        });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: g[291544] + data.ext2.trade_id + g[291545] + data.ext2.total_fee / 100,
                extraData: {},
                envVersion: g[291546],
                success(res) {
                    // 打开成功
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(g[291518]);
            var username = wx.getStorageSync(g[291519]);

            var postData = {};
            postData[g[291547]] = uid;
            postData[g[291548]] = username;
            postData[g[271548]] = data.roleid;
            postData[g[291549]] = data.rolelevel;
            postData[g[291550]] = data.rolename;
            postData[g[260025]] = data.serverid;

            if (data.roleid && data.serverid) {
                _qAO7UY = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(g[260565], postData);
            var time = Date.parse(new Date()).toString();
            time = time.substr(0, 10);
            var params = {
                "action": g[291551],
                "event_time": time,
                "user_id": partner_user_info.user_id,
                "game_id": config.partner_game_id,
                "game_server": data.serverid, // 必填,游戏服ID
                "server_name": data.servername, // 必填,游戏服名称
                "role_id": data.roleid, // 必填,角色ID
                "role_name": data.rolename, // 必填,角色名称
                "role_gender": 0 // 必填,角色等级
            };
            let sorted = {};
            var keys = Object.keys(params);
            keys.sort();
            keys.forEach(key => {
                sorted[key] = params[key];
            });
            var s1 = '';
            Object.getOwnPropertyNames(sorted).forEach(function (key) {
                if ("" != sorted[key]) {
                    s1 += key + "=" + sorted[key] + "&";
                }
            });

            var s2 = s1 + g[291552] + config.partner_secret;
            params[g[260335]] = md5(s2).toUpperCase();
            gzsdk.report(params);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(g[291518]);
            var username = wx.getStorageSync(g[291519]);

            var postData = {};
            postData[g[291547]] = uid;
            postData[g[291548]] = username;
            postData[g[271548]] = data.roleid;
            postData[g[291549]] = data.rolelevel;
            postData[g[291550]] = data.rolename;
            postData[g[260025]] = data.serverid;

            if (data.roleid && data.serverid) {
                _qAO7UY = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(g[266175], postData);

            //进入游戏确认邀请成功
            if (_qA7YUO) {
                this.updateShare(_qA7YUO.invite, _qA7YUO.invite_type, _qA7YUO.is_new, data.roleid, data.serverid, _qA7YUO.scene);
            }

            var params = {
                "action": g[291553],
                "user_id": partner_user_info.user_id,
                "game_id": config.partner_game_id,
                "game_server": data.serverid, // 必填,游戏服ID
                "server_name": data.servername, // 必填,游戏服名称
                "role_id": data.roleid, // 必填,角色ID
                "role_name": data.rolename, // 必填,角色名称
                "role_level": data.rolelevel,
                "role_gender": 0, // 必填,角色等级
                "role_power": 0,
                "vip_level": 0
            };
            gzsdk.report(params);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(g[291518]);
            var username = wx.getStorageSync(g[291519]);

            var postData = {};
            postData[g[291547]] = uid;
            postData[g[291548]] = username;
            postData[g[271548]] = data.roleid;
            postData[g[291549]] = data.rolelevel;
            postData[g[291550]] = data.rolename;
            postData[g[260025]] = data.serverid;

            if (data.roleid && data.serverid) {
                _qAO7UY = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                    server_name: data.servername,
                    role_name: data.rolename,
                    role_level: data.rolelevel,
                    role_createtime: data.rolecreatetime
                };
            }

            this.log(g[291554], postData);
            var time = Date.parse(new Date()).toString();
            time = time.substr(0, 10);
            var params = {
                "action": g[291555],
                "event_time": time,
                "user_id": partner_user_info.user_id,
                "game_id": config.partner_game_id,
                "game_server": data.serverid, // 必填,游戏服ID
                "server_name": data.servername, // 必填,游戏服名称
                "role_id": data.roleid, // 必填,角色ID
                "role_name": data.rolename, // 必填,角色名称
                "role_level": data.rolelevel,
                "role_gender": 0, // 必填,角色等级
                "role_power": 0,
                "vip_level": 0
            };
            gzsdk.report(params);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = g[291556].split('');
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
            var uuid = wx.getStorageSync(g[291506]);
            var idfv = wx.getStorageSync(g[291507]);
            var ad_code = wx.getStorageSync(g[291508]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: g[291557],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : g[291558],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == g[260124] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(g[291559] + type);
            console.log(public_data);

            wx.request({
                url: g[287259] + HOST + g[291560] + type + g[291561] + encodeURIComponent(JSON.stringify(public_data))
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

        subscribeMessage: function (tmplIds, callback) {
            console.log(g[291562] + tmplIds);
            //获取模板ID
            callbacks[g[260435]] = typeof callback == g[291511] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(g[291563]);
                    console.log(res);
                    callbacks[g[260435]] && callbacks[g[260435]](res);
                },
                fail(res) {
                    console.log(g[291564]);
                    console.log(res);
                    callbacks[g[260435]] && callbacks[g[260435]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in _qAO7YU && _qAO7YU[method](data, callback);
}

exports.init = function (data, callback) {
    run(g[260276], data, callback);
};

exports.login = function (callback) {
    run(g[260304], '', callback);
};

exports.login = function (callback) {
    run(g[260304], '', callback);
};

exports.pay = function (data, callback) {
    run(g[260398], data, callback);
};

exports.openService = function () {
    run(g[260423]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime
    };
    run(g[260413], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime
    };

    run(g[260416], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime
    };
    run(g[260419], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(g[260422], data);
};

exports.msgCheck = function (data, callback) {
    run(g[260233], data, callback);
};

exports.downloadClient = function () {
    run(g[291565]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(g[291566]);
};

exports.weiduanHelper = function () {
    run(g[260425]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(g[291567], data, callback);
};
exports.subscribeMessage = function (data, callback) {
    run(g[260435], data, callback);
};