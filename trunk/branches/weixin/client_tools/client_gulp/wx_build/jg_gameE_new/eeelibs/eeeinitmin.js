"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var d$d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d$a, d$b) {
    d$a.__proto__ = d$b;
  } || function (d$a, d$b) {
    for (var d$c in d$b) d$b.hasOwnProperty(d$c) && (d$a[d$c] = d$b[d$c]);
  };return function (d$a, d$b) {
    function d$c() {
      this.constructor = d$a;
    }d$d(d$a, d$b), d$a.prototype = null === d$b ? Object.create(d$b) : (d$c.prototype = d$b.prototype, new d$c());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (d$c) {
  var d$a = function (d$a) {
    function d$b() {
      return d$a.call(this) || this;
    }return __extends(d$b, d$a), d$b.prototype.createChildren = function () {
      d$a.prototype.createChildren.call(this), this.createView(d$c.d$a.uiView);
    }, d$b.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "eeelogin/e2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "eeelogin/e6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "eeelogin/e3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "eeelogin/e4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "eeelogin/e5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] }, d$b;
  }(View);d$c.d$a = d$a;
}(ui || (ui = {})), function (d$c) {
  var d$a = function (d$a) {
    function d$b() {
      return d$a.call(this) || this;
    }return __extends(d$b, d$a), d$b.prototype.createChildren = function () {
      d$a.prototype.createChildren.call(this), this.createView(d$c.d$b.uiView);
    }, d$b.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "eeelogin/e1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "eeeloding/e13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "eeeloding/e14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "eeeloding/e16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "eeeloding/e17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "eeeloding/e20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "eeeloding/e19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "eeeloding/e18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "eeeloding/e18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "eeeloding/e1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }] }, d$b;
  }(View);d$c.d$b = d$a;
}(ui || (ui = {})), function (d$c) {
  var d$a = function (d$a) {
    function d$b() {
      return d$a.call(this) || this;
    }return __extends(d$b, d$a), d$b.prototype.createChildren = function () {
      View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), View.regComponent("Text", laya.display.Text), d$a.prototype.createChildren.call(this), this.createView(d$c.d$c.uiView);
    }, d$b.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "eeelogin/e2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "eeelogin/e6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "eeelogin/e3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "eeelogin/e4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "eeelogin/e5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "eeelogin/e21b.png", centerX: 0 } }, { type: "Image", props: { y: 1102, var: "imgCheatTip", skin: "eeelogin/e27b.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 927, x: 159, var: "hotImage", skin: "eeelogin/e18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "eeelogin/e1b.png", centerX: 0, bottom: 30 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "eeelogin/e12b.png", name: "enterBtn", centerX: 0 } }, { type: "Image", props: { x: 196, visible: !1, var: "privacyToggle", skin: "eeelogin/e29b.png", bottom: 4 } }, { type: "Label", props: { y: 640, x: 0, width: 720, var: "txtTip", valign: "middle", text: "\u63d0\u793a\u5185\u5bb9", strokeColor: "#ffffff", stroke: 2, height: 32, fontSize: 32, color: "#ff0000", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }, { type: "HTMLDivElement", props: { y: 1255, x: 256, visible: !1, var: "privacyTip", height: 16 } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "eeelogin/e11b.png" } }, { type: "Image", props: { y: 257, x: 594, visible: !1, var: "privacyBtn", skin: "eeelogin/e13b.png", name: "privacyBtn" } }, { type: "Image", props: { left: 0, top: 0, visible: !1, var: "ageTipBtn", scaleY: .5, scaleX: .5, name: "privacyBtn" } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "eeelogin/e8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "eeelogin/e10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "mNoticeBg", skin: "eeelogin/e8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "eeelogin/e10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "eeelogin/e25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "privacyBg", skin: "eeelogin/e8b.png", name: "privacyBg", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "privacyClose", skin: "eeelogin/e10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "privacyClose2", stateNum: 1, skin: "eeelogin/e25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTabPrivacy", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "privacyTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "privacyPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "privacyContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "eeelogin/e9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "eeelogin/e17b.png" } }] }, { type: "Box", props: { width: 720, visible: !1, var: "jumpBg", mouseThrough: !1, height: 1280, centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { x: 33, width: 655, skin: "eeelogin/e8b.png", height: 994, centerY: 0, centerX: 0 } }, { type: "Button", props: { width: 274, var: "btnJump", stateNum: 1, skin: "eeelogin/e25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u8df3\u8f6c", height: 59, centerY: 436, centerX: 0 } }, { type: "Label", props: { width: 234, var: "jumpTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", fontSize: 30, color: "#ffffff", centerY: -408, centerX: 0, bold: !1, align: "center" } }, { type: "Panel", props: { x: 94, width: 545, var: "jumpPanel", height: 733, centerY: 10 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "jumpContent", height: 733 } }] }, { type: "Image", props: { x: 596, visible: !1, var: "closeBtn", skin: "eeelogin/e17b.png", name: "closeBtn", centerY: -402 } }] }] }, d$b;
  }(View);d$c.d$c = d$a;
}(ui || (ui = {})), function (d$a) {
  var d$b, d$c;d$b = d$a.d$d || (d$a.d$d = {}), d$c = function (d$b) {
    function d$a() {
      return d$b.call(this) || this;
    }return __extends(d$a, d$b), d$a.prototype.initialize = function () {
      d$b.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
    }, d$a.prototype.addEvt = function () {
      this.on(Laya.Event.CLICK, this, this.d$e);
    }, d$a.prototype.rmEvts = function () {
      this.off(Laya.Event.CLICK, this, this.d$e);
    }, d$a.prototype.onOpened = function () {
      this.d$f = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
    }, d$a.prototype.destroy = function (d$a) {
      void 0 === d$a && (d$a = !0), this.rmEvts(), d$b.prototype.destroy.call(this, d$a);
    }, d$a.prototype.d$e = function () {
      1e4 < Date.now() - this.d$f && (this.d$f -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
    }, d$a;
  }(ui.d$a), d$b.AuthorizationPanel = d$c;
}(modules || (modules = {})), function (d$a) {
  var d$b, d$c, d$d, d$e, d$i, d$f;d$b = d$a.d$i || (d$a.d$i = {}), d$c = Laya.Event, d$d = Laya.Image, d$e = Laya.Component, d$i = Laya.Loader, d$f = function (d$b) {
    function d$k() {
      var d$a = d$b.call(this) || this;return d$a.d$j = new d$d(), d$a.addChild(d$a.d$j), d$a.d$k = null, d$a.d$l = [], d$a.d$m = !1, d$a.d$n = 0, d$a.d$o = !0, d$a.d$p = 6, d$a.d$q = !1, d$a.on(d$c.DISPLAY, d$a, d$a.d$r), d$a.on(d$c.UNDISPLAY, d$a, d$a.d$s), d$a;
    }return __extends(d$k, d$b), d$k.create = function (d$a, d$b, d$c, d$d, d$e, d$f, d$i) {
      void 0 === d$d && (d$d = 0), void 0 === d$e && (d$e = 6), void 0 === d$f && (d$f = !0), void 0 === d$i && (d$i = !1);var d$j = new d$k();return d$j.skin(d$b, d$c, d$d), d$j.durFrm = d$e, d$j.loop = d$f, d$j.atHide = d$i, d$a && d$a.addChild(d$j), d$j;
    }, d$k.play = function (d$a) {
      d$a && (d$a.visible = !0, d$a.play());
    }, d$k.stop = function (d$a) {
      d$a && (d$a.visible = !1, d$a.stop());
    }, d$k.prototype.destroy = function (d$a) {
      Laya.timer.clear(this, this.d$t), this.off(d$c.DISPLAY, this, this.d$r), this.off(d$c.UNDISPLAY, this, this.d$s), d$b.prototype.destroy.call(this, d$a);
    }, d$k.prototype.d$r = function () {}, d$k.prototype.d$s = function () {}, d$k.prototype.skin = function (d$a, d$b, d$c) {
      if (this.d$k != d$a) {
        this.d$k = d$a, this.d$l = [];for (var d$d = 0, d$e = d$c; d$e <= d$b; d$e++) this.d$l[d$d++] = d$a + "/" + d$e + ".png";var d$f = d$i.getRes(this.d$l[0]);d$f && (this.width = d$f.sourceWidth, this.height = d$f.sourceHeight), this.d$t();
      }
    }, Object.defineProperty(d$k.prototype, "atHide", { get: function () {
        return this.d$q;
      }, set: function (d$a) {
        this.d$q = d$a;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(d$k.prototype, "durFrm", { set: function (d$a) {
        this.d$p != d$a && (this.d$p = d$a, this.d$m && (Laya.timer.clear(this, this.d$t), Laya.timer.loop(this.d$p * (1e3 / 60), this, this.d$t)));
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(d$k.prototype, "loop", { set: function (d$a) {
        this.d$o = d$a;
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
      this.d$l && 0 != this.d$l.length && (this.d$j.skin = this.d$l[this.d$n], this.d$m && (this.d$n++, this.d$n == this.d$l.length && (this.d$o ? this.d$n = 0 : (Laya.timer.clear(this, this.d$t), this.d$m = !1, this.d$q && (this.visible = !1), this.event(d$c.COMPLETE)))));
    }, d$k;
  }(d$e), d$b.PanelEff = d$f;
}(modules || (modules = {})), function (d$a) {
  var d$b, d$c, d$d;d$b = d$a.d$d || (d$a.d$d = {}), d$c = d$a.d$i.PanelEff, d$d = function (d$d) {
    function d$a(d$a, d$b) {
      void 0 === d$a && (d$a = 0);var d$c = d$d.call(this) || this;return d$c.d$u = { bgImgSkin: "eeeloding/e3a.jpg", topImgSkin: "eeeloding/e10a.jpg", btmImgSkin: "eeeloding/e4a.jpg", leftImgSkin: "eeeloding/e6a.jpg", rightImgSkin: "eeeloding/e8a.jpg", loadingBarBgSkin: "eeeloding/e13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, d$c.d$v = { bgImgSkin: "eeeloding/e12a.jpg", topImgSkin: "eeeloding/e11a.jpg", btmImgSkin: "eeeloding/e5a.jpg", leftImgSkin: "eeeloding/e7a.jpg", rightImgSkin: "eeeloding/e9a.jpg", loadingBarBgSkin: "eeeloding/e15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, d$c.d$w = 0, d$c.d$x(1 == d$a ? d$c.d$v : d$c.d$u), d$c.copyRightImg.skin = d$b, d$c;
    }return __extends(d$a, d$d), d$a.prototype.initialize = function () {
      if (d$d.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.d$y = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.d$y) {
        var d$a = this.d$y.loadingType;this.loadingTips.color = 1 == d$a ? "#f2ffb5" : 2 == d$a ? "#000000" : 101 == d$a ? "#000000" : "#f2ffb5";
      }this.d$z = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
    }, d$a.prototype.toAllProgress = function (d$a) {
      var d$b = this;if (-1 === d$a) return d$b.d$w = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);if (-2 !== d$a) {
        d$b.d$w < .9 ? d$b.d$w += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : d$b.d$w < 1 && (d$b.d$w += 1e-4), .9999 < d$b.d$w && (d$b.d$w = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
          .9 < d$b.d$w && toAllProgress(-1);
        }));var d$c = d$b.d$w,
            d$d = 590 * d$c;d$b.d$w = d$b.d$w > d$c ? d$b.d$w : d$c, d$b.loadingBar.width = d$d;var d$e = d$b.loadingBar.x + d$d;d$b.loadingImg2.x = d$e - 15, 364 <= d$e ? (d$b.loadingImg1.visible = !0, d$b.loadingImg1.x = d$e - 202) : d$b.loadingImg1.visible = !1, d$b.percentageTips.text = (100 * d$c >> 0) + "%", d$b.d$w < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress);
      } else Laya.timer.clear(this, this.toAllProgress);
    }, d$a.prototype.toProgress = function (d$a, d$b, d$c) {
      1 < d$a && (d$a = 1);var d$d = 590 * d$a;this.d$w = this.d$w > d$a ? this.d$w : d$a, this.loadingBar.width = d$d;var d$e = this.loadingBar.x + d$d;this.loadingImg2.x = d$e - 15, 364 <= d$e ? (this.loadingImg1.visible = !0, this.loadingImg1.x = d$e - 202) : this.loadingImg1.visible = !1, this.percentageTips.text = (100 * d$a >> 0) + "%", this.loadingTips.text = d$b;for (var d$f = d$c - 1, d$i = 0; d$i < this.d$z.length; d$i++) this.d$z[d$i].skin = d$i < d$f ? "eeeloding/e20a.png" : d$f === d$i ? "eeeloding/e19a.png" : "eeeloding/e18a.png";
    }, d$a.prototype.onOpened = function () {
      this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.d$y.lastVersion + "      \u7248\u672c\uff1a" + this.d$y.wxVersion, this.showGetBtn();
    }, d$a.prototype.close = function (d$a) {
      this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.d$A), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.d$B);
    }, d$a.prototype.resetWinFun = function () {
      Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
    }, d$a.prototype.destroy = function (d$a) {
      void 0 === d$a && (d$a = !0), this.resetWinFun(), d$d.prototype.destroy.call(this, d$a);
    }, d$a.prototype.showGetBtn = function () {
      this.d$y.showGetBtn && 1 == this.d$y.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "eeeloding/e1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.d$B), this.d$C(), this.d$D(!0));
    }, d$a.prototype.d$B = function () {
      this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "eeeloding/e2a.png", this.d$E(), this.d$D(!1));
    }, d$a.prototype.d$x = function (d$a) {
      this.bgImg.skin = d$a.bgImgSkin, this.topImg.skin = d$a.topImgSkin, this.btmImg.skin = d$a.btmImgSkin, this.leftImg.skin = d$a.leftImgSkin, this.rightImg.skin = d$a.rightImgSkin, this.copyRightImg.bottom = d$a.copyRightImgBottom, this.processBox1.y = d$a.processBox1Y, this.processBox2.y = d$a.processBox2Y, this.loadingBarBg.skin = d$a.loadingBarBgSkin, this.loadingTips.fontSize = d$a.loadingTipsSize, this.getTipsBtn.visible = this.d$y.showGetBtn && 1 == this.d$y.showGetBtn, this.getTipsBtn.visible ? this.d$C() : this.d$E(), this.d$D(this.getTipsBtn.visible);
    }, d$a.prototype.d$C = function () {
      this.d$F || (this.d$F = d$c.create(this.getTipsBtn, "eewxeff", 4, 0, 12), this.d$F.pos(161, 106), this.d$F.scale(1.14, 1.15)), d$c.play(this.d$F);
    }, d$a.prototype.d$E = function () {
      this.d$F && d$c.stop(this.d$F);
    }, d$a.prototype.d$D = function (d$a) {
      Laya.timer.clear(this, this.d$A), d$a ? (this.d$G = 9, this.txtGetTm.visible = !0, this.d$A(), Laya.timer.loop(1e3, this, this.d$A)) : this.txtGetTm.visible = !1;
    }, d$a.prototype.d$A = function () {
      0 < this.d$G ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.d$G + "s)", this.d$G--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.d$A), this.d$B());
    }, d$a;
  }(ui.d$b), d$b.LoadingPanel = d$d;
}(modules || (modules = {})), function (d$a) {
  var d$b, d$d, d$e, d$c;d$b = d$a.d$d || (d$a.d$d = {}), d$d = Laya.List, d$e = Laya.Event, d$c = function (d$c) {
    function d$a(d$a) {
      void 0 === d$a && (d$a = "eeelogin/e1b.png");var d$b = d$c.call(this) || this;return d$b.d$H = 0, d$b.d$I = "multi_notice_key", d$b.d$J = 0, d$b.d$K = 0, d$b.d$L = "privacy_key", d$b.d$M = !0, d$b.d$N = 0, d$b.copyRightImg.skin = d$a, d$b;
    }return __extends(d$a, d$c), d$a.prototype.initialize = function () {
      d$c.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.copyRightImg.skin = "", ServerLoading.instance.preloadServer(), this.d$y = Browser.window.PF_INFO, this.d$O = new d$d(), this.d$O.vScrollBarSkin = "", this.d$O.itemRender = d$b.SelectLeftListItem, this.d$O.top = 5, this.d$O.repeatX = 1, this.d$O.spaceY = 5, this.d$O.width = this.leftListBox.width, this.d$O.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.d$O), this.d$P = new d$d(), this.d$P.vScrollBarSkin = "", this.d$P.itemRender = d$b.SelectRightListItem, this.d$P.top = 5, this.d$P.repeatX = 1, this.d$P.spaceY = 5, this.d$P.width = this.rightListBox.width, this.d$P.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.d$P), this.d$Q = new d$d(), this.d$Q.hScrollBarSkin = "", this.d$Q.itemRender = d$b.NoticeItem, this.d$Q.repeatY = 1, this.d$Q.width = this.boxTab.width, this.d$Q.height = this.boxTab.height, this.boxTab.addChild(this.d$Q), this.d$R = new d$d(), this.d$R.hScrollBarSkin = "", this.d$R.itemRender = d$b.PrivacyItem, this.d$R.repeatY = 1, this.d$R.width = this.boxTab.width, this.d$R.height = this.boxTab.height, this.boxTabPrivacy.addChild(this.d$R);var d$a = this.d$y.loadingType;this.d$S = 1 == d$a ? "#feffc0" : 2 == d$a ? "#feffc0" : 3 == d$a ? "#feffc0" : 101 == d$a ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.d$T = [], this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.privacyContent.color = "#212942", this.privacyContent.style.fontSize = 26, this.privacyContent.style.lineHeight = 28, this.privacyContent.mouseEnabled = !1, this.privacyTip.color = "#ffffff", this.privacyTip.style.fontSize = 18, this.privacyTip.style.lineHeight = 18, this.privacyTip.style.stroke = 2, this.privacyTip.style.strokeColor = "#000000", this.privacyTip.style.wordWrap = !1, this.jumpContent.color = "#212942", this.jumpContent.style.fontSize = 26, this.jumpContent.style.lineHeight = 28, this.jumpContent.mouseEnabled = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
    }, d$a.prototype.destroy = function (d$a) {
      void 0 === d$a && (d$a = !0), this.rmEvts(), this.d$U(), this.d$V(), this.d$W(), this.d$X(), this.ageTipsContent = null, this.d$O && (this.d$O.removeSelf(), this.d$O.destroy(), this.d$O = null), this.d$P && (this.d$P.removeSelf(), this.d$P.destroy(), this.d$P = null), this.d$Q && (this.d$Q.removeSelf(), this.d$Q.destroy(), this.d$Q = null), this.d$R && (this.d$R.removeSelf(), this.d$R.destroy(), this.d$R = null), Laya.timer.clear(this, this.d$Y), d$c.prototype.destroy.call(this, d$a);
    }, d$a.prototype.addEvt = function () {
      this.bgImg.on(Laya.Event.CLICK, this, this.d$Z), this.enterBtn.on(Laya.Event.CLICK, this, this.d$$), this.selectServer.on(Laya.Event.CLICK, this, this.d$_), this.selectServer.on(Laya.Event.CLICK, this, this.d$_), this.closeBg.on(Laya.Event.CLICK, this, this.d$g), this.closeBtn.on(Laya.Event.CLICK, this, this.d$h), this.noticeBtn.on(Laya.Event.CLICK, this, this.d$aa), this.noticeClose.on(Laya.Event.CLICK, this, this.d$ba), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.d$ca), this.mNoticeClose.on(Laya.Event.CLICK, this, this.d$da), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.d$da), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.d$ea), this.privacyBtn.on(Laya.Event.CLICK, this, this.d$fa), this.ageTipBtn.on(Laya.Event.CLICK, this, this.d$ia), this.privacyClose.on(Laya.Event.CLICK, this, this.d$ja), this.privacyClose2.on(Laya.Event.CLICK, this, this.d$ja), this.privacyPanel.on(Laya.Event.MOUSE_DOWN, this, this.d$ka), this.privacyToggle.on(Laya.Event.CLICK, this, this.d$la), this.privacyTip.on(Laya.Event.LINK, this, this.d$ma), this.btnJump.on(Laya.Event.CLICK, this, this.d$na), this.jumpPanel.on(Laya.Event.MOUSE_DOWN, this, this.d$oa), this.d$Q.selectEnable = !0, this.d$Q.selectHandler = Laya.Handler.create(this, this.d$pa, null, !1), this.d$R.selectEnable = !0, this.d$R.selectHandler = Laya.Handler.create(this, this.d$qa, null, !1);
    }, d$a.prototype.rmEvts = function () {
      this.bgImg.off(Laya.Event.CLICK, this, this.d$Z), this.enterBtn.off(Laya.Event.CLICK, this, this.d$$), this.selectServer.off(Laya.Event.CLICK, this, this.d$_), this.selectServer.off(Laya.Event.CLICK, this, this.d$_), this.closeBg.off(Laya.Event.CLICK, this, this.d$g), this.noticeBtn.off(Laya.Event.CLICK, this, this.d$aa), this.closeBtn.off(Laya.Event.CLICK, this, this.d$h), this.noticeClose.off(Laya.Event.CLICK, this, this.d$ba), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.d$ca), this.mNoticeClose.off(Laya.Event.CLICK, this, this.d$da), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.d$da), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.d$ea), this.privacyBtn.off(Laya.Event.CLICK, this, this.d$fa), this.ageTipBtn.off(Laya.Event.CLICK, this, this.d$ia), this.privacyClose.off(Laya.Event.CLICK, this, this.d$ja), this.privacyClose2.off(Laya.Event.CLICK, this, this.d$ja), this.privacyPanel.off(Laya.Event.MOUSE_DOWN, this, this.d$ka), this.privacyToggle.off(Laya.Event.CLICK, this, this.d$la), this.privacyTip.off(Laya.Event.LINK, this, this.d$ma), this.btnJump.off(Laya.Event.CLICK, this, this.d$na), this.jumpPanel.off(Laya.Event.MOUSE_DOWN, this, this.d$oa), this.d$Q.selectEnable = !1, this.d$Q.selectHandler = null, this.d$R.selectEnable = !1, this.d$R.selectHandler = null;
    }, d$a.prototype.onOpened = function () {
      var d$d = this;this.d$f = Date.now(), this.d$M = !0, this.d$ra = this.d$y.selectedServer.server_id, this.d$sa(this.d$y.selectedServer), this.d$O.dataSource = this.d$y.groupList, this.d$_(), req_multi_server_notice(4, this.d$y.pkgName, this.d$y.selectedServer.server_id, this.d$ta.bind(this)), Laya.timer.frameOnce(1, this, function () {
        d$d.d$ua = d$d.d$y.privacy_data && d$d.d$y.privacy_data.list ? d$d.d$y.privacy_data.list : [], d$d.d$va = null != d$d.d$y.privacy_login_pkg ? d$d.d$y.privacy_login_pkg : 0;var d$a = "1" == localStorage.getItem(d$d.d$L),
            d$b = 0 != PF_INFO.privacy_save_pkg,
            d$c = 0 == d$d.d$va || 1 == d$d.d$va;d$d.d$wa = d$b && d$a || d$c, d$d.d$xa();
      }), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.d$y.lastVersion + "      \u7248\u672c\uff1a" + this.d$y.wxVersion, this.serverName.color = this.selServer.color = this.d$S, this.imgCheatTip.visible = 1 == this.d$y.anti_cheat_pkg, this.txtTip.visible = !1;
    }, d$a.prototype.preload = function () {}, d$a.prototype.d$Z = function () {
      this.d$wa ? 1e4 < Date.now() - this.d$f && (this.d$f -= 2e3, ServerLoading.instance.enterDefaultServer()) : this.d$ya("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
    }, d$a.prototype.d$$ = function () {
      this.d$wa ? this.d$za(this.d$y.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.d$y.selectedServer, req_server_check_ban(0, this.d$y.selectedServer.server_id)) : this.d$ya("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
    }, d$a.prototype.d$_ = function () {
      this.d$y.hasGroupReq ? this.listBg.visible = !0 : (this.d$y.hasGroupReq = !0, req_server_group(0));
    }, d$a.prototype.d$g = function () {
      this.listBg.visible = !1;
    }, d$a.prototype.d$h = function () {
      this.jumpBg.visible = !1;
    }, d$a.prototype.d$aa = function () {
      this.d$Aa();
    }, d$a.prototype.d$da = function () {
      this.mNoticeBg.visible = !1;
    }, d$a.prototype.d$ba = function () {
      this.noticeBg.visible = !1;
    }, d$a.prototype.d$fa = function () {
      this.d$Ba();
    }, d$a.prototype.d$ja = function () {
      this.privacyBg.visible = !1;
    }, d$a.prototype.d$la = function () {
      this.d$wa = !this.d$wa, this.d$wa && localStorage.setItem(this.d$L, "1"), this.privacyToggle.skin = "eeelogin/" + (this.d$wa ? "e29b.png" : "e28b.png");
    }, d$a.prototype.d$ma = function (d$a) {
      this.d$Ba(Number(d$a));
    }, d$a.prototype.d$na = function () {
      Browser.window.forceJumpMiniGame ? Browser.window.forceJumpMiniGame() : this.d$h();
    }, d$a.prototype.d$ca = function () {
      this.d$H = this.noticeContent.mouseY, Laya.stage.on(d$e.MOUSE_MOVE, this, this.d$Ca), Laya.stage.on(d$e.MOUSE_UP, this, this.d$U), Laya.stage.on(d$e.MOUSE_OUT, this, this.d$U);
    }, d$a.prototype.d$Ca = function () {
      if (this.noticeContent) {
        var d$a = this.d$H - this.noticeContent.mouseY;this.noticeContent.scrollY += d$a, this.d$H = this.noticeContent.mouseY;
      }
    }, d$a.prototype.d$U = function () {
      Laya.stage.off(d$e.MOUSE_MOVE, this, this.d$Ca), Laya.stage.off(d$e.MOUSE_UP, this, this.d$U), Laya.stage.off(d$e.MOUSE_OUT, this, this.d$U);
    }, d$a.prototype.d$ea = function () {
      this.d$J = this.mNoticePanel.mouseY, Laya.stage.on(d$e.MOUSE_MOVE, this, this.d$Da), Laya.stage.on(d$e.MOUSE_UP, this, this.d$V), Laya.stage.on(d$e.MOUSE_OUT, this, this.d$V);
    }, d$a.prototype.d$Da = function () {
      if (this.mNoticeContent) {
        var d$a = this.d$J - this.mNoticePanel.mouseY;this.mNoticeContent.y -= d$a, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.d$J = this.mNoticePanel.mouseY;
      }
    }, d$a.prototype.d$V = function () {
      Laya.stage.off(d$e.MOUSE_MOVE, this, this.d$Da), Laya.stage.off(d$e.MOUSE_UP, this, this.d$V), Laya.stage.off(d$e.MOUSE_OUT, this, this.d$V);
    }, d$a.prototype.d$ka = function () {
      this.d$K = this.privacyPanel.mouseY, Laya.stage.on(d$e.MOUSE_MOVE, this, this.d$Ea), Laya.stage.on(d$e.MOUSE_UP, this, this.d$W), Laya.stage.on(d$e.MOUSE_OUT, this, this.d$W);
    }, d$a.prototype.d$Ea = function () {
      if (this.privacyContent) {
        var d$a = this.d$K - this.privacyPanel.mouseY;this.privacyContent.y -= d$a, this.privacyPanel.height < this.privacyContent.contextHeight ? this.privacyContent.y < this.privacyPanel.height - this.privacyContent.contextHeight ? this.privacyContent.y = this.privacyPanel.height - this.privacyContent.contextHeight : 0 < this.privacyContent.y && (this.privacyContent.y = 0) : this.privacyContent.y = 0, this.d$K = this.privacyPanel.mouseY;
      }
    }, d$a.prototype.d$W = function () {
      Laya.stage.off(d$e.MOUSE_MOVE, this, this.d$Ea), Laya.stage.off(d$e.MOUSE_UP, this, this.d$W), Laya.stage.off(d$e.MOUSE_OUT, this, this.d$W);
    }, d$a.prototype.d$oa = function () {
      this.d$N = this.jumpPanel.mouseY, Laya.stage.on(d$e.MOUSE_MOVE, this, this.d$Fa), Laya.stage.on(d$e.MOUSE_UP, this, this.d$X), Laya.stage.on(d$e.MOUSE_OUT, this, this.d$X);
    }, d$a.prototype.d$Fa = function () {
      if (this.jumpContent) {
        var d$a = this.d$N - this.jumpPanel.mouseY;this.jumpContent.y -= d$a, this.jumpPanel.height < this.jumpContent.contextHeight ? this.jumpContent.y < this.jumpPanel.height - this.jumpContent.contextHeight ? this.jumpContent.y = this.jumpPanel.height - this.jumpContent.contextHeight : 0 < this.jumpContent.y && (this.jumpContent.y = 0) : this.jumpContent.y = 0, this.d$N = this.jumpPanel.mouseY;
      }
    }, d$a.prototype.d$X = function () {
      Laya.stage.off(d$e.MOUSE_MOVE, this, this.d$Fa), Laya.stage.off(d$e.MOUSE_UP, this, this.d$X), Laya.stage.off(d$e.MOUSE_OUT, this, this.d$X);
    }, d$a.prototype.d$pa = function () {
      if (this.d$Q.dataSource) {
        for (var d$a, d$b = 0; d$b < this.d$Q.dataSource.length; d$b++) {
          var d$c = this.d$Q.dataSource[d$b];d$c[1] = d$b == this.d$Q.selectedIndex, d$b == this.d$Q.selectedIndex && (d$a = d$c[0]);
        }this.mNoticeTitle.text = d$a && d$a.title ? d$a.title : "", this.mNoticeContent.innerHTML = d$a && d$a.content ? d$a.content : "", this.mNoticeContent.y = 0;
      }
    }, d$a.prototype.d$qa = function () {
      var d$a = this.d$R.dataSource;if (d$a) {
        for (var d$b = 0; d$b < d$a.length; d$b++) {
          d$a[d$b][1] = d$b == this.d$R.selectedIndex;
        }var d$c = this.d$ua[this.d$R.selectedIndex];d$c && d$c.content && (d$c.content = d$c.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "")), this.privacyTitle.text = d$c && d$c.title ? d$c.title : "\u6807\u9898", this.privacyContent.innerHTML = d$c && d$c.content ? d$c.content : "\u52a0\u8f7d\u4e2d...", this.privacyContent.y = 0;
      }
    }, d$a.prototype.d$sa = function (d$a) {
      var d$b = d$a.server_name;this.serverName.text = d$b + this.d$Ga(d$a), this.serverName.color = -1 === d$a.status ? "#d50000" : 0 === d$a.status ? "#49575a" : this.d$S, this.hotImage.skin = this.d$Ha(d$a), this.d$y.cdn = d$a.cdn || "", this.d$y.selectedServer = d$a, this.noticeBtn.visible = !0;
    }, d$a.prototype.d$Ia = function (d$a) {
      this.showGroupList(d$a);
    }, d$a.prototype.d$Ja = function (d$a) {
      this.d$sa(d$a), this.listBg.visible = !1;
    }, d$a.prototype.showGroupList = function (d$a) {
      if (void 0 === d$a && (d$a = 0), this.parent) {
        var d$b = this.d$y.groupList;if (d$b && 0 !== d$b.length) {
          for (var d$c = d$b.length, d$d = 0; d$d < d$c; d$d++) d$b[d$d].callBack = this.d$Ia.bind(this), d$b[d$d].select = d$d == d$a, d$b[d$d].index = d$d;var d$e = (this.d$O.array = d$b)[d$a].id;this.d$y.serverList[d$e] ? this.showServerList(d$e) : this.d$y.hasServerReq || (this.d$y.hasServerReq = !0, -1 == d$e ? req_server_owner(0) : -2 == d$e ? req_recommend_server_list(0) : req_server_list(0, d$e));
        }
      }
    }, d$a.prototype.showServerList = function (d$a) {
      if (this.parent && this.d$y.serverList[d$a]) {
        for (var d$b = this.d$y.serverList[d$a], d$c = d$b.length, d$d = 0; d$d < d$c; d$d++) d$b[d$d].callBack = this.d$Ja.bind(this);this.d$P.array = d$b;
      }
    }, d$a.prototype.d$za = function (d$a) {
      return -1 == d$a.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != d$a.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
    }, d$a.prototype.d$Ha = function (d$a) {
      var d$b = d$a.status,
          d$c = d$a.is_recommend,
          d$d = "eeelogin/e19b.png";return 1 !== d$b && 2 !== d$b || 1 !== d$c && 3 !== d$c ? 1 !== d$b && 2 !== d$b || 2 !== d$c ? -1 !== d$b && 0 !== d$b || (d$d = "eeelogin/e20b.png") : d$d = "eeelogin/e19b.png" : d$d = "eeelogin/e18b.png", d$d;
    }, d$a.prototype.d$Ga = function (d$a) {
      var d$b = d$a.status,
          d$c = "";return 1 == d$a.is_recommend || 3 == d$a.is_recommend ? d$c = "(\u63a8\u8350)" : -1 === d$b ? d$c = "(\u7ef4\u62a4\u4e2d)" : 0 === d$b && (d$c = "(\u5f85\u5f00\u670d)"), d$c;
    }, d$a.prototype.d$ta = function (d$a) {
      console.log("onMultiNoticeCallback, param = ", d$a);var d$b = Date.now() / 1e3,
          d$c = localStorage.getItem(this.d$I),
          d$d = !(this.d$T = []);if ("success" == d$a.state) for (var d$e in d$a.data) {
        var d$f = d$a.data[d$e];if (d$f) {
          var d$i = d$b < d$f.end_time,
              d$j = 1 == d$f.pop_type,
              d$k = 2 == d$f.pop_type && d$f.key + "" != d$c;!d$d && d$i && (d$j || d$k) && (d$d = !0), d$i && this.d$T.push(d$f), d$k && localStorage.setItem(this.d$I, d$f.key + "");
        }
      }this.d$T.sort(function (d$a, d$b) {
        return d$a.login_id - d$b.login_id;
      }), console.log("onMultiNoticeCallback, datas = ", this.d$T), d$d && this.d$Aa();
    }, d$a.prototype.d$Aa = function () {
      if (this.d$Q) {
        if (this.d$T) {
          this.d$Q.x = 2 < this.d$T.length ? 0 : (this.boxTab.width - 274 * this.d$T.length) / 2;for (var d$a = [], d$b = 0; d$b < this.d$T.length; d$b++) {
            var d$c = this.d$T[d$b];d$a.push([d$c, d$b == this.d$Q.selectedIndex]);
          }0 < (this.d$Q.dataSource = d$a).length ? (this.d$Q.selectedIndex = 0, this.d$Q.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.d$T.length <= 1, this.boxTab.visible = 1 < this.d$T.length;
        }this.mNoticeBg.visible = !0;
      }
    }, d$a.prototype.d$Ka = function (d$a) {
      if (!this.destroyed) {
        if (console.log("p_onPrivacyCallback, param = ", d$a), "success" == d$a.state) for (var d$b in d$a.data) {
          var d$c = Number(d$b),
              d$d = d$a.data[d$c];this.d$ua && this.d$ua[d$c] && (this.d$ua[d$c].content = d$d.content);
        }this.d$qa();
      }
    }, d$a.prototype.d$xa = function () {
      for (var d$a = "", d$b = 0; d$b < this.d$ua.length; d$b++) {
        d$a += '<a href="' + d$b + '" style="color:#14ff28;text-decoration:none">' + this.d$ua[d$b].title + "</a>", d$b < this.d$ua.length - 1 && (d$a += "\u3001");
      }this.privacyTip.innerHTML = "\u6211\u5df2\u7ecf\u8be6\u7ec6\u9605\u8bfb\u5e76\u540c\u610f" + d$a, this.privacyToggle.skin = "eeelogin/" + (this.d$wa ? "e29b.png" : "e28b.png"), this.privacyTip.x = (720 - this.privacyTip.width) / 2, this.privacyToggle.x = this.privacyTip.x - 30, this.privacyBtn.visible = 0 < this.d$ua.length, this.privacyToggle.visible = this.privacyTip.visible = 0 < this.d$ua.length && 0 != this.d$va;
    }, d$a.prototype.d$Ba = function (d$a) {
      if (void 0 === d$a && (d$a = 0), this.d$R) {
        if (this.d$ua) {
          this.d$R.x = 2 < this.d$ua.length ? 0 : (this.boxTab.width - 274 * this.d$ua.length) / 2;for (var d$b = [], d$c = 0; d$c < this.d$ua.length; d$c++) {
            var d$d = this.d$ua[d$c],
                d$e = d$d && d$d.title ? d$d.title : "",
                d$f = d$c == this.d$R.selectedIndex;d$b.push([d$e, d$f]);
          }0 < (this.d$R.dataSource = d$b).length ? (d$a < 0 && (d$a = 0), d$a > d$b.length - 1 && (d$a = 0), this.d$R.selectedIndex = d$a, this.d$R.scrollTo(d$a)) : (this.privacyTitle.text = "\u7a7a", this.privacyContent.text = ""), this.privacyClose2.visible = this.d$ua.length <= 1, this.boxTabPrivacy.visible = 1 < this.d$ua.length;
        }this.d$M && (this.d$M = !1, req_privacy(this.d$y.pkgName, this.d$Ka.bind(this))), this.privacyBg.visible = !0;
      }
    }, d$a.prototype.openJumpView = function (d$a, d$b, d$c, d$d) {
      void 0 === d$d && (d$d = !1), this.jumpTitle.text = d$a || "\u6682\u65e0\u516c\u544a", this.jumpContent.innerHTML = d$b || "", this.btnJump.label = d$c || "\u786e\u5b9a", this.jumpContent.y = 0, this.jumpBg.visible = !0, this.closeBtn.visible = d$d;
    }, d$a.prototype.showAgeTipsBtn = function (d$a, d$b, d$c, d$d, d$e) {
      (this.ageTipBtn.visible = d$a) && (this.ageTipBtn.skin = d$b || "eeelogin/e11b.png"), this.ageTipsContent = d$c, this.ageTipBtn.x = d$d || 0, this.ageTipBtn.y = d$e || 0;
    }, d$a.prototype.d$ia = function () {
      this.openJumpView("\u9002\u9f84\u516c\u544a", this.ageTipsContent, "\u786e\u8ba4", !0);
    }, d$a.prototype.d$ya = function (d$a) {
      this.txtTip.text = d$a, this.txtTip.y = 640, this.txtTip.visible = !0, this.d$La = 1, Laya.timer.clear(this, this.d$Y), this.d$Y(), Laya.timer.frameLoop(1, this, this.d$Y);
    }, d$a.prototype.d$Y = function () {
      this.txtTip.y -= this.d$La, this.d$La *= 1.1, this.txtTip.y <= 590 && (this.txtTip.visible = !1, Laya.timer.clear(this, this.d$Y));
    }, d$a;
  }(ui.d$c), d$b.SelectServerPanel = d$c;
}(modules || (modules = {}));var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.d$d.AuthorizationPanel,
    LoadingPanel = modules.d$d.LoadingPanel,
    SelectServerPanel = modules.d$d.SelectServerPanel,
    ServerLoading = function () {
  function d$k(d$a) {
    this.m_loadingRes = ["eeeloding/e13a.png", "eeeloding/e15a.png", "eeeloding/e14a.png", "eeeloding/e16a.png", "eeeloding/e17a.png", "eeeloding/e18a.png", "eeeloding/e19a.png", "eeeloding/e20a.png", "eewxeff/e1c.png", "eewxeff/e2c.png", "eewxeff/e3c.png", "eewxeff/e4c.png", "eewxeff/e5c.png", "eeeloding/e3a.jpg", "eeeloding/e12a.jpg", "eeeloding/e1a.png", "eeeloding/e2a.png", "eeeloding/e4a.jpg", "eeeloding/e6a.jpg", "eeeloding/e8a.jpg", "eeeloding/e10a.jpg", "eeeloding/e5a.jpg", "eeeloding/e7a.jpg", "eeeloding/e9a.jpg", "eeeloding/e11a.jpg"], this.m_serverRes = ["eeelogin/e10b.png", "eeelogin/e11b.png", "eeelogin/e12b.png", "eeelogin/e13b.png", "eeelogin/e14b.png", "eeelogin/e15b.png", "eeelogin/e16b.png", "eeelogin/e17b.png", "eeelogin/e18b.png", "eeelogin/e19b.png", "eeelogin/e20b.png", "eeelogin/e21b.png", "eeelogin/e2b.jpg", "eeelogin/e3b.jpg", "eeelogin/e4b.jpg", "eeelogin/e5b.jpg", "eeelogin/e6b.jpg", "eeelogin/e1b.png", "eeelogin/e8b.png", "eeelogin/e9b.png", "eeelogin/e24b.png", "eeelogin/e25b.png", "eeelogin/e27b.png", "eeelogin/e29b.png", "eeelogin/e28b.png", "eeelogin/e123b.png", "eeelogin/e199b.png"], this.copyRightUrl = "eeelogin/e1b.png", this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.d$Ma = !1, this.d$Na = "", d$k.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var d$b = Laya.AtlasResourceManager;d$b.maxTextureCount = 6, d$b.atlasTextureWidth = d$b.atlasTextureHeight = 1024, d$b._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.d$Oa.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } }, "e28b.png": { frame: { h: 25, idx: 0, w: 25, x: 444, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 2 } }, "e29b.png": { frame: { h: 27, idx: 0, w: 26, x: 470, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = d$k.instance.requestWeb, Browser.window.imgMgrLoad = d$k.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.d$Oa();
  }return d$k.prototype.changeServerLoading = function (d$a) {
    d$k.instance.m_layer.visible = d$a;
  }, d$k.prototype.openAuthor = function () {
    d$k.instance.m_author || (d$k.instance.m_author = new AuthorizationPanel()), d$k.instance.m_author.parent || d$k.instance.m_layer.addChild(d$k.instance.m_author), d$k.instance.d$Pa();
  }, d$k.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, d$k.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, d$k.prototype.d$Qa = function () {
    d$k.instance.m_server || (d$k.instance.m_server = new SelectServerPanel(this.copyRightUrl)), d$k.instance.m_server.parent || d$k.instance.m_layer.addChild(d$k.instance.m_server), d$k.instance.d$Pa();
  }, d$k.prototype.openJumpView = function (d$a, d$b, d$c, d$d) {
    void 0 === d$d && (d$d = !1), this.d$Qa(), d$k.instance.m_server.openJumpView(d$a, d$b, d$c, d$d);
  }, d$k.prototype.openJumpTipsBtn = function (d$a, d$b, d$c, d$d, d$e) {
    this.d$Qa(), d$k.instance.m_server.showAgeTipsBtn(d$a, d$b, d$c, d$d, d$e);
  }, d$k.prototype.getCertificatePng = function () {
    window.sdkInitRes = window.sdkInitRes || {};var d$a = "eeelogin/e123b.png",
        d$b = "eeelogin/e1b.png";return 1 == sdkInitRes.develop ? 0 == (PF_INFO.develop_certificate_pkg || 0) ? d$a : d$b : 0 == PF_INFO.release_certificate_pkg ? d$a : d$b;
  }, d$k.prototype.openServer = function (d$a, d$b, d$c) {
    var d$d = this;this.copyRightUrl = d$c || this.getCertificatePng();for (var d$e = function () {
      d$d.d$Qa(), d$a && d$b && d$a.call(d$b);
    }, d$f = !0, d$i = 0, d$j = this.m_serverRes; d$i < d$j.length; d$i++) {
      var d$k = d$j[d$i];if (null == Laya.Loader.getRes(d$k)) {
        d$f = !1;break;
      }
    }d$f ? d$e() : Laya.loader.load(this.m_serverRes, Handler.create(this, d$e));
  }, d$k.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, d$k.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, d$k.prototype.openLoading = function (d$a, d$b) {
    void 0 === d$a && (d$a = 0), d$b = d$b || this.getCertificatePng(), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      d$k.instance.m_loading || (d$k.instance.m_loading = new LoadingPanel(d$a, d$b)), d$k.instance.m_loading.parent || d$k.instance.m_layer.addChild(d$k.instance.m_loading), d$k.instance.d$Pa();
    }));
  }, d$k.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var d$a = 0, d$b = this.m_serverRes; d$a < d$b.length; d$a++) {
      var d$c = d$b[d$a];Laya.Loader.clearCache(d$k.instance, d$c), Laya.Loader.clearRes(d$c, !0);
    }for (var d$d = 0, d$e = this.m_loadingRes; d$d < d$e.length; d$d++) {
      d$c = d$e[d$d];Laya.Loader.clearCache(d$k.instance, d$c), Laya.Loader.clearRes(d$c, !0);
    }this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, d$k.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && d$k.instance.m_loading.showGetBtn();
  }, d$k.prototype.enterDefaultServer = function () {
    var d$a = Browser.window.PF_INFO.selectedServer;this.d$Ma || -1 == d$a.status || 0 == d$a.status || (this.d$Ma = !0, Browser.window.PF_INFO.selectedServer = d$a, req_server_check_ban(0, d$a.server_id));
  }, d$k.prototype.sendRecord = function () {
    var d$a = "";d$a += "newRegister=" + Browser.window.PF_INFO.newRegister, d$a += ", isPrelodServer=" + this.m_isPrelodServer, d$a += ", SelectServerPanel=" + (null != d$k.instance.m_server), d$a += ", isPrelodLoading=" + this.m_isPrelodLoading, d$a += ", LoadingPanel=" + (null != d$k.instance.m_loading), d$a += ", resMgrLoad=" + (Browser.window.resMgrLoad == d$k.instance.requestWeb), d$a += ", imgMgrLoad=" + (Browser.window.imgMgrLoad == d$k.instance.requestWeb), d$a += ", errUrls=" + d$k.instance.d$Na;for (var d$b = 0, d$c = this.m_serverRes; d$b < d$c.length; d$b++) {
      d$a += ", " + (d$f = d$c[d$b]) + "=" + (null != Laya.Loader.getRes(d$f));
    }for (var d$d = 0, d$e = this.m_loadingRes; d$d < d$e.length; d$d++) {
      var d$f;d$a += ", " + (d$f = d$e[d$d]) + "=" + (null != Laya.Loader.getRes(d$f));
    }var d$i = Browser.window.PF_INFO.selectedServer;d$i && (d$a += ", server_status=" + d$i.status, d$a += ", server_id=" + d$i.server_id, d$a += ", server_name=" + d$i.server_name);var d$j = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: d$a });console.error(d$j), this.d$Ra && this.d$Ra == d$a || (this.d$Ra = d$a, reqRecordError(d$j));
  }, d$k.prototype.d$Sa = function () {
    var d$a = Laya.stage,
        d$b = Math.floor(d$a.width),
        d$c = Math.floor(d$a.height);d$c / d$b < 1.7777778 ? (this.viewW = Math.floor(d$b / (d$c / 1280)), this.viewH = 1280, this.viewS = d$c / 1280) : (this.viewW = 720, this.viewH = Math.floor(d$c / (d$b / 720)), this.viewS = d$b / 720);var d$d = Math.floor(d$a.width),
        d$e = Math.floor(d$a.height);d$e / d$d < 1.7777778 ? (this.viewW = Math.floor(d$d / (d$e / 1280)), this.viewH = 1280, this.viewS = d$e / 1280) : (this.viewW = 720, this.viewH = Math.floor(d$e / (d$d / 720)), this.viewS = d$d / 720), this.d$Pa();
  }, d$k.prototype.d$Pa = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, d$k.prototype.d$Oa = function () {
    if (Input.isInputting && Browser.onMobile) {
      var d$a = parseInt(Input.inputContainer.style.top.replace("px", "")),
          d$b = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS,
          d$c = Browser.clientWidth / Render.canvas.width;return 0 < (d$a = Browser.clientHeight - d$b * d$c - d$a) && (d$a = 0), void (Browser.container.style.top = d$a + "px");
    }Browser.container.style.top = "0px";var d$d = Math.floor(Browser.width),
        d$e = Math.floor(Browser.height);d$d = d$d + 1 & 2147483646, d$e = d$e + 1 & 2147483646;var d$f = Laya.stage;3 == ENV ? (d$f.scaleMode = Laya.Stage.SCALE_NOSCALE, d$f.width = d$d, d$f.height = d$e) : d$e < d$d ? (d$f.scaleMode = Laya.Stage.SCALE_NOSCALE, d$f.width = d$d, d$f.height = d$e) : (d$f.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, d$f.width = 840, d$f.height = Math.floor(d$e / (d$d / 840)) + 1 & 2147483646), this.d$Sa();
  }, d$k.prototype.requestWeb = function (d$a, d$b) {
    function d$c() {
      d$d.onload = null, d$d.onerror = null;
    }var d$d,
        d$e = d$a;(d$d = new Browser.window.Image()).onload = function () {
      d$c(), d$b(d$e, 200, d$d);
    }, d$d.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", d$e), d$k.instance.d$Na += d$e + "|", d$c(), d$b(d$e, 404, null);
    }, d$d.src = d$e, -1 == d$k.instance.m_serverRes.indexOf(d$e) && -1 == d$k.instance.m_loadingRes.indexOf(d$e) || Laya.Loader.keepCache(d$k.instance, d$e);
  }, d$k.prototype.d$Ta = function (d$a, d$b) {
    return -1 != d$a.indexOf(d$b, d$a.length - d$b.length);
  }, d$k;
}();!function (d$a) {
  var d$b, d$c;d$b = d$a.d$d || (d$a.d$d = {}), d$c = function (d$b) {
    function d$a() {
      var d$a = d$b.call(this) || this;return d$a.d$Ua = "#72441d", d$a.d$Va = "#263d7d", d$a.width = 274, d$a.height = 59, d$a.d$Wa = new Laya.Image(), d$a.addChild(d$a.d$Wa), d$a.d$Xa = new Laya.Label(), d$a.d$Xa.fontSize = 30, d$a.d$Xa.color = d$a.d$Va, d$a.addChild(d$a.d$Xa), d$a.d$Xa.centerX = 0, d$a.d$Xa.centerY = 0, d$a;
    }return __extends(d$a, d$b), d$a.prototype.initialize = function () {
      d$b.prototype.initialize.call(this), this.d$y = Browser.window.PF_INFO;this.d$y.loadingType;this.addEvt();
    }, Object.defineProperty(d$a.prototype, "dataSource", { set: function (d$a) {
        d$a && this.setData(d$a);
      }, enumerable: !0, configurable: !0 }), d$a.prototype.setData = function (d$a) {
      this.d$Ya = d$a[0], this.d$Za = d$a[1], this.d$Xa.text = this.d$Ya.title, this.d$Xa.color = this.d$Za ? this.d$Ua : this.d$Va, this.d$Wa.skin = this.d$Za ? "eeelogin/e25b.png" : "eeelogin/e24b.png";
    }, d$a.prototype.destroy = function (d$a) {
      void 0 === d$a && (d$a = !0), this.rmEvts(), d$b.prototype.destroy.call(this, d$a);
    }, d$a.prototype.addEvt = function () {}, d$a.prototype.rmEvts = function () {}, d$a;
  }(Laya.View), d$b.NoticeItem = d$c;
}(modules || (modules = {})), function (d$a) {
  var d$b, d$c;d$b = d$a.d$d || (d$a.d$d = {}), d$c = function (d$b) {
    function d$a() {
      var d$a = d$b.call(this) || this;return d$a.d$Ua = "#72441d", d$a.d$Va = "#263d7d", d$a.width = 274, d$a.height = 59, d$a.d$Wa = new Laya.Image(), d$a.addChild(d$a.d$Wa), d$a.d$Xa = new Laya.Label(), d$a.d$Xa.fontSize = 30, d$a.d$Xa.color = d$a.d$Va, d$a.addChild(d$a.d$Xa), d$a.d$Xa.centerX = 0, d$a.d$Xa.centerY = 0, d$a;
    }return __extends(d$a, d$b), d$a.prototype.initialize = function () {
      d$b.prototype.initialize.call(this), this.d$y = Browser.window.PF_INFO;this.d$y.loadingType;this.addEvt();
    }, Object.defineProperty(d$a.prototype, "dataSource", { set: function (d$a) {
        d$a && this.setData(d$a);
      }, enumerable: !0, configurable: !0 }), d$a.prototype.setData = function (d$a) {
      this.d$$a = d$a[0], this.d$Za = d$a[1], this.d$Xa.text = this.d$$a, this.d$Xa.color = this.d$Za ? this.d$Ua : this.d$Va, this.d$Wa.skin = this.d$Za ? "eeelogin/e25b.png" : "eeelogin/e24b.png";
    }, d$a.prototype.destroy = function (d$a) {
      void 0 === d$a && (d$a = !0), this.rmEvts(), d$b.prototype.destroy.call(this, d$a);
    }, d$a.prototype.addEvt = function () {}, d$a.prototype.rmEvts = function () {}, d$a;
  }(Laya.View), d$b.PrivacyItem = d$c;
}(modules || (modules = {})), function (d$a) {
  var d$b, d$c;d$b = d$a.d$d || (d$a.d$d = {}), d$c = function (d$b) {
    function d$a() {
      var d$a = d$b.call(this) || this;return d$a.width = 192, d$a.height = 70, d$a.d$Wa = new Laya.Image(), d$a.addChild(d$a.d$Wa), d$a.d$_a = new Laya.Label(), d$a.d$_a.fontSize = 28, d$a.d$_a.color = d$a.d$S, d$a.addChild(d$a.d$_a), d$a.d$_a.centerX = 0, d$a.d$_a.centerY = 0, d$a.d$ga = new Laya.Label(), d$a.d$ga.fontSize = 22, d$a.d$ga.color = d$a.d$S, d$a.addChild(d$a.d$ga), d$a.d$ga.centerX = 0, d$a.d$ga.y = 11, d$a.d$ha = new Laya.Label(), d$a.d$ha.fontSize = 26, d$a.d$ha.color = d$a.d$S, d$a.addChild(d$a.d$ha), d$a.d$ha.centerX = 0, d$a.d$ha.y = 39, d$a;
    }return __extends(d$a, d$b), d$a.prototype.initialize = function () {
      d$b.prototype.initialize.call(this), this.d$y = Browser.window.PF_INFO;var d$a = this.d$y.loadingType;this.d$S = 1 == d$a ? "#263d7d" : 2 == d$a ? "#263d7d" : 3 == d$a ? "#763042" : "#263d7d", this.addEvt();
    }, Object.defineProperty(d$a.prototype, "dataSource", { set: function (d$a) {
        d$a && this.setData(d$a);
      }, enumerable: !0, configurable: !0 }), d$a.prototype.setData = function (d$a) {
      this.d$Ya = d$a;var d$b = this.d$Ya.id,
          d$c = this.d$Ya.name;if (this.d$_a.visible = this.d$ga.visible = this.d$ha.visible = !1, -1 == d$b || -2 == d$b) this.d$_a.visible = !0, this.d$_a.text = d$c;else {
        var d$d = d$c,
            d$e = "1-10\u670d",
            d$f = d$c.match("[0-9]{1,}");d$f && null != d$f.index && (d$d = d$c.slice(0, d$f.index), d$e = d$c.slice(d$f.index)), this.d$ga.visible = this.d$ha.visible = !0, this.d$ga.text = d$d, this.d$ha.text = d$e;
      }this.d$Wa.skin = d$a.select ? "eeelogin/e14b.png" : "eeelogin/e15b.png";
    }, d$a.prototype.destroy = function (d$a) {
      void 0 === d$a && (d$a = !0), this.rmEvts(), d$b.prototype.destroy.call(this, d$a);
    }, d$a.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, d$a.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, d$a.prototype.clkHdler = function () {
      this.d$Ya && this.d$Ya.callBack && this.d$Ya.callBack(this.d$Ya.index);
    }, d$a;
  }(Laya.View), d$b.SelectLeftListItem = d$c;
}(modules || (modules = {})), function (d$a) {
  var d$b, d$c;d$b = d$a.d$d || (d$a.d$d = {}), d$c = function (d$b) {
    function d$a() {
      var d$a = d$b.call(this) || this;return d$a.width = 358, d$a.height = 70, d$a.d$Wa = new Laya.Image("eeelogin/e16b.png"), d$a.addChild(d$a.d$Wa), d$a.d$Wa.graphics.drawRect(0, 0, d$a.width, d$a.height, "#00sasd"), d$a.d$ab = new Laya.Image(), d$a.d$ab.centerY = 0, d$a.d$ab.x = 7, d$a.addChild(d$a.d$ab), d$a.d$_a = new Laya.Label(), d$a.d$_a.fontSize = 24, d$a.d$_a.color = d$a.d$S, d$a.d$_a.x = 56, d$a.d$_a.centerY = 0, d$a.addChild(d$a.d$_a), d$a.d$bb = new Laya.Label(), d$a.d$bb.fontSize = 24, d$a.d$bb.color = d$a.d$S, d$a.d$bb.x = 246, d$a.d$bb.centerY = 0, d$a.addChild(d$a.d$bb), d$a.d$cb = new Laya.Image(), d$a.d$cb.top = 0, d$a.d$cb.right = 0, d$a.addChild(d$a.d$cb), d$a.d$db = new Laya.Label(), d$a.d$db.fontSize = 20, d$a.d$db.color = "#ffffff", d$a.d$db.x = 225, d$a.d$db.y = 46, d$a.addChild(d$a.d$db), d$a;
    }return __extends(d$a, d$b), d$a.prototype.initialize = function () {
      d$b.prototype.initialize.call(this), this.d$y = Browser.window.PF_INFO;var d$a = this.d$y.loadingType;this.d$S = 1 == d$a ? "#34267d" : 2 == d$a ? "#34267d" : 3 == d$a ? "#763042" : "#34267d", this.addEvt();
    }, Object.defineProperty(d$a.prototype, "dataSource", { set: function (d$a) {
        d$a && this.setData(d$a);
      }, enumerable: !0, configurable: !0 }), d$a.prototype.setData = function (d$a) {
      this.d$Ya = d$a;var d$b = this.d$Ya.status,
          d$c = this.d$Ya.server_name;this.d$ab.skin = this.getStatusSrc(this.d$Ya), this.d$_a.color = -1 === d$b ? "#d50000" : 0 === d$b ? "#49575a" : this.d$S, this.d$_a.text = d$c, this.d$bb.text = -1 === d$b ? "\u7ef4\u62a4\u4e2d" : 0 === d$b ? "\u672a\u5f00\u670d" : "\u5df2\u5f00\u670d";var d$d = 1 == this.d$Ya.is_recommend || 3 == this.d$Ya.is_recommend;(this.d$cb.visible = d$d) && (this.d$cb.skin = "eeelogin/e199b.png"), this.d$db.text = -1 == this.d$Ya.status && this.d$Ya.maintain_time ? this.d$Ya.maintain_time : "";
    }, d$a.prototype.destroy = function (d$a) {
      void 0 === d$a && (d$a = !0), this.rmEvts(), d$b.prototype.destroy.call(this, d$a);
    }, d$a.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, d$a.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, d$a.prototype.clkHdler = function () {
      this.d$Ya && this.d$Ya.callBack && this.d$Ya.callBack(this.d$Ya);
    }, d$a.prototype.getStatusSrc = function (d$a) {
      var d$b = d$a.status,
          d$c = d$a.is_recommend,
          d$d = "eeelogin/e19b.png";return 1 !== d$b && 2 !== d$b || 1 !== d$c && 3 !== d$c ? 1 !== d$b && 2 !== d$b || 2 !== d$c ? -1 !== d$b && 0 !== d$b || (d$d = "eeelogin/e20b.png") : d$d = "eeelogin/e19b.png" : d$d = "eeelogin/e18b.png", d$d;
    }, d$a;
  }(Laya.View), d$b.SelectRightListItem = d$c;
}(modules || (modules = {})), window.ServerLoading = ServerLoading;