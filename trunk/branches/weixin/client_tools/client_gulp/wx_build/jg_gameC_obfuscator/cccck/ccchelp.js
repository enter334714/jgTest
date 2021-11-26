var p = wx.$h;
var config = {
    game_id: '2',
    game_pkg: p[47826],
    partner_id: '4',
    is_auth: false, //授权登录
    from: null //来源
};
window.config = config;

var $aHQV35 = $aHV3Q5();
var HOST = p[47827];
var $aHV53Q = null;
var $aHV35Q = null;
var game_ver = '';

function $aHV3Q5() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(p[47828]);
            var self = this;

            var uuid = wx.getStorageSync(p[47829]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(p[47829], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(p[47830]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(p[47830], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log(p[47831]);
            console.log(info);

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {

                wx.setStorageSync(p[47832], info.query.ad_code);
            }

            //用户来源，如："txcps"
            if (info.query && info.query.from && info.query.from != "") {
                if (is_new) wx.setStorageSync(p[47833], info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync(p[47833]);
                if (!from && from != "") config.from = from;
            }
            // config.from = "txcps"
            console.log(config.from);

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(p[20284], data);

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
            console.log(p[47834]);
            var self = this;
            callbacks[p[47835]] = typeof callback == p[47495] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[p[47836]]) {
                            console.log(p[47837]);
                            self.do_login(); //已授权
                        } else {
                            console.log(p[47838]);
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
                                type: p[24358],
                                text: p[47839],
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: p[47840],
                                    color: p[24381],
                                    textAlign: p[21559],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(res => {
                                console.log(res);
                                $a5Q3V({ title: p[47841] });
                                if (res.errMsg == p[47842]) {
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
                        console.log(p[47843]);
                        self.do_login();
                    }
                });
            } else {
                console.log(p[47844] + config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log(p[47845] + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求

                        var public_data = self.getPublicData();
                        public_data['mo'] = 1;
                        public_data[p[43104]] = res.code;
                        public_data[p[47846]] = info ? info.nick_name : '';
                        public_data[p[47847]] = info ? info.head_img : '';

                        if (config.is_auth) {
                            wx.getUserInfo({
                                success: function (res6) {
                                    var encryptedData = res6.encryptedData;
                                    var iv = res6.iv;
                                    var signature = res6.signature;
                                    public_data[p[47848]] = encryptedData;
                                    public_data['iv'] = iv;
                                    public_data[p[47849]] = signature;
                                    wx.request({
                                        url: HOST + p[47850],
                                        method: p[47851],
                                        dataType: p[25773],
                                        header: {
                                            'content-type': p[47852] // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log(p[47853]);
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
                                                        wx.setStorageSync(p[47854], data.data.sdk_token);
                                                        wx.setStorageSync(p[47855], data.data.user_id);
                                                        wx.setStorageSync(p[47856], data.data.username);
                                                        if (data.data.ext) {
                                                            wx.setStorageSync(p[47857], data.data.ext);
                                                        }
                                                    } catch (e) {}

                                                    callbacks[p[47835]] && callbacks[p[47835]](0, userData);
                                                } else {
                                                    callbacks[p[47835]] && callbacks[p[47835]](1, { errMsg: data.msg });
                                                }
                                            } else {
                                                callbacks[p[47835]] && callbacks[p[47835]](1, { errMsg: p[47858] });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks[p[47835]] && callbacks[p[47835]](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks[p[47835]] && callbacks[p[47835]](1, { errMsg: res6.errMsg });
                                }
                            });
                        } else {
                            wx.request({
                                url: HOST + p[47850],
                                method: p[47851],
                                dataType: p[25773],
                                header: {
                                    'content-type': p[47852] // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log(p[47853]);
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
                                                wx.setStorageSync(p[47854], data.data.sdk_token);
                                                wx.setStorageSync(p[47855], data.data.user_id);
                                                wx.setStorageSync(p[47856], data.data.username);
                                                if (data.data.ext) {
                                                    wx.setStorageSync(p[47857], data.data.ext);
                                                }
                                            } catch (e) {}

                                            callbacks[p[47835]] && callbacks[p[47835]](0, userData);
                                        } else {
                                            callbacks[p[47835]] && callbacks[p[47835]](1, { errMsg: data.msg });
                                        }
                                    } else {
                                        callbacks[p[47835]] && callbacks[p[47835]](1, { errMsg: p[47859] });
                                    }
                                }
                            });
                        }
                    } else {
                        callbacks[p[47835]] && callbacks[p[47835]](1, { errMsg: res.errMsg });
                    }
                },
                fail: function (res) {
                    console.log(p[47860] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf(p[47861]) > -1 || res.errMsg.indexOf(p[47862]) > -1) {
                        // 处理用户拒绝授权的情况
                        callbacks[p[47835]] && callbacks[p[47835]](1, { errMsg: res.errMsg });
                    }
                }
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(p[47863]);
            var sdk_token = wx.getStorageSync(p[47854]);
            wx.request({
                url: HOST + p[47864],
                method: p[47851],
                dataType: p[25773],
                header: {
                    'content-type': p[47852] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(p[47865]);
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
                    console.log(p[47866]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(p[47867]);
            console.log(data);

            var self = this;
            callbacks[p[47868]] = typeof callback == p[47495] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(p[47854]);
            var session_key = wx.getStorageSync(p[47857]);
            if (!sdk_token || !session_key) {
                callbacks[p[47868]] && callbacks[p[47868]](1, { errMsg: p[47869] });
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
            public_data[p[47870]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: HOST + p[47871],
                method: p[47851],
                dataType: p[25773],
                header: {
                    'content-type': p[47852] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(p[47872]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //小程序
                            if (typeof wx.requestPayment == p[47446]) {
                                // if(data.data.platform == 'android'){
                                if (sysInfo.platform == p[47873] || sysInfo.platform == p[47874] || sysInfo.platform == p[47875]) {
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
                                            title: p[47876],
                                            content: p[47877],
                                            confirmText: p[47878],
                                            showCancel: false
                                        });
                                    }
                                }
                            } else {
                                self.minPay(data.data);
                            }
                        } else {
                            callbacks[p[47868]] && callbacks[p[47868]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[p[47835]] && callbacks[p[47835]](1, { errMsg: p[47879] });
                    }
                }
            });
        },

        //小游戏支付
        gamePay: function (data) {
            var self = this;
            //游戏币足够，直接扣款
            if (data.buyQuantity <= data.balance) {
                console.log(p[47880]);
                wx.showModal({
                    title: p[47876],
                    content: p[47881] + data.balance + p[47882] + data.buyQuantity + p[47883],
                    showCancel: false,
                    confirmText: p[47878],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log(p[47884]);
                console.log(data);
                wx.requestMidasPayment({
                    mode: p[47885],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == p[47886]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if (res.errMsg.indexOf(p[47887]) !== -1) {
                            callbacks[p[47868]] && callbacks[p[47868]](2, { errMsg: p[47888] });
                        } else {
                            callbacks[p[47868]] && callbacks[p[47868]](1, { errMsg: p[47889] + res.errMsg + '(' + res.errCode + ')' });
                        }
                    },
                    complete: function (res) {}
                });
            }
        },

        kfPay: function (data) {
            //检查订单支付是否完成
            var self = this;
            $aHV35Q = data.orderId;
            wx.showModal({
                title: p[47876],
                content: p[47890],
                showCancel: false,
                confirmText: p[47878],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: p[47891],
                        sendMessageImg: p[47892]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log(p[47893]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync(p[47857]);
            wx.request({
                url: HOST + p[47894] + config.partner_id + '/' + config.game_pkg + '/',
                method: p[47851],
                dataType: p[25773],
                header: {
                    'content-type': p[47852] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log(p[47895]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[p[47868]] && callbacks[p[47868]](0, ret);
                        } else {
                            callbacks[p[47868]] && callbacks[p[47868]](1, { errMsg: p[47896] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(p[47855]);
            var username = wx.getStorageSync(p[47856]);

            var postData = {};
            postData[p[47897]] = uid;
            postData[p[47898]] = username;
            postData[p[30577]] = data.roleid;
            postData[p[47899]] = data.rolelevel;
            postData[p[47900]] = data.rolename;
            postData[p[31233]] = data.serverid;

            if (data.roleid && data.serverid) {
                $aHV53Q = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(p[20006], postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(p[47855]);
            var username = wx.getStorageSync(p[47856]);

            var postData = {};
            postData[p[47897]] = uid;
            postData[p[47898]] = username;
            postData[p[30577]] = data.roleid;
            postData[p[47899]] = data.rolelevel;
            postData[p[47900]] = data.rolename;
            postData[p[31233]] = data.serverid;

            if (data.roleid && data.serverid) {
                $aHV53Q = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(p[25654], postData);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(p[47855]);
            var username = wx.getStorageSync(p[47856]);

            var postData = {};
            postData[p[47897]] = uid;
            postData[p[47898]] = username;
            postData[p[30577]] = data.roleid;
            postData[p[47899]] = data.rolelevel;
            postData[p[47900]] = data.rolename;
            postData[p[31233]] = data.serverid;

            if (data.roleid && data.serverid) {
                $aHV53Q = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(p[47901], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = p[47902].split('');
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
            var uuid = wx.getStorageSync(p[47829]);
            var idfv = wx.getStorageSync(p[47830]);
            var ad_code = wx.getStorageSync(p[47832]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: p[47903],
                net_type: system.wifiSignal == 0 ? '4G' : p[47904],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: game_ver, //存放的是游戏版本号
                device: system.platform == p[47873] ? 1 : 2,
                is_from_min: 1
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(p[47905] + type);
            console.log(public_data);

            wx.request({
                url: HOST + p[47906] + type + p[47907] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.showModal({
                title: p[47908],
                content: p[47909],
                showCancel: false,
                confirmText: p[47878],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: p[47910],
                        sendMessageImg: p[47911]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        checkMsg: function (msg, callback) {
            console.log(p[47912]);
            var sdk_token = wx.getStorageSync(p[47854]);
            wx.request({
                url: HOST + p[47913],
                method: p[47851],
                dataType: p[25773],
                header: {
                    'content-type': p[47852] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: msg
                },
                success: function (res) {
                    console.log(p[47914]);
                    callback && callback(res.data.code == 0 ? 1 : 0, res.data.msg);
                }
            });
        },

        //新版消息检测接口
        checkMsgV2: function (msg, callback) {
            console.log(p[47912]);
            var sdk_token = wx.getStorageSync(p[47854]);
            wx.request({
                url: HOST + p[47915],
                method: p[47851],
                dataType: p[25773],
                header: {
                    'content-type': p[47852] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: msg,
                    scene: 1
                },
                success: function (res) {
                    console.log(p[47914]);
                    callback && callback(res.data.code == 0 ? 1 : 0, res.data.msg);
                }
            });
        },

        // 发送订阅消息
        sendMessage: function (template_id, data, callback) {
            console.log(p[47916]);
            var sdk_token = wx.getStorageSync(p[47854]);
            wx.request({
                url: HOST + p[47917],
                method: p[47851],
                dataType: p[25773],
                header: {
                    'content-type': p[47852] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    template_id: template_id,
                    data: data
                },
                success: function (res) {
                    console.log(p[47918]);
                    callback && callback(res.data.code == 0 ? 1 : 0, res.data.msg);
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in $aHQV35 && $aHQV35[method](data, callback);
}

exports.init = function (data, callback) {
    run(p[20364], data, callback);
};
exports.login = function (callback) {
    run(p[47835], '', callback);
};
exports.pay = function (data, callback) {
    run(p[47868], data, callback);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(p[47919], data);
};
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(p[47920], data);
};
exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(p[47921], data);
};

exports.downloadClient = function () {
    run(p[47922]);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run(p[47923]);
};

exports.checkMsg = function (data, callback) {
    run(p[47924], data, callback);
};

exports.checkMsgV2 = function (data, callback) {
    run(p[47925], data, callback);
};

exports.sendMessage = function (template_id, data, callback) {
    run(p[47926], template_id, data, callback);
};