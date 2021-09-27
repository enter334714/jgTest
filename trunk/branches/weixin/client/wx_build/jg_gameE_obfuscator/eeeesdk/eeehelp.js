var b = wx.$e;
const state = { initStatus: b[30307], loginStatus: b[30307], videoAd: null, bannerAd: null, gridAd: null, interstitialAd: null, customAd: null };const commonParams = { referer: b[55866], partner: b[55867], mac: "", imei: "", gameId: "", gameKey: "", uid: "", unionId: "", code: "", openid: "", wxid: "", ip: "", sign: "", payType: "", encryptedData: "", iv: "", scene: "", query: "", yy_pf: b[55868], payTip: b[55869], accountInfo: {}, envVersion: "", showAppOn: "", sendMessageImg: "", sendMessageTitle: "", referrerInfo: null, switchApp: "", showSwitchOn: "", showRedPagOn: "", token: "", showSquareOn: "", initTimer: "", sdkLoginTimer: "" };let httpLock = { httpRedListFlag: !1, httpReceiveRedPackageFlag: !1, httpLuckDrawFlag: !1, httpRedLoginFlag: !1, httpToWithdraw: !1, httpLuckDrawIndex: !1, httpSquareListFlag: !1, httpSquareClickFlag: !1, httpGameWithdraw: !1 };var sdkParams = null;state.debug = !0, state.level = { debug: 0, info: 1, warn: 2, error: 3 };const api = b[55870];const wanBaApi = b[55871];const logApi = b[55872];const wxRedApi = b[55873];const Tools = { getDeviceType: () => {
    const e = wx.getSystemInfoSync();let a;return a = -1 < e.system.toLowerCase().indexOf(b[55874]) ? b[55874] : -1 < e.system.toLowerCase().indexOf(b[55875]) ? b[55875] : -1 < e.system.toLowerCase().indexOf(b[38579]) ? b[38579] : b[55876], a;
  }, getTimeStamp: () => Date.parse(new Date()) / 1e3, buildActiveParams: (e, a) => {
    let t = "";for (var o in e) t += e[o];return t += a, e.sign = md5(t), e;
  }, buildChangeShell: (e, a) => {
    let t = "";for (var o in e) t += e[o];return t += a, e.sign = md5(t), e;
  }, buildLoginParams: e => {
    var a = [b[55877], b[55878], b[55879], b[55880], b[30769]];let t = "";for (var o in a) {
      o = a[o];t += e[o];
    }return t += commonParams.gameKey, e.sign = md5(t), e;
  }, buildBindParams: e => {
    var a = [b[55878], b[55881], b[55882], b[30769]];let t = "";for (var o in a) {
      o = a[o];t += e[o];
    }return t += commonParams.gameKey, e.sign = md5(t), e;
  }, buildPayParams: e => {
    var a = [b[55878], b[55877], b[55879], b[53829], b[46727], b[30769]];let t = "";for (var o in a) {
      o = a[o];t += e[o];
    }return t = t + commonParams.gameKey + commonParams.wxid, e.sign = md5(t), e;
  }, buildRepublish: e => {
    var a = [b[53829], b[55878], b[55877], b[55879], b[30769]];let t = "";for (var o in a) {
      o = a[o];t += e[o];
    }return t = t + commonParams.gameKey + commonParams.wxid, md5(t).toLowerCase();
  }, buildCheckMsg(e) {
    var a = [b[55878], b[55879], b[55877], b[30769]];let t = "";for (var o in a) {
      o = a[o];t += e[o];
    }return t += commonParams.gameKey, e.sign = md5(t).toLowerCase(), e;
  }, getDeviceTypeId: () => {
    var e = Tools.getDeviceType();let a = b[55876];return b[55875] == e ? a = 1 : b[55874] == e ? a = 2 : b[38579] == e && (a = 3), a;
  }, buildParams: e => {
    let a = "";const t = [];for (var o in e) t.push(o);for (var s in t.sort()) a += e[t[s]];return a += commonParams.gameKey, e.sign = md5(a), e;
  }, serialize: e => {
    var a = [];for (var t in e) e.hasOwnProperty(t) && e[t] && a.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t]));return a.join("&");
  }, buildRedParams: e => {
    let a = "";for (var t of Object.keys(e).sort()) a += t + "=" + encodeURIComponent(e[t]) + "&";return a += b[55883] + commonParams.gameKey, e.sign = md5(a), e;
  }, initLock: e => {
    for (var a in e) e[a] = !1;
  } };const init = function (e, a) {
  var t, o;b[55784] != typeof this.initLoginCallback ? console.error(b[55884]) : (sdkParams = Tools.buildActiveParams({ gameid: e, referer: commonParams.referer, partner: commonParams.partner, mac: commonParams.mac, imei: commonParams.imei, time: Tools.getTimeStamp() }, a), t = wx.getLaunchOptionsSync(), commonParams.gameId = e, commonParams.gameKey = a, commonParams.scene = t.scene, commonParams.query = t.query, o = wx.getAccountInfoSync(), console.log(b[55885], o), console.log(b[55886], o.miniProgram.envVersion), commonParams.envVersion = o.miniProgram.envVersion, t.query && t.query.share_id && shareBind(t.query), commonParams.referrerInfo = t.referrerInfo, commonParams.extraData = t.referrerInfo.extraData, (o = t.referrerInfo.extraData) && o.from_app_id && o.from_openid && (o = { from_app_id: o.from_app_id, from_openid: o.from_openid }, toBind(o)), console.log(b[55887], t), active(this, sdkParams, e, a));
};const active = function (a, t, o, s) {
  wx.request({ url: api + b[55888], data: t, timeout: 3e3, success: e => {
      e = e.data;if (console.log(b[30504], e), 1 == e.data.code) {
        if (wx.showToast({ title: b[53239], icon: b[55889], duration: 500, mask: !0 }), commonParams.gameId = o, commonParams.gameKey = s, state.initStatus = b[38687], commonParams.gameId) {
          let e = {};e.logType = b[30504], e.appId = commonParams.gameId, e.appVersion = b[55890], e.platform = b[55891], e.source = commonParams.query.source || "", e.source_type = commonParams.query.source_type || "", pushData(e);
        }wx.showShareMenu({ withShareTicket: !0 }), wx.setStorageSync(b[55892], []), wxLogin(a);
      } else state.initStatus = b[55893], console.log(b[55894], b[55895] + o, b[55896] + s), commonParams.initTimer && clearTimeout(commonParams.initTimer), commonParams.initTimer = setTimeout(() => {
        active(a, t, o, s);
      }, 2e3);
    }, fail: e => {
      console.log(b[55897]), commonParams.initTimer && clearTimeout(commonParams.initTimer), commonParams.initTimer = setTimeout(() => {
        active(a, t, o, s);
      }, 2e3);
    } });
};const wxLogin = function (a) {
  wx.login({ success: e => {
      null == e.code || null == e.code || "" == e.code ? (console.log(b[55898]), wxLogin(a)) : (e = e.code, wx.getSetting({ complete(e) {
          e.authSetting[b[55899]] && wx.getUserInfo({ success(e) {
              console.log(b[30295], e), commonParams.iv = e.iv, commonParams.encryptedData = e.encryptedData;
            } });
        } }), e = { gameid: commonParams.gameId, referer: commonParams.referer, partner: commonParams.partner, mac: commonParams.mac, imei: commonParams.imei, deviceno: commonParams.imei, time: Tools.getTimeStamp(), code: e, iv: commonParams.iv, osType: b[55875] == Tools.getDeviceType() ? "2" : b[55874] == Tools.getDeviceType() ? "1" : b[38579] == Tools.getDeviceType() ? "3" : b[55876], os: Tools.getDeviceType(), encryptedData: commonParams.encryptedData, scene: commonParams.scene, query: JSON.stringify(commonParams.query), envVersion: commonParams.envVersion, referrerInfo: commonParams.referrerInfo }, sdkLogin(a, e));
    }, fail: e => {
      wxLogin(a), console.log(b[55900], e);
    } });
};const sdkLogin = function (t, e) {
  wx.request({ url: api + b[55901], data: Tools.buildLoginParams(e), timeout: 3e3, success: e => {
      var a = e.data;if (1 == a.status) {
        if (commonParams.uid = a.data.uid, commonParams.payType = a.data.payType, commonParams.wxid = a.data.wxid, commonParams.referer = a.data.referer, commonParams.sign = a.data.sign, commonParams.switchApp = a.data.switchApp, commonParams.showSwitchOn = a.data.showSwitchOn, commonParams.switchEnv = a.data.switchEnv, commonParams.showRedPagOn = a.data.showRedPagOn, commonParams.showAppOn = a.data.showAppOn, commonParams.appTitle = a.data.appTitle, commonParams.appContent = a.data.appContent, commonParams.sendMessageImg = a.data.sendMessageImg, commonParams.sendMessageTitle = a.data.sendMessageTitle, commonParams.unionId = a.data.unionId, commonParams.showSquareOn = a.data.showSquareOn, console.log(b[55902], commonParams.referrerInfo), commonParams.extraData && commonParams.extraData.square && commonParams.extraData.square.square_id && squareBind({ square_id: commonParams.extraData.square.square_id, source_app_id: commonParams.extraData.square.source_app_id, source_open_id: commonParams.extraData.square.source_open_id }), 0 === a.data.payType && (commonParams.payTip = a.data.payTip), state.loginStatus = b[38687], commonParams.uid) {
          let e = {};e.type = "1", pushData(e);
        }if (replenish(), 1 == a.data.isNewUser) {
          let e = {};e.logType = b[55903], e.appId = commonParams.gameId, e.appVersion = b[55890], e.accountId = commonParams.uid, e.deviceType = Tools.getDeviceTypeId(), e.platform = b[55891], e.serverId = "", e.channel = commonParams.partner, e.imei = commonParams.uid, e.sex = "0", e.resolution = wx.getSystemInfoSync().screenWidth + "*" + wx.getSystemInfoSync().screenHeight, e.deviceName = wx.getSystemInfoSync().model, e.systemName = wx.getSystemInfoSync().system, e.source = commonParams.query.source || "", e.source_type = commonParams.query.source_type || "", pushData(e);
        }console.log(b[53829], a.data.uid), console.log(b[55904], a), t.initLoginCallback(a);
      } else console.log(b[55905], e), commonParams.sdkLoginTimer && clearTimeout(commonParams.sdkLoginTimer), commonParams.sdkLoginTimer = setTimeout(() => {
        wxLogin(t);
      }, 2e3);
    }, fail: e => {
      console.log(b[55906], e), commonParams.sdkLoginTimer && clearTimeout(commonParams.sdkLoginTimer), commonParams.sdkLoginTimer = setTimeout(() => {
        wxLogin(t);
      }, 2e3);
    } });
};const jumpState = function () {
  return 1 == commonParams.showSwitchOn;
};const cutGame = function () {
  const a = this;b[55784] != typeof a.cutGameCallback ? console.log(b[55907]) : wx.navigateToMiniProgram({ appId: commonParams.switchApp, extraData: { from_app_id: commonParams.gameId || "", from_openid: commonParams.uid || "" }, envVersion: commonParams.switchEnv || b[55908], success(e) {
      console.log(b[55909], e), a.cutGameCallback({ status: 1, msg: b[38687], data: e });
    }, fail(e) {
      console.log(b[55910], e), a.cutGameCallback({ status: 0, msg: b[55893], data: e });
    } });
};const toBind = function (a) {
  wx.login({ success(e) {
      e = Tools.buildBindParams({ gameid: commonParams.gameId, code: e.code, from_app_id: a.from_app_id, from_openid: a.from_openid, osType: Tools.getDeviceTypeId(), scene: commonParams.scene, query: JSON.stringify(commonParams.query), time: Tools.getTimeStamp() });wx.request({ url: api + b[55911], data: e, timeout: 3e3, success: e => {
          console.log(b[55912], e.data);
        } });
    } });
};const getCaptcha = function (e, a, t) {
  const o = this;var s;b[55784] == typeof a ? (s = Tools.buildParams({ yy_pf: commonParams.yy_pf, app_id: commonParams.gameId, telephone: e, open_id: commonParams.uid, use: b[30071], time: Tools.getTimeStamp() }), wx.request({ url: wanBaApi + b[55913], data: s, timeout: 3e3, success: e => {
      18e3 === e.data.code ? (console.log(b[55914], e), a(e)) : (console.log(b[55915], e), t(e));
    }, error: e => {
      console.log(b[55916], e);
    } })) : b[55784] != typeof o.getCaptchaCallback ? console.log(b[55917]) : (e = Tools.buildParams({ yy_pf: commonParams.yy_pf, app_id: commonParams.gameId, telephone: e.telephone, open_id: commonParams.uid, use: b[30071], time: Tools.getTimeStamp() }), wx.request({ url: wanBaApi + b[55913], data: e, timeout: 3e3, success: e => {
      18e3 === e.data.code ? (console.log(b[55914], e), o.getCaptchaCallback({ status: 1, msg: b[38687], data: e })) : (console.log(b[55915], e), o.getCaptchaCallback({ status: 0, msg: b[55893], data: e }));
    } }));
};const bindTelephone = function (e, a, t, o) {
  const s = this;b[55784] == typeof t ? (a = Tools.buildParams({ yy_pf: commonParams.yy_pf, app_id: commonParams.gameId, telephone: e, open_id: commonParams.uid, captcha: a, time: Tools.getTimeStamp() }), wx.request({ url: wanBaApi + b[55918], data: a, timeout: 3e3, success: e => {
      (18e3 === e.data.code ? t : o)(e);
    } })) : b[55784] != typeof s.bindTelephoneCallback ? console.log(b[55919]) : (e = Tools.buildParams({ yy_pf: commonParams.yy_pf, app_id: commonParams.gameId, telephone: e.telephone, open_id: commonParams.uid, captcha: e.captcha, time: Tools.getTimeStamp() }), wx.request({ url: wanBaApi + b[55918], data: e, timeout: 3e3, success: e => {
      18e3 === e.data.code ? s.bindTelephoneCallback({ status: 1, msg: b[38687], data: e }) : s.bindTelephoneCallback({ status: 0, msg: b[55893], data: e });
    } }));
};const replenish = function () {
  let t = wx.getStorageSync(b[55892]);if (0 !== t.length) for (let a in t) wx.login({ success(e) {
      t[a].code = e.code, wx.request({ url: api + b[55920], data: t[a], success(e) {
          1 == e.data.status && 1 == e.data.data.status && deleteItme(e.data.data.gameOrderid);
        } });
    } });
};const deleteItme = function (e) {
  let a = wx.getStorageSync(b[55892]);if (0 !== a.length) for (var t in a) a[t].gameOrderid.includes(e) && a.splice(t, 1);wx.setStorageSync(b[55892], a);
};const subscribeMessage = function (e) {
  const a = this;b[55784] != typeof a.subscribeMsgCallback ? console.log(b[55921]) : wx.requestSubscribeMessage({ tmplIds: e, success: function (e) {
      a.subscribeMsgCallback({ status: "1", msg: b[38687], data: e });
    }, fail: function (e) {
      a.subscribeMsgCallback({ status: "0", msg: b[55893], data: e });
    } });
};const shareAppMessage = function (e) {
  wx.shareAppMessage({ title: e.title || "", imageUrl: e.imageUrl, query: e.query, imageUrlId: e.imageUrlId, toCurrentGroup: e.toCurrentGroup, path: e.path });
};const advertisement = function (e) {
  const a = this;let t = {};t.type = 11, t.roleId = e.roleId, t.roleName = e.roleName, t.serverId = e.serverId, b[55922] == e.type ? b[55784] != typeof a.createBannerAdCallback ? console.log(b[55923]) : (t.adType = 1, state.bannerAd = wx.createBannerAd({ adUnitId: e.adUnitId, style: { left: e.left, top: e.top, width: e.width, height: e.height } }), state.bannerAd.onLoad(e => {
    console.log(b[55924], e), state.bannerAd.show().then(() => {
      console.log(b[55925]), pushData(t), a.createBannerAdCallback({ status: "1", msg: b[38687], data: {} });
    });
  }), state.bannerAd.onError(e => {
    console.log("bannerAd onError", e), a.createBannerAdCallback({ status: "0", msg: b[55893], data: e });
  })) : b[55926] == e.type ? b[55784] != typeof a.rewardedVideoAdCallback ? console.log(b[55927]) : (t.adType = 2, state.videoAd = wx.createRewardedVideoAd({ adUnitId: e.adUnitId }), state.videoAd.show().catch(() => {
    state.videoAd.load().then(() => state.videoAd.show()).catch(e => {
      console.log(b[55928]);
    }), state.videoAd.onClose(e => {
      e && e.isEnded || void 0 === e ? (console.log(b[55929]), pushData(t), a.rewardedVideoAdCallback({ status: "1", msg: b[38687], data: e })) : (console.log(b[55930]), a.rewardedVideoAdCallback({ status: "0", msg: b[55893], data: e }));
    });
  })) : b[55931] == e.type ? b[55784] != typeof a.createInterstitialAdCallback ? console.log(b[55932]) : (t.adType = 3, wx.createInterstitialAd && (state.interstitialAd = wx.createInterstitialAd({ adUnitId: e.adUnitId }), state.interstitialAd.show().then(e => {
    console.log(b[55933], e), pushData(t), a.createInterstitialAdCallback({ status: "1", msg: b[38687], data: {} });
  }).catch(e => {
    console.log(b[55934], e), a.createInterstitialAdCallback({ status: "0", msg: b[55893], data: e });
  }))) : b[55935] == e.type ? b[55784] != typeof a.createGridAdCallback ? console.log(b[55936]) : (t.adType = 4, state.gridAd = wx.createGridAd({ adUnitId: e.adUnitId, style: { left: e.left, top: e.top, width: e.width, opacity: e.opacity } }), state.gridAd.onLoad(() => {
    console.log(b[55937]), a.state.gridAd.show().then(() => {
      console.log(b[55938]), pushData(t), a.createGridAdCallback({ status: "1", msg: b[38687], data: {} });
    });
  }), state.gridAd.onError(e => {
    a.createGridAdCallback({ status: "0", msg: b[55893], data: e }), console.log(b[55939], e);
  })) : b[55940] == e.type && (b[55784] != typeof a.createCustomAdCallback ? console.log(b[55941]) : (t.adType = 5, state.customAd = wx.createCustomAd({ adUnitId: e.adUnitId, style: { left: e.left, top: e.top, fixed: e.fixed } }), state.customAd.show().then(e => {
    console.log(b[55942], e), pushData(t), a.createCustomAdCallback({ status: "1", msg: b[38687], data: e });
  }).catch(e => {
    console.log(b[55943], e), a.createCustomAdCallback({ status: "0", msg: b[55893], data: e });
  })));
};const getLaunchOptionsSync = function () {
  return wx.getLaunchOptionsSync();
};const openData = function (e) {
  const a = this;b[55784] != typeof a.openDataCallback ? console.error(b[55944]) : b[55945] == e.type ? wx.getPotentialFriendList({ keyList: e.keyList, success: e => {
      a.openDataCallback({ status: "1", msg: b[38687], data: e });
    }, fail: e => {
      a.openDataCallback({ status: "0", msg: b[55893], data: e });
    } }) : b[55946] == e.type ? wx.getGroupCloudStorage({ shareTicket: e.shareTicket, keyList: e.keyList, success: e => {
      a.openDataCallback({ status: "1", msg: b[38687], data: e });
    }, fail: e => {
      a.openDataCallback({ status: "0", msg: b[55893], data: e });
    } }) : b[55947] == e.type && wx.getFriendCloudStorage({ keyList: e.keyList, success: e => {
      a.openDataCallback({ status: "1", msg: b[38687], data: e });
    }, fail: e => {
      a.openDataCallback({ status: "0", msg: b[55893], data: e });
    } });
};const sendResult = function (a) {
  console.log(b[55948], a), wx.login({ success(e) {
      a.code = e.code, a.paytype = 3, wx.request({ url: api + b[55949], data: Tools.buildPayParams(a), success(e) {
          console.log(b[55950], e);
        } });
    } });
};const pay = function (e) {
  const s = this;wx.getSystemInfoSync();var a = Tools.getDeviceType();let t = b[55876];if (b[55875] == a ? t = 2 : b[55874] == a ? t = 1 : b[38579] == a && (t = 3), b[55784] != typeof this.onPayCallback) console.error(b[55951]);else {
    console.log(b[55952], commonParams);const n = { gameOrderid: e.gameOrderid, gameid: commonParams.gameId, sign: commonParams.sign, referer: commonParams.referer, pext: e.pext, pext2: commonParams.partner, sdkType: 3, serverName: e.serverName, deviceno: commonParams.partner, serverId: e.serverId, mac: commonParams.mac, imei: commonParams.imei, productName: e.productName, uid: commonParams.uid, productId: e.productId, roleId: e.roleId, money: e.money, partner: commonParams.partner, roleName: e.roleName, roleLevel: e.roleLevel, partnerType: t, mode: "", wxid: commonParams.wxid, osType: t, os: a, paytype: commonParams.payType, bundleName: commonParams.wxappid, gamever: "", time: Tools.getTimeStamp() };wx.showLoading({ title: b[55953], mask: !0 }), wx.login({ success(e) {
        n.code = e.code, console.log(b[55954], e.code), wx.request({ url: api + b[55949], data: Tools.buildPayParams(n), success: a => {
            let t = wx.getStorageSync(b[55892]);var e = { uid: commonParams.uid, gameOrderid: n.gameOrderid, time: n.time, money: n.money, paytype: commonParams.payType, wxid: commonParams.wxid, deviceno: commonParams.partner, gameid: commonParams.gameId, sign: Tools.buildRepublish(n), partner: commonParams.partner, productId: n.productId, productName: n.productName, roleId: n.roleId, serverName: n.serverName, roleName: n.roleName, pext: n.pext, pext2: n.partner, mode: b[55955] };t.push(e), console.log(b[55956], a.data), wx.hideLoading();var o = a.data;if (commonParams.payType = o.paytype, 1 == a.data.status) switch (s.onPayCallback({ status: "1", msg: b[55957] }), wx.hideLoading(), commonParams.payType) {case 0:
                return void wx.showModal({ title: b[33608], content: commonParams.payTip, showCancel: !1 });case 1:
                wx.setClipboardData({ data: o.data.url, success(e) {
                    wx.showModal({ title: b[33608], content: b[55958], showCancel: !1, confirmText: b[55959], confirmColor: b[55960] });
                  } });break;case 2:
                wx.showModal({ title: b[33608], content: b[55961], showCancel: !1, confirmText: b[38412], success() {
                    wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: n.gameOrderid, sendMessagePath: JSON.stringify(n), sendMessageImg: b[55962], sessionFrom: JSON.stringify(n), success(e) {
                        console.log(e);
                      } });
                  } });break;case 3:
                0 == a.data.errcode && wx.requestMidasPayment({ mode: b[55955], env: o.data.env, offerId: o.data.offerId, currencyType: b[55963], platform: b[55874], buyQuantity: o.data.amt, success(e) {
                    wx.setStorageSync(b[55892], t), sendResult(n);
                  }, complete(e) {
                    console.log(b[55964], e);
                  } });break;case 5:
                let e = {};e.goods_name = n.productName, e.gameOrderid = o.gameOrderid, e.money = o.money, e.out_code = o.out_code, e.paytype = o.paytype, wx.navigateToMiniProgram({ appId: o.appid, path: b[55965], envVersion: b[55908], extraData: e, success: function (e) {
                    console.log(b[55966], e);
                  }, fail: function (e) {
                    console.log(b[55967], e), wx.request({ url: b[55968] + commonParams.gameId + b[55969] + e.errMsg, success(e) {
                        console.log(b[55970], e);
                      } });
                  }, complete: function (e) {
                    console.log(b[55971], e);
                  } });} else s.onPayCallback({ status: "0", msg: b[55972] });
          } });
      } });
  }
};const getWhatsNewSubscriptionsSetting = function (e) {
  const a = this;b[55784] != typeof a.getWhatsNewSubscriptionsSettingCallback ? console.log(b[55973]) : wx.getWhatsNewSubscriptionsSetting({ msgType: e.msgType, success(e) {
      a.getWhatsNewSubscriptionsSettingCallback({ code: "1", msg: b[38687], data: e });
    }, fail(e) {
      a.getWhatsNewSubscriptionsSettingCallback({ code: "0", msg: b[55893], data: e });
    } });
};const requestSubscribeWhatsNew = function (e) {
  const a = this;b[55784] != typeof a.requestSubscribeWhatsNewCallback ? console.log(b[55974]) : wx.requestSubscribeWhatsNew({ msgType: e.msgType, success(e) {
      a.requestSubscribeWhatsNewCallback({ code: "1", msg: b[38687], data: e });
    }, fail(e) {
      a.requestSubscribeWhatsNewCallback({ code: "0", msg: b[55893], data: e });
    } });
};const getRedPagState = function (e) {
  const a = this;b[55784] != typeof a.getRedPagStateCallback ? console.log(b[55975]) : commonParams.showRedPagOn ? wx.request({ url: wxRedApi + b[55976], data: { app_id: commonParams.gameId, open_id: commonParams.uid, server_id: e.server_id, role_id: e.role_id }, success(e) {
      e = e.data;200 == e.status ? (commonParams.luck_draw_on = e.data.luck_draw_on, commonParams.luck_draw_activity_id = e.data.luck_draw_activity_id, a.getRedPagStateCallback({ status: "1", msg: e.msg, data: e.data })) : a.getRedPagStateCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      a.getRedPagStateCallback({ status: "-1", msg: e.errMsg, data: e }), console.log(b[55977], e);
    }, timeout: 4e3 }) : a.getRedPagStateCallback({ status: "0", msg: `showRedPagOn为${commonParams.showRedPagOn}`, data: commonParams.showRedPagOn });
};const redLogin = function (t) {
  const o = this;b[55784] != typeof o.redLoginCallback ? console.log(b[55978]) : (Tools.initLock(httpLock), wx.login({ success(e) {
      var a;e.code ? (a = { app_id: commonParams.gameId, code: e.code, server_id: t.server_id, server_name: t.server_name, role_id: t.role_id, role_name: t.role_name }, httpLock.httpRedLoginFlag || (httpLock.httpRedLoginFlag = !0, wx.request({ url: wxRedApi + b[55979], method: b[33860], data: Tools.buildRedParams(a), header: { "Content-Type": b[55980] }, success(e) {
          e = e.data;200 == e.status ? (commonParams.token = e.data.token, o.redLoginCallback({ status: "1", msg: e.msg, data: e.data })) : o.redLoginCallback({ status: "0", msg: e.msg, data: e.data });
        }, fail(e) {
          o.redLoginCallback({ status: "-1", msg: e.errMsg, data: e }), console.log(b[44752], e);
        }, complete(e) {
          httpLock.httpRedLoginFlag = !1;
        }, timeout: 4e3 }))) : console.log(b[55981] + e.errMsg);
    } }));
};const getWxUserInfo = function () {
  const a = this;var e;b[55784] != typeof a.getWxUserInfoCallback ? console.log(b[55982]) : (e = { app_id: commonParams.gameId, token: commonParams.token }, wx.request({ url: wxRedApi + b[55983], data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.getWxUserInfoCallback({ status: "1", msg: e.msg, data: e.data }) : a.getWxUserInfoCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log(b[44752], e);
    }, timeout: 4e3 }));
};const getRedPackageList = function () {
  const a = this;var e;b[55784] != typeof a.getRedPackageListCallback ? console.log(b[55984]) : (e = { app_id: commonParams.gameId, token: commonParams.token }, httpLock.httpRedListFlag || (httpLock.httpRedListFlag = !0, wx.request({ url: wxRedApi + b[55985], data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? (commonParams.share_activity_id = e.data.share_activity_id, a.getRedPackageListCallback({ status: "1", msg: e.msg, data: e.data })) : a.getRedPackageListCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      a.getRedPackageListCallback({ status: "-1", msg: e.errMsg, data: e }), console.log(b[44752], e);
    }, complete(e) {
      httpLock.httpRedListFlag = !1;
    }, timeout: 4e3 })));
};const getRedConfig = function () {
  const a = this;var e;b[55784] != typeof a.getRedConfigCallback ? console.log(b[55986]) : (e = { app_id: commonParams.gameId, token: commonParams.token }, wx.request({ url: wxRedApi + b[55987], data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.getRedConfigCallback({ status: "1", msg: e.msg, data: e.data }) : a.getRedConfigCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log(b[44752], e);
    }, timeout: 4e3 }));
};const toReceiveRedPackage = function (e) {
  const a = this;b[55784] != typeof a.toReceiveRedPackageCallback ? console.log(b[55988]) : httpLock.httpReceiveRedPackageFlag || (e = { activity_id: e.activity_id, activity_rule_id: e.activity_rule_id, activity_rule_type: e.activity_rule_type, app_id: commonParams.gameId, token: commonParams.token }, httpLock.httpReceiveRedPackageFlag = !0, wx.request({ url: wxRedApi + b[55989], method: b[33860], data: Tools.buildRedParams(e), header: { "Content-Type": b[55980] }, success(e) {
      e = e.data;200 == e.status ? a.toReceiveRedPackageCallback({ status: "1", msg: e.msg, data: e.data }) : a.toReceiveRedPackageCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log(b[55990], e), a.toReceiveRedPackageCallback({ status: "-1", msg: e.errMsg, data: e });
    }, complete(e) {
      httpLock.httpReceiveRedPackageFlag = !1;
    }, timeout: 4e3 }));
};const getRedDetailList = function () {
  const a = this;var e;b[55784] != typeof a.getRedDetailListCallback ? console.log(b[55991]) : (e = { app_id: commonParams.gameId, token: commonParams.token }, wx.request({ url: wxRedApi + b[55992], data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.getRedDetailListCallback({ status: "1", msg: e.msg, data: e.data }) : a.getRedDetailListCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log(b[55990], e);
    }, timeout: 4e3 }));
};const toWithdraw = function (e) {
  const a = this;b[55784] != typeof a.toWithdrawCallback ? console.log(b[55993]) : (e = { withdraw_amount: e.withdraw_amount, app_id: commonParams.gameId, token: commonParams.token }, httpLock.httpToWithdraw || (httpLock.httpToWithdraw = !0, wx.request({ url: wxRedApi + b[55994], data: Tools.buildRedParams(e), method: b[33860], header: { "Content-Type": b[55980] }, success(e) {
      e = e.data;200 == e.status ? a.toWithdrawCallback({ status: "1", msg: e.msg, data: e.data }) : a.toWithdrawCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      a.toWithdrawCallback({ status: "-1", msg: e.errMsg, data: e }), console.log(b[55990], e);
    }, complete(e) {
      httpLock.httpToWithdraw = !1;
    }, timeout: 4e3 })));
};const toRedShare = function (e) {
  e = { app_id: commonParams.gameId, token: commonParams.token, activity_id: e.share_activity_id };wx.request({ url: wxRedApi + b[55995], data: Tools.buildRedParams(e), success(e) {
      e = e.data;console.log(b[55996], e), 200 == e.status && wx.shareAppMessage({ title: e.data.title || "", imageUrl: e.data.image_url || "", query: Tools.serialize({ share_id: e.data.share_id }), imageUrlId: e.data.image_url_id || "" });
    }, fail(e) {
      console.log(b[55990], e);
    }, timeout: 4e3 });
};const getShareList = function (e) {
  const a = this;b[55784] != typeof a.getShareListCallback ? console.log(b[55997]) : (e = { activity_id: e.share_activity_id, app_id: commonParams.gameId, token: commonParams.token }, wx.request({ url: wxRedApi + b[55998], data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.getShareListCallback({ status: "1", msg: e.msg, data: e.data }) : a.getShareListCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log(b[55990], e);
    }, timeout: 4e3 }));
};const shareBind = function (t) {
  wx.login({ success: e => {
      var a;e.code ? (a = { app_id: commonParams.gameId, share_id: t.share_id, code: e.code }, wx.request({ url: wxRedApi + b[55999], data: Tools.buildRedParams(a), success(e) {
          e = e.data;console.log(b[56000], e.data, e.msg);
        }, fail(e) {
          console.log("shareBindErr", e);
        }, timeout: 4e3 })) : console.log(b[55898], e);
    } });
};const getLuckDrawIndex = function () {
  const a = this;var e;b[55784] != typeof a.getLuckDrawIndexCallback ? console.log(b[56001]) : (e = { app_id: commonParams.gameId, token: commonParams.token, activity_id: commonParams.luck_draw_activity_id }, httpLock.httpLuckDrawIndex || (httpLock.httpLuckDrawIndex = !0, wx.request({ url: wxRedApi + b[56002], data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.getLuckDrawIndexCallback({ status: "1", msg: e.msg, data: e.data }) : a.getLuckDrawIndexCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      a.getLuckDrawIndexCallback({ status: "-1", msg: e.errMsg, data: e }), console.log(b[55990], e);
    }, complete(e) {
      httpLock.httpLuckDrawIndex = !1;
    }, timeout: 4e3 })));
};const luckyDraw = function () {
  const a = this;var e;b[55784] != typeof a.luckyDrawCallback ? console.log(b[56003]) : (e = { app_id: commonParams.gameId, token: commonParams.token, activity_id: commonParams.luck_draw_activity_id }, httpLock.httpLuckDrawFlag || (httpLock.httpLuckDrawFlag = !0, wx.request({ url: wxRedApi + b[56004], data: Tools.buildRedParams(e), success(e) {
      e = e.data;200 == e.status ? a.luckyDrawCallback({ status: "1", msg: e.msg, data: e.data }) : a.luckyDrawCallback({ status: "0", msg: e.msg, data: e.data });
    }, fail(e) {
      console.log(b[55990], e), a.luckyDrawCallback({ status: "-1", msg: e.errMsg, data: e });
    }, complete(e) {
      httpLock.httpLuckDrawFlag = !1;
    }, timeout: 4e3 })));
};const getSquareList = function (e) {
  const a = this;if (b[55784] != typeof a.getSquareListCallback) console.log(b[56005]);else if (!httpLock.httpSquareListFlag) {
    httpLock.httpSquareListFlag = !0;const t = { app_id: commonParams.gameId, uid: commonParams.uid, union_id: commonParams.unionId };e && e.type && (t.type = e.type), wx.request({ url: wxRedApi + b[56006], data: Tools.buildRedParams(t), success(e) {
        e = e.data;console.log(b[56007], e), a.getSquareListCallback(e);
      }, complete() {
        httpLock.httpSquareListFlag = !1;
      }, timeout: 4e3 });
  }
};const squareClick = function (a) {
  var e;httpLock.httpSquareClickFlag || (httpLock.httpSquareClickFlag = !0, e = { app_id: commonParams.gameId, square_id: a.square_id, uid: commonParams.uid, union_id: commonParams.unionId }, wx.request({ url: wxRedApi + b[56008], data: Tools.buildRedParams(e), success(e) {
      console.log(b[56009], e), wx.navigateToMiniProgram({ appId: a.wxapp_id, extraData: { square: { square_id: a.square_id, source_app_id: commonParams.gameId, source_open_id: commonParams.uid } }, envVersion: a.app_env, success(e) {} });
    }, complete() {
      httpLock.httpSquareClickFlag = !1;
    }, timeout: 4e3 }));
};const squareBind = function (a) {
  wx.login({ success(e) {
      e = Tools.buildRedParams({ app_id: commonParams.gameId, code: e.code, square_id: a.square_id, source_app_id: a.source_app_id, source_open_id: a.source_open_id });console.log(b[56010], e), wx.request({ url: wxRedApi + b[56011], data: e, timeout: 5e3, success: e => {
          console.log(b[56012], e);
        } });
    } });
};const gameWithdraw = function (e) {
  const a = this;b[55784] != typeof a.gameWithdrawCallback ? console.log(b[56013]) : (e = { app_id: commonParams.gameId, withdraw_amount: e.withdraw_amount, open_id: commonParams.uid }, httpLock.httpGameWithdraw || (httpLock.httpGameWithdraw = !0, wx.request({ url: wxRedApi + b[56014], data: Tools.buildRedParams(e), method: b[33860], header: { "Content-Type": b[55980] }, success(e) {
      e = e.data;a.gameWithdrawCallback(e);
    }, fail(e) {
      a.gameWithdrawCallback(e), console.log(b[55990], e);
    }, complete(e) {
      httpLock.httpGameWithdraw = !1;
    }, timeout: 4e3 })));
};const getOpenId = function () {
  return commonParams.uid;
};const showSquareOn = function () {
  return commonParams.showSquareOn;
};const getChangeShellOn = function (e, a) {
  const t = this;var o;b[55784] != typeof t.getChangeShellOnCallback ? console.log(b[56015]) : (commonParams.gameId = e, commonParams.gameKey = a, o = wx.getAccountInfoSync(), console.log(b[55885], o), console.log(b[55886], o.miniProgram.envVersion), commonParams.envVersion = o.miniProgram.envVersion, wx.request({ url: api + b[56016], data: Tools.buildChangeShell({ gameid: e, envVersion: commonParams.envVersion, time: Tools.getTimeStamp() }, a), success(e) {
      t.getChangeShellOnCallback(e.data);
    }, timeout: 4e3 }));
};const showAppModal = function () {
  commonParams.showAppOn && wx.showModal({ title: commonParams.appTitle, content: commonParams.appContent || b[56017], cancelText: b[56018], confirmText: b[56019], success(e) {
      e.confirm ? wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: commonParams.sendMessageTitle, sendMessageImg: commonParams.sendMessageImg, complete(e) {
          console.log(b[56020], e);
        } }) : e.cancel && console.log(b[56021]);
    } });
};const msgSecCheck = function (e, a) {
  var t = { gameid: commonParams.gameId, partner: commonParams.partner, deviceno: commonParams.partner, time: Tools.getTimeStamp(), content: e };e ? wx.request({ url: api + b[56022], data: Tools.buildCheckMsg(t), success(e) {
      console.log(b[56023], e), a(e.data);
    } }) : a({ err: 0, msg: b[56024] });
};const pushData = function (a) {
  "0" != a.type && (a.accountId = commonParams.uid, a.appId = commonParams.gameId, a.appVersion = b[55890], a.platform = b[55891], a.channel = commonParams.partner, a.source = commonParams.query.source || "", a.source_type = commonParams.query.source_type || "", a.systemName = Tools.getDeviceType(), a.deviceName = wx.getSystemInfoSync().model, a.resolution = wx.getSystemInfoSync().screenWidth + "*" + wx.getSystemInfoSync().screenHeight, a.deviceType = Tools.getDeviceTypeId(), a.referer = commonParams.referer, a.idfa = "", a.ip = "", a.mac = "", a.imei = commonParams.uid, a.sex = "0", a.network = "", a.country = "86", a.operators = ""), "1" == a.type ? (a.logType = b[55954], a.region = "0", a.channelAccid = commonParams.uid, delete a.startLevel, delete a.endLevel) : "2" == a.type ? (a.roleId || console.log(b[56025]), a.roleName || console.log(b[56026]), a.logType = b[56027], a.region = "0", a.channelAccid = commonParams.uid, delete a.startLevel, delete a.endLevel) : "4" == a.type ? (a.roleId || console.log(b[56025]), a.roleName || console.log(b[56026]), a.logType = b[56028], a.region = "0", a.levelType = "1", a.duration = "0", a.channelAccid = commonParams.uid, delete a.serverName) : "5" == a.type ? (a.logType = b[56029], delete a.resolution, delete a.deviceType, delete a.mac, delete a.sex, delete a.network, delete a.country, delete a.operators) : 6 == a.type ? (a.logType = b[56030], delete a.resolution, delete a.deviceType, delete a.mac, delete a.sex, delete a.network, delete a.country, delete a.operators, a.shareType = "1") : 9 == a.type ? (a.logType = b[30450], delete a.resolution, delete a.deviceType, delete a.deviceName, delete a.mac, delete a.sex, delete a.network, delete a.country, delete a.operators, delete a.imei) : 10 == a.type ? (a.logType = b[56031], a.channelAccid = commonParams.uid) : 11 == a.type && (a.logType = b[56032], a.channelAccid = commonParams.uid), delete a.type, wx.request({ url: logApi + b[56033], data: { data: JSON.stringify(a) }, success: function (e) {
      console.log(a.logType, e.data);
    } });
};function setLog(e, a) {
  1 == state.debug && (a == state.level.error ? console.log(b[56034] + e, b[56035]) : a == state.level.warn ? console.log(b[56036] + e, b[56037]) : a == state.level.debug ? console.log(b[56038] + e, b[56037]) : console.log(b[56039] + e, b[56037]));
}function md5(e) {
  var a;Array();var t, o, s, n, r, c, i, d, m;for (a = ConvertToWordArray(e = Utf8Encode(e)), c = 1732584193, i = 4023233417, d = 2562383102, m = 271733878, t = 0; t < a.length; t += 16) c = FF(o = c, s = i, n = d, r = m, a[t + 0], 7, 3614090360), m = FF(m, c, i, d, a[t + 1], 12, 3905402710), d = FF(d, m, c, i, a[t + 2], 17, 606105819), i = FF(i, d, m, c, a[t + 3], 22, 3250441966), c = FF(c, i, d, m, a[t + 4], 7, 4118548399), m = FF(m, c, i, d, a[t + 5], 12, 1200080426), d = FF(d, m, c, i, a[t + 6], 17, 2821735955), i = FF(i, d, m, c, a[t + 7], 22, 4249261313), c = FF(c, i, d, m, a[t + 8], 7, 1770035416), m = FF(m, c, i, d, a[t + 9], 12, 2336552879), d = FF(d, m, c, i, a[t + 10], 17, 4294925233), i = FF(i, d, m, c, a[t + 11], 22, 2304563134), c = FF(c, i, d, m, a[t + 12], 7, 1804603682), m = FF(m, c, i, d, a[t + 13], 12, 4254626195), d = FF(d, m, c, i, a[t + 14], 17, 2792965006), c = GG(c, i = FF(i, d, m, c, a[t + 15], 22, 1236535329), d, m, a[t + 1], 5, 4129170786), m = GG(m, c, i, d, a[t + 6], 9, 3225465664), d = GG(d, m, c, i, a[t + 11], 14, 643717713), i = GG(i, d, m, c, a[t + 0], 20, 3921069994), c = GG(c, i, d, m, a[t + 5], 5, 3593408605), m = GG(m, c, i, d, a[t + 10], 9, 38016083), d = GG(d, m, c, i, a[t + 15], 14, 3634488961), i = GG(i, d, m, c, a[t + 4], 20, 3889429448), c = GG(c, i, d, m, a[t + 9], 5, 568446438), m = GG(m, c, i, d, a[t + 14], 9, 3275163606), d = GG(d, m, c, i, a[t + 3], 14, 4107603335), i = GG(i, d, m, c, a[t + 8], 20, 1163531501), c = GG(c, i, d, m, a[t + 13], 5, 2850285829), m = GG(m, c, i, d, a[t + 2], 9, 4243563512), d = GG(d, m, c, i, a[t + 7], 14, 1735328473), c = HH(c, i = GG(i, d, m, c, a[t + 12], 20, 2368359562), d, m, a[t + 5], 4, 4294588738), m = HH(m, c, i, d, a[t + 8], 11, 2272392833), d = HH(d, m, c, i, a[t + 11], 16, 1839030562), i = HH(i, d, m, c, a[t + 14], 23, 4259657740), c = HH(c, i, d, m, a[t + 1], 4, 2763975236), m = HH(m, c, i, d, a[t + 4], 11, 1272893353), d = HH(d, m, c, i, a[t + 7], 16, 4139469664), i = HH(i, d, m, c, a[t + 10], 23, 3200236656), c = HH(c, i, d, m, a[t + 13], 4, 681279174), m = HH(m, c, i, d, a[t + 0], 11, 3936430074), d = HH(d, m, c, i, a[t + 3], 16, 3572445317), i = HH(i, d, m, c, a[t + 6], 23, 76029189), c = HH(c, i, d, m, a[t + 9], 4, 3654602809), m = HH(m, c, i, d, a[t + 12], 11, 3873151461), d = HH(d, m, c, i, a[t + 15], 16, 530742520), c = II(c, i = HH(i, d, m, c, a[t + 2], 23, 3299628645), d, m, a[t + 0], 6, 4096336452), m = II(m, c, i, d, a[t + 7], 10, 1126891415), d = II(d, m, c, i, a[t + 14], 15, 2878612391), i = II(i, d, m, c, a[t + 5], 21, 4237533241), c = II(c, i, d, m, a[t + 12], 6, 1700485571), m = II(m, c, i, d, a[t + 3], 10, 2399980690), d = II(d, m, c, i, a[t + 10], 15, 4293915773), i = II(i, d, m, c, a[t + 1], 21, 2240044497), c = II(c, i, d, m, a[t + 8], 6, 1873313359), m = II(m, c, i, d, a[t + 15], 10, 4264355552), d = II(d, m, c, i, a[t + 6], 15, 2734768916), i = II(i, d, m, c, a[t + 13], 21, 1309151649), c = II(c, i, d, m, a[t + 4], 6, 4149444226), m = II(m, c, i, d, a[t + 11], 10, 3174756917), d = II(d, m, c, i, a[t + 2], 15, 718787259), i = II(i, d, m, c, a[t + 9], 21, 3951481745), c = AddUnsigned(c, o), i = AddUnsigned(i, s), d = AddUnsigned(d, n), m = AddUnsigned(m, r);return (WordToHex(c) + WordToHex(i) + WordToHex(d) + WordToHex(m)).toLowerCase();
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
}function FF(e, a, t, o, s, n, r) {
  return e = AddUnsigned(e, AddUnsigned(AddUnsigned(F(a, t, o), s), r)), AddUnsigned(RotateLeft(e, n), a);
}function GG(e, a, t, o, s, n, r) {
  return e = AddUnsigned(e, AddUnsigned(AddUnsigned(G(a, t, o), s), r)), AddUnsigned(RotateLeft(e, n), a);
}function HH(e, a, t, o, s, n, r) {
  return e = AddUnsigned(e, AddUnsigned(AddUnsigned(H(a, t, o), s), r)), AddUnsigned(RotateLeft(e, n), a);
}function II(e, a, t, o, s, n, r) {
  return e = AddUnsigned(e, AddUnsigned(AddUnsigned(I(a, t, o), s), r)), AddUnsigned(RotateLeft(e, n), a);
}function ConvertToWordArray(e) {
  var a;var t = e.length;var o = t + 8;o = 16 * (1 + (o - o % 64) / 64);var s = Array(o - 1);var n = 0;var r = 0;for (; r < t;) n = r % 4 * 8, s[a = (r - r % 4) / 4] = s[a] | e.charCodeAt(r) << n, r++;return s[a = (r - r % 4) / 4] = s[a] | 128 << (n = r % 4 * 8), s[o - 2] = t << 3, s[o - 1] = t >>> 29, s;
}function WordToHex(e) {
  var a,
      t = "",
      o = "";for (a = 0; a <= 3; a++) t += (o = "0" + (e >>> 8 * a & 255).toString(16)).substr(o.length - 2, 2);return t;
}function Utf8Encode(e) {
  var a = "";for (var t = 0; t < e.length; t++) {
    var o = e.charCodeAt(t);o < 128 ? a += String.fromCharCode(o) : (127 < o && o < 2048 ? a += String.fromCharCode(o >> 6 | 192) : (a += String.fromCharCode(o >> 12 | 224), a += String.fromCharCode(o >> 6 & 63 | 128)), a += String.fromCharCode(63 & o | 128));
  }return a;
}module.exports = { init: init, pay: pay, getCaptcha: getCaptcha, bindTelephone: bindTelephone, pushData: pushData, msgSecCheck: msgSecCheck, subscribeMessage: subscribeMessage, shareAppMessage: shareAppMessage, state: state, advertisement: advertisement, getLaunchOptionsSync: getLaunchOptionsSync, getWhatsNewSubscriptionsSetting: getWhatsNewSubscriptionsSetting, requestSubscribeWhatsNew: requestSubscribeWhatsNew, openData: openData, cutGame: cutGame, jumpState: jumpState, getRedPagState: getRedPagState, redLogin: redLogin, getWxUserInfo: getWxUserInfo, getRedPackageList: getRedPackageList, getRedConfig: getRedConfig, toReceiveRedPackage: toReceiveRedPackage, getRedDetailList: getRedDetailList, getShareList: getShareList, toRedShare: toRedShare, toWithdraw: toWithdraw, getOpenId: getOpenId, getLuckDrawIndex: getLuckDrawIndex, luckyDraw: luckyDraw, showAppModal: showAppModal, getSquareList: getSquareList, squareClick: squareClick, showSquareOn: showSquareOn, gameWithdraw: gameWithdraw, getChangeShellOn: getChangeShellOn };