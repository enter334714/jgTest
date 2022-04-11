var k = wx.$k;
require(k[0x15ab]);
//TODO 替换对应参数
var config = {
    game_id: k[0x15ac],
    game_pkg: k[0x15ad],
    partner_label: k[0x15ae],
    partner_id: k[0x15af],
    game_ver: k[0x15b0],
    is_auth: true, //授权登录
    partner_platid: 2,
    partner_gid: k[0x15b1],
    partner_ctype: k[0x15b2],
    partner_gkey: k[0x15b3],
    tmpId: { 1: k[0x15b4], 2: k[0x15b5], 3: k[0x15b6] // 订阅的类型 和 模板id
    } };
window.config = config;
var q1$Z687 = q1$678Z();
var HOST = k[0x15b7];
var q1$Z678 = null;
var q1$687Z = null;
var partner_data = {};

function q1$678Z() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(k[0x15b8]);
            var self = this;

            var uuid = wx.getStorageSync(k[0x15b9]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(k[0x15b9], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(k[0x15ba]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(k[0x15ba], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(k[0x15bb], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(k[0x49d], data);

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
            console.log(k[0x15bc]);
            callbacks[k[0x14ee]] = typeof callback == k[0xd7] ? callback : null;

            var callback = function (code, data) {
                switch (code) {
                    case k[0x15bd]:
                        // 初始化成功
                        console.log(data);
                        break;
                    case k[0x15be]:
                        // 初始化失败
                        console.log(data);
                        break;
                    case k[0x15bf]:
                        // 登录成功
                        // data = {uid: uid, token: token, time: time}；CP拿该信息进行服务端登录校验
                        console.log(data);
                        self.do_login(data);
                        break;
                    case k[0x15c0]:
                        //登录失败
                        console.log(data);
                        break;
                    case k[0x15c1]:
                        // 支付成功（支付以服务端返回为准）
                        console.log(data);
                        break;
                    case k[0x15c2]:
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
            console.log(k[0x15c3] + tmplIds);
            //获取模板ID
            callbacks[k[0x1553]] = typeof callback == k[0xd7] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(k[0x15c4]);
                    console.log(res);
                    callbacks[k[0x1553]] && callbacks[k[0x1553]](res);
                },
                fail(res) {
                    console.log(k[0x15c5]);
                    console.log(res);
                    callbacks[k[0x1553]] && callbacks[k[0x1553]](res);
                }
            });
        },

        do_login: function (info) {
            var self = this;
            partner_data = info;
            var public_data = self.getPublicData();
            public_data[k[0x15c6]] = 1;
            public_data[k[0x15c7]] = JSON.stringify(info);
            if (q1$687Z && typeof q1$687Z == k[0xd4]) {
                for (var key in q1$687Z) {
                    public_data[key] = q1$687Z[key];
                }
            }

            //发起网络请求
            wx.request({
                url: k[0x140e] + HOST + k[0x15c8],
                method: k[0x14d2],
                dataType: k[0x571],
                header: {
                    'content-type': k[0x7c3] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(k[0x15c9], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(k[0x15ca], data.data.sdk_token);
                                wx.setStorageSync(k[0x15cb], data.data.user_id);
                                wx.setStorageSync(k[0x15cc], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(k[0x15cd], data.data.ext);
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
                            callbacks[k[0x14ee]] && callbacks[k[0x14ee]](0, userData);
                        } else {
                            callbacks[k[0x14ee]] && callbacks[k[0x14ee]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(k[0x15ce], function (data) {
                            console.log(k[0x15cf] + JSON.stringify(data));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(k[0x15ce]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[k[0x14ee]] && callbacks[k[0x14ee]](1, {
                            errMsg: k[0x15d0]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[k[0x1549]] = typeof callback == k[0xd7] ? callback : null;
            var type = data.type || k[0x1549];
            console.log(k[0x15d1] + type);
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
            var sdk_token = wx.getStorageSync(k[0x15ca]);
            wx.request({
                url: k[0x140e] + HOST + k[0x15d2],
                method: k[0x14d2],
                dataType: k[0x571],
                header: {
                    'content-type': k[0x7c3] // 默认值
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
            console.log(k[0x15d3]);
            var sdk_token = wx.getStorageSync(k[0x15ca]);
            wx.request({
                url: k[0x140e] + HOST + k[0x15d4],
                method: k[0x14d2],
                dataType: k[0x571],
                header: {
                    'content-type': k[0x7c3] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(k[0x15d5]);
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
            console.log(k[0x15d6]);
            var sdk_token = wx.getStorageSync(k[0x15ca]);
            wx.request({
                url: k[0x140e] + HOST + k[0x15d7],
                method: k[0x14d2],
                dataType: k[0x571],
                header: {
                    'content-type': k[0x7c3] // 默认值
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
                    console.log(k[0x15d8]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[k[0x1549]] && callbacks[k[0x1549]](1, {
                                errMsg: k[0x15d9] + data.msg
                            });
                        }
                    } else {
                        callbacks[k[0x1549]] && callbacks[k[0x1549]](1, {
                            errMsg: k[0x15da]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(k[0x15db]);
            var sdk_token = wx.getStorageSync(k[0x15ca]);
            wx.request({
                url: k[0x140e] + HOST + k[0x15dc],
                method: k[0x14d2],
                dataType: k[0x571],
                header: {
                    'content-type': k[0x7c3] // 默认值
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
                    console.log(k[0x15dd]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(k[0x15de]);
            var sdk_token = wx.getStorageSync(k[0x15ca]);
            wx.request({
                url: k[0x140e] + HOST + k[0x15df] + config.partner_id + '/' + config.game_pkg,
                method: k[0x14d2],
                dataType: k[0x571],
                header: {
                    'content-type': k[0x7c3] // 默认值
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
                    console.log(k[0x15e0]);
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
            console.log(k[0x15e1], data);
            var self = this;
            callbacks[k[0x1538]] = typeof callback == k[0xd7] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(k[0x15ca]);
            var session_key = wx.getStorageSync(k[0x15cd]);
            if (!sdk_token && !session_key) {
                callbacks[k[0x1538]] && callbacks[k[0x1538]](1, {
                    errMsg: k[0x15e2]
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
            public_data[k[0x15e3]] = JSON.stringify(order_data);
            public_data[k[0x15c6]] = 1;

            //发起网络请求
            wx.request({
                url: k[0x140e] + HOST + k[0x15e4],
                method: k[0x14d2],
                dataType: k[0x571],
                header: {
                    'content-type': k[0x7c3] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(k[0x15e5]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            if (data.data.ext == '') {
                                console.log(k[0x15e6] + JSON.stringify(data.data.pay_data));
                                window.jzsdk.pay(data.data.pay_data);
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[k[0x1538]] && callbacks[k[0x1538]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[k[0x14ee]] && callbacks[k[0x14ee]](1, {
                            errMsg: k[0x15d0]
                        });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: k[0x15e7] + data.ext2.extend + k[0x15e8] + data.ext2.money,
                extraData: {},
                envVersion: k[0x932],
                success(res) {
                    // 打开成功
                }
            });
        },

        logCreateRole: function (data, callback) {
            var uid = wx.getStorageSync(k[0x15cb]);
            var username = wx.getStorageSync(k[0x15cc]);

            var postData = {};
            postData[k[0x15e9]] = uid;
            postData[k[0x15ea]] = username;
            postData[k[0x15eb]] = data.roleid;
            postData[k[0x15ec]] = data.rolelevel;
            postData[k[0x15ed]] = data.rolename;
            postData[k[0x17]] = data.serverid;

            if (data.roleid && data.serverid) {
                q1$Z678 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(k[0xdd], postData);
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
            var uid = wx.getStorageSync(k[0x15cb]);
            var username = wx.getStorageSync(k[0x15cc]);

            var postData = {};
            postData[k[0x15e9]] = uid;
            postData[k[0x15ea]] = username;
            postData[k[0x15eb]] = data.roleid;
            postData[k[0x15ec]] = data.rolelevel;
            postData[k[0x15ed]] = data.rolename;
            postData[k[0x17]] = data.serverid;

            if (data.roleid && data.serverid) {
                q1$Z678 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(k[0x490], postData);

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
            var uid = wx.getStorageSync(k[0x15cb]);
            var username = wx.getStorageSync(k[0x15cc]);
            this.log(k[0x15ee], data);

            var postData = {};
            postData[k[0x15e9]] = uid;
            postData[k[0x15ea]] = username;
            postData[k[0x15eb]] = data.roleid;
            postData[k[0x15ec]] = data.rolelevel;
            postData[k[0x15ed]] = data.rolename;
            postData[k[0x17]] = data.serverid;

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
            var chars = k[0x15ef].split('');
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
            var uuid = wx.getStorageSync(k[0x15b9]);
            var idfv = wx.getStorageSync(k[0x15ba]);
            var ad_code = wx.getStorageSync(k[0x15bb]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: k[0x15f0],
                net_type: system.wifiSignal == 0 ? '4G' : k[0x15f1],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == k[0x6e] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(k[0x15f2] + type);
            console.log(public_data);

            wx.request({
                url: k[0x140e] + HOST + k[0x15f3] + type + k[0x15f4] + encodeURIComponent(JSON.stringify(public_data))
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
            window.jzsdk.jump(k[0x15f5]);
        },

        weiduanHelper: function () {
            window.jzsdk.jump(k[0x15f5]);
        }

    };
}

function run(method, data, callback) {
    method in q1$Z687 && q1$Z687[method](data, callback);
}

exports.init = function (data, callback) {
    run(k[0x1fe], data, callback);
};

exports.login = function (callback) {
    run(k[0x14ee], '', callback);
};

exports.pay = function (data, callback) {
    run(k[0x1538], data, callback);
};

exports.openService = function () {
    run(k[0x154a]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(k[0x1544], data);
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

    run(k[0x1546], data, extra ? extra.callback : null);
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
    run(k[0x1548], data, extra ? extra.callback : null);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(k[0x1549], data);
};

exports.msgCheck = function (data, callback) {
    run(k[0x14c0], data, callback);
};
exports.downloadClient = function () {
    run(k[0x15f6]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(k[0x15f7]);
};

exports.subscribeMessage = function (data, callback) {
    run(k[0x1553], data, callback);
};

exports.weiduanHelper = function () {
    run(k[0x154c]);
};

exports.sendUrl = function () {
    run(k[0x15f8]);
};