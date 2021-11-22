var a = wx.$y;
!function (e, t) {
  for (var i in t) e[i] = t[i];
}(exports, function (e) {
  var t = {};function i(r) {
    if (t[r]) return t[r].exports;var n = t[r] = { i: r, l: !1, exports: {} };return e[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
  }return i.m = e, i.c = t, i.d = function (e, t, r) {
    i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;if (4 & t && "object" == typeof e && e && e.__esModule) return e;var r = Object.create(null);if (i.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e) for (var n in e) i.d(r, n, function (t) {
      return e[t];
    }.bind(null, n));return r;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "", i(i.s = "IWXR");
}({ "6lI8": function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", { value: !0 }), t.instance = t.SDKSetter = void 0;var r = new (i("xvLd").CXConsole)(),
        n = i("nPIJ"),
        s = i("B3n6"),
        a = i("BW/k");r.logLog = s.DEBUG;var o = function () {
      function e(e) {
        this.defaultDomainName = "cxgame.net", this.conf = e;
      }return Object.defineProperty(e.prototype, "cdnHost", { get: function () {
          var e = this.defaultDomainName;return this.conf.DOMAIN_NAME && (e = this.conf.DOMAIN_NAME), "https://cdn." + e;
        }, enumerable: !1, configurable: !0 }), e;
    }(),
        h = require,
        c = new (function () {
      function e(e) {
        this.proxy_args_list = [], this._codePath = null, this.conf = e, this.cdnHostManager = new o(this.conf), this.sandbox = { console: console, require: h, wx: wx, encrypt: a, QING_CONF: s, cxGetRequestData: a.cxGetRequestData, cxGetResponseData: a.cxGetResponseData };try {
          tt && (this.sandbox.tt = tt);
        } catch (e) {}try {
          "undefined" == typeof GameGlobal || (this.sandbox.GameGlobal = GameGlobal);
        } catch (e) {}
      }return Object.defineProperty(e.prototype, "codeUrl", { get: function () {
          var e = "/sdk/release/qing-v2.png";return this.conf.DEBUG_CODE_PATH ? e = this.conf.DEBUG_CODE_PATH : (this.conf.DEBUG_CDN_CODE && (e = "/sdk/release/debug/qing-v2.png"), this._codePath && (e = this._codePath)), this.cdnHostManager.cdnHost + e;
        }, enumerable: !1, configurable: !0 }), Object.defineProperty(e.prototype, "codePath", { set: function (e) {
          this._codePath = e;
        }, enumerable: !1, configurable: !0 }), e.prototype.onGotCode = function () {
        for (var e in this.proxy_args_list) try {
          var t = this.proxy_args_list[e].name,
              i = this.proxy_args_list[e].args;this[t].apply(this, i);
        } catch (e) {
          console.error(e);
        }
      }, e.prototype.getCode = function (e) {
        GameGlobal.VMLOCALFILE ? (console.log("read code from local file"), setTimeout(function () {
          var t = wx.getFileSystemManager().readFileSync(GameGlobal.VMLOCALFILE, "utf-8");e(t);
        }, 10)) : wx.request({ url: this.codeUrl + "?r=" + new Date().getTime(), method: "GET", responseType: "arraybuffer", success: function (t) {
            for (var i = new Uint8Array(t.data), r = "", n = 0; n < i.length; n++) r += String.fromCharCode(i[n]);var s = r.split("<JS Start>");s.length > 1 && (r = s[1]), r = decodeURIComponent(escape(r)), console.log("request end"), e(r);
          }, fail: function (e) {
            console.log(e), r.log("get fail");
          }, complete: function () {} });
      }, e.prototype.replace = function (e) {
        var t = this,
            i = n.createContext(this.sandbox);this.getCode(function (r) {
          try {
            var s = n.runInContext(r, i);for (var a in s.instance) t[a] = s.instance[a];t.onGotCode(), e(s);
          } catch (e) {
            console.error(e);
          }
        });
      }, e.prototype.onInit = function () {
        this.proxy_args_list.push({ name: "onInit", args: Array.prototype.slice.call(arguments, 0) });
      }, e.prototype.login = function () {
        this.proxy_args_list.push({ name: "login", args: Array.prototype.slice.call(arguments, 0) });
      }, e.prototype.canPay = function () {
        return !1;
      }, e.prototype.getShareToken = function () {
        return "";
      }, e;
    }())(s),
        u = function () {
      return function () {
        this.onInit = c.onInit.bind(c), this.login = c.login.bind(c), this.canPay = c.canPay.bind(c), this.getShareToken = c.getShareToken;
      };
    }(),
        p = function () {
      function e() {}return e.setCodePath = function (e) {
        c.codePath = e;
      }, e.replace = function () {
        c.replace(function (e) {
          for (var i in e.instance) t.instance[i] = e.instance[i];
        });
      }, e;
    }();t.SDKSetter = p, console.log("vvvvvv"), t.instance = new u();
  }, B3n6: function (e, t) {
    e.exports = require("qingjs-conf");
  }, "BW/k": function (e, t, i) {
    "use strict";

    var r = "bqt34u8K",
        n = "0002030205060607",
        s = "zxc8923n",
        a = "0102010204060607",
        o = "134zadsa",
        h = "0002030203060608",
        c = "OnT8f4MNHXw10Dg9SIKFPKnOzWP2lMQSzhpkmCZnFi1XaLUcijWOH8ak+3Y/kGba",
        u = "Ztm3tRDSDg7/rj5o5yx+Y3p7X749beZYcxCdGlOki9tKL3DvoC8J0S9fqiJ4Qe/v5VrPgjKSAsglhSZNLeqCiQ==";function p(e, t, i, r, n, s) {
      var a,
          o,
          h,
          c,
          u,
          p,
          l,
          d,
          f,
          m,
          v,
          g,
          x,
          y,
          b = [16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244, 16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540, 16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776, 16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780, 65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540, 66560, 0, 16842756],
          _ = [-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648, 32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344],
          k = [520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736, 131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800, 134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312, 134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240, 134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736, 134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584],
          C = [8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0, 8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736, 8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736, 8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193, 8320, 8388608, 8396801, 128, 8388608, 8192, 8396928],
          S = [256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288, 33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112, 0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976, 33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512, 1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544, 1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688, 1073742080, 524288, 0, 1074266112, 34078976, 1073742080],
          A = [536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704, 4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688, 536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912, 536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296, 536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16, 16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312],
          w = [2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866, 2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064, 2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152, 67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050, 2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202, 69206016, 2048, 67108866, 67110912, 2048, 2097154],
          E = [268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600, 268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240, 262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304, 262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600, 268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552, 268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696],
          I = function (e) {
        for (var t, i, r = [0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428, 66048, 66052, 536936960, 536936964], n = [0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833, 67109120, 67109121, 68157696, 68157697], s = [0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272], a = [0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224, 134348800, 136445952, 139264, 2236416, 134356992, 136454144], o = [0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112, 266256], h = [0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432, 33555456, 33554464, 33555488], c = [0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746], u = [0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120, 198656, 537001984, 537067520, 537004032, 537069568], p = [0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434, 33816578, 33554434, 33816578], l = [0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024, 268436480, 1032, 268436488], d = [0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800, 1056768, 1056800], f = [0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080, 67109376, 83886592, 69206016, 85983232, 69206528, 85983744], m = [0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744, 134221840, 524304, 528400, 134742032, 134746128], v = [0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261], g = e.length > 8 ? 3 : 1, x = new Array(32 * g), y = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0], b = 0, _ = 0, k = 0; k < g; k++) {
          var C = e.charCodeAt(b++) << 24 | e.charCodeAt(b++) << 16 | e.charCodeAt(b++) << 8 | e.charCodeAt(b++),
              S = e.charCodeAt(b++) << 24 | e.charCodeAt(b++) << 16 | e.charCodeAt(b++) << 8 | e.charCodeAt(b++),
              A = 252645135 & (C >>> 4 ^ S);C ^= A << 4, C ^= A = 65535 & ((S ^= A) >>> -16 ^ C), C ^= (A = 858993459 & (C >>> 2 ^ (S ^= A << -16))) << 2, C ^= A = 65535 & ((S ^= A) >>> -16 ^ C), C ^= (A = 1431655765 & (C >>> 1 ^ (S ^= A << -16))) << 1, C ^= A = 16711935 & ((S ^= A) >>> 8 ^ C), A = (C ^= (A = 1431655765 & (C >>> 1 ^ (S ^= A << 8))) << 1) << 8 | (S ^= A) >>> 20 & 240, C = S << 24 | S << 8 & 16711680 | S >>> 8 & 65280 | S >>> 24 & 240, S = A;for (var w = 0; w < y.length; w++) y[w] ? (C = C << 2 | C >>> 26, S = S << 2 | S >>> 26) : (C = C << 1 | C >>> 27, S = S << 1 | S >>> 27), S &= -15, t = r[(C &= -15) >>> 28] | n[C >>> 24 & 15] | s[C >>> 20 & 15] | a[C >>> 16 & 15] | o[C >>> 12 & 15] | h[C >>> 8 & 15] | c[C >>> 4 & 15], i = u[S >>> 28] | p[S >>> 24 & 15] | l[S >>> 20 & 15] | d[S >>> 16 & 15] | f[S >>> 12 & 15] | m[S >>> 8 & 15] | v[S >>> 4 & 15], A = 65535 & (i >>> 16 ^ t), x[_++] = t ^ A, x[_++] = i ^ A << 16;
        }return x;
      }(e),
          P = 0,
          L = t.length,
          N = 0,
          V = 32 == I.length ? 3 : 9;d = 3 == V ? i ? [0, 32, 2] : [30, -2, -2] : i ? [0, 32, 2, 62, 30, -2, 64, 96, 2] : [94, 62, -2, 32, 64, 2, 30, -2, -2], 2 == s ? t += "        " : 1 == s ? (h = 8 - L % 8, t += String.fromCharCode(h, h, h, h, h, h, h, h), 8 == h && (L += 8)) : s || (t += "\0\0\0\0\0\0\0\0");var T = "",
          R = "";for (1 == r && (f = n.charCodeAt(P++) << 24 | n.charCodeAt(P++) << 16 | n.charCodeAt(P++) << 8 | n.charCodeAt(P++), v = n.charCodeAt(P++) << 24 | n.charCodeAt(P++) << 16 | n.charCodeAt(P++) << 8 | n.charCodeAt(P++), P = 0); P < L;) {
        for (p = t.charCodeAt(P++) << 24 | t.charCodeAt(P++) << 16 | t.charCodeAt(P++) << 8 | t.charCodeAt(P++), l = t.charCodeAt(P++) << 24 | t.charCodeAt(P++) << 16 | t.charCodeAt(P++) << 8 | t.charCodeAt(P++), 1 == r && (i ? (p ^= f, l ^= v) : (m = f, g = v, f = p, v = l)), p ^= (h = 252645135 & (p >>> 4 ^ l)) << 4, p ^= (h = 65535 & (p >>> 16 ^ (l ^= h))) << 16, p ^= h = 858993459 & ((l ^= h) >>> 2 ^ p), p ^= h = 16711935 & ((l ^= h << 2) >>> 8 ^ p), p = (p ^= (h = 1431655765 & (p >>> 1 ^ (l ^= h << 8))) << 1) << 1 | p >>> 31, l = (l ^= h) << 1 | l >>> 31, o = 0; o < V; o += 3) {
          for (x = d[o + 1], y = d[o + 2], a = d[o]; a != x; a += y) c = l ^ I[a], u = (l >>> 4 | l << 28) ^ I[a + 1], h = p, p = l, l = h ^ (_[c >>> 24 & 63] | C[c >>> 16 & 63] | A[c >>> 8 & 63] | E[63 & c] | b[u >>> 24 & 63] | k[u >>> 16 & 63] | S[u >>> 8 & 63] | w[63 & u]);h = p, p = l, l = h;
        }l = l >>> 1 | l << 31, l ^= h = 1431655765 & ((p = p >>> 1 | p << 31) >>> 1 ^ l), l ^= (h = 16711935 & (l >>> 8 ^ (p ^= h << 1))) << 8, l ^= (h = 858993459 & (l >>> 2 ^ (p ^= h))) << 2, l ^= h = 65535 & ((p ^= h) >>> 16 ^ l), l ^= h = 252645135 & ((p ^= h << 16) >>> 4 ^ l), p ^= h << 4, 1 == r && (i ? (f = p, v = l) : (p ^= m, l ^= g)), R += String.fromCharCode(p >>> 24, p >>> 16 & 255, p >>> 8 & 255, 255 & p, l >>> 24, l >>> 16 & 255, l >>> 8 & 255, 255 & l), 512 == (N += 8) && (T += R, R = "", N = 0);
      }return T + R;
    }function l(e) {
      for (var t = "", i = "0x" == e.substr(0, 2) ? 2 : 0; i < e.length; i += 2) t += String.fromCharCode(parseInt(e.substr(i, 2), 16));return t;
    }var d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        f = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];function m(e) {
      var t, i, r, n, s, a, o;for (a = e.length, s = 0, o = ""; s < a;) {
        do {
          t = f[255 & e.charCodeAt(s++)];
        } while (s < a && -1 == t);if (-1 == t) break;do {
          i = f[255 & e.charCodeAt(s++)];
        } while (s < a && -1 == i);if (-1 == i) break;o += String.fromCharCode(t << 2 | (48 & i) >> 4);do {
          if (61 == (r = 255 & e.charCodeAt(s++))) return o;r = f[r];
        } while (s < a && -1 == r);if (-1 == r) break;o += String.fromCharCode((15 & i) << 4 | (60 & r) >> 2);do {
          if (61 == (n = 255 & e.charCodeAt(s++))) return o;n = f[n];
        } while (s < a && -1 == n);if (-1 == n) break;o += String.fromCharCode((3 & r) << 6 | n);
      }return o;
    }var v = { encode: function (e) {
        var t = e.replace(/[\u0080-\u07ff]/g, function (e) {
          var t = e.charCodeAt(0);return String.fromCharCode(192 | t >> 6, 128 | 63 & t);
        });return t = t.replace(/[\u0800-\uffff]/g, function (e) {
          var t = e.charCodeAt(0);return String.fromCharCode(224 | t >> 12, 128 | t >> 6 & 63, 128 | 63 & t);
        });
      }, decode: function (e) {
        var t = e.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g, function (e) {
          var t = (15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2);return String.fromCharCode(t);
        });return t = t.replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, function (e) {
          var t = (31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1);return String.fromCharCode(t);
        });
      } };e.exports = { cxGetRequestData: function (e) {
        var t = p(o, m(c), 0, 1, l(h), 0),
            i = p(s, m(t), 0, 1, l(a), 0),
            f = p(r, m(i), 0, 1, l(n), 0),
            g = p(o, m(u), 0, 1, l(h), 0),
            x = p(s, m(g), 0, 1, l(a), 0),
            y = p(r, m(x), 0, 1, l(n), 0);return function (e) {
          var t, i, r, n, s, a;for (r = e.length, i = 0, t = ""; i < r;) {
            if (n = 255 & e.charCodeAt(i++), i == r) {
              t += d.charAt(n >> 2), t += d.charAt((3 & n) << 4), t += "==";break;
            }if (s = e.charCodeAt(i++), i == r) {
              t += d.charAt(n >> 2), t += d.charAt((3 & n) << 4 | (240 & s) >> 4), t += d.charAt((15 & s) << 2), t += "=";break;
            }a = e.charCodeAt(i++), t += d.charAt(n >> 2), t += d.charAt((3 & n) << 4 | (240 & s) >> 4), t += d.charAt((15 & s) << 2 | (192 & a) >> 6), t += d.charAt(63 & a);
          }return t;
        }(p(f.substring(0, 8), v.encode(JSON.stringify(e)), 1, 1, l(y.substring(0, 16)), 1));
      }, cxGetResponseData: function (e) {
        var t = p(o, m(c), 0, 1, l(h), 0),
            i = p(s, m(t), 0, 1, l(a), 0),
            d = p(r, m(i), 0, 1, l(n), 0),
            f = p(o, m(u), 0, 1, l(h), 0),
            g = p(s, m(f), 0, 1, l(a), 0),
            x = p(r, m(g), 0, 1, l(n), 0);return v.decode(p(d.substring(0, 8), m(e), 0, 1, l(x.substring(0, 16)), 0));
      } };
  }, IWXR: function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", { value: !0 });var r = i("6lI8");r.SDKSetter.setCodePath("/sdk/release/qing-v2.png"), r.SDKSetter.replace(), t.instance = r.instance;
  }, nPIJ: function (e, t, i) {
    "use strict";

    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    };!function (e, t) {
      for (var i in t) e[i] = t[i];
    }(t, function (e) {
      var t = {};function i(r) {
        if (t[r]) return t[r].exports;var n = t[r] = { i: r, l: !1, exports: {} };return e[r].call(n.exports, n, n.exports, i), n.l = !0, n.exports;
      }return i.m = e, i.c = t, i.d = function (e, t, r) {
        i.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
      }, i.r = function (e) {
        Object.defineProperty(e, "__esModule", { value: !0 });
      }, i.n = function (e) {
        var t = e && e.__esModule ? function () {
          return e.default;
        } : function () {
          return e;
        };return i.d(t, "a", t), t;
      }, i.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }, i.p = "", i.w = {}, i(i.s = 11);
    }([function (e, t, i) {
      var r;Object.defineProperty(t, "__esModule", { value: !0 }), function (e) {
        e[e.simple = 0] = "simple", e[e.member = 1] = "member";
      }(r || (r = {}));var n = function () {
        function e(e, t) {
          this.value = e, this.kind = t;
        }return Object.defineProperty(e.prototype, "v", { get: function () {
            return this.value;
          }, set: function (e) {
            if ("const" === this.kind) throw new TypeError("Assignment to constant variable");this.value = e;
          }, enumerable: !0, configurable: !0 }), e;
      }();t.SimpleValue = n;var s = function () {
        function e(e, t) {
          this.obj = e, this.name = t;
        }return Object.defineProperty(e.prototype, "v", { get: function () {
            return this.obj[this.name];
          }, set: function (e) {
            this.obj[this.name] = e;
          }, enumerable: !0, configurable: !0 }), e;
      }();t.MemberValue = s, t.createSimpleValue = function (e, t) {
        return void 0 === t && (t = "var"), new n(e, t);
      }, t.createMemberValue = function (e, t) {
        return new s(e, t);
      };
    }, function (e, t, i) {
      Object.defineProperty(t, "__esModule", { value: !0 });var r = i(0),
          n = function () {
        function e(e, t) {
          this.invasive = !1, this.declaration = {}, this.type = e, this.outer = t;
        }return e.prototype.get = function (e, t) {
          if (void 0 === t && (t = !1), this.declaration[e]) return this.declaration[e];if (this.outer) return this.outer.get(e, t);var i = this.sandbox.get(e, t);if (i) return i;throw new ReferenceError(e + " is not defined");
        }, e.prototype.declare = function (e, t, i, r) {
          if (void 0 === i && (i = "var"), void 0 === r && (r = !0), "var" === i) return this.varDeclare(e, t, r);if ("let" === i) return this.letDeclare(e, t);if ("const" === i) return this.constDeclare(e, t);throw new Error("evil-eval: Invalid Variable Declaration Kind");
        }, e.prototype.varDeclare = function (e, t, i) {
          void 0 === i && (i = !0);for (var n = this; n.outer && "function" !== n.type;) n = n.outer;return this.declaration.hasOwnProperty(e) ? i && (this.declaration[e] = r.createSimpleValue(t, "var")) : this.declaration[e] = r.createSimpleValue(t, "var"), this.declaration[e];
        }, e.prototype.letDeclare = function (e, t) {
          if (this.declaration[e]) throw new SyntaxError("Identifier '" + e + "' has already been declared");return this.declaration[e] = r.createSimpleValue(t, "let"), this.declaration[e];
        }, e.prototype.constDeclare = function (e, t, i) {
          if (void 0 === i && (i = !1), !i && this.declaration[e]) throw new SyntaxError("Identifier '" + e + "' has already been declared");return this.declaration[e] = r.createSimpleValue(t, "const"), this.declaration[e];
        }, e;
      }();t.default = n;
    }, function (e, t, i) {
      Object.defineProperty(t, "__esModule", { value: !0 });var r = { Infinity: 1 / 0, NaN: NaN, undefined: void 0, isFinite: isFinite, isNaN: isNaN, parseFloat: parseFloat, parseInt: parseInt, decodeURI: decodeURI, decodeURIComponent: decodeURIComponent, encodeURI: encodeURI, encodeURIComponent: encodeURIComponent, escape: escape, unescape: unescape, Object: Object, Function: Function, Boolean: Boolean, Error: Error, EvalError: EvalError, RangeError: RangeError, ReferenceError: ReferenceError, SyntaxError: SyntaxError, TypeError: TypeError, URIError: URIError, Number: Number, Math: Math, Date: Date, String: String, RegExp: RegExp, Array: Array, JSON: JSON };"undefined" != typeof eval && (r.eval = eval), "undefined" != typeof Symbol && (r.Symbol = Symbol), "undefined" != typeof Int8Array && (r.Int8Array = Int8Array), "undefined" != typeof Uint8Array && (r.Uint8Array = Uint8Array), "undefined" != typeof Uint8ClampedArray && (r.Uint8ClampedArray = Uint8ClampedArray), "undefined" != typeof Int16Array && (r.Int16Array = Int16Array), "undefined" != typeof Uint16Array && (r.Uint16Array = Uint16Array), "undefined" != typeof Int32Array && (r.Int32Array = Int32Array), "undefined" != typeof Uint32Array && (r.Uint32Array = Uint32Array), "undefined" != typeof Float32Array && (r.Float32Array = Float32Array), "undefined" != typeof Float64Array && (r.Float64Array = Float64Array), "undefined" != typeof ArrayBuffer && (r.ArrayBuffer = ArrayBuffer), "undefined" != typeof DataView && (r.DataView = DataView), "undefined" != typeof Map && (r.Map = Map), "undefined" != typeof Set && (r.Set = Set), "undefined" != typeof WeakMap && (r.WeakMap = WeakMap), "undefined" != typeof WeakSet && (r.WeakSet = WeakSet), "undefined" != typeof Promise && (r.Promise = Promise), "undefined" != typeof Reflect && (r.Reflect = Reflect), "undefined" != typeof Proxy && (r.Proxy = Proxy), "undefined" != typeof console && (r.console = console), "undefined" != typeof setTimeout && (r.setTimeout = setTimeout), "undefined" != typeof clearTimeout && (r.clearTimeout = clearTimeout), "undefined" != typeof setInterval && (r.setInterval = setInterval), "undefined" != typeof clearInterval && (r.clearInterval = clearInterval), t.default = r;
    }, function (e, t, i) {
      Object.defineProperty(t, "__esModule", { value: !0 }), t.slice = Array.prototype.slice, t.hop = Object.prototype.hasOwnProperty, t.toString = Object.prototype.toString;
    }, function (e, t, i) {
      Object.defineProperty(t, "__esModule", { value: !0 });var r = i(0),
          n = i(3),
          s = function () {
        function e(e) {
          this.sandbox = e;
        }return e.prototype.get = function (e, t) {
          if (void 0 === t && (t = !1), t || n.hop.call(this.sandbox, e)) return r.createMemberValue(this.sandbox, e);
        }, e.prototype.declare = function (e, t) {
          this.sandbox[e] = t;
        }, e;
      }();t.default = s;
    }, function (e, t, i) {
      var r = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : { default: e };
      };Object.defineProperty(t, "__esModule", { value: !0 });var n = r(i(1)),
          s = function () {
        function e(e, t, i) {
          this.node = e, this.scope = t, this.evaluateMap = i;
        }return e.prototype.evaluate = function (t, i) {
          void 0 === i && (i = {});var r = new e(t, i.scope || this.scope, this.evaluateMap);r.label = i.label, r.extra = i.extra;var n = this.evaluateMap[t.type];if (!n) throw new Error('evil-eval: Node type "' + t.type + '" is not implemented');return n(r);
        }, e.prototype.createBlockScope = function (e) {
          void 0 === e && (e = !1);var t = new n.default("block", this.scope);return t.invasive = e, t;
        }, e.prototype.createFunctionScope = function (e) {
          void 0 === e && (e = !1);var t = new n.default("function", this.scope);return t.invasive = e, t;
        }, e;
      }();t.default = s;
    }, function (e, t, i) {
      var r;Object.defineProperty(t, "__esModule", { value: !0 }), function (e) {
        e[e.Continue = 0] = "Continue", e[e.Break = 1] = "Break", e[e.Return = 2] = "Return";
      }(r = t.SignalType || (t.SignalType = {}));var n = function () {
        function e(e, t) {
          this.type = e, this.value = t;
        }return e.Continue = function (t) {
          return new e(r.Continue, t);
        }, e.Break = function (t) {
          return new e(r.Break, t);
        }, e.Return = function (t) {
          return new e(r.Return, t);
        }, e.isSignal = function (t) {
          return t instanceof e;
        }, e.isContinue = function (t) {
          return t instanceof e && t.type === r.Continue;
        }, e.isBreak = function (t) {
          return t instanceof e && t.type === r.Break;
        }, e.isReturn = function (t) {
          return t instanceof e && t.type === r.Return;
        }, e;
      }();t.default = n;
    }, function (e, t, i) {
      var n = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : { default: e };
      };Object.defineProperty(t, "__esModule", { value: !0 });var s = i(0),
          a = n(i(6));function o(e) {
        var t = e.node,
            i = function () {
          var i = e.createFunctionScope(!0);i.constDeclare("this", this), i.constDeclare("arguments", arguments);for (var r = 0, n = t.params.length; r < n; r++) {
            var s = t.params[r].name;i.varDeclare(s, arguments[r]);
          }var o = e.evaluate(t.body, { scope: i });if (a.default.isReturn(o)) return o.value;
        };return Object.defineProperties(i, { name: { value: t.id ? t.id.name : "" }, length: { value: t.params.length } }), i;
      }t.Identifier = function (e) {
        if ("undefined" !== e.node.name) return e.scope.get(e.node.name).v;
      }, t.Literal = function (e) {
        return e.node.value;
      }, t.Program = function (e) {
        for (var t = 0, i = e.node.body; t < i.length; t++) {
          var r = i[t];e.evaluate(r);
        }
      }, t.ExpressionStatement = function (e) {
        return e.evaluate(e.node.expression);
      }, t.BlockStatement = function (e) {
        var t;e.scope.invasive ? (t = e.scope).invasive = !1 : t = e.createBlockScope();for (var i = 0, r = e.node.body; i < r.length; i++) if ("FunctionDeclaration" === (u = r[i]).type) e.evaluate(u, { scope: t });else if ("VariableDeclaration" === u.type && "var" === u.kind) for (var n = 0, s = u.declarations; n < s.length; n++) {
          var o = s[n];t.varDeclare(o.id.name, void 0, !1);
        }for (var h = 0, c = e.node.body; h < c.length; h++) {
          var u;if ("FunctionDeclaration" !== (u = c[h]).type) {
            var p = e.evaluate(u, { scope: t });if (a.default.isSignal(p)) return p;
          }
        }
      }, t.EmptyStatement = function (e) {}, t.DebuggerStatement = function (e) {}, t.WithStatement = function (e) {
        throw new Error('evil-eval: "' + e.node.type + '" not implemented');
      }, t.ReturnStatement = function (e) {
        var t;return e.node.argument && (t = e.evaluate(e.node.argument)), a.default.Return(t);
      }, t.LabeledStatement = function (e) {
        return e.evaluate(e.node.body, { label: e.node.label.name });
      }, t.BreakStatement = function (e) {
        var t;return e.node.label && (t = e.node.label.name), a.default.Break(t);
      }, t.ContinueStatement = function (e) {
        var t;return e.node.label && (t = e.node.label.name), a.default.Continue(t);
      }, t.IfStatement = function (e) {
        return e.evaluate(e.node.test) ? e.evaluate(e.node.consequent) : e.node.alternate ? e.evaluate(e.node.alternate) : void 0;
      }, t.SwitchStatement = function (e) {
        for (var t = e.evaluate(e.node.discriminant), i = !1, r = 0, n = e.node.cases; r < n.length; r++) {
          var s = n[r];if (i || s.test && t !== e.evaluate(s.test) || (i = !0), i) {
            var o = e.evaluate(s);if (a.default.isBreak(o)) break;if (a.default.isContinue(o)) continue;if (a.default.isReturn(o)) return o;
          }
        }
      }, t.SwitchCase = function (e) {
        for (var t = 0, i = e.node.consequent; t < i.length; t++) {
          var r = i[t],
              n = e.evaluate(r);if (a.default.isSignal(n)) return n;
        }
      }, t.ThrowStatement = function (e) {
        throw e.evaluate(e.node.argument);
      }, t.TryStatement = function (e) {
        var t = e.node,
            i = t.block,
            r = t.handler,
            n = t.finalizer;try {
          return e.evaluate(i);
        } catch (t) {
          if (r) {
            var s = r.param,
                a = e.createBlockScope(!0);return a.letDeclare(s.name, t), e.evaluate(r, { scope: a });
          }throw t;
        } finally {
          if (n) return e.evaluate(n);
        }
      }, t.CatchClause = function (e) {
        return e.evaluate(e.node.body);
      }, t.WhileStatement = function (e) {
        for (; e.evaluate(e.node.test);) {
          var t = e.evaluate(e.node.body);if (a.default.isSignal(t)) {
            if (a.default.isBreak(t)) {
              if (!t.value || t.value === e.label) break;
            } else if (a.default.isContinue(t) && (!t.value || t.value === e.label)) continue;return t;
          }
        }
      }, t.DoWhileStatement = function (e) {
        do {
          var t = e.evaluate(e.node.body);if (a.default.isSignal(t)) {
            if (a.default.isBreak(t)) {
              if (!t.value || t.value === e.label) break;
            } else if (a.default.isContinue(t) && (!t.value || t.value === e.label)) continue;return t;
          }
        } while (e.evaluate(e.node.test));
      }, t.ForStatement = function (e) {
        var t = e.node,
            i = e.scope;for (t.init && "VariableDeclaration" === t.init.type && (i = e.createBlockScope()), t.init && e.evaluate(t.init, { scope: i }); !t.test || e.evaluate(t.test, { scope: i }); t.update && e.evaluate(t.update, { scope: i })) {
          var r = e.evaluate(t.body, { scope: i });if (a.default.isSignal(r)) {
            if (a.default.isBreak(r)) {
              if (!r.value || r.value === e.label) break;
            } else if (a.default.isContinue(r) && (!r.value || r.value === e.label)) continue;return r;
          }
        }
      }, t.ForInStatement = function (e) {
        var t,
            i = e.node,
            r = i.left,
            n = i.right,
            s = i.body,
            o = e.scope;if ("VariableDeclaration" === r.type) {
          var h = r.declarations[0].id;t = o.declare(h.name, void 0, r.kind);
        } else {
          if ("Identifier" !== r.type) throw new Error('evil-eval: [ForInStatement] Unsupported left type "' + r.type + '"');t = o.get(r.name, !0);
        }for (var c in e.evaluate(n)) {
          t.v = c;var u = e.evaluate(s, { scope: o });if (a.default.isSignal(u)) {
            if (a.default.isBreak(u)) {
              if (!u.value || u.value === e.label) break;
            } else if (a.default.isContinue(u) && (!u.value || u.value === e.label)) continue;return u;
          }
        }
      }, t.FunctionDeclaration = function (e) {
        var t = o(e);return e.scope.varDeclare(e.node.id.name, t), t;
      }, t.VariableDeclaration = function (e) {
        for (var t = 0, i = e.node.declarations; t < i.length; t++) {
          var r = i[t],
              n = r.id.name,
              s = r.init ? e.evaluate(r.init) : void 0;e.scope.declare(n, s);
        }
      }, t.VariableDeclarator = function (e) {
        throw new Error("evil-eval: [VariableDeclarator] Should not happen");
      }, t.ThisExpression = function (e) {
        var t = e.scope.get("this");return t ? t.v : null;
      }, t.ArrayExpression = function (e) {
        return e.node.elements.map(function (t) {
          return e.evaluate(t);
        });
      }, t.ObjectExpression = function (e) {
        for (var t = {}, i = 0, r = e.node.properties; i < r.length; i++) {
          var n = r[i],
              s = void 0;if ("Literal" === n.key.type) s = n.key.value;else {
            if ("Identifier" !== n.key.type) throw new Error('evil-eval: [ObjectExpression] Unsupported property key type "' + n.key.type + '"');s = n.key.name;
          }t[s] = e.evaluate(n.value);
        }return t;
      }, t.Property = function (e) {
        throw new Error("evil-eval: [Property] Should not happen");
      }, t.FunctionExpression = o;var h = { "-": function (e) {
          return -e.evaluate(e.node.argument);
        }, "+": function (e) {
          return +e.evaluate(e.node.argument);
        }, "!": function (e) {
          return !e.evaluate(e.node.argument);
        }, "~": function (e) {
          return ~e.evaluate(e.node.argument);
        }, typeof: function (e) {
          if ("Identifier" !== e.node.argument.type) return r(e.evaluate(e.node.argument));try {
            var t = e.scope.get(e.node.argument.name);return t ? r(t.v) : "undefined";
          } catch (t) {
            if (t.message === e.node.argument.name + " is not defined") return "undefined";throw t;
          }
        }, void: function (e) {
          e.evaluate(e.node.argument);
        }, delete: function (e) {
          var t = e.node.argument;return "MemberExpression" === t.type ? delete e.evaluate(t.object)[u(t, e)] : "Identifier" !== t.type && ("Literal" === t.type || void 0);
        } };t.UnaryExpression = function (e) {
        return h[e.node.operator](e);
      };var c = { "++": function (e, t) {
          return t ? ++e.v : e.v++;
        }, "--": function (e, t) {
          return t ? --e.v : e.v--;
        } };function u(e, t) {
        return e.computed ? t.evaluate(e.property) : e.property.name;
      }function p(e, t, i) {
        if (void 0 === i && (i = !1), "Identifier" === e.type) return t.scope.get(e.name, i);if ("MemberExpression" === e.type) {
          var r = t.evaluate(e.object),
              n = u(e, t);return s.createMemberValue(r, n);
        }throw new Error('evil-eval: Not support to get value of node type "' + e.type + '"');
      }t.UpdateExpression = function (e) {
        var t = p(e.node.argument, e);return c[e.node.operator](t, e.node.prefix);
      }, t.BinaryExpressionOperatorEvaluateMap = { "==": function (e, t) {
          return e == t;
        }, "!=": function (e, t) {
          return e != t;
        }, "===": function (e, t) {
          return e === t;
        }, "!==": function (e, t) {
          return e !== t;
        }, "<": function (e, t) {
          return e < t;
        }, "<=": function (e, t) {
          return e <= t;
        }, ">": function (e, t) {
          return e > t;
        }, ">=": function (e, t) {
          return e >= t;
        }, "<<": function (e, t) {
          return e << t;
        }, ">>": function (e, t) {
          return e >> t;
        }, ">>>": function (e, t) {
          return e >>> t;
        }, "+": function (e, t) {
          return e + t;
        }, "-": function (e, t) {
          return e - t;
        }, "*": function (e, t) {
          return e * t;
        }, "/": function (e, t) {
          return e / t;
        }, "%": function (e, t) {
          return e % t;
        }, "**": function (e, t) {
          throw new Error('evil-eval: es5 not support operator "**"');
        }, "|": function (e, t) {
          return e | t;
        }, "^": function (e, t) {
          return e ^ t;
        }, "&": function (e, t) {
          return e & t;
        }, in: function (e, t) {
          return e in t;
        }, instanceof: function (e, t) {
          return e instanceof t;
        } }, t.BinaryExpression = function (e) {
        var i = e.evaluate(e.node.left),
            r = e.evaluate(e.node.right);return t.BinaryExpressionOperatorEvaluateMap[e.node.operator](i, r);
      }, t.AssignmentExpressionOperatorEvaluateMap = { "=": function (e, t) {
          return e.v = t;
        }, "+=": function (e, t) {
          return e.v += t;
        }, "-=": function (e, t) {
          return e.v -= t;
        }, "*=": function (e, t) {
          return e.v *= t;
        }, "/=": function (e, t) {
          return e.v /= t;
        }, "%=": function (e, t) {
          return e.v %= t;
        }, "**=": function (e, t) {
          throw new Error('evil-eval: es5 not support operator "**=');
        }, "<<=": function (e, t) {
          return e.v <<= t;
        }, ">>=": function (e, t) {
          return e.v >>= t;
        }, ">>>=": function (e, t) {
          return e.v >>>= t;
        }, "|=": function (e, t) {
          return e.v |= t;
        }, "^=": function (e, t) {
          return e.v ^= t;
        }, "&=": function (e, t) {
          return e.v &= t;
        } }, t.AssignmentExpression = function (e) {
        var i = e.node,
            r = e.evaluate(i.right),
            n = p(i.left, e, "=" === i.operator);return t.AssignmentExpressionOperatorEvaluateMap[i.operator](n, r);
      }, t.LogicalExpression = function (e) {
        return { "||": function () {
            return e.evaluate(e.node.left) || e.evaluate(e.node.right);
          }, "&&": function () {
            return e.evaluate(e.node.left) && e.evaluate(e.node.right);
          } }[e.node.operator]();
      }, t.MemberExpression = function (e) {
        var t = e.evaluate(e.node.object),
            i = t[u(e.node, e)];return i instanceof Function ? i.bind(t) : i;
      }, t.ConditionalExpression = function (e) {
        return e.evaluate(e.node.test) ? e.evaluate(e.node.consequent) : e.evaluate(e.node.alternate);
      }, t.CallExpression = function (e) {
        var t = e.evaluate(e.node.callee),
            i = e.node.arguments.map(function (t) {
          return e.evaluate(t);
        });return e.node.callee.type, t.apply(void 0, i);
      }, t.NewExpression = function (e) {
        var t = e.evaluate(e.node.callee),
            i = e.node.arguments.map(function (t) {
          return e.evaluate(t);
        });return new (t.bind.apply(t, [null].concat(i)))();
      }, t.SequenceExpression = function (e) {
        for (var t, i = 0, r = e.node.expressions; i < r.length; i++) {
          var n = r[i];t = e.evaluate(n);
        }return t;
      }, t.getPropertyName = u, t.getIdentifierOrMemberExpressionValue = p;
    }, function (e, t, i) {
      this && this.__assign || Object.assign;var r = this && this.__importStar || function (e) {
        if (e && e.__esModule) return e;var t = {};if (null != e) for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);return t.default = e, t;
      };Object.defineProperty(t, "__esModule", { value: !0 });var n = { 5: r(i(7)) };t.default = n;
    }, function (e, t, i) {
      i.r(t), i.d(t, "version", function () {
        return Se;
      }), i.d(t, "parse", function () {
        return Ae;
      }), i.d(t, "parseExpressionAt", function () {
        return we;
      }), i.d(t, "tokenizer", function () {
        return Ee;
      }), i.d(t, "parse_dammit", function () {
        return _e;
      }), i.d(t, "LooseParser", function () {
        return ke;
      }), i.d(t, "pluginsLoose", function () {
        return Ce;
      }), i.d(t, "addLooseExports", function () {
        return Ie;
      }), i.d(t, "Parser", function () {
        return F;
      }), i.d(t, "plugins", function () {
        return M;
      }), i.d(t, "defaultOptions", function () {
        return D;
      }), i.d(t, "Position", function () {
        return T;
      }), i.d(t, "SourceLocation", function () {
        return R;
      }), i.d(t, "getLineInfo", function () {
        return O;
      }), i.d(t, "Node", function () {
        return $;
      }), i.d(t, "TokenType", function () {
        return v;
      }), i.d(t, "tokTypes", function () {
        return k;
      }), i.d(t, "keywordTypes", function () {
        return b;
      }), i.d(t, "TokContext", function () {
        return ie;
      }), i.d(t, "tokContexts", function () {
        return re;
      }), i.d(t, "isIdentifierChar", function () {
        return m;
      }), i.d(t, "isIdentifierStart", function () {
        return f;
      }), i.d(t, "Token", function () {
        return ge;
      }), i.d(t, "isNewLine", function () {
        return A;
      }), i.d(t, "lineBreak", function () {
        return C;
      }), i.d(t, "lineBreakG", function () {
        return S;
      }), i.d(t, "nonASCIIwhitespace", function () {
        return w;
      });var r = { 3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile", 5: "class enum extends super const export import", 6: "enum", strict: "implements interface let package private protected public static yield", strictBind: "eval arguments" },
          n = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
          s = { 5: n, 6: n + " const class extends export import super" },
          a = /^in(stanceof)?$/,
          o = "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄮㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿪ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞮꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭥꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
          h = "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛ࣔ-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఃా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ູົຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱꤀-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
          c = new RegExp("[" + o + "]"),
          u = new RegExp("[" + o + h + "]");o = h = null;var p = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 26, 45, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 785, 52, 76, 44, 33, 24, 27, 35, 42, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 54, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 86, 25, 391, 63, 32, 0, 257, 0, 11, 39, 8, 0, 22, 0, 12, 39, 3, 3, 55, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 698, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 881, 68, 12, 0, 67, 12, 65, 1, 31, 6124, 20, 754, 9486, 286, 82, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 4149, 196, 60, 67, 1213, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541],
          l = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 1306, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 52, 0, 13, 2, 49, 13, 10, 2, 4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 57, 0, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 87, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 423, 9, 280, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 19719, 9, 135, 4, 60, 6, 26, 9, 1016, 45, 17, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 2214, 6, 110, 6, 6, 9, 792487, 239];function d(e, t) {
        for (var i = 65536, r = 0; r < t.length; r += 2) {
          if ((i += t[r]) > e) return !1;if ((i += t[r + 1]) >= e) return !0;
        }
      }function f(e, t) {
        return e < 65 ? 36 === e : e < 91 || (e < 97 ? 95 === e : e < 123 || (e <= 65535 ? e >= 170 && c.test(String.fromCharCode(e)) : !1 !== t && d(e, p)));
      }function m(e, t) {
        return e < 48 ? 36 === e : e < 58 || !(e < 65) && (e < 91 || (e < 97 ? 95 === e : e < 123 || (e <= 65535 ? e >= 170 && u.test(String.fromCharCode(e)) : !1 !== t && (d(e, p) || d(e, l)))));
      }var v = function (e, t) {
        void 0 === t && (t = {}), this.label = e, this.keyword = t.keyword, this.beforeExpr = !!t.beforeExpr, this.startsExpr = !!t.startsExpr, this.isLoop = !!t.isLoop, this.isAssign = !!t.isAssign, this.prefix = !!t.prefix, this.postfix = !!t.postfix, this.binop = t.binop || null, this.updateContext = null;
      };function g(e, t) {
        return new v(e, { beforeExpr: !0, binop: t });
      }var x = { beforeExpr: !0 },
          y = { startsExpr: !0 },
          b = {};function _(e, t) {
        return void 0 === t && (t = {}), t.keyword = e, b[e] = new v(e, t);
      }var k = { num: new v("num", y), regexp: new v("regexp", y), string: new v("string", y), name: new v("name", y), eof: new v("eof"), bracketL: new v("[", { beforeExpr: !0, startsExpr: !0 }), bracketR: new v("]"), braceL: new v("{", { beforeExpr: !0, startsExpr: !0 }), braceR: new v("}"), parenL: new v("(", { beforeExpr: !0, startsExpr: !0 }), parenR: new v(")"), comma: new v(",", x), semi: new v(";", x), colon: new v(":", x), dot: new v("."), question: new v("?", x), arrow: new v("=>", x), template: new v("template"), invalidTemplate: new v("invalidTemplate"), ellipsis: new v("...", x), backQuote: new v("`", y), dollarBraceL: new v("${", { beforeExpr: !0, startsExpr: !0 }), eq: new v("=", { beforeExpr: !0, isAssign: !0 }), assign: new v("_=", { beforeExpr: !0, isAssign: !0 }), incDec: new v("++/--", { prefix: !0, postfix: !0, startsExpr: !0 }), prefix: new v("!/~", { beforeExpr: !0, prefix: !0, startsExpr: !0 }), logicalOR: g("||", 1), logicalAND: g("&&", 2), bitwiseOR: g("|", 3), bitwiseXOR: g("^", 4), bitwiseAND: g("&", 5), equality: g("==/!=/===/!==", 6), relational: g("</>/<=/>=", 7), bitShift: g("<</>>/>>>", 8), plusMin: new v("+/-", { beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0 }), modulo: g("%", 10), star: g("*", 10), slash: g("/", 10), starstar: new v("**", { beforeExpr: !0 }), _break: _("break"), _case: _("case", x), _catch: _("catch"), _continue: _("continue"), _debugger: _("debugger"), _default: _("default", x), _do: _("do", { isLoop: !0, beforeExpr: !0 }), _else: _("else", x), _finally: _("finally"), _for: _("for", { isLoop: !0 }), _function: _("function", y), _if: _("if"), _return: _("return", x), _switch: _("switch"), _throw: _("throw", x), _try: _("try"), _var: _("var"), _const: _("const"), _while: _("while", { isLoop: !0 }), _with: _("with"), _new: _("new", { beforeExpr: !0, startsExpr: !0 }), _this: _("this", y), _super: _("super", y), _class: _("class", y), _extends: _("extends", x), _export: _("export"), _import: _("import"), _null: _("null", y), _true: _("true", y), _false: _("false", y), _in: _("in", { beforeExpr: !0, binop: 7 }), _instanceof: _("instanceof", { beforeExpr: !0, binop: 7 }), _typeof: _("typeof", { beforeExpr: !0, prefix: !0, startsExpr: !0 }), _void: _("void", { beforeExpr: !0, prefix: !0, startsExpr: !0 }), _delete: _("delete", { beforeExpr: !0, prefix: !0, startsExpr: !0 }) },
          C = /\r\n?|\n|\u2028|\u2029/,
          S = new RegExp(C.source, "g");function A(e) {
        return 10 === e || 13 === e || 8232 === e || 8233 === e;
      }var w = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
          E = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
          I = Object.prototype,
          P = I.hasOwnProperty,
          L = I.toString;function N(e, t) {
        return P.call(e, t);
      }var V = Array.isArray || function (e) {
        return "[object Array]" === L.call(e);
      },
          T = function (e, t) {
        this.line = e, this.column = t;
      };T.prototype.offset = function (e) {
        return new T(this.line, this.column + e);
      };var R = function (e, t, i) {
        this.start = t, this.end = i, null !== e.sourceFile && (this.source = e.sourceFile);
      };function O(e, t) {
        for (var i = 1, r = 0;;) {
          S.lastIndex = r;var n = S.exec(e);if (!(n && n.index < t)) return new T(i, t - r);++i, r = n.index + n[0].length;
        }
      }var D = { ecmaVersion: 7, sourceType: "script", onInsertedSemicolon: null, onTrailingComma: null, allowReserved: null, allowReturnOutsideFunction: !1, allowImportExportEverywhere: !1, allowHashBang: !1, locations: !1, onToken: null, onComment: null, ranges: !1, program: null, sourceFile: null, directSourceFile: null, preserveParens: !1, plugins: {} };var M = {};function B(e) {
        return new RegExp("^(?:" + e.replace(/ /g, "|") + ")$");
      }var F = function (e, t, i) {
        this.options = e = function (e) {
          var t = {};for (var i in D) t[i] = e && N(e, i) ? e[i] : D[i];if (t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009), null == t.allowReserved && (t.allowReserved = t.ecmaVersion < 5), V(t.onToken)) {
            var r = t.onToken;t.onToken = function (e) {
              return r.push(e);
            };
          }return V(t.onComment) && (t.onComment = function (e, t) {
            return function (i, r, n, s, a, o) {
              var h = { type: i ? "Block" : "Line", value: r, start: n, end: s };e.locations && (h.loc = new R(this, a, o)), e.ranges && (h.range = [n, s]), t.push(h);
            };
          }(t, t.onComment)), t;
        }(e), this.sourceFile = e.sourceFile, this.keywords = B(s[e.ecmaVersion >= 6 ? 6 : 5]);var n = "";if (!e.allowReserved) {
          for (var a = e.ecmaVersion; !(n = r[a]); a--);"module" == e.sourceType && (n += " await");
        }this.reservedWords = B(n);var o = (n ? n + " " : "") + r.strict;this.reservedWordsStrict = B(o), this.reservedWordsStrictBind = B(o + " " + r.strictBind), this.input = String(t), this.containsEsc = !1, this.loadPlugins(e.plugins), i ? (this.pos = i, this.lineStart = this.input.lastIndexOf("\n", i - 1) + 1, this.curLine = this.input.slice(0, this.lineStart).split(C).length) : (this.pos = this.lineStart = 0, this.curLine = 1), this.type = k.eof, this.value = null, this.start = this.end = this.pos, this.startLoc = this.endLoc = this.curPosition(), this.lastTokEndLoc = this.lastTokStartLoc = null, this.lastTokStart = this.lastTokEnd = this.pos, this.context = this.initialContext(), this.exprAllowed = !0, this.inModule = "module" === e.sourceType, this.strict = this.inModule || this.strictDirective(this.pos), this.potentialArrowAt = -1, this.inFunction = this.inGenerator = this.inAsync = !1, this.yieldPos = this.awaitPos = 0, this.labels = [], 0 === this.pos && e.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2), this.scopeStack = [], this.enterFunctionScope(), this.regexpState = null;
      };F.prototype.isKeyword = function (e) {
        return this.keywords.test(e);
      }, F.prototype.isReservedWord = function (e) {
        return this.reservedWords.test(e);
      }, F.prototype.extend = function (e, t) {
        this[e] = t(this[e]);
      }, F.prototype.loadPlugins = function (e) {
        for (var t in e) {
          var i = M[t];if (!i) throw new Error("Plugin '" + t + "' not found");i(this, e[t]);
        }
      }, F.prototype.parse = function () {
        var e = this.options.program || this.startNode();return this.nextToken(), this.parseTopLevel(e);
      };var U = F.prototype,
          j = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)"|;)/;function G() {
        this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
      }U.strictDirective = function (e) {
        for (;;) {
          E.lastIndex = e, e += E.exec(this.input)[0].length;var t = j.exec(this.input.slice(e));if (!t) return !1;if ("use strict" == (t[1] || t[2])) return !0;e += t[0].length;
        }
      }, U.eat = function (e) {
        return this.type === e && (this.next(), !0);
      }, U.isContextual = function (e) {
        return this.type === k.name && this.value === e && !this.containsEsc;
      }, U.eatContextual = function (e) {
        return !!this.isContextual(e) && (this.next(), !0);
      }, U.expectContextual = function (e) {
        this.eatContextual(e) || this.unexpected();
      }, U.canInsertSemicolon = function () {
        return this.type === k.eof || this.type === k.braceR || C.test(this.input.slice(this.lastTokEnd, this.start));
      }, U.insertSemicolon = function () {
        if (this.canInsertSemicolon()) return this.options.onInsertedSemicolon && this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc), !0;
      }, U.semicolon = function () {
        this.eat(k.semi) || this.insertSemicolon() || this.unexpected();
      }, U.afterTrailingComma = function (e, t) {
        if (this.type == e) return this.options.onTrailingComma && this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc), t || this.next(), !0;
      }, U.expect = function (e) {
        this.eat(e) || this.unexpected();
      }, U.unexpected = function (e) {
        this.raise(null != e ? e : this.start, "Unexpected token");
      }, U.checkPatternErrors = function (e, t) {
        if (e) {
          e.trailingComma > -1 && this.raiseRecoverable(e.trailingComma, "Comma is not permitted after the rest element");var i = t ? e.parenthesizedAssign : e.parenthesizedBind;i > -1 && this.raiseRecoverable(i, "Parenthesized pattern");
        }
      }, U.checkExpressionErrors = function (e, t) {
        if (!e) return !1;var i = e.shorthandAssign,
            r = e.doubleProto;if (!t) return i >= 0 || r >= 0;i >= 0 && this.raise(i, "Shorthand property assignments are valid only in destructuring patterns"), r >= 0 && this.raiseRecoverable(r, "Redefinition of __proto__ property");
      }, U.checkYieldAwaitInDefaultParams = function () {
        this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos) && this.raise(this.yieldPos, "Yield expression cannot be a default value"), this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
      }, U.isSimpleAssignTarget = function (e) {
        return "ParenthesizedExpression" === e.type ? this.isSimpleAssignTarget(e.expression) : "Identifier" === e.type || "MemberExpression" === e.type;
      };var q = F.prototype;q.parseTopLevel = function (e) {
        var t = {};for (e.body || (e.body = []); this.type !== k.eof;) {
          var i = this.parseStatement(!0, !0, t);e.body.push(i);
        }return this.adaptDirectivePrologue(e.body), this.next(), this.options.ecmaVersion >= 6 && (e.sourceType = this.options.sourceType), this.finishNode(e, "Program");
      };var W = { kind: "loop" },
          H = { kind: "switch" };q.isLet = function () {
        if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;E.lastIndex = this.pos;var e = E.exec(this.input),
            t = this.pos + e[0].length,
            i = this.input.charCodeAt(t);if (91 === i || 123 == i) return !0;if (f(i, !0)) {
          for (var r = t + 1; m(this.input.charCodeAt(r), !0);) ++r;var n = this.input.slice(t, r);if (!a.test(n)) return !0;
        }return !1;
      }, q.isAsyncFunction = function () {
        if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;E.lastIndex = this.pos;var e = E.exec(this.input),
            t = this.pos + e[0].length;return !(C.test(this.input.slice(this.pos, t)) || "function" !== this.input.slice(t, t + 8) || t + 8 != this.input.length && m(this.input.charAt(t + 8)));
      }, q.parseStatement = function (e, t, i) {
        var r,
            n = this.type,
            s = this.startNode();switch (this.isLet() && (n = k._var, r = "let"), n) {case k._break:case k._continue:
            return this.parseBreakContinueStatement(s, n.keyword);case k._debugger:
            return this.parseDebuggerStatement(s);case k._do:
            return this.parseDoStatement(s);case k._for:
            return this.parseForStatement(s);case k._function:
            return !e && this.options.ecmaVersion >= 6 && this.unexpected(), this.parseFunctionStatement(s, !1);case k._class:
            return e || this.unexpected(), this.parseClass(s, !0);case k._if:
            return this.parseIfStatement(s);case k._return:
            return this.parseReturnStatement(s);case k._switch:
            return this.parseSwitchStatement(s);case k._throw:
            return this.parseThrowStatement(s);case k._try:
            return this.parseTryStatement(s);case k._const:case k._var:
            return r = r || this.value, e || "var" == r || this.unexpected(), this.parseVarStatement(s, r);case k._while:
            return this.parseWhileStatement(s);case k._with:
            return this.parseWithStatement(s);case k.braceL:
            return this.parseBlock();case k.semi:
            return this.parseEmptyStatement(s);case k._export:case k._import:
            return this.options.allowImportExportEverywhere || (t || this.raise(this.start, "'import' and 'export' may only appear at the top level"), this.inModule || this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'")), n === k._import ? this.parseImport(s) : this.parseExport(s, i);default:
            if (this.isAsyncFunction()) return e || this.unexpected(), this.next(), this.parseFunctionStatement(s, !0);var a = this.value,
                o = this.parseExpression();return n === k.name && "Identifier" === o.type && this.eat(k.colon) ? this.parseLabeledStatement(s, a, o) : this.parseExpressionStatement(s, o);}
      }, q.parseBreakContinueStatement = function (e, t) {
        var i = "break" == t;this.next(), this.eat(k.semi) || this.insertSemicolon() ? e.label = null : this.type !== k.name ? this.unexpected() : (e.label = this.parseIdent(), this.semicolon());for (var r = 0; r < this.labels.length; ++r) {
          var n = this.labels[r];if (null == e.label || n.name === e.label.name) {
            if (null != n.kind && (i || "loop" === n.kind)) break;if (e.label && i) break;
          }
        }return r === this.labels.length && this.raise(e.start, "Unsyntactic " + t), this.finishNode(e, i ? "BreakStatement" : "ContinueStatement");
      }, q.parseDebuggerStatement = function (e) {
        return this.next(), this.semicolon(), this.finishNode(e, "DebuggerStatement");
      }, q.parseDoStatement = function (e) {
        return this.next(), this.labels.push(W), e.body = this.parseStatement(!1), this.labels.pop(), this.expect(k._while), e.test = this.parseParenExpression(), this.options.ecmaVersion >= 6 ? this.eat(k.semi) : this.semicolon(), this.finishNode(e, "DoWhileStatement");
      }, q.parseForStatement = function (e) {
        this.next();var t = this.options.ecmaVersion >= 9 && this.inAsync && this.eatContextual("await") ? this.lastTokStart : -1;if (this.labels.push(W), this.enterLexicalScope(), this.expect(k.parenL), this.type === k.semi) return t > -1 && this.unexpected(t), this.parseFor(e, null);var i = this.isLet();if (this.type === k._var || this.type === k._const || i) {
          var r = this.startNode(),
              n = i ? "let" : this.value;return this.next(), this.parseVar(r, !0, n), this.finishNode(r, "VariableDeclaration"), !(this.type === k._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) || 1 !== r.declarations.length || "var" !== n && r.declarations[0].init ? (t > -1 && this.unexpected(t), this.parseFor(e, r)) : (this.options.ecmaVersion >= 9 && (this.type === k._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.parseForIn(e, r));
        }var s = new G(),
            a = this.parseExpression(!0, s);return this.type === k._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? (this.options.ecmaVersion >= 9 && (this.type === k._in ? t > -1 && this.unexpected(t) : e.await = t > -1), this.toAssignable(a, !1, s), this.checkLVal(a), this.parseForIn(e, a)) : (this.checkExpressionErrors(s, !0), t > -1 && this.unexpected(t), this.parseFor(e, a));
      }, q.parseFunctionStatement = function (e, t) {
        return this.next(), this.parseFunction(e, !0, !1, t);
      }, q.parseIfStatement = function (e) {
        return this.next(), e.test = this.parseParenExpression(), e.consequent = this.parseStatement(!this.strict && this.type == k._function), e.alternate = this.eat(k._else) ? this.parseStatement(!this.strict && this.type == k._function) : null, this.finishNode(e, "IfStatement");
      }, q.parseReturnStatement = function (e) {
        return this.inFunction || this.options.allowReturnOutsideFunction || this.raise(this.start, "'return' outside of function"), this.next(), this.eat(k.semi) || this.insertSemicolon() ? e.argument = null : (e.argument = this.parseExpression(), this.semicolon()), this.finishNode(e, "ReturnStatement");
      }, q.parseSwitchStatement = function (e) {
        var t;this.next(), e.discriminant = this.parseParenExpression(), e.cases = [], this.expect(k.braceL), this.labels.push(H), this.enterLexicalScope();for (var i = !1; this.type != k.braceR;) if (this.type === k._case || this.type === k._default) {
          var r = this.type === k._case;t && this.finishNode(t, "SwitchCase"), e.cases.push(t = this.startNode()), t.consequent = [], this.next(), r ? t.test = this.parseExpression() : (i && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"), i = !0, t.test = null), this.expect(k.colon);
        } else t || this.unexpected(), t.consequent.push(this.parseStatement(!0));return this.exitLexicalScope(), t && this.finishNode(t, "SwitchCase"), this.next(), this.labels.pop(), this.finishNode(e, "SwitchStatement");
      }, q.parseThrowStatement = function (e) {
        return this.next(), C.test(this.input.slice(this.lastTokEnd, this.start)) && this.raise(this.lastTokEnd, "Illegal newline after throw"), e.argument = this.parseExpression(), this.semicolon(), this.finishNode(e, "ThrowStatement");
      };var z = [];q.parseTryStatement = function (e) {
        if (this.next(), e.block = this.parseBlock(), e.handler = null, this.type === k._catch) {
          var t = this.startNode();this.next(), this.expect(k.parenL), t.param = this.parseBindingAtom(), this.enterLexicalScope(), this.checkLVal(t.param, "let"), this.expect(k.parenR), t.body = this.parseBlock(!1), this.exitLexicalScope(), e.handler = this.finishNode(t, "CatchClause");
        }return e.finalizer = this.eat(k._finally) ? this.parseBlock() : null, e.handler || e.finalizer || this.raise(e.start, "Missing catch or finally clause"), this.finishNode(e, "TryStatement");
      }, q.parseVarStatement = function (e, t) {
        return this.next(), this.parseVar(e, !1, t), this.semicolon(), this.finishNode(e, "VariableDeclaration");
      }, q.parseWhileStatement = function (e) {
        return this.next(), e.test = this.parseParenExpression(), this.labels.push(W), e.body = this.parseStatement(!1), this.labels.pop(), this.finishNode(e, "WhileStatement");
      }, q.parseWithStatement = function (e) {
        return this.strict && this.raise(this.start, "'with' in strict mode"), this.next(), e.object = this.parseParenExpression(), e.body = this.parseStatement(!1), this.finishNode(e, "WithStatement");
      }, q.parseEmptyStatement = function (e) {
        return this.next(), this.finishNode(e, "EmptyStatement");
      }, q.parseLabeledStatement = function (e, t, i) {
        for (var r = 0, n = this.labels; r < n.length; r += 1) n[r].name === t && this.raise(i.start, "Label '" + t + "' is already declared");for (var s = this.type.isLoop ? "loop" : this.type === k._switch ? "switch" : null, a = this.labels.length - 1; a >= 0; a--) {
          var o = this.labels[a];if (o.statementStart != e.start) break;o.statementStart = this.start, o.kind = s;
        }return this.labels.push({ name: t, kind: s, statementStart: this.start }), e.body = this.parseStatement(!0), ("ClassDeclaration" == e.body.type || "VariableDeclaration" == e.body.type && "var" != e.body.kind || "FunctionDeclaration" == e.body.type && (this.strict || e.body.generator)) && this.raiseRecoverable(e.body.start, "Invalid labeled declaration"), this.labels.pop(), e.label = i, this.finishNode(e, "LabeledStatement");
      }, q.parseExpressionStatement = function (e, t) {
        return e.expression = t, this.semicolon(), this.finishNode(e, "ExpressionStatement");
      }, q.parseBlock = function (e) {
        void 0 === e && (e = !0);var t = this.startNode();for (t.body = [], this.expect(k.braceL), e && this.enterLexicalScope(); !this.eat(k.braceR);) {
          var i = this.parseStatement(!0);t.body.push(i);
        }return e && this.exitLexicalScope(), this.finishNode(t, "BlockStatement");
      }, q.parseFor = function (e, t) {
        return e.init = t, this.expect(k.semi), e.test = this.type === k.semi ? null : this.parseExpression(), this.expect(k.semi), e.update = this.type === k.parenR ? null : this.parseExpression(), this.expect(k.parenR), this.exitLexicalScope(), e.body = this.parseStatement(!1), this.labels.pop(), this.finishNode(e, "ForStatement");
      }, q.parseForIn = function (e, t) {
        var i = this.type === k._in ? "ForInStatement" : "ForOfStatement";return this.next(), "ForInStatement" == i && ("AssignmentPattern" === t.type || "VariableDeclaration" === t.type && null != t.declarations[0].init && (this.strict || "Identifier" !== t.declarations[0].id.type)) && this.raise(t.start, "Invalid assignment in for-in loop head"), e.left = t, e.right = "ForInStatement" == i ? this.parseExpression() : this.parseMaybeAssign(), this.expect(k.parenR), this.exitLexicalScope(), e.body = this.parseStatement(!1), this.labels.pop(), this.finishNode(e, i);
      }, q.parseVar = function (e, t, i) {
        for (e.declarations = [], e.kind = i;;) {
          var r = this.startNode();if (this.parseVarId(r, i), this.eat(k.eq) ? r.init = this.parseMaybeAssign(t) : "const" !== i || this.type === k._in || this.options.ecmaVersion >= 6 && this.isContextual("of") ? "Identifier" == r.id.type || t && (this.type === k._in || this.isContextual("of")) ? r.init = null : this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value") : this.unexpected(), e.declarations.push(this.finishNode(r, "VariableDeclarator")), !this.eat(k.comma)) break;
        }return e;
      }, q.parseVarId = function (e, t) {
        e.id = this.parseBindingAtom(t), this.checkLVal(e.id, t, !1);
      }, q.parseFunction = function (e, t, i, r) {
        this.initFunction(e), (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !r) && (e.generator = this.eat(k.star)), this.options.ecmaVersion >= 8 && (e.async = !!r), t && (e.id = "nullableID" === t && this.type != k.name ? null : this.parseIdent(), e.id && this.checkLVal(e.id, "var"));var n = this.inGenerator,
            s = this.inAsync,
            a = this.yieldPos,
            o = this.awaitPos,
            h = this.inFunction;return this.inGenerator = e.generator, this.inAsync = e.async, this.yieldPos = 0, this.awaitPos = 0, this.inFunction = !0, this.enterFunctionScope(), t || (e.id = this.type == k.name ? this.parseIdent() : null), this.parseFunctionParams(e), this.parseFunctionBody(e, i), this.inGenerator = n, this.inAsync = s, this.yieldPos = a, this.awaitPos = o, this.inFunction = h, this.finishNode(e, t ? "FunctionDeclaration" : "FunctionExpression");
      }, q.parseFunctionParams = function (e) {
        this.expect(k.parenL), e.params = this.parseBindingList(k.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams();
      }, q.parseClass = function (e, t) {
        this.next(), this.parseClassId(e, t), this.parseClassSuper(e);var i = this.startNode(),
            r = !1;for (i.body = [], this.expect(k.braceL); !this.eat(k.braceR);) {
          var n = this.parseClassMember(i);n && "MethodDefinition" === n.type && "constructor" === n.kind && (r && this.raise(n.start, "Duplicate constructor in the same class"), r = !0);
        }return e.body = this.finishNode(i, "ClassBody"), this.finishNode(e, t ? "ClassDeclaration" : "ClassExpression");
      }, q.parseClassMember = function (e) {
        var t = this;if (this.eat(k.semi)) return null;var i = this.startNode(),
            r = function (e, r) {
          void 0 === r && (r = !1);var n = t.start,
              s = t.startLoc;return !(!t.eatContextual(e) || (t.type === k.parenL || r && t.canInsertSemicolon()) && (i.key && t.unexpected(), i.computed = !1, i.key = t.startNodeAt(n, s), i.key.name = e, t.finishNode(i.key, "Identifier"), 1));
        };i.kind = "method", i.static = r("static");var n = this.eat(k.star),
            s = !1;n || (this.options.ecmaVersion >= 8 && r("async", !0) ? (s = !0, n = this.options.ecmaVersion >= 9 && this.eat(k.star)) : r("get") ? i.kind = "get" : r("set") && (i.kind = "set")), i.key || this.parsePropertyName(i);var a = i.key;return i.computed || i.static || !("Identifier" === a.type && "constructor" === a.name || "Literal" === a.type && "constructor" === a.value) ? i.static && "Identifier" === a.type && "prototype" === a.name && this.raise(a.start, "Classes may not have a static property named prototype") : ("method" !== i.kind && this.raise(a.start, "Constructor can't have get/set modifier"), n && this.raise(a.start, "Constructor can't be a generator"), s && this.raise(a.start, "Constructor can't be an async method"), i.kind = "constructor"), this.parseClassMethod(e, i, n, s), "get" === i.kind && 0 !== i.value.params.length && this.raiseRecoverable(i.value.start, "getter should have no params"), "set" === i.kind && 1 !== i.value.params.length && this.raiseRecoverable(i.value.start, "setter should have exactly one param"), "set" === i.kind && "RestElement" === i.value.params[0].type && this.raiseRecoverable(i.value.params[0].start, "Setter cannot use rest params"), i;
      }, q.parseClassMethod = function (e, t, i, r) {
        t.value = this.parseMethod(i, r), e.body.push(this.finishNode(t, "MethodDefinition"));
      }, q.parseClassId = function (e, t) {
        e.id = this.type === k.name ? this.parseIdent() : !0 === t ? this.unexpected() : null;
      }, q.parseClassSuper = function (e) {
        e.superClass = this.eat(k._extends) ? this.parseExprSubscripts() : null;
      }, q.parseExport = function (e, t) {
        if (this.next(), this.eat(k.star)) return this.expectContextual("from"), this.type !== k.string && this.unexpected(), e.source = this.parseExprAtom(), this.semicolon(), this.finishNode(e, "ExportAllDeclaration");if (this.eat(k._default)) {
          var i;if (this.checkExport(t, "default", this.lastTokStart), this.type === k._function || (i = this.isAsyncFunction())) {
            var r = this.startNode();this.next(), i && this.next(), e.declaration = this.parseFunction(r, "nullableID", !1, i);
          } else if (this.type === k._class) {
            var n = this.startNode();e.declaration = this.parseClass(n, "nullableID");
          } else e.declaration = this.parseMaybeAssign(), this.semicolon();return this.finishNode(e, "ExportDefaultDeclaration");
        }if (this.shouldParseExportStatement()) e.declaration = this.parseStatement(!0), "VariableDeclaration" === e.declaration.type ? this.checkVariableExport(t, e.declaration.declarations) : this.checkExport(t, e.declaration.id.name, e.declaration.id.start), e.specifiers = [], e.source = null;else {
          if (e.declaration = null, e.specifiers = this.parseExportSpecifiers(t), this.eatContextual("from")) this.type !== k.string && this.unexpected(), e.source = this.parseExprAtom();else {
            for (var s = 0, a = e.specifiers; s < a.length; s += 1) {
              var o = a[s];this.checkUnreserved(o.local);
            }e.source = null;
          }this.semicolon();
        }return this.finishNode(e, "ExportNamedDeclaration");
      }, q.checkExport = function (e, t, i) {
        e && (N(e, t) && this.raiseRecoverable(i, "Duplicate export '" + t + "'"), e[t] = !0);
      }, q.checkPatternExport = function (e, t) {
        var i = t.type;if ("Identifier" == i) this.checkExport(e, t.name, t.start);else if ("ObjectPattern" == i) for (var r = 0, n = t.properties; r < n.length; r += 1) {
          var s = n[r];this.checkPatternExport(e, s);
        } else if ("ArrayPattern" == i) for (var a = 0, o = t.elements; a < o.length; a += 1) {
          var h = o[a];h && this.checkPatternExport(e, h);
        } else "Property" == i ? this.checkPatternExport(e, t.value) : "AssignmentPattern" == i ? this.checkPatternExport(e, t.left) : "RestElement" == i ? this.checkPatternExport(e, t.argument) : "ParenthesizedExpression" == i && this.checkPatternExport(e, t.expression);
      }, q.checkVariableExport = function (e, t) {
        if (e) for (var i = 0, r = t; i < r.length; i += 1) {
          var n = r[i];this.checkPatternExport(e, n.id);
        }
      }, q.shouldParseExportStatement = function () {
        return "var" === this.type.keyword || "const" === this.type.keyword || "class" === this.type.keyword || "function" === this.type.keyword || this.isLet() || this.isAsyncFunction();
      }, q.parseExportSpecifiers = function (e) {
        var t = [],
            i = !0;for (this.expect(k.braceL); !this.eat(k.braceR);) {
          if (i) i = !1;else if (this.expect(k.comma), this.afterTrailingComma(k.braceR)) break;var r = this.startNode();r.local = this.parseIdent(!0), r.exported = this.eatContextual("as") ? this.parseIdent(!0) : r.local, this.checkExport(e, r.exported.name, r.exported.start), t.push(this.finishNode(r, "ExportSpecifier"));
        }return t;
      }, q.parseImport = function (e) {
        return this.next(), this.type === k.string ? (e.specifiers = z, e.source = this.parseExprAtom()) : (e.specifiers = this.parseImportSpecifiers(), this.expectContextual("from"), e.source = this.type === k.string ? this.parseExprAtom() : this.unexpected()), this.semicolon(), this.finishNode(e, "ImportDeclaration");
      }, q.parseImportSpecifiers = function () {
        var e = [],
            t = !0;if (this.type === k.name) {
          var i = this.startNode();if (i.local = this.parseIdent(), this.checkLVal(i.local, "let"), e.push(this.finishNode(i, "ImportDefaultSpecifier")), !this.eat(k.comma)) return e;
        }if (this.type === k.star) {
          var r = this.startNode();return this.next(), this.expectContextual("as"), r.local = this.parseIdent(), this.checkLVal(r.local, "let"), e.push(this.finishNode(r, "ImportNamespaceSpecifier")), e;
        }for (this.expect(k.braceL); !this.eat(k.braceR);) {
          if (t) t = !1;else if (this.expect(k.comma), this.afterTrailingComma(k.braceR)) break;var n = this.startNode();n.imported = this.parseIdent(!0), this.eatContextual("as") ? n.local = this.parseIdent() : (this.checkUnreserved(n.imported), n.local = n.imported), this.checkLVal(n.local, "let"), e.push(this.finishNode(n, "ImportSpecifier"));
        }return e;
      }, q.adaptDirectivePrologue = function (e) {
        for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t) e[t].directive = e[t].expression.raw.slice(1, -1);
      }, q.isDirectiveCandidate = function (e) {
        return "ExpressionStatement" === e.type && "Literal" === e.expression.type && "string" == typeof e.expression.value && ('"' === this.input[e.start] || "'" === this.input[e.start]);
      };var K = F.prototype;K.toAssignable = function (e, t, i) {
        if (this.options.ecmaVersion >= 6 && e) switch (e.type) {case "Identifier":
            this.inAsync && "await" === e.name && this.raise(e.start, "Can not use 'await' as identifier inside an async function");break;case "ObjectPattern":case "ArrayPattern":case "RestElement":
            break;case "ObjectExpression":
            e.type = "ObjectPattern", i && this.checkPatternErrors(i, !0);for (var r = 0, n = e.properties; r < n.length; r += 1) {
              var s = n[r];this.toAssignable(s, t), "RestElement" !== s.type || "ArrayPattern" !== s.argument.type && "ObjectPattern" !== s.argument.type || this.raise(s.argument.start, "Unexpected token");
            }break;case "Property":
            "init" !== e.kind && this.raise(e.key.start, "Object pattern can't contain getter or setter"), this.toAssignable(e.value, t);break;case "ArrayExpression":
            e.type = "ArrayPattern", i && this.checkPatternErrors(i, !0), this.toAssignableList(e.elements, t);break;case "SpreadElement":
            e.type = "RestElement", this.toAssignable(e.argument, t), "AssignmentPattern" === e.argument.type && this.raise(e.argument.start, "Rest elements cannot have a default value");break;case "AssignmentExpression":
            "=" !== e.operator && this.raise(e.left.end, "Only '=' operator can be used for specifying default value."), e.type = "AssignmentPattern", delete e.operator, this.toAssignable(e.left, t);case "AssignmentPattern":
            break;case "ParenthesizedExpression":
            this.toAssignable(e.expression, t);break;case "MemberExpression":
            if (!t) break;default:
            this.raise(e.start, "Assigning to rvalue");} else i && this.checkPatternErrors(i, !0);return e;
      }, K.toAssignableList = function (e, t) {
        for (var i = e.length, r = 0; r < i; r++) {
          var n = e[r];n && this.toAssignable(n, t);
        }if (i) {
          var s = e[i - 1];6 === this.options.ecmaVersion && t && s && "RestElement" === s.type && "Identifier" !== s.argument.type && this.unexpected(s.argument.start);
        }return e;
      }, K.parseSpread = function (e) {
        var t = this.startNode();return this.next(), t.argument = this.parseMaybeAssign(!1, e), this.finishNode(t, "SpreadElement");
      }, K.parseRestBinding = function () {
        var e = this.startNode();return this.next(), 6 === this.options.ecmaVersion && this.type !== k.name && this.unexpected(), e.argument = this.parseBindingAtom(), this.finishNode(e, "RestElement");
      }, K.parseBindingAtom = function () {
        if (this.options.ecmaVersion >= 6) switch (this.type) {case k.bracketL:
            var e = this.startNode();return this.next(), e.elements = this.parseBindingList(k.bracketR, !0, !0), this.finishNode(e, "ArrayPattern");case k.braceL:
            return this.parseObj(!0);}return this.parseIdent();
      }, K.parseBindingList = function (e, t, i) {
        for (var r = [], n = !0; !this.eat(e);) if (n ? n = !1 : this.expect(k.comma), t && this.type === k.comma) r.push(null);else {
          if (i && this.afterTrailingComma(e)) break;if (this.type === k.ellipsis) {
            var s = this.parseRestBinding();this.parseBindingListItem(s), r.push(s), this.type === k.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.expect(e);break;
          }var a = this.parseMaybeDefault(this.start, this.startLoc);this.parseBindingListItem(a), r.push(a);
        }return r;
      }, K.parseBindingListItem = function (e) {
        return e;
      }, K.parseMaybeDefault = function (e, t, i) {
        if (i = i || this.parseBindingAtom(), this.options.ecmaVersion < 6 || !this.eat(k.eq)) return i;var r = this.startNodeAt(e, t);return r.left = i, r.right = this.parseMaybeAssign(), this.finishNode(r, "AssignmentPattern");
      }, K.checkLVal = function (e, t, i) {
        switch (e.type) {case "Identifier":
            this.strict && this.reservedWordsStrictBind.test(e.name) && this.raiseRecoverable(e.start, (t ? "Binding " : "Assigning to ") + e.name + " in strict mode"), i && (N(i, e.name) && this.raiseRecoverable(e.start, "Argument name clash"), i[e.name] = !0), t && "none" !== t && (("var" === t && !this.canDeclareVarName(e.name) || "var" !== t && !this.canDeclareLexicalName(e.name)) && this.raiseRecoverable(e.start, "Identifier '" + e.name + "' has already been declared"), "var" === t ? this.declareVarName(e.name) : this.declareLexicalName(e.name));break;case "MemberExpression":
            t && this.raiseRecoverable(e.start, "Binding member expression");break;case "ObjectPattern":
            for (var r = 0, n = e.properties; r < n.length; r += 1) {
              var s = n[r];this.checkLVal(s, t, i);
            }break;case "Property":
            this.checkLVal(e.value, t, i);break;case "ArrayPattern":
            for (var a = 0, o = e.elements; a < o.length; a += 1) {
              var h = o[a];h && this.checkLVal(h, t, i);
            }break;case "AssignmentPattern":
            this.checkLVal(e.left, t, i);break;case "RestElement":
            this.checkLVal(e.argument, t, i);break;case "ParenthesizedExpression":
            this.checkLVal(e.expression, t, i);break;default:
            this.raise(e.start, (t ? "Binding" : "Assigning to") + " rvalue");}
      };var Q = F.prototype;Q.checkPropClash = function (e, t, i) {
        if (!(this.options.ecmaVersion >= 9 && "SpreadElement" === e.type || this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))) {
          var r,
              n = e.key;switch (n.type) {case "Identifier":
              r = n.name;break;case "Literal":
              r = String(n.value);break;default:
              return;}var s = e.kind;if (this.options.ecmaVersion >= 6) "__proto__" === r && "init" === s && (t.proto && (i && i.doubleProto < 0 ? i.doubleProto = n.start : this.raiseRecoverable(n.start, "Redefinition of __proto__ property")), t.proto = !0);else {
            var a = t[r = "$" + r];a ? ("init" === s ? this.strict && a.init || a.get || a.set : a.init || a[s]) && this.raiseRecoverable(n.start, "Redefinition of property") : a = t[r] = { init: !1, get: !1, set: !1 }, a[s] = !0;
          }
        }
      }, Q.parseExpression = function (e, t) {
        var i = this.start,
            r = this.startLoc,
            n = this.parseMaybeAssign(e, t);if (this.type === k.comma) {
          var s = this.startNodeAt(i, r);for (s.expressions = [n]; this.eat(k.comma);) s.expressions.push(this.parseMaybeAssign(e, t));return this.finishNode(s, "SequenceExpression");
        }return n;
      }, Q.parseMaybeAssign = function (e, t, i) {
        if (this.inGenerator && this.isContextual("yield")) return this.parseYield();var r = !1,
            n = -1,
            s = -1;t ? (n = t.parenthesizedAssign, s = t.trailingComma, t.parenthesizedAssign = t.trailingComma = -1) : (t = new G(), r = !0);var a = this.start,
            o = this.startLoc;this.type != k.parenL && this.type != k.name || (this.potentialArrowAt = this.start);var h = this.parseMaybeConditional(e, t);if (i && (h = i.call(this, h, a, o)), this.type.isAssign) {
          var c = this.startNodeAt(a, o);return c.operator = this.value, c.left = this.type === k.eq ? this.toAssignable(h, !1, t) : h, r || G.call(t), t.shorthandAssign = -1, this.checkLVal(h), this.next(), c.right = this.parseMaybeAssign(e), this.finishNode(c, "AssignmentExpression");
        }return r && this.checkExpressionErrors(t, !0), n > -1 && (t.parenthesizedAssign = n), s > -1 && (t.trailingComma = s), h;
      }, Q.parseMaybeConditional = function (e, t) {
        var i = this.start,
            r = this.startLoc,
            n = this.parseExprOps(e, t);if (this.checkExpressionErrors(t)) return n;if (this.eat(k.question)) {
          var s = this.startNodeAt(i, r);return s.test = n, s.consequent = this.parseMaybeAssign(), this.expect(k.colon), s.alternate = this.parseMaybeAssign(e), this.finishNode(s, "ConditionalExpression");
        }return n;
      }, Q.parseExprOps = function (e, t) {
        var i = this.start,
            r = this.startLoc,
            n = this.parseMaybeUnary(t, !1);return this.checkExpressionErrors(t) ? n : n.start == i && "ArrowFunctionExpression" === n.type ? n : this.parseExprOp(n, i, r, -1, e);
      }, Q.parseExprOp = function (e, t, i, r, n) {
        var s = this.type.binop;if (null != s && (!n || this.type !== k._in) && s > r) {
          var a = this.type === k.logicalOR || this.type === k.logicalAND,
              o = this.value;this.next();var h = this.start,
              c = this.startLoc,
              u = this.parseExprOp(this.parseMaybeUnary(null, !1), h, c, s, n),
              p = this.buildBinary(t, i, e, u, o, a);return this.parseExprOp(p, t, i, r, n);
        }return e;
      }, Q.buildBinary = function (e, t, i, r, n, s) {
        var a = this.startNodeAt(e, t);return a.left = i, a.operator = n, a.right = r, this.finishNode(a, s ? "LogicalExpression" : "BinaryExpression");
      }, Q.parseMaybeUnary = function (e, t) {
        var i,
            r = this.start,
            n = this.startLoc;if (this.inAsync && this.isContextual("await")) i = this.parseAwait(), t = !0;else if (this.type.prefix) {
          var s = this.startNode(),
              a = this.type === k.incDec;s.operator = this.value, s.prefix = !0, this.next(), s.argument = this.parseMaybeUnary(null, !0), this.checkExpressionErrors(e, !0), a ? this.checkLVal(s.argument) : this.strict && "delete" === s.operator && "Identifier" === s.argument.type ? this.raiseRecoverable(s.start, "Deleting local variable in strict mode") : t = !0, i = this.finishNode(s, a ? "UpdateExpression" : "UnaryExpression");
        } else {
          if (i = this.parseExprSubscripts(e), this.checkExpressionErrors(e)) return i;for (; this.type.postfix && !this.canInsertSemicolon();) {
            var o = this.startNodeAt(r, n);o.operator = this.value, o.prefix = !1, o.argument = i, this.checkLVal(i), this.next(), i = this.finishNode(o, "UpdateExpression");
          }
        }return !t && this.eat(k.starstar) ? this.buildBinary(r, n, i, this.parseMaybeUnary(null, !1), "**", !1) : i;
      }, Q.parseExprSubscripts = function (e) {
        var t = this.start,
            i = this.startLoc,
            r = this.parseExprAtom(e),
            n = "ArrowFunctionExpression" === r.type && ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd);if (this.checkExpressionErrors(e) || n) return r;var s = this.parseSubscripts(r, t, i);return e && "MemberExpression" === s.type && (e.parenthesizedAssign >= s.start && (e.parenthesizedAssign = -1), e.parenthesizedBind >= s.start && (e.parenthesizedBind = -1)), s;
      }, Q.parseSubscripts = function (e, t, i, r) {
        for (var n = this.options.ecmaVersion >= 8 && "Identifier" === e.type && "async" === e.name && this.lastTokEnd == e.end && !this.canInsertSemicolon() && "async" === this.input.slice(e.start, e.end), s = void 0;;) if ((s = this.eat(k.bracketL)) || this.eat(k.dot)) {
          var a = this.startNodeAt(t, i);a.object = e, a.property = s ? this.parseExpression() : this.parseIdent(!0), a.computed = !!s, s && this.expect(k.bracketR), e = this.finishNode(a, "MemberExpression");
        } else if (!r && this.eat(k.parenL)) {
          var o = new G(),
              h = this.yieldPos,
              c = this.awaitPos;this.yieldPos = 0, this.awaitPos = 0;var u = this.parseExprList(k.parenR, this.options.ecmaVersion >= 8, !1, o);if (n && !this.canInsertSemicolon() && this.eat(k.arrow)) return this.checkPatternErrors(o, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = h, this.awaitPos = c, this.parseArrowExpression(this.startNodeAt(t, i), u, !0);this.checkExpressionErrors(o, !0), this.yieldPos = h || this.yieldPos, this.awaitPos = c || this.awaitPos;var p = this.startNodeAt(t, i);p.callee = e, p.arguments = u, e = this.finishNode(p, "CallExpression");
        } else {
          if (this.type !== k.backQuote) return e;var l = this.startNodeAt(t, i);l.tag = e, l.quasi = this.parseTemplate({ isTagged: !0 }), e = this.finishNode(l, "TaggedTemplateExpression");
        }
      }, Q.parseExprAtom = function (e) {
        var t,
            i = this.potentialArrowAt == this.start;switch (this.type) {case k._super:
            return this.inFunction || this.raise(this.start, "'super' outside of function or class"), t = this.startNode(), this.next(), this.type !== k.dot && this.type !== k.bracketL && this.type !== k.parenL && this.unexpected(), this.finishNode(t, "Super");case k._this:
            return t = this.startNode(), this.next(), this.finishNode(t, "ThisExpression");case k.name:
            var r = this.start,
                n = this.startLoc,
                s = this.containsEsc,
                a = this.parseIdent(this.type !== k.name);if (this.options.ecmaVersion >= 8 && !s && "async" === a.name && !this.canInsertSemicolon() && this.eat(k._function)) return this.parseFunction(this.startNodeAt(r, n), !1, !1, !0);if (i && !this.canInsertSemicolon()) {
              if (this.eat(k.arrow)) return this.parseArrowExpression(this.startNodeAt(r, n), [a], !1);if (this.options.ecmaVersion >= 8 && "async" === a.name && this.type === k.name && !s) return a = this.parseIdent(), !this.canInsertSemicolon() && this.eat(k.arrow) || this.unexpected(), this.parseArrowExpression(this.startNodeAt(r, n), [a], !0);
            }return a;case k.regexp:
            var o = this.value;return (t = this.parseLiteral(o.value)).regex = { pattern: o.pattern, flags: o.flags }, t;case k.num:case k.string:
            return this.parseLiteral(this.value);case k._null:case k._true:case k._false:
            return (t = this.startNode()).value = this.type === k._null ? null : this.type === k._true, t.raw = this.type.keyword, this.next(), this.finishNode(t, "Literal");case k.parenL:
            var h = this.start,
                c = this.parseParenAndDistinguishExpression(i);return e && (e.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(c) && (e.parenthesizedAssign = h), e.parenthesizedBind < 0 && (e.parenthesizedBind = h)), c;case k.bracketL:
            return t = this.startNode(), this.next(), t.elements = this.parseExprList(k.bracketR, !0, !0, e), this.finishNode(t, "ArrayExpression");case k.braceL:
            return this.parseObj(!1, e);case k._function:
            return t = this.startNode(), this.next(), this.parseFunction(t, !1);case k._class:
            return this.parseClass(this.startNode(), !1);case k._new:
            return this.parseNew();case k.backQuote:
            return this.parseTemplate();default:
            this.unexpected();}
      }, Q.parseLiteral = function (e) {
        var t = this.startNode();return t.value = e, t.raw = this.input.slice(this.start, this.end), this.next(), this.finishNode(t, "Literal");
      }, Q.parseParenExpression = function () {
        this.expect(k.parenL);var e = this.parseExpression();return this.expect(k.parenR), e;
      }, Q.parseParenAndDistinguishExpression = function (e) {
        var t,
            i = this.start,
            r = this.startLoc,
            n = this.options.ecmaVersion >= 8;if (this.options.ecmaVersion >= 6) {
          this.next();var s,
              a = this.start,
              o = this.startLoc,
              h = [],
              c = !0,
              u = !1,
              p = new G(),
              l = this.yieldPos,
              d = this.awaitPos;for (this.yieldPos = 0, this.awaitPos = 0; this.type !== k.parenR;) {
            if (c ? c = !1 : this.expect(k.comma), n && this.afterTrailingComma(k.parenR, !0)) {
              u = !0;break;
            }if (this.type === k.ellipsis) {
              s = this.start, h.push(this.parseParenItem(this.parseRestBinding())), this.type === k.comma && this.raise(this.start, "Comma is not permitted after the rest element");break;
            }h.push(this.parseMaybeAssign(!1, p, this.parseParenItem));
          }var f = this.start,
              m = this.startLoc;if (this.expect(k.parenR), e && !this.canInsertSemicolon() && this.eat(k.arrow)) return this.checkPatternErrors(p, !1), this.checkYieldAwaitInDefaultParams(), this.yieldPos = l, this.awaitPos = d, this.parseParenArrowList(i, r, h);h.length && !u || this.unexpected(this.lastTokStart), s && this.unexpected(s), this.checkExpressionErrors(p, !0), this.yieldPos = l || this.yieldPos, this.awaitPos = d || this.awaitPos, h.length > 1 ? ((t = this.startNodeAt(a, o)).expressions = h, this.finishNodeAt(t, "SequenceExpression", f, m)) : t = h[0];
        } else t = this.parseParenExpression();if (this.options.preserveParens) {
          var v = this.startNodeAt(i, r);return v.expression = t, this.finishNode(v, "ParenthesizedExpression");
        }return t;
      }, Q.parseParenItem = function (e) {
        return e;
      }, Q.parseParenArrowList = function (e, t, i) {
        return this.parseArrowExpression(this.startNodeAt(e, t), i);
      };var X = [];Q.parseNew = function () {
        var e = this.startNode(),
            t = this.parseIdent(!0);if (this.options.ecmaVersion >= 6 && this.eat(k.dot)) {
          e.meta = t;var i = this.containsEsc;return e.property = this.parseIdent(!0), ("target" !== e.property.name || i) && this.raiseRecoverable(e.property.start, "The only valid meta property for new is new.target"), this.inFunction || this.raiseRecoverable(e.start, "new.target can only be used in functions"), this.finishNode(e, "MetaProperty");
        }var r = this.start,
            n = this.startLoc;return e.callee = this.parseSubscripts(this.parseExprAtom(), r, n, !0), this.eat(k.parenL) ? e.arguments = this.parseExprList(k.parenR, this.options.ecmaVersion >= 8, !1) : e.arguments = X, this.finishNode(e, "NewExpression");
      }, Q.parseTemplateElement = function (e) {
        var t = e.isTagged,
            i = this.startNode();return this.type === k.invalidTemplate ? (t || this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"), i.value = { raw: this.value, cooked: null }) : i.value = { raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"), cooked: this.value }, this.next(), i.tail = this.type === k.backQuote, this.finishNode(i, "TemplateElement");
      }, Q.parseTemplate = function (e) {
        void 0 === e && (e = {});var t = e.isTagged;void 0 === t && (t = !1);var i = this.startNode();this.next(), i.expressions = [];var r = this.parseTemplateElement({ isTagged: t });for (i.quasis = [r]; !r.tail;) this.expect(k.dollarBraceL), i.expressions.push(this.parseExpression()), this.expect(k.braceR), i.quasis.push(r = this.parseTemplateElement({ isTagged: t }));return this.next(), this.finishNode(i, "TemplateLiteral");
      }, Q.isAsyncProp = function (e) {
        return !e.computed && "Identifier" === e.key.type && "async" === e.key.name && (this.type === k.name || this.type === k.num || this.type === k.string || this.type === k.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === k.star) && !C.test(this.input.slice(this.lastTokEnd, this.start));
      }, Q.parseObj = function (e, t) {
        var i = this.startNode(),
            r = !0,
            n = {};for (i.properties = [], this.next(); !this.eat(k.braceR);) {
          if (r) r = !1;else if (this.expect(k.comma), this.afterTrailingComma(k.braceR)) break;var s = this.parseProperty(e, t);e || this.checkPropClash(s, n, t), i.properties.push(s);
        }return this.finishNode(i, e ? "ObjectPattern" : "ObjectExpression");
      }, Q.parseProperty = function (e, t) {
        var i,
            r,
            n,
            s,
            a = this.startNode();if (this.options.ecmaVersion >= 9 && this.eat(k.ellipsis)) return e ? (a.argument = this.parseIdent(!1), this.type === k.comma && this.raise(this.start, "Comma is not permitted after the rest element"), this.finishNode(a, "RestElement")) : (this.type === k.parenL && t && (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start), t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)), a.argument = this.parseMaybeAssign(!1, t), this.type === k.comma && t && t.trailingComma < 0 && (t.trailingComma = this.start), this.finishNode(a, "SpreadElement"));this.options.ecmaVersion >= 6 && (a.method = !1, a.shorthand = !1, (e || t) && (n = this.start, s = this.startLoc), e || (i = this.eat(k.star)));var o = this.containsEsc;return this.parsePropertyName(a), !e && !o && this.options.ecmaVersion >= 8 && !i && this.isAsyncProp(a) ? (r = !0, i = this.options.ecmaVersion >= 9 && this.eat(k.star), this.parsePropertyName(a, t)) : r = !1, this.parsePropertyValue(a, e, i, r, n, s, t, o), this.finishNode(a, "Property");
      }, Q.parsePropertyValue = function (e, t, i, r, n, s, a, o) {
        if ((i || r) && this.type === k.colon && this.unexpected(), this.eat(k.colon)) e.value = t ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(!1, a), e.kind = "init";else if (this.options.ecmaVersion >= 6 && this.type === k.parenL) t && this.unexpected(), e.kind = "init", e.method = !0, e.value = this.parseMethod(i, r);else if (t || o || !(this.options.ecmaVersion >= 5) || e.computed || "Identifier" !== e.key.type || "get" !== e.key.name && "set" !== e.key.name || this.type == k.comma || this.type == k.braceR) this.options.ecmaVersion >= 6 && !e.computed && "Identifier" === e.key.type ? (this.checkUnreserved(e.key), e.kind = "init", t ? e.value = this.parseMaybeDefault(n, s, e.key) : this.type === k.eq && a ? (a.shorthandAssign < 0 && (a.shorthandAssign = this.start), e.value = this.parseMaybeDefault(n, s, e.key)) : e.value = e.key, e.shorthand = !0) : this.unexpected();else {
          (i || r) && this.unexpected(), e.kind = e.key.name, this.parsePropertyName(e), e.value = this.parseMethod(!1);var h = "get" === e.kind ? 0 : 1;if (e.value.params.length !== h) {
            var c = e.value.start;"get" === e.kind ? this.raiseRecoverable(c, "getter should have no params") : this.raiseRecoverable(c, "setter should have exactly one param");
          } else "set" === e.kind && "RestElement" === e.value.params[0].type && this.raiseRecoverable(e.value.params[0].start, "Setter cannot use rest params");
        }
      }, Q.parsePropertyName = function (e) {
        if (this.options.ecmaVersion >= 6) {
          if (this.eat(k.bracketL)) return e.computed = !0, e.key = this.parseMaybeAssign(), this.expect(k.bracketR), e.key;e.computed = !1;
        }return e.key = this.type === k.num || this.type === k.string ? this.parseExprAtom() : this.parseIdent(!0);
      }, Q.initFunction = function (e) {
        e.id = null, this.options.ecmaVersion >= 6 && (e.generator = !1, e.expression = !1), this.options.ecmaVersion >= 8 && (e.async = !1);
      }, Q.parseMethod = function (e, t) {
        var i = this.startNode(),
            r = this.inGenerator,
            n = this.inAsync,
            s = this.yieldPos,
            a = this.awaitPos,
            o = this.inFunction;return this.initFunction(i), this.options.ecmaVersion >= 6 && (i.generator = e), this.options.ecmaVersion >= 8 && (i.async = !!t), this.inGenerator = i.generator, this.inAsync = i.async, this.yieldPos = 0, this.awaitPos = 0, this.inFunction = !0, this.enterFunctionScope(), this.expect(k.parenL), i.params = this.parseBindingList(k.parenR, !1, this.options.ecmaVersion >= 8), this.checkYieldAwaitInDefaultParams(), this.parseFunctionBody(i, !1), this.inGenerator = r, this.inAsync = n, this.yieldPos = s, this.awaitPos = a, this.inFunction = o, this.finishNode(i, "FunctionExpression");
      }, Q.parseArrowExpression = function (e, t, i) {
        var r = this.inGenerator,
            n = this.inAsync,
            s = this.yieldPos,
            a = this.awaitPos,
            o = this.inFunction;return this.enterFunctionScope(), this.initFunction(e), this.options.ecmaVersion >= 8 && (e.async = !!i), this.inGenerator = !1, this.inAsync = e.async, this.yieldPos = 0, this.awaitPos = 0, this.inFunction = !0, e.params = this.toAssignableList(t, !0), this.parseFunctionBody(e, !0), this.inGenerator = r, this.inAsync = n, this.yieldPos = s, this.awaitPos = a, this.inFunction = o, this.finishNode(e, "ArrowFunctionExpression");
      }, Q.parseFunctionBody = function (e, t) {
        var i = t && this.type !== k.braceL,
            r = this.strict,
            n = !1;if (i) e.body = this.parseMaybeAssign(), e.expression = !0, this.checkParams(e, !1);else {
          var s = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);r && !s || (n = this.strictDirective(this.end)) && s && this.raiseRecoverable(e.start, "Illegal 'use strict' directive in function with non-simple parameter list");var a = this.labels;this.labels = [], n && (this.strict = !0), this.checkParams(e, !r && !n && !t && this.isSimpleParamList(e.params)), e.body = this.parseBlock(!1), e.expression = !1, this.adaptDirectivePrologue(e.body.body), this.labels = a;
        }this.exitFunctionScope(), this.strict && e.id && this.checkLVal(e.id, "none"), this.strict = r;
      }, Q.isSimpleParamList = function (e) {
        for (var t = 0, i = e; t < i.length; t += 1) if ("Identifier" !== i[t].type) return !1;return !0;
      }, Q.checkParams = function (e, t) {
        for (var i = {}, r = 0, n = e.params; r < n.length; r += 1) {
          var s = n[r];this.checkLVal(s, "var", t ? null : i);
        }
      }, Q.parseExprList = function (e, t, i, r) {
        for (var n = [], s = !0; !this.eat(e);) {
          if (s) s = !1;else if (this.expect(k.comma), t && this.afterTrailingComma(e)) break;var a = void 0;i && this.type === k.comma ? a = null : this.type === k.ellipsis ? (a = this.parseSpread(r), r && this.type === k.comma && r.trailingComma < 0 && (r.trailingComma = this.start)) : a = this.parseMaybeAssign(!1, r), n.push(a);
        }return n;
      }, Q.checkUnreserved = function (e) {
        var t = e.start,
            i = e.end,
            r = e.name;this.inGenerator && "yield" === r && this.raiseRecoverable(t, "Can not use 'yield' as identifier inside a generator"), this.inAsync && "await" === r && this.raiseRecoverable(t, "Can not use 'await' as identifier inside an async function"), this.isKeyword(r) && this.raise(t, "Unexpected keyword '" + r + "'"), this.options.ecmaVersion < 6 && -1 != this.input.slice(t, i).indexOf("\\") || (this.strict ? this.reservedWordsStrict : this.reservedWords).test(r) && (this.inAsync || "await" !== r || this.raiseRecoverable(t, "Can not use keyword 'await' outside an async function"), this.raiseRecoverable(t, "The keyword '" + r + "' is reserved"));
      }, Q.parseIdent = function (e, t) {
        var i = this.startNode();return e && "never" == this.options.allowReserved && (e = !1), this.type === k.name ? i.name = this.value : this.type.keyword ? (i.name = this.type.keyword, "class" !== i.name && "function" !== i.name || this.lastTokEnd === this.lastTokStart + 1 && 46 === this.input.charCodeAt(this.lastTokStart) || this.context.pop()) : this.unexpected(), this.next(), this.finishNode(i, "Identifier"), e || this.checkUnreserved(i), i;
      }, Q.parseYield = function () {
        this.yieldPos || (this.yieldPos = this.start);var e = this.startNode();return this.next(), this.type == k.semi || this.canInsertSemicolon() || this.type != k.star && !this.type.startsExpr ? (e.delegate = !1, e.argument = null) : (e.delegate = this.eat(k.star), e.argument = this.parseMaybeAssign()), this.finishNode(e, "YieldExpression");
      }, Q.parseAwait = function () {
        this.awaitPos || (this.awaitPos = this.start);var e = this.startNode();return this.next(), e.argument = this.parseMaybeUnary(null, !0), this.finishNode(e, "AwaitExpression");
      };var Y = F.prototype;Y.raise = function (e, t) {
        var i = O(this.input, e);t += " (" + i.line + ":" + i.column + ")";var r = new SyntaxError(t);throw r.pos = e, r.loc = i, r.raisedAt = this.pos, r;
      }, Y.raiseRecoverable = Y.raise, Y.curPosition = function () {
        if (this.options.locations) return new T(this.curLine, this.pos - this.lineStart);
      };var Z = F.prototype,
          J = Object.assign || function (e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];for (var r = 0, n = t; r < n.length; r += 1) {
          var s = n[r];for (var a in s) N(s, a) && (e[a] = s[a]);
        }return e;
      };Z.enterFunctionScope = function () {
        this.scopeStack.push({ var: {}, lexical: {}, childVar: {}, parentLexical: {} });
      }, Z.exitFunctionScope = function () {
        this.scopeStack.pop();
      }, Z.enterLexicalScope = function () {
        var e = this.scopeStack[this.scopeStack.length - 1],
            t = { var: {}, lexical: {}, childVar: {}, parentLexical: {} };this.scopeStack.push(t), J(t.parentLexical, e.lexical, e.parentLexical);
      }, Z.exitLexicalScope = function () {
        var e = this.scopeStack.pop(),
            t = this.scopeStack[this.scopeStack.length - 1];J(t.childVar, e.var, e.childVar);
      }, Z.canDeclareVarName = function (e) {
        var t = this.scopeStack[this.scopeStack.length - 1];return !N(t.lexical, e) && !N(t.parentLexical, e);
      }, Z.canDeclareLexicalName = function (e) {
        var t = this.scopeStack[this.scopeStack.length - 1];return !N(t.lexical, e) && !N(t.var, e) && !N(t.childVar, e);
      }, Z.declareVarName = function (e) {
        this.scopeStack[this.scopeStack.length - 1].var[e] = !0;
      }, Z.declareLexicalName = function (e) {
        this.scopeStack[this.scopeStack.length - 1].lexical[e] = !0;
      };var $ = function (e, t, i) {
        this.type = "", this.start = t, this.end = 0, e.options.locations && (this.loc = new R(e, i)), e.options.directSourceFile && (this.sourceFile = e.options.directSourceFile), e.options.ranges && (this.range = [t, 0]);
      },
          ee = F.prototype;function te(e, t, i, r) {
        return e.type = t, e.end = i, this.options.locations && (e.loc.end = r), this.options.ranges && (e.range[1] = i), e;
      }ee.startNode = function () {
        return new $(this, this.start, this.startLoc);
      }, ee.startNodeAt = function (e, t) {
        return new $(this, e, t);
      }, ee.finishNode = function (e, t) {
        return te.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
      }, ee.finishNodeAt = function (e, t, i, r) {
        return te.call(this, e, t, i, r);
      };var ie = function (e, t, i, r, n) {
        this.token = e, this.isExpr = !!t, this.preserveSpace = !!i, this.override = r, this.generator = !!n;
      },
          re = { b_stat: new ie("{", !1), b_expr: new ie("{", !0), b_tmpl: new ie("${", !1), p_stat: new ie("(", !1), p_expr: new ie("(", !0), q_tmpl: new ie("`", !0, !0, function (e) {
          return e.tryReadTemplateToken();
        }), f_stat: new ie("function", !1), f_expr: new ie("function", !0), f_expr_gen: new ie("function", !0, !1, null, !0), f_gen: new ie("function", !1, !1, null, !0) },
          ne = F.prototype;ne.initialContext = function () {
        return [re.b_stat];
      }, ne.braceIsBlock = function (e) {
        var t = this.curContext();return t === re.f_expr || t === re.f_stat || (e !== k.colon || t !== re.b_stat && t !== re.b_expr ? e === k._return || e == k.name && this.exprAllowed ? C.test(this.input.slice(this.lastTokEnd, this.start)) : e === k._else || e === k.semi || e === k.eof || e === k.parenR || e == k.arrow || (e == k.braceL ? t === re.b_stat : e != k._var && e != k.name && !this.exprAllowed) : !t.isExpr);
      }, ne.inGeneratorContext = function () {
        for (var e = this.context.length - 1; e >= 1; e--) {
          var t = this.context[e];if ("function" === t.token) return t.generator;
        }return !1;
      }, ne.updateContext = function (e) {
        var t,
            i = this.type;i.keyword && e == k.dot ? this.exprAllowed = !1 : (t = i.updateContext) ? t.call(this, e) : this.exprAllowed = i.beforeExpr;
      }, k.parenR.updateContext = k.braceR.updateContext = function () {
        if (1 != this.context.length) {
          var e = this.context.pop();e === re.b_stat && "function" === this.curContext().token && (e = this.context.pop()), this.exprAllowed = !e.isExpr;
        } else this.exprAllowed = !0;
      }, k.braceL.updateContext = function (e) {
        this.context.push(this.braceIsBlock(e) ? re.b_stat : re.b_expr), this.exprAllowed = !0;
      }, k.dollarBraceL.updateContext = function () {
        this.context.push(re.b_tmpl), this.exprAllowed = !0;
      }, k.parenL.updateContext = function (e) {
        var t = e === k._if || e === k._for || e === k._with || e === k._while;this.context.push(t ? re.p_stat : re.p_expr), this.exprAllowed = !0;
      }, k.incDec.updateContext = function () {}, k._function.updateContext = k._class.updateContext = function (e) {
        e.beforeExpr && e !== k.semi && e !== k._else && (e !== k.colon && e !== k.braceL || this.curContext() !== re.b_stat) ? this.context.push(re.f_expr) : this.context.push(re.f_stat), this.exprAllowed = !1;
      }, k.backQuote.updateContext = function () {
        this.curContext() === re.q_tmpl ? this.context.pop() : this.context.push(re.q_tmpl), this.exprAllowed = !1;
      }, k.star.updateContext = function (e) {
        if (e == k._function) {
          var t = this.context.length - 1;this.context[t] === re.f_expr ? this.context[t] = re.f_expr_gen : this.context[t] = re.f_gen;
        }this.exprAllowed = !0;
      }, k.name.updateContext = function (e) {
        var t = !1;this.options.ecmaVersion >= 6 && ("of" == this.value && !this.exprAllowed || "yield" == this.value && this.inGeneratorContext()) && (t = !0), this.exprAllowed = t;
      };var se = { $LONE: ["ASCII", "ASCII_Hex_Digit", "AHex", "Alphabetic", "Alpha", "Any", "Assigned", "Bidi_Control", "Bidi_C", "Bidi_Mirrored", "Bidi_M", "Case_Ignorable", "CI", "Cased", "Changes_When_Casefolded", "CWCF", "Changes_When_Casemapped", "CWCM", "Changes_When_Lowercased", "CWL", "Changes_When_NFKC_Casefolded", "CWKCF", "Changes_When_Titlecased", "CWT", "Changes_When_Uppercased", "CWU", "Dash", "Default_Ignorable_Code_Point", "DI", "Deprecated", "Dep", "Diacritic", "Dia", "Emoji", "Emoji_Component", "Emoji_Modifier", "Emoji_Modifier_Base", "Emoji_Presentation", "Extender", "Ext", "Grapheme_Base", "Gr_Base", "Grapheme_Extend", "Gr_Ext", "Hex_Digit", "Hex", "IDS_Binary_Operator", "IDSB", "IDS_Trinary_Operator", "IDST", "ID_Continue", "IDC", "ID_Start", "IDS", "Ideographic", "Ideo", "Join_Control", "Join_C", "Logical_Order_Exception", "LOE", "Lowercase", "Lower", "Math", "Noncharacter_Code_Point", "NChar", "Pattern_Syntax", "Pat_Syn", "Pattern_White_Space", "Pat_WS", "Quotation_Mark", "QMark", "Radical", "Regional_Indicator", "RI", "Sentence_Terminal", "STerm", "Soft_Dotted", "SD", "Terminal_Punctuation", "Term", "Unified_Ideograph", "UIdeo", "Uppercase", "Upper", "Variation_Selector", "VS", "White_Space", "space", "XID_Continue", "XIDC", "XID_Start", "XIDS"], General_Category: ["Cased_Letter", "LC", "Close_Punctuation", "Pe", "Connector_Punctuation", "Pc", "Control", "Cc", "cntrl", "Currency_Symbol", "Sc", "Dash_Punctuation", "Pd", "Decimal_Number", "Nd", "digit", "Enclosing_Mark", "Me", "Final_Punctuation", "Pf", "Format", "Cf", "Initial_Punctuation", "Pi", "Letter", "L", "Letter_Number", "Nl", "Line_Separator", "Zl", "Lowercase_Letter", "Ll", "Mark", "M", "Combining_Mark", "Math_Symbol", "Sm", "Modifier_Letter", "Lm", "Modifier_Symbol", "Sk", "Nonspacing_Mark", "Mn", "Number", "N", "Open_Punctuation", "Ps", "Other", "C", "Other_Letter", "Lo", "Other_Number", "No", "Other_Punctuation", "Po", "Other_Symbol", "So", "Paragraph_Separator", "Zp", "Private_Use", "Co", "Punctuation", "P", "punct", "Separator", "Z", "Space_Separator", "Zs", "Spacing_Mark", "Mc", "Surrogate", "Cs", "Symbol", "S", "Titlecase_Letter", "Lt", "Unassigned", "Cn", "Uppercase_Letter", "Lu"], Script: ["Adlam", "Adlm", "Ahom", "Anatolian_Hieroglyphs", "Hluw", "Arabic", "Arab", "Armenian", "Armn", "Avestan", "Avst", "Balinese", "Bali", "Bamum", "Bamu", "Bassa_Vah", "Bass", "Batak", "Batk", "Bengali", "Beng", "Bhaiksuki", "Bhks", "Bopomofo", "Bopo", "Brahmi", "Brah", "Braille", "Brai", "Buginese", "Bugi", "Buhid", "Buhd", "Canadian_Aboriginal", "Cans", "Carian", "Cari", "Caucasian_Albanian", "Aghb", "Chakma", "Cakm", "Cham", "Cherokee", "Cher", "Common", "Zyyy", "Coptic", "Copt", "Qaac", "Cuneiform", "Xsux", "Cypriot", "Cprt", "Cyrillic", "Cyrl", "Deseret", "Dsrt", "Devanagari", "Deva", "Duployan", "Dupl", "Egyptian_Hieroglyphs", "Egyp", "Elbasan", "Elba", "Ethiopic", "Ethi", "Georgian", "Geor", "Glagolitic", "Glag", "Gothic", "Goth", "Grantha", "Gran", "Greek", "Grek", "Gujarati", "Gujr", "Gurmukhi", "Guru", "Han", "Hani", "Hangul", "Hang", "Hanunoo", "Hano", "Hatran", "Hatr", "Hebrew", "Hebr", "Hiragana", "Hira", "Imperial_Aramaic", "Armi", "Inherited", "Zinh", "Qaai", "Inscriptional_Pahlavi", "Phli", "Inscriptional_Parthian", "Prti", "Javanese", "Java", "Kaithi", "Kthi", "Kannada", "Knda", "Katakana", "Kana", "Kayah_Li", "Kali", "Kharoshthi", "Khar", "Khmer", "Khmr", "Khojki", "Khoj", "Khudawadi", "Sind", "Lao", "Laoo", "Latin", "Latn", "Lepcha", "Lepc", "Limbu", "Limb", "Linear_A", "Lina", "Linear_B", "Linb", "Lisu", "Lycian", "Lyci", "Lydian", "Lydi", "Mahajani", "Mahj", "Malayalam", "Mlym", "Mandaic", "Mand", "Manichaean", "Mani", "Marchen", "Marc", "Masaram_Gondi", "Gonm", "Meetei_Mayek", "Mtei", "Mende_Kikakui", "Mend", "Meroitic_Cursive", "Merc", "Meroitic_Hieroglyphs", "Mero", "Miao", "Plrd", "Modi", "Mongolian", "Mong", "Mro", "Mroo", "Multani", "Mult", "Myanmar", "Mymr", "Nabataean", "Nbat", "New_Tai_Lue", "Talu", "Newa", "Nko", "Nkoo", "Nushu", "Nshu", "Ogham", "Ogam", "Ol_Chiki", "Olck", "Old_Hungarian", "Hung", "Old_Italic", "Ital", "Old_North_Arabian", "Narb", "Old_Permic", "Perm", "Old_Persian", "Xpeo", "Old_South_Arabian", "Sarb", "Old_Turkic", "Orkh", "Oriya", "Orya", "Osage", "Osge", "Osmanya", "Osma", "Pahawh_Hmong", "Hmng", "Palmyrene", "Palm", "Pau_Cin_Hau", "Pauc", "Phags_Pa", "Phag", "Phoenician", "Phnx", "Psalter_Pahlavi", "Phlp", "Rejang", "Rjng", "Runic", "Runr", "Samaritan", "Samr", "Saurashtra", "Saur", "Sharada", "Shrd", "Shavian", "Shaw", "Siddham", "Sidd", "SignWriting", "Sgnw", "Sinhala", "Sinh", "Sora_Sompeng", "Sora", "Soyombo", "Soyo", "Sundanese", "Sund", "Syloti_Nagri", "Sylo", "Syriac", "Syrc", "Tagalog", "Tglg", "Tagbanwa", "Tagb", "Tai_Le", "Tale", "Tai_Tham", "Lana", "Tai_Viet", "Tavt", "Takri", "Takr", "Tamil", "Taml", "Tangut", "Tang", "Telugu", "Telu", "Thaana", "Thaa", "Thai", "Tibetan", "Tibt", "Tifinagh", "Tfng", "Tirhuta", "Tirh", "Ugaritic", "Ugar", "Vai", "Vaii", "Warang_Citi", "Wara", "Yi", "Yiii", "Zanabazar_Square", "Zanb"] };Array.prototype.push.apply(se.$LONE, se.General_Category), se.gc = se.General_Category, se.sc = se.Script_Extensions = se.scx = se.Script;var ae = F.prototype,
          oe = function (e) {
        this.parser = e, this.validFlags = "gim" + (e.options.ecmaVersion >= 6 ? "uy" : "") + (e.options.ecmaVersion >= 9 ? "s" : ""), this.source = "", this.flags = "", this.start = 0, this.switchU = !1, this.switchN = !1, this.pos = 0, this.lastIntValue = 0, this.lastStringValue = "", this.lastAssertionIsQuantifiable = !1, this.numCapturingParens = 0, this.maxBackReference = 0, this.groupNames = [], this.backReferenceNames = [];
      };function he(e) {
        return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)));
      }function ce(e) {
        return 36 === e || e >= 40 && e <= 43 || 46 === e || 63 === e || e >= 91 && e <= 94 || e >= 123 && e <= 125;
      }function ue(e) {
        return e >= 65 && e <= 90 || e >= 97 && e <= 122;
      }function pe(e) {
        return ue(e) || 95 === e;
      }function le(e) {
        return pe(e) || de(e);
      }function de(e) {
        return e >= 48 && e <= 57;
      }function fe(e) {
        return e >= 48 && e <= 57 || e >= 65 && e <= 70 || e >= 97 && e <= 102;
      }function me(e) {
        return e >= 65 && e <= 70 ? e - 65 + 10 : e >= 97 && e <= 102 ? e - 97 + 10 : e - 48;
      }function ve(e) {
        return e >= 48 && e <= 55;
      }oe.prototype.reset = function (e, t, i) {
        var r = -1 !== i.indexOf("u");this.start = 0 | e, this.source = t + "", this.flags = i, this.switchU = r && this.parser.options.ecmaVersion >= 6, this.switchN = r && this.parser.options.ecmaVersion >= 9;
      }, oe.prototype.raise = function (e) {
        this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + e);
      }, oe.prototype.at = function (e) {
        var t = this.source,
            i = t.length;if (e >= i) return -1;var r = t.charCodeAt(e);return !this.switchU || r <= 55295 || r >= 57344 || e + 1 >= i ? r : (r << 10) + t.charCodeAt(e + 1) - 56613888;
      }, oe.prototype.nextIndex = function (e) {
        var t = this.source,
            i = t.length;if (e >= i) return i;var r = t.charCodeAt(e);return !this.switchU || r <= 55295 || r >= 57344 || e + 1 >= i ? e + 1 : e + 2;
      }, oe.prototype.current = function () {
        return this.at(this.pos);
      }, oe.prototype.lookahead = function () {
        return this.at(this.nextIndex(this.pos));
      }, oe.prototype.advance = function () {
        this.pos = this.nextIndex(this.pos);
      }, oe.prototype.eat = function (e) {
        return this.current() === e && (this.advance(), !0);
      }, ae.validateRegExpFlags = function (e) {
        for (var t = e.validFlags, i = e.flags, r = 0; r < i.length; r++) {
          var n = i.charAt(r);-1 == t.indexOf(n) && this.raise(e.start, "Invalid regular expression flag"), i.indexOf(n, r + 1) > -1 && this.raise(e.start, "Duplicate regular expression flag");
        }
      }, ae.validateRegExpPattern = function (e) {
        this.regexp_pattern(e), !e.switchN && this.options.ecmaVersion >= 9 && e.groupNames.length > 0 && (e.switchN = !0, this.regexp_pattern(e));
      }, ae.regexp_pattern = function (e) {
        e.pos = 0, e.lastIntValue = 0, e.lastStringValue = "", e.lastAssertionIsQuantifiable = !1, e.numCapturingParens = 0, e.maxBackReference = 0, e.groupNames.length = 0, e.backReferenceNames.length = 0, this.regexp_disjunction(e), e.pos !== e.source.length && (e.eat(41) && e.raise("Unmatched ')'"), (e.eat(93) || e.eat(125)) && e.raise("Lone quantifier brackets")), e.maxBackReference > e.numCapturingParens && e.raise("Invalid escape");for (var t = 0, i = e.backReferenceNames; t < i.length; t += 1) {
          var r = i[t];-1 === e.groupNames.indexOf(r) && e.raise("Invalid named capture referenced");
        }
      }, ae.regexp_disjunction = function (e) {
        for (this.regexp_alternative(e); e.eat(124);) this.regexp_alternative(e);this.regexp_eatQuantifier(e, !0) && e.raise("Nothing to repeat"), e.eat(123) && e.raise("Lone quantifier brackets");
      }, ae.regexp_alternative = function (e) {
        for (; e.pos < e.source.length && this.regexp_eatTerm(e););
      }, ae.regexp_eatTerm = function (e) {
        return this.regexp_eatAssertion(e) ? (e.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(e) && e.switchU && e.raise("Invalid quantifier"), !0) : !(e.switchU ? !this.regexp_eatAtom(e) : !this.regexp_eatExtendedAtom(e)) && (this.regexp_eatQuantifier(e), !0);
      }, ae.regexp_eatAssertion = function (e) {
        var t = e.pos;if (e.lastAssertionIsQuantifiable = !1, e.eat(94) || e.eat(36)) return !0;if (e.eat(92)) {
          if (e.eat(66) || e.eat(98)) return !0;e.pos = t;
        }if (e.eat(40) && e.eat(63)) {
          var i = !1;if (this.options.ecmaVersion >= 9 && (i = e.eat(60)), e.eat(61) || e.eat(33)) return this.regexp_disjunction(e), e.eat(41) || e.raise("Unterminated group"), e.lastAssertionIsQuantifiable = !i, !0;
        }return e.pos = t, !1;
      }, ae.regexp_eatQuantifier = function (e, t) {
        return void 0 === t && (t = !1), !!this.regexp_eatQuantifierPrefix(e, t) && (e.eat(63), !0);
      }, ae.regexp_eatQuantifierPrefix = function (e, t) {
        return e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t);
      }, ae.regexp_eatBracedQuantifier = function (e, t) {
        var i = e.pos;if (e.eat(123)) {
          var r = 0,
              n = -1;if (this.regexp_eatDecimalDigits(e) && (r = e.lastIntValue, e.eat(44) && this.regexp_eatDecimalDigits(e) && (n = e.lastIntValue), e.eat(125))) return -1 !== n && n < r && !t && e.raise("numbers out of order in {} quantifier"), !0;e.switchU && !t && e.raise("Incomplete quantifier"), e.pos = i;
        }return !1;
      }, ae.regexp_eatAtom = function (e) {
        return this.regexp_eatPatternCharacters(e) || e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e);
      }, ae.regexp_eatReverseSolidusAtomEscape = function (e) {
        var t = e.pos;if (e.eat(92)) {
          if (this.regexp_eatAtomEscape(e)) return !0;e.pos = t;
        }return !1;
      }, ae.regexp_eatUncapturingGroup = function (e) {
        var t = e.pos;if (e.eat(40)) {
          if (e.eat(63) && e.eat(58)) {
            if (this.regexp_disjunction(e), e.eat(41)) return !0;e.raise("Unterminated group");
          }e.pos = t;
        }return !1;
      }, ae.regexp_eatCapturingGroup = function (e) {
        if (e.eat(40)) {
          if (this.options.ecmaVersion >= 9 ? this.regexp_groupSpecifier(e) : 63 === e.current() && e.raise("Invalid group"), this.regexp_disjunction(e), e.eat(41)) return e.numCapturingParens += 1, !0;e.raise("Unterminated group");
        }return !1;
      }, ae.regexp_eatExtendedAtom = function (e) {
        return e.eat(46) || this.regexp_eatReverseSolidusAtomEscape(e) || this.regexp_eatCharacterClass(e) || this.regexp_eatUncapturingGroup(e) || this.regexp_eatCapturingGroup(e) || this.regexp_eatInvalidBracedQuantifier(e) || this.regexp_eatExtendedPatternCharacter(e);
      }, ae.regexp_eatInvalidBracedQuantifier = function (e) {
        return this.regexp_eatBracedQuantifier(e, !0) && e.raise("Nothing to repeat"), !1;
      }, ae.regexp_eatSyntaxCharacter = function (e) {
        var t = e.current();return !!ce(t) && (e.lastIntValue = t, e.advance(), !0);
      }, ae.regexp_eatPatternCharacters = function (e) {
        for (var t = e.pos, i = 0; -1 !== (i = e.current()) && !ce(i);) e.advance();return e.pos !== t;
      }, ae.regexp_eatExtendedPatternCharacter = function (e) {
        var t = e.current();return !(-1 === t || 36 === t || t >= 40 && t <= 43 || 46 === t || 63 === t || 91 === t || 94 === t || 124 === t || (e.advance(), 0));
      }, ae.regexp_groupSpecifier = function (e) {
        if (e.eat(63)) {
          if (this.regexp_eatGroupName(e)) return -1 !== e.groupNames.indexOf(e.lastStringValue) && e.raise("Duplicate capture group name"), void e.groupNames.push(e.lastStringValue);e.raise("Invalid group");
        }
      }, ae.regexp_eatGroupName = function (e) {
        if (e.lastStringValue = "", e.eat(60)) {
          if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;e.raise("Invalid capture group name");
        }return !1;
      }, ae.regexp_eatRegExpIdentifierName = function (e) {
        if (e.lastStringValue = "", this.regexp_eatRegExpIdentifierStart(e)) {
          for (e.lastStringValue += he(e.lastIntValue); this.regexp_eatRegExpIdentifierPart(e);) e.lastStringValue += he(e.lastIntValue);return !0;
        }return !1;
      }, ae.regexp_eatRegExpIdentifierStart = function (e) {
        var t = e.pos,
            i = e.current();return e.advance(), 92 === i && this.regexp_eatRegExpUnicodeEscapeSequence(e) && (i = e.lastIntValue), function (e) {
          return f(e, !0) || 36 === e || 95 === e;
        }(i) ? (e.lastIntValue = i, !0) : (e.pos = t, !1);
      }, ae.regexp_eatRegExpIdentifierPart = function (e) {
        var t = e.pos,
            i = e.current();return e.advance(), 92 === i && this.regexp_eatRegExpUnicodeEscapeSequence(e) && (i = e.lastIntValue), function (e) {
          return m(e, !0) || 36 === e || 95 === e || 8204 === e || 8205 === e;
        }(i) ? (e.lastIntValue = i, !0) : (e.pos = t, !1);
      }, ae.regexp_eatAtomEscape = function (e) {
        return !!(this.regexp_eatBackReference(e) || this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e) || e.switchN && this.regexp_eatKGroupName(e)) || (e.switchU && (99 === e.current() && e.raise("Invalid unicode escape"), e.raise("Invalid escape")), !1);
      }, ae.regexp_eatBackReference = function (e) {
        var t = e.pos;if (this.regexp_eatDecimalEscape(e)) {
          var i = e.lastIntValue;if (e.switchU) return i > e.maxBackReference && (e.maxBackReference = i), !0;if (i <= e.numCapturingParens) return !0;e.pos = t;
        }return !1;
      }, ae.regexp_eatKGroupName = function (e) {
        if (e.eat(107)) {
          if (this.regexp_eatGroupName(e)) return e.backReferenceNames.push(e.lastStringValue), !0;e.raise("Invalid named reference");
        }return !1;
      }, ae.regexp_eatCharacterEscape = function (e) {
        return this.regexp_eatControlEscape(e) || this.regexp_eatCControlLetter(e) || this.regexp_eatZero(e) || this.regexp_eatHexEscapeSequence(e) || this.regexp_eatRegExpUnicodeEscapeSequence(e) || !e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e) || this.regexp_eatIdentityEscape(e);
      }, ae.regexp_eatCControlLetter = function (e) {
        var t = e.pos;if (e.eat(99)) {
          if (this.regexp_eatControlLetter(e)) return !0;e.pos = t;
        }return !1;
      }, ae.regexp_eatZero = function (e) {
        return 48 === e.current() && !de(e.lookahead()) && (e.lastIntValue = 0, e.advance(), !0);
      }, ae.regexp_eatControlEscape = function (e) {
        var t = e.current();return 116 === t ? (e.lastIntValue = 9, e.advance(), !0) : 110 === t ? (e.lastIntValue = 10, e.advance(), !0) : 118 === t ? (e.lastIntValue = 11, e.advance(), !0) : 102 === t ? (e.lastIntValue = 12, e.advance(), !0) : 114 === t && (e.lastIntValue = 13, e.advance(), !0);
      }, ae.regexp_eatControlLetter = function (e) {
        var t = e.current();return !!ue(t) && (e.lastIntValue = t % 32, e.advance(), !0);
      }, ae.regexp_eatRegExpUnicodeEscapeSequence = function (e) {
        var t,
            i = e.pos;if (e.eat(117)) {
          if (this.regexp_eatFixedHexDigits(e, 4)) {
            var r = e.lastIntValue;if (e.switchU && r >= 55296 && r <= 56319) {
              var n = e.pos;if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
                var s = e.lastIntValue;if (s >= 56320 && s <= 57343) return e.lastIntValue = 1024 * (r - 55296) + (s - 56320) + 65536, !0;
              }e.pos = n, e.lastIntValue = r;
            }return !0;
          }if (e.switchU && e.eat(123) && this.regexp_eatHexDigits(e) && e.eat(125) && (t = e.lastIntValue) >= 0 && t <= 1114111) return !0;e.switchU && e.raise("Invalid unicode escape"), e.pos = i;
        }return !1;
      }, ae.regexp_eatIdentityEscape = function (e) {
        if (e.switchU) return !!this.regexp_eatSyntaxCharacter(e) || !!e.eat(47) && (e.lastIntValue = 47, !0);var t = e.current();return !(99 === t || e.switchN && 107 === t || (e.lastIntValue = t, e.advance(), 0));
      }, ae.regexp_eatDecimalEscape = function (e) {
        e.lastIntValue = 0;var t = e.current();if (t >= 49 && t <= 57) {
          do {
            e.lastIntValue = 10 * e.lastIntValue + (t - 48), e.advance();
          } while ((t = e.current()) >= 48 && t <= 57);return !0;
        }return !1;
      }, ae.regexp_eatCharacterClassEscape = function (e) {
        var t = e.current();if (100 === t || 68 === t || 115 === t || 83 === t || 119 === t || 87 === t) return e.lastIntValue = -1, e.advance(), !0;if (e.switchU && this.options.ecmaVersion >= 9 && (80 === t || 112 === t)) {
          if (e.lastIntValue = -1, e.advance(), e.eat(123) && this.regexp_eatUnicodePropertyValueExpression(e) && e.eat(125)) return !0;e.raise("Invalid property name");
        }return !1;
      }, ae.regexp_eatUnicodePropertyValueExpression = function (e) {
        var t = e.pos;if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
          var i = e.lastStringValue;if (this.regexp_eatUnicodePropertyValue(e)) {
            var r = e.lastStringValue;return this.regexp_validateUnicodePropertyNameAndValue(e, i, r), !0;
          }
        }if (e.pos = t, this.regexp_eatLoneUnicodePropertyNameOrValue(e)) {
          var n = e.lastStringValue;return this.regexp_validateUnicodePropertyNameOrValue(e, n), !0;
        }return !1;
      }, ae.regexp_validateUnicodePropertyNameAndValue = function (e, t, i) {
        se.hasOwnProperty(t) && -1 !== se[t].indexOf(i) || e.raise("Invalid property name");
      }, ae.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
        -1 === se.$LONE.indexOf(t) && e.raise("Invalid property name");
      }, ae.regexp_eatUnicodePropertyName = function (e) {
        var t = 0;for (e.lastStringValue = ""; pe(t = e.current());) e.lastStringValue += he(t), e.advance();return "" !== e.lastStringValue;
      }, ae.regexp_eatUnicodePropertyValue = function (e) {
        var t = 0;for (e.lastStringValue = ""; le(t = e.current());) e.lastStringValue += he(t), e.advance();return "" !== e.lastStringValue;
      }, ae.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
        return this.regexp_eatUnicodePropertyValue(e);
      }, ae.regexp_eatCharacterClass = function (e) {
        if (e.eat(91)) {
          if (e.eat(94), this.regexp_classRanges(e), e.eat(93)) return !0;e.raise("Unterminated character class");
        }return !1;
      }, ae.regexp_classRanges = function (e) {
        for (; this.regexp_eatClassAtom(e);) {
          var t = e.lastIntValue;if (e.eat(45) && this.regexp_eatClassAtom(e)) {
            var i = e.lastIntValue;!e.switchU || -1 !== t && -1 !== i || e.raise("Invalid character class"), -1 !== t && -1 !== i && t > i && e.raise("Range out of order in character class");
          }
        }
      }, ae.regexp_eatClassAtom = function (e) {
        var t = e.pos;if (e.eat(92)) {
          if (this.regexp_eatClassEscape(e)) return !0;if (e.switchU) {
            var i = e.current();(99 === i || ve(i)) && e.raise("Invalid class escape"), e.raise("Invalid escape");
          }e.pos = t;
        }var r = e.current();return 93 !== r && (e.lastIntValue = r, e.advance(), !0);
      }, ae.regexp_eatClassEscape = function (e) {
        var t = e.pos;if (e.eat(98)) return e.lastIntValue = 8, !0;if (e.switchU && e.eat(45)) return e.lastIntValue = 45, !0;if (!e.switchU && e.eat(99)) {
          if (this.regexp_eatClassControlLetter(e)) return !0;e.pos = t;
        }return this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e);
      }, ae.regexp_eatClassControlLetter = function (e) {
        var t = e.current();return !(!de(t) && 95 !== t || (e.lastIntValue = t % 32, e.advance(), 0));
      }, ae.regexp_eatHexEscapeSequence = function (e) {
        var t = e.pos;if (e.eat(120)) {
          if (this.regexp_eatFixedHexDigits(e, 2)) return !0;e.switchU && e.raise("Invalid escape"), e.pos = t;
        }return !1;
      }, ae.regexp_eatDecimalDigits = function (e) {
        var t = e.pos,
            i = 0;for (e.lastIntValue = 0; de(i = e.current());) e.lastIntValue = 10 * e.lastIntValue + (i - 48), e.advance();return e.pos !== t;
      }, ae.regexp_eatHexDigits = function (e) {
        var t = e.pos,
            i = 0;for (e.lastIntValue = 0; fe(i = e.current());) e.lastIntValue = 16 * e.lastIntValue + me(i), e.advance();return e.pos !== t;
      }, ae.regexp_eatLegacyOctalEscapeSequence = function (e) {
        if (this.regexp_eatOctalDigit(e)) {
          var t = e.lastIntValue;if (this.regexp_eatOctalDigit(e)) {
            var i = e.lastIntValue;t <= 3 && this.regexp_eatOctalDigit(e) ? e.lastIntValue = 64 * t + 8 * i + e.lastIntValue : e.lastIntValue = 8 * t + i;
          } else e.lastIntValue = t;return !0;
        }return !1;
      }, ae.regexp_eatOctalDigit = function (e) {
        var t = e.current();return ve(t) ? (e.lastIntValue = t - 48, e.advance(), !0) : (e.lastIntValue = 0, !1);
      }, ae.regexp_eatFixedHexDigits = function (e, t) {
        var i = e.pos;e.lastIntValue = 0;for (var r = 0; r < t; ++r) {
          var n = e.current();if (!fe(n)) return e.pos = i, !1;e.lastIntValue = 16 * e.lastIntValue + me(n), e.advance();
        }return !0;
      };var ge = function (e) {
        this.type = e.type, this.value = e.value, this.start = e.start, this.end = e.end, e.options.locations && (this.loc = new R(e, e.startLoc, e.endLoc)), e.options.ranges && (this.range = [e.start, e.end]);
      },
          xe = F.prototype;function ye(e) {
        return e <= 65535 ? String.fromCharCode(e) : (e -= 65536, String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)));
      }xe.next = function () {
        this.options.onToken && this.options.onToken(new ge(this)), this.lastTokEnd = this.end, this.lastTokStart = this.start, this.lastTokEndLoc = this.endLoc, this.lastTokStartLoc = this.startLoc, this.nextToken();
      }, xe.getToken = function () {
        return this.next(), new ge(this);
      }, "undefined" != typeof Symbol && (xe[Symbol.iterator] = function () {
        var e = this;return { next: function () {
            var t = e.getToken();return { done: t.type === k.eof, value: t };
          } };
      }), xe.curContext = function () {
        return this.context[this.context.length - 1];
      }, xe.nextToken = function () {
        var e = this.curContext();return e && e.preserveSpace || this.skipSpace(), this.start = this.pos, this.options.locations && (this.startLoc = this.curPosition()), this.pos >= this.input.length ? this.finishToken(k.eof) : e.override ? e.override(this) : void this.readToken(this.fullCharCodeAtPos());
      }, xe.readToken = function (e) {
        return f(e, this.options.ecmaVersion >= 6) || 92 === e ? this.readWord() : this.getTokenFromCode(e);
      }, xe.fullCharCodeAtPos = function () {
        var e = this.input.charCodeAt(this.pos);return e <= 55295 || e >= 57344 ? e : (e << 10) + this.input.charCodeAt(this.pos + 1) - 56613888;
      }, xe.skipBlockComment = function () {
        var e,
            t = this.options.onComment && this.curPosition(),
            i = this.pos,
            r = this.input.indexOf("*/", this.pos += 2);if (-1 === r && this.raise(this.pos - 2, "Unterminated comment"), this.pos = r + 2, this.options.locations) for (S.lastIndex = i; (e = S.exec(this.input)) && e.index < this.pos;) ++this.curLine, this.lineStart = e.index + e[0].length;this.options.onComment && this.options.onComment(!0, this.input.slice(i + 2, r), i, this.pos, t, this.curPosition());
      }, xe.skipLineComment = function (e) {
        for (var t = this.pos, i = this.options.onComment && this.curPosition(), r = this.input.charCodeAt(this.pos += e); this.pos < this.input.length && !A(r);) r = this.input.charCodeAt(++this.pos);this.options.onComment && this.options.onComment(!1, this.input.slice(t + e, this.pos), t, this.pos, i, this.curPosition());
      }, xe.skipSpace = function () {
        e: for (; this.pos < this.input.length;) {
          var e = this.input.charCodeAt(this.pos);switch (e) {case 32:case 160:
              ++this.pos;break;case 13:
              10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;case 10:case 8232:case 8233:
              ++this.pos, this.options.locations && (++this.curLine, this.lineStart = this.pos);break;case 47:
              switch (this.input.charCodeAt(this.pos + 1)) {case 42:
                  this.skipBlockComment();break;case 47:
                  this.skipLineComment(2);break;default:
                  break e;}break;default:
              if (!(e > 8 && e < 14 || e >= 5760 && w.test(String.fromCharCode(e)))) break e;++this.pos;}
        }
      }, xe.finishToken = function (e, t) {
        this.end = this.pos, this.options.locations && (this.endLoc = this.curPosition());var i = this.type;this.type = e, this.value = t, this.updateContext(i);
      }, xe.readToken_dot = function () {
        var e = this.input.charCodeAt(this.pos + 1);if (e >= 48 && e <= 57) return this.readNumber(!0);var t = this.input.charCodeAt(this.pos + 2);return this.options.ecmaVersion >= 6 && 46 === e && 46 === t ? (this.pos += 3, this.finishToken(k.ellipsis)) : (++this.pos, this.finishToken(k.dot));
      }, xe.readToken_slash = function () {
        var e = this.input.charCodeAt(this.pos + 1);return this.exprAllowed ? (++this.pos, this.readRegexp()) : 61 === e ? this.finishOp(k.assign, 2) : this.finishOp(k.slash, 1);
      }, xe.readToken_mult_modulo_exp = function (e) {
        var t = this.input.charCodeAt(this.pos + 1),
            i = 1,
            r = 42 === e ? k.star : k.modulo;return this.options.ecmaVersion >= 7 && 42 == e && 42 === t && (++i, r = k.starstar, t = this.input.charCodeAt(this.pos + 2)), 61 === t ? this.finishOp(k.assign, i + 1) : this.finishOp(r, i);
      }, xe.readToken_pipe_amp = function (e) {
        var t = this.input.charCodeAt(this.pos + 1);return t === e ? this.finishOp(124 === e ? k.logicalOR : k.logicalAND, 2) : 61 === t ? this.finishOp(k.assign, 2) : this.finishOp(124 === e ? k.bitwiseOR : k.bitwiseAND, 1);
      }, xe.readToken_caret = function () {
        return 61 === this.input.charCodeAt(this.pos + 1) ? this.finishOp(k.assign, 2) : this.finishOp(k.bitwiseXOR, 1);
      }, xe.readToken_plus_min = function (e) {
        var t = this.input.charCodeAt(this.pos + 1);return t === e ? 45 != t || this.inModule || 62 != this.input.charCodeAt(this.pos + 2) || 0 !== this.lastTokEnd && !C.test(this.input.slice(this.lastTokEnd, this.pos)) ? this.finishOp(k.incDec, 2) : (this.skipLineComment(3), this.skipSpace(), this.nextToken()) : 61 === t ? this.finishOp(k.assign, 2) : this.finishOp(k.plusMin, 1);
      }, xe.readToken_lt_gt = function (e) {
        var t = this.input.charCodeAt(this.pos + 1),
            i = 1;return t === e ? (i = 62 === e && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2, 61 === this.input.charCodeAt(this.pos + i) ? this.finishOp(k.assign, i + 1) : this.finishOp(k.bitShift, i)) : 33 != t || 60 != e || this.inModule || 45 != this.input.charCodeAt(this.pos + 2) || 45 != this.input.charCodeAt(this.pos + 3) ? (61 === t && (i = 2), this.finishOp(k.relational, i)) : (this.skipLineComment(4), this.skipSpace(), this.nextToken());
      }, xe.readToken_eq_excl = function (e) {
        var t = this.input.charCodeAt(this.pos + 1);return 61 === t ? this.finishOp(k.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2) : 61 === e && 62 === t && this.options.ecmaVersion >= 6 ? (this.pos += 2, this.finishToken(k.arrow)) : this.finishOp(61 === e ? k.eq : k.prefix, 1);
      }, xe.getTokenFromCode = function (e) {
        switch (e) {case 46:
            return this.readToken_dot();case 40:
            return ++this.pos, this.finishToken(k.parenL);case 41:
            return ++this.pos, this.finishToken(k.parenR);case 59:
            return ++this.pos, this.finishToken(k.semi);case 44:
            return ++this.pos, this.finishToken(k.comma);case 91:
            return ++this.pos, this.finishToken(k.bracketL);case 93:
            return ++this.pos, this.finishToken(k.bracketR);case 123:
            return ++this.pos, this.finishToken(k.braceL);case 125:
            return ++this.pos, this.finishToken(k.braceR);case 58:
            return ++this.pos, this.finishToken(k.colon);case 63:
            return ++this.pos, this.finishToken(k.question);case 96:
            if (this.options.ecmaVersion < 6) break;return ++this.pos, this.finishToken(k.backQuote);case 48:
            var t = this.input.charCodeAt(this.pos + 1);if (120 === t || 88 === t) return this.readRadixNumber(16);if (this.options.ecmaVersion >= 6) {
              if (111 === t || 79 === t) return this.readRadixNumber(8);if (98 === t || 66 === t) return this.readRadixNumber(2);
            }case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
            return this.readNumber(!1);case 34:case 39:
            return this.readString(e);case 47:
            return this.readToken_slash();case 37:case 42:
            return this.readToken_mult_modulo_exp(e);case 124:case 38:
            return this.readToken_pipe_amp(e);case 94:
            return this.readToken_caret();case 43:case 45:
            return this.readToken_plus_min(e);case 60:case 62:
            return this.readToken_lt_gt(e);case 61:case 33:
            return this.readToken_eq_excl(e);case 126:
            return this.finishOp(k.prefix, 1);}this.raise(this.pos, "Unexpected character '" + ye(e) + "'");
      }, xe.finishOp = function (e, t) {
        var i = this.input.slice(this.pos, this.pos + t);return this.pos += t, this.finishToken(e, i);
      }, xe.readRegexp = function () {
        for (var e, t, i = this.pos;;) {
          this.pos >= this.input.length && this.raise(i, "Unterminated regular expression");var r = this.input.charAt(this.pos);if (C.test(r) && this.raise(i, "Unterminated regular expression"), e) e = !1;else {
            if ("[" === r) t = !0;else if ("]" === r && t) t = !1;else if ("/" === r && !t) break;e = "\\" === r;
          }++this.pos;
        }var n = this.input.slice(i, this.pos);++this.pos;var s = this.pos,
            a = this.readWord1();this.containsEsc && this.unexpected(s);var o = this.regexpState || (this.regexpState = new oe(this));o.reset(i, n, a), this.validateRegExpFlags(o), this.validateRegExpPattern(o);var h = null;try {
          h = new RegExp(n, a);
        } catch (e) {}return this.finishToken(k.regexp, { pattern: n, flags: a, value: h });
      }, xe.readInt = function (e, t) {
        for (var i = this.pos, r = 0, n = 0, s = null == t ? 1 / 0 : t; n < s; ++n) {
          var a,
              o = this.input.charCodeAt(this.pos);if ((a = o >= 97 ? o - 97 + 10 : o >= 65 ? o - 65 + 10 : o >= 48 && o <= 57 ? o - 48 : 1 / 0) >= e) break;++this.pos, r = r * e + a;
        }return this.pos === i || null != t && this.pos - i !== t ? null : r;
      }, xe.readRadixNumber = function (e) {
        this.pos += 2;var t = this.readInt(e);return null == t && this.raise(this.start + 2, "Expected number in radix " + e), f(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"), this.finishToken(k.num, t);
      }, xe.readNumber = function (e) {
        var t = this.pos;e || null !== this.readInt(10) || this.raise(t, "Invalid number");var i = this.pos - t >= 2 && 48 === this.input.charCodeAt(t);i && this.strict && this.raise(t, "Invalid number"), i && /[89]/.test(this.input.slice(t, this.pos)) && (i = !1);var r = this.input.charCodeAt(this.pos);46 !== r || i || (++this.pos, this.readInt(10), r = this.input.charCodeAt(this.pos)), 69 !== r && 101 !== r || i || (43 !== (r = this.input.charCodeAt(++this.pos)) && 45 !== r || ++this.pos, null === this.readInt(10) && this.raise(t, "Invalid number")), f(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");var n = this.input.slice(t, this.pos),
            s = i ? parseInt(n, 8) : parseFloat(n);return this.finishToken(k.num, s);
      }, xe.readCodePoint = function () {
        var e;if (123 === this.input.charCodeAt(this.pos)) {
          this.options.ecmaVersion < 6 && this.unexpected();var t = ++this.pos;e = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos), ++this.pos, e > 1114111 && this.invalidStringToken(t, "Code point out of bounds");
        } else e = this.readHexChar(4);return e;
      }, xe.readString = function (e) {
        for (var t = "", i = ++this.pos;;) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");var r = this.input.charCodeAt(this.pos);if (r === e) break;92 === r ? (t += this.input.slice(i, this.pos), t += this.readEscapedChar(!1), i = this.pos) : (A(r) && this.raise(this.start, "Unterminated string constant"), ++this.pos);
        }return t += this.input.slice(i, this.pos++), this.finishToken(k.string, t);
      };var be = {};xe.tryReadTemplateToken = function () {
        this.inTemplateElement = !0;try {
          this.readTmplToken();
        } catch (e) {
          if (e !== be) throw e;this.readInvalidTemplateToken();
        }this.inTemplateElement = !1;
      }, xe.invalidStringToken = function (e, t) {
        if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw be;this.raise(e, t);
      }, xe.readTmplToken = function () {
        for (var e = "", t = this.pos;;) {
          this.pos >= this.input.length && this.raise(this.start, "Unterminated template");var i = this.input.charCodeAt(this.pos);if (96 === i || 36 === i && 123 === this.input.charCodeAt(this.pos + 1)) return this.pos !== this.start || this.type !== k.template && this.type !== k.invalidTemplate ? (e += this.input.slice(t, this.pos), this.finishToken(k.template, e)) : 36 === i ? (this.pos += 2, this.finishToken(k.dollarBraceL)) : (++this.pos, this.finishToken(k.backQuote));if (92 === i) e += this.input.slice(t, this.pos), e += this.readEscapedChar(!0), t = this.pos;else if (A(i)) {
            switch (e += this.input.slice(t, this.pos), ++this.pos, i) {case 13:
                10 === this.input.charCodeAt(this.pos) && ++this.pos;case 10:
                e += "\n";break;default:
                e += String.fromCharCode(i);}this.options.locations && (++this.curLine, this.lineStart = this.pos), t = this.pos;
          } else ++this.pos;
        }
      }, xe.readInvalidTemplateToken = function () {
        for (; this.pos < this.input.length; this.pos++) switch (this.input[this.pos]) {case "\\":
            ++this.pos;break;case "$":
            if ("{" !== this.input[this.pos + 1]) break;case "`":
            return this.finishToken(k.invalidTemplate, this.input.slice(this.start, this.pos));}this.raise(this.start, "Unterminated template");
      }, xe.readEscapedChar = function (e) {
        var t = this.input.charCodeAt(++this.pos);switch (++this.pos, t) {case 110:
            return "\n";case 114:
            return "\r";case 120:
            return String.fromCharCode(this.readHexChar(2));case 117:
            return ye(this.readCodePoint());case 116:
            return "\t";case 98:
            return "\b";case 118:
            return "\v";case 102:
            return "\f";case 13:
            10 === this.input.charCodeAt(this.pos) && ++this.pos;case 10:
            return this.options.locations && (this.lineStart = this.pos, ++this.curLine), "";default:
            if (t >= 48 && t <= 55) {
              var i = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                  r = parseInt(i, 8);return r > 255 && (i = i.slice(0, -1), r = parseInt(i, 8)), this.pos += i.length - 1, t = this.input.charCodeAt(this.pos), "0" === i && 56 != t && 57 != t || !this.strict && !e || this.invalidStringToken(this.pos - 1 - i.length, e ? "Octal literal in template string" : "Octal literal in strict mode"), String.fromCharCode(r);
            }return String.fromCharCode(t);}
      }, xe.readHexChar = function (e) {
        var t = this.pos,
            i = this.readInt(16, e);return null === i && this.invalidStringToken(t, "Bad character escape sequence"), i;
      }, xe.readWord1 = function () {
        this.containsEsc = !1;for (var e = "", t = !0, i = this.pos, r = this.options.ecmaVersion >= 6; this.pos < this.input.length;) {
          var n = this.fullCharCodeAtPos();if (m(n, r)) this.pos += n <= 65535 ? 1 : 2;else {
            if (92 !== n) break;this.containsEsc = !0, e += this.input.slice(i, this.pos);var s = this.pos;117 != this.input.charCodeAt(++this.pos) && this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"), ++this.pos;var a = this.readCodePoint();(t ? f : m)(a, r) || this.invalidStringToken(s, "Invalid Unicode escape"), e += ye(a), i = this.pos;
          }t = !1;
        }return e + this.input.slice(i, this.pos);
      }, xe.readWord = function () {
        var e = this.readWord1(),
            t = k.name;return this.keywords.test(e) && (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + e), t = b[e]), this.finishToken(t, e);
      };var _e,
          ke,
          Ce,
          Se = "5.5.3";function Ae(e, t) {
        return new F(t, e).parse();
      }function we(e, t, i) {
        var r = new F(i, e, t);return r.nextToken(), r.parseExpression();
      }function Ee(e, t) {
        return new F(t, e);
      }function Ie(e, t, i) {
        _e = e, ke = t, Ce = i;
      }
    }, function (e, t, i) {
      var r = this && this.__assign || Object.assign || function (e) {
        for (var t, i = 1, r = arguments.length; i < r; i++) for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);return e;
      },
          n = this && this.__importStar || function (e) {
        if (e && e.__esModule) return e;var t = {};if (null != e) for (var i in e) Object.hasOwnProperty.call(e, i) && (t[i] = e[i]);return t.default = e, t;
      },
          s = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : { default: e };
      };Object.defineProperty(t, "__esModule", { value: !0 });var a = n(i(9)),
          o = s(i(8)),
          h = s(i(5)),
          c = s(i(1)),
          u = s(i(4)),
          p = s(i(2)),
          l = i(0),
          d = { es5: 5, es2015: 6, es2016: 7, es2017: 8, es2018: 9, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9 },
          f = function () {
        function e(e, t) {
          void 0 === t && (t = {}), this.options = r({ ecmaVersion: 5, sourceType: "module" }, t), this.options.ecmaVersion = d[this.options.ecmaVersion], this.code = e, this.ast = a.parse(this.code, this.options), this.evaluateMap = o.default[this.options.ecmaVersion];
        }return e.prototype.runInContext = function (e) {
          void 0 === e && (e = {});var t = this.createGlobalScope(e),
              i = new h.default(null, t, this.evaluateMap);if ("module" === this.options.sourceType) {
            var r = {},
                n = { exports: r };return t.declaration.exports = l.createSimpleValue(r), t.declaration.module = l.createSimpleValue(n), i.evaluate(this.ast), n.exports;
          }return i.evaluate(this.ast);
        }, e.prototype.createGlobalScope = function (e) {
          var t = new c.default("function");t.sandbox = new u.default(e);for (var i = Object.keys(e), r = 0, n = Object.keys(p.default); r < n.length; r++) {
            var s = n[r];i.indexOf(s) < 0 && (t.declaration[s] = l.createSimpleValue(p.default[s]));
          }return t;
        }, e;
      }();t.default = f;
    }, function (e, t, i) {
      var r = this && this.__importDefault || function (e) {
        return e && e.__esModule ? e : { default: e };
      };Object.defineProperty(t, "__esModule", { value: !0 });var n = r(i(10));t.runInContext = function (e, t, i) {
        return new n.default(e, i).runInContext(t);
      }, t.createContext = function (e) {
        return void 0 === e && (e = {}), e;
      };
    }]));
  }, xvLd: function (e, t, i) {
    "use strict";

    Object.defineProperty(t, "__esModule", { value: !0 }), t.CXConsole = void 0;var r = function () {
      function e() {
        this._logLog = !1;
      }return e.prototype.log = function (e) {
        this._logLog && console.log(e);
      }, e.prototype.warn = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];console.warn.apply(console.warn, arguments);
      }, e.prototype.debug = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];console.debug.apply(console.debug, arguments);
      }, e.prototype.error = function () {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];console.error.apply(console.error, arguments);
      }, Object.defineProperty(e.prototype, "logLog", { set: function (e) {
          this._logLog = e;
        }, enumerable: !1, configurable: !0 }), e;
    }();t.CXConsole = r;
  } }));
//# sourceMappingURL=qingjs-wxapp.js.map