const {AladinSDK} = require('./aladinSDK.js');

var config = {
    game_id: 256,
    game_pkg: 'tjqy_tjqymd_AM',
    partner_id: 382,
    game_ver: '1.0.83',
    is_auth: false, //授权登录
    qq_app_id: '1111683091'
};
window.config = config;

var PARTNER_SDK = mainSDK();
var HOST = 'sdk.sh9130.com';
var user_game_info = null;
var user_invite_info = null;
var sysInfo = qq.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

// 初始化SDK
AladinSDK.init(config.qq_app_id,config.game_ver);
// 启动时长上报
AladinSDK.reportWithAppId(config.qq_app_id, "15_1","");

function mainSDK() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log("[SDK]CP调用init接口");
            var self = this;

            var uuid = qq.getStorageSync('plat_uuid');
            var is_new;
            if(!uuid){
                uuid = self.uuid(16, 32);
                qq.setStorageSync('plat_uuid',uuid);
                is_new = 1;
            }else{
                is_new = 0;
            }

            var idfv = qq.getStorageSync('plat_idfv');
            if(!idfv){
                idfv = self.uuid(16, 32);
                qq.setStorageSync('plat_idfv', idfv);
            }

            var info = qq.getLaunchOptionsSync();
            var scene = config.from_scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if(is_new && info.query && info.query.ad_code){
                qq.setStorageSync('plat_ad_code', info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log('start', data);

            //显示右上角分享按钮
            qq.showShareMenu();

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

            AladinSDK.login(function(res) {
                if(res.code==0){//登录成功
                    partner_user_info = res;
                    self.do_login(res);

                    console.log('渠道登录返回成功'+ JSON.stringify(res));
                }else{
                    callbacks['login'] && callbacks['login'](1, {
                        errMsg: res.msg
                    });
                    console.log('渠道登录返回失败'+ JSON.stringify(res));
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data['user_info'] = JSON.stringify(info);


            if(user_invite_info && typeof user_invite_info == 'object'){
                for(var key in user_invite_info){
                    public_data[key] = user_invite_info[key];
                }
            }

            qq.request({
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
                                qq.setStorageSync('plat_sdk_token', data.data.sdk_token);
                                qq.setStorageSync('plat_uid', data.data.user_id);
                                qq.setStorageSync('plat_username', data.data.username);
                                qq.setStorageSync('plat_open_id',data.data.openid)
                                if(data.data.ext){
                                    qq.setStorageSync('plat_session_key', data.data.ext);
                                }
                            } catch (e) {
                            }
                            self.getShareInfo('share', function (data) {
                                //记录开始分享
                                self.logStartShare('share');
                                qq.onShareAppMessage(() => ({
                                    title: data.title,
                                    imageUrl: data.img // 图片 URL
                                }));
                            });
                            callbacks['login'] && callbacks['login'](0, userData);
                        }else{
                            callbacks['login'] && callbacks['login'](1, {errMsg: data.msg});
                        }

                        //登录成功，加载右上角分享数据
                        // self.getShareInfo('menu', function (data) {
                        //     console.log("[SDK]开始监听右上角菜单分享");

                        // });
                    }else{
                        callbacks['login'] && callbacks['login'](1, {errMsg: '请求平台服务器失败！'});
                    }
                }
            });

        },

        share: function (data) {
            console.log("[AKSDK]share config 1: "+JSON.stringify(data));
           
            callbacks['share'] = typeof callback == 'function' ? callback : null;
            var type = data.type || 'share';
            console.log("[SDK]CP调用分享 type=" + type);
            var self = this;
            this.getShareInfo(type, function (data) {
            console.log("[AKSDK]share config 2: "+JSON.stringify(data));
                //记录开始分享
                self.logStartShare(type);
                qq.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query,
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = qq.getStorageSync('plat_sdk_token');
            qq.request({
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
            qq.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log("[SDK]检查游戏版本");
            var sdk_token = qq.getStorageSync('plat_sdk_token');
            qq.request({
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
                }
            });
        },

        getShareInfo: function (type, callback) {
            console.log("[SDK]获取分享参数");
            var sdk_token = qq.getStorageSync('plat_sdk_token');
            qq.request({
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
            var sdk_token = qq.getStorageSync('plat_sdk_token');
            qq.request({
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
            console.log("[SDK]查看文本是否有违规内容" + content);

            AladinSDK.msgCheck(content,function(res){
                if(res.ret==0){//合法
                    console.log(res.content)//传的内容“123”
                    callback && callback(1);
                }else{
                    console.log(res.msg)//不合法
                    callback && callback(0);
                }
            });
        },

        pay: function (data, callback) {
            var self = this;

            qq.checkSession({
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
            var sdk_token = qq.getStorageSync('plat_sdk_token');
            var session_key = qq.getStorageSync('plat_session_key');
            var openid = qq.getStorageSync('plat_open_id');
            if(!sdk_token){
                callbacks['pay'] && callbacks['pay'](1, {errMsg: "用户未登录，支付失败！"});
                return;
            }

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
                openid:openid
            };
            self.order_data = order_data;


            var public_data = self.getPublicData();
            public_data['order_data'] = JSON.stringify(order_data);

            //发起网络请求
            qq.request({
                url: 'https://' + HOST + '/partner/order',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log("[SDK]完成创建订单"+JSON.stringify(res));
                    console.log();
                    if(res.statusCode == 200){
                        var data = res.data;
                        if (data.state) {
                            var pay_params = {
                                amt:data.data.pay_data.amount,
                                goodid:data.data.pay_data.productId,
                                good_num:data.data.pay_data.goodsNum,
                                params:data.data.pay_data.orderId,
                                callback:function (result){
                                    console.log('支付成功'+JSON.stringify(result));
                                }
                            };

                            AladinSDK.qqpay(pay_params);
                        } else {
                            callbacks['pay'] && callbacks['pay'](1, {
                                errMsg: data.msg
                            });
                        }

                    }else{
                        callbacks['login'] && callbacks['login'](1, {errMsg: '请求平台服务器失败！'});
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = qq.getStorageSync('plat_uid');
            var username = qq.getStorageSync('plat_username');

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
            var uid = qq.getStorageSync('plat_uid');
            var username = qq.getStorageSync('plat_username');

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

            // 渠道 openid上报
            AladinSDK.reportOpenId(partner_user_info.openid);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = qq.getStorageSync('plat_uid');
            var username = qq.getStorageSync('plat_username');

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

            var uuid = qq.getStorageSync('plat_uuid');
            var idfv = qq.getStorageSync('plat_idfv');
            var ad_code = qq.getStorageSync('plat_ad_code');

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: sysInfo.model,
                mac: '0000',
                net_type: sysInfo.wifiEnabled == 0 ? '4G' : 'WIFI',
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version,//存放的是微信版本号
                game_ver: config.game_ver,//存放的是SDK版本号
                device: platform == 'android' ? 1 : 2,
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

            qq.request({
                url: 'https://' + HOST + '/partner/h5Log/?type=' + type + '&data=' + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            qq.openCustomerServiceConversation();
        },
        
        subscribeMessage : function (tmplIds, callback){
            console.log('[SDK]订阅消息：'+tmplIds);
            //获取模板ID
            callbacks['subscribeMessage'] = typeof callback == 'function' ? callback : null;
            callbacks['subscribeMessage'] && callbacks['subscribeMessage']({errMsg:"无返回"});
        }, 

        // 渠道自定义上报
        reportAnalytics: function (step) {
            console.log('自定义上报：'+step);
            AladinSDK.reportAnalytics(config.qq_app_id,step) //step只能为1-50的数字
        }
    }
}

function run(method, data, callback) {
    (method in PARTNER_SDK) && PARTNER_SDK[method](data, callback);
}

module.exports.init = function (data, callback) {
    run('init', data, callback);
};

module.exports.login = function (callback) {
    run('login', '', callback);
};

module.exports.login = function (callback) {
    run('login', '', callback);
};
module.exports.pay = function (data, callback) {
    run('pay', data, callback);
};

module.exports.openService = function () {
    run('openService');
};

module.exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
    };
    run('logCreateRole', data);
};

module.exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
    };

    run('logEnterGame', data);
};

module.exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
    };
    run('logRoleUpLevel', data);
};

module.exports.share = function (type) {
    var data = {
        type: type
    };
    run('share', data);
};

module.exports.msgCheck = function (data, callback) {
    run('msgCheck', data, callback);
};
module.exports.downloadClient = function () {
    run('downloadClient');
};
module.exports.subscribeMessage = function (data, callback) {
    run('subscribeMessage', data, callback);
};

module.exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    }
};

module.exports.reportAnalytics = function (step) {
    run("reportAnalytics",step);
}