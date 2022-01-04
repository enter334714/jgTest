var s = wx.$W;
// var qingjs = require("../utils/qingjs-wxapp.js");
import qingjs from "../utils/qingjs-wxapp.js";
//TODO 替换对应参数
var config = {
    game_id: s[381701],
    game_pkg: s[381702], //天剑vs霆耀--仙侠决
    partner_label: s[381703],
    partner_id: s[381704],
    game_ver: s[381705],
    is_auth: true //授权登录
};
window.config = config;
var _wB23Q0 = _wB30Q2();
var HOST = s[381706];
var _wB230Q = null;
var _wB3Q02 = null;
var partner_data = {};

function _wB30Q2() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(s[381707]);
            var self = this;

            var uuid = wx.getStorageSync(s[381708]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(s[381708], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(s[381709]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(s[381709], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(s[381710], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(s[381711], data);
            //TODO 替换对应参数
            qingjs.instance.onInit(function (initResult) {
                console.log(s[381712], initResult);
            });

            wx.showShareMenu({ withShareTicket: true });

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                _wB3Q02 = {
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
            console.log(s[381713]);
            callbacks[s[381039]] = typeof callback == s[380130] ? callback : null;
            qingjs.instance.login({}, function (loginResult) {
                console.log(s[381714], loginResult);
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
            console.log(s[381715] + tmplIds);
            //获取模板ID
            callbacks[s[381126]] = typeof callback == s[380130] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(s[381716]);
                    console.log(res);
                    callbacks[s[381126]] && callbacks[s[381126]](res);
                },
                fail(res) {
                    console.log(s[381717]);
                    console.log(res);
                    callbacks[s[381126]] && callbacks[s[381126]](res);
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
            public_data[s[381718]] = 1;
            public_data[s[381719]] = JSON.stringify(partner_data);
            if (_wB3Q02 && typeof _wB3Q02 == s[380013]) {
                for (var key in _wB3Q02) {
                    public_data[key] = _wB3Q02[key];
                }
            }

            //发起网络请求
            wx.request({
                url: s[381720] + HOST + s[381721],
                method: s[381008],
                dataType: s[380393],
                header: {
                    'content-type': s[381157] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(s[381722], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(s[381723], data.data.sdk_token);
                                wx.setStorageSync(s[381724], data.data.user_id);
                                wx.setStorageSync(s[381725], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(s[381726], data.data.ext);
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
                            callbacks[s[381039]] && callbacks[s[381039]](0, userData);
                        } else {
                            callbacks[s[381039]] && callbacks[s[381039]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(s[381727], function (data) {
                            console.log(s[381728] + JSON.stringify(data));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(s[381727]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query + "&" + qingjs.instance.getShareToken()
                                };
                            });
                        });
                    } else {
                        callbacks[s[381039]] && callbacks[s[381039]](1, {
                            errMsg: s[381729]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[s[381113]] = typeof callback == s[380130] ? callback : null;
            var type = data.type || s[381113];
            console.log(s[381730] + type);
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
            var sdk_token = wx.getStorageSync(s[381723]);
            wx.request({
                url: s[381720] + HOST + s[381731],
                method: s[381008],
                dataType: s[380393],
                header: {
                    'content-type': s[381157] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: _wB230Q ? _wB230Q.server_id : '',
                    role_id: _wB230Q ? _wB230Q.role_id : '',
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
            console.log(s[381732]);
            var sdk_token = wx.getStorageSync(s[381723]);
            wx.request({
                url: s[381720] + HOST + s[381733],
                method: s[381008],
                dataType: s[380393],
                header: {
                    'content-type': s[381157] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(s[381734]);
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
            console.log(s[381735]);
            var sdk_token = wx.getStorageSync(s[381723]);
            wx.request({
                url: s[381720] + HOST + s[381736],
                method: s[381008],
                dataType: s[380393],
                header: {
                    'content-type': s[381157] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: _wB230Q ? _wB230Q.server_id : '',
                    role_id: _wB230Q ? _wB230Q.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(s[381737]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[s[381113]] && callbacks[s[381113]](1, {
                                errMsg: s[381738] + data.msg
                            });
                        }
                    } else {
                        callbacks[s[381113]] && callbacks[s[381113]](1, {
                            errMsg: s[381739]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(s[381740]);
            var sdk_token = wx.getStorageSync(s[381723]);
            wx.request({
                url: s[381720] + HOST + s[381741],
                method: s[381008],
                dataType: s[380393],
                header: {
                    'content-type': s[381157] // 默认值
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
                    console.log(s[381742]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(s[381743]);
            var sdk_token = wx.getStorageSync(s[381723]);
            wx.request({
                url: s[381720] + HOST + s[381744] + config.partner_id + '/' + config.game_pkg,
                method: s[381008],
                dataType: s[380393],
                header: {
                    'content-type': s[381157] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log(s[381745]);
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
                    errMsg: s[381746]
                });
            }
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(s[381747], data);
            var self = this;
            callbacks[s[381100]] = typeof callback == s[380130] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(s[381723]);
            var session_key = wx.getStorageSync(s[381726]);
            if (!sdk_token && !session_key) {
                callbacks[s[381100]] && callbacks[s[381100]](1, {
                    errMsg: s[381748]
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
            public_data[s[381749]] = JSON.stringify(order_data);
            public_data[s[381718]] = 1;

            //发起网络请求
            wx.request({
                url: s[381720] + HOST + s[381750],
                method: s[381008],
                dataType: s[380393],
                header: {
                    'content-type': s[381157] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(s[381751]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(s[381752] + JSON.stringify(data.data.pay_data));
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
                                    console.log(s[381753], result);
                                }
                            };

                            qingjs.instance.purchase(payInfo);
                        } else {
                            callbacks[s[381100]] && callbacks[s[381100]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[s[381039]] && callbacks[s[381039]](1, {
                            errMsg: s[381729]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data, callback) {
            var uid = wx.getStorageSync(s[381724]);
            var username = wx.getStorageSync(s[381725]);

            var postData = {};
            postData[s[381754]] = uid;
            postData[s[381755]] = username;
            postData[s[381756]] = data.roleid;
            postData[s[381757]] = data.rolelevel;
            postData[s[381758]] = data.rolename;
            postData[s[380995]] = data.serverid;

            if (data.roleid && data.serverid) {
                _wB230Q = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(s[380014], postData);
            var roleInfo = {
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                serverId: data.serverid,
                serverName: data.servername,
                roleVip: 0,
                rolePower: 0,
                reportType: s[381759]
            };

            qingjs.instance.reportRoleInfo(roleInfo, function (result) {
                console.log(s[381760], result);
                if (qingjs.instance.canPay()) {
                    callback && callback({ 'show_pay': 1 });
                } else {
                    callback && callback({ 'show_pay': 0 });
                }
            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(s[381724]);
            var username = wx.getStorageSync(s[381725]);

            var postData = {};
            postData[s[381754]] = uid;
            postData[s[381755]] = username;
            postData[s[381756]] = data.roleid;
            postData[s[381757]] = data.rolelevel;
            postData[s[381758]] = data.rolename;
            postData[s[380995]] = data.serverid;

            if (data.roleid && data.serverid) {
                _wB230Q = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(s[381761], postData);

            var roleInfo = {
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                serverId: data.serverid,
                serverName: data.servername,
                roleVip: 0,
                rolePower: data.rolepower ? data.rolepower : 0,
                reportType: s[381762]
            };

            qingjs.instance.reportRoleInfo(roleInfo, function (result) {
                console.log(s[381763], result);
                if (qingjs.instance.canPay()) {
                    callback && callback({ 'show_pay': 1 });
                } else {
                    callback && callback({ 'show_pay': 0 });
                }
            });

            //进入游戏确认邀请成功
            if (_wB3Q02) {
                this.updateShare(_wB3Q02.invite, _wB3Q02.invite_type, _wB3Q02.is_new, data.roleid, data.serverid, _wB3Q02.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(s[381724]);
            var username = wx.getStorageSync(s[381725]);
            this.log(s[381764], data);

            var postData = {};
            postData[s[381754]] = uid;
            postData[s[381755]] = username;
            postData[s[381756]] = data.roleid;
            postData[s[381757]] = data.rolelevel;
            postData[s[381758]] = data.rolename;
            postData[s[380995]] = data.serverid;

            if (data.roleid && data.serverid) {
                _wB230Q = {
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
                reportType: s[381765]
            };

            qingjs.instance.reportRoleInfo(roleInfo, function (result) {
                console.log(s[381766], result);
                if (qingjs.instance.canPay()) {
                    callback && callback({ 'show_pay': 1 });
                } else {
                    callback && callback({ 'show_pay': 0 });
                }
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = s[381767].split('');
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
            var uuid = wx.getStorageSync(s[381708]);
            var idfv = wx.getStorageSync(s[381709]);
            var ad_code = wx.getStorageSync(s[381710]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: s[381768],
                net_type: system.wifiSignal == 0 ? '4G' : s[381769],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == s[381301] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(s[381770] + type);
            console.log(public_data);

            wx.request({
                url: s[381720] + HOST + s[381771] + type + s[381772] + encodeURIComponent(JSON.stringify(public_data))
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
                url: s[381720] + HOST + s[381773] + config.partner_id + '/' + config.game_pkg,
                method: s[381008],
                dataType: s[380393],
                header: {
                    'content-type': s[381157] // 默认值
                },
                data: {
                    uid: partner_data.uid, // 渠道UID
                    event: s[381774]
                },
                success: function (res) {
                    console.log(s[381775] + JSON.stringify(res));
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
    method in _wB23Q0 && _wB23Q0[method](data, callback);
}

exports.init = function (data, callback) {
    run(s[381019], data, callback);
};

exports.login = function (callback) {
    run(s[381039], '', callback);
};

exports.login = function (callback) {
    run(s[381039], '', callback);
};

exports.pay = function (data, callback) {
    run(s[381100], data, callback);
};

exports.openService = function () {
    run(s[381114]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(s[381108], data);
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

    run(s[381110], data, extra ? extra.callback : "");
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
    run(s[381112], data, extra ? extra.callback : "");
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(s[381113], data);
};

exports.msgCheck = function (data, callback) {
    run(s[380979], data, callback);
};
exports.downloadClient = function () {
    run(s[381776]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(s[381777]);
};

exports.beQuit = function (data) {
    run(s[381778], data);
};
exports.showMenu = function () {
    run(s[381221]);
};
exports.subscribeMessage = function (data, callback) {
    run(s[381126], data, callback);
};