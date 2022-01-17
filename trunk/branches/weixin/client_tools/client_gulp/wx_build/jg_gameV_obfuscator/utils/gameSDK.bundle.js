var gameSDK = function (n) {
  var o = {};function r(e) {
    if (o[e]) return o[e].exports;var t = o[e] = { i: e, l: !1, exports: {} };return n[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports;
  }return r.m = n, r.c = o, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;if (4 & e && "object" == typeof t && t && t.__esModule) return t;var n = Object.create(null);if (r.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var o in t) r.d(n, o, function (e) {
      return t[e];
    }.bind(null, o));return n;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 7);
}([function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e;
    };
  }();var r = function (e) {
    return "xinxin_" + e + "_@";
  },
      a = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e);
    }return o(e, [{ key: "getItem", value: function (e) {
        var t = wx.getStorageSync(r(e));return !!t && function (e) {
          e = unescape(e);for (var t = String.fromCharCode(e.charCodeAt(0) - e.length), n = 1; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) - t.charCodeAt(n - 1));return t = JSON.parse(t);
        }(t);
      } }, { key: "setItem", value: function (e, t) {
        wx.setStorageSync(r(e), function (e) {
          e = JSON.stringify(e);for (var t = String.fromCharCode(e.charCodeAt(0) + e.length), n = 1; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) + e.charCodeAt(n - 1));return escape(t);
        }(t));
      } }, { key: "destroyItem", value: function (e) {
        wx.removeStorageSync(r(e));
      } }]), e;
  }();t.default = new a();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = { GAME_NAME: "风之旅迹", APPID: 267, APPID_IOS: 269, APP_KEY: "ddda8f1083bbef53a2cba230fc4550ac", SHARE_QUERY: "agent_id=2503&site_id=116929", IOS_SHARE_QUERY: "agent_id=2503&site_id=116929", AGENT_ID: 2503, SITE_ID: 116928, IOS_SITE_ID: 116927, adInfo: { gdt_vid: "", weixinadinfo: "" } };t.default = o;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e;
    };
  }();var r = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.systemInfo = {};
    }return o(e, [{ key: "getSystemInfo", value: function () {
        var n = this,
            o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";return new Promise(function (e, t) {
          n.checkSystemInfo(function () {
            o && o in n.systemInfo ? e(n.systemInfo[o]) : e(n.systemInfo);
          });
        });
      } }, { key: "checkSystemInfo", value: function (e) {
        this.getNetwork().then(this.getSystem()).then(function () {
          e();
        }).catch(function (e) {
          reject(e);
        });
      } }, { key: "getNetwork", value: function () {
        var o = this;return new Promise(function (t, n) {
          wx.getNetworkType({ success: function (e) {
              delete e.errMsg, o.systemInfo = Object.assign(e, o.systemInfo), t();
            }, fail: function (e) {
              n(e.errMsg);
            } });
        });
      } }, { key: "getSystem", value: function () {
        var o = this;return new Promise(function (t, n) {
          wx.getSystemInfo({ success: function (e) {
              delete e.errMsg, o.systemInfo = Object.assign(e, o.systemInfo), t();
            }, fail: function (e) {
              n(e.errMsg);
            } });
        });
      } }]), e;
  }();t.default = new r();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e;
    };
  }(),
      s = r(n(8)),
      c = r(n(1)),
      l = r(n(0)),
      d = r(n(2));function r(e) {
    return e && e.__esModule ? e : { default: e };
  }var a = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e);
    }return o(e, [{ key: "api", value: function (a, i) {
        var u = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "post",
            f = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "";return new Promise(function (t, n) {
          var o = l.default.getItem("adQuery"),
              e = l.default.getItem("is_ad_user");f || i.appid || (i.appid = c.default.APPID), i.agent_id = !1 !== o ? o.agent_id : c.default.AGENT_ID, i.site_id = !1 !== o ? o.site_id : c.default.SITE_ID, console.log("query,is_ad_user", o, e), !1 === o && !1 === e && (i.agent_id = 1e5, i.site_id = 1e5), i.launchScene = l.default.getItem("launchScene");var r = a in s.default && s.default[a];!1 === r && n("type error"), d.default.getSystemInfo("platform").then(function (e) {
            "ios" === e && !1 === o && (i.site_id = c.default.IOS_SITE_ID), i.ad_click_id = c.default.adInfo.gdt_vid, i.weixinadinfo = c.default.adInfo.weixinadinfo, i.env = e, wx.request({ url: r, header: { "Content-Type": "application/x-www-form-urlencoded" }, method: u, data: i, success: function (e) {
                200 === e.statusCode ? 1 === e.data.ret || "ok" === e.data ? t(e.data.data) : n(e.data.msg) : n("network error " + e.statusCode);
              }, fail: function (e) {
                n(e.errMsg);
              } });
          });
        });
      } }]), e;
  }();t.default = new a();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e;
    };
  }(),
      r = f(n(0)),
      a = f(n(3)),
      i = f(n(2)),
      u = f(n(5));function f(e) {
    return e && e.__esModule ? e : { default: e };
  }var s = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.loginUserInfo = {};
    }return o(e, [{ key: "login", value: function () {
        var e = this;return new Promise(function (n, o) {
          var r = e;wx.login({ success: function (e) {
              var t = { code: e.code, avatarUrl: "", nickName: "" };r.serverLogin(t).then(function (e) {
                n(e);
              }).catch(function (e) {
                o(e);
              });
            }, fail: function (e) {
              o(e.errMsg);
            } });
        });
      } }, { key: "serverLogin", value: function (r) {
        return new Promise(function (n, o) {
          i.default.getSystemInfo().then(function (e) {
            var t = { do: "authorized", code: r.code, avatar: r.avatarUrl, nickName: r.nickName, platform: e.platform, model: e.model, os: e.system };a.default.api("COMMON", t).then(function (e) {
              n(e);
            }).catch(function (e) {
              o(e);
            });
          });
        });
      } }, { key: "getUserInfo", value: function () {
        return { uid: this.getStorageUserInfo("uid"), access_token: this.getStorageUserInfo("accessToken"), openid: this.getStorageUserInfo("openid"), avatar: this.getStorageUserInfo("avatar"), username: this.getStorageUserInfo("username"), nickname: this.getStorageUserInfo("nickname"), agent_id: this.getStorageUserInfo("agent_id"), site_id: this.getStorageUserInfo("site_id"), is_ad_user: this.getStorageUserInfo("is_ad_user") };
      } }, { key: "checkLoginStatus", value: function (t, n) {
        var o = this,
            e = this.getStorageUserInfo();0 === Object.keys(e).length ? this.login().then(function (e) {
          o.setStorageUserInfo(e), u.default.showShareMenu(), t();
        }).catch(function (e) {
          n(e);
        }) : this.checkServerLoginStatus().then(function () {
          t();
        }).catch(function (e) {
          o.destroyStorageUserInfo(), o.login().then(function (e) {
            o.setStorageUserInfo(e), u.default.showShareMenu(), t();
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "checkServerLoginStatus", value: function () {
        var o = this;return new Promise(function (t, n) {
          var e = { do: "checkLoginStatus", accessToken: o.getStorageUserInfo("accessToken"), uid: o.getStorageUserInfo("uid") };a.default.api("COMMON", e).then(function (e) {
            t();
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "getStorageUserInfo", value: function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";return 0 === Object.keys(this.loginUserInfo).length && (this.loginUserInfo = r.default.getItem("loginUserInfo"), !1 === this.loginUserInfo) ? {} : e && e in this.loginUserInfo ? this.loginUserInfo[e] : this.loginUserInfo;
      } }, { key: "setStorageUserInfo", value: function (e) {
        this.loginUserInfo = e, r.default.destroyItem("is_ad_user"), 1e5 == e.site_id && 1e5 == e.agent_id ? (this.loginUserInfo.is_ad_user = 0, r.default.setItem("is_ad_user", 0)) : (this.loginUserInfo.is_ad_user = 1, r.default.setItem("is_ad_user", 1)), console.log("设置用户信息：", this.loginUserInfo), r.default.setItem("loginUserInfo", this.loginUserInfo);
      } }, { key: "destroyStorageUserInfo", value: function () {
        this.loginUserInfo = {}, r.default.destroyItem("loginUserInfo");
      } }, { key: "reportAdInfo", value: function (n, e) {
        if (n.gdt_vid && n.weixinadinfo) {
          var o = "";e && (o = this.getStorageUserInfo("username"), 0 === Object.keys(o).length && (o = "")), i.default.getSystemInfo().then(function (e) {
            var t = { platform: e.platform, model: e.model, os: e.system, do: "adNotify", time: Date.parse(new Date()) / 1e3, gdt_vid: n.gdt_vid, weixinadinfo: n.weixinadinfo, username: o, scene: n.scene, referrerInfo: JSON.stringify(n.referrerInfo), wx_site_id: n.wx_site_id, wx_agent_id: n.wx_agent_id };a.default.api("COMMON", t).then(function (e) {}).catch(function (e) {});
          });
        }
      } }]), e;
  }();t.default = new s();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e;
    };
  }(),
      r = f(n(0)),
      a = f(n(3)),
      i = f(n(1)),
      u = f(n(2));function f(e) {
    return e && e.__esModule ? e : { default: e };
  }var s = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.shareConfig = { title: "", imageUrl: "", query: i.default.SHARE_QUERY };
    }return o(e, [{ key: "checkShareConfig", value: function () {
        var o = this;return new Promise(function (n, e) {
          var t = r.default.getItem("shareConfig");if (console.log("输出分享配置11：", t), !1 !== t) return o.shareConfig = t, n();a.default.api("COMMON", { do: "getShareConfig" }).then(function (t) {
            u.default.getSystemInfo("platform").then(function (e) {
              return t.query = "ios" === e ? i.default.IOS_SHARE_QUERY : i.default.SHARE_QUERY, 0 === r.default.getItem("is_ad_user") && (t.query = "agent_id=100000&site_id=100000"), console.log("是否广告用户：", r.default.getItem("is_ad_user")), console.log("输出分享配置22：", t), r.default.setItem("shareConfig", t), o.shareConfig = t, n();
            });
          }).catch(function (e) {
            u.default.getSystemInfo("platform").then(function (e) {
              return "ios" === e && (o.shareConfig.query = i.default.IOS_SHARE_QUERY), 0 === r.default.getItem("is_ad_user") && (o.shareConfig.query = "agent_id=100000&site_id=100000"), n();
            });
          });
        });
      } }, { key: "getShareConfig", value: function () {
        var e = this;this.checkShareConfig().then(function () {
          return { title: e.shareConfig.title, imageUrl: e.shareConfig.imageUrl, query: e.shareConfig.query };
        });
      } }, { key: "showShareMenu", value: function () {
        var e = this;wx.showShareMenu({ withShareTicket: !0 }), console.log("开启分享按钮"), this.checkShareConfig().then(function () {
          wx.onShareAppMessage(function () {
            return e.shareConfig;
          });
        });
      } }, { key: "makeShare", value: function (t) {
        var n = this;this.checkShareConfig().then(function () {
          t.hasOwnProperty("title") && t.title && (n.shareConfig.title = t.title), t.hasOwnProperty("imageUrl") && t.imageUrl && (n.shareConfig.imageUrl = t.imageUrl);var e = "";t.hasOwnProperty("ext") && t.ext && (e = t.ext), n.shareConfig.query += "&share_ext=" + e, console.log("share info", n.shareConfig), wx.shareAppMessage(n.shareConfig);
        });
      } }]), e;
  }();t.default = new s();
}, function (e, t) {
  var n = { utf8: { stringToBytes: function (e) {
        return n.bin.stringToBytes(unescape(encodeURIComponent(e)));
      }, bytesToString: function (e) {
        return decodeURIComponent(escape(n.bin.bytesToString(e)));
      } }, bin: { stringToBytes: function (e) {
        for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));return t;
      }, bytesToString: function (e) {
        for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));return t.join("");
      } } };e.exports = n;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e;
    };
  }(),
      r = f(n(4)),
      a = f(n(9)),
      i = f(n(0)),
      u = f(n(1));function f(e) {
    return e && e.__esModule ? e : { default: e };
  }var s = { gdt_vid: !1, weixinadinfo: !1, scene: !1, referrerInfo: !1, site_id: !1, agent_id: !1 },
      c = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.cpSDK = a.default;
    }return o(e, [{ key: "init", value: function (e, t) {
        var n, o;n = wx.getLaunchOptionsSync(), o = n.query, i.default.destroyItem("adQuery"), o.agent_id && o.site_id && i.default.setItem("adQuery", { agent_id: o.agent_id, site_id: o.site_id }), i.default.setItem("launchScene", n.scene ? n.scene : 0), o.gdt_vid && o.weixinadinfo && (s.gdt_vid = o.gdt_vid, s.weixinadinfo = o.weixinadinfo, s.scene = n.scene, s.referrerInfo = n.referrerInfo, s.wx_agent_id = o.agent_id, s.wx_site_id = o.site_id, u.default.adInfo.gdt_vid = o.gdt_vid, u.default.adInfo.weixinadinfo = o.weixinadinfo), r.default.reportAdInfo(s, !1), e();
      } }, { key: "entryGame", value: function (e, t) {
        r.default.checkLoginStatus(function () {
          wx.hideLoading(), r.default.reportAdInfo(s, !0, e, t), e();
        }, function (e) {
          wx.hideLoading(), t(e);
        });
      } }]), e;
  }();t.default = new c();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = "https://poster.guangzhoudilong.com/face",
      r = { COMMON: "https://api.guangzhoudilong.com/api/weGame/ApiCommon.php", IOS_REPORT: o + "/pgIns.php", ANDROID_REPORT: o + "/andUserInfo.php" };t.default = r;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e;
    };
  }(),
      s = a(n(0)),
      f = a(n(3)),
      c = a(n(1)),
      l = a(n(10)),
      r = a(n(5)),
      d = a(n(4)),
      g = a(n(11)),
      h = a(n(2)),
      y = a(n(12));function a(e) {
    return e && e.__esModule ? e : { default: e };
  }var i = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e);
    }return o(e, [{ key: "customerPay", value: function (e) {
        var t = { type: "makePay", order_no: g.default.orderInfo.order_no, item_name: e.item_name, item_desc: e.item_desc, appid: c.default.APPID };wx.openCustomerServiceConversation({ sessionFrom: JSON.stringify(t), showMessageCard: !0, sendMessagePath: "index?" + JSON.stringify(t), sendMessageImg: "https://image.693975.com/wegame/pay.png" });
      } }, { key: "xcxPay", value: function (e, t) {
        var n = "ios" === e.env ? c.default.APPID_IOS : c.default.APPID,
            o = c.default.GAME_NAME;void 0 !== e.payConfig.gameName && !1 !== e.payConfig.gameName && (o = e.payConfig.gameName);var r = { game_name: o, money: e.orderInfo.amt, shop_item: t.item_name, game_id: "ios" === e.env ? c.default.APPID_IOS : c.default.APPID, order_id: e.orderInfo.order_no },
            a = "pages/pay/pay?order_id=" + e.orderInfo.order_no + "&game_id=" + n + "&money=" + e.orderInfo.amt + "&shop_item=" + t.item_name + "&game_name=" + o;console.log("跳转小程序支付参数", a, r), wx.navigateToMiniProgram({ appId: e.payConfig.payXcxAppId, path: a, extraData: r, envVersion: "release", success: function (e) {} });
      } }, { key: "customerAddQQ", value: function () {
        var e = { type: "contactCustomer", appid: "ios" === g.default.env ? c.default.APPID_IOS : c.default.APPID };wx.openCustomerServiceConversation({ sessionFrom: JSON.stringify(e), showMessageCard: !0, sendMessagePath: "index?" + JSON.stringify(e), sendMessageImg: "https://image.693975.com/wegame/pay.png" });
      } }, { key: "makePayment", value: function (u) {
        var f = this;return new Promise(function (n, o) {
          console.log("配置参数：", g.default.payConfig);var r = "ios" === g.default.env,
              a = 0 === s.default.getItem("is_ad_user");if (0 === s.default.getItem("is_ad_user") && r && 1 == g.default.payConfig.iosPayStatus) return f.customerAddQQ(), n();if (r && 3 == g.default.payConfig.iosPayStatus) return wx.showModal({ title: "发起支付失败", content: "由于政策影响，ios支付功能暂不可用", showCancel: !1 }), n();var i = { amt: u.amt, role_id: u.role_id, role_name: u.role_name, zone_id: u.zone_id, ext: u.ext ? u.ext : "", role_level: u.role_level };g.default.makeOrder(i).then(function () {
            console.log("下单信息orderInfo:", i), console.log("下单信息payParams:", u), console.log("下单信息payment:", g.default);var e = g.default.payConfig.iosPayType,
                t = g.default.payConfig.payType;return console.log(r, a, t, e), r && "XCX" == e || !r && "XCX" == t ? (console.log("进入小程序支付"), f.xcxPay(g.default, u), n()) : r && "CUSTOMER" == e || !r && "CUSTOMER" == t ? (console.log("进入客服消息支付"), f.customerPay(u), n()) : void (r || "MIDAS" != t || (console.log("进入米大师支付"), g.default.makePay().then(function () {
              g.default.wxPay().then(function (e) {
                n(e);
              }).catch(function (e) {
                o(e);
              });
            }).catch(function (e) {
              o(e);
            })));
          }).catch(function (e) {
            o(e);
          });
        });
      } }, { key: "shareAppMessage", value: function (e) {
        r.default.makeShare(e);
      } }, { key: "showShareMenu", value: function () {
        r.default.showShareMenu();
      } }, { key: "loginUserInfo", value: function (e, t) {
        var n = d.default.getUserInfo();n.appid = c.default.APPID;var o = wx.getLaunchOptionsSync().query.share_ext;n.share_ext = o || "", e(n);
      } }, { key: "payConfig", value: function () {
        return new Promise(function (t, n) {
          f.default.api("COMMON", { do: "getApplePayConfig" }).then(function (e) {
            t(e);
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "dataReport", value: function (u) {
        return new Promise(function (r, a) {
          var e,
              i = { timestamp: e = Date.parse(new Date()) / 1e3, sign: (0, y.default)(c.default.APPID + e), flag: (0, y.default)(e + c.default.APPID + c.default.APP_KEY) };["data_type", "zone_id", "zone_name", "role_id", "role_name", "role_level", "role_currency"].forEach(function (e) {
            if (void 0 === u[e]) return a("invalid " + e);
          }), h.default.getSystemInfo().then(function (e) {
            var t = { mtype: 45, agent_id: c.default.AGENT_ID, site_id: c.default.SITE_ID, userid: d.default.getStorageUserInfo("uid"), uname: d.default.getStorageUserInfo("username"), dataType: u.data_type, serverID: u.zone_id, serverName: u.zone_name, roleID: u.role_id, roleName: u.role_name, roleLevel: u.role_level, moneyNum: u.role_currency, time: i.timestamp, sign: i.sign, model: e.model },
                n = {},
                o = "";switch (e.platform) {case "ios":
                t.appid = c.default.APPID_IOS, n = { action: "UserInfo", flag: i.flag, imei: l.default.DEVICE_NO }, o = "IOS_REPORT";break;case "android":
                t.appid = c.default.APPID, n = { uuid: l.default.DEVICE_NO }, o = "ANDROID_REPORT";break;case "devtools":
                return r();}Object.assign(t, n), f.default.api(o, t, "post", "report").then(function () {
              r();
            }).catch(function (e) {
              a("数据上报失败");
            });
          }).catch(function (e) {
            a("获取系统信息失败");
          });
        });
      } }, { key: "buriedPoint", value: function (o) {
        return new Promise(function (t, n) {
          var e = { do: "buriedPoint", action: o.action, appid: c.default.APPID, userid: d.default.getStorageUserInfo("uid"), serverID: o.zone_id, serverName: o.zone_name, roleID: o.role_id, roleName: o.role_name };f.default.api("COMMON", e).then(function (e) {
            t(e);
          }).catch(function (e) {
            n(e);
          });
        });
      } }]), e;
  }();t.default = new i();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });t.default = { DEBUG: !1, SDK_VERSION: "1.02", DEVICE_NO: "wegame_imei" };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e;
    };
  }(),
      a = f(n(3)),
      i = f(n(0)),
      u = f(n(4)),
      r = f(n(2));f(n(1));function f(e) {
    return e && e.__esModule ? e : { default: e };
  }var s = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.payConfig = {}, this.getPayConfig(), this.env = "", this.getEnv(), this.orderInfo = {}, this.orderData = {};
    }return o(e, [{ key: "getPayConfig", value: function () {
        var n = this,
            e = i.default.getItem("payConfig"),
            t = new Date(),
            o = t.toLocaleDateString() + " " + t.getHours() + ":" + t.getMinutes();if (!1 === e || e.cacheDate !== o) {
          var r = { do: "getPayConfig" };return new Promise(function (e, t) {
            a.default.api("COMMON", r).then(function (e) {
              e.cacheDate = o, i.default.setItem("payConfig", e), n.payConfig = e;
            }).catch(function (e) {
              t(e);
            });
          });
        }this.payConfig = e;
      } }, { key: "makeOrder", value: function (o) {
        var r = this;return new Promise(function (t, n) {
          r.orderData = o;var e = { do: "makeOrder", user_name: u.default.getStorageUserInfo("username"), amt: o.amt, role_id: o.role_id, role_name: o.role_name, zone_id: o.zone_id, ext: o.ext, role_level: o.role_level, platform: r.env };a.default.api("COMMON", e).then(function (e) {
            r.orderInfo = e, r.payConfig.switchPayType = e.switch_pay_type, r.payConfig.payType = e.pay_type, r.payConfig.iosPayType = e.ios_pay_type, t();
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "makePay", value: function () {
        var n = this;return new Promise(function (e, t) {
          "MIDAS" === n.payConfig.payType ? "ios" === n.env ? (wx.showModal({ title: "发起支付失败", content: "由于政策影响，支付功能暂不可用", showCancel: !1 }), t()) : wx.checkSession({ success: function () {
              e();
            }, fail: function () {
              u.default.destroyStorageUserInfo(), u.default.login().then(function () {
                e();
              }).catch(function (e) {
                t(e);
              });
            } }) : t();
        });
      } }, { key: "wxPay", value: function () {
        var o = this;return new Promise(function (t, n) {
          wx.requestMidasPayment({ mode: "game", env: o.payConfig.env, offerId: o.payConfig.offerId, currencyType: "CNY", platform: o.env, buyQuantity: o.orderInfo.buyQuantity, zoneId: o.payConfig.zoneId, success: function (e) {
              wx.showLoading({ title: "支付成功正在发送道具" }), o.payCallback().then(function (e) {
                wx.hideLoading(), wx.showLoading({ title: "发送成功" }), setTimeout(function () {
                  wx.hideLoading();
                }, 2e3), t();
              }).catch(function (e) {
                wx.showModal({ title: "提示", content: "发送失败、" + e + "，请联系客服处理", showCancel: !1 }), n(e);
              });
            }, fail: function (e) {
              n(e);
            }, complete: function (e) {
              console.log(e);
            } });
        });
      } }, { key: "payCallback", value: function () {
        var o = this;return new Promise(function (t, n) {
          u.default.checkLoginStatus(function () {
            var e = { do: "payCallback", accessToken: u.default.getStorageUserInfo("accessToken"), order_no: o.orderInfo.order_no, amt: o.orderInfo.amt, zone_id: o.payConfig.zoneId, pf: o.env };a.default.api("COMMON", e).then(function (e) {
              t(e);
            }).catch(function (e) {
              n(e);
            });
          });
        });
      } }, { key: "getEnv", value: function () {
        var t = this;r.default.getSystemInfo("platform").then(function (e) {
          t.env = e;
        });
      } }, { key: "checkEnv", value: function () {
        return "android" === this.env || "devtools" === this.env;
      } }]), e;
  }();t.default = new s();
}, function (e, t, n) {
  "use strict";

  var _, v, I, w, o;_ = n(13), v = n(6).utf8, I = n(14), w = n(6).bin, (o = function e(t, n) {
    t.constructor == String ? t = n && "binary" === n.encoding ? w.stringToBytes(t) : v.stringToBytes(t) : I(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || (t = t.toString());for (var o = _.bytesToWords(t), r = 8 * t.length, a = 1732584193, i = -271733879, u = -1732584194, f = 271733878, s = 0; s < o.length; s++) o[s] = 16711935 & (o[s] << 8 | o[s] >>> 24) | 4278255360 & (o[s] << 24 | o[s] >>> 8);o[r >>> 5] |= 128 << r % 32, o[14 + (r + 64 >>> 9 << 4)] = r;var c = e._ff,
        l = e._gg,
        d = e._hh,
        g = e._ii;for (s = 0; s < o.length; s += 16) {
      var h = a,
          y = i,
          p = u,
          m = f;i = g(i = g(i = g(i = g(i = d(i = d(i = d(i = d(i = l(i = l(i = l(i = l(i = c(i = c(i = c(i = c(i, u = c(u, f = c(f, a = c(a, i, u, f, o[s + 0], 7, -680876936), i, u, o[s + 1], 12, -389564586), a, i, o[s + 2], 17, 606105819), f, a, o[s + 3], 22, -1044525330), u = c(u, f = c(f, a = c(a, i, u, f, o[s + 4], 7, -176418897), i, u, o[s + 5], 12, 1200080426), a, i, o[s + 6], 17, -1473231341), f, a, o[s + 7], 22, -45705983), u = c(u, f = c(f, a = c(a, i, u, f, o[s + 8], 7, 1770035416), i, u, o[s + 9], 12, -1958414417), a, i, o[s + 10], 17, -42063), f, a, o[s + 11], 22, -1990404162), u = c(u, f = c(f, a = c(a, i, u, f, o[s + 12], 7, 1804603682), i, u, o[s + 13], 12, -40341101), a, i, o[s + 14], 17, -1502002290), f, a, o[s + 15], 22, 1236535329), u = l(u, f = l(f, a = l(a, i, u, f, o[s + 1], 5, -165796510), i, u, o[s + 6], 9, -1069501632), a, i, o[s + 11], 14, 643717713), f, a, o[s + 0], 20, -373897302), u = l(u, f = l(f, a = l(a, i, u, f, o[s + 5], 5, -701558691), i, u, o[s + 10], 9, 38016083), a, i, o[s + 15], 14, -660478335), f, a, o[s + 4], 20, -405537848), u = l(u, f = l(f, a = l(a, i, u, f, o[s + 9], 5, 568446438), i, u, o[s + 14], 9, -1019803690), a, i, o[s + 3], 14, -187363961), f, a, o[s + 8], 20, 1163531501), u = l(u, f = l(f, a = l(a, i, u, f, o[s + 13], 5, -1444681467), i, u, o[s + 2], 9, -51403784), a, i, o[s + 7], 14, 1735328473), f, a, o[s + 12], 20, -1926607734), u = d(u, f = d(f, a = d(a, i, u, f, o[s + 5], 4, -378558), i, u, o[s + 8], 11, -2022574463), a, i, o[s + 11], 16, 1839030562), f, a, o[s + 14], 23, -35309556), u = d(u, f = d(f, a = d(a, i, u, f, o[s + 1], 4, -1530992060), i, u, o[s + 4], 11, 1272893353), a, i, o[s + 7], 16, -155497632), f, a, o[s + 10], 23, -1094730640), u = d(u, f = d(f, a = d(a, i, u, f, o[s + 13], 4, 681279174), i, u, o[s + 0], 11, -358537222), a, i, o[s + 3], 16, -722521979), f, a, o[s + 6], 23, 76029189), u = d(u, f = d(f, a = d(a, i, u, f, o[s + 9], 4, -640364487), i, u, o[s + 12], 11, -421815835), a, i, o[s + 15], 16, 530742520), f, a, o[s + 2], 23, -995338651), u = g(u, f = g(f, a = g(a, i, u, f, o[s + 0], 6, -198630844), i, u, o[s + 7], 10, 1126891415), a, i, o[s + 14], 15, -1416354905), f, a, o[s + 5], 21, -57434055), u = g(u, f = g(f, a = g(a, i, u, f, o[s + 12], 6, 1700485571), i, u, o[s + 3], 10, -1894986606), a, i, o[s + 10], 15, -1051523), f, a, o[s + 1], 21, -2054922799), u = g(u, f = g(f, a = g(a, i, u, f, o[s + 8], 6, 1873313359), i, u, o[s + 15], 10, -30611744), a, i, o[s + 6], 15, -1560198380), f, a, o[s + 13], 21, 1309151649), u = g(u, f = g(f, a = g(a, i, u, f, o[s + 4], 6, -145523070), i, u, o[s + 11], 10, -1120210379), a, i, o[s + 2], 15, 718787259), f, a, o[s + 9], 21, -343485551), a = a + h >>> 0, i = i + y >>> 0, u = u + p >>> 0, f = f + m >>> 0;
    }return _.endian([a, i, u, f]);
  })._ff = function (e, t, n, o, r, a, i) {
    var u = e + (t & n | ~t & o) + (r >>> 0) + i;return (u << a | u >>> 32 - a) + t;
  }, o._gg = function (e, t, n, o, r, a, i) {
    var u = e + (t & o | n & ~o) + (r >>> 0) + i;return (u << a | u >>> 32 - a) + t;
  }, o._hh = function (e, t, n, o, r, a, i) {
    var u = e + (t ^ n ^ o) + (r >>> 0) + i;return (u << a | u >>> 32 - a) + t;
  }, o._ii = function (e, t, n, o, r, a, i) {
    var u = e + (n ^ (t | ~o)) + (r >>> 0) + i;return (u << a | u >>> 32 - a) + t;
  }, o._blocksize = 16, o._digestsize = 16, e.exports = function (e, t) {
    if (null == e) throw new Error("Illegal argument " + e);var n = _.wordsToBytes(o(e, t));return t && t.asBytes ? n : t && t.asString ? w.bytesToString(n) : _.bytesToHex(n);
  };
}, function (e, t) {
  var a, n;a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = { rotl: function (e, t) {
      return e << t | e >>> 32 - t;
    }, rotr: function (e, t) {
      return e << 32 - t | e >>> t;
    }, endian: function (e) {
      if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);return e;
    }, randomBytes: function (e) {
      for (var t = []; 0 < e; e--) t.push(Math.floor(256 * Math.random()));return t;
    }, bytesToWords: function (e) {
      for (var t = [], n = 0, o = 0; n < e.length; n++, o += 8) t[o >>> 5] |= e[n] << 24 - o % 32;return t;
    }, wordsToBytes: function (e) {
      for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);return t;
    }, bytesToHex: function (e) {
      for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));return t.join("");
    }, hexToBytes: function (e) {
      for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));return t;
    }, bytesToBase64: function (e) {
      for (var t = [], n = 0; n < e.length; n += 3) for (var o = e[n] << 16 | e[n + 1] << 8 | e[n + 2], r = 0; r < 4; r++) 8 * n + 6 * r <= 8 * e.length ? t.push(a.charAt(o >>> 6 * (3 - r) & 63)) : t.push("=");return t.join("");
    }, base64ToBytes: function (e) {
      e = e.replace(/[^A-Z0-9+\/]/gi, "");for (var t = [], n = 0, o = 0; n < e.length; o = ++n % 4) 0 != o && t.push((a.indexOf(e.charAt(n - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | a.indexOf(e.charAt(n)) >>> 6 - 2 * o);return t;
    } }, e.exports = n;
}, function (e, t, n) {
  "use strict";
  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */

  function o(e) {
    return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
  }e.exports = function (e) {
    return null != e && (o(e) || "function" == typeof (t = e).readFloatLE && "function" == typeof t.slice && o(t.slice(0, 0)) || !!e._isBuffer);var t;
  };
}]);

export default gameSDK['default'];