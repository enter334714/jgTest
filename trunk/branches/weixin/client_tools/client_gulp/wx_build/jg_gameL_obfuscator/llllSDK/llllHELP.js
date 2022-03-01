var W = wx.$l;
var HOST = W[29947];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(W[29948]);let o;let n = Date.now();console.log(W[29949] + s);let r = this;wx.request({ url: W[26336] + HOST + W[29950] + t + "/" + a, method: W[630], dataType: W[6561], header: { "content-type": W[764] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: W[29951], path: W[29952] + t + W[29953] + a + W[29954] + e + W[29955] + s, extraData: { foo: W[21216] }, envVersion: W[29956], success(t) {
        wx.showToast({ title: W[29957] });
      } });
  }
}