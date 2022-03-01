const state = { initStatus: "default", loginStatus: "default", videoAd: null, bannerAd: null, gridAd: null, interstitialAd: null, customAd: null };const commonParams = { referer: "00000_0", partner: "309", mac: "", imei: "", gameId: "", gameKey: "", uid: "", unionId: "", code: "", openid: "", wxid: "", ip: "", sign: "", payType: "", encryptedData: "", iv: "", scene: "", query: "", yy_pf: "WxApp", payTip: "\u7531\u4e8e\u653f\u7b56\u539f\u56e0\uff0c\u6682\u65e0\u6cd5\u652f\u4ed8\uff0c\u82e5\u9700\u8981\u5145\u503c\uff0c\u8bf7\u5c06\u6e38\u620f\u5206\u4eab\u5230\u5fae\u4fe1\uff0c\u5728\u5fae\u4fe1PC\u7248\u6253\u5f00\u6e38\u620f\u8fdb\u884c\u5145\u503c", accountInfo: {}, envVersion: "", showAppOn: "", sendMessageImg: "", sendMessageTitle: "", referrerInfo: null, switchApp: "", showSwitchOn: "", showRedPagOn: "", token: "", showSquareOn: "", initTimer: "", sdkLoginTimer: "", feedId: "", finderUserName: "", QQGroup: {} };let httpLock = { httpRedListFlag: !1, httpReceiveRedPackageFlag: !1, httpLuckDrawFlag: !1, httpRedLoginFlag: !1, httpToWithdraw: !1, httpLuckDrawIndex: !1, httpSquareListFlag: !1, httpSquareClickFlag: !1, httpGameWithdraw: !1, httpToCouponReceiveFlag: !1, httpLiveTaskFlag: !1, httpToLiveTaskReceiveFlag: !1, httpGetUserLiveInfoFlag: !1 };var sdkParams = null;state.debug = !0, state.level = { debug: 0, info: 1, warn: 2, error: 3 };let api = "https://sdk-js.rpgmoba.com";let wanBaApi = "https://wanba.rpgmoba.com/";let logApi = "https://sdk-data.rpgmoba.com";let wxRedApi = "https://idk.rpgmoba.com/";const Tools = { getDeviceType: () => {
    const e = wx.getSystemInfoSync();let a;return a = -1 < e.system.toLowerCase().indexOf("android") ? "android" : -1 < e.system.toLowerCase().indexOf("ios") ? "ios" : -1 < e.system.toLowerCase().indexOf("win") ? "win" : "unknow";
  }, getTimeStamp: () => Date.parse(new Date()) / 1e3, buildActiveParams: (e, a) => {
    let t = "";for (var o in e) t += e[o];return t += a, e.sign = md5(t), e;
  }, buildChangeShell: (e, a) => {
    let t = "";for (var o in e) t += e[o];return t += a, e.sign = md5(t), e;
  }, buildLoginParams: e => {
    var a = ["deviceno", "gameid", "partner", "referer", "time"];let t = "";for (var o in a) {
      o = a[o];t += e[o];
    }return t += commonParams.gameKey, e.sign = md5(t), e;
  }, buildBindParams: e => {
    var a = ["gameid", "from_app_id", "from_openid", "time"];let t = "";for (var o in a) {
      o = a[o];t += e[o];
    }return t += commonParams.gameKey, e.sign = md5(t), e;
  }, buildPayParams: e => {
    var a = ["gameid", "deviceno", "partner", "uid", "money", "time"];let t = "";for (var o in a) {
      o = a[o];t += e[o];
    }return t = t + commonParams.gameKey + commonParams.wxid, e.sign = md5(t), e;
  }, buildRepublish: e => {
    var a = ["uid", "gameid", "deviceno", "partner", "time"];let t = "";for (var o in a) {
      o = a[o];t += e[o];
    }return md5(t = t + commonParams.gameKey + commonParams.wxid).toLowerCase();
  }, buildCheckMsg(e) {
    var a = ["gameid", "partner", "deviceno", "time"];let t = "";for (var o in a) {
      o = a[o];t += e[o];
    }return t += commonParams.gameKey, e.sign = md5(t).toLowerCase(), e;
  }, getDeviceTypeId: () => {
    var e = Tools.getDeviceType();let a = "unknow";return "ios" == e ? a = 1 : "android" == e ? a = 2 : "win" == e && (a = 3), a;
  }, buildParams: e => {
    let a = "";const t = [];for (var o in e) t.push(o);for (var s in t.sort()) a += e[t[s]];return a += commonParams.gameKey, e.sign = md5(a), e;
  }, serialize: e => {
    var a = [];for (var t in e) e.hasOwnProperty(t) && e[t] && a.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));return a.join("&");
  }, buildRedParams: e => {
    let a = "";for (var t of Object.keys(e).sort()) e[t] instanceof Array ? a += t + "=" + encodeURIComponent(JSON.stringify(e[t])) + "&" : a += t + "=" + encodeURIComponent(e[t]) + "&";return a += "key=" + commonParams.gameKey, e.sign = md5(a), e;
  }, initLock: e => {
    for (var a in e) e[a] = !1;
  } };const init = function (e, a) {
  var t, o;"function" != typeof this.initLoginCallback ? console.error("\u6ca1\u6709\u5b9e\u73b0 initLoginCallback \u521d\u59cb\u5316\u56de\u8c03") : (sdkParams = Tools.buildActiveParams({ gameid: e, referer: commonParams.referer, partner: commonParams.partner, mac: commonParams.mac, imei: commonParams.imei, time: Tools.getTimeStamp() }, a), t = wx.getLaunchOptionsSync(), commonParams.gameId = e, commonParams.gameKey = a, commonParams.scene = t.scene, commonParams.query = t.query, o = wx.getAccountInfoSync(), console.log("accountInfo: ", o), console.log("miniProgram: ", o.miniProgram.envVersion), commonParams.envVersion = o.miniProgram.envVersion, t.query && t.query.share_id && shareBind(t.query), commonParams.referrerInfo = t.referrerInfo, commonParams.extraData = t.referrerInfo.extraData, (o = t.referrerInfo.extraData) && o.from_app_id && o.from_openid && (o = { from_app_id: o.from_app_id, from_openid: o.from_openid }, toBind(o)), console.log("launchOption=", t), active(this, sdkParams, e, a));
};const active = function (a, t, o, s) {
  wx.request({ url: api + "/pay/Active", data: t, timeout: 3e3, success: e => {
      e = e.data;if (console.log("active", e), 1 == e.data.code) {
        if (commonParams.gameId = o, commonParams.gameKey = s, state.initStatus = "success", commonParams.gameId) {
          let e = {};e.logType = "active", e.appId = commonParams.gameId, e.appVersion = "1.0.0", e.platform = "wxxyx", e.source = commonParams.query.source || "", e.source_type = commonParams.query.source_type || "", pushData(e);
        }wx.showShareMenu({ withShareTicket: !0 }), wx.setStorageSync("orderList", []), wxLogin(a);
      } else state.initStatus = "fail", console.log("\u4f20\u5165\u7684sdk\u53c2\u6570\u6709\u8bef", "gameId:" + o, "gameKey:" + s), commonParams.initTimer && clearTimeout(commonParams.initTimer), commonParams.initTimer = setTimeout(() => {
        active(a, t, o, s);
      }, 2e3);
    }, fail: e => {
      console.log("\u91cd\u65b0\u521d\u59cb\u5316"), commonParams.initTimer && clearTimeout(commonParams.initTimer), wx.request({ url: "https://sdk-js.youyigame.com/pay/active/config", timeout: 5e3, success: e => {
          1 === (e = e.data).status && (console.log("\u5207\u6362\u57df\u540d", e.data.host), api = "https://sdk-js." + e.data.host, wanBaApi = `https://wanba.${e.data.host}/`, logApi = "https://sdk-data." + e.data.host, wxRedApi = `https://idk.${e.data.host}/`), commonParams.initTimer = setTimeout(() => {
            active(a, t, o, s);
          });
        }, fail: () => {
          commonParams.initTimer = setTimeout(() => {
            active(a, t, o, s);
          }, 2e3);
        } });
    } });
};const wxLogin = function (a) {
  wx.login({ success: e => {
      null == e.code || null == e.code || "" == e.code ? (console.log("\u5fae\u4fe1\u767b\u5f55\u5931\u8d25code is null:"), wxLogin(a)) : (e = e.code, wx.getSetting({ complete(e) {
          e.authSetting["scope.userInfo"] && wx.getUserInfo({ success(e) {
              console.log("res", e), commonParams.iv = e.iv, commonParams.encryptedData = e.encryptedData;
            } });
        } }), e = { gameid: commonParams.gameId, referer: commonParams.referer, partner: commonParams.partner, mac: commonParams.mac, imei: commonParams.imei, deviceno: commonParams.imei, time: Tools.getTimeStamp(), code: e, iv: commonParams.iv, osType: "ios" == Tools.getDeviceType() ? "2" : "android" == Tools.getDeviceType() ? "1" : "win" == Tools.getDeviceType() ? "3" : "unknow", os: Tools.getDeviceType(), encryptedData: commonParams.encryptedData, scene: commonParams.scene, query: JSON.stringify(commonParams.query), envVersion: commonParams.envVersion, referrerInfo: commonParams.referrerInfo }, console.log("sdkLogin", e), sdkLogin(a, e));
    }, fail: e => {
      wxLogin(a), console.log("\u5fae\u4fe1\u767b\u5f55\u5931\u8d25:", e);
    } });
};const sdkLogin = function (t, e) {
  wx.request({ url: api + "/pay/Login/", data: Tools.buildLoginParams(e), timeout: 3e3, success: e => {
      var a = e.data;if (1 == a.status) {
        if (commonParams.uid = a.data.uid, commonParams.payType = a.data.payType, commonParams.wxid = a.data.wxid, commonParams.referer = a.data.referer, commonParams.sign = a.data.sign, commonParams.switchApp = a.data.switchApp, commonParams.showSwitchOn = a.data.showSwitchOn, commonParams.switchEnv = a.data.switchEnv, commonParams.showRedPagOn = a.data.showRedPagOn, commonParams.showAppOn = a.data.showAppOn, commonParams.appTitle = a.data.appTitle, commonParams.appContent = a.data.appContent, commonParams.sendMessageImg = a.data.sendMessageImg, commonParams.sendMessageTitle = a.data.sendMessageTitle, commonParams.unionId = a.data.unionId, commonParams.showSquareOn = a.data.showSquareOn, commonParams.QQGroup = a.data.QQGroup, commonParams.JumpGameState = a.data.JumpGameState, console.log("\u5fae\u4fe1\u8df3\u8f6c\u4fe1\u606f", commonParams.referrerInfo), commonParams.finderUserName = a.data.live && a.data.live.finderUserName, commonParams.extraData && commonParams.extraData.square && commonParams.extraData.square.square_id && squareBind({ square_id: commonParams.extraData.square.square_id, source_app_id: commonParams.extraData.square.source_app_id, source_open_id: commonParams.extraData.square.source_open_id }), 0 === a.data.payType && (commonParams.payTip = a.data.payTip), state.loginStatus = "success", commonParams.uid) {
          let e = {};e.type = "1", pushData(e);
        }if (replenish(), 1 == a.data.isNewUser) {
          let e = {};e.logType = "accountCreate", e.appId = commonParams.gameId, e.appVersion = "1.0.0", e.accountId = commonParams.uid, e.deviceType = Tools.getDeviceTypeId(), e.platform = "wxxyx", e.serverId = "", e.channel = commonParams.partner, e.imei = commonParams.uid, e.sex = "0", e.resolution = wx.getSystemInfoSync().screenWidth + "*" + wx.getSystemInfoSync().screenHeight, e.deviceName = wx.getSystemInfoSync().model, e.systemName = wx.getSystemInfoSync().system, e.source = commonParams.query.source || "", e.source_type = commonParams.query.source_type || "", pushData(e);
        }console.log("uid", a.data.uid), console.log("SDK\u767b\u5f55", a), t.initLoginCallback(a);
      } else console.log("SDK\u767b\u5f55\u5931\u8d25\u91cd\u65b0\u767b\u5f55", e), commonParams.sdkLoginTimer && clearTimeout(commonParams.sdkLoginTimer), commonParams.sdkLoginTimer = setTimeout(() => {
        wxLogin(t);
      }, 2e3);
    }, fail: e => {
      console.log("SDK\u767b\u5f55\u9519\u8bef:", e), commonParams.sdkLoginTimer && clearTimeout(commonParams.sdkLoginTimer), commonParams.sdkLoginTimer = setTimeout(() => {
        wxLogin(t);
      }, 2e3);
    } });
};const jumpState = function () {
  return 1 == commonParams.showSwitchOn;
};const cutGame = function () {
  const a = this;"function" != typeof a.cutGameCallback ? console.log("cutGameCallback\u5fc5\u987b\u662f\u4e00\u4e2afunction") : wx.navigateToMiniProgram({ appId: commonParams.switchApp, extraData: { from_app_id: commonParams.gameId || "", from_openid: commonParams.uid || "" }, envVersion: commonParams.switchEnv || "release", success(e) {
      console.log("\u8df3\u8f6c\u6e38\u620f", e), a.cutGameCallback({ status: 1, msg: "success", data: e });
    }, fail(e) {
      console.log("\u8df3\u8f6c\u6e38\u620f\u5931\u8d25", e), a.cutGameCallback({ status: 0, msg: "fail", data: e });
    } });
};const toBind = function (a) {
  wx.login({ success(e) {
      e = Tools.buildBindParams({ gameid: commonParams.gameId, code: e.code, from_app_id: a.from_app_id, from_openid: a.from_openid, osType: Tools.getDeviceTypeId(), scene: commonParams.scene, query: JSON.stringify(commonParams.query), time: Tools.getTimeStamp() });wx.request({ url: api + "/pay/login/bind", data: e, timeout: 3e3, success: e => {
          console.log("\u7ed1\u5b9a\u4e3b\u6e38\u620f", e.data);
        } });
    } });
};const isJumpGame = function () {
  return commonParams.JumpGameState;
};const getCaptcha = function (e, a, t) {
  const o = this;var s;"function" == typeof a ? (s = Tools.buildParams({ yy_pf: commonParams.yy_pf, app_id: commonParams.gameId, telephone: e, open_id: commonParams.uid, use: "bind", time: Tools.getTimeStamp() }), wx.request({ url: wanBaApi + "/sdk/get_captcha", data: s, timeout: 3e3, success: e => {
      18e3 === e.data.code ? (console.log("\u83b7\u53d6\u77ed\u4fe1\u9a8c\u8bc1\u7801\u6210\u529f", e), a(e)) : (console.log("\u83b7\u53d6\u77ed\u4fe1\u9a8c\u8bc1\u7801\u9519\u8bef", e), t(e));
    }, error: e => {
      console.log("\u83b7\u53d6\u77ed\u4fe1\u9a8c\u8bc1\u7801\u8bf7\u6c42\u8d85\u65f6", e);
    } })) : "function" != typeof o.getCaptchaCallback ? console.log("getCaptchaCallback\u5fc5\u987b\u662f\u4e00\u4e2afunction") : (s = Tools.buildParams({ yy_pf: commonParams.yy_pf, app_id: commonParams.gameId, telephone: e.telephone, open_id: commonParams.uid, use: "bind", time: Tools.getTimeStamp() }), wx.request({ url: wanBaApi + "/sdk/get_captcha", data: s, timeout: 3e3, success: e => {
      18e3 === e.data.code ? (console.log("\u83b7\u53d6\u77ed\u4fe1\u9a8c\u8bc1\u7801\u6210\u529f", e), o.getCaptchaCallback({ status: 1, msg: "success", data: e })) : (console.log("\u83b7\u53d6\u77ed\u4fe1\u9a8c\u8bc1\u7801\u9519\u8bef", e), o.getCaptchaCallback({ status: 0, msg: "fail", data: e }));
    } }));
};const bindTelephone = function (e, a, t, o) {
  const s = this;"function" == typeof t ? (a = Tools.buildParams({ yy_pf: commonParams.yy_pf, app_id: commonParams.gameId, telephone: e, open_id: commonParams.uid, captcha: a, time: Tools.getTimeStamp() }), wx.request({ url: wanBaApi + "/sdk/bind_telephone", data: a, timeout: 3e3, success: e => {
      (18e3 === e.data.code ? t : o)(e);
    } })) : "function" != typeof s.bindTelephoneCallback ? console.log("bindTelephoneCallback\u5fc5\u987b\u662f\u4e00\u4e2afunction") : (a = Tools.buildParams({ yy_pf: commonParams.yy_pf, app_id: commonParams.gameId, telephone: e.telephone, open_id: commonParams.uid, captcha: e.captcha, time: Tools.getTimeStamp() }), wx.request({ url: wanBaApi + "/sdk/bind_telephone", data: a, timeout: 3e3, success: e => {
      18e3 === e.data.code ? s.bindTelephoneCallback({ status: 1, msg: "success", data: e }) : s.bindTelephoneCallback({ status: 0, msg: "fail", data: e });
    } }));
};const replenish = function () {
  let t = wx.getStorageSync("orderList");if (0 !== t.length) for (let a in t) wx.login({ success(e) {
      t[a].code = e.code, wx.request({ url: api + "/pay/Order/supplement", data: t[a], success(e) {
          1 == e.data.status && 1 == e.data.data.status && deleteItme(e.data.data.gameOrderid);
        } });
    } });
};const deleteItme = function (e) {
  let a = wx.getStorageSync("orderList");if (0 !== a.length) for (var t in a) a[t].gameOrderid.includes(e) && a.splice(t, 1);wx.setStorageSync("orderList", a);
};const subscribeMessage = function (e) {
  const a = this;"function" != typeof a.subscribeMsgCallback ? console.log("subscribeMsgCallback\u5fc5\u987b\u662f\u4e2afuntion") : wx.requestSubscribeMessage({ tmplIds: e, success: function (e) {
      a.subscribeMsgCallback({ status: "1", msg: "success", data: e });
    }, fail: function (e) {
      a.subscribeMsgCallback({ status: "0", msg: "fail", data: e });
    } });
};const shareAppMessage = function (e) {
  wx.shareAppMessage({ title: e.title || "", imageUrl: e.imageUrl, query: e.query, imageUrlId: e.imageUrlId, toCurrentGroup: e.toCurrentGroup, path: e.path });
};const advertisement = function (e) {
  const a = this;let t = {};t.type = 11, t.roleId = e.roleId, t.roleName = e.roleName, t.serverId = e.serverId, "createBannerAd" == e.type ? "function" != typeof a.createBannerAdCallback ? console.log("createBannerAdCallback\u5fc5\u987b\u662f\u4e00\u4e2afunction") : (t.adType = 1, state.bannerAd = wx.createBannerAd({ adUnitId: e.adUnitId, style: { left: e.left, top: e.top, width: e.width, height: e.height } }), state.bannerAd.onLoad(e => {
    console.log("banner \u5e7f\u544a\u52a0\u8f7d\u6210\u529f", e);
  }), state.bannerAd.showBanner = function () {
    state.bannerAd.show().then(() => {
      console.log("banner \u5e7f\u544a\u663e\u793a\u6210\u529f"), pushData(t), a.createBannerAdCallback({ status: "1", msg: "success", data: {} });
    }).catch(e => {
      state.bannerAd.load(), a.createBannerAdCallback({ status: "0", msg: "fail", data: e });
    });
  }, state.bannerAd.onError(e => {
    console.log("bannerAd onError", e), a.createBannerAdCallback({ status: "0", msg: "fail", data: e });
  })) : "createRewardedVideoAd" == e.type ? "function" != typeof a.rewardedVideoAdCallback ? console.log("rewardedVideoAdCallback\u5fc5\u987b\u662f\u4e00\u4e2afunction") : (t.adType = 2, state.videoAd = wx.createRewardedVideoAd({ adUnitId: e.adUnitId }), state.videoAd.onLoad().then(() => {
    console.log("\u52a0\u8f7d\u6210\u529f");
  }), state.videoAd.videoAdShow = function () {
    state.videoAd.show().then(() => {
      console.log("videoAd \u5e7f\u544a\u663e\u793a\u6210\u529f");
    }).catch(e => {
      state.videoAd.load(), a.rewardedVideoAdCallback({ status: "-1", msg: "fail", data: e });
    });
  }, state.videoAd.onClose(e => {
    e && e.isEnded || void 0 === e ? (console.log("\u6b63\u5e38\u64ad\u653e\u7ed3\u675f\uff0c\u53ef\u4ee5\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), pushData(t), a.rewardedVideoAdCallback({ status: "1", msg: "success", data: e })) : (console.log("\u64ad\u653e\u4e2d\u9014\u9000\u51fa\uff0c\u4e0d\u4e0b\u53d1\u6e38\u620f\u5956\u52b1"), a.rewardedVideoAdCallback({ status: "0", msg: "fail", data: e }));
  }), state.videoAd.onError(e => {
    console.log("videoAd onError", e), a.rewardedVideoAdCallback({ status: "0", msg: "fail", data: e });
  })) : "createInterstitialAd" == e.type ? "function" != typeof a.createInterstitialAdCallback ? console.log("createInterstitialAdCallback\u5fc5\u987b\u662f\u4e00\u4e2afunction") : (t.adType = 3, wx.createInterstitialAd && (state.interstitialAd = wx.createInterstitialAd({ adUnitId: e.adUnitId }), state.interstitialAd.onLoad(() => {
    console.log("\u63d2\u5c4f \u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
  }), state.interstitialAd.interstitialAdShow = function () {
    state.interstitialAd.show().then(e => {
      console.log("\u63d2\u5c4f\u5e7f\u544a\u663e\u793a\u6210\u529f", e), pushData(t), a.createInterstitialAdCallback({ status: "1", msg: "success", data: {} });
    }).catch(e => {
      a.createInterstitialAdCallback({ status: "-1", msg: "fail", data: e }), state.videoAd.load();
    });
  }, state.interstitialAd.onError(e => {
    console.log("err: ", e), a.createInterstitialAdCallback({ status: "0", msg: "fail", data: e });
  }))) : "createGridAd" == e.type ? "function" != typeof a.createGridAdCallback ? console.log("createGridAdCallback\u5fc5\u987b\u662f\u4e00\u4e2afunction") : (t.adType = 4, state.gridAd = wx.createGridAd({ adUnitId: e.adUnitId, style: { left: e.left, top: e.top, width: e.width, opacity: e.opacity } }), state.gridAd.onLoad(() => {
    console.log("Grid \u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
  }), state.gridAd.gridAdShow = function () {
    a.state.gridAd.show().then(() => {
      console.log("Grid \u5e7f\u544a\u663e\u793a\u6210\u529f"), pushData(t), a.createGridAdCallback({ status: "1", msg: "success", data: {} });
    }).catch(e => {
      console.log("Grid \u5e7f\u544a\u663e\u793a\u5931\u8d25", e), state.gridAd.load().then(() => state.gridAd.gridAdShow()).catch(e => {
        console.log("Grid \u5e7f\u544a\u663e\u793a\u5931\u8d25", e);
      });
    });
  }, state.gridAd.onError(e => {
    a.createGridAdCallback({ status: "0", msg: "fail", data: e }), console.log("\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", e);
  })) : "createCustomAd" == e.type && ("function" != typeof a.createCustomAdCallback ? console.log("createCustomAdCallback\u5fc5\u987b\u662f\u4e00\u4e2afunction") : (t.adType = 5, state.customAd = wx.createCustomAd({ adUnitId: e.adUnitId, style: { left: e.left, top: e.top, fixed: e.fixed } }), state.customAd.onLoad(() => {
    console.log("Grid \u5e7f\u544a\u52a0\u8f7d\u6210\u529f");
  }), state.customAd.customAdShow = function () {
    state.customAd.show().then(e => {
      console.log("customAd\u663e\u793a\u6210\u529f", e), pushData(t), a.createCustomAdCallback({ status: "1", msg: "success", data: e });
    }).catch(e => {
      console.log("Grid \u5e7f\u544a\u663e\u793a\u5931\u8d25", e), state.customAd.load().then(() => state.customAd.customAdShow()).catch(e => {
        console.log("customAd \u5e7f\u544a\u663e\u793a\u5931\u8d25", e);
      });
    });
  }, state.customAd.onError(e => {
    a.createCustomAdCallback({ status: "0", msg: "fail", data: e }), console.log("\u5e7f\u544a\u52a0\u8f7d\u5931\u8d25", e);
  })));
};const getLaunchOptionsSync = function () {
  return wx.getLaunchOptionsSync();
};const openData = function (e) {
  const a = this;"function" != typeof a.openDataCallback ? console.error("\u5f00\u653e\u6570\u636e openDataCallback \u56de\u8c03") : "getPotentialFriendList" == e.type ? wx.getPotentialFriendList({ keyList: e.keyList, success: e => {
      a.openDataCallback({ status: "1", msg: "success", data: e });
    }, fail: e => {
      a.openDataCallback({ status: "0", msg: "fail", data: e });
    } }) : "getGroupCloudStorage" == e.type ? wx.getGroupCloudStorage({ shareTicket: e.shareTicket, keyList: e.keyList, success: e => {
      a.openDataCallback({ status: "1", msg: "success", data: e });
    }, fail: e => {
      a.openDataCallback({ status: "0", msg: "fail", data: e });
    } }) : "getFriendCloudStorage" == e.type && wx.getFriendCloudStorage({ keyList: e.keyList, success: e => {
      a.openDataCallback({ status: "1", msg: "success", data: e });
    }, fail: e => {
      a.openDataCallback({ status: "0", msg: "fail", data: e });
    } });
};const sendResult = function (a) {
  console.log("\u8c03\u7528\u6570\u636e\u4e0a\u62a5\u4e86", a), wx.login({ success(e) {
      a.code = e.code, a.paytype = 3, wx.request({ url: api + "/pay/Order", data: Tools.buildPayParams(a), success(e) {
          console.log("\u6210\u529f\u6570\u636e\u4e0a\u62a5", e);
        } });
    } });
};const pay = function (e) {
  const s = this;wx.getSystemInfoSync();var a = Tools.getDeviceType();let t = "unknow";if ("ios" == a ? t = 2 : "android" == a ? t = 1 : "win" == a && (t = 3), "function" != typeof this.onPayCallback) console.error("\u6ca1\u6709\u5b9e\u73b0 onPayCallback \u652f\u4ed8\u56de\u8c03");else {
    console.log("commonParams", commonParams);const n = { gameOrderid: e.gameOrderid, gameid: commonParams.gameId, sign: commonParams.sign, referer: commonParams.referer, pext: e.pext, pext2: commonParams.partner, sdkType: 3, serverName: e.serverName, deviceno: commonParams.partner, serverId: e.serverId, mac: commonParams.mac, imei: commonParams.imei, productName: e.productName, uid: commonParams.uid, productId: e.productId, roleId: e.roleId, money: e.money, partner: commonParams.partner, roleName: e.roleName, roleLevel: e.roleLevel, partnerType: t, mode: "", wxid: commonParams.wxid, osType: t, os: a, paytype: commonParams.payType, bundleName: commonParams.wxappid, gamever: "", time: Tools.getTimeStamp() };wx.showLoading({ title: "\u6b63\u5728\u652f\u4ed8\u4e2d", mask: !0 }), wx.login({ success(e) {
        n.code = e.code, console.log("login", e.code), wx.request({ url: api + "/pay/Order", data: Tools.buildPayParams(n), success: a => {
            let t = wx.getStorageSync("orderList");var e = { uid: commonParams.uid, gameOrderid: n.gameOrderid, time: n.time, money: n.money, paytype: commonParams.payType, wxid: commonParams.wxid, deviceno: commonParams.partner, gameid: commonParams.gameId, sign: Tools.buildRepublish(n), partner: commonParams.partner, productId: n.productId, productName: n.productName, roleId: n.roleId, serverName: n.serverName, roleName: n.roleName, pext: n.pext, pext2: n.partner, mode: "game" };t.push(e), console.log("payRes==", a.data), wx.hideLoading();var o = a.data;if (commonParams.payType = o.paytype, 1 == a.data.status) switch (s.onPayCallback({ status: "1", msg: "\u652f\u4ed8\u53c2\u6570\u6b63\u786e\uff0c\u6b63\u5728\u652f\u4ed8" }), wx.hideLoading(), commonParams.payType) {case 0:
                return void wx.showModal({ title: "\u6e29\u99a8\u63d0\u793a", content: commonParams.payTip, showCancel: !1 });case 1:
                wx.setClipboardData({ data: o.data.url, success(e) {
                    wx.showModal({ title: "\u6e29\u99a8\u63d0\u793a", content: "\u652f\u4ed8\u94fe\u63a5\u5df2\u590d\u5236\u5230\u7c98\u8d34\u677f,\u8bf7\u5728\u6d4f\u89c8\u5668\u4e2d\u7c98\u8d34\u8bbf\u95ee\u5373\u53ef\u5b8c\u6210\u652f\u4ed8", showCancel: !1, confirmText: "\u6715\u77e5\u9053\u4e86", confirmColor: "#576B95" });
                  } });break;case 2:
                wx.showModal({ title: "\u6e29\u99a8\u63d0\u793a", content: "\u8bf7\u6309\u786e\u5b9a\u540e\u8fdb\u5165\u5ba2\u670d\u7a97\u53e3\uff0c\u5982\u679c\u672a\u6536\u5230\u672c\u8ba2\u5355\u652f\u4ed8\u5165\u53e3\uff0c\u8bf7\u53d1\u9001\u7a97\u53e3\u53f3\u4e0b\u89d2\u5361\u7247\u83b7\u53d6.\u795d\u60a8\u6e38\u620f\u6109\u5feb!", showCancel: !1, confirmText: "\u786e\u5b9a", success() {
                    wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: n.gameOrderid, sendMessagePath: JSON.stringify(n), sendMessageImg: "https://bkt-common-wxapp-1254255441.cos.ap-guangzhou.myqcloud.com/yywsdk/kefuIcon.png", sessionFrom: JSON.stringify(n), success(e) {
                        console.log(e);
                      } });
                  } });break;case 3:
                0 == a.data.errcode && wx.requestMidasPayment({ zoneId: "1", mode: "game", env: o.data.env, offerId: o.data.offerId, currencyType: "CNY", platform: "android", buyQuantity: o.data.amt, success(e) {
                    wx.setStorageSync("orderList", t), sendResult(n);
                  }, complete(e) {
                    console.log("\u7c73\u7ed3\u679c\u53c2\u6570", e);
                  } });break;case 5:
                let e = {};e.goods_name = n.productName, e.gameOrderid = o.gameOrderid, e.money = o.money, e.out_code = o.out_code, e.paytype = o.paytype, wx.navigateToMiniProgram({ appId: o.appid, path: "pages/sdk/page", envVersion: "release", extraData: e, success: function (e) {
                    console.log("\u8df3\u8f6c\u5c0f\u7a0b\u5e8f\u6210\u529f", e);
                  }, fail: function (e) {
                    console.log("\u8df3\u8f6c\u5c0f\u7a0b\u5e8f\u5931\u8d25", e), wx.request({ url: api + "/pay/order/wxMiniPayBan?appid=" + commonParams.gameId + "&errMsg=" + e.errMsg, success(e) {
                        console.log("\u8df3\u8f6c\u5c0f\u7a0b\u5e8f\u5931\u8d25=======\u4e0a\u62a5\u6210\u529f", e);
                      } });
                  }, complete: function (e) {
                    console.log("\u8df3\u8f6c\u5c0f\u7a0b\u5e8f", e);
                  } });} else s.onPayCallback({ status: "0", msg: "\u652f\u4ed8\u5931\u8d25" });
          } });
      } });
  }
};const getWhatsNewSubscriptionsSetting = function (e) {
  const a = this;"function" != typeof a.getWhatsNewSubscriptionsSettingCallback ? console.log("getWhatsNewSubscriptionsSettingCallback\u5fc5\u987b\u662f\u4e00\u4e2afunction") : wx.getWhatsNewSubscriptionsSetting({ msgType: e.msgType, success(e) {
      a.getWhatsNewSubscriptionsSettingCallback({ code: "1", msg: "success", data: e });
    }, fail(e) {
      a.getWhatsNewSubscriptionsSettingCallback({ code: "0", msg: "fail", data: e });
    } });
};const requestSubscribeWhatsNew = function (e) {
  const a = this;"function" != typeof a.requestSubscribeWhatsNewCallback ? console.log("requestSubscribeWhatsNewCallback\u5fc5\u987b\u662f\u4e00\u4e2afunction") : wx.requestSubscribeWhatsNew({ msgType: e.msgType, success(e) {
      a.requestSubscribeWhatsNewCallback({ code: "1", msg: "success", data: e });
    }, fail(e) {
      a.requestSubscribeWhatsNewCallback({ code: "0", msg: "fail", data: e });
    } });
};const getRedPagState = function (e) {
  const a = this;"function" != typeof a.getRedPagStateCallback ? console.log("getRedPagStateCallback\u5fc5\u987b\u4e3afunction") : commonParams.showRedPagOn ? wx.request({ url: wxRedApi + "wx/redpackage/check/", data: { app_id: commonParams.gameId, open_id: commonParams.uid, server_id: e.server_id, role_id: e.role_id }, success(e) {
      e = e.data;200 == e.status ? (commonParams.luck_draw_on = e.data.luck_draw_on, commonParams.luck_draw_activity_id = e.data.luck_draw_activity_id, a.getRedPagStateCallback({ status: "1", msg: e.msg, data: e.data })) : a.getRedPagStateCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      a.getRedPagStateCallback({ status: "-1", msg: e.errMsg, data: e }), console.log("\u8bf7\u6c42\u9519\u8bef", e);
    }, timeout: 4e3 }) : a.getRedPagStateCallback({ status: "0", msg: "showRedPagOn\u4e3a" + commonParams.showRedPagOn, data: commonParams.showRedPagOn });
};const redLogin = function (t) {
  const o = this;"function" != typeof o.redLoginCallback ? console.log("redLoginCallback\u5fc5\u987b\u4e3afunction") : (Tools.initLock(httpLock), wx.login({ success(e) {
      var a;e.code ? (a = { app_id: commonParams.gameId, code: e.code, server_id: t.server_id, server_name: t.server_name, role_id: t.role_id, role_name: t.role_name }, httpLock.httpRedLoginFlag || (httpLock.httpRedLoginFlag = !0, wx.request({ url: wxRedApi + "auth/wx/login", method: "post", data: Tools.buildRedParams(a), header: { "Content-Type": "application/x-www-form-urlencoded" }, success(e) {
          e = e.data;200 == e.status ? (commonParams.token = e.data.token, o.redLoginCallback({ status: "1", msg: e.msg, data: e.data })) : o.redLoginCallback({ status: "0", msg: e.msg, data: e.data });
        }, fail(e) {
          o.redLoginCallback({ status: "-1", msg: e.errMsg, data: e }), console.log("err", e);
        }, complete(e) {
          httpLock.httpRedLoginFlag = !1;
        }, timeout: 4e3 }))) : console.log("\u767b\u5f55\u5931\u8d25\uff01" + e.errMsg);
    } }));
};const getWxUserInfo = function () {
  const a = this;var e;"function" != typeof a.getWxUserInfoCallback ? console.log("getWxUserInfoCallback\u5fc5\u987b\u4e3afunction") : (e = { app_id: commonParams.gameId, token: commonParams.token }, wx.request({ url: wxRedApi + "wx/user/info/", data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.getWxUserInfoCallback({ status: "1", msg: e.msg, data: e.data }) : a.getWxUserInfoCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log("err", e);
    }, timeout: 4e3 }));
};const getRedPackageList = function () {
  const a = this;var e;"function" != typeof a.getRedPackageListCallback ? console.log("getRedPackageListCallback\u5fc5\u987b\u4e3afunction") : (e = { app_id: commonParams.gameId, token: commonParams.token }, httpLock.httpRedListFlag || (httpLock.httpRedListFlag = !0, wx.request({ url: wxRedApi + "wx/redpackage/index/", data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? (commonParams.share_activity_id = e.data.share_activity_id, a.getRedPackageListCallback({ status: "1", msg: e.msg, data: e.data })) : a.getRedPackageListCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      a.getRedPackageListCallback({ status: "-1", msg: e.errMsg, data: e }), console.log("err", e);
    }, complete(e) {
      httpLock.httpRedListFlag = !1;
    }, timeout: 4e3 })));
};const getRedConfig = function () {
  const a = this;var e;"function" != typeof a.getRedConfigCallback ? console.log("getRedConfigCallback\u5fc5\u987b\u4e3afunction") : (e = { app_id: commonParams.gameId, token: commonParams.token }, wx.request({ url: wxRedApi + "wx/config/activity/", data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.getRedConfigCallback({ status: "1", msg: e.msg, data: e.data }) : a.getRedConfigCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log("err", e);
    }, timeout: 4e3 }));
};const toReceiveRedPackage = function (e) {
  const a = this;"function" != typeof a.toReceiveRedPackageCallback ? console.log("toReceiveRedPackageCallback\u5fc5\u987b\u4e3afunction") : httpLock.httpReceiveRedPackageFlag || (e = { activity_id: e.activity_id, activity_rule_id: e.activity_rule_id, activity_rule_type: e.activity_rule_type, app_id: commonParams.gameId, token: commonParams.token }, httpLock.httpReceiveRedPackageFlag = !0, wx.request({ url: wxRedApi + "wx/redpackage/receive", method: "post", data: Tools.buildRedParams(e), header: { "Content-Type": "application/x-www-form-urlencoded" }, success(e) {
      e = e.data;200 == e.status ? a.toReceiveRedPackageCallback({ status: "1", msg: e.msg, data: e.data }) : a.toReceiveRedPackageCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log("\u8bf7\u6c42\u51fa\u9519", e), a.toReceiveRedPackageCallback({ status: "-1", msg: e.errMsg, data: e });
    }, complete(e) {
      httpLock.httpReceiveRedPackageFlag = !1;
    }, timeout: 4e3 }));
};const getRedDetailList = function () {
  const a = this;var e;"function" != typeof a.getRedDetailListCallback ? console.log("getRedDetailListCallback\u5fc5\u987b\u4e3afunction") : (e = { app_id: commonParams.gameId, token: commonParams.token }, wx.request({ url: wxRedApi + "wx/redpackage/redlist/", data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.getRedDetailListCallback({ status: "1", msg: e.msg, data: e.data }) : a.getRedDetailListCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log("\u8bf7\u6c42\u51fa\u9519", e);
    }, timeout: 4e3 }));
};const toWithdraw = function (e) {
  const a = this;"function" != typeof a.toWithdrawCallback ? console.log("toWithdrawCallback\u5fc5\u987b\u4e3afunction") : (e = { withdraw_amount: e.withdraw_amount, app_id: commonParams.gameId, token: commonParams.token }, httpLock.httpToWithdraw || (httpLock.httpToWithdraw = !0, wx.request({ url: wxRedApi + "wx/redpackage/withdraw", data: Tools.buildRedParams(e), method: "post", header: { "Content-Type": "application/x-www-form-urlencoded" }, success(e) {
      e = e.data;200 == e.status ? a.toWithdrawCallback({ status: "1", msg: e.msg, data: e.data }) : a.toWithdrawCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      a.toWithdrawCallback({ status: "-1", msg: e.errMsg, data: e }), console.log("\u8bf7\u6c42\u51fa\u9519", e);
    }, complete(e) {
      httpLock.httpToWithdraw = !1;
    }, timeout: 4e3 })));
};const toRedShare = function (e) {
  e = { app_id: commonParams.gameId, token: commonParams.token, activity_id: e.share_activity_id };wx.request({ url: wxRedApi + "wx/redpackage/share/", data: Tools.buildRedParams(e), success(e) {
      e = e.data;console.log("\u83b7\u53d6\u5206\u4eab\u53c2\u6570", e), 200 == e.status && wx.shareAppMessage({ title: e.data.title || "", imageUrl: e.data.image_url || "", query: Tools.serialize({ share_id: e.data.share_id }), imageUrlId: e.data.image_url_id || "" });
    }, fail(e) {
      console.log("\u8bf7\u6c42\u51fa\u9519", e);
    }, timeout: 4e3 });
};const getShareList = function (e) {
  const a = this;"function" != typeof a.getShareListCallback ? console.log("getShareListCallback\u5fc5\u987b\u4e3afunction") : (e = { activity_id: e.share_activity_id, app_id: commonParams.gameId, token: commonParams.token }, wx.request({ url: wxRedApi + "wx/redpackage/shareList/", data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.getShareListCallback({ status: "1", msg: e.msg, data: e.data }) : a.getShareListCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log("\u8bf7\u6c42\u51fa\u9519", e);
    }, timeout: 4e3 }));
};const shareBind = function (t) {
  wx.login({ success: e => {
      var a;e.code ? (a = { app_id: commonParams.gameId, share_id: t.share_id, code: e.code }, wx.request({ url: wxRedApi + "wx/redpackage/shareBind/", data: Tools.buildRedParams(a), success(e) {
          e = e.data;console.log("shareBind", e.data, e.msg);
        }, fail(e) {
          console.log("shareBindErr", e);
        }, timeout: 4e3 })) : console.log("\u5fae\u4fe1\u767b\u5f55\u5931\u8d25code is null:", e);
    } });
};const getLuckDrawIndex = function () {
  const a = this;var e;"function" != typeof a.getLuckDrawIndexCallback ? console.log("getLuckDrawIndexCallback\u5fc5\u987b\u4e3afunction") : (e = { app_id: commonParams.gameId, token: commonParams.token, activity_id: commonParams.luck_draw_activity_id }, httpLock.httpLuckDrawIndex || (httpLock.httpLuckDrawIndex = !0, wx.request({ url: wxRedApi + "wx/redpackage/luckDrawIndex/", data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.getLuckDrawIndexCallback({ status: "1", msg: e.msg, data: e.data }) : a.getLuckDrawIndexCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      a.getLuckDrawIndexCallback({ status: "-1", msg: e.errMsg, data: e }), console.log("\u8bf7\u6c42\u51fa\u9519", e);
    }, complete(e) {
      httpLock.httpLuckDrawIndex = !1;
    }, timeout: 4e3 })));
};const luckyDraw = function () {
  const a = this;var e;"function" != typeof a.luckyDrawCallback ? console.log("luckyDrawCallback\u5fc5\u987b\u4e3afunction") : (e = { app_id: commonParams.gameId, token: commonParams.token, activity_id: commonParams.luck_draw_activity_id }, httpLock.httpLuckDrawFlag || (httpLock.httpLuckDrawFlag = !0, wx.request({ url: wxRedApi + "wx/redpackage/luckDraw/", data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.luckyDrawCallback({ status: "1", msg: e.msg, data: e.data }) : a.luckyDrawCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log("\u8bf7\u6c42\u51fa\u9519", e), a.luckyDrawCallback({ status: "-1", msg: e.errMsg, data: e });
    }, complete(e) {
      httpLock.httpLuckDrawFlag = !1;
    }, timeout: 4e3 })));
};const getSquareList = function (e) {
  const a = this;if ("function" != typeof a.getSquareListCallback) console.log("getSquareListCallback\u5fc5\u987b\u4e3afunction");else if (!httpLock.httpSquareListFlag) {
    httpLock.httpSquareListFlag = !0;const t = { app_id: commonParams.gameId, uid: commonParams.uid, union_id: commonParams.unionId };e && e.type && (t.type = e.type), wx.request({ url: wxRedApi + "v2/wx/square/index", data: Tools.buildRedParams(t), success(e) {
        e = e.data;console.log("getSquareList", e), a.getSquareListCallback(e);
      }, complete() {
        httpLock.httpSquareListFlag = !1;
      }, timeout: 4e3 });
  }
};const squareClick = function (a) {
  var e;httpLock.httpSquareClickFlag || (httpLock.httpSquareClickFlag = !0, e = { app_id: commonParams.gameId, square_id: a.square_id, uid: commonParams.uid, union_id: commonParams.unionId }, wx.request({ url: wxRedApi + "v2/wx/square/click/", data: Tools.buildRedParams(e), success(e) {
      console.log("\u77e9\u9635\u70b9\u51fb", e), wx.navigateToMiniProgram({ appId: a.wxapp_id, extraData: { square: { square_id: a.square_id, source_app_id: commonParams.gameId, source_open_id: commonParams.uid } }, envVersion: a.app_env, success(e) {} });
    }, complete() {
      httpLock.httpSquareClickFlag = !1;
    }, timeout: 4e3 }));
};const squareBind = function (a) {
  wx.login({ success(e) {
      e = Tools.buildRedParams({ app_id: commonParams.gameId, code: e.code, square_id: a.square_id, source_app_id: a.source_app_id, source_open_id: a.source_open_id });console.log("squareBind", e), wx.request({ url: wxRedApi + "v2/wx/square/bind", data: e, timeout: 5e3, success: e => {
          console.log("\u77e9\u9635\u7ed1\u5b9a", e);
        } });
    } });
};const gameWithdraw = function (e) {
  const a = this;"function" != typeof a.gameWithdrawCallback ? console.log("gameWithdrawCallback\u5fc5\u987b\u4e3afunction") : (e = { app_id: commonParams.gameId, withdraw_amount: e.withdraw_amount, open_id: commonParams.uid }, httpLock.httpGameWithdraw || (httpLock.httpGameWithdraw = !0, wx.request({ url: wxRedApi + "v2/wx/red_bag/withdraw", data: Tools.buildRedParams(e), method: "post", header: { "Content-Type": "application/x-www-form-urlencoded" }, success(e) {
      e = e.data;a.gameWithdrawCallback(e);
    }, fail(e) {
      a.gameWithdrawCallback(e), console.log("\u8bf7\u6c42\u51fa\u9519", e);
    }, complete(e) {
      httpLock.httpGameWithdraw = !1;
    }, timeout: 4e3 })));
};const toCouponReceive = function (e) {
  const a = this;if ("function" != typeof a.toCouponReceiveCallback) console.log("toCouponReceiveCallback\u5fc5\u987b\u4e3afunction");else if (!httpLock.httpToCouponReceiveFlag) {
    httpLock.httpToCouponReceiveFlag = !0;const t = { app_id: commonParams.gameId, openid: commonParams.uid, union_id: commonParams.unionId, os_type: Tools.getDeviceTypeId() };e.tag && (t.tag = e.tag), wx.request({ url: wxRedApi + "v2/wx/coupon/receive", data: Tools.buildRedParams(t), method: "post", success(e) {
        a.toCouponReceiveCallback(e);
      }, complete() {
        httpLock.httpToCouponReceiveFlag = !1;
      }, timeout: 1e4 });
  }
};const getOpenId = function () {
  return commonParams.uid;
};const showSquareOn = function () {
  return commonParams.showSquareOn;
};const getChangeShellOn = function (e, a) {
  const t = this;var o;"function" != typeof t.getChangeShellOnCallback ? console.log("getChangeShellOnCallback\u5fc5\u987b\u4e3afunction") : (commonParams.gameId = e, commonParams.gameKey = a, o = wx.getAccountInfoSync(), console.log("accountInfo: ", o), console.log("miniProgram: ", o.miniProgram.envVersion), commonParams.envVersion = o.miniProgram.envVersion, wx.request({ url: api + "/pay/check/config", data: Tools.buildChangeShell({ gameid: e, envVersion: commonParams.envVersion, time: Tools.getTimeStamp() }, a), success(e) {
      t.getChangeShellOnCallback(e.data);
    }, timeout: 4e3 }));
};const showAppModal = function () {
  commonParams.showAppOn && wx.showModal({ title: commonParams.appTitle, content: commonParams.appContent || "\u4e0b\u8f7d\u5e76\u4f7f\u7528\u624b\u673a\u7248\u6e38\u620f\uff0c\u5373\u53ef\u4eab\u53d7\uff1a\n 1.\u9ad8\u4ef7\u503c\u624b\u673a\u7248\u793c\u5305 \n 2.\u624b\u673a\u7248\u5145\u503c\u4e13\u5c5e\u798f\u5229 \n 3. \u6c89\u6d78\u5f0f\u65e0\u5e72\u6270\u6e38\u620f\u4f53\u9a8c", cancelText: "\u6b8b\u5fcd\u62d2\u7edd", confirmText: "\u524d\u5f80\u5ba2\u670d", success(e) {
      e.confirm ? wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: commonParams.sendMessageTitle, sendMessageImg: commonParams.sendMessageImg, complete(e) {
          console.log("\u5ba2\u670d", e);
        } }) : e.cancel && console.log("\u7528\u6237\u70b9\u51fb\u53d6\u6d88");
    } });
};const toQQGroup = function () {
  wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: commonParams.QQGroup.sendMessageTitle, sendMessageImg: commonParams.QQGroup.sendMessageImg, complete(e) {
      console.log("\u5ba2\u670d", e);
    } });
};const msgSecCheck = function (e, a) {
  var t = -1 < Object.prototype.toString.call(e).indexOf("String");var o = -1 < Object.prototype.toString.call(e).indexOf("Object");var s = {};if (t) s = { gameid: commonParams.gameId, partner: commonParams.partner, deviceno: commonParams.partner, time: Tools.getTimeStamp(), content: e };else {
    if (!o) return void console.log("\u8bf7\u6821\u9a8c\u53c2\u6570\u683c\u5f0f");if (!e.content) return void console.log("content \u4e0d\u80fd\u4e3a\u7a7a");s = Object.assign({ openid: commonParams.uid, gameid: commonParams.gameId, partner: commonParams.partner, deviceno: commonParams.partner, time: Tools.getTimeStamp() }, e);
  }e ? wx.request({ url: api + "/pay/Check/msgSecCheck", data: Tools.buildCheckMsg(s), success(e) {
      console.log("\u4fe1\u606f\u76d1\u6d4b=", e.data), a(e.data);
    } }) : a({ err: 0, msg: "\u68c0\u6d4b\u4fe1\u606f\u4e0d\u80fd\u4e3a\u7a7a" });
};const gameLive = { startGameLive() {
    const a = this;"function" == typeof a.startGameLiveCallback ? wx.startGameLive({ success(e) {
        a.startGameLiveCallback({ status: "1", msg: "", data: e }), console.log("startGameLive", e);
      }, fail(e) {
        console.error("startGameLive", e), a.startGameLiveCallback({ status: "0", msg: "", data: e });
      } }) : console.log("startGameLiveCallback\u5fc5\u987b\u4e3afunction");
  }, checkGameLiveEnabled() {
    const a = this;"function" == typeof a.checkGameLiveEnabledCallback ? wx.checkGameLiveEnabled({ success(e) {
        a.checkGameLiveEnabledCallback({ status: "1", msg: "", data: e }), console.log("\u68c0\u67e5\u8bbe\u5907\u652f\u6301", e);
      }, fail(e) {
        a.checkGameLiveEnabledCallback({ status: "0", msg: "", data: e });
      } }) : console.log("checkGameLiveEnabledCallback\u5fc5\u987b\u4e3afunction");
  }, onGameLiveStateChange() {
    const a = this;"function" == typeof a.onGameLiveStateChangeCallback ? wx.onGameLiveStateChange(e => {
      "end" === e.state && wx.getUserRecentGameLiveInfo({ success(e) {
          e.feedIdList && (console.log("\u83b7\u53d6\u6700\u8fd1\u7684\u76f4\u64ad\u5217\u8868", e), wx.getUserGameLiveDetails({ feedIdList: [e.feedIdList[0]], success(e) {
              if (console.log("\u6700\u8fd1\u7ed3\u675f\u7684\u76f4\u64ad\u4fe1\u606f", e), e.cloudID) {
                const a = { app_id: commonParams.gameId, encrypted_data: e.encryptedData, cloudID: e.cloudID, iv: e.iv };wx.login({ success: e => {
                    null == e.code || null == e.code || "" == e.code ? console.log("\u5fae\u4fe1\u767b\u5f55\u5931\u8d25code is null:") : (a.code = e.code, wx.request({ url: wxRedApi + "v2/wx/live/details", method: "post", data: Tools.buildRedParams(a), success(e) {
                        console.log("liveDetails: ", e);
                      }, fail(e) {
                        console.log("liveDetails", e);
                      }, timeout: 1e4 }));
                  } });
              }
            } }));
        } }), a.onGameLiveStateChangeCallback(e);
    }) : console.log("onGameLiveStateChangeCallback\u5fc5\u987b\u4e3afunction");
  }, offGameLiveStateChange() {
    wx.offGameLiveStateChange();
  }, getGameLiveState() {
    var e;"function" == typeof this.getGameLiveStateCallback ? (e = wx.getGameLiveState(), this.getGameLiveStateCallback(e), console.log("getGameLiveState", e)) : console.log("getGameLiveStateCallback\u5fc5\u987b\u4e3afunction");
  }, getUserCurrentGameliveInfo() {
    const a = this;"function" == typeof a.getUserCurrentGameliveInfoCallback ? wx.getUserCurrentGameliveInfo({ success(e) {
        a.getUserCurrentGameliveInfoCallback({ status: "1", msg: "", data: e }), console.log("getUserCurrentGameliveInfo", e);
      }, fail(e) {
        console.log("getUserCurrentGameliveInfo", e), a.getUserCurrentGameliveInfoCallback({ status: "0", msg: "", data: e });
      } }) : console.log("getUserCurrentGameliveInfoCallback\u5fc5\u987b\u4e3afunction");
  }, getUserRecentGameLiveInfo() {
    const a = this;"function" == typeof a.getUserRecentGameLiveInfoCallback ? wx.getUserRecentGameLiveInfo({ success(e) {
        a.getUserRecentGameLiveInfoCallback({ status: "1", msg: "", data: e }), console.log("getUserRecentGameLiveInfoCallback", e);
      }, fail(e) {
        a.getUserRecentGameLiveInfoCallback({ status: "0", msg: "", data: e });
      } }) : console.log("getUserRecentGameLiveInfoCallback\u5fc5\u987b\u4e3afunction");
  }, getUserGameLiveDetails(e = {}) {
    const a = this;"function" == typeof a.getUserGameLiveDetailsCallback ? e.feedIdList ? wx.getUserGameLiveDetails({ feedIdList: e.feedIdList, success(e) {
        console.log("getUserGameLiveDetails", e), a.getUserGameLiveDetailsCallback({ status: "1", msg: "", data: e });
      }, fail(e) {
        a.getUserGameLiveDetailsCallback({ status: "0", msg: "", data: e });
      } }) : console.log("feedIdList\u4e0d\u80fd\u4e3a\u7a7a") : console.log("getUserGameLiveDetailsCallback\u5fc5\u987b\u4e3afunction");
  }, openChannelsLiveCollection(e = {}) {
    wx.openChannelsLiveCollection({ openIds: e.openIds || [] });
  }, getChannelsLiveNoticeInfo(e = {}) {
    const a = this;"function" == typeof a.getChannelsLiveNoticeInfoCallback ? e.finderUserName ? wx.getChannelsLiveNoticeInfo({ finderUserName: e.finderUserName || "", feedId: e.feedId || "", nonceId: e.nonceId || "", success(e) {
        console.log("getChannelsLiveNoticeInfo", e), a.getChannelsLiveNoticeInfoCallback({ status: "1", msg: "", data: e });
      }, fail(e) {
        console.log("getChannelsLiveNoticeInfo", e), a.getChannelsLiveNoticeInfoCallback({ status: "0", msg: "", data: e });
      } }) : console.log("finderUserName\u4e0d\u80fd\u4e3a\u7a7a") : console.log("getChannelsLiveNoticeInfoCallback\u5fc5\u987b\u4e3afunction");
  }, getChannelsLiveInfo(e = {}) {
    const a = this;"function" == typeof a.getChannelsLiveInfoCallback ? e.finderUserName ? wx.getChannelsLiveInfo({ finderUserName: e.finderUserName, success: function (e) {
        console.log("getChannelsLiveInfo", e), a.getChannelsLiveInfoCallback({ status: "1", msg: "", data: e });
      }, fail: function (e) {
        console.log("getChannelsLiveInfo", e), a.getChannelsLiveInfoCallback({ status: "0", msg: "", data: e });
      } }) : console.log("finderUserName\u4e0d\u80fd\u4e3a\u7a7a") : console.log("getChannelsLiveInfoCallback\u5fc5\u987b\u4e3afunction");
  }, openChannelsLive(e = {}) {
    const a = this;"function" == typeof a.openChannelsLiveCallback ? e.finderUserName ? wx.openChannelsLive({ finderUserName: e.finderUserName, success: function (e) {
        console.log("openChannelsLive", e), a.openChannelsLiveCallback({ status: "1", msg: "", data: e });
      }, fail: function (e) {
        console.log("openChannelsLive", e), a.openChannelsLiveCallback({ status: "0", msg: "", data: e });
      } }) : console.log("finderUserName\u4e0d\u80fd\u4e3a\u7a7a") : console.log("openChannelsLiveCallback\u5fc5\u987b\u4e3afunction");
  }, reserveChannelsLive(e = {}) {
    const a = this;"function" == typeof a.reserveChannelsLiveCallback ? e.noticeId ? wx.reserveChannelsLive({ noticeId: e.noticeId || "", success(e) {
        console.log("reserveChannelsLive", e), a.reserveChannelsLiveCallback({ status: "1", msg: "", data: e });
      }, fail(e) {
        console.log("reserveChannelsLive", e), a.reserveChannelsLiveCallback({ status: "0", msg: "", data: e });
      } }) : console.log("noticeId\u4e0d\u80fd\u4e3a\u7a7a") : console.log("reserveChannelsLiveCallback\u5fc5\u987b\u4e3afunction");
  }, getLiveTask() {
    const a = this;var e;"function" != typeof a.getLiveTaskCallback ? console.log("getLiveTaskCallback\u5fc5\u987b\u4e3afunction") : (e = { app_id: commonParams.gameId, open_id: commonParams.uid, union_id: commonParams.unionId }, httpLock.httpLiveTaskFlag || (httpLock.httpLiveTaskFlag = !0, wx.request({ url: wxRedApi + "v2/wx/live/index", data: Tools.buildRedParams(e), success(e) {
        e = e.data, a.getLiveTaskCallback(e);
      }, fail(e) {
        a.getLiveTaskCallback(e), console.log("\u8bf7\u6c42\u51fa\u9519", e);
      }, complete(e) {
        httpLock.httpLiveTaskFlag = !1;
      }, timeout: 4e3 })));
  }, toLiveTaskReceive(e) {
    const a = this;"function" != typeof a.toLiveTaskReceiveCallback ? console.log("toLiveTaskReceiveCallback\u5fc5\u987b\u4e3afunction") : httpLock.httpToLiveTaskReceiveFlag || (httpLock.httpToLiveTaskReceiveFlag = !0, e = { app_id: commonParams.gameId, open_id: commonParams.uid, union_id: commonParams.unionId, live_id: e.live_id, role_id: e.role_id || "", role_name: e.role_name || "", server_id: e.server_id || "", server_name: e.server_name || "", level: e.level || "" }, wx.request({ url: wxRedApi + "v2/wx/live/receive", data: Tools.buildRedParams(e), method: "post", success(e) {
        e = e.data, a.toLiveTaskReceiveCallback(e);
      }, fail(e) {
        a.toLiveTaskReceiveCallback(e), console.log("\u8bf7\u6c42\u51fa\u9519", e);
      }, complete() {
        httpLock.httpToLiveTaskReceiveFlag = !1;
      }, timeout: 1e4 }));
  }, getUserLiveInfo(e) {
    const a = this;"function" != typeof a.getUserLiveInfoCallback ? console.log("getUserLiveInfoCallback\u5fc5\u987b\u4e3afunction") : httpLock.httpGetUserLiveInfoFlag || (httpLock.httpGetUserLiveInfoFlag = !0, e = { app_id: commonParams.gameId, open_id: commonParams.uid, union_id: commonParams.unionId, role_id: e.role_id || "", role_name: e.role_name || "", server_id: e.server_id || "", server_name: e.server_name || "", level: e.level || "" }, wx.request({ url: wxRedApi + "v2/wx/live/info", data: Tools.buildRedParams(e), success(e) {
        e = e.data, a.getUserLiveInfoCallback(e);
      }, fail(e) {
        a.getUserLiveInfoCallback(e), console.log("\u8bf7\u6c42\u51fa\u9519", e);
      }, complete() {
        httpLock.httpGetUserLiveInfoFlag = !1;
      }, timeout: 1e4 }));
  } };const pushData = function (a) {
  "0" != a.type && (a.accountId = commonParams.uid, a.appId = commonParams.gameId, a.appVersion = "1.0.0", a.platform = "wxxyx", a.channel = commonParams.partner, a.source = commonParams.query.source || "", a.source_type = commonParams.query.source_type || "", a.systemName = Tools.getDeviceType(), a.deviceName = wx.getSystemInfoSync().model, a.resolution = wx.getSystemInfoSync().screenWidth + "*" + wx.getSystemInfoSync().screenHeight, a.deviceType = Tools.getDeviceTypeId(), a.referer = commonParams.referer, a.idfa = "", a.ip = "", a.mac = "", a.imei = commonParams.uid, a.sex = "0", a.network = "", a.country = "86", a.operators = ""), "1" == a.type ? (a.logType = "login", a.region = "0", a.channelAccid = commonParams.uid, delete a.startLevel, delete a.endLevel) : "2" == a.type ? (a.roleId || console.log("\u6ca1\u6709\u4f20\u89d2\u8272ID"), a.roleName || console.log("\u6ca1\u6709\u4f20\u89d2\u8272\u540d"), a.logType = "roleCreate", a.region = "0", a.channelAccid = commonParams.uid, delete a.startLevel, delete a.endLevel) : "4" == a.type ? (a.roleId || console.log("\u6ca1\u6709\u4f20\u89d2\u8272ID"), a.roleName || console.log("\u6ca1\u6709\u4f20\u89d2\u8272\u540d"), a.logType = "levelUp", a.region = "0", a.levelType = "1", a.duration = "0", a.channelAccid = commonParams.uid, delete a.serverName) : "5" == a.type ? (a.logType = "online", delete a.resolution, delete a.deviceType, delete a.mac, delete a.sex, delete a.network, delete a.country, delete a.operators) : 6 == a.type ? (a.logType = "share", delete a.resolution, delete a.deviceType, delete a.mac, delete a.sex, delete a.network, delete a.country, delete a.operators, a.shareType = "1") : 9 == a.type ? (a.logType = "event", delete a.resolution, delete a.deviceType, delete a.deviceName, delete a.mac, delete a.sex, delete a.network, delete a.country, delete a.operators, delete a.imei) : 10 == a.type ? (a.logType = "levelclear", a.channelAccid = commonParams.uid) : 11 == a.type && (a.logType = "advert", a.channelAccid = commonParams.uid), delete a.type, wx.request({ url: logApi + "/api", data: { data: JSON.stringify(a) }, success: function (e) {
      console.log(a.logType, e.data);
    } });
};function setLog(e, a) {
  1 == state.debug && (a == state.level.error ? console.log("%cSDK11\u81f4\u547d\u9519\u8bef:" + e, "color:red") : a == state.level.warn ? console.log("%cSDK11\u8b66\u544a\u9519\u8bef:" + e, "color:gray") : a == state.level.debug ? console.log("%cSDK11\u8fd0\u884c\u65e5\u5fd7:" + e, "color:gray") : console.log("%cSDK11\u65e5\u5fd7:" + e, "color:gray"));
}function md5(e) {
  var a;Array();var t, o, s, n, d, c, i, r, l;for (a = ConvertToWordArray(e = Utf8Encode(e)), c = 1732584193, i = 4023233417, r = 2562383102, l = 271733878, t = 0; t < a.length; t += 16) c = FF(o = c, s = i, n = r, d = l, a[t + 0], 7, 3614090360), l = FF(l, c, i, r, a[t + 1], 12, 3905402710), r = FF(r, l, c, i, a[t + 2], 17, 606105819), i = FF(i, r, l, c, a[t + 3], 22, 3250441966), c = FF(c, i, r, l, a[t + 4], 7, 4118548399), l = FF(l, c, i, r, a[t + 5], 12, 1200080426), r = FF(r, l, c, i, a[t + 6], 17, 2821735955), i = FF(i, r, l, c, a[t + 7], 22, 4249261313), c = FF(c, i, r, l, a[t + 8], 7, 1770035416), l = FF(l, c, i, r, a[t + 9], 12, 2336552879), r = FF(r, l, c, i, a[t + 10], 17, 4294925233), i = FF(i, r, l, c, a[t + 11], 22, 2304563134), c = FF(c, i, r, l, a[t + 12], 7, 1804603682), l = FF(l, c, i, r, a[t + 13], 12, 4254626195), r = FF(r, l, c, i, a[t + 14], 17, 2792965006), c = GG(c, i = FF(i, r, l, c, a[t + 15], 22, 1236535329), r, l, a[t + 1], 5, 4129170786), l = GG(l, c, i, r, a[t + 6], 9, 3225465664), r = GG(r, l, c, i, a[t + 11], 14, 643717713), i = GG(i, r, l, c, a[t + 0], 20, 3921069994), c = GG(c, i, r, l, a[t + 5], 5, 3593408605), l = GG(l, c, i, r, a[t + 10], 9, 38016083), r = GG(r, l, c, i, a[t + 15], 14, 3634488961), i = GG(i, r, l, c, a[t + 4], 20, 3889429448), c = GG(c, i, r, l, a[t + 9], 5, 568446438), l = GG(l, c, i, r, a[t + 14], 9, 3275163606), r = GG(r, l, c, i, a[t + 3], 14, 4107603335), i = GG(i, r, l, c, a[t + 8], 20, 1163531501), c = GG(c, i, r, l, a[t + 13], 5, 2850285829), l = GG(l, c, i, r, a[t + 2], 9, 4243563512), r = GG(r, l, c, i, a[t + 7], 14, 1735328473), c = HH(c, i = GG(i, r, l, c, a[t + 12], 20, 2368359562), r, l, a[t + 5], 4, 4294588738), l = HH(l, c, i, r, a[t + 8], 11, 2272392833), r = HH(r, l, c, i, a[t + 11], 16, 1839030562), i = HH(i, r, l, c, a[t + 14], 23, 4259657740), c = HH(c, i, r, l, a[t + 1], 4, 2763975236), l = HH(l, c, i, r, a[t + 4], 11, 1272893353), r = HH(r, l, c, i, a[t + 7], 16, 4139469664), i = HH(i, r, l, c, a[t + 10], 23, 3200236656), c = HH(c, i, r, l, a[t + 13], 4, 681279174), l = HH(l, c, i, r, a[t + 0], 11, 3936430074), r = HH(r, l, c, i, a[t + 3], 16, 3572445317), i = HH(i, r, l, c, a[t + 6], 23, 76029189), c = HH(c, i, r, l, a[t + 9], 4, 3654602809), l = HH(l, c, i, r, a[t + 12], 11, 3873151461), r = HH(r, l, c, i, a[t + 15], 16, 530742520), c = II(c, i = HH(i, r, l, c, a[t + 2], 23, 3299628645), r, l, a[t + 0], 6, 4096336452), l = II(l, c, i, r, a[t + 7], 10, 1126891415), r = II(r, l, c, i, a[t + 14], 15, 2878612391), i = II(i, r, l, c, a[t + 5], 21, 4237533241), c = II(c, i, r, l, a[t + 12], 6, 1700485571), l = II(l, c, i, r, a[t + 3], 10, 2399980690), r = II(r, l, c, i, a[t + 10], 15, 4293915773), i = II(i, r, l, c, a[t + 1], 21, 2240044497), c = II(c, i, r, l, a[t + 8], 6, 1873313359), l = II(l, c, i, r, a[t + 15], 10, 4264355552), r = II(r, l, c, i, a[t + 6], 15, 2734768916), i = II(i, r, l, c, a[t + 13], 21, 1309151649), c = II(c, i, r, l, a[t + 4], 6, 4149444226), l = II(l, c, i, r, a[t + 11], 10, 3174756917), r = II(r, l, c, i, a[t + 2], 15, 718787259), i = II(i, r, l, c, a[t + 9], 21, 3951481745), c = AddUnsigned(c, o), i = AddUnsigned(i, s), r = AddUnsigned(r, n), l = AddUnsigned(l, d);return (WordToHex(c) + WordToHex(i) + WordToHex(r) + WordToHex(l)).toLowerCase();
}function RotateLeft(e, a) {
  return e << a | e >>> 32 - a;
}function AddUnsigned(e, a) {
  var t, o, s;return t = 2147483648 & e, o = 2147483648 & a, s = (1073741823 & e) + (1073741823 & a), (e = 1073741824 & e) & (a = 1073741824 & a) ? 2147483648 ^ s ^ t ^ o : e | a ? 1073741824 & s ? 3221225472 ^ s ^ t ^ o : 1073741824 ^ s ^ t ^ o : s ^ t ^ o;
}function F(e, a, t) {
  return e & a | ~e & t;
}function G(e, a, t) {
  return e & t | a & ~t;
}function H(e, a, t) {
  return e ^ a ^ t;
}function I(e, a, t) {
  return a ^ (e | ~t);
}function FF(e, a, t, o, s, n, c) {
  return e = AddUnsigned(e, AddUnsigned(AddUnsigned(F(a, t, o), s), c)), AddUnsigned(RotateLeft(e, n), a);
}function GG(e, a, t, o, s, n, c) {
  return e = AddUnsigned(e, AddUnsigned(AddUnsigned(G(a, t, o), s), c)), AddUnsigned(RotateLeft(e, n), a);
}function HH(e, a, t, o, s, n, c) {
  return e = AddUnsigned(e, AddUnsigned(AddUnsigned(H(a, t, o), s), c)), AddUnsigned(RotateLeft(e, n), a);
}function II(e, a, t, o, s, n, c) {
  return e = AddUnsigned(e, AddUnsigned(AddUnsigned(I(a, t, o), s), c)), AddUnsigned(RotateLeft(e, n), a);
}function ConvertToWordArray(e) {
  var a;var t = e.length;var o = t + 8;o = 16 * (1 + (o - o % 64) / 64);var s = Array(o - 1);var n = 0;var c = 0;for (; c < t;) n = c % 4 * 8, s[a = (c - c % 4) / 4] = s[a] | e.charCodeAt(c) << n, c++;return s[a = (c - c % 4) / 4] = s[a] | 128 << (n = c % 4 * 8), s[o - 2] = t << 3, s[o - 1] = t >>> 29, s;
}function WordToHex(e) {
  var a,
      t = "",
      o = "";for (a = 0; a <= 3; a++) t += (o = "0" + (e >>> 8 * a & 255).toString(16)).substr(o.length - 2, 2);return t;
}function Utf8Encode(e) {
  var a = "";for (var t = 0; t < e.length; t++) {
    var o = e.charCodeAt(t);o < 128 ? a += String.fromCharCode(o) : a = 127 < o && o < 2048 ? (a += String.fromCharCode(o >> 6 | 192)) + String.fromCharCode(63 & o | 128) : (a = (a += String.fromCharCode(o >> 12 | 224)) + String.fromCharCode(o >> 6 & 63 | 128)) + String.fromCharCode(63 & o | 128);
  }return a;
}module.exports = { init: init, pay: pay, getCaptcha: getCaptcha, bindTelephone: bindTelephone, pushData: pushData, msgSecCheck: msgSecCheck, subscribeMessage: subscribeMessage, shareAppMessage: shareAppMessage, state: state, isJumpGame: isJumpGame, advertisement: advertisement, getLaunchOptionsSync: getLaunchOptionsSync, getWhatsNewSubscriptionsSetting: getWhatsNewSubscriptionsSetting, requestSubscribeWhatsNew: requestSubscribeWhatsNew, openData: openData, cutGame: cutGame, jumpState: jumpState, getRedPagState: getRedPagState, redLogin: redLogin, getWxUserInfo: getWxUserInfo, getRedPackageList: getRedPackageList, getRedConfig: getRedConfig, toReceiveRedPackage: toReceiveRedPackage, getRedDetailList: getRedDetailList, getShareList: getShareList, toRedShare: toRedShare, toWithdraw: toWithdraw, getOpenId: getOpenId, getLuckDrawIndex: getLuckDrawIndex, luckyDraw: luckyDraw, showAppModal: showAppModal, getSquareList: getSquareList, squareClick: squareClick, showSquareOn: showSquareOn, gameWithdraw: gameWithdraw, getChangeShellOn: getChangeShellOn, toCouponReceive: toCouponReceive, gameLive: gameLive, toQQGroup: toQQGroup };