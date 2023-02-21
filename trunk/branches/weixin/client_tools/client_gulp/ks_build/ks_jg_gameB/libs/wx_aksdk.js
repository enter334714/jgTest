require("./jzJsSdk")
//TODO 替换对应参数
var config = {
    game_id: '256',
    game_pkg: 'tjqy_tjqybfxjzxyx2_YG',
    partner_label: 'jzxyx2',
    partner_id: '581',
    game_ver: '92.0.29',
    is_auth: true, //授权登录
    partner_platid: 5,
    partner_gid: '265',
    partner_ctype: 'own',
    partner_gkey: 'e7a5980c02a99f217d77462ccd79004c'
};
window.config = config;
var PARTNER_SDK = mainSDK();
var HOST = 'sdk.sh9130.com';
var user_game_info = null;
var user_invite_info = null;
var partner_data = {};

function mainSDK() {
    var callbacks = {};
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

            var info = ks.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';


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

        //TODO 替换联运登录接口
        login: function (data, callback) {
            var self = this;
            console.log("[SDK]调起登录");
            callbacks['login'] = typeof callback == 'function' ? callback : null;

            var callback = function (code, data) {
                switch (code) {
                    case "init_success": // 初始化成功
                        console.log(data);
                        break;
                    case "init_fail": // 初始化失败
                        console.log(data);
                        break;
                    case "login_success": // 登录成功
                        // data = {uid: uid, token: token, time: time}；CP拿该信息进行服务端登录校验
                        console.log(data);
                        self.do_login(data);
                        break;
                    case "login_fail": //登录失败
                        console.log(data);
                        break;
                    case "pay_success": // 支付成功（支付以服务端返回为准）
                        console.log(data);
                        break;
                    case "pay_fail": // 支付失败
                        console.log(data);
                        break;
                }
            };
            ks.jzsdk.init(
                {
                    platId: config.partner_platid,
                    gid: config.partner_gid,
                    ctype: config.partner_ctype,
                    gkey: config.partner_gkey
                },
                callback,
                true
            );
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log('[SDK]订阅消息：' + tmplIds);
            //获取模板ID
            callbacks['subscribeMessage'] = typeof callback == 'function' ? callback : null;
            ks.requestSubscribeMessage({
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

        do_login: function (info) {
            var self = this;
            partner_data = info;
            var public_data = self.getPublicData();
            public_data['is_from_min'] = 1;
            public_data['partner_data'] = JSON.stringify(info);
            if (user_invite_info && typeof user_invite_info == 'object') {
                for (var key in user_invite_info) {
                    public_data[key] = user_invite_info[key];
                }
            }

            //发起网络请求
            ks.request({
                url: 'https://' + HOST + '/partner/auth',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log("[SDK]登录结果：", res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                ks.setStorageSync('plat_sdk_token', data.data.sdk_token);
                                ks.setStorageSync('plat_uid', data.data.user_id);
                                ks.setStorageSync('plat_username', data.data.username);
                                if (data.data.ext) {
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

                        //登录成功，加载右上角分享数据

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
                success: function (res) { }
            });
        },

        openService: function () {
            //登录后打开客服页面
            dwPlatformSDK.goCs();
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
                    console.log("[SDK]上报分享结果返回:");
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log("[SDK]查看文本是否有违规内容");
            var sdk_token = ks.getStorageSync('plat_sdk_token');
            console.log(JSON.stringify(partner_data));
            ks.request({
                url: 'https://' + HOST + '/partner/data/kt_check/' + config.partner_id + '/' + config.game_pkg,
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content,
                    uid: partner_data.uid,
                    token: partner_data.token,
                    platId: config.partner_platid,
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
        startPay: function (data, callback) {
            console.log("[SDK]调起支付，CP传值：", data, "时间:", Date());
            var self = this;
            callbacks['pay'] = typeof callback == 'function' ? callback : null;
            //先下单
            var sdk_token = ks.getStorageSync('plat_sdk_token');
            var session_key = ks.getStorageSync('plat_session_key');
            if (!sdk_token && !session_key) {
                callbacks['pay'] && callbacks['pay'](1, {
                    errMsg: "用户未登录，支付失败！"
                });
                return;
            }

            var sysInfo = ks.getSystemInfoSync();

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
                uid: partner_data.uid
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data['order_data'] = JSON.stringify(order_data);
            public_data['is_from_min'] = 1;

            //发起网络请求
            console.log("[SDK]发起订单创建:", Date());
            ks.request({
                url: 'https://' + HOST + '/partner/order',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log("[SDK]完成创建订单:", Date());
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            if (data.data.ext == '') {
                                console.log("[SDK]联运支付参数" + JSON.stringify(data.data.pay_data));
                                ks.jzsdk.pay(data.data.pay_data);
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks['pay'] && callbacks['pay'](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks['login'] && callbacks['login'](1, {
                            errMsg: '请求平台服务器失败！'
                        });
                    }
                },
                fail: function (res) {                                            
                        console.log("[SDK]send.fail:", res, Date());                    
                    // window.sendFail(url, data, callBack, retryAmount, errorCB, checkSuccess, res);
                },
            });
        },



        extDo: function (data) {
            console.log("[SDK]extDo:", Date())
            ks.navigateToMiniProgram({
                appId: data.ext1,
                path: 'pages/pay/pay?order_id=' + data.ext2.extend + '&money=' + data.ext2.money,
                extraData: {

                },
                envVersion: 'release',
                success(res) {
                    // 打开成功
                }
            })
        },



        logCreateRole: function (data, callback) {
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
            ks.jzsdk.roleReport({
                rolelevel: data.rolelevel,
                roleid: data.roleid,
                rolename: data.rolename,
                sname: data.servername,
                sid: data.serverid,
                roletype: 2,
                vipLevel: 0,
                guild: "",
            });

        },

        //进入游戏
        logEnterGame: function (data, callback) {
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
            var roleInfo = {
                roleLevel: data.rolelevel,
                roleId: data.roleid,
                roleName: data.rolename,
                serverId: data.serverid,
                serverName: data.servername,
                roleCreateTime: data.rolecreatetime
            };

            ks.jzsdk.roleReport({
                rolelevel: data.rolelevel,
                roleid: data.roleid,
                rolename: data.rolename,
                sname: data.servername,
                sid: data.serverid,
                roletype: 3,
                vipLevel: 0,
                guild: "",
            });
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = ks.getStorageSync('plat_uid');
            var username = ks.getStorageSync('plat_username');
            this.log('levelup', data);

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
            var roleInfo = {
                roleLevel: data.rolelevel,
                roleId: data.roleid,
                roleName: data.rolename,
                serverId: data.serverid,
                serverName: data.servername,
                roleCreateTime: data.rolecreatetime
            };

            ks.jzsdk.roleReport({
                rolelevel: data.rolelevel,
                roleid: data.roleid,
                rolename: data.rolename,
                sname: data.servername,
                sid: data.serverid,
                roletype: 5,
                vipLevel: 0,
                guild: "",
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
        weiduanHelper: function () {
            dwPlatformSDK.goCs()
        },

        //获取公共参数
        getPublicData: function () {
            var system = ks.getSystemInfoSync();
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

            ks.request({
                url: 'https://' + HOST + '/partner/h5Log/?type=' + type + '&data=' + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            ks.openCustomerServiceConversation();
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
        rolepower: extra && extra.rolepower ? extra.rolepower : 0,
    };
    var callback = extra && extra.callback ? extra.callback : '';
    run('logEnterGame', data, callback);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra && extra.rolepower ? extra.rolepower : 0,
    };
    var callback = extra && extra.callback ? extra.callback : '';
    run('logRoleUpLevel', data, callback);
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



exports.subscribeMessage = function (data, callback) {
    run('subscribeMessage', data, callback);
};

exports.weiduanHelper = function () {
    run('weiduanHelper');
};