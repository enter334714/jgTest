var b = wx.$e;
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
    t.constructor == String ? t = (e && "binary" === e.encoding ? a : i).stringToBytes(t) : s(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || t.constructor === Uint8Array || (t = t.toString());for (var o = r.bytesToWords(t), c = (t = 8 * t.length, 1732584193), u = -271733879, l = -1732584194, p = 271733878, d = 0; d < o.length; d++) o[d] = 16711935 & (o[d] << 8 | o[d] >>> 24) | 4278255360 & (o[d] << 24 | o[d] >>> 8);o[t >>> 5] |= 128 << t % 32, o[14 + (64 + t >>> 9 << 4)] = t;var f = n._ff,
        y = n._gg,
        g = n._hh,
        h = n._ii;for (d = 0; d < o.length; d += 16) {
      var v = c,
          _ = u,
          O = l,
          m = p;c = f(c, u, l, p, o[d + 0], 7, -680876936), p = f(p, c, u, l, o[d + 1], 12, -389564586), l = f(l, p, c, u, o[d + 2], 17, 606105819), u = f(u, l, p, c, o[d + 3], 22, -1044525330);c = f(c, u, l, p, o[d + 4], 7, -176418897), p = f(p, c, u, l, o[d + 5], 12, 1200080426), l = f(l, p, c, u, o[d + 6], 17, -1473231341), u = f(u, l, p, c, o[d + 7], 22, -45705983), c = f(c, u, l, p, o[d + 8], 7, 1770035416), p = f(p, c, u, l, o[d + 9], 12, -1958414417), l = f(l, p, c, u, o[d + 10], 17, -42063), u = f(u, l, p, c, o[d + 11], 22, -1990404162), c = f(c, u, l, p, o[d + 12], 7, 1804603682), p = f(p, c, u, l, o[d + 13], 12, -40341101), l = f(l, p, c, u, o[d + 14], 17, -1502002290), c = y(c, u = f(u, l, p, c, o[d + 15], 22, 1236535329), l, p, o[d + 1], 5, -165796510), p = y(p, c, u, l, o[d + 6], 9, -1069501632), l = y(l, p, c, u, o[d + 11], 14, 643717713), u = y(u, l, p, c, o[d + 0], 20, -373897302), c = y(c, u, l, p, o[d + 5], 5, -701558691), p = y(p, c, u, l, o[d + 10], 9, 38016083), l = y(l, p, c, u, o[d + 15], 14, -660478335), u = y(u, l, p, c, o[d + 4], 20, -405537848), c = y(c, u, l, p, o[d + 9], 5, 568446438), p = y(p, c, u, l, o[d + 14], 9, -1019803690), l = y(l, p, c, u, o[d + 3], 14, -187363961), u = y(u, l, p, c, o[d + 8], 20, 1163531501), c = y(c, u, l, p, o[d + 13], 5, -1444681467), p = y(p, c, u, l, o[d + 2], 9, -51403784), l = y(l, p, c, u, o[d + 7], 14, 1735328473), c = g(c, u = y(u, l, p, c, o[d + 12], 20, -1926607734), l, p, o[d + 5], 4, -378558), p = g(p, c, u, l, o[d + 8], 11, -2022574463), l = g(l, p, c, u, o[d + 11], 16, 1839030562), u = g(u, l, p, c, o[d + 14], 23, -35309556), c = g(c, u, l, p, o[d + 1], 4, -1530992060), p = g(p, c, u, l, o[d + 4], 11, 1272893353), l = g(l, p, c, u, o[d + 7], 16, -155497632), u = g(u, l, p, c, o[d + 10], 23, -1094730640), c = g(c, u, l, p, o[d + 13], 4, 681279174), p = g(p, c, u, l, o[d + 0], 11, -358537222), l = g(l, p, c, u, o[d + 3], 16, -722521979), u = g(u, l, p, c, o[d + 6], 23, 76029189), c = g(c, u, l, p, o[d + 9], 4, -640364487), p = g(p, c, u, l, o[d + 12], 11, -421815835), l = g(l, p, c, u, o[d + 15], 16, 530742520), c = h(c, u = g(u, l, p, c, o[d + 2], 23, -995338651), l, p, o[d + 0], 6, -198630844), p = h(p, c, u, l, o[d + 7], 10, 1126891415), l = h(l, p, c, u, o[d + 14], 15, -1416354905), u = h(u, l, p, c, o[d + 5], 21, -57434055), c = h(c, u, l, p, o[d + 12], 6, 1700485571), p = h(p, c, u, l, o[d + 3], 10, -1894986606), l = h(l, p, c, u, o[d + 10], 15, -1051523), u = h(u, l, p, c, o[d + 1], 21, -2054922799), c = h(c, u, l, p, o[d + 8], 6, 1873313359), p = h(p, c, u, l, o[d + 15], 10, -30611744), l = h(l, p, c, u, o[d + 6], 15, -1560198380), u = h(u, l, p, c, o[d + 13], 21, 1309151649), c = h(c, u, l, p, o[d + 4], 6, -145523070), p = h(p, c, u, l, o[d + 11], 10, -1120210379), l = h(l, p, c, u, o[d + 2], 15, 718787259), u = h(u, l, p, c, o[d + 9], 21, -343485551), c = c + v >>> 0, u = u + _ >>> 0, l = l + O >>> 0, p = p + m >>> 0;
    }return r.endian([c, u, l, p]);
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

  var n, r, i;o.r(e), (e = n = n || {})[e.WXMG = 2] = "WXMG", e[e.OPPO = 3] = "OPPO", e[e.VIVO = 4] = "VIVO", e[e.KS = 5] = "KS", e[e.TOUTIAO = 6] = "TOUTIAO", (e = r = r || {}).createRole = "createRole", e.upRoleLevel = "upRoleLevel", e.selectServer = "selectServer", (e = i = i || {}).INIT_SUCCESS = "init_success", e.INIT_FAIL = "init_fail", e.LOGIN_SUCCESS = "login_success", e.LOGIN_FAIL = "login_fail", e.PAY_SUCCESS = "pay_success", e.PAY_FAIL = "pay_fail";var s = (a.sdk_dev_url = "http://sdkapi.jiuzi.com", a.sdk_test_url = "http://dev-h5sdk.humaiyouxi.com", a.sdk_gray_url = "https://dev-sdk.hmdxyx.cn", a.sdk_url = "https://mgame.hainanjiuzi.com", a.track_url = "", a.init_url = "/sdk/device/init", a.login_url = "/auth/ar", a.order_url = "/sdk/order", a.pay_url = "/wx/payNotify", a.ks_pay_url = "/ks/payNotify", a.tt_pay_url = "/tt/payNotify", a.role_report_url = "/user/rd", a.select_server_url = "/user/chserver", a.subscribe_url = "/getSubscribe", a.platExtInfo = {}, a.init_status = 0, a.jzDeviceInfo = {}, a.deviceid = 0, a.deviceno = "", a.androidid = "", a.devidfv = "", a.userInfo = {}, a.token = "", a.sessionKey = "", a.adExtInfo = {}, a.e1AZNDI = {}, a.switchZFlag = !1, a.system = "", a.curApiParams = {}, a.subscribeList = [], a);function a() {}var c = (Object.defineProperty(u, "inst", { get: function () {
      return u._inst = null == u._inst ? new u() : u._inst;
    }, enumerable: !1, configurable: !0 }), u.prototype.init = function (t) {
    this.isShowLog = t || !1;
  }, u.prototype.error = function (t) {
    for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];this.isShowLog && console.error("[jzsdk]" + t, e);
  }, u.prototype.log = function (t) {
    for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];this.isShowLog && console.log("[jzsdk]" + t, e);
  }, u.prototype.warn = function (t) {
    for (var e = [], o = 1; o < arguments.length; o++) e[o - 1] = arguments[o];this.isShowLog && console.warn("[jzsdk]" + t, e);
  }, u._inst = null, u);function u() {
    this.isShowLog = !1;
  }e = o(0);var l = o.n(e),
      p = (d.isObject = function (t) {
    return "[Object Object]" === Object.prototype.toString.call(t);
  }, d.objKeySort = function (t) {
    for (var e = Object.keys(t).sort(), o = {}, n = 0; n < e.length; n++) o[e[n]] = t[e[n]];return o;
  }, d.procRequestParas = function (t) {
    var e,
        o,
        n = Object.keys(t).sort(),
        r = [];for (e in n) void 0 !== t[n[e]] ? (o = (o = (o = (o = (o = (o = encodeURIComponent(t[n[e]].toString())).replace(/!/g, "%21")).replace(/\*/g, "%2A")).replace(/\'/g, "%27")).replace(/\(/g, "%28")).replace(/\)/g, "%29"), r.push(n[e] + "=" + o)) : r.push(n[e] + "=");return r.join("&");
  }, d.judgeClient = function () {
    var t = s.system;/^\d+$/i.test(t) && (t = s.jzDeviceInfo.platform);var e = "";return (/(iPhone|iPad|iPod|iOS)/i.test(t) ? e = "ios" : /(Android)/i.test(t) && (e = "android"), e
    );
  }, d.getSign = function (t) {
    return t = this.objKeySort(t), t = this.procRequestParas(t), t = decodeURIComponent(t), c.inst.log("生成sign的参数", t), l()(t);
  }, d);function d() {}var f = (y.post = function (t, e, o, r, i) {
    var a, c;void 0 === r && (r = !1), void 0 === i && (i = null), t && (a = null, r ? a = { time: Math.round(Date.now() / 1e3), stamp: s.curFlag } : (a = { token: s.token, time: Math.round(Date.now() / 1e3) }, (e = Object.assign({}, s.initOps, e, a)).msdk_version = s.sdkVersion, s.curApiParams = e, a = p.objKeySort(e), e = p.procRequestParas(a), a = decodeURIComponent(e), a = e + "&sign=" + l()(a), s.initOps.platId !== n.KS ? s.initOps.platId !== n.TOUTIAO ? ((c = new XMLHttpRequest()).open("POST", t, !1), c.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;"), c.onreadystatechange = function () {
      4 != c.readyState || 200 != c.status && 304 != c.status || o.call(this, JSON.parse(c.responseText));
    }, c.onerror = function () {
      console.log(c.response);
    }, c.send(a)) : this.TtRequest(t, a, o, i) : this.KsRequest(t, a, o, i)));
  }, y.KsRequest = function (t, e, o, n) {
    "undefined" != typeof ks && ks.request({ url: t, data: e, method: "POST", header: { "content-type": "application/x-www-form-urlencoded;" }, success: function (t) {
        o.call(this, t.data);
      }, fail: function (t) {
        n.call(this, t);
      } });
  }, y.TtRequest = function (t, e, o, n) {
    "undefined" != typeof tt && tt.request({ url: t, data: e, method: "POST", header: { "content-type": "application/x-www-form-urlencoded;" }, success: function (t) {
        o.call(this, t.data);
      }, fail: function (t) {
        n.call(this, t), c.inst.log("请求失败", t);
      } });
  }, y);function y() {}var g = function () {
    return (g = Object.assign || function (t) {
      for (var e, o = 1, n = arguments.length; o < n; o++) for (var r in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);return t;
    }).apply(this, arguments);
  };h.prototype.init = function () {
    var t = this,
        e = g(g(g({}, s.jzDeviceInfo), s.initOps), { adInfo: JSON.stringify(s.adExtInfo) });c.inst.log("开始初始化sdk", e), f.post(s.sdk_url + s.init_url, e, function (e) {
      return 200 !== e.statusCode ? (c.inst.error("初始化失败", e), t.showToast("初始化失败", "error"), void s.callback(i.INIT_FAIL)) : (c.inst.log("初始化成功", e), s.jzDeviceInfo.deviceno = e.data.deviceno, s.deviceno = e.data.deviceno, s.deviceid = e.data.deviceid, s.init_status = 1, t.saveDeviceNo(), s.callback(i.INIT_SUCCESS), void t.login());
    }, !1);
  }, h.prototype.login = function () {
    var t = { plat: s.initOps.platId, deviceno: s.deviceno, deviceid: s.deviceid, params: JSON.stringify(s.platExtInfo), adInfo: JSON.stringify(s.adExtInfo) };c.inst.log("开始登录", t), f.post(s.sdk_url + s.login_url, t, function (t) {
      if (200 !== t.statusCode) return c.inst.error("查询登录失败", t), s.callback(i.LOGIN_FAIL, "登录失败"), f.post(s.sdk_url + s.track_url, { url: s.login_url, data: JSON.stringify(s.curApiParams), msg: JSON.stringify(t), flag: "登录接口失败" }, function () {}, !0), void s.callback(i.LOGIN_FAIL);c.inst.log("查询登录成功", t), s.userInfo = t.data, f.post(s.sdk_url + s.track_url, { url: s.login_url, data: JSON.stringify(s.curApiParams), msg: JSON.stringify(t), flag: "登录接口成功" }, function () {}, !0), t = t.data, s.uid = t.uid, s.token = t.token, s.sessionKey = t.sessionKey, t = { uid: t.uid, token: t.token, time: t.time }, s.callback(i.LOGIN_SUCCESS, t);
    });
  }, h.prototype.roleReport = function (t, e) {
    void 0 === e && (e = "");var o = g({ gid: s.initOps.gid, uid: s.uid }, t);switch (e) {case r.upRoleLevel:
        o.roletype = 5;break;case r.createRole:
        o.roletype = 2;break;case r.selectServer:
        o.roletype = 1;}c.inst.log("角色数据上报", o), f.post(s.sdk_url + s.role_report_url, o, function (t) {
      200 === t.statusCode ? c.inst.log("角色数据上报成功", t) : c.inst.error("角色数据上报失败" + t);
    }, !1);
  }, h.prototype.submitData = function (t, e) {
    var o = g({ gid: s.initOps.gid, uid: s.uid }, e);switch (t) {case r.upRoleLevel:
        o.roletype = 5;break;case r.createRole:
        o.roletype = 2;break;case r.selectServer:
        o.roletype = 1;}
  }, h.prototype.subscribe = function () {}, h.prototype.order = function (t) {
    c.inst.log("cp下单传值", t);
  }, h.prototype.createOrder = function (t) {
    var e = this;return s.uid ? s.uid !== t.uid ? (c.inst.log("登录账号不一致", s.uid, t.uid), void this.showToast("请重新登录", "error")) : (t = g(g(g({}, t), s.jzDeviceInfo), { token: s.token, gid: s.initOps.gid, ctype: s.initOps.ctype }), c.inst.log("调起下单", t), void f.post(s.sdk_url + s.order_url, t, function (t) {
      return 200 != t.statusCode ? (e.showToast(t.message, "error"), void c.inst.log("生成订单失败", t)) : (c.inst.log("生成订单成功", t), s.jzOrderInfo = t.data, void e.pay());
    })) : (c.inst.log("还未登录，无法拉起订单"), void this.showToast("请先登录", "error"));
  }, h.prototype.pay = function () {}, h.prototype.jump = function (t) {
    c.inst.error("跳转实体");
  }, h.prototype.getUuid = function (t, e) {
    void 0 === e && (e = 0);var o,
        n,
        r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
        i = [];if (t = t || r.length, e) for (o = 0; o < e; o++) i[o] = r[0 | Math.random() * t];else for (i[8] = i[13] = i[18] = i[23] = "-", i[14] = "4", o = 0; o < 36; o++) i[o] || (n = 0 | 16 * Math.random(), i[o] = r[19 == o ? 3 & n | 8 : n]);return i.join("");
  }, h.prototype.saveDeviceNo = function () {
    c.inst.log("保存deviceno", s.deviceno);
  }, h.prototype.showToast = function (t, e) {
    console.log(t, e);
  }, h.prototype.getSubscribe = function () {
    var t = { gid: s.initOps.gid };c.inst.log("获取订阅消息模板", t), f.post(s.sdk_url + s.subscribe_url, t, function (t) {
      200 === t.statusCode ? (c.inst.log("获取订阅消息模板成功", t), s.subscribeList = t.data) : c.inst.error("获取订阅消息模板失败", t);
    });
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
  })(m, _ = o), m.prototype.getAdParams = function () {
    var t = "plat_ctype",
        e = wx.getLaunchOptionsSync().query;c.inst.log("query1", e), wx.onShow(function (t) {
      "{}" !== JSON.stringify(t.query) && (c.inst.log("query2", t.query), e = t.query);
    });var o = "";e.hasOwnProperty("ctype") && e.ctype || e.hasOwnProperty("adver") && e.adver ? o = e.ctype : wx.getStorageSync(t) && (o = wx.getStorageSync(t)), wx.setStorageSync(t, o), s.adExtInfo = e;var n = "ad_query_info";"{}" != (t = JSON.stringify(e)) ? wx.setStorageSync(n, JSON.stringify(t)) : wx.getStorageSync(n) && (s.adExtInfo = JSON.parse(wx.getStorageSync(n))), o && (s.initOps.ctype = o, s.ctype = o);
  }, m.prototype.init = function () {
    s.system = wx.getSystemInfoSync().system, this.getWxSystemInfo(), _.prototype.init.call(this);
  }, m.prototype.showToast = function (t, e) {
    wx.showToast({ title: t, icon: e });
  }, m.prototype.login = function () {
    var t = this;this.getSubscribe(), wx.getSetting({ success: function (e) {
        e.authSetting["scope.userInfo"], t.loginAuth();
      }, fail: function () {
        t.loginAuth();
      } });
  }, m.prototype.loginAuth = function () {
    var t = this;wx.login({ success: function (e) {
        var o;e.code ? (o = { code: e.code }, Object.assign(s.platExtInfo, o), t.getUserInfo(), wx.showToast({ title: "授权登录成功" }), _.prototype.login.call(t)) : (wx.showToast({ title: "登录失败！", icon: "error" }), c.inst.log("微信授权登陆失败", e), s.callback(i.LOGIN_FAIL));
      }, fail: function (t) {
        wx.showToast({ title: "授权登录失败", icon: "error" }), c.inst.log("微信授权登录失败", t), s.callback(i.LOGIN_FAIL);
      } });
  }, m.prototype.getUserInfo = function () {
    wx.getUserInfo({ success: function (t) {
        c.inst.log("获取用户微信信息成功", t);
      }, fail: function (t) {
        c.inst.log("获取用户微信信息失败", t);
      } });
  }, m.prototype.subscribe = function () {
    c.inst.log("订阅消息模板列表", s.subscribeList), wx.requestSubscribeMessage({ tmplIds: s.subscribeList, success: function (t) {
        c.inst.log("订阅消息", t);
      }, fail: function (t) {
        c.inst.log("订阅消息失败", t);
      } });
  }, m.prototype.order = function (t) {
    var e = this;wx.checkSession({ success: function () {
        e.createOrder(t);
      }, fail: function () {
        e.login(), s.uid && e.createOrder(t);
      } });
  }, m.prototype.createOrder = function (t) {
    try {
      this.lostOrderId = wx.getStorageSync("jzPayOrderLogs") || [], c.inst.log("支付失败的订单信息：", this.lostOrderId), this.lostOrderId && 0 < this.lostOrderId.length && (c.inst.log("通知失败的重新通知：", this.lostOrderId), this.replyOrder(this.lostOrderId[0]), this.lostOrderId.splice(0, 1));
    } catch (t) {
      c.inst.log("重新通知发货失败：", t);
    }_.prototype.createOrder.call(this, t);
  }, m.prototype.pay = function () {
    if (_.prototype.pay.call(this), c.inst.log("调起支付"), "midashi" === s.jzOrderInfo.p_extends.type) {
      if (c.inst.log(s.jzOrderInfo.p_extends), Number(s.jzOrderInfo.p_extends.balance) >= s.jzOrderInfo.money) return c.inst.log("米大师掉单处理"), void this.balancePay();this.platPay();
    } else this.otherPay();
  }, m.prototype.balancePay = function () {
    var t = this;wx.showModal({ title: "支付提示", showCancel: !1, confirmText: "我知道了", content: "您剩余" + s.jzOrderInfo.p_extends.balance + "个游戏币未消费，本次支付扣除" + s.jzOrderInfo.money + "个游戏币", success: function (e) {
        var o;e.confirm ? (o = s.jzOrderInfo.order_num, t.replyOrder(o)) : e.cancel && t.platPay();
      } });
  }, m.prototype.platPay = function () {
    var t,
        e = this,
        o = s.jzOrderInfo.p_extends.params,
        n = 0;0 !== s.initOps.mode && 1 !== s.initOps.mode || (n = 1), o = { offerId: null !== (t = o.offer_id) && void 0 !== t ? t : s.jzOrderInfo.p_extends.offerId, mode: null !== (t = o.mode) && void 0 !== t ? t : "game", platform: null !== (t = o.platform) && void 0 !== t ? t : "android", currencyType: null !== (t = o.currency_type) && void 0 !== t ? t : "CNY", buyQuantity: null !== (t = o.buy_quantity) && void 0 !== t ? t : 10 * s.jzOrderInfo.money, env: n, zoneId: null !== (o = o.zone_id) && void 0 !== o ? o : "1", success: function (t) {
        if ("requestMidasPayment:ok" == t.errMsg) {
          var o = s.jzOrderInfo.order_num;return e.replyOrder(o), c.inst.log("米大师支付成功"), void s.callback(i.PAY_SUCCESS, "支付成功");
        }c.inst.log("米大师支付失败", t), s.callback(i.PAY_FAIL, t.errMsg);
      }, fail: function (t) {
        e.subscribe(), -1 !== t.errMsg.indexOf("用户取消") ? s.callback(i.PAY_FAIL, "用户取消支付") : s.callback(i.PAY_FAIL, "支付失败:" + JSON.stringify(t)), c.inst.log("米大师支付失败", t);
      } }, console.log(o), wx.requestMidasPayment(o);
  }, m.prototype.otherPay = function () {
    "mini_program" === s.jzOrderInfo.p_extends.type ? this.minipPay() : this.jump("pay");
  }, m.prototype.replyOrder = function (t) {
    var e = this;c.inst.log("米大师支付完毕，通知服务器发货");var o = { gid: s.initOps.gid, uid: s.uid, orderId: t, token: s.token, msdk_version: s.sdkVersion };o.sign = p.getSign(o), wx.request({ url: s.sdk_url + s.pay_url, data: o, method: "POST", header: { "Content-Type": "application/x-www-form-urlencoded;" }, success: function (t) {
        200 != t.statusCode || 200 != t.data.statusCode ? c.inst.log("通知发货失败", t.data.message) : c.inst.log("发货成功", t);
      }, fail: function (o) {
        c.inst.error("通知发货失败", o), e.lostOrderId.unshift(t), wx.setStorageSync("jzPayOrderLogs", e.lostOrderId);
      } });
  }, m.prototype.getWxSystemInfo = function () {
    this.initUuid(), wx.getSystemInfo({ success: function (t) {
        s.jzDeviceInfo = { phoneModel: t.brand + "-" + t.model, platform: t.platform, sysOs: t.system, version: t.version, screenSize: t.screenWidth + "*" + t.screenHeight, androidid: s.androidid, devidfv: s.devidfv }, s.deviceno && (s.jzDeviceInfo.deviceno = s.deviceno), "ios" === p.judgeClient() ? s.jzDeviceInfo.type = "weixinios" : s.jzDeviceInfo.type = "weixinandroid";
      } });
  }, m.prototype.initUuid = function () {
    var t = wx.getStorageSync("plat_uuid");"ios" === p.judgeClient() ? (t = t || this.getUuid(36), s.devidfv = t) : (t = t || this.getUuid(36, 16), s.androidid = t), wx.setStorageSync("plat_uuid", t), (t = wx.getStorageSync("plat_deviceno")) && (s.deviceno = t);
  }, m.prototype.saveDeviceNo = function () {
    s.deviceno && wx.setStorageSync("plat_deviceno", s.deviceno);
  }, m.prototype.minipPay = function () {
    wx.navigateToMiniProgram({ appId: s.jzOrderInfo.p_extends.app_id, extraData: { order_num: s.jzOrderInfo.order_num, pay_way: s.jzOrderInfo.p_extends.type }, success: function (t) {
        console.log(t);
      }, fail: function (t) {
        console.log(t);
      } });
  }, m.prototype.jump = function (t) {
    var e = { gid: s.initOps.gid, token: s.token, type: t, uid: s.uid, ctype: s.ctype, msdk_version: s.sdkVersion },
        o = "跳转";"pay" === t ? (e.order_num = s.jzOrderInfo.order_num, o = "游戏充值") : "bind_account" === t && (o = "绑定手机"), e = p.objKeySort(e), e = p.procRequestParas(e), e = decodeURIComponent(e), c.inst.log("jump", e), wx.openCustomerServiceConversation({ sendMessagePath: e, sendMessageTitle: o, sessionFrom: "turnGame-" + s.initOps.gid, showMessageCard: !0 });
  }, m);function m() {
    var t = _.call(this) || this;return t.getAdParams(), t;
  }var I,
      S,
      b = ((I = function (t, e) {
    return (I = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    })(t, e);
  }, function (t, e) {
    function o() {
      this.constructor = t;
    }I(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
  })(k, S = o), k.prototype.init = function () {
    S.prototype.init.call(this);
  }, k.prototype.login = function () {
    this._getSystemInfo(), this.loginAuth();
  }, k.prototype.pay = function () {
    S.prototype.pay.call(this), this.platPay();
  }, k.prototype.createOrder = function (t) {
    this.payInfo = t, this.checkVersion(1056) && S.prototype.createOrder.call(this, t);
  }, k.prototype.platPay = function () {
    var t;this.checkVersion(1056) && (t = 100 * parseInt(String(this.payInfo.money)), t = { productDesc: this.payInfo.productDesc, appId: s.jzPayInfo.appId, orderAmount: t, productName: this.payInfo.pname, cpOrderNumber: s.jzPayInfo.orderId, notifyUrl: s.jzPayInfo.notifyUrl, vivoSignature: s.jzPayInfo.vivoSignature }, qg.pay({ orderInfo: JSON.stringify(t), success: function (t) {
        s.callback(i.PAY_SUCCESS, "支付成功"), c.inst.log("vivo支付成功", t);
      }, fail: function (t) {
        s.callback(i.PAY_FAIL, "支付失败"), c.inst.error("vivo支付失败", t);
      } }));
  }, k.prototype.checkVersion = function (t) {
    return this.platformVersion >= (t = void 0 === t ? 1056 : t) || (c.inst.error("vivo运行版本号要在1056以上"), !1);
  }, k.prototype._getSystemInfo = function () {
    var t,
        e = qg.getSystemInfoSync();e && (t = { platId: s.initOps.platId, gid: s.initOps.gid, phone_model: e.brand + "-" + e.model, osType: e.osType, osVersionCode: e.osVersionCode, platformVersionName: e.platformVersionName, platformVersionCode: e.platformVersionCode, language: e.language, wifiSignal: e.wifiSignal, isHole: e.isHole, hole_x: e.hole_x, hole_y: e.hole_y, hole_radius: e.hole_radius, isNotch: e.isNotch, statusBarHeight: e.statusBarHeight }, this.platformVersion = e.platformVersionCode, f.post(s.init_url, t, function (t) {
      t.result ? c.inst.log("设备激活成功", t) : c.inst.error("设备激活失败", t);
    }));
  }, k.prototype.loginAuth = function () {
    var t = this,
        e = this;1053 <= qg.getSystemInfoSync().platformVersionCode ? qg.login().then(function (o) {
      var n = o.data ? o.data.token : "unkown";s.platExtInfo = { token: n, ctype: s.ctype }, e.loginToken = n, c.inst.log("vivo登录成功", o), S.prototype.login.call(t);
    }, function (t) {
      c.inst.error("vivo登陆失败", t);
    }) : c.inst.error("login: vivo 运行版本号要在1053以上");
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
      j,
      P = function () {
    return (P = Object.assign || function (t) {
      for (var e, o = 1, n = arguments.length; o < n; o++) for (var r in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);return t;
    }).apply(this, arguments);
  },
      x = (e(z, j = o), z.prototype.init = function () {
    j.prototype.init.call(this);
  }, z.prototype.login = function () {
    this._getSystemInfo(), this.loginAuth();
  }, z.prototype.pay = function () {
    j.prototype.pay.call(this), this.platPay();
  }, z.prototype.createOrder = function (t) {
    t = P(P({}, t), { token: this.loginToken }), j.prototype.createOrder.call(this, t);
  }, z.prototype.platPay = function () {
    qg.pay({ appId: s.jzPayInfo.appId, token: this.loginToken, orderNo: s.jzPayInfo.orderId, timestamp: s.jzPayInfo.created_at, paySign: s.jzPayInfo.paySign, success: function (t) {
        s.callback(i.PAY_SUCCESS, "支付成功"), c.inst.log("oppo支付成功", t);
      }, fail: function (t) {
        c.inst.error("oppo支付失败", t), s.callback(i.PAY_FAIL, "支付失败");
      } });
  }, z.prototype._getSystemInfo = function () {
    var t,
        e = qg.getSystemInfoSync();e && (t = { platId: s.initOps.platId, gid: s.initOps.gid, version: e.COREVersion, phone_model: e.brand + "-" + e.model, language: e.language, platform: e.platform, platformVersion: e.platformVersion, system: e.system }, this.engineVersion = e.platformVersion, f.post(s.init_url, t, function (t) {
      t.result ? c.inst.log("设备收集上报成功", t) : c.inst.error("设备收集上报失败", t);
    }));
  }, z.prototype.loginAuth = function () {
    var t = this,
        e = this;qg.login({ success: function (o) {
        var n = o.data ? o.data.token : "unkown";s.platExtInfo = { token: n, ctype: s.ctype }, e.loginToken = n, c.inst.log("oppo登录成功", o), j.prototype.login.call(t);
      }, fail: function (t) {
        c.inst.error("oppo登陆失败", t);
      } });
  }, z.prototype.saveDeviceNo = function () {}, z);function z() {
    return j.call(this) || this;
  }var T,
      A,
      C = ((T = function (t, e) {
    return (T = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    })(t, e);
  }, function (t, e) {
    function o() {
      this.constructor = t;
    }T(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
  })(N, A = o), N.prototype.getAdParams = function () {
    var t = "plat_ctype",
        e = ks.getLaunchOptionsSync().query;c.inst.log("query1", e), ks.onShow(function (t) {
      "{}" !== JSON.stringify(t.query) && (c.inst.log("query2", t.query), e = t.query);
    });var o = "";e.hasOwnProperty("ctype") && e.ctype || e.hasOwnProperty("adver") && e.adver ? o = e.ctype : ks.getStorageSync(t) && (o = ks.getStorageSync(t)), ks.setStorageSync(t, o), s.adExtInfo = e;var n = "ad_query_info";"{}" != (t = JSON.stringify(e)) ? ks.setStorageSync(n, JSON.stringify(t)) : ks.getStorageSync(n) && (s.adExtInfo = JSON.parse(ks.getStorageSync(n))), o && (s.initOps.ctype = o, s.ctype = o);
  }, N.prototype.init = function () {
    s.system = ks.getSystemInfoSync().system, this.getKsSystemInfo(), A.prototype.init.call(this);
  }, N.prototype.login = function () {
    var t = this;ks.login({ success: function (e) {
        if (!e.gameUserId) return ks.showToast({ title: "登录失败", icon: "error" }), void c.inst.log("快手授权登录失败", e);var o = { code: e.gameToken, openid: e.gameUserId };t.getUserInfo(), ks.authorize({ scope: "scope.userInfo", success: function () {
            Object.assign(s.platExtInfo, o), A.prototype.login.call(t);
          }, fail: function (t) {
            c.inst.log(t);
          }, complete: function () {} });
      }, fail: function (t) {
        ks.showToast({ title: "登录失败", icon: "error" }), c.inst.log("快手授权登录失败", t), s.callback(i.LOGIN_FAIL);
      } });
  }, N.prototype.getUserInfo = function () {
    ks.getUserInfo({ success: function (t) {
        c.inst.log("获取用户信息", t), Object.assign(s.platExtInfo, t);
      } });
  }, N.prototype.order = function (t) {
    s.uid || this.login(), this.createOrder(t);
  }, N.prototype.createOrder = function (t) {
    try {
      this.lostOrderId = ks.getStorageSync("jzLostOrderId") || "", this.lostOrderId && (c.inst.log("通知失败重新通知：", this.lostOrderId), this.notifyPay(this.lostOrderId), this.lostOrderId = "");
    } catch (t) {
      c.inst.log("重新通知发货失败：", t);
    }t.ext = JSON.stringify({ gameToken: s.platExtInfo.code }), A.prototype.createOrder.call(this, t);
  }, N.prototype.pay = function () {
    if (A.prototype.pay.call(this), "kspay" === s.jzOrderInfo.p_extends.type) {
      if (Number(s.jzOrderInfo.p_extends.balance) >= s.jzOrderInfo.money) return c.inst.log("快手掉单处理"), void this.balancePay();this.platPay();
    }
  }, N.prototype.balancePay = function () {
    var t = this;ks.showModal({ title: "支付提示", showCancel: !1, confirmText: "我知道了", content: "您剩余" + s.jzOrderInfo.p_extends.balance + "个游戏币未消费，本次扣除" + s.jzOrderInfo.money + "个游戏币", success: function (e) {
        var o;e.confirm ? (o = s.jzOrderInfo.order_num, t.notifyPay(o, 1)) : e.cancel && t.platPay();
      } });
  }, N.prototype.platPay = function () {
    var t,
        e = { game_user_id: (e = s.jzOrderInfo.p_extends.params).game_user_id, app_id: e.app_id, zone_id: e.zone_id, os: e.os, currency_type: e.currency_type, buy_quantity: null !== (t = e.buy_quantity) && void 0 !== t ? t : 10 * s.jzOrderInfo.money, user_ip: e.user_ip, third_party_trade_no: s.jzOrderInfo.order_num, extension: e.extension, sign: e.sign, success: function (t) {
        c.inst.log("快手支付成功", t), s.callback(i.PAY_SUCCESS, "支付成功");
      }, fail: function (t) {
        s.callback(i.PAY_FAIL, "支付失败：" + JSON.stringify(t)), c.inst.log("快手支付失败", t);
      }, complete: function () {} };c.inst.log("拉起支付参数", e), ks.requestPayment(e);
  }, N.prototype.notifyPay = function (t, e) {
    var o = this;(e = { gid: s.initOps.gid, uid: s.uid, orderId: t, token: s.token, gameToken: s.platExtInfo.code, isMakeup: e = void 0 === e ? 0 : e, msdk_version: s.sdkVersion }).sign = p.getSign(e), e = p.procRequestParas(e), e = { url: s.sdk_url + s.ks_pay_url, data: e, method: "POST", header: { "content-type": "application/x-www-form-urlencoded;" }, success: function (t) {
        200 != t.statusCode || 200 != t.data.statusCode ? c.inst.log("通知发货失败", t.data) : c.inst.log("通知发货成功", t);
      }, fail: function (e) {
        c.inst.error("通知发货失败", e), o.lostOrderId = t, ks.setStorageSync("jzLostOrderId", o.lostOrderId);
      }, complete: function () {} }, c.inst.log("通知发货", e), ks.request(e);
  }, N.prototype.getKsSystemInfo = function () {
    this.initUuid();var t = ks.getSystemInfoSync();c.inst.log("设备信息", t), s.jzDeviceInfo = { phoneModel: t.brand + "-" + t.model, platform: t.platform, sysOs: t.system, version: t.version, screenSize: t.screenWidth + "*" + t.screenHeight, androidid: s.androidid, devidfv: s.devidfv, system: t.platform }, s.deviceno && (s.jzDeviceInfo.deviceno = s.deviceno), "ios" === p.judgeClient() ? s.jzDeviceInfo.type = "ksios" : s.jzDeviceInfo.type = "ksandroid";
  }, N.prototype.initUuid = function () {
    var t = ks.getStorageSync("plat_uuid");"ios" === p.judgeClient() ? (t = t || this.getUuid(36), s.devidfv = t) : (t = t || this.getUuid(36, 16), s.androidid = t), ks.setStorageSync("plat_uuid", t), (t = ks.getStorageSync("plat_deviceno")) && (s.deviceno = t);
  }, N.prototype.saveDeviceNo = function () {
    s.deviceno && ks.setStorageSync("plat_deviceno", s.deviceno);
  }, N.prototype.jump = function (t) {
    t = { gid: s.initOps.gid, token: s.token, type: t, uid: s.uid, ctype: s.ctype }, t = p.objKeySort(t), t = p.procRequestParas(t), t = decodeURIComponent(t), c.inst.log("jump", t), ks.openUserProfile({ accountType: "CPServiceAccount", callback: function (t) {
        c.inst.log("跳转到快手主页", t);
      } });
  }, N.prototype.showToast = function (t, e) {
    ks.showToast({ title: t, icon: e, fail: function (t) {
        console.log(t);
      }, complete: function (t) {
        console.log(t);
      } });
  }, N);function N() {
    var t = A.call(this) || this;return t.getAdParams(), t;
  }var q,
      L,
      U = ((q = function (t, e) {
    return (q = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o]);
    })(t, e);
  }, function (t, e) {
    function o() {
      this.constructor = t;
    }q(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
  })(E, L = o), E.prototype.getAdParams = function () {
    var t = "plat_ctype",
        e = tt.getLaunchOptionsSync().query;c.inst.log("query1", e), tt.onShow(function (t) {
      "{}" !== JSON.stringify(t.query) && (c.inst.log("query2", t.query), e = t.query);
    });var o = "";e.hasOwnProperty("ctype") && e.ctype || e.hasOwnProperty("adver") && e.adver ? o = e.ctype : tt.getStorageSync(t) && (o = tt.getStorageSync(t)), tt.setStorageSync(t, o), s.adExtInfo = e;var n = "ad_query_info";"{}" != (t = JSON.stringify(e)) ? tt.setStorageSync(n, JSON.stringify(t)) : tt.getStorageSync(n) && (s.adExtInfo = JSON.parse(tt.getStorageSync(n))), o && (s.initOps.ctype = o, s.ctype = o);
  }, E.prototype.init = function () {
    s.system = tt.getSystemInfoSync().system, this.getTtSystemInfo(), L.prototype.init.call(this);
  }, E.prototype.login = function () {
    var t = this;tt.getSetting({ success: function (e) {
        c.inst.log("获取设置成功", e), e.authSetting["scope.userInfo"] || tt.authorize({ scope: "scope.userInfo", success: function (t) {
            c.inst.log("提前向用户发出授权请求", t);
          } }), t.loginAuth();
      }, fail: function (e) {
        c.inst.log("获取设置失败", e), tt.authorize({ scope: "scope.userInfo" }), t.loginAuth();
      } });
  }, E.prototype.loginAuth = function () {
    var t = this;tt.login({ force: !0, success: function (e) {
        var o;e.code ? (o = { code: e.code }, Object.assign(s.platExtInfo, o), t.getUserInfo(), tt.showToast({ title: "授权登录成功" }), setTimeout(L.prototype.login, 500)) : (c.inst.log("头条授权失败", e), tt.showToast({ title: "授权登录失败", icon: "fail" }), s.callback(i.LOGIN_FAIL));
      }, fail: function (t) {
        tt.showToast({ title: "授权登录失败", icon: "fail" }), c.inst.log("授权登录失败", t), s.callback(i.LOGIN_FAIL);
      } });
  }, E.prototype.getUserInfo = function () {
    tt.getUserInfo({ success: function (t) {
        c.inst.log("获取用户信息", t), Object.assign(s.platExtInfo, t.userInfo);
      }, fail: function (t) {
        c.inst.log("获取用户信息失败", t);
      } });
  }, E.prototype.subscribe = function () {
    c.inst.log("订阅消息模板列表", s.subscribeList), tt.requestSubscribeMessage({ tmplIds: s.subscribeList, success: function (t) {
        c.inst.log("订阅消息", t);
      }, fail: function (t) {
        c.inst.log("订阅消息失败", t);
      } });
  }, E.prototype.order = function (t) {
    var e = this;tt.checkSession({ success: function (o) {
        c.inst.log("检查登录success：", o), e.createOrder(t);
      }, fail: function (o) {
        c.inst.log("检查登录fail：", o), e.login(), s.uid && e.createOrder(t);
      } });
  }, E.prototype.createOrder = function (t) {
    try {
      this.lostOrderId = tt.getStorageSync("jzLostOrderId") || "", this.lostOrderId && (c.inst.log("通知失败重新通知：", this.lostOrderId), this.notifyPay(this.lostOrderId, 1), this.lostOrderId = "");
    } catch (t) {
      c.inst.log("重新通知发货失败：", t);
    }L.prototype.createOrder.call(this, t);
  }, E.prototype.pay = function () {
    if (L.prototype.pay.call(this), "ttpay" === s.jzOrderInfo.p_extends.type) {
      if (Number(s.jzOrderInfo.p_extends.balance) >= s.jzOrderInfo.money) return c.inst.log("头条掉单处理"), void this.balancePay();this.platPay();
    } else c.inst.log("进入其他支付渠道"), 1 == s.jzOrderInfo.p_extends.mhtOrder.responseCode && s.jzOrderInfo.p_extends.mhtOrder.req_str ? this.otherPay() : this.showToast("拉起支付失败", "fail");
  }, E.prototype.otherPay = function () {
    this.url = s.jzOrderInfo.p_extends.mhtOrder.req_str, this.referer = s.jzOrderInfo.p_extends.mhtOrder.referer, this.jump("pay");
  }, E.prototype.balancePay = function () {
    var t = this;tt.showModal({ title: "支付提示", showCancel: !1, confirmText: "我知道了", content: "您剩余" + s.jzOrderInfo.p_extends.balance + "个游戏币未消费，本次扣除" + s.jzOrderInfo.money + "个游戏币", success: function (e) {
        var o;e.confirm ? (o = s.jzOrderInfo.order_num, t.notifyPay(o, 1)) : e.cancel && t.platPay();
      }, fail: function () {
        t.platPay();
      } });
  }, E.prototype.platPay = function () {
    var t,
        e = { mode: null !== (t = (e = s.jzOrderInfo.p_extends.params).mode) && void 0 !== t ? t : "game", env: null !== (t = e.ienv) && void 0 !== t ? t : 0, currencyType: null !== (t = e.currency_type) && void 0 !== t ? t : "CNY", platform: null !== (t = e.platform) && void 0 !== t ? t : "android", buyQuantity: null !== (t = e.buy_quantity) && void 0 !== t ? t : 10 * s.jzOrderInfo.money, zoneId: null !== (t = e.zone_id) && void 0 !== t ? t : "1", customId: null !== (t = e.custom_id) && void 0 !== t ? t : s.jzOrderInfo.order_num, extraInfo: null !== (e = e.extra_info) && void 0 !== e ? e : "{}", success: function (t) {
        c.inst.log("头条支付成功", t), s.callback(i.PAY_SUCCESS, "支付成功");
      }, fail: function (t) {
        s.callback(i.PAY_FAIL, "支付失败：" + JSON.stringify(t)), c.inst.log("头条支付失败", t);
      }, complete: function () {} };c.inst.log("拉起头条支付", e), tt.requestGamePayment(e);
  }, E.prototype.notifyPay = function (t, e) {
    var o = this;void 0 === e && (e = 0), c.inst.log("头条支付完成，通知服务器发货"), (e = { gid: s.initOps.gid, uid: s.uid, orderId: t, token: s.token, isMakeUp: e, msdk_version: s.sdkVersion }).sign = p.getSign(e), tt.request({ url: s.sdk_url + s.tt_pay_url, data: e, method: "POST", header: { "Content-Type": "application/x-www-form-urlencoded;" }, success: function (t) {
        200 != t.statusCode || 200 != t.data.statusCode ? c.inst.log("通知发货失败", t.data) : c.inst.log("发货成功", t);
      }, fail: function (e) {
        c.inst.error("通知发货失败", e), o.lostOrderId = t, tt.setStorageSync("jzLostOrderId", o.lostOrderId);
      } });
  }, E.prototype.getTtSystemInfo = function () {
    this.initUuid();var t = tt.getSystemInfoSync();c.inst.log("设备信息", t), s.jzDeviceInfo = { phoneModel: t.brand + "-" + t.model, platform: t.platform, sysOs: t.system, version: t.version, screenSize: t.screenWidth + "*" + t.screenHeight, androidid: s.androidid, devidfv: s.devidfv, system: t.platform }, s.deviceno && (s.jzDeviceInfo.deviceno = s.deviceno), "ios" === p.judgeClient() ? s.jzDeviceInfo.type = "ttios" : s.jzDeviceInfo.type = "ttandroid";
  }, E.prototype.initUuid = function () {
    var t = tt.getStorageSync("plat_uuid");"ios" === p.judgeClient() ? (t = t || this.getUuid(36), s.devidfv = t) : (t = t || this.getUuid(36, 16), s.androidid = t), tt.setStorageSync("plat_uuid", t), (t = tt.getStorageSync("plat_deviceno")) && (s.deviceno = t);
  }, E.prototype.saveDeviceNo = function () {
    s.deviceno && tt.setStorageSync("plat_deviceno", s.deviceno);
  }, E.prototype.showToast = function (t, e) {
    tt.showToast({ title: t, icon: e, fail: function (t) {
        console.log(t);
      }, success: function (t) {
        console.log(t);
      } });
  }, E.prototype.jump = function (t) {
    "pay" == t ? this.openPayView() : "bind_account" == t && this.createButton();
  }, E.prototype.openPayView = function () {
    console.log(this.url), console.log(this.referer);var t = { url: this.url, referer: this.referer, success: function (t) {
        c.inst.log("open Webview success!", t);var e = t;setTimeout(function () {
          e.close({ success: function (t) {
              c.inst.log("timeout close webview success", t);
            }, fail: function (t) {
              c.inst.log("timeout close webview fail", t);
            } });
        }, 5e3);
      }, fail: function (t) {
        c.inst.log("open Webview fail!", t);
      } };c.inst.log("拉起webview", t), tt.openWebview(t);
  }, E.prototype.createButton = function () {
    var t = tt.createContactButton({ type: "text", text: "联系客服", style: { left: 110, top: 500, width: 150, height: 40, lineHeight: 40, backgroundColor: "#373232", textAlign: "center", fontSize: 16, borderRadius: 4, borderColor: "#ffffff", borderWidth: 1, textColor: "#ffffff" }, success: function (t) {
        c.inst.log("create success", t);
      }, fail: function (t) {
        c.inst.log("create fail", t);
      } });c.inst.log("创建了按钮", t), t.onTap(this.handleClick), t.onError(this.handleError), t.show(), setTimeout(t.hide, 3e3);
  }, E.prototype.handleClick = function (t) {
    c.inst.log("点击客服按钮", t);
  }, E.prototype.handleError = function (t) {
    c.inst.log("按钮错误", t);
  }, E);function E() {
    var t = L.call(this) || this;return t.getAdParams(), t;
  }var M = (R.dispatchPlatform = function (t) {
    switch (t) {case n.WXMG:
        return new O();case n.VIVO:
        return new b();case n.OPPO:
        return new x();case n.KS:
        return new C();case n.TOUTIAO:
        return new U();default:
        c.inst.log("没有该平台配置", t);}
  }, R.dispatchRoleData = function (t) {
    5 < t.roletype || t.roletype < 1 ? c.inst.log("没有该类型上报的角色数据", t.roletype) : s.mPlat.roleReport(t);
  }, R);function R() {}function D() {
    this._version = "3.0.3";
  }o = new (D.prototype.init = function (t, e, o) {
    void 0 === o && (o = !1), s.initOps = t, s.ctype = t.ctype, s.sdkVersion = this._version, s.callback = e, c.inst.init(o), c.inst.log("初始化参数：", s.initOps), 0 == t.mode ? s.sdk_url = s.sdk_dev_url : 1 == t.mode ? s.sdk_url = s.sdk_test_url : 5 == t.mode && (s.sdk_url = s.sdk_gray_url), s.mPlat = M.dispatchPlatform(t.platId), s.mPlat.init();
  }, D.prototype.roleReport = function (t) {
    M.dispatchRoleData(t);
  }, D.prototype.pay = function (t) {
    s.jzPayInfo = t, s.mPlat.order(t);
  }, D.prototype.jump = function (t) {
    s.mPlat.jump(t);
  }, D.prototype.subscribe = function () {
    s.mPlat.subscribe();
  }, D.prototype.test = function () {
    console.log("test");
  }, Object.defineProperty(D.prototype, "version", { get: function () {
      return this._version;
    }, enumerable: !1, configurable: !0 }), D)(), "undefined" != typeof window && (window.jzsdk = o), "undefined" != typeof Window && (Window.jzsdk = o), "undefined" != typeof ks && (ks.jzsdk = o), "undefined" != typeof tt && (tt.jzsdk = o);
}]);