var O = wx.$C;
import sdk from './hhhhelp.js';

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: O[30744], //布咕--问道服-武林盛典online
    partner_label: O[30745],
    partner_id: O[30746],
    game_ver: O[30747],
    is_auth: false, //授权登录
    partner_app_id: 28, // 渠道游戏的标识ID
    partner_mp_id: O[30748] // 小程序ID，来自微信官方平台
};
window.config = config;
var $hPFSAW = $hPSWAF();
var HOST = O[30749];
var $hPFSWA = null;
var $hPSAWF = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function $hPSWAF() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(O[30750]);
            var self = this;

            var uuid = wx.getStorageSync(O[30751]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(O[30751], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(O[30752]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(O[30752], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(O[30753], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(O[285], data);
            wx.showShareMenu();
            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                $hPSAWF = {
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
            console.log(O[30754]);
            callbacks[O[30755]] = typeof callback == O[30289] ? callback : null;
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
                    console.log(O[30756] + JSON.stringify(res));
                });
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[O[30757]] = JSON.stringify(info);
            if ($hPSAWF && typeof $hPSAWF == O[280]) {
                for (var key in $hPSAWF) {
                    public_data[key] = $hPSAWF[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: O[25708] + HOST + O[30758],
                method: O[30675],
                dataType: O[5113],
                header: {
                    'content-type': O[30676] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(O[30759] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(O[30760], data.data.sdk_token);
                                wx.setStorageSync(O[30761], data.data.user_id);
                                wx.setStorageSync(O[30762], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(O[30763], data.data.ext);
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
                            callbacks[O[30755]] && callbacks[O[30755]](0, userData);
                        } else {
                            callbacks[O[30755]] && callbacks[O[30755]](1, { type: O[30764], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        self.getShareInfo(O[30765], function (data) {
                            console.log(O[30766]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(O[30765]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[O[30755]] && callbacks[O[30755]](1, { type: O[30764], errMsg: O[30767], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(O[30768]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[O[30755]] && callbacks[O[30755]](1, { type: O[30769], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(O[30770]);

                    callbacks[O[30755]] && callbacks[O[30755]](1, { type: O[30771], errMsg: O[30772], time: Date.now() - lastTime });
                    callbacks[O[30755]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[O[30773]] = typeof callback == O[30289] ? callback : null;
            var type = data.type || O[30773];
            console.log(O[30774] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);

                var query_str = data.query;

                sdk.getShareInfo({
                    data: {
                        path: O[30775]
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
            var sdk_token = wx.getStorageSync(O[30760]);
            wx.request({
                url: O[25708] + HOST + O[30776],
                method: O[30675],
                dataType: O[5113],
                header: {
                    'content-type': O[30676] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: $hPFSWA ? $hPFSWA.server_id : '',
                    role_id: $hPFSWA ? $hPFSWA.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(O[30777]);
            callbacks[O[6396]] = typeof callback == O[30289] ? callback : null;
            var sdk_token = wx.getStorageSync(O[30760]);
            wx.request({
                url: O[25708] + HOST + O[30778],
                method: O[30675],
                dataType: O[5113],
                header: {
                    'content-type': O[30676] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(O[30779]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[O[6396]] && callbacks[O[6396]](data.data);
                        } else {
                            callbacks[O[6396]] && callbacks[O[6396]]({ develop: 0 });
                        }
                    } else {
                        callbacks[O[6396]] && callbacks[O[6396]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(O[30780]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[O[6396]] && callbacks[O[6396]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(O[30781]);
                    callbacks[O[6396]] && callbacks[O[6396]]({ develop: 0 });
                    callbacks[O[6396]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(O[30782]);
            var sdk_token = wx.getStorageSync(O[30760]);
            wx.request({
                url: O[25708] + HOST + O[30783],
                method: O[30675],
                dataType: O[5113],
                header: {
                    'content-type': O[30676] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: $hPFSWA ? $hPFSWA.server_id : '',
                    role_id: $hPFSWA ? $hPFSWA.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(O[30784]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[O[30773]] && callbacks[O[30773]](1, {
                                errMsg: O[30785] + data.msg
                            });
                        }
                    } else {
                        callbacks[O[30773]] && callbacks[O[30773]](1, {
                            errMsg: O[30786]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(O[30787]);
            var sdk_token = wx.getStorageSync(O[30760]);
            wx.request({
                url: O[25708] + HOST + O[30788],
                method: O[30675],
                dataType: O[5113],
                header: {
                    'content-type': O[30676] // 默认值
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
                    console.log(O[30789] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(O[30790] + content);

            let ret = {
                data: {}
            };
            sdk.checkMsg({
                data: {
                    content: content
                }
            }).then(res => {
                console.log(O[30791] + JSON.stringify(res));
                if (res.msg == O[9239]) {
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
            console.log(O[30792] + JSON.stringify(data));

            var self = this;
            callbacks[O[30793]] = typeof callback == O[30289] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(O[30760]);
            var session_key = wx.getStorageSync(O[30763]);
            if (!sdk_token) {
                callbacks[O[30793]] && callbacks[O[30793]](1, {
                    errMsg: O[30794]
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
            public_data[O[30795]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: O[25708] + HOST + O[30796],
                method: O[30675],
                dataType: O[5113],
                header: {
                    'content-type': O[30676] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(O[30797] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            sdk.checkPay({
                                data: {
                                    'order-currency': O[30798],
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
                                console.log(O[30799] + JSON.stringify(res));
                            });
                        } else {
                            callbacks[O[30793]] && callbacks[O[30793]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[O[30755]] && callbacks[O[30755]](1, {
                            errMsg: O[30767]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(O[30761]);
            var username = wx.getStorageSync(O[30762]);

            var postData = {};
            postData[O[30800]] = uid;
            postData[O[30801]] = username;
            postData[O[10192]] = data.roleid;
            postData[O[30802]] = data.rolelevel;
            postData[O[30803]] = data.rolename;
            postData[O[10837]] = data.serverid;

            if (data.roleid && data.serverid) {
                $hPFSWA = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(O[6], postData);

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
            var uid = wx.getStorageSync(O[30761]);
            var username = wx.getStorageSync(O[30762]);

            var postData = {};
            postData[O[30800]] = uid;
            postData[O[30801]] = username;
            postData[O[10192]] = data.roleid;
            postData[O[30802]] = data.rolelevel;
            postData[O[30803]] = data.rolename;
            postData[O[10837]] = data.serverid;

            if (data.roleid && data.serverid) {
                $hPFSWA = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(O[5004], postData);

            //进入游戏确认邀请成功
            if ($hPSAWF) {
                this.updateShare($hPSAWF.invite, $hPSAWF.invite_type, $hPSAWF.is_new, data.roleid, data.serverid, $hPSAWF.scene);
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
            var uid = wx.getStorageSync(O[30761]);
            var username = wx.getStorageSync(O[30762]);

            var postData = {};
            postData[O[30800]] = uid;
            postData[O[30801]] = username;
            postData[O[10192]] = data.roleid;
            postData[O[30802]] = data.rolelevel;
            postData[O[30803]] = data.rolename;
            postData[O[10837]] = data.serverid;

            if (data.roleid && data.serverid) {
                $hPFSWA = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(O[30804], postData);

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
                        uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
                    }
                }
            }

            return uuid.join('');
        },

        //获取公共参数
        getPublicData: function () {
            var uuid = wx.getStorageSync(O[30751]);
            var idfv = wx.getStorageSync(O[30752]);
            var ad_code = wx.getStorageSync(O[30753]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: O[30805],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : O[30806],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == O[30670] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(O[30807] + type);
            console.log(public_data);

            wx.request({
                url: O[25708] + HOST + O[30808] + type + O[30809] + encodeURIComponent(JSON.stringify(public_data))
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
    method in $hPFSAW && $hPFSAW[method](data, callback);
}

exports.init = function (data, callback) {
    run(O[366], data, callback);
};

exports.login = function (callback) {
    run(O[30755], '', callback);
};

exports.login = function (callback) {
    run(O[30755], '', callback);
};

exports.pay = function (data, callback) {
    run(O[30793], data, callback);
};

exports.openService = function () {
    run(O[23550]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(O[30810], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(O[30811], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(O[30812], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(O[30773], data);
};

exports.msgCheck = function (data, callback) {
    run(O[11641], data, callback);
};

exports.downloadClient = function () {
    run(O[30813]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(O[30814]);
};

exports.weiduanHelper = function () {
    run('weiduanHelper');
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(O[30815], data, callback);
};