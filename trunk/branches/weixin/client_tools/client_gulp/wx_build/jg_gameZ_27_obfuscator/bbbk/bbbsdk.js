var _ = wx.y$;
let sdk = require(_[0x8d1f]);

//TODO 替换对应参数
import config from './partner_config.js';

window.config = config;
var p$ADEBC = p$AECBD();
var HOST = _[0x8d20];
var p$ADECB = null;
var p$AEBCD = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

// 渠道SDK初始化
var sdkInitOk = false;

function p$AECBD() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(_[0x8d21]);
            var self = this;

            var uuid = wx.getStorageSync(_[0x8d22]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(_[0x8d22], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(_[0x8d23]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(_[0x8d23], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(_[0x8d24], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(_[0x31e], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                p$AEBCD = {
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

        login: function (data, callback) {
            console.log(_[0x8d25]);
            callbacks[_[0x8973]] = typeof callback == _[0x5c] ? callback : null;
            var self = this;

            sdk.initLoginCallback = data => {
                // 初始化登录成功后data返回
                // data: {uid: '', account: '', token: ''}
                //   msg: 'ok',
                //   status: 0
                if (data.status == 0) {
                    self.do_login(data.data);
                    console.log(_[0x8d26] + JSON.stringify(data.data));
                } else {
                    console.warn(_[0x8d27]);
                    callbacks[_[0x8973]] && callbacks[_[0x8973]](1, {
                        errMsg: _[0x8d27]
                    });
                }
            };
            // sdk初始化
            sdk.init();
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[_[0x8d28]] = JSON.stringify(info);
            if (p$AEBCD && typeof p$AEBCD == _[0x6]) {
                for (var key in p$AEBCD) {
                    public_data[key] = p$AEBCD[key];
                }
            }

            wx.request({
                url: _[0x6dca] + HOST + _[0x8d29],
                method: _[0x8958],
                dataType: _[0xe0],
                header: {
                    'content-type': _[0x89ec] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[0x8d2a] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            var ad_flag = 0;
                            sdk.userSource(function (data1) {
                                ad_flag = parseInt(data1.ad_flag);
                            });
                            try {
                                wx.setStorageSync(_[0x8d2b], data.data.sdk_token);
                                wx.setStorageSync(_[0x8d2c], data.data.user_id);
                                wx.setStorageSync(_[0x8d2d], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(_[0x8d2e], data.data.ext);
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
                                ad_flag: ad_flag
                            };
                            callbacks[_[0x8973]] && callbacks[_[0x8973]](0, userData);
                        } else {
                            callbacks[_[0x8973]] && callbacks[_[0x8973]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(_[0x8d2f], function (data) {
                            console.log(_[0x8d30]);
                            self.logStartShare(_[0x8d2f]);

                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(_[0x8d2f]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[_[0x8973]] && callbacks[_[0x8973]](1, {
                            errMsg: _[0x8d31]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[_[0x89cd]] = typeof callback == _[0x5c] ? callback : null;
            var type = data.type || _[0x89cd];
            console.log(_[0x8d32] + type);
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
            var sdk_token = wx.getStorageSync(_[0x8d2b]);
            wx.request({
                url: _[0x6dca] + HOST + _[0x8d33],
                method: _[0x8958],
                dataType: _[0xe0],
                header: {
                    'content-type': _[0x89ec] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: p$ADECB ? p$ADECB.server_id : '',
                    role_id: p$ADECB ? p$ADECB.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(_[0x8d34]);
            var sdk_token = wx.getStorageSync(_[0x8d2b]);
            wx.request({
                url: _[0x6dca] + HOST + _[0x8d35],
                method: _[0x8958],
                dataType: _[0xe0],
                header: {
                    'content-type': _[0x89ec] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(_[0x8d36] + JSON.stringify(res));

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
            console.log(_[0x8d37]);
            var sdk_token = wx.getStorageSync(_[0x8d2b]);
            wx.request({
                url: _[0x6dca] + HOST + _[0x8d38],
                method: _[0x8958],
                dataType: _[0xe0],
                header: {
                    'content-type': _[0x89ec] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: p$ADECB ? p$ADECB.server_id : '',
                    role_id: p$ADECB ? p$ADECB.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(_[0x8d39]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[_[0x89cd]] && callbacks[_[0x89cd]](1, {
                                errMsg: _[0x8d3a] + data.msg
                            });
                        }
                    } else {
                        callbacks[_[0x89cd]] && callbacks[_[0x89cd]](1, {
                            errMsg: _[0x8d3b]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(_[0x8d3c]);
            var sdk_token = wx.getStorageSync(_[0x8d2b]);
            wx.request({
                url: _[0x6dca] + HOST + _[0x8d3d],
                method: _[0x8958],
                dataType: _[0xe0],
                header: {
                    'content-type': _[0x89ec] // 默认值
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
                    console.log(_[0x8d3e] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(_[0x8d3f] + content);

            let ret = {
                data: {}
            };

            sdk.msgSecCheck({ version: 2, scene: 1, content: content }, function (res) {
                if (res.status != 0) {
                    ret.statusCode = 200;
                    ret.data.state = 1;
                } else {
                    ret.statusCode = 200;
                    ret.data.state = 0;
                }
                callback && callback(ret);
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(_[0x8d40] + JSON.stringify(data));

            var self = this;
            callbacks[_[0x89be]] = typeof callback == _[0x5c] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(_[0x8d2b]);
            var session_key = wx.getStorageSync(_[0x8d2e]);
            if (!sdk_token) {
                callbacks[_[0x89be]] && callbacks[_[0x89be]](1, {
                    errMsg: _[0x8d41]
                });
                return;
            }

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
                platform: platform
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[_[0x8d42]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: _[0x6dca] + HOST + _[0x8d43],
                method: _[0x8958],
                dataType: _[0xe0],
                header: {
                    'content-type': _[0x89ec] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[0x8d44] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            console.log(_[0x8d45] + JSON.stringify(data.data.pay_data));

                            if (data.data.ext == '') {

                                // 支付回调
                                sdk.onPayCallback = res => {
                                    console.log(_[0x8d46], res);
                                    if (res.status != 0) {
                                        callbacks[_[0x89be]] && callbacks[_[0x89be]](1, {
                                            errMsg: res.msg
                                        });
                                    }
                                };
                                // 拉起支付
                                sdk.sdkPay(data.data.pay_data);
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[_[0x89be]] && callbacks[_[0x89be]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[_[0x8973]] && callbacks[_[0x8973]](1, {
                            errMsg: _[0x8d31]
                        });
                    }
                }
            });
        },
        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: _[0x8d47] + data.ext2.cp_order_id + _[0x8d48] + data.ext2.amount / 100,
                extraData: {},
                envVersion: _[0x8d49],
                success(res) {
                    // 打开成功
                }
            });
        },
        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(_[0x8d2c]);
            var username = wx.getStorageSync(_[0x8d2d]);

            var postData = {};
            postData[_[0x8d4a]] = uid;
            postData[_[0x8d4b]] = username;
            postData[_[0x2d3e]] = data.roleid;
            postData[_[0x8d4c]] = data.rolelevel;
            postData[_[0x8d4d]] = data.rolename;
            postData[_[0x2feb]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[0x7], postData);

            // 渠道上报
            let roleParams = {
                type: 1, // 1.创角 2.升级 3.角色入服
                roleId: data.roleid, // 角色id
                roleName: data.rolename, // 角色名称
                roleLevel: data.rolelevel, // 等级
                serverId: data.serverid, // 服务器标识
                vipLevel: '0' // vip等级
            };
            sdk.sdkRole(roleParams);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(_[0x8d2c]);
            var username = wx.getStorageSync(_[0x8d2d]);

            var postData = {};
            postData[_[0x8d4a]] = uid;
            postData[_[0x8d4b]] = username;
            postData[_[0x2d3e]] = data.roleid;
            postData[_[0x8d4c]] = data.rolelevel;
            postData[_[0x8d4d]] = data.rolename;
            postData[_[0x2feb]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[0x17ad], postData);

            //进入游戏确认邀请成功
            if (p$AEBCD) {
                this.updateShare(p$AEBCD.invite, p$AEBCD.invite_type, p$AEBCD.is_new, data.roleid, data.serverid, p$AEBCD.scene);
            }
            let roleParams = {
                type: 3, // 1.创角 2.升级 3.角色入服
                roleId: data.roleid, // 角色id
                roleName: data.rolename, // 角色名称
                roleLevel: data.rolelevel, // 等级
                serverId: data.serverid, // 服务器标识
                vipLevel: '0' // vip等级
            };
            sdk.sdkRole(roleParams);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(_[0x8d2c]);
            var username = wx.getStorageSync(_[0x8d2d]);

            var postData = {};
            postData[_[0x8d4a]] = uid;
            postData[_[0x8d4b]] = username;
            postData[_[0x2d3e]] = data.roleid;
            postData[_[0x8d4c]] = data.rolelevel;
            postData[_[0x8d4d]] = data.rolename;
            postData[_[0x2feb]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$ADECB = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[0x8d4e], postData);

            let roleParams = {
                type: 2, // 1.创角 2.升级 3.角色入服
                roleId: data.roleid, // 角色id
                roleName: data.rolename, // 角色名称
                roleLevel: data.rolelevel, // 等级
                serverId: data.serverid, // 服务器标识
                vipLevel: '0' // vip等级
            };
            sdk.sdkRole(roleParams);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = _[0x8d4f].split('');
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
            var uuid = wx.getStorageSync(_[0x8d22]);
            var idfv = wx.getStorageSync(_[0x8d23]);
            var ad_code = wx.getStorageSync(_[0x8d24]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: _[0x8d50],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : _[0x8d51],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == _[0x8905] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(_[0x8d52] + type);
            console.log(public_data);

            wx.request({
                url: _[0x6dca] + HOST + _[0x8d53] + type + _[0x8d54] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        // 微端小助手
        weiduanHelper: function () {
            sdk.sdkTransferApp();
        },
        // 微端小助手(兼容)
        sendUrl: function () {
            sdk.sdkTransferApp();
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        },

        // 游戏loading完成事件上报
        setLoadingCmp: function () {
            // sdk.setLoadingCmp();
        },

        //获取验证码
        sendCode: function (data, callback) {

            console.log(_[0x8d55], data.phone);
        },
        //绑定手机
        bindPhone: function (data, callback) {

            console.log(_[0x8d56], data.phone, data.code);
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(_[0x8d57] + tmplIds);
            //获取模板ID
            callbacks[_[0x89d5]] = typeof callback == _[0x5c] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(_[0x8d58]);
                    console.log(res);
                    callbacks[_[0x89d5]] && callbacks[_[0x89d5]](res);
                },
                fail(res) {
                    console.log(_[0x8d59]);
                    console.log(res);
                    callbacks[_[0x89d5]] && callbacks[_[0x89d5]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in p$ADEBC && p$ADEBC[method](data, callback);
}

exports.init = function (data, callback) {
    run(_[0x369], data, callback);
};

exports.login = function (callback) {
    run(_[0x8973], '', callback);
};

exports.login = function (callback) {
    run(_[0x8973], '', callback);
};

exports.pay = function (data, callback) {
    run(_[0x89be], data, callback);
};

exports.openService = function () {
    run(_[0x644b]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[0x89c8], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(_[0x89ca], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[0x89cc], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(_[0x89cd], data);
};

exports.msgCheck = function (data, callback) {
    run(_[0x336e], data, callback);
};

exports.downloadClient = function () {
    run(_[0x8d5a]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(_[0x8d5b]);
};

exports.weiduanHelper = function () {
    run(_[0x63cf]);
};
exports.sendUrl = function () {
    run(_[0x8d5c]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(_[0x8d5d], data, callback);
};

exports.setLoadingCmp = function () {
    run(_[0x8d5e]);
};

exports.sendCode = function (data, callback) {
    run(_[0x8d5f], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(_[0x306d], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(_[0x89d5], data, callback);
};