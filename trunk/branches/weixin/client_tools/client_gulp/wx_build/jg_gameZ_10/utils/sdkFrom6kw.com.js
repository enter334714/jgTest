var config6kw = {
    sdkVersion: '1.0.16',
    kwurl: 'https://usmini.6kw.com/',
    url:"https://wxmini.youxigui.com/",
    channel: 0,
    sdkChannelID: 34,
    subChannelID: "0",
    mergeId: "",
    wxAppid:"",
    urlParam: '',
    switch: 1
};
var adDataInfo = {
    rewardedVideoAd: Object
}
var heartInter = '';
var sdk6kwFunction = sdk6kw();
var sdk6kw_user_game_info = {};

const request6kwFunction = (param) => {
    return new Promise((resolve, reject) => {
        console.log("-------------------------------------")
        console.log(param)
        console.log("-------------------------------------")
        console.log(config6kw.url + param.path)
        wx.request({
            url: config6kw.url + param.path,
            data: JSON.stringify(param.data),
            method: 'POST',
            dataType: 'json',
            success: function (res) {
                resolve(res);
            },
            fail: function (res) {
                console.log('[SDK]' + param.path + '发起请求失败');
                reject(res);
            }
        })
    });
}

function sdk6kw() {
    var callbacks = {};
    return {
        init: function (mergeId,callback) {
            var that = this
            config6kw.mergeId = mergeId;
            console.log("[SDK]调用init初始化接口", mergeId);
            callbacks['init'] = typeof callback == 'function' ? callback : null;
            config6kw.urlParam = config6kw.mergeId + '/' + config6kw.sdkChannelID + '/' + config6kw.subChannelID;
            //开启分享
            wx.showShareMenu({
                withShareTicket: true
            });
            var self = this;
            //小游戏启动参数
            var sdk6kwLaunchOptions = wx.getStorageSync('sdk6kwLaunchOptions');
            var systemInfo = wx.getSystemInfoSync();
            if (!sdk6kwLaunchOptions) {
                if (wx.getEnterOptionsSync) {
                    sdk6kwLaunchOptions = wx.getEnterOptionsSync();
                } else {
                    sdk6kwLaunchOptions = wx.getLaunchOptionsSync();
                }
                wx.setStorageSync('sdk6kwLaunchOptions', sdk6kwLaunchOptions);
            }
            console.log("[SDK]调用init初始化接口 %o", sdk6kwLaunchOptions);
            //获取微信openId
            console.log(wx.getStorageSync('wxg6kw_openid'));
            if (!wx.getStorageSync('wxg6kw_openid')) {
                wx.login({
                    success: function (res) {
   
                    },
                    fail: function (res) {
                        console.log("微信登录失败，返回" + JSON.stringify(res));
                        callbacks['init'] && callbacks['init'](0, { errMsg: res.errMsg });
                        console.log('[SDK]获取微信用户授权失败');
                    }
                });
            }

            //获取小游戏配置
            var getWayInfo = {
                path: 'init/' + config6kw.urlParam,
                data: {
                    sdkVersion: config6kw.sdkVersion,
                    os: systemInfo.platform
                }
            };
            request6kwFunction(getWayInfo).then((res) => {
                console.log('[SDK]获取游戏配置成功：' + JSON.stringify(res.data));
                config6kw.switch = res.data.data.switch;
                callback(1, { is_switch: res.data.data.switch });
                // callbacks['init'] && callbacks['init'](1, { is_switch: res.data.data.switch });
            }).catch((res) => {
                console.log('[SDK]获取游戏配置异常：' + res.data);
                callback(0, { errMsg: '初始化失败' });
                // callbacks['init'] && callbacks['init'](0, { errMsg: '初始化失败' });
            });
        },
        login: function (callback) {
            console.log("[SDK]调起登录");
            var self = this;
            var allInfo = self.getPublicData();
            var enterOptionsData = allInfo.sdk6kwLaunchOptions;
            var enterOPtionsDataBase64 = this.base64_encode(JSON.stringify(enterOptionsData));
            console.log("enterOptionsData is %o", (enterOptionsData))
            console.log("enterOptionsData is %o", enterOPtionsDataBase64)

            callbacks['login'] = typeof callback == 'function' ? callback : null;
            wx.login({
                success: function (res) {

                    var loginInfo = {
                        path: 'login/' + config6kw.urlParam,
                        data: {
                            code: res.code,
                            channel: allInfo.sdk6kwLaunchOptions.query.channel,
                            scene: allInfo.sdk6kwLaunchOptions.scene,
                            brand: allInfo.wxSystemInfo.brand,
                            model: allInfo.wxSystemInfo.model,
                            mobileVersion: allInfo.wxSystemInfo.system,
                            isWifi: allInfo.wxSystemInfo.wifiEnabled,
                            os: allInfo.wxSystemInfo.platform,
                            sdkVersion: config6kw.sdkVersion,
                            extension: enterOPtionsDataBase64,
                            query: JSON.stringify(enterOptionsData.query),
                        }
                    }
                    console.log(loginInfo);
                    request6kwFunction(loginInfo).then((res) => {
                        if (res.data.code == 1) {
                            console.log('[SDK]登录成功：' + JSON.stringify(res.data));
                            wx.setStorageSync('wxg6kw_token', res.data.data.token);
                            wx.setStorageSync('wxg6kw_userId', res.data.data.userId);
                            wx.setStorageSync('wxg6kw_nickName', res.data.data.nickName);
                            if (res.data.data.extension) {
                                wx.setStorageSync('wxg6kw_userInfo_extension', res.data.data.extension);
                            }
                            callbacks['login'] && callbacks['login'](1, res.data.data);
                        } else {
                            console.log('[SDK]登录失败：' + JSON.stringify(res.data));
                            callbacks['login'] && callbacks['login'](0, { errMsg: res.data.msg });
                        }
                    });
                },
                fail: function (res) {
                    console.log("微信登录失败，返回" + JSON.stringify(res));
                    callbacks['login'] && callbacks['login'](0, { errMsg: res.errMsg });
                    console.log('[SDK]获取微信用户授权失败');
                }
            });
        },
        share: function (data, callback) {
            var self = this;
            var allInfo = self.getPublicData();
            console.log("[SDK]CP调用分享" + JSON.stringify(data));
            callbacks['share'] = typeof callback == 'function' ? callback : null;
            var shareInfo = {
                path: 'share/' + config6kw.urlParam,
                data: {
                    userID: wx.getStorageSync('wxg6kw_userId'),
                    token: wx.getStorageSync('wxg6kw_token'),
                    openId: wx.getStorageSync('wxg6kw_openid'),
                    channel: allInfo.sdk6kwLaunchOptions.query.channel,
                    type: 'diybtn',
                }
            }
            Object.assign(shareInfo.data, sdk6kw_user_game_info);
            // console.log(shareInfo);
            request6kwFunction(shareInfo).then((res) => {
                if (res.data.code == 1) {
                    wx.shareAppMessage({
                        title: data.title,
                        imageUrl: data.imageUrl,
                        query: res.data.data.query + '&' + data.query,
                    });
                    callbacks['share'] && callbacks['share'](1, res.data.data);
                } else {
                    callbacks['share'] && callbacks['share'](0, res.data.msg);
                }
            });
        },
        shareLog: function (callback) {
            console.log('[SDK]右上角主动分享上报');
            var self = this;
            var allInfo = self.getPublicData();
            var shareInfo = {
                path: 'share/' + config6kw.urlParam,
                data: {
                    type: 'right',
                    openId: wx.getStorageSync('wxg6kw_openid'),
                    roleId: sdk6kw_user_game_info.roleID,
                    roleName: sdk6kw_user_game_info.roleName,
                    roleLevel: sdk6kw_user_game_info.roleLevel,
                    serverId: sdk6kw_user_game_info.serverID,
                    serverName: sdk6kw_user_game_info.serverName,
                    channel: allInfo.sdk6kwLaunchOptions.query.channel,
                    type: 'right',
                }
            };
            request6kwFunction(shareInfo).then((res) => {
                callbacks['share'] && callbacks['share'](1, res.data.data);
            });

        },
        pay: function (data, callback) {
            var self = this;
            wx.checkSession({
                success: function () {
                    self.startPay(data, callback);
                },
                fail: function () {
                    console.log("[SDK]调起transaction时发现用户session过期需要重新登录");
                    self.login(function (status) {
                        status == 1 && self.startPay(data, callback);
                    });
                }
            });
        },
        startPay: function (data, callback) {
            wx.showLoading({
                title: '正在支付',
            })
            console.log("[SDK]调起transaction，CP传值：" + JSON.stringify(data));
            var self = this;
            callbacks['pay'] = typeof callback == 'function' ? callback : null;
            var allInfo = this.getPublicData();
            console.log(allInfo.wxSystemInfo);
            if (wx.getStorageSync('wxg6kw_token') == "" || wx.getStorageSync('wxg6kw_token') == null) {
                wx.showToast({
                    title: '登录信息失效，请退出重试',
                })
                return false;
            }
            var orderInfo = {
                path: 'pay/' + config6kw.urlParam,
                data: {
                    os: allInfo.wxSystemInfo.platform,
                    brand: allInfo.wxSystemInfo.brand,
                    model: allInfo.wxSystemInfo.model,
                    osVersion: allInfo.wxSystemInfo.system,
                    token: wx.getStorageSync('wxg6kw_token'),
                    userID: wx.getStorageSync('wxg6kw_userId'),
                    sessionKey: wx.getStorageSync('wxg6kw_session_key'),
                    sdkVersion: config6kw.sdkVersion,
                    cpOrder: data.cpOrder,
                    serverId: data.serverId,
                    serverName: data.serverName,
                    productId: data.productId,
                    productName: data.productName,
                    roleId: data.roleId,
                    roleName: data.roleName,
                    roleLevel: data.roleLevel,
                    price: data.price,//单位分
                    extension: data.extension,
                    notifyUrl: data.notifyUrl,
                }
            };
            request6kwFunction(orderInfo).then((res) => {
                console.log("-----------------")
                console.log(res.data);
                wx.hideLoading({
                    success: (res) => { },
                })
                if (res.data.code == 0) {
                    console.log(orderInfo);
                    if (res.data.msg == '令牌校验失败') {
                        console.log('[SDK]令牌校验失败，重新登录');
                        self.login(function (status) {
                            status == 1 && self.startPay(data);
                        });
                        return false;
                    }
                    self.showTips(res.data.msg);
                    callbacks['pay'] && callbacks['pay'](0, { errMsg: res.data.msg });
                    return false;
                }
                var ret = {
                    cpOrder: res.data.data.cpOrder,
                    orderId: res.data.data.orderId,
                    price: res.data.data.total,
                    extension: res.data.data.extension,
                    text: res.data.data.text
                };
                if (res.data.data.isSwitch == 1) {
                    if (!res.data.data.wayInfo.sessionFrom) {
                        self.showTips(res.data.msg);
                        callbacks['pay'] && callbacks['pay'](0, { errMsg: '参数丢失' });
                        return false;
                    }

                    wx.getSystemInfo({
                        success: function (systemData) {
                            var qrInfo = res.data.data;
                            if (systemData.platform == "ios" && qrInfo.isBqrc == "1") {
                                callbacks['pay'] && callbacks['pay'](2, {
                                    payQrcode: qrInfo.bqrc
                                });
                            } else {
                                self.showModel().then((ret) => {
                                    wx.openCustomerServiceConversation({
                                        showMessageCard: true,
                                        sendMessageTitle: res.data.data.wayInfo.title,
                                        sendMessageImg: res.data.data.wayInfo.img,
                                        sessionFrom: JSON.stringify(res.data.data.wayInfo.sessionFrom),//字符串格式
                                        success: function () {
                                            console.log("[SDK]通知结果");
                                            console.log(ret);
                                            callbacks['pay'] && callbacks['pay'](1, ret);
                                        },
                                        fail: function (res) {
                                            console.log(res);
                                            callbacks['pay'] && callbacks['pay'](0, { errMsg: '调起客服会话失败' });
                                        }
                                    });
                                });
                            }
                        }
                    })
                    return false;
                } else if (res.data.data.isSwitch == 2) {
                    if (!res.data.data.miniprogram_id && !res.data.data.miniprogram_path) {
                        self.showTips(res.data.msg);
                        callbacks['pay'] && callbacks['pay'](0, { errMsg: '参数丢失' });
                        return false;
                    }
                    console.log(res.data.data)
                    wx.navigateToMiniProgram({
                        appId: res.data.data.miniprogram_id,
                        path: res.data.data.miniprogram_path + '?price=' + res.data.data.total +
                            '&appId=' + config6kw.mergeId +
                            '&orderId=' + res.data.data.orderId +
                            '&service=' + config6kw.urlParam +
                            '&appKey=' + config6kw.appKey,
                        extraData: {
                            count: res.data.data.total,
                            orderId: res.data.data.orderId,
                            cpOrder: res.data.data.cpOrder,
                        },
                        envVersion: 'develop',
                        success(res) {
                            // 打开成功
                            console.log("打开成功")

                        },
                        fail: (res) => {

                        }
                    })
                    return false;
                } else {

                    if ((res.data.data.buyQuantity <= res.data.data.balance) && (res.data.data.buyQuantity != 0 && res.data.data.balance != 0)) {
                        console.log("[SDK]余额充足，游戏币直接扣除");
                        wx.showModal({
                            title: "支付提示",
                            content: "您还有" + res.data.data.balance + "个游戏币未消费，本次支付将扣除" + res.data.data.buyQuantity + '游戏币',
                            showCancel: false,
                            confirmText: "我知道了",
                            success: function () {
                                //直接扣费
                                var payData = self.gameGoPay(res.data.data);
                                if (payData.code == 1) {
                                    self.showTips('支付成功');
                                    callbacks['pay'] && callbacks['pay'](1, payData.data);
                                } else {
                                    // self.showTips('支付失败' + payData.msg);
                                    console.log("支付失败:" + payData.msg)
                                    // callbacks['pay'] && callbacks['pay'](0, { errMsg: "支付失败:" + payData.msg });
                                }
                            }
                        });
                    } else {
                        //充值米大师游戏币成功再进行扣费
                        self.MidasPay(res.data.data).then((midasRes) => {
                            console.log('[SDK]调起米大师支付结果' + JSON.stringify(midasRes));
                            if (midasRes.errMsg == 'requestMidasPayment:ok') {
                                var payData = self.gameGoPay(res.data.data);
                                if (payData.code == 1) {
                                    self.showTips('支付成功');
                                    callbacks['pay'] && callbacks['pay'](1, payData.data);
                                } else {
                                    if (JSON.stringify(error) == "{}") {
                                        return;
                                    }
                                    if (error.errMsg.indexOf('取消') > 0 ) {
                                        return
                                    }
                                    self.showTips('支付失败' + payData.msg);
                                    console.log("支付失败:" + payData.msg)
                                    // callbacks['pay'] && callbacks['pay'](0, { errMsg: "支付失败:" + payData.msg });
                                }
                            }
                            return false;
                        }).catch((error) => {
                            console.log("[SDK]调起米大师支付结果异常" + JSON.stringify(error));
                            if (JSON.stringify(error) == "{}") {
                                return;
                            }
                            // self.showTips('支付失败' + error.errMsg);
                            // callbacks['pay'] && callbacks['pay'](0, { errMsg: "支付失败:" + error.errMsg });
                        });
                    }

                }
            });
        },
        showWxAd(site_id, type, rewardCallBack) {
            // uid : 聚合用户UID
            // token：聚合用户Token
            // site_id：聚合广告版位ID
            // type：视频类型，默认为1
            var self = this
            wx.showLoading({
              title: '视频加载中',
            })
            var initAdDataInfo = {
                path: 'usad/' + config6kw.urlParam,
                data: {
                    uid:  wx.getStorageSync('wxg6kw_userId'), 
                    token:  wx.getStorageSync('wxg6kw_token'), 
                    site_id: site_id,
                    type: type,
                }
            }
            request6kwFunction(initAdDataInfo).then((res) => {
                wx.hideLoading()
                if (res.data.code == 1) {
                    console.log('[SDK]获取游戏广告配置成功：' + JSON.stringify(res.data));
                    adDataInfo.rewardedVideoAd = wx.createRewardedVideoAd({
                        adUnitId: res.data.adUnitId
                    })
                    adDataInfo.rewardedVideoAd.onError((code)=>{
                        // 1000 	后端接口调用失败
                        // 1001 	参数错误
                        // 1002 	广告单元无效
                        // 1003 	内部错误
                        // 1004 	无合适的广告
                        // 1005 	广告组件审核中
                        // 1006 	广告组件被驳回
                        // 1007 	广告组件被封禁
                        // 1008 	广告单元已关闭
                        self.uploadAdState(res.data.request_id, code)
                        console.log('激励视频 错误码' + code)
                    })
                    adDataInfo.rewardedVideoAd.onLoad(() => {
                        self.uploadAdState(res.data.request_id, 1)
                        console.log('激励视频 广告加载成功')
                    })
                    adDataInfo.rewardedVideoAd.onClose((isEnded) => {
                        //视频是否是在用户完整观看的情况下被关闭的
                        console.log('激励视频 广告加载关闭')
                        if(isEnded) {
                            self.uploadAdState(res.data.request_id, 3)
                            rewardCallBack(true)
                        } else {
                            self.uploadAdState(res.data.request_id, 4)
                            rewardCallBack(false)
                        }
                    })
                    if(adDataInfo.rewardedVideoAd != null) {
                        console.log("createRewardedVideoAd")
                        adDataInfo.rewardedVideoAd.show().then(()=>{
                            self.uploadAdState(res.data.request_id, 2)
                            console.log('激励视频 展示成功')
                        })
                    }
                } else {
                    console.log('[SDK]获取游戏广告配置失败：' + JSON.stringify(res.data));
                }
            });
        },
        uploadAdState(request_id, state) {
            // usadup 
            // uid : 聚合用户UID
            // token：聚合用户Token
            // request_id ：聚合返回的广告请求Id  多个id以英文逗号为分隔符
            // state ： 视频广告状态  1  startLoad 请求(请求成功或失败都归到这类)   2  startShow 展示(播放视频成功或者失败都归到这类)    3  onReward 发奖励(回调给CP可能需要联合广告关闭事件)  4  onClick  点击
            var initAdDataInfo = {
                path: 'usadup/' + config6kw.urlParam,
                data: {
                    uid:  wx.getStorageSync('wxg6kw_userId'), 
                    token:  wx.getStorageSync('wxg6kw_token'), 
                    request_id: request_id,
                    state: state,
                }
            }
            request6kwFunction(initAdDataInfo).then((res) => {
                if (res.data.code == 1) {
                    console.log('[SDK]游戏广告上报成功：' + JSON.stringify(res.data));
                } else {
                    console.log('[SDK]游戏广告上报失败：' + JSON.stringify(res.data));
                }
            });
        },
        //调起米大师
        MidasPay: function (data) {
            return new Promise((resolve, reject) => {
                wx.requestMidasPayment({
                    mode: 'game',
                    env: data.env,
                    offerId: data.offerId,
                    currencyType: data.currencyType,
                    platform: data.platform,
                    buyQuantity: data.buyQuantity,
                    zoneId: data.zoneId,
                    success: function (res) {
                        resolve(res);
                    },
                    fail: function (res) {
                        reject(res);
                    },
                    complete: function (res) {
                        // console.log("[SDK]调起米大师支付" + JSON.stringify(res));
                    }
                });
            });
        },
        //服务端扣费
        gameGoPay: function (data) {
            var self = this;
            var allInfo = this.getPublicData();
            var gotopay = {
                path: 'checkPay/' + config6kw.urlParam,
                data: {
                    os: allInfo.wxSystemInfo.platform,
                    token: wx.getStorageSync('wxg6kw_token'),
                    userID: wx.getStorageSync('wxg6kw_userId'),
                    sdkVersion: config6kw.sdkVersion,
                    orderID: data.orderId,
                }
            };
            console.log(gotopay);
            request6kwFunction(gotopay).then((res) => {
                console.log("[SDK]米大师支付结果：" + JSON.stringify(res));
                if (res.data.msg == '用户session已失效,请重新登录') {
                    self.login(function (status) {
                        status == 1 && self.gameGoPay(data);
                    });
                    return false;
                }
                return res.data;
            });
        },
        logEnterGame: function (data) {
            var self = this;
            wx.checkSession({
                success: function () {
                    self.postRole(data);
                },
                fail: function () {
                    console.log("[SDK]调用角色信息接口session过期需要重新登录");
                    self.login(function (status) {
                        status == 1 && self.postRole(data);
                    });
                }
            });
        },
        //角色信息   创角 角色升级 角色转区  角色改名 均可调用
        logRole: function (data) {
            var self = this;
            wx.checkSession({
                success: function () {
                    self.postRole(data);
                },
                fail: function () {
                    console.log("[SDK]调用角色信息接口session过期需要重新登录");
                    self.login(function (status) {
                        status == 1 && self.postRole(data);
                    });
                }
            });
        },
        postRole: function (data) {
            
            console.log('[SDK]调用角色上传' + JSON.stringify(data));
            var self = this;
            var roleInfo = {
                token: wx.getStorageSync('wxg6kw_token'),
                userID: wx.getStorageSync('wxg6kw_userId'),
                roleID: data.roleId,
                roleName: data.roleName,
                roleLevel: data.roleLevel,
                serverID: data.serverId,
                serverName: data.serverName,
                payLevel: data.payLevel,
                roleCreateTime: data.createTime,
                dataType: data.dataType
            }
            sdk6kw_user_game_info = roleInfo;
            if(data.dataType == "3") {
                self.startInter()
            }
            // console.log(sdk6kw_user_game_info);
            if (!roleInfo.token || !roleInfo.userID) {
                console.log('用户信息过期导致用户调起角色信息接口失败')
                self.login(function (status) {
                    status == 1 && self.postRole(data);
                })
            }
            var roledata = {
                path: 'role/' + config6kw.urlParam,
                data: roleInfo
            }
            request6kwFunction(roledata).then((res) => {
                console.log(res);
            });

        },
        startInter : function(){
            var that = this;
            setInterval(()=>{                    
                    that.roleInfoHeartBeat()
                }, 60000);    
          },
        roleInfoHeartBeat: function () {
            console.log('[SDK]心跳调用角色上传' + JSON.stringify(sdk6kw_user_game_info));
            var roledata = {
                path: 'ping/' + config6kw.urlParam,
                data: sdk6kw_user_game_info
            }
            request6kwFunction(roledata).then((res) => {
                console.log(res);
            });

        },
        getPublicData: function () {
            var wxSystemInfo = wx.getSystemInfoSync();
            var sdk6kwLaunchOptions = wx.getStorageSync('sdk6kwLaunchOptions')
            if (!sdk6kwLaunchOptions) {
                if (wx.getEnterOptionsSync) {
                    sdk6kwLaunchOptions = wx.getEnterOptionsSync();
                } else {
                    sdk6kwLaunchOptions = wx.getLaunchOptionsSync();
                }
                wx.setStorageSync('sdk6kwLaunchOptions', sdk6kwLaunchOptions)
            }
            return {
                wxSystemInfo: wxSystemInfo,
                sdk6kwLaunchOptions: sdk6kwLaunchOptions,
                config6kw: config6kw
            };
        },
        showModel: function () {
            return new Promise((resolve, reject) => {
                wx.showModal({
                    title: "温馨提示",
                    content: "请进入【客服会话】窗口点击右下角卡片获取支付链接",
                    showCancel: true,
                    confirmText: "前往充值",
                    success: function (res) {
                        if (res.confirm === true) {
                            resolve();
                        } else if (res.cancel === true) { 
                            reject();
                        }
                    },
                    fail: function () {
                        reject();
                    }
                });
            });
        },
        showImageModel: function () {
            return new Promise((resolve, reject) => {
                wx.showShareImageMenu({

                })
            })
        },
        showTips: function (tips) {
            wx.showModal({
                title: "温馨提示",
                content: tips,
                showCancel: false,
                success: function (res) {
                },
                fail: function () {
                }
            });
        },
        getPayState: function (roleInfo, callback) {
            var allInfo = this.getPublicData();
            var payState = {
                path: 'payState/' + config6kw.urlParam,
                data: {
                    sdkVersion: config6kw.sdkVersion,
                    token: wx.getStorageSync('wxg6kw_token'),
                    userID: wx.getStorageSync('wxg6kw_userId'),
                    roleID: sdk6kw_user_game_info.roleID,
                    roleName: sdk6kw_user_game_info.roleName,
                    roleLevel: sdk6kw_user_game_info.roleLevel,
                    os: allInfo.wxSystemInfo.platform,
                    cpData: roleInfo
                }
            }
            if(typeof(roleInfo) == "undefined") {
                callback(1,{"switch":1});
            } 
            request6kwFunction(payState).then((res) => {
                callback(1, res.data.data);
                return false;
            }).catch((error) => {
                callback(0, error);
                return false;
            });
        },
        msgSecCheck: function (options) {
            var content = options.content
            var scene = options.scene ? options.scene : "0"
            var callback = options.callback
            var checkMsgContent = {
                path: 'frontCheckContent/' + config6kw.urlParam,
                data: {
                    scene: scene,
                    type: "msg",
                    content: content,
                    openid: wx.getStorageSync('wxg6kw_openid'),
                    userID: wx.getStorageSync('wxg6kw_userId'),
                    token: wx.getStorageSync('wxg6kw_token'),
                }
            }
            request6kwFunction(checkMsgContent).then((res) => {
                callback(1, res.data);
                return false;
            }).catch((error) => {
                callback(0, error);
                return false;
            });
        },
        openCustomerWithClientChange() {
            var self = this;
            var allInfo = self.getPublicData();
            var clientChangeInfo = {
                path: 'kf/' + config6kw.urlParam,
                data: {
                    type: "clientChange",
                    userID: wx.getStorageSync('wxg6kw_userId'),
                    token: wx.getStorageSync('wxg6kw_token'),
                    openId: wx.getStorageSync('wxg6kw_openid'),
                    channel: allInfo.sdk6kwLaunchOptions.query.channel,
                }
            }
            request6kwFunction(clientChangeInfo).then((res) => {
                console.log("response Object %o", res)
                if (res.data.code == 1) {
                    wx.openCustomerServiceConversation({
                        showMessageCard: true,
                        sendMessageTitle: res.data.data.title,
                        sendMessageImg: res.data.data.img,
                        sessionFrom: JSON.stringify(res.data.data.sessionFrom),//字符串格式
                        success: function () {
                            console.log("[SDK]通知结果");
                            console.log(ret);
                        },
                        fail: function (res) {
                            console.log(res);
                        }
                    });
                } else {
                    console.log('[SDK]登录失败：' + JSON.stringify(res.data));
                    callbacks['init'] && callbacks['init'](0, { errMsg: res.data.msg });
                    callbacks['login'] && callbacks['login'](0, { errMsg: res.data.msg });
                }
            });
        },
        base64_encode(str) { // 编码，配合encodeURIComponent使用
            var c1, c2, c3;
            var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            var i = 0, len = str.length, strin = '';
            while (i < len) {
                c1 = str.charCodeAt(i++) & 0xff;
                if (i == len) {
                    strin += base64EncodeChars.charAt(c1 >> 2);
                    strin += base64EncodeChars.charAt((c1 & 0x3) << 4);
                    strin += "==";
                    break;
                }
                c2 = str.charCodeAt(i++);
                if (i == len) {
                    strin += base64EncodeChars.charAt(c1 >> 2);
                    strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                    strin += base64EncodeChars.charAt((c2 & 0xF) << 2);
                    strin += "=";
                    break;
                }
                c3 = str.charCodeAt(i++);
                strin += base64EncodeChars.charAt(c1 >> 2);
                strin += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                strin += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
                strin += base64EncodeChars.charAt(c3 & 0x3F)
            }
            return strin
        }
    }
}
function sdk6kwRun(method, data, callback) {
    (method in sdk6kwFunction) && sdk6kwFunction[method](data, callback);
}
exports.init = function (data,callback) {
    sdk6kwRun('init', data, callback);
};
exports.login = function (callback) {
    sdk6kwRun('login', callback);
};
exports.pay = function (data, callback) {
    sdk6kwRun('pay', data, callback);
};
exports.logRole = function (createTime, serverId, serverName, roleId, roleName, roleLevel, payLevel, dataType) {
    var data = {
        createTime: createTime,
        serverId: serverId,
        serverName: serverName,
        roleId: roleId,
        roleName: roleName,
        roleLevel: roleLevel,
        payLevel: payLevel,
        dataType:dataType
    };
    sdk6kwRun('logRole', data);
};
exports.logEnterGame = function (createTime, serverId, serverName, roleId, roleName, roleLevel, payLevel, dataType) {
    var data = {
        createTime: createTime,
        serverId: serverId,
        serverName: serverName,
        roleId: roleId,
        roleName: roleName,
        roleLevel: roleLevel,
        payLevel: payLevel,
        dataType:dataType
    };
    sdk6kwRun('logEnterGame', data);
};
exports.share = function (data, callback) {
    sdk6kwRun('share', data, callback);
};
exports.shareLog = function (callback) {
    sdk6kwRun('shareLog', callback);
}
exports.getPayState = function (data, callback) {
    sdk6kwRun('getPayState', data, callback);
}
exports.msgSecCheck = function (options) {
    sdk6kwRun('msgSecCheck', options)
}
exports.openCustomerWithClientChange = function () {
    sdk6kwRun('openCustomerWithClientChange')
}
exports.showWxAd = function () {
    sdk6kwRun('showWxAd')
}
