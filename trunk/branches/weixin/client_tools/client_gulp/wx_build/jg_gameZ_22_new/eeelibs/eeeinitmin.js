"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var C$99i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (C$99e, C$99t) {
    C$99e.__proto__ = C$99t;
  } || function (C$99e, C$99t) {
    for (var C$99i in C$99t) C$99t.hasOwnProperty(C$99i) && (C$99e[C$99i] = C$99t[C$99i]);
  };return function (C$99e, C$99t) {
    function e$l() {
      this.constructor = C$99e;
    }C$99i(C$99e, C$99t), C$99e.prototype = null === C$99t ? Object.create(C$99t) : (e$l.prototype = C$99t.prototype, new e$l());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (C$99e) {
  __extends(e$t, C$99i = View), e$t.prototype.createChildren = function () {
    C$99i.prototype.createChildren.call(this), this.createView(C$99e.e$d.uiView);
  }, e$t.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "eeelogin/e2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "eeelogin/e6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "eeelogin/e3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "eeelogin/e4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "eeelogin/e5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] };var C$99t = e$t;function e$t() {
    return C$99i.call(this) || this;
  }var C$99i;C$99e.e$d = C$99t;
}(ui = ui || {}), function (C$99e) {
  __extends(e$t, C$99i = View), e$t.prototype.createChildren = function () {
    C$99i.prototype.createChildren.call(this), this.createView(C$99e.e$t.uiView);
  }, e$t.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "eeelogin/e1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "eeeloding/e13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "eeeloding/e14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "eeeloding/e16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "eeeloding/e17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "eeeloding/e20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "eeeloding/e19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "eeeloding/e18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "eeeloding/e18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "eeeloding/e1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }] };var C$99t = e$t;function e$t() {
    return C$99i.call(this) || this;
  }var C$99i;C$99e.e$t = C$99t;
}(ui = ui || {}), function (C$99e) {
  __extends(e$t, C$99i = View), e$t.prototype.createChildren = function () {
    View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), View.regComponent("Text", laya.display.Text), C$99i.prototype.createChildren.call(this), this.createView(C$99e.e$l.uiView);
  }, e$t.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "eeelogin/e2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "eeelogin/e6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "eeelogin/e3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "eeelogin/e4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "eeelogin/e5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "eeelogin/e21b.png", centerX: 0 } }, { type: "Image", props: { y: 1102, var: "imgCheatTip", skin: "eeelogin/e27b.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 927, x: 159, var: "hotImage", skin: "eeelogin/e18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "eeelogin/e1b.png", centerX: 0, bottom: 30 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "eeelogin/e12b.png", name: "enterBtn", centerX: 0 } }, { type: "Image", props: { x: 196, visible: !1, var: "privacyToggle", skin: "eeelogin/e29b.png", bottom: 4 } }, { type: "Label", props: { y: 640, x: 0, width: 720, var: "txtTip", valign: "middle", text: "\u63d0\u793a\u5185\u5bb9", strokeColor: "#ffffff", stroke: 2, height: 32, fontSize: 32, color: "#ff0000", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }, { type: "HTMLDivElement", props: { y: 1255, x: 256, visible: !1, var: "privacyTip", height: 16 } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "eeelogin/e11b.png" } }, { type: "Image", props: { y: 257, x: 594, visible: !1, var: "privacyBtn", skin: "eeelogin/e13b.png", name: "privacyBtn" } }, { type: "Image", props: { left: 0, top: 0, visible: !1, var: "ageTipBtn", scaleY: .5, scaleX: .5, name: "privacyBtn" } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "eeelogin/e8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "eeelogin/e10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "mNoticeBg", skin: "eeelogin/e8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "eeelogin/e10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "eeelogin/e25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "privacyBg", skin: "eeelogin/e8b.png", name: "privacyBg", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "privacyClose", skin: "eeelogin/e10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "privacyClose2", stateNum: 1, skin: "eeelogin/e25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTabPrivacy", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "privacyTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "privacyPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "privacyContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "eeelogin/e9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "eeelogin/e17b.png" } }] }, { type: "Box", props: { width: 720, visible: !1, var: "jumpBg", mouseThrough: !1, height: 1280, centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { x: 33, width: 655, skin: "eeelogin/e8b.png", height: 994, centerY: 0, centerX: 0 } }, { type: "Button", props: { width: 274, var: "btnJump", stateNum: 1, skin: "eeelogin/e25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u8df3\u8f6c", height: 59, centerY: 436, centerX: 0 } }, { type: "Label", props: { width: 234, var: "jumpTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", fontSize: 30, color: "#ffffff", centerY: -408, centerX: 0, bold: !1, align: "center" } }, { type: "Panel", props: { x: 94, width: 545, var: "jumpPanel", height: 733, centerY: 10 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "jumpContent", height: 733 } }] }, { type: "Image", props: { x: 596, visible: !1, var: "closeBtn", skin: "eeelogin/e17b.png", name: "closeBtn", centerY: -402 } }] }] };var C$99t = e$t;function e$t() {
    return C$99i.call(this) || this;
  }var C$99i;C$99e.e$l = C$99t;
}(ui = ui || {}), function (C$99e) {
  function e$d() {
    return C$99t.call(this) || this;
  }var C$99t;C$99e = C$99e.e$k || (C$99e.e$k = {}), C$99t = ui.e$d, __extends(e$d, C$99t), e$d.prototype.initialize = function () {
    C$99t.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
  }, e$d.prototype.addEvt = function () {
    this.on(Laya.Event.CLICK, this, this.e$W);
  }, e$d.prototype.rmEvts = function () {
    this.off(Laya.Event.CLICK, this, this.e$W);
  }, e$d.prototype.onOpened = function () {
    this.e$i = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
  }, e$d.prototype.destroy = function (C$99e) {
    void 0 === C$99e && (C$99e = !0), this.rmEvts(), C$99t.prototype.destroy.call(this, C$99e);
  }, e$d.prototype.e$W = function () {
    1e4 < Date.now() - this.e$i && (this.e$i -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
  }, C$99e.AuthorizationPanel = e$d;
}(modules = modules || {}), function (C$99e) {
  var C$99t, C$99i, C$99o, C$99n;function e$o() {
    var C$99e = C$99s.call(this) || this;return C$99e.e$B = new C$99i(), C$99e.addChild(C$99e.e$B), C$99e.e$o = null, C$99e.e$I = [], C$99e.e$b = !1, C$99e.e$f = 0, C$99e.e$J = !0, C$99e.e$c = 6, C$99e.e$Y = !1, C$99e.on(C$99t.DISPLAY, C$99e, C$99e.e$w), C$99e.on(C$99t.UNDISPLAY, C$99e, C$99e.e$D), C$99e;
  }var C$99s;C$99e = C$99e.e$A || (C$99e.e$A = {}), C$99t = Laya.Event, C$99i = Laya.Image, C$99o = Laya.Component, C$99n = Laya.Loader, __extends(e$o, C$99s = C$99o), e$o.create = function (C$99e, C$99t, C$99i, C$99o, C$99s, C$99n, C$99a) {
    void 0 === C$99o && (C$99o = 0), void 0 === C$99s && (C$99s = 6), void 0 === C$99n && (C$99n = !0), void 0 === C$99a && (C$99a = !1);var C$99r = new e$o();return C$99r.skin(C$99t, C$99i, C$99o), C$99r.durFrm = C$99s, C$99r.loop = C$99n, C$99r.atHide = C$99a, C$99e && C$99e.addChild(C$99r), C$99r;
  }, e$o.play = function (C$99e) {
    C$99e && (C$99e.visible = !0, C$99e.play());
  }, e$o.stop = function (C$99e) {
    C$99e && (C$99e.visible = !1, C$99e.stop());
  }, e$o.prototype.destroy = function (C$99e) {
    Laya.timer.clear(this, this.e$z), this.off(C$99t.DISPLAY, this, this.e$w), this.off(C$99t.UNDISPLAY, this, this.e$D), C$99s.prototype.destroy.call(this, C$99e);
  }, e$o.prototype.e$w = function () {}, e$o.prototype.e$D = function () {}, e$o.prototype.skin = function (C$99e, C$99t, C$99i) {
    if (this.e$o != C$99e) {
      this.e$o = C$99e, this.e$I = [];for (var C$99o = 0, C$99s = C$99i; C$99s <= C$99t; C$99s++) this.e$I[C$99o++] = C$99e + "/" + C$99s + ".png";C$99i = C$99n.getRes(this.e$I[0]);C$99i && (this.width = C$99i.sourceWidth, this.height = C$99i.sourceHeight), this.e$z();
    }
  }, Object.defineProperty(e$o.prototype, "atHide", { get: function () {
      return this.e$Y;
    }, set: function (C$99e) {
      this.e$Y = C$99e;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(e$o.prototype, "durFrm", { set: function (C$99e) {
      this.e$c != C$99e && (this.e$c = C$99e, this.e$b && (Laya.timer.clear(this, this.e$z), Laya.timer.loop(this.e$c * (1e3 / 60), this, this.e$z)));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(e$o.prototype, "loop", { set: function (C$99e) {
      this.e$J = C$99e;
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
    this.e$I && 0 != this.e$I.length && (this.e$B.skin = this.e$I[this.e$f], this.e$b && (this.e$f++, this.e$f == this.e$I.length && (this.e$J ? this.e$f = 0 : (Laya.timer.clear(this, this.e$z), this.e$b = !1, this.e$Y && (this.visible = !1), this.event(C$99t.COMPLETE)))));
  }, C$99e.PanelEff = e$o;
}(modules = modules || {}), function (C$99e) {
  var C$99t, C$99i;function e$d(C$99e, C$99t) {
    void 0 === C$99e && (C$99e = 0);var C$99i = C$99o.call(this) || this;return C$99i.e$e = { bgImgSkin: "eeeloding/e3a.jpg", topImgSkin: "eeeloding/e10a.jpg", btmImgSkin: "eeeloding/e4a.jpg", leftImgSkin: "eeeloding/e6a.jpg", rightImgSkin: "eeeloding/e8a.jpg", loadingBarBgSkin: "eeeloding/e13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, C$99i.e$g = { bgImgSkin: "eeeloding/e12a.jpg", topImgSkin: "eeeloding/e11a.jpg", btmImgSkin: "eeeloding/e5a.jpg", leftImgSkin: "eeeloding/e7a.jpg", rightImgSkin: "eeeloding/e9a.jpg", loadingBarBgSkin: "eeeloding/e15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, C$99i.e$H = 0, C$99i.e$R(1 == C$99e ? C$99i.e$g : C$99i.e$e), C$99i.copyRightImg.skin = C$99t, C$99i;
  }var C$99o;C$99t = C$99e.e$k || (C$99e.e$k = {}), C$99i = C$99e.e$A.PanelEff, C$99o = ui.e$t, __extends(e$d, C$99o), e$d.prototype.initialize = function () {
    var C$99e;C$99o.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.e$G = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.e$G && (C$99e = this.e$G.loadingType, this.loadingTips.color = 1 != C$99e && (2 == C$99e || 101 == C$99e) ? "#000000" : "#f2ffb5"), this.e$q = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
  }, e$d.prototype.toAllProgress = function (C$99e) {
    var C$99t = this;if (-1 === C$99e) return C$99t.e$H = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);var C$99i;-2 !== C$99e ? (C$99t.e$H < .9 ? C$99t.e$H += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : C$99t.e$H < 1 && (C$99t.e$H += 1e-4), .9999 < C$99t.e$H && (C$99t.e$H = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
      .9 < C$99t.e$H && toAllProgress(-1);
    })), C$99i = 590 * (C$99e = C$99t.e$H), C$99t.e$H = C$99t.e$H > C$99e ? C$99t.e$H : C$99e, C$99t.loadingBar.width = C$99i, C$99i = C$99t.loadingBar.x + C$99i, C$99t.loadingImg2.x = C$99i - 15, 364 <= C$99i ? (C$99t.loadingImg1.visible = !0, C$99t.loadingImg1.x = C$99i - 202) : C$99t.loadingImg1.visible = !1, C$99t.percentageTips.text = (100 * C$99e >> 0) + "%", C$99t.e$H < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress)) : Laya.timer.clear(this, this.toAllProgress);
  }, e$d.prototype.toProgress = function (C$99e, C$99t, C$99i) {
    var C$99o = 590 * (C$99e = 1 < C$99e ? 1 : C$99e);this.e$H = this.e$H > C$99e ? this.e$H : C$99e, this.loadingBar.width = C$99o;C$99o = this.loadingBar.x + C$99o;this.loadingImg2.x = C$99o - 15, 364 <= C$99o ? (this.loadingImg1.visible = !0, this.loadingImg1.x = C$99o - 202) : this.loadingImg1.visible = !1, this.percentageTips.text = (100 * C$99e >> 0) + "%", this.loadingTips.text = C$99t;for (var C$99s = C$99i - 1, C$99n = 0; C$99n < this.e$q.length; C$99n++) this.e$q[C$99n].skin = C$99n < C$99s ? "eeeloding/e20a.png" : C$99s === C$99n ? "eeeloding/e19a.png" : "eeeloding/e18a.png";
  }, e$d.prototype.onOpened = function () {
    this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.e$G.lastVersion + "      \u7248\u672c\uff1a" + this.e$G.wxVersion, this.showGetBtn();
  }, e$d.prototype.close = function (C$99e) {
    this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.e$L), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.e$$);
  }, e$d.prototype.resetWinFun = function () {
    Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
  }, e$d.prototype.destroy = function (C$99e) {
    void 0 === C$99e && (C$99e = !0), this.resetWinFun(), C$99o.prototype.destroy.call(this, C$99e);
  }, e$d.prototype.showGetBtn = function () {
    this.e$G.showGetBtn && 1 == this.e$G.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "eeeloding/e1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.e$$), this.e$p(), this.e$M(!0));
  }, e$d.prototype.e$$ = function () {
    this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "eeeloding/e2a.png", this.e$T(), this.e$M(!1));
  }, e$d.prototype.e$R = function (C$99e) {
    this.bgImg.skin = C$99e.bgImgSkin, this.topImg.skin = C$99e.topImgSkin, this.btmImg.skin = C$99e.btmImgSkin, this.leftImg.skin = C$99e.leftImgSkin, this.rightImg.skin = C$99e.rightImgSkin, this.copyRightImg.bottom = C$99e.copyRightImgBottom, this.processBox1.y = C$99e.processBox1Y, this.processBox2.y = C$99e.processBox2Y, this.loadingBarBg.skin = C$99e.loadingBarBgSkin, this.loadingTips.fontSize = C$99e.loadingTipsSize, this.getTipsBtn.visible = this.e$G.showGetBtn && 1 == this.e$G.showGetBtn, this.getTipsBtn.visible ? this.e$p() : this.e$T(), this.e$M(this.getTipsBtn.visible);
  }, e$d.prototype.e$p = function () {
    this.e$r || (this.e$r = C$99i.create(this.getTipsBtn, "eewxeff", 4, 0, 12), this.e$r.pos(161, 106), this.e$r.scale(1.14, 1.15)), C$99i.play(this.e$r);
  }, e$d.prototype.e$T = function () {
    this.e$r && C$99i.stop(this.e$r);
  }, e$d.prototype.e$M = function (C$99e) {
    Laya.timer.clear(this, this.e$L), C$99e ? (this.e$S = 9, this.txtGetTm.visible = !0, this.e$L(), Laya.timer.loop(1e3, this, this.e$L)) : this.txtGetTm.visible = !1;
  }, e$d.prototype.e$L = function () {
    0 < this.e$S ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.e$S + "s)", this.e$S--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.e$L), this.e$$());
  }, C$99t.LoadingPanel = e$d;
}(modules = modules || {}), function (C$99e) {
  var C$99t, C$99i, C$99o;function e$d(C$99e) {
    void 0 === C$99e && (C$99e = "eeelogin/e1b.png");var C$99t = C$99s.call(this) || this;return C$99t.e$j = 0, C$99t.e$C = "multi_notice_key", C$99t.e$K = 0, C$99t.e$x = 0, C$99t.e$n = "privacy_key", C$99t.e$Q = !0, C$99t.e$y = 0, C$99t.copyRightImg.skin = C$99e, C$99t;
  }var C$99s;C$99t = C$99e.e$k || (C$99e.e$k = {}), C$99i = Laya.List, C$99o = Laya.Event, C$99s = ui.e$l, __extends(e$d, C$99s), e$d.prototype.initialize = function () {
    C$99s.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.copyRightImg.skin = "", ServerLoading.instance.preloadServer(), this.e$G = Browser.window.PF_INFO, this.e$V = new C$99i(), this.e$V.vScrollBarSkin = "", this.e$V.itemRender = C$99t.SelectLeftListItem, this.e$V.top = 5, this.e$V.repeatX = 1, this.e$V.spaceY = 5, this.e$V.width = this.leftListBox.width, this.e$V.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.e$V), this.e$Z = new C$99i(), this.e$Z.vScrollBarSkin = "", this.e$Z.itemRender = C$99t.SelectRightListItem, this.e$Z.top = 5, this.e$Z.repeatX = 1, this.e$Z.spaceY = 5, this.e$Z.width = this.rightListBox.width, this.e$Z.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.e$Z), this.e$U = new C$99i(), this.e$U.hScrollBarSkin = "", this.e$U.itemRender = C$99t.NoticeItem, this.e$U.repeatY = 1, this.e$U.width = this.boxTab.width, this.e$U.height = this.boxTab.height, this.boxTab.addChild(this.e$U), this.e$E = new C$99i(), this.e$E.hScrollBarSkin = "", this.e$E.itemRender = C$99t.PrivacyItem, this.e$E.repeatY = 1, this.e$E.width = this.boxTab.width, this.e$E.height = this.boxTab.height, this.boxTabPrivacy.addChild(this.e$E);var C$99e = this.e$G.loadingType;this.e$N = 1 == C$99e || 2 == C$99e || 3 == C$99e || 101 == C$99e ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.e$u = [], this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.privacyContent.color = "#212942", this.privacyContent.style.fontSize = 26, this.privacyContent.style.lineHeight = 28, this.privacyContent.mouseEnabled = !1, this.privacyTip.color = "#ffffff", this.privacyTip.style.fontSize = 18, this.privacyTip.style.lineHeight = 18, this.privacyTip.style.stroke = 2, this.privacyTip.style.strokeColor = "#000000", this.privacyTip.style.wordWrap = !1, this.jumpContent.color = "#212942", this.jumpContent.style.fontSize = 26, this.jumpContent.style.lineHeight = 28, this.jumpContent.mouseEnabled = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
  }, e$d.prototype.destroy = function (C$99e) {
    void 0 === C$99e && (C$99e = !0), this.rmEvts(), this.e$h(), this.e$s(), this.e$P(), this.e$X(), this.ageTipsContent = null, this.e$V && (this.e$V.removeSelf(), this.e$V.destroy(), this.e$V = null), this.e$Z && (this.e$Z.removeSelf(), this.e$Z.destroy(), this.e$Z = null), this.e$U && (this.e$U.removeSelf(), this.e$U.destroy(), this.e$U = null), this.e$E && (this.e$E.removeSelf(), this.e$E.destroy(), this.e$E = null), Laya.timer.clear(this, this.e$m), C$99s.prototype.destroy.call(this, C$99e);
  }, e$d.prototype.addEvt = function () {
    this.bgImg.on(Laya.Event.CLICK, this, this.e$O), this.enterBtn.on(Laya.Event.CLICK, this, this.e$F), this.selectServer.on(Laya.Event.CLICK, this, this.e$a), this.selectServer.on(Laya.Event.CLICK, this, this.e$a), this.closeBg.on(Laya.Event.CLICK, this, this.e$_), this.closeBtn.on(Laya.Event.CLICK, this, this.e$v), this.noticeBtn.on(Laya.Event.CLICK, this, this.e$dd), this.noticeClose.on(Laya.Event.CLICK, this, this.e$td), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.e$ld), this.mNoticeClose.on(Laya.Event.CLICK, this, this.e$kd), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.e$kd), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.e$Wd), this.privacyBtn.on(Laya.Event.CLICK, this, this.e$id), this.ageTipBtn.on(Laya.Event.CLICK, this, this.e$Ad), this.privacyClose.on(Laya.Event.CLICK, this, this.e$Bd), this.privacyClose2.on(Laya.Event.CLICK, this, this.e$Bd), this.privacyPanel.on(Laya.Event.MOUSE_DOWN, this, this.e$od), this.privacyToggle.on(Laya.Event.CLICK, this, this.e$Id), this.privacyTip.on(Laya.Event.LINK, this, this.e$bd), this.btnJump.on(Laya.Event.CLICK, this, this.e$fd), this.jumpPanel.on(Laya.Event.MOUSE_DOWN, this, this.e$Jd), this.e$U.selectEnable = !0, this.e$U.selectHandler = Laya.Handler.create(this, this.e$cd, null, !1), this.e$E.selectEnable = !0, this.e$E.selectHandler = Laya.Handler.create(this, this.e$Yd, null, !1);
  }, e$d.prototype.rmEvts = function () {
    this.bgImg.off(Laya.Event.CLICK, this, this.e$O), this.enterBtn.off(Laya.Event.CLICK, this, this.e$F), this.selectServer.off(Laya.Event.CLICK, this, this.e$a), this.selectServer.off(Laya.Event.CLICK, this, this.e$a), this.closeBg.off(Laya.Event.CLICK, this, this.e$_), this.noticeBtn.off(Laya.Event.CLICK, this, this.e$dd), this.closeBtn.off(Laya.Event.CLICK, this, this.e$v), this.noticeClose.off(Laya.Event.CLICK, this, this.e$td), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.e$ld), this.mNoticeClose.off(Laya.Event.CLICK, this, this.e$kd), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.e$kd), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.e$Wd), this.privacyBtn.off(Laya.Event.CLICK, this, this.e$id), this.ageTipBtn.off(Laya.Event.CLICK, this, this.e$Ad), this.privacyClose.off(Laya.Event.CLICK, this, this.e$Bd), this.privacyClose2.off(Laya.Event.CLICK, this, this.e$Bd), this.privacyPanel.off(Laya.Event.MOUSE_DOWN, this, this.e$od), this.privacyToggle.off(Laya.Event.CLICK, this, this.e$Id), this.privacyTip.off(Laya.Event.LINK, this, this.e$bd), this.btnJump.off(Laya.Event.CLICK, this, this.e$fd), this.jumpPanel.off(Laya.Event.MOUSE_DOWN, this, this.e$Jd), this.e$U.selectEnable = !1, this.e$U.selectHandler = null, this.e$E.selectEnable = !1, this.e$E.selectHandler = null;
  }, e$d.prototype.onOpened = function () {
    var C$99o = this;this.e$i = Date.now(), this.e$Q = !0, this.e$wd = this.e$G.selectedServer.server_id, this.e$Dd(this.e$G.selectedServer), this.e$V.dataSource = this.e$G.groupList, this.e$a(), req_multi_server_notice(4, this.e$G.pkgName, this.e$G.selectedServer.server_id, this.e$zd.bind(this)), Laya.timer.frameOnce(1, this, function () {
      C$99o.e$ed = C$99o.e$G.privacy_data && C$99o.e$G.privacy_data.list ? C$99o.e$G.privacy_data.list : [], C$99o.e$gd = null != C$99o.e$G.privacy_login_pkg ? C$99o.e$G.privacy_login_pkg : 0;var C$99e = "1" == localStorage.getItem(C$99o.e$n),
          C$99t = 0 != PF_INFO.privacy_save_pkg,
          C$99i = 0 == C$99o.e$gd || 1 == C$99o.e$gd;C$99o.e$Hd = C$99t && C$99e || C$99i, C$99o.e$Rd();
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
  }, e$d.prototype.e$bd = function (C$99e) {
    this.e$$d(Number(C$99e));
  }, e$d.prototype.e$fd = function () {
    Browser.window.forceJumpMiniGame ? Browser.window.forceJumpMiniGame() : this.e$v();
  }, e$d.prototype.e$ld = function () {
    this.e$j = this.noticeContent.mouseY, Laya.stage.on(C$99o.MOUSE_MOVE, this, this.e$pd), Laya.stage.on(C$99o.MOUSE_UP, this, this.e$h), Laya.stage.on(C$99o.MOUSE_OUT, this, this.e$h);
  }, e$d.prototype.e$pd = function () {
    var C$99e;this.noticeContent && (C$99e = this.e$j - this.noticeContent.mouseY, this.noticeContent.scrollY += C$99e, this.e$j = this.noticeContent.mouseY);
  }, e$d.prototype.e$h = function () {
    Laya.stage.off(C$99o.MOUSE_MOVE, this, this.e$pd), Laya.stage.off(C$99o.MOUSE_UP, this, this.e$h), Laya.stage.off(C$99o.MOUSE_OUT, this, this.e$h);
  }, e$d.prototype.e$Wd = function () {
    this.e$K = this.mNoticePanel.mouseY, Laya.stage.on(C$99o.MOUSE_MOVE, this, this.e$Md), Laya.stage.on(C$99o.MOUSE_UP, this, this.e$s), Laya.stage.on(C$99o.MOUSE_OUT, this, this.e$s);
  }, e$d.prototype.e$Md = function () {
    var C$99e;this.mNoticeContent && (C$99e = this.e$K - this.mNoticePanel.mouseY, this.mNoticeContent.y -= C$99e, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.e$K = this.mNoticePanel.mouseY);
  }, e$d.prototype.e$s = function () {
    Laya.stage.off(C$99o.MOUSE_MOVE, this, this.e$Md), Laya.stage.off(C$99o.MOUSE_UP, this, this.e$s), Laya.stage.off(C$99o.MOUSE_OUT, this, this.e$s);
  }, e$d.prototype.e$od = function () {
    this.e$x = this.privacyPanel.mouseY, Laya.stage.on(C$99o.MOUSE_MOVE, this, this.e$Td), Laya.stage.on(C$99o.MOUSE_UP, this, this.e$P), Laya.stage.on(C$99o.MOUSE_OUT, this, this.e$P);
  }, e$d.prototype.e$Td = function () {
    var C$99e;this.privacyContent && (C$99e = this.e$x - this.privacyPanel.mouseY, this.privacyContent.y -= C$99e, this.privacyPanel.height < this.privacyContent.contextHeight ? this.privacyContent.y < this.privacyPanel.height - this.privacyContent.contextHeight ? this.privacyContent.y = this.privacyPanel.height - this.privacyContent.contextHeight : 0 < this.privacyContent.y && (this.privacyContent.y = 0) : this.privacyContent.y = 0, this.e$x = this.privacyPanel.mouseY);
  }, e$d.prototype.e$P = function () {
    Laya.stage.off(C$99o.MOUSE_MOVE, this, this.e$Td), Laya.stage.off(C$99o.MOUSE_UP, this, this.e$P), Laya.stage.off(C$99o.MOUSE_OUT, this, this.e$P);
  }, e$d.prototype.e$Jd = function () {
    this.e$y = this.jumpPanel.mouseY, Laya.stage.on(C$99o.MOUSE_MOVE, this, this.e$rd), Laya.stage.on(C$99o.MOUSE_UP, this, this.e$X), Laya.stage.on(C$99o.MOUSE_OUT, this, this.e$X);
  }, e$d.prototype.e$rd = function () {
    var C$99e;this.jumpContent && (C$99e = this.e$y - this.jumpPanel.mouseY, this.jumpContent.y -= C$99e, this.jumpPanel.height < this.jumpContent.contextHeight ? this.jumpContent.y < this.jumpPanel.height - this.jumpContent.contextHeight ? this.jumpContent.y = this.jumpPanel.height - this.jumpContent.contextHeight : 0 < this.jumpContent.y && (this.jumpContent.y = 0) : this.jumpContent.y = 0, this.e$y = this.jumpPanel.mouseY);
  }, e$d.prototype.e$X = function () {
    Laya.stage.off(C$99o.MOUSE_MOVE, this, this.e$rd), Laya.stage.off(C$99o.MOUSE_UP, this, this.e$X), Laya.stage.off(C$99o.MOUSE_OUT, this, this.e$X);
  }, e$d.prototype.e$cd = function () {
    if (this.e$U.dataSource) {
      for (var C$99e, C$99t = 0; C$99t < this.e$U.dataSource.length; C$99t++) {
        var C$99i = this.e$U.dataSource[C$99t];C$99i[1] = C$99t == this.e$U.selectedIndex, C$99t == this.e$U.selectedIndex && (C$99e = C$99i[0]);
      }this.mNoticeTitle.text = C$99e && C$99e.title ? C$99e.title : "", this.mNoticeContent.innerHTML = C$99e && C$99e.content ? C$99e.content : "", this.mNoticeContent.y = 0;
    }
  }, e$d.prototype.e$Yd = function () {
    var C$99e = this.e$E.dataSource;if (C$99e) {
      for (var C$99t = 0; C$99t < C$99e.length; C$99t++) C$99e[C$99t][1] = C$99t == this.e$E.selectedIndex;var C$99i = this.e$ed[this.e$E.selectedIndex];C$99i && C$99i.content && (C$99i.content = C$99i.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "")), this.privacyTitle.text = C$99i && C$99i.title ? C$99i.title : "\u6807\u9898", this.privacyContent.innerHTML = C$99i && C$99i.content ? C$99i.content : "\u52a0\u8f7d\u4e2d...", this.privacyContent.y = 0;
    }
  }, e$d.prototype.e$Dd = function (C$99e) {
    var C$99t = C$99e.server_name;this.serverName.text = C$99t + this.e$Sd(C$99e), this.serverName.color = -1 === C$99e.status ? "#d50000" : 0 === C$99e.status ? "#49575a" : this.e$N, this.hotImage.skin = this.e$jd(C$99e), this.e$G.cdn = C$99e.cdn || "", this.e$G.selectedServer = C$99e, this.noticeBtn.visible = !0;
  }, e$d.prototype.e$Cd = function (C$99e) {
    this.showGroupList(C$99e);
  }, e$d.prototype.e$Kd = function (C$99e) {
    this.e$Dd(C$99e), this.listBg.visible = !1;
  }, e$d.prototype.showGroupList = function (C$99e) {
    if (void 0 === C$99e && (C$99e = 0), this.parent) {
      var C$99t = this.e$G.groupList;if (C$99t && 0 !== C$99t.length) {
        for (var C$99i = C$99t.length, C$99o = 0; C$99o < C$99i; C$99o++) C$99t[C$99o].callBack = this.e$Cd.bind(this), C$99t[C$99o].select = C$99o == C$99e, C$99t[C$99o].index = C$99o;var C$99s = (this.e$V.array = C$99t)[C$99e].id;this.e$G.serverList[C$99s] ? this.showServerList(C$99s) : this.e$G.hasServerReq || (this.e$G.hasServerReq = !0, -1 == C$99s ? req_server_owner(0) : -2 == C$99s ? req_recommend_server_list(0) : req_server_list(0, C$99s));
      }
    }
  }, e$d.prototype.showServerList = function (C$99e) {
    if (this.parent && this.e$G.serverList[C$99e]) {
      for (var C$99t = this.e$G.serverList[C$99e], C$99i = C$99t.length, C$99o = 0; C$99o < C$99i; C$99o++) C$99t[C$99o].callBack = this.e$Kd.bind(this);this.e$Z.array = C$99t;
    }
  }, e$d.prototype.e$qd = function (C$99e) {
    return -1 == C$99e.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != C$99e.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
  }, e$d.prototype.e$jd = function (C$99e) {
    var C$99t = C$99e.status,
        C$99e = C$99e.is_recommend,
        C$99i = "eeelogin/e19b.png";return 1 !== C$99t && 2 !== C$99t || 1 !== C$99e && 3 !== C$99e ? 1 !== C$99t && 2 !== C$99t || 2 !== C$99e ? -1 !== C$99t && 0 !== C$99t || (C$99i = "eeelogin/e20b.png") : C$99i = "eeelogin/e19b.png" : C$99i = "eeelogin/e18b.png", C$99i;
  }, e$d.prototype.e$Sd = function (C$99e) {
    var C$99t = C$99e.status,
        C$99i = "";return 1 == C$99e.is_recommend || 3 == C$99e.is_recommend ? C$99i = "(\u63a8\u8350)" : -1 === C$99t ? C$99i = "(\u7ef4\u62a4\u4e2d)" : 0 === C$99t && (C$99i = "(\u5f85\u5f00\u670d)"), C$99i;
  }, e$d.prototype.e$zd = function (C$99e) {
    console.log("onMultiNoticeCallback, param = ", C$99e);var C$99t = Date.now() / 1e3,
        C$99i = localStorage.getItem(this.e$C),
        C$99o = !(this.e$u = []);if ("success" == C$99e.state) for (var C$99s in C$99e.data) {
      C$99s = C$99e.data[C$99s];var C$99n, C$99a, C$99r;C$99s && (C$99n = C$99t < C$99s.end_time, C$99a = 1 == C$99s.pop_type, C$99r = 2 == C$99s.pop_type && C$99s.key + "" != C$99i, !C$99o && C$99n && (C$99a || C$99r) && (C$99o = !0), C$99n && this.e$u.push(C$99s), C$99r && localStorage.setItem(this.e$C, C$99s.key + ""));
    }this.e$u.sort(function (C$99e, C$99t) {
      return C$99e.login_id - C$99t.login_id;
    }), console.log("onMultiNoticeCallback, datas = ", this.e$u), C$99o && this.e$Ld();
  }, e$d.prototype.e$Ld = function () {
    if (this.e$U) {
      if (this.e$u) {
        this.e$U.x = 2 < this.e$u.length ? 0 : (this.boxTab.width - 274 * this.e$u.length) / 2;for (var C$99e = [], C$99t = 0; C$99t < this.e$u.length; C$99t++) {
          var C$99i = this.e$u[C$99t];C$99e.push([C$99i, C$99t == this.e$U.selectedIndex]);
        }0 < (this.e$U.dataSource = C$99e).length ? (this.e$U.selectedIndex = 0, this.e$U.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.e$u.length <= 1, this.boxTab.visible = 1 < this.e$u.length;
      }this.mNoticeBg.visible = !0;
    }
  }, e$d.prototype.e$xd = function (C$99e) {
    if (!this.destroyed) {
      if (console.log("p_onPrivacyCallback, param = ", C$99e), "success" == C$99e.state) for (var C$99t in C$99e.data) {
        var C$99t = Number(C$99t),
            C$99i = C$99e.data[C$99t];this.e$ed && this.e$ed[C$99t] && (this.e$ed[C$99t].content = C$99i.content);
      }this.e$Yd();
    }
  }, e$d.prototype.e$Rd = function () {
    for (var C$99e = "", C$99t = 0; C$99t < this.e$ed.length; C$99t++) C$99e += '<a href="' + C$99t + '" style="color:#14ff28;text-decoration:none">' + this.e$ed[C$99t].title + "</a>", C$99t < this.e$ed.length - 1 && (C$99e += "\u3001");this.privacyTip.innerHTML = "\u6211\u5df2\u7ecf\u8be6\u7ec6\u9605\u8bfb\u5e76\u540c\u610f" + C$99e, this.privacyToggle.skin = "eeelogin/" + (this.e$Hd ? "e29b.png" : "e28b.png"), this.privacyTip.x = (720 - this.privacyTip.width) / 2, this.privacyToggle.x = this.privacyTip.x - 30, this.privacyBtn.visible = 0 < this.e$ed.length, this.privacyToggle.visible = this.privacyTip.visible = 0 < this.e$ed.length && 0 != this.e$gd;
  }, e$d.prototype.e$$d = function (C$99e) {
    if (void 0 === C$99e && (C$99e = 0), this.e$E) {
      if (this.e$ed) {
        this.e$E.x = 2 < this.e$ed.length ? 0 : (this.boxTab.width - 274 * this.e$ed.length) / 2;for (var C$99t = [], C$99i = 0; C$99i < this.e$ed.length; C$99i++) {
          var C$99o = this.e$ed[C$99i],
              C$99o = C$99o && C$99o.title ? C$99o.title : "",
              C$99s = C$99i == this.e$E.selectedIndex;C$99t.push([C$99o, C$99s]);
        }0 < (this.e$E.dataSource = C$99t).length ? ((C$99e = C$99e < 0 ? 0 : C$99e) > C$99t.length - 1 && (C$99e = 0), this.e$E.selectedIndex = C$99e, this.e$E.scrollTo(C$99e)) : (this.privacyTitle.text = "\u7a7a", this.privacyContent.text = ""), this.privacyClose2.visible = this.e$ed.length <= 1, this.boxTabPrivacy.visible = 1 < this.e$ed.length;
      }this.e$Q && (this.e$Q = !1, req_privacy(this.e$G.pkgName, this.e$xd.bind(this))), this.privacyBg.visible = !0;
    }
  }, e$d.prototype.openJumpView = function (C$99e, C$99t, C$99i, C$99o) {
    void 0 === C$99o && (C$99o = !1), this.jumpTitle.text = C$99e || "\u6682\u65e0\u516c\u544a", this.jumpContent.innerHTML = C$99t || "", this.btnJump.label = C$99i || "\u786e\u5b9a", this.jumpContent.y = 0, this.jumpBg.visible = !0, this.closeBtn.visible = C$99o;
  }, e$d.prototype.showAgeTipsBtn = function (C$99e, C$99t, C$99i, C$99o, C$99s) {
    (this.ageTipBtn.visible = C$99e) && (this.ageTipBtn.skin = C$99t || "eeelogin/e11b.png"), this.ageTipsContent = C$99i, this.ageTipBtn.x = C$99o || 0, this.ageTipBtn.y = C$99s || 0;
  }, e$d.prototype.e$Ad = function () {
    this.openJumpView("\u9002\u9f84\u516c\u544a", this.ageTipsContent, "\u786e\u8ba4", !0);
  }, e$d.prototype.e$Gd = function (C$99e) {
    this.txtTip.text = C$99e, this.txtTip.y = 640, this.txtTip.visible = !0, this.e$nd = 1, Laya.timer.clear(this, this.e$m), this.e$m(), Laya.timer.frameLoop(1, this, this.e$m);
  }, e$d.prototype.e$m = function () {
    this.txtTip.y -= this.e$nd, this.e$nd *= 1.1, this.txtTip.y <= 590 && (this.txtTip.visible = !1, Laya.timer.clear(this, this.e$m));
  }, C$99t.SelectServerPanel = e$d;
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
  function e$o(C$99e) {
    this.m_loadingRes = ["eeeloding/e13a.png", "eeeloding/e15a.png", "eeeloding/e14a.png", "eeeloding/e16a.png", "eeeloding/e17a.png", "eeeloding/e18a.png", "eeeloding/e19a.png", "eeeloding/e20a.png", "eewxeff/e1c.png", "eewxeff/e2c.png", "eewxeff/e3c.png", "eewxeff/e4c.png", "eewxeff/e5c.png", "eeeloding/e3a.jpg", "eeeloding/e12a.jpg", "eeeloding/e1a.png", "eeeloding/e2a.png", "eeeloding/e4a.jpg", "eeeloding/e6a.jpg", "eeeloding/e8a.jpg", "eeeloding/e10a.jpg", "eeeloding/e5a.jpg", "eeeloding/e7a.jpg", "eeeloding/e9a.jpg", "eeeloding/e11a.jpg"], this.m_serverRes = ["eeelogin/e10b.png", "eeelogin/e11b.png", "eeelogin/e12b.png", "eeelogin/e13b.png", "eeelogin/e14b.png", "eeelogin/e15b.png", "eeelogin/e16b.png", "eeelogin/e17b.png", "eeelogin/e18b.png", "eeelogin/e19b.png", "eeelogin/e20b.png", "eeelogin/e21b.png", "eeelogin/e2b.jpg", "eeelogin/e3b.jpg", "eeelogin/e4b.jpg", "eeelogin/e5b.jpg", "eeelogin/e6b.jpg", "eeelogin/e1b.png", "eeelogin/e8b.png", "eeelogin/e9b.png", "eeelogin/e24b.png", "eeelogin/e25b.png", "eeelogin/e27b.png", "eeelogin/e29b.png", "eeelogin/e28b.png", "eeelogin/e123b.png", "eeelogin/e199b.png"], this.copyRightUrl = "eeelogin/e1b.png", this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.e$Qd = !1, this.e$yd = "", e$o.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var C$99t = Laya.AtlasResourceManager;C$99t.maxTextureCount = 6, C$99t.atlasTextureWidth = C$99t.atlasTextureHeight = 1024, C$99t._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.e$Vd.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } }, "e28b.png": { frame: { h: 25, idx: 0, w: 25, x: 444, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 2 } }, "e29b.png": { frame: { h: 27, idx: 0, w: 26, x: 470, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = e$o.instance.requestWeb, Browser.window.imgMgrLoad = e$o.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.e$Vd();
  }return e$o.prototype.changeServerLoading = function (C$99e) {
    e$o.instance.m_layer.visible = C$99e;
  }, e$o.prototype.openAuthor = function () {
    e$o.instance.m_author || (e$o.instance.m_author = new AuthorizationPanel()), e$o.instance.m_author.parent || e$o.instance.m_layer.addChild(e$o.instance.m_author), e$o.instance.e$Zd();
  }, e$o.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, e$o.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, e$o.prototype.e$Ud = function () {
    e$o.instance.m_server || (e$o.instance.m_server = new SelectServerPanel(this.copyRightUrl)), e$o.instance.m_server.parent || e$o.instance.m_layer.addChild(e$o.instance.m_server), e$o.instance.e$Zd();
  }, e$o.prototype.openJumpView = function (C$99e, C$99t, C$99i, C$99o) {
    void 0 === C$99o && (C$99o = !1), this.e$Ud(), e$o.instance.m_server.openJumpView(C$99e, C$99t, C$99i, C$99o);
  }, e$o.prototype.openJumpTipsBtn = function (C$99e, C$99t, C$99i, C$99o, C$99s) {
    this.e$Ud(), e$o.instance.m_server.showAgeTipsBtn(C$99e, C$99t, C$99i, C$99o, C$99s);
  }, e$o.prototype.getCertificatePng = function () {
    window.sdkInitRes = window.sdkInitRes || {};return 1 == sdkInitRes.develop ? 0 == (PF_INFO.develop_certificate_pkg || 0) ? "eeelogin/e123b.png" : "eeelogin/e1b.png" : 0 == PF_INFO.release_certificate_pkg ? "eeelogin/e123b.png" : "eeelogin/e1b.png";
  }, e$o.prototype.openServer = function (C$99e, C$99t, C$99i) {
    var C$99o = this;this.copyRightUrl = C$99i || this.getCertificatePng();for (var C$99i = function () {
      C$99o.e$Ud(), C$99e && C$99t && C$99e.call(C$99t);
    }, C$99s = !0, C$99n = 0, C$99a = this.m_serverRes; C$99n < C$99a.length; C$99n++) {
      var C$99r = C$99a[C$99n];if (null == Laya.Loader.getRes(C$99r)) {
        C$99s = !1;break;
      }
    }C$99s ? C$99i() : Laya.loader.load(this.m_serverRes, Handler.create(this, C$99i));
  }, e$o.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, e$o.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, e$o.prototype.openLoading = function (C$99e, C$99t) {
    void 0 === C$99e && (C$99e = 0), C$99t = C$99t || this.getCertificatePng(), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      e$o.instance.m_loading || (e$o.instance.m_loading = new LoadingPanel(C$99e, C$99t)), e$o.instance.m_loading.parent || e$o.instance.m_layer.addChild(e$o.instance.m_loading), e$o.instance.e$Zd();
    }));
  }, e$o.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var C$99e = 0, C$99t = this.m_serverRes; C$99e < C$99t.length; C$99e++) {
      var C$99i = C$99t[C$99e];Laya.Loader.clearCache(e$o.instance, C$99i), Laya.Loader.clearRes(C$99i, !0);
    }for (var C$99o = 0, C$99s = this.m_loadingRes; C$99o < C$99s.length; C$99o++) C$99i = C$99s[C$99o], Laya.Loader.clearCache(e$o.instance, C$99i), Laya.Loader.clearRes(C$99i, !0);this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, e$o.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && e$o.instance.m_loading.showGetBtn();
  }, e$o.prototype.enterDefaultServer = function () {
    var C$99e = Browser.window.PF_INFO.selectedServer;this.e$Qd || -1 == C$99e.status || 0 == C$99e.status || (this.e$Qd = !0, Browser.window.PF_INFO.selectedServer = C$99e, req_server_check_ban(0, C$99e.server_id));
  }, e$o.prototype.sendRecord = function () {
    var C$99e = "";C$99e = (C$99e = (C$99e = (C$99e = (C$99e = (C$99e = (C$99e = (C$99e += "newRegister=" + Browser.window.PF_INFO.newRegister) + ", isPrelodServer=" + this.m_isPrelodServer) + ", SelectServerPanel=" + (null != e$o.instance.m_server)) + ", isPrelodLoading=" + this.m_isPrelodLoading) + ", LoadingPanel=" + (null != e$o.instance.m_loading)) + ", resMgrLoad=" + (Browser.window.resMgrLoad == e$o.instance.requestWeb)) + ", imgMgrLoad=" + (Browser.window.imgMgrLoad == e$o.instance.requestWeb)) + ", errUrls=" + e$o.instance.e$yd;for (var C$99t = 0, C$99i = this.m_serverRes; C$99t < C$99i.length; C$99t++) C$99e += ", " + (C$99n = C$99i[C$99t]) + "=" + (null != Laya.Loader.getRes(C$99n));for (var C$99o = 0, C$99s = this.m_loadingRes; C$99o < C$99s.length; C$99o++) {
      var C$99n;C$99e += ", " + (C$99n = C$99s[C$99o]) + "=" + (null != Laya.Loader.getRes(C$99n));
    }var C$99a = Browser.window.PF_INFO.selectedServer;C$99a && (C$99e = (C$99e = (C$99e += ", server_status=" + C$99a.status) + (", server_id=" + C$99a.server_id)) + (", server_name=" + C$99a.server_name));C$99a = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: C$99e });console.error(C$99a), this.e$Ed && this.e$Ed == C$99e || (this.e$Ed = C$99e, reqRecordError(C$99a));
  }, e$o.prototype.e$Nd = function () {
    var C$99e = Laya.stage,
        C$99t = Math.floor(C$99e.width),
        C$99i = Math.floor(C$99e.height);C$99i / C$99t < 1.7777778 ? (this.viewW = Math.floor(C$99t / (C$99i / 1280)), this.viewH = 1280, this.viewS = C$99i / 1280) : (this.viewW = 720, this.viewH = Math.floor(C$99i / (C$99t / 720)), this.viewS = C$99t / 720);C$99i = Math.floor(C$99e.width), C$99t = Math.floor(C$99e.height);C$99t / C$99i < 1.7777778 ? (this.viewW = Math.floor(C$99i / (C$99t / 1280)), this.viewH = 1280, this.viewS = C$99t / 1280) : (this.viewW = 720, this.viewH = Math.floor(C$99t / (C$99i / 720)), this.viewS = C$99i / 720), this.e$Zd();
  }, e$o.prototype.e$Zd = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, e$o.prototype.e$Vd = function () {
    if (Input.isInputting && Browser.onMobile) return C$99i = parseInt(Input.inputContainer.style.top.replace("px", "")), C$99e = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS, C$99t = Browser.clientWidth / Render.canvas.width, 0 < (C$99i = Browser.clientHeight - C$99e * C$99t - C$99i) && (C$99i = 0), void (Browser.container.style.top = C$99i + "px");var C$99e, C$99t;Browser.container.style.top = "0px", C$99e = Math.floor(Browser.width) + 1 & 2147483646, C$99t = Math.floor(Browser.height) + 1 & 2147483646;var C$99i = Laya.stage;3 == ENV || C$99t < C$99e ? (C$99i.scaleMode = Laya.Stage.SCALE_NOSCALE, C$99i.width = C$99e, C$99i.height = C$99t) : (C$99i.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, C$99i.width = 840, C$99i.height = Math.floor(C$99t / (C$99e / 840)) + 1 & 2147483646), this.e$Nd();
  }, e$o.prototype.requestWeb = function (C$99e, C$99t) {
    function e$l() {
      C$99i.onload = null, C$99i.onerror = null;
    }var C$99i,
        C$99o = C$99e;(C$99i = new Browser.window.Image()).onload = function () {
      e$l(), C$99t(C$99o, 200, C$99i);
    }, C$99i.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", C$99o), e$o.instance.e$yd += C$99o + "|", e$l(), C$99t(C$99o, 404, null);
    }, C$99i.src = C$99o, -1 == e$o.instance.m_serverRes.indexOf(C$99o) && -1 == e$o.instance.m_loadingRes.indexOf(C$99o) || Laya.Loader.keepCache(e$o.instance, C$99o);
  }, e$o.prototype.e$ud = function (C$99e, C$99t) {
    return -1 != C$99e.indexOf(C$99t, C$99e.length - C$99t.length);
  }, e$o;
}();!function (C$99e) {
  function e$d() {
    var C$99e = C$99t.call(this) || this;return C$99e.e$hd = "#72441d", C$99e.e$sd = "#263d7d", C$99e.width = 274, C$99e.height = 59, C$99e.e$Pd = new Laya.Image(), C$99e.addChild(C$99e.e$Pd), C$99e.e$Xd = new Laya.Label(), C$99e.e$Xd.fontSize = 30, C$99e.e$Xd.color = C$99e.e$sd, C$99e.addChild(C$99e.e$Xd), C$99e.e$Xd.centerX = 0, C$99e.e$Xd.centerY = 0, C$99e;
  }var C$99t;C$99e = C$99e.e$k || (C$99e.e$k = {}), C$99t = Laya.View, __extends(e$d, C$99t), e$d.prototype.initialize = function () {
    C$99t.prototype.initialize.call(this), this.e$G = Browser.window.PF_INFO, this.e$G.loadingType, this.addEvt();
  }, Object.defineProperty(e$d.prototype, "dataSource", { set: function (C$99e) {
      C$99e && this.setData(C$99e);
    }, enumerable: !0, configurable: !0 }), e$d.prototype.setData = function (C$99e) {
    this.e$md = C$99e[0], this.e$Od = C$99e[1], this.e$Xd.text = this.e$md.title, this.e$Xd.color = this.e$Od ? this.e$hd : this.e$sd, this.e$Pd.skin = this.e$Od ? "eeelogin/e25b.png" : "eeelogin/e24b.png";
  }, e$d.prototype.destroy = function (C$99e) {
    void 0 === C$99e && (C$99e = !0), this.rmEvts(), C$99t.prototype.destroy.call(this, C$99e);
  }, e$d.prototype.addEvt = function () {}, e$d.prototype.rmEvts = function () {}, C$99e.NoticeItem = e$d;
}(modules = modules || {}), function (C$99e) {
  function e$d() {
    var C$99e = C$99t.call(this) || this;return C$99e.e$hd = "#72441d", C$99e.e$sd = "#263d7d", C$99e.width = 274, C$99e.height = 59, C$99e.e$Pd = new Laya.Image(), C$99e.addChild(C$99e.e$Pd), C$99e.e$Xd = new Laya.Label(), C$99e.e$Xd.fontSize = 30, C$99e.e$Xd.color = C$99e.e$sd, C$99e.addChild(C$99e.e$Xd), C$99e.e$Xd.centerX = 0, C$99e.e$Xd.centerY = 0, C$99e;
  }var C$99t;C$99e = C$99e.e$k || (C$99e.e$k = {}), C$99t = Laya.View, __extends(e$d, C$99t), e$d.prototype.initialize = function () {
    C$99t.prototype.initialize.call(this), this.e$G = Browser.window.PF_INFO, this.e$G.loadingType, this.addEvt();
  }, Object.defineProperty(e$d.prototype, "dataSource", { set: function (C$99e) {
      C$99e && this.setData(C$99e);
    }, enumerable: !0, configurable: !0 }), e$d.prototype.setData = function (C$99e) {
    this.e$Fd = C$99e[0], this.e$Od = C$99e[1], this.e$Xd.text = this.e$Fd, this.e$Xd.color = this.e$Od ? this.e$hd : this.e$sd, this.e$Pd.skin = this.e$Od ? "eeelogin/e25b.png" : "eeelogin/e24b.png";
  }, e$d.prototype.destroy = function (C$99e) {
    void 0 === C$99e && (C$99e = !0), this.rmEvts(), C$99t.prototype.destroy.call(this, C$99e);
  }, e$d.prototype.addEvt = function () {}, e$d.prototype.rmEvts = function () {}, C$99e.PrivacyItem = e$d;
}(modules = modules || {}), function (C$99e) {
  function e$d() {
    var C$99e = C$99t.call(this) || this;return C$99e.width = 192, C$99e.height = 70, C$99e.e$Pd = new Laya.Image(), C$99e.addChild(C$99e.e$Pd), C$99e.e$ad = new Laya.Label(), C$99e.e$ad.fontSize = 28, C$99e.e$ad.color = C$99e.e$N, C$99e.addChild(C$99e.e$ad), C$99e.e$ad.centerX = 0, C$99e.e$ad.centerY = 0, C$99e.e$_d = new Laya.Label(), C$99e.e$_d.fontSize = 22, C$99e.e$_d.color = C$99e.e$N, C$99e.addChild(C$99e.e$_d), C$99e.e$_d.centerX = 0, C$99e.e$_d.y = 11, C$99e.e$vd = new Laya.Label(), C$99e.e$vd.fontSize = 26, C$99e.e$vd.color = C$99e.e$N, C$99e.addChild(C$99e.e$vd), C$99e.e$vd.centerX = 0, C$99e.e$vd.y = 39, C$99e;
  }var C$99t;C$99e = C$99e.e$k || (C$99e.e$k = {}), C$99t = Laya.View, __extends(e$d, C$99t), e$d.prototype.initialize = function () {
    C$99t.prototype.initialize.call(this), this.e$G = Browser.window.PF_INFO;var C$99e = this.e$G.loadingType;this.e$N = 1 != C$99e && 2 != C$99e && 3 == C$99e ? "#763042" : "#263d7d", this.addEvt();
  }, Object.defineProperty(e$d.prototype, "dataSource", { set: function (C$99e) {
      C$99e && this.setData(C$99e);
    }, enumerable: !0, configurable: !0 }), e$d.prototype.setData = function (C$99e) {
    this.e$md = C$99e;var C$99t = this.e$md.id,
        C$99i = this.e$md.name;var C$99o, C$99s;this.e$ad.visible = this.e$_d.visible = this.e$vd.visible = !1, -1 == C$99t || -2 == C$99t ? (this.e$ad.visible = !0, this.e$ad.text = C$99i) : (C$99t = "1-10\u670d", (C$99s = (C$99o = C$99i).match("[0-9]{1,}")) && null != C$99s.index && (C$99o = C$99i.slice(0, C$99s.index), C$99t = C$99i.slice(C$99s.index)), this.e$_d.visible = this.e$vd.visible = !0, this.e$_d.text = C$99o, this.e$vd.text = C$99t), this.e$Pd.skin = C$99e.select ? "eeelogin/e14b.png" : "eeelogin/e15b.png";
  }, e$d.prototype.destroy = function (C$99e) {
    void 0 === C$99e && (C$99e = !0), this.rmEvts(), C$99t.prototype.destroy.call(this, C$99e);
  }, e$d.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, e$d.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, e$d.prototype.clkHdler = function () {
    this.e$md && this.e$md.callBack && this.e$md.callBack(this.e$md.index);
  }, C$99e.SelectLeftListItem = e$d;
}(modules = modules || {}), function (C$99e) {
  function e$d() {
    var C$99e = C$99t.call(this) || this;return C$99e.width = 358, C$99e.height = 70, C$99e.e$Pd = new Laya.Image("eeelogin/e16b.png"), C$99e.addChild(C$99e.e$Pd), C$99e.e$Pd.graphics.drawRect(0, 0, C$99e.width, C$99e.height, "#00sasd"), C$99e.e$dt = new Laya.Image(), C$99e.e$dt.centerY = 0, C$99e.e$dt.x = 7, C$99e.addChild(C$99e.e$dt), C$99e.e$ad = new Laya.Label(), C$99e.e$ad.fontSize = 24, C$99e.e$ad.color = C$99e.e$N, C$99e.e$ad.x = 56, C$99e.e$ad.centerY = 0, C$99e.addChild(C$99e.e$ad), C$99e.e$tt = new Laya.Label(), C$99e.e$tt.fontSize = 24, C$99e.e$tt.color = C$99e.e$N, C$99e.e$tt.x = 246, C$99e.e$tt.centerY = 0, C$99e.addChild(C$99e.e$tt), C$99e.e$lt = new Laya.Image(), C$99e.e$lt.top = 0, C$99e.e$lt.right = 0, C$99e.addChild(C$99e.e$lt), C$99e.e$kt = new Laya.Label(), C$99e.e$kt.fontSize = 20, C$99e.e$kt.color = "#ffffff", C$99e.e$kt.x = 225, C$99e.e$kt.y = 46, C$99e.addChild(C$99e.e$kt), C$99e;
  }var C$99t;C$99e = C$99e.e$k || (C$99e.e$k = {}), C$99t = Laya.View, __extends(e$d, C$99t), e$d.prototype.initialize = function () {
    C$99t.prototype.initialize.call(this), this.e$G = Browser.window.PF_INFO;var C$99e = this.e$G.loadingType;this.e$N = 1 != C$99e && 2 != C$99e && 3 == C$99e ? "#763042" : "#34267d", this.addEvt();
  }, Object.defineProperty(e$d.prototype, "dataSource", { set: function (C$99e) {
      C$99e && this.setData(C$99e);
    }, enumerable: !0, configurable: !0 }), e$d.prototype.setData = function (C$99e) {
    this.e$md = C$99e;var C$99e = this.e$md.status,
        C$99t = this.e$md.server_name;this.e$dt.skin = this.getStatusSrc(this.e$md), this.e$ad.color = -1 === C$99e ? "#d50000" : 0 === C$99e ? "#49575a" : this.e$N, this.e$ad.text = C$99t, this.e$tt.text = -1 === C$99e ? "\u7ef4\u62a4\u4e2d" : 0 === C$99e ? "\u672a\u5f00\u670d" : "\u5df2\u5f00\u670d";C$99t = 1 == this.e$md.is_recommend || 3 == this.e$md.is_recommend;(this.e$lt.visible = C$99t) && (this.e$lt.skin = "eeelogin/e199b.png"), this.e$kt.text = -1 == this.e$md.status && this.e$md.maintain_time ? this.e$md.maintain_time : "";
  }, e$d.prototype.destroy = function (C$99e) {
    void 0 === C$99e && (C$99e = !0), this.rmEvts(), C$99t.prototype.destroy.call(this, C$99e);
  }, e$d.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, e$d.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, e$d.prototype.clkHdler = function () {
    this.e$md && this.e$md.callBack && this.e$md.callBack(this.e$md);
  }, e$d.prototype.getStatusSrc = function (C$99e) {
    var C$99t = C$99e.status,
        C$99e = C$99e.is_recommend,
        C$99i = "eeelogin/e19b.png";return 1 !== C$99t && 2 !== C$99t || 1 !== C$99e && 3 !== C$99e ? 1 !== C$99t && 2 !== C$99t || 2 !== C$99e ? -1 !== C$99t && 0 !== C$99t || (C$99i = "eeelogin/e20b.png") : C$99i = "eeelogin/e19b.png" : C$99i = "eeelogin/e18b.png", C$99i;
  }, C$99e.SelectRightListItem = e$d;
}(modules = modules || {}), window.ServerLoading = ServerLoading;