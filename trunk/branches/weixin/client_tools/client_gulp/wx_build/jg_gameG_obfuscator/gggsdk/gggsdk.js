var m = wx.$g;
let hortor = require(m[29337]);
let hortorSdk = hortor.sdk; //核心业务SDK
let wallSDK = hortorSdk.wallSDK;
let partner_config = hortor.config; //SDK配置
let wxapm = hortor.wxapm; //应用监控SDK

// 引入VIP大使
// import HortorVip from "../utils/HortorVipSdk/hortorVip";

//TODO 替换对应参数
var config = {
    game_id: m[29338],
    game_pkg: m[29339], //疯狂微信小游戏-无双服-星聚
    partner_label: m[29340],
    partner_id: m[29341],
    game_ver: m[29342],
    partner_game_id: m[29343],
    is_auth: false //授权登录
};
window.config = config;
var partner_user_data = {};
var G$V3J20 = G$VJ023();
var HOST = m[29344];
var G$V3J02 = null;
var G$VJ203 = null;
var system = wx.getSystemInfoSync();
var device = system.platform == m[28405] ? m[28405] : m[28404];
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
            console.log(m[29345]);
            var self = this;

            var uuid = wx.getStorageSync(m[29346]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(m[29346], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(m[29347]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(m[29347], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(m[29348], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(m[273], data);
            //这里修改了配置版本号
            partner_config[m[29349]] && (partner_config[m[29349]] = ops.game_ver);
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
                    hortorSdk.checkSwitches({ switches: [m[28602], m[29350], m[29351], m[29352]] }).then(res => {
                        console.log(m[29353], res);
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
            console.log(m[29354]);
            console.log(m[29355] + Date.now());
            var that = this;
            callbacks[m[28513]] = typeof callback == m[29200] ? callback : null;
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
                        if (res.authSetting[m[29356]]) {
                            //已授权
                            hortorSdk.login().then(res => {
                                console.log(m[29357] + JSON.stringify(res));
                                that.do_login(res);
                            }).catch(err => {
                                console.log(m[29358], err);
                            });
                        } else {
                            const userInfoBtn = hortorSdk.createGetUserInfoBtn({
                                type: m[4157],
                                text: m[29359],
                                style: {
                                    left: btn_left,
                                    top: btn_top,
                                    width: btn_width,
                                    height: btn_height,
                                    lineHeight: btn_height,
                                    backgroundColor: m[29360],
                                    color: m[4181],
                                    textAlign: m[1513],
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
                                        console.log(m[29361]);
                                        // TODO: 重新登录
                                        hortorSdk.login().then(res => {
                                            console.log(m[29357] + JSON.stringify(res));
                                            that.do_login(res);
                                        }).catch(err => {
                                            console.log(m[29358], err);
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
                console.log(m[29362], res);
                this.do_login(res);
            }).catch(err => {
                console.log(m[29363], err);
                callbacks[m[28513]] && callbacks[m[28513]](1, { errMsg: m[29364] });
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[m[29365]] = info.encryptUserInfo ? info.encryptUserInfo : info.userInfo;
            public_data[m[29366]] = info.timestamp;
            public_data[m[10924]] = info.sign;
            public_data[m[29367]] = 1;
            if (G$VJ203 && typeof G$VJ203 == m[268]) {
                for (var key in G$VJ203) {
                    public_data[key] = G$VJ203[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: m[24943] + HOST + m[29368],
                method: m[28484],
                dataType: m[5548],
                header: {
                    'content-type': m[28634] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(m[29369] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.uid = data.data.openid;
                            partner_user_data.uniqueIdNew = data.data.ext.uniqueId;

                            try {
                                wx.setStorageSync(m[29370], data.data.sdk_token);
                                wx.setStorageSync(m[29371], data.data.user_id);
                                wx.setStorageSync(m[29372], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(m[29373], data.data.ext);
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
                            callbacks[m[28513]] && callbacks[m[28513]](0, userData);
                        } else {
                            callbacks[m[28513]] && callbacks[m[28513]](1, { type: m[29374], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        hortorSdk.setGameUserInfo();

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(m[29375], function (data) {
                            console.log(m[29376]);
                            var shareType = m[317];
                            var shareData = hortorSdk.getShareData({
                                shareType: shareType
                            });
                            console.log(m[29377], JSON.stringify(shareData));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(m[29375]);
                                hortorSdk.sharePointShow(shareType);
                                return {
                                    title: shareData.title,
                                    imageUrl: shareData.imageUrl,
                                    query: shareData.query + '&' + data.query
                                };
                            });
                        });
                    } else {
                        callbacks[m[28513]] && callbacks[m[28513]](1, { type: m[29374], errMsg: m[29378], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(m[29379]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[m[28513]] && callbacks[m[28513]](1, { type: m[29380], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(m[29381]);

                    callbacks[m[28513]] && callbacks[m[28513]](1, { type: m[29382], errMsg: m[29383], time: Date.now() - lastTime });
                    callbacks[m[28513]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[m[28602]] = typeof callback == m[29200] ? callback : null;
            var type = data.type || m[28602];
            console.log(m[29384] + type);
            var self = this;

            this.getShareInfo(type, function (data) {
                var shareType = m[29385];
                var shareData = hortorSdk.getShareData({
                    shareType: shareType
                });
                console.log(m[29386], shareData);
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
            var sdk_token = wx.getStorageSync(m[29370]);
            wx.request({
                url: m[24943] + HOST + m[29387],
                method: m[28484],
                dataType: m[5548],
                header: {
                    'content-type': m[28634] // 默认值
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
            console.log(m[29388]);
            wx.getSetting({
                success: function (res) {
                    if (res.authSetting[m[29356]]) {
                        callback(1);
                    } else {
                        callback(0);
                    }
                }
            });
        },

        go_authorize: function (data, callback) {
            console.log(m[29389]);
            userInfoBtn = hortorSdk.createGetUserInfoBtn({
                type: m[4430],
                image: m[29390],
                style: {
                    left: data.left,
                    top: data.top,
                    width: data.width,
                    height: data.height,
                    lineHeight: data.height,
                    textAlign: m[1513],
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
                        console.log(m[29361]);
                        hortorSdk.updateUserInfo().then(res => {
                            console.log(m[29391], res);
                            callback(1);
                        }).catch(err => {
                            console.log(m[29392], err);
                            callback(0);
                        });
                    } else {
                        // 拒绝授权
                        console.log(m[29393]);
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
                    console.log(m[29394], res);
                },
                fail: res => {
                    console.log(m[29395], res);
                }
            });
        },

        goCustomer: function (data) {
            hortorSdk.goCustomer({
                playerId: data.roleid,
                playerName: data.rolename
            }).then(res => {
                console.log(m[29396]);
            }).catch(err => {
                console.log(m[29397], err);
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(m[29398]);
            callbacks[m[6797]] = typeof callback == m[29200] ? callback : null;
            var sdk_token = wx.getStorageSync(m[29370]);
            wx.request({
                url: m[24943] + HOST + '/game/min/?ac=checkGameVersion',
                method: m[28484],
                dataType: m[5548],
                header: {
                    'content-type': m[28634] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(m[29399]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[m[6797]] && callbacks[m[6797]](data.data);
                        } else {
                            callbacks[m[6797]] && callbacks[m[6797]]({ develop: 0 });
                        }
                    } else {
                        callbacks[m[6797]] && callbacks[m[6797]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(m[29400]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[m[6797]] && callbacks[m[6797]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(m[29401]);
                    callbacks[m[6797]] && callbacks[m[6797]]({ develop: 0 });
                    callbacks[m[6797]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(m[29402]);
            var sdk_token = wx.getStorageSync(m[29370]);
            wx.request({
                url: m[24943] + HOST + m[29403],
                method: m[28484],
                dataType: m[5548],
                header: {
                    'content-type': m[28634] // 默认值
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
                    console.log(m[29404]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[m[28602]] && callbacks[m[28602]](1, {
                                errMsg: m[29405] + data.msg
                            });
                        }
                    } else {
                        callbacks[m[28602]] && callbacks[m[28602]](1, {
                            errMsg: m[29406]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(m[29407]);
            var sdk_token = wx.getStorageSync(m[29370]);
            wx.request({
                url: m[24943] + HOST + m[29408],
                method: m[28484],
                dataType: m[5548],
                header: {
                    'content-type': m[28634] // 默认值
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
                    console.log(m[29409]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(m[29410]);
            var sdk_token = wx.getStorageSync(m[29370]);

            wx.request({
                url: m[24943] + HOST + m[29411] + config.partner_id + '/' + config.game_pkg,
                method: m[28484],
                dataType: m[5548],
                header: {
                    'content-type': m[28634] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content,
                    uId: partner_user_data.uid
                },
                success: function (res) {
                    console.log(m[29412]);
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        isSubscribe: function (callback) {
            console.log(m[29413]);
            var ext = wx.getStorageSync(m[29373]);
            wx.request({
                url: m[24943] + HOST + m[29414] + config.partner_id + '/' + config.game_pkg,
                method: m[28484],
                dataType: m[5548],
                header: {
                    'content-type': m[28634] // 默认值
                },
                data: {
                    openid: ext.uniqueId
                },
                success: function (res) {
                    console.log(m[29415], res);
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
            console.log(m[29416]);
            console.log(data);

            var self = this;
            callbacks[m[28586]] = typeof callback == m[29200] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(m[29370]);
            var session_key = wx.getStorageSync(m[29373]);
            if (!sdk_token && !session_key) {
                callbacks[m[28586]] && callbacks[m[28586]](1, {
                    errMsg: m[29417]
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
            public_data[m[29418]] = JSON.stringify(order_data);
            public_data[m[29367]] = 1;

            //发起网络请求
            wx.request({
                url: m[24943] + HOST + m[29419],
                method: m[28484],
                dataType: m[5548],
                header: {
                    'content-type': m[28634] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(m[29420]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(m[29421] + JSON.stringify(data.data.pay_data));
                            if (device === m[28404]) {
                                console.log(m[29422]);
                                hortorSdk.jumpPay(data.data.pay_data).then(res => {
                                    console.log(m[29396]);
                                }).catch(err => {
                                    console.log(m[29397], err);
                                    callbacks[m[28586]] && callbacks[m[28586]](1, {
                                        errMsg: err.errMsg
                                    });
                                });
                            } else {
                                console.log(m[29423]);
                                hortorSdk.midasPay(data.data.pay_data).then(res => {
                                    console.log(m[29424]);
                                }).catch(err => {
                                    console.log(m[29425], err);
                                    callbacks[m[28586]] && callbacks[m[28586]](1, {
                                        errMsg: err.errMsg
                                    });
                                });
                            }
                        } else {
                            callbacks[m[28586]] && callbacks[m[28586]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[m[28513]] && callbacks[m[28513]](1, {
                            errMsg: m[29378]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(m[29371]);
            var username = wx.getStorageSync(m[29372]);
            var plat_session_key = wx.getStorageSync(m[29373]);
            var postData = {};
            postData[m[29426]] = uid;
            postData[m[29427]] = username;
            postData[m[10317]] = data.roleid;
            postData[m[29428]] = data.rolelevel;
            postData[m[29429]] = data.rolename;
            postData[m[10939]] = data.serverid;

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
                url: m[24943] + HOST + m[29430] + config.partner_id + '/' + config.game_pkg,
                method: m[28484],
                dataType: m[5548],
                header: {
                    'content-type': m[28634] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    uniqueId: partner_user_data.uid,
                    is_valid: is_valid === 1 ? 1 : 0
                },
                success: function (res) {
                    console.log(m[29431], res);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(m[29371]);
            var username = wx.getStorageSync(m[29372]);
            var plat_session_key = wx.getStorageSync(m[29373]);
            var postData = {};
            postData[m[29426]] = uid;
            postData[m[29427]] = username;
            postData[m[10317]] = data.roleid;
            postData[m[29428]] = data.rolelevel;
            postData[m[29429]] = data.rolename;
            postData[m[10939]] = data.serverid;

            if (data.roleid && data.serverid) {
                G$V3J02 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            // hortorSdk.checkSwitches(['antiaddicted'], {}).then(res => {
            hortorSdk.checkSwitches({ switches: [m[29432]] }).then(res => {
                console.log(m[29433], res);
                if (res.antiaddicted) {
                    //防沉迷
                    hortorSdk.checkRest(() => {
                        console.log(m[29434]);
                    });
                }
            }).catch(err => {
                console.log(`[SDK]检查防沉迷开关返回失败，errCode=${err.errCode} errMsg=${err.errMsg}`);
            });

            this.log(m[5430], postData);

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

            hortorSdk.checkSwitches({ switches: [m[29350]] }).then(res => {
                console.log(m[29435], res);

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
            var uid = wx.getStorageSync(m[29371]);
            var username = wx.getStorageSync(m[29372]);
            var plat_session_key = wx.getStorageSync(m[29373]);
            var postData = {};
            postData[m[29426]] = uid;
            postData[m[29427]] = username;
            postData[m[10317]] = data.roleid;
            postData[m[29428]] = data.rolelevel;
            postData[m[29429]] = data.rolename;
            postData[m[10939]] = data.serverid;

            if (data.roleid && data.serverid) {
                G$V3J02 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(m[29436], postData);

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

            hortorSdk.checkSwitches({ switches: [m[29350]] }).then(res => {
                console.log(m[29435], res);

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
            var uuid = wx.getStorageSync(m[29346]);
            var idfv = wx.getStorageSync(m[29347]);
            var ad_code = wx.getStorageSync(m[29348]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: m[29437],
                net_type: system.wifiSignal == 0 ? '4G' : m[29438],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == m[28405] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(m[29439] + type);
            console.log(public_data);

            wx.request({
                url: m[24943] + HOST + m[29440] + type + m[29441] + encodeURIComponent(JSON.stringify(public_data))
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
    run(m[354], data, callback);
};

exports.login = function (callback) {
    run(m[28513], '', callback);
};

exports.pay = function (data, callback) {
    run(m[28586], data, callback);
};

exports.openService = function () {
    run(m[24417]);
};

exports.goCustomer = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(m[28603], data);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(m[28598], data);
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
    run(m[28601], data, extra ? extra.callback : null);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(m[28602], data);
};

exports.msgCheck = function (data, callback) {
    run(m[11555], data, callback);
};

exports.downloadClient = function () {
    run(m[29442]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(m[29443]);
};

// exports.showHortorVip = function () {
//     run('showHortorVip');
// };

exports.roleCreateReport = function (is_valid) {
    run(m[29444], is_valid);
};

exports.isSubscribe = function (callback) {
    run(m[29445], callback);
};

exports.is_authorize = function (callback) {
    run(m[29446], callback);
};

exports.go_authorize = function (data, callback) {
    run(m[29447], data, callback);
};

exports.hideUserInfoBtn = function (callback) {
    run(m[29448], callback);
};