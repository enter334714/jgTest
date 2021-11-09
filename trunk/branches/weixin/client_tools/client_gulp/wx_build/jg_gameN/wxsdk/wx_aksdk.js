import FunSdk from './helper'
//初始化类
const sdk=new FunSdk();

var config = {
    game_id: '88',
    partner_label: 'manfangwx',
    game_pkg: 'tjqy_tjqymx_GW', //天剑奇缘-空灵服-萌仙-漫方微信小程序-GW
    partner_id: '425',
    game_ver: '13.0.1',
    is_auth: false, //授权登录
    partner_and_key:'400E6BKDR6',
    partner_ios_key:'400pNvt6G5',
};
window.config = config;
var PARTNER_SDK = mainSDK();
var HOST = 'sdk.sh9130.com';
var t;
var t_second = 0;
var t_max = 300;
var user_game_info   = null;
var user_invite_info = null;
var this_order_id  = null;
var user_invite_by_activity = null;
var partner_user_info = null;
var sys_info = wx.getSystemInfoSync();
var platform = sys_info.platform;

// 获取渠道配置信息
function getGameInfo(callback){
    let partner_game_key = config.partner_ios_key;
    if(platform == 'android' || platform == 'windows'){
        partner_game_key = config.partner_and_key;
    }

    sdk.game({
        "game_key":partner_game_key
    },function (res) {
        if(res.code == 0){
            callback && callback(res.data);
        }else{
            callback && callback({});
        }
    });
}

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

            console.log('获取getLaunchOptionsSync信息',JSON.stringify(info));

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
            var invite          = info.query && info.query.invite ? info.query.invite : '';
            var invite_type     = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id  = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if(!cp_activity_id){
                cp_activity_id  = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id?'activity':'';
            }

            // 带活动ID
            if(cp_activity_id){
                user_invite_by_activity = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene,
                    cp_activity_id:cp_activity_id
                };
            }

            // 带邀请码
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

            wx.login({
                success: function(res) {
                    console.log("微信登录成功返回" + JSON.stringify(res));
                    if (res.code) {
                        getGameInfo(function (res1) {
                            sdk.gameLogin({
                                'host_url':res1.host_url,
                                'game_key':res1.game_key,
                                'code':res.code
                            },function (res2) {
                                console.log('[渠道]登录成功：'+JSON.stringify(res2));
                                if(res2.code == 0){
                                    partner_user_info = res2.data;
                                    self.do_login(res2.data);
                                }else{
                                    callback && callback(1);
                                }
                            },function (res3) {
                                console.log('[渠道]登录失败：'+JSON.stringify(res3));
                                callback && callback(1);
                            });
                        });
                    } else {
                        callback && callback(1, {errMsg: res.errMsg});
                    }
                },
                fail: function (res) {
                    console.log("微信登录失败" + JSON.stringify(res));
                    // iOS 和 Android 对于拒绝授权的回调 errMsg 没有统一，需要做一下兼容处理
                    if (res.errMsg.indexOf('auth deny') > -1 ||     res.errMsg.indexOf('auth denied') > -1 ) {
                        // 处理用户拒绝授权的情况
                        callback && callback(1, {errMsg: res.errMsg});
                    }
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data['user_info'] = JSON.stringify(info);
            if (user_invite_info && typeof user_invite_info == 'object') {
                for (var key in user_invite_info) {
                    public_data[key] = user_invite_info[key];
                }
            }

            wx.request({
                url: 'https://' + HOST + '/partner/auth',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log("[SDK]登录结果：" + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync('plat_sdk_token', data.data.sdk_token);
                                wx.setStorageSync('plat_uid', data.data.user_id);
                                wx.setStorageSync('plat_username', data.data.username);
                                if(data.data.ext){
                                    wx.setStorageSync('plat_session_key', data.data.ext);
                                }
                            } catch (e) {}

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
                            callbacks['login'] && callbacks['login'](0, userData);
                        } else {
                            callbacks['login'] && callbacks['login'](1, {
                                errMsg: data.msg
                            });
                        }

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
                    } else {
                        callbacks['login'] && callbacks['login'](1, {
                            errMsg: '请求平台服务器失败！'
                        });
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
                    console.log("[SDK]获取游戏版本结果:"+JSON.stringify(res));
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
                }
            });
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
                    console.log("[SDK]上报分享结果返回:"+JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content,callback) {
            console.log("[SDK]查看文本是否有违规内容");
            let ret = {
                data:{}
            };
            getGameInfo(function (res1) {
                var game_key = res1.game_key;
                sdk.checkWords({
                    "game_key":game_key,
                    "account":partner_user_info.openid,
                    "scene":4,
                    "content":content,
                    "host_url":res1.host_url,
                },function(res2){
                    console.log("渠道敏感词结果"+JSON.stringify(res2));
                    if(res2.code == 0){
                        ret.statusCode = 200;
                        ret.data.state = 1;
                    }else{
                        ret.statusCode = 0;
                        ret.data.state = 0;
                    }
                    callback && callback(ret);
                },function(res3){
                    ret.statusCode = 0;
                    ret.data.state = 0;
                    callback && callback(ret);
                })
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
            console.log("[SDK]调起支付，CP传值："+JSON.stringify(data));
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

            getGameInfo(function (res) {
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
                    platform: platform,
                    partner_game_info:res,
                    partner_openid:partner_user_info.openid
                };
                self.order_data = order_data;

                var public_data = self.getPublicData();
                public_data['order_data'] = JSON.stringify(order_data);

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
                        console.log("[SDK]完成创建订单："+JSON.stringify(res));
                        if(res.statusCode == 200){
                            var data = res.data;
                            if(data.state){
                                if(typeof wx.requestPayment == 'undefined'){
                                    if(platform == 'android' || platform == 'windows'){
                                        sdk.midasNotice(data.data.pay_data);
                                    }else{
                                        self.kfPay(data.data);
                                    }
                                }

                            }else{
                                callbacks['pay'] && callbacks['pay'](1, {errMsg: data.msg});
                            }
                        }else{
                            callbacks['login'] && callbacks['login'](1, {errMsg: '请求平台服务器失败！'});
                        }
                    }
                });
            });
        },

        kfPay: function (data) {
            console.log('[sdk]发起客服支付');
            sdk.order({
                "host_url":data.pay_data.host_url,
                "game_key":data.pay_data.game_key,
                "account":data.pay_data.account,
                "server":data.pay_data.server,
                "role":data.pay_data.role,
                "amount":data.pay_data.amount,
                "extend":data.pay_data.extend
            },function (res) {
                console.log('[sdk]渠道完成下单：'+JSON.stringify(res));

                wx.showModal({
                    title: "支付提示",
                    content: '即将打开客服聊天界面，输入"1"可以获取支付链接',
                    showCancel: false,
                    confirmText: "我知道了",
                    success: function () {
                        wx.openCustomerServiceConversation();
                    }
                });
            })
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

            // 记录从活动分享进入的角色信息
            if(user_invite_by_activity){
                var scene       = user_invite_by_activity.scene;
                var is_new      = user_invite_by_activity.is_new;
                var invite_code = user_invite_by_activity.invite;
                var invite_type = user_invite_by_activity && user_invite_by_activity.invite_type ? user_invite_by_activity.invite_type : '';
                var cp_activity_id = user_invite_by_activity.cp_activity_id;

                var roleInfo = {
                    uid :uid,
                    role_id :data.roleid,
                    role_name :data.rolename,
                    server_id :data.serverid,
                    server_name :data.servername,
                    game_id:config.game_id,
                    partner_id :config.partner_id,
                    game_pkg :config.game_pkg,
                    scene :scene,
                    is_new :is_new,
                    invite_code :invite_code,
                    invite_type :invite_type,
                    cp_activity_id :cp_activity_id,
                }

                wx.request({
                    url: 'https://' + HOST + '/game/min/?ac=report2Cp',
                    method: 'POST',
                    dataType: 'json',
                    header: {
                        'content-type': 'application/x-www-form-urlencoded' // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log("[SDK]活动上报分享结果返回:"+JSON.stringify(res));
                    }
                });
            }
            
            // 渠道上报
            getGameInfo(function (res1) {
               sdk.role({
                   "host_url":res1.host_url,
                   "game_key":res1.game_key,
                   "account":partner_user_info.openid,
                   "server":data.serverid,
                   "server_name":data.servername,
                   "role":data.roleid,
                   "role_name":data.rolename,
                   "level":data.rolelevel,
                   "type":3
               },function (res2) {
                    console.log('[sdk]创角上报渠道成功：'+JSON.stringify(res2));
               });
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

            // 渠道上报
            getGameInfo(function (res1) {
                var partner_query_info = sdk.wxChannelCode();
                if(partner_query_info){
                    sdk.role({
                        "host_url":res1.host_url,
                        "game_key":res1.game_key,
                        "account":partner_user_info.openid,
                        "server":data.serverid,
                        "server_name":data.servername,
                        "role":data.roleid,
                        "role_name":data.rolename,
                        "level":data.rolelevel,
                        "type":partner_query_info && partner_query_info.type?partner_query_info.type:'',
                        "code":partner_query_info && partner_query_info.code?partner_query_info.code:''
                    },function (res2) {
                        console.log('[sdk]渠道参数上报渠道成功：'+JSON.stringify(res2));
                    });
                }

                sdk.role({
                    "host_url":res1.host_url,
                    "game_key":res1.game_key,
                    "account":partner_user_info.openid,
                    "server":data.serverid,
                    "server_name":data.servername,
                    "role":data.roleid,
                    "role_name":data.rolename,
                    "level":data.rolelevel,
                    "type":0
                },function (res2) {
                    console.log('[sdk]完成白屏加载上报渠道成功：'+JSON.stringify(res2));
                });

                sdk.role({
                    "host_url":res1.host_url,
                    "game_key":res1.game_key,
                    "account":partner_user_info.openid,
                    "server":data.serverid,
                    "server_name":data.servername,
                    "role":data.roleid,
                    "role_name":data.rolename,
                    "level":data.rolelevel,
                    "type":3
                },function (res2) {
                    console.log('[sdk]登录上报渠道成功：'+JSON.stringify(res2));
                });

                sdk.role({
                    "host_url":res1.host_url,
                    "game_key":res1.game_key,
                    "account":partner_user_info.openid,
                    "server":data.serverid,
                    "server_name":data.servername,
                    "role":data.roleid,
                    "role_name":data.rolename,
                    "level":data.rolelevel,
                    "type":6
                },function (res2) {
                    console.log('[sdk]进入上报渠道成功：'+JSON.stringify(res2));
                });
            });
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

            // 渠道上报
            getGameInfo(function (res1) {
                sdk.role({
                    "host_url":res1.host_url,
                    "game_key":res1.game_key,
                    "account":partner_user_info.openid,
                    "server":data.serverid,
                    "server_name":data.servername,
                    "role":data.roleid,
                    "role_name":data.rolename,
                    "level":data.rolelevel,
                    "type":8
                },function (res2) {
                    console.log('[sdk]升级上报渠道成功：'+JSON.stringify(res2));
                });
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
                is_from_min:1,
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

        // 微端小助手
        weiduanHelper: function() {

        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data,callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({shareMessageToFriendScene:cp_activity_id});

            callback && callback(result);
        },

        getFriendShareInfo: function (callback) {
            this.getShareInfo('activity', function (data) {
                callback && callback({title:data.title,'img':data.img});
            });
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

exports.weiduanHelper = function () {
    run('weiduanHelper');
};

exports.setMessageToFriendQuery = function (data,callback) {
    run('setMessageToFriendQuery',data,callback);
};

exports.getFriendShareInfo = function (callback) {
    run('getFriendShareInfo',callback);
}