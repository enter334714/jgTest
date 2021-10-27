var Q = wx.$I;
import sdk from './iiiiHELP.js';

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: Q[27543], //布咕微信小程序2包-问道服-林盛典H5
    partner_label: Q[27544],
    partner_id: Q[27545],
    game_ver: Q[27546],
    is_auth: false, //授权登录
    partner_app_id: 26, // 渠道游戏的标识ID
    partner_mp_id: Q[27547] // 小程序ID，来自微信官方平台
};
window.config = config;
var $i_U7E5 = $i_7EU5();
var HOST = Q[27548];
var $i_75EU = null;
var $i_75UE = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function $i_7EU5() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(Q[27549]);
            var self = this;

            var uuid = wx.getStorageSync(Q[27550]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(Q[27550], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(Q[27551]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(Q[27551], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(Q[27552], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(Q[284], data);
            wx.showShareMenu();
            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                $i_75UE = {
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
            console.log(Q[27553]);
            callbacks[Q[27554]] = typeof callback == Q[27144] ? callback : null;
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
                    console.log(Q[27555] + JSON.stringify(res));
                });
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[Q[27556]] = JSON.stringify(info);
            if ($i_75UE && typeof $i_75UE == Q[279]) {
                for (var key in $i_75UE) {
                    public_data[key] = $i_75UE[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: Q[27557] + HOST + Q[27558],
                method: Q[27483],
                dataType: Q[5712],
                header: {
                    'content-type': Q[27484] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Q[27559] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(Q[27560], data.data.sdk_token);
                                wx.setStorageSync(Q[27561], data.data.user_id);
                                wx.setStorageSync(Q[27562], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(Q[27563], data.data.ext);
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
                            callbacks[Q[27554]] && callbacks[Q[27554]](0, userData);
                        } else {
                            callbacks[Q[27554]] && callbacks[Q[27554]](1, { type: Q[27564], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        self.getShareInfo(Q[27565], function (data) {
                            console.log(Q[27566]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(Q[27565]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[Q[27554]] && callbacks[Q[27554]](1, { type: Q[27564], errMsg: Q[27567], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(Q[27568]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[Q[27554]] && callbacks[Q[27554]](1, { type: Q[27569], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(Q[27570]);

                    callbacks[Q[27554]] && callbacks[Q[27554]](1, { type: Q[27571], errMsg: Q[27572], time: Date.now() - lastTime });
                    callbacks[Q[27554]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[Q[27573]] = typeof callback == Q[27144] ? callback : null;
            var type = data.type || Q[27573];
            console.log(Q[27574] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);

                var query_str = data.query;

                sdk.getShareInfo({
                    data: {
                        path: Q[27575]
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
            var sdk_token = wx.getStorageSync(Q[27560]);
            wx.request({
                url: Q[27557] + HOST + Q[27576],
                method: Q[27483],
                dataType: Q[5712],
                header: {
                    'content-type': Q[27484] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: $i_75EU ? $i_75EU.server_id : '',
                    role_id: $i_75EU ? $i_75EU.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(Q[27577]);
            callbacks[Q[6942]] = typeof callback == Q[27144] ? callback : null;
            var sdk_token = wx.getStorageSync(Q[27560]);
            wx.request({
                url: Q[27557] + HOST + Q[27578],
                method: Q[27483],
                dataType: Q[5712],
                header: {
                    'content-type': Q[27484] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(Q[27579]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[Q[6942]] && callbacks[Q[6942]](data.data);
                        } else {
                            callbacks[Q[6942]] && callbacks[Q[6942]]({ develop: 0 });
                        }
                    } else {
                        callbacks[Q[6942]] && callbacks[Q[6942]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(Q[27580]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[Q[6942]] && callbacks[Q[6942]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(Q[27581]);
                    callbacks[Q[6942]] && callbacks[Q[6942]]({ develop: 0 });
                    callbacks[Q[6942]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(Q[27582]);
            var sdk_token = wx.getStorageSync(Q[27560]);
            wx.request({
                url: Q[27557] + HOST + Q[27583],
                method: Q[27483],
                dataType: Q[5712],
                header: {
                    'content-type': Q[27484] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: $i_75EU ? $i_75EU.server_id : '',
                    role_id: $i_75EU ? $i_75EU.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(Q[27584]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[Q[27573]] && callbacks[Q[27573]](1, {
                                errMsg: Q[27585] + data.msg
                            });
                        }
                    } else {
                        callbacks[Q[27573]] && callbacks[Q[27573]](1, {
                            errMsg: Q[27586]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(Q[27587]);
            var sdk_token = wx.getStorageSync(Q[27560]);
            wx.request({
                url: Q[27557] + HOST + Q[27588],
                method: Q[27483],
                dataType: Q[5712],
                header: {
                    'content-type': Q[27484] // 默认值
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
                    console.log(Q[27589] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(Q[27590] + content);

            let ret = {
                data: {}
            };
            sdk.checkMsg({
                data: {
                    content: content
                }
            }).then(res => {
                console.log(Q[27591] + JSON.stringify(res));
                if (res.msg == Q[9611]) {
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
            console.log(Q[27592] + JSON.stringify(data));

            var self = this;
            callbacks[Q[27593]] = typeof callback == Q[27144] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(Q[27560]);
            var session_key = wx.getStorageSync(Q[27563]);
            if (!sdk_token) {
                callbacks[Q[27593]] && callbacks[Q[27593]](1, {
                    errMsg: Q[27594]
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
            public_data[Q[27595]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: Q[27557] + HOST + Q[27596],
                method: Q[27483],
                dataType: Q[5712],
                header: {
                    'content-type': Q[27484] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Q[27597] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            sdk.checkPay({
                                data: {
                                    'order-currency': Q[27598],
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
                                console.log(Q[27599] + JSON.stringify(res));
                            });
                        } else {
                            callbacks[Q[27593]] && callbacks[Q[27593]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[Q[27554]] && callbacks[Q[27554]](1, {
                            errMsg: Q[27567]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(Q[27561]);
            var username = wx.getStorageSync(Q[27562]);

            var postData = {};
            postData[Q[27600]] = uid;
            postData[Q[27601]] = username;
            postData[Q[10430]] = data.roleid;
            postData[Q[27602]] = data.rolelevel;
            postData[Q[27603]] = data.rolename;
            postData[Q[11086]] = data.serverid;

            if (data.roleid && data.serverid) {
                $i_75EU = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Q[6], postData);

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
            var uid = wx.getStorageSync(Q[27561]);
            var username = wx.getStorageSync(Q[27562]);

            var postData = {};
            postData[Q[27600]] = uid;
            postData[Q[27601]] = username;
            postData[Q[10430]] = data.roleid;
            postData[Q[27602]] = data.rolelevel;
            postData[Q[27603]] = data.rolename;
            postData[Q[11086]] = data.serverid;

            if (data.roleid && data.serverid) {
                $i_75EU = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Q[5593], postData);

            //进入游戏确认邀请成功
            if ($i_75UE) {
                this.updateShare($i_75UE.invite, $i_75UE.invite_type, $i_75UE.is_new, data.roleid, data.serverid, $i_75UE.scene);
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
            var uid = wx.getStorageSync(Q[27561]);
            var username = wx.getStorageSync(Q[27562]);

            var postData = {};
            postData[Q[27600]] = uid;
            postData[Q[27601]] = username;
            postData[Q[10430]] = data.roleid;
            postData[Q[27602]] = data.rolelevel;
            postData[Q[27603]] = data.rolename;
            postData[Q[11086]] = data.serverid;

            if (data.roleid && data.serverid) {
                $i_75EU = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Q[27604], postData);

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
            var chars = Q[27605].split('');
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
            var uuid = wx.getStorageSync(Q[27550]);
            var idfv = wx.getStorageSync(Q[27551]);
            var ad_code = wx.getStorageSync(Q[27552]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: Q[27606],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : Q[27607],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == Q[27478] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(Q[27608] + type);
            console.log(public_data);

            wx.request({
                url: Q[27557] + HOST + Q[27609] + type + Q[27610] + encodeURIComponent(JSON.stringify(public_data))
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
    method in $i_U7E5 && $i_U7E5[method](data, callback);
}

exports.init = function (data, callback) {
    run(Q[364], data, callback);
};

exports.login = function (callback) {
    run(Q[27554], '', callback);
};

exports.login = function (callback) {
    run(Q[27554], '', callback);
};

exports.pay = function (data, callback) {
    run(Q[27593], data, callback);
};

exports.openService = function () {
    run(Q[23808]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Q[27611], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(Q[27612], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Q[27613], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(Q[27573], data);
};

exports.msgCheck = function (data, callback) {
    run(Q[11582], data, callback);
};

exports.downloadClient = function () {
    run(Q[27614]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(Q[27615]);
};

exports.weiduanHelper = function () {
    run(Q[22825]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(Q[27616], data, callback);
};