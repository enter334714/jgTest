var m = wx.$g;
let hortor = require(m[30990]);
let hortorSdk = hortor.sdk; //核心业务SDK
let wallSDK = hortorSdk.wallSDK;
let partner_config = hortor.config; //SDK配置
let wxapm = hortor.wxapm; //应用监控SDK

// 引入VIP大使
import HortorVip from "../utils/HortorVipSdk/hortorVip";

//TODO 替换对应参数
var config = {
    game_id: m[30991],
    game_pkg: m[30992], //疯狂微信小游戏-无双服-星聚
    partner_label: m[30993],
    partner_id: m[30994],
    game_ver: m[30995],
    partner_game_id: m[30996],
    is_auth: false //授权登录
};
window.config = config;
var partner_user_data = {};
var G$V3J20 = G$VJ023();
var HOST = m[30997];
var G$V3J02 = null;
var G$VJ203 = null;
var system = wx.getSystemInfoSync();
var device = system.platform == m[30485] ? m[30485] : m[30486];
var userInfoBtn = '';

var AD_HOST = m[30998];

function G$VJ023() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(m[30999]);
            var self = this;

            var uuid = wx.getStorageSync(m[31000]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(m[31000], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(m[31001]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(m[31001], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(m[31002], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(m[278], data);
            //这里修改了配置版本号
            partner_config[m[31003]] && (partner_config[m[31003]] = ops.game_ver);
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
                    hortorSdk.checkSwitches({ switches: [m[30683], m[31004], m[31005], m[31006]] }).then(res => {
                        console.log(m[31007], res);
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
            console.log(m[31008]);
            console.log(m[31009] + Date.now());
            var that = this;
            callbacks[m[30593]] = typeof callback == m[30328] ? callback : null;
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
                        if (res.authSetting[m[31010]]) {
                            //已授权
                            hortorSdk.login().then(res => {
                                console.log(m[31011] + JSON.stringify(res));
                                that.do_login(res);
                            }).catch(err => {
                                console.log(m[31012], err);
                            });
                        } else {
                            const userInfoBtn = hortorSdk.createGetUserInfoBtn({
                                type: m[3711],
                                text: m[31013],
                                style: {
                                    left: btn_left,
                                    top: btn_top,
                                    width: btn_width,
                                    height: btn_height,
                                    lineHeight: btn_height,
                                    backgroundColor: m[31014],
                                    color: m[3737],
                                    textAlign: m[1569],
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
                                        console.log(m[31015]);
                                        // TODO: 重新登录
                                        hortorSdk.login().then(res => {
                                            console.log(m[31011] + JSON.stringify(res));
                                            that.do_login(res);
                                        }).catch(err => {
                                            console.log(m[31012], err);
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
                console.log(m[31016], res);
                this.do_login(res);
            }).catch(err => {
                console.log(m[31017], err);
                callbacks[m[30593]] && callbacks[m[30593]](1, { errMsg: m[31018] });
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[m[31019]] = info.encryptUserInfo ? info.encryptUserInfo : info.userInfo;
            public_data[m[31020]] = info.timestamp;
            public_data[m[10626]] = info.sign;
            public_data[m[31021]] = 1;
            if (G$VJ203 && typeof G$VJ203 == m[273]) {
                for (var key in G$VJ203) {
                    public_data[key] = G$VJ203[key];
                }
            }

            wx.request({
                url: m[25469] + HOST + m[31022],
                method: m[30565],
                dataType: m[5046],
                header: {
                    'content-type': m[30715] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(m[31023]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.uid = data.data.openid;
                            partner_user_data.uniqueIdNew = data.data.ext.uniqueId;

                            try {
                                wx.setStorageSync(m[31024], data.data.sdk_token);
                                wx.setStorageSync(m[31025], data.data.user_id);
                                wx.setStorageSync(m[31026], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(m[31027], data.data.ext);
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
                            callbacks[m[30593]] && callbacks[m[30593]](0, userData);
                        } else {
                            callbacks[m[30593]] && callbacks[m[30593]](1, {
                                errMsg: data.msg
                            });
                        }

                        hortorSdk.setGameUserInfo();

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(m[31028], function (data) {
                            console.log(m[31029]);
                            var shareType = m[322];
                            var shareData = hortorSdk.getShareData({
                                shareType: shareType
                            });
                            console.log(m[31030], JSON.stringify(shareData));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(m[31028]);
                                hortorSdk.sharePointShow(shareType);
                                return {
                                    title: shareData.title,
                                    imageUrl: shareData.imageUrl,
                                    query: shareData.query + '&' + data.query
                                };
                            });
                        });
                    } else {
                        callbacks[m[30593]] && callbacks[m[30593]](1, {
                            errMsg: m[31031]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[m[30683]] = typeof callback == m[30328] ? callback : null;
            var type = data.type || m[30683];
            console.log(m[31032] + type);
            var self = this;

            this.getShareInfo(type, function (data) {
                var shareType = m[31033];
                var shareData = hortorSdk.getShareData({
                    shareType: shareType
                });
                console.log(m[31034], shareData);
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
            var sdk_token = wx.getStorageSync(m[31024]);
            wx.request({
                url: m[25469] + HOST + m[31035],
                method: m[30565],
                dataType: m[5046],
                header: {
                    'content-type': m[30715] // 默认值
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
            console.log(m[31036]);
            wx.getSetting({
                success: function (res) {
                    if (res.authSetting[m[31010]]) {
                        callback(1);
                    } else {
                        callback(0);
                    }
                }
            });
        },

        go_authorize: function (data, callback) {
            console.log(m[31037]);
            userInfoBtn = hortorSdk.createGetUserInfoBtn({
                type: m[4582],
                image: m[31038],
                style: {
                    left: data.left,
                    top: data.top,
                    width: data.width,
                    height: data.height,
                    lineHeight: data.height,
                    textAlign: m[1569],
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
                        console.log(m[31015]);
                        hortorSdk.updateUserInfo().then(res => {
                            console.log(m[31039], res);
                            callback(1);
                        }).catch(err => {
                            console.log(m[31040], err);
                            callback(0);
                        });
                    } else {
                        // 拒绝授权
                        console.log(m[31041]);
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
                    console.log(m[31042], res);
                },
                fail: res => {
                    console.log(m[31043], res);
                }
            });
        },

        goCustomer: function (data) {
            hortorSdk.goCustomer({
                playerId: data.roleid,
                playerName: data.rolename
            }).then(res => {
                console.log(m[31044]);
            }).catch(err => {
                console.log(m[31045], err);
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(m[31046]);
            var sdk_token = wx.getStorageSync(m[31024]);
            wx.request({
                url: m[25469] + HOST + '/game/min/?ac=checkGameVersion',
                method: m[30565],
                dataType: m[5046],
                header: {
                    'content-type': m[30715] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(m[31047]);
                    console.log(res);
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
            console.log(m[31048]);
            var sdk_token = wx.getStorageSync(m[31024]);
            wx.request({
                url: m[25469] + HOST + m[31049],
                method: m[30565],
                dataType: m[5046],
                header: {
                    'content-type': m[30715] // 默认值
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
                    console.log(m[31050]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[m[30683]] && callbacks[m[30683]](1, {
                                errMsg: m[31051] + data.msg
                            });
                        }
                    } else {
                        callbacks[m[30683]] && callbacks[m[30683]](1, {
                            errMsg: m[31052]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(m[31053]);
            var sdk_token = wx.getStorageSync(m[31024]);
            wx.request({
                url: m[25469] + HOST + m[31054],
                method: m[30565],
                dataType: m[5046],
                header: {
                    'content-type': m[30715] // 默认值
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
                    console.log(m[31055]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(m[31056]);
            var sdk_token = wx.getStorageSync(m[31024]);

            wx.request({
                url: m[25469] + AD_HOST + m[31057] + config.partner_id + '/' + config.game_pkg,
                method: m[30565],
                dataType: m[5046],
                header: {
                    'content-type': m[30715] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content,
                    uId: partner_user_data.uid
                },
                success: function (res) {
                    console.log(m[31058]);
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        isSubscribe: function (callback) {
            console.log(m[31059]);
            var ext = wx.getStorageSync(m[31027]);
            wx.request({
                url: m[25469] + HOST + m[31060] + config.partner_id + '/' + config.game_pkg,
                method: m[30565],
                dataType: m[5046],
                header: {
                    'content-type': m[30715] // 默认值
                },
                data: {
                    openid: ext.uniqueId
                },
                success: function (res) {
                    console.log(m[31061], res);
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
            console.log(m[31062]);
            console.log(data);

            var self = this;
            callbacks[m[30669]] = typeof callback == m[30328] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(m[31024]);
            var session_key = wx.getStorageSync(m[31027]);
            if (!sdk_token && !session_key) {
                callbacks[m[30669]] && callbacks[m[30669]](1, {
                    errMsg: m[31063]
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
            public_data[m[31064]] = JSON.stringify(order_data);
            public_data[m[31021]] = 1;

            //发起网络请求
            wx.request({
                url: m[25469] + HOST + m[31065],
                method: m[30565],
                dataType: m[5046],
                header: {
                    'content-type': m[30715] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(m[31066]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(m[31067] + JSON.stringify(data.data.pay_data));
                            if (device === m[30485]) {
                                console.log(m[31068]);
                                hortorSdk.jumpPay(data.data.pay_data).then(res => {
                                    console.log(m[31044]);
                                }).catch(err => {
                                    console.log(m[31045], err);
                                    callbacks[m[30669]] && callbacks[m[30669]](1, {
                                        errMsg: err.errMsg
                                    });
                                });
                            } else {
                                console.log(m[31069]);
                                hortorSdk.midasPay(data.data.pay_data).then(res => {
                                    console.log(m[31070]);
                                }).catch(err => {
                                    console.log(m[31071], err);
                                    callbacks[m[30669]] && callbacks[m[30669]](1, {
                                        errMsg: err.errMsg
                                    });
                                });
                            }
                        } else {
                            callbacks[m[30669]] && callbacks[m[30669]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[m[30593]] && callbacks[m[30593]](1, {
                            errMsg: m[31031]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(m[31025]);
            var username = wx.getStorageSync(m[31026]);
            var plat_session_key = wx.getStorageSync(m[31027]);
            var postData = {};
            postData[m[31072]] = uid;
            postData[m[31073]] = username;
            postData[m[10007]] = data.roleid;
            postData[m[31074]] = data.rolelevel;
            postData[m[31075]] = data.rolename;
            postData[m[10641]] = data.serverid;

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
                url: m[25469] + HOST + m[31076] + config.partner_id + '/' + config.game_pkg,
                method: m[30565],
                dataType: m[5046],
                header: {
                    'content-type': m[30715] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    uniqueId: partner_user_data.uid,
                    is_valid: is_valid === 1 ? 1 : 0
                },
                success: function (res) {
                    console.log(m[31077], res);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(m[31025]);
            var username = wx.getStorageSync(m[31026]);
            var plat_session_key = wx.getStorageSync(m[31027]);
            var postData = {};
            postData[m[31072]] = uid;
            postData[m[31073]] = username;
            postData[m[10007]] = data.roleid;
            postData[m[31074]] = data.rolelevel;
            postData[m[31075]] = data.rolename;
            postData[m[10641]] = data.serverid;

            if (data.roleid && data.serverid) {
                G$V3J02 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            // hortorSdk.checkSwitches(['antiaddicted'], {}).then(res => {
            hortorSdk.checkSwitches({ switches: [m[31078]] }).then(res => {
                console.log(m[31079], res);
                if (res.antiaddicted) {
                    //防沉迷
                    hortorSdk.checkRest(() => {
                        console.log(m[31080]);
                    });
                }
            }).catch(err => {
                console.log(`[SDK]检查防沉迷开关返回失败，errCode=${err.errCode} errMsg=${err.errMsg}`);
            });

            this.log(m[4928], postData);

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

            hortorSdk.checkSwitches({ switches: [m[31004]] }).then(res => {
                console.log(m[31081], res);

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
            var uid = wx.getStorageSync(m[31025]);
            var username = wx.getStorageSync(m[31026]);
            var plat_session_key = wx.getStorageSync(m[31027]);
            var postData = {};
            postData[m[31072]] = uid;
            postData[m[31073]] = username;
            postData[m[10007]] = data.roleid;
            postData[m[31074]] = data.rolelevel;
            postData[m[31075]] = data.rolename;
            postData[m[10641]] = data.serverid;

            if (data.roleid && data.serverid) {
                G$V3J02 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(m[31082], postData);

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

            hortorSdk.checkSwitches({ switches: [m[31004]] }).then(res => {
                console.log(m[31081], res);

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
        showHortorVip: function () {
            // 游戏登录成功后实例化 + 初始化 HortorVip：
            let hortorVip = new HortorVip();
            hortorVip.init({
                vipGameId: config.partner_game_id, // 大使功能游戏id，跟平台游戏id保持一致；
                gameVersion: m[31083], // 游戏版本
                env: m[31084], // 运行环境 测试：Test， 正式：Prod
                userId: partner_user_data.uniqueIdNew, // 登录后返回的用户平台 uniqueId，没有时可以使用 openId
                icon: { // 悬浮图标默认位置，若不设置默认右上角
                    posX: -1, // x轴位置
                    posY: -1 // y轴位置
                },
                defShowIcon: true, // 是否默认展示 icon，默认 true
                onLoad: (err, data) => {
                    // vip 数据加载完时触发
                    console.log(m[31085], err, data);
                }
            });
        },

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
            var uuid = wx.getStorageSync(m[31000]);
            var idfv = wx.getStorageSync(m[31001]);
            var ad_code = wx.getStorageSync(m[31002]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: m[31086],
                net_type: system.wifiSignal == 0 ? '4G' : m[31087],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == m[30485] ? 2 : 1
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(m[31088] + type);
            console.log(public_data);

            wx.request({
                url: m[25469] + HOST + m[31089] + type + m[31090] + encodeURIComponent(JSON.stringify(public_data))
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
    run(m[30593], '', callback);
};

exports.pay = function (data, callback) {
    run(m[30669], data, callback);
};

exports.openService = function () {
    run(m[23310]);
};

exports.goCustomer = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(m[30684], data);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(m[30679], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower : ""
    };

    run('logEnterGame', data, extra ? extra.callback : null);
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
    run(m[30682], data, extra ? extra.callback : null);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(m[30683], data);
};

exports.msgCheck = function (data, callback) {
    run(m[11381], data, callback);
};

exports.downloadClient = function () {
    run(m[31091]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(m[31092]);
};

exports.showHortorVip = function () {
    run(m[31093]);
};

exports.roleCreateReport = function (is_valid) {
    run(m[31094], is_valid);
};

exports.isSubscribe = function (callback) {
    run(m[31095], callback);
};

exports.is_authorize = function (callback) {
    run(m[31096], callback);
};

exports.go_authorize = function (data, callback) {
    run(m[31097], data, callback);
};

exports.hideUserInfoBtn = function (callback) {
    run(m[31098], callback);
};