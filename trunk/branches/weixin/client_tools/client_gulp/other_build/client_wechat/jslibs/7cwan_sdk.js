var config = {
    game_id: '2',
    game_pkg: 'lmfbs1_mhdlxyx_M',
    partner_id: '4',
    is_auth: false,  //授权登录
    from: null //来源
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
            // wx.onShow(function(res){});
            game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log("new[SDK]CP调用init接口",ops);
            // var self = this;

            var uuid = wx.getStorageSync('plat_uuid');
            var is_new;
            if (!uuid) {
                uuid = obj.uuid(16, 32);
                wx.setStorageSync('plat_uuid', uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync('plat_idfv');
            if(!idfv){
                idfv = obj.uuid(16, 32);
                wx.setStorageSync('plat_idfv', idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log("[SDK]小游戏启动参数",info);
            console.log("[SDK]小游戏is_new",is_new);

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync('plat_ad_code', info.query.ad_code);
            }

            // 获取头条进入的参数,clue_token
            // if (is_new && info.query && info.query.clue_token) {
            //     wx.setStorageSync('plat_clue_token', info.query.clue_token);
            // }

            // 把进入小游戏的参数，一并保存
            var queryStr = JSON.stringify(info.query);
            if (is_new && queryStr != '{}') {
                wx.setStorageSync('plat_wx_query', JSON.stringify(info.query));
            }

            //用户来源，如："txcps"
            if (info.query && info.query.from && info.query.from!="") {
                if (is_new) wx.setStorageSync('plat_from', info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync('plat_from');
                if(!from && from!="") config.from = from;
            }
            // config.from = "txcps"
            // console.log(config.from);

            var data = {
                install: is_new,
                scene: scene
            };
            obj.log('start', data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //判断版本号
            if(game_ver){
                obj.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },
        //登录接口
        login: function ( callback) {
            console.log("new[SDK]调起登录");
            var self = this;
            callbacks['login'] = typeof callback == 'function' ? callback : null;
            
            //授权登录
            if(config.is_auth){
                wx.getSetting({
                    success: function (res) {
                        if(res.authSetting['scope.userInfo']){
                            console.log("[SDK]获得授权设置：已授权");
                            self.do_login();//已授权
                        }else{
                            console.log("[SDK]获得授权设置：未授权");
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
                            button.onTap((res) => {
                                console.log(res);
                                wxShowLoading({ title: '正在登录游戏' });
                                if(res.errMsg == 'getUserInfo:ok'){
                                    self.do_login({
                                        head_img: res.userInfo.avatarUrl || '',
                                        nick_name: res.userInfo.nickName || '',
                                    });
                                }else{
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
            }else{
                console.log("[SDK]授权登录"+config.is_auth);
                self.do_login();
            }
        },

        do_login: function (info) {
            var self = this;
            wx.login({
                success: function(res) {
                    console.log("微信登录成功返回" + JSON.stringify(res));
                    if (res.code) {
                        //发起网络请求

                        var public_data = self.getPublicData();
                        public_data['mo'] = 1;
                        public_data['code'] = res.code;
                        public_data['nick_name'] = info ? info.nick_name : '';
                        public_data['head_img'] = info ? info.head_img : '';

                        if(config.is_auth) {
                            wx.getUserInfo({
                                success: function(res6) {
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
                                            'content-type': 'application/x-www-form-urlencoded' // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log("new[SDK]登录结果：");
                                            console.log(res);
                                            if(res.statusCode == 200){
                                                var data = res.data;
                                                if(data.state){
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

                                                        // 兼容新版腾讯广告投放-通过监测链接的方式，该方式进入小游戏，路径是没有带参数的
                                                        // 因此，ad_code需要通过后端接口返回
                                                        var ad_code = wx.getStorageSync('plat_ad_code');
                                                        if (!ad_code && data.data.ad_code!="") {
                                                            wx.setStorageSync('plat_ad_code', data.data.ad_code);
                                                        }
                                                        if(data.data.ext){
                                                            wx.setStorageSync('plat_session_key', data.data.ext);
                                                        }
                                                    } catch (e) {
                                                    }

                                                    callbacks['login'] && callbacks['login'](0, userData);
                                                }else{
                                                    callbacks['login'] && callbacks['login'](1, {errMsg: data.msg});
                                                }
                                            }else{
                                                callbacks['login'] && callbacks['login'](1, {errMsg: '请求平台服务器失败！#1'});
                                            }
                                        },
                                        fail: function (res) {
                                            callbacks['login'] && callbacks['login'](1, {errMsg: res.errMsg});
                                        }
                                    });
                                },
                                fail: function (res6) {
                                    callbacks['login'] && callbacks['login'](1, {errMsg: res6.errMsg});
                                }
                            });
                        } else {
                            wx.request({
                                url: HOST + '/partner/auth',
                                method: 'POST',
                                dataType: 'json',
                                header: {
                                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log("new[SDK]登录结果：");
                                    console.log(res);
                                    if(res.statusCode == 200){
                                        var data = res.data;
                                        if(data.state){
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

                                                // 兼容新版腾讯广告投放-通过监测链接的方式，该方式进入小游戏，路径是没有带参数的
                                                // 因此，ad_code需要通过后端接口返回
                                                var ad_code = wx.getStorageSync('plat_ad_code');
                                                if (!ad_code && data.data.ad_code!="") {
                                                    wx.setStorageSync('plat_ad_code', data.data.ad_code);
                                                }

                                                if(data.data.ext){
                                                    wx.setStorageSync('plat_session_key', data.data.ext);
                                                }
                                            } catch (e) {
                                            }

                                            callbacks['login'] && callbacks['login'](0, userData);
                                        }else{
                                            callbacks['login'] && callbacks['login'](1, {errMsg: data.msg});
                                        }
                                    }else{
                                        callbacks['login'] && callbacks['login'](1, {errMsg: '请求平台服务器失败！#2'});
                                    }
                                }
                            });
                        }
                    } else {
                        callbacks['login'] && callbacks['login'](1, {errMsg: res.errMsg});
                    }
                },
                fail: function (res) {
                    console.log("微信登录失败" + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf('auth deny') > -1 ||     res.errMsg.indexOf('auth denied') > -1 ) {
                        // 处理用户拒绝授权的情况
                        callbacks['login'] && callbacks['login'](1, {errMsg: res.errMsg});
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
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log("[SDK]获取游戏版本结果");
                    console.log(res);
                    if(res.statusCode == 200){
                        var data = res.data;
                        if(data.state){
                            callback && callback(data.data);
                        }else{
                            callback && callback({develop: 0});
                        }
                    }else{
                        callback && callback({develop: 0});
                    }
                },
                fail: function(res){
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

        //支付接口
        startPay: function(data, callback){
            console.log("[SDK]调起支付，CP传值：");
            console.log(data);

            var self = this;
            callbacks['pay'] = typeof callback == 'function' ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            var session_key = wx.getStorageSync('plat_session_key');
            if(!sdk_token || !session_key){
                callbacks['pay'] && callbacks['pay'](1, {errMsg: "用户未登录，支付失败！"});
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

            //发起网络请求
            wx.request({
                url: HOST + '/partner/order',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log("[SDK]完成创建订单");
                    console.log(res);
                    if(res.statusCode == 200){
                        var data = res.data;
                        if(data.state){
                            //小程序
                            if(typeof wx.requestPayment == 'undefined'){
                                // if(data.data.platform == 'android'){
                                if(sysInfo.platform == 'android' || sysInfo.platform == 'windows' || sysInfo.platform == 'devtools'){
                                    if(data.data.is_android_pay){
                                        self.kfPay(data.data);
                                    }else{
                                        self.gamePay(data.data);
                                    }
                                }else{
                                    if(data.data.is_ios_pay){
                                        if(data.data.ios_pay_type == 1){
                                            self.kfPay(data.data);
                                        }

                                    }else{
                                        wx.showModal({
                                            title: "支付提示",
                                            content: '很抱歉，由于苹果政策，暂时不能支付，安卓手机不受影响',
                                            confirmText: "我知道了",
                                            showCancel: false
                                        });
                                    }
                                }
                            }else{
                                self.minPay(data.data);
                            }

                        }else{
                            callbacks['pay'] && callbacks['pay'](1, {errMsg: data.msg});
                        }
                    }else{
                        callbacks['login'] && callbacks['login'](1, {errMsg: '请求平台服务器失败！#3'});
                    }
                }
            });
        },

        //小游戏支付
        gamePay: function (data) {
            var self = this;
            //游戏币足够，直接扣款
            if(data.buyQuantity <= data.balance){
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
            }else{
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
                        if(res.errMsg == 'requestMidasPayment:ok'){
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if(res.errMsg.indexOf('用户取消') !== -1){
                            callbacks['pay'] && callbacks['pay'](2, {errMsg: "用户取消支付"});
                        }else{
                            callbacks['pay'] && callbacks['pay'](1, {errMsg: "支付失败:" + res.errMsg + '(' + res.errCode + ')'});
                        }
                    },
                    complete: function (res) {

                    }
                });
            }
        },

        kfPay: function (data) {
            //检查订单支付是否完成
            var self = this;
            this_order_id = data.orderId;
            wx.showModal({
                title: "支付提示",
                content: '进入客服会话，点击右下角小卡片或输入"cz"或"充值"获取支付链接',
                showCancel: false,
                confirmText: "我知道了",
                success: function () {
                    var obj = {
                        showMessageCard:true,
                        sendMessageTitle:"不用点这个卡片",
                        sendMessageImg:"https://static.357pk.net/uploads/2109/weixin_pay_img1.png"
                    };
                    wx.openCustomerServiceConversation(obj);
                }
            });

        },

        gameGoPay: function (data, retry) {
            console.log("[SDK]米大师支付完毕，通知服务器发货");
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync('plat_session_key');
            wx.request({
                url: HOST + '/partner/pay/' + config.partner_id + '/' + config.game_pkg + '/',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
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
                    if(res.statusCode == 200){
                        if(res.data.state == 1){
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks['pay'] && callbacks['pay'](0, ret);
                        }else {
                            callbacks['pay'] && callbacks['pay'](1, {errMsg: "支付失败"});
                        }
                    }
                },
                fail: function () {

                }
            });
        },

        //创建角色
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

            if(data.roleid && data.serverid){
                user_game_info = {
                    role_id:  data.roleid,
                    server_id:  data.serverid,
                };
            }

            this.log('create', postData);
        },

        //进入游戏
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

            if(data.roleid && data.serverid){
                user_game_info = {
                    role_id:  data.roleid,
                    server_id:  data.serverid,
                };
            }


            this.log('enter', postData);

        },

        //角色升级
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

            if(data.roleid && data.serverid){
                user_game_info = {
                    role_id:  data.roleid,
                    server_id:  data.serverid,
                };
            }


            this.log('levelup', postData);
        },

        //获取唯一设备码（自定义）
        uuid: function(radix, len){
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            var uuid = [], i;
            radix = radix || chars.length;

            if (len) {
                for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
            } else {
                var r;

                uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
                uuid[14] = '4';

                for (i = 0; i < 36; i++) {
                    if (!uuid[i]) {
                        r = 0 | Math.random()*16;
                        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
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
                sdk_ver: system.version,//存放的是微信版本号
                game_ver: game_ver,//存放的是游戏版本号
                device: system.platform == 'android' ? 1 : 2,
                is_from_min: 1,
                wx_openid: wx_openid,
                wx_query: wx_query
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for(var key in data){
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
                        showMessageCard:true,
                        sendMessageTitle:msg,
                        sendMessageImg:"https://static.357pk.net/uploads/2109/weixin_download_img2.jpg"
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
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
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

        //新版消息检测接口
        checkMsgV2: function (msg, callback) {
            console.log("[SDK]查看文本是否有违规内容");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: HOST + '/game/min/?ac=msgCheckV2',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
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

        // 发送订阅消息
        sendMessage: function (template_id, data, callback) {
            console.log("[SDK]发送订阅消息");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: HOST + '/game/min/?ac=sendMessage',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
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

        // 调用激励视频广告
        videoAdvert: function (advert_type, callback) {
            wx.request({
                url: HOST + '/?method=user.gameConfig',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                },
                success: function (res) {
                    var weixin_advert_id = res.data.data.weixin_advert_id
                    let videoAdv = null;
                    var return_data = {};

                    if(wx.createRewardedVideoAd){
                        // 创建激励视频广告实例，提前初始化
                        videoAdv = wx.createRewardedVideoAd({
                        adUnitId: weixin_advert_id //传入自己的id，此处为视频广告位ID
                        })
                        // 用户触发广告后，显示激励视频广告
                        videoAdv.show().catch(() => {
                            console.log('激励视频 广告显示成功')
                            var status = 'adShow';
                            // 失败重试
                            videoAdv.load()
                                .then(() => videoAdv.show())
                                .catch(err => {
                                    var status = 'adFail';
                                    console.log('激励视频 广告显示失败')
                                })
                            return_data = {
                                advert_type: advert_type,
                                status: status,
                            },
                            callback && callback(return_data);
                        })

                        //拉取异常处理
                        videoAdv.onError((err) => {
                            console.log(err);
                        })

                        try{
                            if(videoAdv.closeHandler){
                                videoAdv.offClose(videoAdv.closeHandler);
                                console.log("videoAdv.offClose卸载成功");
                            }
                        } catch (e) {
                            console.log("videoAdv.offClose 卸载失败");
                            console.error(e);
                        }

                        videoAdv.closeHandler = function(res) {
                            if(!videoAdv)return;
                            videoAdv.offClose();//需要清除回调，否则第N次广告会一次性给N个奖励
                            //关闭
                            if (res && res.isEnded || res === undefined) {
                                console.log('正常播放结束，需要下发奖励'); //正常播放结束，需要下发奖励
                                var status = 'adReWord';
                                return_data = {
                                    advert_type: advert_type,
                                    status: status,
                                },
                                callback && callback(return_data);
                            } else {
                                console.log('播放退出，不下发奖励');//播放退出，不下发奖励
                                var status = 'adClose';
                                return_data = {
                                    advert_type: advert_type,
                                    status: status,
                                },
                                callback && callback(return_data);
                            }
                        }
                        videoAdv.onClose(videoAdv.closeHandler);
                    }
                }
            });
        },

        // 获取游戏配置
        getGameConfig: function (callback) {
            console.log("[SDK]获取游戏配置");
            wx.request({
                url: HOST + '/?method=user.gameConfig',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
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

        // 获取用户转端信息
        getUserZhuanduanInfo: function (callback) {
            console.log("[SDK]获取用户转端信息");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: HOST + '/?method=user.getUserZhuanduanInfo',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
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

        // 打开客服会话
        openService: function () {
            wx.openCustomerServiceConversation()
        },

    }
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
    }
};
exports.getPublicData = function(){
    run('getPublicData');
};

exports.checkMsg = function (data, callback) {
    run('checkMsg', data, callback);
};

exports.checkMsgV2 = function (data, callback) {
    run('checkMsgV2', data, callback);
};

exports.sendMessage = function (template_id, data, callback) {
    run('sendMessage',template_id, data, callback);
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