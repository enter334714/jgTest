var _$ = wx.x$;
var HOST = _$[0];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_$[1]);let o;let n = Date.now();console.log(_$[2] + s);let r = this;wx.request({ url: _$[3] + HOST + _$[4] + t + "/" + a, method: _$[5], dataType: _$[6], header: { "content-type": _$[7] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _$[8], path: _$[9] + t + _$[10] + a + _$[11] + e + _$[12] + s, extraData: { foo: _$[13] }, envVersion: _$[14], success(t) {
        wx.showToast({ title: _$[15] });
      } });
  }
}