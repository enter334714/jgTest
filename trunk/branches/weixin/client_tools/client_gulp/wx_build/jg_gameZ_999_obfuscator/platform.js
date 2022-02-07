var H = wx.$F;
var H = wx.$F;class WxgamePlatform {
  login() {
    return new Promise((t, e) => {
      wx.login({ success: e => {
          t(e);
        } });
    });
  }getUserInfo() {
    return new Promise((t, e) => {
      wx.getUserInfo({ withCredentials: !0, success: function (e) {
          e = e.userInfo;e.nickName;e.avatarUrl;e.gender;e.province;e.city;e.country;t(e);
        } });
    });
  }
}class WxgameOpenDataContext {
  createDisplayObject(e, t, a) {
    const n = new egret.BitmapData(sharedCanvas);n.$deleteSource = !1;const r = new egret.Texture();r._setBitmapData(n);const s = new egret.Bitmap(r);return s.width = t, s.height = a, "webgl" == egret.Capabilities.renderMode && (egret.wxgame.WebGLRenderContext.getInstance().context.wxBindCanvasTexture || egret.startTick(e => (egret.WebGLUtils.deleteWebGLTexture(n.webGLTexture), n.webGLTexture = null, !1), this)), s;
  }postMessage(e) {
    const t = wx.getOpenDataContext();t.postMessage(e);
  }
}WxgamePlatform.prototype.name = "wxgame", WxgamePlatform.prototype.openDataContext = new WxgameOpenDataContext(), window.platform = new WxgamePlatform();