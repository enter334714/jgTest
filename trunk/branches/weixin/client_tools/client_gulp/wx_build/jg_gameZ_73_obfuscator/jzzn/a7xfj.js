var z1 = wx.Z$;
import config from './partner_config.js';
var _sD5OWQ = _sDOQW5();
var HOST = z1[37439];
var _sD5OQW = null;
var _sDOWQ5 = null;
var _sDOW5Q = null;

var ZsyClientMainObject = require(z1[37440]);
var parameters = {
    'zsyGame': config.partner_zsy_game,
    'zsyChannel': config.partner_zsy_channel,
    'zsySubChannel': config.partner_zsy_subChannel
};

var zsyClientMainObject = new ZsyClientMainObject(parameters);
var zsyUserId = '';
var zsyChannelUserId = '';
var querystr = {};

function _sDOQW5() {
    var callbacks = {};
    var this_pay_order = 0;
    return {
        order_data: {},
        init: function (ops, callback) {
            var game_ver = ops && ops.game_ver ? ops.game_ver : 0;
            console.log(z1[37441]);
            var self = this;

            var uuid = wx.getStorageSync(z1[37442]);
            var is_new;
            if (!uuid) {
                uuid = self.uuid(16, 32);
                wx.setStorageSync(z1[37442], uuid);
                is_new = 1;
            } else {
                is_new = 0;
            }
            var idfv = wx.getStorageSync(z1[37443]);
            if (!idfv) {
                idfv = self.uuid(16, 32);
                wx.setStorageSync(z1[37443], idfv);
            }

            var info = wx.getLaunchOptionsSync();
            var scene = info.scene ? info.scene : '';
            querystr = info.query;

            //判断今天是否已经上报过
            if (is_new && info.query && info.query.ad_code) {
                wx.setStorageSync(z1[37444], info.query.ad_code);
            }

            var data = {
                install: is_new,
                scene: scene
            };
            self.log(z1[313], data);

            //显示右上角分享按钮
            wx.showShareMenu();

            //玩家是分享过来的，单独上报给服务器
            var invite = info.query && info.query.invite ? info.query.invite : '';
            var invite_type = info.query && info.query.invite_type ? info.query.invite_type : '';

            if (invite) {
                _sDOWQ5 = {
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
            console.log(z1[37445]);
            var self = this;
            callbacks[z1[37446]] = typeof callback == z1[37359] ? callback : null;

            //授权登录
            if (config.is_auth) {
                wx.getSetting({
                    success: function (res) {
                        if (res.authSetting[z1[37447]]) {
                            self.do_login(); //已授权
                        } else {
                            var system_info = wx.getSystemInfoSync();
                            var screen_width = system_info.screenWidth;
                            var screen_height = system_info.screenHeight;
                            var btn_width = screen_width * 2 / 3;
                            var btn_height = btn_width / 3;
                            var btn_left = (screen_width - btn_width) / 2;
                            var btn_top = screen_height / 2;
                            var button = wx.createUserInfoButton({
                                type: z1[5578],
                                image: z1[37448],
                                style: {
                                    left: btn_left,
                                    top: btn_top,
                                    width: btn_width,
                                    height: btn_height
                                }
                            });
                            button.onTap(function (res) {
                                console.log(res);
                                if (res.errMsg == z1[37449]) {
                                    self.do_login({
                                        head_img: res.userInfo.avatarUrl || '',
                                        nick_name: res.userInfo.nickName || ''
                                    });
                                } else {
                                    self.do_login();
                                }
                                button.destroy();
                            });
                        }
                    },
                    fail: function () {
                        self.do_login();
                    }
                });
            } else {
                self.do_login();
            }
        },

        do_login: function () {
            var self = this;

            // 渠道登录
            zsyClientMainObject.login(result => {
                if (result.errorCode == 0) {
                    //登陆成功时,需cp验证签名后,即可成功登陆游戏...
                    var public_data = self.getPublicData();
                    var zsyExtend = JSON.parse(result.data.zsyExtend);
                    var zsyIsVIP = zsyExtend.zsyIsVIP;
                    var zsy_tp_state = zsyExtend.tjIsVIP;
                    var ad_flag = 0;
                    if (zsyExtend.AdId == 0 || !zsyExtend.AdId) {
                        ad_flag = 0;
                    } else {
                        ad_flag = 1;
                    }

                    // 登录校验
                    zsyUserId = result.data.zsyUserId;
                    zsyChannelUserId = result.data.zsyChannelUserId;

                    public_data.zsyGame = result.data.zsyGame, //游戏标识,初始化时通过url传过给游戏
                    public_data.zsyChannel = result.data.zsyChannel, //渠道标识,初始化时通过url传过给游戏
                    public_data.zsyUserId = result.data.zsyUserId, //玩家标识
                    public_data.zsyLoginTime = result.data.zsyLoginTime, //登录的时间戳
                    public_data.zsySign = result.data.zsySign, //研发需要对这个签名进行验证

                    wx.request({
                        url: z1[28077] + HOST + z1[37450],
                        method: z1[37451],
                        dataType: z1[6049],
                        header: {
                            'content-type': z1[37452] // 默认值
                        },
                        data: public_data,
                        success: function (res) {
                            console.log(z1[37453] + JSON.stringify(res));

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
                                        ios_pay: data.data.ios_pay || '0',
                                        zsyIsVIP: zsyIsVIP,
                                        zsy_tp_state: zsy_tp_state,
                                        ad_flag: ad_flag
                                    };
                                    try {
                                        wx.setStorageSync(z1[37454], data.data.sdk_token);
                                        wx.setStorageSync(z1[37455], data.data.user_id);
                                        wx.setStorageSync(z1[37456], data.data.username);
                                        if (data.data.ext) {
                                            wx.setStorageSync(z1[37457], data.data.ext);
                                        }
                                    } catch (e) {}

                                    callbacks[z1[37446]] && callbacks[z1[37446]](0, userData);
                                } else {
                                    callbacks[z1[37446]] && callbacks[z1[37446]](1, { errMsg: data.msg });
                                }

                                //登录成功，加载右上角分享数据
                                self.getShareInfo(z1[37458], function (data) {
                                    console.log(z1[37459]);
                                    wx.onShareAppMessage(function () {
                                        //记录开始分享
                                        self.logStartShare(z1[37458]);
                                        return {
                                            title: data.title,
                                            imageUrl: data.img,
                                            query: data.query
                                        };
                                    });
                                });
                            } else {
                                callbacks[z1[37446]] && callbacks[z1[37446]](1, { errMsg: z1[37460] });
                            }
                        }
                    });
                } else {
                    callbacks[z1[37446]] && callbacks[z1[37446]](1, { errMsg: z1[37461] });
                }
            });
        },

        share: function (data) {
            callbacks[z1[37462]] = typeof callback == z1[37359] ? callback : null;
            var type = data.type || z1[37462];
            console.log(z1[37463] + type);
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
            var sdk_token = wx.getStorageSync(z1[37454]);
            wx.request({
                url: z1[28077] + HOST + z1[37464],
                method: z1[37451],
                dataType: z1[6049],
                header: {
                    'content-type': z1[37452] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    server_id: _sD5OQW ? _sD5OQW.server_id : '',
                    role_id: _sD5OQW ? _sD5OQW.role_id : '',
                    type: type
                },
                success: function (res) {}
            });
        },

        openService: function () {
            wx.openCustomerServiceConversation();
        },

        checkGameVersion: function (game_ver, callback) {
            console.log(z1[37465]);
            var sdk_token = wx.getStorageSync(z1[37454]);
            wx.request({
                url: z1[28077] + HOST + z1[37466],
                method: z1[37451],
                dataType: z1[6049],
                header: {
                    'content-type': z1[37452] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    game_ver: game_ver
                },
                success: function (res) {
                    console.log(z1[37467]);
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
            console.log(z1[37468]);
            var sdk_token = wx.getStorageSync(z1[37454]);
            wx.request({
                url: z1[28077] + HOST + z1[37469],
                method: z1[37451],
                dataType: z1[6049],
                header: {
                    'content-type': z1[37452] // 默认值
                },
                data: {
                    game_pkg: config.game_pkg,
                    partner_id: config.partner_id,
                    sdk_token: sdk_token,
                    type: type,
                    server_id: _sD5OQW ? _sD5OQW.server_id : '',
                    role_id: _sD5OQW ? _sD5OQW.role_id : '',
                    no_log: 1 //设置为1后就不在这个接口打log，交给logStartShare接口
                },
                success: function (res) {
                    console.log(z1[37470]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            callback && callback(data.data);
                        } else {
                            callbacks[z1[37462]] && callbacks[z1[37462]](1, { errMsg: z1[37471] + data.msg });
                        }
                    } else {
                        callbacks[z1[37462]] && callbacks[z1[37462]](1, { errMsg: z1[37472] });
                    }
                }
            });
        },

        updateShare: function (invite, invite_type, is_new, role_id, server_id, scene) {
            console.log(z1[37473]);
            var sdk_token = wx.getStorageSync(z1[37454]);
            wx.request({
                url: z1[28077] + HOST + z1[37474],
                method: z1[37451],
                dataType: z1[6049],
                header: {
                    'content-type': z1[37452] // 默认值
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
                    console.log(z1[37475]);
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
                    console.log(z1[37476]);
                    self.login({}, function () {
                        self.startPay(data, callback);
                    });
                }
            });
        },

        //支付接口
        startPay: function (data, callback) {
            console.log(z1[37477]);
            console.log(data);

            var self = this;
            callbacks[z1[37478]] = typeof callback == z1[37359] ? callback : null;
            //先下单
            this_pay_order = 0;
            var sdk_token = wx.getStorageSync(z1[37454]);
            var session_key = wx.getStorageSync(z1[37457]);
            if (!sdk_token && !session_key) {
                callbacks[z1[37478]] && callbacks[z1[37478]](1, { errMsg: z1[37479] });
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
                zsyGame: parameters.zsyGame,
                zsyChannel: parameters.zsyChannel,
                zsyUserId: zsyUserId,
                zsyChannelUserId: zsyChannelUserId,
                version: '2'
            };
            self.order_data = order_data;

            var public_data = self.getPublicData();
            public_data[z1[37480]] = JSON.stringify(order_data);

            //发起网络请求
            wx.request({
                url: z1[28077] + HOST + z1[37481],
                method: z1[37451],
                dataType: z1[6049],
                header: {
                    'content-type': z1[37452] // 默认值
                },
                data: public_data,
                success: function (res) {
                    console.log(z1[37482] + JSON.stringify(res));

                    if (res.statusCode == 200) {
                        var data = res.data;
                        if (data.state) {
                            // 请求渠道下单数据
                            if (data.data.ext == '') {
                                var payData = {
                                    zsyGame: zsyClientMainObject.zsyGame, //游戏标识
                                    zsyChannel: zsyClientMainObject.zsyChannel, //渠道标识
                                    zsyUserId: zsyClientMainObject.zsyUserId, //玩家标识
                                    serverId: data.data.pay_data.serverId, //合服后的区服（玩家当前所在区服）ID
                                    serverName: data.data.pay_data.serverName, //合服后的区服（玩家当前所在区服）名称
                                    oldServerId: data.data.pay_data.serverId, //合服前的区服
                                    oldServerName: data.data.pay_data.serverName, //合服前的区服（旧区服）名称
                                    roleId: data.data.pay_data.roleId, //角色id
                                    roleName: data.data.pay_data.roleName, //'狼族🔪无情㈱࿏─Æᑅ🍩☮✝☪☸🕉',  //改名后（当前）角色名称
                                    coinNumber: 0, //玩家当前游戏币（如金币或元宝或钻石等）数量
                                    oldRoleName: data.data.pay_data.roleName, //改名前角色名称，如果未改过名，则这里的值跟字段roleName的值一样，都为当前角色名称
                                    subject: data.data.pay_data.productName, //充值主题,字数不超过200个字符,例如:购买哪个等级或购买什么道具等
                                    money: data.data.pay_data.amount, //充值金额(单位：分)
                                    version: 1, //支付接口版本号
                                    productId: data.data.pay_data.productId, //游戏内 的商品 id
                                    productName: data.data.pay_data.productName, //游戏内的商品名称，如：100元宝、10钻石、5金币、VIP月卡 等等
                                    roleLevel: data.data.pay_data.roleLevel, //角色等级，如果没有则默认为0
                                    roleVipLevel: 0, //角色VIP等级，如果没有则默认为0
                                    gameExtend: data.data.pay_data.gameExtend, //游戏扩展字段,可为空值,长度不超过250个字符，该参数会在支付回调时原样返回
                                    zsyGamePayCallBackUrl: data.data.pay_data.payCallbackUrl, //这里游戏要改为自己的发货地址
                                    gameOrder: data.data.pay_data.orderId, //游戏生成的订单号
                                    sign: data.data.pay_data.sign //游戏生成的签名
                                };
                                console.log(z1[37483] + JSON.stringify(payData));

                                console.log(z1[37484] + JSON.stringify(data));
                                //小程序  切支付的时候调用小程序支付，不切的时候调用虚拟支付
                                if (typeof wx.requestPayment == z1[29604]) {
                                    // if(public_data.device == 1){
                                    if (sysInfo.platform == z1[37485] || sysInfo.platform == z1[37486]) {
                                        console.log(z1[37487] + data.data.pay_data.is_android_pay);
                                        if (data.data.pay_data.is_android_pay == 1) {
                                            zsyClientMainObject.xcxPay(payData);
                                        } else {
                                            zsyClientMainObject.pay(payData, result => {
                                                //调用支付
                                                console.log(z1[8499] + JSON.stringify(result));
                                                //result.errorCode == 0时为成功， 其他为失败
                                            });
                                        }
                                    } else {
                                        if (data.data.pay_data.is_ios_pay == 1) {
                                            if (data.data.pay_data.ios_pay_type == 1) {
                                                zsyClientMainObject.xcxPay(payData);
                                            } else if (data.data.pay_data.ios_pay_type == 2) {
                                                zsyClientMainObject.pay(payData, result => {
                                                    //调用支付
                                                    console.log(z1[8499] + JSON.stringify(result));
                                                    //result.errorCode == 0时为成功， 其他为失败
                                                });
                                            }
                                        } else {
                                            wx.showModal({
                                                title: z1[37488],
                                                content: z1[37489],
                                                confirmText: z1[37490],
                                                showCancel: false
                                            });
                                        }
                                    }
                                } else {
                                    zsyClientMainObject.xcxPay(payData);
                                }
                            } else {
                                self.extDo({ ext1: data.data.ext, ext2: data.data.pay_data });
                            }
                        } else {
                            callbacks[z1[37478]] && callbacks[z1[37478]](1, { errMsg: data.msg });
                        }
                    } else {
                        callbacks[z1[37446]] && callbacks[z1[37446]](1, { errMsg: z1[37460] });
                    }
                }
            });
        },

        //小程序支付
        minPay: function (data) {
            //正式调起微信支付
            var self = this;

            var extraData = {
                gameUID: '', //见上
                orderNo: '', //订单号，研发需要加上前缀游戏标识
                money: 100, //支付金额（分）
                subject: z1[37491] //购买商品详情

                //上述参数请安好下面签名规则签名
            };extraData.sign = md5(gameUID + money + orderNo + subject + appkey);
            wx.navigateToMiniProgram({
                appId: z1[37492],
                path: z1[37493],
                extraData: extraData,
                envVersion: z1[37494], //develop开发版  trial体验版  release正式版
                success(res) {
                    // 打开成功
                    wx.requestPayment({
                        timeStamp: data.timeStamp,
                        nonceStr: data.nonceStr,
                        package: data.package,
                        signType: data.signType,
                        paySign: data.paySign,
                        success: function (res) {
                            if (res.errMsg == z1[37495]) {
                                var ret = {
                                    cpOrderNo: self.order_data.cpbill,
                                    orderNo: data.orderId,
                                    amount: self.order_data.price,
                                    extension: self.order_data.extension
                                };
                                callbacks[z1[37478]] && callbacks[z1[37478]](0, ret);
                            }
                        },
                        fail: function (res) {
                            if (res.errMsg == z1[37496]) {
                                callbacks[z1[37478]] && callbacks[z1[37478]](2, { errMsg: z1[37497] });
                            } else {
                                callbacks[z1[37478]] && callbacks[z1[37478]](1, { errMsg: z1[37498] + res.err_desc });
                            }
                        },
                        complete: function (res) {}
                    });
                }
            });
        },

        extDo: function (data) {
            wx.navigateToMiniProgram({
                appId: data.ext1,
                path: z1[37499] + data.ext2.orderId + z1[37500] + data.ext2.amount / 100,
                extraData: {},
                envVersion: z1[37494],
                success(res) {
                    // 打开成功
                }
            });
        },

        //小游戏支付
        gamePay: function (data) {
            var self = this;
            //游戏币足够，直接扣款
            if (data.buyQuantity <= data.balance) {
                console.log(z1[37501]);
                wx.showModal({
                    title: z1[37488],
                    content: z1[37502] + data.balance + z1[37503] + data.buyQuantity + z1[37504],
                    showCancel: false,
                    confirmText: z1[37490],
                    success: function () {
                        self.gameGoPay(data);
                    }
                });
            } else {
                console.log(z1[37505]);
                wx.requestMidasPayment({
                    mode: z1[37506],
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        if (res.errMsg == z1[37507]) {
                            self.gameGoPay(data);
                        }
                    },
                    fail: function (res) {
                        if (res.errMsg.indexOf(z1[37508]) !== -1) {
                            callbacks[z1[37478]] && callbacks[z1[37478]](2, { errMsg: z1[37497] });
                        } else {
                            callbacks[z1[37478]] && callbacks[z1[37478]](1, { errMsg: z1[37498] + res.errMsg });
                        }
                    },
                    complete: function (res) {}
                });
            }
        },

        kfPay: function (data) {
            //检查订单支付是否完成
            var self = this;
            _sDOW5Q = data.orderId;
            wx.showModal({
                title: z1[37488],
                content: z1[37509],
                showCancel: false,
                confirmText: z1[37490],
                success: function () {
                    wx.openCustomerServiceConversation();
                }
            });
        },

        gameGoPay: function (data, retry) {
            console.log(z1[37510]);
            //请求pay接口
            var self = this;
            var session_key = wx.getStorageSync(z1[37457]);
            wx.request({
                url: z1[28077] + HOST + z1[37511] + config.partner_id + '/' + config.game_pkg + '/',
                method: z1[37451],
                dataType: z1[6049],
                header: {
                    'content-type': z1[37452] // 默认值
                },
                data: {
                    order_id: data.orderId,
                    time: data.time,
                    sign: data.sign,
                    session_key: session_key
                },
                success: function (res) {
                    console.log(z1[37512]);
                    console.log(res);
                    if (res.statusCode == 200) {
                        if (res.data.state == 1) {
                            var ret = {
                                cpOrderNo: self.order_data.cpbill,
                                orderNo: data.orderId,
                                amount: self.order_data.price,
                                extension: self.order_data.extension
                            };
                            callbacks[z1[37478]] && callbacks[z1[37478]](0, ret);
                        } else {
                            callbacks[z1[37478]] && callbacks[z1[37478]](1, { errMsg: z1[37513] });
                        }
                    }
                },
                fail: function () {}
            });
        },

        //创建角色
        logCreateRole: function (data) {
            var uid = wx.getStorageSync(z1[37455]);
            var username = wx.getStorageSync(z1[37456]);

            var postData = {};
            postData[z1[37514]] = uid;
            postData[z1[37515]] = username;
            postData[z1[11543]] = data.roleid;
            postData[z1[37516]] = data.rolelevel;
            postData[z1[37517]] = data.rolename;
            postData[z1[12235]] = data.serverid;

            if (data.roleid && data.serverid) {
                _sD5OQW = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                    role_name: data.rolename,
                    server_name: data.servername
                };
            }

            this.log(z1[6], postData);

            var device = this.getPublicData().device;
            var channel = z1[37518];
            if (device == 1) {
                channel = z1[37519];
            }

            // 渠道上报
            var querypath = querystr.path ? querystr.path : 0;

            var roleInfo = {
                user_id: data.roleid, // 账号创建角色时的唯一识别id，游戏内不能出现重复角色id。如果无法保证唯一推荐格式（[channel]_[server_id]_[user_id]）[ ]内表示字段名
                account_id: data.roleid, // 由于系统内部设定，该内容不能为空，请传递与user_id同一个值
                device_id: data.roleid, // 由于系统内部设定，该内容不能为空，请传递与user_id同一个值
                channel: channel, // 注册渠道，小游戏目前渠道分。weixin_ios、weixin_android、QQ_ios、QQ_android
                server_id: data.serverid, // 渠道下的区服唯一识别ID；非分区分服游戏请填写1
                role_name: data.rolename,
                extend_id: querypath, // 在游戏onlaunch和onshow时可以从启动参数query中获得path参数。直接填写该参数即可。extend_id = [获取启动参数].query.path
                openid: zsyChannelUserId, // 微信QQ中平台系统的用户标识ID
                zsy_uid: zsyUserId,
                event: z1[90]
            };

            wx.request({
                url: z1[28077] + HOST + z1[37520] + config.game_pkg,
                method: z1[37451],
                dataType: z1[6049],
                header: {
                    'content-type': z1[37452] // 默认值
                },
                data: roleInfo,
                success: function (res) {
                    console.log(z1[37521] + JSON.stringify(res));
                }
            });
        },

        //进入游戏
        logEnterGame: function (data) {
            var uid = wx.getStorageSync(z1[37455]);
            var username = wx.getStorageSync(z1[37456]);

            var postData = {};
            postData[z1[37514]] = uid;
            postData[z1[37515]] = username;
            postData[z1[11543]] = data.roleid;
            postData[z1[37516]] = data.rolelevel;
            postData[z1[37517]] = data.rolename;
            postData[z1[12235]] = data.serverid;

            if (data.roleid && data.serverid) {
                _sD5OQW = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                    role_name: data.rolename,
                    server_name: data.servername
                };
            }

            this.log(z1[5929], postData);

            //进入游戏确认邀请成功
            if (_sDOWQ5) {
                this.updateShare(_sDOWQ5.invite, _sDOWQ5.invite_type, _sDOWQ5.is_new, data.roleid, data.serverid, _sDOWQ5.scene);
            }

            // 创建授权按钮
            // var system_info = wx.getSystemInfoSync();
            // const button = wx.createUserInfoButton({
            //     type: 'text',
            //     text: '授权登录游戏',
            //     style: {
            //         top: system_info.windowHeight / 2 + system_info.windowHeight / 4,
            //         left: system_info.windowWidth / 2 - 100,
            //         width: 200,
            //         height: 40,
            //         lineHeight: 40,
            //         backgroundColor: '#07c160',
            //         color: '#ffffff',
            //         textAlign: 'center',
            //         fontSize: 16,
            //         borderRadius: 4
            //     }
            // });
            //
            // wx.getSetting({
            //     success: (res) => {
            //         // 如果用户点击过该按钮则不用再次请求
            //         if (!res.authSetting['scope.userInfo']) {
            //             button.onTap(data => {
            //                 // 点击按钮后获取用户unionid
            //                 zsyClientMainObject.bindAccount(data, response => {
            //                     console.log(response);
            //                 });
            //                 button.destroy();
            //             })
            //         }else{
            //             button.destroy();
            //         }
            //     },
            //     fail: function () {
            //         button.destroy();
            //     }
            // });


            var device = this.getPublicData().device;
            var channel = z1[37518];
            if (device == 1) {
                channel = z1[37519];
            }

            // 渠道上报
            var querypath = querystr.path ? querystr.path : 0;

            var roleInfo = {
                user_id: data.roleid, // 账号创建角色时的唯一识别id，游戏内不能出现重复角色id。如果无法保证唯一推荐格式（[channel]_[server_id]_[user_id]）[ ]内表示字段名
                account_id: data.roleid, // 由于系统内部设定，该内容不能为空，请传递与user_id同一个值
                device_id: data.roleid, // 由于系统内部设定，该内容不能为空，请传递与user_id同一个值
                channel: channel, // 注册渠道，小游戏目前渠道分。weixin_ios、weixin_android、QQ_ios、QQ_android
                server_id: data.serverid, // 渠道下的区服唯一识别ID；非分区分服游戏请填写1
                role_name: data.rolename,
                vip_level: data.rolelevel,
                level: 1,
                extend_id: querypath, // 在游戏onlaunch和onshow时可以从启动参数query中获得path参数。直接填写该参数即可。extend_id = [获取启动参数].query.path
                openid: zsyChannelUserId, // 微信QQ中平台系统的用户标识ID
                zsy_uid: zsyUserId,
                event: z1[37446]
            };

            wx.request({
                url: z1[28077] + HOST + z1[37520] + config.game_pkg,
                method: z1[37451],
                dataType: z1[6049],
                header: {
                    'content-type': z1[37452] // 默认值
                },
                data: roleInfo,
                success: function (res) {
                    console.log(z1[37522] + JSON.stringify(res));
                }
            });
        },

        //角色升级
        logRoleUpLevel: function (data) {
            var uid = wx.getStorageSync(z1[37455]);
            var username = wx.getStorageSync(z1[37456]);

            var postData = {};
            postData[z1[37514]] = uid;
            postData[z1[37515]] = username;
            postData[z1[11543]] = data.roleid;
            postData[z1[37516]] = data.rolelevel;
            postData[z1[37517]] = data.rolename;
            postData[z1[12235]] = data.serverid;

            if (data.roleid && data.serverid) {
                _sD5OQW = {
                    role_id: data.roleid,
                    server_id: data.serverid,
                    role_name: data.rolename,
                    server_name: data.servername
                };
            }

            this.log(z1[37523], postData);
        },

        // 敏感词检测
        msgCheck: function (content, callback) {
            wx.request({
                url: z1[28077] + HOST + z1[37524] + config.game_pkg,
                method: z1[37451],
                dataType: z1[6049],
                header: {
                    'content-type': z1[37452] // 默认值
                },
                data: {
                    content: content,
                    uid: zsyUserId,
                    role_name: _sD5OQW.role_name ? _sD5OQW.role_name : '',
                    server_id: _sD5OQW.server_id ? _sD5OQW.server_id : '',
                    server_name: _sD5OQW.server_name ? _sD5OQW.server_name : '',
                    role_id: _sD5OQW.role_id ? _sD5OQW.role_id : '',
                    openid: zsyChannelUserId
                },
                success: function (res) {
                    console.log(z1[37525] + JSON.stringify(res));
                    var ret = {};
                    ret.data = {};
                    if (res.statusCode == 200 && res.data.data.code == 200) {
                        // 检测结果，0：通过，1：嫌疑，2：不通过（注：系统只需展示接口返回结果为“通过”的内容！）
                        var action = res.data.data.result.antispam.action;
                        if (action == 0) {
                            ret.data.state = 1;
                            ret.statusCode = 200;
                            console.log(z1[37526]);
                        } else {
                            ret.data.state = 0;
                            ret.statusCode = 200;
                        }
                    } else {
                        ret.data.state = 0;
                        ret.statusCode = 200;
                    }
                    callback && callback(ret);
                },
                fail: function () {
                    var ret = {};
                    ret.data = {};
                    ret.data.state = 0;
                    ret.statusCode = 200;
                    callback && callback(ret);
                }
            });
        },

        // 渠道--调用授权获取用户unionid
        wxAuthorization: function () {
            wx.getSetting({
                success: res => {
                    // 如果用户点击过该按钮则不用再次请求
                    if (!res.authSetting[z1[37447]]) {
                        button.onTap(data => {
                            // 点击按钮后获取用户unionid
                            zsyClientMainObject.bindAccount(data, response => {
                                console.log(response);
                            });
                        });
                    }
                }
            });
        },

        //获取唯一设备码（自定义）
        uuid: function (radix, len) {
            var chars = z1[37527].split('');
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
            var uuid = wx.getStorageSync(z1[37442]);
            var idfv = wx.getStorageSync(z1[37443]);
            var ad_code = wx.getStorageSync(z1[37444]);

            return {
                game_id: config.game_id,
                game_pkg: config.game_pkg,
                partner_id: config.partner_id,
                partner_label: config.partner_label,
                ad_code: ad_code,
                uuid: uuid,
                idfv: idfv,
                dname: system.model,
                mac: z1[37528],
                net_type: system.wifiSignal == 0 ? '4G' : z1[37529],
                os_ver: system.system,
                sdk_ver: system.version, //存放的是微信版本号
                game_ver: config.game_ver, //存放的是SDK版本号
                device: system.platform == z1[37485] ? 1 : 2,
                is_from_min: 1
            };
        },

        //统一发送log
        log: function (type, data) {
            var public_data = this.getPublicData();
            for (var key in data) {
                public_data[key] = data[key];
            }

            console.log(z1[37530] + type);
            console.log(public_data);

            wx.request({
                url: z1[28077] + HOST + z1[37531] + type + z1[37532] + encodeURIComponent(JSON.stringify(public_data))
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
            wx.openCustomerServiceConversation({
                sessionFrom: z1[37533],
                showMessageCard: true,
                sendMessagePath: z1[37533],
                sendMessageImg: z1[37534],
                success(res) {},
                fail(res) {},
                complete(res) {}
            });
        },

        // 微端小助手(兼容)
        sendUrl: function () {
            wx.openCustomerServiceConversation({
                sessionFrom: z1[37533],
                showMessageCard: true,
                sendMessagePath: z1[37533],
                sendMessageImg: z1[37534],
                success(res) {},
                fail(res) {},
                complete(res) {}
            });
        }
    };
}

function run(method, data, callback) {
    method in _sD5OWQ && _sD5OWQ[method](data, callback);
}

exports.init = function (data, callback) {
    run(z1[425], data, callback);
};

exports.login = function (callback) {
    run(z1[37446], '', callback);
};

exports.login = function (callback) {
    run(z1[37446], '', callback);
};

exports.pay = function (data, callback) {
    run(z1[37478], data, callback);
};

exports.openService = function () {
    run(z1[26127]);
};

exports.logCreateRole = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(z1[37535], data);
};

exports.logEnterGame = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };

    run(z1[37536], data);
};

exports.logRoleUpLevel = function (serverId, serverName, roleId, roleName, roleLevel) {
    var data = {
        serverid: serverId,
        servername: serverName,
        roleid: roleId,
        rolename: roleName,
        rolelevel: roleLevel
    };
    run(z1[37537], data);
};

exports.share = function (type) {
    var data = {
        type: type
    };
    run(z1[37462], data);
};

exports.downloadClient = function () {
    run(z1[37538]);
};

exports.getConfig = function () {
    return {
        game_id: config.game_id,
        game_pkg: config.game_pkg,
        partner_id: config.partner_id
    };
};

exports.wxAuthorization = function () {
    run(z1[37539]);
};

exports.msgCheck = function (data, callback) {
    run(z1[13276], data, callback);
};

exports.weiduanHelper = function () {
    run(z1[25997]);
};

exports.sendUrl = function () {
    run(z1[37540]);
};