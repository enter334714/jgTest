var m = wx.$g;
let hortor = require(m[28396]);
let hortorSdk = hortor.sdk; //核心业务SDK
let wallSDK = hortorSdk.wallSDK;
let partner_config = hortor.config; //SDK配置
let wxapm = hortor.wxapm; //应用监控SDK

// 引入VIP大使
// import HortorVip from "../utils/HortorVipSdk/hortorVip";

//TODO 替换对应参数
var config = {
    game_id: m[28397],
    game_pkg: m[28398], //疯狂微信小游戏-无双服-星聚
    partner_label: m[28399],
    partner_id: m[28400],
    game_ver: m[28401],
    partner_game_id: m[28402],
    is_auth: false //授权登录
};
window.config = config;
var partner_user_data = {};
var G$V3J20 = G$VJ023();
var HOST = m[28403];
var G$V3J02 = null;
var G$VJ203 = null;
var system = wx.getSystemInfoSync();
var device = system.platform == m[27901] ? m[27901] : m[27900];
var userInfoBtn = '';
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function G$VJ023() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(m[28404]);
            var self = this;

            var uuid = wx.getStorageSync(m[28405]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(m[28405], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(m[28406]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(m[28406], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(m[28407], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(m[278], data);
            //这里修改了配置版本号
            partner_config[m[28408]] && (partner_config[m[28408]] = ops.game_ver);
            //TODO 替换对应参数
            hortor.init(partner_config);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                G$VJ203 = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }

            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    hortorSdk.checkSwitches({ switches: [m[28067], m[28409], m[28410], m[28411]] }).then(res => {
                        console.log(m[28412], res);
                        data.is_share = res.share ? 1 : 0;
                        data.show_pay = res.iospay ? 1 : 0;
                        data.is_vipds = res.vipds ? 1 : 0;
                        data.is_gzgzh = res.gzgzh ? 1 : 0;
                        data.is_skip_create_role = data.skip_create_role ? 1 : 0;
                        callback && callback(data);
                    }).catch(err => {
                        console.log(`获取失败，errCode=${err.errCode} errMsg=${err.errMsg}`);
                        callback && callback(data);
                    });
                });
            }
        },

        //TODO 替换联运登录接口
        login: function (data, callback) {
            console.log(m[28413]);
            console.log(m[28414] + Date.now());
            var that = this;
            callbacks[m[28007]] = typeof callback == m[27741] ? callback : null;
            var system_info = wx.getSystemInfoSync();
            var screen_width = system_info.screenWidth;
            var screen_height = system_info.screenHeight;
            var btn_width = screen_width * 2 / 4;
            var btn_height = btn_width / 4;
            var btn_left = (screen_width - btn_width) / 2;
            var btn_top = screen_height / 2;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[m[28415]]) {
                            //已授权
                            hortorSdk.login().then(res => {
                                console.log(m[28416] + JSON.stringify(res));
                                that.do_login(res);
                            }).catch(err => {
                                console.log(m[28417], err);
                            });
                        } else {
                            const userInfoBtn = hortorSdk.createGetUserInfoBtn({
                                type: m[4064],
                                text: m[28418],
                                style: {
                                    left: btn_left,
                                    top: btn_top,
                                    width: btn_width,
                                    height: btn_height,
                                    lineHeight: btn_height,
                                    backgroundColor: m[28419],
                                    color: m[4088],
                                    textAlign: m[1481],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });
                            if (userInfoBtn) {
                                // 显示按钮
                                userInfoBtn.show();
                                // 点击事件
                                userInfoBtn.onTap(res => {
                                    if (res && res.userInfo) {
                                        // 同意授权
                                        console.log(m[28420]);
                                        // TODO: 重新登录
                                        hortorSdk.login().then(res => {
                                            console.log(m[28416] + JSON.stringify(res));
                                            that.do_login(res);
                                        }).catch(err => {
                                            console.log(m[28417], err);
                                        });
                                        // 按钮隐藏
                                        userInfoBtn.hide();
                                    } else {
                                        // 拒绝授权
                                        that.weak_login();
                                    }
                                });
                            }
                        }
                    },
                    fail: function () {
                        that.weak_login();
                    }
                });
            } else {
                that.weak_login();
            }
        },

        weak_login: function () {
            hortorSdk.weakLogin().then(res => {
                console.log(m[28421], res);
                this.do_login(res);
            }).catch(err => {
                console.log(m[28422], err);
                callbacks[m[28007]] && callbacks[m[28007]](1, { errMsg: m[28423] });
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[m[28424]] = info.encryptUserInfo ? info.encryptUserInfo : info.userInfo;
            public_data[m[28425]] = info.timestamp;
            public_data[m[10772]] = info.sign;
            public_data[m[28426]] = 1;
            if (G$VJ203 && typeof G$VJ203 == m[273]) {
                for (var key in G$VJ203) {
                    public_data[key] = G$VJ203[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: m[24448] + HOST + m[28427],
                method: m[27979],
                dataType: m[5450],
                header: {
                    'content-type': m[28099] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(m[28428] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.uid = data.data.openid;
                            partner_user_data.uniqueIdNew = data.data.ext.uniqueId;

                            try {
                                wx.setStorageSync(m[28429], data.data.sdk_token);
                                wx.setStorageSync(m[28430], data.data.user_id);
                                wx.setStorageSync(m[28431], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(m[28432], data.data.ext);
                                }
                            } catch (e) {}

                            var userData = {
                                userid: data.data.user_id,
                                account: data.data.nick_name,
                                token: data.data.token,
                                openid: data.data.ext.uniqueId,
                                invite_uid: data.data.invite_uid || '',
                                invite_nickname: data.data.invite_nickname || '',
                                invite_head_img: data.data.invite_head_img || '',
                                head_img: data.data.head_img || '',
                                is_client: data.data.is_client || '0',
                                ios_pay: data.data.ios_pay || '0'
                            };
                            callbacks[m[28007]] && callbacks[m[28007]](0, userData);
                        } else {
                            callbacks[m[28007]] && callbacks[m[28007]](1, { type: m[28433], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        hortorSdk.setGameUserInfo();

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(m[28434], function (data) {
                            console.log(m[28435]);
                            var shareType = m[322];
                            var shareData = hortorSdk.getShareData({
                                shareType: shareType
                            });
                            console.log(m[28436], JSON.stringify(shareData));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(m[28434]);
                                hortorSdk.sharePointShow(shareType);
                                return {
                                    title: shareData.title,
                                    imageUrl: shareData.imageUrl,
                                    query: shareData.query + '&' + data.query
                                };
                            });
                        });
                    } else {
                        callbacks[m[28007]] && callbacks[m[28007]](1, { type: m[28433], errMsg: m[28437], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(m[28438]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[m[28007]] && callbacks[m[28007]](1, { type: m[28439], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(m[28440]);

                    callbacks[m[28007]] && callbacks[m[28007]](1, { type: m[28441], errMsg: m[28442], time: Date.now() - lastTime });
                    callbacks[m[28007]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[m[28067]] = typeof callback == m[27741] ? callback : null;
            var type = data.type || m[28067];
            console.log(m[28443] + type);
            var self = this;

            this.getShareInfo(type, function (data) {
                var shareType = m[28444];
                var shareData = hortorSdk.getShareData({
                    shareType: shareType
                });
                console.log(m[28445], shareData);
                //记录开始分享
                self.logStartShare(type);
                hortorSdk.sharePointShow(shareType);
                wx.shareAppMessage({
                    title: shareData.title,
                    imageUrl: shareData.imageUrl,
                    query: shareData.query + '&' + data.query
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(m[28429]);
            wx.request({
                url: m[24448] + HOST + m[28446],
                method: m[27979],
                dataType: m[5450],
                header: {
                    'content-type': m[28099] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: G$V3J02 ? G$V3J02.server_id : '',
                    role_id: G$V3J02 ? G$V3J02.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        is_authorize: function (callback) {
            console.log(m[28447]);
            wx.getSetting({
                success: function (res) {
                    if (res.authSetting[m[28415]]) {
                        callback(1);
                    } else {
                        callback(0);
                    }
                }
            });
        },

        go_authorize: function (data, callback) {
            console.log(m[28448]);
            userInfoBtn = hortorSdk.createGetUserInfoBtn({
                type: m[4335],
                image: m[28449],
                style: {
                    left: data.left,
                    top: data.top,
                    width: data.width,
                    height: data.height,
                    lineHeight: data.height,
                    textAlign: m[1481],
                    fontSize: 16,
                    borderRadius: 4
                }
            });
            if (userInfoBtn) {
                // 显示按钮
                userInfoBtn.show();
                // 点击事件
                userInfoBtn.onTap(res => {
                    if (res && res.userInfo) {
                        // 同意授权
                        console.log(m[28420]);
                        hortorSdk.updateUserInfo().then(res => {
                            console.log(m[28450], res);
                            callback(1);
                        }).catch(err => {
                            console.log(m[28451], err);
                            callback(0);
                        });
                    } else {
                        // 拒绝授权
                        console.log(m[28452]);
                        callback(0);
                    }

                    // 按钮隐藏
                    userInfoBtn.hide();
                });
            }
        },

        hideUserInfoBtn: function () {
            if (userInfoBtn) {
                userInfoBtn.hide();
            }
        },

        openService: function () {
            hortorSdk.customerService({
                showMessageCard: true,
                success: res => {
                    console.log(m[28453], res);
                },
                fail: res => {
                    console.log(m[28454], res);
                }
            });
        },

        goCustomer: function (data) {
            hortorSdk.goCustomer({
                playerId: data.roleid,
                playerName: data.rolename
            }).then(res => {
                console.log(m[28455]);
            }).catch(err => {
                console.log(m[28456], err);
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(m[28457]);
            callbacks[m[6671]] = typeof callback == m[27741] ? callback : null;
            var sdk_token = wx.getStorageSync(m[28429]);
            wx.request({
                url: m[24448] + HOST + '/game/min/?ac=checkGameVersion',
                method: m[27979],
                dataType: m[5450],
                header: {
                    'content-type': m[28099] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(m[28458]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[m[6671]] && callbacks[m[6671]](data.data);
                        } else {
                            callbacks[m[6671]] && callbacks[m[6671]]({ develop: 0 });
                        }
                    } else {
                        callbacks[m[6671]] && callbacks[m[6671]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(m[28459]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[m[6671]] && callbacks[m[6671]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(m[28460]);
                    callbacks[m[6671]] && callbacks[m[6671]]({ develop: 0 });
                    callbacks[m[6671]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(m[28461]);
            var sdk_token = wx.getStorageSync(m[28429]);
            wx.request({
                url: m[24448] + HOST + m[28462],
                method: m[27979],
                dataType: m[5450],
                header: {
                    'content-type': m[28099] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: G$V3J02 ? G$V3J02.server_id : '',
                    role_id: G$V3J02 ? G$V3J02.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(m[28463]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[m[28067]] && callbacks[m[28067]](1, {
                                errMsg: m[28464] + data.msg
                            });
                        }
                    } else {
                        callbacks[m[28067]] && callbacks[m[28067]](1, {
                            errMsg: m[28465]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(m[28466]);
            var sdk_token = wx.getStorageSync(m[28429]);
            wx.request({
                url: m[24448] + HOST + m[28467],
                method: m[27979],
                dataType: m[5450],
                header: {
                    'content-type': m[28099] // 默认值
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
                    console.log(m[28468]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(m[28469]);
            var sdk_token = wx.getStorageSync(m[28429]);

            wx.request({
                url: m[24448] + HOST + m[28470] + config.partner_id + '/' + config.game_pkg,
                method: m[27979],
                dataType: m[5450],
                header: {
                    'content-type': m[28099] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content,
                    uId: partner_user_data.uid
                },
                success: function (res) {
                    console.log(m[28471]);
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        isSubscribe: function (callback) {
            console.log(m[28472]);
            var ext = wx.getStorageSync(m[28432]);
            wx.request({
                url: m[24448] + HOST + m[28473] + config.partner_id + '/' + config.game_pkg,
                method: m[27979],
                dataType: m[5450],
                header: {
                    'content-type': m[28099] // 默认值
                },
                data: {
                    openid: ext.uniqueId
                },
                success: function (res) {
                    console.log(m[28474], res);
                    if (res.data.state == 1) {
                        callback({ status: 1 });
                    } else {
                        callback({ status: 0 });
                    }
                }
            });
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(m[28475]);
            console.log(data);

            var self = this;
            callbacks[m[28056]] = typeof callback == m[27741] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(m[28429]);
            var session_key = wx.getStorageSync(m[28432]);
            if (!sdk_token && !session_key) {
                callbacks[m[28056]] && callbacks[m[28056]](1, {
                    errMsg: m[28476]
                });
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
            public_data[m[28477]] = JSON.stringify(order_data);
            public_data[m[28426]] = 1;

            //发起网络请求
            wx.request({
                url: m[24448] + HOST + m[28478],
                method: m[27979],
                dataType: m[5450],
                header: {
                    'content-type': m[28099] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(m[28479]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(m[28480] + JSON.stringify(data.data.pay_data));
                            if (device === m[27900]) {
                                console.log(m[28481]);
                                hortorSdk.jumpPay(data.data.pay_data).then(res => {
                                    console.log(m[28455]);
                                }).catch(err => {
                                    console.log(m[28456], err);
                                    callbacks[m[28056]] && callbacks[m[28056]](1, {
                                        errMsg: err.errMsg
                                    });
                                });
                            } else {
                                console.log(m[28482]);
                                hortorSdk.midasPay(data.data.pay_data).then(res => {
                                    console.log(m[28483]);
                                }).catch(err => {
                                    console.log(m[28484], err);
                                    callbacks[m[28056]] && callbacks[m[28056]](1, {
                                        errMsg: err.errMsg
                                    });
                                });
                            }
                        } else {
                            callbacks[m[28056]] && callbacks[m[28056]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[m[28007]] && callbacks[m[28007]](1, {
                            errMsg: m[28437]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(m[28430]);
            var username = wx.getStorageSync(m[28431]);
            var plat_session_key = wx.getStorageSync(m[28432]);
            var postData = {};
            postData[m[28485]] = uid;
            postData[m[28486]] = username;
            postData[m[10166]] = data.roleid;
            postData[m[28487]] = data.rolelevel;
            postData[m[28488]] = data.rolename;
            postData[m[10787]] = data.serverid;

            if (data.roleid && data.serverid) {
                G$V3J02 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(m[6], postData);

            var roleInfo = {
                roleId: data.roleid,
                roleName: data.rolename,
                serverId: data.serverid,
                level: data.rolelevel,
                roleCtime: Date.parse(new Date()),
                id: plat_session_key.uniqueId
            };

            hortorSdk.setGameUserInfo(roleInfo);
            // 创角数据上报
            this.roleCreateReport(0);
        },

        roleCreateReport: function (is_valid = 1) {

            wx.request({
                url: m[24448] + HOST + m[28489] + config.partner_id + '/' + config.game_pkg,
                method: m[27979],
                dataType: m[5450],
                header: {
                    'content-type': m[28099] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    uniqueId: partner_user_data.uid,
                    is_valid: is_valid === 1 ? 1 : 0
                },
                success: function (res) {
                    console.log(m[28490], res);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(m[28430]);
            var username = wx.getStorageSync(m[28431]);
            var plat_session_key = wx.getStorageSync(m[28432]);
            var postData = {};
            postData[m[28485]] = uid;
            postData[m[28486]] = username;
            postData[m[10166]] = data.roleid;
            postData[m[28487]] = data.rolelevel;
            postData[m[28488]] = data.rolename;
            postData[m[10787]] = data.serverid;

            if (data.roleid && data.serverid) {
                G$V3J02 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            // hortorSdk.checkSwitches(['antiaddicted'], {}).then(res => {
            hortorSdk.checkSwitches({ switches: [m[28491]] }).then(res => {
                console.log(m[28492], res);
                if (res.antiaddicted) {
                    //防沉迷
                    hortorSdk.checkRest(() => {
                        console.log(m[28493]);
                    });
                }
            }).catch(err => {
                console.log(`[SDK]检查防沉迷开关返回失败，errCode=${err.errCode} errMsg=${err.errMsg}`);
            });

            this.log(m[5332], postData);

            var roleInfo = {
                roleId: data.roleid,
                roleName: data.rolename,
                serverId: data.serverid,
                level: data.rolelevel,
                roleCtime: data.rolecreatetime ? data.rolecreatetime * 1000 : 0,
                id: plat_session_key.uniqueId
            };

            hortorSdk.setGameUserInfo(roleInfo);

            //进入游戏确认邀请成功
            if (G$VJ203) {
                this.updateShare(G$VJ203.invite, G$VJ203.invite_type, G$VJ203.is_new, data.roleid, data.serverid, G$VJ203.scene);
            }

            hortorSdk.checkSwitches({ switches: [m[28409]] }).then(res => {
                console.log(m[28494], res);

                var show_pay = 0;
                if (res.iospay) {
                    show_pay = 1;
                }

                callback && callback({ 'show_pay': show_pay });
            }).catch(err => {
                console.log(`[SDK]获取支付开关返回失败，errCode=${err.errCode} errMsg=${err.errMsg}`);
                callback && callback({ 'show_pay': 0 });
            });
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(m[28430]);
            var username = wx.getStorageSync(m[28431]);
            var plat_session_key = wx.getStorageSync(m[28432]);
            var postData = {};
            postData[m[28485]] = uid;
            postData[m[28486]] = username;
            postData[m[10166]] = data.roleid;
            postData[m[28487]] = data.rolelevel;
            postData[m[28488]] = data.rolename;
            postData[m[10787]] = data.serverid;

            if (data.roleid && data.serverid) {
                G$V3J02 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(m[28495], postData);

            var roleInfo = {
                roleId: data.roleid,
                roleName: data.rolename,
                serverId: data.serverid,
                level: data.rolelevel,
                roleCtime: data.rolecreatetime ? data.rolecreatetime * 1000 : 0,
                id: plat_session_key.uniqueId
            };

            hortorSdk.setGameUserInfo(roleInfo);

            if (data.rolelevel >= 80) {
                this.roleCreateReport(1);
            }

            hortorSdk.checkSwitches({ switches: [m[28409]] }).then(res => {
                console.log(m[28494], res);

                var show_pay = 0;
                if (res.iospay) {
                    show_pay = 1;
                }

                callback && callback({ 'show_pay': show_pay });
            }).catch(err => {
                console.log(`[SDK]获取支付开关返回失败，errCode=${err.errCode} errMsg=${err.errMsg}`);
                callback && callback({ 'show_pay': 0 });
            });
        },

        //显示大天使图标
        // showHortorVip: function () {
        //     // 游戏登录成功后实例化 + 初始化 HortorVip：
        //     let hortorVip = new HortorVip();
        //     hortorVip.init({
        //         vipGameId: config.partner_game_id,     // 大使功能游戏id，跟平台游戏id保持一致；
        //         gameVersion: "1.0.905",    // 游戏版本
        //         env: "Prod",             // 运行环境 测试：Test， 正式：Prod
        //         userId: partner_user_data.uniqueIdNew,          // 登录后返回的用户平台 uniqueId，没有时可以使用 openId
        //         icon: {                  // 悬浮图标默认位置，若不设置默认右上角
        //             posX: -1, // x轴位置
        //             posY: -1, // y轴位置
        //         },
        //         defShowIcon: true,        // 是否默认展示 icon，默认 true
        //         onLoad: (err, data) => {  // vip 数据加载完时触发
        //             console.log('vip data loaded---', err, data);
        //         },
        //     });
        // },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
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
            var uuid = wx.getStorageSync(m[28405]);
            var idfv = wx.getStorageSync(m[28406]);
            var ad_code = wx.getStorageSync(m[28407]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: m[28496],
                net_type: system.wifiSignal == 0 ? '4G' : m[28497],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == m[27901] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(m[28498] + type);
            console.log(public_data);

            wx.request({
                url: m[24448] + HOST + m[28499] + type + m[28500] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        }
    };
}

function run(method, data, callback) {
    method in G$V3J20 && G$V3J20[method](data, callback);
}

exports.init = function (data, callback) {
    run(m[359], data, callback);
};

exports.login = function (callback) {
    run(m[28007], '', callback);
};

exports.pay = function (data, callback) {
    run(m[28056], data, callback);
};

exports.openService = function () {
    run(m[23939]);
};

exports.goCustomer = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(m[28068], data);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(m[28063], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra.rolepower
    };

    run('logEnterGame', data, extra.callback);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower : ""
    };
    run(m[28066], data, extra ? extra.callback : null);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(m[28067], data);
};

exports.msgCheck = function (data, callback) {
    run(m[11345], data, callback);
};

exports.downloadClient = function () {
    run(m[28501]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(m[28502]);
};

// exports.showHortorVip = function () {
//     run('showHortorVip');
// };

exports.roleCreateReport = function (is_valid) {
    run(m[28503], is_valid);
};

exports.isSubscribe = function (callback) {
    run(m[28504], callback);
};

exports.is_authorize = function (callback) {
    run(m[28505], callback);
};

exports.go_authorize = function (data, callback) {
    run(m[28506], data, callback);
};

exports.hideUserInfoBtn = function (callback) {
    run(m[28507], callback);
};