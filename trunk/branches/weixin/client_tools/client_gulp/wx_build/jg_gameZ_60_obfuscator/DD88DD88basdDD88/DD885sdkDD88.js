var G = wx.$E;
import sdk from '../utils/qxMiniSDK';

//TODO 替换对应参数
var config = {
    game_id: 256,
    game_pkg: G[582002],
    partner_label: G[582003],
    partner_id: G[582004],
    game_ver: G[582005],
    is_auth: false, //授权登录
    partner_game_id: 350, // GameId
    partner_game_name: G[582006], // GameName
    partner_channel_id: 195497, // ChannelId
    wxmini_appid: G[582007] // 微信appid
};
window.config = config;
var E1CR_D6 = E1C_6DR();
var HOST = G[582008];
var E1CR_6D = null;
var E1C_D6R = null;
var sysInfo = wx.getSystemInfoSync();
var platform = sysInfo.platform;
var partner_user_info = null;

function E1C_6DR() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(G[582009]);
            var self = this;

            var uuid = wx.getStorageSync(G[582010]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(G[582010], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(G[582011]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(G[582011], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(G[582012], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(G[582013], data);

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                E1C_D6R = {
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

        login: function (data, callback) {
            console.log(G[582014]);
            callbacks[G[580829]] = typeof callback == G[581175] ? callback : null;
            var self = this;

            let init_params = {
                game_id: config.partner_game_id,
                game_name: config.partner_game_name,
                channel_id: config.partner_channel_id,
                wxmini_appid: config.wxmini_appid
            };
            sdk.init(init_params, function (init_res) {
                console.log(G[582015] + JSON.stringify(init_res));
                sdk.login({}, function (login_res) {
                    if (login_res.statusCode == 0) {
                        partner_user_info = login_res.loginParams;
                        self.do_login(partner_user_info);
                        console.log(G[582016] + JSON.stringify(login_res));
                    }
                });
            });
        },

        do_login: function (info) {
            var self = this;

            //发起网络请求
            var public_data = self.getPublicData();
            // public_data['user_info'] = JSON.stringify(info);
            public_data[G[580982]] = info.statusCode;
            public_data[G[582017]] = info.statusCode;
            public_data[G[582018]] = info.userName;
            public_data[G[581372]] = info.timestamp;
            public_data[G[580862]] = info.sign;
            public_data[G[580859]] = info.userId;
            public_data[G[582019]] = info.guid;
            public_data[G[582020]] = info.cp_ext;
            public_data[G[582021]] = info.ext;

            if (E1C_D6R && typeof E1C_D6R == G[581074]) {
                for (var key in E1C_D6R) {
                    public_data[key] = E1C_D6R[key];
                }
            }

            wx.request({
                url: G[582022] + HOST + G[582023],
                method: G[580797],
                dataType: G[581423],
                header: {
                    'content-type': G[580989] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(G[582024] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            try {
                                wx.setStorageSync(G[582025], data.data.sdk_token);
                                wx.setStorageSync(G[582026], data.data.user_id);
                                wx.setStorageSync(G[582027], data.data.username);
                                if (data.data.ext) {
                                    wx.setStorageSync(G[582028], data.data.ext);
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
                            callbacks[G[580829]] && callbacks[G[580829]](0, userData);
                        } else {
                            callbacks[G[580829]] && callbacks[G[580829]](1, {
                                errMsg: data.msg
                            });
                        }

                        // 获取渠道配置
                        var shareObj = sdk.onShareToArk({});
                        self.getShareInfo(G[582029], function (data) {
                            console.log(G[582030]);
                            wx.onShareAppMessage(function () {
                                //记录开始分享
                                self.logStartShare(G[582029]);
                                return {
                                    title: shareObj.title,
                                    imageUrl: shareObj.imageUrl,
                                    query: data.query + '&' + shareObj.query
                                };
                            });
                        });
                    } else {
                        callbacks[G[580829]] && callbacks[G[580829]](1, {
                            errMsg: G[582031]
                        });
                    }
                }
            });
        },

        share: function (data) {
            callbacks[G[580945]] = typeof callback == G[581175] ? callback : null;
            var type = data.type || G[580945];
            console.log(G[582032] + type);
            var self = this;
            this.getShareInfo(type, function (data) {
                //记录开始分享
                self.logStartShare(type);
                var query_str = data.query;
                sdk.shareToArk({ query: query_str }, function (res) {
                    if (res.statusCode == 0) {
                        console.log(G[582033]);
                    }
                });
            });
        },

        logStartShare: function (type) {
            var sdk_token = wx.getStorageSync(G[582025]);
            wx.request({
                url: G[582022] + HOST + G[582034],
                method: G[580797],
                dataType: G[581423],
                header: {
                    'content-type': G[580989] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: E1CR_6D ? E1CR_6D.server_id : '',
                    role_id: E1CR_6D ? E1CR_6D.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(G[582035]);
            var sdk_token = wx.getStorageSync(G[582025]);
            wx.request({
                url: G[582022] + HOST + G[582036],
                method: G[580797],
                dataType: G[581423],
                header: {
                    'content-type': G[580989] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(G[582037] + JSON.stringify(res));

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
            console.log(G[582038]);
            var sdk_token = wx.getStorageSync(G[582025]);
            wx.request({
                url: G[582022] + HOST + G[582039],
                method: G[580797],
                dataType: G[581423],
                header: {
                    'content-type': G[580989] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: E1CR_6D ? E1CR_6D.server_id : '',
                    role_id: E1CR_6D ? E1CR_6D.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(G[582040]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[G[580945]] && callbacks[G[580945]](1, {
                                errMsg: G[582041] + data.msg
                            });
                        }
                    } else {
                        callbacks[G[580945]] && callbacks[G[580945]](1, {
                            errMsg: G[582042]
                        });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(G[582043]);
            var sdk_token = wx.getStorageSync(G[582025]);
            wx.request({
                url: G[582022] + HOST + G[582044],
                method: G[580797],
                dataType: G[581423],
                header: {
                    'content-type': G[580989] // 默认值
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
                    console.log(G[582045] + JSON.stringify(res));
                }
            });
        },

        msgCheck: function (content, callback) {
            console.log(G[582046] + content);
            sdk.msgSecCheck({ scene: 1, content: content }, res => {
                console.log(G[582047], res);

                let ret = {
                    data: {}
                };

                if (res.statusCode == 0 && res.checkResult.result.suggest == G[582048]) {
                    ret.statusCode = 200;
                    ret.data.state = 1;
                } else {

                    ret.statusCode = 200;
                    ret.data.state = 0;
                }

                callback && callback(ret);
            });
            // wx.request({
            //     url: 'https://' + HOST + '/partner/data/msg_check/' + config.partner_id + '/' + config.game_pkg,
            //     method: 'POST',
            //     dataType: 'json',
            //     header: {
            //         'content-type': 'application/x-www-form-urlencoded' // 默认值
            //     },
            //     data: {
            //         content:content,
            //     },
            //     success: function (res) {
            //         console.log("[SDK]查看文本是否有违规内容结果返回:" + JSON.stringify(res));

            //         let ret = {
            //             data:{}
            //         };
            //         if(res.data.code == 1){
            //             ret.statusCode = 200;
            //             ret.data.state = 1;
            //         }else{
            //             ret.statusCode = 0;
            //             ret.data.state = 0;
            //         }
            //         callback && callback(ret);
            //     }
            // });
        },

        pay: function (data, callback) {
            this.startPay(data, callback);
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(G[582049] + JSON.stringify(data));

            var self = this;
            callbacks[G[580921]] = typeof callback == G[581175] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(G[582025]);
            var session_key = wx.getStorageSync(G[582028]);
            if (!sdk_token) {
                callbacks[G[580921]] && callbacks[G[580921]](1, {
                    errMsg: G[582050]
                });
                return;
            }

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
                platform: platform
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[G[582051]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: G[582022] + HOST + G[582052],
                method: G[580797],
                dataType: G[581423],
                header: {
                    'content-type': G[580989] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(G[582053] + JSON.stringify(res));
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            if (data.data.ext == '') {
                                var params = {
                                    amount: data.data.pay_data.amount, // 充值金额 单位为分 	Y 	Number
                                    cpProductId: data.data.pay_data.cpProductId, // 商品 ID 	Y 	String
                                    productName: data.data.pay_data.productName, // 游戏货币名（如元宝，金币） 	Y 	String
                                    callbackURL: data.data.pay_data.callbackURL, // 充值回调地址（通过此地址回调游戏方充值是否成功），注意此项url需要加密，加密地址 	Y 	String
                                    cpOrderId: data.data.pay_data.cpOrderId, // 研发订单号 	Y 	String
                                    callbackInfo: data.data.pay_data.cpOrderId, // 应用私有字段（原样返回） 	N 	String
                                    chargeMount: '1', // 充值游戏币数量 	N 	Number
                                    serverId: data.data.pay_data.serverId, // 用户角色所在服 id 	Y 	String
                                    serverName: data.data.pay_data.serverName, // 用户角色所在服务器名 	Y 	String
                                    roleName: data.data.pay_data.roleName, // 角色名字 	Y 	String
                                    roleId: data.data.pay_data.roleId, // 角色 id 	Y 	String
                                    roleLevel: data.data.pay_data.roleLevel, // 角色等级 	Y 	String
                                    vipLevel: 0 // Vip 等级 	Y 	String
                                };

                                sdk.recharge(params);
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[G[580921]] && callbacks[G[580921]](1, {
                                errMsg: data.msg
                            });
                        }
                    } else {
                        callbacks[G[580829]] && callbacks[G[580829]](1, {
                            errMsg: G[582031]
                        });
                    }
                }
            });
        },
        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: G[582054] + data.ext2.cpOrderId + G[582055] + data.ext2.amount / 100,
                extraData: {},
                envVersion: G[582056],
                success(res) {
                    // 打开成功
                }
            });
        },
        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(G[582026]);
            var username = wx.getStorageSync(G[582027]);

            var postData = {};
            postData[G[582057]] = uid;
            postData[G[582058]] = username;
            postData[G[582059]] = data.roleid;
            postData[G[582060]] = data.rolelevel;
            postData[G[582061]] = data.rolename;
            postData[G[580023]] = data.serverid;

            if (data.roleid && data.serverid) {
                E1CR_6D = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(G[580167], postData);

            // 渠道上报
            var params = {
                roleId: data.roleid, // 角色 id 	Y 	String
                roleName: data.rolename, // 角色名 	Y 	String
                roleLevel: data.rolelevel, // 角色等级 	Y 	String
                serverId: data.serverid, // 角色所在服 id 	Y 	String
                serverName: data.servername, // 角色所在服名 	Y 	String
                vipLevel: 0, // 角色 vip 等级 	Y 	String
                userMoney: 0, // 角色用户余额 	Y 	String
                fighting: '', // 战力值 （若无传””） 	Y 	String
                roleCTime: Date.parse(new Date()) / 1000 // 创角时间(2021-05-06新增,10位时间戳) 	Y 	String
            };
            sdk.createRole(params).then(function (res) {
                console.log(G[582062] + JSON.stringify(res));
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(G[582026]);
            var username = wx.getStorageSync(G[582027]);

            var postData = {};
            postData[G[582057]] = uid;
            postData[G[582058]] = username;
            postData[G[582059]] = data.roleid;
            postData[G[582060]] = data.rolelevel;
            postData[G[582061]] = data.rolename;
            postData[G[580023]] = data.serverid;

            if (data.roleid && data.serverid) {
                E1CR_6D = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(G[582063], postData);

            //进入游戏确认邀请成功
            if (E1C_D6R) {
                this.updateShare(E1C_D6R.invite, E1C_D6R.invite_type, E1C_D6R.is_new, data.roleid, data.serverid, E1C_D6R.scene);
            }

            // 渠道上报
            var params = {
                roleId: data.roleid, // 角色 id 	Y 	String
                roleName: data.rolename, // 角色名 	Y 	String
                roleLevel: data.rolelevel, // 角色等级 	Y 	String
                serverId: data.serverid, // 角色所在服 id 	Y 	String
                serverName: data.servername, // 角色所在服名 	Y 	String
                vipLevel: 0, // 角色 vip 等级 	Y 	String
                userMoney: 0, // 角色用户余额 	Y 	String
                fighting: '', // 战力值 （若无传””） 	Y 	String
                roleCTime: Date.parse(new Date()) / 1000 // 创角时间(2021-05-06新增,10位时间戳) 	Y 	String
            };
            sdk.changeRole(params).then(function (res) {
                console.log(G[582062] + JSON.stringify(res));
            });
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(G[582026]);
            var username = wx.getStorageSync(G[582027]);

            var postData = {};
            postData[G[582057]] = uid;
            postData[G[582058]] = username;
            postData[G[582059]] = data.roleid;
            postData[G[582060]] = data.rolelevel;
            postData[G[582061]] = data.rolename;
            postData[G[580023]] = data.serverid;

            if (data.roleid && data.serverid) {
                E1CR_6D = {
                    role_id: data.roleid,
                    server_id: data.serverid
                };
            }

            this.log(G[582064], postData);

            // 渠道上报
            var params = {
                roleId: data.roleid, // 角色 id 	Y 	String
                roleName: data.rolename, // 角色名 	Y 	String
                roleLevel: data.rolelevel, // 角色等级 	Y 	String
                serverId: data.serverid, // 角色所在服 id 	Y 	String
                serverName: data.servername, // 角色所在服名 	Y 	String
                vipLevel: 0, // 角色 vip 等级 	Y 	String
                userMoney: 0, // 角色用户余额 	Y 	String
                fighting: '', // 战力值 （若无传””） 	Y 	String
                roleCTime: Date.parse(new Date()) / 1000 // 创角时间(2021-05-06新增,10位时间戳) 	Y 	String
            };
            sdk.upgradeRole(params).then(function (res) {
                console.log(G[582062] + JSON.stringify(res));
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = G[582065].split('');
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
            var uuid = wx.getStorageSync(G[582010]);
            var idfv = wx.getStorageSync(G[582011]);
            var ad_code = wx.getStorageSync(G[582012]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                mac: G[582066],
                is_from_min: 1,
                dname: sysInfo.model,
                net_type: sysInfo.wifiSignal == 0 ? '4G' : G[582067],
                os_ver: sysInfo.system,
                sdk_ver: sysInfo.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: sysInfo.platform == G[580122] ? 1 : 2
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(G[582068] + type);
            console.log(public_data);

            wx.request({
                url: G[582022] + HOST + G[582069] + type + G[582070] + encodeURIComponent(JSON.stringify(public_data))
            });
        },

        getDate: function () {
            var date = new Date();
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
        },

        downloadClient: function () {
            wx.openCustomerServiceConversation();
        },

        // 微端小助手
        weiduanHelper: function () {
            sdk.goBindPhone();
        },
        sendUrl: function () {
            sdk.goBindPhone();
        },

        // 设置 wx.shareMessageToFriend 接口 query 字段的值
        setMessageToFriendQuery: function (data, callback) {
            var cp_activity_id = data.activity_id;
            var result = wx.setMessageToFriendQuery({ shareMessageToFriendScene: cp_activity_id });

            callback(result);
        },
        // 获取SVIP信息
        getSvipInfo: function (data, callback) {
            console.log(G[582071]);
            var api = G[582072];
            wx.request({
                url: api,
                method: G[580980],
                dataType: G[581423],
                success: function (res) {
                    // console.log("获取图片："+res.data);
                    var info = {
                        qrcode: res.data
                    };
                    callback && callback(info);
                }
            });
        },
        subscribeMessage: function (tmplIds, callback) {
            console.log(G[582073] + tmplIds);
            //获取模板ID
            callbacks[G[580958]] = typeof callback == G[581175] ? callback : null;
            wx.requestSubscribeMessage({
                tmplIds: tmplIds,
                success(res) {
                    console.log(G[582074]);
                    console.log(res);
                    callbacks[G[580958]] && callbacks[G[580958]](res);
                },
                fail(res) {
                    console.log(G[582075]);
                    console.log(res);
                    callbacks[G[580958]] && callbacks[G[580958]](res);
                }
            });
        },
        //获取验证码
        sendCode: function (data, callback) {

            console.log(G[582076], data.phone);
            var params = {
                phone: data.phone
            };
            sdk.bindSendCode(params, function (res) {

                if (res.statusCode == 0) {
                    callback && callback(0, res);
                } else {
                    callback && callback(1, res);
                }
            });
        },
        //绑定手机
        bindPhone: function (data, callback) {

            console.log(G[582077], data.phone, data.code);
            var params = {
                phone: data.phone,
                code: data.code
            };
            sdk.bindPhone(params, function (res) {
                if (res.statusCode == 0) {
                    callback && callback(0, res);
                } else {
                    callback && callback(1, res);
                }
            });
        }
    };
}

function run(method, data, callback) {
    method in E1CR_D6 && E1CR_D6[method](data, callback);
}

exports.init = function (data, callback) {
    run(G[580557], data, callback);
};

exports.login = function (callback) {
    run(G[580829], '', callback);
};

exports.login = function (callback) {
    run(G[580829], '', callback);
};

exports.pay = function (data, callback) {
    run(G[580921], data, callback);
};

exports.openService = function () {
    run(G[580946]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(G[580936], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(G[580939], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(G[580942], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(G[580945], data);
};

exports.msgCheck = function (data, callback) {
    run(G[580773], data, callback);
};

exports.downloadClient = function () {
    run(G[582078]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.getPublicData = function () {
    run(G[582079]);
};

exports.weiduanHelper = function () {
    run(G[580948]);
};
exports.sendUrl = function () {
    run(G[582080]);
};

exports.setMessageToFriendQuery = function (data, callback) {
    run(G[582081], data, callback);
};

exports.getSvipInfo = function (data, callback) {
    run(G[582082], data, callback);
};
exports.subscribeMessage = function (data, callback) {
    run(G[580958], data, callback);
};
exports.sendCode = function (data, callback) {
    run(G[582083], data, callback);
};

exports.bindPhone = function (data, callback) {
    run(G[582084], data, callback);
};