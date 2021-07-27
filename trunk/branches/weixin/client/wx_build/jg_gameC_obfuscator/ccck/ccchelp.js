var p = wx.$h;
var HOST = p[0x31c0];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(p[0x31c1]);let o;let n = Date.now();console.log(p[0x31c2] + s);let r = this;wx.request({ url: p[0x31c3] + HOST + p[0x31c4] + t + "/" + a, method: p[0x31c5], dataType: p[0x31c6], header: { "content-type": p[0x31c7] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: p[0x31c8], path: p[0x31c9] + t + p[0x31ca] + a + p[0x31cb] + e + p[0x31cc] + s, extraData: { foo: p[0x31cd] }, envVersion: p[0x31ce], success(t) {
        wx.showToast({ title: p[0x31cf] });
      } });
  }
}