var F = wx.$D;
import sdk from '../utils/sq_xgamesdk_1.0';

var config = {
    game_id: F[561896],
    game_pkg: F[561897],
    partner_label: F[561898],
    partner_id: F[561899],
    game_ver: F[561900], //诗淇-主宰领域
    is_auth: false, //授权登录
    partner_game_id: 10227,
    partner_package_name: F[561901],
    partner_package_version: 1
};
window.config = config;
var D1W24IX = D1W4XI2();
var HOST = F[561902];
var D1W24XI = null;
var D1W4IX2 = null;
var partner_user_data = {};
var user_invite_by_activity = null;

function D1W4XI2() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(F[561903]);
            var self = this;

            var uuid = wx.getStorageSync(F[561904]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(F[561904], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(F[561905]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(F[561905], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(F[561906], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(F[561907], data);

            //渠道初始化
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';
            var cp_activity_id = info.query && info.query.cp_activity_id ? info.query.cp_activity_id : '';

            // 普通分享不存在活动ID的话  再看下定向分享是否存在
            if (!cp_activity_id) {
                cp_activity_id = info.query && info.query.shareMessageToFriendScene ? info.query.shareMessageToFriendScene : '';
                invite_type = cp_activity_id ? F[561908] : '';
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
                D1W4IX2 = {
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
                sdk.D12I({ game_id: config.partner_game_id, package_name: config.partner_package_name, package_version: config.partner_package_version, game_version: game_ver }, function (state, data, msg) {
                    console.log(state, data, msg);
                });
            }
        },

        login: function (data, callback) {
            var self = this;
            console.log(F[561909]);
            callbacks[F[560742]] = typeof callback == F[561081] ? callback : null;
            sdk.sdkLogin(function (state, data, msg) {
                console.log(F[561910]);
                console.log(state, data, msg);
                //把data.code和data.uid传给后端验证
                self.do_login(data);
            });
        },

        do_login: function (user_info) {
            var self = this;

            var login_data = self.getPublicData();
            login_data[F[561911]] = JSON.stringify(user_info);

            if (D1W4IX2 && typeof D1W4IX2 == F[560979]) {
                for (var key in D1W4IX2) {
                    login_data[key] = D1W4IX2[key];
                }
            }

            //发起网络请求
            wx.request({
                url: F[561912] + HOST + F[561913],
                method: F[560708],
                dataType: F[561328],
                header: {
                    'content-type': F[560894] // 默认值
                },
                data: login_data,
                success: function (res) {
                    console.log(F[561914], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.openid = data.data.ext;
                            try {
                                wx.setStorageSync(F[561915], data.data.sdk_token);
                                wx.setStorageSync(F[561916], data.data.user_id);
                                wx.setStorageSync(F[561917], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(F[561918], data.data.ext);
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
                            callbacks[F[560742]] && callbacks[F[560742]](0, userData);
                        } else {
                            callbacks[F[560742]] && callbacks[F[560742]](1, { errMsg: data.msg });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(F[561919], function (data) {
                            console.log(F[561920]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(F[561919]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[F[560742]] && callbacks[F[560742]](1, {
                            errMsg: F[561921]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[F[560850]] = typeof callback == F[561081] ? callback : null;
            var type = data.type || F[560850];
            var cp_activity_id = data.cp_activity_id || '';

            console.log(F[561922] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                if (cp_activity_id != '' && data.query != '') {
                    data.query = data.query + F[561923] + cp_activity_id;
                }

                //记录开始分享
                self.logStartShare(type);
                self.logSheyeShare();
                wx.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query
                });
            });
        },

        logSheyeShare: function () {
            var params = {
                openid: partner_user_data.openid,
                server_id: D1W24XI.server_id
            };
            wx.request({
                url: F[561912] + HOST + F[561924] + config.partner_id + '/' + config.game_pkg,
                method: F[560708],
                dataType: F[561328],
                header: {
                    'content-type': F[560894] // 默认值
                },
                data: params,
                success: function (res) {
                    console.log(F[561925] + JSON.stringify(params));
                    console.log(F[561926] + JSON.stringify(res));
                }
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(F[561915]);
            wx.request({
                url: F[561912] + HOST + F[561927],
                method: F[560708],
                dataType: F[561328],
                header: {
                    'content-type': F[560894] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: D1W24XI ? D1W24XI.server_id : '',
                    role_id: D1W24XI ? D1W24XI.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(F[561928]);
            var sdk_token = wx.getStorageSync(F[561915]);
            wx.request({
                url: F[561912] + HOST + F[561929],
                method: F[560708],
                dataType: F[561328],
                header: {
                    'content-type': F[560894] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(F[561930]);
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
            console.log(F[561931]);
            var sdk_token = wx.getStorageSync(F[561915]);
            wx.request({
                url: F[561912] + HOST + F[561932],
                method: F[560708],
                dataType: F[561328],
                header: {
                    'content-type': F[560894] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: D1W24XI ? D1W24XI.server_id : '',
                    role_id: D1W24XI ? D1W24XI.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(F[561933]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[F[560850]] && callbacks[F[560850]](1, {
                                errMsg: F[561934] + data.msg
                            });
                        }
                    } else {
                        callbacks[F[560850]] && callbacks[F[560850]](1, {
                            errMsg: F[561935]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(F[561936]);
            var sdk_token = wx.getStorageSync(F[561915]);
            wx.request({
                url: F[561912] + HOST + F[561937],
                method: F[560708],
                dataType: F[561328],
                header: {
                    'content-type': F[560894] // 默认值
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
                    console.log(F[561938]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(F[561939]);
            var res = {};
            sdk.sdkMsgCheck(content, function (state, data, msg) {
                console.log(state, data, msg);
                res.data = {};
                if (data.is_sec == 0) {
                    res.statusCode = 200;
                    res.data.state = 1;
                } else {
                    res.statusCode = 0;
                    res.data.state = 0;
                }
                callback && callback(res);
            });
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(F[561940], data);
            var self = this;
            callbacks[F[560826]] = typeof callback == F[561081] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(F[561915]);
            var session_key = wx.getStorageSync(F[561918]);
            if (!sdk_token && !session_key) {
                callbacks[F[560826]] && callbacks[F[560826]](1, { errMsg: F[561941] });
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
            public_data[F[561942]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: F[561912] + HOST + F[561943],
                method: F[560708],
                dataType: F[561328],
                header: {
                    'content-type': F[560894] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(F[561944], res);

                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            console.log(F[561945] + JSON.stringify(data.data.pay_data));

                            sdk.sdkPay(data.data.pay_data, function (state, data, msg) {
                                console.log(F[561946]);
                                console.log(state, data, msg);
                            });
                        } else {
                            callbacks[F[560826]] && callbacks[F[560826]](1, { errMsg: data.errMsg });
                        }
                    } else {
                        callbacks[F[560742]] && callbacks[F[560742]](1, { errMsg: F[561921] });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(F[561916]);
            var username = wx.getStorageSync(F[561917]);

            var role_info = {};
            role_info[F[561947]] = uid;
            role_info[F[561948]] = username;
            role_info[F[561949]] = data.roleid;
            role_info[F[561950]] = data.rolelevel;
            role_info[F[561951]] = data.rolename;
            role_info[F[560023]] = data.serverid;

            if (data.roleid && data.serverid) {
                D1W24XI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(F[560167], role_info);

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
                    url: F[561912] + HOST + F[561952],
                    method: F[560708],
                    dataType: F[561328],
                    header: {
                        'content-type': F[560894] // 默认值
                    },
                    data: roleInfo,
                    success: function (res) {
                        console.log(F[561953] + JSON.stringify(res));
                    }
                });
            }

            var time = Date.parse(new Date()).toString();
            time = time.substr(0, 10);
            sdk.sdkRole({ role_id: data.roleid, role_level: 0, role_name: data.rolename, server_id: data.serverid, server_name: data.servername, update_time: time });
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(F[561954] + tmplIds);
            //获取模板ID
            callbacks[F[560863]] = typeof callback == F[561081] ? callback : null;
            let data = {
                template: tmplIds[0], // 模版ID 必填
                role_id: D1W24XI ? D1W24XI.role_id : '',
                tpl_type: 2 // 当前订阅活动分类：1离线收益提醒;2活动提醒
            };
            Sygame.syGetSubscribe(data).then(res => {
                if (res.status == 1001) {
                    res.errMsg = F[560865];
                    res[tmplIds[0]] = res.type;
                    callbacks[F[560863]] && callbacks[F[560863]](res);
                } else {
                    callbacks[F[560863]] && callbacks[F[560863]](res);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(F[561916]);
            var username = wx.getStorageSync(F[561917]);

            var role_info = {};
            role_info[F[561947]] = uid;
            role_info[F[561948]] = username;
            role_info[F[561949]] = data.roleid;
            role_info[F[561950]] = data.rolelevel;
            role_info[F[561951]] = data.rolename;
            role_info[F[560023]] = data.serverid;

            if (data.roleid && data.serverid) {
                D1W24XI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(F[561955], role_info);

            //进入游戏确认邀请成功
            if (D1W4IX2) {
                this.updateShare(D1W4IX2.invite, D1W4IX2.invite_type, D1W4IX2.is_new, data.roleid, data.serverid, D1W4IX2.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(F[561916]);
            var username = wx.getStorageSync(F[561917]);

            var role_info = {};
            role_info[F[561947]] = uid;
            role_info[F[561948]] = username;
            role_info[F[561949]] = data.roleid;
            role_info[F[561950]] = data.rolelevel;
            role_info[F[561951]] = data.rolename;
            role_info[F[560023]] = data.serverid;

            if (data.roleid && data.serverid) {
                D1W24XI = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(F[561956], role_info);
            var time = Date.parse(new Date()).toString();
            time = time.substr(0, 10);
            sdk.sdkRole({ role_id: data.roleid, role_level: data.rolelevel, role_name: data.rolename, server_id: data.serverid, server_name: data.servername, update_time: time });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = F[561957].split('');
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
            var uuid = wx.getStorageSync(F[561904]);
            var idfv = wx.getStorageSync(F[561905]);
            var ad_code = wx.getStorageSync(F[561906]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                is_from_min: 1,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: F[561958],
                net_type: system.wifiSignal == 0 ? '4G' : F[561959],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == F[560122] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(F[561960] + type);
            console.log(public_data);

            wx.request({
                url: F[561912] + HOST + F[561961] + type + F[561962] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback && callback(result);
        },

        getFriendShareInfo: function (callback) {
            this.getShareInfo(F[561908], function (data) {
                callback && callback({ title: data.title, 'img': data.img });
            });
        }
    };
}

function run(method, data, callback) {
    method in D1W24IX && D1W24IX[method](data, callback);
}

exports.init = function (data, callback) {
    run(F[560525], data, callback);
};

exports.login = function (callback) {
    run(F[560742], '', callback);
};

exports.pay = function (data, callback) {
    run(F[560826], data, callback);
};
exports.subscribeMessage = function (data, callback) {
    run(F[560863], data, callback);
};

exports.openService = function () {
    run(F[560851]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(F[560841], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var rolepower = extra && extra.rolepower ? extra.rolepower : 0;
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: rolepower
    };

    run(F[560844], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var rolepower = extra && extra.rolepower ? extra.rolepower : 0;
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: rolepower
    };
    run(F[560847], data);
};

exports.share = function (type, data) {
    var cp_activity_id = data && data.activity_id ? data.activity_id : '';

    var params = {
        type: type,
        cp_activity_id: cp_activity_id
    };

    run(F[560850], params);
};

exports.msgCheck = function (data, callback) {
    run(F[560685], data, callback);
};

exports.shareConfig = function (callback) {
    run(F[561963], callback);
};

exports.clickBoxGame = function (data) {
    run(F[561964], data);
};

exports.downloadClient = function () {
    run(F[561965]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(F[561966]);
};