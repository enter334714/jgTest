var _ = wx.y$;
var HOST = _[12743];var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync(_[12744]);let o;let n = Date.now();console.log(_[12745] + s);let r = this;wx.request({ url: _[12746] + HOST + _[12747] + t + "/" + a, method: _[12748], dataType: _[12749], header: { "content-type": _[12750] }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: _[12751], path: _[12752] + t + _[12753] + a + _[12754] + e + _[12755] + s, extraData: { foo: _[12756] }, envVersion: _[12757], success(t) {
        wx.showToast({ title: _[12758] });
      } });
  }
}