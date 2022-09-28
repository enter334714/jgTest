var b = wx.$e;
require(b[0]);
//TODO 替换对应参数
var config = {
    game_id: b[1],
    game_pkg: b[2],
    partner_label: b[3],
    partner_id: b[4],
    game_ver: b[5],
    is_auth: true, //授权登录
    partner_platid: 2, // 平台 ID 微信小游戏 2
    partner_gid: b[6], //游戏 ID
    partner_ctype: b[7], // 游戏渠道包名  默认own
    partner_gkey: b[8] // 小游戏私钥
};
window.config = config;
var e1AIZND = e1AZDNI();
var HOST = b[9];
var e1AIZDN = null;
var e1AZNDI = null;
var partner_data = {};

function e1AZDNI() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(b[10]);
            var self = this;

            var uuid = wx.getStorageSync(b[11]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(b[11], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(b[12]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(b[12], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(b[13], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(b[14], data);

            wx.showShareMenu({ withShareTicket: true });

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                e1AZNDI = {
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
            console.log(b[15]);
            callbacks[b[16]] = typeof callback == b[17] ? callback : null;

            var callback = function (code, data) {
                switch (code) {
                    case b[18]:
                        // 初始化成功
                        console.log(data);
                        break;
                    case b[19]:
                        // 初始化失败
                        console.log(data);
                        break;
                    case b[20]:
                        // 登录成功
                        // data = {uid: uid, token: token, time: time}；CP拿该信息进行服务端登录校验
                        console.log(data);
                        self.do_login(data);
                        break;
                    case b[21]:
                        //登录失败
                        console.log(data);
                        break;
                    case b[22]:
                        // 支付成功（支付以服务端返回为准）
                        console.log(data);
                        break;
                    case b[23]:
                        // 支付失败
                        console.log(data);
                        break;
                }
            };

            window.jzsdk.init({
                platId: config.partner_platid,
                gid: config.partner_gid,
                ctype: config.partner_ctype,
                gkey: config.partner_gkey
            }, callback, true);
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(b[24] + tmplIds);
            //获取模板ID
            callbacks[b[25]] = typeof callback == b[17] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(b[26]);
                    console.log(res);
                    callbacks[b[25]] && callbacks[b[25]](res);
                },
                fail(res) {
                    console.log(b[27]);
                    console.log(res);
                    callbacks[b[25]] && callbacks[b[25]](res);
                }
            });
        },

        do_login: function (info) {
            var self = this;
            partner_data = info;
            var public_data = self.getPublicData();
            public_data[b[28]] = 1;
            public_data[b[29]] = JSON.stringify(info);
            if (e1AZNDI && typeof e1AZNDI == b[30]) {
                for (var key in e1AZNDI) {
                    public_data[key] = e1AZNDI[key];
                }
            }

            //发起网络请求
            wx.request({
                url: b[31] + HOST + b[32],
                method: b[33],
                dataType: b[34],
                header: {
                    'content-type': b[35] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(b[36], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(b[37], data.data.sdk_token);
                                wx.setStorageSync(b[38], data.data.user_id);
                                wx.setStorageSync(b[39], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(b[40], data.data.ext);
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
                            callbacks[b[16]] && callbacks[b[16]](0, userData);
                        } else {
                            callbacks[b[16]] && callbacks[b[16]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(b[41], function (data) {
                            console.log(b[42] + JSON.stringify(data));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(b[41]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[b[16]] && callbacks[b[16]](1, {
                            errMsg: b[43]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[b[44]] = typeof callback == b[17] ? callback : null;
            var type = data.type || b[44];
            console.log(b[45] + type);
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
            var sdk_token = wx.getStorageSync(b[37]);
            wx.request({
                url: b[31] + HOST + b[46],
                method: b[33],
                dataType: b[34],
                header: {
                    'content-type': b[35] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: e1AIZDN ? e1AIZDN.server_id : '',
                    role_id: e1AIZDN ? e1AIZDN.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            //登录后打开客服页面
            window.jzsdk.jump('kf');
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(b[47]);
            var sdk_token = wx.getStorageSync(b[37]);
            wx.request({
                url: b[31] + HOST + b[48],
                method: b[33],
                dataType: b[34],
                header: {
                    'content-type': b[35] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(b[49]);
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
            console.log(b[50]);
            var sdk_token = wx.getStorageSync(b[37]);
            wx.request({
                url: b[31] + HOST + b[51],
                method: b[33],
                dataType: b[34],
                header: {
                    'content-type': b[35] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: e1AIZDN ? e1AIZDN.server_id : '',
                    role_id: e1AIZDN ? e1AIZDN.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(b[52]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[b[44]] && callbacks[b[44]](1, {
                                errMsg: b[53] + data.msg
                            });
                        }
                    } else {
                        callbacks[b[44]] && callbacks[b[44]](1, {
                            errMsg: b[54]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(b[55]);
            var sdk_token = wx.getStorageSync(b[37]);
            wx.request({
                url: b[31] + HOST + b[56],
                method: b[33],
                dataType: b[34],
                header: {
                    'content-type': b[35] // 默认值
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
                    console.log(b[57]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(b[58]);
            var sdk_token = wx.getStorageSync(b[37]);
            wx.request({
                url: b[31] + HOST + b[59] + config.partner_id + '/' + config.game_pkg,
                method: b[33],
                dataType: b[34],
                header: {
                    'content-type': b[35] // 默认值
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
                    console.log(b[60]);
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
            console.log(b[61], data);
            var self = this;
            callbacks[b[62]] = typeof callback == b[17] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(b[37]);
            var session_key = wx.getStorageSync(b[40]);
            if (!sdk_token && !session_key) {
                callbacks[b[62]] && callbacks[b[62]](1, {
                    errMsg: b[63]
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
            public_data[b[64]] = JSON.stringify(order_data);
            public_data[b[28]] = 1;

            //发起网络请求
            wx.request({
                url: b[31] + HOST + b[65],
                method: b[33],
                dataType: b[34],
                header: {
                    'content-type': b[35] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(b[66]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            if (data.data.ext == '') {
                                console.log(b[67] + JSON.stringify(data.data.pay_data));
                                window.jzsdk.pay(data.data.pay_data);
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[b[62]] && callbacks[b[62]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[b[16]] && callbacks[b[16]](1, {
                            errMsg: b[43]
                        });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: b[68] + data.ext2.extend + b[69] + data.ext2.money,
                extraData: {},
                envVersion: b[70],
                success(res) {
                    // 打开成功
                }
            });
        },

        logCreateRole: function (data, callback) {
            var uid = wx.getStorageSync(b[38]);
            var username = wx.getStorageSync(b[39]);

            var postData = {};
            postData[b[71]] = uid;
            postData[b[72]] = username;
            postData[b[73]] = data.roleid;
            postData[b[74]] = data.rolelevel;
            postData[b[75]] = data.rolename;
            postData[b[76]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1AIZDN = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(b[77], postData);
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
            var uid = wx.getStorageSync(b[38]);
            var username = wx.getStorageSync(b[39]);

            var postData = {};
            postData[b[71]] = uid;
            postData[b[72]] = username;
            postData[b[73]] = data.roleid;
            postData[b[74]] = data.rolelevel;
            postData[b[75]] = data.rolename;
            postData[b[76]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1AIZDN = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[78], postData);

            //进入游戏确认邀请成功
            if (e1AZNDI) {
                this.updateShare(e1AZNDI.invite, e1AZNDI.invite_type, e1AZNDI.is_new, data.roleid, data.serverid, e1AZNDI.scene);
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
            var uid = wx.getStorageSync(b[38]);
            var username = wx.getStorageSync(b[39]);
            this.log(b[79], data);

            var postData = {};
            postData[b[71]] = uid;
            postData[b[72]] = username;
            postData[b[73]] = data.roleid;
            postData[b[74]] = data.rolelevel;
            postData[b[75]] = data.rolename;
            postData[b[76]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1AIZDN = {
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
            var chars = b[80].split('');
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
            var uuid = wx.getStorageSync(b[11]);
            var idfv = wx.getStorageSync(b[12]);
            var ad_code = wx.getStorageSync(b[13]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: b[81],
                net_type: system.wifiSignal == 0 ? '4G' : b[82],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == b[83] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(b[84] + type);
            console.log(public_data);

            wx.request({
                url: b[31] + HOST + b[85] + type + b[86] + encodeURIComponent(JSON.stringify(public_data))
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
            window.jzsdk.jump(b[87]);
        },

        weiduanHelper: function () {
            window.jzsdk.jump(b[87]);
        }

    };
}

function run(method, data, callback) {
    method in e1AIZND && e1AIZND[method](data, callback);
}

exports.init = function (data, callback) {
    run(b[88], data, callback);
};

exports.login = function (callback) {
    run(b[16], '', callback);
};

exports.pay = function (data, callback) {
    run(b[62], data, callback);
};

exports.openService = function () {
    run(b[89]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(b[90], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    extra = extra || {};
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra.rolepower
    };

    run(b[91], data, extra.callback);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    extra = extra || {};
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra.rolepower
    };
    run(b[92], data, extra.callback);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(b[44], data);
};

exports.msgCheck = function (data, callback) {
    run(b[93], data, callback);
};
exports.downloadClient = function () {
    run(b[94]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(b[95]);
};

exports.subscribeMessage = function (data, callback) {
    run(b[25], data, callback);
};

exports.weiduanHelper = function () {
    run(b[96]);
};

exports.sendUrl = function () {
    run(b[97]);
};