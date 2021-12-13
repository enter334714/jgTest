var m = wx.$g;
let hortor = require(m[27822]);
let hortorSdk = hortor.sdk; //核心业务SDK
let wallSDK = hortorSdk.wallSDK;
let partner_config = hortor.config; //SDK配置
let wxapm = hortor.wxapm; //应用监控SDK

// 引入VIP大使
// import HortorVip from "../utils/HortorVipSdk/hortorVip";

//TODO 替换对应参数
var config = {
    game_id: m[27823],
    game_pkg: m[27824], //疯狂微信小游戏-无双服-星聚
    partner_label: m[27825],
    partner_id: m[27826],
    game_ver: "7.0.14",
    partner_game_id: m[27828],
    is_auth: false //授权登录
};
window.config = config;
var partner_user_data = {};
var G$V3J20 = G$VJ023();
var HOST = m[27829];
var G$V3J02 = null;
var G$VJ203 = null;
var system = wx.getSystemInfoSync();
var device = system.platform == m[27331] ? m[27331] : m[27330];
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
            console.log(m[27830]);
            var self = this;

            var uuid = wx.getStorageSync(m[27831]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(m[27831], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(m[27832]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(m[27832], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(m[27833], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(m[275], data);
            //这里修改了配置版本号
            partner_config[m[27834]] && (partner_config[m[27834]] = ops.game_ver);
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
                    hortorSdk.checkSwitches({ switches: [m[27496], m[27835], m[27836], m[27837]] }).then(res => {
                        console.log(m[27838], res);
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
            console.log(m[27839]);
            console.log(m[27840] + Date.now());
            var that = this;
            callbacks[m[27436]] = typeof callback == m[27173] ? callback : null;
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
                        if (res.authSetting[m[27841]]) {
                            //已授权
                            hortorSdk.login().then(res => {
                                console.log(m[27842] + JSON.stringify(res));
                                that.do_login(res);
                            }).catch(err => {
                                console.log(m[27843], err);
                            });
                        } else {
                            const userInfoBtn = hortorSdk.createGetUserInfoBtn({
                                type: m[4030],
                                text: m[27844],
                                style: {
                                    left: btn_left,
                                    top: btn_top,
                                    width: btn_width,
                                    height: btn_height,
                                    lineHeight: btn_height,
                                    backgroundColor: m[27845],
                                    color: m[4053],
                                    textAlign: m[1465],
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
                                        console.log(m[27846]);
                                        // TODO: 重新登录
                                        hortorSdk.login().then(res => {
                                            console.log(m[27842] + JSON.stringify(res));
                                            that.do_login(res);
                                        }).catch(err => {
                                            console.log(m[27843], err);
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
                console.log(m[27847], res);
                this.do_login(res);
            }).catch(err => {
                console.log(m[27848], err);
                callbacks[m[27436]] && callbacks[m[27436]](1, { errMsg: m[27849] });
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[m[27850]] = info.encryptUserInfo ? info.encryptUserInfo : info.userInfo;
            public_data[m[27851]] = info.timestamp;
            public_data[m[10575]] = info.sign;
            public_data[m[27852]] = 1;
            if (G$VJ203 && typeof G$VJ203 == m[270]) {
                for (var key in G$VJ203) {
                    public_data[key] = G$VJ203[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: m[23924] + HOST + m[27853],
                method: m[27408],
                dataType: m[5411],
                header: {
                    'content-type': m[27525] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(m[27854] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.uid = data.data.openid;
                            partner_user_data.uniqueIdNew = data.data.ext.uniqueId;

                            try {
                                wx.setStorageSync(m[27855], data.data.sdk_token);
                                wx.setStorageSync(m[27856], data.data.user_id);
                                wx.setStorageSync(m[27857], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(m[27858], data.data.ext);
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
                            callbacks[m[27436]] && callbacks[m[27436]](0, userData);
                        } else {
                            callbacks[m[27436]] && callbacks[m[27436]](1, { type: m[27859], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        hortorSdk.setGameUserInfo();

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(m[27860], function (data) {
                            console.log(m[27861]);
                            var shareType = m[319];
                            var shareData = hortorSdk.getShareData({
                                shareType: shareType
                            });
                            console.log(m[27862], JSON.stringify(shareData));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(m[27860]);
                                hortorSdk.sharePointShow(shareType);
                                return {
                                    title: shareData.title,
                                    imageUrl: shareData.imageUrl,
                                    query: shareData.query + '&' + data.query
                                };
                            });
                        });
                    } else {
                        callbacks[m[27436]] && callbacks[m[27436]](1, { type: m[27859], errMsg: m[27863], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(m[27864]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[m[27436]] && callbacks[m[27436]](1, { type: m[27865], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(m[27866]);

                    callbacks[m[27436]] && callbacks[m[27436]](1, { type: m[27867], errMsg: m[27868], time: Date.now() - lastTime });
                    callbacks[m[27436]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[m[27496]] = typeof callback == m[27173] ? callback : null;
            var type = data.type || m[27496];
            console.log(m[27869] + type);
            var self = this;

            this.getShareInfo(type, function (data) {
                var shareType = m[27870];
                var shareData = hortorSdk.getShareData({
                    shareType: shareType
                });
                console.log(m[27871], shareData);
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
            var sdk_token = wx.getStorageSync(m[27855]);
            wx.request({
                url: m[23924] + HOST + m[27872],
                method: m[27408],
                dataType: m[5411],
                header: {
                    'content-type': m[27525] // 默认值
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
            console.log(m[27873]);
            wx.getSetting({
                success: function (res) {
                    if (res.authSetting[m[27841]]) {
                        callback(1);
                    } else {
                        callback(0);
                    }
                }
            });
        },

        go_authorize: function (data, callback) {
            console.log(m[27874]);
            userInfoBtn = hortorSdk.createGetUserInfoBtn({
                type: m[4295],
                image: m[27875],
                style: {
                    left: data.left,
                    top: data.top,
                    width: data.width,
                    height: data.height,
                    lineHeight: data.height,
                    textAlign: m[1465],
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
                        console.log(m[27846]);
                        hortorSdk.updateUserInfo().then(res => {
                            console.log(m[27876], res);
                            callback(1);
                        }).catch(err => {
                            console.log(m[27877], err);
                            callback(0);
                        });
                    } else {
                        // 拒绝授权
                        console.log(m[27878]);
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
                    console.log(m[27879], res);
                },
                fail: res => {
                    console.log(m[27880], res);
                }
            });
        },

        goCustomer: function (data) {
            hortorSdk.goCustomer({
                playerId: data.roleid,
                playerName: data.rolename
            }).then(res => {
                console.log(m[27881]);
            }).catch(err => {
                console.log(m[27882], err);
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(m[27883]);
            callbacks[m[6606]] = typeof callback == m[27173] ? callback : null;
            var sdk_token = wx.getStorageSync(m[27855]);
            wx.request({
                url: m[23924] + HOST + '/game/min/?ac=checkGameVersion',
                method: m[27408],
                dataType: m[5411],
                header: {
                    'content-type': m[27525] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(m[27884]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[m[6606]] && callbacks[m[6606]](data.data);
                        } else {
                            callbacks[m[6606]] && callbacks[m[6606]]({ develop: 0 });
                        }
                    } else {
                        callbacks[m[6606]] && callbacks[m[6606]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(m[27885]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[m[6606]] && callbacks[m[6606]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(m[27886]);
                    callbacks[m[6606]] && callbacks[m[6606]]({ develop: 0 });
                    callbacks[m[6606]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(m[27887]);
            var sdk_token = wx.getStorageSync(m[27855]);
            wx.request({
                url: m[23924] + HOST + m[27888],
                method: m[27408],
                dataType: m[5411],
                header: {
                    'content-type': m[27525] // 默认值
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
                    console.log(m[27889]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[m[27496]] && callbacks[m[27496]](1, {
                                errMsg: m[27890] + data.msg
                            });
                        }
                    } else {
                        callbacks[m[27496]] && callbacks[m[27496]](1, {
                            errMsg: m[27891]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(m[27892]);
            var sdk_token = wx.getStorageSync(m[27855]);
            wx.request({
                url: m[23924] + HOST + m[27893],
                method: m[27408],
                dataType: m[5411],
                header: {
                    'content-type': m[27525] // 默认值
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
                    console.log(m[27894]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(m[27895]);
            var sdk_token = wx.getStorageSync(m[27855]);

            wx.request({
                url: m[23924] + HOST + m[27896] + config.partner_id + '/' + config.game_pkg,
                method: m[27408],
                dataType: m[5411],
                header: {
                    'content-type': m[27525] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content,
                    uId: partner_user_data.uid
                },
                success: function (res) {
                    console.log(m[27897]);
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        isSubscribe: function (callback) {
            console.log(m[27898]);
            var ext = wx.getStorageSync(m[27858]);
            wx.request({
                url: m[23924] + HOST + m[27899] + config.partner_id + '/' + config.game_pkg,
                method: m[27408],
                dataType: m[5411],
                header: {
                    'content-type': m[27525] // 默认值
                },
                data: {
                    openid: ext.uniqueId
                },
                success: function (res) {
                    console.log(m[27900], res);
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
            console.log(m[27901]);
            console.log(data);

            var self = this;
            callbacks[m[27485]] = typeof callback == m[27173] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(m[27855]);
            var session_key = wx.getStorageSync(m[27858]);
            if (!sdk_token && !session_key) {
                callbacks[m[27485]] && callbacks[m[27485]](1, {
                    errMsg: m[27902]
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
            public_data[m[27903]] = JSON.stringify(order_data);
            public_data[m[27852]] = 1;

            //发起网络请求
            wx.request({
                url: m[23924] + HOST + m[27904],
                method: m[27408],
                dataType: m[5411],
                header: {
                    'content-type': m[27525] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(m[27905]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(m[27906] + JSON.stringify(data.data.pay_data));
                            if (device === m[27330]) {
                                console.log(m[27907]);
                                hortorSdk.jumpPay(data.data.pay_data).then(res => {
                                    console.log(m[27881]);
                                }).catch(err => {
                                    console.log(m[27882], err);
                                    callbacks[m[27485]] && callbacks[m[27485]](1, {
                                        errMsg: err.errMsg
                                    });
                                });
                            } else {
                                console.log(m[27908]);
                                hortorSdk.midasPay(data.data.pay_data).then(res => {
                                    console.log(m[27909]);
                                }).catch(err => {
                                    console.log(m[27910], err);
                                    callbacks[m[27485]] && callbacks[m[27485]](1, {
                                        errMsg: err.errMsg
                                    });
                                });
                            }
                        } else {
                            callbacks[m[27485]] && callbacks[m[27485]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[m[27436]] && callbacks[m[27436]](1, {
                            errMsg: m[27863]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(m[27856]);
            var username = wx.getStorageSync(m[27857]);
            var plat_session_key = wx.getStorageSync(m[27858]);
            var postData = {};
            postData[m[27911]] = uid;
            postData[m[27912]] = username;
            postData[m[9971]] = data.roleid;
            postData[m[27913]] = data.rolelevel;
            postData[m[27914]] = data.rolename;
            postData[m[10590]] = data.serverid;

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
                url: m[23924] + HOST + m[27915] + config.partner_id + '/' + config.game_pkg,
                method: m[27408],
                dataType: m[5411],
                header: {
                    'content-type': m[27525] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    uniqueId: partner_user_data.uid,
                    is_valid: is_valid === 1 ? 1 : 0
                },
                success: function (res) {
                    console.log(m[27916], res);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(m[27856]);
            var username = wx.getStorageSync(m[27857]);
            var plat_session_key = wx.getStorageSync(m[27858]);
            var postData = {};
            postData[m[27911]] = uid;
            postData[m[27912]] = username;
            postData[m[9971]] = data.roleid;
            postData[m[27913]] = data.rolelevel;
            postData[m[27914]] = data.rolename;
            postData[m[10590]] = data.serverid;

            if (data.roleid && data.serverid) {
                G$V3J02 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            // hortorSdk.checkSwitches(['antiaddicted'], {}).then(res => {
            hortorSdk.checkSwitches({ switches: [m[27917]] }).then(res => {
                console.log(m[27918], res);
                if (res.antiaddicted) {
                    //防沉迷
                    hortorSdk.checkRest(() => {
                        console.log(m[27919]);
                    });
                }
            }).catch(err => {
                console.log(`[SDK]检查防沉迷开关返回失败，errCode=${err.errCode} errMsg=${err.errMsg}`);
            });

            this.log(m[5293], postData);

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

            hortorSdk.checkSwitches({ switches: [m[27835]] }).then(res => {
                console.log(m[27920], res);

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
            var uid = wx.getStorageSync(m[27856]);
            var username = wx.getStorageSync(m[27857]);
            var plat_session_key = wx.getStorageSync(m[27858]);
            var postData = {};
            postData[m[27911]] = uid;
            postData[m[27912]] = username;
            postData[m[9971]] = data.roleid;
            postData[m[27913]] = data.rolelevel;
            postData[m[27914]] = data.rolename;
            postData[m[10590]] = data.serverid;

            if (data.roleid && data.serverid) {
                G$V3J02 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(m[27921], postData);

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

            hortorSdk.checkSwitches({ switches: [m[27835]] }).then(res => {
                console.log(m[27920], res);

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
            var uuid = wx.getStorageSync(m[27831]);
            var idfv = wx.getStorageSync(m[27832]);
            var ad_code = wx.getStorageSync(m[27833]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: m[27922],
                net_type: system.wifiSignal == 0 ? '4G' : m[27923],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == m[27331] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(m[27924] + type);
            console.log(public_data);

            wx.request({
                url: m[23924] + HOST + m[27925] + type + m[27926] + encodeURIComponent(JSON.stringify(public_data))
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
    run(m[355], data, callback);
};

exports.login = function (callback) {
    run(m[27436], '', callback);
};

exports.pay = function (data, callback) {
    run(m[27485], data, callback);
};

exports.openService = function () {
    run(m[23407]);
};

exports.goCustomer = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(m[27497], data);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(m[27492], data);
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
    run(m[27495], data, extra ? extra.callback : null);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(m[27496], data);
};

exports.msgCheck = function (data, callback) {
    run(m[11119], data, callback);
};

exports.downloadClient = function () {
    run(m[27927]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(m[27928]);
};

// exports.showHortorVip = function () {
//     run('showHortorVip');
// };

exports.roleCreateReport = function (is_valid) {
    run(m[27929], is_valid);
};

exports.isSubscribe = function (callback) {
    run(m[27930], callback);
};

exports.is_authorize = function (callback) {
    run(m[27931], callback);
};

exports.go_authorize = function (data, callback) {
    run(m[27932], data, callback);
};

exports.hideUserInfoBtn = function (callback) {
    run(m[27933], callback);
};