"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, i) {
    t.__proto__ = i;
  } || function (t, i) {
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
  };return function (t, i) {
    function $Z() {
      this.constructor = t;
    }e(t, i), t.prototype = null === i ? Object.create(i) : ($Z.prototype = i.prototype, new $Z());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (t) {
  __extends($_, e = View), $_.prototype.createChildren = function () {
    e.prototype.createChildren.call(this), this.createView(t.$B.uiView);
  }, $_.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/b2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "bbblogin/b6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "bbblogin/b3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "bbblogin/b4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "bbblogin/b5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] };var i = $_;function $_() {
    return e.call(this) || this;
  }var e;t.$B = i;
}(ui = ui || {}), function (t) {
  __extends($_, e = View), $_.prototype.createChildren = function () {
    e.prototype.createChildren.call(this), this.createView(t.$Z.uiView);
  }, $_.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/b1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "bbbloding/a13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "bbbloding/a14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "bbbloding/a16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "bbbloding/a17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "bbbloding/a20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "bbbloding/a19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "bbbloding/a18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "bbbloding/a18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "bbbloding/a1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }] };var i = $_;function $_() {
    return e.call(this) || this;
  }var e;t.$Z = i;
}(ui = ui || {}), function (t) {
  __extends($_, e = View), $_.prototype.createChildren = function () {
    View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), View.regComponent("Text", laya.display.Text), e.prototype.createChildren.call(this), this.createView(t.$n.uiView);
  }, $_.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/b2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "bbblogin/b6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "bbblogin/b3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "bbblogin/b4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "bbblogin/b5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "bbblogin/b21b.png", centerX: 0 } }, { type: "Image", props: { y: 1102, var: "imgCheatTip", skin: "bbblogin/b27b.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 927, x: 159, var: "hotImage", skin: "bbblogin/b18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/b1b.png", centerX: 0, bottom: 30 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "bbblogin/b12b.png", name: "enterBtn", centerX: 0 } }, { type: "Image", props: { x: 196, visible: !1, var: "privacyToggle", skin: "bbblogin/b29b.png", bottom: 4 } }, { type: "Label", props: { y: 640, x: 0, width: 720, var: "txtTip", valign: "middle", text: "\u63d0\u793a\u5185\u5bb9", strokeColor: "#ffffff", stroke: 2, height: 32, fontSize: 32, color: "#ff0000", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }, { type: "HTMLDivElement", props: { y: 1255, x: 256, visible: !1, var: "privacyTip", height: 16 } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "bbblogin/b11b.png" } }, { type: "Image", props: { y: 257, x: 594, visible: !1, var: "privacyBtn", skin: "bbblogin/b13b.png", name: "privacyBtn" } }, { type: "Image", props: { visible: !1, var: "ageTipBtn", top: 1, scaleY: .5, scaleX: .5, name: "privacyBtn", left: 1 } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "bbblogin/b8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "bbblogin/b10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "mNoticeBg", skin: "bbblogin/b8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "bbblogin/b10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "privacyBg", skin: "bbblogin/b8b.png", name: "privacyBg", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "privacyClose", skin: "bbblogin/b10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "privacyClose2", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTabPrivacy", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "privacyTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "privacyPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "privacyContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "bbblogin/b9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "bbblogin/b17b.png" } }] }, { type: "Box", props: { width: 720, visible: !1, var: "jumpBg", mouseThrough: !1, height: 1280, centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { x: 33, width: 655, skin: "bbblogin/b8b.png", height: 994, centerY: 0, centerX: 0 } }, { type: "Button", props: { width: 274, var: "btnJump", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u8df3\u8f6c", height: 59, centerY: 436, centerX: 0 } }, { type: "Label", props: { width: 234, var: "jumpTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", fontSize: 30, color: "#ffffff", centerY: -408, centerX: 0, bold: !1, align: "center" } }, { type: "Panel", props: { x: 94, width: 545, var: "jumpPanel", height: 733, centerY: 10 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "jumpContent", height: 733 } }] }, { type: "Image", props: { x: 596, visible: !1, var: "closeBtn", skin: "bbblogin/b17b.png", name: "closeBtn", centerY: -402 } }] }] };var i = $_;function $_() {
    return e.call(this) || this;
  }var e;t.$n = i;
}(ui = ui || {}), function (t) {
  function $B() {
    return i.call(this) || this;
  }var i;t = t.$g || (t.$g = {}), i = ui.$B, __extends($B, i), $B.prototype.initialize = function () {
    i.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
  }, $B.prototype.addEvt = function () {
    this.on(Laya.Event.CLICK, this, this.$q);
  }, $B.prototype.rmEvts = function () {
    this.off(Laya.Event.CLICK, this, this.$q);
  }, $B.prototype.onOpened = function () {
    this.$P = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
  }, $B.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), i.prototype.destroy.call(this, t);
  }, $B.prototype.$q = function () {
    1e4 < Date.now() - this.$P && (this.$P -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
  }, t.AuthorizationPanel = $B;
}(modules = modules || {}), function (t) {
  var i, e, n, o;function $m() {
    var t = s.call(this) || this;return t.$m = new e(), t.addChild(t.$m), t.$D = null, t.$T = [], t.$e = !1, t.$I = 0, t.$A = !0, t.$$ = 6, t.$w = !1, t.on(i.DISPLAY, t, t.$r), t.on(i.UNDISPLAY, t, t.$j), t;
  }var s;t = t.$k || (t.$k = {}), i = Laya.Event, e = Laya.Image, n = Laya.Component, o = Laya.Loader, __extends($m, s = n), $m.create = function (t, i, e, n, s, o, a) {
    void 0 === n && (n = 0), void 0 === s && (s = 6), void 0 === o && (o = !0), void 0 === a && (a = !1);var r = new $m();return r.skin(i, e, n), r.durFrm = s, r.loop = o, r.atHide = a, t && t.addChild(r), r;
  }, $m.play = function (t) {
    t && (t.visible = !0, t.play());
  }, $m.stop = function (t) {
    t && (t.visible = !1, t.stop());
  }, $m.prototype.destroy = function (t) {
    Laya.timer.clear(this, this.$y), this.off(i.DISPLAY, this, this.$r), this.off(i.UNDISPLAY, this, this.$j), s.prototype.destroy.call(this, t);
  }, $m.prototype.$r = function () {}, $m.prototype.$j = function () {}, $m.prototype.skin = function (t, i, e) {
    if (this.$D != t) {
      this.$D = t, this.$T = [];for (var n = 0, s = e; s <= i; s++) this.$T[n++] = t + "/" + s + ".png";e = o.getRes(this.$T[0]);e && (this.width = e.sourceWidth, this.height = e.sourceHeight), this.$y();
    }
  }, Object.defineProperty($m.prototype, "atHide", { get: function () {
      return this.$w;
    }, set: function (t) {
      this.$w = t;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty($m.prototype, "durFrm", { set: function (t) {
      this.$$ != t && (this.$$ = t, this.$e && (Laya.timer.clear(this, this.$y), Laya.timer.loop(this.$$ * (1e3 / 60), this, this.$y)));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty($m.prototype, "loop", { set: function (t) {
      this.$A = t;
    }, enumerable: !0, configurable: !0 }), $m.prototype.play = function () {
    this.$e && this.stop(), this.$e = !0, this.$I = 0, Laya.timer.loop(this.$$ * (1e3 / 60), this, this.$y), this.$y();
  }, $m.prototype.stop = function () {
    this.$e = !1, this.$I = 0, this.$y(), Laya.timer.clear(this, this.$y);
  }, $m.prototype.pause = function () {
    this.$e && (this.$e = !1, Laya.timer.clear(this, this.$y));
  }, $m.prototype.resume = function () {
    this.$e || (this.$e = !0, Laya.timer.loop(this.$$ * (1e3 / 60), this, this.$y), this.$y());
  }, Object.defineProperty($m.prototype, "isPlay", { get: function () {
      return this.$e;
    }, enumerable: !0, configurable: !0 }), $m.prototype.$y = function () {
    this.$T && 0 != this.$T.length && (this.$m.skin = this.$T[this.$I], this.$e && (this.$I++, this.$I == this.$T.length && (this.$A ? this.$I = 0 : (Laya.timer.clear(this, this.$y), this.$e = !1, this.$w && (this.visible = !1), this.event(i.COMPLETE)))));
  }, t.PanelEff = $m;
}(modules = modules || {}), function (t) {
  var i, e;function $B(t, i) {
    void 0 === t && (t = 0);var e = n.call(this) || this;return e.$C = { bgImgSkin: "bbbloding/a3a.jpg", topImgSkin: "bbbloding/a10a.jpg", btmImgSkin: "bbbloding/a4a.jpg", leftImgSkin: "bbbloding/a6a.jpg", rightImgSkin: "bbbloding/a8a.jpg", loadingBarBgSkin: "bbbloding/a13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.$z = { bgImgSkin: "bbbloding/a12a.jpg", topImgSkin: "bbbloding/a11a.jpg", btmImgSkin: "bbbloding/a5a.jpg", leftImgSkin: "bbbloding/a7a.jpg", rightImgSkin: "bbbloding/a9a.jpg", loadingBarBgSkin: "bbbloding/a15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.$t = 0, e.$J(1 == t ? e.$z : e.$C), e.copyRightImg.skin = i, e;
  }var n;i = t.$g || (t.$g = {}), e = t.$k.PanelEff, n = ui.$Z, __extends($B, n), $B.prototype.initialize = function () {
    var t;n.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.$N = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.$N && (t = this.$N.loadingType, this.loadingTips.color = 1 != t && (2 == t || 101 == t) ? "#000000" : "#f2ffb5"), this.$Q = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
  }, $B.prototype.toAllProgress = function (t) {
    var i = this;if (-1 === t) return i.$t = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);var e;-2 !== t ? (i.$t < .9 ? i.$t += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : i.$t < 1 && (i.$t += 1e-4), .9999 < i.$t && (i.$t = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
      .9 < i.$t && toAllProgress(-1);
    })), e = 590 * (t = i.$t), i.$t = i.$t > t ? i.$t : t, i.loadingBar.width = e, e = i.loadingBar.x + e, i.loadingImg2.x = e - 15, 364 <= e ? (i.loadingImg1.visible = !0, i.loadingImg1.x = e - 202) : i.loadingImg1.visible = !1, i.percentageTips.text = (100 * t >> 0) + "%", i.$t < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress)) : Laya.timer.clear(this, this.toAllProgress);
  }, $B.prototype.toProgress = function (t, i, e) {
    var n = this;var s = 590 * (t = 1 < t ? 1 : t);n.$t = n.$t > t ? n.$t : t, n.loadingBar.width = s;s = n.loadingBar.x + s;n.loadingImg2.x = s - 15, 364 <= s ? (n.loadingImg1.visible = !0, n.loadingImg1.x = s - 202) : n.loadingImg1.visible = !1, n.percentageTips.text = (100 * t >> 0) + "%", n.loadingTips.text = i;for (var o = e - 1, a = 0; a < this.$Q.length; a++) n.$Q[a].skin = a < o ? "bbbloding/a20a.png" : o === a ? "bbbloding/a19a.png" : "bbbloding/a18a.png";
  }, $B.prototype.onOpened = function () {
    this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$N.lastVersion + "      \u7248\u672c\uff1a" + this.$N.wxVersion, this.showGetBtn();
  }, $B.prototype.close = function (t) {
    this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.$M), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.$Y);
  }, $B.prototype.resetWinFun = function () {
    Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
  }, $B.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.resetWinFun(), n.prototype.destroy.call(this, t);
  }, $B.prototype.showGetBtn = function () {
    this.$N.showGetBtn && 1 == this.$N.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "bbbloding/a1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.$Y), this.$l(), this.$L(!0));
  }, $B.prototype.$Y = function () {
    this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "bbbloding/a2a.png", this.$v(), this.$L(!1));
  }, $B.prototype.$J = function (t) {
    this.bgImg.skin = t.bgImgSkin, this.topImg.skin = t.topImgSkin, this.btmImg.skin = t.btmImgSkin, this.leftImg.skin = t.leftImgSkin, this.rightImg.skin = t.rightImgSkin, this.copyRightImg.bottom = t.copyRightImgBottom, this.processBox1.y = t.processBox1Y, this.processBox2.y = t.processBox2Y, this.loadingBarBg.skin = t.loadingBarBgSkin, this.loadingTips.fontSize = t.loadingTipsSize, this.getTipsBtn.visible = this.$N.showGetBtn && 1 == this.$N.showGetBtn, this.getTipsBtn.visible ? this.$l() : this.$v(), this.$L(this.getTipsBtn.visible);
  }, $B.prototype.$l = function () {
    this.$V || (this.$V = e.create(this.getTipsBtn, "bwxeff", 4, 0, 12), this.$V.pos(161, 106), this.$V.scale(1.14, 1.15)), e.play(this.$V);
  }, $B.prototype.$v = function () {
    this.$V && e.stop(this.$V);
  }, $B.prototype.$L = function (t) {
    Laya.timer.clear(this, this.$M), t ? (this.$o = 9, this.txtGetTm.visible = !0, this.$M(), Laya.timer.loop(1e3, this, this.$M)) : this.txtGetTm.visible = !1;
  }, $B.prototype.$M = function () {
    0 < this.$o ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.$o + "s)", this.$o--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.$M), this.$Y());
  }, i.LoadingPanel = $B;
}(modules = modules || {}), function (t) {
  var i, e, n;function $B(t) {
    void 0 === t && (t = "bbblogin/b1b.png");var i = s.call(this) || this;return i.$F = 0, i.$u = "multi_notice_key", i.$f = 0, i.$b = 0, i.$x = "privacy_key", i.$p = !0, i.$K = 0, i.copyRightImg.skin = t, i;
  }var s;i = t.$g || (t.$g = {}), e = Laya.List, n = Laya.Event, s = ui.$n, __extends($B, s), $B.prototype.initialize = function () {
    s.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.copyRightImg.skin = "", ServerLoading.instance.preloadServer(), this.$N = Browser.window.PF_INFO, this.$H = new e(), this.$H.vScrollBarSkin = "", this.$H.itemRender = i.SelectLeftListItem, this.$H.top = 5, this.$H.repeatX = 1, this.$H.spaceY = 5, this.$H.width = this.leftListBox.width, this.$H.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.$H), this.$G = new e(), this.$G.vScrollBarSkin = "", this.$G.itemRender = i.SelectRightListItem, this.$G.top = 5, this.$G.repeatX = 1, this.$G.spaceY = 5, this.$G.width = this.rightListBox.width, this.$G.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.$G), this.$W = new e(), this.$W.hScrollBarSkin = "", this.$W.itemRender = i.NoticeItem, this.$W.repeatY = 1, this.$W.width = this.boxTab.width, this.$W.height = this.boxTab.height, this.boxTab.addChild(this.$W), this.$X = new e(), this.$X.hScrollBarSkin = "", this.$X.itemRender = i.PrivacyItem, this.$X.repeatY = 1, this.$X.width = this.boxTab.width, this.$X.height = this.boxTab.height, this.boxTabPrivacy.addChild(this.$X);var t = this.$N.loadingType;this.$R = 1 == t || 2 == t || 3 == t || 101 == t ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.$h = [], this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.privacyContent.color = "#212942", this.privacyContent.style.fontSize = 26, this.privacyContent.style.lineHeight = 28, this.privacyContent.mouseEnabled = !1, this.privacyTip.color = "#ffffff", this.privacyTip.style.fontSize = 18, this.privacyTip.style.lineHeight = 18, this.privacyTip.style.stroke = 2, this.privacyTip.style.strokeColor = "#000000", this.privacyTip.style.wordWrap = !1, this.jumpContent.color = "#212942", this.jumpContent.style.fontSize = 26, this.jumpContent.style.lineHeight = 28, this.jumpContent.mouseEnabled = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
  }, $B.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), this.$s(), this.$U(), this.$S(), this.$O(), this.ageTipsContent = null, this.$H && (this.$H.removeSelf(), this.$H.destroy(), this.$H = null), this.$G && (this.$G.removeSelf(), this.$G.destroy(), this.$G = null), this.$W && (this.$W.removeSelf(), this.$W.destroy(), this.$W = null), this.$X && (this.$X.removeSelf(), this.$X.destroy(), this.$X = null), Laya.timer.clear(this, this.$d), s.prototype.destroy.call(this, t);
  }, $B.prototype.addEvt = function () {
    this.bgImg.on(Laya.Event.CLICK, this, this.$a), this.enterBtn.on(Laya.Event.CLICK, this, this.$i), this.selectServer.on(Laya.Event.CLICK, this, this.$c), this.selectServer.on(Laya.Event.CLICK, this, this.$c), this.closeBg.on(Laya.Event.CLICK, this, this.$E), this.closeBtn.on(Laya.Event.CLICK, this, this.$BB), this.noticeBtn.on(Laya.Event.CLICK, this, this.$_B), this.noticeClose.on(Laya.Event.CLICK, this, this.$ZB), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.$nB), this.mNoticeClose.on(Laya.Event.CLICK, this, this.$gB), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.$gB), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.$qB), this.privacyBtn.on(Laya.Event.CLICK, this, this.$PB), this.ageTipBtn.on(Laya.Event.CLICK, this, this.$kB), this.privacyClose.on(Laya.Event.CLICK, this, this.$mB), this.privacyClose2.on(Laya.Event.CLICK, this, this.$mB), this.privacyPanel.on(Laya.Event.MOUSE_DOWN, this, this.$DB), this.privacyToggle.on(Laya.Event.CLICK, this, this.$TB), this.privacyTip.on(Laya.Event.LINK, this, this.$eB), this.btnJump.on(Laya.Event.CLICK, this, this.$IB), this.jumpPanel.on(Laya.Event.MOUSE_DOWN, this, this.$AB), this.$W.selectEnable = !0, this.$W.selectHandler = Laya.Handler.create(this, this.$$B, null, !1), this.$X.selectEnable = !0, this.$X.selectHandler = Laya.Handler.create(this, this.$wB, null, !1);
  }, $B.prototype.rmEvts = function () {
    this.bgImg.off(Laya.Event.CLICK, this, this.$a), this.enterBtn.off(Laya.Event.CLICK, this, this.$i), this.selectServer.off(Laya.Event.CLICK, this, this.$c), this.selectServer.off(Laya.Event.CLICK, this, this.$c), this.closeBg.off(Laya.Event.CLICK, this, this.$E), this.noticeBtn.off(Laya.Event.CLICK, this, this.$_B), this.closeBtn.off(Laya.Event.CLICK, this, this.$BB), this.noticeClose.off(Laya.Event.CLICK, this, this.$ZB), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.$nB), this.mNoticeClose.off(Laya.Event.CLICK, this, this.$gB), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.$gB), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.$qB), this.privacyBtn.off(Laya.Event.CLICK, this, this.$PB), this.ageTipBtn.off(Laya.Event.CLICK, this, this.$kB), this.privacyClose.off(Laya.Event.CLICK, this, this.$mB), this.privacyClose2.off(Laya.Event.CLICK, this, this.$mB), this.privacyPanel.off(Laya.Event.MOUSE_DOWN, this, this.$DB), this.privacyToggle.off(Laya.Event.CLICK, this, this.$TB), this.privacyTip.off(Laya.Event.LINK, this, this.$eB), this.btnJump.off(Laya.Event.CLICK, this, this.$IB), this.jumpPanel.off(Laya.Event.MOUSE_DOWN, this, this.$AB), this.$W.selectEnable = !1, this.$W.selectHandler = null, this.$X.selectEnable = !1, this.$X.selectHandler = null;
  }, $B.prototype.onOpened = function () {
    var n = this;this.$P = Date.now(), this.$p = !0, this.$rB = this.$N.selectedServer.server_id, this.$jB(this.$N.selectedServer), this.$H.dataSource = this.$N.groupList, this.$c(), req_multi_server_notice(4, this.$N.pkgName, this.$N.selectedServer.server_id, this.$yB.bind(this)), Laya.timer.frameOnce(1, this, function () {
      n.$CB = n.$N.privacy_data && n.$N.privacy_data.list ? n.$N.privacy_data.list : [], n.$zB = null != n.$N.privacy_login_pkg ? n.$N.privacy_login_pkg : 0;var t = "1" == localStorage.getItem(n.$x),
          i = 0 != PF_INFO.privacy_save_pkg,
          e = 0 == n.$zB || 1 == n.$zB;n.$tB = i && t || e, n.$JB();
    }), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$N.lastVersion + "      \u7248\u672c\uff1a" + this.$N.wxVersion, this.serverName.color = this.selServer.color = this.$R, this.imgCheatTip.visible = 1 == this.$N.anti_cheat_pkg, this.txtTip.visible = !1;
  }, $B.prototype.preload = function () {}, $B.prototype.$a = function () {
    this.$tB ? 1e4 < Date.now() - this.$P && (this.$P -= 2e3, ServerLoading.instance.enterDefaultServer()) : this.$NB("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
  }, $B.prototype.$i = function () {
    this.$tB ? this.$QB(this.$N.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.$N.selectedServer, req_server_check_ban(0, this.$N.selectedServer.server_id)) : this.$NB("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
  }, $B.prototype.$c = function () {
    this.$N.hasGroupReq ? this.listBg.visible = !0 : (this.$N.hasGroupReq = !0, req_server_group(0));
  }, $B.prototype.$E = function () {
    this.listBg.visible = !1;
  }, $B.prototype.$BB = function () {
    this.jumpBg.visible = !1;
  }, $B.prototype.$_B = function () {
    this.$MB();
  }, $B.prototype.$gB = function () {
    this.mNoticeBg.visible = !1;
  }, $B.prototype.$ZB = function () {
    this.noticeBg.visible = !1;
  }, $B.prototype.$PB = function () {
    this.$YB();
  }, $B.prototype.$mB = function () {
    this.privacyBg.visible = !1;
  }, $B.prototype.$TB = function () {
    this.$tB = !this.$tB, this.$tB && localStorage.setItem(this.$x, "1"), this.privacyToggle.skin = "bbblogin/" + (this.$tB ? "b29b.png" : "b28b.png");
  }, $B.prototype.$eB = function (t) {
    this.$YB(Number(t));
  }, $B.prototype.$IB = function () {
    Browser.window.forceJumpMiniGame ? Browser.window.forceJumpMiniGame() : this.$BB();
  }, $B.prototype.$nB = function () {
    this.$F = this.noticeContent.mouseY, Laya.stage.on(n.MOUSE_MOVE, this, this.$lB), Laya.stage.on(n.MOUSE_UP, this, this.$s), Laya.stage.on(n.MOUSE_OUT, this, this.$s);
  }, $B.prototype.$lB = function () {
    var t;this.noticeContent && (t = this.$F - this.noticeContent.mouseY, this.noticeContent.scrollY += t, this.$F = this.noticeContent.mouseY);
  }, $B.prototype.$s = function () {
    Laya.stage.off(n.MOUSE_MOVE, this, this.$lB), Laya.stage.off(n.MOUSE_UP, this, this.$s), Laya.stage.off(n.MOUSE_OUT, this, this.$s);
  }, $B.prototype.$qB = function () {
    this.$f = this.mNoticePanel.mouseY, Laya.stage.on(n.MOUSE_MOVE, this, this.$LB), Laya.stage.on(n.MOUSE_UP, this, this.$U), Laya.stage.on(n.MOUSE_OUT, this, this.$U);
  }, $B.prototype.$LB = function () {
    var t;this.mNoticeContent && (t = this.$f - this.mNoticePanel.mouseY, this.mNoticeContent.y -= t, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.$f = this.mNoticePanel.mouseY);
  }, $B.prototype.$U = function () {
    Laya.stage.off(n.MOUSE_MOVE, this, this.$LB), Laya.stage.off(n.MOUSE_UP, this, this.$U), Laya.stage.off(n.MOUSE_OUT, this, this.$U);
  }, $B.prototype.$DB = function () {
    this.$b = this.privacyPanel.mouseY, Laya.stage.on(n.MOUSE_MOVE, this, this.$vB), Laya.stage.on(n.MOUSE_UP, this, this.$S), Laya.stage.on(n.MOUSE_OUT, this, this.$S);
  }, $B.prototype.$vB = function () {
    var t;this.privacyContent && (t = this.$b - this.privacyPanel.mouseY, this.privacyContent.y -= t, this.privacyPanel.height < this.privacyContent.contextHeight ? this.privacyContent.y < this.privacyPanel.height - this.privacyContent.contextHeight ? this.privacyContent.y = this.privacyPanel.height - this.privacyContent.contextHeight : 0 < this.privacyContent.y && (this.privacyContent.y = 0) : this.privacyContent.y = 0, this.$b = this.privacyPanel.mouseY);
  }, $B.prototype.$S = function () {
    Laya.stage.off(n.MOUSE_MOVE, this, this.$vB), Laya.stage.off(n.MOUSE_UP, this, this.$S), Laya.stage.off(n.MOUSE_OUT, this, this.$S);
  }, $B.prototype.$AB = function () {
    this.$K = this.jumpPanel.mouseY, Laya.stage.on(n.MOUSE_MOVE, this, this.$VB), Laya.stage.on(n.MOUSE_UP, this, this.$O), Laya.stage.on(n.MOUSE_OUT, this, this.$O);
  }, $B.prototype.$VB = function () {
    var t;this.jumpContent && (t = this.$K - this.jumpPanel.mouseY, this.jumpContent.y -= t, this.jumpPanel.height < this.jumpContent.contextHeight ? this.jumpContent.y < this.jumpPanel.height - this.jumpContent.contextHeight ? this.jumpContent.y = this.jumpPanel.height - this.jumpContent.contextHeight : 0 < this.jumpContent.y && (this.jumpContent.y = 0) : this.jumpContent.y = 0, this.$K = this.jumpPanel.mouseY);
  }, $B.prototype.$O = function () {
    Laya.stage.off(n.MOUSE_MOVE, this, this.$VB), Laya.stage.off(n.MOUSE_UP, this, this.$O), Laya.stage.off(n.MOUSE_OUT, this, this.$O);
  }, $B.prototype.$$B = function () {
    if (this.$W.dataSource) {
      for (var t, i = 0; i < this.$W.dataSource.length; i++) {
        var e = this.$W.dataSource[i];e[1] = i == this.$W.selectedIndex, i == this.$W.selectedIndex && (t = e[0]);
      }this.mNoticeTitle.text = t && t.title ? t.title : "", this.mNoticeContent.innerHTML = t && t.content ? t.content : "", this.mNoticeContent.y = 0;
    }
  }, $B.prototype.$wB = function () {
    var t = this.$X.dataSource;if (t) {
      for (var i = 0; i < t.length; i++) t[i][1] = i == this.$X.selectedIndex;var e = this.$CB[this.$X.selectedIndex];e && e.content && (e.content = e.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "")), this.privacyTitle.text = e && e.title ? e.title : "\u6807\u9898", this.privacyContent.innerHTML = e && e.content ? e.content : "\u52a0\u8f7d\u4e2d...", this.privacyContent.y = 0;
    }
  }, $B.prototype.$jB = function (t) {
    var i = t.server_name;this.serverName.text = i + this.$oB(t), this.serverName.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.$R, this.hotImage.skin = this.$FB(t), this.$N.cdn = t.cdn || "", this.$N.selectedServer = t, this.noticeBtn.visible = !0;
  }, $B.prototype.$uB = function (t) {
    this.showGroupList(t);
  }, $B.prototype.$fB = function (t) {
    this.$jB(t), this.listBg.visible = !1;
  }, $B.prototype.showGroupList = function (t) {
    if (void 0 === t && (t = 0), this.parent) {
      var i = this.$N.groupList;if (i && 0 !== i.length) {
        for (var e = i.length, n = 0; n < e; n++) i[n].callBack = this.$uB.bind(this), i[n].select = n == t, i[n].index = n;var s = (this.$H.array = i)[t].id;this.$N.serverList[s] ? this.showServerList(s) : this.$N.hasServerReq || (this.$N.hasServerReq = !0, -1 == s ? req_server_owner(0) : -2 == s ? req_recommend_server_list(0) : req_server_list(0, s));
      }
    }
  }, $B.prototype.showServerList = function (t) {
    if (this.parent && this.$N.serverList[t]) {
      for (var i = this.$N.serverList[t], e = i.length, n = 0; n < e; n++) i[n].callBack = this.$fB.bind(this);this.$G.array = i;
    }
  }, $B.prototype.$QB = function (t) {
    if (-1 != t.status) return 0 != t.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);var i = "\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d",
        t = t.maintain_time;return t && "" != t && " " != t && (i += "\n(\u9884\u8ba1\u65f6\u95f4" + t + ")"), alert(i), !1;
  }, $B.prototype.$FB = function (t) {
    var i = t.status,
        t = t.is_recommend,
        e = "bbblogin/b19b.png";return 1 !== i && 2 !== i || 1 !== t && 3 !== t ? 1 !== i && 2 !== i || 2 !== t ? -1 !== i && 0 !== i || (e = "bbblogin/b20b.png") : e = "bbblogin/b19b.png" : e = "bbblogin/b18b.png", e;
  }, $B.prototype.$oB = function (t) {
    var i = t.status,
        e = "";return 1 == t.is_recommend || 3 == t.is_recommend ? e = "(\u63a8\u8350)" : -1 === i ? e = "(\u7ef4\u62a4\u4e2d)" : 0 === i && (e = "(\u5f85\u5f00\u670d)"), e;
  }, $B.prototype.$yB = function (t) {
    console.log("onMultiNoticeCallback, param = ", t);var i = Date.now() / 1e3,
        e = localStorage.getItem(this.$u),
        n = !(this.$h = []);if ("success" == t.state) for (var s in t.data) {
      s = t.data[s];var o, a, r;s && (o = i < s.end_time, a = 1 == s.pop_type, r = 2 == s.pop_type && s.key + "" != e, !n && o && (a || r) && (n = !0), o && this.$h.push(s), r && localStorage.setItem(this.$u, s.key + ""));
    }this.$h.sort(function (t, i) {
      return t.login_id - i.login_id;
    }), console.log("onMultiNoticeCallback, datas = ", this.$h), n && this.$MB();
  }, $B.prototype.$MB = function () {
    if (this.$W) {
      if (this.$h) {
        this.$W.x = 2 < this.$h.length ? 0 : (this.boxTab.width - 274 * this.$h.length) / 2;for (var t = [], i = 0; i < this.$h.length; i++) {
          var e = this.$h[i];t.push([e, i == this.$W.selectedIndex]);
        }0 < (this.$W.dataSource = t).length ? (this.$W.selectedIndex = 0, this.$W.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.$h.length <= 1, this.boxTab.visible = 1 < this.$h.length;
      }this.mNoticeBg.visible = !0;
    }
  }, $B.prototype.$bB = function (t) {
    if (!this.destroyed) {
      if (console.log("p_onPrivacyCallback, param = ", t), "success" == t.state) for (var i in t.data) {
        var i = Number(i),
            e = t.data[i];this.$CB && this.$CB[i] && (this.$CB[i].content = e.content);
      }this.$wB();
    }
  }, $B.prototype.$JB = function () {
    for (var t = "", i = 0; i < this.$CB.length; i++) t += '<a href="' + i + '" style="color:#14ff28;text-decoration:none">' + this.$CB[i].title + "</a>", i < this.$CB.length - 1 && (t += "\u3001");this.privacyTip.innerHTML = "\u6211\u5df2\u7ecf\u8be6\u7ec6\u9605\u8bfb\u5e76\u540c\u610f" + t, this.privacyToggle.skin = "bbblogin/" + (this.$tB ? "b29b.png" : "b28b.png"), this.privacyTip.x = (720 - this.privacyTip.width) / 2, this.privacyToggle.x = this.privacyTip.x - 30, this.privacyBtn.visible = 0 < this.$CB.length, this.privacyToggle.visible = this.privacyTip.visible = 0 < this.$CB.length && 0 != this.$zB;
  }, $B.prototype.$YB = function (t) {
    if (void 0 === t && (t = 0), this.$X) {
      if (this.$CB) {
        this.$X.x = 2 < this.$CB.length ? 0 : (this.boxTab.width - 274 * this.$CB.length) / 2;for (var i = [], e = 0; e < this.$CB.length; e++) {
          var n = this.$CB[e],
              n = n && n.title ? n.title : "",
              s = e == this.$X.selectedIndex;i.push([n, s]);
        }0 < (this.$X.dataSource = i).length ? ((t = t < 0 ? 0 : t) > i.length - 1 && (t = 0), this.$X.selectedIndex = t, this.$X.scrollTo(t)) : (this.privacyTitle.text = "\u7a7a", this.privacyContent.text = ""), this.privacyClose2.visible = this.$CB.length <= 1, this.boxTabPrivacy.visible = 1 < this.$CB.length;
      }this.$p && (this.$p = !1, req_privacy(this.$N.pkgName, this.$bB.bind(this))), this.privacyBg.visible = !0;
    }
  }, $B.prototype.openJumpView = function (t, i, e, n) {
    void 0 === n && (n = !1), this.jumpTitle.text = t || "\u6682\u65e0\u516c\u544a", this.jumpContent.innerHTML = i || "", this.btnJump.label = e || "\u786e\u5b9a", this.jumpContent.y = 0, this.jumpBg.visible = !0, this.closeBtn.visible = n;
  }, $B.prototype.showAgeTipsBtn = function (t, i, e, n, s) {
    (this.ageTipBtn.visible = t) && (this.ageTipBtn.skin = i || "bbblogin/b11b.png"), this.ageTipsContent = e, this.ageTipBtn.x = n || 0, this.ageTipBtn.y = s || 0;
  }, $B.prototype.$kB = function () {
    this.openJumpView("\u9002\u9f84\u516c\u544a", this.ageTipsContent, "\u786e\u8ba4", !0);
  }, $B.prototype.$NB = function (t) {
    this.txtTip.text = t, this.txtTip.y = 640, this.txtTip.visible = !0, this.$xB = 1, Laya.timer.clear(this, this.$d), this.$d(), Laya.timer.frameLoop(1, this, this.$d);
  }, $B.prototype.$d = function () {
    this.txtTip.y -= this.$xB, this.$xB *= 1.1, this.txtTip.y <= 590 && (this.txtTip.visible = !1, Laya.timer.clear(this, this.$d));
  }, i.SelectServerPanel = $B;
}(modules = modules || {});var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.$g.AuthorizationPanel,
    LoadingPanel = modules.$g.LoadingPanel,
    SelectServerPanel = modules.$g.SelectServerPanel,
    ServerLoading = function () {
  function $m(t) {
    this.m_loadingRes = ["bbbloding/a13a.png", "bbbloding/a15a.png", "bbbloding/a14a.png", "bbbloding/a16a.png", "bbbloding/a17a.png", "bbbloding/a18a.png", "bbbloding/a19a.png", "bbbloding/a20a.png", "bwxeff/b100b.png", "bwxeff/b101b.png", "bwxeff/b102b.png", "bwxeff/b103b.png", "bwxeff/b104b.png", "bbbloding/a3a.jpg", "bbbloding/a12a.jpg", "bbbloding/a1a.png", "bbbloding/a2a.png", "bbbloding/a4a.jpg", "bbbloding/a6a.jpg", "bbbloding/a8a.jpg", "bbbloding/a10a.jpg", "bbbloding/a5a.jpg", "bbbloding/a7a.jpg", "bbbloding/a9a.jpg", "bbbloding/a11a.jpg"], this.m_serverRes = ["bbblogin/b10b.png", "bbblogin/b11b.png", "bbblogin/b12b.png", "bbblogin/b13b.png", "bbblogin/b14b.png", "bbblogin/b15b.png", "bbblogin/b16b.png", "bbblogin/b17b.png", "bbblogin/b18b.png", "bbblogin/b19b.png", "bbblogin/b20b.png", "bbblogin/b21b.png", "bbblogin/b2b.jpg", "bbblogin/b3b.jpg", "bbblogin/b4b.jpg", "bbblogin/b5b.jpg", "bbblogin/b6b.jpg", "bbblogin/b1b.png", "bbblogin/b8b.png", "bbblogin/b9b.png", "bbblogin/b24b.png", "bbblogin/b25b.png", "bbblogin/b27b.png", "bbblogin/b29b.png", "bbblogin/b28b.png", "bbblogin/b123b.png", "bbblogin/b199b.png"], this.copyRightUrl = "bbblogin/b1b.png", this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.$pB = !1, this.$KB = "", $m.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var i = Laya.AtlasResourceManager;i.maxTextureCount = 6, i.atlasTextureWidth = i.atlasTextureHeight = 1024, i._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.$HB.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } }, "b28b.png": { frame: { h: 25, idx: 0, w: 25, x: 444, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 2 } }, "b29b.png": { frame: { h: 27, idx: 0, w: 26, x: 470, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = $m.instance.requestWeb, Browser.window.imgMgrLoad = $m.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.$HB();
  }return $m.prototype.changeServerLoading = function (t) {
    $m.instance.m_layer.visible = t;
  }, $m.prototype.openAuthor = function () {
    $m.instance.m_author || ($m.instance.m_author = new AuthorizationPanel()), $m.instance.m_author.parent || $m.instance.m_layer.addChild($m.instance.m_author), $m.instance.$GB();
  }, $m.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, $m.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, $m.prototype.$WB = function () {
    $m.instance.m_server || ($m.instance.m_server = new SelectServerPanel(this.copyRightUrl)), $m.instance.m_server.parent || $m.instance.m_layer.addChild($m.instance.m_server), $m.instance.$GB();
  }, $m.prototype.openJumpView = function (t, i, e, n) {
    void 0 === n && (n = !1), this.$WB(), $m.instance.m_server.openJumpView(t, i, e, n);
  }, $m.prototype.openJumpTipsBtn = function (t, i, e, n, s) {
    this.$WB(), $m.instance.m_server.showAgeTipsBtn(t, i, e, n, s);
  }, $m.prototype.getCertificatePng = function () {
    window.sdkInitRes = window.sdkInitRes || {};var t = "bbblogin/b123b.png",
        i = "bbblogin/b1b.png";return 1 == sdkInitRes.develop ? 0 == (PF_INFO.develop_certificate_pkg || 0) ? t : i : 0 == PF_INFO.release_certificate_pkg ? t : i;
  }, $m.prototype.openServer = function (t, i, e) {
    var n = this;this.copyRightUrl = e || this.getCertificatePng();for (var e = function () {
      n.$WB(), t && i && t.call(i);
    }, s = !0, o = 0, a = this.m_serverRes; o < a.length; o++) {
      var r = a[o];if (null == Laya.Loader.getRes(r)) {
        s = !1;break;
      }
    }s ? e() : Laya.loader.load(this.m_serverRes, Handler.create(this, e));
  }, $m.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, $m.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, $m.prototype.openLoading = function (t, i) {
    void 0 === t && (t = 0), i = i || this.getCertificatePng(), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      $m.instance.m_loading || ($m.instance.m_loading = new LoadingPanel(t, i)), $m.instance.m_loading.parent || $m.instance.m_layer.addChild($m.instance.m_loading), $m.instance.$GB();
    }));
  }, $m.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var t = 0, i = this.m_serverRes; t < i.length; t++) {
      var e = i[t];Laya.Loader.clearCache($m.instance, e), Laya.Loader.clearRes(e, !0);
    }for (var n = 0, s = this.m_loadingRes; n < s.length; n++) e = s[n], Laya.Loader.clearCache($m.instance, e), Laya.Loader.clearRes(e, !0);this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, $m.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && $m.instance.m_loading.showGetBtn();
  }, $m.prototype.enterDefaultServer = function () {
    var t = Browser.window.PF_INFO.selectedServer;this.$pB || -1 == t.status || 0 == t.status || (this.$pB = !0, Browser.window.PF_INFO.selectedServer = t, req_server_check_ban(0, t.server_id));
  }, $m.prototype.sendRecord = function () {
    var t = "";t = (t = (t = (t = (t = (t = (t = (t += "newRegister=" + Browser.window.PF_INFO.newRegister) + ", isPrelodServer=" + this.m_isPrelodServer) + ", SelectServerPanel=" + (null != $m.instance.m_server)) + ", isPrelodLoading=" + this.m_isPrelodLoading) + ", LoadingPanel=" + (null != $m.instance.m_loading)) + ", resMgrLoad=" + (Browser.window.resMgrLoad == $m.instance.requestWeb)) + ", imgMgrLoad=" + (Browser.window.imgMgrLoad == $m.instance.requestWeb)) + ", errUrls=" + $m.instance.$KB;for (var i = 0, e = this.m_serverRes; i < e.length; i++) t += ", " + (o = e[i]) + "=" + (null != Laya.Loader.getRes(o));for (var n = 0, s = this.m_loadingRes; n < s.length; n++) {
      var o;t += ", " + (o = s[n]) + "=" + (null != Laya.Loader.getRes(o));
    }var a = Browser.window.PF_INFO.selectedServer;a && (t = (t = (t += ", server_status=" + a.status) + (", server_id=" + a.server_id)) + (", server_name=" + a.server_name));a = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: t });console.error(a), this.$XB && this.$XB == t || (this.$XB = t, reqRecordError(a));
  }, $m.prototype.$RB = function () {
    var t = Laya.stage,
        i = Math.floor(t.width),
        e = Math.floor(t.height);e / i < 1.7777778 ? (this.viewW = Math.floor(i / (e / 1280)), this.viewH = 1280, this.viewS = e / 1280) : (this.viewW = 720, this.viewH = Math.floor(e / (i / 720)), this.viewS = i / 720);e = Math.floor(t.width), i = Math.floor(t.height);i / e < 1.7777778 ? (this.viewW = Math.floor(e / (i / 1280)), this.viewH = 1280, this.viewS = i / 1280) : (this.viewW = 720, this.viewH = Math.floor(i / (e / 720)), this.viewS = e / 720), this.$GB();
  }, $m.prototype.$GB = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, $m.prototype.$HB = function () {
    if (Input.isInputting && Browser.onMobile) return e = parseInt(Input.inputContainer.style.top.replace("px", "")), t = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS, i = Browser.clientWidth / Render.canvas.width, 0 < (e = Browser.clientHeight - t * i - e) && (e = 0), void (Browser.container.style.top = e + "px");var t, i;Browser.container.style.top = "0px", t = Math.floor(Browser.width) + 1 & 2147483646, i = Math.floor(Browser.height) + 1 & 2147483646;var e = Laya.stage;3 == ENV || i < t ? (e.scaleMode = Laya.Stage.SCALE_NOSCALE, e.width = t, e.height = i) : (e.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, e.width = 840, e.height = Math.floor(i / (t / 840)) + 1 & 2147483646), this.$RB();
  }, $m.prototype.requestWeb = function (t, i) {
    function $Z() {
      e.onload = null, e.onerror = null;
    }var e,
        n = t;(e = new Browser.window.Image()).onload = function () {
      $Z(), i(n, 200, e);
    }, e.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", n), $m.instance.$KB += n + "|", $Z(), i(n, 404, null);
    }, e.src = n, -1 == $m.instance.m_serverRes.indexOf(n) && -1 == $m.instance.m_loadingRes.indexOf(n) || Laya.Loader.keepCache($m.instance, n);
  }, $m.prototype.$hB = function (t, i) {
    return -1 != t.indexOf(i, t.length - i.length);
  }, $m;
}();!function (t) {
  function $B() {
    var t = i.call(this) || this;return t.$sB = "#72441d", t.$UB = "#263d7d", t.width = 274, t.height = 59, t.$SB = new Laya.Image(), t.addChild(t.$SB), t.$OB = new Laya.Label(), t.$OB.fontSize = 30, t.$OB.color = t.$UB, t.addChild(t.$OB), t.$OB.centerX = 0, t.$OB.centerY = 0, t;
  }var i;t = t.$g || (t.$g = {}), i = Laya.View, __extends($B, i), $B.prototype.initialize = function () {
    i.prototype.initialize.call(this), this.$N = Browser.window.PF_INFO, this.$N.loadingType, this.addEvt();
  }, Object.defineProperty($B.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), $B.prototype.setData = function (t) {
    this.$dB = t[0], this.$aB = t[1], this.$OB.text = this.$dB.title, this.$OB.color = this.$aB ? this.$sB : this.$UB, this.$SB.skin = this.$aB ? "bbblogin/b25b.png" : "bbblogin/b24b.png";
  }, $B.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), i.prototype.destroy.call(this, t);
  }, $B.prototype.addEvt = function () {}, $B.prototype.rmEvts = function () {}, t.NoticeItem = $B;
}(modules = modules || {}), function (t) {
  function $B() {
    var t = i.call(this) || this;return t.$sB = "#72441d", t.$UB = "#263d7d", t.width = 274, t.height = 59, t.$SB = new Laya.Image(), t.addChild(t.$SB), t.$OB = new Laya.Label(), t.$OB.fontSize = 30, t.$OB.color = t.$UB, t.addChild(t.$OB), t.$OB.centerX = 0, t.$OB.centerY = 0, t;
  }var i;t = t.$g || (t.$g = {}), i = Laya.View, __extends($B, i), $B.prototype.initialize = function () {
    i.prototype.initialize.call(this), this.$N = Browser.window.PF_INFO, this.$N.loadingType, this.addEvt();
  }, Object.defineProperty($B.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), $B.prototype.setData = function (t) {
    this.$iB = t[0], this.$aB = t[1], this.$OB.text = this.$iB, this.$OB.color = this.$aB ? this.$sB : this.$UB, this.$SB.skin = this.$aB ? "bbblogin/b25b.png" : "bbblogin/b24b.png";
  }, $B.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), i.prototype.destroy.call(this, t);
  }, $B.prototype.addEvt = function () {}, $B.prototype.rmEvts = function () {}, t.PrivacyItem = $B;
}(modules = modules || {}), function (t) {
  function $B() {
    var t = i.call(this) || this;return t.width = 192, t.height = 70, t.$SB = new Laya.Image(), t.addChild(t.$SB), t.$cB = new Laya.Label(), t.$cB.fontSize = 28, t.$cB.color = t.$R, t.addChild(t.$cB), t.$cB.centerX = 0, t.$cB.centerY = 0, t.$EB = new Laya.Label(), t.$EB.fontSize = 22, t.$EB.color = t.$R, t.addChild(t.$EB), t.$EB.centerX = 0, t.$EB.y = 11, t.$B_ = new Laya.Label(), t.$B_.fontSize = 26, t.$B_.color = t.$R, t.addChild(t.$B_), t.$B_.centerX = 0, t.$B_.y = 39, t;
  }var i;t = t.$g || (t.$g = {}), i = Laya.View, __extends($B, i), $B.prototype.initialize = function () {
    i.prototype.initialize.call(this), this.$N = Browser.window.PF_INFO;var t = this.$N.loadingType;this.$R = 1 != t && 2 != t && 3 == t ? "#763042" : "#263d7d", this.addEvt();
  }, Object.defineProperty($B.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), $B.prototype.setData = function (t) {
    this.$dB = t;var i = this.$dB.id,
        e = this.$dB.name;var n, s;this.$cB.visible = this.$EB.visible = this.$B_.visible = !1, -1 == i || -2 == i ? (this.$cB.visible = !0, this.$cB.text = e) : (i = "1-10\u670d", (s = (n = e).match("[0-9]{1,}")) && null != s.index && (n = e.slice(0, s.index), i = e.slice(s.index)), this.$EB.visible = this.$B_.visible = !0, this.$EB.text = n, this.$B_.text = i), this.$SB.skin = t.select ? "bbblogin/b14b.png" : "bbblogin/b15b.png";
  }, $B.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), i.prototype.destroy.call(this, t);
  }, $B.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $B.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $B.prototype.clkHdler = function () {
    this.$dB && this.$dB.callBack && this.$dB.callBack(this.$dB.index);
  }, t.SelectLeftListItem = $B;
}(modules = modules || {}), function (t) {
  function $B() {
    var t = i.call(this) || this;return t.width = 358, t.height = 70, t.$SB = new Laya.Image("bbblogin/b16b.png"), t.addChild(t.$SB), t.$SB.graphics.drawRect(0, 0, t.width, t.height, "#00sasd"), t.$__ = new Laya.Image(), t.$__.centerY = 0, t.$__.x = 7, t.addChild(t.$__), t.$cB = new Laya.Label(), t.$cB.fontSize = 24, t.$cB.color = t.$R, t.$cB.x = 56, t.$cB.centerY = 0, t.addChild(t.$cB), t.$Z_ = new Laya.Label(), t.$Z_.fontSize = 24, t.$Z_.color = t.$R, t.$Z_.x = 246, t.$Z_.centerY = 0, t.addChild(t.$Z_), t.$n_ = new Laya.Image(), t.$n_.top = 0, t.$n_.right = 0, t.addChild(t.$n_), t.$g_ = new Laya.Label(), t.$g_.fontSize = 20, t.$g_.color = "#ffffff", t.$g_.x = 225, t.$g_.y = 46, t.addChild(t.$g_), t;
  }var i;t = t.$g || (t.$g = {}), i = Laya.View, __extends($B, i), $B.prototype.initialize = function () {
    i.prototype.initialize.call(this), this.$N = Browser.window.PF_INFO;var t = this.$N.loadingType;this.$R = 1 != t && 2 != t && 3 == t ? "#763042" : "#34267d", this.addEvt();
  }, Object.defineProperty($B.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), $B.prototype.setData = function (t) {
    this.$dB = t;var t = this.$dB.status,
        i = this.$dB.server_name;this.$__.skin = this.getStatusSrc(this.$dB), this.$cB.color = -1 === t ? "#d50000" : 0 === t ? "#49575a" : this.$R, this.$cB.text = i, this.$Z_.text = -1 === t ? "\u7ef4\u62a4\u4e2d" : 0 === t ? "\u672a\u5f00\u670d" : "\u5df2\u5f00\u670d";i = 1 == this.$dB.is_recommend || 3 == this.$dB.is_recommend;(this.$n_.visible = i) && (this.$n_.skin = "bbblogin/b199b.png"), this.$g_.text = -1 == this.$dB.status && this.$dB.maintain_time ? this.$dB.maintain_time : "";
  }, $B.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), i.prototype.destroy.call(this, t);
  }, $B.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $B.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $B.prototype.clkHdler = function () {
    this.$dB && this.$dB.callBack && this.$dB.callBack(this.$dB);
  }, $B.prototype.getStatusSrc = function (t) {
    var i = t.status,
        t = t.is_recommend,
        e = "bbblogin/b19b.png";return 1 !== i && 2 !== i || 1 !== t && 3 !== t ? 1 !== i && 2 !== i || 2 !== t ? -1 !== i && 0 !== i || (e = "bbblogin/b20b.png") : e = "bbblogin/b19b.png" : e = "bbblogin/b18b.png", e;
  }, t.SelectRightListItem = $B;
}(modules = modules || {}), window.ServerLoading = ServerLoading;