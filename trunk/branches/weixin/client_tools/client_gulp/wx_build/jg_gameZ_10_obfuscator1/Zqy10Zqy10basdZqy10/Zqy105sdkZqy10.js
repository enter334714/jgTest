var I1 = wx.h$;
import sdk6kw from './utils/sdkFrom6kw.com';

//TODO 替换对应参数
var config = {
    game_id: I1[0x6a7],
    game_pkg: I1[0x6a8],
    partner_label: I1[0x6a9],
    partner_id: I1[0x6aa],
    game_ver: I1[0x96],
    is_auth: true //授权登录
};
var J1GQ45J = J1G4J5Q();
var HOST = I1[0x6ab];
var J1GQ4J5 = null;
var J1G45JQ = null;

function J1G4J5Q() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(I1[0x6ac]);
            var self = this;

            var uuid = wx.getStorageSync(I1[0x6ad]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(I1[0x6ad], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(I1[0x6ae]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(I1[0x6ae], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(I1[0x6af], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(I1[0x6b0], data);
            //TODO 替换对应参数
            sdk6kw.init(function (status, data) {
                console.log(I1[0x6b1], status, data);
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
            console.log(I1[0x6b2]);
            var that = this;
            callbacks[I1[0xff]] = typeof callback == I1[0x3a7] ? callback : null;

            sdk6kw.login(function (status, data) {
                console.log(I1[0x6b3]);
                if (status === 1) {
                    that.do_login(data);
                } else {
                    callback(1, {
                        errMsg: I1[0x6b4]
                    });
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[I1[0x112]] = info.userId;
            public_data[I1[0x6b5]] = info.nickName;
            public_data[I1[0x100]] = info.token;
            public_data[I1[0x6b6]] = 1;
            if (J1G45JQ && typeof J1G45JQ == I1[0x342]) {
                for (var key in J1G45JQ) {
                    public_data[key] = J1G45JQ[key];
                }
            }

            wx.request({
                url: I1[0x6b7] + HOST + I1[0x6b8],
                method: I1[0xde],
                dataType: I1[0x49c],
                header: {
                    'content-type': I1[0x172] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(I1[0x6b9]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(I1[0x6ba], data.data.sdk_token);
                                wx.setStorageSync(I1[0x6bb], data.data.user_id);
                                wx.setStorageSync(I1[0x6bc], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(I1[0x6bd], data.data.ext);
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
                            callbacks[I1[0xff]] && callbacks[I1[0xff]](0, userData);
                        } else {
                            callbacks[I1[0xff]] && callbacks[I1[0xff]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(I1[0x6be], function (data) {
                            console.log(I1[0x6bf], data);
                            self.logStartShare(I1[0x6be]);
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
                        callbacks[I1[0xff]] && callbacks[I1[0xff]](1, {
                            errMsg: I1[0x6c0]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[I1[0x148]] = typeof callback == I1[0x3a7] ? callback : null;
            var type = data.type || I1[0x148];
            console.log(I1[0x6c1] + type);
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
                    console.log(I1[0x6c2], status, data);
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(I1[0x6ba]);
            wx.request({
                url: I1[0x6b7] + HOST + I1[0x6c3],
                method: I1[0xde],
                dataType: I1[0x49c],
                header: {
                    'content-type': I1[0x172] // 默认值
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
            console.log(I1[0x6c4]);
            var sdk_token = wx.getStorageSync(I1[0x6ba]);
            wx.request({
                url: I1[0x6b7] + HOST + I1[0x6c5],
                method: I1[0xde],
                dataType: I1[0x49c],
                header: {
                    'content-type': I1[0x172] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(I1[0x6c6]);
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
            console.log(I1[0x6c7]);
            var sdk_token = wx.getStorageSync(I1[0x6ba]);
            wx.request({
                url: I1[0x6b7] + HOST + I1[0x6c8],
                method: I1[0xde],
                dataType: I1[0x49c],
                header: {
                    'content-type': I1[0x172] // 默认值
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
                    console.log(I1[0x6c9]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[I1[0x148]] && callbacks[I1[0x148]](1, {
                                errMsg: I1[0x6ca] + data.msg
                            });
                        }
                    } else {
                        callbacks[I1[0x148]] && callbacks[I1[0x148]](1, {
                            errMsg: I1[0x6cb]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(I1[0x6cc]);
            var sdk_token = wx.getStorageSync(I1[0x6ba]);
            wx.request({
                url: I1[0x6b7] + HOST + I1[0x6cd],
                method: I1[0xde],
                dataType: I1[0x49c],
                header: {
                    'content-type': I1[0x172] // 默认值
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
                    console.log(I1[0x6ce]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(I1[0x6cf]);
            var sdk_token = wx.getStorageSync(I1[0x6ba]);
            wx.request({
                url: I1[0x6b7] + HOST + I1[0x6d0] + config.partner_id + '/' + config.game_pkg,
                method: I1[0xde],
                dataType: I1[0x49c],
                header: {
                    'content-type': I1[0x172] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content
                },
                success: function (res) {
                    console.log(I1[0x6d1]);
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
            console.log(I1[0x6d2]);
            console.log(data);

            var self = this;
            callbacks[I1[0x13b]] = typeof callback == I1[0x3a7] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(I1[0x6ba]);
            var session_key = wx.getStorageSync(I1[0x6bd]);
            if (!sdk_token && !session_key) {
                callbacks[I1[0x13b]] && callbacks[I1[0x13b]](1, {
                    errMsg: I1[0x6d3]
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
            public_data[I1[0x6d4]] = JSON.stringify(order_data);
            public_data[I1[0x6b6]] = 1;

            //发起网络请求
            wx.request({
                url: I1[0x6b7] + HOST + I1[0x6d5],
                method: I1[0xde],
                dataType: I1[0x49c],
                header: {
                    'content-type': I1[0x172] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(I1[0x6d6]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(I1[0x6d7] + JSON.stringify(data.data.pay_data));
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
                                    console.log(I1[0x6d8], status, res);
                                    if (status === 0) {
                                        callbacks[I1[0x13b]] && callbacks[I1[0x13b]](1, {
                                            errMsg: data.errMsg
                                        });
                                    }
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[I1[0x13b]] && callbacks[I1[0x13b]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[I1[0xff]] && callbacks[I1[0xff]](1, {
                            errMsg: I1[0x6c0]
                        });
                    }
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: I1[0x6d9] + data.ext2.extension + I1[0x6da] + data.ext2.price / 100,
                extraData: {},
                envVersion: I1[0x6db],
                success(res) {
                    // 打开成功
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(I1[0x6bb]);
            var username = wx.getStorageSync(I1[0x6bc]);

            var postData = {};
            postData[I1[0x6dc]] = uid;
            postData[I1[0x6dd]] = username;
            postData[I1[0x6de]] = data.roleid;
            postData[I1[0x6df]] = data.rolelevel;
            postData[I1[0x6e0]] = data.rolename;
            postData[I1[0x18]] = data.serverid;

            if (data.roleid && data.serverid) {
                J1GQ4J5 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(I1[0x1bc], postData);
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
            var uid = wx.getStorageSync(I1[0x6bb]);
            var username = wx.getStorageSync(I1[0x6bc]);
            callbacks[I1[0x6e1]] = typeof callback == I1[0x3a7] ? callback : null;
            this.upLogAndCheckPay(I1[0x6e1], data);

            var postData = {};
            postData[I1[0x6dc]] = uid;
            postData[I1[0x6dd]] = username;
            postData[I1[0x6de]] = data.roleid;
            postData[I1[0x6df]] = data.rolelevel;
            postData[I1[0x6e0]] = data.rolename;
            postData[I1[0x18]] = data.serverid;

            if (data.roleid && data.serverid) {
                J1GQ4J5 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(I1[0x6e1], postData);

            //进入游戏确认邀请成功
            if (J1G45JQ) {
                this.updateShare(J1G45JQ.invite, J1G45JQ.invite_type, J1G45JQ.is_new, data.roleid, data.serverid, J1G45JQ.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(I1[0x6bb]);
            var username = wx.getStorageSync(I1[0x6bc]);
            callbacks[I1[0x6e2]] = typeof callback == I1[0x3a7] ? callback : null;
            this.log(I1[0x6e2], data);

            var postData = {};
            postData[I1[0x6dc]] = uid;
            postData[I1[0x6dd]] = username;
            postData[I1[0x6de]] = data.roleid;
            postData[I1[0x6df]] = data.rolelevel;
            postData[I1[0x6e0]] = data.rolename;
            postData[I1[0x18]] = data.serverid;

            if (data.roleid && data.serverid) {
                J1GQ4J5 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.upLogAndCheckPay(I1[0x6e2], data);
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
                console.log(I1[0x6e3], data);
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
            var chars = I1[0x6e4].split('');
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
            var uuid = wx.getStorageSync(I1[0x6ad]);
            var idfv = wx.getStorageSync(I1[0x6ae]);
            var ad_code = wx.getStorageSync(I1[0x6af]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: I1[0x6e5],
                net_type: system.wifiSignal == 0 ? '4G' : I1[0x6e6],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == I1[0x6f] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(I1[0x6e7] + type);
            console.log(public_data);

            wx.request({
                url: I1[0x6b7] + HOST + I1[0x6e8] + type + I1[0x6e9] + encodeURIComponent(JSON.stringify(public_data))
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
    method in J1GQ45J && J1GQ45J[method](data, callback);
}

exports.init = function (data, callback) {
    run(I1[0xea], data, callback);
};

exports.login = function (callback) {
    run(I1[0xff], '', callback);
};

exports.login = function (callback) {
    run(I1[0xff], '', callback);
};
exports.pay = function (data, callback) {
    run(I1[0x13b], data, callback);
};
exports.openService = function () {
    run(I1[0x149]);
};
exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(I1[0x143], data);
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

    run(I1[0x145], data, callback);
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
    run(I1[0x147], data, callback);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(I1[0x148], data);
};

exports.msgCheck = function (data, callback) {
    run(I1[0xc9], data, callback);
};
exports.downloadClient = function () {
    run(I1[0x6ea]);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run(I1[0x6eb]);
};