var _ = wx.y$;
var HOST = _[13226];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[13227]);let o;let n = Date.now();console.log(_[13228] + s);let r = this;wx.request({ url: _[13229] + HOST + _[13230] + t + "/" + a, method: _[13231], dataType: _[13232], header: { "content-type": _[13233] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[13234], path: _[13235] + t + _[13236] + a + _[13237] + e + _[13238] + s, extraData: { foo: _[13239] }, envVersion: _[13240], success(t) {
        wx.showToast({ title: _[13241] });
      } });
  }
}