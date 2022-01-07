var m = wx.$g;
let hortor = require(m[28256]);
let hortorSdk = hortor.sdk; //核心业务SDK
let wallSDK = hortorSdk.wallSDK;
let partner_config = hortor.config; //SDK配置
let wxapm = hortor.wxapm; //应用监控SDK

// 引入VIP大使
// import HortorVip from "../utils/HortorVipSdk/hortorVip";

//TODO 替换对应参数
var config = {
    game_id: m[28257],
    game_pkg: m[28258], //疯狂微信小游戏-无双服-星聚
    partner_label: m[28259],
    partner_id: m[28260],
    game_ver: m[28261],
    partner_game_id: m[28262],
    is_auth: false //授权登录
};
window.config = config;
var partner_user_data = {};
var G$V3J20 = G$VJ023();
var HOST = m[28263];
var G$V3J02 = null;
var G$VJ203 = null;
var system = wx.getSystemInfoSync();
var device = system.platform == m[27762] ? m[27762] : m[27761];
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
            console.log(m[28264]);
            var self = this;

            var uuid = wx.getStorageSync(m[28265]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(m[28265], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(m[28266]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(m[28266], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(m[28267], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(m[275], data);
            //这里修改了配置版本号
            partner_config[m[28268]] && (partner_config[m[28268]] = ops.game_ver);
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
                    hortorSdk.checkSwitches({ switches: [m[27928], m[28269], m[28270], m[28271]] }).then(res => {
                        console.log(m[28272], res);
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
            console.log(m[28273]);
            console.log(m[28274] + Date.now());
            var that = this;
            callbacks[m[27868]] = typeof callback == m[27604] ? callback : null;
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
                        if (res.authSetting[m[28275]]) {
                            //已授权
                            hortorSdk.login().then(res => {
                                console.log(m[28276] + JSON.stringify(res));
                                that.do_login(res);
                            }).catch(err => {
                                console.log(m[28277], err);
                            });
                        } else {
                            const userInfoBtn = hortorSdk.createGetUserInfoBtn({
                                type: m[4046],
                                text: m[28278],
                                style: {
                                    left: btn_left,
                                    top: btn_top,
                                    width: btn_width,
                                    height: btn_height,
                                    lineHeight: btn_height,
                                    backgroundColor: m[28279],
                                    color: m[4070],
                                    textAlign: m[1471],
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
                                        console.log(m[28280]);
                                        // TODO: 重新登录
                                        hortorSdk.login().then(res => {
                                            console.log(m[28276] + JSON.stringify(res));
                                            that.do_login(res);
                                        }).catch(err => {
                                            console.log(m[28277], err);
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
                console.log(m[28281], res);
                this.do_login(res);
            }).catch(err => {
                console.log(m[28282], err);
                callbacks[m[27868]] && callbacks[m[27868]](1, { errMsg: m[28283] });
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[m[28284]] = info.encryptUserInfo ? info.encryptUserInfo : info.userInfo;
            public_data[m[28285]] = info.timestamp;
            public_data[m[10735]] = info.sign;
            public_data[m[28286]] = 1;
            if (G$VJ203 && typeof G$VJ203 == m[270]) {
                for (var key in G$VJ203) {
                    public_data[key] = G$VJ203[key];
                }
            }

            var lastTime = Date.now();
            wx.request({
                url: m[24346] + HOST + m[28287],
                method: m[27840],
                dataType: m[5430],
                header: {
                    'content-type': m[27957] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(m[28288] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.uid = data.data.openid;
                            partner_user_data.uniqueIdNew = data.data.ext.uniqueId;

                            try {
                                wx.setStorageSync(m[28289], data.data.sdk_token);
                                wx.setStorageSync(m[28290], data.data.user_id);
                                wx.setStorageSync(m[28291], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(m[28292], data.data.ext);
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
                            callbacks[m[27868]] && callbacks[m[27868]](0, userData);
                        } else {
                            callbacks[m[27868]] && callbacks[m[27868]](1, { type: m[28293], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        hortorSdk.setGameUserInfo();

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(m[28294], function (data) {
                            console.log(m[28295]);
                            var shareType = m[319];
                            var shareData = hortorSdk.getShareData({
                                shareType: shareType
                            });
                            console.log(m[28296], JSON.stringify(shareData));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(m[28294]);
                                hortorSdk.sharePointShow(shareType);
                                return {
                                    title: shareData.title,
                                    imageUrl: shareData.imageUrl,
                                    query: shareData.query + '&' + data.query
                                };
                            });
                        });
                    } else {
                        callbacks[m[27868]] && callbacks[m[27868]](1, { type: m[28293], errMsg: m[28297], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(m[28298]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[m[27868]] && callbacks[m[27868]](1, { type: m[28299], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(m[28300]);

                    callbacks[m[27868]] && callbacks[m[27868]](1, { type: m[28301], errMsg: m[28302], time: Date.now() - lastTime });
                    callbacks[m[27868]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[m[27928]] = typeof callback == m[27604] ? callback : null;
            var type = data.type || m[27928];
            console.log(m[28303] + type);
            var self = this;

            this.getShareInfo(type, function (data) {
                var shareType = m[28304];
                var shareData = hortorSdk.getShareData({
                    shareType: shareType
                });
                console.log(m[28305], shareData);
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
            var sdk_token = wx.getStorageSync(m[28289]);
            wx.request({
                url: m[24346] + HOST + m[28306],
                method: m[27840],
                dataType: m[5430],
                header: {
                    'content-type': m[27957] // 默认值
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
            console.log(m[28307]);
            wx.getSetting({
                success: function (res) {
                    if (res.authSetting[m[28275]]) {
                        callback(1);
                    } else {
                        callback(0);
                    }
                }
            });
        },

        go_authorize: function (data, callback) {
            console.log(m[28308]);
            userInfoBtn = hortorSdk.createGetUserInfoBtn({
                type: m[4315],
                image: m[28309],
                style: {
                    left: data.left,
                    top: data.top,
                    width: data.width,
                    height: data.height,
                    lineHeight: data.height,
                    textAlign: m[1471],
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
                        console.log(m[28280]);
                        hortorSdk.updateUserInfo().then(res => {
                            console.log(m[28310], res);
                            callback(1);
                        }).catch(err => {
                            console.log(m[28311], err);
                            callback(0);
                        });
                    } else {
                        // 拒绝授权
                        console.log(m[28312]);
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
                    console.log(m[28313], res);
                },
                fail: res => {
                    console.log(m[28314], res);
                }
            });
        },

        goCustomer: function (data) {
            hortorSdk.goCustomer({
                playerId: data.roleid,
                playerName: data.rolename
            }).then(res => {
                console.log(m[28315]);
            }).catch(err => {
                console.log(m[28316], err);
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(m[28317]);
            callbacks[m[6632]] = typeof callback == m[27604] ? callback : null;
            var sdk_token = wx.getStorageSync(m[28289]);
            wx.request({
                url: m[24346] + HOST + '/game/min/?ac=checkGameVersion',
                method: m[27840],
                dataType: m[5430],
                header: {
                    'content-type': m[27957] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(m[28318]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[m[6632]] && callbacks[m[6632]](data.data);
                        } else {
                            callbacks[m[6632]] && callbacks[m[6632]]({ develop: 0 });
                        }
                    } else {
                        callbacks[m[6632]] && callbacks[m[6632]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(m[28319]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[m[6632]] && callbacks[m[6632]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(m[28320]);
                    callbacks[m[6632]] && callbacks[m[6632]]({ develop: 0 });
                    callbacks[m[6632]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(m[28321]);
            var sdk_token = wx.getStorageSync(m[28289]);
            wx.request({
                url: m[24346] + HOST + m[28322],
                method: m[27840],
                dataType: m[5430],
                header: {
                    'content-type': m[27957] // 默认值
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
                    console.log(m[28323]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[m[27928]] && callbacks[m[27928]](1, {
                                errMsg: m[28324] + data.msg
                            });
                        }
                    } else {
                        callbacks[m[27928]] && callbacks[m[27928]](1, {
                            errMsg: m[28325]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(m[28326]);
            var sdk_token = wx.getStorageSync(m[28289]);
            wx.request({
                url: m[24346] + HOST + m[28327],
                method: m[27840],
                dataType: m[5430],
                header: {
                    'content-type': m[27957] // 默认值
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
                    console.log(m[28328]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(m[28329]);
            var sdk_token = wx.getStorageSync(m[28289]);

            wx.request({
                url: m[24346] + HOST + m[28330] + config.partner_id + '/' + config.game_pkg,
                method: m[27840],
                dataType: m[5430],
                header: {
                    'content-type': m[27957] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content,
                    uId: partner_user_data.uid
                },
                success: function (res) {
                    console.log(m[28331]);
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        isSubscribe: function (callback) {
            console.log(m[28332]);
            var ext = wx.getStorageSync(m[28292]);
            wx.request({
                url: m[24346] + HOST + m[28333] + config.partner_id + '/' + config.game_pkg,
                method: m[27840],
                dataType: m[5430],
                header: {
                    'content-type': m[27957] // 默认值
                },
                data: {
                    openid: ext.uniqueId
                },
                success: function (res) {
                    console.log(m[28334], res);
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
            console.log(m[28335]);
            console.log(data);

            var self = this;
            callbacks[m[27917]] = typeof callback == m[27604] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(m[28289]);
            var session_key = wx.getStorageSync(m[28292]);
            if (!sdk_token && !session_key) {
                callbacks[m[27917]] && callbacks[m[27917]](1, {
                    errMsg: m[28336]
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
            public_data[m[28337]] = JSON.stringify(order_data);
            public_data[m[28286]] = 1;

            //发起网络请求
            wx.request({
                url: m[24346] + HOST + m[28338],
                method: m[27840],
                dataType: m[5430],
                header: {
                    'content-type': m[27957] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(m[28339]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(m[28340] + JSON.stringify(data.data.pay_data));
                            if (device === m[27761]) {
                                console.log(m[28341]);
                                hortorSdk.jumpPay(data.data.pay_data).then(res => {
                                    console.log(m[28315]);
                                }).catch(err => {
                                    console.log(m[28316], err);
                                    callbacks[m[27917]] && callbacks[m[27917]](1, {
                                        errMsg: err.errMsg
                                    });
                                });
                            } else {
                                console.log(m[28342]);
                                hortorSdk.midasPay(data.data.pay_data).then(res => {
                                    console.log(m[28343]);
                                }).catch(err => {
                                    console.log(m[28344], err);
                                    callbacks[m[27917]] && callbacks[m[27917]](1, {
                                        errMsg: err.errMsg
                                    });
                                });
                            }
                        } else {
                            callbacks[m[27917]] && callbacks[m[27917]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[m[27868]] && callbacks[m[27868]](1, {
                            errMsg: m[28297]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(m[28290]);
            var username = wx.getStorageSync(m[28291]);
            var plat_session_key = wx.getStorageSync(m[28292]);
            var postData = {};
            postData[m[28345]] = uid;
            postData[m[28346]] = username;
            postData[m[10129]] = data.roleid;
            postData[m[28347]] = data.rolelevel;
            postData[m[28348]] = data.rolename;
            postData[m[10750]] = data.serverid;

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
                url: m[24346] + HOST + m[28349] + config.partner_id + '/' + config.game_pkg,
                method: m[27840],
                dataType: m[5430],
                header: {
                    'content-type': m[27957] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    uniqueId: partner_user_data.uid,
                    is_valid: is_valid === 1 ? 1 : 0
                },
                success: function (res) {
                    console.log(m[28350], res);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(m[28290]);
            var username = wx.getStorageSync(m[28291]);
            var plat_session_key = wx.getStorageSync(m[28292]);
            var postData = {};
            postData[m[28345]] = uid;
            postData[m[28346]] = username;
            postData[m[10129]] = data.roleid;
            postData[m[28347]] = data.rolelevel;
            postData[m[28348]] = data.rolename;
            postData[m[10750]] = data.serverid;

            if (data.roleid && data.serverid) {
                G$V3J02 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            // hortorSdk.checkSwitches(['antiaddicted'], {}).then(res => {
            hortorSdk.checkSwitches({ switches: [m[28351]] }).then(res => {
                console.log(m[28352], res);
                if (res.antiaddicted) {
                    //防沉迷
                    hortorSdk.checkRest(() => {
                        console.log(m[28353]);
                    });
                }
            }).catch(err => {
                console.log(`[SDK]检查防沉迷开关返回失败，errCode=${err.errCode} errMsg=${err.errMsg}`);
            });

            this.log(m[5312], postData);

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

            hortorSdk.checkSwitches({ switches: [m[28269]] }).then(res => {
                console.log(m[28354], res);

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
            var uid = wx.getStorageSync(m[28290]);
            var username = wx.getStorageSync(m[28291]);
            var plat_session_key = wx.getStorageSync(m[28292]);
            var postData = {};
            postData[m[28345]] = uid;
            postData[m[28346]] = username;
            postData[m[10129]] = data.roleid;
            postData[m[28347]] = data.rolelevel;
            postData[m[28348]] = data.rolename;
            postData[m[10750]] = data.serverid;

            if (data.roleid && data.serverid) {
                G$V3J02 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(m[28355], postData);

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

            hortorSdk.checkSwitches({ switches: [m[28269]] }).then(res => {
                console.log(m[28354], res);

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
            var uuid = wx.getStorageSync(m[28265]);
            var idfv = wx.getStorageSync(m[28266]);
            var ad_code = wx.getStorageSync(m[28267]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: m[28356],
                net_type: system.wifiSignal == 0 ? '4G' : m[28357],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == m[27762] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(m[28358] + type);
            console.log(public_data);

            wx.request({
                url: m[24346] + HOST + m[28359] + type + m[28360] + encodeURIComponent(JSON.stringify(public_data))
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
    run(m[357], data, callback);
};

exports.login = function (callback) {
    run(m[27868], '', callback);
};

exports.pay = function (data, callback) {
    run(m[27917], data, callback);
};

exports.openService = function () {
    run(m[23810]);
};

exports.goCustomer = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(m[27929], data);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(m[27924], data);
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
    run(m[27927], data, extra ? extra.callback : null);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(m[27928], data);
};

exports.msgCheck = function (data, callback) {
    run(m[11302], data, callback);
};

exports.downloadClient = function () {
    run(m[28361]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(m[28362]);
};

// exports.showHortorVip = function () {
//     run('showHortorVip');
// };

exports.roleCreateReport = function (is_valid) {
    run(m[28363], is_valid);
};

exports.isSubscribe = function (callback) {
    run(m[28364], callback);
};

exports.is_authorize = function (callback) {
    run(m[28365], callback);
};

exports.go_authorize = function (data, callback) {
    run(m[28366], data, callback);
};

exports.hideUserInfoBtn = function (callback) {
    run(m[28367], callback);
};