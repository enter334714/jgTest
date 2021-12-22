//var sdk = require('../utils/sdklib-2.9.4.min.js');
import sdk from "../utils/sdklib-2.9.4.min.js";
//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: 'tjqy_tjqywwjx_HO', //37-微微剑仙
    partner_label: '37xyx',
    partner_id: '472',
    game_ver: '20.0.19',
    is_auth: false, //授权登录
    partner_android_pid_id: 442,
    partner_ios_pid_id: 484,
    partner_gid_id: 1014883,
    partner_uid: 0,
    tmpId: {1:'PJP2iuFkN9fgsQxuMSzC4-fR2p0J1K1E3TBVYVAwasg', 2:'L8EiLRlJGEWYPYgOzA3cqvLfL22OoikRhZii1xdEGsw', 3:'PJP2iuFkN9fgsQxuMSzC4-fR2p0J1K1E3TBVYVAwasg'},  // 订阅的类型 和 模板id
};
window.config = config;
var PARTNER_SDK = mainSDK();
var HOST = 'sdk.sh9130.com';
var user_game_info = null;
var user_invite_info = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;




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
            wx.showShareMenu();
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

        login: function (data,callback) {
            console.log("[SDK]调起登录");
            callbacks['login'] = typeof callback == 'function' ? callback : null;
            var self = this;
            let pid  = sysInfo.platform == 'android' ? config.partner_android_pid_id:config.partner_ios_pid_id;
            var params ={pid:pid,gid:config.partner_gid_id}
            sdk.login(params,function (res) {
                console.log("渠道返回"+JSON.stringify(res));
                self.do_login(res);
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
                            config.partner_uid = data.data.ext.partner_uid;
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
            console.log("[SDK]CP调用分享 type=" + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);

                var query_str = data.query;

                // sdk.getShareInfo({
                //     data: {
                //         path: 'pages/index/index'
                //     }
                // }).then(res => {
                //     //console.log('res==',res)
                //     //res== {code:200,data:{},msg:'success'}
                //     // do something
                //     //console.log('share_query：'+`state=${res.data.state}`+'&'+query_str)
                //     // 小游戏
                //     wx.onShareAppMessage(function () {
                //         return {
                //             title: res.data.title,
                //             imageUrl: res.data.image,
                //             query: `state=${res.data.state}`+'&'+query_str
                //         }
                //     })

                // });

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

            let ret = {
                data:{}
            };
            var params = {
                "type":"msgSecCheck",      // 必填,信息安全检查类型
                "data":{content:content },    // 信息安全检查内容
              };
            sdk.checkSecurity(params,function(res){
                console.log("内容检测"+JSON.stringify(res));
                if(res.state == 1){
                    ret.statusCode = 200;
                    ret.data.state = 1;
                }else{
                    ret.statusCode = 0;
                    ret.data.state = 0;
                }
                callback && callback(ret);
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
                            if(sysInfo.platform == "android"){
                                sdk.androidImport(data.data.pay_data,function(res){
                                    console.log("渠道支付"+JSON.stringify(res))
                                });
                            }else{
                                sdk.otherImport(data.data.pay_data,function(res){
                                    console.log("渠道支付"+JSON.stringify(res))
                                });
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
            var params = {
                "dsid":data.serverid,      // 必填,游戏服ID
                "dsname":data.servername,    // 必填,游戏服名称
                "drid":data.roleid,      // 必填,角色ID
                "drname":data.rolename,    // 必填,角色名称
                "drlevel":data.rolelevel,   // 必填,角色等级
                "drctime":data.rolecreatetime,   // 必填,CP角色创建时间
                "dpname":"",    // 非必填,CP公会名称  虽然不是必填 如果没有 建议传一个默认值
                "dviplevel":"",    // 非必填,CP角色VIP等级   虽然不是必填 如果没有 建议传一个默认值
                "drbalance":"",    // 非必填,角色余额       虽然不是必填 如果没有 建议传一个默认值
                "drlevelmtime":"", // 非必填,角色升级的时间点   虽然不是必填 如果没有 建议传一个默认值
                };
            sdk.createRole(params,function(res){
                console.log('创角上报'+JSON.stringify(res));
            });
            // 渠道上报
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

            var params = {
                "dsid":data.serverid,      // 必填,游戏服ID
                "dsname":data.servername,    // 必填,游戏服名称
                "drid":data.roleid,      // 必填,角色ID
                "drname":data.rolename,    // 必填,角色名称
                "drlevel":data.rolelevel,   // 必填,角色等级
                "drctime":data.rolecreatetime,   // 必填,CP角色创建时间
                "dpname":"",    // 非必填,CP公会名称  虽然不是必填 如果没有 建议传一个默认值
                "dviplevel":"",    // 非必填,CP角色VIP等级   虽然不是必填 如果没有 建议传一个默认值
                "drbalance":"",    // 非必填,角色余额       虽然不是必填 如果没有 建议传一个默认值
                "drlevelmtime":"", // 非必填,角色升级的时间点   虽然不是必填 如果没有 建议传一个默认值
                };
            sdk.enterGame(params,function(res){
                console.log('进入游戏'+JSON.stringify(res));
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

            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                };
            }

            this.log('levelup', postData);

            var params = {
                "dsid":data.serverid,      // 必填,游戏服ID
                "dsname":data.servername,    // 必填,游戏服名称
                "drid":data.roleid,      // 必填,角色ID
                "drname":data.rolename,    // 必填,角色名称
                "drlevel":data.rolelevel,   // 必填,角色等级
                "drctime":data.rolecreatetime,   // 必填,CP角色创建时间
                "dpname":"",    // 非必填,CP公会名称  虽然不是必填 如果没有 建议传一个默认值
                "dviplevel":"",    // 非必填,CP角色VIP等级   虽然不是必填 如果没有 建议传一个默认值
                "drbalance":"",    // 非必填,角色余额       虽然不是必填 如果没有 建议传一个默认值
                "drlevelmtime":"", // 非必填,角色升级的时间点   虽然不是必填 如果没有 建议传一个默认值
                };
            sdk.roleLevelUp(params,function(res){
                console.log('角色升级'+JSON.stringify(res));
            });
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
                is_from_min: 1,
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

        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data,callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({shareMessageToFriendScene:cp_activity_id});

            callback(result);
        },

        subscribeMessage : function (tmplIds, callback){
            console.log('[SDK]订阅消息：'+tmplIds);
            //获取模板ID
            callbacks['subscribeMessage'] = typeof callback == 'function' ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log("[SDK]订阅消息返回：成功");
                    console.log(res);
                    callbacks['subscribeMessage'] && callbacks['subscribeMessage'](res);
                },
                fail(res) {
                    console.log("[SDK]订阅消息返回：失败");
                    console.log(res);
                    callbacks['subscribeMessage'] && callbacks['subscribeMessage'](res);
                }
              })
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

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel,rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime:rolecreatetime
    };
    run('logCreateRole', data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel,rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime:rolecreatetime
    };

    run('logEnterGame', data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel,rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime:rolecreatetime
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

exports.setMessageToFriendQuery = function (data,callback) {
    run('setMessageToFriendQuery',data,callback);
};
exports.subscribeMessage = function (data, callback) {
    run('subscribeMessage', data, callback);
};