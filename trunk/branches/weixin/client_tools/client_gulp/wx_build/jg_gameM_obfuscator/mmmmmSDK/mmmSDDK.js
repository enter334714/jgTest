var Y = wx.$M;
import sdk from './mmmmHELP.js';

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: Y[209068], //光奈马甲包-天师服-梦幻大路
    partner_label: Y[209069],
    partner_id: Y[209070],
    game_ver: Y[209071], //M包为12.x.x，每次上传版本修改，先设置，上传审核版本的时候保持一致
    is_auth: false, //授权登录
    from: null, //来源
    tmpId: { 1: Y[209072], 2: Y[209073], 3: Y[209074] // 订阅的类型 和 模板id
    } };
window.config = config;

var $m51240 = $m52041();
var HOST = Y[209075];
var $m51204 = null;
var $m52401 = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function $m52041() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(Y[208976]);
            var self = this;

            var uuid = wx.getStorageSync(Y[208977]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(Y[208977], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(Y[208978]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(Y[208978], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(Y[208980], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(Y[181064], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                $m52401 = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }
            sdk.init({ game_ver: game_ver }, function (data) {
                console.log(Y[209076], JSON.stringify(data));
            });
            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },

        login: function (data, callback) {
            console.log(Y[208982]);
            callbacks[Y[180660]] = typeof callback == Y[208983] ? callback : null;
            var self = this;
            sdk.login(function (result, data) {
                if (result == 0) {
                    self.do_login(data);
                    console.log(Y[209077] + JSON.stringify(data));
                } else {
                    console.warn(Y[209078]);
                    callbacks[Y[180660]] && callbacks[Y[180660]](1, { errMsg: Y[209079] });
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[Y[209080]] = JSON.stringify(info);
            if ($m52401 && typeof $m52401 == Y[181059]) {
                for (var key in $m52401) {
                    public_data[key] = $m52401[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: Y[205970] + HOST + Y[208998],
                method: Y[180628],
                dataType: Y[186509],
                header: {
                    'content-type': Y[180764] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Y[208999] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(Y[209081], data.data.sdk_token);
                                wx.setStorageSync(Y[209082], data.data.user_id);
                                wx.setStorageSync(Y[209083], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(Y[209084], data.data.ext);
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
                            callbacks[Y[180660]] && callbacks[Y[180660]](0, userData);
                        } else {
                            callbacks[Y[180660]] && callbacks[Y[180660]](1, { type: Y[209085], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        self.getShareInfo(Y[209086], function (data) {
                            console.log(Y[209087]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(Y[209086]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[Y[180660]] && callbacks[Y[180660]](1, { type: Y[209085], errMsg: Y[209088], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(Y[209089]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[Y[180660]] && callbacks[Y[180660]](1, { type: Y[209090], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(Y[209091]);

                    callbacks[Y[180660]] && callbacks[Y[180660]](1, { type: Y[209092], errMsg: Y[209093], time: Date.now() - lastTime });
                    callbacks[Y[180660]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[Y[180727]] = typeof callback == Y[208983] ? callback : null;
            var type = data.type || Y[180727];
            console.log(Y[209094] + type);
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
            var sdk_token = wx.getStorageSync(Y[209081]);
            wx.request({
                url: Y[205970] + HOST + Y[209095],
                method: Y[180628],
                dataType: Y[186509],
                header: {
                    'content-type': Y[180764] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: $m51204 ? $m51204.server_id : '',
                    role_id: $m51204 ? $m51204.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(Y[209010]);
            callbacks[Y[187750]] = typeof callback == Y[208983] ? callback : null;
            var sdk_token = wx.getStorageSync(Y[209081]);
            wx.request({
                url: Y[205970] + HOST + Y[209011],
                method: Y[180628],
                dataType: Y[186509],
                header: {
                    'content-type': Y[180764] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(Y[209096]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[Y[187750]] && callbacks[Y[187750]](data.data);
                        } else {
                            callbacks[Y[187750]] && callbacks[Y[187750]]({ develop: 0 });
                        }
                    } else {
                        callbacks[Y[187750]] && callbacks[Y[187750]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(Y[209097]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[Y[187750]] && callbacks[Y[187750]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(Y[209098]);
                    callbacks[Y[187750]] && callbacks[Y[187750]]({ develop: 0 });
                    callbacks[Y[187750]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(Y[209099]);
            var sdk_token = wx.getStorageSync(Y[209081]);
            wx.request({
                url: Y[205970] + HOST + Y[209100],
                method: Y[180628],
                dataType: Y[186509],
                header: {
                    'content-type': Y[180764] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: $m51204 ? $m51204.server_id : '',
                    role_id: $m51204 ? $m51204.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(Y[209101]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[Y[180727]] && callbacks[Y[180727]](1, {
                                errMsg: Y[209102] + data.msg
                            });
                        }
                    } else {
                        callbacks[Y[180727]] && callbacks[Y[180727]](1, {
                            errMsg: Y[209103]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(Y[209104]);
            var sdk_token = wx.getStorageSync(Y[209081]);
            wx.request({
                url: Y[205970] + HOST + Y[209105],
                method: Y[180628],
                dataType: Y[186509],
                header: {
                    'content-type': Y[180764] // 默认值
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
                    console.log(Y[209106] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(Y[209107] + content);

            sdk.checkMsgV2(content, function (res) {
                console.log(Y[209108] + JSON.stringify(res));
                let ret = {
                    data: {}
                };

                if (res == 0) {
                    ret.statusCode = 200;
                    ret.data.state = 1;
                } else {
                    ret.statusCode = 0;
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
            console.log(Y[209014] + JSON.stringify(data));

            var self = this;
            callbacks[Y[180714]] = typeof callback == Y[208983] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(Y[209081]);
            var session_key = wx.getStorageSync(Y[209084]);
            if (!sdk_token) {
                callbacks[Y[180714]] && callbacks[Y[180714]](1, {
                    errMsg: Y[209015]
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
            public_data[Y[209016]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: Y[205970] + HOST + Y[209017],
                method: Y[180628],
                dataType: Y[186509],
                header: {
                    'content-type': Y[180764] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Y[209018] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            sdk.pay(data.data.pay_data, function (res1, data) {
                                console.log(Y[209109] + JSON.stringify(data));
                            });
                        } else {
                            callbacks[Y[180714]] && callbacks[Y[180714]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[Y[180660]] && callbacks[Y[180660]](1, {
                            errMsg: Y[209088]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(Y[209082]);
            var username = wx.getStorageSync(Y[209083]);

            var postData = {};
            postData[Y[209041]] = uid;
            postData[Y[209042]] = username;
            postData[Y[191477]] = data.roleid;
            postData[Y[209043]] = data.rolelevel;
            postData[Y[209044]] = data.rolename;
            postData[Y[180024]] = data.serverid;

            if (data.roleid && data.serverid) {
                $m51204 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(Y[180155], postData);
            // 渠道上报
            sdk.logCreateRole(data.serverid, data.servername, data.roleid, data.rolename, data.rolelevel);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(Y[209082]);
            var username = wx.getStorageSync(Y[209083]);

            var postData = {};
            postData[Y[209041]] = uid;
            postData[Y[209042]] = username;
            postData[Y[191477]] = data.roleid;
            postData[Y[209043]] = data.rolelevel;
            postData[Y[209044]] = data.rolename;
            postData[Y[180024]] = data.serverid;

            if (data.roleid && data.serverid) {
                $m51204 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Y[186391], postData);

            //进入游戏确认邀请成功
            if ($m52401) {
                this.updateShare($m52401.invite, $m52401.invite_type, $m52401.is_new, data.roleid, data.serverid, $m52401.scene);
            }
            sdk.logEnterGame(data.serverid, data.servername, data.roleid, data.rolename, data.rolelevel);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(Y[209082]);
            var username = wx.getStorageSync(Y[209083]);

            var postData = {};
            postData[Y[209041]] = uid;
            postData[Y[209042]] = username;
            postData[Y[191477]] = data.roleid;
            postData[Y[209043]] = data.rolelevel;
            postData[Y[209044]] = data.rolename;
            postData[Y[180024]] = data.serverid;

            if (data.roleid && data.serverid) {
                $m51204 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Y[209045], postData);
            sdk.logRoleUpLevel(data.serverid, data.servername, data.roleid, data.rolename, data.rolelevel);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = Y[209046].split('');
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
            var uuid = wx.getStorageSync(Y[208977]);
            var idfv = wx.getStorageSync(Y[208978]);
            var ad_code = wx.getStorageSync(Y[208980]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: Y[209047],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : Y[209048],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == Y[180111] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(Y[209049] + type);
            console.log(public_data);

            wx.request({
                url: Y[205970] + HOST + Y[209050] + type + Y[209051] + encodeURIComponent(JSON.stringify(public_data))
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
            sdk.downloadClient();
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(Y[209110] + tmplIds);
            //获取模板ID
            callbacks[Y[180736]] = typeof callback == Y[208983] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(Y[209111]);
                    console.log(res);
                    callbacks[Y[180736]] && callbacks[Y[180736]](res);
                },
                fail(res) {
                    console.log(Y[209112]);
                    console.log(res);
                    callbacks[Y[180736]] && callbacks[Y[180736]](res);
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in $m51240 && $m51240[method](data, callback);
}

exports.init = function (data, callback) {
    run(Y[180483], data, callback);
};

exports.login = function (callback) {
    run(Y[180660], '', callback);
};

exports.login = function (callback) {
    run(Y[180660], '', callback);
};

exports.pay = function (data, callback) {
    run(Y[180714], data, callback);
};

exports.openService = function () {
    run(Y[180728]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Y[180722], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(Y[180724], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Y[180726], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(Y[180727], data);
};

exports.msgCheck = function (data, callback) {
    run(Y[180612], data, callback);
};

exports.downloadClient = function () {
    run(Y[209063]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(Y[209064]);
};

exports.weiduanHelper = function () {
    run(Y[180730]);
};
exports.subscribeMessage = function (data, callback) {
    run(Y[180736], data, callback);
};