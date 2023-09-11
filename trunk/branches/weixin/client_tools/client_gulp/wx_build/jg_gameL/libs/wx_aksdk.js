import config from './partner_config.js'
window.config = config;
var PARTNER_SDK = mainSDK();
var HOST = 'sdk.sh9130.com';
var t;
var t_second = 0;
var t_max = 300;
var user_game_info = null;
var user_invite_info = null;
var this_order_id = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

var ad_info = null;

var  develop = 0;
var out_time = 24*60*60*(30)*1000 //15分钟(毫秒格式)

function mainSDK() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log("[SDK]CP调用init接口");
            var self = this;

            var uuid = wx.getStorageSync('plat_uuid');
            var is_new;
            if(!uuid){
                uuid = self.uuid(16, 32);
                wx.setStorageSync('plat_uuid', uuid);
                is_new = 1;
            }else{
                is_new = 0;
            }
            var idfv = wx.getStorageSync('plat_idfv');
            if(!idfv){
                idfv = self.uuid(16, 32);
                wx.setStorageSync('plat_idfv', idfv);
            }


            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log("[SDK]小游戏启动参数");
            console.log(info);

            //判断今天是否已经上报过
            if(is_new && info.query && info.query.ad_code){
                wx.setStorageSync('plat_ad_code', info.query.ad_code);
                wx.setStorageSync('plat_ad_code_time',Date.now());
                console.log(Date.now());
            }
            // else{
            //     var plat_ad_code_time =  wx.getStorageSync('plat_ad_code_time');
            //     console.log(Date.now()-plat_ad_code_time);
            //     if(plat_ad_code_time && (Date.now()-plat_ad_code_time) >= out_time){
            //         if(info.query && info.query.ad_code){
            //             console.log("替换ad_code"+info.query.ad_code)
            //             wx.setStorageSync('plat_ad_code', info.query.ad_code);
            //         }
            //     }
            //     wx.setStorageSync('plat_ad_code_time',Date.now());
            // }


            //用户来源，如："txcps"
            if(info.query && info.query.from && info.query.from!=""){
                if (is_new) wx.setStorageSync('plat_from', info.query.from);
                config.from = info.query.from;
            } else {
                var from = wx.getStorageSync('plat_from');
                if(!from && from!="") config.from = from;
            }
            // config.from = "txcps"
            console.log("from: "+ config.from);

            var data = {
                install: is_new,
                scene: scene
            };
            self.log('start', data);


            //显示右上角分享按钮
            wx.showShareMenu();


            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var cp_activity_id  = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var video_type = info.query && info.query.video_type ? info.query.video_type : '';
            var s_t = info.query && info.query.s_time ? info.query.s_time : 0;
            if(invite || cp_activity_id){
                user_invite_info = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene,
                    cp_activity_id: cp_activity_id,
                    s_t:s_t,
                };
            }

            //判断版本号
            if(game_ver){
                this.checkGameVersion(game_ver, function (data) {
                    develop = data.develop;
                    callback && callback(data);
                });
            }

            ad_info = {
                "temp_info":info,
                "temp_uuid":uuid,
                "temp_is_new":is_new,
                "video_type":video_type,
            }
        },

        adLog:function (openid){
            //发送启动参数
            var info = ad_info.temp_info;
            var is_new = ad_info.temp_is_new;
            var uuid = ad_info.temp_uuid;
            if(info.query.hasOwnProperty('ad_code')&&info.query.hasOwnProperty('clue_token') && is_new){
                var temp_data = info.query;
                temp_data['uuid'] = uuid;
                temp_data['openid'] = openid;
                var url = 'https://adapi.sh9130.com/click/?ac=jrttWxMiniGameClick&'+this.convertObj(temp_data);
                console.log("发送url:"+url);
                wx.request({
                    url: url,
                });
            }
        },

        convertObj:function(data) {
            var _result = [];
            for (var key in data) {
                var value = data[key];
                if (value.constructor == Array) {
                    value.forEach(function(_value) {
                        _result.push(key + "=" + _value);
                    });
                } else {
                    _result.push(key + '=' + value);
                }
            }
            return _result.join('&');
        },

        //登录接口
        login: function (data, callback) {
            console.log("[SDK]调起登录");
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
                        public_data['is_from_min'] = 1;
                        public_data['code'] = res.code;
                        public_data['nick_name'] = info ? info.nick_name : '';
                        public_data['head_img'] = info ? info.head_img : '';

                        if(user_invite_info && typeof user_invite_info == 'object'){
                            for(var key in user_invite_info){
                                public_data[key] = user_invite_info[key];
                            }
                        }
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
                                        url: 'https://' + HOST + '/partner/auth',
                                        method: 'POST',
                                        dataType: 'json',
                                        header: {
                                            'content-type': 'application/x-www-form-urlencoded' // 默认值
                                        },
                                        data: public_data,
                                        success: function (res) {
                                            console.log("[SDK]登录结果：");
                                            console.log(res);
                                            if(res.statusCode == 200){
                                                var data = res.data;
                                                if(data.state){
                                                    var launchInfo = wx.getStorageSync('info');
                                                    var wx_channel = 0;
                                                    if(launchInfo.query.hasOwnProperty('clue_id')&&launchInfo.query.hasOwnProperty('clue_token')){
                                                        wx_channel = 1;
                                                    }
                                                    var ad_flag =  wx.getStorageSync('plat_ad_code')?1:0;
                                                    var userData = {
                                                        userid: data.data.user_id,
                                                        account: data.data.nick_name,
                                                        token: data.data.token,
                                                        invite_uid: data.data.invite_uid || '',
                                                        invite_nickname: data.data.invite_nickname || '',
                                                        invite_head_img: data.data.invite_head_img || '',
                                                        head_img: data.data.head_img || '',
                                                        is_client: data.data.is_client || '0',
                                                        ios_pay: data.data.ios_pay || '0',
                                                        wx_channel:wx_channel,
                                                        video_type:ad_info.video_type,
                                                        ad_flag:ad_flag,
                                                    };
                                                    try{
                                                        self.adLog(data.data.openid);
                                                    } catch (e) {
                                                        console.log("上报广告数据:"+JSON.stringify(e));
                                                    }
                                                    try {
                                                        wx.setStorageSync('plat_sdk_token', data.data.sdk_token);
                                                        wx.setStorageSync('plat_uid', data.data.user_id);
                                                        wx.setStorageSync('plat_username', data.data.username);
                                                        if(data.data.ext){
                                                            wx.setStorageSync('plat_session_key', data.data.ext);
                                                        }
                                                        wx.setStorageSync('navigate_app_id', data.data.navigate_app_id);
                                                        wx.setStorageSync('partner_vedio_ad_id', data.data.partner_vedio_ad_id);
                                                    } catch (e) {
                                                    }

                                                    callbacks['login'] && callbacks['login'](0, userData);
                                                }else{
                                                    callbacks['login'] && callbacks['login'](1, {errMsg: data.msg});
                                                }

                                                //登录成功，加载右上角分享数据
                                                self.getShareInfo('menu', function (data) {
                                                    console.log("[SDK]开始监听右上角菜单分享");
                                                    wx.onShareAppMessage(function () {
                                                        //记录开始分享
                                                        self.logStartShare('menu');
                                                        return {
                                                            title: data.title,
                                                            imageUrl: data.img,
                                                            query: data.query,
                                                        }
                                                    });
                                                });
                                            }else{
                                                callbacks['login'] && callbacks['login'](1, {errMsg: '请求平台服务器失败！'});
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
                            var lastTime = Date.now();
                            wx.request({
                                url: 'https://' + HOST + '/partner/auth',
                                method: 'POST',
                                dataType: 'json',
                                header: {
                                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                                },
                                data: public_data,
                                success: function (res) {
                                    console.log("[SDK]登录结果：");
                                    console.log(res);
                                    requestCallback = true;
                                    if (loginHandler) clearTimeout(loginHandler);
                                    loginHandler = null;
                                    if(res.statusCode == 200){
                                        var data = res.data;
                                        if(data.state){
                                            var launchInfo = wx.getStorageSync('info');
                                            var wx_channel = 0;
                                            if(launchInfo.query.hasOwnProperty('clue_id')&&launchInfo.query.hasOwnProperty('clue_token')){
                                                wx_channel = 1;
                                            }
                                            var ad_flag =  wx.getStorageSync('plat_ad_code')?1:0;
                                            var userData = {
                                                userid: data.data.user_id,
                                                account: data.data.nick_name,
                                                token: data.data.token,
                                                invite_uid: data.data.invite_uid || '',
                                                invite_nickname: data.data.invite_nickname || '',
                                                invite_head_img: data.data.invite_head_img || '',
                                                head_img: data.data.head_img || '',
                                                is_client: data.data.is_client || '0',
                                                ios_pay: data.data.ios_pay || '0',
                                                wx_channel:wx_channel,
                                                video_type:ad_info.video_type,
                                                ad_flag:ad_flag,
                                            };
                                            try{
                                                self.adLog(data.data.openid);
                                            } catch (e) {
                                                console.log("上报广告数据:"+JSON.stringify(e));
                                            }
                                            try {
                                                wx.setStorageSync('plat_sdk_token', data.data.sdk_token);
                                                wx.setStorageSync('plat_uid', data.data.user_id);
                                                wx.setStorageSync('plat_username', data.data.username);
                                                if(data.data.ext){
                                                    wx.setStorageSync('plat_session_key', data.data.ext);
                                                }
                                                wx.setStorageSync('navigate_app_id', data.data.navigate_app_id);
                                                wx.setStorageSync('partner_vedio_ad_id', data.data.partner_vedio_ad_id);
                                            } catch (e) {
                                            }

                                            callbacks['login'] && callbacks['login'](0, userData);
                                        }else{
                                            callbacks['login'] && callbacks['login'](1, {type: "wx.request.success", errMsg: data.msg, time: (Date.now()-lastTime), res: res});
                                        }

                                        //登录成功，加载右上角分享数据
                                        self.getShareInfo('menu', function (data) {
                                            console.log("[SDK]开始监听右上角菜单分享");
                                            wx.onShareAppMessage(function () {
                                                //记录开始分享
                                                self.logStartShare('menu');
                                                return {
                                                    title: data.title,
                                                    imageUrl: data.img,
                                                    query: data.query,
                                                }
                                            });
                                        });
                                    }else{
                                        callbacks['login'] && callbacks['login'](1, {type: "wx.request.success", errMsg: '请求平台服务器失败！', time: (Date.now()-lastTime), res: res});
                                    }
                                },
                                fail: function(res){
                                    console.log("[SDK]登录失败");
                                    console.log(res);
                                    self.log('event', {event: 'login_exception'});
                                    requestCallback = true;
                                    if (loginHandler) clearTimeout(loginHandler);
                                    loginHandler = null;
                                    callbacks['login'] && callbacks['login'](1, {type: "wx.request.fail", errMsg: res.errMsg, time: (Date.now()-lastTime), res: res});
                                }
                            });
                            if (!requestCallback) {
                                var timeOutFunc = function() {
                                    console.log("[SDK]登录超时");
                                    self.log('event', {event: 'login_time_out'});
                                    callbacks['login'] && callbacks['login'](1, {type: "wx.request", errMsg: "登录超时20秒无返回", time: (Date.now()-lastTime)});
                                    callbacks['login'] = null; //回调后置空，以免success或fail里重复回调
                                }
                                loginHandler = setTimeout(timeOutFunc, 20000);
                            }
                        }
                    } else {
                        callbacks['login'] && callbacks['login'](1, {type: "wx.login.success", errMsg: res.errMsg, res: res});
                    }
                },
                fail: function (res) {
                    console.log("微信登录失败" + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1 ) {
                        // 处理用户拒绝授权的情况
                        callbacks['login'] && callbacks['login'](1, {type: "wx.login.fail", errMsg: res.errMsg, res: res});
                    } else {
                        callbacks['login'] && callbacks['login'](1, {type: "wx.login.fail", errMsg: res.errMsg, res: res});
                    }
                }
            });
        },

        share: function (data) {
            callbacks['share'] = typeof callback == 'function' ? callback : null;
            var type = data.type || 'share';
            var cp_activity_id = data.cp_activity_id || '';

            console.log("[SDK]CP调用分享 type=" + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if(cp_activity_id !='' && data.query != ''){
                    data.query = data.query + '&cp_activity_id='+ cp_activity_id;
                }
                //记录开始分享
                self.logStartShare(type);
                wx.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query,
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=logStartShare',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: user_game_info ? user_game_info.server_id : '',
                    role_id: user_game_info ? user_game_info.role_id : '',
                    type: type,
                },
                success: function (res) {
                }
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log("[SDK]检查游戏版本");
            callbacks['check'] = typeof callback == 'function' ? callback : null;
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=checkGameVersion',
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
                    console.log("[SDK]获取游戏版本成功");
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if(res.statusCode == 200){
                        var data = res.data;
                        config.min_app_id = data.data.min_app_id;
                        if(data.state){
                            callbacks['check'] && callbacks['check'](data.data);
                        }else{
                            callbacks['check'] && callbacks['check']({develop: 0,success_msg:'state not true'});
                        }
                    }else{
                        callbacks['check'] && callbacks['check']({develop: 0,success_msg:JSON.stringify(res)});
                    }
                },
                fail: function(res){
                    console.log("[SDK]获取游戏版本失败");
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks['check'] && callbacks['check']({develop: 0,fail_msg:JSON.stringify(res)});
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function() {
                    console.log("[SDK]获取游戏版本超时");
                    callbacks['check'] && callbacks['check']({develop: 0,timeout_msg:'timeout msg'});
                    callbacks['check'] = null; //回调后置空，以免success或fail里重复回调
                }
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log("[SDK]获取分享参数");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=shareConfig',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: user_game_info ? user_game_info.server_id : '',
                    role_id: user_game_info ? user_game_info.role_id : '',
                    no_log: 1, //设置为1后就不在这个接口打log，交给logStartShare接口
                    ad_code:wx.getStorageSync('plat_ad_code'),
                },
                success: function (res) {
                    console.log("[SDK]获取分享参数结果");
                    console.log(res);
                    if(res.statusCode == 200){
                        var data = res.data;
                        if(data.state){
                            callback && callback(data.data);
                        }else{
                            callbacks['share'] && callbacks['share'](1, {errMsg: '分享失败：' + data.msg});
                        }
                    }else{
                        callbacks['share'] && callbacks['share'](1, {errMsg: '获取分享数据失败！'});
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log("[SDK]分享过来的玩家上报给服务器");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=updateShare',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
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
                    console.log("[SDK]上报分享结果返回:");
                    console.log(res);
                }
            });
        },

        msgCheck: function (content,callback) {
            console.log("[SDK]查看文本是否有违规内容");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=msgSecCheck3',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content:content
                },
                success: function (res) {
                    console.log("[SDK]查看文本是否有违规内容结果返回:");
                    console.log(res);
                    var ret = {};
                    ret.data = {};
                    if(res.data.state == 1){
                        ret.statusCode = 200;
                        ret.data.state = 1;
                    }else{
                        ret.statusCode = 0;
                        ret.data.state = 0;
                    }
                    if(develop == 0 && res.data.state == 0 && res.data.code == 61010){
                        ret.statusCode = 200;
                        ret.data.state = 1;
                    }
                    console.log(res);
                    callback && callback(ret);
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
            public_data['is_from_min'] = 1;

            //发起网络请求
            wx.request({
                url: 'https://' + HOST + '/partner/order',
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
                                if(sysInfo.platform == 'android' || sysInfo.platform == 'windows'){
                                    if(data.data.is_android_pay){
                                        if(data.data.ios_pay_type == 1){
                                            self.kfPay(data.data);
                                        }else if(data.data.ios_pay_type == 2){
                                            self.xiaoPay(data.data);
                                        }
                                    }else{
                                        self.gamePay(data.data);
                                    }
                                }else{
                                    if(data.data.is_ios_pay){
                                        if(data.data.ios_pay_type == 1){
                                            self.kfPay(data.data);
                                        }else if(data.data.ios_pay_type == 2){
                                            self.xiaoPay(data.data);
                                        }else if(data.data.ios_pay_type == 3){
                                            self.wechatscancode(order_data,data.data);
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
                        callbacks['pay'] && callbacks['pay'](1, {errMsg: '请求平台服务器失败！'});
                    }
                }
            });
        },
        wechatscancode:function(order_data,data){
            var url = 'https://'+HOST+'/pay/pay/?order_id='+data.orderId+'&pay_channel=wechatscancode&json=1';
            wx.request({
                url: url,
                method: 'GET',
                success:function(res){
                    var temp_data = res.data.data;
                    var url1 = temp_data.replace('sdk.fante.com',HOST).replace('ac=qrcode','ac=qrcodeImg');
                    console.log("微信二维码"+JSON.stringify(res.data.data));
                    wx.request({
                        url: url1,
                        method: 'GET',
                        success:function(res1){
                            console.log("图片base64地址:"+JSON.stringify(res1.data.data));
                            if(window.setQrCodeView){
                                var timer = '';
                                window.setQrCodeView({state:1,payName:order_data.productname,show:1,moneyNum:order_data.price,qrCodeUrl:res1.data.data,callback:(data11)=>{
                                        console.log("弹框打开情况:",data11);
                                        if(data11==1){
                                            timer = setInterval(function(){
                                                var url22 = 'https://'+HOST+'/pay/check/?order_id='+data.orderId;
                                                wx.request({
                                                    url: url22,
                                                    method: 'GET',
                                                    success:function(res2){
                                                        if(res2.data.state == 1){
                                                            clearInterval(timer);
                                                            window.setQrCodeView({state:2,payName:order_data.productname,show:1,moneyNum:order_data.price,qrCodeUrl:res1.data.data})
                                                        }
                                                    }
                                                })
                                            },2000);
                                        }
                                        if(data11 == 0){
                                            if(timer != ''){
                                                clearInterval(timer);
                                            }
                                        }
                                    }})

                            }

                        }
                    })

                }
            })
        },
        xiaoPay: function(data){
            var self = this;
            wx.navigateToMiniProgram({
                appId: config.min_app_id,
                path: 'pages/pay/pay?order_id='+data.orderId+'&money='+data.money,
                extraData: {

                },
                envVersion: 'release',
                success(res) {
                    // 打开成功
                }
            })
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
                    if(res.errMsg == 'requestPayment:ok'){
                        var ret = {
                            cpOrderNo: self.order_data.cpbill,
                            orderNo: data.orderId,
                            amount: self.order_data.price,
                            extension: self.order_data.extension
                        };
                        callbacks['pay'] && callbacks['pay'](0, ret);
                    }
                },
                fail: function (res) {
                    if(res.errMsg == 'requestPayment:fail cancel'){
                        callbacks['pay'] && callbacks['pay'](2, {errMsg: "用户取消支付"});
                    }else{
                        callbacks['pay'] && callbacks['pay'](1, {errMsg: "支付失败:" + res.err_desc});
                    }
                },
                complete: function (res) {

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
                            callbacks['pay'] && callbacks['pay'](1, {errMsg: "支付失败:" + res.errMsg});
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
                content: '即将打开客服聊天界面，输入"cz"或者"充值"可以获取支付链接',
                showCancel: false,
                confirmText: "我知道了",
                success: function () {
                    var obj = {
                        showMessageCard:true,
                        sendMessageTitle:"点我充值",
                        sendMessageImg:"https://static.sh9130.com/gw/images/WechatIMG700.png"
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
                url: 'https://' + HOST + '/partner/pay/' + config.partner_id + '/' + config.game_pkg + '/',
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
                        if(res.data == "success"){
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

        getInviter: function (user_invite_info, role_id, server_id) {
            console.log("[SDK]创角成功获取邀请者信息返回研发");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=getInviterByCode',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    invite: user_invite_info.invite,
                    invite_type: user_invite_info.invite_type,
                    is_new: user_invite_info.is_new,
                    scene: user_invite_info.scene,
                    cp_activity_id: user_invite_info.cp_activity_id,
                    role_id: role_id,
                    server_id: server_id,
                    openid: wx.getStorageSync('partner_openid'),
                    uid:wx.getStorageSync('plat_uid'),
                    game_id:config.game_id,
                    s_t:user_invite_info.s_t,
                },
                success: function (res) {
                    console.log("[SDK]getInviter结果返回:");
                    console.log(res.data.data);
                }
            });
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

            //进入游戏确认邀请成功
            if(user_invite_info){
                this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, data.roleid, data.serverid, user_invite_info.scene);
            }
            if (user_invite_info && user_invite_info.cp_activity_id != '') {
                this.getInviter(user_invite_info, data.roleid, data.serverid);
            }
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
            var launchInfo = wx.getStorageSync('info');
            if(!launchInfo) {
                launchInfo = wx.getLaunchOptionsSync();
                wx.setStorageSync('info', launchInfo);
            }

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
                game_ver: config.game_ver,//存放的是SDK版本号
                device: system.platform == 'android' ? 1 : 2,
                scene: launchInfo.scene,
                query: JSON.stringify(launchInfo.query)
            };
        },
        subscribeWhatsNew:function (type,callback){
            wx.requestSubscribeWhatsNew({
                msgType: 1,    // 消息类型，1=游戏更新提醒，目前只有这种类型
                success(res) {
                    console.log(res);
                    // res.confirm === true 或 false
                    callback(res.confirm)
                },
                fail(err) {
                    console.error(err);
                    callback(false)
                }
            })
        },

        showVideoAd:function(data,callback){
            let videoAd = null

            // 在页面onLoad回调事件中创建激励视频广告实例
            if (wx.createRewardedVideoAd) {
                videoAd = wx.createRewardedVideoAd({
                    adUnitId: wx.getStorageSync('partner_vedio_ad_id')
                })
                videoAd.onLoad(() => {
                    console.log("video onload");
                })
                videoAd.onError((err) => {
                    console.log("video onError");
                })
                try{
                    if(videoAd.closeHandler){
                        videoAd.offClose(videoAd.closeHandler);
                        console.log("videoAd.offClose卸载成功");
                    }
                }catch{
                    console.log("videoAd.offClose卸载失败");
                }
                videoAd.closeHandler = function(res){
                    console.log("video onClose");
                    if (res && res.isEnded || res === undefined) {
                        // 正常播放结束，可以下发游戏奖励
                        console.log("正常播放结束，可以下发游戏奖励");
                        callback(1)
                    }
                    else {
                        // 播放中途退出，不下发游戏奖励
                        console.log("播放中途退出，不下发游戏奖励");
                        callback(0)
                    }
                }
                videoAd.onClose(videoAd.closeHandler)
            }

            // 用户触发广告后，显示激励视频广告
            if (videoAd) {
                videoAd.show().catch(() => {
                    // 失败重试
                    videoAd.load()
                        .then(() => videoAd.show())
                        .catch(err => {
                            console.log('激励视频 广告显示失败')
                            callback(2)
                        })
                })
            }
        },

        subscriptionsSetting:function (type,callback){
            wx.getWhatsNewSubscriptionsSetting({
                msgType: 1,    // 消息类型，1=游戏更新提醒，目前只有这种类型
                success(res) {
                    console.log(res)
                    callback(res.status);
                },
                fail(err) {
                    console.error(err);
                    callback(0);
                }
            })
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
                url: 'https://' + HOST + '/partner/h5Log/?type=' + type + '&data=' + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },
        subscribeMessage : function (tmplIds, callback){
            console.log('[SDK]订阅消息：'+tmplIds);
            //获取模板ID
            callbacks['subscribeMessage'] = typeof callback == 'function' ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success (res) {
                    console.log("[SDK]订阅消息返回：成功");
                    console.log(res);
                    callbacks['subscribeMessage'] && callbacks['subscribeMessage'](res);
                },
                fail (res) {
                    console.log("[SDK]订阅消息返回：失败");
                    console.log(res);
                    callbacks['subscribeMessage'] && callbacks['subscribeMessage'](res);
                }
            })
        },

        // 微端小助手
        weiduanHelper: function(type) {
            let  username = wx.getStorageSync('plat_username');
            if(type ==undefined || type == '' || type == null){
                type = 1;
            }
            let sign="";
            let ts= Date.now();
            console.log('用户username：'+username)
            let that = this
            wx.request({
                url: 'https://' + HOST + '/partner/data/guide_download/' + config.partner_id + '/' + config.game_pkg,
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    username:username,
                    ts:ts
                },
                success: function (res) {
                    sign = res.data.data;
                    that.Getto(username,ts,sign,config.game_id,config.game_pkg,type);
                }
            });
        },
        Getto:function (username,ts,sign,game_id,game_pkg,type){
            var appid= wx.getStorageSync('navigate_app_id');
            var appid = appid?appid:'wx81d91c0166099f18';
            wx.navigateToMiniProgram({
                appId: appid,
                path: 'pages/chat/chat?username=' + username+ '&ts=' + ts + '&sign=' + sign +'&type=' + game_id+'&game_pkg='+game_pkg+"&weiduantype="+type,
                extraData: {
                    foo: 'bar'
                },
                envVersion: 'release',
                success(res) {
                    wx.showToast({
                        title: '跳转成功'
                    })
                },
                fail:function(res){
                    console.log("跳转失败原因"+JSON.stringify(res));
                }
            })
        }
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
exports.showVideoAd = function (callback) {
    run('showVideoAd', '', callback);
};
exports.pay = function (data, callback) {
    run('pay', data, callback);
};
exports.openService = function () {
    run('openService');
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
exports.share = function (type,data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id:cp_activity_id
    };
    run('share', params);
};
exports.msgCheck = function (data, callback) {
    run('msgCheck', data, callback);
};
exports.downloadClient = function () {
    run('downloadClient');
};
exports.subscribeMessage = function (data, callback) {
    run('subscribeMessage', data, callback);
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
exports.weiduanHelper = function (type) {
    run('weiduanHelper',type);
};

exports.subscribeWhatsNew = function (data, callback) {
    run('subscribeWhatsNew', data, callback);
};
exports.subscriptionsSetting = function (data, callback) {
    run('subscriptionsSetting', data, callback);
};

wx.onNeedPrivacyAuthorization((resolve, eventInfo) => {
    console.log('触发本次事件的接口是：' + eventInfo.referrer)
    // ------ 自定义弹窗逻辑 ------ //
    // showCustomPopup()
    // -------弹窗后根据用户操作，进行以下逻辑逻辑 ------- //
    // // 开发者弹出自定义的隐私弹窗，并调用 resolve 告知平台已经弹窗
    // resolve({ event: 'exposureAuthorization' })
    // // 用户点击同意后，开发者调用 resolve 告知平台用户已经同意
    // resolve({ event: 'agree' })
    // // 用户点击拒绝后，开发者调用 resolve 告知平台用户已经拒绝
    // resolve({ event: 'disagree' })
    // var func = funciton(res){
       
    // }
    // window.testresolve(func);
  })

wx.requirePrivacyAuthorize({
    success: () => {
      // 用户同意授权
      // runGame() 继续游戏逻辑
    },
    fail: () => {}, // 用户拒绝授权
    complete: () => {}
  })