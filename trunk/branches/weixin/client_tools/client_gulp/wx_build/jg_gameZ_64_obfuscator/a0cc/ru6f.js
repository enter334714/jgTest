var f = wx.$B;
import XiyouGameSdk from '../xiyougamesdk/xiyougamesdk';
import XYCommon from '../xiyougamesdk/utils/common';
import XYEvents from '../xiyougamesdk/utils/event';
import XYConfig from '../xiyougamesdk/config';

//TODO 替换对应参数
var config = {
    game_id: f[0],
    game_pkg: f[1],
    partner_label: f[2],
    partner_id: f[3],
    game_ver: f[4],
    is_auth: true, //授权登录
    partner_debugState: true,
    partner_appId: f[5],
    partner_appKey: f[6],
    partner_masterId: '93',
    partner_channelId: f[7],
    partner_packageId: f[8],
    partner_packageName: f[9],
    partner_appVersion: f[10]
};
window.config = config;
var t1CLOZI = t1COIZL();
var HOST = f[11];
var t;
var t_second = 0;
var t_max = 300;
var t1CLOIZ = null;
var t1COZIL = null;
var t1COZLI = null;

function t1COIZL() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(f[12]);
            var self = this;

            var uuid = wx.getStorageSync(f[13]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(f[13], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(f[14]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(f[14], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(f[15], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(f[16], data);
            console.log(f[17]);
            //TODO 替换对应参数
            let xiYouConf = new XYConfig();
            xiYouConf.debugState = config.partner_debugState;
            xiYouConf.appId = config.partner_appId;
            xiYouConf.appKey = config.partner_appKey;
            xiYouConf.masterId = config.partner_masterId;
            xiYouConf.channelId = config.partner_channelId;
            xiYouConf.packageId = config.partner_packageId;
            xiYouConf.packageName = config.partner_packageName;
            xiYouConf.appVersion = config.game_ver;

            XiyouGameSdk.getInstance().init(xiYouConf, XYEvents.getInstance);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                t1COZIL = {
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
        //TODO 替换联运登录接口
        login: function (data, callback) {
            console.log(f[18]);
            var that = this;
            callbacks[f[19]] = typeof callback == f[20] ? callback : null;

            XYEvents.getInstance().on(f[21], function (data) {
                if (data.status == XYCommon.Status().Success) {
                    XYCommon.xylog(f[22]);
                } else {
                    XYCommon.xylog(f[23]);
                }
            });
            XiyouGameSdk.getInstance().login();
            XYEvents.getInstance().on(f[24], function (data) {
                console.log(f[25] + JSON.stringify(data));
                XYCommon.xylog(f[26], data);
                if (data.status == XYCommon.Status().Success) {

                    var login_data = {
                        // 用户唯一标识
                        userId: data.userId,
                        //用于验证用户合法性的token
                        token: data.token,
                        // 客户端扩展参数
                        clientInfo: XiyouGameSdk.getInstance().getClientInfo()
                    };

                    console.log(login_data);
                    that.do_login(login_data);
                } else {
                    XYCommon.xylog(f[27]);
                }
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            public_data[f[28]] = info.userId;
            public_data[f[29]] = info.token;
            public_data[f[30]] = info.clientInfo;
            public_data[f[31]] = 1;
            if (t1COZIL && typeof t1COZIL == f[32]) {
                for (var key in t1COZIL) {
                    public_data[key] = t1COZIL[key];
                }
            }

            wx.request({
                url: f[33] + HOST + f[34],
                method: f[35],
                dataType: f[36],
                header: {
                    'content-type': f[37] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(f[38]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(f[39], data.data.sdk_token);
                                wx.setStorageSync(f[40], data.data.user_id);
                                wx.setStorageSync(f[41], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(f[42], data.data.ext);
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
                            callbacks[f[19]] && callbacks[f[19]](0, userData);
                        } else {
                            callbacks[f[19]] && callbacks[f[19]](1, {
                                errMsg: data.msg
                            });
                        }
                        //登录成功，加载右上角分享数据
                        self.getShareInfo(f[43], function (data) {
                            console.log(f[44]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(f[43]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query
                                };
                            });
                        });
                    } else {
                        callbacks[f[19]] && callbacks[f[19]](1, {
                            errMsg: f[45]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[f[46]] = typeof callback == f[20] ? callback : null;
            var type = data.type || f[46];
            console.log(f[47] + type);
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
            var sdk_token = wx.getStorageSync(f[39]);
            wx.request({
                url: f[33] + HOST + f[48],
                method: f[35],
                dataType: f[36],
                header: {
                    'content-type': f[37] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: t1CLOIZ ? t1CLOIZ.server_id : '',
                    role_id: t1CLOIZ ? t1CLOIZ.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            XiyouGameSdk.getInstance().openCustomerServiceConversation();
            XYCommon.xylog(f[49]);
            // wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(f[50]);
            var sdk_token = wx.getStorageSync(f[39]);
            wx.request({
                url: f[33] + HOST + f[51],
                method: f[35],
                dataType: f[36],
                header: {
                    'content-type': f[37] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(f[52]);
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
            console.log(f[53]);
            var sdk_token = wx.getStorageSync(f[39]);
            wx.request({
                url: f[33] + HOST + f[54],
                method: f[35],
                dataType: f[36],
                header: {
                    'content-type': f[37] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: t1CLOIZ ? t1CLOIZ.server_id : '',
                    role_id: t1CLOIZ ? t1CLOIZ.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(f[55]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[f[46]] && callbacks[f[46]](1, {
                                errMsg: f[56] + data.msg
                            });
                        }
                    } else {
                        callbacks[f[46]] && callbacks[f[46]](1, {
                            errMsg: f[57]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(f[58]);
            var sdk_token = wx.getStorageSync(f[39]);
            wx.request({
                url: f[33] + HOST + f[59],
                method: f[35],
                dataType: f[36],
                header: {
                    'content-type': f[37] // 默认值
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
                    console.log(f[60]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(f[61]);
            XiyouGameSdk.getInstance().checkSensitiveWords(content, function (ret) {
                var res = {};
                res.data = {};
                if (ret.status === 1) {
                    res.data.state = 1;
                    res.statusCode = 200;
                    console.log(f[62]);
                } else {
                    res.data.state = 0;
                    res.statusCode = 200;
                    console.log(f[63]);
                }
                callback && callback(res);
            });
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(f[64]);
            console.log(data);

            var self = this;
            callbacks[f[65]] = typeof callback == f[20] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(f[39]);
            var session_key = wx.getStorageSync(f[42]);
            if (!sdk_token && !session_key) {
                callbacks[f[65]] && callbacks[f[65]](1, {
                    errMsg: f[66]
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
                platform: sysInfo.platform,
                clientInfo: XiyouGameSdk.getInstance().getClientInfo(),
                packageId: XiyouGameSdk.getInstance().getCurrFlag()
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[f[67]] = JSON.stringify(order_data);
            public_data[f[31]] = 1;

            //发起网络请求
            wx.request({
                url: f[33] + HOST + f[68],
                method: f[35],
                dataType: f[36],
                header: {
                    'content-type': f[37] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(f[69]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            //TODO 替换对应方法
                            let payParams = {};
                            payParams.fixedPay = true; // 是否定额支付
                            payParams.productId = data.data.pay_data.productID; // 充值商品ID，游戏内的商品ID，必须为数字
                            payParams.productName = data.data.pay_data.productName; // 商品名称，比如100元宝，500钻石
                            payParams.productDesc = data.data.pay_data.productDesc; // 商品描述，比如 充值100元宝，赠送20元宝
                            payParams.ration = data.data.pay_data.extension.ratio; // 兑换比例（游戏内虚拟币兑换人民币）
                            payParams.coinName = f[70]; // 货币名称（比如：钻石、元宝）
                            payParams.price = data.data.pay_data.money; // 充值金额(单位：分)，非定额支付设置为0
                            payParams.buyNum = data.data.pay_data.buyNum; // 购买数量，一般都是1
                            payParams.orderId = data.data.pay_data.partner_orderid; // XiYouServer订单号，下单时，XiYouServer返回的 *必填
                            payParams.extension = data.data.pay_data.extension; // 扩展数据，下单时，XiyouServer返回的
                            // payParams.zoneid = data.data.pay_data.serverID;//游戏区服id
                            payParams.zoneid = 1; //游戏区服id
                            payParams.sandbox = false; // 是否沙箱支付环境
                            console.log(f[71] + JSON.stringify(payParams));
                            XiyouGameSdk.getInstance().pay(payParams);
                            // 支付回调
                            XYEvents.getInstance().on(f[72], function (data) {
                                XYCommon.xylog(f[73], data);
                                if (data.status == XYCommon.Status().Success) {
                                    // 注意！充值一定以服务器回调为准，这里需要游戏客户端与游戏服务端进行确认是否到账
                                    XYCommon.xylog(f[72], f[74]);
                                } else if (data.status == XYCommon.Status().Pay_Qrcode) {
                                    // !!! ios平台返回二维码支付，其中：qrcode表示二维码图片base64之后文件流
                                    let qrcode = data.qrcode;
                                } else if (data.status == XYCommon.Status().Pay_Fail) {
                                    // 支付失败，可让用户再次发起支付以及处理游戏其它业务逻辑
                                    XYCommon.xylog(f[72], f[75]);
                                } else if (data.status == XYCommon.Status().Pay_Wait) {
                                    // 接入方可设置一定时间的等待，在等待时间内向服务端进行定时不间断的确认订单状态，如超时未成功可认为是一次失败的支付
                                    XYCommon.xylog(f[72], f[76]);
                                } else if (data.status == XYCommon.Status().Pay_Cancel) {
                                    // 用户中途取消支付，可让用户再次发起支付以及处理游戏其它业务逻辑
                                    XYCommon.xylog(f[72], f[77]);
                                }
                            });
                        } else {
                            callbacks[f[65]] && callbacks[f[65]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[f[19]] && callbacks[f[19]](1, {
                            errMsg: f[45]
                        });
                    }
                }
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(f[40]);
            var username = wx.getStorageSync(f[41]);

            var postData = {};
            postData[f[78]] = uid;
            postData[f[79]] = username;
            postData[f[80]] = data.roleid;
            postData[f[81]] = data.rolelevel;
            postData[f[82]] = data.rolename;
            postData[f[83]] = data.serverid;

            if (data.roleid && data.serverid) {
                t1CLOIZ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(f[84], postData);

            // 上报
            let extraData = {};
            extraData.dataType = 2; //调用时机  1：登录(进入游戏区服时)，2，创建角色，3：升级，4退出(包括用户退出游戏、用户注销角色账号)
            extraData.serverId = Number(data.serverid); //玩家所在服务器的ID,必须为数字
            extraData.serverName = data.servername; //玩家所在服务器的名称
            extraData.roleId = Number(data.roleid); //玩家角色ID，必须为数字,若无传入0
            extraData.roleName = data.rolename; //玩家角色名称，若无传入"无"
            extraData.roleLevel = Number(data.rolelevel); //玩家角色等级 或 积分,必须为数字
            extraData.roleCTime = Date.parse(new Date()) / 1000; //角色创建时间（单位：秒），长度10，获取服务器存储的时间，不可用手机时间
            extraData.roleLevelIMTime = Date.parse(new Date()) / 1000; //角色等级变化时间（单位：秒），长度10,获取服务器存储的时间，不可用手机时间
            extraData.moneyNum = 1; //当前角色身上拥有的游戏币数量,必须为数字
            extraData.vip = "0"; //vip等级，不能为空，默认传0
            extraData.power = "0"; //战力，不能为空，默认传0
            XiyouGameSdk.getInstance().submitExtraData(extraData);
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(f[40]);
            var username = wx.getStorageSync(f[41]);

            var postData = {};
            postData[f[78]] = uid;
            postData[f[79]] = username;
            postData[f[80]] = data.roleid;
            postData[f[81]] = data.rolelevel;
            postData[f[82]] = data.rolename;
            postData[f[83]] = data.serverid;

            if (data.roleid && data.serverid) {
                t1CLOIZ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(f[85], postData);
            console.log(f[86] + data);
            // 上报
            let extraData = {};
            extraData.dataType = 1; //调用时机  1：登录(进入游戏区服时)，2，创建角色，3：升级，4退出(包括用户退出游戏、用户注销角色账号)
            extraData.serverId = Number(data.serverid); //玩家所在服务器的ID,必须为数字
            extraData.serverName = data.servername; //玩家所在服务器的名称
            extraData.roleId = Number(data.roleid); //玩家角色ID，必须为数字,若无传入0
            extraData.roleName = data.rolename; //玩家角色名称，若无传入"无"
            extraData.roleLevel = Number(data.rolelevel); //玩家角色等级 或 积分,必须为数字
            extraData.roleCTime = Date.parse(new Date()) / 1000; //角色创建时间（单位：秒），长度10，获取服务器存储的时间，不可用手机时间
            extraData.roleLevelIMTime = Date.parse(new Date()) / 1000; //角色等级变化时间（单位：秒），长度10,获取服务器存储的时间，不可用手机时间
            extraData.moneyNum = 1; //当前角色身上拥有的游戏币数量,必须为数字
            extraData.vip = "0"; //vip等级，不能为空，默认传0
            extraData.power = "0"; //战力，不能为空，默认传0
            XiyouGameSdk.getInstance().submitExtraData(extraData);

            //进入游戏确认邀请成功
            if (t1COZIL) {
                this.updateShare(t1COZIL.invite, t1COZIL.invite_type, t1COZIL.is_new, data.roleid, data.serverid, t1COZIL.scene);
            }
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(f[40]);
            var username = wx.getStorageSync(f[41]);

            var postData = {};
            postData[f[78]] = uid;
            postData[f[79]] = username;
            postData[f[80]] = data.roleid;
            postData[f[81]] = data.rolelevel;
            postData[f[82]] = data.rolename;
            postData[f[83]] = data.serverid;

            if (data.roleid && data.serverid) {
                t1CLOIZ = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(f[87], postData);

            // 上报
            let extraData = {};
            extraData.dataType = 3; //调用时机  1：登录(进入游戏区服时)，2，创建角色，3：升级，4退出(包括用户退出游戏、用户注销角色账号)
            extraData.serverId = Number(data.serverid); //玩家所在服务器的ID,必须为数字
            extraData.serverName = data.servername; //玩家所在服务器的名称
            extraData.roleId = Number(data.roleid); //玩家角色ID，必须为数字,若无传入0
            extraData.roleName = data.rolename; //玩家角色名称，若无传入"无"
            extraData.roleLevel = Number(data.rolelevel); //玩家角色等级 或 积分,必须为数字
            extraData.roleCTime = Date.parse(new Date()) / 1000; //角色创建时间（单位：秒），长度10，获取服务器存储的时间，不可用手机时间
            extraData.roleLevelIMTime = Date.parse(new Date()) / 1000; //角色等级变化时间（单位：秒），长度10,获取服务器存储的时间，不可用手机时间
            extraData.moneyNum = 1; //当前角色身上拥有的游戏币数量,必须为数字
            extraData.vip = "0"; //vip等级，不能为空，默认传0
            extraData.power = "0"; //战力，不能为空，默认传0
            XiyouGameSdk.getInstance().submitExtraData(extraData);
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = f[88].split('');
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
            var uuid = wx.getStorageSync(f[13]);
            var idfv = wx.getStorageSync(f[14]);
            var ad_code = wx.getStorageSync(f[15]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: f[89],
                net_type: system.wifiSignal == 0 ? '4G' : f[90],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == f[91] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(f[92] + type);
            console.log(public_data);

            wx.request({
                url: f[33] + HOST + f[93] + type + f[94] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            XiyouGameSdk.getInstance().openCustomerServiceConversation();
            XYCommon.xylog(f[49]);
            // wx.openCustomerServiceConversation();
        }
    };
}

function run(method, data, callback) {
    method in t1CLOZI && t1CLOZI[method](data, callback);
}

exports.init = function (data, callback) {
    run(f[95], data, callback);
};

exports.login = function (callback) {
    run(f[19], '', callback);
};

exports.login = function (callback) {
    run(f[19], '', callback);
};
exports.pay = function (data, callback) {
    run(f[65], data, callback);
};
exports.openService = function () {
    run(f[96]);
};
exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(f[97], data);
};
exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(f[98], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(f[99], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(f[46], data);
};
exports.msgCheck = function (data, callback) {
    run(f[100], data, callback);
};
exports.downloadClient = function () {
    run(f[101]);
};
exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};
exports.getPublicData = function () {
    run(f[102]);
};