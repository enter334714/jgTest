var _ = wx.y$;
var HOST = _[27538];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[27539]);let o;let n = Date.now();console.log(_[27540] + s);let r = this;wx.request({ url: _[27541] + HOST + _[27542] + t + "/" + a, method: _[27543], dataType: _[5824], header: { "content-type": _[27544] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[27545], path: _[27546] + t + _[27547] + a + _[27548] + e + _[27549] + s, extraData: { foo: _[19778] }, envVersion: _[27550], success(t) {
        wx.showToast({ title: _[27551] });
      } });
  }
}