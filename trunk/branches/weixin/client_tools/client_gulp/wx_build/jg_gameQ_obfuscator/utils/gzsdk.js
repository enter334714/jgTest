var g = wx.$Q;
export default class Gzsdk {
  constructor() {
    this.confInfo = [], this.gameInfo = [], this.domain = { base: "https://sdkbase.v2.guoziyx.com", login: "https://login.v2.guoziyx.com", pay: "https://pay.v2.guoziyx.com", api: "https://api.v2.guoziyx.com" }, this.url = { init: "/xyx/Init/conf", loginCode: "/signin/xyx.wx/code", loginSession: "/signin/xyx.wx/session", loginAuthCode: "/signin/xyx.wx/authCode", order: "/order/union", notify: "/notify/Tencent/wxxyx", report: "/report", msgCheck: "/wx/Utils/msgCheck" }, this.storageKey = { userSession: "gzyx:u:session", launchChannel: "gzyx:launch:channel", initStatus: "gzyx:init:status", midasNotifyList: "gzyx:midas:list", midasNotifyData: "gzyx:midas:data:" };
  }report(e) {
    this.clog("\u6e38\u620f\u4e0a\u62a5\u6570\u636e"), this.clog(e);var s = wx.getStorageSync(this.storageKey.launchChannel);s && (e.channel_id = s), e.os_type = this.osType(), e.data_flag = e.action, delete e.action;var o = this;this.serverRequest(this.domain.api + this.url.report, e, function (e) {
      o.clog("\u4e0a\u62a5\u7ed3\u679c"), o.clog(e);
    });
  }pay(e, s) {
    if (this.report({ action: "game_pay_request", event_time: "", client_ip: "", os_type: this.osType(), money: e.total_fee, user_id: e.user_id, game_id: e.game_id, channel_id: wx.getStorageSync(this.storageKey.launchChannel) }), this.clog("\u6e38\u620f\u8bf7\u6c42\u4e0b\u5355\u63a5\u53e3"), "ios" === this.osType() && this.confInfo && 0 == this.confInfo.iosPay) return this.clog("\u5f53\u524d\u73af\u5883\u7684\u652f\u4ed8\u5df2\u7ecf\u5c4f\u853d"), this.clog(this.confInfo), void (s && s({ res_code: 500, res_msg: "ios_can_not_pay" }));this.serverOrder(e, s);
  }serverOrder(e, s) {
    this.clog("\u8bf7\u6c42\u679c\u5b50\u670d\u52a1\u7aef\u4e0b\u5355");var o = "wxxyx";"ios" === this.osType() && (o = "iosxyx"), e.user_channel = this.gameInfo.channel_id, e.gz_order_type = o, e.device_type = this.osType(), e.login_token = wx.getStorageSync(this.storageKey.userSession), e.appid = this.gameInfo.appid, this.clog("\u670d\u52a1\u7aef\u4e0b\u5355\u6570\u636e"), this.clog(e);var i = this;this.serverRequest(this.domain.pay + this.url.order, e, function (e) {
      e ? "android" === i.osType() ? 505 == e.res_code ? (i.clog("\u679c\u5b50\u670d\u52a1\u7aef\u4e0b\u5355\u8bf7\u6c42\u6210\u529f"), i.clog(e), i.orderSuccess(e.res_msg, s)) : (200 == e.res_code ? i.clog("\u679c\u5b50\u670d\u52a1\u7aef\u6263\u6b3e\u6210\u529f") : i.clog("\u679c\u5b50\u670d\u52a1\u7aef\u4e0b\u5355\u8bf7\u6c42\u5931\u8d25"), i.clog(e), s && s(e)) : 200 == e.res_code ? (i.clog("\u679c\u5b50\u670d\u52a1\u7aef\u4e0b\u5355\u8bf7\u6c42\u6210\u529f"), i.clog(e), i.orderSuccess(e.res_msg, s)) : (i.clog("\u679c\u5b50\u670d\u52a1\u7aef\u4e0b\u5355\u8bf7\u6c42\u5931\u8d25"), i.clog(e), s && s(e)) : (i.clog("\u679c\u5b50\u670d\u52a1\u7aef\u4e0b\u5355\u8bf7\u6c42\u9519\u8bef"), s && s({ res_code: 500, res_msg: "\u63a5\u53e3\u8bf7\u6c42\u5931\u8d25" }));
    });
  }orderSuccess(e, s) {
    if ("android" !== this.osType()) switch (e.iospaytype) {case "kefu":
        this.payKefu(s);break;case "kefu_not_card":
        this.payKefuNotCard(s);case "wxqrcode":
        this.payCode(e, s);} else this.payMidas(e, s);
  }payKefuNotCard(s) {
    this.clog("\u6267\u884c\u5ba2\u670d\u652f\u4ed8\u7b56\u7565-2");var o = this;wx.openCustomerServiceConversation({ success: function (e) {
        o.clog("\u5ba2\u670d\u8c03\u7528\u6210\u529f!"), s && s({ res_code: 200, res_msg: "\u4e0b\u5355\u6210\u529f" });
      }, fail: function (e) {
        o.clog("\u5ba2\u670d\u8c03\u7528\u5931\u8d25!"), o.clog(e), s && s({ res_code: 500, res_msg: "\u6253\u5f00\u5ba2\u670d\u4f1a\u8bdd\u6846\u5931\u8d25" });
      } });
  }payKefu(s) {
    this.clog("\u6267\u884c\u5ba2\u670d\u652f\u4ed8\u7b56\u7565");var o = this;wx.openCustomerServiceConversation({ sessionFrom: "gzyx", showMessageCard: o.confInfo.kefupay.showMessageCard, sendMessageTitle: o.confInfo.kefupay.sendMessageTitle, sendMessageImg: o.confInfo.kefupay.sendMessgeImg, sendMessagePath: o.confInfo.kefupay.sendMessagePath, success: function (e) {
        o.clog("\u5ba2\u670d\u8c03\u7528\u6210\u529f!"), s && s({ res_code: 200, res_msg: "\u4e0b\u5355\u6210\u529f" });
      }, fail: function (e) {
        o.clog("\u5ba2\u670d\u8c03\u7528\u5931\u8d25!"), o.clog(e), s && s({ res_code: 500, res_msg: "\u6253\u5f00\u5ba2\u670d\u4f1a\u8bdd\u6846\u5931\u8d25" });
      } });
  }payCode(e, s) {
    this.clog("\u6267\u884c\u4e8c\u7ef4\u7801\u652f\u4ed8\u7b56\u7565"), this.clog(e), e.url ? s && s({ res_code: 200, res_msg: { qrcode_url: e.url } }) : s && s({ code: 500, res_msg: "" });
  }payMidas(s, o) {
    this.clog("\u6267\u884c\u7c73\u5927\u5e08\u652f\u4ed8"), this.clog(s);var i = this;null != s.env ? wx.requestMidasPayment({ mode: s.mode, env: s.env, currencyType: s.currencyType, platform: s.platform, offerId: s.offerId, buyQuantity: s.buyQuantity, zoneId: 1, success: function (e) {
        i.cacheMidasNotifyData(s.notifyData), i.clog("\u7c73\u5927\u5e08\u652f\u4ed8\u5b8c\u6210"), i.clog(e), i.midasPaySucc(s.notifyData, o);
      }, fail: function (e) {
        i.clog("\u7c73\u5927\u5e08\u652f\u4ed8\u5931\u8d25"), i.clog(e), o && o({ res_code: 500, res_msg: "\u7c73\u5927\u5e08\u652f\u4ed8\u5931\u8d25" });
      } }) : wx.requestMidasPayment({ mode: s.mode, currencyType: s.currencyType, platform: s.platform, offerId: s.offerId, buyQuantity: s.buyQuantity, zoneId: 1, success: function (e) {
        i.cacheMidasNotifyData(s.notifyData), i.clog("\u7c73\u5927\u5e08\u652f\u4ed8\u5b8c\u6210"), i.clog(e), i.midasPaySucc(s.notifyData, o);
      }, fail: function (e) {
        i.clog("\u7c73\u5927\u5e08\u652f\u4ed8\u5931\u8d25"), i.clog(e), o && o({ res_code: 500, res_msg: "\u7c73\u5927\u5e08\u652f\u4ed8\u5931\u8d25" });
      } });
  }midasPaySucc(s, o) {
    var i = this;this.serverRequest(this.domain.pay + this.url.notify, s, function (e) {
      i.clog("\u7c73\u5927\u5e08\u670d\u52a1\u7aef\u53d1\u8d27\u5b8c\u6210"), i.clog(e), e && e.res_code && 200 == e.res_code && i.removeMidasNotifyData(s.id), o && o(e);
    });
  }cacheMidasNotifyData(o) {
    var i = this;wx.getStorage({ key: this.storageKey.midasNotifyList, complete(e) {
        var s = [];(s = e.data ? e.data : s).push(o.id), wx.setStorage({ data: s, key: i.storageKey.midasNotifyList, success(e) {
            wx.setStorage({ data: o, key: i.storageKey.midasNotifyData + o.id });
          } });
      } });
  }removeMidasNotifyData(s) {
    var o = this;wx.getStorage({ key: this.storageKey.midasNotifyList, complete(e) {
        !e.data || e.data.indexOf(s) < 0 || wx.removeStorage({ key: o.storageKey.midasNotifyData + s });
      } });
  }renotifyMidas() {
    var t = this;wx.getStorage({ key: this.storageKey.midasNotifyList, success(e) {
        e && e.data && e.data.forEach(e => {
          wx.getStorage({ key: t.storageKey.midasNotifyData + e, success(e) {
              t.midasPaySucc(e.data);
            } });
        });
      } }), setTimeout(function () {
      wx.getStorage({ key: t.storageKey.midasNotifyList, success(i) {
          i && i.data && wx.getStorageInfo({ success: e => {
              var s = [];for (var o in i.data) 0 <= e.keys.indexOf(t.storageKey.midasNotifyData + i.data[o]) && s.push(i.data[o]);wx.setStorage({ data: s, key: t.storageKey.midasNotifyList });
            } });
        } });
    }, 1e4);
  }login(s) {
    this.clog("\u6e38\u620f\u8bf7\u6c42\u767b\u5f55");var o = this;this.confInfo && this.confInfo.forceAuth ? wx.authorize({ scope: "scope.userInfo", success() {
        o.clog("\u7528\u6237\u540c\u610f\u6388\u6743"), o.authLogin(s);
      }, fail() {
        o.clog("\u7528\u6237\u4e0d\u540c\u610f\u6388\u6743"), o.confInfo.guideAuth ? (o.clog("\u6267\u884c\u6388\u6743\u5f15\u5bfc"), wx.openSetting({ complete(e) {
            o.clog("\u6388\u6743\u5f15\u5bfc\u5b8c\u6210\u8fd4\u56de"), o.clog(e), wx.getSetting({ success(e) {
                o.clog("\u83b7\u53d6\u7528\u6237\u6388\u6743\u8bbe\u7f6e\u7ed3\u679c2"), o.clog(e), e && e.authSetting && e.authSetting["scope.userInfo"] ? (o.clog("\u6267\u884c\u7528\u6237\u6388\u6743\u767b\u5f55"), o.authLogin(s)) : (o.clog("\u6267\u884c\u7528\u6237\u9759\u9ed8\u767b\u5f55"), o.staticLogin(s));
              } });
          } })) : (o.clog("\u4e0d\u6267\u884c\u6388\u6743\u5f15\u5bfc\uff0c\u76f4\u63a5\u83b7\u53d6 code \u767b\u5f55"), o.staticLogin(s));
      } }) : (this.clog("\u6267\u884c\u7528\u6237\u9759\u9ed8\u767b\u5f55"), this.staticLogin(s));
  }authLogin(s) {
    try {
      var o = wx.getStorageSync(this.storageKey.userSession);var i;o ? (i = this, wx.checkSession({ success(e) {
          i.clog("session_key\u6709\u6548\uff0c\u6267\u884c\u6388\u6743\u4fe1\u5e76session\u767b\u5f55"), i.sessionLogin(o, s);
        }, fail(e) {
          i.clog("session_key\u65e0\u6548\uff0c\u6267\u884c\u6388\u6743\u4fe1\u5e76code\u767b\u5f55"), i.authLoginWithCode(s);
        } })) : (this.clog("\u5f53\u524d\u6ca1\u6709session\u8bb0\u5f55\uff0c\u6267\u884c\u6388\u6743\u5e76code\u767b\u5f55"), this.authLoginWithCode(s));
    } catch (e) {
      this.clog("\u83b7\u53d6session_key\u5931\u8d25\uff0c\u6267\u884c\u6388\u6743\u5e76code\u767b\u5f55"), this.authLoginWithCode(s);
    }
  }authLoginWithCode(o) {
    var i = this;wx.login({ success(s) {
        s.code ? wx.getUserInfo({ success(e) {
            i.clog("\u83b7\u53d6\u7528\u6237\u6388\u6743\u4fe1\u606f\u6210\u529f"), i.clog(e), i.serverRequest(i.domain.login + i.url.loginAuthCode, { code: s.code, rawData: e.rawData, signature: e.signature, encryptedData: e.encryptedData, iv: e.iv, appid: i.gameInfo.appid, game_id: i.gameInfo.game_id, channel_id: i.gameInfo.channel_id }, function (e) {
              i.clog("\u670d\u52a1\u7aef\u6388\u6743\u5e76code\u767b\u5f55\u6210\u529f\uff0c\u56de\u8c03\u6e38\u620f"), i.clog(e), i.loginFinish(e, o);
            });
          } }) : (i.clog("\u5c0f\u6e38\u620f\u524d\u7aeflogin\u5931\u8d25\uff0c\u56de\u8c03\u6e38\u620f"), i.loginFinish({ res_code: 500, res_msg: "\u5fae\u4fe1login\u5931\u8d25" }, o));
      }, fail() {
        i.clog("\u5c0f\u6e38\u620f\u524d\u7aeflogin\u5931\u8d25\uff0c\u56de\u8c03\u6e38\u620f"), i.loginFinish({ res_code: 500, res_msg: "\u5fae\u4fe1login\u5931\u8d25" }, o);
      } });
  }staticLogin(s) {
    var o = this;try {
      var i = wx.getStorageSync(this.storageKey.userSession);i ? wx.checkSession({ success(e) {
          o.clog("session_key\u6709\u6548\uff0c\u6267\u884csession\u767b\u5f55"), o.sessionLogin(i, s);
        }, fail(e) {
          o.clog("session_key\u65e0\u6548\uff0c\u91cd\u65b0\u8bf7\u6c42code\u767b\u5f55"), o.codeLogin(s);
        } }) : (this.clog("\u5f53\u524d\u6ca1\u6709session\u8bb0\u5f55\uff0c\u76f4\u63a5\u6267\u884ccode\u767b\u5f55"), this.codeLogin(s));
    } catch (e) {
      this.clog("\u83b7\u53d6session_key\u5931\u8d25\uff0c\u8bf7\u6c42code\u767b\u5f55"), this.codeLogin(s);
    }
  }sessionLogin(e, s) {
    var o = this;this.serverRequest(this.domain.login + this.url.loginSession, { session: e, appid: o.gameInfo.appid, game_id: o.gameInfo.game_id, channel_id: o.gameInfo.channel_id }, function (e) {
      e && 501 == e.res_code ? (o.clog("\u670d\u52a1\u7aefsession\u5df2\u8fc7\u671f\uff0c\u91cd\u65b0\u53d1\u8d77code\u767b\u5f55\u6d41\u7a0b"), o.codeLogin(s)) : (o.clog("\u670d\u52a1\u7aefsession\u767b\u5f55\u5b8c\u6210\uff0c\u56de\u8c03\u6e38\u620f"), o.loginFinish(e, s));
    });
  }codeLogin(s) {
    var o = this;wx.login({ success(e) {
        e.code ? o.serverRequest(o.domain.login + o.url.loginCode, { code: e.code, appid: o.gameInfo.appid, game_id: o.gameInfo.game_id, channel_id: o.gameInfo.channel_id }, function (e) {
          o.clog("\u670d\u52a1\u7aefcode\u767b\u5f55\u5b8c\u6210\uff0c\u56de\u8c03\u6e38\u620f"), o.loginFinish(e, s);
        }) : o.loginFinish({ res_code: 500, res_msg: "\u5fae\u4fe1login\u5931\u8d25" }, s);
      }, fail(e) {
        o.clog("\u5c0f\u6e38\u620f\u524d\u7aeflogin\u5931\u8d25\uff0c\u56de\u8c03\u6e38\u620f"), o.loginFinish({ res_code: 500, res_msg: "\u5fae\u4fe1login\u5931\u8d25" }, s);
      } });
  }loginFinish(e, s) {
    e && 200 == e.res_code && (wx.setStorageSync(this.storageKey.userSession, e.res_msg.login_token), e = { res_code: e.res_code, res_msg: { game_id: e.res_msg.game_id, token: e.res_msg.user_token, timestamp: e.res_msg.timestamp, sign: e.res_msg.sign } }), s && s(e);
  }init(e, s) {
    this.clog("\u6e38\u620f\u8bf7\u6c42\u521d\u59cb\u5316");var o = wx.getLaunchOptionsSync();this.clog("\u542f\u52a8\u6570\u636e"), this.clog(o), o.query.channel && "" !== o.query.channel && (e.channel_id = o.query.channel), wx.setStorage({ key: this.storageKey.launchChannel, data: e.channel_id }), this.gameInfo = e;var i = this;this.report({ action: "open_game", game_id: e.game_id, channel_id: e.channel_id, event_time: "", client_ip: "" }), this.report({ action: "init_sdk", game_id: e.game_id, channel_id: e.channel_id, event_time: "", client_ip: "", os_type: this.osType() }), wx.getStorageInfo({ success(e) {
        e && e.keys && e.keys.indexOf(i.storageKey.initStatus) < 0 && wx.getSystemInfo({ success(e) {
            i.report({ action: "install", event_time: "", client_ip: "", os_type: i.osType(), device_model: e.model, os_version: e.system, channel_id: i.gameInfo.channel_id, game_id: i.gameInfo.game_id }), wx.setStorage({ key: i.storageKey.initStatus, data: 1 });
          } });
      } }), this.serverRequest(this.domain.base + this.url.init, { game_id: this.gameInfo.game_id, channel_id: this.gameInfo.channel_id, version: this.gameInfo.version, appid: this.gameInfo.appid, ostype: this.osType() }, function (e) {
      e && 200 == e.res_code ? (i.renotifyMidas(), i.confInfo = JSON.parse(e.res_msg), s({ res_code: 200, res_msg: { iosPay: i.confInfo.iosPay } })) : s({ res_code: 500 });
    });
  }msgCheck(e, s) {
    var o = this;this.serverRequest(this.domain.api + this.url.msgCheck, e, function (e) {
      o.clog("\u67e5\u8be2\u654f\u611f\u8bcd\u7ed3\u679c"), o.clog(e), s && s(e);
    });
  }osType() {
    var e = wx.getSystemInfoSync();var s = e.model.toLowerCase();e = e.version.toLowerCase();return 0 <= s.indexOf("iphone") || 0 <= e.indexOf("iphone") ? "ios" : "android";
  }serverRequest(s, e, o) {
    this.clog("SDK\u8bf7\u6c42\u670d\u52a1\u5668"), this.clog(s), this.clog(e);var i = this;wx.request({ url: s, data: e, method: "POST", success(e) {
        i.clog("\u670d\u52a1\u7aef\u8bf7\u6c42\u6210\u529f"), i.clog(e), o && o(e.data);
      }, fail(e) {
        i.clog("\u670d\u52a1\u7aef\u8bf7\u6c42\u5931\u8d25"), i.clog(e), o && o({ res_code: 500, res_msg: "\u8bf7\u6c42\u5931\u8d25" });
      }, complete(e) {
        i.clog("\u670d\u52a1\u7aef\u8bf7\u6c42\u5b8c\u6210"), i.clog(s);
      } });
  }clog(e) {
    "object" == typeof e && (e = JSON.stringify(e)), console.log(this.time() + " # " + e);
  }time() {
    return Date.parse(new Date()) / 1e3;
  }
}