var v = wx.$d;
const mk = require(v[0]);

var config = {
    game_id: v[1],
    game_pkg: v[2], //米壳-微信	御天-Z_21	神米服
    partner_label: v[3],
    partner_id: v[4],
    game_ver: v[5],
    is_auth: false, //授权登录
    partner_sgid: '5',
    partner_gid: '5',
    partner_app_id: v[6]
};

window.config = config;
var D$MUXR7 = D$MX7RU();
var HOST = v[7];
var D$MUX7R = null;
var D$MXR7U = null;
var user_invite_by_activity = null;

var partner_user_info = null;

function D$MX7RU() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(v[8]);
            var self = this;

            var uuid = wx.getStorageSync(v[9]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(v[9], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(v[10]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(v[10], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            console.log(v[11], JSON.stringify(info));

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(v[12], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(v[13], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if (!cp_activity_id) {
                cp_activity_id = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id ? v[14] : '';
            }

            // 带活动ID
            if (cp_activity_id) {
                user_invite_by_activity = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene,
                    cp_activity_id: cp_activity_id
                };
            }

            // 带邀请码
            if (invite) {
                D$MXR7U = {
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

        sendUrl: function () {},
        weiduanHelper: function () {},

        //TODO 替换联运登录接口
        login: function (data, callback) {
            console.log(v[15]);
            var that = this;
            callbacks[v[16]] = typeof callback == v[17] ? callback : null;
            mk.mksdk.showInit({ sgid: config.partner_sgid, gid: config.partner_gid }, function (init_call) {
                if (init_call.code == 0) {
                    console.log(v[18]);
                    mk.mksdk.showLoginView(function (login_call) {
                        if (login_call.code == 0) {
                            that.do_login(login_call);
                        } else {
                            console.log(v[19] + login_call.msg);
                        }
                    });
                } else {
                    console.log(v[20] + init_call.msg);
                }
            });
        },

        do_login: function (info) {
            var self = this;
            //发起网络请求
            partner_user_info = info;
            var public_data = self.getPublicData();
            public_data[v[21]] = JSON.stringify(info);
            public_data[v[22]] = 1;
            if (D$MXR7U && typeof D$MXR7U == v[23]) {
                for (var key in D$MXR7U) {
                    public_data[key] = D$MXR7U[key];
                }
            }

            wx.request({
                url: v[24] + HOST + v[25],
                method: v[26],
                dataType: v[27],
                header: {
                    'content-type': v[28] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(v[29]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(v[30], data.data.sdk_token);
                                wx.setStorageSync(v[31], data.data.user_id);
                                wx.setStorageSync(v[32], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(v[33], data.data.ext);
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
                            callbacks[v[16]] && callbacks[v[16]](0, userData);
                        } else {
                            callbacks[v[16]] && callbacks[v[16]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(v[34], function (data) {
                            console.log(v[35]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(v[34]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[v[16]] && callbacks[v[16]](1, {
                            errMsg: v[36]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[v[37]] = typeof callback == v[17] ? callback : null;
            var type = data.type || v[37];
            var cp_activity_id = data.cp_activity_id || '';

            console.log(v[38] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if (cp_activity_id != '' && data.query != '') {
                    data.query = data.query + v[39] + cp_activity_id;
                }

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
            var sdk_token = wx.getStorageSync(v[30]);
            wx.request({
                url: v[24] + HOST + v[40],
                method: v[26],
                dataType: v[27],
                header: {
                    'content-type': v[28] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: D$MUX7R ? D$MUX7R.server_id : '',
                    role_id: D$MUX7R ? D$MUX7R.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(v[41]);
            var sdk_token = wx.getStorageSync(v[30]);
            wx.request({
                url: v[24] + HOST + v[42],
                method: v[26],
                dataType: v[27],
                header: {
                    'content-type': v[28] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(v[43]);
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
            console.log(v[44]);
            var sdk_token = wx.getStorageSync(v[30]);
            wx.request({
                url: v[24] + HOST + v[45],
                method: v[26],
                dataType: v[27],
                header: {
                    'content-type': v[28] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: D$MUX7R ? D$MUX7R.server_id : '',
                    role_id: D$MUX7R ? D$MUX7R.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(v[46]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[v[37]] && callbacks[v[37]](1, {
                                errMsg: v[47] + data.msg
                            });
                        }
                    } else {
                        callbacks[v[37]] && callbacks[v[37]](1, {
                            errMsg: v[48]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(v[49]);
            var sdk_token = wx.getStorageSync(v[30]);
            wx.request({
                url: v[24] + HOST + v[50],
                method: v[26],
                dataType: v[27],
                header: {
                    'content-type': v[28] // 默认值
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
                    console.log(v[51]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(v[52]);
            var sdk_token = wx.getStorageSync(v[30]);
            wx.request({
                url: v[24] + HOST + v[53] + config.partner_id + '/' + config.game_pkg,
                method: v[26],
                dataType: v[27],
                header: {
                    'content-type': v[28] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content,
                    sgid: config.partner_sgid,
                    appid: config.partner_app_id,
                    openid: partner_user_info.openid
                },
                success: function (res) {
                    console.log(v[54]);
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
            console.log(v[55]);
            console.log(data);

            var self = this;
            callbacks[v[56]] = typeof callback == v[17] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(v[30]);
            var session_key = wx.getStorageSync(v[33]);
            if (!sdk_token && !session_key) {
                callbacks[v[56]] && callbacks[v[56]](1, {
                    errMsg: v[57]
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
            public_data[v[58]] = JSON.stringify(order_data);
            public_data[v[22]] = 1;

            //发起网络请求
            wx.request({
                url: v[24] + HOST + v[59],
                method: v[26],
                dataType: v[27],
                header: {
                    'content-type': v[28] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(v[60]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //TODO 替换对应方法
                            if (data.data.ext == "") {
                                mk.mksdk.showIapView(data.data.pay_data, function (callback) {
                                    console.log(callback);
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[v[56]] && callbacks[v[56]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[v[16]] && callbacks[v[16]](1, {
                            errMsg: v[36]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(v[31]);
            var username = wx.getStorageSync(v[32]);

            var postData = {};
            postData[v[61]] = uid;
            postData[v[62]] = username;
            postData[v[63]] = data.roleid;
            postData[v[64]] = data.rolelevel;
            postData[v[65]] = data.rolename;
            postData[v[66]] = data.serverid;

            if (data.roleid && data.serverid) {
                D$MUX7R = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(v[67], postData);

            // 记录从活动分享进入的角色信息
            if (user_invite_by_activity) {
                var scene = user_invite_by_activity.scene;
                var is_new = user_invite_by_activity.is_new;
                var invite_code = user_invite_by_activity.invite;
                var invite_type = user_invite_by_activity && user_invite_by_activity.invite_type ? user_invite_by_activity.invite_type : '';
                var cp_activity_id = user_invite_by_activity.cp_activity_id;

                var roleInfo = {
                    uid: uid,
                    role_id: data.roleid,
                    role_name: data.rolename,
                    server_id: data.serverid,
                    server_name: data.servername,
                    game_id: config.game_id,
                    partner_id: config.partner_id,
                    game_pkg: config.game_pkg,
                    scene: scene,
                    is_new: is_new,
                    invite_code: invite_code,
                    invite_type: invite_type,
                    cp_activity_id: cp_activity_id
                };

                wx.request({
                    url: v[24] + HOST + v[68],
                    method: v[26],
                    dataType: v[27],
                    header: {
                        'content-type': v[28] // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log(v[69] + JSON.stringify(res));
                    }
                });
            }

            var time = Date.parse(new Date()) / 1000;
            let param = {
                serverId: data.serverid,
                serverName: data.servername,
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                vipLevel: 0,
                roleChangeTime: time,
                jhMNum: 0,
                createRoleTime: time,
                familyName: '',
                roleCategory: '',
                extras: '',
                uploadRoleAction: 2
            };
            mk.mksdk.submitRoleData(param, function (callback) {
                if (callback.code == 0) {
                    console.log(v[70]);
                } else {
                    console.log(v[71]);
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: v[72] + data.ext2.cpOrderId + v[73] + data.ext2.post_order_data.totalFee / 100,
                extraData: {},
                envVersion: v[74],
                success(res) {
                    // 打开成功
                }
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(v[31]);
            var username = wx.getStorageSync(v[32]);

            var postData = {};
            postData[v[61]] = uid;
            postData[v[62]] = username;
            postData[v[63]] = data.roleid;
            postData[v[64]] = data.rolelevel;
            postData[v[65]] = data.rolename;
            postData[v[66]] = data.serverid;

            if (data.roleid && data.serverid) {
                D$MUX7R = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(v[75], postData);

            //进入游戏确认邀请成功
            if (D$MXR7U) {
                this.updateShare(D$MXR7U.invite, D$MXR7U.invite_type, D$MXR7U.is_new, data.roleid, data.serverid, D$MXR7U.scene);
            }
            var time = Date.parse(new Date()) / 1000;
            let param = {
                serverId: data.serverid,
                serverName: data.servername,
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                vipLevel: 0,
                roleChangeTime: time,
                jhMNum: 0,
                createRoleTime: data.rolecreatetime,
                familyName: '',
                roleCategory: '',
                extras: '',
                uploadRoleAction: 3
            };
            mk.mksdk.submitRoleData(param, function (callback) {
                if (callback.code == 0) {
                    console.log(v[76]);
                } else {
                    console.log(v[77]);
                }
            });
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(v[31]);
            var username = wx.getStorageSync(v[32]);

            var postData = {};
            postData[v[61]] = uid;
            postData[v[62]] = username;
            postData[v[63]] = data.roleid;
            postData[v[64]] = data.rolelevel;
            postData[v[65]] = data.rolename;
            postData[v[66]] = data.serverid;

            if (data.roleid && data.serverid) {
                D$MUX7R = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(v[78], postData);

            var time = Date.parse(new Date()) / 1000;
            let param = {
                serverId: data.serverid,
                serverName: data.servername,
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                vipLevel: 0,
                roleChangeTime: time,
                jhMNum: 0,
                createRoleTime: data.rolecreatetime,
                familyName: '',
                roleCategory: '',
                extras: '',
                uploadRoleAction: 4
            };
            mk.mksdk.submitRoleData(param, function (callback) {
                if (callback.code == 0) {
                    console.log(v[79]);
                } else {
                    console.log(v[80]);
                }
            });
        },

        is_authorize: function (callback) {
            wx.getSetting({
                success: function (res) {
                    if (res.authSetting[v[81]]) {
                        console.log(v[82], 1);
                        callback(1);
                    } else {
                        console.log(v[82], 0);
                        callback(0);
                    }
                }
            });
        },

        inspireVideo: function (data, videocallback) {},
        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = v[83].split('');
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
            var uuid = wx.getStorageSync(v[9]);
            var idfv = wx.getStorageSync(v[10]);
            var ad_code = wx.getStorageSync(v[12]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: v[84],
                net_type: system.wifiSignal == 0 ? '4G' : v[85],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == v[86] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(v[87] + type);
            console.log(public_data);

            wx.request({
                url: v[24] + HOST + v[88] + type + v[89] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        logout: function (data, callback) {
            mk.mksdk.logout(function (res) {
                console.log(res);
                callback(res.code);
            });
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback && callback(result);
        },

        getFriendShareInfo: function (callback) {
            this.getShareInfo(v[14], function (data) {
                callback && callback({ title: data.title, 'img': data.img });
            });
        }
    };
}

function run(method, data, callback) {
    method in D$MUXR7 && D$MUXR7[method](data, callback);
}

exports.init = function (data, callback) {
    run(v[90], data, callback);
};

exports.login = function (callback) {
    run(v[16], '', callback);
};

exports.pay = function (data, callback) {
    run(v[56], data, callback);
};

exports.openService = function () {
    run(v[91]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(v[92], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime
    };

    run(v[93], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime
    };
    run(v[94], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(v[37], params);
};

exports.msgCheck = function (data, callback) {
    run(v[95], data, callback);
};

exports.downloadClient = function () {
    run(v[96]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(v[97]);
};

exports.is_authorize = function (callback) {
    run(v[98], callback);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(v[99], data, callback);
};

exports.getFriendShareInfo = function (callback) {
    run(v[100], callback);
};
exports.sendUrl = function () {
    run(v[101]);
};
exports.weiduanHelper = function () {
    run(v[102]);
};
exports.inspireVideo = function (data, callback) {
    run(v[103], data, callback);
};

exports.logout = function (data, callback) {
    run(v[104], data, callback);
};