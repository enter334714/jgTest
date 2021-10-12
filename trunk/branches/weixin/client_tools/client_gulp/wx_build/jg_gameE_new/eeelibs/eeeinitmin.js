"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
    e.__proto__ = t;
  } || function (e, t) {
    for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
  };return function (e, t) {
    function $e() {
      this.constructor = e;
    }i(e, t), e.prototype = null === t ? Object.create(t) : ($e.prototype = t.prototype, new $e());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (e) {
  var t = (__extends($d, i = View), $d.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(e.$c.uiView);
  }, $d.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "eeelogin/e2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "eeelogin/e6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "eeelogin/e3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "eeelogin/e4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "eeelogin/e5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] }, $d);function $d() {
    return i.call(this) || this;
  }var i;e.$c = t;
}(ui = ui || {}), function (e) {
  var t = (__extends($d, i = View), $d.prototype.createChildren = function () {
    i.prototype.createChildren.call(this), this.createView(e.$d.uiView);
  }, $d.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "eeelogin/e1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "eeeloding/e13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "eeeloding/e14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "eeeloding/e16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "eeeloding/e17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "eeeloding/e20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "eeeloding/e19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "eeeloding/e18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "eeeloding/e18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "eeeloding/e1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", right: 20, height: 32, fontSize: 24, color: "#163274", bold: !1, align: "right" } }] }, $d);function $d() {
    return i.call(this) || this;
  }var i;e.$d = t;
}(ui = ui || {}), function (e) {
  var t = (__extends($d, i = View), $d.prototype.createChildren = function () {
    View.regComponent("Text", laya.display.Text), i.prototype.createChildren.call(this), this.createView(e.$e.uiView);
  }, $d.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "eeelogin/e2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "eeelogin/e6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "eeelogin/e3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "eeelogin/e4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "eeelogin/e5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "eeelogin/e21b.png", centerX: 0 } }, { type: "Image", props: { y: 930, x: 162, var: "hotImage", skin: "eeelogin/e18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "eeelogin/e1b.png", centerX: 0, bottom: 10 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "eeelogin/e12b.png", name: "enterBtn", centerX: 0 } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", right: 20, height: 32, fontSize: 24, color: "#163274", bold: !1, align: "right" } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "eeelogin/e11b.png" } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "eeelogin/e8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "eeelogin/e10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { y: 113, x: 33, visible: !1, var: "mNoticeBg", skin: "eeelogin/e26b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "eeelogin/e10b.png" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "mNoticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 733, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "eeelogin/e9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "eeelogin/e17b.png" } }] }] }, $d);function $d() {
    return i.call(this) || this;
  }var i;e.$e = t;
}(ui = ui || {}), function (e) {
  function $c() {
    return t.call(this) || this;
  }var t;e = e.$f || (e.$f = {}), t = ui.$c, __extends($c, t), $c.prototype.initialize = function () {
    t.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
  }, $c.prototype.addEvt = function () {
    this.on(Laya.Event.CLICK, this, this.$g);
  }, $c.prototype.rmEvts = function () {
    this.off(Laya.Event.CLICK, this, this.$g);
  }, $c.prototype.onOpened = function () {
    this.$h = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
  }, $c.prototype.destroy = function (e) {
    void 0 === e && (e = !0), this.rmEvts(), t.prototype.destroy.call(this, e);
  }, $c.prototype.$g = function () {
    1e4 < Date.now() - this.$h && (this.$h -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
  }, e.AuthorizationPanel = $c;
}(modules = modules || {}), function (e) {
  var t, i, o, s;function $k() {
    var e = n.call(this) || this;return e.$j = new o(), e.addChild(e.$j), e.$k = null, e.$l = [], e.$m = !1, e.$n = 0, e.$o = !0, e.$p = 6, e.$q = !1, e.on(i.DISPLAY, e, e.$r), e.on(i.UNDISPLAY, e, e.$s), e;
  }var n;t = e.$i || (e.$i = {}), i = Laya.Event, o = Laya.Image, e = Laya.Component, s = Laya.Loader, __extends($k, n = e), $k.create = function (e, t, i, o, n, s, r) {
    void 0 === o && (o = 0), void 0 === n && (n = 6), void 0 === s && (s = !0), void 0 === r && (r = !1);var a = new $k();return a.skin(t, i, o), a.durFrm = n, a.loop = s, a.atHide = r, e && e.addChild(a), a;
  }, $k.play = function (e) {
    e && (e.visible = !0, e.play());
  }, $k.stop = function (e) {
    e && (e.visible = !1, e.stop());
  }, $k.prototype.destroy = function (e) {
    Laya.timer.clear(this, this.$t), this.off(i.DISPLAY, this, this.$r), this.off(i.UNDISPLAY, this, this.$s), n.prototype.destroy.call(this, e);
  }, $k.prototype.$r = function () {}, $k.prototype.$s = function () {}, $k.prototype.skin = function (e, t, i) {
    if (this.$k != e) {
      this.$k = e, this.$l = [];for (var o = 0, n = i; n <= t; n++) this.$l[o++] = e + "/" + n + ".png";i = s.getRes(this.$l[0]);i && (this.width = i.sourceWidth, this.height = i.sourceHeight), this.$t();
    }
  }, Object.defineProperty($k.prototype, "atHide", { get: function () {
      return this.$q;
    }, set: function (e) {
      this.$q = e;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty($k.prototype, "durFrm", { set: function (e) {
      this.$p != e && (this.$p = e, this.$m && (Laya.timer.clear(this, this.$t), Laya.timer.loop(this.$p * (1e3 / 60), this, this.$t)));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty($k.prototype, "loop", { set: function (e) {
      this.$o = e;
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
  }, t.PanelEff = $k;
}(modules = modules || {}), function (e) {
  var t, i;function $c(e) {
    void 0 === e && (e = 0);var t = o.call(this) || this;return t.$u = { bgImgSkin: "eeeloding/e3a.jpg", topImgSkin: "eeeloding/e10a.jpg", btmImgSkin: "eeeloding/e4a.jpg", leftImgSkin: "eeeloding/e6a.jpg", rightImgSkin: "eeeloding/e8a.jpg", loadingBarBgSkin: "eeeloding/e13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, t.$v = { bgImgSkin: "eeeloding/e12a.jpg", topImgSkin: "eeeloding/e11a.jpg", btmImgSkin: "eeeloding/e5a.jpg", leftImgSkin: "eeeloding/e7a.jpg", rightImgSkin: "eeeloding/e9a.jpg", loadingBarBgSkin: "eeeloding/e15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, t.$w = 0, t.$x(1 == e ? t.$v : t.$u), t;
  }var o;t = e.$f || (e.$f = {}), i = e.$i.PanelEff, o = ui.$d, __extends($c, o), $c.prototype.initialize = function () {
    o.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.$y = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.$y && (this.$y.loadingType, this.loadingTips.color = "#f2ffb5"), this.$z = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
  }, $c.prototype.toAllProgress = function (e) {
    var t = this;if (-1 === e) return t.$w = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);var i;-2 !== e ? (t.$w < .9 ? t.$w += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : t.$w < 1 && (t.$w += 1e-4), .9999 < t.$w && (t.$w = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
      .9 < t.$w && toAllProgress(-1);
    })), e = 590 * (i = t.$w), t.$w = t.$w > i ? t.$w : i, t.loadingBar.width = e, e = t.loadingBar.x + e, t.loadingImg2.x = e - 15, 364 <= e ? (t.loadingImg1.visible = !0, t.loadingImg1.x = e - 202) : t.loadingImg1.visible = !1, t.percentageTips.text = (100 * i >> 0) + "%", t.$w < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress)) : Laya.timer.clear(this, this.toAllProgress);
  }, $c.prototype.toProgress = function (e, t, i) {
    var o = this;var n = 590 * (e = 1 < e ? 1 : e);o.$w = o.$w > e ? o.$w : e, o.loadingBar.width = n;n = o.loadingBar.x + n;o.loadingImg2.x = n - 15, 364 <= n ? (o.loadingImg1.visible = !0, o.loadingImg1.x = n - 202) : o.loadingImg1.visible = !1, o.percentageTips.text = (100 * e >> 0) + "%", o.loadingTips.text = t;for (var s = i - 1, r = 0; r < this.$z.length; r++) o.$z[r].skin = r < s ? "eeeloding/e20a.png" : s === r ? "eeeloding/e19a.png" : "eeeloding/e18a.png";
  }, $c.prototype.onOpened = function () {
    this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$y.lastVersion + "      \u7248\u672c\uff1a" + this.$y.wxVersion, this.showGetBtn();
  }, $c.prototype.close = function (e) {
    this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.$A), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.$B);
  }, $c.prototype.resetWinFun = function () {
    Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
  }, $c.prototype.destroy = function (e) {
    void 0 === e && (e = !0), this.resetWinFun(), o.prototype.destroy.call(this, e);
  }, $c.prototype.showGetBtn = function () {
    this.$y.showGetBtn && 1 == this.$y.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "eeeloding/e1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.$B), this.$C(), this.$D(!0));
  }, $c.prototype.$B = function () {
    this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "eeeloding/e2a.png", this.$E(), this.$D(!1));
  }, $c.prototype.$x = function (e) {
    this.bgImg.skin = e.bgImgSkin, this.topImg.skin = e.topImgSkin, this.btmImg.skin = e.btmImgSkin, this.leftImg.skin = e.leftImgSkin, this.rightImg.skin = e.rightImgSkin, this.copyRightImg.bottom = e.copyRightImgBottom, this.processBox1.y = e.processBox1Y, this.processBox2.y = e.processBox2Y, this.loadingBarBg.skin = e.loadingBarBgSkin, this.loadingTips.fontSize = e.loadingTipsSize, this.getTipsBtn.visible = this.$y.showGetBtn && 1 == this.$y.showGetBtn, this.getTipsBtn.visible ? this.$C() : this.$E(), this.$D(this.getTipsBtn.visible);
  }, $c.prototype.$C = function () {
    this.$F || (this.$F = i.create(this.getTipsBtn, "eewxeff", 4, 0, 12), this.$F.pos(161, 106), this.$F.scale(1.14, 1.15)), i.play(this.$F);
  }, $c.prototype.$E = function () {
    this.$F && i.stop(this.$F);
  }, $c.prototype.$D = function (e) {
    Laya.timer.clear(this, this.$A), e ? (this.$G = 9, this.txtGetTm.visible = !0, this.$A(), Laya.timer.loop(1e3, this, this.$A)) : this.txtGetTm.visible = !1;
  }, $c.prototype.$A = function () {
    0 < this.$G ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.$G + "s)", this.$G--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.$A), this.$B());
  }, t.LoadingPanel = $c;
}(modules = modules || {}), function (e) {
  var t, i, o;function $c() {
    var e = n.call(this) || this;return e.$H = 0, e.$I = "multi_notice_key", e.$J = [], e.$K = 0, e;
  }var n;t = e.$f || (e.$f = {}), i = Laya.List, o = Laya.Event, n = ui.$e, __extends($c, n), $c.prototype.initialize = function () {
    n.prototype.initialize.call(this), ServerLoading.instance.preloadServer(), this.centerX = 0, this.centerY = 0, this.$y = Browser.window.PF_INFO, this.$L = new i(), this.$L.vScrollBarSkin = "", this.$L.itemRender = t.SelectLeftListItem, this.$L.top = 5, this.$L.repeatX = 1, this.$L.spaceY = 5, this.$L.width = this.leftListBox.width, this.$L.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.$L), this.$M = new i(), this.$M.vScrollBarSkin = "", this.$M.itemRender = t.SelectRightListItem, this.$M.top = 5, this.$M.repeatX = 1, this.$M.spaceY = 5, this.$M.width = this.rightListBox.width, this.$M.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.$M), this.$N = new i(), this.$N.hScrollBarSkin = "", this.$N.itemRender = t.NoticeItem, this.$N.repeatY = 1, this.$N.width = this.boxTab.width, this.$N.height = this.boxTab.height, this.boxTab.addChild(this.$N);var e = this.$y.loadingType;this.$O = 1 != e && (2 == e || 3 == e) ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.noticeBtn.visible = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
  }, $c.prototype.addEvt = function () {
    this.bgImg.on(Laya.Event.CLICK, this, this.$g), this.enterBtn.on(Laya.Event.CLICK, this, this.$P), this.selectServer.on(Laya.Event.CLICK, this, this.$Q), this.selectServer.on(Laya.Event.CLICK, this, this.$Q), this.closeBg.on(Laya.Event.CLICK, this, this.$R), this.noticeBtn.on(Laya.Event.CLICK, this, this.$S), this.noticeClose.on(Laya.Event.CLICK, this, this.$T), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.$U), this.mNoticeClose.on(Laya.Event.CLICK, this, this.$V), this.mNoticeContent.on(Laya.Event.MOUSE_DOWN, this, this.$W), this.$N.selectEnable = !0, this.$N.selectHandler = Laya.Handler.create(this, this.$X, null, !1);
  }, $c.prototype.rmEvts = function () {
    this.bgImg.off(Laya.Event.CLICK, this, this.$g), this.enterBtn.off(Laya.Event.CLICK, this, this.$P), this.selectServer.off(Laya.Event.CLICK, this, this.$Q), this.selectServer.off(Laya.Event.CLICK, this, this.$Q), this.closeBg.off(Laya.Event.CLICK, this, this.$R), this.noticeBtn.off(Laya.Event.CLICK, this, this.$S), this.noticeClose.off(Laya.Event.CLICK, this, this.$T), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.$U), this.mNoticeClose.off(Laya.Event.CLICK, this, this.$V), this.mNoticeContent.off(Laya.Event.MOUSE_DOWN, this, this.$W), this.$N.selectEnable = !1, this.$N.selectHandler = null;
  }, $c.prototype.onOpened = function () {
    this.$h = Date.now(), this.$Y = this.$y.selectedServer.server_id, this.$Z(this.$y.selectedServer), this.$L.dataSource = this.$y.groupList, this.$Q(), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$y.lastVersion + "      \u7248\u672c\uff1a" + this.$y.wxVersion, this.serverName.color = this.selServer.color = this.$O, req_multi_server_notice(4, this.$y.pkgName, this.$y.selectedServer.server_id, this.$$.bind(this));
  }, $c.prototype.destroy = function (e) {
    void 0 === e && (e = !0), this.rmEvts(), this.$L && (this.$L.removeSelf(), this.$L.destroy(), this.$L = null), this.$M && (this.$M.removeSelf(), this.$M.destroy(), this.$M = null), this.$N && (this.$N.removeSelf(), this.$N.destroy(), this.$N = null), n.prototype.destroy.call(this, e);
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
    var e = this.$H - this.noticeContent.mouseY;this.noticeContent.scrollY += e, this.$H = this.noticeContent.mouseY;
  }, $c.prototype.$dc = function () {
    Laya.stage.off(o.MOUSE_MOVE, this, this.$cc), Laya.stage.off(o.MOUSE_UP, this, this.$dc), Laya.stage.off(o.MOUSE_OUT, this, this.$dc);
  }, $c.prototype.$a = function (e) {
    return -1 == e.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != e.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
  }, $c.prototype.$Q = function () {
    this.$y.hasGroupReq ? this.listBg.visible = !0 : (this.$y.hasGroupReq = !0, req_server_group(0));
  }, $c.prototype.$$ = function (e) {
    console.log("onMultiNoticeCallback, param = ", e);var t = Date.now() / 1e3,
        i = localStorage.getItem(this.$I);if (this.$J = [], "success" == e.state) for (var o in e.data) {
      var n = e.data[o],
          s = t < n.end_time,
          r = 1 == n.pop_type,
          o = 2 == n.pop_type && n.key + "" != i;s && (r || o) && this.$J.push(n), o && localStorage.setItem(this.$I, n.key + "");
    }this.$J.sort(function (e, t) {
      return e.login_id - t.login_id;
    }), console.log("onMultiNoticeCallback, datas = ", this.$J), 0 < this.$J.length && this.$b();
  }, $c.prototype.preload = function () {}, $c.prototype.getStatusSrc = function (e) {
    var t = "";return 2 === e ? t = "eeelogin/e18b.png" : 1 === e ? t = "eeelogin/e19b.png" : -1 !== e && 0 !== e || (t = "eeelogin/e20b.png"), t;
  }, $c.prototype.$Z = function (e) {
    this.serverName.text = -1 === e.status ? e.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === e.status ? e.server_name + "(\u5f85\u5f00\u670d)" : e.server_name, this.serverName.color = -1 === e.status ? "#d50000" : 0 === e.status ? "#49575a" : this.$O, this.hotImage.skin = this.getStatusSrc(e.status), this.$y.cdn = e.cdn || "", this.$y.selectedServer = e, this.noticeBtn.visible = !0;
  }, $c.prototype.$ec = function (e) {
    this.showGroupList(e);
  }, $c.prototype.$fc = function (e) {
    this.$Z(e), this.listBg.visible = !1;
  }, $c.prototype.$gc = function (e) {
    this.noticeContent.text = e.data.content || "", this.noticeTitle.text = e.data.title || "\u6682\u65e0\u516c\u544a";
  }, $c.prototype.showGroupList = function (e) {
    if (void 0 === e && (e = 0), this.parent) {
      var t = this.$y.groupList;if (t && 0 !== t.length) {
        for (var i = t.length, o = 0; o < i; o++) t[o].callBack = this.$ec.bind(this), t[o].select = o == e, t[o].index = o;var n = (this.$L.array = t)[e].id;this.$y.serverList[n] ? this.showServerList(n) : this.$y.hasServerReq || (this.$y.hasServerReq = !0, -1 == n ? req_server_owner(0) : -2 == n ? req_recommend_server_list(0) : req_server_list(0, n));
      }
    }
  }, $c.prototype.showServerList = function (e) {
    if (this.parent && this.$y.serverList[e]) {
      for (var t = this.$y.serverList[e], i = t.length, o = 0; o < i; o++) t[o].callBack = this.$fc.bind(this);this.$M.array = t;
    }
  }, $c.prototype.$b = function () {
    if (this.$J) {
      this.$N.x = 2 < this.$J.length ? 0 : (this.boxTab.width - 274 * this.$J.length) / 2;for (var e = [], t = 0; t < this.$J.length; t++) {
        var i = this.$J[t];e.push([i, t == this.$N.selectedIndex]);
      }0 < (this.$N.dataSource = e).length ? (this.$N.selectedIndex = 0, this.$N.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = "");
    }this.mNoticeBg.visible = !0;
  }, $c.prototype.$V = function () {
    this.mNoticeBg.visible = !1;
  }, $c.prototype.$X = function () {
    if (this.$N.dataSource) {
      for (var e, t = 0; t < this.$N.dataSource.length; t++) {
        var i = this.$N.dataSource[t];i[1] = t == this.$N.selectedIndex, t == this.$N.selectedIndex && (e = i[0]);
      }this.mNoticeTitle.text = e && e.title ? e.title : "", this.mNoticeContent.text = e && e.content ? e.content : "";
    }
  }, $c.prototype.$W = function () {
    this.$K = this.mNoticeContent.mouseY, Laya.stage.on(o.MOUSE_MOVE, this, this.$hc), Laya.stage.on(o.MOUSE_UP, this, this.$ic), Laya.stage.on(o.MOUSE_OUT, this, this.$ic);
  }, $c.prototype.$hc = function () {
    var e = this.$K - this.mNoticeContent.mouseY;this.mNoticeContent.scrollY += e, this.$K = this.mNoticeContent.mouseY;
  }, $c.prototype.$ic = function () {
    Laya.stage.off(o.MOUSE_MOVE, this, this.$hc), Laya.stage.off(o.MOUSE_UP, this, this.$ic), Laya.stage.off(o.MOUSE_OUT, this, this.$ic);
  }, t.SelectServerPanel = $c;
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
  function $k(e) {
    this.m_loadingRes = ["eeeloding/e13a.png", "eeeloding/e15a.png", "eeeloding/e14a.png", "eeeloding/e16a.png", "eeeloding/e17a.png", "eeeloding/e18a.png", "eeeloding/e19a.png", "eeeloding/e20a.png", "eewxeff/e1c.png", "eewxeff/e2c.png", "eewxeff/e3c.png", "eewxeff/e4c.png", "eewxeff/e5c.png", "eeeloding/e3a.jpg", "eeeloding/e12a.jpg", "eeeloding/e1a.png", "eeeloding/e2a.png", "eeeloding/e4a.jpg", "eeeloding/e6a.jpg", "eeeloding/e8a.jpg", "eeeloding/e10a.jpg", "eeeloding/e5a.jpg", "eeeloding/e7a.jpg", "eeeloding/e9a.jpg", "eeeloding/e11a.jpg"], this.m_serverRes = ["eeelogin/e10b.png", "eeelogin/e11b.png", "eeelogin/e12b.png", "eeelogin/e13b.png", "eeelogin/e14b.png", "eeelogin/e15b.png", "eeelogin/e16b.png", "eeelogin/e17b.png", "eeelogin/e18b.png", "eeelogin/e19b.png", "eeelogin/e20b.png", "eeelogin/e21b.png", "eeelogin/e2b.jpg", "eeelogin/e3b.jpg", "eeelogin/e4b.jpg", "eeelogin/e5b.jpg", "eeelogin/e6b.jpg", "eeelogin/e1b.png", "eeelogin/e8b.png", "eeelogin/e9b.png", "eeelogin/e24b.png", "eeelogin/e25b.png", "eeelogin/e23b.png", "eeelogin/e26b.png"], this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.$jc = !1, this.$kc = "", $k.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var t = Laya.AtlasResourceManager;t.maxTextureCount = 4, t.atlasTextureWidth = t.atlasTextureHeight = 1024, t._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.$lc.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = $k.instance.requestWeb, Browser.window.imgMgrLoad = $k.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.$lc();
  }return $k.prototype.changeServerLoading = function (e) {
    $k.instance.m_layer.visible = e;
  }, $k.prototype.openAuthor = function () {
    $k.instance.m_author || ($k.instance.m_author = new AuthorizationPanel()), $k.instance.m_author.parent || $k.instance.m_layer.addChild($k.instance.m_author), $k.instance.$mc();
  }, $k.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, $k.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, $k.prototype.openServer = function () {
    for (var e = function () {
      $k.instance.m_server || ($k.instance.m_server = new SelectServerPanel()), $k.instance.m_server.parent || $k.instance.m_layer.addChild($k.instance.m_server), $k.instance.$mc();
    }, t = !0, i = 0, o = this.m_serverRes; i < o.length; i++) {
      var n = o[i];if (null == Laya.Loader.getRes(n)) {
        t = !1;break;
      }
    }t ? e() : Laya.loader.load(this.m_serverRes, Handler.create(this, e));
  }, $k.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, $k.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, $k.prototype.openLoading = function (e) {
    void 0 === e && (e = 0), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      $k.instance.m_loading || ($k.instance.m_loading = new LoadingPanel(e)), $k.instance.m_loading.parent || $k.instance.m_layer.addChild($k.instance.m_loading), $k.instance.$mc();
    }));
  }, $k.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var e = 0, t = this.m_serverRes; e < t.length; e++) {
      var i = t[e];Laya.Loader.clearCache($k.instance, i), Laya.Loader.clearRes(i, !0);
    }for (var o = 0, n = this.m_loadingRes; o < n.length; o++) i = n[o], Laya.Loader.clearCache($k.instance, i), Laya.Loader.clearRes(i, !0);this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, $k.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && $k.instance.m_loading.showGetBtn();
  }, $k.prototype.enterDefaultServer = function () {
    var e = Browser.window.PF_INFO.selectedServer;this.$jc || -1 == e.status || 0 == e.status || (this.$jc = !0, Browser.window.PF_INFO.selectedServer = e, req_server_check_ban(0, e.server_id));
  }, $k.prototype.sendRecord = function () {
    var e = "";e += "newRegister=" + Browser.window.PF_INFO.newRegister, e += ", isPrelodServer=" + this.m_isPrelodServer, e += ", SelectServerPanel=" + (null != $k.instance.m_server), e += ", isPrelodLoading=" + this.m_isPrelodLoading, e += ", LoadingPanel=" + (null != $k.instance.m_loading), e += ", resMgrLoad=" + (Browser.window.resMgrLoad == $k.instance.requestWeb), e += ", imgMgrLoad=" + (Browser.window.imgMgrLoad == $k.instance.requestWeb), e += ", errUrls=" + $k.instance.$kc;for (var t = 0, i = this.m_serverRes; t < i.length; t++) e += ", " + (s = i[t]) + "=" + (null != Laya.Loader.getRes(s));for (var o = 0, n = this.m_loadingRes; o < n.length; o++) {
      var s;e += ", " + (s = n[o]) + "=" + (null != Laya.Loader.getRes(s));
    }var r = Browser.window.PF_INFO.selectedServer;r && (e += ", server_status=" + r.status, e += ", server_id=" + r.server_id, e += ", server_name=" + r.server_name);r = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: e });console.error(r), this.$nc && this.$nc == e || (this.$nc = e, reqRecordError(r));
  }, $k.prototype.$oc = function () {
    var e = Laya.stage,
        t = Math.floor(e.width),
        i = Math.floor(e.height);i / t < 1.7777778 ? (this.viewW = Math.floor(t / (i / 1280)), this.viewH = 1280, this.viewS = i / 1280) : (this.viewW = 720, this.viewH = Math.floor(i / (t / 720)), this.viewS = t / 720);t = Math.floor(e.width), e = Math.floor(e.height);e / t < 1.7777778 ? (this.viewW = Math.floor(t / (e / 1280)), this.viewH = 1280, this.viewS = e / 1280) : (this.viewW = 720, this.viewH = Math.floor(e / (t / 720)), this.viewS = t / 720), this.$mc();
  }, $k.prototype.$mc = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, $k.prototype.$lc = function () {
    if (Input.isInputting && Browser.onMobile) {
      var e = parseInt(Input.inputContainer.style.top.replace("px", "")),
          t = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS,
          i = Browser.clientWidth / Render.canvas.width;return 0 < (e = Browser.clientHeight - t * i - e) && (e = 0), void (Browser.container.style.top = e + "px");
    }Browser.container.style.top = "0px", t = (t = Math.floor(Browser.width)) + 1 & 2147483646, i = (i = Math.floor(Browser.height)) + 1 & 2147483646;e = Laya.stage;3 == ENV || i < t ? (e.scaleMode = Laya.Stage.SCALE_NOSCALE, e.width = t, e.height = i) : (e.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, e.width = 840, e.height = Math.floor(i / (t / 840)) + 1 & 2147483646), this.$oc();
  }, $k.prototype.requestWeb = function (e, t) {
    function $e() {
      i.onload = null, i.onerror = null;
    }var i,
        o = e;(i = new Browser.window.Image()).onload = function () {
      $e(), t(o, 200, i);
    }, i.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", o), $k.instance.$kc += o + "|", $e(), t(o, 404, null);
    }, i.src = o, -1 == $k.instance.m_serverRes.indexOf(o) && -1 == $k.instance.m_loadingRes.indexOf(o) || Laya.Loader.keepCache($k.instance, o);
  }, $k.prototype.$pc = function (e, t) {
    return -1 != e.indexOf(t, e.length - t.length);
  }, $k;
}();!function (e) {
  function $c() {
    var e = t.call(this) || this;return e.$qc = "#72441d", e.$rc = "#263d7d", e.width = 274, e.height = 59, e.$sc = new Laya.Image(), e.addChild(e.$sc), e.$tc = new Laya.Label(), e.$tc.fontSize = 30, e.$tc.color = e.$rc, e.addChild(e.$tc), e.$tc.centerX = 0, e.$tc.centerY = 0, e;
  }var t;e = e.$f || (e.$f = {}), t = Laya.View, __extends($c, t), $c.prototype.initialize = function () {
    t.prototype.initialize.call(this), this.$y = Browser.window.PF_INFO, this.$y.loadingType, this.addEvt();
  }, Object.defineProperty($c.prototype, "dataSource", { set: function (e) {
      e && this.setData(e);
    }, enumerable: !0, configurable: !0 }), $c.prototype.setData = function (e) {
    this.$uc = e[0], this.$vc = e[1], this.$tc.text = this.$uc.title, this.$tc.color = this.$vc ? this.$qc : this.$rc, this.$sc.skin = this.$vc ? "eeelogin/e25b.png" : "eeelogin/e24b.png";
  }, $c.prototype.destroy = function (e) {
    void 0 === e && (e = !0), this.rmEvts(), t.prototype.destroy.call(this, e);
  }, $c.prototype.addEvt = function () {}, $c.prototype.rmEvts = function () {}, e.NoticeItem = $c;
}(modules = modules || {}), function (e) {
  function $c() {
    var e = t.call(this) || this;return e.width = 192, e.height = 70, e.$sc = new Laya.Image(), e.addChild(e.$sc), e.$tc = new Laya.Label(), e.$tc.fontSize = 30, e.$tc.color = e.$O, e.addChild(e.$tc), e.$tc.centerX = 0, e.$tc.centerY = 0, e;
  }var t;e = e.$f || (e.$f = {}), t = Laya.View, __extends($c, t), $c.prototype.initialize = function () {
    t.prototype.initialize.call(this), this.$y = Browser.window.PF_INFO;var e = this.$y.loadingType;this.$O = 1 != e && 2 != e && 3 == e ? "#763042" : "#263d7d", this.addEvt();
  }, Object.defineProperty($c.prototype, "dataSource", { set: function (e) {
      e && this.setData(e);
    }, enumerable: !0, configurable: !0 }), $c.prototype.setData = function (e) {
    this.$uc = e, this.$tc.text = e.name, this.$sc.skin = e.select ? "eeelogin/e14b.png" : "eeelogin/e15b.png";
  }, $c.prototype.destroy = function (e) {
    void 0 === e && (e = !0), this.rmEvts(), t.prototype.destroy.call(this, e);
  }, $c.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $c.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $c.prototype.clkHdler = function () {
    this.$uc && this.$uc.callBack && this.$uc.callBack(this.$uc.index);
  }, e.SelectLeftListItem = $c;
}(modules = modules || {}), function (e) {
  function $c() {
    var e = t.call(this) || this;return e.$sc = new Laya.Image("eeelogin/e16b.png"), e.$tc = new Laya.Label(), e.$tc.fontSize = 30, e.$tc.color = e.$O, e.addChild(e.$sc), e.$wc = new Laya.Image(), e.addChild(e.$wc), e.width = 358, e.height = 70, e.addChild(e.$tc), e.$wc.centerY = 0, e.$wc.x = 18, e.$tc.x = 80, e.$tc.centerY = 0, e.$sc.graphics.drawRect(0, 0, e.width, e.height, "#00sasd"), e;
  }var t;e = e.$f || (e.$f = {}), t = Laya.View, __extends($c, t), $c.prototype.initialize = function () {
    t.prototype.initialize.call(this), this.$y = Browser.window.PF_INFO;var e = this.$y.loadingType;this.$O = 1 != e && 2 != e && 3 == e ? "#763042" : "#34267d", this.addEvt();
  }, Object.defineProperty($c.prototype, "dataSource", { set: function (e) {
      e && this.setData(e);
    }, enumerable: !0, configurable: !0 }), $c.prototype.setData = function (e) {
    this.$uc = e, this.$tc.color = -1 === e.status ? "#d50000" : 0 === e.status ? "#49575a" : this.$O, this.$tc.text = -1 === e.status ? e.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === e.status ? e.server_name + "(\u5f85\u5f00\u670d)" : e.server_name, this.$wc.skin = this.getStatusSrc(e.status);
  }, $c.prototype.destroy = function (e) {
    void 0 === e && (e = !0), this.rmEvts(), t.prototype.destroy.call(this, e);
  }, $c.prototype.addEvt = function () {
    this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $c.prototype.rmEvts = function () {
    this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
  }, $c.prototype.clkHdler = function () {
    this.$uc && this.$uc.callBack && this.$uc.callBack(this.$uc);
  }, $c.prototype.getStatusSrc = function (e) {
    var t = "";return 2 === e ? t = "eeelogin/e18b.png" : 1 === e ? t = "eeelogin/e19b.png" : -1 !== e && 0 !== e || (t = "eeelogin/e20b.png"), t;
  }, e.SelectRightListItem = $c;
}(modules = modules || {}), window.ServerLoading = ServerLoading;