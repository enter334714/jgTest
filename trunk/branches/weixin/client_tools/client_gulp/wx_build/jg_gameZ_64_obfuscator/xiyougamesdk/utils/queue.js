"use strict";

var f = wx.$B;
Object.defineProperty(exports, "__esModule", { value: !0 });var _createClass = function () {
  function i(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }return function (e, t, n) {
    return t && i(e.prototype, t), n && i(e, n), e;
  };
}();function _classCallCheck(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}var items = new WeakMap(),
    Queue = function () {
  function e() {
    _classCallCheck(this, e), items.set(this, []);
  }return _createClass(e, [{ key: "enqueue", value: function () {
      var e = items.get(this);e.push.apply(e, arguments);
    } }, { key: "dequeue", value: function () {
      return items.get(this).shift();
    } }, { key: "front", value: function () {
      return items.get(this)[0];
    } }, { key: "isEmpty", value: function () {
      return 0 == items.get(this).length;
    } }, { key: "size", value: function () {
      return items.get(this).length;
    } }, { key: "clear", value: function () {
      items.set(this, []);
    } }, { key: "print", value: function () {
      console.log(this.toString());
    } }, { key: "toString", value: function () {
      return items.get(this).toString();
    } }]), e;
}();exports.default = Queue;