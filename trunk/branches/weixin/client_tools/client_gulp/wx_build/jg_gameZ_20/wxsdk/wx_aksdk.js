import sdk from '../utils/hywxgsdk_v102'

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: 'tjqy_tjqymlxyxmffyj_QI',
    partner_label: 'myxyx',
    partner_id: '556',
    game_ver: '51.0.5',
    is_auth: false, //授权登录
    partner_appid: 'HohOfQEqlG9VnlRQJlS7G8BeAejMTpLF', //游戏appid
};
window.config = config;
var PARTNER_SDK = mainSDK();
var HOST = 'sdk.sh9130.com';
var user_game_info = null;
var user_invite_info = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;
var hysdkobj;

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
            //实例化sdk
            hysdkobj = new sdk(
                {
                    appid: config.partner_appid // 平台给予的appid（必传）
                }
            )
        },

        login: function (data,callback) {
            console.log("[SDK]调起登录");
            callbacks['login'] = typeof callback == 'function' ? callback : null;
            var self = this;

            hysdkobj.login({
                success:function(res){
                  //登录成功回调。
                //   partner_user_info = 
                //   self.do_login(partner_user_info);
                  
                  if(res.code==0)
                  {
                    console.log('渠道登录返回成功'+ JSON.stringify(res));
                    self.do_login({token:res.data.token});
                  }else{
                        callbacks['login'] && callbacks['login'](1, {errMsg: res.msg});
                  }
                  //处理登录成功逻辑
                },
                fail:function(res){
                  //登录失败回调
                  console.log("登录失败");
                  console.log(res);//回传参数
                  //处理登录失败逻辑
                }
              }); // login end 
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data['token'] = info.token;

            if (user_invite_info && typeof user_invite_info == 'object') {
                for (var key in user_invite_info) {
                    public_data[key] = user_invite_info[key];
                }
            }
            // console.log(public_data)
            // return ;
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
                                    //保存运营方uid
                                    wx.setStorageSync('partner_login_uid', data.data.openid);
                                    
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
                            callbacks['login'] && callbacks['login'](1, {
                                errMsg: data.msg
                            });
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
            console.log("[SDK]CP调用分享 type=" + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);
                var query_str = data.query;
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
                    console.log("[SDK]获取游戏版本结果" + JSON.stringify(res));

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
                    console.log("[SDK]上报分享结果返回:" + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log("[SDK]查看文本是否有违规内容" + content);
            
            wx.request({
                url: 'https://' + HOST + '/partner/data/msg_check/' + config.partner_id + '/' + config.game_pkg,
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    content:content,
                    user_id: wx.getStorageSync('partner_login_uid')
                },
                success: function (res) {
                    console.log("[SDK]查看文本是否有违规内容结果返回:" + JSON.stringify(res));

                    let ret = {
                        data:{}
                    };
                    if(res.data.code == 1){
                        ret.statusCode = 200;
                        ret.data.state = 1;
                    }else{
                        ret.statusCode = 0;
                        ret.data.state = 0;
                    }
                    callback && callback(ret);
                }
            });

        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log("[SDK]调起支付，CP传值："+ JSON.stringify(data));

            var self = this;
            callbacks['pay'] = typeof callback == 'function' ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            var session_key = wx.getStorageSync('plat_session_key');
            if (!sdk_token) {
                callbacks['pay'] && callbacks['pay'](1, {
                    errMsg: "用户未登录，支付失败！"
                });
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
                uid:wx.getStorageSync('partner_login_uid')
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
                    console.log("[SDK]完成创建订单"+JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            if(data.data.ext == ''){
                                // var params = {
                                //     amount: data.data.pay_data.amount, 	            // 充值金额 单位为元 	Y 	Number
                                //     appid: config.partner_appid, //appid
                                //     callbackinfo: data.data.pay_data.callbackinfo, //CP 扩展信息
                                //     cp_order_id: data.data.pay_data.cp_order_id, // CP订单号
                                //     role_id: data.data.pay_data.role_id, //角色ID
                                //     role_name: data.data.pay_data.role_name, // 角色名字
                                //     sign: data.data.pay_data.sign, //签名
                                //     ts: data.data.pay_data.ts, // 时间戳
                                //     user_id: wx.getStorageSync('partner_login_uid'),//运营方平台用户ID
                                // }
                                var params = data.data.pay_data;
                                //调用支付接口
                                hysdkobj.pay({
                                    orderParams:params,
                                    success:function(res){
                                        console.log("充值成功回调")
                                        console.log(res)
                                    },
                                    fail:function(res){
                                        console.log("充值失败回调处理",res);
                                    }
                                }); // pay end 
                            }else{
                                self.extDo({ext1:data.data.ext,ext2:data.data.pay_data});
                            }
                        } else {
                            callbacks['pay'] && callbacks['pay'](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks['login'] && callbacks['login'](1, {
                            errMsg: '请求平台服务器失败！'
                        });
                    }
                }
            });
        },
        extDo: function(data){
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: 'pages/pay/pay?order_id='+data.ext2.cpOrderId+'&money='+data.ext2.amount/100,
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

            // 渠道上报
            var params = {
                role_id : data.roleid, 	        // 角色 id 	Y 	String
                role_name : data.rolename,	    // 角色名 	Y 	String
                role_level : data.rolelevel,	    // 角色等级 	Y 	String
                server_id : data.serverid,	    // 角色所在服 id 	Y 	String
                user_id : wx.getStorageSync('partner_login_uid'),	// uid
            }
            //角色上传接口（客户端上传）
            hysdkobj.sendrole({
                roleInfo:params,
                success:function(res){
                    console.log('角色创建：'+JSON.stringify(res))
                },
                fail:function(res){
                    console.log("角色创建失败回调处理",res);
                }
            }); //sedrole end
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

            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                };
            }

            this.log('enter', postData);

            //进入游戏确认邀请成功
            if (user_invite_info) {
                this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, data.roleid, data.serverid, user_invite_info.scene);
            }

            // 渠道上报
            // var params = {
            //     role_id : data.roleid, 	        // 角色 id 	Y 	String
            //     role_name : data.rolename,	    // 角色名 	Y 	String
            //     role_level : data.rolelevel,	    // 角色等级 	Y 	String
            //     server_id : data.serverid,	    // 角色所在服 id 	Y 	String
            //     user_id : wx.getStorageSync('partner_login_uid'),	// uid
            // }
            // hysdkobj.sendrole({
            //     roleInfo:params,
            //     success:function(res){
            //         console.log('进入游戏：'+JSON.stringify(res))
            //     },
            //     fail:function(res){
            //         console.log("进入游戏失败回调处理",res);
            //     }
            // }); //sedrole end
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

            // 渠道上报
            var params = {
                role_id : data.roleid, 	        // 角色 id 	Y 	String
                role_name : data.rolename,	    // 角色名 	Y 	String
                role_level : data.rolelevel,	    // 角色等级 	Y 	String
                server_id : data.serverid,	    // 角色所在服 id 	Y 	String
                user_id : wx.getStorageSync('partner_login_uid'),	// uid
            }
            hysdkobj.sendrole({
                roleInfo:params,
                success:function(res){
                    console.log('角色升级：'+JSON.stringify(res))
                },
                fail:function(res){
                    console.log("角色升级失败回调处理",res);
                }
            }); //sedrole end
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
                mac: '0000',
                is_from_min:1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : 'WIFI',
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == 'android' ? 1 : 2,
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

        // 微端小助手
        weiduanHelper: function() {
            sdk.goBindPhone()
        },
        sendUrl: function () {
            sdk.goBindPhone();
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data,callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({shareMessageToFriendScene:cp_activity_id});

            callback(result);
        },
        // 获取SVIP信息
        getSvipInfo: function (data,callback) {
            console.log('开始获取svip信息');
            var api = "https://cdn.gowan8.com/image/qykfwx.json";
            wx.request({
                url: api,
                method: 'GET',
                dataType: 'json',
                success: function (res) {
                    // console.log("获取图片："+res.data);
                    var info = {
                        qrcode : res.data
                    }
                    callback && callback(info);
                }
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

exports.getPublicData = function () {
    run('getPublicData');
};

exports.weiduanHelper = function () {
    run('weiduanHelper');
};
exports.sendUrl = function () {
    run('sendUrl');
};

exports.setMessageToFriendQuery = function (data,callback) {
    run('setMessageToFriendQuery',data,callback);
};

exports.getSvipInfo  = function (data,callback) {
    run('getSvipInfo',data,callback);
};
