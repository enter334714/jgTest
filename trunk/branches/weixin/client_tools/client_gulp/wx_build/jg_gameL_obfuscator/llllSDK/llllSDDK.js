var W = wx.$l;
import Dall from './llllHELP';
var config = {
    game_id: W[28923], //伏魔西游 -官包
    game_pkg: W[28924],
    partner_id: '19',
    game_ver: W[28925], //L包11.x.x，每次上传版本修改，先设置，上传审核版本的时候保持一致
    is_auth: false, //授权登录
    from: null, //来源
    //1活动开启通知 2.活动状态提醒 3.离线收益上限提醒
    tmpId: { 1: W[28926], 2: W[28927], 3: W[28928] }, // 订阅的类型 和 模板id
    min_app_id: ''
};
window.config = config;

var $LBHDT0 = $LBD0TH();
var HOST = W[28912];
var t;
var t_second = 0;
var t_max = 300;
var $LBHD0T = null;
var $LBDT0H = null;
var $LBDTH0 = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function $LBD0TH() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(W[28929]);
            var self = this;

            var uuid = wx.getStorageSync(W[28930]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(W[28930], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(W[28931]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(W[28931], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log(W[28932]);
            console.log(info);

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(W[28933], info.query.ad_code);
            }

            //用户来源，如："txcps"
            if (info.query && info.query.from && info.query.from != "") {
                if (is_new) wx.setStorageSync(W[28934], info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync(W[28934]);
                if (!from && from != "") config.from = from;
            }
            // config.from = "txcps"
            console.log(W[28935] + config.from);

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(W[1060], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                $LBDT0H = {
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
            console.log(W[28936]);
            var self = this;
            callbacks[W[656]] = typeof callback == W[28831] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[W[28937]]) {
                            console.log(W[28938]);
                            self.do_login(); //已授权
                        } else {
                            console.log(W[28939]);
                            wx.hideLoading({});
                            var system_info = wx.getSystemInfoSync();
                            var screen_width = system_info.screenWidth;
                            var screen_height = system_info.screenHeight;
                            var btn_width = screen_width * 2 / 3;
                            var btn_height = btn_width / 3;
                            var btn_left = (screen_width - btn_width) / 2;
                            var btn_top = screen_height / 2;
                            var button = wx.createUserInfoButton({
                                type: W[203],
                                text: W[28940],
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: W[28941],
                                    color: W[89],
                                    textAlign: W[45],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(res => {
                                console.log(res);
                                $LTH0D({ title: W[28942] });
                                if (res.errMsg == W[28943]) {
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
                        console.log(W[28944]);
                        self.do_login();
                    }
                });
            } else {
                console.log(W[28945] + config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log(W[28946] + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求
                        var public_data = self.getPublicData();
                        public_data[W[28947]] = 1;
                        public_data[W[23967]] = res.code;
                        public_data[W[28948]] = info ? info.nick_name : '';
                        public_data[W[28949]] = info ? info.head_img : '';

                        if ($LBDT0H && typeof $LBDT0H == W[1055]) {
                            for (var key in $LBDT0H) {
                                public_data[key] = $LBDT0H[key];
                            }
                        }
                        if (config.is_auth) {
                            wx.getUserInfo({
                                success: function (res6) {
                                    var encryptedData = res6.encryptedData;
                                    var iv = res6.iv;
                                    var signature = res6.signature;
                                    public_data[W[28950]] = encryptedData;
                                    public_data['iv'] = iv;
                                    public_data[W[28951]] = signature;
                                    wx.request({
                                        url: W[25525] + HOST + W[28952],
                                        method: W[625],
                                        dataType: W[6466],
                                        header: {
                                            'content-type': W[760] // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log(W[28953]);
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
                                                        wx.setStorageSync(W[28954], data.data.sdk_token);
                                                        wx.setStorageSync(W[28955], data.data.user_id);
                                                        wx.setStorageSync(W[28913], data.data.username);
                                                        if (data.data.ext) {
                                                            wx.setStorageSync(W[28956], data.data.ext);
                                                        }
                                                    } catch (e) {}

                                                    callbacks[W[656]] && callbacks[W[656]](0, userData);
                                                } else {
                                                    callbacks[W[656]] && callbacks[W[656]](1, { errMsg: data.msg });
                                                }

                                                //登录成功，加载右上角分享数据
                                                self.getShareInfo(W[28957], function (data) {
                                                    console.log(W[28958]);
                                                    wx.onShareAppMessage(function () {
                                                        //记录开始分享
                                                        self.logStartShare(W[28957]);
                                                        return {
                                                            title: data.title,
                                                            imageUrl: data.img,
                                                            query: data.query
                                                        };
                                                    });
                                                });
                                            } else {
                                                callbacks[W[656]] && callbacks[W[656]](1, { errMsg: W[28959] });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks[W[656]] && callbacks[W[656]](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks[W[656]] && callbacks[W[656]](1, { errMsg: res6.errMsg });
                                }
                            });
                        } else {
                            var lastTime = Date.now();
                            wx.request({
                                url: W[25525] + HOST + W[28952],
                                method: W[625],
                                dataType: W[6466],
                                header: {
                                    'content-type': W[760] // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log(W[28953]);
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
                                                wx.setStorageSync(W[28954], data.data.sdk_token);
                                                wx.setStorageSync(W[28955], data.data.user_id);
                                                wx.setStorageSync(W[28913], data.data.username);
                                                if (data.data.ext) {
                                                    wx.setStorageSync(W[28956], data.data.ext);
                                                }
                                            } catch (e) {}

                                            callbacks[W[656]] && callbacks[W[656]](0, userData);
                                        } else {
                                            callbacks[W[656]] && callbacks[W[656]](1, { type: W[28960], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                                        }

                                        //登录成功，加载右上角分享数据
                                        self.getShareInfo(W[28957], function (data) {
                                            console.log(W[28958]);
                                            wx.onShareAppMessage(function () {
                                                //记录开始分享
                                                self.logStartShare(W[28957]);
                                                return {
                                                    title: data.title,
                                                    imageUrl: data.img,
                                                    query: data.query
                                                };
                                            });
                                        });
                                    } else {
                                        callbacks[W[656]] && callbacks[W[656]](1, { type: W[28960], errMsg: W[28959], time: Date.now() - lastTime, res: res });
                                    }
                                },
                                fail: function (res) {
                                    console.log(W[28961]);
                                    console.log(res);
                                    self.log(W[180], { event: W[28962] });
                                    requestCallback = true;
                                    if (loginHandler) clearTimeout(loginHandler);
                                    loginHandler = null;
                                    callbacks[W[656]] && callbacks[W[656]](1, { type: W[28963], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                                }
                            });
                            if (!requestCallback) {
                                var timeOutFunc = function () {
                                    console.log(W[28964]);
                                    self.log(W[180], { event: W[28965] });
                                    callbacks[W[656]] && callbacks[W[656]](1, { type: W[28966], errMsg: W[28967], time: Date.now() - lastTime });
                                    callbacks[W[656]] = null; //回调后置空，以免success或fail里重复回调
                                };
                                loginHandler = setTimeout(timeOutFunc, 20000);
                            }
                        }
                    } else {
                        callbacks[W[656]] && callbacks[W[656]](1, { type: W[28968], errMsg: res.errMsg, res: res });
                    }
                },
                fail: function (res) {
                    console.log(W[28969] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf(W[28970]) > -1 || res.errMsg.indexOf(W[28971]) > -1) {
                        // 处理用户拒绝授权的情况
                        callbacks[W[656]] && callbacks[W[656]](1, { type: W[28972], errMsg: res.errMsg, res: res });
                    } else {
                        callbacks[W[656]] && callbacks[W[656]](1, { type: W[28972], errMsg: res.errMsg, res: res });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[W[723]] = typeof callback == W[28831] ? callback : null;
            var type = data.type || W[723];
            console.log(W[28973] + type);
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
            var sdk_token = wx.getStorageSync(W[28954]);
            wx.request({
                url: W[25525] + HOST + W[28974],
                method: W[625],
                dataType: W[6466],
                header: {
                    'content-type': W[760] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: $LBHD0T ? $LBHD0T.server_id : '',
                    role_id: $LBHD0T ? $LBHD0T.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(W[28975]);
            callbacks[W[7703]] = typeof callback == W[28831] ? callback : null;
            var sdk_token = wx.getStorageSync(W[28954]);
            wx.request({
                url: W[25525] + HOST + W[28976],
                method: W[625],
                dataType: W[6466],
                header: {
                    'content-type': W[760] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(W[28977]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        config.min_app_id = data.data.min_app_id;
                        if (data.state) {
                            callbacks[W[7703]] && callbacks[W[7703]](data.data);
                        } else {
                            callbacks[W[7703]] && callbacks[W[7703]]({ develop: 0 });
                        }
                    } else {
                        callbacks[W[7703]] && callbacks[W[7703]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(W[28978]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[W[7703]] && callbacks[W[7703]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(W[28979]);
                    callbacks[W[7703]] && callbacks[W[7703]]({ develop: 0 });
                    callbacks[W[7703]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(W[28980]);
            var sdk_token = wx.getStorageSync(W[28954]);
            wx.request({
                url: W[25525] + HOST + W[28981],
                method: W[625],
                dataType: W[6466],
                header: {
                    'content-type': W[760] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: $LBHD0T ? $LBHD0T.server_id : '',
                    role_id: $LBHD0T ? $LBHD0T.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(W[28982]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[W[723]] && callbacks[W[723]](1, { errMsg: W[28983] + data.msg });
                        }
                    } else {
                        callbacks[W[723]] && callbacks[W[723]](1, { errMsg: W[28984] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(W[28985]);
            var sdk_token = wx.getStorageSync(W[28954]);
            wx.request({
                url: W[25525] + HOST + W[28986],
                method: W[625],
                dataType: W[6466],
                header: {
                    'content-type': W[760] // 默认值
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
                    console.log(W[28987]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(W[28988]);
            var sdk_token = wx.getStorageSync(W[28954]);
            wx.request({
                url: W[25525] + HOST + W[28989],
                method: W[625],
                dataType: W[6466],
                header: {
                    'content-type': W[760] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log(W[28990]);
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
                    console.log(W[28991]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(W[28992]);
            console.log(data);

            var self = this;
            callbacks[W[710]] = typeof callback == W[28831] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(W[28954]);
            var session_key = wx.getStorageSync(W[28956]);
            if (!sdk_token || !session_key) {
                callbacks[W[710]] && callbacks[W[710]](1, { errMsg: W[28993] });
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
            public_data[W[28994]] = JSON.stringify(order_data);
            public_data[W[28947]] = 1;

            //发起网络请求
            wx.request({
                url: W[25525] + HOST + W[28995],
                method: W[625],
                dataType: W[6466],
                header: {
                    'content-type': W[760] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(W[28996]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //小程序
                            if (typeof wx.requestPayment == W[28784]) {
                                // if(data.data.platform == 'android'){
                                if (sysInfo.platform == W[530] || sysInfo.platform == W[533]) {
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
                                            title: W[28997],
                                            content: W[28998],
                                            confirmText: W[28999],
                                            showCancel: false
                                        });
                                    }
                                }
                            } else {
                                self.minPay(data.data);
                            }
                        } else {
                            callbacks[W[710]] && callbacks[W[710]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[W[710]] && callbacks[W[710]](1, { errMsg: W[28959] });
                    }
                }
            });
        },
        xiaoPay: function (data) {
            var self = this;
            wx.navigateToMiniProgram({
                appId: config.min_app_id,
                path: W[29000] + data.orderId + W[29001] + data.money,
                extraData: {},
                envVersion: W[28921],
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
                    if (res.errMsg == W[29002]) {
                        var ret = {
                            cpOrderNo: self.order_data.cpbill,
                            orderNo: data.orderId,
                            amount: self.order_data.price,
                            extension: self.order_data.extension
                        };
                        callbacks[W[710]] && callbacks[W[710]](0, ret);
                    }
                },
                fail: function (res) {
                    if (res.errMsg == W[29003]) {
                        callbacks[W[710]] && callbacks[W[710]](2, { errMsg: W[29004] });
                    } else {
                        callbacks[W[710]] && callbacks[W[710]](1, { errMsg: W[29005] + res.err_desc });
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
                console.log(W[29006]);
                wx.showModal({
                    title: W[28997],
                    content: W[29007] + data.balance + W[29008] + data.buyQuantity + W[29009],
                    showCancel: false,
                    confirmText: W[28999],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log(W[29010]);
                wx.requestMidasPayment({
                    mode: W[29011],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == W[29012]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        console.log(W[29013] + JSON.stringify(res));
                        if (res.errMsg.indexOf(W[29014]) !== -1) {
                            callbacks[W[710]] && callbacks[W[710]](2, { errMsg: W[29004] });
                        } else {
                            callbacks[W[710]] && callbacks[W[710]](1, { errMsg: W[29005] + res.errMsg });
                        }
                    },
                    complete: function (res) {}
                });
            }
        },

        kfPay: function (data) {
            //检查订单支付是否完成
            var self = this;
            $LBDTH0 = data.orderId;
            wx.showModal({
                title: W[28997],
                content: W[29015],
                showCancel: false,
                confirmText: W[28999],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: W[29016],
                        sendMessageImg: W[29017]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log(W[29018]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync(W[28956]);
            wx.request({
                url: W[25525] + HOST + W[29019] + config.partner_id + '/' + config.game_pkg + '/',
                method: W[625],
                dataType: W[6466],
                header: {
                    'content-type': W[760] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log(W[29020]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[W[710]] && callbacks[W[710]](0, ret);
                        } else {
                            callbacks[W[710]] && callbacks[W[710]](1, { errMsg: W[29021] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(W[28955]);
            var username = wx.getStorageSync(W[28913]);

            var postData = {};
            postData[W[29022]] = uid;
            postData[W[29023]] = username;
            postData[W[11294]] = data.roleid;
            postData[W[29024]] = data.rolelevel;
            postData[W[29025]] = data.rolename;
            postData[W[151]] = data.serverid;

            if (data.roleid && data.serverid) {
                $LBHD0T = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(W[7], postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(W[28955]);
            var username = wx.getStorageSync(W[28913]);

            var postData = {};
            postData[W[29022]] = uid;
            postData[W[29023]] = username;
            postData[W[11294]] = data.roleid;
            postData[W[29024]] = data.rolelevel;
            postData[W[29025]] = data.rolename;
            postData[W[151]] = data.serverid;

            if (data.roleid && data.serverid) {
                $LBHD0T = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(W[6348], postData);

            //进入游戏确认邀请成功
            if ($LBDT0H) {
                this.updateShare($LBDT0H.invite, $LBDT0H.invite_type, $LBDT0H.is_new, data.roleid, data.serverid, $LBDT0H.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(W[28955]);
            var username = wx.getStorageSync(W[28913]);

            var postData = {};
            postData[W[29022]] = uid;
            postData[W[29023]] = username;
            postData[W[11294]] = data.roleid;
            postData[W[29024]] = data.rolelevel;
            postData[W[29025]] = data.rolename;
            postData[W[151]] = data.serverid;

            if (data.roleid && data.serverid) {
                $LBHD0T = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(W[29026], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = W[29027].split('');
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
            var uuid = wx.getStorageSync(W[28930]);
            var idfv = wx.getStorageSync(W[28931]);
            var ad_code = wx.getStorageSync(W[28933]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: W[29028],
                net_type: system.wifiSignal == 0 ? '4G' : W[29029],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == W[530] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(W[29030] + type);
            console.log(public_data);

            wx.request({
                url: W[25525] + HOST + W[29031] + type + W[29032] + encodeURIComponent(JSON.stringify(public_data)),
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
            console.log(W[29033] + tmplIds);
            //获取模板ID
            callbacks[W[732]] = typeof callback == W[28831] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(W[29034]);
                    console.log(res);
                    callbacks[W[732]] && callbacks[W[732]](res);
                },
                fail(res) {
                    console.log(W[29035]);
                    console.log(res);
                    callbacks[W[732]] && callbacks[W[732]](res);
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
    method in $LBHDT0 && $LBHDT0[method](data, callback);
}

exports.init = function (data, callback) {
    run(W[348], data, callback);
};

exports.login = function (callback) {
    run(W[656], '', callback);
};

exports.pay = function (data, callback) {
    run(W[710], data, callback);
};

exports.openService = function () {
    run(W[724]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(W[718], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(W[720], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(W[722], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(W[723], data);
};

exports.msgCheck = function (data, callback) {
    run(W[609], data, callback);
};

exports.downloadClient = function () {
    run(W[29036]);
};
exports.subscribeMessage = function (data, callback) {
    run(W[732], data, callback);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(W[29037]);
};

exports.weiduanHelper = function () {
    run(W[726]);
};