var c = wx.$a;
import RYSDK from '../utils/sdk';
//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: c[31114],
    partner_label: c[31115],
    partner_id: c[31116],
    game_ver: c[31117],
    is_auth: false, //授权登录
    partner_gid: 156, //我方提供
    partner_pkid: 2890, //我方提供
    partner_cid: 3693, //我方提供
    partner_aid: 221611, //我方提供
    partner_appid: 287369 //我方提供
};
window.config = config;
var j61EMB = j6EBM1();
var HOST = c[31118];
var j61EBM = null;
var j6EMB1 = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

// 渠道SDK初始化
const rysdk = new RYSDK();

function j6EBM1() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(c[31119]);
            var self = this;

            var uuid = wx.getStorageSync(c[31120]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(c[31120], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(c[31121]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(c[31121], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            wx.showShareMenu();

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(c[31122], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(c[304], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                j6EMB1 = {
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

            //渠道初始化
            let sdk_param = {
                gid: config.partner_gid, //我方提供
                pkid: config.partner_pkid, //我方提供
                cid: config.partner_cid, //我方提供
                aid: config.partner_aid, //我方提供
                appid: config.partner_appid, //我方提供
                appver: game_ver //cp 传入

            };

            rysdk.ryInit(sdk_param).then(res => {
                //成功后才能执行下面的函数
                console.log(c[31123], res);
            }).catch(err => {
                //失败信息
                console.log(c[31124], err);
            });
        },

        login: function (data, callback) {
            console.log(c[31125]);
            callbacks[c[31126]] = typeof callback == c[31028] ? callback : null;
            var self = this;

            rysdk.ryLogin().then(res => {
                //成功后才能执行下面的函数
                partner_user_info = res;
                self.do_login(res.info);
                console.log(c[31127] + JSON.stringify(res));
            }).catch(err => {
                //失败信息
                console.warn(c[31128], err);
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[c[31129]] = JSON.stringify(info);
            if (j6EMB1 && typeof j6EMB1 == c[299]) {
                for (var key in j6EMB1) {
                    public_data[key] = j6EMB1[key];
                }
            }

            wx.request({
                url: c[26578] + HOST + c[31130],
                method: c[31131],
                dataType: c[5635],
                header: {
                    'content-type': c[31132] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(c[31133] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(c[31134], data.data.sdk_token);
                                wx.setStorageSync(c[31135], data.data.user_id);
                                wx.setStorageSync(c[31136], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(c[31137], data.data.ext);
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
                                isBindPhone: info.isBindPhone
                            };
                            callbacks[c[31126]] && callbacks[c[31126]](0, userData);
                        } else {
                            callbacks[c[31126]] && callbacks[c[31126]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(c[31138], function (data) {
                            console.log(c[31139]);
                            self.logStartShare(c[31138]);

                            var share_params = {
                                title: data.title,
                                imageUrl: data.img,
                                query: data.query
                            };
                            rysdk.shareMsg({}).then(res => {
                                console.log(c[31140], res);
                                share_params[c[725]] = res.msg.title;
                                share_params[c[31141]] = res.msg.img_url;
                            }).catch(err => {
                                console.log(c[31142], err);
                            });
                            console.log(c[31143], share_params);

                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(c[31138]);

                                return share_params;
                            });
                        });
                    } else {
                        callbacks[c[31126]] && callbacks[c[31126]](1, {
                            errMsg: c[31144]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[c[31145]] = typeof callback == c[31028] ? callback : null;
            var type = data.type || c[31145];
            console.log(c[31146] + type);
            var self = this;
            this.getShareInfo(type, function (data) {

                //记录开始分享
                self.logStartShare(type);
                rysdk.shareMsg({}).then(res => {
                    console.log(c[31140], res);
                    wx.shareAppMessage({
                        title: res.msg.title,
                        imageUrl: res.msg.img_url,
                        query: data.query
                    });
                }).catch(err => {
                    console.log(c[31142], err);
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(c[31134]);
            wx.request({
                url: c[26578] + HOST + c[31147],
                method: c[31131],
                dataType: c[5635],
                header: {
                    'content-type': c[31132] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: j61EBM ? j61EBM.server_id : '',
                    role_id: j61EBM ? j61EBM.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            // wx.openCustomerServiceConversation();
            rysdk.customerService({}).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(c[31148]);
            var sdk_token = wx.getStorageSync(c[31134]);
            wx.request({
                url: c[26578] + HOST + c[31149],
                method: c[31131],
                dataType: c[5635],
                header: {
                    'content-type': c[31132] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(c[31150] + JSON.stringify(res));

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
            console.log(c[31151]);
            var sdk_token = wx.getStorageSync(c[31134]);
            wx.request({
                url: c[26578] + HOST + c[31152],
                method: c[31131],
                dataType: c[5635],
                header: {
                    'content-type': c[31132] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: j61EBM ? j61EBM.server_id : '',
                    role_id: j61EBM ? j61EBM.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(c[31153]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[c[31145]] && callbacks[c[31145]](1, {
                                errMsg: c[31154] + data.msg
                            });
                        }
                    } else {
                        callbacks[c[31145]] && callbacks[c[31145]](1, {
                            errMsg: c[31155]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(c[31156]);
            var sdk_token = wx.getStorageSync(c[31134]);
            wx.request({
                url: c[26578] + HOST + c[31157],
                method: c[31131],
                dataType: c[5635],
                header: {
                    'content-type': c[31132] // 默认值
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
                    console.log(c[31158] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(c[31159] + content);

            let ret = {
                data: {}
            };
            rysdk.ryCheckWord({ 'version': 2, 'scene': 1, content: content }).then(res => {
                ret.statusCode = 200;
                ret.data.state = 1;
                callback && callback(ret);
            }).catch(err => {
                ret.statusCode = 200;
                ret.data.state = 0;
                callback && callback(ret);
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(c[31160] + JSON.stringify(data));

            var self = this;
            callbacks[c[31161]] = typeof callback == c[31028] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(c[31134]);
            var session_key = wx.getStorageSync(c[31137]);
            if (!sdk_token) {
                callbacks[c[31161]] && callbacks[c[31161]](1, {
                    errMsg: c[31162]
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
            public_data[c[31163]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: c[26578] + HOST + c[31164],
                method: c[31131],
                dataType: c[5635],
                header: {
                    'content-type': c[31132] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(c[31165] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            console.log(c[31166] + JSON.stringify(data.data.pay_data));

                            if (data.data.ext == '') {

                                rysdk.ryPay(data.data.pay_data).then(res => {
                                    console.log(c[31167], res);
                                }).catch(err => {
                                    console.log(c[31168], err);
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[c[31161]] && callbacks[c[31161]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[c[31126]] && callbacks[c[31126]](1, {
                            errMsg: c[31144]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(c[31135]);
            var username = wx.getStorageSync(c[31136]);

            var postData = {};
            postData[c[31169]] = uid;
            postData[c[31170]] = username;
            postData[c[10831]] = data.roleid;
            postData[c[31171]] = data.rolelevel;
            postData[c[31172]] = data.rolename;
            postData[c[11521]] = data.serverid;

            if (data.roleid && data.serverid) {
                j61EBM = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(c[6], postData);

            // 渠道上报
            let role_param = {
                server: data.serverid, //服务器id
                roleid: data.roleid, //角色id
                role: data.rolename //角色名称
            };
            rysdk.ryRole(role_param).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(c[31135]);
            var username = wx.getStorageSync(c[31136]);

            var postData = {};
            postData[c[31169]] = uid;
            postData[c[31170]] = username;
            postData[c[10831]] = data.roleid;
            postData[c[31171]] = data.rolelevel;
            postData[c[31172]] = data.rolename;
            postData[c[11521]] = data.serverid;

            if (data.roleid && data.serverid) {
                j61EBM = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(c[5517], postData);

            //进入游戏确认邀请成功
            if (j6EMB1) {
                this.updateShare(j6EMB1.invite, j6EMB1.invite_type, j6EMB1.is_new, data.roleid, data.serverid, j6EMB1.scene);
            }
            let role_param = {
                server: data.serverid, //服务器id
                roleid: data.roleid, //角色id
                role: data.rolename, //角色名称
                rolelevel: data.rolelevel //角色等级
            };
            rysdk.ryEntry(role_param).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(c[31135]);
            var username = wx.getStorageSync(c[31136]);

            var postData = {};
            postData[c[31169]] = uid;
            postData[c[31170]] = username;
            postData[c[10831]] = data.roleid;
            postData[c[31171]] = data.rolelevel;
            postData[c[31172]] = data.rolename;
            postData[c[11521]] = data.serverid;

            if (data.roleid && data.serverid) {
                j61EBM = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(c[31173], postData);

            let role_param = {
                server: data.serverid, //服务器id
                roleid: data.roleid, //角色id
                role: data.rolename, //角色名称
                rolelevel: data.rolelevel //角色等级
            };
            rysdk.ryLevel(role_param).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = c[31174].split('');
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
            var uuid = wx.getStorageSync(c[31120]);
            var idfv = wx.getStorageSync(c[31121]);
            var ad_code = wx.getStorageSync(c[31122]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: c[31175],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : c[31176],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == c[31177] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(c[31178] + type);
            console.log(public_data);

            wx.request({
                url: c[26578] + HOST + c[31179] + type + c[31180] + encodeURIComponent(JSON.stringify(public_data))
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
        weiduanHelper: function (data, callback) {
            // sdk.toBindAccount();
            rysdk.ryCheckTurnTerminalMsg({});
        },
        // 微端小助手(兼容)
        sendUrl: function () {
            rysdk.ryCheckTurnTerminalMsg({});
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

            console.log(c[31181], data.phone);

            rysdk.rySendMessage({ 'phone': data.phone }).then(res => {
                callback && callback(0, res);
            }).catch(err => {
                callback && callback(1, err);
            });
        },
        //绑定手机
        bindPhone: function (data, callback) {

            console.log(c[31182], data.phone, data.code);

            rysdk.ryBindPhone({ 'phone': data.phone, 'captcha': data.code }).then(res => {
                callback && callback(0, res);
            }).catch(err => {
                callback && callback(1, err);
            });
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(c[31183] + tmplIds);
            //获取模板ID
            callbacks[c[31184]] = typeof callback == c[31028] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(c[31185]);
                    console.log(res);
                    callbacks[c[31184]] && callbacks[c[31184]](res);
                },
                fail(res) {
                    console.log(c[31186]);
                    console.log(res);
                    callbacks[c[31184]] && callbacks[c[31184]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in j61EMB && j61EMB[method](data, callback);
}

exports.init = function (data, callback) {
    run(c[394], data, callback);
};

exports.login = function (callback) {
    run(c[31126], '', callback);
};

exports.login = function (callback) {
    run(c[31126], '', callback);
};

exports.pay = function (data, callback) {
    run(c[31161], data, callback);
};

exports.openService = function () {
    run(c[24426]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(c[31187], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(c[31188], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(c[31189], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(c[31145], data);
};

exports.msgCheck = function (data, callback) {
    run(c[12319], data, callback);
};

exports.downloadClient = function () {
    run(c[31190]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(c[31191]);
};

exports.weiduanHelper = function (data, callback) {
    run(c[24305], data, callback);
};
exports.sendUrl = function () {
    run(c[31192]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(c[31193], data, callback);
};

exports.setLoadingCmp = function () {
    run(c[31194]);
};

exports.sendCode = function (data, callback) {
    run(c[31195], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(c[11651], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(c[31184], data, callback);
};