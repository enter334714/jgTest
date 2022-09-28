var v = wx.$d;
const state = {
  initStatus: v[0x14b],
  loginStatus: v[0x14b],
  videoAd: null, // 激励广告
  bannerAd: null, // banner广告
  gridAd: null, // 格子广告
  interstitialAd: null, // 插屏广告
  customAd: null // 原生模板广告
};
const commonParams = {
  loginInfo: {},
  appVersion: v[0x7e02],
  referer: v[0x7e03],
  partner: v[0x7e04],
  mac: "",
  imei: "",
  gameId: "",
  gameKey: "",
  uid: "",
  unionId: "",
  code: "",
  openid: "",
  wxid: "",
  ip: "",
  sign: "",
  payType: "",
  encryptedData: "",
  iv: "",
  scene: "",
  query: "",
  yy_pf: v[0x7e05],
  payTip: v[0x7e06],
  showH5On: {}, // 客服切包h5
  h5BindTelephoneOn: {},
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
  initTimer: "",
  sdkLoginTimer: "",

  // 直播
  feedId: "",
  finderUserName: "", // 视频号id
  QQGroup: {}, // qq客服

  customPayOn: {} // 支付客服配置
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
  httpGameWithdraw: false,
  httpToCouponReceiveFlag: false,
  httpLiveTaskFlag: false,
  httpToLiveTaskReceiveFlag: false,
  httpGetUserLiveInfoFlag: false
};

var sdkParams = null;

state.debug = true;
state.level = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3
};

// 预发布
// let api = "https://sdk-js.pre.rpgmoba.com";
// let idkApi = "https://idk.pre.rpgmoba.com";

// 线上
let api = v[0x7e07];
let wanBaApi = v[0x7e08];
let logApi = v[0x7e09];
let idkApi = v[0x7e0a];

const Tools = {
  getDeviceType: () => {
    const systemInfo = wx.getSystemInfoSync();
    let osType;
    if (systemInfo.system.toLowerCase().indexOf(v[0x7bf1]) > -1) {
      osType = v[0x7bf1];
    } else if (systemInfo.system.toLowerCase().indexOf(v[0x7bf0]) > -1) {
      osType = v[0x7bf0];
    } else if (systemInfo.system.toLowerCase().indexOf(v[0x1cfa]) > -1) {
      osType = v[0x1cfa];
    } else {
      osType = v[0x7e0b];
    }
    return osType;
  },
  getTimeStamp: () => {
    return Date.parse(new Date()) / 1000;
  },
  buildActiveParams: (params, gameKey) => {
    const keys = [v[0x7e0c], v[0x7e0d], v[0x7e0e], v[0x7bf4], v[0x7e0f], v[0x37d]];
    let signString = "";
    for (let k in params) {
      signString = signString + params[k];
    }
    signString = signString + gameKey;
    params[v[0x2c52]] = md5(signString);
    return params;
  },
  buildChangeShell: (params, gameKey) => {
    const keys = [v[0x7e0c], v[0x7e10], v[0x37d]];
    let signString = "";
    for (let k in params) {
      signString = signString + params[k];
    }
    signString = signString + gameKey;
    params[v[0x2c52]] = md5(signString);
    return params;
  },
  buildLoginParams: params => {
    const keys = [v[0x7e11], v[0x7e0c], v[0x7e0e], v[0x7e0d], v[0x37d]];
    let signString = "";
    for (let key in keys) {
      let k = keys[key];
      signString = signString + params[k];
    }
    signString = signString + commonParams.gameKey;
    params[v[0x2c52]] = md5(signString);
    return params;
  },
  buildBindParams: params => {
    const keys = [v[0x7e0c], v[0x7e12], v[0x7e13], v[0x37d]];
    let signString = "";
    for (let key in keys) {
      let k = keys[key];
      signString = signString + params[k];
    }
    signString = signString + commonParams.gameKey;
    params[v[0x2c52]] = md5(signString);
    return params;
  },
  buildPayParams: params => {
    const keys = [v[0x7e0c], v[0x7e11], v[0x7e0e], v[0x1cb6], v[0x4aaa], v[0x37d]];
    let signString = "";
    for (let key in keys) {
      let k = keys[key];
      signString = signString + params[k];
    }
    signString = signString + commonParams.gameKey + commonParams.wxid;
    params[v[0x2c52]] = md5(signString);
    return params;
  },
  buildRepublish: params => {
    const keys = [v[0x1cb6], v[0x7e0c], v[0x7e11], v[0x7e0e], v[0x37d]];
    let signString = "";
    for (let key in keys) {
      let k = keys[key];
      signString = signString + params[k];
    }
    signString = signString + commonParams.gameKey + commonParams.wxid;
    return md5(signString).toLowerCase();
  },
  buildCheckMsg(params) {
    const keys = [v[0x7e0c], v[0x7e0e], v[0x7e11], v[0x37d]];
    let signString = "";
    for (let key in keys) {
      let k = keys[key];
      signString = signString + params[k];
    }
    signString = signString + commonParams.gameKey;
    params[v[0x2c52]] = md5(signString).toLowerCase();
    return params;
  },

  getDeviceTypeId: () => {
    const osType = Tools.getDeviceType();
    let deviceType = v[0x7e0b];
    if (osType == v[0x7bf0]) {
      deviceType = 1;
    } else if (osType == v[0x7bf1]) {
      deviceType = 2;
    } else if (osType == v[0x1cfa]) {
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
    params[v[0x2c52]] = md5(signString);
    return params;
  },
  serialize: obj => {
    var ary = [];
    for (var p in obj) if (obj.hasOwnProperty(p) && obj[p]) {
      ary.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return ary.join("&");
  },
  idkBuildParams: params => {
    let keyList = Object.keys(params).sort();
    let stringParams = "";
    for (let key of keyList) {
      if (params[key] instanceof Array) {
        stringParams += key + "=" + encodeURIComponent(JSON.stringify(params[key])) + "&";
      } else {
        stringParams += key + "=" + encodeURIComponent(params[key]) + "&";
      }
    }
    stringParams += v[0x10a] + "=" + commonParams.gameKey;
    params[v[0x2c52]] = md5(stringParams);
    return params;
  },
  initLock: locks => {
    for (let lock in locks) {
      locks[lock] = false;
    }
  }
};

//初始化
const init = function (gameId, gameKey) {
  const SDKyyw = this;

  if (typeof SDKyyw.initLoginCallback != v[0x7b52]) {
    console.error(v[0x7e14]);
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
    console.log(v[0x7e15], accountInfo);
    console.log(v[0x7e16], accountInfo.miniProgram.envVersion);
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
      };
      // 绑定主游戏
      toBind(data);
    }
    console.log(v[0x7e17], launchOption);
    active(SDKyyw, sdkParams, gameId, gameKey);
  }
};

//初始化激活
const active = function (SDKyyw, params, gameId, gameKey) {
  wx.request({
    url: api + v[0x7e18],
    data: params,
    timeout: 3000,
    success: res => {
      let ret = res.data;
      console.log(v[0x239], ret);
      if (ret.data.code == 1) {
        // wx.showToast({
        //   title: "成功",
        //   icon: "succes",
        //   duration: 500,
        //   mask: true,
        // });
        commonParams.gameId = gameId;
        commonParams.gameKey = gameKey;
        state.initStatus = v[0x25c1];

        if (commonParams.gameId) {
          let data = {};
          data.logType = v[0x239];
          data.appId = commonParams.gameId;
          data.appVersion = commonParams.appVersion;
          data.platform = v[0x7e19];
          data.source = commonParams.query.source ? commonParams.query.source : "";
          data.source_type = commonParams.query.source_type ? commonParams.query.source_type : "";
          pushData(data);
        }

        //添加分享
        wx.showShareMenu({
          withShareTicket: true
        });
        let orderList = [];
        wx.setStorageSync(v[0x7e1a], orderList);
        wxLogin(SDKyyw);
      } else {
        state.initStatus = v[0x6815];
        console.log(v[0x7e1b], v[0x7e1c] + gameId, v[0x7e1d] + gameKey);
        if (commonParams.initTimer) {
          clearTimeout(commonParams.initTimer);
        }
        commonParams.initTimer = setTimeout(() => {
          active(SDKyyw, params, gameId, gameKey);
        }, 2000);
      }
    },
    fail: err => {
      console.log(v[0x7e1e]);
      if (commonParams.initTimer) {
        clearTimeout(commonParams.initTimer);
      }
      wx.request({
        url: v[0x7e1f] + v[0x7e20],
        timeout: 5000,
        success: res => {
          res = res.data;
          if (res.status === 1) {
            console.log(v[0x7e21], res.data.host);
            api = `https://sdk-js.${res.data.host}`;
            wanBaApi = `https://wanba.${res.data.host}`;
            logApi = `https://sdk-data.${res.data.host}`;
            idkApi = `https://idk.${res.data.host}`;
          }
          commonParams.initTimer = setTimeout(() => {
            active(SDKyyw, params, gameId, gameKey);
          });
        },
        fail: () => {
          commonParams.initTimer = setTimeout(() => {
            active(SDKyyw, params, gameId, gameKey);
          }, 2000);
        }
      });
    }
  });
};

//微信登录
const wxLogin = function (SDKyyw) {
  wx.login({
    success: res => {
      if (res.code == null || res.code == undefined || res.code == "") {
        console.log(v[0x7e22]);
        wxLogin(SDKyyw);
      } else {
        let jscode = res.code;
        // commonParams.code = res.code
        //获取用户信息
        wx.getSetting({
          success(com) {
            if (com.authSetting && com.authSetting[v[0x7e23]]) {
              wx.getUserInfo({
                success(res) {
                  console.log(v[0x13c], res);
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
          osType: Tools.getDeviceType() == v[0x7bf0] ? "2" : Tools.getDeviceType() == v[0x7bf1] ? "1" : Tools.getDeviceType() == v[0x1cfa] ? "3" : v[0x7e0b],
          os: Tools.getDeviceType(),
          encryptedData: commonParams.encryptedData,
          scene: commonParams.scene,
          query: JSON.stringify(commonParams.query),
          envVersion: commonParams.envVersion,
          referrerInfo: commonParams.referrerInfo
        };
        console.log(v[0x7e24], params);
        sdkLogin(SDKyyw, params);
      }
    },
    fail: err => {
      wxLogin(SDKyyw);
      console.log(v[0x7e25], err);
    }
  });
};

//SDK登录
const sdkLogin = function (SDKyyw, params) {
  wx.request({
    url: api + v[0x7e26],
    data: Tools.buildLoginParams(params),
    timeout: 3000,
    success: res => {
      let ret = res.data;
      if (ret.status == 1) {
        // 登录信息
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
        commonParams.QQGroup = ret.data.QQGroup;
        commonParams.JumpGameState = ret.data.JumpGameState;
        commonParams.showH5On = ret.data.showH5On || {};
        commonParams.h5BindTelephoneOn = ret.data.h5BindTelephoneOn || {};
        commonParams.customPayOn = ret.data.customPayOn || {};
        commonParams.loginInfo = ret.data || {};

        // 打开客服跳转h5
        commonParams.showH5On.on === 1 ? quantityToH5() : "";

        console.log(v[0x7e27], commonParams.referrerInfo);

        // 直播
        commonParams.finderUserName = ret.data.live && ret.data.live.finderUserName; // 视频号ID

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
        // 监听微信分享事件
        onShareAppMessage(ret.data.shareAppMessage || {});

        state.loginStatus = v[0x25c1];
        if (commonParams.uid) {
          let data = {};
          data.type = "1";
          pushData(data);
        }
        replenish();
        if (ret.data.isNewUser == 1) {
          let data = {};
          data.logType = v[0x7e28];
          data.appId = commonParams.gameId;
          data.appVersion = commonParams.appVersion;
          data.accountId = commonParams.uid;
          data.deviceType = Tools.getDeviceTypeId();
          data.platform = v[0x7e19];
          data.serverId = "";
          data.channel = commonParams.partner;
          data.imei = commonParams.uid;
          data.sex = "0";
          data.resolution = wx.getSystemInfoSync().screenWidth + "*" + wx.getSystemInfoSync().screenHeight;
          data.deviceName = wx.getSystemInfoSync().model;
          data.systemName = wx.getSystemInfoSync().system;
          data.source = commonParams.query.source ? commonParams.query.source : "";
          data.source_type = commonParams.query.source_type ? commonParams.query.source_type : "";
          pushData(data);
        }
        console.log(v[0x1cb6], ret.data.uid);
        console.log(v[0x7e29], ret);
        // SDK登录回调
        SDKyyw.initLoginCallback(ret);
      } else {
        console.log(v[0x7e2a], res);
        if (commonParams.sdkLoginTimer) {
          clearTimeout(commonParams.sdkLoginTimer);
        }
        commonParams.sdkLoginTimer = setTimeout(() => {
          wxLogin(SDKyyw);
        }, 2000);
      }
    },
    fail: err => {
      console.log(v[0x7e2b], err);
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
  if (typeof SDKyyw.cutGameCallback != v[0x7b52]) {
    console.log(v[0x7e2c]);
  } else {
    wx.navigateToMiniProgram({
      appId: commonParams.switchApp,
      extraData: {
        from_app_id: commonParams.gameId || "",
        from_openid: commonParams.uid || ""
      },
      envVersion: commonParams.switchEnv || v[0x7e2d], // develop trial release
      success(res) {
        console.log(v[0x7e2e], res);
        SDKyyw.cutGameCallback({
          status: 1,
          msg: v[0x25c1],
          data: res
        });
      },
      fail(err) {
        console.log(v[0x7e2f], err);
        SDKyyw.cutGameCallback({
          status: 0,
          msg: v[0x6815],
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
        url: api + v[0x7e30],
        data: params,
        timeout: 3000,
        success: res => {
          console.log(v[0x7e31], res.data);
        }
      });
    }
  });
};

// 是否为跳转过来的 true 表示为跳转过来的
const isJumpGame = function () {
  return commonParams.JumpGameState;
};

// 获取手机验证码
const getCaptcha = function (data, sucCallback, errorCallback) {
  const SDKyyw = this;
  if (typeof sucCallback == v[0x7b52]) {
    let params = Tools.buildParams({
      yy_pf: commonParams.yy_pf,
      app_id: commonParams.gameId,
      telephone: data,
      open_id: commonParams.uid,
      use: v[0x4a],
      time: Tools.getTimeStamp()
    });
    wx.request({
      url: wanBaApi + v[0x7e32],
      data: params,
      timeout: 3000,
      success: res => {
        if (res.data.code === 18000) {
          console.log(v[0x7e33], res);
          sucCallback(res);
        } else {
          console.log(v[0x7e34], res);
          errorCallback(res);
        }
      },
      error: err => {
        console.log(v[0x7e35], err);
      }
    });
  } else {
    if (typeof SDKyyw.getCaptchaCallback != v[0x7b52]) {
      console.log(v[0x7e36]);
    } else {
      let params = Tools.buildParams({
        yy_pf: commonParams.yy_pf,
        app_id: commonParams.gameId,
        telephone: data.telephone,
        open_id: commonParams.uid,
        use: v[0x4a],
        time: Tools.getTimeStamp()
      });
      wx.request({
        url: wanBaApi + v[0x7e32],
        data: params,
        timeout: 3000,
        success: res => {
          if (res.data.code === 18000) {
            console.log(v[0x7e33], res);
            SDKyyw.getCaptchaCallback({
              status: 1,
              msg: v[0x25c1],
              data: res
            });
          } else {
            console.log(v[0x7e34], res);
            SDKyyw.getCaptchaCallback({
              status: 0,
              msg: v[0x6815],
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

  if (typeof sucCallback == v[0x7b52]) {
    let params = Tools.buildParams({
      yy_pf: commonParams.yy_pf,
      app_id: commonParams.gameId,
      telephone: data,
      open_id: commonParams.uid,
      captcha: smsCode,
      time: Tools.getTimeStamp()
    });
    wx.request({
      url: wanBaApi + v[0x7e37],
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
    if (typeof SDKyyw.bindTelephoneCallback != v[0x7b52]) {
      console.log(v[0x7e38]);
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
        url: wanBaApi + v[0x7e37],
        data: params,
        timeout: 3000,
        success: res => {
          if (res.data.code === 18000) {
            SDKyyw.bindTelephoneCallback({
              status: 1,
              msg: v[0x25c1],
              data: res
            });
          } else {
            SDKyyw.bindTelephoneCallback({
              status: 0,
              msg: v[0x6815],
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
  let orderList = wx.getStorageSync(v[0x7e1a]);
  if (orderList.length !== 0) {
    for (let i in orderList) {
      wx.login({
        success(res) {
          orderList[i].code = res.code;
          wx.request({
            url: api + v[0x7e39],
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
  let orderList = wx.getStorageSync(v[0x7e1a]);
  if (orderList.length !== 0) {
    for (var i in orderList) {
      if (orderList[i].gameOrderid.includes(item)) {
        orderList.splice(i, 1);
      }
    }
  }
  wx.setStorageSync(v[0x7e1a], orderList);
};

// 消息订阅
const subscribeMessage = function (tmplIds) {
  const SDKyyw = this;
  if (typeof SDKyyw.subscribeMsgCallback != v[0x7b52]) {
    console.log(v[0x7e3a]);
  } else {
    wx.requestSubscribeMessage({
      tmplIds: tmplIds,
      success: function (res) {
        SDKyyw.subscribeMsgCallback({
          status: "1",
          msg: v[0x25c1],
          data: res
        });
      },
      fail: function (fail) {
        SDKyyw.subscribeMsgCallback({
          status: "0",
          msg: v[0x6815],
          data: fail
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

// 监听分享事件
const onShareAppMessage = function (data) {
  wx.onShareAppMessage(() => {
    return {
      promise: new Promise((resolve, reject) => {
        wx.showLoading({
          title: v[0x7e3b],
          icon: v[0x2f12]
        });
        wx.request({
          url: idkApi + v[0x7e3c],
          data: Tools.idkBuildParams({
            app_id: commonParams.gameId,
            uid: commonParams.uid,
            union_id: commonParams.unionId
          }),
          success: function (res) {
            wx.hideLoading();
            if (res.data.status === 200) {
              resolve(res.data.data);
            } else {
              resolve({});
            }
          }
        });
      })
    };
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

  if (data.type == v[0x7e3d]) {
    if (typeof SDKyyw.createBannerAdCallback != v[0x7b52]) {
      console.log(v[0x7e3e]);
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
        console.log(v[0x7e3f], res);
      });
      // show显示banner
      state.bannerAd.showBanner = function () {
        state.bannerAd.show().then(() => {
          console.log(v[0x7e40]);
          // banner显示成功上报
          pushData(adData);
          SDKyyw.createBannerAdCallback({
            status: "1",
            msg: v[0x25c1],
            data: {}
          });
        }).catch(err => {
          state.bannerAd.load();
          SDKyyw.createBannerAdCallback({
            status: "0",
            msg: v[0x6815],
            data: err
          });
        });
      };

      // banner广告加载失误
      state.bannerAd.onError(err => {
        console.log(v[0x7e41], err);
        SDKyyw.createBannerAdCallback({
          status: "0",
          msg: v[0x6815],
          data: err
        });
      });
    }
  } else if (data.type == v[0x7e42]) {
    if (typeof SDKyyw.rewardedVideoAdCallback != v[0x7b52]) {
      console.log(v[0x7e43]);
    } else {
      adData.adType = 2;
      // 创建激励视频广告实例，提前初始化
      state.videoAd = wx.createRewardedVideoAd({
        adUnitId: data.adUnitId
      });
      state.videoAd.onLoad().then(() => {
        console.log(v[0x67fb]);
      });
      // 用户触发广告后，显示激励视频广告
      // videoAd广告显示
      state.videoAd.videoAdShow = function () {
        state.videoAd.show().then(() => {
          console.log(v[0x7e44]);
        }).catch(err => {
          state.videoAd.load();
          SDKyyw.rewardedVideoAdCallback({
            status: "-1",
            msg: v[0x6815],
            data: err
          });
        });
      };
      // videoAd广告关闭
      state.videoAd.onClose(res => {
        // 用户点击了【关闭广告】按钮
        // 小于 2.1.0 的基础库版本，res 是一个 undefined
        if (res && res.isEnded || res === undefined) {
          // 正常播放结束，可以下发游戏奖励
          console.log(v[0x7e45]);

          // 正常播放完才上报
          pushData(adData);
          SDKyyw.rewardedVideoAdCallback({
            status: "1",
            msg: v[0x25c1],
            data: res
          });
        } else {
          // 播放中途退出，不下发游戏奖励
          console.log(v[0x7e46]);
          SDKyyw.rewardedVideoAdCallback({
            status: "0",
            msg: v[0x6815],
            data: res
          });
        }
      });
      // videoAd广告加载失误
      state.videoAd.onError(err => {
        console.log(v[0x7e47], err);
        SDKyyw.rewardedVideoAdCallback({
          status: "0",
          msg: v[0x6815],
          data: err
        });
      });
    }
  } else if (data.type == v[0x7e48]) {
    if (typeof SDKyyw.createInterstitialAdCallback != v[0x7b52]) {
      console.log(v[0x7e49]);
    } else {
      adData.adType = 3;
      // 创建插屏广告实例，提前初始化
      if (wx.createInterstitialAd) {
        state.interstitialAd = wx.createInterstitialAd({
          adUnitId: data.adUnitId
        });
        state.interstitialAd.onLoad(() => {
          console.log(v[0x7e4a]);
        });
        state.interstitialAd.interstitialAdShow = function () {
          state.interstitialAd.show().then(res => {
            console.log(v[0x7e4b], res);
            pushData(adData);
            SDKyyw.createInterstitialAdCallback({
              status: "1",
              msg: v[0x25c1],
              data: {}
            });
          }).catch(err => {
            // -1 代表显示失败
            SDKyyw.createInterstitialAdCallback({
              status: "-1",
              msg: v[0x6815],
              data: err
            });
            state.videoAd.load();
          });
        };
        state.interstitialAd.onError(err => {
          console.log(v[0x7e4c], err);
          SDKyyw.createInterstitialAdCallback({
            status: "0",
            msg: v[0x6815],
            data: err
          });
        });
      }
    }
  } else if (data.type == v[0x7e4d]) {
    if (typeof SDKyyw.createGridAdCallback != v[0x7b52]) {
      console.log(v[0x7e4e]);
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
        console.log(v[0x7e4f]);
      });
      // 显示state.gridAd
      state.gridAd.gridAdShow = function () {
        SDKyyw.state.gridAd.show().then(() => {
          console.log(v[0x7e50]);
          pushData(adData);
          SDKyyw.createGridAdCallback({
            status: "1",
            msg: v[0x25c1],
            data: {}
          });
        }).catch(err => {
          console.log(v[0x7e51], err);
          state.gridAd.load().then(() => state.gridAd.gridAdShow()).catch(err => {
            console.log(v[0x7e51], err);
          });
        });
      };

      state.gridAd.onError(err => {
        SDKyyw.createGridAdCallback({
          status: "0",
          msg: v[0x6815],
          data: err
        });
        console.log(v[0x7e52], err);
      });
    }
  } else if (data.type == v[0x7e53]) {
    if (typeof SDKyyw.createCustomAdCallback != v[0x7b52]) {
      console.log(v[0x7e54]);
    } else {
      // 原生模板广告
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
      // 创建格子广告实例，提前初始化
      state.customAd.onLoad(() => {
        console.log(v[0x7e4f]);
      });
      state.customAd.customAdShow = function () {
        state.customAd.show().then(res => {
          console.log(v[0x7e55], res);
          pushData(adData);
          SDKyyw.createCustomAdCallback({
            status: "1",
            msg: v[0x25c1],
            data: res
          });
        }).catch(err => {
          console.log(v[0x7e51], err);
          state.customAd.load().then(() => state.customAd.customAdShow()).catch(err => {
            console.log(v[0x7e56], err);
          });
        });
      };
      state.customAd.onError(err => {
        SDKyyw.createCustomAdCallback({
          status: "0",
          msg: v[0x6815],
          data: err
        });
        console.log(v[0x7e52], err);
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
  if (typeof SDKyyw.openDataCallback != v[0x7b52]) {
    console.error(v[0x7e57]);
  } else {
    if (data.type == v[0x7e58]) {
      //好友感兴趣
      wx.getPotentialFriendList({
        keyList: data.keyList,
        success: res => {
          SDKyyw.openDataCallback({
            status: "1",
            msg: v[0x25c1],
            data: res
          });
        },
        fail: err => {
          SDKyyw.openDataCallback({
            status: "0",
            msg: v[0x6815],
            data: err
          });
        }
      });
    } else if (data.type == v[0x7e59]) {
      //群同玩成员
      wx.getGroupCloudStorage({
        shareTicket: data.shareTicket,
        keyList: data.keyList,
        success: res => {
          SDKyyw.openDataCallback({
            status: "1",
            msg: v[0x25c1],
            data: res
          });
        },
        fail: err => {
          SDKyyw.openDataCallback({
            status: "0",
            msg: v[0x6815],
            data: err
          });
        }
      });
    } else if (data.type == v[0x7e5a]) {
      //当前用户同玩好友
      wx.getFriendCloudStorage({
        keyList: data.keyList,
        success: res => {
          SDKyyw.openDataCallback({
            status: "1",
            msg: v[0x25c1],
            data: res
          });
        },
        fail: err => {
          SDKyyw.openDataCallback({
            status: "0",
            msg: v[0x6815],
            data: err
          });
        }
      });
    }
  }
};

//米大师支付成功后通知后端结果
const sendResult = function (params) {
  console.log(v[0x7e5b], params);
  wx.login({
    success(res) {
      params.code = res.code;
      params.paytype = 3;
      wx.request({
        url: api + v[0x7e5c],
        data: Tools.buildPayParams(params),
        success(res) {
          console.log(v[0x7e5d], res);
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
  let deviceType = v[0x7e0b];
  if (osType == v[0x7bf0]) {
    deviceType = 2;
  } else if (osType == v[0x7bf1]) {
    deviceType = 1;
  } else if (osType == v[0x1cfa]) {
    deviceType = 3;
  }

  if (typeof this.onPayCallback != v[0x7b52]) {
    console.error(v[0x7e5e]);
  } else {
    console.log(v[0x7e5f], commonParams);
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
      mode: "",
      wxid: commonParams.wxid,
      osType: deviceType,
      os: osType,
      paytype: commonParams.payType,
      bundleName: commonParams.wxappid,
      gamever: "",
      time: Tools.getTimeStamp()
    };
    wx.showLoading({
      title: v[0x7e60],
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
        console.log(v[0x7c60], res.code);
        wx.request({
          url: api + v[0x7e5c],
          data: Tools.buildPayParams(params),
          success: payRes => {
            let orderList = wx.getStorageSync(v[0x7e1a]);
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
              mode: v[0x7e61]
            };
            orderList.push(item);

            console.log(v[0x7e62], payRes.data);
            wx.hideLoading();
            let ret = payRes.data;
            commonParams.payType = ret.paytype;
            if (payRes.data.status == 1) {
              SDKyyw.onPayCallback({
                status: "1",
                msg: v[0x7e63]
              });
              wx.hideLoading();
              switch (commonParams.payType) {
                case 0:
                  wx.showModal({
                    title: v[0x291],
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
                        title: v[0x291],
                        content: v[0x7e64],
                        showCancel: false,
                        confirmText: v[0x7e65],
                        confirmColor: v[0x7e66]
                      });
                    }
                  });
                  break;
                case 2:
                  //客服支付
                  // if (ret.start == "0") {
                  let path = v[0x7e67];
                  wx.showModal({
                    title: commonParams.customPayOn && commonParams.customPayOn.title || v[0x291],
                    content: commonParams.customPayOn && commonParams.customPayOn.content || v[0x7e68],
                    showCancel: false,
                    confirmText: v[0x293],
                    success() {
                      wx.openCustomerServiceConversation({
                        showMessageCard: true,
                        sendMessageTitle: commonParams.customPayOn && commonParams.customPayOn.sendMessageTitle || params.gameOrderid,
                        sendMessagePath: commonParams.customPayOn && commonParams.customPayOn.sendMessagePath || JSON.stringify(params),
                        sendMessageImg: commonParams.customPayOn && commonParams.customPayOn.sendMessageImg || path,
                        sessionFrom: commonParams.customPayOn && commonParams.customPayOn.sessionFrom || JSON.stringify(params),
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
                      zoneId: "1",
                      mode: v[0x7e61],
                      env: ret.data.env,
                      offerId: ret.data.offerId,
                      currencyType: v[0x7e69],
                      platform: v[0x7bf1],
                      buyQuantity: ret.data.amt,
                      success(res) {
                        wx.setStorageSync(v[0x7e1a], orderList);
                        sendResult(params);
                      },
                      complete(com) {
                        console.log(v[0x7e6a], com);
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
                    path: v[0x7e6b],
                    envVersion: v[0x7e2d],
                    extraData: Minidata,
                    success: function (res) {
                      console.log(v[0x7e6c], res);
                    },
                    fail: function (err) {
                      console.log(v[0x7e6d], err);
                      wx.request({
                        url: api + v[0x7e6e] + commonParams.gameId + v[0x7e6f] + err.errMsg,
                        success(res) {
                          console.log(v[0x7e70], res);
                        }
                      });
                    },
                    complete: function (com) {
                      console.log(v[0x7e71], com);
                    }
                  });
                  break;
                case 9:
                  // 扫码支付
                  wx.request({
                    url: idkApi + v[0x7e72],
                    data: Tools.idkBuildParams({
                      app_id: commonParams.gameId,
                      sdk_order: ret.gameOrderid,
                      mode: v[0x7e73]
                    }),
                    success(res) {
                      console.log(v[0x7e74], res);
                      res.data && (res.data.type = v[0x7e73]);
                      SDKyyw.onPayCallback(res.data);
                    },
                    complete() {}
                  });
              }
            } else {
              SDKyyw.onPayCallback({
                status: "0",
                msg: v[0x7e75]
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
  if (typeof SDKyyw.getWhatsNewSubscriptionsSettingCallback != v[0x7b52]) {
    console.log(v[0x7e76]);
  } else {
    wx.getWhatsNewSubscriptionsSetting({
      msgType: data.msgType, // 消息类型，1=游戏更新提醒，目前只有这种类型
      success(res) {
        // res.status说明 0未知状态 1未订阅，可以发起订阅 2用户已订阅该类型消息 3超过频率限制，暂时不允许发起订阅 4没有权限或已封禁
        SDKyyw.getWhatsNewSubscriptionsSettingCallback({
          code: "1",
          msg: v[0x25c1],
          data: res
        });
      },
      fail(err) {
        SDKyyw.getWhatsNewSubscriptionsSettingCallback({
          code: "0",
          msg: v[0x6815],
          data: err
        });
      }
    });
  }
};

// 请求订阅游戏更新提醒
const requestSubscribeWhatsNew = function (data) {
  const SDKyyw = this;
  if (typeof SDKyyw.requestSubscribeWhatsNewCallback != v[0x7b52]) {
    console.log(v[0x7e77]);
  } else {
    wx.requestSubscribeWhatsNew({
      msgType: data.msgType, // 消息类型，1=游戏更新提醒，目前只有这种类型
      success(res) {
        SDKyyw.requestSubscribeWhatsNewCallback({
          code: "1",
          msg: v[0x25c1],
          data: res
        });
      },
      fail(err) {
        // errCode说明 1系统错误 2用户已订阅该类型消息 3超过频率限制，暂时不允许发起订阅 4没有权限或已封禁
        SDKyyw.requestSubscribeWhatsNewCallback({
          code: "0",
          msg: v[0x6815],
          data: err
        });
      }
    });
  }
};

// 获取红包开关 + 区服活动配置判断 + 抽奖活动状态
const getRedPagState = function (data) {
  const SDKyyw = this;
  if (typeof SDKyyw.getRedPagStateCallback != v[0x7b52]) {
    console.log(v[0x7e78]);
  } else {
    if (commonParams.showRedPagOn) {
      wx.request({
        url: idkApi + v[0x7e79],
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
              status: "1",
              msg: ret.msg,
              data: ret.data
            });
          } else {
            SDKyyw.getRedPagStateCallback({
              status: "0",
              msg: ret.msg,
              data: ret.data
            });
          }
        },
        fail(err) {
          SDKyyw.getRedPagStateCallback({
            status: "-1",
            msg: err.errMsg,
            data: err
          });
          console.log(v[0x7e7a], err);
        },
        timeout: 4000
      });
    } else {
      SDKyyw.getRedPagStateCallback({
        status: "0",
        msg: `showRedPagOn为${commonParams.showRedPagOn}`,
        data: commonParams.showRedPagOn
      });
    }
  }
};

// 红包角色登录
const redLogin = function (data) {
  const SDKyyw = this;
  if (typeof SDKyyw.redLoginCallback != v[0x7b52]) {
    console.log(v[0x7e7b]);
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
              url: idkApi + v[0x7e7c],
              method: v[0x104c],
              data: Tools.idkBuildParams(params),
              header: {
                "Content-Type": v[0x7ce5]
              },
              success(res) {
                let ret = res.data;
                if (ret.status == 200) {
                  commonParams.token = ret.data.token;
                  SDKyyw.redLoginCallback({
                    status: "1",
                    msg: ret.msg,
                    data: ret.data
                  });
                } else {
                  SDKyyw.redLoginCallback({
                    status: "0",
                    msg: ret.msg,
                    data: ret.data
                  });
                }
              },
              fail(err) {
                SDKyyw.redLoginCallback({
                  status: "-1",
                  msg: err.errMsg,
                  data: err
                });
                console.log(v[0x4289], err);
              },
              complete(res) {
                httpLock.httpRedLoginFlag = false;
              },
              timeout: 4000
            });
          }
        } else {
          console.log(v[0x7e7d] + res.errMsg);
        }
      }
    });
  }
};

// 获取用户信息
const getWxUserInfo = function () {
  const SDKyyw = this;
  if (typeof SDKyyw.getWxUserInfoCallback != v[0x7b52]) {
    console.log(v[0x7e7e]);
  } else {
    const params = {
      app_id: commonParams.gameId,
      token: commonParams.token
    };
    wx.request({
      url: idkApi + v[0x7e7f],
      data: Tools.idkBuildParams(params),
      success(res) {
        let ret = res.data;
        if (ret.status == 200) {
          SDKyyw.getWxUserInfoCallback({
            status: "1",
            msg: ret.msg,
            data: ret.data
          });
        } else {
          SDKyyw.getWxUserInfoCallback({
            status: "0",
            msg: ret.msg,
            data: ret.data
          });
        }
      },
      fail(err) {
        console.log(v[0x4289], err);
      },
      timeout: 4000
    });
  }
};

// 红包列表
const getRedPackageList = function () {
  const SDKyyw = this;
  if (typeof SDKyyw.getRedPackageListCallback != v[0x7b52]) {
    console.log(v[0x7e80]);
  } else {
    const params = {
      app_id: commonParams.gameId,
      token: commonParams.token
    };
    if (!httpLock.httpRedListFlag) {
      httpLock.httpRedListFlag = true;
      wx.request({
        url: idkApi + v[0x7e81],
        data: Tools.idkBuildParams(params),
        success(res) {
          let ret = res.data;
          if (ret.status == 200) {
            commonParams.share_activity_id = ret.data.share_activity_id;
            SDKyyw.getRedPackageListCallback({
              status: "1",
              msg: ret.msg,
              data: ret.data
            });
          } else {
            SDKyyw.getRedPackageListCallback({
              status: "0",
              msg: ret.msg,
              data: ret.data
            });
          }
        },
        fail(err) {
          SDKyyw.getRedPackageListCallback({
            status: "-1",
            msg: err.errMsg,
            data: err
          });
          console.log(v[0x4289], err);
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
  if (typeof SDKyyw.getRedConfigCallback != v[0x7b52]) {
    console.log(v[0x7e82]);
  } else {
    const params = {
      app_id: commonParams.gameId,
      token: commonParams.token
    };
    wx.request({
      url: idkApi + v[0x7e83],
      data: Tools.idkBuildParams(params),
      success(res) {
        let ret = res.data;
        if (ret.status == 200) {
          SDKyyw.getRedConfigCallback({
            status: "1",
            msg: ret.msg,
            data: ret.data
          });
        } else {
          SDKyyw.getRedConfigCallback({
            status: "0",
            msg: ret.msg,
            data: ret.data
          });
        }
      },
      fail(err) {
        console.log(v[0x4289], err);
      },
      timeout: 4000
    });
  }
};

// 领取红包
const toReceiveRedPackage = function (data) {
  const SDKyyw = this;
  if (typeof SDKyyw.toReceiveRedPackageCallback != v[0x7b52]) {
    console.log(v[0x7e84]);
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
        url: idkApi + v[0x7e85],
        method: v[0x104c],
        data: Tools.idkBuildParams(params),
        header: {
          "Content-Type": v[0x7ce5]
        },
        success(res) {
          let ret = res.data;
          if (ret.status == 200) {
            SDKyyw.toReceiveRedPackageCallback({
              status: "1",
              msg: ret.msg,
              data: ret.data
            });
          } else {
            SDKyyw.toReceiveRedPackageCallback({
              status: "0",
              msg: ret.msg,
              data: ret.data
            });
          }
        },
        fail(err) {
          console.log(v[0x7e86], err);
          SDKyyw.toReceiveRedPackageCallback({
            status: "-1",
            msg: err.errMsg,
            data: err
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
  if (typeof SDKyyw.getRedDetailListCallback != v[0x7b52]) {
    console.log(v[0x7e87]);
  } else {
    const params = {
      app_id: commonParams.gameId,
      token: commonParams.token
    };
    wx.request({
      url: idkApi + v[0x7e88],
      data: Tools.idkBuildParams(params),
      success(res) {
        let ret = res.data;
        if (ret.status == 200) {
          SDKyyw.getRedDetailListCallback({
            status: "1",
            msg: ret.msg,
            data: ret.data
          });
        } else {
          SDKyyw.getRedDetailListCallback({
            status: "0",
            msg: ret.msg,
            data: ret.data
          });
        }
      },
      fail(err) {
        console.log(v[0x7e86], err);
      },
      timeout: 4000
    });
  }
};

// 去提现
const toWithdraw = function (data) {
  const SDKyyw = this;
  if (typeof SDKyyw.toWithdrawCallback != v[0x7b52]) {
    console.log(v[0x7e89]);
  } else {
    const params = {
      withdraw_amount: data.withdraw_amount,
      app_id: commonParams.gameId,
      token: commonParams.token
    };
    if (!httpLock.httpToWithdraw) {
      httpLock.httpToWithdraw = true;
      wx.request({
        url: idkApi + v[0x7e8a],
        data: Tools.idkBuildParams(params),
        method: v[0x104c],
        header: {
          "Content-Type": v[0x7ce5]
        },
        success(res) {
          let ret = res.data;
          if (ret.status == 200) {
            SDKyyw.toWithdrawCallback({
              status: "1",
              msg: ret.msg,
              data: ret.data
            });
          } else {
            SDKyyw.toWithdrawCallback({
              status: "0",
              msg: ret.msg,
              data: ret.data
            });
          }
        },
        fail(err) {
          SDKyyw.toWithdrawCallback({
            status: "-1",
            msg: err.errMsg,
            data: err
          });
          console.log(v[0x7e86], err);
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
    url: idkApi + v[0x7e8b],
    data: Tools.idkBuildParams(params),
    success(res) {
      let ret = res.data;
      console.log(v[0x7e8c], ret);
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
      console.log(v[0x7e86], err);
    },
    timeout: 4000
  });
};

// 红包分享成功邀请用户列表
const getShareList = function (data) {
  const SDKyyw = this;
  if (typeof SDKyyw.getShareListCallback != v[0x7b52]) {
    console.log(v[0x7e8d]);
  } else {
    const params = {
      activity_id: data.share_activity_id,
      app_id: commonParams.gameId,
      token: commonParams.token
    };
    wx.request({
      url: idkApi + v[0x7e8e],
      data: Tools.idkBuildParams(params),
      success(res) {
        let ret = res.data;
        if (ret.status == 200) {
          SDKyyw.getShareListCallback({
            status: "1",
            msg: ret.msg,
            data: ret.data
          });
        } else {
          SDKyyw.getShareListCallback({
            status: "0",
            msg: ret.msg,
            data: ret.data
          });
        }
      },
      fail(err) {
        console.log(v[0x7e86], err);
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
          url: idkApi + v[0x7e8f],
          data: Tools.idkBuildParams(params),
          success(res) {
            let ret = res.data;
            console.log(v[0x7e90], ret.data, ret.msg);
          },
          fail(err) {
            console.log(v[0x7e91], err);
          },
          timeout: 4000
        });
      } else {
        console.log(v[0x7e22], res);
      }
    }
  });
};

// 红包抽奖首页
const getLuckDrawIndex = function () {
  const SDKyyw = this;
  if (typeof SDKyyw.getLuckDrawIndexCallback != v[0x7b52]) {
    console.log(v[0x7e92]);
  } else {
    const params = {
      app_id: commonParams.gameId,
      token: commonParams.token,
      activity_id: commonParams.luck_draw_activity_id
    };
    if (!httpLock.httpLuckDrawIndex) {
      httpLock.httpLuckDrawIndex = true;
      wx.request({
        url: idkApi + v[0x7e93],
        data: Tools.idkBuildParams(params),
        success(res) {
          let ret = res.data;
          if (ret.status == 200) {
            SDKyyw.getLuckDrawIndexCallback({
              status: "1",
              msg: ret.msg,
              data: ret.data
            });
          } else {
            SDKyyw.getLuckDrawIndexCallback({
              status: "0",
              msg: ret.msg,
              data: ret.data
            });
          }
        },
        fail(err) {
          SDKyyw.getLuckDrawIndexCallback({
            status: "-1",
            msg: err.errMsg,
            data: err
          });
          console.log(v[0x7e86], err);
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
  if (typeof SDKyyw.luckyDrawCallback != v[0x7b52]) {
    console.log(v[0x7e94]);
  } else {
    const params = {
      app_id: commonParams.gameId,
      token: commonParams.token,
      activity_id: commonParams.luck_draw_activity_id
    };
    if (!httpLock.httpLuckDrawFlag) {
      httpLock.httpLuckDrawFlag = true;
      wx.request({
        url: idkApi + v[0x7e95],
        data: Tools.idkBuildParams(params),
        success(res) {
          let ret = res.data;
          if (ret.status == 200) {
            SDKyyw.luckyDrawCallback({
              status: "1",
              msg: ret.msg,
              data: ret.data
            });
          } else {
            SDKyyw.luckyDrawCallback({
              status: "0",
              msg: ret.msg,
              data: ret.data
            });
          }
        },
        fail(err) {
          console.log(v[0x7e86], err);
          SDKyyw.luckyDrawCallback({
            status: "-1",
            msg: err.errMsg,
            data: err
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
  if (typeof SDKyyw.getSquareListCallback != v[0x7b52]) {
    console.log(v[0x7e96]);
  } else {
    if (!httpLock.httpSquareListFlag) {
      httpLock.httpSquareListFlag = true;
      const params = {
        app_id: commonParams.gameId,
        uid: commonParams.uid,
        union_id: commonParams.unionId
      };
      data && data.type ? params.type = data.type : "";
      wx.request({
        url: idkApi + v[0x7e97],
        data: Tools.idkBuildParams(params),
        success(res) {
          let ret = res.data;
          console.log(v[0x7e98], ret);
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
      url: idkApi + v[0x7e99],
      data: Tools.idkBuildParams(params),
      success(res) {
        console.log(v[0x7e9a], res);
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
      let params = Tools.idkBuildParams({
        app_id: commonParams.gameId,
        code: ret.code,
        square_id: data.square_id,
        source_app_id: data.source_app_id,
        source_open_id: data.source_open_id
      });
      console.log(v[0x7e9b], params);
      wx.request({
        url: idkApi + v[0x7e9c],
        data: params,
        timeout: 5000,
        success: res => {
          console.log(v[0x7e9d], res);
        }
      });
    }
  });
};

// 去提现
const gameWithdraw = function (data) {
  const SDKyyw = this;
  if (typeof SDKyyw.gameWithdrawCallback != v[0x7b52]) {
    console.log(v[0x7e9e]);
  } else {
    const params = {
      app_id: commonParams.gameId,
      withdraw_amount: data.withdraw_amount,
      open_id: commonParams.uid
    };
    if (!httpLock.httpGameWithdraw) {
      httpLock.httpGameWithdraw = true;
      wx.request({
        url: idkApi + v[0x7e9f],
        data: Tools.idkBuildParams(params),
        method: v[0x104c],
        header: {
          "Content-Type": v[0x7ce5]
        },
        success(res) {
          let ret = res.data;
          SDKyyw.gameWithdrawCallback(ret);
        },
        fail(err) {
          SDKyyw.gameWithdrawCallback(err);
          console.log(v[0x7e86], err);
        },
        complete(res) {
          httpLock.httpGameWithdraw = false;
        },
        timeout: 4000
      });
    }
  }
};

// 礼包卡券
const toCouponReceive = function (data) {
  const SDKyyw = this;
  if (typeof SDKyyw.toCouponReceiveCallback != v[0x7b52]) {
    console.log(v[0x7ea0]);
  } else {
    if (!httpLock.httpToCouponReceiveFlag) {
      httpLock.httpToCouponReceiveFlag = true;
      const params = {
        app_id: commonParams.gameId,
        openid: commonParams.uid,
        union_id: commonParams.unionId,
        os_type: Tools.getDeviceTypeId()
      };
      if (data.tag) {
        params.tag = data.tag;
      }
      wx.request({
        url: idkApi + v[0x7ea1],
        data: Tools.idkBuildParams(params),
        method: v[0x104c],
        success(res) {
          SDKyyw.toCouponReceiveCallback(res);
        },
        complete() {
          httpLock.httpToCouponReceiveFlag = false;
        },
        timeout: 10 * 1000
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
  if (typeof SDKyyw.getChangeShellOnCallback != v[0x7b52]) {
    console.log(v[0x7ea2]);
  } else {
    commonParams.gameId = appid;
    commonParams.gameKey = appkey;
    const accountInfo = wx.getAccountInfoSync();
    console.log(v[0x7e15], accountInfo);
    console.log(v[0x7e16], accountInfo.miniProgram.envVersion);
    commonParams.envVersion = accountInfo.miniProgram.envVersion;
    wx.request({
      url: api + v[0x7ea3],
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
      content: commonParams.appContent || v[0x7ea4],
      cancelText: v[0x7ea5],
      confirmText: v[0x7ea6],
      success(res) {
        if (res.confirm) {
          wx.openCustomerServiceConversation({
            showMessageCard: true,
            sendMessageTitle: commonParams.sendMessageTitle,
            sendMessageImg: commonParams.sendMessageImg,
            complete(res) {
              console.log(v[0x7ea7], res);
            }
          });
        } else if (res.cancel) {
          console.log(v[0x7c2c]);
        }
      }
    });
  }
};
// 加入QQ群
const toQQGroup = function () {
  wx.openCustomerServiceConversation({
    showMessageCard: true,
    sendMessageTitle: commonParams.QQGroup.sendMessageTitle,
    sendMessageImg: commonParams.QQGroup.sendMessageImg,
    complete(res) {
      console.log(v[0x7ea7], res);
    }
  });
};

//敏感词屏蔽
const msgSecCheck = function (msg, callback) {
  const msgIsString = Object.prototype.toString.call(msg).indexOf(v[0x7ea8]) > -1;
  const msgIsObject = Object.prototype.toString.call(msg).indexOf(v[0x7ea9]) > -1;
  var params = {};
  if (msgIsString) {
    params = {
      gameid: commonParams.gameId,
      partner: commonParams.partner,
      deviceno: commonParams.partner,
      time: Tools.getTimeStamp(),
      content: msg
    };
  } else if (msgIsObject) {
    // 2.0 版本
    if (!msg.content) {
      console.log(v[0x7eaa]);
      return;
    }
    params = Object.assign({
      openid: commonParams.uid,
      gameid: commonParams.gameId,
      partner: commonParams.partner,
      deviceno: commonParams.partner,
      time: Tools.getTimeStamp()
    }, msg);
  } else {
    console.log(v[0x7eab]);
    return;
  }
  if (msg) {
    wx.request({
      url: api + v[0x7eac],
      data: Tools.buildCheckMsg(params),
      success(res) {
        console.log(v[0x7ead], res.data);
        callback(res.data);
      }
    });
  } else {
    callback({
      err: 0,
      msg: v[0x7eae]
    });
  }
};

// 直播
const gameLive = {
  // 开启直播
  startGameLive() {
    const SDKyyw = this;
    if (typeof SDKyyw.startGameLiveCallback != v[0x7b52]) {
      console.log(v[0x7eaf]);
      return;
    }
    wx.startGameLive({
      success(res) {
        SDKyyw.startGameLiveCallback({
          status: "1",
          msg: "",
          data: res
        });
        console.log(v[0x7eb0], res);
      },
      fail(err) {
        console.error(v[0x7eb0], err);
        SDKyyw.startGameLiveCallback({
          status: "0",
          msg: "",
          data: err
        });
      }
    });
  },
  // 检查设备支持
  checkGameLiveEnabled() {
    const SDKyyw = this;
    if (typeof SDKyyw.checkGameLiveEnabledCallback != v[0x7b52]) {
      console.log(v[0x7eb1]);
      return;
    }
    wx.checkGameLiveEnabled({
      success(res) {
        SDKyyw.checkGameLiveEnabledCallback({
          status: "1",
          msg: "",
          data: res
        });
        console.log(v[0x7eb2], res);
        //  console.log(res.isEnabled) // 当前用户是否有直播权限（true/false）
      },
      fail(err) {
        SDKyyw.checkGameLiveEnabledCallback({
          status: "0",
          msg: "",
          data: err
        });
      }
    });
  },
  // 监听小游戏直播状态变化事件
  onGameLiveStateChange() {
    const SDKyyw = this;
    if (typeof SDKyyw.onGameLiveStateChangeCallback != v[0x7b52]) {
      console.log(v[0x7eb3]);
      return;
    }
    wx.onGameLiveStateChange(res => {
      // if (res.state === "menuClick") {
      //   return {};
      // }
      if (res.state === v[0x121]) {
        wx.getUserRecentGameLiveInfo({
          success(res) {
            // feedIdList	Array.string	最近几场直播的 feedId 列表
            if (res.feedIdList) {
              console.log(v[0x7eb4], res);
              wx.getUserGameLiveDetails({
                feedIdList: [res.feedIdList[0]],
                success(res) {
                  console.log(v[0x7eb5], res);
                  if (res.cloudID) {
                    const params = {
                      app_id: commonParams.gameId,
                      encrypted_data: res.encryptedData,
                      cloudID: res.cloudID,
                      iv: res.iv
                    };
                    wx.login({
                      success: res => {
                        if (res.code == null || res.code == undefined || res.code == "") {
                          console.log(v[0x7e22]);
                        } else {
                          params.code = res.code;
                          wx.request({
                            url: idkApi + v[0x7eb6],
                            method: v[0x104c],
                            data: Tools.idkBuildParams(params),
                            success(res) {
                              console.log(v[0x7eb7], res);
                            },
                            fail(err) {
                              console.log(v[0x7eb8], err);
                            },
                            timeout: 10 * 1000
                          });
                        }
                      }
                    });
                  }
                }
              });
            }
          }
        });
      }
      SDKyyw.onGameLiveStateChangeCallback(res);
    });
  },
  // 取消监听
  offGameLiveStateChange() {
    // 取消监听
    wx.offGameLiveStateChange();
  },
  // 查询当前直播状态
  getGameLiveState() {
    const SDKyyw = this;
    if (typeof SDKyyw.getGameLiveStateCallback != v[0x7b52]) {
      console.log(v[0x7eb9]);
      return;
    }
    const state = wx.getGameLiveState();
    // isLive	boolean	是否正在直播
    SDKyyw.getGameLiveStateCallback(state);
    console.log(v[0x7eba], state);
  },
  // 获取小游戏用户当前正在直播的信息（可查询当前直播的 feedId）
  getUserCurrentGameliveInfo() {
    const SDKyyw = this;
    if (typeof SDKyyw.getUserCurrentGameliveInfoCallback != v[0x7b52]) {
      console.log(v[0x7ebb]);
      return;
    }
    wx.getUserCurrentGameliveInfo({
      success(res) {
        // feedId 当前直播Id
        SDKyyw.getUserCurrentGameliveInfoCallback({
          status: "1",
          msg: "",
          data: res
        });
        console.log(v[0x7ebc], res);
      },
      fail(err) {
        console.log(v[0x7ebc], err);

        SDKyyw.getUserCurrentGameliveInfoCallback({
          status: "0",
          msg: "",
          data: err
        });
      }
    });
  },
  // 获取小游戏用户最近已结束的直播的信息（可查询最近已结束的直播的 feedId）
  getUserRecentGameLiveInfo() {
    const SDKyyw = this;
    if (typeof SDKyyw.getUserRecentGameLiveInfoCallback != v[0x7b52]) {
      console.log(v[0x7ebd]);
      return;
    }
    wx.getUserRecentGameLiveInfo({
      success(res) {
        // feedIdList	Array.string	最近几场直播的 feedId 列表
        SDKyyw.getUserRecentGameLiveInfoCallback({
          status: "1",
          msg: "",
          data: res
        });
        // res.feedIdList === ['id1', 'id2', 'id3']
        console.log(v[0x7ebe], res);
      },
      fail(err) {
        SDKyyw.getUserRecentGameLiveInfoCallback({
          status: "0",
          msg: "",
          data: err
        });
      }
    });
  },
  // 获取小游戏用户的已结束的直播数据
  getUserGameLiveDetails(data = {}) {
    const SDKyyw = this;
    if (typeof SDKyyw.getUserGameLiveDetailsCallback != v[0x7b52]) {
      console.log(v[0x7ebf]);
      return;
    }
    if (!data.feedIdList) {
      console.log(v[0x7ec0]);
      return;
    }
    wx.getUserGameLiveDetails({
      feedIdList: data.feedIdList,
      success(res) {
        console.log(v[0x7ec1], res);
        SDKyyw.getUserGameLiveDetailsCallback({
          status: "1",
          msg: "",
          data: res
        });
      },
      fail(err) {
        SDKyyw.getUserGameLiveDetailsCallback({
          status: "0",
          msg: "",
          data: err
        });
      }
    });
  },
  // 支持打开当前游戏的直播专区
  openChannelsLiveCollection(data = {}) {
    wx.openChannelsLiveCollection({
      openIds: data.openIds || [] // 支持填写最多4个openid，该用户的直播间将在直播专区置顶显示；可不填
    });
  },
  // 小程序内发起预约视频号直播
  getChannelsLiveNoticeInfo(data = {}) {
    const SDKyyw = this;
    if (typeof SDKyyw.getChannelsLiveNoticeInfoCallback != v[0x7b52]) {
      console.log(v[0x7ec2]);
      return;
    }
    if (!data.finderUserName) {
      console.log(v[0x7ec3]);
      return;
    }
    wx.getChannelsLiveNoticeInfo({
      finderUserName: data.finderUserName || "",
      feedId: data.feedId || "",
      nonceId: data.nonceId || "",
      success(res) {
        console.log(v[0x7ec4], res);
        SDKyyw.getChannelsLiveNoticeInfoCallback({
          status: "1",
          msg: "",
          data: res
        });
      },
      fail(err) {
        console.log(v[0x7ec4], err);
        SDKyyw.getChannelsLiveNoticeInfoCallback({
          status: "0",
          msg: "",
          data: err
        });
      }
    });
  },
  // 获取视频号信息
  getChannelsLiveInfo(data = {}) {
    const SDKyyw = this;
    if (typeof SDKyyw.getChannelsLiveInfoCallback != v[0x7b52]) {
      console.log(v[0x7ec5]);
      return;
    }
    if (!data.finderUserName) {
      console.log(v[0x7ec3]);
      return;
    }
    wx.getChannelsLiveInfo({
      finderUserName: data.finderUserName, // 视频id
      success: function (res) {
        console.log(v[0x7ec6], res);
        SDKyyw.getChannelsLiveInfoCallback({
          status: "1",
          msg: "",
          data: res
        });
      },
      fail: function (err) {
        console.log(v[0x7ec6], err);
        SDKyyw.getChannelsLiveInfoCallback({
          status: "0",
          msg: "",
          data: err
        });
      }
    });
  },
  // 打开视频号直播
  openChannelsLive(data = {}) {
    const SDKyyw = this;
    if (typeof SDKyyw.openChannelsLiveCallback != v[0x7b52]) {
      console.log(v[0x7ec7]);
      return;
    }
    if (!data.finderUserName) {
      console.log(v[0x7ec3]);
      return;
    }
    wx.openChannelsLive({
      finderUserName: data.finderUserName,
      success: function (res) {
        console.log(v[0x7ec8], res);
        SDKyyw.openChannelsLiveCallback({
          status: "1",
          msg: "",
          data: res
        });
      },
      fail: function (err) {
        console.log(v[0x7ec8], err);
        SDKyyw.openChannelsLiveCallback({
          status: "0",
          msg: "",
          data: err
        });
      }
    });
  },
  // 预约直播
  reserveChannelsLive(data = {}) {
    const SDKyyw = this;

    if (typeof SDKyyw.reserveChannelsLiveCallback != v[0x7b52]) {
      console.log(v[0x7ec9]);
      return;
    }
    if (!data.noticeId) {
      console.log(v[0x7eca]);
      return;
    }
    wx.reserveChannelsLive({
      noticeId: data.noticeId || "",
      success(res) {
        console.log(v[0x7ecb], res);
        SDKyyw.reserveChannelsLiveCallback({
          status: "1",
          msg: "",
          data: res
        });
      },
      fail(err) {
        console.log(v[0x7ecb], err);
        SDKyyw.reserveChannelsLiveCallback({
          status: "0",
          msg: "",
          data: err
        });
      }
    });
  },
  // 获取任务列表
  getLiveTask() {
    const SDKyyw = this;
    if (typeof SDKyyw.getLiveTaskCallback != v[0x7b52]) {
      console.log(v[0x7ecc]);
    } else {
      const params = {
        app_id: commonParams.gameId,
        open_id: commonParams.uid,
        union_id: commonParams.unionId
      };
      if (!httpLock.httpLiveTaskFlag) {
        httpLock.httpLiveTaskFlag = true;
        wx.request({
          url: idkApi + v[0x7ecd],
          data: Tools.idkBuildParams(params),
          success(res) {
            res = res.data;
            SDKyyw.getLiveTaskCallback(res);
          },
          fail(err) {
            SDKyyw.getLiveTaskCallback(err);
            console.log(v[0x7e86], err);
          },
          complete(res) {
            httpLock.httpLiveTaskFlag = false;
          },
          timeout: 4000
        });
      }
    }
  },
  // 直播任务奖励领取
  toLiveTaskReceive(data) {
    const SDKyyw = this;
    if (typeof SDKyyw.toLiveTaskReceiveCallback != v[0x7b52]) {
      console.log(v[0x7ece]);
    } else {
      if (!httpLock.httpToLiveTaskReceiveFlag) {
        httpLock.httpToLiveTaskReceiveFlag = true;
        const params = {
          app_id: commonParams.gameId,
          open_id: commonParams.uid,
          union_id: commonParams.unionId,
          live_id: data.live_id,
          role_id: data.role_id || "",
          role_name: data.role_name || "",
          server_id: data.server_id || "",
          server_name: data.server_name || "",
          level: data.level || ""
        };
        wx.request({
          url: idkApi + v[0x7ecf],
          data: Tools.idkBuildParams(params),
          method: v[0x104c],
          success(res) {
            res = res.data;
            SDKyyw.toLiveTaskReceiveCallback(res);
          },
          fail(err) {
            SDKyyw.toLiveTaskReceiveCallback(err);
            console.log(v[0x7e86], err);
          },
          complete() {
            httpLock.httpToLiveTaskReceiveFlag = false;
          },
          timeout: 10 * 1000
        });
      }
    }
  },
  // 获取用户直播信息
  getUserLiveInfo(data) {
    const SDKyyw = this;
    if (typeof SDKyyw.getUserLiveInfoCallback != v[0x7b52]) {
      console.log(v[0x7ed0]);
    } else {
      if (!httpLock.httpGetUserLiveInfoFlag) {
        httpLock.httpGetUserLiveInfoFlag = true;
        const params = {
          app_id: commonParams.gameId,
          open_id: commonParams.uid,
          union_id: commonParams.unionId,
          role_id: data.role_id || "",
          role_name: data.role_name || "",
          server_id: data.server_id || "",
          server_name: data.server_name || "",
          level: data.level || ""
        };
        wx.request({
          url: idkApi + v[0x7ed1],
          data: Tools.idkBuildParams(params),
          success(res) {
            res = res.data;
            SDKyyw.getUserLiveInfoCallback(res);
          },
          fail(err) {
            SDKyyw.getUserLiveInfoCallback(err);
            console.log(v[0x7e86], err);
          },
          complete() {
            httpLock.httpGetUserLiveInfoFlag = false;
          },
          timeout: 10 * 1000
        });
      }
    }
  }
};
// 客服跳转H5
const optionServiceToH5 = function () {
  wx.openCustomerServiceConversation({
    sessionFrom: commonParams.showH5On.sessionFrom || "",
    showMessageCard: commonParams.showH5On.showMessageCard || false,
    sendMessageTitle: commonParams.showH5On.sendMessageTitle || "",
    sendMessageImg: commonParams.showH5On.sendMessageImg || "",
    success(res) {},
    fail(err) {
      console.log(v[0x7e4c], err);
      optionServiceToH5();
    }
  });
};

// 公共客服弹窗
const openCustomerService = function (type) {
  if (!type) {
    console.log(v[0x7ed2]);
    return;
  }
  if (!commonParams.loginInfo[type]) {
    console.log(v[0x7ed3]);
    return;
  }
  wx.openCustomerServiceConversation({
    sessionFrom: commonParams.loginInfo[type].sessionFrom || "",
    showMessageCard: commonParams.loginInfo[type].showMessageCard || false,
    sendMessageTitle: commonParams.loginInfo[type].sendMessageTitle || "",
    sendMessageImg: commonParams.loginInfo[type].sendMessageImg || "",
    success(res) {},
    fail(err) {
      console.log(v[0x7e4c], err);
    }
  });
};

// 切量h5 客服跳转
const quantityToH5 = function () {
  wx.onTouchStart(() => {
    optionServiceToH5();
  });
  wx.onMouseUp(() => {
    optionServiceToH5();
  });

  const h5Info = commonParams.showH5On;
  wx.showModal({
    title: h5Info.title,
    content: h5Info.content,
    showCancel: false,
    complete(res) {
      console.log(v[0x7ed4], res);
    }
  });
};

const pushData = function (data) {
  if (data.type != "0") {
    data.accountId = commonParams.uid;
    data.appId = commonParams.gameId;
    data.appVersion = commonParams.appVersion;
    data.platform = v[0x7e19];
    data.channel = commonParams.partner;
    data.source = commonParams.query.source ? commonParams.query.source : "";
    data.source_type = commonParams.query.source_type ? commonParams.query.source_type : "";
    data.systemName = Tools.getDeviceType();
    data.deviceName = wx.getSystemInfoSync().model;
    data.resolution = wx.getSystemInfoSync().screenWidth + "*" + wx.getSystemInfoSync().screenHeight;
    data.deviceType = Tools.getDeviceTypeId();
    data.referer = commonParams.referer;
    data.idfa = "";
    data.ip = "";
    data.mac = "";
    data.imei = commonParams.uid;
    data.sex = "0";
    data.network = "";
    data.country = "86";
    data.operators = "";
  }

  if (data.type == "1") {
    //登录
    data.logType = v[0x7c60];
    data.region = "0";
    data.channelAccid = commonParams.uid;
    delete data[v[0x7ed5]];
    delete data[v[0x7ed6]];
    //accountId serverId
  } else if (data.type == "2") {
    //创建角色或者账号
    if (!data.roleId) {
      console.log(v[0x7ed7]);
    }
    if (!data.roleName) {
      console.log(v[0x7ed8]);
    }

    data.logType = v[0x7ed9];
    data.region = "0";
    data.channelAccid = commonParams.uid;
    delete data[v[0x7ed5]];
    delete data[v[0x7ed6]];
    //accountId serverId  roleId roleName level vipLevel
  } else if (data.type == "4") {
    if (!data.roleId) {
      console.log(v[0x7ed7]);
    }
    if (!data.roleName) {
      console.log(v[0x7ed8]);
    }
    data.logType = v[0x7eda]; //升级
    data.region = "0";
    data.levelType = "1";
    data.duration = "0";
    data.channelAccid = commonParams.uid;
    delete data[v[0x2f8f]];
    //accountId00  roleID00   roleName00 level00 vipLevel00   startLevel00 endLevel00
  } else if (data.type == "5") {
    data.logType = v[0x7edb]; //在线
    delete data[v[0x7edc]];
    delete data[v[0x7edd]];
    delete data[v[0x7bf4]];
    delete data[v[0x7ede]];
    delete data[v[0x6816]];
    delete data[v[0x7edf]];
    delete data[v[0x7ee0]];
    //accountId serverId  roleID  roleName
  } else if (data.type == 6) {
    // 分享
    data.logType = v[0x7cc5];
    delete data[v[0x7edc]];
    delete data[v[0x7edd]];
    delete data[v[0x7bf4]];
    delete data[v[0x7ede]];
    delete data[v[0x6816]];
    delete data[v[0x7edf]];
    delete data[v[0x7ee0]];
    // data.channelAccid = commonParams.uid;
    data.shareType = "1";
  } else if (data.type == 9) {
    // 自定义事件
    data.logType = v[0x200];
    delete data[v[0x7edc]];
    delete data[v[0x7edd]];
    delete data[v[0x7ee1]];
    delete data[v[0x7bf4]];
    delete data[v[0x7ede]];
    delete data[v[0x6816]];
    delete data[v[0x7edf]];
    delete data[v[0x7ee0]];
    delete data[v[0x7e0f]];
  } else if (data.type == 10) {
    data.logType = v[0x7ee2]; // 游戏关卡
    data.channelAccid = commonParams.uid;
  } else if (data.type == 11) {
    data.logType = v[0x7ee3]; // 广告
    data.channelAccid = commonParams.uid;
  }
  delete data[v[0x66]];
  wx.request({
    url: logApi + v[0x7ee4],
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
      console.log(v[0x7ee5] + str, v[0x7ee6]);
    } else if (level == state.level.warn) {
      console.log(v[0x7ee7] + str, v[0x7ee8]);
    } else if (level == state.level.debug) {
      console.log(v[0x7ee9] + str, v[0x7ee8]);
    } else {
      console.log(v[0x7eea] + str, v[0x7ee8]);
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
  b = 0xefcdab89;
  c = 0x98badcfe;
  d = 0x10325476;
  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 0xd76aa478);
    d = FF(d, a, b, c, x[k + 1], S12, 0xe8c7b756);
    c = FF(c, d, a, b, x[k + 2], S13, 0x242070db);
    b = FF(b, c, d, a, x[k + 3], S14, 0xc1bdceee);
    a = FF(a, b, c, d, x[k + 4], S11, 0xf57c0faf);
    d = FF(d, a, b, c, x[k + 5], S12, 0x4787c62a);
    c = FF(c, d, a, b, x[k + 6], S13, 0xa8304613);
    b = FF(b, c, d, a, x[k + 7], S14, 0xfd469501);
    a = FF(a, b, c, d, x[k + 8], S11, 0x698098d8);
    d = FF(d, a, b, c, x[k + 9], S12, 0x8b44f7af);
    c = FF(c, d, a, b, x[k + 10], S13, 0xffff5bb1);
    b = FF(b, c, d, a, x[k + 11], S14, 0x895cd7be);
    a = FF(a, b, c, d, x[k + 12], S11, 0x6b901122);
    d = FF(d, a, b, c, x[k + 13], S12, 0xfd987193);
    c = FF(c, d, a, b, x[k + 14], S13, 0xa679438e);
    b = FF(b, c, d, a, x[k + 15], S14, 0x49b40821);
    a = GG(a, b, c, d, x[k + 1], S21, 0xf61e2562);
    d = GG(d, a, b, c, x[k + 6], S22, 0xc040b340);
    c = GG(c, d, a, b, x[k + 11], S23, 0x265e5a51);
    b = GG(b, c, d, a, x[k + 0], S24, 0xe9b6c7aa);
    a = GG(a, b, c, d, x[k + 5], S21, 0xd62f105d);
    d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = GG(c, d, a, b, x[k + 15], S23, 0xd8a1e681);
    b = GG(b, c, d, a, x[k + 4], S24, 0xe7d3fbc8);
    a = GG(a, b, c, d, x[k + 9], S21, 0x21e1cde6);
    d = GG(d, a, b, c, x[k + 14], S22, 0xc33707d6);
    c = GG(c, d, a, b, x[k + 3], S23, 0xf4d50d87);
    b = GG(b, c, d, a, x[k + 8], S24, 0x455a14ed);
    a = GG(a, b, c, d, x[k + 13], S21, 0xa9e3e905);
    d = GG(d, a, b, c, x[k + 2], S22, 0xfcefa3f8);
    c = GG(c, d, a, b, x[k + 7], S23, 0x676f02d9);
    b = GG(b, c, d, a, x[k + 12], S24, 0x8d2a4c8a);
    a = HH(a, b, c, d, x[k + 5], S31, 0xfffa3942);
    d = HH(d, a, b, c, x[k + 8], S32, 0x8771f681);
    c = HH(c, d, a, b, x[k + 11], S33, 0x6d9d6122);
    b = HH(b, c, d, a, x[k + 14], S34, 0xfde5380c);
    a = HH(a, b, c, d, x[k + 1], S31, 0xa4beea44);
    d = HH(d, a, b, c, x[k + 4], S32, 0x4bdecfa9);
    c = HH(c, d, a, b, x[k + 7], S33, 0xf6bb4b60);
    b = HH(b, c, d, a, x[k + 10], S34, 0xbebfbc70);
    a = HH(a, b, c, d, x[k + 13], S31, 0x289b7ec6);
    d = HH(d, a, b, c, x[k + 0], S32, 0xeaa127fa);
    c = HH(c, d, a, b, x[k + 3], S33, 0xd4ef3085);
    b = HH(b, c, d, a, x[k + 6], S34, 0x4881d05);
    a = HH(a, b, c, d, x[k + 9], S31, 0xd9d4d039);
    d = HH(d, a, b, c, x[k + 12], S32, 0xe6db99e5);
    c = HH(c, d, a, b, x[k + 15], S33, 0x1fa27cf8);
    b = HH(b, c, d, a, x[k + 2], S34, 0xc4ac5665);
    a = II(a, b, c, d, x[k + 0], S41, 0xf4292244);
    d = II(d, a, b, c, x[k + 7], S42, 0x432aff97);
    c = II(c, d, a, b, x[k + 14], S43, 0xab9423a7);
    b = II(b, c, d, a, x[k + 5], S44, 0xfc93a039);
    a = II(a, b, c, d, x[k + 12], S41, 0x655b59c3);
    d = II(d, a, b, c, x[k + 3], S42, 0x8f0ccc92);
    c = II(c, d, a, b, x[k + 10], S43, 0xffeff47d);
    b = II(b, c, d, a, x[k + 1], S44, 0x85845dd1);
    a = II(a, b, c, d, x[k + 8], S41, 0x6fa87e4f);
    d = II(d, a, b, c, x[k + 15], S42, 0xfe2ce6e0);
    c = II(c, d, a, b, x[k + 6], S43, 0xa3014314);
    b = II(b, c, d, a, x[k + 13], S44, 0x4e0811a1);
    a = II(a, b, c, d, x[k + 4], S41, 0xf7537e82);
    d = II(d, a, b, c, x[k + 11], S42, 0xbd3af235);
    c = II(c, d, a, b, x[k + 2], S43, 0x2ad7d2bb);
    b = II(b, c, d, a, x[k + 9], S44, 0xeb86d391);
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
  lResult = (lX & 0x3fffffff) + (lY & 0x3fffffff);
  if (lX4 & lY4) {
    return lResult ^ 0x80000000 ^ lX8 ^ lY8;
  }
  if (lX4 | lY4) {
    if (lResult & 0x40000000) {
      return lResult ^ 0xc0000000 ^ lX8 ^ lY8;
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
  isJumpGame: isJumpGame,
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
  getChangeShellOn: getChangeShellOn,
  toCouponReceive: toCouponReceive,
  gameLive: gameLive,
  toQQGroup: toQQGroup,
  quantityToH5: quantityToH5,
  optionServiceToH5: optionServiceToH5,
  openCustomerService: openCustomerService
};