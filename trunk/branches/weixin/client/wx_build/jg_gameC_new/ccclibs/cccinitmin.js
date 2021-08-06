"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
  };return function (t, e) {
    function d$c() {
      this.constructor = t;
    }i(t, e), t.prototype = null === e ? Object.create(e) : (d$c.prototype = e.prototype, new d$c());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (t) {
  var e = (__extends(d$b, i = View), d$b.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.d$a.uiView);
  }, d$b.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "ccclogin/b2.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "ccclogin/b6.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "ccclogin/b3.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "ccclogin/b4.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "ccclogin/b5.jpg", left: 720, height: 1280, centerY: 0 } }] }] }, d$b);function d$b() {
    return i.call(this) || this;
  }var i;t.d$a = e;
}(ui = ui || {}), function (t) {
  var e = (__extends(d$b, i = View), d$b.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.d$b.uiView);
  }, d$b.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "ccclogin/b1.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "c2/image_loding_bar0.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "c2/image_loding_bar1.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "c2/image_loding_bar2.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "c2/image_loding_bar3.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "c2/image_login_point3.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "c2/image_login_point2.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "c2/image_login_point1.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "c2/image_login_point1.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "c2/a1.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", right: 20, height: 32, fontSize: 24, color: "#163274", bold: !1, align: "right" } }] }, d$b);function d$b() {
    return i.call(this) || this;
  }var i;t.d$b = e;
}(ui = ui || {}), function (t) {
  var e = (__extends(d$b, i = View), d$b.prototype.createChildren = function () {
    View.regComponent("Text", laya.display.Text), i.prototype.createChildren.call(this), this.createView(t.d$c.uiView);
  }, d$b.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "ccclogin/b2.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "ccclogin/b6.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "ccclogin/b3.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { width: 220, var: "leftImg", skin: "ccclogin/b4.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "ccclogin/b5.jpg", left: 720, height: 1280, centerY: 0 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "ccclogin/image_login_xuanqubg.png", centerX: 0 } }, { type: "Image", props: { y: 930, x: 162, var: "hotImage", skin: "ccclogin/image_login_changtong.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "ccclogin/b1.png", centerX: 0, bottom: 10 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "ccclogin/btn_login_loginanniu.png", name: "enterBtn", centerX: 0 } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", right: 20, height: 32, fontSize: 24, color: "#163274", bold: !1, align: "right" } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "ccclogin/btn_login_gonggao.png" } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "ccclogin/b8.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "ccclogin/btn_com_chuangback.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "ccclogin/b9.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "ccclogin/image_com_tuichu.png" } }] }] }, d$b);function d$b() {
    return i.call(this) || this;
  }var i;t.d$c = e;
}(ui = ui || {}), function (t) {
  function d$a() {
    return e.call(this) || this;
  }var e;t = t.d$d || (t.d$d = {}), e = ui.d$a, __extends(d$a, e), d$a.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, wxHideLoading(), this.addEvt(), this.onOpened();
  }, d$a.prototype.addEvt = function () {}, d$a.prototype.rmEvts = function () {}, d$a.prototype.onOpened = function () {
    ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
  }, d$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, t.AuthorizationPanel = d$a;
}(modules = modules || {}), function (t) {
  var e, i, o, a;function d$k() {
    var t = n.call(this) || this;return t.d$h = new o(), t.addChild(t.d$h), t.d$i = null, t.d$j = [], t.d$k = !1, t.d$l = 0, t.d$m = !0, t.d$n = 6, t.d$o = !1, t.on(i.DISPLAY, t, t.d$p), t.on(i.UNDISPLAY, t, t.d$q), t;
  }var n;e = t.d$g || (t.d$g = {}), i = Laya.Event, o = Laya.Image, t = Laya.Component, a = Laya.Loader, __extends(d$k, n = t), d$k.create = function (t, e, i, o, n, a, s) {
    void 0 === o && (o = 0), void 0 === n && (n = 6), void 0 === a && (a = !0), void 0 === s && (s = !1);var r = new d$k();return r.skin(e, i, o), r.durFrm = n, r.loop = a, r.atHide = s, t && t.addChild(r), r;
  }, d$k.play = function (t) {
    t && (t.visible = !0, t.play());
  }, d$k.stop = function (t) {
    t && (t.visible = !1, t.stop());
  }, d$k.prototype.destroy = function (t) {
    Laya.timer.clear(this, this.d$r), this.off(i.DISPLAY, this, this.d$p), this.off(i.UNDISPLAY, this, this.d$q), n.prototype.destroy.call(this, t);
  }, d$k.prototype.d$p = function () {}, d$k.prototype.d$q = function () {}, d$k.prototype.skin = function (t, e, i) {
    if (this.d$i != t) {
      this.d$i = t, this.d$j = [];for (var o = 0, n = i; n <= e; n++) this.d$j[o++] = t + "/" + n + ".png";i = a.getRes(this.d$j[0]);i && (this.width = i.sourceWidth, this.height = i.sourceHeight), this.d$r();
    }
  }, Object.defineProperty(d$k.prototype, "atHide", { get: function () {
      return this.d$o;
    }, set: function (t) {
      this.d$o = t;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(d$k.prototype, "durFrm", { set: function (t) {
      this.d$n != t && (this.d$n = t, this.d$k && (Laya.timer.clear(this, this.d$r), Laya.timer.loop(this.d$n * (1e3 / 60), this, this.d$r)));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(d$k.prototype, "loop", { set: function (t) {
      this.d$m = t;
    }, enumerable: !0, configurable: !0 }), d$k.prototype.play = function () {
    this.d$k && this.stop(), this.d$k = !0, this.d$l = 0, Laya.timer.loop(this.d$n * (1e3 / 60), this, this.d$r), this.d$r();
  }, d$k.prototype.stop = function () {
    this.d$k = !1, this.d$l = 0, this.d$r(), Laya.timer.clear(this, this.d$r);
  }, d$k.prototype.pause = function () {
    this.d$k && (this.d$k = !1, Laya.timer.clear(this, this.d$r));
  }, d$k.prototype.resume = function () {
    this.d$k || (this.d$k = !0, Laya.timer.loop(this.d$n * (1e3 / 60), this, this.d$r), this.d$r());
  }, Object.defineProperty(d$k.prototype, "isPlay", { get: function () {
      return this.d$k;
    }, enumerable: !0, configurable: !0 }), d$k.prototype.d$r = function () {
    this.d$j && 0 != this.d$j.length && (this.d$h.skin = this.d$j[this.d$l], this.d$k && (this.d$l++, this.d$l == this.d$j.length && (this.d$m ? this.d$l = 0 : (Laya.timer.clear(this, this.d$r), this.d$k = !1, this.d$o && (this.visible = !1), this.event(i.COMPLETE)))));
  }, e.PanelEff = d$k;
}(modules = modules || {}), function (t) {
  var e, i;function d$a(t) {
    void 0 === t && (t = 0);var e = o.call(this) || this;return e.d$s = { bgImgSkin: "c2/a3.jpg", topImgSkin: "c2/a10.jpg", btmImgSkin: "c2/a4.jpg", leftImgSkin: "c2/a6.jpg", rightImgSkin: "c2/a8.jpg", loadingBarBgSkin: "c2/image_loding_bar0.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.d$t = { bgImgSkin: "c2/a12.jpg", topImgSkin: "c2/a11.jpg", btmImgSkin: "c2/a5.jpg", leftImgSkin: "c2/a7.jpg", rightImgSkin: "c2/a9.jpg", loadingBarBgSkin: "c2/image_loding_bar02.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.d$u = 0, e.d$v(1 == t ? e.d$t : e.d$s), e;
  }var o;e = t.d$d || (t.d$d = {}), i = t.d$g.PanelEff, o = ui.d$b, __extends(d$a, o), d$a.prototype.initialize = function () {
    o.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.d$w = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.d$w && (this.d$w.loadingType, this.loadingTips.color = "#f2ffb5"), this.d$x = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
  }, d$a.prototype.toAllProgress = function (t) {
    var e = this;if (-1 === t) return e.d$u = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);var i;-2 !== t ? (e.d$u < .9 ? e.d$u += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : e.d$u < 1 && (e.d$u += 1e-4), .9999 < e.d$u && (e.d$u = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
      .9 < e.d$u && toAllProgress(-1);
    })), t = 590 * (i = e.d$u), e.d$u = e.d$u > i ? e.d$u : i, e.loadingBar.width = t, t = e.loadingBar.x + t, e.loadingImg2.x = t - 15, 364 <= t ? (e.loadingImg1.visible = !0, e.loadingImg1.x = t - 202) : e.loadingImg1.visible = !1, e.percentageTips.text = (100 * i >> 0) + "%", e.d$u < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress)) : Laya.timer.clear(this, this.toAllProgress);
  }, d$a.prototype.toProgress = function (t, e, i) {
    var o = 590 * (t = 1 < t ? 1 : t);this.d$u = this.d$u > t ? this.d$u : t, this.loadingBar.width = o;o = this.loadingBar.x + o;this.loadingImg2.x = o - 15, 364 <= o ? (this.loadingImg1.visible = !0, this.loadingImg1.x = o - 202) : this.loadingImg1.visible = !1, this.percentageTips.text = (100 * t >> 0) + "%", this.loadingTips.text = e;for (var n = i - 1, a = 0; a < this.d$x.length; a++) this.d$x[a].skin = a < n ? "c2/image_login_point3.png" : n === a ? "c2/image_login_point2.png" : "c2/image_login_point1.png";
  }, d$a.prototype.onOpened = function () {
    this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.d$w.lastVersion + "      \u7248\u672c\uff1a" + this.d$w.wxVersion, this.showGetBtn();
  }, d$a.prototype.close = function (t) {
    this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.d$y), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.d$z);
  }, d$a.prototype.resetWinFun = function () {
    Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
  }, d$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.resetWinFun(), o.prototype.destroy.call(this, t);
  }, d$a.prototype.showGetBtn = function () {
    this.d$w.showGetBtn && 1 == this.d$w.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "c2/a1.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.d$z), this.d$A(), this.d$B(!0));
  }, d$a.prototype.d$z = function () {
    this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "c2/a2.png", this.d$C(), this.d$B(!1));
  }, d$a.prototype.d$v = function (t) {
    this.bgImg.skin = t.bgImgSkin, this.topImg.skin = t.topImgSkin, this.btmImg.skin = t.btmImgSkin, this.leftImg.skin = t.leftImgSkin, this.rightImg.skin = t.rightImgSkin, this.copyRightImg.bottom = t.copyRightImgBottom, this.processBox1.y = t.processBox1Y, this.processBox2.y = t.processBox2Y, this.loadingBarBg.skin = t.loadingBarBgSkin, this.loadingTips.fontSize = t.loadingTipsSize, this.getTipsBtn.visible = this.d$w.showGetBtn && 1 == this.d$w.showGetBtn, this.getTipsBtn.visible ? this.d$A() : this.d$C(), this.d$B(this.getTipsBtn.visible);
  }, d$a.prototype.d$A = function () {
    this.d$D || (this.d$D = i.create(this.getTipsBtn, "r3", 4, 0, 12), this.d$D.pos(161, 106), this.d$D.scale(1.14, 1.15)), i.play(this.d$D);
  }, d$a.prototype.d$C = function () {
    this.d$D && i.stop(this.d$D);
  }, d$a.prototype.d$B = function (t) {
    Laya.timer.clear(this, this.d$y), t ? (this.d$E = 9, this.txtGetTm.visible = !0, this.d$y(), Laya.timer.loop(1e3, this, this.d$y)) : this.txtGetTm.visible = !1;
  }, d$a.prototype.d$y = function () {
    0 < this.d$E ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.d$E + "s)", this.d$E--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.d$y), this.d$z());
  }, e.LoadingPanel = d$a;
}(modules = modules || {}), function (t) {
  var e, i, o;function d$a() {
    var t = n.call(this) || this;return t.d$F = 0, t;
  }var n;e = t.d$d || (t.d$d = {}), i = Laya.List, o = Laya.Event, n = ui.d$c, __extends(d$a, n), d$a.prototype.initialize = function () {
    n.prototype.initialize.call(this), ServerLoading.instance.preloadServer(), this.centerX = 0, this.centerY = 0, this.d$w = Browser.window.PF_INFO, this.d$G = new i(), this.d$G.vScrollBarSkin = "", this.d$G.itemRender = e.SelectLeftListItem, this.d$G.top = 5, this.d$G.repeatX = 1, this.d$G.spaceY = 5, this.d$G.width = this.leftListBox.width, this.d$G.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.d$G), this.d$H = new i(), this.d$H.vScrollBarSkin = "", this.d$H.itemRender = e.SelectRightListItem, this.d$H.top = 5, this.d$H.repeatX = 1, this.d$H.spaceY = 5, this.d$H.width = this.rightListBox.width, this.d$H.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.d$H);var t = this.d$w.loadingType;this.d$I = 1 != t && (2 == t || 3 == t) ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.noticeBtn.visible = !1, Browser.window.initPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), this.addEvt(), this.onOpened();
  }, d$a.prototype.addEvt = function () {
    this.enterBtn.on(Laya.Event.CLICK, this, this.d$J), this.selectServer.on(Laya.Event.CLICK, this, this.d$K), this.selectServer.on(Laya.Event.CLICK, this, this.d$K), this.closeBg.on(Laya.Event.CLICK, this, this.d$L), this.noticeBtn.on(Laya.Event.CLICK, this, this.d$M), this.noticeClose.on(Laya.Event.CLICK, this, this.d$N), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.d$O);
  }, d$a.prototype.rmEvts = function () {
    this.enterBtn.off(Laya.Event.CLICK, this, this.d$J), this.selectServer.off(Laya.Event.CLICK, this, this.d$K), this.selectServer.off(Laya.Event.CLICK, this, this.d$K), this.closeBg.off(Laya.Event.CLICK, this, this.d$L), this.noticeBtn.off(Laya.Event.CLICK, this, this.d$M), this.noticeClose.off(Laya.Event.CLICK, this, this.d$N), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.d$O);
  }, d$a.prototype.onOpened = function () {
    this.d$P = this.d$w.selectedServer.server_id, this.d$Q(this.d$w.selectedServer), this.d$G.dataSource = this.d$w.groupList, this.d$K(), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.d$w.lastVersion + "      \u7248\u672c\uff1a" + this.d$w.wxVersion, this.serverName.color = this.selServer.color = this.d$I;
  }, d$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), this.d$G && (this.d$G.removeSelf(), this.d$G.destroy(), this.d$G = null), this.d$H && (this.d$H.removeSelf(), this.d$H.destroy(), this.d$H = null), n.prototype.destroy.call(this, t);
  }, d$a.prototype.d$L = function () {
    this.listBg.visible = !1;
  }, d$a.prototype.d$J = function () {
    this.d$R(this.d$w.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.d$w.selectedServer, req_server_check_ban(0, this.d$w.selectedServer.server_id));
  }, d$a.prototype.d$M = function () {
    this.noticeBg.visible = !0, req_server_notice(this.d$w.selectedServer.server_id, this.d$S.bind(this));
  }, d$a.prototype.d$N = function () {
    this.noticeBg.visible = !1;
  }, d$a.prototype.d$O = function () {
    this.d$F = this.noticeContent.mouseY, Laya.stage.on(o.MOUSE_MOVE, this, this.d$T), Laya.stage.on(o.MOUSE_UP, this, this.d$U), Laya.stage.on(o.MOUSE_OUT, this, this.d$U);
  }, d$a.prototype.d$T = function () {
    var t = this.d$F - this.noticeContent.mouseY;this.noticeContent.scrollY += t, this.d$F = this.noticeContent.mouseY;
  }, d$a.prototype.d$U = function () {
    Laya.stage.off(o.MOUSE_MOVE, this, this.d$T), Laya.stage.off(o.MOUSE_UP, this, this.d$U), Laya.stage.off(o.MOUSE_OUT, this, this.d$U);
  }, d$a.prototype.d$R = function (t) {
    return -1 == t.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != t.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
  }, d$a.prototype.d$K = function () {
    this.d$w.hasGroupReq ? this.listBg.visible = !0 : (this.d$w.hasGroupReq = !0, req_server_group(0));
  }, d$a.prototype.preload = function () {}, d$a.prototype.getStatusSrc = function (t) {
    var e = "";return 2 === t ? e = "ccclogin/image_login_changtong.png" : 1 === t ? e = "ccclogin/image_login_fanmang.png" : -1 !== t && 0 !== t || (e = "ccclogin/image_login_weihu.png"), e;
  }, d$a.prototype.d$Q = function (t) {
    this.serverName.text = -1 === t.status ? t.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === t.status ? t.server_name + "(\u5f85\u5f00\u670d)" : t.server_name, this.serverName.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.d$I, this.hotImage.skin = this.getStatusSrc(t.status), this.d$w.cdn = t.cdn || "", this.d$w.selectedServer = t, this.noticeBtn.visible = !0;
  }, d$a.prototype.d$V = function (t) {
    this.showGroupList(t);
  }, d$a.prototype.d$W = function (t) {
    this.d$Q(t), this.listBg.visible = !1;
  }, d$a.prototype.d$S = function (t) {
    this.noticeContent.text = t.data.content || "", this.noticeTitle.text = t.data.title || "\u6682\u65e0\u516c\u544a";
  }, d$a.prototype.showGroupList = function (t) {
    if (void 0 === t && (t = 0), this.parent) {
      var e = this.d$w.groupList;if (e && 0 !== e.length) {
        for (var i = e.length, o = 0; o < i; o++) e[o].callBack = this.d$V.bind(this), e[o].select = o == t, e[o].index = o;var n = (this.d$G.array = e)[t].id;this.d$w.serverList[n] ? this.showServerList(n) : this.d$w.hasServerReq || (this.d$w.hasServerReq = !0, -1 == n ? req_server_owner(0) : -2 == n ? req_recommend_server_list(0) : req_server_list(0, n));
      }
    }
  }, d$a.prototype.showServerList = function (t) {
    if (this.parent && this.d$w.serverList[t]) {
      for (var e = this.d$w.serverList[t], i = e.length, o = 0; o < i; o++) e[o].callBack = this.d$W.bind(this);this.d$H.array = e;
    }
  }, e.SelectServerPanel = d$a;
}(modules = modules || {});var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.d$d.AuthorizationPanel,
    LoadingPanel = modules.d$d.LoadingPanel,
    SelectServerPanel = modules.d$d.SelectServerPanel,
    ServerLoading = function () {
  function d$d(t) {
    this.m_loadingRes = ["c1/c2.atlas", "c2/a3.jpg"], this.m_loadingNewRes = ["c1/c2.atlas", "c2/a12.jpg", "c1/r3.atlas", "c2/a1.png", "c2/a2.png"], this.m_loadingRes1 = ["c2/a4.jpg", "c2/a6.jpg", "c2/a8.jpg", "c2/a10.jpg"], this.m_loadingNewRes1 = ["c2/a5.jpg", "c2/a7.jpg", "c2/a9.jpg", "c2/a11.jpg"], this.m_serverRes = ["c1/ccclogin.atlas", "ccclogin/b2.jpg"], this.m_serverRes1 = ["ccclogin/b3.jpg", "ccclogin/b4.jpg", "ccclogin/b5.jpg", "ccclogin/b6.jpg", "ccclogin/b1.png", "ccclogin/b8.png", "ccclogin/b9.png"], this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, d$d.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var e = Laya.AtlasResourceManager;e.maxTextureCount = 4, e.atlasTextureWidth = e.atlasTextureHeight = 1024, e._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.d$X.bind(this)), t.showLoadingBtn || (this.m_loadingNewRes = [], this.m_loadingNewRes1 = []);e = Laya.Loader.preLoadedMap;e["c1/ccclogin.atlas"] = t.ccclogin, e["c1/c2.atlas"] = t.c2, e["c1/r3.atlas"] = t.r3, e["c1/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = d$d.instance.requestWeb, Browser.window.imgMgrLoad = d$d.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.d$X();
  }return d$d.prototype.changeServerLoading = function (t) {
    d$d.instance.m_layer.visible = t;
  }, d$d.prototype.openAuthor = function () {
    d$d.instance.m_author || (d$d.instance.m_author = new AuthorizationPanel()), d$d.instance.m_author.parent || d$d.instance.m_layer.addChild(d$d.instance.m_author), d$d.instance.d$Y();
  }, d$d.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, d$d.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      d$d.instance.d$Z() && Laya.loader.load(d$d.instance.m_serverRes1);
    })));
  }, d$d.prototype.openServer = function () {
    Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      d$d.instance.m_server || (d$d.instance.m_server = new SelectServerPanel()), d$d.instance.m_server.parent || d$d.instance.m_layer.addChild(d$d.instance.m_server), d$d.instance.d$Y();
    }));
  }, d$d.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, d$d.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      d$d.instance.d$Z() && Laya.loader.load(d$d.instance.m_loadingRes1);
    })), this.m_loadingNewRes && this.m_loadingNewRes.length && Laya.loader.load(this.m_loadingNewRes, Handler.create(this, function () {
      d$d.instance.d$Z() && Laya.loader.load(d$d.instance.m_loadingNewRes1);
    })));
  }, d$d.prototype.openLoading = function (t) {
    var e = 1 == (t = void 0 === t ? 0 : t) && this.m_loadingNewRes.length ? this.m_loadingNewRes : this.m_loadingRes;Laya.loader.load(e, Handler.create(this, function () {
      d$d.instance.m_loading || (d$d.instance.m_loading = new LoadingPanel(t)), d$d.instance.m_loading.parent || d$d.instance.m_layer.addChild(d$d.instance.m_loading), d$d.instance.d$Y();
    }));
  }, d$d.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var t = 0, e = this.m_serverRes; t < e.length; t++) {
      var i = e[t];Laya.Loader.clearRes(i, !0);
    }for (var o = 0, n = this.m_serverRes1; o < n.length; o++) i = n[o], Laya.Loader.clearRes(i, !0);for (var a = 0, s = this.m_loadingRes; a < s.length; a++) i = s[a], Laya.Loader.clearRes(i, !0);for (var r = 0, d = this.m_loadingRes1; r < d.length; r++) i = d[r], Laya.Loader.clearRes(i, !0);for (var h = 0, c = this.m_loadingNewRes; h < c.length; h++) i = c[h], Laya.Loader.clearRes(i, !0);for (var l = 0, p = this.m_loadingNewRes1; l < p.length; l++) i = p[l], Laya.Loader.clearRes(i, !0);this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, d$d.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && d$d.instance.m_loading.showGetBtn();
  }, d$d.prototype.d$$ = function () {
    var t = Laya.stage,
        e = Math.floor(t.width),
        i = Math.floor(t.height);i / e < 1.7777778 ? (this.viewW = Math.floor(e / (i / 1280)), this.viewH = 1280, this.viewS = i / 1280) : (this.viewW = 720, this.viewH = Math.floor(i / (e / 720)), this.viewS = e / 720);e = Math.floor(t.width), t = Math.floor(t.height);t / e < 1.7777778 ? (this.viewW = Math.floor(e / (t / 1280)), this.viewH = 1280, this.viewS = t / 1280) : (this.viewW = 720, this.viewH = Math.floor(t / (e / 720)), this.viewS = e / 720), this.d$Y();
  }, d$d.prototype.d$Y = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, d$d.prototype.d$X = function () {
    if (Input.isInputting && Browser.onMobile) {
      var t = parseInt(Input.inputContainer.style.top.replace("px", "")),
          e = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS,
          i = Browser.clientWidth / Render.canvas.width;return 0 < (t = Browser.clientHeight - e * i - t) && (t = 0), void (Browser.container.style.top = t + "px");
    }Browser.container.style.top = "0px", e = (e = Math.floor(Browser.width)) + 1 & 2147483646, i = (i = Math.floor(Browser.height)) + 1 & 2147483646;t = Laya.stage;i < e ? (t.scaleMode = Laya.Stage.SCALE_NOSCALE, t.width = e, t.height = i) : (t.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, t.width = 840, t.height = Math.floor(i / (e / 840)) + 1 & 2147483646), this.d$$();
  }, d$d.prototype.requestWeb = function (t, e) {
    function d$c() {
      i.onload = null, i.onerror = null;
    }var i,
        o = t;(i = new Browser.window.Image()).onload = function () {
      d$c(), e(o, 200, i);
    }, i.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", o), d$c(), e(o, 404, null);
    }, i.src = o;
  }, d$d.prototype.d$_ = function (t, e, i, o) {
    var n = t.toLowerCase();o(t, e, i = i && (this.d$e(n, ".png") || this.d$e(n, ".jpg")) ? DecodeTools.decodeImage(new Uint8Array(i)) : i);
  }, d$d.prototype.d$e = function (t, e) {
    return -1 != t.indexOf(e, t.length - e.length);
  }, d$d.prototype.d$Z = function () {
    return Browser.window.imgMgrLoad == d$d.instance.requestWeb;
  }, d$d;
}();!function (t) {
  function d$a() {
    var t = e.call(this) || this;return t.width = 192, t.height = 70, t.d$f = new Laya.Image(), t.addChild(t.d$f), t.d$aa = new Laya.Label(), t.d$aa.fontSize = 30, t.d$aa.color = t.d$I, t.addChild(t.d$aa), t.d$aa.centerX = 0, t.d$aa.centerY = 0, t;
  }var e;t = t.d$d || (t.d$d = {}), e = Laya.View, __extends(d$a, e), d$a.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.d$w = Browser.window.PF_INFO;var t = this.d$w.loadingType;this.d$I = 1 != t && 2 != t && 3 == t ? "#763042" : "#263d7d", this.addEvt();
  }, Object.defineProperty(d$a.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), d$a.prototype.setData = function (t) {
    this.d$ba = t, this.d$aa.text = t.name, this.d$f.skin = t.select ? "ccclogin/btn_xuanqu_anniuhuang.png" : "ccclogin/btn_xuanqu_anniulan.png";
  }, d$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, d$a.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, d$a.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, d$a.prototype.clkHdler = function () {
    this.d$ba && this.d$ba.callBack && this.d$ba.callBack(this.d$ba.index);
  }, t.SelectLeftListItem = d$a;
}(modules = modules || {}), function (t) {
  function d$a() {
    var t = e.call(this) || this;return t.d$f = new Laya.Image("ccclogin/btn_xuanqu_quanniu.png"), t.d$aa = new Laya.Label(), t.d$aa.fontSize = 30, t.d$aa.color = t.d$I, t.addChild(t.d$f), t.d$ca = new Laya.Image(), t.addChild(t.d$ca), t.width = 358, t.height = 70, t.addChild(t.d$aa), t.d$ca.centerY = 0, t.d$ca.x = 18, t.d$aa.x = 80, t.d$aa.centerY = 0, t.d$f.graphics.drawRect(0, 0, t.width, t.height, "#00sasd"), t;
  }var e;t = t.d$d || (t.d$d = {}), e = Laya.View, __extends(d$a, e), d$a.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.d$w = Browser.window.PF_INFO;var t = this.d$w.loadingType;this.d$I = 1 != t && 2 != t && 3 == t ? "#763042" : "#34267d", this.addEvt();
  }, Object.defineProperty(d$a.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), d$a.prototype.setData = function (t) {
    this.d$ba = t, this.d$aa.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.d$I, this.d$aa.text = -1 === t.status ? t.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === t.status ? t.server_name + "(\u5f85\u5f00\u670d)" : t.server_name, this.d$ca.skin = this.getStatusSrc(t.status);
  }, d$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, d$a.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, d$a.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, d$a.prototype.clkHdler = function () {
    this.d$ba && this.d$ba.callBack && this.d$ba.callBack(this.d$ba);
  }, d$a.prototype.getStatusSrc = function (t) {
    var e = "";return 2 === t ? e = "ccclogin/image_login_changtong.png" : 1 === t ? e = "ccclogin/image_login_fanmang.png" : -1 !== t && 0 !== t || (e = "ccclogin/image_login_weihu.png"), e;
  }, t.SelectRightListItem = d$a;
}(modules = modules || {}), window.ServerLoading = ServerLoading;