var f = wx.$B;
import sdk6kw from '../utils/sdkFrom6kw.com';

//TODO 替换对应参数
import config from './partner_config.js';
window.config = config;
var t1OKYBW = t1OYWBK();
var HOST = f[35653];
var t1OKYWB = null;
var t1OYBWK = null;

function t1OYWBK() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(f[35654]);
            var self = this;

            var uuid = wx.getStorageSync(f[35655]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(f[35655], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(f[35656]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(f[35656], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(f[35657], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(f[307], data);
            //TODO 替换对应参数
            sdk6kw.init(config.partner_mergeId, function (status, data) {
                console.log(f[35658], status, data);
            });

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                t1OYBWK = {
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
            console.log(f[35659]);
            var that = this;
            callbacks[f[35095]] = typeof callback == f[34897] ? callback : null;

            sdk6kw.login(function (status, data) {
                console.log(f[35660]);
                if (status === 1) {
                    that.do_login(data);
                } else {
                    callback(1, {
                        errMsg: f[35661]
                    });
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[f[12813]] = info.userId;
            public_data[f[35662]] = info.nickName;
            public_data[f[34954]] = info.token;
            public_data[f[35663]] = 1;
            if (t1OYBWK && typeof t1OYBWK == f[302]) {
                for (var key in t1OYBWK) {
                    public_data[key] = t1OYBWK[key];
                }
            }

            wx.request({
                url: f[27787] + HOST + f[35664],
                method: f[35065],
                dataType: f[5830],
                header: {
                    'content-type': f[35238] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(f[35665]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(f[35666], data.data.sdk_token);
                                wx.setStorageSync(f[35667], data.data.user_id);
                                wx.setStorageSync(f[35668], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(f[35669], data.data.ext);
                                }
                            } catch (e) {}
                            var ad_flag = info[f[113]] == 1 ? 1 : 0;
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
                                ad_flag: ad_flag
                            };
                            callbacks[f[35095]] && callbacks[f[35095]](0, userData);
                        } else {
                            callbacks[f[35095]] && callbacks[f[35095]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(f[35670], function (data) {
                            console.log(f[35671], data);
                            self.logStartShare(f[35670]);
                            sdk6kw.shareLog(function (status, res) {
                                wx.onShareAppMessage(function () {
                                    return {
                                        title: data.title,
                                        imageUrl: data.img,
                                        query: data.query + '&' + res.query
                                    };
                                });
                            });
                        });
                    } else {
                        callbacks[f[35095]] && callbacks[f[35095]](1, {
                            errMsg: f[35672]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[f[35198]] = typeof callback == f[34897] ? callback : null;
            var type = data.type || f[35198];
            console.log(f[35673] + type);
            var self = this;

            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);
                var shareConfig = {
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query
                };
                sdk6kw.share(shareConfig, function (status, data) {
                    console.log(f[35674], status, data);
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(f[35666]);
            wx.request({
                url: f[27787] + HOST + f[35675],
                method: f[35065],
                dataType: f[5830],
                header: {
                    'content-type': f[35238] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: t1OKYWB ? t1OKYWB.server_id : '',
                    role_id: t1OKYWB ? t1OKYWB.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(f[35676]);
            var sdk_token = wx.getStorageSync(f[35666]);
            wx.request({
                url: f[27787] + HOST + f[35677],
                method: f[35065],
                dataType: f[5830],
                header: {
                    'content-type': f[35238] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(f[35678]);
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
            console.log(f[35679]);
            var sdk_token = wx.getStorageSync(f[35666]);
            wx.request({
                url: f[27787] + HOST + f[35680],
                method: f[35065],
                dataType: f[5830],
                header: {
                    'content-type': f[35238] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: t1OKYWB ? t1OKYWB.server_id : '',
                    role_id: t1OKYWB ? t1OKYWB.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(f[35681]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[f[35198]] && callbacks[f[35198]](1, {
                                errMsg: f[35682] + data.msg
                            });
                        }
                    } else {
                        callbacks[f[35198]] && callbacks[f[35198]](1, {
                            errMsg: f[35683]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(f[35684]);
            var sdk_token = wx.getStorageSync(f[35666]);
            wx.request({
                url: f[27787] + HOST + f[35685],
                method: f[35065],
                dataType: f[5830],
                header: {
                    'content-type': f[35238] // 默认值
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
                    console.log(f[35686]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(f[35687]);
            var sdk_token = wx.getStorageSync(f[35666]);
            sdk6kw.msgSecCheck({
                content: content,
                scene: 1,
                callback: (data, res) => {
                    console.log(f[35688], data);
                    let ret = {
                        data: {}
                    };
                    if (res.data.result.suggest == f[6192]) {
                        ret.statusCode = 200;
                        ret.data.state = 1;
                    } else {
                        ret.statusCode = 200;
                        ret.data.state = 0;
                    }
                    callback && callback(ret);
                }
            });
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(f[35689]);
            console.log(data);

            var self = this;
            callbacks[f[35177]] = typeof callback == f[34897] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(f[35666]);
            var session_key = wx.getStorageSync(f[35669]);
            if (!sdk_token && !session_key) {
                callbacks[f[35177]] && callbacks[f[35177]](1, {
                    errMsg: f[35690]
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
            public_data[f[35691]] = JSON.stringify(order_data);
            public_data[f[35663]] = 1;

            //发起网络请求
            wx.request({
                url: f[27787] + HOST + f[35692],
                method: f[35065],
                dataType: f[5830],
                header: {
                    'content-type': f[35238] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(f[35693]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(f[35694] + JSON.stringify(data.data.pay_data));
                            var payInfo = {
                                cpOrder: data.data.pay_data.cpOrder,
                                serverId: data.data.pay_data.serverId,
                                serverName: data.data.pay_data.serverName,
                                productId: data.data.pay_data.productId,
                                productName: data.data.pay_data.productName,
                                roleId: data.data.pay_data.roleId,
                                roleName: data.data.pay_data.roleName,
                                roleLevel: data.data.pay_data.roleLevel,
                                notifyUrl: data.data.pay_data.notifyUrl,
                                price: data.data.pay_data.price,
                                extension: data.data.pay_data.extension
                            };
                            if (data.data.ext == '') {
                                sdk6kw.pay(payInfo, function (status, res) {
                                    console.log(f[35695], status, res);
                                    if (status === 0) {
                                        callbacks[f[35177]] && callbacks[f[35177]](1, {
                                            errMsg: data.errMsg
                                        });
                                    }
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[f[35177]] && callbacks[f[35177]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[f[35095]] && callbacks[f[35095]](1, {
                            errMsg: f[35672]
                        });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: f[35696] + data.ext2.extension + f[35697] + data.ext2.price / 100,
                extraData: {},
                envVersion: f[35698],
                success(res) {
                    // 打开成功
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(f[35667]);
            var username = wx.getStorageSync(f[35668]);

            var postData = {};
            postData[f[35699]] = uid;
            postData[f[35700]] = username;
            postData[f[11243]] = data.roleid;
            postData[f[35701]] = data.rolelevel;
            postData[f[35702]] = data.rolename;
            postData[f[11928]] = data.serverid;

            if (data.roleid && data.serverid) {
                t1OKYWB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(f[6], postData);
            var roleInfo = {
                roleId: data.roleid,
                roleName: data.rolename,
                serverName: data.servername,
                serverId: data.serverid,
                roleLevel: data.rolelevel,
                payLevel: 0,
                createTime: Date.parse(new Date()) / 1000
            };

            sdk6kw.logRole(roleInfo.createTime, roleInfo.serverId, roleInfo.serverName, roleInfo.roleId, roleInfo.roleName, roleInfo.roleLevel, roleInfo.payLevel);
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(f[35667]);
            var username = wx.getStorageSync(f[35668]);
            callbacks[f[5712]] = typeof callback == f[34897] ? callback : null;
            this.upLogAndCheckPay(f[5712], data);

            var postData = {};
            postData[f[35699]] = uid;
            postData[f[35700]] = username;
            postData[f[11243]] = data.roleid;
            postData[f[35701]] = data.rolelevel;
            postData[f[35702]] = data.rolename;
            postData[f[11928]] = data.serverid;

            if (data.roleid && data.serverid) {
                t1OKYWB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(f[5712], postData);

            //进入游戏确认邀请成功
            if (t1OYBWK) {
                this.updateShare(t1OYBWK.invite, t1OYBWK.invite_type, t1OYBWK.is_new, data.roleid, data.serverid, t1OYBWK.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(f[35667]);
            var username = wx.getStorageSync(f[35668]);
            callbacks[f[35703]] = typeof callback == f[34897] ? callback : null;
            this.log(f[35703], data);

            var postData = {};
            postData[f[35699]] = uid;
            postData[f[35700]] = username;
            postData[f[11243]] = data.roleid;
            postData[f[35701]] = data.rolelevel;
            postData[f[35702]] = data.rolename;
            postData[f[11928]] = data.serverid;

            if (data.roleid && data.serverid) {
                t1OKYWB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.upLogAndCheckPay(f[35703], data);
        },

        //角色上报和检测充值开关接口
        upLogAndCheckPay: function (type, data) {
            var roleInfo = {
                roleId: data.roleid,
                roleName: data.rolename,
                serverName: data.servername,
                serverId: data.serverid,
                roleLevel: data.rolelevel,
                payLevel: 0,
                createTime: data.rolecreatetime
            };

            sdk6kw.logRole(roleInfo.createTime, roleInfo.serverId, roleInfo.serverName, roleInfo.roleId, roleInfo.roleName, roleInfo.roleLevel, roleInfo.payLevel);

            //检测充值开关接口
            sdk6kw.getPayState(roleInfo, function (status, data) {
                console.log(f[35704], data);
                if (status === 1) {
                    if (data.switch === 1) {
                        callbacks[type] && callbacks[type](0); //关闭全部充值入口
                    } else {
                        if (data.gamePayLimitSwitch === 1) {
                            // 满足游戏方显示充值入口条件
                            callbacks[type] && callbacks[type](2);
                        } else {
                            //忽略游戏方显示充值入口的条件判断直接显示充值入口
                            callbacks[type] && callbacks[type](1);
                        }
                    }
                } else {
                    callbacks[type] && callbacks[type](0); //关闭全部充值入口
                }
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = f[35705].split('');
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
            var uuid = wx.getStorageSync(f[35655]);
            var idfv = wx.getStorageSync(f[35656]);
            var ad_code = wx.getStorageSync(f[35657]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: f[35706],
                net_type: system.wifiSignal == 0 ? '4G' : f[35707],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == f[35625] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(f[35708] + type);
            console.log(public_data);

            wx.request({
                url: f[27787] + HOST + f[35709] + type + f[35710] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        weiduanHelper: function () {

            sdk6kw.openCustomerWithClientChange();
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(f[35711] + tmplIds);
            //获取模板ID
            callbacks[f[35212]] = typeof callback == f[34897] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(f[35712]);
                    console.log(res);
                    callbacks[f[35212]] && callbacks[f[35212]](res);
                },
                fail(res) {
                    console.log(f[35713]);
                    console.log(res);
                    callbacks[f[35212]] && callbacks[f[35212]](res);
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in t1OKYBW && t1OKYBW[method](data, callback);
}

exports.init = function (data, callback) {
    run(f[398], data, callback);
};

exports.login = function (callback) {
    run(f[35095], '', callback);
};

exports.login = function (callback) {
    run(f[35095], '', callback);
};
exports.pay = function (data, callback) {
    run(f[35177], data, callback);
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
    run(f[35189], data);
};
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, callback) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime
    };

    run(f[35192], data, callback);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, callback) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime
    };
    run(f[35195], data, callback);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(f[35198], data);
};

exports.msgCheck = function (data, callback) {
    run(f[12831], data, callback);
};
exports.downloadClient = function () {
    run(f[35714]);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run(f[35715]);
};
exports.subscribeMessage = function (data, callback) {
    run(f[35212], data, callback);
};

exports.weiduanHelper = function () {
    run(f[25222]);
};