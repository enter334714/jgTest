var p = wx.$h;
import sdk from './ccchelp.js';

//TODO 替换对应参数
var config = {
    game_id: 256, //光奈-黎明风暴-天师服
    game_pkg: p[48550],
    partner_label: p[48551],
    partner_id: p[48552],
    game_ver: p[48553], //C包为3.x.x，每次上传版本修改，先设置，上传审核版本的时候保持一致
    is_auth: false, //授权登录
    from: null, //来源
    tmpId: { 1: p[48554], 2: p[48555], 3: p[48556] // 订阅的类型 和 模板id
    } };
window.config = config;

var $aHQV53 = $aHV35Q();
var HOST = p[48557];
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
            console.log(p[48448]);
            var self = this;

            var uuid = wx.getStorageSync(p[48449]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(p[48449], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(p[48450]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(p[48450], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(p[48452], info.query.ad_code);
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
                console.log(p[48558], JSON.stringify(data));
            });
            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },

        login: function (data, callback) {
            console.log(p[48454]);
            callbacks[p[48455]] = typeof callback == p[48456] ? callback : null;
            var self = this;
            sdk.login(function (result, data) {
                if (result == 0) {
                    self.do_login(data);
                    console.log(p[48559] + JSON.stringify(data));
                } else {
                    console.warn(p[48560]);
                    callbacks[p[48455]] && callbacks[p[48455]](1, { errMsg: p[48561] });
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[p[48562]] = JSON.stringify(info);
            if ($aHV53Q && typeof $aHV53Q == p[20279]) {
                for (var key in $aHV53Q) {
                    public_data[key] = $aHV53Q[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: p[45432] + HOST + p[48471],
                method: p[48472],
                dataType: p[25848],
                header: {
                    'content-type': p[48473] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(p[48474] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(p[48563], data.data.sdk_token);
                                wx.setStorageSync(p[48564], data.data.user_id);
                                wx.setStorageSync(p[48565], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(p[48566], data.data.ext);
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
                            callbacks[p[48455]] && callbacks[p[48455]](0, userData);
                        } else {
                            callbacks[p[48455]] && callbacks[p[48455]](1, { type: p[48567], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        self.getShareInfo(p[48568], function (data) {
                            console.log(p[48569]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(p[48568]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[p[48455]] && callbacks[p[48455]](1, { type: p[48567], errMsg: p[48570], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(p[48571]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[p[48455]] && callbacks[p[48455]](1, { type: p[48572], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(p[48573]);

                    callbacks[p[48455]] && callbacks[p[48455]](1, { type: p[48574], errMsg: p[48575], time: Date.now() - lastTime });
                    callbacks[p[48455]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[p[48576]] = typeof callback == p[48456] ? callback : null;
            var type = data.type || p[48576];
            console.log(p[48577] + type);
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
            var sdk_token = wx.getStorageSync(p[48563]);
            wx.request({
                url: p[45432] + HOST + p[48578],
                method: p[48472],
                dataType: p[25848],
                header: {
                    'content-type': p[48473] // 默认值
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
            console.log(p[48485]);
            callbacks[p[27095]] = typeof callback == p[48456] ? callback : null;
            var sdk_token = wx.getStorageSync(p[48563]);
            wx.request({
                url: p[45432] + HOST + p[48486],
                method: p[48472],
                dataType: p[25848],
                header: {
                    'content-type': p[48473] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(p[48579]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[p[27095]] && callbacks[p[27095]](data.data);
                        } else {
                            callbacks[p[27095]] && callbacks[p[27095]]({ develop: 0 });
                        }
                    } else {
                        callbacks[p[27095]] && callbacks[p[27095]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(p[48580]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[p[27095]] && callbacks[p[27095]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(p[48581]);
                    callbacks[p[27095]] && callbacks[p[27095]]({ develop: 0 });
                    callbacks[p[27095]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(p[48582]);
            var sdk_token = wx.getStorageSync(p[48563]);
            wx.request({
                url: p[45432] + HOST + p[48583],
                method: p[48472],
                dataType: p[25848],
                header: {
                    'content-type': p[48473] // 默认值
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
                    console.log(p[48584]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[p[48576]] && callbacks[p[48576]](1, {
                                errMsg: p[48585] + data.msg
                            });
                        }
                    } else {
                        callbacks[p[48576]] && callbacks[p[48576]](1, {
                            errMsg: p[48586]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(p[48587]);
            var sdk_token = wx.getStorageSync(p[48563]);
            wx.request({
                url: p[45432] + HOST + p[48588],
                method: p[48472],
                dataType: p[25848],
                header: {
                    'content-type': p[48473] // 默认值
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
                    console.log(p[48589] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(p[48590] + content);

            sdk.checkMsgV2(content, function (res) {
                console.log(p[48591] + JSON.stringify(res));
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
            console.log(p[48489] + JSON.stringify(data));

            var self = this;
            callbacks[p[48490]] = typeof callback == p[48456] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(p[48563]);
            var session_key = wx.getStorageSync(p[48566]);
            if (!sdk_token) {
                callbacks[p[48490]] && callbacks[p[48490]](1, {
                    errMsg: p[48491]
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
            public_data[p[48492]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: p[45432] + HOST + p[48493],
                method: p[48472],
                dataType: p[25848],
                header: {
                    'content-type': p[48473] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(p[48494] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            sdk.pay(data.data.pay_data, function (res1, data) {
                                console.log(p[48592] + JSON.stringify(data));
                            });
                        } else {
                            callbacks[p[48490]] && callbacks[p[48490]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[p[48455]] && callbacks[p[48455]](1, {
                            errMsg: p[48570]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(p[48564]);
            var username = wx.getStorageSync(p[48565]);

            var postData = {};
            postData[p[48520]] = uid;
            postData[p[48521]] = username;
            postData[p[30837]] = data.roleid;
            postData[p[48522]] = data.rolelevel;
            postData[p[48523]] = data.rolename;
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
            var uid = wx.getStorageSync(p[48564]);
            var username = wx.getStorageSync(p[48565]);

            var postData = {};
            postData[p[48520]] = uid;
            postData[p[48521]] = username;
            postData[p[30837]] = data.roleid;
            postData[p[48522]] = data.rolelevel;
            postData[p[48523]] = data.rolename;
            postData[p[31510]] = data.serverid;

            if (data.roleid && data.serverid) {
                $aHQV35 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(p[25730], postData);

            //进入游戏确认邀请成功
            if ($aHV53Q) {
                this.updateShare($aHV53Q.invite, $aHV53Q.invite_type, $aHV53Q.is_new, data.roleid, data.serverid, $aHV53Q.scene);
            }
            sdk.logEnterGame(data.serverid, data.servername, data.roleid, data.rolename, data.rolelevel);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(p[48564]);
            var username = wx.getStorageSync(p[48565]);

            var postData = {};
            postData[p[48520]] = uid;
            postData[p[48521]] = username;
            postData[p[30837]] = data.roleid;
            postData[p[48522]] = data.rolelevel;
            postData[p[48523]] = data.rolename;
            postData[p[31510]] = data.serverid;

            if (data.roleid && data.serverid) {
                $aHQV35 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(p[48524], postData);
            sdk.logRoleUpLevel(data.serverid, data.servername, data.roleid, data.rolename, data.rolelevel);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = p[48525].split('');
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
            var uuid = wx.getStorageSync(p[48449]);
            var idfv = wx.getStorageSync(p[48450]);
            var ad_code = wx.getStorageSync(p[48452]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: p[48526],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : p[48527],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == p[48496] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(p[48528] + type);
            console.log(public_data);

            wx.request({
                url: p[45432] + HOST + p[48529] + type + p[48530] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(p[48593] + tmplIds);
            //获取模板ID
            callbacks[p[48594]] = typeof callback == p[48456] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(p[48595]);
                    console.log(res);
                    callbacks[p[48594]] && callbacks[p[48594]](res);
                },
                fail(res) {
                    console.log(p[48596]);
                    console.log(res);
                    callbacks[p[48594]] && callbacks[p[48594]](res);
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
    run(p[48455], '', callback);
};

exports.login = function (callback) {
    run(p[48455], '', callback);
};

exports.pay = function (data, callback) {
    run(p[48490], data, callback);
};

exports.openService = function () {
    run(p[44889]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(p[48542], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(p[48543], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(p[48544], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(p[48576], data);
};

exports.msgCheck = function (data, callback) {
    run(p[32125], data, callback);
};

exports.downloadClient = function () {
    run(p[48545]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(p[48546]);
};

exports.weiduanHelper = function () {
    run(p[43534]);
};
exports.subscribeMessage = function (data, callback) {
    run(p[48594], data, callback);
};