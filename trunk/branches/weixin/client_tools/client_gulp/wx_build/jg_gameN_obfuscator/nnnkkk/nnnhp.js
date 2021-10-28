var A = wx.$N;
export default class FunGame {
  constructor() {
    this.host = A[200000];
  }sign(o) {
    var l = "";var e = Object.keys(o);return e.sort(), e.forEach(e => {
      A[200001] != e && (l += o[e]);
    }), l;
  }setParameter(e, o, l) {
    e = e.replace(/(#.*)/gi, "");var n = new RegExp(A[200002] + o + "=([^&]*)(?=&|$)", "i");return n.test(e) ? e.replace(n, "$1" + o + "=" + l) : e + (-1 == e.indexOf("?") ? "?" : "&") + o + "=" + l;
  }ajaxRequest(e, o, l, n) {
    e = this.setParameter(e, "v", Math.random());wx.request({ url: e, header: { "content-type": A[200003] }, method: A[200004], data: o, dataType: A[200005], success: function (e) {
        l && l(e.data);
      }, fail: function (e) {
        n && n(e);
      } });
  }game(e, o, l) {
    var n;console.log(A[200006]), e.game_key ? (n = this.host + A[200007], this.ajaxRequest(n, e, o, l)) : console.log(A[200008]);
  }wxChannelCode() {
    console.log(A[200009]);var e = wx.getLaunchOptionsSync()[A[200010]];var o = decodeURIComponent(e.query);var l = new Object();if (A[200011] != o && "" != o) l.code = o, l.type = 1e4;else {
      const r = decodeURIComponent(e.scene);if (A[200011] == r) return l;var n = r.split("&");for (var s = 0; s < n.length; s++) l[n[s].split("=")[0]] = n[s].split("=")[1];
    }return l;
  }role(e, o, l) {
    var n;console.log(A[200012]), e.host_url ? e.game_key ? e.account ? e.server ? e.server_name ? e.role ? e.role_name ? e.level ? (null != e.type && "" != e.type && null != e.type || (e.type = 0), e.sign = this.sign(e), n = e.host_url + A[200013], this.ajaxRequest(n, e, o, l)) : console.log(A[200014]) : console.log("\u7f3a\u5c11role_name") : console.log(A[200015]) : console.log("\u7f3a\u5c11server_name") : console.log(A[200016]) : console.log(A[200017]) : console.log(A[200008]) : console.log(A[200018]);
  }order(e, o, l) {
    var n;console.log(A[200019]), e.host_url ? e.game_key ? e.account ? e.server ? e.role ? e.amount ? (e.sign = this.sign(e), n = e.host_url + A[200020], this.ajaxRequest(n, e, o, l)) : console.log(A[200021]) : console.log(A[200015]) : console.log(A[200016]) : console.log(A[200017]) : console.log(A[200008]) : console.log(A[200018]);
  }gameLogin(e, o, l) {
    var n;console.log(A[200022]), e.host_url ? e.game_key ? e.code ? (n = e.host_url + A[200023], this.ajaxRequest(n, e, o, l)) : console.log(A[200024]) : console.log(A[200008]) : console.log(A[200018]);
  }gameToken(e, o, l) {
    var n;console.log(A[200025]), e.host_url ? e.game_key ? (n = e.host_url + A[200026], this.ajaxRequest(n, e, o, l)) : console.log(A[200008]) : console.log(A[200018]);
  }midasNotice(l, n, s) {
    var r;console.log(A[200027]), null != l.game_env && "" != l.game_env && null != l.game_env || (l.game_env = 0), l.offer_id ? l.currency_type ? l.amount ? l.server ? l.game_key ? l.host_url ? l.account ? l.role ? (r = this, wx.requestMidasPayment({ currencyType: l.currency_type, env: l.game_env, mode: A[200028], offerId: l.offer_id, buyQuantity: l.amount, platform: A[200029], zoneId: "1", success(e) {
        console.log(A[200030]);var o = l.host_url + A[200031];r.ajaxRequest(o, l, n, s);
      }, fail(e) {
        console.log(e);
      } })) : console.log(A[200015]) : console.log(A[200017]) : console.log(A[200018]) : console.log(A[200008]) : console.log(A[200016]) : console.log(A[200021]) : console.log(A[200032]) : console.log(A[200033]);
  }
}