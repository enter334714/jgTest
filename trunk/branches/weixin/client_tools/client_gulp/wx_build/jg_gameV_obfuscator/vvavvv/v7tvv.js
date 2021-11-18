var Q = wx.$v;
import sdk from '../utils/gameSDK.bundle';

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: Q[361646], //天剑vs卡卡-六玄之苍
    partner_label: 'kk',
    partner_id: Q[361647],
    game_ver: Q[361648],
    is_auth: false, //授权登录
    tmpId: { 1: '', 2: '', 3: '' // 订阅的类型 和 模板id
    } };
window.config = config;
var _v6KD$O = _v6D$KO();
var HOST = Q[361649];
var _v6DO$K = null;
var _v6DOK$ = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

function _v6D$KO() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(Q[361650]);
            var self = this;

            var uuid = wx.getStorageSync(Q[361651]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(Q[361651], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(Q[361652]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(Q[361652], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(Q[361653], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(Q[361654], data);
            wx.showShareMenu();
            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                _v6DOK$ = {
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
            console.log(Q[361655]);
            callbacks[Q[360252]] = typeof callback == Q[360895] ? callback : null;
            var self = this;

            let opts = wx.getLaunchOptionsSync();
            sdk.init(() => {
                console.log(Q[361656], Date.parse(new Date()) / 1000);
                sdk.entryGame(() => {
                    console.log(Q[361657]);
                    // 获取登录信息
                    console.log(Q[361658], Date.parse(new Date()) / 1000);
                    sdk.cpSDK.loginUserInfo(res => {
                        partner_user_info = res;
                        self.do_login(res);
                    });
                }, error => {
                    console.log(Q[361659], error);
                });
            }, error => {
                console.log(Q[361660], error);
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[Q[361661]] = JSON.stringify(info);
            if (_v6DOK$ && typeof _v6DOK$ == Q[360794]) {
                for (var key in _v6DOK$) {
                    public_data[key] = _v6DOK$[key];
                }
            }

            wx.request({
                url: Q[361662] + HOST + Q[361663],
                method: Q[360217],
                dataType: Q[361140],
                header: {
                    'content-type': Q[360365] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Q[361664] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(Q[361665], data.data.sdk_token);
                                wx.setStorageSync(Q[361666], data.data.user_id);
                                wx.setStorageSync(Q[361667], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(Q[361668], data.data.ext);
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
                            callbacks[Q[360252]] && callbacks[Q[360252]](0, userData);
                        } else {
                            callbacks[Q[360252]] && callbacks[Q[360252]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(Q[361669], function (data) {
                            console.log(Q[361670]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(Q[361669]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[Q[360252]] && callbacks[Q[360252]](1, {
                            errMsg: Q[361671]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[Q[360325]] = typeof callback == Q[360895] ? callback : null;
            var type = data.type || Q[360325];
            console.log(Q[361672] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);

                var query_str = data.query;

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
            var sdk_token = wx.getStorageSync(Q[361665]);
            wx.request({
                url: Q[361662] + HOST + Q[361673],
                method: Q[360217],
                dataType: Q[361140],
                header: {
                    'content-type': Q[360365] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: _v6DO$K ? _v6DO$K.server_id : '',
                    role_id: _v6DO$K ? _v6DO$K.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(Q[361674]);
            var sdk_token = wx.getStorageSync(Q[361665]);
            wx.request({
                url: Q[361662] + HOST + Q[361675],
                method: Q[360217],
                dataType: Q[361140],
                header: {
                    'content-type': Q[360365] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(Q[361676] + JSON.stringify(res));

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
            console.log(Q[361677]);
            var sdk_token = wx.getStorageSync(Q[361665]);
            wx.request({
                url: Q[361662] + HOST + Q[361678],
                method: Q[360217],
                dataType: Q[361140],
                header: {
                    'content-type': Q[360365] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: _v6DO$K ? _v6DO$K.server_id : '',
                    role_id: _v6DO$K ? _v6DO$K.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(Q[361679]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[Q[360325]] && callbacks[Q[360325]](1, {
                                errMsg: Q[361680] + data.msg
                            });
                        }
                    } else {
                        callbacks[Q[360325]] && callbacks[Q[360325]](1, {
                            errMsg: Q[361681]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(Q[361682]);
            var sdk_token = wx.getStorageSync(Q[361665]);
            wx.request({
                url: Q[361662] + HOST + Q[361683],
                method: Q[360217],
                dataType: Q[361140],
                header: {
                    'content-type': Q[360365] // 默认值
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
                    console.log(Q[361684] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(Q[361685] + content);

            let ret = {
                data: {}
            };
            wx.request({
                url: Q[361662] + HOST + Q[361686] + config.partner_id + '/' + config.game_pkg,
                method: Q[360217],
                dataType: Q[361140],
                header: {
                    'content-type': Q[360365] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    content: content
                },
                success: function (res) {
                    if (res.data.state == 1) {
                        ret.statusCode = 200;
                        ret.data.state = 1;
                    } else {
                        ret.statusCode = 0;
                        ret.data.state = 0;
                    }
                    console.log(Q[361687]);
                    console.log(res);
                    callback && callback(ret);
                }
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(Q[361688] + JSON.stringify(data));

            var self = this;
            callbacks[Q[360312]] = typeof callback == Q[360895] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(Q[361665]);
            var session_key = wx.getStorageSync(Q[361668]);
            if (!sdk_token) {
                callbacks[Q[360312]] && callbacks[Q[360312]](1, {
                    errMsg: Q[361689]
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
                uid: partner_user_info.uid
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[Q[361690]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: Q[361662] + HOST + Q[361691],
                method: Q[360217],
                dataType: Q[361140],
                header: {
                    'content-type': Q[360365] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Q[361692] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            sdk.cpSDK.makePayment(data.data.pay_data);
                        } else {
                            callbacks[Q[360312]] && callbacks[Q[360312]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[Q[360252]] && callbacks[Q[360252]](1, {
                            errMsg: Q[361671]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(Q[361666]);
            var username = wx.getStorageSync(Q[361667]);

            var postData = {};
            postData[Q[361693]] = uid;
            postData[Q[361694]] = username;
            postData[Q[361695]] = data.roleid;
            postData[Q[361696]] = data.rolelevel;
            postData[Q[361697]] = data.rolename;
            postData[Q[360022]] = data.serverid;

            if (data.roleid && data.serverid) {
                _v6DO$K = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Q[360437], postData);
            var object = {
                data_type: 2,
                zone_id: data.serverid,
                zone_name: data.servername,
                role_id: data.roleid,
                role_name: data.rolename,
                role_level: data.rolelevel,
                role_currency: 1

            };
            sdk.cpSDK.dataReport(object);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(Q[361666]);
            var username = wx.getStorageSync(Q[361667]);

            var postData = {};
            postData[Q[361693]] = uid;
            postData[Q[361694]] = username;
            postData[Q[361695]] = data.roleid;
            postData[Q[361696]] = data.rolelevel;
            postData[Q[361697]] = data.rolename;
            postData[Q[360022]] = data.serverid;

            if (data.roleid && data.serverid) {
                _v6DO$K = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Q[361698], postData);

            //进入游戏确认邀请成功
            if (_v6DOK$) {
                this.updateShare(_v6DOK$.invite, _v6DOK$.invite_type, _v6DOK$.is_new, data.roleid, data.serverid, _v6DOK$.scene);
            }

            var object = {
                data_type: 3,
                zone_id: data.serverid,
                zone_name: data.servername,
                role_id: data.roleid,
                role_name: data.rolename,
                role_level: data.rolelevel,
                role_currency: 1

            };
            sdk.cpSDK.dataReport(object);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(Q[361666]);
            var username = wx.getStorageSync(Q[361667]);

            var postData = {};
            postData[Q[361693]] = uid;
            postData[Q[361694]] = username;
            postData[Q[361695]] = data.roleid;
            postData[Q[361696]] = data.rolelevel;
            postData[Q[361697]] = data.rolename;
            postData[Q[360022]] = data.serverid;

            if (data.roleid && data.serverid) {
                _v6DO$K = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Q[361699], postData);

            var object = {
                data_type: 4,
                zone_id: data.serverid,
                zone_name: data.servername,
                role_id: data.roleid,
                role_name: data.rolename,
                role_level: data.rolelevel,
                role_currency: 1

            };
            sdk.cpSDK.dataReport(object);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = Q[361700].split('');
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
            var uuid = wx.getStorageSync(Q[361651]);
            var idfv = wx.getStorageSync(Q[361652]);
            var ad_code = wx.getStorageSync(Q[361653]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: Q[361701],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : Q[361702],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == Q[360109] ? 1 : 2
            };
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(Q[361703] + tmplIds);
            //获取模板ID
            callbacks[Q[360334]] = typeof callback == Q[360895] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(Q[361704]);
                    console.log(res);
                    callbacks[Q[360334]] && callbacks[Q[360334]](res);
                },
                fail(res) {
                    console.log(Q[361705]);
                    console.log(res);
                    callbacks[Q[360334]] && callbacks[Q[360334]](res);
                }
            });
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(Q[361706] + type);
            console.log(public_data);

            wx.request({
                url: Q[361662] + HOST + Q[361707] + type + Q[361708] + encodeURIComponent(JSON.stringify(public_data))
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
        }

    };
}

function run(method, data, callback) {
    method in _v6KD$O && _v6KD$O[method](data, callback);
}

exports.init = function (data, callback) {
    run(Q[360230], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(Q[360334], data, callback);
};

exports.login = function (callback) {
    run(Q[360252], '', callback);
};

exports.login = function (callback) {
    run(Q[360252], '', callback);
};

exports.pay = function (data, callback) {
    run(Q[360312], data, callback);
};

exports.openService = function () {
    run(Q[360326]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Q[360320], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(Q[360322], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Q[360324], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(Q[360325], data);
};

exports.msgCheck = function (data, callback) {
    run(Q[360195], data, callback);
};

exports.downloadClient = function () {
    run(Q[361709]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(Q[361710]);
};

exports.weiduanHelper = function () {
    run(Q[360328]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(Q[361711], data, callback);
};