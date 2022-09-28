var _ = wx.y$;
import "../utils/PjMiniGameSdk_wx";
//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: _[0x79cc], //泡椒-新大话梦缘_Z_26
    partner_label: _[0x79cd],
    partner_id: _[0x79ce],
    game_ver: '57.0.7',
    is_auth: false, //授权登录
    partner_config: {
        appId: _[0x79d0],
        channel: _[0x79d1],
        appVersion: _[0x79d2],
        platformType: 'wx'
    }
};
window.config = config;
var p$LUKNB = p$LKBNU();
var HOST = _[0x79d3];
var p$LUKBN = null;
var p$LKNBU = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

var sdk = window.pjsdk;

function p$LKBNU() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(_[0x79d4]);
            var self = this;

            var uuid = wx.getStorageSync(_[0x79d5]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(_[0x79d5], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(_[0x79d6]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(_[0x79d6], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(_[0x79d7], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(_[0x11e], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                p$LKNBU = {
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
            console.log(_[0x79d8]);
            callbacks[_[0x79d9]] = typeof callback == _[0x7851] ? callback : null;
            var self = this;

            //渠道初始化
            sdk.initSdk(config.partner_config.appId, config.partner_config.channel, config.partner_config.appVersion, config.partner_config.platformType);

            //登录
            sdk.login(function (data) {
                if (data.code == 1) {
                    var uid = data.data.userInfo.uid; //泡椒用户id
                    var token = data.data.userInfo.token; //泡椒用户token
                    console.log(_[0x79da] + uid);
                    console.log(_[0x79db] + token);

                    self.do_login({ uid: uid, token: token });
                    console.log(_[0x79dc] + JSON.stringify(data.data));
                } else {
                    console.log(_[0x79dd], data);
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[_[0x79de]] = JSON.stringify(info);
            if (p$LKNBU && typeof p$LKNBU == _[0x119]) {
                for (var key in p$LKNBU) {
                    public_data[key] = p$LKNBU[key];
                }
            }

            wx.request({
                url: _[0x68ec] + HOST + _[0x79df],
                method: _[0x79e0],
                dataType: _[0x1809],
                header: {
                    'content-type': _[0x79e1] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[0x79e2] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(_[0x79e3], data.data.sdk_token);
                                wx.setStorageSync(_[0x79e4], data.data.user_id);
                                wx.setStorageSync(_[0x79e5], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(_[0x79e6], data.data.ext);
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
                            //初始化悬浮球；传入stage对象
                            sdk.initFloat(Laya.stage);

                            callbacks[_[0x79d9]] && callbacks[_[0x79d9]](0, userData);
                        } else {
                            callbacks[_[0x79d9]] && callbacks[_[0x79d9]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(_[0x79e7], function (data) {
                            console.log(_[0x79e8]);
                            self.logStartShare(_[0x79e7]);

                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(_[0x79e7]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[_[0x79d9]] && callbacks[_[0x79d9]](1, {
                            errMsg: _[0x79e9]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[_[0x79ea]] = typeof callback == _[0x7851] ? callback : null;
            var type = data.type || _[0x79ea];
            console.log(_[0x79eb] + type);
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
            var sdk_token = wx.getStorageSync(_[0x79e3]);
            wx.request({
                url: _[0x68ec] + HOST + _[0x79ec],
                method: _[0x79e0],
                dataType: _[0x1809],
                header: {
                    'content-type': _[0x79e1] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: p$LUKBN ? p$LUKBN.server_id : '',
                    role_id: p$LUKBN ? p$LUKBN.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(_[0x79ed]);
            var sdk_token = wx.getStorageSync(_[0x79e3]);
            wx.request({
                url: _[0x68ec] + HOST + _[0x79ee],
                method: _[0x79e0],
                dataType: _[0x1809],
                header: {
                    'content-type': _[0x79e1] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(_[0x79ef] + JSON.stringify(res));

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
            console.log(_[0x79f0]);
            var sdk_token = wx.getStorageSync(_[0x79e3]);
            wx.request({
                url: _[0x68ec] + HOST + _[0x79f1],
                method: _[0x79e0],
                dataType: _[0x1809],
                header: {
                    'content-type': _[0x79e1] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: p$LUKBN ? p$LUKBN.server_id : '',
                    role_id: p$LUKBN ? p$LUKBN.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(_[0x79f2]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[_[0x79ea]] && callbacks[_[0x79ea]](1, {
                                errMsg: _[0x79f3] + data.msg
                            });
                        }
                    } else {
                        callbacks[_[0x79ea]] && callbacks[_[0x79ea]](1, {
                            errMsg: _[0x79f4]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(_[0x79f5]);
            var sdk_token = wx.getStorageSync(_[0x79e3]);
            wx.request({
                url: _[0x68ec] + HOST + _[0x79f6],
                method: _[0x79e0],
                dataType: _[0x1809],
                header: {
                    'content-type': _[0x79e1] // 默认值
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
                    console.log(_[0x79f7] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(_[0x79f8] + content);

            let ret = {
                data: {}
            };

            sdk.msgSecCheck(content, function (data) {
                if (data.code == 1) {
                    console.log(_[0x79f9] + data.msg);
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
            console.log(_[0x79fa] + JSON.stringify(data));

            var self = this;
            callbacks[_[0x79fb]] = typeof callback == _[0x7851] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(_[0x79e3]);
            var session_key = wx.getStorageSync(_[0x79e6]);
            if (!sdk_token) {
                callbacks[_[0x79fb]] && callbacks[_[0x79fb]](1, {
                    errMsg: _[0x79fc]
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
            public_data[_[0x79fd]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: _[0x68ec] + HOST + _[0x79fe],
                method: _[0x79e0],
                dataType: _[0x1809],
                header: {
                    'content-type': _[0x79e1] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(_[0x79ff] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            if (data.data.ext == '') {
                                sdk.pay(data.data.pay_data);
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[_[0x79fb]] && callbacks[_[0x79fb]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[_[0x79d9]] && callbacks[_[0x79d9]](1, {
                            errMsg: _[0x79e9]
                        });
                    }
                }
            });
        },
        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: _[0x7a00] + data.ext2.cp_order_id + _[0x7a01] + data.ext2.amount / 100,
                extraData: {},
                envVersion: _[0x7a02],
                success(res) {
                    // 打开成功
                }
            });
        },
        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(_[0x79e4]);
            var username = wx.getStorageSync(_[0x79e5]);

            var postData = {};
            postData[_[0x7a03]] = uid;
            postData[_[0x7a04]] = username;
            postData[_[0x2c47]] = data.roleid;
            postData[_[0x7a05]] = data.rolelevel;
            postData[_[0x7a06]] = data.rolename;
            postData[_[0x2eed]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$LUKBN = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[0x6], postData);

            // 渠道上报
            var roleinfo = {
                roleid: data.roleid, //角色ID
                roleName: data.rolename, //角色
                roleLever: data.rolelevel, //角色等级
                roleMoney: '0', //角色游戏币
                serverid: data.serverid, //服务器ID
                servername: data.servername, //服务器名称
                roleType: '1' //上报类型；1：创角；2：进入游戏后；3：角色升级
            };

            sdk.reportRoleinfo(roleinfo);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(_[0x79e4]);
            var username = wx.getStorageSync(_[0x79e5]);

            var postData = {};
            postData[_[0x7a03]] = uid;
            postData[_[0x7a04]] = username;
            postData[_[0x2c47]] = data.roleid;
            postData[_[0x7a05]] = data.rolelevel;
            postData[_[0x7a06]] = data.rolename;
            postData[_[0x2eed]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$LUKBN = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[0x1793], postData);

            //进入游戏确认邀请成功
            if (p$LKNBU) {
                this.updateShare(p$LKNBU.invite, p$LKNBU.invite_type, p$LKNBU.is_new, data.roleid, data.serverid, p$LKNBU.scene);
            }
            // 渠道上报
            var roleinfo = {
                roleid: data.roleid, //角色ID
                roleName: data.rolename, //角色
                roleLever: data.rolelevel, //角色等级
                roleMoney: '0', //角色游戏币
                serverid: data.serverid, //服务器ID
                servername: data.servername, //服务器名称
                roleType: '2' //上报类型；1：创角；2：进入游戏后；3：角色升级
            };

            sdk.reportRoleinfo(roleinfo);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(_[0x79e4]);
            var username = wx.getStorageSync(_[0x79e5]);

            var postData = {};
            postData[_[0x7a03]] = uid;
            postData[_[0x7a04]] = username;
            postData[_[0x2c47]] = data.roleid;
            postData[_[0x7a05]] = data.rolelevel;
            postData[_[0x7a06]] = data.rolename;
            postData[_[0x2eed]] = data.serverid;

            if (data.roleid && data.serverid) {
                p$LUKBN = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(_[0x7a07], postData);

            // 渠道上报
            var roleinfo = {
                roleid: data.roleid, //角色ID
                roleName: data.rolename, //角色
                roleLever: data.rolelevel, //角色等级
                roleMoney: '0', //角色游戏币
                serverid: data.serverid, //服务器ID
                servername: data.servername, //服务器名称
                roleType: '3' //上报类型；1：创角；2：进入游戏后；3：角色升级
            };

            sdk.reportRoleinfo(roleinfo);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = _[0x7a08].split('');
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
            var uuid = wx.getStorageSync(_[0x79d5]);
            var idfv = wx.getStorageSync(_[0x79d6]);
            var ad_code = wx.getStorageSync(_[0x79d7]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: _[0x7a09],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : _[0x7a0a],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == _[0x7a0b] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(_[0x7a0c] + type);
            console.log(public_data);

            wx.request({
                url: _[0x68ec] + HOST + _[0x7a0d] + type + _[0x7a0e] + encodeURIComponent(JSON.stringify(public_data))
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
            sdk.openZd();
        },
        // 微端小助手(兼容)
        sendUrl: function () {
            sdk.openZd();
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        },

        // 游戏loading完成事件上报
        setLoadingCmp: function () {
            sdk.setLoadingCmp();
        },

        //获取验证码
        sendCode: function (data, callback) {

            console.log(_[0x7a0f], data.phone);
            sdk.lwSendVCode({
                phone: data.phone,
                success: function (res) {

                    if (res.code == 1) {
                        callback && callback(0, res);
                    } else {
                        callback && callback(1, res);
                    }
                },
                fail: function (res) {
                    callback && callback(1, res);
                }
            });
        },
        //绑定手机
        bindPhone: function (data, callback) {

            console.log(_[0x7a10], data.phone, data.code);
            sdk.toBindPhone({
                phone: data.phone,
                code: data.code,
                success: function (res) {

                    if (res.code == 1) {
                        callback && callback(0, res);
                    } else {
                        callback && callback(1, res);
                    }
                },
                fail: function (res) {
                    callback && callback(1, res);
                }
            });
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(_[0x7a11] + tmplIds);
            //获取模板ID
            callbacks[_[0x7a12]] = typeof callback == _[0x7851] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(_[0x7a13]);
                    console.log(res);
                    callbacks[_[0x7a12]] && callbacks[_[0x7a12]](res);
                },
                fail(res) {
                    console.log(_[0x7a14]);
                    console.log(res);
                    callbacks[_[0x7a12]] && callbacks[_[0x7a12]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in p$LUKNB && p$LUKNB[method](data, callback);
}

exports.init = function (data, callback) {
    run(_[0x16f], data, callback);
};

exports.login = function (callback) {
    run(_[0x79d9], '', callback);
};

exports.login = function (callback) {
    run(_[0x79d9], '', callback);
};

exports.pay = function (data, callback) {
    run(_[0x79fb], data, callback);
};

exports.openService = function () {
    run(_[0x609d]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[0x7a15], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(_[0x7a16], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(_[0x7a17], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(_[0x79ea], data);
};

exports.msgCheck = function (data, callback) {
    run(_[0x31f8], data, callback);
};

exports.downloadClient = function () {
    run(_[0x7a18]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(_[0x7a19]);
};

exports.weiduanHelper = function () {
    run(_[0x602f]);
};
exports.sendUrl = function () {
    run(_[0x7a1a]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(_[0x7a1b], data, callback);
};

exports.setLoadingCmp = function () {
    run(_[0x7a1c]);
};

exports.sendCode = function (data, callback) {
    run(_[0x7a1d], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(_[0x2f6f], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(_[0x7a12], data, callback);
};