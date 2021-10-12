module.exports = function (r) {
  var a = {};function n(e) {
    if (a[e]) return a[e].exports;var t = a[e] = { i: e, l: !1, exports: {} };return r[e].call(t.exports, t, t.exports, n), t.l = !0, t.exports;
  }return n.m = r, n.c = a, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;if (4 & e && "object" == typeof t && t && t.__esModule) return t;var r = Object.create(null);if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var a in t) n.d(r, a, function (e) {
      return t[e];
    }.bind(null, a));return r;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 2);
}([function (e, t, n) {
  "use strict";
  var r = { debug: !1, baseParams: { app_id: "", client_id: "", format: "json" }, gameParams: { "game-pkg_name": "", "game-app_ver": "", "game-h_ver": "", "game-sdk_ver": "", "game-mp_id": "" }, agentParams: { "agent-ch": "", "agent-sub_ch": "" }, deviceParams: { "device-device_id": "", "device-mac": "", "device-ip": "", "device-brand": "", "device-model": "", "device-os": "", "device-os_version": "", "device-screen": "", "device-net": "", "device-imsi": "", "device-longitude": "", "device-latitude": "", "device-userua": "", "device-disk_space": "", "device-open_time": "", "device-is_charge": "", "device-screen_luminance": "", "device-has_sim": "", "device-is_break": "" }, extParams: { brand: "", model: "", pixelRatio: "", screenWidth: "", screenHeight: "", windowWidth: "", windowHeight: "", statusBarHeight: "", language: "", version: "", system: "", platform: "", fontSizeSetting: "", SDKVersion: "", benchmarkLevel: "", albumAuthorized: "", cameraAuthorized: "", locationAuthorized: "", microphoneAuthorized: "", notificationAuthorized: "", notificationAlertAuthorized: "", notificationBadgeAuthorized: "", notificationSoundAuthorized: "", bluetoothEnabled: "", locationEnabled: "", wifiEnabled: "", safeArea: "" }, setting: { showLoading: !0, loadingParams: { title: "\u52a0\u8f7d\u4e2d", mask: !0 }, showToast: !1, toastParams: { icon: "none" } }, launchOptions: {}, baseUrl: "https://mp.milaila.top", channelId: 536 };try {
    r.gameParams["game-pkg_name"] = wx.canIUse ? "" : "game", wx.getSystemInfo({ success: function (e) {
        r.deviceParams["device-brand"] = encodeURIComponent(e.brand), r.deviceParams["device-model"] = encodeURIComponent(e.model), r.deviceParams["device-screen"] = encodeURIComponent(e.screenWidth + "x" + e.screenHeight), r.deviceParams["device-os"] = "devtools" === e.platform ? "android" : encodeURIComponent(e.platform), r.deviceParams["device-os_version"] = encodeURIComponent(e.system), r.extParams.brand = e.brand, r.extParams.model = e.model, r.extParams.pixelRatio = e.pixelRatio, r.extParams.windowWidth = e.windowWidth, r.extParams.windowHeight = e.windowHeight, r.extParams.statusBarHeight = e.statusBarHeight, r.extParams.language = e.language, r.extParams.version = e.version, r.extParams.system = e.system, r.extParams.platform = e.platform, r.extParams.fontSizeSetting = e.fontSizeSetting, r.extParams.SDKVersion = e.SDKVersion, r.extParams.benchmarkLevel = e.benchmarkLevel, r.extParams["albumAuthorized\t"] = e.albumAuthorized, r.extParams.cameraAuthorized = e.cameraAuthorized, r.extParams.locationAuthorized = e.locationAuthorized, r.extParams.microphoneAuthorized = e.microphoneAuthorized, r.extParams.notificationAuthorized = e.notificationAuthorized, r.extParams.notificationAlertAuthorized = e.notificationAlertAuthorized, r.extParams.notificationBadgeAuthorized = e.notificationBadgeAuthorized, r.extParams.notificationSoundAuthorized = e.notificationSoundAuthorized, r.extParams.bluetoothEnabled = e.bluetoothEnabled, r.extParams.locationEnabled = e.locationEnabled, r.extParams.wifiEnabled = e.wifiEnabled, r.extParams.safeArea = e.safeArea;
      } }), r.extParams.userua = window.navigator.userAgent, wx.getNetworkType({ success: function (e) {
        r.deviceParams["device-net"] = encodeURIComponent(e.networkType), r.extParams.net = e.networkType;
      } }), wx.getScreenBrightness({ success: function (e) {
        r.deviceParams["device-screen_luminance"] = encodeURIComponent(parseInt(100 * e.value)), r.extParams.screen_luminance = parseInt(100 * e.value);
      } });
  } catch (e) {}e.exports = r;
}, function (e, t, n) {
  "use strict";
  var o = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }return e;
  },
      d = i(n(0)),
      u = i(n(4));function i(e) {
    return e && e.__esModule ? e : { default: e };
  }var s = void 0,
      n = { ajax: function (r) {
      var a = this.setting(r.conf);return r.conf && delete r.conf, r = this.params(r), d.default.debug && console.log(new Date().getTime(), r.url, r.data), new Promise(function (t, n) {
        wx.request(o({}, r, { success: function (e) {
            d.default.debug && console.log(new Date().getTime(), r.url, e), a.showLoading && wx.hideLoading(), 200 !== e.statusCode || !e.data || void 0 !== e.data.code && 200 !== e.data.code ? (a.showToast && (e.data && e.data.msg && (a.toastParams.title = e.data.msg), wx.showToast(a.toastParams)), n(e)) : t(e);
          }, fail: function (e) {
            d.default.debug && console.log(new Date().getTime(), r.url, e), a.showLoading && wx.hideLoading(), a.showToast && (e.errMsg && (a.toastParams.title = e.errMsg), wx.showToast(a.toastParams)), n(e);
          } }));
      });
    }, params: function (e) {
      var t;return e.method = (e.method || "get").toUpperCase(), "POST" !== e.method || e.header || (e.header = { "Content-Type": "application/x-www-form-urlencoded" }), e.private || (t = wx.getStorageSync("userInfo"), e.data = o({}, d.default.baseParams, d.default.gameParams, d.default.agentParams, d.default.deviceParams, e.data, { "device-ext": encodeURIComponent(JSON.stringify(d.default.extParams)), token: t ? t.user_token : "", ts: new Date().getTime() })), e.data.sign = this.sign(e), /^http/.test(e.url) || (e.url = d.default.baseUrl + e.url), delete e.private, delete e.signUrl, e;
    }, setting: function () {
      return o({}, d.default.setting, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    }, sign: function (t) {
      var e = "";e = t.data.channel_id ? "&clientkey&MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDleNmoD8CwcsVduQnG7UAMqD2aYpwwwswmMLSKvwNZ6pQeC4ugwGaG3E8jfzRvMYzIUcCYkQ9uROuKiA3+LGZ9Zyvy3uIVycCcMwM88WgRMjospa2EoGVI4Ef8qcvbfPGC3vwdIKQRs4dnaG6yQsOcyVkgyRtDq4iQnnlG9Onw5QIDAQAB" : "&clientkey&MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHrJSESIbzCdsC0+zIwSn3ft9RGaau0izFCdXodH3i/sWgYcoF+wvbvAMB9336tpTYMSfbks4HfSyt8PDunChqyeCnnraj60DRrySOxAIbjjSAxVxI437R5qZt3mFbH1rgptLfi5RP3N6XIWDk8Ecw2XCdlqfDPiQhGCYleldsdQIDAQAB", t.app_key && (e = "app_key=" + t.app_key);var n = (t.signUrl || t.url).substr(1),
          r = Object.keys(t.data).sort(),
          a = "";r.forEach(function (e) {
        a += "&" + e + "=" + t.data[e];
      });return t.app_key ? (0, u.default)(a.substr(1) + "&" + e) : (0, u.default)((t.method + "&" + encodeURIComponent(n) + "&" + encodeURIComponent(a.substr(1)) + "&" + e).replace(/\(/g, "%28").replace(/\)/g, "%29"));
    }, renderQRCode: function (e, t, n) {
      var r = t.getContext("2d"),
          a = wx.createImage();a.src = n.image, a.onload = function () {
        r.lineJoin = "round", r.lineWidth = 30, r.strokeStyle = "#ffffff", r.strokeRect((window.innerWidth - 240) / 2, (window.innerHeight - 264) / 2, 240, 264), r.fillStyle = "#ffffff", r.fillRect((window.innerWidth - 220) / 2, (window.innerHeight - 244) / 2, 220, 244), r.fillStyle = "#1A83FF", r.font = "bold 14px PingFangSC-Medium", r.textAlign = "center", r.fillText(n.intro, window.innerWidth / 2, (window.innerHeight - 258) / 2 + 218 + 30, 250), r.drawImage(a, (window.innerWidth - 218) / 2, (window.innerHeight - 258) / 2, 218, 218);
      }, s = { canvas: e, qrcvs: t, qrctx: r, data: n }, e.addEventListener("touchstart", c);
    }, removeOffScreen: function () {
      s && (s.qrctx.clearRect(0, 0, s.qrcvs.width, s.qrcvs.height), s.canvas.removeEventListener("touchstart", c));
    } };function c(e) {
    e.preventDefault();var t = e.touches[0],
        e = t.clientX,
        t = t.clientY;e >= (window.innerWidth - 218) / 2 && e <= (window.innerWidth - 218) / 2 + 218 && t >= (window.innerHeight - 258) / 2 && t <= (window.innerHeight - 258) / 2 + 218 ? wx.previewImage({ urls: [s.data.image] }) : (s.qrctx.clearRect(0, 0, s.qrcvs.width, s.qrcvs.height), s.canvas.removeEventListener("touchstart", c));
  }e.exports = n;
}, function (e, t, n) {
  "use strict";
  var o = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }return e;
  },
      i = d(n(3)),
      g = d(n(0)),
      a = d(n(1));function d(e) {
    return e && e.__esModule ? e : { default: e };
  }function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
  }n = { init: function () {
      var m = this,
          h = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};return ["app_id", "mp_id", "showLoading", "loadingParams", "showToast", "toastParams", "debug"].map(function (e) {
        void 0 !== h[e] && ("app_id" === e ? g.default.baseParams[e] = h.app_id : "mp_id" === e ? g.default.gameParams["game-mp_id"] = h.mp_id : "debug" === e ? g.default.debug = h.debug : g.default.setting[e] = h[e]);
      }), new Promise(function (l, e) {
        h.app_id ? i.default.getDNSInfo({ data: o({ ts: parseInt(new Date().getTime() / 1e3), channel_id: g.default.channelId, url: g.default.baseUrl, un_url: "", app_id: g.default.baseParams.app_id }, g.default.deviceParams) }).then(function (e) {
          h.private || (g.default.baseUrl = e.data.url);var t = wx.getLaunchOptionsSync().query,
              n = t.q,
              e = void 0 === n ? "" : n,
              n = t.state,
              r = void 0 === n ? "" : n,
              n = t.scene,
              t = void 0 === n ? "" : n;if (e) {
            n = decodeURIComponent(e).split("?")[1];try {
              n = n && n.split("&");var a = !0,
                  o = !1,
                  i = void 0;try {
                for (var d, u = n[Symbol.iterator](); !(a = (d = u.next()).done); a = !0) {
                  var c = function (e, t) {
                    if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return function (e, t) {
                      var n = [],
                          r = !0,
                          a = !1,
                          o = void 0;try {
                        for (var i, d = e[Symbol.iterator](); !(r = (i = d.next()).done) && (n.push(i.value), !t || n.length !== t); r = !0);
                      } catch (e) {
                        a = !0, o = e;
                      } finally {
                        try {
                          !r && d.return && d.return();
                        } finally {
                          if (a) throw o;
                        }
                      }return n;
                    }(e, t);throw new TypeError("Invalid attempt to destructure non-iterable instance");
                  }(d.value.split("="), 2),
                      s = c[0],
                      f = c[1];"huo_state" === s && (r = f);
                }
              } catch (e) {
                o = !0, i = e;
              } finally {
                try {
                  !a && u.return && u.return();
                } finally {
                  if (o) throw i;
                }
              }
            } catch (e) {
              console.error(e);
            }g.default.launchOptions = { ext: e, state: r }, l(m.reversal());
          } else g.default.launchOptions = { state: t || r || "" }, l({ msg: "success" });
        }, function (e) {
          l({ msg: "success" });
        }) : e({ msg: "fail" });
      });
    }, reversal: function () {
      var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};return new Promise(function (n, r) {
        wx.login({ success: function (e) {
            var t;e.code ? (a.data = Object.assign({}, a.data, (c(t = {}, "device-ext", g.default.extParams), c(t, "ext", g.default.launchOptions.ext), c(t, "state", g.default.launchOptions.state), c(t, "code", e.code), t)), n(i.default.reversal(a))) : r(e);
          }, fail: function (e) {
            r(e);
          } });
      });
    }, cpUserCheck: function () {
      return i.default.cpUserCheck(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    }, login: function () {
      var r = this,
          a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};return new Promise(function (n, t) {
        wx.checkSession({ success: function (e) {
            i.default.wxLogin(o({}, a)).then(function (e) {
              var t = wx.getLaunchOptionsSync();i.default.reportAdClick({ data: { click_id: t.query && t.query.gdt_vid || "", url: "" } }).then(function (e) {
                console.log("\u6570\u636e\u4e0a\u62a5\u6210\u529f", e);
              }), n(r.getUserInfo(o({}, a)));
            }, function (e) {
              t({ msg: e.msg || "fail" });
            });
          }, fail: function (e) {
            console.log("ession_key ", a), i.default.wxLogin(a).then(function (e) {
              var t = wx.getLaunchOptionsSync();i.default.reportAdClick({ data: { click_id: t.query && t.query.gdt_vid || "", url: "" } }).then(function (e) {
                console.log("\u6570\u636e\u4e0a\u62a5\u6210\u529f", e);
              }), n(r.getUserInfo(a));
            }, function (e) {
              t({ msg: e.msg || "fail" });
            });
          } });
      });
    }, updateUserInfo: function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};return new Promise(function (t, n) {
        i.default.setUserInfo(e).then(function (e) {
          t(o({}, e, { msg: "success" }));
        }, function (e) {
          n({ msg: e.msg || "fail" });
        });
      });
    }, updateRole: function () {
      return i.default.upRoleInfo(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    }, getUserInfo: function () {
      return i.default.getUserInfo(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    }, getShareInfo: function () {
      return i.default.getShareInfo(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    }, addShareInfo: function () {
      return i.default.addShareInfo(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    }, getShareQrcode: function () {
      return i.default.getShareQrcode(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    }, preOrder: function (e) {
      return i.default.preOrder(e);
    }, mpPay: function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};return new Promise(function (t, n) {
        i.default.mpPay(e).then(function (e) {
          t({ msg: "success" });
        }, function (e) {
          n({ msg: e.errMsg || "fail" });
        });
      });
    }, mpPayQuery: function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};var t;return e.data && void 0 !== e.data["order-order_id"] || (t = wx.getStorageSync("orderInfo"), e.data = o({}, e.data, { "order-order_id": t ? t.order_id : "" })), i.default.mpPayQuery(e);
    }, midasPay: function () {
      var a = this,
          o = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};return new Promise(function (r, t) {
        i.default.midasPay(o).then(function (e) {
          o.conf = { showLoading: !1, showToast: !1 };var t = 0,
              n = setInterval(function () {
            t++, a.midasPayQuery(o).then(function (e) {
              2 !== e.data.status && 12 !== t || clearInterval(n);
            }, function (e) {});
          }, 15e3);r({ msg: "success" });
        }, function (e) {
          t({ msg: e.errMsg || "fail" });
        });
      });
    }, midasPayQuery: function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};var t;return e.data && void 0 !== e.data["order-order_id"] || (t = wx.getStorageSync("orderInfo"), e.data = o({}, e.data, { "order-order_id": t ? t.order_id : "" })), i.default.midasPayQuery(e);
    }, checkPay: function () {
      return i.default.checkPay(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    }, checkOrderInfo: function () {
      return i.default.checkOrderInfo(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    }, checkOrder: function () {
      return i.default.checkOrder(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    }, checkQrcode: function () {
      return i.default.checkQrcode(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    }, reportAdClick: function () {
      return i.default.reportAdClick(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    }, removeOffScreen: function () {
      i.default.removeOffScreen();
    }, checkMsg: function () {
      return i.default.checkMsg(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    }, gameMinicard: function () {
      return i.default.gameMinicard(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    }, userCheckpay: function () {
      return i.default.userCheckpay(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {});
    }, checkImg: function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          r = o({}, g.default.baseParams, g.default.gameParams, g.default.agentParams, g.default.deviceParams, { token: wx.getStorageSync("userInfo").user_token, ts: new Date().getTime() });return r.sign = a.default.sign({ url: "/mp/img/check", data: r }), new Promise(function (t, n) {
        wx.uploadFile({ url: g.default.baseUrl + "/mp/img/check", filePath: e.data.filePath, name: "image", formData: r, success: function (e) {
            e = e.data;200 === (e = JSON.parse(e)).code ? t({ msg: "success" }) : n({ msg: e.msg || "fail" });
          } });
      });
    } };e.exports = n;
}, function (e, t, n) {
  "use strict";
  var d = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }return e;
  },
      l = i(n(1)),
      r = i(n(0));function i(e) {
    return e && e.__esModule ? e : { default: e };
  }function Pb(e) {
    var r = e.data,
        a = e.conf;return new Promise(function (t, n) {
      l.default.ajax(e).then(function (e) {
        e.data && e.data.data ? t({ data: e.data.data, msg: "success" }) : t({ msg: "success" });
      }, function (e) {
        if (e.data && 1002 === e.data.code) {
          if (o) return !1;o = !0, t(u.wxLogin({ data: r, conf: a }).then(function (e) {
            return o = !1, u.getUserInfo({ data: r, conf: a });
          }));
        } else n({ msg: e.data ? e.data.msg || "\u7f51\u7edc\u5f02\u5e38\uff0c\u8bf7\u91cd\u8bd5" : e.errMsg });
      });
    });
  }var o = !1,
      u = { getDNSInfo: function (e) {
      return Pb(d({ method: "post", url: "https://hv.huosdk.com/dns", signUrl: "/dns", private: !0 }, e));
    }, cpUserCheck: function (e) {
      return Pb(d({ method: "post", url: "/cp/user/check", private: !0 }, e));
    }, login: function (e) {
      return r.default.launchOptions.ext ? e.data = Object.assign({}, e.data, d({ state: r.default.launchOptions.state }, e)) : e.data = Object.assign({}, e.data, d({}, e)), r.default.launchOptions && r.default.launchOptions.state && (e.data.state = r.default.launchOptions.state), Pb(d({ method: "post", url: "/mp/wx/login" }, e)).then(function (e) {
        return e && wx.setStorageSync("userInfo", e.data), e;
      });
    }, wxLogin: function (r) {
      var a = this;return new Promise(function (t, n) {
        wx.login({ success: function (e) {
            e.code ? (r = d({}, r.data, { code: e.code, state: r.data && r.data.state || "" }), t(a.login(r))) : n(e);
          }, fail: function (e) {
            n(e);
          } });
      });
    }, reversal: function (e) {
      return Pb(d({ method: "post", url: "/mp/reversal" }, e));
    }, setUserInfo: function (e) {
      return Pb(d({ method: "post", url: "/mp/wx/updateinfo" }, e)).then(function (e) {
        return wx.setStorageSync("userInfo", e.data), e;
      });
    }, upRoleInfo: function (e) {
      return e.conf = { showLoading: !1, showToast: !1 }, Pb(d({ method: "post", url: "/mp/user/uprole" }, e)).then(function (e) {
        return e;
      });
    }, getUserInfo: function (e) {
      return Pb(d({ method: "post", url: "/mp/wx/getuserinfo" }, e)).then(function (e) {
        if (e.data.report_status && 2 == e.data.report_status) try {
          require("../utils/ald-hhhhgame.js");
        } catch (e) {}return wx.setStorageSync("userInfo", e.data), e;
      });
    }, getShareInfo: function (e) {
      return Pb(d({ url: "/mp/share/detail" }, e));
    }, addShareInfo: function (e) {
      return Pb(d({ url: "/mp/share/add" }, e));
    }, getShareQrcode: function (e) {
      return Pb(d({ url: "/mp/share/qrcode" }, e));
    }, mpPay: function (t) {
      var n = this;return this.preOrder(t).then(function (e) {
        return t.data = d({}, t.data, { payway: "wxpay", "order-order_id": e.data.order_id }), n.mpOrder(t);
      });
    }, midasPay: function (t) {
      var n = this;return this.preOrder(t).then(function (e) {
        return n.wxMidasPay(e.data, t);
      });
    }, wxMidasPay: function (c, s) {
      var f = this;return new Promise(function (t, n) {
        var e = c.mode,
            r = c.env,
            a = c.offer_id,
            o = c.currency,
            i = c.buy_quantity,
            d = c.platform,
            u = c.zone_id;wx.requestMidasPayment({ mode: e, env: r, offerId: a, currencyType: o, buyQuantity: i, platform: d, zoneId: u, success: function (e) {
            s.data["order-order_id"] = c.order_id, s.conf = { showLoading: !1, showToast: !1 }, f.midasPayQuery(s).then(function (e) {
              var t, n;e.data && 2 !== e.data.status && (t = 0, n = setInterval(function () {
                t++, f.midasPayQuery(s).then(function (e) {
                  2 !== e.data.status && 8 !== t || clearInterval(n);
                }, function (e) {});
              }, 15e3));
            }, function (e) {}), e.errMsg && (e.msg = e.errMsg), t(e);
          }, fail: function (e) {
            e.errMsg && ("requestMidasPayment:fail iOS not supported" === e.errMsg ? (t = wx.getStorageSync("userInfo"), e.msg = t && t.ios_text || "\u5c0f\u6e38\u620f\u6682\u4e0d\u652f\u6301IOS\u652f\u4ed8\uff0c\u8bf7\u4f7f\u7528\u5b89\u5353\u767b\u5f55\u540e\u652f\u4ed8\u3002", e.duration = 3e3) : e.msg = e.errMsg);var t = l.default.setting(s.conf);t.showToast && (e.msg && (t.toastParams.title = e.msg), e.duration && (t.toastParams.duration = e.duration), wx.showToast(t.toastParams)), n(e);
          } });
      });
    }, checkPay: function (t) {
      var n = this;return this.preOrder(t).then(function (e) {
        return 2 === e.data.check ? n.wxMidasPay(e.data, t) : (t.data["order-order_id"] = e.data.order_id, n.checkPayInfo(t));
      });
    }, preOrder: function (e) {
      return Pb(d({ method: "post", url: "/mp/preorder" }, e)).then(function (e) {
        return wx.setStorageSync("orderInfo", e.data), e;
      }, function (e) {
        return e;
      });
    }, mpOrder: function (t) {
      var n = this;return Pb(d({ method: "post", url: "/mp/wx/pay" }, t)).then(function (e) {
        return n.wxMpPay(JSON.parse(e.data.token), t);
      });
    }, wxMpPay: function (e, r) {
      return new Promise(function (t, n) {
        wx.requestPayment(d({}, e, { success: function (e) {
            e.errMsg && (e.msg = e.errMsg), t(e);
          }, fail: function (e) {
            e.errMsg && (e.msg = e.errMsg);var t = l.default.setting(r.conf);t.showToast && (e.msg && (t.toastParams.title = e.msg), wx.showToast(t.toastParams)), n(e);
          }, complete: function (e) {
            "requestPayment:cancel" === e.errMsg && n({ msg: "requestPayment:fail cancel" });
          } }));
      });
    }, mpPayQuery: function (e) {
      return Pb(d({ method: "post", url: "/mp/order/query" }, e));
    }, midasPayQuery: function (e) {
      return Pb(d({ url: "/mp/mpay/query" }, e));
    }, checkPayInfo: function (a) {
      var o = this;return Pb(d({ url: "/mp/order/checkinfo" }, a)).then(function (r) {
        return r.data.order_id = a.data["order-order_id"], new Promise(function (t, e) {
          r.data.image && wx.setStorageSync("orderQRCode", r.data.image);var n = wx.getStorageSync("orderQRCode");r.data && 4 == +r.data.pay_type ? (wx.showModal({ title: "\u5145\u503c\u63d0\u793a", content: "\u56de\u590d\u201c2\u201d\uff0c\u70b9\u51fb\u94fe\u63a5\u652f\u4ed8", success: function (e) {
              e.confirm && wx.openCustomerServiceConversation();
            } }), t(r)) : r.data && r.data.mp_id ? (wx.navigateToMiniProgram({ appId: r.data.mp_id, path: r.data.path }), t(r)) : n ? (a.canvas && a.offscreen && l.default.renderQRCode(a.canvas, a.offscreen, { image: n, intro: r.data.intro || "\u70b9\u51fb\u4e8c\u7ef4\u7801\uff0c\u957f\u6309\u8bc6\u522b\u8fdb\u5165\u652f\u4ed8\u9875\u9762" }), r.data.image = n, t(r)) : o.checkQrcode(a).then(function (e) {
            e = e.data.poster_img;a.canvas && a.offscreen && l.default.renderQRCode(a.canvas, a.offscreen, { image: e, intro: r.data.intro || "\u70b9\u51fb\u4e8c\u7ef4\u7801\uff0c\u957f\u6309\u8bc6\u522b\u8fdb\u5165\u652f\u4ed8\u9875\u9762" }), wx.setStorageSync("orderQRCode", e), r.data.image = e, t(r);
          }, function (e) {
            t(r);
          });
        });
      });
    }, checkOrderInfo: function (e) {
      return Pb(d({ method: "post", url: "/mp/pay/info" }, e));
    }, checkOrder: function (t) {
      var n = this;return Pb(d({ method: "post", url: "/mp/check/pay" }, t)).then(function (e) {
        return n.wxMpPay(JSON.parse(e.data.token), t);
      });
    }, checkQrcode: function (e) {
      return e.data && (e.data.is_last = 2), Pb(d({ url: "/mp/order/qrcode" }, e));
    }, reportAdClick: function (e) {
      return Pb(d({ url: "/mp/ad/report" }, e));
    }, removeOffScreen: function () {
      l.default.removeOffScreen();
    }, checkMsg: function (e) {
      return Pb(d({ method: "post", url: "/mp/msg/check" }, e));
    }, gameMinicard: function (e) {
      return Pb(d({ method: "post", url: "/mp/game/minicard" }, e));
    }, userCheckpay: function (e) {
      return Pb(d({ method: "post", url: "/mp/user/checkpay" }, e));
    } };e.exports = u;
}, function (e, t, n) {
  "use strict";
  function o(e, t) {
    var n = (65535 & e) + (65535 & t);return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n;
  }function i(e, t, n, r, a, i) {
    return o((i = o(o(t, e), o(r, i))) << a | i >>> 32 - a, n);
  }function u(e, t, n, r, a, o, d) {
    return i(t & n | ~t & r, e, t, a, o, d);
  }function d(e, t, n, r, a, o, d) {
    return i(t & r | n & ~r, e, t, a, o, d);
  }function c(e, t, n, r, a, o, d) {
    return i(t ^ n ^ r, e, t, a, o, d);
  }function s(e, t, n, r, a, o, d) {
    return i(n ^ (t | ~r), e, t, a, o, d);
  }function f(e, t) {
    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;var n,
        r,
        a,
        i,
        f,
        l = 1732584193,
        m = -271733879,
        h = -1732584194,
        g = 271733878;for (n = 0; n < e.length; n += 16) m = s(m = s(m = s(m = s(m = c(m = c(m = c(m = c(m = d(m = d(m = d(m = d(m = u(m = u(m = u(m = u(a = m, h = u(i = h, g = u(f = g, l = u(r = l, m, h, g, e[n], 7, -680876936), m, h, e[n + 1], 12, -389564586), l, m, e[n + 2], 17, 606105819), g, l, e[n + 3], 22, -1044525330), h = u(h, g = u(g, l = u(l, m, h, g, e[n + 4], 7, -176418897), m, h, e[n + 5], 12, 1200080426), l, m, e[n + 6], 17, -1473231341), g, l, e[n + 7], 22, -45705983), h = u(h, g = u(g, l = u(l, m, h, g, e[n + 8], 7, 1770035416), m, h, e[n + 9], 12, -1958414417), l, m, e[n + 10], 17, -42063), g, l, e[n + 11], 22, -1990404162), h = u(h, g = u(g, l = u(l, m, h, g, e[n + 12], 7, 1804603682), m, h, e[n + 13], 12, -40341101), l, m, e[n + 14], 17, -1502002290), g, l, e[n + 15], 22, 1236535329), h = d(h, g = d(g, l = d(l, m, h, g, e[n + 1], 5, -165796510), m, h, e[n + 6], 9, -1069501632), l, m, e[n + 11], 14, 643717713), g, l, e[n], 20, -373897302), h = d(h, g = d(g, l = d(l, m, h, g, e[n + 5], 5, -701558691), m, h, e[n + 10], 9, 38016083), l, m, e[n + 15], 14, -660478335), g, l, e[n + 4], 20, -405537848), h = d(h, g = d(g, l = d(l, m, h, g, e[n + 9], 5, 568446438), m, h, e[n + 14], 9, -1019803690), l, m, e[n + 3], 14, -187363961), g, l, e[n + 8], 20, 1163531501), h = d(h, g = d(g, l = d(l, m, h, g, e[n + 13], 5, -1444681467), m, h, e[n + 2], 9, -51403784), l, m, e[n + 7], 14, 1735328473), g, l, e[n + 12], 20, -1926607734), h = c(h, g = c(g, l = c(l, m, h, g, e[n + 5], 4, -378558), m, h, e[n + 8], 11, -2022574463), l, m, e[n + 11], 16, 1839030562), g, l, e[n + 14], 23, -35309556), h = c(h, g = c(g, l = c(l, m, h, g, e[n + 1], 4, -1530992060), m, h, e[n + 4], 11, 1272893353), l, m, e[n + 7], 16, -155497632), g, l, e[n + 10], 23, -1094730640), h = c(h, g = c(g, l = c(l, m, h, g, e[n + 13], 4, 681279174), m, h, e[n], 11, -358537222), l, m, e[n + 3], 16, -722521979), g, l, e[n + 6], 23, 76029189), h = c(h, g = c(g, l = c(l, m, h, g, e[n + 9], 4, -640364487), m, h, e[n + 12], 11, -421815835), l, m, e[n + 15], 16, 530742520), g, l, e[n + 2], 23, -995338651), h = s(h, g = s(g, l = s(l, m, h, g, e[n], 6, -198630844), m, h, e[n + 7], 10, 1126891415), l, m, e[n + 14], 15, -1416354905), g, l, e[n + 5], 21, -57434055), h = s(h, g = s(g, l = s(l, m, h, g, e[n + 12], 6, 1700485571), m, h, e[n + 3], 10, -1894986606), l, m, e[n + 10], 15, -1051523), g, l, e[n + 1], 21, -2054922799), h = s(h, g = s(g, l = s(l, m, h, g, e[n + 8], 6, 1873313359), m, h, e[n + 15], 10, -30611744), l, m, e[n + 6], 15, -1560198380), g, l, e[n + 13], 21, 1309151649), h = s(h, g = s(g, l = s(l, m, h, g, e[n + 4], 6, -145523070), m, h, e[n + 11], 10, -1120210379), l, m, e[n + 2], 15, 718787259), g, l, e[n + 9], 21, -343485551), l = o(l, r), m = o(m, a), h = o(h, i), g = o(g, f);return [l, m, h, g];
  }function l(e) {
    var t,
        n = "",
        r = 32 * e.length;for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);return n;
  }function m(e) {
    var t,
        n = [];for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;var r = 8 * e.length;for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;return n;
  }function g(e) {
    var t,
        n,
        r = "";for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), r += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);return r;
  }function h(e) {
    return unescape(encodeURIComponent(e));
  }function p(e) {
    return l(f(m(e = h(e)), 8 * e.length));
  }function v(e, t) {
    return function (e, t) {
      var n,
          r = m(e),
          a = [],
          o = [];for (a[15] = o[15] = void 0, 16 < r.length && (r = f(r, 8 * e.length)), n = 0; n < 16; n += 1) a[n] = 909522486 ^ r[n], o[n] = 1549556828 ^ r[n];return t = f(a.concat(m(t)), 512 + 8 * t.length), l(f(o.concat(t), 640));
    }(h(e), h(t));
  }function w(e, t, n) {
    return t ? n ? v(t, e) : g(v(t, e)) : n ? p(e) : g(p(e));
  }void 0 === (t = function () {
    return w;
  }.call(t, n, t, e)) || (e.exports = t);
}]);