var J = wx.h$;
import sdk6kw from '../utils/sdkFrom6kw.com-v1.0.10';

//TODO 替换对应参数
import config from './partner_config.js';
window.config = config;
var J1GQ45J = J1G4J5Q();
var HOST = J[0x7da];
var J1GQ4J5 = null;
var J1G45JQ = null;

function J1G4J5Q() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(J[0x7db]);
            var self = this;

            var uuid = wx.getStorageSync(J[0x7dc]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(J[0x7dc], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(J[0x7dd]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(J[0x7dd], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(J[0x7de], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(J[0x7df], data);
            //TODO 替换对应参数
            sdk6kw.init(config.partner_mergeId, function (status, data) {
                console.log(J[0x7e0], status, data);
            });

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                J1G45JQ = {
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
            console.log(J[0x7e1]);
            var that = this;
            callbacks[J[0x4e6]] = typeof callback == J[0x82] ? callback : null;

            sdk6kw.login(function (status, data) {
                console.log(J[0x7e2]);
                if (status === 1) {
                    that.do_login(data);
                } else {
                    callback(1, {
                        errMsg: J[0x7e3]
                    });
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[J[0x504]] = info.userId;
            public_data[J[0x7e4]] = info.nickName;
            public_data[J[0x11d]] = info.token;
            public_data[J[0x7e5]] = 1;
            if (J1G45JQ && typeof J1G45JQ == J[0xd]) {
                for (var key in J1G45JQ) {
                    public_data[key] = J1G45JQ[key];
                }
            }

            wx.request({
                url: J[0x7e6] + HOST + J[0x7e7],
                method: J[0x4c4],
                dataType: J[0x189],
                header: {
                    'content-type': J[0x590] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(J[0x7e8]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(J[0x7e9], data.data.sdk_token);
                                wx.setStorageSync(J[0x7ea], data.data.user_id);
                                wx.setStorageSync(J[0x7eb], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(J[0x7ec], data.data.ext);
                                }
                            } catch (e) {}
                            var ad_flag = info[J[0x52a]] == 1 ? 1 : 0;
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
                            callbacks[J[0x4e6]] && callbacks[J[0x4e6]](0, userData);
                        } else {
                            callbacks[J[0x4e6]] && callbacks[J[0x4e6]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(J[0x7ed], function (data) {
                            console.log(J[0x7ee], data);
                            self.logStartShare(J[0x7ed]);
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
                        callbacks[J[0x4e6]] && callbacks[J[0x4e6]](1, {
                            errMsg: J[0x7ef]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[J[0x564]] = typeof callback == J[0x82] ? callback : null;
            var type = data.type || J[0x564];
            console.log(J[0x7f0] + type);
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
                    console.log(J[0x7f1], status, data);
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(J[0x7e9]);
            wx.request({
                url: J[0x7e6] + HOST + J[0x7f2],
                method: J[0x4c4],
                dataType: J[0x189],
                header: {
                    'content-type': J[0x590] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: J1GQ4J5 ? J1GQ4J5.server_id : '',
                    role_id: J1GQ4J5 ? J1GQ4J5.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(J[0x7f3]);
            var sdk_token = wx.getStorageSync(J[0x7e9]);
            wx.request({
                url: J[0x7e6] + HOST + J[0x7f4],
                method: J[0x4c4],
                dataType: J[0x189],
                header: {
                    'content-type': J[0x590] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(J[0x7f5]);
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
            console.log(J[0x7f6]);
            var sdk_token = wx.getStorageSync(J[0x7e9]);
            wx.request({
                url: J[0x7e6] + HOST + J[0x7f7],
                method: J[0x4c4],
                dataType: J[0x189],
                header: {
                    'content-type': J[0x590] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: J1GQ4J5 ? J1GQ4J5.server_id : '',
                    role_id: J1GQ4J5 ? J1GQ4J5.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(J[0x7f8]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[J[0x564]] && callbacks[J[0x564]](1, {
                                errMsg: J[0x7f9] + data.msg
                            });
                        }
                    } else {
                        callbacks[J[0x564]] && callbacks[J[0x564]](1, {
                            errMsg: J[0x7fa]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(J[0x7fb]);
            var sdk_token = wx.getStorageSync(J[0x7e9]);
            wx.request({
                url: J[0x7e6] + HOST + J[0x7fc],
                method: J[0x4c4],
                dataType: J[0x189],
                header: {
                    'content-type': J[0x590] // 默认值
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
                    console.log(J[0x7fd]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(J[0x7fe]);
            var sdk_token = wx.getStorageSync(J[0x7e9]);
            sdk6kw.msgSecCheck({
                content: content,
                scene: 1,
                callback: (data, res) => {
                    console.log(J[0x7ff], data);
                    let ret = {
                        data: {}
                    };
                    if (res.data.result.suggest == J[0x800]) {
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
            console.log(J[0x801]);
            console.log(data);

            var self = this;
            callbacks[J[0x54c]] = typeof callback == J[0x82] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(J[0x7e9]);
            var session_key = wx.getStorageSync(J[0x7ec]);
            if (!sdk_token && !session_key) {
                callbacks[J[0x54c]] && callbacks[J[0x54c]](1, {
                    errMsg: J[0x802]
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
            public_data[J[0x803]] = JSON.stringify(order_data);
            public_data[J[0x7e5]] = 1;

            //发起网络请求
            wx.request({
                url: J[0x7e6] + HOST + J[0x804],
                method: J[0x4c4],
                dataType: J[0x189],
                header: {
                    'content-type': J[0x590] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(J[0x805]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(J[0x806] + JSON.stringify(data.data.pay_data));
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
                                    console.log(J[0x807], status, res);
                                    if (status === 0) {
                                        callbacks[J[0x54c]] && callbacks[J[0x54c]](1, {
                                            errMsg: data.errMsg
                                        });
                                    }
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[J[0x54c]] && callbacks[J[0x54c]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[J[0x4e6]] && callbacks[J[0x4e6]](1, {
                            errMsg: J[0x7ef]
                        });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: J[0x808] + data.ext2.extension + J[0x809] + data.ext2.price / 100,
                extraData: {},
                envVersion: J[0x80a],
                success(res) {
                    // 打开成功
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(J[0x7ea]);
            var username = wx.getStorageSync(J[0x7eb]);

            var postData = {};
            postData[J[0x80b]] = uid;
            postData[J[0x80c]] = username;
            postData[J[0x80d]] = data.roleid;
            postData[J[0x80e]] = data.rolelevel;
            postData[J[0x80f]] = data.rolename;
            postData[J[0x3df]] = data.serverid;

            if (data.roleid && data.serverid) {
                J1GQ4J5 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(J[0xe], postData);
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
            var uid = wx.getStorageSync(J[0x7ea]);
            var username = wx.getStorageSync(J[0x7eb]);
            callbacks[J[0x810]] = typeof callback == J[0x82] ? callback : null;
            this.upLogAndCheckPay(J[0x810], data);

            var postData = {};
            postData[J[0x80b]] = uid;
            postData[J[0x80c]] = username;
            postData[J[0x80d]] = data.roleid;
            postData[J[0x80e]] = data.rolelevel;
            postData[J[0x80f]] = data.rolename;
            postData[J[0x3df]] = data.serverid;

            if (data.roleid && data.serverid) {
                J1GQ4J5 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(J[0x810], postData);

            //进入游戏确认邀请成功
            if (J1G45JQ) {
                this.updateShare(J1G45JQ.invite, J1G45JQ.invite_type, J1G45JQ.is_new, data.roleid, data.serverid, J1G45JQ.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(J[0x7ea]);
            var username = wx.getStorageSync(J[0x7eb]);
            callbacks[J[0x811]] = typeof callback == J[0x82] ? callback : null;
            this.log(J[0x811], data);

            var postData = {};
            postData[J[0x80b]] = uid;
            postData[J[0x80c]] = username;
            postData[J[0x80d]] = data.roleid;
            postData[J[0x80e]] = data.rolelevel;
            postData[J[0x80f]] = data.rolename;
            postData[J[0x3df]] = data.serverid;

            if (data.roleid && data.serverid) {
                J1GQ4J5 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.upLogAndCheckPay(J[0x811], data);
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
                console.log(J[0x812], data);
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
            var chars = J[0x813].split('');
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
            var uuid = wx.getStorageSync(J[0x7dc]);
            var idfv = wx.getStorageSync(J[0x7dd]);
            var ad_code = wx.getStorageSync(J[0x7de]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: J[0x814],
                net_type: system.wifiSignal == 0 ? '4G' : J[0x815],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == J[0x43b] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(J[0x816] + type);
            console.log(public_data);

            wx.request({
                url: J[0x7e6] + HOST + J[0x817] + type + J[0x818] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(J[0x819] + tmplIds);
            //获取模板ID
            callbacks[J[0x571]] = typeof callback == J[0x82] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(J[0x81a]);
                    console.log(res);
                    callbacks[J[0x571]] && callbacks[J[0x571]](res);
                },
                fail(res) {
                    console.log(J[0x81b]);
                    console.log(res);
                    callbacks[J[0x571]] && callbacks[J[0x571]](res);
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in J1GQ45J && J1GQ45J[method](data, callback);
}

exports.init = function (data, callback) {
    run(J[0x4cf], data, callback);
};

exports.login = function (callback) {
    run(J[0x4e6], '', callback);
};

exports.login = function (callback) {
    run(J[0x4e6], '', callback);
};
exports.pay = function (data, callback) {
    run(J[0x54c], data, callback);
};
exports.openService = function () {
    run(J[0x565]);
};
exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(J[0x55b], data);
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

    run(J[0x55e], data, callback);
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
    run(J[0x561], data, callback);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(J[0x564], data);
};

exports.msgCheck = function (data, callback) {
    run(J[0x4a7], data, callback);
};
exports.downloadClient = function () {
    run(J[0x81c]);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run(J[0x81d]);
};
exports.subscribeMessage = function (data, callback) {
    run(J[0x571], data, callback);
};

exports.weiduanHelper = function () {
    run(J[0x567]);
};