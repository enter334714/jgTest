var _ = wx.y$;
var HOST = _[13934];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[13935]);let o;let n = Date.now();console.log(_[13936] + s);let r = this;wx.request({ url: _[13937] + HOST + _[13938] + t + "/" + a, method: _[13708], dataType: _[13939], header: { "content-type": _[13771] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[13940], path: _[13941] + t + _[13942] + a + _[13943] + e + _[13944] + s, extraData: { foo: _[13945] }, envVersion: _[13946], success(t) {
        wx.showToast({ title: _[13947] });
      } });
  }
}