"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
  };return function (t, e) {
    function F$a() {
      this.constructor = t;
    }i(t, e), t.prototype = null === e ? Object.create(e) : (F$a.prototype = e.prototype, new F$a());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (t) {
  __extends(F$F, i = View), F$F.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.F$e.uiView);
  }, F$F.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "ffflogin/f2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "ffflogin/f6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "ffflogin/f3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "ffflogin/f4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "ffflogin/f5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] };var e = F$F;function F$F() {
    return i.call(this) || this;
  }var i;t.F$e = e;
}(ui = ui || {}), function (t) {
  __extends(F$F, i = View), F$F.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.F$F.uiView);
  }, F$F.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "ffflogin/f1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "fffloding/f13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "fffloding/f14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "fffloding/f16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "fffloding/f17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "fffloding/f20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "fffloding/f19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "fffloding/f18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "fffloding/f18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "fffloding/f1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }] };var e = F$F;function F$F() {
    return i.call(this) || this;
  }var i;t.F$F = e;
}(ui = ui || {}), function (t) {
  __extends(F$F, i = View), F$F.prototype.createChildren = function () {
    View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), View.regComponent("Text", laya.display.Text), i.prototype.createChildren.call(this), this.createView(t.F$a.uiView);
  }, F$F.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "ffflogin/f2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "ffflogin/f6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "ffflogin/f3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "ffflogin/f4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "ffflogin/f5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "ffflogin/f21b.png", centerX: 0 } }, { type: "Image", props: { y: 1102, var: "imgCheatTip", skin: "ffflogin/f27b.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 930, x: 162, var: "hotImage", skin: "ffflogin/f18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "ffflogin/f1b.png", centerX: 0, bottom: 30 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "ffflogin/f12b.png", name: "enterBtn", centerX: 0 } }, { type: "Image", props: { x: 196, visible: !1, var: "privacyToggle", skin: "ffflogin/f29b.png", bottom: 4 } }, { type: "Label", props: { y: 640, x: 0, width: 720, var: "txtTip", valign: "middle", text: "\u63d0\u793a\u5185\u5bb9", strokeColor: "#ffffff", stroke: 2, height: 32, fontSize: 32, color: "#ff0000", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }, { type: "HTMLDivElement", props: { y: 1255, x: 256, visible: !1, var: "privacyTip", height: 16 } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "ffflogin/f11b.png" } }, { type: "Image", props: { y: 257, x: 594, visible: !1, var: "privacyBtn", skin: "ffflogin/f13b.png", name: "privacyBtn" } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "ffflogin/f8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "ffflogin/f10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "mNoticeBg", skin: "ffflogin/f8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "ffflogin/f10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "ffflogin/f25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "privacyBg", skin: "ffflogin/f8b.png", name: "privacyBg", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "privacyClose", skin: "ffflogin/f10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "privacyClose2", stateNum: 1, skin: "ffflogin/f25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTabPrivacy", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "privacyTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "privacyPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "privacyContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "ffflogin/f9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "ffflogin/f17b.png" } }] }, { type: "Box", props: { width: 720, visible: !1, var: "jumpBg", mouseThrough: !1, height: 1280, centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 143, x: 33, skin: "ffflogin/f8b.png", centerY: 0, centerX: 0 } }, { type: "Button", props: { y: 1047, x: 223, var: "btnJump", stateNum: 1, skin: "ffflogin/f25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u8df3\u8f6c" } }, { type: "Label", props: { y: 215, x: 249, width: 234, var: "jumpTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 285, x: 94, width: 545, var: "jumpPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "jumpContent", height: 733 } }] }] }] };var e = F$F;function F$F() {
    return i.call(this) || this;
  }var i;t.F$a = e;
}(ui = ui || {}), function (t) {
  function F$e() {
    return e.call(this) || this;
  }var e;t = t.F$o || (t.F$o = {}), e = ui.F$e, __extends(F$e, e), F$e.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
  }, F$e.prototype.addEvt = function () {
    this.on(Laya.Event.CLICK, this, this.F$E);
  }, F$e.prototype.rmEvts = function () {
    this.off(Laya.Event.CLICK, this, this.F$E);
  }, F$e.prototype.onOpened = function () {
    this.F$s = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
  }, F$e.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, F$e.prototype.F$E = function () {
    1e4 < Date.now() - this.F$s && (this.F$s -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
  }, t.AuthorizationPanel = F$e;
}(modules = modules || {}), function (t) {
  var e, i, s, n;function F$R() {
    var t = o.call(this) || this;return t.F$_ = new i(), t.addChild(t.F$_), t.F$R = null, t.F$H = [], t.F$g = !1, t.F$n = 0, t.F$O = !0, t.F$q = 6, t.F$I = !1, t.on(e.DISPLAY, t, t.F$l), t.on(e.UNDISPLAY, t, t.F$P), t;
  }var o;t = t.F$Y || (t.F$Y = {}), e = Laya.Event, i = Laya.Image, s = Laya.Component, n = Laya.Loader, __extends(F$R, o = s), F$R.create = function (t, e, i, s, o, n, a) {
    void 0 === s && (s = 0), void 0 === o && (o = 6), void 0 === n && (n = !0), void 0 === a && (a = !1);var r = new F$R();return r.skin(e, i, s), r.durFrm = o, r.loop = n, r.atHide = a, t && t.addChild(r), r;
  }, F$R.play = function (t) {
    t && (t.visible = !0, t.play());
  }, F$R.stop = function (t) {
    t && (t.visible = !1, t.stop());
  }, F$R.prototype.destroy = function (t) {
    Laya.timer.clear(this, this.F$j), this.off(e.DISPLAY, this, this.F$l), this.off(e.UNDISPLAY, this, this.F$P), o.prototype.destroy.call(this, t);
  }, F$R.prototype.F$l = function () {}, F$R.prototype.F$P = function () {}, F$R.prototype.skin = function (t, e, i) {
    if (this.F$R != t) {
      this.F$R = t, this.F$H = [];for (var s = 0, o = i; o <= e; o++) this.F$H[s++] = t + "/" + o + ".png";i = n.getRes(this.F$H[0]);i && (this.width = i.sourceWidth, this.height = i.sourceHeight), this.F$j();
    }
  }, Object.defineProperty(F$R.prototype, "atHide", { get: function () {
      return this.F$I;
    }, set: function (t) {
      this.F$I = t;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(F$R.prototype, "durFrm", { set: function (t) {
      this.F$q != t && (this.F$q = t, this.F$g && (Laya.timer.clear(this, this.F$j), Laya.timer.loop(this.F$q * (1e3 / 60), this, this.F$j)));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(F$R.prototype, "loop", { set: function (t) {
      this.F$O = t;
    }, enumerable: !0, configurable: !0 }), F$R.prototype.play = function () {
    this.F$g && this.stop(), this.F$g = !0, this.F$n = 0, Laya.timer.loop(this.F$q * (1e3 / 60), this, this.F$j), this.F$j();
  }, F$R.prototype.stop = function () {
    this.F$g = !1, this.F$n = 0, this.F$j(), Laya.timer.clear(this, this.F$j);
  }, F$R.prototype.pause = function () {
    this.F$g && (this.F$g = !1, Laya.timer.clear(this, this.F$j));
  }, F$R.prototype.resume = function () {
    this.F$g || (this.F$g = !0, Laya.timer.loop(this.F$q * (1e3 / 60), this, this.F$j), this.F$j());
  }, Object.defineProperty(F$R.prototype, "isPlay", { get: function () {
      return this.F$g;
    }, enumerable: !0, configurable: !0 }), F$R.prototype.F$j = function () {
    this.F$H && 0 != this.F$H.length && (this.F$_.skin = this.F$H[this.F$n], this.F$g && (this.F$n++, this.F$n == this.F$H.length && (this.F$O ? this.F$n = 0 : (Laya.timer.clear(this, this.F$j), this.F$g = !1, this.F$I && (this.visible = !1), this.event(e.COMPLETE)))));
  }, t.PanelEff = F$R;
}(modules = modules || {}), function (t) {
  var e, i;function F$e(t) {
    void 0 === t && (t = 0);var e = s.call(this) || this;return e.F$$ = { bgImgSkin: "fffloding/f3a.jpg", topImgSkin: "fffloding/f10a.jpg", btmImgSkin: "fffloding/f4a.jpg", leftImgSkin: "fffloding/f6a.jpg", rightImgSkin: "fffloding/f8a.jpg", loadingBarBgSkin: "fffloding/f13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.F$y = { bgImgSkin: "fffloding/f12a.jpg", topImgSkin: "fffloding/f11a.jpg", btmImgSkin: "fffloding/f5a.jpg", leftImgSkin: "fffloding/f7a.jpg", rightImgSkin: "fffloding/f9a.jpg", loadingBarBgSkin: "fffloding/f15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.F$M = 0, e.F$D(1 == t ? e.F$y : e.F$$), e;
  }var s;e = t.F$o || (t.F$o = {}), i = t.F$Y.PanelEff, s = ui.F$F, __extends(F$e, s), F$e.prototype.initialize = function () {
    var t;s.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.F$m = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.F$m && (t = this.F$m.loadingType, this.loadingTips.color = 1 != t && (2 == t || 101 == t) ? "#000000" : "#f2ffb5"), this.F$b = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
  }, F$e.prototype.toAllProgress = function (t) {
    var e = this;if (-1 === t) return e.F$M = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);var i;-2 !== t ? (e.F$M < .9 ? e.F$M += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : e.F$M < 1 && (e.F$M += 1e-4), .9999 < e.F$M && (e.F$M = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
      .9 < e.F$M && toAllProgress(-1);
    })), i = 590 * (t = e.F$M), e.F$M = e.F$M > t ? e.F$M : t, e.loadingBar.width = i, i = e.loadingBar.x + i, e.loadingImg2.x = i - 15, 364 <= i ? (e.loadingImg1.visible = !0, e.loadingImg1.x = i - 202) : e.loadingImg1.visible = !1, e.percentageTips.text = (100 * t >> 0) + "%", e.F$M < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress)) : Laya.timer.clear(this, this.toAllProgress);
  }, F$e.prototype.toProgress = function (t, e, i) {
    var s = 590 * (t = 1 < t ? 1 : t);this.F$M = this.F$M > t ? this.F$M : t, this.loadingBar.width = s;s = this.loadingBar.x + s;this.loadingImg2.x = s - 15, 364 <= s ? (this.loadingImg1.visible = !0, this.loadingImg1.x = s - 202) : this.loadingImg1.visible = !1, this.percentageTips.text = (100 * t >> 0) + "%", this.loadingTips.text = e;for (var o = i - 1, n = 0; n < this.F$b.length; n++) this.F$b[n].skin = n < o ? "fffloding/f20a.png" : o === n ? "fffloding/f19a.png" : "fffloding/f18a.png";
  }, F$e.prototype.onOpened = function () {
    this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.F$m.lastVersion + "      \u7248\u672c\uff1a" + this.F$m.wxVersion, this.showGetBtn();
  }, F$e.prototype.close = function (t) {
    this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.F$L), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.F$B);
  }, F$e.prototype.resetWinFun = function () {
    Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
  }, F$e.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.resetWinFun(), s.prototype.destroy.call(this, t);
  }, F$e.prototype.showGetBtn = function () {
    this.F$m.showGetBtn && 1 == this.F$m.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "fffloding/f1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.F$B), this.F$v(), this.F$K(!0));
  }, F$e.prototype.F$B = function () {
    this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "fffloding/f2a.png", this.F$V(), this.F$K(!1));
  }, F$e.prototype.F$D = function (t) {
    this.bgImg.skin = t.bgImgSkin, this.topImg.skin = t.topImgSkin, this.btmImg.skin = t.btmImgSkin, this.leftImg.skin = t.leftImgSkin, this.rightImg.skin = t.rightImgSkin, this.copyRightImg.bottom = t.copyRightImgBottom, this.processBox1.y = t.processBox1Y, this.processBox2.y = t.processBox2Y, this.loadingBarBg.skin = t.loadingBarBgSkin, this.loadingTips.fontSize = t.loadingTipsSize, this.getTipsBtn.visible = this.F$m.showGetBtn && 1 == this.F$m.showGetBtn, this.getTipsBtn.visible ? this.F$v() : this.F$V(), this.F$K(this.getTipsBtn.visible);
  }, F$e.prototype.F$v = function () {
    this.F$G || (this.F$G = i.create(this.getTipsBtn, "ffwxeff", 4, 0, 12), this.F$G.pos(161, 106), this.F$G.scale(1.14, 1.15)), i.play(this.F$G);
  }, F$e.prototype.F$V = function () {
    this.F$G && i.stop(this.F$G);
  }, F$e.prototype.F$K = function (t) {
    Laya.timer.clear(this, this.F$L), t ? (this.F$A = 9, this.txtGetTm.visible = !0, this.F$L(), Laya.timer.loop(1e3, this, this.F$L)) : this.txtGetTm.visible = !1;
  }, F$e.prototype.F$L = function () {
    0 < this.F$A ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.F$A + "s)", this.F$A--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.F$L), this.F$B());
  }, e.LoadingPanel = F$e;
}(modules = modules || {}), function (t) {
  var e, i, s;function F$e() {
    var t = o.call(this) || this;return t.F$U = 0, t.F$r = "multi_notice_key", t.F$Z = 0, t.F$z = 0, t.F$T = "privacy_key", t.F$p = !0, t.F$J = 0, t;
  }var o;e = t.F$o || (t.F$o = {}), i = Laya.List, s = Laya.Event, o = ui.F$a, __extends(F$e, o), F$e.prototype.initialize = function () {
    o.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, ServerLoading.instance.preloadServer(), this.F$m = Browser.window.PF_INFO, this.F$k = new i(), this.F$k.vScrollBarSkin = "", this.F$k.itemRender = e.SelectLeftListItem, this.F$k.top = 5, this.F$k.repeatX = 1, this.F$k.spaceY = 5, this.F$k.width = this.leftListBox.width, this.F$k.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.F$k), this.F$d = new i(), this.F$d.vScrollBarSkin = "", this.F$d.itemRender = e.SelectRightListItem, this.F$d.top = 5, this.F$d.repeatX = 1, this.F$d.spaceY = 5, this.F$d.width = this.rightListBox.width, this.F$d.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.F$d), this.F$w = new i(), this.F$w.hScrollBarSkin = "", this.F$w.itemRender = e.NoticeItem, this.F$w.repeatY = 1, this.F$w.width = this.boxTab.width, this.F$w.height = this.boxTab.height, this.boxTab.addChild(this.F$w), this.F$S = new i(), this.F$S.hScrollBarSkin = "", this.F$S.itemRender = e.PrivacyItem, this.F$S.repeatY = 1, this.F$S.width = this.boxTab.width, this.F$S.height = this.boxTab.height, this.boxTabPrivacy.addChild(this.F$S);var t = this.F$m.loadingType;this.F$C = 1 == t || 2 == t || 3 == t || 101 == t ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.F$u = [], this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.privacyContent.color = "#212942", this.privacyContent.style.fontSize = 26, this.privacyContent.style.lineHeight = 28, this.privacyContent.mouseEnabled = !1, this.privacyTip.color = "#ffffff", this.privacyTip.style.fontSize = 18, this.privacyTip.style.lineHeight = 18, this.privacyTip.style.stroke = 2, this.privacyTip.style.strokeColor = "#000000", this.privacyTip.style.wordWrap = !1, this.jumpContent.color = "#212942", this.jumpContent.style.fontSize = 26, this.jumpContent.style.lineHeight = 28, this.jumpContent.mouseEnabled = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
  }, F$e.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), this.F$x(), this.F$N(), this.F$X(), this.F$W(), this.F$k && (this.F$k.removeSelf(), this.F$k.destroy(), this.F$k = null), this.F$d && (this.F$d.removeSelf(), this.F$d.destroy(), this.F$d = null), this.F$w && (this.F$w.removeSelf(), this.F$w.destroy(), this.F$w = null), this.F$S && (this.F$S.removeSelf(), this.F$S.destroy(), this.F$S = null), Laya.timer.clear(this, this.F$f), o.prototype.destroy.call(this, t);
  }, F$e.prototype.addEvt = function () {
    this.bgImg.on(Laya.Event.CLICK, this, this.F$i), this.enterBtn.on(Laya.Event.CLICK, this, this.F$Q), this.selectServer.on(Laya.Event.CLICK, this, this.F$t), this.selectServer.on(Laya.Event.CLICK, this, this.F$t), this.closeBg.on(Laya.Event.CLICK, this, this.F$c), this.noticeBtn.on(Laya.Event.CLICK, this, this.F$h), this.noticeClose.on(Laya.Event.CLICK, this, this.F$ee), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.F$Fe), this.mNoticeClose.on(Laya.Event.CLICK, this, this.F$ae), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.F$ae), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.F$oe), this.privacyBtn.on(Laya.Event.CLICK, this, this.F$Ee), this.privacyClose.on(Laya.Event.CLICK, this, this.F$se), this.privacyClose2.on(Laya.Event.CLICK, this, this.F$se), this.privacyPanel.on(Laya.Event.MOUSE_DOWN, this, this.F$Ye), this.privacyToggle.on(Laya.Event.CLICK, this, this.F$_e), this.privacyTip.on(Laya.Event.LINK, this, this.F$Re), this.btnJump.on(Laya.Event.CLICK, this, this.F$He), this.jumpPanel.on(Laya.Event.MOUSE_DOWN, this, this.F$ge), this.F$w.selectEnable = !0, this.F$w.selectHandler = Laya.Handler.create(this, this.F$ne, null, !1), this.F$S.selectEnable = !0, this.F$S.selectHandler = Laya.Handler.create(this, this.F$Oe, null, !1);
  }, F$e.prototype.rmEvts = function () {
    this.bgImg.off(Laya.Event.CLICK, this, this.F$i), this.enterBtn.off(Laya.Event.CLICK, this, this.F$Q), this.selectServer.off(Laya.Event.CLICK, this, this.F$t), this.selectServer.off(Laya.Event.CLICK, this, this.F$t), this.closeBg.off(Laya.Event.CLICK, this, this.F$c), this.noticeBtn.off(Laya.Event.CLICK, this, this.F$h), this.noticeClose.off(Laya.Event.CLICK, this, this.F$ee), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.F$Fe), this.mNoticeClose.off(Laya.Event.CLICK, this, this.F$ae), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.F$ae), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.F$oe), this.privacyBtn.off(Laya.Event.CLICK, this, this.F$Ee), this.privacyClose.off(Laya.Event.CLICK, this, this.F$se), this.privacyClose2.off(Laya.Event.CLICK, this, this.F$se), this.privacyPanel.off(Laya.Event.MOUSE_DOWN, this, this.F$Ye), this.privacyToggle.off(Laya.Event.CLICK, this, this.F$_e), this.privacyTip.off(Laya.Event.LINK, this, this.F$Re), this.btnJump.off(Laya.Event.CLICK, this, this.F$He), this.jumpPanel.off(Laya.Event.MOUSE_DOWN, this, this.F$ge), this.F$w.selectEnable = !1, this.F$w.selectHandler = null, this.F$S.selectEnable = !1, this.F$S.selectHandler = null;
  }, F$e.prototype.onOpened = function () {
    var s = this;this.F$s = Date.now(), this.F$p = !0, this.F$qe = this.F$m.selectedServer.server_id, this.F$Ie(this.F$m.selectedServer), this.F$k.dataSource = this.F$m.groupList, this.F$t(), req_multi_server_notice(4, this.F$m.pkgName, this.F$m.selectedServer.server_id, this.F$le.bind(this)), Laya.timer.frameOnce(1, this, function () {
      s.F$Pe = s.F$m.privacy_data && s.F$m.privacy_data.list ? s.F$m.privacy_data.list : [], s.F$je = null != s.F$m.privacy_login_pkg ? s.F$m.privacy_login_pkg : 0;var t = "1" == localStorage.getItem(s.F$T),
          e = 0 != PF_INFO.privacy_save_pkg,
          i = 0 == s.F$je || 1 == s.F$je;s.F$$e = e && t || i, s.F$ye();
    }), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.F$m.lastVersion + "      \u7248\u672c\uff1a" + this.F$m.wxVersion, this.serverName.color = this.selServer.color = this.F$C, this.imgCheatTip.visible = 1 == this.F$m.anti_cheat_pkg, this.txtTip.visible = !1;
  }, F$e.prototype.preload = function () {}, F$e.prototype.F$i = function () {
    this.F$$e ? 1e4 < Date.now() - this.F$s && (this.F$s -= 2e3, ServerLoading.instance.enterDefaultServer()) : this.F$Me("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
  }, F$e.prototype.F$Q = function () {
    this.F$$e ? this.F$De(this.F$m.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.F$m.selectedServer, req_server_check_ban(0, this.F$m.selectedServer.server_id)) : this.F$Me("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
  }, F$e.prototype.F$t = function () {
    this.F$m.hasGroupReq ? this.listBg.visible = !0 : (this.F$m.hasGroupReq = !0, req_server_group(0));
  }, F$e.prototype.F$c = function () {
    this.listBg.visible = !1;
  }, F$e.prototype.F$h = function () {
    this.F$me();
  }, F$e.prototype.F$ae = function () {
    this.mNoticeBg.visible = !1;
  }, F$e.prototype.F$ee = function () {
    this.noticeBg.visible = !1;
  }, F$e.prototype.F$Ee = function () {
    this.F$be();
  }, F$e.prototype.F$se = function () {
    this.privacyBg.visible = !1;
  }, F$e.prototype.F$_e = function () {
    this.F$$e = !this.F$$e, this.F$$e && localStorage.setItem(this.F$T, "1"), this.privacyToggle.skin = "ffflogin/" + (this.F$$e ? "f29b.png" : "f28b.png");
  }, F$e.prototype.F$Re = function (t) {
    this.F$be(Number(t));
  }, F$e.prototype.F$He = function () {
    Browser.window.forceJumpMiniGame();
  }, F$e.prototype.F$Fe = function () {
    this.F$U = this.noticeContent.mouseY, Laya.stage.on(s.MOUSE_MOVE, this, this.F$Le), Laya.stage.on(s.MOUSE_UP, this, this.F$x), Laya.stage.on(s.MOUSE_OUT, this, this.F$x);
  }, F$e.prototype.F$Le = function () {
    var t;this.noticeContent && (t = this.F$U - this.noticeContent.mouseY, this.noticeContent.scrollY += t, this.F$U = this.noticeContent.mouseY);
  }, F$e.prototype.F$x = function () {
    Laya.stage.off(s.MOUSE_MOVE, this, this.F$Le), Laya.stage.off(s.MOUSE_UP, this, this.F$x), Laya.stage.off(s.MOUSE_OUT, this, this.F$x);
  }, F$e.prototype.F$oe = function () {
    this.F$Z = this.mNoticePanel.mouseY, Laya.stage.on(s.MOUSE_MOVE, this, this.F$Be), Laya.stage.on(s.MOUSE_UP, this, this.F$N), Laya.stage.on(s.MOUSE_OUT, this, this.F$N);
  }, F$e.prototype.F$Be = function () {
    var t;this.mNoticeContent && (t = this.F$Z - this.mNoticePanel.mouseY, this.mNoticeContent.y -= t, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.F$Z = this.mNoticePanel.mouseY);
  }, F$e.prototype.F$N = function () {
    Laya.stage.off(s.MOUSE_MOVE, this, this.F$Be), Laya.stage.off(s.MOUSE_UP, this, this.F$N), Laya.stage.off(s.MOUSE_OUT, this, this.F$N);
  }, F$e.prototype.F$Ye = function () {
    this.F$z = this.privacyPanel.mouseY, Laya.stage.on(s.MOUSE_MOVE, this, this.F$ve), Laya.stage.on(s.MOUSE_UP, this, this.F$X), Laya.stage.on(s.MOUSE_OUT, this, this.F$X);
  }, F$e.prototype.F$ve = function () {
    var t;this.privacyContent && (t = this.F$z - this.privacyPanel.mouseY, this.privacyContent.y -= t, this.privacyPanel.height < this.privacyContent.contextHeight ? this.privacyContent.y < this.privacyPanel.height - this.privacyContent.contextHeight ? this.privacyContent.y = this.privacyPanel.height - this.privacyContent.contextHeight : 0 < this.privacyContent.y && (this.privacyContent.y = 0) : this.privacyContent.y = 0, this.F$z = this.privacyPanel.mouseY);
  }, F$e.prototype.F$X = function () {
    Laya.stage.off(s.MOUSE_MOVE, this, this.F$ve), Laya.stage.off(s.MOUSE_UP, this, this.F$X), Laya.stage.off(s.MOUSE_OUT, this, this.F$X);
  }, F$e.prototype.F$ge = function () {
    this.F$J = this.jumpPanel.mouseY, Laya.stage.on(s.MOUSE_MOVE, this, this.F$Ke), Laya.stage.on(s.MOUSE_UP, this, this.F$W), Laya.stage.on(s.MOUSE_OUT, this, this.F$W);
  }, F$e.prototype.F$Ke = function () {
    var t;this.jumpContent && (t = this.F$J - this.jumpPanel.mouseY, this.jumpContent.y -= t, this.jumpPanel.height < this.jumpContent.contextHeight ? this.jumpContent.y < this.jumpPanel.height - this.jumpContent.contextHeight ? this.jumpContent.y = this.jumpPanel.height - this.jumpContent.contextHeight : 0 < this.jumpContent.y && (this.jumpContent.y = 0) : this.jumpContent.y = 0, this.F$J = this.jumpPanel.mouseY);
  }, F$e.prototype.F$W = function () {
    Laya.stage.off(s.MOUSE_MOVE, this, this.F$Ke), Laya.stage.off(s.MOUSE_UP, this, this.F$W), Laya.stage.off(s.MOUSE_OUT, this, this.F$W);
  }, F$e.prototype.F$ne = function () {
    if (this.F$w.dataSource) {
      for (var t, e = 0; e < this.F$w.dataSource.length; e++) {
        var i = this.F$w.dataSource[e];i[1] = e == this.F$w.selectedIndex, e == this.F$w.selectedIndex && (t = i[0]);
      }this.mNoticeTitle.text = t && t.title ? t.title : "", this.mNoticeContent.innerHTML = t && t.content ? t.content : "", this.mNoticeContent.y = 0;
    }
  }, F$e.prototype.F$Oe = function () {
    var t = this.F$S.dataSource;if (t) {
      for (var e = 0; e < t.length; e++) t[e][1] = e == this.F$S.selectedIndex;var i = this.F$Pe[this.F$S.selectedIndex];i && i.content && (i.content = i.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "")), this.privacyTitle.text = i && i.title ? i.title : "\u6807\u9898", this.privacyContent.innerHTML = i && i.content ? i.content : "\u52a0\u8f7d\u4e2d...", this.privacyContent.y = 0;
    }
  }, F$e.prototype.F$Ie = function (t) {
    this.serverName.text = -1 === t.status ? t.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === t.status ? t.server_name + "(\u5f85\u5f00\u670d)" : t.server_name, this.serverName.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.F$C, this.hotImage.skin = this.getStatusSrc(t.status), this.F$m.cdn = t.cdn || "", this.F$m.selectedServer = t, this.noticeBtn.visible = !0;
  }, F$e.prototype.F$Ve = function (t) {
    this.showGroupList(t);
  }, F$e.prototype.F$Ge = function (t) {
    this.F$Ie(t), this.listBg.visible = !1;
  }, F$e.prototype.showGroupList = function (t) {
    if (void 0 === t && (t = 0), this.parent) {
      var e = this.F$m.groupList;if (e && 0 !== e.length) {
        for (var i = e.length, s = 0; s < i; s++) e[s].callBack = this.F$Ve.bind(this), e[s].select = s == t, e[s].index = s;var o = (this.F$k.array = e)[t].id;this.F$m.serverList[o] ? this.showServerList(o) : this.F$m.hasServerReq || (this.F$m.hasServerReq = !0, -1 == o ? req_server_owner(0) : -2 == o ? req_recommend_server_list(0) : req_server_list(0, o));
      }
    }
  }, F$e.prototype.showServerList = function (t) {
    if (this.parent && this.F$m.serverList[t]) {
      for (var e = this.F$m.serverList[t], i = e.length, s = 0; s < i; s++) e[s].callBack = this.F$Ge.bind(this);this.F$d.array = e;
    }
  }, F$e.prototype.F$De = function (t) {
    return -1 == t.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != t.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
  }, F$e.prototype.getStatusSrc = function (t) {
    var e = "";return 2 === t ? e = "ffflogin/f18b.png" : 1 === t ? e = "ffflogin/f19b.png" : -1 !== t && 0 !== t || (e = "ffflogin/f20b.png"), e;
  }, F$e.prototype.F$le = function (t) {
    console.log("onMultiNoticeCallback, param = ", t);var e = Date.now() / 1e3,
        i = localStorage.getItem(this.F$r),
        s = !(this.F$u = []);if ("success" == t.state) for (var o in t.data) {
      var o = t.data[o],
          n = e < o.end_time,
          a = 1 == o.pop_type,
          r = 2 == o.pop_type && o.key + "" != i;!s && n && (a || r) && (s = !0), n && this.F$u.push(o), r && localStorage.setItem(this.F$r, o.key + "");
    }this.F$u.sort(function (t, e) {
      return t.login_id - e.login_id;
    }), console.log("onMultiNoticeCallback, datas = ", this.F$u), s && this.F$me();
  }, F$e.prototype.F$me = function () {
    if (this.F$w) {
      if (this.F$u) {
        this.F$w.x = 2 < this.F$u.length ? 0 : (this.boxTab.width - 274 * this.F$u.length) / 2;for (var t = [], e = 0; e < this.F$u.length; e++) {
          var i = this.F$u[e];t.push([i, e == this.F$w.selectedIndex]);
        }0 < (this.F$w.dataSource = t).length ? (this.F$w.selectedIndex = 0, this.F$w.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.F$u.length <= 1, this.boxTab.visible = 1 < this.F$u.length;
      }this.mNoticeBg.visible = !0;
    }
  }, F$e.prototype.F$Ae = function (t) {
    if (!this.destroyed) {
      if (console.log("p_onPrivacyCallback, param = ", t), "success" == t.state) for (var e in t.data) {
        var e = Number(e),
            i = t.data[e];this.F$Pe && this.F$Pe[e] && (this.F$Pe[e].content = i.content);
      }this.F$Oe();
    }
  }, F$e.prototype.F$ye = function () {
    for (var t = "", e = 0; e < this.F$Pe.length; e++) t += '<a href="' + e + '" style="color:#14ff28;text-decoration:none">' + this.F$Pe[e].title + "</a>", e < this.F$Pe.length - 1 && (t += "\u3001");this.privacyTip.innerHTML = "\u6211\u5df2\u7ecf\u8be6\u7ec6\u9605\u8bfb\u5e76\u540c\u610f" + t, this.privacyToggle.skin = "ffflogin/" + (this.F$$e ? "f29b.png" : "f28b.png"), this.privacyTip.x = (720 - this.privacyTip.width) / 2, this.privacyToggle.x = this.privacyTip.x - 30, this.privacyBtn.visible = 0 < this.F$Pe.length, this.privacyToggle.visible = this.privacyTip.visible = 0 < this.F$Pe.length && 0 != this.F$je;
  }, F$e.prototype.F$be = function (t) {
    if (void 0 === t && (t = 0), this.F$S) {
      if (this.F$Pe) {
        this.F$S.x = 2 < this.F$Pe.length ? 0 : (this.boxTab.width - 274 * this.F$Pe.length) / 2;for (var e = [], i = 0; i < this.F$Pe.length; i++) {
          var s = this.F$Pe[i],
              s = s && s.title ? s.title : "",
              o = i == this.F$S.selectedIndex;e.push([s, o]);
        }0 < (this.F$S.dataSource = e).length ? ((t = t < 0 ? 0 : t) > e.length - 1 && (t = 0), this.F$S.selectedIndex = t, this.F$S.scrollTo(t)) : (this.privacyTitle.text = "\u7a7a", this.privacyContent.text = ""), this.privacyClose2.visible = this.F$Pe.length <= 1, this.boxTabPrivacy.visible = 1 < this.F$Pe.length;
      }this.F$p && (this.F$p = !1, req_privacy(this.F$m.pkgName, this.F$Ae.bind(this))), this.privacyBg.visible = !0;
    }
  }, F$e.prototype.openJumpView = function (t, e, i) {
    this.jumpTitle.text = t || "\u6682\u65e0\u516c\u544a", this.jumpContent.innerHTML = e || "", this.btnJump.label = i || "\u786e\u5b9a", this.jumpContent.y = 0, this.jumpBg.visible = !0;
  }, F$e.prototype.F$Me = function (t) {
    this.txtTip.text = t, this.txtTip.y = 640, this.txtTip.visible = !0, this.F$Ue = 1, Laya.timer.clear(this, this.F$f), this.F$f(), Laya.timer.frameLoop(1, this, this.F$f);
  }, F$e.prototype.F$f = function () {
    this.txtTip.y -= this.F$Ue, this.F$Ue *= 1.1, this.txtTip.y <= 590 && (this.txtTip.visible = !1, Laya.timer.clear(this, this.F$f));
  }, e.SelectServerPanel = F$e;
}(modules = modules || {});var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.F$o.AuthorizationPanel,
    LoadingPanel = modules.F$o.LoadingPanel,
    SelectServerPanel = modules.F$o.SelectServerPanel,
    ServerLoading = function () {
  function F$R(t) {
    this.m_loadingRes = ["fffloding/f13a.png", "fffloding/f15a.png", "fffloding/f14a.png", "fffloding/f16a.png", "fffloding/f17a.png", "fffloding/f18a.png", "fffloding/f19a.png", "fffloding/f20a.png", "ffwxeff/f1c.png", "ffwxeff/f2c.png", "ffwxeff/f3c.png", "ffwxeff/f4c.png", "ffwxeff/f5c.png", "fffloding/f3a.jpg", "fffloding/f12a.jpg", "fffloding/f1a.png", "fffloding/f2a.png", "fffloding/f4a.jpg", "fffloding/f6a.jpg", "fffloding/f8a.jpg", "fffloding/f10a.jpg", "fffloding/f5a.jpg", "fffloding/f7a.jpg", "fffloding/f9a.jpg", "fffloding/f11a.jpg"], this.m_serverRes = ["ffflogin/f10b.png", "ffflogin/f11b.png", "ffflogin/f12b.png", "ffflogin/f13b.png", "ffflogin/f14b.png", "ffflogin/f15b.png", "ffflogin/f16b.png", "ffflogin/f17b.png", "ffflogin/f18b.png", "ffflogin/f19b.png", "ffflogin/f20b.png", "ffflogin/f21b.png", "ffflogin/f2b.jpg", "ffflogin/f3b.jpg", "ffflogin/f4b.jpg", "ffflogin/f5b.jpg", "ffflogin/f6b.jpg", "ffflogin/f1b.png", "ffflogin/f8b.png", "ffflogin/f9b.png", "ffflogin/f24b.png", "ffflogin/f25b.png", "ffflogin/f27b.png", "ffflogin/f29b.png", "ffflogin/f28b.png"], this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.F$re = !1, this.F$Ze = "", F$R.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var e = Laya.AtlasResourceManager;e.maxTextureCount = 6, e.atlasTextureWidth = e.atlasTextureHeight = 1024, e._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.F$ze.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } }, "f28b.png": { frame: { h: 25, idx: 0, w: 25, x: 444, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 2 } }, "f29b.png": { frame: { h: 27, idx: 0, w: 26, x: 470, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = F$R.instance.requestWeb, Browser.window.imgMgrLoad = F$R.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.F$ze();
  }return F$R.prototype.changeServerLoading = function (t) {
    F$R.instance.m_layer.visible = t;
  }, F$R.prototype.openAuthor = function () {
    F$R.instance.m_author || (F$R.instance.m_author = new AuthorizationPanel()), F$R.instance.m_author.parent || F$R.instance.m_layer.addChild(F$R.instance.m_author), F$R.instance.F$Te();
  }, F$R.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, F$R.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, F$R.prototype.F$pe = function () {
    F$R.instance.m_server || (F$R.instance.m_server = new SelectServerPanel()), F$R.instance.m_server.parent || F$R.instance.m_layer.addChild(F$R.instance.m_server), F$R.instance.F$Te();
  }, F$R.prototype.openJumpView = function (t, e, i) {
    this.F$pe(), F$R.instance.m_server.openJumpView(t, e, i);
  }, F$R.prototype.openServer = function (t, e) {
    for (var i = this, s = function () {
      i.F$pe(), t && e && t.call(e);
    }, o = !0, n = 0, a = this.m_serverRes; n < a.length; n++) {
      var r = a[n];if (null == Laya.Loader.getRes(r)) {
        o = !1;break;
      }
    }o ? s() : Laya.loader.load(this.m_serverRes, Handler.create(this, s));
  }, F$R.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, F$R.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, F$R.prototype.openLoading = function (t) {
    void 0 === t && (t = 0), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      F$R.instance.m_loading || (F$R.instance.m_loading = new LoadingPanel(t)), F$R.instance.m_loading.parent || F$R.instance.m_layer.addChild(F$R.instance.m_loading), F$R.instance.F$Te();
    }));
  }, F$R.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var t = 0, e = this.m_serverRes; t < e.length; t++) {
      var i = e[t];Laya.Loader.clearCache(F$R.instance, i), Laya.Loader.clearRes(i, !0);
    }for (var s = 0, o = this.m_loadingRes; s < o.length; s++) i = o[s], Laya.Loader.clearCache(F$R.instance, i), Laya.Loader.clearRes(i, !0);this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, F$R.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && F$R.instance.m_loading.showGetBtn();
  }, F$R.prototype.enterDefaultServer = function () {
    var t = Browser.window.PF_INFO.selectedServer;this.F$re || -1 == t.status || 0 == t.status || (this.F$re = !0, Browser.window.PF_INFO.selectedServer = t, req_server_check_ban(0, t.server_id));
  }, F$R.prototype.sendRecord = function () {
    var t = "";t = (t = (t = (t = (t = (t = (t = (t += "newRegister=" + Browser.window.PF_INFO.newRegister) + ", isPrelodServer=" + this.m_isPrelodServer) + ", SelectServerPanel=" + (null != F$R.instance.m_server)) + ", isPrelodLoading=" + this.m_isPrelodLoading) + ", LoadingPanel=" + (null != F$R.instance.m_loading)) + ", resMgrLoad=" + (Browser.window.resMgrLoad == F$R.instance.requestWeb)) + ", imgMgrLoad=" + (Browser.window.imgMgrLoad == F$R.instance.requestWeb)) + ", errUrls=" + F$R.instance.F$Ze;for (var e = 0, i = this.m_serverRes; e < i.length; e++) t += ", " + (n = i[e]) + "=" + (null != Laya.Loader.getRes(n));for (var s = 0, o = this.m_loadingRes; s < o.length; s++) {
      var n;t += ", " + (n = o[s]) + "=" + (null != Laya.Loader.getRes(n));
    }var a = Browser.window.PF_INFO.selectedServer;a && (t = (t = (t += ", server_status=" + a.status) + (", server_id=" + a.server_id)) + (", server_name=" + a.server_name));a = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: t });console.error(a), this.F$Je && this.F$Je == t || (this.F$Je = t, reqRecordError(a));
  }, F$R.prototype.F$ke = function () {
    var t = Laya.stage,
        e = Math.floor(t.width),
        i = Math.floor(t.height);i / e < 1.7777778 ? (this.viewW = Math.floor(e / (i / 1280)), this.viewH = 1280, this.viewS = i / 1280) : (this.viewW = 720, this.viewH = Math.floor(i / (e / 720)), this.viewS = e / 720);i = Math.floor(t.width), e = Math.floor(t.height);e / i < 1.7777778 ? (this.viewW = Math.floor(i / (e / 1280)), this.viewH = 1280, this.viewS = e / 1280) : (this.viewW = 720, this.viewH = Math.floor(e / (i / 720)), this.viewS = i / 720), this.F$Te();
  }, F$R.prototype.F$Te = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, F$R.prototype.F$ze = function () {
    if (Input.isInputting && Browser.onMobile) return i = parseInt(Input.inputContainer.style.top.replace("px", "")), t = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS, e = Browser.clientWidth / Render.canvas.width, 0 < (i = Browser.clientHeight - t * e - i) && (i = 0), void (Browser.container.style.top = i + "px");var t, e;Browser.container.style.top = "0px", t = Math.floor(Browser.width) + 1 & 2147483646, e = Math.floor(Browser.height) + 1 & 2147483646;var i = Laya.stage;3 == ENV || e < t ? (i.scaleMode = Laya.Stage.SCALE_NOSCALE, i.width = t, i.height = e) : (i.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, i.width = 840, i.height = Math.floor(e / (t / 840)) + 1 & 2147483646), this.F$ke();
  }, F$R.prototype.requestWeb = function (t, e) {
    function F$a() {
      i.onload = null, i.onerror = null;
    }var i,
        s = t;(i = new Browser.window.Image()).onload = function () {
      F$a(), e(s, 200, i);
    }, i.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", s), F$R.instance.F$Ze += s + "|", F$a(), e(s, 404, null);
    }, i.src = s, -1 == F$R.instance.m_serverRes.indexOf(s) && -1 == F$R.instance.m_loadingRes.indexOf(s) || Laya.Loader.keepCache(F$R.instance, s);
  }, F$R.prototype.F$de = function (t, e) {
    return -1 != t.indexOf(e, t.length - e.length);
  }, F$R;
}();!function (t) {
  function F$e() {
    var t = e.call(this) || this;return t.F$we = "#72441d", t.F$Se = "#263d7d", t.width = 274, t.height = 59, t.F$Ce = new Laya.Image(), t.addChild(t.F$Ce), t.F$ue = new Laya.Label(), t.F$ue.fontSize = 30, t.F$ue.color = t.F$Se, t.addChild(t.F$ue), t.F$ue.centerX = 0, t.F$ue.centerY = 0, t;
  }var e;t = t.F$o || (t.F$o = {}), e = Laya.View, __extends(F$e, e), F$e.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.F$m = Browser.window.PF_INFO, this.F$m.loadingType, this.addEvt();
  }, Object.defineProperty(F$e.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), F$e.prototype.setData = function (t) {
    this.F$xe = t[0], this.F$Ne = t[1], this.F$ue.text = this.F$xe.title, this.F$ue.color = this.F$Ne ? this.F$we : this.F$Se, this.F$Ce.skin = this.F$Ne ? "ffflogin/f25b.png" : "ffflogin/f24b.png";
  }, F$e.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, F$e.prototype.addEvt = function () {}, F$e.prototype.rmEvts = function () {}, t.NoticeItem = F$e;
}(modules = modules || {}), function (t) {
  function F$e() {
    var t = e.call(this) || this;return t.F$we = "#72441d", t.F$Se = "#263d7d", t.width = 274, t.height = 59, t.F$Ce = new Laya.Image(), t.addChild(t.F$Ce), t.F$ue = new Laya.Label(), t.F$ue.fontSize = 30, t.F$ue.color = t.F$Se, t.addChild(t.F$ue), t.F$ue.centerX = 0, t.F$ue.centerY = 0, t;
  }var e;t = t.F$o || (t.F$o = {}), e = Laya.View, __extends(F$e, e), F$e.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.F$m = Browser.window.PF_INFO, this.F$m.loadingType, this.addEvt();
  }, Object.defineProperty(F$e.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), F$e.prototype.setData = function (t) {
    this.F$Xe = t[0], this.F$Ne = t[1], this.F$ue.text = this.F$Xe, this.F$ue.color = this.F$Ne ? this.F$we : this.F$Se, this.F$Ce.skin = this.F$Ne ? "ffflogin/f25b.png" : "ffflogin/f24b.png";
  }, F$e.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, F$e.prototype.addEvt = function () {}, F$e.prototype.rmEvts = function () {}, t.PrivacyItem = F$e;
}(modules = modules || {}), function (t) {
  function F$e() {
    var t = e.call(this) || this;return t.width = 192, t.height = 70, t.F$Ce = new Laya.Image(), t.addChild(t.F$Ce), t.F$ue = new Laya.Label(), t.F$ue.fontSize = 30, t.F$ue.color = t.F$C, t.addChild(t.F$ue), t.F$ue.centerX = 0, t.F$ue.centerY = 0, t;
  }var e;t = t.F$o || (t.F$o = {}), e = Laya.View, __extends(F$e, e), F$e.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.F$m = Browser.window.PF_INFO;var t = this.F$m.loadingType;this.F$C = 1 != t && 2 != t && 3 == t ? "#763042" : "#263d7d", this.addEvt();
  }, Object.defineProperty(F$e.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), F$e.prototype.setData = function (t) {
    this.F$xe = t, this.F$ue.text = t.name, this.F$Ce.skin = t.select ? "ffflogin/f14b.png" : "ffflogin/f15b.png";
  }, F$e.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, F$e.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, F$e.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, F$e.prototype.clkHdler = function () {
    this.F$xe && this.F$xe.callBack && this.F$xe.callBack(this.F$xe.index);
  }, t.SelectLeftListItem = F$e;
}(modules = modules || {}), function (t) {
  function F$e() {
    var t = e.call(this) || this;return t.F$Ce = new Laya.Image("ffflogin/f16b.png"), t.F$ue = new Laya.Label(), t.F$ue.fontSize = 30, t.F$ue.color = t.F$C, t.addChild(t.F$Ce), t.F$We = new Laya.Image(), t.addChild(t.F$We), t.width = 358, t.height = 70, t.addChild(t.F$ue), t.F$We.centerY = 0, t.F$We.x = 18, t.F$ue.x = 80, t.F$ue.centerY = 0, t.F$Ce.graphics.drawRect(0, 0, t.width, t.height, "#00sasd"), t;
  }var e;t = t.F$o || (t.F$o = {}), e = Laya.View, __extends(F$e, e), F$e.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.F$m = Browser.window.PF_INFO;var t = this.F$m.loadingType;this.F$C = 1 != t && 2 != t && 3 == t ? "#763042" : "#34267d", this.addEvt();
  }, Object.defineProperty(F$e.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), F$e.prototype.setData = function (t) {
    this.F$xe = t, this.F$ue.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.F$C, this.F$ue.text = -1 === t.status ? t.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === t.status ? t.server_name + "(\u5f85\u5f00\u670d)" : t.server_name, this.F$We.skin = this.getStatusSrc(t.status);
  }, F$e.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, F$e.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, F$e.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, F$e.prototype.clkHdler = function () {
    this.F$xe && this.F$xe.callBack && this.F$xe.callBack(this.F$xe);
  }, F$e.prototype.getStatusSrc = function (t) {
    var e = "";return 2 === t ? e = "ffflogin/f18b.png" : 1 === t ? e = "ffflogin/f19b.png" : -1 !== t && 0 !== t || (e = "ffflogin/f20b.png"), e;
  }, t.SelectRightListItem = F$e;
}(modules = modules || {}), window.ServerLoading = ServerLoading;