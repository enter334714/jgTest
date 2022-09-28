var f = wx.$B;
const sdk = require(f[31773]);

//TODO 替换对应参数 qingjs
var config = {
    game_id: f[31774],
    game_pkg: f[31775],
    partner_label: f[31776],
    partner_id: f[31777],
    game_ver: f[31778],
    is_auth: true //授权登录
};
window.config = config;
var t197APZ = t19AZP7();
var HOST = f[31779];
var t197AZP = null;
var t19APZ7 = null;
var partner_data = {};
var system = wx.getSystemInfoSync();
var partner_user_info = {};
var partner_info = {};

function t19AZP7() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(f[31780]);
            var self = this;

            var uuid = wx.getStorageSync(f[31781]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(f[31781], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(f[31782]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(f[31782], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(f[31783], info.query.ad_code);
            }
            wx.showShareMenu();
            var data = {
                install: is_new,
                scene: scene
            };
            self.log(f[304], data);
            //TODO 替换对应参数

            wx.showShareMenu({ withShareTicket: true });

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                t19APZ7 = {
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
            console.log(f[31784]);
            callbacks[f[30804]] = typeof callback == f[31688] ? callback : null;
            sdk.getDyb().getDybUserInfo({}, false, function (callback) {
                console.log(f[31785] + JSON.stringify(callback));
                self.do_login(callback.data.user);
            });
        },

        do_login: function (info) {
            var self = this;
            var public_data = self.getPublicData();
            public_data[f[31786]] = 1;
            info[f[31787]] = config.partner_pid;
            info[f[31788]] = config.partner_gid;
            public_data[f[31789]] = JSON.stringify(info);
            if (t19APZ7 && typeof t19APZ7 == f[299]) {
                for (var key in t19APZ7) {
                    public_data[key] = t19APZ7[key];
                }
            }

            //发起网络请求
            wx.request({
                url: f[26578] + HOST + f[31790],
                method: f[30771],
                dataType: f[5635],
                header: {
                    'content-type': f[30950] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(f[31791], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(f[31792], data.data.sdk_token);
                                wx.setStorageSync(f[31793], data.data.user_id);
                                wx.setStorageSync(f[31794], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(f[31795], data.data.ext);
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
                            callbacks[f[30804]] && callbacks[f[30804]](0, userData);
                        } else {
                            callbacks[f[30804]] && callbacks[f[30804]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(f[31796], function (data) {
                            console.log(f[31797] + JSON.stringify(data));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(f[31796]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[f[30804]] && callbacks[f[30804]](1, {
                            errMsg: f[31798]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[f[30909]] = typeof callback == f[31688] ? callback : null;
            var type = data.type || f[30909];
            console.log(f[31799] + type);
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
            var sdk_token = wx.getStorageSync(f[31792]);
            wx.request({
                url: f[26578] + HOST + f[31800],
                method: f[30771],
                dataType: f[5635],
                header: {
                    'content-type': f[30950] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: t197AZP ? t197AZP.server_id : '',
                    role_id: t197AZP ? t197AZP.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            //登录后打开客服页面
            var param = {};
            sdk.getDyb().customerService(param, function (callback) {
                console.log(f[31801] + JSON.stringify(callback));
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(f[31802]);
            var sdk_token = wx.getStorageSync(f[31792]);
            wx.request({
                url: f[26578] + HOST + f[31803],
                method: f[30771],
                dataType: f[5635],
                header: {
                    'content-type': f[30950] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(f[31804]);
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
            console.log(f[31805]);
            var sdk_token = wx.getStorageSync(f[31792]);
            wx.request({
                url: f[26578] + HOST + f[31806],
                method: f[30771],
                dataType: f[5635],
                header: {
                    'content-type': f[30950] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: t197AZP ? t197AZP.server_id : '',
                    role_id: t197AZP ? t197AZP.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(f[31807]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[f[30909]] && callbacks[f[30909]](1, {
                                errMsg: f[31808] + data.msg
                            });
                        }
                    } else {
                        callbacks[f[30909]] && callbacks[f[30909]](1, {
                            errMsg: f[31809]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(f[31810]);
            var sdk_token = wx.getStorageSync(f[31792]);
            wx.request({
                url: f[26578] + HOST + f[31811],
                method: f[30771],
                dataType: f[5635],
                header: {
                    'content-type': f[30950] // 默认值
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
                    console.log(f[31812]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback1) {
            console.log(f[31813]);
            let ret = {
                data: {}
            };
            let data = {
                content: content,
                scene: 1
            };
            sdk.getDyb().msgCheck(data, function (callback) {
                if (callback && callback.code == 1 && callback.data && callback.data.result && callback.data.result.suggest && callback.data.result.suggest == f[5958]) {
                    ret.statusCode = 200;
                    ret.data.state = 1;
                } else {
                    ret.statusCode = 200;
                    ret.data.state = 0;
                }
                callback1 && callback1(ret);
            });
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(f[31814], data);
            var self = this;
            callbacks[f[30886]] = typeof callback == f[31688] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(f[31792]);
            var session_key = wx.getStorageSync(f[31795]);
            if (!sdk_token && !session_key) {
                callbacks[f[30886]] && callbacks[f[30886]](1, {
                    errMsg: f[31815]
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
                platform: sysInfo.platform
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[f[31816]] = JSON.stringify(order_data);
            public_data[f[31786]] = 1;

            //发起网络请求
            wx.request({
                url: f[26578] + HOST + f[31817],
                method: f[30771],
                dataType: f[5635],
                header: {
                    'content-type': f[30950] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(f[31818]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(f[31819] + JSON.stringify(data.data.pay_data));
                            if (data.data.ext == '') {
                                sdk.getDyb().submitOrder(data.data.pay_data, function (callback) {
                                    console.log(f[31820] + JSON.stringify(callback));
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[f[30886]] && callbacks[f[30886]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[f[30804]] && callbacks[f[30804]](1, {
                            errMsg: f[31798]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(f[31793]);
            var username = wx.getStorageSync(f[31794]);

            var postData = {};
            postData[f[31821]] = uid;
            postData[f[31822]] = username;
            postData[f[10831]] = data.roleid;
            postData[f[31823]] = data.rolelevel;
            postData[f[31824]] = data.rolename;
            postData[f[11521]] = data.serverid;

            if (data.roleid && data.serverid) {
                t197AZP = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(f[6], postData);
            var param = {};
            sdk.getDyb().startCreateRole(param, function (callback) {
                console.log(f[31825] + JSON.stringify(callback));
            });
            var param = {
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                vipLevel: "0",
                roleBalance: 0,
                serverId: data.serverid,
                serverName: data.servername,
                guildName: "",
                submitType: 2
            };
            sdk.getDyb().reportRoleInfo(param, function (callback) {
                console.log(f[31826] + JSON.stringify(callback));
            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(f[31793]);
            var username = wx.getStorageSync(f[31794]);

            var postData = {};
            postData[f[31821]] = uid;
            postData[f[31822]] = username;
            postData[f[10831]] = data.roleid;
            postData[f[31823]] = data.rolelevel;
            postData[f[31824]] = data.rolename;
            postData[f[11521]] = data.serverid;

            if (data.roleid && data.serverid) {
                t197AZP = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(f[5517], postData);

            //进入游戏确认邀请成功
            if (t19APZ7) {
                this.updateShare(t19APZ7.invite, t19APZ7.invite_type, t19APZ7.is_new, data.roleid, data.serverid, t19APZ7.scene);
            }
            var param = {
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                vipLevel: "0",
                roleBalance: 0,
                serverId: data.serverid,
                serverName: data.servername,
                guildName: "",
                submitType: 1
            };
            sdk.getDyb().reportRoleInfo(param, function (callback) {
                console.log(f[31826] + JSON.stringify(callback));
            });
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(f[31793]);
            var username = wx.getStorageSync(f[31794]);

            var postData = {};
            postData[f[31821]] = uid;
            postData[f[31822]] = username;
            postData[f[10831]] = data.roleid;
            postData[f[31823]] = data.rolelevel;
            postData[f[31824]] = data.rolename;
            postData[f[11521]] = data.serverid;

            if (data.roleid && data.serverid) {
                t197AZP = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(f[31827], data);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = f[31828].split('');
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

        sendUrl: function () {},
        // 微端小助手
        weiduanHelper: function () {},

        //获取公共参数
        getPublicData: function () {
            var system = wx.getSystemInfoSync();
            var uuid = wx.getStorageSync(f[31781]);
            var idfv = wx.getStorageSync(f[31782]);
            var ad_code = wx.getStorageSync(f[31783]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: f[31829],
                net_type: system.wifiSignal == 0 ? '4G' : f[31830],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == f[31320] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(f[31831] + type);
            console.log(public_data);

            wx.request({
                url: f[26578] + HOST + f[31832] + type + f[31833] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        // 玩家下线通知
        beQuit: function (data) {},
        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: f[31834] + data.ext2.ext + f[31835] + data.ext2.money,
                extraData: {},
                envVersion: f[31836],
                success(res) {
                    // 打开成功
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in t197APZ && t197APZ[method](data, callback);
}

exports.init = function (data, callback) {
    run(f[394], data, callback);
};

exports.login = function (callback) {
    run(f[30804], '', callback);
};

exports.login = function (callback) {
    run(f[30804], '', callback);
};

exports.pay = function (data, callback) {
    run(f[30886], data, callback);
};

exports.openService = function () {
    run(f[24426]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(f[30900], data);
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

    run(f[30903], data, extra ? extra.callback : null);
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
    run(f[30906], data, extra ? extra.callback : null);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(f[30909], data);
};

exports.msgCheck = function (data, callback) {
    run(f[12319], data, callback);
};
exports.downloadClient = function () {
    run(f[31837]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(f[31838]);
};

exports.beQuit = function (data) {
    run(f[31839], data);
};