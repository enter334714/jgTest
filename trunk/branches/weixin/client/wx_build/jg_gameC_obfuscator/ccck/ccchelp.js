var p = wx.$h;
var HOST = p[25801];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(p[25802]);let o;let n = Date.now();console.log(p[25803] + s);let r = this;wx.request({ url: p[25804] + HOST + p[25805] + t + "/" + a, method: p[25806], dataType: p[218], header: { "content-type": p[25807] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: p[25808], path: p[25809] + t + p[25810] + a + p[25811] + e + p[25812] + s, extraData: { foo: p[19019] }, envVersion: p[25813], success(t) {
        wx.showToast({ title: p[25814] });
      } });
  }
}