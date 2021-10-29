var U = wx.$k;
const sdk = require(U[140491]);
// 初始化sdk，引入sdk时候需要最先调用
sdk.getFyhd().startSdk();

var config = {
    game_id: U[140492],
    game_pkg: U[140493],
    partner_id: U[140494],
    game_ver: U[140495], //天剑奇缘-聚仙-风云微信小程序-GS
    is_auth: false //授权登录
};
window.config = config;
var $KTE27P = $KT27EP();
var HOST = U[140496];
var $KT2P7E = null;
var $KT2PE7 = null;
var open_id = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

// 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
wx.setKeepScreenOn({
    keepScreenOn: true
});

function $KT27EP() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(U[140497]);
            var self = this;

            var uuid = wx.getStorageSync(U[140498]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(U[140498], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(U[140499]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(U[140499], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(U[140500], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(U[140501], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                $KT2PE7 = {
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
            console.log(U[140502]);
            var self = this;
            callbacks[U[140503]] = typeof callback == U[140094] ? callback : null;

            self.do_login();
        },

        do_login: function () {
            var self = this;
            var param = {};
            var public_data = self.getPublicData();

            sdk.getFyhd().getFyhdUserInfo(param, config.is_auth, function (callback) {
                console.log(U[140504] + JSON.stringify(callback));
                open_id = callback.result.user.openid;

                // 渠道上报--注册上报
                var param1 = {
                    openid: open_id
                };
                sdk.getFyhd().loginData(param1, function () {});

                public_data.openid = callback.result.user.openid;
                public_data.token = callback.result.user.token;
                public_data.timestamp = callback.result.user.timestamp;
                public_data.sign = callback.result.user.sign;

                var lastTime = Date.now();
                wx.request({
                    url: U[140505] + HOST + U[140506],
                    method: U[140507],
                    dataType: U[140222],
                    header: {
                        'content-type': U[140508] // 默认值
                    },
                    data: public_data,
                    success: function (res) {
                        console.log(U[140509]);
                        console.log(res);
                        requestCallback = true;
                        if (loginHandler) clearTimeout(loginHandler);
                        loginHandler = null;
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
                                    wx.setStorageSync(U[140510], data.data.sdk_token);
                                    wx.setStorageSync(U[140511], data.data.user_id);
                                    wx.setStorageSync(U[140512], data.data.username);
                                    if (data.data.ext) {
                                        wx.setStorageSync(U[140513], data.data.ext);
                                    }
                                } catch (e) {}

                                callbacks[U[140503]] && callbacks[U[140503]](0, userData);
                            } else {
                                callbacks[U[140503]] && callbacks[U[140503]](1, { type: U[140514], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                            }

                            sdk.getFyhd().shareConfig({}, function (res) {
                                console.log(U[140515] + JSON.stringify(res));
                                wx.onShareAppMessage(function () {
                                    //记录开始分享
                                    self.logStartShare(U[140516]);
                                    return {
                                        title: res.data.title,
                                        imageUrl: res.data.share_pic,
                                        query: res.data.path
                                    };
                                });
                            });
                        } else {
                            callbacks[U[140503]] && callbacks[U[140503]](1, { type: U[140514], errMsg: U[140517], time: Date.now() - lastTime, res: res });
                        }
                    },
                    fail: function (res) {
                        console.log(U[140518]);
                        console.log(res);

                        requestCallback = true;
                        if (loginHandler) clearTimeout(loginHandler);
                        loginHandler = null;
                        callbacks[U[140503]] && callbacks[U[140503]](1, { type: U[140519], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                    }
                });
                if (!requestCallback) {
                    var timeOutFunc = function () {
                        console.log(U[140520]);

                        callbacks[U[140503]] && callbacks[U[140503]](1, { type: U[140521], errMsg: U[140522], time: Date.now() - lastTime });
                        callbacks[U[140503]] = null; //回调后置空，以免success或fail里重复回调
                    };
                    loginHandler = setTimeout(timeOutFunc, 20000);
                }
            });
        },

        share: function (data) {
            callbacks[U[140523]] = typeof callback == U[140094] ? callback : null;
            var type = data.type || U[140523];
            console.log(U[140524] + type);
            var self = this;
            self.logStartShare(type);

            sdk.getFyhd().shareConfig({}, function (res) {
                console.log(U[140525] + JSON.stringify(res));

                wx.shareAppMessage({
                    title: res.data.title,
                    imageUrl: res.data.share_pic,
                    query: res.data.path
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(U[140510]);
            wx.request({
                url: U[140505] + HOST + U[140526],
                method: U[140507],
                dataType: U[140222],
                header: {
                    'content-type': U[140508] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: $KT2P7E ? $KT2P7E.server_id : '',
                    role_id: $KT2P7E ? $KT2P7E.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(U[140527]);
            callbacks[U[140528]] = typeof callback == U[140094] ? callback : null;
            var sdk_token = wx.getStorageSync(U[140510]);
            wx.request({
                url: U[140505] + HOST + U[140529],
                method: U[140507],
                dataType: U[140222],
                header: {
                    'content-type': U[140508] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(U[140530]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[U[140528]] && callbacks[U[140528]](data.data);
                        } else {
                            callbacks[U[140528]] && callbacks[U[140528]]({ develop: 0 });
                        }
                    } else {
                        callbacks[U[140528]] && callbacks[U[140528]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(U[140531]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[U[140528]] && callbacks[U[140528]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(U[140532]);
                    callbacks[U[140528]] && callbacks[U[140528]]({ develop: 0 });
                    callbacks[U[140528]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(U[140533]);
            var sdk_token = wx.getStorageSync(U[140510]);
            wx.request({
                url: U[140505] + HOST + U[140534],
                method: U[140507],
                dataType: U[140222],
                header: {
                    'content-type': U[140508] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: $KT2P7E ? $KT2P7E.server_id : '',
                    role_id: $KT2P7E ? $KT2P7E.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(U[140535]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[U[140523]] && callbacks[U[140523]](1, { errMsg: U[140536] + data.msg });
                        }
                    } else {
                        callbacks[U[140523]] && callbacks[U[140523]](1, { errMsg: U[140537] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(U[140538]);
            var sdk_token = wx.getStorageSync(U[140510]);
            wx.request({
                url: U[140505] + HOST + U[140539],
                method: U[140507],
                dataType: U[140222],
                header: {
                    'content-type': U[140508] // 默认值
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
                    console.log(U[140540]);
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
                    console.log(U[140541]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(U[140542]);
            console.log(data);

            var self = this;
            callbacks[U[140543]] = typeof callback == U[140094] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(U[140510]);
            var session_key = wx.getStorageSync(U[140513]);

            if (!sdk_token && !session_key) {
                callbacks[U[140543]] && callbacks[U[140543]](1, {
                    errMsg: U[140544]
                });
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
            public_data[U[140545]] = JSON.stringify(order_data);
            public_data[U[140546]] = 1;

            //发起网络请求
            wx.request({
                url: U[140505] + HOST + U[140547],
                method: U[140507],
                dataType: U[140222],
                header: {
                    'content-type': U[140508] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(U[140548]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var pay_data = res.data;
                        if (pay_data.state) {
                            // 渠道下单调起支付
                            let payParams = {};
                            payParams.openid = open_id;
                            payParams.goods_count = 1;
                            payParams.goods_des = pay_data.data.pay_data.productDec;
                            payParams.goods_identifier = pay_data.data.pay_data.productName;
                            payParams.goods_name = pay_data.data.pay_data.productId;
                            payParams.pay_amount = pay_data.data.pay_data.amount;
                            payParams.redirect_uri = pay_data.data.pay_data.payCallbackUrl;
                            payParams.role_id = pay_data.data.pay_data.roleId;
                            payParams.role_name = pay_data.data.pay_data.roleName;
                            payParams.server_id = pay_data.data.pay_data.serverId, payParams.server_name = pay_data.data.pay_data.serverName;
                            payParams.extra_info = pay_data.data.pay_data.orderId;
                            payParams.order_sn = pay_data.data.pay_data.orderId;

                            var wx_info = wx.getSystemInfoSync();

                            if (wx_info.platform == U[140549] || wx_info.platform == U[140550]) {
                                sdk.getFyhd().submitOrder(payParams, function () {});
                            } else {
                                sdk.getFyhd().shanwan_pay(payParams, function () {});
                            }
                        } else {
                            callbacks[U[140543]] && callbacks[U[140543]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[U[140503]] && callbacks[U[140503]](1, { errMsg: U[140517] });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(U[140511]);
            var username = wx.getStorageSync(U[140512]);

            var postData = {};
            postData[U[140551]] = uid;
            postData[U[140552]] = username;
            postData[U[140553]] = data.roleid;
            postData[U[140554]] = data.rolelevel;
            postData[U[140555]] = data.rolename;
            postData[U[140556]] = data.serverid;

            if (data.roleid && data.serverid) {
                $KT2P7E = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(U[140011], postData);

            // 渠道上报--创角信息上报
            var param2 = {
                'openid': open_id,
                'role_id': data.roleid,
                'nickname': data.rolename,
                'type': 1,
                'server_id': data.serverid,
                'server_name': data.servername,
                'create_time': Date.parse(new Date()) / 1000
            };
            sdk.getFyhd().roleData(param2, function () {});

            // 渠道上报--登陆信息上报(创角上报成功回调之后调起)
            var param3 = {
                'openid': open_id,
                'role_id': data.roleid,
                'create_time': Date.parse(new Date()) / 1000,
                'nickname': data.rolename,
                'server_id': data.serverid,
                'server_name': data.servername
            };
            sdk.getFyhd().uploginData(param3, function () {});

            // 渠道上报--有效用户上报
            var param4 = {
                openid: open_id
            };
            sdk.getFyhd().valueuser(param4, function () {});
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(U[140511]);
            var username = wx.getStorageSync(U[140512]);

            var postData = {};
            postData[U[140551]] = uid;
            postData[U[140552]] = username;
            postData[U[140553]] = data.roleid;
            postData[U[140554]] = data.rolelevel;
            postData[U[140555]] = data.rolename;
            postData[U[140556]] = data.serverid;

            if (data.roleid && data.serverid) {
                $KT2P7E = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(U[140557], postData);

            //进入游戏确认邀请成功
            if ($KT2PE7) {
                this.updateShare($KT2PE7.invite, $KT2PE7.invite_type, $KT2PE7.is_new, data.roleid, data.serverid, $KT2PE7.scene);
            }

            // 渠道上报--登陆信息上报
            var param = {
                'openid': open_id,
                'role_id': data.roleid,
                'create_time': Date.parse(new Date()) / 1000,
                'nickname': data.rolename,
                'server_id': data.serverid,
                'server_name': data.servername
            };
            sdk.getFyhd().uploginData(param, function () {});
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(U[140511]);
            var username = wx.getStorageSync(U[140512]);

            var postData = {};
            postData[U[140551]] = uid;
            postData[U[140552]] = username;
            postData[U[140553]] = data.roleid;
            postData[U[140554]] = data.rolelevel;
            postData[U[140555]] = data.rolename;
            postData[U[140556]] = data.serverid;

            if (data.roleid && data.serverid) {
                $KT2P7E = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(U[140558], postData);
        },

        // 渠道-- 支付入口屏蔽
        paylimit: function (callback) {
            var param = {
                openid: open_id
            };
            sdk.getFyhd().paylimit(param, function (res) {
                callback(res);
            });
        },

        // 渠道-- 获取分享开关配置
        shareConfig: function (callback) {
            var param = {};
            sdk.getFyhd().shareConfig(param, function (res) {
                console.log(U[140515] + JSON.stringify(res));
                callback(res);
            });
        },

        // 渠道-- 屏蔽词检测
        msgSecCheck: function (content, callback) {
            var param = {
                content: content
            };
            sdk.getFyhd().msgSecCheck(param, function (res) {
                callback(res);
            });
        },

        // 渠道--互推页获取
        shareRecommend: function (callback) {
            var param = {};
            sdk.getFyhd().shareRecommend(param, function (res) {
                callback(res);
            });
        },

        // 渠道--互推点击上报
        sharePlay: function (to_appid, callback) {
            var param = {
                openid: open_id,
                to_appid: to_appid
            };
            sdk.getFyhd().sharePlay(param, function (res) {
                callback(res);
            });
        },

        mplimit: function (callback) {
            var param = {
                openid: open_id
            };
            sdk.getFyhd().mplimit(param, function (res) {
                callback(res);
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = U[140559].split('');
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
            var uuid = wx.getStorageSync(U[140498]);
            var idfv = wx.getStorageSync(U[140499]);
            var ad_code = wx.getStorageSync(U[140500]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: U[140560],
                net_type: system.wifiSignal == 0 ? '4G' : U[140561],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == U[140549] ? 1 : 2,
                is_from_min: 1
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(U[140562] + type);
            console.log(public_data);

            wx.request({
                url: U[140505] + HOST + U[140563] + type + U[140564] + encodeURIComponent(JSON.stringify(public_data))
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
        onShareMessageToFriend: function (data, callback) {
            wx.onShareMessageToFriend(function (res) {
                callback(res);
            });
        }

    };
}

function run(method, data, callback) {
    method in $KTE27P && $KTE27P[method](data, callback);
}

exports.init = function (data, callback) {
    run(U[140565], data, callback);
};

exports.login = function (callback) {
    run(U[140503], '', callback);
};

exports.login = function (callback) {
    run(U[140503], '', callback);
};

exports.pay = function (data, callback) {
    run(U[140543], data, callback);
};

exports.openService = function () {
    run(U[140566]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(U[140567], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(U[140568], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(U[140569], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(U[140523], data);
};

exports.downloadClient = function () {
    run(U[140570]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.paylimit = function (callback) {
    run(U[140571], callback);
};

exports.shareConfig = function (callback) {
    run(U[140572], callback);
};

exports.msgSecCheck = function (content, callback) {
    run(U[140573], content, callback);
};

exports.shareRecommend = function (callback) {
    run(U[140574], callback);
};

exports.sharePlay = function (to_appid, callback) {
    run(U[140575], to_appid, callback);
};

exports.mplimit = function (callback) {
    run(U[140576], callback);
};

exports.onShareMessageToFriend = function (data, callback) {
    run(U[140577], data, callback);
};