var Y = wx.$M;
import sdk from './mmmmHELP.js';

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: Y[208439], //光奈马甲包-天师服-梦幻大路
    partner_label: Y[208440],
    partner_id: Y[208441],
    game_ver: Y[208442], //M包为12.x.x，每次上传版本修改，先设置，上传审核版本的时候保持一致
    is_auth: false, //授权登录
    from: null, //来源
    tmpId: { 1: Y[208443], 2: Y[208444], 3: Y[208445] // 订阅的类型 和 模板id
    } };
window.config = config;

var $m51204 = $m52014();
var HOST = Y[208446];
var $m52401 = null;
var $m52410 = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function $m52014() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(Y[208350]);
            var self = this;

            var uuid = wx.getStorageSync(Y[208351]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(Y[208351], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(Y[208352]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(Y[208352], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(Y[208354], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(Y[181460], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                $m52410 = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }
            sdk.init({ game_ver: game_ver }, function (data) {
                console.log(Y[208447], JSON.stringify(data));
            });
            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },

        login: function (data, callback) {
            console.log(Y[208356]);
            callbacks[Y[180623]] = typeof callback == Y[181110] ? callback : null;
            var self = this;
            sdk.login(function (result, data) {
                if (result == 0) {
                    self.do_login(data);
                    console.log(Y[208448] + JSON.stringify(data));
                } else {
                    console.warn(Y[208449]);
                    callbacks[Y[180623]] && callbacks[Y[180623]](1, { errMsg: Y[208450] });
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[Y[208451]] = JSON.stringify(info);
            if ($m52410 && typeof $m52410 == Y[181044]) {
                for (var key in $m52410) {
                    public_data[key] = $m52410[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: Y[205508] + HOST + Y[208371],
                method: Y[180591],
                dataType: Y[181218],
                header: {
                    'content-type': Y[180727] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Y[208372] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(Y[208452], data.data.sdk_token);
                                wx.setStorageSync(Y[208453], data.data.user_id);
                                wx.setStorageSync(Y[208454], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(Y[208455], data.data.ext);
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
                            callbacks[Y[180623]] && callbacks[Y[180623]](0, userData);
                        } else {
                            callbacks[Y[180623]] && callbacks[Y[180623]](1, { type: Y[208456], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        self.getShareInfo(Y[208457], function (data) {
                            console.log(Y[208458]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(Y[208457]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[Y[180623]] && callbacks[Y[180623]](1, { type: Y[208456], errMsg: Y[208459], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(Y[208460]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[Y[180623]] && callbacks[Y[180623]](1, { type: Y[208461], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(Y[208462]);

                    callbacks[Y[180623]] && callbacks[Y[180623]](1, { type: Y[208463], errMsg: Y[208464], time: Date.now() - lastTime });
                    callbacks[Y[180623]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[Y[180690]] = typeof callback == Y[181110] ? callback : null;
            var type = data.type || Y[180690];
            console.log(Y[208465] + type);
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
            var sdk_token = wx.getStorageSync(Y[208452]);
            wx.request({
                url: Y[205508] + HOST + Y[208466],
                method: Y[180591],
                dataType: Y[181218],
                header: {
                    'content-type': Y[180727] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: $m52401 ? $m52401.server_id : '',
                    role_id: $m52401 ? $m52401.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(Y[208382]);
            callbacks[Y[188035]] = typeof callback == Y[181110] ? callback : null;
            var sdk_token = wx.getStorageSync(Y[208452]);
            wx.request({
                url: Y[205508] + HOST + Y[208383],
                method: Y[180591],
                dataType: Y[181218],
                header: {
                    'content-type': Y[180727] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(Y[208467]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[Y[188035]] && callbacks[Y[188035]](data.data);
                        } else {
                            callbacks[Y[188035]] && callbacks[Y[188035]]({ develop: 0 });
                        }
                    } else {
                        callbacks[Y[188035]] && callbacks[Y[188035]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(Y[208468]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[Y[188035]] && callbacks[Y[188035]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(Y[208469]);
                    callbacks[Y[188035]] && callbacks[Y[188035]]({ develop: 0 });
                    callbacks[Y[188035]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(Y[208470]);
            var sdk_token = wx.getStorageSync(Y[208452]);
            wx.request({
                url: Y[205508] + HOST + Y[208471],
                method: Y[180591],
                dataType: Y[181218],
                header: {
                    'content-type': Y[180727] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: $m52401 ? $m52401.server_id : '',
                    role_id: $m52401 ? $m52401.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(Y[208472]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[Y[180690]] && callbacks[Y[180690]](1, {
                                errMsg: Y[208473] + data.msg
                            });
                        }
                    } else {
                        callbacks[Y[180690]] && callbacks[Y[180690]](1, {
                            errMsg: Y[208474]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(Y[208475]);
            var sdk_token = wx.getStorageSync(Y[208452]);
            wx.request({
                url: Y[205508] + HOST + Y[208476],
                method: Y[180591],
                dataType: Y[181218],
                header: {
                    'content-type': Y[180727] // 默认值
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
                    console.log(Y[208477] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(Y[208478] + content);

            sdk.checkMsgV2(content, function (res) {
                console.log(Y[208479] + JSON.stringify(res));
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
            console.log(Y[208386] + JSON.stringify(data));

            var self = this;
            callbacks[Y[180677]] = typeof callback == Y[181110] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(Y[208452]);
            var session_key = wx.getStorageSync(Y[208455]);
            if (!sdk_token) {
                callbacks[Y[180677]] && callbacks[Y[180677]](1, {
                    errMsg: Y[208387]
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
            public_data[Y[208388]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: Y[205508] + HOST + Y[208389],
                method: Y[180591],
                dataType: Y[181218],
                header: {
                    'content-type': Y[180727] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(Y[208390] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            sdk.pay(data.data.pay_data, function (res1, data) {
                                console.log(Y[208480] + JSON.stringify(data));
                            });
                        } else {
                            callbacks[Y[180677]] && callbacks[Y[180677]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[Y[180623]] && callbacks[Y[180623]](1, {
                            errMsg: Y[208459]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(Y[208453]);
            var username = wx.getStorageSync(Y[208454]);

            var postData = {};
            postData[Y[208412]] = uid;
            postData[Y[208413]] = username;
            postData[Y[191590]] = data.roleid;
            postData[Y[208414]] = data.rolelevel;
            postData[Y[208415]] = data.rolename;
            postData[Y[180023]] = data.serverid;

            if (data.roleid && data.serverid) {
                $m52401 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(Y[180150], postData);
            // 渠道上报
            sdk.logCreateRole(data.serverid, data.servername, data.roleid, data.rolename, data.rolelevel);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(Y[208453]);
            var username = wx.getStorageSync(Y[208454]);

            var postData = {};
            postData[Y[208412]] = uid;
            postData[Y[208413]] = username;
            postData[Y[191590]] = data.roleid;
            postData[Y[208414]] = data.rolelevel;
            postData[Y[208415]] = data.rolename;
            postData[Y[180023]] = data.serverid;

            if (data.roleid && data.serverid) {
                $m52401 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Y[186695], postData);

            //进入游戏确认邀请成功
            if ($m52410) {
                this.updateShare($m52410.invite, $m52410.invite_type, $m52410.is_new, data.roleid, data.serverid, $m52410.scene);
            }
            sdk.logEnterGame(data.serverid, data.servername, data.roleid, data.rolename, data.rolelevel);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(Y[208453]);
            var username = wx.getStorageSync(Y[208454]);

            var postData = {};
            postData[Y[208412]] = uid;
            postData[Y[208413]] = username;
            postData[Y[191590]] = data.roleid;
            postData[Y[208414]] = data.rolelevel;
            postData[Y[208415]] = data.rolename;
            postData[Y[180023]] = data.serverid;

            if (data.roleid && data.serverid) {
                $m52401 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(Y[208416], postData);
            sdk.logRoleUpLevel(data.serverid, data.servername, data.roleid, data.rolename, data.rolelevel);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = Y[208417].split('');
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
            var uuid = wx.getStorageSync(Y[208351]);
            var idfv = wx.getStorageSync(Y[208352]);
            var ad_code = wx.getStorageSync(Y[208354]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: Y[208418],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : Y[208419],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == Y[180110] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(Y[208420] + type);
            console.log(public_data);

            wx.request({
                url: Y[205508] + HOST + Y[208421] + type + Y[208422] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(Y[208481] + tmplIds);
            //获取模板ID
            callbacks[Y[180699]] = typeof callback == Y[181110] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(Y[208482]);
                    console.log(res);
                    callbacks[Y[180699]] && callbacks[Y[180699]](res);
                },
                fail(res) {
                    console.log(Y[208483]);
                    console.log(res);
                    callbacks[Y[180699]] && callbacks[Y[180699]](res);
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in $m51204 && $m51204[method](data, callback);
}

exports.init = function (data, callback) {
    run(Y[180445], data, callback);
};

exports.login = function (callback) {
    run(Y[180623], '', callback);
};

exports.login = function (callback) {
    run(Y[180623], '', callback);
};

exports.pay = function (data, callback) {
    run(Y[180677], data, callback);
};

exports.openService = function () {
    run(Y[180691]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Y[180685], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(Y[180687], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(Y[180689], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(Y[180690], data);
};

exports.msgCheck = function (data, callback) {
    run(Y[180575], data, callback);
};

exports.downloadClient = function () {
    run(Y[208434]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(Y[208435]);
};

exports.weiduanHelper = function () {
    run(Y[180693]);
};
exports.subscribeMessage = function (data, callback) {
    run(Y[180699], data, callback);
};