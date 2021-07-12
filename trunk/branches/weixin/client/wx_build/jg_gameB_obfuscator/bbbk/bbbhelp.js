var _ = wx.y$;
var HOST = _[11677];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[11678]);let o;let n = Date.now();console.log(_[11679] + s);let r = this;wx.request({ url: _[11680] + HOST + _[11681] + t + "/" + a, method: _[11682], dataType: _[11683], header: { "content-type": _[11684] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[11685], path: _[11686] + t + _[11687] + a + _[11688] + e + _[11689] + s, extraData: { foo: _[11690] }, envVersion: _[11691], success(t) {
        wx.showToast({ title: _[11692] });
      } });
  }
}