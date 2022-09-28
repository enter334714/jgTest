"use strict";

var f = wx.$B;
Object.defineProperty(exports, "__esModule", { value: !0 });var _createClass = function () {
  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }return function (e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e;
  };
}();function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}var instance = void 0,
    LocalBuffer = function () {
  function e() {
    if (_classCallCheck(this, e), instance) return instance;
  }return _createClass(e, [{ key: "setStorage", value: function (e, t) {
      wx.setStorageSync(e, t);
    } }, { key: "getStorage", value: function (e) {
      return wx.getStorageSync(e);
    } }]), e;
}();exports.default = LocalBuffer;