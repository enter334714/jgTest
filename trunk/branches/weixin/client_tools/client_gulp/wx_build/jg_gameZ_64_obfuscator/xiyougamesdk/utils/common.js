"use strict";

var f = wx.$B;
Object.defineProperty(exports, "__esModule", { value: !0 });var _createClass = function () {
  function o(e, n) {
    for (var t = 0; t < n.length; t++) {
      var o = n[t];o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o);
    }
  }return function (e, n, t) {
    return n && o(e.prototype, n), t && o(e, t), e;
  };
}(),
    _config = require("../config"),
    _config2 = _interopRequireDefault(_config),
    _constant = require("./constant"),
    _constant2 = _interopRequireDefault(_constant);function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}function _classCallCheck(e, n) {
  if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
}var MD5 = require("./md5"),
    urlDebug = !0,
    debug = !1,
    HOST_DEUBG = "https://api-sandbox.xiyousdk.com/",
    HOST_RELEASE = "https://api.xiyousdk.com/",
    appKey = null,
    sessionId = null,
    Common = function () {
  function s() {
    _classCallCheck(this, s);
  }return _createClass(s, [{ key: "debugStatus", set: function (e) {
      debug = !!e;
    }, get: function () {
      return debug;
    } }], [{ key: "xylog", value: function () {
      debug && console.log && ("function" == typeof console.log.apply ? console.log.apply(console, arguments) : console.log(arguments[0]));
    } }, { key: "getDeviceId", value: function () {
      var e = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var n = 16 * Math.random() | 0;return ("x" == e ? n : 3 & n | 8).toString(16);
      }),
          n = new RegExp("-", "g");return e = e.replace(n, "");
    } }, { key: "serHost", value: function () {
      return urlDebug ? HOST_DEUBG : HOST_RELEASE;
    } }, { key: "wxRequest", value: function (e, n, t, o, u) {
      var t = s.buildSortMD5Sign(t),
          r = void 0,
          r = -1 != e.indexOf("http://") || -1 != e.indexOf("https://") ? e : (_constant2.default.debug() ? HOST_DEUBG : HOST_RELEASE) + e;s.xylog(r), s.xylog("md5data:", t), wx.request({ url: r, header: { "content-type": "application/x-www-form-urlencoded" }, method: n, data: t, success: function (e) {
          o(e);
        }, fail: function (e) {
          u(e);
        } });
    } }, { key: "buildSortMD5Sign", value: function (e) {
      for (var n = Object.keys(e).sort(), t = {}, o = 0; o < n.length; o++) t[n[o]] = e[n[o]];for (var u = Object.keys(t).sort(), r = "", o = 0; o < u.length; o++) r += u[o] + "=" + t[u[o]] + "&";var r = r.substring(0, r.length - 1),
          a = new _config2.default();return s.xylog("config :", a.appKey), r += a.appKey, s.xylog("sign:", r), console.log(r), t.sign = MD5.hex_md5(r), t.sign_type = "MD5", t;
    } }, { key: "respJson", value: function (e, n, t) {
      return { msg: e, status: n ? s.Status().Success : s.Status().Fail, data: t };
    } }, { key: "compare", value: function (t) {
      return function (e, n) {
        e = e[t], n = n[t];return e < n ? -1 : n < e ? 1 : 0;
      };
    } }, { key: "Status", value: function () {
      return { Success: 1, Fail: 0, Pay_Success: 9, Pay_Fail: 10, Pay_Wait: 11, Pay_Cancel: 12, Pay_Qrcode: 13 };
    } }, { key: "isRealNum", value: function (e) {
      return "" !== e && null != e && !isNaN(e);
    } }, { key: "isStrEmpty", value: function (e) {
      return void 0 === e || null == e || "" == e;
    } }, { key: "getSessionId", value: function () {
      var e, n;return null === sessionId && (e = s.getDeviceId(), n = 899999 * Math.random() + 1e5, n = parseInt(n, 10), sessionId = MD5.hex_md5(e + n).toLowerCase()), sessionId;
    } }]), s;
}();exports.default = Common;