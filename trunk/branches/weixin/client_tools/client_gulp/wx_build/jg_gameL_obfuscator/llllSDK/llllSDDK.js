var W = wx.$l;
import Dall from './llllHELP';
var config = {
    game_id: W[27988], //伏魔西游 -官包
    game_pkg: W[27989],
    partner_id: '19',
    game_ver: "11.0.5", //L包11.x.x，每次上传版本修改，先设置，上传审核版本的时候保持一致
    is_auth: false, //授权登录
    from: null, //来源
    //1活动开启通知 2.活动状态提醒 3.离线收益上限提醒
    tmpId: { 1: W[27991], 2: W[27992], 3: W[27993] }, // 订阅的类型 和 模板id
    min_app_id: ''
};
window.config = config;

var $LVCG_T = $LVG_CT();
var HOST = W[27976];
var t;
var t_second = 0;
var t_max = 300;
var $LVGT_C = null;
var $LVGTC_ = null;
var $LVG_TC = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function $LVG_CT() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(W[27994]);
            var self = this;

            var uuid = wx.getStorageSync(W[27995]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(W[27995], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(W[27996]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(W[27996], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log(W[27997]);
            console.log(info);

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(W[27998], info.query.ad_code);
            }

            //用户来源，如："txcps"
            if (info.query && info.query.from && info.query.from != "") {
                if (is_new) wx.setStorageSync(W[27999], info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync(W[27999]);
                if (!from && from != "") config.from = from;
            }
            // config.from = "txcps"
            console.log(W[28000] + config.from);

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(W[1022], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                $LVGTC_ = {
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
            console.log(W[28001]);
            var self = this;
            callbacks[W[621]] = typeof callback == W[27895] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[W[28002]]) {
                            console.log(W[28003]);
                            self.do_login(); //已授权
                        } else {
                            console.log(W[28004]);
                            wx.hideLoading({});
                            var system_info = wx.getSystemInfoSync();
                            var screen_width = system_info.screenWidth;
                            var screen_height = system_info.screenHeight;
                            var btn_width = screen_width * 2 / 3;
                            var btn_height = btn_width / 3;
                            var btn_left = (screen_width - btn_width) / 2;
                            var btn_top = screen_height / 2;
                            var button = wx.createUserInfoButton({
                                type: W[187],
                                text: W[28005],
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: W[28006],
                                    color: W[97],
                                    textAlign: W[45],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(res => {
                                console.log(res);
                                $LTC_G({ title: W[28007] });
                                if (res.errMsg == W[28008]) {
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
                        console.log(W[28009]);
                        self.do_login();
                    }
                });
            } else {
                console.log(W[28010] + config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log(W[28011] + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求
                        var public_data = self.getPublicData();
                        public_data[W[28012]] = 1;
                        public_data[W[23491]] = res.code;
                        public_data[W[28013]] = info ? info.nick_name : '';
                        public_data[W[28014]] = info ? info.head_img : '';

                        if ($LVGTC_ && typeof $LVGTC_ == W[1017]) {
                            for (var key in $LVGTC_) {
                                public_data[key] = $LVGTC_[key];
                            }
                        }
                        if (config.is_auth) {
                            wx.getUserInfo({
                                success: function (res6) {
                                    var encryptedData = res6.encryptedData;
                                    var iv = res6.iv;
                                    var signature = res6.signature;
                                    public_data[W[28015]] = encryptedData;
                                    public_data['iv'] = iv;
                                    public_data[W[28016]] = signature;
                                    wx.request({
                                        url: W[27979] + HOST + W[28017],
                                        method: W[590],
                                        dataType: W[6334],
                                        header: {
                                            'content-type': W[725] // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log(W[28018]);
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
                                                        wx.setStorageSync(W[28019], data.data.sdk_token);
                                                        wx.setStorageSync(W[28020], data.data.user_id);
                                                        wx.setStorageSync(W[27977], data.data.username);
                                                        if (data.data.ext) {
                                                            wx.setStorageSync(W[28021], data.data.ext);
                                                        }
                                                    } catch (e) {}

                                                    callbacks[W[621]] && callbacks[W[621]](0, userData);
                                                } else {
                                                    callbacks[W[621]] && callbacks[W[621]](1, { errMsg: data.msg });
                                                }

                                                //登录成功，加载右上角分享数据
                                                self.getShareInfo(W[28022], function (data) {
                                                    console.log(W[28023]);
                                                    wx.onShareAppMessage(function () {
                                                        //记录开始分享
                                                        self.logStartShare(W[28022]);
                                                        return {
                                                            title: data.title,
                                                            imageUrl: data.img,
                                                            query: data.query
                                                        };
                                                    });
                                                });
                                            } else {
                                                callbacks[W[621]] && callbacks[W[621]](1, { errMsg: W[28024] });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks[W[621]] && callbacks[W[621]](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks[W[621]] && callbacks[W[621]](1, { errMsg: res6.errMsg });
                                }
                            });
                        } else {
                            var lastTime = Date.now();
                            wx.request({
                                url: W[27979] + HOST + W[28017],
                                method: W[590],
                                dataType: W[6334],
                                header: {
                                    'content-type': W[725] // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log(W[28018]);
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
                                                wx.setStorageSync(W[28019], data.data.sdk_token);
                                                wx.setStorageSync(W[28020], data.data.user_id);
                                                wx.setStorageSync(W[27977], data.data.username);
                                                if (data.data.ext) {
                                                    wx.setStorageSync(W[28021], data.data.ext);
                                                }
                                            } catch (e) {}

                                            callbacks[W[621]] && callbacks[W[621]](0, userData);
                                        } else {
                                            callbacks[W[621]] && callbacks[W[621]](1, { type: W[28025], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                                        }

                                        //登录成功，加载右上角分享数据
                                        self.getShareInfo(W[28022], function (data) {
                                            console.log(W[28023]);
                                            wx.onShareAppMessage(function () {
                                                //记录开始分享
                                                self.logStartShare(W[28022]);
                                                return {
                                                    title: data.title,
                                                    imageUrl: data.img,
                                                    query: data.query
                                                };
                                            });
                                        });
                                    } else {
                                        callbacks[W[621]] && callbacks[W[621]](1, { type: W[28025], errMsg: W[28024], time: Date.now() - lastTime, res: res });
                                    }
                                },
                                fail: function (res) {
                                    console.log(W[28026]);
                                    console.log(res);
                                    self.log(W[164], { event: W[28027] });
                                    requestCallback = true;
                                    if (loginHandler) clearTimeout(loginHandler);
                                    loginHandler = null;
                                    callbacks[W[621]] && callbacks[W[621]](1, { type: W[28028], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                                }
                            });
                            if (!requestCallback) {
                                var timeOutFunc = function () {
                                    console.log(W[28029]);
                                    self.log(W[164], { event: W[28030] });
                                    callbacks[W[621]] && callbacks[W[621]](1, { type: W[28031], errMsg: W[28032], time: Date.now() - lastTime });
                                    callbacks[W[621]] = null; //回调后置空，以免success或fail里重复回调
                                };
                                loginHandler = setTimeout(timeOutFunc, 20000);
                            }
                        }
                    } else {
                        callbacks[W[621]] && callbacks[W[621]](1, { type: W[28033], errMsg: res.errMsg, res: res });
                    }
                },
                fail: function (res) {
                    console.log(W[28034] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf(W[28035]) > -1 || res.errMsg.indexOf(W[28036]) > -1) {
                        // 处理用户拒绝授权的情况
                        callbacks[W[621]] && callbacks[W[621]](1, { type: W[28037], errMsg: res.errMsg, res: res });
                    } else {
                        callbacks[W[621]] && callbacks[W[621]](1, { type: W[28037], errMsg: res.errMsg, res: res });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[W[685]] = typeof callback == W[27895] ? callback : null;
            var type = data.type || W[685];
            console.log(W[28038] + type);
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
            var sdk_token = wx.getStorageSync(W[28019]);
            wx.request({
                url: W[27979] + HOST + W[28039],
                method: W[590],
                dataType: W[6334],
                header: {
                    'content-type': W[725] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: $LVGT_C ? $LVGT_C.server_id : '',
                    role_id: $LVGT_C ? $LVGT_C.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(W[28040]);
            callbacks[W[7561]] = typeof callback == W[27895] ? callback : null;
            var sdk_token = wx.getStorageSync(W[28019]);
            wx.request({
                url: W[27979] + HOST + W[28041],
                method: W[590],
                dataType: W[6334],
                header: {
                    'content-type': W[725] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(W[28042]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        config.min_app_id = data.data.min_app_id;
                        if (data.state) {
                            callbacks[W[7561]] && callbacks[W[7561]](data.data);
                        } else {
                            callbacks[W[7561]] && callbacks[W[7561]]({ develop: 0 });
                        }
                    } else {
                        callbacks[W[7561]] && callbacks[W[7561]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(W[28043]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[W[7561]] && callbacks[W[7561]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(W[28044]);
                    callbacks[W[7561]] && callbacks[W[7561]]({ develop: 0 });
                    callbacks[W[7561]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(W[28045]);
            var sdk_token = wx.getStorageSync(W[28019]);
            wx.request({
                url: W[27979] + HOST + W[28046],
                method: W[590],
                dataType: W[6334],
                header: {
                    'content-type': W[725] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: $LVGT_C ? $LVGT_C.server_id : '',
                    role_id: $LVGT_C ? $LVGT_C.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(W[28047]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[W[685]] && callbacks[W[685]](1, { errMsg: W[28048] + data.msg });
                        }
                    } else {
                        callbacks[W[685]] && callbacks[W[685]](1, { errMsg: W[28049] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(W[28050]);
            var sdk_token = wx.getStorageSync(W[28019]);
            wx.request({
                url: W[27979] + HOST + W[28051],
                method: W[590],
                dataType: W[6334],
                header: {
                    'content-type': W[725] // 默认值
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
                    console.log(W[28052]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(W[28053]);
            var sdk_token = wx.getStorageSync(W[28019]);
            wx.request({
                url: W[27979] + HOST + W[28054],
                method: W[590],
                dataType: W[6334],
                header: {
                    'content-type': W[725] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log(W[28055]);
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
                    console.log(W[28056]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(W[28057]);
            console.log(data);

            var self = this;
            callbacks[W[672]] = typeof callback == W[27895] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(W[28019]);
            var session_key = wx.getStorageSync(W[28021]);
            if (!sdk_token || !session_key) {
                callbacks[W[672]] && callbacks[W[672]](1, { errMsg: W[28058] });
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
            public_data[W[28059]] = JSON.stringify(order_data);
            public_data[W[28012]] = 1;

            //发起网络请求
            wx.request({
                url: W[27979] + HOST + W[28060],
                method: W[590],
                dataType: W[6334],
                header: {
                    'content-type': W[725] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(W[28061]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //小程序
                            if (typeof wx.requestPayment == W[27848]) {
                                // if(data.data.platform == 'android'){
                                if (sysInfo.platform == W[495] || sysInfo.platform == W[498]) {
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
                                            title: W[28062],
                                            content: W[28063],
                                            confirmText: W[28064],
                                            showCancel: false
                                        });
                                    }
                                }
                            } else {
                                self.minPay(data.data);
                            }
                        } else {
                            callbacks[W[672]] && callbacks[W[672]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[W[672]] && callbacks[W[672]](1, { errMsg: W[28024] });
                    }
                }
            });
        },
        xiaoPay: function (data) {
            var self = this;
            wx.navigateToMiniProgram({
                appId: config.min_app_id,
                path: W[28065] + data.orderId + W[28066] + data.money,
                extraData: {},
                envVersion: W[27986],
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
                    if (res.errMsg == W[28067]) {
                        var ret = {
                            cpOrderNo: self.order_data.cpbill,
                            orderNo: data.orderId,
                            amount: self.order_data.price,
                            extension: self.order_data.extension
                        };
                        callbacks[W[672]] && callbacks[W[672]](0, ret);
                    }
                },
                fail: function (res) {
                    if (res.errMsg == W[28068]) {
                        callbacks[W[672]] && callbacks[W[672]](2, { errMsg: W[28069] });
                    } else {
                        callbacks[W[672]] && callbacks[W[672]](1, { errMsg: W[28070] + res.err_desc });
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
                console.log(W[28071]);
                wx.showModal({
                    title: W[28062],
                    content: W[28072] + data.balance + W[28073] + data.buyQuantity + W[28074],
                    showCancel: false,
                    confirmText: W[28064],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log(W[28075]);
                wx.requestMidasPayment({
                    mode: W[28076],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == W[28077]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        console.log(W[28078] + JSON.stringify(res));
                        if (res.errMsg.indexOf(W[28079]) !== -1) {
                            callbacks[W[672]] && callbacks[W[672]](2, { errMsg: W[28069] });
                        } else {
                            callbacks[W[672]] && callbacks[W[672]](1, { errMsg: W[28070] + res.errMsg });
                        }
                    },
                    complete: function (res) {}
                });
            }
        },

        kfPay: function (data) {
            //检查订单支付是否完成
            var self = this;
            $LVG_TC = data.orderId;
            wx.showModal({
                title: W[28062],
                content: W[28080],
                showCancel: false,
                confirmText: W[28064],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: W[28081],
                        sendMessageImg: W[28082]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log(W[28083]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync(W[28021]);
            wx.request({
                url: W[27979] + HOST + W[28084] + config.partner_id + '/' + config.game_pkg + '/',
                method: W[590],
                dataType: W[6334],
                header: {
                    'content-type': W[725] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log(W[28085]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[W[672]] && callbacks[W[672]](0, ret);
                        } else {
                            callbacks[W[672]] && callbacks[W[672]](1, { errMsg: W[28086] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(W[28020]);
            var username = wx.getStorageSync(W[27977]);

            var postData = {};
            postData[W[28087]] = uid;
            postData[W[28088]] = username;
            postData[W[11041]] = data.roleid;
            postData[W[28089]] = data.rolelevel;
            postData[W[28090]] = data.rolename;
            postData[W[135]] = data.serverid;

            if (data.roleid && data.serverid) {
                $LVGT_C = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(W[7], postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(W[28020]);
            var username = wx.getStorageSync(W[27977]);

            var postData = {};
            postData[W[28087]] = uid;
            postData[W[28088]] = username;
            postData[W[11041]] = data.roleid;
            postData[W[28089]] = data.rolelevel;
            postData[W[28090]] = data.rolename;
            postData[W[135]] = data.serverid;

            if (data.roleid && data.serverid) {
                $LVGT_C = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(W[6215], postData);

            //进入游戏确认邀请成功
            if ($LVGTC_) {
                this.updateShare($LVGTC_.invite, $LVGTC_.invite_type, $LVGTC_.is_new, data.roleid, data.serverid, $LVGTC_.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(W[28020]);
            var username = wx.getStorageSync(W[27977]);

            var postData = {};
            postData[W[28087]] = uid;
            postData[W[28088]] = username;
            postData[W[11041]] = data.roleid;
            postData[W[28089]] = data.rolelevel;
            postData[W[28090]] = data.rolename;
            postData[W[135]] = data.serverid;

            if (data.roleid && data.serverid) {
                $LVGT_C = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(W[28091], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = W[28092].split('');
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
            var uuid = wx.getStorageSync(W[27995]);
            var idfv = wx.getStorageSync(W[27996]);
            var ad_code = wx.getStorageSync(W[27998]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: W[28093],
                net_type: system.wifiSignal == 0 ? '4G' : W[28094],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == W[495] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(W[28095] + type);
            console.log(public_data);

            wx.request({
                url: W[27979] + HOST + W[28096] + type + W[28097] + encodeURIComponent(JSON.stringify(public_data)),
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
            console.log(W[28098] + tmplIds);
            //获取模板ID
            callbacks[W[694]] = typeof callback == W[27895] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(W[28099]);
                    console.log(res);
                    callbacks[W[694]] && callbacks[W[694]](res);
                },
                fail(res) {
                    console.log(W[28100]);
                    console.log(res);
                    callbacks[W[694]] && callbacks[W[694]](res);
                }
            });
        },

        // 微端小助手
        weiduanHelper: function () {
            var da = new Dall();
            da.stebutonanimation(config.partner_id, config.game_pkg);
        }
    };
}

function run(method, data, callback) {
    method in $LVCG_T && $LVCG_T[method](data, callback);
}

exports.init = function (data, callback) {
    run(W[312], data, callback);
};

exports.login = function (callback) {
    run(W[621], '', callback);
};

exports.pay = function (data, callback) {
    run(W[672], data, callback);
};

exports.openService = function () {
    run(W[686]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(W[680], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(W[682], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(W[684], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(W[685], data);
};

exports.msgCheck = function (data, callback) {
    run(W[574], data, callback);
};

exports.downloadClient = function () {
    run(W[28101]);
};
exports.subscribeMessage = function (data, callback) {
    run(W[694], data, callback);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(W[28102]);
};

exports.weiduanHelper = function () {
    run(W[688]);
};