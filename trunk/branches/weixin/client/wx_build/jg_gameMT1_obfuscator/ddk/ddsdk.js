var $c = wx.$b;
import Dall from './ddhelp';
var config = {
    game_id: $c[123], //天剑奇缘
    game_pkg: $c[124],
    partner_id: $c[125],
    game_ver: $c[126], //A包为1.x.x，每次上传版本修改，先设置，上传审核版本的时候保持一致
    is_auth: false, //授权登录
    from: null, //来源
    tmpId: { 1: $c[127], 2: $c[128], 3: $c[129] }, // 订阅的类型 和 模板id
    min_app_id: ''
};
window.config = config;

var B_IJH = B_KJ();
var HOST = $c[130];
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
            console.log($c[131]);
            var self = this;

            var uuid = wx.getStorageSync($c[132]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync($c[133], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync($c[134]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync($c[135], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log($c[136]);
            console.log(info);

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync($c[137], info.query.ad_code);
            }

            //用户来源，如："txcps"
            if (info.query && info.query.from && info.query.from != "") {
                if (is_new) wx.setStorageSync($c[138], info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync($c[139]);
                if (!from && from != "") config.from = from;
            }
            // config.from = "txcps"
            console.log(config.from);

            var data = {
                install: is_new,
                scene: scene
            };
            self.log($c[140], data);

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
            console.log($c[141]);
            var self = this;
            callbacks[$c[142]] = typeof callback == $c[143] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[$c[144]]) {
                            console.log($c[145]);
                            self.do_login(); //已授权
                        } else {
                            console.log($c[146]);
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
                                type: $c[147],
                                text: $c[148],
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: $c[149],
                                    color: $c[150],
                                    textAlign: $c[151],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(res => {
                                console.log(res);
                                B_BCD({ title: $c[152] });
                                if (res.errMsg == $c[153]) {
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
                        console.log($c[154]);
                        self.do_login();
                    }
                });
            } else {
                console.log($c[155] + config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log($c[156] + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求

                        var public_data = self.getPublicData();
                        public_data[$c[157]] = 1;
                        public_data[$c[158]] = res.code;
                        public_data[$c[159]] = info ? info.nick_name : '';
                        public_data[$c[160]] = info ? info.head_img : '';

                        if (B_JIH && typeof B_JIH == $c[161]) {
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
                                    public_data[$c[162]] = encryptedData;
                                    public_data[$c[163]] = iv;
                                    public_data[$c[164]] = signature;
                                    wx.request({
                                        url: $c[165] + HOST + $c[166],
                                        method: $c[167],
                                        dataType: $c[168],
                                        header: {
                                            'content-type': $c[169] // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log($c[170]);
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
                                                        is_client: data.data.is_client || $c[171],
                                                        ios_pay: data.data.ios_pay || $c[172]

                                                    };
                                                    try {
                                                        wx.setStorageSync($c[173], data.data.sdk_token);
                                                        wx.setStorageSync($c[174], data.data.user_id);
                                                        wx.setStorageSync($c[175], data.data.username);
                                                        if (data.data.ext) {
                                                            wx.setStorageSync($c[176], data.data.ext);
                                                        }
                                                    } catch (e) {}

                                                    callbacks[$c[177]] && callbacks[$c[178]](0, userData);
                                                } else {
                                                    callbacks[$c[179]] && callbacks[$c[180]](1, { errMsg: data.msg });
                                                }

                                                //登录成功，加载右上角分享数据
                                                self.getShareInfo($c[181], function (data) {
                                                    console.log($c[182]);
                                                    wx.onShareAppMessage(function () {
                                                        //记录开始分享
                                                        self.logStartShare($c[183]);
                                                        return {
                                                            title: data.title,
                                                            imageUrl: data.img,
                                                            query: data.query
                                                        };
                                                    });
                                                });
                                            } else {
                                                callbacks[$c[184]] && callbacks[$c[185]](1, { errMsg: $c[186] });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks[$c[187]] && callbacks[$c[188]](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks[$c[189]] && callbacks[$c[190]](1, { errMsg: res6.errMsg });
                                }
                            });
                        } else {
                            wx.request({
                                url: $c[191] + HOST + $c[192],
                                method: $c[193],
                                dataType: $c[194],
                                header: {
                                    'content-type': $c[195] // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log($c[196]);
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
                                                is_client: data.data.is_client || $c[197],
                                                ios_pay: data.data.ios_pay || $c[198]

                                            };
                                            try {
                                                wx.setStorageSync($c[199], data.data.sdk_token);
                                                wx.setStorageSync($c[200], data.data.user_id);
                                                wx.setStorageSync($c[201], data.data.username);
                                                if (data.data.ext) {
                                                    wx.setStorageSync($c[202], data.data.ext);
                                                }
                                            } catch (e) {}

                                            callbacks[$c[203]] && callbacks[$c[204]](0, userData);
                                        } else {
                                            callbacks[$c[205]] && callbacks[$c[206]](1, { errMsg: data.msg });
                                        }

                                        //登录成功，加载右上角分享数据
                                        self.getShareInfo($c[207], function (data) {
                                            console.log($c[208]);
                                            wx.onShareAppMessage(function () {
                                                //记录开始分享
                                                self.logStartShare($c[209]);
                                                return {
                                                    title: data.title,
                                                    imageUrl: data.img,
                                                    query: data.query
                                                };
                                            });
                                        });
                                    } else {
                                        callbacks[$c[210]] && callbacks[$c[211]](1, { errMsg: $c[212] });
                                    }
                                }
                            });
                        }
                    } else {
                        callbacks[$c[213]] && callbacks[$c[214]](1, { errMsg: res.errMsg });
                    }
                },
                fail: function (res) {
                    console.log($c[215] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf($c[216]) > -1 || res.errMsg.indexOf($c[217]) > -1) {
                        // 处理用户拒绝授权的情况
                        callbacks[$c[218]] && callbacks[$c[219]](1, { errMsg: res.errMsg });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[$c[220]] = typeof callback == $c[221] ? callback : null;
            var type = data.type || $c[222];
            console.log($c[223] + type);
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
            var sdk_token = wx.getStorageSync($c[224]);
            wx.request({
                url: $c[225] + HOST + $c[226],
                method: $c[227],
                dataType: $c[228],
                header: {
                    'content-type': $c[229] // 默认值
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
            console.log($c[230]);
            var sdk_token = wx.getStorageSync($c[231]);
            wx.request({
                url: $c[232] + HOST + $c[233],
                method: $c[234],
                dataType: $c[235],
                header: {
                    'content-type': $c[236] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log($c[237]);
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
            console.log($c[238]);
            var sdk_token = wx.getStorageSync($c[239]);
            wx.request({
                url: $c[240] + HOST + $c[241],
                method: $c[242],
                dataType: $c[243],
                header: {
                    'content-type': $c[244] // 默认值
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
                    console.log($c[245]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[$c[246]] && callbacks[$c[247]](1, { errMsg: $c[248] + data.msg });
                        }
                    } else {
                        callbacks[$c[249]] && callbacks[$c[250]](1, { errMsg: $c[251] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log($c[252]);
            var sdk_token = wx.getStorageSync($c[253]);
            wx.request({
                url: $c[254] + HOST + $c[255],
                method: $c[256],
                dataType: $c[257],
                header: {
                    'content-type': $c[258] // 默认值
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
                    console.log($c[259]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log($c[260]);
            var sdk_token = wx.getStorageSync($c[261]);
            wx.request({
                url: $c[262] + HOST + $c[263],
                method: $c[264],
                dataType: $c[265],
                header: {
                    'content-type': $c[266] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log($c[267]);
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
                    console.log($c[268]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log($c[269]);
            console.log(data);

            var self = this;
            callbacks[$c[270]] = typeof callback == $c[271] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync($c[272]);
            var session_key = wx.getStorageSync($c[273]);
            if (!sdk_token || !session_key) {
                callbacks[$c[274]] && callbacks[$c[275]](1, { errMsg: $c[276] });
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
            public_data[$c[277]] = JSON.stringify(order_data);
            public_data[$c[278]] = 1;

            //发起网络请求
            wx.request({
                url: $c[279] + HOST + $c[280],
                method: $c[281],
                dataType: $c[282],
                header: {
                    'content-type': $c[283] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log($c[284]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //小程序
                            if (typeof wx.requestPayment == $c[285]) {
                                // if(data.data.platform == 'android'){
                                if (sysInfo.platform == $c[286] || sysInfo.platform == $c[287]) {
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
                                            title: $c[288],
                                            content: $c[289],
                                            confirmText: $c[290],
                                            showCancel: false
                                        });
                                    }
                                }
                            } else {
                                self.minPay(data.data);
                            }
                        } else {
                            callbacks[$c[291]] && callbacks[$c[292]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[$c[293]] && callbacks[$c[294]](1, { errMsg: $c[295] });
                    }
                }
            });
        },
        xiaoPay: function (data) {
            var self = this;
            wx.navigateToMiniProgram({
                appId: config.min_app_id,
                path: $c[296] + data.orderId + $c[297] + data.money,
                extraData: {},
                envVersion: $c[298],
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
                    if (res.errMsg == $c[299]) {
                        var ret = {
                            cpOrderNo: self.order_data.cpbill,
                            orderNo: data.orderId,
                            amount: self.order_data.price,
                            extension: self.order_data.extension
                        };
                        callbacks[$c[300]] && callbacks[$c[301]](0, ret);
                    }
                },
                fail: function (res) {
                    if (res.errMsg == $c[302]) {
                        callbacks[$c[303]] && callbacks[$c[304]](2, { errMsg: $c[305] });
                    } else {
                        callbacks[$c[306]] && callbacks[$c[307]](1, { errMsg: $c[308] + res.err_desc });
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
                console.log($c[309]);
                wx.showModal({
                    title: $c[310],
                    content: $c[311] + data.balance + $c[312] + data.buyQuantity + $c[313],
                    showCancel: false,
                    confirmText: $c[314],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log($c[315]);
                wx.requestMidasPayment({
                    mode: $c[316],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == $c[317]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if (res.errMsg.indexOf($c[318]) !== -1) {
                            callbacks[$c[319]] && callbacks[$c[320]](2, { errMsg: $c[321] });
                        } else {
                            callbacks[$c[322]] && callbacks[$c[323]](1, { errMsg: $c[324] + res.errMsg });
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
                title: $c[325],
                content: $c[326],
                showCancel: false,
                confirmText: $c[327],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: $c[328],
                        sendMessageImg: $c[329]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log($c[330]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync($c[331]);
            wx.request({
                url: $c[332] + HOST + $c[333] + config.partner_id + $c[334] + config.game_pkg + $c[335],
                method: $c[336],
                dataType: $c[337],
                header: {
                    'content-type': $c[338] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log($c[339]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[$c[340]] && callbacks[$c[341]](0, ret);
                        } else {
                            callbacks[$c[342]] && callbacks[$c[343]](1, { errMsg: $c[344] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync($c[345]);
            var username = wx.getStorageSync($c[346]);

            var postData = {};
            postData[$c[347]] = uid;
            postData[$c[348]] = username;
            postData[$c[349]] = data.roleid;
            postData[$c[350]] = data.rolelevel;
            postData[$c[351]] = data.rolename;
            postData[$c[352]] = data.serverid;

            if (data.roleid && data.serverid) {
                B_JHI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log($c[353], postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync($c[354]);
            var username = wx.getStorageSync($c[355]);

            var postData = {};
            postData[$c[356]] = uid;
            postData[$c[357]] = username;
            postData[$c[358]] = data.roleid;
            postData[$c[359]] = data.rolelevel;
            postData[$c[360]] = data.rolename;
            postData[$c[361]] = data.serverid;

            if (data.roleid && data.serverid) {
                B_JHI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log($c[362], postData);

            //进入游戏确认邀请成功
            if (B_JIH) {
                this.updateShare(B_JIH.invite, B_JIH.invite_type, B_JIH.is_new, data.roleid, data.serverid, B_JIH.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync($c[363]);
            var username = wx.getStorageSync($c[364]);

            var postData = {};
            postData[$c[365]] = uid;
            postData[$c[366]] = username;
            postData[$c[367]] = data.roleid;
            postData[$c[368]] = data.rolelevel;
            postData[$c[369]] = data.rolename;
            postData[$c[370]] = data.serverid;

            if (data.roleid && data.serverid) {
                B_JHI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log($c[371], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = $c[372].split('');
            var uuid = [],
                i;
            radix = radix || chars.length;

            if (len) {
                for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
            } else {
                var r;

                uuid[8] = uuid[13] = uuid[18] = uuid[23] = $c[373];
                uuid[14] = $c[374];

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
            var uuid = wx.getStorageSync($c[375]);
            var idfv = wx.getStorageSync($c[376]);
            var ad_code = wx.getStorageSync($c[377]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: $c[378],
                net_type: system.wifiSignal == 0 ? $c[379] : $c[380],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == $c[381] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log($c[382] + type);
            console.log(public_data);

            wx.request({
                url: $c[383] + HOST + $c[384] + type + $c[385] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + $c[386] + date.getMonth() + $c[387] + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log($c[388] + tmplIds);
            //获取模板ID
            callbacks[$c[389]] = typeof callback == $c[390] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log($c[391]);
                    console.log(res);
                    callbacks[$c[392]] && callbacks[$c[393]](res);
                },
                fail(res) {
                    console.log($c[394]);
                    console.log(res);
                    callbacks[$c[395]] && callbacks[$c[396]](res);
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
    run($c[397], data, callback);
};
exports.login = function (callback) {
    run($c[398], '', callback);
};
exports.pay = function (data, callback) {
    run($c[399], data, callback);
};
exports.B_EFD = function () {
    run($c[400]);
};
exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run($c[401], data);
};
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run($c[402], data);
};
exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run($c[403], data);
};
exports.share = function (type) {
    var data = {
        type: type
    };
    run($c[404], data);
};
exports.msgCheck = function (data, callback) {
    run($c[405], data, callback);
};
exports.downloadClient = function () {
    run($c[406]);
};
exports.subscribeMessage = function (data, callback) {
    run($c[407], data, callback);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run($c[408]);
};
exports.weiduanHelper = function () {
    run($c[409]);
};