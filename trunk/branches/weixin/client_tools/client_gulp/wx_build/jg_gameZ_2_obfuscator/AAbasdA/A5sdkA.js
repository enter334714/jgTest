var d = wx.$A;
// let XLGame = require('../utils/xlgame-sdk-3.0')
import XLGame from "../utils/xlgame-sdk-3.0";
//TODO 替换对应参数
var config = {
    game_id: d[508720],
    game_pkg: d[508721], //荀鹿小游戏-永夜仙王
    partner_label: d[508722],
    partner_id: d[508723],
    game_ver: "27.0.2",
    is_auth: true, //授权登录
    partner_game_id: 2000046,
    partner_game_key: d[508725]
};
window.config = config;
var A1$Z687 = A1$678Z();
var HOST = d[508726];
var A1$Z678 = null;
var A1$687Z = null;
var partner_data = {};

function A1$678Z() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(d[508727]);
            var self = this;

            var uuid = wx.getStorageSync(d[508728]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(d[508728], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(d[508729]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(d[508729], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(d[508730], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(d[481841], data);
            //TODO 替换对应参数
            //初始化回调
            XLGame.onActiveCallback = data => {
                console.log(d[508731], data);
            };
            XLGame.init(config.partner_game_id, config.partner_game_key, config.game_ver);
            var sdkInterface = XLGame.sdkInterface;
            console.log(d[508732], sdkInterface);

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
            console.log(d[508733]);
            callbacks[d[480599]] = typeof callback == d[481304] ? callback : null;
            if (XLGame.sdkInterface.userInfo) {
                //授权登录
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[d[508734]]) {
                            //已授权
                            self.weak_login();
                        } else {
                            XLGame.onUserInfoCallback = data => {
                                console.log(d[508735], data);
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
                                type: d[480307],
                                text: d[508736],
                                style: {
                                    left: btn_left,
                                    top: btn_top,
                                    width: btn_width,
                                    height: btn_height,
                                    lineHeight: btn_height,
                                    backgroundColor: d[508737],
                                    color: d[480227],
                                    textAlign: d[480182],
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
                console.log(d[508738], data);
                if (data.status == '1') {
                    self.do_login(data.data);
                } else {
                    callbacks[d[480599]] && callbacks[d[480599]](1, { errMsg: data.msg });
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
            public_data[d[508739]] = 1;
            public_data[d[508740]] = JSON.stringify(partner_data);
            if (A1$687Z && typeof A1$687Z == d[481203]) {
                for (var key in A1$687Z) {
                    public_data[key] = A1$687Z[key];
                }
            }

            //发起网络请求
            wx.request({
                url: d[505881] + HOST + d[508741],
                method: d[480567],
                dataType: d[481549],
                header: {
                    'content-type': d[480703] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(d[508742], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(d[508743], data.data.sdk_token);
                                wx.setStorageSync(d[508744], data.data.user_id);
                                wx.setStorageSync(d[508745], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(d[508746], data.data.ext);
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
                            callbacks[d[480599]] && callbacks[d[480599]](0, userData);
                        } else {
                            callbacks[d[480599]] && callbacks[d[480599]](1, { errMsg: data.msg });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(d[508747], function (data) {
                            console.log(d[508748]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(d[508747]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[d[480599]] && callbacks[d[480599]](1, {
                            errMsg: d[508749]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[d[480666]] = typeof callback == d[481304] ? callback : null;
            var type = data.type || d[480666];
            console.log(d[508750] + type);
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
                    title: d[508751]
                });
            }
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(d[508743]);
            wx.request({
                url: d[505881] + HOST + d[508752],
                method: d[480567],
                dataType: d[481549],
                header: {
                    'content-type': d[480703] // 默认值
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
                    title: d[508753]
                });
            }
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(d[508754]);
            var sdk_token = wx.getStorageSync(d[508743]);
            wx.request({
                url: d[505881] + HOST + d[508755],
                method: d[480567],
                dataType: d[481549],
                header: {
                    'content-type': d[480703] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(d[508756]);
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
            console.log(d[508757]);
            var sdk_token = wx.getStorageSync(d[508743]);
            wx.request({
                url: d[505881] + HOST + d[508758],
                method: d[480567],
                dataType: d[481549],
                header: {
                    'content-type': d[480703] // 默认值
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
                    console.log(d[508759]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[d[480666]] && callbacks[d[480666]](1, {
                                errMsg: d[508760] + data.msg
                            });
                        }
                    } else {
                        callbacks[d[480666]] && callbacks[d[480666]](1, {
                            errMsg: d[508761]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(d[508762]);
            var sdk_token = wx.getStorageSync(d[508743]);
            wx.request({
                url: d[505881] + HOST + d[508763],
                method: d[480567],
                dataType: d[481549],
                header: {
                    'content-type': d[480703] // 默认值
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
                    console.log(d[508764]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(d[508765]);
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
            console.log(d[508766], data);
            var self = this;
            callbacks[d[480653]] = typeof callback == d[481304] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(d[508743]);
            var session_key = wx.getStorageSync(d[508746]);
            if (!sdk_token && !session_key) {
                callbacks[d[480653]] && callbacks[d[480653]](1, { errMsg: d[508767] });
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
            public_data[d[508768]] = JSON.stringify(order_data);
            public_data[d[508739]] = 1;

            //发起网络请求
            wx.request({
                url: d[505881] + HOST + d[508769],
                method: d[480567],
                dataType: d[481549],
                header: {
                    'content-type': d[480703] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(d[508770]);
                    console.log(res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(d[508771] + JSON.stringify(data.data.pay_data));
                            XLGame.onPayCallback = data => {
                                console.log(d[508772], data);
                                if (data.status != '1') {
                                    callbacks[d[480653]] && callbacks[d[480653]](1, { errMsg: data.msg });
                                }
                            };
                            XLGame.pay(data.data.pay_data);
                        } else {
                            callbacks[d[480653]] && callbacks[d[480653]](1, { errMsg: data.errMsg });
                        }
                    } else {
                        callbacks[d[480599]] && callbacks[d[480599]](1, { errMsg: d[508749] });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            console.log(d[508773]);
            var uid = wx.getStorageSync(d[508744]);
            var username = wx.getStorageSync(d[508745]);

            var postData = {};
            postData[d[508774]] = uid;
            postData[d[508775]] = username;
            postData[d[491969]] = data.roleid;
            postData[d[508776]] = data.rolelevel;
            postData[d[508777]] = data.rolename;
            postData[d[480022]] = data.serverid;

            if (data.roleid && data.serverid) {
                A1$Z678 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(d[480149], postData);

            this.upRoleInfo(2, data);
        },

        //进入游戏
        logEnterGame: function (data) {
            console.log(d[508778]);
            var uid = wx.getStorageSync(d[508744]);
            var username = wx.getStorageSync(d[508745]);

            var postData = {};
            postData[d[508774]] = uid;
            postData[d[508775]] = username;
            postData[d[491969]] = data.roleid;
            postData[d[508776]] = data.rolelevel;
            postData[d[508777]] = data.rolename;
            postData[d[480022]] = data.serverid;

            if (data.roleid && data.serverid) {
                A1$Z678 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(d[487076], postData);

            this.upRoleInfo(1, data);

            //进入游戏确认邀请成功
            if (A1$687Z) {
                this.updateShare(A1$687Z.invite, A1$687Z.invite_type, A1$687Z.is_new, data.roleid, data.serverid, A1$687Z.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            console.log(d[508779]);
            var uid = wx.getStorageSync(d[508744]);
            var username = wx.getStorageSync(d[508745]);

            var postData = {};
            postData[d[508774]] = uid;
            postData[d[508775]] = username;
            postData[d[491969]] = data.roleid;
            postData[d[508776]] = data.rolelevel;
            postData[d[508777]] = data.rolename;
            postData[d[480022]] = data.serverid;

            this.log(d[508780], postData);

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
            console.log(d[508781] + JSON.stringify(roleInfo));
            XLGame.pushData(roleInfo);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = d[508782].split('');
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
            var uuid = wx.getStorageSync(d[508728]);
            var idfv = wx.getStorageSync(d[508729]);
            var ad_code = wx.getStorageSync(d[508730]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: d[508783],
                net_type: system.wifiSignal == 0 ? '4G' : d[508784],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == d[480109] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(d[508785] + type);
            console.log(public_data);

            wx.request({
                url: d[505881] + HOST + d[508786] + type + d[508787] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(d[508788] + tmplIds);
            //获取模板ID
            callbacks[d[480675]] = typeof callback == d[481304] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(d[508789]);
                    console.log(res);
                    callbacks[d[480675]] && callbacks[d[480675]](res);
                },
                fail(res) {
                    console.log(d[508790]);
                    console.log(res);
                    callbacks[d[480675]] && callbacks[d[480675]](res);
                }
            });
        },

        // 引入悬浮窗
        floatingWindow: function (this_obj) {
            require(d[508791]);
            var sdkFloat = new SdkFloat();
            sdkFloat.createFloatIcon(this_obj);
        }
    };
}

function run(method, data, callback) {
    method in A1$Z687 && A1$Z687[method](data, callback);
}

exports.init = function (data, callback) {
    run(d[480421], data, callback);
};

exports.login = function (callback) {
    run(d[480599], '', callback);
};

exports.login = function (callback) {
    run(d[480599], '', callback);
};

exports.pay = function (data, callback) {
    run(d[480653], data, callback);
};

exports.openService = function () {
    run(d[480667]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(d[480661], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(d[480663], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(d[480665], data);
};

exports.pubSubscribe = function () {
    run(d[508792]);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(d[480666], data);
};

exports.msgCheck = function (data, callback) {
    run(d[480551], data, callback);
};

exports.downloadClient = function () {
    run(d[508793]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(d[508794]);
};

exports.floatingWindow = function (this_obj) {
    run(d[508795], this_obj);
};
exports.subscribeMessage = function (data, callback) {
    run(d[480675], data, callback);
};