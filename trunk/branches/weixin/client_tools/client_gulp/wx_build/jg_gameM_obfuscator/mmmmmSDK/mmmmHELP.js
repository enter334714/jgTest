var Y = wx.$M;
var config = {
    game_id: '2',
    game_pkg: Y[208974],
    partner_id: '4',
    is_auth: false, //授权登录
    from: null //来源
};
window.config = config;

var $m51240 = $m52041();
var HOST = Y[208975];
var $m51204 = null;
var $m52410 = null;
var game_ver = '';

function $m52041() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(Y[208976]);
            var self = this;

            var uuid = wx.getStorageSync(Y[208977]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(Y[208977], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(Y[208978]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(Y[208978], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log(Y[208979]);
            console.log(info);

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {

                wx.setStorageSync(Y[208980], info.query.ad_code);
            }

            //用户来源，如："txcps"
            if (info.query && info.query.from && info.query.from != "") {
                if (is_new) wx.setStorageSync(Y[208981], info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync(Y[208981]);
                if (!from && from != "") config.from = from;
            }
            // config.from = "txcps"
            console.log(config.from);

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(Y[181064], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },
        //登录接口
        login: function (data, callback) {
            console.log(Y[208982]);
            var self = this;
            callbacks[Y[180660]] = typeof callback == Y[208983] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[Y[208984]]) {
                            console.log(Y[208985]);
                            self.do_login(); //已授权
                        } else {
                            console.log(Y[208986]);
                            wx.hideLoading({});
                            // setTimeout(() => {
                            //     wx.hideLoading();
                            // }, 1000);
                            var system_info = wx.getSystemInfoSync();
                            var screen_width = system_info.screenWidth;
                            var screen_height = system_info.screenHeight;
                            var btn_width = screen_width * 2 / 3;
                            var btn_height = btn_width / 3;
                            var btn_left = (screen_width - btn_width) / 2;
                            var btn_top = screen_height / 2;
                            var button = wx.createUserInfoButton({
                                type: Y[180344],
                                text: Y[208987],
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: Y[208988],
                                    color: Y[180236],
                                    textAlign: Y[180193],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(res => {
                                console.log(res);
                                $m4102({ title: Y[208989] });
                                if (res.errMsg == Y[208990]) {
                                    self.do_login({
                                        head_img: res.userInfo.avatarUrl || '',
                                        nick_name: res.userInfo.nickName || ''
                                    });
                                } else {
                                    self.do_login();
                                }
                                button.destroy();
                            });
                        }
                    },
                    fail: function () {
                        console.log(Y[208991]);
                        self.do_login();
                    }
                });
            } else {
                console.log(Y[208992] + config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log(Y[208993] + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求

                        var public_data = self.getPublicData();
                        public_data['mo'] = 1;
                        public_data[Y[204229]] = res.code;
                        public_data[Y[208994]] = info ? info.nick_name : '';
                        public_data[Y[208995]] = info ? info.head_img : '';

                        if (config.is_auth) {
                            wx.getUserInfo({
                                success: function (res6) {
                                    var encryptedData = res6.encryptedData;
                                    var iv = res6.iv;
                                    var signature = res6.signature;
                                    public_data[Y[208996]] = encryptedData;
                                    public_data['iv'] = iv;
                                    public_data[Y[208997]] = signature;
                                    wx.request({
                                        url: HOST + Y[208998],
                                        method: Y[180628],
                                        dataType: Y[186509],
                                        header: {
                                            'content-type': Y[180764] // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log(Y[208999]);
                                            console.log(res);
                                            if (res.statusCode == 200) {
                                                var data = res.data;
                                                if (data.state) {
                                                    var userData = {
                                                        userid: data.data.user_id,
                                                        account: data.data.nick_name,
                                                        token: data.data.token
                                                    };
                                                    try {
                                                        wx.setStorageSync(Y[209000], data.data.sdk_token);
                                                        wx.setStorageSync(Y[209001], data.data.user_id);
                                                        wx.setStorageSync(Y[209002], data.data.username);
                                                        wx.setStorageSync(Y[209003], data.data.openid);
                                                        if (data.data.ext) {
                                                            wx.setStorageSync(Y[209004], data.data.ext);
                                                        }
                                                    } catch (e) {}

                                                    callbacks[Y[180660]] && callbacks[Y[180660]](0, userData);
                                                } else {
                                                    callbacks[Y[180660]] && callbacks[Y[180660]](1, { errMsg: data.msg });
                                                }
                                            } else {
                                                callbacks[Y[180660]] && callbacks[Y[180660]](1, { errMsg: Y[209005] });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks[Y[180660]] && callbacks[Y[180660]](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks[Y[180660]] && callbacks[Y[180660]](1, { errMsg: res6.errMsg });
                                }
                            });
                        } else {
                            wx.request({
                                url: HOST + Y[208998],
                                method: Y[180628],
                                dataType: Y[186509],
                                header: {
                                    'content-type': Y[180764] // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log(Y[208999]);
                                    console.log(res);
                                    if (res.statusCode == 200) {
                                        var data = res.data;
                                        if (data.state) {
                                            var userData = {
                                                userid: data.data.user_id,
                                                account: data.data.nick_name,
                                                token: data.data.token
                                            };
                                            try {
                                                wx.setStorageSync(Y[209000], data.data.sdk_token);
                                                wx.setStorageSync(Y[209001], data.data.user_id);
                                                wx.setStorageSync(Y[209002], data.data.username);
                                                wx.setStorageSync(Y[209003], data.data.openid);
                                                if (data.data.ext) {
                                                    wx.setStorageSync(Y[209004], data.data.ext);
                                                }
                                            } catch (e) {}

                                            callbacks[Y[180660]] && callbacks[Y[180660]](0, userData);
                                        } else {
                                            callbacks[Y[180660]] && callbacks[Y[180660]](1, { errMsg: data.msg });
                                        }
                                    } else {
                                        callbacks[Y[180660]] && callbacks[Y[180660]](1, { errMsg: Y[209006] });
                                    }
                                }
                            });
                        }
                    } else {
                        callbacks[Y[180660]] && callbacks[Y[180660]](1, { errMsg: res.errMsg });
                    }
                },
                fail: function (res) {
                    console.log(Y[209007] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf(Y[209008]) > -1 || res.errMsg.indexOf(Y[209009]) > -1) {
                        // 处理用户拒绝授权的情况
                        callbacks[Y[180660]] && callbacks[Y[180660]](1, { errMsg: res.errMsg });
                    }
                }
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(Y[209010]);
            var sdk_token = wx.getStorageSync(Y[209000]);
            wx.request({
                url: HOST + Y[209011],
                method: Y[180628],
                dataType: Y[186509],
                header: {
                    'content-type': Y[180764] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(Y[209012]);
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
                },
                fail: function (res) {
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
                    console.log(Y[209013]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(Y[209014]);
            console.log(data);

            var self = this;
            callbacks[Y[180714]] = typeof callback == Y[208983] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(Y[209000]);
            var session_key = wx.getStorageSync(Y[209004]);
            if (!sdk_token || !session_key) {
                callbacks[Y[180714]] && callbacks[Y[180714]](1, { errMsg: Y[209015] });
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
            public_data[Y[209016]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: HOST + Y[209017],
                method: Y[180628],
                dataType: Y[186509],
                header: {
                    'content-type': Y[180764] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Y[209018]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //小程序
                            if (typeof wx.requestPayment == Y[209019]) {
                                // if(data.data.platform == 'android'){
                                if (sysInfo.platform == Y[180111] || sysInfo.platform == Y[180114] || sysInfo.platform == Y[180625]) {
                                    if (data.data.is_android_pay) {
                                        self.kfPay(data.data);
                                    } else {
                                        self.gamePay(data.data);
                                    }
                                } else {
                                    if (data.data.is_ios_pay) {
                                        if (data.data.ios_pay_type == 1) {
                                            self.kfPay(data.data);
                                        }
                                    } else {
                                        wx.showModal({
                                            title: Y[209020],
                                            content: Y[209021],
                                            confirmText: Y[209022],
                                            showCancel: false
                                        });
                                    }
                                }
                            } else {
                                self.minPay(data.data);
                            }
                        } else {
                            callbacks[Y[180714]] && callbacks[Y[180714]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[Y[180660]] && callbacks[Y[180660]](1, { errMsg: Y[209023] });
                    }
                }
            });
        },

        //小游戏支付
        gamePay: function (data) {
            var self = this;
            //游戏币足够，直接扣款
            if (data.buyQuantity <= data.balance) {
                console.log(Y[209024]);
                wx.showModal({
                    title: Y[209020],
                    content: Y[209025] + data.balance + Y[209026] + data.buyQuantity + Y[209027],
                    showCancel: false,
                    confirmText: Y[209022],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log(Y[209028]);
                console.log(data);
                wx.requestMidasPayment({
                    mode: Y[209029],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == Y[209030]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if (res.errMsg.indexOf(Y[209031]) !== -1) {
                            callbacks[Y[180714]] && callbacks[Y[180714]](2, { errMsg: Y[209032] });
                        } else {
                            callbacks[Y[180714]] && callbacks[Y[180714]](1, { errMsg: Y[209033] + res.errMsg + '(' + res.errCode + ')' });
                        }
                    },
                    complete: function (res) {}
                });
            }
        },

        kfPay: function (data) {
            //检查订单支付是否完成
            var self = this;
            $m52410 = data.orderId;
            wx.showModal({
                title: Y[209020],
                content: Y[209034],
                showCancel: false,
                confirmText: Y[209022],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: Y[209035],
                        sendMessageImg: Y[209036]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log(Y[209037]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync(Y[209004]);
            wx.request({
                url: HOST + Y[209038] + config.partner_id + '/' + config.game_pkg + '/',
                method: Y[180628],
                dataType: Y[186509],
                header: {
                    'content-type': Y[180764] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log(Y[209039]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[Y[180714]] && callbacks[Y[180714]](0, ret);
                        } else {
                            callbacks[Y[180714]] && callbacks[Y[180714]](1, { errMsg: Y[209040] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(Y[209001]);
            var username = wx.getStorageSync(Y[209002]);

            var postData = {};
            postData[Y[209041]] = uid;
            postData[Y[209042]] = username;
            postData[Y[191477]] = data.roleid;
            postData[Y[209043]] = data.rolelevel;
            postData[Y[209044]] = data.rolename;
            postData[Y[180024]] = data.serverid;

            if (data.roleid && data.serverid) {
                $m51204 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Y[180155], postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(Y[209001]);
            var username = wx.getStorageSync(Y[209002]);

            var postData = {};
            postData[Y[209041]] = uid;
            postData[Y[209042]] = username;
            postData[Y[191477]] = data.roleid;
            postData[Y[209043]] = data.rolelevel;
            postData[Y[209044]] = data.rolename;
            postData[Y[180024]] = data.serverid;

            if (data.roleid && data.serverid) {
                $m51204 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Y[186391], postData);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(Y[209001]);
            var username = wx.getStorageSync(Y[209002]);

            var postData = {};
            postData[Y[209041]] = uid;
            postData[Y[209042]] = username;
            postData[Y[191477]] = data.roleid;
            postData[Y[209043]] = data.rolelevel;
            postData[Y[209044]] = data.rolename;
            postData[Y[180024]] = data.serverid;

            if (data.roleid && data.serverid) {
                $m51204 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Y[209045], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = Y[209046].split('');
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
            var uuid = wx.getStorageSync(Y[208977]);
            var idfv = wx.getStorageSync(Y[208978]);
            var ad_code = wx.getStorageSync(Y[208980]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: Y[209047],
                net_type: system.wifiSignal == 0 ? '4G' : Y[209048],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: game_ver, //存放的是游戏版本号
                device: system.platform == Y[180111] ? 1 : 2,
                is_from_min: 1
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(Y[209049] + type);
            console.log(public_data);

            wx.request({
                url: HOST + Y[209050] + type + Y[209051] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            var openid = wx.getStorageSync(Y[209003]);
            var msg = Y[209052] + openid;
            wx.showModal({
                title: Y[209053],
                content: Y[209054],
                showCancel: false,
                confirmText: Y[209022],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: msg,
                        sendMessageImg: Y[209055]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        checkMsg: function (msg, callback) {
            console.log(Y[209056]);
            var sdk_token = wx.getStorageSync(Y[209000]);
            wx.request({
                url: HOST + Y[209057],
                method: Y[180628],
                dataType: Y[186509],
                header: {
                    'content-type': Y[180764] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: msg
                },
                success: function (res) {
                    console.log(Y[209058]);
                    callback && callback(res.data.code == 0 ? 1 : 0, res.data.msg);
                }
            });
        },

        //新版消息检测接口
        checkMsgV2: function (msg, callback) {
            console.log(Y[209056]);
            var sdk_token = wx.getStorageSync(Y[209000]);
            wx.request({
                url: HOST + Y[209059],
                method: Y[180628],
                dataType: Y[186509],
                header: {
                    'content-type': Y[180764] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: msg,
                    scene: 1
                },
                success: function (res) {
                    console.log(Y[209058]);
                    callback && callback(res.data.code == 0 ? 1 : 0, res.data.msg);
                }
            });
        },

        // 发送订阅消息
        sendMessage: function (template_id, data, callback) {
            console.log(Y[209060]);
            var sdk_token = wx.getStorageSync(Y[209000]);
            wx.request({
                url: HOST + Y[209061],
                method: Y[180628],
                dataType: Y[186509],
                header: {
                    'content-type': Y[180764] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    template_id: template_id,
                    data: data
                },
                success: function (res) {
                    console.log(Y[209062]);
                    callback && callback(res.data.code == 0 ? 1 : 0, res.data.msg);
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in $m51240 && $m51240[method](data, callback);
}

exports.init = function (data, callback) {
    run(Y[180483], data, callback);
};
exports.login = function (callback) {
    run(Y[180660], '', callback);
};
exports.pay = function (data, callback) {
    run(Y[180714], data, callback);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Y[180722], data);
};
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(Y[180724], data);
};
exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Y[180726], data);
};

exports.downloadClient = function () {
    run(Y[209063]);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run(Y[209064]);
};

exports.checkMsg = function (data, callback) {
    run(Y[209065], data, callback);
};

exports.checkMsgV2 = function (data, callback) {
    run(Y[209066], data, callback);
};

exports.sendMessage = function (template_id, data, callback) {
    run(Y[209067], template_id, data, callback);
};