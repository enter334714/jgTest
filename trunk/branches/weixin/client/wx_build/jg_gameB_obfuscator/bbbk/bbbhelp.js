var _ = wx.y$;
var HOST = _[13179];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[13180]);let o;let n = Date.now();console.log(_[13181] + s);let r = this;wx.request({ url: _[13182] + HOST + _[13183] + t + "/" + a, method: _[13184], dataType: _[13185], header: { "content-type": _[13186] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[13187], path: _[13188] + t + _[13189] + a + _[13190] + e + _[13191] + s, extraData: { foo: _[13192] }, envVersion: _[13193], success(t) {
        wx.showToast({ title: _[13194] });
      } });
  }
}