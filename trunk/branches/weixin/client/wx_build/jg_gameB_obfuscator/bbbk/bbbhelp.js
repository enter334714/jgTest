var _ = wx.y$;
var HOST = _[27341];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[27342]);let o;let n = Date.now();console.log(_[27343] + s);let r = this;wx.request({ url: _[27344] + HOST + _[27345] + t + "/" + a, method: _[27346], dataType: _[218], header: { "content-type": _[27347] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[27348], path: _[27349] + t + _[27350] + a + _[27351] + e + _[27352] + s, extraData: { foo: _[19936] }, envVersion: _[27353], success(t) {
        wx.showToast({ title: _[27354] });
      } });
  }
}