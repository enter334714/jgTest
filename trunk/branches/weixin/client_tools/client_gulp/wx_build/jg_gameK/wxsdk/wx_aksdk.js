
import sdk from "../utils/bgwl_v1.7.min.js";
// 初始化sdk，引入sdk时候需要最先调用
sdk.getFyhd().startSdk();

var config = {
    game_id: '256',
    game_pkg: 'tjqy_tjqyjx_GS',
    partner_id: '330',
    game_ver: '10.0.13', //天剑奇缘-凡人附魔录-风云微信小程序-GS
    is_auth: false, //授权登录
};
window.config = config;
var PARTNER_SDK = mainSDK();
var HOST = 'sdk.sh9130.com';
var user_game_info = null;
var user_invite_info = null;
var open_id = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

// 设置是否保持常亮状态。仅在当前小程序生效，离开小程序后设置失效。
wx.setKeepScreenOn({
    keepScreenOn: true
});

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


            //判断今天是否已经上报过
            if(is_new && info.query && info.query.ad_code){
                wx.setStorageSync('plat_ad_code', info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log('start', data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if(invite){
                user_invite_info = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }

            //判断版本号
            if(game_ver){
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },

        //登录接口
        login: function (data, callback) {
            console.log("[SDK]调起登录");
            var self = this;
            callbacks['login'] = typeof callback == 'function' ? callback : null;

            self.do_login();
        },

        do_login: function () {
            var self = this;
            var param = {};
            var public_data = self.getPublicData();

            sdk.getFyhd().getFyhdUserInfo(param,config.is_auth, function (callback) {
                console.log('getFyhdUserInfo:' + JSON.stringify(callback));
                open_id = callback.result.user.openid;

                // 渠道上报--注册上报
                var param1 = {
                    openid:open_id,
                }
                sdk.getFyhd().loginData(param1, function (){});

                public_data.openid    = callback.result.user.openid;
                public_data.token     = callback.result.user.token;
                public_data.timestamp = callback.result.user.timestamp;
                public_data.sign      = callback.result.user.sign;
                
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
                                    if(data.data.ext){
                                        wx.setStorageSync('plat_session_key', data.data.ext);
                                    }
                                } catch (e) {
                                }

                                callbacks['login'] && callbacks['login'](0, userData);
                            } else {
                                callbacks['login'] && callbacks['login'](1, {type: "wx.request.success", errMsg: data.msg, time: (Date.now()-lastTime), res: res});
                            }

                            sdk.getFyhd().shareConfig({}, function (res) {
                                console.log('获取配置参数#1'+JSON.stringify(res));
                                wx.onShareAppMessage(function () {
                                    //记录开始分享
                                    self.logStartShare('menu');
                                    return {
                                        title: res.data.title,
                                        imageUrl: res.data.share_pic,
                                        query: res.data.path,
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

                        requestCallback = true;
                        if (loginHandler) clearTimeout(loginHandler);
                        loginHandler = null;
                        callbacks['login'] && callbacks['login'](1, {type: "wx.request.fail", errMsg: res.errMsg, time: (Date.now()-lastTime), res: res});
                    }
                });
                if (!requestCallback) {
                    var timeOutFunc = function() {
                        console.log("[SDK]登录超时");

                        callbacks['login'] && callbacks['login'](1, {type: "wx.request", errMsg: "登录超时20秒无返回", time: (Date.now()-lastTime)});
                        callbacks['login'] = null; //回调后置空，以免success或fail里重复回调
                    }
                    loginHandler = setTimeout(timeOutFunc, 20000);
                }
            })
        },

        share: function (data) {
            callbacks['share'] = typeof callback == 'function' ? callback : null;
            var type = data.type || 'share';
            console.log("[SDK]CP调用分享 type=" + type);
            var self = this;
            self.logStartShare(type);

            sdk.getFyhd().shareConfig({}, function (res) {
                console.log('获取配置参数#2'+JSON.stringify(res));

                wx.shareAppMessage({
                    title: res.data.title,
                    imageUrl: res.data.share_pic,
                    query: res.data.path,
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
                        if(data.state){
                            callbacks['check'] && callbacks['check'](data.data);
                        }else{
                            callbacks['check'] && callbacks['check']({develop: 0});
                        }
                    }else{
                        callbacks['check'] && callbacks['check']({develop: 0});
                    }
                },
                fail: function(res){
                    console.log("[SDK]获取游戏版本失败");
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks['check'] && callbacks['check']({develop: 0});
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function() {
                    console.log("[SDK]获取游戏版本超时");
                    callbacks['check'] && callbacks['check']({develop: 0});
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
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
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

            if (!sdk_token && !session_key) {
                callbacks['pay'] && callbacks['pay'](1, {
                    errMsg: "用户未登录，支付失败！"
                });
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
                        var pay_data = res.data;
                        if(pay_data.state){
                            // 渠道下单调起支付
                            let payParams = {};
                            payParams.openid = open_id;
                            payParams.goods_count = 1;
                            payParams.goods_des = pay_data.data.pay_data.productDec;
                            payParams.goods_identifier = pay_data.data.pay_data.productName;
                            payParams.goods_name = pay_data.data.pay_data.productId;
                            payParams.pay_amount = pay_data.data.pay_data.amount;
                            payParams.redirect_uri = pay_data.data.pay_data.payCallbackUrl;
                            payParams.role_id = pay_data.data.pay_data.roleId;
                            payParams.role_name = pay_data.data.pay_data.roleName;
                            payParams.server_id = pay_data.data.pay_data.serverId,
                            payParams.server_name = pay_data.data.pay_data.serverName;
                            payParams.extra_info = pay_data.data.pay_data.orderId;
                            payParams.order_sn = pay_data.data.pay_data.orderId;

                            var wx_info= wx.getSystemInfoSync();

                            if(wx_info.platform == 'android' || wx_info.platform == 'windows') {
                                sdk.getFyhd().submitOrder(payParams, function () {});
                            } else{
                                sdk.getFyhd().shanwan_pay(payParams, function () {});
                            }

                        }else{
                            callbacks['pay'] && callbacks['pay'](1, {errMsg: data.msg});
                        }
                    }else{
                        callbacks['login'] && callbacks['login'](1, {errMsg: '请求平台服务器失败！'});
                    }
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

            // 渠道上报--创角信息上报
            var param2 = {
                'openid' : open_id,
                'role_id' : data.roleid,
                'nickname' : data.rolename,
                'type' : 1,
                'server_id' : data.serverid,
                'server_name' : data.servername,
                'create_time' : Date.parse(new Date())/1000,
            }
            sdk.getFyhd().roleData(param2, function (){});

            // 渠道上报--登陆信息上报(创角上报成功回调之后调起)
            var param3 = {
                'openid': open_id,
                'role_id' : data.roleid,
                'create_time': Date.parse(new Date())/1000,
                'nickname' : data.rolename,
                'server_id' : data.serverid,
                'server_name' : data.servername,
            }
            sdk.getFyhd().uploginData(param3, function (){});

            // 渠道上报--有效用户上报
            var param4 = {
                openid: open_id,
            }
            sdk.getFyhd().valueuser(param4, function (){});
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

            // 渠道上报--登陆信息上报
            var param = {
                'openid': open_id,
                'role_id' : data.roleid,
                'create_time': Date.parse(new Date())/1000,
                'nickname' : data.rolename,
                'server_id' : data.serverid,
                'server_name' : data.servername,
            }
            sdk.getFyhd().uploginData(param, function (){});
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

        // 渠道-- 支付入口屏蔽
        paylimit:function (callback){
            var param = {
                openid: open_id,
            }
            sdk.getFyhd().paylimit(param, function (res){
                callback(res);
            });
        },

        // 渠道-- 获取分享开关配置
        shareConfig:function (callback){
            var param = {}
            sdk.getFyhd().shareConfig(param, function (res) {
                console.log('获取配置参数#1'+JSON.stringify(res));
                callback(res);
            });
        },

        // 渠道-- 屏蔽词检测
        msgSecCheck:function (content,callback){
            var param = {
                content: content
            }
            sdk.getFyhd().msgSecCheck(param, function (res) {
                if(res.data.result.suggest != "pass"){
                    res.data.errcode = 1;
                }
                callback(res);
            });
        },

        // 渠道--互推页获取
        shareRecommend:function (callback){
            var param = {}
            sdk.getFyhd().shareRecommend(param, function (res){
                callback(res);
            });
        },

        // 渠道--互推点击上报
        sharePlay:function (to_appid,callback){
            var param = {
                openid: open_id,
                to_appid: to_appid,
            }
            sdk.getFyhd().sharePlay(param, function (res){
                callback(res);
            });
        },

        mplimit: function (callback) {
            var param = {
                openid: open_id,
            }
            sdk.getFyhd().mplimit(param, function (res) {
                callback(res);
            });
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
                is_from_min:1
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

        // 监听主域接收 wx.shareMessageToFriend 接口的成功失败通知
        onShareMessageToFriend: function (data,callback) {
            wx.onShareMessageToFriend(function (res){
                callback(res);
            });
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

exports.login = function (callback) {
    run('login', '', callback);
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

exports.share = function (type) {
    var data = {
        type: type
    };
    run('share', data);
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

exports.paylimit = function (callback){
    run('paylimit',callback);
};

exports.shareConfig = function (callback){
    run('shareConfig',callback);
};

exports.msgSecCheck = function (content,callback){
  run('msgSecCheck',content,callback)
};

exports.shareRecommend = function (callback){
  run('shareRecommend',callback);
};

exports.sharePlay = function (to_appid,callback){
  run('sharePlay',to_appid,callback);
};

exports.mplimit = function (callback){
    run('mplimit',callback);
}

exports.onShareMessageToFriend = function (data,callback) {
    run("onShareMessageToFriend",data,callback);
};