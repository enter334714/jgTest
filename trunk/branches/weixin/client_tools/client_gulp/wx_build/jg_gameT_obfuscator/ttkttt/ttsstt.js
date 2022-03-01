var M = wx.$T;
var HOST = M[1707];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync("plat_username");let o;let n = Date.now();console.log(M[1803] + s);let r = this;wx.request({ url: M[1723] + HOST + M[1804] + t + "/" + a, method: M[220], dataType: M[1172], header: { "content-type": M[362] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: M[1805], path: M[1806] + t + M[1807] + a + M[1808] + e + M[1809] + s, extraData: { foo: M[1810] }, envVersion: M[1770], success(t) {
        wx.showToast({ title: M[1811] });
      } });
  }
}