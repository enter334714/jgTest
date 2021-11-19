var Q = wx.$I;
import sdk from './iiiiHELP.js';

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: Q[147512], //布咕微信小程序2包-问道服-林盛典H5
    partner_label: Q[147513],
    partner_id: Q[147514],
    game_ver: Q[147515],
    is_auth: false, //授权登录
    partner_app_id: 26, // 渠道游戏的标识ID
    partner_mp_id: Q[147516] // 小程序ID，来自微信官方平台
};
window.config = config;
var $iEGRDX = $iERDGX();
var HOST = Q[147517];
var $iERXDG = null;
var $iERXGD = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function $iERDGX() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(Q[147518]);
            var self = this;

            var uuid = wx.getStorageSync(Q[147519]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(Q[147519], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(Q[147520]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(Q[147520], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(Q[147521], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(Q[120284], data);
            wx.showShareMenu();
            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                $iERXGD = {
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

        login: function (data, callback) {
            console.log(Q[147522]);
            callbacks[Q[147523]] = typeof callback == Q[147510] ? callback : null;
            var self = this;

            let opts = wx.getLaunchOptionsSync();
            // 初始化成功再调起登录
            sdk.init({
                app_id: config.partner_app_id,
                mp_id: config.partner_mp_id,
                showLoading: false
            }).then(res => {
                sdk.login({
                    data: {
                        // 路径跳转从 state 参数获取，扫码跳转从 scene 参数获取，因此此处需要兼容处理
                        state: opts.query.state || opts.query.scene || ''
                    },
                    confg: {
                        showLoading: false
                    }
                }).then(res => {
                    partner_user_info = res.data;
                    self.do_login(res.data);
                    console.log(Q[147524] + JSON.stringify(res));
                });
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[Q[147525]] = JSON.stringify(info);
            if ($iERXGD && typeof $iERXGD == Q[120279]) {
                for (var key in $iERXGD) {
                    public_data[key] = $iERXGD[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: Q[144580] + HOST + Q[147526],
                method: Q[147452],
                dataType: Q[125767],
                header: {
                    'content-type': Q[147453] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Q[147527] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(Q[147528], data.data.sdk_token);
                                wx.setStorageSync(Q[147529], data.data.user_id);
                                wx.setStorageSync(Q[147530], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(Q[147531], data.data.ext);
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
                            callbacks[Q[147523]] && callbacks[Q[147523]](0, userData);
                        } else {
                            callbacks[Q[147523]] && callbacks[Q[147523]](1, { type: Q[147532], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        self.getShareInfo(Q[147533], function (data) {
                            console.log(Q[147534]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(Q[147533]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[Q[147523]] && callbacks[Q[147523]](1, { type: Q[147532], errMsg: Q[147535], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(Q[147536]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[Q[147523]] && callbacks[Q[147523]](1, { type: Q[147537], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(Q[147538]);

                    callbacks[Q[147523]] && callbacks[Q[147523]](1, { type: Q[147539], errMsg: Q[147540], time: Date.now() - lastTime });
                    callbacks[Q[147523]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[Q[147541]] = typeof callback == Q[147510] ? callback : null;
            var type = data.type || Q[147541];
            console.log(Q[147542] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);

                var query_str = data.query;

                sdk.getShareInfo({
                    data: {
                        path: Q[147543]
                    }
                }).then(res => {
                    //console.log('res==',res)
                    //res== {code:200,data:{},msg:'success'}
                    // do something
                    //console.log('share_query：'+`state=${res.data.state}`+'&'+query_str)
                    // 小游戏
                    wx.onShareAppMessage(function () {
                        return {
                            title: res.data.title,
                            imageUrl: res.data.image,
                            query: `state=${res.data.state}` + '&' + query_str
                        };
                    });
                });
            });

            // 上报渠道
            sdk.addShareInfo({
                data: {
                    to_target: 'wx'
                }
            }).then(res => {
                //console.log('res==',res)
                //res== {code:200,msg:'success'}
                // do something
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(Q[147528]);
            wx.request({
                url: Q[144580] + HOST + Q[147544],
                method: Q[147452],
                dataType: Q[125767],
                header: {
                    'content-type': Q[147453] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: $iERXDG ? $iERXDG.server_id : '',
                    role_id: $iERXDG ? $iERXDG.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(Q[147545]);
            callbacks[Q[127000]] = typeof callback == Q[147510] ? callback : null;
            var sdk_token = wx.getStorageSync(Q[147528]);
            wx.request({
                url: Q[144580] + HOST + Q[147546],
                method: Q[147452],
                dataType: Q[125767],
                header: {
                    'content-type': Q[147453] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(Q[147547]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[Q[127000]] && callbacks[Q[127000]](data.data);
                        } else {
                            callbacks[Q[127000]] && callbacks[Q[127000]]({ develop: 0 });
                        }
                    } else {
                        callbacks[Q[127000]] && callbacks[Q[127000]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(Q[147548]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[Q[127000]] && callbacks[Q[127000]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(Q[147549]);
                    callbacks[Q[127000]] && callbacks[Q[127000]]({ develop: 0 });
                    callbacks[Q[127000]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(Q[147550]);
            var sdk_token = wx.getStorageSync(Q[147528]);
            wx.request({
                url: Q[144580] + HOST + Q[147551],
                method: Q[147452],
                dataType: Q[125767],
                header: {
                    'content-type': Q[147453] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: $iERXDG ? $iERXDG.server_id : '',
                    role_id: $iERXDG ? $iERXDG.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(Q[147552]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[Q[147541]] && callbacks[Q[147541]](1, {
                                errMsg: Q[147553] + data.msg
                            });
                        }
                    } else {
                        callbacks[Q[147541]] && callbacks[Q[147541]](1, {
                            errMsg: Q[147554]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(Q[147555]);
            var sdk_token = wx.getStorageSync(Q[147528]);
            wx.request({
                url: Q[144580] + HOST + Q[147556],
                method: Q[147452],
                dataType: Q[125767],
                header: {
                    'content-type': Q[147453] // 默认值
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
                    console.log(Q[147557] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(Q[147558] + content);

            let ret = {
                data: {}
            };
            sdk.checkMsg({
                data: {
                    content: content
                }
            }).then(res => {
                console.log(Q[147559] + JSON.stringify(res));
                if (res.msg == Q[129688]) {
                    ret.statusCode = 200;
                    ret.data.state = 1;
                } else {
                    ret.statusCode = 0;
                    ret.data.state = 0;
                }
                callback && callback(ret);
            }, err => {
                console.log(err);
                ret.statusCode = 0;
                ret.data.state = 0;
                callback && callback(ret);
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(Q[147560] + JSON.stringify(data));

            var self = this;
            callbacks[Q[147561]] = typeof callback == Q[147510] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(Q[147528]);
            var session_key = wx.getStorageSync(Q[147531]);
            if (!sdk_token) {
                callbacks[Q[147561]] && callbacks[Q[147561]](1, {
                    errMsg: Q[147562]
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
                platform: platform
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[Q[147563]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: Q[144580] + HOST + Q[147564],
                method: Q[147452],
                dataType: Q[125767],
                header: {
                    'content-type': Q[147453] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Q[147565] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            sdk.checkPay({
                                data: {
                                    'order-currency': Q[147566],
                                    'order-cp_order_id': data.data.pay_data.orderId,
                                    'order-product_price': data.data.pay_data.amount,
                                    'order-product_id': data.data.pay_data.productId,
                                    'order-product_cnt': 1,
                                    'order-product_name': data.data.pay_data.productName,
                                    'order-product_desc': data.data.pay_data.productDec,
                                    'order-ext': data.data.pay_data.orderId,
                                    'role-event': '5',
                                    'role-server_id': data.data.pay_data.serverId,
                                    'role-server_name': data.data.pay_data.serverName,
                                    'role-role_id': data.data.pay_data.roleId,
                                    'role-role_name': data.data.pay_data.roleName,
                                    'role-role_level': data.data.pay_data.roleLevel,
                                    'role-role_vip': 0
                                }
                            }).then(res => {
                                console.log(Q[147567] + JSON.stringify(res));
                            });
                        } else {
                            callbacks[Q[147561]] && callbacks[Q[147561]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[Q[147523]] && callbacks[Q[147523]](1, {
                            errMsg: Q[147535]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(Q[147529]);
            var username = wx.getStorageSync(Q[147530]);

            var postData = {};
            postData[Q[147568]] = uid;
            postData[Q[147569]] = username;
            postData[Q[130569]] = data.roleid;
            postData[Q[147570]] = data.rolelevel;
            postData[Q[147571]] = data.rolename;
            postData[Q[131225]] = data.serverid;

            if (data.roleid && data.serverid) {
                $iERXDG = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Q[120006], postData);

            // 渠道上报
            sdk.updateRole({
                data: {
                    'role-event': '2',
                    'role-server_id': data.serverid,
                    'role-server_name': data.servername,
                    'role-role_id': data.roleid,
                    'role-role_name': data.rolename,
                    'role-role_level': data.rolelevel,
                    'role-role_vip': 0,
                    'role-combat_num': 0
                }
            }).then(res => {
                //console.log('res==',res)
            }, err => {
                // handle error
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(Q[147529]);
            var username = wx.getStorageSync(Q[147530]);

            var postData = {};
            postData[Q[147568]] = uid;
            postData[Q[147569]] = username;
            postData[Q[130569]] = data.roleid;
            postData[Q[147570]] = data.rolelevel;
            postData[Q[147571]] = data.rolename;
            postData[Q[131225]] = data.serverid;

            if (data.roleid && data.serverid) {
                $iERXDG = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Q[125648], postData);

            //进入游戏确认邀请成功
            if ($iERXGD) {
                this.updateShare($iERXGD.invite, $iERXGD.invite_type, $iERXGD.is_new, data.roleid, data.serverid, $iERXGD.scene);
            }

            // 渠道上报
            sdk.updateRole({
                data: {
                    'role-event': '1',
                    'role-server_id': data.serverid,
                    'role-server_name': data.servername,
                    'role-role_id': data.roleid,
                    'role-role_name': data.rolename,
                    'role-role_level': data.rolelevel,
                    'role-role_vip': 0,
                    'role-combat_num': 0
                }
            }).then(res => {
                //console.log('res==',res)
            }, err => {
                // handle error
            });
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(Q[147529]);
            var username = wx.getStorageSync(Q[147530]);

            var postData = {};
            postData[Q[147568]] = uid;
            postData[Q[147569]] = username;
            postData[Q[130569]] = data.roleid;
            postData[Q[147570]] = data.rolelevel;
            postData[Q[147571]] = data.rolename;
            postData[Q[131225]] = data.serverid;

            if (data.roleid && data.serverid) {
                $iERXDG = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Q[147572], postData);

            // 渠道上报
            // sdk.updateRole({
            //     data: {
            //         'role-event': '3',
            //         'role-server_id': data.serverid,
            //         'role-server_name': data.servername,
            //         'role-role_id': data.roleid,
            //         'role-role_name': data.rolename,
            //         'role-role_level': data.rolelevel,
            //         'role-role_vip': 0,
            //         'role-combat_num': 0,
            //     }
            // }).then(res => {
            //     //console.log('res==',res)
            // }, err => {
            //     // handle error
            // });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = Q[147573].split('');
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
                        uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
                    }
                }
            }

            return uuid.join('');
        },

        //获取公共参数
        getPublicData: function () {
            var uuid = wx.getStorageSync(Q[147519]);
            var idfv = wx.getStorageSync(Q[147520]);
            var ad_code = wx.getStorageSync(Q[147521]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: Q[147574],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : Q[147575],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == Q[147447] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(Q[147576] + type);
            console.log(public_data);

            wx.request({
                url: Q[144580] + HOST + Q[147577] + type + Q[147578] + encodeURIComponent(JSON.stringify(public_data))
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
        weiduanHelper: function () {},

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        }

    };
}

function run(method, data, callback) {
    method in $iEGRDX && $iEGRDX[method](data, callback);
}

exports.init = function (data, callback) {
    run(Q[120364], data, callback);
};

exports.login = function (callback) {
    run(Q[147523], '', callback);
};

exports.login = function (callback) {
    run(Q[147523], '', callback);
};

exports.pay = function (data, callback) {
    run(Q[147561], data, callback);
};

exports.openService = function () {
    run(Q[144044]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Q[147579], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(Q[147580], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Q[147581], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(Q[147541], data);
};

exports.msgCheck = function (data, callback) {
    run(Q[131698], data, callback);
};

exports.downloadClient = function () {
    run(Q[147582]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(Q[147583]);
};

exports.weiduanHelper = function () {
    run(Q[142984]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(Q[147584], data, callback);
};