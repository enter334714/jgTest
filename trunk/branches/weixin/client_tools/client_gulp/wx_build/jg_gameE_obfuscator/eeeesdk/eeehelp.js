var b = wx.$e;
const state = {
  initStatus: b[40328],
  loginStatus: b[40328],
  videoAd: null, // 激励广告
  bannerAd: null, // banner广告
  gridAd: null, // 格子广告
  interstitialAd: null, // 插屏广告
  customAd: null // 原生模板广告
};
const commonParams = {
  referer: b[67681],
  partner: b[67682],
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
  yy_pf: b[67683],
  payTip: b[67684],

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
  QQGroup: {} // qq客服
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
  httpToCouponReceiveFlag: false
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
const api = b[67685];
const wanBaApi = b[67686];
const logApi = b[67687];
const wxRedApi = b[67688];

const Tools = {
  getDeviceType: () => {
    const systemInfo = wx.getSystemInfoSync();
    let osType;
    if (systemInfo.system.toLowerCase().indexOf(b[67689]) > -1) {
      osType = b[67689];
    } else if (systemInfo.system.toLowerCase().indexOf(b[67690]) > -1) {
      osType = b[67690];
    } else if (systemInfo.system.toLowerCase().indexOf(b[49535]) > -1) {
      osType = b[49535];
    } else {
      osType = b[67691];
    }
    return osType;
  },
  getTimeStamp: () => {
    return Date.parse(new Date()) / 1000;
  },
  buildActiveParams: (params, gameKey) => {
    const keys = [b[67692], b[67693], b[67694], b[67695], b[67696], b[40840]];
    let signString = "";
    for (let k in params) {
      signString = signString + params[k];
    }
    signString = signString + gameKey;
    params[b[51171]] = md5(signString);
    return params;
  },
  buildChangeShell: (params, gameKey) => {
    const keys = [b[67692], b[67697], b[40840]];
    let signString = "";
    for (let k in params) {
      signString = signString + params[k];
    }
    signString = signString + gameKey;
    params[b[51171]] = md5(signString);
    return params;
  },
  buildLoginParams: params => {
    const keys = [b[67698], b[67692], b[67694], b[67693], b[40840]];
    let signString = "";
    for (let key in keys) {
      let k = keys[key];
      signString = signString + params[k];
    }
    signString = signString + commonParams.gameKey;
    params[b[51171]] = md5(signString);
    return params;
  },
  buildBindParams: params => {
    const keys = [b[67692], b[67699], b[67700], b[40840]];
    let signString = "";
    for (let key in keys) {
      let k = keys[key];
      signString = signString + params[k];
    }
    signString = signString + commonParams.gameKey;
    params[b[51171]] = md5(signString);
    return params;
  },
  buildPayParams: params => {
    const keys = [b[67692], b[67698], b[67694], b[47521], b[58046], b[40840]];
    let signString = "";
    for (let key in keys) {
      let k = keys[key];
      signString = signString + params[k];
    }
    signString = signString + commonParams.gameKey + commonParams.wxid;
    params[b[51171]] = md5(signString);
    return params;
  },
  buildRepublish: params => {
    const keys = [b[47521], b[67692], b[67698], b[67694], b[40840]];
    let signString = "";
    for (let key in keys) {
      let k = keys[key];
      signString = signString + params[k];
    }
    signString = signString + commonParams.gameKey + commonParams.wxid;
    return md5(signString).toLowerCase();
  },
  buildCheckMsg(params) {
    const keys = [b[67692], b[67694], b[67698], b[40840]];
    let signString = "";
    for (let key in keys) {
      let k = keys[key];
      signString = signString + params[k];
    }
    signString = signString + commonParams.gameKey;
    params[b[51171]] = md5(signString).toLowerCase();
    return params;
  },

  getDeviceTypeId: () => {
    const osType = Tools.getDeviceType();
    let deviceType = b[67691];
    if (osType == b[67690]) {
      deviceType = 1;
    } else if (osType == b[67689]) {
      deviceType = 2;
    } else if (osType == b[49535]) {
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
    params[b[51171]] = md5(signString);
    return params;
  },
  serialize: obj => {
    var ary = [];
    for (var p in obj) if (obj.hasOwnProperty(p) && obj[p]) {
      ary.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return ary.join("&");
  },
  buildRedParams: params => {
    let keyList = Object.keys(params).sort();
    let stringParams = "";
    for (let key of keyList) {
      if (params[key] instanceof Array) {
        stringParams += key + "=" + encodeURIComponent(JSON.stringify(params[key])) + "&";
      } else {
        stringParams += key + "=" + encodeURIComponent(params[key]) + "&";
      }
    }
    stringParams += b[40267] + "=" + commonParams.gameKey;
    params[b[51171]] = md5(stringParams);
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

  if (typeof SDKyyw.initLoginCallback != b[67597]) {
    console.error(b[67701]);
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
    console.log(b[67702], accountInfo);
    console.log(b[67703], accountInfo.miniProgram.envVersion);
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
    console.log(b[67704], launchOption);
    active(SDKyyw, sdkParams, gameId, gameKey);
  }
};

//初始化激活
const active = function (SDKyyw, params, gameId, gameKey) {
  wx.request({
    url: api + b[67705],
    data: params,
    timeout: 3000,
    success: res => {
      let ret = res.data;
      console.log(b[40554], ret);
      if (ret.data.code == 1) {
        // wx.showToast({
        //   title: "成功",
        //   icon: "succes",
        //   duration: 500,
        //   mask: true,
        // });
        commonParams.gameId = gameId;
        commonParams.gameKey = gameKey;
        state.initStatus = b[49651];

        if (commonParams.gameId) {
          let data = {};
          data.logType = b[40554];
          data.appId = commonParams.gameId;
          data.appVersion = b[67706];
          data.platform = b[67707];
          data.source = commonParams.query.source ? commonParams.query.source : "";
          data.source_type = commonParams.query.source_type ? commonParams.query.source_type : "";
          pushData(data);
        }

        //添加分享
        wx.showShareMenu({
          withShareTicket: true
        });
        let orderList = [];
        wx.setStorageSync(b[67708], orderList);
        wxLogin(SDKyyw);
      } else {
        state.initStatus = b[64518];
        console.log(b[67709], b[67710] + gameId, b[67711] + gameKey);
        if (commonParams.initTimer) {
          clearTimeout(commonParams.initTimer);
        }
        commonParams.initTimer = setTimeout(() => {
          active(SDKyyw, params, gameId, gameKey);
        }, 2000);
      }
    },
    fail: err => {
      console.log(b[67712]);
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
        console.log(b[67713]);
        wxLogin(SDKyyw);
      } else {
        let jscode = res.code;
        // commonParams.code = res.code
        //获取用户信息
        wx.getSetting({
          complete(com) {
            if (com.authSetting[b[67714]]) {
              wx.getUserInfo({
                success(res) {
                  console.log(b[40313], res);
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
          osType: Tools.getDeviceType() == b[67690] ? "2" : Tools.getDeviceType() == b[67689] ? "1" : Tools.getDeviceType() == b[49535] ? "3" : b[67691],
          os: Tools.getDeviceType(),
          encryptedData: commonParams.encryptedData,
          scene: commonParams.scene,
          query: JSON.stringify(commonParams.query),
          envVersion: commonParams.envVersion,
          referrerInfo: commonParams.referrerInfo
        };
        console.log(b[67715], params);
        sdkLogin(SDKyyw, params);
      }
    },
    fail: err => {
      wxLogin(SDKyyw);
      console.log(b[67716], err);
    }
  });
};

//SDK登录
const sdkLogin = function (SDKyyw, params) {
  wx.request({
    url: api + b[67717],
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
        commonParams.QQGroup = ret.data.QQGroup;
        console.log(b[67718], commonParams.referrerInfo);

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
        state.loginStatus = b[49651];
        if (commonParams.uid) {
          let data = {};
          data.type = "1";
          pushData(data);
        }
        replenish();
        if (ret.data.isNewUser == 1) {
          let data = {};
          data.logType = b[67719];
          data.appId = commonParams.gameId;
          data.appVersion = b[67706];
          data.accountId = commonParams.uid;
          data.deviceType = Tools.getDeviceTypeId();
          data.platform = b[67707];
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
        console.log(b[47521], ret.data.uid);
        console.log(b[67720], ret);
        // SDK登录回调
        SDKyyw.initLoginCallback(ret);
      } else {
        console.log(b[67721], res);
        if (commonParams.sdkLoginTimer) {
          clearTimeout(commonParams.sdkLoginTimer);
        }
        commonParams.sdkLoginTimer = setTimeout(() => {
          wxLogin(SDKyyw);
        }, 2000);
      }
    },
    fail: err => {
      console.log(b[67722], err);
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
  if (typeof SDKyyw.cutGameCallback != b[67597]) {
    console.log(b[67723]);
  } else {
    wx.navigateToMiniProgram({
      appId: commonParams.switchApp,
      extraData: {
        from_app_id: commonParams.gameId || "",
        from_openid: commonParams.uid || ""
      },
      envVersion: commonParams.switchEnv || b[67724], // develop trial release
      success(res) {
        console.log(b[67725], res);
        SDKyyw.cutGameCallback({
          status: 1,
          msg: b[49651],
          data: res
        });
      },
      fail(err) {
        console.log(b[67726], err);
        SDKyyw.cutGameCallback({
          status: 0,
          msg: b[64518],
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
        url: api + b[67727],
        data: params,
        timeout: 3000,
        success: res => {
          console.log(b[67728], res.data);
        }
      });
    }
  });
};

// 获取手机验证码
const getCaptcha = function (data, sucCallback, errorCallback) {
  const SDKyyw = this;
  if (typeof sucCallback == b[67597]) {
    let params = Tools.buildParams({
      yy_pf: commonParams.yy_pf,
      app_id: commonParams.gameId,
      telephone: data,
      open_id: commonParams.uid,
      use: b[40074],
      time: Tools.getTimeStamp()
    });
    wx.request({
      url: wanBaApi + b[67729],
      data: params,
      timeout: 3000,
      success: res => {
        if (res.data.code === 18000) {
          console.log(b[67730], res);
          sucCallback(res);
        } else {
          console.log(b[67731], res);
          errorCallback(res);
        }
      },
      error: err => {
        console.log(b[67732], err);
      }
    });
  } else {
    if (typeof SDKyyw.getCaptchaCallback != b[67597]) {
      console.log(b[67733]);
    } else {
      let params = Tools.buildParams({
        yy_pf: commonParams.yy_pf,
        app_id: commonParams.gameId,
        telephone: data.telephone,
        open_id: commonParams.uid,
        use: b[40074],
        time: Tools.getTimeStamp()
      });
      wx.request({
        url: wanBaApi + b[67729],
        data: params,
        timeout: 3000,
        success: res => {
          if (res.data.code === 18000) {
            console.log(b[67730], res);
            SDKyyw.getCaptchaCallback({
              status: 1,
              msg: b[49651],
              data: res
            });
          } else {
            console.log(b[67731], res);
            SDKyyw.getCaptchaCallback({
              status: 0,
              msg: b[64518],
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

  if (typeof sucCallback == b[67597]) {
    let params = Tools.buildParams({
      yy_pf: commonParams.yy_pf,
      app_id: commonParams.gameId,
      telephone: data,
      open_id: commonParams.uid,
      captcha: smsCode,
      time: Tools.getTimeStamp()
    });
    wx.request({
      url: wanBaApi + b[67734],
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
    if (typeof SDKyyw.bindTelephoneCallback != b[67597]) {
      console.log(b[67735]);
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
        url: wanBaApi + b[67734],
        data: params,
        timeout: 3000,
        success: res => {
          if (res.data.code === 18000) {
            SDKyyw.bindTelephoneCallback({
              status: 1,
              msg: b[49651],
              data: res
            });
          } else {
            SDKyyw.bindTelephoneCallback({
              status: 0,
              msg: b[64518],
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
  let orderList = wx.getStorageSync(b[67708]);
  if (orderList.length !== 0) {
    for (let i in orderList) {
      wx.login({
        success(res) {
          orderList[i].code = res.code;
          wx.request({
            url: api + b[67736],
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
  let orderList = wx.getStorageSync(b[67708]);
  if (orderList.length !== 0) {
    for (var i in orderList) {
      if (orderList[i].gameOrderid.includes(item)) {
        orderList.splice(i, 1);
      }
    }
  }
  wx.setStorageSync(b[67708], orderList);
};

// 消息订阅
const subscribeMessage = function (tmplIds) {
  const SDKyyw = this;
  if (typeof SDKyyw.subscribeMsgCallback != b[67597]) {
    console.log(b[67737]);
  } else {
    wx.requestSubscribeMessage({
      tmplIds: tmplIds,
      success: function (res) {
        SDKyyw.subscribeMsgCallback({
          status: "1",
          msg: b[49651],
          data: res
        });
      },
      fail: function (fail) {
        SDKyyw.subscribeMsgCallback({
          status: "0",
          msg: b[64518],
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

// 广告组件
const advertisement = function (data) {
  const SDKyyw = this;
  let adData = {};
  adData.type = 11;
  adData.roleId = data.roleId;
  adData.roleName = data.roleName;
  adData.serverId = data.serverId;

  if (data.type == b[67738]) {
    if (typeof SDKyyw.createBannerAdCallback != b[67597]) {
      console.log(b[67739]);
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
        console.log(b[67740], res);
      });
      // show显示banner
      state.bannerAd.showBanner = function () {
        state.bannerAd.show().then(() => {
          console.log(b[67741]);
          // banner显示成功上报
          pushData(adData);
          SDKyyw.createBannerAdCallback({
            status: "1",
            msg: b[49651],
            data: {}
          });
        }).catch(err => {
          state.bannerAd.load();
          SDKyyw.createBannerAdCallback({
            status: "0",
            msg: b[64518],
            data: err
          });
        });
      };

      // banner广告加载失误
      state.bannerAd.onError(err => {
        console.log(b[67742], err);
        SDKyyw.createBannerAdCallback({
          status: "0",
          msg: b[64518],
          data: err
        });
      });
    }
  } else if (data.type == b[67743]) {
    if (typeof SDKyyw.rewardedVideoAdCallback != b[67597]) {
      console.log(b[67744]);
    } else {
      adData.adType = 2;
      // 创建激励视频广告实例，提前初始化
      state.videoAd = wx.createRewardedVideoAd({
        adUnitId: data.adUnitId
      });
      state.videoAd.onLoad().then(() => {
        console.log(b[67745]);
      });
      // 用户触发广告后，显示激励视频广告
      // videoAd广告显示
      state.videoAd.videoAdShow = function () {
        state.videoAd.show().then(() => {
          console.log(b[67746]);
        }).catch(err => {
          state.videoAd.load();
          SDKyyw.rewardedVideoAdCallback({
            status: "-1",
            msg: b[64518],
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
          console.log(b[67747]);

          // 正常播放完才上报
          pushData(adData);
          SDKyyw.rewardedVideoAdCallback({
            status: "1",
            msg: b[49651],
            data: res
          });
        } else {
          // 播放中途退出，不下发游戏奖励
          console.log(b[67748]);
          SDKyyw.rewardedVideoAdCallback({
            status: "0",
            msg: b[64518],
            data: res
          });
        }
      });
      // videoAd广告加载失误
      state.videoAd.onError(err => {
        console.log(b[67749], err);
        SDKyyw.rewardedVideoAdCallback({
          status: "0",
          msg: b[64518],
          data: err
        });
      });
    }
  } else if (data.type == b[67750]) {
    if (typeof SDKyyw.createInterstitialAdCallback != b[67597]) {
      console.log(b[67751]);
    } else {
      adData.adType = 3;
      // 创建插屏广告实例，提前初始化
      if (wx.createInterstitialAd) {
        state.interstitialAd = wx.createInterstitialAd({
          adUnitId: data.adUnitId
        });
        state.interstitialAd.onLoad(() => {
          console.log(b[67752]);
        });
        state.interstitialAd.interstitialAdShow = function () {
          state.interstitialAd.show().then(res => {
            console.log(b[67753], res);
            pushData(adData);
            SDKyyw.createInterstitialAdCallback({
              status: "1",
              msg: b[49651],
              data: {}
            });
          }).catch(err => {
            // -1 代表显示失败
            SDKyyw.createInterstitialAdCallback({
              status: "-1",
              msg: b[64518],
              data: err
            });
            state.videoAd.load();
          });
        };
        state.interstitialAd.onError(err => {
          console.log(b[67754], err);
          SDKyyw.createInterstitialAdCallback({
            status: "0",
            msg: b[64518],
            data: err
          });
        });
      }
    }
  } else if (data.type == b[67755]) {
    if (typeof SDKyyw.createGridAdCallback != b[67597]) {
      console.log(b[67756]);
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
        console.log(b[67757]);
      });
      // 显示state.gridAd
      state.gridAd.gridAdShow = function () {
        SDKyyw.state.gridAd.show().then(() => {
          console.log(b[67758]);
          pushData(adData);
          SDKyyw.createGridAdCallback({
            status: "1",
            msg: b[49651],
            data: {}
          });
        }).catch(err => {
          console.log(b[67759], err);
          state.gridAd.load().then(() => state.gridAd.gridAdShow()).catch(err => {
            console.log(b[67759], err);
          });
        });
      };

      state.gridAd.onError(err => {
        SDKyyw.createGridAdCallback({
          status: "0",
          msg: b[64518],
          data: err
        });
        console.log(b[67760], err);
      });
    }
  } else if (data.type == b[67761]) {
    if (typeof SDKyyw.createCustomAdCallback != b[67597]) {
      console.log(b[67762]);
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
        console.log(b[67757]);
      });
      state.customAd.customAdShow = function () {
        state.customAd.show().then(res => {
          console.log(b[67763], res);
          pushData(adData);
          SDKyyw.createCustomAdCallback({
            status: "1",
            msg: b[49651],
            data: res
          });
        }).catch(err => {
          console.log(b[67759], err);
          state.customAd.load().then(() => state.customAd.customAdShow()).catch(err => {
            console.log(b[67764], err);
          });
        });
      };
      state.customAd.onError(err => {
        SDKyyw.createCustomAdCallback({
          status: "0",
          msg: b[64518],
          data: err
        });
        console.log(b[67760], err);
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
  if (typeof SDKyyw.openDataCallback != b[67597]) {
    console.error(b[67765]);
  } else {
    if (data.type == b[67766]) {
      //好友感兴趣
      wx.getPotentialFriendList({
        keyList: data.keyList,
        success: res => {
          SDKyyw.openDataCallback({
            status: "1",
            msg: b[49651],
            data: res
          });
        },
        fail: err => {
          SDKyyw.openDataCallback({
            status: "0",
            msg: b[64518],
            data: err
          });
        }
      });
    } else if (data.type == b[67767]) {
      //群同玩成员
      wx.getGroupCloudStorage({
        shareTicket: data.shareTicket,
        keyList: data.keyList,
        success: res => {
          SDKyyw.openDataCallback({
            status: "1",
            msg: b[49651],
            data: res
          });
        },
        fail: err => {
          SDKyyw.openDataCallback({
            status: "0",
            msg: b[64518],
            data: err
          });
        }
      });
    } else if (data.type == b[67768]) {
      //当前用户同玩好友
      wx.getFriendCloudStorage({
        keyList: data.keyList,
        success: res => {
          SDKyyw.openDataCallback({
            status: "1",
            msg: b[49651],
            data: res
          });
        },
        fail: err => {
          SDKyyw.openDataCallback({
            status: "0",
            msg: b[64518],
            data: err
          });
        }
      });
    }
  }
};

//米大师支付成功后通知后端结果
const sendResult = function (params) {
  console.log(b[67769], params);
  wx.login({
    success(res) {
      params.code = res.code;
      params.paytype = 3;
      wx.request({
        url: api + b[67770],
        data: Tools.buildPayParams(params),
        success(res) {
          console.log(b[67771], res);
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
  let deviceType = b[67691];
  if (osType == b[67690]) {
    deviceType = 2;
  } else if (osType == b[67689]) {
    deviceType = 1;
  } else if (osType == b[49535]) {
    deviceType = 3;
  }

  if (typeof this.onPayCallback != b[67597]) {
    console.error(b[67772]);
  } else {
    console.log(b[67773], commonParams);
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
      title: b[67774],
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
        console.log(b[67775], res.code);
        wx.request({
          url: api + b[67770],
          data: Tools.buildPayParams(params),
          success: payRes => {
            let orderList = wx.getStorageSync(b[67708]);
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
              mode: b[67776]
            };
            orderList.push(item);

            console.log(b[67777], payRes.data);
            wx.hideLoading();
            let ret = payRes.data;
            commonParams.payType = ret.paytype;
            if (payRes.data.status == 1) {
              SDKyyw.onPayCallback({
                status: "1",
                msg: b[67778]
              });
              wx.hideLoading();
              switch (commonParams.payType) {
                case 0:
                  wx.showModal({
                    title: b[44178],
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
                        title: b[44178],
                        content: b[67779],
                        showCancel: false,
                        confirmText: b[67780],
                        confirmColor: b[67781]
                      });
                    }
                  });
                  break;
                case 2:
                  //客服支付
                  // if (ret.start == "0") {
                  let path = b[67782];
                  wx.showModal({
                    title: b[44178],
                    content: b[67783],
                    showCancel: false,
                    confirmText: b[49344],
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
                      zoneId: '1',
                      mode: b[67776],
                      env: ret.data.env,
                      offerId: ret.data.offerId,
                      currencyType: b[67784],
                      platform: b[67689],
                      buyQuantity: ret.data.amt,
                      success(res) {
                        wx.setStorageSync(b[67708], orderList);
                        sendResult(params);
                      },
                      complete(com) {
                        console.log(b[67785], com);
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
                    path: b[67786],
                    envVersion: b[67724],
                    extraData: Minidata,
                    success: function (res) {
                      console.log(b[67787], res);
                    },
                    fail: function (err) {
                      console.log(b[67788], err);
                      wx.request({
                        url: b[67789] + commonParams.gameId + b[67790] + err.errMsg,
                        success(res) {
                          console.log(b[67791], res);
                        }
                      });
                    },
                    complete: function (com) {
                      console.log(b[67792], com);
                    }
                  });
                  break;
              }
            } else {
              SDKyyw.onPayCallback({
                status: "0",
                msg: b[67793]
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
  if (typeof SDKyyw.getWhatsNewSubscriptionsSettingCallback != b[67597]) {
    console.log(b[67794]);
  } else {
    wx.getWhatsNewSubscriptionsSetting({
      msgType: data.msgType, // 消息类型，1=游戏更新提醒，目前只有这种类型
      success(res) {
        // res.status说明 0未知状态 1未订阅，可以发起订阅 2用户已订阅该类型消息 3超过频率限制，暂时不允许发起订阅 4没有权限或已封禁
        SDKyyw.getWhatsNewSubscriptionsSettingCallback({
          code: "1",
          msg: b[49651],
          data: res
        });
      },
      fail(err) {
        SDKyyw.getWhatsNewSubscriptionsSettingCallback({
          code: "0",
          msg: b[64518],
          data: err
        });
      }
    });
  }
};

// 请求订阅游戏更新提醒
const requestSubscribeWhatsNew = function (data) {
  const SDKyyw = this;
  if (typeof SDKyyw.requestSubscribeWhatsNewCallback != b[67597]) {
    console.log(b[67795]);
  } else {
    wx.requestSubscribeWhatsNew({
      msgType: data.msgType, // 消息类型，1=游戏更新提醒，目前只有这种类型
      success(res) {
        SDKyyw.requestSubscribeWhatsNewCallback({
          code: "1",
          msg: b[49651],
          data: res
        });
      },
      fail(err) {
        // errCode说明 1系统错误 2用户已订阅该类型消息 3超过频率限制，暂时不允许发起订阅 4没有权限或已封禁
        SDKyyw.requestSubscribeWhatsNewCallback({
          code: "0",
          msg: b[64518],
          data: err
        });
      }
    });
  }
};

// 获取红包开关 + 区服活动配置判断 + 抽奖活动状态
const getRedPagState = function (data) {
  const SDKyyw = this;
  if (typeof SDKyyw.getRedPagStateCallback != b[67597]) {
    console.log(b[67796]);
  } else {
    if (commonParams.showRedPagOn) {
      wx.request({
        url: wxRedApi + b[67797],
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
          console.log(b[67798], err);
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
  if (typeof SDKyyw.redLoginCallback != b[67597]) {
    console.log(b[67799]);
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
              url: wxRedApi + b[67800],
              method: b[44444],
              data: Tools.buildRedParams(params),
              header: {
                "Content-Type": b[67801]
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
                console.log(b[56041], err);
              },
              complete(res) {
                httpLock.httpRedLoginFlag = false;
              },
              timeout: 4000
            });
          }
        } else {
          console.log(b[67802] + res.errMsg);
        }
      }
    });
  }
};

// 获取用户信息
const getWxUserInfo = function () {
  const SDKyyw = this;
  if (typeof SDKyyw.getWxUserInfoCallback != b[67597]) {
    console.log(b[67803]);
  } else {
    const params = {
      app_id: commonParams.gameId,
      token: commonParams.token
    };
    wx.request({
      url: wxRedApi + b[67804],
      data: Tools.buildRedParams(params),
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
        console.log(b[56041], err);
      },
      timeout: 4000
    });
  }
};

// 红包列表
const getRedPackageList = function () {
  const SDKyyw = this;
  if (typeof SDKyyw.getRedPackageListCallback != b[67597]) {
    console.log(b[67805]);
  } else {
    const params = {
      app_id: commonParams.gameId,
      token: commonParams.token
    };
    if (!httpLock.httpRedListFlag) {
      httpLock.httpRedListFlag = true;
      wx.request({
        url: wxRedApi + b[67806],
        data: Tools.buildRedParams(params),
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
          console.log(b[56041], err);
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
  if (typeof SDKyyw.getRedConfigCallback != b[67597]) {
    console.log(b[67807]);
  } else {
    const params = {
      app_id: commonParams.gameId,
      token: commonParams.token
    };
    wx.request({
      url: wxRedApi + b[67808],
      data: Tools.buildRedParams(params),
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
        console.log(b[56041], err);
      },
      timeout: 4000
    });
  }
};

// 领取红包
const toReceiveRedPackage = function (data) {
  const SDKyyw = this;
  if (typeof SDKyyw.toReceiveRedPackageCallback != b[67597]) {
    console.log(b[67809]);
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
        url: wxRedApi + b[67810],
        method: b[44444],
        data: Tools.buildRedParams(params),
        header: {
          "Content-Type": b[67801]
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
          console.log(b[67811], err);
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
  if (typeof SDKyyw.getRedDetailListCallback != b[67597]) {
    console.log(b[67812]);
  } else {
    const params = {
      app_id: commonParams.gameId,
      token: commonParams.token
    };
    wx.request({
      url: wxRedApi + b[67813],
      data: Tools.buildRedParams(params),
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
        console.log(b[67811], err);
      },
      timeout: 4000
    });
  }
};

// 去提现
const toWithdraw = function (data) {
  const SDKyyw = this;
  if (typeof SDKyyw.toWithdrawCallback != b[67597]) {
    console.log(b[67814]);
  } else {
    const params = {
      withdraw_amount: data.withdraw_amount,
      app_id: commonParams.gameId,
      token: commonParams.token
    };
    if (!httpLock.httpToWithdraw) {
      httpLock.httpToWithdraw = true;
      wx.request({
        url: wxRedApi + b[67815],
        data: Tools.buildRedParams(params),
        method: b[44444],
        header: {
          "Content-Type": b[67801]
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
          console.log(b[67811], err);
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
    url: wxRedApi + b[67816],
    data: Tools.buildRedParams(params),
    success(res) {
      let ret = res.data;
      console.log(b[67817], ret);
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
      console.log(b[67811], err);
    },
    timeout: 4000
  });
};

// 红包分享成功邀请用户列表
const getShareList = function (data) {
  const SDKyyw = this;
  if (typeof SDKyyw.getShareListCallback != b[67597]) {
    console.log(b[67818]);
  } else {
    const params = {
      activity_id: data.share_activity_id,
      app_id: commonParams.gameId,
      token: commonParams.token
    };
    wx.request({
      url: wxRedApi + b[67819],
      data: Tools.buildRedParams(params),
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
        console.log(b[67811], err);
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
          url: wxRedApi + b[67820],
          data: Tools.buildRedParams(params),
          success(res) {
            let ret = res.data;
            console.log(b[67821], ret.data, ret.msg);
          },
          fail(err) {
            console.log(b[67822], err);
          },
          timeout: 4000
        });
      } else {
        console.log(b[67713], res);
      }
    }
  });
};

// 红包抽奖首页
const getLuckDrawIndex = function () {
  const SDKyyw = this;
  if (typeof SDKyyw.getLuckDrawIndexCallback != b[67597]) {
    console.log(b[67823]);
  } else {
    const params = {
      app_id: commonParams.gameId,
      token: commonParams.token,
      activity_id: commonParams.luck_draw_activity_id
    };
    if (!httpLock.httpLuckDrawIndex) {
      httpLock.httpLuckDrawIndex = true;
      wx.request({
        url: wxRedApi + b[67824],
        data: Tools.buildRedParams(params),
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
          console.log(b[67811], err);
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
  if (typeof SDKyyw.luckyDrawCallback != b[67597]) {
    console.log(b[67825]);
  } else {
    const params = {
      app_id: commonParams.gameId,
      token: commonParams.token,
      activity_id: commonParams.luck_draw_activity_id
    };
    if (!httpLock.httpLuckDrawFlag) {
      httpLock.httpLuckDrawFlag = true;
      wx.request({
        url: wxRedApi + b[67826],
        data: Tools.buildRedParams(params),
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
          console.log(b[67811], err);
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
  if (typeof SDKyyw.getSquareListCallback != b[67597]) {
    console.log(b[67827]);
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
        url: wxRedApi + b[67828],
        data: Tools.buildRedParams(params),
        success(res) {
          let ret = res.data;
          console.log(b[67829], ret);
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
      url: wxRedApi + b[67830],
      data: Tools.buildRedParams(params),
      success(res) {
        console.log(b[67831], res);
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
      console.log(b[67832], params);
      wx.request({
        url: wxRedApi + b[67833],
        data: params,
        timeout: 5000,
        success: res => {
          console.log(b[67834], res);
        }
      });
    }
  });
};

// 去提现
const gameWithdraw = function (data) {
  const SDKyyw = this;
  if (typeof SDKyyw.gameWithdrawCallback != b[67597]) {
    console.log(b[67835]);
  } else {
    const params = {
      app_id: commonParams.gameId,
      withdraw_amount: data.withdraw_amount,
      open_id: commonParams.uid
    };
    if (!httpLock.httpGameWithdraw) {
      httpLock.httpGameWithdraw = true;
      wx.request({
        url: wxRedApi + b[67836],
        data: Tools.buildRedParams(params),
        method: b[44444],
        header: {
          "Content-Type": b[67801]
        },
        success(res) {
          let ret = res.data;
          SDKyyw.gameWithdrawCallback(ret);
        },
        fail(err) {
          SDKyyw.gameWithdrawCallback(err);
          console.log(b[67811], err);
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
  if (typeof SDKyyw.toCouponReceiveCallback != b[67597]) {
    console.log(b[67837]);
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
        url: wxRedApi + b[67838],
        data: Tools.buildRedParams(params),
        method: b[44444],
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
  if (typeof SDKyyw.getChangeShellOnCallback != b[67597]) {
    console.log(b[67839]);
  } else {
    commonParams.gameId = appid;
    commonParams.gameKey = appkey;
    const accountInfo = wx.getAccountInfoSync();
    console.log(b[67702], accountInfo);
    console.log(b[67703], accountInfo.miniProgram.envVersion);
    commonParams.envVersion = accountInfo.miniProgram.envVersion;
    wx.request({
      url: api + b[67840],
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
      content: commonParams.appContent || b[67841],
      cancelText: b[67842],
      confirmText: b[67843],
      success(res) {
        if (res.confirm) {
          wx.openCustomerServiceConversation({
            showMessageCard: true,
            sendMessageTitle: commonParams.sendMessageTitle,
            sendMessageImg: commonParams.sendMessageImg,
            complete(res) {
              console.log(b[67844], res);
            }
          });
        } else if (res.cancel) {
          console.log(b[67845]);
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
      console.log(b[67844], res);
    }
  });
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
      url: api + b[67846],
      data: Tools.buildCheckMsg(params),
      success(res) {
        console.log(b[67847], res);
        callback(res.data);
      }
    });
  } else {
    callback({
      err: 0,
      msg: b[67848]
    });
  }
};

// 直播
const gameLive = {
  // 开启直播
  startGameLive() {
    const SDKyyw = this;
    if (typeof SDKyyw.startGameLiveCallback != b[67597]) {
      console.log(b[67849]);
      return;
    }
    wx.startGameLive({
      success(res) {
        SDKyyw.startGameLiveCallback({
          status: "1",
          msg: "",
          data: res
        });
        console.log(b[67850], res);
      },
      fail(err) {
        console.error(b[67850], err);
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
    if (typeof SDKyyw.checkGameLiveEnabledCallback != b[67597]) {
      console.log(b[67851]);
      return;
    }
    wx.checkGameLiveEnabled({
      success(res) {
        SDKyyw.checkGameLiveEnabledCallback({
          status: "1",
          msg: "",
          data: res
        });
        console.log(b[67852], res);
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
    if (typeof SDKyyw.onGameLiveStateChangeCallback != b[67597]) {
      console.log(b[67853]);
      return;
    }
    wx.onGameLiveStateChange(res => {
      // if (res.state === "menuClick") {
      //   return {};
      // }
      if (res.state === b[40286]) {
        wx.getUserRecentGameLiveInfo({
          success(res) {
            // feedIdList	Array.string	最近几场直播的 feedId 列表
            if (res.feedIdList) {
              console.log(b[67854], res);
              wx.getUserGameLiveDetails({
                feedIdList: [res.feedIdList[0]],
                success(res) {
                  console.log(b[67855], res);
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
                          console.log(b[67713]);
                        } else {
                          params.code = res.code;
                          wx.request({
                            url: wxRedApi + b[67856],
                            method: b[44444],
                            data: Tools.buildRedParams(params),
                            success(res) {
                              console.log(b[67857], res);
                            },
                            fail(err) {
                              console.log(b[67858], err);
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
    if (typeof SDKyyw.getGameLiveStateCallback != b[67597]) {
      console.log(b[67859]);
      return;
    }
    const state = wx.getGameLiveState();
    // isLive	boolean	是否正在直播
    SDKyyw.getGameLiveStateCallback(state);
    console.log(b[67860], state);
  },
  // 获取小游戏用户当前正在直播的信息（可查询当前直播的 feedId）
  getUserCurrentGameliveInfo() {
    const SDKyyw = this;
    if (typeof SDKyyw.getUserCurrentGameliveInfoCallback != b[67597]) {
      console.log(b[67861]);
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
        console.log(b[67862], res);
      },
      fail(err) {
        console.log(b[67862], err);

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
    if (typeof SDKyyw.getUserRecentGameLiveInfoCallback != b[67597]) {
      console.log(b[67863]);
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
        console.log(b[67864], res);
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
    if (typeof SDKyyw.getUserGameLiveDetailsCallback != b[67597]) {
      console.log(b[67865]);
      return;
    }
    if (!data.feedIdList) {
      console.log(b[67866]);
      return;
    }
    wx.getUserGameLiveDetails({
      feedIdList: data.feedIdList,
      success(res) {
        console.log(b[67867], res);
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
    if (typeof SDKyyw.getChannelsLiveNoticeInfoCallback != b[67597]) {
      console.log(b[67868]);
      return;
    }
    if (!data.finderUserName) {
      console.log(b[67869]);
      return;
    }
    wx.getChannelsLiveNoticeInfo({
      finderUserName: data.finderUserName || "",
      feedId: data.feedId || "",
      nonceId: data.nonceId || "",
      success(res) {
        console.log(b[67870], res);
        SDKyyw.getChannelsLiveNoticeInfoCallback({
          status: "1",
          msg: "",
          data: res
        });
      },
      fail(err) {
        console.log(b[67870], err);
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
    if (typeof SDKyyw.getChannelsLiveInfoCallback != b[67597]) {
      console.log(b[67871]);
      return;
    }
    if (!data.finderUserName) {
      console.log(b[67869]);
      return;
    }
    wx.getChannelsLiveInfo({
      finderUserName: data.finderUserName, // 视频id
      success: function (res) {
        console.log(b[67872], res);
        SDKyyw.getChannelsLiveInfoCallback({
          status: "1",
          msg: "",
          data: res
        });
      },
      fail: function (err) {
        console.log(b[67872], err);
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
    if (typeof SDKyyw.openChannelsLiveCallback != b[67597]) {
      console.log(b[67873]);
      return;
    }
    if (!data.finderUserName) {
      console.log(b[67869]);
      return;
    }
    wx.openChannelsLive({
      finderUserName: data.finderUserName,
      success: function (res) {
        console.log(b[67874], res);
        SDKyyw.openChannelsLiveCallback({
          status: "1",
          msg: "",
          data: res
        });
      },
      fail: function (err) {
        console.log(b[67874], err);
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

    if (typeof SDKyyw.reserveChannelsLiveCallback != b[67597]) {
      console.log(b[67875]);
      return;
    }
    if (!data.noticeId) {
      console.log(b[67876]);
      return;
    }
    wx.reserveChannelsLive({
      noticeId: data.noticeId || "",
      success(res) {
        console.log(b[67877], res);
        SDKyyw.reserveChannelsLiveCallback({
          status: "1",
          msg: "",
          data: res
        });
      },
      fail(err) {
        console.log(b[67877], err);
        SDKyyw.reserveChannelsLiveCallback({
          status: "0",
          msg: "",
          data: err
        });
      }
    });
  }
};

const pushData = function (data) {
  if (data.type != "0") {
    data.accountId = commonParams.uid;
    data.appId = commonParams.gameId;
    data.appVersion = b[67706];
    data.platform = b[67707];
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
    data.logType = b[67775];
    data.region = "0";
    data.channelAccid = commonParams.uid;
    delete data[b[67878]];
    delete data[b[67879]];
    //accountId serverId
  } else if (data.type == "2") {
    //创建角色或者账号
    if (!data.roleId) {
      console.log(b[67880]);
    }
    if (!data.roleName) {
      console.log(b[67881]);
    }

    data.logType = b[67882];
    data.region = "0";
    data.channelAccid = commonParams.uid;
    delete data[b[67878]];
    delete data[b[67879]];
    //accountId serverId  roleId roleName level vipLevel
  } else if (data.type == "4") {
    if (!data.roleId) {
      console.log(b[67880]);
    }
    if (!data.roleName) {
      console.log(b[67881]);
    }
    data.logType = b[67883]; //升级
    data.region = "0";
    data.levelType = "1";
    data.duration = "0";
    data.channelAccid = commonParams.uid;
    delete data[b[67884]];
    //accountId00  roleID00   roleName00 level00 vipLevel00   startLevel00 endLevel00
  } else if (data.type == "5") {
    data.logType = b[67885]; //在线
    delete data[b[67886]];
    delete data[b[67887]];
    delete data[b[67695]];
    delete data[b[67888]];
    delete data[b[64519]];
    delete data[b[67889]];
    delete data[b[67890]];
    //accountId serverId  roleID  roleName
  } else if (data.type == 6) {
    // 分享
    data.logType = b[67891];
    delete data[b[67886]];
    delete data[b[67887]];
    delete data[b[67695]];
    delete data[b[67888]];
    delete data[b[64519]];
    delete data[b[67889]];
    delete data[b[67890]];
    // data.channelAccid = commonParams.uid;
    data.shareType = "1";
  } else if (data.type == 9) {
    // 自定义事件
    data.logType = b[40499];
    delete data[b[67886]];
    delete data[b[67887]];
    delete data[b[67892]];
    delete data[b[67695]];
    delete data[b[67888]];
    delete data[b[64519]];
    delete data[b[67889]];
    delete data[b[67890]];
    delete data[b[67696]];
  } else if (data.type == 10) {
    data.logType = b[67893]; // 游戏关卡
    data.channelAccid = commonParams.uid;
  } else if (data.type == 11) {
    data.logType = b[67894]; // 广告
    data.channelAccid = commonParams.uid;
  }
  delete data[b[40102]];
  wx.request({
    url: logApi + b[67895],
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
      console.log(b[67896] + str, b[67897]);
    } else if (level == state.level.warn) {
      console.log(b[67898] + str, b[67899]);
    } else if (level == state.level.debug) {
      console.log(b[67900] + str, b[67899]);
    } else {
      console.log(b[67901] + str, b[67899]);
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
  toQQGroup: toQQGroup
};