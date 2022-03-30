"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
  };return function (e, t) {
    function e$l() {
      this.constructor = e;
    }i(e, t), e.prototype = null === t ? Object.create(t) : (e$l.prototype = t.prototype, new e$l());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (e) {
  __extends(e$t, i = View), e$t.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(e.e$d.uiView);
  }, e$t.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "eeelogin/e2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "eeelogin/e6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "eeelogin/e3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "eeelogin/e4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "eeelogin/e5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] };var t = e$t;function e$t() {
    return i.call(this) || this;
  }var i;e.e$d = t;
}(ui = ui || {}), function (e) {
  __extends(e$t, i = View), e$t.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(e.e$t.uiView);
  }, e$t.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "eeelogin/e1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "eeeloding/e13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "eeeloding/e14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "eeeloding/e16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "eeeloding/e17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "eeeloding/e20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "eeeloding/e19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "eeeloding/e18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "eeeloding/e18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "eeeloding/e1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }] };var t = e$t;function e$t() {
    return i.call(this) || this;
  }var i;e.e$t = t;
}(ui = ui || {}), function (e) {
  __extends(e$t, i = View), e$t.prototype.createChildren = function () {
    View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), View.regComponent("Text", laya.display.Text), i.prototype.createChildren.call(this), this.createView(e.e$l.uiView);
  }, e$t.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "eeelogin/e2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "eeelogin/e6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "eeelogin/e3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "eeelogin/e4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "eeelogin/e5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "eeelogin/e21b.png", centerX: 0 } }, { type: "Image", props: { y: 1102, var: "imgCheatTip", skin: "eeelogin/e27b.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 930, x: 162, var: "hotImage", skin: "eeelogin/e18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "eeelogin/e1b.png", centerX: 0, bottom: 30 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "eeelogin/e12b.png", name: "enterBtn", centerX: 0 } }, { type: "Image", props: { x: 196, visible: !1, var: "privacyToggle", skin: "eeelogin/e29b.png", bottom: 4 } }, { type: "Label", props: { y: 640, x: 0, width: 720, var: "txtTip", valign: "middle", text: "\u63d0\u793a\u5185\u5bb9", strokeColor: "#ffffff", stroke: 2, height: 32, fontSize: 32, color: "#ff0000", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }, { type: "HTMLDivElement", props: { y: 1255, x: 256, visible: !1, var: "privacyTip", height: 16 } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "eeelogin/e11b.png" } }, { type: "Image", props: { y: 257, x: 594, visible: !1, var: "privacyBtn", skin: "eeelogin/e13b.png", name: "privacyBtn" } }, { type: "Image", props: { y: 0, x: 0, visible: !1, var: "ageTipBtn", name: "privacyBtn" } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "eeelogin/e8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "eeelogin/e10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "mNoticeBg", skin: "eeelogin/e8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "eeelogin/e10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "eeelogin/e25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "privacyBg", skin: "eeelogin/e8b.png", name: "privacyBg", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "privacyClose", skin: "eeelogin/e10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "privacyClose2", stateNum: 1, skin: "eeelogin/e25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTabPrivacy", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "privacyTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "privacyPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "privacyContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "eeelogin/e9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "eeelogin/e17b.png" } }] }, { type: "Box", props: { width: 720, visible: !1, var: "jumpBg", mouseThrough: !1, height: 1280, centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { x: 33, width: 655, skin: "eeelogin/e8b.png", height: 994, centerY: 0, centerX: 0 } }, { type: "Button", props: { width: 274, var: "btnJump", stateNum: 1, skin: "eeelogin/e25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u8df3\u8f6c", height: 59, centerY: 436, centerX: 0 } }, { type: "Label", props: { width: 234, var: "jumpTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", fontSize: 30, color: "#ffffff", centerY: -408, centerX: 0, bold: !1, align: "center" } }, { type: "Panel", props: { x: 94, width: 545, var: "jumpPanel", height: 733, centerY: 10 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "jumpContent", height: 733 } }] }, { type: "Image", props: { x: 596, visible: !1, var: "closeBtn", skin: "eeelogin/e17b.png", name: "closeBtn", centerY: -402 } }] }] };var t = e$t;function e$t() {
    return i.call(this) || this;
  }var i;e.e$l = t;
}(ui = ui || {}), function (e) {
  function e$d() {
    return t.call(this) || this;
  }var t;e = e.e$k || (e.e$k = {}), t = ui.e$d, __extends(e$d, t), e$d.prototype.initialize = function () {
    t.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
  }, e$d.prototype.addEvt = function () {
    this.on(Laya.Event.CLICK, this, this.e$W);
  }, e$d.prototype.rmEvts = function () {
    this.off(Laya.Event.CLICK, this, this.e$W);
  }, e$d.prototype.onOpened = function () {
    this.e$i = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
  }, e$d.prototype.destroy = function (e) {
    void 0 === e && (e = !0), this.rmEvts(), t.prototype.destroy.call(this, e);
  }, e$d.prototype.e$W = function () {
    1e4 < Date.now() - this.e$i && (this.e$i -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
  }, e.AuthorizationPanel = e$d;
}(modules = modules || {}), function (e) {
  var t, i, o, n;function e$o() {
    var e = s.call(this) || this;return e.e$B = new i(), e.addChild(e.e$B), e.e$o = null, e.e$I = [], e.e$b = !1, e.e$f = 0, e.e$J = !0, e.e$c = 6, e.e$Y = !1, e.on(t.DISPLAY, e, e.e$w), e.on(t.UNDISPLAY, e, e.e$D), e;
  }var s;e = e.e$A || (e.e$A = {}), t = Laya.Event, i = Laya.Image, o = Laya.Component, n = Laya.Loader, __extends(e$o, s = o), e$o.create = function (e, t, i, o, s, n, r) {
    void 0 === o && (o = 0), void 0 === s && (s = 6), void 0 === n && (n = !0), void 0 === r && (r = !1);var a = new e$o();return a.skin(t, i, o), a.durFrm = s, a.loop = n, a.atHide = r, e && e.addChild(a), a;
  }, e$o.play = function (e) {
    e && (e.visible = !0, e.play());
  }, e$o.stop = function (e) {
    e && (e.visible = !1, e.stop());
  }, e$o.prototype.destroy = function (e) {
    Laya.timer.clear(this, this.e$z), this.off(t.DISPLAY, this, this.e$w), this.off(t.UNDISPLAY, this, this.e$D), s.prototype.destroy.call(this, e);
  }, e$o.prototype.e$w = function () {}, e$o.prototype.e$D = function () {}, e$o.prototype.skin = function (e, t, i) {
    if (this.e$o != e) {
      this.e$o = e, this.e$I = [];for (var o = 0, s = i; s <= t; s++) this.e$I[o++] = e + "/" + s + ".png";i = n.getRes(this.e$I[0]);i && (this.width = i.sourceWidth, this.height = i.sourceHeight), this.e$z();
    }
  }, Object.defineProperty(e$o.prototype, "atHide", { get: function () {
      return this.e$Y;
    }, set: function (e) {
      this.e$Y = e;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(e$o.prototype, "durFrm", { set: function (e) {
      this.e$c != e && (this.e$c = e, this.e$b && (Laya.timer.clear(this, this.e$z), Laya.timer.loop(this.e$c * (1e3 / 60), this, this.e$z)));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(e$o.prototype, "loop", { set: function (e) {
      this.e$J = e;
    }, enumerable: !0, configurable: !0 }), e$o.prototype.play = function () {
    this.e$b && this.stop(), this.e$b = !0, this.e$f = 0, Laya.timer.loop(this.e$c * (1e3 / 60), this, this.e$z), this.e$z();
  }, e$o.prototype.stop = function () {
    this.e$b = !1, this.e$f = 0, this.e$z(), Laya.timer.clear(this, this.e$z);
  }, e$o.prototype.pause = function () {
    this.e$b && (this.e$b = !1, Laya.timer.clear(this, this.e$z));
  }, e$o.prototype.resume = function () {
    this.e$b || (this.e$b = !0, Laya.timer.loop(this.e$c * (1e3 / 60), this, this.e$z), this.e$z());
  }, Object.defineProperty(e$o.prototype, "isPlay", { get: function () {
      return this.e$b;
    }, enumerable: !0, configurable: !0 }), e$o.prototype.e$z = function () {
    this.e$I && 0 != this.e$I.length && (this.e$B.skin = this.e$I[this.e$f], this.e$b && (this.e$f++, this.e$f == this.e$I.length && (this.e$J ? this.e$f = 0 : (Laya.timer.clear(this, this.e$z), this.e$b = !1, this.e$Y && (this.visible = !1), this.event(t.COMPLETE)))));
  }, e.PanelEff = e$o;
}(modules = modules || {}), function (e) {
  var t, i;function e$d(e, t) {
    void 0 === e && (e = 0), void 0 === t && (t = "eeelogin/e1b.png");var i = o.call(this) || this;return i.e$e = { bgImgSkin: "eeeloding/e3a.jpg", topImgSkin: "eeeloding/e10a.jpg", btmImgSkin: "eeeloding/e4a.jpg", leftImgSkin: "eeeloding/e6a.jpg", rightImgSkin: "eeeloding/e8a.jpg", loadingBarBgSkin: "eeeloding/e13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, i.e$g = { bgImgSkin: "eeeloding/e12a.jpg", topImgSkin: "eeeloding/e11a.jpg", btmImgSkin: "eeeloding/e5a.jpg", leftImgSkin: "eeeloding/e7a.jpg", rightImgSkin: "eeeloding/e9a.jpg", loadingBarBgSkin: "eeeloding/e15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, i.e$H = 0, i.e$R(1 == e ? i.e$g : i.e$e), i.copyRightImg.skin = t, i;
  }var o;t = e.e$k || (e.e$k = {}), i = e.e$A.PanelEff, o = ui.e$t, __extends(e$d, o), e$d.prototype.initialize = function () {
    var e;o.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.e$G = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.e$G && (e = this.e$G.loadingType, this.loadingTips.color = 1 != e && (2 == e || 101 == e) ? "#000000" : "#f2ffb5"), this.e$q = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
  }, e$d.prototype.toAllProgress = function (e) {
    var t = this;if (-1 === e) return t.e$H = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);var i;-2 !== e ? (t.e$H < .9 ? t.e$H += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : t.e$H < 1 && (t.e$H += 1e-4), .9999 < t.e$H && (t.e$H = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
      .9 < t.e$H && toAllProgress(-1);
    })), i = 590 * (e = t.e$H), t.e$H = t.e$H > e ? t.e$H : e, t.loadingBar.width = i, i = t.loadingBar.x + i, t.loadingImg2.x = i - 15, 364 <= i ? (t.loadingImg1.visible = !0, t.loadingImg1.x = i - 202) : t.loadingImg1.visible = !1, t.percentageTips.text = (100 * e >> 0) + "%", t.e$H < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress)) : Laya.timer.clear(this, this.toAllProgress);
  }, e$d.prototype.toProgress = function (e, t, i) {
    var o = 590 * (e = 1 < e ? 1 : e);this.e$H = this.e$H > e ? this.e$H : e, this.loadingBar.width = o;o = this.loadingBar.x + o;this.loadingImg2.x = o - 15, 364 <= o ? (this.loadingImg1.visible = !0, this.loadingImg1.x = o - 202) : this.loadingImg1.visible = !1, this.percentageTips.text = (100 * e >> 0) + "%", this.loadingTips.text = t;for (var s = i - 1, n = 0; n < this.e$q.length; n++) this.e$q[n].skin = n < s ? "eeeloding/e20a.png" : s === n ? "eeeloding/e19a.png" : "eeeloding/e18a.png";
  }, e$d.prototype.onOpened = function () {
    this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.e$G.lastVersion + "      \u7248\u672c\uff1a" + this.e$G.wxVersion, this.showGetBtn();
  }, e$d.prototype.close = function (e) {
    this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.e$L), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.e$$);
  }, e$d.prototype.resetWinFun = function () {
    Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
  }, e$d.prototype.destroy = function (e) {
    void 0 === e && (e = !0), this.resetWinFun(), o.prototype.destroy.call(this, e);
  }, e$d.prototype.showGetBtn = function () {
    this.e$G.showGetBtn && 1 == this.e$G.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "eeeloding/e1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.e$$), this.e$p(), this.e$M(!0));
  }, e$d.prototype.e$$ = function () {
    this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "eeeloding/e2a.png", this.e$T(), this.e$M(!1));
  }, e$d.prototype.e$R = function (e) {
    this.bgImg.skin = e.bgImgSkin, this.topImg.skin = e.topImgSkin, this.btmImg.skin = e.btmImgSkin, this.leftImg.skin = e.leftImgSkin, this.rightImg.skin = e.rightImgSkin, this.copyRightImg.bottom = e.copyRightImgBottom, this.processBox1.y = e.processBox1Y, this.processBox2.y = e.processBox2Y, this.loadingBarBg.skin = e.loadingBarBgSkin, this.loadingTips.fontSize = e.loadingTipsSize, this.getTipsBtn.visible = this.e$G.showGetBtn && 1 == this.e$G.showGetBtn, this.getTipsBtn.visible ? this.e$p() : this.e$T(), this.e$M(this.getTipsBtn.visible);
  }, e$d.prototype.e$p = function () {
    this.e$r || (this.e$r = i.create(this.getTipsBtn, "eewxeff", 4, 0, 12), this.e$r.pos(161, 106), this.e$r.scale(1.14, 1.15)), i.play(this.e$r);
  }, e$d.prototype.e$T = function () {
    this.e$r && i.stop(this.e$r);
  }, e$d.prototype.e$M = function (e) {
    Laya.timer.clear(this, this.e$L), e ? (this.e$S = 9, this.txtGetTm.visible = !0, this.e$L(), Laya.timer.loop(1e3, this, this.e$L)) : this.txtGetTm.visible = !1;
  }, e$d.prototype.e$L = function () {
    0 < this.e$S ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.e$S + "s)", this.e$S--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.e$L), this.e$$());
  }, t.LoadingPanel = e$d;
}(modules = modules || {}), function (e) {
  var t, i, o;function e$d(e) {
    void 0 === e && (e = "eeelogin/e1b.png");var t = s.call(this) || this;return t.e$j = 0, t.e$C = "multi_notice_key", t.e$K = 0, t.e$x = 0, t.e$n = "privacy_key", t.e$Q = !0, t.e$y = 0, t.copyRightImg.skin = e, t;
  }var s;t = e.e$k || (e.e$k = {}), i = Laya.List, o = Laya.Event, s = ui.e$l, __extends(e$d, s), e$d.prototype.initialize = function () {
    s.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.copyRightImg.skin = "", ServerLoading.instance.preloadServer(), this.e$G = Browser.window.PF_INFO, this.e$V = new i(), this.e$V.vScrollBarSkin = "", this.e$V.itemRender = t.SelectLeftListItem, this.e$V.top = 5, this.e$V.repeatX = 1, this.e$V.spaceY = 5, this.e$V.width = this.leftListBox.width, this.e$V.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.e$V), this.e$Z = new i(), this.e$Z.vScrollBarSkin = "", this.e$Z.itemRender = t.SelectRightListItem, this.e$Z.top = 5, this.e$Z.repeatX = 1, this.e$Z.spaceY = 5, this.e$Z.width = this.rightListBox.width, this.e$Z.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.e$Z), this.e$U = new i(), this.e$U.hScrollBarSkin = "", this.e$U.itemRender = t.NoticeItem, this.e$U.repeatY = 1, this.e$U.width = this.boxTab.width, this.e$U.height = this.boxTab.height, this.boxTab.addChild(this.e$U), this.e$E = new i(), this.e$E.hScrollBarSkin = "", this.e$E.itemRender = t.PrivacyItem, this.e$E.repeatY = 1, this.e$E.width = this.boxTab.width, this.e$E.height = this.boxTab.height, this.boxTabPrivacy.addChild(this.e$E);var e = this.e$G.loadingType;this.e$N = 1 == e || 2 == e || 3 == e || 101 == e ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.e$u = [], this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.privacyContent.color = "#212942", this.privacyContent.style.fontSize = 26, this.privacyContent.style.lineHeight = 28, this.privacyContent.mouseEnabled = !1, this.privacyTip.color = "#ffffff", this.privacyTip.style.fontSize = 18, this.privacyTip.style.lineHeight = 18, this.privacyTip.style.stroke = 2, this.privacyTip.style.strokeColor = "#000000", this.privacyTip.style.wordWrap = !1, this.jumpContent.color = "#212942", this.jumpContent.style.fontSize = 26, this.jumpContent.style.lineHeight = 28, this.jumpContent.mouseEnabled = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
  }, e$d.prototype.destroy = function (e) {
    void 0 === e && (e = !0), this.rmEvts(), this.e$h(), this.e$s(), this.e$P(), this.e$X(), this.ageTipsContent = null, this.e$V && (this.e$V.removeSelf(), this.e$V.destroy(), this.e$V = null), this.e$Z && (this.e$Z.removeSelf(), this.e$Z.destroy(), this.e$Z = null), this.e$U && (this.e$U.removeSelf(), this.e$U.destroy(), this.e$U = null), this.e$E && (this.e$E.removeSelf(), this.e$E.destroy(), this.e$E = null), Laya.timer.clear(this, this.e$m), s.prototype.destroy.call(this, e);
  }, e$d.prototype.addEvt = function () {
    this.bgImg.on(Laya.Event.CLICK, this, this.e$O), this.enterBtn.on(Laya.Event.CLICK, this, this.e$F), this.selectServer.on(Laya.Event.CLICK, this, this.e$a), this.selectServer.on(Laya.Event.CLICK, this, this.e$a), this.closeBg.on(Laya.Event.CLICK, this, this.e$_), this.closeBtn.on(Laya.Event.CLICK, this, this.e$v), this.noticeBtn.on(Laya.Event.CLICK, this, this.e$dd), this.noticeClose.on(Laya.Event.CLICK, this, this.e$td), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.e$ld), this.mNoticeClose.on(Laya.Event.CLICK, this, this.e$kd), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.e$kd), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.e$Wd), this.privacyBtn.on(Laya.Event.CLICK, this, this.e$id), this.ageTipBtn.on(Laya.Event.CLICK, this, this.e$Ad), this.privacyClose.on(Laya.Event.CLICK, this, this.e$Bd), this.privacyClose2.on(Laya.Event.CLICK, this, this.e$Bd), this.privacyPanel.on(Laya.Event.MOUSE_DOWN, this, this.e$od), this.privacyToggle.on(Laya.Event.CLICK, this, this.e$Id), this.privacyTip.on(Laya.Event.LINK, this, this.e$bd), this.btnJump.on(Laya.Event.CLICK, this, this.e$fd), this.jumpPanel.on(Laya.Event.MOUSE_DOWN, this, this.e$Jd), this.e$U.selectEnable = !0, this.e$U.selectHandler = Laya.Handler.create(this, this.e$cd, null, !1), this.e$E.selectEnable = !0, this.e$E.selectHandler = Laya.Handler.create(this, this.e$Yd, null, !1);
  }, e$d.prototype.rmEvts = function () {
    this.bgImg.off(Laya.Event.CLICK, this, this.e$O), this.enterBtn.off(Laya.Event.CLICK, this, this.e$F), this.selectServer.off(Laya.Event.CLICK, this, this.e$a), this.selectServer.off(Laya.Event.CLICK, this, this.e$a), this.closeBg.off(Laya.Event.CLICK, this, this.e$_), this.noticeBtn.off(Laya.Event.CLICK, this, this.e$dd), this.closeBtn.off(Laya.Event.CLICK, this, this.e$v), this.noticeClose.off(Laya.Event.CLICK, this, this.e$td), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.e$ld), this.mNoticeClose.off(Laya.Event.CLICK, this, this.e$kd), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.e$kd), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.e$Wd), this.privacyBtn.off(Laya.Event.CLICK, this, this.e$id), this.ageTipBtn.off(Laya.Event.CLICK, this, this.e$Ad), this.privacyClose.off(Laya.Event.CLICK, this, this.e$Bd), this.privacyClose2.off(Laya.Event.CLICK, this, this.e$Bd), this.privacyPanel.off(Laya.Event.MOUSE_DOWN, this, this.e$od), this.privacyToggle.off(Laya.Event.CLICK, this, this.e$Id), this.privacyTip.off(Laya.Event.LINK, this, this.e$bd), this.btnJump.off(Laya.Event.CLICK, this, this.e$fd), this.jumpPanel.off(Laya.Event.MOUSE_DOWN, this, this.e$Jd), this.e$U.selectEnable = !1, this.e$U.selectHandler = null, this.e$E.selectEnable = !1, this.e$E.selectHandler = null;
  }, e$d.prototype.onOpened = function () {
    var o = this;this.e$i = Date.now(), this.e$Q = !0, this.e$wd = this.e$G.selectedServer.server_id, this.e$Dd(this.e$G.selectedServer), this.e$V.dataSource = this.e$G.groupList, this.e$a(), req_multi_server_notice(4, this.e$G.pkgName, this.e$G.selectedServer.server_id, this.e$zd.bind(this)), Laya.timer.frameOnce(1, this, function () {
      o.e$ed = o.e$G.privacy_data && o.e$G.privacy_data.list ? o.e$G.privacy_data.list : [], o.e$gd = null != o.e$G.privacy_login_pkg ? o.e$G.privacy_login_pkg : 0;var e = "1" == localStorage.getItem(o.e$n),
          t = 0 != PF_INFO.privacy_save_pkg,
          i = 0 == o.e$gd || 1 == o.e$gd;o.e$Hd = t && e || i, o.e$Rd();
    }), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.e$G.lastVersion + "      \u7248\u672c\uff1a" + this.e$G.wxVersion, this.serverName.color = this.selServer.color = this.e$N, this.imgCheatTip.visible = 1 == this.e$G.anti_cheat_pkg, this.txtTip.visible = !1;
  }, e$d.prototype.preload = function () {}, e$d.prototype.e$O = function () {
    this.e$Hd ? 1e4 < Date.now() - this.e$i && (this.e$i -= 2e3, ServerLoading.instance.enterDefaultServer()) : this.e$Gd("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
  }, e$d.prototype.e$F = function () {
    this.e$Hd ? this.e$qd(this.e$G.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.e$G.selectedServer, req_server_check_ban(0, this.e$G.selectedServer.server_id)) : this.e$Gd("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
  }, e$d.prototype.e$a = function () {
    this.e$G.hasGroupReq ? this.listBg.visible = !0 : (this.e$G.hasGroupReq = !0, req_server_group(0));
  }, e$d.prototype.e$_ = function () {
    this.listBg.visible = !1;
  }, e$d.prototype.e$v = function () {
    this.jumpBg.visible = !1;
  }, e$d.prototype.e$dd = function () {
    this.e$Ld();
  }, e$d.prototype.e$kd = function () {
    this.mNoticeBg.visible = !1;
  }, e$d.prototype.e$td = function () {
    this.noticeBg.visible = !1;
  }, e$d.prototype.e$id = function () {
    this.e$$d();
  }, e$d.prototype.e$Bd = function () {
    this.privacyBg.visible = !1;
  }, e$d.prototype.e$Id = function () {
    this.e$Hd = !this.e$Hd, this.e$Hd && localStorage.setItem(this.e$n, "1"), this.privacyToggle.skin = "eeelogin/" + (this.e$Hd ? "e29b.png" : "e28b.png");
  }, e$d.prototype.e$bd = function (e) {
    this.e$$d(Number(e));
  }, e$d.prototype.e$fd = function () {
    Browser.window.forceJumpMiniGame ? Browser.window.forceJumpMiniGame() : this.e$v();
  }, e$d.prototype.e$ld = function () {
    this.e$j = this.noticeContent.mouseY, Laya.stage.on(o.MOUSE_MOVE, this, this.e$pd), Laya.stage.on(o.MOUSE_UP, this, this.e$h), Laya.stage.on(o.MOUSE_OUT, this, this.e$h);
  }, e$d.prototype.e$pd = function () {
    var e;this.noticeContent && (e = this.e$j - this.noticeContent.mouseY, this.noticeContent.scrollY += e, this.e$j = this.noticeContent.mouseY);
  }, e$d.prototype.e$h = function () {
    Laya.stage.off(o.MOUSE_MOVE, this, this.e$pd), Laya.stage.off(o.MOUSE_UP, this, this.e$h), Laya.stage.off(o.MOUSE_OUT, this, this.e$h);
  }, e$d.prototype.e$Wd = function () {
    this.e$K = this.mNoticePanel.mouseY, Laya.stage.on(o.MOUSE_MOVE, this, this.e$Md), Laya.stage.on(o.MOUSE_UP, this, this.e$s), Laya.stage.on(o.MOUSE_OUT, this, this.e$s);
  }, e$d.prototype.e$Md = function () {
    var e;this.mNoticeContent && (e = this.e$K - this.mNoticePanel.mouseY, this.mNoticeContent.y -= e, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.e$K = this.mNoticePanel.mouseY);
  }, e$d.prototype.e$s = function () {
    Laya.stage.off(o.MOUSE_MOVE, this, this.e$Md), Laya.stage.off(o.MOUSE_UP, this, this.e$s), Laya.stage.off(o.MOUSE_OUT, this, this.e$s);
  }, e$d.prototype.e$od = function () {
    this.e$x = this.privacyPanel.mouseY, Laya.stage.on(o.MOUSE_MOVE, this, this.e$Td), Laya.stage.on(o.MOUSE_UP, this, this.e$P), Laya.stage.on(o.MOUSE_OUT, this, this.e$P);
  }, e$d.prototype.e$Td = function () {
    var e;this.privacyContent && (e = this.e$x - this.privacyPanel.mouseY, this.privacyContent.y -= e, this.privacyPanel.height < this.privacyContent.contextHeight ? this.privacyContent.y < this.privacyPanel.height - this.privacyContent.contextHeight ? this.privacyContent.y = this.privacyPanel.height - this.privacyContent.contextHeight : 0 < this.privacyContent.y && (this.privacyContent.y = 0) : this.privacyContent.y = 0, this.e$x = this.privacyPanel.mouseY);
  }, e$d.prototype.e$P = function () {
    Laya.stage.off(o.MOUSE_MOVE, this, this.e$Td), Laya.stage.off(o.MOUSE_UP, this, this.e$P), Laya.stage.off(o.MOUSE_OUT, this, this.e$P);
  }, e$d.prototype.e$Jd = function () {
    this.e$y = this.jumpPanel.mouseY, Laya.stage.on(o.MOUSE_MOVE, this, this.e$rd), Laya.stage.on(o.MOUSE_UP, this, this.e$X), Laya.stage.on(o.MOUSE_OUT, this, this.e$X);
  }, e$d.prototype.e$rd = function () {
    var e;this.jumpContent && (e = this.e$y - this.jumpPanel.mouseY, this.jumpContent.y -= e, this.jumpPanel.height < this.jumpContent.contextHeight ? this.jumpContent.y < this.jumpPanel.height - this.jumpContent.contextHeight ? this.jumpContent.y = this.jumpPanel.height - this.jumpContent.contextHeight : 0 < this.jumpContent.y && (this.jumpContent.y = 0) : this.jumpContent.y = 0, this.e$y = this.jumpPanel.mouseY);
  }, e$d.prototype.e$X = function () {
    Laya.stage.off(o.MOUSE_MOVE, this, this.e$rd), Laya.stage.off(o.MOUSE_UP, this, this.e$X), Laya.stage.off(o.MOUSE_OUT, this, this.e$X);
  }, e$d.prototype.e$cd = function () {
    if (this.e$U.dataSource) {
      for (var e, t = 0; t < this.e$U.dataSource.length; t++) {
        var i = this.e$U.dataSource[t];i[1] = t == this.e$U.selectedIndex, t == this.e$U.selectedIndex && (e = i[0]);
      }this.mNoticeTitle.text = e && e.title ? e.title : "", this.mNoticeContent.innerHTML = e && e.content ? e.content : "", this.mNoticeContent.y = 0;
    }
  }, e$d.prototype.e$Yd = function () {
    var e = this.e$E.dataSource;if (e) {
      for (var t = 0; t < e.length; t++) e[t][1] = t == this.e$E.selectedIndex;var i = this.e$ed[this.e$E.selectedIndex];i && i.content && (i.content = i.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "")), this.privacyTitle.text = i && i.title ? i.title : "\u6807\u9898", this.privacyContent.innerHTML = i && i.content ? i.content : "\u52a0\u8f7d\u4e2d...", this.privacyContent.y = 0;
    }
  }, e$d.prototype.e$Dd = function (e) {
    this.serverName.text = -1 === e.status ? e.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === e.status ? e.server_name + "(\u5f85\u5f00\u670d)" : e.server_name, this.serverName.color = -1 === e.status ? "#d50000" : 0 === e.status ? "#49575a" : this.e$N, this.hotImage.skin = this.getStatusSrc(e.status), this.e$G.cdn = e.cdn || "", this.e$G.selectedServer = e, this.noticeBtn.visible = !0;
  }, e$d.prototype.e$Sd = function (e) {
    this.showGroupList(e);
  }, e$d.prototype.e$jd = function (e) {
    this.e$Dd(e), this.listBg.visible = !1;
  }, e$d.prototype.showGroupList = function (e) {
    if (void 0 === e && (e = 0), this.parent) {
      var t = this.e$G.groupList;if (t && 0 !== t.length) {
        for (var i = t.length, o = 0; o < i; o++) t[o].callBack = this.e$Sd.bind(this), t[o].select = o == e, t[o].index = o;var s = (this.e$V.array = t)[e].id;this.e$G.serverList[s] ? this.showServerList(s) : this.e$G.hasServerReq || (this.e$G.hasServerReq = !0, -1 == s ? req_server_owner(0) : -2 == s ? req_recommend_server_list(0) : req_server_list(0, s));
      }
    }
  }, e$d.prototype.showServerList = function (e) {
    if (this.parent && this.e$G.serverList[e]) {
      for (var t = this.e$G.serverList[e], i = t.length, o = 0; o < i; o++) t[o].callBack = this.e$jd.bind(this);this.e$Z.array = t;
    }
  }, e$d.prototype.e$qd = function (e) {
    return -1 == e.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != e.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
  }, e$d.prototype.getStatusSrc = function (e) {
    var t = "";return 2 === e ? t = "eeelogin/e18b.png" : 1 === e ? t = "eeelogin/e19b.png" : -1 !== e && 0 !== e || (t = "eeelogin/e20b.png"), t;
  }, e$d.prototype.e$zd = function (e) {
    console.log("onMultiNoticeCallback, param = ", e);var t = Date.now() / 1e3,
        i = localStorage.getItem(this.e$C),
        o = !(this.e$u = []);if ("success" == e.state) for (var s in e.data) {
      var s = e.data[s],
          n = t < s.end_time,
          r = 1 == s.pop_type,
          a = 2 == s.pop_type && s.key + "" != i;!o && n && (r || a) && (o = !0), n && this.e$u.push(s), a && localStorage.setItem(this.e$C, s.key + "");
    }this.e$u.sort(function (e, t) {
      return e.login_id - t.login_id;
    }), console.log("onMultiNoticeCallback, datas = ", this.e$u), o && this.e$Ld();
  }, e$d.prototype.e$Ld = function () {
    if (this.e$U) {
      if (this.e$u) {
        this.e$U.x = 2 < this.e$u.length ? 0 : (this.boxTab.width - 274 * this.e$u.length) / 2;for (var e = [], t = 0; t < this.e$u.length; t++) {
          var i = this.e$u[t];e.push([i, t == this.e$U.selectedIndex]);
        }0 < (this.e$U.dataSource = e).length ? (this.e$U.selectedIndex = 0, this.e$U.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.e$u.length <= 1, this.boxTab.visible = 1 < this.e$u.length;
      }this.mNoticeBg.visible = !0;
    }
  }, e$d.prototype.e$Cd = function (e) {
    if (!this.destroyed) {
      if (console.log("p_onPrivacyCallback, param = ", e), "success" == e.state) for (var t in e.data) {
        var t = Number(t),
            i = e.data[t];this.e$ed && this.e$ed[t] && (this.e$ed[t].content = i.content);
      }this.e$Yd();
    }
  }, e$d.prototype.e$Rd = function () {
    for (var e = "", t = 0; t < this.e$ed.length; t++) e += '<a href="' + t + '" style="color:#14ff28;text-decoration:none">' + this.e$ed[t].title + "</a>", t < this.e$ed.length - 1 && (e += "\u3001");this.privacyTip.innerHTML = "\u6211\u5df2\u7ecf\u8be6\u7ec6\u9605\u8bfb\u5e76\u540c\u610f" + e, this.privacyToggle.skin = "eeelogin/" + (this.e$Hd ? "e29b.png" : "e28b.png"), this.privacyTip.x = (720 - this.privacyTip.width) / 2, this.privacyToggle.x = this.privacyTip.x - 30, this.privacyBtn.visible = 0 < this.e$ed.length, this.privacyToggle.visible = this.privacyTip.visible = 0 < this.e$ed.length && 0 != this.e$gd;
  }, e$d.prototype.e$$d = function (e) {
    if (void 0 === e && (e = 0), this.e$E) {
      if (this.e$ed) {
        this.e$E.x = 2 < this.e$ed.length ? 0 : (this.boxTab.width - 274 * this.e$ed.length) / 2;for (var t = [], i = 0; i < this.e$ed.length; i++) {
          var o = this.e$ed[i],
              o = o && o.title ? o.title : "",
              s = i == this.e$E.selectedIndex;t.push([o, s]);
        }0 < (this.e$E.dataSource = t).length ? ((e = e < 0 ? 0 : e) > t.length - 1 && (e = 0), this.e$E.selectedIndex = e, this.e$E.scrollTo(e)) : (this.privacyTitle.text = "\u7a7a", this.privacyContent.text = ""), this.privacyClose2.visible = this.e$ed.length <= 1, this.boxTabPrivacy.visible = 1 < this.e$ed.length;
      }this.e$Q && (this.e$Q = !1, req_privacy(this.e$G.pkgName, this.e$Cd.bind(this))), this.privacyBg.visible = !0;
    }
  }, e$d.prototype.openJumpView = function (e, t, i, o) {
    void 0 === o && (o = !1), this.jumpTitle.text = e || "\u6682\u65e0\u516c\u544a", this.jumpContent.innerHTML = t || "", this.btnJump.label = i || "\u786e\u5b9a", this.jumpContent.y = 0, this.jumpBg.visible = !0, this.closeBtn.visible = o;
  }, e$d.prototype.showAgeTipsBtn = function (e, t, i, o, s) {
    (this.ageTipBtn.visible = e) && (this.ageTipBtn.skin = t || "eeelogin/e11b.png"), this.ageTipsContent = i, this.ageTipBtn.x = o || 0, this.ageTipBtn.y = s || 0;
  }, e$d.prototype.e$Ad = function () {
    this.openJumpView("\u9002\u9f84\u516c\u544a", this.ageTipsContent, "\u786e\u8ba4", !0);
  }, e$d.prototype.e$Gd = function (e) {
    this.txtTip.text = e, this.txtTip.y = 640, this.txtTip.visible = !0, this.e$Kd = 1, Laya.timer.clear(this, this.e$m), this.e$m(), Laya.timer.frameLoop(1, this, this.e$m);
  }, e$d.prototype.e$m = function () {
    this.txtTip.y -= this.e$Kd, this.e$Kd *= 1.1, this.txtTip.y <= 590 && (this.txtTip.visible = !1, Laya.timer.clear(this, this.e$m));
  }, t.SelectServerPanel = e$d;
}(modules = modules || {});var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.e$k.AuthorizationPanel,
    LoadingPanel = modules.e$k.LoadingPanel,
    SelectServerPanel = modules.e$k.SelectServerPanel,
    ServerLoading = function () {
  function e$o(e) {
    this.m_loadingRes = ["eeeloding/e13a.png", "eeeloding/e15a.png", "eeeloding/e14a.png", "eeeloding/e16a.png", "eeeloding/e17a.png", "eeeloding/e18a.png", "eeeloding/e19a.png", "eeeloding/e20a.png", "eewxeff/e1c.png", "eewxeff/e2c.png", "eewxeff/e3c.png", "eewxeff/e4c.png", "eewxeff/e5c.png", "eeeloding/e3a.jpg", "eeeloding/e12a.jpg", "eeeloding/e1a.png", "eeeloding/e2a.png", "eeeloding/e4a.jpg", "eeeloding/e6a.jpg", "eeeloding/e8a.jpg", "eeeloding/e10a.jpg", "eeeloding/e5a.jpg", "eeeloding/e7a.jpg", "eeeloding/e9a.jpg", "eeeloding/e11a.jpg"], this.m_serverRes = ["eeelogin/e10b.png", "eeelogin/e11b.png", "eeelogin/e12b.png", "eeelogin/e13b.png", "eeelogin/e14b.png", "eeelogin/e15b.png", "eeelogin/e16b.png", "eeelogin/e17b.png", "eeelogin/e18b.png", "eeelogin/e19b.png", "eeelogin/e20b.png", "eeelogin/e21b.png", "eeelogin/e2b.jpg", "eeelogin/e3b.jpg", "eeelogin/e4b.jpg", "eeelogin/e5b.jpg", "eeelogin/e6b.jpg", "eeelogin/e1b.png", "eeelogin/e8b.png", "eeelogin/e9b.png", "eeelogin/e24b.png", "eeelogin/e25b.png", "eeelogin/e27b.png", "eeelogin/e29b.png", "eeelogin/e28b.png"], this.copyRightUrl = "eeelogin/e1b.png", this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.e$xd = !1, this.e$nd = "", e$o.instance = this, Laya.MiniAdpter.init(), e.serRes && (this.m_serverRes = this.m_serverRes.concat(e.serRes)), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;e = Laya.AtlasResourceManager;e.maxTextureCount = 6, e.atlasTextureWidth = e.atlasTextureHeight = 1024, e._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.e$Qd.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } }, "e28b.png": { frame: { h: 25, idx: 0, w: 25, x: 444, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 2 } }, "e29b.png": { frame: { h: 27, idx: 0, w: 26, x: 470, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = e$o.instance.requestWeb, Browser.window.imgMgrLoad = e$o.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.e$Qd();
  }return e$o.prototype.changeServerLoading = function (e) {
    e$o.instance.m_layer.visible = e;
  }, e$o.prototype.openAuthor = function () {
    e$o.instance.m_author || (e$o.instance.m_author = new AuthorizationPanel()), e$o.instance.m_author.parent || e$o.instance.m_layer.addChild(e$o.instance.m_author), e$o.instance.e$yd();
  }, e$o.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, e$o.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, e$o.prototype.e$Vd = function () {
    e$o.instance.m_server || (e$o.instance.m_server = new SelectServerPanel(this.copyRightUrl)), e$o.instance.m_server.parent || e$o.instance.m_layer.addChild(e$o.instance.m_server), e$o.instance.e$yd();
  }, e$o.prototype.openJumpView = function (e, t, i, o) {
    void 0 === o && (o = !1), this.e$Vd(), e$o.instance.m_server.openJumpView(e, t, i, o);
  }, e$o.prototype.openJumpTipsBtn = function (e, t, i, o, s) {
    this.e$Vd(), e$o.instance.m_server.showAgeTipsBtn(e, t, i, o, s);
  }, e$o.prototype.openServer = function (e, t, i) {
    var o = this;this.copyRightUrl = i = void 0 === i ? "eeelogin/e1b.png" : i;for (var i = function () {
      o.e$Vd(), e && t && e.call(t);
    }, s = !0, n = 0, r = this.m_serverRes; n < r.length; n++) {
      var a = r[n];if (null == Laya.Loader.getRes(a)) {
        s = !1;break;
      }
    }s ? i() : Laya.loader.load(this.m_serverRes, Handler.create(this, i));
  }, e$o.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, e$o.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, e$o.prototype.openLoading = function (e, t) {
    void 0 === e && (e = 0), void 0 === t && (t = "eeelogin/e1b.png"), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      e$o.instance.m_loading || (e$o.instance.m_loading = new LoadingPanel(e, t)), e$o.instance.m_loading.parent || e$o.instance.m_layer.addChild(e$o.instance.m_loading), e$o.instance.e$yd();
    }));
  }, e$o.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var e = 0, t = this.m_serverRes; e < t.length; e++) {
      var i = t[e];Laya.Loader.clearCache(e$o.instance, i), Laya.Loader.clearRes(i, !0);
    }for (var o = 0, s = this.m_loadingRes; o < s.length; o++) i = s[o], Laya.Loader.clearCache(e$o.instance, i), Laya.Loader.clearRes(i, !0);this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, e$o.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && e$o.instance.m_loading.showGetBtn();
  }, e$o.prototype.enterDefaultServer = function () {
    var e = Browser.window.PF_INFO.selectedServer;this.e$xd || -1 == e.status || 0 == e.status || (this.e$xd = !0, Browser.window.PF_INFO.selectedServer = e, req_server_check_ban(0, e.server_id));
  }, e$o.prototype.sendRecord = function () {
    var e = "";e = (e = (e = (e = (e = (e = (e = (e += "newRegister=" + Browser.window.PF_INFO.newRegister) + ", isPrelodServer=" + this.m_isPrelodServer) + ", SelectServerPanel=" + (null != e$o.instance.m_server)) + ", isPrelodLoading=" + this.m_isPrelodLoading) + ", LoadingPanel=" + (null != e$o.instance.m_loading)) + ", resMgrLoad=" + (Browser.window.resMgrLoad == e$o.instance.requestWeb)) + ", imgMgrLoad=" + (Browser.window.imgMgrLoad == e$o.instance.requestWeb)) + ", errUrls=" + e$o.instance.e$nd;for (var t = 0, i = this.m_serverRes; t < i.length; t++) e += ", " + (n = i[t]) + "=" + (null != Laya.Loader.getRes(n));for (var o = 0, s = this.m_loadingRes; o < s.length; o++) {
      var n;e += ", " + (n = s[o]) + "=" + (null != Laya.Loader.getRes(n));
    }var r = Browser.window.PF_INFO.selectedServer;r && (e = (e = (e += ", server_status=" + r.status) + (", server_id=" + r.server_id)) + (", server_name=" + r.server_name));r = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: e });console.error(r), this.e$Zd && this.e$Zd == e || (this.e$Zd = e, reqRecordError(r));
  }, e$o.prototype.e$Ud = function () {
    var e = Laya.stage,
        t = Math.floor(e.width),
        i = Math.floor(e.height);i / t < 1.7777778 ? (this.viewW = Math.floor(t / (i / 1280)), this.viewH = 1280, this.viewS = i / 1280) : (this.viewW = 720, this.viewH = Math.floor(i / (t / 720)), this.viewS = t / 720);i = Math.floor(e.width), t = Math.floor(e.height);t / i < 1.7777778 ? (this.viewW = Math.floor(i / (t / 1280)), this.viewH = 1280, this.viewS = t / 1280) : (this.viewW = 720, this.viewH = Math.floor(t / (i / 720)), this.viewS = i / 720), this.e$yd();
  }, e$o.prototype.e$yd = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, e$o.prototype.e$Qd = function () {
    if (Input.isInputting && Browser.onMobile) return i = parseInt(Input.inputContainer.style.top.replace("px", "")), e = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS, t = Browser.clientWidth / Render.canvas.width, 0 < (i = Browser.clientHeight - e * t - i) && (i = 0), void (Browser.container.style.top = i + "px");var e, t;Browser.container.style.top = "0px", e = Math.floor(Browser.width) + 1 & 2147483646, t = Math.floor(Browser.height) + 1 & 2147483646;var i = Laya.stage;3 == ENV || t < e ? (i.scaleMode = Laya.Stage.SCALE_NOSCALE, i.width = e, i.height = t) : (i.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, i.width = 840, i.height = Math.floor(t / (e / 840)) + 1 & 2147483646), this.e$Ud();
  }, e$o.prototype.requestWeb = function (e, t) {
    function e$l() {
      i.onload = null, i.onerror = null;
    }var i,
        o = e;(i = new Browser.window.Image()).onload = function () {
      e$l(), t(o, 200, i);
    }, i.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", o), e$o.instance.e$nd += o + "|", e$l(), t(o, 404, null);
    }, i.src = o, -1 == e$o.instance.m_serverRes.indexOf(o) && -1 == e$o.instance.m_loadingRes.indexOf(o) || Laya.Loader.keepCache(e$o.instance, o);
  }, e$o.prototype.e$Ed = function (e, t) {
    return -1 != e.indexOf(t, e.length - t.length);
  }, e$o;
}();!function (e) {
  function e$d() {
    var e = t.call(this) || this;return e.e$Nd = "#72441d", e.e$ud = "#263d7d", e.width = 274, e.height = 59, e.e$hd = new Laya.Image(), e.addChild(e.e$hd), e.e$sd = new Laya.Label(), e.e$sd.fontSize = 30, e.e$sd.color = e.e$ud, e.addChild(e.e$sd), e.e$sd.centerX = 0, e.e$sd.centerY = 0, e;
  }var t;e = e.e$k || (e.e$k = {}), t = Laya.View, __extends(e$d, t), e$d.prototype.initialize = function () {
    t.prototype.initialize.call(this), this.e$G = Browser.window.PF_INFO, this.e$G.loadingType, this.addEvt();
  }, Object.defineProperty(e$d.prototype, "dataSource", { set: function (e) {
      e && this.setData(e);
    }, enumerable: !0, configurable: !0 }), e$d.prototype.setData = function (e) {
    this.e$Pd = e[0], this.e$Xd = e[1], this.e$sd.text = this.e$Pd.title, this.e$sd.color = this.e$Xd ? this.e$Nd : this.e$ud, this.e$hd.skin = this.e$Xd ? "eeelogin/e25b.png" : "eeelogin/e24b.png";
  }, e$d.prototype.destroy = function (e) {
    void 0 === e && (e = !0), this.rmEvts(), t.prototype.destroy.call(this, e);
  }, e$d.prototype.addEvt = function () {}, e$d.prototype.rmEvts = function () {}, e.NoticeItem = e$d;
}(modules = modules || {}), function (e) {
  function e$d() {
    var e = t.call(this) || this;return e.e$Nd = "#72441d", e.e$ud = "#263d7d", e.width = 274, e.height = 59, e.e$hd = new Laya.Image(), e.addChild(e.e$hd), e.e$sd = new Laya.Label(), e.e$sd.fontSize = 30, e.e$sd.color = e.e$ud, e.addChild(e.e$sd), e.e$sd.centerX = 0, e.e$sd.centerY = 0, e;
  }var t;e = e.e$k || (e.e$k = {}), t = Laya.View, __extends(e$d, t), e$d.prototype.initialize = function () {
    t.prototype.initialize.call(this), this.e$G = Browser.window.PF_INFO, this.e$G.loadingType, this.addEvt();
  }, Object.defineProperty(e$d.prototype, "dataSource", { set: function (e) {
      e && this.setData(e);
    }, enumerable: !0, configurable: !0 }), e$d.prototype.setData = function (e) {
    this.e$md = e[0], this.e$Xd = e[1], this.e$sd.text = this.e$md, this.e$sd.color = this.e$Xd ? this.e$Nd : this.e$ud, this.e$hd.skin = this.e$Xd ? "eeelogin/e25b.png" : "eeelogin/e24b.png";
  }, e$d.prototype.destroy = function (e) {
    void 0 === e && (e = !0), this.rmEvts(), t.prototype.destroy.call(this, e);
  }, e$d.prototype.addEvt = function () {}, e$d.prototype.rmEvts = function () {}, e.PrivacyItem = e$d;
}(modules = modules || {}), function (e) {
  function e$d() {
    var e = t.call(this) || this;return e.width = 192, e.height = 70, e.e$hd = new Laya.Image(), e.addChild(e.e$hd), e.e$sd = new Laya.Label(), e.e$sd.fontSize = 28, e.e$sd.color = e.e$N, e.addChild(e.e$sd), e.e$sd.centerX = 0, e.e$sd.centerY = 0, e;
  }var t;e = e.e$k || (e.e$k = {}), t = Laya.View, __extends(e$d, t), e$d.prototype.initialize = function () {
    t.prototype.initialize.call(this), this.e$G = Browser.window.PF_INFO;var e = this.e$G.loadingType;this.e$N = 1 != e && 2 != e && 3 == e ? "#763042" : "#263d7d", this.addEvt();
  }, Object.defineProperty(e$d.prototype, "dataSource", { set: function (e) {
      e && this.setData(e);
    }, enumerable: !0, configurable: !0 }), e$d.prototype.setData = function (e) {
    this.e$Pd = e, this.e$sd.text = e.name, this.e$hd.skin = e.select ? "eeelogin/e14b.png" : "eeelogin/e15b.png";
  }, e$d.prototype.destroy = function (e) {
    void 0 === e && (e = !0), this.rmEvts(), t.prototype.destroy.call(this, e);
  }, e$d.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, e$d.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, e$d.prototype.clkHdler = function () {
    this.e$Pd && this.e$Pd.callBack && this.e$Pd.callBack(this.e$Pd.index);
  }, e.SelectLeftListItem = e$d;
}(modules = modules || {}), function (e) {
  function e$d() {
    var e = t.call(this) || this;return e.e$hd = new Laya.Image("eeelogin/e16b.png"), e.e$sd = new Laya.Label(), e.e$sd.fontSize = 30, e.e$sd.color = e.e$N, e.addChild(e.e$hd), e.e$Od = new Laya.Image(), e.addChild(e.e$Od), e.width = 358, e.height = 70, e.addChild(e.e$sd), e.e$Od.centerY = 0, e.e$Od.x = 18, e.e$sd.x = 80, e.e$sd.centerY = 0, e.e$hd.graphics.drawRect(0, 0, e.width, e.height, "#00sasd"), e;
  }var t;e = e.e$k || (e.e$k = {}), t = Laya.View, __extends(e$d, t), e$d.prototype.initialize = function () {
    t.prototype.initialize.call(this), this.e$G = Browser.window.PF_INFO;var e = this.e$G.loadingType;this.e$N = 1 != e && 2 != e && 3 == e ? "#763042" : "#34267d", this.addEvt();
  }, Object.defineProperty(e$d.prototype, "dataSource", { set: function (e) {
      e && this.setData(e);
    }, enumerable: !0, configurable: !0 }), e$d.prototype.setData = function (e) {
    this.e$Pd = e, this.e$sd.color = -1 === e.status ? "#d50000" : 0 === e.status ? "#49575a" : this.e$N, this.e$sd.text = -1 === e.status ? e.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === e.status ? e.server_name + "(\u5f85\u5f00\u670d)" : e.server_name, this.e$Od.skin = this.getStatusSrc(e.status);
  }, e$d.prototype.destroy = function (e) {
    void 0 === e && (e = !0), this.rmEvts(), t.prototype.destroy.call(this, e);
  }, e$d.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, e$d.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, e$d.prototype.clkHdler = function () {
    this.e$Pd && this.e$Pd.callBack && this.e$Pd.callBack(this.e$Pd);
  }, e$d.prototype.getStatusSrc = function (e) {
    var t = "";return 2 === e ? t = "eeelogin/e18b.png" : 1 === e ? t = "eeelogin/e19b.png" : -1 !== e && 0 !== e || (t = "eeelogin/e20b.png"), t;
  }, e.SelectRightListItem = e$d;
}(modules = modules || {}), window.ServerLoading = ServerLoading;