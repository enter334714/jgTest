var p = wx.$h;
var HOST = p[0x33aa];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(p[0x33ab]);let o;let n = Date.now();console.log(p[0x33ac] + s);let r = this;wx.request({ url: p[0x33ad] + HOST + p[0x33ae] + t + "/" + a, method: p[0x33af], dataType: p[0x33b0], header: { "content-type": p[0x33b1] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: p[0x33b2], path: p[0x33b3] + t + p[0x33b4] + a + p[0x33b5] + e + p[0x33b6] + s, extraData: { foo: p[0x33b7] }, envVersion: p[0x33b8], success(t) {
        wx.showToast({ title: p[0x33b9] });
      } });
  }
}