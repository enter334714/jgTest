var Q = wx.$v;
import sdk from '../utils/gameSDK.bundle';

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: Q[360783], //天剑vs卡卡-六玄之苍
    partner_label: 'kk',
    partner_id: Q[360784],
    game_ver: Q[360785],
    is_auth: false, //授权登录
    tmpId: { 1: '', 2: '', 3: '' // 订阅的类型 和 模板id
    } };
window.config = config;
var _vNGUCQ = _vNUCGQ();
var HOST = Q[360786];
var _vNUQCG = null;
var _vNUQGC = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

function _vNUCGQ() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(Q[360787]);
            var self = this;

            var uuid = wx.getStorageSync(Q[360788]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(Q[360788], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(Q[360789]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(Q[360789], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(Q[360790], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(Q[360791], data);
            wx.showShareMenu();
            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                _vNUQGC = {
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
            console.log(Q[360792]);
            callbacks[Q[360252]] = typeof callback == Q[360793] ? callback : null;
            var self = this;

            let opts = wx.getLaunchOptionsSync();
            sdk.init(() => {
                console.log(Q[360794], Date.parse(new Date()) / 1000);
                sdk.entryGame(() => {
                    console.log(Q[360795]);
                    // 获取登录信息
                    console.log(Q[360796], Date.parse(new Date()) / 1000);
                    sdk.cpSDK.loginUserInfo(res => {
                        partner_user_info = res;
                        self.do_login(res);
                    });
                }, error => {
                    console.log(Q[360797], error);
                });
            }, error => {
                console.log(Q[360798], error);
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[Q[360799]] = JSON.stringify(info);
            if (_vNUQGC && typeof _vNUQGC == Q[360800]) {
                for (var key in _vNUQGC) {
                    public_data[key] = _vNUQGC[key];
                }
            }

            wx.request({
                url: Q[360801] + HOST + Q[360802],
                method: Q[360217],
                dataType: Q[360803],
                header: {
                    'content-type': Q[360365] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Q[360804] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(Q[360805], data.data.sdk_token);
                                wx.setStorageSync(Q[360806], data.data.user_id);
                                wx.setStorageSync(Q[360807], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(Q[360808], data.data.ext);
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

                        self.getShareInfo(Q[360809], function (data) {
                            console.log(Q[360810]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(Q[360809]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[Q[360252]] && callbacks[Q[360252]](1, {
                            errMsg: Q[360811]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[Q[360322]] = typeof callback == Q[360793] ? callback : null;
            var type = data.type || Q[360322];
            console.log(Q[360812] + type);
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
            var sdk_token = wx.getStorageSync(Q[360805]);
            wx.request({
                url: Q[360801] + HOST + Q[360813],
                method: Q[360217],
                dataType: Q[360803],
                header: {
                    'content-type': Q[360365] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: _vNUQCG ? _vNUQCG.server_id : '',
                    role_id: _vNUQCG ? _vNUQCG.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(Q[360814]);
            var sdk_token = wx.getStorageSync(Q[360805]);
            wx.request({
                url: Q[360801] + HOST + Q[360815],
                method: Q[360217],
                dataType: Q[360803],
                header: {
                    'content-type': Q[360365] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(Q[360816] + JSON.stringify(res));

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
            console.log(Q[360817]);
            var sdk_token = wx.getStorageSync(Q[360805]);
            wx.request({
                url: Q[360801] + HOST + Q[360818],
                method: Q[360217],
                dataType: Q[360803],
                header: {
                    'content-type': Q[360365] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: _vNUQCG ? _vNUQCG.server_id : '',
                    role_id: _vNUQCG ? _vNUQCG.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(Q[360819]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[Q[360322]] && callbacks[Q[360322]](1, {
                                errMsg: Q[360820] + data.msg
                            });
                        }
                    } else {
                        callbacks[Q[360322]] && callbacks[Q[360322]](1, {
                            errMsg: Q[360821]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(Q[360822]);
            var sdk_token = wx.getStorageSync(Q[360805]);
            wx.request({
                url: Q[360801] + HOST + Q[360823],
                method: Q[360217],
                dataType: Q[360803],
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
                    console.log(Q[360824] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(Q[360825] + content);

            let ret = {
                data: {}
            };
            wx.request({
                url: Q[360801] + HOST + Q[360826] + config.partner_id + '/' + config.game_pkg,
                method: Q[360217],
                dataType: Q[360803],
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
                    console.log(Q[360827]);
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
            console.log(Q[360828] + JSON.stringify(data));

            var self = this;
            callbacks[Q[360309]] = typeof callback == Q[360793] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(Q[360805]);
            var session_key = wx.getStorageSync(Q[360808]);
            if (!sdk_token) {
                callbacks[Q[360309]] && callbacks[Q[360309]](1, {
                    errMsg: Q[360829]
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
            public_data[Q[360830]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: Q[360801] + HOST + Q[360831],
                method: Q[360217],
                dataType: Q[360803],
                header: {
                    'content-type': Q[360365] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Q[360832] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            sdk.cpSDK.makePayment(data.data.pay_data);
                        } else {
                            callbacks[Q[360309]] && callbacks[Q[360309]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[Q[360252]] && callbacks[Q[360252]](1, {
                            errMsg: Q[360811]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(Q[360806]);
            var username = wx.getStorageSync(Q[360807]);

            var postData = {};
            postData[Q[360833]] = uid;
            postData[Q[360834]] = username;
            postData[Q[360835]] = data.roleid;
            postData[Q[360836]] = data.rolelevel;
            postData[Q[360837]] = data.rolename;
            postData[Q[360022]] = data.serverid;

            if (data.roleid && data.serverid) {
                _vNUQCG = {
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
            var uid = wx.getStorageSync(Q[360806]);
            var username = wx.getStorageSync(Q[360807]);

            var postData = {};
            postData[Q[360833]] = uid;
            postData[Q[360834]] = username;
            postData[Q[360835]] = data.roleid;
            postData[Q[360836]] = data.rolelevel;
            postData[Q[360837]] = data.rolename;
            postData[Q[360022]] = data.serverid;

            if (data.roleid && data.serverid) {
                _vNUQCG = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Q[360838], postData);

            //进入游戏确认邀请成功
            if (_vNUQGC) {
                this.updateShare(_vNUQGC.invite, _vNUQGC.invite_type, _vNUQGC.is_new, data.roleid, data.serverid, _vNUQGC.scene);
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
            var uid = wx.getStorageSync(Q[360806]);
            var username = wx.getStorageSync(Q[360807]);

            var postData = {};
            postData[Q[360833]] = uid;
            postData[Q[360834]] = username;
            postData[Q[360835]] = data.roleid;
            postData[Q[360836]] = data.rolelevel;
            postData[Q[360837]] = data.rolename;
            postData[Q[360022]] = data.serverid;

            if (data.roleid && data.serverid) {
                _vNUQCG = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Q[360839], postData);

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
            var chars = Q[360840].split('');
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
            var uuid = wx.getStorageSync(Q[360788]);
            var idfv = wx.getStorageSync(Q[360789]);
            var ad_code = wx.getStorageSync(Q[360790]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: Q[360841],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : Q[360842],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == Q[360109] ? 1 : 2
            };
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(Q[360843] + tmplIds);
            //获取模板ID
            callbacks[Q[360331]] = typeof callback == Q[360793] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(Q[360844]);
                    console.log(res);
                    callbacks[Q[360331]] && callbacks[Q[360331]](res);
                },
                fail(res) {
                    console.log(Q[360845]);
                    console.log(res);
                    callbacks[Q[360331]] && callbacks[Q[360331]](res);
                }
            });
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(Q[360846] + type);
            console.log(public_data);

            wx.request({
                url: Q[360801] + HOST + Q[360847] + type + Q[360848] + encodeURIComponent(JSON.stringify(public_data))
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
    method in _vNGUCQ && _vNGUCQ[method](data, callback);
}

exports.init = function (data, callback) {
    run(Q[360230], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(Q[360331], data, callback);
};

exports.login = function (callback) {
    run(Q[360252], '', callback);
};

exports.login = function (callback) {
    run(Q[360252], '', callback);
};

exports.pay = function (data, callback) {
    run(Q[360309], data, callback);
};

exports.openService = function () {
    run(Q[360323]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Q[360317], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(Q[360319], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Q[360321], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(Q[360322], data);
};

exports.msgCheck = function (data, callback) {
    run(Q[360195], data, callback);
};

exports.downloadClient = function () {
    run(Q[360849]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(Q[360850]);
};

exports.weiduanHelper = function () {
    run(Q[360325]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(Q[360851], data, callback);
};