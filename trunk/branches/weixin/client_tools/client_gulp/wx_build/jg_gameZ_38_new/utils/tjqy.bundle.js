var gameSDK = function (o) {
  var a = {};function n(e) {
    if (a[e]) return a[e].exports;var t = a[e] = { i: e, l: !1, exports: {} };return o[e].call(t.exports, t, t.exports, n), t.l = !0, t.exports;
  }return n.m = o, n.c = a, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;if (4 & e && "object" == typeof t && t && t.__esModule) return t;var o = Object.create(null);if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var a in t) n.d(o, a, function (e) {
      return t[e];
    }.bind(null, a));return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 9);
}([function (t, n, o) {
  "use strict";
  Object.defineProperty(n, "__esModule", { value: !0 });var a = function (t, n, o) {
    return n && e(t.prototype, n), o && e(t, o), t;
  };function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }function A(e) {
    return "tw_ys_" + e + "_@";
  }var r = function () {
    function e() {
      var t = this;if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }return a(e, [{ key: "getItem", value: function (e) {
        e = wx.getStorageSync(A(e));return !!e && function (e) {
          e = unescape(e);for (var t = String.fromCharCode(e.charCodeAt(0) - e.length), n = 1; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) - t.charCodeAt(n - 1));return JSON.parse(t);
        }(e);
      } }, { key: "setItem", value: function (e, t) {
        wx.setStorageSync(A(e), function (e) {
          e = JSON.stringify(e);for (var t = String.fromCharCode(e.charCodeAt(0) + e.length), n = 1; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) + e.charCodeAt(n - 1));return escape(t);
        }(t));
      } }, { key: "destroyItem", value: function (e) {
        wx.removeStorageSync(A(e));try {
          wx.removeStorageSync(A(e));
        } catch (e) {}
      } }]), e;
  }();n.default = new r();
}, function (t, n, o) {
  "use strict";
  Object.defineProperty(n, "__esModule", { value: !0 });var a = function (t, n, o) {
    return n && e(t.prototype, n), o && e(t, o), t;
  };function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }var r = function () {
    function e() {
      var t = this;if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");this.gameConfig = {};
    }return a(e, [{ key: "setGameConfig", value: function (e) {
        this.gameConfig = e;
      } }, { key: "getGameConfig", value: function () {
        return this.gameConfig;
      } }]), e;
  }();n.default = new r();
}, function (t, n, o) {
  "use strict";
  Object.defineProperty(n, "__esModule", { value: !0 });var a = function (t, n, o) {
    return n && e(t.prototype, n), o && e(t, o), t;
  },
      s = u(o(10)),
      f = u(o(0)),
      d = u(o(1));function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }function u(e) {
    return e && e.__esModule ? e : { default: e };
  }o = function () {
    function e() {
      var t = this;if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }return a(e, [{ key: "api", value: function (r, i) {
        var u = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "post",
            c = this;return new Promise(function (t, n) {
          var e = r in s.default && s.default[r];!1 === e && n("type error");var o = d.default.getGameConfig();i.appid = o.APPID;var a = f.default.getItem("adQuery");i.agent_id = !1 !== a ? a.agent_id : o.AGENT_ID, i.site_id = !1 !== a ? a.site_id : o.SITE_ID, i.launchScene = f.default.getItem("launchScene"), i.queryData = o.query, c.http(e, i, u).then(function (e) {
            t(e);
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "http", value: function (e, o, a) {
        return new Promise(function (t, n) {
          wx.request({ url: e, header: { "Content-Type": "application/x-www-form-urlencoded" }, method: a, data: o, success: function (e) {
              200 === e.statusCode ? o.do && "getShareConfig" === o.do ? t(e.data) : "1" === e.data.status || 1 === e.data.status || 1 === e.data.code || "1" === e.data.code ? t(e.data.data || e.data) : n(e.data.msg) : n("network error code: " + e.statusCode);
            }, fail: function (e) {
              n(e.errMsg);
            } });
        });
      } }, { key: "report", value: function (o) {
        var a = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "post";return new Promise(function (t, n) {
          var e = d.default.getGameConfig();o.agent_id = e.AGENT_ID, o.site_id = e.SITE_ID, o.queryData = e.query, wx.request({ url: s.default.REPORT_DATA, header: { "Content-Type": "application/x-www-form-urlencoded" }, method: a, data: o, success: function (e) {
              200 === e.statusCode ? 1 === e.data.ret || 1 === e.data.ret ? t(e.data.data) : n(e.data.msg) : n("network error " + e.statusCode);
            }, fail: function (e) {
              n(e.errMsg);
            } });
        });
      } }, { key: "errorReport", value: function (o, a) {
        var r = this;return new Promise(function (t, n) {
          var e = { appid: d.default.getGameConfig().APPID, errorType: o, content: JSON.stringify(a) };r.http(s.default.ERROR_REPORT, e, "post").then(function (e) {
            t(e);
          }).catch(function (e) {
            n(e);
          });
        });
      } }]), e;
  }();n.default = new o();
}, function (t, n, o) {
  "use strict";
  Object.defineProperty(n, "__esModule", { value: !0 });var a = function (t, n, o) {
    return n && e(t.prototype, n), o && e(t, o), t;
  };function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }var r = function () {
    function e() {
      var t = this;if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");this.systemInfo = {};
    }return a(e, [{ key: "getSystemInfo", value: function () {
        var o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "",
            a = this;return new Promise(function (t, n) {
          a.checkSystemInfo().then(function (e) {
            o && o in a.systemInfo ? t(a.systemInfo[o]) : t(a.systemInfo);
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "checkSystemInfo", value: function () {
        var e = this;return new Promise(function (t, n) {
          e.getSystem().then(function () {
            e.getNetwork().then(function (e) {
              t();
            }).catch(function (e) {
              n(e);
            });
          }).catch(function (e) {
            n(e);
          });
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
              console.log("system info : ", e), delete e.errMsg, o.systemInfo = Object.assign(e, o.systemInfo), t();
            }, fail: function (e) {
              n(e.errMsg);
            } });
        });
      } }, { key: "getUserSetting", value: function () {
        return new Promise(function (t, n) {
          wx.getSetting({ withSubscriptions: !0, success: function (e) {
              t(e);
            }, fail: function (e) {
              n({ code: -4, msg: e.errMsg });
            } });
        });
      } }, { key: "openSubscribeSetting", value: function (o) {
        return new Promise(function (t, n) {
          wx.showModal({ title: "\u63d0\u793a", content: "\u68c0\u6d4b\u5230\u60a8\u672a\u5f00\u542f\u8ba2\u9605\u6d88\u606f\u901a\u77e5\u6743\u9650\uff0c\u662f\u5426\u53bb\u8bbe\u7f6e\uff1f", cancelColor: "#808080", confirmColor: "#FF0000", success: function (e) {
              e.confirm ? wx.openSetting({ withSubscriptions: !0, success: function (e) {
                  e.subscriptionsSetting.mainSwitch && null != e.subscriptionsSetting.itemSettings && "reject" === e.subscriptionsSetting.itemSettings[o] && t();
                }, fail: function (e) {
                  n("settingFail");
                } }) : n("rejectOpen");
            }, fail: function (e) {
              n(e.errMsg);
            } });
        });
      } }]), e;
  }();n.default = new r();
}, function (f, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var o = function (t, n, o) {
    return n && e(t.prototype, n), o && e(t, o), t;
  },
      a = s(n(0)),
      i = s(n(2)),
      u = s(n(3)),
      r = s(n(5)),
      c = s(n(1));function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }function s(e) {
    return e && e.__esModule ? e : { default: e };
  }s(n(7));n = function () {
    function e() {
      var t = this;if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");this.loginUserInfo = {}, this.subscribeStatus = !1;
    }return o(e, [{ key: "login", value: function (a) {
        var e = this;return new Promise(function (t, n) {
          var o = e;wx.login({ success: function (e) {
              e = { code: e.code, avatar: "", nickName: "", adData: a };o.serverLogin(e).then(function (e) {
                t(e);
              }).catch(function (e) {
                n(e);
              });
            }, fail: function (e) {
              n(e.errMsg);
            } });
        });
      } }, { key: "serverLogin", value: function (e) {
        return new Promise(function (t, n) {
          var o = { code: e.code, avatar: e.avatarUrl, nickName: e.nickName },
              a = c.default.getGameConfig();e.adData.gdt_vid && e.adData.weixinadinfo && (o.site_id = e.adData.wx_site_id, o.agent_id = e.adData.wx_agent_id, o.weixinadinfo = e.adData.weixinadinfo, o.plat_put = e.adData.plat_put || "source", o.put_appid = a.put_appid), u.default.getSystemInfo().then(function (e) {
            "ios" === e.platform && (o.site_id = a.IOS_SITE_ID), o.brand = e.brand, o.model = e.model, o.pf = e.platform, o.system = e.system, o.ad_click_id = a.ad_notify_data.gdt_vid, o.weixinadinfo = a.ad_notify_data.weixinadinfo, o.scene = a.ad_notify_data.scene, o.referrerInfo = JSON.stringify(a.ad_notify_data.referrerInfo), i.default.api("LOGIN", o).then(function (e) {
              r.default.debugLog("LOGIN : ", e), t(e);
            }).catch(function (e) {
              n(e);
            });
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "getUserInfo", value: function () {
        return { uid: this.getStorageUserInfo("uid"), access_token: this.getStorageUserInfo("access_token"), user_name: this.getStorageUserInfo("username"), is_bind_phone: this.getStorageUserInfo("is_bind_phone"), mobile: this.getStorageUserInfo("mobile"), templateList: this.getStorageUserInfo("templateKey") };
      } }, { key: "checkLoginStatus", value: function (t) {
        var n = this,
            e = n.getStorageUserInfo();0 === Object.keys(e).length ? (console.log("\u672c\u5730\u65e0\u767b\u5f55\u6001\uff0c\u6267\u884c\u767b\u5f55"), n.login(t.adData).then(function (e) {
          a.default.setItem("sdk_login_time", Date.parse(new Date()) / 1e3), n.setStorageUserInfo(e), t.success();
        }).catch(function (e) {
          t.fail(e);
        })) : n.checkServerLoginStatus().then(function () {
          return Promise.resolve(t.success());
        }).catch(function (e) {
          n.destroyStorageUserInfo(), n.login(t.adData).then(function (e) {
            a.default.setItem("sdk_login_time", Date.parse(new Date()) / 1e3), n.setStorageUserInfo(e), t.success();
          }).catch(function (e) {
            t.fail(e);
          });
        });
      } }, { key: "checkServerLoginStatus", value: function () {
        var o = this;return new Promise(function (t, n) {
          var e = { appid: c.default.getGameConfig().APPID, accessToken: o.getStorageUserInfo("access_token"), uid: o.getStorageUserInfo("uid") };i.default.api("STATUS", e).then(function (e) {
            t();
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "getStorageUserInfo", value: function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";if (0 === Object.keys(this.loginUserInfo).length && (this.loginUserInfo = a.default.getItem("loginUserInfo"), !1 === this.loginUserInfo)) return {};var t = this.loginUserInfo;return t = e ? e in this.loginUserInfo ? this.loginUserInfo[e] : "" : t;
      } }, { key: "setStorageUserInfo", value: function (e) {
        this.loginUserInfo = e, a.default.setItem("loginUserInfo", e);
      } }, { key: "destroyStorageUserInfo", value: function () {
        this.loginUserInfo = {}, a.default.destroyItem("loginUserInfo");
      } }, { key: "sendPhoneCode", value: function (e) {
        var a = this;return new Promise(function (t, n) {
          var o = { appid: c.default.getGameConfig().APPID, mobile: e, user_name: a.getStorageUserInfo("username"), uid: a.getStorageUserInfo("uid"), type: "sendCode", accessToken: a.getStorageUserInfo("access_token") };i.default.api("BIND_PHONE", o).then(function (e) {
            t({ code: 1, msg: "success" });
          }).catch(function (e) {
            i.default.errorReport("bindPhone", { msg: "\u53d1\u751f\u624b\u673a\u9a8c\u8bc1\u7801\u5931\u8d25", data: o, res: e }), n({ code: -1, msg: e });
          });
        });
      } }, { key: "reportAdInfo", value: function (t, e) {
        var n, o;t.gdt_vid && t.weixinadinfo && (n = "", e && (n = this.getStorageUserInfo("username"), 0 === Object.keys(n).length && (n = "")), o = c.default.getGameConfig(), u.default.getSystemInfo().then(function (e) {
          e = { platform: e.platform, model: e.model, os: e.system, do: "adNotify", time: Date.parse(new Date()) / 1e3, gdt_vid: t.gdt_vid, weixinadinfo: t.weixinadinfo, username: n, scene: t.scene, referrerInfo: JSON.stringify(t.referrerInfo), wx_site_id: t.wx_site_id, wx_agent_id: t.wx_agent_id, appid: o.APPID, ios_appid: o.APPID_IOS, accessToken: t.accessToken, plat_put: t.plat_put, put_appid: o.put_appid };i.default.api("AD_NOTIFY", e).then(function (e) {}).catch(function (e) {});
        }));
      } }, { key: "reportTouTAdInfo", value: function (e, t) {
        var n;0 < e.length && (n = "", t && (n = this.getStorageUserInfo("username"), 0 === Object.keys(n).length && (n = "")), u.default.getSystemInfo().then(function (e) {
          e = { platform: e.platform, model: e.model, os: e.system, do: "adNotify", time: Date.parse(new Date()) / 1e3, username: n, toutiao: 1 };i.default.api("AD_NOTIFY", e).then(function (e) {}).catch(function (e) {});
        }));
      } }, { key: "bindPhone", value: function (e, a) {
        var r = this;return new Promise(function (t, n) {
          var o = { appid: c.default.getGameConfig().APPID, mobile: e, user_name: r.getStorageUserInfo("username"), uid: r.getStorageUserInfo("uid"), type: "bindPhone", code: a, accessToken: r.getStorageUserInfo("access_token") };i.default.api("BIND_PHONE", o).then(function (e) {
            t({ code: 1, msg: "success" });
          }).catch(function (e) {
            i.default.errorReport("bindPhone", { msg: "\u7ed1\u5b9a\u624b\u673a\u5931\u8d25", data: o, res: e }), n({ code: -1, msg: e });
          });
        });
      } }, { key: "checkSession", value: function () {
        var o = this;return new Promise(function (t, n) {
          wx.checkSession({ success: function () {
              var e = parseInt(a.default.getItem("sdk_login_time"));900 < parseInt(Date.parse(new Date())) / 1e3 - e ? (o.destroyStorageUserInfo(), o.login({}).then(function (e) {
                a.default.setItem("sdk_login_time", Date.parse(new Date()) / 1e3), o.setStorageUserInfo(e), t();
              }).catch(function (e) {
                n("pay resolve login");
              })) : t();
            }, fail: function () {
              o.destroyStorageUserInfo(), o.login({}).then(function (e) {
                a.default.setItem("sdk_login_time", Date.parse(new Date()) / 1e3), o.setStorageUserInfo(e), t();
              }).catch(function (e) {
                n(e);
              });
            } });
        });
      } }, { key: "subscribe", value: function (a) {
        var r = this;return new Promise(function (t, n) {
          var e = r.getStorageUserInfo("templateKey");return 0 === Object.keys(e).length ? n({ code: -3, msg: "Template Type Not Found" }) : (o = r.getStorageUserInfo("templateList")[a]) ? void u.default.getUserSetting().then(function (e) {
            console.log("settingData : ", e), e.subscriptionsSetting.mainSwitch ? null != e.subscriptionsSetting.itemSettings ? ("accept" === (e = e.subscriptionsSetting.itemSettings[o]) && r.onSubscribe(o).then(function () {
              t({ code: 0, msg: "success" });
            }).catch(function () {
              t({ code: 0, msg: "success" });
            }), "reject" === e && u.default.openSubscribeSetting().then(function (e) {
              t({ code: 1, msg: "closeNotify" });
            }).catch(function (e) {
              n({ code: -1, msg: e });
            }), "ban" === e && t({ code: 2, msg: "close notify" })) : r.preSubscribe(o).then(function () {
              t({ code: 0, msg: "success" });
            }).catch(function (e) {
              n(e);
            }) : r.preSubscribe(o).then(function () {
              t({ code: 0, msg: "success" });
            }).catch(function (e) {
              n(e);
            });
          }).catch(function (e) {
            n(e);
          }) : n({ code: -3, msg: "Template Not Found" });var o;
        });
      } }, { key: "serviceCheckMsg", value: function (o) {
        var a = this;return new Promise(function (t, n) {
          var e = { appid: c.default.getGameConfig().appid, content: o, accessToken: a.getStorageUserInfo("access_token") };i.default.api("MSG_CHECK", e).then(function (e) {
            t(e);
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "tipsSubscribe", value: function (o) {
        var a = this;return new Promise(function (t, n) {
          wx.showModal({ title: "\u63d0\u793a", content: "\u62d2\u63a5\u63a5\u6536\u5c06\u65e0\u6cd5\u6536\u5230\u6e38\u620f\u6b63\u5e38\u901a\u77e5\uff0c\u662f\u5426\u91cd\u65b0\u63a5\u6536\uff1f", cancelText: "\u4e0d\u4e86", cancelColor: "#808080", confirmColor: "#FF0000", success: function (e) {
              e.confirm ? wx.requestSubscribeMessage({ tmplIds: [o], success: function (e) {
                  "accept" == e[o] ? a.onSubscribe(o).then(function () {
                    t();
                  }).catch(function () {
                    t();
                  }) : n("rejectSubscribe");
                }, fail: function (e) {
                  n(e.errMsg);
                } }) : n("rejectAccept");
            }, fail: function (e) {
              n(e.errMsg);
            } });
        });
      } }, { key: "preSubscribe", value: function (o) {
        var a = this;return new Promise(function (t, n) {
          wx.showModal({ title: "\u63d0\u793a", content: "\u662f\u5426\u5f00\u901a\u670d\u52a1\u901a\u77e5?", showCancel: !0, cancelColor: "#808080", confirmColor: "#FF0000", success: function (e) {
              e.confirm ? wx.requestSubscribeMessage({ tmplIds: [o], success: function (e) {
                  "reject" == e[o] ? a.tipsSubscribe(o).then(function (e) {
                    t({ code: 0, msg: "success" });
                  }).catch(function (e) {
                    n({ code: -2, msg: e });
                  }) : "accept" == e[o] && a.onSubscribe(o).then(function () {
                    t({ code: 0, msg: "success" });
                  }).catch(function () {
                    t({ code: 0, msg: "success" });
                  });
                }, fail: function (e) {
                  20004 == e.errCode ? a.tipsSubscribe(o).then(function (e) {
                    t({ code: 0, msg: "success" });
                  }).catch(function (e) {
                    n({ code: -2, msg: e });
                  }) : n({ code: -3, msg: e.errMsg });
                } }) : n({ code: -3, msg: "rejectOpen" });
            } });
        });
      } }, { key: "onSubscribe", value: function (o) {
        var a = this;return new Promise(function (t, n) {
          u.default.getSystemInfo().then(function (e) {
            e = { accessToken: a.getStorageUserInfo("access_token"), uid: a.getStorageUserInfo("uid"), user_name: a.getStorageUserInfo("username"), pf: e.platform, templateId: o };i.default.api("SUBSCRIBE", e).then(function (e) {
              t();
            }).catch(function (e) {
              n(e);
            });
          });
        });
      } }]), e;
  }();t.default = new n();
}, function (t, n, o) {
  "use strict";
  Object.defineProperty(n, "__esModule", { value: !0 });var a = function (t, n, o) {
    return n && e(t.prototype, n), o && e(t, o), t;
  },
      o = o(6),
      r = o && o.__esModule ? o : { default: o };function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }o = function () {
    function e() {
      var t = this;if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
    }return a(e, [{ key: "debugLog", value: function (e, t) {
        r.default.DEBUG && console.log("[Xinxin]", e, t);
      } }, { key: "errorLog", value: function (e) {} }]), e;
  }();n.default = new o();
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { DEBUG: !0, SDK_VERSION: "101", DEVICE_NO: "wegame_imei" };
}, function (o, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var r = function (t, n, o) {
    return n && e(t.prototype, n), o && e(t, o), t;
  },
      u = d(n(2)),
      c = d(n(0)),
      s = d(n(4)),
      a = d(n(3)),
      f = d(n(5)),
      l = d(n(11)),
      g = d(n(1));function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }function d(e) {
    return e && e.__esModule ? e : { default: e };
  }n = function () {
    function e() {
      var t = this;if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");this.env = "", this.getEnv(), this.orderId = {}, this.orderData = {}, this.userPayTotal = 0;
    }return r(e, [{ key: "getPayConfig", value: function () {
        return new Promise(function (t, n) {
          var o = g.default.getGameConfig();a.default.getSystemInfo("platform").then(function (e) {
            e = { do: "getPayConfig", appid: o.APPID, accessToken: s.default.getStorageUserInfo("access_token"), uid: s.default.getStorageUserInfo("uid"), zone_id: -1, pf: e };u.default.api("PAY", e).then(function (e) {
              c.default.setItem("payConfig", e), t(e);
            }).catch(function (e) {
              f.default.debugLog("applePayConfig err: ", e), n({ msg: e });
            });
          });
        });
      } }, { key: "getPayUserTotal", value: function () {
        var a = this,
            r = this;return new Promise(function (t, e) {
          var n = g.default.getGameConfig(),
              n = { do: "getUserPayTotal", user_name: s.default.getStorageUserInfo("username"), iosAppid: n.APPID_IOS, agent_id: n.AGENT_ID, site_id: n.SITE_ID, pf: a.checkEnv() },
              o = c.default.getItem("adQuery");o.agent_id && o.site_id && (n.agent_id = o.agent_id, n.site_id = o.site_id), u.default.api("PAY_XCX", n).then(function (e) {
            r.userPayTotal = e.payTotal, t(e);
          }).catch(function (e) {});
        });
      } }, { key: "makeOrder", value: function (o) {
        var a = this;return new Promise(function (t, n) {
          var e = g.default.getGameConfig(),
              e = { do: "makeOrder", appid: e.APPID, accessToken: s.default.getStorageUserInfo("access_token"), uid: s.default.getStorageUserInfo("uid"), user_name: s.default.getStorageUserInfo("username"), role_id: o.role_id, role_name: o.role_name, zone_id: o.server_id, pf: a.checkEnv() ? "android" : "ios", amt: o.money, ext: o.ext, ad_click_id: e.ad_notify_data.gdt_vid, weixinadinfo: e.ad_notify_data.weixinadinfo, scene: e.ad_notify_data.scene, referrerInfo: JSON.stringify(e.ad_notify_data.referrerInfo) };u.default.api("PAY", e).then(function (e) {
            a.orderId = e.orderId, a.orderData = o, t(e.orderId);
          }).catch(function (e) {
            u.default.errorReport("pay", { msg: "\u7c73\u5927\u5e08\u521b\u5efa\u8ba2\u5355\u5931\u8d25", error: e, orderInfo: { accessToken: s.default.getStorageUserInfo("access_token"), uid: s.default.getStorageUserInfo("uid"), user_name: s.default.getStorageUserInfo("username"), role_id: o.role_id, role_name: o.role_name, zone_id: o.server_id, amt: o.money, ext: o.ext } }), n(e);
          });
        });
      } }, { key: "wxPay", value: function () {
        var a = this,
            r = 1,
            i = { code: 201, wxPay: r, msg: "", miMsg: "" };return new Promise(function (e, t) {
          var n = c.default.getItem("payConfig"),
              o = "android" === a.checkEnv() ? "android" : "windows";wx.requestMidasPayment({ mode: "game", env: "dev" === n.env ? 1 : 0, offerId: n.offer_id, currencyType: "CNY", platform: o, buyQuantity: a.orderData.money / n.rate, zoneId: n.zoneId || 1, success: function (t) {
              r = 2, a.confirmPay().then(function () {
                i.code = 200, i.msg = "success";
              }).catch(function (e) {
                i.code = 300, i.msg = "error", i.miMsg = l.default.errorDist[t.errCode] || "\u652f\u4ed8\u5f02\u5e38", u.default.errorReport("pay_callback", { msg: "\u652f\u4ed8--\u53d1\u8d27 : " + e, data: i, error: JSON.stringify({ res: t }), orderInfo: a.orderData }).then(function () {}).catch(function (e) {});
              }), e(i);
            }, fail: function (e) {
              r = 3;
            }, complete: function (e) {
              i.miMsg = l.default.errorDist[e.errCode] || "\u652f\u4ed8\u5f02\u5e38", u.default.errorReport("complete-pay", { msg: l.default.errorDist[e.errCode] || "\u652f\u4ed8\u5f02\u5e38", data: i, error: JSON.stringify({ res: e }), orderInfo: a.orderData }).then(function () {}).catch(function (e) {});
            } });
        });
      } }, { key: "confirmPay", value: function () {
        var n = this;return new Promise(function (e, t) {
          n.payCallback().then(function (e) {
            wx.showToast({ title: "\u9053\u5177\u53d1\u9001\u6210\u529f", icon: "success", duration: 2e3 });
          }).catch(function (e) {
            t(e);
          });
        });
      } }, { key: "payCallback", value: function () {
        var o = this;return new Promise(function (t, n) {
          var e = { do: "callback", appid: g.default.getGameConfig().APPID, accessToken: s.default.getStorageUserInfo("access_token"), uid: s.default.getStorageUserInfo("uid"), user_name: s.default.getStorageUserInfo("user_name"), role_id: o.orderData.role_id, role_name: o.orderData.role_name, role_level: o.orderData.role_level, zone_id: 1, pf: o.checkEnv(), amt: o.orderData.money, ext: o.orderData.ext, orderId: o.orderId };u.default.api("PAY_CALL", e).then(function (e) {
            t(e);
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "getEnv", value: function () {
        var t = this;a.default.getSystemInfo("platform").then(function (e) {
          t.env = e;
        });
      } }, { key: "checkEnv", value: function () {
        var e = this.env;return e = "devtools" == e ? "windows" : e;
      } }, { key: "customerNewPay", value: function (a) {
        var r = this;return new Promise(function (n, o) {
          wx.showModal({ title: "\u63d0\u793a", content: "\u5373\u5c06\u8df3\u8f6c\u81f3\u5b98\u65b9\u3010\u5ba2\u670d\u4f1a\u8bdd\u3011\u8bf7\u70b9\u51fb\u53f3\u4e0b\u89d2\u5c0f\u7a97\u53e3\u83b7\u53d6\u5145\u503c\u94fe\u63a5", showCancel: !0, success: function (e) {
              var t;e.confirm ? (t = g.default.getGameConfig(), r.makeXcxOrder(a.money, a).then(function (e) {
                e = { type: "orderInfo", user_name: s.default.getStorageUserInfo("username"), appid: t.APPID, payAppid: t.APPID_IOS, uid: s.default.getStorageUserInfo("uid"), orderId: e };e.ad_click_id = t.ad_notify_data.gdt_vid, e.weixinadinfo = t.ad_notify_data.weixinadinfo, e.gameName = t.GAME_NAME + "-\u5b98\u65b9\u6b63\u7248", e.desc = "\u5145\u503c" + a.money + "\u5143", wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: t.GAME_NAME + "-\u5b98\u65b9\u6b63\u7248.\u5145\u503c" + a.money + "\u5143", sessionFrom: JSON.stringify(e), sendMessageImg: "https://image.693975.com/wegame/pay.png", sendMessagePath: "index?" + JSON.stringify(e), success: function (e) {
                    console.log("customer res: ", e), r.getPayUserTotal().then();
                  }, fail: function (e) {
                    console.log("customer err: ", e);
                  } }), n();
              }).catch(function (e) {
                o(e);
              })) : o("\u53d6\u6d88\u652f\u4ed8");
            }, fail: function (e) {
              o("\u53d6\u6d88\u652f\u4ed8");
            } });
        });
      } }, { key: "xcxPay", value: function (t, n, o) {
        this.makeXcxOrder(n.money, n).then(function (e) {
          return wx.navigateToMiniProgram({ appId: t, path: "pages/pay/pay?amt=" + n.money + "&orderId=" + e + "&desc=" + n.product_desc, extraData: { foo: "bar" }, envVersion: 1 === o ? "release" : "trial", success: function (e) {} }), Promise.resolve();
        }).catch(function (e) {
          return wx.showModal({ title: "\u63d0\u793a", content: e.msg, showCancel: !1 }), f.default.debugLog("Tanwan--\u521b\u5efa\u8ba2\u5355\u5931\u8d25\uff08Orders Error\uff09---\x3e", e), Promise.reject(e);
        });
      } }, { key: "makeXcxOrder", value: function (a, r) {
        var i = this;return new Promise(function (t, n) {
          var e = g.default.getGameConfig(),
              e = { do: "createPreOrder", gold_num: r.game_fee, money: a, iosAppid: e.APPID_IOS, role_id: r.role_id, role_name: r.role_name, server_id: r.server_id, server_name: r.server_name, user_name: s.default.getStorageUserInfo("username"), ext: r.ext, mtype: 1, product_id: r.product_id, product_name: r.product_name, agent_id: e.AGENT_ID, site_id: e.SITE_ID, pf: i.checkEnv(), ad_click_id: e.ad_notify_data.gdt_vid, weixinadinfo: e.ad_notify_data.weixinadinfo, scene: e.ad_notify_data.scene, referrerInfo: JSON.stringify(e.ad_notify_data.referrerInfo) },
              o = c.default.getItem("adQuery");o.agent_id && o.site_id && (e.agent_id = o.agent_id, e.site_id = o.site_id), u.default.api("PAY_XCX", e).then(function (e) {
            t(e.orderId);
          }).catch(function (e) {
            f.default.debugLog("Tanwan--\u521b\u5efa\u5c0f\u7a0b\u5e8f\u8ba2\u5355\u5931\u8d25\uff08API Error\uff09---\x3e", e), u.default.errorReport("pay", { msg: "\u521b\u5efa\u5ba2\u670d\u8ba2\u5355\u5931\u8d25", res: e, payParams: r }), n("\u8c03\u7528\u5ba2\u670d\u4e0b\u5355\u5931\u8d25");
          });
        });
      } }]), e;
  }();t.default = new n();
}, function (e, t, n) {
  "use strict";
  e.exports = { APPID: 6440, APPID_IOS: 6442, SHARE_QUERY: "agent_id=118574&site_id=9721227", AGENT_ID: 118574, SITE_ID: 9720910, IOS_SITE_ID: 9720950, IOS_SHARE_QUERY: "agent_id=118574&site_id=9721227", GAME_NAME: "\u5929\u5251\u5947\u7f18", wxAdInfo: {}, put_appid: 6440, ad_notify_data: { gdt_vid: "", weixinadinfo: "", scene: "", referrerInfo: "" }, query: "" };
}, function (o, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var f = function (t, n, o) {
    return n && e(t.prototype, n), o && e(t, o), t;
  },
      a = d(n(4)),
      r = d(n(12)),
      i = d(n(0)),
      l = d(n(6)),
      u = d(n(13)),
      g = d(n(1)),
      c = d(n(8));function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }function d(e) {
    return e && e.__esModule ? e : { default: e };
  }var s = { gdt_vid: !1, weixinadinfo: !1, scene: !1, referrerInfo: !1, site_id: !1, agent_id: !1 },
      n = function () {
    function e() {
      var t = this;if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");this.version = "1.0.0", this.subscrStatus = !1;
    }return f(e, [{ key: "init", value: function (e, t) {
        var n, o;o = (n = wx.getLaunchOptionsSync()).query, i.default.destroyItem("adQuery"), i.default.destroyItem("launchScene"), o.agent_id && o.site_id && i.default.setItem("adQuery", { agent_id: o.agent_id, site_id: o.site_id }), i.default.setItem("launchScene", n.scene || 0), o.gdt_vid && o.weixinadinfo && (s.gdt_vid = o.gdt_vid, s.weixinadinfo = o.weixinadinfo, s.scene = n.scene, s.referrerInfo = n.referrerInfo, s.wx_agent_id = o.agent_id, s.wx_site_id = o.site_id, s.plat_put = o.plat_put, c.default.ad_notify_data.scene = n.scene, c.default.wxAdInfo = s, c.default.ad_notify_data.gdt_vid = s.gdt_vid, c.default.ad_notify_data.weixinadinfo = s.weixinadinfo, c.default.ad_notify_data.referrerInfo = s.referrerInfo), o.sdkInitWx = 1, console.log(o), c.default.query = JSON.stringify(o), g.default.setGameConfig(c.default), a.default.reportAdInfo(s, !1), a.default.reportTouTAdInfo(c.default.query, !1), u.default.checkShareConfig(), e();
      } }, { key: "sdkDebugLog", value: function () {
        l.default.DEBUG = !0;
      } }, { key: "setMenuShare", value: function (e) {
        u.default.onShareAppMessage(e).then(function () {
          return Promise.resolve();
        }).catch(function (e) {
          wx.onShareAppMessage(function () {
            return u.default.shareConfig;
          });
        });
      } }, { key: "shareAppMessage", value: function (e) {
        u.default.makeShare(e);
      } }, { key: "entryGame", value: function (e, t) {
        wx.showToast({ title: "\u6b63\u5728\u767b\u9646", icon: "loading" }), a.default.checkLoginStatus({ adData: s, success: function () {
            a.default.reportAdInfo(s, !0), a.default.reportTouTAdInfo(c.default.query, !0), r.default.getPayConfig(), r.default.getUserPayLimit(), u.default.showShareMenu(), u.default.onShareAppMessage({ title: "", imageUrl: "", ext: "" }).then(function (e) {}).catch(function (e) {}), e();
          }, fail: function (e) {
            t(e);
          } });
      } }, { key: "loginUserInfo", value: function (e) {
        "function" == typeof e && e(r.default.loginUserInfo());
      } }, { key: "dataReport", value: function (e) {
        return new Promise(function (t, n) {
          r.default.dataReport(e).then(function (e) {
            t();
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "bindPhoneSendCode", value: function (e) {
        return new Promise(function (t, n) {
          r.default.bindPhoneSendCode(e).then(function (e) {
            t();
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "bindPhone", value: function (e, o) {
        return new Promise(function (t, n) {
          r.default.bindPhone(e, o).then(function (e) {
            t();
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "makePayment", value: function (e) {
        return new Promise(function (t, n) {
          r.default.makePayment(e).then(function (e) {
            t();
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "connectCustomer", value: function (e) {
        r.default.connectCustomer(e.success, e.fail);
      } }, { key: "checkIosPay", value: function (e) {
        return r.default.getIosPaySwitch(e);
      } }, { key: "subscribe", value: function (e, t) {
        var n = this;n.subscrStatus = !0, a.default.subscribe(e).then(function (e) {
          if (n.subscrStatus = !1, "function" != typeof t) return e;t(e);
        }).catch(function (e) {
          if (n.subscrStatus = !1, console.log("errrrr : ", e), "function" != typeof t) return e;t(e);
        });
      } }, { key: "msgCheck", value: function (e) {
        return new Promise(function (t, n) {
          r.default.msgCheck(e).then(function (e) {
            t(e);
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "customerService", value: function () {
        wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: c.default.GAME_NAME, sessionFrom: "onlineService", sendMessagePath: "index?" + JSON.stringify({ type: "onlineService" }), success: function (e) {
            console.log("customer res: ", e);
          }, fail: function (e) {
            console.log("customer err: ", e);
          } });
      } }, { key: "checkToken", value: function () {
        return new Promise(function (e, t) {
          a.default.checkLoginStatus({ adData: s, success: function () {
              e(r.default.loginUserInfo());
            }, fail: function (e) {
              t(e);
            } });
        });
      } }, { key: "retSetUserInfo", value: function () {
        return a.default.destroyStorageUserInfo(), new Promise(function (t, n) {
          a.default.login(s).then(function (e) {
            i.default.setItem("sdk_login_time", Date.parse(new Date()) / 1e3), a.default.setStorageUserInfo(e), t(r.default.loginUserInfo());
          }).catch(function (e) {
            n();
          });
        });
      } }]), e;
  }();t.default = new n();
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var o = "https://www.tanwan.com/api/xyx",
      a = "https://pay.tanwan.com";t.default = { LOGIN: o + "/authorized.php", STATUS: o + "/loginStatus.php", ERROR_REPORT: o + "/errorLog.php", SHARE_CONFIG: o + "/shareConfig.php", AD_NOTIFY: o + "/adNotify.php", BIND_PHONE: o + "/bindPhone.php", REPORT_DATA: "https://msdk.tanwan.com/iosLog.php", PAY: a + "/api/notify/midas.php", PAY_CALL: "https://payapi.tanwan.com/api/notify/midas.php", PAY_XCX: a + "/api/wxxcx/Api.php", SUBSCRIBE: o + "/subscribe.php", MSG_CHECK: o + "/msgCheck.php" };
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { errorDist: { "-1": "\u7cfb\u7edf\u5931\u8d25", "-2": "\u652f\u4ed8\u53d6\u6d88", "-15001": "\u865a\u62df\u652f\u4ed8\u63a5\u53e3\u9519\u8bef\u7801\uff0c\u7f3a\u5c11\u53c2\u6570", "-15002": "\u865a\u62df\u652f\u4ed8\u63a5\u53e3\u9519\u8bef\u7801\uff0c\u53c2\u6570\u4e0d\u5408\u6cd5", "-15003": "\u865a\u62df\u652f\u4ed8\u63a5\u53e3\u9519\u8bef\u7801\uff0c\u8ba2\u5355\u91cd\u590d", "-15004": "\u865a\u62df\u652f\u4ed8\u63a5\u53e3\u9519\u8bef\u7801\uff0c\u540e\u53f0\u9519\u8bef", "-15005": "\u865a\u62df\u652f\u4ed8\u63a5\u53e3\u9519\u8bef\u7801\uff0cappId\u6743\u9650\u88ab\u5c01\u7981", "-15006": "\u865a\u62df\u652f\u4ed8\u63a5\u53e3\u9519\u8bef\u7801\uff0c\u8d27\u5e01\u7c7b\u578b\u4e0d\u652f\u6301", "-15007": "\u865a\u62df\u652f\u4ed8\u63a5\u53e3\u9519\u8bef\u7801\uff0c\u8ba2\u5355\u5df2\u652f\u4ed8", "-15009": "\u865a\u62df\u652f\u4ed8\u63a5\u53e3\u9519\u8bef\u7801\uff0c\u7531\u4e8e\u5065\u5eb7\u7cfb\u7edf\u9650\u5236\uff0c\u672c\u6b21\u652f\u4ed8\u5df2\u8d85\u8fc7\u9650\u989d\uff08\u8fd9\u79cd\u9519\u8bef\u60c5\u51b5\u4f1a\u6709\u9ed8\u8ba4\u5f39\u7a97\u63d0\u793a\uff09", 1: "\u7528\u6237\u53d6\u6d88\u652f\u4ed8", 2: "\u8bf7\u52ff\u5728\u652f\u4ed8\u672a\u5b8c\u6210\u3001\u518d\u6b21\u62c9\u8d77\u652f\u4ed8", 3: "\u4f7f\u7528GooglePlay\u652f\u4ed8\uff0c\u8bf7\u5b89\u88c5GooglePlay", 4: "\u7528\u6237\u64cd\u4f5c\u7cfb\u7edf\u652f\u4ed8\u72b6\u6001\u5f02\u5e38", 5: "\u64cd\u4f5c\u7cfb\u7edf\u9519\u8bef", 6: "\u5176\u4ed6\u9519\u8bef", 1e3: "\u652f\u4ed8\u53c2\u6570\u9519\u8bef", 1003: "\u7c73\u5927\u5e08Portal\u9519\u8bef" } };
}, function (a, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var o = function (t, n, o) {
    return n && e(t.prototype, n), o && e(t, o), t;
  },
      u = f(n(0)),
      c = f(n(2)),
      s = f(n(4)),
      i = f(n(7)),
      l = f(n(3)),
      d = f(n(1));function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }function f(e) {
    return e && e.__esModule ? e : { default: e };
  }n = function () {
    function e() {
      var t = this;if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");this.version = "1.0.0", this.payStatue = !1, this.paySwitch = !1;
    }return o(e, [{ key: "checkPlatPaySwitch", value: function (e, t) {
        e = e.pay_switch[t];if (1 == e.switch) {
          var t = Math.floor(new Date().getTime() / 1e3),
              n = s.default.getStorageUserInfo("reg_time");if (i.default.userPayTotal > e.pay_total && t - n >= 86400 * e.reg_day_limit) return !1;
        }return !0;
      } }, { key: "makePayment", value: function (a) {
        var r = this;return new Promise(function (n, o) {
          if (!0 === r.payStatue) return wx.showToast({ title: "\u8bf7\u52ff\u91cd\u590d\u70b9\u51fb\u5145\u503c", icon: "error", duration: 2e3 }), o();r.payStatue = !0, 6248 == d.default.getGameConfig().APPID && (a.game_fee = 100 * a.money), s.default.checkLoginStatus({ success: function () {
              i.default.getPayConfig().then(function (e) {
                var t = e.pay_switch.xcx_appid;r.checkPlatPaySwitch(e, i.default.checkEnv()) ? "ios" === i.default.checkEnv() ? r.getIosPaySwitch(a.role_level) ? (r.payStatue = !1, "undefined" !== t && -1 !== t && "-1" !== t ? i.default.xcxPay(t, a, e.pay_switch.env) : i.default.customerNewPay(a).then(function () {
                  n();
                }).catch(function (e) {
                  o(e);
                })) : (r.payStatue = !1, wx.showModal({ title: "\u53d1\u8d77\u652f\u4ed8\u5931\u8d25", content: "\u7531\u4e8e\u653f\u7b56\u5f71\u54cd\uff0c\u652f\u4ed8\u529f\u80fd\u6682\u4e0d\u53ef\u7528", showCancel: !1 }), o({ msg: "\u7531\u4e8e\u653f\u7b56\u5f71\u54cd\uff0c\u652f\u4ed8\u529f\u80fd\u6682\u4e0d\u53ef\u7528" })) : (r.payStatue = !1, s.default.checkSession().then(function () {
                  i.default.makeOrder(a).then(function (e) {
                    i.default.wxPay().then(function (e) {
                      r.payStatue = !1, n({ info: e, msg: "wechat pay success" });
                    }).catch(function (e) {
                      o(e);
                    });
                  }).catch(function (e) {
                    o(e);
                  });
                }).catch(function (e) {
                  o(e);
                })) : (r.payStatue = !1, wx.showModal({ content: "\u8bf7\u70b9\u51fb\u201c\u8d85\u7ea7vip\u201d\u8fdb\u5165QQ\u516c\u4f17\u53f7\uff0c\u83b7\u53d6\u60a8\u7684\u670d\u52a1", confirmColor: "#FF0033", showCancel: !1, success: function () {
                    o(i.default.checkEnv() + "\u5df2\u7ecf\u5173\u95ed\u5145\u503c");
                  }, fail: function () {
                    o("\u5fae\u4fe1\u7a0b\u5e8f\u5f02\u5e38");
                  } }));
              }).catch(function (e) {
                r.payStatue = !1, wx.showModal({ title: "\u63d0\u793a", content: e, showCancel: !0 }), o(e);
              });
            }, fail: function (e) {
              wx.showModal({ title: "\u63d0\u793a", content: e, showCancel: !0 }), o(e);
            } });
        });
      } }, { key: "loginUserInfo", value: function () {
        var e = s.default.getUserInfo();e.appid = d.default.getGameConfig().APPID;var t = wx.getLaunchOptionsSync().query;return e.share_ext = t || "", e;
      } }, { key: "getPayConfig", value: function () {
        i.default.getPayConfig().then(function (e) {}).catch(function (e) {});
      } }, { key: "getUserPayLimit", value: function () {
        i.default.getPayUserTotal().then(function (e) {}).catch(function (e) {});
      } }, { key: "dataReport", value: function (i) {
        return new Promise(function (o, a) {
          ["data_type", "server_id", "server_name", "role_id", "role_name", "role_level", "role_currency"].forEach(function (e) {
            if (void 0 === i[e]) return a("invalid " + e);
          });var r = d.default.getGameConfig();l.default.getSystemInfo().then(function (e) {
            var t = { appid: r.APPID, dataType: i.data_type, serverID: i.server_id, serverName: i.server_name, userid: s.default.getStorageUserInfo("uid"), roleID: i.role_id, roleName: i.role_name, roleLevel: i.role_level, moneyNum: i.role_currency },
                n = { action: "UserInfo", flag: "flag", agent_id: r.AGENT_ID, site_id: r.SITE_ID, mtype: 1, systemversion: e.system, mnos: "wifi" === e.networkType ? 4 : 0, model: e.model, imei: "none" };"ios" === e.platform && (t.appid = r.APPID_IOS), r.ad_notify_data.weixinadinfo.wx_agent_id && r.ad_notify_data.weixinadinfo.wx_site_id ? (n.agent_id = r.ad_notify_data.weixinadinfo.wx_agent_id, n.site_id = r.ad_notify_data.weixinadinfo.wx_site_id) : (e = u.default.getItem("adQuery")).agent_id && e.site_id && (n.agent_id = e.agent_id, n.site_id = e.site_id);e = Object.assign(t, n);c.default.report(e).then(function () {
              o({ msg: "success" });
            }).catch(function (e) {
              a({ info: e, msg: "\u6570\u636e\u4e0a\u62a5\u5931\u8d25" });
            });
          }).catch(function (e) {
            a({ info: e, msg: "\u83b7\u53d6\u7cfb\u7edf\u4fe1\u606f\u5931\u8d25" });
          });
        });
      } }, { key: "connectCustomer", value: function (e, t) {
        wx.openCustomerServiceConversation({ fail: function (e) {
            t(e);
          }, complete: function () {
            e();
          } });
      } }, { key: "bindPhoneSendCode", value: function (n) {
        return new Promise(function (e, t) {
          s.default.sendPhoneCode(n).then(function () {
            wx.showToast({ title: "\u53d1\u9001\u6210\u529f", icon: "success", duration: 2e3 }), e();
          }).catch(function (e) {
            wx.showToast({ title: e.msg, icon: "error", duration: 2e3 }), t(e);
          });
        });
      } }, { key: "bindPhone", value: function (e, o) {
        return new Promise(function (t, n) {
          s.default.bindPhone(e, o).then(function () {
            wx.showToast({ title: "\u7ed1\u5b9a\u6210\u529f", icon: "success", duration: 2e3 }), s.default.destroyStorageUserInfo(), s.default.login().then(function (e) {
              s.default.setStorageUserInfo(e), t();
            }).catch(function (e) {
              s.default.checkLoginStatus({ success: function () {
                  t();
                }, fail: function () {
                  t();
                } });
            });
          }).catch(function (e) {
            wx.showToast({ title: e.msg, icon: "error", duration: 2e3 }), n(e);
          });
        });
      } }, { key: "getIosPaySwitch", value: function (t) {
        var e = u.default.getItem("payConfig"),
            n = this;return e && "undefined" !== e ? (e = e.pay_switch).hasOwnProperty("ios") && 1 === e.ios.switch && t >= e.ios.role_level && (n.paySwitch = !0) : this.getPayConfig().then(function (e) {
          e = e.pay_switch;e.hasOwnProperty("ios") && 1 === e.ios.switch && t >= e.ios.role_level && (n.paySwitch = !0);
        }).catch(function (e) {
          n.paySwitch = !1;
        }), n.paySwitch;
      } }, { key: "msgCheck", value: function (e) {
        return new Promise(function (t, n) {
          s.default.serviceCheckMsg(e).then(function (e) {
            1 === e.status ? t({ code: 1, msg: "success" }) : n({ code: e.ret, msg: e.msg });
          }).catch(function (e) {
            n({ code: -1, msg: "\u68c0\u6d4b\u5931\u8d25\u3001\u9700\u6e38\u620f\u5185\u505a\u68c0\u6d4b" });
          });
        });
      } }]), e;
  }();t.default = new n();
}, function (s, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 });var o = function (t, n, o) {
    return n && e(t.prototype, n), o && e(t, o), t;
  },
      a = c(n(0)),
      r = c(n(2)),
      i = c(n(8)),
      u = c(n(3));function e(e, t) {
    for (var n = 0; n < t.length; n++) {
      var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }function c(e) {
    return e && e.__esModule ? e : { default: e };
  }n = function () {
    function e() {
      var t = this;if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");this.shareConfig = {};
    }return o(e, [{ key: "checkShareConfig", value: function () {
        var o = this;return new Promise(function (n, e) {
          var t = a.default.getItem("shareConfig");if (!1 !== t) return o.shareConfig = t, n();r.default.api("SHARE_CONFIG", { do: "getShareConfig" }).then(function (t) {
            u.default.getSystemInfo("platform").then(function (e) {
              return t.query = "ios" === e ? i.default.IOS_SHARE_QUERY : i.default.SHARE_QUERY, a.default.setItem("shareConfig", t), o.shareConfig = t, n();
            });
          }).catch(function (e) {
            o.shareConfig = { title: "", imageUrl: "", query: i.default.SHARE_QUERY }, u.default.getSystemInfo("platform").then(function (e) {
              return "ios" === e && (o.shareConfig.query = i.default.IOS_SHARE_QUERY), n();
            });
          });
        });
      } }, { key: "getShareConfig", value: function () {
        var e = this;this.checkShareConfig().then(function () {
          return { title: e.shareConfig.title, imageUrl: e.shareConfig.image, query: i.default.SHARE_QUERY };
        });
      } }, { key: "showShareMenu", value: function () {
        wx.showShareMenu({ withShareTicket: !0, menus: ["shareAppMessage", "shareTimeline"] });
      } }, { key: "onShareAppMessage", value: function (o) {
        var a = this;return new Promise(function (t, n) {
          a.checkShareConfig().then(function () {
            o.hasOwnProperty("title") && o.title && (a.shareConfig.title = o.title), o.hasOwnProperty("imageUrl") && o.imageUrl && (a.shareConfig.imageUrl = o.image);var e = "";o.hasOwnProperty("ext") && o.ext && (e = o.ext), a.shareConfig.query += "&" + e, wx.onShareAppMessage(function () {
              return a.shareConfig;
            }), t();
          }).catch(function (e) {
            n();
          });
        });
      } }, { key: "makeShare", value: function (t) {
        var n = this;this.checkShareConfig().then(function () {
          t.hasOwnProperty("title") && t.title && (n.shareConfig.title = t.title), t.hasOwnProperty("imageUrl") && t.imageUrl && (n.shareConfig.imageUrl = t.image);var e = "";t.hasOwnProperty("ext") && t.ext && (e = t.ext), n.shareConfig.query += "&" + e, wx.shareAppMessage(n.shareConfig);
        });
      } }]), e;
  }();t.default = new n();
}]);export default gameSDK.default;