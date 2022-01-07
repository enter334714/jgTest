var S = wx.$J;
import aa from "../utils/config.js";
import tt from "../utils/ddsdk.js";
//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: S[569383],
    partner_label: S[569384],
    partner_id: S[569385],
    game_ver: S[569386], //腾庚-缥缈仙剑-流云服
    is_auth: false, //授权登录
    partner_game_id: S[569387],
    partenr_app_id: S[569388]
};
window.config = config;
var $jI9A3S = $jIAS39();
var HOST = S[569389];
var $jI9AS3 = null;
var $jIA3S9 = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

function $jIAS39() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(S[569390]);
            var self = this;

            var uuid = wx.getStorageSync(S[569391]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(S[569391], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(S[569392]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(S[569392], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(S[569393], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(S[540284], data);
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                $jIA3S9 = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }
            window.DDSDK.init(this.onSdkInited.bind(this));
            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },
        onSdkInited: function () {
            console.log(S[569394]);
            //DDSDK.logEvent("LoadingComplete",{});
        },

        login: function (data, callback) {
            console.log(S[569395]);
            callbacks[S[568945]] = typeof callback == S[568516] ? callback : null;
            var self = this;
            wx.login({
                success: function (res) {
                    // 发送 res.code 到后台换取 openId, sessionKey, unionId
                    console.log(res.code);
                    DDSDK.getOpenId({
                        code: res.code,
                        gameId: config.partner_game_id,
                        cb: function (res) {
                            console.log(res);
                            partner_user_info = {
                                openid: res.data.openid
                            };
                            DDSDK.logEvent(S[569396], {});
                            if (res.data.unionid) {
                                partner_user_info[S[569397]] = res.data.unionid;
                            }
                            var channel = DDSDK.getChannel();
                            partner_user_info[S[565238]] = channel;
                            self.do_login(partner_user_info);
                        }

                    });
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[S[569398]] = JSON.stringify(info);
            if ($jIA3S9 && typeof $jIA3S9 == S[540279]) {
                for (var key in $jIA3S9) {
                    public_data[key] = $jIA3S9[key];
                }
            }

            wx.request({
                url: S[565450] + HOST + S[569399],
                method: S[568917],
                dataType: S[545847],
                header: {
                    'content-type': S[569038] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(S[569400] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                if (!wx.getStorageSync(S[569401])) {
                                    wx.setStorageSync(S[569402], new Date());
                                }
                                wx.setStorageSync(S[569403], data.data.sdk_token);
                                wx.setStorageSync(S[569401], data.data.user_id);
                                wx.setStorageSync(S[569404], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(S[569405], data.data.ext);
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
                            callbacks[S[568945]] && callbacks[S[568945]](0, userData);
                        } else {
                            callbacks[S[568945]] && callbacks[S[568945]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(S[569406], function (data) {
                            console.log(S[569407]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(S[569406]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[S[568945]] && callbacks[S[568945]](1, {
                            errMsg: S[569408]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[S[569005]] = typeof callback == S[568516] ? callback : null;
            var type = data.type || S[569005];
            console.log(S[569409] + type);
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
            var sdk_token = wx.getStorageSync(S[569403]);
            wx.request({
                url: S[565450] + HOST + S[569410],
                method: S[568917],
                dataType: S[545847],
                header: {
                    'content-type': S[569038] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: $jI9AS3 ? $jI9AS3.server_id : '',
                    role_id: $jI9AS3 ? $jI9AS3.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(S[569411]);
            var sdk_token = wx.getStorageSync(S[569403]);
            wx.request({
                url: S[565450] + HOST + S[569412],
                method: S[568917],
                dataType: S[545847],
                header: {
                    'content-type': S[569038] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(S[569413] + JSON.stringify(res));

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
            console.log(S[569414]);
            var sdk_token = wx.getStorageSync(S[569403]);
            wx.request({
                url: S[565450] + HOST + S[569415],
                method: S[568917],
                dataType: S[545847],
                header: {
                    'content-type': S[569038] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: $jI9AS3 ? $jI9AS3.server_id : '',
                    role_id: $jI9AS3 ? $jI9AS3.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(S[569416]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[S[569005]] && callbacks[S[569005]](1, {
                                errMsg: S[569417] + data.msg
                            });
                        }
                    } else {
                        callbacks[S[569005]] && callbacks[S[569005]](1, {
                            errMsg: S[569418]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(S[569419]);
            var sdk_token = wx.getStorageSync(S[569403]);
            wx.request({
                url: S[565450] + HOST + S[569420],
                method: S[568917],
                dataType: S[545847],
                header: {
                    'content-type': S[569038] // 默认值
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
                    console.log(S[569421] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(S[569422] + content);
            wx.request({
                url: S[565450] + HOST + S[569423] + config.partner_id + '/' + config.game_pkg,
                method: S[568917],
                dataType: S[545847],
                header: {
                    'content-type': S[569038] // 默认值
                },
                data: {
                    content: content,
                    open_id: partner_user_info.openid
                },
                success: function (res) {
                    console.log(S[569424] + JSON.stringify(res));
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(S[569425] + JSON.stringify(data));

            var self = this;
            callbacks[S[568993]] = typeof callback == S[568516] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(S[569403]);
            var session_key = wx.getStorageSync(S[569405]);
            if (!sdk_token) {
                callbacks[S[568993]] && callbacks[S[568993]](1, {
                    errMsg: S[569426]
                });
                return;
            }
            var temp_new = new Date(wx.getStorageSync(S[569402])).toDateString() === new Date().toDateString();
            if (temp_new) {
                var isNewUser = 1;
            } else {
                var isNewUser = 2;
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
                platform: platform,
                openId: partner_user_info.openid,
                isNewUser: isNewUser,
                channel: partner_user_info.channel,
                unionId: partner_user_info.unionid
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[S[569427]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: S[565450] + HOST + S[569428],
                method: S[568917],
                dataType: S[545847],
                header: {
                    'content-type': S[569038] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(S[569429] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            DDSDK.startPay(data.data.pay_data);
                        } else {
                            callbacks[S[568993]] && callbacks[S[568993]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[S[568945]] && callbacks[S[568945]](1, {
                            errMsg: S[569408]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(S[569401]);
            var username = wx.getStorageSync(S[569404]);

            var postData = {};
            postData[S[569430]] = uid;
            postData[S[569431]] = username;
            postData[S[550836]] = data.roleid;
            postData[S[569432]] = data.rolelevel;
            postData[S[569433]] = data.rolename;
            postData[S[551510]] = data.serverid;

            if (data.roleid && data.serverid) {
                $jI9AS3 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(S[540006], postData);
            DDSDK.logEvent(S[569434], {});
            // 渠道上报
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(S[569401]);
            var username = wx.getStorageSync(S[569404]);

            var postData = {};
            postData[S[569430]] = uid;
            postData[S[569431]] = username;
            postData[S[550836]] = data.roleid;
            postData[S[569432]] = data.rolelevel;
            postData[S[569433]] = data.rolename;
            postData[S[551510]] = data.serverid;

            if (data.roleid && data.serverid) {
                $jI9AS3 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(S[545729], postData);

            //进入游戏确认邀请成功
            if ($jIA3S9) {
                this.updateShare($jIA3S9.invite, $jIA3S9.invite_type, $jIA3S9.is_new, data.roleid, data.serverid, $jIA3S9.scene);
            }

            var temp_new = new Date(wx.getStorageSync(S[569402])).toDateString() === new Date().toDateString();
            if (temp_new) {
                var isNewUser = 1;
            } else {
                var isNewUser = 2;
            }
            var os = sysInfo.platform == S[569358] ? S[569435] : S[569436];
            let data1 = {
                openId: partner_user_info.openid,
                isNewUser: isNewUser,
                os: os,
                role_id: data.roleid,
                server_id: data.serverid,
                app_id: config.partenr_app_id,
                unionId: partner_user_info.unionid
            };
            DDSDK.setAccount(data1);

            let userData = {
                account_id: partner_user_info.openid,
                role_id: data.roleid,
                server_id: data.serverid,
                server_name: data.servername,
                openId: partner_user_info.openid,
                os: os,
                model: sysInfo.model,
                unionId: partner_user_info.unionid
            };
            DDSDK.setUserInfo(userData);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(S[569401]);
            var username = wx.getStorageSync(S[569404]);

            var postData = {};
            postData[S[569430]] = uid;
            postData[S[569431]] = username;
            postData[S[550836]] = data.roleid;
            postData[S[569432]] = data.rolelevel;
            postData[S[569433]] = data.rolename;
            postData[S[551510]] = data.serverid;

            if (data.roleid && data.serverid) {
                $jI9AS3 = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                    server_name: data.servername,
                    role_name: data.rolename,
                    role_level: data.rolelevel,
                    role_createtime: data.rolecreatetime
                };
            }

            this.log(S[569437], postData);
            if (data.rolelevel == 20) {
                DDSDK.logEvent(S[569438], { "role_id": data.roleid, "server_id": data.serverid });
            }
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = S[569439].split('');
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
            var uuid = wx.getStorageSync(S[569391]);
            var idfv = wx.getStorageSync(S[569392]);
            var ad_code = wx.getStorageSync(S[569393]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: S[569440],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : S[569441],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == S[569358] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(S[569442] + type);
            console.log(public_data);

            wx.request({
                url: S[565450] + HOST + S[569443] + type + S[569444] + encodeURIComponent(JSON.stringify(public_data))
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
            var data = {
                "phone": "",
                "roleId": $jI9AS3.role_id,
                "serverId": $jI9AS3.sever_id
            };
            DDSDK.getCustomerServiceByFB(data);
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        },

        subscribeMessage: function (tmplIds, callback) {
            console.log(S[569445] + tmplIds);
            //获取模板ID
            callbacks[S[569013]] = typeof callback == S[568516] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(S[569446]);
                    console.log(res);
                    callbacks[S[569013]] && callbacks[S[569013]](res);
                },
                fail(res) {
                    console.log(S[569447]);
                    console.log(res);
                    callbacks[S[569013]] && callbacks[S[569013]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in $jI9A3S && $jI9A3S[method](data, callback);
}

exports.init = function (data, callback) {
    run(S[540366], data, callback);
};

exports.login = function (callback) {
    run(S[568945], '', callback);
};

exports.login = function (callback) {
    run(S[568945], '', callback);
};

exports.pay = function (data, callback) {
    run(S[568993], data, callback);
};

exports.openService = function () {
    run(S[564893]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime
    };
    run(S[569000], data);
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

    run(S[569002], data);
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
    run(S[569004], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(S[569005], data);
};

exports.msgCheck = function (data, callback) {
    run(S[552124], data, callback);
};

exports.downloadClient = function () {
    run(S[569448]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(S[569449]);
};

exports.weiduanHelper = function () {
    run(S[563533]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(S[569450], data, callback);
};
exports.subscribeMessage = function (data, callback) {
    run(S[569013], data, callback);
};