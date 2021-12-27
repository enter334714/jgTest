var S = wx.$J;
import aa from "../utils/config.js";
import tt from "../utils/ddsdk.js";
//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: S[568913],
    partner_label: S[568914],
    partner_id: S[568915],
    game_ver: S[568916], //
    is_auth: false, //授权登录
    partner_game_id: S[568917],
    partenr_app_id: S[568918]
};
window.config = config;
var $jI9A3S = $jIAS39();
var HOST = S[568919];
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
            console.log(S[568920]);
            var self = this;

            var uuid = wx.getStorageSync(S[568921]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(S[568921], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(S[568922]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(S[568922], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(S[568923], info.query.ad_code);
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
            console.log(S[568924]);
        },

        login: function (data, callback) {
            console.log(S[568925]);
            callbacks[S[568478]] = typeof callback == S[568052] ? callback : null;
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
                            if (res.data.unionid) {
                                partner_user_info[S[568926]] = res.data.unionid;
                            }
                            var channel = DDSDK.getChannel();
                            partner_user_info[S[564783]] = channel;
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
            public_data[S[568927]] = JSON.stringify(info);
            if ($jIA3S9 && typeof $jIA3S9 == S[540279]) {
                for (var key in $jIA3S9) {
                    public_data[key] = $jIA3S9[key];
                }
            }

            wx.request({
                url: S[564992] + HOST + S[568928],
                method: S[568450],
                dataType: S[545810],
                header: {
                    'content-type': S[568571] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(S[568929] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                if (!wx.getStorageSync(S[568930])) {
                                    wx.setStorageSync(S[568931], new Date());
                                }
                                wx.setStorageSync(S[568932], data.data.sdk_token);
                                wx.setStorageSync(S[568930], data.data.user_id);
                                wx.setStorageSync(S[568933], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(S[568934], data.data.ext);
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
                            callbacks[S[568478]] && callbacks[S[568478]](0, userData);
                        } else {
                            callbacks[S[568478]] && callbacks[S[568478]](1, {
                                errMsg: data.msg
                            });
                        }

                        self.getShareInfo(S[568935], function (data) {
                            console.log(S[568936]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(S[568935]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[S[568478]] && callbacks[S[568478]](1, {
                            errMsg: S[568937]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[S[568538]] = typeof callback == S[568052] ? callback : null;
            var type = data.type || S[568538];
            console.log(S[568938] + type);
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
            var sdk_token = wx.getStorageSync(S[568932]);
            wx.request({
                url: S[564992] + HOST + S[568939],
                method: S[568450],
                dataType: S[545810],
                header: {
                    'content-type': S[568571] // 默认值
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
            console.log(S[568940]);
            var sdk_token = wx.getStorageSync(S[568932]);
            wx.request({
                url: S[564992] + HOST + S[568941],
                method: S[568450],
                dataType: S[545810],
                header: {
                    'content-type': S[568571] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(S[568942] + JSON.stringify(res));

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
            console.log(S[568943]);
            var sdk_token = wx.getStorageSync(S[568932]);
            wx.request({
                url: S[564992] + HOST + S[568944],
                method: S[568450],
                dataType: S[545810],
                header: {
                    'content-type': S[568571] // 默认值
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
                    console.log(S[568945]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[S[568538]] && callbacks[S[568538]](1, {
                                errMsg: S[568946] + data.msg
                            });
                        }
                    } else {
                        callbacks[S[568538]] && callbacks[S[568538]](1, {
                            errMsg: S[568947]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(S[568948]);
            var sdk_token = wx.getStorageSync(S[568932]);
            wx.request({
                url: S[564992] + HOST + S[568949],
                method: S[568450],
                dataType: S[545810],
                header: {
                    'content-type': S[568571] // 默认值
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
                    console.log(S[568950] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(S[568951] + content);
            wx.request({
                url: S[564992] + HOST + S[568952] + config.partner_id + '/' + config.game_pkg,
                method: S[568450],
                dataType: S[545810],
                header: {
                    'content-type': S[568571] // 默认值
                },
                data: {
                    content: content,
                    open_id: partner_user_info.openid
                },
                success: function (res) {
                    console.log(S[568953] + JSON.stringify(res));
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
            console.log(S[568954] + JSON.stringify(data));

            var self = this;
            callbacks[S[568526]] = typeof callback == S[568052] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(S[568932]);
            var session_key = wx.getStorageSync(S[568934]);
            if (!sdk_token) {
                callbacks[S[568526]] && callbacks[S[568526]](1, {
                    errMsg: S[568955]
                });
                return;
            }
            var temp_new = new Date(wx.getStorageSync(S[568931])).toDateString() === new Date().toDateString();
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
            public_data[S[568956]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: S[564992] + HOST + S[568957],
                method: S[568450],
                dataType: S[545810],
                header: {
                    'content-type': S[568571] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(S[568958] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            DDSDK.startPay(data.data.pay_data);
                        } else {
                            callbacks[S[568526]] && callbacks[S[568526]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[S[568478]] && callbacks[S[568478]](1, {
                            errMsg: S[568937]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(S[568930]);
            var username = wx.getStorageSync(S[568933]);

            var postData = {};
            postData[S[568959]] = uid;
            postData[S[568960]] = username;
            postData[S[550657]] = data.roleid;
            postData[S[568961]] = data.rolelevel;
            postData[S[568962]] = data.rolename;
            postData[S[551329]] = data.serverid;

            if (data.roleid && data.serverid) {
                $jI9AS3 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(S[540006], postData);
            DDSDK.logEvent(S[568963], {});
            // 渠道上报
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(S[568930]);
            var username = wx.getStorageSync(S[568933]);

            var postData = {};
            postData[S[568959]] = uid;
            postData[S[568960]] = username;
            postData[S[550657]] = data.roleid;
            postData[S[568961]] = data.rolelevel;
            postData[S[568962]] = data.rolename;
            postData[S[551329]] = data.serverid;

            if (data.roleid && data.serverid) {
                $jI9AS3 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(S[545692], postData);

            //进入游戏确认邀请成功
            if ($jIA3S9) {
                this.updateShare($jIA3S9.invite, $jIA3S9.invite_type, $jIA3S9.is_new, data.roleid, data.serverid, $jIA3S9.scene);
            }

            var temp_new = new Date(wx.getStorageSync(S[568931])).toDateString() === new Date().toDateString();
            if (temp_new) {
                var isNewUser = 1;
            } else {
                var isNewUser = 2;
            }
            var os = sysInfo.platform == S[568890] ? S[568964] : S[568965];
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
            var uid = wx.getStorageSync(S[568930]);
            var username = wx.getStorageSync(S[568933]);

            var postData = {};
            postData[S[568959]] = uid;
            postData[S[568960]] = username;
            postData[S[550657]] = data.roleid;
            postData[S[568961]] = data.rolelevel;
            postData[S[568962]] = data.rolename;
            postData[S[551329]] = data.serverid;

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

            this.log(S[568966], postData);
            DDSDK.logEvent(S[568967], { "role_id": data.roleid, "server_id": data.serverid });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = S[568968].split('');
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
            var uuid = wx.getStorageSync(S[568921]);
            var idfv = wx.getStorageSync(S[568922]);
            var ad_code = wx.getStorageSync(S[568923]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: S[568969],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : S[568970],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == S[568890] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(S[568971] + type);
            console.log(public_data);

            wx.request({
                url: S[564992] + HOST + S[568972] + type + S[568973] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(S[568974] + tmplIds);
            //获取模板ID
            callbacks[S[568546]] = typeof callback == S[568052] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(S[568975]);
                    console.log(res);
                    callbacks[S[568546]] && callbacks[S[568546]](res);
                },
                fail(res) {
                    console.log(S[568976]);
                    console.log(res);
                    callbacks[S[568546]] && callbacks[S[568546]](res);
                }
            });
        }

    };
}

function run(method, data, callback) {
    method in $jI9A3S && $jI9A3S[method](data, callback);
}

exports.init = function (data, callback) {
    run(S[540364], data, callback);
};

exports.login = function (callback) {
    run(S[568478], '', callback);
};

exports.login = function (callback) {
    run(S[568478], '', callback);
};

exports.pay = function (data, callback) {
    run(S[568526], data, callback);
};

exports.openService = function () {
    run(S[564454]);
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
    run(S[568533], data);
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

    run(S[568535], data);
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
    run(S[568537], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(S[568538], data);
};

exports.msgCheck = function (data, callback) {
    run(S[551909], data, callback);
};

exports.downloadClient = function () {
    run(S[568977]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(S[568978]);
};

exports.weiduanHelper = function () {
    run(S[563278]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(S[568979], data, callback);
};
exports.subscribeMessage = function (data, callback) {
    run(S[568546], data, callback);
};