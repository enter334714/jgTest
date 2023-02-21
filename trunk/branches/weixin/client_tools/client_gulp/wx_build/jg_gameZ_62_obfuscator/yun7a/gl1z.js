var f = wx.$B;
var P8SDK = require(f[35510]);
require(f[35511]);

//TODO 替换对应参数 qingjs
var config = {
    game_id: f[35512],
    game_pkg: f[35513],
    partner_label: f[35514],
    partner_id: f[35515],
    game_ver: f[35516],
    is_auth: true, //授权登录

    site_android: f[35517],
    key_android: f[35518],
    site_ios: f[35519],
    key_ios: f[35520],

    aid_android: f[35521],
    aid_ios: f[35522]
};
window.config = config;
var t1$JWRS = t1$WSRJ();
var HOST = f[35523];
var t1$JWSR = null;
var t1$WRSJ = null;
var partner_data = {};
var system = wx.getSystemInfoSync();
var partner_user_info = {};
var partner_info = {};

function t1$WSRJ() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(f[35524]);
            var self = this;

            var uuid = wx.getStorageSync(f[35525]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(f[35525], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(f[35526]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(f[35526], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(f[35527], info.query.ad_code);
            }
            wx.showShareMenu();
            var data = {
                install: is_new,
                scene: scene
            };
            self.log(f[1788], data);
            //TODO 替换对应参数

            wx.showShareMenu({ withShareTicket: true });

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                t1$WRSJ = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }
            var aid = '';
            if (system.platform == f[680] || system.platform == f[1040]) {
                aid = config.aid_android;
            } else {
                aid = config.aid_ios;
            }
            // 初始化参数
            let initData = {
                quickApp: false, // 是否是快游戏 微信小游戏不属于快游戏
                rg_url: f[35528], // 必填，API 接入网关地址
                aid: aid, // 必填，广告渠道ID，参数问运营 快游戏只填aid_android 反之按需填aid_ios/aid_android
                // key 和 site 至少选择一个平台
                key_android: config.key_android, // 安卓 key   快游戏必填 参数问运营
                site_android: config.site_android, // 安卓 site  快游戏必填 参数问运营
                key_ios: config.key_ios, // ios  key  
                site_ios: config.site_ios // ios  site  游戏标识

                // 初始化，必须要最先执行
            };P8LogSDK.initLogData(initData).then(data => {
                console.log(data);
            });

            //判断版本号
            if (game_ver) {
                this.checkGameVersion(game_ver, function (data) {
                    callback && callback(data);
                });
            }
        },

        //TODO 替换联运登录接口
        login: function (data, callback) {
            var self = this;
            console.log(f[35529]);
            callbacks[f[715]] = typeof callback == f[1438] ? callback : null;
            P8SDK.login().then(loginData => {
                console.log(loginData);
                partner_info = loginData.data;
                self.do_login(loginData.data);
            });
        },

        do_login: function (info) {
            var self = this;
            var public_data = self.getPublicData();
            public_data[f[35530]] = 1;
            info[f[747]] = system.platform;
            public_data[f[35531]] = JSON.stringify(info);
            if (t1$WRSJ && typeof t1$WRSJ == f[1374]) {
                for (var key in t1$WRSJ) {
                    public_data[key] = t1$WRSJ[key];
                }
            }

            //发起网络请求
            wx.request({
                url: f[28786] + HOST + f[35532],
                method: f[683],
                dataType: f[1547],
                header: {
                    'content-type': f[888] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(f[35533], res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(f[35534], data.data.sdk_token);
                                wx.setStorageSync(f[35535], data.data.user_id);
                                wx.setStorageSync(f[35536], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(f[35537], data.data.ext);
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
                            callbacks[f[715]] && callbacks[f[715]](0, userData);
                        } else {
                            callbacks[f[715]] && callbacks[f[715]](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo(f[35538], function (data) {
                            console.log(f[35539] + JSON.stringify(data));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(f[35538]);
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query + "&" + qingjs.instance.getShareToken()
                                };
                            });
                        });
                    } else {
                        callbacks[f[715]] && callbacks[f[715]](1, {
                            errMsg: f[35540]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[f[833]] = typeof callback == f[1438] ? callback : null;
            var type = data.type || f[833];
            console.log(f[35541] + type);
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
            var sdk_token = wx.getStorageSync(f[35534]);
            wx.request({
                url: f[28786] + HOST + f[35542],
                method: f[683],
                dataType: f[1547],
                header: {
                    'content-type': f[888] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: t1$JWSR ? t1$JWSR.server_id : '',
                    role_id: t1$JWSR ? t1$JWSR.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            //登录后打开客服页面
            P8SDK.gotoCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(f[35543]);
            var sdk_token = wx.getStorageSync(f[35534]);
            wx.request({
                url: f[28786] + HOST + f[35544],
                method: f[683],
                dataType: f[1547],
                header: {
                    'content-type': f[888] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(f[35545]);
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
            console.log(f[35546]);
            var sdk_token = wx.getStorageSync(f[35534]);
            wx.request({
                url: f[28786] + HOST + f[35547],
                method: f[683],
                dataType: f[1547],
                header: {
                    'content-type': f[888] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: t1$JWSR ? t1$JWSR.server_id : '',
                    role_id: t1$JWSR ? t1$JWSR.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(f[35548]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[f[833]] && callbacks[f[833]](1, {
                                errMsg: f[35549] + data.msg
                            });
                        }
                    } else {
                        callbacks[f[833]] && callbacks[f[833]](1, {
                            errMsg: f[35550]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(f[35551]);
            var sdk_token = wx.getStorageSync(f[35534]);
            wx.request({
                url: f[28786] + HOST + f[35552],
                method: f[683],
                dataType: f[1547],
                header: {
                    'content-type': f[888] // 默认值
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
                    console.log(f[35553]);
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(f[35554]);
            var sdk_token = wx.getStorageSync(f[35534]);
            wx.request({
                url: f[28786] + HOST + f[35555] + config.partner_id + '/' + config.game_pkg,
                method: f[683],
                dataType: f[1547],
                header: {
                    'content-type': f[888] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content: content,
                    openid: partner_info.openid,
                    platform: system.platform
                },
                success: function (res) {
                    console.log(f[35556]);
                    console.log(res);
                    callback && callback(res);
                }
            });
        },

        pay: function (data, callback) {
            var self = this;
            self.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(f[35557], data);
            var self = this;
            callbacks[f[809]] = typeof callback == f[1438] ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync(f[35534]);
            var session_key = wx.getStorageSync(f[35537]);
            if (!sdk_token && !session_key) {
                callbacks[f[809]] && callbacks[f[809]](1, {
                    errMsg: f[35558]
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
            public_data[f[35559]] = JSON.stringify(order_data);
            public_data[f[35530]] = 1;

            //发起网络请求
            wx.request({
                url: f[28786] + HOST + f[35560],
                method: f[683],
                dataType: f[1547],
                header: {
                    'content-type': f[888] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(f[35561]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log(f[35562] + JSON.stringify(data.data.pay_data));
                            if (data.data.ext == '') {
                                P8SDK.pay(data.data.pay_data).then(payData => {
                                    // 请求 /h/p 接口下单成功，返回 data.result 为 0 
                                    // 如果 paytype == 5，拉起客服会话3
                                    if (payData.data.paytype && payData.data.paytype == 5) {
                                        let params = {
                                            showMessageCard: true,
                                            sendMessageTitle: f[35563],
                                            sendMessageImg: f[35564], // 消息卡片图标地址，自定义或与我方运营联系获取游戏素材
                                            sendMessagePath: payData.data.url, // 下单成功后，我方收银台地址
                                            success: function (data) {
                                                console.log(f[35565], data);
                                            },
                                            fail: function (data) {
                                                console.log(f[35566], data);
                                            },
                                            complete: function (data) {
                                                console.log(f[35567], data);
                                            }
                                            // 拉起客服，传入卡片信息
                                        };wx.openCustomerServiceConversation(params);
                                    }
                                    console.log(payData);
                                });
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[f[809]] && callbacks[f[809]](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks[f[715]] && callbacks[f[715]](1, {
                            errMsg: f[35540]
                        });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync(f[35535]);
            var username = wx.getStorageSync(f[35536]);

            var postData = {};
            postData[f[35568]] = uid;
            postData[f[35569]] = username;
            postData[f[12384]] = data.roleid;
            postData[f[35570]] = data.rolelevel;
            postData[f[35571]] = data.rolename;
            postData[f[171]] = data.serverid;

            if (data.roleid && data.serverid) {
                t1$JWSR = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }
            this.log(f[6], postData);
            var roleInfo = {
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                serverId: data.serverid,
                serverName: data.servername,
                roleVip: 0,
                rolePower: 0,
                reportType: f[35572]
            };
            // 请求参数
            var modeltype = system.platform == f[680] ? f[1040] : system.platform;
            let login_order = {
                // 必填
                sid: data.serverid, // 服务器 ID
                uid: partner_info.uid, // play800的平台UID
                roleid: data.roleid, // 角色 ID
                rolename: data.rolename, // 角色名
                device: partner_info.openid, //设备唯一标识: 安卓设备为IMEI码，苹果设备为IDFA码 小游戏如果获取不到就用 playerId 或 openId 用户唯一标识代替
                modeltype: modeltype, //设备类型: 安卓为android，苹果为iOS
                mac: '', //设备mac地址 获取不到传空字符串
                level: '', // 角色等级
                gameversion: '', //游戏版本号: 1.3.1
                ip: '', // IP 地址 获取不到传空字符串
                device_model: '', //设备机型: HUAWEI+TIT-TL00
                device_resolution: '', //设备分辨率: 1196*720
                device_version: '', //设备操作系统版本: 6.0.1
                device_net: '' //设备网络类型 : WIFI/MOBILE/WWAN
            };
            P8LogSDK.signLog(login_order).then(data => {
                console.log(data);
                // // 成功
                // data = { "result": 0 }
                // // 失败
                // data = { "result": 1,"data"  :{"errorcode" : 1104,"msg" : "\u5bc6\u7801\u4e0d\u6b63\u786e"}}
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: f[35573] + data.ext2.ext + f[35574] + data.ext2.money,
                extraData: {},
                envVersion: f[35575],
                success(res) {
                    // 打开成功
                }
            });
        },

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync(f[35535]);
            var username = wx.getStorageSync(f[35536]);

            var postData = {};
            postData[f[35568]] = uid;
            postData[f[35569]] = username;
            postData[f[12384]] = data.roleid;
            postData[f[35570]] = data.rolelevel;
            postData[f[35571]] = data.rolename;
            postData[f[171]] = data.serverid;

            if (data.roleid && data.serverid) {
                t1$JWSR = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(f[6888], postData);

            var roleInfo = {
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                serverId: data.serverid,
                serverName: data.servername,
                roleVip: 0,
                rolePower: data.rolepower ? data.rolepower : 0,
                reportType: f[35576]
            };

            //进入游戏确认邀请成功
            if (t1$WRSJ) {
                this.updateShare(t1$WRSJ.invite, t1$WRSJ.invite_type, t1$WRSJ.is_new, data.roleid, data.serverid, t1$WRSJ.scene);
            }
            var modeltype = system.platform == f[680] ? f[1040] : system.platform;
            let loginData = {
                // 必填
                uid: partner_info.uid, // play800返回的uid
                sid: data.serverid, // 游戏服务器ID
                roleid: data.roleid, // 游戏角色ID
                rolename: data.rolename, // 游戏角色名称
                level: data.rolelevel, // 登录时角色等级
                vip: '', // vip等级
                device: partner_info.openid, // 设备唯一标识: 安卓设备为IMEI码，苹果设备为IDFA码 小游戏如果获取不到就用 playerId 或 openId 用户唯一标识代替
                modeltype: modeltype, // 设备类型: 安卓为android，苹果为iOS
                device_model: '', // 设备机型: HUAWEI+TIT-TL00
                device_resolution: '', // 设备分辨率: 1196*720
                device_version: '', // 设备操作系统版本: 6.0.1
                device_net: '', // 设备网络类型 : WIFI/MOBILE/WWAN
                oaid: '', // oaid, 安卓必须传,获取不了传空, ios不传
                username: '', // Play800 sdk 用户登录账号
                ip: '', // 设备IP地址 获取不到传空字符串
                onlinetime: '' // 角色累计在线时长（单位分钟）

                // 上报请求
            };P8LogSDK.pushLoginData(loginData).then(data => {
                console.log(f[35577] + JSON.stringify(data));
            });
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync(f[35535]);
            var username = wx.getStorageSync(f[35536]);
            this.log(f[35578], data);

            var postData = {};
            postData[f[35568]] = uid;
            postData[f[35569]] = username;
            postData[f[12384]] = data.roleid;
            postData[f[35570]] = data.rolelevel;
            postData[f[35571]] = data.rolename;
            postData[f[171]] = data.serverid;

            if (data.roleid && data.serverid) {
                t1$JWSR = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            partner_user_info = {
                level: data.rolelevel
            };
            console.log(system);
            // 请求参数
            var modeltype = system.platform == f[680] ? f[1040] : system.platform;
            let gradeData = {
                uid: partner_info.uid, //Play800 sdk用户id
                device: partner_info.openid, //设备唯一标识 获取不到拿用户的openid
                modeltype: modeltype, //设备类型: 安卓为android，苹果为iOS
                level: data.rolelevel, //用户等级
                sid: data.serverid, // 服务器id
                roleid: data.roleid, // 角色id
                rolename: data.rolename, //角色名
                vip: 0,
                ip: '',
                onlinetime: '',
                device_model: '',
                device_resolution: '',
                device_version: '',
                device_net: '',
                oaid: ''
            };
            P8LogSDK.upGradeRecord(gradeData).then(data => {
                console.log(data);
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = f[35579].split('');
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

        sendUrl: function () {
            P8SDK.wxdialog({ level: partner_user_info.level }).then(data => {
                console.log(data);
                // 返回的data说明如下：
                // 如果处理成功，则调用客服按钮，拉起客服
                if (data.result == 0) {
                    let params = {
                        showMessageCard: true,
                        sendMessageTitle: f[35580],
                        sendMessageImg: f[35581], // 消息卡片图标地址，自定义或与我方运营联系获取游戏素材
                        success: function (data) {
                            console.log(f[35565], data);
                        },
                        fail: function (data) {
                            console.log(f[35566], data);
                        },
                        complete: function (data) {
                            console.log(f[35567], data);
                        }
                        // 拉起客服，传入卡片信息
                    };wx.openCustomerServiceConversation(params);
                    // 处理失败后的处理，自主决定如何处理
                } else {}
            });
        },
        // 微端小助手
        weiduanHelper: function () {
            P8SDK.wxdialog({ level: partner_user_info.level }).then(data => {
                console.log(data);
                // 返回的data说明如下：
                // 如果处理成功，则调用客服按钮，拉起客服
                if (data.result == 0) {
                    let params = {
                        showMessageCard: true,
                        sendMessageTitle: f[35580],
                        sendMessageImg: f[35581], // 消息卡片图标地址，自定义或与我方运营联系获取游戏素材
                        success: function (data) {
                            console.log(f[35565], data);
                        },
                        fail: function (data) {
                            console.log(f[35566], data);
                        },
                        complete: function (data) {
                            console.log(f[35567], data);
                        }
                        // 拉起客服，传入卡片信息
                    };wx.openCustomerServiceConversation(params);
                    // 处理失败后的处理，自主决定如何处理
                } else {}
            });
        },

        //获取公共参数
        getPublicData: function () {
            var system = wx.getSystemInfoSync();
            var uuid = wx.getStorageSync(f[35525]);
            var idfv = wx.getStorageSync(f[35526]);
            var ad_code = wx.getStorageSync(f[35527]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: f[35582],
                net_type: system.wifiSignal == 0 ? '4G' : f[35583],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == f[1040] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(f[35584] + type);
            console.log(public_data);

            wx.request({
                url: f[28786] + HOST + f[35585] + type + f[35586] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        // 玩家下线通知
        beQuit: function (data) {},
        subscribeMessage: function (tmplIds, callback) {
            callbacks[f[852]] = typeof callback == f[1438] ? callback : null;
            P8SDK.subscribeMessage().then(data => {
                console.log(f[35587], data);
                callbacks[f[852]] && callbacks[f[852]](data.wxres);
            });
        }

    };
}

function run(method, data, callback) {
    method in t1$JWRS && t1$JWRS[method](data, callback);
}

exports.init = function (data, callback) {
    run(f[408], data, callback);
};

exports.login = function (callback) {
    run(f[715], '', callback);
};

exports.login = function (callback) {
    run(f[715], '', callback);
};

exports.pay = function (data, callback) {
    run(f[809], data, callback);
};

exports.openService = function () {
    run(f[834]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(f[824], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower : 0
    };

    run(f[827], data, extra ? extra.callback : null);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra ? extra.rolepower : 0
    };
    run(f[830], data, extra ? extra.callback : null);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(f[833], data);
};

exports.msgCheck = function (data, callback) {
    run(f[643], data, callback);
};
exports.downloadClient = function () {
    run(f[35588]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(f[35589]);
};

exports.beQuit = function (data) {
    run(f[35590], data);
};
exports.subscribeMessage = function (data, callback) {
    run(f[852], data, callback);
};