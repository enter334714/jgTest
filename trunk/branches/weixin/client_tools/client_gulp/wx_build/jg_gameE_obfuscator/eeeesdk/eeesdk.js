var b = wx.$e;
// 引入渠道JS文件
import SDKyyw from './eeehelp';
var config = {
    game_id: b[56339],
    game_pkg: b[56340], //有一 --飞剑 --侠义九州
    partner_id: b[56341],
    game_ver: b[56342],
    is_auth: false, //授权登录   
    from: null, //来源
    tmpId: {} // 订阅的类型 和 模板id
};
window.config = config;
// 渠道配置
var partner_config = {
    app_id: 1000207,
    app_key: b[56343]
};

var E$YRGJQ = E$YGJRQ();
var HOST = b[56344];
var E$YGQJR = null;
var E$YGQRJ = null;
var E$YGJQR = null;
var partner_user_info = null;
var checkHandler = null;
var loginHandler = null;
var requestCallback = false;

function E$YGJRQ() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(b[56345]);
            var self = this;

            var uuid = wx.getStorageSync(b[56346]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(b[56346], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(b[56347]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(b[56347], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(b[56348], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(b[30267], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                E$YGQRJ = {
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
            console.log(b[56349]);
            var self = this;
            callbacks[b[56243]] = typeof callback == b[56070] ? callback : null;

            //初始化参数
            SDKyyw.initLoginCallback = res => {
                console.log(b[56350] + JSON.stringify(res));
                if (res.status == 0) {
                    console.log(b[56351]);
                    callback(1, {
                        errMsg: b[56352]
                    });
                    return;
                }

                partner_user_info = res.data;
                self.do_login(partner_user_info);
            };

            SDKyyw.init(partner_config.app_id, partner_config.app_key);
        },

        do_login: function (info) {
            var self = this;
            var public_data = self.getPublicData();
            public_data[b[56353]] = info ? info.nick_name : '';
            public_data[b[56354]] = info ? info.head_img : '';

            if (E$YGQRJ && typeof E$YGQRJ == b[30262]) {
                for (var key in E$YGQRJ) {
                    public_data[key] = E$YGQRJ[key];
                }
            }

            public_data[b[56355]] = info.uid;

            var lastTime = Date.now();
            wx.request({
                url: b[56356] + HOST + b[56357],
                method: b[56358],
                dataType: b[35043],
                header: {
                    'content-type': b[56269] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(b[56359] + JSON.stringify(res));
                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
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
                                wx.setStorageSync(b[56360], data.data.sdk_token);
                                wx.setStorageSync(b[56361], data.data.user_id);
                                wx.setStorageSync(b[56362], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(b[56363], data.data.ext);
                                }
                            } catch (e) {}

                            callbacks[b[56243]] && callbacks[b[56243]](0, userData);
                        } else {
                            callbacks[b[56243]] && callbacks[b[56243]](1, { type: b[56364], errMsg: data.msg, time: Date.now() - lastTime, res: res });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(b[56365], function (data) {
                            console.log(b[56366]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(b[56365]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[b[56243]] && callbacks[b[56243]](1, { type: b[56364], errMsg: b[56367], time: Date.now() - lastTime, res: res });
                    }
                },
                fail: function (res) {
                    console.log(b[56368]);
                    console.log(res);

                    requestCallback = true;
                    if (loginHandler) clearTimeout(loginHandler);
                    loginHandler = null;
                    callbacks[b[56243]] && callbacks[b[56243]](1, { type: b[56369], errMsg: res.errMsg, time: Date.now() - lastTime, res: res });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(b[56370]);

                    callbacks[b[56243]] && callbacks[b[56243]](1, { type: b[56371], errMsg: b[56372], time: Date.now() - lastTime });
                    callbacks[b[56243]] = null; //回调后置空，以免success或fail里重复回调
                };
                loginHandler = setTimeout(timeOutFunc, 20000);
            }
        },

        share: function (data) {
            callbacks[b[56328]] = typeof callback == b[56070] ? callback : null;
            var type = data.type || b[56328];
            console.log(b[56373] + type);
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
            var sdk_token = wx.getStorageSync(b[56360]);
            wx.request({
                url: b[56356] + HOST + b[56374],
                method: b[56358],
                dataType: b[35043],
                header: {
                    'content-type': b[56269] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: E$YGQJR ? E$YGQJR.server_id : '',
                    role_id: E$YGQJR ? E$YGQJR.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(b[56375]);
            callbacks[b[36230]] = typeof callback == b[56070] ? callback : null;
            var sdk_token = wx.getStorageSync(b[56360]);
            wx.request({
                url: b[56356] + HOST + b[56376],
                method: b[56358],
                dataType: b[35043],
                header: {
                    'content-type': b[56269] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(b[56377]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callbacks[b[36230]] && callbacks[b[36230]](data.data);
                        } else {
                            callbacks[b[36230]] && callbacks[b[36230]]({ develop: 0 });
                        }
                    } else {
                        callbacks[b[36230]] && callbacks[b[36230]]({ develop: 0 });
                    }
                },
                fail: function (res) {
                    console.log(b[56378]);
                    console.log(res);
                    requestCallback = true;
                    if (checkHandler) clearTimeout(checkHandler);
                    checkHandler = null;
                    callbacks[b[36230]] && callbacks[b[36230]]({ develop: 0 });
                }
            });
            if (!requestCallback) {
                var timeOutFunc = function () {
                    console.log(b[56379]);
                    callbacks[b[36230]] && callbacks[b[36230]]({ develop: 0 });
                    callbacks[b[36230]] = null; //回调后置空，以免success或fail里重复回调
                };
                checkHandler = setTimeout(timeOutFunc, 10000);
            }
        },

        getShareInfo: function (type, callback) {
            console.log(b[56380]);
            var sdk_token = wx.getStorageSync(b[56360]);
            wx.request({
                url: b[56356] + HOST + b[56381],
                method: b[56358],
                dataType: b[35043],
                header: {
                    'content-type': b[56269] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: E$YGQJR ? E$YGQJR.server_id : '',
                    role_id: E$YGQJR ? E$YGQJR.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(b[56382]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[b[56328]] && callbacks[b[56328]](1, { errMsg: b[56383] + data.msg });
                        }
                    } else {
                        callbacks[b[56328]] && callbacks[b[56328]](1, { errMsg: b[56384] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(b[56385]);
            var sdk_token = wx.getStorageSync(b[56360]);
            wx.request({
                url: b[56356] + HOST + b[56386],
                method: b[56358],
                dataType: b[35043],
                header: {
                    'content-type': b[56269] // 默认值
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
                    console.log(b[56387]);
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
                    console.log(b[56388]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(b[56389]);
            console.log(data);

            var self = this;
            callbacks[b[56390]] = typeof callback == b[56070] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(b[56360]);
            var session_key = wx.getStorageSync(b[56363]);
            if (!sdk_token && !session_key) {
                callbacks[b[56390]] && callbacks[b[56390]](1, { errMsg: b[56391] });
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
            public_data[b[56392]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: b[56356] + HOST + b[56393],
                method: b[56358],
                dataType: b[35043],
                header: {
                    'content-type': b[56269] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(b[56394] + JSON.stringify(res));

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

                            console.log(b[56395] + JSON.stringify(payData));
                            SDKyyw.pay(payData);
                        } else {
                            callbacks[b[56390]] && callbacks[b[56390]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[b[56243]] && callbacks[b[56243]](1, { errMsg: b[56367] });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(b[56361]);
            var username = wx.getStorageSync(b[56362]);

            var postData = {};
            postData[b[56396]] = uid;
            postData[b[56397]] = username;
            postData[b[39537]] = data.roleid;
            postData[b[56398]] = data.rolelevel;
            postData[b[56399]] = data.rolename;
            postData[b[40146]] = data.serverid;

            if (data.roleid && data.serverid) {
                E$YGQJR = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[30006], postData);

            let report_data = {};
            report_data.type = 2; //1:登录，2:创建角色
            report_data.roleId = data.roleid;
            report_data.roleName = data.rolename;
            SDKyyw.pushData(report_data);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(b[56361]);
            var username = wx.getStorageSync(b[56362]);

            var postData = {};
            postData[b[56396]] = uid;
            postData[b[56397]] = username;
            postData[b[39537]] = data.roleid;
            postData[b[56398]] = data.rolelevel;
            postData[b[56399]] = data.rolename;
            postData[b[40146]] = data.serverid;

            if (data.roleid && data.serverid) {
                E$YGQJR = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[34950], postData);

            //进入游戏确认邀请成功
            if (E$YGQRJ) {
                this.updateShare(E$YGQRJ.invite, E$YGQRJ.invite_type, E$YGQRJ.is_new, data.roleid, data.serverid, E$YGQRJ.scene);
            }

            let report_data1 = {};
            report_data1.type = 1; //1:登录，2:创建角色
            report_data1.roleId = data.roleid;
            report_data1.roleName = data.rolename;
            SDKyyw.pushData(report_data1);

            let report_data2 = {};
            report_data2.type = 5; //5:在线
            report_data2.roleId = data.roleid;
            report_data2.roleName = data.rolename;
            SDKyyw.pushData(report_data2);
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(b[56361]);
            var username = wx.getStorageSync(b[56362]);

            var postData = {};
            postData[b[56396]] = uid;
            postData[b[56397]] = username;
            postData[b[39537]] = data.roleid;
            postData[b[56398]] = data.rolelevel;
            postData[b[56399]] = data.rolename;
            postData[b[40146]] = data.serverid;

            if (data.roleid && data.serverid) {
                E$YGQJR = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(b[56400], postData);
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
            var uuid = wx.getStorageSync(b[56346]);
            var idfv = wx.getStorageSync(b[56347]);
            var ad_code = wx.getStorageSync(b[56348]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                is_from_min: 1,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: b[56401],
                net_type: system.wifiSignal == 0 ? '4G' : b[56402],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == b[56162] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(b[56403] + type);
            console.log(public_data);

            wx.request({
                url: b[56356] + HOST + b[56404] + type + b[56405] + encodeURIComponent(JSON.stringify(public_data))
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
            console.log(b[56406] + JSON.stringify(launchOptions));

            // 返回的数据 {query:{}, scene:1001, shareTicket: '', referrerInfo: {}}        }
        },

        // 关键字屏蔽
        msgCheck: function (msg, callback) {
            SDKyyw.msgSecCheck(msg, function (res) {
                console.log(b[56407] + JSON.stringify(res));
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
                    ret_res.statusCode = 0;
                    ret_res.data.state = 0;
                }
                callback && callback(ret_res);
            });
        }
    };
}

function run(method, data, callback) {
    method in E$YRGJQ && E$YRGJQ[method](data, callback);
}

exports.init = function (data, callback) {
    run(b[30338], data, callback);
};

exports.login = function (callback) {
    run(b[56243], '', callback);
};

exports.login = function (callback) {
    run(b[56243], '', callback);
};

exports.pay = function (data, callback) {
    run(b[56390], data, callback);
};

exports.openService = function () {
    run(b[52590]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(b[56408], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run('logEnterGame', data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(b[56409], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(b[56328], data);
};

exports.downloadClient = function () {
    run(b[56410]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getLaunchOptionsSync = function (callback) {
    run(b[56411], callback);
};

exports.msgCheck = function (msg, callback) {
    run(b[40629], msg, callback);
};