var A = wx.$N;
export default class FunGame {
  constructor() {
    this.host = A[0x0];
  }sign(o) {
    var s = "";var e = Object.keys(o);return e.sort(), e.forEach(e => {
      A[0x1] != e && (s += o[e]);
    }), s;
  }setParameter(e, o, s) {
    e = e.replace(/(#.*)/gi, "");var l = new RegExp(A[0x2] + o + "=([^&]*)(?=&|$)", "i");return l.test(e) ? e.replace(l, "$1" + o + "=" + s) : e + (-1 == e.indexOf("?") ? "?" : "&") + o + "=" + s;
  }ajaxRequest(e, o, s, l) {
    e = this.setParameter(e, "v", Math.random());wx.request({ url: e, header: { "content-type": A[0x3] }, method: A[0x4], data: o, dataType: A[0x5], success: function (e) {
        s && s(e.data);
      }, fail: function (e) {
        l && l(e);
      } });
  }game(e, o, s) {
    var l;console.log(A[0x6]), e.game_key ? (l = this.host + A[0x7], this.ajaxRequest(l, e, o, s)) : console.log(A[0x8]);
  }wxChannelCode() {
    console.log(A[0x9]);var e = wx.getLaunchOptionsSync()[A[0xa]];var o = decodeURIComponent(e.query);var s = new Object();if (A[0xb] != o && "" != o) s.code = o, s.type = 1e4;else {
      const t = decodeURIComponent(e.scene);if (A[0xb] == t) return s;var l = t.split("&");for (var n = 0; n < l.length; n++) s[l[n].split("=")[0]] = l[n].split("=")[1];
    }return s;
  }role(e, o, s) {
    var l;console.log(A[0xc]), e.host_url ? e.game_key ? e.account ? e.server ? e.server_name ? e.role ? e.role_name ? e.level ? (null != e.type && "" != e.type && null != e.type || (e.type = 0), e.sign = this.sign(e), l = e.host_url + A[0xd], this.ajaxRequest(l, e, o, s)) : console.log(A[0xe]) : console.log("\u7f3a\u5c11role_name") : console.log(A[0xf]) : console.log("\u7f3a\u5c11server_name") : console.log(A[0x10]) : console.log(A[0x11]) : console.log(A[0x8]) : console.log(A[0x12]);
  }order(e, o, s) {
    var l;console.log(A[0x13]), e.host_url ? e.game_key ? e.account ? e.server ? e.role ? e.amount ? (e.sign = this.sign(e), l = e.host_url + A[0x14], this.ajaxRequest(l, e, o, s)) : console.log(A[0x15]) : console.log(A[0xf]) : console.log(A[0x10]) : console.log(A[0x11]) : console.log(A[0x8]) : console.log(A[0x12]);
  }gameLogin(e, o, s) {
    var l;console.log(A[0x16]), e.host_url ? e.game_key ? e.code ? (l = e.host_url + A[0x17], this.ajaxRequest(l, e, o, s)) : console.log(A[0x18]) : console.log(A[0x8]) : console.log(A[0x12]);
  }gameToken(e, o, s) {
    var l;console.log(A[0x19]), e.host_url ? e.game_key ? (l = e.host_url + A[0x1a], this.ajaxRequest(l, e, o, s)) : console.log(A[0x8]) : console.log(A[0x12]);
  }midasNotice(s, l, n) {
    var t, a;console.log(A[0x1b]), null != s.game_env && "" != s.game_env && null != s.game_env || (s.game_env = 0), s.offer_id ? s.currency_type ? s.amount ? s.server ? s.game_key ? s.host_url ? s.account ? s.role ? (t = this, a = !1, wx.requestMidasPayment({ currencyType: s.currency_type, env: s.game_env, mode: A[0x1c], offerId: s.offer_id, buyQuantity: s.amount, platform: A[0x1d], zoneId: "1", success(e) {
        a = !0, console.log(A[0x1e]);var o = s.host_url + A[0x1f];t.ajaxRequest(o, s, l, n);
      }, fail(e) {
        console.log(e);
      }, complete(e) {
        var o;0 == a && (console.log(A[0x20]), o = s.host_url + A[0x1f], t.ajaxRequest(o, s, l, n));
      } })) : console.log(A[0xf]) : console.log(A[0x11]) : console.log(A[0x12]) : console.log(A[0x8]) : console.log(A[0x10]) : console.log(A[0x15]) : console.log(A[0x21]) : console.log(A[0x22]);
  }midasOrderSubmit(e, o, s) {
    var l;console.log(A[0x23]), e.host_url ? e.game_key ? e.account ? e.server ? e.role ? e.extend ? e.amount ? (e.sign = this.sign(e), l = e.host_url + A[0x24], this.ajaxRequest(l, e, o, s)) : console.log(A[0x15]) : console.log(A[0x25]) : console.log(A[0xf]) : console.log(A[0x10]) : console.log(A[0x11]) : console.log(A[0x8]) : console.log(A[0x12]);
  }checkWords(e, o, s) {
    var l;console.log(A[0x26]), e.host_url ? e.game_key ? e.account ? e.scene ? e.content ? (l = e.host_url + A[0x27], this.ajaxRequest(l, e, o, s)) : console.log(A[0x28]) : console.log(A[0x29]) : console.log(A[0x11]) : console.log(A[0x8]) : console.log(A[0x12]);
  }gameCenter(e, o, s) {
    var l;console.log(A[0x2a]), e.host_url ? e.game_key ? (l = e.host_url + A[0x2b], this.ajaxRequest(l, e, o, s)) : console.log(A[0x8]) : console.log(A[0x12]);
  }openGame(e, o, s) {
    console.log(A[0x2c]), e.app_id ? wx.navigateToMiniProgram({ appId: e.app_id, path: e.path, envVersion: e.env_version, success(e) {}, fail(e) {} }) : console.log(A[0x2d]);
  }vipDesc(e, o, s) {
    var l;console.log(A[0x2e]), e.host_url ? e.game_key ? (l = e.host_url + A[0x2f], this.ajaxRequest(l, e, o, s)) : console.log(A[0x8]) : console.log(A[0x12]);
  }wxFollowSteps(e, o, s) {
    var l;console.log(A[0x30]), e.host_url ? e.game_key ? (l = e.host_url + A[0x31], this.ajaxRequest(l, e, o, s)) : console.log(A[0x8]) : console.log(A[0x12]);
  }openCustomerService() {
    wx.showModal({ title: A[0x32], content: A[0x33], showCancel: !1, confirmText: A[0x34], success(e) {
        wx.openCustomerServiceConversation({ showMessageCard: !0, sendMessageTitle: A[0x35], sendMessageImg: A[0x36] });
      } });
  }
}