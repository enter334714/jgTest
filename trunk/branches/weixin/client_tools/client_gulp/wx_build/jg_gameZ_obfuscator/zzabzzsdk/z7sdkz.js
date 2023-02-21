var B = wx.$z;
// 引入渠道JS文件
import SDKyyw from './zzsshz';

var config = {
    game_id: B[2018],
    game_pkg: B[2019], //有一 --飞剑 --萌神战姬
    partner_id: B[2020],
    game_ver: B[2021],
    is_auth: false, //授权登录   
    from: null, //来源  
    tmpId: { 1: B[2022], 2: B[2023], 3: B[2024] // 订阅的类型 和 模板id
    } };
window.config = config;

// 渠道配置
var partner_config = {
    app_id: 1000220,
    app_key: B[2025]
};

var partner_swtich_info = null;

var z0RJD0Y = z0RDY0J();
var HOST = B[2026];
var z0RJDY0 = null;
var z0RD0YJ = null;
var z0RD0JY = null;
var partner_user_info = null;

var h5BindTelephoneOn = 0;

function z0RDY0J() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(B[2027]);
            var self = this;

            var uuid = wx.getStorageSync(B[2028]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(B[2028], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(B[2029]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(B[2029], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(B[2030], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(B[2031], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                z0RD0YJ = {
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
            console.log(B[2032]);
            var self = this;
            callbacks[B[172]] = typeof callback == B[1195] ? callback : null;

            //初始化参数
            SDKyyw.initLoginCallback = res => {
                console.log(B[2033] + JSON.stringify(res));
                if (res.status == 0) {
                    console.log(B[2034]);
                    callback(1, {
                        errMsg: B[2035]
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

            SDKyyw.init(partner_config.app_id, partner_config.app_key);
        },

        do_login: function (info) {
            var self = this;
            var public_data = self.getPublicData();
            public_data[B[2036]] = info ? info.nick_name : '';
            public_data[B[2037]] = info ? info.head_img : '';

            if (z0RD0YJ && typeof z0RD0YJ == B[1096]) {
                for (var key in z0RD0YJ) {
                    public_data[key] = z0RD0YJ[key];
                }
            }

            public_data[B[2038]] = info.uid;

            wx.request({
                url: B[2039] + HOST + B[2040],
                method: B[133],
                dataType: B[1441],
                header: {
                    'content-type': B[376] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(B[2041] + JSON.stringify(res));
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
                                wx.setStorageSync(B[2042], data.data.sdk_token);
                                wx.setStorageSync(B[2043], data.data.user_id);
                                wx.setStorageSync(B[2044], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(B[2045], data.data.ext);
                                }
                            } catch (e) {}

                            callbacks[B[172]] && callbacks[B[172]](0, userData);
                        } else {
                            callbacks[B[172]] && callbacks[B[172]](1, { errMsg: data.msg });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(B[2046], function (data) {
                            console.log(B[2047]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(B[2046]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[B[172]] && callbacks[B[172]](1, { errMsg: B[2048] });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[B[317]] = typeof callback == B[1195] ? callback : null;
            var type = data.type || B[317];
            console.log(B[2049] + type);
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
            var sdk_token = wx.getStorageSync(B[2042]);
            wx.request({
                url: B[2039] + HOST + B[2050],
                method: B[133],
                dataType: B[1441],
                header: {
                    'content-type': B[376] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: z0RJDY0 ? z0RJDY0.server_id : '',
                    role_id: z0RJDY0 ? z0RJDY0.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(B[2051]);
            var sdk_token = wx.getStorageSync(B[2042]);
            wx.request({
                url: B[2039] + HOST + B[2052],
                method: B[133],
                dataType: B[1441],
                header: {
                    'content-type': B[376] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(B[2053]);
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
            console.log(B[2054]);
            var sdk_token = wx.getStorageSync(B[2042]);
            wx.request({
                url: B[2039] + HOST + B[2055],
                method: B[133],
                dataType: B[1441],
                header: {
                    'content-type': B[376] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: z0RJDY0 ? z0RJDY0.server_id : '',
                    role_id: z0RJDY0 ? z0RJDY0.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(B[2056]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[B[317]] && callbacks[B[317]](1, { errMsg: B[2057] + data.msg });
                        }
                    } else {
                        callbacks[B[317]] && callbacks[B[317]](1, { errMsg: B[2058] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(B[2059]);
            var sdk_token = wx.getStorageSync(B[2042]);
            wx.request({
                url: B[2039] + HOST + B[2060],
                method: B[133],
                dataType: B[1441],
                header: {
                    'content-type': B[376] // 默认值
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
                    console.log(B[2061]);
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
                    console.log(B[2062]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(B[2063]);
            console.log(data);

            var self = this;
            callbacks[B[293]] = typeof callback == B[1195] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(B[2042]);
            var session_key = wx.getStorageSync(B[2045]);
            if (!sdk_token && !session_key) {
                callbacks[B[293]] && callbacks[B[293]](1, { errMsg: B[2064] });
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
            public_data[B[2065]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: B[2039] + HOST + B[2066],
                method: B[133],
                dataType: B[1441],
                header: {
                    'content-type': B[376] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(B[2067] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //支付回调
                            SDKyyw.onPayCallback = backRes => {
                                //不要通过客户端回调来作为充值判断
                                //支付成功 data = {status:"1", data: {gameOrderid:"this is order id",money:"充值金额",productId:"商品id"}, msg:"支付成功"}
                                console.log(B[2068], backRes);
                                if (backRes.status === 200 && backRes.type === B[2069] && backRes.data.base64) {
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

                            console.log(B[2070] + JSON.stringify(payData));
                            SDKyyw.pay(payData);
                        } else {
                            callbacks[B[293]] && callbacks[B[293]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[B[172]] && callbacks[B[172]](1, { errMsg: B[2048] });
                    }
                }
            });
        },
        wechatscancode: function (payName, moneyNum, qrCodeUrl) {

            if (window.setQrCodeView) {
                var timer = '';
                window.setQrCodeView({ state: 1, payName: payName, show: 1, moneyNum: moneyNum, qrCodeUrl: qrCodeUrl, callback: data11 => {
                        console.log(B[2071], data11);
                    } });
            }
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(B[2043]);
            var username = wx.getStorageSync(B[2044]);

            var postData = {};
            postData[B[2072]] = uid;
            postData[B[2073]] = username;
            postData[B[2074]] = data.roleid;
            postData[B[2075]] = data.rolelevel;
            postData[B[2076]] = data.rolename;
            postData[B[114]] = data.serverid;

            if (data.roleid && data.serverid) {
                z0RJDY0 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(B[591], postData);

            let report_data = {};
            report_data.type = 2; //1:登录，2:创建角色
            report_data.roleId = data.roleid;
            report_data.roleName = data.rolename;
            report_data.serverId = data.serverid;
            SDKyyw.pushData(report_data);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(B[2043]);
            var username = wx.getStorageSync(B[2044]);

            var postData = {};
            postData[B[2072]] = uid;
            postData[B[2073]] = username;
            postData[B[2074]] = data.roleid;
            postData[B[2075]] = data.rolelevel;
            postData[B[2076]] = data.rolename;
            postData[B[114]] = data.serverid;

            if (data.roleid && data.serverid) {
                z0RJDY0 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(B[2077], postData);

            //进入游戏确认邀请成功
            if (z0RD0YJ) {
                this.updateShare(z0RD0YJ.invite, z0RD0YJ.invite_type, z0RD0YJ.is_new, data.roleid, data.serverid, z0RD0YJ.scene);
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
            var uid = wx.getStorageSync(B[2043]);
            var username = wx.getStorageSync(B[2044]);

            var postData = {};
            postData[B[2072]] = uid;
            postData[B[2073]] = username;
            postData[B[2074]] = data.roleid;
            postData[B[2075]] = data.rolelevel;
            postData[B[2076]] = data.rolename;
            postData[B[114]] = data.serverid;

            if (data.roleid && data.serverid) {
                z0RJDY0 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(B[2078], postData);

            let upgradeData = {};
            upgradeData.type = 4; //4:角色升级
            upgradeData.roleId = data.roleid;
            upgradeData.roleName = data.rolename;
            upgradeData.serverId = data.serverid;
            upgradeData.level = data.rolelevel;
            SDKyyw.pushData(upgradeData);
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
                callbacks({ status: 0, msg: B[2079] });
            }
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = B[2080].split('');
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
            var uuid = wx.getStorageSync(B[2028]);
            var idfv = wx.getStorageSync(B[2029]);
            var ad_code = wx.getStorageSync(B[2030]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                is_from_min: 1,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: B[2081],
                net_type: system.wifiSignal == 0 ? '4G' : B[2082],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == B[560] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(B[2083] + type);
            console.log(public_data);

            wx.request({
                url: B[2039] + HOST + B[2084] + type + B[2085] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(B[2086] + JSON.stringify(launchOptions));

            // 返回的数据 {query:{}, scene:1001, shareTicket: '', referrerInfo: {}}        }
        },

        // 关键字屏蔽
        msgCheck: function (msg, callback) {
            SDKyyw.msgSecCheck(msg, function (res) {
                console.log(B[2087] + JSON.stringify(res));
                // 返回内容和微信返回内容一样
                // errcode 0 内容正常 87014 内容有违规内容
                // errMsg ok 内容正常 risky 内容有违规内容

                let ret_res = {
                    data: {}
                };
                if (res.status == 1) {
                    ret_res.statusCode = 200;
                    ret_res.data.state = 1;
                } else {
                    ret_res.statusCode = 0;
                    ret_res.data.state = 0;
                }
                callback && callback(ret_res);
            });
        },
        //获取验证码
        sendCode: function (data, callback) {

            console.log(B[2088], data.phone);

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

            console.log(B[2089], data.phone, data.code);

            SDKyyw.bindTelephoneCallback = data => {
                console.log(B[2090], data);
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
        weiduanHelper: function (data, callback) {
            console.log(B[2091], h5BindTelephoneOn);
            if (h5BindTelephoneOn == 1) {
                SDKyyw.openCustomerService(B[2092]);
            } else {
                callback && callback({ status: 0, msg: B[2079] });
            }
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(B[2093] + tmplIds);
            //获取模板ID
            callbacks[B[337]] = typeof callback == B[1195] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(B[2094]);
                    console.log(res);
                    callbacks[B[337]] && callbacks[B[337]](res);
                },
                fail(res) {
                    console.log(B[2095]);
                    console.log(res);
                    callbacks[B[337]] && callbacks[B[337]](res);
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in z0RJD0Y && z0RJD0Y[method](data, callback);
}

exports.init = function (data, callback) {
    run(B[146], data, callback);
};

exports.login = function (callback) {
    run(B[172], '', callback);
};

exports.login = function (callback) {
    run(B[172], '', callback);
};

exports.pay = function (data, callback) {
    run(B[293], data, callback);
};

exports.openService = function () {
    run(B[318]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(B[308], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(B[311], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(B[314], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(B[317], data);
};

exports.downloadClient = function () {
    run(B[2096]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getLaunchOptionsSync = function (callback) {
    run(B[445], callback);
};

exports.msgCheck = function (msg, callback) {
    run(B[89], msg, callback);
};

exports.switchEnv = function (callback) {
    run(B[246], callback);
};
exports.switchGame = function (callback) {
    run(B[264], callback);
};

exports.sendCode = function (data, callback) {
    run(B[2097], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(B[2098], data, callback);
};
exports.subscribeMessage = function (data, callback) {
    run(B[337], data, callback);
};