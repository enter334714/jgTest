"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
  };return function (t, e) {
    function b$e() {
      this.constructor = t;
    }i(t, e), t.prototype = null === e ? Object.create(e) : (b$e.prototype = e.prototype, new b$e());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (t) {
  var e = (__extends(b$d, i = View), b$d.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.b$c.uiView);
  }, b$d.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/b2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "bbblogin/b6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "bbblogin/b3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "bbblogin/b4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "bbblogin/b5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] }, b$d);function b$d() {
    return i.call(this) || this;
  }var i;t.b$c = e;
}(ui = ui || {}), function (t) {
  var e = (__extends(b$d, i = View), b$d.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.b$d.uiView);
  }, b$d.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/b1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "bbbloding/a13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "bbbloding/a14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "bbbloding/a16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "bbbloding/a17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "bbbloding/a20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "bbbloding/a19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "bbbloding/a18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "bbbloding/a18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "bbbloding/a1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", right: 20, height: 32, fontSize: 24, color: "#163274", bold: !1, align: "right" } }] }, b$d);function b$d() {
    return i.call(this) || this;
  }var i;t.b$d = e;
}(ui = ui || {}), function (t) {
  var e = (__extends(b$d, i = View), b$d.prototype.createChildren = function () {
    View.regComponent("Text", laya.display.Text), i.prototype.createChildren.call(this), this.createView(t.b$e.uiView);
  }, b$d.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/b2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "bbblogin/b6b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "bbblogin/b3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { width: 220, var: "leftImg", skin: "bbblogin/b4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "bbblogin/b5b.jpg", left: 720, height: 1280, centerY: 0 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "bbblogin/b21b.png", centerX: 0 } }, { type: "Image", props: { y: 930, x: 162, var: "hotImage", skin: "bbblogin/b18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/b1b.png", centerX: 0, bottom: 10 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "bbblogin/b12b.png", name: "enterBtn", centerX: 0 } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", right: 20, height: 32, fontSize: 24, color: "#163274", bold: !1, align: "right" } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "bbblogin/b11b.png" } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "bbblogin/b8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "bbblogin/b10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "bbblogin/b9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "bbblogin/b17b.png" } }] }] }, b$d);function b$d() {
    return i.call(this) || this;
  }var i;t.b$e = e;
}(ui = ui || {}), function (t) {
  function b$c() {
    return e.call(this) || this;
  }var e;t = t.b$f || (t.b$f = {}), e = ui.b$c, __extends(b$c, e), b$c.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
  }, b$c.prototype.addEvt = function () {
    this.on(Laya.Event.CLICK, this, this.b$g);
  }, b$c.prototype.rmEvts = function () {
    this.off(Laya.Event.CLICK, this, this.b$g);
  }, b$c.prototype.onOpened = function () {
    this.b$h = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
  }, b$c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, b$c.prototype.b$g = function () {
    1e4 < Date.now() - this.b$h && (this.b$h -= 1e3, Browser.window.PF_INFO.selectedServer.server_id || (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
  }, t.AuthorizationPanel = b$c;
}(modules = modules || {}), function (t) {
  var e, i, n, s;function b$k() {
    var t = o.call(this) || this;return t.b$j = new n(), t.addChild(t.b$j), t.b$k = null, t.b$l = [], t.b$m = !1, t.b$n = 0, t.b$o = !0, t.b$p = 6, t.b$q = !1, t.on(i.DISPLAY, t, t.b$r), t.on(i.UNDISPLAY, t, t.b$s), t;
  }var o;e = t.b$i || (t.b$i = {}), i = Laya.Event, n = Laya.Image, t = Laya.Component, s = Laya.Loader, __extends(b$k, o = t), b$k.create = function (t, e, i, n, o, s, r) {
    void 0 === n && (n = 0), void 0 === o && (o = 6), void 0 === s && (s = !0), void 0 === r && (r = !1);var a = new b$k();return a.skin(e, i, n), a.durFrm = o, a.loop = s, a.atHide = r, t && t.addChild(a), a;
  }, b$k.play = function (t) {
    t && (t.visible = !0, t.play());
  }, b$k.stop = function (t) {
    t && (t.visible = !1, t.stop());
  }, b$k.prototype.destroy = function (t) {
    Laya.timer.clear(this, this.b$t), this.off(i.DISPLAY, this, this.b$r), this.off(i.UNDISPLAY, this, this.b$s), o.prototype.destroy.call(this, t);
  }, b$k.prototype.b$r = function () {}, b$k.prototype.b$s = function () {}, b$k.prototype.skin = function (t, e, i) {
    if (this.b$k != t) {
      this.b$k = t, this.b$l = [];for (var n = 0, o = i; o <= e; o++) this.b$l[n++] = t + "/" + o + ".png";i = s.getRes(this.b$l[0]);i && (this.width = i.sourceWidth, this.height = i.sourceHeight), this.b$t();
    }
  }, Object.defineProperty(b$k.prototype, "atHide", { get: function () {
      return this.b$q;
    }, set: function (t) {
      this.b$q = t;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(b$k.prototype, "durFrm", { set: function (t) {
      this.b$p != t && (this.b$p = t, this.b$m && (Laya.timer.clear(this, this.b$t), Laya.timer.loop(this.b$p * (1e3 / 60), this, this.b$t)));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(b$k.prototype, "loop", { set: function (t) {
      this.b$o = t;
    }, enumerable: !0, configurable: !0 }), b$k.prototype.play = function () {
    this.b$m && this.stop(), this.b$m = !0, this.b$n = 0, Laya.timer.loop(this.b$p * (1e3 / 60), this, this.b$t), this.b$t();
  }, b$k.prototype.stop = function () {
    this.b$m = !1, this.b$n = 0, this.b$t(), Laya.timer.clear(this, this.b$t);
  }, b$k.prototype.pause = function () {
    this.b$m && (this.b$m = !1, Laya.timer.clear(this, this.b$t));
  }, b$k.prototype.resume = function () {
    this.b$m || (this.b$m = !0, Laya.timer.loop(this.b$p * (1e3 / 60), this, this.b$t), this.b$t());
  }, Object.defineProperty(b$k.prototype, "isPlay", { get: function () {
      return this.b$m;
    }, enumerable: !0, configurable: !0 }), b$k.prototype.b$t = function () {
    this.b$l && 0 != this.b$l.length && (this.b$j.skin = this.b$l[this.b$n], this.b$m && (this.b$n++, this.b$n == this.b$l.length && (this.b$o ? this.b$n = 0 : (Laya.timer.clear(this, this.b$t), this.b$m = !1, this.b$q && (this.visible = !1), this.event(i.COMPLETE)))));
  }, e.PanelEff = b$k;
}(modules = modules || {}), function (t) {
  var e, i;function b$c(t) {
    void 0 === t && (t = 0);var e = n.call(this) || this;return e.b$u = { bgImgSkin: "bbbloding/a3a.jpg", topImgSkin: "bbbloding/a10a.jpg", btmImgSkin: "bbbloding/a4a.jpg", leftImgSkin: "bbbloding/a6a.jpg", rightImgSkin: "bbbloding/a8a.jpg", loadingBarBgSkin: "bbbloding/a13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.b$v = { bgImgSkin: "bbbloding/a12a.jpg", topImgSkin: "bbbloding/a11a.jpg", btmImgSkin: "bbbloding/a5a.jpg", leftImgSkin: "bbbloding/a7a.jpg", rightImgSkin: "bbbloding/a9a.jpg", loadingBarBgSkin: "bbbloding/a15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.b$w = 0, e.b$x(1 == t ? e.b$v : e.b$u), e;
  }var n;e = t.b$f || (t.b$f = {}), i = t.b$i.PanelEff, n = ui.b$d, __extends(b$c, n), b$c.prototype.initialize = function () {
    n.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.b$y = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.b$y && (this.b$y.loadingType, this.loadingTips.color = "#f2ffb5"), this.b$z = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
  }, b$c.prototype.toAllProgress = function (t) {
    var e = this;if (-1 === t) return e.b$w = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);var i;-2 !== t ? (e.b$w < .9 ? e.b$w += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : e.b$w < 1 && (e.b$w += 1e-4), .9999 < e.b$w && (e.b$w = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
      .9 < e.b$w && toAllProgress(-1);
    })), t = 590 * (i = e.b$w), e.b$w = e.b$w > i ? e.b$w : i, e.loadingBar.width = t, t = e.loadingBar.x + t, e.loadingImg2.x = t - 15, 364 <= t ? (e.loadingImg1.visible = !0, e.loadingImg1.x = t - 202) : e.loadingImg1.visible = !1, e.percentageTips.text = (100 * i >> 0) + "%", e.b$w < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress)) : Laya.timer.clear(this, this.toAllProgress);
  }, b$c.prototype.toProgress = function (t, e, i) {
    var n = 590 * (t = 1 < t ? 1 : t);this.b$w = this.b$w > t ? this.b$w : t, this.loadingBar.width = n;n = this.loadingBar.x + n;this.loadingImg2.x = n - 15, 364 <= n ? (this.loadingImg1.visible = !0, this.loadingImg1.x = n - 202) : this.loadingImg1.visible = !1, this.percentageTips.text = (100 * t >> 0) + "%", this.loadingTips.text = e;for (var o = i - 1, s = 0; s < this.b$z.length; s++) this.b$z[s].skin = s < o ? "bbbloding/a20a.png" : o === s ? "bbbloding/a19a.png" : "bbbloding/a18a.png";
  }, b$c.prototype.onOpened = function () {
    this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.b$y.lastVersion + "      \u7248\u672c\uff1a" + this.b$y.wxVersion, this.showGetBtn();
  }, b$c.prototype.close = function (t) {
    this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.b$A), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.b$B);
  }, b$c.prototype.resetWinFun = function () {
    Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
  }, b$c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.resetWinFun(), n.prototype.destroy.call(this, t);
  }, b$c.prototype.showGetBtn = function () {
    this.b$y.showGetBtn && 1 == this.b$y.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "bbbloding/a1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.b$B), this.b$C(), this.b$D(!0));
  }, b$c.prototype.b$B = function () {
    this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "bbbloding/a2a.png", this.b$E(), this.b$D(!1));
  }, b$c.prototype.b$x = function (t) {
    this.bgImg.skin = t.bgImgSkin, this.topImg.skin = t.topImgSkin, this.btmImg.skin = t.btmImgSkin, this.leftImg.skin = t.leftImgSkin, this.rightImg.skin = t.rightImgSkin, this.copyRightImg.bottom = t.copyRightImgBottom, this.processBox1.y = t.processBox1Y, this.processBox2.y = t.processBox2Y, this.loadingBarBg.skin = t.loadingBarBgSkin, this.loadingTips.fontSize = t.loadingTipsSize, this.getTipsBtn.visible = this.b$y.showGetBtn && 1 == this.b$y.showGetBtn, this.getTipsBtn.visible ? this.b$C() : this.b$E(), this.b$D(this.getTipsBtn.visible);
  }, b$c.prototype.b$C = function () {
    this.b$F || (this.b$F = i.create(this.getTipsBtn, "bwxeff", 4, 0, 12), this.b$F.pos(161, 106), this.b$F.scale(1.14, 1.15)), i.play(this.b$F);
  }, b$c.prototype.b$E = function () {
    this.b$F && i.stop(this.b$F);
  }, b$c.prototype.b$D = function (t) {
    Laya.timer.clear(this, this.b$A), t ? (this.b$G = 9, this.txtGetTm.visible = !0, this.b$A(), Laya.timer.loop(1e3, this, this.b$A)) : this.txtGetTm.visible = !1;
  }, b$c.prototype.b$A = function () {
    0 < this.b$G ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.b$G + "s)", this.b$G--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.b$A), this.b$B());
  }, e.LoadingPanel = b$c;
}(modules = modules || {}), function (t) {
  var e, i, n;function b$c() {
    var t = o.call(this) || this;return t.b$H = 0, t;
  }var o;e = t.b$f || (t.b$f = {}), i = Laya.List, n = Laya.Event, o = ui.b$e, __extends(b$c, o), b$c.prototype.initialize = function () {
    o.prototype.initialize.call(this), ServerLoading.instance.preloadServer(), this.centerX = 0, this.centerY = 0, this.b$y = Browser.window.PF_INFO, this.b$I = new i(), this.b$I.vScrollBarSkin = "", this.b$I.itemRender = e.SelectLeftListItem, this.b$I.top = 5, this.b$I.repeatX = 1, this.b$I.spaceY = 5, this.b$I.width = this.leftListBox.width, this.b$I.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.b$I), this.b$J = new i(), this.b$J.vScrollBarSkin = "", this.b$J.itemRender = e.SelectRightListItem, this.b$J.top = 5, this.b$J.repeatX = 1, this.b$J.spaceY = 5, this.b$J.width = this.rightListBox.width, this.b$J.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.b$J);var t = this.b$y.loadingType;this.b$K = 1 != t && (2 == t || 3 == t) ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.noticeBtn.visible = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
  }, b$c.prototype.addEvt = function () {
    this.bgImg.on(Laya.Event.CLICK, this, this.b$g), this.enterBtn.on(Laya.Event.CLICK, this, this.b$L), this.selectServer.on(Laya.Event.CLICK, this, this.b$M), this.selectServer.on(Laya.Event.CLICK, this, this.b$M), this.closeBg.on(Laya.Event.CLICK, this, this.b$N), this.noticeBtn.on(Laya.Event.CLICK, this, this.b$O), this.noticeClose.on(Laya.Event.CLICK, this, this.b$P), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.b$Q);
  }, b$c.prototype.rmEvts = function () {
    this.bgImg.off(Laya.Event.CLICK, this, this.b$g), this.enterBtn.off(Laya.Event.CLICK, this, this.b$L), this.selectServer.off(Laya.Event.CLICK, this, this.b$M), this.selectServer.off(Laya.Event.CLICK, this, this.b$M), this.closeBg.off(Laya.Event.CLICK, this, this.b$N), this.noticeBtn.off(Laya.Event.CLICK, this, this.b$O), this.noticeClose.off(Laya.Event.CLICK, this, this.b$P), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.b$Q);
  }, b$c.prototype.onOpened = function () {
    this.b$h = Date.now(), this.b$R = this.b$y.selectedServer.server_id, this.b$S(this.b$y.selectedServer), this.b$I.dataSource = this.b$y.groupList, this.b$M(), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.b$y.lastVersion + "      \u7248\u672c\uff1a" + this.b$y.wxVersion, this.serverName.color = this.selServer.color = this.b$K;
  }, b$c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), this.b$I && (this.b$I.removeSelf(), this.b$I.destroy(), this.b$I = null), this.b$J && (this.b$J.removeSelf(), this.b$J.destroy(), this.b$J = null), o.prototype.destroy.call(this, t);
  }, b$c.prototype.b$g = function () {
    1e4 < Date.now() - this.b$h && (this.b$h -= 2e3, ServerLoading.instance.enterDefaultServer());
  }, b$c.prototype.b$N = function () {
    this.listBg.visible = !1;
  }, b$c.prototype.b$L = function () {
    this.b$T(this.b$y.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.b$y.selectedServer, req_server_check_ban(0, this.b$y.selectedServer.server_id));
  }, b$c.prototype.b$O = function () {
    this.noticeBg.visible = !0, req_server_notice(this.b$y.selectedServer.server_id, this.b$U.bind(this));
  }, b$c.prototype.b$P = function () {
    this.noticeBg.visible = !1;
  }, b$c.prototype.b$Q = function () {
    this.b$H = this.noticeContent.mouseY, Laya.stage.on(n.MOUSE_MOVE, this, this.b$V), Laya.stage.on(n.MOUSE_UP, this, this.b$W), Laya.stage.on(n.MOUSE_OUT, this, this.b$W);
  }, b$c.prototype.b$V = function () {
    var t = this.b$H - this.noticeContent.mouseY;this.noticeContent.scrollY += t, this.b$H = this.noticeContent.mouseY;
  }, b$c.prototype.b$W = function () {
    Laya.stage.off(n.MOUSE_MOVE, this, this.b$V), Laya.stage.off(n.MOUSE_UP, this, this.b$W), Laya.stage.off(n.MOUSE_OUT, this, this.b$W);
  }, b$c.prototype.b$T = function (t) {
    return -1 == t.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != t.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
  }, b$c.prototype.b$M = function () {
    this.b$y.hasGroupReq ? this.listBg.visible = !0 : (this.b$y.hasGroupReq = !0, req_server_group(0));
  }, b$c.prototype.preload = function () {}, b$c.prototype.getStatusSrc = function (t) {
    var e = "";return 2 === t ? e = "bbblogin/b18b.png" : 1 === t ? e = "bbblogin/b19b.png" : -1 !== t && 0 !== t || (e = "bbblogin/b20b.png"), e;
  }, b$c.prototype.b$S = function (t) {
    this.serverName.text = -1 === t.status ? t.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === t.status ? t.server_name + "(\u5f85\u5f00\u670d)" : t.server_name, this.serverName.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.b$K, this.hotImage.skin = this.getStatusSrc(t.status), this.b$y.cdn = t.cdn || "", this.b$y.selectedServer = t, this.noticeBtn.visible = !0;
  }, b$c.prototype.b$X = function (t) {
    this.showGroupList(t);
  }, b$c.prototype.b$Y = function (t) {
    this.b$S(t), this.listBg.visible = !1;
  }, b$c.prototype.b$U = function (t) {
    this.noticeContent.text = t.data.content || "", this.noticeTitle.text = t.data.title || "\u6682\u65e0\u516c\u544a";
  }, b$c.prototype.showGroupList = function (t) {
    if (void 0 === t && (t = 0), this.parent) {
      var e = this.b$y.groupList;if (e && 0 !== e.length) {
        for (var i = e.length, n = 0; n < i; n++) e[n].callBack = this.b$X.bind(this), e[n].select = n == t, e[n].index = n;var o = (this.b$I.array = e)[t].id;this.b$y.serverList[o] ? this.showServerList(o) : this.b$y.hasServerReq || (this.b$y.hasServerReq = !0, -1 == o ? req_server_owner(0) : -2 == o ? req_recommend_server_list(0) : req_server_list(0, o));
      }
    }
  }, b$c.prototype.showServerList = function (t) {
    if (this.parent && this.b$y.serverList[t]) {
      for (var e = this.b$y.serverList[t], i = e.length, n = 0; n < i; n++) e[n].callBack = this.b$Y.bind(this);this.b$J.array = e;
    }
  }, e.SelectServerPanel = b$c;
}(modules = modules || {});var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.b$f.AuthorizationPanel,
    LoadingPanel = modules.b$f.LoadingPanel,
    SelectServerPanel = modules.b$f.SelectServerPanel,
    ServerLoading = function () {
  function b$k(t) {
    this.m_loadingRes = ["bbbloding/a13a.png", "bbbloding/a15a.png", "bbbloding/a14a.png", "bbbloding/a16a.png", "bbbloding/a17a.png", "bbbloding/a18a.png", "bbbloding/a19a.png", "bbbloding/a20a.png", "bwxeff/c1c.png", "bwxeff/c2c.png", "bwxeff/c3c.png", "bwxeff/c4c.png", "bwxeff/c5c.png", "bbbloding/a3a.jpg", "bbbloding/a12a.jpg", "bbbloding/a1a.png", "bbbloding/a2a.png", "bbbloding/a4a.jpg", "bbbloding/a6a.jpg", "bbbloding/a8a.jpg", "bbbloding/a10a.jpg", "bbbloding/a5a.jpg", "bbbloding/a7a.jpg", "bbbloding/a9a.jpg", "bbbloding/a11a.jpg"], this.m_serverRes = ["bbblogin/b10b.png", "bbblogin/b11b.png", "bbblogin/b12b.png", "bbblogin/b13b.png", "bbblogin/b14b.png", "bbblogin/b15b.png", "bbblogin/b16b.png", "bbblogin/b17b.png", "bbblogin/b18b.png", "bbblogin/b19b.png", "bbblogin/b20b.png", "bbblogin/b21b.png", "bbblogin/b2b.jpg", "bbblogin/b3b.jpg", "bbblogin/b4b.jpg", "bbblogin/b5b.jpg", "bbblogin/b6b.jpg", "bbblogin/b1b.png", "bbblogin/b8b.png", "bbblogin/b9b.png"], this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.b$Z = !1, this.b$$ = "", b$k.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var e = Laya.AtlasResourceManager;e.maxTextureCount = 4, e.atlasTextureWidth = e.atlasTextureHeight = 1024, e._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.b$_.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = b$k.instance.requestWeb, Browser.window.imgMgrLoad = b$k.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.b$_();
  }return b$k.prototype.changeServerLoading = function (t) {
    b$k.instance.m_layer.visible = t;
  }, b$k.prototype.openAuthor = function () {
    b$k.instance.m_author || (b$k.instance.m_author = new AuthorizationPanel()), b$k.instance.m_author.parent || b$k.instance.m_layer.addChild(b$k.instance.m_author), b$k.instance.b$a();
  }, b$k.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, b$k.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, b$k.prototype.openServer = function () {
    for (var t = function () {
      b$k.instance.m_server || (b$k.instance.m_server = new SelectServerPanel()), b$k.instance.m_server.parent || b$k.instance.m_layer.addChild(b$k.instance.m_server), b$k.instance.b$a();
    }, e = !0, i = 0, n = this.m_serverRes; i < n.length; i++) {
      var o = n[i];if (null == Laya.Loader.getRes(o)) {
        e = !1;break;
      }
    }e ? t() : Laya.loader.load(this.m_serverRes, Handler.create(this, t));
  }, b$k.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, b$k.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, b$k.prototype.openLoading = function (t) {
    void 0 === t && (t = 0), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      b$k.instance.m_loading || (b$k.instance.m_loading = new LoadingPanel(t)), b$k.instance.m_loading.parent || b$k.instance.m_layer.addChild(b$k.instance.m_loading), b$k.instance.b$a();
    }));
  }, b$k.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var t = 0, e = this.m_serverRes; t < e.length; t++) {
      var i = e[t];Laya.Loader.clearCache(b$k.instance, i), Laya.Loader.clearRes(i, !0);
    }for (var n = 0, o = this.m_loadingRes; n < o.length; n++) i = o[n], Laya.Loader.clearCache(b$k.instance, i), Laya.Loader.clearRes(i, !0);this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, b$k.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && b$k.instance.m_loading.showGetBtn();
  }, b$k.prototype.enterDefaultServer = function () {
    var t = Browser.window.PF_INFO.selectedServer;this.b$Z || -1 == t.status || 0 == t.status || (this.b$Z = !0, Browser.window.PF_INFO.selectedServer = t, req_server_check_ban(0, t.server_id));
  }, b$k.prototype.sendRecord = function () {
    var t = "";t += "newRegister=" + Browser.window.PF_INFO.newRegister, t += ", isPrelodServer=" + this.m_isPrelodServer, t += ", SelectServerPanel=" + (null != b$k.instance.m_server), t += ", isPrelodLoading=" + this.m_isPrelodLoading, t += ", LoadingPanel=" + (null != b$k.instance.m_loading), t += ", resMgrLoad=" + (Browser.window.resMgrLoad == b$k.instance.requestWeb), t += ", imgMgrLoad=" + (Browser.window.imgMgrLoad == b$k.instance.requestWeb), t += ", errUrls=" + b$k.instance.b$$;for (var e = 0, i = this.m_serverRes; e < i.length; e++) t += ", " + (s = i[e]) + "=" + (null != Laya.Loader.getRes(s));for (var n = 0, o = this.m_loadingRes; n < o.length; n++) {
      var s;t += ", " + (s = o[n]) + "=" + (null != Laya.Loader.getRes(s));
    }var r = Browser.window.PF_INFO.selectedServer;r && (t += ", server_status=" + r.status, t += ", server_id=" + r.server_id, t += ", server_name=" + r.server_name);r = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: t });console.error(r), this.b$b && this.b$b == t || (this.b$b = t, reqRecordError(r));
  }, b$k.prototype.b$cc = function () {
    var t = Laya.stage,
        e = Math.floor(t.width),
        i = Math.floor(t.height);i / e < 1.7777778 ? (this.viewW = Math.floor(e / (i / 1280)), this.viewH = 1280, this.viewS = i / 1280) : (this.viewW = 720, this.viewH = Math.floor(i / (e / 720)), this.viewS = e / 720);e = Math.floor(t.width), t = Math.floor(t.height);t / e < 1.7777778 ? (this.viewW = Math.floor(e / (t / 1280)), this.viewH = 1280, this.viewS = t / 1280) : (this.viewW = 720, this.viewH = Math.floor(t / (e / 720)), this.viewS = e / 720), this.b$a();
  }, b$k.prototype.b$a = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, b$k.prototype.b$_ = function () {
    if (Input.isInputting && Browser.onMobile) {
      var t = parseInt(Input.inputContainer.style.top.replace("px", "")),
          e = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS,
          i = Browser.clientWidth / Render.canvas.width;return 0 < (t = Browser.clientHeight - e * i - t) && (t = 0), void (Browser.container.style.top = t + "px");
    }Browser.container.style.top = "0px", e = (e = Math.floor(Browser.width)) + 1 & 2147483646, i = (i = Math.floor(Browser.height)) + 1 & 2147483646;t = Laya.stage;3 == ENV || i < e ? (t.scaleMode = Laya.Stage.SCALE_NOSCALE, t.width = e, t.height = i) : (t.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, t.width = 840, t.height = Math.floor(i / (e / 840)) + 1 & 2147483646), this.b$cc();
  }, b$k.prototype.requestWeb = function (t, e) {
    function b$e() {
      i.onload = null, i.onerror = null;
    }var i,
        n = t;(i = new Browser.window.Image()).onload = function () {
      b$e(), e(n, 200, i);
    }, i.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", n), b$k.instance.b$$ += n + "|", b$e(), e(n, 404, null);
    }, i.src = n, -1 == b$k.instance.m_serverRes.indexOf(n) && -1 == b$k.instance.m_loadingRes.indexOf(n) || Laya.Loader.keepCache(b$k.instance, n);
  }, b$k.prototype.b$dc = function (t, e) {
    return -1 != t.indexOf(e, t.length - e.length);
  }, b$k;
}();!function (t) {
  function b$c() {
    var t = e.call(this) || this;return t.width = 192, t.height = 70, t.b$ec = new Laya.Image(), t.addChild(t.b$ec), t.b$fc = new Laya.Label(), t.b$fc.fontSize = 30, t.b$fc.color = t.b$K, t.addChild(t.b$fc), t.b$fc.centerX = 0, t.b$fc.centerY = 0, t;
  }var e;t = t.b$f || (t.b$f = {}), e = Laya.View, __extends(b$c, e), b$c.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.b$y = Browser.window.PF_INFO;var t = this.b$y.loadingType;this.b$K = 1 != t && 2 != t && 3 == t ? "#763042" : "#263d7d", this.addEvt();
  }, Object.defineProperty(b$c.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), b$c.prototype.setData = function (t) {
    this.b$gc = t, this.b$fc.text = t.name, this.b$ec.skin = t.select ? "bbblogin/b14b.png" : "bbblogin/b15b.png";
  }, b$c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, b$c.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, b$c.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, b$c.prototype.clkHdler = function () {
    this.b$gc && this.b$gc.callBack && this.b$gc.callBack(this.b$gc.index);
  }, t.SelectLeftListItem = b$c;
}(modules = modules || {}), function (t) {
  function b$c() {
    var t = e.call(this) || this;return t.b$ec = new Laya.Image("bbblogin/b16b.png"), t.b$fc = new Laya.Label(), t.b$fc.fontSize = 30, t.b$fc.color = t.b$K, t.addChild(t.b$ec), t.b$hc = new Laya.Image(), t.addChild(t.b$hc), t.width = 358, t.height = 70, t.addChild(t.b$fc), t.b$hc.centerY = 0, t.b$hc.x = 18, t.b$fc.x = 80, t.b$fc.centerY = 0, t.b$ec.graphics.drawRect(0, 0, t.width, t.height, "#00sasd"), t;
  }var e;t = t.b$f || (t.b$f = {}), e = Laya.View, __extends(b$c, e), b$c.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.b$y = Browser.window.PF_INFO;var t = this.b$y.loadingType;this.b$K = 1 != t && 2 != t && 3 == t ? "#763042" : "#34267d", this.addEvt();
  }, Object.defineProperty(b$c.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), b$c.prototype.setData = function (t) {
    this.b$gc = t, this.b$fc.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.b$K, this.b$fc.text = -1 === t.status ? t.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === t.status ? t.server_name + "(\u5f85\u5f00\u670d)" : t.server_name, this.b$hc.skin = this.getStatusSrc(t.status);
  }, b$c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, b$c.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, b$c.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, b$c.prototype.clkHdler = function () {
    this.b$gc && this.b$gc.callBack && this.b$gc.callBack(this.b$gc);
  }, b$c.prototype.getStatusSrc = function (t) {
    var e = "";return 2 === t ? e = "bbblogin/b18b.png" : 1 === t ? e = "bbblogin/b19b.png" : -1 !== t && 0 !== t || (e = "bbblogin/b20b.png"), e;
  }, t.SelectRightListItem = b$c;
}(modules = modules || {}), window.ServerLoading = ServerLoading;