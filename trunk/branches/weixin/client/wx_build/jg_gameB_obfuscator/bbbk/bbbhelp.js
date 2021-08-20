var _ = wx.y$;
var HOST = _[13393];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[13394]);let o;let n = Date.now();console.log(_[13395] + s);let r = this;wx.request({ url: _[13396] + HOST + _[13397] + t + "/" + a, method: _[13398], dataType: _[13399], header: { "content-type": _[13400] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[13401], path: _[13402] + t + _[13403] + a + _[13404] + e + _[13405] + s, extraData: { foo: _[13406] }, envVersion: _[13407], success(t) {
        wx.showToast({ title: _[13408] });
      } });
  }
}