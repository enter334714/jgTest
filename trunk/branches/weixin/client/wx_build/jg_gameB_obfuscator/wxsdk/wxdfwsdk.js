var $c = wx.$b;
import Dall from './wxfdehelp';
var config = {
    game_id: $c[53653], //天剑奇缘
    game_pkg: $c[53654],
    partner_id: $c[53655],
    game_ver: $c[53656], //A包为1.x.x，每次上传版本修改，先设置，上传审核版本的时候保持一致
    is_auth: false, //授权登录
    from: null, //来源
    tmpId: { 1: $c[53657], 2: $c[53658], 3: $c[53659] }, // 订阅的类型 和 模板id
    min_app_id: ''
};
window.config = config;

var B_IJH = B_KJ();
var HOST = $c[53660];
var t;
var t_second = 0;
var t_max = 300;
var B_JHI = null;
var B_JIH = null;
var B_JK = null;

function B_KJ() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log($c[53661]);
            var self = this;

            var uuid = wx.getStorageSync($c[53662]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync($c[53663], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync($c[53664]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync($c[53665], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log($c[53666]);
            console.log(info);

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync($c[53667], info.query.ad_code);
            }

            //用户来源，如："txcps"
            if (info.query && info.query.from && info.query.from != "") {
                if (is_new) wx.setStorageSync($c[53668], info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync($c[53669]);
                if (!from && from != "") config.from = from;
            }
            // config.from = "txcps"
            console.log(config.from);

            var data = {
                install: is_new,
                scene: scene
            };
            self.log($c[53670], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                B_JIH = {
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
            console.log($c[53671]);
            var self = this;
            callbacks[$c[53672]] = typeof callback == $c[53673] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[$c[53674]]) {
                            console.log($c[53675]);
                            self.do_login(); //已授权
                        } else {
                            console.log($c[53676]);
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
                                type: $c[53677],
                                text: $c[53678],
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: $c[53679],
                                    color: $c[53680],
                                    textAlign: $c[53681],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(res => {
                                console.log(res);
                                B_BCD({ title: $c[53682] });
                                if (res.errMsg == $c[53683]) {
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
                        console.log($c[53684]);
                        self.do_login();
                    }
                });
            } else {
                console.log($c[53685] + config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log($c[53686] + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求

                        var public_data = self.getPublicData();
                        public_data[$c[53687]] = 1;
                        public_data[$c[53688]] = res.code;
                        public_data[$c[53689]] = info ? info.nick_name : '';
                        public_data[$c[53690]] = info ? info.head_img : '';

                        if (B_JIH && typeof B_JIH == $c[53691]) {
                            for (var key in B_JIH) {
                                public_data[key] = B_JIH[key];
                            }
                        }
                        if (config.is_auth) {
                            wx.getUserInfo({
                                success: function (res6) {
                                    var encryptedData = res6.encryptedData;
                                    var iv = res6.iv;
                                    var signature = res6.signature;
                                    public_data[$c[53692]] = encryptedData;
                                    public_data[$c[53693]] = iv;
                                    public_data[$c[53694]] = signature;
                                    wx.request({
                                        url: $c[53695] + HOST + $c[53696],
                                        method: $c[53697],
                                        dataType: $c[53698],
                                        header: {
                                            'content-type': $c[53699] // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log($c[53700]);
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
                                                        is_client: data.data.is_client || $c[53701],
                                                        ios_pay: data.data.ios_pay || $c[53702]

                                                    };
                                                    try {
                                                        wx.setStorageSync($c[53703], data.data.sdk_token);
                                                        wx.setStorageSync($c[53704], data.data.user_id);
                                                        wx.setStorageSync($c[53705], data.data.username);
                                                        if (data.data.ext) {
                                                            wx.setStorageSync($c[53706], data.data.ext);
                                                        }
                                                    } catch (e) {}

                                                    callbacks[$c[53707]] && callbacks[$c[53708]](0, userData);
                                                } else {
                                                    callbacks[$c[53709]] && callbacks[$c[53710]](1, { errMsg: data.msg });
                                                }

                                                //登录成功，加载右上角分享数据
                                                self.getShareInfo($c[53711], function (data) {
                                                    console.log($c[53712]);
                                                    wx.onShareAppMessage(function () {
                                                        //记录开始分享
                                                        self.logStartShare($c[53713]);
                                                        return {
                                                            title: data.title,
                                                            imageUrl: data.img,
                                                            query: data.query
                                                        };
                                                    });
                                                });
                                            } else {
                                                callbacks[$c[53714]] && callbacks[$c[53715]](1, { errMsg: $c[53716] });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks[$c[53717]] && callbacks[$c[53718]](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks[$c[53719]] && callbacks[$c[53720]](1, { errMsg: res6.errMsg });
                                }
                            });
                        } else {
                            wx.request({
                                url: $c[53721] + HOST + $c[53722],
                                method: $c[53723],
                                dataType: $c[53724],
                                header: {
                                    'content-type': $c[53725] // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log($c[53726]);
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
                                                is_client: data.data.is_client || $c[53727],
                                                ios_pay: data.data.ios_pay || $c[53728]

                                            };
                                            try {
                                                wx.setStorageSync($c[53729], data.data.sdk_token);
                                                wx.setStorageSync($c[53730], data.data.user_id);
                                                wx.setStorageSync($c[53731], data.data.username);
                                                if (data.data.ext) {
                                                    wx.setStorageSync($c[53732], data.data.ext);
                                                }
                                            } catch (e) {}

                                            callbacks[$c[53733]] && callbacks[$c[53734]](0, userData);
                                        } else {
                                            callbacks[$c[53735]] && callbacks[$c[53736]](1, { errMsg: data.msg });
                                        }

                                        //登录成功，加载右上角分享数据
                                        self.getShareInfo($c[53737], function (data) {
                                            console.log($c[53738]);
                                            wx.onShareAppMessage(function () {
                                                //记录开始分享
                                                self.logStartShare($c[53739]);
                                                return {
                                                    title: data.title,
                                                    imageUrl: data.img,
                                                    query: data.query
                                                };
                                            });
                                        });
                                    } else {
                                        callbacks[$c[53740]] && callbacks[$c[53741]](1, { errMsg: $c[53742] });
                                    }
                                }
                            });
                        }
                    } else {
                        callbacks[$c[53743]] && callbacks[$c[53744]](1, { errMsg: res.errMsg });
                    }
                },
                fail: function (res) {
                    console.log($c[53745] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf($c[53746]) > -1 || res.errMsg.indexOf($c[53747]) > -1) {
                        // 处理用户拒绝授权的情况
                        callbacks[$c[53748]] && callbacks[$c[53749]](1, { errMsg: res.errMsg });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[$c[53750]] = typeof callback == $c[53751] ? callback : null;
            var type = data.type || $c[53752];
            console.log($c[53753] + type);
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
            var sdk_token = wx.getStorageSync($c[53754]);
            wx.request({
                url: $c[53755] + HOST + $c[53756],
                method: $c[53757],
                dataType: $c[53758],
                header: {
                    'content-type': $c[53759] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: B_JHI ? B_JHI.server_id : '',
                    role_id: B_JHI ? B_JHI.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        B_EFD: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log($c[53760]);
            var sdk_token = wx.getStorageSync($c[53761]);
            wx.request({
                url: $c[53762] + HOST + $c[53763],
                method: $c[53764],
                dataType: $c[53765],
                header: {
                    'content-type': $c[53766] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log($c[53767]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        config.min_app_id = data.data.min_app_id;
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
        getShareInfo: function (type, callback) {
            console.log($c[53768]);
            var sdk_token = wx.getStorageSync($c[53769]);
            wx.request({
                url: $c[53770] + HOST + $c[53771],
                method: $c[53772],
                dataType: $c[53773],
                header: {
                    'content-type': $c[53774] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: B_JHI ? B_JHI.server_id : '',
                    role_id: B_JHI ? B_JHI.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log($c[53775]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[$c[53776]] && callbacks[$c[53777]](1, { errMsg: $c[53778] + data.msg });
                        }
                    } else {
                        callbacks[$c[53779]] && callbacks[$c[53780]](1, { errMsg: $c[53781] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log($c[53782]);
            var sdk_token = wx.getStorageSync($c[53783]);
            wx.request({
                url: $c[53784] + HOST + $c[53785],
                method: $c[53786],
                dataType: $c[53787],
                header: {
                    'content-type': $c[53788] // 默认值
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
                    console.log($c[53789]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log($c[53790]);
            var sdk_token = wx.getStorageSync($c[53791]);
            wx.request({
                url: $c[53792] + HOST + $c[53793],
                method: $c[53794],
                dataType: $c[53795],
                header: {
                    'content-type': $c[53796] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log($c[53797]);
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
                    console.log($c[53798]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log($c[53799]);
            console.log(data);

            var self = this;
            callbacks[$c[53800]] = typeof callback == $c[53801] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync($c[53802]);
            var session_key = wx.getStorageSync($c[53803]);
            if (!sdk_token || !session_key) {
                callbacks[$c[53804]] && callbacks[$c[53805]](1, { errMsg: $c[53806] });
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
            public_data[$c[53807]] = JSON.stringify(order_data);
            public_data[$c[53808]] = 1;

            //发起网络请求
            wx.request({
                url: $c[53809] + HOST + $c[53810],
                method: $c[53811],
                dataType: $c[53812],
                header: {
                    'content-type': $c[53813] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log($c[53814]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //小程序
                            if (typeof wx.requestPayment == $c[53815]) {
                                // if(data.data.platform == 'android'){
                                if (sysInfo.platform == $c[53816] || sysInfo.platform == $c[53817]) {
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
                                            title: $c[53818],
                                            content: $c[53819],
                                            confirmText: $c[53820],
                                            showCancel: false
                                        });
                                    }
                                }
                            } else {
                                self.minPay(data.data);
                            }
                        } else {
                            callbacks[$c[53821]] && callbacks[$c[53822]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[$c[53823]] && callbacks[$c[53824]](1, { errMsg: $c[53825] });
                    }
                }
            });
        },
        xiaoPay: function (data) {
            var self = this;
            wx.navigateToMiniProgram({
                appId: config.min_app_id,
                path: $c[53826] + data.orderId + $c[53827] + data.money,
                extraData: {},
                envVersion: $c[53828],
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
                    if (res.errMsg == $c[53829]) {
                        var ret = {
                            cpOrderNo: self.order_data.cpbill,
                            orderNo: data.orderId,
                            amount: self.order_data.price,
                            extension: self.order_data.extension
                        };
                        callbacks[$c[53830]] && callbacks[$c[53831]](0, ret);
                    }
                },
                fail: function (res) {
                    if (res.errMsg == $c[53832]) {
                        callbacks[$c[53833]] && callbacks[$c[53834]](2, { errMsg: $c[53835] });
                    } else {
                        callbacks[$c[53836]] && callbacks[$c[53837]](1, { errMsg: $c[53838] + res.err_desc });
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
                console.log($c[53839]);
                wx.showModal({
                    title: $c[53840],
                    content: $c[53841] + data.balance + $c[53842] + data.buyQuantity + $c[53843],
                    showCancel: false,
                    confirmText: $c[53844],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log($c[53845]);
                wx.requestMidasPayment({
                    mode: $c[53846],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == $c[53847]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if (res.errMsg.indexOf($c[53848]) !== -1) {
                            callbacks[$c[53849]] && callbacks[$c[53850]](2, { errMsg: $c[53851] });
                        } else {
                            callbacks[$c[53852]] && callbacks[$c[53853]](1, { errMsg: $c[53854] + res.errMsg });
                        }
                    },
                    complete: function (res) {}
                });
            }
        },

        kfPay: function (data) {
            //检查订单支付是否完成
            var self = this;
            B_JK = data.orderId;
            wx.showModal({
                title: $c[53855],
                content: $c[53856],
                showCancel: false,
                confirmText: $c[53857],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: $c[53858],
                        sendMessageImg: $c[53859]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log($c[53860]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync($c[53861]);
            wx.request({
                url: $c[53862] + HOST + $c[53863] + config.partner_id + $c[53864] + config.game_pkg + $c[53865],
                method: $c[53866],
                dataType: $c[53867],
                header: {
                    'content-type': $c[53868] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log($c[53869]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[$c[53870]] && callbacks[$c[53871]](0, ret);
                        } else {
                            callbacks[$c[53872]] && callbacks[$c[53873]](1, { errMsg: $c[53874] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync($c[53875]);
            var username = wx.getStorageSync($c[53876]);

            var postData = {};
            postData[$c[53877]] = uid;
            postData[$c[53878]] = username;
            postData[$c[53879]] = data.roleid;
            postData[$c[53880]] = data.rolelevel;
            postData[$c[53881]] = data.rolename;
            postData[$c[53882]] = data.serverid;

            if (data.roleid && data.serverid) {
                B_JHI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log($c[53883], postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync($c[53884]);
            var username = wx.getStorageSync($c[53885]);

            var postData = {};
            postData[$c[53886]] = uid;
            postData[$c[53887]] = username;
            postData[$c[53888]] = data.roleid;
            postData[$c[53889]] = data.rolelevel;
            postData[$c[53890]] = data.rolename;
            postData[$c[53891]] = data.serverid;

            if (data.roleid && data.serverid) {
                B_JHI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log($c[53892], postData);

            //进入游戏确认邀请成功
            if (B_JIH) {
                this.updateShare(B_JIH.invite, B_JIH.invite_type, B_JIH.is_new, data.roleid, data.serverid, B_JIH.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync($c[53893]);
            var username = wx.getStorageSync($c[53894]);

            var postData = {};
            postData[$c[53895]] = uid;
            postData[$c[53896]] = username;
            postData[$c[53897]] = data.roleid;
            postData[$c[53898]] = data.rolelevel;
            postData[$c[53899]] = data.rolename;
            postData[$c[53900]] = data.serverid;

            if (data.roleid && data.serverid) {
                B_JHI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log($c[53901], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = $c[53902].split('');
            var uuid = [],
                i;
            radix = radix || chars.length;

            if (len) {
                for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
            } else {
                var r;

                uuid[8] = uuid[13] = uuid[18] = uuid[23] = $c[53903];
                uuid[14] = $c[53904];

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
            var uuid = wx.getStorageSync($c[53905]);
            var idfv = wx.getStorageSync($c[53906]);
            var ad_code = wx.getStorageSync($c[53907]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: $c[53908],
                net_type: system.wifiSignal == 0 ? $c[53909] : $c[53910],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == $c[53911] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log($c[53912] + type);
            console.log(public_data);

            wx.request({
                url: $c[53913] + HOST + $c[53914] + type + $c[53915] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + $c[53916] + date.getMonth() + $c[53917] + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log($c[53918] + tmplIds);
            //获取模板ID
            callbacks[$c[53919]] = typeof callback == $c[53920] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log($c[53921]);
                    console.log(res);
                    callbacks[$c[53922]] && callbacks[$c[53923]](res);
                },
                fail(res) {
                    console.log($c[53924]);
                    console.log(res);
                    callbacks[$c[53925]] && callbacks[$c[53926]](res);
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
    method in B_IJH && B_IJH[method](data, callback);
}

exports.init = function (data, callback) {
    run($c[53927], data, callback);
};
exports.login = function (callback) {
    run($c[53928], '', callback);
};
exports.pay = function (data, callback) {
    run($c[53929], data, callback);
};
exports.B_EFD = function () {
    run($c[53930]);
};
exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run($c[53931], data);
};
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run($c[53932], data);
};
exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run($c[53933], data);
};
exports.share = function (type) {
    var data = {
        type: type
    };
    run($c[53934], data);
};
exports.msgCheck = function (data, callback) {
    run($c[53935], data, callback);
};
exports.downloadClient = function () {
    run($c[53936]);
};
exports.subscribeMessage = function (data, callback) {
    run($c[53937], data, callback);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run($c[53938]);
};
exports.weiduanHelper = function () {
    run($c[53939]);
};