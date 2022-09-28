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
    UserInfo = function () {
  function e() {
    if (_classCallCheck(this, e), instance) return instance;(instance = this).parameter = { uid: "", openid: "", token: "", whiteip: !0 };
  }return _createClass(e, [{ key: "uid", set: function (e) {
      this.parameter.uid = e;
    }, get: function () {
      return this.parameter.uid;
    } }, { key: "openid", set: function (e) {
      this.parameter.openid = e;
    }, get: function () {
      return this.parameter.openid;
    } }, { key: "token", set: function (e) {
      this.parameter.token = e;
    }, get: function () {
      return this.parameter.token;
    } }, { key: "whiteip", set: function (e) {
      this.parameter.whiteip = "1" == e;
    }, get: function () {
      return this.parameter.whiteip;
    } }]), e;
}();exports.default = UserInfo;