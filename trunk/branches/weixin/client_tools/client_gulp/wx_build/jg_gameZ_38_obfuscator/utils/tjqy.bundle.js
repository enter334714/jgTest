var c = wx.$a;
var gameSDK = function (e) {
  var t = {};function n(o) {
    if (t[o]) return t[o].exports;var a = t[o] = { i: o, l: !1, exports: {} };return e[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
  }return n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var o = Object.create(null);if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var a in e) n.d(o, a, function (t) {
      return e[t];
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
}([function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }();var a = function (e) {
    return "tw_ys_" + e + "_@";
  },
      r = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e);
    }return o(e, [{ key: "getItem", value: function (e) {
        var t = wx.getStorageSync(a(e));return !!t && function (e) {
          e = unescape(e);for (var t = String.fromCharCode(e.charCodeAt(0) - e.length), n = 1; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) - t.charCodeAt(n - 1));return t = JSON.parse(t);
        }(t);
      } }, { key: "setItem", value: function (e, t) {
        wx.setStorageSync(a(e), function (e) {
          e = JSON.stringify(e);for (var t = String.fromCharCode(e.charCodeAt(0) + e.length), n = 1; n < e.length; n++) t += String.fromCharCode(e.charCodeAt(n) + e.charCodeAt(n - 1));return escape(t);
        }(t));
      } }, { key: "destroyItem", value: function (e) {
        wx.removeStorageSync(a(e));try {
          wx.removeStorageSync(a(e));
        } catch (e) {}
      } }]), e;
  }();t.default = new r();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }();var a = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.gameConfig = {};
    }return o(e, [{ key: "setGameConfig", value: function (e) {
        this.gameConfig = e;
      } }, { key: "getGameConfig", value: function () {
        return this.gameConfig;
      } }]), e;
  }();t.default = new a();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      a = u(n(10)),
      r = u(n(0)),
      i = u(n(1));function u(e) {
    return e && e.__esModule ? e : { default: e };
  }var c = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e);
    }return o(e, [{ key: "api", value: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "post",
            o = this;return new Promise(function (u, c) {
          var s = e in a.default && a.default[e];!1 === s && c("type error");var f = i.default.getGameConfig();t.appid = f.APPID;var d = r.default.getItem("adQuery");t.agent_id = !1 !== d ? d.agent_id : f.AGENT_ID, t.site_id = !1 !== d ? d.site_id : f.SITE_ID, t.launchScene = r.default.getItem("launchScene"), t.queryData = f.query, o.http(s, t, n).then(function (e) {
            u(e);
          }).catch(function (e) {
            c(e);
          });
        });
      } }, { key: "http", value: function (e, t, n) {
        return new Promise(function (o, a) {
          wx.request({ url: e, header: { "Content-Type": "application/x-www-form-urlencoded" }, method: n, data: t, success: function (e) {
              200 === e.statusCode ? t.do && "getShareConfig" === t.do ? o(e.data) : "1" === e.data.status || 1 === e.data.status || 1 === e.data.code || "1" === e.data.code ? o(e.data.data ? e.data.data : e.data) : a(e.data.msg) : a("network error code: " + e.statusCode);
            }, fail: function (e) {
              a(e.errMsg);
            } });
        });
      } }, { key: "report", value: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "post";return new Promise(function (n, o) {
          var r = i.default.getGameConfig();e.agent_id = r.AGENT_ID, e.site_id = r.SITE_ID, e.queryData = r.query, wx.request({ url: a.default.REPORT_DATA, header: { "Content-Type": "application/x-www-form-urlencoded" }, method: t, data: e, success: function (e) {
              200 === e.statusCode ? 1 === e.data.ret || 1 === e.data.ret ? n(e.data.data) : o(e.data.msg) : o("network error " + e.statusCode);
            }, fail: function (e) {
              o(e.errMsg);
            } });
        });
      } }, { key: "errorReport", value: function (e, t) {
        var n = this;return new Promise(function (o, r) {
          var u = { appid: i.default.getGameConfig().APPID, errorType: e, content: JSON.stringify(t) };n.http(a.default.ERROR_REPORT, u, "post").then(function (e) {
            o(e);
          }).catch(function (e) {
            r(e);
          });
        });
      } }]), e;
  }();t.default = new c();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }();var a = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.systemInfo = {};
    }return o(e, [{ key: "getSystemInfo", value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = this;return new Promise(function (n, o) {
          t.checkSystemInfo().then(function (o) {
            e && e in t.systemInfo ? n(t.systemInfo[e]) : n(t.systemInfo);
          }).catch(function (e) {
            o(e);
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
        var e = this;return new Promise(function (t, n) {
          wx.getNetworkType({ success: function (n) {
              delete n.errMsg, e.systemInfo = Object.assign(n, e.systemInfo), t();
            }, fail: function (e) {
              n(e.errMsg);
            } });
        });
      } }, { key: "getSystem", value: function () {
        var e = this;return new Promise(function (t, n) {
          wx.getSystemInfo({ success: function (n) {
              console.log("system info : ", n), delete n.errMsg, e.systemInfo = Object.assign(n, e.systemInfo), t();
            }, fail: function (e) {
              n(e.errMsg);
            } });
        });
      } }, { key: "getUserSetting", value: function () {
        return new Promise(function (e, t) {
          wx.getSetting({ withSubscriptions: !0, success: function (t) {
              e(t);
            }, fail: function (e) {
              t({ code: -4, msg: e.errMsg });
            } });
        });
      } }, { key: "openSubscribeSetting", value: function (e) {
        return new Promise(function (t, n) {
          wx.showModal({ title: "提示", content: "检测到您未开启订阅消息通知权限，是否去设置？", cancelColor: "#808080", confirmColor: "#FF0000", success: function (o) {
              o.confirm ? wx.openSetting({ withSubscriptions: !0, success: function (n) {
                  n.subscriptionsSetting.mainSwitch && null != n.subscriptionsSetting.itemSettings && "reject" === n.subscriptionsSetting.itemSettings[e] && t();
                }, fail: function (e) {
                  n("settingFail");
                } }) : n("rejectOpen");
            }, fail: function (e) {
              n(e.errMsg);
            } });
        });
      } }]), e;
  }();t.default = new a();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      a = s(n(0)),
      r = s(n(2)),
      i = s(n(3)),
      u = s(n(5)),
      c = s(n(1));s(n(7));function s(e) {
    return e && e.__esModule ? e : { default: e };
  }var f = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.loginUserInfo = {}, this.subscribeStatus = !1;
    }return o(e, [{ key: "login", value: function (e) {
        var t = this;return new Promise(function (n, o) {
          var a = t;wx.login({ success: function (t) {
              var r = { code: t.code, avatar: "", nickName: "", adData: e };a.serverLogin(r).then(function (e) {
                n(e);
              }).catch(function (e) {
                o(e);
              });
            }, fail: function (e) {
              o(e.errMsg);
            } });
        });
      } }, { key: "serverLogin", value: function (e) {
        return new Promise(function (t, n) {
          var o = { code: e.code, avatar: e.avatarUrl, nickName: e.nickName },
              a = c.default.getGameConfig();e.adData.gdt_vid && e.adData.weixinadinfo && (o.site_id = e.adData.wx_site_id, o.agent_id = e.adData.wx_agent_id, o.weixinadinfo = e.adData.weixinadinfo, o.plat_put = e.adData.plat_put ? e.adData.plat_put : "source", o.put_appid = a.put_appid), i.default.getSystemInfo().then(function (e) {
            "ios" === e.platform && (o.site_id = a.IOS_SITE_ID), o.brand = e.brand, o.model = e.model, o.pf = e.platform, o.system = e.system, o.ad_click_id = a.ad_notify_data.gdt_vid, o.weixinadinfo = a.ad_notify_data.weixinadinfo, o.scene = a.ad_notify_data.scene, o.referrerInfo = JSON.stringify(a.ad_notify_data.referrerInfo), r.default.api("LOGIN", o).then(function (e) {
              u.default.debugLog("LOGIN : ", e), t(e);
            }).catch(function (e) {
              n(e);
            });
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "getUserInfo", value: function () {
        return { uid: this.getStorageUserInfo("uid"), access_token: this.getStorageUserInfo("access_token"), user_name: this.getStorageUserInfo("username"), is_bind_phone: this.getStorageUserInfo("is_bind_phone"), mobile: this.getStorageUserInfo("mobile"), templateList: this.getStorageUserInfo("templateKey") };
      } }, { key: "checkLoginStatus", value: function (e) {
        var t = this,
            n = t.getStorageUserInfo();0 === Object.keys(n).length ? (console.log("本地无登录态，执行登录"), t.login(e.adData).then(function (n) {
          a.default.setItem("sdk_login_time", Date.parse(new Date()) / 1e3), t.setStorageUserInfo(n), e.success();
        }).catch(function (t) {
          e.fail(t);
        })) : t.checkServerLoginStatus().then(function () {
          return Promise.resolve(e.success());
        }).catch(function (n) {
          t.destroyStorageUserInfo(), t.login(e.adData).then(function (n) {
            a.default.setItem("sdk_login_time", Date.parse(new Date()) / 1e3), t.setStorageUserInfo(n), e.success();
          }).catch(function (t) {
            e.fail(t);
          });
        });
      } }, { key: "checkServerLoginStatus", value: function () {
        var e = this;return new Promise(function (t, n) {
          var o = { appid: c.default.getGameConfig().APPID, accessToken: e.getStorageUserInfo("access_token"), uid: e.getStorageUserInfo("uid") };r.default.api("STATUS", o).then(function (e) {
            t();
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "getStorageUserInfo", value: function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";if (0 === Object.keys(this.loginUserInfo).length && (this.loginUserInfo = a.default.getItem("loginUserInfo"), !1 === this.loginUserInfo)) return {};var t = this.loginUserInfo;return e && (t = e in this.loginUserInfo ? this.loginUserInfo[e] : ""), t;
      } }, { key: "setStorageUserInfo", value: function (e) {
        this.loginUserInfo = e, a.default.setItem("loginUserInfo", e);
      } }, { key: "destroyStorageUserInfo", value: function () {
        this.loginUserInfo = {}, a.default.destroyItem("loginUserInfo");
      } }, { key: "sendPhoneCode", value: function (e) {
        var t = this;return new Promise(function (n, o) {
          var a = { appid: c.default.getGameConfig().APPID, mobile: e, user_name: t.getStorageUserInfo("username"), uid: t.getStorageUserInfo("uid"), type: "sendCode", accessToken: t.getStorageUserInfo("access_token") };r.default.api("BIND_PHONE", a).then(function (e) {
            n({ code: 1, msg: "success" });
          }).catch(function (e) {
            r.default.errorReport("bindPhone", { msg: "发生手机验证码失败", data: a, res: e }), o({ code: -1, msg: e });
          });
        });
      } }, { key: "reportAdInfo", value: function (e, t) {
        if (e.gdt_vid && e.weixinadinfo) {
          var n = "";t && (n = this.getStorageUserInfo("username"), 0 === Object.keys(n).length && (n = ""));var o = c.default.getGameConfig();i.default.getSystemInfo().then(function (t) {
            var a = { platform: t.platform, model: t.model, os: t.system, do: "adNotify", time: Date.parse(new Date()) / 1e3, gdt_vid: e.gdt_vid, weixinadinfo: e.weixinadinfo, username: n, scene: e.scene, referrerInfo: JSON.stringify(e.referrerInfo), wx_site_id: e.wx_site_id, wx_agent_id: e.wx_agent_id, appid: o.APPID, ios_appid: o.APPID_IOS, accessToken: e.accessToken, plat_put: e.plat_put, put_appid: o.put_appid };r.default.api("AD_NOTIFY", a).then(function (e) {}).catch(function (e) {});
          });
        }
      } }, { key: "reportTouTAdInfo", value: function (e, t) {
        if (e.length > 0) {
          var n = "";t && (n = this.getStorageUserInfo("username"), 0 === Object.keys(n).length && (n = "")), i.default.getSystemInfo().then(function (e) {
            var t = { platform: e.platform, model: e.model, os: e.system, do: "adNotify", time: Date.parse(new Date()) / 1e3, username: n, toutiao: 1 };r.default.api("AD_NOTIFY", t).then(function (e) {}).catch(function (e) {});
          });
        }
      } }, { key: "bindPhone", value: function (e, t) {
        var n = this;return new Promise(function (o, a) {
          var i = { appid: c.default.getGameConfig().APPID, mobile: e, user_name: n.getStorageUserInfo("username"), uid: n.getStorageUserInfo("uid"), type: "bindPhone", code: t, accessToken: n.getStorageUserInfo("access_token") };r.default.api("BIND_PHONE", i).then(function (e) {
            o({ code: 1, msg: "success" });
          }).catch(function (e) {
            r.default.errorReport("bindPhone", { msg: "绑定手机失败", data: i, res: e }), a({ code: -1, msg: e });
          });
        });
      } }, { key: "checkSession", value: function () {
        var e = this;return new Promise(function (t, n) {
          wx.checkSession({ success: function () {
              var o = parseInt(a.default.getItem("sdk_login_time"));parseInt(Date.parse(new Date())) / 1e3 - o > 900 ? (e.destroyStorageUserInfo(), e.login({}).then(function (n) {
                a.default.setItem("sdk_login_time", Date.parse(new Date()) / 1e3), e.setStorageUserInfo(n), t();
              }).catch(function (e) {
                n("pay resolve login");
              })) : t();
            }, fail: function () {
              e.destroyStorageUserInfo(), e.login({}).then(function (n) {
                a.default.setItem("sdk_login_time", Date.parse(new Date()) / 1e3), e.setStorageUserInfo(n), t();
              }).catch(function (e) {
                n(e);
              });
            } });
        });
      } }, { key: "subscribe", value: function (e) {
        var t = this;return new Promise(function (n, o) {
          var a = t.getStorageUserInfo("templateKey");if (0 === Object.keys(a).length) return o({ code: -3, msg: "Template Type Not Found" });var r = t.getStorageUserInfo("templateList")[e];if (!r) return o({ code: -3, msg: "Template Not Found" });i.default.getUserSetting().then(function (e) {
            if (console.log("settingData : ", e), e.subscriptionsSetting.mainSwitch) {
              if (null != e.subscriptionsSetting.itemSettings) {
                var a = e.subscriptionsSetting.itemSettings[r];"accept" === a && t.onSubscribe(r).then(function () {
                  n({ code: 0, msg: "success" });
                }).catch(function () {
                  n({ code: 0, msg: "success" });
                }), "reject" === a && i.default.openSubscribeSetting().then(function (e) {
                  n({ code: 1, msg: "closeNotify" });
                }).catch(function (e) {
                  o({ code: -1, msg: e });
                }), "ban" === a && n({ code: 2, msg: "close notify" });
              } else t.preSubscribe(r).then(function () {
                n({ code: 0, msg: "success" });
              }).catch(function (e) {
                o(e);
              });
            } else t.preSubscribe(r).then(function () {
              n({ code: 0, msg: "success" });
            }).catch(function (e) {
              o(e);
            });
          }).catch(function (e) {
            o(e);
          });
        });
      } }, { key: "serviceCheckMsg", value: function (e) {
        var t = this;return new Promise(function (n, o) {
          var a = { appid: c.default.getGameConfig().appid, content: e, accessToken: t.getStorageUserInfo("access_token") };r.default.api("MSG_CHECK", a).then(function (e) {
            n(e);
          }).catch(function (e) {
            o(e);
          });
        });
      } }, { key: "tipsSubscribe", value: function (e) {
        var t = this;return new Promise(function (n, o) {
          wx.showModal({ title: "提示", content: "拒接接收将无法收到游戏正常通知，是否重新接收？", cancelText: "不了", cancelColor: "#808080", confirmColor: "#FF0000", success: function (a) {
              a.confirm ? wx.requestSubscribeMessage({ tmplIds: [e], success: function (a) {
                  "accept" == a[e] ? t.onSubscribe(e).then(function () {
                    n();
                  }).catch(function () {
                    n();
                  }) : o("rejectSubscribe");
                }, fail: function (e) {
                  o(e.errMsg);
                } }) : o("rejectAccept");
            }, fail: function (e) {
              o(e.errMsg);
            } });
        });
      } }, { key: "preSubscribe", value: function (e) {
        var t = this;return new Promise(function (n, o) {
          wx.showModal({ title: "提示", content: "是否开通服务通知?", showCancel: !0, cancelColor: "#808080", confirmColor: "#FF0000", success: function (a) {
              a.confirm ? wx.requestSubscribeMessage({ tmplIds: [e], success: function (a) {
                  "reject" == a[e] ? t.tipsSubscribe(e).then(function (e) {
                    n({ code: 0, msg: "success" });
                  }).catch(function (e) {
                    o({ code: -2, msg: e });
                  }) : "accept" == a[e] && t.onSubscribe(e).then(function () {
                    n({ code: 0, msg: "success" });
                  }).catch(function () {
                    n({ code: 0, msg: "success" });
                  });
                }, fail: function (a) {
                  20004 == a.errCode ? t.tipsSubscribe(e).then(function (e) {
                    n({ code: 0, msg: "success" });
                  }).catch(function (e) {
                    o({ code: -2, msg: e });
                  }) : o({ code: -3, msg: a.errMsg });
                } }) : o({ code: -3, msg: "rejectOpen" });
            } });
        });
      } }, { key: "onSubscribe", value: function (e) {
        var t = this;return new Promise(function (n, o) {
          i.default.getSystemInfo().then(function (a) {
            var i = { accessToken: t.getStorageUserInfo("access_token"), uid: t.getStorageUserInfo("uid"), user_name: t.getStorageUserInfo("username"), pf: a.platform, templateId: e };r.default.api("SUBSCRIBE", i).then(function (e) {
              n();
            }).catch(function (e) {
              o(e);
            });
          });
        });
      } }]), e;
  }();t.default = new f();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o,
      a = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      r = n(6),
      i = (o = r) && o.__esModule ? o : { default: o };var u = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e);
    }return a(e, [{ key: "debugLog", value: function (e, t) {
        i.default.DEBUG && console.log("[Xinxin]", e, t);
      } }, { key: "errorLog", value: function (e) {} }]), e;
  }();t.default = new u();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });t.default = { DEBUG: !0, SDK_VERSION: "101", DEVICE_NO: "wegame_imei" };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      a = d(n(2)),
      r = d(n(0)),
      i = d(n(4)),
      u = d(n(3)),
      c = d(n(5)),
      s = d(n(11)),
      f = d(n(1));function d(e) {
    return e && e.__esModule ? e : { default: e };
  }var l = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.env = "", this.getEnv(), this.orderId = {}, this.orderData = {}, this.userPayTotal = 0;
    }return o(e, [{ key: "getPayConfig", value: function () {
        return new Promise(function (e, t) {
          var n = f.default.getGameConfig();u.default.getSystemInfo("platform").then(function (o) {
            var u = { do: "getPayConfig", appid: n.APPID, accessToken: i.default.getStorageUserInfo("access_token"), uid: i.default.getStorageUserInfo("uid"), zone_id: -1, pf: o };a.default.api("PAY", u).then(function (t) {
              r.default.setItem("payConfig", t), e(t);
            }).catch(function (e) {
              c.default.debugLog("applePayConfig err: ", e), t({ msg: e });
            });
          });
        });
      } }, { key: "getPayUserTotal", value: function () {
        var e = this,
            t = this;return new Promise(function (n, o) {
          var u = f.default.getGameConfig(),
              c = { do: "getUserPayTotal", user_name: i.default.getStorageUserInfo("username"), iosAppid: u.APPID_IOS, agent_id: u.AGENT_ID, site_id: u.SITE_ID, pf: e.checkEnv() },
              s = r.default.getItem("adQuery");s.agent_id && s.site_id && (c.agent_id = s.agent_id, c.site_id = s.site_id), a.default.api("PAY_XCX", c).then(function (e) {
            t.userPayTotal = e.payTotal, n(e);
          }).catch(function (e) {});
        });
      } }, { key: "makeOrder", value: function (e) {
        var t = this;return new Promise(function (n, o) {
          var r = f.default.getGameConfig(),
              u = { do: "makeOrder", appid: r.APPID, accessToken: i.default.getStorageUserInfo("access_token"), uid: i.default.getStorageUserInfo("uid"), user_name: i.default.getStorageUserInfo("username"), role_id: e.role_id, role_name: e.role_name, zone_id: e.server_id, pf: t.checkEnv() ? "android" : "ios", amt: e.money, ext: e.ext, ad_click_id: r.ad_notify_data.gdt_vid, weixinadinfo: r.ad_notify_data.weixinadinfo, scene: r.ad_notify_data.scene, referrerInfo: JSON.stringify(r.ad_notify_data.referrerInfo) };a.default.api("PAY", u).then(function (o) {
            t.orderId = o.orderId, t.orderData = e, n(o.orderId);
          }).catch(function (t) {
            a.default.errorReport("pay", { msg: "米大师创建订单失败", error: t, orderInfo: { accessToken: i.default.getStorageUserInfo("access_token"), uid: i.default.getStorageUserInfo("uid"), user_name: i.default.getStorageUserInfo("username"), role_id: e.role_id, role_name: e.role_name, zone_id: e.server_id, amt: e.money, ext: e.ext } }), o(t);
          });
        });
      } }, { key: "wxPay", value: function () {
        var e = this,
            t = 1,
            n = { code: 201, wxPay: t, msg: "", miMsg: "" };return new Promise(function (o, i) {
          var u = r.default.getItem("payConfig"),
              c = "android" === e.checkEnv() ? "android" : "windows";wx.requestMidasPayment({ mode: "game", env: "dev" === u.env ? 1 : 0, offerId: u.offer_id, currencyType: "CNY", platform: c, buyQuantity: e.orderData.money / u.rate, zoneId: u.zoneId ? u.zoneId : 1, success: function (r) {
              t = 2, e.confirmPay().then(function () {
                n.code = 200, n.msg = "success";
              }).catch(function (t) {
                n.code = 300, n.msg = "error", n.miMsg = s.default.errorDist[r.errCode] ? s.default.errorDist[r.errCode] : "支付异常", a.default.errorReport("pay_callback", { msg: "支付--发货 : " + t, data: n, error: JSON.stringify({ res: r }), orderInfo: e.orderData }).then(function () {}).catch(function (e) {});
              }), o(n);
            }, fail: function (e) {
              t = 3;
            }, complete: function (t) {
              n.miMsg = s.default.errorDist[t.errCode] ? s.default.errorDist[t.errCode] : "支付异常", a.default.errorReport("complete-pay", { msg: s.default.errorDist[t.errCode] ? s.default.errorDist[t.errCode] : "支付异常", data: n, error: JSON.stringify({ res: t }), orderInfo: e.orderData }).then(function () {}).catch(function (e) {});
            } });
        });
      } }, { key: "confirmPay", value: function () {
        var e = this;return new Promise(function (t, n) {
          e.payCallback().then(function (e) {
            wx.showToast({ title: "道具发送成功", icon: "success", duration: 2e3 });
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "payCallback", value: function () {
        var e = this;return new Promise(function (t, n) {
          var o = { do: "callback", appid: f.default.getGameConfig().APPID, accessToken: i.default.getStorageUserInfo("access_token"), uid: i.default.getStorageUserInfo("uid"), user_name: i.default.getStorageUserInfo("user_name"), role_id: e.orderData.role_id, role_name: e.orderData.role_name, role_level: e.orderData.role_level, zone_id: 1, pf: e.checkEnv(), amt: e.orderData.money, ext: e.orderData.ext, orderId: e.orderId };a.default.api("PAY_CALL", o).then(function (e) {
            t(e);
          }).catch(function (e) {
            n(e);
          });
        });
      } }, { key: "getEnv", value: function () {
        var e = this;u.default.getSystemInfo("platform").then(function (t) {
          e.env = t;
        });
      } }, { key: "checkEnv", value: function () {
        var e = this.env;return "devtools" == e && (e = "windows"), e;
      } }, { key: "customerNewPay", value: function (e) {
        var t = this;return new Promise(function (n, o) {
          wx.showModal({ title: "提示", content: "即将跳转至官方【客服会话】请点击右下角小窗口获取充值链接", showCancel: !0, success: function (a) {
              if (a.confirm) {
                var r = f.default.getGameConfig();t.makeXcxOrder(e.money, e).then(function (o) {
                  var a = { type: "orderInfo", user_name: i.default.getStorageUserInfo("username"), appid: r.APPID, payAppid: r.APPID_IOS, uid: i.default.getStorageUserInfo("uid"), orderId: o };a.ad_click_id = r.ad_notify_data.gdt_vid, a.weixinadinfo = r.ad_notify_data.weixinadinfo, a.gameName = r.GAME_NAME + "-官方正版", a.desc = "充值" + e.money + "元", wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: r.GAME_NAME + "-官方正版.充值" + e.money + "元", sessionFrom: JSON.stringify(a), sendMessageImg: "https://image.693975.com/wegame/pay.png", sendMessagePath: "index?" + JSON.stringify(a), success: function (e) {
                      console.log("customer res: ", e), t.getPayUserTotal().then();
                    }, fail: function (e) {
                      console.log("customer err: ", e);
                    } }), n();
                }).catch(function (e) {
                  o(e);
                });
              } else o("取消支付");
            }, fail: function (e) {
              o("取消支付");
            } });
        });
      } }, { key: "xcxPay", value: function (e, t, n) {
        this.makeXcxOrder(t.money, t).then(function (o) {
          return wx.navigateToMiniProgram({ appId: e, path: "pages/pay/pay?amt=" + t.money + "&orderId=" + o + "&desc=" + t.product_desc, extraData: { foo: "bar" }, envVersion: 1 === n ? "release" : "trial", success: function (e) {} }), Promise.resolve();
        }).catch(function (e) {
          return wx.showModal({ title: "提示", content: e.msg, showCancel: !1 }), c.default.debugLog("Tanwan--创建订单失败（Orders Error）---\x3e", e), Promise.reject(e);
        });
      } }, { key: "makeXcxOrder", value: function (e, t) {
        var n = this;return new Promise(function (o, u) {
          var s = f.default.getGameConfig(),
              d = { do: "createPreOrder", gold_num: t.game_fee, money: e, iosAppid: s.APPID_IOS, role_id: t.role_id, role_name: t.role_name, server_id: t.server_id, server_name: t.server_name, user_name: i.default.getStorageUserInfo("username"), ext: t.ext, mtype: 1, product_id: t.product_id, product_name: t.product_name, agent_id: s.AGENT_ID, site_id: s.SITE_ID, pf: n.checkEnv(), ad_click_id: s.ad_notify_data.gdt_vid, weixinadinfo: s.ad_notify_data.weixinadinfo, scene: s.ad_notify_data.scene, referrerInfo: JSON.stringify(s.ad_notify_data.referrerInfo) },
              l = r.default.getItem("adQuery");l.agent_id && l.site_id && (d.agent_id = l.agent_id, d.site_id = l.site_id), a.default.api("PAY_XCX", d).then(function (e) {
            o(e.orderId);
          }).catch(function (e) {
            c.default.debugLog("Tanwan--创建小程序订单失败（API Error）---\x3e", e), a.default.errorReport("pay", { msg: "创建客服订单失败", res: e, payParams: t }), u("调用客服下单失败");
          });
        });
      } }]), e;
  }();t.default = new l();
}, function (e, t, n) {
  "use strict";

  e.exports = { APPID: 6440, APPID_IOS: 6442, SHARE_QUERY: "agent_id=118574&site_id=9721227", AGENT_ID: 118574, SITE_ID: 9720910, IOS_SITE_ID: 9720950, IOS_SHARE_QUERY: "agent_id=118574&site_id=9721227", GAME_NAME: "天剑奇缘", wxAdInfo: {}, put_appid: 6440, ad_notify_data: { gdt_vid: "", weixinadinfo: "", scene: "", referrerInfo: "" }, query: "" };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      a = d(n(4)),
      r = d(n(12)),
      i = d(n(0)),
      u = d(n(6)),
      c = d(n(13)),
      s = d(n(1)),
      f = d(n(8));function d(e) {
    return e && e.__esModule ? e : { default: e };
  }var l = { gdt_vid: !1, weixinadinfo: !1, scene: !1, referrerInfo: !1, site_id: !1, agent_id: !1 },
      g = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.version = "1.0.0", this.subscrStatus = !1;
    }return o(e, [{ key: "init", value: function (e, t) {
        var n, o;n = wx.getLaunchOptionsSync(), o = n.query, i.default.destroyItem("adQuery"), i.default.destroyItem("launchScene"), o.agent_id && o.site_id && i.default.setItem("adQuery", { agent_id: o.agent_id, site_id: o.site_id }), i.default.setItem("launchScene", n.scene ? n.scene : 0), o.gdt_vid && o.weixinadinfo && (l.gdt_vid = o.gdt_vid, l.weixinadinfo = o.weixinadinfo, l.scene = n.scene, l.referrerInfo = n.referrerInfo, l.wx_agent_id = o.agent_id, l.wx_site_id = o.site_id, l.plat_put = o.plat_put, f.default.ad_notify_data.scene = n.scene, f.default.wxAdInfo = l, f.default.ad_notify_data.gdt_vid = l.gdt_vid, f.default.ad_notify_data.weixinadinfo = l.weixinadinfo, f.default.ad_notify_data.referrerInfo = l.referrerInfo), o.sdkInitWx = 1, console.log(o), f.default.query = JSON.stringify(o), s.default.setGameConfig(f.default), a.default.reportAdInfo(l, !1), a.default.reportTouTAdInfo(f.default.query, !1), c.default.checkShareConfig(), e();
      } }, { key: "sdkDebugLog", value: function () {
        u.default.DEBUG = !0;
      } }, { key: "setMenuShare", value: function (e) {
        c.default.onShareAppMessage(e).then(function () {
          return Promise.resolve();
        }).catch(function (e) {
          wx.onShareAppMessage(function () {
            return c.default.shareConfig;
          });
        });
      } }, { key: "shareAppMessage", value: function (e) {
        c.default.makeShare(e);
      } }, { key: "entryGame", value: function (e, t) {
        wx.showToast({ title: "正在登陆", icon: "loading" }), a.default.checkLoginStatus({ adData: l, success: function () {
            a.default.reportAdInfo(l, !0), a.default.reportTouTAdInfo(f.default.query, !0), r.default.getPayConfig(), r.default.getUserPayLimit(), c.default.showShareMenu(), c.default.onShareAppMessage({ title: "", imageUrl: "", ext: "" }).then(function (e) {}).catch(function (e) {}), e();
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
      } }, { key: "bindPhone", value: function (e, t) {
        return new Promise(function (n, o) {
          r.default.bindPhone(e, t).then(function (e) {
            n();
          }).catch(function (e) {
            o(e);
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
        wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: f.default.GAME_NAME, sessionFrom: "onlineService", sendMessagePath: "index?" + JSON.stringify({ type: "onlineService" }), success: function (e) {
            console.log("customer res: ", e);
          }, fail: function (e) {
            console.log("customer err: ", e);
          } });
      } }, { key: "checkToken", value: function () {
        return new Promise(function (e, t) {
          a.default.checkLoginStatus({ adData: l, success: function () {
              e(r.default.loginUserInfo());
            }, fail: function (e) {
              t(e);
            } });
        });
      } }, { key: "retSetUserInfo", value: function () {
        return a.default.destroyStorageUserInfo(), new Promise(function (e, t) {
          a.default.login(l).then(function (t) {
            i.default.setItem("sdk_login_time", Date.parse(new Date()) / 1e3), a.default.setStorageUserInfo(t), e(r.default.loginUserInfo());
          }).catch(function (e) {
            t();
          });
        });
      } }]), e;
  }();t.default = new g();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = "https://www.tanwan.com/api/xyx",
      a = "https://pay.tanwan.com",
      r = { LOGIN: o + "/authorized.php", STATUS: o + "/loginStatus.php", ERROR_REPORT: o + "/errorLog.php", SHARE_CONFIG: o + "/shareConfig.php", AD_NOTIFY: o + "/adNotify.php", BIND_PHONE: o + "/bindPhone.php", REPORT_DATA: "https://msdk.tanwan.com/iosLog.php", PAY: a + "/api/notify/midas.php", PAY_CALL: "https://payapi.tanwan.com/api/notify/midas.php", PAY_XCX: a + "/api/wxxcx/Api.php", SUBSCRIBE: o + "/subscribe.php", MSG_CHECK: o + "/msgCheck.php" };t.default = r;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });t.default = { errorDist: { "-1": "系统失败", "-2": "支付取消", "-15001": "虚拟支付接口错误码，缺少参数", "-15002": "虚拟支付接口错误码，参数不合法", "-15003": "虚拟支付接口错误码，订单重复", "-15004": "虚拟支付接口错误码，后台错误", "-15005": "虚拟支付接口错误码，appId权限被封禁", "-15006": "虚拟支付接口错误码，货币类型不支持", "-15007": "虚拟支付接口错误码，订单已支付", "-15009": "虚拟支付接口错误码，由于健康系统限制，本次支付已超过限额（这种错误情况会有默认弹窗提示）", 1: "用户取消支付", 2: "请勿在支付未完成、再次拉起支付", 3: "使用GooglePlay支付，请安装GooglePlay", 4: "用户操作系统支付状态异常", 5: "操作系统错误", 6: "其他错误", 1000: "支付参数错误", 1003: "米大师Portal错误" } };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      a = f(n(0)),
      r = f(n(2)),
      i = f(n(4)),
      u = f(n(7)),
      c = f(n(3)),
      s = f(n(1));function f(e) {
    return e && e.__esModule ? e : { default: e };
  }var d = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.version = "1.0.0", this.payStatue = !1, this.paySwitch = !1;
    }return o(e, [{ key: "checkPlatPaySwitch", value: function (e, t) {
        var n = e.pay_switch[t];if (1 == n.switch) {
          var o = Math.floor(new Date().getTime() / 1e3),
              a = i.default.getStorageUserInfo("reg_time");if (u.default.userPayTotal > n.pay_total && o - a >= 86400 * n.reg_day_limit) return !1;
        }return !0;
      } }, { key: "makePayment", value: function (e) {
        var t = this;return new Promise(function (n, o) {
          if (!0 === t.payStatue) return wx.showToast({ title: "请勿重复点击充值", icon: "error", duration: 2e3 }), o();t.payStatue = !0, 6248 == s.default.getGameConfig().APPID && (e.game_fee = 100 * e.money), i.default.checkLoginStatus({ success: function () {
              u.default.getPayConfig().then(function (a) {
                var r = a.pay_switch.xcx_appid;t.checkPlatPaySwitch(a, u.default.checkEnv()) ? "ios" === u.default.checkEnv() ? t.getIosPaySwitch(e.role_level) ? (t.payStatue = !1, "undefined" !== r && -1 !== r && "-1" !== r ? u.default.xcxPay(r, e, a.pay_switch.env) : u.default.customerNewPay(e).then(function () {
                  n();
                }).catch(function (e) {
                  o(e);
                })) : (t.payStatue = !1, wx.showModal({ title: "发起支付失败", content: "由于政策影响，支付功能暂不可用", showCancel: !1 }), o({ msg: "由于政策影响，支付功能暂不可用" })) : (t.payStatue = !1, i.default.checkSession().then(function () {
                  u.default.makeOrder(e).then(function (e) {
                    u.default.wxPay().then(function (e) {
                      t.payStatue = !1, n({ info: e, msg: "wechat pay success" });
                    }).catch(function (e) {
                      o(e);
                    });
                  }).catch(function (e) {
                    o(e);
                  });
                }).catch(function (e) {
                  o(e);
                })) : (t.payStatue = !1, wx.showModal({ content: "请点击“超级vip”进入QQ公众号，获取您的服务", confirmColor: "#FF0033", showCancel: !1, success: function () {
                    o(u.default.checkEnv() + "已经关闭充值");
                  }, fail: function () {
                    o("微信程序异常");
                  } }));
              }).catch(function (e) {
                t.payStatue = !1, wx.showModal({ title: "提示", content: e, showCancel: !0 }), o(e);
              });
            }, fail: function (e) {
              wx.showModal({ title: "提示", content: e, showCancel: !0 }), o(e);
            } });
        });
      } }, { key: "loginUserInfo", value: function () {
        var e = i.default.getUserInfo();e.appid = s.default.getGameConfig().APPID;var t = wx.getLaunchOptionsSync().query;return e.share_ext = t || "", e;
      } }, { key: "getPayConfig", value: function () {
        u.default.getPayConfig().then(function (e) {}).catch(function (e) {});
      } }, { key: "getUserPayLimit", value: function () {
        u.default.getPayUserTotal().then(function (e) {}).catch(function (e) {});
      } }, { key: "dataReport", value: function (e) {
        return new Promise(function (t, n) {
          ["data_type", "server_id", "server_name", "role_id", "role_name", "role_level", "role_currency"].forEach(function (t) {
            if (void 0 === e[t]) return n("invalid " + t);
          });var o = s.default.getGameConfig();c.default.getSystemInfo().then(function (u) {
            var c = { appid: o.APPID, dataType: e.data_type, serverID: e.server_id, serverName: e.server_name, userid: i.default.getStorageUserInfo("uid"), roleID: e.role_id, roleName: e.role_name, roleLevel: e.role_level, moneyNum: e.role_currency },
                s = { action: "UserInfo", flag: "flag", agent_id: o.AGENT_ID, site_id: o.SITE_ID, mtype: 1, systemversion: u.system, mnos: "wifi" === u.networkType ? 4 : 0, model: u.model, imei: "none" };if ("ios" === u.platform && (c.appid = o.APPID_IOS), o.ad_notify_data.weixinadinfo.wx_agent_id && o.ad_notify_data.weixinadinfo.wx_site_id) s.agent_id = o.ad_notify_data.weixinadinfo.wx_agent_id, s.site_id = o.ad_notify_data.weixinadinfo.wx_site_id;else {
              var f = a.default.getItem("adQuery");f.agent_id && f.site_id && (s.agent_id = f.agent_id, s.site_id = f.site_id);
            }var d = Object.assign(c, s);r.default.report(d).then(function () {
              t({ msg: "success" });
            }).catch(function (e) {
              n({ info: e, msg: "数据上报失败" });
            });
          }).catch(function (e) {
            n({ info: e, msg: "获取系统信息失败" });
          });
        });
      } }, { key: "connectCustomer", value: function (e, t) {
        wx.openCustomerServiceConversation({ fail: function (e) {
            t(e);
          }, complete: function () {
            e();
          } });
      } }, { key: "bindPhoneSendCode", value: function (e) {
        return new Promise(function (t, n) {
          i.default.sendPhoneCode(e).then(function () {
            wx.showToast({ title: "发送成功", icon: "success", duration: 2e3 }), t();
          }).catch(function (e) {
            wx.showToast({ title: e.msg, icon: "error", duration: 2e3 }), n(e);
          });
        });
      } }, { key: "bindPhone", value: function (e, t) {
        return new Promise(function (n, o) {
          i.default.bindPhone(e, t).then(function () {
            wx.showToast({ title: "绑定成功", icon: "success", duration: 2e3 }), i.default.destroyStorageUserInfo(), i.default.login().then(function (e) {
              i.default.setStorageUserInfo(e), n();
            }).catch(function (e) {
              i.default.checkLoginStatus({ success: function () {
                  n();
                }, fail: function () {
                  n();
                } });
            });
          }).catch(function (e) {
            wx.showToast({ title: e.msg, icon: "error", duration: 2e3 }), o(e);
          });
        });
      } }, { key: "getIosPaySwitch", value: function (e) {
        var t = "ios",
            n = a.default.getItem("payConfig"),
            o = this;if (n && "undefined" !== n) {
          var r = n.pay_switch;r.hasOwnProperty(t) && 1 === r.ios.switch && e >= r.ios.role_level && (o.paySwitch = !0);
        } else this.getPayConfig().then(function (n) {
          var a = n.pay_switch;a.hasOwnProperty(t) && 1 === a.ios.switch && e >= a.ios.role_level && (o.paySwitch = !0);
        }).catch(function (e) {
          o.paySwitch = !1;
        });return o.paySwitch;
      } }, { key: "msgCheck", value: function (e) {
        return new Promise(function (t, n) {
          i.default.serviceCheckMsg(e).then(function (e) {
            1 === e.status ? t({ code: 1, msg: "success" }) : n({ code: e.ret, msg: e.msg });
          }).catch(function (e) {
            n({ code: -1, msg: "检测失败、需游戏内做检测" });
          });
        });
      } }]), e;
  }();t.default = new d();
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var o = function () {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
      }
    }return function (t, n, o) {
      return n && e(t.prototype, n), o && e(t, o), t;
    };
  }(),
      a = c(n(0)),
      r = c(n(2)),
      i = c(n(8)),
      u = c(n(3));function c(e) {
    return e && e.__esModule ? e : { default: e };
  }var s = function () {
    function e() {
      !function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
      }(this, e), this.shareConfig = {};
    }return o(e, [{ key: "checkShareConfig", value: function () {
        var e = this;return new Promise(function (t, n) {
          var o = a.default.getItem("shareConfig");if (!1 !== o) return e.shareConfig = o, t();r.default.api("SHARE_CONFIG", { do: "getShareConfig" }).then(function (n) {
            u.default.getSystemInfo("platform").then(function (o) {
              return n.query = "ios" === o ? i.default.IOS_SHARE_QUERY : i.default.SHARE_QUERY, a.default.setItem("shareConfig", n), e.shareConfig = n, t();
            });
          }).catch(function (n) {
            e.shareConfig = { title: "", imageUrl: "", query: i.default.SHARE_QUERY }, u.default.getSystemInfo("platform").then(function (n) {
              return "ios" === n && (e.shareConfig.query = i.default.IOS_SHARE_QUERY), t();
            });
          });
        });
      } }, { key: "getShareConfig", value: function () {
        var e = this;this.checkShareConfig().then(function () {
          return { title: e.shareConfig.title, imageUrl: e.shareConfig.image, query: i.default.SHARE_QUERY };
        });
      } }, { key: "showShareMenu", value: function () {
        wx.showShareMenu({ withShareTicket: !0, menus: ["shareAppMessage", "shareTimeline"] });
      } }, { key: "onShareAppMessage", value: function (e) {
        var t = this;return new Promise(function (n, o) {
          t.checkShareConfig().then(function () {
            e.hasOwnProperty("title") && e.title && (t.shareConfig.title = e.title), e.hasOwnProperty("imageUrl") && e.imageUrl && (t.shareConfig.imageUrl = e.image);var o = "";e.hasOwnProperty("ext") && e.ext && (o = e.ext), t.shareConfig.query += "&" + o, wx.onShareAppMessage(function () {
              return t.shareConfig;
            }), n();
          }).catch(function (e) {
            o();
          });
        });
      } }, { key: "makeShare", value: function (e) {
        var t = this;this.checkShareConfig().then(function () {
          e.hasOwnProperty("title") && e.title && (t.shareConfig.title = e.title), e.hasOwnProperty("imageUrl") && e.imageUrl && (t.shareConfig.imageUrl = e.image);var n = "";e.hasOwnProperty("ext") && e.ext && (n = e.ext), t.shareConfig.query += "&" + n, wx.shareAppMessage(t.shareConfig);
        });
      } }]), e;
  }();t.default = new s();
}]);

export default gameSDK['default'];