"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
  };return function (t, e) {
    function H$c() {
      this.constructor = t;
    }i(t, e), t.prototype = null === e ? Object.create(e) : (H$c.prototype = e.prototype, new H$c());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (t) {
  __extends(H$b, i = View), H$b.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.H$a.uiView);
  }, H$b.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy102b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy106b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy103b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy104b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy105b.jpg", left: 720, height: 1280, centerY: 0 } }] }] };var e = H$b;function H$b() {
    return i.call(this) || this;
  }var i;t.H$a = e;
}(ui = ui || {}), function (t) {
  __extends(H$b, i = View), H$b.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.H$b.uiView);
  }, H$b.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy101b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "Zqy10Zqy10dZqy10/Zqy10Zqy1013a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "Zqy10Zqy10dZqy10/Zqy10Zqy1014a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "Zqy10Zqy10dZqy10/Zqy10Zqy1016a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "Zqy10Zqy10dZqy10/Zqy10Zqy1017a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "Zqy10Zqy10dZqy10/Zqy10Zqy1020a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "Zqy10Zqy10dZqy10/Zqy10Zqy1019a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "Zqy10Zqy10dZqy10/Zqy10Zqy1018a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "Zqy10Zqy10dZqy10/Zqy10Zqy1018a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "Zqy10Zqy10dZqy10/Zqy10Zqy101a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }] };var e = H$b;function H$b() {
    return i.call(this) || this;
  }var i;t.H$b = e;
}(ui = ui || {}), function (t) {
  __extends(H$b, i = View), H$b.prototype.createChildren = function () {
    View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), View.regComponent("Text", laya.display.Text), i.prototype.createChildren.call(this), this.createView(t.H$c.uiView);
  }, H$b.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy102b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy106b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy103b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy104b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy105b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1021b.png", centerX: 0 } }, { type: "Image", props: { y: 1102, var: "imgCheatTip", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1027b.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 927, x: 159, var: "hotImage", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1018b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy101b.png", centerX: 0, bottom: 30 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1012b.png", name: "enterBtn", centerX: 0 } }, { type: "Image", props: { x: 196, visible: !1, var: "privacyToggle", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1029b.png", bottom: 4 } }, { type: "Label", props: { y: 640, x: 0, width: 720, var: "txtTip", valign: "middle", text: "\u63d0\u793a\u5185\u5bb9", strokeColor: "#ffffff", stroke: 2, height: 32, fontSize: 32, color: "#ff0000", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }, { type: "HTMLDivElement", props: { y: 1255, x: 256, visible: !1, var: "privacyTip", height: 16 } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1011b.png" } }, { type: "Image", props: { y: 257, x: 594, visible: !1, var: "privacyBtn", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1013b.png", name: "privacyBtn" } }, { type: "Image", props: { visible: !1, var: "ageTipBtn", top: 1, scaleY: .5, scaleX: .5, name: "privacyBtn", left: 1 } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy108b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1010b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "mNoticeBg", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy108b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1010b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1025b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "privacyBg", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy108b.png", name: "privacyBg", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "privacyClose", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1010b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "privacyClose2", stateNum: 1, skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1025b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTabPrivacy", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "privacyTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "privacyPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "privacyContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy109b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1017b.png" } }] }, { type: "Box", props: { width: 720, visible: !1, var: "jumpBg", mouseThrough: !1, height: 1280, centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { x: 33, width: 655, skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy108b.png", height: 994, centerY: 0, centerX: 0 } }, { type: "Button", props: { width: 274, var: "btnJump", stateNum: 1, skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1025b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u8df3\u8f6c", height: 59, centerY: 436, centerX: 0 } }, { type: "Label", props: { width: 234, var: "jumpTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", fontSize: 30, color: "#ffffff", centerY: -408, centerX: 0, bold: !1, align: "center" } }, { type: "Panel", props: { x: 94, width: 545, var: "jumpPanel", height: 733, centerY: 10 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "jumpContent", height: 733 } }] }, { type: "Image", props: { x: 596, visible: !1, var: "closeBtn", skin: "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1017b.png", name: "closeBtn", centerY: -402 } }] }] };var e = H$b;function H$b() {
    return i.call(this) || this;
  }var i;t.H$c = e;
}(ui = ui || {}), function (t) {
  function H$a() {
    return e.call(this) || this;
  }var e;t = t.H$d || (t.H$d = {}), e = ui.H$a, __extends(H$a, e), H$a.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
  }, H$a.prototype.addEvt = function () {
    this.on(Laya.Event.CLICK, this, this.H$e);
  }, H$a.prototype.rmEvts = function () {
    this.off(Laya.Event.CLICK, this, this.H$e);
  }, H$a.prototype.onOpened = function () {
    this.H$f = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
  }, H$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, H$a.prototype.H$e = function () {
    1e4 < Date.now() - this.H$f && (this.H$f -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
  }, t.AuthorizationPanel = H$a;
}(modules = modules || {}), function (t) {
  var e, i, a, n;function H$i() {
    var t = s.call(this) || this;return t.H$h = new i(), t.addChild(t.H$h), t.H$i = null, t.H$j = [], t.H$k = !1, t.H$l = 0, t.H$m = !0, t.H$n = 6, t.H$q = !1, t.on(e.DISPLAY, t, t.H$r), t.on(e.UNDISPLAY, t, t.H$s), t;
  }var s;t = t.H$g || (t.H$g = {}), e = Laya.Event, i = Laya.Image, a = Laya.Component, n = Laya.Loader, __extends(H$i, s = a), H$i.create = function (t, e, i, a, s, n, o) {
    void 0 === a && (a = 0), void 0 === s && (s = 6), void 0 === n && (n = !0), void 0 === o && (o = !1);var r = new H$i();return r.skin(e, i, a), r.durFrm = s, r.loop = n, r.atHide = o, t && t.addChild(r), r;
  }, H$i.play = function (t) {
    t && (t.visible = !0, t.play());
  }, H$i.stop = function (t) {
    t && (t.visible = !1, t.stop());
  }, H$i.prototype.destroy = function (t) {
    Laya.timer.clear(this, this.H$t), this.off(e.DISPLAY, this, this.H$r), this.off(e.UNDISPLAY, this, this.H$s), s.prototype.destroy.call(this, t);
  }, H$i.prototype.H$r = function () {}, H$i.prototype.H$s = function () {}, H$i.prototype.skin = function (t, e, i) {
    if (this.H$i != t) {
      this.H$i = t, this.H$j = [];for (var a = 0, s = i; s <= e; s++) this.H$j[a++] = t + "/" + s + ".png";i = n.getRes(this.H$j[0]);i && (this.width = i.sourceWidth, this.height = i.sourceHeight), this.H$t();
    }
  }, Object.defineProperty(H$i.prototype, "atHide", { get: function () {
      return this.H$q;
    }, set: function (t) {
      this.H$q = t;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(H$i.prototype, "durFrm", { set: function (t) {
      this.H$n != t && (this.H$n = t, this.H$k && (Laya.timer.clear(this, this.H$t), Laya.timer.loop(this.H$n * (1e3 / 60), this, this.H$t)));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(H$i.prototype, "loop", { set: function (t) {
      this.H$m = t;
    }, enumerable: !0, configurable: !0 }), H$i.prototype.play = function () {
    this.H$k && this.stop(), this.H$k = !0, this.H$l = 0, Laya.timer.loop(this.H$n * (1e3 / 60), this, this.H$t), this.H$t();
  }, H$i.prototype.stop = function () {
    this.H$k = !1, this.H$l = 0, this.H$t(), Laya.timer.clear(this, this.H$t);
  }, H$i.prototype.pause = function () {
    this.H$k && (this.H$k = !1, Laya.timer.clear(this, this.H$t));
  }, H$i.prototype.resume = function () {
    this.H$k || (this.H$k = !0, Laya.timer.loop(this.H$n * (1e3 / 60), this, this.H$t), this.H$t());
  }, Object.defineProperty(H$i.prototype, "isPlay", { get: function () {
      return this.H$k;
    }, enumerable: !0, configurable: !0 }), H$i.prototype.H$t = function () {
    this.H$j && 0 != this.H$j.length && (this.H$h.skin = this.H$j[this.H$l], this.H$k && (this.H$l++, this.H$l == this.H$j.length && (this.H$m ? this.H$l = 0 : (Laya.timer.clear(this, this.H$t), this.H$k = !1, this.H$q && (this.visible = !1), this.event(e.COMPLETE)))));
  }, t.PanelEff = H$i;
}(modules = modules || {}), function (t) {
  var e, i;function H$a(t, e) {
    void 0 === t && (t = 0);var i = a.call(this) || this;return i.H$u = { bgImgSkin: "Zqy10Zqy10dZqy10/Zqy10Zqy103a.jpg", topImgSkin: "Zqy10Zqy10dZqy10/Zqy10Zqy1010a.jpg", btmImgSkin: "Zqy10Zqy10dZqy10/Zqy10Zqy104a.jpg", leftImgSkin: "Zqy10Zqy10dZqy10/Zqy10Zqy106a.jpg", rightImgSkin: "Zqy10Zqy10dZqy10/Zqy10Zqy108a.jpg", loadingBarBgSkin: "Zqy10Zqy10dZqy10/Zqy10Zqy1013a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, i.H$v = { bgImgSkin: "Zqy10Zqy10dZqy10/Zqy10Zqy1012a.jpg", topImgSkin: "Zqy10Zqy10dZqy10/Zqy10Zqy1011a.jpg", btmImgSkin: "Zqy10Zqy10dZqy10/Zqy10Zqy105a.jpg", leftImgSkin: "Zqy10Zqy10dZqy10/Zqy10Zqy107a.jpg", rightImgSkin: "Zqy10Zqy10dZqy10/Zqy10Zqy109a.jpg", loadingBarBgSkin: "Zqy10Zqy10dZqy10/Zqy10Zqy1015a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, i.H$w = 0, i.H$x(1 == t ? i.H$v : i.H$u), i.copyRightImg.skin = e, i;
  }var a;e = t.H$d || (t.H$d = {}), i = t.H$g.PanelEff, a = ui.H$b, __extends(H$a, a), H$a.prototype.initialize = function () {
    var t;a.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.H$y = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.H$y && (t = this.H$y.loadingType, this.loadingTips.color = 1 != t && (2 == t || 101 == t) ? "#000000" : "#f2ffb5"), this.H$z = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
  }, H$a.prototype.toAllProgress = function (t) {
    var e = this;if (-1 === t) return e.H$w = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);var i;-2 !== t ? (e.H$w < .9 ? e.H$w += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : e.H$w < 1 && (e.H$w += 1e-4), .9999 < e.H$w && (e.H$w = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
      .9 < e.H$w && toAllProgress(-1);
    })), i = 590 * (t = e.H$w), e.H$w = e.H$w > t ? e.H$w : t, e.loadingBar.width = i, i = e.loadingBar.x + i, e.loadingImg2.x = i - 15, 364 <= i ? (e.loadingImg1.visible = !0, e.loadingImg1.x = i - 202) : e.loadingImg1.visible = !1, e.percentageTips.text = (100 * t >> 0) + "%", e.H$w < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress)) : Laya.timer.clear(this, this.toAllProgress);
  }, H$a.prototype.toProgress = function (t, e, i) {
    var a = 590 * (t = 1 < t ? 1 : t);this.H$w = this.H$w > t ? this.H$w : t, this.loadingBar.width = a;a = this.loadingBar.x + a;this.loadingImg2.x = a - 15, 364 <= a ? (this.loadingImg1.visible = !0, this.loadingImg1.x = a - 202) : this.loadingImg1.visible = !1, this.percentageTips.text = (100 * t >> 0) + "%", this.loadingTips.text = e;for (var s = i - 1, n = 0; n < this.H$z.length; n++) this.H$z[n].skin = n < s ? "Zqy10Zqy10dZqy10/Zqy10Zqy1020a.png" : s === n ? "Zqy10Zqy10dZqy10/Zqy10Zqy1019a.png" : "Zqy10Zqy10dZqy10/Zqy10Zqy1018a.png";
  }, H$a.prototype.onOpened = function () {
    this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.H$y.lastVersion + "      \u7248\u672c\uff1a" + this.H$y.wxVersion, this.showGetBtn();
  }, H$a.prototype.close = function (t) {
    this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.H$A), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.H$B);
  }, H$a.prototype.resetWinFun = function () {
    Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
  }, H$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.resetWinFun(), a.prototype.destroy.call(this, t);
  }, H$a.prototype.showGetBtn = function () {
    this.H$y.showGetBtn && 1 == this.H$y.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "Zqy10Zqy10dZqy10/Zqy10Zqy101a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.H$B), this.H$C(), this.H$D(!0));
  }, H$a.prototype.H$B = function () {
    this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "Zqy10Zqy10dZqy10/Zqy10Zqy102a.png", this.H$E(), this.H$D(!1));
  }, H$a.prototype.H$x = function (t) {
    this.bgImg.skin = t.bgImgSkin, this.topImg.skin = t.topImgSkin, this.btmImg.skin = t.btmImgSkin, this.leftImg.skin = t.leftImgSkin, this.rightImg.skin = t.rightImgSkin, this.copyRightImg.bottom = t.copyRightImgBottom, this.processBox1.y = t.processBox1Y, this.processBox2.y = t.processBox2Y, this.loadingBarBg.skin = t.loadingBarBgSkin, this.loadingTips.fontSize = t.loadingTipsSize, this.getTipsBtn.visible = this.H$y.showGetBtn && 1 == this.H$y.showGetBtn, this.getTipsBtn.visible ? this.H$C() : this.H$E(), this.H$D(this.getTipsBtn.visible);
  }, H$a.prototype.H$C = function () {
    this.H$F || (this.H$F = i.create(this.getTipsBtn, "Zqy10yZqy10", 4, 0, 12), this.H$F.pos(161, 106), this.H$F.scale(1.14, 1.15)), i.play(this.H$F);
  }, H$a.prototype.H$E = function () {
    this.H$F && i.stop(this.H$F);
  }, H$a.prototype.H$D = function (t) {
    Laya.timer.clear(this, this.H$A), t ? (this.H$G = 9, this.txtGetTm.visible = !0, this.H$A(), Laya.timer.loop(1e3, this, this.H$A)) : this.txtGetTm.visible = !1;
  }, H$a.prototype.H$A = function () {
    0 < this.H$G ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.H$G + "s)", this.H$G--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.H$A), this.H$B());
  }, e.LoadingPanel = H$a;
}(modules = modules || {}), function (t) {
  var e, i, a;function H$a(t) {
    void 0 === t && (t = "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy101b.png");var e = s.call(this) || this;return e.H$H = 0, e.H$I = "multi_notice_key", e.H$J = 0, e.H$K = 0, e.H$L = "privacy_key", e.H$M = !0, e.H$N = 0, e.copyRightImg.skin = t, e;
  }var s;e = t.H$d || (t.H$d = {}), i = Laya.List, a = Laya.Event, s = ui.H$c, __extends(H$a, s), H$a.prototype.initialize = function () {
    s.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.copyRightImg.skin = "", ServerLoading.instance.preloadServer(), this.H$y = Browser.window.PF_INFO, this.H$O = new i(), this.H$O.vScrollBarSkin = "", this.H$O.itemRender = e.SelectLeftListItem, this.H$O.top = 5, this.H$O.repeatX = 1, this.H$O.spaceY = 5, this.H$O.width = this.leftListBox.width, this.H$O.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.H$O), this.H$P = new i(), this.H$P.vScrollBarSkin = "", this.H$P.itemRender = e.SelectRightListItem, this.H$P.top = 5, this.H$P.repeatX = 1, this.H$P.spaceY = 5, this.H$P.width = this.rightListBox.width, this.H$P.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.H$P), this.H$Q = new i(), this.H$Q.hScrollBarSkin = "", this.H$Q.itemRender = e.NoticeItem, this.H$Q.repeatY = 1, this.H$Q.width = this.boxTab.width, this.H$Q.height = this.boxTab.height, this.boxTab.addChild(this.H$Q), this.H$R = new i(), this.H$R.hScrollBarSkin = "", this.H$R.itemRender = e.PrivacyItem, this.H$R.repeatY = 1, this.H$R.width = this.boxTab.width, this.H$R.height = this.boxTab.height, this.boxTabPrivacy.addChild(this.H$R);var t = this.H$y.loadingType;this.H$S = 1 == t || 2 == t || 3 == t || 101 == t ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.H$T = [], this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.privacyContent.color = "#212942", this.privacyContent.style.fontSize = 26, this.privacyContent.style.lineHeight = 28, this.privacyContent.mouseEnabled = !1, this.privacyTip.color = "#ffffff", this.privacyTip.style.fontSize = 18, this.privacyTip.style.lineHeight = 18, this.privacyTip.style.stroke = 2, this.privacyTip.style.strokeColor = "#000000", this.privacyTip.style.wordWrap = !1, this.jumpContent.color = "#212942", this.jumpContent.style.fontSize = 26, this.jumpContent.style.lineHeight = 28, this.jumpContent.mouseEnabled = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
  }, H$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), this.H$U(), this.H$V(), this.H$W(), this.H$X(), this.ageTipsContent = null, this.H$O && (this.H$O.removeSelf(), this.H$O.destroy(), this.H$O = null), this.H$P && (this.H$P.removeSelf(), this.H$P.destroy(), this.H$P = null), this.H$Q && (this.H$Q.removeSelf(), this.H$Q.destroy(), this.H$Q = null), this.H$R && (this.H$R.removeSelf(), this.H$R.destroy(), this.H$R = null), Laya.timer.clear(this, this.H$Y), s.prototype.destroy.call(this, t);
  }, H$a.prototype.addEvt = function () {
    this.bgImg.on(Laya.Event.CLICK, this, this.H$Z), this.enterBtn.on(Laya.Event.CLICK, this, this.H$$), this.selectServer.on(Laya.Event.CLICK, this, this.H$_), this.selectServer.on(Laya.Event.CLICK, this, this.H$_), this.closeBg.on(Laya.Event.CLICK, this, this.H$o), this.closeBtn.on(Laya.Event.CLICK, this, this.H$p), this.noticeBtn.on(Laya.Event.CLICK, this, this.H$aa), this.noticeClose.on(Laya.Event.CLICK, this, this.H$ba), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.H$ca), this.mNoticeClose.on(Laya.Event.CLICK, this, this.H$da), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.H$da), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.H$ea), this.privacyBtn.on(Laya.Event.CLICK, this, this.H$fa), this.ageTipBtn.on(Laya.Event.CLICK, this, this.H$ga), this.privacyClose.on(Laya.Event.CLICK, this, this.H$ha), this.privacyClose2.on(Laya.Event.CLICK, this, this.H$ha), this.privacyPanel.on(Laya.Event.MOUSE_DOWN, this, this.H$ia), this.privacyToggle.on(Laya.Event.CLICK, this, this.H$ja), this.privacyTip.on(Laya.Event.LINK, this, this.H$ka), this.btnJump.on(Laya.Event.CLICK, this, this.H$la), this.jumpPanel.on(Laya.Event.MOUSE_DOWN, this, this.H$ma), this.H$Q.selectEnable = !0, this.H$Q.selectHandler = Laya.Handler.create(this, this.H$na, null, !1), this.H$R.selectEnable = !0, this.H$R.selectHandler = Laya.Handler.create(this, this.H$qa, null, !1);
  }, H$a.prototype.rmEvts = function () {
    this.bgImg.off(Laya.Event.CLICK, this, this.H$Z), this.enterBtn.off(Laya.Event.CLICK, this, this.H$$), this.selectServer.off(Laya.Event.CLICK, this, this.H$_), this.selectServer.off(Laya.Event.CLICK, this, this.H$_), this.closeBg.off(Laya.Event.CLICK, this, this.H$o), this.noticeBtn.off(Laya.Event.CLICK, this, this.H$aa), this.closeBtn.off(Laya.Event.CLICK, this, this.H$p), this.noticeClose.off(Laya.Event.CLICK, this, this.H$ba), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.H$ca), this.mNoticeClose.off(Laya.Event.CLICK, this, this.H$da), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.H$da), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.H$ea), this.privacyBtn.off(Laya.Event.CLICK, this, this.H$fa), this.ageTipBtn.off(Laya.Event.CLICK, this, this.H$ga), this.privacyClose.off(Laya.Event.CLICK, this, this.H$ha), this.privacyClose2.off(Laya.Event.CLICK, this, this.H$ha), this.privacyPanel.off(Laya.Event.MOUSE_DOWN, this, this.H$ia), this.privacyToggle.off(Laya.Event.CLICK, this, this.H$ja), this.privacyTip.off(Laya.Event.LINK, this, this.H$ka), this.btnJump.off(Laya.Event.CLICK, this, this.H$la), this.jumpPanel.off(Laya.Event.MOUSE_DOWN, this, this.H$ma), this.H$Q.selectEnable = !1, this.H$Q.selectHandler = null, this.H$R.selectEnable = !1, this.H$R.selectHandler = null;
  }, H$a.prototype.onOpened = function () {
    var a = this;this.H$f = Date.now(), this.H$M = !0, this.H$ra = this.H$y.selectedServer.server_id, this.H$sa(this.H$y.selectedServer), this.H$O.dataSource = this.H$y.groupList, this.H$_(), req_multi_server_notice(4, this.H$y.pkgName, this.H$y.selectedServer.server_id, this.H$ta.bind(this)), Laya.timer.frameOnce(1, this, function () {
      a.H$ua = a.H$y.privacy_data && a.H$y.privacy_data.list ? a.H$y.privacy_data.list : [], a.H$va = null != a.H$y.privacy_login_pkg ? a.H$y.privacy_login_pkg : 0;var t = "1" == localStorage.getItem(a.H$L),
          e = 0 != PF_INFO.privacy_save_pkg,
          i = 0 == a.H$va || 1 == a.H$va;a.H$wa = e && t || i, a.H$xa();
    }), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.H$y.lastVersion + "      \u7248\u672c\uff1a" + this.H$y.wxVersion, this.serverName.color = this.selServer.color = this.H$S, this.imgCheatTip.visible = 1 == this.H$y.anti_cheat_pkg, this.txtTip.visible = !1;
  }, H$a.prototype.preload = function () {}, H$a.prototype.H$Z = function () {
    this.H$wa ? 1e4 < Date.now() - this.H$f && (this.H$f -= 2e3, ServerLoading.instance.enterDefaultServer()) : this.H$ya("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
  }, H$a.prototype.H$$ = function () {
    this.H$wa ? this.H$za(this.H$y.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.H$y.selectedServer, req_server_check_ban(0, this.H$y.selectedServer.server_id)) : this.H$ya("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
  }, H$a.prototype.H$_ = function () {
    this.H$y.hasGroupReq ? this.listBg.visible = !0 : (this.H$y.hasGroupReq = !0, req_server_group(0));
  }, H$a.prototype.H$o = function () {
    this.listBg.visible = !1;
  }, H$a.prototype.H$p = function () {
    this.jumpBg.visible = !1;
  }, H$a.prototype.H$aa = function () {
    this.H$Aa();
  }, H$a.prototype.H$da = function () {
    this.mNoticeBg.visible = !1;
  }, H$a.prototype.H$ba = function () {
    this.noticeBg.visible = !1;
  }, H$a.prototype.H$fa = function () {
    this.H$Ba();
  }, H$a.prototype.H$ha = function () {
    this.privacyBg.visible = !1;
  }, H$a.prototype.H$ja = function () {
    this.H$wa = !this.H$wa, this.H$wa && localStorage.setItem(this.H$L, "1"), this.privacyToggle.skin = "Zqy10Zqy10lgrZqy10Zqy10/" + (this.H$wa ? "Zqy10Zqy1029b.png" : "Zqy10Zqy1028b.png");
  }, H$a.prototype.H$ka = function (t) {
    this.H$Ba(Number(t));
  }, H$a.prototype.H$la = function () {
    Browser.window.forceJumpMiniGame ? Browser.window.forceJumpMiniGame() : this.H$p();
  }, H$a.prototype.H$ca = function () {
    this.H$H = this.noticeContent.mouseY, Laya.stage.on(a.MOUSE_MOVE, this, this.H$Ca), Laya.stage.on(a.MOUSE_UP, this, this.H$U), Laya.stage.on(a.MOUSE_OUT, this, this.H$U);
  }, H$a.prototype.H$Ca = function () {
    var t;this.noticeContent && (t = this.H$H - this.noticeContent.mouseY, this.noticeContent.scrollY += t, this.H$H = this.noticeContent.mouseY);
  }, H$a.prototype.H$U = function () {
    Laya.stage.off(a.MOUSE_MOVE, this, this.H$Ca), Laya.stage.off(a.MOUSE_UP, this, this.H$U), Laya.stage.off(a.MOUSE_OUT, this, this.H$U);
  }, H$a.prototype.H$ea = function () {
    this.H$J = this.mNoticePanel.mouseY, Laya.stage.on(a.MOUSE_MOVE, this, this.H$Da), Laya.stage.on(a.MOUSE_UP, this, this.H$V), Laya.stage.on(a.MOUSE_OUT, this, this.H$V);
  }, H$a.prototype.H$Da = function () {
    var t;this.mNoticeContent && (t = this.H$J - this.mNoticePanel.mouseY, this.mNoticeContent.y -= t, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.H$J = this.mNoticePanel.mouseY);
  }, H$a.prototype.H$V = function () {
    Laya.stage.off(a.MOUSE_MOVE, this, this.H$Da), Laya.stage.off(a.MOUSE_UP, this, this.H$V), Laya.stage.off(a.MOUSE_OUT, this, this.H$V);
  }, H$a.prototype.H$ia = function () {
    this.H$K = this.privacyPanel.mouseY, Laya.stage.on(a.MOUSE_MOVE, this, this.H$Ea), Laya.stage.on(a.MOUSE_UP, this, this.H$W), Laya.stage.on(a.MOUSE_OUT, this, this.H$W);
  }, H$a.prototype.H$Ea = function () {
    var t;this.privacyContent && (t = this.H$K - this.privacyPanel.mouseY, this.privacyContent.y -= t, this.privacyPanel.height < this.privacyContent.contextHeight ? this.privacyContent.y < this.privacyPanel.height - this.privacyContent.contextHeight ? this.privacyContent.y = this.privacyPanel.height - this.privacyContent.contextHeight : 0 < this.privacyContent.y && (this.privacyContent.y = 0) : this.privacyContent.y = 0, this.H$K = this.privacyPanel.mouseY);
  }, H$a.prototype.H$W = function () {
    Laya.stage.off(a.MOUSE_MOVE, this, this.H$Ea), Laya.stage.off(a.MOUSE_UP, this, this.H$W), Laya.stage.off(a.MOUSE_OUT, this, this.H$W);
  }, H$a.prototype.H$ma = function () {
    this.H$N = this.jumpPanel.mouseY, Laya.stage.on(a.MOUSE_MOVE, this, this.H$Fa), Laya.stage.on(a.MOUSE_UP, this, this.H$X), Laya.stage.on(a.MOUSE_OUT, this, this.H$X);
  }, H$a.prototype.H$Fa = function () {
    var t;this.jumpContent && (t = this.H$N - this.jumpPanel.mouseY, this.jumpContent.y -= t, this.jumpPanel.height < this.jumpContent.contextHeight ? this.jumpContent.y < this.jumpPanel.height - this.jumpContent.contextHeight ? this.jumpContent.y = this.jumpPanel.height - this.jumpContent.contextHeight : 0 < this.jumpContent.y && (this.jumpContent.y = 0) : this.jumpContent.y = 0, this.H$N = this.jumpPanel.mouseY);
  }, H$a.prototype.H$X = function () {
    Laya.stage.off(a.MOUSE_MOVE, this, this.H$Fa), Laya.stage.off(a.MOUSE_UP, this, this.H$X), Laya.stage.off(a.MOUSE_OUT, this, this.H$X);
  }, H$a.prototype.H$na = function () {
    if (this.H$Q.dataSource) {
      for (var t, e = 0; e < this.H$Q.dataSource.length; e++) {
        var i = this.H$Q.dataSource[e];i[1] = e == this.H$Q.selectedIndex, e == this.H$Q.selectedIndex && (t = i[0]);
      }this.mNoticeTitle.text = t && t.title ? t.title : "", this.mNoticeContent.innerHTML = t && t.content ? t.content : "", this.mNoticeContent.y = 0;
    }
  }, H$a.prototype.H$qa = function () {
    var t = this.H$R.dataSource;if (t) {
      for (var e = 0; e < t.length; e++) t[e][1] = e == this.H$R.selectedIndex;var i = this.H$ua[this.H$R.selectedIndex];i && i.content && (i.content = i.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "")), this.privacyTitle.text = i && i.title ? i.title : "\u6807\u9898", this.privacyContent.innerHTML = i && i.content ? i.content : "\u52a0\u8f7d\u4e2d...", this.privacyContent.y = 0;
    }
  }, H$a.prototype.H$sa = function (t) {
    var e = t.server_name;this.serverName.text = e + this.H$Ga(t), this.serverName.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.H$S, this.hotImage.skin = this.H$Ha(t), this.H$y.cdn = t.cdn || "", this.H$y.selectedServer = t, this.noticeBtn.visible = !0;
  }, H$a.prototype.H$Ia = function (t) {
    this.showGroupList(t);
  }, H$a.prototype.H$Ja = function (t) {
    this.H$sa(t), this.listBg.visible = !1;
  }, H$a.prototype.showGroupList = function (t) {
    if (void 0 === t && (t = 0), this.parent) {
      var e = this.H$y.groupList;if (e && 0 !== e.length) {
        for (var i = e.length, a = 0; a < i; a++) e[a].callBack = this.H$Ia.bind(this), e[a].select = a == t, e[a].index = a;var s = (this.H$O.array = e)[t].id;this.H$y.serverList[s] ? this.showServerList(s) : this.H$y.hasServerReq || (this.H$y.hasServerReq = !0, -1 == s ? req_server_owner(0) : -2 == s ? req_recommend_server_list(0) : req_server_list(0, s));
      }
    }
  }, H$a.prototype.showServerList = function (t) {
    if (this.parent && this.H$y.serverList[t]) {
      for (var e = this.H$y.serverList[t], i = e.length, a = 0; a < i; a++) e[a].callBack = this.H$Ja.bind(this);this.H$P.array = e;
    }
  }, H$a.prototype.H$za = function (t) {
    return -1 == t.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != t.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
  }, H$a.prototype.H$Ha = function (t) {
    var e = t.status,
        t = t.is_recommend,
        i = "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1019b.png";return 1 !== e && 2 !== e || 1 !== t && 3 !== t ? 1 !== e && 2 !== e || 2 !== t ? -1 !== e && 0 !== e || (i = "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1020b.png") : i = "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1019b.png" : i = "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1018b.png", i;
  }, H$a.prototype.H$Ga = function (t) {
    var e = t.status,
        i = "";return 1 == t.is_recommend || 3 == t.is_recommend ? i = "(\u63a8\u8350)" : -1 === e ? i = "(\u7ef4\u62a4\u4e2d)" : 0 === e && (i = "(\u5f85\u5f00\u670d)"), i;
  }, H$a.prototype.H$ta = function (t) {
    console.log("onMultiNoticeCallback, param = ", t);var e = Date.now() / 1e3,
        i = localStorage.getItem(this.H$I),
        a = !(this.H$T = []);if ("success" == t.state) for (var s in t.data) {
      s = t.data[s];var n, o, r;s && (n = e < s.end_time, o = 1 == s.pop_type, r = 2 == s.pop_type && s.key + "" != i, !a && n && (o || r) && (a = !0), n && this.H$T.push(s), r && localStorage.setItem(this.H$I, s.key + ""));
    }this.H$T.sort(function (t, e) {
      return t.login_id - e.login_id;
    }), console.log("onMultiNoticeCallback, datas = ", this.H$T), a && this.H$Aa();
  }, H$a.prototype.H$Aa = function () {
    if (this.H$Q) {
      if (this.H$T) {
        this.H$Q.x = 2 < this.H$T.length ? 0 : (this.boxTab.width - 274 * this.H$T.length) / 2;for (var t = [], e = 0; e < this.H$T.length; e++) {
          var i = this.H$T[e];t.push([i, e == this.H$Q.selectedIndex]);
        }0 < (this.H$Q.dataSource = t).length ? (this.H$Q.selectedIndex = 0, this.H$Q.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.H$T.length <= 1, this.boxTab.visible = 1 < this.H$T.length;
      }this.mNoticeBg.visible = !0;
    }
  }, H$a.prototype.H$Ka = function (t) {
    if (!this.destroyed) {
      if (console.log("p_onPrivacyCallback, param = ", t), "success" == t.state) for (var e in t.data) {
        var e = Number(e),
            i = t.data[e];this.H$ua && this.H$ua[e] && (this.H$ua[e].content = i.content);
      }this.H$qa();
    }
  }, H$a.prototype.H$xa = function () {
    for (var t = "", e = 0; e < this.H$ua.length; e++) t += '<a href="' + e + '" style="color:#14ff28;text-decoration:none">' + this.H$ua[e].title + "</a>", e < this.H$ua.length - 1 && (t += "\u3001");this.privacyTip.innerHTML = "\u6211\u5df2\u7ecf\u8be6\u7ec6\u9605\u8bfb\u5e76\u540c\u610f" + t, this.privacyToggle.skin = "Zqy10Zqy10lgrZqy10Zqy10/" + (this.H$wa ? "Zqy10Zqy1029b.png" : "Zqy10Zqy1028b.png"), this.privacyTip.x = (720 - this.privacyTip.width) / 2, this.privacyToggle.x = this.privacyTip.x - 30, this.privacyBtn.visible = 0 < this.H$ua.length, this.privacyToggle.visible = this.privacyTip.visible = 0 < this.H$ua.length && 0 != this.H$va;
  }, H$a.prototype.H$Ba = function (t) {
    if (void 0 === t && (t = 0), this.H$R) {
      if (this.H$ua) {
        this.H$R.x = 2 < this.H$ua.length ? 0 : (this.boxTab.width - 274 * this.H$ua.length) / 2;for (var e = [], i = 0; i < this.H$ua.length; i++) {
          var a = this.H$ua[i],
              a = a && a.title ? a.title : "",
              s = i == this.H$R.selectedIndex;e.push([a, s]);
        }0 < (this.H$R.dataSource = e).length ? ((t = t < 0 ? 0 : t) > e.length - 1 && (t = 0), this.H$R.selectedIndex = t, this.H$R.scrollTo(t)) : (this.privacyTitle.text = "\u7a7a", this.privacyContent.text = ""), this.privacyClose2.visible = this.H$ua.length <= 1, this.boxTabPrivacy.visible = 1 < this.H$ua.length;
      }this.H$M && (this.H$M = !1, req_privacy(this.H$y.pkgName, this.H$Ka.bind(this))), this.privacyBg.visible = !0;
    }
  }, H$a.prototype.openJumpView = function (t, e, i, a) {
    void 0 === a && (a = !1), this.jumpTitle.text = t || "\u6682\u65e0\u516c\u544a", this.jumpContent.innerHTML = e || "", this.btnJump.label = i || "\u786e\u5b9a", this.jumpContent.y = 0, this.jumpBg.visible = !0, this.closeBtn.visible = a;
  }, H$a.prototype.showAgeTipsBtn = function (t, e, i, a, s) {
    (this.ageTipBtn.visible = t) && (this.ageTipBtn.skin = e || "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1011b.png"), this.ageTipsContent = i, this.ageTipBtn.x = a || 0, this.ageTipBtn.y = s || 0;
  }, H$a.prototype.H$ga = function () {
    this.openJumpView("\u9002\u9f84\u516c\u544a", this.ageTipsContent, "\u786e\u8ba4", !0);
  }, H$a.prototype.H$ya = function (t) {
    this.txtTip.text = t, this.txtTip.y = 640, this.txtTip.visible = !0, this.H$La = 1, Laya.timer.clear(this, this.H$Y), this.H$Y(), Laya.timer.frameLoop(1, this, this.H$Y);
  }, H$a.prototype.H$Y = function () {
    this.txtTip.y -= this.H$La, this.H$La *= 1.1, this.txtTip.y <= 590 && (this.txtTip.visible = !1, Laya.timer.clear(this, this.H$Y));
  }, e.SelectServerPanel = H$a;
}(modules = modules || {});var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.H$d.AuthorizationPanel,
    LoadingPanel = modules.H$d.LoadingPanel,
    SelectServerPanel = modules.H$d.SelectServerPanel,
    ServerLoading = function () {
  function H$i(t) {
    this.m_loadingRes = ["Zqy10Zqy10dZqy10/Zqy10Zqy1013a.png", "Zqy10Zqy10dZqy10/Zqy10Zqy1015a.png", "Zqy10Zqy10dZqy10/Zqy10Zqy1014a.png", "Zqy10Zqy10dZqy10/Zqy10Zqy1016a.png", "Zqy10Zqy10dZqy10/Zqy10Zqy1017a.png", "Zqy10Zqy10dZqy10/Zqy10Zqy1018a.png", "Zqy10Zqy10dZqy10/Zqy10Zqy1019a.png", "Zqy10Zqy10dZqy10/Zqy10Zqy1020a.png", "Zqy10yZqy10/Zqy10Zqy101c.png", "Zqy10yZqy10/Zqy10Zqy102c.png", "Zqy10yZqy10/Zqy10Zqy103c.png", "Zqy10yZqy10/Zqy10Zqy104c.png", "Zqy10yZqy10/Zqy10Zqy105c.png", "Zqy10Zqy10dZqy10/Zqy10Zqy103a.jpg", "Zqy10Zqy10dZqy10/Zqy10Zqy1012a.jpg", "Zqy10Zqy10dZqy10/Zqy10Zqy101a.png", "Zqy10Zqy10dZqy10/Zqy10Zqy102a.png", "Zqy10Zqy10dZqy10/Zqy10Zqy104a.jpg", "Zqy10Zqy10dZqy10/Zqy10Zqy106a.jpg", "Zqy10Zqy10dZqy10/Zqy10Zqy108a.jpg", "Zqy10Zqy10dZqy10/Zqy10Zqy1010a.jpg", "Zqy10Zqy10dZqy10/Zqy10Zqy105a.jpg", "Zqy10Zqy10dZqy10/Zqy10Zqy107a.jpg", "Zqy10Zqy10dZqy10/Zqy10Zqy109a.jpg", "Zqy10Zqy10dZqy10/Zqy10Zqy1011a.jpg"], this.m_serverRes = ["Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1010b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1011b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1012b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1013b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1014b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1015b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1016b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1017b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1018b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1019b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1020b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1021b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy102b.jpg", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy103b.jpg", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy104b.jpg", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy105b.jpg", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy106b.jpg", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy101b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy108b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy109b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1024b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1025b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1027b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1029b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1028b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy10123b.png", "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy10199b.png"], this.copyRightUrl = "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy101b.png", this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.H$Ma = !1, this.H$Na = "", H$i.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var e = Laya.AtlasResourceManager;e.maxTextureCount = 6, e.atlasTextureWidth = e.atlasTextureHeight = 1024, e._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.H$Oa.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } }, "Zqy10Zqy1028b.png": { frame: { h: 25, idx: 0, w: 25, x: 444, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 2 } }, "Zqy10Zqy1029b.png": { frame: { h: 27, idx: 0, w: 26, x: 470, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = H$i.instance.requestWeb, Browser.window.imgMgrLoad = H$i.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.H$Oa();
  }return H$i.prototype.changeServerLoading = function (t) {
    H$i.instance.m_layer.visible = t;
  }, H$i.prototype.openAuthor = function () {
    H$i.instance.m_author || (H$i.instance.m_author = new AuthorizationPanel()), H$i.instance.m_author.parent || H$i.instance.m_layer.addChild(H$i.instance.m_author), H$i.instance.H$Pa();
  }, H$i.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, H$i.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, H$i.prototype.H$Qa = function () {
    H$i.instance.m_server || (H$i.instance.m_server = new SelectServerPanel(this.copyRightUrl)), H$i.instance.m_server.parent || H$i.instance.m_layer.addChild(H$i.instance.m_server), H$i.instance.H$Pa();
  }, H$i.prototype.openJumpView = function (t, e, i, a) {
    void 0 === a && (a = !1), this.H$Qa(), H$i.instance.m_server.openJumpView(t, e, i, a);
  }, H$i.prototype.openJumpTipsBtn = function (t, e, i, a, s) {
    this.H$Qa(), H$i.instance.m_server.showAgeTipsBtn(t, e, i, a, s);
  }, H$i.prototype.getCertificatePng = function () {
    window.sdkInitRes = window.sdkInitRes || {};var t = "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy10123b.png",
        e = "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy101b.png";return 1 == sdkInitRes.develop ? 0 == (PF_INFO.develop_certificate_pkg || 0) ? t : e : 0 == PF_INFO.release_certificate_pkg ? t : e;
  }, H$i.prototype.openServer = function (t, e, i) {
    var a = this;this.copyRightUrl = i || this.getCertificatePng();for (var i = function () {
      a.H$Qa(), t && e && t.call(e);
    }, s = !0, n = 0, o = this.m_serverRes; n < o.length; n++) {
      var r = o[n];if (null == Laya.Loader.getRes(r)) {
        s = !1;break;
      }
    }s ? i() : Laya.loader.load(this.m_serverRes, Handler.create(this, i));
  }, H$i.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, H$i.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, H$i.prototype.openLoading = function (t, e) {
    void 0 === t && (t = 0), e = e || this.getCertificatePng(), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      H$i.instance.m_loading || (H$i.instance.m_loading = new LoadingPanel(t, e)), H$i.instance.m_loading.parent || H$i.instance.m_layer.addChild(H$i.instance.m_loading), H$i.instance.H$Pa();
    }));
  }, H$i.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var t = 0, e = this.m_serverRes; t < e.length; t++) {
      var i = e[t];Laya.Loader.clearCache(H$i.instance, i), Laya.Loader.clearRes(i, !0);
    }for (var a = 0, s = this.m_loadingRes; a < s.length; a++) i = s[a], Laya.Loader.clearCache(H$i.instance, i), Laya.Loader.clearRes(i, !0);this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, H$i.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && H$i.instance.m_loading.showGetBtn();
  }, H$i.prototype.enterDefaultServer = function () {
    var t = Browser.window.PF_INFO.selectedServer;this.H$Ma || -1 == t.status || 0 == t.status || (this.H$Ma = !0, Browser.window.PF_INFO.selectedServer = t, req_server_check_ban(0, t.server_id));
  }, H$i.prototype.sendRecord = function () {
    var t = "";t = (t = (t = (t = (t = (t = (t = (t += "newRegister=" + Browser.window.PF_INFO.newRegister) + ", isPrelodServer=" + this.m_isPrelodServer) + ", SelectServerPanel=" + (null != H$i.instance.m_server)) + ", isPrelodLoading=" + this.m_isPrelodLoading) + ", LoadingPanel=" + (null != H$i.instance.m_loading)) + ", resMgrLoad=" + (Browser.window.resMgrLoad == H$i.instance.requestWeb)) + ", imgMgrLoad=" + (Browser.window.imgMgrLoad == H$i.instance.requestWeb)) + ", errUrls=" + H$i.instance.H$Na;for (var e = 0, i = this.m_serverRes; e < i.length; e++) t += ", " + (n = i[e]) + "=" + (null != Laya.Loader.getRes(n));for (var a = 0, s = this.m_loadingRes; a < s.length; a++) {
      var n;t += ", " + (n = s[a]) + "=" + (null != Laya.Loader.getRes(n));
    }var o = Browser.window.PF_INFO.selectedServer;o && (t = (t = (t += ", server_status=" + o.status) + (", server_id=" + o.server_id)) + (", server_name=" + o.server_name));o = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: t });console.error(o), this.H$Ra && this.H$Ra == t || (this.H$Ra = t, reqRecordError(o));
  }, H$i.prototype.H$Sa = function () {
    var t = Laya.stage,
        e = Math.floor(t.width),
        i = Math.floor(t.height);i / e < 1.7777778 ? (this.viewW = Math.floor(e / (i / 1280)), this.viewH = 1280, this.viewS = i / 1280) : (this.viewW = 720, this.viewH = Math.floor(i / (e / 720)), this.viewS = e / 720);i = Math.floor(t.width), e = Math.floor(t.height);e / i < 1.7777778 ? (this.viewW = Math.floor(i / (e / 1280)), this.viewH = 1280, this.viewS = e / 1280) : (this.viewW = 720, this.viewH = Math.floor(e / (i / 720)), this.viewS = i / 720), this.H$Pa();
  }, H$i.prototype.H$Pa = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, H$i.prototype.H$Oa = function () {
    if (Input.isInputting && Browser.onMobile) return i = parseInt(Input.inputContainer.style.top.replace("px", "")), t = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS, e = Browser.clientWidth / Render.canvas.width, 0 < (i = Browser.clientHeight - t * e - i) && (i = 0), void (Browser.container.style.top = i + "px");var t, e;Browser.container.style.top = "0px", t = Math.floor(Browser.width) + 1 & 2147483646, e = Math.floor(Browser.height) + 1 & 2147483646;var i = Laya.stage;3 == ENV || e < t ? (i.scaleMode = Laya.Stage.SCALE_NOSCALE, i.width = t, i.height = e) : (i.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, i.width = 840, i.height = Math.floor(e / (t / 840)) + 1 & 2147483646), this.H$Sa();
  }, H$i.prototype.requestWeb = function (t, e) {
    function H$c() {
      i.onload = null, i.onerror = null;
    }var i,
        a = t;(i = new Browser.window.Image()).onload = function () {
      H$c(), e(a, 200, i);
    }, i.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", a), H$i.instance.H$Na += a + "|", H$c(), e(a, 404, null);
    }, i.src = a, -1 == H$i.instance.m_serverRes.indexOf(a) && -1 == H$i.instance.m_loadingRes.indexOf(a) || Laya.Loader.keepCache(H$i.instance, a);
  }, H$i.prototype.H$Ta = function (t, e) {
    return -1 != t.indexOf(e, t.length - e.length);
  }, H$i;
}();!function (t) {
  function H$a() {
    var t = e.call(this) || this;return t.H$Ua = "#72441d", t.H$Va = "#263d7d", t.width = 274, t.height = 59, t.H$Wa = new Laya.Image(), t.addChild(t.H$Wa), t.H$Xa = new Laya.Label(), t.H$Xa.fontSize = 30, t.H$Xa.color = t.H$Va, t.addChild(t.H$Xa), t.H$Xa.centerX = 0, t.H$Xa.centerY = 0, t;
  }var e;t = t.H$d || (t.H$d = {}), e = Laya.View, __extends(H$a, e), H$a.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.H$y = Browser.window.PF_INFO, this.H$y.loadingType, this.addEvt();
  }, Object.defineProperty(H$a.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), H$a.prototype.setData = function (t) {
    this.H$Ya = t[0], this.H$Za = t[1], this.H$Xa.text = this.H$Ya.title, this.H$Xa.color = this.H$Za ? this.H$Ua : this.H$Va, this.H$Wa.skin = this.H$Za ? "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1025b.png" : "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1024b.png";
  }, H$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, H$a.prototype.addEvt = function () {}, H$a.prototype.rmEvts = function () {}, t.NoticeItem = H$a;
}(modules = modules || {}), function (t) {
  function H$a() {
    var t = e.call(this) || this;return t.H$Ua = "#72441d", t.H$Va = "#263d7d", t.width = 274, t.height = 59, t.H$Wa = new Laya.Image(), t.addChild(t.H$Wa), t.H$Xa = new Laya.Label(), t.H$Xa.fontSize = 30, t.H$Xa.color = t.H$Va, t.addChild(t.H$Xa), t.H$Xa.centerX = 0, t.H$Xa.centerY = 0, t;
  }var e;t = t.H$d || (t.H$d = {}), e = Laya.View, __extends(H$a, e), H$a.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.H$y = Browser.window.PF_INFO, this.H$y.loadingType, this.addEvt();
  }, Object.defineProperty(H$a.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), H$a.prototype.setData = function (t) {
    this.H$$a = t[0], this.H$Za = t[1], this.H$Xa.text = this.H$$a, this.H$Xa.color = this.H$Za ? this.H$Ua : this.H$Va, this.H$Wa.skin = this.H$Za ? "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1025b.png" : "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1024b.png";
  }, H$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, H$a.prototype.addEvt = function () {}, H$a.prototype.rmEvts = function () {}, t.PrivacyItem = H$a;
}(modules = modules || {}), function (t) {
  function H$a() {
    var t = e.call(this) || this;return t.width = 192, t.height = 70, t.H$Wa = new Laya.Image(), t.addChild(t.H$Wa), t.H$_a = new Laya.Label(), t.H$_a.fontSize = 28, t.H$_a.color = t.H$S, t.addChild(t.H$_a), t.H$_a.centerX = 0, t.H$_a.centerY = 0, t.H$oa = new Laya.Label(), t.H$oa.fontSize = 22, t.H$oa.color = t.H$S, t.addChild(t.H$oa), t.H$oa.centerX = 0, t.H$oa.y = 11, t.H$pa = new Laya.Label(), t.H$pa.fontSize = 26, t.H$pa.color = t.H$S, t.addChild(t.H$pa), t.H$pa.centerX = 0, t.H$pa.y = 39, t;
  }var e;t = t.H$d || (t.H$d = {}), e = Laya.View, __extends(H$a, e), H$a.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.H$y = Browser.window.PF_INFO;var t = this.H$y.loadingType;this.H$S = 1 != t && 2 != t && 3 == t ? "#763042" : "#263d7d", this.addEvt();
  }, Object.defineProperty(H$a.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), H$a.prototype.setData = function (t) {
    this.H$Ya = t;var e = this.H$Ya.id,
        i = this.H$Ya.name;var a, s;this.H$_a.visible = this.H$oa.visible = this.H$pa.visible = !1, -1 == e || -2 == e ? (this.H$_a.visible = !0, this.H$_a.text = i) : (e = "1-10\u670d", (s = (a = i).match("[0-9]{1,}")) && null != s.index && (a = i.slice(0, s.index), e = i.slice(s.index)), this.H$oa.visible = this.H$pa.visible = !0, this.H$oa.text = a, this.H$pa.text = e), this.H$Wa.skin = t.select ? "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1014b.png" : "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1015b.png";
  }, H$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, H$a.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, H$a.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, H$a.prototype.clkHdler = function () {
    this.H$Ya && this.H$Ya.callBack && this.H$Ya.callBack(this.H$Ya.index);
  }, t.SelectLeftListItem = H$a;
}(modules = modules || {}), function (t) {
  function H$a() {
    var t = e.call(this) || this;return t.width = 358, t.height = 70, t.H$Wa = new Laya.Image("Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1016b.png"), t.addChild(t.H$Wa), t.H$Wa.graphics.drawRect(0, 0, t.width, t.height, "#00sasd"), t.H$ab = new Laya.Image(), t.H$ab.centerY = 0, t.H$ab.x = 7, t.addChild(t.H$ab), t.H$_a = new Laya.Label(), t.H$_a.fontSize = 24, t.H$_a.color = t.H$S, t.H$_a.x = 56, t.H$_a.centerY = 0, t.addChild(t.H$_a), t.H$bb = new Laya.Label(), t.H$bb.fontSize = 24, t.H$bb.color = t.H$S, t.H$bb.x = 246, t.H$bb.centerY = 0, t.addChild(t.H$bb), t.H$cb = new Laya.Image(), t.H$cb.top = 0, t.H$cb.right = 0, t.addChild(t.H$cb), t.H$db = new Laya.Label(), t.H$db.fontSize = 20, t.H$db.color = "#ffffff", t.H$db.x = 225, t.H$db.y = 46, t.addChild(t.H$db), t;
  }var e;t = t.H$d || (t.H$d = {}), e = Laya.View, __extends(H$a, e), H$a.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.H$y = Browser.window.PF_INFO;var t = this.H$y.loadingType;this.H$S = 1 != t && 2 != t && 3 == t ? "#763042" : "#34267d", this.addEvt();
  }, Object.defineProperty(H$a.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), H$a.prototype.setData = function (t) {
    this.H$Ya = t;var t = this.H$Ya.status,
        e = this.H$Ya.server_name;this.H$ab.skin = this.getStatusSrc(this.H$Ya), this.H$_a.color = -1 === t ? "#d50000" : 0 === t ? "#49575a" : this.H$S, this.H$_a.text = e, this.H$bb.text = -1 === t ? "\u7ef4\u62a4\u4e2d" : 0 === t ? "\u672a\u5f00\u670d" : "\u5df2\u5f00\u670d";e = 1 == this.H$Ya.is_recommend || 3 == this.H$Ya.is_recommend;(this.H$cb.visible = e) && (this.H$cb.skin = "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy10199b.png"), this.H$db.text = -1 == this.H$Ya.status && this.H$Ya.maintain_time ? this.H$Ya.maintain_time : "";
  }, H$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, H$a.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, H$a.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, H$a.prototype.clkHdler = function () {
    this.H$Ya && this.H$Ya.callBack && this.H$Ya.callBack(this.H$Ya);
  }, H$a.prototype.getStatusSrc = function (t) {
    var e = t.status,
        t = t.is_recommend,
        i = "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1019b.png";return 1 !== e && 2 !== e || 1 !== t && 3 !== t ? 1 !== e && 2 !== e || 2 !== t ? -1 !== e && 0 !== e || (i = "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1020b.png") : i = "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1019b.png" : i = "Zqy10Zqy10lgrZqy10Zqy10/Zqy10Zqy1018b.png", i;
  }, t.SelectRightListItem = H$a;
}(modules = modules || {}), window.ServerLoading = ServerLoading;