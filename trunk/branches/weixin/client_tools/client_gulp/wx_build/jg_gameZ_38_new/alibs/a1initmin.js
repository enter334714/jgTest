"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
  };return function (t, e) {
    function $e() {
      this.constructor = t;
    }i(t, e), t.prototype = null === e ? Object.create(e) : ($e.prototype = e.prototype, new $e());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (t) {
  __extends($d, i = View), $d.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.$c.uiView);
  }, $d.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "a7a2/a103c.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "a7a2/a107c.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "a7a2/a104c.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "a7a2/a105c.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "a7a2/a106c.jpg", left: 720, height: 1280, centerY: 0 } }] }] };var e = $d;function $d() {
    return i.call(this) || this;
  }var i;t.$c = e;
}(ui = ui || {}), function (t) {
  __extends($d, i = View), $d.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.$d.uiView);
  }, $d.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "a7a2/a101c.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "a7a1/a13c.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "a7a1/a14c.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "a7a1/a16c.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "a7a1/a17c.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "a7a1/a20c.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "a7a1/a19c.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "a7a1/a18c.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "a7a1/a18c.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "a7a1/a1c.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }] };var e = $d;function $d() {
    return i.call(this) || this;
  }var i;t.$d = e;
}(ui = ui || {}), function (t) {
  __extends($d, i = View), $d.prototype.createChildren = function () {
    View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), View.regComponent("Text", laya.display.Text), i.prototype.createChildren.call(this), this.createView(t.$e.uiView);
  }, $d.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "a7a2/a103c.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "a7a2/a107c.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "a7a2/a104c.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "a7a2/a105c.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "a7a2/a106c.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "a7a2/a121c.png", centerX: 0 } }, { type: "Image", props: { y: 1102, var: "imgCheatTip", skin: "a7a2/a127c.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 927, x: 159, var: "hotImage", skin: "a7a2/a118c.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "a7a2/a101c.png", centerX: 0, bottom: 30 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "a7a2/e12b.png", name: "enterBtn", centerX: 0 } }, { type: "Image", props: { x: 196, visible: !1, var: "privacyToggle", skin: "a7a2/a129c.png", bottom: 4 } }, { type: "Label", props: { y: 640, x: 0, width: 720, var: "txtTip", valign: "middle", text: "\u63d0\u793a\u5185\u5bb9", strokeColor: "#ffffff", stroke: 2, height: 32, fontSize: 32, color: "#ff0000", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }, { type: "HTMLDivElement", props: { y: 1255, x: 256, visible: !1, var: "privacyTip", height: 16 } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "a7a2/a112c.png" } }, { type: "Image", props: { y: 257, x: 594, visible: !1, var: "privacyBtn", skin: "a7a2/a113c.png", name: "privacyBtn" } }, { type: "Image", props: { visible: !1, var: "ageTipBtn", top: 1, scaleY: .5, scaleX: .5, name: "privacyBtn", left: 1 } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "a7a2/a109c.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "a7a2/a111c.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "mNoticeBg", skin: "a7a2/a109c.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "a7a2/a111c.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "a7a2/a125c.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "privacyBg", skin: "a7a2/a109c.png", name: "privacyBg", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "privacyClose", skin: "a7a2/a111c.png" } }, { type: "Button", props: { y: 904, x: 190, var: "privacyClose2", stateNum: 1, skin: "a7a2/a125c.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTabPrivacy", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "privacyTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "privacyPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "privacyContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "a7a2/a110c.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "a7a2/a117c.png" } }] }, { type: "Box", props: { width: 720, visible: !1, var: "jumpBg", mouseThrough: !1, height: 1280, centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { x: 33, width: 655, skin: "a7a2/a109c.png", height: 994, centerY: 0, centerX: 0 } }, { type: "Button", props: { width: 274, var: "btnJump", stateNum: 1, skin: "a7a2/a125c.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u8df3\u8f6c", height: 59, centerY: 436, centerX: 0 } }, { type: "Label", props: { width: 234, var: "jumpTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", fontSize: 30, color: "#ffffff", centerY: -408, centerX: 0, bold: !1, align: "center" } }, { type: "Panel", props: { x: 94, width: 545, var: "jumpPanel", height: 733, centerY: 10 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "jumpContent", height: 733 } }] }, { type: "Image", props: { x: 596, visible: !1, var: "closeBtn", skin: "a7a2/a117c.png", name: "closeBtn", centerY: -402 } }] }] };var e = $d;function $d() {
    return i.call(this) || this;
  }var i;t.$e = e;
}(ui = ui || {}), function (t) {
  function $c() {
    return e.call(this) || this;
  }var e;t = t.$f || (t.$f = {}), e = ui.$c, __extends($c, e), $c.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
  }, $c.prototype.addEvt = function () {
    this.on(Laya.Event.CLICK, this, this.$g);
  }, $c.prototype.rmEvts = function () {
    this.off(Laya.Event.CLICK, this, this.$g);
  }, $c.prototype.onOpened = function () {
    this.$h = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
  }, $c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, $c.prototype.$g = function () {
    1e4 < Date.now() - this.$h && (this.$h -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
  }, t.AuthorizationPanel = $c;
}(modules = modules || {}), function (t) {
  var e, i, a, n;function $k() {
    var t = s.call(this) || this;return t.$j = new i(), t.addChild(t.$j), t.$k = null, t.$l = [], t.$m = !1, t.$n = 0, t.$o = !0, t.$p = 6, t.$q = !1, t.on(e.DISPLAY, t, t.$r), t.on(e.UNDISPLAY, t, t.$s), t;
  }var s;t = t.$i || (t.$i = {}), e = Laya.Event, i = Laya.Image, a = Laya.Component, n = Laya.Loader, __extends($k, s = a), $k.create = function (t, e, i, a, s, n, o) {
    void 0 === a && (a = 0), void 0 === s && (s = 6), void 0 === n && (n = !0), void 0 === o && (o = !1);var r = new $k();return r.skin(e, i, a), r.durFrm = s, r.loop = n, r.atHide = o, t && t.addChild(r), r;
  }, $k.play = function (t) {
    t && (t.visible = !0, t.play());
  }, $k.stop = function (t) {
    t && (t.visible = !1, t.stop());
  }, $k.prototype.destroy = function (t) {
    Laya.timer.clear(this, this.$t), this.off(e.DISPLAY, this, this.$r), this.off(e.UNDISPLAY, this, this.$s), s.prototype.destroy.call(this, t);
  }, $k.prototype.$r = function () {}, $k.prototype.$s = function () {}, $k.prototype.skin = function (t, e, i) {
    if (this.$k != t) {
      this.$k = t, this.$l = [];for (var a = 0, s = i; s <= e; s++) this.$l[a++] = t + "/" + s + ".png";i = n.getRes(this.$l[0]);i && (this.width = i.sourceWidth, this.height = i.sourceHeight), this.$t();
    }
  }, Object.defineProperty($k.prototype, "atHide", { get: function () {
      return this.$q;
    }, set: function (t) {
      this.$q = t;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty($k.prototype, "durFrm", { set: function (t) {
      this.$p != t && (this.$p = t, this.$m && (Laya.timer.clear(this, this.$t), Laya.timer.loop(this.$p * (1e3 / 60), this, this.$t)));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty($k.prototype, "loop", { set: function (t) {
      this.$o = t;
    }, enumerable: !0, configurable: !0 }), $k.prototype.play = function () {
    this.$m && this.stop(), this.$m = !0, this.$n = 0, Laya.timer.loop(this.$p * (1e3 / 60), this, this.$t), this.$t();
  }, $k.prototype.stop = function () {
    this.$m = !1, this.$n = 0, this.$t(), Laya.timer.clear(this, this.$t);
  }, $k.prototype.pause = function () {
    this.$m && (this.$m = !1, Laya.timer.clear(this, this.$t));
  }, $k.prototype.resume = function () {
    this.$m || (this.$m = !0, Laya.timer.loop(this.$p * (1e3 / 60), this, this.$t), this.$t());
  }, Object.defineProperty($k.prototype, "isPlay", { get: function () {
      return this.$m;
    }, enumerable: !0, configurable: !0 }), $k.prototype.$t = function () {
    this.$l && 0 != this.$l.length && (this.$j.skin = this.$l[this.$n], this.$m && (this.$n++, this.$n == this.$l.length && (this.$o ? this.$n = 0 : (Laya.timer.clear(this, this.$t), this.$m = !1, this.$q && (this.visible = !1), this.event(e.COMPLETE)))));
  }, t.PanelEff = $k;
}(modules = modules || {}), function (t) {
  var e, i;function $c(t, e) {
    void 0 === t && (t = 0);var i = a.call(this) || this;return i.$u = { bgImgSkin: "a7a1/a3c.jpg", topImgSkin: "a7a1/a10c.jpg", btmImgSkin: "a7a1/a4c.jpg", leftImgSkin: "a7a1/a6c.jpg", rightImgSkin: "a7a1/a8c.jpg", loadingBarBgSkin: "a7a1/a13c.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, i.$v = { bgImgSkin: "a7a1/a12c.jpg", topImgSkin: "a7a1/a11c.jpg", btmImgSkin: "a7a1/a5c.jpg", leftImgSkin: "a7a1/a7c.jpg", rightImgSkin: "a7a1/a9c.jpg", loadingBarBgSkin: "a7a1/a15c.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, i.$w = 0, i.$x(1 == t ? i.$v : i.$u), i.copyRightImg.skin = e, i;
  }var a;e = t.$f || (t.$f = {}), i = t.$i.PanelEff, a = ui.$d, __extends($c, a), $c.prototype.initialize = function () {
    var t;a.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.$y = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.$y && (t = this.$y.loadingType, this.loadingTips.color = 1 != t && (2 == t || 101 == t) ? "#000000" : "#f2ffb5"), this.$z = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
  }, $c.prototype.toAllProgress = function (t) {
    var e = this;if (-1 === t) return e.$w = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);var i;-2 !== t ? (e.$w < .9 ? e.$w += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : e.$w < 1 && (e.$w += 1e-4), .9999 < e.$w && (e.$w = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
      .9 < e.$w && toAllProgress(-1);
    })), i = 590 * (t = e.$w), e.$w = e.$w > t ? e.$w : t, e.loadingBar.width = i, i = e.loadingBar.x + i, e.loadingImg2.x = i - 15, 364 <= i ? (e.loadingImg1.visible = !0, e.loadingImg1.x = i - 202) : e.loadingImg1.visible = !1, e.percentageTips.text = (100 * t >> 0) + "%", e.$w < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress)) : Laya.timer.clear(this, this.toAllProgress);
  }, $c.prototype.toProgress = function (t, e, i) {
    var a = this;var s = 590 * (t = 1 < t ? 1 : t);a.$w = a.$w > t ? a.$w : t, a.loadingBar.width = s;s = a.loadingBar.x + s;a.loadingImg2.x = s - 15, 364 <= s ? (a.loadingImg1.visible = !0, a.loadingImg1.x = s - 202) : a.loadingImg1.visible = !1, a.percentageTips.text = (100 * t >> 0) + "%", a.loadingTips.text = e;for (var n = i - 1, o = 0; o < this.$z.length; o++) a.$z[o].skin = o < n ? "a7a1/a20c.png" : n === o ? "a7a1/a19c.png" : "a7a1/a18c.png";
  }, $c.prototype.onOpened = function () {
    this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$y.lastVersion + "      \u7248\u672c\uff1a" + this.$y.wxVersion, this.showGetBtn();
  }, $c.prototype.close = function (t) {
    this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.$A), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.$B);
  }, $c.prototype.resetWinFun = function () {
    Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
  }, $c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.resetWinFun(), a.prototype.destroy.call(this, t);
  }, $c.prototype.showGetBtn = function () {
    this.$y.showGetBtn && 1 == this.$y.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "a7a1/a1c.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.$B), this.$C(), this.$D(!0));
  }, $c.prototype.$B = function () {
    this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "a7a1/a2c.png", this.$E(), this.$D(!1));
  }, $c.prototype.$x = function (t) {
    this.bgImg.skin = t.bgImgSkin, this.topImg.skin = t.topImgSkin, this.btmImg.skin = t.btmImgSkin, this.leftImg.skin = t.leftImgSkin, this.rightImg.skin = t.rightImgSkin, this.copyRightImg.bottom = t.copyRightImgBottom, this.processBox1.y = t.processBox1Y, this.processBox2.y = t.processBox2Y, this.loadingBarBg.skin = t.loadingBarBgSkin, this.loadingTips.fontSize = t.loadingTipsSize, this.getTipsBtn.visible = this.$y.showGetBtn && 1 == this.$y.showGetBtn, this.getTipsBtn.visible ? this.$C() : this.$E(), this.$D(this.getTipsBtn.visible);
  }, $c.prototype.$C = function () {
    this.$F || (this.$F = i.create(this.getTipsBtn, "a7a6", 4, 0, 12), this.$F.pos(161, 106), this.$F.scale(1.14, 1.15)), i.play(this.$F);
  }, $c.prototype.$E = function () {
    this.$F && i.stop(this.$F);
  }, $c.prototype.$D = function (t) {
    Laya.timer.clear(this, this.$A), t ? (this.$G = 9, this.txtGetTm.visible = !0, this.$A(), Laya.timer.loop(1e3, this, this.$A)) : this.txtGetTm.visible = !1;
  }, $c.prototype.$A = function () {
    0 < this.$G ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.$G + "s)", this.$G--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.$A), this.$B());
  }, e.LoadingPanel = $c;
}(modules = modules || {}), function (t) {
  var e, i, a;function $c(t) {
    void 0 === t && (t = "a7a2/a101c.png");var e = s.call(this) || this;return e.$H = 0, e.$I = "multi_notice_key", e.$J = 0, e.$K = 0, e.$L = "privacy_key", e.$M = !0, e.$N = 0, e.copyRightImg.skin = t, e;
  }var s;e = t.$f || (t.$f = {}), i = Laya.List, a = Laya.Event, s = ui.$e, __extends($c, s), $c.prototype.initialize = function () {
    s.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.copyRightImg.skin = "", ServerLoading.instance.preloadServer(), this.$y = Browser.window.PF_INFO, this.$O = new i(), this.$O.vScrollBarSkin = "", this.$O.itemRender = e.SelectLeftListItem, this.$O.top = 5, this.$O.repeatX = 1, this.$O.spaceY = 5, this.$O.width = this.leftListBox.width, this.$O.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.$O), this.$P = new i(), this.$P.vScrollBarSkin = "", this.$P.itemRender = e.SelectRightListItem, this.$P.top = 5, this.$P.repeatX = 1, this.$P.spaceY = 5, this.$P.width = this.rightListBox.width, this.$P.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.$P), this.$Q = new i(), this.$Q.hScrollBarSkin = "", this.$Q.itemRender = e.NoticeItem, this.$Q.repeatY = 1, this.$Q.width = this.boxTab.width, this.$Q.height = this.boxTab.height, this.boxTab.addChild(this.$Q), this.$R = new i(), this.$R.hScrollBarSkin = "", this.$R.itemRender = e.PrivacyItem, this.$R.repeatY = 1, this.$R.width = this.boxTab.width, this.$R.height = this.boxTab.height, this.boxTabPrivacy.addChild(this.$R);var t = this.$y.loadingType;this.$S = 1 == t || 2 == t || 3 == t || 101 == t ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.$T = [], this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.privacyContent.color = "#212942", this.privacyContent.style.fontSize = 26, this.privacyContent.style.lineHeight = 28, this.privacyContent.mouseEnabled = !1, this.privacyTip.color = "#ffffff", this.privacyTip.style.fontSize = 18, this.privacyTip.style.lineHeight = 18, this.privacyTip.style.stroke = 2, this.privacyTip.style.strokeColor = "#000000", this.privacyTip.style.wordWrap = !1, this.jumpContent.color = "#212942", this.jumpContent.style.fontSize = 26, this.jumpContent.style.lineHeight = 28, this.jumpContent.mouseEnabled = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
  }, $c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), this.$U(), this.$V(), this.$W(), this.$X(), this.ageTipsContent = null, this.$O && (this.$O.removeSelf(), this.$O.destroy(), this.$O = null), this.$P && (this.$P.removeSelf(), this.$P.destroy(), this.$P = null), this.$Q && (this.$Q.removeSelf(), this.$Q.destroy(), this.$Q = null), this.$R && (this.$R.removeSelf(), this.$R.destroy(), this.$R = null), Laya.timer.clear(this, this.$Y), s.prototype.destroy.call(this, t);
  }, $c.prototype.addEvt = function () {
    this.bgImg.on(Laya.Event.CLICK, this, this.$Z), this.enterBtn.on(Laya.Event.CLICK, this, this.$$), this.selectServer.on(Laya.Event.CLICK, this, this.$a), this.selectServer.on(Laya.Event.CLICK, this, this.$a), this.closeBg.on(Laya.Event.CLICK, this, this.$b), this.closeBtn.on(Laya.Event.CLICK, this, this.$cc), this.noticeBtn.on(Laya.Event.CLICK, this, this.$dc), this.noticeClose.on(Laya.Event.CLICK, this, this.$ec), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.$fc), this.mNoticeClose.on(Laya.Event.CLICK, this, this.$gc), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.$gc), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.$hc), this.privacyBtn.on(Laya.Event.CLICK, this, this.$ic), this.ageTipBtn.on(Laya.Event.CLICK, this, this.$jc), this.privacyClose.on(Laya.Event.CLICK, this, this.$kc), this.privacyClose2.on(Laya.Event.CLICK, this, this.$kc), this.privacyPanel.on(Laya.Event.MOUSE_DOWN, this, this.$lc), this.privacyToggle.on(Laya.Event.CLICK, this, this.$mc), this.privacyTip.on(Laya.Event.LINK, this, this.$nc), this.btnJump.on(Laya.Event.CLICK, this, this.$oc), this.jumpPanel.on(Laya.Event.MOUSE_DOWN, this, this.$pc), this.$Q.selectEnable = !0, this.$Q.selectHandler = Laya.Handler.create(this, this.$qc, null, !1), this.$R.selectEnable = !0, this.$R.selectHandler = Laya.Handler.create(this, this.$rc, null, !1);
  }, $c.prototype.rmEvts = function () {
    this.bgImg.off(Laya.Event.CLICK, this, this.$Z), this.enterBtn.off(Laya.Event.CLICK, this, this.$$), this.selectServer.off(Laya.Event.CLICK, this, this.$a), this.selectServer.off(Laya.Event.CLICK, this, this.$a), this.closeBg.off(Laya.Event.CLICK, this, this.$b), this.noticeBtn.off(Laya.Event.CLICK, this, this.$dc), this.closeBtn.off(Laya.Event.CLICK, this, this.$cc), this.noticeClose.off(Laya.Event.CLICK, this, this.$ec), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.$fc), this.mNoticeClose.off(Laya.Event.CLICK, this, this.$gc), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.$gc), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.$hc), this.privacyBtn.off(Laya.Event.CLICK, this, this.$ic), this.ageTipBtn.off(Laya.Event.CLICK, this, this.$jc), this.privacyClose.off(Laya.Event.CLICK, this, this.$kc), this.privacyClose2.off(Laya.Event.CLICK, this, this.$kc), this.privacyPanel.off(Laya.Event.MOUSE_DOWN, this, this.$lc), this.privacyToggle.off(Laya.Event.CLICK, this, this.$mc), this.privacyTip.off(Laya.Event.LINK, this, this.$nc), this.btnJump.off(Laya.Event.CLICK, this, this.$oc), this.jumpPanel.off(Laya.Event.MOUSE_DOWN, this, this.$pc), this.$Q.selectEnable = !1, this.$Q.selectHandler = null, this.$R.selectEnable = !1, this.$R.selectHandler = null;
  }, $c.prototype.onOpened = function () {
    var a = this;this.$h = Date.now(), this.$M = !0, this.$sc = this.$y.selectedServer.server_id, this.$tc(this.$y.selectedServer), this.$O.dataSource = this.$y.groupList, this.$a(), req_multi_server_notice(4, this.$y.pkgName, this.$y.selectedServer.server_id, this.$uc.bind(this)), Laya.timer.frameOnce(1, this, function () {
      a.$vc = a.$y.privacy_data && a.$y.privacy_data.list ? a.$y.privacy_data.list : [], a.$wc = null != a.$y.privacy_login_pkg ? a.$y.privacy_login_pkg : 0;var t = "1" == localStorage.getItem(a.$L),
          e = 0 != PF_INFO.privacy_save_pkg,
          i = 0 == a.$wc || 1 == a.$wc;a.$xc = e && t || i, a.$yc();
    }), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$y.lastVersion + "      \u7248\u672c\uff1a" + this.$y.wxVersion, this.serverName.color = this.selServer.color = this.$S, this.imgCheatTip.visible = 1 == this.$y.anti_cheat_pkg, this.txtTip.visible = !1;
  }, $c.prototype.preload = function () {}, $c.prototype.$Z = function () {
    this.$xc ? 1e4 < Date.now() - this.$h && (this.$h -= 2e3, ServerLoading.instance.enterDefaultServer()) : this.$zc("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
  }, $c.prototype.$$ = function () {
    this.$xc ? this.$Ac(this.$y.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.$y.selectedServer, req_server_check_ban(0, this.$y.selectedServer.server_id)) : this.$zc("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
  }, $c.prototype.$a = function () {
    this.$y.hasGroupReq ? this.listBg.visible = !0 : (this.$y.hasGroupReq = !0, req_server_group(0));
  }, $c.prototype.$b = function () {
    this.listBg.visible = !1;
  }, $c.prototype.$cc = function () {
    this.jumpBg.visible = !1;
  }, $c.prototype.$dc = function () {
    this.$Bc();
  }, $c.prototype.$gc = function () {
    this.mNoticeBg.visible = !1;
  }, $c.prototype.$ec = function () {
    this.noticeBg.visible = !1;
  }, $c.prototype.$ic = function () {
    this.$Cc();
  }, $c.prototype.$kc = function () {
    this.privacyBg.visible = !1;
  }, $c.prototype.$mc = function () {
    this.$xc = !this.$xc, this.$xc && localStorage.setItem(this.$L, "1"), this.privacyToggle.skin = "a7a2/" + (this.$xc ? "a129c.png" : "a128c.png");
  }, $c.prototype.$nc = function (t) {
    this.$Cc(Number(t));
  }, $c.prototype.$oc = function () {
    Browser.window.forceJumpMiniGame ? Browser.window.forceJumpMiniGame() : this.$cc();
  }, $c.prototype.$fc = function () {
    this.$H = this.noticeContent.mouseY, Laya.stage.on(a.MOUSE_MOVE, this, this.$Dc), Laya.stage.on(a.MOUSE_UP, this, this.$U), Laya.stage.on(a.MOUSE_OUT, this, this.$U);
  }, $c.prototype.$Dc = function () {
    var t;this.noticeContent && (t = this.$H - this.noticeContent.mouseY, this.noticeContent.scrollY += t, this.$H = this.noticeContent.mouseY);
  }, $c.prototype.$U = function () {
    Laya.stage.off(a.MOUSE_MOVE, this, this.$Dc), Laya.stage.off(a.MOUSE_UP, this, this.$U), Laya.stage.off(a.MOUSE_OUT, this, this.$U);
  }, $c.prototype.$hc = function () {
    this.$J = this.mNoticePanel.mouseY, Laya.stage.on(a.MOUSE_MOVE, this, this.$Ec), Laya.stage.on(a.MOUSE_UP, this, this.$V), Laya.stage.on(a.MOUSE_OUT, this, this.$V);
  }, $c.prototype.$Ec = function () {
    var t;this.mNoticeContent && (t = this.$J - this.mNoticePanel.mouseY, this.mNoticeContent.y -= t, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.$J = this.mNoticePanel.mouseY);
  }, $c.prototype.$V = function () {
    Laya.stage.off(a.MOUSE_MOVE, this, this.$Ec), Laya.stage.off(a.MOUSE_UP, this, this.$V), Laya.stage.off(a.MOUSE_OUT, this, this.$V);
  }, $c.prototype.$lc = function () {
    this.$K = this.privacyPanel.mouseY, Laya.stage.on(a.MOUSE_MOVE, this, this.$Fc), Laya.stage.on(a.MOUSE_UP, this, this.$W), Laya.stage.on(a.MOUSE_OUT, this, this.$W);
  }, $c.prototype.$Fc = function () {
    var t;this.privacyContent && (t = this.$K - this.privacyPanel.mouseY, this.privacyContent.y -= t, this.privacyPanel.height < this.privacyContent.contextHeight ? this.privacyContent.y < this.privacyPanel.height - this.privacyContent.contextHeight ? this.privacyContent.y = this.privacyPanel.height - this.privacyContent.contextHeight : 0 < this.privacyContent.y && (this.privacyContent.y = 0) : this.privacyContent.y = 0, this.$K = this.privacyPanel.mouseY);
  }, $c.prototype.$W = function () {
    Laya.stage.off(a.MOUSE_MOVE, this, this.$Fc), Laya.stage.off(a.MOUSE_UP, this, this.$W), Laya.stage.off(a.MOUSE_OUT, this, this.$W);
  }, $c.prototype.$pc = function () {
    this.$N = this.jumpPanel.mouseY, Laya.stage.on(a.MOUSE_MOVE, this, this.$Gc), Laya.stage.on(a.MOUSE_UP, this, this.$X), Laya.stage.on(a.MOUSE_OUT, this, this.$X);
  }, $c.prototype.$Gc = function () {
    var t;this.jumpContent && (t = this.$N - this.jumpPanel.mouseY, this.jumpContent.y -= t, this.jumpPanel.height < this.jumpContent.contextHeight ? this.jumpContent.y < this.jumpPanel.height - this.jumpContent.contextHeight ? this.jumpContent.y = this.jumpPanel.height - this.jumpContent.contextHeight : 0 < this.jumpContent.y && (this.jumpContent.y = 0) : this.jumpContent.y = 0, this.$N = this.jumpPanel.mouseY);
  }, $c.prototype.$X = function () {
    Laya.stage.off(a.MOUSE_MOVE, this, this.$Gc), Laya.stage.off(a.MOUSE_UP, this, this.$X), Laya.stage.off(a.MOUSE_OUT, this, this.$X);
  }, $c.prototype.$qc = function () {
    if (this.$Q.dataSource) {
      for (var t, e = 0; e < this.$Q.dataSource.length; e++) {
        var i = this.$Q.dataSource[e];i[1] = e == this.$Q.selectedIndex, e == this.$Q.selectedIndex && (t = i[0]);
      }this.mNoticeTitle.text = t && t.title ? t.title : "", this.mNoticeContent.innerHTML = t && t.content ? t.content : "", this.mNoticeContent.y = 0;
    }
  }, $c.prototype.$rc = function () {
    var t = this.$R.dataSource;if (t) {
      for (var e = 0; e < t.length; e++) t[e][1] = e == this.$R.selectedIndex;var i = this.$vc[this.$R.selectedIndex];i && i.content && (i.content = i.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "")), this.privacyTitle.text = i && i.title ? i.title : "\u6807\u9898", this.privacyContent.innerHTML = i && i.content ? i.content : "\u52a0\u8f7d\u4e2d...", this.privacyContent.y = 0;
    }
  }, $c.prototype.$tc = function (t) {
    var e = t.server_name;this.serverName.text = e + this.$Hc(t), this.serverName.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.$S, this.hotImage.skin = this.$Ic(t), this.$y.cdn = t.cdn || "", this.$y.selectedServer = t, this.noticeBtn.visible = !0;
  }, $c.prototype.$Jc = function (t) {
    this.showGroupList(t);
  }, $c.prototype.$Kc = function (t) {
    this.$tc(t), this.listBg.visible = !1;
  }, $c.prototype.showGroupList = function (t) {
    if (void 0 === t && (t = 0), this.parent) {
      var e = this.$y.groupList;if (e && 0 !== e.length) {
        for (var i = e.length, a = 0; a < i; a++) e[a].callBack = this.$Jc.bind(this), e[a].select = a == t, e[a].index = a;var s = (this.$O.array = e)[t].id;this.$y.serverList[s] ? this.showServerList(s) : this.$y.hasServerReq || (this.$y.hasServerReq = !0, -1 == s ? req_server_owner(0) : -2 == s ? req_recommend_server_list(0) : req_server_list(0, s));
      }
    }
  }, $c.prototype.showServerList = function (t) {
    if (this.parent && this.$y.serverList[t]) {
      for (var e = this.$y.serverList[t], i = e.length, a = 0; a < i; a++) e[a].callBack = this.$Kc.bind(this);this.$P.array = e;
    }
  }, $c.prototype.$Ac = function (t) {
    return -1 == t.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != t.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
  }, $c.prototype.$Ic = function (t) {
    var e = t.status,
        t = t.is_recommend,
        i = "a7a2/a119c.png";return 1 !== e && 2 !== e || 1 !== t && 3 !== t ? 1 !== e && 2 !== e || 2 !== t ? -1 !== e && 0 !== e || (i = "a7a2/a120c.png") : i = "a7a2/a119c.png" : i = "a7a2/a118c.png", i;
  }, $c.prototype.$Hc = function (t) {
    var e = t.status,
        i = "";return 1 == t.is_recommend || 3 == t.is_recommend ? i = "(\u63a8\u8350)" : -1 === e ? i = "(\u7ef4\u62a4\u4e2d)" : 0 === e && (i = "(\u5f85\u5f00\u670d)"), i;
  }, $c.prototype.$uc = function (t) {
    console.log("onMultiNoticeCallback, param = ", t);var e = Date.now() / 1e3,
        i = localStorage.getItem(this.$I),
        a = !(this.$T = []);if ("success" == t.state) for (var s in t.data) {
      s = t.data[s];var n, o, r;s && (n = e < s.end_time, o = 1 == s.pop_type, r = 2 == s.pop_type && s.key + "" != i, !a && n && (o || r) && (a = !0), n && this.$T.push(s), r && localStorage.setItem(this.$I, s.key + ""));
    }this.$T.sort(function (t, e) {
      return t.login_id - e.login_id;
    }), console.log("onMultiNoticeCallback, datas = ", this.$T), a && this.$Bc();
  }, $c.prototype.$Bc = function () {
    if (this.$Q) {
      if (this.$T) {
        this.$Q.x = 2 < this.$T.length ? 0 : (this.boxTab.width - 274 * this.$T.length) / 2;for (var t = [], e = 0; e < this.$T.length; e++) {
          var i = this.$T[e];t.push([i, e == this.$Q.selectedIndex]);
        }0 < (this.$Q.dataSource = t).length ? (this.$Q.selectedIndex = 0, this.$Q.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.$T.length <= 1, this.boxTab.visible = 1 < this.$T.length;
      }this.mNoticeBg.visible = !0;
    }
  }, $c.prototype.$Lc = function (t) {
    if (!this.destroyed) {
      if (console.log("p_onPrivacyCallback, param = ", t), "success" == t.state) for (var e in t.data) {
        var e = Number(e),
            i = t.data[e];this.$vc && this.$vc[e] && (this.$vc[e].content = i.content);
      }this.$rc();
    }
  }, $c.prototype.$yc = function () {
    for (var t = "", e = 0; e < this.$vc.length; e++) t += '<a href="' + e + '" style="color:#14ff28;text-decoration:none">' + this.$vc[e].title + "</a>", e < this.$vc.length - 1 && (t += "\u3001");this.privacyTip.innerHTML = "\u6211\u5df2\u7ecf\u8be6\u7ec6\u9605\u8bfb\u5e76\u540c\u610f" + t, this.privacyToggle.skin = "a7a2/" + (this.$xc ? "a129c.png" : "a128c.png"), this.privacyTip.x = (720 - this.privacyTip.width) / 2, this.privacyToggle.x = this.privacyTip.x - 30, this.privacyBtn.visible = 0 < this.$vc.length, this.privacyToggle.visible = this.privacyTip.visible = 0 < this.$vc.length && 0 != this.$wc;
  }, $c.prototype.$Cc = function (t) {
    if (void 0 === t && (t = 0), this.$R) {
      if (this.$vc) {
        this.$R.x = 2 < this.$vc.length ? 0 : (this.boxTab.width - 274 * this.$vc.length) / 2;for (var e = [], i = 0; i < this.$vc.length; i++) {
          var a = this.$vc[i],
              a = a && a.title ? a.title : "",
              s = i == this.$R.selectedIndex;e.push([a, s]);
        }0 < (this.$R.dataSource = e).length ? ((t = t < 0 ? 0 : t) > e.length - 1 && (t = 0), this.$R.selectedIndex = t, this.$R.scrollTo(t)) : (this.privacyTitle.text = "\u7a7a", this.privacyContent.text = ""), this.privacyClose2.visible = this.$vc.length <= 1, this.boxTabPrivacy.visible = 1 < this.$vc.length;
      }this.$M && (this.$M = !1, req_privacy(this.$y.pkgName, this.$Lc.bind(this))), this.privacyBg.visible = !0;
    }
  }, $c.prototype.openJumpView = function (t, e, i, a) {
    void 0 === a && (a = !1), this.jumpTitle.text = t || "\u6682\u65e0\u516c\u544a", this.jumpContent.innerHTML = e || "", this.btnJump.label = i || "\u786e\u5b9a", this.jumpContent.y = 0, this.jumpBg.visible = !0, this.closeBtn.visible = a;
  }, $c.prototype.showAgeTipsBtn = function (t, e, i, a, s) {
    (this.ageTipBtn.visible = t) && (this.ageTipBtn.skin = e || "a7a2/a112c.png"), this.ageTipsContent = i, this.ageTipBtn.x = a || 0, this.ageTipBtn.y = s || 0;
  }, $c.prototype.$jc = function () {
    this.openJumpView("\u9002\u9f84\u516c\u544a", this.ageTipsContent, "\u786e\u8ba4", !0);
  }, $c.prototype.$zc = function (t) {
    this.txtTip.text = t, this.txtTip.y = 640, this.txtTip.visible = !0, this.$Mc = 1, Laya.timer.clear(this, this.$Y), this.$Y(), Laya.timer.frameLoop(1, this, this.$Y);
  }, $c.prototype.$Y = function () {
    this.txtTip.y -= this.$Mc, this.$Mc *= 1.1, this.txtTip.y <= 590 && (this.txtTip.visible = !1, Laya.timer.clear(this, this.$Y));
  }, e.SelectServerPanel = $c;
}(modules = modules || {});var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.$f.AuthorizationPanel,
    LoadingPanel = modules.$f.LoadingPanel,
    SelectServerPanel = modules.$f.SelectServerPanel,
    ServerLoading = function () {
  function $k(t) {
    this.m_loadingRes = ["a7a1/a13c.png", "a7a1/a15c.png", "a7a1/a14c.png", "a7a1/a16c.png", "a7a1/a17c.png", "a7a1/a18c.png", "a7a1/a19c.png", "a7a1/a20c.png", "a7a6/a1b.png", "a7a6/a2b.png", "a7a6/a3b.png", "a7a6/a4b.png", "a7a6/a5b.png", "a7a1/a3c.jpg", "a7a1/a12c.jpg", "a7a1/a1c.png", "a7a1/a2c.png", "a7a1/a4c.jpg", "a7a1/a6c.jpg", "a7a1/a8c.jpg", "a7a1/a10c.jpg", "a7a1/a5c.jpg", "a7a1/a7c.jpg", "a7a1/a9c.jpg", "a7a1/a11c.jpg"], this.m_serverRes = ["a7a2/a111c.png", "a7a2/a112c.png", "a7a2/e12b.png", "a7a2/a113c.png", "a7a2/a114c.png", "a7a2/a115c.png", "a7a2/a116c.png", "a7a2/a117c.png", "a7a2/a118c.png", "a7a2/a119c.png", "a7a2/a120c.png", "a7a2/a121c.png", "a7a2/a103c.jpg", "a7a2/a104c.jpg", "a7a2/a105c.jpg", "a7a2/a106c.jpg", "a7a2/a107c.jpg", "a7a2/a101c.png", "a7a2/a109c.png", "a7a2/a110c.png", "a7a2/a124c.png", "a7a2/a125c.png", "a7a2/a127c.png", "a7a2/a129c.png", "a7a2/a128c.png", "a7a2/a102c.png", "a7a2/a100c.png"], this.copyRightUrl = "a7a2/a101c.png", this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.$Nc = !1, this.$Oc = "", $k.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var e = Laya.AtlasResourceManager;e.maxTextureCount = 6, e.atlasTextureWidth = e.atlasTextureHeight = 1024, e._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.$Pc.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } }, "a128c.png": { frame: { h: 25, idx: 0, w: 25, x: 444, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 2 } }, "a129c.png": { frame: { h: 27, idx: 0, w: 26, x: 470, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = $k.instance.requestWeb, Browser.window.imgMgrLoad = $k.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.$Pc();
  }return $k.prototype.changeServerLoading = function (t) {
    $k.instance.m_layer.visible = t;
  }, $k.prototype.openAuthor = function () {
    $k.instance.m_author || ($k.instance.m_author = new AuthorizationPanel()), $k.instance.m_author.parent || $k.instance.m_layer.addChild($k.instance.m_author), $k.instance.$Qc();
  }, $k.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, $k.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, $k.prototype.$Rc = function () {
    $k.instance.m_server || ($k.instance.m_server = new SelectServerPanel(this.copyRightUrl)), $k.instance.m_server.parent || $k.instance.m_layer.addChild($k.instance.m_server), $k.instance.$Qc();
  }, $k.prototype.openJumpView = function (t, e, i, a) {
    void 0 === a && (a = !1), this.$Rc(), $k.instance.m_server.openJumpView(t, e, i, a);
  }, $k.prototype.openJumpTipsBtn = function (t, e, i, a, s) {
    this.$Rc(), $k.instance.m_server.showAgeTipsBtn(t, e, i, a, s);
  }, $k.prototype.getCertificatePng = function () {
    window.sdkInitRes = window.sdkInitRes || {};var t = "a7a2/a102c.png",
        e = "a7a2/a101c.png";return 1 == sdkInitRes.develop ? 0 == (PF_INFO.develop_certificate_pkg || 0) ? t : e : 0 == PF_INFO.release_certificate_pkg ? t : e;
  }, $k.prototype.openServer = function (t, e, i) {
    var a = this;this.copyRightUrl = i || this.getCertificatePng();for (var i = function () {
      a.$Rc(), t && e && t.call(e);
    }, s = !0, n = 0, o = this.m_serverRes; n < o.length; n++) {
      var r = o[n];if (null == Laya.Loader.getRes(r)) {
        s = !1;break;
      }
    }s ? i() : Laya.loader.load(this.m_serverRes, Handler.create(this, i));
  }, $k.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, $k.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, $k.prototype.openLoading = function (t, e) {
    void 0 === t && (t = 0), e = e || this.getCertificatePng(), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      $k.instance.m_loading || ($k.instance.m_loading = new LoadingPanel(t, e)), $k.instance.m_loading.parent || $k.instance.m_layer.addChild($k.instance.m_loading), $k.instance.$Qc();
    }));
  }, $k.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var t = 0, e = this.m_serverRes; t < e.length; t++) {
      var i = e[t];Laya.Loader.clearCache($k.instance, i), Laya.Loader.clearRes(i, !0);
    }for (var a = 0, s = this.m_loadingRes; a < s.length; a++) i = s[a], Laya.Loader.clearCache($k.instance, i), Laya.Loader.clearRes(i, !0);this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, $k.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && $k.instance.m_loading.showGetBtn();
  }, $k.prototype.enterDefaultServer = function () {
    var t = Browser.window.PF_INFO.selectedServer;this.$Nc || -1 == t.status || 0 == t.status || (this.$Nc = !0, Browser.window.PF_INFO.selectedServer = t, req_server_check_ban(0, t.server_id));
  }, $k.prototype.sendRecord = function () {
    var t = "";t = (t = (t = (t = (t = (t = (t = (t += "newRegister=" + Browser.window.PF_INFO.newRegister) + ", isPrelodServer=" + this.m_isPrelodServer) + ", SelectServerPanel=" + (null != $k.instance.m_server)) + ", isPrelodLoading=" + this.m_isPrelodLoading) + ", LoadingPanel=" + (null != $k.instance.m_loading)) + ", resMgrLoad=" + (Browser.window.resMgrLoad == $k.instance.requestWeb)) + ", imgMgrLoad=" + (Browser.window.imgMgrLoad == $k.instance.requestWeb)) + ", errUrls=" + $k.instance.$Oc;for (var e = 0, i = this.m_serverRes; e < i.length; e++) t += ", " + (n = i[e]) + "=" + (null != Laya.Loader.getRes(n));for (var a = 0, s = this.m_loadingRes; a < s.length; a++) {
      var n;t += ", " + (n = s[a]) + "=" + (null != Laya.Loader.getRes(n));
    }var o = Browser.window.PF_INFO.selectedServer;o && (t = (t = (t += ", server_status=" + o.status) + (", server_id=" + o.server_id)) + (", server_name=" + o.server_name));o = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: t });console.error(o), this.$Sc && this.$Sc == t || (this.$Sc = t, reqRecordError(o));
  }, $k.prototype.$Tc = function () {
    var t = Laya.stage,
        e = Math.floor(t.width),
        i = Math.floor(t.height);i / e < 1.7777778 ? (this.viewW = Math.floor(e / (i / 1280)), this.viewH = 1280, this.viewS = i / 1280) : (this.viewW = 720, this.viewH = Math.floor(i / (e / 720)), this.viewS = e / 720);i = Math.floor(t.width), e = Math.floor(t.height);e / i < 1.7777778 ? (this.viewW = Math.floor(i / (e / 1280)), this.viewH = 1280, this.viewS = e / 1280) : (this.viewW = 720, this.viewH = Math.floor(e / (i / 720)), this.viewS = i / 720), this.$Qc();
  }, $k.prototype.$Qc = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, $k.prototype.$Pc = function () {
    if (Input.isInputting && Browser.onMobile) return i = parseInt(Input.inputContainer.style.top.replace("px", "")), t = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS, e = Browser.clientWidth / Render.canvas.width, 0 < (i = Browser.clientHeight - t * e - i) && (i = 0), void (Browser.container.style.top = i + "px");var t, e;Browser.container.style.top = "0px", t = Math.floor(Browser.width) + 1 & 2147483646, e = Math.floor(Browser.height) + 1 & 2147483646;var i = Laya.stage;3 == ENV || e < t ? (i.scaleMode = Laya.Stage.SCALE_NOSCALE, i.width = t, i.height = e) : (i.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, i.width = 840, i.height = Math.floor(e / (t / 840)) + 1 & 2147483646), this.$Tc();
  }, $k.prototype.requestWeb = function (t, e) {
    function $e() {
      i.onload = null, i.onerror = null;
    }var i,
        a = t;(i = new Browser.window.Image()).onload = function () {
      $e(), e(a, 200, i);
    }, i.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", a), $k.instance.$Oc += a + "|", $e(), e(a, 404, null);
    }, i.src = a, -1 == $k.instance.m_serverRes.indexOf(a) && -1 == $k.instance.m_loadingRes.indexOf(a) || Laya.Loader.keepCache($k.instance, a);
  }, $k.prototype.$Uc = function (t, e) {
    return -1 != t.indexOf(e, t.length - e.length);
  }, $k;
}();!function (t) {
  function $c() {
    var t = e.call(this) || this;return t.$Vc = "#72441d", t.$Wc = "#263d7d", t.width = 274, t.height = 59, t.$Xc = new Laya.Image(), t.addChild(t.$Xc), t.$Yc = new Laya.Label(), t.$Yc.fontSize = 30, t.$Yc.color = t.$Wc, t.addChild(t.$Yc), t.$Yc.centerX = 0, t.$Yc.centerY = 0, t;
  }var e;t = t.$f || (t.$f = {}), e = Laya.View, __extends($c, e), $c.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.$y = Browser.window.PF_INFO, this.$y.loadingType, this.addEvt();
  }, Object.defineProperty($c.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), $c.prototype.setData = function (t) {
    this.$Zc = t[0], this.$$c = t[1], this.$Yc.text = this.$Zc.title, this.$Yc.color = this.$$c ? this.$Vc : this.$Wc, this.$Xc.skin = this.$$c ? "a7a2/a125c.png" : "a7a2/a124c.png";
  }, $c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, $c.prototype.addEvt = function () {}, $c.prototype.rmEvts = function () {}, t.NoticeItem = $c;
}(modules = modules || {}), function (t) {
  function $c() {
    var t = e.call(this) || this;return t.$Vc = "#72441d", t.$Wc = "#263d7d", t.width = 274, t.height = 59, t.$Xc = new Laya.Image(), t.addChild(t.$Xc), t.$Yc = new Laya.Label(), t.$Yc.fontSize = 30, t.$Yc.color = t.$Wc, t.addChild(t.$Yc), t.$Yc.centerX = 0, t.$Yc.centerY = 0, t;
  }var e;t = t.$f || (t.$f = {}), e = Laya.View, __extends($c, e), $c.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.$y = Browser.window.PF_INFO, this.$y.loadingType, this.addEvt();
  }, Object.defineProperty($c.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), $c.prototype.setData = function (t) {
    this.$_c = t[0], this.$$c = t[1], this.$Yc.text = this.$_c, this.$Yc.color = this.$$c ? this.$Vc : this.$Wc, this.$Xc.skin = this.$$c ? "a7a2/a125c.png" : "a7a2/a124c.png";
  }, $c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, $c.prototype.addEvt = function () {}, $c.prototype.rmEvts = function () {}, t.PrivacyItem = $c;
}(modules = modules || {}), function (t) {
  function $c() {
    var t = e.call(this) || this;return t.width = 192, t.height = 70, t.$Xc = new Laya.Image(), t.addChild(t.$Xc), t.$ac = new Laya.Label(), t.$ac.fontSize = 28, t.$ac.color = t.$S, t.addChild(t.$ac), t.$ac.centerX = 0, t.$ac.centerY = 0, t.$bc = new Laya.Label(), t.$bc.fontSize = 22, t.$bc.color = t.$S, t.addChild(t.$bc), t.$bc.centerX = 0, t.$bc.y = 11, t.$cd = new Laya.Label(), t.$cd.fontSize = 26, t.$cd.color = t.$S, t.addChild(t.$cd), t.$cd.centerX = 0, t.$cd.y = 39, t;
  }var e;t = t.$f || (t.$f = {}), e = Laya.View, __extends($c, e), $c.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.$y = Browser.window.PF_INFO;var t = this.$y.loadingType;this.$S = 1 != t && 2 != t && 3 == t ? "#763042" : "#263d7d", this.addEvt();
  }, Object.defineProperty($c.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), $c.prototype.setData = function (t) {
    this.$Zc = t;var e = this.$Zc.id,
        i = this.$Zc.name;var a, s;this.$ac.visible = this.$bc.visible = this.$cd.visible = !1, -1 == e || -2 == e ? (this.$ac.visible = !0, this.$ac.text = i) : (e = "1-10\u670d", (s = (a = i).match("[0-9]{1,}")) && null != s.index && (a = i.slice(0, s.index), e = i.slice(s.index)), this.$bc.visible = this.$cd.visible = !0, this.$bc.text = a, this.$cd.text = e), this.$Xc.skin = t.select ? "a7a2/a114c.png" : "a7a2/a115c.png";
  }, $c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, $c.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $c.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $c.prototype.clkHdler = function () {
    this.$Zc && this.$Zc.callBack && this.$Zc.callBack(this.$Zc.index);
  }, t.SelectLeftListItem = $c;
}(modules = modules || {}), function (t) {
  function $c() {
    var t = e.call(this) || this;return t.width = 358, t.height = 70, t.$Xc = new Laya.Image("a7a2/a116c.png"), t.addChild(t.$Xc), t.$Xc.graphics.drawRect(0, 0, t.width, t.height, "#00sasd"), t.$dd = new Laya.Image(), t.$dd.centerY = 0, t.$dd.x = 7, t.addChild(t.$dd), t.$ac = new Laya.Label(), t.$ac.fontSize = 24, t.$ac.color = t.$S, t.$ac.x = 56, t.$ac.centerY = 0, t.addChild(t.$ac), t.$ed = new Laya.Label(), t.$ed.fontSize = 24, t.$ed.color = t.$S, t.$ed.x = 246, t.$ed.centerY = 0, t.addChild(t.$ed), t.$fd = new Laya.Image(), t.$fd.top = 0, t.$fd.right = 0, t.addChild(t.$fd), t.$gd = new Laya.Label(), t.$gd.fontSize = 20, t.$gd.color = "#ffffff", t.$gd.x = 225, t.$gd.y = 46, t.addChild(t.$gd), t;
  }var e;t = t.$f || (t.$f = {}), e = Laya.View, __extends($c, e), $c.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.$y = Browser.window.PF_INFO;var t = this.$y.loadingType;this.$S = 1 != t && 2 != t && 3 == t ? "#763042" : "#34267d", this.addEvt();
  }, Object.defineProperty($c.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), $c.prototype.setData = function (t) {
    this.$Zc = t;var t = this.$Zc.status,
        e = this.$Zc.server_name;this.$dd.skin = this.getStatusSrc(this.$Zc), this.$ac.color = -1 === t ? "#d50000" : 0 === t ? "#49575a" : this.$S, this.$ac.text = e, this.$ed.text = -1 === t ? "\u7ef4\u62a4\u4e2d" : 0 === t ? "\u672a\u5f00\u670d" : "\u5df2\u5f00\u670d";e = 1 == this.$Zc.is_recommend || 3 == this.$Zc.is_recommend;(this.$fd.visible = e) && (this.$fd.skin = "a7a2/a100c.png"), this.$gd.text = -1 == this.$Zc.status && this.$Zc.maintain_time ? this.$Zc.maintain_time : "";
  }, $c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, $c.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $c.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $c.prototype.clkHdler = function () {
    this.$Zc && this.$Zc.callBack && this.$Zc.callBack(this.$Zc);
  }, $c.prototype.getStatusSrc = function (t) {
    var e = t.status,
        t = t.is_recommend,
        i = "a7a2/a119c.png";return 1 !== e && 2 !== e || 1 !== t && 3 !== t ? 1 !== e && 2 !== e || 2 !== t ? -1 !== e && 0 !== e || (i = "a7a2/a120c.png") : i = "a7a2/a119c.png" : i = "a7a2/a118c.png", i;
  }, t.SelectRightListItem = $c;
}(modules = modules || {}), window.ServerLoading = ServerLoading;