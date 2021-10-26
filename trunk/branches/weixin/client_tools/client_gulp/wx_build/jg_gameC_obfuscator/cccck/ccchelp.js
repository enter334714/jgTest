var p = wx.$h;
var config = {
    game_id: '2',
    game_pkg: p[27470],
    partner_id: '4',
    is_auth: false, //授权登录
    from: null //来源
};
window.config = config;

var $aL36KT = $aL6K3T();
var HOST = p[27471];
var $aL6TK3 = null;
var $aL6KT3 = null;
var game_ver = '';

function $aL6K3T() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            game_ver = ops && ops.game_ver ? ops.game_ver : 0;
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
            console.log(p[27475]);
            console.log(info);

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {

                wx.setStorageSync(p[27476], info.query.ad_code);
            }

            //用户来源，如："txcps"
            if (info.query && info.query.from && info.query.from != "") {
                if (is_new) wx.setStorageSync(p[27477], info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync(p[27477]);
                if (!from && from != "") config.from = from;
            }
            // config.from = "txcps"
            console.log(config.from);

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(p[731], data);

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
            console.log(p[27478]);
            var self = this;
            callbacks[p[27479]] = typeof callback == p[90] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[p[27480]]) {
                            console.log(p[27481]);
                            self.do_login(); //已授权
                        } else {
                            console.log(p[27482]);
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
                                type: p[4728],
                                text: p[27483],
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: p[27484],
                                    color: p[4750],
                                    textAlign: p[1975],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(res => {
                                console.log(res);
                                $aT3K6({ title: p[27485] });
                                if (res.errMsg == p[27486]) {
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
                        console.log(p[27487]);
                        self.do_login();
                    }
                });
            } else {
                console.log(p[27488] + config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log(p[27489] + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求

                        var public_data = self.getPublicData();
                        public_data['mo'] = 1;
                        public_data[p[23327]] = res.code;
                        public_data[p[27490]] = info ? info.nick_name : '';
                        public_data[p[27491]] = info ? info.head_img : '';

                        if (config.is_auth) {
                            wx.getUserInfo({
                                success: function (res6) {
                                    var encryptedData = res6.encryptedData;
                                    var iv = res6.iv;
                                    var signature = res6.signature;
                                    public_data[p[27492]] = encryptedData;
                                    public_data['iv'] = iv;
                                    public_data[p[27493]] = signature;
                                    wx.request({
                                        url: HOST + p[27494],
                                        method: p[27495],
                                        dataType: p[220],
                                        header: {
                                            'content-type': p[27496] // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log(p[27497]);
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
                                                        wx.setStorageSync(p[27498], data.data.sdk_token);
                                                        wx.setStorageSync(p[27499], data.data.user_id);
                                                        wx.setStorageSync(p[27500], data.data.username);
                                                        if (data.data.ext) {
                                                            wx.setStorageSync(p[27501], data.data.ext);
                                                        }
                                                    } catch (e) {}

                                                    callbacks[p[27479]] && callbacks[p[27479]](0, userData);
                                                } else {
                                                    callbacks[p[27479]] && callbacks[p[27479]](1, { errMsg: data.msg });
                                                }
                                            } else {
                                                callbacks[p[27479]] && callbacks[p[27479]](1, { errMsg: p[27502] });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks[p[27479]] && callbacks[p[27479]](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks[p[27479]] && callbacks[p[27479]](1, { errMsg: res6.errMsg });
                                }
                            });
                        } else {
                            wx.request({
                                url: HOST + p[27494],
                                method: p[27495],
                                dataType: p[220],
                                header: {
                                    'content-type': p[27496] // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log(p[27497]);
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
                                                wx.setStorageSync(p[27498], data.data.sdk_token);
                                                wx.setStorageSync(p[27499], data.data.user_id);
                                                wx.setStorageSync(p[27500], data.data.username);
                                                if (data.data.ext) {
                                                    wx.setStorageSync(p[27501], data.data.ext);
                                                }
                                            } catch (e) {}

                                            callbacks[p[27479]] && callbacks[p[27479]](0, userData);
                                        } else {
                                            callbacks[p[27479]] && callbacks[p[27479]](1, { errMsg: data.msg });
                                        }
                                    } else {
                                        callbacks[p[27479]] && callbacks[p[27479]](1, { errMsg: p[27503] });
                                    }
                                }
                            });
                        }
                    } else {
                        callbacks[p[27479]] && callbacks[p[27479]](1, { errMsg: res.errMsg });
                    }
                },
                fail: function (res) {
                    console.log(p[27504] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf(p[27505]) > -1 || res.errMsg.indexOf(p[27506]) > -1) {
                        // 处理用户拒绝授权的情况
                        callbacks[p[27479]] && callbacks[p[27479]](1, { errMsg: res.errMsg });
                    }
                }
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(p[27507]);
            var sdk_token = wx.getStorageSync(p[27498]);
            wx.request({
                url: HOST + p[27508],
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
                    console.log(p[27509]);
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
                    console.log(p[27510]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(p[27511]);
            console.log(data);

            var self = this;
            callbacks[p[27512]] = typeof callback == p[90] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(p[27498]);
            var session_key = wx.getStorageSync(p[27501]);
            if (!sdk_token || !session_key) {
                callbacks[p[27512]] && callbacks[p[27512]](1, { errMsg: p[27513] });
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
            public_data[p[27514]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: HOST + p[27515],
                method: p[27495],
                dataType: p[220],
                header: {
                    'content-type': p[27496] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(p[27516]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //小程序
                            if (typeof wx.requestPayment == p[3]) {
                                // if(data.data.platform == 'android'){
                                if (sysInfo.platform == p[27517] || sysInfo.platform == p[27518] || sysInfo.platform == p[27519]) {
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
                                            title: p[27520],
                                            content: p[27521],
                                            confirmText: p[27522],
                                            showCancel: false
                                        });
                                    }
                                }
                            } else {
                                self.minPay(data.data);
                            }
                        } else {
                            callbacks[p[27512]] && callbacks[p[27512]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[p[27479]] && callbacks[p[27479]](1, { errMsg: p[27523] });
                    }
                }
            });
        },

        //小游戏支付
        gamePay: function (data) {
            var self = this;
            //游戏币足够，直接扣款
            if (data.buyQuantity <= data.balance) {
                console.log(p[27524]);
                wx.showModal({
                    title: p[27520],
                    content: p[27525] + data.balance + p[27526] + data.buyQuantity + p[27527],
                    showCancel: false,
                    confirmText: p[27522],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log(p[27528]);
                console.log(data);
                wx.requestMidasPayment({
                    mode: p[27529],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == p[27530]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if (res.errMsg.indexOf(p[27531]) !== -1) {
                            callbacks[p[27512]] && callbacks[p[27512]](2, { errMsg: p[27532] });
                        } else {
                            callbacks[p[27512]] && callbacks[p[27512]](1, { errMsg: p[27533] + res.errMsg + '(' + res.errCode + ')' });
                        }
                    },
                    complete: function (res) {}
                });
            }
        },

        kfPay: function (data) {
            //检查订单支付是否完成
            var self = this;
            $aL6KT3 = data.orderId;
            wx.showModal({
                title: p[27520],
                content: p[27534],
                showCancel: false,
                confirmText: p[27522],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: p[27535],
                        sendMessageImg: p[27536]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log(p[27537]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync(p[27501]);
            wx.request({
                url: HOST + p[27538] + config.partner_id + '/' + config.game_pkg + '/',
                method: p[27495],
                dataType: p[220],
                header: {
                    'content-type': p[27496] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log(p[27539]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[p[27512]] && callbacks[p[27512]](0, ret);
                        } else {
                            callbacks[p[27512]] && callbacks[p[27512]](1, { errMsg: p[27540] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(p[27499]);
            var username = wx.getStorageSync(p[27500]);

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
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(p[27499]);
            var username = wx.getStorageSync(p[27500]);

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
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(p[27499]);
            var username = wx.getStorageSync(p[27500]);

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
            var system = wx.getSystemInfoSync();
            var uuid = wx.getStorageSync(p[27473]);
            var idfv = wx.getStorageSync(p[27474]);
            var ad_code = wx.getStorageSync(p[27476]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: p[27547],
                net_type: system.wifiSignal == 0 ? '4G' : p[27548],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: game_ver, //存放的是游戏版本号
                device: system.platform == p[27517] ? 1 : 2,
                is_from_min: 1
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
                url: HOST + p[27550] + type + p[27551] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.showModal({
                title: p[27552],
                content: p[27553],
                showCancel: false,
                confirmText: p[27522],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: p[27554],
                        sendMessageImg: p[27555]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        checkMsg: function (msg, callback) {
            console.log(p[27556]);
            var sdk_token = wx.getStorageSync(p[27498]);
            wx.request({
                url: HOST + p[27557],
                method: p[27495],
                dataType: p[220],
                header: {
                    'content-type': p[27496] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: msg
                },
                success: function (res) {
                    console.log(p[27558]);
                    callback && callback(res.data.code == 0 ? 1 : 0, res.data.msg);
                }
            });
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
exports.pay = function (data, callback) {
    run(p[27512], data, callback);
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

exports.checkMsg = function (data, callback) {
    run(p[27564], data, callback);
};