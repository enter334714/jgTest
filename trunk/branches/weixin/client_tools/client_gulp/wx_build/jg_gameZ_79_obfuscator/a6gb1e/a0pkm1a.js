var b = wx.e$;
// 引入渠道JS文件
var SDKyyw = require(b[30695]);

var config = {
    game_id: b[30696],
    game_pkg: b[30697],
    partner_id: b[30698],
    game_ver: b[30699],
    is_auth: false //授权登录
};
window.config = config;
// 渠道配置
var partner_config = {
    app_id: 1000257,
    app_key: b[30700]
};

var partner_swtich_info = null;

var h5BindTelephoneOn = 0;

var e1$6EFV = e1$EVF6();
var HOST = b[30701];
var e1$6EVF = null;
var e1$EFV6 = null;
var e1$EF6V = null;
var partner_user_info = null;

function e1$EVF6() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(b[30702]);
            var self = this;

            var uuid = wx.getStorageSync(b[30703]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(b[30703], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(b[30704]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(b[30704], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(b[30705], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(b[286], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                e1$EFV6 = {
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
            console.log(b[30706]);
            var self = this;
            callbacks[b[30707]] = typeof callback == b[30708] ? callback : null;

            //初始化参数
            SDKyyw.initLoginCallback = res => {
                console.log(b[30709] + JSON.stringify(res));
                if (res.status == 0) {
                    console.log(b[30710]);
                    callback(1, {
                        errMsg: b[30711]
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
            public_data[b[30712]] = info ? info.nick_name : '';
            public_data[b[30713]] = info ? info.head_img : '';

            if (e1$EFV6 && typeof e1$EFV6 == b[281]) {
                for (var key in e1$EFV6) {
                    public_data[key] = e1$EFV6[key];
                }
            }

            public_data[b[30714]] = info.uid;

            wx.request({
                url: b[26446] + HOST + b[30715],
                method: b[30716],
                dataType: b[5349],
                header: {
                    'content-type': b[30717] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(b[30718] + JSON.stringify(res));
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
                                wx.setStorageSync(b[30719], data.data.sdk_token);
                                wx.setStorageSync(b[30720], data.data.user_id);
                                wx.setStorageSync(b[30721], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(b[30722], data.data.ext);
                                }
                            } catch (e) {}

                            callbacks[b[30707]] && callbacks[b[30707]](0, userData);
                        } else {
                            callbacks[b[30707]] && callbacks[b[30707]](1, { errMsg: data.msg });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(b[30723], function (data) {
                            console.log(b[30724]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(b[30723]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });

                        //切量
                        // 获取跳转开关
                        let states = SDKyyw.jumpState(); // 布尔值
                        console.log(b[30725], states);
                        // 跳转函数回调
                        SDKyyw.cutGameCallback = data => {
                            // {status: 1,msg: "success", data: res } 跳转成功
                            // {status: 0,msg: "fail", data: err } 跳转失败
                            console.log(b[30726], data);
                        };

                        // 跳转
                        if (states) {
                            SDKyyw.cutGame();
                        }
                    } else {
                        callbacks[b[30707]] && callbacks[b[30707]](1, { errMsg: b[30727] });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[b[30728]] = typeof callback == b[30708] ? callback : null;
            var type = data.type || b[30728];
            console.log(b[30729] + type);
            var self = this;
            this.getShareInfo(type, function (data) {

                //记录开始分享
                self.logStartShare(type);
                SDKyyw.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query
                });
                // wx.shareAppMessage({
                //     title: data.title,
                //     imageUrl: data.img,
                //     query: data.query,
                // });
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
                callbacks({ status: 0, msg: b[30730] });
            }
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(b[30719]);
            wx.request({
                url: b[26446] + HOST + b[30731],
                method: b[30716],
                dataType: b[5349],
                header: {
                    'content-type': b[30717] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: e1$6EVF ? e1$6EVF.server_id : '',
                    role_id: e1$6EVF ? e1$6EVF.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(b[30732]);
            var sdk_token = wx.getStorageSync(b[30719]);
            wx.request({
                url: b[26446] + HOST + b[30733],
                method: b[30716],
                dataType: b[5349],
                header: {
                    'content-type': b[30717] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(b[30734]);
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
            console.log(b[30735]);
            var sdk_token = wx.getStorageSync(b[30719]);
            wx.request({
                url: b[26446] + HOST + b[30736],
                method: b[30716],
                dataType: b[5349],
                header: {
                    'content-type': b[30717] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: e1$6EVF ? e1$6EVF.server_id : '',
                    role_id: e1$6EVF ? e1$6EVF.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(b[30737]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[b[30728]] && callbacks[b[30728]](1, { errMsg: b[30738] + data.msg });
                        }
                    } else {
                        callbacks[b[30728]] && callbacks[b[30728]](1, { errMsg: b[30739] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(b[30740]);
            var sdk_token = wx.getStorageSync(b[30719]);
            wx.request({
                url: b[26446] + HOST + b[30741],
                method: b[30716],
                dataType: b[5349],
                header: {
                    'content-type': b[30717] // 默认值
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
                    console.log(b[30742]);
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
                    console.log(b[30743]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(b[30744]);
            console.log(data);

            var self = this;
            callbacks[b[30745]] = typeof callback == b[30708] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(b[30719]);
            var session_key = wx.getStorageSync(b[30722]);
            if (!sdk_token && !session_key) {
                callbacks[b[30745]] && callbacks[b[30745]](1, { errMsg: b[30746] });
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
            public_data[b[30747]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: b[26446] + HOST + b[30748],
                method: b[30716],
                dataType: b[5349],
                header: {
                    'content-type': b[30717] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(b[30749] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //支付回调
                            SDKyyw.onPayCallback = data => {}
                            //不要通过客户端回调来作为充值判断
                            //支付成功 data = {status:"1", data: {gameOrderid:"this is order id",money:"充值金额",productId:"商品id"}, msg:"支付成功"}


                            //拉起支付
                            ;let payData = {};
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

                            console.log(b[30750] + JSON.stringify(payData));
                            SDKyyw.pay(payData);
                        } else {
                            callbacks[b[30745]] && callbacks[b[30745]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[b[30707]] && callbacks[b[30707]](1, { errMsg: b[30727] });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(b[30720]);
            var username = wx.getStorageSync(b[30721]);

            var postData = {};
            postData[b[30751]] = uid;
            postData[b[30752]] = username;
            postData[b[10626]] = data.roleid;
            postData[b[30753]] = data.rolelevel;
            postData[b[30754]] = data.rolename;
            postData[b[11316]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1$6EVF = {
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
            var uid = wx.getStorageSync(b[30720]);
            var username = wx.getStorageSync(b[30721]);

            var postData = {};
            postData[b[30751]] = uid;
            postData[b[30752]] = username;
            postData[b[10626]] = data.roleid;
            postData[b[30753]] = data.rolelevel;
            postData[b[30754]] = data.rolename;
            postData[b[11316]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1$6EVF = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[5231], postData);

            //进入游戏确认邀请成功
            if (e1$EFV6) {
                this.updateShare(e1$EFV6.invite, e1$EFV6.invite_type, e1$EFV6.is_new, data.roleid, data.serverid, e1$EFV6.scene);
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
            var uid = wx.getStorageSync(b[30720]);
            var username = wx.getStorageSync(b[30721]);

            var postData = {};
            postData[b[30751]] = uid;
            postData[b[30752]] = username;
            postData[b[10626]] = data.roleid;
            postData[b[30753]] = data.rolelevel;
            postData[b[30754]] = data.rolename;
            postData[b[11316]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1$6EVF = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[30755], postData);

            let upgradeData = {};
            upgradeData.type = 4; //4:角色升级
            upgradeData.roleId = data.roleid;
            upgradeData.roleName = data.rolename;
            upgradeData.serverId = data.serverid;
            upgradeData.level = data.rolelevel;
            SDKyyw.pushData(upgradeData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = b[30756].split('');
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
            var uuid = wx.getStorageSync(b[30703]);
            var idfv = wx.getStorageSync(b[30704]);
            var ad_code = wx.getStorageSync(b[30705]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                is_from_min: 1,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: b[30757],
                net_type: system.wifiSignal == 0 ? '4G' : b[30758],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == b[30759] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(b[30760] + type);
            console.log(public_data);

            wx.request({
                url: b[26446] + HOST + b[30761] + type + b[30762] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(b[30763] + JSON.stringify(launchOptions));

            // 返回的数据 {query:{}, scene:1001, shareTicket: '', referrerInfo: {}}        }
        },

        // 关键字屏蔽
        msgCheck: function (content, callback) {

            const msg = {
                version: 2, // 接口版本号，2.0版本为固定值2
                scene: 1, // 场景枚举值（1 资料；2 评论；3 论坛；4 社交日志）
                content: content // 需检测的文本内容，文本字数的上限为2500字
            };

            SDKyyw.msgSecCheck(msg, function (res) {
                console.log(b[30764] + JSON.stringify(res));
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
                    ret_res.statusCode = 200;
                    ret_res.data.state = 0;
                }
                callback && callback(ret_res);
            });
        },
        //获取验证码
        sendCode: function (data, callback) {

            console.log(b[30765], data.phone);

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

            console.log(b[30766], data.phone, data.code);

            SDKyyw.bindTelephoneCallback = data => {
                console.log(b[30767], data);
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
            console.log(b[30768], h5BindTelephoneOn);
            if (h5BindTelephoneOn == 1) {
                SDKyyw.openCustomerService(b[30769]);
            } else {
                callback && callback({ status: 0, msg: b[30730] });
            }
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(b[30770] + tmplIds);
            //获取模板ID
            callbacks[b[30771]] = typeof callback == b[30708] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(b[30772]);
                    console.log(res);
                    callbacks[b[30771]] && callbacks[b[30771]](res);
                },
                fail(res) {
                    console.log(b[30773]);
                    console.log(res);
                    callbacks[b[30771]] && callbacks[b[30771]](res);
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in e1$6EFV && e1$6EFV[method](data, callback);
}

exports.init = function (data, callback) {
    run(b[367], data, callback);
};

exports.login = function (callback) {
    run(b[30707], '', callback);
};

exports.login = function (callback) {
    run(b[30707], '', callback);
};

exports.pay = function (data, callback) {
    run(b[30745], data, callback);
};

exports.openService = function () {
    run(b[24282]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(b[30774], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(b[30775], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(b[30776], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(b[30728], data);
};

exports.downloadClient = function () {
    run(b[30777]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getLaunchOptionsSync = function (callback) {
    run(b[25882], callback);
};

exports.msgCheck = function (msg, callback) {
    run(b[12119], msg, callback);
};

exports.switchEnv = function (callback) {
    run(b[30778], callback);
};
exports.switchGame = function (callback) {
    run(b[30779], callback);
};

exports.sendCode = function (data, callback) {
    run(b[30780], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(b[11446], data, callback);
};

exports.weiduanHelper = function (data, callback) {
    run(b[24161], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(b[30771], data, callback);
};