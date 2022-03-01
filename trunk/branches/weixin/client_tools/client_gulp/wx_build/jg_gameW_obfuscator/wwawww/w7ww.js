var s = wx.$W;
// var qingjs = require("../utils/qingjs-wxapp.js");
import qingjs from "../utils/qingjs-wxapp.js";
//TODO 替换对应参数
var config = {
    game_id: s[0x6bd],
    game_pkg: s[0x6be], //天剑vs霆耀--仙侠决
    partner_label: s[0x6bf],
    partner_id: s[0x6c0],
    game_ver: s[0x6c1],
    is_auth: true //授权登录
};
window.config = config;
var _w$A1IY = _w$1YIA();
var HOST = s[0x6c2];
var _w$A1YI = null;
var _w$1IYA = null;
var partner_data = {};

function _w$1YIA() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(s[0x6c3]);
            var self = this;

            var uuid = wx.getStorageSync(s[0x6c4]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(s[0x6c4], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(s[0x6c5]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(s[0x6c5], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(s[0x6c6], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(s[0x6c7], data);
            //TODO 替换对应参数
            qingjs.instance.onInit(function (initResult) {
                console.log(s[0x6c8], initResult);
            });

            wx.showShareMenu({ withShareTicket: true });

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                _w$1IYA = {
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
            console.log(s[0x6c9]);
            callbacks[s[0x86]] = typeof callback == s[0x3b7] ? callback : null;
            qingjs.instance.login({}, function (loginResult) {
                console.log(s[0x6ca], loginResult);
                if (loginResult.code === 200) {
                    self.do_login(loginResult);
                } else {
                    callback && callback(1, {
                        errMsg: loginResult.message
                    });
                }
            });
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(s[0x6cb] + tmplIds);
            //获取模板ID
            callbacks[s[0xe3]] = typeof callback == s[0x3b7] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(s[0x6cc]);
                    console.log(res);
                    callbacks[s[0xe3]] && callbacks[s[0xe3]](res);
                },
                fail(res) {
                    console.log(s[0x6cd]);
                    console.log(res);
                    callbacks[s[0xe3]] && callbacks[s[0xe3]](res);
                }
            });
        },

        do_login: function (info) {
            var self = this;
            partner_data = {
                uid: info.uid,
                token: info.token
            };
            var public_data = self.getPublicData();
            public_data[s[0x6ce]] = 1;
            public_data[s[0x6cf]] = JSON.stringify(partner_data);
            if (_w$1IYA && typeof _w$1IYA == s[0x352]) {
                for (var key in _w$1IYA) {
                    public_data[key] = _w$1IYA[key];
                }
            }

            //发起网络请求
            wx.request({
                url: s[0x6d0] + HOST + s[0x6d1],
                method: s[0x63],
                dataType: s[0x4ac],
                header: {
                    'content-type': s[0x105] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(s[0x6d2], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(s[0x6d3], data.data.sdk_token);
                                wx.setStorageSync(s[0x6d4], data.data.user_id);
                                wx.setStorageSync(s[0x6d5], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(s[0x6d6], data.data.ext);
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
                            callbacks[s[0x86]] && callbacks[s[0x86]](0, userData);
                        } else {
                            callbacks[s[0x86]] && callbacks[s[0x86]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(s[0x6d7], function (data) {
                            console.log(s[0x6d8] + JSON.stringify(data));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(s[0x6d7]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query + "&" + qingjs.instance.getShareToken()
                                };
                            });
                        });
                    } else {
                        callbacks[s[0x86]] && callbacks[s[0x86]](1, {
                            errMsg: s[0x6d9]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[s[0xd3]] = typeof callback == s[0x3b7] ? callback : null;
            var type = data.type || s[0xd3];
            console.log(s[0x6da] + type);
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
            var sdk_token = wx.getStorageSync(s[0x6d3]);
            wx.request({
                url: s[0x6d0] + HOST + s[0x6db],
                method: s[0x63],
                dataType: s[0x4ac],
                header: {
                    'content-type': s[0x105] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: _w$A1YI ? _w$A1YI.server_id : '',
                    role_id: _w$A1YI ? _w$A1YI.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            //登录后打开客服页面
            qingjs.instance.goCustomerService();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(s[0x6dc]);
            var sdk_token = wx.getStorageSync(s[0x6d3]);
            wx.request({
                url: s[0x6d0] + HOST + s[0x6dd],
                method: s[0x63],
                dataType: s[0x4ac],
                header: {
                    'content-type': s[0x105] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(s[0x6de]);
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
            console.log(s[0x6df]);
            var sdk_token = wx.getStorageSync(s[0x6d3]);
            wx.request({
                url: s[0x6d0] + HOST + s[0x6e0],
                method: s[0x63],
                dataType: s[0x4ac],
                header: {
                    'content-type': s[0x105] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: _w$A1YI ? _w$A1YI.server_id : '',
                    role_id: _w$A1YI ? _w$A1YI.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(s[0x6e1]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[s[0xd3]] && callbacks[s[0xd3]](1, {
                                errMsg: s[0x6e2] + data.msg
                            });
                        }
                    } else {
                        callbacks[s[0xd3]] && callbacks[s[0xd3]](1, {
                            errMsg: s[0x6e3]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(s[0x6e4]);
            var sdk_token = wx.getStorageSync(s[0x6d3]);
            wx.request({
                url: s[0x6d0] + HOST + s[0x6e5],
                method: s[0x63],
                dataType: s[0x4ac],
                header: {
                    'content-type': s[0x105] // 默认值
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
                    console.log(s[0x6e6]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(s[0x6e7]);
            var sdk_token = wx.getStorageSync(s[0x6d3]);
            wx.request({
                url: s[0x6d0] + HOST + s[0x6e8] + config.partner_id + '/' + config.game_pkg,
                method: s[0x63],
                dataType: s[0x4ac],
                header: {
                    'content-type': s[0x105] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log(s[0x6e9]);
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        pay: function (data, callback) {
            var self = this;
            var can_pay = qingjs.instance.canPay();
            if (can_pay) {
                self.startPay(data, callback);
            } else {
                callback && callback(1, {
                    errMsg: s[0x6ea]
                });
            }
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(s[0x6eb], data);
            var self = this;
            callbacks[s[0xc6]] = typeof callback == s[0x3b7] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(s[0x6d3]);
            var session_key = wx.getStorageSync(s[0x6d6]);
            if (!sdk_token && !session_key) {
                callbacks[s[0xc6]] && callbacks[s[0xc6]](1, {
                    errMsg: s[0x6ec]
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
            public_data[s[0x6ed]] = JSON.stringify(order_data);
            public_data[s[0x6ce]] = 1;

            //发起网络请求
            wx.request({
                url: s[0x6d0] + HOST + s[0x6ee],
                method: s[0x63],
                dataType: s[0x4ac],
                header: {
                    'content-type': s[0x105] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(s[0x6ef]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(s[0x6f0] + JSON.stringify(data.data.pay_data));
                            var payInfo = {
                                productName: data.data.pay_data.productName,
                                productId: data.data.pay_data.productId,
                                productPrice: data.data.pay_data.productPrice,
                                cpOrderId: data.data.pay_data.cpOrderId,
                                extendsParam1: data.data.pay_data.extendsParam1,
                                extendsParam2: data.data.pay_data.extendsParam2,
                                roleId: data.data.pay_data.roleId,
                                roleName: data.data.pay_data.roleName,
                                roleLevel: data.data.pay_data.roleLevel,
                                serverId: data.data.pay_data.serverId,
                                serverName: data.data.pay_data.serverName,
                                roleVip: data.data.pay_data.roleVip,
                                function(result) {
                                    console.log(s[0x6f1], result);
                                }
                            };

                            qingjs.instance.purchase(payInfo);
                        } else {
                            callbacks[s[0xc6]] && callbacks[s[0xc6]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[s[0x86]] && callbacks[s[0x86]](1, {
                            errMsg: s[0x6d9]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data, callback) {
            var uid = wx.getStorageSync(s[0x6d4]);
            var username = wx.getStorageSync(s[0x6d5]);

            var postData = {};
            postData[s[0x6f2]] = uid;
            postData[s[0x6f3]] = username;
            postData[s[0x6f4]] = data.roleid;
            postData[s[0x6f5]] = data.rolelevel;
            postData[s[0x6f6]] = data.rolename;
            postData[s[0x53]] = data.serverid;

            if (data.roleid && data.serverid) {
                _w$A1YI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(s[0x1bf], postData);
            var roleInfo = {
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                serverId: data.serverid,
                serverName: data.servername,
                roleVip: 0,
                rolePower: 0,
                reportType: s[0x6f7]
            };

            qingjs.instance.reportRoleInfo(roleInfo, function (result) {
                console.log(s[0x6f8], result);
                if (qingjs.instance.canPay()) {
                    callback && callback({ 'show_pay': 1 });
                } else {
                    callback && callback({ 'show_pay': 0 });
                }
            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(s[0x6d4]);
            var username = wx.getStorageSync(s[0x6d5]);

            var postData = {};
            postData[s[0x6f2]] = uid;
            postData[s[0x6f3]] = username;
            postData[s[0x6f4]] = data.roleid;
            postData[s[0x6f5]] = data.rolelevel;
            postData[s[0x6f6]] = data.rolename;
            postData[s[0x53]] = data.serverid;

            if (data.roleid && data.serverid) {
                _w$A1YI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(s[0x6f9], postData);

            var roleInfo = {
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                serverId: data.serverid,
                serverName: data.servername,
                roleVip: 0,
                rolePower: data.rolepower ? data.rolepower : 0,
                reportType: s[0x6fa]
            };

            qingjs.instance.reportRoleInfo(roleInfo, function (result) {
                console.log(s[0x6fb], result);
                if (qingjs.instance.canPay()) {
                    callback && callback({ 'show_pay': 1 });
                } else {
                    callback && callback({ 'show_pay': 0 });
                }
            });

            //进入游戏确认邀请成功
            if (_w$1IYA) {
                this.updateShare(_w$1IYA.invite, _w$1IYA.invite_type, _w$1IYA.is_new, data.roleid, data.serverid, _w$1IYA.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(s[0x6d4]);
            var username = wx.getStorageSync(s[0x6d5]);
            this.log(s[0x6fc], data);

            var postData = {};
            postData[s[0x6f2]] = uid;
            postData[s[0x6f3]] = username;
            postData[s[0x6f4]] = data.roleid;
            postData[s[0x6f5]] = data.rolelevel;
            postData[s[0x6f6]] = data.rolename;
            postData[s[0x53]] = data.serverid;

            if (data.roleid && data.serverid) {
                _w$A1YI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            var roleInfo = {
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                serverId: data.serverid,
                serverName: data.servername,
                roleVip: 0,
                rolePower: data.rolepower ? data.rolepower : 0,
                reportType: s[0x6fd]
            };

            qingjs.instance.reportRoleInfo(roleInfo, function (result) {
                console.log(s[0x6fe], result);
                if (qingjs.instance.canPay()) {
                    callback && callback({ 'show_pay': 1 });
                } else {
                    callback && callback({ 'show_pay': 0 });
                }
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = s[0x6ff].split('');
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
            var uuid = wx.getStorageSync(s[0x6c4]);
            var idfv = wx.getStorageSync(s[0x6c5]);
            var ad_code = wx.getStorageSync(s[0x6c6]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: s[0x700],
                net_type: system.wifiSignal == 0 ? '4G' : s[0x701],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == s[0x19f] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(s[0x702] + type);
            console.log(public_data);

            wx.request({
                url: s[0x6d0] + HOST + s[0x703] + type + s[0x704] + encodeURIComponent(JSON.stringify(public_data))
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
        beQuit: function (data) {
            wx.request({
                url: s[0x6d0] + HOST + s[0x705] + config.partner_id + '/' + config.game_pkg,
                method: s[0x63],
                dataType: s[0x4ac],
                header: {
                    'content-type': s[0x105] // 默认值
                },
                data: {
                    uid: partner_data.uid, // 渠道UID
                    event: s[0x706]
                },
                success: function (res) {
                    console.log(s[0x707] + JSON.stringify(res));
                }
            });
        },
        showMenu: function () {
            qingjs.instance.showMenu({
                stage: Laya.stage,
                canvas: canvas, // 微信小游戏上屏canvas
                entryIconX: 0, // 可选
                entryIconY: 300 // 可选
            });
        }
    };
}

function run(method, data, callback) {
    method in _w$A1IY && _w$A1IY[method](data, callback);
}

exports.init = function (data, callback) {
    run(s[0x70], data, callback);
};

exports.login = function (callback) {
    run(s[0x86], '', callback);
};

exports.login = function (callback) {
    run(s[0x86], '', callback);
};

exports.pay = function (data, callback) {
    run(s[0xc6], data, callback);
};

exports.openService = function () {
    run(s[0xd4]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(s[0xce], data);
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

    run(s[0xd0], data, extra ? extra.callback : "");
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
    run(s[0xd2], data, extra ? extra.callback : "");
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(s[0xd3], data);
};

exports.msgCheck = function (data, callback) {
    run(s[0x42], data, callback);
};
exports.downloadClient = function () {
    run(s[0x708]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(s[0x709]);
};

exports.beQuit = function (data) {
    run(s[0x70a], data);
};
exports.showMenu = function () {
    run(s[0x149]);
};
exports.subscribeMessage = function (data, callback) {
    run(s[0xe3], data, callback);
};