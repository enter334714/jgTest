var _ = wx.y$;
var HOST = _[27400];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[27401]);let o;let n = Date.now();console.log(_[27402] + s);let r = this;wx.request({ url: _[27403] + HOST + _[27404] + t + "/" + a, method: _[27405], dataType: _[5696], header: { "content-type": _[27406] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[27407], path: _[27408] + t + _[27409] + a + _[27410] + e + _[27411] + s, extraData: { foo: _[19648] }, envVersion: _[27412], success(t) {
        wx.showToast({ title: _[27413] });
      } });
  }
}