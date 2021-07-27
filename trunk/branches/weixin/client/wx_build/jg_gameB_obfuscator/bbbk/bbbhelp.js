var _ = wx.y$;
var HOST = _[13219];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[13220]);let o;let n = Date.now();console.log(_[13221] + s);let r = this;wx.request({ url: _[13222] + HOST + _[13223] + t + "/" + a, method: _[13224], dataType: _[13225], header: { "content-type": _[13226] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[13227], path: _[13228] + t + _[13229] + a + _[13230] + e + _[13231] + s, extraData: { foo: _[13232] }, envVersion: _[13233], success(t) {
        wx.showToast({ title: _[13234] });
      } });
  }
}