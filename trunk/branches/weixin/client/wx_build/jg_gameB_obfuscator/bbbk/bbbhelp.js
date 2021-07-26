var _ = wx.y$;
var HOST = _[12783];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[12784]);let o;let n = Date.now();console.log(_[12785] + s);let r = this;wx.request({ url: _[12786] + HOST + _[12787] + t + "/" + a, method: _[12788], dataType: _[12789], header: { "content-type": _[12790] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[12791], path: _[12792] + t + _[12793] + a + _[12794] + e + _[12795] + s, extraData: { foo: _[12796] }, envVersion: _[12797], success(t) {
        wx.showToast({ title: _[12798] });
      } });
  }
}