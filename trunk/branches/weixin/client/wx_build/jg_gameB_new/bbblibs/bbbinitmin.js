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
  }, b$d.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/20.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "bbblogin/60.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "bbblogin/30.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "bbblogin/40.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "bbblogin/50.jpg", left: 720, height: 1280, centerY: 0 } }] }] }, b$d);function b$d() {
    return i.call(this) || this;
  }var i;t.b$c = e;
}(ui = ui || {}), function (t) {
  var e = (__extends(b$d, i = View), b$d.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.b$d.uiView);
  }, b$d.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/10.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "bbbloding/image_loding_bar0.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "bbbloding/image_loding_bar1.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "bbbloding/image_loding_bar2.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "bbbloding/image_loding_bar3.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "bbbloding/image_login_point3.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "bbbloding/image_login_point2.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "bbbloding/image_login_point1.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "bbbloding/image_login_point1.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "bbbloding/10.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", right: 20, height: 32, fontSize: 24, color: "#163274", bold: !1, align: "right" } }] }, b$d);function b$d() {
    return i.call(this) || this;
  }var i;t.b$d = e;
}(ui = ui || {}), function (t) {
  var e = (__extends(b$d, i = View), b$d.prototype.createChildren = function () {
    View.regComponent("Text", laya.display.Text), i.prototype.createChildren.call(this), this.createView(t.b$e.uiView);
  }, b$d.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/20.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "bbblogin/60.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "bbblogin/30.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { width: 220, var: "leftImg", skin: "bbblogin/40.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "bbblogin/50.jpg", left: 720, height: 1280, centerY: 0 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "bbblogin/image_login_xuanqubg.png", centerX: 0 } }, { type: "Image", props: { y: 930, x: 162, var: "hotImage", skin: "bbblogin/image_login_changtong.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/10.png", centerX: 0, bottom: 10 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "bbblogin/btn_login_loginanniu.png", name: "enterBtn", centerX: 0 } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", right: 20, height: 32, fontSize: 24, color: "#163274", bold: !1, align: "right" } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "bbblogin/btn_login_gonggao.png" } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "bbblogin/80.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "bbblogin/btn_com_chuangback.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "bbblogin/90.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "bbblogin/image_com_tuichu.png" } }] }] }, b$d);function b$d() {
    return i.call(this) || this;
  }var i;t.b$e = e;
}(ui = ui || {}), function (t) {
  function b$c() {
    return e.call(this) || this;
  }var e;t = t.b$f || (t.b$f = {}), e = ui.b$c, __extends(b$c, e), b$c.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, wxHideLoading(), this.addEvt(), this.onOpened();
  }, b$c.prototype.addEvt = function () {}, b$c.prototype.rmEvts = function () {}, b$c.prototype.onOpened = function () {
    ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
  }, b$c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, t.AuthorizationPanel = b$c;
}(modules = modules || {}), function (t) {
  var e, i, o, s;function b$k() {
    var t = n.call(this) || this;return t.b$h = new o(), t.addChild(t.b$h), t.b$i = null, t.b$j = [], t.b$k = !1, t.b$l = 0, t.b$m = !0, t.b$n = 6, t.b$o = !1, t.on(i.DISPLAY, t, t.b$p), t.on(i.UNDISPLAY, t, t.b$q), t;
  }var n;e = t.b$g || (t.b$g = {}), i = Laya.Event, o = Laya.Image, t = Laya.Component, s = Laya.Loader, __extends(b$k, n = t), b$k.create = function (t, e, i, o, n, s, r) {
    void 0 === o && (o = 0), void 0 === n && (n = 6), void 0 === s && (s = !0), void 0 === r && (r = !1);var a = new b$k();return a.skin(e, i, o), a.durFrm = n, a.loop = s, a.atHide = r, t && t.addChild(a), a;
  }, b$k.play = function (t) {
    t && (t.visible = !0, t.play());
  }, b$k.stop = function (t) {
    t && (t.visible = !1, t.stop());
  }, b$k.prototype.destroy = function (t) {
    Laya.timer.clear(this, this.b$r), this.off(i.DISPLAY, this, this.b$p), this.off(i.UNDISPLAY, this, this.b$q), n.prototype.destroy.call(this, t);
  }, b$k.prototype.b$p = function () {}, b$k.prototype.b$q = function () {}, b$k.prototype.skin = function (t, e, i) {
    if (this.b$i != t) {
      this.b$i = t, this.b$j = [];for (var o = 0, n = i; n <= e; n++) this.b$j[o++] = t + "/" + n + ".png";i = s.getRes(this.b$j[0]);i && (this.width = i.sourceWidth, this.height = i.sourceHeight), this.b$r();
    }
  }, Object.defineProperty(b$k.prototype, "atHide", { get: function () {
      return this.b$o;
    }, set: function (t) {
      this.b$o = t;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(b$k.prototype, "durFrm", { set: function (t) {
      this.b$n != t && (this.b$n = t, this.b$k && (Laya.timer.clear(this, this.b$r), Laya.timer.loop(this.b$n * (1e3 / 60), this, this.b$r)));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(b$k.prototype, "loop", { set: function (t) {
      this.b$m = t;
    }, enumerable: !0, configurable: !0 }), b$k.prototype.play = function () {
    this.b$k && this.stop(), this.b$k = !0, this.b$l = 0, Laya.timer.loop(this.b$n * (1e3 / 60), this, this.b$r), this.b$r();
  }, b$k.prototype.stop = function () {
    this.b$k = !1, this.b$l = 0, this.b$r(), Laya.timer.clear(this, this.b$r);
  }, b$k.prototype.pause = function () {
    this.b$k && (this.b$k = !1, Laya.timer.clear(this, this.b$r));
  }, b$k.prototype.resume = function () {
    this.b$k || (this.b$k = !0, Laya.timer.loop(this.b$n * (1e3 / 60), this, this.b$r), this.b$r());
  }, Object.defineProperty(b$k.prototype, "isPlay", { get: function () {
      return this.b$k;
    }, enumerable: !0, configurable: !0 }), b$k.prototype.b$r = function () {
    this.b$j && 0 != this.b$j.length && (this.b$h.skin = this.b$j[this.b$l], this.b$k && (this.b$l++, this.b$l == this.b$j.length && (this.b$m ? this.b$l = 0 : (Laya.timer.clear(this, this.b$r), this.b$k = !1, this.b$o && (this.visible = !1), this.event(i.COMPLETE)))));
  }, e.PanelEff = b$k;
}(modules = modules || {}), function (t) {
  var e, i;function b$c(t) {
    void 0 === t && (t = 0);var e = o.call(this) || this;return e.b$s = { bgImgSkin: "bbbloding/30.jpg", topImgSkin: "bbbloding/100.jpg", btmImgSkin: "bbbloding/40.jpg", leftImgSkin: "bbbloding/60.jpg", rightImgSkin: "bbbloding/80.jpg", loadingBarBgSkin: "bbbloding/image_loding_bar0.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.b$t = { bgImgSkin: "bbbloding/120.jpg", topImgSkin: "bbbloding/110.jpg", btmImgSkin: "bbbloding/50.jpg", leftImgSkin: "bbbloding/70.jpg", rightImgSkin: "bbbloding/90.jpg", loadingBarBgSkin: "bbbloding/image_loding_bar02.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.b$u = 0, e.b$v(1 == t ? e.b$t : e.b$s), e;
  }var o;e = t.b$f || (t.b$f = {}), i = t.b$g.PanelEff, o = ui.b$d, __extends(b$c, o), b$c.prototype.initialize = function () {
    var t;o.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.b$w = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.b$w && (t = this.b$w.loadingType, this.loadingTips.color = 1 != t && 2 == t ? "#7c51ae" : "#f2ffb5"), this.b$x = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
  }, b$c.prototype.toAllProgress = function (t) {
    var e = this;if (-1 === t) return e.b$u = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);var i;-2 !== t ? (e.b$u < .9 ? e.b$u += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : e.b$u < 1 && (e.b$u += 1e-4), .9999 < e.b$u && (e.b$u = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
      .9 < e.b$u && toAllProgress(-1);
    })), t = 590 * (i = e.b$u), e.b$u = e.b$u > i ? e.b$u : i, e.loadingBar.width = t, t = e.loadingBar.x + t, e.loadingImg2.x = t - 15, 364 <= t ? (e.loadingImg1.visible = !0, e.loadingImg1.x = t - 202) : e.loadingImg1.visible = !1, e.percentageTips.text = (100 * i >> 0) + "%", e.b$u < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress)) : Laya.timer.clear(this, this.toAllProgress);
  }, b$c.prototype.toProgress = function (t, e, i) {
    var o = 590 * (t = 1 < t ? 1 : t);this.b$u = this.b$u > t ? this.b$u : t, this.loadingBar.width = o;o = this.loadingBar.x + o;this.loadingImg2.x = o - 15, 364 <= o ? (this.loadingImg1.visible = !0, this.loadingImg1.x = o - 202) : this.loadingImg1.visible = !1, this.percentageTips.text = (100 * t >> 0) + "%", this.loadingTips.text = e;for (var n = i - 1, s = 0; s < this.b$x.length; s++) this.b$x[s].skin = s < n ? "bbbloding/image_login_point3.png" : n === s ? "bbbloding/image_login_point2.png" : "bbbloding/image_login_point1.png";
  }, b$c.prototype.onOpened = function () {
    this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.b$w.lastVersion + "      \u7248\u672c\uff1a" + this.b$w.wxVersion, this.showGetBtn();
  }, b$c.prototype.close = function (t) {
    this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.b$y), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.b$z);
  }, b$c.prototype.resetWinFun = function () {
    Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
  }, b$c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.resetWinFun(), o.prototype.destroy.call(this, t);
  }, b$c.prototype.showGetBtn = function () {
    this.b$w.showGetBtn && 1 == this.b$w.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "bbbloding/10.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.b$z), this.b$A(), this.b$B(!0));
  }, b$c.prototype.b$z = function () {
    this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "bbbloding/20.png", this.b$C(), this.b$B(!1));
  }, b$c.prototype.b$v = function (t) {
    this.bgImg.skin = t.bgImgSkin, this.topImg.skin = t.topImgSkin, this.btmImg.skin = t.btmImgSkin, this.leftImg.skin = t.leftImgSkin, this.rightImg.skin = t.rightImgSkin, this.copyRightImg.bottom = t.copyRightImgBottom, this.processBox1.y = t.processBox1Y, this.processBox2.y = t.processBox2Y, this.loadingBarBg.skin = t.loadingBarBgSkin, this.loadingTips.fontSize = t.loadingTipsSize, this.getTipsBtn.visible = this.b$w.showGetBtn && 1 == this.b$w.showGetBtn, this.getTipsBtn.visible ? this.b$A() : this.b$C(), this.b$B(this.getTipsBtn.visible);
  }, b$c.prototype.b$A = function () {
    this.b$D || (this.b$D = i.create(this.getTipsBtn, "adga321", 4, 0, 12), this.b$D.pos(161, 106), this.b$D.scale(1.14, 1.15)), i.play(this.b$D);
  }, b$c.prototype.b$C = function () {
    this.b$D && i.stop(this.b$D);
  }, b$c.prototype.b$B = function (t) {
    Laya.timer.clear(this, this.b$y), t ? (this.b$E = 9, this.txtGetTm.visible = !0, this.b$y(), Laya.timer.loop(1e3, this, this.b$y)) : this.txtGetTm.visible = !1;
  }, b$c.prototype.b$y = function () {
    0 < this.b$E ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.b$E + "s)", this.b$E--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.b$y), this.b$z());
  }, e.LoadingPanel = b$c;
}(modules = modules || {}), function (t) {
  var e, i, o;function b$c() {
    var t = n.call(this) || this;return t.b$F = 0, t;
  }var n;e = t.b$f || (t.b$f = {}), i = Laya.List, o = Laya.Event, n = ui.b$e, __extends(b$c, n), b$c.prototype.initialize = function () {
    n.prototype.initialize.call(this), ServerLoading.instance.preloadServer(), this.centerX = 0, this.centerY = 0, this.b$w = Browser.window.PF_INFO, this.b$G = new i(), this.b$G.vScrollBarSkin = "", this.b$G.itemRender = e.SelectLeftListItem, this.b$G.top = 5, this.b$G.repeatX = 1, this.b$G.spaceY = 5, this.b$G.width = this.leftListBox.width, this.b$G.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.b$G), this.b$H = new i(), this.b$H.vScrollBarSkin = "", this.b$H.itemRender = e.SelectRightListItem, this.b$H.top = 5, this.b$H.repeatX = 1, this.b$H.spaceY = 5, this.b$H.width = this.rightListBox.width, this.b$H.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.b$H);var t = this.b$w.loadingType;this.b$I = 1 != t && (2 == t || 3 == t) ? "#feffc0" : "#93353b", this.noticeBtn.visible = !1, Browser.window.initPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), this.addEvt(), this.onOpened();
  }, b$c.prototype.addEvt = function () {
    this.enterBtn.on(Laya.Event.CLICK, this, this.b$J), this.selectServer.on(Laya.Event.CLICK, this, this.b$K), this.selectServer.on(Laya.Event.CLICK, this, this.b$K), this.closeBg.on(Laya.Event.CLICK, this, this.b$L), this.noticeBtn.on(Laya.Event.CLICK, this, this.b$M), this.noticeClose.on(Laya.Event.CLICK, this, this.b$N), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.b$O);
  }, b$c.prototype.rmEvts = function () {
    this.enterBtn.off(Laya.Event.CLICK, this, this.b$J), this.selectServer.off(Laya.Event.CLICK, this, this.b$K), this.selectServer.off(Laya.Event.CLICK, this, this.b$K), this.closeBg.off(Laya.Event.CLICK, this, this.b$L), this.noticeBtn.off(Laya.Event.CLICK, this, this.b$M), this.noticeClose.off(Laya.Event.CLICK, this, this.b$N), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.b$O);
  }, b$c.prototype.onOpened = function () {
    this.b$P = this.b$w.selectedServer.server_id, this.b$Q(this.b$w.selectedServer), this.b$G.dataSource = this.b$w.groupList, this.b$K(), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.b$w.lastVersion + "      \u7248\u672c\uff1a" + this.b$w.wxVersion, this.serverName.color = this.selServer.color = this.b$I;
  }, b$c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), this.b$G && (this.b$G.removeSelf(), this.b$G.destroy(), this.b$G = null), this.b$H && (this.b$H.removeSelf(), this.b$H.destroy(), this.b$H = null), n.prototype.destroy.call(this, t);
  }, b$c.prototype.b$L = function () {
    this.listBg.visible = !1;
  }, b$c.prototype.b$J = function () {
    this.b$R(this.b$w.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.b$w.selectedServer, req_server_check_ban(0, this.b$w.selectedServer.server_id));
  }, b$c.prototype.b$M = function () {
    this.noticeBg.visible = !0, req_server_notice(this.b$w.selectedServer.server_id, this.b$S.bind(this));
  }, b$c.prototype.b$N = function () {
    this.noticeBg.visible = !1;
  }, b$c.prototype.b$O = function () {
    this.b$F = this.noticeContent.mouseY, Laya.stage.on(o.MOUSE_MOVE, this, this.b$T), Laya.stage.on(o.MOUSE_UP, this, this.b$U), Laya.stage.on(o.MOUSE_OUT, this, this.b$U);
  }, b$c.prototype.b$T = function () {
    var t = this.b$F - this.noticeContent.mouseY;this.noticeContent.scrollY += t, this.b$F = this.noticeContent.mouseY;
  }, b$c.prototype.b$U = function () {
    Laya.stage.off(o.MOUSE_MOVE, this, this.b$T), Laya.stage.off(o.MOUSE_UP, this, this.b$U), Laya.stage.off(o.MOUSE_OUT, this, this.b$U);
  }, b$c.prototype.b$R = function (t) {
    return -1 == t.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != t.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
  }, b$c.prototype.b$K = function () {
    this.b$w.hasGroupReq ? this.listBg.visible = !0 : (this.b$w.hasGroupReq = !0, req_server_group(0));
  }, b$c.prototype.preload = function () {}, b$c.prototype.getStatusSrc = function (t) {
    var e = "";return 2 === t ? e = "bbblogin/image_login_changtong.png" : 1 === t ? e = "bbblogin/image_login_fanmang.png" : -1 !== t && 0 !== t || (e = "bbblogin/image_login_weihu.png"), e;
  }, b$c.prototype.b$Q = function (t) {
    this.serverName.text = -1 === t.status ? t.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === t.status ? t.server_name + "(\u5f85\u5f00\u670d)" : t.server_name, this.serverName.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.b$I, this.hotImage.skin = this.getStatusSrc(t.status), this.b$w.cdn = t.cdn || "", this.b$w.selectedServer = t, this.noticeBtn.visible = !0;
  }, b$c.prototype.b$V = function (t) {
    this.showGroupList(t);
  }, b$c.prototype.b$W = function (t) {
    this.b$Q(t), this.listBg.visible = !1;
  }, b$c.prototype.b$S = function (t) {
    this.noticeContent.text = t.data.content || "", this.noticeTitle.text = t.data.title || "\u6682\u65e0\u516c\u544a";
  }, b$c.prototype.showGroupList = function (t) {
    if (void 0 === t && (t = 0), this.parent) {
      var e = this.b$w.groupList;if (e && 0 !== e.length) {
        for (var i = e.length, o = 0; o < i; o++) e[o].callBack = this.b$V.bind(this), e[o].select = o == t, e[o].index = o;var n = (this.b$G.array = e)[t].id;this.b$w.serverList[n] ? this.showServerList(n) : this.b$w.hasServerReq || (this.b$w.hasServerReq = !0, -1 == n ? req_server_owner(0) : -2 == n ? req_recommend_server_list(0) : req_server_list(0, n));
      }
    }
  }, b$c.prototype.showServerList = function (t) {
    if (this.parent && this.b$w.serverList[t]) {
      for (var e = this.b$w.serverList[t], i = e.length, o = 0; o < i; o++) e[o].callBack = this.b$W.bind(this);this.b$H.array = e;
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
  function b$f(t) {
    this.m_loadingRes1 = ["gafda/bbbloding.atlas", "bbbloding/30.jpg", "bbbloding/40.jpg", "bbbloding/60.jpg", "bbbloding/80.jpg", "bbbloding/100.jpg"], this.m_loadingRes2 = ["gafda/bbbloding.atlas", "gafda/adga321.atlas", "bbbloding/120.jpg", "bbbloding/50.jpg", "bbbloding/70.jpg", "bbbloding/90.jpg", "bbbloding/110.jpg", "bbbloding/10.png", "bbbloding/20.png"], this.m_serverRes = ["gafda/bbblogin.atlas", "bbblogin/20.jpg"], this.m_serverRes1 = ["bbblogin/30.jpg", "bbblogin/40.jpg", "bbblogin/50.jpg", "bbblogin/60.jpg", "bbblogin/10.png", "bbblogin/80.png", "bbblogin/90.png"], this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, b$f.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var e = Laya.AtlasResourceManager;e.maxTextureCount = 4, e.atlasTextureWidth = e.atlasTextureHeight = 1024, e._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.b$X.bind(this)), t.showLoadingBtn || (this.m_loadingRes2 = []);e = Laya.Loader.preLoadedMap;e["gafda/bbblogin.atlas"] = t.bbblogin, e["gafda/bbbloding.atlas"] = t.bbbloding, e["gafda/adga321.atlas"] = t.adga321, e["gafda/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = b$f.instance.requestWeb, Browser.window.imgMgrLoad = b$f.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.b$X();
  }return b$f.prototype.changeServerLoading = function (t) {
    b$f.instance.m_layer.visible = t;
  }, b$f.prototype.openAuthor = function () {
    b$f.instance.m_author || (b$f.instance.m_author = new AuthorizationPanel()), b$f.instance.m_author.parent || b$f.instance.m_layer.addChild(b$f.instance.m_author), b$f.instance.b$Y();
  }, b$f.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, b$f.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes), Laya.loader.load(this.m_serverRes1));
  }, b$f.prototype.openServer = function () {
    Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      b$f.instance.m_server || (b$f.instance.m_server = new SelectServerPanel()), b$f.instance.m_server.parent || b$f.instance.m_layer.addChild(b$f.instance.m_server), b$f.instance.b$Y();
    }));
  }, b$f.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, b$f.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes1), this.m_loadingRes2 && this.m_loadingRes2.length && Laya.loader.load(this.m_loadingRes2));
  }, b$f.prototype.openLoading = function (t) {
    var e = 1 == (t = void 0 === t ? 0 : t) && this.m_loadingRes2.length ? this.m_loadingRes2 : this.m_loadingRes1;Laya.loader.load(e, Handler.create(this, function () {
      b$f.instance.m_loading || (b$f.instance.m_loading = new LoadingPanel(t)), b$f.instance.m_loading.parent || b$f.instance.m_layer.addChild(b$f.instance.m_loading), b$f.instance.b$Y();
    }));
  }, b$f.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var t = 0, e = this.m_serverRes; t < e.length; t++) {
      var i = e[t];Laya.Loader.clearRes(i, !0);
    }for (var o = 0, n = this.m_serverRes1; o < n.length; o++) i = n[o], Laya.Loader.clearRes(i, !0);for (var s = 0, r = this.m_loadingRes1; s < r.length; s++) i = r[s], Laya.Loader.clearRes(i, !0);for (var a = 0, b = this.m_loadingRes2; a < b.length; a++) i = b[a], Laya.Loader.clearRes(i, !0);this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, b$f.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && b$f.instance.m_loading.showGetBtn();
  }, b$f.prototype.b$Z = function () {
    var t = Laya.stage,
        e = Math.floor(t.width),
        i = Math.floor(t.height);i / e < 1.7777778 ? (this.viewW = Math.floor(e / (i / 1280)), this.viewH = 1280, this.viewS = i / 1280) : (this.viewW = 720, this.viewH = Math.floor(i / (e / 720)), this.viewS = e / 720);e = Math.floor(t.width), t = Math.floor(t.height);t / e < 1.7777778 ? (this.viewW = Math.floor(e / (t / 1280)), this.viewH = 1280, this.viewS = t / 1280) : (this.viewW = 720, this.viewH = Math.floor(t / (e / 720)), this.viewS = e / 720), this.b$Y();
  }, b$f.prototype.b$Y = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, b$f.prototype.b$X = function () {
    if (Input.isInputting && Browser.onMobile) {
      var t = parseInt(Input.inputContainer.style.top.replace("px", "")),
          e = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS,
          i = Browser.clientWidth / Render.canvas.width;return 0 < (t = Browser.clientHeight - e * i - t) && (t = 0), void (Browser.container.style.top = t + "px");
    }Browser.container.style.top = "0px", e = (e = Math.floor(Browser.width)) + 1 & 2147483646, i = (i = Math.floor(Browser.height)) + 1 & 2147483646;t = Laya.stage;i < e ? (t.scaleMode = Laya.Stage.SCALE_NOSCALE, t.width = e, t.height = i) : (t.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, t.width = 840, t.height = Math.floor(i / (e / 840)) + 1 & 2147483646), this.b$Z();
  }, b$f.prototype.requestWeb = function (t, e) {
    function b$e() {
      i.onload = null, i.onerror = null;
    }var i,
        o = t;t && 0 < t.indexOf(":") || PF_INFO.cdn, (i = new Browser.window.Image()).onload = function () {
      b$e(), e(o, 200, i);
    }, i.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", o), b$e(), e(o, 404, null);
    }, i.src = o;
  }, b$f.prototype.b$$ = function (t, e, i, o) {
    var n = t.toLowerCase();o(t, e, i = i && (this.b$_(n, ".png") || this.b$_(n, ".jpg")) ? DecodeTools.decodeImage(new Uint8Array(i)) : i);
  }, b$f.prototype.b$_ = function (t, e) {
    return -1 != t.indexOf(e, t.length - e.length);
  }, b$f;
}();!function (t) {
  function b$c() {
    var t = e.call(this) || this;return t.width = 192, t.height = 70, t.b$a = new Laya.Image(), t.addChild(t.b$a), t.b$b = new Laya.Label(), t.b$b.fontSize = 30, t.b$b.color = t.b$I, t.addChild(t.b$b), t.b$b.centerX = 0, t.b$b.centerY = 0, t;
  }var e;t = t.b$f || (t.b$f = {}), e = Laya.View, __extends(b$c, e), b$c.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.b$w = Browser.window.PF_INFO;var t = this.b$w.loadingType;this.b$I = 1 != t && 2 != t && 3 == t ? "#763042" : "#263d7d", this.addEvt();
  }, Object.defineProperty(b$c.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), b$c.prototype.setData = function (t) {
    this.b$cc = t, this.b$b.text = t.name, this.b$a.skin = t.select ? "bbblogin/btn_xuanqu_anniuhuang.png" : "bbblogin/btn_xuanqu_anniulan.png";
  }, b$c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, b$c.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, b$c.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, b$c.prototype.clkHdler = function () {
    this.b$cc && this.b$cc.callBack && this.b$cc.callBack(this.b$cc.index);
  }, t.SelectLeftListItem = b$c;
}(modules = modules || {}), function (t) {
  function b$c() {
    var t = e.call(this) || this;return t.b$a = new Laya.Image("bbblogin/btn_xuanqu_quanniu.png"), t.b$b = new Laya.Label(), t.b$b.fontSize = 30, t.b$b.color = t.b$I, t.addChild(t.b$a), t.b$dc = new Laya.Image(), t.addChild(t.b$dc), t.width = 358, t.height = 70, t.addChild(t.b$b), t.b$dc.centerY = 0, t.b$dc.x = 18, t.b$b.x = 80, t.b$b.centerY = 0, t.b$a.graphics.drawRect(0, 0, t.width, t.height, "#00sasd"), t;
  }var e;t = t.b$f || (t.b$f = {}), e = Laya.View, __extends(b$c, e), b$c.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.b$w = Browser.window.PF_INFO;var t = this.b$w.loadingType;this.b$I = 1 != t && 2 != t && 3 == t ? "#763042" : "#34267d", this.addEvt();
  }, Object.defineProperty(b$c.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), b$c.prototype.setData = function (t) {
    this.b$cc = t, this.b$b.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.b$I, this.b$b.text = -1 === t.status ? t.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === t.status ? t.server_name + "(\u5f85\u5f00\u670d)" : t.server_name, this.b$dc.skin = this.getStatusSrc(t.status);
  }, b$c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, b$c.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, b$c.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, b$c.prototype.clkHdler = function () {
    this.b$cc && this.b$cc.callBack && this.b$cc.callBack(this.b$cc);
  }, b$c.prototype.getStatusSrc = function (t) {
    var e = "";return 2 === t ? e = "bbblogin/image_login_changtong.png" : 1 === t ? e = "bbblogin/image_login_fanmang.png" : -1 !== t && 0 !== t || (e = "bbblogin/image_login_weihu.png"), e;
  }, t.SelectRightListItem = b$c;
}(modules = modules || {}), window.ServerLoading = ServerLoading;