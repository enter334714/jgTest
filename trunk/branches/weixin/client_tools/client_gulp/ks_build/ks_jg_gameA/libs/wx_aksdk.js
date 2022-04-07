//TODO 替换对应参数
var config = {
    game_id: '256',
    game_pkg: 'tjqy_tjqyksxyx_KE',
    partner_label: 'kuaishouxyx',
    partner_id: '499',
    game_ver: '1.0.20',
    is_auth: false, //授权登录

};
window.config = config;
var PARTNER_SDK = mainSDK();
var HOST = 'sdk.sh9130.com';
var user_game_info = null;
var user_invite_info = null;
var sysInfo = ks.getSystemInfoSync();
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


            var uuid = ks.getStorageSync('plat_uuid');
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                ks.setStorageSync('plat_uuid', uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = ks.getStorageSync('plat_idfv');
            if (!idfv) {
                idfv = self.uuid(16, 32);
                ks.setStorageSync('plat_idfv', idfv);
            }
            if (ks.isLaunchFromApk()) {
                // 表明游戏从Apk启动
            } else {
                // 表明游戏不是从Apk启动
            }

            var info = ks.getLaunchOptionsSync();
            var scene = info.from ? info.from : '';


            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                ks.setStorageSync('plat_ad_code', info.query.ad_code);
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
        },

        login: function (data,callback) {
            console.log("[SDK]调起登录");
            callbacks['login'] = typeof callback == 'function' ? callback : null;
            var self = this;

            // 渠道SDK初始化
            ks.login({
                success: (result) => {
                    console.log("登录成功:" + JSON.stringify(result));
                    partner_user_info = result;
                    self.do_login(result);
                },
                fail: (error) => {
                    console.log("登录失败:" + JSON.stringify(error));
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

            ks.request({
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
                            partner_user_info['templateId'] = data.data.ext;
                            try {
                                ks.setStorageSync('plat_sdk_token', data.data.sdk_token);
                                ks.setStorageSync('plat_uid', data.data.user_id);
                                ks.setStorageSync('plat_username', data.data.username);
                                if(data.data.ext){
                                    ks.setStorageSync('plat_session_key', data.data.ext);
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

                var partner_query = mgsdk.shareQueryStr();
                var query_str = data.query+'&'+partner_query;

                if(cp_activity_id !=''){
                    query_str = query_str + '&cp_activity_id='+ cp_activity_id;
                }

                console.log('query_str：'+query_str);

                //记录开始分享
                self.logStartShare(type);
                ks.shareAppMessage({
                    templateId:partner_user_info.templateId,
                    success:function(res){
                        console.log("分享成功");
                    },
                    fail:function(res){
                        console.log("分享失败");
                    },
                    complete:function(res){
                        console.log("分享完成");
                    }
                })
            });
        },

        logStartShare: function (type) {
            var sdk_token = ks.getStorageSync('plat_sdk_token');
            ks.request({
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
            // wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log("[SDK]检查游戏版本");
            var sdk_token = ks.getStorageSync('plat_sdk_token');
            ks.request({
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
            var sdk_token = ks.getStorageSync('plat_sdk_token');
            ks.request({
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
            var sdk_token = ks.getStorageSync('plat_sdk_token');
            ks.request({
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
            ks.request({
                url: 'https://' + HOST + '/partner/data/msg_check/' + config.partner_id + '/' + config.game_pkg,
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    content:content,
                },
                success: function (res) {
                    console.log("[SDK]查看文本是否有违规内容结果返回:" + JSON.stringify(res));
                    console.log(res)
                    callback && callback(res);
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
            var sdk_token = ks.getStorageSync('plat_sdk_token');
            var session_key = ks.getStorageSync('plat_session_key');
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
                game_user_id:partner_user_info.gameUserId,
                game_token:partner_user_info.gameToken,
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data['order_data'] = JSON.stringify(order_data);

            //发起网络请求
            ks.request({
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
                            console.log("客户端平台"+platform);
                            if(platform == "android"){
                                var pay_object = data.data.pay_data;
                                if(data.data.balance > 0){
                                    ks.showModal({
                                        title: '余额提示',
                                        content: data.data.tips,
                                        success (res) {
                                            if (res.confirm) {
                                                console.log('用户点击确定')
                                                self.gameGoPay(order_data,pay_object);
                                            } else if (res.cancel) {
                                                console.log('用户点击取消')
                                            }
                                        }
                                    })

                                }else{
                                    pay_object.success = (result) => {
                                        console.log("支付结果成功"+JSON.stringify(result));
                                        self.gameGoPay(order_data,pay_object);
                                    }
                                    pay_object.fail = (result) => {
                                        console.log("支付结果失败"+JSON.stringify(result));
                                    }
                                    ks.requestPayment(data.data.pay_data);
                                }
                            }else{
                                ks.showToast({
                                    title: '暂不支持该设备充值',
                                    icon: 'success',
                                    duration: 2000
                                })
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
        gameGoPay: function (cpData,androidData) {
            console.log("[SDK]支付完毕，通知服务器发货");
            //请求pay接口
            var self = this;
            var session_key = ks.getStorageSync('plat_session_key');
            var post_data = {
                order_id:androidData.third_party_trade_no,
                game_user_id:partner_user_info.gameUserId,
                server_id:cpData.serverid,
                role_id:cpData.roleid,
                os: sysInfo.system,
                product_id:cpData.productid,
                amount:cpData.price,
                money:cpData.price,
                product_name:cpData.productname,
                product_desc:cpData.productdesc,
                game_token:partner_user_info.gameToken,
            }
            console.log(post_data);
            ks.request({
                url: 'https://' + HOST + '/partner/pay/' + config.partner_id + '/' + config.game_pkg + '/',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data:post_data,
                success: function (res) {
                    console.log("[SDK]米大师支付结果");
                    console.log(res);
                    if(res.statusCode == 200){
                        if(res.data.state == 1){
                            var ret = {
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
            var uid = ks.getStorageSync('plat_uid');
            var username = ks.getStorageSync('plat_username');

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
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = ks.getStorageSync('plat_uid');
            var username = ks.getStorageSync('plat_username');

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
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = ks.getStorageSync('plat_uid');
            var username = ks.getStorageSync('plat_username');

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


        },
        inspireVideo:function (videocallback){

        },
        sendUrl: function (){

        },
        weiduanHelper: function() {

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
            var uuid = ks.getStorageSync('plat_uuid');
            var idfv = ks.getStorageSync('plat_idfv');
            var ad_code = ks.getStorageSync('plat_ad_code');

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
                net_type: sysInfo.wifiEnabled == false ? '4G' : 'WIFI',
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

            ks.request({
                url: 'https://' + HOST + '/partner/h5Log/?type=' + type + '&data=' + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {

        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data,callback) {
            var cp_activity_id = data.activity_id;
        },


        saveAPKShortcut:function(short_callback){
            console.log("开始保存到桌面");
            ks.getAPKShortcutInstallStatus((result) => {
                if (result.code === -10005) {
                    // 表明暂不支持该功能
                    ks.showToast({
                        title: '暂不支持该功能',
                        icon: 'success',
                        duration: 2000
                    })
                    short_callback(1);
                } else if (result.code === 1) {
                    // 成功获取桌面apk安装状态
                    if (!result.installed) {
                        // 表明没有安装，此时可以调用kwaigame.saveApkShortcut()保存到桌面
                        ks.saveAPKShortcut((result) => {
                            if (result.code === -10005) {
                                // 表明暂不支持该功能
                                ks.showToast({
                                    title: '暂不支持该功能',
                                    icon: 'success',
                                    duration: 2000
                                })
                                short_callback(1);
                            } else if (result.code === 1) {
                                // 成功，提示安装apk的弹窗展示成功
                                ks.showToast({
                                    title: '安装成功',
                                    icon: 'success',
                                    duration: 2000
                                })
                                short_callback(0);
                            } else {
                                // 失败，提示安装apk的弹窗未弹出，可能是由于已安装桌面apk或者其他原因
                                ks.showToast({
                                    title: '安装失败',
                                    icon: 'success',
                                    duration: 2000
                                })
                                short_callback(1);
                            }
                        });
                    }
                } else {
                    // 失败
                    short_callback(1);
                }
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

exports.getPublicData = function () {
    run('getPublicData');
};

exports.setMessageToFriendQuery = function (data,callback) {
    run('setMessageToFriendQuery',data,callback);
}


exports.requestSubscribeMessage = function (callback) {
    run('requestSubscribeMessage',callback);
}
exports.inspireVideo = function (callback) {
    run('inspireVideo','',callback);
};
exports.sendUrl = function () {
    run('sendUrl');
};
exports.weiduanHelper = function () {
    run('weiduanHelper');
};
exports.saveAPKShortcut = function (callback) {
    run('saveAPKShortcut',callback);
};
