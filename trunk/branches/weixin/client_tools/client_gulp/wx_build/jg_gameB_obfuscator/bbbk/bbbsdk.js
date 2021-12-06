var _ = wx.y$;
import Dall from './bbbhelp';
var config = {
    game_id: _[28059], //九歌行--天枢服--官方
    game_pkg: _[28060],
    partner_id: '19',
    game_ver: _[28061], //B包为2.x.x，每次上传版本修改，先设置，上传审核版本的时候保持一致
    is_auth: false, //授权登录
    from: null, //来源
    tmpId: { 1: _[28062], 2: _[28063], 3: _[28064] }, // 订阅的类型 和 模板id
    min_app_id: ''
};
window.config = config;

var p$ADEBC = p$AECBD();
var HOST = _[28046];
var t;
var t_second = 0;
var t_max = 300;
var p$ADECB = null;
var p$AEBCD = null;
var p$AEBDC = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function p$AECBD() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(_[28065]);
            var self = this;

            var uuid = wx.getStorageSync(_[28066]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(_[28066], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(_[28067]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(_[28067], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log(_[28068]);
            console.log(info);

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(_[28069], info.query.ad_code);
            }

            //用户来源，如："txcps"
            if (info.query && info.query.from && info.query.from != "") {
                if (is_new) wx.setStorageSync(_[28070], info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync(_[28070]);
                if (!from && from != "") config.from = from;
            }
            // config.from = "txcps"
            console.log(_[28071] + config.from);

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(_[284], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                p$AEBCD = {
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
            console.log(_[28072]);
            var self = this;
            callbacks[_[28073]] = typeof callback == _[27711] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[_[28074]]) {
                            console.log(_[28075]);
                            self.do_login(); //已授权
                        } else {
                            console.log(_[28076]);
                            wx.hideLoading({});
                            var system_info = wx.getSystemInfoSync();
                            var screen_width = system_info.screenWidth;
                            var screen_height = system_info.screenHeight;
                            var btn_width = screen_width * 2 / 3;
                            var btn_height = btn_width / 3;
                            var btn_left = (screen_width - btn_width) / 2;
                            var btn_top = screen_height / 2;
                            var button = wx.createUserInfoButton({
                                type: _[4372],
                                text: _[28077],
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: _[28078],
                                    color: _[4395],
                                    textAlign: _[1557],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(res => {
                                console.log(res);
                                p$BDCE({ title: _[28079] });
                                if (res.errMsg == _[28080]) {
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
                        console.log(_[28081]);
                        self.do_login();
                    }
                });
            } else {
                console.log(_[28082] + config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log(_[28083] + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求
                        var public_data = self.getPublicData();
                        public_data[_[28084]] = 1;
                        public_data[_[23216]] = res.code;
                        public_data[_[28085]] = info ? info.nick_name : '';
                        public_data[_[28086]] = info ? info.head_img : '';

                        if (p$AEBCD && typeof p$AEBCD == _[279]) {
                            for (var key in p$AEBCD) {
                                public_data[key] = p$AEBCD[key];
                            }
                        }
                        if (config.is_auth) {
                            wx.getUserInfo({
                                success: function (res6) {
                                    var encryptedData = res6.encryptedData;
                                    var iv = res6.iv;
                                    var signature = res6.signature;
                                    public_data[_[28087]] = encryptedData;
                                    public_data['iv'] = iv;
                                    public_data[_[28088]] = signature;
                                    wx.request({
                                        url: _[24755] + HOST + _[28089],
                                        method: _[28050],
                                        dataType: _[5787],
                                        header: {
                                            'content-type': _[28051] // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log(_[28090]);
                                            console.log(res);
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
                                                        wx.setStorageSync(_[28091], data.data.sdk_token);
                                                        wx.setStorageSync(_[28092], data.data.user_id);
                                                        wx.setStorageSync(_[28047], data.data.username);
                                                        if (data.data.ext) {
                                                            wx.setStorageSync(_[28093], data.data.ext);
                                                        }
                                                    } catch (e) {}

                                                    callbacks[_[28073]] && callbacks[_[28073]](0, userData);
                                                } else {
                                                    callbacks[_[28073]] && callbacks[_[28073]](1, { errMsg: data.msg });
                                                }

                                                //登录成功，加载右上角分享数据
                                                self.getShareInfo(_[28094], function (data) {
                                                    console.log(_[28095]);
                                                    wx.onShareAppMessage(function () {
                                                        //记录开始分享
                                                        self.logStartShare(_[28094]);
                                                        return {
                                                            title: data.title,
                                                            imageUrl: data.img,
                                                            query: data.query
                                                        };
                                                    });
                                                });
                                            } else {
                                                callbacks[_[28073]] && callbacks[_[28073]](1, { errMsg: _[28096] });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks[_[28073]] && callbacks[_[28073]](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks[_[28073]] && callbacks[_[28073]](1, { errMsg: res6.errMsg });
                                }
                            });
                        } else {
                            var lastTime = Date.now();
                            wx.request({
                                url: _[24755] + HOST + _[28089],
                                method: _[28050],
                                dataType: _[5787],
                                header: {
                                    'content-type': _[28051] // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log(_[28090]);
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
                                                wx.setStorageSync(_[28091], data.data.sdk_token);
                                                wx.setStorageSync(_[28092], data.data.user_id);
                                                wx.setStorageSync(_[28047], data.data.username);
                                                if (data.data.ext) {
                                                    wx.setStorageSync(_[28093], data.data.ext);
                                                }
                                            } catch (e) {}

                                            callbacks[_[28073]] && callbacks[_[28073]](0, userData);
                                        } else {
                                            callbacks[_[28073]] && callbacks[_[28073]](1, { type: _[28097], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                                        }

                                        //登录成功，加载右上角分享数据
                                        self.getShareInfo(_[28094], function (data) {
                                            console.log(_[28095]);
                                            wx.onShareAppMessage(function () {
                                                //记录开始分享
                                                self.logStartShare(_[28094]);
                                                return {
                                                    title: data.title,
                                                    imageUrl: data.img,
                                                    query: data.query
                                                };
                                            });
                                        });
                                    } else {
                                        callbacks[_[28073]] && callbacks[_[28073]](1, { type: _[28097], errMsg: _[28096], time: Date.now() - lastTime, res: res });
                                    }
                                },
                                fail: function (res) {
                                    console.log(_[28098]);
                                    console.log(res);
                                    self.log(_[499], { event: _[28099] });
                                    requestCallback = true;
                                    if (loginHandler) clearTimeout(loginHandler);
                                    loginHandler = null;
                                    callbacks[_[28073]] && callbacks[_[28073]](1, { type: _[28100], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                                }
                            });
                            if (!requestCallback) {
                                var timeOutFunc = function () {
                                    console.log(_[28101]);
                                    self.log(_[499], { event: _[28102] });
                                    callbacks[_[28073]] && callbacks[_[28073]](1, { type: _[28103], errMsg: _[28104], time: Date.now() - lastTime });
                                    callbacks[_[28073]] = null; //回调后置空，以免success或fail里重复回调
                                };
                                loginHandler = setTimeout(timeOutFunc, 20000);
                            }
                        }
                    } else {
                        callbacks[_[28073]] && callbacks[_[28073]](1, { type: _[28105], errMsg: res.errMsg, res: res });
                    }
                },
                fail: function (res) {
                    console.log(_[28106] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf(_[28107]) > -1 || res.errMsg.indexOf(_[28108]) > -1) {
                        // 处理用户拒绝授权的情况
                        callbacks[_[28073]] && callbacks[_[28073]](1, { type: _[28109], errMsg: res.errMsg, res: res });
                    } else {
                        callbacks[_[28073]] && callbacks[_[28073]](1, { type: _[28109], errMsg: res.errMsg, res: res });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[_[28110]] = typeof callback == _[27711] ? callback : null;
            var type = data.type || _[28110];
            console.log(_[28111] + type);
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
            var sdk_token = wx.getStorageSync(_[28091]);
            wx.request({
                url: _[24755] + HOST + _[28112],
                method: _[28050],
                dataType: _[5787],
                header: {
                    'content-type': _[28051] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: p$ADECB ? p$ADECB.server_id : '',
                    role_id: p$ADECB ? p$ADECB.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(_[28113]);
            callbacks[_[7020]] = typeof callback == _[27711] ? callback : null;
            var sdk_token = wx.getStorageSync(_[28091]);
            wx.request({
                url: _[24755] + HOST + _[28114],
                method: _[28050],
                dataType: _[5787],
                header: {
                    'content-type': _[28051] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(_[28115]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        config.min_app_id = data.data.min_app_id;
                        if (data.state) {
                            callbacks[_[7020]] && callbacks[_[7020]](data.data);
                        } else {
                            callbacks[_[7020]] && callbacks[_[7020]]({ develop: 0 });
                        }
                    } else {
                        callbacks[_[7020]] && callbacks[_[7020]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(_[28116]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[_[7020]] && callbacks[_[7020]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(_[28117]);
                    callbacks[_[7020]] && callbacks[_[7020]]({ develop: 0 });
                    callbacks[_[7020]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(_[28118]);
            var sdk_token = wx.getStorageSync(_[28091]);
            wx.request({
                url: _[24755] + HOST + _[28119],
                method: _[28050],
                dataType: _[5787],
                header: {
                    'content-type': _[28051] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: p$ADECB ? p$ADECB.server_id : '',
                    role_id: p$ADECB ? p$ADECB.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(_[28120]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[_[28110]] && callbacks[_[28110]](1, { errMsg: _[28121] + data.msg });
                        }
                    } else {
                        callbacks[_[28110]] && callbacks[_[28110]](1, { errMsg: _[28122] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(_[28123]);
            var sdk_token = wx.getStorageSync(_[28091]);
            wx.request({
                url: _[24755] + HOST + _[28124],
                method: _[28050],
                dataType: _[5787],
                header: {
                    'content-type': _[28051] // 默认值
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
                    console.log(_[28125]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(_[28126]);
            var sdk_token = wx.getStorageSync(_[28091]);
            wx.request({
                url: _[24755] + HOST + _[28127],
                method: _[28050],
                dataType: _[5787],
                header: {
                    'content-type': _[28051] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log(_[28128]);
                    console.log(res);
                    callback && callback(res);
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
                    console.log(_[28129]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(_[28130]);
            console.log(data);

            var self = this;
            callbacks[_[28131]] = typeof callback == _[27711] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(_[28091]);
            var session_key = wx.getStorageSync(_[28093]);
            if (!sdk_token || !session_key) {
                callbacks[_[28131]] && callbacks[_[28131]](1, { errMsg: _[28132] });
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
            public_data[_[28133]] = JSON.stringify(order_data);
            public_data[_[28084]] = 1;

            //发起网络请求
            wx.request({
                url: _[24755] + HOST + _[28134],
                method: _[28050],
                dataType: _[5787],
                header: {
                    'content-type': _[28051] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[28135]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //小程序
                            if (typeof wx.requestPayment == _[27662]) {
                                // if(data.data.platform == 'android'){
                                if (sysInfo.platform == _[28136] || sysInfo.platform == _[28137]) {
                                    if (data.data.is_android_pay) {
                                        if (data.data.ios_pay_type == 1) {
                                            self.kfPay(data.data);
                                        } else if (data.data.ios_pay_type == 2) {
                                            self.xiaoPay(data.data);
                                        }
                                    } else {
                                        self.gamePay(data.data);
                                    }
                                } else {
                                    if (data.data.is_ios_pay) {
                                        if (data.data.ios_pay_type == 1) {
                                            self.kfPay(data.data);
                                        } else if (data.data.ios_pay_type == 2) {
                                            self.xiaoPay(data.data);
                                        }
                                    } else {
                                        wx.showModal({
                                            title: _[28138],
                                            content: _[28139],
                                            confirmText: _[28140],
                                            showCancel: false
                                        });
                                    }
                                }
                            } else {
                                self.minPay(data.data);
                            }
                        } else {
                            callbacks[_[28131]] && callbacks[_[28131]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[_[28131]] && callbacks[_[28131]](1, { errMsg: _[28096] });
                    }
                }
            });
        },
        xiaoPay: function (data) {
            var self = this;
            wx.navigateToMiniProgram({
                appId: config.min_app_id,
                path: _[28141] + data.orderId + _[28142] + data.money,
                extraData: {},
                envVersion: _[28057],
                success(res) {
                    // 打开成功
                }
            });
        },
        //小程序支付
        minPay: function (data) {
            //正式调起微信支付
            var self = this;
            wx.requestPayment({
                timeStamp: data.timeStamp,
                nonceStr: data.nonceStr,
                package: data.package,
                signType: data.signType,
                paySign: data.paySign,
                success: function (res) {
                    if (res.errMsg == _[28143]) {
                        var ret = {
                            cpOrderNo: self.order_data.cpbill,
                            orderNo: data.orderId,
                            amount: self.order_data.price,
                            extension: self.order_data.extension
                        };
                        callbacks[_[28131]] && callbacks[_[28131]](0, ret);
                    }
                },
                fail: function (res) {
                    if (res.errMsg == _[28144]) {
                        callbacks[_[28131]] && callbacks[_[28131]](2, { errMsg: _[28145] });
                    } else {
                        callbacks[_[28131]] && callbacks[_[28131]](1, { errMsg: _[28146] + res.err_desc });
                    }
                },
                complete: function (res) {}
            });
        },

        //小游戏支付
        gamePay: function (data) {
            var self = this;
            //游戏币足够，直接扣款
            if (data.buyQuantity <= data.balance) {
                console.log(_[28147]);
                wx.showModal({
                    title: _[28138],
                    content: _[28148] + data.balance + _[28149] + data.buyQuantity + _[28150],
                    showCancel: false,
                    confirmText: _[28140],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log(_[28151]);
                wx.requestMidasPayment({
                    mode: _[28152],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == _[28153]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if (res.errMsg.indexOf(_[28154]) !== -1) {
                            callbacks[_[28131]] && callbacks[_[28131]](2, { errMsg: _[28145] });
                        } else {
                            callbacks[_[28131]] && callbacks[_[28131]](1, { errMsg: _[28146] + res.errMsg });
                        }
                    },
                    complete: function (res) {}
                });
            }
        },

        kfPay: function (data) {
            //检查订单支付是否完成
            var self = this;
            p$AEBDC = data.orderId;
            wx.showModal({
                title: _[28138],
                content: _[28155],
                showCancel: false,
                confirmText: _[28140],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: _[28156],
                        sendMessageImg: _[28157]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log(_[28158]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync(_[28093]);
            wx.request({
                url: _[24755] + HOST + _[28159] + config.partner_id + '/' + config.game_pkg + '/',
                method: _[28050],
                dataType: _[5787],
                header: {
                    'content-type': _[28051] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log(_[28160]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[_[28131]] && callbacks[_[28131]](0, ret);
                        } else {
                            callbacks[_[28131]] && callbacks[_[28131]](1, { errMsg: _[28161] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(_[28092]);
            var username = wx.getStorageSync(_[28047]);

            var postData = {};
            postData[_[28162]] = uid;
            postData[_[28163]] = username;
            postData[_[10594]] = data.roleid;
            postData[_[28164]] = data.rolelevel;
            postData[_[28165]] = data.rolename;
            postData[_[11258]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[6], postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(_[28092]);
            var username = wx.getStorageSync(_[28047]);

            var postData = {};
            postData[_[28162]] = uid;
            postData[_[28163]] = username;
            postData[_[10594]] = data.roleid;
            postData[_[28164]] = data.rolelevel;
            postData[_[28165]] = data.rolename;
            postData[_[11258]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[5668], postData);

            //进入游戏确认邀请成功
            if (p$AEBCD) {
                this.updateShare(p$AEBCD.invite, p$AEBCD.invite_type, p$AEBCD.is_new, data.roleid, data.serverid, p$AEBCD.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(_[28092]);
            var username = wx.getStorageSync(_[28047]);

            var postData = {};
            postData[_[28162]] = uid;
            postData[_[28163]] = username;
            postData[_[10594]] = data.roleid;
            postData[_[28164]] = data.rolelevel;
            postData[_[28165]] = data.rolename;
            postData[_[11258]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[28166], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = _[28167].split('');
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
            var uuid = wx.getStorageSync(_[28066]);
            var idfv = wx.getStorageSync(_[28067]);
            var ad_code = wx.getStorageSync(_[28069]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: _[28168],
                net_type: system.wifiSignal == 0 ? '4G' : _[28169],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == _[28136] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(_[28170] + type);
            console.log(public_data);

            wx.request({
                url: _[24755] + HOST + _[28171] + type + _[28172] + encodeURIComponent(JSON.stringify(public_data)),
                success: function (res) {
                    // console.log("[SDK]上报数据成功");
                    // console.log(res);
                },
                fail: function (res) {
                    // console.log("[SDK]上报数据失败");
                    // console.log(res);
                }
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(_[28173] + tmplIds);
            //获取模板ID
            callbacks[_[28174]] = typeof callback == _[27711] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(_[28175]);
                    console.log(res);
                    callbacks[_[28174]] && callbacks[_[28174]](res);
                },
                fail(res) {
                    console.log(_[28176]);
                    console.log(res);
                    callbacks[_[28174]] && callbacks[_[28174]](res);
                }
            });
        },

        // 微端小助手
        weiduanHelper: function () {
            var da = new Dall();
            da.stebutonanimation(config.partner_id, config.game_pkg, config.game_id);
        }
    };
}

function run(method, data, callback) {
    method in p$ADEBC && p$ADEBC[method](data, callback);
}

exports.init = function (data, callback) {
    run(_[364], data, callback);
};
exports.login = function (callback) {
    run(_[28073], '', callback);
};
exports.pay = function (data, callback) {
    run(_[28131], data, callback);
};
exports.openService = function () {
    run(_[24219]);
};
exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[28177], data);
};
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(_[28178], data);
};
exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[28179], data);
};
exports.share = function (type) {
    var data = {
        type: type
    };
    run(_[28110], data);
};
exports.msgCheck = function (data, callback) {
    run(_[11775], data, callback);
};
exports.downloadClient = function () {
    run(_[28180]);
};
exports.subscribeMessage = function (data, callback) {
    run(_[28174], data, callback);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run(_[28181]);
};
exports.weiduanHelper = function () {
    run(_[23109]);
};