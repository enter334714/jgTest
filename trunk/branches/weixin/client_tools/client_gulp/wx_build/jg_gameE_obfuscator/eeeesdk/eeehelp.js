var b = wx.$e;
const state = {
    initStatus: b[40307],
    loginStatus: b[40307],
    videoAd: null, // 激励广告
    bannerAd: null, // banner广告
    gridAd: null, // 格子广告
    interstitialAd: null, // 插屏广告
    customAd: null // 原生模板广告
};
const commonParams = {
    referer: b[66161],
    partner: b[66162],
    mac: '',
    imei: '',
    gameId: "",
    gameKey: "",
    uid: "",
    unionId: "",
    code: "",
    openid: "",
    wxid: "",
    ip: "",
    sign: '',
    payType: "",
    encryptedData: '',
    iv: '',
    scene: '',
    query: '',
    yy_pf: b[66163],
    payTip: b[66164],

    accountInfo: {},
    envVersion: "",

    showAppOn: "",
    sendMessageImg: "",
    sendMessageTitle: "",

    // 切量
    referrerInfo: null,
    switchApp: "",
    showSwitchOn: "",

    // 红包
    showRedPagOn: "",
    token: "",

    // 矩阵
    showSquareOn: "",
    initTimer: '',
    sdkLoginTimer: ''
};

let httpLock = {
    httpRedListFlag: false,
    httpReceiveRedPackageFlag: false,
    httpLuckDrawFlag: false,
    httpRedLoginFlag: false,
    httpToWithdraw: false,
    httpLuckDrawIndex: false,
    httpSquareListFlag: false,
    httpSquareClickFlag: false,
    httpGameWithdraw: false
};

var sdkParams = null;

state.debug = true;
state.level = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
};

// 地址
const api = b[66165];
const wanBaApi = b[66166];
const logApi = b[66167];
const wxRedApi = b[66168];

const Tools = {
    getDeviceType: () => {
        const systemInfo = wx.getSystemInfoSync();
        let osType;
        if (systemInfo.system.toLowerCase().indexOf(b[66169]) > -1) {
            osType = b[66169];
        } else if (systemInfo.system.toLowerCase().indexOf(b[66170]) > -1) {
            osType = b[66170];
        } else if (systemInfo.system.toLowerCase().indexOf(b[48651]) > -1) {
            osType = b[48651];
        } else {
            osType = b[66171];
        }
        return osType;
    },
    getTimeStamp: () => {
        return Date.parse(new Date()) / 1000;
    },
    buildActiveParams: (params, gameKey) => {
        const keys = [b[66172], b[66173], b[66174], b[66175], b[66176], b[40771]];
        let signString = "";
        for (let k in params) {
            signString = signString + params[k];
        }
        signString = signString + gameKey;
        params[b[50129]] = md5(signString);
        return params;
    },
    buildChangeShell: (params, gameKey) => {
        const keys = [b[66172], b[66177], b[40771]];
        let signString = "";
        for (let k in params) {
            signString = signString + params[k];
        }
        signString = signString + gameKey;
        params[b[50129]] = md5(signString);
        return params;
    },
    buildLoginParams: params => {
        const keys = [b[66178], b[66172], b[66174], b[66173], b[40771]];
        let signString = "";
        for (let key in keys) {
            let k = keys[key];
            signString = signString + params[k];
        }
        signString = signString + commonParams.gameKey;
        params[b[50129]] = md5(signString);
        return params;
    },
    buildBindParams: params => {
        const keys = [b[66172], b[66179], b[66180], b[40771]];
        let signString = "";
        for (let key in keys) {
            let k = keys[key];
            signString = signString + params[k];
        }
        signString = signString + commonParams.gameKey;
        params[b[50129]] = md5(signString);
        return params;
    },
    buildPayParams: params => {
        const keys = [b[66172], b[66178], b[66174], b[46757], b[56884], b[40771]];
        let signString = "";
        for (let key in keys) {
            let k = keys[key];
            signString = signString + params[k];
        }
        signString = signString + commonParams.gameKey + commonParams.wxid;
        params[b[50129]] = md5(signString);
        return params;
    },
    buildRepublish: params => {
        const keys = [b[46757], b[66172], b[66178], b[66174], b[40771]];
        let signString = "";
        for (let key in keys) {
            let k = keys[key];
            signString = signString + params[k];
        }
        signString = signString + commonParams.gameKey + commonParams.wxid;
        return md5(signString).toLowerCase();
    },
    buildCheckMsg(params) {
        const keys = [b[66172], b[66174], b[66178], b[40771]];
        let signString = "";
        for (let key in keys) {
            let k = keys[key];
            signString = signString + params[k];
        }
        signString = signString + commonParams.gameKey;
        params[b[50129]] = md5(signString).toLowerCase();
        return params;
    },

    getDeviceTypeId: () => {
        const osType = Tools.getDeviceType();
        let deviceType = b[66171];
        if (osType == b[66170]) {
            deviceType = 1;
        } else if (osType == b[66169]) {
            deviceType = 2;
        } else if (osType == b[48651]) {
            deviceType = 3;
        }
        return deviceType;
    },
    // 添加参数加密字段
    buildParams: params => {
        let signString = "";
        const keyList = [];
        for (let key in params) {
            keyList.push(key);
        }
        for (let i in keyList.sort()) {
            signString = signString + params[keyList[i]];
        }
        signString = signString + commonParams.gameKey;
        params[b[50129]] = md5(signString);
        return params;
    },
    serialize: obj => {
        var ary = [];
        for (var p in obj) if (obj.hasOwnProperty(p) && obj[p]) {
            ary.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
        return ary.join('&');
    },
    buildRedParams: params => {
        let keyList = Object.keys(params).sort();
        let stringParams = "";
        for (let key of keyList) {
            stringParams += key + '=' + encodeURIComponent(params[key]) + '&';
        }
        stringParams += b[40250] + '=' + commonParams.gameKey;
        params[b[50129]] = md5(stringParams);
        return params;
    },
    initLock: locks => {
        for (let lock in locks) {
            locks[lock] = false;
        }
    }

    //初始化
};const init = function (gameId, gameKey) {
    const SDKyyw = this;

    if (typeof SDKyyw.initLoginCallback != b[66077]) {
        console.error(b[66181]);
    } else {
        sdkParams = Tools.buildActiveParams({
            gameid: gameId,
            referer: commonParams.referer,
            partner: commonParams.partner,
            mac: commonParams.mac,
            imei: commonParams.imei,
            time: Tools.getTimeStamp()
        }, gameKey);

        //场景值
        let launchOption = wx.getLaunchOptionsSync();
        commonParams.gameId = gameId;
        commonParams.gameKey = gameKey;
        commonParams.scene = launchOption.scene;
        commonParams.query = launchOption.query;

        const accountInfo = wx.getAccountInfoSync();
        console.log(b[66182], accountInfo);
        console.log(b[66183], accountInfo.miniProgram.envVersion);
        commonParams.envVersion = accountInfo.miniProgram.envVersion;

        if (launchOption.query && launchOption.query.share_id) {
            // 分享绑定
            shareBind(launchOption.query);
        }

        // 跳转信息
        commonParams.referrerInfo = launchOption.referrerInfo;
        commonParams.extraData = launchOption.referrerInfo.extraData;

        let extraData = launchOption.referrerInfo.extraData;
        if (extraData && extraData.from_app_id && extraData.from_openid) {
            let data = {
                from_app_id: extraData.from_app_id,
                from_openid: extraData.from_openid
                // 绑定主游戏
            };toBind(data);
        }
        console.log(b[66184], launchOption);
        active(SDKyyw, sdkParams, gameId, gameKey);
    }
};

//初始化激活
const active = function (SDKyyw, params, gameId, gameKey) {
    wx.request({
        url: api + b[66185],
        data: params,
        timeout: 3000,
        success: res => {
            let ret = res.data;
            console.log(b[40504], ret);
            if (ret.data.code == 1) {
                wx.showToast({
                    title: b[63507],
                    icon: b[66186],
                    duration: 500,
                    mask: true
                });
                commonParams.gameId = gameId;
                commonParams.gameKey = gameKey;
                state.initStatus = b[48759];

                if (commonParams.gameId) {
                    let data = {};
                    data.logType = b[40504];
                    data.appId = commonParams.gameId;
                    data.appVersion = b[66187];
                    data.platform = b[66188];
                    data.source = commonParams.query.source ? commonParams.query.source : '';
                    data.source_type = commonParams.query.source_type ? commonParams.query.source_type : '';
                    pushData(data);
                }

                //添加分享
                wx.showShareMenu({
                    withShareTicket: true
                });
                let orderList = [];
                wx.setStorageSync(b[66189], orderList);
                wxLogin(SDKyyw);
            } else {
                state.initStatus = b[63122];
                console.log(b[66190], b[66191] + gameId, b[66192] + gameKey);
                if (commonParams.initTimer) {
                    clearTimeout(commonParams.initTimer);
                }
                commonParams.initTimer = setTimeout(() => {
                    active(SDKyyw, params, gameId, gameKey);
                }, 2000);
            }
        },
        fail: err => {
            console.log(b[66193]);
            if (commonParams.initTimer) {
                clearTimeout(commonParams.initTimer);
            }
            commonParams.initTimer = setTimeout(() => {
                active(SDKyyw, params, gameId, gameKey);
            }, 2000);
        }
    });
};

//微信登录
const wxLogin = function (SDKyyw) {
    wx.login({
        success: res => {
            if (res.code == null || res.code == undefined || res.code == "") {
                console.log(b[66194]);
                wxLogin(SDKyyw);
            } else {
                let jscode = res.code;
                // commonParams.code = res.code
                //获取用户信息
                wx.getSetting({
                    complete(com) {
                        if (com.authSetting[b[66195]]) {
                            wx.getUserInfo({
                                success(res) {
                                    console.log(b[40295], res);
                                    commonParams.iv = res.iv;
                                    commonParams.encryptedData = res.encryptedData;
                                }
                            });
                        }
                    }
                });

                let params = {
                    gameid: commonParams.gameId,
                    referer: commonParams.referer,
                    partner: commonParams.partner,
                    mac: commonParams.mac,
                    imei: commonParams.imei,
                    deviceno: commonParams.imei,
                    time: Tools.getTimeStamp(),
                    code: jscode,
                    iv: commonParams.iv,
                    osType: Tools.getDeviceType() == b[66170] ? "2" : Tools.getDeviceType() == b[66169] ? "1" : Tools.getDeviceType() == b[48651] ? "3" : b[66171],
                    os: Tools.getDeviceType(),
                    encryptedData: commonParams.encryptedData,
                    scene: commonParams.scene,
                    query: JSON.stringify(commonParams.query),
                    envVersion: commonParams.envVersion,
                    referrerInfo: commonParams.referrerInfo
                };
                sdkLogin(SDKyyw, params);
            }
        },
        fail: err => {
            wxLogin(SDKyyw);
            console.log(b[66196], err);
        }
    });
};

//SDK登录
const sdkLogin = function (SDKyyw, params) {
    wx.request({
        url: api + b[66197],
        data: Tools.buildLoginParams(params),
        timeout: 3000,
        success: res => {
            let ret = res.data;
            if (ret.status == 1) {
                commonParams.uid = ret.data.uid;
                commonParams.payType = ret.data.payType;
                commonParams.wxid = ret.data.wxid;
                commonParams.referer = ret.data.referer;
                commonParams.sign = ret.data.sign;
                commonParams.switchApp = ret.data.switchApp;
                commonParams.showSwitchOn = ret.data.showSwitchOn;
                commonParams.switchEnv = ret.data.switchEnv;
                commonParams.showRedPagOn = ret.data.showRedPagOn;
                commonParams.showAppOn = ret.data.showAppOn;
                commonParams.appTitle = ret.data.appTitle;
                commonParams.appContent = ret.data.appContent;
                commonParams.sendMessageImg = ret.data.sendMessageImg;
                commonParams.sendMessageTitle = ret.data.sendMessageTitle;
                commonParams.unionId = ret.data.unionId;
                commonParams.showSquareOn = ret.data.showSquareOn;

                console.log(b[66198], commonParams.referrerInfo);

                // 如果信息存在则调用
                // squareBind()
                if (commonParams.extraData && commonParams.extraData.square && commonParams.extraData.square.square_id) {
                    squareBind({
                        square_id: commonParams.extraData.square.square_id,
                        source_app_id: commonParams.extraData.square.source_app_id,
                        source_open_id: commonParams.extraData.square.source_open_id
                    });
                }
                if (ret.data.payType === 0) {
                    commonParams.payTip = ret.data.payTip;
                }
                state.loginStatus = b[48759];
                if (commonParams.uid) {
                    let data = {};
                    data.type = '1';
                    pushData(data);
                }
                replenish();
                if (ret.data.isNewUser == 1) {
                    let data = {};
                    data.logType = b[66199];
                    data.appId = commonParams.gameId;
                    data.appVersion = b[66187];
                    data.accountId = commonParams.uid;
                    data.deviceType = Tools.getDeviceTypeId();
                    data.platform = b[66188];
                    data.serverId = '';
                    data.channel = commonParams.partner;
                    data.imei = commonParams.uid;
                    data.sex = '0';
                    data.resolution = wx.getSystemInfoSync().screenWidth + "*" + wx.getSystemInfoSync().screenHeight;
                    data.deviceName = wx.getSystemInfoSync().model;
                    data.systemName = wx.getSystemInfoSync().system;
                    data.source = commonParams.query.source ? commonParams.query.source : '';
                    data.source_type = commonParams.query.source_type ? commonParams.query.source_type : '';
                    pushData(data);
                }
                console.log(b[46757], ret.data.uid);
                console.log(b[66200], ret);
                // SDK登录回调
                SDKyyw.initLoginCallback(ret);
            } else {
                console.log(b[66201], res);
                if (commonParams.sdkLoginTimer) {
                    clearTimeout(commonParams.sdkLoginTimer);
                }
                commonParams.sdkLoginTimer = setTimeout(() => {
                    wxLogin(SDKyyw);
                }, 2000);
            }
        },
        fail: err => {
            console.log(b[66202], err);
            if (commonParams.sdkLoginTimer) {
                clearTimeout(commonParams.sdkLoginTimer);
            }
            commonParams.sdkLoginTimer = setTimeout(() => {
                wxLogin(SDKyyw);
            }, 2000);
        }
    });
};

// 获取跳转开关
const jumpState = function () {
    if (commonParams.showSwitchOn == 1) {
        return true;
    } else {
        return false;
    }
};

// 跳转游戏
// showSwitchOn 是否要跳转 初始化回调函数中返回
const cutGame = function () {
    const SDKyyw = this;
    if (typeof SDKyyw.cutGameCallback != b[66077]) {
        console.log(b[66203]);
    } else {
        wx.navigateToMiniProgram({
            appId: commonParams.switchApp,
            extraData: {
                from_app_id: commonParams.gameId || "",
                from_openid: commonParams.uid || ""
            },
            envVersion: commonParams.switchEnv || b[66204], // develop trial release
            success(res) {
                console.log(b[66205], res);
                SDKyyw.cutGameCallback({
                    status: 1,
                    msg: b[48759],
                    data: res
                });
            },
            fail(err) {
                console.log(b[66206], err);
                SDKyyw.cutGameCallback({
                    status: 0,
                    msg: b[63122],
                    data: err
                });
            }
        });
    }
};

// 绑定主游戏
const toBind = function (data) {
    wx.login({
        success(ret) {
            let params = Tools.buildBindParams({
                gameid: commonParams.gameId,
                code: ret.code,
                from_app_id: data.from_app_id,
                from_openid: data.from_openid,
                osType: Tools.getDeviceTypeId(),
                scene: commonParams.scene,
                query: JSON.stringify(commonParams.query),
                time: Tools.getTimeStamp()
            });

            wx.request({
                url: api + b[66207],
                data: params,
                timeout: 3000,
                success: res => {
                    console.log(b[66208], res.data);
                }
            });
        }
    });
};

// 获取手机验证码
const getCaptcha = function (data, sucCallback, errorCallback) {
    const SDKyyw = this;
    if (typeof sucCallback == b[66077]) {
        let params = Tools.buildParams({
            yy_pf: commonParams.yy_pf,
            app_id: commonParams.gameId,
            telephone: data,
            open_id: commonParams.uid,
            use: b[40071],
            time: Tools.getTimeStamp()
        });
        wx.request({
            url: wanBaApi + b[66209],
            data: params,
            timeout: 3000,
            success: res => {
                if (res.data.code === 18000) {
                    console.log(b[66210], res);
                    sucCallback(res);
                } else {
                    console.log(b[66211], res);
                    errorCallback(res);
                }
            },
            error: err => {
                console.log(b[66212], err);
            }
        });
    } else {
        if (typeof SDKyyw.getCaptchaCallback != b[66077]) {
            console.log(b[66213]);
        } else {
            let params = Tools.buildParams({
                yy_pf: commonParams.yy_pf,
                app_id: commonParams.gameId,
                telephone: data.telephone,
                open_id: commonParams.uid,
                use: b[40071],
                time: Tools.getTimeStamp()
            });
            wx.request({
                url: wanBaApi + b[66209],
                data: params,
                timeout: 3000,
                success: res => {
                    if (res.data.code === 18000) {
                        console.log(b[66210], res);
                        SDKyyw.getCaptchaCallback({
                            status: 1,
                            msg: b[48759],
                            data: res
                        });
                    } else {
                        console.log(b[66211], res);
                        SDKyyw.getCaptchaCallback({
                            status: 0,
                            msg: b[63122],
                            data: res
                        });
                    }
                }
            });
        }
    }
};

// 绑定手机号
const bindTelephone = function (data, smsCode, sucCallback, errorCallback) {
    const SDKyyw = this;

    if (typeof sucCallback == b[66077]) {
        let params = Tools.buildParams({
            yy_pf: commonParams.yy_pf,
            app_id: commonParams.gameId,
            telephone: data,
            open_id: commonParams.uid,
            captcha: smsCode,
            time: Tools.getTimeStamp()
        });
        wx.request({
            url: wanBaApi + b[66214],
            data: params,
            timeout: 3000,
            success: res => {
                if (res.data.code === 18000) {
                    sucCallback(res);
                } else {
                    errorCallback(res);
                }
            }
        });
    } else {
        if (typeof SDKyyw.bindTelephoneCallback != b[66077]) {
            console.log(b[66215]);
        } else {
            let params = Tools.buildParams({
                yy_pf: commonParams.yy_pf,
                app_id: commonParams.gameId,
                telephone: data.telephone,
                open_id: commonParams.uid,
                captcha: data.captcha,
                time: Tools.getTimeStamp()
            });
            wx.request({
                url: wanBaApi + b[66214],
                data: params,
                timeout: 3000,
                success: res => {
                    if (res.data.code === 18000) {
                        SDKyyw.bindTelephoneCallback({
                            status: 1,
                            msg: b[48759],
                            data: res
                        });
                    } else {
                        SDKyyw.bindTelephoneCallback({
                            status: 0,
                            msg: b[63122],
                            data: res
                        });
                    }
                }
            });
        }
    }
};

//自动补单,如果后端返回补单成功就删除缓存的订单号
const replenish = function () {
    let orderList = wx.getStorageSync(b[66189]);
    if (orderList.length !== 0) {
        for (let i in orderList) {
            wx.login({
                success(res) {
                    orderList[i].code = res.code;
                    wx.request({
                        url: api + b[66216],
                        data: orderList[i],
                        success(res) {
                            if (res.data.status == 1 && res.data.data.status == 1) {
                                deleteItme(res.data.data.gameOrderid);
                            }
                        }
                    });
                }
            });
        }
    }
};
//删除补单成功的订单号
const deleteItme = function (item) {
    let orderList = wx.getStorageSync(b[66189]);
    if (orderList.length !== 0) {
        for (var i in orderList) {
            if (orderList[i].gameOrderid.includes(item)) {
                orderList.splice(i, 1);
            }
        }
    }
    wx.setStorageSync(b[66189], orderList);
};

// 消息订阅
const subscribeMessage = function (tmplIds) {
    const SDKyyw = this;
    if (typeof SDKyyw.subscribeMsgCallback != b[66077]) {
        console.log(b[66217]);
    } else {
        wx.requestSubscribeMessage({
            tmplIds: tmplIds,
            success: function (res) {
                SDKyyw.subscribeMsgCallback({
                    "status": '1',
                    "msg": b[48759],
                    "data": res
                });
            },
            fail: function (fail) {
                SDKyyw.subscribeMsgCallback({
                    "status": '0',
                    "msg": b[63122],
                    "data": fail
                });
            }
        });
    }
};

// 分享功能
// 主动拉起转发，进入选择通讯录界面
const shareAppMessage = function (data) {
    wx.shareAppMessage({
        title: data.title ? data.title : "",
        imageUrl: data.imageUrl,
        query: data.query,
        imageUrlId: data.imageUrlId,
        toCurrentGroup: data.toCurrentGroup,
        path: data.path
    });
};

// 广告组件
const advertisement = function (data) {
    const SDKyyw = this;
    let adData = {};
    adData.type = 11;
    adData.roleId = data.roleId;
    adData.roleName = data.roleName;
    adData.serverId = data.serverId;

    if (data.type == b[66218]) {
        if (typeof SDKyyw.createBannerAdCallback != b[66077]) {
            console.log(b[66219]);
        } else {
            // 创建 Banner 广告实例，提前初始化
            adData.adType = 1;
            state.bannerAd = wx.createBannerAd({
                adUnitId: data.adUnitId,
                style: {
                    left: data.left,
                    top: data.top,
                    width: data.width,
                    height: data.height
                }
            });
            // banner广告加载成功
            state.bannerAd.onLoad(res => {
                console.log(b[66220], res);
                state.bannerAd.show().then(() => {
                    console.log(b[66221]);
                    // banner显示成功上报
                    pushData(adData);
                    SDKyyw.createBannerAdCallback({
                        "status": '1',
                        "msg": b[48759],
                        "data": {}
                    });
                });
            });
            // banner广告加载失误
            state.bannerAd.onError(err => {
                console.log('bannerAd onError', err);
                SDKyyw.createBannerAdCallback({
                    "status": '0',
                    "msg": b[63122],
                    "data": err
                });
            });
        }
    } else if (data.type == b[66222]) {
        if (typeof SDKyyw.rewardedVideoAdCallback != b[66077]) {
            console.log(b[66223]);
        } else {
            adData.adType = 2;
            // 创建激励视频广告实例，提前初始化
            state.videoAd = wx.createRewardedVideoAd({
                adUnitId: data.adUnitId
            });
            // 用户触发广告后，显示激励视频广告
            state.videoAd.show().catch(() => {
                // 失败重试
                state.videoAd.load().then(() => state.videoAd.show()).catch(err => {
                    console.log(b[66224]);
                });
                state.videoAd.onClose(res => {
                    // 用户点击了【关闭广告】按钮
                    // 小于 2.1.0 的基础库版本，res 是一个 undefined
                    if (res && res.isEnded || res === undefined) {
                        // 正常播放结束，可以下发游戏奖励
                        console.log(b[66225]);

                        // 正常播放完才上报
                        pushData(adData);
                        SDKyyw.rewardedVideoAdCallback({
                            "status": '1',
                            "msg": b[48759],
                            "data": res
                        });
                    } else {
                        // 播放中途退出，不下发游戏奖励
                        console.log(b[66226]);
                        SDKyyw.rewardedVideoAdCallback({
                            "status": '0',
                            "msg": b[63122],
                            "data": res
                        });
                    }
                });
            });
        }
    } else if (data.type == b[66227]) {
        if (typeof SDKyyw.createInterstitialAdCallback != b[66077]) {
            console.log(b[66228]);
        } else {
            adData.adType = 3;
            // 创建插屏广告实例，提前初始化
            if (wx.createInterstitialAd) {
                state.interstitialAd = wx.createInterstitialAd({
                    adUnitId: data.adUnitId
                });
                state.interstitialAd.show().then(res => {
                    console.log(b[66229], res);
                    pushData(adData);
                    SDKyyw.createInterstitialAdCallback({
                        "status": '1',
                        "msg": b[48759],
                        "data": {}
                    });
                }).catch(err => {
                    console.log(b[66230], err);
                    SDKyyw.createInterstitialAdCallback({
                        "status": '0',
                        "msg": b[63122],
                        "data": err
                    });
                });
            }
        }
    } else if (data.type == b[66231]) {
        if (typeof SDKyyw.createGridAdCallback != b[66077]) {
            console.log(b[66232]);
        } else {
            // 格子广告
            adData.adType = 4;
            state.gridAd = wx.createGridAd({
                adUnitId: data.adUnitId,
                // adTheme: data.adTheme, // 背景颜色
                // gridCount: data.gridCount, // 格子个数
                style: {
                    left: data.left,
                    top: data.top,
                    width: data.width,
                    opacity: data.opacity
                }
            });
            // 创建格子广告实例，提前初始化
            state.gridAd.onLoad(() => {
                console.log(b[66233]);
                SDKyyw.state.gridAd.show().then(() => {
                    console.log(b[66234]);
                    pushData(adData);
                    SDKyyw.createGridAdCallback({
                        "status": '1',
                        "msg": b[48759],
                        "data": {}
                    });
                });
            });
            state.gridAd.onError(err => {
                SDKyyw.createGridAdCallback({
                    "status": '0',
                    "msg": b[63122],
                    "data": err
                });
                console.log(b[66235], err);
            });
        }
    } else if (data.type == b[66236]) {
        if (typeof SDKyyw.createCustomAdCallback != b[66077]) {
            console.log(b[66237]);
        } else {
            adData.adType = 5;
            state.customAd = wx.createCustomAd({
                adUnitId: data.adUnitId,
                // adIntervals: "",
                style: {
                    left: data.left,
                    top: data.top,
                    fixed: data.fixed
                }
            });
            state.customAd.show().then(res => {
                console.log(b[66238], res);
                pushData(adData);
                SDKyyw.createCustomAdCallback({
                    "status": '1',
                    "msg": b[48759],
                    "data": res
                });
            }).catch(err => {
                console.log(b[66239], err);
                SDKyyw.createCustomAdCallback({
                    "status": '0',
                    "msg": b[63122],
                    "data": err
                });
            });
        }
    }
};

// 获取场景值
// 获取小游戏冷启动时的参数。热启动参数通过 wx.onShow 接口获取。
const getLaunchOptionsSync = function () {
    return wx.getLaunchOptionsSync();
};

// 开放数据
const openData = function (data) {
    const SDKyyw = this;
    if (typeof SDKyyw.openDataCallback != b[66077]) {
        console.error(b[66240]);
    } else {
        if (data.type == b[66241]) {
            //好友感兴趣
            wx.getPotentialFriendList({
                keyList: data.keyList,
                success: res => {
                    SDKyyw.openDataCallback({
                        "status": '1',
                        "msg": b[48759],
                        "data": res
                    });
                },
                fail: err => {
                    SDKyyw.openDataCallback({
                        "status": '0',
                        "msg": b[63122],
                        "data": err
                    });
                }
            });
        } else if (data.type == b[66242]) {
            //群同玩成员
            wx.getGroupCloudStorage({
                shareTicket: data.shareTicket,
                keyList: data.keyList,
                success: res => {
                    SDKyyw.openDataCallback({
                        "status": '1',
                        "msg": b[48759],
                        "data": res
                    });
                },
                fail: err => {
                    SDKyyw.openDataCallback({
                        "status": '0',
                        "msg": b[63122],
                        "data": err
                    });
                }
            });
        } else if (data.type == b[66243]) {
            //当前用户同玩好友
            wx.getFriendCloudStorage({
                keyList: data.keyList,
                success: res => {
                    SDKyyw.openDataCallback({
                        "status": '1',
                        "msg": b[48759],
                        "data": res
                    });
                },
                fail: err => {
                    SDKyyw.openDataCallback({
                        "status": '0',
                        "msg": b[63122],
                        "data": err
                    });
                }
            });
        }
    }
};

//米大师支付成功后通知后端结果
const sendResult = function (params) {
    console.log(b[66244], params);
    wx.login({
        success(res) {
            params.code = res.code;
            params.paytype = 3;
            wx.request({
                url: api + b[66245],
                data: Tools.buildPayParams(params),
                success(res) {
                    console.log(b[66246], res);
                }
            });
        }
    });
};
//支付
const pay = function (payData) {
    const SDKyyw = this;
    // if (state.loginStatus != 'success') {
    //     console.error("请先保证login成功")
    //     return
    // }

    const systemInfo = wx.getSystemInfoSync();
    const osType = Tools.getDeviceType();
    let deviceType = b[66171];
    if (osType == b[66170]) {
        deviceType = 2;
    } else if (osType == b[66169]) {
        deviceType = 1;
    } else if (osType == b[48651]) {
        deviceType = 3;
    }

    if (typeof this.onPayCallback != b[66077]) {
        console.error(b[66247]);
    } else {
        console.log(b[66248], commonParams);
        const params = {
            // presentCount: payData.presentCount,
            gameOrderid: payData.gameOrderid,
            gameid: commonParams.gameId,
            sign: commonParams.sign,
            referer: commonParams.referer,
            pext: payData.pext,
            pext2: commonParams.partner,
            sdkType: 3,
            serverName: payData.serverName,
            deviceno: commonParams.partner,
            serverId: payData.serverId,
            mac: commonParams.mac,
            imei: commonParams.imei,
            productName: payData.productName,
            uid: commonParams.uid,
            productId: payData.productId,
            roleId: payData.roleId,
            money: payData.money,
            partner: commonParams.partner,
            roleName: payData.roleName,
            roleLevel: payData.roleLevel,
            partnerType: deviceType,
            mode: '',
            wxid: commonParams.wxid,
            osType: deviceType,
            os: osType,
            paytype: commonParams.payType,
            bundleName: commonParams.wxappid,
            gamever: '',
            time: Tools.getTimeStamp()
        };
        wx.showLoading({
            title: b[66249],
            mask: true
        });

        // if (commonParams.payType == 0) {
        //     wx.hideLoading()
        //     wx.showModal({
        //         title: "温馨提示",
        //         content: "由于政策原因，暂无法支付，若需要充值，请将游戏分享到微信，在微信PC版打开游戏进行充值",
        //         showCancel: false
        //     })
        //     return;
        // } else {
        wx.login({
            success(res) {
                params.code = res.code;
                console.log(b[66250], res.code);
                wx.request({
                    url: api + b[66245],
                    data: Tools.buildPayParams(params),
                    success: payRes => {
                        let orderList = wx.getStorageSync(b[66189]);
                        let item = {
                            uid: commonParams.uid,
                            gameOrderid: params.gameOrderid,
                            time: params.time,
                            money: params.money,
                            paytype: commonParams.payType,
                            wxid: commonParams.wxid,
                            deviceno: commonParams.partner,
                            gameid: commonParams.gameId,
                            sign: Tools.buildRepublish(params),
                            partner: commonParams.partner,
                            productId: params.productId,
                            productName: params.productName,
                            roleId: params.roleId,
                            serverName: params.serverName,
                            roleName: params.roleName,
                            pext: params.pext,
                            pext2: params.partner,
                            mode: b[66251]
                        };
                        orderList.push(item);

                        console.log(b[66252], payRes.data);
                        wx.hideLoading();
                        let ret = payRes.data;
                        commonParams.payType = ret.paytype;
                        if (payRes.data.status == 1) {
                            SDKyyw.onPayCallback({
                                "status": '1',
                                "msg": b[66253]
                            });
                            wx.hideLoading();
                            switch (commonParams.payType) {
                                case 0:
                                    wx.showModal({
                                        title: b[43622],
                                        content: commonParams.payTip,
                                        showCancel: false
                                    });
                                    return;
                                case 1:
                                    //sdk外链支付
                                    wx.setClipboardData({
                                        data: ret.data.url,
                                        success(res) {

                                            wx.showModal({
                                                title: b[43622],
                                                content: b[66254],
                                                showCancel: false,
                                                confirmText: b[66255],
                                                confirmColor: b[66256]
                                            });
                                        }
                                    });
                                    break;
                                case 2:
                                    //客服支付
                                    // if (ret.start == "0") {
                                    let path = b[66257];
                                    wx.showModal({
                                        title: b[43622],
                                        content: b[66258],
                                        showCancel: false,
                                        confirmText: b[48480],
                                        success() {
                                            wx.openCustomerServiceConversation({
                                                showMessageCard: true,
                                                sendMessageTitle: params.gameOrderid,
                                                sendMessagePath: JSON.stringify(params),
                                                sendMessageImg: path,
                                                sessionFrom: JSON.stringify(params),
                                                success(res) {
                                                    console.log(res);
                                                }
                                            });
                                        }
                                    });

                                    break;
                                case 3:
                                    //官方米大师支付
                                    if (payRes.data.errcode == 0) {
                                        wx.requestMidasPayment({
                                            mode: b[66251],
                                            env: ret.data.env,
                                            offerId: ret.data.offerId,
                                            currencyType: b[66259],
                                            platform: b[66169],
                                            buyQuantity: ret.data.amt,
                                            success(res) {
                                                wx.setStorageSync(b[66189], orderList);
                                                sendResult(params);
                                            },
                                            complete(com) {
                                                console.log(b[66260], com);
                                            }
                                        });
                                    }

                                    break;
                                case 5:
                                    //小程序支付
                                    let Minidata = {};
                                    Minidata.goods_name = params.productName;
                                    Minidata.gameOrderid = ret.gameOrderid;
                                    Minidata.money = ret.money;
                                    Minidata.out_code = ret.out_code;
                                    Minidata.paytype = ret.paytype;

                                    wx.navigateToMiniProgram({
                                        appId: ret.appid,
                                        path: b[66261],
                                        envVersion: b[66204],
                                        extraData: Minidata,
                                        success: function (res) {
                                            console.log(b[66262], res);
                                        },
                                        fail: function (err) {
                                            console.log(b[66263], err);
                                            wx.request({
                                                url: b[66264] + commonParams.gameId + b[66265] + err.errMsg,
                                                success(res) {
                                                    console.log(b[66266], res);
                                                }
                                            });
                                        },
                                        complete: function (com) {
                                            console.log(b[66267], com);
                                        }
                                    });
                                    break;
                            }
                        } else {
                            SDKyyw.onPayCallback({
                                "status": '0',
                                "msg": b[66268]
                            });
                        }
                    }
                });
            }
        });
        // }
    }
};

// 游戏更新订阅状态查询接口
const getWhatsNewSubscriptionsSetting = function (data) {
    const SDKyyw = this;
    if (typeof SDKyyw.getWhatsNewSubscriptionsSettingCallback != b[66077]) {
        console.log(b[66269]);
    } else {
        wx.getWhatsNewSubscriptionsSetting({
            msgType: data.msgType, // 消息类型，1=游戏更新提醒，目前只有这种类型
            success(res) {
                // res.status说明 0未知状态 1未订阅，可以发起订阅 2用户已订阅该类型消息 3超过频率限制，暂时不允许发起订阅 4没有权限或已封禁
                SDKyyw.getWhatsNewSubscriptionsSettingCallback({
                    "code": '1',
                    "msg": b[48759],
                    "data": res
                });
            },
            fail(err) {
                SDKyyw.getWhatsNewSubscriptionsSettingCallback({
                    "code": '0',
                    "msg": b[63122],
                    "data": err
                });
            }
        });
    }
};

// 请求订阅游戏更新提醒
const requestSubscribeWhatsNew = function (data) {
    const SDKyyw = this;
    if (typeof SDKyyw.requestSubscribeWhatsNewCallback != b[66077]) {
        console.log(b[66270]);
    } else {
        wx.requestSubscribeWhatsNew({
            msgType: data.msgType, // 消息类型，1=游戏更新提醒，目前只有这种类型
            success(res) {
                SDKyyw.requestSubscribeWhatsNewCallback({
                    "code": '1',
                    "msg": b[48759],
                    "data": res
                });
            },
            fail(err) {
                // errCode说明 1系统错误 2用户已订阅该类型消息 3超过频率限制，暂时不允许发起订阅 4没有权限或已封禁
                SDKyyw.requestSubscribeWhatsNewCallback({
                    "code": '0',
                    "msg": b[63122],
                    "data": err
                });
            }
        });
    }
};

// 获取红包开关 + 区服活动配置判断 + 抽奖活动状态
const getRedPagState = function (data) {
    const SDKyyw = this;
    if (typeof SDKyyw.getRedPagStateCallback != b[66077]) {
        console.log(b[66271]);
    } else {
        if (commonParams.showRedPagOn) {
            wx.request({
                url: wxRedApi + b[66272],
                data: {
                    app_id: commonParams.gameId,
                    open_id: commonParams.uid,
                    server_id: data.server_id,
                    role_id: data.role_id
                },
                success(res) {
                    let ret = res.data;
                    if (ret.status == 200) {
                        commonParams.luck_draw_on = ret.data.luck_draw_on;
                        commonParams.luck_draw_activity_id = ret.data.luck_draw_activity_id;
                        SDKyyw.getRedPagStateCallback({
                            "status": '1',
                            "msg": ret.msg,
                            "data": ret.data
                        });
                    } else {
                        SDKyyw.getRedPagStateCallback({
                            "status": '0',
                            "msg": ret.msg,
                            "data": ret.data
                        });
                    }
                },
                fail(err) {
                    SDKyyw.getRedPagStateCallback({
                        "status": '-1',
                        "msg": err.errMsg,
                        "data": err
                    });
                    console.log(b[66273], err);
                },
                timeout: 4000
            });
        } else {
            SDKyyw.getRedPagStateCallback({
                "status": '0',
                "msg": `showRedPagOn为${commonParams.showRedPagOn}`,
                "data": commonParams.showRedPagOn
            });
        }
    }
};

// 红包角色登录
const redLogin = function (data) {
    const SDKyyw = this;
    if (typeof SDKyyw.redLoginCallback != b[66077]) {
        console.log(b[66274]);
    } else {
        // 初始化锁
        Tools.initLock(httpLock);

        wx.login({
            success(res) {
                if (res.code) {
                    const params = {
                        app_id: commonParams.gameId,
                        code: res.code,
                        server_id: data.server_id,
                        server_name: data.server_name,
                        role_id: data.role_id,
                        role_name: data.role_name
                    };
                    if (!httpLock.httpRedLoginFlag) {
                        httpLock.httpRedLoginFlag = true;
                        wx.request({
                            url: wxRedApi + b[66275],
                            method: b[43876],
                            data: Tools.buildRedParams(params),
                            header: {
                                "Content-Type": b[66276]
                            },
                            success(res) {
                                let ret = res.data;
                                if (ret.status == 200) {
                                    commonParams.token = ret.data.token;
                                    SDKyyw.redLoginCallback({
                                        "status": '1',
                                        "msg": ret.msg,
                                        "data": ret.data
                                    });
                                } else {
                                    SDKyyw.redLoginCallback({
                                        "status": '0',
                                        "msg": ret.msg,
                                        "data": ret.data
                                    });
                                }
                            },
                            fail(err) {
                                SDKyyw.redLoginCallback({
                                    "status": '-1',
                                    "msg": err.errMsg,
                                    "data": err
                                });
                                console.log(b[54902], err);
                            },
                            complete(res) {
                                httpLock.httpRedLoginFlag = false;
                            },
                            timeout: 4000
                        });
                    }
                } else {
                    console.log(b[66277] + res.errMsg);
                }
            }
        });
    }
};

// 获取用户信息
const getWxUserInfo = function () {
    const SDKyyw = this;
    if (typeof SDKyyw.getWxUserInfoCallback != b[66077]) {
        console.log(b[66278]);
    } else {
        const params = {
            app_id: commonParams.gameId,
            token: commonParams.token
        };
        wx.request({
            url: wxRedApi + b[66279],
            data: Tools.buildRedParams(params),
            success(res) {
                let ret = res.data;
                if (ret.status == 200) {
                    SDKyyw.getWxUserInfoCallback({
                        "status": '1',
                        "msg": ret.msg,
                        "data": ret.data
                    });
                } else {
                    SDKyyw.getWxUserInfoCallback({
                        "status": '0',
                        "msg": ret.msg,
                        "data": ret.data
                    });
                }
            },
            fail(err) {
                console.log(b[54902], err);
            },
            timeout: 4000
        });
    }
};

// 红包列表
const getRedPackageList = function () {
    const SDKyyw = this;
    if (typeof SDKyyw.getRedPackageListCallback != b[66077]) {
        console.log(b[66280]);
    } else {
        const params = {
            app_id: commonParams.gameId,
            token: commonParams.token
        };
        if (!httpLock.httpRedListFlag) {
            httpLock.httpRedListFlag = true;
            wx.request({
                url: wxRedApi + b[66281],
                data: Tools.buildRedParams(params),
                success(res) {
                    let ret = res.data;
                    if (ret.status == 200) {
                        commonParams.share_activity_id = ret.data.share_activity_id;
                        SDKyyw.getRedPackageListCallback({
                            "status": '1',
                            "msg": ret.msg,
                            "data": ret.data
                        });
                    } else {
                        SDKyyw.getRedPackageListCallback({
                            "status": '0',
                            "msg": ret.msg,
                            "data": ret.data
                        });
                    }
                },
                fail(err) {
                    SDKyyw.getRedPackageListCallback({
                        "status": '-1',
                        "msg": err.errMsg,
                        "data": err
                    });
                    console.log(b[54902], err);
                },
                complete(res) {
                    httpLock.httpRedListFlag = false;
                },
                timeout: 4000
            });
        }
    }
};

// 红包配置
const getRedConfig = function () {
    const SDKyyw = this;
    if (typeof SDKyyw.getRedConfigCallback != b[66077]) {
        console.log(b[66282]);
    } else {
        const params = {
            app_id: commonParams.gameId,
            token: commonParams.token
        };
        wx.request({
            url: wxRedApi + b[66283],
            data: Tools.buildRedParams(params),
            success(res) {
                let ret = res.data;
                if (ret.status == 200) {
                    SDKyyw.getRedConfigCallback({
                        "status": '1',
                        "msg": ret.msg,
                        "data": ret.data
                    });
                } else {
                    SDKyyw.getRedConfigCallback({
                        "status": '0',
                        "msg": ret.msg,
                        "data": ret.data
                    });
                }
            },
            fail(err) {
                console.log(b[54902], err);
            },
            timeout: 4000
        });
    }
};

// 领取红包
const toReceiveRedPackage = function (data) {
    const SDKyyw = this;
    if (typeof SDKyyw.toReceiveRedPackageCallback != b[66077]) {
        console.log(b[66284]);
    } else {
        if (!httpLock.httpReceiveRedPackageFlag) {
            const params = {
                activity_id: data.activity_id,
                activity_rule_id: data.activity_rule_id,
                activity_rule_type: data.activity_rule_type,
                app_id: commonParams.gameId,
                token: commonParams.token
            };
            httpLock.httpReceiveRedPackageFlag = true;
            wx.request({
                url: wxRedApi + b[66285],
                method: b[43876],
                data: Tools.buildRedParams(params),
                header: {
                    "Content-Type": b[66276]
                },
                success(res) {
                    let ret = res.data;
                    if (ret.status == 200) {
                        SDKyyw.toReceiveRedPackageCallback({
                            "status": '1',
                            "msg": ret.msg,
                            "data": ret.data
                        });
                    } else {
                        SDKyyw.toReceiveRedPackageCallback({
                            "status": '0',
                            "msg": ret.msg,
                            "data": ret.data
                        });
                    }
                },
                fail(err) {
                    console.log(b[66286], err);
                    SDKyyw.toReceiveRedPackageCallback({
                        "status": '-1',
                        "msg": err.errMsg,
                        "data": err
                    });
                },
                complete(res) {
                    httpLock.httpReceiveRedPackageFlag = false;
                },
                timeout: 4000
            });
        }
    }
};

// 领取明细
const getRedDetailList = function () {
    const SDKyyw = this;
    if (typeof SDKyyw.getRedDetailListCallback != b[66077]) {
        console.log(b[66287]);
    } else {
        const params = {
            app_id: commonParams.gameId,
            token: commonParams.token
        };
        wx.request({
            url: wxRedApi + b[66288],
            data: Tools.buildRedParams(params),
            success(res) {
                let ret = res.data;
                if (ret.status == 200) {
                    SDKyyw.getRedDetailListCallback({
                        "status": '1',
                        "msg": ret.msg,
                        "data": ret.data
                    });
                } else {
                    SDKyyw.getRedDetailListCallback({
                        "status": '0',
                        "msg": ret.msg,
                        "data": ret.data
                    });
                }
            },
            fail(err) {
                console.log(b[66286], err);
            },
            timeout: 4000
        });
    }
};

// 去提现
const toWithdraw = function (data) {
    const SDKyyw = this;
    if (typeof SDKyyw.toWithdrawCallback != b[66077]) {
        console.log(b[66289]);
    } else {
        const params = {
            withdraw_amount: data.withdraw_amount,
            app_id: commonParams.gameId,
            token: commonParams.token
        };
        if (!httpLock.httpToWithdraw) {
            httpLock.httpToWithdraw = true;
            wx.request({
                url: wxRedApi + b[66290],
                data: Tools.buildRedParams(params),
                method: b[43876],
                header: {
                    "Content-Type": b[66276]
                },
                success(res) {
                    let ret = res.data;
                    if (ret.status == 200) {
                        SDKyyw.toWithdrawCallback({
                            "status": '1',
                            "msg": ret.msg,
                            "data": ret.data
                        });
                    } else {
                        SDKyyw.toWithdrawCallback({
                            "status": '0',
                            "msg": ret.msg,
                            "data": ret.data
                        });
                    }
                },
                fail(err) {
                    SDKyyw.toWithdrawCallback({
                        "status": '-1',
                        "msg": err.errMsg,
                        "data": err
                    });
                    console.log(b[66286], err);
                },
                complete(res) {
                    httpLock.httpToWithdraw = false;
                },
                timeout: 4000
            });
        }
    }
};

// 红包分享参数获取, 并分享
const toRedShare = function (data) {
    const params = {
        app_id: commonParams.gameId,
        token: commonParams.token,
        activity_id: data.share_activity_id
    };
    wx.request({
        url: wxRedApi + b[66291],
        data: Tools.buildRedParams(params),
        success(res) {
            let ret = res.data;
            console.log(b[66292], ret);
            if (ret.status == 200) {
                wx.shareAppMessage({
                    title: ret.data.title || "",
                    imageUrl: ret.data.image_url || "",
                    query: Tools.serialize({
                        share_id: ret.data.share_id
                    }),
                    imageUrlId: ret.data.image_url_id || ""
                });
            }
        },
        fail(err) {
            console.log(b[66286], err);
        },
        timeout: 4000
    });
};

// 红包分享成功邀请用户列表
const getShareList = function (data) {
    const SDKyyw = this;
    if (typeof SDKyyw.getShareListCallback != b[66077]) {
        console.log(b[66293]);
    } else {
        const params = {
            activity_id: data.share_activity_id,
            app_id: commonParams.gameId,
            token: commonParams.token
        };
        wx.request({
            url: wxRedApi + b[66294],
            data: Tools.buildRedParams(params),
            success(res) {
                let ret = res.data;
                if (ret.status == 200) {
                    SDKyyw.getShareListCallback({
                        "status": '1',
                        "msg": ret.msg,
                        "data": ret.data
                    });
                } else {
                    SDKyyw.getShareListCallback({
                        "status": '0',
                        "msg": ret.msg,
                        "data": ret.data
                    });
                }
            },
            fail(err) {
                console.log(b[66286], err);
            },
            timeout: 4000
        });
    }
};

// 分享绑定
const shareBind = function (data) {
    wx.login({
        success: res => {
            if (res.code) {
                let params = {
                    app_id: commonParams.gameId,
                    share_id: data.share_id,
                    code: res.code
                };
                wx.request({
                    url: wxRedApi + b[66295],
                    data: Tools.buildRedParams(params),
                    success(res) {
                        let ret = res.data;
                        console.log(b[66296], ret.data, ret.msg);
                    },
                    fail(err) {
                        console.log("shareBindErr", err);
                    },
                    timeout: 4000
                });
            } else {
                console.log(b[66194], res);
            }
        }
    });
};

// 红包抽奖首页
const getLuckDrawIndex = function () {
    const SDKyyw = this;
    if (typeof SDKyyw.getLuckDrawIndexCallback != b[66077]) {
        console.log(b[66297]);
    } else {
        const params = {
            app_id: commonParams.gameId,
            token: commonParams.token,
            activity_id: commonParams.luck_draw_activity_id
        };
        if (!httpLock.httpLuckDrawIndex) {
            httpLock.httpLuckDrawIndex = true;
            wx.request({
                url: wxRedApi + b[66298],
                data: Tools.buildRedParams(params),
                success(res) {
                    let ret = res.data;
                    if (ret.status == 200) {
                        SDKyyw.getLuckDrawIndexCallback({
                            "status": '1',
                            "msg": ret.msg,
                            "data": ret.data
                        });
                    } else {
                        SDKyyw.getLuckDrawIndexCallback({
                            "status": '0',
                            "msg": ret.msg,
                            "data": ret.data
                        });
                    }
                },
                fail(err) {
                    SDKyyw.getLuckDrawIndexCallback({
                        "status": '-1',
                        "msg": err.errMsg,
                        "data": err
                    });
                    console.log(b[66286], err);
                },
                complete(res) {
                    httpLock.httpLuckDrawIndex = false;
                },
                timeout: 4000
            });
        }
    }
};

// 点击抽奖
const luckyDraw = function () {
    const SDKyyw = this;
    if (typeof SDKyyw.luckyDrawCallback != b[66077]) {
        console.log(b[66299]);
    } else {
        const params = {
            app_id: commonParams.gameId,
            token: commonParams.token,
            activity_id: commonParams.luck_draw_activity_id
        };
        if (!httpLock.httpLuckDrawFlag) {
            httpLock.httpLuckDrawFlag = true;
            wx.request({
                url: wxRedApi + b[66300],
                data: Tools.buildRedParams(params),
                success(res) {
                    let ret = res.data;
                    if (ret.status == 200) {
                        SDKyyw.luckyDrawCallback({
                            "status": '1',
                            "msg": ret.msg,
                            "data": ret.data
                        });
                    } else {
                        SDKyyw.luckyDrawCallback({
                            "status": '0',
                            "msg": ret.msg,
                            "data": ret.data
                        });
                    }
                },
                fail(err) {
                    console.log(b[66286], err);
                    SDKyyw.luckyDrawCallback({
                        "status": '-1',
                        "msg": err.errMsg,
                        "data": err
                    });
                },
                complete(res) {
                    httpLock.httpLuckDrawFlag = false;
                },
                timeout: 4000
            });
        }
    }
};

// 获取矩阵列表
const getSquareList = function (data) {
    const SDKyyw = this;
    if (typeof SDKyyw.getSquareListCallback != b[66077]) {
        console.log(b[66301]);
    } else {
        if (!httpLock.httpSquareListFlag) {
            httpLock.httpSquareListFlag = true;
            const params = {
                app_id: commonParams.gameId,
                uid: commonParams.uid,
                union_id: commonParams.unionId
            };
            data && data.type ? params.type = data.type : '';
            wx.request({
                url: wxRedApi + b[66302],
                data: Tools.buildRedParams(params),
                success(res) {
                    let ret = res.data;
                    console.log(b[66303], ret);
                    SDKyyw.getSquareListCallback(ret);
                },
                complete() {
                    httpLock.httpSquareListFlag = false;
                },
                timeout: 4000
            });
        }
    }
};

// 矩阵点击
const squareClick = function (data) {
    if (!httpLock.httpSquareClickFlag) {
        httpLock.httpSquareClickFlag = true;
        const params = {
            app_id: commonParams.gameId,
            square_id: data.square_id,
            uid: commonParams.uid,
            union_id: commonParams.unionId
        };
        wx.request({
            url: wxRedApi + b[66304],
            data: Tools.buildRedParams(params),
            success(res) {
                console.log(b[66305], res);
                wx.navigateToMiniProgram({
                    appId: data.wxapp_id,
                    extraData: {
                        square: {
                            square_id: data.square_id,
                            source_app_id: commonParams.gameId,
                            source_open_id: commonParams.uid
                        }
                    },
                    // envVersion: 'develop',
                    envVersion: data.app_env,
                    success(res) {
                        // 打开成功
                    }
                });
            },
            complete() {
                httpLock.httpSquareClickFlag = false;
            },
            timeout: 4000
        });
    }
};

// 矩阵绑定
const squareBind = function (data) {
    wx.login({
        success(ret) {
            let params = Tools.buildRedParams({
                app_id: commonParams.gameId,
                code: ret.code,
                square_id: data.square_id,
                source_app_id: data.source_app_id,
                source_open_id: data.source_open_id
            });
            console.log(b[66306], params);
            wx.request({
                url: wxRedApi + b[66307],
                data: params,
                timeout: 5000,
                success: res => {
                    console.log(b[66308], res);
                }
            });
        }
    });
};

// 去提现
const gameWithdraw = function (data) {
    const SDKyyw = this;
    if (typeof SDKyyw.gameWithdrawCallback != b[66077]) {
        console.log(b[66309]);
    } else {
        const params = {
            app_id: commonParams.gameId,
            withdraw_amount: data.withdraw_amount,
            open_id: commonParams.uid
        };
        if (!httpLock.httpGameWithdraw) {
            httpLock.httpGameWithdraw = true;
            wx.request({
                url: wxRedApi + b[66310],
                data: Tools.buildRedParams(params),
                method: b[43876],
                header: {
                    "Content-Type": b[66276]
                },
                success(res) {
                    let ret = res.data;
                    SDKyyw.gameWithdrawCallback(ret);
                },
                fail(err) {
                    SDKyyw.gameWithdrawCallback(err);
                    console.log(b[66286], err);
                },
                complete(res) {
                    httpLock.httpGameWithdraw = false;
                },
                timeout: 4000
            });
        }
    }
};

// 获取用户OpenID
const getOpenId = function () {
    return commonParams.uid;
};

// showSquareOn
// 矩阵开关
const showSquareOn = function () {
    return commonParams.showSquareOn;
};

// 微信小游戏壳包配置开关
const getChangeShellOn = function (appid, appkey) {
    const SDKyyw = this;
    if (typeof SDKyyw.getChangeShellOnCallback != b[66077]) {
        console.log(b[66311]);
    } else {
        commonParams.gameId = appid;
        commonParams.gameKey = appkey;
        const accountInfo = wx.getAccountInfoSync();
        console.log(b[66182], accountInfo);
        console.log(b[66183], accountInfo.miniProgram.envVersion);
        commonParams.envVersion = accountInfo.miniProgram.envVersion;
        wx.request({
            url: api + b[66312],
            data: Tools.buildChangeShell({
                gameid: appid,
                envVersion: commonParams.envVersion,
                time: Tools.getTimeStamp()
            }, appkey),
            success(res) {
                SDKyyw.getChangeShellOnCallback(res.data);
            },
            timeout: 4000
        });
    }
};

// 弹窗
const showAppModal = function () {
    if (commonParams.showAppOn) {
        wx.showModal({
            title: commonParams.appTitle,
            content: commonParams.appContent || b[66313],
            cancelText: b[66314],
            confirmText: b[66315],
            success(res) {
                if (res.confirm) {
                    wx.openCustomerServiceConversation({
                        showMessageCard: true,
                        sendMessageTitle: commonParams.sendMessageTitle,
                        sendMessageImg: commonParams.sendMessageImg,
                        complete(res) {
                            console.log(b[66316], res);
                        }
                    });
                } else if (res.cancel) {
                    console.log(b[66317]);
                }
            }
        });
    }
};

//敏感词屏蔽
const msgSecCheck = function (msg, callback) {
    var params = {
        gameid: commonParams.gameId,
        partner: commonParams.partner,
        deviceno: commonParams.partner,
        time: Tools.getTimeStamp(),
        content: msg
    };
    if (msg) {
        wx.request({
            url: api + b[66318],
            data: Tools.buildCheckMsg(params),
            success(res) {
                console.log(b[66319], res);
                callback(res.data);
            }
        });
    } else {
        callback({
            err: 0,
            msg: b[66320]
        });
    }
};

const pushData = function (data) {
    if (data.type != '0') {
        data.accountId = commonParams.uid;
        data.appId = commonParams.gameId;
        data.appVersion = b[66187];
        data.platform = b[66188];
        data.channel = commonParams.partner;
        data.source = commonParams.query.source ? commonParams.query.source : '';
        data.source_type = commonParams.query.source_type ? commonParams.query.source_type : '';
        data.systemName = Tools.getDeviceType();
        data.deviceName = wx.getSystemInfoSync().model;
        data.resolution = wx.getSystemInfoSync().screenWidth + "*" + wx.getSystemInfoSync().screenHeight;
        data.deviceType = Tools.getDeviceTypeId();
        data.referer = commonParams.referer;
        data.idfa = "";
        data.ip = "";
        data.mac = '';
        data.imei = commonParams.uid;
        data.sex = '0';
        data.network = '';
        data.country = '86';
        data.operators = '';
    }

    if (data.type == '1') {
        //登录
        data.logType = b[66250];
        data.region = '0';
        data.channelAccid = commonParams.uid;
        delete data[b[66321]];
        delete data[b[66322]];
        //accountId serverId
    } else if (data.type == '2') {
        //创建角色或者账号
        if (!data.roleId) {
            console.log(b[66323]);
        }
        if (!data.roleName) {
            console.log(b[66324]);
        }

        data.logType = b[66325];
        data.region = '0';
        data.channelAccid = commonParams.uid;
        delete data[b[66321]];
        delete data[b[66322]];
        //accountId serverId  roleId roleName level vipLevel
    } else if (data.type == '4') {
        if (!data.roleId) {
            console.log(b[66323]);
        }
        if (!data.roleName) {
            console.log(b[66324]);
        }
        data.logType = b[66326]; //升级
        data.region = '0';
        data.levelType = '1';
        data.duration = '0';
        data.channelAccid = commonParams.uid;
        delete data[b[66327]];
        //accountId00  roleID00   roleName00 level00 vipLevel00   startLevel00 endLevel00
    } else if (data.type == '5') {
        data.logType = b[66328]; //在线
        delete data[b[66329]];
        delete data[b[66330]];
        delete data[b[66175]];
        delete data[b[66331]];
        delete data[b[66332]];
        delete data[b[66333]];
        delete data[b[66334]];
        //accountId serverId  roleID  roleName
    } else if (data.type == 6) {
        // 分享
        data.logType = b[66335];
        delete data[b[66329]];
        delete data[b[66330]];
        delete data[b[66175]];
        delete data[b[66331]];
        delete data[b[66332]];
        delete data[b[66333]];
        delete data[b[66334]];
        // data.channelAccid = commonParams.uid;
        data.shareType = '1';
    } else if (data.type == 9) {
        // 自定义事件
        data.logType = b[40450];
        delete data[b[66329]];
        delete data[b[66330]];
        delete data[b[66336]];
        delete data[b[66175]];
        delete data[b[66331]];
        delete data[b[66332]];
        delete data[b[66333]];
        delete data[b[66334]];
        delete data[b[66176]];
    } else if (data.type == 10) {
        data.logType = b[66337]; // 游戏关卡
        data.channelAccid = commonParams.uid;
    } else if (data.type == 11) {
        data.logType = b[66338]; // 广告
        data.channelAccid = commonParams.uid;
    }
    delete data[b[40098]];
    wx.request({
        url: logApi + b[66339],
        data: {
            data: JSON.stringify(data)
        },
        success: function (res) {
            console.log(data.logType, res.data);
        }
    });
};

function setLog(str, level) {
    if (state.debug == true) {
        if (level == state.level.error) {
            console.log(b[66340] + str, b[66341]);
        } else if (level == state.level.warn) {
            console.log(b[66342] + str, b[66343]);
        } else if (level == state.level.debug) {
            console.log(b[66344] + str, b[66343]);
        } else {
            console.log(b[66345] + str, b[66343]);
        }
    }
}

function md5(string) {
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7,
        S12 = 12,
        S13 = 17,
        S14 = 22;
    var S21 = 5,
        S22 = 9,
        S23 = 14,
        S24 = 20;
    var S31 = 4,
        S32 = 11,
        S33 = 16,
        S34 = 23;
    var S41 = 6,
        S42 = 10,
        S43 = 15,
        S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
}

function RotateLeft(lValue, iShiftBits) {
    return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
}

function AddUnsigned(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = lX & 0x80000000;
    lY8 = lY & 0x80000000;
    lX4 = lX & 0x40000000;
    lY4 = lY & 0x40000000;
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) {
        return lResult ^ 0x80000000 ^ lX8 ^ lY8;
    }
    if (lX4 | lY4) {
        if (lResult & 0x40000000) {
            return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
        } else {
            return lResult ^ 0x40000000 ^ lX8 ^ lY8;
        }
    } else {
        return lResult ^ lX8 ^ lY8;
    }
}

function F(x, y, z) {
    return x & y | ~x & z;
}

function G(x, y, z) {
    return x & z | y & ~z;
}

function H(x, y, z) {
    return x ^ y ^ z;
}

function I(x, y, z) {
    return y ^ (x | ~z);
}

function FF(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
}

function GG(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
}

function HH(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
}

function II(a, b, c, d, x, s, ac) {
    a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
    return AddUnsigned(RotateLeft(a, s), b);
}

function ConvertToWordArray(string) {
    var lWordCount;
    var lMessageLength = string.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    var lWordArray = Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while (lByteCount < lMessageLength) {
        lWordCount = (lByteCount - lByteCount % 4) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
        lByteCount++;
    }
    lWordCount = (lByteCount - lByteCount % 4) / 4;
    lBytePosition = lByteCount % 4 * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
    lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
}

function WordToHex(lValue) {
    var WordToHexValue = "",
        WordToHexValue_temp = "",
        lByte,
        lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
        lByte = lValue >>> lCount * 8 & 255;
        WordToHexValue_temp = "0" + lByte.toString(16);
        WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
    }
    return WordToHexValue;
}

function Utf8Encode(string) {
    var utftext = "";
    for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
            utftext += String.fromCharCode(c);
        } else if (c > 127 && c < 2048) {
            utftext += String.fromCharCode(c >> 6 | 192);
            utftext += String.fromCharCode(c & 63 | 128);
        } else {
            utftext += String.fromCharCode(c >> 12 | 224);
            utftext += String.fromCharCode(c >> 6 & 63 | 128);
            utftext += String.fromCharCode(c & 63 | 128);
        }
    }
    return utftext;
}

module.exports = {
    init: init,
    pay: pay,
    getCaptcha: getCaptcha,
    bindTelephone: bindTelephone,
    pushData: pushData,
    msgSecCheck: msgSecCheck,
    subscribeMessage: subscribeMessage,
    shareAppMessage: shareAppMessage,
    state: state,
    advertisement: advertisement,
    getLaunchOptionsSync: getLaunchOptionsSync,
    getWhatsNewSubscriptionsSetting: getWhatsNewSubscriptionsSetting,
    requestSubscribeWhatsNew: requestSubscribeWhatsNew,
    openData: openData,
    cutGame: cutGame,
    jumpState: jumpState,
    getRedPagState: getRedPagState,
    redLogin: redLogin,
    getWxUserInfo: getWxUserInfo,
    getRedPackageList: getRedPackageList,
    getRedConfig: getRedConfig,
    toReceiveRedPackage: toReceiveRedPackage,
    getRedDetailList: getRedDetailList,
    getShareList: getShareList,
    toRedShare: toRedShare,
    toWithdraw: toWithdraw,
    getOpenId: getOpenId,
    getLuckDrawIndex: getLuckDrawIndex,
    luckyDraw: luckyDraw,
    showAppModal: showAppModal,
    getSquareList: getSquareList,
    squareClick: squareClick,
    showSquareOn: showSquareOn,
    gameWithdraw: gameWithdraw,
    getChangeShellOn: getChangeShellOn
};