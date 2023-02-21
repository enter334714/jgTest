var m = wx.$g;
let hortor = require(m[34025]);
let hortorSdk = hortor.sdk; //核心业务SDK
let wallSDK = hortorSdk.wallSDK;
let partner_config = hortor.config; //SDK配置
let wxapm = hortor.wxapm; //应用监控SDK

// 引入VIP大使
import HortorVip from "../utils/HortorVipSdk/hortorVip";

//TODO 替换对应参数
var config = {
    game_id: m[34026],
    game_pkg: m[34027], //疯狂微信小游戏-无双服-星聚
    partner_label: m[34028],
    partner_id: m[34029],
    game_ver: m[34030],
    partner_game_id: m[34031],
    is_auth: false //授权登录
};
window.config = config;
var partner_user_data = {};
var G$V3J20 = G$VJ023();
var HOST = m[34032];
var G$V3J02 = null;
var G$VJ203 = null;
var system = wx.getSystemInfoSync();
var device = system.platform == m[33512] ? m[33512] : m[33513];
var userInfoBtn = '';

var AD_HOST = m[34033];

function G$VJ023() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(m[34034]);
            var self = this;

            var uuid = wx.getStorageSync(m[34035]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(m[34035], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(m[34036]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(m[34036], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(m[34037], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(m[280], data);
            //这里修改了配置版本号
            partner_config[m[34038]] && (partner_config[m[34038]] = ops.game_ver);
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
                    hortorSdk.checkSwitches({ switches: [m[33708], m[34039], m[34040], m[34041]] }).then(res => {
                        console.log(m[34042], res);
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
            console.log(m[34043]);
            console.log(m[34044] + Date.now());
            var that = this;
            callbacks[m[33618]] = typeof callback == m[33358] ? callback : null;
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
                        if (res.authSetting[m[34045]]) {
                            //已授权
                            hortorSdk.login().then(res => {
                                console.log(m[34046] + JSON.stringify(res));
                                that.do_login(res);
                            }).catch(err => {
                                console.log(m[34047], err);
                            });
                        } else {
                            const userInfoBtn = hortorSdk.createGetUserInfoBtn({
                                type: m[3963],
                                text: m[34048],
                                style: {
                                    left: btn_left,
                                    top: btn_top,
                                    width: btn_width,
                                    height: btn_height,
                                    lineHeight: btn_height,
                                    backgroundColor: m[34049],
                                    color: m[3997],
                                    textAlign: m[1651],
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
                                        console.log(m[34050]);
                                        // TODO: 重新登录
                                        hortorSdk.login().then(res => {
                                            console.log(m[34046] + JSON.stringify(res));
                                            that.do_login(res);
                                        }).catch(err => {
                                            console.log(m[34047], err);
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
                console.log(m[34051], res);
                this.do_login(res);
            }).catch(err => {
                console.log(m[34052], err);
                callbacks[m[33618]] && callbacks[m[33618]](1, { errMsg: m[34053] });
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[m[34054]] = info.encryptUserInfo ? info.encryptUserInfo : info.userInfo;
            public_data[m[33419]] = info.timestamp;
            public_data[m[11023]] = info.sign;
            public_data[m[34055]] = 1;
            if (G$VJ203 && typeof G$VJ203 == m[275]) {
                for (var key in G$VJ203) {
                    public_data[key] = G$VJ203[key];
                }
            }

            wx.request({
                url: m[26463] + HOST + m[34056],
                method: m[33592],
                dataType: m[5323],
                header: {
                    'content-type': m[33739] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(m[34057]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            partner_user_data.uid = data.data.openid;
                            partner_user_data.uniqueIdNew = data.data.ext.uniqueId;

                            try {
                                wx.setStorageSync(m[34058], data.data.sdk_token);
                                wx.setStorageSync(m[34059], data.data.user_id);
                                wx.setStorageSync(m[34060], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(m[34061], data.data.ext);
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
                            callbacks[m[33618]] && callbacks[m[33618]](0, userData);
                        } else {
                            callbacks[m[33618]] && callbacks[m[33618]](1, {
                                errMsg: data.msg
                            });
                        }

                        hortorSdk.setGameUserInfo();

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(m[34062], function (data) {
                            console.log(m[34063]);
                            var shareType = m[324];
                            var shareData = hortorSdk.getShareData({
                                shareType: shareType
                            });
                            console.log(m[34064], JSON.stringify(shareData));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(m[34062]);
                                hortorSdk.sharePointShow(shareType);
                                return {
                                    title: shareData.title,
                                    imageUrl: shareData.imageUrl,
                                    query: shareData.query + '&' + data.query
                                };
                            });
                        });
                    } else {
                        callbacks[m[33618]] && callbacks[m[33618]](1, {
                            errMsg: m[34065]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[m[33708]] = typeof callback == m[33358] ? callback : null;
            var type = data.type || m[33708];
            console.log(m[34066] + type);
            var self = this;

            this.getShareInfo(type, function (data) {
                var shareType = m[34067];
                var shareData = hortorSdk.getShareData({
                    shareType: shareType
                });
                console.log(m[34068], shareData);
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
            var sdk_token = wx.getStorageSync(m[34058]);
            wx.request({
                url: m[26463] + HOST + m[34069],
                method: m[33592],
                dataType: m[5323],
                header: {
                    'content-type': m[33739] // 默认值
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
            console.log(m[34070]);
            wx.getSetting({
                success: function (res) {
                    if (res.authSetting[m[34045]]) {
                        callback(1);
                    } else {
                        callback(0);
                    }
                }
            });
        },

        go_authorize: function (data, callback) {
            console.log(m[34071]);
            userInfoBtn = hortorSdk.createGetUserInfoBtn({
                type: m[4859],
                image: m[34072],
                style: {
                    left: data.left,
                    top: data.top,
                    width: data.width,
                    height: data.height,
                    lineHeight: data.height,
                    textAlign: m[1651],
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
                        console.log(m[34050]);
                        hortorSdk.updateUserInfo().then(res => {
                            console.log(m[34073], res);
                            callback(1);
                        }).catch(err => {
                            console.log(m[34074], err);
                            callback(0);
                        });
                    } else {
                        // 拒绝授权
                        console.log(m[34075]);
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
                    console.log(m[34076], res);
                },
                fail: res => {
                    console.log(m[34077], res);
                }
            });
        },

        goCustomer: function (data) {
            hortorSdk.goCustomer({
                playerId: data.roleid,
                playerName: data.rolename
            }).then(res => {
                console.log(m[34078]);
            }).catch(err => {
                console.log(m[34079], err);
            });
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(m[34080]);
            var sdk_token = wx.getStorageSync(m[34058]);
            wx.request({
                url: m[26463] + HOST + '/game/min/?ac=checkGameVersion',
                method: m[33592],
                dataType: m[5323],
                header: {
                    'content-type': m[33739] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(m[34081]);
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
            console.log(m[34082]);
            var sdk_token = wx.getStorageSync(m[34058]);
            wx.request({
                url: m[26463] + HOST + m[34083],
                method: m[33592],
                dataType: m[5323],
                header: {
                    'content-type': m[33739] // 默认值
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
                    console.log(m[34084]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[m[33708]] && callbacks[m[33708]](1, {
                                errMsg: m[34085] + data.msg
                            });
                        }
                    } else {
                        callbacks[m[33708]] && callbacks[m[33708]](1, {
                            errMsg: m[34086]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(m[34087]);
            var sdk_token = wx.getStorageSync(m[34058]);
            wx.request({
                url: m[26463] + HOST + m[34088],
                method: m[33592],
                dataType: m[5323],
                header: {
                    'content-type': m[33739] // 默认值
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
                    console.log(m[34089]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(m[34090]);
            var sdk_token = wx.getStorageSync(m[34058]);

            wx.request({
                url: m[26463] + AD_HOST + m[34091] + config.partner_id + '/' + config.game_pkg,
                method: m[33592],
                dataType: m[5323],
                header: {
                    'content-type': m[33739] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content,
                    uId: partner_user_data.uid
                },
                success: function (res) {
                    console.log(m[34092]);
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        isSubscribe: function (callback) {
            console.log(m[34093]);
            var ext = wx.getStorageSync(m[34061]);
            wx.request({
                url: m[26463] + HOST + m[34094] + config.partner_id + '/' + config.game_pkg,
                method: m[33592],
                dataType: m[5323],
                header: {
                    'content-type': m[33739] // 默认值
                },
                data: {
                    openid: ext.uniqueId
                },
                success: function (res) {
                    console.log(m[34095], res);
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
            console.log(m[34096]);
            console.log(data);

            var self = this;
            callbacks[m[33694]] = typeof callback == m[33358] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(m[34058]);
            var session_key = wx.getStorageSync(m[34061]);
            if (!sdk_token && !session_key) {
                callbacks[m[33694]] && callbacks[m[33694]](1, {
                    errMsg: m[34097]
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
            public_data[m[34098]] = JSON.stringify(order_data);
            public_data[m[34055]] = 1;

            //发起网络请求
            wx.request({
                url: m[26463] + HOST + m[34099],
                method: m[33592],
                dataType: m[5323],
                header: {
                    'content-type': m[33739] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(m[34100]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(m[34101] + JSON.stringify(data.data.pay_data));
                            if (device === m[33512]) {
                                console.log(m[34102]);
                                hortorSdk.jumpPay(data.data.pay_data).then(res => {
                                    console.log(m[34078]);
                                }).catch(err => {
                                    console.log(m[34079], err);
                                    callbacks[m[33694]] && callbacks[m[33694]](1, {
                                        errMsg: err.errMsg
                                    });
                                });
                            } else {
                                console.log(m[34103]);
                                hortorSdk.midasPay(data.data.pay_data).then(res => {
                                    console.log(m[34104]);
                                }).catch(err => {
                                    console.log(m[34105], err);
                                    callbacks[m[33694]] && callbacks[m[33694]](1, {
                                        errMsg: err.errMsg
                                    });
                                });
                            }
                        } else {
                            callbacks[m[33694]] && callbacks[m[33694]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[m[33618]] && callbacks[m[33618]](1, {
                            errMsg: m[34065]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(m[34059]);
            var username = wx.getStorageSync(m[34060]);
            var plat_session_key = wx.getStorageSync(m[34061]);
            var postData = {};
            postData[m[34106]] = uid;
            postData[m[34107]] = username;
            postData[m[10409]] = data.roleid;
            postData[m[34108]] = data.rolelevel;
            postData[m[34109]] = data.rolename;
            postData[m[11038]] = data.serverid;

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
                url: m[26463] + HOST + m[34110] + config.partner_id + '/' + config.game_pkg,
                method: m[33592],
                dataType: m[5323],
                header: {
                    'content-type': m[33739] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    uniqueId: partner_user_data.uid,
                    is_valid: is_valid === 1 ? 1 : 0
                },
                success: function (res) {
                    console.log(m[34111], res);
                }
            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(m[34059]);
            var username = wx.getStorageSync(m[34060]);
            var plat_session_key = wx.getStorageSync(m[34061]);
            var postData = {};
            postData[m[34106]] = uid;
            postData[m[34107]] = username;
            postData[m[10409]] = data.roleid;
            postData[m[34108]] = data.rolelevel;
            postData[m[34109]] = data.rolename;
            postData[m[11038]] = data.serverid;

            if (data.roleid && data.serverid) {
                G$V3J02 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            // hortorSdk.checkSwitches(['antiaddicted'], {}).then(res => {
            hortorSdk.checkSwitches({ switches: [m[34112]] }).then(res => {
                console.log(m[34113], res);
                if (res.antiaddicted) {
                    //防沉迷
                    hortorSdk.checkRest(() => {
                        console.log(m[34114]);
                    });
                }
            }).catch(err => {
                console.log(`[SDK]检查防沉迷开关返回失败，errCode=${err.errCode} errMsg=${err.errMsg}`);
            });

            this.log(m[5205], postData);

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

            hortorSdk.checkSwitches({ switches: [m[34039]] }).then(res => {
                console.log(m[34115], res);

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
            var uid = wx.getStorageSync(m[34059]);
            var username = wx.getStorageSync(m[34060]);
            var plat_session_key = wx.getStorageSync(m[34061]);
            var postData = {};
            postData[m[34106]] = uid;
            postData[m[34107]] = username;
            postData[m[10409]] = data.roleid;
            postData[m[34108]] = data.rolelevel;
            postData[m[34109]] = data.rolename;
            postData[m[11038]] = data.serverid;

            if (data.roleid && data.serverid) {
                G$V3J02 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(m[34116], postData);

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

            hortorSdk.checkSwitches({ switches: [m[34039]] }).then(res => {
                console.log(m[34115], res);

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
                gameVersion: m[34117], // 游戏版本
                env: m[34118], // 运行环境 测试：Test， 正式：Prod
                userId: partner_user_data.uniqueIdNew, // 登录后返回的用户平台 uniqueId，没有时可以使用 openId
                icon: { // 悬浮图标默认位置，若不设置默认右上角
                    posX: -1, // x轴位置
                    posY: -1 // y轴位置
                },
                defShowIcon: true, // 是否默认展示 icon，默认 true
                onLoad: (err, data) => {
                    // vip 数据加载完时触发
                    console.log(m[34119], err, data);
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
            var uuid = wx.getStorageSync(m[34035]);
            var idfv = wx.getStorageSync(m[34036]);
            var ad_code = wx.getStorageSync(m[34037]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: m[34120],
                net_type: system.wifiSignal == 0 ? '4G' : m[34121],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == m[33512] ? 2 : 1
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(m[34122] + type);
            console.log(public_data);

            wx.request({
                url: m[26463] + HOST + m[34123] + type + m[34124] + encodeURIComponent(JSON.stringify(public_data))
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
    run(m[362], data, callback);
};

exports.login = function (callback) {
    run(m[33618], '', callback);
};

exports.pay = function (data, callback) {
    run(m[33694], data, callback);
};

exports.openService = function () {
    run(m[24098]);
};

exports.goCustomer = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(m[33709], data);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(m[33704], data);
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
    run(m[33707], data, extra ? extra.callback : null);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(m[33708], data);
};

exports.msgCheck = function (data, callback) {
    run(m[11850], data, callback);
};

exports.downloadClient = function () {
    run(m[34125]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(m[34126]);
};

exports.showHortorVip = function () {
    run(m[34127]);
};

exports.roleCreateReport = function (is_valid) {
    run(m[34128], is_valid);
};

exports.isSubscribe = function (callback) {
    run(m[34129], callback);
};

exports.is_authorize = function (callback) {
    run(m[34130], callback);
};

exports.go_authorize = function (data, callback) {
    run(m[34131], data, callback);
};

exports.hideUserInfoBtn = function (callback) {
    run(m[34132], callback);
};