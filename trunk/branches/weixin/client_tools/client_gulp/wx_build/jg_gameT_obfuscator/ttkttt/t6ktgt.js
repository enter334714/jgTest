var M = wx.$T;
import Dall from './ttsstt';
var config = {
    game_id: M[1639], //苍月之戒小程序-HC--官方-天枢服
    game_pkg: M[1640],
    partner_id: '19',
    game_ver: M[1641], //T包为19.x.x，每次上传版本修改，先设置，上传审核版本的时候保持一致
    is_auth: false, //授权登录
    from: null, //来源
    tmpId: { 1: M[1642], 2: M[1643], 3: M[1644] }, // 订阅的类型 和 模板id
    min_app_id: ''
};
window.config = config;

var t_FZK6M = t_FK6ZM();
var HOST = M[1645];
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
            console.log(M[1646]);
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
            console.log(M[1647]);
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
            console.log(M[1648] + config.from);

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(M[1649], data);

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
            console.log(M[1650]);
            var self = this;
            callbacks[M[252]] = typeof callback == M[889] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[M[1651]]) {
                            console.log(M[1652]);
                            self.do_login(); //已授权
                        } else {
                            console.log(M[1653]);
                            wx.hideLoading({});
                            var system_info = wx.getSystemInfoSync();
                            var screen_width = system_info.screenWidth;
                            var screen_height = system_info.screenHeight;
                            var btn_width = screen_width * 2 / 3;
                            var btn_height = btn_width / 3;
                            var btn_left = (screen_width - btn_width) / 2;
                            var btn_top = screen_height / 2;
                            var button = wx.createUserInfoButton({
                                type: M[351],
                                text: M[1654],
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: M[1655],
                                    color: M[522],
                                    textAlign: M[470],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(res => {
                                console.log(res);
                                t_MZ6K({ title: M[1656] });
                                if (res.errMsg == M[1657]) {
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
                        console.log(M[1658]);
                        self.do_login();
                    }
                });
            } else {
                console.log(M[1659] + config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log(M[1660] + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求
                        var public_data = self.getPublicData();
                        public_data[M[1661]] = 1;
                        public_data[M[1662]] = res.code;
                        public_data[M[1663]] = info ? info.nick_name : '';
                        public_data[M[1664]] = info ? info.head_img : '';

                        if (t_FKMZ6 && typeof t_FKMZ6 == M[788]) {
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
                                    public_data[M[1665]] = encryptedData;
                                    public_data['iv'] = iv;
                                    public_data[M[1666]] = signature;
                                    wx.request({
                                        url: M[1667] + HOST + M[1668],
                                        method: M[218],
                                        dataType: M[1134],
                                        header: {
                                            'content-type': M[362] // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log(M[1669]);
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

                                                    callbacks[M[252]] && callbacks[M[252]](0, userData);
                                                } else {
                                                    callbacks[M[252]] && callbacks[M[252]](1, { errMsg: data.msg });
                                                }

                                                //登录成功，加载右上角分享数据
                                                self.getShareInfo(M[1670], function (data) {
                                                    console.log(M[1671]);
                                                    wx.onShareAppMessage(function () {
                                                        //记录开始分享
                                                        self.logStartShare(M[1670]);
                                                        return {
                                                            title: data.title,
                                                            imageUrl: data.img,
                                                            query: data.query
                                                        };
                                                    });
                                                });
                                            } else {
                                                callbacks[M[252]] && callbacks[M[252]](1, { errMsg: M[1672] });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks[M[252]] && callbacks[M[252]](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks[M[252]] && callbacks[M[252]](1, { errMsg: res6.errMsg });
                                }
                            });
                        } else {
                            var lastTime = Date.now();
                            wx.request({
                                url: M[1667] + HOST + M[1668],
                                method: M[218],
                                dataType: M[1134],
                                header: {
                                    'content-type': M[362] // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log(M[1669]);
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

                                            callbacks[M[252]] && callbacks[M[252]](0, userData);
                                        } else {
                                            callbacks[M[252]] && callbacks[M[252]](1, { type: M[1673], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                                        }

                                        //登录成功，加载右上角分享数据
                                        self.getShareInfo(M[1670], function (data) {
                                            console.log(M[1671]);
                                            wx.onShareAppMessage(function () {
                                                //记录开始分享
                                                self.logStartShare(M[1670]);
                                                return {
                                                    title: data.title,
                                                    imageUrl: data.img,
                                                    query: data.query
                                                };
                                            });
                                        });
                                    } else {
                                        callbacks[M[252]] && callbacks[M[252]](1, { type: M[1673], errMsg: M[1672], time: Date.now() - lastTime, res: res });
                                    }
                                },
                                fail: function (res) {
                                    console.log(M[1674]);
                                    console.log(res);
                                    self.log(M[581], { event: M[1675] });
                                    requestCallback = true;
                                    if (loginHandler) clearTimeout(loginHandler);
                                    loginHandler = null;
                                    callbacks[M[252]] && callbacks[M[252]](1, { type: M[1676], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                                }
                            });
                            if (!requestCallback) {
                                var timeOutFunc = function () {
                                    console.log(M[1677]);
                                    self.log(M[581], { event: M[1678] });
                                    callbacks[M[252]] && callbacks[M[252]](1, { type: M[1679], errMsg: M[1680], time: Date.now() - lastTime });
                                    callbacks[M[252]] = null; //回调后置空，以免success或fail里重复回调
                                };
                                loginHandler = setTimeout(timeOutFunc, 20000);
                            }
                        }
                    } else {
                        callbacks[M[252]] && callbacks[M[252]](1, { type: M[1681], errMsg: res.errMsg, res: res });
                    }
                },
                fail: function (res) {
                    console.log(M[1682] + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf(M[1683]) > -1 || res.errMsg.indexOf(M[1684]) > -1) {
                        // 处理用户拒绝授权的情况
                        callbacks[M[252]] && callbacks[M[252]](1, { type: M[1685], errMsg: res.errMsg, res: res });
                    } else {
                        callbacks[M[252]] && callbacks[M[252]](1, { type: M[1685], errMsg: res.errMsg, res: res });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[M[322]] = typeof callback == M[889] ? callback : null;
            var type = data.type || M[322];
            console.log(M[1686] + type);
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
                url: M[1667] + HOST + M[1687],
                method: M[218],
                dataType: M[1134],
                header: {
                    'content-type': M[362] // 默认值
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
            console.log(M[1688]);
            callbacks[M[1689]] = typeof callback == M[889] ? callback : null;
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: M[1667] + HOST + M[1690],
                method: M[218],
                dataType: M[1134],
                header: {
                    'content-type': M[362] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(M[1691]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        config.min_app_id = data.data.min_app_id;
                        if (data.state) {
                            callbacks[M[1689]] && callbacks[M[1689]](data.data);
                        } else {
                            callbacks[M[1689]] && callbacks[M[1689]]({ develop: 0 });
                        }
                    } else {
                        callbacks[M[1689]] && callbacks[M[1689]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(M[1692]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[M[1689]] && callbacks[M[1689]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(M[1693]);
                    callbacks[M[1689]] && callbacks[M[1689]]({ develop: 0 });
                    callbacks[M[1689]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(M[1694]);
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: M[1667] + HOST + M[1695],
                method: M[218],
                dataType: M[1134],
                header: {
                    'content-type': M[362] // 默认值
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
                    console.log(M[1696]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[M[322]] && callbacks[M[322]](1, { errMsg: M[1697] + data.msg });
                        }
                    } else {
                        callbacks[M[322]] && callbacks[M[322]](1, { errMsg: M[1698] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(M[1699]);
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: M[1667] + HOST + M[1700],
                method: M[218],
                dataType: M[1134],
                header: {
                    'content-type': M[362] // 默认值
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
                    console.log(M[1701]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(M[1702]);
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: M[1667] + HOST + M[1703],
                method: M[218],
                dataType: M[1134],
                header: {
                    'content-type': M[362] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log(M[1704]);
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
                    console.log(M[1705]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(M[1706]);
            console.log(data);

            var self = this;
            callbacks[M[309]] = typeof callback == M[889] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            var session_key = wx.getStorageSync('plat_session_key');
            if (!sdk_token || !session_key) {
                callbacks[M[309]] && callbacks[M[309]](1, { errMsg: M[1707] });
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
            public_data[M[1708]] = JSON.stringify(order_data);
            public_data[M[1661]] = 1;

            //发起网络请求
            wx.request({
                url: M[1667] + HOST + M[1709],
                method: M[218],
                dataType: M[1134],
                header: {
                    'content-type': M[362] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(M[1710]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //小程序
                            if (typeof wx.requestPayment == M[784]) {
                                // if(data.data.platform == 'android'){
                                if (sysInfo.platform == M[110] || sysInfo.platform == M[113]) {
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
                                            title: M[1711],
                                            content: M[1712],
                                            confirmText: M[1713],
                                            showCancel: false
                                        });
                                    }
                                }
                            } else {
                                self.minPay(data.data);
                            }
                        } else {
                            callbacks[M[309]] && callbacks[M[309]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[M[252]] && callbacks[M[252]](1, { errMsg: M[1672] });
                    }
                }
            });
        },
        xiaoPay: function (data) {
            var self = this;
            wx.navigateToMiniProgram({
                appId: config.min_app_id,
                path: M[1714] + data.orderId + M[1715] + data.money,
                extraData: {},
                envVersion: M[1716],
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
                    if (res.errMsg == M[1717]) {
                        var ret = {
                            cpOrderNo: self.order_data.cpbill,
                            orderNo: data.orderId,
                            amount: self.order_data.price,
                            extension: self.order_data.extension
                        };
                        callbacks[M[309]] && callbacks[M[309]](0, ret);
                    }
                },
                fail: function (res) {
                    if (res.errMsg == M[1718]) {
                        callbacks[M[309]] && callbacks[M[309]](2, { errMsg: M[1719] });
                    } else {
                        callbacks[M[309]] && callbacks[M[309]](1, { errMsg: M[1720] + res.err_desc });
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
                console.log(M[1721]);
                wx.showModal({
                    title: M[1711],
                    content: M[1722] + data.balance + M[1723] + data.buyQuantity + M[1724],
                    showCancel: false,
                    confirmText: M[1713],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log(M[1725]);
                wx.requestMidasPayment({
                    mode: M[1726],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == M[1727]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if (res.errMsg.indexOf(M[1728]) !== -1) {
                            callbacks[M[309]] && callbacks[M[309]](2, { errMsg: M[1719] });
                        } else {
                            callbacks[M[309]] && callbacks[M[309]](1, { errMsg: M[1720] + res.errMsg });
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
                title: M[1711],
                content: M[1729],
                showCancel: false,
                confirmText: M[1713],
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: M[1730],
                        sendMessageImg: M[1731]
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log(M[1732]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync('plat_session_key');
            wx.request({
                url: M[1667] + HOST + M[1733] + config.partner_id + '/' + config.game_pkg + '/',
                method: M[218],
                dataType: M[1134],
                header: {
                    'content-type': M[362] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log(M[1734]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[M[309]] && callbacks[M[309]](0, ret);
                        } else {
                            callbacks[M[309]] && callbacks[M[309]](1, { errMsg: M[1735] });
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
            postData[M[1736]] = uid;
            postData[M[1737]] = username;
            postData[M[1738]] = data.roleid;
            postData[M[1739]] = data.rolelevel;
            postData[M[1740]] = data.rolename;
            postData[M[23]] = data.serverid;

            if (data.roleid && data.serverid) {
                t_FKM6Z = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(M[432], postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');

            var postData = {};
            postData[M[1736]] = uid;
            postData[M[1737]] = username;
            postData[M[1738]] = data.roleid;
            postData[M[1739]] = data.rolelevel;
            postData[M[1740]] = data.rolename;
            postData[M[23]] = data.serverid;

            if (data.roleid && data.serverid) {
                t_FKM6Z = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(M[1741], postData);

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
            postData[M[1736]] = uid;
            postData[M[1737]] = username;
            postData[M[1738]] = data.roleid;
            postData[M[1739]] = data.rolelevel;
            postData[M[1740]] = data.rolename;
            postData[M[23]] = data.serverid;

            if (data.roleid && data.serverid) {
                t_FKM6Z = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(M[1742], postData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = M[1743].split('');
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
                mac: M[1744],
                net_type: system.wifiSignal == 0 ? '4G' : M[1745],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == M[110] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(M[1746] + type);
            console.log(public_data);

            wx.request({
                url: M[1667] + HOST + M[1747] + type + M[1748] + encodeURIComponent(JSON.stringify(public_data)),
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
            console.log(M[1749] + tmplIds);
            //获取模板ID
            callbacks[M[331]] = typeof callback == M[889] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(M[1750]);
                    console.log(res);
                    callbacks[M[331]] && callbacks[M[331]](res);
                },
                fail(res) {
                    console.log(M[1751]);
                    console.log(res);
                    callbacks[M[331]] && callbacks[M[331]](res);
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
    run(M[231], data, callback);
};
exports.login = function (callback) {
    run(M[252], '', callback);
};
exports.pay = function (data, callback) {
    run(M[309], data, callback);
};
exports.openService = function () {
    run(M[323]);
};
exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(M[317], data);
};
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(M[319], data);
};
exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(M[321], data);
};
exports.share = function (type) {
    var data = {
        type: type
    };
    run(M[322], data);
};
exports.msgCheck = function (data, callback) {
    run(M[196], data, callback);
};
exports.downloadClient = function () {
    run(M[1752]);
};
exports.subscribeMessage = function (data, callback) {
    run(M[331], data, callback);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run(M[1753]);
};
exports.weiduanHelper = function () {
    run(M[325]);
};