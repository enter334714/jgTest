var b = wx.$e;
// 引入渠道JS文件
var SDKyyw = require(b[31257]);

var config = {
    game_id: b[31258],
    game_pkg: b[31259],
    partner_id: b[31260],
    game_ver: b[31261],
    is_auth: false //授权登录
};
window.config = config;
// 渠道配置
var partner_config = {
    app_id: 1000207,
    app_key: b[31262]
};

var partner_swtich_info = null;

var h5BindTelephoneOn = 0;

var e1IU01G = e1I0G1U();
var HOST = b[31263];
var e1IU0G1 = null;
var e1I01GU = null;
var e1I01UG = null;
var partner_user_info = null;

function e1I0G1U() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(b[31264]);
            var self = this;

            var uuid = wx.getStorageSync(b[31265]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(b[31265], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(b[31266]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(b[31266], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(b[31267], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(b[304], data);

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
            console.log(b[31268]);
            var self = this;
            callbacks[b[31269]] = typeof callback == b[31171] ? callback : null;

            //初始化参数
            SDKyyw.initLoginCallback = res => {
                console.log(b[31270] + JSON.stringify(res));
                if (res.status == 0) {
                    console.log(b[31271]);
                    callback(1, {
                        errMsg: b[31272]
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
            public_data[b[31273]] = info ? info.nick_name : '';
            public_data[b[31274]] = info ? info.head_img : '';

            if (e1I01GU && typeof e1I01GU == b[299]) {
                for (var key in e1I01GU) {
                    public_data[key] = e1I01GU[key];
                }
            }

            public_data[b[31275]] = info.uid;

            wx.request({
                url: b[26576] + HOST + b[31276],
                method: b[31277],
                dataType: b[5474],
                header: {
                    'content-type': b[31278] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(b[31279] + JSON.stringify(res));
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
                                wx.setStorageSync(b[31280], data.data.sdk_token);
                                wx.setStorageSync(b[31281], data.data.user_id);
                                wx.setStorageSync(b[31282], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(b[31283], data.data.ext);
                                }
                            } catch (e) {}

                            callbacks[b[31269]] && callbacks[b[31269]](0, userData);
                        } else {
                            callbacks[b[31269]] && callbacks[b[31269]](1, { errMsg: data.msg });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(b[31284], function (data) {
                            console.log(b[31285]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(b[31284]);
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
                        console.log(b[31286], states);
                        // 跳转函数回调
                        SDKyyw.cutGameCallback = data => {
                            // {status: 1,msg: "success", data: res } 跳转成功
                            // {status: 0,msg: "fail", data: err } 跳转失败
                            console.log(b[31287], data);
                        };

                        // 跳转
                        if (states) {
                            SDKyyw.cutGame();
                        }
                    } else {
                        callbacks[b[31269]] && callbacks[b[31269]](1, { errMsg: b[31288] });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[b[31289]] = typeof callback == b[31171] ? callback : null;
            var type = data.type || b[31289];
            console.log(b[31290] + type);
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
                callbacks({ status: 0, msg: b[31291] });
            }
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(b[31280]);
            wx.request({
                url: b[26576] + HOST + b[31292],
                method: b[31277],
                dataType: b[5474],
                header: {
                    'content-type': b[31278] // 默认值
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
            console.log(b[31293]);
            var sdk_token = wx.getStorageSync(b[31280]);
            wx.request({
                url: b[26576] + HOST + b[31294],
                method: b[31277],
                dataType: b[5474],
                header: {
                    'content-type': b[31278] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(b[31295]);
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
            console.log(b[31296]);
            var sdk_token = wx.getStorageSync(b[31280]);
            wx.request({
                url: b[26576] + HOST + b[31297],
                method: b[31277],
                dataType: b[5474],
                header: {
                    'content-type': b[31278] // 默认值
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
                    console.log(b[31298]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[b[31289]] && callbacks[b[31289]](1, { errMsg: b[31299] + data.msg });
                        }
                    } else {
                        callbacks[b[31289]] && callbacks[b[31289]](1, { errMsg: b[31300] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(b[31301]);
            var sdk_token = wx.getStorageSync(b[31280]);
            wx.request({
                url: b[26576] + HOST + b[31302],
                method: b[31277],
                dataType: b[5474],
                header: {
                    'content-type': b[31278] // 默认值
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
                    console.log(b[31303]);
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
                    console.log(b[31304]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(b[31305]);
            console.log(data);

            var self = this;
            callbacks[b[31306]] = typeof callback == b[31171] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(b[31280]);
            var session_key = wx.getStorageSync(b[31283]);
            if (!sdk_token && !session_key) {
                callbacks[b[31306]] && callbacks[b[31306]](1, { errMsg: b[31307] });
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
            public_data[b[31308]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: b[26576] + HOST + b[31309],
                method: b[31277],
                dataType: b[5474],
                header: {
                    'content-type': b[31278] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(b[31310] + JSON.stringify(res));

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

                            console.log(b[31311] + JSON.stringify(payData));
                            SDKyyw.pay(payData);
                        } else {
                            callbacks[b[31306]] && callbacks[b[31306]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[b[31269]] && callbacks[b[31269]](1, { errMsg: b[31288] });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(b[31281]);
            var username = wx.getStorageSync(b[31282]);

            var postData = {};
            postData[b[31312]] = uid;
            postData[b[31313]] = username;
            postData[b[10752]] = data.roleid;
            postData[b[31314]] = data.rolelevel;
            postData[b[31315]] = data.rolename;
            postData[b[11442]] = data.serverid;

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
            var uid = wx.getStorageSync(b[31281]);
            var username = wx.getStorageSync(b[31282]);

            var postData = {};
            postData[b[31312]] = uid;
            postData[b[31313]] = username;
            postData[b[10752]] = data.roleid;
            postData[b[31314]] = data.rolelevel;
            postData[b[31315]] = data.rolename;
            postData[b[11442]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1IU0G1 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[5356], postData);

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
            var uid = wx.getStorageSync(b[31281]);
            var username = wx.getStorageSync(b[31282]);

            var postData = {};
            postData[b[31312]] = uid;
            postData[b[31313]] = username;
            postData[b[10752]] = data.roleid;
            postData[b[31314]] = data.rolelevel;
            postData[b[31315]] = data.rolename;
            postData[b[11442]] = data.serverid;

            if (data.roleid && data.serverid) {
                e1IU0G1 = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[31316], postData);

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
            var chars = b[31317].split('');
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
            var uuid = wx.getStorageSync(b[31265]);
            var idfv = wx.getStorageSync(b[31266]);
            var ad_code = wx.getStorageSync(b[31267]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                is_from_min: 1,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: b[31318],
                net_type: system.wifiSignal == 0 ? '4G' : b[31319],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == b[31320] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(b[31321] + type);
            console.log(public_data);

            wx.request({
                url: b[26576] + HOST + b[31322] + type + b[31323] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(b[31324] + JSON.stringify(launchOptions));

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
                console.log(b[31325] + JSON.stringify(res));
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

            console.log(b[31326], data.phone);

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

            console.log(b[31327], data.phone, data.code);

            SDKyyw.bindTelephoneCallback = data => {
                console.log(b[31328], data);
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
            console.log(b[31329], h5BindTelephoneOn);
            if (h5BindTelephoneOn == 1) {
                SDKyyw.openCustomerService(b[31330]);
            } else {
                callback && callback({ status: 0, msg: b[31291] });
            }
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(b[31331] + tmplIds);
            //获取模板ID
            callbacks[b[31332]] = typeof callback == b[31171] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(b[31333]);
                    console.log(res);
                    callbacks[b[31332]] && callbacks[b[31332]](res);
                },
                fail(res) {
                    console.log(b[31334]);
                    console.log(res);
                    callbacks[b[31332]] && callbacks[b[31332]](res);
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in e1IU01G && e1IU01G[method](data, callback);
}

exports.init = function (data, callback) {
    run(b[394], data, callback);
};

exports.login = function (callback) {
    run(b[31269], '', callback);
};

exports.login = function (callback) {
    run(b[31269], '', callback);
};

exports.pay = function (data, callback) {
    run(b[31306], data, callback);
};

exports.openService = function () {
    run(b[24409]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(b[31335], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(b[31336], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(b[31337], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(b[31289], data);
};

exports.downloadClient = function () {
    run(b[31338]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getLaunchOptionsSync = function (callback) {
    run(b[26009], callback);
};

exports.msgCheck = function (msg, callback) {
    run(b[12246], msg, callback);
};

exports.switchEnv = function (callback) {
    run(b[31339], callback);
};
exports.switchGame = function (callback) {
    run(b[31340], callback);
};

exports.sendCode = function (data, callback) {
    run(b[31341], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(b[11572], data, callback);
};

exports.weiduanHelper = function (data, callback) {
    run(b[24288], data, callback);
};

exports.subscribeMessage = function (data, callback) {
    run(b[31332], data, callback);
};