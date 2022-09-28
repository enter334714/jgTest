class JmCore {
  constructor() {
    this.ad_url = "https://cyapi.7xp9.com", this.url = "https://cysdk.7xp9.com", this.appId = "108119", this.package_campaign = "k18sh07l", this.instance = null, this.access_token = null, this.appkey = "dddccb423ab750d2ef0df7a64c063cd4", this.open_id = "", this.user_info = null, this.user_role_info = null, this.version = 20220426;
  }static getInstance() {
    return this.instance || (this.instance = new JmCore(), this.instance);
  }getAccessToken() {
    if (!this.access_token) {
      var e = wx.getStorageSync("jm_access_token");if (!e) return "";this.access_token = e;
    }return this.access_token;
  }getTime() {
    return Date.parse(new Date()) / 1e3;
  }getSign(e = {}, a) {
    return MD5((`access_token=${this.getAccessToken()}&time=${a}&context=${JSON.stringify(e)}&appkey=` + this.appkey).toLocaleLowerCase());
  }getAdInfo() {
    var e = wx.getEnterOptionsSync();let a = { package_campaign: "", campaign_id: "" };if (e.query) for (const t in e.query) a[t] = e.query[t];return a.package_campaign || (a.package_campaign = this.package_campaign), a.campaign_id || (a.campaign_id = this.package_campaign), console.log("\u5e7f\u544a\u4fe1\u606f\uff1a" + JSON.stringify(a)), a;
  }_request(e, a, t) {
    var n = this.getTime();e = this.url + "/v1" + e;wx.request({ url: e, method: "POST", data: { access_token: this.getAccessToken(), sign: this.getSign(a, n), context: JSON.stringify(a), time: n }, header: { "content-type": "application/x-www-form-urlencoded" }, success(e) {
        console.log(e.data), 0 == e.data.code ? t && t(e.data) : 44309 === e.data.code ? wx.showModal({ title: "\u63d0\u793a", content: e.data.message, success: function () {
            wx.exitMiniProgram({ success: e => {} });
          } }) : wx.showToast({ title: "\u8bf7\u6c42\u9519\u8bef! " + (e.data.code || -1), icon: "fail", duration: 2e3 });
      }, fail() {
        wx.showToast({ title: "\u670d\u52a1\u5668\u9519\u8bef", icon: "fail", duration: 2e3 });
      } });
  }_payRequest(e, a, t) {
    this.getTime();wx.request({ url: e, method: "POST", data: a, header: { "content-type": "application/x-www-form-urlencoded" }, success(e) {
        console.log(e.data), 0 == e.data.code ? t && t(e.data) : 44309 === e.data.code ? wx.showModal({ title: "\u63d0\u793a", content: e.data.message, success: function () {
            wx.exitMiniProgram({ success: e => {} });
          } }) : wx.showToast({ title: "\u8bf7\u6c42\u9519\u8bef! " + (e.data.code || -1), icon: "fail", duration: 2e3 });
      }, fail() {
        wx.showToast({ title: "\u670d\u52a1\u5668\u9519\u8bef", icon: "fail", duration: 2e3 });
      } });
  }login(t) {
    let n = this;wx.login({ success(e) {
        var a;console.log("login res", e), e.code ? ((a = n.getAdInfo()).code = e.code, n._request("/user/channel_login", { login_data: JSON.stringify(a) }, e => {
          0 == e.code ? (n.open_id = e.data.channel_user_info.openid, n.user_info = e.data, t && t({ code: 0, msg: "\u767b\u5f55\u6210\u529f", data: { uname: e.data.uname, openid: e.data.openid, game_token: e.data.game_token, wx_openid: e.data.channel_user_info.openid, show_url_after_login: e.data.show_url_after_login } })) : t && t({ code: 1, msg: "\u767b\u5f55\u5931\u8d25", data: {} });
        })) : console.log("\u767b\u5f55\u5931\u8d25\uff01" + e.errMsg);
      } });
  }msgCheck(e, a, t) {
    this._payRequest(this.url + "/pay_back/msgCheck", { content: e, package_campaign: this.package_campaign, openid: this.open_id, scene: a }, e => {
      console.log("msgCheck res", e);var a = { suggest: "risky", label: 21e3 };0 == e.code && (a = JSON.parse(e.data).result), t && t(a);
    });
  }getBalance(e, a) {
    this._request("/channel/getInfo", { openid: e }, e => {
      console.log(e), a && a(e);
    });
  }createOrder(o = {}, e = "", i) {
    let r = this;var a = wx.getSystemInfoSync();var t = "android";a && (t = a.platform), o.platform = t, console.log(o), r._request("/od/weChatMiniGameCreate", o, n => {
      console.log(n), 0 === n.code && ("wx_official_pay" == n.data.pay_type ? r.getBalance(r.open_id, function (e) {
        var a = o.amount / 100 * n.data.wx_official_pay_info.rate;var t = 0;(t = 0 == e.data.errcode ? e.data.balance : t) < a ? wx.requestMidasPayment({ mode: n.data.wx_official_pay_info.mode, env: parseInt(n.data.wx_official_pay_info.env), offerId: n.data.wx_official_pay_info.offerId, currencyType: n.data.wx_official_pay_info.currencyType, platform: "android", buyQuantity: n.data.wx_official_pay_info.buyQuantity, zoneId: parseInt(n.data.wx_official_pay_info.zoneId), success: function (e) {
            console.log(e), r.goMidasPay(n.data.order_id, r.open_id, i);
          }, fail: function (e) {
            console.log(e);
          } }) : r.goMidasPay(n.data.order_id, r.open_id, i);
      }) : wx.openCustomerServiceConversation({ sendMessageImg: "https://pics7.baidu.com/feed/a8773912b31bb051fb37de05c78e64b24bede083.jpeg?token=f02d22e51399a01c6c239e6247cec44f", showMessageCard: !0, sendMessageTitle: e || "\u5145\u503c\u8ba2\u5355:" + n.data.order_id, success: function () {
          console.log("ok");
        } }), i && i(n));
    });
  }goMidasPay(e, a, t) {
    this._payRequest(this.url + "/pay_back/NotifyOfficialWechatMiniGame", { order_id: e, open_id: a }, e => {
      console.log(e), t && t(e);
    });
  }roleReport(e = {}, a, t) {
    e.type = a, this.user_role_info = e, this._request("/role/report", e, e => {
      console.log(e), t && t(e);
    });
  }isTransfer(e = "", a) {
    var t = this.appId;e = e || this.user_role_info.role_id;var n = wx.getSystemInfoSync();let o = "android";n && (o = n.platform);n = { uname: this.user_info.uname, role_id: e, app_id: t, os: o };e = this.url + "/transfer_client/judge";wx.request({ url: e, method: "POST", data: n, header: { "content-type": "application/x-www-form-urlencoded" }, success(e) {
        console.log("transfer_client_judge", e), console.log("transfer_client_judge", e.data.data), a && a(e.data.data);
      }, fail() {
        a && a(0);
      } });
  }transferClient() {
    var e = this.appId;var a = this.package_campaign;var t = this.user_info.uname;var n = this.user_role_info.role_id;var o = wx.getSystemInfoSync();let i = "android";e = "param=vip&app_id=" + e + "&campaign_id=" + a + "&uname=" + t + "&role_id=" + n + "&os=" + (i = o ? o.platform : i);console.log("path", e), console.log("userInfo", this.user_info), wx.openCustomerServiceConversation({ sendMessageImg: "https://s.5tc5.com/balance_shop/material/6356e7c8cce5de87dfb9afee4b311561.jpg", showMessageCard: !0, sendMessageTitle: "\u7ed1\u5b9a\u6709\u793c", sendMessagePath: e, success: function () {
        console.log("ok");
      } });
  }init(a) {
    console.log("verson\uff1a" + this.version), wx.showShareMenu({ withShareTicket: !0, menus: ["shareAppMessage", "shareTimeline"] }), this._request("/app/init", { appid: this.appId, campaign_id: this.package_campaign }, e => {
      this.access_token = e.data.access_token, wx.setStorage({ key: "jm_access_token", data: e.data.access_token }), 0 == e.code ? a && a({ code: 0, msg: "\u521d\u59cb\u5316\u6210\u529f", data: {} }) : a && a({ code: 1, msg: "\u521d\u59cb\u5316\u5931\u8d25", data: {} });
    });
  }
}function MD5(e) {
  var i = 0;function hex_md5(e) {
    return rstr2hex(rstr_md5(str2rstr_utf8(e)));
  }function rstr_md5(e) {
    return binl2rstr(binl_md5(rstr2binl(e), 8 * e.length));
  }function rstr2hex(e) {
    var a = i ? "0123456789ABCDEF" : "0123456789abcdef";var t = "";var n;for (var o = 0; o < e.length; o++) n = e.charCodeAt(o), t += a.charAt(n >>> 4 & 15) + a.charAt(15 & n);return t;
  }function str2rstr_utf8(e) {
    var a = "";var t = -1;var n, o;for (; ++t < e.length;) n = e.charCodeAt(t), o = t + 1 < e.length ? e.charCodeAt(t + 1) : 0, 55296 <= n && n <= 56319 && 56320 <= o && o <= 57343 && (n = 65536 + ((1023 & n) << 10) + (1023 & o), t++), n <= 127 ? a += String.fromCharCode(n) : n <= 2047 ? a += String.fromCharCode(192 | n >>> 6 & 31, 128 | 63 & n) : n <= 65535 ? a += String.fromCharCode(224 | n >>> 12 & 15, 128 | n >>> 6 & 63, 128 | 63 & n) : n <= 2097151 && (a += String.fromCharCode(240 | n >>> 18 & 7, 128 | n >>> 12 & 63, 128 | n >>> 6 & 63, 128 | 63 & n));return a;
  }function rstr2binl(e) {
    var a = Array(e.length >> 2);for (var t = 0; t < a.length; t++) a[t] = 0;for (t = 0; t < 8 * e.length; t += 8) a[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;return a;
  }function binl2rstr(e) {
    var a = "";for (var t = 0; t < 32 * e.length; t += 8) a += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);return a;
  }function binl_md5(e, a) {
    e[a >> 5] |= 128 << a % 32, e[14 + (a + 64 >>> 9 << 4)] = a;var t = 1732584193;var n = -271733879;var o = -1732584194;var i = 271733878;for (var r = 0; r < e.length; r += 16) {
      var s = t;var d = n;var c = o;var _ = i;t = md5_ff(t, n, o, i, e[r + 0], 7, -680876936), i = md5_ff(i, t, n, o, e[r + 1], 12, -389564586), o = md5_ff(o, i, t, n, e[r + 2], 17, 606105819), n = md5_ff(n, o, i, t, e[r + 3], 22, -1044525330), t = md5_ff(t, n, o, i, e[r + 4], 7, -176418897), i = md5_ff(i, t, n, o, e[r + 5], 12, 1200080426), o = md5_ff(o, i, t, n, e[r + 6], 17, -1473231341), n = md5_ff(n, o, i, t, e[r + 7], 22, -45705983), t = md5_ff(t, n, o, i, e[r + 8], 7, 1770035416), i = md5_ff(i, t, n, o, e[r + 9], 12, -1958414417), o = md5_ff(o, i, t, n, e[r + 10], 17, -42063), n = md5_ff(n, o, i, t, e[r + 11], 22, -1990404162), t = md5_ff(t, n, o, i, e[r + 12], 7, 1804603682), i = md5_ff(i, t, n, o, e[r + 13], 12, -40341101), o = md5_ff(o, i, t, n, e[r + 14], 17, -1502002290), t = md5_gg(t, n = md5_ff(n, o, i, t, e[r + 15], 22, 1236535329), o, i, e[r + 1], 5, -165796510), i = md5_gg(i, t, n, o, e[r + 6], 9, -1069501632), o = md5_gg(o, i, t, n, e[r + 11], 14, 643717713), n = md5_gg(n, o, i, t, e[r + 0], 20, -373897302), t = md5_gg(t, n, o, i, e[r + 5], 5, -701558691), i = md5_gg(i, t, n, o, e[r + 10], 9, 38016083), o = md5_gg(o, i, t, n, e[r + 15], 14, -660478335), n = md5_gg(n, o, i, t, e[r + 4], 20, -405537848), t = md5_gg(t, n, o, i, e[r + 9], 5, 568446438), i = md5_gg(i, t, n, o, e[r + 14], 9, -1019803690), o = md5_gg(o, i, t, n, e[r + 3], 14, -187363961), n = md5_gg(n, o, i, t, e[r + 8], 20, 1163531501), t = md5_gg(t, n, o, i, e[r + 13], 5, -1444681467), i = md5_gg(i, t, n, o, e[r + 2], 9, -51403784), o = md5_gg(o, i, t, n, e[r + 7], 14, 1735328473), t = md5_hh(t, n = md5_gg(n, o, i, t, e[r + 12], 20, -1926607734), o, i, e[r + 5], 4, -378558), i = md5_hh(i, t, n, o, e[r + 8], 11, -2022574463), o = md5_hh(o, i, t, n, e[r + 11], 16, 1839030562), n = md5_hh(n, o, i, t, e[r + 14], 23, -35309556), t = md5_hh(t, n, o, i, e[r + 1], 4, -1530992060), i = md5_hh(i, t, n, o, e[r + 4], 11, 1272893353), o = md5_hh(o, i, t, n, e[r + 7], 16, -155497632), n = md5_hh(n, o, i, t, e[r + 10], 23, -1094730640), t = md5_hh(t, n, o, i, e[r + 13], 4, 681279174), i = md5_hh(i, t, n, o, e[r + 0], 11, -358537222), o = md5_hh(o, i, t, n, e[r + 3], 16, -722521979), n = md5_hh(n, o, i, t, e[r + 6], 23, 76029189), t = md5_hh(t, n, o, i, e[r + 9], 4, -640364487), i = md5_hh(i, t, n, o, e[r + 12], 11, -421815835), o = md5_hh(o, i, t, n, e[r + 15], 16, 530742520), t = md5_ii(t, n = md5_hh(n, o, i, t, e[r + 2], 23, -995338651), o, i, e[r + 0], 6, -198630844), i = md5_ii(i, t, n, o, e[r + 7], 10, 1126891415), o = md5_ii(o, i, t, n, e[r + 14], 15, -1416354905), n = md5_ii(n, o, i, t, e[r + 5], 21, -57434055), t = md5_ii(t, n, o, i, e[r + 12], 6, 1700485571), i = md5_ii(i, t, n, o, e[r + 3], 10, -1894986606), o = md5_ii(o, i, t, n, e[r + 10], 15, -1051523), n = md5_ii(n, o, i, t, e[r + 1], 21, -2054922799), t = md5_ii(t, n, o, i, e[r + 8], 6, 1873313359), i = md5_ii(i, t, n, o, e[r + 15], 10, -30611744), o = md5_ii(o, i, t, n, e[r + 6], 15, -1560198380), n = md5_ii(n, o, i, t, e[r + 13], 21, 1309151649), t = md5_ii(t, n, o, i, e[r + 4], 6, -145523070), i = md5_ii(i, t, n, o, e[r + 11], 10, -1120210379), o = md5_ii(o, i, t, n, e[r + 2], 15, 718787259), n = md5_ii(n, o, i, t, e[r + 9], 21, -343485551), t = safe_add(t, s), n = safe_add(n, d), o = safe_add(o, c), i = safe_add(i, _);
    }return Array(t, n, o, i);
  }function md5_cmn(e, a, t, n, o, i) {
    return safe_add((a = safe_add(safe_add(a, e), safe_add(n, i))) << o | a >>> 32 - o, t);
  }function md5_ff(e, a, t, n, o, i, r) {
    return md5_cmn(a & t | ~a & n, e, a, o, i, r);
  }function md5_gg(e, a, t, n, o, i, r) {
    return md5_cmn(a & n | t & ~n, e, a, o, i, r);
  }function md5_hh(e, a, t, n, o, i, r) {
    return md5_cmn(a ^ t ^ n, e, a, o, i, r);
  }function md5_ii(e, a, t, n, o, i, r) {
    return md5_cmn(t ^ (a | ~n), e, a, o, i, r);
  }function safe_add(e, a) {
    var t = (65535 & e) + (65535 & a);return (e >> 16) + (a >> 16) + (t >> 16) << 16 | 65535 & t;
  }return hex_md5(e);
}module.exports = JmCore.getInstance();class OrderParam {
  openid;cp_order_id;product_label;order_name;amount;role_id;role_name;level;gender;server_no;server_name;balance;power;vip_level;ext;
}