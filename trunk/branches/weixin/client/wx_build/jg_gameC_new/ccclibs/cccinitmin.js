"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
  };return function (t, e) {
    function c$c() {
      this.constructor = t;
    }i(t, e), t.prototype = null === e ? Object.create(e) : (c$c.prototype = e.prototype, new c$c());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (t) {
  var e = (__extends(c$b, i = View), c$b.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.c$a.uiView);
  }, c$b.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "ccclogin/b2c.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "ccclogin/b6c.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "ccclogin/b3c.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "ccclogin/b4c.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "ccclogin/b5c.jpg", left: 720, height: 1280, centerY: 0 } }] }] }, c$b);function c$b() {
    return i.call(this) || this;
  }var i;t.c$a = e;
}(ui = ui || {}), function (t) {
  var e = (__extends(c$b, i = View), c$b.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.c$b.uiView);
  }, c$b.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "ccclogin/b1c.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "cccloding/a13c.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "cccloding/a14c.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "cccloding/a16c.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "cccloding/a17c.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "cccloding/a20c.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "cccloding/a19c.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "cccloding/a18c.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "cccloding/a18c.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "cccloding/a1c.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", right: 20, height: 32, fontSize: 24, color: "#163274", bold: !1, align: "right" } }] }, c$b);function c$b() {
    return i.call(this) || this;
  }var i;t.c$b = e;
}(ui = ui || {}), function (t) {
  var e = (__extends(c$b, i = View), c$b.prototype.createChildren = function () {
    View.regComponent("Text", laya.display.Text), i.prototype.createChildren.call(this), this.createView(t.c$c.uiView);
  }, c$b.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "ccclogin/b2c.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "ccclogin/b6c.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "ccclogin/b3c.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { width: 220, var: "leftImg", skin: "ccclogin/b4c.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "ccclogin/b5c.jpg", left: 720, height: 1280, centerY: 0 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "ccclogin/b21c.png", centerX: 0 } }, { type: "Image", props: { y: 930, x: 162, var: "hotImage", skin: "ccclogin/b18c.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "ccclogin/b1c.png", centerX: 0, bottom: 10 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "ccclogin/b12c.png", name: "enterBtn", centerX: 0 } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", right: 20, height: 32, fontSize: 24, color: "#163274", bold: !1, align: "right" } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "ccclogin/b11c.png" } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "ccclogin/b8c.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "ccclogin/b10c.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "ccclogin/b9c.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "ccclogin/b17c.png" } }] }] }, c$b);function c$b() {
    return i.call(this) || this;
  }var i;t.c$c = e;
}(ui = ui || {}), function (t) {
  function c$a() {
    return e.call(this) || this;
  }var e;t = t.c$d || (t.c$d = {}), e = ui.c$a, __extends(c$a, e), c$a.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
  }, c$a.prototype.addEvt = function () {
    this.on(Laya.Event.CLICK, this, this.c$g);
  }, c$a.prototype.rmEvts = function () {
    this.off(Laya.Event.CLICK, this, this.c$g);
  }, c$a.prototype.onOpened = function () {
    this.c$h = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
  }, c$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, c$a.prototype.c$g = function () {
    1e4 < Date.now() - this.c$h && (this.c$h -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
  }, t.AuthorizationPanel = c$a;
}(modules = modules || {}), function (t) {
  var e, i, c, o;function c$k() {
    var t = n.call(this) || this;return t.c$j = new c(), t.addChild(t.c$j), t.c$k = null, t.c$l = [], t.c$m = !1, t.c$n = 0, t.c$o = !0, t.c$p = 6, t.c$q = !1, t.on(i.DISPLAY, t, t.c$r), t.on(i.UNDISPLAY, t, t.c$s), t;
  }var n;e = t.c$i || (t.c$i = {}), i = Laya.Event, c = Laya.Image, t = Laya.Component, o = Laya.Loader, __extends(c$k, n = t), c$k.create = function (t, e, i, c, n, o, s) {
    void 0 === c && (c = 0), void 0 === n && (n = 6), void 0 === o && (o = !0), void 0 === s && (s = !1);var a = new c$k();return a.skin(e, i, c), a.durFrm = n, a.loop = o, a.atHide = s, t && t.addChild(a), a;
  }, c$k.play = function (t) {
    t && (t.visible = !0, t.play());
  }, c$k.stop = function (t) {
    t && (t.visible = !1, t.stop());
  }, c$k.prototype.destroy = function (t) {
    Laya.timer.clear(this, this.c$t), this.off(i.DISPLAY, this, this.c$r), this.off(i.UNDISPLAY, this, this.c$s), n.prototype.destroy.call(this, t);
  }, c$k.prototype.c$r = function () {}, c$k.prototype.c$s = function () {}, c$k.prototype.skin = function (t, e, i) {
    if (this.c$k != t) {
      this.c$k = t, this.c$l = [];for (var c = 0, n = i; n <= e; n++) this.c$l[c++] = t + "/" + n + ".png";i = o.getRes(this.c$l[0]);i && (this.width = i.sourceWidth, this.height = i.sourceHeight), this.c$t();
    }
  }, Object.defineProperty(c$k.prototype, "atHide", { get: function () {
      return this.c$q;
    }, set: function (t) {
      this.c$q = t;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(c$k.prototype, "durFrm", { set: function (t) {
      this.c$p != t && (this.c$p = t, this.c$m && (Laya.timer.clear(this, this.c$t), Laya.timer.loop(this.c$p * (1e3 / 60), this, this.c$t)));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(c$k.prototype, "loop", { set: function (t) {
      this.c$o = t;
    }, enumerable: !0, configurable: !0 }), c$k.prototype.play = function () {
    this.c$m && this.stop(), this.c$m = !0, this.c$n = 0, Laya.timer.loop(this.c$p * (1e3 / 60), this, this.c$t), this.c$t();
  }, c$k.prototype.stop = function () {
    this.c$m = !1, this.c$n = 0, this.c$t(), Laya.timer.clear(this, this.c$t);
  }, c$k.prototype.pause = function () {
    this.c$m && (this.c$m = !1, Laya.timer.clear(this, this.c$t));
  }, c$k.prototype.resume = function () {
    this.c$m || (this.c$m = !0, Laya.timer.loop(this.c$p * (1e3 / 60), this, this.c$t), this.c$t());
  }, Object.defineProperty(c$k.prototype, "isPlay", { get: function () {
      return this.c$m;
    }, enumerable: !0, configurable: !0 }), c$k.prototype.c$t = function () {
    this.c$l && 0 != this.c$l.length && (this.c$j.skin = this.c$l[this.c$n], this.c$m && (this.c$n++, this.c$n == this.c$l.length && (this.c$o ? this.c$n = 0 : (Laya.timer.clear(this, this.c$t), this.c$m = !1, this.c$q && (this.visible = !1), this.event(i.COMPLETE)))));
  }, e.PanelEff = c$k;
}(modules = modules || {}), function (t) {
  var e, i;function c$a(t) {
    void 0 === t && (t = 0);var e = c.call(this) || this;return e.c$u = { bgImgSkin: "cccloding/a3c.jpg", topImgSkin: "cccloding/a10c.jpg", btmImgSkin: "cccloding/a4c.jpg", leftImgSkin: "cccloding/a6c.jpg", rightImgSkin: "cccloding/a8c.jpg", loadingBarBgSkin: "cccloding/a13c.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.c$v = { bgImgSkin: "cccloding/a12c.jpg", topImgSkin: "cccloding/a11c.jpg", btmImgSkin: "cccloding/a5c.jpg", leftImgSkin: "cccloding/a7c.jpg", rightImgSkin: "cccloding/a9c.jpg", loadingBarBgSkin: "cccloding/a15c.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.c$w = 0, e.c$x(1 == t ? e.c$v : e.c$u), e;
  }var c;e = t.c$d || (t.c$d = {}), i = t.c$i.PanelEff, c = ui.c$b, __extends(c$a, c), c$a.prototype.initialize = function () {
    c.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.c$y = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.c$y && (this.c$y.loadingType, this.loadingTips.color = "#f2ffb5"), this.c$z = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
  }, c$a.prototype.toAllProgress = function (t) {
    var e = this;if (-1 === t) return e.c$w = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);var i;-2 !== t ? (e.c$w < .9 ? e.c$w += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : e.c$w < 1 && (e.c$w += 1e-4), .9999 < e.c$w && (e.c$w = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
      .9 < e.c$w && toAllProgress(-1);
    })), t = 590 * (i = e.c$w), e.c$w = e.c$w > i ? e.c$w : i, e.loadingBar.width = t, t = e.loadingBar.x + t, e.loadingImg2.x = t - 15, 364 <= t ? (e.loadingImg1.visible = !0, e.loadingImg1.x = t - 202) : e.loadingImg1.visible = !1, e.percentageTips.text = (100 * i >> 0) + "%", e.c$w < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress)) : Laya.timer.clear(this, this.toAllProgress);
  }, c$a.prototype.toProgress = function (t, e, i) {
    var c = 590 * (t = 1 < t ? 1 : t);this.c$w = this.c$w > t ? this.c$w : t, this.loadingBar.width = c;c = this.loadingBar.x + c;this.loadingImg2.x = c - 15, 364 <= c ? (this.loadingImg1.visible = !0, this.loadingImg1.x = c - 202) : this.loadingImg1.visible = !1, this.percentageTips.text = (100 * t >> 0) + "%", this.loadingTips.text = e;for (var n = i - 1, o = 0; o < this.c$z.length; o++) this.c$z[o].skin = o < n ? "cccloding/a20c.png" : n === o ? "cccloding/a19c.png" : "cccloding/a18c.png";
  }, c$a.prototype.onOpened = function () {
    this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.c$y.lastVersion + "      \u7248\u672c\uff1a" + this.c$y.wxVersion, this.showGetBtn();
  }, c$a.prototype.close = function (t) {
    this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.c$A), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.c$B);
  }, c$a.prototype.resetWinFun = function () {
    Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
  }, c$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.resetWinFun(), c.prototype.destroy.call(this, t);
  }, c$a.prototype.showGetBtn = function () {
    this.c$y.showGetBtn && 1 == this.c$y.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "cccloding/a1c.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.c$B), this.c$C(), this.c$D(!0));
  }, c$a.prototype.c$B = function () {
    this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "cccloding/a2c.png", this.c$E(), this.c$D(!1));
  }, c$a.prototype.c$x = function (t) {
    this.bgImg.skin = t.bgImgSkin, this.topImg.skin = t.topImgSkin, this.btmImg.skin = t.btmImgSkin, this.leftImg.skin = t.leftImgSkin, this.rightImg.skin = t.rightImgSkin, this.copyRightImg.bottom = t.copyRightImgBottom, this.processBox1.y = t.processBox1Y, this.processBox2.y = t.processBox2Y, this.loadingBarBg.skin = t.loadingBarBgSkin, this.loadingTips.fontSize = t.loadingTipsSize, this.getTipsBtn.visible = this.c$y.showGetBtn && 1 == this.c$y.showGetBtn, this.getTipsBtn.visible ? this.c$C() : this.c$E(), this.c$D(this.getTipsBtn.visible);
  }, c$a.prototype.c$C = function () {
    this.c$F || (this.c$F = i.create(this.getTipsBtn, "cccwxeff", 4, 0, 12), this.c$F.pos(161, 106), this.c$F.scale(1.14, 1.15)), i.play(this.c$F);
  }, c$a.prototype.c$E = function () {
    this.c$F && i.stop(this.c$F);
  }, c$a.prototype.c$D = function (t) {
    Laya.timer.clear(this, this.c$A), t ? (this.c$G = 9, this.txtGetTm.visible = !0, this.c$A(), Laya.timer.loop(1e3, this, this.c$A)) : this.txtGetTm.visible = !1;
  }, c$a.prototype.c$A = function () {
    0 < this.c$G ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.c$G + "s)", this.c$G--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.c$A), this.c$B());
  }, e.LoadingPanel = c$a;
}(modules = modules || {}), function (t) {
  var e, i, c;function c$a() {
    var t = n.call(this) || this;return t.c$H = 0, t;
  }var n;e = t.c$d || (t.c$d = {}), i = Laya.List, c = Laya.Event, n = ui.c$c, __extends(c$a, n), c$a.prototype.initialize = function () {
    n.prototype.initialize.call(this), ServerLoading.instance.preloadServer(), this.centerX = 0, this.centerY = 0, this.c$y = Browser.window.PF_INFO, this.c$I = new i(), this.c$I.vScrollBarSkin = "", this.c$I.itemRender = e.SelectLeftListItem, this.c$I.top = 5, this.c$I.repeatX = 1, this.c$I.spaceY = 5, this.c$I.width = this.leftListBox.width, this.c$I.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.c$I), this.c$J = new i(), this.c$J.vScrollBarSkin = "", this.c$J.itemRender = e.SelectRightListItem, this.c$J.top = 5, this.c$J.repeatX = 1, this.c$J.spaceY = 5, this.c$J.width = this.rightListBox.width, this.c$J.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.c$J);var t = this.c$y.loadingType;this.c$K = 1 != t && (2 == t || 3 == t) ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.noticeBtn.visible = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
  }, c$a.prototype.addEvt = function () {
    this.bgImg.on(Laya.Event.CLICK, this, this.c$g), this.enterBtn.on(Laya.Event.CLICK, this, this.c$L), this.selectServer.on(Laya.Event.CLICK, this, this.c$M), this.selectServer.on(Laya.Event.CLICK, this, this.c$M), this.closeBg.on(Laya.Event.CLICK, this, this.c$N), this.noticeBtn.on(Laya.Event.CLICK, this, this.c$O), this.noticeClose.on(Laya.Event.CLICK, this, this.c$P), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.c$Q);
  }, c$a.prototype.rmEvts = function () {
    this.bgImg.off(Laya.Event.CLICK, this, this.c$g), this.enterBtn.off(Laya.Event.CLICK, this, this.c$L), this.selectServer.off(Laya.Event.CLICK, this, this.c$M), this.selectServer.off(Laya.Event.CLICK, this, this.c$M), this.closeBg.off(Laya.Event.CLICK, this, this.c$N), this.noticeBtn.off(Laya.Event.CLICK, this, this.c$O), this.noticeClose.off(Laya.Event.CLICK, this, this.c$P), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.c$Q);
  }, c$a.prototype.onOpened = function () {
    this.c$h = Date.now(), this.c$R = this.c$y.selectedServer.server_id, this.c$S(this.c$y.selectedServer), this.c$I.dataSource = this.c$y.groupList, this.c$M(), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.c$y.lastVersion + "      \u7248\u672c\uff1a" + this.c$y.wxVersion, this.serverName.color = this.selServer.color = this.c$K;
  }, c$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), this.c$I && (this.c$I.removeSelf(), this.c$I.destroy(), this.c$I = null), this.c$J && (this.c$J.removeSelf(), this.c$J.destroy(), this.c$J = null), n.prototype.destroy.call(this, t);
  }, c$a.prototype.c$g = function () {
    1e4 < Date.now() - this.c$h && (this.c$h -= 2e3, ServerLoading.instance.enterDefaultServer());
  }, c$a.prototype.c$N = function () {
    this.listBg.visible = !1;
  }, c$a.prototype.c$L = function () {
    this.c$T(this.c$y.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.c$y.selectedServer, req_server_check_ban(0, this.c$y.selectedServer.server_id));
  }, c$a.prototype.c$O = function () {
    this.noticeBg.visible = !0, req_server_notice(this.c$y.selectedServer.server_id, this.c$U.bind(this));
  }, c$a.prototype.c$P = function () {
    this.noticeBg.visible = !1;
  }, c$a.prototype.c$Q = function () {
    this.c$H = this.noticeContent.mouseY, Laya.stage.on(c.MOUSE_MOVE, this, this.c$V), Laya.stage.on(c.MOUSE_UP, this, this.c$W), Laya.stage.on(c.MOUSE_OUT, this, this.c$W);
  }, c$a.prototype.c$V = function () {
    var t = this.c$H - this.noticeContent.mouseY;this.noticeContent.scrollY += t, this.c$H = this.noticeContent.mouseY;
  }, c$a.prototype.c$W = function () {
    Laya.stage.off(c.MOUSE_MOVE, this, this.c$V), Laya.stage.off(c.MOUSE_UP, this, this.c$W), Laya.stage.off(c.MOUSE_OUT, this, this.c$W);
  }, c$a.prototype.c$T = function (t) {
    return -1 == t.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != t.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
  }, c$a.prototype.c$M = function () {
    this.c$y.hasGroupReq ? this.listBg.visible = !0 : (this.c$y.hasGroupReq = !0, req_server_group(0));
  }, c$a.prototype.preload = function () {}, c$a.prototype.getStatusSrc = function (t) {
    var e = "";return 2 === t ? e = "ccclogin/b18c.png" : 1 === t ? e = "ccclogin/b19c.png" : -1 !== t && 0 !== t || (e = "ccclogin/b20c.png"), e;
  }, c$a.prototype.c$S = function (t) {
    this.serverName.text = -1 === t.status ? t.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === t.status ? t.server_name + "(\u5f85\u5f00\u670d)" : t.server_name, this.serverName.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.c$K, this.hotImage.skin = this.getStatusSrc(t.status), this.c$y.cdn = t.cdn || "", this.c$y.selectedServer = t, this.noticeBtn.visible = !0;
  }, c$a.prototype.c$X = function (t) {
    this.showGroupList(t);
  }, c$a.prototype.c$Y = function (t) {
    this.c$S(t), this.listBg.visible = !1;
  }, c$a.prototype.c$U = function (t) {
    this.noticeContent.text = t.data.content || "", this.noticeTitle.text = t.data.title || "\u6682\u65e0\u516c\u544a";
  }, c$a.prototype.showGroupList = function (t) {
    if (void 0 === t && (t = 0), this.parent) {
      var e = this.c$y.groupList;if (e && 0 !== e.length) {
        for (var i = e.length, c = 0; c < i; c++) e[c].callBack = this.c$X.bind(this), e[c].select = c == t, e[c].index = c;var n = (this.c$I.array = e)[t].id;this.c$y.serverList[n] ? this.showServerList(n) : this.c$y.hasServerReq || (this.c$y.hasServerReq = !0, -1 == n ? req_server_owner(0) : -2 == n ? req_recommend_server_list(0) : req_server_list(0, n));
      }
    }
  }, c$a.prototype.showServerList = function (t) {
    if (this.parent && this.c$y.serverList[t]) {
      for (var e = this.c$y.serverList[t], i = e.length, c = 0; c < i; c++) e[c].callBack = this.c$Y.bind(this);this.c$J.array = e;
    }
  }, e.SelectServerPanel = c$a;
}(modules = modules || {});var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.c$d.AuthorizationPanel,
    LoadingPanel = modules.c$d.LoadingPanel,
    SelectServerPanel = modules.c$d.SelectServerPanel,
    ServerLoading = function () {
  function c$k(t) {
    this.m_loadingRes = ["cccloding/a13c.png", "cccloding/a15c.png", "cccloding/a14c.png", "cccloding/a16c.png", "cccloding/a17c.png", "cccloding/a18c.png", "cccloding/a19c.png", "cccloding/a20c.png", "cccwxeff/c100c.png", "cccwxeff/c101c.png", "cccwxeff/c102c.png", "cccwxeff/c103c.png", "cccwxeff/c104c.png", "cccloding/a3c.jpg", "cccloding/a12c.jpg", "cccloding/a1c.png", "cccloding/a2c.png", "cccloding/a4c.jpg", "cccloding/a6c.jpg", "cccloding/a8c.jpg", "cccloding/a10c.jpg", "cccloding/a5c.jpg", "cccloding/a7c.jpg", "cccloding/a9c.jpg", "cccloding/a11c.jpg"], this.m_serverRes = ["ccclogin/b10c.png", "ccclogin/b11c.png", "ccclogin/b12c.png", "ccclogin/b13c.png", "ccclogin/b14c.png", "ccclogin/b15c.png", "ccclogin/b16c.png", "ccclogin/b17c.png", "ccclogin/b18c.png", "ccclogin/b19c.png", "ccclogin/b20c.png", "ccclogin/b21c.png", "ccclogin/b2c.jpg", "ccclogin/b3c.jpg", "ccclogin/b4c.jpg", "ccclogin/b5c.jpg", "ccclogin/b6c.jpg", "ccclogin/b1c.png", "ccclogin/b8c.png", "ccclogin/b9c.png"], this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.c$Z = !1, this.c$$ = "", c$k.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var e = Laya.AtlasResourceManager;e.maxTextureCount = 4, e.atlasTextureWidth = e.atlasTextureHeight = 1024, e._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.c$_.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = c$k.instance.requestWeb, Browser.window.imgMgrLoad = c$k.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.c$_();
  }return c$k.prototype.changeServerLoading = function (t) {
    c$k.instance.m_layer.visible = t;
  }, c$k.prototype.openAuthor = function () {
    c$k.instance.m_author || (c$k.instance.m_author = new AuthorizationPanel()), c$k.instance.m_author.parent || c$k.instance.m_layer.addChild(c$k.instance.m_author), c$k.instance.c$e();
  }, c$k.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, c$k.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, c$k.prototype.openServer = function () {
    for (var t = function () {
      c$k.instance.m_server || (c$k.instance.m_server = new SelectServerPanel()), c$k.instance.m_server.parent || c$k.instance.m_layer.addChild(c$k.instance.m_server), c$k.instance.c$e();
    }, e = !0, i = 0, c = this.m_serverRes; i < c.length; i++) {
      var n = c[i];if (null == Laya.Loader.getRes(n)) {
        e = !1;break;
      }
    }e ? t() : Laya.loader.load(this.m_serverRes, Handler.create(this, t));
  }, c$k.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, c$k.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, c$k.prototype.openLoading = function (t) {
    void 0 === t && (t = 0), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      c$k.instance.m_loading || (c$k.instance.m_loading = new LoadingPanel(t)), c$k.instance.m_loading.parent || c$k.instance.m_layer.addChild(c$k.instance.m_loading), c$k.instance.c$e();
    }));
  }, c$k.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var t = 0, e = this.m_serverRes; t < e.length; t++) {
      var i = e[t];Laya.Loader.clearCache(c$k.instance, i), Laya.Loader.clearRes(i, !0);
    }for (var c = 0, n = this.m_loadingRes; c < n.length; c++) i = n[c], Laya.Loader.clearCache(c$k.instance, i), Laya.Loader.clearRes(i, !0);this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, c$k.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && c$k.instance.m_loading.showGetBtn();
  }, c$k.prototype.enterDefaultServer = function () {
    var t = Browser.window.PF_INFO.selectedServer;this.c$Z || -1 == t.status || 0 == t.status || (this.c$Z = !0, Browser.window.PF_INFO.selectedServer = t, req_server_check_ban(0, t.server_id));
  }, c$k.prototype.sendRecord = function () {
    var t = "";t += "newRegister=" + Browser.window.PF_INFO.newRegister, t += ", isPrelodServer=" + this.m_isPrelodServer, t += ", SelectServerPanel=" + (null != c$k.instance.m_server), t += ", isPrelodLoading=" + this.m_isPrelodLoading, t += ", LoadingPanel=" + (null != c$k.instance.m_loading), t += ", resMgrLoad=" + (Browser.window.resMgrLoad == c$k.instance.requestWeb), t += ", imgMgrLoad=" + (Browser.window.imgMgrLoad == c$k.instance.requestWeb), t += ", errUrls=" + c$k.instance.c$$;for (var e = 0, i = this.m_serverRes; e < i.length; e++) t += ", " + (o = i[e]) + "=" + (null != Laya.Loader.getRes(o));for (var c = 0, n = this.m_loadingRes; c < n.length; c++) {
      var o;t += ", " + (o = n[c]) + "=" + (null != Laya.Loader.getRes(o));
    }var s = Browser.window.PF_INFO.selectedServer;s && (t += ", server_status=" + s.status, t += ", server_id=" + s.server_id, t += ", server_name=" + s.server_name);s = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: t });console.error(s), this.c$f && this.c$f == t || (this.c$f = t, reqRecordError(s));
  }, c$k.prototype.c$aa = function () {
    var t = Laya.stage,
        e = Math.floor(t.width),
        i = Math.floor(t.height);i / e < 1.7777778 ? (this.viewW = Math.floor(e / (i / 1280)), this.viewH = 1280, this.viewS = i / 1280) : (this.viewW = 720, this.viewH = Math.floor(i / (e / 720)), this.viewS = e / 720);e = Math.floor(t.width), t = Math.floor(t.height);t / e < 1.7777778 ? (this.viewW = Math.floor(e / (t / 1280)), this.viewH = 1280, this.viewS = t / 1280) : (this.viewW = 720, this.viewH = Math.floor(t / (e / 720)), this.viewS = e / 720), this.c$e();
  }, c$k.prototype.c$e = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, c$k.prototype.c$_ = function () {
    if (Input.isInputting && Browser.onMobile) {
      var t = parseInt(Input.inputContainer.style.top.replace("px", "")),
          e = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS,
          i = Browser.clientWidth / Render.canvas.width;return 0 < (t = Browser.clientHeight - e * i - t) && (t = 0), void (Browser.container.style.top = t + "px");
    }Browser.container.style.top = "0px", e = (e = Math.floor(Browser.width)) + 1 & 2147483646, i = (i = Math.floor(Browser.height)) + 1 & 2147483646;t = Laya.stage;3 == ENV || i < e ? (t.scaleMode = Laya.Stage.SCALE_NOSCALE, t.width = e, t.height = i) : (t.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, t.width = 840, t.height = Math.floor(i / (e / 840)) + 1 & 2147483646), this.c$aa();
  }, c$k.prototype.requestWeb = function (t, e) {
    function c$c() {
      i.onload = null, i.onerror = null;
    }var i,
        c = t;(i = new Browser.window.Image()).onload = function () {
      c$c(), e(c, 200, i);
    }, i.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", c), c$k.instance.c$$ += c + "|", c$c(), e(c, 404, null);
    }, i.src = c, -1 == c$k.instance.m_serverRes.indexOf(c) && -1 == c$k.instance.m_loadingRes.indexOf(c) || Laya.Loader.keepCache(c$k.instance, c);
  }, c$k.prototype.c$ba = function (t, e) {
    return -1 != t.indexOf(e, t.length - e.length);
  }, c$k;
}();!function (t) {
  function c$a() {
    var t = e.call(this) || this;return t.width = 192, t.height = 70, t.c$ca = new Laya.Image(), t.addChild(t.c$ca), t.c$da = new Laya.Label(), t.c$da.fontSize = 30, t.c$da.color = t.c$K, t.addChild(t.c$da), t.c$da.centerX = 0, t.c$da.centerY = 0, t;
  }var e;t = t.c$d || (t.c$d = {}), e = Laya.View, __extends(c$a, e), c$a.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.c$y = Browser.window.PF_INFO;var t = this.c$y.loadingType;this.c$K = 1 != t && 2 != t && 3 == t ? "#763042" : "#263d7d", this.addEvt();
  }, Object.defineProperty(c$a.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), c$a.prototype.setData = function (t) {
    this.c$ga = t, this.c$da.text = t.name, this.c$ca.skin = t.select ? "ccclogin/b14c.png" : "ccclogin/b15c.png";
  }, c$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, c$a.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, c$a.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, c$a.prototype.clkHdler = function () {
    this.c$ga && this.c$ga.callBack && this.c$ga.callBack(this.c$ga.index);
  }, t.SelectLeftListItem = c$a;
}(modules = modules || {}), function (t) {
  function c$a() {
    var t = e.call(this) || this;return t.c$ca = new Laya.Image("ccclogin/b16c.png"), t.c$da = new Laya.Label(), t.c$da.fontSize = 30, t.c$da.color = t.c$K, t.addChild(t.c$ca), t.c$ha = new Laya.Image(), t.addChild(t.c$ha), t.width = 358, t.height = 70, t.addChild(t.c$da), t.c$ha.centerY = 0, t.c$ha.x = 18, t.c$da.x = 80, t.c$da.centerY = 0, t.c$ca.graphics.drawRect(0, 0, t.width, t.height, "#00sasd"), t;
  }var e;t = t.c$d || (t.c$d = {}), e = Laya.View, __extends(c$a, e), c$a.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.c$y = Browser.window.PF_INFO;var t = this.c$y.loadingType;this.c$K = 1 != t && 2 != t && 3 == t ? "#763042" : "#34267d", this.addEvt();
  }, Object.defineProperty(c$a.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), c$a.prototype.setData = function (t) {
    this.c$ga = t, this.c$da.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.c$K, this.c$da.text = -1 === t.status ? t.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === t.status ? t.server_name + "(\u5f85\u5f00\u670d)" : t.server_name, this.c$ha.skin = this.getStatusSrc(t.status);
  }, c$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, c$a.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, c$a.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, c$a.prototype.clkHdler = function () {
    this.c$ga && this.c$ga.callBack && this.c$ga.callBack(this.c$ga);
  }, c$a.prototype.getStatusSrc = function (t) {
    var e = "";return 2 === t ? e = "ccclogin/b18c.png" : 1 === t ? e = "ccclogin/b19c.png" : -1 !== t && 0 !== t || (e = "ccclogin/b20c.png"), e;
  }, t.SelectRightListItem = c$a;
}(modules = modules || {}), window.ServerLoading = ServerLoading;