var p = wx.$h;
import sdk from './ccchelp.js';

//TODO 替换对应参数
var config = {
    game_id: 256, //光奈-黎明风暴-天师服
    game_pkg: p[27565],
    partner_label: p[27566],
    partner_id: p[27567],
    game_ver: "3.0.22", //C包为3.x.x，每次上传版本修改，先设置，上传审核版本的时候保持一致
    is_auth: false, //授权登录
    from: null, //来源
    tmpId: {} // 订阅的类型 和 模板id
};
window.config = config;

var $aL36KT = $aL6K3T();
var HOST = p[27569];
var $aL6TK3 = null;
var $aL6T3K = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function $aL6K3T() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(p[27472]);
            var self = this;

            var uuid = wx.getStorageSync(p[27473]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(p[27473], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(p[27474]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(p[27474], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(p[27476], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(p[731], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                $aL6T3K = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }
            sdk.init({ game_ver: game_ver }, function (data) {
                console.log(p[27570], JSON.stringify(data));
            });
            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },

        login: function (data, callback) {
            console.log(p[27478]);
            callbacks[p[27479]] = typeof callback == p[90] ? callback : null;
            var self = this;
            sdk.login(function (result, data) {
                if (result == 0) {
                    self.do_login(data);
                    console.log(p[27571] + JSON.stringify(data));
                } else {
                    console.warn(p[27572]);
                    callbacks[p[27479]] && callbacks[p[27479]](1, { errMsg: p[27573] });
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[p[27574]] = JSON.stringify(info);
            if ($aL6T3K && typeof $aL6T3K == p[4]) {
                for (var key in $aL6T3K) {
                    public_data[key] = $aL6T3K[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: p[27575] + HOST + p[27494],
                method: p[27495],
                dataType: p[220],
                header: {
                    'content-type': p[27496] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(p[27497] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(p[27576], data.data.sdk_token);
                                wx.setStorageSync(p[27577], data.data.user_id);
                                wx.setStorageSync(p[27578], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(p[27579], data.data.ext);
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
                            callbacks[p[27479]] && callbacks[p[27479]](0, userData);
                        } else {
                            callbacks[p[27479]] && callbacks[p[27479]](1, { type: p[27580], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        self.getShareInfo(p[27581], function (data) {
                            console.log(p[27582]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(p[27581]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[p[27479]] && callbacks[p[27479]](1, { type: p[27580], errMsg: p[27583], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(p[27584]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[p[27479]] && callbacks[p[27479]](1, { type: p[27585], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(p[27586]);

                    callbacks[p[27479]] && callbacks[p[27479]](1, { type: p[27587], errMsg: p[27588], time: Date.now() - lastTime });
                    callbacks[p[27479]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[p[27589]] = typeof callback == p[90] ? callback : null;
            var type = data.type || p[27589];
            console.log(p[27590] + type);
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
            var sdk_token = wx.getStorageSync(p[27576]);
            wx.request({
                url: p[27575] + HOST + p[27591],
                method: p[27495],
                dataType: p[220],
                header: {
                    'content-type': p[27496] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: $aL6TK3 ? $aL6TK3.server_id : '',
                    role_id: $aL6TK3 ? $aL6TK3.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(p[27507]);
            callbacks[p[7350]] = typeof callback == p[90] ? callback : null;
            var sdk_token = wx.getStorageSync(p[27576]);
            wx.request({
                url: p[27575] + HOST + p[27508],
                method: p[27495],
                dataType: p[220],
                header: {
                    'content-type': p[27496] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(p[27592]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[p[7350]] && callbacks[p[7350]](data.data);
                        } else {
                            callbacks[p[7350]] && callbacks[p[7350]]({ develop: 0 });
                        }
                    } else {
                        callbacks[p[7350]] && callbacks[p[7350]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(p[27593]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[p[7350]] && callbacks[p[7350]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(p[27594]);
                    callbacks[p[7350]] && callbacks[p[7350]]({ develop: 0 });
                    callbacks[p[7350]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(p[27595]);
            var sdk_token = wx.getStorageSync(p[27576]);
            wx.request({
                url: p[27575] + HOST + p[27596],
                method: p[27495],
                dataType: p[220],
                header: {
                    'content-type': p[27496] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: $aL6TK3 ? $aL6TK3.server_id : '',
                    role_id: $aL6TK3 ? $aL6TK3.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(p[27597]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[p[27589]] && callbacks[p[27589]](1, {
                                errMsg: p[27598] + data.msg
                            });
                        }
                    } else {
                        callbacks[p[27589]] && callbacks[p[27589]](1, {
                            errMsg: p[27599]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(p[27600]);
            var sdk_token = wx.getStorageSync(p[27576]);
            wx.request({
                url: p[27575] + HOST + p[27601],
                method: p[27495],
                dataType: p[220],
                header: {
                    'content-type': p[27496] // 默认值
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
                    console.log(p[27602] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(p[27603] + content);

            sdk.checkMsg(content, function (res) {
                console.log(p[27604] + JSON.stringify(res));
                let ret = {
                    data: {}
                };

                if (res == 0) {
                    ret.statusCode = 200;
                    ret.data.state = 1;
                } else {
                    ret.statusCode = 0;
                    ret.data.state = 0;
                }
                callback && callback(ret);
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(p[27511] + JSON.stringify(data));

            var self = this;
            callbacks[p[27512]] = typeof callback == p[90] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(p[27576]);
            var session_key = wx.getStorageSync(p[27579]);
            if (!sdk_token) {
                callbacks[p[27512]] && callbacks[p[27512]](1, {
                    errMsg: p[27513]
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
            public_data[p[27514]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: p[27575] + HOST + p[27515],
                method: p[27495],
                dataType: p[220],
                header: {
                    'content-type': p[27496] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(p[27516] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            sdk.pay(data.data.pay_data, function (res1, data) {
                                console.log(p[27605] + JSON.stringify(data));
                            });
                        } else {
                            callbacks[p[27512]] && callbacks[p[27512]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[p[27479]] && callbacks[p[27479]](1, {
                            errMsg: p[27583]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(p[27577]);
            var username = wx.getStorageSync(p[27578]);

            var postData = {};
            postData[p[27541]] = uid;
            postData[p[27542]] = username;
            postData[p[10838]] = data.roleid;
            postData[p[27543]] = data.rolelevel;
            postData[p[27544]] = data.rolename;
            postData[p[11494]] = data.serverid;

            if (data.roleid && data.serverid) {
                $aL6TK3 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(p[5], postData);
            // 渠道上报
            sdk.logCreateRole(data.serverid, data.servername, data.roleid, data.rolename, data.rolelevel);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(p[27577]);
            var username = wx.getStorageSync(p[27578]);

            var postData = {};
            postData[p[27541]] = uid;
            postData[p[27542]] = username;
            postData[p[10838]] = data.roleid;
            postData[p[27543]] = data.rolelevel;
            postData[p[27544]] = data.rolename;
            postData[p[11494]] = data.serverid;

            if (data.roleid && data.serverid) {
                $aL6TK3 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(p[6010], postData);

            //进入游戏确认邀请成功
            if ($aL6T3K) {
                this.updateShare($aL6T3K.invite, $aL6T3K.invite_type, $aL6T3K.is_new, data.roleid, data.serverid, $aL6T3K.scene);
            }
            sdk.logEnterGame(data.serverid, data.servername, data.roleid, data.rolename, data.rolelevel);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(p[27577]);
            var username = wx.getStorageSync(p[27578]);

            var postData = {};
            postData[p[27541]] = uid;
            postData[p[27542]] = username;
            postData[p[10838]] = data.roleid;
            postData[p[27543]] = data.rolelevel;
            postData[p[27544]] = data.rolename;
            postData[p[11494]] = data.serverid;

            if (data.roleid && data.serverid) {
                $aL6TK3 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(p[27545], postData);
            sdk.logRoleUpLevel(data.serverid, data.servername, data.roleid, data.rolename, data.rolelevel);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = p[27546].split('');
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
            var uuid = wx.getStorageSync(p[27473]);
            var idfv = wx.getStorageSync(p[27474]);
            var ad_code = wx.getStorageSync(p[27476]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: p[27547],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : p[27548],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == p[27517] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(p[27549] + type);
            console.log(public_data);

            wx.request({
                url: p[27575] + HOST + p[27550] + type + p[27551] + encodeURIComponent(JSON.stringify(public_data))
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
            sdk.downloadClient();
        }

    };
}

function run(method, data, callback) {
    method in $aL36KT && $aL36KT[method](data, callback);
}

exports.init = function (data, callback) {
    run(p[804], data, callback);
};

exports.login = function (callback) {
    run(p[27479], '', callback);
};

exports.login = function (callback) {
    run(p[27479], '', callback);
};

exports.pay = function (data, callback) {
    run(p[27512], data, callback);
};

exports.openService = function () {
    run(p[24207]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(p[27559], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(p[27560], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(p[27561], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(p[27589], data);
};

exports.msgCheck = function (data, callback) {
    run(p[11987], data, callback);
};

exports.downloadClient = function () {
    run(p[27562]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(p[27563]);
};

exports.weiduanHelper = function () {
    run(p[23224]);
};