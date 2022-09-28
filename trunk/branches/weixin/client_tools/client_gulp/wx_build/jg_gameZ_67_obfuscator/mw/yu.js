var J = wx.h$;
import sdk6kw from '../utils/sdkFrom6kw.com';

//TODO 替换对应参数
var config = {
    game_id: J[31922],
    game_pkg: J[31923],
    partner_label: J[31924],
    partner_id: J[31925],
    game_ver: J[31926],
    is_auth: true //授权登录
};
window.config = config;
var J1F5QRP = J1FQPR5();
var HOST = J[31927];
var J1F5QPR = null;
var J1FQRP5 = null;

function J1FQPR5() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(J[31928]);
            var self = this;

            var uuid = wx.getStorageSync(J[31929]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(J[31929], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(J[31930]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(J[31930], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(J[31931], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(J[304], data);
            //TODO 替换对应参数
            sdk6kw.init(function (status, data) {
                console.log(J[31932], status, data);
            });

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                J1FQRP5 = {
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
            console.log(J[31933]);
            var that = this;
            callbacks[J[31617]] = typeof callback == J[31173] ? callback : null;

            sdk6kw.login(function (status, data) {
                console.log(J[31934]);
                if (status === 1) {
                    that.do_login(data);
                } else {
                    callback(1, {
                        errMsg: J[31935]
                    });
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[J[19399]] = info.userId;
            public_data[J[31936]] = info.nickName;
            public_data[J[31232]] = info.token;
            public_data[J[31937]] = 1;
            if (J1FQRP5 && typeof J1FQRP5 == J[299]) {
                for (var key in J1FQRP5) {
                    public_data[key] = J1FQRP5[key];
                }
            }

            wx.request({
                url: J[26576] + HOST + J[31938],
                method: J[31586],
                dataType: J[5474],
                header: {
                    'content-type': J[31755] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(J[31939]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(J[31940], data.data.sdk_token);
                                wx.setStorageSync(J[31941], data.data.user_id);
                                wx.setStorageSync(J[31942], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(J[31943], data.data.ext);
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
                            callbacks[J[31617]] && callbacks[J[31617]](0, userData);
                        } else {
                            callbacks[J[31617]] && callbacks[J[31617]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(J[31944], function (data) {
                            console.log(J[31945], data);
                            self.logStartShare(J[31944]);
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
                        callbacks[J[31617]] && callbacks[J[31617]](1, {
                            errMsg: J[31946]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[J[31714]] = typeof callback == J[31173] ? callback : null;
            var type = data.type || J[31714];
            console.log(J[31947] + type);
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
                    console.log(J[31948], status, data);
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(J[31940]);
            wx.request({
                url: J[26576] + HOST + J[31949],
                method: J[31586],
                dataType: J[5474],
                header: {
                    'content-type': J[31755] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: J1F5QPR ? J1F5QPR.server_id : '',
                    role_id: J1F5QPR ? J1F5QPR.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(J[31950]);
            var sdk_token = wx.getStorageSync(J[31940]);
            wx.request({
                url: J[26576] + HOST + J[31951],
                method: J[31586],
                dataType: J[5474],
                header: {
                    'content-type': J[31755] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(J[31952]);
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
            console.log(J[31953]);
            var sdk_token = wx.getStorageSync(J[31940]);
            wx.request({
                url: J[26576] + HOST + J[31954],
                method: J[31586],
                dataType: J[5474],
                header: {
                    'content-type': J[31755] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: J1F5QPR ? J1F5QPR.server_id : '',
                    role_id: J1F5QPR ? J1F5QPR.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(J[31955]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[J[31714]] && callbacks[J[31714]](1, {
                                errMsg: J[31956] + data.msg
                            });
                        }
                    } else {
                        callbacks[J[31714]] && callbacks[J[31714]](1, {
                            errMsg: J[31957]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(J[31958]);
            var sdk_token = wx.getStorageSync(J[31940]);
            wx.request({
                url: J[26576] + HOST + J[31959],
                method: J[31586],
                dataType: J[5474],
                header: {
                    'content-type': J[31755] // 默认值
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
                    console.log(J[31960]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(J[31961]);
            var sdk_token = wx.getStorageSync(J[31940]);
            sdk6kw.msgSecCheck({
                content: content,
                scene: 1,
                callback: (data, res) => {
                    console.log(J[31962], data);
                    let ret = {
                        data: {}
                    };
                    if (res.data.result.suggest == J[5803]) {
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
            console.log(J[31963]);
            console.log(data);

            var self = this;
            callbacks[J[31691]] = typeof callback == J[31173] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(J[31940]);
            var session_key = wx.getStorageSync(J[31943]);
            if (!sdk_token && !session_key) {
                callbacks[J[31691]] && callbacks[J[31691]](1, {
                    errMsg: J[31964]
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
            public_data[J[31965]] = JSON.stringify(order_data);
            public_data[J[31937]] = 1;

            //发起网络请求
            wx.request({
                url: J[26576] + HOST + J[31966],
                method: J[31586],
                dataType: J[5474],
                header: {
                    'content-type': J[31755] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(J[31967]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(J[31968] + JSON.stringify(data.data.pay_data));
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
                                    console.log(J[31969], status, res);
                                    if (status === 0) {
                                        callbacks[J[31691]] && callbacks[J[31691]](1, {
                                            errMsg: data.errMsg
                                        });
                                    }
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[J[31691]] && callbacks[J[31691]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[J[31617]] && callbacks[J[31617]](1, {
                            errMsg: J[31946]
                        });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: J[31970] + data.ext2.extension + J[31971] + data.ext2.price / 100,
                extraData: {},
                envVersion: J[31972],
                success(res) {
                    // 打开成功
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(J[31941]);
            var username = wx.getStorageSync(J[31942]);

            var postData = {};
            postData[J[31973]] = uid;
            postData[J[31974]] = username;
            postData[J[10752]] = data.roleid;
            postData[J[31975]] = data.rolelevel;
            postData[J[31976]] = data.rolename;
            postData[J[11442]] = data.serverid;

            if (data.roleid && data.serverid) {
                J1F5QPR = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(J[6], postData);
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
            var uid = wx.getStorageSync(J[31941]);
            var username = wx.getStorageSync(J[31942]);
            callbacks[J[5356]] = typeof callback == J[31173] ? callback : null;
            this.upLogAndCheckPay(J[5356], data);

            var postData = {};
            postData[J[31973]] = uid;
            postData[J[31974]] = username;
            postData[J[10752]] = data.roleid;
            postData[J[31975]] = data.rolelevel;
            postData[J[31976]] = data.rolename;
            postData[J[11442]] = data.serverid;

            if (data.roleid && data.serverid) {
                J1F5QPR = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(J[5356], postData);

            //进入游戏确认邀请成功
            if (J1FQRP5) {
                this.updateShare(J1FQRP5.invite, J1FQRP5.invite_type, J1FQRP5.is_new, data.roleid, data.serverid, J1FQRP5.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(J[31941]);
            var username = wx.getStorageSync(J[31942]);
            callbacks[J[31977]] = typeof callback == J[31173] ? callback : null;
            this.log(J[31977], data);

            var postData = {};
            postData[J[31973]] = uid;
            postData[J[31974]] = username;
            postData[J[10752]] = data.roleid;
            postData[J[31975]] = data.rolelevel;
            postData[J[31976]] = data.rolename;
            postData[J[11442]] = data.serverid;

            if (data.roleid && data.serverid) {
                J1F5QPR = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.upLogAndCheckPay(J[31977], data);
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
                console.log(J[31978], data);
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
            var chars = J[31979].split('');
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
            var uuid = wx.getStorageSync(J[31929]);
            var idfv = wx.getStorageSync(J[31930]);
            var ad_code = wx.getStorageSync(J[31931]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: J[31980],
                net_type: system.wifiSignal == 0 ? '4G' : J[31981],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == J[31899] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(J[31982] + type);
            console.log(public_data);

            wx.request({
                url: J[26576] + HOST + J[31983] + type + J[31984] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(J[31985] + tmplIds);
            //获取模板ID
            callbacks[J[31728]] = typeof callback == J[31173] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(J[31986]);
                    console.log(res);
                    callbacks[J[31728]] && callbacks[J[31728]](res);
                },
                fail(res) {
                    console.log(J[31987]);
                    console.log(res);
                    callbacks[J[31728]] && callbacks[J[31728]](res);
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in J1F5QRP && J1F5QRP[method](data, callback);
}

exports.init = function (data, callback) {
    run(J[394], data, callback);
};

exports.login = function (callback) {
    run(J[31617], '', callback);
};

exports.login = function (callback) {
    run(J[31617], '', callback);
};
exports.pay = function (data, callback) {
    run(J[31691], data, callback);
};
exports.openService = function () {
    run(J[24409]);
};
exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(J[31705], data);
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

    run(J[31708], data, callback);
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
    run(J[31711], data, callback);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(J[31714], data);
};

exports.msgCheck = function (data, callback) {
    run(J[12246], data, callback);
};
exports.downloadClient = function () {
    run(J[31988]);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run(J[31989]);
};
exports.subscribeMessage = function (data, callback) {
    run(J[31728], data, callback);
};

exports.weiduanHelper = function () {
    run(J[24288]);
};