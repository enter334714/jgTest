var _ = wx.y$;
var HOST = _[27657];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[27658]);let o;let n = Date.now();console.log(_[27659] + s);let r = this;wx.request({ url: _[27660] + HOST + _[27661] + t + "/" + a, method: _[27326], dataType: _[5684], header: { "content-type": _[27431] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[27662], path: _[27663] + t + _[27664] + a + _[27665] + e + _[27666] + s, extraData: { foo: _[19548] }, envVersion: _[27667], success(t) {
        wx.showToast({ title: _[27668] });
      } });
  }
}