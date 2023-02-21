var f = wx.$B;
import sdk from '../utils/dwPlatformSDK.js';
//TODO 替换对应参数
var config = {
    game_id: f[35647],
    game_pkg: f[35648],
    partner_label: f[35649],
    partner_id: f[35650],
    game_ver: f[35651],
    is_auth: true //授权登录
};
window.config = config;
var t1ZUFS1 = t1ZF1SU();
var HOST = f[35652];
var t1ZUF1S = null;
var t1ZFS1U = null;
var partner_data = {};

function t1ZF1SU() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(f[35653]);
            var self = this;

            var uuid = wx.getStorageSync(f[35654]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(f[35654], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(f[35655]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(f[35655], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(f[35656], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(f[307], data);

            wx.showShareMenu({ withShareTicket: true });

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                t1ZFS1U = {
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
            console.log(f[35657]);
            callbacks[f[35346]] = typeof callback == f[34597] ? callback : null;

            dwPlatformSDK.init({ platId: 10000, partnerId: "5", ad: "1", gameId: f[35658],
                gameName: f[35659],
                gameVersion: f[35660], pkgName: f[35661],
                mode: 0
            }, function (status, initData) {
                switch (status) {
                    case f[35662]:
                        // 初始化成功
                        console.log(initData);
                        dwPlatformSDK.login(function (status, loginData) {
                            switch (status) {
                                case f[35663]:
                                    // 登录成功、返回token、userId, 可用于登录校验
                                    console.log(loginData);
                                    self.do_login(loginData);
                                    break;
                                case f[35664]:
                                    //登录失败
                                    console.log(loginData);
                                    break;
                            }
                        });
                        break;
                    case f[35665]:
                        // 初始化失败
                        console.log(initData);
                        break;
                }
            }, true, 2);
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(f[35666] + tmplIds);
            //获取模板ID
            callbacks[f[35456]] = typeof callback == f[34597] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(f[35667]);
                    console.log(res);
                    callbacks[f[35456]] && callbacks[f[35456]](res);
                },
                fail(res) {
                    console.log(f[35668]);
                    console.log(res);
                    callbacks[f[35456]] && callbacks[f[35456]](res);
                }
            });
        },

        do_login: function (info) {
            var self = this;
            partner_data = {
                userId: info.userId,
                token: info.token
            };
            var public_data = self.getPublicData();
            public_data[f[35669]] = 1;
            public_data[f[35670]] = JSON.stringify(partner_data);
            if (t1ZFS1U && typeof t1ZFS1U == f[302]) {
                for (var key in t1ZFS1U) {
                    public_data[key] = t1ZFS1U[key];
                }
            }

            //发起网络请求
            wx.request({
                url: f[27787] + HOST + f[35671],
                method: f[35318],
                dataType: f[5830],
                header: {
                    'content-type': f[35482] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(f[35672], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(f[35673], data.data.sdk_token);
                                wx.setStorageSync(f[35674], data.data.user_id);
                                wx.setStorageSync(f[35675], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(f[35676], data.data.ext);
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
                            callbacks[f[35346]] && callbacks[f[35346]](0, userData);
                        } else {
                            callbacks[f[35346]] && callbacks[f[35346]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(f[35677], function (data) {
                            console.log(f[35678] + JSON.stringify(data));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(f[35677]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[f[35346]] && callbacks[f[35346]](1, {
                            errMsg: f[35679]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[f[35442]] = typeof callback == f[34597] ? callback : null;
            var type = data.type || f[35442];
            console.log(f[35680] + type);
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
            var sdk_token = wx.getStorageSync(f[35673]);
            wx.request({
                url: f[27787] + HOST + f[35681],
                method: f[35318],
                dataType: f[5830],
                header: {
                    'content-type': f[35482] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: t1ZUF1S ? t1ZUF1S.server_id : '',
                    role_id: t1ZUF1S ? t1ZUF1S.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            //登录后打开客服页面
            dwPlatformSDK.goCs();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(f[35682]);
            var sdk_token = wx.getStorageSync(f[35673]);
            wx.request({
                url: f[27787] + HOST + f[35683],
                method: f[35318],
                dataType: f[5830],
                header: {
                    'content-type': f[35482] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(f[35684]);
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
            console.log(f[35685]);
            var sdk_token = wx.getStorageSync(f[35673]);
            wx.request({
                url: f[27787] + HOST + f[35686],
                method: f[35318],
                dataType: f[5830],
                header: {
                    'content-type': f[35482] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: t1ZUF1S ? t1ZUF1S.server_id : '',
                    role_id: t1ZUF1S ? t1ZUF1S.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(f[35687]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[f[35442]] && callbacks[f[35442]](1, {
                                errMsg: f[35688] + data.msg
                            });
                        }
                    } else {
                        callbacks[f[35442]] && callbacks[f[35442]](1, {
                            errMsg: f[35689]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(f[35690]);
            var sdk_token = wx.getStorageSync(f[35673]);
            wx.request({
                url: f[27787] + HOST + f[35691],
                method: f[35318],
                dataType: f[5830],
                header: {
                    'content-type': f[35482] // 默认值
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
                    console.log(f[35692]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(f[35693]);
            var sdk_token = wx.getStorageSync(f[35673]);
            wx.request({
                url: f[27787] + HOST + f[35694] + config.partner_id + '/' + config.game_pkg,
                method: f[35318],
                dataType: f[5830],
                header: {
                    'content-type': f[35482] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log(f[35695]);
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
            console.log(f[35696], data);
            var self = this;
            callbacks[f[35421]] = typeof callback == f[34597] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(f[35673]);
            var session_key = wx.getStorageSync(f[35676]);
            if (!sdk_token && !session_key) {
                callbacks[f[35421]] && callbacks[f[35421]](1, {
                    errMsg: f[35697]
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
                userId: partner_data.userId
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[f[35698]] = JSON.stringify(order_data);
            public_data[f[35669]] = 1;

            //发起网络请求
            wx.request({
                url: f[27787] + HOST + f[35699],
                method: f[35318],
                dataType: f[5830],
                header: {
                    'content-type': f[35482] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(f[35700]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(f[35701] + JSON.stringify(data.data.pay_data));
                            dwPlatformSDK.pay(data.data.pay_data, function (status, data) {
                                switch (status) {
                                    case f[35702]:
                                        // ⽀付成功、以服务端返回为准
                                        console.log(data);
                                        break;
                                    case f[35703]:
                                        // ⽀付失败
                                        console.log(data);
                                        break;
                                }
                            });
                        } else {
                            callbacks[f[35421]] && callbacks[f[35421]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[f[35346]] && callbacks[f[35346]](1, {
                            errMsg: f[35679]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data, callback) {
            var uid = wx.getStorageSync(f[35674]);
            var username = wx.getStorageSync(f[35675]);

            var postData = {};
            postData[f[35704]] = uid;
            postData[f[35705]] = username;
            postData[f[11243]] = data.roleid;
            postData[f[35706]] = data.rolelevel;
            postData[f[35707]] = data.rolename;
            postData[f[11928]] = data.serverid;

            if (data.roleid && data.serverid) {
                t1ZUF1S = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(f[6], postData);
            var roleInfo = {
                roleLevel: data.rolelevel,
                roleId: data.roleid,
                roleName: data.rolename,
                serverId: data.serverid,
                serverName: data.servername,
                roleCreateTime: Date.now().toString().substr(0, 10)
            };

            dwPlatformSDK.uploadGameRoleInfo(f[6], roleInfo);
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(f[35674]);
            var username = wx.getStorageSync(f[35675]);

            var postData = {};
            postData[f[35704]] = uid;
            postData[f[35705]] = username;
            postData[f[11243]] = data.roleid;
            postData[f[35706]] = data.rolelevel;
            postData[f[35707]] = data.rolename;
            postData[f[11928]] = data.serverid;

            if (data.roleid && data.serverid) {
                t1ZUF1S = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(f[5712], postData);

            //进入游戏确认邀请成功
            if (t1ZFS1U) {
                this.updateShare(t1ZFS1U.invite, t1ZFS1U.invite_type, t1ZFS1U.is_new, data.roleid, data.serverid, t1ZFS1U.scene);
            }
            var roleInfo = {
                roleLevel: data.rolelevel,
                roleId: data.roleid,
                roleName: data.rolename,
                serverId: data.serverid,
                serverName: data.servername,
                roleCreateTime: data.rolecreatetime
            };

            dwPlatformSDK.uploadGameRoleInfo(f[5712], roleInfo);
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(f[35674]);
            var username = wx.getStorageSync(f[35675]);
            this.log(f[35708], data);

            var postData = {};
            postData[f[35704]] = uid;
            postData[f[35705]] = username;
            postData[f[11243]] = data.roleid;
            postData[f[35706]] = data.rolelevel;
            postData[f[35707]] = data.rolename;
            postData[f[11928]] = data.serverid;

            if (data.roleid && data.serverid) {
                t1ZUF1S = {
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

            dwPlatformSDK.uploadGameRoleInfo(f[35708], roleInfo);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = f[35709].split('');
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
        weiduanHelper: function () {
            dwPlatformSDK.goCsBindphone();
        },
        sendUrl: function () {
            dwPlatformSDK.goCsBindphone();
        },

        //获取公共参数
        getPublicData: function () {
            var system = wx.getSystemInfoSync();
            var uuid = wx.getStorageSync(f[35654]);
            var idfv = wx.getStorageSync(f[35655]);
            var ad_code = wx.getStorageSync(f[35656]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: f[35710],
                net_type: system.wifiSignal == 0 ? '4G' : f[35711],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == f[35624] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(f[35712] + type);
            console.log(public_data);

            wx.request({
                url: f[27787] + HOST + f[35713] + type + f[35714] + encodeURIComponent(JSON.stringify(public_data))
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
    method in t1ZUFS1 && t1ZUFS1[method](data, callback);
}

exports.init = function (data, callback) {
    run(f[398], data, callback);
};

exports.login = function (callback) {
    run(f[35346], '', callback);
};

exports.pay = function (data, callback) {
    run(f[35421], data, callback);
};

exports.openService = function () {
    run(f[25346]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(f[35433], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    extra = extra || { rolepower: 0, callback: null };
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra.rolepower
    };

    run(f[35436], data, extra.callback);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    extra = extra || { rolepower: 0, callback: null };
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra.rolepower
    };
    run(f[35439], data, extra.callback);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(f[35442], data);
};

exports.msgCheck = function (data, callback) {
    run(f[12831], data, callback);
};
exports.downloadClient = function () {
    run(f[35715]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(f[35716]);
};

exports.subscribeMessage = function (data, callback) {
    run(f[35456], data, callback);
};

exports.weiduanHelper = function () {
    run(f[25222]);
};
exports.sendUrl = function () {
    run(f[35717]);
};