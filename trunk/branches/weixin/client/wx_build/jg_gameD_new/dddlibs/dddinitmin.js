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
  }, d$b.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "dddlogin/d2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "dddlogin/d6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "dddlogin/d3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "dddlogin/d4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "dddlogin/d5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] }, d$b);function d$b() {
    return i.call(this) || this;
  }var i;t.d$a = e;
}(ui = ui || {}), function (t) {
  var e = (__extends(d$b, i = View), d$b.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.d$b.uiView);
  }, d$b.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "dddlogin/d1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "dddloding/d13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "dddloding/d14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "dddloding/d16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "dddloding/d17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "dddloding/d20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "dddloding/d19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "dddloding/d18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "dddloding/d18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "dddloding/d1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", right: 20, height: 32, fontSize: 24, color: "#163274", bold: !1, align: "right" } }] }, d$b);function d$b() {
    return i.call(this) || this;
  }var i;t.d$b = e;
}(ui = ui || {}), function (t) {
  var e = (__extends(d$b, i = View), d$b.prototype.createChildren = function () {
    View.regComponent("Text", laya.display.Text), i.prototype.createChildren.call(this), this.createView(t.d$c.uiView);
  }, d$b.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "dddlogin/d2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "dddlogin/d6b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "dddlogin/d3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { width: 220, var: "leftImg", skin: "dddlogin/d4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "dddlogin/d5b.jpg", left: 720, height: 1280, centerY: 0 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "dddlogin/d21b.png", centerX: 0 } }, { type: "Image", props: { y: 930, x: 162, var: "hotImage", skin: "dddlogin/d18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "dddlogin/d1b.png", centerX: 0, bottom: 10 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "dddlogin/d12b.png", name: "enterBtn", centerX: 0 } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", right: 20, height: 32, fontSize: 24, color: "#163274", bold: !1, align: "right" } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "dddlogin/d11b.png" } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "dddlogin/d8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "dddlogin/d10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "dddlogin/d9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "dddlogin/d17b.png" } }] }] }, d$b);function d$b() {
    return i.call(this) || this;
  }var i;t.d$c = e;
}(ui = ui || {}), function (t) {
  function d$a() {
    return e.call(this) || this;
  }var e;t = t.d$d || (t.d$d = {}), e = ui.d$a, __extends(d$a, e), d$a.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
  }, d$a.prototype.addEvt = function () {
    this.on(Laya.Event.CLICK, this, this.d$e);
  }, d$a.prototype.rmEvts = function () {
    this.off(Laya.Event.CLICK, this, this.d$e);
  }, d$a.prototype.onOpened = function () {
    this.d$f = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
  }, d$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, d$a.prototype.d$e = function () {
    1e4 < Date.now() - this.d$f && (this.d$f -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
  }, t.AuthorizationPanel = d$a;
}(modules = modules || {}), function (t) {
  var e, i, d, o;function d$k() {
    var t = n.call(this) || this;return t.d$j = new d(), t.addChild(t.d$j), t.d$k = null, t.d$l = [], t.d$m = !1, t.d$n = 0, t.d$o = !0, t.d$p = 6, t.d$q = !1, t.on(i.DISPLAY, t, t.d$r), t.on(i.UNDISPLAY, t, t.d$s), t;
  }var n;e = t.d$i || (t.d$i = {}), i = Laya.Event, d = Laya.Image, t = Laya.Component, o = Laya.Loader, __extends(d$k, n = t), d$k.create = function (t, e, i, d, n, o, s) {
    void 0 === d && (d = 0), void 0 === n && (n = 6), void 0 === o && (o = !0), void 0 === s && (s = !1);var a = new d$k();return a.skin(e, i, d), a.durFrm = n, a.loop = o, a.atHide = s, t && t.addChild(a), a;
  }, d$k.play = function (t) {
    t && (t.visible = !0, t.play());
  }, d$k.stop = function (t) {
    t && (t.visible = !1, t.stop());
  }, d$k.prototype.destroy = function (t) {
    Laya.timer.clear(this, this.d$t), this.off(i.DISPLAY, this, this.d$r), this.off(i.UNDISPLAY, this, this.d$s), n.prototype.destroy.call(this, t);
  }, d$k.prototype.d$r = function () {}, d$k.prototype.d$s = function () {}, d$k.prototype.skin = function (t, e, i) {
    if (this.d$k != t) {
      this.d$k = t, this.d$l = [];for (var d = 0, n = i; n <= e; n++) this.d$l[d++] = t + "/" + n + ".png";i = o.getRes(this.d$l[0]);i && (this.width = i.sourceWidth, this.height = i.sourceHeight), this.d$t();
    }
  }, Object.defineProperty(d$k.prototype, "atHide", { get: function () {
      return this.d$q;
    }, set: function (t) {
      this.d$q = t;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(d$k.prototype, "durFrm", { set: function (t) {
      this.d$p != t && (this.d$p = t, this.d$m && (Laya.timer.clear(this, this.d$t), Laya.timer.loop(this.d$p * (1e3 / 60), this, this.d$t)));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(d$k.prototype, "loop", { set: function (t) {
      this.d$o = t;
    }, enumerable: !0, configurable: !0 }), d$k.prototype.play = function () {
    this.d$m && this.stop(), this.d$m = !0, this.d$n = 0, Laya.timer.loop(this.d$p * (1e3 / 60), this, this.d$t), this.d$t();
  }, d$k.prototype.stop = function () {
    this.d$m = !1, this.d$n = 0, this.d$t(), Laya.timer.clear(this, this.d$t);
  }, d$k.prototype.pause = function () {
    this.d$m && (this.d$m = !1, Laya.timer.clear(this, this.d$t));
  }, d$k.prototype.resume = function () {
    this.d$m || (this.d$m = !0, Laya.timer.loop(this.d$p * (1e3 / 60), this, this.d$t), this.d$t());
  }, Object.defineProperty(d$k.prototype, "isPlay", { get: function () {
      return this.d$m;
    }, enumerable: !0, configurable: !0 }), d$k.prototype.d$t = function () {
    this.d$l && 0 != this.d$l.length && (this.d$j.skin = this.d$l[this.d$n], this.d$m && (this.d$n++, this.d$n == this.d$l.length && (this.d$o ? this.d$n = 0 : (Laya.timer.clear(this, this.d$t), this.d$m = !1, this.d$q && (this.visible = !1), this.event(i.COMPLETE)))));
  }, e.PanelEff = d$k;
}(modules = modules || {}), function (t) {
  var e, i;function d$a(t) {
    void 0 === t && (t = 0);var e = d.call(this) || this;return e.d$u = { bgImgSkin: "dddloding/d3a.jpg", topImgSkin: "dddloding/d10a.jpg", btmImgSkin: "dddloding/d4a.jpg", leftImgSkin: "dddloding/d6a.jpg", rightImgSkin: "dddloding/d8a.jpg", loadingBarBgSkin: "dddloding/d13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.d$v = { bgImgSkin: "dddloding/d12a.jpg", topImgSkin: "dddloding/d11a.jpg", btmImgSkin: "dddloding/d5a.jpg", leftImgSkin: "dddloding/d7a.jpg", rightImgSkin: "dddloding/d9a.jpg", loadingBarBgSkin: "dddloding/d15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.d$w = 0, e.d$x(1 == t ? e.d$v : e.d$u), e;
  }var d;e = t.d$d || (t.d$d = {}), i = t.d$i.PanelEff, d = ui.d$b, __extends(d$a, d), d$a.prototype.initialize = function () {
    d.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.d$y = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.d$y && (this.d$y.loadingType, this.loadingTips.color = "#f2ffb5"), this.d$z = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
  }, d$a.prototype.toAllProgress = function (t) {
    var e = this;if (-1 === t) return e.d$w = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);var i;-2 !== t ? (e.d$w < .9 ? e.d$w += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : e.d$w < 1 && (e.d$w += 1e-4), .9999 < e.d$w && (e.d$w = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
      .9 < e.d$w && toAllProgress(-1);
    })), t = 590 * (i = e.d$w), e.d$w = e.d$w > i ? e.d$w : i, e.loadingBar.width = t, t = e.loadingBar.x + t, e.loadingImg2.x = t - 15, 364 <= t ? (e.loadingImg1.visible = !0, e.loadingImg1.x = t - 202) : e.loadingImg1.visible = !1, e.percentageTips.text = (100 * i >> 0) + "%", e.d$w < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress)) : Laya.timer.clear(this, this.toAllProgress);
  }, d$a.prototype.toProgress = function (t, e, i) {
    var d = 590 * (t = 1 < t ? 1 : t);this.d$w = this.d$w > t ? this.d$w : t, this.loadingBar.width = d;d = this.loadingBar.x + d;this.loadingImg2.x = d - 15, 364 <= d ? (this.loadingImg1.visible = !0, this.loadingImg1.x = d - 202) : this.loadingImg1.visible = !1, this.percentageTips.text = (100 * t >> 0) + "%", this.loadingTips.text = e;for (var n = i - 1, o = 0; o < this.d$z.length; o++) this.d$z[o].skin = o < n ? "dddloding/d20a.png" : n === o ? "dddloding/d19a.png" : "dddloding/d18a.png";
  }, d$a.prototype.onOpened = function () {
    this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.d$y.lastVersion + "      \u7248\u672c\uff1a" + this.d$y.wxVersion, this.showGetBtn();
  }, d$a.prototype.close = function (t) {
    this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.d$A), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.d$B);
  }, d$a.prototype.resetWinFun = function () {
    Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
  }, d$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.resetWinFun(), d.prototype.destroy.call(this, t);
  }, d$a.prototype.showGetBtn = function () {
    this.d$y.showGetBtn && 1 == this.d$y.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "dddloding/d1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.d$B), this.d$C(), this.d$D(!0));
  }, d$a.prototype.d$B = function () {
    this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "dddloding/d2a.png", this.d$E(), this.d$D(!1));
  }, d$a.prototype.d$x = function (t) {
    this.bgImg.skin = t.bgImgSkin, this.topImg.skin = t.topImgSkin, this.btmImg.skin = t.btmImgSkin, this.leftImg.skin = t.leftImgSkin, this.rightImg.skin = t.rightImgSkin, this.copyRightImg.bottom = t.copyRightImgBottom, this.processBox1.y = t.processBox1Y, this.processBox2.y = t.processBox2Y, this.loadingBarBg.skin = t.loadingBarBgSkin, this.loadingTips.fontSize = t.loadingTipsSize, this.getTipsBtn.visible = this.d$y.showGetBtn && 1 == this.d$y.showGetBtn, this.getTipsBtn.visible ? this.d$C() : this.d$E(), this.d$D(this.getTipsBtn.visible);
  }, d$a.prototype.d$C = function () {
    this.d$F || (this.d$F = i.create(this.getTipsBtn, "ddwxeff", 4, 0, 12), this.d$F.pos(161, 106), this.d$F.scale(1.14, 1.15)), i.play(this.d$F);
  }, d$a.prototype.d$E = function () {
    this.d$F && i.stop(this.d$F);
  }, d$a.prototype.d$D = function (t) {
    Laya.timer.clear(this, this.d$A), t ? (this.d$G = 9, this.txtGetTm.visible = !0, this.d$A(), Laya.timer.loop(1e3, this, this.d$A)) : this.txtGetTm.visible = !1;
  }, d$a.prototype.d$A = function () {
    0 < this.d$G ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.d$G + "s)", this.d$G--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.d$A), this.d$B());
  }, e.LoadingPanel = d$a;
}(modules = modules || {}), function (t) {
  var e, i, d;function d$a() {
    var t = n.call(this) || this;return t.d$H = 0, t;
  }var n;e = t.d$d || (t.d$d = {}), i = Laya.List, d = Laya.Event, n = ui.d$c, __extends(d$a, n), d$a.prototype.initialize = function () {
    n.prototype.initialize.call(this), ServerLoading.instance.preloadServer(), this.centerX = 0, this.centerY = 0, this.d$y = Browser.window.PF_INFO, this.d$I = new i(), this.d$I.vScrollBarSkin = "", this.d$I.itemRender = e.SelectLeftListItem, this.d$I.top = 5, this.d$I.repeatX = 1, this.d$I.spaceY = 5, this.d$I.width = this.leftListBox.width, this.d$I.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.d$I), this.d$J = new i(), this.d$J.vScrollBarSkin = "", this.d$J.itemRender = e.SelectRightListItem, this.d$J.top = 5, this.d$J.repeatX = 1, this.d$J.spaceY = 5, this.d$J.width = this.rightListBox.width, this.d$J.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.d$J);var t = this.d$y.loadingType;this.d$K = 1 != t && (2 == t || 3 == t) ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.noticeBtn.visible = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
  }, d$a.prototype.addEvt = function () {
    this.bgImg.on(Laya.Event.CLICK, this, this.d$e), this.enterBtn.on(Laya.Event.CLICK, this, this.d$L), this.selectServer.on(Laya.Event.CLICK, this, this.d$M), this.selectServer.on(Laya.Event.CLICK, this, this.d$M), this.closeBg.on(Laya.Event.CLICK, this, this.d$N), this.noticeBtn.on(Laya.Event.CLICK, this, this.d$O), this.noticeClose.on(Laya.Event.CLICK, this, this.d$P), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.d$Q);
  }, d$a.prototype.rmEvts = function () {
    this.bgImg.off(Laya.Event.CLICK, this, this.d$e), this.enterBtn.off(Laya.Event.CLICK, this, this.d$L), this.selectServer.off(Laya.Event.CLICK, this, this.d$M), this.selectServer.off(Laya.Event.CLICK, this, this.d$M), this.closeBg.off(Laya.Event.CLICK, this, this.d$N), this.noticeBtn.off(Laya.Event.CLICK, this, this.d$O), this.noticeClose.off(Laya.Event.CLICK, this, this.d$P), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.d$Q);
  }, d$a.prototype.onOpened = function () {
    this.d$f = Date.now(), this.d$R = this.d$y.selectedServer.server_id, this.d$S(this.d$y.selectedServer), this.d$I.dataSource = this.d$y.groupList, this.d$M(), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.d$y.lastVersion + "      \u7248\u672c\uff1a" + this.d$y.wxVersion, this.serverName.color = this.selServer.color = this.d$K;
  }, d$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), this.d$I && (this.d$I.removeSelf(), this.d$I.destroy(), this.d$I = null), this.d$J && (this.d$J.removeSelf(), this.d$J.destroy(), this.d$J = null), n.prototype.destroy.call(this, t);
  }, d$a.prototype.d$e = function () {
    1e4 < Date.now() - this.d$f && (this.d$f -= 2e3, ServerLoading.instance.enterDefaultServer());
  }, d$a.prototype.d$N = function () {
    this.listBg.visible = !1;
  }, d$a.prototype.d$L = function () {
    this.d$T(this.d$y.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.d$y.selectedServer, req_server_check_ban(0, this.d$y.selectedServer.server_id));
  }, d$a.prototype.d$O = function () {
    this.noticeBg.visible = !0, req_server_notice(this.d$y.selectedServer.server_id, this.d$U.bind(this));
  }, d$a.prototype.d$P = function () {
    this.noticeBg.visible = !1;
  }, d$a.prototype.d$Q = function () {
    this.d$H = this.noticeContent.mouseY, Laya.stage.on(d.MOUSE_MOVE, this, this.d$V), Laya.stage.on(d.MOUSE_UP, this, this.d$W), Laya.stage.on(d.MOUSE_OUT, this, this.d$W);
  }, d$a.prototype.d$V = function () {
    var t = this.d$H - this.noticeContent.mouseY;this.noticeContent.scrollY += t, this.d$H = this.noticeContent.mouseY;
  }, d$a.prototype.d$W = function () {
    Laya.stage.off(d.MOUSE_MOVE, this, this.d$V), Laya.stage.off(d.MOUSE_UP, this, this.d$W), Laya.stage.off(d.MOUSE_OUT, this, this.d$W);
  }, d$a.prototype.d$T = function (t) {
    return -1 == t.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != t.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
  }, d$a.prototype.d$M = function () {
    this.d$y.hasGroupReq ? this.listBg.visible = !0 : (this.d$y.hasGroupReq = !0, req_server_group(0));
  }, d$a.prototype.preload = function () {}, d$a.prototype.getStatusSrc = function (t) {
    var e = "";return 2 === t ? e = "dddlogin/d18b.png" : 1 === t ? e = "dddlogin/d19b.png" : -1 !== t && 0 !== t || (e = "dddlogin/d20b.png"), e;
  }, d$a.prototype.d$S = function (t) {
    this.serverName.text = -1 === t.status ? t.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === t.status ? t.server_name + "(\u5f85\u5f00\u670d)" : t.server_name, this.serverName.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.d$K, this.hotImage.skin = this.getStatusSrc(t.status), this.d$y.cdn = t.cdn || "", this.d$y.selectedServer = t, this.noticeBtn.visible = !0;
  }, d$a.prototype.d$X = function (t) {
    this.showGroupList(t);
  }, d$a.prototype.d$Y = function (t) {
    this.d$S(t), this.listBg.visible = !1;
  }, d$a.prototype.d$U = function (t) {
    this.noticeContent.text = t.data.content || "", this.noticeTitle.text = t.data.title || "\u6682\u65e0\u516c\u544a";
  }, d$a.prototype.showGroupList = function (t) {
    if (void 0 === t && (t = 0), this.parent) {
      var e = this.d$y.groupList;if (e && 0 !== e.length) {
        for (var i = e.length, d = 0; d < i; d++) e[d].callBack = this.d$X.bind(this), e[d].select = d == t, e[d].index = d;var n = (this.d$I.array = e)[t].id;this.d$y.serverList[n] ? this.showServerList(n) : this.d$y.hasServerReq || (this.d$y.hasServerReq = !0, -1 == n ? req_server_owner(0) : -2 == n ? req_recommend_server_list(0) : req_server_list(0, n));
      }
    }
  }, d$a.prototype.showServerList = function (t) {
    if (this.parent && this.d$y.serverList[t]) {
      for (var e = this.d$y.serverList[t], i = e.length, d = 0; d < i; d++) e[d].callBack = this.d$Y.bind(this);this.d$J.array = e;
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
  function d$k(t) {
    this.m_loadingRes = ["dddloding/d13a.png", "dddloding/d15a.png", "dddloding/d14a.png", "dddloding/d16a.png", "dddloding/d17a.png", "dddloding/d18a.png", "dddloding/d19a.png", "dddloding/d20a.png", "ddwxeff/d1c.png", "ddwxeff/d2c.png", "ddwxeff/d3c.png", "ddwxeff/d4c.png", "ddwxeff/d5c.png", "dddloding/d3a.jpg", "dddloding/d12a.jpg", "dddloding/d1a.png", "dddloding/d2a.png", "dddloding/d4a.jpg", "dddloding/d6a.jpg", "dddloding/d8a.jpg", "dddloding/d10a.jpg", "dddloding/d5a.jpg", "dddloding/d7a.jpg", "dddloding/d9a.jpg", "dddloding/d11a.jpg"], this.m_serverRes = ["dddlogin/d10b.png", "dddlogin/d11b.png", "dddlogin/d12b.png", "dddlogin/d13b.png", "dddlogin/d14b.png", "dddlogin/d15b.png", "dddlogin/d16b.png", "dddlogin/d17b.png", "dddlogin/d18b.png", "dddlogin/d19b.png", "dddlogin/d20b.png", "dddlogin/d21b.png", "dddlogin/d2b.jpg", "dddlogin/d3b.jpg", "dddlogin/d4b.jpg", "dddlogin/d5b.jpg", "dddlogin/d6b.jpg", "dddlogin/d1b.png", "dddlogin/d8b.png", "dddlogin/d9b.png"], this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.d$Z = !1, this.d$$ = "", d$k.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var e = Laya.AtlasResourceManager;e.maxTextureCount = 4, e.atlasTextureWidth = e.atlasTextureHeight = 1024, e._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.d$_.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = d$k.instance.requestWeb, Browser.window.imgMgrLoad = d$k.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.d$_();
  }return d$k.prototype.changeServerLoading = function (t) {
    d$k.instance.m_layer.visible = t;
  }, d$k.prototype.openAuthor = function () {
    d$k.instance.m_author || (d$k.instance.m_author = new AuthorizationPanel()), d$k.instance.m_author.parent || d$k.instance.m_layer.addChild(d$k.instance.m_author), d$k.instance.d$g();
  }, d$k.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, d$k.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, d$k.prototype.openServer = function () {
    for (var t = function () {
      d$k.instance.m_server || (d$k.instance.m_server = new SelectServerPanel()), d$k.instance.m_server.parent || d$k.instance.m_layer.addChild(d$k.instance.m_server), d$k.instance.d$g();
    }, e = !0, i = 0, d = this.m_serverRes; i < d.length; i++) {
      var n = d[i];if (null == Laya.Loader.getRes(n)) {
        e = !1;break;
      }
    }e ? t() : Laya.loader.load(this.m_serverRes, Handler.create(this, t));
  }, d$k.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, d$k.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, d$k.prototype.openLoading = function (t) {
    void 0 === t && (t = 0), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      d$k.instance.m_loading || (d$k.instance.m_loading = new LoadingPanel(t)), d$k.instance.m_loading.parent || d$k.instance.m_layer.addChild(d$k.instance.m_loading), d$k.instance.d$g();
    }));
  }, d$k.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var t = 0, e = this.m_serverRes; t < e.length; t++) {
      var i = e[t];Laya.Loader.clearCache(d$k.instance, i), Laya.Loader.clearRes(i, !0);
    }for (var d = 0, n = this.m_loadingRes; d < n.length; d++) i = n[d], Laya.Loader.clearCache(d$k.instance, i), Laya.Loader.clearRes(i, !0);this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, d$k.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && d$k.instance.m_loading.showGetBtn();
  }, d$k.prototype.enterDefaultServer = function () {
    var t = Browser.window.PF_INFO.selectedServer;this.d$Z || -1 == t.status || 0 == t.status || (this.d$Z = !0, Browser.window.PF_INFO.selectedServer = t, req_server_check_ban(0, t.server_id));
  }, d$k.prototype.sendRecord = function () {
    var t = "";t += "newRegister=" + Browser.window.PF_INFO.newRegister, t += ", isPrelodServer=" + this.m_isPrelodServer, t += ", SelectServerPanel=" + (null != d$k.instance.m_server), t += ", isPrelodLoading=" + this.m_isPrelodLoading, t += ", LoadingPanel=" + (null != d$k.instance.m_loading), t += ", resMgrLoad=" + (Browser.window.resMgrLoad == d$k.instance.requestWeb), t += ", imgMgrLoad=" + (Browser.window.imgMgrLoad == d$k.instance.requestWeb), t += ", errUrls=" + d$k.instance.d$$;for (var e = 0, i = this.m_serverRes; e < i.length; e++) t += ", " + (o = i[e]) + "=" + (null != Laya.Loader.getRes(o));for (var d = 0, n = this.m_loadingRes; d < n.length; d++) {
      var o;t += ", " + (o = n[d]) + "=" + (null != Laya.Loader.getRes(o));
    }var s = Browser.window.PF_INFO.selectedServer;s && (t += ", server_status=" + s.status, t += ", server_id=" + s.server_id, t += ", server_name=" + s.server_name);s = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: t });console.error(s), this.d$h && this.d$h == t || (this.d$h = t, reqRecordError(s));
  }, d$k.prototype.d$aa = function () {
    var t = Laya.stage,
        e = Math.floor(t.width),
        i = Math.floor(t.height);i / e < 1.7777778 ? (this.viewW = Math.floor(e / (i / 1280)), this.viewH = 1280, this.viewS = i / 1280) : (this.viewW = 720, this.viewH = Math.floor(i / (e / 720)), this.viewS = e / 720);e = Math.floor(t.width), t = Math.floor(t.height);t / e < 1.7777778 ? (this.viewW = Math.floor(e / (t / 1280)), this.viewH = 1280, this.viewS = t / 1280) : (this.viewW = 720, this.viewH = Math.floor(t / (e / 720)), this.viewS = e / 720), this.d$g();
  }, d$k.prototype.d$g = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, d$k.prototype.d$_ = function () {
    if (Input.isInputting && Browser.onMobile) {
      var t = parseInt(Input.inputContainer.style.top.replace("px", "")),
          e = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS,
          i = Browser.clientWidth / Render.canvas.width;return 0 < (t = Browser.clientHeight - e * i - t) && (t = 0), void (Browser.container.style.top = t + "px");
    }Browser.container.style.top = "0px", e = (e = Math.floor(Browser.width)) + 1 & 2147483646, i = (i = Math.floor(Browser.height)) + 1 & 2147483646;t = Laya.stage;3 == ENV || i < e ? (t.scaleMode = Laya.Stage.SCALE_NOSCALE, t.width = e, t.height = i) : (t.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, t.width = 840, t.height = Math.floor(i / (e / 840)) + 1 & 2147483646), this.d$aa();
  }, d$k.prototype.requestWeb = function (t, e) {
    function d$c() {
      i.onload = null, i.onerror = null;
    }var i,
        d = t;(i = new Browser.window.Image()).onload = function () {
      d$c(), e(d, 200, i);
    }, i.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", d), d$k.instance.d$$ += d + "|", d$c(), e(d, 404, null);
    }, i.src = d, -1 == d$k.instance.m_serverRes.indexOf(d) && -1 == d$k.instance.m_loadingRes.indexOf(d) || Laya.Loader.keepCache(d$k.instance, d);
  }, d$k.prototype.d$ba = function (t, e) {
    return -1 != t.indexOf(e, t.length - e.length);
  }, d$k;
}();!function (t) {
  function d$a() {
    var t = e.call(this) || this;return t.width = 192, t.height = 70, t.d$ca = new Laya.Image(), t.addChild(t.d$ca), t.d$da = new Laya.Label(), t.d$da.fontSize = 30, t.d$da.color = t.d$K, t.addChild(t.d$da), t.d$da.centerX = 0, t.d$da.centerY = 0, t;
  }var e;t = t.d$d || (t.d$d = {}), e = Laya.View, __extends(d$a, e), d$a.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.d$y = Browser.window.PF_INFO;var t = this.d$y.loadingType;this.d$K = 1 != t && 2 != t && 3 == t ? "#763042" : "#263d7d", this.addEvt();
  }, Object.defineProperty(d$a.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), d$a.prototype.setData = function (t) {
    this.d$ea = t, this.d$da.text = t.name, this.d$ca.skin = t.select ? "dddlogin/d14b.png" : "dddlogin/d15b.png";
  }, d$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, d$a.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, d$a.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, d$a.prototype.clkHdler = function () {
    this.d$ea && this.d$ea.callBack && this.d$ea.callBack(this.d$ea.index);
  }, t.SelectLeftListItem = d$a;
}(modules = modules || {}), function (t) {
  function d$a() {
    var t = e.call(this) || this;return t.d$ca = new Laya.Image("dddlogin/d16b.png"), t.d$da = new Laya.Label(), t.d$da.fontSize = 30, t.d$da.color = t.d$K, t.addChild(t.d$ca), t.d$fa = new Laya.Image(), t.addChild(t.d$fa), t.width = 358, t.height = 70, t.addChild(t.d$da), t.d$fa.centerY = 0, t.d$fa.x = 18, t.d$da.x = 80, t.d$da.centerY = 0, t.d$ca.graphics.drawRect(0, 0, t.width, t.height, "#00sasd"), t;
  }var e;t = t.d$d || (t.d$d = {}), e = Laya.View, __extends(d$a, e), d$a.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.d$y = Browser.window.PF_INFO;var t = this.d$y.loadingType;this.d$K = 1 != t && 2 != t && 3 == t ? "#763042" : "#34267d", this.addEvt();
  }, Object.defineProperty(d$a.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), d$a.prototype.setData = function (t) {
    this.d$ea = t, this.d$da.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.d$K, this.d$da.text = -1 === t.status ? t.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === t.status ? t.server_name + "(\u5f85\u5f00\u670d)" : t.server_name, this.d$fa.skin = this.getStatusSrc(t.status);
  }, d$a.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, d$a.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, d$a.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, d$a.prototype.clkHdler = function () {
    this.d$ea && this.d$ea.callBack && this.d$ea.callBack(this.d$ea);
  }, d$a.prototype.getStatusSrc = function (t) {
    var e = "";return 2 === t ? e = "dddlogin/d18b.png" : 1 === t ? e = "dddlogin/d19b.png" : -1 !== t && 0 !== t || (e = "dddlogin/d20b.png"), e;
  }, t.SelectRightListItem = d$a;
}(modules = modules || {}), window.ServerLoading = ServerLoading;