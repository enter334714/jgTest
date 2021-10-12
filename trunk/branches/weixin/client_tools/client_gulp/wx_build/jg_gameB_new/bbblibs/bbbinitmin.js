"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) {
    t.__proto__ = e;
  } || function (t, e) {
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
  };return function (t, e) {
    function $e() {
      this.constructor = t;
    }i(t, e), t.prototype = null === e ? Object.create(e) : ($e.prototype = e.prototype, new $e());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (t) {
  var e = (__extends($d, i = View), $d.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.$c.uiView);
  }, $d.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/b2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "bbblogin/b6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "bbblogin/b3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "bbblogin/b4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "bbblogin/b5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] }, $d);function $d() {
    return i.call(this) || this;
  }var i;t.$c = e;
}(ui = ui || {}), function (t) {
  var e = (__extends($d, i = View), $d.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(t.$d.uiView);
  }, $d.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/b1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "bbbloding/a13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "bbbloding/a14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "bbbloding/a16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "bbbloding/a17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "bbbloding/a20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "bbbloding/a19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "bbbloding/a18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "bbbloding/a18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "bbbloding/a1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", right: 20, height: 32, fontSize: 24, color: "#163274", bold: !1, align: "right" } }] }, $d);function $d() {
    return i.call(this) || this;
  }var i;t.$d = e;
}(ui = ui || {}), function (t) {
  var e = (__extends($d, i = View), $d.prototype.createChildren = function () {
    View.regComponent("Text", laya.display.Text), i.prototype.createChildren.call(this), this.createView(t.$e.uiView);
  }, $d.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/b2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "bbblogin/b6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "bbblogin/b3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "bbblogin/b4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "bbblogin/b5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "bbblogin/b21b.png", centerX: 0 } }, { type: "Image", props: { y: 930, x: 162, var: "hotImage", skin: "bbblogin/b18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/b1b.png", centerX: 0, bottom: 10 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "bbblogin/b12b.png", name: "enterBtn", centerX: 0 } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", right: 20, height: 32, fontSize: 24, color: "#163274", bold: !1, align: "right" } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "bbblogin/b11b.png" } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "bbblogin/b8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "bbblogin/b10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { y: 113, x: 33, visible: !1, var: "mNoticeBg", skin: "bbblogin/b26b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "bbblogin/b10b.png" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "mNoticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 733, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "bbblogin/b9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "bbblogin/b17b.png" } }] }] }, $d);function $d() {
    return i.call(this) || this;
  }var i;t.$e = e;
}(ui = ui || {}), function (t) {
  function $c() {
    return e.call(this) || this;
  }var e;t = t.$f || (t.$f = {}), e = ui.$c, __extends($c, e), $c.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
  }, $c.prototype.addEvt = function () {
    this.on(Laya.Event.CLICK, this, this.$g);
  }, $c.prototype.rmEvts = function () {
    this.off(Laya.Event.CLICK, this, this.$g);
  }, $c.prototype.onOpened = function () {
    this.$h = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
  }, $c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, $c.prototype.$g = function () {
    1e4 < Date.now() - this.$h && (this.$h -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
  }, t.AuthorizationPanel = $c;
}(modules = modules || {}), function (t) {
  var e, i, o, s;function $k() {
    var t = n.call(this) || this;return t.$j = new o(), t.addChild(t.$j), t.$k = null, t.$l = [], t.$m = !1, t.$n = 0, t.$o = !0, t.$p = 6, t.$q = !1, t.on(i.DISPLAY, t, t.$r), t.on(i.UNDISPLAY, t, t.$s), t;
  }var n;e = t.$i || (t.$i = {}), i = Laya.Event, o = Laya.Image, t = Laya.Component, s = Laya.Loader, __extends($k, n = t), $k.create = function (t, e, i, o, n, s, r) {
    void 0 === o && (o = 0), void 0 === n && (n = 6), void 0 === s && (s = !0), void 0 === r && (r = !1);var a = new $k();return a.skin(e, i, o), a.durFrm = n, a.loop = s, a.atHide = r, t && t.addChild(a), a;
  }, $k.play = function (t) {
    t && (t.visible = !0, t.play());
  }, $k.stop = function (t) {
    t && (t.visible = !1, t.stop());
  }, $k.prototype.destroy = function (t) {
    Laya.timer.clear(this, this.$t), this.off(i.DISPLAY, this, this.$r), this.off(i.UNDISPLAY, this, this.$s), n.prototype.destroy.call(this, t);
  }, $k.prototype.$r = function () {}, $k.prototype.$s = function () {}, $k.prototype.skin = function (t, e, i) {
    if (this.$k != t) {
      this.$k = t, this.$l = [];for (var o = 0, n = i; n <= e; n++) this.$l[o++] = t + "/" + n + ".png";i = s.getRes(this.$l[0]);i && (this.width = i.sourceWidth, this.height = i.sourceHeight), this.$t();
    }
  }, Object.defineProperty($k.prototype, "atHide", { get: function () {
      return this.$q;
    }, set: function (t) {
      this.$q = t;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty($k.prototype, "durFrm", { set: function (t) {
      this.$p != t && (this.$p = t, this.$m && (Laya.timer.clear(this, this.$t), Laya.timer.loop(this.$p * (1e3 / 60), this, this.$t)));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty($k.prototype, "loop", { set: function (t) {
      this.$o = t;
    }, enumerable: !0, configurable: !0 }), $k.prototype.play = function () {
    this.$m && this.stop(), this.$m = !0, this.$n = 0, Laya.timer.loop(this.$p * (1e3 / 60), this, this.$t), this.$t();
  }, $k.prototype.stop = function () {
    this.$m = !1, this.$n = 0, this.$t(), Laya.timer.clear(this, this.$t);
  }, $k.prototype.pause = function () {
    this.$m && (this.$m = !1, Laya.timer.clear(this, this.$t));
  }, $k.prototype.resume = function () {
    this.$m || (this.$m = !0, Laya.timer.loop(this.$p * (1e3 / 60), this, this.$t), this.$t());
  }, Object.defineProperty($k.prototype, "isPlay", { get: function () {
      return this.$m;
    }, enumerable: !0, configurable: !0 }), $k.prototype.$t = function () {
    this.$l && 0 != this.$l.length && (this.$j.skin = this.$l[this.$n], this.$m && (this.$n++, this.$n == this.$l.length && (this.$o ? this.$n = 0 : (Laya.timer.clear(this, this.$t), this.$m = !1, this.$q && (this.visible = !1), this.event(i.COMPLETE)))));
  }, e.PanelEff = $k;
}(modules = modules || {}), function (t) {
  var e, i;function $c(t) {
    void 0 === t && (t = 0);var e = o.call(this) || this;return e.$u = { bgImgSkin: "bbbloding/a3a.jpg", topImgSkin: "bbbloding/a10a.jpg", btmImgSkin: "bbbloding/a4a.jpg", leftImgSkin: "bbbloding/a6a.jpg", rightImgSkin: "bbbloding/a8a.jpg", loadingBarBgSkin: "bbbloding/a13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.$v = { bgImgSkin: "bbbloding/a12a.jpg", topImgSkin: "bbbloding/a11a.jpg", btmImgSkin: "bbbloding/a5a.jpg", leftImgSkin: "bbbloding/a7a.jpg", rightImgSkin: "bbbloding/a9a.jpg", loadingBarBgSkin: "bbbloding/a15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, e.$w = 0, e.$x(1 == t ? e.$v : e.$u), e;
  }var o;e = t.$f || (t.$f = {}), i = t.$i.PanelEff, o = ui.$d, __extends($c, o), $c.prototype.initialize = function () {
    o.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.$y = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.$y && (this.$y.loadingType, this.loadingTips.color = "#f2ffb5"), this.$z = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
  }, $c.prototype.toAllProgress = function (t) {
    var e = this;if (-1 === t) return e.$w = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);var i;-2 !== t ? (e.$w < .9 ? e.$w += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : e.$w < 1 && (e.$w += 1e-4), .9999 < e.$w && (e.$w = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
      .9 < e.$w && toAllProgress(-1);
    })), t = 590 * (i = e.$w), e.$w = e.$w > i ? e.$w : i, e.loadingBar.width = t, t = e.loadingBar.x + t, e.loadingImg2.x = t - 15, 364 <= t ? (e.loadingImg1.visible = !0, e.loadingImg1.x = t - 202) : e.loadingImg1.visible = !1, e.percentageTips.text = (100 * i >> 0) + "%", e.$w < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress)) : Laya.timer.clear(this, this.toAllProgress);
  }, $c.prototype.toProgress = function (t, e, i) {
    var o = this;var n = 590 * (t = 1 < t ? 1 : t);o.$w = o.$w > t ? o.$w : t, o.loadingBar.width = n;n = o.loadingBar.x + n;o.loadingImg2.x = n - 15, 364 <= n ? (o.loadingImg1.visible = !0, o.loadingImg1.x = n - 202) : o.loadingImg1.visible = !1, o.percentageTips.text = (100 * t >> 0) + "%", o.loadingTips.text = e;for (var s = i - 1, r = 0; r < this.$z.length; r++) o.$z[r].skin = r < s ? "bbbloding/a20a.png" : s === r ? "bbbloding/a19a.png" : "bbbloding/a18a.png";
  }, $c.prototype.onOpened = function () {
    this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$y.lastVersion + "      \u7248\u672c\uff1a" + this.$y.wxVersion, this.showGetBtn();
  }, $c.prototype.close = function (t) {
    this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.$A), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.$B);
  }, $c.prototype.resetWinFun = function () {
    Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
  }, $c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.resetWinFun(), o.prototype.destroy.call(this, t);
  }, $c.prototype.showGetBtn = function () {
    this.$y.showGetBtn && 1 == this.$y.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "bbbloding/a1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.$B), this.$C(), this.$D(!0));
  }, $c.prototype.$B = function () {
    this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "bbbloding/a2a.png", this.$E(), this.$D(!1));
  }, $c.prototype.$x = function (t) {
    this.bgImg.skin = t.bgImgSkin, this.topImg.skin = t.topImgSkin, this.btmImg.skin = t.btmImgSkin, this.leftImg.skin = t.leftImgSkin, this.rightImg.skin = t.rightImgSkin, this.copyRightImg.bottom = t.copyRightImgBottom, this.processBox1.y = t.processBox1Y, this.processBox2.y = t.processBox2Y, this.loadingBarBg.skin = t.loadingBarBgSkin, this.loadingTips.fontSize = t.loadingTipsSize, this.getTipsBtn.visible = this.$y.showGetBtn && 1 == this.$y.showGetBtn, this.getTipsBtn.visible ? this.$C() : this.$E(), this.$D(this.getTipsBtn.visible);
  }, $c.prototype.$C = function () {
    this.$F || (this.$F = i.create(this.getTipsBtn, "bwxeff", 4, 0, 12), this.$F.pos(161, 106), this.$F.scale(1.14, 1.15)), i.play(this.$F);
  }, $c.prototype.$E = function () {
    this.$F && i.stop(this.$F);
  }, $c.prototype.$D = function (t) {
    Laya.timer.clear(this, this.$A), t ? (this.$G = 9, this.txtGetTm.visible = !0, this.$A(), Laya.timer.loop(1e3, this, this.$A)) : this.txtGetTm.visible = !1;
  }, $c.prototype.$A = function () {
    0 < this.$G ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.$G + "s)", this.$G--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.$A), this.$B());
  }, e.LoadingPanel = $c;
}(modules = modules || {}), function (t) {
  var e, i, o;function $c() {
    var t = n.call(this) || this;return t.$H = 0, t.$I = "multi_notice_key", t.$J = [], t.$K = 0, t;
  }var n;e = t.$f || (t.$f = {}), i = Laya.List, o = Laya.Event, n = ui.$e, __extends($c, n), $c.prototype.initialize = function () {
    n.prototype.initialize.call(this), ServerLoading.instance.preloadServer(), this.centerX = 0, this.centerY = 0, this.$y = Browser.window.PF_INFO, this.$L = new i(), this.$L.vScrollBarSkin = "", this.$L.itemRender = e.SelectLeftListItem, this.$L.top = 5, this.$L.repeatX = 1, this.$L.spaceY = 5, this.$L.width = this.leftListBox.width, this.$L.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.$L), this.$M = new i(), this.$M.vScrollBarSkin = "", this.$M.itemRender = e.SelectRightListItem, this.$M.top = 5, this.$M.repeatX = 1, this.$M.spaceY = 5, this.$M.width = this.rightListBox.width, this.$M.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.$M), this.$N = new i(), this.$N.hScrollBarSkin = "", this.$N.itemRender = e.NoticeItem, this.$N.repeatY = 1, this.$N.width = this.boxTab.width, this.$N.height = this.boxTab.height, this.boxTab.addChild(this.$N);var t = this.$y.loadingType;this.$O = 1 != t && (2 == t || 3 == t) ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.noticeBtn.visible = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
  }, $c.prototype.addEvt = function () {
    this.bgImg.on(Laya.Event.CLICK, this, this.$g), this.enterBtn.on(Laya.Event.CLICK, this, this.$P), this.selectServer.on(Laya.Event.CLICK, this, this.$Q), this.selectServer.on(Laya.Event.CLICK, this, this.$Q), this.closeBg.on(Laya.Event.CLICK, this, this.$R), this.noticeBtn.on(Laya.Event.CLICK, this, this.$S), this.noticeClose.on(Laya.Event.CLICK, this, this.$T), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.$U), this.mNoticeClose.on(Laya.Event.CLICK, this, this.$V), this.mNoticeContent.on(Laya.Event.MOUSE_DOWN, this, this.$W), this.$N.selectEnable = !0, this.$N.selectHandler = Laya.Handler.create(this, this.$X, null, !1);
  }, $c.prototype.rmEvts = function () {
    this.bgImg.off(Laya.Event.CLICK, this, this.$g), this.enterBtn.off(Laya.Event.CLICK, this, this.$P), this.selectServer.off(Laya.Event.CLICK, this, this.$Q), this.selectServer.off(Laya.Event.CLICK, this, this.$Q), this.closeBg.off(Laya.Event.CLICK, this, this.$R), this.noticeBtn.off(Laya.Event.CLICK, this, this.$S), this.noticeClose.off(Laya.Event.CLICK, this, this.$T), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.$U), this.mNoticeClose.off(Laya.Event.CLICK, this, this.$V), this.mNoticeContent.off(Laya.Event.MOUSE_DOWN, this, this.$W), this.$N.selectEnable = !1, this.$N.selectHandler = null;
  }, $c.prototype.onOpened = function () {
    this.$h = Date.now(), this.$Y = this.$y.selectedServer.server_id, this.$Z(this.$y.selectedServer), this.$L.dataSource = this.$y.groupList, this.$Q(), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$y.lastVersion + "      \u7248\u672c\uff1a" + this.$y.wxVersion, this.serverName.color = this.selServer.color = this.$O, req_multi_server_notice(4, this.$y.pkgName, this.$y.selectedServer.server_id, this.$$.bind(this));
  }, $c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), this.$L && (this.$L.removeSelf(), this.$L.destroy(), this.$L = null), this.$M && (this.$M.removeSelf(), this.$M.destroy(), this.$M = null), this.$N && (this.$N.removeSelf(), this.$N.destroy(), this.$N = null), n.prototype.destroy.call(this, t);
  }, $c.prototype.$g = function () {
    1e4 < Date.now() - this.$h && (this.$h -= 2e3, ServerLoading.instance.enterDefaultServer());
  }, $c.prototype.$R = function () {
    this.listBg.visible = !1;
  }, $c.prototype.$P = function () {
    this.$a(this.$y.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.$y.selectedServer, req_server_check_ban(0, this.$y.selectedServer.server_id));
  }, $c.prototype.$S = function () {
    this.$b();
  }, $c.prototype.$T = function () {
    this.noticeBg.visible = !1;
  }, $c.prototype.$U = function () {
    this.$H = this.noticeContent.mouseY, Laya.stage.on(o.MOUSE_MOVE, this, this.$cc), Laya.stage.on(o.MOUSE_UP, this, this.$dc), Laya.stage.on(o.MOUSE_OUT, this, this.$dc);
  }, $c.prototype.$cc = function () {
    var t = this.$H - this.noticeContent.mouseY;this.noticeContent.scrollY += t, this.$H = this.noticeContent.mouseY;
  }, $c.prototype.$dc = function () {
    Laya.stage.off(o.MOUSE_MOVE, this, this.$cc), Laya.stage.off(o.MOUSE_UP, this, this.$dc), Laya.stage.off(o.MOUSE_OUT, this, this.$dc);
  }, $c.prototype.$a = function (t) {
    return -1 == t.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != t.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
  }, $c.prototype.$Q = function () {
    this.$y.hasGroupReq ? this.listBg.visible = !0 : (this.$y.hasGroupReq = !0, req_server_group(0));
  }, $c.prototype.$$ = function (t) {
    console.log("onMultiNoticeCallback, param = ", t);var e = Date.now() / 1e3,
        i = localStorage.getItem(this.$I);if (this.$J = [], "success" == t.state) for (var o in t.data) {
      var n = t.data[o],
          s = e < n.end_time,
          r = 1 == n.pop_type,
          o = 2 == n.pop_type && n.key + "" != i;s && (r || o) && this.$J.push(n), o && localStorage.setItem(this.$I, n.key + "");
    }this.$J.sort(function (t, e) {
      return t.login_id - e.login_id;
    }), console.log("onMultiNoticeCallback, datas = ", this.$J), 0 < this.$J.length && this.$b();
  }, $c.prototype.preload = function () {}, $c.prototype.getStatusSrc = function (t) {
    var e = "";return 2 === t ? e = "bbblogin/b18b.png" : 1 === t ? e = "bbblogin/b19b.png" : -1 !== t && 0 !== t || (e = "bbblogin/b20b.png"), e;
  }, $c.prototype.$Z = function (t) {
    this.serverName.text = -1 === t.status ? t.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === t.status ? t.server_name + "(\u5f85\u5f00\u670d)" : t.server_name, this.serverName.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.$O, this.hotImage.skin = this.getStatusSrc(t.status), this.$y.cdn = t.cdn || "", this.$y.selectedServer = t, this.noticeBtn.visible = !0;
  }, $c.prototype.$ec = function (t) {
    this.showGroupList(t);
  }, $c.prototype.$fc = function (t) {
    this.$Z(t), this.listBg.visible = !1;
  }, $c.prototype.$gc = function (t) {
    this.noticeContent.text = t.data.content || "", this.noticeTitle.text = t.data.title || "\u6682\u65e0\u516c\u544a";
  }, $c.prototype.showGroupList = function (t) {
    if (void 0 === t && (t = 0), this.parent) {
      var e = this.$y.groupList;if (e && 0 !== e.length) {
        for (var i = e.length, o = 0; o < i; o++) e[o].callBack = this.$ec.bind(this), e[o].select = o == t, e[o].index = o;var n = (this.$L.array = e)[t].id;this.$y.serverList[n] ? this.showServerList(n) : this.$y.hasServerReq || (this.$y.hasServerReq = !0, -1 == n ? req_server_owner(0) : -2 == n ? req_recommend_server_list(0) : req_server_list(0, n));
      }
    }
  }, $c.prototype.showServerList = function (t) {
    if (this.parent && this.$y.serverList[t]) {
      for (var e = this.$y.serverList[t], i = e.length, o = 0; o < i; o++) e[o].callBack = this.$fc.bind(this);this.$M.array = e;
    }
  }, $c.prototype.$b = function () {
    if (this.$J) {
      this.$N.x = 2 < this.$J.length ? 0 : (this.boxTab.width - 274 * this.$J.length) / 2;for (var t = [], e = 0; e < this.$J.length; e++) {
        var i = this.$J[e];t.push([i, e == this.$N.selectedIndex]);
      }0 < (this.$N.dataSource = t).length ? (this.$N.selectedIndex = 0, this.$N.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = "");
    }this.mNoticeBg.visible = !0;
  }, $c.prototype.$V = function () {
    this.mNoticeBg.visible = !1;
  }, $c.prototype.$X = function () {
    if (this.$N.dataSource) {
      for (var t, e = 0; e < this.$N.dataSource.length; e++) {
        var i = this.$N.dataSource[e];i[1] = e == this.$N.selectedIndex, e == this.$N.selectedIndex && (t = i[0]);
      }this.mNoticeTitle.text = t && t.title ? t.title : "", this.mNoticeContent.text = t && t.content ? t.content : "";
    }
  }, $c.prototype.$W = function () {
    this.$K = this.mNoticeContent.mouseY, Laya.stage.on(o.MOUSE_MOVE, this, this.$hc), Laya.stage.on(o.MOUSE_UP, this, this.$ic), Laya.stage.on(o.MOUSE_OUT, this, this.$ic);
  }, $c.prototype.$hc = function () {
    var t = this.$K - this.mNoticeContent.mouseY;this.mNoticeContent.scrollY += t, this.$K = this.mNoticeContent.mouseY;
  }, $c.prototype.$ic = function () {
    Laya.stage.off(o.MOUSE_MOVE, this, this.$hc), Laya.stage.off(o.MOUSE_UP, this, this.$ic), Laya.stage.off(o.MOUSE_OUT, this, this.$ic);
  }, e.SelectServerPanel = $c;
}(modules = modules || {});var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.$f.AuthorizationPanel,
    LoadingPanel = modules.$f.LoadingPanel,
    SelectServerPanel = modules.$f.SelectServerPanel,
    ServerLoading = function () {
  function $k(t) {
    this.m_loadingRes = ["bbbloding/a13a.png", "bbbloding/a15a.png", "bbbloding/a14a.png", "bbbloding/a16a.png", "bbbloding/a17a.png", "bbbloding/a18a.png", "bbbloding/a19a.png", "bbbloding/a20a.png", "bwxeff/b100b.png", "bwxeff/b101b.png", "bwxeff/b102b.png", "bwxeff/b103b.png", "bwxeff/b104b.png", "bbbloding/a3a.jpg", "bbbloding/a12a.jpg", "bbbloding/a1a.png", "bbbloding/a2a.png", "bbbloding/a4a.jpg", "bbbloding/a6a.jpg", "bbbloding/a8a.jpg", "bbbloding/a10a.jpg", "bbbloding/a5a.jpg", "bbbloding/a7a.jpg", "bbbloding/a9a.jpg", "bbbloding/a11a.jpg"], this.m_serverRes = ["bbblogin/b10b.png", "bbblogin/b11b.png", "bbblogin/b12b.png", "bbblogin/b13b.png", "bbblogin/b14b.png", "bbblogin/b15b.png", "bbblogin/b16b.png", "bbblogin/b17b.png", "bbblogin/b18b.png", "bbblogin/b19b.png", "bbblogin/b20b.png", "bbblogin/b21b.png", "bbblogin/b2b.jpg", "bbblogin/b3b.jpg", "bbblogin/b4b.jpg", "bbblogin/b5b.jpg", "bbblogin/b6b.jpg", "bbblogin/b1b.png", "bbblogin/b8b.png", "bbblogin/b9b.png", "bbblogin/b24b.png", "bbblogin/b25b.png", "bbblogin/b23b.png", "bbblogin/b26b.png"], this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.$jc = !1, this.$kc = "", $k.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var e = Laya.AtlasResourceManager;e.maxTextureCount = 4, e.atlasTextureWidth = e.atlasTextureHeight = 1024, e._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.$lc.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = $k.instance.requestWeb, Browser.window.imgMgrLoad = $k.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.$lc();
  }return $k.prototype.changeServerLoading = function (t) {
    $k.instance.m_layer.visible = t;
  }, $k.prototype.openAuthor = function () {
    $k.instance.m_author || ($k.instance.m_author = new AuthorizationPanel()), $k.instance.m_author.parent || $k.instance.m_layer.addChild($k.instance.m_author), $k.instance.$mc();
  }, $k.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, $k.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, $k.prototype.openServer = function () {
    for (var t = function () {
      $k.instance.m_server || ($k.instance.m_server = new SelectServerPanel()), $k.instance.m_server.parent || $k.instance.m_layer.addChild($k.instance.m_server), $k.instance.$mc();
    }, e = !0, i = 0, o = this.m_serverRes; i < o.length; i++) {
      var n = o[i];if (null == Laya.Loader.getRes(n)) {
        e = !1;break;
      }
    }e ? t() : Laya.loader.load(this.m_serverRes, Handler.create(this, t));
  }, $k.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, $k.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, $k.prototype.openLoading = function (t) {
    void 0 === t && (t = 0), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      $k.instance.m_loading || ($k.instance.m_loading = new LoadingPanel(t)), $k.instance.m_loading.parent || $k.instance.m_layer.addChild($k.instance.m_loading), $k.instance.$mc();
    }));
  }, $k.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var t = 0, e = this.m_serverRes; t < e.length; t++) {
      var i = e[t];Laya.Loader.clearCache($k.instance, i), Laya.Loader.clearRes(i, !0);
    }for (var o = 0, n = this.m_loadingRes; o < n.length; o++) i = n[o], Laya.Loader.clearCache($k.instance, i), Laya.Loader.clearRes(i, !0);this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, $k.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && $k.instance.m_loading.showGetBtn();
  }, $k.prototype.enterDefaultServer = function () {
    var t = Browser.window.PF_INFO.selectedServer;this.$jc || -1 == t.status || 0 == t.status || (this.$jc = !0, Browser.window.PF_INFO.selectedServer = t, req_server_check_ban(0, t.server_id));
  }, $k.prototype.sendRecord = function () {
    var t = "";t += "newRegister=" + Browser.window.PF_INFO.newRegister, t += ", isPrelodServer=" + this.m_isPrelodServer, t += ", SelectServerPanel=" + (null != $k.instance.m_server), t += ", isPrelodLoading=" + this.m_isPrelodLoading, t += ", LoadingPanel=" + (null != $k.instance.m_loading), t += ", resMgrLoad=" + (Browser.window.resMgrLoad == $k.instance.requestWeb), t += ", imgMgrLoad=" + (Browser.window.imgMgrLoad == $k.instance.requestWeb), t += ", errUrls=" + $k.instance.$kc;for (var e = 0, i = this.m_serverRes; e < i.length; e++) t += ", " + (s = i[e]) + "=" + (null != Laya.Loader.getRes(s));for (var o = 0, n = this.m_loadingRes; o < n.length; o++) {
      var s;t += ", " + (s = n[o]) + "=" + (null != Laya.Loader.getRes(s));
    }var r = Browser.window.PF_INFO.selectedServer;r && (t += ", server_status=" + r.status, t += ", server_id=" + r.server_id, t += ", server_name=" + r.server_name);r = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: t });console.error(r), this.$nc && this.$nc == t || (this.$nc = t, reqRecordError(r));
  }, $k.prototype.$oc = function () {
    var t = Laya.stage,
        e = Math.floor(t.width),
        i = Math.floor(t.height);i / e < 1.7777778 ? (this.viewW = Math.floor(e / (i / 1280)), this.viewH = 1280, this.viewS = i / 1280) : (this.viewW = 720, this.viewH = Math.floor(i / (e / 720)), this.viewS = e / 720);e = Math.floor(t.width), t = Math.floor(t.height);t / e < 1.7777778 ? (this.viewW = Math.floor(e / (t / 1280)), this.viewH = 1280, this.viewS = t / 1280) : (this.viewW = 720, this.viewH = Math.floor(t / (e / 720)), this.viewS = e / 720), this.$mc();
  }, $k.prototype.$mc = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, $k.prototype.$lc = function () {
    if (Input.isInputting && Browser.onMobile) {
      var t = parseInt(Input.inputContainer.style.top.replace("px", "")),
          e = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS,
          i = Browser.clientWidth / Render.canvas.width;return 0 < (t = Browser.clientHeight - e * i - t) && (t = 0), void (Browser.container.style.top = t + "px");
    }Browser.container.style.top = "0px", e = (e = Math.floor(Browser.width)) + 1 & 2147483646, i = (i = Math.floor(Browser.height)) + 1 & 2147483646;t = Laya.stage;3 == ENV || i < e ? (t.scaleMode = Laya.Stage.SCALE_NOSCALE, t.width = e, t.height = i) : (t.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, t.width = 840, t.height = Math.floor(i / (e / 840)) + 1 & 2147483646), this.$oc();
  }, $k.prototype.requestWeb = function (t, e) {
    function $e() {
      i.onload = null, i.onerror = null;
    }var i,
        o = t;(i = new Browser.window.Image()).onload = function () {
      $e(), e(o, 200, i);
    }, i.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", o), $k.instance.$kc += o + "|", $e(), e(o, 404, null);
    }, i.src = o, -1 == $k.instance.m_serverRes.indexOf(o) && -1 == $k.instance.m_loadingRes.indexOf(o) || Laya.Loader.keepCache($k.instance, o);
  }, $k.prototype.$pc = function (t, e) {
    return -1 != t.indexOf(e, t.length - e.length);
  }, $k;
}();!function (t) {
  function $c() {
    var t = e.call(this) || this;return t.$qc = "#72441d", t.$rc = "#263d7d", t.width = 274, t.height = 59, t.$sc = new Laya.Image(), t.addChild(t.$sc), t.$tc = new Laya.Label(), t.$tc.fontSize = 30, t.$tc.color = t.$rc, t.addChild(t.$tc), t.$tc.centerX = 0, t.$tc.centerY = 0, t;
  }var e;t = t.$f || (t.$f = {}), e = Laya.View, __extends($c, e), $c.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.$y = Browser.window.PF_INFO, this.$y.loadingType, this.addEvt();
  }, Object.defineProperty($c.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), $c.prototype.setData = function (t) {
    this.$uc = t[0], this.$vc = t[1], this.$tc.text = this.$uc.title, this.$tc.color = this.$vc ? this.$qc : this.$rc, this.$sc.skin = this.$vc ? "bbblogin/b25b.png" : "bbblogin/b24b.png";
  }, $c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, $c.prototype.addEvt = function () {}, $c.prototype.rmEvts = function () {}, t.NoticeItem = $c;
}(modules = modules || {}), function (t) {
  function $c() {
    var t = e.call(this) || this;return t.width = 192, t.height = 70, t.$sc = new Laya.Image(), t.addChild(t.$sc), t.$tc = new Laya.Label(), t.$tc.fontSize = 30, t.$tc.color = t.$O, t.addChild(t.$tc), t.$tc.centerX = 0, t.$tc.centerY = 0, t;
  }var e;t = t.$f || (t.$f = {}), e = Laya.View, __extends($c, e), $c.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.$y = Browser.window.PF_INFO;var t = this.$y.loadingType;this.$O = 1 != t && 2 != t && 3 == t ? "#763042" : "#263d7d", this.addEvt();
  }, Object.defineProperty($c.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), $c.prototype.setData = function (t) {
    this.$uc = t, this.$tc.text = t.name, this.$sc.skin = t.select ? "bbblogin/b14b.png" : "bbblogin/b15b.png";
  }, $c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, $c.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $c.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $c.prototype.clkHdler = function () {
    this.$uc && this.$uc.callBack && this.$uc.callBack(this.$uc.index);
  }, t.SelectLeftListItem = $c;
}(modules = modules || {}), function (t) {
  function $c() {
    var t = e.call(this) || this;return t.$sc = new Laya.Image("bbblogin/b16b.png"), t.$tc = new Laya.Label(), t.$tc.fontSize = 30, t.$tc.color = t.$O, t.addChild(t.$sc), t.$wc = new Laya.Image(), t.addChild(t.$wc), t.width = 358, t.height = 70, t.addChild(t.$tc), t.$wc.centerY = 0, t.$wc.x = 18, t.$tc.x = 80, t.$tc.centerY = 0, t.$sc.graphics.drawRect(0, 0, t.width, t.height, "#00sasd"), t;
  }var e;t = t.$f || (t.$f = {}), e = Laya.View, __extends($c, e), $c.prototype.initialize = function () {
    e.prototype.initialize.call(this), this.$y = Browser.window.PF_INFO;var t = this.$y.loadingType;this.$O = 1 != t && 2 != t && 3 == t ? "#763042" : "#34267d", this.addEvt();
  }, Object.defineProperty($c.prototype, "dataSource", { set: function (t) {
      t && this.setData(t);
    }, enumerable: !0, configurable: !0 }), $c.prototype.setData = function (t) {
    this.$uc = t, this.$tc.color = -1 === t.status ? "#d50000" : 0 === t.status ? "#49575a" : this.$O, this.$tc.text = -1 === t.status ? t.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === t.status ? t.server_name + "(\u5f85\u5f00\u670d)" : t.server_name, this.$wc.skin = this.getStatusSrc(t.status);
  }, $c.prototype.destroy = function (t) {
    void 0 === t && (t = !0), this.rmEvts(), e.prototype.destroy.call(this, t);
  }, $c.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $c.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $c.prototype.clkHdler = function () {
    this.$uc && this.$uc.callBack && this.$uc.callBack(this.$uc);
  }, $c.prototype.getStatusSrc = function (t) {
    var e = "";return 2 === t ? e = "bbblogin/b18b.png" : 1 === t ? e = "bbblogin/b19b.png" : -1 !== t && 0 !== t || (e = "bbblogin/b20b.png"), e;
  }, t.SelectRightListItem = $c;
}(modules = modules || {}), window.ServerLoading = ServerLoading;