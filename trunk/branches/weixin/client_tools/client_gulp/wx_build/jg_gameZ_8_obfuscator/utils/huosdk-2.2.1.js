var G = wx.$G;
module.exports = function (e) {
  var t = {};function a(n) {
    if (t[n]) return t[n].exports;var o = t[n] = { i: n, l: !1, exports: {} };return e[n].call(o.exports, o, o.exports, a), o.l = !0, o.exports;
  }return a.m = e, a.c = t, a.d = function (e, t, n) {
    a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
  }, a.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, a.t = function (e, t) {
    if (1 & t && (e = a(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var n = Object.create(null);if (a.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var o in e) a.d(n, o, function (t) {
      return e[t];
    }.bind(null, o));return n;
  }, a.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return a.d(t, "a", t), t;
  }, a.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, a.p = "", a(a.s = 2);
}([function (e, t, a) {
  "use strict";

  var n = { debug: !1, sence: "", huoIntervalTask: { ish: "ish", game_heart: "game_heart" }, floatLoginInit: 0, showModalType: !1, showModalTime: null, showModalData: "", userInfo: "", templateShow: 1, mp_message: { subscribeShow: "", ts: "", clickcnt: "" }, baseParams: { app_id: "", client_id: "", format: "json" }, gameParams: { "game-pkg_name": "", "game-app_ver": "", "game-h_ver": "", "game-sdk_ver": "2.2.1", "game-mp_id": "" }, agentParams: { "agent-ch": "", "agent-sub_ch": "" }, deviceParams: { "device-device_id": "", "device-mac": "", "device-ip": "", "device-brand": "", "device-model": "", "device-os": "", "device-os_version": "", "device-screen": "", "device-net": "", "device-imsi": "", "device-longitude": "", "device-latitude": "", "device-userua": "", "device-disk_space": "", "device-open_time": "", "device-is_charge": "", "device-screen_luminance": "", "device-has_sim": "", "device-is_break": "", "device-scenario": "" }, extParams: { query: "" }, setting: { showLoading: !0, loadingParams: { title: "加载中", mask: !0 }, showToast: !1, toastParams: { icon: "none" } }, launchOptions: {}, baseUrl: "https://mp.1tsdk.com", staticUrl: "https://mpstatic.1tsdk.com", channelId: "2000051" };try {
    n.gameParams["game-pkg_name"] = wx.canIUse ? "" : "game", wx.getSystemInfo({ success: function (e) {
        n.deviceParams["device-brand"] = encodeURIComponent(e.brand || ""), n.deviceParams["device-model"] = encodeURIComponent(e.model), n.deviceParams["device-screen"] = encodeURIComponent(e.screenWidth + "x" + e.screenHeight), n.deviceParams["device-os"] = "devtools" === e.platform ? "android" : encodeURIComponent(e.platform), n.deviceParams["device-os_version"] = encodeURIComponent(e.system);
      } }), wx.getNetworkType({ success: function (e) {
        n.deviceParams["device-net"] = encodeURIComponent(e.networkType);
      } }), wx.getScreenBrightness({ success: function (e) {
        n.deviceParams["device-screen_luminance"] = encodeURIComponent(parseInt(100 * e.value));
      } });
  } catch (e) {}e.exports = n;
}, function (e, t, a) {
  "use strict";

  var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  },
      o = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }return e;
  },
      r = s(a(0)),
      i = s(a(4));function s(e) {
    return e && e.__esModule ? e : { default: e };
  }var d = void 0,
      c = { ajax: function (e) {
      var t = this.setting(e.conf);return e.conf && delete e.conf, e = this.params(e), r.default.debug && console.log(new Date().getTime(), e.url, e.data), new Promise(function (a, n) {
        wx.request(o({}, e, { success: function (o) {
            r.default.debug && console.log(new Date().getTime(), e.url, o), 200 !== o.statusCode || !o.data || void 0 !== o.data.code && 200 !== o.data.code ? (t.showToast && (o.data && o.data.msg && (t.toastParams.title = o.data.msg), wx.showToast(t.toastParams)), n(o)) : a(o);
          }, fail: function (a) {
            r.default.debug && console.log(new Date().getTime(), e.url, a), t.showToast && (a.errMsg && (t.toastParams.title = a.errMsg), wx.showToast(t.toastParams)), n(a);
          } }));
      });
    }, params: function (e) {
      if (e.method = (e.method || "get").toUpperCase(), "POST" !== e.method || e.header || (e.header = { "Content-Type": "application/x-www-form-urlencoded" }), !e.private) {
        var t = wx.getStorageSync("huo_userInfo");r.default.deviceParams["device-scenario"] = this.getScene(), e.data = o({}, r.default.baseParams, r.default.gameParams, r.default.agentParams, r.default.deviceParams, r.default.extParams, e.data, { "device-ext": encodeURIComponent(JSON.stringify(r.default.extParams)), token: t ? t.user_token : "", ts: new Date().getTime() });
      }return e.data.sign = this.sign(e), /^http/.test(e.url) || (e.url = r.default.baseUrl + e.url), delete e.private, delete e.signUrl, e;
    }, setting: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return o({}, r.default.setting, e);
    }, sign: function (e) {
      var t = "";t = e.data.channel_id ? "&clientkey&MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDleNmoD8CwcsVduQnG7UAMqD2aYpwwwswmMLSKvwNZ6pQeC4ugwGaG3E8jfzRvMYzIUcCYkQ9uROuKiA3+LGZ9Zyvy3uIVycCcMwM88WgRMjospa2EoGVI4Ef8qcvbfPGC3vwdIKQRs4dnaG6yQsOcyVkgyRtDq4iQnnlG9Onw5QIDAQAB" : "&clientkey&MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDHrJSESIbzCdsC0+zIwSn3ft9RGaau0izFCdXodH3i/sWgYcoF+wvbvAMB9336tpTYMSfbks4HfSyt8PDunChqyeCnnraj60DRrySOxAIbjjSAxVxI437R5qZt3mFbH1rgptLfi5RP3N6XIWDk8Ecw2XCdlqfDPiQhGCYleldsdQIDAQAB", e.app_key && (t = "app_key=" + e.app_key);var a = (e.signUrl || e.url).substr(1),
          n = Object.keys(e.data).sort(),
          o = "";n.forEach(function (t) {
        o += "&" + t + "=" + e.data[t];
      });var r = "";return r = e.app_key ? (0, i.default)(o.substr(1) + "&" + t) : (0, i.default)((e.method + "&" + encodeURIComponent(a) + "&" + encodeURIComponent(o.substr(1)) + "&" + t).replace(/\(/g, "%28").replace(/\)/g, "%29")), r;
    }, renderQRCode: function (e, t, a) {
      var n = t.getContext("2d"),
          o = wx.createImage();o.src = a.image, o.onload = function () {
        n.lineJoin = "round", n.lineWidth = 30, n.strokeStyle = "#ffffff", n.strokeRect((GameGlobal.innerWidth - 240) / 2, (GameGlobal.innerHeight - 264) / 2, 240, 264), n.fillStyle = "#ffffff", n.fillRect((GameGlobal.innerWidth - 220) / 2, (GameGlobal.innerHeight - 244) / 2, 220, 244), n.fillStyle = "#1A83FF", n.font = "bold 14px PingFangSC-Medium", n.textAlign = "center", n.fillText(a.intro, GameGlobal.innerWidth / 2, (GameGlobal.innerHeight - 258) / 2 + 218 + 30, 250), n.drawImage(o, (GameGlobal.innerWidth - 218) / 2, (GameGlobal.innerHeight - 258) / 2, 218, 218);
      }, d = { canvas: e, qrcvs: t, qrctx: n, data: a }, e.addEventListener("touchstart", u);
    }, removeOffScreen: function () {
      d && (d.qrctx.clearRect(0, 0, d.qrcvs.width, d.qrcvs.height), d.canvas.removeEventListener("touchstart", u));
    }, filterObj: function (e, t) {
      if ("object" !== (void 0 === e ? "undefined" : n(e)) || !Array.isArray(t)) throw new Error("参数格式不正确");var a = {};return Object.keys(e).filter(function (e) {
        return t.includes(e);
      }).forEach(function (t) {
        a[t] = e[t];
      }), a;
    }, huoInterval: function (e, t, a, n, o) {
      var r = a,
          i = "huo_" + o + "_delay",
          s = "huo_" + o + "_interval_id",
          d = wx.getStorageSync(i) || 0,
          c = wx.getStorageSync(s) || 0;if (!r) return "";switch (0 === parseInt(n) && (a = 1), a) {case 1:
          return r = 1, c && clearInterval(c), "";case 2:
          if (r = 2, parseInt(d) === parseInt(n) && c) return c;r = 3;break;case 3:
          r = 3;break;default:
          return "";}var u = 1;3 === r && (c && clearInterval(c), e(t, u)), wx.setStorageSync(i, n), c = setInterval(function () {
        u++, e(t, u);
      }, 1e3 * n), wx.setStorageSync(s, c);
    }, getScene: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          t = wx.getStorageSync("huo_first_scene"),
          a = 0;try {
        if (wx.getEnterOptionsSync) {
          var n = wx.getEnterOptionsSync();a = n.scene || 0;
        }if (!a) {
          var o = wx.getLaunchOptionsSync();(a = o.scene || 0) || wx.onShow(function (e) {
            e.scene && (a = e.scene);
          });
        }t || (t = a, wx.setStorageSync("huo_first_scene", t));
      } catch (e) {}return e ? t : a;
    } };function u(e) {
    e.preventDefault();var t = e.touches[0],
        a = t.clientX,
        n = t.clientY;a >= (GameGlobal.innerWidth - 218) / 2 && a <= (GameGlobal.innerWidth - 218) / 2 + 218 && n >= (GameGlobal.innerHeight - 258) / 2 && n <= (GameGlobal.innerHeight - 258) / 2 + 218 ? wx.previewImage({ urls: [d.data.image] }) : (d.qrctx.clearRect(0, 0, d.qrcvs.width, d.qrcvs.height), d.canvas.removeEventListener("touchstart", u));
  }e.exports = c;
}, function (e, t, a) {
  "use strict";

  var n = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }return e;
  },
      o = function (e, t) {
    if (Array.isArray(e)) return e;if (Symbol.iterator in Object(e)) return function (e, t) {
      var a = [],
          n = !0,
          o = !1,
          r = void 0;try {
        for (var i, s = e[Symbol.iterator](); !(n = (i = s.next()).done) && (a.push(i.value), !t || a.length !== t); n = !0);
      } catch (e) {
        o = !0, r = e;
      } finally {
        try {
          !n && s.return && s.return();
        } finally {
          if (o) throw r;
        }
      }return a;
    }(e, t);throw new TypeError("Invalid attempt to destructure non-iterable instance");
  },
      r = d(a(3)),
      i = d(a(0)),
      s = d(a(1));function d(e) {
    return e && e.__esModule ? e : { default: e };
  }function c(e, t, a) {
    return t in e ? Object.defineProperty(e, t, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = a, e;
  }var u = { init: function () {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          a = ["app_id", "mp_id", "showLoading", "loadingParams", "showToast", "toastParams", "debug"];return a.map(function (e) {
        void 0 !== t[e] && ("app_id" === e ? i.default.baseParams[e] = t.app_id : "mp_id" === e ? i.default.gameParams["game-mp_id"] = t.mp_id : "debug" === e ? i.default.debug = t.debug : i.default.setting[e] = t[e]);
      }), new Promise(function (a, n) {
        if (t.app_id) {
          var r = wx.getLaunchOptionsSync().query,
              s = r.q,
              d = void 0 === s ? "" : s,
              c = r.state,
              u = void 0 === c ? "" : c,
              l = r.scene,
              g = void 0 === l ? "" : l;if (d) {
            var h = decodeURIComponent(d).split("?")[1];try {
              h = h && h.split("&");var m = !0,
                  f = !1,
                  p = void 0;try {
                for (var v, w = h[Symbol.iterator](); !(m = (v = w.next()).done); m = !0) {
                  var b = v.value.split("="),
                      y = o(b, 2),
                      _ = y[0],
                      I = y[1];"huo_state" === _ && (u = I);
                }
              } catch (e) {
                f = !0, p = e;
              } finally {
                try {
                  !m && w.return && w.return();
                } finally {
                  if (f) throw p;
                }
              }
            } catch (e) {
              console.error(e);
            }i.default.launchOptions = { ext: d, state: u }, a(e.reversal());
          } else i.default.launchOptions = { state: g || u || "" }, a({ code: 200, msg: "success" });
        } else n({ code: 400, msg: "failinit" });
      });
    }, reversal: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return new Promise(function (t, a) {
        wx.login({ success: function (n) {
            var o;n.code ? (e.data = Object.assign({}, e.data, (c(o = {}, "device-ext", i.default.extParams), c(o, "ext", i.default.launchOptions.ext), c(o, "state", i.default.launchOptions.state), c(o, "code", n.code), o)), t(r.default.reversal(e))) : a(n);
          }, fail: function (e) {
            a(e);
          } });
      });
    }, cpUserCheck: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.cpUserCheck(e);
    }, login: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return new Promise(function (t, a) {
        r.default.wxLogin(n({}, e)).then(function (e) {
          var a = wx.getLaunchOptionsSync();a.query && a.query.gdt_vid && r.default.reportAdClick({ data: { click_id: a.query && a.query.gdt_vid || "", url: "" } });var n = s.default.filterObj(e.data.userinfo, ["mem_id", "mg_mem_id", "cp_user_token", "avatar", "username", "gender", "city", "province", "country"]);t({ data: n, customer_service: e.data.customer_service, code: 200, msg: "success" });
        }, function (e) {
          a({ code: 400, msg: e.msg || "faillogin" });
        });
      });
    }, updateUserInfo: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return new Promise(function (t, a) {
        r.default.setUserInfo(e).then(function (e) {
          t(n({}, e, { code: 200, msg: "success" }));
        }, function (e) {
          a({ code: 400, msg: e.msg || "failupdateUserInfo" });
        });
      });
    }, checkPay: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.checkPay(e);
    }, mpPayQuery: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};if (!e.data || void 0 === e.data["order-order_id"]) {
        var t = wx.getStorageSync("huo_orderInfo");e.data = n({}, e.data, { "order-order_id": t ? t.order_id : "" });
      }return r.default.mpPayQuery(e);
    }, getShareInfo: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.getShareInfo(e);
    }, addShareInfo: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.addShareInfo(e);
    }, updateRole: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.upRoleInfo(e);
    }, checkMsg: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.checkMsg(e);
    }, checkImg: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.checkImg(e);
    }, userCheckpay: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.userCheckpay(e);
    }, subscribe: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.mpApi(e);
    }, sendCode: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.sendCode(e);
    }, bindPhone: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.bindPhone(e);
    }, getShareQrcode: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.getShareQrcode(e);
    }, getUserInfo: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.getUserInfo(e);
    }, preOrder: function (e) {
      return r.default.preOrder(e);
    }, mpPay: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return new Promise(function (t, a) {
        r.default.mpPay(e).then(function (e) {
          t({ code: 200, msg: "success" });
        }, function (e) {
          a({ msg: e.errMsg || "fail" });
        });
      });
    }, midasPay: function () {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return new Promise(function (a, n) {
        r.default.midasPay(t).then(function (n) {
          t.conf = { showLoading: !1, showToast: !1 };var o = 0,
              r = setInterval(function () {
            o++, e.midasPayQuery(t).then(function (e) {
              2 !== e.data.status && 12 !== o || clearInterval(r);
            }, function (e) {});
          }, 15e3);a({ code: 200, msg: "success" });
        }, function (e) {
          n({ msg: e.errMsg || "fail" });
        });
      });
    }, midasPayQuery: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};if (!e.data || void 0 === e.data["order-order_id"]) {
        var t = wx.getStorageSync("huo_orderInfo");e.data = n({}, e.data, { "order-order_id": t ? t.order_id : "" });
      }return r.default.midasPayQuery(e);
    }, checkOrderInfo: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.checkOrderInfo(e);
    }, checkOrder: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.checkOrder(e);
    }, checkQrcode: function () {
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0];return new Promise(function (e, t) {
        e({ code: "200", msg: "success", data: [] });
      });
    }, reportAdClick: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.reportAdClick(e);
    }, removeOffScreen: function () {
      r.default.removeOffScreen();
    }, gameMinicard: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.gameMinicard(e);
    }, gameHeartbeat: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.gameHeartbeat(e);
    }, gameInit: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};e["game-app_ver"] && (i.default.gameParams["game-app_ver"] = e["game-app_ver"]), e.app_id && (i.default.baseParams.app_id = e.app_id);var t = Object.assign(e, { scene_id: s.default.getScene(!0) });return r.default.gameInit({ data: t });
    }, memberFreeze: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};return r.default.memberFreeze(e);
    }, mpPayErrReport: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";return r.default.mpPayErrReport(e, t);
    } };e.exports = u;
}, function (e, t, a) {
  "use strict";

  var n = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n]);
    }return e;
  },
      o = i(a(1)),
      r = i(a(0));function i(e) {
    return e && e.__esModule ? e : { default: e };
  }a(5), a(6);var s = !1,
      d = 1,
      c = "",
      u = "",
      l = !1,
      g = function (e) {
    var t = e.data,
        a = e.conf;return new Promise(function (n, r) {
      o.default.ajax(e).then(function (e) {
        e.data && e.data.data ? n({ code: 200, data: e.data.data, msg: e.data.msg }) : n({ code: e.data.code, msg: "success", data: {} });
      }, function (e) {
        if (e.data && 1002 === e.data.code) {
          if (!1 === s) return !1;s = !1, wx.setStorageSync("huo_userInfo", ""), n(h.wxLogin({ data: t, conf: a }).then(function (e) {
            return s = !1, e;
          }));
        } else if (e.data && 41406 === e.data.code) try {
          hideFuBiao(!1), "" !== c && c.hide(), h.complainInit(e.data);
        } catch (e) {
          console.error("complainInit", e);
        } else r({ code: 400, msg: e.data ? e.data.msg || "网络异常，请重试" : e.errMsg });
      });
    });
  },
      h = { cpUserCheck: function (e) {
      return g(n({ method: "post", url: "/cp/user/check", private: !0 }, e));
    }, login: function (e) {
      return r.default.launchOptions.ext ? e.data = Object.assign({}, e.data, n({ state: r.default.launchOptions.state }, e)) : e.data = Object.assign({}, e.data, n({}, e)), r.default.launchOptions && r.default.launchOptions.state && (e.data.state = r.default.launchOptions.state), g(n({ method: "post", url: "/mp/ua/lg_info" }, e)).then(function (e) {
        if (200 === e.code) {
          r.default.userInfo = e.data.userinfo, r.default.floatLoginInit = e.data.init_float || 0, wx.setStorageSync("huo_userInfo", e.data.userinfo);var t = setTimeout(function () {
            h.afterLogin(e, t);
          }, 1e3);
        }return e;
      });
    }, afterLogin: function (e, t) {
      if (clearTimeout(t), h.mpSubscribe(e), e.data.userinfo.report_status) {
        var a = parseInt(e.data.userinfo.report_status) || 0,
            n = parseInt(e.data.userinfo.report_time) || 0;2 === a && (a = 3), o.default.huoInterval(this.gameHeartbeat, {}, a, n, r.default.huoIntervalTask.game_heart);
      }if (e.data.ish) {
        r.default.showModalData = { params: e.data.ish, open_type: e.data.open_type, helpParams: e.data.customer_service };var i = parseInt(e.data.ish.status) || 0,
            s = parseInt(e.data.ish.interval_time) || 0;i = 1 === i ? 1 : 2, o.default.huoInterval(h.intervalShowModalFn, {}, i, s, r.default.huoIntervalTask.ish), 2 === i && (r.default.showModalType = !0, this.intervalShowModalFn());
      }var d = "";GameGlobal.egret && (d = egret.lifecycle.stage), d ? (GameGlobal.initTouSuInfo(!1, { show: !1, api: this }), GameGlobal.showTouSu(d)) : (wx.onUserCaptureScreen && wx.onUserCaptureScreen(function () {
        h.memberFreeze();
      }), console.log("不支持白鹭或者laya,截屏上传手动开启"));
    }, wxLogin: function (e) {
      return wx.getStorageSync("huo_userInfo") ? new Promise(function (t, a) {
        wx.checkSession({ success: function () {
            s = !0, t(h.login(e));
          }, fail: function () {
            wx.login({ success: function (o) {
                o.code ? (e = n({}, e.data, { code: o.code, state: e.data && e.data.state || "" }), wx.setStorageSync("huo_userInfo", ""), t(h.login(e))) : a(o);
              }, fail: function (e) {
                a({ code: 400, msg: e.msg || "wx.login.error" });
              } });
          } });
      }) : new Promise(function (t, a) {
        wx.login({ success: function (o) {
            o.code ? (e = n({}, e.data, { code: o.code, state: e.data && e.data.state || "" }), wx.setStorageSync("huo_userInfo", ""), t(h.login(e))) : a(o);
          }, fail: function (e) {
            a({ code: 400, msg: e.msg || "wx.login.error" });
          } });
      });
    }, reversal: function (e) {
      return g(n({ method: "post", url: "/mp/reversal" }, e));
    }, setUserInfo: function (e) {
      return g(n({ method: "post", url: "/mp/wx/updateinfo" }, e)).then(function (e) {
        return wx.setStorageSync("huo_userInfo", e.data), e;
      });
    }, upRoleInfo: function (e) {
      return e.conf = { showLoading: !1, showToast: !1 }, g(n({ method: "post", url: "/mp/user/uprole" }, e)).then(function (e) {
        return h.floatInit(r.default.userInfo, d), d++, e;
      });
    }, getUserInfo: function (e) {
      return this.newUserInfo(e);
    }, newUserInfo: function (e) {
      var t = this;return new Promise(function (a, i) {
        g(n({ method: "post", url: "/mp/wx/getuserinfo" }, e)).then(function (e) {
          if (void 0 === e.data.code && (e.data.code = 200), 200 === e.data.code) {
            if (e.data.report_status) {
              var n = parseInt(e.data.report_status) || 0,
                  i = parseInt(e.data.report_time) || 0;o.default.huoInterval(t.gameHeartbeat, {}, n, i, r.default.huoIntervalTask.game_heart);
            }wx.setStorageSync("huo_userInfo", e.data);
          }a(e);
        }).catch(function (e) {
          i(e);
        });
      });
    }, floatInit: function (e, t) {
      r.default.debug && console.log("ent_cnt", t);try {
        if (1 < t) {
          var a = "",
              n = wx.getStorageSync("huo_measuredHeight"),
              o = wx.getStorageSync("huo_measuredWidth");if (GameGlobal.egret) {
            if (!(a = egret.lifecycle.stage).measuredHeight) return !1;if (!a.measuredWidth) return !1;o && 2 * parseInt(o) < parseInt(a.measuredWidth) && (t = 1), wx.setStorageSync("huo_measuredHeight", a.measuredHeight), wx.setStorageSync("huo_measuredWidth", a.measuredWidth), r.default.debug && console.log(a), r.default.debug && console.log("ent_cnt:" + t + " measuredHeight:" + n + " stage.measuredHeight:" + a.measuredHeight + "measuredWidth:" + o + " stage.measuredWidth:" + a.measuredWidth + " stage.width:" + a.width + " stage.height:" + a.height);
          } else GameGlobal.Laya && (a = Laya.stage, o && 2 * parseInt(o) < parseInt(a.designWidth) && (t = 1), wx.setStorageSync("huo_measuredHeight", a.designHeight), wx.setStorageSync("huo_measuredWidth", a.designWidth));
        }
      } catch (e) {
        console.log(e), console.warn("不支持浮点");
      }if (console.warn("ent_cnt", t), t > 1) return !0;var i = this;return g({ method: "post", url: "/mp/float/init" }).then(function (e) {
        if (e.data && e.data.game_club && 2 === e.data.game_club.is_show && (c = wx.createGameClubButton({ type: e.data.game_club.type, image: e.data.game_club.image, icon: e.data.game_club.icon, text: e.data.game_club.text, style: { left: e.data.game_club.style.left, top: e.data.game_club.style.top, width: e.data.game_club.style.width, height: e.data.game_club.style.height, backgroundColor: e.data.game_club.style.background_color, borderColor: e.data.game_club.style.border_color, borderWidth: e.data.game_club.style.border_width, borderRadius: e.data.game_club.style.border_radius, color: e.data.game_club.style.color, textAlign: e.data.game_club.style.text_align, fontSize: e.data.game_club.style.font_size, lineHeight: e.data.game_club.style.line_height } })), e.data && 2 === e.data.float_is_show) try {
          var a = "";if (GameGlobal.egret ? a = egret.lifecycle.stage : GameGlobal.Laya && (a = Laya.stage), a) {
            var n = { user: {}, auth: {}, ptb: {} };n.ptb.open_type = e.data.ptb.open_type, n.user.mobile_str = e.data.user.mobile_str || "", n.user.ptb_show = e.data.user.ptb_show || 1, n.tasks = e.data.user.tasks, n.user.id = e.data.mem_id, n.user.avatar = e.data.avatar, n.user.nickname = e.data.user.nickname, n.user.ptb_cnt = e.data.user.ptb_cnt, n.user.ptb_rate = e.data.user.ptb_rate, n.user.fb_icon = e.data.user.fb_icon, n.auth.subscribe_gift = e.data.subscribe_gift, n.auth.subscribe_float = e.data.subscribe_float, n.template_id = e.data.template_id, n.api = i, localStorage.setItem("huo_templateId", e.data.template_id), initFuBiao(n), showFuBiao(a, t);
          } else console.warn("不支持浮点1");
        } catch (e) {
          console.warn(e);
        } else hideFuBiao(!1);
      });
    }, mpSubscribe: function (e) {
      var t = e.data && e.data.subscribe_msg || "";if (document.removeEventListener("touchend", h.addEvent, !1), !t || 2 !== t.status || !t.template_id) return wx.setStorageSync("huo_template_id", t.template_id), !1;r.default.mp_message.subscribeShow = t.status, r.default.mp_message.ts = t.nts, r.default.mp_message.clickcnt = t.ncc, wx.setStorageSync("huo_template_id", t.template_id), u = "", l = !1, document.addEventListener("touchend", h.addEvent, !1);
    }, addEvent: function () {
      if ("" === u) {
        var e = new Date().getTime();wx.setStorageSync("huo_time", e), u = 0;
      }if (wx.requestSubscribeMessage && 2 === r.default.mp_message.subscribeShow && !1 === l) {
        var t = new Date().getTime();wx.getStorageSync("huo_time") + 1e3 * r.default.mp_message.ts <= t && wx.getStorageSync("huo_time") && (u === r.default.mp_message.clickcnt && h.mpApi(""), u++);
      }
    }, mpApi: function (e) {
      var t = new Date().getTime();return l = !0, new Promise(function (a, n) {
        2 === r.default.mp_message.subscribeShow ? wx.requestSubscribeMessage({ tmplIds: e.data && e.data.subscribe_msg.template_id || wx.getStorageSync("huo_template_id"), success: function (e) {
            var n = new Date().getTime();h.accreditReport({ data: { template_ids: e, subscribe_msg_ts: n - t } }), u = "", l = !1, a({ code: 200, msg: "success" });
          }, fail: function (e) {
            n({ code: 400, msg: "failmpApi" });
          } }) : a({ code: 200, msg: "success" });
      });
    }, accreditReport: function (e) {
      return g(n({ url: "/mp/accredit/report" }, e)).then(function (e) {
        h.mpSubscribe(e);
      });
    }, giftAdd: function (e) {
      return g(n({ url: "/mp/gift/add" }, e));
    }, getShareInfo: function (e) {
      return g(n({ url: "/mp/share/detail" }, e));
    }, addShareInfo: function (e) {
      return g(n({ url: "/mp/share/add" }, e));
    }, getShareQrcode: function (e) {
      return g(n({ url: "/mp/share/qrcode" }, e));
    }, mpPay: function (e) {
      var t = this;return this.preOrder(e).then(function (a) {
        return e.data = n({}, e.data, { payway: "wxpay", "order-order_id": a.data.order_id }), t.mpOrder(e);
      });
    }, midasPay: function (e) {
      var t = this;return this.preOrder(e).then(function (a) {
        return t.wxMidasPay(a.data, e);
      });
    }, wxMidasPay: function (e, t) {
      var a = this;return new Promise(function (n, r) {
        var i = e.mode,
            s = e.env,
            d = e.offer_id,
            c = e.currency,
            u = e.buy_quantity,
            l = e.platform,
            g = e.zone_id;wx.requestMidasPayment({ mode: i, env: s, offerId: d, currencyType: c, platform: l, buyQuantity: u, zoneId: g, success: function (o) {
            t.data["order-order_id"] = e.order_id, t.conf = { showLoading: !1, showToast: !1 }, a.midasPayQuery(t).then(function (e) {
              if (e.data && 2 !== e.data.status) var n = 0,
                  o = setInterval(function () {
                n++, a.midasPayQuery(t).then(function (e) {
                  2 !== e.data.status && 8 !== n || clearInterval(o);
                }, function (e) {});
              }, 15e3);
            }, function (e) {}), o.errMsg && (o.msg = o.errMsg), n(o);
          }, fail: function (e) {
            if (e.errMsg) if ("requestMidasPayment:fail iOS not supported" === e.errMsg) {
              var a = wx.getStorageSync("huo_userInfo");e.msg = a && a.ios_text || "小游戏暂不支持IOS支付，请使用安卓登录后支付。", e.duration = 3e3;
            } else e.msg = e.errMsg;var n = o.default.setting(t.conf);n.showToast && (e.msg && (n.toastParams.title = e.msg), e.duration && (n.toastParams.duration = e.duration), wx.showToast(n.toastParams)), r(e);
          } });
      });
    }, checkPay: function (e) {
      var t = this;return this.preOrder(e).then(function (a) {
        switch (a.data.check) {case 1:
            return e.data["order-order_id"] = a.data.order_id, t.checkPayInfo(e);case 2:
            return t.wxMidasPay(a.data, e);default:
            return { code: "400", msg: "fail" };}
      });
    }, preOrder: function (e) {
      var t = new Date().getTime(),
          a = wx.getStorageSync("huo_pre_order_last");if (a && parseInt(t - a) < 1e3) return { code: "400", msg: "亲 慢点点击" };return g(n({ method: "post", url: "/mp/preorder" }, e)).then(function (e) {
        return wx.setStorageSync("huo_pre_order_last", t), wx.setStorageSync("huo_orderInfo", e.data), e;
      }, function (e) {
        return e;
      });
    }, mpOrder: function (e) {
      var t = this;return g(n({ method: "post", url: "/mp/wx/pay" }, e)).then(function (a) {
        return t.wxMpPay(JSON.parse(a.data.token), e);
      });
    }, wxMpPay: function (e, t) {
      return new Promise(function (a, r) {
        wx.requestPayment(n({}, e, { success: function (e) {
            e.errMsg && (e.msg = e.errMsg), a(e);
          }, fail: function (e) {
            e.errMsg && (e.msg = e.errMsg);var a = o.default.setting(t.conf);a.showToast && (e.msg && (a.toastParams.title = e.msg), wx.showToast(a.toastParams)), r(e);
          }, complete: function (e) {
            "requestPayment:cancel" === e.errMsg && r({ msg: "requestPayment:fail cancel" }), this.mpPayErrReport(t, e.errMsg);
          } }));
      });
    }, mpPayErrReport: function (e, t) {
      g({ method: "post", url: "/mp/pay/error/report", data: { error_msg: t, "order-order_id": e["order-order_id"] || "", error_mp_id: e.error_mp_id || "" } }).then(function (e) {});
    }, mpPayQuery: function (e) {
      return g(n({ method: "post", url: "/mp/order/query" }, e));
    }, midasPayQuery: function (e) {
      return g(n({ url: "/mp/mpay/query" }, e));
    }, checkPayInfo: function (e) {
      var t = this;return g(n({ url: "/mp/order/checkinfo" }, e)).then(function (a) {
        return a.data.order_id = e.data["order-order_id"], new Promise(function (n, o) {
          a.data.image && wx.setStorageSync("huo_orderQRCode", a.data.image);var r = a.data;wx.getStorageSync("huo_orderQRCode");if (a.data && 4 === a.data.pay_type) wx.showModal({ title: a.data.recharte_title, content: a.data.recharte_content, showCancel: !1, success: function (e) {
              e.confirm && wx.openCustomerServiceConversation({ sessionFrom: r.session_from, showMessageCard: !0, sendMessageTitle: r.miniprogrampage_title, sendMessagePath: r.miniprogrampage_url, sendMessageImg: r.miniprogrampage_picture });
            } }), n(a);else if (a.data && a.data.mp_id) {
            var i = t,
                s = e;wx.navigateToMiniProgram({ appId: a.data.mp_id, path: a.data.path, fail: function (e) {
                -1 === e.errMsg.search("jsapi") && -1 === e.errMsg.search("denied") && -1 === e.errMsg.search("navigateToMiniProgramAppIdList") || (s.data.error_mp_id = a.data.mp_id, s.data.error_mp_msg = e.errMsg, i.checkPayInfo(s));
              }, success: function () {
                n(a);
              } });
          } else t.checkQrcode(e).then(function (e) {
            var t = e.data.image,
                o = e.data.poster_img ? e.data.poster_img : "";o ? wx.previewImage({ current: o, urls: [o] }) : t && (wx.previewImage({ current: t, urls: [t] }), wx.setStorageSync("huo_orderQRCode", t)), a.data.image = t, a.data.poster_img = o, n({ code: "200", msg: "success", data: [] });
          }, function (e) {
            n(a);
          });
        });
      });
    }, intervalShowModalFn: function () {
      arguments.length > 0 && void 0 !== arguments[0] && arguments[0];var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;!0 === r.default.showModalType && (r.default.debug && console.log(new Date().getTime() + " touchend:" + e), document.addEventListener("touchend", h.showModalFn, !1), r.default.showModalType = !1);
    }, showModalFn: function () {
      r.default.showModalType = !0, document.removeEventListener("touchend", h.showModalFn, !1);var e = r.default.showModalData.params,
          t = r.default.showModalData.open_type,
          a = r.default.showModalData.helpParams;wx.showModal({ title: e.title, content: e.content, cancelText: e.lb, confirmText: e.rb, success: function (n) {
          n.confirm ? 2 === e.status ? wx.navigateToMiniProgram({ appId: t.wx_app_id, path: t.wx_path, extraData: t.extra_data || {}, envVersion: t.env_version || "release", fail: function (e) {
              wx.setClipboardData({ data: a.wx, success: function (e) {
                  wx.showModal({ title: "温馨提示", content: "无法跳转小程序，已帮您复制客服微信请联系客服！", success: function (e) {
                      console.log("copy showModal success:" + a.wx);
                    } });
                } });
            }, success: function () {
              console.log("navigateToMiniProgram success");
            } }) : wx.setClipboardData({ data: a.wx, success: function (e) {
              console.log("copy success");
            } }) : n.cancel && console.log("showModal cancel");
        } });
    }, checkOrderInfo: function (e) {
      return g(n({ method: "post", url: "/mp/pay/info" }, e));
    }, checkOrder: function (e) {
      var t = this;return g(n({ method: "post", url: "/mp/check/pay" }, e)).then(function (a) {
        return t.wxMpPay(JSON.parse(a.data.token), e);
      });
    }, checkQrcode: function (e) {
      return e.data && (e.data.is_last = 2), g(n({ url: "/mp/order/qrcode" }, e));
    }, reportAdClick: function (e) {
      return g(n({ url: "/mp/ad/report" }, e));
    }, removeOffScreen: function () {
      o.default.removeOffScreen();
    }, checkMsg: function (e) {
      return g(n({ method: "post", url: "/mp/msg/check" }, e));
    }, checkImg: function (e) {
      var t = n({}, r.default.baseParams, r.default.gameParams, r.default.agentParams, r.default.deviceParams, { token: wx.getStorageSync("huo_userInfo").user_token, ts: new Date().getTime() });return t.sign = o.default.sign({ url: "/mp/img/check", data: t }), new Promise(function (a, n) {
        wx.uploadFile({ url: r.default.baseUrl + "/mp/img/check", filePath: e.data.filePath, name: "image", formData: t, success: function (e) {
            var t = e.data;200 === (t = JSON.parse(t)).code ? a({ code: 200, msg: "success" }) : n({ code: 400, msg: t.msg || "failcheckImg" });
          } });
      });
    }, gameMinicard: function (e) {
      return g(n({ method: "post", url: "/mp/game/minicard" }, e));
    }, userCheckpay: function (e) {
      return g(n({ method: "post", url: "/mp/user/checkpay" }, e));
    }, gameHeartbeat: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};arguments.length > 1 && void 0 !== arguments[1] && arguments[1];return e.conf = { showLoading: !1, showToast: !1 }, g(n({ method: "post", url: "/mp/game/heartbeat" }, e)).then(function (e) {
        r.default.floatLoginInit && (h.floatInit(r.default.userInfo, r.default.floatLoginInit), r.default.floatLoginInit++), h.mpSubscribe(e);
      });
    }, complainInit: function (e) {
      var t = this;return e.conf = { showLoading: !1, showToast: !1 }, g(n({ method: "post", url: "/mp/complain/index" }, e)).then(function (e) {
        try {
          var a = "";if (GameGlobal.egret && (a = egret.lifecycle.stage), a) {
            var n = { show: !0, name: e.data.name, icon: e.data.icon, restore_time: e.data.restore_time, session_from: e.data.session_from, miniprogrampage_title: e.data.miniprogrampage_title, miniprogrampage_picture: e.data.miniprogrampage_picture, miniprogrampage_url: e.data.miniprogrampage_url, uploadUrl: e.data.upload_url, customer_service_qq: e.data.customer_service_qq, customer_service_tel: e.data.customer_service_tel, list: e.data.list };n.api = t, console.warn("complainInit-41406-截屏初始化和显示"), GameGlobal.initTouSuInfo(!0, n), GameGlobal.showTouSu(a);
          }
        } catch (e) {
          console.error(e);
        }
      });
    }, memberFreeze: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = this;return e.conf = { showLoading: !1, showToast: !1 }, new Promise(function (a, o) {
        g(n({ method: "post", url: "/mp/member/freeze" }, e)).then(function (e) {
          t.getUserInfo(), a(e);
        }).catch(function (e) {
          o(e);
        });
      });
    }, complainReport: function (e) {
      return e.conf = { showLoading: !1, showToast: !1 }, g(n({ method: "post", url: "/mp/complain/report" }, e));
    }, sendCode: function (e) {
      return g(n({ method: "post", url: "/mp/sms/send" }, e));
    }, bindPhone: function (e) {
      return g(n({ method: "post", url: "/mp/sms/bind" }, e));
    }, gameInit: function (e) {
      return new Promise(function (t, a) {
        g(n({ method: "post", url: "/mp/index/init" }, e)).then(function (e) {
          t(e);
        }).catch(function (e) {
          a(e);
        });
      });
    } };e.exports = h;
}, function (e, t, a) {
  "use strict";

  var n;"function" == typeof Symbol && Symbol.iterator;!function (o) {
    function r(e, t) {
      var a = (65535 & e) + (65535 & t);return (e >> 16) + (t >> 16) + (a >> 16) << 16 | 65535 & a;
    }function i(e, t, a, n, o, i) {
      return r(function (e, t) {
        return e << t | e >>> 32 - t;
      }(r(r(t, e), r(n, i)), o), a);
    }function s(e, t, a, n, o, r, s) {
      return i(t & a | ~t & n, e, t, o, r, s);
    }function d(e, t, a, n, o, r, s) {
      return i(t & n | a & ~n, e, t, o, r, s);
    }function c(e, t, a, n, o, r, s) {
      return i(t ^ a ^ n, e, t, o, r, s);
    }function u(e, t, a, n, o, r, s) {
      return i(a ^ (t | ~n), e, t, o, r, s);
    }function l(e, t) {
      e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;var a,
          n,
          o,
          i,
          l,
          g = 1732584193,
          h = -271733879,
          m = -1732584194,
          f = 271733878;for (a = 0; a < e.length; a += 16) n = g, o = h, i = m, l = f, h = u(h = u(h = u(h = u(h = c(h = c(h = c(h = c(h = d(h = d(h = d(h = d(h = s(h = s(h = s(h = s(h, m = s(m, f = s(f, g = s(g, h, m, f, e[a], 7, -680876936), h, m, e[a + 1], 12, -389564586), g, h, e[a + 2], 17, 606105819), f, g, e[a + 3], 22, -1044525330), m = s(m, f = s(f, g = s(g, h, m, f, e[a + 4], 7, -176418897), h, m, e[a + 5], 12, 1200080426), g, h, e[a + 6], 17, -1473231341), f, g, e[a + 7], 22, -45705983), m = s(m, f = s(f, g = s(g, h, m, f, e[a + 8], 7, 1770035416), h, m, e[a + 9], 12, -1958414417), g, h, e[a + 10], 17, -42063), f, g, e[a + 11], 22, -1990404162), m = s(m, f = s(f, g = s(g, h, m, f, e[a + 12], 7, 1804603682), h, m, e[a + 13], 12, -40341101), g, h, e[a + 14], 17, -1502002290), f, g, e[a + 15], 22, 1236535329), m = d(m, f = d(f, g = d(g, h, m, f, e[a + 1], 5, -165796510), h, m, e[a + 6], 9, -1069501632), g, h, e[a + 11], 14, 643717713), f, g, e[a], 20, -373897302), m = d(m, f = d(f, g = d(g, h, m, f, e[a + 5], 5, -701558691), h, m, e[a + 10], 9, 38016083), g, h, e[a + 15], 14, -660478335), f, g, e[a + 4], 20, -405537848), m = d(m, f = d(f, g = d(g, h, m, f, e[a + 9], 5, 568446438), h, m, e[a + 14], 9, -1019803690), g, h, e[a + 3], 14, -187363961), f, g, e[a + 8], 20, 1163531501), m = d(m, f = d(f, g = d(g, h, m, f, e[a + 13], 5, -1444681467), h, m, e[a + 2], 9, -51403784), g, h, e[a + 7], 14, 1735328473), f, g, e[a + 12], 20, -1926607734), m = c(m, f = c(f, g = c(g, h, m, f, e[a + 5], 4, -378558), h, m, e[a + 8], 11, -2022574463), g, h, e[a + 11], 16, 1839030562), f, g, e[a + 14], 23, -35309556), m = c(m, f = c(f, g = c(g, h, m, f, e[a + 1], 4, -1530992060), h, m, e[a + 4], 11, 1272893353), g, h, e[a + 7], 16, -155497632), f, g, e[a + 10], 23, -1094730640), m = c(m, f = c(f, g = c(g, h, m, f, e[a + 13], 4, 681279174), h, m, e[a], 11, -358537222), g, h, e[a + 3], 16, -722521979), f, g, e[a + 6], 23, 76029189), m = c(m, f = c(f, g = c(g, h, m, f, e[a + 9], 4, -640364487), h, m, e[a + 12], 11, -421815835), g, h, e[a + 15], 16, 530742520), f, g, e[a + 2], 23, -995338651), m = u(m, f = u(f, g = u(g, h, m, f, e[a], 6, -198630844), h, m, e[a + 7], 10, 1126891415), g, h, e[a + 14], 15, -1416354905), f, g, e[a + 5], 21, -57434055), m = u(m, f = u(f, g = u(g, h, m, f, e[a + 12], 6, 1700485571), h, m, e[a + 3], 10, -1894986606), g, h, e[a + 10], 15, -1051523), f, g, e[a + 1], 21, -2054922799), m = u(m, f = u(f, g = u(g, h, m, f, e[a + 8], 6, 1873313359), h, m, e[a + 15], 10, -30611744), g, h, e[a + 6], 15, -1560198380), f, g, e[a + 13], 21, 1309151649), m = u(m, f = u(f, g = u(g, h, m, f, e[a + 4], 6, -145523070), h, m, e[a + 11], 10, -1120210379), g, h, e[a + 2], 15, 718787259), f, g, e[a + 9], 21, -343485551), g = r(g, n), h = r(h, o), m = r(m, i), f = r(f, l);return [g, h, m, f];
    }function g(e) {
      var t,
          a = "",
          n = 32 * e.length;for (t = 0; t < n; t += 8) a += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);return a;
    }function h(e) {
      var t,
          a = [];for (a[(e.length >> 2) - 1] = void 0, t = 0; t < a.length; t += 1) a[t] = 0;var n = 8 * e.length;for (t = 0; t < n; t += 8) a[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;return a;
    }function m(e) {
      var t,
          a,
          n = "";for (a = 0; a < e.length; a += 1) t = e.charCodeAt(a), n += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);return n;
    }function f(e) {
      return unescape(encodeURIComponent(e));
    }function p(e) {
      return function (e) {
        return g(l(h(e), 8 * e.length));
      }(f(e));
    }function v(e, t) {
      return function (e, t) {
        var a,
            n,
            o = h(e),
            r = [],
            i = [];for (r[15] = i[15] = void 0, o.length > 16 && (o = l(o, 8 * e.length)), a = 0; a < 16; a += 1) r[a] = 909522486 ^ o[a], i[a] = 1549556828 ^ o[a];return n = l(r.concat(h(t)), 512 + 8 * t.length), g(l(i.concat(n), 640));
      }(f(e), f(t));
    }function w(e, t, a) {
      return t ? a ? v(t, e) : function (e, t) {
        return m(v(e, t));
      }(t, e) : a ? p(e) : function (e) {
        return m(p(e));
      }(e);
    }void 0 === (n = function () {
      return w;
    }.call(t, a, t, e)) || (e.exports = n);
  }();
}, function (e, t, a) {
  "use strict";

  var n,
      o,
      r = a(0),
      i = (o = r) && o.__esModule ? o : { default: o };void 0 === (n = function (e, t, a, n) {
    var o = function () {
      function e(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
      };
    }();var r = function () {
      function e(t, a, n) {
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.curShowFb = !0, this.curDetailTab = 0, this.stageW = 0, this.stageH = 0, this.preloaded = !1, this.loadedNum = 0, this.fbTouched = !1;var o = this;o.stageW = a, o.stageH = n, o.stage = t, o.group = new m(), o.bgRect = new v(), "egret" === c ? (o.group.width = u, o.group.height = l, o.bgRect.touchEnabled = !0) : "Laya" === c && (o.bgRect.mouseEnabled = !1, o.group.width = Laya.Browser.width, o.group.height = Laya.Browser.height), o.groupB = new m(), "egret" === c && (o.groupB.width = a, o.groupB.height = n, o.groupB.touchEnabled = !1), o.groupB.addChild(o.bgRect), o.groupB.addChild(o.group);var r = Math.min(a / u, n / l).toFixed(2);if ("egret" === c ? o.group.touchEnabled = !1 : "Laya" === c && (o.group.mouseEnabled = !1), o.group.scaleX = o.group.scaleY = r, o.group.x = (a - u * r) / 2, o.group.y = (n - l * r) / 2, o.group.x < 0 && (o.group.x = 0), o.group.y < 0 && (o.group.y = 0), t.addChild(o.groupB), g && g.user && g.user.avatar && (C.head = g.user.avatar), g && g.user && g.user.fb_icon && (C.fbIcon = g.user.fb_icon), g && g.tasks) for (var i in g.tasks) C[i] = g.tasks[i].icon;o.imgLoader = w;var s = Object.keys(C);for (var d in s) P[s[d]] = s[d];"egret" === c ? o.loadAssets() : "Laya" === c && this.show();
      }return o(e, [{ key: "loadAssets", value: function () {
          "egret" === c ? (this.imgLoader.addEventListener(x, this.loadSucc, this), this.imgLoader.addEventListener(S, this.loadFail, this)) : "Laya" === c && (this.imgLoader.on(x, this, this.loadSucc), this.imgLoader.on(S, this, this.loadFail)), this.preloaded = !1, this.loadedNum = 0, this.loadAssetsPer();
        } }, { key: "loadAssetsPer", value: function () {
          var e = Object.keys(C);this.loadedNum >= 0 && this.loadedNum < e.length && (this.loadedNum += 1, ("egret" === c || "Laya" === c) && this.imgLoader.load(C[e[this.loadedNum - 1]]));
        } }, { key: "loadSucc", value: function (e) {
          var t = Object.keys(C);"egret" === c ? e.currentTarget.data && (L[t[this.loadedNum - 1]] = e.currentTarget.data) : "Laya" === c && (L[t[this.loadedNum - 1]] = Laya.loader.getRes(t[this.loadedNum - 1])), this.loadedNum < Object.keys(C).length ? this.loadAssetsPer() : this.preloaded || (this.preloaded = !0, "egret" === c ? (this.imgLoader.removeEventListener(x, this.loadSucc, this), this.imgLoader.removeEventListener(S, this.loadFail, this)) : "Laya" === c && (this.imgLoader.off(x, this, this.loadSucc), this.imgLoader.off(S, this, this.loadFail)), this.show());
        } }, { key: "loadFail", value: function (e) {
          console.warn("loadFail--\x3e", e);var t = Object.keys(C);L[t[this.loadedNum - 1]] = null, this.loadedNum < Object.keys(C).length ? this.loadAssetsPer() : this.preloaded || (this.preloaded = !0, "egret" === c ? (this.imgLoader.removeEventListener(x, this.loadSucc, this), this.imgLoader.removeEventListener(S, this.loadFail, this)) : "Laya" === c && (this.imgLoader.off(x, this, this.loadSucc), this.imgLoader.off(S, this, this.loadFail)), this.show());
        } }, { key: "init", value: function () {
          var e = this;e.fdIco = new f(), e.groupB.addChild(e.fdIco), e.drawImage(e.fdIco, 281, 284, e.stageW - 118.02 * e.group.scaleX / 2, e.stageH / 4, P.fbIcon, .42 * e.group.scaleX);var t = 0;e.drawRect(e.bgRect, 0, t, e.stageW, e.stageH, 0, .42, !0), e.bg = new f(), e.group.addChild(e.bg), e.drawImage(e.bg, 690, l, 30, 170, P.bg), e.headImg = new f(), e.group.addChild(e.headImg), e.drawImage(e.headImg, 104, 104, 60, t + 192, P.head), e.nameLab = new p(), e.group.addChild(e.nameLab), e.drawLab(e.nameLab, 28, "middle", "left", g.user.nickname, 3355443, 184, t + 208), e.idLab = new p(), e.group.addChild(e.idLab), e.drawLab(e.idLab, 28, "middle", "left", g.user.mobile_str, 3355443, 184, t + 260), e.close = new f(), e.group.addChild(e.close), e.drawImage(e.close, 50, 50, 638, t + 198, P.close), e.ptbGroup = new m(), e.group.addChild(e.ptbGroup), e.ptbGroup.x = 0, e.ptbGroup.y = t, e.coinbg = new f(), e.ptbGroup.addChild(e.coinbg), e.drawImage(e.coinbg, 144, 40, 60, 320, P.coinBg), e.coinImg = new f(), e.ptbGroup.addChild(e.coinImg), e.drawImage(e.coinImg, 46, 46, 60, 316, P.coin), e.coinLab = new p(), e.ptbGroup.addChild(e.coinLab), e.drawLab(e.coinLab, 32, "middle", "middle", g.user.ptb_cnt * g.user.ptb_rate, 3355443, 110, 324), e.coinTxt = new p(), e.ptbGroup.addChild(e.coinTxt), e.drawLab(e.coinTxt, 22, "middle", "left", g.user.ptb_rate + "平台币=1人民币", 6710886, 222, 328), e.chargeImg = new f(), e.ptbGroup.addChild(e.chargeImg), e.drawImage(e.chargeImg, 144, 62, 540, 308, P.czBtnBg), g && g.user && 2 === g.user.ptb_show ? (e.visible(e.ptbGroup, !0), t += 78) : e.visible(e.ptbGroup, !1), e.lineImg = new f(), e.group.addChild(e.lineImg), e.drawImage(e.lineImg, 690, 3, 30, t + 320, P.lineImg), t += 322;var a = Object.keys(g.tasks),
              n = {};e.taskGroup = [], e.taskElements = [];for (var o = 0; o <= 7; o++) e.taskGroup[o] = new m(), e.taskElements[o] = {}, e.group.addChild(e.taskGroup[o]), e.taskGroup[o].x = 52, e.taskGroup[o].y = t, a[o] ? (n = g.tasks[a[o]], t += 156, e.visible(e.taskGroup[o], !0)) : e.visible(e.taskGroup[o], !1), e.drawTask(e.taskGroup[o], o, n);e.bg.height = t - 136, "egret" === c ? (e.fdIco.addEventListener(_, e.clickB, e), e.fdIco.addEventListener(k, e.clickE, e), e.chargeImg.addEventListener(y, e.click, e), e.close.addEventListener(y, e.click, e), e.bgRect.addEventListener(y, e.click, e)) : "Laya" === c && (e.fdIco.on(_, e, e.clickB), e.fdIco.on(k, e, e.clickE), e.chargeImg.on(y, e, e.click), e.close.on(y, e, e.click), e.bgRect.on(y, e, e.click));
        } }, { key: "clickB", value: function (e) {
          if (this.fbTouched = !0, "egret" === c) this.setFbPosAcrossFingerPosZ(this.groupB.globalToLocal(e.stageX, e.stageY)), this.stage.addEventListener(I, this.clickM, this);else if ("Laya" === c) {
            var t = { x: e.stageX, y: e.stageY };this.setFbPosAcrossFingerPosZ(t), this.stage.on(I, this, this.clickM);
          }
        } }, { key: "clickM", value: function (e) {
          if (this.fbTouched) if ("egret" === c) this.setFbPosAcrossFingerPosZ(this.groupB.globalToLocal(e.stageX, e.stageY));else if ("Laya" === c) {
            var t = { x: e.stageX, y: e.stageY };this.setFbPosAcrossFingerPosZ(t);
          }
        } }, { key: "clickE", value: function (e) {
          this.fbTouched && (this.fbTouched = !1, "egret" === c ? this.stage.removeEventListener(I, this.clickM, this) : "Laya" === c && this.stage.off(I, this, this.clickM), this.fbTouched = !1, this.curShowFb = !1, this.curDetailTab = 0, this.reRedener(), g.api.newUserInfo().then(function (e) {
            g.user.ptb_cnt = e.data.ptb_cnt, g.user.ptb_rate = e.data.ptb_rate, g.tasks = e.data.tasks, g.user.ptb_show = e.data.ptb_show, g.user.mobile_str = e.data.mobile_str, g.user.nickname = e.data.nickname, h && h.reRedener();
          }).catch(function (e) {
            console.error(e);
          }), 2 === g.auth.subscribe_float && wx.requestSubscribeMessage && wx.requestSubscribeMessage({ tmplIds: g.template_id, success: function (e) {
              var t, a;t = e, a = g.template_id, g.api.accreditReport({ data: { template_ids: t, template_id: a } });
            }, fail: function (e) {
              !function (e) {
                console.warn(e), console.warn("订阅失败");
              }(e);
            } }));
        } }, { key: "click", value: function (e) {
          e.stopPropagation();var t = this;if (e && e.target && e.target.name && g && g.tasks) for (var a in g.tasks) if (e.target.name === a) {
            var n = (g.tasks[a] || {}).open_type || {};if (console.log("click, open_type", n), 1 === n.type) {
              var o = n.env_version || "release",
                  r = n.extra_data || {};t.navigateMp(n.wx_app_id, n.wx_path, o, r);
            } else 3 === n.type && (console.log("click, open_type", n), t.kefu(n.session_from, n.miniprogrampage_title, n.miniprogrampage_url, n.miniprogrampage_picture));return;
          }switch (e.currentTarget) {case t.chargeImg:
              var i;if (1 === (i = g.ptb.open_type).type) {
                console.log("click, open_type", i);var s = i.env_version || "release",
                    d = i.extra_data || {};t.navigateMp(i.wx_app_id, i.wx_path, s, d);
              } else 3 === i.type && t.kefu(i.session_from, i.miniprogrampage_title, i.miniprogrampage_url, i.miniprogrampage_picture);break;case t.close:case t.bgRect:
              t.curShowFb = !0, t.reRedener();}
        } }, { key: "setFbPosAcrossFingerPosZ", value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              a = this,
              n = e.x,
              o = e.y;t || (n = e.x - a.fdIco.width * a.fdIco.scaleX / 2, o = e.y - a.fdIco.height * a.fdIco.scaleY / 2, n < 0 ? n = 0 : n > a.stageW - a.fdIco.width * a.fdIco.scaleX && (n = a.stageW - a.fdIco.width * a.fdIco.scaleX), o < 0 ? o = 0 : o > a.stageH - a.fdIco.height * a.fdIco.scaleY && (o = a.stageH - a.fdIco.height * a.fdIco.scaleY)), a.fdIco.x = n, a.fdIco.y = o;
        } }, { key: "copy", value: function (e) {
          wx.setClipboardData({ data: e });
        } }, { key: "kefu", value: function (e, t, a, n) {
          wx.openCustomerServiceConversation({ sessionFrom: e, showMessageCard: !0, sendMessageTitle: t, sendMessagePath: a, sendMessageImg: n });
        } }, { key: "navigateMp", value: function (e, t) {
          var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "release",
              n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};wx.navigateToMiniProgram({ appId: e, path: t, extraData: n, envVersion: a, fail: function (t) {
              -1 === t.errMsg.search("jsapi") && -1 === t.errMsg.search("denied") && -1 === t.errMsg.search("navigateToMiniProgramAppIdList") || E(e, error_mp_msg);
            }, success: function () {
              resolve(res);
            } });
        } }, { key: "show", value: function () {
          var e = this;e.curShowFb = !0, e.curDetailTab = 0, e.init(), e.reRedener();
        } }, { key: "reRedener", value: function () {
          var e = this;if (e.curShowFb && null !== e.fdIco && null !== e.fdIco.x) {
            "egret" === c || "Laya" === c && (e.group.mouseEnabled = !1);var t = e.fdIco.x < e.stageW / 2 ? -1 * e.fdIco.width * e.fdIco.scaleX / 2 : e.stageW - e.fdIco.width * e.fdIco.scaleX / 2;e.setFbPosAcrossFingerPosZ({ x: t, y: e.fdIco.y }, !0);
          } else {
            "egret" === c || "Laya" === c && (e.group.mouseEnabled = !0), e.nameLab.text = g.user.nickname, e.idLab.text = g.user.mobile_str, e.coinLab.text = g.user.ptb_cnt * g.user.ptb_rate, e.coinTxt.text = g.user.ptb_rate + "平台币=1人民币";var a = 0;g && g.user && 2 === g.user.ptb_show ? (e.visible(e.ptbGroup, !0), a += 78) : e.visible(e.ptbGroup, !1), e.lineImg.y = a + 320, a += 322;for (var n = Object.keys(g.tasks), o = null, r = 0; r <= 7; r++) e.taskGroup[r].x = 52, e.taskGroup[r].y = a, n[r] ? (o = g.tasks[n[r]], a += 156, e.visible(e.taskGroup[r], !0)) : e.visible(e.taskGroup[r], !1), e.updateTaskData(r, o);e.bg.height = a - 136;
          }e.visible(e.fdIco, e.curShowFb), e.visible(e.group, !e.curShowFb), e.visible(e.bgRect, !e.curShowFb);
        } }, { key: "visible", value: function (e, t) {
          e && (e.visible = t);
        } }, { key: "drawImage", value: function (e, t, a, n, o, r) {
          var i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
              s = !(arguments.length > 7 && void 0 !== arguments[7]) || arguments[7];e && (e.width = t, e.height = a, e.x = n, e.y = o, 1 !== i && (e.scaleX = e.scaleY = i), this._updateBitmap(e, r), "egret" === c ? e.touchEnabled = s : "Laya" === c && (e.mouseEnabled = s));
        } }, { key: "_updateBitmap", value: function (e, t) {
          e && ("egret" === c ? L[t] && (e.texture || (e.texture = new b()), e.texture.bitmapData = L[t], e.$refreshImageData()) : "Laya" === c && C[t] && (e.source = C[t], e.skin = C[t]));
        } }, { key: "drawLab", value: function (e, t, a, n, o, r, i, s) {
          var d = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
              u = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
              l = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
              g = !(arguments.length > 11 && void 0 !== arguments[11]) || arguments[11];e && (e.x = i, e.y = s, e.bold = d, u > 0 && (e.width = u), l > 0 && (e.height = l), "egret" === c ? (e.size = t, e.textAlign = n, e.verticalAlign = a, e.text = o, e.textColor = r, e.touchEnabled = g) : "Laya" === c && (e.fontSize = t, e.align = n, e.valign = a, e.text = o, e.color = r, e.mouseEnabled = g));
        } }, { key: "drawRect", value: function (e, t, a, n, o, r, i) {
          var s = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];e && ("egret" === c ? (e.graphics.clear(), e.graphics.beginFill(r, i), e.graphics.drawRect(t, a, n, o), e.graphics.endFill(), e.touchEnabled = s) : "Laya" === c && (e.graphics.clear(), e.graphics.drawRect(t, a, n, o, r), e.alpha = i, e.mouseEnabled = s));
        } }, { key: "drawTask", value: function (e, t, a) {
          var n = this;n.taskElements[t].whiteTaskBg = new f(), e.addChild(n.taskElements[t].whiteTaskBg), n.drawImage(n.taskElements[t].whiteTaskBg, 646, 136, 0, 20, P.whiteTaskBg), n.taskElements[t].taskIcon = new f(), e.addChild(n.taskElements[t].taskIcon), n.drawImage(n.taskElements[t].taskIcon, 76, 76, 20, 48, a.code || P.helpIcon), n.taskElements[t].taskName = new p(), e.addChild(n.taskElements[t].taskName), n.drawLab(n.taskElements[t].taskName, 36, "middle", "left", a.name, 3355443, 118, 48), n.taskElements[t].taskRwdTitle = new p(), e.addChild(n.taskElements[t].taskRwdTitle), n.drawLab(n.taskElements[t].taskRwdTitle, 24, "middle", "left", "奖励", 3355443, 118, 106), n.taskElements[t].taskRwd = new p(), e.addChild(n.taskElements[t].taskRwd);var o = a.reward_str || "";n.drawLab(n.taskElements[t].taskRwd, 24, "middle", "left", o, 16711680, 176, 106), o ? n.taskElements[t].taskRwd.text = o : (n.taskElements[t].taskName.y = 68, n.visible(n.taskElements[t].taskRwdTitle, !1), n.visible(n.taskElements[t].taskRwd, !1)), n.taskElements[t].yellowBtn = new f(), e.addChild(n.taskElements[t].yellowBtn);var r = a.btn || P.yellowBtn;n.drawImage(n.taskElements[t].yellowBtn, 130, 68, 492, 54, r), n.taskElements[t].yellowBtn.name = a.code || "", "egret" === c ? n.taskElements[t].yellowBtn.addEventListener(y, n.click, n) : "Laya" === c && n.taskElements[t].yellowBtn.on(y, n, n.click);
        } }, { key: "updateTaskData", value: function (e, t) {
          var a = this;if (null !== a.taskGroup[e] && void 0 !== a.taskGroup[e] && "" !== a.taskGroup[e] && a.taskGroup[e] !== []) {
            this._updateBitmap(a.taskElements[e].taskIcon, t.code || P.helpIcon), a.taskElements[e].taskName.text = t.name || "";var n = t.reward_str || "";n ? (a.taskElements[e].taskName.y = 48, a.visible(a.taskElements[e].taskRwdTitle, !0), a.visible(a.taskElements[e].taskRwd, !0), a.taskElements[e].taskRwd.text = n) : (a.taskElements[e].taskName.y = 68, a.visible(a.taskElements[e].taskRwdTitle, !1), a.visible(a.taskElements[e].taskRwd, !1));var o = t.btn || P.yellowBtn;this._updateBitmap(a.taskElements[e].yellowBtn, o), a.taskElements[e].yellowBtn.name = t.code || "";
          }
        } }]), e;
    }(),
        s = !1,
        d = !1,
        c = "",
        u = 750,
        l = 1334,
        g = { user: { id: 0, nickname: "", avatar: "", ptb_cnt: 0, ptb_rate: 0, entry_image: "" }, template_id: [], auth: { subscribe_float: 0, subscribe_gift: 0 } },
        h = void 0,
        m = void 0,
        f = void 0,
        p = void 0,
        v = void 0,
        w = void 0,
        b = void 0,
        y = void 0,
        _ = void 0,
        I = void 0,
        k = void 0,
        x = void 0,
        S = void 0,
        C = { fbIcon: i.default.staticUrl + "/mini/float/fd.png", close: i.default.staticUrl + "/mini/float/close.png", tabSel: i.default.staticUrl + "/mini/float/sel.png", bg: i.default.staticUrl + "/mini/float/bg.png", bg2: i.default.staticUrl + "/mini/float/bg2.png", tab0Btn0: i.default.staticUrl + "/mini/float/btnFzCode.png", tab1Btn0: i.default.staticUrl + "/mini/float/btnSGain.png", tab0Btn0_S: i.default.staticUrl + "/mini/float/bgGain2.png", tab0Btn1: i.default.staticUrl + "/mini/float/btnGain.png", btnFz: i.default.staticUrl + "/mini/float/btnFz.png", btnFzG: i.default.staticUrl + "/mini/float/btnFzG.png", btnC: i.default.staticUrl + "/mini/float/btnC.png", coinBg: i.default.staticUrl + "/mini/float/jb_bg.png", coin: i.default.staticUrl + "/mini/float/jb.png", head: i.default.staticUrl + "/mini/float/head.png", yellowBtnBg: i.default.staticUrl + "/mini/float/btn_yellow.png", czBtnBg: i.default.staticUrl + "/mini/float/btn_cz.png", offIcon: i.default.staticUrl + "/mini/float/off.png", oaIcon: i.default.staticUrl + "/mini/float/gzh.png", helpIcon: i.default.staticUrl + "/mini/float/fkwt.png", phoneIcon: i.default.staticUrl + "/mini/float/phone.png", qqIcon: i.default.staticUrl + "/mini/float/qq.png", lineImg: i.default.staticUrl + "/mini/float/xt.png", whiteTaskBg: i.default.staticUrl + "/mini/float/lbbg.png", rBtn: i.default.staticUrl + "/mini/float/btn_qw.png", upBtn: i.default.staticUrl + "/mini/float/btn_sj.png", addBtn: i.default.staticUrl + "/mini/float/btn_tj.png", bdBtn: i.default.staticUrl + "/mini/float/btn_bd.png", oaBtn: i.default.staticUrl + "/mini/float/btn_gz.png" },
        P = {},
        L = {};function E(e, t) {
      g.api.mpPayErrReport({ error_mp_id: e }, t);
    }GameGlobal.initFuBiao = function (e) {
      d = !0, e && (e = "string" == typeof e ? JSON.parse(e) : e, g = e);
    }, GameGlobal.showFuBiao = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;1 === t ? (h && e.removeChild(h.groupB), h = void 0, s = !1) : h && h.reRedener(), !s && d && (s = !0, GameGlobal.egret ? (c = "egret", m = egret.DisplayObjectContainer, f = egret.Bitmap, p = egret.TextField, v = egret.Shape, (w = new egret.ImageLoader()).crossOrigin = "anonymous", b = egret.Texture, y = egret.TouchEvent.TOUCH_TAP, _ = egret.TouchEvent.TOUCH_BEGIN, I = egret.TouchEvent.TOUCH_MOVE, k = egret.TouchEvent.TOUCH_END, x = egret.Event.COMPLETE, S = egret.IOErrorEvent.IO_ERROR, h = new r(e, e.stageWidth, e.stageHeight)) : GameGlobal.Laya ? (c = "Laya", m = laya.display.Sprite, f = laya.ui.Image, p = laya.ui.Label, v = laya.display.Sprite, w = Laya.loader, b = Laya.Texture, y = Laya.Event.CLICK, _ = Laya.Event.MOUSE_DOWN, I = Laya.Event.MOUSE_MOVE, k = Laya.Event.MOUSE_UP, x = Laya.Event.COMPLETE, S = Laya.Event.ERROR, h = new r(e, e.width, e.height)) : e.drawImage(fbCanvas, 0, 0));
    }, GameGlobal.hideFuBiao = function (e) {
      return !!h && (h.visible(h.groupB, e), !0);
    };
  }.call(t, a, t, e)) || (e.exports = n);
}, function (e, a, n) {
  "use strict";

  var o,
      r,
      i = n(0),
      s = (r = i) && r.__esModule ? r : { default: r };void 0 === (o = function (e, a, n, o) {
    var r = function () {
      function e(e, t) {
        for (var a = 0; a < t.length; a++) {
          var n = t[a];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
        }
      }return function (t, a, n) {
        return a && e(t.prototype, a), n && e(t, n), t;
      };
    }();function i(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }var d = { back: s.default.staticUrl + "/mini/complain/back.png", kefu: s.default.staticUrl + "/mini/complain/btnKeFu.png", add: s.default.staticUrl + "/mini/complain/icon_add.png", submit: s.default.staticUrl + "/mini/complain/submit.png", gou: s.default.staticUrl + "/mini/complain/gou.png", gameIco: "" },
        c = void 0,
        u = void 0,
        l = {};function g(e, t) {
      e && (e.visible = t);
    }function h(e, t, a, n, o) {
      var r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];e && (e.width = t, e.height = a, e.x = n, e.y = o, e.touchEnabled = r);
    }function m(e, t, a, n, o, r) {
      var i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 1,
          s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1,
          d = !(arguments.length > 8 && void 0 !== arguments[8]) || arguments[8];e && (e.width = t, e.height = a, e.x = n, e.y = o, 1 != i && (e.scaleX = i), 1 != s && (e.scaleY = s), f(e, r), e.touchEnabled = d);
    }function f(e, t) {
      e && (t ? (e.texture || (e.texture = new egret.Texture()), e.texture.bitmapData = t, e.$refreshImageData()) : e.source = null);
    }function p(e, t, a, n, o, r, i, s) {
      var d = arguments.length > 8 && void 0 !== arguments[8] && arguments[8],
          c = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0,
          u = arguments.length > 10 && void 0 !== arguments[10] ? arguments[10] : 0,
          l = !(arguments.length > 11 && void 0 !== arguments[11]) || arguments[11];e && (e.size = t, e.textAlign = n, e.verticalAlign = a, e.text = o, e.textColor = r, e.x = i, e.y = s, e.bold = d, c > 0 && (e.width = c), u > 0 && (e.height = u), e.touchEnabled = l);
    }function v(e, t, a, n, o, r, i) {
      var s = arguments.length > 7 && void 0 !== arguments[7] && arguments[7],
          d = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : -1,
          c = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : 0;e && (e.graphics.clear(), d >= 0 && e.graphics.lineStyle(d, c), e.graphics.beginFill(r, i), e.graphics.drawRect(t, a, n, o), e.graphics.endFill(), e.touchEnabled = s);
    }function w(e, t, a, n, o, r) {
      var i = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : -1,
          d = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;e && (e.graphics.clear(), s >= 0 && e.graphics.lineStyle(s, d), e.graphics.beginFill(o, r), e.graphics.drawCircle(t, a, n), e.graphics.endFill(), e.touchEnabled = i);
    }var b = function () {
      function e() {
        i(this, e), this.key = "";
      }return r(e, [{ key: "setItem", value: function (e, t, a, n) {
          var o = this;o.init(), o.key = n, o.arrow.visible = a, e && e.addChild(o.g1), o.txt.text = t;
        } }, { key: "setXY", value: function (e, t) {
          this.g1.x = e, this.g1.y = t;
        } }, { key: "removeFromP", value: function () {
          this.g1 && this.g1.parent && this.g1.parent.removeChild(this.g1);
        } }, { key: "init", value: function () {
          var e = this;if (!e.txt) {
            e.g1 = new k(), h(e.g1, 750, 92, 0, 0, !0), e.g1.addEventListener(P, e.touch, e);var t = new C();v(t, 0, 0, 750, 90, 16777215, 1, !1), e.g1.addChild(t);var a = new C();v(a, 0, 0, 750, 2, 15263976, 1, !1), e.g1.addChild(a), e.txt = new S(), p(e.txt, 32, "middle", "left", "请选择投诉原因", 3355443, 30, 0, !1, 0, 92, !1), e.g1.addChild(e.txt), e.arrow = new x(), m(e.arrow, 22, 36, 702, 31, l.back), e.g1.addChild(e.arrow);
          }
        } }, { key: "touch", value: function (e) {
          M && M.selectReason(this.key);
        } }]), e;
    }(),
        y = function () {
      function e(t, a, n) {
        i(this, e), this.stageW = 0, this.stageH = 0, this.curPageIndex = -1, this.curReasonK = "", this.loading = !1, this.loadTips = !1, this.curPk = "z", this.touSuItems = [], this.touSuPool = [], this.isSelEvidence = !1, this.tmpUploadImgs = {}, this.touSuImgs = [], this.touSuImgId = 0;var o = this;o.stageW = a, o.stageH = n, o.stage = t, o.group = new k(), o.group.width = 750, o.group.height = 1334, o.groupB = new k(), o.groupB.width = a, o.groupB.height = n, o.groupB.touchEnabled = !0, o.bgRect = new C(), v(o.bgRect, 0, 0, o.groupB.width, o.groupB.height, 16316664, 1, !1), o.groupB.addChild(o.bgRect), o.groupB.addChild(o.group);var r = +Math.min(a / 750, n / 1334).toFixed(2);o.group.touchEnabled = !1, o.group.scaleX = o.group.scaleY = r, o.group.x = (a - o.group.width * r) / 2, o.group.y = (n - o.group.height * r) / 2, t.addChild(o.groupB), o.imgLoader = new egret.ImageLoader(), o.imgLoader.crossOrigin = "anonymous";var s = [];for (var c in d) d[c] && s.push(c);s.length > 0 ? o.loadAssets(s, this.show, this) : this.show();
      }return r(e, [{ key: "loadAssets", value: function (e, t, a) {
          var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];this.loading || (this.loading = !0, this.imgLoader.addEventListener(L, this.loadSucc, this), this.imgLoader.addEventListener(E, this.loadFail, this), c = e, u = "", this.loadCb = t, this.loadCbThis = a, this.loadTips = n, this.loadAssetsPer());
        } }, { key: "loadAssetsPer", value: function () {
          c.length > 0 && (u = c.pop(), this.imgLoader.load(d[u]));
        } }, { key: "loadSucc", value: function (e) {
          e.currentTarget.data && (l[u] = e.currentTarget.data), c.length > 0 ? this.loadAssetsPer() : (this.imgLoader.removeEventListener(L, this.loadSucc, this), this.imgLoader.removeEventListener(E, this.loadFail, this), this.loading && (this.loading = !1, this.loadCb && this.loadCb.call(this.loadCbThis)));
        } }, { key: "loadFail", value: function (e) {
          l[u] = null, this.loadTips && t.wx_tips("网络差，加载失败"), console.warn("loadFail--\x3e", u), c.length > 0 ? this.loadAssetsPer() : (this.imgLoader.removeEventListener(L, this.loadSucc, this), this.imgLoader.removeEventListener(E, this.loadFail, this), this.loading && (this.loading = !1, this.loadCb && this.loadCb.call(this.loadCbThis)));
        } }, { key: "show", value: function () {
          this.init(), this.gotoView(0);
        } }, { key: "gotoView", value: function (e) {
          var t = this;e != t.curPageIndex && (t.curPageIndex = e, t.touSuRedener(F));
        } }, { key: "init", value: function () {
          var e = this;e.g1 = new k(), h(e.g1, 750, 1334, 0, 0), e.group.addChild(e.g1), e.gameIcon = new x(), m(e.gameIcon, 140, 140, 305, 252, l.gameIco, 1, 1, !1), e.g1.addChild(e.gameIcon);var t = new C();w(t, 376, 322, 70, 14211288, 1, !1), e.g1.addChild(t), e.gameIcon.mask = t, e.tip = new S(), p(e.tip, 40, "middle", "center", "", 3355443, 0, 440, !1, 750), e.g1.addChild(e.tip), e.tip0 = new S(), p(e.tip0, 28, "middle", "center", "", 13421772, 0, 500, !1, 750), e.g1.addChild(e.tip0), e.tip1 = new S(), p(e.tip1, 28, "middle", "center", "开发者将在完成更新后尽快恢复服务，请稍后", 13421772, 0, 540, !1, 750, 0, !0), e.g1.addChild(e.tip1), e.tip2 = new S(), p(e.tip2, 28, "middle", "center", "投诉与反馈", 8686748, 0, 1194, !1, 750), e.g1.addChild(e.tip2), e.tip2.addEventListener(P, e.click, e), e.g2 = new k(), h(e.g2, 750, 1334, 0, 0), e.group.addChild(e.g2);var a = new C();v(a, 0, 0, 750, 88, 16777215, 1), e.g2.addChild(a), e.touSuItemG = new k(), h(e.touSuItemG, 750, 1156, 0, 178), e.g2.addChild(e.touSuItemG), e.tip3 = new S(), p(e.tip3, 28, "middle", "left", "请选择投诉原因", 10066329, 30, 88, !1, 0, 90), e.g2.addChild(e.tip3), e.tip8 = new S(), p(e.tip8, 28, "middle", "center", "如遇到问题，联系开发客服", 8686748, 0, 1218, !1, 750, 0), e.g2.addChild(e.tip8), e.tip9 = new S(), p(e.tip9, 28, "middle", "center", "QQ：" + R.customer_service_qq + "      电话：" + R.customer_service_tel, 8686748, 0, 1274, !1, 750, 0), e.g2.addChild(e.tip9), e.g3 = new k(), h(e.g3, 750, 1334, 0, 0), e.group.addChild(e.g3);var n = new C();v(n, 0, 0, 750, 88, 16777215, 1), e.g3.addChild(n), e.tip4 = new S(), p(e.tip4, 28, "middle", "left", "请选择投诉原因", 10066329, 30, 88, !1, 0, 90), e.g3.addChild(e.tip4);var o = new C();v(o, -5, 178, 760, 118, 16777215, 1, !1, 1, 15263976), e.g3.addChild(o), e.gameIco = new x(), m(e.gameIco, 64, 64, 28, 205, l.gameIco, 1, 1, !1), e.g3.addChild(e.gameIco), e.gameIcoR = new C(), w(e.gameIcoR, 60, 237, 32, 16777215, 1, !1), e.g3.addChild(e.gameIcoR), e.gameIco.mask = e.gameIcoR, e.tip5 = new S(), p(e.tip5, 32, "middle", "left", "投诉描述", 10066329, 30, 296, !1, 0, 90, !1), e.g3.addChild(e.tip5), e.gameName = new S(), p(e.gameName, 36, "middle", "left", R.name, 3355443, 134, 192, !1, 0, 90), e.g3.addChild(e.gameName);var r = new C();v(r, -5, 386, 760, 596, 16777215, 1, !1, 2, 15263976), e.g3.addChild(r);var i = new C();v(i, 20, 476, 710, 2, 15263976, 1, !1), e.g3.addChild(i);var s = new C();v(s, 20, 722, 710, 2, 15263976, 1, !1), e.g3.addChild(s), e.reasonDesc = new S(), p(e.reasonDesc, 32, "top", "left", "", 3355443, 30, 486, !1, 690, 230), e.reasonDesc.type = T, e.reasonDesc.maxChars = 100, e.reasonDesc.multiline = !0, e.reasonDesc.wordWrap = !0, e.reasonDesc.lineSpacing = 2, e.g3.addChild(e.reasonDesc), e.reasonLab = new S(), p(e.reasonLab, 32, "middle", "left", O[this.curReasonK] ? O[this.curReasonK].txt : "", 3355443, 30, 386, !1, 0, 90), e.g3.addChild(e.reasonLab), e.tip6 = new S(), p(e.tip6, 32, "middle", "left", "证据截图", 10066329, 30, 719, !1, 0, 90), e.g3.addChild(e.tip6), e.descNumLab = new S(), p(e.descNumLab, 32, "middle", "right", "0/100", 11842740, 511, 679, !1, 200, 0), e.g3.addChild(e.descNumLab), e.pcNumLab = new S(), p(e.pcNumLab, 32, "middle", "right", "0/2", 11842740, 511, 748, !1, 200, 0), e.g3.addChild(e.pcNumLab), e.tip7 = new S(), p(e.tip7, 28, "middle", "left", "允许微信使用小程序当前页面的数据作为投诉证据", 11842740, 70, 1008), e.g3.addChild(e.tip7), e.selRect = new C(), v(e.selRect, 30, 1008, 28, 28, 16777215, 1, !0, 1, 4473924), e.g3.addChild(e.selRect), e.gouImg = new x(), m(e.gouImg, 28, 28, 30, 1008, l.gou, 1, 1, !0), e.g3.addChild(e.gouImg), e.pcImg = new x(), m(e.pcImg, 160, 160, 30, 806, l.add, 1, 1, !0), e.g3.addChild(e.pcImg), e.pcImg2 = new x(), m(e.pcImg2, 160, 160, 210, 806, null, 1, 1, !0), e.pcImg2.touchEnabled = !1, e.g3.addChild(e.pcImg2), e.submitImg = new x(), m(e.submitImg, 694, 96, 28, 1154, l.submit, 1, 1, !0), e.g3.addChild(e.submitImg), e.selRect.addEventListener(P, e.click, e), e.gouImg.addEventListener(P, e.click, e), e.pcImg.addEventListener(P, e.click, e), e.pcImg2.addEventListener(P, e.click, e), e.submitImg.addEventListener(P, e.click, e), e.reasonDesc.addEventListener(G, e.txtChange, e), e.backImg = new x(), m(e.backImg, 22, 36, 46, 26, l.back, -1), e.group.addChild(e.backImg), e.backImg.addEventListener(P, e.click, e);
        } }, { key: "setReasonItems", value: function (e) {
          var t = this,
              a = 0;if (t.curPk != e) {
            for (var n in t.curPk = e, O) if (O[n].pKey == t.curPk) {
              var o = void 0;(a += 1) <= t.touSuItems.length ? o = t.touSuItems[a - 1] : (o = t.getReasonItem(), t.touSuItems.push(o)), o && o.setItem(t.touSuItemG, O[n].txt, O[n].hasSub, O[n].key);
            }if (a < t.touSuItems.length) for (var r = t.touSuItems.length - a, i = 0; i < r; i++) t.recycleReasonItem(t.touSuItems.pop());for (var s = 0; s < t.touSuItems.length; s++) t.touSuItems[s].setXY(0, 92 * s);t.tip8.y = t.touSuItemG.y + 92 * t.touSuItemG.numChildren + 68, t.tip9.y = t.tip8.y + 56;
          }
        } }, { key: "getReasonItem", value: function () {
          return this.touSuPool.length > 0 ? this.touSuPool.pop() : new b();
        } }, { key: "recycleReasonItem", value: function (e) {
          e && (e.removeFromP(), this.touSuPool.push(e));
        } }, { key: "selectReason", value: function (e) {
          var t = O[e];t ? t.hasSub ? this.setReasonItems(t.key) : (this.curReasonK = e, this.gotoView(2)) : console.warn("不存在的投诉原因:", e);
        } }, { key: "touSuRedener", value: function (e) {
          var t = this;switch (g(t.backImg, 0 != t.curPageIndex), g(t.g1, 0 == t.curPageIndex), g(t.g2, 1 == t.curPageIndex), g(t.g3, 2 == t.curPageIndex), v(t.bgRect, 0, 0, t.groupB.width, t.groupB.height, 0 == t.curPageIndex ? 16777215 : 16316664, 1, !1), t.curPageIndex) {case 0:
              t.tip.text = R.name + "小程序系统更新维护中", t.tip0.text = "预计恢复时间：" + R.restore_time;break;case 1:
              t.setReasonItems(e);break;case 2:
              var a = O[this.curReasonK];t.reasonLab.text = a ? a.txt : "", t.reasonDesc.text = "", t.descNumLab.text = "0/100", t.pcNumLab.text = "0/2", g(t.gouImg, t.isSelEvidence);var n = t._updateComplieImg(t.pcImg, d.add, ""),
                  o = t._updateComplieImg(t.pcImg2, "", "");if (n || o) {
                var r = [];n && d[n] && r.push(n), o && d[o] && r.push(o), r && this.loadAssets(r, this._updateComplieImgShow, this, !0);
              } else this._updateComplieImgShow();}
        } }, { key: "_updateComplieImg", value: function (e, t, a) {
          if (d[e.hashCode + "_img"] != a && (d[e.hashCode + "_img"] = a), d[e.hashCode + "_pre"] != t) if (d[e.hashCode + "_pre"] = t, t == d.add ? l[e.hashCode + "_pre"] = l.add : l[e.hashCode + "_pre"] = null, l[e.hashCode + "_pre"]) f(e, l[e.hashCode + "_pre"]);else {
            if ("" != t) return e.hashCode + "_pre";f(e, null);
          }return "";
        } }, { key: "_updateComplieImgShow", value: function () {
          var e = 0,
              t = l[this.pcImg.hashCode + "_pre"],
              a = l[this.pcImg2.hashCode + "_pre"];t && (e += 1), a && (e += 1), a = a || (t && t != l.add ? l.add : null), t = t || l.add, f(this.pcImg, t), f(this.pcImg2, a), this.pcNumLab.text = Math.min(e, 2) + "/2", this.pcImg2.touchEnabled = e >= 1;
        } }, { key: "click", value: function (e) {
          var t,
              a = this,
              n = this;switch (e.currentTarget) {case n.tip2:
              n.gotoView(1);break;case n.selRect:case n.gouImg:
              n.isSelEvidence = !n.isSelEvidence, g(n.gouImg, n.isSelEvidence);break;case n.pcImg:
              var o = n.pcImg.hashCode.toString();n.wx_chooseImage(1, R.uploadUrl, o).then(function (e) {
                if (e) {
                  var t = n._updateComplieImg(n.pcImg, e.preview_url, e.url);t && d[t] && n.loadAssets([t], n._updateComplieImgShow, a, !0);
                }
              });break;case n.pcImg2:
              var r = n.pcImg2.hashCode.toString();n.wx_chooseImage(1, R.uploadUrl, r).then(function (e) {
                if (e) {
                  var t = n._updateComplieImg(n.pcImg2, e.preview_url, e.url);t && d[t] && n.loadAssets([t], n._updateComplieImgShow, a, !0);
                }
              });break;case n.submitImg:
              var i = d[n.pcImg.hashCode + "_img"],
                  s = d[n.pcImg2.hashCode + "_img"];i = s ? i ? i + "," + s : s : i || "", t = { title: n.reasonLab.text, content: n.reasonDesc.text, image: i }, console.warn("截屏-提交投诉"), R.api.complainReport(t), n.wx_tips("提交成功"), n.gotoView(0);break;case n.backImg:
              if (2 === n.curPageIndex) this.gotoView(1);else if (1 == n.curPageIndex) if (n.curPk == F) this.gotoView(0);else {
                var c = O[n.curPk];n.touSuRedener(c.pKey);
              }}
        } }, { key: "txtChange", value: function (e) {
          var t = Math.min(e.target.text.length, 100);this.descNumLab.text = t + "/100";
        } }, { key: "wx_tips", value: function (e) {
          wx.showToast && wx.showToast({ title: e });
        } }, { key: "wx_chooseImage", value: function (e, t, a) {
          var n = this;return new Promise(function (o, r) {
            wx.chooseImage({ count: e, sizeType: ["compressed"], sourceType: ["album", "camera"], success: function (e) {
                var i = e.tempFilePaths[0];if (wx.getSystemInfoSync().model.indexOf("iPhone") >= 0) return i = e.tempFilePaths[0], n.wx_uploadFile(t, i, a).then(function (e) {
                  e && o(e);
                });n.tmpChooseCanvas || (n.tmpChooseCanvas = wx.createCanvas(), n.tmpChooseContext = n.tmpChooseCanvas.getContext("2d"), n.tmpChooseImg = wx.createImage(), n.tmpChooseCanvas.width = n.tmpChooseCanvas.height = 160, n.tmpChooseImg.width = n.tmpChooseImg.height = 160), n.tmpChooseImg.onload = function () {
                  n.tmpChooseImg.onload = null, n.tmpChooseImg.onerror = null, n.tmpChooseImg.onabort = null, n.tmpChooseContext.drawImage(n.tmpChooseImg, 0, 0, 160, 160);var e = n.tmpChooseCanvas.toTempFilePathSync({ x: 0, y: 0, width: 160, height: 160 });return i = e, n.wx_uploadFile(t, i, a).then(function (e) {
                    e && o(e);
                  });
                }, n.tmpChooseImg.onerror = function () {
                  n.tmpChooseImg.onload = null, n.tmpChooseImg.onerror = null, n.tmpChooseImg.onabort = null, n.wx_tips("图片尺寸过大"), console.warn("uploadFile加载图片失败：", t), r();
                }, n.tmpChooseImg.onabort = function () {
                  n.tmpChooseImg.onload = null, n.tmpChooseImg.onerror = null, n.tmpChooseImg.onabort = null, r();
                }, n.tmpChooseImg.src = e.tempFilePaths[0];
              }, fail: function () {
                console.error("chooseImage接口调用失败"), r();
              } });
          });
        } }, { key: "wx_uploadFile", value: function (e, t, a) {
          var n = this;return new Promise(function (o, r) {
            var i = { url: e, filePath: t, name: "image", formData: { id: a }, success: function (e) {
                if (console.info("uploadFileSucc:", e.data, e.statusCode), "string" == typeof e.data) {
                  if (e.data.indexOf("<!") >= 0) n.wx_tips("加载失败"), r();else {
                    var t = JSON.parse(e.data);o(t.data);
                  }
                } else o(e.data.data);
              }, fail: function (e) {
                console.info("uploadFileFail:==>", e), r();
              } };wx.uploadFile(i);
          });
        } }]), e;
    }(),
        _ = !1,
        I = !1,
        k = void 0,
        x = void 0,
        S = void 0,
        C = void 0,
        P = void 0,
        L = void 0,
        E = void 0,
        T = void 0,
        G = void 0,
        M = void 0,
        R = { show: !1 },
        O = {},
        F = "";function U(e) {
      M || GameGlobal.egret && (k = egret.DisplayObjectContainer, x = egret.Bitmap, S = egret.TextField, C = egret.Shape, egret.ImageLoader, egret.Texture, P = egret.TouchEvent.TOUCH_TAP, L = egret.Event.COMPLETE, E = egret.IOErrorEvent.IO_ERROR, T = egret.TextFieldType.INPUT, G = egret.Event.CHANGE, M = new y(e, e.stageWidth, e.stageHeight));
    }GameGlobal.initTouSuInfo = function (e, t) {
      console.warn("initTouSuInfo=", e, t), I = !0, t && (t = "string" == typeof t ? JSON.parent(t) : t, (R = t).icon && (d.gameIco = R.icon), t.list && function e(t, a) {
        var n = Object.keys(t);for (var o in n) {
          var r = t[n[o]],
              i = a ? a + "_" + o : o.toString(),
              s = r.item && r.item.length > 0;O[i] = { index: o, key: i, pKey: a, txt: r.text, hasSub: s }, s && e(r.item, i);
        }
      }(t.list, F)), R.show = e;
    }, GameGlobal.showTouSu = function (e) {
      I && (_ || (_ = !0, wx.onUserCaptureScreen && wx.onUserCaptureScreen(function () {
        R.show ? (U(e), g(M.groupB, !0)) : (console.warn("截屏-上传投诉"), R.api.memberFreeze({}));
      })), console.warn("touSuInfo.show", R.show), R.show && (U(e), g(M.groupB, !0)));
    };
  }.call(a, n, a, e)) || (e.exports = o);
}]);