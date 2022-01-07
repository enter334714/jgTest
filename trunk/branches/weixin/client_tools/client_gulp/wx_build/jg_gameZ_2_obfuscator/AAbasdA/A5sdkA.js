var d = wx.$A;
// let XLGame = require('../utils/xlgame-sdk-3.0')
import XLGame from "../utils/xlgame-sdk-3.0";
//TODO 替换对应参数
var config = {
    game_id: d[509759],
    game_pkg: d[509760], //荀鹿小游戏-永夜仙王
    partner_label: d[509761],
    partner_id: d[509762],
    game_ver: d[509763],
    is_auth: true, //授权登录
    partner_game_id: 2000046,
    partner_game_key: d[509764]
};
window.config = config;
var A1$Z687 = A1$678Z();
var HOST = d[509765];
var A1$Z678 = null;
var A1$687Z = null;
var partner_data = {};

function A1$678Z() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(d[509766]);
            var self = this;

            var uuid = wx.getStorageSync(d[509767]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(d[509767], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(d[509768]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(d[509768], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(d[509769], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(d[481895], data);
            //TODO 替换对应参数
            //初始化回调
            XLGame.onActiveCallback = data => {
                console.log(d[509770], data);
            };
            XLGame.init(config.partner_game_id, config.partner_game_key, config.game_ver);
            var sdkInterface = XLGame.sdkInterface;
            console.log(d[509771], sdkInterface);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                A1$687Z = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }

            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    data.show_pay = sdkInterface.canPay ? 1 : 0;
                    callback && callback(data);
                });
            }
        },

        //TODO 替换联运登录接口
        login: function (data, callback) {
            var self = this;
            console.log(d[509772]);
            callbacks[d[480636]] = typeof callback == d[481358] ? callback : null;
            if (XLGame.sdkInterface.userInfo) {
                //授权登录
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[d[509773]]) {
                            //已授权
                            self.weak_login();
                        } else {
                            XLGame.onUserInfoCallback = data => {
                                console.log(d[509774], data);
                                if (data.status == '1') {
                                    self.do_login(data.data);
                                } else {
                                    callback && callback(1, { errMsg: data.msg });
                                }
                            };
                            var system_info = wx.getSystemInfoSync();
                            var screen_width = system_info.screenWidth;
                            var screen_height = system_info.screenHeight;
                            var btn_width = screen_width * 2 / 4;
                            var btn_height = btn_width / 4;
                            var btn_left = (screen_width - btn_width) / 2;
                            var btn_top = screen_height / 2;
                            let btn = wx.createUserInfoButton({
                                type: d[480325],
                                text: d[509775],
                                style: {
                                    left: btn_left,
                                    top: btn_top,
                                    width: btn_width,
                                    height: btn_height,
                                    lineHeight: btn_height,
                                    backgroundColor: d[509776],
                                    color: d[480225],
                                    textAlign: d[480187],
                                    fontSize: 16,
                                    borderRadius: 4
                                }
                            });

                            btn.onTap(res => {
                                XLGame.getUserInfo(res); //授权成功后res回传回来
                                // 按钮隐藏
                                btn.hide();
                            });
                        }
                    }
                });
            } else {
                self.weak_login();
            }
        },

        weak_login: function () {
            var self = this;
            XLGame.onLoginCallback = data => {
                console.log(d[509777], data);
                if (data.status == '1') {
                    self.do_login(data.data);
                } else {
                    callbacks[d[480636]] && callbacks[d[480636]](1, { errMsg: data.msg });
                }
            };

            XLGame.login();
        },

        do_login: function (info) {
            var self = this;
            partner_data = {
                uid: info.uid,
                timeStamp: info.timeStamp,
                sign: info.sign
            };
            var public_data = self.getPublicData();
            public_data[d[509778]] = 1;
            public_data[d[509779]] = JSON.stringify(partner_data);
            if (A1$687Z && typeof A1$687Z == d[481257]) {
                for (var key in A1$687Z) {
                    public_data[key] = A1$687Z[key];
                }
            }

            //发起网络请求
            wx.request({
                url: d[506766] + HOST + d[509780],
                method: d[480604],
                dataType: d[481603],
                header: {
                    'content-type': d[480740] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(d[509781], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(d[509782], data.data.sdk_token);
                                wx.setStorageSync(d[509783], data.data.user_id);
                                wx.setStorageSync(d[509784], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(d[509785], data.data.ext);
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
                            callbacks[d[480636]] && callbacks[d[480636]](0, userData);
                        } else {
                            callbacks[d[480636]] && callbacks[d[480636]](1, { errMsg: data.msg });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(d[509786], function (data) {
                            console.log(d[509787]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(d[509786]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[d[480636]] && callbacks[d[480636]](1, {
                            errMsg: d[509788]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[d[480703]] = typeof callback == d[481358] ? callback : null;
            var type = data.type || d[480703];
            console.log(d[509789] + type);
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

        //获取公众号
        pubSubscribe: function () {
            if (XLGame.sdkInterface.subscribe) {
                XLGame.subscribe();
            } else {
                wx.showToast({
                    title: d[509790]
                });
            }
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(d[509782]);
            wx.request({
                url: d[506766] + HOST + d[509791],
                method: d[480604],
                dataType: d[481603],
                header: {
                    'content-type': d[480740] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: A1$Z678 ? A1$Z678.server_id : '',
                    role_id: A1$Z678 ? A1$Z678.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            // wx.openCustomerServiceConversation();

            if (XLGame.sdkInterface.openCustomerService) {
                XLGame.openCustomerService();
            } else {
                wx.showToast({
                    title: d[509792]
                });
            }
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(d[509793]);
            var sdk_token = wx.getStorageSync(d[509782]);
            wx.request({
                url: d[506766] + HOST + d[509794],
                method: d[480604],
                dataType: d[481603],
                header: {
                    'content-type': d[480740] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(d[509795]);
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
            console.log(d[509796]);
            var sdk_token = wx.getStorageSync(d[509782]);
            wx.request({
                url: d[506766] + HOST + d[509797],
                method: d[480604],
                dataType: d[481603],
                header: {
                    'content-type': d[480740] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: A1$Z678 ? A1$Z678.server_id : '',
                    role_id: A1$Z678 ? A1$Z678.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(d[509798]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[d[480703]] && callbacks[d[480703]](1, {
                                errMsg: d[509799] + data.msg
                            });
                        }
                    } else {
                        callbacks[d[480703]] && callbacks[d[480703]](1, {
                            errMsg: d[509800]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(d[509801]);
            var sdk_token = wx.getStorageSync(d[509782]);
            wx.request({
                url: d[506766] + HOST + d[509802],
                method: d[480604],
                dataType: d[481603],
                header: {
                    'content-type': d[480740] // 默认值
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
                    console.log(d[509803]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(d[509804]);
            XLGame.onMsgSecCheckCallback = data => {
                let ret = {
                    data: {}
                };
                if (data.code == 100) {
                    ret.statusCode = 200;
                    ret.data.state = 1;
                } else {
                    ret.statusCode = 0;
                    ret.data.state = 0;
                }
                callback && callback(ret);
            };
            XLGame.msgSecCheck(1, content);
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(d[509805], data);
            var self = this;
            callbacks[d[480690]] = typeof callback == d[481358] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(d[509782]);
            var session_key = wx.getStorageSync(d[509785]);
            if (!sdk_token && !session_key) {
                callbacks[d[480690]] && callbacks[d[480690]](1, { errMsg: d[509806] });
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
            public_data[d[509807]] = JSON.stringify(order_data);
            public_data[d[509778]] = 1;

            //发起网络请求
            wx.request({
                url: d[506766] + HOST + d[509808],
                method: d[480604],
                dataType: d[481603],
                header: {
                    'content-type': d[480740] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(d[509809]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(d[509810] + JSON.stringify(data.data.pay_data));
                            XLGame.onPayCallback = data => {
                                console.log(d[509811], data);
                                if (data.status != '1') {
                                    callbacks[d[480690]] && callbacks[d[480690]](1, { errMsg: data.msg });
                                }
                            };
                            XLGame.pay(data.data.pay_data);
                        } else {
                            callbacks[d[480690]] && callbacks[d[480690]](1, { errMsg: data.errMsg });
                        }
                    } else {
                        callbacks[d[480636]] && callbacks[d[480636]](1, { errMsg: d[509788] });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            console.log(d[509812]);
            var uid = wx.getStorageSync(d[509783]);
            var username = wx.getStorageSync(d[509784]);

            var postData = {};
            postData[d[509813]] = uid;
            postData[d[509814]] = username;
            postData[d[492275]] = data.roleid;
            postData[d[509815]] = data.rolelevel;
            postData[d[509816]] = data.rolename;
            postData[d[480023]] = data.serverid;

            if (data.roleid && data.serverid) {
                A1$Z678 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(d[480154], postData);

            this.upRoleInfo(2, data);
        },

        //进入游戏
        logEnterGame: function (data) {
            console.log(d[509817]);
            var uid = wx.getStorageSync(d[509783]);
            var username = wx.getStorageSync(d[509784]);

            var postData = {};
            postData[d[509813]] = uid;
            postData[d[509814]] = username;
            postData[d[492275]] = data.roleid;
            postData[d[509815]] = data.rolelevel;
            postData[d[509816]] = data.rolename;
            postData[d[480023]] = data.serverid;

            if (data.roleid && data.serverid) {
                A1$Z678 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(d[487202], postData);

            this.upRoleInfo(1, data);

            //进入游戏确认邀请成功
            if (A1$687Z) {
                this.updateShare(A1$687Z.invite, A1$687Z.invite_type, A1$687Z.is_new, data.roleid, data.serverid, A1$687Z.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            console.log(d[509818]);
            var uid = wx.getStorageSync(d[509783]);
            var username = wx.getStorageSync(d[509784]);

            var postData = {};
            postData[d[509813]] = uid;
            postData[d[509814]] = username;
            postData[d[492275]] = data.roleid;
            postData[d[509815]] = data.rolelevel;
            postData[d[509816]] = data.rolename;
            postData[d[480023]] = data.serverid;

            this.log(d[509819], postData);

            if (data.roleid && data.serverid) {
                A1$Z678 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.upRoleInfo(4, data);
        },

        // 角色上报
        upRoleInfo: function (type, data) {
            var roleInfo = {
                type: type,
                gameAccountId: partner_data.uid,
                roleId: data.roleid,
                roleName: data.rolename,
                level: data.rolelevel,
                serverId: data.serverid,
                serverName: data.servername,
                rolePower: data.rolepower ? data.rolepower : 0,
                vipLevel: 0,
                region: "0",
                extend1: "", //扩展参数1
                extend2: "" //扩展参数2
            };
            console.log(d[509820] + JSON.stringify(roleInfo));
            XLGame.pushData(roleInfo);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = d[509821].split('');
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
            var uuid = wx.getStorageSync(d[509767]);
            var idfv = wx.getStorageSync(d[509768]);
            var ad_code = wx.getStorageSync(d[509769]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: d[509822],
                net_type: system.wifiSignal == 0 ? '4G' : d[509823],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == d[480110] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(d[509824] + type);
            console.log(public_data);

            wx.request({
                url: d[506766] + HOST + d[509825] + type + d[509826] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(d[509827] + tmplIds);
            //获取模板ID
            callbacks[d[480712]] = typeof callback == d[481358] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(d[509828]);
                    console.log(res);
                    callbacks[d[480712]] && callbacks[d[480712]](res);
                },
                fail(res) {
                    console.log(d[509829]);
                    console.log(res);
                    callbacks[d[480712]] && callbacks[d[480712]](res);
                }
            });
        },

        // 引入悬浮窗
        floatingWindow: function (this_obj) {
            require(d[509830]);
            var sdkFloat = new SdkFloat();
            sdkFloat.createFloatIcon(this_obj);
        }
    };
}

function run(method, data, callback) {
    method in A1$Z687 && A1$Z687[method](data, callback);
}

exports.init = function (data, callback) {
    run(d[480459], data, callback);
};

exports.login = function (callback) {
    run(d[480636], '', callback);
};

exports.login = function (callback) {
    run(d[480636], '', callback);
};

exports.pay = function (data, callback) {
    run(d[480690], data, callback);
};

exports.openService = function () {
    run(d[480704]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(d[480698], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(d[480700], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(d[480702], data);
};

exports.pubSubscribe = function () {
    run(d[509831]);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(d[480703], data);
};

exports.msgCheck = function (data, callback) {
    run(d[480588], data, callback);
};

exports.downloadClient = function () {
    run(d[509832]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(d[509833]);
};

exports.floatingWindow = function (this_obj) {
    run(d[509834], this_obj);
};
exports.subscribeMessage = function (data, callback) {
    run(d[480712], data, callback);
};