var W = wx.$l;
import Dall from './llllHELP';
var config = {
    game_id: W[188176], //伏魔西游 -官包
    game_pkg: W[188177],
    partner_id: '19',
    game_ver: W[188178], //L包11.x.x，每次上传版本修改，先设置，上传审核版本的时候保持一致
    is_auth: false, //授权登录
    from: null, //来源
    //1活动开启通知 2.活动状态提醒 3.离线收益上限提醒
    tmpId: { 1: W[188179], 2: W[188180], 3: W[188181] }, // 订阅的类型 和 模板id
    min_app_id: ''
};
window.config = config;

var $LBHD0T = $LBD0HT();
var HOST = W[188165];
var t;
var t_second = 0;
var t_max = 300;
var $LBDT0H = null;
var $LBDTH0 = null;
var $LBD0TH = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function $LBD0HT() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(W[188182]);
            var self = this;

            var uuid = wx.getStorageSync(W[188183]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(W[188183], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(W[188184]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(W[188184], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log(W[188185]);
            console.log(info);

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(W[188186], info.query.ad_code);
            }

            //用户来源，如："txcps"
            if (info.query && info.query.from && info.query.from != "") {
                if (is_new) wx.setStorageSync(W[188187], info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync(W[188187]);
                if (!from && from != "") config.from = from;
            }
            // config.from = "txcps"
            console.log(W[188188] + config.from);

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(W[160284], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                $LBDTH0 = {
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
            console.log(W[188189]);
            var self = this;
            callbacks[W[187654]] = typeof callback == W[188084] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[W[188190]]) {
                            console.log(W[188191]);
                            self.do_login(); //已授权
                        } else {
                            console.log(W[188192]);
                            wx.hideLoading({});
                            var system_info = wx.getSystemInfoSync();
                            var screen_width = system_info.screenWidth;
                            var screen_height = system_info.screenHeight;
                            var btn_width = screen_width * 2 / 3;
                            var btn_height = btn_width / 3;
                            var btn_left = (screen_width - btn_width) / 2;
                            var btn_top = screen_height / 2;
                            var button = wx.createUserInfoButton({
                                type: W[164330],
                                text: W[188193],
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: W[188194],
                                    color: W[164352],
                                    textAlign: W[161553],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(res => {
                                console.log(res);
                                $LTH0D({ title: W[188195] });
                                if (res.errMsg == W[188196]) {
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
                        console.log(W[188197]);
                        self.do_login();
                    }
                });
            } else {
                console.log(W[188198] + config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log(W[188199] + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求
                        var public_data = self.getPublicData();
                        public_data[W[188200]] = 1;
                        public_data[W[183007]] = res.code;
                        public_data[W[188201]] = info ? info.nick_name : '';
                        public_data[W[188202]] = info ? info.head_img : '';

                        if ($LBDTH0 && typeof $LBDTH0 == W[160279]) {
                            for (var key in $LBDTH0) {
                                public_data[key] = $LBDTH0[key];
                            }
                        }
                        if (config.is_auth) {
                            wx.getUserInfo({
                                success: function (res6) {
                                    var encryptedData = res6.encryptedData;
                                    var iv = res6.iv;
                                    var signature = res6.signature;
                                    public_data[W[188203]] = encryptedData;
                                    public_data['iv'] = iv;
                                    public_data[W[188204]] = signature;
                                    wx.request({
                                        url: W[184447] + HOST + W[188205],
                                        method: W[187626],
                                        dataType: W[165739],
                                        header: {
                                            'content-type': W[187737] // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log(W[188206]);
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
                                                        wx.setStorageSync(W[188207], data.data.sdk_token);
                                                        wx.setStorageSync(W[188208], data.data.user_id);
                                                        wx.setStorageSync(W[188166], data.data.username);
                                                        if (data.data.ext) {
                                                            wx.setStorageSync(W[188209], data.data.ext);
                                                        }
                                                    } catch (e) {}

                                                    callbacks[W[187654]] && callbacks[W[187654]](0, userData);
                                                } else {
                                                    callbacks[W[187654]] && callbacks[W[187654]](1, { errMsg: data.msg });
                                                }

                                                //登录成功，加载右上角分享数据
                                                self.getShareInfo(W[188210], function (data) {
                                                    console.log(W[188211]);
                                                    wx.onShareAppMessage(function () {
                                                        //记录开始分享
                                                        self.logStartShare(W[188210]);
                                                        return {
                                                            title: data.title,
                                                            imageUrl: data.img,
                                                            query: data.query
                                                        };
                                                    });
                                                });
                                            } else {
                                                callbacks[W[187654]] && callbacks[W[187654]](1, { errMsg: W[188212] });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks[W[187654]] && callbacks[W[187654]](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks[W[187654]] && callbacks[W[187654]](1, { errMsg: res6.errMsg });
                                }
                            });
                        } else {
                            var lastTime = Date.now();
                            wx.request({
                                url: W[184447] + HOST + W[188205],
                                method: W[187626],
                                dataType: W[165739],
                                header: {
                                    'content-type': W[187737] // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log(W[188206]);
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
                                                wx.setStorageSync(W[188207], data.data.sdk_token);
                                                wx.setStorageSync(W[188208], data.data.user_id);
                                                wx.setStorageSync(W[188166], data.data.username);
                                                if (data.data.ext) {
                                                    wx.setStorageSync(W[188209], data.data.ext);
                                                }
                                            } catch (e) {}

                                            callbacks[W[187654]] && callbacks[W[187654]](0, userData);
                                        } else {
                                            callbacks[W[187654]] && callbacks[W[187654]](1, { type: W[188213], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                                        }

                                        //登录成功，加载右上角分享数据
                                        self.getShareInfo(W[188210], function (data) {
                                            console.log(W[188211]);
                                            wx.onShareAppMessage(function () {
                                                //记录开始分享
                                                self.logStartShare(W[188210]);
                                                return {
                                                    title: data.title,
                                                    imageUrl: data.img,
                                                    query: data.query
                                                };
                                            });
                                        });
                                    } else {
                                        callbacks[W[187654]] && callbacks[W[187654]](1, { type: W[188213], errMsg: W[188212], time: Date.now() - lastTime, res: res });
                                    }
                                },
                                fail: function (res) {
                                    console.log(W[188214]);
                                    console.log(res);
                                    self.log(W[160499], { event: W[188215] });
                                    requestCallback = true;
                                    if (loginHandler) clearTimeout(loginHandler);
                                    loginHandler = null;
                                    callbacks[W[187654]] && callbacks[W[187654]](1, { type: W[188216], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                                }
                            });
                            if (!requestCallback) {
                                var timeOutFunc = function () {
                                    console.log(W[188217]);
                                    self.log(W[160499], { event: W[188218] });
                                    callbacks[W[187654]] && callbacks[W[187654]](1, { type: W[188219], errMsg: W[188220], time: Date.now() - lastTime });
                                    callbacks[W[187654]] = null; //回调后置空，以免success或fail里重复回调
                                };
                                loginHandler = setTimeout(timeOutFunc, 20000);
                            }
                        }
                    } else {
                        callbacks[W[187654]] && callbacks[W[187654]](1, { type: W[188221], errMsg: res.errMsg, res: res });
                    }
                },
                fail: function (res) {
                    console.log(W[188222] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf(W[188223]) > -1 || res.errMsg.indexOf(W[188224]) > -1) {
                        // 处理用户拒绝授权的情况
                        callbacks[W[187654]] && callbacks[W[187654]](1, { type: W[188225], errMsg: res.errMsg, res: res });
                    } else {
                        callbacks[W[187654]] && callbacks[W[187654]](1, { type: W[188225], errMsg: res.errMsg, res: res });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[W[187709]] = typeof callback == W[188084] ? callback : null;
            var type = data.type || W[187709];
            console.log(W[188226] + type);
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
            var sdk_token = wx.getStorageSync(W[188207]);
            wx.request({
                url: W[184447] + HOST + W[188227],
                method: W[187626],
                dataType: W[165739],
                header: {
                    'content-type': W[187737] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: $LBDT0H ? $LBDT0H.server_id : '',
                    role_id: $LBDT0H ? $LBDT0H.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(W[188228]);
            callbacks[W[166971]] = typeof callback == W[188084] ? callback : null;
            var sdk_token = wx.getStorageSync(W[188207]);
            wx.request({
                url: W[184447] + HOST + W[188229],
                method: W[187626],
                dataType: W[165739],
                header: {
                    'content-type': W[187737] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(W[188230]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        config.min_app_id = data.data.min_app_id;
                        if (data.state) {
                            callbacks[W[166971]] && callbacks[W[166971]](data.data);
                        } else {
                            callbacks[W[166971]] && callbacks[W[166971]]({ develop: 0 });
                        }
                    } else {
                        callbacks[W[166971]] && callbacks[W[166971]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(W[188231]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[W[166971]] && callbacks[W[166971]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(W[188232]);
                    callbacks[W[166971]] && callbacks[W[166971]]({ develop: 0 });
                    callbacks[W[166971]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(W[188233]);
            var sdk_token = wx.getStorageSync(W[188207]);
            wx.request({
                url: W[184447] + HOST + W[188234],
                method: W[187626],
                dataType: W[165739],
                header: {
                    'content-type': W[187737] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: $LBDT0H ? $LBDT0H.server_id : '',
                    role_id: $LBDT0H ? $LBDT0H.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(W[188235]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[W[187709]] && callbacks[W[187709]](1, { errMsg: W[188236] + data.msg });
                        }
                    } else {
                        callbacks[W[187709]] && callbacks[W[187709]](1, { errMsg: W[188237] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(W[188238]);
            var sdk_token = wx.getStorageSync(W[188207]);
            wx.request({
                url: W[184447] + HOST + W[188239],
                method: W[187626],
                dataType: W[165739],
                header: {
                    'content-type': W[187737] // 默认值
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
                    console.log(W[188240]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(W[188241]);
            var sdk_token = wx.getStorageSync(W[188207]);
            wx.request({
                url: W[184447] + HOST + W[188242],
                method: W[187626],
                dataType: W[165739],
                header: {
                    'content-type': W[187737] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log(W[188243]);
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
                    console.log(W[188244]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(W[188245]);
            console.log(data);

            var self = this;
            callbacks[W[187697]] = typeof callback == W[188084] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(W[188207]);
            var session_key = wx.getStorageSync(W[188209]);
            if (!sdk_token || !session_key) {
                callbacks[W[187697]] && callbacks[W[187697]](1, { errMsg: W[188246] });
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
            public_data[W[188247]] = JSON.stringify(order_data);
            public_data[W[188200]] = 1;

            //发起网络请求
            wx.request({
                url: W[184447] + HOST + W[188248],
                method: W[187626],
                dataType: W[165739],
                header: {
                    'content-type': W[187737] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(W[188249]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //小程序
                            if (typeof wx.requestPayment == W[188037]) {
                                // if(data.data.platform == 'android'){
                                if (sysInfo.platform == W[187554] || sysInfo.platform == W[187556]) {
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
                                            title: W[188250],
                                            content: W[188251],
                                            confirmText: W[188252],
                                            showCancel: false
                                        });
                                    }
                                }
                            } else {
                                self.minPay(data.data);
                            }
                        } else {
                            callbacks[W[187697]] && callbacks[W[187697]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[W[187697]] && callbacks[W[187697]](1, { errMsg: W[188212] });
                    }
                }
            });
        },
        xiaoPay: function (data) {
            var self = this;
            wx.navigateToMiniProgram({
                appId: config.min_app_id,
                path: W[188253] + data.orderId + W[188254] + data.money,
                extraData: {},
                envVersion: W[188174],
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
                    if (res.errMsg == W[188255]) {
                        var ret = {
                            cpOrderNo: self.order_data.cpbill,
                            orderNo: data.orderId,
                            amount: self.order_data.price,
                            extension: self.order_data.extension
                        };
                        callbacks[W[187697]] && callbacks[W[187697]](0, ret);
                    }
                },
                fail: function (res) {
                    if (res.errMsg == W[188256]) {
                        callbacks[W[187697]] && callbacks[W[187697]](2, { errMsg: W[188257] });
                    } else {
                        callbacks[W[187697]] && callbacks[W[187697]](1, { errMsg: W[188258] + res.err_desc });
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
                console.log(W[188259]);
                wx.showModal({
                    title: W[188250],
                    content: W[188260] + data.balance + W[188261] + data.buyQuantity + W[188262],
                    showCancel: false,
                    confirmText: W[188252],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log(W[188263]);
                wx.requestMidasPayment({
                    mode: W[188264],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == W[188265]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        console.log(W[188266] + JSON.stringify(res));
                        if (res.errMsg.indexOf(W[188267]) !== -1) {
                            callbacks[W[187697]] && callbacks[W[187697]](2, { errMsg: W[188257] });
                        } else {
                            callbacks[W[187697]] && callbacks[W[187697]](1, { errMsg: W[188258] + res.errMsg });
                        }
                    },
                    complete: function (res) {}
                });
            }
        },

        kfPay: function (data) {
            //检查订单支付是否完成
            var self = this;
            $LBD0TH = data.orderId;
            wx.showModal({
                title: W[188250],
                content: W[188268],
                showCancel: false,
                confirmText: W[188252],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: W[188269],
                        sendMessageImg: W[188270]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log(W[188271]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync(W[188209]);
            wx.request({
                url: W[184447] + HOST + W[188272] + config.partner_id + '/' + config.game_pkg + '/',
                method: W[187626],
                dataType: W[165739],
                header: {
                    'content-type': W[187737] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log(W[188273]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[W[187697]] && callbacks[W[187697]](0, ret);
                        } else {
                            callbacks[W[187697]] && callbacks[W[187697]](1, { errMsg: W[188274] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(W[188208]);
            var username = wx.getStorageSync(W[188166]);

            var postData = {};
            postData[W[188275]] = uid;
            postData[W[188276]] = username;
            postData[W[170470]] = data.roleid;
            postData[W[188277]] = data.rolelevel;
            postData[W[188278]] = data.rolename;
            postData[W[171126]] = data.serverid;

            if (data.roleid && data.serverid) {
                $LBDT0H = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(W[160006], postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(W[188208]);
            var username = wx.getStorageSync(W[188166]);

            var postData = {};
            postData[W[188275]] = uid;
            postData[W[188276]] = username;
            postData[W[170470]] = data.roleid;
            postData[W[188277]] = data.rolelevel;
            postData[W[188278]] = data.rolename;
            postData[W[171126]] = data.serverid;

            if (data.roleid && data.serverid) {
                $LBDT0H = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(W[165620], postData);

            //进入游戏确认邀请成功
            if ($LBDTH0) {
                this.updateShare($LBDTH0.invite, $LBDTH0.invite_type, $LBDTH0.is_new, data.roleid, data.serverid, $LBDTH0.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(W[188208]);
            var username = wx.getStorageSync(W[188166]);

            var postData = {};
            postData[W[188275]] = uid;
            postData[W[188276]] = username;
            postData[W[170470]] = data.roleid;
            postData[W[188277]] = data.rolelevel;
            postData[W[188278]] = data.rolename;
            postData[W[171126]] = data.serverid;

            if (data.roleid && data.serverid) {
                $LBDT0H = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(W[188279], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = W[188280].split('');
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
            var uuid = wx.getStorageSync(W[188183]);
            var idfv = wx.getStorageSync(W[188184]);
            var ad_code = wx.getStorageSync(W[188186]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: W[188281],
                net_type: system.wifiSignal == 0 ? '4G' : W[188282],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == W[187554] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(W[188283] + type);
            console.log(public_data);

            wx.request({
                url: W[184447] + HOST + W[188284] + type + W[188285] + encodeURIComponent(JSON.stringify(public_data)),
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
            console.log(W[188286] + tmplIds);
            //获取模板ID
            callbacks[W[187715]] = typeof callback == W[188084] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(W[188287]);
                    console.log(res);
                    callbacks[W[187715]] && callbacks[W[187715]](res);
                },
                fail(res) {
                    console.log(W[188288]);
                    console.log(res);
                    callbacks[W[187715]] && callbacks[W[187715]](res);
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
    method in $LBHD0T && $LBHD0T[method](data, callback);
}

exports.init = function (data, callback) {
    run(W[160364], data, callback);
};

exports.login = function (callback) {
    run(W[187654], '', callback);
};

exports.pay = function (data, callback) {
    run(W[187697], data, callback);
};

exports.openService = function () {
    run(W[183921]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(W[187704], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(W[187706], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(W[187708], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(W[187709], data);
};

exports.msgCheck = function (data, callback) {
    run(W[171633], data, callback);
};

exports.downloadClient = function () {
    run(W[188289]);
};
exports.subscribeMessage = function (data, callback) {
    run(W[187715], data, callback);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(W[188290]);
};

exports.weiduanHelper = function () {
    run(W[182902]);
};