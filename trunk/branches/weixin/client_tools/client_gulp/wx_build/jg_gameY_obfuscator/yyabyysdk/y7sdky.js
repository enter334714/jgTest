var a = wx.$y;
import sdk from '../utils/dwPlatformSDK.js';
//TODO 替换对应参数
var config = {
    game_id: a[421828],
    game_pkg: a[421829], //点完-斗战仙魔-盈月服
    partner_label: a[421830],
    partner_id: a[421831],
    game_ver: a[421832],
    is_auth: true //授权登录
};
window.config = config;
var y29S0$5 = y2905$S();
var HOST = a[421833];
var y29S05$ = null;
var y290$5S = null;
var partner_data = {};

function y2905$S() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(a[421834]);
            var self = this;

            var uuid = wx.getStorageSync(a[421835]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(a[421835], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(a[421836]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(a[421836], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(a[421837], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(a[421838], data);

            wx.showShareMenu({ withShareTicket: true });

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                y290$5S = {
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
            console.log(a[421839]);
            callbacks[a[420151]] = typeof callback == a[421025] ? callback : null;

            dwPlatformSDK.init({ platId: 10000, partnerId: "5", ad: "1", gameId: "34",
                gameName: a[421840],
                gameVersion: a[421841], pkgName: a[421842],
                mode: 0
            }, function (status, initData) {
                switch (status) {
                    case a[421843]:
                        // 初始化成功
                        console.log(initData);
                        dwPlatformSDK.login(function (status, loginData) {
                            switch (status) {
                                case a[421844]:
                                    // 登录成功、返回token、userId, 可用于登录校验
                                    console.log(loginData);
                                    self.do_login(loginData);
                                    break;
                                case a[421845]:
                                    //登录失败
                                    console.log(loginData);
                                    break;
                            }
                        });
                        break;
                    case a[421846]:
                        // 初始化失败
                        console.log(initData);
                        break;
                }
            }, true, 2);
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(a[421847] + tmplIds);
            //获取模板ID
            callbacks[a[420273]] = typeof callback == a[421025] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(a[421848]);
                    console.log(res);
                    callbacks[a[420273]] && callbacks[a[420273]](res);
                },
                fail(res) {
                    console.log(a[421849]);
                    console.log(res);
                    callbacks[a[420273]] && callbacks[a[420273]](res);
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
            public_data[a[421850]] = 1;
            public_data[a[421851]] = JSON.stringify(partner_data);
            if (y290$5S && typeof y290$5S == a[420925]) {
                for (var key in y290$5S) {
                    public_data[key] = y290$5S[key];
                }
            }

            //发起网络请求
            wx.request({
                url: a[421852] + HOST + a[421853],
                method: a[420116],
                dataType: a[421270],
                header: {
                    'content-type': a[420310] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(a[421854], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(a[421855], data.data.sdk_token);
                                wx.setStorageSync(a[421856], data.data.user_id);
                                wx.setStorageSync(a[421857], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(a[421858], data.data.ext);
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
                            callbacks[a[420151]] && callbacks[a[420151]](0, userData);
                        } else {
                            callbacks[a[420151]] && callbacks[a[420151]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(a[421859], function (data) {
                            console.log(a[421860] + JSON.stringify(data));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(a[421859]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[a[420151]] && callbacks[a[420151]](1, {
                            errMsg: a[421861]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[a[420257]] = typeof callback == a[421025] ? callback : null;
            var type = data.type || a[420257];
            console.log(a[421862] + type);
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
            var sdk_token = wx.getStorageSync(a[421855]);
            wx.request({
                url: a[421852] + HOST + a[421863],
                method: a[420116],
                dataType: a[421270],
                header: {
                    'content-type': a[420310] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: y29S05$ ? y29S05$.server_id : '',
                    role_id: y29S05$ ? y29S05$.role_id : '',
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
            console.log(a[421864]);
            var sdk_token = wx.getStorageSync(a[421855]);
            wx.request({
                url: a[421852] + HOST + a[421865],
                method: a[420116],
                dataType: a[421270],
                header: {
                    'content-type': a[420310] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(a[421866]);
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
            console.log(a[421867]);
            var sdk_token = wx.getStorageSync(a[421855]);
            wx.request({
                url: a[421852] + HOST + a[421868],
                method: a[420116],
                dataType: a[421270],
                header: {
                    'content-type': a[420310] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: y29S05$ ? y29S05$.server_id : '',
                    role_id: y29S05$ ? y29S05$.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(a[421869]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[a[420257]] && callbacks[a[420257]](1, {
                                errMsg: a[421870] + data.msg
                            });
                        }
                    } else {
                        callbacks[a[420257]] && callbacks[a[420257]](1, {
                            errMsg: a[421871]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(a[421872]);
            var sdk_token = wx.getStorageSync(a[421855]);
            wx.request({
                url: a[421852] + HOST + a[421873],
                method: a[420116],
                dataType: a[421270],
                header: {
                    'content-type': a[420310] // 默认值
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
                    console.log(a[421874]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(a[421875]);
            var sdk_token = wx.getStorageSync(a[421855]);
            wx.request({
                url: a[421852] + HOST + a[421876] + config.partner_id + '/' + config.game_pkg,
                method: a[420116],
                dataType: a[421270],
                header: {
                    'content-type': a[420310] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log(a[421877]);
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
            console.log(a[421878], data);
            var self = this;
            callbacks[a[420239]] = typeof callback == a[421025] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(a[421855]);
            var session_key = wx.getStorageSync(a[421858]);
            if (!sdk_token && !session_key) {
                callbacks[a[420239]] && callbacks[a[420239]](1, {
                    errMsg: a[421879]
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
            public_data[a[421880]] = JSON.stringify(order_data);
            public_data[a[421850]] = 1;

            //发起网络请求
            wx.request({
                url: a[421852] + HOST + a[421881],
                method: a[420116],
                dataType: a[421270],
                header: {
                    'content-type': a[420310] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(a[421882]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(a[421883] + JSON.stringify(data.data.pay_data));
                            dwPlatformSDK.pay(data.data.pay_data, function (status, data) {
                                switch (status) {
                                    case a[421884]:
                                        // ⽀付成功、以服务端返回为准
                                        console.log(data);
                                        break;
                                    case a[421885]:
                                        // ⽀付失败
                                        console.log(data);
                                        break;
                                }
                            });
                        } else {
                            callbacks[a[420239]] && callbacks[a[420239]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[a[420151]] && callbacks[a[420151]](1, {
                            errMsg: a[421861]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data, callback) {
            var uid = wx.getStorageSync(a[421856]);
            var username = wx.getStorageSync(a[421857]);

            var postData = {};
            postData[a[421886]] = uid;
            postData[a[421887]] = username;
            postData[a[421888]] = data.roleid;
            postData[a[421889]] = data.rolelevel;
            postData[a[421890]] = data.rolename;
            postData[a[420099]] = data.serverid;

            if (data.roleid && data.serverid) {
                y29S05$ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(a[420500], postData);
            var roleInfo = {
                roleLevel: data.rolelevel,
                roleId: data.roleid,
                roleName: data.rolename,
                serverId: data.serverid,
                serverName: data.servername,
                roleCreateTime: Date.now().toString().substr(0, 10)
            };

            dwPlatformSDK.uploadGameRoleInfo(a[420500], roleInfo);
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(a[421856]);
            var username = wx.getStorageSync(a[421857]);

            var postData = {};
            postData[a[421886]] = uid;
            postData[a[421887]] = username;
            postData[a[421888]] = data.roleid;
            postData[a[421889]] = data.rolelevel;
            postData[a[421890]] = data.rolename;
            postData[a[420099]] = data.serverid;

            if (data.roleid && data.serverid) {
                y29S05$ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(a[421891], postData);

            //进入游戏确认邀请成功
            if (y290$5S) {
                this.updateShare(y290$5S.invite, y290$5S.invite_type, y290$5S.is_new, data.roleid, data.serverid, y290$5S.scene);
            }
            var roleInfo = {
                roleLevel: data.rolelevel,
                roleId: data.roleid,
                roleName: data.rolename,
                serverId: data.serverid,
                serverName: data.servername,
                roleCreateTime: data.rolecreatetime
            };

            dwPlatformSDK.uploadGameRoleInfo(a[421891], roleInfo);
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(a[421856]);
            var username = wx.getStorageSync(a[421857]);
            this.log(a[421892], data);

            var postData = {};
            postData[a[421886]] = uid;
            postData[a[421887]] = username;
            postData[a[421888]] = data.roleid;
            postData[a[421889]] = data.rolelevel;
            postData[a[421890]] = data.rolename;
            postData[a[420099]] = data.serverid;

            if (data.roleid && data.serverid) {
                y29S05$ = {
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

            dwPlatformSDK.uploadGameRoleInfo(a[421892], roleInfo);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = a[421893].split('');
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
            var uuid = wx.getStorageSync(a[421835]);
            var idfv = wx.getStorageSync(a[421836]);
            var ad_code = wx.getStorageSync(a[421837]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: a[421894],
                net_type: system.wifiSignal == 0 ? '4G' : a[421895],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == a[420470] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(a[421896] + type);
            console.log(public_data);

            wx.request({
                url: a[421852] + HOST + a[421897] + type + a[421898] + encodeURIComponent(JSON.stringify(public_data))
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
    method in y29S0$5 && y29S0$5[method](data, callback);
}

exports.init = function (data, callback) {
    run(a[420129], data, callback);
};

exports.login = function (callback) {
    run(a[420151], '', callback);
};

exports.pay = function (data, callback) {
    run(a[420239], data, callback);
};

exports.openService = function () {
    run(a[420258]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(a[420252], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower : 0
    };

    run(a[420254], data, extra ? extra.callback : "");
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower : 0
    };
    run(a[420256], data, extra ? extra.callback : "");
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(a[420257], data);
};

exports.msgCheck = function (data, callback) {
    run(a[420080], data, callback);
};
exports.downloadClient = function () {
    run(a[421899]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(a[421900]);
};

exports.subscribeMessage = function (data, callback) {
    run(a[420273], data, callback);
};

exports.weiduanHelper = function () {
    run(a[420260]);
};
exports.sendUrl = function () {
    run(a[421901]);
};