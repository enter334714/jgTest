var m = wx.$g;
let hortor = require(m[29653]);
let hortorSdk = hortor.sdk; //核心业务SDK
let wallSDK = hortorSdk.wallSDK;
let partner_config = hortor.config; //SDK配置
let wxapm = hortor.wxapm; //应用监控SDK

// 引入VIP大使
// import HortorVip from "../utils/HortorVipSdk/hortorVip";

//TODO 替换对应参数
var config = {
    game_id: m[29654],
    game_pkg: m[29655], //疯狂微信小游戏-无双服-星聚
    partner_label: m[29656],
    partner_id: m[29657],
    game_ver: m[29658],
    partner_game_id: m[29659],
    is_auth: false //授权登录
};
window.config = config;
var partner_user_data = {};
var G$V3J20 = G$VJ023();
var HOST = m[29660];
var G$V3J02 = null;
var G$VJ203 = null;
var system = wx.getSystemInfoSync();
var device = system.platform == m[29102] ? m[29102] : m[29101];
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
            console.log(m[29661]);
            var self = this;

            var uuid = wx.getStorageSync(m[29662]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(m[29662], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(m[29663]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(m[29663], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(m[29664], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(m[732], data);
            //这里修改了配置版本号
            partner_config[m[29665]] && (partner_config[m[29665]] = ops.game_ver);
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
                    hortorSdk.checkSwitches({ switches: [m[29297], m[29666], m[29667], m[29668]] }).then(res => {
                        console.log(m[29669], res);
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
            console.log(m[29670]);
            console.log(m[29671] + Date.now());
            var that = this;
            callbacks[m[29209]] = typeof callback == m[351] ? callback : null;
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
                        if (res.authSetting[m[29672]]) {
                            //已授权
                            hortorSdk.login().then(res => {
                                console.log(m[29673] + JSON.stringify(res));
                                that.do_login(res);
                            }).catch(err => {
                                console.log(m[29674], err);
                            });
                        } else {
                            const userInfoBtn = hortorSdk.createGetUserInfoBtn({
                                type: m[4658],
                                text: m[29675],
                                style: {
                                    left: btn_left,
                                    top: btn_top,
                                    width: btn_width,
                                    height: btn_height,
                                    lineHeight: btn_height,
                                    backgroundColor: m[29676],
                                    color: m[4682],
                                    textAlign: m[1969],
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
                                        console.log(m[29677]);
                                        // TODO: 重新登录
                                        hortorSdk.login().then(res => {
                                            console.log(m[29673] + JSON.stringify(res));
                                            that.do_login(res);
                                        }).catch(err => {
                                            console.log(m[29674], err);
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
                console.log(m[29678], res);
                this.do_login(res);
            }).catch(err => {
                console.log(m[29679], err);
                callbacks[m[29209]] && callbacks[m[29209]](1, { errMsg: m[29680] });
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[m[29681]] = info.encryptUserInfo ? info.encryptUserInfo : info.userInfo;
            public_data[m[29682]] = info.timestamp;
            public_data[m[11417]] = info.sign;
            public_data[m[29683]] = 1;
            if (G$VJ203 && typeof G$VJ203 == m[269]) {
                for (var key in G$VJ203) {
                    public_data[key] = G$VJ203[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: m[25496] + HOST + m[29684],
                method: m[29181],
                dataType: m[476],
                header: {
                    'content-type': m[29329] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(m[29685] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.uid = data.data.openid;
                            partner_user_data.uniqueIdNew = data.data.ext.uniqueId;

                            try {
                                wx.setStorageSync(m[29686], data.data.sdk_token);
                                wx.setStorageSync(m[29687], data.data.user_id);
                                wx.setStorageSync(m[29688], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(m[29689], data.data.ext);
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
                            callbacks[m[29209]] && callbacks[m[29209]](0, userData);
                        } else {
                            callbacks[m[29209]] && callbacks[m[29209]](1, { type: m[29690], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        hortorSdk.setGameUserInfo();

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(m[29691], function (data) {
                            console.log(m[29692]);
                            var shareType = m[271];
                            var shareData = hortorSdk.getShareData({
                                shareType: shareType
                            });
                            console.log(m[29693], JSON.stringify(shareData));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(m[29691]);
                                hortorSdk.sharePointShow(shareType);
                                return {
                                    title: shareData.title,
                                    imageUrl: shareData.imageUrl,
                                    query: shareData.query + '&' + data.query
                                };
                            });
                        });
                    } else {
                        callbacks[m[29209]] && callbacks[m[29209]](1, { type: m[29690], errMsg: m[29694], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(m[29695]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[m[29209]] && callbacks[m[29209]](1, { type: m[29696], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(m[29697]);

                    callbacks[m[29209]] && callbacks[m[29209]](1, { type: m[29698], errMsg: m[29699], time: Date.now() - lastTime });
                    callbacks[m[29209]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[m[29297]] = typeof callback == m[351] ? callback : null;
            var type = data.type || m[29297];
            console.log(m[29700] + type);
            var self = this;

            this.getShareInfo(type, function (data) {
                var shareType = m[29701];
                var shareData = hortorSdk.getShareData({
                    shareType: shareType
                });
                console.log(m[29702], shareData);
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
            var sdk_token = wx.getStorageSync(m[29686]);
            wx.request({
                url: m[25496] + HOST + m[29703],
                method: m[29181],
                dataType: m[476],
                header: {
                    'content-type': m[29329] // 默认值
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
            console.log(m[29704]);
            wx.getSetting({
                success: function (res) {
                    if (res.authSetting[m[29672]]) {
                        callback(1);
                    } else {
                        callback(0);
                    }
                }
            });
        },

        go_authorize: function (data, callback) {
            console.log(m[29705]);
            userInfoBtn = hortorSdk.createGetUserInfoBtn({
                type: m[4930],
                image: m[29706],
                style: {
                    left: data.left,
                    top: data.top,
                    width: data.width,
                    height: data.height,
                    lineHeight: data.height,
                    textAlign: m[1969],
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
                        console.log(m[29677]);
                        hortorSdk.updateUserInfo().then(res => {
                            console.log(m[29707], res);
                            callback(1);
                        }).catch(err => {
                            console.log(m[29708], err);
                            callback(0);
                        });
                    } else {
                        // 拒绝授权
                        console.log(m[29709]);
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
                    console.log(m[29710], res);
                },
                fail: res => {
                    console.log(m[29711], res);
                }
            });
        },

        goCustomer: function (data) {
            hortorSdk.goCustomer({
                playerId: data.roleid,
                playerName: data.rolename
            }).then(res => {
                console.log(m[29712]);
            }).catch(err => {
                console.log(m[29713], err);
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(m[29714]);
            callbacks[m[7286]] = typeof callback == m[351] ? callback : null;
            var sdk_token = wx.getStorageSync(m[29686]);
            wx.request({
                url: m[25496] + HOST + '/game/min/?ac=checkGameVersion',
                method: m[29181],
                dataType: m[476],
                header: {
                    'content-type': m[29329] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(m[29715]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[m[7286]] && callbacks[m[7286]](data.data);
                        } else {
                            callbacks[m[7286]] && callbacks[m[7286]]({ develop: 0 });
                        }
                    } else {
                        callbacks[m[7286]] && callbacks[m[7286]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(m[29716]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[m[7286]] && callbacks[m[7286]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(m[29717]);
                    callbacks[m[7286]] && callbacks[m[7286]]({ develop: 0 });
                    callbacks[m[7286]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(m[29718]);
            var sdk_token = wx.getStorageSync(m[29686]);
            wx.request({
                url: m[25496] + HOST + m[29719],
                method: m[29181],
                dataType: m[476],
                header: {
                    'content-type': m[29329] // 默认值
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
                    console.log(m[29720]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[m[29297]] && callbacks[m[29297]](1, {
                                errMsg: m[29721] + data.msg
                            });
                        }
                    } else {
                        callbacks[m[29297]] && callbacks[m[29297]](1, {
                            errMsg: m[29722]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(m[29723]);
            var sdk_token = wx.getStorageSync(m[29686]);
            wx.request({
                url: m[25496] + HOST + m[29724],
                method: m[29181],
                dataType: m[476],
                header: {
                    'content-type': m[29329] // 默认值
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
                    console.log(m[29725]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(m[29726]);
            var sdk_token = wx.getStorageSync(m[29686]);

            wx.request({
                url: m[25496] + HOST + m[29727] + config.partner_id + '/' + config.game_pkg,
                method: m[29181],
                dataType: m[476],
                header: {
                    'content-type': m[29329] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content,
                    uId: partner_user_data.uid
                },
                success: function (res) {
                    console.log(m[29728]);
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        isSubscribe: function (callback) {
            console.log(m[29729]);
            var ext = wx.getStorageSync(m[29689]);
            wx.request({
                url: m[25496] + HOST + m[29730] + config.partner_id + '/' + config.game_pkg,
                method: m[29181],
                dataType: m[476],
                header: {
                    'content-type': m[29329] // 默认值
                },
                data: {
                    openid: ext.uniqueId
                },
                success: function (res) {
                    console.log(m[29731], res);
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
            console.log(m[29732]);
            console.log(data);

            var self = this;
            callbacks[m[29281]] = typeof callback == m[351] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(m[29686]);
            var session_key = wx.getStorageSync(m[29689]);
            if (!sdk_token && !session_key) {
                callbacks[m[29281]] && callbacks[m[29281]](1, {
                    errMsg: m[29733]
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
            public_data[m[29734]] = JSON.stringify(order_data);
            public_data[m[29683]] = 1;

            //发起网络请求
            wx.request({
                url: m[25496] + HOST + m[29735],
                method: m[29181],
                dataType: m[476],
                header: {
                    'content-type': m[29329] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(m[29736]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(m[29737] + JSON.stringify(data.data.pay_data));
                            if (device === m[29101]) {
                                console.log(m[29738]);
                                hortorSdk.jumpPay(data.data.pay_data).then(res => {
                                    console.log(m[29712]);
                                }).catch(err => {
                                    console.log(m[29713], err);
                                    callbacks[m[29281]] && callbacks[m[29281]](1, {
                                        errMsg: err.errMsg
                                    });
                                });
                            } else {
                                console.log(m[29739]);
                                hortorSdk.midasPay(data.data.pay_data).then(res => {
                                    console.log(m[29740]);
                                }).catch(err => {
                                    console.log(m[29741], err);
                                    callbacks[m[29281]] && callbacks[m[29281]](1, {
                                        errMsg: err.errMsg
                                    });
                                });
                            }
                        } else {
                            callbacks[m[29281]] && callbacks[m[29281]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[m[29209]] && callbacks[m[29209]](1, {
                            errMsg: m[29694]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(m[29687]);
            var username = wx.getStorageSync(m[29688]);
            var plat_session_key = wx.getStorageSync(m[29689]);
            var postData = {};
            postData[m[29742]] = uid;
            postData[m[29743]] = username;
            postData[m[10808]] = data.roleid;
            postData[m[29744]] = data.rolelevel;
            postData[m[29745]] = data.rolename;
            postData[m[11432]] = data.serverid;

            if (data.roleid && data.serverid) {
                G$V3J02 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(m[270], postData);

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
                url: m[25496] + HOST + m[29746] + config.partner_id + '/' + config.game_pkg,
                method: m[29181],
                dataType: m[476],
                header: {
                    'content-type': m[29329] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    uniqueId: partner_user_data.uid,
                    is_valid: is_valid === 1 ? 1 : 0
                },
                success: function (res) {
                    console.log(m[29747], res);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(m[29687]);
            var username = wx.getStorageSync(m[29688]);
            var plat_session_key = wx.getStorageSync(m[29689]);
            var postData = {};
            postData[m[29742]] = uid;
            postData[m[29743]] = username;
            postData[m[10808]] = data.roleid;
            postData[m[29744]] = data.rolelevel;
            postData[m[29745]] = data.rolename;
            postData[m[11432]] = data.serverid;

            if (data.roleid && data.serverid) {
                G$V3J02 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            // hortorSdk.checkSwitches(['antiaddicted'], {}).then(res => {
            hortorSdk.checkSwitches({ switches: [m[29748]] }).then(res => {
                console.log(m[29749], res);
                if (res.antiaddicted) {
                    //防沉迷
                    hortorSdk.checkRest(() => {
                        console.log(m[29750]);
                    });
                }
            }).catch(err => {
                console.log(`[SDK]检查防沉迷开关返回失败，errCode=${err.errCode} errMsg=${err.errMsg}`);
            });

            this.log(m[5927], postData);

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

            hortorSdk.checkSwitches({ switches: [m[29666]] }).then(res => {
                console.log(m[29751], res);

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
            var uid = wx.getStorageSync(m[29687]);
            var username = wx.getStorageSync(m[29688]);
            var plat_session_key = wx.getStorageSync(m[29689]);
            var postData = {};
            postData[m[29742]] = uid;
            postData[m[29743]] = username;
            postData[m[10808]] = data.roleid;
            postData[m[29744]] = data.rolelevel;
            postData[m[29745]] = data.rolename;
            postData[m[11432]] = data.serverid;

            if (data.roleid && data.serverid) {
                G$V3J02 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(m[29752], postData);

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

            hortorSdk.checkSwitches({ switches: [m[29666]] }).then(res => {
                console.log(m[29751], res);

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
            var uuid = wx.getStorageSync(m[29662]);
            var idfv = wx.getStorageSync(m[29663]);
            var ad_code = wx.getStorageSync(m[29664]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: m[29753],
                net_type: system.wifiSignal == 0 ? '4G' : m[29754],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == m[29102] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(m[29755] + type);
            console.log(public_data);

            wx.request({
                url: m[25496] + HOST + m[29756] + type + m[29757] + encodeURIComponent(JSON.stringify(public_data))
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
    run(m[806], data, callback);
};

exports.login = function (callback) {
    run(m[29209], '', callback);
};

exports.pay = function (data, callback) {
    run(m[29281], data, callback);
};

exports.openService = function () {
    run(m[23619]);
};

exports.goCustomer = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(m[29298], data);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(m[29293], data);
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
    run(m[29296], data, extra ? extra.callback : null);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(m[29297], data);
};

exports.msgCheck = function (data, callback) {
    run(m[12058], data, callback);
};

exports.downloadClient = function () {
    run(m[29758]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(m[29759]);
};

// exports.showHortorVip = function () {
//     run('showHortorVip');
// };

exports.roleCreateReport = function (is_valid) {
    run(m[29760], is_valid);
};

exports.isSubscribe = function (callback) {
    run(m[29761], callback);
};

exports.is_authorize = function (callback) {
    run(m[29762], callback);
};

exports.go_authorize = function (data, callback) {
    run(m[29763], data, callback);
};

exports.hideUserInfoBtn = function (callback) {
    run(m[29764], callback);
};