var u = wx.$x;
// require("../utils/wxsdk_v3.8.js");
import w_test from "../utils/wxsdk_v3.12.js";
//TODO 替换对应参数
var config = {
    game_id: u[1946],
    game_pkg: u[1947],
    partner_label: u[1948],
    partner_id: u[1949],
    game_ver: u[1950],
    is_auth: true //授权登录
};
window.config = config;
var x1T69$J = x1T9J$6();
var HOST = u[1951];
var x1T69J$ = null;
var x1T9$J6 = null;
var partner_data = {};

function x1T9J$6() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(u[1952]);
            var self = this;

            var uuid = wx.getStorageSync(u[1953]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(u[1953], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(u[1954]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(u[1954], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(u[1955], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(u[1956], data);

            wx.showShareMenu({ withShareTicket: true });

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                x1T9$J6 = {
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
            console.log(u[1957]);
            callbacks[u[1113]] = typeof callback == u[130] ? callback : null;
            dyb.getDybUserInfo(function (callback) {
                console.log(u[1958] + JSON.stringify(callback));
                self.do_login(callback.user);
            });
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(u[1959] + tmplIds);
            //获取模板ID
            callbacks[u[1245]] = typeof callback == u[130] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(u[1960]);
                    console.log(res);
                    callbacks[u[1245]] && callbacks[u[1245]](res);
                },
                fail(res) {
                    console.log(u[1961]);
                    console.log(res);
                    callbacks[u[1245]] && callbacks[u[1245]](res);
                }
            });
        },

        do_login: function (info) {
            var self = this;
            partner_data = {
                openid: info.openid,
                sign: info.sign
            };
            var public_data = self.getPublicData();
            public_data[u[1962]] = 1;
            public_data[u[1963]] = JSON.stringify(partner_data);
            if (x1T9$J6 && typeof x1T9$J6 == u[13]) {
                for (var key in x1T9$J6) {
                    public_data[key] = x1T9$J6[key];
                }
            }

            //发起网络请求
            wx.request({
                url: u[1964] + HOST + u[1965],
                method: u[1082],
                dataType: u[393],
                header: {
                    'content-type': u[1279] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(u[1966], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(u[1967], data.data.sdk_token);
                                wx.setStorageSync(u[1968], data.data.user_id);
                                wx.setStorageSync(u[1969], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(u[1970], data.data.ext);
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
                            callbacks[u[1113]] && callbacks[u[1113]](0, userData);
                        } else {
                            callbacks[u[1113]] && callbacks[u[1113]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(u[1971], function (data) {
                            console.log(u[1972] + JSON.stringify(data));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(u[1971]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[u[1113]] && callbacks[u[1113]](1, {
                            errMsg: u[1973]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[u[1230]] = typeof callback == u[130] ? callback : null;
            var type = data.type || u[1230];
            console.log(u[1974] + type);
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
            var sdk_token = wx.getStorageSync(u[1967]);
            wx.request({
                url: u[1964] + HOST + u[1975],
                method: u[1082],
                dataType: u[393],
                header: {
                    'content-type': u[1279] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: x1T69J$ ? x1T69J$.server_id : '',
                    role_id: x1T69J$ ? x1T69J$.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            //登录后打开客服页面
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(u[1976]);
            var sdk_token = wx.getStorageSync(u[1967]);
            wx.request({
                url: u[1964] + HOST + u[1977],
                method: u[1082],
                dataType: u[393],
                header: {
                    'content-type': u[1279] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(u[1978]);
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
            console.log(u[1979]);
            var sdk_token = wx.getStorageSync(u[1967]);
            wx.request({
                url: u[1964] + HOST + u[1980],
                method: u[1082],
                dataType: u[393],
                header: {
                    'content-type': u[1279] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: x1T69J$ ? x1T69J$.server_id : '',
                    role_id: x1T69J$ ? x1T69J$.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(u[1981]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[u[1230]] && callbacks[u[1230]](1, {
                                errMsg: u[1982] + data.msg
                            });
                        }
                    } else {
                        callbacks[u[1230]] && callbacks[u[1230]](1, {
                            errMsg: u[1983]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(u[1984]);
            var sdk_token = wx.getStorageSync(u[1967]);
            wx.request({
                url: u[1964] + HOST + u[1985],
                method: u[1082],
                dataType: u[393],
                header: {
                    'content-type': u[1279] // 默认值
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
                    console.log(u[1986]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(u[1987]);
            let ret = {
                data: {}
            };
            dyb.msg_check(content, function (callback1) {
                console.log(u[1988] + JSON.stringify(callback1));
                if (callback1.code == 1) {
                    ret.statusCode = 200;
                    ret.data.state = 1;
                } else {
                    ret.statusCode = 0;
                    ret.data.state = 0;
                }
                callback && callback(ret);
            });
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(u[1989], data);
            var self = this;
            callbacks[u[1212]] = typeof callback == u[130] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(u[1967]);
            var session_key = wx.getStorageSync(u[1970]);
            if (!sdk_token && !session_key) {
                callbacks[u[1212]] && callbacks[u[1212]](1, {
                    errMsg: u[1990]
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
            public_data[u[1991]] = JSON.stringify(order_data);
            public_data[u[1962]] = 1;

            //发起网络请求
            wx.request({
                url: u[1964] + HOST + u[1992],
                method: u[1082],
                dataType: u[393],
                header: {
                    'content-type': u[1279] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(u[1993]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(u[1994] + JSON.stringify(data.data.pay_data));
                            let pay_data = {
                                pay_amount: data.data.pay_data.money,
                                extra_info: data.data.pay_data.order_id,
                                goods_count: 1,
                                goods_name: data.data.pay_data.product_name,
                                redirect_uri: data.data.pay_data.redirect_uri,
                                role_name: data.data.pay_data.role_name,
                                server_name: data.data.pay_data.server_name,
                                order_sn: data.data.pay_data.order_id
                            };

                            dyb.submitOrder(pay_data, function (callback) {
                                console.log(u[1995] + JSON.stringify(callback));
                            });
                        } else {
                            callbacks[u[1212]] && callbacks[u[1212]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[u[1113]] && callbacks[u[1113]](1, {
                            errMsg: u[1973]
                        });
                    }
                }
            });
        },

        showVideo: function (vid, callback) {
            dyb.createVideoAd(vid, function (call) {
                console.log(JSON.stringify(call), u[1996]);
                if (call.state == u[1663] && call.isEnded) {
                    //视频完整看完，进行发送奖励
                    console.log(u[1997]);
                    callback(1);
                } else {
                    console.log(u[1998]);
                    callback(0);
                }
            });
        },

        logCreateRole: function (data, callback) {
            var uid = wx.getStorageSync(u[1968]);
            var username = wx.getStorageSync(u[1969]);

            var postData = {};
            postData[u[1999]] = uid;
            postData[u[2000]] = username;
            postData[u[2001]] = data.roleid;
            postData[u[2002]] = data.rolelevel;
            postData[u[2003]] = data.rolename;
            postData[u[1068]] = data.serverid;

            if (data.roleid && data.serverid) {
                x1T69J$ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(u[14], postData);
            var roleInfo = {
                role_id: data.roleid,
                role_name: data.rolename,
                server_id: data.serverid,
                server_name: data.servername
            };

            dyb.createRole(roleInfo, function (callback) {
                console.log(u[2004] + JSON.stringify(callback));
            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(u[1968]);
            var username = wx.getStorageSync(u[1969]);

            var postData = {};
            postData[u[1999]] = uid;
            postData[u[2000]] = username;
            postData[u[2001]] = data.roleid;
            postData[u[2002]] = data.rolelevel;
            postData[u[2003]] = data.rolename;
            postData[u[1068]] = data.serverid;

            if (data.roleid && data.serverid) {
                x1T69J$ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(u[2005], postData);

            //进入游戏确认邀请成功
            if (x1T9$J6) {
                this.updateShare(x1T9$J6.invite, x1T9$J6.invite_type, x1T9$J6.is_new, data.roleid, data.serverid, x1T9$J6.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(u[1968]);
            var username = wx.getStorageSync(u[1969]);
            this.log(u[2006], data);

            var postData = {};
            postData[u[1999]] = uid;
            postData[u[2000]] = username;
            postData[u[2001]] = data.roleid;
            postData[u[2002]] = data.rolelevel;
            postData[u[2003]] = data.rolename;
            postData[u[1068]] = data.serverid;

            if (data.roleid && data.serverid) {
                x1T69J$ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            dyb.gameLevel(data.rolelevel, function (callback) {
                console.log(u[2007] + JSON.stringify(callback));
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = u[2008].split('');
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
            var uuid = wx.getStorageSync(u[1953]);
            var idfv = wx.getStorageSync(u[1954]);
            var ad_code = wx.getStorageSync(u[1955]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: u[2009],
                net_type: system.wifiSignal == 0 ? '4G' : u[2010],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == u[1432] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(u[2011] + type);
            console.log(public_data);

            wx.request({
                url: u[1964] + HOST + u[2012] + type + u[2013] + encodeURIComponent(JSON.stringify(public_data))
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
                url: u[1964] + HOST + u[2014] + config.partner_id + '/' + config.game_pkg,
                method: u[1082],
                dataType: u[393],
                header: {
                    'content-type': u[1279] // 默认值
                },
                data: {
                    uid: partner_data.uid, // 渠道UID
                    event: u[2015]
                },
                success: function (res) {
                    console.log(u[2016] + JSON.stringify(res));
                }
            });
        },
        showMenu: function () {
            qingjs.instance.showMenu({
                stage: Laya.stage,
                canvas: canvas, // 微信小游戏上屏canvas
                entryIconX: 0, // 可选
                entryIconY: 0 // 可选
            });
        }
    };
}

function run(method, data, callback) {
    method in x1T69$J && x1T69$J[method](data, callback);
}

exports.init = function (data, callback) {
    run(u[1093], data, callback);
};

exports.login = function (callback) {
    run(u[1113], '', callback);
};

exports.login = function (callback) {
    run(u[1113], '', callback);
};

exports.pay = function (data, callback) {
    run(u[1212], data, callback);
};
exports.showVideo = function (data, callback) {
    run(u[2017], data, callback);
};
exports.openService = function () {
    run(u[1231]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(u[1225], data);
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

    run(u[1227], data, extra ? extra.callback : "");
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower : ""
    };
    run(u[1229], data, extra ? extra.callback : "");
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(u[1230], data);
};

exports.msgCheck = function (data, callback) {
    run(u[1049], data, callback);
};
exports.downloadClient = function () {
    run(u[2018]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(u[2019]);
};

exports.beQuit = function (data) {
    run(u[2020], data);
};
exports.showMenu = function () {
    run(u[2021]);
};
exports.subscribeMessage = function (data, callback) {
    run(u[1245], data, callback);
};