var W = wx.$l;
var HOST = W[110064];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(W[110065]);let o;let n = Date.now();console.log(W[110066] + s);let r = this;wx.request({ url: W[110067] + HOST + W[110068] + t + "/" + a, method: W[80573], dataType: W[81188], header: { "content-type": W[80701] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: W[110069], path: W[110070] + t + W[110071] + a + W[110072] + e + W[110073] + s, extraData: { foo: W[82370] }, envVersion: W[81836], success(t) {
        wx.showToast({ title: W[110074] });
      } });
  }
}