var Q = wx.$I;
import sdk from './iiiiHELP.js';

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: Q[149523], //布咕微信小程序2包-问道服-林盛典H5
    partner_label: Q[149524],
    partner_id: Q[149525],
    game_ver: Q[149526],
    is_auth: false, //授权登录
    partner_app_id: 26, // 渠道游戏的标识ID
    partner_mp_id: Q[149527] // 小程序ID，来自微信官方平台
};
window.config = config;
var $iEGRXD = $iERDXG();
var HOST = Q[149528];
var $iEGRDX = null;
var $iERXDG = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function $iERDXG() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(Q[149529]);
            var self = this;

            var uuid = wx.getStorageSync(Q[149530]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(Q[149530], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(Q[149531]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(Q[149531], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(Q[149532], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(Q[120287], data);
            wx.showShareMenu();
            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                $iERXDG = {
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
            console.log(Q[149533]);
            callbacks[Q[149534]] = typeof callback == Q[149101] ? callback : null;
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
                    console.log(Q[149535] + JSON.stringify(res));
                });
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[Q[149536]] = JSON.stringify(info);
            if ($iERXDG && typeof $iERXDG == Q[120282]) {
                for (var key in $iERXDG) {
                    public_data[key] = $iERXDG[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: Q[145796] + HOST + Q[149537],
                method: Q[149463],
                dataType: Q[125900],
                header: {
                    'content-type': Q[149464] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Q[149538] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(Q[149539], data.data.sdk_token);
                                wx.setStorageSync(Q[149540], data.data.user_id);
                                wx.setStorageSync(Q[149541], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(Q[149542], data.data.ext);
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
                            callbacks[Q[149534]] && callbacks[Q[149534]](0, userData);
                        } else {
                            callbacks[Q[149534]] && callbacks[Q[149534]](1, { type: Q[149543], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        self.getShareInfo(Q[149544], function (data) {
                            console.log(Q[149545]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(Q[149544]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[Q[149534]] && callbacks[Q[149534]](1, { type: Q[149543], errMsg: Q[149546], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(Q[149547]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[Q[149534]] && callbacks[Q[149534]](1, { type: Q[149548], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(Q[149549]);

                    callbacks[Q[149534]] && callbacks[Q[149534]](1, { type: Q[149550], errMsg: Q[149551], time: Date.now() - lastTime });
                    callbacks[Q[149534]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[Q[149552]] = typeof callback == Q[149101] ? callback : null;
            var type = data.type || Q[149552];
            console.log(Q[149553] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);

                var query_str = data.query;

                sdk.getShareInfo({
                    data: {
                        path: Q[149554]
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
            var sdk_token = wx.getStorageSync(Q[149539]);
            wx.request({
                url: Q[145796] + HOST + Q[149555],
                method: Q[149463],
                dataType: Q[125900],
                header: {
                    'content-type': Q[149464] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: $iEGRDX ? $iEGRDX.server_id : '',
                    role_id: $iEGRDX ? $iEGRDX.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(Q[149556]);
            callbacks[Q[127177]] = typeof callback == Q[149101] ? callback : null;
            var sdk_token = wx.getStorageSync(Q[149539]);
            wx.request({
                url: Q[145796] + HOST + Q[149557],
                method: Q[149463],
                dataType: Q[125900],
                header: {
                    'content-type': Q[149464] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(Q[149558]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[Q[127177]] && callbacks[Q[127177]](data.data);
                        } else {
                            callbacks[Q[127177]] && callbacks[Q[127177]]({ develop: 0 });
                        }
                    } else {
                        callbacks[Q[127177]] && callbacks[Q[127177]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(Q[149559]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[Q[127177]] && callbacks[Q[127177]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(Q[149560]);
                    callbacks[Q[127177]] && callbacks[Q[127177]]({ develop: 0 });
                    callbacks[Q[127177]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(Q[149561]);
            var sdk_token = wx.getStorageSync(Q[149539]);
            wx.request({
                url: Q[145796] + HOST + Q[149562],
                method: Q[149463],
                dataType: Q[125900],
                header: {
                    'content-type': Q[149464] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: $iEGRDX ? $iEGRDX.server_id : '',
                    role_id: $iEGRDX ? $iEGRDX.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(Q[149563]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[Q[149552]] && callbacks[Q[149552]](1, {
                                errMsg: Q[149564] + data.msg
                            });
                        }
                    } else {
                        callbacks[Q[149552]] && callbacks[Q[149552]](1, {
                            errMsg: Q[149565]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(Q[149566]);
            var sdk_token = wx.getStorageSync(Q[149539]);
            wx.request({
                url: Q[145796] + HOST + Q[149567],
                method: Q[149463],
                dataType: Q[125900],
                header: {
                    'content-type': Q[149464] // 默认值
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
                    console.log(Q[149568] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(Q[149569] + content);

            let ret = {
                data: {}
            };
            sdk.checkMsg({
                data: {
                    content: content
                }
            }).then(res => {
                console.log(Q[149570] + JSON.stringify(res));
                if (res.msg == Q[129994]) {
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
            console.log(Q[149571] + JSON.stringify(data));

            var self = this;
            callbacks[Q[149572]] = typeof callback == Q[149101] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(Q[149539]);
            var session_key = wx.getStorageSync(Q[149542]);
            if (!sdk_token) {
                callbacks[Q[149572]] && callbacks[Q[149572]](1, {
                    errMsg: Q[149573]
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
            public_data[Q[149574]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: Q[145796] + HOST + Q[149575],
                method: Q[149463],
                dataType: Q[125900],
                header: {
                    'content-type': Q[149464] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Q[149576] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            sdk.checkPay({
                                data: {
                                    'order-currency': Q[149577],
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
                                console.log(Q[149578] + JSON.stringify(res));
                            });
                        } else {
                            callbacks[Q[149572]] && callbacks[Q[149572]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[Q[149534]] && callbacks[Q[149534]](1, {
                            errMsg: Q[149546]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(Q[149540]);
            var username = wx.getStorageSync(Q[149541]);

            var postData = {};
            postData[Q[149579]] = uid;
            postData[Q[149580]] = username;
            postData[Q[130910]] = data.roleid;
            postData[Q[149581]] = data.rolelevel;
            postData[Q[149582]] = data.rolename;
            postData[Q[131583]] = data.serverid;

            if (data.roleid && data.serverid) {
                $iEGRDX = {
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
            var uid = wx.getStorageSync(Q[149540]);
            var username = wx.getStorageSync(Q[149541]);

            var postData = {};
            postData[Q[149579]] = uid;
            postData[Q[149580]] = username;
            postData[Q[130910]] = data.roleid;
            postData[Q[149581]] = data.rolelevel;
            postData[Q[149582]] = data.rolename;
            postData[Q[131583]] = data.serverid;

            if (data.roleid && data.serverid) {
                $iEGRDX = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Q[125782], postData);

            //进入游戏确认邀请成功
            if ($iERXDG) {
                this.updateShare($iERXDG.invite, $iERXDG.invite_type, $iERXDG.is_new, data.roleid, data.serverid, $iERXDG.scene);
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
            var uid = wx.getStorageSync(Q[149540]);
            var username = wx.getStorageSync(Q[149541]);

            var postData = {};
            postData[Q[149579]] = uid;
            postData[Q[149580]] = username;
            postData[Q[130910]] = data.roleid;
            postData[Q[149581]] = data.rolelevel;
            postData[Q[149582]] = data.rolename;
            postData[Q[131583]] = data.serverid;

            if (data.roleid && data.serverid) {
                $iEGRDX = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Q[149583], postData);

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
            var chars = Q[149584].split('');
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
            var uuid = wx.getStorageSync(Q[149530]);
            var idfv = wx.getStorageSync(Q[149531]);
            var ad_code = wx.getStorageSync(Q[149532]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: Q[149585],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : Q[149586],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == Q[149458] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(Q[149587] + type);
            console.log(public_data);

            wx.request({
                url: Q[145796] + HOST + Q[149588] + type + Q[149589] + encodeURIComponent(JSON.stringify(public_data))
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
    method in $iEGRXD && $iEGRXD[method](data, callback);
}

exports.init = function (data, callback) {
    run(Q[120368], data, callback);
};

exports.login = function (callback) {
    run(Q[149534], '', callback);
};

exports.login = function (callback) {
    run(Q[149534], '', callback);
};

exports.pay = function (data, callback) {
    run(Q[149572], data, callback);
};

exports.openService = function () {
    run(Q[145249]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Q[149590], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(Q[149591], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Q[149592], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(Q[149552], data);
};

exports.msgCheck = function (data, callback) {
    run(Q[132260], data, callback);
};

exports.downloadClient = function () {
    run(Q[149593]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(Q[149594]);
};

exports.weiduanHelper = function () {
    run(Q[143799]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(Q[149595], data, callback);
};