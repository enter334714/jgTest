var b = wx.$e;
const state = { initStatus: b[40331], loginStatus: b[40331], videoAd: null, bannerAd: null, gridAd: null, interstitialAd: null, customAd: null };const commonParams = { referer: b[68917], partner: b[68918], mac: "", imei: "", gameId: "", gameKey: "", uid: "", unionId: "", code: "", openid: "", wxid: "", ip: "", sign: "", payType: "", encryptedData: "", iv: "", scene: "", query: "", yy_pf: b[68919], payTip: b[68920], accountInfo: {}, envVersion: "", showAppOn: "", sendMessageImg: "", sendMessageTitle: "", referrerInfo: null, switchApp: "", showSwitchOn: "", showRedPagOn: "", token: "", showSquareOn: "", initTimer: "", sdkLoginTimer: "", feedId: "", finderUserName: "", QQGroup: {} };let httpLock = { httpRedListFlag: !1, httpReceiveRedPackageFlag: !1, httpLuckDrawFlag: !1, httpRedLoginFlag: !1, httpToWithdraw: !1, httpLuckDrawIndex: !1, httpSquareListFlag: !1, httpSquareClickFlag: !1, httpGameWithdraw: !1, httpToCouponReceiveFlag: !1, httpLiveTaskFlag: !1, httpToLiveTaskReceiveFlag: !1, httpGetUserLiveInfoFlag: !1 };var sdkParams = null;state.debug = !0, state.level = { debug: 0, info: 1, warn: 2, error: 3 };let api = b[68921];let wanBaApi = b[68922];let logApi = b[68923];let wxRedApi = b[68924];const Tools = { getDeviceType: () => {
    const e = wx.getSystemInfoSync();let a;return a = -1 < e.system.toLowerCase().indexOf(b[68925]) ? b[68925] : -1 < e.system.toLowerCase().indexOf(b[68926]) ? b[68926] : -1 < e.system.toLowerCase().indexOf(b[47765]) ? b[47765] : b[68927];
  }, getTimeStamp: () => Date.parse(new Date()) / 1e3, buildActiveParams: (e, a) => {
    let t = "";for (var o in e) t += e[o];return t += a, e.sign = md5(t), e;
  }, buildChangeShell: (e, a) => {
    let t = "";for (var o in e) t += e[o];return t += a, e.sign = md5(t), e;
  }, buildLoginParams: e => {
    var a = [b[68928], b[68929], b[68930], b[68931], b[40853]];let t = "";for (var o in a) {
      o = a[o];t += e[o];
    }return t += commonParams.gameKey, e.sign = md5(t), e;
  }, buildBindParams: e => {
    var a = [b[68929], b[68932], b[68933], b[40853]];let t = "";for (var o in a) {
      o = a[o];t += e[o];
    }return t += commonParams.gameKey, e.sign = md5(t), e;
  }, buildPayParams: e => {
    var a = [b[68929], b[68928], b[68930], b[47699], b[58793], b[40853]];let t = "";for (var o in a) {
      o = a[o];t += e[o];
    }return t = t + commonParams.gameKey + commonParams.wxid, e.sign = md5(t), e;
  }, buildRepublish: e => {
    var a = [b[47699], b[68929], b[68928], b[68930], b[40853]];let t = "";for (var o in a) {
      o = a[o];t += e[o];
    }return md5(t = t + commonParams.gameKey + commonParams.wxid).toLowerCase();
  }, buildCheckMsg(e) {
    var a = [b[68929], b[68930], b[68928], b[40853]];let t = "";for (var o in a) {
      o = a[o];t += e[o];
    }return t += commonParams.gameKey, e.sign = md5(t).toLowerCase(), e;
  }, getDeviceTypeId: () => {
    var e = Tools.getDeviceType();let a = b[68927];return b[68926] == e ? a = 1 : b[68925] == e ? a = 2 : b[47765] == e && (a = 3), a;
  }, buildParams: e => {
    let a = "";const t = [];for (var o in e) t.push(o);for (var s in t.sort()) a += e[t[s]];return a += commonParams.gameKey, e.sign = md5(a), e;
  }, serialize: e => {
    var a = [];for (var t in e) e.hasOwnProperty(t) && e[t] && a.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));return a.join("&");
  }, buildRedParams: e => {
    let a = "";for (var t of Object.keys(e).sort()) e[t] instanceof Array ? a += t + "=" + encodeURIComponent(JSON.stringify(e[t])) + "&" : a += t + "=" + encodeURIComponent(e[t]) + "&";return a += b[68934] + commonParams.gameKey, e.sign = md5(a), e;
  }, initLock: e => {
    for (var a in e) e[a] = !1;
  } };const init = function (e, a) {
  var t, o;b[68935] != typeof this.initLoginCallback ? console.error(b[68936]) : (sdkParams = Tools.buildActiveParams({ gameid: e, referer: commonParams.referer, partner: commonParams.partner, mac: commonParams.mac, imei: commonParams.imei, time: Tools.getTimeStamp() }, a), t = wx.getLaunchOptionsSync(), commonParams.gameId = e, commonParams.gameKey = a, commonParams.scene = t.scene, commonParams.query = t.query, o = wx.getAccountInfoSync(), console.log(b[68937], o), console.log(b[68938], o.miniProgram.envVersion), commonParams.envVersion = o.miniProgram.envVersion, t.query && t.query.share_id && shareBind(t.query), commonParams.referrerInfo = t.referrerInfo, commonParams.extraData = t.referrerInfo.extraData, (o = t.referrerInfo.extraData) && o.from_app_id && o.from_openid && (o = { from_app_id: o.from_app_id, from_openid: o.from_openid }, toBind(o)), console.log(b[68939], t), active(this, sdkParams, e, a));
};const active = function (a, t, o, s) {
  wx.request({ url: api + b[68940], data: t, timeout: 3e3, success: e => {
      e = e.data;if (console.log(b[40567], e), 1 == e.data.code) {
        if (commonParams.gameId = o, commonParams.gameKey = s, state.initStatus = b[49957], commonParams.gameId) {
          let e = {};e.logType = b[40567], e.appId = commonParams.gameId, e.appVersion = b[68941], e.platform = b[68942], e.source = commonParams.query.source || "", e.source_type = commonParams.query.source_type || "", pushData(e);
        }wx.showShareMenu({ withShareTicket: !0 }), wx.setStorageSync(b[68943], []), wxLogin(a);
      } else state.initStatus = b[65745], console.log(b[68944], b[68945] + o, b[68946] + s), commonParams.initTimer && clearTimeout(commonParams.initTimer), commonParams.initTimer = setTimeout(() => {
        active(a, t, o, s);
      }, 2e3);
    }, fail: e => {
      console.log(b[68947]), commonParams.initTimer && clearTimeout(commonParams.initTimer), wx.request({ url: b[68948], timeout: 5e3, success: e => {
          1 === (e = e.data).status && (console.log(b[68949], e.data.host), api = b[68950] + e.data.host, wanBaApi = `https://wanba.${e.data.host}/`, logApi = b[68951] + e.data.host, wxRedApi = `https://idk.${e.data.host}/`), commonParams.initTimer = setTimeout(() => {
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
      null == e.code || null == e.code || "" == e.code ? (console.log(b[68952]), wxLogin(a)) : (e = e.code, wx.getSetting({ complete(e) {
          e.authSetting[b[68953]] && wx.getUserInfo({ success(e) {
              console.log(b[40316], e), commonParams.iv = e.iv, commonParams.encryptedData = e.encryptedData;
            } });
        } }), e = { gameid: commonParams.gameId, referer: commonParams.referer, partner: commonParams.partner, mac: commonParams.mac, imei: commonParams.imei, deviceno: commonParams.imei, time: Tools.getTimeStamp(), code: e, iv: commonParams.iv, osType: b[68926] == Tools.getDeviceType() ? "2" : b[68925] == Tools.getDeviceType() ? "1" : b[47765] == Tools.getDeviceType() ? "3" : b[68927], os: Tools.getDeviceType(), encryptedData: commonParams.encryptedData, scene: commonParams.scene, query: JSON.stringify(commonParams.query), envVersion: commonParams.envVersion, referrerInfo: commonParams.referrerInfo }, console.log(b[68954], e), sdkLogin(a, e));
    }, fail: e => {
      wxLogin(a), console.log(b[68955], e);
    } });
};const sdkLogin = function (t, e) {
  wx.request({ url: api + b[68956], data: Tools.buildLoginParams(e), timeout: 3e3, success: e => {
      var a = e.data;if (1 == a.status) {
        if (commonParams.uid = a.data.uid, commonParams.payType = a.data.payType, commonParams.wxid = a.data.wxid, commonParams.referer = a.data.referer, commonParams.sign = a.data.sign, commonParams.switchApp = a.data.switchApp, commonParams.showSwitchOn = a.data.showSwitchOn, commonParams.switchEnv = a.data.switchEnv, commonParams.showRedPagOn = a.data.showRedPagOn, commonParams.showAppOn = a.data.showAppOn, commonParams.appTitle = a.data.appTitle, commonParams.appContent = a.data.appContent, commonParams.sendMessageImg = a.data.sendMessageImg, commonParams.sendMessageTitle = a.data.sendMessageTitle, commonParams.unionId = a.data.unionId, commonParams.showSquareOn = a.data.showSquareOn, commonParams.QQGroup = a.data.QQGroup, commonParams.JumpGameState = a.data.JumpGameState, console.log(b[68957], commonParams.referrerInfo), commonParams.finderUserName = a.data.live && a.data.live.finderUserName, commonParams.extraData && commonParams.extraData.square && commonParams.extraData.square.square_id && squareBind({ square_id: commonParams.extraData.square.square_id, source_app_id: commonParams.extraData.square.source_app_id, source_open_id: commonParams.extraData.square.source_open_id }), 0 === a.data.payType && (commonParams.payTip = a.data.payTip), state.loginStatus = b[49957], commonParams.uid) {
          let e = {};e.type = "1", pushData(e);
        }if (replenish(), 1 == a.data.isNewUser) {
          let e = {};e.logType = b[68958], e.appId = commonParams.gameId, e.appVersion = b[68941], e.accountId = commonParams.uid, e.deviceType = Tools.getDeviceTypeId(), e.platform = b[68942], e.serverId = "", e.channel = commonParams.partner, e.imei = commonParams.uid, e.sex = "0", e.resolution = wx.getSystemInfoSync().screenWidth + "*" + wx.getSystemInfoSync().screenHeight, e.deviceName = wx.getSystemInfoSync().model, e.systemName = wx.getSystemInfoSync().system, e.source = commonParams.query.source || "", e.source_type = commonParams.query.source_type || "", pushData(e);
        }console.log(b[47699], a.data.uid), console.log(b[68959], a), t.initLoginCallback(a);
      } else console.log(b[68960], e), commonParams.sdkLoginTimer && clearTimeout(commonParams.sdkLoginTimer), commonParams.sdkLoginTimer = setTimeout(() => {
        wxLogin(t);
      }, 2e3);
    }, fail: e => {
      console.log(b[68961], e), commonParams.sdkLoginTimer && clearTimeout(commonParams.sdkLoginTimer), commonParams.sdkLoginTimer = setTimeout(() => {
        wxLogin(t);
      }, 2e3);
    } });
};const jumpState = function () {
  return 1 == commonParams.showSwitchOn;
};const cutGame = function () {
  const a = this;b[68935] != typeof a.cutGameCallback ? console.log(b[68962]) : wx.navigateToMiniProgram({ appId: commonParams.switchApp, extraData: { from_app_id: commonParams.gameId || "", from_openid: commonParams.uid || "" }, envVersion: commonParams.switchEnv || b[68963], success(e) {
      console.log(b[68964], e), a.cutGameCallback({ status: 1, msg: b[49957], data: e });
    }, fail(e) {
      console.log(b[68965], e), a.cutGameCallback({ status: 0, msg: b[65745], data: e });
    } });
};const toBind = function (a) {
  wx.login({ success(e) {
      e = Tools.buildBindParams({ gameid: commonParams.gameId, code: e.code, from_app_id: a.from_app_id, from_openid: a.from_openid, osType: Tools.getDeviceTypeId(), scene: commonParams.scene, query: JSON.stringify(commonParams.query), time: Tools.getTimeStamp() });wx.request({ url: api + b[68966], data: e, timeout: 3e3, success: e => {
          console.log(b[68967], e.data);
        } });
    } });
};const isJumpGame = function () {
  return commonParams.JumpGameState;
};const getCaptcha = function (e, a, t) {
  const o = this;var s;b[68935] == typeof a ? (s = Tools.buildParams({ yy_pf: commonParams.yy_pf, app_id: commonParams.gameId, telephone: e, open_id: commonParams.uid, use: b[40074], time: Tools.getTimeStamp() }), wx.request({ url: wanBaApi + b[68968], data: s, timeout: 3e3, success: e => {
      18e3 === e.data.code ? (console.log(b[68969], e), a(e)) : (console.log(b[68970], e), t(e));
    }, error: e => {
      console.log(b[68971], e);
    } })) : b[68935] != typeof o.getCaptchaCallback ? console.log(b[68972]) : (s = Tools.buildParams({ yy_pf: commonParams.yy_pf, app_id: commonParams.gameId, telephone: e.telephone, open_id: commonParams.uid, use: b[40074], time: Tools.getTimeStamp() }), wx.request({ url: wanBaApi + b[68968], data: s, timeout: 3e3, success: e => {
      18e3 === e.data.code ? (console.log(b[68969], e), o.getCaptchaCallback({ status: 1, msg: b[49957], data: e })) : (console.log(b[68970], e), o.getCaptchaCallback({ status: 0, msg: b[65745], data: e }));
    } }));
};const bindTelephone = function (e, a, t, o) {
  const s = this;b[68935] == typeof t ? (a = Tools.buildParams({ yy_pf: commonParams.yy_pf, app_id: commonParams.gameId, telephone: e, open_id: commonParams.uid, captcha: a, time: Tools.getTimeStamp() }), wx.request({ url: wanBaApi + b[68973], data: a, timeout: 3e3, success: e => {
      (18e3 === e.data.code ? t : o)(e);
    } })) : b[68935] != typeof s.bindTelephoneCallback ? console.log(b[68974]) : (a = Tools.buildParams({ yy_pf: commonParams.yy_pf, app_id: commonParams.gameId, telephone: e.telephone, open_id: commonParams.uid, captcha: e.captcha, time: Tools.getTimeStamp() }), wx.request({ url: wanBaApi + b[68973], data: a, timeout: 3e3, success: e => {
      18e3 === e.data.code ? s.bindTelephoneCallback({ status: 1, msg: b[49957], data: e }) : s.bindTelephoneCallback({ status: 0, msg: b[65745], data: e });
    } }));
};const replenish = function () {
  let t = wx.getStorageSync(b[68943]);if (0 !== t.length) for (let a in t) wx.login({ success(e) {
      t[a].code = e.code, wx.request({ url: api + b[68975], data: t[a], success(e) {
          1 == e.data.status && 1 == e.data.data.status && deleteItme(e.data.data.gameOrderid);
        } });
    } });
};const deleteItme = function (e) {
  let a = wx.getStorageSync(b[68943]);if (0 !== a.length) for (var t in a) a[t].gameOrderid.includes(e) && a.splice(t, 1);wx.setStorageSync(b[68943], a);
};const subscribeMessage = function (e) {
  const a = this;b[68935] != typeof a.subscribeMsgCallback ? console.log(b[68976]) : wx.requestSubscribeMessage({ tmplIds: e, success: function (e) {
      a.subscribeMsgCallback({ status: "1", msg: b[49957], data: e });
    }, fail: function (e) {
      a.subscribeMsgCallback({ status: "0", msg: b[65745], data: e });
    } });
};const shareAppMessage = function (e) {
  wx.shareAppMessage({ title: e.title || "", imageUrl: e.imageUrl, query: e.query, imageUrlId: e.imageUrlId, toCurrentGroup: e.toCurrentGroup, path: e.path });
};const advertisement = function (e) {
  const a = this;let t = {};t.type = 11, t.roleId = e.roleId, t.roleName = e.roleName, t.serverId = e.serverId, b[68977] == e.type ? b[68935] != typeof a.createBannerAdCallback ? console.log(b[68978]) : (t.adType = 1, state.bannerAd = wx.createBannerAd({ adUnitId: e.adUnitId, style: { left: e.left, top: e.top, width: e.width, height: e.height } }), state.bannerAd.onLoad(e => {
    console.log(b[68979], e);
  }), state.bannerAd.showBanner = function () {
    state.bannerAd.show().then(() => {
      console.log(b[68980]), pushData(t), a.createBannerAdCallback({ status: "1", msg: b[49957], data: {} });
    }).catch(e => {
      state.bannerAd.load(), a.createBannerAdCallback({ status: "0", msg: b[65745], data: e });
    });
  }, state.bannerAd.onError(e => {
    console.log(b[68981], e), a.createBannerAdCallback({ status: "0", msg: b[65745], data: e });
  })) : b[68982] == e.type ? b[68935] != typeof a.rewardedVideoAdCallback ? console.log(b[68983]) : (t.adType = 2, state.videoAd = wx.createRewardedVideoAd({ adUnitId: e.adUnitId }), state.videoAd.onLoad().then(() => {
    console.log(b[65718]);
  }), state.videoAd.videoAdShow = function () {
    state.videoAd.show().then(() => {
      console.log(b[68984]);
    }).catch(e => {
      state.videoAd.load(), a.rewardedVideoAdCallback({ status: "-1", msg: b[65745], data: e });
    });
  }, state.videoAd.onClose(e => {
    e && e.isEnded || void 0 === e ? (console.log(b[68985]), pushData(t), a.rewardedVideoAdCallback({ status: "1", msg: b[49957], data: e })) : (console.log(b[68986]), a.rewardedVideoAdCallback({ status: "0", msg: b[65745], data: e }));
  }), state.videoAd.onError(e => {
    console.log(b[68987], e), a.rewardedVideoAdCallback({ status: "0", msg: b[65745], data: e });
  })) : b[68988] == e.type ? b[68935] != typeof a.createInterstitialAdCallback ? console.log(b[68989]) : (t.adType = 3, wx.createInterstitialAd && (state.interstitialAd = wx.createInterstitialAd({ adUnitId: e.adUnitId }), state.interstitialAd.onLoad(() => {
    console.log(b[68990]);
  }), state.interstitialAd.interstitialAdShow = function () {
    state.interstitialAd.show().then(e => {
      console.log(b[68991], e), pushData(t), a.createInterstitialAdCallback({ status: "1", msg: b[49957], data: {} });
    }).catch(e => {
      a.createInterstitialAdCallback({ status: "-1", msg: b[65745], data: e }), state.videoAd.load();
    });
  }, state.interstitialAd.onError(e => {
    console.log(b[68992], e), a.createInterstitialAdCallback({ status: "0", msg: b[65745], data: e });
  }))) : b[68993] == e.type ? b[68935] != typeof a.createGridAdCallback ? console.log(b[68994]) : (t.adType = 4, state.gridAd = wx.createGridAd({ adUnitId: e.adUnitId, style: { left: e.left, top: e.top, width: e.width, opacity: e.opacity } }), state.gridAd.onLoad(() => {
    console.log(b[68995]);
  }), state.gridAd.gridAdShow = function () {
    a.state.gridAd.show().then(() => {
      console.log(b[68996]), pushData(t), a.createGridAdCallback({ status: "1", msg: b[49957], data: {} });
    }).catch(e => {
      console.log(b[68997], e), state.gridAd.load().then(() => state.gridAd.gridAdShow()).catch(e => {
        console.log(b[68997], e);
      });
    });
  }, state.gridAd.onError(e => {
    a.createGridAdCallback({ status: "0", msg: b[65745], data: e }), console.log(b[68998], e);
  })) : b[68999] == e.type && (b[68935] != typeof a.createCustomAdCallback ? console.log(b[69000]) : (t.adType = 5, state.customAd = wx.createCustomAd({ adUnitId: e.adUnitId, style: { left: e.left, top: e.top, fixed: e.fixed } }), state.customAd.onLoad(() => {
    console.log(b[68995]);
  }), state.customAd.customAdShow = function () {
    state.customAd.show().then(e => {
      console.log(b[69001], e), pushData(t), a.createCustomAdCallback({ status: "1", msg: b[49957], data: e });
    }).catch(e => {
      console.log(b[68997], e), state.customAd.load().then(() => state.customAd.customAdShow()).catch(e => {
        console.log(b[69002], e);
      });
    });
  }, state.customAd.onError(e => {
    a.createCustomAdCallback({ status: "0", msg: b[65745], data: e }), console.log(b[68998], e);
  })));
};const getLaunchOptionsSync = function () {
  return wx.getLaunchOptionsSync();
};const openData = function (e) {
  const a = this;b[68935] != typeof a.openDataCallback ? console.error(b[69003]) : b[69004] == e.type ? wx.getPotentialFriendList({ keyList: e.keyList, success: e => {
      a.openDataCallback({ status: "1", msg: b[49957], data: e });
    }, fail: e => {
      a.openDataCallback({ status: "0", msg: b[65745], data: e });
    } }) : b[69005] == e.type ? wx.getGroupCloudStorage({ shareTicket: e.shareTicket, keyList: e.keyList, success: e => {
      a.openDataCallback({ status: "1", msg: b[49957], data: e });
    }, fail: e => {
      a.openDataCallback({ status: "0", msg: b[65745], data: e });
    } }) : b[69006] == e.type && wx.getFriendCloudStorage({ keyList: e.keyList, success: e => {
      a.openDataCallback({ status: "1", msg: b[49957], data: e });
    }, fail: e => {
      a.openDataCallback({ status: "0", msg: b[65745], data: e });
    } });
};const sendResult = function (a) {
  console.log(b[69007], a), wx.login({ success(e) {
      a.code = e.code, a.paytype = 3, wx.request({ url: api + b[69008], data: Tools.buildPayParams(a), success(e) {
          console.log(b[69009], e);
        } });
    } });
};const pay = function (e) {
  const s = this;wx.getSystemInfoSync();var a = Tools.getDeviceType();let t = b[68927];if (b[68926] == a ? t = 2 : b[68925] == a ? t = 1 : b[47765] == a && (t = 3), b[68935] != typeof this.onPayCallback) console.error(b[69010]);else {
    console.log(b[69011], commonParams);const n = { gameOrderid: e.gameOrderid, gameid: commonParams.gameId, sign: commonParams.sign, referer: commonParams.referer, pext: e.pext, pext2: commonParams.partner, sdkType: 3, serverName: e.serverName, deviceno: commonParams.partner, serverId: e.serverId, mac: commonParams.mac, imei: commonParams.imei, productName: e.productName, uid: commonParams.uid, productId: e.productId, roleId: e.roleId, money: e.money, partner: commonParams.partner, roleName: e.roleName, roleLevel: e.roleLevel, partnerType: t, mode: "", wxid: commonParams.wxid, osType: t, os: a, paytype: commonParams.payType, bundleName: commonParams.wxappid, gamever: "", time: Tools.getTimeStamp() };wx.showLoading({ title: b[69012], mask: !0 }), wx.login({ success(e) {
        n.code = e.code, console.log(b[69013], e.code), wx.request({ url: api + b[69008], data: Tools.buildPayParams(n), success: a => {
            let t = wx.getStorageSync(b[68943]);var e = { uid: commonParams.uid, gameOrderid: n.gameOrderid, time: n.time, money: n.money, paytype: commonParams.payType, wxid: commonParams.wxid, deviceno: commonParams.partner, gameid: commonParams.gameId, sign: Tools.buildRepublish(n), partner: commonParams.partner, productId: n.productId, productName: n.productName, roleId: n.roleId, serverName: n.serverName, roleName: n.roleName, pext: n.pext, pext2: n.partner, mode: b[69014] };t.push(e), console.log(b[69015], a.data), wx.hideLoading();var o = a.data;if (commonParams.payType = o.paytype, 1 == a.data.status) switch (s.onPayCallback({ status: "1", msg: b[69016] }), wx.hideLoading(), commonParams.payType) {case 0:
                return void wx.showModal({ title: b[44318], content: commonParams.payTip, showCancel: !1 });case 1:
                wx.setClipboardData({ data: o.data.url, success(e) {
                    wx.showModal({ title: b[44318], content: b[69017], showCancel: !1, confirmText: b[69018], confirmColor: b[69019] });
                  } });break;case 2:
                wx.showModal({ title: b[44318], content: b[69020], showCancel: !1, confirmText: b[49651], success() {
                    wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: n.gameOrderid, sendMessagePath: JSON.stringify(n), sendMessageImg: b[69021], sessionFrom: JSON.stringify(n), success(e) {
                        console.log(e);
                      } });
                  } });break;case 3:
                0 == a.data.errcode && wx.requestMidasPayment({ zoneId: "1", mode: b[69014], env: o.data.env, offerId: o.data.offerId, currencyType: b[69022], platform: b[68925], buyQuantity: o.data.amt, success(e) {
                    wx.setStorageSync(b[68943], t), sendResult(n);
                  }, complete(e) {
                    console.log(b[69023], e);
                  } });break;case 5:
                let e = {};e.goods_name = n.productName, e.gameOrderid = o.gameOrderid, e.money = o.money, e.out_code = o.out_code, e.paytype = o.paytype, wx.navigateToMiniProgram({ appId: o.appid, path: b[69024], envVersion: b[68963], extraData: e, success: function (e) {
                    console.log(b[69025], e);
                  }, fail: function (e) {
                    console.log(b[69026], e), wx.request({ url: api + b[69027] + commonParams.gameId + b[69028] + e.errMsg, success(e) {
                        console.log(b[69029], e);
                      } });
                  }, complete: function (e) {
                    console.log(b[69030], e);
                  } });} else s.onPayCallback({ status: "0", msg: b[69031] });
          } });
      } });
  }
};const getWhatsNewSubscriptionsSetting = function (e) {
  const a = this;b[68935] != typeof a.getWhatsNewSubscriptionsSettingCallback ? console.log(b[69032]) : wx.getWhatsNewSubscriptionsSetting({ msgType: e.msgType, success(e) {
      a.getWhatsNewSubscriptionsSettingCallback({ code: "1", msg: b[49957], data: e });
    }, fail(e) {
      a.getWhatsNewSubscriptionsSettingCallback({ code: "0", msg: b[65745], data: e });
    } });
};const requestSubscribeWhatsNew = function (e) {
  const a = this;b[68935] != typeof a.requestSubscribeWhatsNewCallback ? console.log(b[69033]) : wx.requestSubscribeWhatsNew({ msgType: e.msgType, success(e) {
      a.requestSubscribeWhatsNewCallback({ code: "1", msg: b[49957], data: e });
    }, fail(e) {
      a.requestSubscribeWhatsNewCallback({ code: "0", msg: b[65745], data: e });
    } });
};const getRedPagState = function (e) {
  const a = this;b[68935] != typeof a.getRedPagStateCallback ? console.log(b[69034]) : commonParams.showRedPagOn ? wx.request({ url: wxRedApi + b[69035], data: { app_id: commonParams.gameId, open_id: commonParams.uid, server_id: e.server_id, role_id: e.role_id }, success(e) {
      e = e.data;200 == e.status ? (commonParams.luck_draw_on = e.data.luck_draw_on, commonParams.luck_draw_activity_id = e.data.luck_draw_activity_id, a.getRedPagStateCallback({ status: "1", msg: e.msg, data: e.data })) : a.getRedPagStateCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      a.getRedPagStateCallback({ status: "-1", msg: e.errMsg, data: e }), console.log(b[69036], e);
    }, timeout: 4e3 }) : a.getRedPagStateCallback({ status: "0", msg: b[69037] + commonParams.showRedPagOn, data: commonParams.showRedPagOn });
};const redLogin = function (t) {
  const o = this;b[68935] != typeof o.redLoginCallback ? console.log(b[69038]) : (Tools.initLock(httpLock), wx.login({ success(e) {
      var a;e.code ? (a = { app_id: commonParams.gameId, code: e.code, server_id: t.server_id, server_name: t.server_name, role_id: t.role_id, role_name: t.role_name }, httpLock.httpRedLoginFlag || (httpLock.httpRedLoginFlag = !0, wx.request({ url: wxRedApi + b[69039], method: b[44575], data: Tools.buildRedParams(a), header: { "Content-Type": b[69040] }, success(e) {
          e = e.data;200 == e.status ? (commonParams.token = e.data.token, o.redLoginCallback({ status: "1", msg: e.msg, data: e.data })) : o.redLoginCallback({ status: "0", msg: e.msg, data: e.data });
        }, fail(e) {
          o.redLoginCallback({ status: "-1", msg: e.errMsg, data: e }), console.log(b[56750], e);
        }, complete(e) {
          httpLock.httpRedLoginFlag = !1;
        }, timeout: 4e3 }))) : console.log(b[69041] + e.errMsg);
    } }));
};const getWxUserInfo = function () {
  const a = this;var e;b[68935] != typeof a.getWxUserInfoCallback ? console.log(b[69042]) : (e = { app_id: commonParams.gameId, token: commonParams.token }, wx.request({ url: wxRedApi + b[69043], data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.getWxUserInfoCallback({ status: "1", msg: e.msg, data: e.data }) : a.getWxUserInfoCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log(b[56750], e);
    }, timeout: 4e3 }));
};const getRedPackageList = function () {
  const a = this;var e;b[68935] != typeof a.getRedPackageListCallback ? console.log(b[69044]) : (e = { app_id: commonParams.gameId, token: commonParams.token }, httpLock.httpRedListFlag || (httpLock.httpRedListFlag = !0, wx.request({ url: wxRedApi + b[69045], data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? (commonParams.share_activity_id = e.data.share_activity_id, a.getRedPackageListCallback({ status: "1", msg: e.msg, data: e.data })) : a.getRedPackageListCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      a.getRedPackageListCallback({ status: "-1", msg: e.errMsg, data: e }), console.log(b[56750], e);
    }, complete(e) {
      httpLock.httpRedListFlag = !1;
    }, timeout: 4e3 })));
};const getRedConfig = function () {
  const a = this;var e;b[68935] != typeof a.getRedConfigCallback ? console.log(b[69046]) : (e = { app_id: commonParams.gameId, token: commonParams.token }, wx.request({ url: wxRedApi + b[69047], data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.getRedConfigCallback({ status: "1", msg: e.msg, data: e.data }) : a.getRedConfigCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log(b[56750], e);
    }, timeout: 4e3 }));
};const toReceiveRedPackage = function (e) {
  const a = this;b[68935] != typeof a.toReceiveRedPackageCallback ? console.log(b[69048]) : httpLock.httpReceiveRedPackageFlag || (e = { activity_id: e.activity_id, activity_rule_id: e.activity_rule_id, activity_rule_type: e.activity_rule_type, app_id: commonParams.gameId, token: commonParams.token }, httpLock.httpReceiveRedPackageFlag = !0, wx.request({ url: wxRedApi + b[69049], method: b[44575], data: Tools.buildRedParams(e), header: { "Content-Type": b[69040] }, success(e) {
      e = e.data;200 == e.status ? a.toReceiveRedPackageCallback({ status: "1", msg: e.msg, data: e.data }) : a.toReceiveRedPackageCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log(b[69050], e), a.toReceiveRedPackageCallback({ status: "-1", msg: e.errMsg, data: e });
    }, complete(e) {
      httpLock.httpReceiveRedPackageFlag = !1;
    }, timeout: 4e3 }));
};const getRedDetailList = function () {
  const a = this;var e;b[68935] != typeof a.getRedDetailListCallback ? console.log(b[69051]) : (e = { app_id: commonParams.gameId, token: commonParams.token }, wx.request({ url: wxRedApi + b[69052], data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.getRedDetailListCallback({ status: "1", msg: e.msg, data: e.data }) : a.getRedDetailListCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log(b[69050], e);
    }, timeout: 4e3 }));
};const toWithdraw = function (e) {
  const a = this;b[68935] != typeof a.toWithdrawCallback ? console.log(b[69053]) : (e = { withdraw_amount: e.withdraw_amount, app_id: commonParams.gameId, token: commonParams.token }, httpLock.httpToWithdraw || (httpLock.httpToWithdraw = !0, wx.request({ url: wxRedApi + b[69054], data: Tools.buildRedParams(e), method: b[44575], header: { "Content-Type": b[69040] }, success(e) {
      e = e.data;200 == e.status ? a.toWithdrawCallback({ status: "1", msg: e.msg, data: e.data }) : a.toWithdrawCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      a.toWithdrawCallback({ status: "-1", msg: e.errMsg, data: e }), console.log(b[69050], e);
    }, complete(e) {
      httpLock.httpToWithdraw = !1;
    }, timeout: 4e3 })));
};const toRedShare = function (e) {
  e = { app_id: commonParams.gameId, token: commonParams.token, activity_id: e.share_activity_id };wx.request({ url: wxRedApi + b[69055], data: Tools.buildRedParams(e), success(e) {
      e = e.data;console.log(b[69056], e), 200 == e.status && wx.shareAppMessage({ title: e.data.title || "", imageUrl: e.data.image_url || "", query: Tools.serialize({ share_id: e.data.share_id }), imageUrlId: e.data.image_url_id || "" });
    }, fail(e) {
      console.log(b[69050], e);
    }, timeout: 4e3 });
};const getShareList = function (e) {
  const a = this;b[68935] != typeof a.getShareListCallback ? console.log(b[69057]) : (e = { activity_id: e.share_activity_id, app_id: commonParams.gameId, token: commonParams.token }, wx.request({ url: wxRedApi + b[69058], data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.getShareListCallback({ status: "1", msg: e.msg, data: e.data }) : a.getShareListCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log(b[69050], e);
    }, timeout: 4e3 }));
};const shareBind = function (t) {
  wx.login({ success: e => {
      var a;e.code ? (a = { app_id: commonParams.gameId, share_id: t.share_id, code: e.code }, wx.request({ url: wxRedApi + b[69059], data: Tools.buildRedParams(a), success(e) {
          e = e.data;console.log(b[69060], e.data, e.msg);
        }, fail(e) {
          console.log(b[69061], e);
        }, timeout: 4e3 })) : console.log(b[68952], e);
    } });
};const getLuckDrawIndex = function () {
  const a = this;var e;b[68935] != typeof a.getLuckDrawIndexCallback ? console.log(b[69062]) : (e = { app_id: commonParams.gameId, token: commonParams.token, activity_id: commonParams.luck_draw_activity_id }, httpLock.httpLuckDrawIndex || (httpLock.httpLuckDrawIndex = !0, wx.request({ url: wxRedApi + b[69063], data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.getLuckDrawIndexCallback({ status: "1", msg: e.msg, data: e.data }) : a.getLuckDrawIndexCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      a.getLuckDrawIndexCallback({ status: "-1", msg: e.errMsg, data: e }), console.log(b[69050], e);
    }, complete(e) {
      httpLock.httpLuckDrawIndex = !1;
    }, timeout: 4e3 })));
};const luckyDraw = function () {
  const a = this;var e;b[68935] != typeof a.luckyDrawCallback ? console.log(b[69064]) : (e = { app_id: commonParams.gameId, token: commonParams.token, activity_id: commonParams.luck_draw_activity_id }, httpLock.httpLuckDrawFlag || (httpLock.httpLuckDrawFlag = !0, wx.request({ url: wxRedApi + b[69065], data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.luckyDrawCallback({ status: "1", msg: e.msg, data: e.data }) : a.luckyDrawCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log(b[69050], e), a.luckyDrawCallback({ status: "-1", msg: e.errMsg, data: e });
    }, complete(e) {
      httpLock.httpLuckDrawFlag = !1;
    }, timeout: 4e3 })));
};const getSquareList = function (e) {
  const a = this;if (b[68935] != typeof a.getSquareListCallback) console.log(b[69066]);else if (!httpLock.httpSquareListFlag) {
    httpLock.httpSquareListFlag = !0;const t = { app_id: commonParams.gameId, uid: commonParams.uid, union_id: commonParams.unionId };e && e.type && (t.type = e.type), wx.request({ url: wxRedApi + b[69067], data: Tools.buildRedParams(t), success(e) {
        e = e.data;console.log(b[69068], e), a.getSquareListCallback(e);
      }, complete() {
        httpLock.httpSquareListFlag = !1;
      }, timeout: 4e3 });
  }
};const squareClick = function (a) {
  var e;httpLock.httpSquareClickFlag || (httpLock.httpSquareClickFlag = !0, e = { app_id: commonParams.gameId, square_id: a.square_id, uid: commonParams.uid, union_id: commonParams.unionId }, wx.request({ url: wxRedApi + b[69069], data: Tools.buildRedParams(e), success(e) {
      console.log(b[69070], e), wx.navigateToMiniProgram({ appId: a.wxapp_id, extraData: { square: { square_id: a.square_id, source_app_id: commonParams.gameId, source_open_id: commonParams.uid } }, envVersion: a.app_env, success(e) {} });
    }, complete() {
      httpLock.httpSquareClickFlag = !1;
    }, timeout: 4e3 }));
};const squareBind = function (a) {
  wx.login({ success(e) {
      e = Tools.buildRedParams({ app_id: commonParams.gameId, code: e.code, square_id: a.square_id, source_app_id: a.source_app_id, source_open_id: a.source_open_id });console.log(b[69071], e), wx.request({ url: wxRedApi + b[69072], data: e, timeout: 5e3, success: e => {
          console.log(b[69073], e);
        } });
    } });
};const gameWithdraw = function (e) {
  const a = this;b[68935] != typeof a.gameWithdrawCallback ? console.log(b[69074]) : (e = { app_id: commonParams.gameId, withdraw_amount: e.withdraw_amount, open_id: commonParams.uid }, httpLock.httpGameWithdraw || (httpLock.httpGameWithdraw = !0, wx.request({ url: wxRedApi + b[69075], data: Tools.buildRedParams(e), method: b[44575], header: { "Content-Type": b[69040] }, success(e) {
      e = e.data;a.gameWithdrawCallback(e);
    }, fail(e) {
      a.gameWithdrawCallback(e), console.log(b[69050], e);
    }, complete(e) {
      httpLock.httpGameWithdraw = !1;
    }, timeout: 4e3 })));
};const toCouponReceive = function (e) {
  const a = this;if (b[68935] != typeof a.toCouponReceiveCallback) console.log(b[69076]);else if (!httpLock.httpToCouponReceiveFlag) {
    httpLock.httpToCouponReceiveFlag = !0;const t = { app_id: commonParams.gameId, openid: commonParams.uid, union_id: commonParams.unionId, os_type: Tools.getDeviceTypeId() };e.tag && (t.tag = e.tag), wx.request({ url: wxRedApi + b[69077], data: Tools.buildRedParams(t), method: b[44575], success(e) {
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
  const t = this;var o;b[68935] != typeof t.getChangeShellOnCallback ? console.log(b[69078]) : (commonParams.gameId = e, commonParams.gameKey = a, o = wx.getAccountInfoSync(), console.log(b[68937], o), console.log(b[68938], o.miniProgram.envVersion), commonParams.envVersion = o.miniProgram.envVersion, wx.request({ url: api + b[69079], data: Tools.buildChangeShell({ gameid: e, envVersion: commonParams.envVersion, time: Tools.getTimeStamp() }, a), success(e) {
      t.getChangeShellOnCallback(e.data);
    }, timeout: 4e3 }));
};const showAppModal = function () {
  commonParams.showAppOn && wx.showModal({ title: commonParams.appTitle, content: commonParams.appContent || b[69080], cancelText: b[69081], confirmText: b[69082], success(e) {
      e.confirm ? wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: commonParams.sendMessageTitle, sendMessageImg: commonParams.sendMessageImg, complete(e) {
          console.log(b[69083], e);
        } }) : e.cancel && console.log(b[69084]);
    } });
};const toQQGroup = function () {
  wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: commonParams.QQGroup.sendMessageTitle, sendMessageImg: commonParams.QQGroup.sendMessageImg, complete(e) {
      console.log(b[69083], e);
    } });
};const msgSecCheck = function (e, a) {
  var t = -1 < Object.prototype.toString.call(e).indexOf(b[69085]);var o = -1 < Object.prototype.toString.call(e).indexOf(b[69086]);var s = {};if (t) s = { gameid: commonParams.gameId, partner: commonParams.partner, deviceno: commonParams.partner, time: Tools.getTimeStamp(), content: e };else {
    if (!o) return void console.log(b[69087]);if (!e.content) return void console.log(b[69088]);s = Object.assign({ openid: commonParams.uid, gameid: commonParams.gameId, partner: commonParams.partner, deviceno: commonParams.partner, time: Tools.getTimeStamp() }, e);
  }e ? wx.request({ url: api + b[69089], data: Tools.buildCheckMsg(s), success(e) {
      console.log(b[69090], e.data), a(e.data);
    } }) : a({ err: 0, msg: b[69091] });
};const gameLive = { startGameLive() {
    const a = this;b[68935] == typeof a.startGameLiveCallback ? wx.startGameLive({ success(e) {
        a.startGameLiveCallback({ status: "1", msg: "", data: e }), console.log(b[69092], e);
      }, fail(e) {
        console.error(b[69092], e), a.startGameLiveCallback({ status: "0", msg: "", data: e });
      } }) : console.log(b[69093]);
  }, checkGameLiveEnabled() {
    const a = this;b[68935] == typeof a.checkGameLiveEnabledCallback ? wx.checkGameLiveEnabled({ success(e) {
        a.checkGameLiveEnabledCallback({ status: "1", msg: "", data: e }), console.log(b[69094], e);
      }, fail(e) {
        a.checkGameLiveEnabledCallback({ status: "0", msg: "", data: e });
      } }) : console.log(b[69095]);
  }, onGameLiveStateChange() {
    const a = this;b[68935] == typeof a.onGameLiveStateChangeCallback ? wx.onGameLiveStateChange(e => {
      b[40289] === e.state && wx.getUserRecentGameLiveInfo({ success(e) {
          e.feedIdList && (console.log(b[69096], e), wx.getUserGameLiveDetails({ feedIdList: [e.feedIdList[0]], success(e) {
              if (console.log(b[69097], e), e.cloudID) {
                const a = { app_id: commonParams.gameId, encrypted_data: e.encryptedData, cloudID: e.cloudID, iv: e.iv };wx.login({ success: e => {
                    null == e.code || null == e.code || "" == e.code ? console.log(b[68952]) : (a.code = e.code, wx.request({ url: wxRedApi + b[69098], method: b[44575], data: Tools.buildRedParams(a), success(e) {
                        console.log(b[69099], e);
                      }, fail(e) {
                        console.log(b[69100], e);
                      }, timeout: 1e4 }));
                  } });
              }
            } }));
        } }), a.onGameLiveStateChangeCallback(e);
    }) : console.log(b[69101]);
  }, offGameLiveStateChange() {
    wx.offGameLiveStateChange();
  }, getGameLiveState() {
    var e;b[68935] == typeof this.getGameLiveStateCallback ? (e = wx.getGameLiveState(), this.getGameLiveStateCallback(e), console.log(b[69102], e)) : console.log(b[69103]);
  }, getUserCurrentGameliveInfo() {
    const a = this;b[68935] == typeof a.getUserCurrentGameliveInfoCallback ? wx.getUserCurrentGameliveInfo({ success(e) {
        a.getUserCurrentGameliveInfoCallback({ status: "1", msg: "", data: e }), console.log(b[69104], e);
      }, fail(e) {
        console.log(b[69104], e), a.getUserCurrentGameliveInfoCallback({ status: "0", msg: "", data: e });
      } }) : console.log(b[69105]);
  }, getUserRecentGameLiveInfo() {
    const a = this;b[68935] == typeof a.getUserRecentGameLiveInfoCallback ? wx.getUserRecentGameLiveInfo({ success(e) {
        a.getUserRecentGameLiveInfoCallback({ status: "1", msg: "", data: e }), console.log(b[69106], e);
      }, fail(e) {
        a.getUserRecentGameLiveInfoCallback({ status: "0", msg: "", data: e });
      } }) : console.log(b[69107]);
  }, getUserGameLiveDetails(e = {}) {
    const a = this;b[68935] == typeof a.getUserGameLiveDetailsCallback ? e.feedIdList ? wx.getUserGameLiveDetails({ feedIdList: e.feedIdList, success(e) {
        console.log(b[69108], e), a.getUserGameLiveDetailsCallback({ status: "1", msg: "", data: e });
      }, fail(e) {
        a.getUserGameLiveDetailsCallback({ status: "0", msg: "", data: e });
      } }) : console.log(b[69109]) : console.log(b[69110]);
  }, openChannelsLiveCollection(e = {}) {
    wx.openChannelsLiveCollection({ openIds: e.openIds || [] });
  }, getChannelsLiveNoticeInfo(e = {}) {
    const a = this;b[68935] == typeof a.getChannelsLiveNoticeInfoCallback ? e.finderUserName ? wx.getChannelsLiveNoticeInfo({ finderUserName: e.finderUserName || "", feedId: e.feedId || "", nonceId: e.nonceId || "", success(e) {
        console.log(b[69111], e), a.getChannelsLiveNoticeInfoCallback({ status: "1", msg: "", data: e });
      }, fail(e) {
        console.log(b[69111], e), a.getChannelsLiveNoticeInfoCallback({ status: "0", msg: "", data: e });
      } }) : console.log(b[69112]) : console.log(b[69113]);
  }, getChannelsLiveInfo(e = {}) {
    const a = this;b[68935] == typeof a.getChannelsLiveInfoCallback ? e.finderUserName ? wx.getChannelsLiveInfo({ finderUserName: e.finderUserName, success: function (e) {
        console.log(b[69114], e), a.getChannelsLiveInfoCallback({ status: "1", msg: "", data: e });
      }, fail: function (e) {
        console.log(b[69114], e), a.getChannelsLiveInfoCallback({ status: "0", msg: "", data: e });
      } }) : console.log(b[69112]) : console.log(b[69115]);
  }, openChannelsLive(e = {}) {
    const a = this;b[68935] == typeof a.openChannelsLiveCallback ? e.finderUserName ? wx.openChannelsLive({ finderUserName: e.finderUserName, success: function (e) {
        console.log(b[69116], e), a.openChannelsLiveCallback({ status: "1", msg: "", data: e });
      }, fail: function (e) {
        console.log(b[69116], e), a.openChannelsLiveCallback({ status: "0", msg: "", data: e });
      } }) : console.log(b[69112]) : console.log(b[69117]);
  }, reserveChannelsLive(e = {}) {
    const a = this;b[68935] == typeof a.reserveChannelsLiveCallback ? e.noticeId ? wx.reserveChannelsLive({ noticeId: e.noticeId || "", success(e) {
        console.log(b[69118], e), a.reserveChannelsLiveCallback({ status: "1", msg: "", data: e });
      }, fail(e) {
        console.log(b[69118], e), a.reserveChannelsLiveCallback({ status: "0", msg: "", data: e });
      } }) : console.log(b[69119]) : console.log(b[69120]);
  }, getLiveTask() {
    const a = this;var e;b[68935] != typeof a.getLiveTaskCallback ? console.log(b[69121]) : (e = { app_id: commonParams.gameId, open_id: commonParams.uid, union_id: commonParams.unionId }, httpLock.httpLiveTaskFlag || (httpLock.httpLiveTaskFlag = !0, wx.request({ url: wxRedApi + b[69122], data: Tools.buildRedParams(e), success(e) {
        e = e.data, a.getLiveTaskCallback(e);
      }, fail(e) {
        a.getLiveTaskCallback(e), console.log(b[69050], e);
      }, complete(e) {
        httpLock.httpLiveTaskFlag = !1;
      }, timeout: 4e3 })));
  }, toLiveTaskReceive(e) {
    const a = this;b[68935] != typeof a.toLiveTaskReceiveCallback ? console.log(b[69123]) : httpLock.httpToLiveTaskReceiveFlag || (httpLock.httpToLiveTaskReceiveFlag = !0, e = { app_id: commonParams.gameId, open_id: commonParams.uid, union_id: commonParams.unionId, live_id: e.live_id, role_id: e.role_id || "", role_name: e.role_name || "", server_id: e.server_id || "", server_name: e.server_name || "", level: e.level || "" }, wx.request({ url: wxRedApi + b[69124], data: Tools.buildRedParams(e), method: b[44575], success(e) {
        e = e.data, a.toLiveTaskReceiveCallback(e);
      }, fail(e) {
        a.toLiveTaskReceiveCallback(e), console.log(b[69050], e);
      }, complete() {
        httpLock.httpToLiveTaskReceiveFlag = !1;
      }, timeout: 1e4 }));
  }, getUserLiveInfo(e) {
    const a = this;b[68935] != typeof a.getUserLiveInfoCallback ? console.log(b[69125]) : httpLock.httpGetUserLiveInfoFlag || (httpLock.httpGetUserLiveInfoFlag = !0, e = { app_id: commonParams.gameId, open_id: commonParams.uid, union_id: commonParams.unionId, role_id: e.role_id || "", role_name: e.role_name || "", server_id: e.server_id || "", server_name: e.server_name || "", level: e.level || "" }, wx.request({ url: wxRedApi + b[69126], data: Tools.buildRedParams(e), success(e) {
        e = e.data, a.getUserLiveInfoCallback(e);
      }, fail(e) {
        a.getUserLiveInfoCallback(e), console.log(b[69050], e);
      }, complete() {
        httpLock.httpGetUserLiveInfoFlag = !1;
      }, timeout: 1e4 }));
  } };const pushData = function (a) {
  "0" != a.type && (a.accountId = commonParams.uid, a.appId = commonParams.gameId, a.appVersion = b[68941], a.platform = b[68942], a.channel = commonParams.partner, a.source = commonParams.query.source || "", a.source_type = commonParams.query.source_type || "", a.systemName = Tools.getDeviceType(), a.deviceName = wx.getSystemInfoSync().model, a.resolution = wx.getSystemInfoSync().screenWidth + "*" + wx.getSystemInfoSync().screenHeight, a.deviceType = Tools.getDeviceTypeId(), a.referer = commonParams.referer, a.idfa = "", a.ip = "", a.mac = "", a.imei = commonParams.uid, a.sex = "0", a.network = "", a.country = "86", a.operators = ""), "1" == a.type ? (a.logType = b[69013], a.region = "0", a.channelAccid = commonParams.uid, delete a.startLevel, delete a.endLevel) : "2" == a.type ? (a.roleId || console.log(b[69127]), a.roleName || console.log(b[69128]), a.logType = b[69129], a.region = "0", a.channelAccid = commonParams.uid, delete a.startLevel, delete a.endLevel) : "4" == a.type ? (a.roleId || console.log(b[69127]), a.roleName || console.log(b[69128]), a.logType = b[69130], a.region = "0", a.levelType = "1", a.duration = "0", a.channelAccid = commonParams.uid, delete a.serverName) : "5" == a.type ? (a.logType = b[69131], delete a.resolution, delete a.deviceType, delete a.mac, delete a.sex, delete a.network, delete a.country, delete a.operators) : 6 == a.type ? (a.logType = b[69132], delete a.resolution, delete a.deviceType, delete a.mac, delete a.sex, delete a.network, delete a.country, delete a.operators, a.shareType = "1") : 9 == a.type ? (a.logType = b[40509], delete a.resolution, delete a.deviceType, delete a.deviceName, delete a.mac, delete a.sex, delete a.network, delete a.country, delete a.operators, delete a.imei) : 10 == a.type ? (a.logType = b[69133], a.channelAccid = commonParams.uid) : 11 == a.type && (a.logType = b[69134], a.channelAccid = commonParams.uid), delete a.type, wx.request({ url: logApi + b[69135], data: { data: JSON.stringify(a) }, success: function (e) {
      console.log(a.logType, e.data);
    } });
};function setLog(e, a) {
  1 == state.debug && (a == state.level.error ? console.log(b[69136] + e, b[69137]) : a == state.level.warn ? console.log(b[69138] + e, b[69139]) : a == state.level.debug ? console.log(b[69140] + e, b[69139]) : console.log(b[69141] + e, b[69139]));
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