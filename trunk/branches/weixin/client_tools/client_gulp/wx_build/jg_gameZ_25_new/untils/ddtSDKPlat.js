!function (t) {
  var e = {};function n(o) {
    if (e[o]) return e[o].exports;var r = e[o] = { i: o, l: !1, exports: {} };return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
  }n.m = t, n.c = e, n.d = function (t, e, o) {
    n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o });
  }, n.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
  }, n.t = function (t, e) {
    if (1 & e && (t = n(t)), 8 & e) return t;if (4 & e && "object" == typeof t && t && t.__esModule) return t;var o = Object.create(null);if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t) for (var r in t) n.d(o, r, function (e) {
      return t[e];
    }.bind(null, r));return o;
  }, n.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return n.d(e, "a", e), e;
  }, n.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, n.p = "", n(n.s = 4);
}([function (t, e, n) {
  var o, r, i, a, s;o = n(2), r = n(1).utf8, i = n(3), a = n(1).bin, (s = function (t, e) {
    t.constructor == String ? t = (e && "binary" === e.encoding ? a : r).stringToBytes(t) : i(t) ? t = Array.prototype.slice.call(t, 0) : Array.isArray(t) || t.constructor === Uint8Array || (t = t.toString());for (var n = o.bytesToWords(t), l = (t = 8 * t.length, 1732584193), c = -271733879, u = -1732584194, p = 271733878, d = 0; d < n.length; d++) n[d] = 16711935 & (n[d] << 8 | n[d] >>> 24) | 4278255360 & (n[d] << 24 | n[d] >>> 8);n[t >>> 5] |= 128 << t % 32, n[14 + (64 + t >>> 9 << 4)] = t;var f = s._ff,
        g = s._gg,
        y = s._hh,
        h = s._ii;for (d = 0; d < n.length; d += 16) {
      var _ = l,
          m = c,
          S = u,
          P = p;l = f(l, c, u, p, n[d + 0], 7, -680876936), p = f(p, l, c, u, n[d + 1], 12, -389564586), u = f(u, p, l, c, n[d + 2], 17, 606105819), c = f(c, u, p, l, n[d + 3], 22, -1044525330);l = f(l, c, u, p, n[d + 4], 7, -176418897), p = f(p, l, c, u, n[d + 5], 12, 1200080426), u = f(u, p, l, c, n[d + 6], 17, -1473231341), c = f(c, u, p, l, n[d + 7], 22, -45705983), l = f(l, c, u, p, n[d + 8], 7, 1770035416), p = f(p, l, c, u, n[d + 9], 12, -1958414417), u = f(u, p, l, c, n[d + 10], 17, -42063), c = f(c, u, p, l, n[d + 11], 22, -1990404162), l = f(l, c, u, p, n[d + 12], 7, 1804603682), p = f(p, l, c, u, n[d + 13], 12, -40341101), u = f(u, p, l, c, n[d + 14], 17, -1502002290), l = g(l, c = f(c, u, p, l, n[d + 15], 22, 1236535329), u, p, n[d + 1], 5, -165796510), p = g(p, l, c, u, n[d + 6], 9, -1069501632), u = g(u, p, l, c, n[d + 11], 14, 643717713), c = g(c, u, p, l, n[d + 0], 20, -373897302), l = g(l, c, u, p, n[d + 5], 5, -701558691), p = g(p, l, c, u, n[d + 10], 9, 38016083), u = g(u, p, l, c, n[d + 15], 14, -660478335), c = g(c, u, p, l, n[d + 4], 20, -405537848), l = g(l, c, u, p, n[d + 9], 5, 568446438), p = g(p, l, c, u, n[d + 14], 9, -1019803690), u = g(u, p, l, c, n[d + 3], 14, -187363961), c = g(c, u, p, l, n[d + 8], 20, 1163531501), l = g(l, c, u, p, n[d + 13], 5, -1444681467), p = g(p, l, c, u, n[d + 2], 9, -51403784), u = g(u, p, l, c, n[d + 7], 14, 1735328473), l = y(l, c = g(c, u, p, l, n[d + 12], 20, -1926607734), u, p, n[d + 5], 4, -378558), p = y(p, l, c, u, n[d + 8], 11, -2022574463), u = y(u, p, l, c, n[d + 11], 16, 1839030562), c = y(c, u, p, l, n[d + 14], 23, -35309556), l = y(l, c, u, p, n[d + 1], 4, -1530992060), p = y(p, l, c, u, n[d + 4], 11, 1272893353), u = y(u, p, l, c, n[d + 7], 16, -155497632), c = y(c, u, p, l, n[d + 10], 23, -1094730640), l = y(l, c, u, p, n[d + 13], 4, 681279174), p = y(p, l, c, u, n[d + 0], 11, -358537222), u = y(u, p, l, c, n[d + 3], 16, -722521979), c = y(c, u, p, l, n[d + 6], 23, 76029189), l = y(l, c, u, p, n[d + 9], 4, -640364487), p = y(p, l, c, u, n[d + 12], 11, -421815835), u = y(u, p, l, c, n[d + 15], 16, 530742520), l = h(l, c = y(c, u, p, l, n[d + 2], 23, -995338651), u, p, n[d + 0], 6, -198630844), p = h(p, l, c, u, n[d + 7], 10, 1126891415), u = h(u, p, l, c, n[d + 14], 15, -1416354905), c = h(c, u, p, l, n[d + 5], 21, -57434055), l = h(l, c, u, p, n[d + 12], 6, 1700485571), p = h(p, l, c, u, n[d + 3], 10, -1894986606), u = h(u, p, l, c, n[d + 10], 15, -1051523), c = h(c, u, p, l, n[d + 1], 21, -2054922799), l = h(l, c, u, p, n[d + 8], 6, 1873313359), p = h(p, l, c, u, n[d + 15], 10, -30611744), u = h(u, p, l, c, n[d + 6], 15, -1560198380), c = h(c, u, p, l, n[d + 13], 21, 1309151649), l = h(l, c, u, p, n[d + 4], 6, -145523070), p = h(p, l, c, u, n[d + 11], 10, -1120210379), u = h(u, p, l, c, n[d + 2], 15, 718787259), c = h(c, u, p, l, n[d + 9], 21, -343485551), l = l + _ >>> 0, c = c + m >>> 0, u = u + S >>> 0, p = p + P >>> 0;
    }return o.endian([l, c, u, p]);
  })._ff = function (t, e, n, o, r, i, a) {
    return ((a = t + (e & n | ~e & o) + (r >>> 0) + a) << i | a >>> 32 - i) + e;
  }, s._gg = function (t, e, n, o, r, i, a) {
    return ((a = t + (e & o | n & ~o) + (r >>> 0) + a) << i | a >>> 32 - i) + e;
  }, s._hh = function (t, e, n, o, r, i, a) {
    return ((a = t + (e ^ n ^ o) + (r >>> 0) + a) << i | a >>> 32 - i) + e;
  }, s._ii = function (t, e, n, o, r, i, a) {
    return ((a = t + (n ^ (e | ~o)) + (r >>> 0) + a) << i | a >>> 32 - i) + e;
  }, s._blocksize = 16, s._digestsize = 16, t.exports = function (t, e) {
    if (null == t) throw new Error("Illegal argument " + t);return t = o.wordsToBytes(s(t, e)), e && e.asBytes ? t : e && e.asString ? a.bytesToString(t) : o.bytesToHex(t);
  };
}, function (t, e) {
  var n = { utf8: { stringToBytes: function (t) {
        return n.bin.stringToBytes(unescape(encodeURIComponent(t)));
      }, bytesToString: function (t) {
        return decodeURIComponent(escape(n.bin.bytesToString(t)));
      } }, bin: { stringToBytes: function (t) {
        for (var e = [], n = 0; n < t.length; n++) e.push(255 & t.charCodeAt(n));return e;
      }, bytesToString: function (t) {
        for (var e = [], n = 0; n < t.length; n++) e.push(String.fromCharCode(t[n]));return e.join("");
      } } };t.exports = n;
}, function (t, e) {
  var n, o;n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = { rotl: function (t, e) {
      return t << e | t >>> 32 - e;
    }, rotr: function (t, e) {
      return t << 32 - e | t >>> e;
    }, endian: function (t) {
      if (t.constructor == Number) return 16711935 & o.rotl(t, 8) | 4278255360 & o.rotl(t, 24);for (var e = 0; e < t.length; e++) t[e] = o.endian(t[e]);return t;
    }, randomBytes: function (t) {
      for (var e = []; 0 < t; t--) e.push(Math.floor(256 * Math.random()));return e;
    }, bytesToWords: function (t) {
      for (var e = [], n = 0, o = 0; n < t.length; n++, o += 8) e[o >>> 5] |= t[n] << 24 - o % 32;return e;
    }, wordsToBytes: function (t) {
      for (var e = [], n = 0; n < 32 * t.length; n += 8) e.push(t[n >>> 5] >>> 24 - n % 32 & 255);return e;
    }, bytesToHex: function (t) {
      for (var e = [], n = 0; n < t.length; n++) e.push((t[n] >>> 4).toString(16)), e.push((15 & t[n]).toString(16));return e.join("");
    }, hexToBytes: function (t) {
      for (var e = [], n = 0; n < t.length; n += 2) e.push(parseInt(t.substr(n, 2), 16));return e;
    }, bytesToBase64: function (t) {
      for (var e = [], o = 0; o < t.length; o += 3) for (var r = t[o] << 16 | t[o + 1] << 8 | t[o + 2], i = 0; i < 4; i++) 8 * o + 6 * i <= 8 * t.length ? e.push(n.charAt(r >>> 6 * (3 - i) & 63)) : e.push("=");return e.join("");
    }, base64ToBytes: function (t) {
      t = t.replace(/[^A-Z0-9+\/]/gi, "");for (var e = [], o = 0, r = 0; o < t.length; r = ++o % 4) 0 != r && e.push((n.indexOf(t.charAt(o - 1)) & Math.pow(2, -2 * r + 8) - 1) << 2 * r | n.indexOf(t.charAt(o)) >>> 6 - 2 * r);return e;
    } }, t.exports = o;
}, function (t, e) {
  function n(t) {
    return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t);
  }
  /*!
   * Determine if an object is a Buffer
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   */t.exports = function (t) {
    return null != t && (n(t) || "function" == typeof (e = t).readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0)) || !!t._isBuffer);var e;
  };
}, function (t, e, n) {
  "use strict";
  var o, r, i;n.r(e), (e = o = o || {})[e.WXMG = 1e3] = "WXMG", e[e.OPPO = 1001] = "OPPO", e[e.VIVO = 1002] = "VIVO", (e = {})[e.TEST = 0] = "TEST", e[e.DEV = 1] = "DEV", e[e.ONLINE = 2] = "ONLINE", (e = r = r || {}).createRole = "createRole", e.upRoleLevel = "upRoleLevel", e.enterGame = "enterGame", e.enterServer = "enterServer", (e = i = i || {}).INIT_SUCCESS = "init_success", e.INIT_FAIL = "init_fail", e.LOGIN_SUCCESS = "login_success", e.LOGIN_FAIL = "login_fail", e.PAY_SUCCESS = "pay_success", e.PAY_FAIL = "pay_fail", e.PAY_CANCEL = "pay_cancel", e.PAY_TYPE = "pay_type", e.CHECK_INFO = "check_info";var a = (s.track_url = "https://api.mengxuanwl.com/Api/MiniGame/sdkTrack", s.sdk_base_url = "https://api.mengxuanwl.com", s.sdk_config_url = "/Api/MiniGame/init", s.sdk_device_url = "", s.data_up_url = "", s.gameToken = "", s.login_url = "", s.place_order_url = "", s.reply_order_url = "", s.checkExtInfo_url = "", s.plat_extend_info = [], s.userInfo = {}, s.curApiParams = {}, s.platExtInfo = {}, s.switchZFlag = !1, s.system = "", s);function s() {}var l = (Object.defineProperty(c, "inst", { get: function () {
      return c._inst = null == c._inst ? new c() : c._inst;
    }, enumerable: !1, configurable: !0 }), c.prototype.init = function (t) {
    this.isShowLog = t || !1;
  }, c.prototype.error = function (t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];this.isShowLog && console.error(t, e);
  }, c.prototype.log = function (t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];this.isShowLog && console.log(t, e);
  }, c.prototype.warn = function (t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];this.isShowLog && console.warn(t, e);
  }, c._inst = null, c);function c() {
    this.isShowLog = !1;
  }var u = (p.isObject = function (t) {
    return "[Object Object]" === Object.prototype.toString.call(t);
  }, p.objKeySort = function (t) {
    for (var e = Object.keys(t).sort(), n = {}, o = 0; o < e.length; o++) n[e[o]] = t[e[o]];return n;
  }, p.procRequestParams = function (t) {
    var e,
        n,
        o = Object.keys(t).sort(),
        r = [];for (e in o) void 0 !== t[o[e]] ? (n = (n = (n = (n = (n = (n = encodeURIComponent(t[o[e]].toString())).replace(/!/g, "%21")).replace(/\*/g, "%2A")).replace(/\'/g, "%27")).replace(/\(/g, "%28")).replace(/\)/g, "%29"), r.push(o[e] + "=" + n)) : r.push(o[e] + "=");return r.join("&");
  }, p.isHasVer = function (t) {
    return -1 != a.initOps.channelVer.indexOf(t);
  }, p.judgeClient = function () {
    var t = "";return (/(iPhone|iPad|iPod|iOS)/i.test(a.system) ? t = "ios" : /(Android)/i.test(a.system) && (t = "android"), t
    );
  }, p.charToUnicode = function (t) {
    return escape(t).toLocaleLowerCase().replace(/%u/gi, "\\u").replace(/%7b/gi, "{").replace(/%7d/gi, "}").replace(/%3a/gi, ":").replace(/%2c/gi, ",").replace(/%27/gi, "'").replace(/%22/gi, '"').replace(/%5b/gi, "{").replace(/%5d/gi, "]").replace(/%3D/gi, "=").replace(/%20/gi, " ").replace(/%3E/gi, ">").replace(/%3C/gi, "<").replace(/%3F/gi, "?").replace(/%5c/gi, "\\");
  }, p);function p() {}e = n(0);var d = n.n(e),
      f = (g.postData = function (t, e, n, o) {
    var r = null;r = (o = void 0 !== o && o) ? { time: Math.round(Date.now() / 1e3), stamp: a.curFlag } : { gameToken: a.gameToken, time: Math.round(Date.now() / 1e3) }, r = Object.assign({}, a.initOps, e, r);a.curApiParams = r;r = u.objKeySort(r), r = u.procRequestParams(r), r = (r = decodeURIComponent(r)) + "&sign=" + d()(r);var i = new XMLHttpRequest(),
        s = u.isHasVer("jzxjz");s && (i.responseType = "text"), i.open("POST", t, !0), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;"), i.onreadystatechange = function () {
      4 != i.readyState || 200 != i.status && 304 != i.status || (s ? n.call(this, i.response) : n.call(this, JSON.parse(i.responseText)));
    }, i.send(r);
  }, g);function g() {}var y = function () {
    return (y = Object.assign || function (t) {
      for (var e, n = 1, o = arguments.length; n < o; n++) for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);return t;
    }).apply(this, arguments);
  };h.prototype.init = function () {
    var t = this;f.postData(a.track_url, { flag: "开始初始化sdk" }, function () {}, !0);var e = { device: u.judgeClient() };f.postData(a.sdk_base_url + a.sdk_config_url, e, function (e) {
      if (!e.result) return l.inst.error("ddtSDKPlat ====== 获取配置信息失败", e), a.callback(i.INIT_FAIL, "初始化失败"), void f.postData(a.track_url, { url: a.sdk_base_url + a.sdk_config_url, data: JSON.stringify(a.curApiParams), msg: JSON.stringify(e), flag: "初始化接口失败" }, function () {}, !0);l.inst.log("ddtSDKPlat ====== 获取配置信息成功", e), f.postData(a.track_url, { url: a.sdk_base_url + a.sdk_config_url, data: JSON.stringify(a.curApiParams), msg: JSON.stringify(e), flag: "初始化接口成功" }, function () {}, !0), e = e.data, a.data_up_url = e.dataUpUrl, a.gameToken = e.gameToken, a.login_url = e.loginUrl, a.place_order_url = e.placeOrderUrl, a.reply_order_url = e.replyOrderUrl, a.sdk_device_url = e.deviceUrl, a.plat_extend_info = e.platExtInfo, a.switchZFlag = e.is_change, a.checkExtInfo_url = e.checkExtInfo, a.callback(i.PAY_TYPE, e.is_change), a.callback(i.INIT_SUCCESS, "初始化成功"), t.login();
    });
  }, h.prototype.login = function () {
    var t = this;f.postData(a.track_url, { flag: "开始加载登录接口" }, function () {}, !0), f.postData(a.login_url, a.platExtInfo, function (e) {
      if (!e.result) return l.inst.error("ddtSDKPlat ====== 查询登录失败", e), a.callback(i.LOGIN_FAIL, "登录失败"), void f.postData(a.track_url, { url: a.login_url, data: JSON.stringify(a.curApiParams), msg: JSON.stringify(e), flag: "登录接口失败" }, function () {}, !0);l.inst.log("ddtSDKPlat ====== 查询登录成功", e), a.userInfo = e.data, f.postData(a.track_url, { url: a.login_url, data: JSON.stringify(a.curApiParams), msg: JSON.stringify(e), flag: "登录接口成功" }, function () {}, !0), e = e.data, a.uid = e.uid, a.gameToken = e.gameToken, a.ddtPlatExtInfo = e.ddtPlatExtInfo, e = { uid: e.uid, gameToken: e.gameToken, time: e.time, sign: e.sign }, a.callback(i.LOGIN_SUCCESS, e), t.checkExtInfo();
    });
  }, h.prototype.submitData = function (t, e) {
    e = y({ sceneId: t, uid: a.uid }, e), f.postData(a.data_up_url, e, function (e) {
      e.result ? l.inst.log("ddtSDKPlat ====== 数据上报成功，类型：" + t, e) : l.inst.error("ddtSDKPlat ====== 数据上报失败，类型：" + t, e);
    });
  }, h.prototype.createOrder = function (t) {
    var e = this;t = y(y(y({ uid: a.uid }, t), a.platExtInfo), { device: u.judgeClient() });f.postData(a.place_order_url, t, function (t) {
      return t.result ? (l.inst.log("ddtSDKPlat ====== 预下单成功", t), a.ddtPlatPayInfo = t.data, void e.pay()) : (l.inst.error("ddtSDKPlat ====== 预下单失败", t), void (1e3 === a.initOps.platId && wx.showToast({ title: t.data.msg, icon: "none" })));
    });
  }, h.prototype.pay = function () {}, h.prototype.jump = function () {
    l.inst.error("ddtSDKPlat ====== 跳转实体"), console.log("跳转实体");
  }, h.prototype.toService = function () {
    console.log("跳转实体公众号");
  }, h.prototype.checkExtInfo = function () {
    f.postData(a.checkExtInfo_url, { uid: a.uid, device: u.judgeClient() }, function (t) {
      t.result ? (l.inst.log("ddtSDKPlat ====== 获取扩展信息成功"), a.callback(i.CHECK_INFO, t.data)) : l.inst.error("ddtSDKPlat ====== 获取扩展信息错误");
    });
  }, n = h;function h() {}var _,
      m,
      S = ((_ = function (t, e) {
    return (_ = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    })(t, e);
  }, function (t, e) {
    function n() {
      this.constructor = t;
    }_(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
  })(P, m = n), P.prototype.createSole = function () {
    var t = a.initOps.gameId.toString(),
        e = a.initOps.channelVer.toString();this.soleKey = d()(t + e + this.RANDOM_STR);
  }, P.prototype.getADParams = function () {
    var t = wx.getLaunchOptionsSync();wx.onShow(function (e) {
      t = e;
    });var e = (c = t.query).adver,
        n = c.gdt_vid,
        o = c.weixinadinfo,
        r = c.clue_token,
        i = c.ad_id,
        s = c.creative_id,
        l = c.click_id,
        c = c.qz_gdt;e ? (this.adver = e, wx.setStorageSync(this.soleKey, e)) : this.adver = wx.getStorageSync(this.soleKey) || "", this.clue_token = r, this.ad_id = i, this.creative_id = s, this.gdt_vid = n || l || c, this.weixinadinfo = o, o = { gdt_vid: this.gdt_vid, weixinadinfo: this.weixinadinfo, adver: this.adver, clue_token: this.clue_token, ad_id: this.ad_id, creative_id: this.creative_id }, Object.assign(a.platExtInfo, o);
  }, P.prototype.init = function () {
    a.system = wx.getSystemInfoSync().system, console.log(a.system), m.prototype.init.call(this);
  }, P.prototype.login = function () {
    this.getWxSystemInfo(), this.loginAuth();
  }, P.prototype.createOrder = function (t) {
    if ("android" === u.judgeClient()) try {
      this.lostOrderId = wx.getStorageSync("ddtPayOrderLogs") || [], this.lostOrderId && null != this.lostOrderId && 0 < this.lostOrderId.length && (this.replyOrder(this.lostOrderId[0]), this.lostOrderId.splice(0, 1));
    } catch (t) {
      console.log(t);
    }m.prototype.createOrder.call(this, t);
  }, P.prototype.pay = function () {
    m.prototype.pay.call(this), "ios" === u.judgeClient() && a.switchZFlag ? this.otherPay() : this.platPay();
  }, P.prototype.otherPay = function () {
    wx.openCustomerServiceConversation({ showMessageCard: !0 });
  }, P.prototype.test = function () {
    wx.openCustomerServiceConversation({ showMessageCard: !0 });
  }, P.prototype.platPay = function () {
    var t = this;wx.requestMidasPayment({ mode: "game", env: a.ddtPlatPayInfo.env, offerId: a.ddtPlatPayInfo.offer, platform: "android", currencyType: "CNY", buyQuantity: a.ddtPlatPayInfo.count, zoneId: "1", success: function () {
        a.callback(i.PAY_SUCCESS, "支付成功");var e = a.ddtPlatPayInfo.orderId;t.replyOrder(e);
      }, fail: function (t) {
        l.inst.log("ddtSDKPlat ===== wx支付失败", t), a.callback(i.PAY_FAIL, "支付失败");
      } });
  }, P.prototype.getWxSystemInfo = function () {
    wx.getSystemInfo({ success: function (t) {
        t = { channelVer: a.initOps.channelVer, platId: a.initOps.platId, gameId: a.initOps.gameId, mode: t.model, brand: t.brand, language: t.language, platform: t.platform, system: t.system, version: t.version }, f.postData(a.sdk_device_url, t, function (t) {
          t.result ? l.inst.log("ddtSDKPlat ====== 设备收集上报成功", t) : l.inst.error("ddtSDKPlat ====== 设备收集上报失败", t);
        });
      } });
  }, P.prototype.loginAuth = function () {
    var t = this;wx.login({ success: function (e) {
        var n = { code: e.code };Object.assign(a.platExtInfo, n), l.inst.log("ddtSDKPlat ==== 微信授权登录成功", e), m.prototype.login.call(t);
      }, fail: function (t) {
        l.inst.log("ddtSDKPlat ==== 微信授权登录失败", t);
      } });
  }, P.prototype.replyOrder = function (t) {
    var e = this,
        n = { channelVer: a.initOps.channelVer, platId: a.initOps.platId, gameId: a.initOps.gameId, uid: a.uid, orderId: t, session: a.ddtPlatExtInfo.session, gameToken: a.gameToken },
        o = u.objKeySort(n);o = u.procRequestParams(o), o = decodeURIComponent(o);n.sign = d()(o), wx.request({ url: a.reply_order_url, data: n, method: "POST", header: { "Content-Type": "application/x-www-form-urlencoded;" }, success: function (n) {
        n.result || (l.inst.error("ddtSDKPlat ====== 扣款发货失败", n.data.msg), e.lostOrderId.unshift(t)), wx.setStorageSync("ddtPayOrderLogs", e.lostOrderId);
      }, fail: function (n) {
        l.inst.error("ddtSDKPlat ==== 扣款发货请求失败", n.data.msg), e.lostOrderId.unshift(t), wx.setStorageSync("ddtPayOrderLogs", e.lostOrderId);
      } });
  }, P);function P() {
    var t = m.call(this) || this;return t.RANDOM_STR = "ly", t.createSole(), t.getADParams(), t;
  }v = function (t, e) {
    return (v = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    })(t, e);
  }, e = function (t, e) {
    function n() {
      this.constructor = t;
    }v(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
  };var v,
      I,
      O = function () {
    return (O = Object.assign || function (t) {
      for (var e, n = 1, o = arguments.length; n < o; n++) for (var r in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);return t;
    }).apply(this, arguments);
  },
      b = (e(k, I = n), k.prototype.init = function () {
    I.prototype.init.call(this);
  }, k.prototype.login = function () {
    this._getSystemInfo(), this.loginAuth();
  }, k.prototype.pay = function () {
    I.prototype.pay.call(this), this.platPay();
  }, k.prototype.createOrder = function (t) {
    t = O(O({}, t), { token: this.login_token, appVersion: a.gameVersion, engineVersion: this.engineVersion }), I.prototype.createOrder.call(this, t);
  }, k.prototype.platPay = function () {
    qg.pay({ appId: a.ddtPlatPayInfo.appId, token: this.login_token, timestamp: a.ddtPlatPayInfo.timestamp, paySign: a.ddtPlatPayInfo.paySign, orderNo: a.ddtPlatPayInfo.orderId, success: function (t) {
        a.callback(i.PAY_SUCCESS, "支付成功"), l.inst.log("ddtSDKPlat ===== oppo支付成功", t);
      }, fail: function (t) {
        l.inst.error("ddtSDKPlat ===== oppo支付失败", t), a.callback(i.PAY_FAIL, "支付失败");
      } });
  }, k.prototype._getSystemInfo = function () {
    var t,
        e = qg.getSystemInfoSync();e && (t = { channelVer: a.initOps.channelVer, platId: a.initOps.platId, gameId: a.initOps.gameId, version: e.COREVersion, brand: e.brand, model: e.model, language: e.language, platform: e.platform, platformVersion: e.platformVersion, system: e.system }, this.engineVersion = e.platformVersion, f.postData(a.sdk_device_url, t, function (t) {
      t.result ? l.inst.log("ddtSDKPlat ====== 设备收集上报成功", t) : l.inst.error("ddtSDKPlat ====== 设备收集上报失败", t);
    }));
  }, k.prototype.loginAuth = function () {
    var t = this,
        e = this;qg.login({ success: function (n) {
        var o = n.data ? n.data.token : "unkown";a.platExtInfo = { token: o, pkgName: a.pkgName }, e.login_token = o, l.inst.log("ddtSDKPlat ==== oppo登录成功", n), I.prototype.login.call(t);
      }, fail: function (t) {
        l.inst.error("ddtSDKPlat ==== oppo登录失败", t);
      } });
  }, k);function k() {
    return I.call(this) || this;
  }var w,
      D,
      x = ((w = function (t, e) {
    return (w = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
    })(t, e);
  }, function (t, e) {
    function n() {
      this.constructor = t;
    }w(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
  })(C, D = n), C.prototype.init = function () {
    D.prototype.init.call(this);
  }, C.prototype.login = function () {
    this._getSystemInfo(), this.loginAuth();
  }, C.prototype.pay = function () {
    D.prototype.pay.call(this), this.platPay();
  }, C.prototype.createOrder = function (t) {
    this.payInfo = t, 1056 <= this.platformVersionCode ? D.prototype.createOrder.call(this, t) : l.inst.error("ddtSDKPlat ==== pay:VIVO运行版本号要在1056以上哦");
  }, C.prototype.platPay = function () {
    var t;1056 <= this.platformVersionCode ? (t = 100 * parseInt(this.payInfo.amount), t = { productDesc: this.payInfo.productDesc, appId: a.ddtPlatPayInfo.appId, orderAmount: t, productName: this.payInfo.subject, cpOrderNumber: a.ddtPlatPayInfo.orderId, notifyUrl: a.ddtPlatPayInfo.notifyUrl, vivoSignature: a.ddtPlatPayInfo.vivoSignature }, qg.pay({ orderInfo: JSON.stringify(t), success: function (t) {
        a.callback(i.PAY_SUCCESS, "支付成功"), l.inst.log("ddtSDKPlat ==== VIVO支付成功", t);
      }, fail: function (t) {
        a.callback(i.PAY_FAIL, "支付失败"), l.inst.error("ddtSDKPlat ==== VIVO支付失败", t);
      } })) : l.inst.error("ddtSDKPlat ==== pay:VIVO运行版本号要在1056以上哦");
  }, C.prototype._getSystemInfo = function () {
    var t,
        e = qg.getSystemInfoSync();e && (t = { channelVer: a.initOps.channelVer, platId: a.initOps.platId, gameId: a.initOps.gameId, brand: e.brand, model: e.model, osType: e.osType, osVersionCode: e.osVersionCode, platformVersionName: e.platformVersionName, platformVersionCode: e.platformVersionCode, language: e.language, wifiSignal: e.wifiSignal, isHole: e.isHole, hole_x: e.hole_x, hole_y: e.hole_y, hole_radius: e.hole_radius, isNotch: e.isNotch, statusBarHeight: e.statusBarHeight }, this.platformVersionCode = e.platformVersionCode, f.postData(a.sdk_device_url, t, function (t) {
      t.result ? l.inst.log("ddtSDKPlat ====== 设备收集上报成功", t) : l.inst.error("ddtSDKPlat ====== 设备收集上报失败", t);
    }));
  }, C.prototype.loginAuth = function () {
    var t = this,
        e = this;1053 <= qg.getSystemInfoSync().platformVersionCode ? qg.login().then(function (n) {
      var o = n.data ? n.data.token : "unkown";a.platExtInfo = { token: o, pkgName: a.pkgName }, e.login_token = o, l.inst.log("ddtSDKPlat ==== VIVO登录成功", n), D.prototype.login.call(t);
    }, function (t) {
      l.inst.error("ddtSDKPlat ==== VIVO登录失败", t);
    }) : l.inst.error("ddtSDKPlat ==== login:VIVO运行版本号要在1053以上哦");
  }, C);function C() {
    return D.call(this) || this;
  }var V = (T.dispatchPlatform = function (t) {
    switch (t) {case o.WXMG:
        return new S();case o.OPPO:
        return new b();case o.VIVO:
        return new x();default:
        l.inst.log("ddtSDKPlat ===== 没有该平台id", t);}
  }, T.dispatchUpData = function (t, e) {
    switch (t) {case r.createRole:
        a.mPlat.submitData(r.createRole, e);break;case r.upRoleLevel:
        a.mPlat.submitData(r.upRoleLevel, e);break;case r.enterGame:
        a.mPlat.submitData(r.enterGame, e);break;case r.enterServer:
        a.mPlat.submitData(r.enterServer, e);break;default:
        l.inst.log("ddtSDKPlat ===== 没有该数据上报类型", t);}
  }, T);function T() {}function A() {
    this._version = "1.1.9";
  }A.prototype.init = function (t, e, n) {
    void 0 === n && (n = !1), a.curFlag = d()(t.gameId + t.channelVer + Math.round(Date.now() / 1e3)), a.initOps = t, a.callback = e, a.pkgName = t.pkgName, a.gameVersion = t.gameVersion, l.inst.init(n), a.mPlat = V.dispatchPlatform(t.platId), a.mPlat.init();
  }, A.prototype.submitData = function (t, e) {
    V.dispatchUpData(t, e);
  }, A.prototype.pay = function (t) {
    a.mPlat.createOrder(t);
  }, A.prototype.jump = function (t) {
    var e = a.curApiParams;console.log(e);var n,
        o = { adver: "", channelVer: "", code: "", gameId: "", gameToken: "", gdt_vid: "", mode: "", platId: "", time: "", weixinadinfo: "", sign: "", uid: "" },
        r = {};for (n in e) for (var i in o) n == i && (r[i] = e[i]);var s = u.objKeySort(r);s = u.procRequestParams(s), s = (s = decodeURIComponent(s)) + "&sign=" + d()(s);wx.openCustomerServiceConversation({ sendMessagePath: s, sessionFrom: t || "turngame", showMessageCard: !0 });
  }, A.prototype.toService = function () {
    wx.openCustomerServiceConversation({ sessionFrom: "service" });
  }, Object.defineProperty(A.prototype, "version", { get: function () {
      return this._version;
    }, enumerable: !1, configurable: !0 }), n = A, window && (window.ddtSDKPlat = n), n = new n(), window && (window.ddtSDKPlat = n);
}]);