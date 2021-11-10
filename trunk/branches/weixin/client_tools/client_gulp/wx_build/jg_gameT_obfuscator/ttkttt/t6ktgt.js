var M = wx.$T;
import Dall from './ttsstt';
var config = {
    game_id: M[321629], //苍月之戒小程序-HC--官方-天枢服
    game_pkg: M[321630],
    partner_id: '19',
    game_ver: M[321631], //T包为19.x.x，每次上传版本修改，先设置，上传审核版本的时候保持一致
    is_auth: false, //授权登录
    from: null, //来源
    tmpId: { 1: M[321632], 2: M[321633], 3: M[321634] }, // 订阅的类型 和 模板id
    min_app_id: ''
};
window.config = config;

var t_FZK6M = t_FK6ZM();
var HOST = M[321635];
var t;
var t_second = 0;
var t_max = 300;
var t_FKM6Z = null;
var t_FKMZ6 = null;
var t_FK6MZ = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function t_FK6ZM() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(M[321636]);
            var self = this;

            var uuid = wx.getStorageSync('plat_uuid');
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync('plat_uuid', uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync('plat_idfv');
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync('plat_idfv', idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log(M[321637]);
            console.log(info);

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync('plat_ad_code', info.query.ad_code);
            }

            //用户来源，如："txcps"
            if (info.query && info.query.from && info.query.from != "") {
                if (is_new) wx.setStorageSync('plat_from', info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync('plat_from');
                if (!from && from != "") config.from = from;
            }
            // config.from = "txcps"
            console.log(M[321638] + config.from);

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(M[321639], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                t_FKMZ6 = {
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
            console.log(M[321640]);
            var self = this;
            callbacks[M[320252]] = typeof callback == M[320889] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[M[321641]]) {
                            console.log(M[321642]);
                            self.do_login(); //已授权
                        } else {
                            console.log(M[321643]);
                            wx.hideLoading({});
                            var system_info = wx.getSystemInfoSync();
                            var screen_width = system_info.screenWidth;
                            var screen_height = system_info.screenHeight;
                            var btn_width = screen_width * 2 / 3;
                            var btn_height = btn_width / 3;
                            var btn_left = (screen_width - btn_width) / 2;
                            var btn_top = screen_height / 2;
                            var button = wx.createUserInfoButton({
                                type: M[320353],
                                text: M[321644],
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: M[321645],
                                    color: M[320522],
                                    textAlign: M[320470],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(res => {
                                console.log(res);
                                t_MZ6K({ title: M[321646] });
                                if (res.errMsg == M[321647]) {
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
                        console.log(M[321648]);
                        self.do_login();
                    }
                });
            } else {
                console.log(M[321649] + config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log(M[321650] + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求
                        var public_data = self.getPublicData();
                        public_data[M[321651]] = 1;
                        public_data[M[321652]] = res.code;
                        public_data[M[321653]] = info ? info.nick_name : '';
                        public_data[M[321654]] = info ? info.head_img : '';

                        if (t_FKMZ6 && typeof t_FKMZ6 == M[320788]) {
                            for (var key in t_FKMZ6) {
                                public_data[key] = t_FKMZ6[key];
                            }
                        }
                        if (config.is_auth) {
                            wx.getUserInfo({
                                success: function (res6) {
                                    var encryptedData = res6.encryptedData;
                                    var iv = res6.iv;
                                    var signature = res6.signature;
                                    public_data[M[321655]] = encryptedData;
                                    public_data['iv'] = iv;
                                    public_data[M[321656]] = signature;
                                    wx.request({
                                        url: M[321657] + HOST + M[321658],
                                        method: M[320218],
                                        dataType: M[321133],
                                        header: {
                                            'content-type': M[320362] // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log(M[321659]);
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
                                                        wx.setStorageSync('plat_sdk_token', data.data.sdk_token);
                                                        wx.setStorageSync('plat_uid', data.data.user_id);
                                                        wx.setStorageSync('plat_username', data.data.username);
                                                        if (data.data.ext) {
                                                            wx.setStorageSync('plat_session_key', data.data.ext);
                                                        }
                                                    } catch (e) {}

                                                    callbacks[M[320252]] && callbacks[M[320252]](0, userData);
                                                } else {
                                                    callbacks[M[320252]] && callbacks[M[320252]](1, { errMsg: data.msg });
                                                }

                                                //登录成功，加载右上角分享数据
                                                self.getShareInfo(M[321660], function (data) {
                                                    console.log(M[321661]);
                                                    wx.onShareAppMessage(function () {
                                                        //记录开始分享
                                                        self.logStartShare(M[321660]);
                                                        return {
                                                            title: data.title,
                                                            imageUrl: data.img,
                                                            query: data.query
                                                        };
                                                    });
                                                });
                                            } else {
                                                callbacks[M[320252]] && callbacks[M[320252]](1, { errMsg: M[321662] });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks[M[320252]] && callbacks[M[320252]](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks[M[320252]] && callbacks[M[320252]](1, { errMsg: res6.errMsg });
                                }
                            });
                        } else {
                            var lastTime = Date.now();
                            wx.request({
                                url: M[321657] + HOST + M[321658],
                                method: M[320218],
                                dataType: M[321133],
                                header: {
                                    'content-type': M[320362] // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log(M[321659]);
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
                                                wx.setStorageSync('plat_sdk_token', data.data.sdk_token);
                                                wx.setStorageSync('plat_uid', data.data.user_id);
                                                wx.setStorageSync('plat_username', data.data.username);
                                                if (data.data.ext) {
                                                    wx.setStorageSync('plat_session_key', data.data.ext);
                                                }
                                            } catch (e) {}

                                            callbacks[M[320252]] && callbacks[M[320252]](0, userData);
                                        } else {
                                            callbacks[M[320252]] && callbacks[M[320252]](1, { type: M[321663], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                                        }

                                        //登录成功，加载右上角分享数据
                                        self.getShareInfo(M[321660], function (data) {
                                            console.log(M[321661]);
                                            wx.onShareAppMessage(function () {
                                                //记录开始分享
                                                self.logStartShare(M[321660]);
                                                return {
                                                    title: data.title,
                                                    imageUrl: data.img,
                                                    query: data.query
                                                };
                                            });
                                        });
                                    } else {
                                        callbacks[M[320252]] && callbacks[M[320252]](1, { type: M[321663], errMsg: M[321662], time: Date.now() - lastTime, res: res });
                                    }
                                },
                                fail: function (res) {
                                    console.log(M[321664]);
                                    console.log(res);
                                    self.log(M[320581], { event: M[321665] });
                                    requestCallback = true;
                                    if (loginHandler) clearTimeout(loginHandler);
                                    loginHandler = null;
                                    callbacks[M[320252]] && callbacks[M[320252]](1, { type: M[321666], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                                }
                            });
                            if (!requestCallback) {
                                var timeOutFunc = function () {
                                    console.log(M[321667]);
                                    self.log(M[320581], { event: M[321668] });
                                    callbacks[M[320252]] && callbacks[M[320252]](1, { type: M[321669], errMsg: M[321670], time: Date.now() - lastTime });
                                    callbacks[M[320252]] = null; //回调后置空，以免success或fail里重复回调
                                };
                                loginHandler = setTimeout(timeOutFunc, 20000);
                            }
                        }
                    } else {
                        callbacks[M[320252]] && callbacks[M[320252]](1, { type: M[321671], errMsg: res.errMsg, res: res });
                    }
                },
                fail: function (res) {
                    console.log(M[321672] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf(M[321673]) > -1 || res.errMsg.indexOf(M[321674]) > -1) {
                        // 处理用户拒绝授权的情况
                        callbacks[M[320252]] && callbacks[M[320252]](1, { type: M[321675], errMsg: res.errMsg, res: res });
                    } else {
                        callbacks[M[320252]] && callbacks[M[320252]](1, { type: M[321675], errMsg: res.errMsg, res: res });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[M[320319]] = typeof callback == M[320889] ? callback : null;
            var type = data.type || M[320319];
            console.log(M[321676] + type);
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
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: M[321657] + HOST + M[321677],
                method: M[320218],
                dataType: M[321133],
                header: {
                    'content-type': M[320362] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: t_FKM6Z ? t_FKM6Z.server_id : '',
                    role_id: t_FKM6Z ? t_FKM6Z.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(M[321678]);
            callbacks[M[321679]] = typeof callback == M[320889] ? callback : null;
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: M[321657] + HOST + M[321680],
                method: M[320218],
                dataType: M[321133],
                header: {
                    'content-type': M[320362] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(M[321681]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        config.min_app_id = data.data.min_app_id;
                        if (data.state) {
                            callbacks[M[321679]] && callbacks[M[321679]](data.data);
                        } else {
                            callbacks[M[321679]] && callbacks[M[321679]]({ develop: 0 });
                        }
                    } else {
                        callbacks[M[321679]] && callbacks[M[321679]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(M[321682]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[M[321679]] && callbacks[M[321679]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(M[321683]);
                    callbacks[M[321679]] && callbacks[M[321679]]({ develop: 0 });
                    callbacks[M[321679]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(M[321684]);
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: M[321657] + HOST + M[321685],
                method: M[320218],
                dataType: M[321133],
                header: {
                    'content-type': M[320362] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: t_FKM6Z ? t_FKM6Z.server_id : '',
                    role_id: t_FKM6Z ? t_FKM6Z.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(M[321686]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[M[320319]] && callbacks[M[320319]](1, { errMsg: M[321687] + data.msg });
                        }
                    } else {
                        callbacks[M[320319]] && callbacks[M[320319]](1, { errMsg: M[321688] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(M[321689]);
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: M[321657] + HOST + M[321690],
                method: M[320218],
                dataType: M[321133],
                header: {
                    'content-type': M[320362] // 默认值
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
                    console.log(M[321691]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(M[321692]);
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: M[321657] + HOST + M[321693],
                method: M[320218],
                dataType: M[321133],
                header: {
                    'content-type': M[320362] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log(M[321694]);
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
                    console.log(M[321695]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(M[321696]);
            console.log(data);

            var self = this;
            callbacks[M[320306]] = typeof callback == M[320889] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            var session_key = wx.getStorageSync('plat_session_key');
            if (!sdk_token || !session_key) {
                callbacks[M[320306]] && callbacks[M[320306]](1, { errMsg: M[321697] });
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
            public_data[M[321698]] = JSON.stringify(order_data);
            public_data[M[321651]] = 1;

            //发起网络请求
            wx.request({
                url: M[321657] + HOST + M[321699],
                method: M[320218],
                dataType: M[321133],
                header: {
                    'content-type': M[320362] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(M[321700]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //小程序
                            if (typeof wx.requestPayment == M[320784]) {
                                // if(data.data.platform == 'android'){
                                if (sysInfo.platform == M[320110] || sysInfo.platform == M[320113]) {
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
                                            title: M[321701],
                                            content: M[321702],
                                            confirmText: M[321703],
                                            showCancel: false
                                        });
                                    }
                                }
                            } else {
                                self.minPay(data.data);
                            }
                        } else {
                            callbacks[M[320306]] && callbacks[M[320306]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[M[320252]] && callbacks[M[320252]](1, { errMsg: M[321662] });
                    }
                }
            });
        },
        xiaoPay: function (data) {
            var self = this;
            wx.navigateToMiniProgram({
                appId: config.min_app_id,
                path: M[321704] + data.orderId + M[321705] + data.money,
                extraData: {},
                envVersion: M[321706],
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
                    if (res.errMsg == M[321707]) {
                        var ret = {
                            cpOrderNo: self.order_data.cpbill,
                            orderNo: data.orderId,
                            amount: self.order_data.price,
                            extension: self.order_data.extension
                        };
                        callbacks[M[320306]] && callbacks[M[320306]](0, ret);
                    }
                },
                fail: function (res) {
                    if (res.errMsg == M[321708]) {
                        callbacks[M[320306]] && callbacks[M[320306]](2, { errMsg: M[321709] });
                    } else {
                        callbacks[M[320306]] && callbacks[M[320306]](1, { errMsg: M[321710] + res.err_desc });
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
                console.log(M[321711]);
                wx.showModal({
                    title: M[321701],
                    content: M[321712] + data.balance + M[321713] + data.buyQuantity + M[321714],
                    showCancel: false,
                    confirmText: M[321703],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log(M[321715]);
                wx.requestMidasPayment({
                    mode: M[321716],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == M[321717]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if (res.errMsg.indexOf(M[321718]) !== -1) {
                            callbacks[M[320306]] && callbacks[M[320306]](2, { errMsg: M[321709] });
                        } else {
                            callbacks[M[320306]] && callbacks[M[320306]](1, { errMsg: M[321710] + res.errMsg });
                        }
                    },
                    complete: function (res) {}
                });
            }
        },

        kfPay: function (data) {
            //检查订单支付是否完成
            var self = this;
            t_FK6MZ = data.orderId;
            wx.showModal({
                title: M[321701],
                content: M[321719],
                showCancel: false,
                confirmText: M[321703],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: M[321720],
                        sendMessageImg: M[321721]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log(M[321722]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync('plat_session_key');
            wx.request({
                url: M[321657] + HOST + M[321723] + config.partner_id + '/' + config.game_pkg + '/',
                method: M[320218],
                dataType: M[321133],
                header: {
                    'content-type': M[320362] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log(M[321724]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[M[320306]] && callbacks[M[320306]](0, ret);
                        } else {
                            callbacks[M[320306]] && callbacks[M[320306]](1, { errMsg: M[321725] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');

            var postData = {};
            postData[M[321726]] = uid;
            postData[M[321727]] = username;
            postData[M[321728]] = data.roleid;
            postData[M[321729]] = data.rolelevel;
            postData[M[321730]] = data.rolename;
            postData[M[320023]] = data.serverid;

            if (data.roleid && data.serverid) {
                t_FKM6Z = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(M[320432], postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');

            var postData = {};
            postData[M[321726]] = uid;
            postData[M[321727]] = username;
            postData[M[321728]] = data.roleid;
            postData[M[321729]] = data.rolelevel;
            postData[M[321730]] = data.rolename;
            postData[M[320023]] = data.serverid;

            if (data.roleid && data.serverid) {
                t_FKM6Z = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(M[321731], postData);

            //进入游戏确认邀请成功
            if (t_FKMZ6) {
                this.updateShare(t_FKMZ6.invite, t_FKMZ6.invite_type, t_FKMZ6.is_new, data.roleid, data.serverid, t_FKMZ6.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');

            var postData = {};
            postData[M[321726]] = uid;
            postData[M[321727]] = username;
            postData[M[321728]] = data.roleid;
            postData[M[321729]] = data.rolelevel;
            postData[M[321730]] = data.rolename;
            postData[M[320023]] = data.serverid;

            if (data.roleid && data.serverid) {
                t_FKM6Z = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(M[321732], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = M[321733].split('');
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
            var uuid = wx.getStorageSync('plat_uuid');
            var idfv = wx.getStorageSync('plat_idfv');
            var ad_code = wx.getStorageSync('plat_ad_code');

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: M[321734],
                net_type: system.wifiSignal == 0 ? '4G' : M[321735],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == M[320110] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(M[321736] + type);
            console.log(public_data);

            wx.request({
                url: M[321657] + HOST + M[321737] + type + M[321738] + encodeURIComponent(JSON.stringify(public_data)),
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
            console.log(M[321739] + tmplIds);
            //获取模板ID
            callbacks[M[320328]] = typeof callback == M[320889] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(M[321740]);
                    console.log(res);
                    callbacks[M[320328]] && callbacks[M[320328]](res);
                },
                fail(res) {
                    console.log(M[321741]);
                    console.log(res);
                    callbacks[M[320328]] && callbacks[M[320328]](res);
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
    method in t_FZK6M && t_FZK6M[method](data, callback);
}

exports.init = function (data, callback) {
    run(M[320231], data, callback);
};
exports.login = function (callback) {
    run(M[320252], '', callback);
};
exports.pay = function (data, callback) {
    run(M[320306], data, callback);
};
exports.openService = function () {
    run(M[320320]);
};
exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(M[320314], data);
};
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(M[320316], data);
};
exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(M[320318], data);
};
exports.share = function (type) {
    var data = {
        type: type
    };
    run(M[320319], data);
};
exports.msgCheck = function (data, callback) {
    run(M[320196], data, callback);
};
exports.downloadClient = function () {
    run(M[321742]);
};
exports.subscribeMessage = function (data, callback) {
    run(M[320328], data, callback);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run(M[321743]);
};
exports.weiduanHelper = function () {
    run(M[320322]);
};