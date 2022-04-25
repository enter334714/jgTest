var W = wx.$l;
// 引入渠道JS资源 TODO
import Sdk from '../utils/ad_mini-sdk.js';
var config = {
    game_id: 256,
    game_pkg: W[1813],
    partner_label: W[1814],
    partner_id: W[1815],
    game_ver:'46.0.13',
    is_auth: false, //授权登录
    game_key: W[1817],
    client_key: W[1818],
    partner_game_id: 118
};
window.config = config;
var $LTDFNP = $LTFPND();
var HOST = W[1819];
var $LTDFPN = null;
var $LTFNPD = null;
var user_invite_by_activity = null;

var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var sdkUserInfo = null;
var AD_HOST = W[1820];
function $LTFPND() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(W[1821]);
            var self = this;

            var uuid = wx.getStorageSync(W[1822]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(W[1822], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(W[1823]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(W[1823], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            console.log(W[1824], JSON.stringify(info));

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(W[1825], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if (!cp_activity_id) {
                cp_activity_id = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id ? W[1826] : '';
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
                        console.log(W[1827], sdkUserInfo);
                        window.sdkUser = sdkUserInfo;
                        wx.setStorage({
                            key: W[1828],
                            data: sdkUserInfo
                        });
                        console.log(W[1829]);
                        self.do_login(sdkUserInfo);
                    });
                }
            });
            callbacks[W[261]] = typeof callback == W[1010] ? callback : null;
        },

        do_login: function (info) {
            var self = this;
            //发起网络请求
            var public_data = self.getPublicData();
            public_data[W[1830]] = JSON.stringify(info);
            if ($LTFNPD && typeof $LTFNPD == W[910]) {
                for (var key in $LTFNPD) {
                    public_data[key] = $LTFNPD[key];
                }
            }

            wx.request({
                url: W[1831] + HOST + W[1832],
                method: W[225],
                dataType: W[1255],
                header: {
                    'content-type': W[406] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(W[1833] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(W[1834], data.data.sdk_token);
                                wx.setStorageSync(W[1835], data.data.user_id);
                                wx.setStorageSync(W[1836], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(W[1837], data.data.ext);
                                }

                                sdkUserInfo = wx.getStorageSync(W[1828]);
                                console.log(W[1838] + JSON.stringify(sdkUserInfo));

                                if (typeof sdkUserInfo === W[906] || sdkUserInfo === '') {
                                    console.log(W[1839] + JSON.stringify(window.sdkUser));
                                    sdkUserInfo = window.sdkUser;
                                }
                            } catch (e) {
                                callbacks[W[261]] && callbacks[W[261]](1, {
                                    errMsg: W[1840]
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
                            callbacks[W[261]] && callbacks[W[261]](0, userData);
                        } else {
                            callbacks[W[261]] && callbacks[W[261]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(W[1841], function (data) {
                            console.log(W[1842]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(W[1841]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[W[261]] && callbacks[W[261]](1, {
                            errMsg: W[1843]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[W[363]] = typeof callback == W[1010] ? callback : null;
            var type = data.type || W[363];
            var cp_activity_id = data.cp_activity_id || '';

            console.log(W[1844] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if (cp_activity_id != '' && data.query != '') {
                    data.query = data.query + W[1845] + cp_activity_id;
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
            var sdk_token = wx.getStorageSync(W[1834]);
            wx.request({
                url: W[1831] + HOST + W[1846],
                method: W[225],
                dataType: W[1255],
                header: {
                    'content-type': W[406] // 默认值
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
            console.log(W[1847]);
            var sdk_token = wx.getStorageSync(W[1834]);
            wx.request({
                url: W[1831] + HOST + W[1848],
                method: W[225],
                dataType: W[1255],
                header: {
                    'content-type': W[406] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(W[1849]);
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
            console.log(W[1850]);
            var sdk_token = wx.getStorageSync(W[1834]);
            wx.request({
                url: W[1831] + HOST + W[1851],
                method: W[225],
                dataType: W[1255],
                header: {
                    'content-type': W[406] // 默认值
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
                    console.log(W[1852] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[W[363]] && callbacks[W[363]](1, { errMsg: W[1853] + data.msg });
                        }
                    } else {
                        callbacks[W[363]] && callbacks[W[363]](1, { errMsg: W[1854] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(W[1855]);
            var sdk_token = wx.getStorageSync(W[1834]);
            wx.request({
                url: W[1831] + HOST + W[1856],
                method: W[225],
                dataType: W[1255],
                header: {
                    'content-type': W[406] // 默认值
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
                    console.log(W[1857] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            sdkUserInfo = wx.getStorageSync(W[1828]);
            console.log(W[1858]);
            var sdk_token = wx.getStorageSync(W[1834]);

            wx.request({
                url: W[1831] + AD_HOST + W[1859] + config.partner_id + '/' + config.game_pkg,
                method: W[225],
                dataType: W[1255],
                header: {
                    'content-type': W[406] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content,
                    openid: sdkUserInfo.open_id
                },
                success: function (res) {
                    console.log(W[1860]);
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
            console.log(W[1861]);
            console.log(data);

            var self = this;
            callbacks[W[345]] = typeof callback == W[1010] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(W[1834]);
            var session_key = wx.getStorageSync(W[1837]);
            if (!sdk_token) {
                callbacks[W[345]] && callbacks[W[345]](1, { errMsg: W[1862] });
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
            public_data[W[1863]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: W[1831] + HOST + W[1864],
                method: W[225],
                dataType: W[1255],
                header: {
                    'content-type': W[406] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(W[1865] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //调用渠道下单支付接口 TODO
                            if (data.data.ext == '') {
                                var sdkCfg = { game_id: config.game_id, sdk_ver: config.game_ver, client_key: config.client_key };
                                Sdk.sdkGenOrder(data.data.pay_data, function (res) {
                                    console.log(W[1866], res);
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[W[345]] && callbacks[W[345]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[W[261]] && callbacks[W[261]](1, { errMsg: W[1843] });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: W[1867] + data.ext2.cpOrderId + W[1868] + data.ext2.money,
                extraData: {},
                envVersion: W[1869],
                success(res) {
                    // 打开成功
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(W[1835]);
            var username = wx.getStorageSync(W[1836]);

            var postData = {};
            postData[W[1870]] = uid;
            postData[W[1871]] = username;
            postData[W[1872]] = data.roleId;
            postData[W[1873]] = data.roleLevel;
            postData[W[1874]] = data.roleName;
            postData[W[24]] = data.serverId;
            postData[W[314]] = data.serverName;

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

            this.log(W[487], postData);

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
                    url: W[1831] + HOST + W[1875],
                    method: W[225],
                    dataType: W[1255],
                    header: {
                        'content-type': W[406] // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log(W[1876] + JSON.stringify(res));
                    }
                });
            }
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(W[1835]);
            var username = wx.getStorageSync(W[1836]);

            var postData = {};
            postData[W[1870]] = uid;
            postData[W[1871]] = username;
            postData[W[1872]] = data.roleId;
            postData[W[1873]] = data.roleLevel;
            postData[W[1874]] = data.roleName;
            postData[W[24]] = data.serverId;
            postData[W[314]] = data.serverName;

            if (data.roleid && data.serverid) {
                $LTDFPN = {
                    role_id: data.roleId,
                    server_id: data.serverId
                };
            }

            this.log(W[1877], postData);

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
            var uid = wx.getStorageSync(W[1835]);
            var username = wx.getStorageSync(W[1836]);

            var postData = {};
            postData[W[1870]] = uid;
            postData[W[1871]] = username;
            postData[W[1872]] = data.roleId;
            postData[W[1873]] = data.roleLevel;
            postData[W[1874]] = data.roleName;
            postData[W[24]] = data.serverId;
            postData[W[314]] = data.serverName;

            if (data.roleid && data.serverid) {
                $LTDFPN = {
                    role_id: data.roleId,
                    server_id: data.serverId
                };
            }

            this.log(W[1878], postData);

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
            var chars = W[1879].split('');
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
            var uuid = wx.getStorageSync(W[1822]);
            var idfv = wx.getStorageSync(W[1823]);

            return {
                is_from_min: 1,
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: '',
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: W[1880],
                net_type: system.wifiSignal == 0 ? '4G' : W[1881],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == W[111] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(W[1882] + type);
            console.log(W[1883] + public_data);

            wx.request({
                url: W[1831] + HOST + W[1884] + type + W[1885] + encodeURIComponent(JSON.stringify(public_data))
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
            this.getShareInfo(W[1826], function (data) {
                callback && callback({ title: data.title, 'img': data.img });
            });
        }

    };
}

function run(method, data, callback) {
    method in $LTDFNP && $LTDFNP[method](data, callback);
}

exports.init = function (data, callback) {
    run(W[238], data, callback);
};

exports.login = function (callback) {
    run(W[261], '', callback);
};

exports.pay = function (data, callback) {
    run(W[345], data, callback);
};

exports.openService = function (data) {
    run(W[364], data);
};

exports.isChangePay = function (level, callback) {
    run(W[1886], level, callback);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverId: serverId,
        serverName: serverName,
        roleId: roleId,
        roleName: roleName,
        roleLevel: roleLevel
    };
    run(W[358], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverId: serverId,
        serverName: serverName,
        roleId: roleId,
        roleName: roleName,
        roleLevel: roleLevel
    };

    run(W[360], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverId: serverId,
        serverName: serverName,
        roleId: roleId,
        roleName: roleName,
        roleLevel: roleLevel
    };
    run(W[362], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(W[363], params);
};

exports.msgCheck = function (data, callback) {
    run(W[201], data, callback);
};

exports.downloadClient = function () {
    run(W[1887]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(W[1888]);
};

exports.weiduanHelper = function () {
    run(W[366]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(W[1889], data, callback);
};

exports.getFriendShareInfo = function (callback) {
    run(W[1890], callback);
};