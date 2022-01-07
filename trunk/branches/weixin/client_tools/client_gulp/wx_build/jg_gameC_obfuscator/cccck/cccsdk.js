var p = wx.$h;
import sdk from './ccchelp.js';

//TODO 替换对应参数
var config = {
    game_id: 256, //光奈-黎明风暴-天师服
    game_pkg: p[48960],
    partner_label: p[48961],
    partner_id: p[48962],
    game_ver: p[48963], //C包为3.x.x，每次上传版本修改，先设置，上传审核版本的时候保持一致
    is_auth: false, //授权登录
    from: null, //来源
    tmpId: { 1: p[48964], 2: p[48965], 3: p[48966] // 订阅的类型 和 模板id
    } };
window.config = config;

var $aHQV53 = $aHV35Q();
var HOST = p[48967];
var $aHQV35 = null;
var $aHV53Q = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function $aHV35Q() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(p[48860]);
            var self = this;

            var uuid = wx.getStorageSync(p[48861]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(p[48861], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(p[48862]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(p[48862], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(p[48864], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(p[20284], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                $aHV53Q = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }
            sdk.init({ game_ver: game_ver }, function (data) {
                console.log(p[48968], JSON.stringify(data));
            });
            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },

        login: function (data, callback) {
            console.log(p[48866]);
            callbacks[p[48867]] = typeof callback == p[48514] ? callback : null;
            var self = this;
            sdk.login(function (result, data) {
                if (result == 0) {
                    self.do_login(data);
                    console.log(p[48969] + JSON.stringify(data));
                } else {
                    console.warn(p[48970]);
                    callbacks[p[48867]] && callbacks[p[48867]](1, { errMsg: p[48971] });
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[p[48972]] = JSON.stringify(info);
            if ($aHV53Q && typeof $aHV53Q == p[20279]) {
                for (var key in $aHV53Q) {
                    public_data[key] = $aHV53Q[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: p[45450] + HOST + p[48882],
                method: p[48883],
                dataType: p[25847],
                header: {
                    'content-type': p[48884] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(p[48885] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(p[48973], data.data.sdk_token);
                                wx.setStorageSync(p[48974], data.data.user_id);
                                wx.setStorageSync(p[48975], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(p[48976], data.data.ext);
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
                            callbacks[p[48867]] && callbacks[p[48867]](0, userData);
                        } else {
                            callbacks[p[48867]] && callbacks[p[48867]](1, { type: p[48977], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        self.getShareInfo(p[48978], function (data) {
                            console.log(p[48979]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(p[48978]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[p[48867]] && callbacks[p[48867]](1, { type: p[48977], errMsg: p[48980], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(p[48981]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[p[48867]] && callbacks[p[48867]](1, { type: p[48982], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(p[48983]);

                    callbacks[p[48867]] && callbacks[p[48867]](1, { type: p[48984], errMsg: p[48985], time: Date.now() - lastTime });
                    callbacks[p[48867]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[p[48986]] = typeof callback == p[48514] ? callback : null;
            var type = data.type || p[48986];
            console.log(p[48987] + type);
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
            var sdk_token = wx.getStorageSync(p[48973]);
            wx.request({
                url: p[45450] + HOST + p[48988],
                method: p[48883],
                dataType: p[25847],
                header: {
                    'content-type': p[48884] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: $aHQV35 ? $aHQV35.server_id : '',
                    role_id: $aHQV35 ? $aHQV35.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(p[48896]);
            callbacks[p[27094]] = typeof callback == p[48514] ? callback : null;
            var sdk_token = wx.getStorageSync(p[48973]);
            wx.request({
                url: p[45450] + HOST + p[48897],
                method: p[48883],
                dataType: p[25847],
                header: {
                    'content-type': p[48884] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(p[48989]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[p[27094]] && callbacks[p[27094]](data.data);
                        } else {
                            callbacks[p[27094]] && callbacks[p[27094]]({ develop: 0 });
                        }
                    } else {
                        callbacks[p[27094]] && callbacks[p[27094]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(p[48990]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[p[27094]] && callbacks[p[27094]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(p[48991]);
                    callbacks[p[27094]] && callbacks[p[27094]]({ develop: 0 });
                    callbacks[p[27094]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(p[48992]);
            var sdk_token = wx.getStorageSync(p[48973]);
            wx.request({
                url: p[45450] + HOST + p[48993],
                method: p[48883],
                dataType: p[25847],
                header: {
                    'content-type': p[48884] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: $aHQV35 ? $aHQV35.server_id : '',
                    role_id: $aHQV35 ? $aHQV35.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(p[48994]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[p[48986]] && callbacks[p[48986]](1, {
                                errMsg: p[48995] + data.msg
                            });
                        }
                    } else {
                        callbacks[p[48986]] && callbacks[p[48986]](1, {
                            errMsg: p[48996]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(p[48997]);
            var sdk_token = wx.getStorageSync(p[48973]);
            wx.request({
                url: p[45450] + HOST + p[48998],
                method: p[48883],
                dataType: p[25847],
                header: {
                    'content-type': p[48884] // 默认值
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
                    console.log(p[48999] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(p[49000] + content);

            sdk.checkMsgV2(content, function (res) {
                console.log(p[49001] + JSON.stringify(res));
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
            console.log(p[48900] + JSON.stringify(data));

            var self = this;
            callbacks[p[48901]] = typeof callback == p[48514] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(p[48973]);
            var session_key = wx.getStorageSync(p[48976]);
            if (!sdk_token) {
                callbacks[p[48901]] && callbacks[p[48901]](1, {
                    errMsg: p[48902]
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
            public_data[p[48903]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: p[45450] + HOST + p[48904],
                method: p[48883],
                dataType: p[25847],
                header: {
                    'content-type': p[48884] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(p[48905] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            sdk.pay(data.data.pay_data, function (res1, data) {
                                console.log(p[49002] + JSON.stringify(data));
                            });
                        } else {
                            callbacks[p[48901]] && callbacks[p[48901]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[p[48867]] && callbacks[p[48867]](1, {
                            errMsg: p[48980]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(p[48974]);
            var username = wx.getStorageSync(p[48975]);

            var postData = {};
            postData[p[48930]] = uid;
            postData[p[48931]] = username;
            postData[p[30836]] = data.roleid;
            postData[p[48932]] = data.rolelevel;
            postData[p[48933]] = data.rolename;
            postData[p[31510]] = data.serverid;

            if (data.roleid && data.serverid) {
                $aHQV35 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(p[20006], postData);
            // 渠道上报
            sdk.logCreateRole(data.serverid, data.servername, data.roleid, data.rolename, data.rolelevel);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(p[48974]);
            var username = wx.getStorageSync(p[48975]);

            var postData = {};
            postData[p[48930]] = uid;
            postData[p[48931]] = username;
            postData[p[30836]] = data.roleid;
            postData[p[48932]] = data.rolelevel;
            postData[p[48933]] = data.rolename;
            postData[p[31510]] = data.serverid;

            if (data.roleid && data.serverid) {
                $aHQV35 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(p[25729], postData);

            //进入游戏确认邀请成功
            if ($aHV53Q) {
                this.updateShare($aHV53Q.invite, $aHV53Q.invite_type, $aHV53Q.is_new, data.roleid, data.serverid, $aHV53Q.scene);
            }
            sdk.logEnterGame(data.serverid, data.servername, data.roleid, data.rolename, data.rolelevel);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(p[48974]);
            var username = wx.getStorageSync(p[48975]);

            var postData = {};
            postData[p[48930]] = uid;
            postData[p[48931]] = username;
            postData[p[30836]] = data.roleid;
            postData[p[48932]] = data.rolelevel;
            postData[p[48933]] = data.rolename;
            postData[p[31510]] = data.serverid;

            if (data.roleid && data.serverid) {
                $aHQV35 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(p[48934], postData);
            sdk.logRoleUpLevel(data.serverid, data.servername, data.roleid, data.rolename, data.rolelevel);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = p[48935].split('');
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
            var uuid = wx.getStorageSync(p[48861]);
            var idfv = wx.getStorageSync(p[48862]);
            var ad_code = wx.getStorageSync(p[48864]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: p[48936],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : p[48937],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == p[48906] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(p[48938] + type);
            console.log(public_data);

            wx.request({
                url: p[45450] + HOST + p[48939] + type + p[48940] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(p[49003] + tmplIds);
            //获取模板ID
            callbacks[p[49004]] = typeof callback == p[48514] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(p[49005]);
                    console.log(res);
                    callbacks[p[49004]] && callbacks[p[49004]](res);
                },
                fail(res) {
                    console.log(p[49006]);
                    console.log(res);
                    callbacks[p[49004]] && callbacks[p[49004]](res);
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in $aHQV53 && $aHQV53[method](data, callback);
}

exports.init = function (data, callback) {
    run(p[20366], data, callback);
};

exports.login = function (callback) {
    run(p[48867], '', callback);
};

exports.login = function (callback) {
    run(p[48867], '', callback);
};

exports.pay = function (data, callback) {
    run(p[48901], data, callback);
};

exports.openService = function () {
    run(p[44893]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(p[48952], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(p[48953], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(p[48954], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(p[48986], data);
};

exports.msgCheck = function (data, callback) {
    run(p[32124], data, callback);
};

exports.downloadClient = function () {
    run(p[48955]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(p[48956]);
};

exports.weiduanHelper = function () {
    run(p[43533]);
};
exports.subscribeMessage = function (data, callback) {
    run(p[49004], data, callback);
};