var m = wx.$g;
!function () {
  "use strict";

  (window || global).regeneratorRuntime = void 0;var e = function (e, t, r) {
    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = r, e;
  };function t(e, t) {
    var r = Object.keys(e);if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }return r;
  }var r = function (r) {
    for (var n = 1; n < arguments.length; n++) {
      var o = null != arguments[n] ? arguments[n] : {};n % 2 ? t(Object(o), !0).forEach(function (t) {
        e(r, t, o[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function (e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e));
      });
    }return r;
  }({}, { ERR_UNKNOWN: { errCode: 500, errMsg: "未知错误" }, ERR_NET_FAIL: { errCode: 1e3, errMsg: "网络错误" }, ERR_PARAMS: { errCode: 30001, errMsg: "参数错误" } }, {}, { EVT_SDK_READY: "EVT_SDK_READY", EVT_ON_SHOW: "EVT_ON_SHOW", EVT_ON_HIDE: "EVT_ON_HIDE", EVT_ON_ERROR: "EVT_ON_ERROR", EVT_LOGIN_START: "EVT_LOGIN_START", EVT_ON_LOGIN: "EVT_ON_LOGIN", EVT_UPDATE_START: "EVT_UPDATE_START", EVT_ON_UPDATE: "EVT_ON_UPDATE", EVT_LOGIN_FAIL: "EVT_LOGIN_FAIL", EVT_REPORT_LOG: "EVT_REPORT_LOG", EVT_SET_GAMEUSER: "EVT_SET_GAMEUSER" }, {}, { ENV_TEST: "Test", ENV_PROD: "Prod", ENV_DEV: "Dev" }, {}, { PROC_PRE_AGGR: "PROC_PRE_AGGR", PROC_REQ_AGGR: "PROC_REQ_AGGR" }),
      n = window || global || {};n.$__sdk__ || (n.$__sdk__ = {});var o = { platform: n.$__sdk__.platform },
      i = 1,
      s = 2,
      a = 3,
      c = 4,
      u = i,
      f = function (e) {
    return "[SDK] ".concat(e);
  },
      h = { setLevel: function (e) {
      u = e;
    }, debug: function (e) {
      if (u <= i) {
        for (var t, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];(t = console).log.apply(t, [f(e)].concat(n));
      }
    }, info: function (e) {
      if (u <= s) {
        for (var t, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];(t = console).info.apply(t, [f(e)].concat(n));
      }
    }, warn: function (e) {
      if (u <= a) {
        for (var t, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];(t = console).warn.apply(t, [f(e)].concat(n));
      }
    }, error: function (e) {
      if (u <= c) {
        for (var t, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];(t = console).error.apply(t, [f(e)].concat(n));
      }
    } };function p(e, t) {
    return e(t = { exports: {} }, t.exports), t.exports;
  }var _ = p(function (e) {
    var t = function (e) {
      var t,
          r = Object.prototype,
          n = r.hasOwnProperty,
          o = "function" == typeof Symbol ? Symbol : {},
          i = o.iterator || "@@iterator",
          s = o.asyncIterator || "@@asyncIterator",
          a = o.toStringTag || "@@toStringTag";function c(e, t, r, n) {
        var o = t && t.prototype instanceof d ? t : d,
            i = Object.create(o.prototype),
            s = new w(n || []);return i._invoke = function (e, t, r) {
          var n = f;return function (o, i) {
            if (n === p) throw new Error("Generator is already running");if (n === _) {
              if ("throw" === o) throw i;return D();
            }for (r.method = o, r.arg = i;;) {
              var s = r.delegate;if (s) {
                var a = I(s, r);if (a) {
                  if (a === g) continue;return a;
                }
              }if ("next" === r.method) r.sent = r._sent = r.arg;else if ("throw" === r.method) {
                if (n === f) throw n = _, r.arg;r.dispatchException(r.arg);
              } else "return" === r.method && r.abrupt("return", r.arg);n = p;var c = u(e, t, r);if ("normal" === c.type) {
                if (n = r.done ? _ : h, c.arg === g) continue;return { value: c.arg, done: r.done };
              }"throw" === c.type && (n = _, r.method = "throw", r.arg = c.arg);
            }
          };
        }(e, r, s), i;
      }function u(e, t, r) {
        try {
          return { type: "normal", arg: e.call(t, r) };
        } catch (e) {
          return { type: "throw", arg: e };
        }
      }e.wrap = c;var f = "suspendedStart",
          h = "suspendedYield",
          p = "executing",
          _ = "completed",
          g = {};function d() {}function l() {}function v() {}var E = {};E[i] = function () {
        return this;
      };var m = Object.getPrototypeOf,
          S = m && m(m(A([])));S && S !== r && n.call(S, i) && (E = S);var T = v.prototype = d.prototype = Object.create(E);function O(e) {
        ["next", "throw", "return"].forEach(function (t) {
          e[t] = function (e) {
            return this._invoke(t, e);
          };
        });
      }function y(e, t) {
        var r;this._invoke = function (o, i) {
          function s() {
            return new t(function (r, s) {
              !function r(o, i, s, a) {
                var c = u(e[o], e, i);if ("throw" !== c.type) {
                  var f = c.arg,
                      h = f.value;return h && "object" == typeof h && n.call(h, "__await") ? t.resolve(h.__await).then(function (e) {
                    r("next", e, s, a);
                  }, function (e) {
                    r("throw", e, s, a);
                  }) : t.resolve(h).then(function (e) {
                    f.value = e, s(f);
                  }, function (e) {
                    return r("throw", e, s, a);
                  });
                }a(c.arg);
              }(o, i, r, s);
            });
          }return r = r ? r.then(s, s) : s();
        };
      }function I(e, r) {
        var n = e.iterator[r.method];if (n === t) {
          if (r.delegate = null, "throw" === r.method) {
            if (e.iterator.return && (r.method = "return", r.arg = t, I(e, r), "throw" === r.method)) return g;r.method = "throw", r.arg = new TypeError("The iterator does not provide a 'throw' method");
          }return g;
        }var o = u(n, e.iterator, r.arg);if ("throw" === o.type) return r.method = "throw", r.arg = o.arg, r.delegate = null, g;var i = o.arg;return i ? i.done ? (r[e.resultName] = i.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, g) : i : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, g);
      }function R(e) {
        var t = { tryLoc: e[0] };1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
      }function b(e) {
        var t = e.completion || {};t.type = "normal", delete t.arg, e.completion = t;
      }function w(e) {
        this.tryEntries = [{ tryLoc: "root" }], e.forEach(R, this), this.reset(!0);
      }function A(e) {
        if (e) {
          var r = e[i];if (r) return r.call(e);if ("function" == typeof e.next) return e;if (!isNaN(e.length)) {
            var o = -1,
                s = function r() {
              for (; ++o < e.length;) if (n.call(e, o)) return r.value = e[o], r.done = !1, r;return r.value = t, r.done = !0, r;
            };return s.next = s;
          }
        }return { next: D };
      }function D() {
        return { value: t, done: !0 };
      }return l.prototype = T.constructor = v, v.constructor = l, v[a] = l.displayName = "GeneratorFunction", e.isGeneratorFunction = function (e) {
        var t = "function" == typeof e && e.constructor;return !!t && (t === l || "GeneratorFunction" === (t.displayName || t.name));
      }, e.mark = function (e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : (e.__proto__ = v, a in e || (e[a] = "GeneratorFunction")), e.prototype = Object.create(T), e;
      }, e.awrap = function (e) {
        return { __await: e };
      }, O(y.prototype), y.prototype[s] = function () {
        return this;
      }, e.AsyncIterator = y, e.async = function (t, r, n, o, i) {
        void 0 === i && (i = Promise);var s = new y(c(t, r, n, o), i);return e.isGeneratorFunction(r) ? s : s.next().then(function (e) {
          return e.done ? e.value : s.next();
        });
      }, O(T), T[a] = "Generator", T[i] = function () {
        return this;
      }, T.toString = function () {
        return "[object Generator]";
      }, e.keys = function (e) {
        var t = [];for (var r in e) t.push(r);return t.reverse(), function r() {
          for (; t.length;) {
            var n = t.pop();if (n in e) return r.value = n, r.done = !1, r;
          }return r.done = !0, r;
        };
      }, e.values = A, w.prototype = { constructor: w, reset: function (e) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(b), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        }, stop: function () {
          this.done = !0;var e = this.tryEntries[0].completion;if ("throw" === e.type) throw e.arg;return this.rval;
        }, dispatchException: function (e) {
          if (this.done) throw e;var r = this;function o(n, o) {
            return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
          }for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var s = this.tryEntries[i],
                a = s.completion;if ("root" === s.tryLoc) return o("end");if (s.tryLoc <= this.prev) {
              var c = n.call(s, "catchLoc"),
                  u = n.call(s, "finallyLoc");if (c && u) {
                if (this.prev < s.catchLoc) return o(s.catchLoc, !0);if (this.prev < s.finallyLoc) return o(s.finallyLoc);
              } else if (c) {
                if (this.prev < s.catchLoc) return o(s.catchLoc, !0);
              } else {
                if (!u) throw new Error("try statement without catch or finally");if (this.prev < s.finallyLoc) return o(s.finallyLoc);
              }
            }
          }
        }, abrupt: function (e, t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
              var i = o;break;
            }
          }i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);var s = i ? i.completion : {};return s.type = e, s.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, g) : this.complete(s);
        }, complete: function (e, t) {
          if ("throw" === e.type) throw e.arg;return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), g;
        }, finish: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t];if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), b(r), g;
          }
        }, catch: function (e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var r = this.tryEntries[t];if (r.tryLoc === e) {
              var n = r.completion;if ("throw" === n.type) {
                var o = n.arg;b(r);
              }return o;
            }
          }throw new Error("illegal catch attempt");
        }, delegateYield: function (e, r, n) {
          return this.delegate = { iterator: A(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), g;
        } }, e;
    }(e.exports);try {
      regeneratorRuntime = t;
    } catch (e) {
      Function("r", "regeneratorRuntime = r")(t);
    }
  }),
      g = Object.freeze({ __proto__: null, default: _, __moduleExports: _ }),
      d = g && _ || g;function l(e, t, r, n, o, i, s) {
    try {
      var a = e[i](s),
          c = a.value;
    } catch (e) {
      return void r(e);
    }a.done ? t(c) : Promise.resolve(c).then(n, o);
  }var v = function (e) {
    return function () {
      var t = this,
          r = arguments;return new Promise(function (n, o) {
        var i = e.apply(t, r);function s(e) {
          l(i, n, o, s, a, "next", e);
        }function a(e) {
          l(i, n, o, s, a, "throw", e);
        }s(void 0);
      });
    };
  },
      E = { request: function (e, t, r, n, i) {
      var s = arguments,
          a = this;return v(d.mark(function c() {
        var u, f, p, _, g, l, v;return d.wrap(function (c) {
          for (;;) switch (c.prev = c.next) {case 0:
              return u = !(s.length > 5 && void 0 !== s[5]) || s[5], f = null, c.prev = 2, p = Object.assign({}, i, { "content-type": u ? "application/json" : "application/x-www-form-urlencoded" }), _ = a._jointQuery(t, r || {}), c.next = 7, o.platform.network.request(e, _, n, p);case 7:
              if (g = c.sent, l = g.data, v = void 0 === l ? {} : l, !a._checkRespValid(g)) {
                c.next = 11;break;
              }return c.abrupt("return", { meta: v.meta, data: v.data });case 11:
              f = v.meta, c.next = 18;break;case 14:
              c.prev = 14, c.t0 = c.catch(2), h.warn("request get failed", c.t0), f = c.t0;case 18:
              return c.next = 20, a._onFailed(f);case 20:
              return c.abrupt("return", c.sent);case 22:case "end":
              return c.stop();}
        }, c, null, [[2, 14]]);
      }))();
    }, get: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;return this.request("GET", e, t);
    }, post: function (e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;return this.request("POST", e, r, t, {}, !0);
    }, postForm: function (e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;return this.request("POST", e, r, t, {}, !1);
    }, _onFailed: function (e) {
      var t = e && e.errCode ? e : r.ERR_NET_FAIL;return A.log.debug("--- error ---", e, t), new Promise(function (e, r) {
        e({ meta: t });
      });
    }, _checkRespValid: function (e) {
      return 200 === e.statusCode && e.data && (!e.data.meta || 0 === e.data.meta.errCode);
    }, _jointQuery: function (e, t) {
      return Object.keys(t).forEach(function (r, n) {
        var o = 0 === n && e.indexOf("?") < 0 ? "?" : "&";e += "".concat(o).concat(r, "=").concat(t[r]);
      }), e;
    } },
      m = { isFun: function (e) {
      return "function" == typeof e;
    }, isNull: function (e) {
      return null === e || void 0 === e;
    }, toNStr: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";return "string" == typeof e ? e : this.toStr(e, t);
    }, toStr: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";if (this.isNull(e)) return t;try {
        return JSON.stringify(e);
      } catch (e) {
        return t;
      }
    }, toNumber: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;try {
        return Number(e) || t;
      } catch (e) {
        return t;
      }
    }, toBoolean: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];try {
        return !!JSON.parse(e);
      } catch (r) {
        return !!e || t;
      }
    }, toObject: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;try {
        return JSON.parse(e);
      } catch (e) {
        return t;
      }
    }, isEmpty: function (e) {
      return this.isNull(e) || "" === e;
    }, wait: function (e) {
      return new Promise(function (t) {
        setTimeout(t, e);
      });
    }, toLine: function (e) {
      return e.replace(/([A-Z])/g, "_$1").toLowerCase();
    }, startsWith: function (e, t) {
      return e.slice(0, t.length) === t;
    }, endsWith: function (e, t) {
      return -1 !== e.indexOf(t, e.length - t.length);
    }, generateGuid: function () {
      for (var e = [], t = 0; t < 36; ++t) e[t] = "0123456789abcdef".substr(Math.floor(16 * Math.random()), 1);return e[14] = "4", e[19] = "0123456789abcdef".substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-", e.join("");
    } };function S() {
    this.timer = null;
  }S.prototype = { setTimer: function (e) {
      this.timer = e;
    }, getTimer: function () {
      return this.timer;
    } };var T = { getTime: function () {
      return Date.now();
    }, getTimeSec: function () {
      return Math.floor(this.getTime() / 1e3);
    }, todayStart: function (e) {
      var t = e ? new Date(e) : new Date();return new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
    }, toMSecond: function (e) {
      return 3600 * e * 1e3;
    }, resetInterval: function (e, t) {
      var r = new S();return r.setTimer(setTimeout(function n() {
        e && !1 !== e() && r.setTimer(setTimeout(n, t));
      }, t)), r;
    }, reclearInterval: function (e) {
      var t = e && e.getTimer ? e.getTimer() : null;t && (clearTimeout(t), e.setTimer(null));
    } },
      O = { geVersion: function (e, t) {
      return this._compareVersion(e, t) >= 0;
    }, ltVersion: function (e, t) {
      return this._compareVersion(e, t) < 0;
    }, _compareVersion: function (e, t) {
      for (var r = e.split("."), n = t.split("."), o = Math.max(r.length, n.length), i = 0; i < o; i++) {
        var s = parseInt(r[i], 10) || 0,
            a = parseInt(n[i], 10) || 0;if (s > a) return 1;if (s < a) return -1;
      }return 0;
    } },
      y = p(function (e) {
    function t(r) {
      "@babeundefineds - typeof";

      return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = t = function (e) {
        return typeof e;
      } : e.exports = t = function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      }, t(r);
    }e.exports = t;
  });function I(e, t) {
    var r = Object.keys(e);if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }return r;
  }var R = function (t) {
    for (var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};r % 2 ? I(Object(n), !0).forEach(function (r) {
        e(t, r, n[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : I(Object(n)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
      });
    }return t;
  }({}, m, {}, T, {}, O, {}, { pkgError: function (e, t) {
      return { errCode: e && e.errCode || t.errCode, errMsg: e && (e.errMsg || e.message) || t.errMsg };
    } }, {}, { reset: function (e, t) {
      var r = Object.assign({}, e);return Object.keys(t || {}).forEach(function (n) {
        m.isNull(e[n]) && !m.isNull(t[n]) && (r[n] = t[n]);
      }), r;
    }, copy: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];if (m.isNull(e)) return {};var r = {};return Object.keys(e).forEach(function (n) {
        t && t.indexOf(n) > -1 || m.isNull(e[n]) || (r[n] = e[n]);
      }), r;
    }, deepCopyTo: function (e, t) {
      var r = this,
          n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
          o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
          i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;return null === e || "object" !== y(e) || !t || 0 !== n && i >= n ? e : (Object.keys(e).forEach(function (s) {
        o && o.indexOf(s) > -1 || (t[s] = r.deepCopyTo(e[s], t[s], n, o, ++i));
      }), t);
    }, queryToJson: function (e) {
      if (m.isEmpty(e)) return {};try {
        var t = {};return decodeURIComponent(e).split("&").forEach(function (e) {
          if (e && e.split) {
            var r = e.split("=");t[r[0]] = r[1];
          }
        }), t;
      } catch (e) {
        return {};
      }
    }, jsonToQuery: function (e, t) {
      if (m.isNull(e)) return "";try {
        var r = [];return Object.keys(e).forEach(function (n) {
          if (!m.isNull(e[n])) {
            var o = t ? encodeURIComponent(e[n]) : e[n];r.push("".concat(n, "=").concat(o));
          }
        }), r.join("&");
      } catch (e) {
        return "";
      }
    }, addToQuery: function (e, t) {
      var r = this.queryToJson(e),
          n = this.reset(r, t);return this.jsonToQuery(n);
    }, defineProperty: function (e, t, r) {
      if (e) {
        var n = "function" == typeof e[t] ? e[t].bind(e) : e[t];Object.defineProperty(e, t, { value: r(n) });
      }
    } });var b = {},
      w = {},
      A = { consts: r, log: h, global: o, network: E, storage: { getString: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";return this._get(e, function (e) {
          return R.toStr(e, t);
        });
      }, getNumber: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;return this._get(e, function (e) {
          return R.toNumber(e, t);
        });
      }, getBoolean: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];return this._get(e, function (e) {
          return R.toBoolean(e, t);
        });
      }, get: function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;return this._get(e, function (e) {
          return R.toObject(e, t);
        });
      }, set: function (e, t) {
        return this._set(e, t);
      }, remove: function (e) {
        return o.platform.storage.removeStorage(e);
      }, clear: function () {
        return o.platform.storage.clearStorage();
      }, _get: function (e, t) {
        return t(o.platform.storage.getStorage(e));
      }, _set: function (e, t) {
        var r = R.toStr(t);return o.platform.storage.setStorage(e, r);
      } }, eventBus: { _on: function (e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];if (t) {
          var o = b[e] || [];o.push({ priority: r, listener: t, once: n }), b[e] = o.sort(function (e, t) {
            return e.priority < t.priority ? 1 : e.priority > t.priority ? -1 : 0;
          });
        }
      }, once: function (e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;this._on(e, t, r, !0);
      }, on: function (e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;this._on(e, t, r, !1);
      }, off: function (e, t) {
        var r = b[e];r && (r = r.filter(function (e) {
          return e.listener !== t;
        }), b[e] = r);
      }, dispatch: function (e, t) {
        this._dispatch(e, t);
      }, _dispatch: function (e, t) {
        var r = b[e];if (r && !(r.length <= 0)) for (var n = new function (e) {
          var t = this;this.data = e, this._stopped = !1, this.stopPropagation = function () {
            t._stopped = !0;
          }, this.isStopped = function () {
            return t._stopped;
          };
        }(t), o = 0; o < r.length; o++) {
          var i = r[o];try {
            i.listener(n);
          } catch (t) {
            h.warn("EventBus invoke '".concat(e, "' exception: "), t);
          }if (i.once && this.off(e, i.listener), n.isStopped()) break;
        }
      } }, procCenter: { register: function (e, t) {
        var r = w[e] || [];r.push(t), w[e] = r;
      }, getProcessors: function (e) {
        return w[e];
      }, process: function (e, t) {
        var r = this;return v(d.mark(function n() {
          var o, i, s, a;return d.wrap(function (n) {
            for (;;) switch (n.prev = n.next) {case 0:
                if (o = r.getProcessors(e)) {
                  n.next = 3;break;
                }return n.abrupt("return", t);case 3:
                i = {}, s = 0;case 5:
                if (!(s < o.length)) {
                  n.next = 13;break;
                }return n.next = 8, o[s](t);case 8:
                a = n.sent, i = Object.assign(i, a || {});case 10:
                s++, n.next = 5;break;case 13:
                return n.abrupt("return", i);case 14:case "end":
                return n.stop();}
          }, n);
        }))();
      } } },
      D = function () {
    return wx.getLaunchOptionsSync();
  },
      N = function (e) {
    wx.onShow(e);
  },
      x = function (e) {
    wx.offShow(e);
  },
      P = function (e) {
    wx.onHide(e);
  },
      L = function (e) {
    wx.offHide(e);
  },
      k = function (e) {
    wx.onError(e);
  },
      C = function (e) {
    wx.offError(e);
  };function U(e, t) {
    var r = Object.keys(e);if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }return r;
  }var G = { _launchOptions: void 0, init: function () {
      A.eventBus.on(A.consts.EVT_ON_SHOW, this._onShown.bind(this)), k(function (e) {
        A.eventBus.dispatch(A.consts.EVT_ON_ERROR, e);
      });
    }, launchOptions: function () {
      return this._launchOptions || this._parseLaunchOptions(D()), this._launchOptions;
    }, _onShown: function (e) {
      var t = e.data;this._parseLaunchOptions(t);
    }, _parseLaunchOptions: function (t) {
      A.log.debug("onShow", t), this._launchOptions = function (t) {
        for (var r = 1; r < arguments.length; r++) {
          var n = null != arguments[r] ? arguments[r] : {};r % 2 ? U(Object(n), !0).forEach(function (r) {
            e(t, r, n[r]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
        }return t;
      }({}, t, { custom: this._buildCustomOptions(t) });
    }, _buildCustomOptions: function (e) {
      var t = (e || {}).query,
          r = void 0 === t ? {} : t,
          n = { channel: r.channel || r.c || "hortor", origChannel: r.origChannel || "", shareConfigId: r.shareConfigId || "", activityId: r.activityId || "", h_shareCode: r.h_shareCode || "", pageQuery: r.scene || "", boxCode: r.wallCode || r.horwall || "" },
          o = R.queryToJson(r.scene);return n.channel = o.channel || o.c || n.channel, n.origChannel = o.origChannel || n.origChannel, n.boxCode = o.wallCode || o.horwall || n.boxCode, n;
    } },
      V = "3.3.2",
      M = A.consts,
      j = A.eventBus,
      H = A.log,
      B = { _inited: !1, init: function (e) {
      return !!this._checkValid(e) && (this.config = e, this._print(e), j.dispatch(M.EVT_SDK_READY, this.config), !0);
    }, sdkConfig: function () {
      return this.config;
    }, _checkValid: function (e) {
      return this._inited ? (H.error("already initiated"), !1) : this._checkConfigValid(e) ? (this._inited = !0, !0) : (H.error("initiate failed, please check config!"), !1);
    }, _checkConfigValid: function (e) {
      return e.env && e.gameId && e.gameVersion;
    }, _print: function (e) {
      H.info("/*************************/"), H.info(" SDK(".concat(V, ") initiated")), H.info(" Env: ".concat(e.env)), H.info(" GameID: ".concat(e.gameId)), H.info(" GameVersion: ".concat(e.gameVersion)), H.info("/*************************/");
    } },
      F = { canUse: function (e, t) {
      var r = this.getSystemInfo().SDKVersion;return !(!wx[e] || !R.geVersion(r, t));
    }, getSystemInfo: function () {
      return this.systemInfo || (this.systemInfo = wx.getSystemInfoSync(), this.systemInfo.hortorSDKVersion = V), this.systemInfo || {};
    }, getSystemStr: function () {
      if (!this.systemInfoStr) {
        var e = this.getSystemInfo();this.systemInfoStr = JSON.stringify({ SDKVersion: e.SDKVersion, brand: e.brand, model: e.model, system: e.system, version: e.version, screenHeight: e.screenHeight, screenWidth: e.screenWidth, pixelRatio: e.pixelRatio, benchmarkLevel: e.benchmarkLevel, hortorSDKVersion: e.hortorSDKVersion });
      }return this.systemInfoStr;
    }, getNetStatus: function () {
      var e = this;return v(d.mark(function t() {
        return d.wrap(function (t) {
          for (;;) switch (t.prev = t.next) {case 0:
              if (e.netStatus) {
                t.next = 6;break;
              }return e.canUse("offNetworkStatusChange", "2.8.1") && R.defineProperty(wx, "offNetworkStatusChange", e._handleOffNetChange.bind(e)), e._onNetChange(), t.next = 5, e.getNetworkType();case 5:
              e.netStatus = t.sent;case 6:
              return t.abrupt("return", e.netStatus);case 7:case "end":
              return t.stop();}
        }, t);
      }))();
    }, getNetworkType: function () {
      return new Promise(function (e, t) {
        wx.getNetworkType({ success: e, fail: t });
      });
    }, onNetworkStatusChange: function (e) {
      R.isFun(e) && this.canUse("onNetworkStatusChange", "1.1.0") && wx.onNetworkStatusChange(e);
    }, _onNetChange: function () {
      var e = this;this.onNetworkStatusChange(function (t) {
        e.netStatus = t;
      });
    }, _handleOffNetChange: function (e) {
      var t = this;return function (r) {
        R.isFun(e) && e(r), t._onNetChange();
      };
    }, getNotchInfo: function () {
      var e = this.getSystemInfo(),
          t = e.screenHeight,
          r = void 0 === t ? 0 : t,
          n = e.screenWidth;return { result: r / (void 0 === n ? 1 : n) > 2 };
    }, checkPlatform: function (e) {
      return this.getSystemInfo().platform === e;
    }, isAndroid: function () {
      return this.checkPlatform("android");
    }, isIOS: function () {
      return this.checkPlatform("ios");
    }, isPC: function () {
      return this.checkPlatform("devtools");
    } };G.init();var W = function () {
    return G.launchOptions() || {};
  },
      q = function () {
    return B.sdkConfig() || {};
  },
      Q = { request: function (e, t, r, n, o) {
      return new Promise(function (i, s) {
        var a = { url: t, method: e, data: r, header: n, responseType: o, success: function (e) {
            i(e);
          }, fail: function (e) {
            s(e);
          } };wx.request(a);
      });
    } },
      X = { getStorage: function (e) {
      try {
        return wx.getStorageSync(e);
      } catch (e) {
        return null;
      }
    }, setStorage: function (e, t) {
      if (R.isNull(t)) return !1;try {
        return wx.setStorageSync(e, t), !0;
      } catch (e) {
        return !1;
      }
    }, removeStorage: function (e) {
      try {
        return wx.removeStorageSync(e), !0;
      } catch (e) {
        return !1;
      }
    }, clearStorage: function () {
      try {
        return wx.clearStorageSync(), !0;
      } catch (e) {
        return !1;
      }
    } };function Y(e, t) {
    var r = Object.keys(e);if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }return r;
  }var K = function (t) {
    for (var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};r % 2 ? Y(Object(n), !0).forEach(function (r) {
        e(t, r, n[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Y(Object(n)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
      });
    }return t;
  }({}, { STG_LOGIN_INFO: "__sdk_login", STG_FAIL_LOGS: "__sdk_fail_logs", STG_STD_SEQ: "__sdk_std_seq", STG_SHARE_RULES: "__sdk_share_rules" }, {}, { ERR_GET_WXCODE_FAILED: { errCode: 1001, errMsg: "微信Code获取失败" }, ERR_WX_PAY_CANCEL: { errCode: 1002, errMsg: "支付取消" }, ERR_WX_PAY_FAILED: { errCode: 1003, errMsg: "支付失败" }, ERR_WX_AUTH_DENY: { errCode: 1005, errMsg: "拒绝授权获取用户信息" }, ERR_WX_NEED_AUTH: { errCode: 1006, errMsg: "需要用户授权" }, ERR_WX_GETINFO: { errCode: 1007, errMsg: "获取用户信息失败" }, ERR_WX_PAY_DATA_ERROR: { errCode: 20002, errMsg: "订单数据不全，请传入创建订单返回的全部数据" }, ERR_WX_CANT_UPDATE_SHARE: { errCode: 20008, errMsg: "当前版本不支持使用动态分享" }, ERR_WX_DUPLICATE_SHARE: { errCode: 20009, errMsg: "频繁调用分享" }, ERR_WX_GET_SHARE_FAIL: { errCode: 20005, errMsg: "获取分享数据失败" }, ERR_WX_NOT_SUPPORT: { errCode: 3e4, errMsg: "方法暂不支持" }, ERR_WX_PARAMS_ERROR: { errCode: 30001, errMsg: "传参错误" }, ERR_WX_NOT_LOGIN: { errCode: 30002, errMsg: "未登录" }, ERR_INSTANCE_DESTROYED: { errCode: 30003, errMsg: "已销毁" }, ERR_WX_TOO_SHARE_DURATION: { errCode: 20013, errMsg: "录音时长太短" }, ERR_WX_NO_AD: { errCode: 1004, errMsg: "暂无广告" }, ERR_NO_ADUNITID: { errCode: 1005, errMsg: "缺少广告单元id参数" }, ERR_HORTOR_VIDEO_AD: { errCode: 1006, errMsg: "无效hortor视频广告" } }, {}, { REQ_LOGIN: "/mini/api/v1/code", REQ_UPDATE_USER_INFO: "/mini/api/v1/userinfo", REQ_SHARE_INFO: "/mini/api/v1/shareinfo", REQ_SHARE_THEME: "/share/api/v1/scheme/all", REQ_QRCODE: "/mini/api/v1/minicode/create2", REQ_CANCEL_ORDER: "/mini/api/v1/order/cancel", REQ_PAY_CALLBACK: "/mini/api/v1/pay/callback", REQ_CERTIFICATION: "/common/api/v1/realname", REQ_SUBSCRIBE_SAVE: "/wxlog/api/v1/log/msg/subscribe", REQ_SUBSCRIBE_COUNT: "/wxlog/api/v1/log/msg/subscribe/num", REQ_CUSTOMERAPP: "/sdk/conf/api/v1/customer/get", REQ_AUDIO_GET_CREDIT: "/cos-server/api/v1/cos/tmpsts", REQ_STD_LOG: "/htlog/api/v1/log", REQ_STD_SCHEME: "/share_seq-server/api/v1/seq" }, {}, { LOGTP_SCENE: 1, LOGTP_LOGIN: 3, LOGTP_AUTH_DENY: 10, LOGTP_MIDASHI_PAY_CALL: 13, LOGTP_MIDASHI_PAY_SUCCESS: 8, LOGTP_PAY_SUCCESS: 9, LOGTP_PAY_ERROR: 7, LOGTP_SHARE: 2, LOGTP_SHARE_TIMELINE: 44, LOGTP_SHARE_SHOW: 19, LOGTP_SHARE_CALL: 11, LOGTP_SHARE_SUCCESS: 12, LOGTP_GAME_ZONE: 14, LOGTP_VIDEO_AD_POINT_SHOW: 20, LOGTP_VIDEO_AD_CLICK: 15, LOGTP_VIDEO_AD_SHOW: 16, LOGTP_VIDEO_AD_CLOSE: 17, LOGTP_VIDEO_AD_EXIT: 18, LOGTP_VIDEO_AD_LOAD: 23, LOGTP_VIDEO_AD_LOADED: 24, LOGTP_BANNER_AD_SHOW: 28, LOGTP_BANNER_AD_SHOWED: 21, LOGTP_BANNER_AD_HIDE: 22, LOGTP_INTEREST_AD_SHOW: 25, LOGTP_INTEREST_AD_SHOWED: 26, LOGTP_INTEREST_AD_CLOSE: 27, LOGTP_GAME_PORTAL_SHOW: 29, LOGTP_GAME_PORTAL_SHOWED: 30, LOGTP_GAME_PORTAL_CLOSE: 31, LOGTP_GAME_BANNER_SHOW: 32, LOGTP_GAME_BANNER_SHOWED: 33, LOGTP_GAME_BANNER_HIDE: 34, LOGTP_GAME_ICON_SHOW: 35, LOGTP_GAME_ICON_SHOWED: 36, LOGTP_GAME_ICON_HIDE: 37, LOGTP_USER_CAPTURE_SCREEN: 38, LOGTP_GRID_AD_SHOW: 41, LOGTP_GRID_AD_SHOWED: 42, LOGTP_GRID_AD_HIDE: 43 }, {}, { EVT_SESSION: "EVT_SESSION", EVT_WX_LOGIN: "EVT_WX_LOGIN", EVT_NEED_AUTH: "EVT_NEED_AUTH", EVT_ON_AUTH: "EVT_ON_AUTH", EVY_PAY_FAIL: "EVY_PAY_FAIL", EVT_SHARE_START: "EVT_SHARE_START", EVT_SHARE_END: "EVT_SHARE_END", EVT_SHARE_TIME_START: "EVT_SHARE_TIME_START", EVT_SHARE_TIME_END: "EVT_SHARE_TIME_END", EVT_SHARE_FRIEND: "EVT_SHARE_FRIEND", EVT_VIDEO_AD_PLAY_START: "EVT_VIDEO_AD_PLAY_START", EVT_VIDEO_AD_PLAY_FINISH: "EVT_VIDEO_AD_PLAY_FINISH", EVT_VIDEO_AD_ERROR: "EVT_VIDEO_AD_ERROR" }, {}, { STATUES_SHARING: "sharing" }, {}, { COM_SHARE_RESULT: { SUC: "success", FAIL: "fail", AUTO: void 0 } }, {}, { REGULAR_SHARE: 0, TIMELINE_SHARE: 1, RECORDER_SHARE: 2 }),
      J = function () {
    var e = q(),
        t = e.gameId,
        r = e.env;return "".concat(K.STG_LOGIN_INFO, "_").concat(t, "_").concat(r);
  },
      z = void 0,
      $ = function () {
    return void 0 === z && (A.log.debug("get login storage", J()), z = A.storage.get(J(), null)), z;
  },
      Z = void 0,
      ee = {},
      te = { clearUserInfo: function () {
      return z = null, A.storage.remove(J());
    }, getUserInfo: function (e) {
      var t = $() || {},
          r = t.userInfo,
          n = t.saveTime;if (!r || !n) return null;var o = ((r || {}).userSdk || {}).hasUserInfo;if (!e && !o) return null;var i = q().expireTime || 86400,
          s = R.getTimeSec();return n + i < s || n > s ? null : r;
    }, setUserInfo: function (e) {
      var t = e || {},
          r = t.encryptUserInfo,
          n = t.userSdk;if (!r) return !1;var o = { userInfo: e, saveTime: R.getTimeSec() };A.storage.set(J(), o), o.userInfo = Object.assign(e, { userSdk: this._inheritOldData(n) }), z = o;
    }, _inheritOldData: function (e) {
      var t = this.getTempUser();if (!t || !e) return e;var r = t.isNewUser;return R.isNull(r) || (e.isNewUser = !!r), e;
    }, getSDKUserInfo: function () {
      var e = (($() || {}).userInfo || {}).userSdk;return e && (e.gameUser = this.getGameUser()), e;
    }, setTempUser: function (e) {
      var t = (e || {}).userSdk;Z = t ? this._inheritOldData(t) : null;
    }, getTempUser: function () {
      if (!Z) {
        var e = (($() || {}).userInfo || {}).userSdk;Z = e || null;
      }return Z;
    }, setGameUser: function (e) {
      ee = Object.assign(ee, e), A.eventBus.dispatch(A.consts.EVT_SET_GAMEUSER, ee);
    }, getGameUser: function () {
      return ee;
    } },
      re = { _isShowed: !1, _isLaunched: !1, _sdkInited: !1, _hideAt: 0, init: function () {
      N(this._handleOnShow.bind(this)), P(this._handleOnHide.bind(this)), A.eventBus.once(A.consts.EVT_SDK_READY, this._onSDKInit.bind(this), -1);
    }, _onSDKInit: function () {
      var e = this;this._sdkInited = !0, this._isShowed ? this._triggerOnShow() : setTimeout(function () {
        e._isShowed || e._triggerOnShow();
      }, 2e3);
    }, _triggerOnShow: function () {
      var e = D();this._handleOnShow(e);
    }, _handleOnShow: function (e) {
      var t = this._hideAt ? Date.now() - this._hideAt : 0;e.hideDuration = t, this._isShowed = !0, e.coldStart = !this._isLaunched, A.eventBus.dispatch(A.consts.EVT_ON_SHOW, e), this._sdkInited && (this._isLaunched = !0);
    }, _handleOnHide: function (e) {
      this._hideAt = Date.now(), A.eventBus.dispatch(A.consts.EVT_ON_HIDE, e);
    } },
      ne = { network: Q, storage: X, information: { getUserInfo: function () {
        return te.getSDKUserInfo();
      }, getSystemStr: function () {
        return F.getSystemStr();
      }, getSystemInfo: function () {
        return F.getSystemInfo();
      }, getNetStatus: function () {
        return F.getNetStatus();
      }, getLaunchOpts: function () {
        return W();
      }, getConfig: function () {
        return q();
      } } };A.global.platform = ne, re.init();var oe,
      ie,
      se,
      ae = function (e) {
    return B.init(e);
  },
      ce = { init: function (e) {
      return ae(e);
    } },
      ue = A.consts,
      fe = { HOST: (oe = {}, e(oe, ue.ENV_PROD, "https://wxmini.hortorgames.com"), e(oe, ue.ENV_TEST, "https://wxmini-test.hortorgames.com"), e(oe, ue.ENV_DEV, "https://wxmini-dev.hortorgames.com"), oe), HOST_SERVER: (ie = {}, e(ie, ue.ENV_PROD, "https://platform.hortorgames.com"), e(ie, ue.ENV_TEST, "https://platform-test.hortorgames.com"), e(ie, ue.ENV_DEV, "https://platform-dev.hortorgames.com"), ie), HOST_LOG: (se = {}, e(se, ue.ENV_PROD, "https://wxmini-log.hortorgames.com"), e(se, ue.ENV_TEST, "https://wxmini-test.hortorgames.com"), e(se, ue.ENV_DEV, "https://wxmini-dev.hortorgames.com"), se) },
      he = function () {
    var e = B.sdkConfig().env || ue.ENV_PROD,
        t = fe.HOST;return (void 0 === t ? {} : t)[e];
  },
      pe = function () {
    var e = B.sdkConfig().env || ue.ENV_PROD,
        t = fe.HOST_SERVER;return (void 0 === t ? {} : t)[e];
  },
      _e = function () {
    var e = B.sdkConfig().env || ue.ENV_PROD,
        t = fe.HOST_LOG;return (void 0 === t ? {} : t)[e];
  };function ge(e, t) {
    var r = Object.keys(e);if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }return r;
  }var de = function (t) {
    for (var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};r % 2 ? ge(Object(n), !0).forEach(function (r) {
        e(t, r, n[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ge(Object(n)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
      });
    }return t;
  }({}, { REQ_SWITCH: "/custom-switch/api/v1/switch/multi/status", REQ_NOTICES: "/capi/v1/notice", REQ_IPS_CHECK: "/ipregion/api/v1/blockstatus/multi", REQ_EXT_USER_INFO: "/wechat/user-info", REQ_AGGREGATION: "/platform-gateway-server/api/v1/aggr", REQ_LOGS: "/mini/api/v1/log/multi", REQ_REMOTE_LOG: "/wxlog/api/v1/log" }),
      le = { _logs: [], _delayer: void 0, post: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];e && (this._logs.push(e), t ? this._report() : this._delayReport());
    }, _init: function () {
      A.eventBus.on(A.consts.EVT_REPORT_LOG, this._onReport.bind(this));
    }, _onReport: function (e) {
      var t = e.data || {},
          r = t.log,
          n = t.immediate;this.post(r, n);
    }, _report: function () {
      var e = this._logs;this._logs = [];var t = A.global.platform.information,
          r = t.getUserInfo() || {},
          n = r.userId,
          o = r.uniqueId,
          i = t.getConfig(),
          s = { gameId: i.gameId, userId: n, uniqueId: o, gameVersion: i.gameVersion, sysInfo: t.getSystemStr(), logs: e },
          a = "".concat(_e()).concat(de.REQ_LOGS);A.log.debug("log", s), A.network.post(a, s).catch(function (e) {
        A.log.debug("log fail", e);
      });
    }, _delayReport: function () {
      var e = this;if (!this._delayer) {
        var t = (A.global.platform.information.getConfig() || {}).logReportFrequency,
            r = void 0 === t ? 5e3 : t;this._delayer = setTimeout(function () {
          e._report(), e._delayer = null;
        }, r);
      }
    } };le._init();var ve = { post: le.post.bind(le) },
      Ee = { postLog: function (e, t) {
      return ve.post(e, t);
    } };G.init();var me = { launchOptions: function () {
      return G.launchOptions() || {};
    }, getConfig: function () {
      return B.sdkConfig() || {};
    }, getNotchInfo: function () {
      return F.getNotchInfo();
    }, G$02: function (e) {
      N(e);
    }, offShow: function (e) {
      x(e);
    }, onHide: function (e) {
      P(e);
    }, offHide: function (e) {
      L(e);
    }, onError: function (e) {
      k(e);
    }, offError: function (e) {
      C(e);
    } },
      Se = { canUserInfoBtn: F.canUse("createUserInfoButton", "2.0.1"), createUserInfoButton: function (e) {
      return this.canUserInfoBtn ? wx.createUserInfoButton(Object.assign({}, { lang: "zh_CN" }, e)) : null;
    }, checkSession: function () {
      return new Promise(function (e, t) {
        wx.checkSession({ success: e, fail: t });
      });
    }, wxLogin: function () {
      return new Promise(function (e, t) {
        wx.login({ success: function (r) {
            var n = (r || {}).code;if (n) return e(n);t(K.ERR_GET_WXCODE_FAILED);
          }, fail: t });
      });
    }, checkAuthorize: function () {
      return new Promise(function (e, t) {
        wx.getSetting({ success: function (t) {
            e(t.authSetting["scope.userInfo"]);
          }, fail: t });
      });
    }, getUserInfo: function () {
      return new Promise(function (e, t) {
        wx.getUserInfo({ withCredentials: !0, lang: "zh_CN", success: function (r) {
            if ((r || {}).encryptedData) return e(r);t(K.ERR_WX_GETINFO);
          }, fail: t });
      });
    }, authorize: function () {
      return new Promise(function (e, t) {
        wx.authorize({ scope: "scope.userInfo", success: function () {
            e(!0);
          }, fail: t });
      });
    }, toSetting: function () {
      return new Promise(function (e, t) {
        wx.openSetting({ success: function (t) {
            e(t.authSetting["scope.userInfo"]);
          }, fail: t });
      });
    }, getUserGameLabel: function () {
      return new Promise(function (e, t) {
        F.canUse("getUserGameLabel", "2.9.3") ? wx.getUserGameLabel({ success: e, fail: t }) : t(K.ERR_WX_NOT_SUPPORT);
      });
    } },
      Te = function (e) {
    return new Promise(function (t, r) {
      wx.showModal(Object.assign({ success: t, fail: r }, e));
    });
  },
      Oe = { setGameUser: function (e) {
      te.setGameUser(e);
    }, registerOnLogin: function (e) {
      A.eventBus.on(A.consts.EVT_ON_LOGIN, e);
    }, login: function (e, t) {
      var r = this;return v(d.mark(function n() {
        var o;return d.wrap(function (n) {
          for (;;) switch (n.prev = n.next) {case 0:
              return A.eventBus.dispatch(A.consts.EVT_LOGIN_START), n.next = 3, r._login(e, t, !1);case 3:
              return o = n.sent, r._postLog(K.LOGTP_LOGIN), A.eventBus.dispatch(A.consts.EVT_ON_LOGIN, o), n.abrupt("return", o.encryptUserInfo);case 7:case "end":
              return n.stop();}
        }, n);
      }))();
    }, update: function (e) {
      var t = this;return v(d.mark(function r() {
        var n;return d.wrap(function (r) {
          for (;;) switch (r.prev = r.next) {case 0:
              return A.eventBus.dispatch(A.consts.EVT_UPDATE_START), r.next = 3, t._login(e, !1, !0);case 3:
              return n = r.sent, t._postLog(K.LOGTP_LOGIN), A.eventBus.dispatch(A.consts.EVT_ON_UPDATE, n), r.abrupt("return", n.encryptUserInfo);case 7:case "end":
              return r.stop();}
        }, r);
      }))();
    }, createUserInfoBtn: function (e) {
      var t = this,
          r = q().getUserInfoBtn,
          n = Se.createUserInfoButton(e || r);return n && n.onTap(function (e) {
        var r = e || {},
            n = r.userInfo,
            o = r.encryptedData,
            i = n || {},
            s = i.nickName,
            a = i.gender;s && A.eventBus.dispatch(K.EVT_ON_AUTH, { nickName: s, gender: a }), o || t._postLog(K.LOGTP_AUTH_DENY);
      }), n;
    }, checkAuth: function () {
      return v(d.mark(function e() {
        return d.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {case 0:
              if (e.prev = 0, !Se.canUserInfoBtn) {
                e.next = 7;break;
              }return e.next = 4, Se.checkAuthorize();case 4:
              return e.abrupt("return", e.sent);case 7:
              return e.next = 9, Se.authorize();case 9:
              return e.abrupt("return", e.sent);case 10:
              e.next = 16;break;case 12:
              return e.prev = 12, e.t0 = e.catch(0), A.log.debug("checkAuth fail", e.t0), e.abrupt("return", !1);case 16:case "end":
              return e.stop();}
        }, e, null, [[0, 12]]);
      }))();
    }, _login: function (e, t, r) {
      var n = this;return v(d.mark(function o() {
        var i, s, a, c, u, f, h, p;return d.wrap(function (o) {
          for (;;) switch (o.prev = o.next) {case 0:
              return o.prev = 0, o.next = 3, n._getStorage(t, r);case 3:
              if (i = o.sent, s = q(), a = s.gameId, !i) {
                o.next = 10;break;
              }if (!(c = i.userSdk) || c.gameId !== a) {
                o.next = 10;break;
              }return A.log.debug("storageInfo", i), o.abrupt("return", i);case 10:
              return o.next = 12, n._wxlogin();case 12:
              return u = o.sent, o.next = 15, n._entry(u, t, r);case 15:
              if (f = o.sent, !(h = (f || {}).userSdk) || !h.isAuth) {
                o.next = 19;break;
              }return o.abrupt("return", f);case 19:
              return o.next = 21, n._fetchUserInfo(e);case 21:
              return p = o.sent, o.next = 24, n._postUserInfo(p);case 24:
              return o.abrupt("return", o.sent);case 27:
              throw o.prev = 27, o.t0 = o.catch(0), R.pkgError(o.t0, A.consts.ERR_UNKNOWN);case 30:case "end":
              return o.stop();}
        }, o, null, [[0, 27]]);
      }))();
    }, _getStorage: function (e, t) {
      var r = this;return v(d.mark(function n() {
        var o, i;return d.wrap(function (n) {
          for (;;) switch (n.prev = n.next) {case 0:
              if (!t) {
                n.next = 2;break;
              }return n.abrupt("return", null);case 2:
              if (o = te.getUserInfo(e)) {
                n.next = 5;break;
              }return n.abrupt("return", null);case 5:
              return n.next = 7, r._checkSession();case 7:
              return i = n.sent, n.abrupt("return", i ? o : null);case 9:case "end":
              return n.stop();}
        }, n);
      }))();
    }, _checkSession: function () {
      return v(d.mark(function e() {
        return d.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {case 0:
              return e.prev = 0, e.next = 3, Se.checkSession();case 3:
              return A.eventBus.dispatch(K.EVT_SESSION, {}), e.abrupt("return", !0);case 7:
              return e.prev = 7, e.t0 = e.catch(0), A.log.warn("session fail", e.t0), A.eventBus.dispatch(K.EVT_SESSION, { err: e.t0 }), e.abrupt("return", !1);case 12:case "end":
              return e.stop();}
        }, e, null, [[0, 7]]);
      }))();
    }, _wxlogin: function () {
      return v(d.mark(function e() {
        var t;return d.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {case 0:
              return e.prev = 0, e.next = 3, Se.wxLogin();case 3:
              return t = e.sent, A.eventBus.dispatch(K.EVT_WX_LOGIN, { code: t }), e.abrupt("return", t);case 8:
              throw e.prev = 8, e.t0 = e.catch(0), A.eventBus.dispatch(K.EVT_WX_LOGIN, { err: e.t0 }), R.pkgError(e.t0, K.ERR_GET_WXCODE_FAILED);case 12:case "end":
              return e.stop();}
        }, e, null, [[0, 8]]);
      }))();
    }, _entry: function (e, t, r) {
      var n = this;return v(d.mark(function o() {
        var i, s, a, c, u, f, h, p, _, g, l, v, E, m, S, T, O;return d.wrap(function (o) {
          for (;;) switch (o.prev = o.next) {case 0:
              return i = q(), s = i.gameId, a = W(), c = a.custom, u = a.query, h = (f = c || {}).channel, p = f.origChannel, _ = f.pageQuery, g = f.shareConfigId, l = f.activityId, v = f.h_shareCode, E = f.boxCode, m = { version: V, gameId: s, channel: h, origChannel: p, query: _, queryRaw: JSON.stringify(u), shareConfigId: g, activityId: l, h_shareCode: v, boxCode: E, isWeak: t, forceAuth: r, code: e, sysInfo: F.getSystemStr() }, o.prev = 4, S = "".concat(he()).concat(K.REQ_LOGIN), o.next = 8, A.network.postForm(S, m);case 8:
              return T = o.sent, O = T.data, A.log.debug("entry login", O), n._setUserInfo(O), te.setTempUser(O), o.abrupt("return", O);case 16:
              throw o.prev = 16, o.t0 = o.catch(4), A.log.warn("entry err", o.t0), te.clearUserInfo(), R.pkgError(o.t0, A.consts.ERR_NET_FAIL);case 21:case "end":
              return o.stop();}
        }, o, null, [[4, 16]]);
      }))();
    }, _fetchUserInfo: function (e) {
      var t = this;return v(d.mark(function r() {
        var n;return d.wrap(function (r) {
          for (;;) switch (r.prev = r.next) {case 0:
              if (n = null, !Se.canUserInfoBtn) {
                r.next = 7;break;
              }return r.next = 4, t._highVGetUserInfo(e);case 4:
              n = r.sent, r.next = 10;break;case 7:
              return r.next = 9, t._lowVGetUserInfo();case 9:
              n = r.sent;case 10:
              return A.log.debug("fetch userinfo", n), r.abrupt("return", n);case 12:case "end":
              return r.stop();}
        }, r);
      }))();
    }, _postUserInfo: function (e) {
      var t = this;return v(d.mark(function r() {
        var n, o, i, s, a, c, u, f, h, p, _, g;return d.wrap(function (r) {
          for (;;) switch (r.prev = r.next) {case 0:
              return o = (n = e || {}).encryptedData, i = n.iv, s = te.getTempUser() || {}, a = s.userId, c = s.uniqueId, u = q(), f = u.gameId, h = { entryAlias: "minisdk", gameId: f, userId: a, uniqueId: c, encryptedData: o, iv: i }, r.prev = 4, p = "".concat(he()).concat(K.REQ_UPDATE_USER_INFO), r.next = 8, A.network.postForm(p, h);case 8:
              if (_ = r.sent, (g = _.data) && g.encryptUserInfo) {
                r.next = 12;break;
              }throw A.consts.ERR_NET_FAIL;case 12:
              return t._setUserInfo(g), r.abrupt("return", g);case 16:
              throw r.prev = 16, r.t0 = r.catch(4), A.log.warn("_postUserInfo err", r.t0), R.pkgError(r.t0, A.consts.ERR_NET_FAIL);case 20:case "end":
              return r.stop();}
        }, r, null, [[4, 16]]);
      }))();
    }, _highVGetUserInfo: function (e) {
      var t = this;return v(d.mark(function r() {
        var n, o, i, s, a, c;return d.wrap(function (r) {
          for (;;) switch (r.prev = r.next) {case 0:
              return r.next = 2, t.checkAuth();case 2:
              if (!r.sent) {
                r.next = 9;break;
              }return r.next = 6, t._getUserInfo();case 6:
              r.t0 = r.sent, r.next = 10;break;case 9:
              r.t0 = null;case 10:
              if (!(n = r.t0)) {
                r.next = 13;break;
              }return r.abrupt("return", n);case 13:
              if (A.eventBus.dispatch(K.EVT_NEED_AUTH), o = q(), i = o.getUserInfoBtn, a = (s = e || {}).useGameBtn, c = s.config, !a && (c || i)) {
                r.next = 18;break;
              }throw K.ERR_WX_NEED_AUTH;case 18:
              return r.next = 20, t._highVGetAuth(e);case 20:
              return r.abrupt("return", r.sent);case 21:case "end":
              return r.stop();}
        }, r);
      }))();
    }, _getUserInfo: function () {
      return v(d.mark(function e() {
        return d.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {case 0:
              return e.prev = 0, e.next = 3, Se.getUserInfo();case 3:
              return e.abrupt("return", e.sent);case 6:
              return e.prev = 6, e.t0 = e.catch(0), e.abrupt("return", null);case 9:case "end":
              return e.stop();}
        }, e, null, [[0, 6]]);
      }))();
    }, _setUserInfo: function (e) {
      var t = e || {},
          r = t.encryptUserInfo,
          n = t.userSdk,
          o = q().gameId;r && (this._postScene(), n && (n.gameId = o), te.setUserInfo(e));
    }, _highVGetAuth: function (e) {
      var t = this,
          r = e || {},
          n = r.config,
          o = r.onTap,
          i = r.G$02,
          s = r.stayOnDeny;return new Promise(function (e, r) {
        var a = t._getOnlyBtn(n);if (!a) throw K.ERR_WX_NOT_SUPPORT;a.onTap(function (n) {
          var i = (n || {}).encryptedData;i ? e(n) : s || r(K.ERR_WX_AUTH_DENY), o && o(n), !i && s || t._removeOnlyBtn();
        }), a.show(), i && i();
      });
    }, _getOnlyBtn: function (e) {
      return this._removeOnlyBtn(), this.authBtn = this.createUserInfoBtn(e), this.authBtn;
    }, _removeOnlyBtn: function () {
      this.authBtn && (this.authBtn.hide(), this.authBtn.destroy(), this.authBtn = null);
    }, _lowVGetUserInfo: function () {
      var e = this;return v(d.mark(function t() {
        var r;return d.wrap(function (t) {
          for (;;) switch (t.prev = t.next) {case 0:
              return t.next = 2, e.checkAuth();case 2:
              if (r = t.sent) {
                t.next = 7;break;
              }return t.next = 6, e._lowVGetAuth();case 6:
              r = t.sent;case 7:
              if (r) {
                t.next = 9;break;
              }throw K.ERR_WX_AUTH_DENY;case 9:
              return t.next = 11, Se.getUserInfo();case 11:
              return t.abrupt("return", t.sent);case 12:case "end":
              return t.stop();}
        }, t);
      }))();
    }, _lowVGetAuth: function () {
      var e = this;return v(d.mark(function t() {
        var r;return d.wrap(function (t) {
          for (;;) switch (t.prev = t.next) {case 0:
              return t.prev = 0, t.next = 3, Se.toSetting();case 3:
              if (!t.sent) {
                t.next = 6;break;
              }return t.abrupt("return", !0);case 6:
              return t.next = 8, Te({ title: "提示", content: "需要开启访问用户信息权限", showCancel: !0, cancelText: "知道了", confirmText: "去设置" });case 8:
              if (r = t.sent, r.confirm) {
                t.next = 12;break;
              }return t.abrupt("return", !1);case 12:
              return t.next = 14, e._lowVGetAuth();case 14:
              return t.abrupt("return", t.sent);case 17:
              return t.prev = 17, t.t0 = t.catch(0), A.log.debug("low auth fail", t.t0), t.abrupt("return", !1);case 21:case "end":
              return t.stop();}
        }, t, null, [[0, 17]]);
      }))();
    }, _postLog: function (e, t) {
      var r = te.getTempUser() || {},
          n = r.userId,
          o = r.uniqueId,
          i = W(),
          s = i.custom,
          a = i.scene,
          c = s || {},
          u = { logType: e, channel: c.channel, origChannel: c.origChannel, scene: a, userId: n, uniqueId: o },
          f = t ? Object.assign(u, t) : u;A.eventBus.dispatch(A.consts.EVT_REPORT_LOG, { log: f });
    }, _postScene: function () {
      if (!te.getUserInfo(!0)) {
        var e = W() || {},
            t = e.custom || {},
            r = t.shareConfigId,
            n = t.activityId,
            o = R.copy(e, ["custom"]);this._postLog(K.LOGTP_SCENE, { content: o, shareConfigId: r, activityId: n });
      }
    } },
      ye = { createGetUserInfoBtn: function (e) {
      return Oe.createUserInfoBtn(e);
    }, login: function (e) {
      return Oe.login(e, !1);
    }, weakLogin: function (e) {
      return Oe.login(e, !0);
    }, updateUserInfo: function (e) {
      return Oe.update(e);
    }, registerOnLogin: function (e) {
      Oe.registerOnLogin(e);
    }, getGetUserInfoBtn: function (e) {
      return Oe.authBtn && !e ? Oe.authBtn : Oe._getOnlyBtn(e);
    }, setGameUserInfo: function (e) {
      Oe.setGameUser(e);
    } },
      Ie = {},
      Re = function (e, t) {
    Ie[e] = t;
  },
      be = function (e) {
    return !!Ie[e];
  };function we() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};this.lastIndex = -1, this.allZero = !1, this.allWeight = 0, this.unitWeight = 100, this.opt = e, this._init();
  }we.prototype = { _init: function () {
      var e = this.opt,
          t = e.list,
          r = e.lastIndex,
          n = e.weightCount;if (t && t.length) {
        this.lastIndex = "number" == typeof r ? r : -1;var o = 0;"number" == typeof n ? o = n : t.map(function (e) {
          var t = e.weight;o += (void 0 === t ? 0 : t) - 0;
        }), 0 === o && (this.allZero = !0, o = t.length * this.unitWeight), this.allWeight = o;
      }
    }, _setLastIndex: function (e) {
      this.lastIndex = e;
    }, _getLastIndex: function () {
      return this.lastIndex;
    }, _getRandomIndex: function () {
      var e = this,
          t = this.opt.list,
          r = Math.floor(Math.random() * this.allWeight),
          n = 0;return t.findIndex(function (t) {
        var o = e.allZero ? e.unitWeight : t.weight,
            i = !!(n <= r && r < n + o);return i || (n += o), i;
      });
    }, _getUniqueIndex: function () {
      var e = this._getLastIndex(),
          t = this._getRandomIndex();return t !== e ? (this._setLastIndex(t), t) : this._getUniqueIndex();
    }, getIndex: function () {
      var e = -1;switch (this.opt.list.length) {case 0:
          e = -1;break;case 1:
          e = 0;break;default:
          e = this._getUniqueIndex();}return e;
    }, getData: function () {
      var e = (this.opt || {}).list;return (void 0 === e ? [] : e)[this.getIndex()];
    } };var Ae = { _renderQuery: function (e) {
      var t = e || {},
          r = t.query,
          n = t.shareConfigId,
          o = t.activityId,
          i = t.shareGuid,
          s = R.getTimeSec(),
          a = te.getSDKUserInfo() || {},
          c = a.h_shareCode,
          u = void 0 === c ? "" : c,
          f = a.channel,
          h = void 0 === f ? "hortor_" : f,
          p = a.origChannel,
          _ = void 0 === p ? "" : p,
          g = { channel: R.endsWith(h, "_") ? h : "".concat(h, "_"), h_shareCode: u, timestamp: s, origChannel: _, shareConfigId: n, activityId: o, share_guid: i };return R.addToQuery(r, g);
    }, _renderTitle: function (e) {
      var t = e || {},
          r = t.title,
          n = t.titleParams;if (!r) return "";n && "object" === y(n) && Object.keys(n).forEach(function (e) {
        if (new RegExp("({{".concat(e, "}})")).test(r)) {
          var t = n[e] + "";r = r.replace(RegExp.$1, t);
        }
      });return r = r.replace(/({{[-\w]*}})/g, "");
    }, _renderShareGuid: function (e) {
      var t = e || {},
          r = t.query,
          n = t.shareGuid,
          o = void 0 === n ? "" : n,
          i = (t.sequenceInfo || {}).shareGuid;if (!R.isEmpty(i)) return i;if (!R.isEmpty(o)) return o;var s = R.queryToJson(r);return R.isEmpty(s.share_guid) ? R.generateGuid() : s.share_guid;
    }, _renderForceResult: function (e) {
      return ((e || {}).sequenceInfo || {}).forceResult;
    }, _renderShareId: function (e) {
      var t = e || {},
          r = t.id,
          n = t.query;return r || R.queryToJson(n).shareConfigId || "";
    }, renderShare: function (e, t) {
      var r = (e || {}).beforeShare,
          n = R.isFun(r) ? r(t) : null,
          o = Object.assign({}, t || {}, e || {}, n || {});return o.shareConfigId = this._renderShareId(o), o.title = this._renderTitle(o), o.shareGuid = this._renderShareGuid(o), o.query = this._renderQuery(o), o.forceResult = this._renderForceResult(o), R.copy(o, ["id", "gameID", "beforeShare", "success", "fail", "complete"]);
    }, renderShareThemes: function (e) {
      if (!e || !e.length) return {};var t = {},
          r = {};for (var n in e.map(function (e) {
        t[e.type] = t[e.type] || [], t[e.type].push(e);
      }), t) r[n] = new we({ list: t[n] });return r;
    }, renderPostParams: function (e) {
      var t = e || {},
          r = t.shareConfigId;return { shareConfigId: void 0 === r ? "" : r, customShareType: t.shareType, activityId: t.activityId, content: R.copy(e, ["activityId", "shareType", "shareConfigId"]) };
    } },
      De = { _canUpdateMenu: F.canUse("updateShareMenu", "1.2.0"), _canUpdatable: F.canUse("updateShareMenu", "2.4.0"), shareAppMessage: function (e) {
      wx.shareAppMessage(e);
    }, onShareAppMessage: function (e) {
      wx.onShareAppMessage(e);
    }, onShareTimeline: function (e) {
      wx.onShareTimeline(e);
    }, showShareMenu: function (e) {
      wx.showShareMenu(e);
    }, updateShareMenu: function (e) {
      var t = this;return new Promise(function (r, n) {
        t._canUpdateMenu ? void 0 === e.isUpdatableMessage || t._canUpdatable ? wx.updateShareMenu(Object.assign({}, e || {}, { success: r, fail: n })) : n(K.ERR_WX_CANT_UPDATE_SHARE) : n(K.ERR_WX_NOT_SUPPORT);
      });
    }, getShareInfo: function (e) {
      return new Promise(function (t, r) {
        wx.getShareInfo(Object.assign({}, e, { success: function (e) {
            "getShareInfo:ok" === e.errMsg ? t(e) : r(e);
          }, fail: r }));
      });
    }, setMessageToFriendQuery: function (e) {
      return !!F.canUse("setMessageToFriendQuery", "2.9.0") && wx.setMessageToFriendQuery(e);
    }, onShareMessageToFriend: function (e) {
      F.canUse("onShareMessageToFriend", "2.9.4") && wx.onShareMessageToFriend(e);
    }, onInteractiveStorageModified: function (e) {
      F.canUse("onInteractiveStorageModified", "2.9.0") && wx.onInteractiveStorageModified(e);
    } },
      Ne = function (e) {
    return v(d.mark(function t() {
      var r, n, o, i;return d.wrap(function (t) {
        for (;;) switch (t.prev = t.next) {case 0:
            return n = (r = e || {}).activityId, o = r.templateInfo, i = { withShareTicket: !0, isUpdatableMessage: !0, activityId: n, templateInfo: void 0 === o ? {} : o }, t.next = 4, De.updateShareMenu(i);case 4:
            return t.abrupt("return", t.sent);case 5:case "end":
            return t.stop();}
      }, t);
    }))();
  },
      xe = function () {
    return v(d.mark(function e() {
      var t;return d.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {case 0:
            return e.next = 2, R.wait(1);case 2:
            return t = { withShareTicket: !0, isUpdatableMessage: !1, templateInfo: {} }, e.next = 5, De.updateShareMenu(t);case 5:
            return e.abrupt("return", e.sent);case 6:case "end":
            return e.stop();}
      }, e);
    }))();
  };function Pe() {
    return this.forceResult = void 0, this.destroyed = !1, this.inited = !1, this;
  }function Le(e, t) {
    var r = Object.keys(e);if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }return r;
  }function ke(t) {
    for (var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};r % 2 ? Le(Object(n), !0).forEach(function (r) {
        e(t, r, n[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Le(Object(n)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
      });
    }return t;
  }Pe.prototype = { init: function (e) {
      if (!this.inited) {
        this.inited = !0;var t = e || {},
            r = t.forceResult,
            n = t.shareSuccessDiff,
            o = t.onShareCallbackTime,
            i = t.success,
            s = t.fail,
            a = t.complete;this.successDiff = n || 2e3, this.onCallbackTime = o || 500, this.forceResult = r, this.showEnv = this.G$02.bind(this, { success: i, fail: s, complete: a }), this._bind();
      }
    }, _bind: function () {
      A.eventBus.on(A.consts.EVT_ON_SHOW, this.showEnv);
    }, _unbind: function () {
      A.eventBus.off(A.consts.EVT_ON_SHOW, this.showEnv);
    }, G$02: function (e, t) {
      if (!this.destroyed) {
        var r = e || {},
            n = r.success,
            o = r.fail,
            i = r.complete,
            s = ((t || {}).data || {}).hideDuration;this._check(s || 0).then(function (e) {
          i && R.isFun(i) && i(e), R.isFun(n) && n(e);
        }).catch(function (e) {
          i && R.isFun(i) && i(e), R.isFun(o) && o(e);
        });
      }
    }, _check: function (e) {
      var t = this;return v(d.mark(function r() {
        var n, o;return d.wrap(function (r) {
          for (;;) switch (r.prev = r.next) {case 0:
              return R.getTime(), n = t.successDiff, t.destroy(), r.next = 5, R.wait(t.onCallbackTime);case 5:
              if (o = { isForce: !1, isFake: !0, diffTime: e, successDiff: n, errMsg: "微信分享回调已经废弃，这是模拟分享成功" }, t.forceResult !== K.COM_SHARE_RESULT.SUC) {
                r.next = 10;break;
              }return o.isForce = !0, o.errMsg = "强制分享成功", r.abrupt("return", o);case 10:
              if (t.forceResult !== K.COM_SHARE_RESULT.FAIL) {
                r.next = 14;break;
              }throw o.isForce = !0, o.errMsg = "强制分享失败", o;case 14:
              if (!(e < n)) {
                r.next = 17;break;
              }throw o.errMsg = "分享操作太快，模拟分享失败", o;case 17:
              return r.abrupt("return", o);case 18:case "end":
              return r.stop();}
        }, r);
      }))();
    }, destroy: function () {
      this.destroyed || (this._unbind(), this.destroyed = !0);
    } };var Ce = A.procCenter,
      Ue = A.log,
      Ge = { withShareTicket: !0, openGetShareTheme: !0, shareSuccessDiff: 2e3, onShareCallbackTime: 500, useShareAdapter: !0 },
      Ve = { config: void 0, shareThemesMap: {}, diyOptions: null, init: function () {
      A.eventBus.once(A.consts.EVT_SDK_READY, this._init.bind(this));
    }, _init: function () {
      var e = this;Ce.register(A.consts.PROC_REQ_AGGR, this._processReq.bind(this)), this.setConfig(q());var t = this.config.openShareTimeline,
          r = void 0 !== t && t,
          n = F.canUse("onShareTimeline", "2.11.3") && r;n ? De.showShareMenu({ withShareTicket: !0, menus: ["shareAppMessage", "shareTimeline"] }) : De.showShareMenu({ withShareTicket: !0 }), this.onShareAppMessage(), n && this.onShareTimeline();var o = this.config || {},
          i = o.openGetShareTheme,
          s = void 0 === i || i,
          a = o.shareThemes;s && this._getShareThemes(a).then(function (t) {
        e._setShareThemes(t);
      }).catch(function (e) {
        Ue.debug("getShareTheme err", e);
      }), De.onShareMessageToFriend(function (e) {
        A.eventBus.dispatch(K.EVT_SHARE_FRIEND, e);
      });
    }, _processReq: function (e) {
      Ue.debug("share process aggr req");var t = (e || {}).resp,
          r = (t || {}).share;return r && this._setShareThemes(r), t || null;
    }, setConfig: function (e) {
      this.config = Object.assign({}, this.config || Ge, e || {});
    }, _setShareThemes: function (e) {
      var t = ((e || {}).data || {}).schemes;t && (this.shareThemesMap = Ae.renderShareThemes(t));
    }, _getShareThemes: function (e) {
      var t = this;return v(d.mark(function r() {
        var n, o, i, s;return d.wrap(function (r) {
          for (;;) switch (r.prev = r.next) {case 0:
              return n = t.config || {}, o = n.gameId, i = { gameID: o }, e && e.length && (i.shareTypes = e), s = "".concat(pe()).concat(K.REQ_SHARE_THEME), r.next = 6, A.network.post(s, i);case 6:
              return r.abrupt("return", r.sent);case 7:case "end":
              return r.stop();}
        }, r);
      }))();
    }, _shareStart: function (e) {
      Re(K.STATUES_SHARING, !0), e ? A.eventBus.dispatch(K.EVT_SHARE_TIME_START, { wx_share_type: K.TIMELINE_SHARE }) : A.eventBus.dispatch(K.EVT_SHARE_START, { wx_share_type: K.REGULAR_SHARE });
    }, _shareFinish: function (e, t, r, n, o) {
      Re(K.STATUES_SHARING, !1);var i = ke({ shareData: t, shareSuccess: r, spentTime: n ? Math.max(R.getTime() - n, 0) : 0 }, e, { wx_share_type: o ? K.TIMELINE_SHARE : K.REGULAR_SHARE });return o ? A.eventBus.dispatch(K.EVT_SHARE_TIME_END, i) : A.eventBus.dispatch(K.EVT_SHARE_END, i), i;
    }, getShareData: function (e) {
      var t = (this.config || {}).shareData,
          r = (e || {}).shareType,
          n = r ? this.shareThemesMap[r] : null,
          o = n ? n.getData() : t || {};return A.log.debug("[shareType ".concat(r, "]"), n), Ae.renderShare(e, o);
    }, _handleShareTimeline: function (e, t, r) {
      var n = this,
          o = R.getTime(),
          i = this.getShareData(e),
          s = this.config || {},
          a = s.shareSuccessDiff,
          c = s.onShareCallbackTime,
          u = i || {},
          f = u.shareSuccessDiff,
          h = u.onShareCallbackTime,
          p = u.activityId,
          _ = Object.assign({}, i, { shareSuccessDiff: f || a, onShareCallbackTime: h || c }),
          g = t || {},
          d = g.success,
          l = g.fail,
          v = g.complete,
          E = Ae.renderPostParams(_),
          m = new Pe(),
          S = ke({}, _, {}, { complete: function (e) {
          Ue.debug("share complete", e), m.destroy(), v && R.isFun(v) && v(e), p && xe().catch(function (e) {
            Ue.debug("update fail", e);
          });
        }, success: function (e) {
          Ue.debug("share success", e);var t = n._shareFinish(e, _, !0, o, !0);R.isFun(d) && d(t);
        }, fail: function (e) {
          Ue.debug("share fail", e);var t = n._shareFinish(e, _, !1, o, !0);R.isFun(l) && l(t);
        } });return m.init(S), this._postLog(E, K.LOGTP_SHARE_TIMELINE), this._shareStart(!0), S;
    }, _handleShare: function (e, t, r, n) {
      var o = this,
          i = R.getTime(),
          s = this.getShareData(e),
          a = this.config || {},
          c = a.shareSuccessDiff,
          u = a.onShareCallbackTime,
          f = s || {},
          h = f.shareSuccessDiff,
          p = f.onShareCallbackTime,
          _ = f.activityId,
          g = Object.assign({}, s, { shareSuccessDiff: h || c, onShareCallbackTime: p || u }),
          d = t || {},
          l = d.success,
          v = d.fail,
          E = d.complete,
          m = Ae.renderPostParams(g),
          S = new Pe(),
          T = ke({}, g, {}, { complete: function (e) {
          S.destroy(), E && R.isFun(E) && E(e), _ && xe().catch(function (e) {
            Ue.debug("update fail", e);
          });
        }, success: function (e) {
          Ue.debug("share success", e);var t = o._shareFinish(e, g, !0, i);n || (o._postLog(m, K.LOGTP_SHARE), o._postLog(m, K.LOGTP_SHARE_SUCCESS)), R.isFun(l) && l(t);
        }, fail: function (e) {
          Ue.debug("share fail", e);var t = o._shareFinish(e, g, !1, i);R.isFun(v) && v(t);
        } });return S.init(T), this._postLog(m, K.LOGTP_SHARE_TIMELINE), this._shareStart(), T;
    }, _postLog: function (e, t) {
      A.eventBus.dispatch(A.consts.EVT_REPORT_LOG, { log: ke({}, e, { logType: t }) });
    }, shareMessage: function (e, t) {
      var r = this;return v(d.mark(function n() {
        return d.wrap(function (n) {
          for (;;) switch (n.prev = n.next) {case 0:
              if (!be(K.STATUES_SHARING)) {
                n.next = 2;break;
              }throw K.ERR_WX_DUPLICATE_SHARE;case 2:
              if (!e.activityId) {
                n.next = 12;break;
              }return n.prev = 4, n.next = 7, Ne(e);case 7:
              n.next = 12;break;case 9:
              n.prev = 9, n.t0 = n.catch(4), Ue.debug("update share err", n.t0);case 12:
              return n.next = 14, r._promiseShare(e, t);case 14:
              return n.abrupt("return", n.sent);case 15:case "end":
              return n.stop();}
        }, n, null, [[4, 9]]);
      }))();
    }, _promiseShare: function (e, t) {
      var r = this;return new Promise(function (n, o) {
        var i = r._handleShare(e, { success: n, fail: o }, t, !1);De.shareAppMessage(i);
      });
    }, onShareAppMessage: function (e) {
      var t = this;De.onShareAppMessage(function (r) {
        var n = e && R.isFun(e) ? e(r) : null,
            o = n || {},
            i = o.success,
            s = o.fail,
            a = o.complete;return t._handleShare(n, { success: i, fail: s, complete: a }, !0, !0);
      });
    }, onShareTimeline: function (e) {
      var t = this;De.onShareTimeline(function (r) {
        var n = e && R.isFun(e) ? e(r) : null,
            o = n || {},
            i = o.success,
            s = o.fail,
            a = o.complete;return t._handleShareTimeline(n, { success: i, fail: s, complete: a }, !0, !0);
      });
    }, getShareInfo: function (e) {
      var t = this;return v(d.mark(function r() {
        var n, o, i, s, a, c, u, f, h, p, _;return d.wrap(function (r) {
          for (;;) switch (r.prev = r.next) {case 0:
              if (n = (e || {}).shareTicket) {
                r.next = 3;break;
              }throw K.ERR_WX_PARAMS_ERROR;case 3:
              return r.next = 5, De.getShareInfo(e);case 5:
              return o = r.sent, i = t.config || {}, s = i.gameId, a = te.getSDKUserInfo() || {}, c = a.uniqueId, u = "".concat(pe()).concat(K.REQ_SHARE_INFO), f = ke({ userId: c, gameId: s, shareTicket: n }, o), A.log.debug("getShareInfo params", f), r.next = 13, A.network.postForm(u, f);case 13:
              if (h = r.sent, p = h.data, (_ = p) && _.openGId) {
                r.next = 18;break;
              }throw K.ERR_WX_GET_SHARE_FAIL;case 18:
              return r.abrupt("return", _);case 19:case "end":
              return r.stop();}
        }, r);
      }))();
    }, sharePointShow: function (e) {
      this._postLog({ customShareType: e }, K.LOGTP_SHARE_SHOW);
    } };Ve.init();var Me = { shareMessage: function (e) {
      return Ve.shareMessage(e, !0);
    }, shareAppMessage: function (e) {
      return Ve.shareMessage(e, !1);
    }, onShareAppMessage: function (e) {
      Ve.onShareAppMessage(e);
    }, onShareTimeline: function (e) {
      Ve.onShareTimeline(e);
    }, getShareInfo: function (e) {
      return Ve.getShareInfo(e);
    }, sharePointShow: function (e) {
      Ve.sharePointShow(e);
    }, resetShareConfig: function (e) {
      Ve.setConfig(e);
    }, getShareData: function (e) {
      return Ve.getShareData(e);
    }, updateShareMenu: function (e) {
      return De.updateShareMenu(e);
    }, setMessageToFriendQuery: function (e) {
      return De.setMessageToFriendQuery(e);
    }, onShareMessageToFriend: function (e) {
      De.onShareMessageToFriend(e);
    }, onInteractiveStorageModified: function (e) {
      De.onInteractiveStorageModified(e);
    } },
      je = { _canUseNavigate: F.canUse("navigateToMiniProgram", "2.2.0"), navigateToMiniProgram: function (e, t) {
      var r = this;return new Promise(function (n, o) {
        if (!r._canUseNavigate) return t ? n(r.previewImage(t)) : o(K.ERR_WX_PARAMS_ERROR);var i = Object.assign({}, e, { success: n, fail: function (e) {
            var i = (e || {}).errMsg;if ((void 0 === i ? "" : i).indexOf("cancel") > -1) e.isCancel = !0;else if (t) return n(r.previewImage(t));o(e || K.ERR_WX_PARAMS_ERROR);
          } });wx.navigateToMiniProgram(i);
      });
    }, previewImage: function (e) {
      return new Promise(function (t, r) {
        if (!e) return r(K.ERR_WX_PARAMS_ERROR);wx.previewImage({ current: e, urls: [e], success: t, fail: r });
      });
    } },
      He = { _canUseCustomer: F.canUse("openCustomerServiceConversation", "2.0.3"), openCustomerServiceConversation: function (e) {
      var t = this;return new Promise(function (r, n) {
        t._canUseCustomer ? wx.openCustomerServiceConversation(Object.assign({}, e, { success: r, fail: n })) : n(K.ERR_WX_NOT_SUPPORT);
      });
    } },
      Be = function (e) {
    return new Promise(function (t, r) {
      wx.requestMidasPayment(Object.assign({}, e, { success: t, fail: r }));
    });
  },
      Fe = 1,
      We = 3,
      qe = { _postLog: function (e, t, r) {
      A.eventBus.dispatch(A.consts.EVT_REPORT_LOG, { log: { orderId: t, logType: e, errMsg: r } });
    }, midasPay: function (e) {
      var t = this;return v(d.mark(function r() {
        var n, o, i, s, a;return d.wrap(function (r) {
          for (;;) switch (r.prev = r.next) {case 0:
              if (n = e.orderId, o = e.midashiPayInfo, n) {
                r.next = 3;break;
              }throw K.ERR_WX_PAY_DATA_ERROR;case 3:
              return t._postLog(K.LOGTP_MIDASHI_PAY_CALL, n, "[SDK] call midashi: ".concat(n)), r.prev = 4, r.next = 7, Be(o);case 7:
              return t._postLog(K.LOGTP_MIDASHI_PAY_SUCCESS, n, "[SDK] midashi success: ".concat(n)), i = "".concat(he()).concat(K.REQ_PAY_CALLBACK), r.next = 11, A.network.post(i, { orderId: n });case 11:
              if (s = r.sent, "success" === s.data) {
                r.next = 15;break;
              }throw K.ERR_WX_PAY_FAILED;case 15:
              t._postLog(K.LOGTP_PAY_SUCCESS, n, "[SDK] MinigameCallback Success: ".concat(n)), r.next = 25;break;case 18:
              throw r.prev = 18, r.t0 = r.catch(4), t._postLog(K.LOGTP_PAY_ERROR, n, JSON.stringify(r.t0)), a = "".concat(he()).concat(K.REQ_CANCEL_ORDER), A.network.post(a, { orderId: n }).catch(function () {}), A.eventBus.dispatch(K.EVY_PAY_FAIL, { payType: 0, err: r.t0 }), r.t0;case 25:case "end":
              return r.stop();}
        }, r, null, [[4, 18]]);
      }))();
    }, jumpPay: function (e) {
      var t = this;return v(d.mark(function r() {
        var n, o;return d.wrap(function (r) {
          for (;;) switch (r.prev = r.next) {case 0:
              if (n = e.orderId, o = e.jumpType, n && "number" == typeof o) {
                r.next = 3;break;
              }throw K.ERR_WX_PAY_DATA_ERROR;case 3:
              if (r.prev = 3, o !== Fe) {
                r.next = 8;break;
              }return r.next = 7, t._jumpAppPay(e);case 7:
              return r.abrupt("return", r.sent);case 8:
              if (o !== We) {
                r.next = 12;break;
              }return r.next = 11, t._h5Pay(e);case 11:
              return r.abrupt("return", r.sent);case 12:
              return r.next = 14, t._qrCodePay(e);case 14:
              return r.abrupt("return", r.sent);case 17:
              throw r.prev = 17, r.t0 = r.catch(3), A.eventBus.dispatch(K.EVY_PAY_FAIL, { payType: o, err: r.t0 }), t._postLog(K.LOGTP_PAY_ERROR, n, JSON.stringify(r.t0)), r.t0;case 22:case "end":
              return r.stop();}
        }, r, null, [[3, 17]]);
      }))();
    }, _jumpAppPay: function (e) {
      var t = this;return v(d.mark(function r() {
        var n, o, i, s, a, c, u, f, h;return d.wrap(function (r) {
          for (;;) switch (r.prev = r.next) {case 0:
              return o = (n = e || {}).orderId, i = n.appId, s = n.path, a = n.extraData, c = n.envVersion, u = void 0 === c ? "release" : c, f = encodeURIComponent("o=".concat(o)), h = s || "/pages/index/index?scene=".concat(f), r.prev = 3, r.next = 6, je.navigateToMiniProgram({ appId: i, path: h, extraData: a, envVersion: u });case 6:
              return r.abrupt("return", r.sent);case 9:
              if (r.prev = 9, r.t0 = r.catch(3), !r.t0 || !r.t0.isCancel) {
                r.next = 15;break;
              }throw K.ERR_WX_PAY_CANCEL;case 15:
              return A.log.debug("jumpAppPay fail", r.t0), r.next = 18, t._qrCodePay(e);case 18:
              return r.abrupt("return", r.sent);case 19:case "end":
              return r.stop();}
        }, r, null, [[3, 9]]);
      }))();
    }, _qrCodePay: function (e) {
      return v(d.mark(function t() {
        var r, n;return d.wrap(function (t) {
          for (;;) switch (t.prev = t.next) {case 0:
              return r = e.orderId, n = "".concat(he()).concat(K.REQ_QRCODE, "?orderId=").concat(r), t.next = 4, je.previewImage(n);case 4:
              return t.abrupt("return", t.sent);case 5:case "end":
              return t.stop();}
        }, t);
      }))();
    }, _h5Pay: function (e) {
      return v(d.mark(function t() {
        var r, n, o, i;return d.wrap(function (t) {
          for (;;) switch (t.prev = t.next) {case 0:
              if (r = e.path, n = e.title, o = e.imgUrl, i = { showMessageCard: !0, sendMessageTitle: n, sendMessageImg: o, sendMessagePath: r }, n && o && r) {
                t.next = 4;break;
              }throw K.ERR_WX_PAY_DATA_ERROR;case 4:
              return t.next = 6, He.openCustomerServiceConversation(i);case 6:
              return t.abrupt("return", t.sent);case 7:case "end":
              return t.stop();}
        }, t);
      }))();
    } },
      Qe = { midasPay: function (e) {
      return qe.midasPay(e);
    }, jumpPay: function (e) {
      return qe.jumpPay(e);
    } },
      Xe = "sdk_share",
      Ye = "sdk_video_ad_show",
      Ke = "track",
      Je = "user_set",
      ze = { ALI: 1, TGA: 2, STD: 4, SDK: 8 },
      $e = "begin",
      Ze = "suc",
      et = "fail",
      tt = "abort",
      rt = "complete",
      nt = { INIT: { topic: "", eventType: Ke, eventName: "sdk_init", logType: ze.TGA }, LOGIN: { topic: "", eventType: Ke, eventName: "sdk_login", logType: ze.TGA }, AUTH: { topic: "", eventType: Je, eventName: "sdk_auth", logType: ze.STD }, OPEN: { topic: "", eventType: Ke, eventName: "sdk_open", logType: ze.STD }, CLOSE: { topic: "", eventType: Ke, eventName: "sdk_close", logType: ze.STD }, SHARE: { topic: "", eventType: Ke, eventName: Xe, logType: ze.TGA }, SHARE_END: { topic: "", eventType: Ke, eventName: Xe, logType: ze.TGA | ze.STD }, VIDEO_AD_SHOW: { topic: "", eventType: Ke, eventName: Ye, logType: ze.TGA }, VIDEO_AD_END: { topic: "", eventType: Ke, eventName: Ye, logType: ze.TGA | ze.STD }, BEAT: { topic: "", eventType: Ke, eventName: "sdk_heartbeat", logType: ze.STD }, PROFILE: { topic: "", eventType: Je, eventName: "sdk_user_profile", logType: ze.STD }, SET_USER_INFO: { topic: "", eventType: Je, eventName: "wx_game_role", logType: ze.STD }, SHARE_FRIEND: { topic: "", eventType: Ke, eventName: "sdk_share_to_friend", logType: ze.TGA } },
      ot = {};Object.keys(nt).map(function (e) {
    ot[e] = e, nt[e].topic = e;
  });var it = nt,
      st = ot,
      at = { getCommonData: function () {
      var e = this;return v(d.mark(function t() {
        var r;return d.wrap(function (t) {
          for (;;) switch (t.prev = t.next) {case 0:
              return e.baseData || (e.baseData = e._getBaseData()), t.next = 3, e._getChangeData();case 3:
              return (r = t.sent).clientInfo = Object.assign({}, e.baseData ? e.baseData.clientInfo : {}, r.clientInfo || {}), t.abrupt("return", Object.assign({}, e.baseData, r));case 6:case "end":
              return t.stop();}
        }, t);
      }))();
    }, getLogDataByTopic: function (e, t) {
      switch (e) {case it.OPEN.topic:
          return this._getOpenData(t);case it.AUTH.topic:
          return this._getAuthData(t);case it.SHARE.topic:
          return this._getShareData(t);case it.SHARE_END.topic:
          return this._getShareEndData(t);case it.VIDEO_AD_SHOW.topic:
          return this._getVideoAdPlayData(t);case it.VIDEO_AD_END.topic:
          return this._getVideoAdEndData(t);case it.LOGIN.topic:
          return this._getLoginData(t);case it.BEAT.topic:
          return this._getHeartbeatData(t);case it.PROFILE.topic:
          return this._getUserProfileData(t);case it.SET_USER_INFO.topic:
          return this._getGameUserData(t);default:
          return this._getBasicData(t);}
    }, refreshDataByTopic: function (e, t) {
      return e === it.OPEN.topic ? this._refreshOpenData(t) : t;
    }, _getdistinctId: function () {
      return this.distinctId || (this.distinctId = R.generateGuid()), this.distinctId;
    }, _getBaseData: function () {
      var e = q(),
          t = e.gameId,
          r = e.gameVersion,
          n = F.getSystemInfo();return { gameId: t, gameVersion: r, logSource: "mini-sdk", clientInfo: { clientType: "weixin", version: n.version, language: n.language, model: n.model, system: n.system, brand: n.brand, pixelRatio: n.pixelRatio, screenWidth: n.screenWidth, screenHeight: n.screenHeight, platform: n.platform, sdkVersion: n.SDKVersion, hsdkVersion: n.hortorSDKVersion } };
    }, _getChangeData: function () {
      var e = this;return v(d.mark(function t() {
        var r, n, o, i, s, a, c;return d.wrap(function (t) {
          for (;;) switch (t.prev = t.next) {case 0:
              return r = e._getdistinctId(), n = te.getSDKUserInfo() || {}, o = n.uniqueId, i = n.userId, s = n.channel, t.next = 4, F.getNetStatus();case 4:
              return a = t.sent, c = a.networkType, t.abrupt("return", { distinctId: r, platformId: o, openId: i, channel: s, clientInfo: { netType: c } });case 7:case "end":
              return t.stop();}
        }, t);
      }))();
    }, _pkg: function (e, t) {
      return { property: e, extra: t };
    }, _getBasicData: function (e) {
      var t = (e || {}).extend;return this._pkg(null, t);
    }, _getShareData: function (e) {
      var t = e || {},
          r = t.extend,
          n = t.wx_share_type;return this._pkg({ event_step: $e, wx_share_type: n }, r);
    }, _getShareEndData: function (e) {
      var t = e || {},
          r = t.shareData,
          n = t.shareSuccess,
          o = t.spentTime,
          i = t.extend,
          s = t.wx_share_type,
          a = r || {},
          c = a.title,
          u = a.imageUrl,
          f = a.shareType,
          h = a.shareConfigId,
          p = a.shareGuid,
          _ = (a.sequenceInfo || {}).modelId;return this._pkg({ share_guid: p || "", share_content_id: h || "", share_content_title: c || "", share_content_img: u || "", share_content_type: f || "", share_use_time: o || 0, event_state: n ? 0 : 1, event_step: n ? Ze : et, model_algorithm_id: _ || "", wx_share_type: s }, i);
    }, _getVideoAdPlayData: function (e) {
      var t = e || {},
          r = t.adUnitId,
          n = t.playSuccess,
          o = t.extend;return this._pkg({ ad_id: r || "", event_step: n ? Ze : $e }, o);
    }, _getVideoAdEndData: function (e) {
      var t = e || {},
          r = t.adUnitId,
          n = t.isEnded,
          o = t.playFailCode,
          i = t.spentTime,
          s = t.sequenceInfo,
          a = t.extend,
          c = s || {},
          u = c.modelId,
          f = c.shareGuid,
          h = void 0 === n ? -1 : n ? 0 : 1,
          p = o ? 1004 === o || 1002 === o ? 2 : 1 : 0 === o ? 0 : 1;return this._pkg({ ad_id: r || "", event_state: p, ad_close_type: h, ad_show_time: i || 0, event_step: p ? et : h > 0 ? tt : rt, model_algorithm_id: u || "", share_guid: f || "" }, a);
    }, _getGameUserData: function (e) {
      var t = (W() || {}).query,
          r = "toNumber",
          n = { roleId: "toNStr", roleName: "toNStr", serverId: "toNStr", level: r, vipLevel: r, energy: r, money1Consume: r, teamName: "toNStr", teamJob: "toNStr", roleCtime: r, id: "toNStr", wxUnionId: "toNStr", extend: "" },
          o = { query_string: JSON.stringify(t) },
          i = (e || {}).extend;return Object.keys(n).map(function (t) {
        var r = e[t],
            i = n[t];if (i) {
          var s = "user_".concat(R.toLine(t));o[s] = R[i](r);
        }
      }), this._pkg(o, i);
    }, _getAuthData: function (e) {
      var t = te.getSDKUserInfo() || {},
          r = t.name,
          n = t.sex,
          o = ((W() || {}).query || {}).share_guid,
          i = e || {},
          s = i.gender,
          a = void 0 === s ? n : s,
          c = i.nickName,
          u = void 0 === c ? r : c,
          f = i.extend;return this._pkg({ gender: a || 0, nick: u || "", share_guid: o || "" }, f);
    }, _getOpenData: function (e) {
      var t = (te.getSDKUserInfo() || {}).isNewUser,
          r = W() || {},
          n = r.query,
          o = r.scene,
          i = r.coldStart,
          s = r.referrerInfo,
          a = (n || {}).share_guid,
          c = e || {},
          u = c.isColdStart,
          f = void 0 === u ? !!i : u,
          h = c.isNewUser,
          p = void 0 === h ? t : h,
          _ = c.extend,
          g = Object.assign(n, { referrerInfo: s }),
          d = this._pkg({ is_new_user: p ? 0 : 1, open_type: f ? 0 : 1, source_type: o || 0, share_guid: a || "", query_string: JSON.stringify(g) }, _);return A.log.debug("onShowReport", d), d;
    }, _getUserProfileData: function (e) {
      var t = e || {},
          r = t.label,
          n = t.extend;return this._pkg({ wx_tags_general: r || 0 }, n);
    }, _getHeartbeatData: function (e) {
      var t = (e || {}).interval;return this._pkg({ interval: t || 60 });
    }, _getLoginData: function (e) {
      var t = (te.getSDKUserInfo() || {}).isNewUser,
          r = W() || {},
          n = r.query,
          o = r.scene,
          i = (n || {}).shareConfigId,
          s = e || {},
          a = s.isNewUser,
          c = void 0 === a ? t : a,
          u = s.extend;return this._pkg({ is_new: c, f_share_id: i, wx_scene: o }, u);
    }, _refreshOpenData: function (e) {
      var t = (te.getSDKUserInfo() || {}).isNewUser;return e && e.property && (e.property.is_new_user = t ? 0 : 1), e;
    } },
      ct = { temps: void 0, report: function (e) {
      var t = this,
          r = this._getTempLogs(e && e.logs);if (this._clearTempLogs(), r && r.length) {
        var n = "".concat(pe()).concat(K.REQ_STD_LOG),
            o = Object.assign({}, e, { logs: r });A.network.post(n, o).then(function () {
          A.log.debug("std log", o);
        }).catch(function (e) {
          e && e.errCode === A.consts.ERR_NET_FAIL.errCode && t._setTempLogs(r);
        });
      }
    }, _getTempLogs: function (e) {
      return void 0 === this.temps && (this.temps = A.storage.get(K.STG_FAIL_LOGS)), this._limitLogs((this.temps || []).concat(e || []));
    }, _setTempLogs: function (e) {
      this.temps = this._limitLogs(e), A.storage.set(K.STG_FAIL_LOGS, this.temps);
    }, _clearTempLogs: function () {
      this.temps = [], A.storage.set(K.STG_FAIL_LOGS, "");
    }, _limitLogs: function (e) {
      var t = (e ? e.length : 0) - 50;return (e || []).slice(t > 0 ? t : 0);
    } };function ut(e, t) {
    var r = Object.keys(e);if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }return r;
  }function ft(t) {
    for (var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};r % 2 ? ut(Object(n), !0).forEach(function (r) {
        e(t, r, n[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ut(Object(n)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
      });
    }return t;
  }var ht = { lastLog: {}, logs: [], reporting: !1, delayCollect: 800, delayReport: 5e3, collect: function (e) {
      if (e) {
        var t = e.topic;if (t) {
          var r = this.lastLog[t],
              n = r && !r.fromPlatform ? r : e;0 === ((r || {}).params || {}).open_type && (n.params.open_type = 0), this.lastLog[t] = n, r || setTimeout(this._reduceLog.bind(this, t), this.delayCollect);
        } else this._reportLog(e);
      }
    }, _reportLog: function (e) {
      var t = e || {},
          r = t.immediateReport,
          n = t.params;n && (this.logs.push(n), this._report(r).catch(function () {}));
    }, _reduceLog: function (e) {
      var t = this.lastLog[e];t && (this._reportLog(t), this.lastLog[e] = null);
    }, _report: function (e) {
      var t = this;return v(d.mark(function r() {
        var n, o;return d.wrap(function (r) {
          for (;;) switch (r.prev = r.next) {case 0:
              if (e) {
                r.next = 7;break;
              }if (!t.reporting) {
                r.next = 3;break;
              }return r.abrupt("return");case 3:
              return t.reporting = !0, r.next = 6, R.wait(t.delayReport);case 6:
              t.reporting = !1;case 7:
              return r.next = 9, at.getCommonData();case 9:
              n = r.sent, o = t.logs, ct.report(ft({}, n, { logs: o })), t.logs = [];case 13:case "end":
              return r.stop();}
        }, r);
      }))();
    } };function pt(e, t, r) {
    return this.guid = R.generateGuid(), this.opt = e, this.topic = e.topic, this.fromPlatform = !!r, this._init(t), this;
  }pt.prototype = { _init: function (e) {
      var t = { immediateReport: !1, stopWhenShare: !1, callAfterLogin: !1 };switch (this.topic) {case it.CLOSE.topic:
          t.stopWhenShare = !0, t.immediateReport = !0;break;case it.OPEN.topic:
          t.stopWhenShare = !0, t.callAfterLogin = this.fromPlatform;}this.config = t, this.data = {}, this.createAt = R.getTime(), this._setData(e);
    }, getConfig: function () {
      return this.config;
    }, start: function () {
      this.startTime = R.getTime();
    }, stop: function (e) {
      e && (e.spentTime = this.startTime ? Math.max(0, R.getTime() - this.startTime) : 0), this._setData(e);
    }, refreshData: function () {
      return this.data = at.refreshDataByTopic(this.topic, this.data), this;
    }, _setData: function (e) {
      var t = at.getLogDataByTopic(this.topic, e),
          r = t.property,
          n = t.extra,
          o = this.data,
          i = o.property,
          s = o.extra;return r && (this.data.property = Object.assign(i || {}, r)), n && (this.data.extra = Object.assign(s || {}, n)), this;
    }, _getData: function () {
      var e = this.opt,
          t = e.eventName,
          r = e.eventType,
          n = e.logType;return Object.assign({}, this.data, { logId: this.guid, logType: n, eventType: r, eventName: t, timestamp: this.createAt || 0 });
    }, toLogData: function () {
      var e = this._getData(),
          t = this.getConfig().immediateReport;return { topic: this.topic, fromPlatform: this.fromPlatform, immediateReport: t, params: e };
    } };var _t = { onLoginEvents: [], LogTypes: ze, Topics: st, init: function () {
      A.eventBus.once(A.consts.EVT_SDK_READY, this._init.bind(this));
    }, _init: function () {
      var e = this;A.eventBus.on(A.consts.EVT_SET_GAMEUSER, function (t) {
        e.coverLog(st.SET_USER_INFO, t.data);
      });var t = q(),
          r = t.autoUploadSDTLog,
          n = t.stdAutoUpload,
          o = t.tgaAutoUpload,
          i = t.stdHeartBeatInterval;if (!1 !== o || n || r) {
        if (this._report(it.INIT, {}, !0), A.eventBus.on(A.consts.EVT_ON_SHOW, function () {
          e._report(it.OPEN, null, !0);
        }), A.eventBus.on(A.consts.EVT_ON_HIDE, function () {
          e._report(it.CLOSE, null, !0);
        }), A.eventBus.on(K.EVT_SHARE_START, function (t) {
          e._report(it.SHARE, t.data, !0);
        }), A.eventBus.on(K.EVT_SHARE_END, function (t) {
          e._report(it.SHARE_END, t.data, !0);
        }), A.eventBus.on(K.EVT_SHARE_TIME_START, function (t) {
          e._report(it.SHARE, t.data, !0);
        }), A.eventBus.on(K.EVT_SHARE_TIME_END, function (t) {
          e._report(it.SHARE_END, t.data, !0);
        }), A.eventBus.on(K.EVT_VIDEO_AD_PLAY_START, function (t) {
          e._report(it.VIDEO_AD_SHOW, t.data, !0);
        }), A.eventBus.on(K.EVT_VIDEO_AD_PLAY_FINISH, function (t) {
          e._report(it.VIDEO_AD_END, t.data, !0);
        }), A.eventBus.on(K.EVT_ON_AUTH, function (t) {
          e._report(it.AUTH, t.data, !0);
        }), A.eventBus.once(A.consts.EVT_ON_LOGIN, function (t) {
          e._report(it.LOGIN, t.data, !0), Se.getUserGameLabel().then(function (t) {
            e._report(it.PROFILE, t, !0);
          }).catch(function (e) {});
        }), i) {
          var s = i - 0 || 60,
              a = { interval: s };isNaN(s) || R.resetInterval(function () {
            e._report(it.BEAT, a, !0);
          }, 1e3 * s);
        }A.eventBus.on(K.EVT_SHARE_FRIEND, function (t) {
          e._report(it.SHARE_FRIEND, { extend: t.data }, !0);
        });
      }
    }, _report: function (e, t, r) {
      var n = ze.TGA,
          o = ze.STD,
          i = q(),
          s = i.autoUploadSDTLog,
          a = i.stdAutoUpload,
          c = i.tgaAutoUpload,
          u = e.logType;a || s || (u = (u | o) === u ? u ^ o : u), !1 === c && (u = (u | n) === u ? u ^ n : u), u && (e.logType = u, this.reportLog(e, t, r));
    }, coverLog: function (e, t) {
      var r = it[e];r && this.reportLog(Object.assign({}, r, t || {}), t);
    }, reportLog: function (e, t, r) {
      var n = new pt(e, t, r),
          o = n.getConfig(),
          i = o.stopWhenShare,
          s = o.callAfterLogin;be(K.STATUES_SHARING) && i || (s ? this._callAfterLogin(function () {
        ht.collect(n.refreshData().toLogData());
      }) : ht.collect(n.toLogData()));
    }, _callAfterLogin: function (e) {
      var t = this;if (R.isFun(e)) {
        var r = te.getSDKUserInfo() || {},
            n = r.uniqueId;r.userId && n ? e() : (this.onLoginEvents.push(e), A.eventBus.once(A.consts.EVT_ON_LOGIN, function (e) {
          t.onLoginEvents.forEach(function (t) {
            return t(e);
          }), t.onLoginEvents = [];
        }));
      }
    } };_t.init();var gt = { DefLogTopics: _t.Topics, coverDefLog: function (e, t) {
      return _t.coverLog(e, t);
    }, reportGameUserInfo: function (e) {
      return this.coverDefLog(_t.Topics.SET_USER_INFO, e);
    }, getGameLogTypes: function () {
      return _t.LogTypes;
    }, postGameLog: function (e) {
      return _t.reportLog(e, e, !1);
    } },
      dt = { _getAppInfo: function (e) {
      var t = this;return v(d.mark(function r() {
        var n, o, i, s, a, c, u, f, h;return d.wrap(function (r) {
          for (;;) switch (r.prev = r.next) {case 0:
              if (!t.jumpInfo) {
                r.next = 2;break;
              }return r.abrupt("return", t.jumpInfo);case 2:
              if (n = q(), o = n.gameId, i = te.getSDKUserInfo() || {}, s = i.uniqueId, a = i.channel, (c = Object.assign({}, e || {}, { fromGameId: o, fromUserId: s, channel: a })).fromUserId) {
                r.next = 7;break;
              }throw K.ERR_WX_NOT_LOGIN;case 7:
              return u = "".concat(pe()).concat(K.REQ_CUSTOMERAPP), r.next = 10, A.network.get(u, c);case 10:
              return f = r.sent, h = f.data, t.jumpInfo = h || {}, r.abrupt("return", h);case 14:case "end":
              return r.stop();}
        }, r);
      }))();
    }, goCustomer: function (e) {
      var t = this;return v(d.mark(function r() {
        var n;return d.wrap(function (r) {
          for (;;) switch (r.prev = r.next) {case 0:
              return r.next = 2, t._getAppInfo(e);case 2:
              return n = r.sent, r.next = 5, je.navigateToMiniProgram(n, n.url);case 5:case "end":
              return r.stop();}
        }, r);
      }))();
    } },
      lt = { goCustomer: function (e) {
      return dt.goCustomer(e);
    }, customerService: function (e) {
      return He.openCustomerServiceConversation(e);
    } },
      vt = function () {
    return v(d.mark(function e() {
      var t, r, n, o, i;return d.wrap(function (e) {
        for (;;) switch (e.prev = e.next) {case 0:
            return t = te.getSDKUserInfo() || {}, r = t.uniqueId, n = { uniqueId: r }, o = "".concat(pe()).concat(K.REQ_CERTIFICATION), e.next = 5, A.network.get(o, n);case 5:
            return i = e.sent, e.abrupt("return", i.data);case 7:case "end":
            return e.stop();}
      }, e);
    }))();
  },
      Et = function (e) {
    return v(d.mark(function t() {
      var r, n, o, i, s, a, c, u;return d.wrap(function (t) {
        for (;;) switch (t.prev = t.next) {case 0:
            if (n = (r = e || {}).name, o = r.idCard, i = te.getSDKUserInfo() || {}, s = i.uniqueId, a = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, s) {
              t.next = 5;break;
            }throw K.ERR_WX_NOT_LOGIN;case 5:
            if (n && o && a.test(o.toString())) {
              t.next = 7;break;
            }throw K.ERR_WX_PARAMS_ERROR;case 7:
            return c = "".concat(pe()).concat(K.REQ_CERTIFICATION), t.next = 10, A.network.postForm(c, { uniqueId: s, name: n, idCard: o });case 10:
            return u = t.sent, t.abrupt("return", u.data);case 12:case "end":
            return t.stop();}
      }, t);
    }))();
  },
      mt = { canUseAdvised: F.canUse("checkIsUserAdvisedToRest", "1.9.97"), checkNeedRest: function (e) {
      var t = this;return new Promise(function (r, n) {
        t.canUseAdvised ? wx.checkIsUserAdvisedToRest({ todayPlayedTime: e, success: function (e) {
            r(e.result);
          }, fail: function (e) {
            n(e);
          } }) : n(K.ERR_WX_NOT_SUPPORT);
      });
    } };function St(e) {
    this.beatTotal = {}, this.canReport = !0, this._init(e);
  }St.prototype = { _init: function (e) {
      this.opt = !e && this.opt ? this.opt : R.reset(e, { storageKey: "__sdk_BeatTotal", beatFreq: 5, reportFreq: { 5: 30, 30: 60, default: 300 }, onReport: null, reportOnStart: !1 }), A.log.debug("HeartBeat opt", this.opt), this._bindEvent();
    }, _bindEvent: function () {
      this.starter = this.start.bind(this), this.pauseer = this.pause.bind(this), A.eventBus.on(A.consts.EVT_ON_SHOW, this.starter), A.eventBus.on(A.consts.EVT_ON_HIDE, this.pauseer);
    }, _unbindEvent: function () {
      A.eventBus.off(A.consts.EVT_ON_SHOW, this.starter), A.eventBus.off(A.consts.EVT_ON_HIDE, this.pauseer);
    }, start: function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";return this._heartBeat("isBeat" === e), this._timer = setTimeout(this.start.bind(this, "isBeat"), 1e3 * this.opt.beatFreq), !!this._timer;
    }, pause: function () {
      return this._timer && (clearTimeout(this._timer), this._timer = null), !!this._timer;
    }, stop: function () {
      return this.canReport = !1, this._unbindEvent(), this.pause();
    }, restart: function () {
      return this.stop(), this._bindEvent(), this.canReport = !0, this.start();
    }, resetOpt: function (e) {
      this.opt = Object.assign(this.opt, e);
    }, _heartBeat: function (e) {
      if (this.pause(), this.today = new Date().toLocaleDateString(), e) {
        var t = this._getTodayTotal() + this.opt.beatFreq;this._checkReport(t), this._setTodayTotal(t);
      } else this.opt.reportOnStart && this._checkReport();
    }, _checkReport: function (e) {
      var t = e || this._getTodayTotal(),
          r = this.opt.reportFreq,
          n = 0;for (var o in r) {
        var i = 60 * Number(o);if (n = r[o], !isNaN(i) && t <= i) break;
      }A.log.debug("heart beat ".concat(this.today), n, t), t && t % n == 0 && this.canReport && this._onReport(t);
    }, _setTodayTotal: function (e) {
      this.beatTotal[this.today] = e || 0;var t = this.opt.storageKey;A.storage.set(t, "".concat(this.today, "_").concat(e));
    }, _getTodayTotal: function () {
      arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.today;if (R.isNull(this.beatTotal[this.today])) {
        var e = this.opt.storageKey,
            t = (A.storage.get(e) || "").split("_");this.beatTotal[this.today] = this.today === t[0] ? Number(t[1]) : 0;
      }return this.beatTotal[this.today];
    }, _onReport: function (e) {
      A.log.debug("heart beat report");var t = (this.opt || {}).onReport;mt.checkNeedRest(e).then(function (r) {
        r && R.isFun(t) && t(e);
      }).catch(function (e) {
        A.log.debug("heart beat report err", e);
      });
    } };var Tt = { startCheck: function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};if (!mt.canUseAdvised) return !1;A.log.debug("startCheck");var r = t.maxGameTime,
          n = void 0 === r ? 10800 : r,
          o = t.space,
          i = void 0 === o ? 300 : o,
          s = t.reportOnStart,
          a = void 0 !== s && s,
          c = parseInt(n / 60),
          u = { beatFreq: i, reportFreq: { default: i }, onReport: e, reportOnStart: a };return u.reportFreq[c.toString()] = n, this.checker ? (t && this.checker.resetOpt(u), this.checker.restart()) : (this.checker = new St(u), this.checker.start());
    }, stopCheck: function () {
      return this.checker ? this.checker.stop() : (A.log.debug("did not startCheck"), !1);
    } },
      Ot = { checkCertification: function () {
      return vt();
    }, setCertification: function (e) {
      return Et(e);
    }, checkRest: function (e, t) {
      return Tt.startCheck(e, t);
    }, stopCheckRest: function () {
      return Tt.stopCheck();
    } },
      yt = { _canRequestSubMsg: F.canUse("requestSubscribeMessage", "2.8.3"), _canRequestSubscribeWhatsNew: F.canUse("requestSubscribeWhatsNew", "2.10.4"), requestSubscribeMessage: function (e) {
      var t = this;return new Promise(function (r, n) {
        t._canRequestSubMsg ? wx.requestSubscribeMessage(Object.assign({}, e, { success: r, fail: n })) : n(K.ERR_WX_NOT_SUPPORT);
      });
    }, getWhatsNewSubscriptionsSetting: function (e) {
      var t = this;return new Promise(function (r, n) {
        t._canRequestSubscribeWhatsNew ? wx.getWhatsNewSubscriptionsSetting(Object.assign({}, e, { success: r, fail: n })) : n(K.ERR_WX_NOT_SUPPORT);
      });
    }, requestSubscribeWhatsNew: function (e) {
      var t = this;return new Promise(function (r, n) {
        t._canRequestSubscribeWhatsNew ? wx.requestSubscribeWhatsNew(Object.assign({}, e, { success: r, fail: n })) : n(K.ERR_WX_NOT_SUPPORT);
      });
    } },
      It = { accept: "acceptIds", reject: "rejectIds", ban: "banIds" },
      Rt = { request: function (e) {
      var t = this;return v(d.mark(function r() {
        var n, o, i;return d.wrap(function (r) {
          for (;;) switch (r.prev = r.next) {case 0:
              return n = (e || {}).playerId, r.next = 3, yt.requestSubscribeMessage(e);case 3:
              return o = r.sent, i = t._renderResult(o, n), t._postCount(i, 0), r.abrupt("return", i);case 7:case "end":
              return r.stop();}
        }, r);
      }))();
    }, _renderResult: function (e, t) {
      var r = { playerId: t };for (var n in It) r[It[n]] = [];for (var o in e) {
        var i = It[e[o]];r[i] && r[i].push(o);
      }return r;
    }, _postCount: function (e) {
      var t = this,
          r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;if (!(r > 3)) {
        var n = q(),
            o = n.gameId;if (n.reportSubscribeMessage) {
          var i = e || {},
              s = i.acceptIds,
              a = void 0 === s ? [] : s,
              c = i.playerId;if (a.length) {
            var u = te.getSDKUserInfo() || {},
                f = u.userId,
                h = u.uniqueId,
                p = { gameId: o, playerId: R.toNStr(c), openId: f, uniqueId: h, templateIds: a },
                _ = "".concat(pe()).concat(K.REQ_SUBSCRIBE_SAVE);A.network.post(_, p).then(function () {
              A.log.debug("subscribe count add", p);
            }).catch(function () {
              setTimeout(t._postCount.bind(t, e, ++r), 5e3);
            });
          }
        }
      }
    }, getSubscribeMessageCount: function () {
      return v(d.mark(function e() {
        var t, r, n, o, i, s, a, c;return d.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {case 0:
              return t = q(), r = t.gameId, n = te.getSDKUserInfo() || {}, o = n.userId, i = n.uniqueId, s = "".concat(pe()).concat(K.REQ_SUBSCRIBE_COUNT), e.next = 5, A.network.get(s, { gameId: r, openId: o, uniqueId: i });case 5:
              return a = e.sent, c = a.data, e.abrupt("return", c);case 8:case "end":
              return e.stop();}
        }, e);
      }))();
    }, getWhatsNewSubscriptionsSetting: function (e) {
      return v(d.mark(function t() {
        var r;return d.wrap(function (t) {
          for (;;) switch (t.prev = t.next) {case 0:
              return t.next = 2, yt.getWhatsNewSubscriptionsSetting(e);case 2:
              return r = t.sent, t.abrupt("return", r);case 4:case "end":
              return t.stop();}
        }, t);
      }))();
    }, requestSubscribeWhatsNew: function (e) {
      return v(d.mark(function t() {
        var r;return d.wrap(function (t) {
          for (;;) switch (t.prev = t.next) {case 0:
              return t.next = 2, yt.requestSubscribeWhatsNew(e);case 2:
              return r = t.sent, t.abrupt("return", r);case 4:case "end":
              return t.stop();}
        }, t);
      }))();
    } },
      bt = { requestSubscribeMessage: function (e) {
      return Rt.request(e);
    }, getSubscribeMessageCount: function () {
      return Rt.getSubscribeMessageCount();
    }, getWhatsNewSubscriptionsSetting: function (e) {
      return Rt.getWhatsNewSubscriptionsSetting(e);
    }, requestSubscribeWhatsNew: function (e) {
      return Rt.requestSubscribeWhatsNew(e);
    } },
      wt = { init: function () {
      A.procCenter.register(A.consts.PROC_PRE_AGGR, this._processAggr.bind(this)), A.procCenter.register(A.consts.PROC_REQ_AGGR, this._processAggrReq.bind(this));
    }, _renderSwitches: function (e) {
      var t = [];return e.map(function (e) {
        if (e) {
          var r = "string" == typeof e ? e : e.switchId;t.some(function (e) {
            return e.switchId === r;
          }) || t.push({ switchId: r });
        }
      }), t;
    }, _renderParams: function (e) {
      var t = {};if (e) for (var r in e) {
        var n = e[r];void 0 !== n && "nickName" !== r && (t[r] = n);
      }return t;
    }, _getRequestData: function (e, t) {
      var r = (t || {}).nickName,
          n = A.global.platform.information,
          o = n && n.getUserInfo() || {},
          i = o.userId,
          s = o.uniqueId,
          a = o.name,
          c = o.channel,
          u = n && n.getLaunchOpts() || {},
          f = u.scene,
          h = u.custom.channel,
          p = B.sdkConfig();return { gameId: p.gameId, gameVersion: p.gameVersion, nickName: r || a || "", uniqueId: s, channel: c, openId: i, scene: f, currentChannel: h, defCustomParams: this._renderParams(t), switches: this._renderSwitches(e) };
    }, _transformResult: function (e, t) {
      var r = (e || {}).rlt,
          n = void 0 === r ? [] : r,
          o = {};return t.map(function (e, t) {
        o[e.switchId] = !!n[t];
      }), A.log.debug("switch result", o), o;
    }, _processAggr: function (e) {
      if (!e || !e.customSwitch) return null;var t = e.customSwitch,
          r = t.switches,
          n = t.params;return { customSwitch: this._getRequestData(r, n) };
    }, _processAggrReq: function (e) {
      if (!(e && e.resp && e.req && e.req.customSwitch && e.resp.customSwitch)) return null;var t = e.req.customSwitch.switches,
          r = e.resp.customSwitch.data;return { customSwitch: { data: this._transformResult(r, t) } };
    }, check: function (e, t) {
      var r = this;return v(d.mark(function n() {
        var o, i, s;return d.wrap(function (n) {
          for (;;) switch (n.prev = n.next) {case 0:
              return o = "".concat(pe()).concat(de.REQ_SWITCH), i = r._getRequestData(e, t), n.next = 4, A.network.post(o, i);case 4:
              return s = n.sent, n.abrupt("return", r._transformResult(s.data, i.switches));case 6:case "end":
              return n.stop();}
        }, n);
      }))();
    } };function At(e, t) {
    var r = Object.keys(e);if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), r.push.apply(r, n);
    }return r;
  }wt.init();var Dt = function (t) {
    for (var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};r % 2 ? At(Object(n), !0).forEach(function (r) {
        e(t, r, n[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : At(Object(n)).forEach(function (e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
      });
    }return t;
  }({}, me, {}, ye, {}, Me, {}, Qe, {}, gt, {}, lt, {}, Ot, {}, bt, {}, ce, {}, Ee, {}, { checkSwitches: function (e, t) {
      return wt.check(e, t);
    } });module.exports = Dt.default || Dt;
}();