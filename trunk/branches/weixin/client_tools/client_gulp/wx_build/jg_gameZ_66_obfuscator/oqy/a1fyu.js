var f1 = wx.f$;
const sdk = require(f1[35639]);

//TODO 替换对应参数 qingjs
import config from './partner_config.js';
window.config = config;
var _k97APZ = _k9AZP7();
var HOST = f1[35640];
var _k97AZP = null;
var _k9APZ7 = null;
var partner_data = {};
var system = wx.getSystemInfoSync();
var partner_user_info = {};
var partner_info = {};

function _k9AZP7() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(f1[35641]);
            var self = this;

            var uuid = wx.getStorageSync(f1[35642]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(f1[35642], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(f1[35643]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(f1[35643], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(f1[35644], info.query.ad_code);
            }
            wx.showShareMenu();
            var data = {
                install: is_new,
                scene: scene
            };
            self.log(f1[307], data);
            //TODO 替换对应参数

            wx.showShareMenu({ withShareTicket: true });

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                _k9APZ7 = {
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
            console.log(f1[35645]);
            callbacks[f1[34656]] = typeof callback == f1[35559] ? callback : null;
            sdk.getDyb().getDybUserInfo({}, false, function (callback) {
                console.log(f1[35646] + JSON.stringify(callback));
                self.do_login(callback.data.user);
            });
        },

        do_login: function (info) {
            var self = this;
            var public_data = self.getPublicData();
            public_data[f1[35647]] = 1;
            info[f1[35648]] = config.partner_pid;
            info[f1[35649]] = config.partner_gid;
            public_data[f1[35650]] = JSON.stringify(info);
            if (_k9APZ7 && typeof _k9APZ7 == f1[302]) {
                for (var key in _k9APZ7) {
                    public_data[key] = _k9APZ7[key];
                }
            }

            //发起网络请求
            wx.request({
                url: f1[27777] + HOST + f1[35651],
                method: f1[34626],
                dataType: f1[5830],
                header: {
                    'content-type': f1[34801] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(f1[35652], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(f1[35653], data.data.sdk_token);
                                wx.setStorageSync(f1[35654], data.data.user_id);
                                wx.setStorageSync(f1[35655], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(f1[35656], data.data.ext);
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
                                ios_pay: data.data.ios_pay || '0',
                                ad_flag: info.isAU
                            };
                            callbacks[f1[34656]] && callbacks[f1[34656]](0, userData);
                        } else {
                            callbacks[f1[34656]] && callbacks[f1[34656]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(f1[35657], function (data) {
                            console.log(f1[35658] + JSON.stringify(data));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(f1[35657]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[f1[34656]] && callbacks[f1[34656]](1, {
                            errMsg: f1[35659]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[f1[34761]] = typeof callback == f1[35559] ? callback : null;
            var type = data.type || f1[34761];
            console.log(f1[35660] + type);
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
            var sdk_token = wx.getStorageSync(f1[35653]);
            wx.request({
                url: f1[27777] + HOST + f1[35661],
                method: f1[34626],
                dataType: f1[5830],
                header: {
                    'content-type': f1[34801] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: _k97AZP ? _k97AZP.server_id : '',
                    role_id: _k97AZP ? _k97AZP.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            //登录后打开客服页面
            var param = {};
            sdk.getDyb().customerService(param, function (callback) {
                console.log(f1[35662] + JSON.stringify(callback));
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(f1[35663]);
            var sdk_token = wx.getStorageSync(f1[35653]);
            wx.request({
                url: f1[27777] + HOST + f1[35664],
                method: f1[34626],
                dataType: f1[5830],
                header: {
                    'content-type': f1[34801] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(f1[35665]);
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
            console.log(f1[35666]);
            var sdk_token = wx.getStorageSync(f1[35653]);
            wx.request({
                url: f1[27777] + HOST + f1[35667],
                method: f1[34626],
                dataType: f1[5830],
                header: {
                    'content-type': f1[34801] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: _k97AZP ? _k97AZP.server_id : '',
                    role_id: _k97AZP ? _k97AZP.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(f1[35668]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[f1[34761]] && callbacks[f1[34761]](1, {
                                errMsg: f1[35669] + data.msg
                            });
                        }
                    } else {
                        callbacks[f1[34761]] && callbacks[f1[34761]](1, {
                            errMsg: f1[35670]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(f1[35671]);
            var sdk_token = wx.getStorageSync(f1[35653]);
            wx.request({
                url: f1[27777] + HOST + f1[35672],
                method: f1[34626],
                dataType: f1[5830],
                header: {
                    'content-type': f1[34801] // 默认值
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
                    console.log(f1[35673]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback1) {
            console.log(f1[35674]);
            let ret = {
                data: {}
            };
            let data = {
                content: content,
                scene: 1
            };
            sdk.getDyb().msgCheck(data, function (callback) {
                if (callback && callback.code == 1 && callback.data && callback.data.result && callback.data.result.suggest && callback.data.result.suggest == f1[6192]) {
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
            console.log(f1[35675], data);
            var self = this;
            callbacks[f1[34739]] = typeof callback == f1[35559] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(f1[35653]);
            var session_key = wx.getStorageSync(f1[35656]);
            if (!sdk_token && !session_key) {
                callbacks[f1[34739]] && callbacks[f1[34739]](1, {
                    errMsg: f1[35676]
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
                ApplePrdId: data.ApplePrdId
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[f1[35677]] = JSON.stringify(order_data);
            public_data[f1[35647]] = 1;

            //发起网络请求
            wx.request({
                url: f1[27777] + HOST + f1[35678],
                method: f1[34626],
                dataType: f1[5830],
                header: {
                    'content-type': f1[34801] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(f1[35679]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(f1[35680] + JSON.stringify(data.data.pay_data));
                            if (data.data.ext == '') {
                                sdk.getDyb().submitOrder(data.data.pay_data, function (callback) {
                                    console.log(f1[35681] + JSON.stringify(callback));
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[f1[34739]] && callbacks[f1[34739]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[f1[34656]] && callbacks[f1[34656]](1, {
                            errMsg: f1[35659]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(f1[35654]);
            var username = wx.getStorageSync(f1[35655]);

            var postData = {};
            postData[f1[35682]] = uid;
            postData[f1[35683]] = username;
            postData[f1[11234]] = data.roleid;
            postData[f1[35684]] = data.rolelevel;
            postData[f1[35685]] = data.rolename;
            postData[f1[11919]] = data.serverid;

            if (data.roleid && data.serverid) {
                _k97AZP = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(f1[6], postData);
            var param = {};
            sdk.getDyb().startCreateRole(param, function (callback) {
                console.log(f1[35686] + JSON.stringify(callback));
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
                console.log(f1[35687] + JSON.stringify(callback));
            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(f1[35654]);
            var username = wx.getStorageSync(f1[35655]);

            var postData = {};
            postData[f1[35682]] = uid;
            postData[f1[35683]] = username;
            postData[f1[11234]] = data.roleid;
            postData[f1[35684]] = data.rolelevel;
            postData[f1[35685]] = data.rolename;
            postData[f1[11919]] = data.serverid;

            if (data.roleid && data.serverid) {
                _k97AZP = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(f1[5712], postData);

            //进入游戏确认邀请成功
            if (_k9APZ7) {
                this.updateShare(_k9APZ7.invite, _k9APZ7.invite_type, _k9APZ7.is_new, data.roleid, data.serverid, _k9APZ7.scene);
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
                console.log(f1[35687] + JSON.stringify(callback));
            });
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(f1[35654]);
            var username = wx.getStorageSync(f1[35655]);

            var postData = {};
            postData[f1[35682]] = uid;
            postData[f1[35683]] = username;
            postData[f1[11234]] = data.roleid;
            postData[f1[35684]] = data.rolelevel;
            postData[f1[35685]] = data.rolename;
            postData[f1[11919]] = data.serverid;

            if (data.roleid && data.serverid) {
                _k97AZP = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(f1[35688], data);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = f1[35689].split('');
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
            var uuid = wx.getStorageSync(f1[35642]);
            var idfv = wx.getStorageSync(f1[35643]);
            var ad_code = wx.getStorageSync(f1[35644]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: f1[35690],
                net_type: system.wifiSignal == 0 ? '4G' : f1[35691],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == f1[35188] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(f1[35692] + type);
            console.log(public_data);

            wx.request({
                url: f1[27777] + HOST + f1[35693] + type + f1[35694] + encodeURIComponent(JSON.stringify(public_data))
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
                path: f1[35695] + data.ext2.ext + f1[35696] + data.ext2.money,
                extraData: {},
                envVersion: f1[35697],
                success(res) {
                    // 打开成功
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in _k97APZ && _k97APZ[method](data, callback);
}

exports.init = function (data, callback) {
    run(f1[398], data, callback);
};

exports.login = function (callback) {
    run(f1[34656], '', callback);
};

exports.login = function (callback) {
    run(f1[34656], '', callback);
};

exports.pay = function (data, callback) {
    run(f1[34739], data, callback);
};

exports.openService = function () {
    run(f1[25337]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(f1[34752], data);
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

    run(f1[34755], data, extra.callback);
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
    run(f1[34758], data, extra.callback);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(f1[34761], data);
};

exports.msgCheck = function (data, callback) {
    run(f1[12822], data, callback);
};
exports.downloadClient = function () {
    run(f1[35698]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(f1[35699]);
};

exports.beQuit = function (data) {
    run(f1[35700], data);
};