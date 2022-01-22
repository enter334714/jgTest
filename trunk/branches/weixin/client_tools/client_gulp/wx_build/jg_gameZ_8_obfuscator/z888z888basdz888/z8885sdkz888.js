var G = wx.$G;
const huoSdk = require(G[621370]);

//TODO 替换对应参数
var config = {
    game_id: G[621371],
    game_pkg: G[621372], //火速-九州修仙记(混墨阳仙尘服)
    partner_label: G[621373],
    partner_id: G[621374],
    game_ver: G[621375],
    is_auth: false, //授权登录
    partner_app_id: 81240886,
    partner_mp_id: G[621376]
};

window.config = config;
var gG08A6 = gG86A0();
var HOST = G[621377];
var gG086A = null;
var gG8A60 = null;
var partner_data = {};

function gG86A0() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(G[621378]);
            var self = this;

            var uuid = wx.getStorageSync(G[621379]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(G[621379], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(G[621380]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(G[621380], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(G[621381], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(G[621382], data);
            //TODO 替换对应参数
            //初始化回调
            huoSdk.init({
                app_id: config.partner_app_id,
                mp_id: config.partner_mp_id
            }).then(res => {
                console.log(G[621383], res);
                wx.showShareMenu({ withShareTicket: true });
            });

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                gG8A60 = {
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
            console.log(G[621384]);
            callbacks['login'] = typeof callback == G[620688] ? callback : null;
            if (config.is_auth) {
                //授权登录
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[G[621385]]) {
                            //已授权
                            wx.getUserInfo({
                                success: res => {
                                    console.log(G[621386], res);
                                    huoSdk.updateUserInfo({
                                        data: {
                                            raw_data: res.rawData,
                                            signature: res.signature,
                                            encrypted_data: res.encryptedData,
                                            iv: res.iv
                                        }
                                    });
                                }
                            });
                            self.weak_login();
                        } else {
                            var system_info = wx.getSystemInfoSync();
                            var screen_width = system_info.screenWidth;
                            var screen_height = system_info.screenHeight;
                            var btn_width = screen_width * 2 / 4;
                            var btn_height = btn_width / 4;
                            var btn_left = (screen_width - btn_width) / 2;
                            var btn_top = screen_height / 2;
                            let btn = wx.createUserInfoButton({
                                type: G[620275],
                                text: G[621387],
                                style: {
                                    left: btn_left,
                                    top: btn_top,
                                    width: btn_width,
                                    height: btn_height,
                                    lineHeight: btn_height,
                                    backgroundColor: G[621388],
                                    color: G[620381],
                                    textAlign: G[620353],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });

                            btn.onTap(res => {
                                huoSdk.updateUserInfo({
                                    data: {
                                        raw_data: res.rawData,
                                        signature: res.signature,
                                        encrypted_data: res.encryptedData,
                                        iv: res.iv
                                    }
                                }).then(res => {
                                    console.log(G[621386], res);
                                    self.weak_login();
                                });
                                // 按钮隐藏
                                btn.hide();
                            });
                        }
                    }
                });
            } else {
                self.weak_login();
            }
        },

        weak_login: function () {
            var self = this;
            let opts = wx.getLaunchOptionsSync();
            huoSdk.login({
                data: {
                    // 路径跳转从 state 参数获取，扫码跳转从 scene 参数获取，因此此处需要兼容处理
                    state: opts.query.state || opts.query.scene || ''
                }
            }).then(res => {
                console.log(G[621389], res);
                if (res.code === 200) {
                    self.do_login(res.data);
                } else {
                    callbacks['login'] && callbacks['login'](1, { errMsg: res.msg });
                }
            });
        },

        do_login: function (info) {
            var self = this;
            partner_data = {
                user_token: info.cp_user_token,
                mem_id: info.mg_mem_id
            };
            var public_data = self.getPublicData();
            public_data[G[621390]] = 1;
            public_data[G[621391]] = JSON.stringify(partner_data);
            if (gG8A60 && typeof gG8A60 == G[620602]) {
                for (var key in gG8A60) {
                    public_data[key] = gG8A60[key];
                }
            }

            //发起网络请求
            wx.request({
                url: G[621392] + HOST + G[621393],
                method: G[620173],
                dataType: G[620908],
                header: {
                    'content-type': G[620285] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(G[621394], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(G[621395], data.data.sdk_token);
                                wx.setStorageSync(G[621396], data.data.user_id);
                                wx.setStorageSync(G[621397], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(G[621398], data.data.ext);
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
                            callbacks['login'] && callbacks['login'](0, userData);
                        } else {
                            callbacks['login'] && callbacks['login'](1, { errMsg: data.msg });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(G[621399], function (data) {
                            console.log(G[621400], data);
                            self.logStartShare(G[621399]);
                            huoSdk.getShareInfo({
                                data: {
                                    path: 'pages/index/index'
                                }
                            }).then(res => {
                                console.log(G[621401], res);
                                wx.onShareAppMessage(function () {
                                    self.addShareInfo();
                                    return {
                                        title: res.data.title,
                                        imageUrl: res.data.image,
                                        query: data.query + G[621402] + res.data.state
                                    };
                                });
                            });
                        });
                    } else {
                        callbacks['login'] && callbacks['login'](1, {
                            errMsg: G[621403]
                        });
                    }
                }
            });
        },

        addShareInfo: function () {
            huoSdk.addShareInfo({
                data: {
                    to_target: 'wx'
                }
            }).then(res => {
                console.log(G[621404], res);
            });
        },

        share: function (data) {
            callbacks[G[620251]] = typeof callback == G[620688] ? callback : null;
            var type = data.type || G[620251];
            console.log(G[621405] + type);
            var self = this;

            this.getShareInfo(type, function (data) {
                self.logStartShare(type);
                huoSdk.getShareInfo({
                    data: {
                        path: 'pages/index/index'
                    }
                }).then(res => {
                    console.log(G[621406], res);
                    self.addShareInfo();
                    wx.shareAppMessage({
                        title: res.data.title,
                        imageUrl: res.data.image,
                        query: data.query + G[621402] + res.data.state
                    });
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(G[621395]);
            wx.request({
                url: G[621392] + HOST + '/game/min/?ac=logStartShare',
                method: G[620173],
                dataType: G[620908],
                header: {
                    'content-type': G[620285] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: gG086A ? gG086A.server_id : '',
                    role_id: gG086A ? gG086A.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(G[621407]);
            var sdk_token = wx.getStorageSync(G[621395]);
            wx.request({
                url: G[621392] + HOST + '/game/min/?ac=checkGameVersion',
                method: G[620173],
                dataType: G[620908],
                header: {
                    'content-type': G[620285] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(G[621408]);
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
            console.log(G[621406]);
            var sdk_token = wx.getStorageSync(G[621395]);
            wx.request({
                url: G[621392] + HOST + '/game/min/?ac=shareConfig',
                method: G[620173],
                dataType: G[620908],
                header: {
                    'content-type': G[620285] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: gG086A ? gG086A.server_id : '',
                    role_id: gG086A ? gG086A.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(G[621409]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[G[620251]] && callbacks[G[620251]](1, {
                                errMsg: G[621410] + data.msg
                            });
                        }
                    } else {
                        callbacks[G[620251]] && callbacks[G[620251]](1, {
                            errMsg: G[621411]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(G[621412]);
            var sdk_token = wx.getStorageSync(G[621395]);
            wx.request({
                url: G[621392] + HOST + '/game/min/?ac=updateShare',
                method: G[620173],
                dataType: G[620908],
                header: {
                    'content-type': G[620285] // 默认值
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
                    console.log(G[621413]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(G[621414]);
            var data = {
                statusCode: 200,
                data: { state: 0 }
            };
            huoSdk.checkMsg({
                data: {
                    content: content
                }
            }).then(res => {
                console.log(G[621415], res);
                data.data.state = res.code === 200 ? 1 : 0;
                callback && callback(data);
            }, err => {
                console.log(G[621415], err);
                data.data.state = 0;
                callback && callback(data);
            });
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(G[621416], data);
            var self = this;
            callbacks[G[620241]] = typeof callback == G[620688] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(G[621395]);
            var session_key = wx.getStorageSync(G[621398]);
            if (!sdk_token && !session_key) {
                callbacks[G[620241]] && callbacks[G[620241]](1, { errMsg: G[621417] });
                return;
            }

            var sysInfo = wx.getSystemInfoSync();

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
                platform: sysInfo.platform
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[G[621418]] = JSON.stringify(order_data);
            public_data[G[621390]] = 1;

            //发起网络请求
            wx.request({
                url: G[621392] + HOST + G[621419],
                method: G[620173],
                dataType: G[620908],
                header: {
                    'content-type': G[620285] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(G[621420]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(G[621421] + JSON.stringify(data.data.pay_data));
                            huoSdk.checkPay({
                                data: data.data.pay_data
                            }).then(res => {
                                console.log(G[621422], res);
                                if (res.code !== G[621423]) {
                                    callbacks[G[620241]] && callbacks[G[620241]](1, { errMsg: res.msg });
                                }
                            });
                        } else {
                            callbacks[G[620241]] && callbacks[G[620241]](1, { errMsg: data.errMsg });
                        }
                    } else {
                        callbacks['login'] && callbacks['login'](1, { errMsg: G[621403] });
                    }
                }
            });
        },

        logCreateRole: function (data, callback) {
            var uid = wx.getStorageSync(G[621396]);
            var username = wx.getStorageSync(G[621397]);

            var postData = {};
            postData[G[621424]] = uid;
            postData[G[621425]] = username;
            postData[G[621426]] = data.roleid;
            postData[G[621427]] = data.rolelevel;
            postData[G[621428]] = data.rolename;
            postData[G[620019]] = data.serverid;

            if (data.roleid && data.serverid) {
                gG086A = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(G[620339], postData);

            this.upRoleInfo(2, data);
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(G[621396]);
            var username = wx.getStorageSync(G[621397]);

            var postData = {};
            postData[G[621424]] = uid;
            postData[G[621425]] = username;
            postData[G[621426]] = data.roleid;
            postData[G[621427]] = data.rolelevel;
            postData[G[621428]] = data.rolename;
            postData[G[620019]] = data.serverid;

            if (data.roleid && data.serverid) {
                gG086A = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(G[621429], postData);

            this.upRoleInfo(1, data);

            //进入游戏确认邀请成功
            if (gG8A60) {
                this.updateShare(gG8A60.invite, gG8A60.invite_type, gG8A60.is_new, data.roleid, data.serverid, gG8A60.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(G[621396]);
            var username = wx.getStorageSync(G[621397]);
            var postData = {};
            postData[G[621424]] = uid;
            postData[G[621425]] = username;
            postData[G[621426]] = data.roleid;
            postData[G[621427]] = data.rolelevel;
            postData[G[621428]] = data.rolename;
            postData[G[620019]] = data.serverid;

            if (data.roleid && data.serverid) {
                gG086A = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(G[621430], postData);

            this.upRoleInfo(3, data);
        },

        // 角色上报
        upRoleInfo: function (type, data) {
            var roleInfo = {
                'role-event': type,
                'role-role_id': data.roleid,
                'role-role_name': data.rolename,
                'role-role_level': data.rolelevel,
                'role-server_id': data.serverid,
                'role-server_name': data.servername,
                'role-combat_num': data.rolepower ? data.rolepower : 0,
                'role-role_vip': 0
            };
            huoSdk.updateRole({
                data: roleInfo
            }).then(res => {
                console.log(G[621431], res);
            }, err => {
                console.log(G[621431], err);
            });

            if (data.callback) {
                huoSdk.userCheckpay({
                    data: {
                        'role-server_id': data.serverid,
                        'role-role_id': data.roleid,
                        'role-role_level': data.rolelevel,
                        'role-role_vip': 0,
                        'role-combat_num': data.rolepower ? data.rolepower : 0
                    }
                }).then(res => {
                    console.log(G[621432], res);
                    if (res.code === 200) {
                        if (res.data.check === 3) {
                            data.callback({ 'show_pay': 0 });
                        } else {
                            data.callback({ 'show_pay': 1 });
                        }
                    } else {
                        data.callback({ 'show_pay': 1 });
                    }
                }, err => {
                    console.log(G[621432], err);
                    data.callback({ 'show_pay': 1 });
                });
            }
        },

        subscribe: function () {
            huoSdk.subscribe().then(res => {
                console.log(G[621433], res);
            }).catch(err => {
                console.log(G[621433], err);
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
                        uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
                    }
                }
            }

            return uuid.join('');
        },

        //获取公共参数
        getPublicData: function () {
            var system = wx.getSystemInfoSync();
            var uuid = wx.getStorageSync(G[621379]);
            var idfv = wx.getStorageSync(G[621380]);
            var ad_code = wx.getStorageSync(G[621381]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: G[621434],
                net_type: system.wifiSignal == 0 ? '4G' : G[621435],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == G[620090] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(G[621436] + type);
            console.log(public_data);

            wx.request({
                url: G[621392] + HOST + '/partner/h5Log/?type=' + type + G[621437] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        }
    };
}

function run(method, data, callback) {
    method in gG08A6 && gG08A6[method](data, callback);
}

exports.init = function (data, callback) {
    run(G[620180], data, callback);
};

exports.login = function (callback) {
    run('login', '', callback);
};

exports.pay = function (data, callback) {
    run(G[620241], data, callback);
};
exports.openService = function () {
    run(G[620252]);
};
exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
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
        rolepower: extra ? extra.rolepower ? extra.rolepower : 0 : 0,
        callback: extra ? extra.callback ? extra.callback : null : null
    };

    run('logEnterGame', data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower ? extra.rolepower : 0 : 0,
        callback: extra ? extra.callback ? extra.callback : null : null
    };
    run('logRoleUpLevel', data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(G[620251], data);
};

exports.msgCheck = function (data, callback) {
    run('msgCheck', data, callback);
};
exports.downloadClient = function () {
    run(G[621438]);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.subscribe = function () {
    run(G[621439]);
};