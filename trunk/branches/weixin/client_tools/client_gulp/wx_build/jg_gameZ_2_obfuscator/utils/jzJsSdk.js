var k = wx.$k;
!function (t) {
  var e = {};function o(n) {
    if (e[n]) return e[n].exports;var r = e[n] = { i: n, l: !1, exports: {} };return t[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports;
  }o.m = t, o.c = e, o.d = function (t, e, n) {
    o.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
  }, o.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, o.t = function (t, e) {
    if (1 & e && (t = o(t)), 8 & e) return t;if (4 & e && "object" == typeof t && t && t.__esModule) return t;var n = Object.create(null);if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var r in t) o.d(n, r, function (e) {
      return t[e];
    }.bind(null, r));return n;
  }, o.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return o.d(e, "a", e), e;
  }, o.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, o.p = "", o(o.s = 4);
}([function (t, e, o) {
  function n(t, e) {
    t.constructor == String ? t = (e && "binary" === e.encoding ? a : i).stringToBytes(t) : s(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || t.constructor === Uint8Array || (t = t.toString());for (var o = r.bytesToWords(t), c = (t = 8 * t.length, 1732584193), p = -271733879, u = -1732584194, l = 271733878, d = 0; d < o.length; d++) o[d] = 16711935 & (o[d] << 8 | o[d] >>> 24) | 4278255360 & (o[d] << 24 | o[d] >>> 8);o[t >>> 5] |= 128 << t % 32, o[14 + (64 + t >>> 9 << 4)] = t;var f = n._ff,
        y = n._gg,
        g = n._hh,
        h = n._ii;for (d = 0; d < o.length; d += 16) {
      var v = c,
          _ = p,
          O = u,
          I = l;c = f(c, p, u, l, o[d + 0], 7, -680876936), l = f(l, c, p, u, o[d + 1], 12, -389564586), u = f(u, l, c, p, o[d + 2], 17, 606105819), p = f(p, u, l, c, o[d + 3], 22, -1044525330);c = f(c, p, u, l, o[d + 4], 7, -176418897), l = f(l, c, p, u, o[d + 5], 12, 1200080426), u = f(u, l, c, p, o[d + 6], 17, -1473231341), p = f(p, u, l, c, o[d + 7], 22, -45705983), c = f(c, p, u, l, o[d + 8], 7, 1770035416), l = f(l, c, p, u, o[d + 9], 12, -1958414417), u = f(u, l, c, p, o[d + 10], 17, -42063), p = f(p, u, l, c, o[d + 11], 22, -1990404162), c = f(c, p, u, l, o[d + 12], 7, 1804603682), l = f(l, c, p, u, o[d + 13], 12, -40341101), u = f(u, l, c, p, o[d + 14], 17, -1502002290), c = y(c, p = f(p, u, l, c, o[d + 15], 22, 1236535329), u, l, o[d + 1], 5, -165796510), l = y(l, c, p, u, o[d + 6], 9, -1069501632), u = y(u, l, c, p, o[d + 11], 14, 643717713), p = y(p, u, l, c, o[d + 0], 20, -373897302), c = y(c, p, u, l, o[d + 5], 5, -701558691), l = y(l, c, p, u, o[d + 10], 9, 38016083), u = y(u, l, c, p, o[d + 15], 14, -660478335), p = y(p, u, l, c, o[d + 4], 20, -405537848), c = y(c, p, u, l, o[d + 9], 5, 568446438), l = y(l, c, p, u, o[d + 14], 9, -1019803690), u = y(u, l, c, p, o[d + 3], 14, -187363961), p = y(p, u, l, c, o[d + 8], 20, 1163531501), c = y(c, p, u, l, o[d + 13], 5, -1444681467), l = y(l, c, p, u, o[d + 2], 9, -51403784), u = y(u, l, c, p, o[d + 7], 14, 1735328473), c = g(c, p = y(p, u, l, c, o[d + 12], 20, -1926607734), u, l, o[d + 5], 4, -378558), l = g(l, c, p, u, o[d + 8], 11, -2022574463), u = g(u, l, c, p, o[d + 11], 16, 1839030562), p = g(p, u, l, c, o[d + 14], 23, -35309556), c = g(c, p, u, l, o[d + 1], 4, -1530992060), l = g(l, c, p, u, o[d + 4], 11, 1272893353), u = g(u, l, c, p, o[d + 7], 16, -155497632), p = g(p, u, l, c, o[d + 10], 23, -1094730640), c = g(c, p, u, l, o[d + 13], 4, 681279174), l = g(l, c, p, u, o[d + 0], 11, -358537222), u = g(u, l, c, p, o[d + 3], 16, -722521979), p = g(p, u, l, c, o[d + 6], 23, 76029189), c = g(c, p, u, l, o[d + 9], 4, -640364487), l = g(l, c, p, u, o[d + 12], 11, -421815835), u = g(u, l, c, p, o[d + 15], 16, 530742520), c = h(c, p = g(p, u, l, c, o[d + 2], 23, -995338651), u, l, o[d + 0], 6, -198630844), l = h(l, c, p, u, o[d + 7], 10, 1126891415), u = h(u, l, c, p, o[d + 14], 15, -1416354905), p = h(p, u, l, c, o[d + 5], 21, -57434055), c = h(c, p, u, l, o[d + 12], 6, 1700485571), l = h(l, c, p, u, o[d + 3], 10, -1894986606), u = h(u, l, c, p, o[d + 10], 15, -1051523), p = h(p, u, l, c, o[d + 1], 21, -2054922799), c = h(c, p, u, l, o[d + 8], 6, 1873313359), l = h(l, c, p, u, o[d + 15], 10, -30611744), u = h(u, l, c, p, o[d + 6], 15, -1560198380), p = h(p, u, l, c, o[d + 13], 21, 1309151649), c = h(c, p, u, l, o[d + 4], 6, -145523070), l = h(l, c, p, u, o[d + 11], 10, -1120210379), u = h(u, l, c, p, o[d + 2], 15, 718787259), p = h(p, u, l, c, o[d + 9], 21, -343485551), c = c + v >>> 0, p = p + _ >>> 0, u = u + O >>> 0, l = l + I >>> 0;
    }return r.endian([c, p, u, l]);
  }var r, i, s, a;r = o(2), i = o(1).utf8, s = o(3), a = o(1).bin, n._ff = function (t, e, o, n, r, i, s) {
    return ((s = t + (e & o | ~e & n) + (r >>> 0) + s) << i | s >>> 32 - i) + e;
  }, n._gg = function (t, e, o, n, r, i, s) {
    return ((s = t + (e & n | o & ~n) + (r >>> 0) + s) << i | s >>> 32 - i) + e;
  }, n._hh = function (t, e, o, n, r, i, s) {
    return ((s = t + (e ^ o ^ n) + (r >>> 0) + s) << i | s >>> 32 - i) + e;
  }, n._ii = function (t, e, o, n, r, i, s) {
    return ((s = t + (o ^ (e | ~n)) + (r >>> 0) + s) << i | s >>> 32 - i) + e;
  }, n._blocksize = 16, n._digestsize = 16, t.exports = function (t, e) {
    if (null == t) throw new Error("Illegal argument " + t);return t = r.wordsToBytes(n(t, e)), e && e.asBytes ? t : e && e.asString ? a.bytesToString(t) : r.bytesToHex(t);
  };
}, function (t, e) {
  var o = { utf8: { stringToBytes: function (t) {
        return o.bin.stringToBytes(unescape(encodeURIComponent(t)));
      }, bytesToString: function (t) {
        return decodeURIComponent(escape(o.bin.bytesToString(t)));
      } }, bin: { stringToBytes: function (t) {
        for (var e = [], o = 0; o < t.length; o++) e.push(255 & t.charCodeAt(o));return e;
      }, bytesToString: function (t) {
        for (var e = [], o = 0; o < t.length; o++) e.push(String.fromCharCode(t[o]));return e.join("");
      } } };t.exports = o;
}, function (t, e) {
  var o, n;o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = { rotl: function (t, e) {
      return t << e | t >>> 32 - e;
    }, rotr: function (t, e) {
      return t << 32 - e | t >>> e;
    }, endian: function (t) {
      if (t.constructor == Number) return 16711935 & n.rotl(t, 8) | 4278255360 & n.rotl(t, 24);for (var e = 0; e < t.length; e++) t[e] = n.endian(t[e]);return t;
    }, randomBytes: function (t) {
      for (var e = []; 0 < t; t--) e.push(Math.floor(256 * Math.random()));return e;
    }, bytesToWords: function (t) {
      for (var e = [], o = 0, n = 0; o < t.length; o++, n += 8) e[n >>> 5] |= t[o] << 24 - n % 32;return e;
    }, wordsToBytes: function (t) {
      for (var e = [], o = 0; o < 32 * t.length; o += 8) e.push(t[o >>> 5] >>> 24 - o % 32 & 255);return e;
    }, bytesToHex: function (t) {
      for (var e = [], o = 0; o < t.length; o++) e.push((t[o] >>> 4).toString(16)), e.push((15 & t[o]).toString(16));return e.join("");
    }, hexToBytes: function (t) {
      for (var e = [], o = 0; o < t.length; o += 2) e.push(parseInt(t.substr(o, 2), 16));return e;
    }, bytesToBase64: function (t) {
      for (var e = [], n = 0; n < t.length; n += 3) for (var r = t[n] << 16 | t[n + 1] << 8 | t[n + 2], i = 0; i < 4; i++) 8 * n + 6 * i <= 8 * t.length ? e.push(o.charAt(r >>> 6 * (3 - i) & 63)) : e.push("=");return e.join("");
    }, base64ToBytes: function (t) {
      t = t.replace(/[^A-Z0-9+\/]/gi, "");for (var e = [], n = 0, r = 0; n < t.length; r = ++n % 4) 0 != r && e.push((o.indexOf(t.charAt(n - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | o.indexOf(t.charAt(n)) >>> 6 - 2 * r);return e;
    } }, t.exports = n;
}, function (t, e) {
  function o(t) {
    return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
  }
  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */t.exports = function (t) {
    return null != t && (o(t) || "function" == typeof (e = t).readFloatLE && "function" == typeof e.slice && o(e.slice(0, 0)) || !!t._isBuffer);var e;
  };
}, function (t, e, o) {
  "use strict";

  var n, r, i;o.r(e), (e = n = n || {})[e.WXMG = 2] = "WXMG", e[e.OPPO = 3] = "OPPO", e[e.VIVO = 4] = "VIVO", (e = r = r || {}).createRole = "createRole", e.upRoleLevel = "upRoleLevel", e.selectServer = "selectServer", (e = i = i || {}).INIT_SUCCESS = "init_success", e.INIT_FAIL = "init_fail", e.LOGIN_SUCCESS = "login_success", e.LOGIN_FAIL = "login_fail", e.PAY_SUCCESS = "pay_success", e.PAY_FAIL = "pay_fail";var s = (a.sdk_dev_url = "https://sdkapi.jiuzi.com", a.sdk_test_url = "https://dev-sdk.hmdxyx.cn", a.sdk_url = "https://mgame.hainanjiuzi.com", a.track_url = "", a.init_url = "/sdk/device/init", a.login_url = "/auth/ar", a.order_url = "/sdk/order", a.pay_url = "/wx/payNotify", a.role_report_url = "/user/rd", a.select_server_url = "/user/chserver", a.platExtInfo = {}, a.init_status = 0, a.jzDeviceInfo = {}, a.deviceid = 0, a.deviceno = "", a.androidid = "", a.devidfv = "", a.userInfo = {}, a.token = "", a.sessionKey = "", a.adExtInfo = {}, a.q1$687Z = {}, a.switchZFlag = !1, a.system = "", a.curApiParams = {}, a);function a() {}var c = (Object.defineProperty(p, "inst", { get: function () {
      return p._inst = null == p._inst ? new p() : p._inst;
    }, enumerable: !1, configurable: !0 }), p.prototype.init = function (t) {
    this.isShowLog = t || !1;
  }, p.prototype.error = function (t) {
    for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];this.isShowLog && console.error(t, e);
  }, p.prototype.log = function (t) {
    for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];this.isShowLog && console.log(t, e);
  }, p.prototype.warn = function (t) {
    for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];this.isShowLog && console.warn(t, e);
  }, p._inst = null, p);function p() {
    this.isShowLog = !1;
  }e = o(0);var u = o.n(e),
      l = (d.isObject = function (t) {
    return "[Object Object]" === Object.prototype.toString.call(t);
  }, d.objKeySort = function (t) {
    for (var e = Object.keys(t).sort(), o = {}, n = 0; n < e.length; n++) o[e[n]] = t[e[n]];return o;
  }, d.procRequestParas = function (t) {
    var e,
        o,
        n = Object.keys(t).sort(),
        r = [];for (e in n) void 0 !== t[n[e]] ? (o = (o = (o = (o = (o = (o = encodeURIComponent(t[n[e]].toString())).replace(/!/g, "%21")).replace(/\*/g, "%2A")).replace(/\'/g, "%27")).replace(/\(/g, "%28")).replace(/\)/g, "%29"), r.push(n[e] + "=" + o)) : r.push(n[e] + "=");return r.join("&");
  }, d.judgeClient = function () {
    var t = "";return (/(iPhone|iPad|iPod|iOS)/i.test(s.system) ? t = "ios" : /(Android)/i.test(s.system) && (t = "android"), t
    );
  }, d.getSign = function (t) {
    return t = this.objKeySort(t), t = this.procRequestParas(t), t = decodeURIComponent(t), u()(t);
  }, d);function d() {}var f = (y.post = function (t, e, o, n) {
    var r, i;void 0 === n && (n = !1), t && (r = null, n ? r = { time: Math.round(Date.now() / 1e3), stamp: s.curFlag } : (r = { token: s.token, time: Math.round(Date.now() / 1e3) }, r = Object.assign({}, s.initOps, e, r), s.curApiParams = r, r = l.objKeySort(r), r = l.procRequestParas(r), r = (r = decodeURIComponent(r)) + "&sign=" + u()(r), (i = new XMLHttpRequest()).open("POST", t, !1), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;"), i.onreadystatechange = function () {
      4 != i.readyState || 200 != i.status && 304 != i.status || o.call(this, JSON.parse(i.responseText));
    }, i.onerror = function () {
      console.log(i.response);
    }, i.send(r)));
  }, y);function y() {}var g = function () {
    return (g = Object.assign || function (t) {
      for (var e, o = 1, n = arguments.length; o < n; o++) for (var r in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);return t;
    }).apply(this, arguments);
  };h.prototype.init = function () {
    var t = this;c.inst.log("[jzsdk] 开始初始化sdk");var e = g(g(g({}, s.jzDeviceInfo), s.initOps), { adInfo: JSON.stringify(s.adExtInfo) });f.post(s.sdk_url + s.init_url, e, function (e) {
      return 200 !== e.statusCode ? (c.inst.error("[jzsdk] 初始化失败", e), t.showToast("初始化失败", "error"), void s.callback(i.INIT_FAIL)) : (c.inst.log("[jzsdk] 初始化成功", e), s.jzDeviceInfo.deviceno = e.data.deviceno, s.deviceno = e.data.deviceno, s.deviceid = e.data.deviceid, s.init_status = 1, t.saveDeviceNo(), s.callback(i.INIT_SUCCESS), void t.login());
    }, !1);
  }, h.prototype.login = function () {
    c.inst.log("[jzsdk] 开始登录");var t = { plat: s.initOps.platId, deviceno: s.deviceno, deviceid: s.deviceid, params: JSON.stringify({ code: s.platExtInfo.code }), adInfo: JSON.stringify(s.adExtInfo) };f.post(s.sdk_url + s.login_url, t, function (t) {
      if (200 !== t.statusCode) return c.inst.error("[jzsdk] 查询登录失败", t), s.callback(i.LOGIN_FAIL, "登录失败"), f.post(s.sdk_url + s.track_url, { url: s.login_url, data: JSON.stringify(s.curApiParams), msg: JSON.stringify(t), flag: "登录接口失败" }, function () {}, !0), void s.callback(i.LOGIN_FAIL);c.inst.log("[jzsdk] 查询登录成功", t), s.userInfo = t.data, f.post(s.sdk_url + s.track_url, { url: s.login_url, data: JSON.stringify(s.curApiParams), msg: JSON.stringify(t), flag: "登录接口成功" }, function () {}, !0), t = t.data, s.uid = t.uid, s.token = t.token, s.sessionKey = t.sessionKey, t = { uid: t.uid, token: t.token, time: t.time }, s.callback(i.LOGIN_SUCCESS, t);
    });
  }, h.prototype.roleReport = function (t, e) {
    void 0 === e && (e = "");var o = g({ gid: s.initOps.gid, uid: s.uid }, t);switch (e) {case r.upRoleLevel:
        o.roletype = 5;break;case r.createRole:
        o.roletype = 2;break;case r.selectServer:
        o.roletype = 1;}f.post(s.sdk_url + s.role_report_url, o, function (t) {
      200 === t.statusCode ? c.inst.log("[jzsdk] 角色数据上报成功", t) : c.inst.error("[jzsdk] 角色数据上报失败" + t);
    }, !1);
  }, h.prototype.submitData = function (t, e) {
    var o = g({ gid: s.initOps.gid, uid: s.uid }, e);switch (t) {case r.upRoleLevel:
        o.roletype = 5;break;case r.createRole:
        o.roletype = 2;break;case r.selectServer:
        o.roletype = 1;}
  }, h.prototype.order = function (t) {
    c.inst.log("cp下单传值", t);
  }, h.prototype.createOrder = function (t) {
    var e = this;if (c.inst.log("[jzsdk] 调起下单", t), s.uid) {
      if (s.uid !== t.uid) return c.inst.log("[jzsdk] 登录账号不一致", s.uid, t.uid), void this.showToast("生成订单失败！", "error");t = g(g(g({}, t), s.jzDeviceInfo), { token: s.token, gid: s.initOps.gid, ctype: s.initOps.ctype }), f.post(s.sdk_url + s.order_url, t, function (t) {
        return 200 != t.statusCode ? (e.showToast("生成订单失败", "error"), void c.inst.log("[jzsdk] 生成订单失败", t)) : (c.inst.log("[jzsdk] 生成订单成功", t), s.jzOrderInfo = t.data, c.inst.log(s.jzOrderInfo), void e.pay());
      });
    } else c.inst.log("[jzsdk] 还未登录，无法拉起订单");
  }, h.prototype.pay = function () {}, h.prototype.jump = function (t) {
    c.inst.error("[jzsdk] 跳转实体");
  }, h.prototype.getUuid = function (t, e) {
    void 0 === e && (e = 0);var o,
        n,
        r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
        i = [];if (t = t || r.length, e) for (o = 0; o < e; o++) i[o] = r[0 | Math.random() * t];else for (i[8] = i[13] = i[18] = i[23] = "-", i[14] = "4", o = 0; o < 36; o++) i[o] || (n = 0 | 16 * Math.random(), i[o] = r[19 == o ? 3 & n | 8 : n]);return i.join("");
  }, h.prototype.saveDeviceNo = function () {
    c.inst.log("保存deviceno", s.deviceno);
  }, h.prototype.showToast = function (t, e) {
    console.log(t, e);
  }, o = h;function h() {}var v,
      _,
      O = ((v = function (t, e) {
    return (v = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    })(t, e);
  }, function (t, e) {
    function o() {
      this.constructor = t;
    }v(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
  })(I, _ = o), I.prototype.getAdParams = function () {
    var t = wx.getLaunchOptionsSync();wx.onShow(function (e) {
      t = e;
    });var e = (n = t.query).adver,
        o = n.vid,
        n = n.wxAdInfo;e ? (this.adver = e, wx.setStorageSync(this.storageKey, e)) : this.adver = wx.getStorageSync(this.storageKey) || "", this.vid = o, this.wxAdInfo = n, n = { vid: this.vid, wxAdInfo: this.wxAdInfo, adver: this.adver }, Object.assign(s.platExtInfo, n);
  }, I.prototype.init = function () {
    s.system = wx.getSystemInfoSync().system, this.getWxSystemInfo(), _.prototype.init.call(this);
  }, I.prototype.showToast = function (t, e) {
    wx.showToast({ title: t, icon: e });
  }, I.prototype.login = function () {
    var t = this;wx.getSetting({ success: function (e) {
        e.authSetting["scope.userInfo"], t.loginAuth();
      }, fail: function () {
        t.loginAuth();
      } });
  }, I.prototype.loginAuth = function () {
    var t = this;wx.login({ success: function (e) {
        var o;e.code ? (o = { code: e.code }, Object.assign(s.platExtInfo, o), wx.showToast({ title: "授权登录成功" }), _.prototype.login.call(t)) : (wx.showToast({ title: "登录失败！", icon: "error" }), c.inst.log("[jzsdk] 微信授权登陆失败", e), s.callback(i.LOGIN_FAIL));
      }, fail: function (t) {
        wx.showToast({ title: "授权登录失败", icon: "error" }), c.inst.log("[jzsdk] 微信授权登录失败", t), s.callback(i.LOGIN_FAIL);
      } });
  }, I.prototype.order = function (t) {
    var e = this;wx.checkSession({ success: function () {
        e.createOrder(t);
      }, fail: function () {
        e.login(), s.uid && e.createOrder(t);
      } });
  }, I.prototype.createOrder = function (t) {
    try {
      this.lostOrderId = wx.getStorageSync("jzPayOrderLogs") || [], c.inst.log("支付失败的订单信息：", this.lostOrderId), this.lostOrderId && 0 < this.lostOrderId.length && (c.inst.log("通知失败的重新通知：", this.lostOrderId), this.replyOrder(this.lostOrderId[0]), this.lostOrderId.splice(0, 1));
    } catch (t) {
      c.inst.log("重新通知发货失败：", t);
    }_.prototype.createOrder.call(this, t);
  }, I.prototype.pay = function () {
    if (_.prototype.pay.call(this), c.inst.log("调起支付"), "midashi" === s.jzOrderInfo.p_extends.type) {
      if (c.inst.log(s.jzOrderInfo.p_extends), Number(s.jzOrderInfo.p_extends.balance) >= s.jzOrderInfo.money) return c.inst.log("[jzsdk] 米大师掉单处理"), void this.balancePay();this.platPay();
    } else this.otherPay();
  }, I.prototype.balancePay = function () {
    var t = this;wx.showModal({ title: "支付提示", showCancel: !1, confirmText: "我知道了", content: "您剩余" + s.jzOrderInfo.p_extends.balance + "个游戏币未消费，本次支付扣除" + s.jzOrderInfo.money + "个游戏币", success: function (e) {
        var o;e.confirm ? (o = s.jzOrderInfo.order_num, t.replyOrder(o)) : e.cancel && t.platPay();
      } });
  }, I.prototype.platPay = function () {
    var t = this,
        e = 0;0 !== s.initOps.mode && 1 !== s.initOps.mode || (e = 1), wx.requestMidasPayment({ offerId: s.jzOrderInfo.p_extends.offerId, mode: "game", platform: "android", currencyType: "CNY", buyQuantity: 10 * s.jzOrderInfo.money, env: e, zoneId: "1", success: function (e) {
        if ("requestMidasPayment:ok" == e.errMsg) {
          var o = s.jzOrderInfo.order_num;return t.replyOrder(o), c.inst.log("[jzsdk] 米大师支付成功"), void s.callback(i.PAY_SUCCESS, "支付成功");
        }c.inst.log("[jzsdk] 米大师支付失败", e), s.callback(i.PAY_FAIL, e.errMsg);
      }, fail: function (t) {
        -1 !== t.errMsg.indexOf("用户取消") ? s.callback(i.PAY_FAIL, "用户取消支付") : s.callback(i.PAY_FAIL, "支付失败:" + JSON.stringify(t)), c.inst.log("[jzsdk] 米大师支付失败", t);
      } });
  }, I.prototype.otherPay = function () {
    "mini_program" === s.jzOrderInfo.p_extends.type ? this.minipPay() : this.jump("pay");
  }, I.prototype.replyOrder = function (t) {
    var e = this;c.inst.log("[jzsdk] 米大师支付完毕，通知服务器发货");var o = { gid: s.initOps.gid, uid: s.uid, orderId: t, token: s.token, sessionKey: s.sessionKey };o.sign = l.getSign(o), wx.request({ url: s.sdk_url + s.pay_url, data: o, method: "POST", header: { "Content-Type": "application/x-www-form-urlencoded;" }, success: function (t) {
        200 != t.statusCode || 200 != t.data.statusCode ? c.inst.log("[jzsdk] 通知发货失败", t.data.message) : c.inst.log("[jzsdk]", "发货成功", t);
      }, fail: function (o) {
        c.inst.error("[jzsdk] 通知发货失败", o), e.lostOrderId.unshift(t), wx.setStorageSync("jzPayOrderLogs", e.lostOrderId);
      } });
  }, I.prototype.getWxSystemInfo = function () {
    this.initUuid(), wx.getSystemInfo({ success: function (t) {
        s.jzDeviceInfo = { phoneModel: t.brand + "-" + t.model, platform: t.platform, sysOs: t.system, version: t.version, screenSize: t.screenWidth + "*" + t.screenHeight, androidid: s.androidid, devidfv: s.devidfv, type: "xyx" + l.judgeClient() }, s.deviceno && (s.jzDeviceInfo.deviceno = s.deviceno), "ios" === l.judgeClient() ? s.jzDeviceInfo.type = "weixinios" : s.jzDeviceInfo.type = "weixinandroid";
      } });
  }, I.prototype.initUuid = function () {
    var t = wx.getStorageSync("plat_uuid");"ios" === l.judgeClient() ? (t = t || this.getUuid(36), s.devidfv = t) : (t = t || this.getUuid(36, 16), s.androidid = t), wx.setStorageSync("plat_uuid", t), (t = wx.getStorageSync("plat_deviceno")) && (s.deviceno = t);
  }, I.prototype.saveDeviceNo = function () {
    s.deviceno && wx.setStorageSync("plat_deviceno", s.deviceno);
  }, I.prototype.minipPay = function () {
    wx.navigateToMiniProgram({ appId: s.jzOrderInfo.p_extends.app_id, extraData: { order_num: s.jzOrderInfo.order_num, pay_way: s.jzOrderInfo.p_extends.type }, success: function (t) {
        console.log(t);
      }, fail: function (t) {
        console.log(t);
      } });
  }, I.prototype.jump = function (t) {
    var e = { gid: s.initOps.gid, token: s.token, type: t, uid: s.uid, ctype: s.ctype },
        o = "跳转";"pay" === t ? (e.order_num = s.jzOrderInfo.order_num, o = "游戏充值") : "bind_account" === t && (o = "绑定手机"), e = l.objKeySort(e), e = l.procRequestParas(e), e = decodeURIComponent(e), c.inst.log("jump", e), wx.openCustomerServiceConversation({ sendMessagePath: e, sendMessageTitle: o, sessionFrom: "turnGame-" + s.initOps.gid, showMessageCard: !0 });
  }, I);function I() {
    var t = _.call(this) || this;return t.storageKey = s.initOps.gkey, t.getAdParams(), t;
  }var m,
      S,
      j = ((m = function (t, e) {
    return (m = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    })(t, e);
  }, function (t, e) {
    function o() {
      this.constructor = t;
    }m(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
  })(k, S = o), k.prototype.init = function () {
    S.prototype.init.call(this);
  }, k.prototype.login = function () {
    this._getSystemInfo(), this.loginAuth();
  }, k.prototype.pay = function () {
    S.prototype.pay.call(this), this.platPay();
  }, k.prototype.createOrder = function (t) {
    this.payInfo = t, this.checkVersion(1056) && S.prototype.createOrder.call(this, t);
  }, k.prototype.platPay = function () {
    var t;this.checkVersion(1056) && (t = 100 * parseInt(String(this.payInfo.money)), t = { productDesc: this.payInfo.pdesc, appId: s.jzPayInfo.appId, orderAmount: t, productName: this.payInfo.pname, cpOrderNumber: s.jzPayInfo.orderId, notifyUrl: s.jzPayInfo.notifyUrl, vivoSignature: s.jzPayInfo.vivoSignature }, qg.pay({ orderInfo: JSON.stringify(t), success: function (t) {
        s.callback(i.PAY_SUCCESS, "支付成功"), c.inst.log("[jzsdk] vivo支付成功", t);
      }, fail: function (t) {
        s.callback(i.PAY_FAIL, "支付失败"), c.inst.error("[jzsdk] vivo支付失败", t);
      } }));
  }, k.prototype.checkVersion = function (t) {
    return this.platformVersion >= (t = void 0 === t ? 1056 : t) || (c.inst.error("[jzsdk] vivo运行版本号要在1056以上"), !1);
  }, k.prototype._getSystemInfo = function () {
    var t,
        e = qg.getSystemInfoSync();e && (t = { platId: s.initOps.platId, gid: s.initOps.gid, phone_model: e.brand + "-" + e.model, osType: e.osType, osVersionCode: e.osVersionCode, platformVersionName: e.platformVersionName, platformVersionCode: e.platformVersionCode, language: e.language, wifiSignal: e.wifiSignal, isHole: e.isHole, hole_x: e.hole_x, hole_y: e.hole_y, hole_radius: e.hole_radius, isNotch: e.isNotch, statusBarHeight: e.statusBarHeight }, this.platformVersion = e.platformVersionCode, f.post(s.init_url, t, function (t) {
      t.result ? c.inst.log("[jzsdk] 设备激活成功", t) : c.inst.error("[jzsdk] 设备激活失败", t);
    }));
  }, k.prototype.loginAuth = function () {
    var t = this,
        e = this;1053 <= qg.getSystemInfoSync().platformVersionCode ? qg.login().then(function (o) {
      var n = o.data ? o.data.token : "unkown";s.platExtInfo = { token: n, ctype: s.ctype }, e.loginToken = n, c.inst.log("[jzsdk] vivo登录成功", o), S.prototype.login.call(t);
    }, function (t) {
      c.inst.error("[jzsdk] vivo登陆失败", t);
    }) : c.inst.error("[jzsdk] login: vivo 运行版本号要在1053以上");
  }, k.prototype.saveDeviceNo = function () {}, k);function k() {
    return S.call(this) || this;
  }w = function (t, e) {
    return (w = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    })(t, e);
  }, e = function (t, e) {
    function o() {
      this.constructor = t;
    }w(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
  };var w,
      b,
      x = function () {
    return (x = Object.assign || function (t) {
      for (var e, o = 1, n = arguments.length; o < n; o++) for (var r in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);return t;
    }).apply(this, arguments);
  },
      z = (e(P, b = o), P.prototype.init = function () {
    b.prototype.init.call(this);
  }, P.prototype.login = function () {
    this._getSystemInfo(), this.loginAuth();
  }, P.prototype.pay = function () {
    b.prototype.pay.call(this), this.platPay();
  }, P.prototype.createOrder = function (t) {
    t = x(x({}, t), { token: this.loginToken }), b.prototype.createOrder.call(this, t);
  }, P.prototype.platPay = function () {
    qg.pay({ appId: s.jzPayInfo.appId, token: this.loginToken, orderNo: s.jzPayInfo.orderId, timestamp: s.jzPayInfo.created_at, paySign: s.jzPayInfo.paySign, success: function (t) {
        s.callback(i.PAY_SUCCESS, "支付成功"), c.inst.log("[jzsdk] oppo支付成功", t);
      }, fail: function (t) {
        c.inst.error("[jzsdk] oppo支付失败", t), s.callback(i.PAY_FAIL, "支付失败");
      } });
  }, P.prototype._getSystemInfo = function () {
    var t,
        e = qg.getSystemInfoSync();e && (t = { platId: s.initOps.platId, gid: s.initOps.gid, version: e.COREVersion, phone_model: e.brand + "-" + e.model, language: e.language, platform: e.platform, platformVersion: e.platformVersion, system: e.system }, this.engineVersion = e.platformVersion, f.post(s.init_url, t, function (t) {
      t.result ? c.inst.log("[jzsdk] 设备收集上报成功", t) : c.inst.error("[jzsdk] 设备收集上报失败", t);
    }));
  }, P.prototype.loginAuth = function () {
    var t = this,
        e = this;qg.login({ success: function (o) {
        var n = o.data ? o.data.token : "unkown";s.platExtInfo = { token: n, ctype: s.ctype }, e.loginToken = n, c.inst.log("[jzsdk] oppo登录成功", o), b.prototype.login.call(t);
      }, fail: function (t) {
        c.inst.error("[jzsdk] oppo登陆失败", t);
      } });
  }, P.prototype.saveDeviceNo = function () {}, P);function P() {
    return b.call(this) || this;
  }var A = (C.dispatchPlatform = function (t) {
    switch (t) {case n.WXMG:
        return new O();case n.VIVO:
        return new j();case n.OPPO:
        return new z();default:
        c.inst.log("[jzsdk] 没有该平台配置", t);}
  }, C.dispatchRoleData = function (t) {
    5 < t.roletype || t.roletype < 1 ? c.inst.log("[jzsdk] 没有该类型上报的角色数据", t.roletype) : s.mPlat.roleReport(t);
  }, C);function C() {}function T() {
    this._version = "1.0.0";
  }T.prototype.init = function (t, e, o) {
    var n, r, i;void 0 === o && (o = !1), 2 == t.platId && (i = "plat_ctype", n = wx.getLaunchOptionsSync().query, console.log(n), wx.onShow(function (t) {
      console.log(t.query), n = t.query;
    }), console.log(n), n.hasOwnProperty("ctype") && n.ctype ? (t.ctype = n.ctype, wx.setStorageSync(i, t.ctype)) : n.hasOwnProperty("adver") && n.adver ? (t.ctype = n.adver, wx.setStorageSync(i, t.ctype)) : wx.getStorageSync(i) && (t.ctype = wx.getStorageSync(i)), s.adExtInfo = n, r = "ad_query_info", "{}" != (i = JSON.stringify(n)) ? wx.setStorageSync(r, JSON.stringify(i)) : wx.getStorageSync(r) && (s.adExtInfo = JSON.parse(wx.getStorageSync(r)))), s.initOps = t, s.ctype = t.ctype, s.callback = e, c.inst.init(o), c.inst.log("初始化参数：", s.initOps), 0 == t.mode ? s.sdk_url = s.sdk_dev_url : 1 == t.mode && (s.sdk_url = s.sdk_test_url), s.mPlat = A.dispatchPlatform(t.platId), s.mPlat.init();
  }, T.prototype.roleReport = function (t) {
    A.dispatchRoleData(t);
  }, T.prototype.pay = function (t) {
    s.jzPayInfo = t, s.mPlat.order(t);
  }, T.prototype.jump = function (t) {
    s.mPlat.jump(t);
  }, Object.defineProperty(T.prototype, "version", { get: function () {
      return this._version;
    }, enumerable: !1, configurable: !0 }), o = T, window && (window.jzsdk = o), o = new o(), window && (window.jzsdk = o);
}]);