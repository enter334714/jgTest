var HOST = "sdk.sh9130.com";var that = this;export default class Dall {
  stebutonanimation(t, a, e) {
    let s = wx.getStorageSync("plat_username");let o;let n = Date.now();console.log("\u7528\u6237username\uff1a" + s);let r = this;wx.request({ url: "https://" + HOST + "/partner/data/guide_download/" + t + "/" + a, method: "POST", dataType: "json", header: { "content-type": "application/x-www-form-urlencoded" }, data: { username: s, ts: n }, success: function (t) {
        o = t.data.data, r.Getto(s, n, o, e);
      } });
  }Getto(t, a, e, s) {
    wx.navigateToMiniProgram({ appId: "wxd306157f7c36f7da", path: "pages/chat/chat?username=" + t + "&ts=" + a + "&sign=" + e + "&type=" + s, extraData: { foo: "bar" }, envVersion: "release", success(t) {
        wx.showToast({ title: "\u8df3\u8f6c\u6210\u529f" });
      } });
  }
}