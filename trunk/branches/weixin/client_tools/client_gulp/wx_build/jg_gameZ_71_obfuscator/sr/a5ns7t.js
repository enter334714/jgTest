var f = wx.$B;
import sdk from '../utils/dwPlatformSDK.js';
//TODO 替换对应参数
var config = {
    game_id: f[32450],
    game_pkg: f[32451],
    partner_label: f[32452],
    partner_id: f[32453],
    game_ver: f[32454],
    is_auth: true //授权登录
};
window.config = config;
var t1ZUFS1 = t1ZF1SU();
var HOST = f[32455];
var t1ZUF1S = null;
var t1ZFS1U = null;
var partner_data = {};

function t1ZF1SU() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(f[32456]);
            var self = this;

            var uuid = wx.getStorageSync(f[32457]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(f[32457], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(f[32458]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(f[32458], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(f[32459], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(f[807], data);

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
            console.log(f[32460]);
            callbacks[f[32147]] = typeof callback == f[94] ? callback : null;

            dwPlatformSDK.init({ platId: 10000, partnerId: "5", ad: "1", gameId: f[32461],
                gameName: f[32462],
                gameVersion: f[32463], pkgName: f[32464],
                mode: 0
            }, function (status, initData) {
                switch (status) {
                    case f[32465]:
                        // 初始化成功
                        console.log(initData);
                        dwPlatformSDK.login(function (status, loginData) {
                            switch (status) {
                                case f[32466]:
                                    // 登录成功、返回token、userId, 可用于登录校验
                                    console.log(loginData);
                                    self.do_login(loginData);
                                    break;
                                case f[32467]:
                                    //登录失败
                                    console.log(loginData);
                                    break;
                            }
                        });
                        break;
                    case f[32468]:
                        // 初始化失败
                        console.log(initData);
                        break;
                }
            }, true, 2);
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(f[32469] + tmplIds);
            //获取模板ID
            callbacks[f[32257]] = typeof callback == f[94] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(f[32470]);
                    console.log(res);
                    callbacks[f[32257]] && callbacks[f[32257]](res);
                },
                fail(res) {
                    console.log(f[32471]);
                    console.log(res);
                    callbacks[f[32257]] && callbacks[f[32257]](res);
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
            public_data[f[32472]] = 1;
            public_data[f[32473]] = JSON.stringify(partner_data);
            if (t1ZFS1U && typeof t1ZFS1U == f[10]) {
                for (var key in t1ZFS1U) {
                    public_data[key] = t1ZFS1U[key];
                }
            }

            //发起网络请求
            wx.request({
                url: f[27151] + HOST + f[32474],
                method: f[32116],
                dataType: f[222],
                header: {
                    'content-type': f[32284] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(f[32475], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(f[32476], data.data.sdk_token);
                                wx.setStorageSync(f[32477], data.data.user_id);
                                wx.setStorageSync(f[32478], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(f[32479], data.data.ext);
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
                            callbacks[f[32147]] && callbacks[f[32147]](0, userData);
                        } else {
                            callbacks[f[32147]] && callbacks[f[32147]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(f[32480], function (data) {
                            console.log(f[32481] + JSON.stringify(data));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(f[32480]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[f[32147]] && callbacks[f[32147]](1, {
                            errMsg: f[32482]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[f[32243]] = typeof callback == f[94] ? callback : null;
            var type = data.type || f[32243];
            console.log(f[32483] + type);
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
            var sdk_token = wx.getStorageSync(f[32476]);
            wx.request({
                url: f[27151] + HOST + f[32484],
                method: f[32116],
                dataType: f[222],
                header: {
                    'content-type': f[32284] // 默认值
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
            console.log(f[32485]);
            var sdk_token = wx.getStorageSync(f[32476]);
            wx.request({
                url: f[27151] + HOST + f[32486],
                method: f[32116],
                dataType: f[222],
                header: {
                    'content-type': f[32284] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(f[32487]);
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
            console.log(f[32488]);
            var sdk_token = wx.getStorageSync(f[32476]);
            wx.request({
                url: f[27151] + HOST + f[32489],
                method: f[32116],
                dataType: f[222],
                header: {
                    'content-type': f[32284] // 默认值
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
                    console.log(f[32490]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[f[32243]] && callbacks[f[32243]](1, {
                                errMsg: f[32491] + data.msg
                            });
                        }
                    } else {
                        callbacks[f[32243]] && callbacks[f[32243]](1, {
                            errMsg: f[32492]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(f[32493]);
            var sdk_token = wx.getStorageSync(f[32476]);
            wx.request({
                url: f[27151] + HOST + f[32494],
                method: f[32116],
                dataType: f[222],
                header: {
                    'content-type': f[32284] // 默认值
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
                    console.log(f[32495]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(f[32496]);
            var sdk_token = wx.getStorageSync(f[32476]);
            wx.request({
                url: f[27151] + HOST + f[32497] + config.partner_id + '/' + config.game_pkg,
                method: f[32116],
                dataType: f[222],
                header: {
                    'content-type': f[32284] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log(f[32498]);
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
            console.log(f[32499], data);
            var self = this;
            callbacks[f[32222]] = typeof callback == f[94] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(f[32476]);
            var session_key = wx.getStorageSync(f[32479]);
            if (!sdk_token && !session_key) {
                callbacks[f[32222]] && callbacks[f[32222]](1, {
                    errMsg: f[32500]
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
            public_data[f[32501]] = JSON.stringify(order_data);
            public_data[f[32472]] = 1;

            //发起网络请求
            wx.request({
                url: f[27151] + HOST + f[32502],
                method: f[32116],
                dataType: f[222],
                header: {
                    'content-type': f[32284] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(f[32503]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(f[32504] + JSON.stringify(data.data.pay_data));
                            dwPlatformSDK.pay(data.data.pay_data, function (status, data) {
                                switch (status) {
                                    case f[32505]:
                                        // ⽀付成功、以服务端返回为准
                                        console.log(data);
                                        break;
                                    case f[32506]:
                                        // ⽀付失败
                                        console.log(data);
                                        break;
                                }
                            });
                        } else {
                            callbacks[f[32222]] && callbacks[f[32222]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[f[32147]] && callbacks[f[32147]](1, {
                            errMsg: f[32482]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data, callback) {
            var uid = wx.getStorageSync(f[32477]);
            var username = wx.getStorageSync(f[32478]);

            var postData = {};
            postData[f[32507]] = uid;
            postData[f[32508]] = username;
            postData[f[11258]] = data.roleid;
            postData[f[32509]] = data.rolelevel;
            postData[f[32510]] = data.rolename;
            postData[f[11948]] = data.serverid;

            if (data.roleid && data.serverid) {
                t1ZUF1S = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(f[11], postData);
            var roleInfo = {
                roleLevel: data.rolelevel,
                roleId: data.roleid,
                roleName: data.rolename,
                serverId: data.serverid,
                serverName: data.servername,
                roleCreateTime: Date.now().toString().substr(0, 10)
            };

            dwPlatformSDK.uploadGameRoleInfo(f[11], roleInfo);
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(f[32477]);
            var username = wx.getStorageSync(f[32478]);

            var postData = {};
            postData[f[32507]] = uid;
            postData[f[32508]] = username;
            postData[f[11258]] = data.roleid;
            postData[f[32509]] = data.rolelevel;
            postData[f[32510]] = data.rolename;
            postData[f[11948]] = data.serverid;

            if (data.roleid && data.serverid) {
                t1ZUF1S = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(f[5877], postData);

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

            dwPlatformSDK.uploadGameRoleInfo(f[5877], roleInfo);
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(f[32477]);
            var username = wx.getStorageSync(f[32478]);
            this.log(f[32511], data);

            var postData = {};
            postData[f[32507]] = uid;
            postData[f[32508]] = username;
            postData[f[11258]] = data.roleid;
            postData[f[32509]] = data.rolelevel;
            postData[f[32510]] = data.rolename;
            postData[f[11948]] = data.serverid;

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

            dwPlatformSDK.uploadGameRoleInfo(f[32511], roleInfo);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = f[32512].split('');
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
            var uuid = wx.getStorageSync(f[32457]);
            var idfv = wx.getStorageSync(f[32458]);
            var ad_code = wx.getStorageSync(f[32459]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: f[32513],
                net_type: system.wifiSignal == 0 ? '4G' : f[32514],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == f[32427] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(f[32515] + type);
            console.log(public_data);

            wx.request({
                url: f[27151] + HOST + f[32516] + type + f[32517] + encodeURIComponent(JSON.stringify(public_data))
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
    run(f[890], data, callback);
};

exports.login = function (callback) {
    run(f[32147], '', callback);
};

exports.pay = function (data, callback) {
    run(f[32222], data, callback);
};

exports.openService = function () {
    run(f[24949]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(f[32234], data);
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

    run(f[32237], data, extra.callback);
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
    run(f[32240], data, extra.callback);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(f[32243], data);
};

exports.msgCheck = function (data, callback) {
    run(f[12765], data, callback);
};
exports.downloadClient = function () {
    run(f[32518]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(f[32519]);
};

exports.subscribeMessage = function (data, callback) {
    run(f[32257], data, callback);
};

exports.weiduanHelper = function () {
    run(f[24828]);
};
exports.sendUrl = function () {
    run(f[32520]);
};