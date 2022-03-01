"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
  };return function (t, e) {
    function q$a() {
      this.constructor = t;
    }i(t, e), t.prototype = null === e ? Object.create(e) : (q$a.prototype = e.prototype, new q$a());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (t) {
  __extends(q$_, i = View), q$_.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.q$S.uiView);
  }, q$_.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "qlgqq/q2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "qlgqq/q6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "qlgqq/q3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "qlgqq/q4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "qlgqq/q5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] };var e = q$_;function q$_() {
    return i.call(this) || this;
  }var i;t.q$S = e;
}(ui = ui || {}), function (t) {
  __extends(q$_, i = View), q$_.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.q$_.uiView);
  }, q$_.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "qlgqq/q1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "qqdiq/q13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "qqdiq/q14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "qqdiq/q16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "qqdiq/q17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "qqdiq/q20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "qqdiq/q19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "qqdiq/q18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "qqdiq/q18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "qqdiq/q1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }] };var e = q$_;function q$_() {
    return i.call(this) || this;
  }var i;t.q$_ = e;
}(ui = ui || {}), function (t) {
  __extends(q$_, i = View), q$_.prototype.createChildren = function () {
    View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), View.regComponent("Text", laya.display.Text), i.prototype.createChildren.call(this), this.createView(t.q$a.uiView);
  }, q$_.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "qlgqq/q2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "qlgqq/q6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "qlgqq/q3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "qlgqq/q4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "qlgqq/q5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "qlgqq/q21b.png", centerX: 0 } }, { type: "Image", props: { y: 1102, var: "imgCheatTip", skin: "qlgqq/q27b.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 930, x: 162, var: "hotImage", skin: "qlgqq/q18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "qlgqq/q1b.png", centerX: 0, bottom: 30 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "qlgqq/q12b.png", name: "enterBtn", centerX: 0 } }, { type: "Image", props: { x: 196, visible: !1, var: "privacyToggle", skin: "qlgqq/q29b.png", bottom: 4 } }, { type: "Label", props: { y: 640, x: 0, width: 720, var: "txtTip", valign: "middle", text: "\u63d0\u793a\u5185\u5bb9", strokeColor: "#ffffff", stroke: 2, height: 32, fontSize: 32, color: "#ff0000", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }, { type: "HTMLDivElement", props: { y: 1255, x: 256, visible: !1, var: "privacyTip", height: 16 } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "qlgqq/q11b.png" } }, { type: "Image", props: { y: 257, x: 594, visible: !1, var: "privacyBtn", skin: "qlgqq/q13b.png", name: "privacyBtn" } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "qlgqq/q8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "qlgqq/q10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "mNoticeBg", skin: "qlgqq/q8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "qlgqq/q10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "qlgqq/q25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "privacyBg", skin: "qlgqq/q8b.png", name: "privacyBg", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "privacyClose", skin: "qlgqq/q10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "privacyClose2", stateNum: 1, skin: "qlgqq/q25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTabPrivacy", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "privacyTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "privacyPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "privacyContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "qlgqq/q9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "qlgqq/q17b.png" } }] }, { type: "Box", props: { width: 720, visible: !1, var: "jumpBg", mouseThrough: !1, height: 1280, centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 143, x: 33, skin: "qlgqq/q8b.png", centerY: 0, centerX: 0 } }, { type: "Button", props: { y: 1047, x: 223, var: "btnJump", stateNum: 1, skin: "qlgqq/q25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u8df3\u8f6c" } }, { type: "Label", props: { y: 215, x: 249, width: 234, var: "jumpTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 285, x: 94, width: 545, var: "jumpPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "jumpContent", height: 733 } }] }] }] };var e = q$_;function q$_() {
    return i.call(this) || this;
  }var i;t.q$a = e;
}(ui = ui || {}), function (t) {
  function q$S() {
    return e.call(this) || this;
  }var e;t = t.q$R || (t.q$R = {}), e = ui.q$S, __extends(q$S, e), q$S.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
  }, q$S.prototype.addEvt = function () {
    this.on(Laya.Event.CLICK, this, this.q$J);
  }, q$S.prototype.rmEvts = function () {
    this.off(Laya.Event.CLICK, this, this.q$J);
  }, q$S.prototype.onOpened = function () {
    this.q$V = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
  }, q$S.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, q$S.prototype.q$J = function () {
    1e4 < Date.now() - this.q$V && (this.q$V -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
  }, t.AuthorizationPanel = q$S;
}(modules = modules || {}), function (t) {
  var e, i, s, n;function q$z() {
    var t = o.call(this) || this;return t.q$k = new i(), t.addChild(t.q$k), t.q$z = null, t.q$b = [], t.q$H = !1, t.q$L = 0, t.q$C = !0, t.q$G = 6, t.q$t = !1, t.on(e.DISPLAY, t, t.q$o), t.on(e.UNDISPLAY, t, t.q$$), t;
  }var o;t = t.q$W || (t.q$W = {}), e = Laya.Event, i = Laya.Image, s = Laya.Component, n = Laya.Loader, __extends(q$z, o = s), q$z.create = function (t, e, i, s, o, n, a) {
    void 0 === s && (s = 0), void 0 === o && (o = 6), void 0 === n && (n = !0), void 0 === a && (a = !1);var r = new q$z();return r.skin(e, i, s), r.durFrm = o, r.loop = n, r.atHide = a, t && t.addChild(r), r;
  }, q$z.play = function (t) {
    t && (t.visible = !0, t.play());
  }, q$z.stop = function (t) {
    t && (t.visible = !1, t.stop());
  }, q$z.prototype.destroy = function (t) {
    Laya.timer.clear(this, this.q$F), this.off(e.DISPLAY, this, this.q$o), this.off(e.UNDISPLAY, this, this.q$$), o.prototype.destroy.call(this, t);
  }, q$z.prototype.q$o = function () {}, q$z.prototype.q$$ = function () {}, q$z.prototype.skin = function (t, e, i) {
    if (this.q$z != t) {
      this.q$z = t, this.q$b = [];for (var s = 0, o = i; o <= e; o++) this.q$b[s++] = t + "/" + o + ".png";i = n.getRes(this.q$b[0]);i && (this.width = i.sourceWidth, this.height = i.sourceHeight), this.q$F();
    }
  }, Object.defineProperty(q$z.prototype, "atHide", { get: function () {
      return this.q$t;
    }, set: function (t) {
      this.q$t = t;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(q$z.prototype, "durFrm", { set: function (t) {
      this.q$G != t && (this.q$G = t, this.q$H && (Laya.timer.clear(this, this.q$F), Laya.timer.loop(this.q$G * (1e3 / 60), this, this.q$F)));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(q$z.prototype, "loop", { set: function (t) {
      this.q$C = t;
    }, enumerable: !0, configurable: !0 }), q$z.prototype.play = function () {
    this.q$H && this.stop(), this.q$H = !0, this.q$L = 0, Laya.timer.loop(this.q$G * (1e3 / 60), this, this.q$F), this.q$F();
  }, q$z.prototype.stop = function () {
    this.q$H = !1, this.q$L = 0, this.q$F(), Laya.timer.clear(this, this.q$F);
  }, q$z.prototype.pause = function () {
    this.q$H && (this.q$H = !1, Laya.timer.clear(this, this.q$F));
  }, q$z.prototype.resume = function () {
    this.q$H || (this.q$H = !0, Laya.timer.loop(this.q$G * (1e3 / 60), this, this.q$F), this.q$F());
  }, Object.defineProperty(q$z.prototype, "isPlay", { get: function () {
      return this.q$H;
    }, enumerable: !0, configurable: !0 }), q$z.prototype.q$F = function () {
    this.q$b && 0 != this.q$b.length && (this.q$k.skin = this.q$b[this.q$L], this.q$H && (this.q$L++, this.q$L == this.q$b.length && (this.q$C ? this.q$L = 0 : (Laya.timer.clear(this, this.q$F), this.q$H = !1, this.q$t && (this.visible = !1), this.event(e.COMPLETE)))));
  }, t.PanelEff = q$z;
}(modules = modules || {}), function (t) {
  var e, i;function q$S(t) {
    void 0 === t && (t = 0);var e = s.call(this) || this;return e.q$T = { bgImgSkin: "qqdiq/q3a.jpg", topImgSkin: "qqdiq/q10a.jpg", btmImgSkin: "qqdiq/q4a.jpg", leftImgSkin: "qqdiq/q6a.jpg", rightImgSkin: "qqdiq/q8a.jpg", loadingBarBgSkin: "qqdiq/q13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.q$D = { bgImgSkin: "qqdiq/q12a.jpg", topImgSkin: "qqdiq/q11a.jpg", btmImgSkin: "qqdiq/q5a.jpg", leftImgSkin: "qqdiq/q7a.jpg", rightImgSkin: "qqdiq/q9a.jpg", loadingBarBgSkin: "qqdiq/q15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.q$j = 0, e.q$Q(1 == t ? e.q$D : e.q$T), e;
  }var s;e = t.q$R || (t.q$R = {}), i = t.q$W.PanelEff, s = ui.q$_, __extends(q$S, s), q$S.prototype.initialize = function () {
    var t;s.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.q$m = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.q$m && (t = this.q$m.loadingType, this.loadingTips.color = 1 != t && (2 == t || 101 == t) ? "#000000" : "#f2ffb5"), this.q$q = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
  }, q$S.prototype.toAllProgress = function (t) {
    var e = this;if (-1 === t) return e.q$j = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);var i;-2 !== t ? (e.q$j < .9 ? e.q$j += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : e.q$j < 1 && (e.q$j += 1e-4), .9999 < e.q$j && (e.q$j = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
      .9 < e.q$j && toAllProgress(-1);
    })), i = 590 * (t = e.q$j), e.q$j = e.q$j > t ? e.q$j : t, e.loadingBar.width = i, i = e.loadingBar.x + i, e.loadingImg2.x = i - 15, 364 <= i ? (e.loadingImg1.visible = !0, e.loadingImg1.x = i - 202) : e.loadingImg1.visible = !1, e.percentageTips.text = (100 * t >> 0) + "%", e.q$j < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress)) : Laya.timer.clear(this, this.toAllProgress);
  }, q$S.prototype.toProgress = function (t, e, i) {
    var s = 590 * (t = 1 < t ? 1 : t);this.q$j = this.q$j > t ? this.q$j : t, this.loadingBar.width = s;s = this.loadingBar.x + s;this.loadingImg2.x = s - 15, 364 <= s ? (this.loadingImg1.visible = !0, this.loadingImg1.x = s - 202) : this.loadingImg1.visible = !1, this.percentageTips.text = (100 * t >> 0) + "%", this.loadingTips.text = e;for (var o = i - 1, n = 0; n < this.q$q.length; n++) this.q$q[n].skin = n < o ? "qqdiq/q20a.png" : o === n ? "qqdiq/q19a.png" : "qqdiq/q18a.png";
  }, q$S.prototype.onOpened = function () {
    this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.q$m.lastVersion + "      \u7248\u672c\uff1a" + this.q$m.wxVersion, this.showGetBtn();
  }, q$S.prototype.close = function (t) {
    this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.q$N), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.q$n);
  }, q$S.prototype.resetWinFun = function () {
    Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
  }, q$S.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.resetWinFun(), s.prototype.destroy.call(this, t);
  }, q$S.prototype.showGetBtn = function () {
    this.q$m.showGetBtn && 1 == this.q$m.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "qqdiq/q1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.q$n), this.q$l(), this.q$B(!0));
  }, q$S.prototype.q$n = function () {
    this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "qqdiq/q2a.png", this.q$I(), this.q$B(!1));
  }, q$S.prototype.q$Q = function (t) {
    this.bgImg.skin = t.bgImgSkin, this.topImg.skin = t.topImgSkin, this.btmImg.skin = t.btmImgSkin, this.leftImg.skin = t.leftImgSkin, this.rightImg.skin = t.rightImgSkin, this.copyRightImg.bottom = t.copyRightImgBottom, this.processBox1.y = t.processBox1Y, this.processBox2.y = t.processBox2Y, this.loadingBarBg.skin = t.loadingBarBgSkin, this.loadingTips.fontSize = t.loadingTipsSize, this.getTipsBtn.visible = this.q$m.showGetBtn && 1 == this.q$m.showGetBtn, this.getTipsBtn.visible ? this.q$l() : this.q$I(), this.q$B(this.getTipsBtn.visible);
  }, q$S.prototype.q$l = function () {
    this.q$A || (this.q$A = i.create(this.getTipsBtn, "qfq", 4, 0, 12), this.q$A.pos(161, 106), this.q$A.scale(1.14, 1.15)), i.play(this.q$A);
  }, q$S.prototype.q$I = function () {
    this.q$A && i.stop(this.q$A);
  }, q$S.prototype.q$B = function (t) {
    Laya.timer.clear(this, this.q$N), t ? (this.q$X = 9, this.txtGetTm.visible = !0, this.q$N(), Laya.timer.loop(1e3, this, this.q$N)) : this.txtGetTm.visible = !1;
  }, q$S.prototype.q$N = function () {
    0 < this.q$X ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.q$X + "s)", this.q$X--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.q$N), this.q$n());
  }, e.LoadingPanel = q$S;
}(modules = modules || {}), function (t) {
  var e, i, s;function q$S() {
    var t = o.call(this) || this;return t.q$h = 0, t.q$u = "multi_notice_key", t.q$K = 0, t.q$P = 0, t.q$M = "privacy_key", t.q$r = !0, t.q$e = 0, t;
  }var o;e = t.q$R || (t.q$R = {}), i = Laya.List, s = Laya.Event, o = ui.q$a, __extends(q$S, o), q$S.prototype.initialize = function () {
    o.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, ServerLoading.instance.preloadServer(), this.q$m = Browser.window.PF_INFO, this.q$g = new i(), this.q$g.vScrollBarSkin = "", this.q$g.itemRender = e.SelectLeftListItem, this.q$g.top = 5, this.q$g.repeatX = 1, this.q$g.spaceY = 5, this.q$g.width = this.leftListBox.width, this.q$g.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.q$g), this.q$x = new i(), this.q$x.vScrollBarSkin = "", this.q$x.itemRender = e.SelectRightListItem, this.q$x.top = 5, this.q$x.repeatX = 1, this.q$x.spaceY = 5, this.q$x.width = this.rightListBox.width, this.q$x.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.q$x), this.q$s = new i(), this.q$s.hScrollBarSkin = "", this.q$s.itemRender = e.NoticeItem, this.q$s.repeatY = 1, this.q$s.width = this.boxTab.width, this.q$s.height = this.boxTab.height, this.boxTab.addChild(this.q$s), this.q$U = new i(), this.q$U.hScrollBarSkin = "", this.q$U.itemRender = e.PrivacyItem, this.q$U.repeatY = 1, this.q$U.width = this.boxTab.width, this.q$U.height = this.boxTab.height, this.boxTabPrivacy.addChild(this.q$U);var t = this.q$m.loadingType;this.q$f = 1 == t || 2 == t || 3 == t || 101 == t ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.q$Y = [], this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.privacyContent.color = "#212942", this.privacyContent.style.fontSize = 26, this.privacyContent.style.lineHeight = 28, this.privacyContent.mouseEnabled = !1, this.privacyTip.color = "#ffffff", this.privacyTip.style.fontSize = 18, this.privacyTip.style.lineHeight = 18, this.privacyTip.style.stroke = 2, this.privacyTip.style.strokeColor = "#000000", this.privacyTip.style.wordWrap = !1, this.jumpContent.color = "#212942", this.jumpContent.style.fontSize = 26, this.jumpContent.style.lineHeight = 28, this.jumpContent.mouseEnabled = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
  }, q$S.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), this.q$i(), this.q$Z(), this.q$p(), this.q$c(), this.q$g && (this.q$g.removeSelf(), this.q$g.destroy(), this.q$g = null), this.q$x && (this.q$x.removeSelf(), this.q$x.destroy(), this.q$x = null), this.q$s && (this.q$s.removeSelf(), this.q$s.destroy(), this.q$s = null), this.q$U && (this.q$U.removeSelf(), this.q$U.destroy(), this.q$U = null), Laya.timer.clear(this, this.q$y), o.prototype.destroy.call(this, t);
  }, q$S.prototype.addEvt = function () {
    this.bgImg.on(Laya.Event.CLICK, this, this.q$E), this.enterBtn.on(Laya.Event.CLICK, this, this.q$O), this.selectServer.on(Laya.Event.CLICK, this, this.q$w), this.selectServer.on(Laya.Event.CLICK, this, this.q$w), this.closeBg.on(Laya.Event.CLICK, this, this.q$v), this.noticeBtn.on(Laya.Event.CLICK, this, this.q$d), this.noticeClose.on(Laya.Event.CLICK, this, this.q$SS), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.q$_S), this.mNoticeClose.on(Laya.Event.CLICK, this, this.q$aS), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.q$aS), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.q$RS), this.privacyBtn.on(Laya.Event.CLICK, this, this.q$JS), this.privacyClose.on(Laya.Event.CLICK, this, this.q$VS), this.privacyClose2.on(Laya.Event.CLICK, this, this.q$VS), this.privacyPanel.on(Laya.Event.MOUSE_DOWN, this, this.q$WS), this.privacyToggle.on(Laya.Event.CLICK, this, this.q$kS), this.privacyTip.on(Laya.Event.LINK, this, this.q$zS), this.btnJump.on(Laya.Event.CLICK, this, this.q$bS), this.jumpPanel.on(Laya.Event.MOUSE_DOWN, this, this.q$HS), this.q$s.selectEnable = !0, this.q$s.selectHandler = Laya.Handler.create(this, this.q$LS, null, !1), this.q$U.selectEnable = !0, this.q$U.selectHandler = Laya.Handler.create(this, this.q$CS, null, !1);
  }, q$S.prototype.rmEvts = function () {
    this.bgImg.off(Laya.Event.CLICK, this, this.q$E), this.enterBtn.off(Laya.Event.CLICK, this, this.q$O), this.selectServer.off(Laya.Event.CLICK, this, this.q$w), this.selectServer.off(Laya.Event.CLICK, this, this.q$w), this.closeBg.off(Laya.Event.CLICK, this, this.q$v), this.noticeBtn.off(Laya.Event.CLICK, this, this.q$d), this.noticeClose.off(Laya.Event.CLICK, this, this.q$SS), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.q$_S), this.mNoticeClose.off(Laya.Event.CLICK, this, this.q$aS), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.q$aS), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.q$RS), this.privacyBtn.off(Laya.Event.CLICK, this, this.q$JS), this.privacyClose.off(Laya.Event.CLICK, this, this.q$VS), this.privacyClose2.off(Laya.Event.CLICK, this, this.q$VS), this.privacyPanel.off(Laya.Event.MOUSE_DOWN, this, this.q$WS), this.privacyToggle.off(Laya.Event.CLICK, this, this.q$kS), this.privacyTip.off(Laya.Event.LINK, this, this.q$zS), this.btnJump.off(Laya.Event.CLICK, this, this.q$bS), this.jumpPanel.off(Laya.Event.MOUSE_DOWN, this, this.q$HS), this.q$s.selectEnable = !1, this.q$s.selectHandler = null, this.q$U.selectEnable = !1, this.q$U.selectHandler = null;
  }, q$S.prototype.onOpened = function () {
    var s = this;this.q$V = Date.now(), this.q$r = !0, this.q$GS = this.q$m.selectedServer.server_id, this.q$tS(this.q$m.selectedServer), this.q$g.dataSource = this.q$m.groupList, this.q$w(), req_multi_server_notice(4, this.q$m.pkgName, this.q$m.selectedServer.server_id, this.q$oS.bind(this)), Laya.timer.frameOnce(1, this, function () {
      s.q$$S = s.q$m.privacy_data && s.q$m.privacy_data.list ? s.q$m.privacy_data.list : [], s.q$FS = null != s.q$m.privacy_login_pkg ? s.q$m.privacy_login_pkg : 0;var t = "1" == localStorage.getItem(s.q$M),
          e = 0 != PF_INFO.privacy_save_pkg,
          i = 0 == s.q$FS || 1 == s.q$FS;s.q$TS = e && t || i, s.q$DS();
    }), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.q$m.lastVersion + "      \u7248\u672c\uff1a" + this.q$m.wxVersion, this.serverName.color = this.selServer.color = this.q$f, this.imgCheatTip.visible = 1 == this.q$m.anti_cheat_pkg, this.txtTip.visible = !1;
  }, q$S.prototype.preload = function () {}, q$S.prototype.q$E = function () {
    this.q$TS ? 1e4 < Date.now() - this.q$V && (this.q$V -= 2e3, ServerLoading.instance.enterDefaultServer()) : this.q$jS("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
  }, q$S.prototype.q$O = function () {
    this.q$TS ? this.q$QS(this.q$m.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.q$m.selectedServer, req_server_check_ban(0, this.q$m.selectedServer.server_id)) : this.q$jS("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
  }, q$S.prototype.q$w = function () {
    this.q$m.hasGroupReq ? this.listBg.visible = !0 : (this.q$m.hasGroupReq = !0, req_server_group(0));
  }, q$S.prototype.q$v = function () {
    this.listBg.visible = !1;
  }, q$S.prototype.q$d = function () {
    this.q$mS();
  }, q$S.prototype.q$aS = function () {
    this.mNoticeBg.visible = !1;
  }, q$S.prototype.q$SS = function () {
    this.noticeBg.visible = !1;
  }, q$S.prototype.q$JS = function () {
    this.q$qS();
  }, q$S.prototype.q$VS = function () {
    this.privacyBg.visible = !1;
  }, q$S.prototype.q$kS = function () {
    this.q$TS = !this.q$TS, this.q$TS && localStorage.setItem(this.q$M, "1"), this.privacyToggle.skin = "qlgqq/" + (this.q$TS ? "q29b.png" : "q28b.png");
  }, q$S.prototype.q$zS = function (t) {
    this.q$qS(Number(t));
  }, q$S.prototype.q$bS = function () {
    Browser.window.forceJumpMiniGame();
  }, q$S.prototype.q$_S = function () {
    this.q$h = this.noticeContent.mouseY, Laya.stage.on(s.MOUSE_MOVE, this, this.q$NS), Laya.stage.on(s.MOUSE_UP, this, this.q$i), Laya.stage.on(s.MOUSE_OUT, this, this.q$i);
  }, q$S.prototype.q$NS = function () {
    var t;this.noticeContent && (t = this.q$h - this.noticeContent.mouseY, this.noticeContent.scrollY += t, this.q$h = this.noticeContent.mouseY);
  }, q$S.prototype.q$i = function () {
    Laya.stage.off(s.MOUSE_MOVE, this, this.q$NS), Laya.stage.off(s.MOUSE_UP, this, this.q$i), Laya.stage.off(s.MOUSE_OUT, this, this.q$i);
  }, q$S.prototype.q$RS = function () {
    this.q$K = this.mNoticePanel.mouseY, Laya.stage.on(s.MOUSE_MOVE, this, this.q$nS), Laya.stage.on(s.MOUSE_UP, this, this.q$Z), Laya.stage.on(s.MOUSE_OUT, this, this.q$Z);
  }, q$S.prototype.q$nS = function () {
    var t;this.mNoticeContent && (t = this.q$K - this.mNoticePanel.mouseY, this.mNoticeContent.y -= t, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.q$K = this.mNoticePanel.mouseY);
  }, q$S.prototype.q$Z = function () {
    Laya.stage.off(s.MOUSE_MOVE, this, this.q$nS), Laya.stage.off(s.MOUSE_UP, this, this.q$Z), Laya.stage.off(s.MOUSE_OUT, this, this.q$Z);
  }, q$S.prototype.q$WS = function () {
    this.q$P = this.privacyPanel.mouseY, Laya.stage.on(s.MOUSE_MOVE, this, this.q$lS), Laya.stage.on(s.MOUSE_UP, this, this.q$p), Laya.stage.on(s.MOUSE_OUT, this, this.q$p);
  }, q$S.prototype.q$lS = function () {
    var t;this.privacyContent && (t = this.q$P - this.privacyPanel.mouseY, this.privacyContent.y -= t, this.privacyPanel.height < this.privacyContent.contextHeight ? this.privacyContent.y < this.privacyPanel.height - this.privacyContent.contextHeight ? this.privacyContent.y = this.privacyPanel.height - this.privacyContent.contextHeight : 0 < this.privacyContent.y && (this.privacyContent.y = 0) : this.privacyContent.y = 0, this.q$P = this.privacyPanel.mouseY);
  }, q$S.prototype.q$p = function () {
    Laya.stage.off(s.MOUSE_MOVE, this, this.q$lS), Laya.stage.off(s.MOUSE_UP, this, this.q$p), Laya.stage.off(s.MOUSE_OUT, this, this.q$p);
  }, q$S.prototype.q$HS = function () {
    this.q$e = this.jumpPanel.mouseY, Laya.stage.on(s.MOUSE_MOVE, this, this.q$BS), Laya.stage.on(s.MOUSE_UP, this, this.q$c), Laya.stage.on(s.MOUSE_OUT, this, this.q$c);
  }, q$S.prototype.q$BS = function () {
    var t;this.jumpContent && (t = this.q$e - this.jumpPanel.mouseY, this.jumpContent.y -= t, this.jumpPanel.height < this.jumpContent.contextHeight ? this.jumpContent.y < this.jumpPanel.height - this.jumpContent.contextHeight ? this.jumpContent.y = this.jumpPanel.height - this.jumpContent.contextHeight : 0 < this.jumpContent.y && (this.jumpContent.y = 0) : this.jumpContent.y = 0, this.q$e = this.jumpPanel.mouseY);
  }, q$S.prototype.q$c = function () {
    Laya.stage.off(s.MOUSE_MOVE, this, this.q$BS), Laya.stage.off(s.MOUSE_UP, this, this.q$c), Laya.stage.off(s.MOUSE_OUT, this, this.q$c);
  }, q$S.prototype.q$LS = function () {
    if (this.q$s.dataSource) {
      for (var t, e = 0; e < this.q$s.dataSource.length; e++) {
        var i = this.q$s.dataSource[e];i[1] = e == this.q$s.selectedIndex, e == this.q$s.selectedIndex && (t = i[0]);
      }this.mNoticeTitle.text = t && t.title ? t.title : "", this.mNoticeContent.innerHTML = t && t.content ? t.content : "", this.mNoticeContent.y = 0;
    }
  }, q$S.prototype.q$CS = function () {
    var t = this.q$U.dataSource;if (t) {
      for (var e = 0; e < t.length; e++) t[e][1] = e == this.q$U.selectedIndex;var i = this.q$$S[this.q$U.selectedIndex];i && i.content && (i.content = i.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "")), this.privacyTitle.text = i && i.title ? i.title : "\u6807\u9898", this.privacyContent.innerHTML = i && i.content ? i.content : "\u52a0\u8f7d\u4e2d...", this.privacyContent.y = 0;
    }
  }, q$S.prototype.q$tS = function (t) {
    this.serverName.text = -1 === t.status ? t.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === t.status ? t.server_name + "(\u5f85\u5f00\u670d)" : t.server_name, this.serverName.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.q$f, this.hotImage.skin = this.getStatusSrc(t.status), this.q$m.cdn = t.cdn || "", this.q$m.selectedServer = t, this.noticeBtn.visible = !0;
  }, q$S.prototype.q$IS = function (t) {
    this.showGroupList(t);
  }, q$S.prototype.q$AS = function (t) {
    this.q$tS(t), this.listBg.visible = !1;
  }, q$S.prototype.showGroupList = function (t) {
    if (void 0 === t && (t = 0), this.parent) {
      var e = this.q$m.groupList;if (e && 0 !== e.length) {
        for (var i = e.length, s = 0; s < i; s++) e[s].callBack = this.q$IS.bind(this), e[s].select = s == t, e[s].index = s;var o = (this.q$g.array = e)[t].id;this.q$m.serverList[o] ? this.showServerList(o) : this.q$m.hasServerReq || (this.q$m.hasServerReq = !0, -1 == o ? req_server_owner(0) : -2 == o ? req_recommend_server_list(0) : req_server_list(0, o));
      }
    }
  }, q$S.prototype.showServerList = function (t) {
    if (this.parent && this.q$m.serverList[t]) {
      for (var e = this.q$m.serverList[t], i = e.length, s = 0; s < i; s++) e[s].callBack = this.q$AS.bind(this);this.q$x.array = e;
    }
  }, q$S.prototype.q$QS = function (t) {
    return -1 == t.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != t.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
  }, q$S.prototype.getStatusSrc = function (t) {
    var e = "";return 2 === t ? e = "qlgqq/q18b.png" : 1 === t ? e = "qlgqq/q19b.png" : -1 !== t && 0 !== t || (e = "qlgqq/q20b.png"), e;
  }, q$S.prototype.q$oS = function (t) {
    console.log("onMultiNoticeCallback, param = ", t);var e = Date.now() / 1e3,
        i = localStorage.getItem(this.q$u),
        s = !(this.q$Y = []);if ("success" == t.state) for (var o in t.data) {
      var o = t.data[o],
          n = e < o.end_time,
          a = 1 == o.pop_type,
          r = 2 == o.pop_type && o.key + "" != i;!s && n && (a || r) && (s = !0), n && this.q$Y.push(o), r && localStorage.setItem(this.q$u, o.key + "");
    }this.q$Y.sort(function (t, e) {
      return t.login_id - e.login_id;
    }), console.log("onMultiNoticeCallback, datas = ", this.q$Y), s && this.q$mS();
  }, q$S.prototype.q$mS = function () {
    if (this.q$s) {
      if (this.q$Y) {
        this.q$s.x = 2 < this.q$Y.length ? 0 : (this.boxTab.width - 274 * this.q$Y.length) / 2;for (var t = [], e = 0; e < this.q$Y.length; e++) {
          var i = this.q$Y[e];t.push([i, e == this.q$s.selectedIndex]);
        }0 < (this.q$s.dataSource = t).length ? (this.q$s.selectedIndex = 0, this.q$s.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.q$Y.length <= 1, this.boxTab.visible = 1 < this.q$Y.length;
      }this.mNoticeBg.visible = !0;
    }
  }, q$S.prototype.q$XS = function (t) {
    if (!this.destroyed) {
      if (console.log("p_onPrivacyCallback, param = ", t), "success" == t.state) for (var e in t.data) {
        var e = Number(e),
            i = t.data[e];this.q$$S && this.q$$S[e] && (this.q$$S[e].content = i.content);
      }this.q$CS();
    }
  }, q$S.prototype.q$DS = function () {
    for (var t = "", e = 0; e < this.q$$S.length; e++) t += '<a href="' + e + '" style="color:#14ff28;text-decoration:none">' + this.q$$S[e].title + "</a>", e < this.q$$S.length - 1 && (t += "\u3001");this.privacyTip.innerHTML = "\u6211\u5df2\u7ecf\u8be6\u7ec6\u9605\u8bfb\u5e76\u540c\u610f" + t, this.privacyToggle.skin = "qlgqq/" + (this.q$TS ? "q29b.png" : "q28b.png"), this.privacyTip.x = (720 - this.privacyTip.width) / 2, this.privacyToggle.x = this.privacyTip.x - 30, this.privacyBtn.visible = 0 < this.q$$S.length, this.privacyToggle.visible = this.privacyTip.visible = 0 < this.q$$S.length && 0 != this.q$FS;
  }, q$S.prototype.q$qS = function (t) {
    if (void 0 === t && (t = 0), this.q$U) {
      if (this.q$$S) {
        this.q$U.x = 2 < this.q$$S.length ? 0 : (this.boxTab.width - 274 * this.q$$S.length) / 2;for (var e = [], i = 0; i < this.q$$S.length; i++) {
          var s = this.q$$S[i],
              s = s && s.title ? s.title : "",
              o = i == this.q$U.selectedIndex;e.push([s, o]);
        }0 < (this.q$U.dataSource = e).length ? ((t = t < 0 ? 0 : t) > e.length - 1 && (t = 0), this.q$U.selectedIndex = t, this.q$U.scrollTo(t)) : (this.privacyTitle.text = "\u7a7a", this.privacyContent.text = ""), this.privacyClose2.visible = this.q$$S.length <= 1, this.boxTabPrivacy.visible = 1 < this.q$$S.length;
      }this.q$r && (this.q$r = !1, req_privacy(this.q$m.pkgName, this.q$XS.bind(this))), this.privacyBg.visible = !0;
    }
  }, q$S.prototype.openJumpView = function (t, e, i) {
    this.jumpTitle.text = t || "\u6682\u65e0\u516c\u544a", this.jumpContent.innerHTML = e || "", this.btnJump.label = i || "\u786e\u5b9a", this.jumpContent.y = 0, this.jumpBg.visible = !0;
  }, q$S.prototype.q$jS = function (t) {
    this.txtTip.text = t, this.txtTip.y = 640, this.txtTip.visible = !0, this.q$hS = 1, Laya.timer.clear(this, this.q$y), this.q$y(), Laya.timer.frameLoop(1, this, this.q$y);
  }, q$S.prototype.q$y = function () {
    this.txtTip.y -= this.q$hS, this.q$hS *= 1.1, this.txtTip.y <= 590 && (this.txtTip.visible = !1, Laya.timer.clear(this, this.q$y));
  }, e.SelectServerPanel = q$S;
}(modules = modules || {});var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.q$R.AuthorizationPanel,
    LoadingPanel = modules.q$R.LoadingPanel,
    SelectServerPanel = modules.q$R.SelectServerPanel,
    ServerLoading = function () {
  function q$z(t) {
    this.m_loadingRes = ["qqdiq/q13a.png", "qqdiq/q15a.png", "qqdiq/q14a.png", "qqdiq/q16a.png", "qqdiq/q17a.png", "qqdiq/q18a.png", "qqdiq/q19a.png", "qqdiq/q20a.png", "qfq/q1c.png", "qfq/q2c.png", "qfq/q3c.png", "qfq/q4c.png", "qfq/q5c.png", "qqdiq/q3a.jpg", "qqdiq/q12a.jpg", "qqdiq/q1a.png", "qqdiq/q2a.png", "qqdiq/q4a.jpg", "qqdiq/q6a.jpg", "qqdiq/q8a.jpg", "qqdiq/q10a.jpg", "qqdiq/q5a.jpg", "qqdiq/q7a.jpg", "qqdiq/q9a.jpg", "qqdiq/q11a.jpg"], this.m_serverRes = ["qlgqq/q10b.png", "qlgqq/q11b.png", "qlgqq/q12b.png", "qlgqq/q13b.png", "qlgqq/q14b.png", "qlgqq/q15b.png", "qlgqq/q16b.png", "qlgqq/q17b.png", "qlgqq/q18b.png", "qlgqq/q19b.png", "qlgqq/q20b.png", "qlgqq/q21b.png", "qlgqq/q2b.jpg", "qlgqq/q3b.jpg", "qlgqq/q4b.jpg", "qlgqq/q5b.jpg", "qlgqq/q6b.jpg", "qlgqq/q1b.png", "qlgqq/q8b.png", "qlgqq/q9b.png", "qlgqq/q24b.png", "qlgqq/q25b.png", "qlgqq/q27b.png", "qlgqq/q29b.png", "qlgqq/q28b.png"], this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.q$uS = !1, this.q$KS = "", q$z.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var e = Laya.AtlasResourceManager;e.maxTextureCount = 6, e.atlasTextureWidth = e.atlasTextureHeight = 1024, e._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.q$PS.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } }, "q28b.png": { frame: { h: 25, idx: 0, w: 25, x: 444, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 2 } }, "q29b.png": { frame: { h: 27, idx: 0, w: 26, x: 470, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = q$z.instance.requestWeb, Browser.window.imgMgrLoad = q$z.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.q$PS();
  }return q$z.prototype.changeServerLoading = function (t) {
    q$z.instance.m_layer.visible = t;
  }, q$z.prototype.openAuthor = function () {
    q$z.instance.m_author || (q$z.instance.m_author = new AuthorizationPanel()), q$z.instance.m_author.parent || q$z.instance.m_layer.addChild(q$z.instance.m_author), q$z.instance.q$MS();
  }, q$z.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, q$z.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, q$z.prototype.q$rS = function () {
    q$z.instance.m_server || (q$z.instance.m_server = new SelectServerPanel()), q$z.instance.m_server.parent || q$z.instance.m_layer.addChild(q$z.instance.m_server), q$z.instance.q$MS();
  }, q$z.prototype.openJumpView = function (t, e, i) {
    this.q$rS(), q$z.instance.m_server.openJumpView(t, e, i);
  }, q$z.prototype.openServer = function (t, e) {
    for (var i = this, s = function () {
      i.q$rS(), t && e && t.call(e);
    }, o = !0, n = 0, a = this.m_serverRes; n < a.length; n++) {
      var r = a[n];if (null == Laya.Loader.getRes(r)) {
        o = !1;break;
      }
    }o ? s() : Laya.loader.load(this.m_serverRes, Handler.create(this, s));
  }, q$z.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, q$z.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, q$z.prototype.openLoading = function (t) {
    void 0 === t && (t = 0), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      q$z.instance.m_loading || (q$z.instance.m_loading = new LoadingPanel(t)), q$z.instance.m_loading.parent || q$z.instance.m_layer.addChild(q$z.instance.m_loading), q$z.instance.q$MS();
    }));
  }, q$z.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var t = 0, e = this.m_serverRes; t < e.length; t++) {
      var i = e[t];Laya.Loader.clearCache(q$z.instance, i), Laya.Loader.clearRes(i, !0);
    }for (var s = 0, o = this.m_loadingRes; s < o.length; s++) i = o[s], Laya.Loader.clearCache(q$z.instance, i), Laya.Loader.clearRes(i, !0);this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, q$z.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && q$z.instance.m_loading.showGetBtn();
  }, q$z.prototype.enterDefaultServer = function () {
    var t = Browser.window.PF_INFO.selectedServer;this.q$uS || -1 == t.status || 0 == t.status || (this.q$uS = !0, Browser.window.PF_INFO.selectedServer = t, req_server_check_ban(0, t.server_id));
  }, q$z.prototype.sendRecord = function () {
    var t = "";t = (t = (t = (t = (t = (t = (t = (t += "newRegister=" + Browser.window.PF_INFO.newRegister) + ", isPrelodServer=" + this.m_isPrelodServer) + ", SelectServerPanel=" + (null != q$z.instance.m_server)) + ", isPrelodLoading=" + this.m_isPrelodLoading) + ", LoadingPanel=" + (null != q$z.instance.m_loading)) + ", resMgrLoad=" + (Browser.window.resMgrLoad == q$z.instance.requestWeb)) + ", imgMgrLoad=" + (Browser.window.imgMgrLoad == q$z.instance.requestWeb)) + ", errUrls=" + q$z.instance.q$KS;for (var e = 0, i = this.m_serverRes; e < i.length; e++) t += ", " + (n = i[e]) + "=" + (null != Laya.Loader.getRes(n));for (var s = 0, o = this.m_loadingRes; s < o.length; s++) {
      var n;t += ", " + (n = o[s]) + "=" + (null != Laya.Loader.getRes(n));
    }var a = Browser.window.PF_INFO.selectedServer;a && (t = (t = (t += ", server_status=" + a.status) + (", server_id=" + a.server_id)) + (", server_name=" + a.server_name));a = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: t });console.error(a), this.q$eS && this.q$eS == t || (this.q$eS = t, reqRecordError(a));
  }, q$z.prototype.q$gS = function () {
    var t = Laya.stage,
        e = Math.floor(t.width),
        i = Math.floor(t.height);i / e < 1.7777778 ? (this.viewW = Math.floor(e / (i / 1280)), this.viewH = 1280, this.viewS = i / 1280) : (this.viewW = 720, this.viewH = Math.floor(i / (e / 720)), this.viewS = e / 720);i = Math.floor(t.width), e = Math.floor(t.height);e / i < 1.7777778 ? (this.viewW = Math.floor(i / (e / 1280)), this.viewH = 1280, this.viewS = e / 1280) : (this.viewW = 720, this.viewH = Math.floor(e / (i / 720)), this.viewS = i / 720), this.q$MS();
  }, q$z.prototype.q$MS = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, q$z.prototype.q$PS = function () {
    if (Input.isInputting && Browser.onMobile) return i = parseInt(Input.inputContainer.style.top.replace("px", "")), t = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS, e = Browser.clientWidth / Render.canvas.width, 0 < (i = Browser.clientHeight - t * e - i) && (i = 0), void (Browser.container.style.top = i + "px");var t, e;Browser.container.style.top = "0px", t = Math.floor(Browser.width) + 1 & 2147483646, e = Math.floor(Browser.height) + 1 & 2147483646;var i = Laya.stage;3 == ENV || e < t ? (i.scaleMode = Laya.Stage.SCALE_NOSCALE, i.width = t, i.height = e) : (i.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, i.width = 840, i.height = Math.floor(e / (t / 840)) + 1 & 2147483646), this.q$gS();
  }, q$z.prototype.requestWeb = function (t, e) {
    function q$a() {
      i.onload = null, i.onerror = null;
    }var i,
        s = t;(i = new Browser.window.Image()).onload = function () {
      q$a(), e(s, 200, i);
    }, i.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", s), q$z.instance.q$KS += s + "|", q$a(), e(s, 404, null);
    }, i.src = s, -1 == q$z.instance.m_serverRes.indexOf(s) && -1 == q$z.instance.m_loadingRes.indexOf(s) || Laya.Loader.keepCache(q$z.instance, s);
  }, q$z.prototype.q$xS = function (t, e) {
    return -1 != t.indexOf(e, t.length - e.length);
  }, q$z;
}();!function (t) {
  function q$S() {
    var t = e.call(this) || this;return t.q$sS = "#72441d", t.q$US = "#263d7d", t.width = 274, t.height = 59, t.q$fS = new Laya.Image(), t.addChild(t.q$fS), t.q$YS = new Laya.Label(), t.q$YS.fontSize = 30, t.q$YS.color = t.q$US, t.addChild(t.q$YS), t.q$YS.centerX = 0, t.q$YS.centerY = 0, t;
  }var e;t = t.q$R || (t.q$R = {}), e = Laya.View, __extends(q$S, e), q$S.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.q$m = Browser.window.PF_INFO, this.q$m.loadingType, this.addEvt();
  }, Object.defineProperty(q$S.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), q$S.prototype.setData = function (t) {
    this.q$iS = t[0], this.q$ZS = t[1], this.q$YS.text = this.q$iS.title, this.q$YS.color = this.q$ZS ? this.q$sS : this.q$US, this.q$fS.skin = this.q$ZS ? "qlgqq/q25b.png" : "qlgqq/q24b.png";
  }, q$S.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, q$S.prototype.addEvt = function () {}, q$S.prototype.rmEvts = function () {}, t.NoticeItem = q$S;
}(modules = modules || {}), function (t) {
  function q$S() {
    var t = e.call(this) || this;return t.q$sS = "#72441d", t.q$US = "#263d7d", t.width = 274, t.height = 59, t.q$fS = new Laya.Image(), t.addChild(t.q$fS), t.q$YS = new Laya.Label(), t.q$YS.fontSize = 30, t.q$YS.color = t.q$US, t.addChild(t.q$YS), t.q$YS.centerX = 0, t.q$YS.centerY = 0, t;
  }var e;t = t.q$R || (t.q$R = {}), e = Laya.View, __extends(q$S, e), q$S.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.q$m = Browser.window.PF_INFO, this.q$m.loadingType, this.addEvt();
  }, Object.defineProperty(q$S.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), q$S.prototype.setData = function (t) {
    this.q$pS = t[0], this.q$ZS = t[1], this.q$YS.text = this.q$pS, this.q$YS.color = this.q$ZS ? this.q$sS : this.q$US, this.q$fS.skin = this.q$ZS ? "qlgqq/q25b.png" : "qlgqq/q24b.png";
  }, q$S.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, q$S.prototype.addEvt = function () {}, q$S.prototype.rmEvts = function () {}, t.PrivacyItem = q$S;
}(modules = modules || {}), function (t) {
  function q$S() {
    var t = e.call(this) || this;return t.width = 192, t.height = 70, t.q$fS = new Laya.Image(), t.addChild(t.q$fS), t.q$YS = new Laya.Label(), t.q$YS.fontSize = 30, t.q$YS.color = t.q$f, t.addChild(t.q$YS), t.q$YS.centerX = 0, t.q$YS.centerY = 0, t;
  }var e;t = t.q$R || (t.q$R = {}), e = Laya.View, __extends(q$S, e), q$S.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.q$m = Browser.window.PF_INFO;var t = this.q$m.loadingType;this.q$f = 1 != t && 2 != t && 3 == t ? "#763042" : "#263d7d", this.addEvt();
  }, Object.defineProperty(q$S.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), q$S.prototype.setData = function (t) {
    this.q$iS = t, this.q$YS.text = t.name, this.q$fS.skin = t.select ? "qlgqq/q14b.png" : "qlgqq/q15b.png";
  }, q$S.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, q$S.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, q$S.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, q$S.prototype.clkHdler = function () {
    this.q$iS && this.q$iS.callBack && this.q$iS.callBack(this.q$iS.index);
  }, t.SelectLeftListItem = q$S;
}(modules = modules || {}), function (t) {
  function q$S() {
    var t = e.call(this) || this;return t.q$fS = new Laya.Image("qlgqq/q16b.png"), t.q$YS = new Laya.Label(), t.q$YS.fontSize = 30, t.q$YS.color = t.q$f, t.addChild(t.q$fS), t.q$cS = new Laya.Image(), t.addChild(t.q$cS), t.width = 358, t.height = 70, t.addChild(t.q$YS), t.q$cS.centerY = 0, t.q$cS.x = 18, t.q$YS.x = 80, t.q$YS.centerY = 0, t.q$fS.graphics.drawRect(0, 0, t.width, t.height, "#00sasd"), t;
  }var e;t = t.q$R || (t.q$R = {}), e = Laya.View, __extends(q$S, e), q$S.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.q$m = Browser.window.PF_INFO;var t = this.q$m.loadingType;this.q$f = 1 != t && 2 != t && 3 == t ? "#763042" : "#34267d", this.addEvt();
  }, Object.defineProperty(q$S.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), q$S.prototype.setData = function (t) {
    this.q$iS = t, this.q$YS.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.q$f, this.q$YS.text = -1 === t.status ? t.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === t.status ? t.server_name + "(\u5f85\u5f00\u670d)" : t.server_name, this.q$cS.skin = this.getStatusSrc(t.status);
  }, q$S.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, q$S.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, q$S.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, q$S.prototype.clkHdler = function () {
    this.q$iS && this.q$iS.callBack && this.q$iS.callBack(this.q$iS);
  }, q$S.prototype.getStatusSrc = function (t) {
    var e = "";return 2 === t ? e = "qlgqq/q18b.png" : 1 === t ? e = "qlgqq/q19b.png" : -1 !== t && 0 !== t || (e = "qlgqq/q20b.png"), e;
  }, t.SelectRightListItem = q$S;
}(modules = modules || {}), window.ServerLoading = ServerLoading;