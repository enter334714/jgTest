var _ = wx.y$;
var HOST = _[12725];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[12726]);let o;let n = Date.now();console.log(_[12727] + s);let r = this;wx.request({ url: _[12728] + HOST + _[12729] + t + "/" + a, method: _[12730], dataType: _[12731], header: { "content-type": _[12732] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[12733], path: _[12734] + t + _[12735] + a + _[12736] + e + _[12737] + s, extraData: { foo: _[12738] }, envVersion: _[12739], success(t) {
        wx.showToast({ title: _[12740] });
      } });
  }
}