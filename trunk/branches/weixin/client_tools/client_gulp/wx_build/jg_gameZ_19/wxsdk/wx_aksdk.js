import huoSdk from '../utils/huosdk-2.2.1';
//TODO 替换对应参数
var config = {
    game_id: '256',
    game_pkg: 'tjqy_tjqyzsfyhswxxcx2_SM',
    partner_label: 'hsxyx2',
    partner_id: '569',
    game_ver: '49.0.7',
    is_auth: false, //授权登录
    partner_app_id: 81240824,
    partner_mp_id: 'wx678b679417ddfee2',
};
window.config = config;
var PARTNER_SDK = mainSDK();
var HOST = 'sdk.sh9130.com';
var user_game_info = null;
var user_invite_info = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;
var partner_data = null;
function mainSDK() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log("[SDK]CP调用init接口");
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

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync('plat_ad_code', info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log('start', data);
            //TODO 替换对应参数
            

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                user_invite_info = {
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

        //TODO 替换联运登录接口
        login: function (data,callback) {
            var self = this;
            console.log("[SDK]调起登录");
            callbacks['login'] = typeof callback == 'function' ? callback : null;

            //初始化回调
            huoSdk.init({
                app_id: config.partner_app_id,
                mp_id: config.partner_mp_id
            }).then(res => {
                console.log("[SDK]初始化回调：",res);
                wx.showShareMenu({withShareTicket: true});

                if(config.is_auth){
                    //授权登录
                    wx.getSetting({
                        success: function (res) {
                            if (res.authSetting['scope.userInfo']) {
                                //已授权
                                wx.getUserInfo({
                                    success: res => {
                                        console.log("[SDK]玩家授权更新信息回调:",res);
                                        huoSdk.updateUserInfo({
                                            data: {
                                                raw_data: res.rawData,
                                                signature: res.signature,
                                                encrypted_data: res.encryptedData,
                                                iv: res.iv
                                            }
                                        })
                                    }
                                });
                                self.weak_login();
                            }else{
                                var system_info = wx.getSystemInfoSync();
                                var screen_width = system_info.screenWidth;
                                var screen_height = system_info.screenHeight;
                                var btn_width = screen_width * 2 / 4;
                                var btn_height = btn_width / 4;
                                var btn_left = (screen_width - btn_width) / 2;
                                var btn_top = screen_height / 2;
                                let btn = wx.createUserInfoButton({
                                    type: 'text',
                                    text: '授权登录游戏',
                                    style: {
                                        left: btn_left,
                                        top: btn_top,
                                        width: btn_width,
                                        height: btn_height,
                                        lineHeight: btn_height,
                                        backgroundColor: '#0cff5a',
                                        color: '#ffffff',
                                        textAlign: 'center',
                                        fontSize: 16,
                                        borderRadius: 4
                                    }
                                });
    
                                btn.onTap(res => {
                                    huoSdk.updateUserInfo({
                                        data: {
                                            raw_data: res.rawData,
                                            signature: res.signature,
                                            encrypted_data: res.encryptedData,
                                            iv: res.iv
                                        }
                                    }).then(res => {
                                        console.log("[SDK]玩家授权更新信息回调:",res);
                                        self.weak_login();
                                    });
                                    // 按钮隐藏
                                    btn.hide();
                                });
                            }
                        }
                    });
    
                }else{
                    self.weak_login();
                }

            });

            

        },

        weak_login: function(){

            var self = this;
            let opts = wx.getLaunchOptionsSync();
            huoSdk.login({
                data: {
                    // 路径跳转从 state 参数获取，扫码跳转从 scene 参数获取，因此此处需要兼容处理
                    state: opts.query.state || opts.query.scene || ''
                }
            }).then(res => {
                console.log("[SDK]登录回调:",res);
                if(res.code===200){
                    self.do_login(res.data);
                }else{
                    callbacks['login'] && callbacks['login'](1, {errMsg: res.msg});
                }
            });

        },

        do_login: function (info) {
            var self = this;
            partner_data = {
                user_token : info.cp_user_token,
                mem_id : info.mg_mem_id,
            };
            var public_data = self.getPublicData();
            public_data['is_from_min'] = 1;
            public_data['partner_data'] = JSON.stringify(partner_data);
            if (user_invite_info && typeof user_invite_info == 'object') {
                for (var key in user_invite_info) {
                    public_data[key] = user_invite_info[key];
                }
            }

            //发起网络请求
            wx.request({
                url: 'https://' + HOST + '/partner/auth',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log("[SDK]登录结果：",res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync('plat_sdk_token', data.data.sdk_token);
                                wx.setStorageSync('plat_uid', data.data.user_id);
                                wx.setStorageSync('plat_username', data.data.username);
                                if(data.data.ext){
                                    wx.setStorageSync('plat_session_key', data.data.ext);
                                }
                            } catch (e) {
                            }
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
                            callbacks['login'] && callbacks['login'](1, {errMsg: data.msg});
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo('menu', function (data) {
                            console.log("[SDK]开始监听右上角菜单分享", data);
                            self.logStartShare('menu');
                            huoSdk.getShareInfo({
                                data: {
                                    path: 'pages/index/index'
                                }
                            }).then(res => {
                                console.log("[SDK]获取监听右上角菜单分享参数", res);
                                wx.onShareAppMessage(function () {
                                    self.addShareInfo();
                                    return {
                                        title: res.data.title,
                                        imageUrl: res.data.image,
                                        query: data.query+'&state='+res.data.state
                                    }
                                });
                                
                            })
                        });

                    } else {
                        callbacks['login'] && callbacks['login'](1, {
                            errMsg: '请求平台服务器失败！'
                        });
                    }
                }
            });

        },

        addShareInfo: function () {
            huoSdk.addShareInfo({
                data: {
                  to_target: 'wx'
                }
              }).then((res)=>{
                  console.log('[SDK]分享上报回调：',res)
              })
        },

        share: function (data) {
            callbacks['share'] = typeof callback == 'function' ? callback : null;
            var type = data.type || 'share';
            console.log("[SDK]CP调用分享 type=" + type);
            var self = this;

            this.getShareInfo(type, function (data) {
                self.logStartShare(type);
                huoSdk.getShareInfo({
                    data: {
                        path: 'pages/index/index'
                    }
                }).then(res => {
                    console.log("[SDK]获取分享参数", res);
                    self.addShareInfo();
                    wx.shareAppMessage({
                        title: res.data.title,
                        imageUrl: res.data.image,
                        query: data.query+'&state='+res.data.state
                    });

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
                success: function (res) {}
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
                    console.log("[SDK]获取游戏版本结果");
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callback && callback({
                                develop: 0
                            });
                        }
                    } else {
                        callback && callback({
                            develop: 0
                        });
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
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks['share'] && callbacks['share'](1, {
                                errMsg: '分享失败：' + data.msg
                            });
                        }
                    } else {
                        callbacks['share'] && callbacks['share'](1, {
                            errMsg: '获取分享数据失败！'
                        });
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

        msgCheck: function (content, callback) {
            console.log("[SDK]查看文本是否有违规内容");
            var data = {
                statusCode:200,
                data:{state:0}
            }
            huoSdk.checkMsg({
                data: {
                    content: content
                }
            }).then(res => {
                console.log("[SDK]查看文本是否有违规内容结果返回:",res);
                data.data.state = res.code===200 ? 1 : 0;
                callback && callback(data);
            }, err => {
                console.log("[SDK]查看文本是否有违规内容结果返回:",err);
                data.data.state = 0;
                callback && callback(data);
            })
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log("[SDK]调起支付，CP传值：",data);
            var self = this;
            callbacks['pay'] = typeof callback == 'function' ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            var session_key = wx.getStorageSync('plat_session_key');
            if (!sdk_token && !session_key) {
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
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log("[SDK]联运支付参数"+JSON.stringify(data.data.pay_data));
                            if(data.data.ext == ''){
                                huoSdk.checkPay({
                                    data:data.data.pay_data
                                    }).then(res => {
                                    console.log("[SDK]下单回调：",res);
                                    if(res.code!=='200'){
                                        callbacks['pay'] && callbacks['pay'](1, {errMsg: res.msg});
                                    }
                                });
                            }else{
                                self.extDo({ext1:data.data.ext,ext2:data.data.pay_data});
                            }
                            

                        } else {
                            callbacks['pay'] && callbacks['pay'](1, {errMsg: data.errMsg});
                        }
                    } else {
                        callbacks['login'] && callbacks['login'](1, {errMsg: '请求平台服务器失败！'});
                    }
                }
            });
        },
        extDo: function(data){
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: 'pages/pay/pay?order_id='+data.ext2.orderId+'&money='+data.ext2.amount/100,
                extraData: {

                },
                envVersion: 'release',
                success(res) {
                    // 打开成功
                }
            })
        },
        logCreateRole: function (data, callback) {
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

            this.upRoleInfo(2, data);

        },

        //进入游戏
        logEnterGame: function (data, callback) {
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

            this.upRoleInfo(1, data);

            //进入游戏确认邀请成功
            if (user_invite_info) {
                this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, data.roleid, data.serverid, user_invite_info.scene);
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

            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                };
            }
            this.log('levelup', postData);

            this.upRoleInfo(3, data);
        },

        // 角色上报
        upRoleInfo: function(type, data){
            var roleInfo = {
                'role-event': type,
                'role-role_id': data.roleid,
                'role-role_name': data.rolename,
                'role-role_level': data.rolelevel,
                'role-server_id': data.serverid,
                'role-server_name': data.servername,
                'role-combat_num': data.rolepower ? data.rolepower : 0,
                'role-role_vip': 0,
            };
            huoSdk.updateRole({
                data: roleInfo
            }).then(res => {
                console.log('[SDK]角色上报回调：',res)
            }, err => {
                console.log('[SDK]角色上报回调：',err)
            });
            
            if(data.callback){
                huoSdk.userCheckpay ({
                data: {
                    'role-server_id': data.serverid,
                    'role-role_id': data.roleid,
                    'role-role_level': data.rolelevel,
                    'role-role_vip': 0,
                    'role-combat_num': data.rolepower ? data.rolepower : 0
                }
                }).then(res => {
                    console.log('[SDK]检查角色支付开启状态回调：',res)
                    if(res.code===200){
                        if(res.data.check===3){
                            data.callback({'show_pay':0});
                        }else{
                            data.callback({'show_pay':1});
                        }
                    }else{
                        data.callback({'show_pay':1});
                    }
                }, err => {
                    console.log('[SDK]检查角色支付开启状态回调：',err);
                    data.callback({'show_pay':1});
                })
            }
            
        },

        subscribe: function(){
            huoSdk.subscribe().then(res=>{
                console.log('[SDK]消息订阅回调：',res);
            }).catch(err=>{
                console.log('[SDK]消息订阅回调：',err);
            })
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
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
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: '0000',
                net_type: system.wifiSignal == 0 ? '4G' : 'WIFI',
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == 'android' ? 1 : 2,
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
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
        //获取验证码
        sendCode: function(data,callback){

            console.log('开始获取验证码：',data.phone);
            huoSdk.sendCode({
                data:{
                    "sms-type":6,
                    "sms-mobile":data.phone
                }
            }).then(res=>{
                if(res.code==200){
                    callback && callback(0,res);
                }else{
                    callback && callback(1,res);
                }
            }).catch(err=>{
                callback && callback(1,err)
            })
            
        },
        //绑定手机
        bindPhone: function(data,callback){

            console.log('开始绑定手机：',data.phone,data.code);
                huoSdk.bindPhone({
                    data:{
                        "sms-type":6,
                        "sms-mobile":data.phone,
                        "sms-code":data.code
                    }
                }).then(res=>{
                    if(res.code==200){
                        callback && callback(0,res);
                    }else{
                        callback && callback(1,res);
                    }
                }).catch(err=>{
                    callback && callback(1,err)
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
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra?extra.rolepower:0,
        callback: extra?extra.callback:null,
    };

    run('logEnterGame', data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra?extra.rolepower:0,
        callback: extra?extra.callback:null
    };
    run('logRoleUpLevel', data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run('share', data);
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
exports.subscribe = function () {
    run('subscribe');
};
exports.subscribeMessage = function (data, callback) {
    run('subscribeMessage', data, callback);
};

exports.sendCode = function (data,callback) {
    run('sendCode',data, callback);
};

exports.bindPhone = function (data,callback) {
    run('bindPhone',data, callback);
};
