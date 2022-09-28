var P8SDK = require("../utils/p8sdk-wechat-1.0.45");
require("../utils/p8sdk-log-1.0.10");

//TODO 替换对应参数 qingjs
var config = {
    game_id: '256',
    game_pkg: 'tjqy_tjqyp8wxxcxttlm_ACU',
    partner_label: 'P8xyx2',
    partner_id: '517',
    game_ver: '123.0.9',
    is_auth: true, //授权登录

    site_android:'tjqyxyx_android',
    key_android:'4a783ade4dd86783ffbdbf5e59e90b90',
    site_ios:'tjqyxyx_ios',
    key_ios:'abf090a7dcd666eb357896d0b18a3ed8',

    aid_android:'936598176368613669',
    aid_ios:'916598176368713669',
};
window.config = config;
var PARTNER_SDK = mainSDK();
var HOST = 'sdk.sh9130.com';
var user_game_info = null;
var user_invite_info = null;
var partner_data={};
var system = wx.getSystemInfoSync();
var partner_user_info = {};
var partner_info = {};

function mainSDK() {
    var callbacks = {};
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log("[SDK]CP调用init接口");
            var self = this;

            var uuid = wx.getStorageSync('plat_uuid');
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync('plat_uuid', uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync('plat_idfv');
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync('plat_idfv', idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';


            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync('plat_ad_code', info.query.ad_code);
            }
            wx.showShareMenu();
            var data = {
                install: is_new,
                scene: scene
            };
            self.log('start', data);
            //TODO 替换对应参数
          
            wx.showShareMenu({withShareTicket: true});
            
            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                user_invite_info = {
                    invite: invite,
                    invite_type: invite_type,
                    is_new: is_new,
                    scene: scene
                };
            }
            var aid = ''
            if(system.platform == "devtools" || system.platform == 'android'){
                aid = config.aid_android
            }else{
                aid = config.aid_ios
            }
            // 初始化参数
            let initData = {
                quickApp:false, // 是否是快游戏 微信小游戏不属于快游戏
                rg_url: 'https://data.play800.cn/log',        // 必填，API 接入网关地址
                aid: aid,           // 必填，广告渠道ID，参数问运营 快游戏只填aid_android 反之按需填aid_ios/aid_android
                // key 和 site 至少选择一个平台
                key_android: config.key_android,   // 安卓 key   快游戏必填 参数问运营
                site_android: config.site_android,  // 安卓 site  快游戏必填 参数问运营
                key_ios: config.key_ios,       // ios  key  
                site_ios: config.site_ios,      // ios  site  游戏标识
            }
            // 初始化，必须要最先执行
            P8LogSDK.initLogData(initData).then((data) => {
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
        login: function (data,callback) {
            var self = this;
            console.log("[SDK]调起登录");
            callbacks['login'] = typeof callback == 'function' ? callback : null;
            P8SDK.login().then((loginData) => {
                console.log(loginData);
                partner_info = loginData.data;
                self.do_login(loginData.data)
            });

        },

        do_login: function (info) {
            var self = this;
            var public_data = self.getPublicData();
            public_data['is_from_min'] = 1;
            info['platform'] = system.platform;
            public_data['user_info'] = JSON.stringify(info);
            if (user_invite_info && typeof user_invite_info == 'object') {
                for (var key in user_invite_info) {
                    public_data[key] = user_invite_info[key];
                }
            }

            //发起网络请求
            wx.request({
                url: 'https://' + HOST + '/partner/auth',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log("[SDK]登录结果：",res);
                    if (res.statusCode === 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync('plat_sdk_token', data.data.sdk_token);
                                wx.setStorageSync('plat_uid', data.data.user_id);
                                wx.setStorageSync('plat_username', data.data.username);
                                if(data.data.ext){
                                    wx.setStorageSync('plat_session_key', data.data.ext);
                                }
                            } catch (e) {
                            }
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
                            callbacks['login'] && callbacks['login'](0, userData);
                        } else {
                            callbacks['login'] && callbacks['login'](1, {
                                errMsg: data.msg
                            });
                        }

                        //登录成功，加载右上角分享数据
                        self.getShareInfo('menu', function (data) {
                            console.log("[SDK]开始监听右上角菜单分享"+JSON.stringify(data));
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare('menu');
                                return {
                                    title: data.title,
                                    imageUrl: data.img,
                                    query: data.query+ "&" + qingjs.instance.getShareToken(),
                                }
                            });
                        });
                    } else {
                        callbacks['login'] && callbacks['login'](1, {
                            errMsg: '请求平台服务器失败！'
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks['share'] = typeof callback == 'function' ? callback : null;
            var type = data.type || 'share';
            console.log("[SDK]CP调用分享 type=" + type);
            var self = this;

            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);
                wx.shareAppMessage({
                    title: data.title,
                    imageUrl: data.img,
                    query: data.query,
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=logStartShare',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: user_game_info ? user_game_info.server_id : '',
                    role_id: user_game_info ? user_game_info.role_id : '',
                    type: type,
                },
                success: function (res) {}
            });
        },

        openService: function () {
            //登录后打开客服页面
            qingjs.instance.goCustomerService();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log("[SDK]检查游戏版本");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=checkGameVersion',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log("[SDK]获取游戏版本结果");
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
            console.log("[SDK]获取分享参数");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=shareConfig',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: user_game_info ? user_game_info.server_id : '',
                    role_id: user_game_info ? user_game_info.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log("[SDK]获取分享参数结果");
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks['share'] && callbacks['share'](1, {
                                errMsg: '分享失败：' + data.msg
                            });
                        }
                    } else {
                        callbacks['share'] && callbacks['share'](1, {
                            errMsg: '获取分享数据失败！'
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log("[SDK]分享过来的玩家上报给服务器");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/game/min/?ac=updateShare',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
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
                    console.log("[SDK]上报分享结果返回:");
                    console.log(res);
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log("[SDK]查看文本是否有违规内容");
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            wx.request({
                url: 'https://' + HOST + '/partner/data/msgSecCheck2/'+config.partner_id+'/'+config.game_pkg,
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    content:content,
                    openid:partner_info.openid,
                    platform:system.platform,
                },
                success: function (res) {
                    console.log("[SDK]查看文本是否有违规内容结果返回:");
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
            console.log("[SDK]调起支付，CP传值：",data);
            var self = this;
            callbacks['pay'] = typeof callback == 'function' ? callback : null;
            //先下单
            var sdk_token = wx.getStorageSync('plat_sdk_token');
            var session_key = wx.getStorageSync('plat_session_key');
            if (!sdk_token && !session_key) {
                callbacks['pay'] && callbacks['pay'](1, {
                    errMsg: "用户未登录，支付失败！"
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
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data['order_data'] = JSON.stringify(order_data);
            public_data['is_from_min'] = 1;

            //发起网络请求
            wx.request({
                url: 'https://' + HOST + '/partner/order',
                method: 'POST',
                dataType: 'json',
                header: {
                    'content-type': 'application/x-www-form-urlencoded' // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log("[SDK]完成创建订单");
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state && data.data.pay_data) {
                            //TODO 替换对应方法
                            console.log("[SDK]联运支付参数"+JSON.stringify(data.data.pay_data));
                            if(data.data.ext == ''){
                                P8SDK.pay(data.data.pay_data).then((payData) => {
                                    // 请求 /h/p 接口下单成功，返回 data.result 为 0 
                                      // 如果 paytype == 5，拉起客服会话3
                                      if (payData.data.paytype && payData.data.paytype == 5) {
                                          let params = {
                                            showMessageCard: true,
                                            sendMessageTitle: '购买商品请点下方链接',
                                            sendMessageImg: "http://cdn.lo97.com/0928.png", // 消息卡片图标地址，自定义或与我方运营联系获取游戏素材
                                            sendMessagePath: payData.data.url, // 下单成功后，我方收银台地址
                                            success: function (data) {
                                                console.log("success =", data)
                                            },
                                            fail: function (data) {
                                                console.log("fail =", data)
                                            },
                                            complete: function (data) {
                                                console.log("complete =", data)
                                            }
                                        }
                                        // 拉起客服，传入卡片信息
                                        wx.openCustomerServiceConversation(params)
                                      }
                                     console.log(payData); 
                                });
                            }else{
                                self.extDo({ext1:data.data.ext,ext2:data.data.pay_data});
                            }
                        } else {
                            callbacks['pay'] && callbacks['pay'](1, {
                                errMsg: data.errMsg
                            });
                        }
                    } else {
                        callbacks['login'] && callbacks['login'](1, {
                            errMsg: '请求平台服务器失败！'
                        });
                    }
                }
            });
        },

        logCreateRole: function (data) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;

            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                };
            }
            this.log('create', postData);
            var roleInfo = {
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                serverId: data.serverid,
                serverName: data.servername,
                roleVip: 0,
                rolePower: 0,
                reportType: "createrole",
            };
            // 请求参数
            var modeltype = system.platform == "devtools"?'android':system.platform;
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
                gameversion: '',//游戏版本号: 1.3.1
                ip: '', // IP 地址 获取不到传空字符串
                device_model: '', //设备机型: HUAWEI+TIT-TL00
                device_resolution: '', //设备分辨率: 1196*720
                device_version: '', //设备操作系统版本: 6.0.1
                device_net: '', //设备网络类型 : WIFI/MOBILE/WWAN
            }
            P8LogSDK.signLog(login_order).then((data) => {
                console.log(data)
            // // 成功
            // data = { "result": 0 }
            // // 失败
            // data = { "result": 1,"data"  :{"errorcode" : 1104,"msg" : "\u5bc6\u7801\u4e0d\u6b63\u786e"}}
            })
          
        },


        extDo: function(data){
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: 'pages/pay/pay?order_id='+data.ext2.ext+'&money='+data.ext2.money,
                extraData: {

                },
                envVersion: 'release',
                success(res) {
                    // 打开成功
                }
            })
        },

      

        //进入游戏
        logEnterGame: function (data, callback) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;

            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                };
            }

            this.log('enter', postData);

            var roleInfo = {
                roleId: data.roleid,
                roleName: data.rolename,
                roleLevel: data.rolelevel,
                serverId: data.serverid,
                serverName: data.servername,
                roleVip: 0,
                rolePower: data.rolepower ? data.rolepower : 0,
                reportType: "entergame"    
            };

        
            //进入游戏确认邀请成功
            if (user_invite_info) {
                this.updateShare(user_invite_info.invite, user_invite_info.invite_type, user_invite_info.is_new, data.roleid, data.serverid, user_invite_info.scene);
            }
            var modeltype = system.platform == "devtools"?'android':system.platform;
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
                 onlinetime: '', // 角色累计在线时长（单位分钟）
             
        }
        // 上报请求
        P8LogSDK.pushLoginData(loginData).then((data) => {  
          console.log("pushloginData"+JSON.stringify(data));
        })
        },

        //角色升级
        logRoleUpLevel: function (data, callback) {
            var uid = wx.getStorageSync('plat_uid');
            var username = wx.getStorageSync('plat_username');
            this.log('levelup', data);

            var postData = {};
            postData['user_id'] = uid;
            postData['user_name'] = username;
            postData['role_id'] = data.roleid;
            postData['role_lev'] = data.rolelevel;
            postData['role_name'] = data.rolename;
            postData['server_id'] = data.serverid;

            if (data.roleid && data.serverid) {
                user_game_info = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                };
            }

            partner_user_info = {
                level:data.rolelevel
            }
            console.log(system);
            // 请求参数
            var modeltype = system.platform == "devtools"?'android':system.platform;
            let gradeData ={
                uid: partner_info.uid,//Play800 sdk用户id
                device: partner_info.openid,//设备唯一标识 获取不到拿用户的openid
                modeltype: modeltype,//设备类型: 安卓为android，苹果为iOS
                level:data.rolelevel,//用户等级
                sid: data.serverid,// 服务器id
                roleid:data.roleid,// 角色id
                rolename: data.rolename,//角色名
                vip: 0,
                ip: '',
                onlinetime: '',
                device_model: '',
                device_resolution: '',
                device_version: '',
                device_net: '',
                oaid: '',
            }
            P8LogSDK.upGradeRecord(gradeData).then((data) => {
                console.log(data);
            })
        
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
                        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                    }
                }
            }

            return uuid.join('');
        },

        sendUrl: function () {
            P8SDK.wxdialog({level:partner_user_info.level}).then((data) => {
                console.log(data)
                // 返回的data说明如下：
                // 如果处理成功，则调用客服按钮，拉起客服
                if (data.result == 0) {
                    let params = {
                      showMessageCard: true,
                      sendMessageTitle: '魔灵军团',
                      sendMessageImg: "http://pic2.cxtuku.com/00/07/43/b077da336c80.jpg", // 消息卡片图标地址，自定义或与我方运营联系获取游戏素材
                      success: function (data) {
                          console.log("success =", data)
                      },
                      fail: function (data) {
                          console.log("fail =", data)
                      },
                      complete: function (data) {
                          console.log("complete =", data)
                      }
                  }
                  // 拉起客服，传入卡片信息
                  wx.openCustomerServiceConversation(params)
                // 处理失败后的处理，自主决定如何处理
                } else {
                }
            })
        },
          // 微端小助手
          weiduanHelper: function() {
            P8SDK.wxdialog({level:partner_user_info.level}).then((data) => {
                console.log(data)
                // 返回的data说明如下：
                // 如果处理成功，则调用客服按钮，拉起客服
                if (data.result == 0) {
                    let params = {
                      showMessageCard: true,
                      sendMessageTitle: '魔灵军团',
                      sendMessageImg: "http://pic2.cxtuku.com/00/07/43/b077da336c80.jpg", // 消息卡片图标地址，自定义或与我方运营联系获取游戏素材
                      success: function (data) {
                          console.log("success =", data)
                      },
                      fail: function (data) {
                          console.log("fail =", data)
                      },
                      complete: function (data) {
                          console.log("complete =", data)
                      }
                  }
                  // 拉起客服，传入卡片信息
                  wx.openCustomerServiceConversation(params)
                // 处理失败后的处理，自主决定如何处理
                } else {
                }
            })
        },

        //获取公共参数
        getPublicData: function () {
            var system = wx.getSystemInfoSync();
            var uuid = wx.getStorageSync('plat_uuid');
            var idfv = wx.getStorageSync('plat_idfv');
            var ad_code = wx.getStorageSync('plat_ad_code');

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: '0000',
                net_type: system.wifiSignal == 0 ? '4G' : 'WIFI',
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == 'android' ? 1 : 2,
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log("[SDK]上报数据：" + type);
            console.log(public_data);

            wx.request({
                url: 'https://' + HOST + '/partner/h5Log/?type=' + type + '&data=' + encodeURIComponent(JSON.stringify(public_data))
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
        beQuit: function (data) {
      
        },
   
    }
}

function run(method, data, callback) {
    (method in PARTNER_SDK) && PARTNER_SDK[method](data, callback);
}

exports.init = function (data, callback) {
    run('init', data, callback);
};

exports.login = function (callback) {
    run('login', '', callback);
};

exports.login = function (callback) {
    run('login', '', callback);
};

exports.pay = function (data, callback) {
    run('pay', data, callback);
};

exports.openService = function () {
    run('openService');
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
    };
    run('logCreateRole', data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    extra = extra || {};
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower:extra.rolepower
    };

    run('logEnterGame', data, extra.callback);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel, rolecreatetime, extra) {
    extra = extra || {};
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel,
        rolecreatetime: rolecreatetime,
        rolepower: extra.rolepower
    };
    run('logRoleUpLevel', data, extra.callback);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run('share', data);
};

exports.msgCheck = function (data, callback) {
    run('msgCheck', data, callback);
};
exports.downloadClient = function () {
    run('downloadClient');
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    }
};

exports.getPublicData = function () {
    run('getPublicData');
};

exports.beQuit = function (data) {
    run('beQuit',data);
}