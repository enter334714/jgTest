"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, i) {
    t.__proto__ = i;
  } || function (t, i) {
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
  };return function (t, i) {
    function Ah() {
      this.constructor = t;
    }e(t, i), t.prototype = null === i ? Object.create(i) : (Ah.prototype = i.prototype, new Ah());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (t) {
  __extends(Ap, e = View), Ap.prototype.createChildren = function () {
    e.prototype.createChildren.call(this), this.createView(t.Am.uiView);
  }, Ap.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/b2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "bbblogin/b6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "bbblogin/b3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "bbblogin/b4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "bbblogin/b5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] };var i = Ap;function Ap() {
    return e.call(this) || this;
  }var e;t.Am = i;
}(ui = ui || {}), function (t) {
  __extends(Ap, e = View), Ap.prototype.createChildren = function () {
    e.prototype.createChildren.call(this), this.createView(t.Ap.uiView);
  }, Ap.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/b1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "bbbloding/a13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "bbbloding/a14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "bbbloding/a16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "bbbloding/a17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "bbbloding/a20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "bbbloding/a19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "bbbloding/a18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "bbbloding/a18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "bbbloding/a1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }] };var i = Ap;function Ap() {
    return e.call(this) || this;
  }var e;t.Ap = i;
}(ui = ui || {}), function (t) {
  __extends(Ap, e = View), Ap.prototype.createChildren = function () {
    View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), View.regComponent("Text", laya.display.Text), e.prototype.createChildren.call(this), this.createView(t.Ah.uiView);
  }, Ap.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/b2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "bbblogin/b6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "bbblogin/b3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "bbblogin/b4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "bbblogin/b5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "bbblogin/b21b.png", centerX: 0 } }, { type: "Image", props: { y: 1102, var: "imgCheatTip", skin: "bbblogin/b27b.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 927, x: 159, var: "hotImage", skin: "bbblogin/b18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/b1b.png", centerX: 0, bottom: 30 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "bbblogin/b12b.png", name: "enterBtn", centerX: 0 } }, { type: "Image", props: { x: 196, visible: !1, var: "privacyToggle", skin: "bbblogin/b29b.png", bottom: 4 } }, { type: "Label", props: { y: 640, x: 0, width: 720, var: "txtTip", valign: "middle", text: "\u63d0\u793a\u5185\u5bb9", strokeColor: "#ffffff", stroke: 2, height: 32, fontSize: 32, color: "#ff0000", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }, { type: "HTMLDivElement", props: { y: 1255, x: 256, visible: !1, var: "privacyTip", height: 16 } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "bbblogin/b11b.png" } }, { type: "Image", props: { y: 257, x: 594, visible: !1, var: "privacyBtn", skin: "bbblogin/b13b.png", name: "privacyBtn" } }, { type: "Image", props: { visible: !1, var: "ageTipBtn", top: 1, scaleY: .5, scaleX: .5, name: "privacyBtn", left: 1 } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "bbblogin/b8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "bbblogin/b10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "mNoticeBg", skin: "bbblogin/b8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "bbblogin/b10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "privacyBg", skin: "bbblogin/b8b.png", name: "privacyBg", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "privacyClose", skin: "bbblogin/b10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "privacyClose2", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTabPrivacy", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "privacyTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "privacyPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "privacyContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "bbblogin/b9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "bbblogin/b17b.png" } }] }, { type: "Box", props: { width: 720, visible: !1, var: "jumpBg", mouseThrough: !1, height: 1280, centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { x: 33, width: 655, skin: "bbblogin/b8b.png", height: 994, centerY: 0, centerX: 0 } }, { type: "Button", props: { width: 274, var: "btnJump", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u8df3\u8f6c", height: 59, centerY: 436, centerX: 0 } }, { type: "Label", props: { width: 234, var: "jumpTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", fontSize: 30, color: "#ffffff", centerY: -408, centerX: 0, bold: !1, align: "center" } }, { type: "Panel", props: { x: 94, width: 545, var: "jumpPanel", height: 733, centerY: 10 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "jumpContent", height: 733 } }] }, { type: "Image", props: { x: 596, visible: !1, var: "closeBtn", skin: "bbblogin/b17b.png", name: "closeBtn", centerY: -402 } }] }] };var i = Ap;function Ap() {
    return e.call(this) || this;
  }var e;t.Ah = i;
}(ui = ui || {}), function (t) {
  function Am() {
    return i.call(this) || this;
  }var i;t = t.AP || (t.AP = {}), i = ui.Am, __extends(Am, i), Am.prototype.initialize = function () {
    i.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
  }, Am.prototype.addEvt = function () {
    this.on(Laya.Event.CLICK, this, this.AL);
  }, Am.prototype.rmEvts = function () {
    this.off(Laya.Event.CLICK, this, this.AL);
  }, Am.prototype.onOpened = function () {
    this.Aq = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
  }, Am.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), i.prototype.destroy.call(this, t);
  }, Am.prototype.AL = function () {
    1e4 < Date.now() - this.Aq && (this.Aq -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
  }, t.AuthorizationPanel = Am;
}(modules = modules || {}), function (t) {
  var i, e, s, o;function Ad() {
    var t = n.call(this) || this;return t.AY = new e(), t.addChild(t.AY), t.Ad = null, t.AK = [], t.AD = !1, t.AF = 0, t.AR = !0, t.A$ = 6, t.AA = !1, t.on(i.DISPLAY, t, t.AB), t.on(i.UNDISPLAY, t, t.An), t;
  }var n;t = t.Ak || (t.Ak = {}), i = Laya.Event, e = Laya.Image, s = Laya.Component, o = Laya.Loader, __extends(Ad, n = s), Ad.create = function (t, i, e, s, n, o, a) {
    void 0 === s && (s = 0), void 0 === n && (n = 6), void 0 === o && (o = !0), void 0 === a && (a = !1);var r = new Ad();return r.skin(i, e, s), r.durFrm = n, r.loop = o, r.atHide = a, t && t.addChild(r), r;
  }, Ad.play = function (t) {
    t && (t.visible = !0, t.play());
  }, Ad.stop = function (t) {
    t && (t.visible = !1, t.stop());
  }, Ad.prototype.destroy = function (t) {
    Laya.timer.clear(this, this.Ac), this.off(i.DISPLAY, this, this.AB), this.off(i.UNDISPLAY, this, this.An), n.prototype.destroy.call(this, t);
  }, Ad.prototype.AB = function () {}, Ad.prototype.An = function () {}, Ad.prototype.skin = function (t, i, e) {
    if (this.Ad != t) {
      this.Ad = t, this.AK = [];for (var s = 0, n = e; n <= i; n++) this.AK[s++] = t + "/" + n + ".png";e = o.getRes(this.AK[0]);e && (this.width = e.sourceWidth, this.height = e.sourceHeight), this.Ac();
    }
  }, Object.defineProperty(Ad.prototype, "atHide", { get: function () {
      return this.AA;
    }, set: function (t) {
      this.AA = t;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(Ad.prototype, "durFrm", { set: function (t) {
      this.A$ != t && (this.A$ = t, this.AD && (Laya.timer.clear(this, this.Ac), Laya.timer.loop(this.A$ * (1e3 / 60), this, this.Ac)));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(Ad.prototype, "loop", { set: function (t) {
      this.AR = t;
    }, enumerable: !0, configurable: !0 }), Ad.prototype.play = function () {
    this.AD && this.stop(), this.AD = !0, this.AF = 0, Laya.timer.loop(this.A$ * (1e3 / 60), this, this.Ac), this.Ac();
  }, Ad.prototype.stop = function () {
    this.AD = !1, this.AF = 0, this.Ac(), Laya.timer.clear(this, this.Ac);
  }, Ad.prototype.pause = function () {
    this.AD && (this.AD = !1, Laya.timer.clear(this, this.Ac));
  }, Ad.prototype.resume = function () {
    this.AD || (this.AD = !0, Laya.timer.loop(this.A$ * (1e3 / 60), this, this.Ac), this.Ac());
  }, Object.defineProperty(Ad.prototype, "isPlay", { get: function () {
      return this.AD;
    }, enumerable: !0, configurable: !0 }), Ad.prototype.Ac = function () {
    this.AK && 0 != this.AK.length && (this.AY.skin = this.AK[this.AF], this.AD && (this.AF++, this.AF == this.AK.length && (this.AR ? this.AF = 0 : (Laya.timer.clear(this, this.Ac), this.AD = !1, this.AA && (this.visible = !1), this.event(i.COMPLETE)))));
  }, t.PanelEff = Ad;
}(modules = modules || {}), function (t) {
  var i, e;function Am(t, i) {
    void 0 === t && (t = 0);var e = s.call(this) || this;return e.Ae = { bgImgSkin: "bbbloding/a3a.jpg", topImgSkin: "bbbloding/a10a.jpg", btmImgSkin: "bbbloding/a4a.jpg", leftImgSkin: "bbbloding/a6a.jpg", rightImgSkin: "bbbloding/a8a.jpg", loadingBarBgSkin: "bbbloding/a13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.Aa = { bgImgSkin: "bbbloding/a12a.jpg", topImgSkin: "bbbloding/a11a.jpg", btmImgSkin: "bbbloding/a5a.jpg", leftImgSkin: "bbbloding/a7a.jpg", rightImgSkin: "bbbloding/a9a.jpg", loadingBarBgSkin: "bbbloding/a15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.AZ = 0, e.AH(1 == t ? e.Aa : e.Ae), e.copyRightImg.skin = i, e;
  }var s;i = t.AP || (t.AP = {}), e = t.Ak.PanelEff, s = ui.Ap, __extends(Am, s), Am.prototype.initialize = function () {
    var t;s.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.AW = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.AW && (t = this.AW.loadingType, this.loadingTips.color = 1 != t && (2 == t || 101 == t) ? "#000000" : "#f2ffb5"), this.AE = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
  }, Am.prototype.toAllProgress = function (t) {
    var i = this;if (-1 === t) return i.AZ = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);var e;-2 !== t ? (i.AZ < .9 ? i.AZ += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : i.AZ < 1 && (i.AZ += 1e-4), .9999 < i.AZ && (i.AZ = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
      .9 < i.AZ && toAllProgress(-1);
    })), e = 590 * (t = i.AZ), i.AZ = i.AZ > t ? i.AZ : t, i.loadingBar.width = e, e = i.loadingBar.x + e, i.loadingImg2.x = e - 15, 364 <= e ? (i.loadingImg1.visible = !0, i.loadingImg1.x = e - 202) : i.loadingImg1.visible = !1, i.percentageTips.text = (100 * t >> 0) + "%", i.AZ < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress)) : Laya.timer.clear(this, this.toAllProgress);
  }, Am.prototype.toProgress = function (t, i, e) {
    var s = this;var n = 590 * (t = 1 < t ? 1 : t);s.AZ = s.AZ > t ? s.AZ : t, s.loadingBar.width = n;n = s.loadingBar.x + n;s.loadingImg2.x = n - 15, 364 <= n ? (s.loadingImg1.visible = !0, s.loadingImg1.x = n - 202) : s.loadingImg1.visible = !1, s.percentageTips.text = (100 * t >> 0) + "%", s.loadingTips.text = i;for (var o = e - 1, a = 0; a < this.AE.length; a++) s.AE[a].skin = a < o ? "bbbloding/a20a.png" : o === a ? "bbbloding/a19a.png" : "bbbloding/a18a.png";
  }, Am.prototype.onOpened = function () {
    this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.AW.lastVersion + "      \u7248\u672c\uff1a" + this.AW.wxVersion, this.showGetBtn();
  }, Am.prototype.close = function (t) {
    this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.AI), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.Ab);
  }, Am.prototype.resetWinFun = function () {
    Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
  }, Am.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.resetWinFun(), s.prototype.destroy.call(this, t);
  }, Am.prototype.showGetBtn = function () {
    this.AW.showGetBtn && 1 == this.AW.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "bbbloding/a1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.Ab), this.AT(), this.Aj(!0));
  }, Am.prototype.Ab = function () {
    this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "bbbloding/a2a.png", this.Ax(), this.Aj(!1));
  }, Am.prototype.AH = function (t) {
    this.bgImg.skin = t.bgImgSkin, this.topImg.skin = t.topImgSkin, this.btmImg.skin = t.btmImgSkin, this.leftImg.skin = t.leftImgSkin, this.rightImg.skin = t.rightImgSkin, this.copyRightImg.bottom = t.copyRightImgBottom, this.processBox1.y = t.processBox1Y, this.processBox2.y = t.processBox2Y, this.loadingBarBg.skin = t.loadingBarBgSkin, this.loadingTips.fontSize = t.loadingTipsSize, this.getTipsBtn.visible = this.AW.showGetBtn && 1 == this.AW.showGetBtn, this.getTipsBtn.visible ? this.AT() : this.Ax(), this.Aj(this.getTipsBtn.visible);
  }, Am.prototype.AT = function () {
    this.AQ || (this.AQ = e.create(this.getTipsBtn, "bwxeff", 4, 0, 12), this.AQ.pos(161, 106), this.AQ.scale(1.14, 1.15)), e.play(this.AQ);
  }, Am.prototype.Ax = function () {
    this.AQ && e.stop(this.AQ);
  }, Am.prototype.Aj = function (t) {
    Laya.timer.clear(this, this.AI), t ? (this.AM = 9, this.txtGetTm.visible = !0, this.AI(), Laya.timer.loop(1e3, this, this.AI)) : this.txtGetTm.visible = !1;
  }, Am.prototype.AI = function () {
    0 < this.AM ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.AM + "s)", this.AM--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.AI), this.Ab());
  }, i.LoadingPanel = Am;
}(modules = modules || {}), function (t) {
  var i, e, s;function Am(t) {
    void 0 === t && (t = "bbblogin/b1b.png");var i = n.call(this) || this;return i.Au = 0, i.AN = "multi_notice_key", i.AS = 0, i.A_ = 0, i.Al = "privacy_key", i.AJ = !0, i.Az = 0, i.copyRightImg.skin = t, i;
  }var n;i = t.AP || (t.AP = {}), e = Laya.List, s = Laya.Event, n = ui.Ah, __extends(Am, n), Am.prototype.initialize = function () {
    n.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.copyRightImg.skin = "", ServerLoading.instance.preloadServer(), this.AW = Browser.window.PF_INFO, this.Aw = new e(), this.Aw.vScrollBarSkin = "", this.Aw.itemRender = i.SelectLeftListItem, this.Aw.top = 5, this.Aw.repeatX = 1, this.Aw.spaceY = 5, this.Aw.width = this.leftListBox.width, this.Aw.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.Aw), this.AX = new e(), this.AX.vScrollBarSkin = "", this.AX.itemRender = i.SelectRightListItem, this.AX.top = 5, this.AX.repeatX = 1, this.AX.spaceY = 5, this.AX.width = this.rightListBox.width, this.AX.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.AX), this.As = new e(), this.As.hScrollBarSkin = "", this.As.itemRender = i.NoticeItem, this.As.repeatY = 1, this.As.width = this.boxTab.width, this.As.height = this.boxTab.height, this.boxTab.addChild(this.As), this.AG = new e(), this.AG.hScrollBarSkin = "", this.AG.itemRender = i.PrivacyItem, this.AG.repeatY = 1, this.AG.width = this.boxTab.width, this.AG.height = this.boxTab.height, this.boxTabPrivacy.addChild(this.AG);var t = this.AW.loadingType;this.AU = 1 == t || 2 == t || 3 == t || 101 == t ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.Ar = [], this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.privacyContent.color = "#212942", this.privacyContent.style.fontSize = 26, this.privacyContent.style.lineHeight = 28, this.privacyContent.mouseEnabled = !1, this.privacyTip.color = "#ffffff", this.privacyTip.style.fontSize = 18, this.privacyTip.style.lineHeight = 18, this.privacyTip.style.stroke = 2, this.privacyTip.style.strokeColor = "#000000", this.privacyTip.style.wordWrap = !1, this.jumpContent.color = "#212942", this.jumpContent.style.fontSize = 26, this.jumpContent.style.lineHeight = 28, this.jumpContent.mouseEnabled = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
  }, Am.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), this.Ay(), this.AV(), this.Ao(), this.Af(), this.ageTipsContent = null, this.Aw && (this.Aw.removeSelf(), this.Aw.destroy(), this.Aw = null), this.AX && (this.AX.removeSelf(), this.AX.destroy(), this.AX = null), this.As && (this.As.removeSelf(), this.As.destroy(), this.As = null), this.AG && (this.AG.removeSelf(), this.AG.destroy(), this.AG = null), Laya.timer.clear(this, this.Ai), n.prototype.destroy.call(this, t);
  }, Am.prototype.addEvt = function () {
    this.bgImg.on(Laya.Event.CLICK, this, this.Av), this.enterBtn.on(Laya.Event.CLICK, this, this.Ag), this.selectServer.on(Laya.Event.CLICK, this, this.At), this.selectServer.on(Laya.Event.CLICK, this, this.At), this.closeBg.on(Laya.Event.CLICK, this, this.AO), this.closeBtn.on(Laya.Event.CLICK, this, this.AC), this.noticeBtn.on(Laya.Event.CLICK, this, this.Amm), this.noticeClose.on(Laya.Event.CLICK, this, this.Apm), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.Ahm), this.mNoticeClose.on(Laya.Event.CLICK, this, this.APm), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.APm), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.ALm), this.privacyBtn.on(Laya.Event.CLICK, this, this.Aqm), this.ageTipBtn.on(Laya.Event.CLICK, this, this.Akm), this.privacyClose.on(Laya.Event.CLICK, this, this.AYm), this.privacyClose2.on(Laya.Event.CLICK, this, this.AYm), this.privacyPanel.on(Laya.Event.MOUSE_DOWN, this, this.Adm), this.privacyToggle.on(Laya.Event.CLICK, this, this.AKm), this.privacyTip.on(Laya.Event.LINK, this, this.ADm), this.btnJump.on(Laya.Event.CLICK, this, this.AFm), this.jumpPanel.on(Laya.Event.MOUSE_DOWN, this, this.ARm), this.As.selectEnable = !0, this.As.selectHandler = Laya.Handler.create(this, this.A$m, null, !1), this.AG.selectEnable = !0, this.AG.selectHandler = Laya.Handler.create(this, this.AAm, null, !1);
  }, Am.prototype.rmEvts = function () {
    this.bgImg.off(Laya.Event.CLICK, this, this.Av), this.enterBtn.off(Laya.Event.CLICK, this, this.Ag), this.selectServer.off(Laya.Event.CLICK, this, this.At), this.selectServer.off(Laya.Event.CLICK, this, this.At), this.closeBg.off(Laya.Event.CLICK, this, this.AO), this.noticeBtn.off(Laya.Event.CLICK, this, this.Amm), this.closeBtn.off(Laya.Event.CLICK, this, this.AC), this.noticeClose.off(Laya.Event.CLICK, this, this.Apm), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.Ahm), this.mNoticeClose.off(Laya.Event.CLICK, this, this.APm), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.APm), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.ALm), this.privacyBtn.off(Laya.Event.CLICK, this, this.Aqm), this.ageTipBtn.off(Laya.Event.CLICK, this, this.Akm), this.privacyClose.off(Laya.Event.CLICK, this, this.AYm), this.privacyClose2.off(Laya.Event.CLICK, this, this.AYm), this.privacyPanel.off(Laya.Event.MOUSE_DOWN, this, this.Adm), this.privacyToggle.off(Laya.Event.CLICK, this, this.AKm), this.privacyTip.off(Laya.Event.LINK, this, this.ADm), this.btnJump.off(Laya.Event.CLICK, this, this.AFm), this.jumpPanel.off(Laya.Event.MOUSE_DOWN, this, this.ARm), this.As.selectEnable = !1, this.As.selectHandler = null, this.AG.selectEnable = !1, this.AG.selectHandler = null;
  }, Am.prototype.onOpened = function () {
    var s = this;this.Aq = Date.now(), this.AJ = !0, this.ABm = this.AW.selectedServer.server_id, this.Anm(this.AW.selectedServer), this.Aw.dataSource = this.AW.groupList, this.At(), req_multi_server_notice(4, this.AW.pkgName, this.AW.selectedServer.server_id, this.Acm.bind(this)), Laya.timer.frameOnce(1, this, function () {
      s.Aem = s.AW.privacy_data && s.AW.privacy_data.list ? s.AW.privacy_data.list : [], s.Aam = null != s.AW.privacy_login_pkg ? s.AW.privacy_login_pkg : 0;var t = "1" == localStorage.getItem(s.Al),
          i = 0 != PF_INFO.privacy_save_pkg,
          e = 0 == s.Aam || 1 == s.Aam;s.AZm = i && t || e, s.AHm();
    }), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.AW.lastVersion + "      \u7248\u672c\uff1a" + this.AW.wxVersion, this.serverName.color = this.selServer.color = this.AU, this.imgCheatTip.visible = 1 == this.AW.anti_cheat_pkg, this.txtTip.visible = !1;
  }, Am.prototype.preload = function () {}, Am.prototype.Av = function () {
    this.AZm ? 1e4 < Date.now() - this.Aq && (this.Aq -= 2e3, ServerLoading.instance.enterDefaultServer()) : this.AWm("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
  }, Am.prototype.Ag = function () {
    this.AZm ? this.AEm(this.AW.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.AW.selectedServer, req_server_check_ban(0, this.AW.selectedServer.server_id)) : this.AWm("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
  }, Am.prototype.At = function () {
    this.AW.hasGroupReq ? this.listBg.visible = !0 : (this.AW.hasGroupReq = !0, req_server_group(0));
  }, Am.prototype.AO = function () {
    this.listBg.visible = !1;
  }, Am.prototype.AC = function () {
    this.jumpBg.visible = !1;
  }, Am.prototype.Amm = function () {
    this.AIm();
  }, Am.prototype.APm = function () {
    this.mNoticeBg.visible = !1;
  }, Am.prototype.Apm = function () {
    this.noticeBg.visible = !1;
  }, Am.prototype.Aqm = function () {
    this.Abm();
  }, Am.prototype.AYm = function () {
    this.privacyBg.visible = !1;
  }, Am.prototype.AKm = function () {
    this.AZm = !this.AZm, this.AZm && localStorage.setItem(this.Al, "1"), this.privacyToggle.skin = "bbblogin/" + (this.AZm ? "b29b.png" : "b28b.png");
  }, Am.prototype.ADm = function (t) {
    this.Abm(Number(t));
  }, Am.prototype.AFm = function () {
    Browser.window.forceJumpMiniGame ? Browser.window.forceJumpMiniGame() : this.AC();
  }, Am.prototype.Ahm = function () {
    this.Au = this.noticeContent.mouseY, Laya.stage.on(s.MOUSE_MOVE, this, this.ATm), Laya.stage.on(s.MOUSE_UP, this, this.Ay), Laya.stage.on(s.MOUSE_OUT, this, this.Ay);
  }, Am.prototype.ATm = function () {
    var t;this.noticeContent && (t = this.Au - this.noticeContent.mouseY, this.noticeContent.scrollY += t, this.Au = this.noticeContent.mouseY);
  }, Am.prototype.Ay = function () {
    Laya.stage.off(s.MOUSE_MOVE, this, this.ATm), Laya.stage.off(s.MOUSE_UP, this, this.Ay), Laya.stage.off(s.MOUSE_OUT, this, this.Ay);
  }, Am.prototype.ALm = function () {
    this.AS = this.mNoticePanel.mouseY, Laya.stage.on(s.MOUSE_MOVE, this, this.Ajm), Laya.stage.on(s.MOUSE_UP, this, this.AV), Laya.stage.on(s.MOUSE_OUT, this, this.AV);
  }, Am.prototype.Ajm = function () {
    var t;this.mNoticeContent && (t = this.AS - this.mNoticePanel.mouseY, this.mNoticeContent.y -= t, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.AS = this.mNoticePanel.mouseY);
  }, Am.prototype.AV = function () {
    Laya.stage.off(s.MOUSE_MOVE, this, this.Ajm), Laya.stage.off(s.MOUSE_UP, this, this.AV), Laya.stage.off(s.MOUSE_OUT, this, this.AV);
  }, Am.prototype.Adm = function () {
    this.A_ = this.privacyPanel.mouseY, Laya.stage.on(s.MOUSE_MOVE, this, this.Axm), Laya.stage.on(s.MOUSE_UP, this, this.Ao), Laya.stage.on(s.MOUSE_OUT, this, this.Ao);
  }, Am.prototype.Axm = function () {
    var t;this.privacyContent && (t = this.A_ - this.privacyPanel.mouseY, this.privacyContent.y -= t, this.privacyPanel.height < this.privacyContent.contextHeight ? this.privacyContent.y < this.privacyPanel.height - this.privacyContent.contextHeight ? this.privacyContent.y = this.privacyPanel.height - this.privacyContent.contextHeight : 0 < this.privacyContent.y && (this.privacyContent.y = 0) : this.privacyContent.y = 0, this.A_ = this.privacyPanel.mouseY);
  }, Am.prototype.Ao = function () {
    Laya.stage.off(s.MOUSE_MOVE, this, this.Axm), Laya.stage.off(s.MOUSE_UP, this, this.Ao), Laya.stage.off(s.MOUSE_OUT, this, this.Ao);
  }, Am.prototype.ARm = function () {
    this.Az = this.jumpPanel.mouseY, Laya.stage.on(s.MOUSE_MOVE, this, this.AQm), Laya.stage.on(s.MOUSE_UP, this, this.Af), Laya.stage.on(s.MOUSE_OUT, this, this.Af);
  }, Am.prototype.AQm = function () {
    var t;this.jumpContent && (t = this.Az - this.jumpPanel.mouseY, this.jumpContent.y -= t, this.jumpPanel.height < this.jumpContent.contextHeight ? this.jumpContent.y < this.jumpPanel.height - this.jumpContent.contextHeight ? this.jumpContent.y = this.jumpPanel.height - this.jumpContent.contextHeight : 0 < this.jumpContent.y && (this.jumpContent.y = 0) : this.jumpContent.y = 0, this.Az = this.jumpPanel.mouseY);
  }, Am.prototype.Af = function () {
    Laya.stage.off(s.MOUSE_MOVE, this, this.AQm), Laya.stage.off(s.MOUSE_UP, this, this.Af), Laya.stage.off(s.MOUSE_OUT, this, this.Af);
  }, Am.prototype.A$m = function () {
    if (this.As.dataSource) {
      for (var t, i = 0; i < this.As.dataSource.length; i++) {
        var e = this.As.dataSource[i];e[1] = i == this.As.selectedIndex, i == this.As.selectedIndex && (t = e[0]);
      }this.mNoticeTitle.text = t && t.title ? t.title : "", this.mNoticeContent.innerHTML = t && t.content ? t.content : "", this.mNoticeContent.y = 0;
    }
  }, Am.prototype.AAm = function () {
    var t = this.AG.dataSource;if (t) {
      for (var i = 0; i < t.length; i++) t[i][1] = i == this.AG.selectedIndex;var e = this.Aem[this.AG.selectedIndex];e && e.content && (e.content = e.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "")), this.privacyTitle.text = e && e.title ? e.title : "\u6807\u9898", this.privacyContent.innerHTML = e && e.content ? e.content : "\u52a0\u8f7d\u4e2d...", this.privacyContent.y = 0;
    }
  }, Am.prototype.Anm = function (t) {
    var i = t.server_name;this.serverName.text = i + this.AMm(t), this.serverName.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.AU, this.hotImage.skin = this.Aum(t), this.AW.cdn = t.cdn || "", this.AW.selectedServer = t, this.noticeBtn.visible = !0;
  }, Am.prototype.ANm = function (t) {
    this.showGroupList(t);
  }, Am.prototype.ASm = function (t) {
    this.Anm(t), this.listBg.visible = !1;
  }, Am.prototype.showGroupList = function (t) {
    if (void 0 === t && (t = 0), this.parent) {
      var i = this.AW.groupList;if (i && 0 !== i.length) {
        for (var e = i.length, s = 0; s < e; s++) i[s].callBack = this.ANm.bind(this), i[s].select = s == t, i[s].index = s;var n = (this.Aw.array = i)[t].id;this.AW.serverList[n] ? this.showServerList(n) : this.AW.hasServerReq || (this.AW.hasServerReq = !0, -1 == n ? req_server_owner(0) : -2 == n ? req_recommend_server_list(0) : req_server_list(0, n));
      }
    }
  }, Am.prototype.showServerList = function (t) {
    if (this.parent && this.AW.serverList[t]) {
      for (var i = this.AW.serverList[t], e = i.length, s = 0; s < e; s++) i[s].callBack = this.ASm.bind(this);this.AX.array = i;
    }
  }, Am.prototype.AEm = function (t) {
    if (-1 != t.status) return 0 != t.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);var i = "\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d",
        t = t.maintain_time;return t && "" != t && " " != t && (i += "\n(\u9884\u8ba1\u65f6\u95f4" + t + ")"), alert(i), !1;
  }, Am.prototype.Aum = function (t) {
    var i = t.status,
        t = t.is_recommend,
        e = "bbblogin/b19b.png";return 1 !== i && 2 !== i || 1 !== t && 3 !== t ? 1 !== i && 2 !== i || 2 !== t ? -1 !== i && 0 !== i || (e = "bbblogin/b20b.png") : e = "bbblogin/b19b.png" : e = "bbblogin/b18b.png", e;
  }, Am.prototype.AMm = function (t) {
    var i = t.status,
        e = "";return 1 == t.is_recommend || 3 == t.is_recommend ? e = "(\u63a8\u8350)" : -1 === i ? e = "(\u7ef4\u62a4\u4e2d)" : 0 === i && (e = "(\u5f85\u5f00\u670d)"), e;
  }, Am.prototype.Acm = function (t) {
    console.log("onMultiNoticeCallback, param = ", t);var i = Date.now() / 1e3,
        e = localStorage.getItem(this.AN),
        s = !(this.Ar = []);if ("success" == t.state) for (var n in t.data) {
      n = t.data[n];var o, a, r;n && (o = i < n.end_time, a = 1 == n.pop_type, r = 2 == n.pop_type && n.key + "" != e, !s && o && (a || r) && (s = !0), o && this.Ar.push(n), r && localStorage.setItem(this.AN, n.key + ""));
    }this.Ar.sort(function (t, i) {
      return t.login_id - i.login_id;
    }), console.log("onMultiNoticeCallback, datas = ", this.Ar), s && this.AIm();
  }, Am.prototype.AIm = function () {
    if (this.As) {
      if (this.Ar) {
        this.As.x = 2 < this.Ar.length ? 0 : (this.boxTab.width - 274 * this.Ar.length) / 2;for (var t = [], i = 0; i < this.Ar.length; i++) {
          var e = this.Ar[i];t.push([e, i == this.As.selectedIndex]);
        }0 < (this.As.dataSource = t).length ? (this.As.selectedIndex = 0, this.As.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.Ar.length <= 1, this.boxTab.visible = 1 < this.Ar.length;
      }this.mNoticeBg.visible = !0;
    }
  }, Am.prototype.A_m = function (t) {
    if (!this.destroyed) {
      if (console.log("p_onPrivacyCallback, param = ", t), "success" == t.state) for (var i in t.data) {
        var i = Number(i),
            e = t.data[i];this.Aem && this.Aem[i] && (this.Aem[i].content = e.content);
      }this.AAm();
    }
  }, Am.prototype.AHm = function () {
    for (var t = "", i = 0; i < this.Aem.length; i++) t += '<a href="' + i + '" style="color:#14ff28;text-decoration:none">' + this.Aem[i].title + "</a>", i < this.Aem.length - 1 && (t += "\u3001");this.privacyTip.innerHTML = "\u6211\u5df2\u7ecf\u8be6\u7ec6\u9605\u8bfb\u5e76\u540c\u610f" + t, this.privacyToggle.skin = "bbblogin/" + (this.AZm ? "b29b.png" : "b28b.png"), this.privacyTip.x = (720 - this.privacyTip.width) / 2, this.privacyToggle.x = this.privacyTip.x - 30, this.privacyBtn.visible = 0 < this.Aem.length, this.privacyToggle.visible = this.privacyTip.visible = 0 < this.Aem.length && 0 != this.Aam;
  }, Am.prototype.Abm = function (t) {
    if (void 0 === t && (t = 0), this.AG) {
      if (this.Aem) {
        this.AG.x = 2 < this.Aem.length ? 0 : (this.boxTab.width - 274 * this.Aem.length) / 2;for (var i = [], e = 0; e < this.Aem.length; e++) {
          var s = this.Aem[e],
              s = s && s.title ? s.title : "",
              n = e == this.AG.selectedIndex;i.push([s, n]);
        }0 < (this.AG.dataSource = i).length ? ((t = t < 0 ? 0 : t) > i.length - 1 && (t = 0), this.AG.selectedIndex = t, this.AG.scrollTo(t)) : (this.privacyTitle.text = "\u7a7a", this.privacyContent.text = ""), this.privacyClose2.visible = this.Aem.length <= 1, this.boxTabPrivacy.visible = 1 < this.Aem.length;
      }this.AJ && (this.AJ = !1, req_privacy(this.AW.pkgName, this.A_m.bind(this))), this.privacyBg.visible = !0;
    }
  }, Am.prototype.openJumpView = function (t, i, e, s) {
    void 0 === s && (s = !1), this.jumpTitle.text = t || "\u6682\u65e0\u516c\u544a", this.jumpContent.innerHTML = i || "", this.btnJump.label = e || "\u786e\u5b9a", this.jumpContent.y = 0, this.jumpBg.visible = !0, this.closeBtn.visible = s;
  }, Am.prototype.showAgeTipsBtn = function (t, i, e, s, n) {
    (this.ageTipBtn.visible = t) && (this.ageTipBtn.skin = i || "bbblogin/b11b.png"), this.ageTipsContent = e, this.ageTipBtn.x = s || 0, this.ageTipBtn.y = n || 0;
  }, Am.prototype.Akm = function () {
    this.openJumpView("\u9002\u9f84\u516c\u544a", this.ageTipsContent, "\u786e\u8ba4", !0);
  }, Am.prototype.AWm = function (t) {
    this.txtTip.text = t, this.txtTip.y = 640, this.txtTip.visible = !0, this.Alm = 1, Laya.timer.clear(this, this.Ai), this.Ai(), Laya.timer.frameLoop(1, this, this.Ai);
  }, Am.prototype.Ai = function () {
    this.txtTip.y -= this.Alm, this.Alm *= 1.1, this.txtTip.y <= 590 && (this.txtTip.visible = !1, Laya.timer.clear(this, this.Ai));
  }, i.SelectServerPanel = Am;
}(modules = modules || {});var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.AP.AuthorizationPanel,
    LoadingPanel = modules.AP.LoadingPanel,
    SelectServerPanel = modules.AP.SelectServerPanel,
    ServerLoading = function () {
  function Ad(t) {
    this.m_loadingRes = ["bbbloding/a13a.png", "bbbloding/a15a.png", "bbbloding/a14a.png", "bbbloding/a16a.png", "bbbloding/a17a.png", "bbbloding/a18a.png", "bbbloding/a19a.png", "bbbloding/a20a.png", "bwxeff/b100b.png", "bwxeff/b101b.png", "bwxeff/b102b.png", "bwxeff/b103b.png", "bwxeff/b104b.png", "bbbloding/a3a.jpg", "bbbloding/a12a.jpg", "bbbloding/a1a.png", "bbbloding/a2a.png", "bbbloding/a4a.jpg", "bbbloding/a6a.jpg", "bbbloding/a8a.jpg", "bbbloding/a10a.jpg", "bbbloding/a5a.jpg", "bbbloding/a7a.jpg", "bbbloding/a9a.jpg", "bbbloding/a11a.jpg"], this.m_serverRes = ["bbblogin/b10b.png", "bbblogin/b11b.png", "bbblogin/b12b.png", "bbblogin/b13b.png", "bbblogin/b14b.png", "bbblogin/b15b.png", "bbblogin/b16b.png", "bbblogin/b17b.png", "bbblogin/b18b.png", "bbblogin/b19b.png", "bbblogin/b20b.png", "bbblogin/b21b.png", "bbblogin/b2b.jpg", "bbblogin/b3b.jpg", "bbblogin/b4b.jpg", "bbblogin/b5b.jpg", "bbblogin/b6b.jpg", "bbblogin/b1b.png", "bbblogin/b8b.png", "bbblogin/b9b.png", "bbblogin/b24b.png", "bbblogin/b25b.png", "bbblogin/b27b.png", "bbblogin/b29b.png", "bbblogin/b28b.png", "bbblogin/b123b.png", "bbblogin/b199b.png"], this.copyRightUrl = "bbblogin/b1b.png", this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.AJm = !1, this.Azm = "", Ad.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var i = Laya.AtlasResourceManager;i.maxTextureCount = 6, i.atlasTextureWidth = i.atlasTextureHeight = 1024, i._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.Awm.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } }, "b28b.png": { frame: { h: 25, idx: 0, w: 25, x: 444, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 2 } }, "b29b.png": { frame: { h: 27, idx: 0, w: 26, x: 470, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = Ad.instance.requestWeb, Browser.window.imgMgrLoad = Ad.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.Awm();
  }return Ad.prototype.changeServerLoading = function (t) {
    Ad.instance.m_layer.visible = t;
  }, Ad.prototype.openAuthor = function () {
    Ad.instance.m_author || (Ad.instance.m_author = new AuthorizationPanel()), Ad.instance.m_author.parent || Ad.instance.m_layer.addChild(Ad.instance.m_author), Ad.instance.AXm();
  }, Ad.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, Ad.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, Ad.prototype.Asm = function () {
    Ad.instance.m_server || (Ad.instance.m_server = new SelectServerPanel(this.copyRightUrl)), Ad.instance.m_server.parent || Ad.instance.m_layer.addChild(Ad.instance.m_server), Ad.instance.AXm();
  }, Ad.prototype.openJumpView = function (t, i, e, s) {
    void 0 === s && (s = !1), this.Asm(), Ad.instance.m_server.openJumpView(t, i, e, s);
  }, Ad.prototype.openJumpTipsBtn = function (t, i, e, s, n) {
    this.Asm(), Ad.instance.m_server.showAgeTipsBtn(t, i, e, s, n);
  }, Ad.prototype.getCertificatePng = function () {
    window.sdkInitRes = window.sdkInitRes || {};var t = "bbblogin/b123b.png",
        i = "bbblogin/b1b.png";return 1 == sdkInitRes.develop ? 0 == (PF_INFO.develop_certificate_pkg || 0) ? t : i : 0 == PF_INFO.release_certificate_pkg ? t : i;
  }, Ad.prototype.openServer = function (t, i, e) {
    var s = this;this.copyRightUrl = e || this.getCertificatePng();for (var e = function () {
      s.Asm(), t && i && t.call(i);
    }, n = !0, o = 0, a = this.m_serverRes; o < a.length; o++) {
      var r = a[o];if (null == Laya.Loader.getRes(r)) {
        n = !1;break;
      }
    }n ? e() : Laya.loader.load(this.m_serverRes, Handler.create(this, e));
  }, Ad.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, Ad.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, Ad.prototype.openLoading = function (t, i) {
    void 0 === t && (t = 0), i = i || this.getCertificatePng(), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Ad.instance.m_loading || (Ad.instance.m_loading = new LoadingPanel(t, i)), Ad.instance.m_loading.parent || Ad.instance.m_layer.addChild(Ad.instance.m_loading), Ad.instance.AXm();
    }));
  }, Ad.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var t = 0, i = this.m_serverRes; t < i.length; t++) {
      var e = i[t];Laya.Loader.clearCache(Ad.instance, e), Laya.Loader.clearRes(e, !0);
    }for (var s = 0, n = this.m_loadingRes; s < n.length; s++) e = n[s], Laya.Loader.clearCache(Ad.instance, e), Laya.Loader.clearRes(e, !0);this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, Ad.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && Ad.instance.m_loading.showGetBtn();
  }, Ad.prototype.enterDefaultServer = function () {
    var t = Browser.window.PF_INFO.selectedServer;this.AJm || -1 == t.status || 0 == t.status || (this.AJm = !0, Browser.window.PF_INFO.selectedServer = t, req_server_check_ban(0, t.server_id));
  }, Ad.prototype.sendRecord = function () {
    var t = "";t = (t = (t = (t = (t = (t = (t = (t += "newRegister=" + Browser.window.PF_INFO.newRegister) + ", isPrelodServer=" + this.m_isPrelodServer) + ", SelectServerPanel=" + (null != Ad.instance.m_server)) + ", isPrelodLoading=" + this.m_isPrelodLoading) + ", LoadingPanel=" + (null != Ad.instance.m_loading)) + ", resMgrLoad=" + (Browser.window.resMgrLoad == Ad.instance.requestWeb)) + ", imgMgrLoad=" + (Browser.window.imgMgrLoad == Ad.instance.requestWeb)) + ", errUrls=" + Ad.instance.Azm;for (var i = 0, e = this.m_serverRes; i < e.length; i++) t += ", " + (o = e[i]) + "=" + (null != Laya.Loader.getRes(o));for (var s = 0, n = this.m_loadingRes; s < n.length; s++) {
      var o;t += ", " + (o = n[s]) + "=" + (null != Laya.Loader.getRes(o));
    }var a = Browser.window.PF_INFO.selectedServer;a && (t = (t = (t += ", server_status=" + a.status) + (", server_id=" + a.server_id)) + (", server_name=" + a.server_name));a = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: t });console.error(a), this.AGm && this.AGm == t || (this.AGm = t, reqRecordError(a));
  }, Ad.prototype.AUm = function () {
    var t = Laya.stage,
        i = Math.floor(t.width),
        e = Math.floor(t.height);e / i < 1.7777778 ? (this.viewW = Math.floor(i / (e / 1280)), this.viewH = 1280, this.viewS = e / 1280) : (this.viewW = 720, this.viewH = Math.floor(e / (i / 720)), this.viewS = i / 720);e = Math.floor(t.width), i = Math.floor(t.height);i / e < 1.7777778 ? (this.viewW = Math.floor(e / (i / 1280)), this.viewH = 1280, this.viewS = i / 1280) : (this.viewW = 720, this.viewH = Math.floor(i / (e / 720)), this.viewS = e / 720), this.AXm();
  }, Ad.prototype.AXm = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, Ad.prototype.Awm = function () {
    if (Input.isInputting && Browser.onMobile) return e = parseInt(Input.inputContainer.style.top.replace("px", "")), t = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS, i = Browser.clientWidth / Render.canvas.width, 0 < (e = Browser.clientHeight - t * i - e) && (e = 0), void (Browser.container.style.top = e + "px");var t, i;Browser.container.style.top = "0px", t = Math.floor(Browser.width) + 1 & 2147483646, i = Math.floor(Browser.height) + 1 & 2147483646;var e = Laya.stage;3 == ENV || i < t ? (e.scaleMode = Laya.Stage.SCALE_NOSCALE, e.width = t, e.height = i) : (e.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, e.width = 840, e.height = Math.floor(i / (t / 840)) + 1 & 2147483646), this.AUm();
  }, Ad.prototype.requestWeb = function (t, i) {
    function Ah() {
      e.onload = null, e.onerror = null;
    }var e,
        s = t;(e = new Browser.window.Image()).onload = function () {
      Ah(), i(s, 200, e);
    }, e.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", s), Ad.instance.Azm += s + "|", Ah(), i(s, 404, null);
    }, e.src = s, -1 == Ad.instance.m_serverRes.indexOf(s) && -1 == Ad.instance.m_loadingRes.indexOf(s) || Laya.Loader.keepCache(Ad.instance, s);
  }, Ad.prototype.Arm = function (t, i) {
    return -1 != t.indexOf(i, t.length - i.length);
  }, Ad;
}();!function (t) {
  function Am() {
    var t = i.call(this) || this;return t.Aym = "#72441d", t.AVm = "#263d7d", t.width = 274, t.height = 59, t.Aom = new Laya.Image(), t.addChild(t.Aom), t.Afm = new Laya.Label(), t.Afm.fontSize = 30, t.Afm.color = t.AVm, t.addChild(t.Afm), t.Afm.centerX = 0, t.Afm.centerY = 0, t;
  }var i;t = t.AP || (t.AP = {}), i = Laya.View, __extends(Am, i), Am.prototype.initialize = function () {
    i.prototype.initialize.call(this), this.AW = Browser.window.PF_INFO, this.AW.loadingType, this.addEvt();
  }, Object.defineProperty(Am.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), Am.prototype.setData = function (t) {
    this.Aim = t[0], this.Avm = t[1], this.Afm.text = this.Aim.title, this.Afm.color = this.Avm ? this.Aym : this.AVm, this.Aom.skin = this.Avm ? "bbblogin/b25b.png" : "bbblogin/b24b.png";
  }, Am.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), i.prototype.destroy.call(this, t);
  }, Am.prototype.addEvt = function () {}, Am.prototype.rmEvts = function () {}, t.NoticeItem = Am;
}(modules = modules || {}), function (t) {
  function Am() {
    var t = i.call(this) || this;return t.Aym = "#72441d", t.AVm = "#263d7d", t.width = 274, t.height = 59, t.Aom = new Laya.Image(), t.addChild(t.Aom), t.Afm = new Laya.Label(), t.Afm.fontSize = 30, t.Afm.color = t.AVm, t.addChild(t.Afm), t.Afm.centerX = 0, t.Afm.centerY = 0, t;
  }var i;t = t.AP || (t.AP = {}), i = Laya.View, __extends(Am, i), Am.prototype.initialize = function () {
    i.prototype.initialize.call(this), this.AW = Browser.window.PF_INFO, this.AW.loadingType, this.addEvt();
  }, Object.defineProperty(Am.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), Am.prototype.setData = function (t) {
    this.Agm = t[0], this.Avm = t[1], this.Afm.text = this.Agm, this.Afm.color = this.Avm ? this.Aym : this.AVm, this.Aom.skin = this.Avm ? "bbblogin/b25b.png" : "bbblogin/b24b.png";
  }, Am.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), i.prototype.destroy.call(this, t);
  }, Am.prototype.addEvt = function () {}, Am.prototype.rmEvts = function () {}, t.PrivacyItem = Am;
}(modules = modules || {}), function (t) {
  function Am() {
    var t = i.call(this) || this;return t.width = 192, t.height = 70, t.Aom = new Laya.Image(), t.addChild(t.Aom), t.Atm = new Laya.Label(), t.Atm.fontSize = 28, t.Atm.color = t.AU, t.addChild(t.Atm), t.Atm.centerX = 0, t.Atm.centerY = 0, t.AOm = new Laya.Label(), t.AOm.fontSize = 22, t.AOm.color = t.AU, t.addChild(t.AOm), t.AOm.centerX = 0, t.AOm.y = 11, t.ACm = new Laya.Label(), t.ACm.fontSize = 26, t.ACm.color = t.AU, t.addChild(t.ACm), t.ACm.centerX = 0, t.ACm.y = 39, t;
  }var i;t = t.AP || (t.AP = {}), i = Laya.View, __extends(Am, i), Am.prototype.initialize = function () {
    i.prototype.initialize.call(this), this.AW = Browser.window.PF_INFO;var t = this.AW.loadingType;this.AU = 1 != t && 2 != t && 3 == t ? "#763042" : "#263d7d", this.addEvt();
  }, Object.defineProperty(Am.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), Am.prototype.setData = function (t) {
    this.Aim = t;var i = this.Aim.id,
        e = this.Aim.name;var s, n;this.Atm.visible = this.AOm.visible = this.ACm.visible = !1, -1 == i || -2 == i ? (this.Atm.visible = !0, this.Atm.text = e) : (i = "1-10\u670d", (n = (s = e).match("[0-9]{1,}")) && null != n.index && (s = e.slice(0, n.index), i = e.slice(n.index)), this.AOm.visible = this.ACm.visible = !0, this.AOm.text = s, this.ACm.text = i), this.Aom.skin = t.select ? "bbblogin/b14b.png" : "bbblogin/b15b.png";
  }, Am.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), i.prototype.destroy.call(this, t);
  }, Am.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, Am.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, Am.prototype.clkHdler = function () {
    this.Aim && this.Aim.callBack && this.Aim.callBack(this.Aim.index);
  }, t.SelectLeftListItem = Am;
}(modules = modules || {}), function (t) {
  function Am() {
    var t = i.call(this) || this;return t.width = 358, t.height = 70, t.Aom = new Laya.Image("bbblogin/b16b.png"), t.addChild(t.Aom), t.Aom.graphics.drawRect(0, 0, t.width, t.height, "#00sasd"), t.Amp = new Laya.Image(), t.Amp.centerY = 0, t.Amp.x = 7, t.addChild(t.Amp), t.Atm = new Laya.Label(), t.Atm.fontSize = 24, t.Atm.color = t.AU, t.Atm.x = 56, t.Atm.centerY = 0, t.addChild(t.Atm), t.App = new Laya.Label(), t.App.fontSize = 24, t.App.color = t.AU, t.App.x = 246, t.App.centerY = 0, t.addChild(t.App), t.Ahp = new Laya.Image(), t.Ahp.top = 0, t.Ahp.right = 0, t.addChild(t.Ahp), t.APp = new Laya.Label(), t.APp.fontSize = 20, t.APp.color = "#ffffff", t.APp.x = 225, t.APp.y = 46, t.addChild(t.APp), t;
  }var i;t = t.AP || (t.AP = {}), i = Laya.View, __extends(Am, i), Am.prototype.initialize = function () {
    i.prototype.initialize.call(this), this.AW = Browser.window.PF_INFO;var t = this.AW.loadingType;this.AU = 1 != t && 2 != t && 3 == t ? "#763042" : "#34267d", this.addEvt();
  }, Object.defineProperty(Am.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), Am.prototype.setData = function (t) {
    this.Aim = t;var t = this.Aim.status,
        i = this.Aim.server_name;this.Amp.skin = this.getStatusSrc(this.Aim), this.Atm.color = -1 === t ? "#d50000" : 0 === t ? "#49575a" : this.AU, this.Atm.text = i, this.App.text = -1 === t ? "\u7ef4\u62a4\u4e2d" : 0 === t ? "\u672a\u5f00\u670d" : "\u5df2\u5f00\u670d";i = 1 == this.Aim.is_recommend || 3 == this.Aim.is_recommend;(this.Ahp.visible = i) && (this.Ahp.skin = "bbblogin/b199b.png"), this.APp.text = -1 == this.Aim.status && this.Aim.maintain_time ? this.Aim.maintain_time : "";
  }, Am.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), i.prototype.destroy.call(this, t);
  }, Am.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, Am.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, Am.prototype.clkHdler = function () {
    this.Aim && this.Aim.callBack && this.Aim.callBack(this.Aim);
  }, Am.prototype.getStatusSrc = function (t) {
    var i = t.status,
        t = t.is_recommend,
        e = "bbblogin/b19b.png";return 1 !== i && 2 !== i || 1 !== t && 3 !== t ? 1 !== i && 2 !== i || 2 !== t ? -1 !== i && 0 !== i || (e = "bbblogin/b20b.png") : e = "bbblogin/b19b.png" : e = "bbblogin/b18b.png", e;
  }, t.SelectRightListItem = Am;
}(modules = modules || {}), window.ServerLoading = ServerLoading;