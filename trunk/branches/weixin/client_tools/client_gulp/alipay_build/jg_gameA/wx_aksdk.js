console.info("3333 进入游戏包");
var config = require('./partner_config.js')
console.info("4444 进入游戏包");
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

var sceneInfo = {
    isSidebarCard: 0, //0不展示 1展示
}
var fufang = 0;
var onShowCallback = function(opt) {
    console.log("onshow" + JSON.stringify(opt));
    if(opt.query.sourceChannel == "gamecenter"){
        fufang = 1;
    }
};
my.onShow(onShowCallback);




function mainSDK() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log("[SDK]CP调用init接口");
            var self = this;

            var uuid = my.getStorageSync({key:'plat_uuid'});
            var is_new;
            if(!uuid.data){
                uuid = self.uuid(16, 32);
                my.setStorageSync({key:'plat_uuid',data:uuid});
                is_new = 1;
            }else{
                is_new = 0;
            }
            var idfv = my.getStorageSync({key:'plat_idfv'});
            if(!idfv.data){
                idfv = self.uuid(16, 32);
                my.setStorageSync({key:'plat_idfv',data:idfv});
            }


            var info = my.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            console.log("[SDK]小游戏启动参数");
            console.log(info);
            //判断今天是否已经上报过
            if(is_new && info.query && info.query.ad_code){
                my.setStorageSync({key:'plat_ad_code',data:info.query.ad_code});
            }

            //用户来源，如："txcps"
            if(info.query && info.query.from && info.query.from!=""){
                if (is_new) my.setStorageSync({key:'plat_from', data:info.query.from});
                config.from = info.query.from;
            } else {
                var from = my.getStorageSync({key:'plat_from'});
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
            if (my.gameBiz && my.gameBiz.reportLoadingCompleted) {
                my.gameBiz.reportLoadingCompleted();
            }

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




        //登录接口
        login: function (data, callback) {
            console.log("[SDK]调起登录");
            var self = this;
            callbacks['login'] = typeof callback == 'function' ? callback : null;
            //授权登录
            console.log("[SDK]授权登录"+config.is_auth);
            self.do_login();
        },

        do_login: function (info) {
            var self = this;
            my.getAuthCode({
                scopes: 'auth_user',
                success: function(res) {
                    console.log("微信登录成功返回" + JSON.stringify(res));
                    if (res.authCode) {
                        //授权登录请求
                        if (my.gameBiz && my.gameBiz.reportAuthorized) {
                            my.gameBiz.reportAuthorized();
                        }
                        //发起网络请求
                        var public_data = self.getPublicData();
                        public_data['is_from_min'] = 1;
                        public_data['code'] = res.authCode;
                        public_data['nick_name'] = info ? info.nick_name : '';
                        public_data['head_img'] = info ? info.head_img : '';

                        if(user_invite_info && typeof user_invite_info == 'object'){
                            for(var key in user_invite_info){
                                public_data[key] = user_invite_info[key];
                            }
                        }
                        var lastTime = Date.now();

                        my.request({
                            url: 'https://' + HOST + '/partner/auth',
                            method: 'POST',
                            dataType: 'json',
                            headers: {
                                'content-type': 'application/x-www-form-urlencoded' // 默认值
                            },
                            data: public_data,
                            success: function (res) {
                                console.log("[SDK]登录结果：");
                                console.log(res);
                                requestCallback = true;
                                if (loginHandler) clearTimeout(loginHandler);
                                loginHandler = null;
                                if(res.status == 200){
                                    var data = res.data;
                                    if(data.state){
                                        var launchInfo = my.getStorageSync({key:'info'});
                                        if(launchInfo && launchInfo.data){
                                            launchInfo = launchInfo.data;
                                        }
                                        var wx_channel = 0;
                                        var ad_flag =  my.getStorageSync({key:'plat_ad_code'})?1:0;
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
                                        try {
                                            my.setStorageSync({key:"plat_sdk_token",data:data.data.sdk_token});
                                            my.setStorageSync({key:"plat_uid",data:data.data.user_id});
                                            my.setStorageSync({key:"plat_username",data:data.data.username});
                                            if(data.data.ext){
                                                my.setStorageSync({key:"plat_session_key",data:data.data.ext});
                                            }
                                            my.setStorageSync({key:"navigate_app_id",data:data.data.navigate_app_id});
                                            my.setStorageSync({key:"partner_vedio_ad_id",data:data.data.partner_vedio_ad_id});
                                            my.setStorageSync({key:"partner_openid",data:data.data.openid});

                                        } catch (e) {

                                        }
                                        callbacks['login'] && callbacks['login'](0, userData);
                                    }else{
                                        callbacks['login'] && callbacks['login'](1, {type: "my.request.success", errMsg: data.msg, time: (Date.now()-lastTime), res: res});
                                    }
                                    //登录成功，加载右上角分享数据
                                    self.getShareInfo('menu', function (data) {
                                        console.log("[SDK]开始监听右上角菜单分享");
                                        my.onShareAppMessage = function () {
                                            return {
                                                title: data.title,
                                                imageUrl: data.img,
                                                success: function(res) {
                                                    console.log(res);
                                                    self.logStartShare('menu');
                                                },
                                                fail: function(e) {
                                                    console.log(e);
                                                },
                                                complete: function(e) {

                                                }
                                            }
                                        }
                                    });
                                }else{
                                    callbacks['login'] && callbacks['login'](1, {type: "my.request.success", errMsg: '请求平台服务器失败！', time: (Date.now()-lastTime), res: res});
                                }
                            },
                            fail: function(res){
                                console.log("[SDK]登录失败");
                                console.log(res);
                                self.log('event', {event: 'login_exception'});
                                requestCallback = true;
                                if (loginHandler) clearTimeout(loginHandler);
                                loginHandler = null;
                                callbacks['login'] && callbacks['login'](1, {type: "my.request.fail", errMsg: res.errMsg, time: (Date.now()-lastTime), res: res});
                            }
                        });
                        if (!requestCallback) {
                            var timeOutFunc = function() {
                                console.log("[SDK]登录超时");
                                self.log('event', {event: 'login_time_out'});
                                callbacks['login'] && callbacks['login'](1, {type: "my.request", errMsg: "登录超时20秒无返回", time: (Date.now()-lastTime)});
                                callbacks['login'] = null; //回调后置空，以免success或fail里重复回调
                            }
                            loginHandler = setTimeout(timeOutFunc, 20000);
                        }

                    } else {
                        callbacks['login'] && callbacks['login'](1, {type: "my.login.success", errMsg: res.errMsg, res: res});
                    }
                },
                fail: function (res) {
                    console.log("微信登录失败" + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf('auth deny') > -1 || res.errMsg.indexOf('auth denied') > -1 ) {
                        // 处理用户拒绝授权的情况
                        callbacks['login'] && callbacks['login'](1, {type: "my.login.fail", errMsg: res.errMsg, res: res});
                    } else {
                        callbacks['login'] && callbacks['login'](1, {type: "my.login.fail", errMsg: res.errMsg, res: res});
                    }
                }
            });
        },
        check_consult:function(data,callback){
            console.log("[SDK]查看首测任务");
            var alipay_user_id = my.getStorageSync({key:'partner_openid'});
            if(alipay_user_id && alipay_user_id.data){
                alipay_user_id = alipay_user_id.data;
                my.request({
                    url: 'https://' + HOST + '/partner/data/check_consult/' + config.partner_id + '/' + config.game_pkg,
                    method: 'POST',
                    dataType: 'json',
                    header: {
                        'content-type': 'application/x-www-form-urlencoded' // 默认值
                    },
                    data: {
                        alipay_user_id:alipay_user_id,
                    },
                    success: function (res) {
                        console.log("[SDK]查看首测任务结果返回:" + JSON.stringify(res));
                        console.log(res);
                        callback && callback({isSidebarCard:res.data.consult_result});

                    }
                });
            }else{

            }

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
                my.onShareAppMessage = function () {
                    return {
                        title: data.title,
                        imageUrl: data.img,
                        success: function(res) {
                            console.log(res);
                            my.showSharePanel({
                                success: function(res) {
                                    console.log(res);
                                },
                                fail: function(e) {
                                    console.log(e);
                                },
                                complete: function(res) {
                                }
                            });
                        },
                        fail: function(e) {
                            console.log(e);
                        },
                        complete: function(e) {

                        }
                    }
                }
            });
        },

        logStartShare: function (type) {
            var sdk_token = my.getStorageSync({key:'plat_sdk_token'});
            if(sdk_token && sdk_token.data){
                sdk_token = sdk_token.data;
            }
            my.request({
                url: 'https://' + HOST + '/game/min/?ac=logStartShare',
                method: 'POST',
                dataType: 'json',
                headers: {
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
            // my.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log("[SDK]检查游戏版本");
            callbacks['check'] = typeof callback == 'function' ? callback : null;
            var sdk_token = my.getStorageSync({key:'plat_sdk_token'});
            if(sdk_token && sdk_token.data){
                sdk_token = sdk_token.data;
            }
            my.request({
                url: 'https://' + HOST + '/game/min/?ac=checkGameVersion',
                method: 'POST',
                dataType: 'json',
                headers: {
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
                    if(res.status == 200){
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
            var sdk_token = my.getStorageSync({key:"plat_sdk_token"});
            if(sdk_token && sdk_token.data){
                sdk_token = sdk_token.data;
            }
            console.log("[SDK]分享"+(sdk_token));
            my.request({
                url: 'https://' + HOST + '/game/min/?ac=shareConfig',
                method: 'POST',
                dataType: 'json',
                headers: {
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
                    ad_code:my.getStorageSync('plat_ad_code'),
                },
                success: function (res) {
                    console.log("[SDK]获取分享参数结果");
                    console.log(res);
                    if(res.status == 200){
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
            var sdk_token = my.getStorageSync({key:'plat_sdk_token'});
            if(sdk_token && sdk_token.data){
                sdk_token = sdk_token.data;
            }
            my.request({
                url: 'https://' + HOST + '/game/min/?ac=updateShare',
                method: 'POST',
                dataType: 'json',
                headers: {
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
            console.log("[SDK]查看文本是否有违规内容"+content);
            var sdk_token = my.getStorageSync({key:'plat_sdk_token'});
            if(sdk_token && sdk_token.data){
                sdk_token = sdk_token.data;
            }
            let ret = {data:{}};

            my.request({
                url: 'https://' + HOST + '/partner/data/msg_check/' + config.partner_id + '/' + config.game_pkg,
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    text:content,
                },
                success: function (res) {
                    console.log("[SDK]查看文本是否有违规内容结果返回:" + JSON.stringify(res));
                    console.log(res)
                    ret.statusCode = 200;
                    ret.data.state = res.data.is_right;
                    callback && callback(ret);
                }
            });
        },


        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function(data, callback){
            console.log("[SDK]调起支付，CP传值：");
            console.log(data);
            var self = this;
            callbacks['pay'] = typeof callback == 'function' ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = my.getStorageSync({key:'plat_sdk_token'});
            sdk_token = sdk_token.data;
            if(!sdk_token){
                callbacks['pay'] && callbacks['pay'](1, {errMsg: "用户未登录，支付失败！"});
                return;
            }
            var openid = my.getStorageSync({key:'partner_openid'});
            openid = openid.data;
            var sysInfo = my.getSystemInfoSync();
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
                session_key: '',
                platform: sysInfo.platform,
                openid:openid,
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();

            public_data['order_data'] = JSON.stringify(order_data);
            public_data['is_from_min'] = 1;

            //发起网络请求
            my.request({
                url: 'https://' + HOST + '/partner/order',
                method: 'POST',
                dataType: 'json',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log("[SDK]完成创建订单");
                    console.log(res);
                    if(res.status == 200){
                        var data = res.data;
                        if(data.state){
                            //小程序
                            if(sysInfo.platform == "Android" && (sysInfo.version) >= "10.3.90" && my.requestGamePayment){
                                self.gamePay(data.data.pay_data);
                            }else {
                                // my.alert({
                                //     title: "支付提示",
                                //     content: 'IOS暂时不支持充值，请移步安卓体验',
                                //     buttonText: "我知道了",
                                // });
                                let iospayurl = 'https://sdk.sh9130.com/pay/pay/?json=1&order_id=' + data.data.pay_data.customId + '&pay_channel=tsAlipaywap';
                                console.log("ios支付链接:"+iospayurl);
                                my.setClipboard({
                                    text: iospayurl,
                                    success(res) {
                                        my.getClipboard({
                                            success(res) {
                                                my.confirm({
                                                    title: '温馨提示',
                                                    content: '已复制支付链接到剪贴板请通过浏览器打开链接完成支付',
                                                    confirmButtonText: '朕知道了'
                                                })
                                            }
                                        })
                                    }
                                })
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

        //小游戏支付
        gamePay: function (data) {
            var self = this;
            //游戏币足够，直接扣款
            if(data.buyQuantity <= data.balance){
                console.log("[SDK]游戏币充值直接扣除");
                my.alert({
                    title: "支付提示",
                    content: "您还有" + data.balance + "个游戏币未消费，本次支付将扣除" + data.buyQuantity + '游戏币',
                    buttonText: "我知道了",
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            }else{
                console.log("[SDK]调起米大师支付");
                my.requestGamePayment({
                    buyQuantity: data.buyQuantity, // 购买数量，必须满足：金币数量*金币单价 = 限定价格等级（详见金币限定等级）
                    customId: data.customId, //开发者自定义唯一订单号
                    success(res) {
                        console.log("调用函数成功"+res);
                    },
                    fail(res) {
                        console.log("调用函数失败");
                        console.log(res);
                    },
                    complete(res) {
                        console.log("调用完成"+res);
                    },
                });
            }
        },

        gameGoPay: function (data, retry) {
            console.log("[SDK]米大师支付完毕，通知服务器发货");
            //请求pay接口
            var self = this;
            var session_key = my.getStorageSync('plat_session_key');
            my.request({
                url: 'https://' + HOST + '/partner/pay/' + config.partner_id + '/' + config.game_pkg + '/',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    order_id: data.customId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key,
                },
                success: function (res) {
                    console.log("[SDK]米大师支付结果");
                    console.log(res);
                    if(res.status == 200){
                        if(res.data.state == 1){
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.customId,
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
            var uid = my.getStorageSync({key:'plat_uid'});
            if(uid && uid.data){
                uid = uid.data;
            }
            var username = my.getStorageSync({key:'plat_username'});
            if(username && username.data){
                username = username.data;
            }

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
            if (my.gameBiz && my.gameBiz.reportGameCharacterCreated) {
                my.gameBiz.reportGameCharacterCreated(true);
            }

        },

        getInviter: function (user_invite_info, role_id, server_id) {
            console.log("[SDK]创角成功获取邀请者信息返回研发");
            var sdk_token = my.getStorageSync({key:'plat_sdk_token'});
            var openid =my.getStorageSync({key:'partner_openid'});
            my.request({
                url: 'https://' + HOST + '/game/min/?ac=getInviterByCode',
                method: 'POST',
                dataType: 'json',
                headers: {
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
                    openid: openid.data,
                    uid:my.getStorageSync('plat_uid'),
                    game_id:config.game_id,
                    s_t:user_invite_info.s_t,
                },
                success: function (res) {
                    console.log("[SDK]getInviter结果返回:");
                    console.log(res.data.data);
                }
            });
        },

        getSdkToen: function () {
            var sdk_token = my.getStorageSync({key:'plat_sdk_token'});
            if(sdk_token && sdk_token.data){
                sdk_token = sdk_token.data;
                return sdk_token;
            }
            return "";
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = my.getStorageSync('plat_uid');
            if(uid && uid.data){
                uid = uid.data;
            }
            var username = my.getStorageSync('plat_username');
            if(username && username.data){
                username = username.data;
            }

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
            if (my.gameBiz && my.gameBiz.reportGamePlay) {
                my.gameBiz.reportGamePlay();
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = my.getStorageSync('plat_uid');
            if(uid && uid.data){
                uid = uid.data;
            }
            var username = my.getStorageSync('plat_username');
            if(username && username.data){
                username = username.data;
            }

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
            var system = my.getSystemInfoSync();
            var uuid = my.getStorageSync({key:'plat_uuid'});
            var idfv = my.getStorageSync({key:'plat_idfv'});
            var ad_code = my.getStorageSync({key:'plat_ad_code'});
            var launchInfo = my.getStorageSync({key:'info'});

            if(uuid && uuid.data){
                uuid = uuid.data;
            }
            if(idfv && idfv.data){
                idfv = idfv.data;
            }
            if(ad_code && ad_code.data){
                ad_code = ad_code.data;
            }else{
                ad_code = "";
            }
            if(!launchInfo.data) {
                launchInfo = my.getLaunchOptionsSync();
                my.setStorageSync({key:'info', launchInfo});
            }
            console.log("固定场景值:");
            console.log(launchInfo);
            console.log("每次获取新的:");
            var launchInfo1 = my.getLaunchOptionsSync();
            console.log(launchInfo1);

            if(launchInfo1.query && launchInfo1.query.sourceChannel){
                if(launchInfo1.query.sourceChannel == "gamecenter"){
                    fufang = 1;
                }
            }
            var gufeng = 0;
            if(launchInfo1.query && launchInfo1.query.channel){
                if(launchInfo1.query.channel == "guafen"){
                    gufeng = 1;
                }
            }
            var channel = '';
            if(launchInfo1.query && launchInfo1.query.channel){
                channel = launchInfo1.query.channel;
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
                query: JSON.stringify(launchInfo.query),
                zf_query:JSON.stringify(launchInfo1.query),
                fufang:fufang,
                gufeng:gufeng,
                channel:channel,
            };
        },
        tsData:function (data,callback){
            var public_data = this.getPublicData();
            callback && callback(public_data);
        },
        subscribeWhatsNew:function (type,callback){
            my.requestSubscribeWhatsNew({
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
            var temp_ad_id = my.getStorageSync({key:'partner_vedio_ad_id'});
            if(temp_ad_id && temp_ad_id.data){
                temp_ad_id = temp_ad_id.data;
            }
            if (my.createRewardedVideoAd) {
                videoAd = my.createRewardedVideoAd({
                    adUnitId:temp_ad_id
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

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for(var key in data){
                public_data[key] = data[key];
            }

            console.log("[SDK]上报数据：" + type);
            console.log(public_data);

            my.request({
                url: 'https://' + HOST + '/partner/h5Log/?type=' + type + '&data=' + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        schemaToParams:function (schema) {
            if (!schema.startsWith('alipays:')) {
                return { message: '! 非 alipays: 开头' };
            }
            const params = {};
            const parseQuery = (str) => {
                return str.replace(/^.*?\?/, '').split('&').map(s => {
                    const p = s.includes('=') ? s.indexOf('=') : s.length;
                    return [s.slice(0, p), s.slice(p + 1)].map(decodeURIComponent);
                });
            };
            for (const [k, v] of parseQuery(schema)) {
                if (k == 'appId') {
                    if (v.length != 16) {
                        return { message: `! 非 16 位 appId '${v}'` };
                    }
                } else if (k === 'chInfo') {
                    const tempkey = 'startParam';
                    const tempValue = params[tempkey] || {};
                    tempValue[k] = v;
                    params[tempkey] = tempValue;
                    continue;
                } else {
                    continue;
                }
                params[k] = v;
            }
            return { params };
        },

        navigateToScene:function(chInfo,callback){
            var schema = "alipays://platformapi/startapp?appId=2021003125685383&url=https%3A%2F%2Frender.alipay.com%2Fp%2Fyuyan%2F180020010001206617%2Findex.html%3FcaprMode%3Dsync&chInfo="+chInfo+"&sms=YES&appClearTop=false";
            const { params, message } = this.schemaToParams(schema);
            var successCallback = function() {
                console.log("successCallback");
                callback(1);
            };
            var failCallback = function() {
                console.log("failCallback");
                callback(0);
            };
            if (params) {
                my.navigateToMiniProgram({
                    ...params,
                    successCallback,
                    failCallback,
                });
            } else {
                console.log(`无效的小程序 schema ${schema}: ${message}`);
                callback(0);
            }
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
exports.tsData = function(callback){
    run('tsData','',callback);
};
exports.getSceneInfo = function (callback) {
    run('check_consult','',callback);
};

exports.navigateToScene = function (callback,data) {
    run('navigateToScene',data,callback);
};