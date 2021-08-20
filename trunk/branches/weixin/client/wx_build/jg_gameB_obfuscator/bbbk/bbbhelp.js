var _ = wx.y$;
var HOST = _[13391];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[13392]);let o;let n = Date.now();console.log(_[13393] + s);let r = this;wx.request({ url: _[13394] + HOST + _[13395] + t + "/" + a, method: _[13396], dataType: _[13397], header: { "content-type": _[13398] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[13399], path: _[13400] + t + _[13401] + a + _[13402] + e + _[13403] + s, extraData: { foo: _[13404] }, envVersion: _[13405], success(t) {
        wx.showToast({ title: _[13406] });
      } });
  }
}