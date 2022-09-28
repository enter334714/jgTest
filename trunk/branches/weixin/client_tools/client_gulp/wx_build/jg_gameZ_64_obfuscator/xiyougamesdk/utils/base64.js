"use strict";

var f = wx.$B;
Object.defineProperty(exports, "__esModule", { value: !0 });var _createClass = function () {
  function n(r, e) {
    for (var t = 0; t < e.length; t++) {
      var n = e[t];n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
    }
  }return function (r, e, t) {
    return e && n(r.prototype, e), t && n(r, t), r;
  };
}();function _classCallCheck(r, e) {
  if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function");
}var instance = void 0,
    Event = function () {
  function r() {
    if (_classCallCheck(this, r), instance) return instance;(instance = this)._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  }return _createClass(r, [{ key: "_utf8_encode", value: function (r) {
      r = r.replace(/\r\n/g, "\n");for (var e = "", t = 0; t < r.length; t++) {
        var n = r.charCodeAt(t);n < 128 ? e += String.fromCharCode(n) : e = 127 < n && n < 2048 ? (e += String.fromCharCode(n >> 6 | 192)) + String.fromCharCode(63 & n | 128) : (e = (e += String.fromCharCode(n >> 12 | 224)) + String.fromCharCode(n >> 6 & 63 | 128)) + String.fromCharCode(63 & n | 128);
      }return e;
    } }, { key: "_utf8_decode", value: function (r) {
      var e,
          t = "",
          n = 0;for (c1 = c2 = 0; n < r.length;) (e = r.charCodeAt(n)) < 128 ? (t += String.fromCharCode(e), n++) : 191 < e && e < 224 ? (c2 = r.charCodeAt(n + 1), t += String.fromCharCode((31 & e) << 6 | 63 & c2), n += 2) : (c2 = r.charCodeAt(n + 1), c3 = r.charCodeAt(n + 2), t += String.fromCharCode((15 & e) << 12 | (63 & c2) << 6 | 63 & c3), n += 3);return t;
    } }, { key: "encode", value: function (r) {
      var e,
          t,
          n,
          a,
          o,
          c,
          i = "",
          h = 0;for (r = this._utf8_encode(r); h < r.length;) n = (e = r.charCodeAt(h++)) >> 2, a = (3 & e) << 4 | (e = r.charCodeAt(h++)) >> 4, o = (15 & e) << 2 | (t = r.charCodeAt(h++)) >> 6, c = 63 & t, isNaN(e) ? o = c = 64 : isNaN(t) && (c = 64), i = i + this._keyStr.charAt(n) + this._keyStr.charAt(a) + this._keyStr.charAt(o) + this._keyStr.charAt(c);return i;
    } }, { key: "decode", value: function (r) {
      var e,
          t,
          n,
          a,
          o,
          c,
          i = "",
          h = 0;for (r = r.replace(/[^A-Za-z0-9\+\/\=]/g, ""); h < r.length;) n = this._keyStr.indexOf(r.charAt(h++)), e = (15 & (a = this._keyStr.indexOf(r.charAt(h++)))) << 4 | (o = this._keyStr.indexOf(r.charAt(h++))) >> 2, t = (3 & o) << 6 | (c = this._keyStr.indexOf(r.charAt(h++))), i += String.fromCharCode(n << 2 | a >> 4), 64 != o && (i += String.fromCharCode(e)), 64 != c && (i += String.fromCharCode(t));return i = this._utf8_decode(i);
    } }]), r;
}();exports.default = Event;