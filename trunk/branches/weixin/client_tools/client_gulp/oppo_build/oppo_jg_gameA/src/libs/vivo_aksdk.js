var config = {
    game_id: '256', //天剑奇缘
    game_pkg: 'tjqy_tjqyvivoxyx_DN',
    partner_id: '238',
    game_ver: '1.0.51',  //A包为1.x.x，每次上传版本修改，先设置，上传审核版本的时候保持一致
    is_auth: false,  //授权登录
    from: null, //来源
    partner_label: 'minvivo',
};
window.config = config;

var PARTNER_SDK = mainSDK();
var HOST = 'sdk.sh9130.com';
var user_game_info_9130 = null;
var user_invite_info_9130 = null;
var partner_data={};
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function mainSDK() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        // 初始化
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log("[SDK]CP调用init接口");
            var self = this;

            var uuid = qg.getStorageSync({
                key: '9130_plat_uuid'
            });
            var is_new;
            if(!uuid){
                uuid = self.uuid(16, 32);
                qg.setStorageSync({
                    key: '9130_plat_uuid',
                    value: uuid
                });
                is_new = 1;
            }else{
                is_new = 0;
            }
            var idfv = qg.getStorageSync({
                key: '9130_plat_idfv'
            });
            if(!idfv){
                idfv = self.uuid(16, 32);
                qg.setStorageSync({
                    key: '9130_plat_idfv',
                    value: idfv
                })
            }

            var info = '';
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if(is_new && info.query && info.query.ad_code){
                qg.setStorageSync({
                    key: '9130_plat_ad_code',
                    value: info.query.ad_code
                })
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log('start', data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if(invite){
                user_invite_info_9130 = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }

            //判断版本号
            if(game_ver){
                this.checkGameVersion(game_ver, function (data) {
                    console.log("[SDK]初始化回调：",data);
                    callback && callback(data);
                });
            }
        },

        //登录接口
        login: function (data, callback) {
            var self = this;
            var platformVersionCode = qg.getSystemInfoSync().platformVersionCode;
            callbacks['login'] = typeof callback == 'function' ? callback : null;
            if (platformVersionCode >= 1063) {
                qg.login().then((res) => {
                    console.log("[SDK]登录回调", JSON.stringify(res));
                    if (res.data.token) {
                        partner_data = {
                            token : res.data.token,
                        };
                        //发起网络请求
                        var public_data = self.getPublicData();
                        public_data['is_from_min'] = 1;
                        public_data['partner_data'] = JSON.stringify(partner_data);

                        if(user_invite_info_9130 && typeof user_invite_info_9130 == 'object'){
                            for(var key in user_invite_info_9130){
                                public_data[key] = user_invite_info_9130[key];
                            }
                        }

                        var lastTime = Date.now();
                        qg.request({
                            url: 'https://' + HOST + '/partner/auth',
                            method: 'POST',
                            dataType: 'json',
                            header: {
                                'content-type': 'application/x-www-form-urlencoded' // 默认值
                            },
                            data: public_data,
                            success: function (res) {
                                console.log("[SDK]登录结果：", JSON.stringify(res));
                                if (loginHandler) clearTimeout(loginHandler);
                                if(res.statusCode === 200){
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
                                            qg.setStorageSync({
                                                key: '9130_plat_sdk_token',
                                                value: data.data.sdk_token
                                            });
                                            qg.setStorageSync({
                                                key: '9130_plat_uid',
                                                value: data.data.user_id
                                            });
                                            qg.setStorageSync({
                                                key: '9130_plat_username',
                                                value: data.data.username
                                            });
                                            if(data.data.ext){
                                                qg.setStorageSync({
                                                    key: '9130_plat_session_key',
                                                    value: data.data.ext
                                                });
                                            }
                                        } catch (e) {
                                        }

                                        callbacks['login'] && callbacks['login'](0, userData);
                                    }else{
                                        callbacks['login'] && callbacks['login'](1, {type: "qg.request.success", errMsg: data.msg, time: (Date.now()-lastTime), res: res});
                                    }
                                }else{
                                    callbacks['login'] && callbacks['login'](1, {type: "qg.request.success", errMsg: '请求平台服务器失败！', time: (Date.now()-lastTime), res: res});
                                }
                            },
                            fail: function(res){
                                console.log("[SDK]登录失败："+JSON.stringify(res));
                                requestCallback = true;
                                if (loginHandler) clearTimeout(loginHandler);
                                loginHandler = null;
                                callbacks['login'] && callbacks['login'](1, {type: "qg.request.fail", errMsg: res.errMsg, time: (Date.now()-lastTime), res: res});
                            }
                        });
                        if (!requestCallback) {
                            var timeOutFunc = function() {
                                console.log("[SDK]登录超时");
                                callbacks['login'] && callbacks['login'](1, {type: "qg.request", errMsg: "登录超时20秒无返回", time: (Date.now()-lastTime)});
                                callbacks['login'] = null; //回调后置空，以免success或fail里重复回调
                            }
                            loginHandler = setTimeout(timeOutFunc, 20000);
                        }
                    } else {
                        callbacks['login'] && callbacks['login'](1, {type: "qg.login.success", errMsg: res.errMsg});
                    }
                }, (err) => {
                    console.log('[SDK]登录失败' + JSON.stringify(err));
                    callbacks['login'] && callbacks['login'](1, {type: "qg.login.fail", errMsg: 'SDK登录失败'});
                });
            }else{
                callbacks['login'] && callbacks['login'](1, {errMsg: 'SDK登录失败platformVersionCode='+platformVersionCode});
            }
        },

        // 分享
        share: function (data) {
            callbacks['share'] = typeof callback == 'function' ? callback : null;
            var type = data.type || 'share';
            console.log("[SDK]CP调用分享 type=" + type);
            var self = this;
            self.logStartShare(type);
            qg.share({
                success: function(res) {
                    console.log("share success1", res)
                },
                fail: function(error, code) {
                    console.log("share fail1", code, error)
                },
                cancel: function() {
                    console.log("取消分享")
                }
            });
        },

        logStartShare: function (type) {
            var sdk_token = qg.getStorageSync({
                key: '9130_plat_sdk_token'
            });
            qg.request({
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
                    server_id: user_game_info_9130 ? user_game_info_9130.server_id : '',
                    role_id: user_game_info_9130 ? user_game_info_9130.role_id : '',
                    type: type,
                },
                success: function (res) {
                }
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log("[SDK]检查游戏版本");
            callbacks['check'] = typeof callback == 'function' ? callback : null;
            qg.request({
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
                    console.log("[SDK]获取游戏版本结果", JSON.stringify(res));
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

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log("[SDK]分享过来的玩家上报给服务器");
            var sdk_token = qg.getStorageSync({
                key: '9130_plat_sdk_token'
            });
            qg.request({
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

        // 支付
        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function(data, callback){
            console.log("[SDK]调起支付，CP传值：", JSON.stringify(data));

            var self = this;
            callbacks['pay'] = typeof callback == 'function' ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = qg.getStorageSync({
                key: '9130_plat_sdk_token'
            });
            console.log(sdk_token,1010)
            var session_key = qg.getStorageSync({
                key: '9130_plat_session_key'
            });
            if(!sdk_token && !session_key){
                callbacks['pay'] && callbacks['pay'](1, {errMsg: "用户未登录，支付失败！"});
                return;
            }

            var sysInfo = qg.getSystemInfoSync();

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
            console.log(public_data, '支付参数')
            //发起网络请求
            qg.request({
                url: 'https://' + HOST + '/partner/order',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log("[SDK]完成创建订单", JSON.stringify(res));
                    if(res.statusCode === 200){
                        var data = res.data;
                        console.log("[SDK]订单data", JSON.stringify(data));
                        if(data.state){
                            // 下单成功
                            qg.pay({
                                orderInfo: JSON.stringify(data.data.pay_data),
                                success: function(ret) {
                                    console.log("支付成功",ret)
                                },
                                fail: function (errmsg, errcode) {
                                    console.log("支付失败", errmsg, errcode)
                                },
                                complete: function(){
                                    console.log("支付完成")
                                }
                            })
                        }else{
                            callbacks['pay'] && callbacks['pay'](1, {errMsg: data.msg});
                        }
                    }else{
                        callbacks['pay'] && callbacks['pay'](1, {errMsg: '下单失败！'});
                    }
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log("[SDK]查看文本是否有违规内容");
            var res = {};
            res.data = {};
            res.data.state = 1;
            res.statusCode = 200;
            callback && callback(res);
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = qg.getStorageSync({
                key: '9130_plat_uid'
            });
            var username = qg.getStorageSync({
                key: '9130_plat_username'
            });

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;

            if(data.roleid && data.serverid){
                user_game_info_9130 = {
                    role_id:  data.roleid,
                    server_id:  data.serverid,
                };
            }

            this.log('create', postData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = qg.getStorageSync({
                key: '9130_plat_uid'
            });
            var username = qg.getStorageSync({
                key: '9130_plat_username'
            });
            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;

            if(data.roleid && data.serverid){
                user_game_info_9130 = {
                    role_id:  data.roleid,
                    server_id:  data.serverid,
                };
            }

            this.log('enter', postData);

            //进入游戏确认邀请成功
            if(user_invite_info_9130){
                this.updateShare(user_invite_info_9130.invite, user_invite_info_9130.invite_type, user_invite_info_9130.is_new, data.roleid, data.serverid, user_invite_info_9130.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = qg.getStorageSync({
                key: '9130_plat_uid'
            });
            var username = qg.getStorageSync({
                key: '9130_plat_username'
            });

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;

            if(data.roleid && data.serverid){
                user_game_info_9130 = {
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
            var system = qg.getSystemInfoSync();

            var uuid = qg.getStorageSync({
                key: '9130_plat_uuid'
            });
            var idfv = qg.getStorageSync({
                key: '9130_plat_idfv'
            });
            var ad_code = qg.getStorageSync({
                key: '9130_plat_ad_code'
            });

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
                os_ver: system.osVersionCode,
                sdk_ver: system.platformVersionCode,//存放的是微信版本号
                game_ver: config.game_ver,//存放的是SDK版本号
                device: system.osType == 'android' ? 1 : 2,
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

            qg.request({
                url: 'https://' + HOST + '/partner/h5Log/?type=' + type + '&data=' + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },
    }
}

function run(method, data, callback) {
    (method in PARTNER_SDK) && PARTNER_SDK[method](data, callback);
}

window.AKSDK = {};
AKSDK.init = function (data, callback) {
    run('init', data, callback);
};

AKSDK.login = function (callback) {
    run('login', '', callback);
};

AKSDK.pay = function (data, callback) {
    run('pay', data, callback);
};

AKSDK.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run('logCreateRole', data);
};

AKSDK.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run('logEnterGame', data);
};

AKSDK.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run('logRoleUpLevel', data);
};

AKSDK.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    }
};

AKSDK.msgCheck = function (content, callback) {
    run('msgCheck', content, callback);
};