var _ = wx.y$;
var HOST = _[12767];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[12768]);let o;let n = Date.now();console.log(_[12769] + s);let r = this;wx.request({ url: _[12770] + HOST + _[12771] + t + "/" + a, method: _[12772], dataType: _[12773], header: { "content-type": _[12774] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[12775], path: _[12776] + t + _[12777] + a + _[12778] + e + _[12779] + s, extraData: { foo: _[12780] }, envVersion: _[12781], success(t) {
        wx.showToast({ title: _[12782] });
      } });
  }
}