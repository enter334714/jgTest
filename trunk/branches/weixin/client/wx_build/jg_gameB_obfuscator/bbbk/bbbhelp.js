var _ = wx.y$;
var HOST = _[13788];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[13789]);let o;let n = Date.now();console.log(_[13790] + s);let r = this;wx.request({ url: _[13791] + HOST + _[13792] + t + "/" + a, method: _[13793], dataType: _[13794], header: { "content-type": _[13795] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[13796], path: _[13797] + t + _[13798] + a + _[13799] + e + _[13800] + s, extraData: { foo: _[13801] }, envVersion: _[13802], success(t) {
        wx.showToast({ title: _[13803] });
      } });
  }
}