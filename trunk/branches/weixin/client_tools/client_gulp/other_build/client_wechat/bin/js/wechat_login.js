"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var config = {
    game_id: '2',
    game_pkg: 'lmfbs1_mhdlxyx_M',
    partner_id: '4',
    is_auth: false,
    from: null
};
window.config = config;
var PARTNER_SDK = mainSDK();
var HOST = 'https://sdk.api.l2i.cc';
var user_game_info = null;
var this_order_id = null;
var game_ver = '';
function mainSDK() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var obj = this;
            game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log("new[SDK]CP调用init接口", ops);
            var uuid = wx.getStorageSync('plat_uuid');
            var is_new;
            if (!uuid) {
                uuid = obj.uuid(16, 32);
                wx.setStorageSync('plat_uuid', uuid);
                is_new = 1;
            }
            else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync('plat_idfv');
            if (!idfv) {
                idfv = obj.uuid(16, 32);
                wx.setStorageSync('plat_idfv', idfv);
            }
            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log("[SDK]小游戏启动参数", info);
            console.log("[SDK]小游戏is_new", is_new);
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync('plat_ad_code', info.query.ad_code);
            }
            var queryStr = JSON.stringify(info.query);
            if (is_new && queryStr != '{}') {
                wx.setStorageSync('plat_wx_query', JSON.stringify(info.query));
            }
            if (info.query && info.query.from && info.query.from != "") {
                if (is_new)
                    wx.setStorageSync('plat_from', info.query.from);
                config.from = info.query.from;
            }
            else {
                var from = wx.getStorageSync('plat_from');
                if (!from && from != "")
                    config.from = from;
            }
            var data = {
                install: is_new,
                scene: scene
            };
            obj.log('start', data);
            wx.showShareMenu();
            if (game_ver) {
                obj.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },
        login: function (callback) {
            console.log("new[SDK]调起登录");
            var self = this;
            callbacks['login'] = typeof callback == 'function' ? callback : null;
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting['scope.userInfo']) {
                            console.log("[SDK]获得授权设置：已授权");
                            self.do_login();
                        }
                        else {
                            console.log("[SDK]获得授权设置：未授权");
                            wx.hideLoading({});
                            var system_info = wx.getSystemInfoSync();
                            var screen_width = system_info.screenWidth;
                            var screen_height = system_info.screenHeight;
                            var btn_width = screen_width * 2 / 3;
                            var btn_height = btn_width / 3;
                            var btn_left = (screen_width - btn_width) / 2;
                            var btn_top = screen_height / 2;
                            var button = wx.createUserInfoButton({
                                type: 'text',
                                text: '授权登录游戏',
                                withCredentials: false,
                                style: {
                                    top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
                                    left: system_info.windowWidth / 2 - 100,
                                    width: 200,
                                    height: 40,
                                    lineHeight: 40,
                                    backgroundColor: '#07c160',
                                    color: '#ffffff',
                                    textAlign: 'center',
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            button.show();
                            button.onTap(function (res) {
                                console.log(res);
                                wxShowLoading({ title: '正在登录游戏' });
                                if (res.errMsg == 'getUserInfo:ok') {
                                    self.do_login({
                                        head_img: res.userInfo.avatarUrl || '',
                                        nick_name: res.userInfo.nickName || '',
                                    });
                                }
                                else {
                                    self.do_login();
                                }
                                button.destroy();
                            });
                        }
                    },
                    fail: function () {
                        console.log("[SDK]获得授权设置：失败");
                        self.do_login();
                    }
                });
            }
            else {
                console.log("[SDK]授权登录" + config.is_auth);
                self.do_login();
            }
        },
        do_login: function (info) {
            var self = this;
            wx.login({
                success: function (res) {
                    console.log("微信登录成功返回" + JSON.stringify(res));
                    if (res.code) {
                        var public_data = self.getPublicData();
                        public_data['mo'] = 1;
                        public_data['code'] = res.code;
                        public_data['nick_name'] = info ? info.nick_name : '';
                        public_data['head_img'] = info ? info.head_img : '';
                        if (config.is_auth) {
                            wx.getUserInfo({
                                success: function (res6) {
                                    var encryptedData = res6.encryptedData;
                                    var iv = res6.iv;
                                    var signature = res6.signature;
                                    public_data['encryptedData'] = encryptedData;
                                    public_data['iv'] = iv;
                                    public_data['signature'] = signature;
                                    wx.request({
                                        url: HOST + '/partner/auth',
                                        method: 'POST',
                                        dataType: 'json',
                                        header: {
                                            'content-type': 'application/x-www-form-urlencoded'
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log("new[SDK]登录结果：");
                                            console.log(res);
                                            if (res.statusCode == 200) {
                                                var data = res.data;
                                                if (data.state) {
                                                    var userData = {
                                                        userid: data.data.user_id,
                                                        account: data.data.nick_name,
                                                        token: data.data.token,
                                                    };
                                                    try {
                                                        wx.setStorageSync('plat_sdk_token', data.data.sdk_token);
                                                        wx.setStorageSync('plat_uid', data.data.user_id);
                                                        wx.setStorageSync('plat_username', data.data.username);
                                                        wx.setStorageSync('wx_openid', data.data.openid);
                                                        var ad_code = wx.getStorageSync('plat_ad_code');
                                                        if (!ad_code && data.data.ad_code != "") {
                                                            wx.setStorageSync('plat_ad_code', data.data.ad_code);
                                                        }
                                                        if (data.data.ext) {
                                                            wx.setStorageSync('plat_session_key', data.data.ext);
                                                        }
                                                    }
                                                    catch (e) {
                                                    }
                                                    callbacks['login'] && callbacks['login'](0, userData);
                                                }
                                                else {
                                                    callbacks['login'] && callbacks['login'](1, { errMsg: data.msg });
                                                }
                                            }
                                            else {
                                                callbacks['login'] && callbacks['login'](1, { errMsg: '请求平台服务器失败！#1' });
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks['login'] && callbacks['login'](1, { errMsg: res.errMsg });
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks['login'] && callbacks['login'](1, { errMsg: res6.errMsg });
                                }
                            });
                        }
                        else {
                            wx.request({
                                url: HOST + '/partner/auth',
                                method: 'POST',
                                dataType: 'json',
                                header: {
                                    'content-type': 'application/x-www-form-urlencoded'
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log("new[SDK]登录结果：");
                                    console.log(res);
                                    if (res.statusCode == 200) {
                                        var data = res.data;
                                        if (data.state) {
                                            var userData = {
                                                userid: data.data.user_id,
                                                account: data.data.nick_name,
                                                token: data.data.token,
                                            };
                                            try {
                                                wx.setStorageSync('plat_sdk_token', data.data.sdk_token);
                                                wx.setStorageSync('plat_uid', data.data.user_id);
                                                wx.setStorageSync('plat_username', data.data.username);
                                                wx.setStorageSync('wx_openid', data.data.openid);
                                                var ad_code = wx.getStorageSync('plat_ad_code');
                                                if (!ad_code && data.data.ad_code != "") {
                                                    wx.setStorageSync('plat_ad_code', data.data.ad_code);
                                                }
                                                if (data.data.ext) {
                                                    wx.setStorageSync('plat_session_key', data.data.ext);
                                                }
                                            }
                                            catch (e) {
                                            }
                                            callbacks['login'] && callbacks['login'](0, userData);
                                        }
                                        else {
                                            callbacks['login'] && callbacks['login'](1, { errMsg: data.msg });
                                        }
                                    }
                                    else {
                                        callbacks['login'] && callbacks['login'](1, { errMsg: '请求平台服务器失败！#2' });
                                    }
                                }
                            });
                        }
                    }
                    else {
                        callbacks['login'] && callbacks['login'](1, { errMsg: res.errMsg });
                    }
                },
                fail: function (res) {
                    console.log("微信登录失败" + JSON.stringify(res));
                    if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1) {
                        callbacks['login'] && callbacks['login'](1, { errMsg: res.errMsg });
                    }
                }
            });
        },
        checkGameVersion: function (game_ver, callback) {
            console.log("[SDK]检查游戏版本");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: HOST + '/game/min/?ac=checkGameVersion',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log("[SDK]获取游戏版本结果");
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        }
                        else {
                            callback && callback({ develop: 0 });
                        }
                    }
                    else {
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
                    console.log("[SDK]session过期需要重新登录");
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },
        startPay: function (data, callback) {
            console.log("[SDK]调起支付，CP传值：");
            console.log(data);
            var self = this;
            callbacks['pay'] = typeof callback == 'function' ? callback : null;
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            var session_key = wx.getStorageSync('plat_session_key');
            if (!sdk_token || !session_key) {
                callbacks['pay'] && callbacks['pay'](1, { errMsg: "用户未登录，支付失败！" });
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
                platform: sysInfo.platform,
            };
            self.order_data = order_data;
            var public_data = self.getPublicData();
            public_data['order_data'] = JSON.stringify(order_data);
            wx.request({
                url: HOST + '/partner/order',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: public_data,
                success: function (res) {
                    console.log("[SDK]完成创建订单");
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            if (typeof wx.requestPayment == 'undefined') {
                                if (sysInfo.platform == 'android' || sysInfo.platform == 'windows' || sysInfo.platform == 'devtools') {
                                    if (data.data.is_android_pay) {
                                        self.kfPay(data.data);
                                    }
                                    else {
                                        self.gamePay(data.data);
                                    }
                                }
                                else {
                                    if (data.data.is_ios_pay) {
                                        if (data.data.ios_pay_type == 1) {
                                            self.kfPay(data.data);
                                        }
                                    }
                                    else {
                                        wx.showModal({
                                            title: "支付提示",
                                            content: '很抱歉，由于苹果政策，暂时不能支付，安卓手机不受影响',
                                            confirmText: "我知道了",
                                            showCancel: false
                                        });
                                    }
                                }
                            }
                            else {
                                self.minPay(data.data);
                            }
                        }
                        else {
                            callbacks['pay'] && callbacks['pay'](1, { errMsg: data.msg });
                        }
                    }
                    else {
                        callbacks['login'] && callbacks['login'](1, { errMsg: '请求平台服务器失败！#3' });
                    }
                }
            });
        },
        gamePay: function (data) {
            var self = this;
            if (data.buyQuantity <= data.balance) {
                console.log("[SDK]游戏币充值直接扣除");
                wx.showModal({
                    title: "支付提示",
                    content: "您还有" + data.balance + "个游戏币未消费，本次支付将扣除" + data.buyQuantity + '游戏币',
                    showCancel: false,
                    confirmText: "我知道了",
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            }
            else {
                console.log("[SDK]调起米大师支付");
                console.log(data);
                wx.requestMidasPayment({
                    mode: 'game',
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == 'requestMidasPayment:ok') {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if (res.errMsg.indexOf('用户取消') !== -1) {
                            callbacks['pay'] && callbacks['pay'](2, { errMsg: "用户取消支付" });
                        }
                        else {
                            callbacks['pay'] && callbacks['pay'](1, { errMsg: "支付失败:" + res.errMsg + '(' + res.errCode + ')' });
                        }
                    },
                    complete: function (res) {
                    }
                });
            }
        },
        kfPay: function (data) {
            var self = this;
            this_order_id = data.orderId;
            wx.showModal({
                title: "支付提示",
                content: '进入客服会话，点击右下角小卡片或输入"cz"或"充值"获取支付链接',
                showCancel: false,
                confirmText: "我知道了",
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: "不用点这个卡片",
                        sendMessageImg: "https://static.357pk.net/uploads/2109/weixin_pay_img1.png"
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },
        gameGoPay: function (data, retry) {
            console.log("[SDK]米大师支付完毕，通知服务器发货");
            var self = this;
            var session_key = wx.getStorageSync('plat_session_key');
            wx.request({
                url: HOST + '/partner/pay/' + config.partner_id + '/' + config.game_pkg + '/',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key,
                },
                success: function (res) {
                    console.log("[SDK]米大师支付结果");
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks['pay'] && callbacks['pay'](0, ret);
                        }
                        else {
                            callbacks['pay'] && callbacks['pay'](1, { errMsg: "支付失败" });
                        }
                    }
                },
                fail: function () {
                }
            });
        },
        logCreateRole: function (data) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');
            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;
            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                };
            }
            this.log('create', postData);
        },
        logEnterGame: function (data) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');
            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;
            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                };
            }
            this.log('enter', postData);
        },
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');
            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;
            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                };
            }
            this.log('levelup', postData);
        },
        uuid: function (radix, len) {
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            var uuid = [], i;
            radix = radix || chars.length;
            if (len) {
                for (i = 0; i < len; i++)
                    uuid[i] = chars[0 | Math.random() * radix];
            }
            else {
                var r;
                uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                uuid[14] = '4';
                for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                        r = 0 | Math.random() * 16;
                        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                    }
                }
            }
            return uuid.join('');
        },
        getPublicData: function () {
            var system = wx.getSystemInfoSync();
            var uuid = wx.getStorageSync('plat_uuid');
            var idfv = wx.getStorageSync('plat_idfv');
            var ad_code = wx.getStorageSync('plat_ad_code');
            var wx_openid = wx.getStorageSync('wx_openid');
            var wx_query = wx.getStorageSync('plat_wx_query');
            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: '0000',
                net_type: system.wifiSignal == 0 ? '4G' : 'WIFI',
                os_ver: system.system,
                sdk_ver: system.version,
                game_ver: game_ver,
                device: system.platform == 'android' ? 1 : 2,
                is_from_min: 1,
                wx_openid: wx_openid,
                wx_query: wx_query
            };
        },
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }
            console.log("[SDK]上报数据：" + type);
            console.log(public_data);
            wx.request({
                url: HOST + '/partner/h5Log/?type=' + type + '&data=' + encodeURIComponent(JSON.stringify(public_data))
            });
        },
        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },
        downloadClient: function () {
            var openid = wx.getStorageSync('wx_openid');
            var msg = "微端-不用点这个卡片-" + openid;
            wx.showModal({
                title: "微端下载提示",
                content: '进入客服会话，点击右下角小卡片获取微端下载链接',
                showCancel: false,
                confirmText: "我知道了",
                success: function () {
                    var obj = {
                        showMessageCard: true,
                        sendMessageTitle: msg,
                        sendMessageImg: "https://static.357pk.net/uploads/2109/weixin_download_img2.jpg"
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });
        },
        checkMsg: function (msg, callback) {
            console.log("[SDK]查看文本是否有违规内容");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: HOST + '/game/min/?ac=msgCheck',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: msg
                },
                success: function (res) {
                    console.log("[SDK]查看文本是否有违规内容结果返回:");
                    callback && callback(res.data.code == 0 ? 1 : 0, res.data.msg);
                }
            });
        },
        checkMsgV2: function (msg, callback) {
            console.log("[SDK]查看文本是否有违规内容");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: HOST + '/game/min/?ac=msgCheckV2',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: msg,
                    scene: 1,
                },
                success: function (res) {
                    console.log("[SDK]查看文本是否有违规内容结果返回:");
                    callback && callback(res.data.code == 0 ? 1 : 0, res.data.msg);
                }
            });
        },
        sendMessage: function (template_id, data, callback) {
            console.log("[SDK]发送订阅消息");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: HOST + '/game/min/?ac=sendMessage',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    template_id: template_id,
                    data: data,
                },
                success: function (res) {
                    console.log("[SDK]订阅消息发送成功");
                    callback && callback(res.data.code == 0 ? 1 : 0, res.data.msg);
                }
            });
        },
        videoAdvert: function (advert_type, callback) {
            wx.request({
                url: HOST + '/?method=user.gameConfig',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                },
                success: function (res) {
                    var weixin_advert_id = res.data.data.weixin_advert_id;
                    var videoAdv = null;
                    var return_data = {};
                    if (wx.createRewardedVideoAd) {
                        videoAdv = wx.createRewardedVideoAd({
                            adUnitId: weixin_advert_id
                        });
                        videoAdv.show().catch(function () {
                            console.log('激励视频 广告显示成功');
                            var status = 'adShow';
                            videoAdv.load()
                                .then(function () { return videoAdv.show(); })
                                .catch(function (err) {
                                var status = 'adFail';
                                console.log('激励视频 广告显示失败');
                            });
                            return_data = {
                                advert_type: advert_type,
                                status: status,
                            },
                                callback && callback(return_data);
                        });
                        videoAdv.onError(function (err) {
                            console.log(err);
                        });
                        try {
                            if (videoAdv.closeHandler) {
                                videoAdv.offClose(videoAdv.closeHandler);
                                console.log("videoAdv.offClose卸载成功");
                            }
                        }
                        catch (e) {
                            console.log("videoAdv.offClose 卸载失败");
                            console.error(e);
                        }
                        videoAdv.closeHandler = function (res) {
                            if (!videoAdv)
                                return;
                            videoAdv.offClose();
                            if (res && res.isEnded || res === undefined) {
                                console.log('正常播放结束，需要下发奖励');
                                var status = 'adReWord';
                                return_data = {
                                    advert_type: advert_type,
                                    status: status,
                                },
                                    callback && callback(return_data);
                            }
                            else {
                                console.log('播放退出，不下发奖励');
                                var status = 'adClose';
                                return_data = {
                                    advert_type: advert_type,
                                    status: status,
                                },
                                    callback && callback(return_data);
                            }
                        };
                        videoAdv.onClose(videoAdv.closeHandler);
                    }
                }
            });
        },
        getGameConfig: function (callback) {
            console.log("[SDK]获取游戏配置");
            wx.request({
                url: HOST + '/?method=user.gameConfig',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                },
                success: function (res) {
                    var data = res.data.data;
                    console.log("[SDK]获取游戏配置成功");
                    console.log(res.data);
                    var return_data = {};
                    return_data = {
                        pay_switch: data.pay_switch,
                        game_ver: data.game_ver,
                    },
                        callback && callback(return_data);
                }
            });
        },
        getUserZhuanduanInfo: function (callback) {
            console.log("[SDK]获取用户转端信息");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: HOST + '/?method=user.getUserZhuanduanInfo',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: {
                    game_id: config.game_id,
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                },
                success: function (res) {
                    var data = res.data.data;
                    console.log("[SDK]获取用户转端信息成功");
                    var return_data = {};
                    return_data = {
                        download_url: data.download_url,
                        password: data.password,
                        service_qq: data.service_qq,
                        username: data.username,
                        is_show: data.is_show,
                    },
                        callback && callback(return_data);
                }
            });
        },
        openService: function () {
            wx.openCustomerServiceConversation();
        },
    };
}
function run(method, data, callback) {
    (method in PARTNER_SDK) && PARTNER_SDK[method](data, callback);
}
exports.init = function (data, callback) {
    run('init', data, callback);
};
exports.login = function (callback) {
    run('login', '', callback);
};
exports.pay = function (data, callback) {
    run('pay', data, callback);
};
exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
    };
    run('logCreateRole', data);
};
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
    };
    run('logEnterGame', data);
};
exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
    };
    run('logRoleUpLevel', data);
};
exports.downloadClient = function () {
    run('downloadClient');
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run('getPublicData');
};
exports.checkMsg = function (data, callback) {
    run('checkMsg', data, callback);
};
exports.checkMsgV2 = function (data, callback) {
    run('checkMsgV2', data, callback);
};
exports.sendMessage = function (template_id, data, callback) {
    run('sendMessage', template_id, data, callback);
};
exports.videoAdvert = function (advert_type, callback) {
    run('videoAdvert', advert_type, callback);
};
exports.getGameConfig = function (callback) {
    run('getGameConfig', callback);
};
exports.getUserZhuanduanInfo = function (callback) {
    run('getUserZhuanduanInfo', callback);
};
exports.openService = function () {
    run('openService');
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) ||
        function (d, b) {
            for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p];
        };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
window.NONAGE_TEXT = "1\u3001\u672C\u6E38\u620F\u662F\u4E00\u6B3E\u4F11\u95F2\u653E\u7F6E\u7684\u4ED9\u4FA0\u6E38\u620F\uFF0C\u9002\u7528\u4E8E\u5E74\u6EE116\u5468\u5C81\u53CA\u4EE5\u4E0A\u7684\u7528\u6237\uFF0C\u5EFA\u8BAE\u672A\u6210\u5E74\u4EBA\u5728\u5BB6\u957F\u7684\u76D1\u62A4\u4E0B\u4F7F\u7528\u8BE5\u6E38\u620F\u4EA7\u54C1\u3002\n<br/><br/>2\u3001\u672C\u6E38\u620F\u57FA\u4E8E\u4FA0\u5BA2\u4FEE\u4ED9\u6545\u4E8B\u4E3A\u80CC\u666F\uFF0C\u4EBA\u7269\u548C\u573A\u666F\u4E30\u5BCC\u591A\u6837\uFF0C\u753B\u9762\u98CE\u683C\u9753\u4E3D\uFF0C\u6709\u7EDA\u4E3D\u7684\u7279\u6548\u6765\u70D8\u6258\u6E38\u620F\u6C1B\u56F4\uFF1B\u6E38\u620F\u4E3B\u8981\u73A9\u6CD5\u4E3A\u4F11\u95F2\u653E\u7F6E\u5173\u673A\uFF0C\n\u4E5F\u9700\u8981\u73A9\u5BB6\u53C2\u4E0E\u591A\u4EBA\u5BF9\u6297\uFF0C\u73A9\u6CD5\u5177\u6709\u4E00\u5B9A\u7684\u7B56\u6027\u4E0E\u8DA3\u5473\u6027\uFF1A\u6E38\u620F\u4E2D\u6709\u57FA\u4E8E\u73A9\u5BB6\u4E0E\u964C\u751F\u4EBA\u804A\u5929\u7684\u793E\u4EA4\u7CFB\u7EDF\uFF0C\u793E\u4EA4\u7CFB\u7EDF\u7684\u7BA1\u7406\u9075\u5FAA\u76F8\u5173\u6CD5\u5F8B\u6CD5\u89C4\u3002\n<br/><br/>3\u3001\u672C\u6E38\u620F\u4E2D\u6709\u7528\u6237\u5B9E\u540D\u8BA4\u8BC1\u7CFB\u7EDF\uFF0C\u8BA4\u8BC1\u4E3A\u672A\u6210\u5E74\u4EBA\u7684\u7528\u6237\u5C06\u63A5\u53D7\u4EE5\u4E0B\u7BA1\u7406\uFF1A\u6E38\u620F\u4E2D\u90E8\u5206\u73A9\u6CD5\u548C\u9053\u5177\u9700\u8981\u4ED8\u8D39\u3002\u672A\u6EE18\u5468\u5C81\u7684\u7528\u6237\u4E0D\u80FD\u4ED8\u8D39\uFF1B\n8\u5468\u5C81\u4EE5\u4E0A\u672A\u6EE116\u5468\u5C81\u7684\u672A\u6210\u5E74\u4EBA\u7528\u6237\uFF0C\u5355\u6B21\u5145\u503C\u91D1\u989D\u4E0D\u5F97\u8D85\u8FC750\u5143\u4EBA\u6C11\u5E01\uFF0C\u6BCF\u6708\u5145\u503C\u91D1\u989D\u7D2F\u8BA1\u4E0D\u5F97\u8D85\u8FC7200\u5143\uFF1B\u4EBA\u6C11\u5E0116\u5468\u5C81\u4EE5\u4E0A\u7684\u672A\u6210\u5E74\u4EBA\u7528\u6237\uFF0C\n\u5355\u6B21\u5145\u503C\u91D1\u989D\u4E0D\u5F97\u8D85\u8FC7100\u5143\u4EBA\u6C11\u5E01\uFF0C\u6BCF\u6708\u5145\u503C\u91D1\u989D\u7D2F\u8BA1\u4E0D\u5F97\u8D85\u8FC7400\u5143\u4EBA\u6C11\u5E01\u3002\u672A\u6210\u5E74\u4EBA\u7528\u6237\uFF0C\u4EC5\u53EF\u5728\u5468\u4E94\u3001\u5468\u516D\u3001\u5468\u65E5\u6216\u6CD5\u5B9A\u8282\u5047\u65E520:00~21:00\u671F\u95F4\u53EF\u4EE5\u767B\u5F55\u6E38\u620F\uFF0C\u65F6\u95F4\u6BB5\u5916\u4E0D\u5141\u8BB8\u767B\u5F55\n<br/><br/>4\u3001\u672C\u6E38\u620F\u4EE5\u7384\u5E7B\u4FEE\u4ED9\u4E3A\u4E3B\u9898\uFF0C\u5728\u591A\u4EBA\u534F\u4F5C\u7684\u7ADE\u6280\u6709\u52A9\u4E8E\u953B\u70BC\u73A9\u5BB6\u7684\u72EC\u7ACB\u601D\u8003\u80FD\u529B\u3001\u7A7A\u95F4\u611F\u77E5\u80FD\u529B\u548C\u903B\u8F91\u601D\u7EF4\u80FD\u529B\uFF1B\u9177\u70AB\u7684\u89D2\u8272\u6280\u80FD\u4E0E\u7279\u6548\uFF0C\n\u5C06\u5E26\u7ED9\u7528\u6237\u826F\u597D\u7684\u89C6\u89C9\u4EAB\u53D7\u4E0E\u6E38\u620F\u4EE3\u5165\u611F\uFF1B\u57FA\u4E8E\u56E2\u961F\u7ADE\u6280\u7684\u534F\u4F5C\u73A9\u6CD5\u53EF\u4EE5\u63D0\u5347\u73A9\u5BB6\u7684\u6C9F\u901A\u80FD\u529B\u3001\u56E2\u961F\u534F\u4F5C\u80FD\u529B\u548C\u5927\u5C40\u89C2\uFF0C\u9F13\u52B1\u73A9\u5BB6\u4E92\u5E2E\u4E92\u52A9\u3001\n\u7EF4\u6301\u826F\u597D\u7684\u793E\u7FA4\u5173\u7CFB\u3002";
window.IS_WECHAT = true;
window.userData = null;
window.MainRun = null;
window.MainResourcePool = null;
window.name = "";
window.loadView = null;
window.QCSDK = PARTNER_SDK;
window.MainResetStage = null;
window.MainCode = null;
window.loadScript = function () {
};
ask_pay = function (roleId, roleName, roleLevel, roleCareer, productId, price) {
    QCSDK.pay(payInfo, callback);
};
player_create = function (roleId, roleName, roleLevel) {
    QCSDK.logCreateRole(userData.selected_server.server_id, userData.selected_server.name, roleId, roleName, roleLevel);
};
player_login = function (roleId, roleName, roleLevel) {
    QCSDK.logEnterGame(userData.selected_server.server_id, userData.selected_server.name, roleId, roleName, roleLevel);
};
player_level_up = function (roleId, roleName, roleLevel) {
    QCSDK.logRoleUpLevel(userData.selected_server.server_id, userData.selected_server.name, roleId, roleName, roleLevel);
};
record_step = function (step, roleId) {
    var serverTmpId = 0;
    var str;
    if (userData.newregister === 1) {
        serverTmpId = userData.selected_server.server_id;
    }
    if (step > 3) {
        serverTmpId = userData.selected_server.server_id;
    }
    str = base64_encode("game/node/" + userData.channel + "/" + serverTmpId + "/" + userData.package + "/" + step + "/" + userData.account + "/" + userData.sign + "/" + roleId + "/" + userData.mac);
    var hppt = new Laya.HttpRequest();
    hppt.send(WeChatUI.Config.backstage_url + str, null, "get");
    hppt.once(Laya.Event.COMPLETE, this, function (data) {
    });
};
req_server_list = function () {
};
showProgressInterface = function (curIndex, maxCount, value, str) {
    console.log("8888", str);
    if (window.loadView) {
        if (window.loadView.arr.indexOf(str) == -1) {
            window.loadView.arr.push(str);
            window.loadView.upProgress(str);
        }
    }
};
setLoadingState = function (state) {
    window.loadView.visible = state;
    MainResetStage();
};
updateTotalProgress = function (time) {
    if (time == -2 && window.loadView) {
        window.loadView.destroy();
    }
};
reqRecordError = function (error) {
};
player_share = function (roleId, callBack) {
    QCSDK.share(type);
};
player_realname = function (callBack) {
};
player_follow = function (roleId, callBack) {
};
player_bindphone = function (callBack) {
};
firstEnterGameScene = function () {
};
openLogin = function () {
    Laya.loader.load("res/atlas/login.atlas", Laya.Handler.create(null, function () {
        var login = new WeChatUI.Login();
        Laya.stage.addChild(login);
    }));
};
window.base64_encode = function (str) {
    var c1, c2, c3;
    var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var i = 0, len = str.length, strin = '';
    while (i < len) {
        c1 = str.charCodeAt(i++) & 0xff;
        if (i == len) {
            strin += base64EncodeChars.charAt(c1 >> 2);
            strin += base64EncodeChars.charAt((c1 & 0x3) << 4);
            strin += "==";
            break;
        }
        c2 = str.charCodeAt(i++);
        if (i == len) {
            strin += base64EncodeChars.charAt(c1 >> 2);
            strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
            strin += base64EncodeChars.charAt((c2 & 0xF) << 2);
            strin += "=";
            break;
        }
        c3 = str.charCodeAt(i++);
        strin += base64EncodeChars.charAt(c1 >> 2);
        strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
        strin += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
        strin += base64EncodeChars.charAt(c3 & 0x3F);
    }
    return strin;
};
window.nameGenerator = {
    familyNames: ["赵", "蒋", "孔", "柏", "鲁", "酆", "滕", "皮", "和", "米", "熊", "席", "梅", "樊", "经", "郁", "程", "甄", "井", "车", "宁", "景", "印", "卓", "闻", "冉", "边", "柴", "向", "都", "欧", "晁", "曾", "查", "万俟", "澹台", "", "钟离", "寸", "翠", "富察", "税", "泰", "求", "旁", "禾", "冒", "悟", "苟", "佼", "旷", "叔", "焉", "肇", "徭", "郯", "锁", "磨", "同", "卷", "斯", "户", "寒", "揭", "弥", "塔", "腾", "濯", "驹", "鲜", "门", "载", "修", "五", "丘", "让", "零", "励", "原", "竹",
        "南宫", "后", "百里", "壤驷", "鲜于", "公良", "钱", "沈", "曹", "水", "韦", "鲍", "殷", "卞", "穆", "贝", "纪", "季", "盛", "胡", "房", "单", "嵇", "段", "侯", "仇", "詹", "宿", "蔺", "莘", "宰", "扈", "瞿", "古", "耿", "勾", "毋", "司马", "公冶", "宇文", "贰", "狂", "费莫", "荤", "秘", "羽", "崇", "保", "宏", "随", "玄", "遇", "圣", "戏", "资", "蛮", "邗", "钟", "完", "闭", "少", "祈", "阿", "琦", "潮", "沐", "骑", "粟", "盈", "声", "信", "令", "义", "尧", "谌", "粘", "考", "百", "赏", "况", "钦", "乐正", "锺离", "孙",
        "韩", "严", "窦", "昌", "史", "齐", "萧", "明", "舒", "麻", "林", "凌", "裘", "杭", "邢", "家", "富", "宓", "栾", "束", "白", "屠", "党", "郦", "燕", "阎", "易", "满", "沃", "敖", "沙", "荆", "上官", "宗政", "长孙", "皇", "辟", "蹇", "靖", "亥", "用", "栋", "功", "类", "乘", "偶", "御", "可", "合", "汗", "邛", "机", "瓮", "止", "谬", "丹", "才", "析", "素", "闪", "镜", "茂", "貊", "栗", "庆", "漫", "闽", "将", "礼", "依", "招", "萨", "妫", "福", "伯", "亢", "鄢", "漆雕", "盖", "开", "李", "杨", "华",
        "章", "马", "唐", "毕", "康", "尹", "臧", "屈", "强", "刁", "霍", "缪", "洪", "滑", "封", "巫", "蓬", "暴", "龙", "怀", "蒙", "翟", "雍", "冀", "充", "慎", "弘", "利", "融", "乜", "红", "欧阳", "濮阳", "慕容", "侨", "典", "称", "绪", "绍", "占", "告", "委", "抄", "庚", "卯", "裔", "前", "夫", "智", "仍", "孛", "剑", "盘", "弭", "戢", "蹉", "表", "无", "桥", "赤", "长", "始", "似", "英", "虎", "豆", "喜", "犁", "北", "旗", "慈", "犹", "续", "邝", "纳", "言", "佴", "缑", "汝", "公西", "逯", "光", "周", "朱", "金", "云", "苗",
        "费", "郝", "伍", "姚", "计", "项", "贾", "锺", "虞", "包", "裴", "芮", "乌", "全", "甘", "叶", "蒲", "池", "谭", "却", "僪", "慕", "戈", "匡", "蔚", "冷", "养", "游", "夏侯", "淳于", "司徒", "彤", "良", "诺", "愈", "以", "真", "休", "钊", "定", "务", "俟", "延", "由", "仆", "尔", "九", "乾", "虢", "铎", "刀", "睢", "赧", "聊", "书", "板", "紫", "僧", "星", "澄", "兰", "肥", "帛", "及", "力", "守", "军", "孝", "介", "达", "覃", "泉", "第五", "佘", "帅", "法", "巫马", "库", "频", "化", "敏", "友", "植", "咎", "镇", "凭",
        "衷", "帖", "隋", "斛", "疏", "冼", "浮", "源", "学", "斐", "青", "隐", "南", "潭", "檀", "鹿", "官", "普", "贸", "坚", "行", "理", "承", "忻", "辜", "老", "佟", "牟", "微生", "闫", "端木", "郏", "瑞", "郑", "尤", "陶", "潘", "花", "岑", "安", "元", "湛", "成", "董", "娄", "邱", "支", "应", "左", "荣", "储", "巴", "班", "历", "司", "从", "阳", "劳", "桑", "尚", "茹", "庾", "文", "夔", "辛", "须", "权", "闻人", "太叔", "召", "端", "芒", "多", "牢", "森", "翦", "谏", "嬴", "莱", "捷", "答", "环", "塞", "藩",
        "悉", "哀", "罕", "蒿", "玉", "牵", "种", "顿", "姓", "愚", "独", "柔", "仙", "天", "謇", "藤", "雀", "布", "建", "勤", "勇", "奉", "伦", "市", "六", "初", "清", "爱", "商", "羊舌", "楚", "逢", "眭", "王", "许", "姜", "葛", "方", "薛", "常", "卜", "汪", "戴", "梁", "危", "骆", "柯", "宗", "石", "翁", "靳", "弓", "仰", "戎", "韶", "鄂", "逄", "桂", "农", "习", "终", "寇", "隆", "阚", "丰", "逮", "东方", "申屠", "有", "赫", "苦", "繁", "买", "斋", "闾", "锐", "呼", "校", "拱", "乙", "矫", "敛", "邸", "进", "刑", "洛", "茆",
        "线", "浑", "涂", "说", "吾", "本", "千", "刚", "隽", "接", "纵", "枝", "野", "衣", "营", "革", "汉", "敬", "卿", "所", "鄞", "楼", "德", "年", "西门", "海", "晋", "子车", "阴", "泥", "冯", "何", "戚", "奚", "俞", "雷", "乐", "顾", "祁", "谈", "杜", "江", "高", "昝", "丁", "崔", "荀", "汲", "牧", "秋", "祖", "郜", "索", "胥", "姬", "濮", "温", "宦", "暨", "广", "师", "那", "巢", "盍", "赫连", "公孙", "舜", "实", "其", "戊", "但", "释", "漆", "皋", "大", "么", "兆", "允", "赛", "受", "府", "笃", "俎", "淦",
        "菅", "针", "恽", "肖", "次", "寻", "性", "诗", "奇", "宇", "波", "渠", "检", "禽", "藏", "巨", "改", "练", "恭", "问", "苑", "战", "城", "卑", "笪", "东门", "归", "谷梁", "督", "薄", "运", "陈", "吕", "谢", "范", "任", "贺", "于", "孟", "毛", "宋", "阮", "童", "夏", "管", "宣", "吉", "羊", "邴", "隗", "仲", "武", "黎", "咸", "能", "申", "牛", "别", "艾", "居", "禄", "巩", "简", "关", "益", "皇甫", "仲孙", "甫", "京", "朴", "巧", "奕", "贵", "闳", "威", "抗", "丑", "甲", "昔", "泷", "掌", "厚", "仵", "洋", "苌", "箕", "势", "己", "错",
        "展", "雪", "嘉", "拜", "祭", "碧", "奈", "生", "飞", "宝", "望", "兴", "尉", "仪", "永", "杞", "迟", "区", "过", "谯", "左丘", "呼延", "宰父", "仉", "厉", "摩", "褚", "施", "邹", "彭", "袁", "倪", "时", "平", "禹", "茅", "蓝", "颜", "蔡", "卢", "贲", "钮", "於", "糜", "山", "伊", "符", "蓟", "籍", "苍", "扶", "寿", "庄", "鱼", "衡", "阙", "厍", "饶", "蒯", "桓", "尉迟", "令狐", "丛", "集", "中", "回", "枚", "姒", "代", "在", "昂", "祢", "丙", "留", "侍", "袭", "首", "仁", "圭", "邶", "树", "庹", "世",
        "泣", "念", "出", "霜", "扬", "佛", "酒", "速", "风", "折", "节", "钞", "希", "亓", "士", "母", "辉", "剧", "候", "局", "麦", "哈", "梁丘", "南门", "夹谷", "司寇", "稽", "伟", "卫", "张", "喻", "郎", "柳", "汤", "傅", "狄", "庞", "闵", "郭", "田", "莫", "邓", "龚", "惠", "松", "谷", "宫", "刘", "溥", "赖", "双", "堵", "通", "晏", "容", "步", "东", "聂", "空", "相", "公", "公羊", "轩辕", "岳", "象", "夕", "毓", "撒", "朋", "贯", "歧", "律", "綦", "畅", "尾", "度", "衅", "员", "业", "夷", "郸", "桐", "绳", "仝", "潜", "夙", "不",
        "烟", "善", "陀", "淡", "禚", "春", "登", "宜", "银", "道", "睦", "旅", "堂", "位", "第", "宛", "台", "曲", "墨", "琴", "东郭", "拓跋", "亓官", "闾丘", "铁"],
    symbols: ["℡", "°", "i", "◤", "♛", "じ", "▃", "╋", "ㄨ", "﹏", "☆", "╮", "╰", "う", "━", "卐", "※", "∝", "★", "≡ ", "╩", "╓", "╗", "╚", "◥", "¤", "№", "§", "∮", "√", "◆", "▔", "◢", "◣", "、", "·", "≡", "╝", "╔", "╬", "═", "┠", "┨", "┯", "┷", "┏", "┓", "┗", "┛", "┳", "⊥", "『", "↑", "↓", "→", "←", "↘", "↙", "♀", "♂", "┇", "┅", "∵", "∴", "‖", "︱", "︳", "囧", "⊙", "●", "○", "⊕", "◎", "Θ"],
    commonPrefix: ["囚心", "路人", "北眼", "心刺", "曾将", "够钟", "灼热", "闭关", "荒年", "放生", "凉薄", "放弃", "逆光", "疲惫", "指忘", "拥有", "像你", "悬崖", "裸钻", "顾忌", "毁梦", "念你", "鈊疼", "神经", "隐藏", "暖伴", "揪心", "猫九", "兲蛋", "溺毙", "陌忘", "刺痛", "溺爱", "柠檬", "奢望", "怨我", "断爱", "浅亡", "梦你", "矫情", "落墨", "沉世", "静谧", "忆白", "奢求", "归处", "七眠", "怪癖", "怀抱", "北海", "归人", "浪屿", "倔强", "旧城", "微酒", "搁浅", "淡别", "淡网", "苦酒", "酒客", "刺青", "闷热", "强挽", "浪咖", "平庸", "寄曲", "耳熟", "半醉", "绺欢", "闹巷", "远思", "厌烦", "荒途", "带刺", "心稳", "落潮", "逞笑", "孤友", "秋暮", "固执", "难挨", "伪善", "配角", "热水", "迎夏", "梦魇", "懦弱", "爱惜", "北觅", "东寻", "戒躁", "消逝", "过客", "无畏", "长安", "征途", "心抑", "现实", "拒丧", "魇九", "另类", "旧故", "难处", "深腻", "寒潮", "听孤", "薄荷", "幼稚", "清晓", "风尘", "诉说", "舌味", "自赎", "亵渎", "辞取", "纵行", "凉墨", "善变", "哑巴", "贪生", "砒霜", "寡言", "忘羡", "偏执", "败类", "任性", "大牌", "识趣", "无憾", "取悦", "沉醉", "普通", "皆叹", "惦念", "微笑", "夜声", "若久", "強荵", "爱笑", "放手", "邂逅", "玩家", "九夜", "芈妖", "血煞", "良辰", "君赋", "抬举", "闲云", "念旧", "清明", "河图", "玩具", "悲凉", "孤者", "柠凉", "卷鬓", "热吻", "笑脸", "散落", "厌世", "贪世", "世俗", "倒带", "叛逆", "脆弱", "孤身", "孤刺", "禁锢", "深碍", "遣心", "丑态", "游魂", "情丝", "依赖", "空城", "浪潮", "转角", "独瘾", "皱眉", "囚鸟", "烫嘴", "断点", "衬心", "妄念", "夏末", "猫弦", "情伤", "救赎", "失意", "傀儡", "痞爺", "啊呸", "默念", "孤傲", "孤城", "葬訫", "孤岛", "墨凉", "陌路", "彼岸", "初遇", "余醉", "深巷", "青稚", "情殇", "纪年", "嫑脸", "顾念", "墨残", "凉城", "墨染", "浅夏", "藍調", "孤痞", "孤寡", "孤心", "怣梦", "余欢", "錯過", "残忆", "失語", "槿城", "殇泪", "呆橘", "腻歪", "死撑", "凉心", "陌殇", "葬爱", "北暖", "倾寒", "青冢", "暮雨", "绝戀", "蔸蔸", "累勒", "菰犭虫", "无心", "墨痕", "木兮", "陌然", "浅歌"],
    manPrefix: ["难酬", "孤檠", "乞讨", "狗带", "杀青", "热欲", "对手", "抽离", "贪新", "蜜酒", "体味", "爱囚", "无碍", "荣光", "利刃", "认怂", "刃白", "拂扇", "侠骨", "烟海", "话梗", "对味", "命硬", "烟徒", "犊子", "乞丐", "驼背", "魔王", "绅士", "狂神", "单杀", "孽徒", "逆战", "亡屍", "雅痞"],
    manSuffix: ["玮桦", "嘉明", "禹锡", "智涛", "磊贯", "嘉恩", "启儒", "帆松", "荣衡", "锡杭", "成炫", "颖禹", "鹏儒", "亮尧", "清瑄", "烽狄", "衡龙", "梁羲", "经崴", "思彬", "帆少", "善颖", "少靖", "兆威", "仲盛", "道道", "谦瀚", "金树", "旭伟", "鹏航", "杭喜", "锡河", "以飞", "秋海", "广振", "衡民", "正滨", "钧清", "宸靖", "腾镇", "绍龙", "朗杭", "景坤", "宏刚", "泽广", "兆澄", "衡林", "隽盛", "卫杰", "海升", "廷宇", "金喜", "熙雷", "健栋", "道宸", "恒元", "品中", "俊宗", "权敬", "炫奕", "敬辰", "喜飞",
        "以枫", "城麟", "君伊", "朗玮", "雷子", "隆克", "荣敬", "建钢", "林瀚", "诚敬", "威春", "基键", "威成", "旭国", "嘉彬", "衡渝", "彪弘", "锋友", "杰渝", "树鸿", "震谦", "宏平", "岳才", "宏新", "羲若", "思泰", "群祥", "仁建", "以儒", "滨禹", "钢顺", "桂畅", "然峰", "锦楚", "昌皓", "汉群", "斌春", "麟广", "逸振", "雨军", "良杭", "仁格", "利坤", "杰禹", "田熙", "宥峰", "炎峰", "信俊", "威尧", "希峻", "然阳", "光阳", "廷颂", "晨宸", "楠宸", "学绍", "言青", "金琛", "迅贤", "迅鑫",
        "熙钧", "汉正", "若佳", "勤城", "锦杭", "泽毅", "信贯", "浩勇", "君威", "尧力", "铭勇", "骏旭", "信炎", "靖仲", "宸尧", "绍霆", "彪森", "光锡", "敬诚", "经羲", "廷劲", "翰生", "腾岩", "兴信", "青烽", "健裕", "辰畅", "以曦", "弘广", "若敬", "森亦", "汉寒", "大新", "学思", "鹏立", "迅坤", "锌宁", "宸宸", "毅旭", "翔翔", "润炎", "钧桂", "宏百", "骏成", "泽恒", "承德", "颖新", "森伊", "仁雷", "梁朋", "超昌", "晏铭", "楚朗", "炎然", "霏琛", "雷善", "雷君", "梁臣", "榕茂", "畅心", "畅慧", "学浚", "威绍", "武翔",
        "聪升", "健锦", "蓝江", "汉利", "澄田", "奕明", "森建", "凯炎", "司弘", "国宁", "颂春", "俊畅", "伦翔", "元曦", "克顺", "蓝宇", "炎敬", "品聪", "楠泽", "祥朝", "汉瑄", "弘彪", "楠颂", "青纶", "庆辉", "山绍", "君建", "安云", "智宇", "峰启", "浩宏", "才聪", "朋元", "楠朋", "彪勤", "嘉家", "侨蓝", "颂楠", "恩伟", "才亮", "田锌", "力杉", "颂希", "锋振", "茂河", "曦健", "言皓", "承树", "楚嘉", "泰刚", "林浩", "群彪", "同松", "祖贤", "雷威", "升恒", "天慧", "成健", "骏颖", "达秋",
        "洋奕", "秦腾", "钧源", "成鸣", "龙才", "慧恒", "敬顺", "逸纯", "骏奕", "金栋", "良品", "平嘉", "生锦", "中哲", "俊阳", "畅亚", "澄驰", "哲江", "京鑫", "劲才", "鹏栋", "虹聪", "广权", "宥帆", "利翰", "帆恩", "臣彬", "彪成", "波烽", "烽经", "飞绍", "品杰", "彪天", "霆伟", "喜曦", "利恒", "子大", "飞翔", "宏经", "庆以", "超春", "旭亦", "坚云", "博森", "岳世", "山启", "道田", "学梁", "光国", "权西", "伟京", "鸿松", "启旭", "维权", "青康", "皇基", "利大", "兆皇", "伦朗", "纯彬", "言学", "兆刚", "民贤", "家基", "豪斌", "狄杰", "豪盛", "慧皓", "志渝", "臣信", "冠翰", "少劲", "庆烽", "若然", "瀚锋", "浩林", "梁经", "宇骏", "隽喜", "宏炎", "金宗", "经子", "敬学", "润郴", "瀚辰", "廷嘉", "卫源", "润文", "光基", "伦茂", "田栋", "家成", "中经", "彬平", "良鹏", "霖永", "树仁", "颂杜", "浩锌", "汉秦", "杉曦", "百山", "恩生", "德泽", "聪峰", "剑楚", "正寒", "树华", "剑劲", "仁岳", "虹劲", "思世", "卫恩", "思绍", "绍杉", "然凌", "昌君", "雨广", "玮隽", "澄蓝", "桂阳", "翔风", "树朋", "云谦",
        "逸俊", "靖蓝", "鸣以", "克钢", "思钧", "曦树", "熙彬", "茂云", "希维", "寒东", "亮澄", "百谦", "博颖", "豪星", "宇聪", "纯康", "磊崴", "仁青", "鸣广", "星颂", "朗卓", "谦坚", "信杉", "琛朋", "纯炎", "广刚", "振若", "亚尊", "汉隽", "云群", "力雷", "良伦", "锋霆", "品麟", "麟刚", "鸿伟", "茂骏", "宇嘉", "平凯", "贤森", "雷道", "尊广", "镇元", "伟麟", "海元", "帆雨", "彦健", "友隽", "卓军", "威维", "弘锌", "元钧", "震尧", "迅嘉", "涛健", "格凌", "皇祖", "齐盛", "信钧", "光隆", "昌宇", "春子", "心仁", "凯国", "品霖", "冠传", "武志", "振祥", "经智", "信若", "廷波", "以聪", "德颂", "云崴", "雷锡", "正钢", "德晏", "仲润", "绍旭", "军蓝", "霏朋", "西奕", "彦元", "宏城", "然臣", "康俊", "翰飞", "灿桂", "华泽", "钧哲", "驹乐", "秦才", "凌正", "翔聪", "祖庆", "风杉", "熙群", "凌劲", "廷成", "利义", "禹翔", "民锌", "敬锦", "力祥", "波泽", "力驹", "玮亚", "学昌", "博田", "道哲", "寒永", "仁云", "剑迅", "田廷", "勤宏", "信青", "儒秋", "子建", "佳秋", "亮鹏", "林腾", "崴成", "臣星", "杰亦",
        "世品", "超峰", "茂基", "毅信", "司羲", "凌茂", "希权", "达以", "以元", "磊宸", "泽康", "田涛", "源隆", "京友", "震洋", "东剑", "榕亚", "键渝", "磊彬", "锋威", "朗成", "波峰", "榕武", "曦宥", "青伦", "恒贯", "世才", "佑曦", "弘桂", "裕青", "郴榕", "力佳", "奕隽", "汉弘", "坤宇", "磊雨", "霏麟", "新钢", "嘉朗", "明志", "健达", "宏源", "清豪", "雷雄", "纶祥", "世元", "浩嘉", "劲宇", "格茂", "仲钧", "品诚", "梁升", "斌航", "平百", "驰伦", "品江", "勇佳", "迅刚", "泽迅", "宏中", "亮飞", "武树", "浩武", "维林", "元友", "杰楚", "权乐", "海基", "兆汉", "浩朝", "祖滨", "楠齐", "亮隽", "键大", "瑄奕", "光桂", "武刚", "春达", "梁虹", "利琛", "亦国", "宁玮", "成畅", "大军", "瑄隽", "世宸", "岳成", "铭鸣", "迅旭", "骏超", "宇云", "松狄", "庆杉", "恒郴", "波键", "家泽", "亚宏", "冠伦", "虹贤", "泽青", "基亚", "世琛", "靖天", "金东", "圣华", "博恩", "克宇", "朋安", "克威", "杰哲", "驰子", "建城", "言鸿", "麟思", "少琛", "劲海", "东勇", "润栋", "朝狄", "禹克", "秋翔", "平圣", "树琛", "逸源",
        "以纯", "强皇", "恩朝", "狄雷", "维瑄", "百德", "锋彬", "基亦", "侨基", "心秦", "驹畅", "武皇", "鸿志", "天文", "旭武", "皇斌", "寒西", "宏聪", "宇金", "刚群", "尊曦", "学宇", "奇滨", "光良", "俊康", "杰维", "西翦", "翰刚", "雄麟", "瀚钢", "奕尧", "景驹", "希金", "品强", "天鹏", "贯学", "东俊", "麟大", "凯敬", "宇阳", "晏毅", "若绍", "锦超", "阳中", "宗伊", "浚坤", "锌瑄", "明翰", "传光", "群永", "正梁", "顺冠", "嘉浩", "以桂", "飞城", "麟同", "信广", "廷西", "锡义", "喜才", "才康", "岩诚", "岩春", "田西", "佳锦", "希哲", "建琛", "纶驹", "诚磊", "鸿儒", "森钧", "光品", "奕键", "迅克", "云京", "光逸", "桦乐", "浩康", "国卫", "羲飞", "涛凌", "纶承", "宗同", "狄同", "尊斌", "翦磊", "仁盛", "承仲", "航羲", "渝翦", "麟柏", "斌生", "光钧", "志雨", "言隽", "伦凌", "裕世", "翔以", "亦君", "健豪", "羲品", "利国", "春百", "亮旭", "朝兆", "海伟", "鸣炎", "启鸣", "强铭", "帆民", "荣梁", "岳畅", "弘圣", "亚峻", "毅司", "成传", "聪尊", "家源", "天翦", "君鸣", "熙金", "信生", "晨明", "同杉",
        "承豪", "西尊", "安皓", "以恩", "朗宗", "栋驹", "谦玮", "汉新", "心镇", "朋杉", "崴武", "隆宥", "雷飞", "霏皓", "言盛", "云维", "尧祥", "大经", "斌杜", "隽凯", "勤以", "豪豪", "道键", "力以", "兴德", "伦敬", "嘉旭", "华晏", "维聪", "振纯", "剑振", "航伊", "伟山", "剑利", "源杉", "岩卫", "仲鑫", "同泽", "以达", "琛正", "广民", "浩世", "喜武", "儒瀚", "羲宇", "源杰", "俊祥", "春传", "钢泽", "杉力", "麟震", "才百", "鸿兆", "翰杜", "旭俊", "杜辉", "敬桦", "旭坤", "纯翔", "侨力", "安润", "雷经", "国宇", "顺佳", "升海", "宁秦", "文百", "涛天", "成新", "义少", "品鸣", "华瀚", "文崴", "彪雄", "坤侨", "寒河", "亚景", "维蓝", "博辰", "清仲", "若贯", "凯宸", "家达", "凯翦", "希熙", "弘儒", "汉锌", "楚启", "若林", "杭禹", "蓝弘", "彪树", "健洋", "涛翔", "腾辉", "仁森", "斌虹", "皓臣", "灿琛", "平华", "家华", "帆衡", "浚玮", "品建", "哲斌", "茂剑", "泽嘉", "奕勇", "毅迅", "学恩", "乐源", "彬伊", "恒奇", "世天", "友雨", "超启", "锦恩", "春纯", "乐桦", "镇建", "仁群", "奕志", "雄隆", "臣崴",
        "田卫", "以迅", "劲凯", "伊彬", "明杜", "朋渝", "润劲", "翦宏", "雷东", "秦寒", "楚佑", "栋泽", "佑秋", "海京", "卫力", "熙勤", "京玮", "诚泰", "正楚", "阳树", "友澄", "禹祥", "仁希", "贤百", "锋少", "岩彬", "兴腾", "心顺", "龙伊", "阳勤", "中豪", "格键", "峰智", "树中", "宇中", "伟林", "儒彦", "子伟", "铭群", "滨友", "江毅", "靖盛", "灿维", "明羲", "喜劲", "庆玮", "锋霏", "源东", "楚龙", "洋栋", "凌汉", "辉侨", "齐松", "绍海", "乐裕", "东克", "辉宸", "彬超", "泽坤", "绍云", "鹏亮", "逸鹏", "虹祖", "树林", "熙晨", "仁刚", "嘉伊", "桦钧", "皇泽", "清元", "世贤", "正霏", "嘉洋", "航宇", "哲友", "汉盛", "霖国", "杜郴", "亦迅", "华伦", "玉琛", "恩郴", "承田", "达炎", "翦瀚", "亚谦", "力翔", "超尊", "烽泽", "同劲", "健桦", "兴羲", "风裕", "滨乐", "天克", "诚卫", "宗道", "嘉志", "司品", "司狄", "贯民", "言锦", "亚同", "品钢", "启彬", "杰大", "金儒", "雷磊", "驹卫", "贯航", "源谦", "桂生", "景言", "泰畅", "凯峰", "昌嘉", "炫涛", "琛浩", "雄磊", "润迅", "伟坚", "宁浩", "瑄卫", "亮若",
        "源辰", "颂江", "威颂", "松键", "朗信", "皓司", "鸣泽", "雷洋", "奇树", "伦成", "超纶", "民震", "雨琛", "杰君", "威喜", "阳源", "畅雷", "云峻", "冠郴", "廷皇", "达晏", "然城", "刚博", "兆希", "祥勇", "协然", "生鹏", "然宸", "军鹏", "君思", "俊东", "旭道", "云渝", "朝源", "喜广", "杰雷", "岳辉", "振霆", "威朗", "源波", "松仲", "靖松", "军启", "武虹", "炎剑", "刚峰", "雄岩", "梁军", "瀚炎", "协霆", "榕华", "伊晨", "达岳", "晨咏", "友梁", "金杉", "勇斌", "亦盛", "道世", "朗朗", "冠群", "弘浩", "迅安", "敬翦", "青广", "良良", "松同", "光田", "凯彪", "辰成", "奇茂", "绍平", "亦恩", "祥宏", "中枫", "岩迅", "齐思", "霖驹", "毅翰", "金炫", "河正", "友平", "佑纯", "刚子", "栋力", "伊鸿", "渝帆", "廷彦", "家良", "铭龙", "劲宏", "杭杭", "炎辉", "森生", "岳康", "朗旭", "佳兆", "鸿俊", "谦蓝", "磊镇", "廷晨", "源蓝", "少剑", "朋梁", "道广", "贤雨", "霏锋", "靖维", "冠升", "青峻", "浩狄", "滨洋", "绍钢", "琛群", "清鑫", "泽铭", "楚颂", "梁辰", "隆滨", "靖威", "达祥", "逸靖", "山喜", "灿栋",
        "然慧", "靖翦", "峰刚", "利瑄", "剑梁", "秋皓", "伦田", "洋树", "颖曦", "勇恩", "杰昌", "树咏", "齐昌", "震昌", "伟梁", "以信", "奕旭", "贯朋", "东宇", "杭业", "纶崴", "麟佳", "霖鑫", "润诚", "景颖", "骏楚", "国尊", "鸿信", "麟森", "汉西", "瀚光", "磊豪", "辰力", "新勇", "心达", "友航", "锡彬", "金迅", "晏俊", "力青", "百品", "勇武", "顺荣", "京尊", "平霆", "恩安", "俊启", "隽元", "阳友", "平杰", "泽亚", "聪齐", "鹏君", "格衡", "业隽", "纶林", "雷乐", "盛秦", "磊烽", "滨雨", "协嘉", "力超", "霆宇", "风民", "亦东", "达佳", "秦翔", "业彦", "", "嘉明", "禹锡", "智涛", "磊贯", "嘉恩", "启儒", "帆松", "玮桦", "荣衡", "锡杭", "成炫", "颖禹", "鹏儒", "亮尧", "清瑄", "烽狄", "衡龙", "梁羲", "经崴", "思彬", "帆少", "善颖", "少靖", "兆威", "仲盛", "道道", "谦瀚", "金树", "旭伟", "鹏航", "杭喜", "锡河", "以飞", "秋海", "广振", "衡民", "正滨", "钧清", "宸靖", "腾镇", "绍龙", "朗杭", "景坤", "宏刚", "泽广", "兆澄", "衡林", "隽盛", "卫杰", "海升", "廷宇", "金喜", "熙雷", "健栋", "道宸", "恒元",
        "品中", "俊宗", "权敬", "炫奕", "敬辰", "喜飞", "以枫", "城麟", "君伊", "朗玮", "雷子", "隆克", "荣敬", "建钢", "林瀚", "诚敬", "威春", "基键", "威成", "旭国", "嘉彬", "衡渝", "彪弘", "锋友", "杰渝", "树鸿", "震谦", "宏平", "岳才", "宏新", "羲若", "思泰", "群祥", "仁建", "以儒", "滨禹", "钢顺", "桂畅", "然峰", "锦楚", "昌皓", "汉群", "斌春", "麟广", "逸振", "雨军", "良杭", "仁格", "利坤", "杰禹", "田熙", "宥峰", "炎峰", "信俊", "威尧", "希峻", "然阳", "光阳", "廷颂", "晨宸", "楠宸", "学绍", "言青", "金琛", "迅贤", "迅鑫", "熙钧", "汉正", "若佳", "勤城", "锦杭", "泽毅", "信贯", "浩勇", "君威", "尧力", "铭勇", "骏旭", "信炎", "靖仲", "宸尧", "绍霆", "彪森", "光锡", "敬诚", "经羲", "廷劲", "翰生", "腾岩", "兴信", "青烽", "健裕", "辰畅", "以曦", "弘广", "若敬", "森亦", "汉寒", "大新", "学思", "鹏立", "迅坤", "锌宁", "宸宸", "毅旭", "翔翔", "润炎", "钧桂", "宏百", "骏成", "泽恒", "承德", "颖新", "森伊", "仁雷", "梁朋", "超昌", "晏铭", "楚朗", "炎然", "霏琛", "雷善", "雷君", "梁臣",
        "榕茂", "畅心", "畅慧", "学浚", "威绍", "武翔", "聪升", "健锦", "蓝江", "汉利", "澄田", "奕明", "森建", "凯炎", "司弘", "国宁", "颂春", "俊畅", "伦翔", "元曦", "克顺", "蓝宇", "炎敬", "品聪", "楠泽", "祥朝", "伦翔", "汉瑄", "弘彪", "楠颂", "青纶", "庆辉", "山绍", "君建", "安云", "智宇", "峰启", "浩宏", "才聪", "朋元", "楠朋", "彪勤", "嘉家", "侨蓝", "颂楠", "恩伟", "才亮", "田锌", "力杉", "颂希", "锋振", "茂河", "曦健", "言皓", "承树", "楚嘉", "泰刚", "林浩", "群彪", "同松", "祖贤", "雷威", "升恒", "天慧", "成健", "骏颖", "达秋", "洋奕", "秦腾", "钧源", "成鸣", "龙才", "慧恒", "敬顺", "逸纯", "骏奕", "金栋", "良品", "平嘉", "生锦", "中哲", "俊阳", "畅亚", "澄驰", "哲江", "京鑫", "劲才", "鹏栋", "虹聪", "广权", "宥帆", "利翰", "帆恩", "臣彬", "彪成", "波烽", "烽经", "飞绍", "品杰", "彪天", "霆伟", "喜曦", "利恒", "子大", "飞翔", "宏经", "庆以", "超春", "旭亦", "坚云", "博森", "岳世", "山启", "道田", "学梁", "光国", "权西", "伟京", "鸿松", "启旭", "维权", "青康", "皇基", "利大",
        "兆皇", "伦朗", "纯彬", "言学", "兆刚", "民贤", "家基", "豪斌", "狄杰", "豪盛", "慧皓", "志渝", "臣信", "冠翰", "少劲", "庆烽", "若然", "瀚锋", "浩林", "梁经", "宇骏", "隽喜", "宏炎", "金宗", "经子", "敬学", "润郴", "瀚辰", "廷嘉", "卫源", "润文", "光基", "伦茂", "田栋", "家成", "中经", "彬平", "良鹏", "霖永", "树仁", "颂杜", "浩锌", "汉秦", "杉曦", "百山", "恩生", "德泽", "聪峰", "剑楚", "正寒", "树华", "剑劲", "仁岳", "虹劲", "思世", "卫恩", "思绍", "绍杉", "然凌", "昌君", "雨广", "玮隽", "澄蓝", "桂阳", "翔风", "树朋", "云谦", "逸俊", "靖蓝", "鸣以", "克钢", "思钧", "曦树", "熙彬", "茂云", "希维", "寒东", "亮澄", "百谦", "博颖", "豪星", "宇聪", "纯康", "磊崴", "仁青", "鸣广", "星颂", "朗卓", "谦坚", "信杉", "琛朋", "纯炎", "广刚", "振若", "亚尊", "汉隽", "云群", "力雷", "良伦", "锋霆", "品麟", "麟刚", "鸿伟", "茂骏", "宇嘉", "平凯", "贤森", "雷道", "尊广", "镇元", "伟麟", "海元", "帆雨", "彦健", "友隽", "卓军", "威维", "弘锌", "元钧", "震尧", "迅嘉", "涛健", "格凌", "皇祖",
        "齐盛", "信钧", "光隆", "昌宇", "春子", "心仁", "凯国", "品霖", "冠传", "武志", "振祥", "经智", "信若", "廷波", "以聪", "德颂", "云崴", "雷锡", "正钢", "德晏", "仲润", "绍旭", "军蓝", "霏朋", "西奕", "彦元", "宏城", "然臣", "康俊", "翰飞", "灿桂", "华泽", "钧哲", "驹乐", "秦才", "凌正", "翔聪", "祖庆", "风杉", "熙群", "凌劲", "廷成", "利义", "禹翔", "民锌", "敬锦", "力祥", "波泽", "力驹", "玮亚", "学昌", "博田", "道哲", "寒永", "仁云", "剑迅", "田廷", "勤宏", "信青", "儒秋", "子建", "佳秋", "亮鹏", "林腾", "崴成", "臣星", "杰亦", "世品", "超峰", "茂基", "毅信", "司羲", "凌茂", "希权", "达以", "以元", "磊宸", "泽康", "田涛", "源隆", "京友", "震洋", "东剑", "榕亚", "键渝", "磊彬", "锋威", "朗成", "波峰", "榕武", "曦宥", "青伦", "恒贯", "世才", "佑曦", "弘桂", "裕青", "郴榕", "力佳", "奕隽", "汉弘", "坤宇", "磊雨", "霏麟", "新钢", "嘉朗", "明志", "健达", "宏源", "清豪", "雷雄", "纶祥", "世元", "浩嘉", "劲宇", "格茂", "仲钧", "品诚", "梁升", "斌航", "平百", "驰伦", "品江", "勇佳",
        "迅刚", "泽迅", "宏中", "亮飞", "武树", "浩武", "维林", "元友", "杰楚", "权乐", "海基", "兆汉", "浩朝", "祖滨", "楠齐", "亮隽", "键大", "瑄奕", "光桂", "武刚", "春达", "梁虹", "利琛", "亦国", "宁玮", "成畅", "大军", "瑄隽", "世宸", "岳成", "铭鸣", "迅旭", "骏超", "宇云", "松狄", "庆杉", "恒郴"],
    womanPrefix: ["槿栀", "素颜", "眼眸", "薄姬", "大妞", "妤梦", "湉晨", "妩媚", "涟漪", "旖旎", "南笙", "沧颜", "凝眸", "花逝", "颜汐", "浅沫", "琉璃", "春野", "棠绾", "南音", "初柚", "倩影", "烈女", "泪眼", "莺语", "清悦", "温婉", "挽发", "诱惑", "情愫", "浊泪", "浅笑", "流苏", "晴栀", "槿城", "花葬", "夏墨", "余笙", "鎖惢", "旧梦", "喵喵", "心奴", "浅梦", "清樱", "柠栀", "冷眸", "冷颜"],
    womanSuffix: ["碧莹", "笑凌", "南汐", "希菲", "雨瑶", "蕾盈", "雪如", "桂映", "颖嘉", "颖滢", "彤月", "婷姬", "萱琪", "勤香", "舒晶", "毓碧", "向姬", "采菁", "素洁", "琼涵", "卉映", "美儿", "寒念", "雨娇", "青澜", "岚桦", "语绮", "可馨", "诗卿", "怡聪", "清雁", "飞淑", "露丹", "馨友", "佩柔", "乐凌", "雅筠", "忆梵", "锦寒", "婵寒", "雪菲", "贤海", "瑾丽", "红迎", "淑睿", "诗馨", "丽琦", "影汐", "雪馥", "宜妍", "宛素", "艺雨", "影凌", "安妍", "咏雪", "雪松", "乐蕾", "凌凡", "璐舒", "可倩", "阳香", "枫雅", "婵艺", "雯思", "艺婷", "梵友", "融阳", "苇红", "丽梦", "颖婷", "萱诗", "咏晓", "雅静", "艺华", "容惠", "雪夏", "凡南", "瑶嘉", "月蓓", "风松", "莺艺", "迎叶", "娜英", "绮萱", "芹雨", "欣华", "筠霜", "娜双", "玉馨", "欣阳", "雯茗", "安宛", "娇英", "娴安", "洁月", "熙瑶", "平雪", "菱含", "婷宇", "姬儿", "翠菡", "清烁", "婉姣", "萱梵", "菲琳", "晓颖", "萱琦", "红蕊", "菱汐", "婉小", "青滢", "代容", "佩艺", "燕静", "颖婵", "涵易", "欢思", "香荔", "月凡", "雪翠", "媚伊", "聪丝",
        "娜锦", "彩寒", "娇寒", "松舒", "香颖", "芹萱", "晓兰", "平勤", "凌媚", "爽融", "岚菲", "秀丹", "小沫", "柔婵", "蓝忆", "婷瑾", "含儿", "娇雅", "思毓", "依曼", "琳洋", "佳清", "采蕊", "玲晶", "霜含", "媚琼", "菱阳", "瑗婷", "沫寒", "蕊霜", "黛涵", "彩萱", "若舒", "夏毓", "姬美", "欢仪", "媚晴", "蕊菲", "蕊如", "夏苛", "晶璧", "丽馥", "琦凌", "美玉", "聪慧", "瑶雅", "新瑶", "怜素", "晶蓝", "雯兰", "雯雪", "涵新", "瑶菲", "莹晓", "婷菱", "咏南", "贤汐", "玉萱", "晶华", "惠清", "蓝聪", "绮容", "友欢", "莎友", "霜雅", "彤碧", "蓝澜", "馨初", "琰瑞", "凡盈", "佩丝", "文妍", "芳媚", "南蕊", "瑶盼", "瑞沛", "亦初", "冰蕊", "夏熙", "晶曼", "玉汐", "洁柔", "逸初", "芬晴", "宛菡", "菲盈", "瑾瑞", "熙玉", "妍菲", "琬晓", "贤亦", "瑾飞", "涵桂", "风秀", "风沫", "雯菱", "筠琦", "萱静", "念荷", "玉依", "琪淑", "盈玉", "梦咏", "静淑", "毓睿", "慕瑶", "羽翠", "涵菱", "嘉文", "娜琼", "咏洋", "霞碧", "华欢", "采园", "希莎", "书雨", "娇玉", "寒欣", "以乐", "代颖", "映元", "初清", "希琪", "念璧",
        "亦丹", "馨贤", "念沫", "怡婉", "馥锦", "红雪", "娇琪", "涵雁", "迎熙", "亦乐", "茗彤", "笑柳", "迎静", "玲仪", "飞涵", "聪茗", "琳慕", "舒艺", "婕姣", "风雪", "涵华", "梦雪", "园霞", "荷慧", "燕雨", "珊妮", "莹汐", "露慕", "南瑶", "宜惠", "含亦", "诗瑶", "荔妍", "雅璐", "瑗聪", "蕾熙", "小媚", "儿颖", "巧玲", "慧笑", "文新", "勤蓝", "晶平", "茗叶", "静书", "珊华", "香希", "凡荔", "芙婷", "瑶静", "洋海", "曼叶", "卿惠", "初菡", "雨荔", "滢慧", "贝婷", "宇瑞", "梦锦", "婷迎", "代馨", "冰笑", "妮岚", "姬汐", "澜琰", "妙珊", "慧贤", "南婉", "骅菁", "小念", "夏贤", "安珊", "苑琰", "馨小", "倩琳", "寒风", "希怜", "洋睿", "迎羽", "霞莉", "莎清", "怜琳", "以勤", "飞梦", "娴琼", "婕念", "聪萱", "叶水", "婷凡", "蓝飘", "馨璐", "柔莉", "佩忆", "艺莹", "静露", "宛汐", "娇芬", "芳蕾", "桂叶", "妍如", "映馨", "咏骅", "思夏", "琳怜", "瑾萱", "风叶", "秀诗", "丹璧", "彤珊", "逸锦", "淑芹", "婷翠", "锦聪", "姣熙", "惜眉", "睿璧", "贤娅", "飞风", "素宛", "蓝易", "贝芹", "初骅", "芳雁", "璐妙",
        "婉露", "娅瑶", "芬亦", "华岚", "欢怜", "丝秀", "眉荔", "易乐", "水琪", "琳雪", "伊姣", "巧雪", "娅玉", "黛蓝", "晴霜", "露香", "飞华", "英瑶", "晶怜", "凡迎", "琳莎", "巧白", "双宛", "仪容", "晓惠", "佳儿", "影涵", "仪儿", "青宝", "菱秀", "逸娇", "诗羽", "霜欣", "丽娜", "桦桂", "琬枫", "容聪", "岚卿", "琪希", "逸语", "冰卉", "菁阳", "荷雨", "菲丹", "娅彦", "媚汐", "琳夏", "叶平", "菡红", "仪毓", "姬怡", "容英", "影风", "欣怡", "香妍", "娴怜", "苇芬", "沛青", "蕊忆", "霜艺", "晓晴", "柳素", "芳蓝", "筠白", "筠静", "菡夏", "妍莎", "海蓝", "娅晴", "彤莎", "玉媚", "勤红", "琴佩", "颖骅", "菱海", "影代", "沫瑶", "烁琴", "晓璧", "诗梦", "妍苛", "霜南", "怡燕", "梦璧", "希佩", "代晶", "羽彤", "宝柳", "冬凡", "梦容", "如荔", "南嘉", "美友", "苇以", "岚彦", "凡冰", "蓝欢", "叶宛", "惠婵", "淑采", "姣蕾", "菁毓", "霜芙", "小诗", "海阳", "英念", "琬熙", "贤佩", "红菲", "慕姣", "采莹", "彤萱", "沛雪", "素菲", "瑞迎", "聪风", "寒桦", "霞仪", "玉冬", "风彤", "莺珊", "儿儿", "佳琬", "语晓",
        "飞蓓", "诗晴", "蓉茜", "霜华", "琳小", "莺丹", "雅娜", "叶璐", "翠笑", "贤雪", "卿语", "希容", "凌素", "香含", "蓝贤", "儿雪", "伊丽", "艺风", "惠易", "逸宇", "逸梦", "洋仪", "瑞怜", "亦佳", "飘佩", "燕瑶", "骅绮", "宛欣", "芙聪", "雨书", "琼芳", "亦念", "琴笑", "翠宇", "琴融", "翠薇", "若怡", "枫丹", "初翠", "语静", "雅小", "妮柔", "惜文", "曼小", "萱莺", "宜佩", "易晶", "卿友", "萱红", "安红", "琪黛", "蓝枫", "珊仪", "荷萱", "萱滢", "双梦", "香易", "馨雪", "飘雅", "风冰", "蕾琦", "怜冰", "晴松", "桦素", "宇夏", "娜美", "燕琳", "慧艺", "黛烁", "影菡", "莎露", "婵苛", "柳姣", "婷盼", "琴琼", "梦欣", "玉荔", "柔诗", "曼红", "妙香", "桂凡", "寒友", "寒晶", "代桃", "文骅", "贤白", "宇倩", "茜馥", "蓓琪", "可雁", "如颖", "采笑", "莺蓉", "凌海", "清娴", "菲容", "薇骅", "涵梵", "影芙", "盼青", "馥露", "曼怜", "安凡", "玲柔", "妍仪", "苛柳", "绮琴", "冬汐", "雅文", "蓉初", "黛念", "霞苑", "映贝", "涵舒", "涵琰", "雁雯", "妮凡", "彦融", "荔颖", "睿苛", "菡盼", "芳晶", "黛媛", "雨桂",
        "卉晶", "馨琦", "凌笑", "安若", "蕊锦", "芳雪", "翠桃", "卿馨", "怡采", "冬涵", "夏雪", "玲珊", "初蓉", "友娜", "双萱", "萱玉", "如瑶", "慧爽", "若秀", "飞叶", "蕾爽", "英柳", "如婵", "秀若", "彩烁", "念忆", "霞晴", "骅芙", "芳英", "叶代", "舒宛", "宛瑶", "茗贝", "艺琪", "雁小", "宝菲", "瑶梦", "娇语", "迎玉", "菡乐", "芹怜", "沛美", "聪涵", "琰佳", "如雅", "霞代", "慧瑶", "宝媚", "苛蓉", "红颖", "蓝烁", "芹依", "爽雁", "雪桂", "以绮", "黛飞", "雪华", "苛水", "琦菡", "丹婷", "娴黛", "友凌", "婕惠", "菁翠", "丝菡", "婕枫", "汐友", "毓琰", "涵荔", "含娜", "琦映", "蕊慧", "燕芳", "飘叶", "滢菁", "松洁", "水灵", "娇雅", "馨骅", "梦姬", "萱菡", "水巧", "夏馨", "茗琦", "霞澜", "友丹", "睿馨", "瑾晴", "丝卿", "琼宇", "岚双", "桃淑", "芳萱", "希小", "巧娅", "惠宇", "飞菱", "琪岚", "欣蓝", "冰芙", "蕾如", "琼可", "妙亦", "梵毓", "桃可", "枫荷", "黛冬", "岚蓉", "月洁", "巧彤", "曼芙", "爽雅", "沛枫", "仪雪", "岚丽", "希碧", "英雨", "卿锦", "芹诗", "雯菁", "琪丝", "松蕾", "芬若", "芹绮",
        "梦勤", "雨骅", "翠亦", "蓉媚", "咏雅", "芙容", "艺南", "英彦", "曼娜", "亦燕", "颖夏", "怜苇", "慧盼", "冰荷", "芙瑾", "绮萱", "水曼", "燕惠", "儿飘", "宜菲", "倩绮", "青宛", "霞芹", "妮彩", "菲蓝", "影洁", "晶蕊", "嘉霞", "聪苑", "友莹", "姬琳", "双雪", "熙媚", "洋玉", "苇菡", "舒舒", "沛诗", "雅代", "琪夏", "夏灵", "熙静", "娅苛", "沫霞", "宝聪", "容娅", "骅冬", "芹盼", "慕岚", "澜冬", "瑶仪", "南琳", "彩乐", "惜菲", "新慧", "宛雅", "雅蕊", "映安", "沛汐", "松秀", "南沛", "迎飞", "彤采", "颖露", "梦雨", "香嘉", "乐舒", "琰惜", "苛沫", "琳南", "燕荔", "丹慕", "莉若", "迎诗", "洋馨", "蕾贤", "念婷", "园思", "贤颖", "欣柳", "素儿", "雁婉", "苛婕", "飘霞", "诗伊", "翠汐", "采倩", "柳晶", "筠玛", "蕊希", "华琳", "馥凌", "黛友", "惜采", "冬艺", "秀锦", "妙娅", "忆茗", "宇儿", "蕊丹", "荔锦", "慕琳", "婉如", "聪艺", "桦滢", "晴南", "霞菡", "荷莺", "毓芳", "琴筠", "希叶", "月雪", "蕊媚", "沛薇", "咏柔", "雅飘", "佩如", "琰夏", "婵汐", "雯琳", "含贝", "娅涵", "馨水", "桂婵", "水馨",
        "飘贤", "莉影", "馥菱", "馨锦", "锦菲", "蓉琴", "凌沫", "晶涵", "岚爽", "馨嘉", "琼琦", "秀姣", "寒桂", "菁洋", "儿毓", "娴爽", "荷素", "笑蓓", "以莎", "菲洋", "涵婕", "希桂", "宜雪", "凡寒", "荷妙", "莉逸", "琴茜", "雪静", "瑶晶", "桦灵", "素美", "茜芹", "爽依", "嘉红", "佩月", "诗宛", "茜素", "妍丽", "彦小", "瑗飞", "颖羽", "烁水", "娇咏", "青阳", "琼亦", "琦贤", "新玉", "含玲", "晓静", "蓝苑", "蓉希", "叶慧", "清诗", "玛丽", "阳影", "凌彤", "丹书", "琪语", "妮艺", "妮蓝", "兰卿", "如怡", "盼菁", "宛兰", "娜宜", "枫莹", "阳舒", "枫忆", "以烁", "毓晶", "霜素", "夏菲", "丝雪", "迎雅", "冰芬", "梦盼", "沫惠", "爽伊", "夏茗", "雪洁", "宛汐", "熙卉", "语婵", "霞冬", "毓萱", "汐含", "婉涵", "宜熙", "菲如", "颖苛", "玉月", "雪瑗", "香华", "宇如", "琬蓉", "彤婉", "瑶夏", "清雪", "玲易", "锦妙", "秀慧", "烁静", "菲小", "文岚", "熙珊", "盼兰", "映珊", "茜蓝", "可瑞", "澜彤", "菱艺", "忆园", "冰碧", "妍惠", "曼若", "娇黛", "雅蓉", "琬冰", "梵海", "雅莎", "梦彤", "贤安", "容依", "梦宜",
        "雅婉", "洁婉", "慧咏", "思熙", "婵媚", "诗素", "晴婵", "莎岚", "玉荷", "荷绮", "欢叶", "羽忆", "柳清", "海玉", "雨佳", "新冰", "依筠", "乐念", "静菡", "荷芬", "盼宛", "玉雯", "菁婷", "滢妮", "勤素", "伊勤", "羽霞", "艺丝", "容妍", "洁梵", "素思", "娅香", "佳秀", "希馨", "采晓", "冰平", "黛梵", "寒梦", "向冬", "瑞宛", "岚茜", "晓玲", "乐霜", "柳熙", "怜玲", "玲琳", "骅馥", "娅青", "卉清", "易涵", "兰蕾", "灵依", "咏黛", "瑞聪", "希媚", "桦羽", "玉巧", "小飞", "以婉", "欢蕊", "锦芬", "飞香", "素佩", "红书", "如宛", "馨清", "文沛", "晓苛", "婷卉", "初红", "桦沫", "莎梦", "琰华", "珊苛", "伊兰", "友影", "茗姬", "瑞晓", "琳丹", "娇菁", "汐雯", "婉飘", "菲玛", "碧静", "翠琼", "聪红", "嘉曼", "佳英", "琪梦", "笑颖", "睿雨", "希芙", "瑗芹", "蓓含", "丝曼", "易华", "宜媚", "桦琳", "伊薇", "宇碧", "逸婕", "忆涵", "元以", "沛南", "燕慕", "丹惠", "琳婕", "瑾影", "若晓", "苇慕", "瑾婵", "向咏", "羽玛", "宜雅", "阳容", "婵英", "蓉若", "瑶红", "元琪", "欢雪", "雪白", "清梦", "希静", "夏蓉",
        "玉盼", "茗思", "华娴", "新妍", "枫雨", "雪娴", "绮桃", "玉容", "思逸", "忆姣", "琴卉", "媚怡", "萱慕", "迎洋", "叶沛", "苇睿", "梵书", "宇芳", "芹希", "美书", "静芙", "雪莎", "梵柳", "琪露", "琪玉", "怡佳", "婷骅", "含晶", "曼露", "怜迎", "馥芙", "妙绮", "念筠", "澜笑", "慧希", "逸元", "如沫", "绮南", "念佳", "嘉瑾", "霜宜", "盼涵", "含彦", "汐海", "娜儿", "琪瑗", "蓝璐", "烁彤", "菲安", "骅睿", "怜儿", "松雅", "含菁", "乐兰", "茗珊", "惠霜", "艺羽", "姬冰", "沫桦", "娇琳", "梦彩", "亦涵", "娅绮", "彤欣", "瑶菲", "菁琰", "彦贤", "丝媚", "茜英", "文蓓", "夏怜", "怜菱", "莎冬", "霜菡", "璧岚", "碧艺", "芳冬", "以新", "薇蓝", "亦菲", "乐芬", "沛芳", "妙松", "娴华", "莎宇", "熙蓓"],
    descs: ["渡劫成功晋升天仙", "领取了88888元宝礼包", "渡劫成功晋升玄仙", "渡劫成功晋升仙君", "渡劫成功晋升地仙", "领取了99999元宝礼包"],
    familyArr: new Array(2),
    symbolArr: new Array(3),
    tops: [112, 140, 168, 196, 224],
    items: new Array(),
    destroyed: false,
    destory: function () {
    },
};
var JpegError = (function JpegErrorClosure() {
    function JpegError(msg) {
        this.message = 'JPEG error: ' + msg;
    }
    JpegError.prototype = new Error();
    JpegError.prototype.name = 'JpegError';
    JpegError.constructor = JpegError;
    return JpegError;
})();
var DNLMarkerError = (function DNLMarkerErrorClosure() {
    function DNLMarkerError(message, scanLines) {
        this.message = message;
        this.scanLines = scanLines;
    }
    DNLMarkerError.prototype = new Error();
    DNLMarkerError.prototype.name = 'DNLMarkerError';
    DNLMarkerError.constructor = DNLMarkerError;
    return DNLMarkerError;
})();
var EOIMarkerError = (function EOIMarkerErrorClosure() {
    function EOIMarkerError(message) {
        this.message = message;
    }
    EOIMarkerError.prototype = new Error();
    EOIMarkerError.prototype.name = 'EOIMarkerError';
    EOIMarkerError.constructor = EOIMarkerError;
    return EOIMarkerError;
})();
var JpegImage = (function JpegImageClosure() {
    var dctZigZag = new Uint8Array([
        0,
        1, 8,
        16, 9, 2,
        3, 10, 17, 24,
        32, 25, 18, 11, 4,
        5, 12, 19, 26, 33, 40,
        48, 41, 34, 27, 20, 13, 6,
        7, 14, 21, 28, 35, 42, 49, 56,
        57, 50, 43, 36, 29, 22, 15,
        23, 30, 37, 44, 51, 58,
        59, 52, 45, 38, 31,
        39, 46, 53, 60,
        61, 54, 47,
        55, 62,
        63
    ]);
    var dctCos1 = 4017;
    var dctSin1 = 799;
    var dctCos3 = 3406;
    var dctSin3 = 2276;
    var dctCos6 = 1567;
    var dctSin6 = 3784;
    var dctSqrt2 = 5793;
    var dctSqrt1d2 = 2896;
    function JpegImage(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.decodeTransform, decodeTransform = _c === void 0 ? null : _c, _d = _b.colorTransform, colorTransform = _d === void 0 ? -1 : _d;
        this._decodeTransform = decodeTransform;
        this._colorTransform = colorTransform;
    }
    function buildHuffmanTable(codeLengths, values) {
        var k = 0, code = [], i, j, length = 16;
        while (length > 0 && !codeLengths[length - 1]) {
            length--;
        }
        code.push({ children: [], index: 0, });
        var p = code[0], q;
        for (i = 0; i < length; i++) {
            for (j = 0; j < codeLengths[i]; j++) {
                p = code.pop();
                p.children[p.index] = values[k];
                while (p.index > 0) {
                    p = code.pop();
                }
                p.index++;
                code.push(p);
                while (code.length <= i) {
                    code.push(q = { children: [], index: 0, });
                    p.children[p.index] = q.children;
                    p = q;
                }
                k++;
            }
            if (i + 1 < length) {
                code.push(q = { children: [], index: 0, });
                p.children[p.index] = q.children;
                p = q;
            }
        }
        return code[0].children;
    }
    function getBlockBufferOffset(component, row, col) {
        return 64 * ((component.blocksPerLine + 1) * row + col);
    }
    function decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successivePrev, successive, parseDNLMarker) {
        if (parseDNLMarker === void 0) { parseDNLMarker = false; }
        var mcusPerLine = frame.mcusPerLine;
        var progressive = frame.progressive;
        var startOffset = offset, bitsData = 0, bitsCount = 0;
        function readBit() {
            if (bitsCount > 0) {
                bitsCount--;
                return (bitsData >> bitsCount) & 1;
            }
            bitsData = data[offset++];
            if (bitsData === 0xFF) {
                var nextByte = data[offset++];
                if (nextByte) {
                    if (nextByte === 0xDC && parseDNLMarker) {
                        offset += 2;
                        var scanLines = (data[offset++] << 8) | data[offset++];
                        if (scanLines > 0 && scanLines !== frame.scanLines) {
                            throw new DNLMarkerError('Found DNL marker (0xFFDC) while parsing scan data', scanLines);
                        }
                    }
                    else if (nextByte === 0xD9) {
                        throw new EOIMarkerError('Found EOI marker (0xFFD9) while parsing scan data');
                    }
                    throw new JpegError("unexpected marker " + ((bitsData << 8) | nextByte).toString(16));
                }
            }
            bitsCount = 7;
            return bitsData >>> 7;
        }
        function decodeHuffman(tree) {
            var node = tree;
            while (true) {
                node = node[readBit()];
                if (typeof node === 'number') {
                    return node;
                }
                if (typeof node !== 'object') {
                    throw new JpegError('invalid huffman sequence');
                }
            }
        }
        function receive(length) {
            var n = 0;
            while (length > 0) {
                n = (n << 1) | readBit();
                length--;
            }
            return n;
        }
        function receiveAndExtend(length) {
            if (length === 1) {
                return readBit() === 1 ? 1 : -1;
            }
            var n = receive(length);
            if (n >= 1 << (length - 1)) {
                return n;
            }
            return n + (-1 << length) + 1;
        }
        function decodeBaseline(component, offset) {
            var t = decodeHuffman(component.huffmanTableDC);
            var diff = t === 0 ? 0 : receiveAndExtend(t);
            component.blockData[offset] = (component.pred += diff);
            var k = 1;
            while (k < 64) {
                var rs = decodeHuffman(component.huffmanTableAC);
                var s = rs & 15, r = rs >> 4;
                if (s === 0) {
                    if (r < 15) {
                        break;
                    }
                    k += 16;
                    continue;
                }
                k += r;
                var z = dctZigZag[k];
                component.blockData[offset + z] = receiveAndExtend(s);
                k++;
            }
        }
        function decodeDCFirst(component, offset) {
            var t = decodeHuffman(component.huffmanTableDC);
            var diff = t === 0 ? 0 : (receiveAndExtend(t) << successive);
            component.blockData[offset] = (component.pred += diff);
        }
        function decodeDCSuccessive(component, offset) {
            component.blockData[offset] |= readBit() << successive;
        }
        var eobrun = 0;
        function decodeACFirst(component, offset) {
            if (eobrun > 0) {
                eobrun--;
                return;
            }
            var k = spectralStart, e = spectralEnd;
            while (k <= e) {
                var rs = decodeHuffman(component.huffmanTableAC);
                var s = rs & 15, r = rs >> 4;
                if (s === 0) {
                    if (r < 15) {
                        eobrun = receive(r) + (1 << r) - 1;
                        break;
                    }
                    k += 16;
                    continue;
                }
                k += r;
                var z = dctZigZag[k];
                component.blockData[offset + z] =
                    receiveAndExtend(s) * (1 << successive);
                k++;
            }
        }
        var successiveACState = 0, successiveACNextValue;
        function decodeACSuccessive(component, offset) {
            var k = spectralStart;
            var e = spectralEnd;
            var r = 0;
            var s;
            var rs;
            while (k <= e) {
                var offsetZ = offset + dctZigZag[k];
                var sign = component.blockData[offsetZ] < 0 ? -1 : 1;
                switch (successiveACState) {
                    case 0:
                        rs = decodeHuffman(component.huffmanTableAC);
                        s = rs & 15;
                        r = rs >> 4;
                        if (s === 0) {
                            if (r < 15) {
                                eobrun = receive(r) + (1 << r);
                                successiveACState = 4;
                            }
                            else {
                                r = 16;
                                successiveACState = 1;
                            }
                        }
                        else {
                            if (s !== 1) {
                                throw new JpegError('invalid ACn encoding');
                            }
                            successiveACNextValue = receiveAndExtend(s);
                            successiveACState = r ? 2 : 3;
                        }
                        continue;
                    case 1:
                    case 2:
                        if (component.blockData[offsetZ]) {
                            component.blockData[offsetZ] += sign * (readBit() << successive);
                        }
                        else {
                            r--;
                            if (r === 0) {
                                successiveACState = successiveACState === 2 ? 3 : 0;
                            }
                        }
                        break;
                    case 3:
                        if (component.blockData[offsetZ]) {
                            component.blockData[offsetZ] += sign * (readBit() << successive);
                        }
                        else {
                            component.blockData[offsetZ] =
                                successiveACNextValue << successive;
                            successiveACState = 0;
                        }
                        break;
                    case 4:
                        if (component.blockData[offsetZ]) {
                            component.blockData[offsetZ] += sign * (readBit() << successive);
                        }
                        break;
                }
                k++;
            }
            if (successiveACState === 4) {
                eobrun--;
                if (eobrun === 0) {
                    successiveACState = 0;
                }
            }
        }
        function decodeMcu(component, decode, mcu, row, col) {
            var mcuRow = (mcu / mcusPerLine) | 0;
            var mcuCol = mcu % mcusPerLine;
            var blockRow = mcuRow * component.v + row;
            var blockCol = mcuCol * component.h + col;
            var offset = getBlockBufferOffset(component, blockRow, blockCol);
            decode(component, offset);
        }
        function decodeBlock(component, decode, mcu) {
            var blockRow = (mcu / component.blocksPerLine) | 0;
            var blockCol = mcu % component.blocksPerLine;
            var offset = getBlockBufferOffset(component, blockRow, blockCol);
            decode(component, offset);
        }
        var componentsLength = components.length;
        var component, i, j, k, n;
        var decodeFn;
        if (progressive) {
            if (spectralStart === 0) {
                decodeFn = successivePrev === 0 ? decodeDCFirst : decodeDCSuccessive;
            }
            else {
                decodeFn = successivePrev === 0 ? decodeACFirst : decodeACSuccessive;
            }
        }
        else {
            decodeFn = decodeBaseline;
        }
        var mcu = 0, fileMarker;
        var mcuExpected;
        if (componentsLength === 1) {
            mcuExpected = components[0].blocksPerLine * components[0].blocksPerColumn;
        }
        else {
            mcuExpected = mcusPerLine * frame.mcusPerColumn;
        }
        var h, v;
        while (mcu < mcuExpected) {
            var mcuToRead = resetInterval ?
                Math.min(mcuExpected - mcu, resetInterval) : mcuExpected;
            for (i = 0; i < componentsLength; i++) {
                components[i].pred = 0;
            }
            eobrun = 0;
            if (componentsLength === 1) {
                component = components[0];
                for (n = 0; n < mcuToRead; n++) {
                    decodeBlock(component, decodeFn, mcu);
                    mcu++;
                }
            }
            else {
                for (n = 0; n < mcuToRead; n++) {
                    for (i = 0; i < componentsLength; i++) {
                        component = components[i];
                        h = component.h;
                        v = component.v;
                        for (j = 0; j < v; j++) {
                            for (k = 0; k < h; k++) {
                                decodeMcu(component, decodeFn, mcu, j, k);
                            }
                        }
                    }
                    mcu++;
                }
            }
            bitsCount = 0;
            fileMarker = findNextFileMarker(data, offset);
            if (fileMarker && fileMarker.invalid) {
                warn('decodeScan - unexpected MCU data, current marker is: ' +
                    fileMarker.invalid);
                offset = fileMarker.offset;
            }
            var marker = fileMarker && fileMarker.marker;
            if (!marker || marker <= 0xFF00) {
                throw new JpegError('marker was not found');
            }
            if (marker >= 0xFFD0 && marker <= 0xFFD7) {
                offset += 2;
            }
            else {
                break;
            }
        }
        fileMarker = findNextFileMarker(data, offset);
        if (fileMarker && fileMarker.invalid) {
            warn('decodeScan - unexpected Scan data, current marker is: ' +
                fileMarker.invalid);
            offset = fileMarker.offset;
        }
        return offset - startOffset;
    }
    function quantizeAndInverse(component, blockBufferOffset, p) {
        var qt = component.quantizationTable, blockData = component.blockData;
        var v0, v1, v2, v3, v4, v5, v6, v7;
        var p0, p1, p2, p3, p4, p5, p6, p7;
        var t;
        if (!qt) {
            throw new JpegError('missing required Quantization Table.');
        }
        for (var row = 0; row < 64; row += 8) {
            p0 = blockData[blockBufferOffset + row];
            p1 = blockData[blockBufferOffset + row + 1];
            p2 = blockData[blockBufferOffset + row + 2];
            p3 = blockData[blockBufferOffset + row + 3];
            p4 = blockData[blockBufferOffset + row + 4];
            p5 = blockData[blockBufferOffset + row + 5];
            p6 = blockData[blockBufferOffset + row + 6];
            p7 = blockData[blockBufferOffset + row + 7];
            p0 *= qt[row];
            if ((p1 | p2 | p3 | p4 | p5 | p6 | p7) === 0) {
                t = (dctSqrt2 * p0 + 512) >> 10;
                p[row] = t;
                p[row + 1] = t;
                p[row + 2] = t;
                p[row + 3] = t;
                p[row + 4] = t;
                p[row + 5] = t;
                p[row + 6] = t;
                p[row + 7] = t;
                continue;
            }
            p1 *= qt[row + 1];
            p2 *= qt[row + 2];
            p3 *= qt[row + 3];
            p4 *= qt[row + 4];
            p5 *= qt[row + 5];
            p6 *= qt[row + 6];
            p7 *= qt[row + 7];
            v0 = (dctSqrt2 * p0 + 128) >> 8;
            v1 = (dctSqrt2 * p4 + 128) >> 8;
            v2 = p2;
            v3 = p6;
            v4 = (dctSqrt1d2 * (p1 - p7) + 128) >> 8;
            v7 = (dctSqrt1d2 * (p1 + p7) + 128) >> 8;
            v5 = p3 << 4;
            v6 = p5 << 4;
            v0 = (v0 + v1 + 1) >> 1;
            v1 = v0 - v1;
            t = (v2 * dctSin6 + v3 * dctCos6 + 128) >> 8;
            v2 = (v2 * dctCos6 - v3 * dctSin6 + 128) >> 8;
            v3 = t;
            v4 = (v4 + v6 + 1) >> 1;
            v6 = v4 - v6;
            v7 = (v7 + v5 + 1) >> 1;
            v5 = v7 - v5;
            v0 = (v0 + v3 + 1) >> 1;
            v3 = v0 - v3;
            v1 = (v1 + v2 + 1) >> 1;
            v2 = v1 - v2;
            t = (v4 * dctSin3 + v7 * dctCos3 + 2048) >> 12;
            v4 = (v4 * dctCos3 - v7 * dctSin3 + 2048) >> 12;
            v7 = t;
            t = (v5 * dctSin1 + v6 * dctCos1 + 2048) >> 12;
            v5 = (v5 * dctCos1 - v6 * dctSin1 + 2048) >> 12;
            v6 = t;
            p[row] = v0 + v7;
            p[row + 7] = v0 - v7;
            p[row + 1] = v1 + v6;
            p[row + 6] = v1 - v6;
            p[row + 2] = v2 + v5;
            p[row + 5] = v2 - v5;
            p[row + 3] = v3 + v4;
            p[row + 4] = v3 - v4;
        }
        for (var col = 0; col < 8; ++col) {
            p0 = p[col];
            p1 = p[col + 8];
            p2 = p[col + 16];
            p3 = p[col + 24];
            p4 = p[col + 32];
            p5 = p[col + 40];
            p6 = p[col + 48];
            p7 = p[col + 56];
            if ((p1 | p2 | p3 | p4 | p5 | p6 | p7) === 0) {
                t = (dctSqrt2 * p0 + 8192) >> 14;
                t = (t < -2040) ? 0 : (t >= 2024) ? 255 : (t + 2056) >> 4;
                blockData[blockBufferOffset + col] = t;
                blockData[blockBufferOffset + col + 8] = t;
                blockData[blockBufferOffset + col + 16] = t;
                blockData[blockBufferOffset + col + 24] = t;
                blockData[blockBufferOffset + col + 32] = t;
                blockData[blockBufferOffset + col + 40] = t;
                blockData[blockBufferOffset + col + 48] = t;
                blockData[blockBufferOffset + col + 56] = t;
                continue;
            }
            v0 = (dctSqrt2 * p0 + 2048) >> 12;
            v1 = (dctSqrt2 * p4 + 2048) >> 12;
            v2 = p2;
            v3 = p6;
            v4 = (dctSqrt1d2 * (p1 - p7) + 2048) >> 12;
            v7 = (dctSqrt1d2 * (p1 + p7) + 2048) >> 12;
            v5 = p3;
            v6 = p5;
            v0 = ((v0 + v1 + 1) >> 1) + 4112;
            v1 = v0 - v1;
            t = (v2 * dctSin6 + v3 * dctCos6 + 2048) >> 12;
            v2 = (v2 * dctCos6 - v3 * dctSin6 + 2048) >> 12;
            v3 = t;
            v4 = (v4 + v6 + 1) >> 1;
            v6 = v4 - v6;
            v7 = (v7 + v5 + 1) >> 1;
            v5 = v7 - v5;
            v0 = (v0 + v3 + 1) >> 1;
            v3 = v0 - v3;
            v1 = (v1 + v2 + 1) >> 1;
            v2 = v1 - v2;
            t = (v4 * dctSin3 + v7 * dctCos3 + 2048) >> 12;
            v4 = (v4 * dctCos3 - v7 * dctSin3 + 2048) >> 12;
            v7 = t;
            t = (v5 * dctSin1 + v6 * dctCos1 + 2048) >> 12;
            v5 = (v5 * dctCos1 - v6 * dctSin1 + 2048) >> 12;
            v6 = t;
            p0 = v0 + v7;
            p7 = v0 - v7;
            p1 = v1 + v6;
            p6 = v1 - v6;
            p2 = v2 + v5;
            p5 = v2 - v5;
            p3 = v3 + v4;
            p4 = v3 - v4;
            p0 = (p0 < 16) ? 0 : (p0 >= 4080) ? 255 : p0 >> 4;
            p1 = (p1 < 16) ? 0 : (p1 >= 4080) ? 255 : p1 >> 4;
            p2 = (p2 < 16) ? 0 : (p2 >= 4080) ? 255 : p2 >> 4;
            p3 = (p3 < 16) ? 0 : (p3 >= 4080) ? 255 : p3 >> 4;
            p4 = (p4 < 16) ? 0 : (p4 >= 4080) ? 255 : p4 >> 4;
            p5 = (p5 < 16) ? 0 : (p5 >= 4080) ? 255 : p5 >> 4;
            p6 = (p6 < 16) ? 0 : (p6 >= 4080) ? 255 : p6 >> 4;
            p7 = (p7 < 16) ? 0 : (p7 >= 4080) ? 255 : p7 >> 4;
            blockData[blockBufferOffset + col] = p0;
            blockData[blockBufferOffset + col + 8] = p1;
            blockData[blockBufferOffset + col + 16] = p2;
            blockData[blockBufferOffset + col + 24] = p3;
            blockData[blockBufferOffset + col + 32] = p4;
            blockData[blockBufferOffset + col + 40] = p5;
            blockData[blockBufferOffset + col + 48] = p6;
            blockData[blockBufferOffset + col + 56] = p7;
        }
    }
    function buildComponentData(frame, component) {
        var blocksPerLine = component.blocksPerLine;
        var blocksPerColumn = component.blocksPerColumn;
        var computationBuffer = new Int16Array(64);
        for (var blockRow = 0; blockRow < blocksPerColumn; blockRow++) {
            for (var blockCol = 0; blockCol < blocksPerLine; blockCol++) {
                var offset = getBlockBufferOffset(component, blockRow, blockCol);
                quantizeAndInverse(component, offset, computationBuffer);
            }
        }
        return component.blockData;
    }
    function findNextFileMarker(data, currentPos, startPos) {
        if (startPos === void 0) { startPos = currentPos; }
        function peekUint16(pos) {
            return (data[pos] << 8) | data[pos + 1];
        }
        var maxPos = data.length - 1;
        var newPos = startPos < currentPos ? startPos : currentPos;
        if (currentPos >= maxPos) {
            return null;
        }
        var currentMarker = peekUint16(currentPos);
        if (currentMarker >= 0xFFC0 && currentMarker <= 0xFFFE) {
            return {
                invalid: null,
                marker: currentMarker,
                offset: currentPos,
            };
        }
        var newMarker = peekUint16(newPos);
        while (!(newMarker >= 0xFFC0 && newMarker <= 0xFFFE)) {
            if (++newPos >= maxPos) {
                return null;
            }
            newMarker = peekUint16(newPos);
        }
        return {
            invalid: currentMarker.toString(16),
            marker: newMarker,
            offset: newPos,
        };
    }
    JpegImage.prototype = {
        width: 0,
        height: 0,
        parse: function (data, _a) {
            var _b = (_a === void 0 ? {} : _a).dnlScanLines, dnlScanLines = _b === void 0 ? null : _b;
            function readUint16() {
                var value = (data[offset] << 8) | data[offset + 1];
                offset += 2;
                return value;
            }
            function readDataBlock() {
                var length = readUint16();
                var endOffset = offset + length - 2;
                var fileMarker = findNextFileMarker(data, endOffset, offset);
                if (fileMarker && fileMarker.invalid) {
                    warn('readDataBlock - incorrect length, current marker is: ' +
                        fileMarker.invalid);
                    endOffset = fileMarker.offset;
                }
                var array = data.subarray(offset, endOffset);
                offset += array.length;
                return array;
            }
            function prepareComponents(frame) {
                var mcusPerLine = Math.ceil(frame.samplesPerLine / 8 / frame.maxH);
                var mcusPerColumn = Math.ceil(frame.scanLines / 8 / frame.maxV);
                for (var i = 0; i < frame.components.length; i++) {
                    component = frame.components[i];
                    var blocksPerLine = Math.ceil(Math.ceil(frame.samplesPerLine / 8) *
                        component.h / frame.maxH);
                    var blocksPerColumn = Math.ceil(Math.ceil(frame.scanLines / 8) *
                        component.v / frame.maxV);
                    var blocksPerLineForMcu = mcusPerLine * component.h;
                    var blocksPerColumnForMcu = mcusPerColumn * component.v;
                    var blocksBufferSize = 64 * blocksPerColumnForMcu *
                        (blocksPerLineForMcu + 1);
                    component.blockData = new Int16Array(blocksBufferSize);
                    component.blocksPerLine = blocksPerLine;
                    component.blocksPerColumn = blocksPerColumn;
                }
                frame.mcusPerLine = mcusPerLine;
                frame.mcusPerColumn = mcusPerColumn;
            }
            var offset = 0;
            var jfif = null;
            var adobe = null;
            var frame, resetInterval;
            var numSOSMarkers = 0;
            var quantizationTables = [];
            var huffmanTablesAC = [], huffmanTablesDC = [];
            var fileMarker = readUint16();
            if (fileMarker !== 0xFFD8) {
                throw new JpegError('SOI not found');
            }
            fileMarker = readUint16();
            markerLoop: while (fileMarker !== 0xFFD9) {
                var i, j, l;
                switch (fileMarker) {
                    case 0xFFE0:
                    case 0xFFE1:
                    case 0xFFE2:
                    case 0xFFE3:
                    case 0xFFE4:
                    case 0xFFE5:
                    case 0xFFE6:
                    case 0xFFE7:
                    case 0xFFE8:
                    case 0xFFE9:
                    case 0xFFEA:
                    case 0xFFEB:
                    case 0xFFEC:
                    case 0xFFED:
                    case 0xFFEE:
                    case 0xFFEF:
                    case 0xFFFE:
                        var appData = readDataBlock();
                        if (fileMarker === 0xFFE0) {
                            if (appData[0] === 0x4A && appData[1] === 0x46 &&
                                appData[2] === 0x49 && appData[3] === 0x46 &&
                                appData[4] === 0) {
                                jfif = {
                                    version: { major: appData[5], minor: appData[6], },
                                    densityUnits: appData[7],
                                    xDensity: (appData[8] << 8) | appData[9],
                                    yDensity: (appData[10] << 8) | appData[11],
                                    thumbWidth: appData[12],
                                    thumbHeight: appData[13],
                                    thumbData: appData.subarray(14, 14 +
                                        3 * appData[12] * appData[13]),
                                };
                            }
                        }
                        if (fileMarker === 0xFFEE) {
                            if (appData[0] === 0x41 && appData[1] === 0x64 &&
                                appData[2] === 0x6F && appData[3] === 0x62 &&
                                appData[4] === 0x65) {
                                adobe = {
                                    version: (appData[5] << 8) | appData[6],
                                    flags0: (appData[7] << 8) | appData[8],
                                    flags1: (appData[9] << 8) | appData[10],
                                    transformCode: appData[11],
                                };
                            }
                        }
                        break;
                    case 0xFFDB:
                        var quantizationTablesLength = readUint16();
                        var quantizationTablesEnd = quantizationTablesLength + offset - 2;
                        var z;
                        while (offset < quantizationTablesEnd) {
                            var quantizationTableSpec = data[offset++];
                            var tableData = new Uint16Array(64);
                            if ((quantizationTableSpec >> 4) === 0) {
                                for (j = 0; j < 64; j++) {
                                    z = dctZigZag[j];
                                    tableData[z] = data[offset++];
                                }
                            }
                            else if ((quantizationTableSpec >> 4) === 1) {
                                for (j = 0; j < 64; j++) {
                                    z = dctZigZag[j];
                                    tableData[z] = readUint16();
                                }
                            }
                            else {
                                throw new JpegError('DQT - invalid table spec');
                            }
                            quantizationTables[quantizationTableSpec & 15] = tableData;
                        }
                        break;
                    case 0xFFC0:
                    case 0xFFC1:
                    case 0xFFC2:
                        if (frame) {
                            throw new JpegError('Only single frame JPEGs supported');
                        }
                        readUint16();
                        frame = {};
                        frame.extended = (fileMarker === 0xFFC1);
                        frame.progressive = (fileMarker === 0xFFC2);
                        frame.precision = data[offset++];
                        var sofScanLines = readUint16();
                        frame.scanLines = dnlScanLines || sofScanLines;
                        frame.samplesPerLine = readUint16();
                        frame.components = [];
                        frame.componentIds = {};
                        var componentsCount = data[offset++], componentId;
                        var maxH = 0, maxV = 0;
                        for (i = 0; i < componentsCount; i++) {
                            componentId = data[offset];
                            var h = data[offset + 1] >> 4;
                            var v = data[offset + 1] & 15;
                            if (maxH < h) {
                                maxH = h;
                            }
                            if (maxV < v) {
                                maxV = v;
                            }
                            var qId = data[offset + 2];
                            l = frame.components.push({
                                h: h,
                                v: v,
                                quantizationId: qId,
                                quantizationTable: null,
                            });
                            frame.componentIds[componentId] = l - 1;
                            offset += 3;
                        }
                        frame.maxH = maxH;
                        frame.maxV = maxV;
                        prepareComponents(frame);
                        break;
                    case 0xFFC4:
                        var huffmanLength = readUint16();
                        for (i = 2; i < huffmanLength;) {
                            var huffmanTableSpec = data[offset++];
                            var codeLengths = new Uint8Array(16);
                            var codeLengthSum = 0;
                            for (j = 0; j < 16; j++, offset++) {
                                codeLengthSum += (codeLengths[j] = data[offset]);
                            }
                            var huffmanValues = new Uint8Array(codeLengthSum);
                            for (j = 0; j < codeLengthSum; j++, offset++) {
                                huffmanValues[j] = data[offset];
                            }
                            i += 17 + codeLengthSum;
                            ((huffmanTableSpec >> 4) === 0 ?
                                huffmanTablesDC : huffmanTablesAC)[huffmanTableSpec & 15] =
                                buildHuffmanTable(codeLengths, huffmanValues);
                        }
                        break;
                    case 0xFFDD:
                        readUint16();
                        resetInterval = readUint16();
                        break;
                    case 0xFFDA:
                        var parseDNLMarker = (++numSOSMarkers) === 1 && !dnlScanLines;
                        readUint16();
                        var selectorsCount = data[offset++];
                        var components = [], component;
                        for (i = 0; i < selectorsCount; i++) {
                            var componentIndex = frame.componentIds[data[offset++]];
                            component = frame.components[componentIndex];
                            var tableSpec = data[offset++];
                            component.huffmanTableDC = huffmanTablesDC[tableSpec >> 4];
                            component.huffmanTableAC = huffmanTablesAC[tableSpec & 15];
                            components.push(component);
                        }
                        var spectralStart = data[offset++];
                        var spectralEnd = data[offset++];
                        var successiveApproximation = data[offset++];
                        try {
                            var processed = decodeScan(data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successiveApproximation >> 4, successiveApproximation & 15, parseDNLMarker);
                            offset += processed;
                        }
                        catch (ex) {
                            if (ex instanceof DNLMarkerError) {
                                warn(ex.message + " -- attempting to re-parse the JPEG image.");
                                return this.parse(data, { dnlScanLines: ex.scanLines, });
                            }
                            else if (ex instanceof EOIMarkerError) {
                                warn(ex.message + " -- ignoring the rest of the image data.");
                                break markerLoop;
                            }
                            throw ex;
                        }
                        break;
                    case 0xFFDC:
                        offset += 4;
                        break;
                    case 0xFFFF:
                        if (data[offset] !== 0xFF) {
                            offset--;
                        }
                        break;
                    default:
                        if (data[offset - 3] === 0xFF &&
                            data[offset - 2] >= 0xC0 && data[offset - 2] <= 0xFE) {
                            offset -= 3;
                            break;
                        }
                        var nextFileMarker = findNextFileMarker(data, offset - 2);
                        if (nextFileMarker && nextFileMarker.invalid) {
                            warn('JpegImage.parse - unexpected data, current marker is: ' +
                                nextFileMarker.invalid);
                            offset = nextFileMarker.offset;
                            break;
                        }
                        throw new JpegError('unknown marker ' + fileMarker.toString(16));
                }
                fileMarker = readUint16();
            }
            this.width = frame.samplesPerLine;
            this.height = frame.scanLines;
            this.jfif = jfif;
            this.adobe = adobe;
            this.components = [];
            for (i = 0; i < frame.components.length; i++) {
                component = frame.components[i];
                var quantizationTable = quantizationTables[component.quantizationId];
                if (quantizationTable) {
                    component.quantizationTable = quantizationTable;
                }
                this.components.push({
                    output: buildComponentData(frame, component),
                    scaleX: component.h / frame.maxH,
                    scaleY: component.v / frame.maxV,
                    blocksPerLine: component.blocksPerLine,
                    blocksPerColumn: component.blocksPerColumn,
                });
            }
            this.numComponents = this.components.length;
        },
        _getLinearizedBlockData: function (width, height, needAlpha, reserved, alphaChannel) {
            if (needAlpha === void 0) { needAlpha = false; }
            if (reserved === void 0) { reserved = 0; }
            if (alphaChannel === void 0) { alphaChannel = null; }
            var isSourcePDF = false;
            var scaleX = this.width / width, scaleY = this.height / height;
            var component, componentScaleX, componentScaleY, blocksPerScanline;
            var x, y, i, j, k;
            var index;
            var offset = 0;
            var output;
            var numComponents = this.components.length;
            var dataLength = width * height * numComponents;
            if (numComponents == 3 && needAlpha) {
                dataLength = width * height * 4;
            }
            var result = new ArrayBuffer(dataLength + reserved);
            var data = new Uint8ClampedArray(result, reserved);
            var xScaleBlockOffset = new Uint32Array(width);
            var mask3LSB = 0xfffffff8;
            if (numComponents == 3 && needAlpha) {
                for (i = 0; i < numComponents; i++) {
                    component = this.components[i];
                    componentScaleX = component.scaleX * scaleX;
                    componentScaleY = component.scaleY * scaleY;
                    offset = i;
                    output = component.output;
                    blocksPerScanline = (component.blocksPerLine + 1) << 3;
                    for (x = 0; x < width; x++) {
                        j = 0 | (x * componentScaleX);
                        xScaleBlockOffset[x] = ((j & mask3LSB) << 3) | (j & 7);
                    }
                    for (y = 0; y < height; y++) {
                        j = 0 | (y * componentScaleY);
                        index = blocksPerScanline * (j & mask3LSB) | ((j & 7) << 3);
                        for (x = 0; x < width; x++) {
                            data[offset] = output[index + xScaleBlockOffset[x]];
                            offset += 4;
                        }
                    }
                }
                offset = 3;
                if (alphaChannel != null) {
                    var i_1 = 0;
                    for (y = 0; y < height; y++) {
                        for (x = 0; x < width; x++) {
                            data[offset] = alphaChannel[i_1++];
                            offset += 4;
                        }
                    }
                }
                else {
                    for (y = 0; y < height; y++) {
                        for (x = 0; x < width; x++) {
                            data[offset] = 0xff;
                            offset += 4;
                        }
                    }
                }
            }
            else {
                for (i = 0; i < numComponents; i++) {
                    component = this.components[i];
                    componentScaleX = component.scaleX * scaleX;
                    componentScaleY = component.scaleY * scaleY;
                    offset = i;
                    output = component.output;
                    blocksPerScanline = (component.blocksPerLine + 1) << 3;
                    for (x = 0; x < width; x++) {
                        j = 0 | (x * componentScaleX);
                        xScaleBlockOffset[x] = ((j & mask3LSB) << 3) | (j & 7);
                    }
                    for (y = 0; y < height; y++) {
                        j = 0 | (y * componentScaleY);
                        index = blocksPerScanline * (j & mask3LSB) | ((j & 7) << 3);
                        for (x = 0; x < width; x++) {
                            data[offset] = output[index + xScaleBlockOffset[x]];
                            offset += numComponents;
                        }
                    }
                }
            }
            var transform = this._decodeTransform;
            if (!isSourcePDF && numComponents === 4 && !transform) {
                transform = new Int32Array([
                    -256, 255, -256, 255, -256, 255, -256, 255
                ]);
            }
            if (transform) {
                if (numComponents == 3 && needAlpha) {
                    for (i = 0; i < dataLength;) {
                        for (j = 0, k = 0; j < numComponents; j++, i++, k += 2) {
                            data[i] = ((data[i] * transform[k]) >> 8) + transform[k + 1];
                        }
                        i++;
                    }
                }
                else {
                    for (i = 0; i < dataLength;) {
                        for (j = 0, k = 0; j < numComponents; j++, i++, k += 2) {
                            data[i] = ((data[i] * transform[k]) >> 8) + transform[k + 1];
                        }
                    }
                }
            }
            return data;
        },
        get _isColorConversionNeeded() {
            if (this.adobe) {
                return !!this.adobe.transformCode;
            }
            if (this.numComponents === 3) {
                if (this._colorTransform === 0) {
                    return false;
                }
                return true;
            }
            if (this._colorTransform === 1) {
                return true;
            }
            return false;
        },
        _convertYccToRgb: function convertYccToRgb(data, needAlpha) {
            if (needAlpha === void 0) { needAlpha = false; }
            var Y, Cb, Cr;
            var i, length;
            if (needAlpha) {
                for (i = 0, length = data.length; i < length; i += 3) {
                    Y = data[i];
                    Cb = data[i + 1];
                    Cr = data[i + 2];
                    data[i] = Y - 179.456 + 1.402 * Cr;
                    data[i + 1] = Y + 135.459 - 0.344 * Cb - 0.714 * Cr;
                    data[i + 2] = Y - 226.816 + 1.772 * Cb;
                    i++;
                }
            }
            else {
                for (i = 0, length = data.length; i < length; i += 3) {
                    Y = data[i];
                    Cb = data[i + 1];
                    Cr = data[i + 2];
                    data[i] = Y - 179.456 + 1.402 * Cr;
                    data[i + 1] = Y + 135.459 - 0.344 * Cb - 0.714 * Cr;
                    data[i + 2] = Y - 226.816 + 1.772 * Cb;
                }
            }
            return data;
        },
        _convertYcckToRgb: function convertYcckToRgb(data) {
            var Y, Cb, Cr, k;
            var offset = 0;
            for (var i = 0, length = data.length; i < length; i += 4) {
                Y = data[i];
                Cb = data[i + 1];
                Cr = data[i + 2];
                k = data[i + 3];
                data[offset++] = -122.67195406894 +
                    Cb * (-6.60635669420364e-5 * Cb + 0.000437130475926232 * Cr -
                        5.4080610064599e-5 * Y + 0.00048449797120281 * k -
                        0.154362151871126) +
                    Cr * (-0.000957964378445773 * Cr + 0.000817076911346625 * Y -
                        0.00477271405408747 * k + 1.53380253221734) +
                    Y * (0.000961250184130688 * Y - 0.00266257332283933 * k +
                        0.48357088451265) +
                    k * (-0.000336197177618394 * k + 0.484791561490776);
                data[offset++] = 107.268039397724 +
                    Cb * (2.19927104525741e-5 * Cb - 0.000640992018297945 * Cr +
                        0.000659397001245577 * Y + 0.000426105652938837 * k -
                        0.176491792462875) +
                    Cr * (-0.000778269941513683 * Cr + 0.00130872261408275 * Y +
                        0.000770482631801132 * k - 0.151051492775562) +
                    Y * (0.00126935368114843 * Y - 0.00265090189010898 * k +
                        0.25802910206845) +
                    k * (-0.000318913117588328 * k - 0.213742400323665);
                data[offset++] = -20.810012546947 +
                    Cb * (-0.000570115196973677 * Cb - 2.63409051004589e-5 * Cr +
                        0.0020741088115012 * Y - 0.00288260236853442 * k +
                        0.814272968359295) +
                    Cr * (-1.53496057440975e-5 * Cr - 0.000132689043961446 * Y +
                        0.000560833691242812 * k - 0.195152027534049) +
                    Y * (0.00174418132927582 * Y - 0.00255243321439347 * k +
                        0.116935020465145) +
                    k * (-0.000343531996510555 * k + 0.24165260232407);
            }
            return data.subarray(0, offset);
        },
        _convertYcckToCmyk: function convertYcckToCmyk(data) {
            var Y, Cb, Cr;
            for (var i = 0, length = data.length; i < length; i += 4) {
                Y = data[i];
                Cb = data[i + 1];
                Cr = data[i + 2];
                data[i] = 434.456 - Y - 1.402 * Cr;
                data[i + 1] = 119.541 - Y + 0.344 * Cb + 0.714 * Cr;
                data[i + 2] = 481.816 - Y - 1.772 * Cb;
            }
            return data;
        },
        _convertCmykToRgb: function convertCmykToRgb(data) {
            var c, m, y, k;
            var offset = 0;
            var scale = 1 / 255;
            for (var i = 0, length = data.length; i < length; i += 4) {
                c = data[i] * scale;
                m = data[i + 1] * scale;
                y = data[i + 2] * scale;
                k = data[i + 3] * scale;
                data[offset++] = 255 +
                    c * (-4.387332384609988 * c + 54.48615194189176 * m +
                        18.82290502165302 * y + 212.25662451639585 * k -
                        285.2331026137004) +
                    m * (1.7149763477362134 * m - 5.6096736904047315 * y -
                        17.873870861415444 * k - 5.497006427196366) +
                    y * (-2.5217340131683033 * y - 21.248923337353073 * k +
                        17.5119270841813) -
                    k * (21.86122147463605 * k + 189.48180835922747);
                data[offset++] = 255 +
                    c * (8.841041422036149 * c + 60.118027045597366 * m +
                        6.871425592049007 * y + 31.159100130055922 * k -
                        79.2970844816548) +
                    m * (-15.310361306967817 * m + 17.575251261109482 * y +
                        131.35250912493976 * k - 190.9453302588951) +
                    y * (4.444339102852739 * y + 9.8632861493405 * k -
                        24.86741582555878) -
                    k * (20.737325471181034 * k + 187.80453709719578);
                data[offset++] = 255 +
                    c * (0.8842522430003296 * c + 8.078677503112928 * m +
                        30.89978309703729 * y - 0.23883238689178934 * k -
                        14.183576799673286) +
                    m * (10.49593273432072 * m + 63.02378494754052 * y +
                        50.606957656360734 * k - 112.23884253719248) +
                    y * (0.03296041114873217 * y + 115.60384449646641 * k -
                        193.58209356861505) -
                    k * (22.33816807309886 * k + 180.12613974708367);
            }
            return data.subarray(0, offset);
        },
        getData: function (width, height, forceRGB, needAlpha, reserved, alphaChannel) {
            if (forceRGB === void 0) { forceRGB = false; }
            if (needAlpha === void 0) { needAlpha = false; }
            if (reserved === void 0) { reserved = 0; }
            if (alphaChannel === void 0) { alphaChannel = null; }
            if (this.numComponents > 4) {
                throw new JpegError('Unsupported color mode');
            }
            var data = this._getLinearizedBlockData(width, height, needAlpha, reserved, alphaChannel);
            if (this.numComponents === 1 && forceRGB) {
                var dataLength = data.length;
                var rgbData = new Uint8ClampedArray(dataLength * 3);
                var offset = 0;
                for (var i = 0; i < dataLength; i++) {
                    var grayColor = data[i];
                    rgbData[offset++] = grayColor;
                    rgbData[offset++] = grayColor;
                    rgbData[offset++] = grayColor;
                }
                return rgbData;
            }
            else if (this.numComponents === 3 && this._isColorConversionNeeded) {
                return this._convertYccToRgb(data, needAlpha);
            }
            else if (this.numComponents === 4) {
                if (this._isColorConversionNeeded) {
                    if (forceRGB) {
                        return this._convertYcckToRgb(data);
                    }
                    return this._convertYcckToCmyk(data);
                }
                else if (forceRGB) {
                    return this._convertCmykToRgb(data);
                }
            }
            return data;
        },
    };
    return JpegImage;
})();
var WeChatUI;
(function (WeChatUI) {
    var Config = (function () {
        function Config() {
        }
        Object.defineProperty(Config, "backstage_url", {
            get: function () {
                return DEBUG ? this.ts_backstage : this.dev_backstage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Config, "notice_url", {
            get: function () {
                return DEBUG ? this.ts_notice : this.dev_notice;
            },
            enumerable: true,
            configurable: true
        });
        Config.dev_backstage = "https://api.s1.l2i.cc/game.php/";
        Config.ts_backstage = "https://api.s1.l2i.cc/game.php/";
        Config.dev_notice = "https://api.s1.l2i.cc:82/Notice/noticeList";
        Config.ts_notice = "https://api.s1.l2i.cc:82/Notice/noticeList";
        return Config;
    }());
    WeChatUI.Config = Config;
})(WeChatUI || (WeChatUI = {}));
var WeChatUI;
(function (WeChatUI) {
    var View = laya.ui.View;
    var LoadingViewUI = (function (_super) {
        __extends(LoadingViewUI, _super);
        function LoadingViewUI() {
            return _super.call(this) || this;
        }
        LoadingViewUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(WeChatUI.LoadingViewUI.uiView);
        };
        LoadingViewUI.uiView = { "type": "View", "props": { "width": 720, "height": 1280, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": -140, "x": -120, "var": "bgImg", "skin": "login/loading_bj.jpg" } }, { "type": "Box", "props": { "y": 1040, "x": 0, "width": 720, "var": "proDiv", "name": "proDiv", "height": 240 }, "child": [{ "type": "Image", "props": { "y": -37, "x": 107, "width": 506, "var": "progressBg1", "skin": "login/progress_jz_jdt1_0.png", "height": 26 } }, { "type": "Image", "props": { "y": 5, "x": 107, "width": 506, "var": "progressBg2", "skin": "login/progress_jz_jdt1_0.png", "height": 26 } }, { "type": "Image", "props": { "y": -31, "x": 121, "width": 478, "var": "progressBar1", "skin": "login/progress_jz_jdt_1.png", "height": 14 } }, { "type": "Image", "props": { "y": 11, "x": 121, "width": 478, "var": "progressBar2", "skin": "login/progress_jz_jdt_1.png", "height": 14 } }, { "type": "Text", "props": { "y": -75, "x": 0, "width": 720, "var": "proLabel", "text": "正在进入场景......", "strokeColor": "#ffffff", "stroke": 2, "fontSize": 24, "font": "SimHei", "color": "#581a1a", "align": "center" } }, { "type": "Text", "props": { "y": -36, "x": 0, "width": 720, "var": "proLabel1", "text": "10/100%", "strokeColor": "#581A1A", "stroke": 3, "fontSize": 24, "font": "SimHei", "color": "#FFFFFF", "align": "center" } }, { "type": "Text", "props": { "y": 6, "x": 0, "width": 720, "var": "proLabel2", "text": "10/100%", "strokeColor": "#581A1A", "stroke": 3, "fontSize": 24, "font": "SimHei", "color": "#FFFFFF", "align": "center" } }, { "type": "Text", "props": { "y": 51, "x": 0, "width": 720, "text": "首次加载耗时较长，再等等就好了哦~", "strokeColor": "#000000", "stroke": 2, "fontSize": 24, "font": "SimHei", "color": "#8cff9f", "align": "center" } }, { "type": "Text", "props": { "y": 94, "x": 0, "width": 720, "text": "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。", "strokeColor": "#021224", "stroke": 2, "fontSize": 20, "font": "SimHei", "color": "#FFFFFF", "align": "center" } }, { "type": "Text", "props": { "y": 125, "x": 0, "width": 720, "text": "适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。", "strokeColor": "#021224", "stroke": 2, "fontSize": 20, "font": "SimHei", "color": "#FFFFFF", "align": "center" } }, { "type": "Text", "props": { "y": 165, "x": 0, "width": 720, "var": "txt1", "text": "审批文号：新广出审[2018]453号，著作权人：成都贪玩蛇科技有限公司，", "strokeColor": "#021224", "stroke": 2, "fontSize": 18, "font": "SimHei", "color": "#FFFFFF", "align": "center" } }, { "type": "Text", "props": { "y": 195, "x": 0, "width": 720, "var": "txt2", "text": "出版单位：北京畅元国讯科技有限公司，出版物号：ISBN 978-7-498-03918", "strokeColor": "#021224", "stroke": 2, "fontSize": 18, "font": "SimHei", "color": "#FFFFFF", "align": "center" } }, { "type": "Text", "props": { "y": 222, "x": 0, "width": 720, "var": "verTxt", "text": "游戏版本：", "strokeColor": "#021224", "stroke": 2, "fontSize": 18, "font": "SimHei", "color": "#FFFFFF", "align": "center" } }] }] };
        return LoadingViewUI;
    }(View));
    WeChatUI.LoadingViewUI = LoadingViewUI;
    var LoginViewUI = (function (_super) {
        __extends(LoginViewUI, _super);
        function LoginViewUI() {
            return _super.call(this) || this;
        }
        LoginViewUI.prototype.createChildren = function () {
            View.regComponent("Text", laya.display.Text);
            View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
            _super.prototype.createChildren.call(this);
            this.createView(WeChatUI.LoginViewUI.uiView);
        };
        LoginViewUI.uiView = { "type": "View", "props": { "width": 720, "height": 1280, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": -140, "x": -120, "skin": "login/image_xfy_bg2.jpg" } }, { "type": "Image", "props": { "y": 913, "x": 124, "var": "serverBtn", "skin": "login/btn_xfy_xq.png" } }, { "type": "Button", "props": { "y": 1000, "x": 188, "var": "loginBtn", "stateNum": 1, "skin": "login/btn_xfy_dlyx.png" } }, { "type": "Image", "props": { "y": 925, "x": 155, "var": "stateImg", "skin": "login/image_xfy_ct.png" } }, { "type": "Image", "props": { "y": 49, "x": 541, "var": "notice", "skin": "login/bth_gonggao.png" } }, { "type": "Label", "props": { "y": 1126, "x": 0, "wordWrap": true, "width": 720, "text": "抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。", "strokeColor": "#021224", "stroke": 2, "leading": 6, "height": 22, "fontSize": 22, "font": "SimHei", "color": "#FFFFFF", "align": "center" } }, { "type": "Label", "props": { "y": 926, "x": 210, "width": 300, "var": "serverName", "fontSize": 30, "font": "SimHei", "color": "#51628D", "align": "center" } }, { "type": "Label", "props": { "y": 926, "x": 496, "width": 100, "var": "huanqu", "valign": "middle", "text": "换区>", "height": 30, "fontSize": 30, "font": "SimHei", "color": "#51628D", "align": "center" } }, { "type": "Label", "props": { "y": 1200, "x": 0, "wordWrap": true, "width": 720, "text": "著作权人：镇江微端网络科技有限公司 出版单位：上海都玩网络科技有限公司", "strokeColor": "#021224", "stroke": 2, "fontSize": 16, "font": "SimHei", "color": "#FFFFFF", "align": "center" } }, { "type": "Label", "props": { "y": 1230, "x": 0, "wordWrap": true, "width": 720, "text": "审批文号：新广出审【2016】2609号 出版物号：ISBN ：ISBN 978-7-7979-1212-9", "strokeColor": "#021224", "stroke": 2, "fontSize": 16, "font": "SimHei", "color": "#FFFFFF", "align": "center" } }, { "type": "Label", "props": { "y": 1156, "x": 0, "wordWrap": true, "width": 720, "text": "适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。", "strokeColor": "#021224", "stroke": 2, "leading": 6, "height": 22, "fontSize": 22, "font": "SimHei", "color": "#FFFFFF", "align": "center" } }, { "type": "Text", "props": { "y": 1260, "x": 10, "width": 720, "var": "verText", "text": "游戏版本：", "strokeColor": "#021224", "stroke": 2, "fontSize": 18, "font": "SimHei", "color": "#FFFFFF", "align": "center" } }, { "type": "Label", "props": { "y": 727, "x": 0, "wordWrap": true, "width": 720, "visible": false, "var": "prompt", "text": "当前服务器正在维护中", "strokeColor": "#021224", "stroke": 2, "leading": 6, "height": 36, "fontSize": 36, "font": "SimHei", "color": "#ff3333", "align": "center" } }, { "type": "Box", "props": { "y": -140, "x": -120, "width": 960, "visible": false, "var": "serverBox", "height": 1560 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 960, "var": "serverBG", "skin": "login/image_common_zz.png", "sizeGrid": "1,1,1,1", "height": 1560, "alpha": 0.7 } }, { "type": "Image", "props": { "y": 290, "x": 142, "skin": "login/image_xfy_xfbg.png", "mouseThrough": false, "mouseEnabled": true } }, { "type": "Image", "props": { "y": 322, "x": 763, "var": "closeSever", "stateNum": 1, "skin": "login/btn_tongyong_13.png" } }, { "type": "Panel", "props": { "y": 430, "x": 198, "width": 182, "var": "serverPanel", "vScrollBarSkin": "login/image_common_zz.png", "height": 695 }, "child": [{ "type": "Tab", "props": { "y": 0, "x": 0, "var": "serverGroup", "strokeColors": "#666699,#ffffff", "stateNum": 2, "skin": "login/serverGroup.png", "selectedIndex": 0, "labelStroke": 2, "labelSize": 26, "labelFont": "SimHei", "labelColors": "#ffffff,#996633", "direction": "vertical" } }] }, { "type": "List", "props": { "y": 429, "x": 398, "width": 352, "var": "serverList", "vScrollBarSkin": "login/image_common_zz.png", "repeatX": 1, "height": 692 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "var": "serverItem", "stateNum": 1, "skin": "login/btn_xfy_fwq.png", "renderType": "render" }, "child": [{ "type": "Label", "props": { "y": 19, "x": 0, "wordWrap": true, "width": 352, "var": "itemServerName", "text": "已有角色", "name": "itemServerName", "height": 22, "fontSize": 22, "font": "SimHei", "color": "#564674", "align": "center" } }, { "type": "Image", "props": { "y": 12, "x": 21, "var": "itemServerState", "skin": "login/image_xfy_ct.png", "name": "itemServerState" } }] }] }, { "type": "Label", "props": { "y": 717, "x": 120, "wordWrap": true, "width": 720, "visible": false, "text": "当前服务器正在维护中", "strokeColor": "#021224", "stroke": 2, "leading": 6, "height": 36, "fontSize": 36, "font": "SimHei", "color": "#ff3333", "align": "center" } }, { "type": "Label", "props": { "y": 1202, "x": 382, "width": 196, "text": "点击空白处退出", "name": "ExitPromptText", "height": 28, "fontSize": 28, "font": "SimHei", "color": "#CACACA" } }] }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 720, "visible": false, "var": "noticeBox", "height": 1280 }, "child": [{ "type": "Image", "props": { "y": -140, "x": -120, "width": 960, "var": "noticeBG", "skin": "login/image_common_zz.png", "sizeGrid": "1,1,1,1", "height": 1560, "alpha": 0.7 } }, { "type": "Image", "props": { "y": 182, "x": 25, "skin": "login/image_xfy_gg.png", "mouseThrough": false, "mouseEnabled": true } }, { "type": "Image", "props": { "y": 213, "x": 645, "var": "closeNotice", "stateNum": 1, "skin": "login/btn_tongyong_13.png" } }, { "type": "Tab", "props": { "y": 976, "x": 60, "var": "noticeTab", "strokeColors": "#9e4c65,#ffffff,#fffff,#9e4c65", "stateNum": 2, "skin": "login/noticeBtn2.png", "labels": "label1,label2", "labelStroke": 2, "labelSize": 26, "labelFont": "SimHei", "labelColors": "#ffffff,#9e4c65,#9e4c65,#fffff", "direction": "horizontal" } }, { "type": "Label", "props": { "y": 252, "x": 245, "width": 220, "var": "noticeTitle", "text": "公告", "height": 28, "fontSize": 28, "font": "SimHei", "color": "#666699", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 1093, "x": 254, "width": 196, "text": "点击空白处退出", "height": 28, "fontSize": 28, "font": "SimHei", "color": "#CACACA" } }, { "type": "Panel", "props": { "y": 323, "x": 79, "width": 560, "var": "noticePanel", "vScrollBarSkin": "login/image_common_zz.png", "height": 610 }, "child": [{ "type": "HTMLDivElement", "props": { "y": 0, "x": 0, "width": 560, "var": "noticeContent", "innerHTML": "htmlText", "height": 886 } }] }] }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 720, "visible": false, "var": "nonageBox", "height": 1280 }, "child": [{ "type": "Image", "props": { "y": -140, "x": -120, "width": 960, "var": "nonageBG", "skin": "login/image_common_zz.png", "sizeGrid": "1,1,1,1", "height": 1560, "alpha": 0.7 } }, { "type": "Image", "props": { "y": 182, "x": 22, "skin": "login/xfy_gxbg.png", "mouseThrough": false, "mouseEnabled": true } }, { "type": "Image", "props": { "y": 213, "x": 639, "var": "closeNonage", "stateNum": 1, "skin": "login/btn_tongyong_13.png" } }, { "type": "Label", "props": { "y": 252, "x": 245, "width": 220, "var": "nonageTitle", "text": "适龄提示", "name": "titleLittle", "height": 28, "fontSize": 28, "font": "SimHei", "color": "#666699", "bold": true, "align": "center" } }, { "type": "Label", "props": { "y": 1093, "x": 254, "width": 196, "text": "点击空白处退出", "height": 28, "fontSize": 28, "font": "SimHei", "color": "#CACACA" } }, { "type": "HTMLDivElement", "props": { "y": 318, "x": 74, "width": 560, "var": "nonageContent", "innerHTML": "htmlText", "height": 700 } }] }, { "type": "Image", "props": { "y": 50, "x": 647, "var": "nonage", "skin": "login/img_slts_16.png" } }] };
        return LoginViewUI;
    }(View));
    WeChatUI.LoginViewUI = LoginViewUI;
})(WeChatUI || (WeChatUI = {}));
var WeChatUI;
(function (WeChatUI) {
    var Loading = (function (_super) {
        __extends(Loading, _super);
        function Loading() {
            var _this = _super.call(this) || this;
            _this.maxProgress = 6;
            _this.init();
            _this.onEven();
            return _this;
        }
        Loading.prototype.init = function () {
            this.verTxt.text = "\u6E38\u620F\u7248\u672C\uFF1A" + gameVersion;
            loadView = this;
            this.centerY = 0;
            this.nowProgress = 0;
            this.nowProgress2 = 0;
            this.maxWidth = this.progressBar1.width;
            this.progressBar1.width = this.progressBar2.width = 0;
            this.proLabel1.text = this.proLabel2.text = "0%";
            this.arr = [];
            this.upProgress("加载主程序.....");
            var loadTask = wx.loadSubpackage({
                name: 'wechat_main',
                success: function (res) {
                    console.log("分包加载成功   ", res);
                    Laya.URL.basePath = "http://192.168.31.223:8901/bin";
                    enterGame(userData);
                },
                fail: function (res) {
                    console.log("分包加载失败   ", res);
                }
            });
            loadTask.onProgressUpdate(function (res) {
                console.log('下载进度', res.progress);
                console.log('已经下载的数据长度', res.totalBytesWritten);
                console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
            });
            Laya.timer.loop(100, this, this.upProgress2);
        };
        Loading.prototype.upProgress = function (text) {
            if (this.nowProgress == this.maxProgress) {
                return;
            }
            this.nowProgress++;
            this.nowProgress2 = 0;
            var p = this.nowProgress / this.maxProgress;
            this.progressBar2.width = p * this.maxWidth;
            this.proLabel2.text = Math.floor(p * 100) + "%";
            this.proLabel.text = text;
            if (this.nowProgress == this.maxProgress) {
                Laya.timer.once(loadingTime, this, this.open);
            }
        };
        Loading.prototype.upProgress2 = function () {
            if (this.nowProgress2 < 99) {
                this.nowProgress2++;
                this.progressBar1.width = this.nowProgress2 / 100 * this.maxWidth;
                this.proLabel1.text = this.nowProgress2 + "%";
            }
        };
        Loading.prototype.open = function () {
            this.destroy();
            MainResetStage();
        };
        Loading.prototype.onEven = function () {
        };
        Loading.prototype.destroy = function () {
            Laya.timer.clearAll(this);
            loadView = null;
            _super.prototype.destroy.call(this, true);
        };
        return Loading;
    }(WeChatUI.LoadingViewUI));
    WeChatUI.Loading = Loading;
})(WeChatUI || (WeChatUI = {}));
var pack = "8891";
var cdn = "https://h5test.s1.l2i.cc/wx";
var tsCdn = "https://h5test.s1.l2i.cc/wx";
var devCdn = "https://h5test.s1.l2i.cc/wx";
var WeChatUI;
(function (WeChatUI) {
    var Event = Laya.Event;
    var Login = (function (_super) {
        __extends(Login, _super);
        function Login() {
            var _this = _super.call(this) || this;
            _this.sdkLoginNumber = 3;
            _this.gameLoginNumber = 3;
            _this.init();
            _this.onEven();
            return _this;
        }
        Login.prototype.init = function () {
            var _this = this;
            this.sdkLoginNumber = 3;
            this.gameLoginNumber = 3;
            this.prompt.visible = false;
            this.centerY = 0;
            this.verText.text = "\u6E38\u620F\u7248\u672C\uFF1A" + gameVersion;
            QCSDK.init({ game_ver: gameVersion }, function (data) {
                if (data.develop == 1) {
                    cdn = tsCdn;
                }
                else {
                    cdn = devCdn;
                }
                console.log("kkk sdk初始化完成  调起sdk登录");
                QCSDK.login(_this.sdkLoginBack.bind(_this));
            });
            this.serverPanel.vScrollBar.visible = false;
            this.noticePanel.vScrollBar.visible = false;
            var a = this.serverList;
            a._scrollBar.visible = false;
            this.serverGroup.selectHandler = Laya.Handler.create(this, this.choose, null, false);
            this.serverList.renderHandler = Laya.Handler.create(this, this.onListRender, null, false);
            this.serverList.selectHandler = Laya.Handler.create(this, this.chooseServer, null, false);
            this.serverList.selectEnable = true;
            this.noticeContent.color = this.nonageContent.color = "#666699";
            this.noticeContent.style.fontSize = this.nonageContent.style.fontSize = 22;
            this.noticeContent.style.fontFamily = this.nonageContent.style.fontFamily = "SimHei";
            this.noticeContent.style.lineHeight = this.nonageContent.style.lineHeight = 26;
            this.nonageContent.innerHTML = NONAGE_TEXT;
            this.nonageTitle.text = "适龄提示";
            this.noticeTab.selectHandler = Laya.Handler.create(this, this.chooseNotice, null, false);
        };
        Login.prototype.sdkLoginBack = function (status, data) {
            console.log("kkk sdk 登录返回：" + status);
            if (status == 0) {
                var j = {};
                j["partner_id"] = 4;
                j["game_pkg"] = "lmfbs1_mhdlxyx_M";
                j["platform"] = "minGame";
                j["user_id"] = data.userid;
                j["token"] = data.token;
                var str = encodeURIComponent(JSON.stringify(j));
                var http = new Laya.HttpRequest();
                http.send(WeChatUI.Config.backstage_url + "game/login/" + pack + "/" + str, null, "get");
                http.once(Laya.Event.COMPLETE, this, this.loginCallBack.bind(this));
            }
            else {
                this.sdkLoginNumber--;
                if (this.sdkLoginNumber > 0) {
                    QCSDK.login(this.sdkLoginBack.bind(this));
                }
                else {
                    this.prompt.text = "SDK 登陆失败，CODE:" + status;
                    this.prompt.visible = true;
                }
            }
        };
        Login.prototype.loginCallBack = function (data) {
            data = JSON.parse(data);
            if (!data) {
                this.gameLoginNumber--;
                if (this.gameLoginNumber > 0) {
                    QCSDK.login(this.sdkLoginBack.bind(this));
                }
                else {
                    this.prompt.text = "游戏服登陆失败，返回数据为空";
                    this.prompt.visible = true;
                }
                return;
            }
            if (data.errCode === 200) {
                var JiaData = new WeChatUI.UserData();
                var data = data.data;
                var server = data.s;
                JiaData.account = data.user.openId;
                JiaData.uid = data.user.openId;
                JiaData.channel = data.channel;
                JiaData.package = data.package;
                JiaData.mac = '';
                if (!data.cdn || data.cdn == "") {
                    JiaData.cdn = cdn;
                }
                else {
                    JiaData.cdn = data.cdn;
                }
                JiaData.rvtype = 0;
                JiaData.newregister = data.newregister;
                JiaData.sign = data.sign;
                var serverSelect = {
                    'server_id': server.server_id,
                    'name': server.name,
                    'server_num': parseInt(server.server_num),
                    'channel_num': parseInt(server.channel_num),
                    'server_addr': server.server_addr,
                    'server_port': parseInt(server.server_port),
                    'status': parseInt(server.status),
                    'tick': parseInt(server.tick),
                    'sign': server.sign,
                    'package': parseInt(data.package),
                    'cdn': ''
                };
                JiaData.selected_server = serverSelect;
                userData = JiaData;
                console.log("kk", userData);
                if (userData.newregister == 1) {
                    this.login();
                }
                else {
                    this.upSelectedServer();
                    this.serverName.visible = this.serverBtn.visible = this.stateImg.visible = this.huanqu.visible = this.notice.visible = this.nonage.visible = this.loginBtn.visible = true;
                    this.getNotice();
                }
            }
            else {
                this.gameLoginNumber--;
                if (this.gameLoginNumber > 0) {
                    QCSDK.login(this.sdkLoginBack.bind(this));
                }
                else {
                    this.prompt.text = "游戏服登陆失败，CODE:" + data.errCode;
                    this.prompt.visible = true;
                }
                return;
            }
        };
        Login.prototype.onEven = function () {
            this.serverBtn.on(Event.CLICK, this, this.openDialog, [0]);
            this.closeSever.on(Event.CLICK, this, this.closeDialog, [0]);
            this.serverBG.on(Event.CLICK, this, this.closeDialog, [0]);
            this.nonage.on(Event.CLICK, this, this.openDialog, [1]);
            this.closeNonage.on(Event.CLICK, this, this.closeDialog, [1]);
            this.nonageBG.on(Event.CLICK, this, this.closeDialog, [1]);
            this.notice.on(Event.CLICK, this, this.openDialog, [2]);
            this.closeNotice.on(Event.CLICK, this, this.closeDialog, [2]);
            this.noticeBG.on(Event.CLICK, this, this.closeDialog, [2]);
            this.loginBtn.on(Event.CLICK, this, this.login);
        };
        Login.prototype.openDialog = function (type) {
            if (type == 0) {
                this.serverPanel.visible = false;
                this.serverList.visible = false;
                this.serverBox.visible = true;
                this.req_server_list();
            }
            else if (type == 1) {
                this.nonageBox.visible = true;
            }
            else if (type == 2) {
                this.openNotice(0);
            }
        };
        Login.prototype.closeDialog = function (type) {
            if (type == 0) {
                this.serverBox.visible = false;
            }
            else if (type == 1) {
                this.nonageBox.visible = false;
            }
            else if (type == 2) {
                this.noticeBox.visible = false;
            }
        };
        Login.prototype.login = function () {
            var loading = new WeChatUI.Loading();
            Laya.stage.addChild(loading);
            this.destroy();
        };
        Login.prototype.choose = function (index) {
            this.serverList.array = this.serverArr[index];
        };
        Login.prototype.chooseServer = function (index) {
            userData.selected_server = this.serverArr[this.serverGroup.selectedIndex][index];
            this.upSelectedServer();
            this.serverBox.visible = false;
        };
        Login.prototype.onListRender = function (item, index) {
            var label = item.getChildByName("itemServerName");
            var img = item.getChildByName("itemServerState");
            var serverInfo = this.serverArr[this.serverGroup.selectedIndex][index];
            label.text = serverInfo.name;
            if (serverInfo.status === 2) {
                img.skin = "login/image_xfy_ct.png";
            }
            else if (serverInfo.status === 1) {
                img.skin = "login/image_xfy_fm.png";
            }
            else if (serverInfo.status === -1) {
                img.skin = "login/image_xfy_wh.png";
            }
        };
        Login.prototype.req_server_list = function () {
            var str = base64_encode("game/allServer/" + userData.channel + "/" + userData.package + "/" + userData.account + "/" + userData.rvtype + "/" + userData.sign);
            var hppt = new Laya.HttpRequest();
            hppt.send(WeChatUI.Config.backstage_url + str, null, "get");
            hppt.once(Laya.Event.COMPLETE, this, this.serverListBack);
        };
        Login.prototype.serverListBack = function (data) {
            data = JSON.parse(data);
            if (!data.errCode) {
                return;
            }
            for (var i = 0; i < data.z.length; i++) {
                if (i != 0) {
                    this.serverGroupArr = this.serverGroupArr + "," + data.z[i];
                }
                else {
                    this.serverGroupArr = "" + data.z[i];
                }
            }
            this.serverArr = data.s;
            this.serverGroup.labels = this.serverGroupArr;
            this.serverGroup.selectedIndex = 0;
            this.serverList.array = this.serverArr[0];
            this.serverPanel.visible = true;
            this.serverList.visible = true;
        };
        Login.prototype.upSelectedServer = function () {
            this.serverName.text = userData.selected_server.name;
            if (userData.selected_server.status === 2) {
                this.stateImg.skin = "login/image_xfy_ct.png";
            }
            else if (userData.selected_server.status === 1) {
                this.stateImg.skin = "login/image_xfy_fm.png";
            }
            else if (userData.selected_server.status === -1) {
                this.stateImg.skin = "login/image_xfy_wh.png";
            }
        };
        Login.prototype.getNotice = function () {
            var data = {
                groupId: GROUP_ID
            };
            var hppt = new Laya.HttpRequest();
            hppt.send(WeChatUI.Config.notice_url, data, "post");
            hppt.once(Laya.Event.COMPLETE, this, this.noticeBack);
        };
        Login.prototype.noticeBack = function (data) {
            data = JSON.parse(data);
            if (data.code != 0) {
                this.noticeData = [{ title: '公告', contents: '暂无公告', version: 0 }];
                return;
            }
            this.noticeData = data.data;
            if (this.noticeData.length == 0) {
                this.noticeData = [{ title: '公告', contents: '暂无公告', version: 0 }];
                return;
            }
            var openIndex = -1;
            for (var i = 0; i < this.noticeData.length; i++) {
                if (i == 3) {
                    break;
                }
                if (i == 0) {
                    this.noticTitles = this.noticeData[i].title;
                }
                else {
                    this.noticTitles = this.noticTitles + "," + this.noticeData[i].title;
                }
                var ver = Number(localStorage.getItem("NoticeVersion" + i));
                if (ver == undefined) {
                    ver = -1;
                }
                if (openIndex == -1 && ver < this.noticeData[i].version) {
                    openIndex = i;
                }
            }
            if (userData.newregister != 1 && openIndex != -1) {
                this.openNotice(openIndex);
                localStorage.setItem("NoticeVersion" + openIndex, this.noticeData[openIndex].version + "");
            }
        };
        Login.prototype.chooseNotice = function (index) {
            this.noticeContent.innerHTML = this.htmlDecodeByRegExp(this.noticeData[index].contents);
            this.noticeTitle.text = this.noticeData[index].title;
        };
        Login.prototype.openNotice = function (index) {
            this.noticeBox.visible = true;
            if (this.noticeData.length < 2) {
                this.noticeTab.visible = false;
            }
            else {
                this.noticeTab.labels = this.noticTitles;
                this.noticeTab.visible = true;
                this.noticeTab.selectedIndex = index;
                if (this.noticeData.length == 2) {
                    this.noticeTab.skin = "login/noticeBtn2.png";
                }
                else {
                    this.noticeTab.skin = "login/noticeBtn3.png";
                }
            }
            this.noticeContent.innerHTML = this.htmlDecodeByRegExp(this.noticeData[index].contents);
            this.noticeTitle.text = this.noticeData[index].title;
        };
        Login.prototype.htmlDecodeByRegExp = function (str) {
            var temp = "";
            if (str.length == 0)
                return "";
            temp = str.replace(/&amp;/g, "&");
            temp = temp.replace(/&lt;/g, "<");
            temp = temp.replace(/&gt;/g, ">");
            temp = temp.replace(/&nbsp;/g, " ");
            temp = temp.replace(/&#39;/g, "\'");
            temp = temp.replace(/&quot;/g, "\"");
            temp = temp.replace(/&mdash;/g, "——");
            return temp;
        };
        Login.prototype.destroy = function () {
            this.closeSever.off(Event.CLICK, this, this.closeDialog);
            this.serverBG.off(Event.CLICK, this, this.closeDialog);
            this.closeNonage.off(Event.CLICK, this, this.closeDialog);
            this.nonageBG.off(Event.CLICK, this, this.closeDialog);
            this.closeNotice.off(Event.CLICK, this, this.closeDialog);
            this.noticeBG.off(Event.CLICK, this, this.closeDialog);
            this.serverBtn.off(Event.CLICK, this, this.openDialog);
            this.nonage.off(Event.CLICK, this, this.openDialog);
            this.notice.off(Event.CLICK, this, this.openDialog);
            this.loginBtn.off(Event.CLICK, this, this.login);
            this.serverGroup.selectHandler.clear();
            this.serverGroup.selectHandler = null;
            this.serverList.renderHandler.clear();
            this.serverList.renderHandler = null;
            this.serverList.selectHandler.clear();
            this.serverList.selectHandler = null;
            this.noticeTab.selectHandler.clear();
            this.noticeTab.selectHandler = null;
            _super.prototype.destroy.call(this, true);
        };
        return Login;
    }(WeChatUI.LoginViewUI));
    WeChatUI.Login = Login;
    function beginLoad() {
        Laya.loader.load("res/atlas/login.atlas", Laya.Handler.create(null, onLoadedComplete));
    }
    function onLoadedComplete() {
        var login = new Login();
        Laya.stage.addChild(login);
    }
    Laya.MiniAdpter.init();
    Laya.init(720, 1280, Laya.WebGL);
    Laya.stage.scaleMode = laya.display.Stage.SCALE_FIXED_AUTO;
    Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
    Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
    Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
    beginLoad();
})(WeChatUI || (WeChatUI = {}));
var WeChatUI;
(function (WeChatUI) {
    var UserData = (function () {
        function UserData() {
        }
        return UserData;
    }());
    WeChatUI.UserData = UserData;
    var ServerInfo = (function () {
        function ServerInfo() {
        }
        return ServerInfo;
    }());
    WeChatUI.ServerInfo = ServerInfo;
    var NoticeData = (function () {
        function NoticeData() {
        }
        return NoticeData;
    }());
    WeChatUI.NoticeData = NoticeData;
})(WeChatUI || (WeChatUI = {}));
//# sourceMappingURL=wechat_login.js.map