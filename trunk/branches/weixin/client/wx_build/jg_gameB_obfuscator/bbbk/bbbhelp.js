var _ = wx.y$;
var HOST = _[13046];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[13047]);let o;let n = Date.now();console.log(_[13048] + s);let r = this;wx.request({ url: _[13049] + HOST + _[13050] + t + "/" + a, method: _[12850], dataType: _[13051], header: { "content-type": _[12906] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[13052], path: _[13053] + t + _[13054] + a + _[13055] + e + _[13056] + s, extraData: { foo: _[13057] }, envVersion: _[13058], success(t) {
        wx.showToast({ title: _[13059] });
      } });
  }
}