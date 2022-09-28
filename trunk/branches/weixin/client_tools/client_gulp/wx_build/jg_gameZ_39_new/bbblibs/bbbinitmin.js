"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, i) {
    t.__proto__ = i;
  } || function (t, i) {
    for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
  };return function (t, i) {
    function $Q() {
      this.constructor = t;
    }e(t, i), t.prototype = null === i ? Object.create(i) : ($Q.prototype = i.prototype, new $Q());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (t) {
  __extends($g, e = View), $g.prototype.createChildren = function () {
    e.prototype.createChildren.call(this), this.createView(t.$v.uiView);
  }, $g.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/b2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "bbblogin/b6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "bbblogin/b3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "bbblogin/b4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "bbblogin/b5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] };var i = $g;function $g() {
    return e.call(this) || this;
  }var e;t.$v = i;
}(ui = ui || {}), function (t) {
  __extends($g, e = View), $g.prototype.createChildren = function () {
    e.prototype.createChildren.call(this), this.createView(t.$g.uiView);
  }, $g.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/b1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "bbbloding/a13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "bbbloding/a14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "bbbloding/a16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "bbbloding/a17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "bbbloding/a20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "bbbloding/a19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "bbbloding/a18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "bbbloding/a18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "bbbloding/a1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }] };var i = $g;function $g() {
    return e.call(this) || this;
  }var e;t.$g = i;
}(ui = ui || {}), function (t) {
  __extends($g, e = View), $g.prototype.createChildren = function () {
    View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), View.regComponent("Text", laya.display.Text), e.prototype.createChildren.call(this), this.createView(t.$Q.uiView);
  }, $g.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/b2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "bbblogin/b6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "bbblogin/b3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "bbblogin/b4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "bbblogin/b5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "bbblogin/b21b.png", centerX: 0 } }, { type: "Image", props: { y: 1102, var: "imgCheatTip", skin: "bbblogin/b27b.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 927, x: 159, var: "hotImage", skin: "bbblogin/b18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/b1b.png", centerX: 0, bottom: 30 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "bbblogin/b12b.png", name: "enterBtn", centerX: 0 } }, { type: "Image", props: { x: 196, visible: !1, var: "privacyToggle", skin: "bbblogin/b29b.png", bottom: 4 } }, { type: "Label", props: { y: 640, x: 0, width: 720, var: "txtTip", valign: "middle", text: "\u63d0\u793a\u5185\u5bb9", strokeColor: "#ffffff", stroke: 2, height: 32, fontSize: 32, color: "#ff0000", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }, { type: "HTMLDivElement", props: { y: 1255, x: 256, visible: !1, var: "privacyTip", height: 16 } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "bbblogin/b11b.png" } }, { type: "Image", props: { y: 257, x: 594, visible: !1, var: "privacyBtn", skin: "bbblogin/b13b.png", name: "privacyBtn" } }, { type: "Image", props: { visible: !1, var: "ageTipBtn", top: 1, scaleY: .5, scaleX: .5, name: "privacyBtn", left: 1 } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "bbblogin/b8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "bbblogin/b10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "mNoticeBg", skin: "bbblogin/b8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "bbblogin/b10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "privacyBg", skin: "bbblogin/b8b.png", name: "privacyBg", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "privacyClose", skin: "bbblogin/b10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "privacyClose2", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTabPrivacy", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "privacyTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "privacyPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "privacyContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "bbblogin/b9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "bbblogin/b17b.png" } }] }, { type: "Box", props: { width: 720, visible: !1, var: "jumpBg", mouseThrough: !1, height: 1280, centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { x: 33, width: 655, skin: "bbblogin/b8b.png", height: 994, centerY: 0, centerX: 0 } }, { type: "Button", props: { width: 274, var: "btnJump", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u8df3\u8f6c", height: 59, centerY: 436, centerX: 0 } }, { type: "Label", props: { width: 234, var: "jumpTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", fontSize: 30, color: "#ffffff", centerY: -408, centerX: 0, bold: !1, align: "center" } }, { type: "Panel", props: { x: 94, width: 545, var: "jumpPanel", height: 733, centerY: 10 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "jumpContent", height: 733 } }] }, { type: "Image", props: { x: 596, visible: !1, var: "closeBtn", skin: "bbblogin/b17b.png", name: "closeBtn", centerY: -402 } }] }] };var i = $g;function $g() {
    return e.call(this) || this;
  }var e;t.$Q = i;
}(ui = ui || {}), function (t) {
  function $v() {
    return i.call(this) || this;
  }var i;t = t.$d || (t.$d = {}), i = ui.$v, __extends($v, i), $v.prototype.initialize = function () {
    i.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
  }, $v.prototype.addEvt = function () {
    this.on(Laya.Event.CLICK, this, this.$r);
  }, $v.prototype.rmEvts = function () {
    this.off(Laya.Event.CLICK, this, this.$r);
  }, $v.prototype.onOpened = function () {
    this.$k = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
  }, $v.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), i.prototype.destroy.call(this, t);
  }, $v.prototype.$r = function () {
    1e4 < Date.now() - this.$k && (this.$k -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
  }, t.AuthorizationPanel = $v;
}(modules = modules || {}), function (t) {
  var i, e, s, o;function $a() {
    var t = n.call(this) || this;return t.$b = new e(), t.addChild(t.$b), t.$a = null, t.$M = [], t.$Y = !1, t.$D = 0, t.$J = !0, t.$p = 6, t.$T = !1, t.on(i.DISPLAY, t, t.$t), t.on(i.UNDISPLAY, t, t.$q), t;
  }var n;t = t.$$ || (t.$$ = {}), i = Laya.Event, e = Laya.Image, s = Laya.Component, o = Laya.Loader, __extends($a, n = s), $a.create = function (t, i, e, s, n, o, a) {
    void 0 === s && (s = 0), void 0 === n && (n = 6), void 0 === o && (o = !0), void 0 === a && (a = !1);var r = new $a();return r.skin(i, e, s), r.durFrm = n, r.loop = o, r.atHide = a, t && t.addChild(r), r;
  }, $a.play = function (t) {
    t && (t.visible = !0, t.play());
  }, $a.stop = function (t) {
    t && (t.visible = !1, t.stop());
  }, $a.prototype.destroy = function (t) {
    Laya.timer.clear(this, this.$C), this.off(i.DISPLAY, this, this.$t), this.off(i.UNDISPLAY, this, this.$q), n.prototype.destroy.call(this, t);
  }, $a.prototype.$t = function () {}, $a.prototype.$q = function () {}, $a.prototype.skin = function (t, i, e) {
    if (this.$a != t) {
      this.$a = t, this.$M = [];for (var s = 0, n = e; n <= i; n++) this.$M[s++] = t + "/" + n + ".png";e = o.getRes(this.$M[0]);e && (this.width = e.sourceWidth, this.height = e.sourceHeight), this.$C();
    }
  }, Object.defineProperty($a.prototype, "atHide", { get: function () {
      return this.$T;
    }, set: function (t) {
      this.$T = t;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty($a.prototype, "durFrm", { set: function (t) {
      this.$p != t && (this.$p = t, this.$Y && (Laya.timer.clear(this, this.$C), Laya.timer.loop(this.$p * (1e3 / 60), this, this.$C)));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty($a.prototype, "loop", { set: function (t) {
      this.$J = t;
    }, enumerable: !0, configurable: !0 }), $a.prototype.play = function () {
    this.$Y && this.stop(), this.$Y = !0, this.$D = 0, Laya.timer.loop(this.$p * (1e3 / 60), this, this.$C), this.$C();
  }, $a.prototype.stop = function () {
    this.$Y = !1, this.$D = 0, this.$C(), Laya.timer.clear(this, this.$C);
  }, $a.prototype.pause = function () {
    this.$Y && (this.$Y = !1, Laya.timer.clear(this, this.$C));
  }, $a.prototype.resume = function () {
    this.$Y || (this.$Y = !0, Laya.timer.loop(this.$p * (1e3 / 60), this, this.$C), this.$C());
  }, Object.defineProperty($a.prototype, "isPlay", { get: function () {
      return this.$Y;
    }, enumerable: !0, configurable: !0 }), $a.prototype.$C = function () {
    this.$M && 0 != this.$M.length && (this.$b.skin = this.$M[this.$D], this.$Y && (this.$D++, this.$D == this.$M.length && (this.$J ? this.$D = 0 : (Laya.timer.clear(this, this.$C), this.$Y = !1, this.$T && (this.visible = !1), this.event(i.COMPLETE)))));
  }, t.PanelEff = $a;
}(modules = modules || {}), function (t) {
  var i, e;function $v(t, i) {
    void 0 === t && (t = 0);var e = s.call(this) || this;return e.$G = { bgImgSkin: "bbbloding/a3a.jpg", topImgSkin: "bbbloding/a10a.jpg", btmImgSkin: "bbbloding/a4a.jpg", leftImgSkin: "bbbloding/a6a.jpg", rightImgSkin: "bbbloding/a8a.jpg", loadingBarBgSkin: "bbbloding/a13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.$s = { bgImgSkin: "bbbloding/a12a.jpg", topImgSkin: "bbbloding/a11a.jpg", btmImgSkin: "bbbloding/a5a.jpg", leftImgSkin: "bbbloding/a7a.jpg", rightImgSkin: "bbbloding/a9a.jpg", loadingBarBgSkin: "bbbloding/a15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.$A = 0, e.$h(1 == t ? e.$s : e.$G), e.copyRightImg.skin = i, e;
  }var s;i = t.$d || (t.$d = {}), e = t.$$.PanelEff, s = ui.$g, __extends($v, s), $v.prototype.initialize = function () {
    var t;s.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.$P = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.$P && (t = this.$P.loadingType, this.loadingTips.color = 1 != t && (2 == t || 101 == t) ? "#000000" : "#f2ffb5"), this.$W = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
  }, $v.prototype.toAllProgress = function (t) {
    var i = this;if (-1 === t) return i.$A = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);var e;-2 !== t ? (i.$A < .9 ? i.$A += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : i.$A < 1 && (i.$A += 1e-4), .9999 < i.$A && (i.$A = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
      .9 < i.$A && toAllProgress(-1);
    })), e = 590 * (t = i.$A), i.$A = i.$A > t ? i.$A : t, i.loadingBar.width = e, e = i.loadingBar.x + e, i.loadingImg2.x = e - 15, 364 <= e ? (i.loadingImg1.visible = !0, i.loadingImg1.x = e - 202) : i.loadingImg1.visible = !1, i.percentageTips.text = (100 * t >> 0) + "%", i.$A < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress)) : Laya.timer.clear(this, this.toAllProgress);
  }, $v.prototype.toProgress = function (t, i, e) {
    var s = this;var n = 590 * (t = 1 < t ? 1 : t);s.$A = s.$A > t ? s.$A : t, s.loadingBar.width = n;n = s.loadingBar.x + n;s.loadingImg2.x = n - 15, 364 <= n ? (s.loadingImg1.visible = !0, s.loadingImg1.x = n - 202) : s.loadingImg1.visible = !1, s.percentageTips.text = (100 * t >> 0) + "%", s.loadingTips.text = i;for (var o = e - 1, a = 0; a < this.$W.length; a++) s.$W[a].skin = a < o ? "bbbloding/a20a.png" : o === a ? "bbbloding/a19a.png" : "bbbloding/a18a.png";
  }, $v.prototype.onOpened = function () {
    this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$P.lastVersion + "      \u7248\u672c\uff1a" + this.$P.wxVersion, this.showGetBtn();
  }, $v.prototype.close = function (t) {
    this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.$F), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.$l);
  }, $v.prototype.resetWinFun = function () {
    Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
  }, $v.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.resetWinFun(), s.prototype.destroy.call(this, t);
  }, $v.prototype.showGetBtn = function () {
    this.$P.showGetBtn && 1 == this.$P.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "bbbloding/a1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.$l), this.$o(), this.$E(!0));
  }, $v.prototype.$l = function () {
    this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "bbbloding/a2a.png", this.$V(), this.$E(!1));
  }, $v.prototype.$h = function (t) {
    this.bgImg.skin = t.bgImgSkin, this.topImg.skin = t.topImgSkin, this.btmImg.skin = t.btmImgSkin, this.leftImg.skin = t.leftImgSkin, this.rightImg.skin = t.rightImgSkin, this.copyRightImg.bottom = t.copyRightImgBottom, this.processBox1.y = t.processBox1Y, this.processBox2.y = t.processBox2Y, this.loadingBarBg.skin = t.loadingBarBgSkin, this.loadingTips.fontSize = t.loadingTipsSize, this.getTipsBtn.visible = this.$P.showGetBtn && 1 == this.$P.showGetBtn, this.getTipsBtn.visible ? this.$o() : this.$V(), this.$E(this.getTipsBtn.visible);
  }, $v.prototype.$o = function () {
    this.$Z || (this.$Z = e.create(this.getTipsBtn, "bwxeff", 4, 0, 12), this.$Z.pos(161, 106), this.$Z.scale(1.14, 1.15)), e.play(this.$Z);
  }, $v.prototype.$V = function () {
    this.$Z && e.stop(this.$Z);
  }, $v.prototype.$E = function (t) {
    Laya.timer.clear(this, this.$F), t ? (this.$f = 9, this.txtGetTm.visible = !0, this.$F(), Laya.timer.loop(1e3, this, this.$F)) : this.txtGetTm.visible = !1;
  }, $v.prototype.$F = function () {
    0 < this.$f ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.$f + "s)", this.$f--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.$F), this.$l());
  }, i.LoadingPanel = $v;
}(modules = modules || {}), function (t) {
  var i, e, s;function $v(t) {
    void 0 === t && (t = "bbblogin/b1b.png");var i = n.call(this) || this;return i.$X = 0, i.$N = "multi_notice_key", i.$i = 0, i.$x = 0, i.$w = "privacy_key", i.$m = !0, i.$K = 0, i.copyRightImg.skin = t, i;
  }var n;i = t.$d || (t.$d = {}), e = Laya.List, s = Laya.Event, n = ui.$Q, __extends($v, n), $v.prototype.initialize = function () {
    n.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.copyRightImg.skin = "", ServerLoading.instance.preloadServer(), this.$P = Browser.window.PF_INFO, this.$c = new e(), this.$c.vScrollBarSkin = "", this.$c.itemRender = i.SelectLeftListItem, this.$c.top = 5, this.$c.repeatX = 1, this.$c.spaceY = 5, this.$c.width = this.leftListBox.width, this.$c.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.$c), this.$B = new e(), this.$B.vScrollBarSkin = "", this.$B.itemRender = i.SelectRightListItem, this.$B.top = 5, this.$B.repeatX = 1, this.$B.spaceY = 5, this.$B.width = this.rightListBox.width, this.$B.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.$B), this.$j = new e(), this.$j.hScrollBarSkin = "", this.$j.itemRender = i.NoticeItem, this.$j.repeatY = 1, this.$j.width = this.boxTab.width, this.$j.height = this.boxTab.height, this.boxTab.addChild(this.$j), this.$L = new e(), this.$L.hScrollBarSkin = "", this.$L.itemRender = i.PrivacyItem, this.$L.repeatY = 1, this.$L.width = this.boxTab.width, this.$L.height = this.boxTab.height, this.boxTabPrivacy.addChild(this.$L);var t = this.$P.loadingType;this.$H = 1 == t || 2 == t || 3 == t || 101 == t ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.$n = [], this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.privacyContent.color = "#212942", this.privacyContent.style.fontSize = 26, this.privacyContent.style.lineHeight = 28, this.privacyContent.mouseEnabled = !1, this.privacyTip.color = "#ffffff", this.privacyTip.style.fontSize = 18, this.privacyTip.style.lineHeight = 18, this.privacyTip.style.stroke = 2, this.privacyTip.style.strokeColor = "#000000", this.privacyTip.style.wordWrap = !1, this.jumpContent.color = "#212942", this.jumpContent.style.fontSize = 26, this.jumpContent.style.lineHeight = 28, this.jumpContent.mouseEnabled = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
  }, $v.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), this.$y(), this.$e(), this.$R(), this.$z(), this.ageTipsContent = null, this.$c && (this.$c.removeSelf(), this.$c.destroy(), this.$c = null), this.$B && (this.$B.removeSelf(), this.$B.destroy(), this.$B = null), this.$j && (this.$j.removeSelf(), this.$j.destroy(), this.$j = null), this.$L && (this.$L.removeSelf(), this.$L.destroy(), this.$L = null), Laya.timer.clear(this, this.$U), n.prototype.destroy.call(this, t);
  }, $v.prototype.addEvt = function () {
    this.bgImg.on(Laya.Event.CLICK, this, this.$I), this.enterBtn.on(Laya.Event.CLICK, this, this.$S), this.selectServer.on(Laya.Event.CLICK, this, this.$O), this.selectServer.on(Laya.Event.CLICK, this, this.$O), this.closeBg.on(Laya.Event.CLICK, this, this.$u), this.closeBtn.on(Laya.Event.CLICK, this, this.$vv), this.noticeBtn.on(Laya.Event.CLICK, this, this.$gv), this.noticeClose.on(Laya.Event.CLICK, this, this.$Qv), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.$dv), this.mNoticeClose.on(Laya.Event.CLICK, this, this.$rv), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.$rv), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.$kv), this.privacyBtn.on(Laya.Event.CLICK, this, this.$$v), this.ageTipBtn.on(Laya.Event.CLICK, this, this.$bv), this.privacyClose.on(Laya.Event.CLICK, this, this.$av), this.privacyClose2.on(Laya.Event.CLICK, this, this.$av), this.privacyPanel.on(Laya.Event.MOUSE_DOWN, this, this.$Mv), this.privacyToggle.on(Laya.Event.CLICK, this, this.$Yv), this.privacyTip.on(Laya.Event.LINK, this, this.$Dv), this.btnJump.on(Laya.Event.CLICK, this, this.$Jv), this.jumpPanel.on(Laya.Event.MOUSE_DOWN, this, this.$pv), this.$j.selectEnable = !0, this.$j.selectHandler = Laya.Handler.create(this, this.$Tv, null, !1), this.$L.selectEnable = !0, this.$L.selectHandler = Laya.Handler.create(this, this.$tv, null, !1);
  }, $v.prototype.rmEvts = function () {
    this.bgImg.off(Laya.Event.CLICK, this, this.$I), this.enterBtn.off(Laya.Event.CLICK, this, this.$S), this.selectServer.off(Laya.Event.CLICK, this, this.$O), this.selectServer.off(Laya.Event.CLICK, this, this.$O), this.closeBg.off(Laya.Event.CLICK, this, this.$u), this.noticeBtn.off(Laya.Event.CLICK, this, this.$gv), this.closeBtn.off(Laya.Event.CLICK, this, this.$vv), this.noticeClose.off(Laya.Event.CLICK, this, this.$Qv), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.$dv), this.mNoticeClose.off(Laya.Event.CLICK, this, this.$rv), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.$rv), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.$kv), this.privacyBtn.off(Laya.Event.CLICK, this, this.$$v), this.ageTipBtn.off(Laya.Event.CLICK, this, this.$bv), this.privacyClose.off(Laya.Event.CLICK, this, this.$av), this.privacyClose2.off(Laya.Event.CLICK, this, this.$av), this.privacyPanel.off(Laya.Event.MOUSE_DOWN, this, this.$Mv), this.privacyToggle.off(Laya.Event.CLICK, this, this.$Yv), this.privacyTip.off(Laya.Event.LINK, this, this.$Dv), this.btnJump.off(Laya.Event.CLICK, this, this.$Jv), this.jumpPanel.off(Laya.Event.MOUSE_DOWN, this, this.$pv), this.$j.selectEnable = !1, this.$j.selectHandler = null, this.$L.selectEnable = !1, this.$L.selectHandler = null;
  }, $v.prototype.onOpened = function () {
    var s = this;this.$k = Date.now(), this.$m = !0, this.$qv = this.$P.selectedServer.server_id, this.$Cv(this.$P.selectedServer), this.$c.dataSource = this.$P.groupList, this.$O(), req_multi_server_notice(4, this.$P.pkgName, this.$P.selectedServer.server_id, this.$Gv.bind(this)), Laya.timer.frameOnce(1, this, function () {
      s.$sv = s.$P.privacy_data && s.$P.privacy_data.list ? s.$P.privacy_data.list : [], s.$Av = null != s.$P.privacy_login_pkg ? s.$P.privacy_login_pkg : 0;var t = "1" == localStorage.getItem(s.$w),
          i = 0 != PF_INFO.privacy_save_pkg,
          e = 0 == s.$Av || 1 == s.$Av;s.$hv = i && t || e, s.$Pv();
    }), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$P.lastVersion + "      \u7248\u672c\uff1a" + this.$P.wxVersion, this.serverName.color = this.selServer.color = this.$H, this.imgCheatTip.visible = 1 == this.$P.anti_cheat_pkg, this.txtTip.visible = !1;
  }, $v.prototype.preload = function () {}, $v.prototype.$I = function () {
    this.$hv ? 1e4 < Date.now() - this.$k && (this.$k -= 2e3, ServerLoading.instance.enterDefaultServer()) : this.$Wv("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
  }, $v.prototype.$S = function () {
    this.$hv ? this.$Fv(this.$P.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.$P.selectedServer, req_server_check_ban(0, this.$P.selectedServer.server_id)) : this.$Wv("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
  }, $v.prototype.$O = function () {
    this.$P.hasGroupReq ? this.listBg.visible = !0 : (this.$P.hasGroupReq = !0, req_server_group(0));
  }, $v.prototype.$u = function () {
    this.listBg.visible = !1;
  }, $v.prototype.$vv = function () {
    this.jumpBg.visible = !1;
  }, $v.prototype.$gv = function () {
    this.$lv();
  }, $v.prototype.$rv = function () {
    this.mNoticeBg.visible = !1;
  }, $v.prototype.$Qv = function () {
    this.noticeBg.visible = !1;
  }, $v.prototype.$$v = function () {
    this.$ov();
  }, $v.prototype.$av = function () {
    this.privacyBg.visible = !1;
  }, $v.prototype.$Yv = function () {
    this.$hv = !this.$hv, this.$hv && localStorage.setItem(this.$w, "1"), this.privacyToggle.skin = "bbblogin/" + (this.$hv ? "b29b.png" : "b28b.png");
  }, $v.prototype.$Dv = function (t) {
    this.$ov(Number(t));
  }, $v.prototype.$Jv = function () {
    Browser.window.forceJumpMiniGame ? Browser.window.forceJumpMiniGame() : this.$vv();
  }, $v.prototype.$dv = function () {
    this.$X = this.noticeContent.mouseY, Laya.stage.on(s.MOUSE_MOVE, this, this.$Ev), Laya.stage.on(s.MOUSE_UP, this, this.$y), Laya.stage.on(s.MOUSE_OUT, this, this.$y);
  }, $v.prototype.$Ev = function () {
    var t;this.noticeContent && (t = this.$X - this.noticeContent.mouseY, this.noticeContent.scrollY += t, this.$X = this.noticeContent.mouseY);
  }, $v.prototype.$y = function () {
    Laya.stage.off(s.MOUSE_MOVE, this, this.$Ev), Laya.stage.off(s.MOUSE_UP, this, this.$y), Laya.stage.off(s.MOUSE_OUT, this, this.$y);
  }, $v.prototype.$kv = function () {
    this.$i = this.mNoticePanel.mouseY, Laya.stage.on(s.MOUSE_MOVE, this, this.$Vv), Laya.stage.on(s.MOUSE_UP, this, this.$e), Laya.stage.on(s.MOUSE_OUT, this, this.$e);
  }, $v.prototype.$Vv = function () {
    var t;this.mNoticeContent && (t = this.$i - this.mNoticePanel.mouseY, this.mNoticeContent.y -= t, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.$i = this.mNoticePanel.mouseY);
  }, $v.prototype.$e = function () {
    Laya.stage.off(s.MOUSE_MOVE, this, this.$Vv), Laya.stage.off(s.MOUSE_UP, this, this.$e), Laya.stage.off(s.MOUSE_OUT, this, this.$e);
  }, $v.prototype.$Mv = function () {
    this.$x = this.privacyPanel.mouseY, Laya.stage.on(s.MOUSE_MOVE, this, this.$Zv), Laya.stage.on(s.MOUSE_UP, this, this.$R), Laya.stage.on(s.MOUSE_OUT, this, this.$R);
  }, $v.prototype.$Zv = function () {
    var t;this.privacyContent && (t = this.$x - this.privacyPanel.mouseY, this.privacyContent.y -= t, this.privacyPanel.height < this.privacyContent.contextHeight ? this.privacyContent.y < this.privacyPanel.height - this.privacyContent.contextHeight ? this.privacyContent.y = this.privacyPanel.height - this.privacyContent.contextHeight : 0 < this.privacyContent.y && (this.privacyContent.y = 0) : this.privacyContent.y = 0, this.$x = this.privacyPanel.mouseY);
  }, $v.prototype.$R = function () {
    Laya.stage.off(s.MOUSE_MOVE, this, this.$Zv), Laya.stage.off(s.MOUSE_UP, this, this.$R), Laya.stage.off(s.MOUSE_OUT, this, this.$R);
  }, $v.prototype.$pv = function () {
    this.$K = this.jumpPanel.mouseY, Laya.stage.on(s.MOUSE_MOVE, this, this.$fv), Laya.stage.on(s.MOUSE_UP, this, this.$z), Laya.stage.on(s.MOUSE_OUT, this, this.$z);
  }, $v.prototype.$fv = function () {
    var t;this.jumpContent && (t = this.$K - this.jumpPanel.mouseY, this.jumpContent.y -= t, this.jumpPanel.height < this.jumpContent.contextHeight ? this.jumpContent.y < this.jumpPanel.height - this.jumpContent.contextHeight ? this.jumpContent.y = this.jumpPanel.height - this.jumpContent.contextHeight : 0 < this.jumpContent.y && (this.jumpContent.y = 0) : this.jumpContent.y = 0, this.$K = this.jumpPanel.mouseY);
  }, $v.prototype.$z = function () {
    Laya.stage.off(s.MOUSE_MOVE, this, this.$fv), Laya.stage.off(s.MOUSE_UP, this, this.$z), Laya.stage.off(s.MOUSE_OUT, this, this.$z);
  }, $v.prototype.$Tv = function () {
    if (this.$j.dataSource) {
      for (var t, i = 0; i < this.$j.dataSource.length; i++) {
        var e = this.$j.dataSource[i];e[1] = i == this.$j.selectedIndex, i == this.$j.selectedIndex && (t = e[0]);
      }this.mNoticeTitle.text = t && t.title ? t.title : "", this.mNoticeContent.innerHTML = t && t.content ? t.content : "", this.mNoticeContent.y = 0;
    }
  }, $v.prototype.$tv = function () {
    var t = this.$L.dataSource;if (t) {
      for (var i = 0; i < t.length; i++) t[i][1] = i == this.$L.selectedIndex;var e = this.$sv[this.$L.selectedIndex];e && e.content && (e.content = e.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "")), this.privacyTitle.text = e && e.title ? e.title : "\u6807\u9898", this.privacyContent.innerHTML = e && e.content ? e.content : "\u52a0\u8f7d\u4e2d...", this.privacyContent.y = 0;
    }
  }, $v.prototype.$Cv = function (t) {
    var i = t.server_name;this.serverName.text = i + this.$Xv(t), this.serverName.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.$H, this.hotImage.skin = this.$Nv(t), this.$P.cdn = t.cdn || "", this.$P.selectedServer = t, this.noticeBtn.visible = !0;
  }, $v.prototype.$iv = function (t) {
    this.showGroupList(t);
  }, $v.prototype.$xv = function (t) {
    this.$Cv(t), this.listBg.visible = !1;
  }, $v.prototype.showGroupList = function (t) {
    if (void 0 === t && (t = 0), this.parent) {
      var i = this.$P.groupList;if (i && 0 !== i.length) {
        for (var e = i.length, s = 0; s < e; s++) i[s].callBack = this.$iv.bind(this), i[s].select = s == t, i[s].index = s;var n = (this.$c.array = i)[t].id;this.$P.serverList[n] ? this.showServerList(n) : this.$P.hasServerReq || (this.$P.hasServerReq = !0, -1 == n ? req_server_owner(0) : -2 == n ? req_recommend_server_list(0) : req_server_list(0, n));
      }
    }
  }, $v.prototype.showServerList = function (t) {
    if (this.parent && this.$P.serverList[t]) {
      for (var i = this.$P.serverList[t], e = i.length, s = 0; s < e; s++) i[s].callBack = this.$xv.bind(this);this.$B.array = i;
    }
  }, $v.prototype.$Fv = function (t) {
    if (-1 != t.status) return 0 != t.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);var i = "\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d",
        t = t.maintain_time;return t && "" != t && " " != t && (i += "\n(\u9884\u8ba1\u65f6\u95f4" + t + ")"), alert(i), !1;
  }, $v.prototype.$Nv = function (t) {
    var i = t.status,
        t = t.is_recommend,
        e = "bbblogin/b19b.png";return 1 !== i && 2 !== i || 1 !== t && 3 !== t ? 1 !== i && 2 !== i || 2 !== t ? -1 !== i && 0 !== i || (e = "bbblogin/b20b.png") : e = "bbblogin/b19b.png" : e = "bbblogin/b18b.png", e;
  }, $v.prototype.$Xv = function (t) {
    var i = t.status,
        e = "";return 1 == t.is_recommend || 3 == t.is_recommend ? e = "(\u63a8\u8350)" : -1 === i ? e = "(\u7ef4\u62a4\u4e2d)" : 0 === i && (e = "(\u5f85\u5f00\u670d)"), e;
  }, $v.prototype.$Gv = function (t) {
    console.log("onMultiNoticeCallback, param = ", t);var i = Date.now() / 1e3,
        e = localStorage.getItem(this.$N),
        s = !(this.$n = []);if ("success" == t.state) for (var n in t.data) {
      n = t.data[n];var o, a, r;n && (o = i < n.end_time, a = 1 == n.pop_type, r = 2 == n.pop_type && n.key + "" != e, !s && o && (a || r) && (s = !0), o && this.$n.push(n), r && localStorage.setItem(this.$N, n.key + ""));
    }this.$n.sort(function (t, i) {
      return t.login_id - i.login_id;
    }), console.log("onMultiNoticeCallback, datas = ", this.$n), s && this.$lv();
  }, $v.prototype.$lv = function () {
    if (this.$j) {
      if (this.$n) {
        this.$j.x = 2 < this.$n.length ? 0 : (this.boxTab.width - 274 * this.$n.length) / 2;for (var t = [], i = 0; i < this.$n.length; i++) {
          var e = this.$n[i];t.push([e, i == this.$j.selectedIndex]);
        }0 < (this.$j.dataSource = t).length ? (this.$j.selectedIndex = 0, this.$j.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.$n.length <= 1, this.boxTab.visible = 1 < this.$n.length;
      }this.mNoticeBg.visible = !0;
    }
  }, $v.prototype.$wv = function (t) {
    if (!this.destroyed) {
      if (console.log("p_onPrivacyCallback, param = ", t), "success" == t.state) for (var i in t.data) {
        var i = Number(i),
            e = t.data[i];this.$sv && this.$sv[i] && (this.$sv[i].content = e.content);
      }this.$tv();
    }
  }, $v.prototype.$Pv = function () {
    for (var t = "", i = 0; i < this.$sv.length; i++) t += '<a href="' + i + '" style="color:#14ff28;text-decoration:none">' + this.$sv[i].title + "</a>", i < this.$sv.length - 1 && (t += "\u3001");this.privacyTip.innerHTML = "\u6211\u5df2\u7ecf\u8be6\u7ec6\u9605\u8bfb\u5e76\u540c\u610f" + t, this.privacyToggle.skin = "bbblogin/" + (this.$hv ? "b29b.png" : "b28b.png"), this.privacyTip.x = (720 - this.privacyTip.width) / 2, this.privacyToggle.x = this.privacyTip.x - 30, this.privacyBtn.visible = 0 < this.$sv.length, this.privacyToggle.visible = this.privacyTip.visible = 0 < this.$sv.length && 0 != this.$Av;
  }, $v.prototype.$ov = function (t) {
    if (void 0 === t && (t = 0), this.$L) {
      if (this.$sv) {
        this.$L.x = 2 < this.$sv.length ? 0 : (this.boxTab.width - 274 * this.$sv.length) / 2;for (var i = [], e = 0; e < this.$sv.length; e++) {
          var s = this.$sv[e],
              s = s && s.title ? s.title : "",
              n = e == this.$L.selectedIndex;i.push([s, n]);
        }0 < (this.$L.dataSource = i).length ? ((t = t < 0 ? 0 : t) > i.length - 1 && (t = 0), this.$L.selectedIndex = t, this.$L.scrollTo(t)) : (this.privacyTitle.text = "\u7a7a", this.privacyContent.text = ""), this.privacyClose2.visible = this.$sv.length <= 1, this.boxTabPrivacy.visible = 1 < this.$sv.length;
      }this.$m && (this.$m = !1, req_privacy(this.$P.pkgName, this.$wv.bind(this))), this.privacyBg.visible = !0;
    }
  }, $v.prototype.openJumpView = function (t, i, e, s) {
    void 0 === s && (s = !1), this.jumpTitle.text = t || "\u6682\u65e0\u516c\u544a", this.jumpContent.innerHTML = i || "", this.btnJump.label = e || "\u786e\u5b9a", this.jumpContent.y = 0, this.jumpBg.visible = !0, this.closeBtn.visible = s;
  }, $v.prototype.showAgeTipsBtn = function (t, i, e, s, n) {
    (this.ageTipBtn.visible = t) && (this.ageTipBtn.skin = i || "bbblogin/b11b.png"), this.ageTipsContent = e, this.ageTipBtn.x = s || 0, this.ageTipBtn.y = n || 0;
  }, $v.prototype.$bv = function () {
    this.openJumpView("\u9002\u9f84\u516c\u544a", this.ageTipsContent, "\u786e\u8ba4", !0);
  }, $v.prototype.$Wv = function (t) {
    this.txtTip.text = t, this.txtTip.y = 640, this.txtTip.visible = !0, this.$mv = 1, Laya.timer.clear(this, this.$U), this.$U(), Laya.timer.frameLoop(1, this, this.$U);
  }, $v.prototype.$U = function () {
    this.txtTip.y -= this.$mv, this.$mv *= 1.1, this.txtTip.y <= 590 && (this.txtTip.visible = !1, Laya.timer.clear(this, this.$U));
  }, i.SelectServerPanel = $v;
}(modules = modules || {});var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.$d.AuthorizationPanel,
    LoadingPanel = modules.$d.LoadingPanel,
    SelectServerPanel = modules.$d.SelectServerPanel,
    ServerLoading = function () {
  function $a(t) {
    this.m_loadingRes = ["bbbloding/a13a.png", "bbbloding/a15a.png", "bbbloding/a14a.png", "bbbloding/a16a.png", "bbbloding/a17a.png", "bbbloding/a18a.png", "bbbloding/a19a.png", "bbbloding/a20a.png", "bwxeff/b100b.png", "bwxeff/b101b.png", "bwxeff/b102b.png", "bwxeff/b103b.png", "bwxeff/b104b.png", "bbbloding/a3a.jpg", "bbbloding/a12a.jpg", "bbbloding/a1a.png", "bbbloding/a2a.png", "bbbloding/a4a.jpg", "bbbloding/a6a.jpg", "bbbloding/a8a.jpg", "bbbloding/a10a.jpg", "bbbloding/a5a.jpg", "bbbloding/a7a.jpg", "bbbloding/a9a.jpg", "bbbloding/a11a.jpg"], this.m_serverRes = ["bbblogin/b10b.png", "bbblogin/b11b.png", "bbblogin/b12b.png", "bbblogin/b13b.png", "bbblogin/b14b.png", "bbblogin/b15b.png", "bbblogin/b16b.png", "bbblogin/b17b.png", "bbblogin/b18b.png", "bbblogin/b19b.png", "bbblogin/b20b.png", "bbblogin/b21b.png", "bbblogin/b2b.jpg", "bbblogin/b3b.jpg", "bbblogin/b4b.jpg", "bbblogin/b5b.jpg", "bbblogin/b6b.jpg", "bbblogin/b1b.png", "bbblogin/b8b.png", "bbblogin/b9b.png", "bbblogin/b24b.png", "bbblogin/b25b.png", "bbblogin/b27b.png", "bbblogin/b29b.png", "bbblogin/b28b.png", "bbblogin/b123b.png", "bbblogin/b199b.png"], this.copyRightUrl = "bbblogin/b1b.png", this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.$Kv = !1, this.$cv = "", $a.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var i = Laya.AtlasResourceManager;i.maxTextureCount = 6, i.atlasTextureWidth = i.atlasTextureHeight = 1024, i._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.$Bv.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } }, "b28b.png": { frame: { h: 25, idx: 0, w: 25, x: 444, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 2 } }, "b29b.png": { frame: { h: 27, idx: 0, w: 26, x: 470, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = $a.instance.requestWeb, Browser.window.imgMgrLoad = $a.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.$Bv();
  }return $a.prototype.changeServerLoading = function (t) {
    $a.instance.m_layer.visible = t;
  }, $a.prototype.openAuthor = function () {
    $a.instance.m_author || ($a.instance.m_author = new AuthorizationPanel()), $a.instance.m_author.parent || $a.instance.m_layer.addChild($a.instance.m_author), $a.instance.$jv();
  }, $a.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, $a.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, $a.prototype.$Lv = function () {
    $a.instance.m_server || ($a.instance.m_server = new SelectServerPanel(this.copyRightUrl)), $a.instance.m_server.parent || $a.instance.m_layer.addChild($a.instance.m_server), $a.instance.$jv();
  }, $a.prototype.openJumpView = function (t, i, e, s) {
    void 0 === s && (s = !1), this.$Lv(), $a.instance.m_server.openJumpView(t, i, e, s);
  }, $a.prototype.openJumpTipsBtn = function (t, i, e, s, n) {
    this.$Lv(), $a.instance.m_server.showAgeTipsBtn(t, i, e, s, n);
  }, $a.prototype.getCertificatePng = function () {
    window.sdkInitRes = window.sdkInitRes || {};var t = "bbblogin/b123b.png",
        i = "bbblogin/b1b.png";return 1 == sdkInitRes.develop ? 0 == (PF_INFO.develop_certificate_pkg || 0) ? t : i : 0 == PF_INFO.release_certificate_pkg ? t : i;
  }, $a.prototype.openServer = function (t, i, e) {
    var s = this;this.copyRightUrl = e || this.getCertificatePng();for (var e = function () {
      s.$Lv(), t && i && t.call(i);
    }, n = !0, o = 0, a = this.m_serverRes; o < a.length; o++) {
      var r = a[o];if (null == Laya.Loader.getRes(r)) {
        n = !1;break;
      }
    }n ? e() : Laya.loader.load(this.m_serverRes, Handler.create(this, e));
  }, $a.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, $a.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, $a.prototype.openLoading = function (t, i) {
    void 0 === t && (t = 0), i = i || this.getCertificatePng(), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      $a.instance.m_loading || ($a.instance.m_loading = new LoadingPanel(t, i)), $a.instance.m_loading.parent || $a.instance.m_layer.addChild($a.instance.m_loading), $a.instance.$jv();
    }));
  }, $a.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var t = 0, i = this.m_serverRes; t < i.length; t++) {
      var e = i[t];Laya.Loader.clearCache($a.instance, e), Laya.Loader.clearRes(e, !0);
    }for (var s = 0, n = this.m_loadingRes; s < n.length; s++) e = n[s], Laya.Loader.clearCache($a.instance, e), Laya.Loader.clearRes(e, !0);this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, $a.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && $a.instance.m_loading.showGetBtn();
  }, $a.prototype.enterDefaultServer = function () {
    var t = Browser.window.PF_INFO.selectedServer;this.$Kv || -1 == t.status || 0 == t.status || (this.$Kv = !0, Browser.window.PF_INFO.selectedServer = t, req_server_check_ban(0, t.server_id));
  }, $a.prototype.sendRecord = function () {
    var t = "";t = (t = (t = (t = (t = (t = (t = (t += "newRegister=" + Browser.window.PF_INFO.newRegister) + ", isPrelodServer=" + this.m_isPrelodServer) + ", SelectServerPanel=" + (null != $a.instance.m_server)) + ", isPrelodLoading=" + this.m_isPrelodLoading) + ", LoadingPanel=" + (null != $a.instance.m_loading)) + ", resMgrLoad=" + (Browser.window.resMgrLoad == $a.instance.requestWeb)) + ", imgMgrLoad=" + (Browser.window.imgMgrLoad == $a.instance.requestWeb)) + ", errUrls=" + $a.instance.$cv;for (var i = 0, e = this.m_serverRes; i < e.length; i++) t += ", " + (o = e[i]) + "=" + (null != Laya.Loader.getRes(o));for (var s = 0, n = this.m_loadingRes; s < n.length; s++) {
      var o;t += ", " + (o = n[s]) + "=" + (null != Laya.Loader.getRes(o));
    }var a = Browser.window.PF_INFO.selectedServer;a && (t = (t = (t += ", server_status=" + a.status) + (", server_id=" + a.server_id)) + (", server_name=" + a.server_name));a = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: t });console.error(a), this.$Hv && this.$Hv == t || (this.$Hv = t, reqRecordError(a));
  }, $a.prototype.$nv = function () {
    var t = Laya.stage,
        i = Math.floor(t.width),
        e = Math.floor(t.height);e / i < 1.7777778 ? (this.viewW = Math.floor(i / (e / 1280)), this.viewH = 1280, this.viewS = e / 1280) : (this.viewW = 720, this.viewH = Math.floor(e / (i / 720)), this.viewS = i / 720);e = Math.floor(t.width), i = Math.floor(t.height);i / e < 1.7777778 ? (this.viewW = Math.floor(e / (i / 1280)), this.viewH = 1280, this.viewS = i / 1280) : (this.viewW = 720, this.viewH = Math.floor(i / (e / 720)), this.viewS = e / 720), this.$jv();
  }, $a.prototype.$jv = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, $a.prototype.$Bv = function () {
    if (Input.isInputting && Browser.onMobile) return e = parseInt(Input.inputContainer.style.top.replace("px", "")), t = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS, i = Browser.clientWidth / Render.canvas.width, 0 < (e = Browser.clientHeight - t * i - e) && (e = 0), void (Browser.container.style.top = e + "px");var t, i;Browser.container.style.top = "0px", t = Math.floor(Browser.width) + 1 & 2147483646, i = Math.floor(Browser.height) + 1 & 2147483646;var e = Laya.stage;3 == ENV || i < t ? (e.scaleMode = Laya.Stage.SCALE_NOSCALE, e.width = t, e.height = i) : (e.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, e.width = 840, e.height = Math.floor(i / (t / 840)) + 1 & 2147483646), this.$nv();
  }, $a.prototype.requestWeb = function (t, i) {
    function $Q() {
      e.onload = null, e.onerror = null;
    }var e,
        s = t;(e = new Browser.window.Image()).onload = function () {
      $Q(), i(s, 200, e);
    }, e.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", s), $a.instance.$cv += s + "|", $Q(), i(s, 404, null);
    }, e.src = s, -1 == $a.instance.m_serverRes.indexOf(s) && -1 == $a.instance.m_loadingRes.indexOf(s) || Laya.Loader.keepCache($a.instance, s);
  }, $a.prototype.$yv = function (t, i) {
    return -1 != t.indexOf(i, t.length - i.length);
  }, $a;
}();!function (t) {
  function $v() {
    var t = i.call(this) || this;return t.$ev = "#72441d", t.$Rv = "#263d7d", t.width = 274, t.height = 59, t.$zv = new Laya.Image(), t.addChild(t.$zv), t.$Uv = new Laya.Label(), t.$Uv.fontSize = 30, t.$Uv.color = t.$Rv, t.addChild(t.$Uv), t.$Uv.centerX = 0, t.$Uv.centerY = 0, t;
  }var i;t = t.$d || (t.$d = {}), i = Laya.View, __extends($v, i), $v.prototype.initialize = function () {
    i.prototype.initialize.call(this), this.$P = Browser.window.PF_INFO, this.$P.loadingType, this.addEvt();
  }, Object.defineProperty($v.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), $v.prototype.setData = function (t) {
    this.$Iv = t[0], this.$Sv = t[1], this.$Uv.text = this.$Iv.title, this.$Uv.color = this.$Sv ? this.$ev : this.$Rv, this.$zv.skin = this.$Sv ? "bbblogin/b25b.png" : "bbblogin/b24b.png";
  }, $v.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), i.prototype.destroy.call(this, t);
  }, $v.prototype.addEvt = function () {}, $v.prototype.rmEvts = function () {}, t.NoticeItem = $v;
}(modules = modules || {}), function (t) {
  function $v() {
    var t = i.call(this) || this;return t.$ev = "#72441d", t.$Rv = "#263d7d", t.width = 274, t.height = 59, t.$zv = new Laya.Image(), t.addChild(t.$zv), t.$Uv = new Laya.Label(), t.$Uv.fontSize = 30, t.$Uv.color = t.$Rv, t.addChild(t.$Uv), t.$Uv.centerX = 0, t.$Uv.centerY = 0, t;
  }var i;t = t.$d || (t.$d = {}), i = Laya.View, __extends($v, i), $v.prototype.initialize = function () {
    i.prototype.initialize.call(this), this.$P = Browser.window.PF_INFO, this.$P.loadingType, this.addEvt();
  }, Object.defineProperty($v.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), $v.prototype.setData = function (t) {
    this.$Ov = t[0], this.$Sv = t[1], this.$Uv.text = this.$Ov, this.$Uv.color = this.$Sv ? this.$ev : this.$Rv, this.$zv.skin = this.$Sv ? "bbblogin/b25b.png" : "bbblogin/b24b.png";
  }, $v.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), i.prototype.destroy.call(this, t);
  }, $v.prototype.addEvt = function () {}, $v.prototype.rmEvts = function () {}, t.PrivacyItem = $v;
}(modules = modules || {}), function (t) {
  function $v() {
    var t = i.call(this) || this;return t.width = 192, t.height = 70, t.$zv = new Laya.Image(), t.addChild(t.$zv), t.$_v = new Laya.Label(), t.$_v.fontSize = 28, t.$_v.color = t.$H, t.addChild(t.$_v), t.$_v.centerX = 0, t.$_v.centerY = 0, t.$uv = new Laya.Label(), t.$uv.fontSize = 22, t.$uv.color = t.$H, t.addChild(t.$uv), t.$uv.centerX = 0, t.$uv.y = 11, t.$vg = new Laya.Label(), t.$vg.fontSize = 26, t.$vg.color = t.$H, t.addChild(t.$vg), t.$vg.centerX = 0, t.$vg.y = 39, t;
  }var i;t = t.$d || (t.$d = {}), i = Laya.View, __extends($v, i), $v.prototype.initialize = function () {
    i.prototype.initialize.call(this), this.$P = Browser.window.PF_INFO;var t = this.$P.loadingType;this.$H = 1 != t && 2 != t && 3 == t ? "#763042" : "#263d7d", this.addEvt();
  }, Object.defineProperty($v.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), $v.prototype.setData = function (t) {
    this.$Iv = t;var i = this.$Iv.id,
        e = this.$Iv.name;var s, n;this.$_v.visible = this.$uv.visible = this.$vg.visible = !1, -1 == i || -2 == i ? (this.$_v.visible = !0, this.$_v.text = e) : (i = "1-10\u670d", (n = (s = e).match("[0-9]{1,}")) && null != n.index && (s = e.slice(0, n.index), i = e.slice(n.index)), this.$uv.visible = this.$vg.visible = !0, this.$uv.text = s, this.$vg.text = i), this.$zv.skin = t.select ? "bbblogin/b14b.png" : "bbblogin/b15b.png";
  }, $v.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), i.prototype.destroy.call(this, t);
  }, $v.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $v.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $v.prototype.clkHdler = function () {
    this.$Iv && this.$Iv.callBack && this.$Iv.callBack(this.$Iv.index);
  }, t.SelectLeftListItem = $v;
}(modules = modules || {}), function (t) {
  function $v() {
    var t = i.call(this) || this;return t.width = 358, t.height = 70, t.$zv = new Laya.Image("bbblogin/b16b.png"), t.addChild(t.$zv), t.$zv.graphics.drawRect(0, 0, t.width, t.height, "#00sasd"), t.$gg = new Laya.Image(), t.$gg.centerY = 0, t.$gg.x = 7, t.addChild(t.$gg), t.$_v = new Laya.Label(), t.$_v.fontSize = 24, t.$_v.color = t.$H, t.$_v.x = 56, t.$_v.centerY = 0, t.addChild(t.$_v), t.$Qg = new Laya.Label(), t.$Qg.fontSize = 24, t.$Qg.color = t.$H, t.$Qg.x = 246, t.$Qg.centerY = 0, t.addChild(t.$Qg), t.$dg = new Laya.Image(), t.$dg.top = 0, t.$dg.right = 0, t.addChild(t.$dg), t.$rg = new Laya.Label(), t.$rg.fontSize = 20, t.$rg.color = "#ffffff", t.$rg.x = 225, t.$rg.y = 46, t.addChild(t.$rg), t;
  }var i;t = t.$d || (t.$d = {}), i = Laya.View, __extends($v, i), $v.prototype.initialize = function () {
    i.prototype.initialize.call(this), this.$P = Browser.window.PF_INFO;var t = this.$P.loadingType;this.$H = 1 != t && 2 != t && 3 == t ? "#763042" : "#34267d", this.addEvt();
  }, Object.defineProperty($v.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), $v.prototype.setData = function (t) {
    this.$Iv = t;var t = this.$Iv.status,
        i = this.$Iv.server_name;this.$gg.skin = this.getStatusSrc(this.$Iv), this.$_v.color = -1 === t ? "#d50000" : 0 === t ? "#49575a" : this.$H, this.$_v.text = i, this.$Qg.text = -1 === t ? "\u7ef4\u62a4\u4e2d" : 0 === t ? "\u672a\u5f00\u670d" : "\u5df2\u5f00\u670d";i = 1 == this.$Iv.is_recommend || 3 == this.$Iv.is_recommend;(this.$dg.visible = i) && (this.$dg.skin = "bbblogin/b199b.png"), this.$rg.text = -1 == this.$Iv.status && this.$Iv.maintain_time ? this.$Iv.maintain_time : "";
  }, $v.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), i.prototype.destroy.call(this, t);
  }, $v.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $v.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $v.prototype.clkHdler = function () {
    this.$Iv && this.$Iv.callBack && this.$Iv.callBack(this.$Iv);
  }, $v.prototype.getStatusSrc = function (t) {
    var i = t.status,
        t = t.is_recommend,
        e = "bbblogin/b19b.png";return 1 !== i && 2 !== i || 1 !== t && 3 !== t ? 1 !== i && 2 !== i || 2 !== t ? -1 !== i && 0 !== i || (e = "bbblogin/b20b.png") : e = "bbblogin/b19b.png" : e = "bbblogin/b18b.png", e;
  }, t.SelectRightListItem = $v;
}(modules = modules || {}), window.ServerLoading = ServerLoading;