var _ = wx.y$;
var HOST = _[13395];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[13396]);let o;let n = Date.now();console.log(_[13397] + s);let r = this;wx.request({ url: _[13398] + HOST + _[13399] + t + "/" + a, method: _[13400], dataType: _[13401], header: { "content-type": _[13402] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[13403], path: _[13404] + t + _[13405] + a + _[13406] + e + _[13407] + s, extraData: { foo: _[13408] }, envVersion: _[13409], success(t) {
        wx.showToast({ title: _[13410] });
      } });
  }
}