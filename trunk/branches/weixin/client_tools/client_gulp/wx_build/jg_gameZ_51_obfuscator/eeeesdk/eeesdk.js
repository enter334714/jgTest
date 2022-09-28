var b = wx.$e;
import sdk from '../utils/huosdk-2.1.0.js';

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: b[31786],
    partner_label: b[31787],
    partner_id: b[31788],
    game_ver: b[31789],
    is_auth: false, //授权登录
    partner_app_id: 37, // 渠道游戏的标识ID
    partner_mp_id: b[31790] // 小程序ID，来自微信官方平台
};
window.config = config;
var e1IU01G = e1I0G1U();
var HOST = b[31791];
var e1IU0G1 = null;
var e1I01GU = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

function e1I0G1U() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(b[31792]);
            var self = this;

            var uuid = wx.getStorageSync(b[31793]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(b[31793], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(b[31794]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(b[31794], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(b[31795], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(b[305], data);
            wx.showShareMenu();
            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                e1I01GU = {
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
            console.log(b[31796]);
            callbacks[b[31797]] = typeof callback == b[31701] ? callback : null;
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
                    console.log(b[31798] + JSON.stringify(res));
                });
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[b[31799]] = JSON.stringify(info);
            if (e1I01GU && typeof e1I01GU == b[300]) {
                for (var key in e1I01GU) {
                    public_data[key] = e1I01GU[key];
                }
            }

            wx.request({
                url: b[26707] + HOST + b[31800],
                method: b[31801],
                dataType: b[5526],
                header: {
                    'content-type': b[31802] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(b[31803] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(b[31804], data.data.sdk_token);
                                wx.setStorageSync(b[31805], data.data.user_id);
                                wx.setStorageSync(b[31806], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(b[31807], data.data.ext);
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
                            callbacks[b[31797]] && callbacks[b[31797]](0, userData);
                        } else {
                            callbacks[b[31797]] && callbacks[b[31797]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(b[31808], function (data) {
                            console.log(b[31809]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(b[31808]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[b[31797]] && callbacks[b[31797]](1, {
                            errMsg: b[31810]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[b[31811]] = typeof callback == b[31701] ? callback : null;
            var type = data.type || b[31811];
            console.log(b[31812] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);

                var query_str = data.query;

                sdk.getShareInfo({
                    data: {
                        path: b[31813]
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
            var sdk_token = wx.getStorageSync(b[31804]);
            wx.request({
                url: b[26707] + HOST + b[31814],
                method: b[31801],
                dataType: b[5526],
                header: {
                    'content-type': b[31802] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: e1IU0G1 ? e1IU0G1.server_id : '',
                    role_id: e1IU0G1 ? e1IU0G1.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(b[31815]);
            var sdk_token = wx.getStorageSync(b[31804]);
            wx.request({
                url: b[26707] + HOST + b[31816],
                method: b[31801],
                dataType: b[5526],
                header: {
                    'content-type': b[31802] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(b[31817] + JSON.stringify(res));

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
            console.log(b[31818]);
            var sdk_token = wx.getStorageSync(b[31804]);
            wx.request({
                url: b[26707] + HOST + b[31819],
                method: b[31801],
                dataType: b[5526],
                header: {
                    'content-type': b[31802] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: e1IU0G1 ? e1IU0G1.server_id : '',
                    role_id: e1IU0G1 ? e1IU0G1.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(b[31820]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[b[31811]] && callbacks[b[31811]](1, {
                                errMsg: b[31821] + data.msg
                            });
                        }
                    } else {
                        callbacks[b[31811]] && callbacks[b[31811]](1, {
                            errMsg: b[31822]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(b[31823]);
            var sdk_token = wx.getStorageSync(b[31804]);
            wx.request({
                url: b[26707] + HOST + b[31824],
                method: b[31801],
                dataType: b[5526],
                header: {
                    'content-type': b[31802] // 默认值
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
                    console.log(b[31825] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(b[31826] + content);

            let ret = {
                data: {}
            };
            sdk.checkMsg({
                data: {
                    content: content
                }
            }).then(res => {
                console.log(b[31827] + JSON.stringify(res));
                if (res.msg == b[9791]) {
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
            console.log(b[31828] + JSON.stringify(data));

            var self = this;
            callbacks[b[31829]] = typeof callback == b[31701] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(b[31804]);
            var session_key = wx.getStorageSync(b[31807]);
            if (!sdk_token) {
                callbacks[b[31829]] && callbacks[b[31829]](1, {
                    errMsg: b[31830]
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
            public_data[b[31831]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: b[26707] + HOST + b[31832],
                method: b[31801],
                dataType: b[5526],
                header: {
                    'content-type': b[31802] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(b[31833] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            sdk.checkPay({
                                data: {
                                    'order-currency': b[31834],
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
                                console.log(b[31835] + JSON.stringify(res));
                            });
                        } else {
                            callbacks[b[31829]] && callbacks[b[31829]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[b[31797]] && callbacks[b[31797]](1, {
                            errMsg: b[31810]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(b[31805]);
            var username = wx.getStorageSync(b[31806]);

            var postData = {};
            postData[b[31836]] = uid;
            postData[b[31837]] = username;
            postData[b[10799]] = data.roleid;
            postData[b[31838]] = data.rolelevel;
            postData[b[31839]] = data.rolename;
            postData[b[11489]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1IU0G1 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[6], postData);

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
            var uid = wx.getStorageSync(b[31805]);
            var username = wx.getStorageSync(b[31806]);

            var postData = {};
            postData[b[31836]] = uid;
            postData[b[31837]] = username;
            postData[b[10799]] = data.roleid;
            postData[b[31838]] = data.rolelevel;
            postData[b[31839]] = data.rolename;
            postData[b[11489]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1IU0G1 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[5408], postData);

            //进入游戏确认邀请成功
            if (e1I01GU) {
                this.updateShare(e1I01GU.invite, e1I01GU.invite_type, e1I01GU.is_new, data.roleid, data.serverid, e1I01GU.scene);
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
            var uid = wx.getStorageSync(b[31805]);
            var username = wx.getStorageSync(b[31806]);

            var postData = {};
            postData[b[31836]] = uid;
            postData[b[31837]] = username;
            postData[b[10799]] = data.roleid;
            postData[b[31838]] = data.rolelevel;
            postData[b[31839]] = data.rolename;
            postData[b[11489]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1IU0G1 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[31840], postData);

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
            var chars = b[31841].split('');
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
            var uuid = wx.getStorageSync(b[31793]);
            var idfv = wx.getStorageSync(b[31794]);
            var ad_code = wx.getStorageSync(b[31795]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: b[31842],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : b[31843],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == b[31844] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(b[31845] + type);
            console.log(public_data);

            wx.request({
                url: b[26707] + HOST + b[31846] + type + b[31847] + encodeURIComponent(JSON.stringify(public_data))
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
        sendUrl: function () {},

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        }

    };
}

function run(method, data, callback) {
    method in e1IU01G && e1IU01G[method](data, callback);
}

exports.init = function (data, callback) {
    run(b[395], data, callback);
};

exports.login = function (callback) {
    run(b[31797], '', callback);
};

exports.login = function (callback) {
    run(b[31797], '', callback);
};

exports.pay = function (data, callback) {
    run(b[31829], data, callback);
};

exports.openService = function () {
    run(b[24499]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(b[31848], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(b[31849], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(b[31850], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(b[31811], data);
};

exports.msgCheck = function (data, callback) {
    run(b[12309], data, callback);
};

exports.downloadClient = function () {
    run(b[31851]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(b[31852]);
};

exports.weiduanHelper = function () {
    run(b[24378]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(b[31853], data, callback);
};