var b = wx.$e;
// 引入渠道JS文件
var SDKyyw = require(b[31355]);

var config = {
    game_id: b[31356],
    game_pkg: b[31357], //上古神域-Z_22
    partner_id: b[31358],
    game_ver: b[31359],
    is_auth: false, //授权登录
    partner_app_id: b[31360],
    partner_app_key: b[31361]
};

window.config = config;

var e1IU01G = e1I0G1U();
var HOST = b[31362];
var e1IU0G1 = null;
var e1I01GU = null;
var e1I01UG = null;
var partner_user_info = null;

var partner_swtich_info = null;

var h5BindTelephoneOn = 0;

function e1I0G1U() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(b[31363]);
            var self = this;

            var uuid = wx.getStorageSync(b[31364]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(b[31364], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(b[31365]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(b[31365], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(b[31366], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(b[305], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                e1I01GU = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }

            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },

        //登录接口
        login: function (data, callback) {
            console.log(b[31367]);
            var self = this;
            callbacks[b[31368]] = typeof callback == b[31369] ? callback : null;

            //初始化参数
            SDKyyw.initLoginCallback = res => {
                console.log(b[31370] + JSON.stringify(res));
                if (res.status == 0) {
                    console.log(b[31371]);
                    callback(1, {
                        errMsg: b[31372]
                    });
                    return;
                }
                partner_swtich_info = {
                    showSwitchOn: res.data.showSwitchOn,
                    switchApp: res.data.switchApp,
                    switchContent: res.data.switchContent,
                    h5BindTelephoneOn: res.data.h5BindTelephoneOn.on
                };
                h5BindTelephoneOn = res.data.h5BindTelephoneOn.on || 0;

                partner_user_info = res.data;
                self.do_login(partner_user_info);
            };

            SDKyyw.init(config.partner_app_id, config.partner_app_key);
        },

        do_login: function (info) {
            var self = this;
            var public_data = self.getPublicData();
            public_data[b[31373]] = info ? info.nick_name : '';
            public_data[b[31374]] = info ? info.head_img : '';

            if (e1I01GU && typeof e1I01GU == b[300]) {
                for (var key in e1I01GU) {
                    public_data[key] = e1I01GU[key];
                }
            }

            public_data[b[31375]] = info.uid;

            wx.request({
                url: b[26707] + HOST + b[31376],
                method: b[31377],
                dataType: b[5526],
                header: {
                    'content-type': b[31378] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(b[31379] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
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
                            try {
                                wx.setStorageSync(b[31380], data.data.sdk_token);
                                wx.setStorageSync(b[31381], data.data.user_id);
                                wx.setStorageSync(b[31382], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(b[31383], data.data.ext);
                                }
                            } catch (e) {}

                            callbacks[b[31368]] && callbacks[b[31368]](0, userData);
                        } else {
                            callbacks[b[31368]] && callbacks[b[31368]](1, { errMsg: data.msg });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(b[31384], function (data) {
                            console.log(b[31385]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(b[31384]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[b[31368]] && callbacks[b[31368]](1, { errMsg: b[31386] });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[b[31387]] = typeof callback == b[31369] ? callback : null;
            var type = data.type || b[31387];
            console.log(b[31388] + type);
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
            var sdk_token = wx.getStorageSync(b[31380]);
            wx.request({
                url: b[26707] + HOST + b[31389],
                method: b[31377],
                dataType: b[5526],
                header: {
                    'content-type': b[31378] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: e1IU0G1 ? e1IU0G1.server_id : '',
                    role_id: e1IU0G1 ? e1IU0G1.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(b[31390]);
            var sdk_token = wx.getStorageSync(b[31380]);
            wx.request({
                url: b[26707] + HOST + b[31391],
                method: b[31377],
                dataType: b[5526],
                header: {
                    'content-type': b[31378] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(b[31392]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callback && callback({ develop: 0 });
                        }
                    } else {
                        callback && callback({ develop: 0 });
                    }
                }
            });
        },

        getShareInfo: function (type, callback) {
            console.log(b[31393]);
            var sdk_token = wx.getStorageSync(b[31380]);
            wx.request({
                url: b[26707] + HOST + b[31394],
                method: b[31377],
                dataType: b[5526],
                header: {
                    'content-type': b[31378] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: e1IU0G1 ? e1IU0G1.server_id : '',
                    role_id: e1IU0G1 ? e1IU0G1.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(b[31395]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[b[31387]] && callbacks[b[31387]](1, { errMsg: b[31396] + data.msg });
                        }
                    } else {
                        callbacks[b[31387]] && callbacks[b[31387]](1, { errMsg: b[31397] });
                    }
                }
            });
        },

        switchEnv: function (callbacks) {
            callbacks(partner_swtich_info);
        },

        switchGame: function (callbacks) {
            SDKyyw.cutGameCallback = data => {
                // {status: 1,msg: "success", data: res } 跳转成功
                // {status: 0,msg: "fail", data: err } 跳转失败
                callbacks(data);
            };

            // 跳转
            if (partner_swtich_info.showSwitchOn == 1) {
                SDKyyw.cutGame();
            } else {
                callbacks({ status: 0, msg: b[31398] });
            }
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(b[31399]);
            var sdk_token = wx.getStorageSync(b[31380]);
            wx.request({
                url: b[26707] + HOST + b[31400],
                method: b[31377],
                dataType: b[5526],
                header: {
                    'content-type': b[31378] // 默认值
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
                    console.log(b[31401]);
                    console.log(res);
                }
            });
        },

        pay: function (data, callback) {
            var self = this;

            wx.checkSession({
                success: function () {
                    self.startPay(data, callback);
                },
                fail: function () {
                    console.log(b[31402]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(b[31403]);
            console.log(data);

            var self = this;
            callbacks[b[31404]] = typeof callback == b[31369] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(b[31380]);
            var session_key = wx.getStorageSync(b[31383]);
            if (!sdk_token && !session_key) {
                callbacks[b[31404]] && callbacks[b[31404]](1, { errMsg: b[31405] });
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
            public_data[b[31406]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: b[26707] + HOST + b[31407],
                method: b[31377],
                dataType: b[5526],
                header: {
                    'content-type': b[31378] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(b[31408] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {

                            if (data.data.ext == '') {
                                //支付回调
                                SDKyyw.onPayCallback = backRes => {
                                    //不要通过客户端回调来作为充值判断
                                    //支付成功 data = {status:"1", data: {gameOrderid:"this is order id",money:"充值金额",productId:"商品id"}, msg:"支付成功"}
                                    console.log(b[31409], backRes);
                                    if (backRes.status === 200 && backRes.type === b[31410] && backRes.data.base64) {
                                        self.wechatscancode(order_data.productname, order_data.price, backRes.data.base64);
                                    }
                                };
                                //拉起支付
                                let payData = {};
                                payData.serverId = data.data.pay_data.serverId; //服务器id
                                payData.serverName = data.data.pay_data.serverName; //服务器名称
                                payData.roleId = data.data.pay_data.roleId; //角色id
                                payData.roleName = data.data.pay_data.roleName; //角色名称
                                payData.roleLevel = data.data.pay_data.roleLevel; //角色等级
                                payData.gameOrderid = data.data.pay_data.orderId; //cp支付订单id
                                payData.pext = data.data.pay_data.orderId; //扩展字段，服务端回调原样返回
                                payData.money = data.data.pay_data.amount; //充值金额 单位元
                                payData.productName = data.data.pay_data.productName;
                                payData.productId = data.data.pay_data.productId;

                                console.log(b[31411] + JSON.stringify(payData));
                                SDKyyw.pay(payData);
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[b[31404]] && callbacks[b[31404]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[b[31368]] && callbacks[b[31368]](1, { errMsg: b[31386] });
                    }
                }
            });
        },
        wechatscancode: function (payName, moneyNum, qrCodeUrl) {

            if (window.setQrCodeView) {
                var timer = '';
                window.setQrCodeView({ state: 1, payName: payName, show: 1, moneyNum: moneyNum, qrCodeUrl: qrCodeUrl, callback: data11 => {
                        console.log(b[31412], data11);
                    } });
            }
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: b[31413] + data.ext2.orderId + b[31414] + data.ext2.amount,
                extraData: {},
                envVersion: b[31415],
                success(res) {
                    // 打开成功
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(b[31381]);
            var username = wx.getStorageSync(b[31382]);

            var postData = {};
            postData[b[31416]] = uid;
            postData[b[31417]] = username;
            postData[b[10799]] = data.roleid;
            postData[b[31418]] = data.rolelevel;
            postData[b[31419]] = data.rolename;
            postData[b[11489]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1IU0G1 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[6], postData);

            let report_data = {};
            report_data.type = 2; //1:登录，2:创建角色
            report_data.roleId = data.roleid;
            report_data.roleName = data.rolename;
            report_data.serverId = data.serverid;
            SDKyyw.pushData(report_data);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(b[31381]);
            var username = wx.getStorageSync(b[31382]);

            var postData = {};
            postData[b[31416]] = uid;
            postData[b[31417]] = username;
            postData[b[10799]] = data.roleid;
            postData[b[31418]] = data.rolelevel;
            postData[b[31419]] = data.rolename;
            postData[b[11489]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1IU0G1 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[5408], postData);

            //进入游戏确认邀请成功
            if (e1I01GU) {
                this.updateShare(e1I01GU.invite, e1I01GU.invite_type, e1I01GU.is_new, data.roleid, data.serverid, e1I01GU.scene);
            }

            let report_data1 = {};
            report_data1.type = 1; //1:登录，2:创建角色
            report_data1.roleId = data.roleid;
            report_data1.roleName = data.rolename;
            report_data1.serverId = data.serverid;
            SDKyyw.pushData(report_data1);

            let report_data2 = {};
            report_data2.type = 5; //5:在线
            report_data2.roleId = data.roleid;
            report_data2.roleName = data.rolename;
            report_data2.serverId = data.serverid;
            SDKyyw.pushData(report_data2);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(b[31381]);
            var username = wx.getStorageSync(b[31382]);

            var postData = {};
            postData[b[31416]] = uid;
            postData[b[31417]] = username;
            postData[b[10799]] = data.roleid;
            postData[b[31418]] = data.rolelevel;
            postData[b[31419]] = data.rolename;
            postData[b[11489]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1IU0G1 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[31420], postData);

            let upgradeData = {};
            upgradeData.type = 4; //4:角色升级
            upgradeData.roleId = data.roleid;
            upgradeData.roleName = data.rolename;
            upgradeData.serverId = data.serverid;
            upgradeData.level = 0; // data.rolelevel;
            SDKyyw.pushData(upgradeData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = b[31421].split('');
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
            var uuid = wx.getStorageSync(b[31364]);
            var idfv = wx.getStorageSync(b[31365]);
            var ad_code = wx.getStorageSync(b[31366]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                is_from_min: 1,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: b[31422],
                net_type: system.wifiSignal == 0 ? '4G' : b[31423],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == b[31424] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(b[31425] + type);
            console.log(public_data);

            wx.request({
                url: b[26707] + HOST + b[31426] + type + b[31427] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        // 获取当前场景值
        getLaunchOptionsSync: function (callback) {
            let launchOptions = SDKyyw.getLaunchOptionsSync();
            callback(launchOptions);
            console.log(b[31428] + JSON.stringify(launchOptions));

            // 返回的数据 {query:{}, scene:1001, shareTicket: '', referrerInfo: {}}        }
        },

        // 关键字屏蔽
        msgCheck: function (msg, callback) {
            SDKyyw.msgSecCheck(msg, function (res) {
                console.log(b[31429] + JSON.stringify(res));
                // 返回内容和微信返回内容一样
                // errcode 0 内容正常 87014 内容有违规内容
                // errMsg ok 内容正常 risky 内容有违规内容

                let ret_res = {
                    data: {}
                };
                if (res.errcode == 0) {
                    ret_res.statusCode = 200;
                    ret_res.data.state = 1;
                } else {
                    ret_res.statusCode = 200;
                    ret_res.data.state = 0;
                }
                callback && callback(ret_res);
            });
        },
        //获取验证码
        sendCode: function (data, callback) {

            console.log(b[31430], data.phone);

            SDKyyw.getCaptchaCallback = data => {
                console.log(data);
                // 成功data = {status:"1", data: res, msg: success}
                // 失败data = {status:"0", data: fail, msg: fail}
                if (data.status == 1) {
                    callback && callback(0, data);
                } else {
                    callback && callback(1, data);
                }
            };
            SDKyyw.getCaptcha({ telephone: data.phone });
        },
        //绑定手机
        bindPhone: function (data, callback) {

            console.log(b[31431], data.phone, data.code);

            SDKyyw.bindTelephoneCallback = data => {
                console.log(b[31432], data);
                // 成功data = {status:"1", data: res, msg: success}
                // 失败data = {status:"0", data: fail, msg: fail}
                if (data.status == 1) {
                    callback && callback(0, data);
                } else {
                    callback && callback(1, data);
                }
            };
            SDKyyw.bindTelephone({ telephone: data.phone, captcha: data.code });
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(b[31433] + tmplIds);
            //获取模板ID
            callbacks[b[31434]] = typeof callback == b[31369] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(b[31435]);
                    console.log(res);
                    callbacks[b[31434]] && callbacks[b[31434]](res);
                },
                fail(res) {
                    console.log(b[31436]);
                    console.log(res);
                    callbacks[b[31434]] && callbacks[b[31434]](res);
                }
            });
        },
        weiduanHelper: function (data, callback) {
            console.log(b[31437], h5BindTelephoneOn);
            if (h5BindTelephoneOn == 1) {
                SDKyyw.openCustomerService(b[31438]);
            } else {
                callback && callback({ status: 0, msg: b[31398] });
            }
        }
    };
}

function run(method, data, callback) {
    method in e1IU01G && e1IU01G[method](data, callback);
}

exports.init = function (data, callback) {
    run(b[395], data, callback);
};

exports.login = function (callback) {
    run(b[31368], '', callback);
};

exports.login = function (callback) {
    run(b[31368], '', callback);
};

exports.pay = function (data, callback) {
    run(b[31404], data, callback);
};

exports.openService = function () {
    run(b[24499]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(b[31439], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(b[31440], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(b[31441], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(b[31387], data);
};

exports.downloadClient = function () {
    run(b[31442]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getLaunchOptionsSync = function (callback) {
    run(b[26136], callback);
};

exports.msgCheck = function (msg, callback) {
    run(b[12309], msg, callback);
};

exports.switchEnv = function (callback) {
    run(b[31443], callback);
};
exports.switchGame = function (callback) {
    run(b[31444], callback);
};

exports.weiduanHelper = function (data, callback) {
    run(b[24378], data, callback);
};

exports.sendCode = function (data, callback) {
    run(b[31445], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(b[11619], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(b[31434], data, callback);
};