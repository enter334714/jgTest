!function (C$99n) {
  var C$99r = {};function __webpack_require__(C$99e) {
    if (C$99r[C$99e]) return C$99r[C$99e].exports;var C$99t = C$99r[C$99e] = { exports: {}, id: C$99e, loaded: !1 };return C$99n[C$99e].call(C$99t.exports, C$99t, C$99t.exports, __webpack_require__), C$99t.loaded = !0, C$99t.exports;
  }__webpack_require__.m = C$99n, __webpack_require__.c = C$99r, __webpack_require__.p = "", __webpack_require__(0);
}([function (C$99e, C$99l, C$99t) {
  "use strict";
  var C$99n = function (C$99e) {
    {
      if (C$99e && C$99e.__esModule) return C$99e;var C$99t = {};if (null != C$99e) for (var C$99n in C$99e) Object.prototype.hasOwnProperty.call(C$99e, C$99n) && (C$99t[C$99n] = C$99e[C$99n]);return C$99t.default = C$99e, C$99t;
    }
  }(C$99t(1));C$99t = C$99t(4);C$99t = (C$99t = C$99t) && C$99t.__esModule ? C$99t : { default: C$99t };var C$99r = GameGlobal;if (!GameGlobal.__isAdapterInjected) {
    GameGlobal.__isAdapterInjected = !0, C$99n.addEventListener = function (C$99e, C$99t) {
      C$99n.document.addEventListener(C$99e, C$99t);
    }, C$99n.removeEventListener = function (C$99e, C$99t) {
      C$99n.document.removeEventListener(C$99e, C$99t);
    }, C$99n.canvas && (C$99n.canvas.addEventListener = C$99n.addEventListener, C$99n.canvas.removeEventListener = C$99n.removeEventListener), C$99r.sharedCanvas && (sharedCanvas.__proto__.__proto__ = new C$99t.default("canvas"), sharedCanvas.addEventListener = C$99n.addEventListener, sharedCanvas.removeEventListener = C$99n.removeEventListener);C$99t = wx.getSystemInfoSync().platform;if ("undefined" == typeof __devtoolssubcontext && "devtools" === C$99t) {
      for (var C$99o in C$99n) {
        var C$99a = Object.getOwnPropertyDescriptor(C$99r, C$99o);C$99a && !0 !== C$99a.configurable || Object.defineProperty(window, C$99o, { value: C$99n[C$99o] });
      }for (var C$99i in C$99n.document) {
        var C$99u = Object.getOwnPropertyDescriptor(C$99r.document, C$99i);C$99u && !0 !== C$99u.configurable || Object.defineProperty(C$99r.document, C$99i, { value: C$99n.document[C$99i] });
      }window.parent = window;
    } else {
      for (var C$99s in C$99n) C$99r[C$99s] = C$99n[C$99s];C$99r.window = C$99n, (window = C$99r).top = window.parent = window;
    }
  }
}, function (C$99l, C$99t, C$99e) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 }), C$99t.cancelAnimationFrame = C$99t.requestAnimationFrame = C$99t.clearInterval = C$99t.clearTimeout = C$99t.setInterval = C$99t.setTimeout = C$99t.canvas = C$99t.location = C$99t.localStorage = C$99t.HTMLElement = C$99t.FileReader = C$99t.Audio = C$99t.Image = C$99t.WebSocket = C$99t.XMLHttpRequest = C$99t.navigator = C$99t.document = void 0;var C$99n = C$99e(2);Object.keys(C$99n).forEach(function (C$99e) {
    "default" !== C$99e && "__esModule" !== C$99e && Object.defineProperty(C$99t, C$99e, { enumerable: !0, get: function () {
        return C$99n[C$99e];
      } });
  });var C$99r = C$99e(3);Object.keys(C$99r).forEach(function (C$99e) {
    "default" !== C$99e && "__esModule" !== C$99e && Object.defineProperty(C$99t, C$99e, { enumerable: !0, get: function () {
        return C$99r[C$99e];
      } });
  });var C$99o = _interopRequireDefault(C$99e(9));var C$99a = C$99e(17);var C$99i = _interopRequireDefault(C$99e(10));var C$99u = _interopRequireDefault(C$99e(18));var C$99s = _interopRequireDefault(C$99e(19));var C$99c = _interopRequireDefault(C$99e(20));var C$99f = _interopRequireDefault(C$99e(11));var C$99p = _interopRequireDefault(C$99e(12));var C$99d = _interopRequireDefault(C$99e(21));var C$99h = _interopRequireDefault(C$99e(4));var C$99v = _interopRequireDefault(C$99e(22));C$99e = _interopRequireDefault(C$99e(23));function _interopRequireDefault(C$99e) {
    return C$99e && C$99e.__esModule ? C$99e : { default: C$99e };
  }C$99t.document = C$99i.default, C$99t.navigator = C$99u.default, C$99t.XMLHttpRequest = C$99s.default, C$99t.WebSocket = C$99c.default, C$99t.Image = C$99f.default, C$99t.Audio = C$99p.default, C$99t.FileReader = C$99d.default, C$99t.HTMLElement = C$99h.default, C$99t.localStorage = C$99v.default, C$99t.location = C$99e.default;C$99i = (0, C$99a.isSubContext)() ? void 0 : new C$99o.default();C$99t.canvas = C$99i, C$99t.setTimeout = setTimeout, C$99t.setInterval = setInterval, C$99t.clearTimeout = clearTimeout, C$99t.clearInterval = clearInterval, C$99t.requestAnimationFrame = requestAnimationFrame, C$99t.cancelAnimationFrame = cancelAnimationFrame;
}, function (C$99e, C$99t) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 });var C$99n = wx.getSystemInfoSync(),
      C$99r = C$99n.screenWidth,
      C$99o = C$99n.screenHeight,
      C$99n = C$99n.devicePixelRatio;C$99r = C$99t.innerWidth = C$99r;C$99o = C$99t.innerHeight = C$99o;C$99t.devicePixelRatio = C$99n;C$99t.screen = { availWidth: C$99r, availHeight: C$99o };C$99t.performance = { now: function () {
      return Date.now() / 1e3;
    } };C$99t.ontouchstart = null;C$99t.ontouchmove = null;C$99t.ontouchend = null;
}, function (C$99e, C$99t, C$99n) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 }), C$99t.HTMLCanvasElement = C$99t.HTMLImageElement = void 0;C$99n = C$99n(4);C$99n = (C$99n = C$99n) && C$99n.__esModule ? C$99n : { default: C$99n };function _classCallCheck(C$99e, C$99t) {
    if (!(C$99e instanceof C$99t)) throw new TypeError("Cannot call a class as a function");
  }function _possibleConstructorReturn(C$99e, C$99t) {
    if (!C$99e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !C$99t || "object" != typeof C$99t && "function" != typeof C$99t ? C$99e : C$99t;
  }function _inherits(C$99e, C$99t) {
    if ("function" != typeof C$99t && null !== C$99t) throw new TypeError("Super expression must either be null or a function, not " + typeof C$99t);C$99e.prototype = Object.create(C$99t && C$99t.prototype, { constructor: { value: C$99e, enumerable: !1, writable: !0, configurable: !0 } }), C$99t && (Object.setPrototypeOf ? Object.setPrototypeOf(C$99e, C$99t) : C$99e.__proto__ = C$99t);
  }C$99t.HTMLImageElement = (_inherits(HTMLImageElement, C$99n.default), HTMLImageElement);function HTMLImageElement() {
    return _classCallCheck(this, HTMLImageElement), _possibleConstructorReturn(this, (HTMLImageElement.__proto__ || Object.getPrototypeOf(HTMLImageElement)).call(this, "img"));
  }C$99t.HTMLCanvasElement = (_inherits(HTMLCanvasElement, C$99n.default), HTMLCanvasElement);function HTMLCanvasElement() {
    return _classCallCheck(this, HTMLCanvasElement), _possibleConstructorReturn(this, (HTMLCanvasElement.__proto__ || Object.getPrototypeOf(HTMLCanvasElement)).call(this, "canvas"));
  }
}, function (C$99e, C$99t, C$99n) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 });var C$99r = function (C$99e, C$99t, C$99n) {
    return C$99t && defineProperties(C$99e.prototype, C$99t), C$99n && defineProperties(C$99e, C$99n), C$99e;
  };function defineProperties(C$99e, C$99t) {
    for (var C$99n = 0; C$99n < C$99t.length; C$99n++) {
      var C$99r = C$99t[C$99n];C$99r.enumerable = C$99r.enumerable || !1, C$99r.configurable = !0, "value" in C$99r && (C$99r.writable = !0), Object.defineProperty(C$99e, C$99r.key, C$99r);
    }
  }var C$99o = C$99n(5);C$99o = (C$99o = C$99o) && C$99o.__esModule ? C$99o : { default: C$99o };var C$99a = C$99n(8);var C$99i = C$99n(2);C$99n = function (C$99e) {
    var C$99t = HTMLElement;if ("function" != typeof C$99e && null !== C$99e) throw new TypeError("Super expression must either be null or a function, not " + typeof C$99e);function HTMLElement() {
      var C$99e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";var C$99t = this;var C$99n = HTMLElement;if (!(C$99t instanceof C$99n)) throw new TypeError("Cannot call a class as a function");C$99t = function (C$99e, C$99t) {
        if (!C$99e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !C$99t || "object" != typeof C$99t && "function" != typeof C$99t ? C$99e : C$99t;
      }(this, (HTMLElement.__proto__ || Object.getPrototypeOf(HTMLElement)).call(this));return C$99t.className = "", C$99t.childern = [], C$99t.style = { width: C$99i.innerWidth + "px", height: C$99i.innerHeight + "px" }, C$99t.insertBefore = C$99a.noop, C$99t.innerHTML = "", C$99t.tagName = C$99e.toUpperCase(), C$99t;
    }return C$99t.prototype = Object.create(C$99e && C$99e.prototype, { constructor: { value: C$99t, enumerable: !1, writable: !0, configurable: !0 } }), C$99e && (Object.setPrototypeOf ? Object.setPrototypeOf(C$99t, C$99e) : C$99t.__proto__ = C$99e), C$99r(HTMLElement, [{ key: "setAttribute", value: function (C$99e, C$99t) {
        this[C$99e] = C$99t;
      } }, { key: "getAttribute", value: function (C$99e) {
        return this[C$99e];
      } }, { key: "getBoundingClientRect", value: function () {
        return { top: 0, left: 0, width: C$99i.innerWidth, height: C$99i.innerHeight };
      } }, { key: "focus", value: function () {} }, { key: "clientWidth", get: function () {
        var C$99e = parseInt(this.style.fontSize, 10) * this.innerHTML.length;return Number.isNaN(C$99e) ? 0 : C$99e;
      } }, { key: "clientHeight", get: function () {
        var C$99e = parseInt(this.style.fontSize, 10);return Number.isNaN(C$99e) ? 0 : C$99e;
      } }]), HTMLElement;
  }(C$99o.default);C$99t.default = C$99n;
}, function (C$99e, C$99t, C$99n) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 });C$99n = C$99n(6);C$99n = function (C$99e) {
    var C$99t = ELement;if ("function" != typeof C$99e && null !== C$99e) throw new TypeError("Super expression must either be null or a function, not " + typeof C$99e);function ELement() {
      if (!(this instanceof ELement)) throw new TypeError("Cannot call a class as a function");var C$99e = function (C$99e, C$99t) {
        if (!C$99e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !C$99t || "object" != typeof C$99t && "function" != typeof C$99t ? C$99e : C$99t;
      }(this, (ELement.__proto__ || Object.getPrototypeOf(ELement)).call(this));return C$99e.className = "", C$99e.children = [], C$99e;
    }return C$99t.prototype = Object.create(C$99e && C$99e.prototype, { constructor: { value: C$99t, enumerable: !1, writable: !0, configurable: !0 } }), C$99e && (Object.setPrototypeOf ? Object.setPrototypeOf(C$99t, C$99e) : C$99t.__proto__ = C$99e), ELement;
  }(((C$99n = C$99n) && C$99n.__esModule ? C$99n : { default: C$99n }).default);C$99t.default = C$99n;
}, function (C$99e, C$99t, C$99n) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 });var C$99r = function (C$99e, C$99t, C$99n) {
    return C$99t && defineProperties(C$99e.prototype, C$99t), C$99n && defineProperties(C$99e, C$99n), C$99e;
  };function defineProperties(C$99e, C$99t) {
    for (var C$99n = 0; C$99n < C$99t.length; C$99n++) {
      var C$99r = C$99t[C$99n];C$99r.enumerable = C$99r.enumerable || !1, C$99r.configurable = !0, "value" in C$99r && (C$99r.writable = !0), Object.defineProperty(C$99e, C$99r.key, C$99r);
    }
  }C$99n = C$99n(7);C$99n = function (C$99e) {
    var C$99t = Node;if ("function" != typeof C$99e && null !== C$99e) throw new TypeError("Super expression must either be null or a function, not " + typeof C$99e);function Node() {
      if (!(this instanceof Node)) throw new TypeError("Cannot call a class as a function");var C$99e = function (C$99e, C$99t) {
        if (!C$99e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !C$99t || "object" != typeof C$99t && "function" != typeof C$99t ? C$99e : C$99t;
      }(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this));return C$99e.childNodes = [], C$99e;
    }return C$99t.prototype = Object.create(C$99e && C$99e.prototype, { constructor: { value: C$99t, enumerable: !1, writable: !0, configurable: !0 } }), C$99e && (Object.setPrototypeOf ? Object.setPrototypeOf(C$99t, C$99e) : C$99t.__proto__ = C$99e), C$99r(Node, [{ key: "appendChild", value: function (C$99e) {
        if (!(C$99e instanceof Node)) throw new TypeError("Failed to executed 'appendChild' on 'Node': parameter 1 is not of type 'Node'.");this.childNodes.push(C$99e);
      } }, { key: "cloneNode", value: function () {
        var C$99e = Object.create(this);return Object.assign(C$99e, this), C$99e;
      } }, { key: "removeChild", value: function (C$99t) {
        var C$99e = this.childNodes.findIndex(function (C$99e) {
          return C$99e === C$99t;
        });return -1 < C$99e ? this.childNodes.splice(C$99e, 1) : null;
      } }]), Node;
  }(((C$99n = C$99n) && C$99n.__esModule ? C$99n : { default: C$99n }).default);C$99t.default = C$99n;
}, function (C$99e, C$99t) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 });var C$99n = function (C$99e, C$99t, C$99n) {
    return C$99t && defineProperties(C$99e.prototype, C$99t), C$99n && defineProperties(C$99e, C$99n), C$99e;
  };function defineProperties(C$99e, C$99t) {
    for (var C$99n = 0; C$99n < C$99t.length; C$99n++) {
      var C$99r = C$99t[C$99n];C$99r.enumerable = C$99r.enumerable || !1, C$99r.configurable = !0, "value" in C$99r && (C$99r.writable = !0), Object.defineProperty(C$99e, C$99r.key, C$99r);
    }
  }var C$99o = new WeakMap();C$99n(EventTarget, [{ key: "addEventListener", value: function (C$99e, C$99t) {
      var C$99n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};var C$99r = C$99o.get(this);C$99r || C$99o.set(this, C$99r = {}), C$99r[C$99e] || (C$99r[C$99e] = []), C$99r[C$99e].push(C$99t), C$99n.capture && console.warn("EventTarget.addEventListener: options.capture is not implemented."), C$99n.once && console.warn("EventTarget.addEventListener: options.once is not implemented."), C$99n.passive && console.warn("EventTarget.addEventListener: options.passive is not implemented.");
    } }, { key: "removeEventListener", value: function (C$99e, C$99t) {
      var C$99n = C$99o.get(this)[C$99e];if (C$99n && 0 < C$99n.length) for (var C$99r = C$99n.length; C$99r--;) if (C$99n[C$99r] === C$99t) {
        C$99n.splice(C$99r, 1);break;
      }
    } }, { key: "dispatchEvent", value: function () {
      var C$99e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};var C$99t = C$99o.get(this)[C$99e.type];if (C$99t) for (var C$99n = 0; C$99n < C$99t.length; C$99n++) C$99t[C$99n](C$99e);
    } }]);C$99n = EventTarget;function EventTarget() {
    if (!(this instanceof EventTarget)) throw new TypeError("Cannot call a class as a function");C$99o.set(this, {});
  }C$99t.default = C$99n;
}, function (C$99e, C$99t) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 }), C$99t.noop = function () {}, C$99t.isSubContext = function () {
    return "undefined" != typeof GameGlobal && !0 === GameGlobal.__isSubContext;
  };
}, function (C$99e, C$99t, C$99n) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 }), C$99t.default = function () {
    var C$99e = wx.createCanvas();C$99e.type = "canvas", C$99e.__proto__.__proto__ = new C$99r.default("canvas");C$99e.getContext;return C$99e.getBoundingClientRect = function () {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    }, C$99e;
  };C$99n(3);var C$99r = _interopRequireDefault(C$99n(4));_interopRequireDefault(C$99n(10));function _interopRequireDefault(C$99e) {
    return C$99e && C$99e.__esModule ? C$99e : { default: C$99e };
  }
}, function (C$99l, C$99e, C$99t) {
  "use strict";
  Object.defineProperty(C$99e, "__esModule", { value: !0 });var C$99n = function (C$99e) {
    {
      if (C$99e && C$99e.__esModule) return C$99e;var C$99t = {};if (null != C$99e) for (var C$99n in C$99e) Object.prototype.hasOwnProperty.call(C$99e, C$99n) && (C$99t[C$99n] = C$99e[C$99n]);return C$99t.default = C$99e, C$99t;
    }
  }(C$99t(1));var C$99r = _interopRequireDefault(C$99t(4));var C$99o = _interopRequireDefault(C$99t(11));var C$99a = _interopRequireDefault(C$99t(12));var C$99i = _interopRequireDefault(C$99t(9));function _interopRequireDefault(C$99e) {
    return C$99e && C$99e.__esModule ? C$99e : { default: C$99e };
  }C$99t(15);var C$99u = {};var C$99s = { readyState: "complete", visibilityState: "visible", documentElement: C$99n, hidden: !1, style: {}, location: C$99n.location, ontouchstart: null, ontouchmove: null, ontouchend: null, head: new C$99r.default("head"), body: new C$99r.default("body"), createElement: function (C$99e) {
      return "canvas" === C$99e ? new C$99i.default() : "audio" === C$99e ? new C$99a.default() : "img" === C$99e ? new C$99o.default() : new C$99r.default(C$99e);
    }, getElementById: function (C$99e) {
      return C$99e === C$99n.canvas.id ? C$99n.canvas : null;
    }, getElementsByTagName: function (C$99e) {
      return "head" === C$99e ? [C$99s.head] : "body" === C$99e ? [C$99s.body] : "canvas" === C$99e ? [C$99n.canvas] : [];
    }, querySelector: function (C$99e) {
      return "head" === C$99e ? C$99s.head : "body" === C$99e ? C$99s.body : "canvas" === C$99e || C$99e === "#" + C$99n.canvas.id ? C$99n.canvas : null;
    }, querySelectorAll: function (C$99e) {
      return "head" === C$99e ? [C$99s.head] : "body" === C$99e ? [C$99s.body] : "canvas" === C$99e ? [C$99n.canvas] : [];
    }, addEventListener: function (C$99e, C$99t) {
      C$99u[C$99e] || (C$99u[C$99e] = []), C$99u[C$99e].push(C$99t);
    }, removeEventListener: function (C$99e, C$99t) {
      var C$99n = C$99u[C$99e];if (C$99n && 0 < C$99n.length) for (var C$99r = C$99n.length; C$99r--;) if (C$99n[C$99r] === C$99t) {
        C$99n.splice(C$99r, 1);break;
      }
    }, dispatchEvent: function (C$99e) {
      var C$99t = C$99u[C$99e.type];if (C$99t) for (var C$99n = 0; C$99n < C$99t.length; C$99n++) C$99t[C$99n](C$99e);
    } };C$99e.default = C$99s;
}, function (C$99e, C$99t) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 }), C$99t.default = function () {
    var C$99e = wx.createImage();return C$99e.destroy = function () {
      C$99e.src = "";
    }, C$99e;
  };
}, function (C$99u, C$99e, C$99t) {
  "use strict";
  Object.defineProperty(C$99e, "__esModule", { value: !0 });var C$99n = function (C$99e, C$99t, C$99n) {
    return C$99t && defineProperties(C$99e.prototype, C$99t), C$99n && defineProperties(C$99e, C$99n), C$99e;
  };function defineProperties(C$99e, C$99t) {
    for (var C$99n = 0; C$99n < C$99t.length; C$99n++) {
      var C$99r = C$99t[C$99n];C$99r.enumerable = C$99r.enumerable || !1, C$99r.configurable = !0, "value" in C$99r && (C$99r.writable = !0), Object.defineProperty(C$99e, C$99r.key, C$99r);
    }
  }var C$99r = C$99t(13);C$99r = (C$99r = C$99r) && C$99r.__esModule ? C$99r : { default: C$99r };var C$99o = C$99t(8);function _possibleConstructorReturn(C$99e, C$99t) {
    if (!C$99e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !C$99t || "object" != typeof C$99t && "function" != typeof C$99t ? C$99e : C$99t;
  }var C$99a = new WeakMap();var C$99i = new WeakMap();new WeakMap();new WeakMap();C$99t = function (C$99e) {
    var C$99t = Audio;if ("function" != typeof C$99e && null !== C$99e) throw new TypeError("Super expression must either be null or a function, not " + typeof C$99e);function Audio(C$99e) {
      if (!(this instanceof Audio)) throw new TypeError("Cannot call a class as a function");var C$99t = _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).call(this));if (C$99t.HAVE_NOTHING = 0, C$99t.HAVE_METADATA = 1, C$99t.HAVE_CURRENT_DATA = 2, C$99t.HAVE_FUTURE_DATA = 3, C$99t.HAVE_ENOUGH_DATA = 4, (C$99t.readyState = 0, C$99o.isSubContext)()) return console.warn("HTMLAudioElement is not supported in SubContext."), _possibleConstructorReturn(C$99t);C$99i.set(C$99t, "");var C$99n = wx.createInnerAudioContext();return C$99a.set(C$99t, C$99n), C$99n.onCanplay(function () {
        C$99t.dispatchEvent({ type: "load" }), C$99t.dispatchEvent({ type: "loadend" }), C$99t.dispatchEvent({ type: "canplay" }), C$99t.dispatchEvent({ type: "canplaythrough" }), C$99t.dispatchEvent({ type: "loadedmetadata" }), C$99t.readyState = 2;
      }), C$99n.onPlay(function () {
        C$99t.dispatchEvent({ type: "play" });
      }), C$99n.onPause(function () {
        C$99t.dispatchEvent({ type: "pause" });
      }), C$99n.onEnded(function () {
        C$99t.dispatchEvent({ type: "ended" }), C$99t.readyState = 4;
      }), C$99n.onError(function () {
        C$99t.dispatchEvent({ type: "error" });
      }), C$99e && (C$99a.get(C$99t).src = C$99e), C$99t;
    }return C$99t.prototype = Object.create(C$99e && C$99e.prototype, { constructor: { value: C$99t, enumerable: !1, writable: !0, configurable: !0 } }), C$99e && (Object.setPrototypeOf ? Object.setPrototypeOf(C$99t, C$99e) : C$99t.__proto__ = C$99e), C$99n(Audio, [{ key: "load", value: function () {
        console.warn("HTMLAudioElement.load() is not implemented.");
      } }, { key: "play", value: function () {
        (0, C$99o.isSubContext)() || C$99a.get(this).play();
      } }, { key: "pause", value: function () {
        (0, C$99o.isSubContext)() || C$99a.get(this).pause();
      } }, { key: "canPlayType", value: function () {
        var C$99e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";return "string" == typeof C$99e && (-1 < C$99e.indexOf("audio/mpeg") || C$99e.indexOf("audio/mp4")) ? "probably" : "";
      } }, { key: "cloneNode", value: function () {
        var C$99e = new Audio();return (0, C$99o.isSubContext)() || (C$99e.loop = C$99a.get(this).loop, C$99e.autoplay = C$99a.get(this).loop, C$99e.src = this.src), C$99e;
      } }, { key: "currentTime", get: function () {
        return (0, C$99o.isSubContext)() ? 0 : C$99a.get(this).currentTime;
      }, set: function (C$99e) {
        (0, C$99o.isSubContext)() || C$99a.get(this).seek(C$99e);
      } }, { key: "src", get: function () {
        return C$99i.get(this);
      }, set: function (C$99e) {
        C$99i.set(this, C$99e), (0, C$99o.isSubContext)() || (C$99a.get(this).src = C$99e);
      } }, { key: "loop", get: function () {
        return !(0, C$99o.isSubContext)() && C$99a.get(this).loop;
      }, set: function (C$99e) {
        (0, C$99o.isSubContext)() || (C$99a.get(this).loop = C$99e);
      } }, { key: "autoplay", get: function () {
        return !(0, C$99o.isSubContext)() && C$99a.get(this).autoplay;
      }, set: function (C$99e) {
        (0, C$99o.isSubContext)() || (C$99a.get(this).autoplay = C$99e);
      } }, { key: "paused", get: function () {
        return !(0, C$99o.isSubContext)() && C$99a.get(this).paused;
      } }]), Audio;
  }(C$99r.default);C$99e.default = C$99t;
}, function (C$99e, C$99t, C$99n) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 });C$99n = C$99n(14);C$99n = function (C$99e) {
    var C$99t = HTMLAudioElement;if ("function" != typeof C$99e && null !== C$99e) throw new TypeError("Super expression must either be null or a function, not " + typeof C$99e);function HTMLAudioElement() {
      if (!(this instanceof HTMLAudioElement)) throw new TypeError("Cannot call a class as a function");var C$99e = this;var C$99t = (HTMLAudioElement.__proto__ || Object.getPrototypeOf(HTMLAudioElement)).call(this, "audio");if (!C$99e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !C$99t || "object" != typeof C$99t && "function" != typeof C$99t ? C$99e : C$99t;
    }return C$99t.prototype = Object.create(C$99e && C$99e.prototype, { constructor: { value: C$99t, enumerable: !1, writable: !0, configurable: !0 } }), C$99e && (Object.setPrototypeOf ? Object.setPrototypeOf(C$99t, C$99e) : C$99t.__proto__ = C$99e), HTMLAudioElement;
  }(((C$99n = C$99n) && C$99n.__esModule ? C$99n : { default: C$99n }).default);C$99t.default = C$99n;
}, function (C$99e, C$99t, C$99n) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 });var C$99r = function (C$99e, C$99t, C$99n) {
    return C$99t && defineProperties(C$99e.prototype, C$99t), C$99n && defineProperties(C$99e, C$99n), C$99e;
  };function defineProperties(C$99e, C$99t) {
    for (var C$99n = 0; C$99n < C$99t.length; C$99n++) {
      var C$99r = C$99t[C$99n];C$99r.enumerable = C$99r.enumerable || !1, C$99r.configurable = !0, "value" in C$99r && (C$99r.writable = !0), Object.defineProperty(C$99e, C$99r.key, C$99r);
    }
  }C$99n = C$99n(4);C$99n = function (C$99e) {
    var C$99t = HTMLMediaElement;if ("function" != typeof C$99e && null !== C$99e) throw new TypeError("Super expression must either be null or a function, not " + typeof C$99e);function HTMLMediaElement(C$99e) {
      if (!(this instanceof HTMLMediaElement)) throw new TypeError("Cannot call a class as a function");var C$99t = this;C$99e = (HTMLMediaElement.__proto__ || Object.getPrototypeOf(HTMLMediaElement)).call(this, C$99e);if (!C$99t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !C$99e || "object" != typeof C$99e && "function" != typeof C$99e ? C$99t : C$99e;
    }return C$99t.prototype = Object.create(C$99e && C$99e.prototype, { constructor: { value: C$99t, enumerable: !1, writable: !0, configurable: !0 } }), C$99e && (Object.setPrototypeOf ? Object.setPrototypeOf(C$99t, C$99e) : C$99t.__proto__ = C$99e), C$99r(HTMLMediaElement, [{ key: "addTextTrack", value: function () {} }, { key: "captureStream", value: function () {} }, { key: "fastSeek", value: function () {} }, { key: "load", value: function () {} }, { key: "pause", value: function () {} }, { key: "play", value: function () {} }]), HTMLMediaElement;
  }(((C$99n = C$99n) && C$99n.__esModule ? C$99n : { default: C$99n }).default);C$99t.default = C$99n;
}, function (C$99e, C$99t, C$99n) {
  "use strict";
  C$99n(16);
}, function (C$99e, C$99t, C$99n) {
  "use strict";
  var C$99r = function (C$99e) {
    {
      if (C$99e && C$99e.__esModule) return C$99e;var C$99t = {};if (null != C$99e) for (var C$99n in C$99e) Object.prototype.hasOwnProperty.call(C$99e, C$99n) && (C$99t[C$99n] = C$99e[C$99n]);return C$99t.default = C$99e, C$99t;
    }
  }(C$99n(1));var C$99o = C$99n(10);var C$99a = (C$99o = C$99o) && C$99o.__esModule ? C$99o : { default: C$99o };var C$99i = C$99n(8);function C$99cT(C$99e) {
    if (!(this instanceof C$99cT)) throw new TypeError("Cannot call a class as a function");this.target = C$99r.canvas, this.currentTarget = C$99r.canvas, this.touches = [], this.targetTouches = [], this.changedTouches = [], this.preventDefault = C$99i.noop, this.stopPropagation = C$99i.noop, this.type = C$99e;
  }function touchEventHandlerFactory(C$99n) {
    return function (C$99e) {
      var C$99t = new C$99cT(C$99n);C$99t.touches = C$99e.touches, C$99t.targetTouches = Array.prototype.slice.call(C$99e.touches), C$99t.changedTouches = C$99e.changedTouches, C$99t.timeStamp = C$99e.timeStamp, C$99a.default.dispatchEvent(C$99t);
    };
  }wx.onTouchStart(touchEventHandlerFactory("touchstart")), wx.onTouchMove(touchEventHandlerFactory("touchmove")), wx.onTouchEnd(touchEventHandlerFactory("touchend")), wx.onTouchCancel(touchEventHandlerFactory("touchcancel"));
}, function (C$99e, C$99t) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 }), C$99t.noop = function () {}, C$99t.isSubContext = function () {
    return "undefined" != typeof GameGlobal && !0 === GameGlobal.__isSubContext;
  };
}, function (C$99e, C$99t, C$99n) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 });C$99n = C$99n(8);C$99n = { platform: wx.getSystemInfoSync().platform, language: "zh-cn", appVersion: "5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1", userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN", onLine: !0, geolocation: { getCurrentPosition: C$99n.noop, watchPosition: C$99n.noop, clearWatch: C$99n.noop } };C$99t.default = C$99n;
}, function (C$99a, C$99e) {
  "use strict";
  Object.defineProperty(C$99e, "__esModule", { value: !0 });var C$99t = function (C$99e, C$99t, C$99n) {
    return C$99t && defineProperties(C$99e.prototype, C$99t), C$99n && defineProperties(C$99e, C$99n), C$99e;
  };function defineProperties(C$99e, C$99t) {
    for (var C$99n = 0; C$99n < C$99t.length; C$99n++) {
      var C$99r = C$99t[C$99n];C$99r.enumerable = C$99r.enumerable || !1, C$99r.configurable = !0, "value" in C$99r && (C$99r.writable = !0), Object.defineProperty(C$99e, C$99r.key, C$99r);
    }
  }var C$99n = new WeakMap();var C$99r = new WeakMap();var C$99o = new WeakMap();var C$99u = new WeakMap();var C$99i = new WeakMap();function _triggerEvent(C$99e) {
    if ("function" == typeof this["on" + C$99e]) {
      for (var C$99t = arguments.length, C$99n = Array(1 < C$99t ? C$99t - 1 : 0), C$99r = 1; C$99r < C$99t; C$99r++) C$99n[C$99r - 1] = arguments[C$99r];this["on" + C$99e].apply(this, C$99n);
    }
  }function _changeReadyState(C$99e) {
    this.readyState = C$99e, _triggerEvent.call(this, "readystatechange");
  }C$99t(XMLHttpRequest, [{ key: "abort", value: function () {
      var C$99e = C$99i.get(this);C$99e && C$99e.abort();
    } }, { key: "getAllResponseHeaders", value: function () {
      var C$99t = C$99u.get(this);return Object.keys(C$99t).map(function (C$99e) {
        return C$99e + ": " + C$99t[C$99e];
      }).join("\n");
    } }, { key: "getResponseHeader", value: function (C$99e) {
      return C$99u.get(this)[C$99e];
    } }, { key: "open", value: function (C$99e, C$99t) {
      C$99r.set(this, C$99e), C$99n.set(this, C$99t), _changeReadyState.call(this, XMLHttpRequest.OPENED);
    } }, { key: "overrideMimeType", value: function () {} }, { key: "send", value: function () {
      var C$99i = this;var C$99e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "";if (this.readyState !== XMLHttpRequest.OPENED) throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");wx.request({ data: C$99e, url: C$99n.get(this), method: C$99r.get(this), header: C$99o.get(this), responseType: this.responseType, success: function (C$99e) {
          var C$99t = C$99e.data,
              C$99n = C$99e.statusCode,
              C$99e = C$99e.header;if ("string" != typeof C$99t && !(C$99t instanceof ArrayBuffer)) try {
            C$99t = JSON.stringify(C$99t);
          } catch (C$99e) {}if (C$99i.status = C$99n, C$99u.set(C$99i, C$99e), _triggerEvent.call(C$99i, "loadstart"), _changeReadyState.call(C$99i, XMLHttpRequest.HEADERS_RECEIVED), _changeReadyState.call(C$99i, XMLHttpRequest.LOADING), (C$99i.response = C$99t) instanceof ArrayBuffer) {
            if (C$99i.responseText = "", "arraybuffer" != C$99i.responseType) {
              var C$99r = new Uint8Array(C$99t);var C$99o = C$99r.byteLength;for (var C$99a = 0; C$99a < C$99o; C$99a++) C$99i.responseText += String.fromCharCode(C$99r[C$99a]);
            }
          } else C$99i.responseText = C$99t;_changeReadyState.call(C$99i, XMLHttpRequest.DONE), _triggerEvent.call(C$99i, "load"), _triggerEvent.call(C$99i, "loadend");
        }, fail: function (C$99e) {
          C$99e = C$99e.errMsg;C$99i.status = 404, C$99i.response = null, _changeReadyState.call(C$99i, XMLHttpRequest.DONE), -1 !== C$99e.indexOf("abort") ? _triggerEvent.call(C$99i, "abort") : _triggerEvent.call(C$99i, "error", C$99e), _triggerEvent.call(C$99i, "loadend");
        } });
    } }, { key: "setRequestHeader", value: function (C$99e, C$99t) {
      var C$99n = C$99o.get(this);C$99n[C$99e] = C$99t, C$99o.set(this, C$99n);
    } }]);C$99t = XMLHttpRequest;function XMLHttpRequest() {
    if (!(this instanceof XMLHttpRequest)) throw new TypeError("Cannot call a class as a function");this.onabort = null, this.onerror = null, this.onload = null, this.onloadstart = null, this.onprogress = null, this.ontimeout = null, this.onloadend = null, this.onreadystatechange = null, this.readyState = 0, this.response = null, this.responseText = null, this.responseType = "", this.responseXML = null, this.status = 0, this.statusText = "", this.upload = {}, this.withCredentials = !1, C$99o.set(this, { "content-type": "application/x-www-form-urlencoded" }), C$99u.set(this, {});
  }C$99t.UNSEND = 0, C$99t.OPENED = 1, C$99t.HEADERS_RECEIVED = 2, C$99t.LOADING = 3, C$99t.DONE = 4, C$99e.default = C$99t;
}, function (C$99e, C$99t, C$99n) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 });var C$99r = function (C$99e, C$99t, C$99n) {
    return C$99t && defineProperties(C$99e.prototype, C$99t), C$99n && defineProperties(C$99e, C$99n), C$99e;
  };function defineProperties(C$99e, C$99t) {
    for (var C$99n = 0; C$99n < C$99t.length; C$99n++) {
      var C$99r = C$99t[C$99n];C$99r.enumerable = C$99r.enumerable || !1, C$99r.configurable = !0, "value" in C$99r && (C$99r.writable = !0), Object.defineProperty(C$99e, C$99r.key, C$99r);
    }
  }var C$99a = C$99n(8);var C$99i = new WeakMap();C$99r(WebSocket, [{ key: "close", value: function (C$99e, C$99t) {
      this.readyState = WebSocket.CLOSING, C$99i.get(this).close({ code: C$99e, reason: C$99t });
    } }, { key: "send", value: function (C$99e) {
      if ("string" != typeof C$99e && !(C$99e instanceof ArrayBuffer)) throw new TypeError("Failed to send message: The data " + C$99e + " is invalid");C$99i.get(this).send({ data: C$99e });
    } }]);C$99n = WebSocket;function WebSocket(C$99e) {
    var C$99t = this;var C$99n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];var C$99r = this;var C$99o = WebSocket;if (!(C$99r instanceof C$99o)) throw new TypeError("Cannot call a class as a function");if (this.binaryType = "", this.bufferedAmount = 0, this.extensions = "", this.onclose = null, this.onerror = null, this.onmessage = null, this.onopen = null, this.protocol = "", this.readyState = 3, (0, C$99a.isSubContext)()) throw new Error("WebSocket is not supported in SubContext.");if ("string" != typeof C$99e || !/(^ws:\/\/)|(^wss:\/\/)/.test(C$99e)) throw new TypeError("Failed to construct 'WebSocket': The URL '" + C$99e + "' is invalid");this.url = C$99e, this.readyState = WebSocket.CONNECTING;C$99r = wx.connectSocket({ url: C$99e, protocols: Array.isArray(C$99n) ? C$99n : [C$99n] });return C$99i.set(this, C$99r), C$99r.onClose(function (C$99e) {
      C$99t.readyState = WebSocket.CLOSED, "function" == typeof C$99t.onclose && C$99t.onclose(C$99e);
    }), C$99r.onMessage(function (C$99e) {
      "function" == typeof C$99t.onmessage && C$99t.onmessage(C$99e);
    }), C$99r.onOpen(function () {
      C$99t.readyState = WebSocket.OPEN, "function" == typeof C$99t.onopen && C$99t.onopen();
    }), C$99r.onError(function (C$99e) {
      "function" == typeof C$99t.onerror && C$99t.onerror(new Error(C$99e.errMsg));
    }), this;
  }C$99n.CONNECTING = 0, C$99n.OPEN = 1, C$99n.CLOSING = 2, C$99n.CLOSED = 3, C$99t.default = C$99n;
}, function (C$99e, C$99t, C$99n) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 });var C$99r = function (C$99e, C$99t, C$99n) {
    return C$99t && defineProperties(C$99e.prototype, C$99t), C$99n && defineProperties(C$99e, C$99n), C$99e;
  };function defineProperties(C$99e, C$99t) {
    for (var C$99n = 0; C$99n < C$99t.length; C$99n++) {
      var C$99r = C$99t[C$99n];C$99r.enumerable = C$99r.enumerable || !1, C$99r.configurable = !0, "value" in C$99r && (C$99r.writable = !0), Object.defineProperty(C$99e, C$99r.key, C$99r);
    }
  }var C$99o = C$99n(8);function FileReader() {
    if (!(this instanceof FileReader)) throw new TypeError("Cannot call a class as a function");
  }C$99r(FileReader, [{ key: "construct", value: function () {
      if ((0, C$99o.isSubContext)()) throw new Error("FileReader is not supported in SubContext.");
    } }]), C$99t.default = FileReader;
}, function (C$99e, C$99t, C$99n) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 });C$99n = C$99n(8);var C$99r = { get length() {
      return wx.getStorageInfoSync().keys.length;
    }, key: function (C$99e) {
      return wx.getStorageInfoSync().keys[C$99e];
    }, getItem: function (C$99e) {
      return wx.getStorageSync(C$99e);
    }, setItem: function (C$99e, C$99t) {
      return wx.setStorageSync(C$99e, C$99t);
    }, removeItem: function (C$99e) {
      wx.removeStorageSync(C$99e);
    }, clear: function () {
      wx.clearStorageSync();
    } };var C$99o = {};var C$99a = { get length() {
      return Object.keys(C$99o).length;
    }, key: function (C$99e) {
      return Object.keys(C$99o)[C$99e];
    }, getItem: function (C$99e) {
      return C$99o[C$99e];
    }, setItem: function (C$99e, C$99t) {
      C$99o[C$99e] = C$99t;
    }, removeItem: function (C$99e) {
      delete C$99o[C$99e];
    }, clear: function () {
      C$99o = {};
    } };C$99n = (0, C$99n.isSubContext)() ? C$99a : C$99r;C$99t.default = C$99n;
}, function (C$99e, C$99t) {
  "use strict";
  Object.defineProperty(C$99t, "__esModule", { value: !0 });C$99t.default = { href: "eeegame.js", reload: function () {} };
}]);