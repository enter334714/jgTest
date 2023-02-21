var W = wx.$l;
// 引入渠道JS资源 TODO
import Sdk from '../utils/ad_mini-sdk.js';
var config = {
    game_id: 256,
    game_pkg: W[1931],
    partner_label: W[1932],
    partner_id: W[1933],
    game_ver: W[1934],
    is_auth: false, //授权登录
    game_key: W[1935],
    client_key: W[1936],
    partner_game_id: 118
};
window.config = config;
var $LTDFNP = $LTFPND();
var HOST = W[1937];
var $LTDFPN = null;
var $LTFNPD = null;
var user_invite_by_activity = null;

var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var sdkUserInfo = null;
var AD_HOST = W[1938];
function $LTFPND() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(W[1939]);
            var self = this;

            var uuid = wx.getStorageSync(W[1940]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(W[1940], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(W[1941]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(W[1941], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            console.log(W[1942], JSON.stringify(info));

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(W[1943], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if (!cp_activity_id) {
                cp_activity_id = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id ? W[1944] : '';
            }

            // 带活动ID
            if (cp_activity_id) {
                user_invite_by_activity = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene,
                    cp_activity_id: cp_activity_id
                };
            }

            // 带邀请码
            if (invite) {
                $LTFNPD = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }

            //判断版本号
            if (game_ver) {
                config.game_ver = game_ver;
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },

        //登录接口
        login: function (data, callback) {
            var self = this;
            var sdkCfg = { game_id: config.partner_game_id, sdk_ver: config.game_ver, client_key: config.client_key };
            Sdk.$LDN(sdkCfg, function (res) {
                if (res) {
                    //登录成功后，回调方法会返回res，如果res为true则代表初始化成功，可以调用其他方法了//调用登录，角色上传等方法
                    console.log(res);
                    Sdk.sdkLogin(function (sdkUserInfo) {
                        console.log(W[1945], sdkUserInfo);
                        window.sdkUser = sdkUserInfo;
                        wx.setStorage({
                            key: W[1946],
                            data: sdkUserInfo
                        });
                        console.log(W[1947]);
                        self.do_login(sdkUserInfo);
                    });
                }
            });
            callbacks[W[1214]] = typeof callback == W[130] ? callback : null;
        },

        do_login: function (info) {
            var self = this;
            //发起网络请求
            var public_data = self.getPublicData();
            public_data[W[1948]] = JSON.stringify(info);
            if ($LTFNPD && typeof $LTFNPD == W[13]) {
                for (var key in $LTFNPD) {
                    public_data[key] = $LTFNPD[key];
                }
            }

            wx.request({
                url: W[1949] + HOST + W[1950],
                method: W[1182],
                dataType: W[393],
                header: {
                    'content-type': W[1369] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(W[1951] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(W[1952], data.data.sdk_token);
                                wx.setStorageSync(W[1953], data.data.user_id);
                                wx.setStorageSync(W[1954], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(W[1955], data.data.ext);
                                }

                                sdkUserInfo = wx.getStorageSync(W[1946]);
                                console.log(W[1956] + JSON.stringify(sdkUserInfo));

                                if (typeof sdkUserInfo === W[9] || sdkUserInfo === '') {
                                    console.log(W[1957] + JSON.stringify(window.sdkUser));
                                    sdkUserInfo = window.sdkUser;
                                }
                            } catch (e) {
                                callbacks[W[1214]] && callbacks[W[1214]](1, {
                                    errMsg: W[1958]
                                });
                            }

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
                            callbacks[W[1214]] && callbacks[W[1214]](0, userData);
                        } else {
                            callbacks[W[1214]] && callbacks[W[1214]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(W[1959], function (data) {
                            console.log(W[1960]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(W[1959]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[W[1214]] && callbacks[W[1214]](1, {
                            errMsg: W[1961]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[W[1329]] = typeof callback == W[130] ? callback : null;
            var type = data.type || W[1329];
            var cp_activity_id = data.cp_activity_id || '';

            console.log(W[1962] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if (cp_activity_id != '' && data.query != '') {
                    data.query = data.query + W[1963] + cp_activity_id;
                }

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
            var sdk_token = wx.getStorageSync(W[1952]);
            wx.request({
                url: W[1949] + HOST + W[1964],
                method: W[1182],
                dataType: W[393],
                header: {
                    'content-type': W[1369] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: $LTDFPN ? $LTDFPN.server_id : '',
                    role_id: $LTDFPN ? $LTDFPN.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function (data) {
            if (data) {
                let openParm = {
                    user_id: sdkUserInfo.uid,
                    game_id: config.game_id,
                    role_name: data.roleName,
                    role_id: data.roleId,
                    server_name: data.serverName,
                    server_id: data.serverId
                };
                Sdk.openGS(openParm);
            } else {
                wx.openCustomerServiceConversation();
            }
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(W[1965]);
            var sdk_token = wx.getStorageSync(W[1952]);
            wx.request({
                url: W[1949] + HOST + W[1966],
                method: W[1182],
                dataType: W[393],
                header: {
                    'content-type': W[1369] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(W[1967]);
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
            console.log(W[1968]);
            var sdk_token = wx.getStorageSync(W[1952]);
            wx.request({
                url: W[1949] + HOST + W[1969],
                method: W[1182],
                dataType: W[393],
                header: {
                    'content-type': W[1369] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: $LTDFPN ? $LTDFPN.server_id : '',
                    role_id: $LTDFPN ? $LTDFPN.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(W[1970] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[W[1329]] && callbacks[W[1329]](1, { errMsg: W[1971] + data.msg });
                        }
                    } else {
                        callbacks[W[1329]] && callbacks[W[1329]](1, { errMsg: W[1972] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(W[1973]);
            var sdk_token = wx.getStorageSync(W[1952]);
            wx.request({
                url: W[1949] + HOST + W[1974],
                method: W[1182],
                dataType: W[393],
                header: {
                    'content-type': W[1369] // 默认值
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
                    console.log(W[1975] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            sdkUserInfo = wx.getStorageSync(W[1946]);
            console.log(W[1976]);
            var sdk_token = wx.getStorageSync(W[1952]);

            wx.request({
                url: W[1949] + AD_HOST + W[1977] + config.partner_id + '/' + config.game_pkg,
                method: W[1182],
                dataType: W[393],
                header: {
                    'content-type': W[1369] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content,
                    openid: sdkUserInfo.open_id
                },
                success: function (res) {
                    console.log(W[1978]);
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(W[1979]);
            console.log(data);

            var self = this;
            callbacks[W[1311]] = typeof callback == W[130] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(W[1952]);
            var session_key = wx.getStorageSync(W[1955]);
            if (!sdk_token) {
                callbacks[W[1311]] && callbacks[W[1311]](1, { errMsg: W[1980] });
                return;
            }

            var sysInfo = wx.getSystemInfoSync();

            var order_data = {
                cpbill: data.cpbill,
                serverid: data.serverid,
                servername: data.servername,
                price: data.price,
                productid: data.productid,
                productname: data.productname,
                extension: data.extension,
                roleid: data.roleid,
                rolename: data.rolename,
                rolelevel: data.rolelevel,
                sdk_token: sdk_token,
                uid: sdkUserInfo.uid,
                buyAmount: data.buyAmount ? data.buyAmount : 1
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[W[1981]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: W[1949] + HOST + W[1982],
                method: W[1182],
                dataType: W[393],
                header: {
                    'content-type': W[1369] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(W[1983] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //调用渠道下单支付接口 TODO
                            if (data.data.ext == '') {
                                var sdkCfg = { game_id: config.game_id, sdk_ver: config.game_ver, client_key: config.client_key };
                                Sdk.sdkGenOrder(data.data.pay_data, function (res) {
                                    console.log(W[1984], res);
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[W[1311]] && callbacks[W[1311]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[W[1214]] && callbacks[W[1214]](1, { errMsg: W[1961] });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: W[1985] + data.ext2.cpOrderId + W[1986] + data.ext2.money,
                extraData: {},
                envVersion: W[1987],
                success(res) {
                    // 打开成功
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(W[1953]);
            var username = wx.getStorageSync(W[1954]);

            var postData = {};
            postData[W[1988]] = uid;
            postData[W[1989]] = username;
            postData[W[1990]] = data.roleId;
            postData[W[1991]] = data.roleLevel;
            postData[W[1992]] = data.roleName;
            postData[W[990]] = data.serverId;
            postData[W[1266]] = data.serverName;

            if (data.roleid && data.serverid) {
                $LTDFPN = {
                    role_id: data.roleId,
                    server_id: data.serverId
                };
            }

            var sdkCfg = { game_id: config.game_id, sdk_ver: config.game_ver, client_key: config.client_key };
            var roleData = {
                loginType: 1, //1创角 2升级 3退出 4登陆
                user_id: sdkUserInfo.uid, //用户ID，登录回调方法返回的UID,
                game_id: config.partner_game_id, //游戏ID，
                server_id: data.serverId, //区服ID，
                server_name: data.serverName, //区服名字，
                role_id: data.roleId, //角色ID，
                role_name: data.roleName, //角色名字，
                level: data.roleLevel //等级
            };
            Sdk.sdkReportEvent(roleData);

            this.log(W[14], postData);

            // 记录从活动分享进入的角色信息
            if (user_invite_by_activity) {
                var scene = user_invite_by_activity.scene;
                var is_new = user_invite_by_activity.is_new;
                var invite_code = user_invite_by_activity.invite;
                var invite_type = user_invite_by_activity && user_invite_by_activity.invite_type ? user_invite_by_activity.invite_type : '';
                var cp_activity_id = user_invite_by_activity.cp_activity_id;

                var roleInfo = {
                    uid: uid,
                    role_id: data.roleId,
                    role_name: data.roleName,
                    server_id: data.serverId,
                    server_name: data.serverName,
                    game_id: config.game_id,
                    partner_id: config.partner_id,
                    game_pkg: config.game_pkg,
                    scene: scene,
                    is_new: is_new,
                    invite_code: invite_code,
                    invite_type: invite_type,
                    cp_activity_id: cp_activity_id
                };

                wx.request({
                    url: W[1949] + HOST + W[1993],
                    method: W[1182],
                    dataType: W[393],
                    header: {
                        'content-type': W[1369] // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log(W[1994] + JSON.stringify(res));
                    }
                });
            }
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(W[1953]);
            var username = wx.getStorageSync(W[1954]);

            var postData = {};
            postData[W[1988]] = uid;
            postData[W[1989]] = username;
            postData[W[1990]] = data.roleId;
            postData[W[1991]] = data.roleLevel;
            postData[W[1992]] = data.roleName;
            postData[W[990]] = data.serverId;
            postData[W[1266]] = data.serverName;

            if (data.roleid && data.serverid) {
                $LTDFPN = {
                    role_id: data.roleId,
                    server_id: data.serverId
                };
            }

            this.log(W[1995], postData);

            var sdkCfg = { game_id: config.game_id, sdk_ver: config.game_ver, client_key: config.client_key };
            var roleData = {
                loginType: 4, //1创角 2升级 3退出 4登陆
                user_id: sdkUserInfo.uid, //用户ID，登录回调方法返回的UID,
                game_id: config.partner_game_id, //游戏ID，
                server_id: data.serverId, //区服ID，
                server_name: data.serverName, //区服名字，
                role_id: data.roleId, //角色ID，
                role_name: data.roleName, //角色名字，
                level: data.roleLevel //等级
            };
            Sdk.sdkReportEvent(roleData);

            //进入游戏确认邀请成功
            if ($LTFNPD) {
                this.updateShare($LTFNPD.invite, $LTFNPD.invite_type, $LTFNPD.is_new, data.roleId, data.serverId, $LTFNPD.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(W[1953]);
            var username = wx.getStorageSync(W[1954]);

            var postData = {};
            postData[W[1988]] = uid;
            postData[W[1989]] = username;
            postData[W[1990]] = data.roleId;
            postData[W[1991]] = data.roleLevel;
            postData[W[1992]] = data.roleName;
            postData[W[990]] = data.serverId;
            postData[W[1266]] = data.serverName;

            if (data.roleid && data.serverid) {
                $LTDFPN = {
                    role_id: data.roleId,
                    server_id: data.serverId
                };
            }

            this.log(W[1996], postData);

            var sdkCfg = { game_id: config.game_id, sdk_ver: config.game_ver, client_key: config.client_key };
            var roleData = {
                loginType: 2, //1创角 2升级 3退出 4登陆
                user_id: sdkUserInfo.uid, //用户ID，登录回调方法返回的UID,
                game_id: config.partner_game_id, //游戏ID，
                server_id: data.serverId, //区服ID，
                server_name: data.serverName, //区服名字，
                role_id: data.roleId, //角色ID，
                role_name: data.roleName, //角色名字，
                level: data.roleLevel //等级
            };
            Sdk.sdkReportEvent(roleData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = W[1997].split('');
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
            var uuid = wx.getStorageSync(W[1940]);
            var idfv = wx.getStorageSync(W[1941]);

            return {
                is_from_min: 1,
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: '',
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: W[1998],
                net_type: system.wifiSignal == 0 ? '4G' : W[1999],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == W[1070] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(W[2000] + type);
            console.log(W[2001] + public_data);

            wx.request({
                url: W[1949] + HOST + W[2002] + type + W[2003] + encodeURIComponent(JSON.stringify(public_data))
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
        weiduanHelper: function () {
            // 接入渠道微端接口  TODO
            sdk.Download();
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback && callback(result);
        },

        // 获取定向分享图片跟标题
        getFriendShareInfo: function (callback) {
            this.getShareInfo(W[1944], function (data) {
                callback && callback({ title: data.title, 'img': data.img });
            });
        }

    };
}

function run(method, data, callback) {
    method in $LTDFNP && $LTDFNP[method](data, callback);
}

exports.init = function (data, callback) {
    run(W[1193], data, callback);
};

exports.login = function (callback) {
    run(W[1214], '', callback);
};

exports.pay = function (data, callback) {
    run(W[1311], data, callback);
};

exports.openService = function (data) {
    run(W[1330], data);
};

exports.isChangePay = function (level, callback) {
    run(W[2004], level, callback);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverId: serverId,
        serverName: serverName,
        roleId: roleId,
        roleName: roleName,
        roleLevel: roleLevel
    };
    run(W[1324], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverId: serverId,
        serverName: serverName,
        roleId: roleId,
        roleName: roleName,
        roleLevel: roleLevel
    };

    run(W[1326], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverId: serverId,
        serverName: serverName,
        roleId: roleId,
        roleName: roleName,
        roleLevel: roleLevel
    };
    run(W[1328], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(W[1329], params);
};

exports.msgCheck = function (data, callback) {
    run(W[1159], data, callback);
};

exports.downloadClient = function () {
    run(W[2005]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(W[2006]);
};

exports.weiduanHelper = function () {
    run(W[1332]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(W[2007], data, callback);
};

exports.getFriendShareInfo = function (callback) {
    run(W[2008], callback);
};