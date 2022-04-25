var k = wx.$k;
require(k[0x88ae]);
//TODO 替换对应参数
var config = {
    game_id: k[0x88af],
    game_pkg: k[0x88b0],
    partner_label: k[0x88b1],
    partner_id: k[0x88b2],
    game_ver: k[0x88b3],
    is_auth: true, //授权登录
    partner_platid: 2,
    partner_gid: k[0x88b4],
    partner_ctype: k[0x3333],
    partner_gkey: k[0x88b5],
    tmpId: { 1: k[0x88b6], 2: k[0x88b7], 3: k[0x88b8] // 订阅的类型 和 模板id
    } };
window.config = config;
var q1$Z687 = q1$678Z();
var HOST = k[0x88b9];
var q1$Z678 = null;
var q1$687Z = null;
var partner_data = {};

function q1$678Z() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(k[0x88ba]);
            var self = this;

            var uuid = wx.getStorageSync(k[0x88bb]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(k[0x88bb], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(k[0x88bc]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(k[0x88bc], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(k[0x88bd], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(k[0x4a8], data);

            wx.showShareMenu({ withShareTicket: true });

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                q1$687Z = {
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
            console.log(k[0x88be]);
            callbacks[k[0x1511]] = typeof callback == k[0xe1] ? callback : null;

            var callback = function (code, data) {
                switch (code) {
                    case k[0x88bf]:
                        // 初始化成功
                        console.log(data);
                        break;
                    case k[0x88c0]:
                        // 初始化失败
                        console.log(data);
                        break;
                    case k[0x88c1]:
                        // 登录成功
                        // data = {uid: uid, token: token, time: time}；CP拿该信息进行服务端登录校验
                        console.log(data);
                        self.do_login(data);
                        break;
                    case k[0x88c2]:
                        //登录失败
                        console.log(data);
                        break;
                    case k[0x88c3]:
                        // 支付成功（支付以服务端返回为准）
                        console.log(data);
                        break;
                    case k[0x88c4]:
                        // 支付失败
                        console.log(data);
                        break;
                }
            };
            jzsdk.init({
                platId: config.partner_platid,
                gid: config.partner_gid,
                ctype: config.partner_ctype,
                gkey: config.partner_gkey
            }, callback, true);
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(k[0x88c5] + tmplIds);
            //获取模板ID
            callbacks[k[0x1583]] = typeof callback == k[0xe1] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(k[0x88c6]);
                    console.log(res);
                    callbacks[k[0x1583]] && callbacks[k[0x1583]](res);
                },
                fail(res) {
                    console.log(k[0x88c7]);
                    console.log(res);
                    callbacks[k[0x1583]] && callbacks[k[0x1583]](res);
                }
            });
        },

        do_login: function (info) {
            var self = this;
            partner_data = info;
            var public_data = self.getPublicData();
            public_data[k[0x88c8]] = 1;
            public_data[k[0x88c9]] = JSON.stringify(info);
            if (q1$687Z && typeof q1$687Z == k[0xde]) {
                for (var key in q1$687Z) {
                    public_data[key] = q1$687Z[key];
                }
            }

            //发起网络请求
            wx.request({
                url: k[0x141e] + HOST + k[0x88ca],
                method: k[0x14f2],
                dataType: k[0x57c],
                header: {
                    'content-type': k[0x7ce] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(k[0x88cb], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(k[0x88cc], data.data.sdk_token);
                                wx.setStorageSync(k[0x88cd], data.data.user_id);
                                wx.setStorageSync(k[0x88ce], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(k[0x88cf], data.data.ext);
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
                            callbacks[k[0x1511]] && callbacks[k[0x1511]](0, userData);
                        } else {
                            callbacks[k[0x1511]] && callbacks[k[0x1511]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(k[0x88d0], function (data) {
                            console.log(k[0x88d1] + JSON.stringify(data));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(k[0x88d0]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[k[0x1511]] && callbacks[k[0x1511]](1, {
                            errMsg: k[0x88d2]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[k[0x1577]] = typeof callback == k[0xe1] ? callback : null;
            var type = data.type || k[0x1577];
            console.log(k[0x88d3] + type);
            var self = this;

            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);
                wx.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(k[0x88cc]);
            wx.request({
                url: k[0x141e] + HOST + k[0x88d4],
                method: k[0x14f2],
                dataType: k[0x57c],
                header: {
                    'content-type': k[0x7ce] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: q1$Z678 ? q1$Z678.server_id : '',
                    role_id: q1$Z678 ? q1$Z678.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            //登录后打开客服页面
            // dwPlatformSDK.goCs();
            window.jzsdk.jump("kf");
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(k[0x88d5]);
            var sdk_token = wx.getStorageSync(k[0x88cc]);
            wx.request({
                url: k[0x141e] + HOST + k[0x88d6],
                method: k[0x14f2],
                dataType: k[0x57c],
                header: {
                    'content-type': k[0x7ce] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(k[0x88d7]);
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
            console.log(k[0x88d8]);
            var sdk_token = wx.getStorageSync(k[0x88cc]);
            wx.request({
                url: k[0x141e] + HOST + k[0x88d9],
                method: k[0x14f2],
                dataType: k[0x57c],
                header: {
                    'content-type': k[0x7ce] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: q1$Z678 ? q1$Z678.server_id : '',
                    role_id: q1$Z678 ? q1$Z678.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(k[0x88da]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[k[0x1577]] && callbacks[k[0x1577]](1, {
                                errMsg: k[0x88db] + data.msg
                            });
                        }
                    } else {
                        callbacks[k[0x1577]] && callbacks[k[0x1577]](1, {
                            errMsg: k[0x88dc]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(k[0x88dd]);
            var sdk_token = wx.getStorageSync(k[0x88cc]);
            wx.request({
                url: k[0x141e] + HOST + k[0x88de],
                method: k[0x14f2],
                dataType: k[0x57c],
                header: {
                    'content-type': k[0x7ce] // 默认值
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
                    console.log(k[0x88df]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(k[0x88e0]);
            var sdk_token = wx.getStorageSync(k[0x88cc]);
            wx.request({
                url: k[0x141e] + HOST + k[0x88e1] + config.partner_id + '/' + config.game_pkg,
                method: k[0x14f2],
                dataType: k[0x57c],
                header: {
                    'content-type': k[0x7ce] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content,
                    uid: partner_data.uid,
                    token: partner_data.token
                },
                success: function (res) {
                    console.log(k[0x88e2]);
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
            console.log(k[0x88e3], data);
            var self = this;
            callbacks[k[0x1560]] = typeof callback == k[0xe1] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(k[0x88cc]);
            var session_key = wx.getStorageSync(k[0x88cf]);
            if (!sdk_token && !session_key) {
                callbacks[k[0x1560]] && callbacks[k[0x1560]](1, {
                    errMsg: k[0x88e4]
                });
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
                platform: sysInfo.platform,
                uid: partner_data.uid
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[k[0x88e5]] = JSON.stringify(order_data);
            public_data[k[0x88c8]] = 1;

            //发起网络请求
            wx.request({
                url: k[0x141e] + HOST + k[0x88e6],
                method: k[0x14f2],
                dataType: k[0x57c],
                header: {
                    'content-type': k[0x7ce] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(k[0x88e7]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            if (data.data.ext == '') {
                                console.log(k[0x88e8] + JSON.stringify(data.data.pay_data));
                                window.jzsdk.pay(data.data.pay_data);
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[k[0x1560]] && callbacks[k[0x1560]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[k[0x1511]] && callbacks[k[0x1511]](1, {
                            errMsg: k[0x88d2]
                        });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: k[0x88e9] + data.ext2.extend + k[0x88ea] + data.ext2.money,
                extraData: {},
                envVersion: k[0x93d],
                success(res) {
                    // 打开成功
                }
            });
        },

        logCreateRole: function (data, callback) {
            var uid = wx.getStorageSync(k[0x88cd]);
            var username = wx.getStorageSync(k[0x88ce]);

            var postData = {};
            postData[k[0x88eb]] = uid;
            postData[k[0x88ec]] = username;
            postData[k[0x4152]] = data.roleid;
            postData[k[0x88ed]] = data.rolelevel;
            postData[k[0x88ee]] = data.rolename;
            postData[k[0x18]] = data.serverid;

            if (data.roleid && data.serverid) {
                q1$Z678 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(k[0xe7], postData);
            window.jzsdk.roleReport({
                rolelevel: data.rolelevel,
                roleid: data.roleid,
                rolename: data.rolename,
                sname: data.servername,
                sid: data.serverid,
                roletype: 2,
                vipLevel: 0,
                guild: ""
            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(k[0x88cd]);
            var username = wx.getStorageSync(k[0x88ce]);

            var postData = {};
            postData[k[0x88eb]] = uid;
            postData[k[0x88ec]] = username;
            postData[k[0x4152]] = data.roleid;
            postData[k[0x88ed]] = data.rolelevel;
            postData[k[0x88ee]] = data.rolename;
            postData[k[0x18]] = data.serverid;

            if (data.roleid && data.serverid) {
                q1$Z678 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(k[0x49a], postData);

            //进入游戏确认邀请成功
            if (q1$687Z) {
                this.updateShare(q1$687Z.invite, q1$687Z.invite_type, q1$687Z.is_new, data.roleid, data.serverid, q1$687Z.scene);
            }
            var roleInfo = {
                roleLevel: data.rolelevel,
                roleId: data.roleid,
                roleName: data.rolename,
                serverId: data.serverid,
                serverName: data.servername,
                roleCreateTime: data.rolecreatetime
            };

            window.jzsdk.roleReport({
                rolelevel: data.rolelevel,
                roleid: data.roleid,
                rolename: data.rolename,
                sname: data.servername,
                sid: data.serverid,
                roletype: 3,
                vipLevel: 0,
                guild: ""
            });
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(k[0x88cd]);
            var username = wx.getStorageSync(k[0x88ce]);
            this.log(k[0x88ef], data);

            var postData = {};
            postData[k[0x88eb]] = uid;
            postData[k[0x88ec]] = username;
            postData[k[0x4152]] = data.roleid;
            postData[k[0x88ed]] = data.rolelevel;
            postData[k[0x88ee]] = data.rolename;
            postData[k[0x18]] = data.serverid;

            if (data.roleid && data.serverid) {
                q1$Z678 = {
                    role_id: data.roleid,
                    server_id: data.serverid
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

            window.jzsdk.roleReport({
                rolelevel: data.rolelevel,
                roleid: data.roleid,
                rolename: data.rolename,
                sname: data.servername,
                sid: data.serverid,
                roletype: 5,
                vipLevel: 0,
                guild: ""
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = k[0x88f0].split('');
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
        // weiduanHelper: function() {
        //     dwPlatformSDK.goCs()
        // },

        //获取公共参数
        getPublicData: function () {
            var system = wx.getSystemInfoSync();
            var uuid = wx.getStorageSync(k[0x88bb]);
            var idfv = wx.getStorageSync(k[0x88bc]);
            var ad_code = wx.getStorageSync(k[0x88bd]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: k[0x88f1],
                net_type: system.wifiSignal == 0 ? '4G' : k[0x88f2],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == k[0x76] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(k[0x88f3] + type);
            console.log(public_data);

            wx.request({
                url: k[0x141e] + HOST + k[0x88f4] + type + k[0x88f5] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        sendUrl: function () {
            window.jzsdk.jump(k[0x88f6]);
        },

        weiduanHelper: function () {
            window.jzsdk.jump(k[0x88f6]);
        }

    };
}

function run(method, data, callback) {
    method in q1$Z687 && q1$Z687[method](data, callback);
}

exports.init = function (data, callback) {
    run(k[0x208], data, callback);
};

exports.login = function (callback) {
    run(k[0x1511], '', callback);
};

exports.pay = function (data, callback) {
    run(k[0x1560], data, callback);
};

exports.openService = function () {
    run(k[0x1578]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(k[0x156e], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower : null
    };

    run(k[0x1571], data, extra ? extra.callback : null);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower : null
    };
    run(k[0x1574], data, extra ? extra.callback : null);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(k[0x1577], data);
};

exports.msgCheck = function (data, callback) {
    run(k[0x14dc], data, callback);
};
exports.downloadClient = function () {
    run(k[0x88f7]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(k[0x88f8]);
};

exports.subscribeMessage = function (data, callback) {
    run(k[0x1583], data, callback);
};

exports.weiduanHelper = function () {
    run(k[0x157a]);
};

exports.sendUrl = function () {
    run(k[0x88f9]);
};