var _ = wx.y$;
var HOST = _[13344];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[13345]);let o;let n = Date.now();console.log(_[13346] + s);let r = this;wx.request({ url: _[13347] + HOST + _[13348] + t + "/" + a, method: _[13349], dataType: _[13350], header: { "content-type": _[13351] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[13352], path: _[13353] + t + _[13354] + a + _[13355] + e + _[13356] + s, extraData: { foo: _[13357] }, envVersion: _[13358], success(t) {
        wx.showToast({ title: _[13359] });
      } });
  }
}