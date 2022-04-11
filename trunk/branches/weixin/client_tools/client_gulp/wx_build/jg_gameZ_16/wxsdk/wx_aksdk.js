// 引入渠道JS资源 TODO
import Sdk from '../utils/ad_mini-sdk.js'
var config = {
    game_id:256,
    game_pkg: 'tjqy_tjqyhjxc_OK',
    partner_label: 'wangtuoxyx',
    partner_id: '457',
    game_ver:'46.0.5',
    is_auth: false, //授权登录
    game_key:'86c9c007fb89c1102c350e918e472b7b',
    client_key:'4f6cfaad77485fe4ac54b160e90e9cac'
};
window.config = config;
var PARTNER_SDK = mainSDK();
var HOST = 'sdk.sh9130.com';
var user_game_info   = null;
var user_invite_info = null;
var user_invite_by_activity = null;

var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var sdkUserInfo = null;
var AD_HOST = 'sdkdata.sh9130.com';
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

            console.log('[SDK]获取getLaunchOptionsSync信息',JSON.stringify(info));

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
                config.game_ver = game_ver;
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },

        //登录接口
        login: function (data, callback) {
            var self = this;
            var sdkCfg = {game_id:config.game_id,sdk_ver:config.game_ver,game_key:config.game_key,client_key:config.client_key};
            Sdk.sdkInit(sdkCfg, function(res) {
                if(res){//登录成功后，回调方法会返回res，如果res为true则代表初始化成功，可以调用其他方法了//调用登录，角色上传等方法
                    console.log(res);
                    Sdk.sdkLogin(function(sdkUserInfo){
                        console.log("sdk_user_info: ", sdkUserInfo);
                        window.sdkUser = sdkUserInfo
                        wx.setStorage({
                            key:"sdkUserInfo",
                            data:sdkUserInfo
                        })
                        console.log("[SDK]调起登录");
                        self.do_login(sdkUserInfo)
                    })
                }
            })
            callbacks['login'] = typeof callback == 'function' ? callback : null;
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

                                sdkUserInfo = wx.getStorageSync('sdkUserInfo')
                                console.log("getStorageSync获取sdkUserInfo信息"+JSON.stringify(sdkUserInfo));
                        
                                if(typeof sdkUserInfo === "undefined" || sdkUserInfo ==='') {
                                    console.log("全局sdkUser变量"+JSON.stringify(window.sdkUser));
                                    sdkUserInfo = window.sdkUser
                                }
                            } catch (e) {
                                callbacks['login'] && callbacks['login'](1, {
                                    errMsg: '请求失败！'
                                });
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
                success: function (res) {}
            });
        },

        openService: function (data) {
            if(data) {
                let openParm = {
                    user_id:sdkUserInfo.uid,
                    game_id:config.game_id,
                    role_name:data.roleName,
                    role_id:data.roleId,
                    server_name:data.serverName,
                    server_id:data.serverId
                }
                Sdk.openGS(openParm)
            } else {
                 wx.openCustomerServiceConversation();
            }
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
                    console.log("[SDK]获取分享参数结果："+JSON.stringify(res));
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
            sdkUserInfo = wx.getStorageSync('sdkUserInfo');
            console.log("[SDK]查看文本是否有违规内容");
            var sdk_token = wx.getStorageSync('plat_sdk_token');

            wx.request({
                url: 'https://' + AD_HOST + '/partner/data/msg_check/'+config.partner_id+'/'+config.game_pkg,
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content:content,
                    openid:sdkUserInfo.open_id,
                },
                success: function (res) {
                    console.log("[SDK]查看文本是否有违规内容结果返回:");
                    console.log(res);
                    callback && callback(res);
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
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            var session_key = wx.getStorageSync('plat_session_key');
            if(!sdk_token){
                callbacks['pay'] && callbacks['pay'](1, {errMsg: "用户未登录，支付失败！"});
                return;
            }

            var sysInfo = wx.getSystemInfoSync();

            var order_data = {
                cpbill: data.cpbill,
                serverid: data.serverid,
                servername: data.servername,
                price: data.price,
                productid: data.productid,
                productname: data.productname,
                extension: data.extension,
                roleid: data.roleid,
                rolename: data.rolename,
                rolelevel: data.rolelevel,
                sdk_token: sdk_token,
                uid:sdkUserInfo.uid,
                buyAmount:data.buyAmount ? data.buyAmount : 1
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
                            //调用渠道下单支付接口 TODO
                            if(data.data.ext == ''){
                                var sdkCfg = {game_id:config.game_id,sdk_ver:config.game_ver,game_key:config.game_key,client_key:config.client_key};
                                Sdk.sdkGenOrder(data.data.pay_data,function(res){
                                    console.log('支付返回===========================>',res);
                                })
                            }else{
                                self.extDo({ext1:data.data.ext,ext2:data.data.pay_data});
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


        extDo: function(data){
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: 'pages/pay/pay?order_id='+data.ext2.cpOrderId+'&money='+data.ext2.money,
                extraData: {

                },
                envVersion: 'release',
                success(res) {
                    // 打开成功
                }
            })
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleId;
            postData['role_lev'] = data.roleLevel;
            postData['role_name'] = data.roleName;
            postData['server_id'] = data.serverId;
            postData['server_name'] = data.serverName;

            if(data.roleid && data.serverid){
                user_game_info = {
                    role_id:  data.roleId,
                    server_id:  data.serverId,
                };
            }

            var sdkCfg = {game_id:config.game_id,sdk_ver:config.game_ver,game_key:config.game_key,client_key:config.client_key};
            var roleData = {
                loginType:1,//1创角 2升级 3退出 4登陆
                user_id:sdkUserInfo.uid,//用户ID，登录回调方法返回的UID,
                game_id:config.game_id,//游戏ID，
                server_id:data.serverId,//区服ID，
                server_name:data.serverName,//区服名字，
                role_id:data.roleId,//角色ID，
                role_name:data.roleName,//角色名字，
                level:data.roleLevel//等级
            }
            Sdk.sdkReportEvent(roleData);

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
                    role_id :data.roleId,
                    role_name :data.roleName,
                    server_id :data.serverId,
                    server_name :data.serverName,
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
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleId;
            postData['role_lev'] = data.roleLevel;
            postData['role_name'] = data.roleName;
            postData['server_id'] = data.serverId;
            postData['server_name'] = data.serverName;

            if(data.roleid && data.serverid){
                user_game_info = {
                    role_id:  data.roleId,
                    server_id:  data.serverId,
                };
            }

            this.log('enter', postData);

            var sdkCfg = {game_id:config.game_id,sdk_ver:config.game_ver,game_key:config.game_key,client_key:config.client_key};
            var roleData = {
                loginType:4,//1创角 2升级 3退出 4登陆
                user_id:sdkUserInfo.uid,//用户ID，登录回调方法返回的UID,
                game_id:config.game_id,//游戏ID，
                server_id:data.serverId,//区服ID，
                server_name:data.serverName,//区服名字，
                role_id:data.roleId,//角色ID，
                role_name:data.roleName,//角色名字，
                level:data.roleLevel//等级
            }
            Sdk.sdkReportEvent(roleData);

            //进入游戏确认邀请成功
            if(user_invite_info){
                this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, data.roleId, data.serverId, user_invite_info.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleId;
            postData['role_lev'] = data.roleLevel;
            postData['role_name'] = data.roleName;
            postData['server_id'] = data.serverId;
            postData['server_name'] = data.serverName;

            if(data.roleid && data.serverid){
                user_game_info = {
                    role_id:  data.roleId,
                    server_id:  data.serverId,
                };
            }

            this.log('levelup', postData);

            var sdkCfg = {game_id:config.game_id,sdk_ver:config.game_ver,game_key:config.game_key,client_key:config.client_key};
            var roleData = {
                loginType:2,//1创角 2升级 3退出 4登陆
                user_id:sdkUserInfo.uid,//用户ID，登录回调方法返回的UID,
                game_id:config.game_id,//游戏ID，
                server_id:data.serverId,//区服ID，
                server_name:data.serverName,//区服名字，
                role_id:data.roleId,//角色ID，
                role_name:data.roleName,//角色名字，
                level:data.roleLevel//等级
            }
            Sdk.sdkReportEvent(roleData);
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

            return {
                is_from_min:1,
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                ad_code: '',
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
            console.log("[SDK]打印public_data：" + public_data);

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
            // 接入渠道微端接口  TODO
            sdk.Download();
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data,callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({shareMessageToFriendScene:cp_activity_id});

            callback && callback(result);
        },

        // 获取定向分享图片跟标题
        getFriendShareInfo: function (callback) {
            this.getShareInfo('activity', function (data) {
                callback && callback({title:data.title,'img':data.img});
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

exports.pay = function (data, callback) {
    run('pay', data, callback);
};

exports.openService = function (data) {
    run('openService',data);
};

exports.isChangePay = function (level,callback) {
    run('isChangePay',level,callback);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverId: serverId,
        serverName: serverName,
        roleId: roleId,
        roleName: roleName,
        roleLevel: roleLevel,
    };
    run('logCreateRole', data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverId: serverId,
        serverName: serverName,
        roleId: roleId,
        roleName: roleName,
        roleLevel: roleLevel,
    };

    run('logEnterGame', data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverId: serverId,
        serverName: serverName,
        roleId: roleId,
        roleName: roleName,
        roleLevel: roleLevel,
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