var _ = wx.y$;
import Dall from './bbbhelp';
var config = {
    game_id: _[28404], //九歌行--天枢服--官方
    game_pkg: _[28405],
    partner_id: '19',
    game_ver: _[28406], //B包为2.x.x，每次上传版本修改，先设置，上传审核版本的时候保持一致
    is_auth: false, //授权登录
    from: null, //来源
    tmpId: { 1: _[28407], 2: _[28408], 3: _[28409] }, // 订阅的类型 和 模板id
    min_app_id: ''
};
window.config = config;

var p$ADEBC = p$AECBD();
var HOST = _[28391];
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
            console.log(_[28410]);
            var self = this;

            var uuid = wx.getStorageSync(_[28411]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(_[28411], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(_[28412]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(_[28412], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log(_[28413]);
            console.log(info);

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(_[28414], info.query.ad_code);
            }

            //用户来源，如："txcps"
            if (info.query && info.query.from && info.query.from != "") {
                if (is_new) wx.setStorageSync(_[28415], info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync(_[28415]);
                if (!from && from != "") config.from = from;
            }
            // config.from = "txcps"
            console.log(_[28416] + config.from);

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
            console.log(_[28417]);
            var self = this;
            callbacks[_[28418]] = typeof callback == _[28050] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[_[28419]]) {
                            console.log(_[28420]);
                            self.do_login(); //已授权
                        } else {
                            console.log(_[28421]);
                            wx.hideLoading({});
                            var system_info = wx.getSystemInfoSync();
                            var screen_width = system_info.screenWidth;
                            var screen_height = system_info.screenHeight;
                            var btn_width = screen_width * 2 / 3;
                            var btn_height = btn_width / 3;
                            var btn_left = (screen_width - btn_width) / 2;
                            var btn_top = screen_height / 2;
                            var button = wx.createUserInfoButton({
                                type: _[4396],
                                text: _[28422],
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: _[28423],
                                    color: _[4419],
                                    textAlign: _[1556],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(res => {
                                console.log(res);
                                p$BDCE({ title: _[28424] });
                                if (res.errMsg == _[28425]) {
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
                        console.log(_[28426]);
                        self.do_login();
                    }
                });
            } else {
                console.log(_[28427] + config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log(_[28428] + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求
                        var public_data = self.getPublicData();
                        public_data[_[28429]] = 1;
                        public_data[_[23386]] = res.code;
                        public_data[_[28430]] = info ? info.nick_name : '';
                        public_data[_[28431]] = info ? info.head_img : '';

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
                                    public_data[_[28432]] = encryptedData;
                                    public_data['iv'] = iv;
                                    public_data[_[28433]] = signature;
                                    wx.request({
                                        url: _[24992] + HOST + _[28434],
                                        method: _[28395],
                                        dataType: _[5810],
                                        header: {
                                            'content-type': _[28396] // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log(_[28435]);
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
                                                        wx.setStorageSync(_[28436], data.data.sdk_token);
                                                        wx.setStorageSync(_[28437], data.data.user_id);
                                                        wx.setStorageSync(_[28392], data.data.username);
                                                        if (data.data.ext) {
                                                            wx.setStorageSync(_[28438], data.data.ext);
                                                        }
                                                    } catch (e) {}

                                                    callbacks[_[28418]] && callbacks[_[28418]](0, userData);
                                                } else {
                                                    callbacks[_[28418]] && callbacks[_[28418]](1, { errMsg: data.msg });
                                                }

                                                //登录成功，加载右上角分享数据
                                                self.getShareInfo(_[28439], function (data) {
                                                    console.log(_[28440]);
                                                    wx.onShareAppMessage(function () {
                                                        //记录开始分享
                                                        self.logStartShare(_[28439]);
                                                        return {
                                                            title: data.title,
                                                            imageUrl: data.img,
                                                            query: data.query
                                                        };
                                                    });
                                                });
                                            } else {
                                                callbacks[_[28418]] && callbacks[_[28418]](1, { errMsg: _[28441] });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks[_[28418]] && callbacks[_[28418]](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks[_[28418]] && callbacks[_[28418]](1, { errMsg: res6.errMsg });
                                }
                            });
                        } else {
                            var lastTime = Date.now();
                            wx.request({
                                url: _[24992] + HOST + _[28434],
                                method: _[28395],
                                dataType: _[5810],
                                header: {
                                    'content-type': _[28396] // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log(_[28435]);
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
                                                wx.setStorageSync(_[28436], data.data.sdk_token);
                                                wx.setStorageSync(_[28437], data.data.user_id);
                                                wx.setStorageSync(_[28392], data.data.username);
                                                if (data.data.ext) {
                                                    wx.setStorageSync(_[28438], data.data.ext);
                                                }
                                            } catch (e) {}

                                            callbacks[_[28418]] && callbacks[_[28418]](0, userData);
                                        } else {
                                            callbacks[_[28418]] && callbacks[_[28418]](1, { type: _[28442], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                                        }

                                        //登录成功，加载右上角分享数据
                                        self.getShareInfo(_[28439], function (data) {
                                            console.log(_[28440]);
                                            wx.onShareAppMessage(function () {
                                                //记录开始分享
                                                self.logStartShare(_[28439]);
                                                return {
                                                    title: data.title,
                                                    imageUrl: data.img,
                                                    query: data.query
                                                };
                                            });
                                        });
                                    } else {
                                        callbacks[_[28418]] && callbacks[_[28418]](1, { type: _[28442], errMsg: _[28441], time: Date.now() - lastTime, res: res });
                                    }
                                },
                                fail: function (res) {
                                    console.log(_[28443]);
                                    console.log(res);
                                    self.log(_[503], { event: _[28444] });
                                    requestCallback = true;
                                    if (loginHandler) clearTimeout(loginHandler);
                                    loginHandler = null;
                                    callbacks[_[28418]] && callbacks[_[28418]](1, { type: _[28445], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                                }
                            });
                            if (!requestCallback) {
                                var timeOutFunc = function () {
                                    console.log(_[28446]);
                                    self.log(_[503], { event: _[28447] });
                                    callbacks[_[28418]] && callbacks[_[28418]](1, { type: _[28448], errMsg: _[28449], time: Date.now() - lastTime });
                                    callbacks[_[28418]] = null; //回调后置空，以免success或fail里重复回调
                                };
                                loginHandler = setTimeout(timeOutFunc, 20000);
                            }
                        }
                    } else {
                        callbacks[_[28418]] && callbacks[_[28418]](1, { type: _[28450], errMsg: res.errMsg, res: res });
                    }
                },
                fail: function (res) {
                    console.log(_[28451] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf(_[28452]) > -1 || res.errMsg.indexOf(_[28453]) > -1) {
                        // 处理用户拒绝授权的情况
                        callbacks[_[28418]] && callbacks[_[28418]](1, { type: _[28454], errMsg: res.errMsg, res: res });
                    } else {
                        callbacks[_[28418]] && callbacks[_[28418]](1, { type: _[28454], errMsg: res.errMsg, res: res });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[_[28455]] = typeof callback == _[28050] ? callback : null;
            var type = data.type || _[28455];
            console.log(_[28456] + type);
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
            var sdk_token = wx.getStorageSync(_[28436]);
            wx.request({
                url: _[24992] + HOST + _[28457],
                method: _[28395],
                dataType: _[5810],
                header: {
                    'content-type': _[28396] // 默认值
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
            console.log(_[28458]);
            callbacks[_[7050]] = typeof callback == _[28050] ? callback : null;
            var sdk_token = wx.getStorageSync(_[28436]);
            wx.request({
                url: _[24992] + HOST + _[28459],
                method: _[28395],
                dataType: _[5810],
                header: {
                    'content-type': _[28396] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(_[28460]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        config.min_app_id = data.data.min_app_id;
                        if (data.state) {
                            callbacks[_[7050]] && callbacks[_[7050]](data.data);
                        } else {
                            callbacks[_[7050]] && callbacks[_[7050]]({ develop: 0 });
                        }
                    } else {
                        callbacks[_[7050]] && callbacks[_[7050]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(_[28461]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[_[7050]] && callbacks[_[7050]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(_[28462]);
                    callbacks[_[7050]] && callbacks[_[7050]]({ develop: 0 });
                    callbacks[_[7050]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(_[28463]);
            var sdk_token = wx.getStorageSync(_[28436]);
            wx.request({
                url: _[24992] + HOST + _[28464],
                method: _[28395],
                dataType: _[5810],
                header: {
                    'content-type': _[28396] // 默认值
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
                    console.log(_[28465]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[_[28455]] && callbacks[_[28455]](1, { errMsg: _[28466] + data.msg });
                        }
                    } else {
                        callbacks[_[28455]] && callbacks[_[28455]](1, { errMsg: _[28467] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(_[28468]);
            var sdk_token = wx.getStorageSync(_[28436]);
            wx.request({
                url: _[24992] + HOST + _[28469],
                method: _[28395],
                dataType: _[5810],
                header: {
                    'content-type': _[28396] // 默认值
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
                    console.log(_[28470]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(_[28471]);
            var sdk_token = wx.getStorageSync(_[28436]);
            wx.request({
                url: _[24992] + HOST + _[28472],
                method: _[28395],
                dataType: _[5810],
                header: {
                    'content-type': _[28396] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log(_[28473]);
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
                    console.log(_[28474]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(_[28475]);
            console.log(data);

            var self = this;
            callbacks[_[28476]] = typeof callback == _[28050] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(_[28436]);
            var session_key = wx.getStorageSync(_[28438]);
            if (!sdk_token || !session_key) {
                callbacks[_[28476]] && callbacks[_[28476]](1, { errMsg: _[28477] });
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
            public_data[_[28478]] = JSON.stringify(order_data);
            public_data[_[28429]] = 1;

            //发起网络请求
            wx.request({
                url: _[24992] + HOST + _[28479],
                method: _[28395],
                dataType: _[5810],
                header: {
                    'content-type': _[28396] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[28480]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //小程序
                            if (typeof wx.requestPayment == _[28001]) {
                                // if(data.data.platform == 'android'){
                                if (sysInfo.platform == _[28481] || sysInfo.platform == _[28482]) {
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
                                            title: _[28483],
                                            content: _[28484],
                                            confirmText: _[28485],
                                            showCancel: false
                                        });
                                    }
                                }
                            } else {
                                self.minPay(data.data);
                            }
                        } else {
                            callbacks[_[28476]] && callbacks[_[28476]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[_[28476]] && callbacks[_[28476]](1, { errMsg: _[28441] });
                    }
                }
            });
        },
        xiaoPay: function (data) {
            var self = this;
            wx.navigateToMiniProgram({
                appId: config.min_app_id,
                path: _[28486] + data.orderId + _[28487] + data.money,
                extraData: {},
                envVersion: _[28402],
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
                    if (res.errMsg == _[28488]) {
                        var ret = {
                            cpOrderNo: self.order_data.cpbill,
                            orderNo: data.orderId,
                            amount: self.order_data.price,
                            extension: self.order_data.extension
                        };
                        callbacks[_[28476]] && callbacks[_[28476]](0, ret);
                    }
                },
                fail: function (res) {
                    if (res.errMsg == _[28489]) {
                        callbacks[_[28476]] && callbacks[_[28476]](2, { errMsg: _[28490] });
                    } else {
                        callbacks[_[28476]] && callbacks[_[28476]](1, { errMsg: _[28491] + res.err_desc });
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
                console.log(_[28492]);
                wx.showModal({
                    title: _[28483],
                    content: _[28493] + data.balance + _[28494] + data.buyQuantity + _[28495],
                    showCancel: false,
                    confirmText: _[28485],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log(_[28496]);
                wx.requestMidasPayment({
                    mode: _[28497],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == _[28498]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if (res.errMsg.indexOf(_[28499]) !== -1) {
                            callbacks[_[28476]] && callbacks[_[28476]](2, { errMsg: _[28490] });
                        } else {
                            callbacks[_[28476]] && callbacks[_[28476]](1, { errMsg: _[28491] + res.errMsg });
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
                title: _[28483],
                content: _[28500],
                showCancel: false,
                confirmText: _[28485],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: _[28501],
                        sendMessageImg: _[28502]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log(_[28503]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync(_[28438]);
            wx.request({
                url: _[24992] + HOST + _[28504] + config.partner_id + '/' + config.game_pkg + '/',
                method: _[28395],
                dataType: _[5810],
                header: {
                    'content-type': _[28396] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log(_[28505]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[_[28476]] && callbacks[_[28476]](0, ret);
                        } else {
                            callbacks[_[28476]] && callbacks[_[28476]](1, { errMsg: _[28506] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(_[28437]);
            var username = wx.getStorageSync(_[28392]);

            var postData = {};
            postData[_[28507]] = uid;
            postData[_[28508]] = username;
            postData[_[10657]] = data.roleid;
            postData[_[28509]] = data.rolelevel;
            postData[_[28510]] = data.rolename;
            postData[_[11329]] = data.serverid;

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
            var uid = wx.getStorageSync(_[28437]);
            var username = wx.getStorageSync(_[28392]);

            var postData = {};
            postData[_[28507]] = uid;
            postData[_[28508]] = username;
            postData[_[10657]] = data.roleid;
            postData[_[28509]] = data.rolelevel;
            postData[_[28510]] = data.rolename;
            postData[_[11329]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[5692], postData);

            //进入游戏确认邀请成功
            if (p$AEBCD) {
                this.updateShare(p$AEBCD.invite, p$AEBCD.invite_type, p$AEBCD.is_new, data.roleid, data.serverid, p$AEBCD.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(_[28437]);
            var username = wx.getStorageSync(_[28392]);

            var postData = {};
            postData[_[28507]] = uid;
            postData[_[28508]] = username;
            postData[_[10657]] = data.roleid;
            postData[_[28509]] = data.rolelevel;
            postData[_[28510]] = data.rolename;
            postData[_[11329]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[28511], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = _[28512].split('');
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
            var uuid = wx.getStorageSync(_[28411]);
            var idfv = wx.getStorageSync(_[28412]);
            var ad_code = wx.getStorageSync(_[28414]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: _[28513],
                net_type: system.wifiSignal == 0 ? '4G' : _[28514],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == _[28481] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(_[28515] + type);
            console.log(public_data);

            wx.request({
                url: _[24992] + HOST + _[28516] + type + _[28517] + encodeURIComponent(JSON.stringify(public_data)),
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
            console.log(_[28518] + tmplIds);
            //获取模板ID
            callbacks[_[28519]] = typeof callback == _[28050] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(_[28520]);
                    console.log(res);
                    callbacks[_[28519]] && callbacks[_[28519]](res);
                },
                fail(res) {
                    console.log(_[28521]);
                    console.log(res);
                    callbacks[_[28519]] && callbacks[_[28519]](res);
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
    run(_[28418], '', callback);
};
exports.pay = function (data, callback) {
    run(_[28476], data, callback);
};
exports.openService = function () {
    run(_[24454]);
};
exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[28522], data);
};
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(_[28523], data);
};
exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[28524], data);
};
exports.share = function (type) {
    var data = {
        type: type
    };
    run(_[28455], data);
};
exports.msgCheck = function (data, callback) {
    run(_[11909], data, callback);
};
exports.downloadClient = function () {
    run(_[28525]);
};
exports.subscribeMessage = function (data, callback) {
    run(_[28519], data, callback);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run(_[28526]);
};
exports.weiduanHelper = function () {
    run(_[23278]);
};