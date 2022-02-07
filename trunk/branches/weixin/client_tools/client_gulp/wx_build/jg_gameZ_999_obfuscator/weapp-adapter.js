var H = wx.$F;
var H = wx.$F;!function (n) {
  var r = {};function __webpack_require__(e) {
    if (r[e]) return r[e].exports;var t = r[e] = { exports: {}, id: e, loaded: !1 };return n[e].call(t.exports, t, t.exports, __webpack_require__), t.loaded = !0, t.exports;
  }__webpack_require__.m = n, __webpack_require__.c = r, __webpack_require__.p = "", __webpack_require__(0);
}([function (e, t, n) {
  "use strict";

  var a = function (e) {
    {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);return t.default = e, t;
    }
  }(n(1));var r = n(5);(o = r) && o.__esModule;var o;var i = GameGlobal;GameGlobal.__isAdapterInjected || (GameGlobal.__isAdapterInjected = !0, function () {
    if (a.addEventListener = function (e, t) {
      a.document.addEventListener(e, t);
    }, a.removeEventListener = function (e, t) {
      a.document.removeEventListener(e, t);
    }, a.canvas && (a.canvas.addEventListener = a.addEventListener, a.canvas.removeEventListener = a.removeEventListener), "devtools" === wx.getSystemInfoSync().platform) {
      for (var e in a) {
        var t = Object.getOwnPropertyDescriptor(i, e);t && !0 !== t.configurable || Object.defineProperty(window, e, { value: a[e] });
      }for (var n in a.document) {
        var r = Object.getOwnPropertyDescriptor(i.document, n);r && !0 !== r.configurable || Object.defineProperty(i.document, n, { value: a.document[n] });
      }window.parent = window;
    } else {
      for (var o in a) i[o] = a[o];i.window = a, window = i, window.top = window.parent = window;
    }
  }());
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 }), t.cancelAnimationFrame = t.requestAnimationFrame = t.clearInterval = t.clearTimeout = t.setInterval = t.setTimeout = t.canvas = t.location = t.localStorage = t.HTMLElement = t.FileReader = t.Audio = t.Image = t.WebSocket = t.XMLHttpRequest = t.navigator = t.document = void 0;var r = n(2);Object.keys(r).forEach(function (e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, { enumerable: !0, get: function () {
        return r[e];
      } });
  });var o = n(4);Object.keys(o).forEach(function (e) {
    "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, { enumerable: !0, get: function () {
        return o[e];
      } });
  });var a = _interopRequireDefault(n(10));var i = _interopRequireDefault(n(11));var u = _interopRequireDefault(n(18));var l = _interopRequireDefault(n(19));var c = _interopRequireDefault(n(20));var s = _interopRequireDefault(n(12));var f = _interopRequireDefault(n(13));var d = _interopRequireDefault(n(21));var p = _interopRequireDefault(n(5));var h = _interopRequireDefault(n(22));n = _interopRequireDefault(n(23));function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }t.document = i.default, t.navigator = u.default, t.XMLHttpRequest = l.default, t.WebSocket = c.default, t.Image = s.default, t.Audio = f.default, t.FileReader = d.default, t.HTMLElement = p.default, t.localStorage = h.default, t.location = n.default;a = new a.default();t.canvas = a, t.setTimeout = setTimeout, t.setInterval = setInterval, t.clearTimeout = clearTimeout, t.clearInterval = clearInterval, t.requestAnimationFrame = requestAnimationFrame, t.cancelAnimationFrame = cancelAnimationFrame;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 }), t.performance = t.ontouchend = t.ontouchmove = t.ontouchstart = t.screen = t.devicePixelRatio = t.innerHeight = t.innerWidth = void 0;var r = n(3);var o = (a = r) && a.__esModule ? a : { default: a };var a;var i = wx.getSystemInfoSync(),
      u = i.screenWidth,
      n = i.screenHeight,
      i = i.devicePixelRatio;u = t.innerWidth = u;n = t.innerHeight = n;t.devicePixelRatio = i;t.screen = { availWidth: u, availHeight: n };t.ontouchstart = null;t.ontouchmove = null;t.ontouchend = null;t.performance = o.default;
}, function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var n = void 0;var r, o, a, i;wx.getPerformance && (r = wx.getSystemInfoSync().platform, o = wx.getPerformance(), a = o.now(), i = Object.assign({}, o, { now: function () {
      return (o.now() - a) / 1e3;
    } }), n = "devtools" === r ? o : i), t.default = n;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 }), t.HTMLCanvasElement = t.HTMLImageElement = void 0;var r = n(5);n = (o = r) && o.__esModule ? o : { default: o };var o;function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }function _possibleConstructorReturn(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
  }function _inherits(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  }t.HTMLImageElement = (_inherits(HTMLImageElement, n.default), HTMLImageElement);function HTMLImageElement() {
    return _classCallCheck(this, HTMLImageElement), _possibleConstructorReturn(this, (HTMLImageElement.__proto__ || Object.getPrototypeOf(HTMLImageElement)).call(this, "img"));
  }t.HTMLCanvasElement = (_inherits(HTMLCanvasElement, n.default), HTMLCanvasElement);function HTMLCanvasElement() {
    return _classCallCheck(this, HTMLCanvasElement), _possibleConstructorReturn(this, (HTMLCanvasElement.__proto__ || Object.getPrototypeOf(HTMLCanvasElement)).call(this, "canvas"));
  }
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var r = function (e, t, n) {
    return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
  };function defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }var o = n(6);var a = (i = o) && i.__esModule ? i : { default: i };var i;var u = n(9);var l = n(2);(function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  })(HTMLElement, a.default), r(HTMLElement, [{ key: "setAttribute", value: function (e, t) {
      this[e] = t;
    } }, { key: "getAttribute", value: function (e) {
      return this[e];
    } }, { key: "getBoundingClientRect", value: function () {
      return { top: 0, left: 0, width: l.innerWidth, height: l.innerHeight };
    } }, { key: "focus", value: function () {} }, { key: "clientWidth", get: function () {
      var e = parseInt(this.style.fontSize, 10) * this.innerHTML.length;return Number.isNaN(e) ? 0 : e;
    } }, { key: "clientHeight", get: function () {
      var e = parseInt(this.style.fontSize, 10);return Number.isNaN(e) ? 0 : e;
    } }]), r = HTMLElement;function HTMLElement() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";!function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, HTMLElement);var t = function (e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }(this, (HTMLElement.__proto__ || Object.getPrototypeOf(HTMLElement)).call(this));return t.className = "", t.childern = [], t.style = { width: l.innerWidth + "px", height: l.innerHeight + "px" }, t.insertBefore = u.noop, t.innerHTML = "", t.tagName = e.toUpperCase(), t;
  }t.default = r;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var r = n(7);var o;(function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  })(ELement, ((o = r) && o.__esModule ? o : { default: o }).default), n = ELement;function ELement() {
    !function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, ELement);var e = function (e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }(this, (ELement.__proto__ || Object.getPrototypeOf(ELement)).call(this));return e.className = "", e.children = [], e;
  }t.default = n;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var r = function (e, t, n) {
    return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
  };function defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }var o = n(8);var a;(function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  })(Node, ((a = o) && a.__esModule ? a : { default: a }).default), r(Node, [{ key: "appendChild", value: function (e) {
      if (!(e instanceof Node)) throw new TypeError("Failed to executed 'appendChild' on 'Node': parameter 1 is not of type 'Node'.");this.childNodes.push(e);
    } }, { key: "cloneNode", value: function () {
      var e = Object.create(this);return Object.assign(e, this), e;
    } }, { key: "removeChild", value: function (t) {
      var e = this.childNodes.findIndex(function (e) {
        return e === t;
      });return -1 < e ? this.childNodes.splice(e, 1) : null;
    } }]), r = Node;function Node() {
    !function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, Node);var e = function (e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this));return e.childNodes = [], e;
  }t.default = r;
}, function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var n = function (e, t, n) {
    return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
  };function defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }var o = new WeakMap();n(EventTarget, [{ key: "addEventListener", value: function (e, t) {
      var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};var r = o.get(this);r || o.set(this, r = {}), r[e] || (r[e] = []), r[e].push(t), n.capture && console.warn("EventTarget.addEventListener: options.capture is not implemented."), n.once && console.warn("EventTarget.addEventListener: options.once is not implemented."), n.passive && console.warn("EventTarget.addEventListener: options.passive is not implemented.");
    } }, { key: "removeEventListener", value: function (e, t) {
      var n = o.get(this)[e];if (n && 0 < n.length) for (var r = n.length; r--;) if (n[r] === t) {
        n.splice(r, 1);break;
      }
    } }, { key: "dispatchEvent", value: function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};var t = o.get(this)[e.type];if (t) for (var n = 0; n < t.length; n++) t[n](e);
    } }]), n = EventTarget;function EventTarget() {
    !function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, EventTarget), o.set(this, {});
  }t.default = n;
}, function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 }), t.noop = function () {};
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function () {
    var e = wx.createCanvas();e.type = "canvas", e.__proto__.__proto__ = new r.default("canvas");e.getContext;return e.getBoundingClientRect = function () {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    }, e;
  };n(4);var r = _interopRequireDefault(n(5));_interopRequireDefault(n(11));function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var r = function (e) {
    {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);return t.default = e, t;
    }
  }(n(1));var o = _interopRequireDefault(n(5));var a = _interopRequireDefault(n(12));var i = _interopRequireDefault(n(13));var u = _interopRequireDefault(n(10));function _interopRequireDefault(e) {
    return e && e.__esModule ? e : { default: e };
  }n(16);var l = {};var c = { readyState: "complete", visibilityState: "visible", documentElement: r, hidden: !1, style: {}, location: r.location, ontouchstart: null, ontouchmove: null, ontouchend: null, head: new o.default("head"), body: new o.default("body"), createElement: function (e) {
      return "canvas" === e ? new u.default() : "audio" === e ? new i.default() : "img" === e ? new a.default() : new o.default(e);
    }, getElementById: function (e) {
      return e === r.canvas.id ? r.canvas : null;
    }, getElementsByTagName: function (e) {
      return "head" === e ? [c.head] : "body" === e ? [c.body] : "canvas" === e ? [r.canvas] : [];
    }, getElementsByName: function (e) {
      return "head" === e ? [c.head] : "body" === e ? [c.body] : "canvas" === e ? [r.canvas] : [];
    }, querySelector: function (e) {
      return "head" === e ? c.head : "body" === e ? c.body : "canvas" === e || e === "#" + r.canvas.id ? r.canvas : null;
    }, querySelectorAll: function (e) {
      return "head" === e ? [c.head] : "body" === e ? [c.body] : "canvas" === e ? [r.canvas] : [];
    }, addEventListener: function (e, t) {
      l[e] || (l[e] = []), l[e].push(t);
    }, removeEventListener: function (e, t) {
      var n = l[e];if (n && 0 < n.length) for (var r = n.length; r--;) if (n[r] === t) {
        n.splice(r, 1);break;
      }
    }, dispatchEvent: function (e) {
      var t = l[e.type];if (t) for (var n = 0; n < t.length; n++) t[n](e);
    } };t.default = c;
}, function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 }), t.default = function () {
    return wx.createImage();
  };
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var r = function (e, t, n) {
    return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
  };function defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }var o = n(14);n = (a = o) && a.__esModule ? a : { default: a };var a;var i = new WeakMap();var u = new WeakMap();new WeakMap();new WeakMap();(function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  })(Audio, n.default), r(Audio, [{ key: "load", value: function () {
      console.warn("HTMLAudioElement.load() is not implemented.");
    } }, { key: "play", value: function () {
      i.get(this).play();
    } }, { key: "pause", value: function () {
      i.get(this).pause();
    } }, { key: "canPlayType", value: function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";return "string" == typeof e && (-1 < e.indexOf("audio/mpeg") || e.indexOf("audio/mp4")) ? "probably" : "";
    } }, { key: "cloneNode", value: function () {
      var e = new Audio();return e.loop = i.get(this).loop, e.autoplay = i.get(this).autoplay, e.src = this.src, e;
    } }, { key: "currentTime", get: function () {
      return i.get(this).currentTime;
    }, set: function (e) {
      i.get(this).seek(e);
    } }, { key: "src", get: function () {
      return u.get(this);
    }, set: function (e) {
      u.set(this, e), i.get(this).src = e;
    } }, { key: "loop", get: function () {
      return i.get(this).loop;
    }, set: function (e) {
      i.get(this).loop = e;
    } }, { key: "autoplay", get: function () {
      return i.get(this).autoplay;
    }, set: function (e) {
      i.get(this).autoplay = e;
    } }, { key: "paused", get: function () {
      return i.get(this).paused;
    } }]), r = Audio;function Audio(e) {
    !function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, Audio);var t = function (e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).call(this));t.HAVE_NOTHING = 0, t.HAVE_METADATA = 1, t.HAVE_CURRENT_DATA = 2, t.HAVE_FUTURE_DATA = 3, t.HAVE_ENOUGH_DATA = 4, t.readyState = 0, u.set(t, "");var n = wx.createInnerAudioContext();return i.set(t, n), n.onCanplay(function () {
      t.dispatchEvent({ type: "load" }), t.dispatchEvent({ type: "loadend" }), t.dispatchEvent({ type: "canplay" }), t.dispatchEvent({ type: "canplaythrough" }), t.dispatchEvent({ type: "loadedmetadata" }), t.readyState = 2;
    }), n.onPlay(function () {
      t.dispatchEvent({ type: "play" });
    }), n.onPause(function () {
      t.dispatchEvent({ type: "pause" });
    }), n.onEnded(function () {
      t.dispatchEvent({ type: "ended" }), t.readyState = 4;
    }), n.onError(function () {
      t.dispatchEvent({ type: "error" });
    }), e && (i.get(t).src = e), t;
  }t.default = r;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var r = n(15);var o;(function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  })(HTMLAudioElement, ((o = r) && o.__esModule ? o : { default: o }).default), n = HTMLAudioElement;function HTMLAudioElement() {
    return function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, HTMLAudioElement), function (e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }(this, (HTMLAudioElement.__proto__ || Object.getPrototypeOf(HTMLAudioElement)).call(this, "audio"));
  }t.default = n;
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var r = function (e, t, n) {
    return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
  };function defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }var o = n(5);var a;(function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
  })(HTMLMediaElement, ((a = o) && a.__esModule ? a : { default: a }).default), r(HTMLMediaElement, [{ key: "addTextTrack", value: function () {} }, { key: "captureStream", value: function () {} }, { key: "fastSeek", value: function () {} }, { key: "load", value: function () {} }, { key: "pause", value: function () {} }, { key: "play", value: function () {} }]), r = HTMLMediaElement;function HTMLMediaElement(e) {
    return function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, HTMLMediaElement), function (e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }(this, (HTMLMediaElement.__proto__ || Object.getPrototypeOf(HTMLMediaElement)).call(this, e));
  }t.default = r;
}, function (e, t, n) {
  "use strict";

  n(17);
}, function (e, t, n) {
  "use strict";

  var r = function (e) {
    {
      if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);return t.default = e, t;
    }
  }(n(1));var o = n(11);var a = (i = o) && i.__esModule ? i : { default: i };var i;var u = n(9);function qc(e) {
    !function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, qc), this.target = r.canvas, this.currentTarget = r.canvas, this.touches = [], this.targetTouches = [], this.changedTouches = [], this.preventDefault = u.noop, this.stopPropagation = u.noop, this.type = e;
  }function touchEventHandlerFactory(n) {
    return function (e) {
      var t = new qc(n);t.touches = e.touches, t.targetTouches = Array.prototype.slice.call(e.touches), t.changedTouches = e.changedTouches, t.timeStamp = e.timeStamp, a.default.dispatchEvent(t);
    };
  }wx.onTouchStart(touchEventHandlerFactory("touchstart")), wx.onTouchMove(touchEventHandlerFactory("touchmove")), wx.onTouchEnd(touchEventHandlerFactory("touchend")), wx.onTouchCancel(touchEventHandlerFactory("touchcancel"));
}, function (e, t, n) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });n = n(9);n = { platform: wx.getSystemInfoSync().platform, language: "zh-cn", appVersion: "5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1", userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN", onLine: !0, geolocation: { getCurrentPosition: n.noop, watchPosition: n.noop, clearWatch: n.noop } };t.default = n;
}, function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var n = function (e, t, n) {
    return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
  };function defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }var r = new WeakMap();var o = new WeakMap();var a = new WeakMap();var u = new WeakMap();var i = new WeakMap();function _triggerEvent(e) {
    if ("function" == typeof this["on" + e]) {
      for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];this["on" + e].apply(this, n);
    }
  }function _changeReadyState(e) {
    this.readyState = e, _triggerEvent.call(this, "readystatechange");
  }n(XMLHttpRequest, [{ key: "abort", value: function () {
      var e = i.get(this);e && e.abort();
    } }, { key: "getAllResponseHeaders", value: function () {
      var t = u.get(this);return Object.keys(t).map(function (e) {
        return e + ": " + t[e];
      }).join("\n");
    } }, { key: "getResponseHeader", value: function (e) {
      return u.get(this)[e];
    } }, { key: "open", value: function (e, t) {
      o.set(this, e), r.set(this, t), _changeReadyState.call(this, XMLHttpRequest.OPENED);
    } }, { key: "overrideMimeType", value: function () {} }, { key: "send", value: function () {
      var i = this;var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";if (this.readyState !== XMLHttpRequest.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");wx.request({ data: e, url: r.get(this), method: o.get(this), header: a.get(this), responseType: this.responseType, success: function (e) {
          var t = e.data,
              n = e.statusCode,
              e = e.header;if ("string" != typeof t && !(t instanceof ArrayBuffer)) try {
            t = JSON.stringify(t);
          } catch (e) {}if (i.status = n, u.set(i, e), _triggerEvent.call(i, "loadstart"), _changeReadyState.call(i, XMLHttpRequest.HEADERS_RECEIVED), _changeReadyState.call(i, XMLHttpRequest.LOADING), (i.response = t) instanceof ArrayBuffer) {
            i.responseText = "";var r = new Uint8Array(t);var o = r.byteLength;for (var a = 0; a < o; a++) i.responseText += String.fromCharCode(r[a]);
          } else i.responseText = t;_changeReadyState.call(i, XMLHttpRequest.DONE), _triggerEvent.call(i, "load"), _triggerEvent.call(i, "loadend");
        }, fail: function (e) {
          e = e.errMsg;-1 !== e.indexOf("abort") ? _triggerEvent.call(i, "abort") : _triggerEvent.call(i, "error", e), _triggerEvent.call(i, "loadend");
        } });
    } }, { key: "setRequestHeader", value: function (e, t) {
      var n = a.get(this);n[e] = t, a.set(this, n);
    } }]), n = XMLHttpRequest;function XMLHttpRequest() {
    !function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, XMLHttpRequest), this.onabort = null, this.onerror = null, this.onload = null, this.onloadstart = null, this.onprogress = null, this.ontimeout = null, this.onloadend = null, this.onreadystatechange = null, this.readyState = 0, this.response = null, this.responseText = null, this.responseType = "", this.responseXML = null, this.status = 0, this.statusText = "", this.upload = {}, this.withCredentials = !1, a.set(this, { "content-type": "application/x-www-form-urlencoded" }), u.set(this, {});
  }n.UNSEND = 0, n.OPENED = 1, n.HEADERS_RECEIVED = 2, n.LOADING = 3, n.DONE = 4, t.default = n;
}, function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });var n = function (e, t, n) {
    return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
  };function defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }var r = new WeakMap();n(WebSocket, [{ key: "close", value: function (e, t) {
      this.readyState = WebSocket.CLOSING, r.get(this).close({ code: e, reason: t });
    } }, { key: "send", value: function (e) {
      if ("string" != typeof e && !(e instanceof ArrayBuffer)) throw new TypeError("Failed to send message: The data " + e + " is invalid");r.get(this).send({ data: e });
    } }]), n = WebSocket;function WebSocket(e) {
    var t = this;var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];if (!function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, WebSocket), this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, this.protocol = "", this.readyState = 3, "string" != typeof e || !/(^ws:\/\/)|(^wss:\/\/)/.test(e)) throw new TypeError("Failed to construct 'WebSocket': The URL '" + e + "' is invalid");this.url = e, this.readyState = WebSocket.CONNECTING;n = wx.connectSocket({ url: e, protocols: Array.isArray(n) ? n : [n] });return r.set(this, n), n.onClose(function (e) {
      t.readyState = WebSocket.CLOSED, "function" == typeof t.onclose && t.onclose(e);
    }), n.onMessage(function (e) {
      "function" == typeof t.onmessage && t.onmessage(e);
    }), n.onOpen(function () {
      t.readyState = WebSocket.OPEN, "function" == typeof t.onopen && t.onopen();
    }), n.onError(function (e) {
      "function" == typeof t.onerror && t.onerror(new Error(e.errMsg));
    }), this;
  }n.CONNECTING = 0, n.OPEN = 1, n.CLOSING = 2, n.CLOSED = 3, t.default = n;
}, function (e, t) {
  "use strict";

  function defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
      var r = t[n];r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
  }Object.defineProperty(t, "__esModule", { value: !0 });var n = (function (e, t, n) {
    return t && defineProperties(e.prototype, t), n && defineProperties(e, n), e;
  }(FileReader, [{ key: "construct", value: function () {} }]), FileReader);function FileReader() {
    !function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }(this, FileReader);
  }t.default = n;
}, function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 }), t.default = { get length() {
      return wx.getStorageInfoSync().keys.length;
    }, key: function (e) {
      return wx.getStorageInfoSync().keys[e];
    }, getItem: function (e) {
      return wx.getStorageSync(e);
    }, setItem: function (e, t) {
      return wx.setStorageSync(e, t);
    }, removeItem: function (e) {
      wx.removeStorageSync(e);
    }, clear: function () {
      wx.clearStorageSync();
    } };
}, function (e, t) {
  "use strict";

  Object.defineProperty(t, "__esModule", { value: !0 });t.default = { href: "game.js", reload: function () {} };
}]);