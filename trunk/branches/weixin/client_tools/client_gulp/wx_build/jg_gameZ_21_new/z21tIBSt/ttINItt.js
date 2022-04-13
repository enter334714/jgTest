"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var T$E = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (T$n, T$C) {
    T$n.__proto__ = T$C;
  } || function (T$n, T$C) {
    for (var T$_ in T$C) T$C.hasOwnProperty(T$_) && (T$n[T$_] = T$C[T$_]);
  };return function (T$n, T$C) {
    function T$_() {
      this.constructor = T$n;
    }T$E(T$n, T$C), T$n.prototype = null === T$C ? Object.create(T$C) : (T$_.prototype = T$C.prototype, new T$_());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (T$_) {
  var T$n = function (T$n) {
    function T$C() {
      return T$n.call(this) || this;
    }return __extends(T$C, T$n), T$C.prototype.createChildren = function () {
      T$n.prototype.createChildren.call(this), this.createView(T$_.T$n.uiView);
    }, T$C.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "ttlgrtt/t2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "ttlgrtt/t6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "ttlgrtt/t3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "ttlgrtt/t4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "ttlgrtt/t5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] }, T$C;
  }(View);T$_.T$n = T$n;
}(ui || (ui = {})), function (T$_) {
  var T$n = function (T$n) {
    function T$C() {
      return T$n.call(this) || this;
    }return __extends(T$C, T$n), T$C.prototype.createChildren = function () {
      T$n.prototype.createChildren.call(this), this.createView(T$_.T$C.uiView);
    }, T$C.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "ttlgrtt/t1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "ttdt/t13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "ttdt/t14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "ttdt/t16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "ttdt/t17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "ttdt/t20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "ttdt/t19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "ttdt/t18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "ttdt/t18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "ttdt/t1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }] }, T$C;
  }(View);T$_.T$C = T$n;
}(ui || (ui = {})), function (T$_) {
  var T$n = function (T$n) {
    function T$C() {
      return T$n.call(this) || this;
    }return __extends(T$C, T$n), T$C.prototype.createChildren = function () {
      View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), View.regComponent("Text", laya.display.Text), T$n.prototype.createChildren.call(this), this.createView(T$_.T$_.uiView);
    }, T$C.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "ttlgrtt/t2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "ttlgrtt/t6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "ttlgrtt/t3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "ttlgrtt/t4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "ttlgrtt/t5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "ttlgrtt/t21b.png", centerX: 0 } }, { type: "Image", props: { y: 1102, var: "imgCheatTip", skin: "ttlgrtt/t27b.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 927, x: 159, var: "hotImage", skin: "ttlgrtt/t18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "ttlgrtt/t1b.png", centerX: 0, bottom: 30 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "ttlgrtt/t12b.png", name: "enterBtn", centerX: 0 } }, { type: "Image", props: { x: 196, visible: !1, var: "privacyToggle", skin: "ttlgrtt/t29b.png", bottom: 4 } }, { type: "Label", props: { y: 640, x: 0, width: 720, var: "txtTip", valign: "middle", text: "\u63d0\u793a\u5185\u5bb9", strokeColor: "#ffffff", stroke: 2, height: 32, fontSize: 32, color: "#ff0000", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }, { type: "HTMLDivElement", props: { y: 1255, x: 256, visible: !1, var: "privacyTip", height: 16 } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "ttlgrtt/t11b.png" } }, { type: "Image", props: { y: 257, x: 594, visible: !1, var: "privacyBtn", skin: "ttlgrtt/t13b.png", name: "privacyBtn" } }, { type: "Image", props: { left: 0, top: 0, visible: !1, var: "ageTipBtn", scaleY: .5, scaleX: .5, name: "privacyBtn" } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "ttlgrtt/t8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "ttlgrtt/t10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "mNoticeBg", skin: "ttlgrtt/t8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "ttlgrtt/t10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "ttlgrtt/t25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "privacyBg", skin: "ttlgrtt/t8b.png", name: "privacyBg", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "privacyClose", skin: "ttlgrtt/t10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "privacyClose2", stateNum: 1, skin: "ttlgrtt/t25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTabPrivacy", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "privacyTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "privacyPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "privacyContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "ttlgrtt/t9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "ttlgrtt/t17b.png" } }] }, { type: "Box", props: { width: 720, visible: !1, var: "jumpBg", mouseThrough: !1, height: 1280, centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { x: 33, width: 655, skin: "ttlgrtt/t8b.png", height: 994, centerY: 0, centerX: 0 } }, { type: "Button", props: { width: 274, var: "btnJump", stateNum: 1, skin: "ttlgrtt/t25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u8df3\u8f6c", height: 59, centerY: 436, centerX: 0 } }, { type: "Label", props: { width: 234, var: "jumpTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", fontSize: 30, color: "#ffffff", centerY: -408, centerX: 0, bold: !1, align: "center" } }, { type: "Panel", props: { x: 94, width: 545, var: "jumpPanel", height: 733, centerY: 10 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "jumpContent", height: 733 } }] }, { type: "Image", props: { x: 596, visible: !1, var: "closeBtn", skin: "ttlgrtt/t17b.png", name: "closeBtn", centerY: -402 } }] }] }, T$C;
  }(View);T$_.T$_ = T$n;
}(ui || (ui = {})), function (T$n) {
  var T$C, T$_;T$C = T$n.T$E || (T$n.T$E = {}), T$_ = function (T$C) {
    function T$n() {
      return T$C.call(this) || this;
    }return __extends(T$n, T$C), T$n.prototype.initialize = function () {
      T$C.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
    }, T$n.prototype.addEvt = function () {
      this.on(Laya.Event.CLICK, this, this.T$y);
    }, T$n.prototype.rmEvts = function () {
      this.off(Laya.Event.CLICK, this, this.T$y);
    }, T$n.prototype.onOpened = function () {
      this.T$p = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
    }, T$n.prototype.destroy = function (T$n) {
      void 0 === T$n && (T$n = !0), this.rmEvts(), T$C.prototype.destroy.call(this, T$n);
    }, T$n.prototype.T$y = function () {
      1e4 < Date.now() - this.T$p && (this.T$p -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
    }, T$n;
  }(ui.T$n), T$C.AuthorizationPanel = T$_;
}(modules || (modules = {})), function (T$n) {
  var T$C, T$_, T$E, T$y, T$c, T$p;T$C = T$n.T$c || (T$n.T$c = {}), T$_ = Laya.Event, T$E = Laya.Image, T$y = Laya.Component, T$c = Laya.Loader, T$p = function (T$C) {
    function T$W() {
      var T$n = T$C.call(this) || this;return T$n.T$l = new T$E(), T$n.addChild(T$n.T$l), T$n.T$W = null, T$n.T$q = [], T$n.T$J = !1, T$n.T$j = 0, T$n.T$P = !0, T$n.T$x = 6, T$n.T$b = !1, T$n.on(T$_.DISPLAY, T$n, T$n.T$r), T$n.on(T$_.UNDISPLAY, T$n, T$n.T$m), T$n;
    }return __extends(T$W, T$C), T$W.create = function (T$n, T$C, T$_, T$E, T$y, T$p, T$c) {
      void 0 === T$E && (T$E = 0), void 0 === T$y && (T$y = 6), void 0 === T$p && (T$p = !0), void 0 === T$c && (T$c = !1);var T$l = new T$W();return T$l.skin(T$C, T$_, T$E), T$l.durFrm = T$y, T$l.loop = T$p, T$l.atHide = T$c, T$n && T$n.addChild(T$l), T$l;
    }, T$W.play = function (T$n) {
      T$n && (T$n.visible = !0, T$n.play());
    }, T$W.stop = function (T$n) {
      T$n && (T$n.visible = !1, T$n.stop());
    }, T$W.prototype.destroy = function (T$n) {
      Laya.timer.clear(this, this.T$d), this.off(T$_.DISPLAY, this, this.T$r), this.off(T$_.UNDISPLAY, this, this.T$m), T$C.prototype.destroy.call(this, T$n);
    }, T$W.prototype.T$r = function () {}, T$W.prototype.T$m = function () {}, T$W.prototype.skin = function (T$n, T$C, T$_) {
      if (this.T$W != T$n) {
        this.T$W = T$n, this.T$q = [];for (var T$E = 0, T$y = T$_; T$y <= T$C; T$y++) this.T$q[T$E++] = T$n + "/" + T$y + ".png";var T$p = T$c.getRes(this.T$q[0]);T$p && (this.width = T$p.sourceWidth, this.height = T$p.sourceHeight), this.T$d();
      }
    }, Object.defineProperty(T$W.prototype, "atHide", { get: function () {
        return this.T$b;
      }, set: function (T$n) {
        this.T$b = T$n;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(T$W.prototype, "durFrm", { set: function (T$n) {
        this.T$x != T$n && (this.T$x = T$n, this.T$J && (Laya.timer.clear(this, this.T$d), Laya.timer.loop(this.T$x * (1e3 / 60), this, this.T$d)));
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(T$W.prototype, "loop", { set: function (T$n) {
        this.T$P = T$n;
      }, enumerable: !0, configurable: !0 }), T$W.prototype.play = function () {
      this.T$J && this.stop(), this.T$J = !0, this.T$j = 0, Laya.timer.loop(this.T$x * (1e3 / 60), this, this.T$d), this.T$d();
    }, T$W.prototype.stop = function () {
      this.T$J = !1, this.T$j = 0, this.T$d(), Laya.timer.clear(this, this.T$d);
    }, T$W.prototype.pause = function () {
      this.T$J && (this.T$J = !1, Laya.timer.clear(this, this.T$d));
    }, T$W.prototype.resume = function () {
      this.T$J || (this.T$J = !0, Laya.timer.loop(this.T$x * (1e3 / 60), this, this.T$d), this.T$d());
    }, Object.defineProperty(T$W.prototype, "isPlay", { get: function () {
        return this.T$J;
      }, enumerable: !0, configurable: !0 }), T$W.prototype.T$d = function () {
      this.T$q && 0 != this.T$q.length && (this.T$l.skin = this.T$q[this.T$j], this.T$J && (this.T$j++, this.T$j == this.T$q.length && (this.T$P ? this.T$j = 0 : (Laya.timer.clear(this, this.T$d), this.T$J = !1, this.T$b && (this.visible = !1), this.event(T$_.COMPLETE)))));
    }, T$W;
  }(T$y), T$C.PanelEff = T$p;
}(modules || (modules = {})), function (T$n) {
  var T$C, T$_, T$E;T$C = T$n.T$E || (T$n.T$E = {}), T$_ = T$n.T$c.PanelEff, T$E = function (T$E) {
    function T$n(T$n, T$C) {
      void 0 === T$n && (T$n = 0);var T$_ = T$E.call(this) || this;return T$_.T$a = { bgImgSkin: "ttdt/t3a.jpg", topImgSkin: "ttdt/t10a.jpg", btmImgSkin: "ttdt/t4a.jpg", leftImgSkin: "ttdt/t6a.jpg", rightImgSkin: "ttdt/t8a.jpg", loadingBarBgSkin: "ttdt/t13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, T$_.T$O = { bgImgSkin: "ttdt/t12a.jpg", topImgSkin: "ttdt/t11a.jpg", btmImgSkin: "ttdt/t5a.jpg", leftImgSkin: "ttdt/t7a.jpg", rightImgSkin: "ttdt/t9a.jpg", loadingBarBgSkin: "ttdt/t15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, T$_.T$A = 0, T$_.T$k(1 == T$n ? T$_.T$O : T$_.T$a), T$_.copyRightImg.skin = T$C, T$_;
    }return __extends(T$n, T$E), T$n.prototype.initialize = function () {
      if (T$E.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.T$t = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.T$t) {
        var T$n = this.T$t.loadingType;this.loadingTips.color = 1 == T$n ? "#f2ffb5" : 2 == T$n ? "#000000" : 101 == T$n ? "#000000" : "#f2ffb5";
      }this.T$T = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
    }, T$n.prototype.toAllProgress = function (T$n) {
      var T$C = this;if (-1 === T$n) return T$C.T$A = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);if (-2 !== T$n) {
        T$C.T$A < .9 ? T$C.T$A += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : T$C.T$A < 1 && (T$C.T$A += 1e-4), .9999 < T$C.T$A && (T$C.T$A = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
          .9 < T$C.T$A && toAllProgress(-1);
        }));var T$_ = T$C.T$A,
            T$E = 590 * T$_;T$C.T$A = T$C.T$A > T$_ ? T$C.T$A : T$_, T$C.loadingBar.width = T$E;var T$y = T$C.loadingBar.x + T$E;T$C.loadingImg2.x = T$y - 15, 364 <= T$y ? (T$C.loadingImg1.visible = !0, T$C.loadingImg1.x = T$y - 202) : T$C.loadingImg1.visible = !1, T$C.percentageTips.text = (100 * T$_ >> 0) + "%", T$C.T$A < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress);
      } else Laya.timer.clear(this, this.toAllProgress);
    }, T$n.prototype.toProgress = function (T$n, T$C, T$_) {
      1 < T$n && (T$n = 1);var T$E = 590 * T$n;this.T$A = this.T$A > T$n ? this.T$A : T$n, this.loadingBar.width = T$E;var T$y = this.loadingBar.x + T$E;this.loadingImg2.x = T$y - 15, 364 <= T$y ? (this.loadingImg1.visible = !0, this.loadingImg1.x = T$y - 202) : this.loadingImg1.visible = !1, this.percentageTips.text = (100 * T$n >> 0) + "%", this.loadingTips.text = T$C;for (var T$p = T$_ - 1, T$c = 0; T$c < this.T$T.length; T$c++) this.T$T[T$c].skin = T$c < T$p ? "ttdt/t20a.png" : T$p === T$c ? "ttdt/t19a.png" : "ttdt/t18a.png";
    }, T$n.prototype.onOpened = function () {
      this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.T$t.lastVersion + "      \u7248\u672c\uff1a" + this.T$t.wxVersion, this.showGetBtn();
    }, T$n.prototype.close = function (T$n) {
      this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.T$Y), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.T$s);
    }, T$n.prototype.resetWinFun = function () {
      Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
    }, T$n.prototype.destroy = function (T$n) {
      void 0 === T$n && (T$n = !0), this.resetWinFun(), T$E.prototype.destroy.call(this, T$n);
    }, T$n.prototype.showGetBtn = function () {
      this.T$t.showGetBtn && 1 == this.T$t.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "ttdt/t1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.T$s), this.T$N(), this.T$S(!0));
    }, T$n.prototype.T$s = function () {
      this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "ttdt/t2a.png", this.T$M(), this.T$S(!1));
    }, T$n.prototype.T$k = function (T$n) {
      this.bgImg.skin = T$n.bgImgSkin, this.topImg.skin = T$n.topImgSkin, this.btmImg.skin = T$n.btmImgSkin, this.leftImg.skin = T$n.leftImgSkin, this.rightImg.skin = T$n.rightImgSkin, this.copyRightImg.bottom = T$n.copyRightImgBottom, this.processBox1.y = T$n.processBox1Y, this.processBox2.y = T$n.processBox2Y, this.loadingBarBg.skin = T$n.loadingBarBgSkin, this.loadingTips.fontSize = T$n.loadingTipsSize, this.getTipsBtn.visible = this.T$t.showGetBtn && 1 == this.T$t.showGetBtn, this.getTipsBtn.visible ? this.T$N() : this.T$M(), this.T$S(this.getTipsBtn.visible);
    }, T$n.prototype.T$N = function () {
      this.T$w || (this.T$w = T$_.create(this.getTipsBtn, "tft", 4, 0, 12), this.T$w.pos(161, 106), this.T$w.scale(1.14, 1.15)), T$_.play(this.T$w);
    }, T$n.prototype.T$M = function () {
      this.T$w && T$_.stop(this.T$w);
    }, T$n.prototype.T$S = function (T$n) {
      Laya.timer.clear(this, this.T$Y), T$n ? (this.T$B = 9, this.txtGetTm.visible = !0, this.T$Y(), Laya.timer.loop(1e3, this, this.T$Y)) : this.txtGetTm.visible = !1;
    }, T$n.prototype.T$Y = function () {
      0 < this.T$B ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.T$B + "s)", this.T$B--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.T$Y), this.T$s());
    }, T$n;
  }(ui.T$C), T$C.LoadingPanel = T$E;
}(modules || (modules = {})), function (T$n) {
  var T$C, T$E, T$y, T$_;T$C = T$n.T$E || (T$n.T$E = {}), T$E = Laya.List, T$y = Laya.Event, T$_ = function (T$_) {
    function T$n(T$n) {
      void 0 === T$n && (T$n = "ttlgrtt/t1b.png");var T$C = T$_.call(this) || this;return T$C.T$V = 0, T$C.T$g = "multi_notice_key", T$C.T$H = 0, T$C.T$X = 0, T$C.T$$ = "privacy_key", T$C.T$i = !0, T$C.T$f = 0, T$C.copyRightImg.skin = T$n, T$C;
    }return __extends(T$n, T$_), T$n.prototype.initialize = function () {
      T$_.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.copyRightImg.skin = "", ServerLoading.instance.preloadServer(), this.T$t = Browser.window.PF_INFO, this.T$e = new T$E(), this.T$e.vScrollBarSkin = "", this.T$e.itemRender = T$C.SelectLeftListItem, this.T$e.top = 5, this.T$e.repeatX = 1, this.T$e.spaceY = 5, this.T$e.width = this.leftListBox.width, this.T$e.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.T$e), this.T$G = new T$E(), this.T$G.vScrollBarSkin = "", this.T$G.itemRender = T$C.SelectRightListItem, this.T$G.top = 5, this.T$G.repeatX = 1, this.T$G.spaceY = 5, this.T$G.width = this.rightListBox.width, this.T$G.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.T$G), this.T$F = new T$E(), this.T$F.hScrollBarSkin = "", this.T$F.itemRender = T$C.NoticeItem, this.T$F.repeatY = 1, this.T$F.width = this.boxTab.width, this.T$F.height = this.boxTab.height, this.boxTab.addChild(this.T$F), this.T$u = new T$E(), this.T$u.hScrollBarSkin = "", this.T$u.itemRender = T$C.PrivacyItem, this.T$u.repeatY = 1, this.T$u.width = this.boxTab.width, this.T$u.height = this.boxTab.height, this.boxTabPrivacy.addChild(this.T$u);var T$n = this.T$t.loadingType;this.T$o = 1 == T$n ? "#feffc0" : 2 == T$n ? "#feffc0" : 3 == T$n ? "#feffc0" : 101 == T$n ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.T$Q = [], this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.privacyContent.color = "#212942", this.privacyContent.style.fontSize = 26, this.privacyContent.style.lineHeight = 28, this.privacyContent.mouseEnabled = !1, this.privacyTip.color = "#ffffff", this.privacyTip.style.fontSize = 18, this.privacyTip.style.lineHeight = 18, this.privacyTip.style.stroke = 2, this.privacyTip.style.strokeColor = "#000000", this.privacyTip.style.wordWrap = !1, this.jumpContent.color = "#212942", this.jumpContent.style.fontSize = 26, this.jumpContent.style.lineHeight = 28, this.jumpContent.mouseEnabled = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
    }, T$n.prototype.destroy = function (T$n) {
      void 0 === T$n && (T$n = !0), this.rmEvts(), this.T$I(), this.T$Z(), this.T$L(), this.T$h(), this.ageTipsContent = null, this.T$e && (this.T$e.removeSelf(), this.T$e.destroy(), this.T$e = null), this.T$G && (this.T$G.removeSelf(), this.T$G.destroy(), this.T$G = null), this.T$F && (this.T$F.removeSelf(), this.T$F.destroy(), this.T$F = null), this.T$u && (this.T$u.removeSelf(), this.T$u.destroy(), this.T$u = null), Laya.timer.clear(this, this.T$v), T$_.prototype.destroy.call(this, T$n);
    }, T$n.prototype.addEvt = function () {
      this.bgImg.on(Laya.Event.CLICK, this, this.T$R), this.enterBtn.on(Laya.Event.CLICK, this, this.T$z), this.selectServer.on(Laya.Event.CLICK, this, this.T$U), this.selectServer.on(Laya.Event.CLICK, this, this.T$U), this.closeBg.on(Laya.Event.CLICK, this, this.T$K), this.closeBtn.on(Laya.Event.CLICK, this, this.T$D), this.noticeBtn.on(Laya.Event.CLICK, this, this.T$nn), this.noticeClose.on(Laya.Event.CLICK, this, this.T$Cn), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.T$_n), this.mNoticeClose.on(Laya.Event.CLICK, this, this.T$En), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.T$En), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.T$yn), this.privacyBtn.on(Laya.Event.CLICK, this, this.T$pn), this.ageTipBtn.on(Laya.Event.CLICK, this, this.T$cn), this.privacyClose.on(Laya.Event.CLICK, this, this.T$ln), this.privacyClose2.on(Laya.Event.CLICK, this, this.T$ln), this.privacyPanel.on(Laya.Event.MOUSE_DOWN, this, this.T$Wn), this.privacyToggle.on(Laya.Event.CLICK, this, this.T$qn), this.privacyTip.on(Laya.Event.LINK, this, this.T$Jn), this.btnJump.on(Laya.Event.CLICK, this, this.T$jn), this.jumpPanel.on(Laya.Event.MOUSE_DOWN, this, this.T$Pn), this.T$F.selectEnable = !0, this.T$F.selectHandler = Laya.Handler.create(this, this.T$xn, null, !1), this.T$u.selectEnable = !0, this.T$u.selectHandler = Laya.Handler.create(this, this.T$bn, null, !1);
    }, T$n.prototype.rmEvts = function () {
      this.bgImg.off(Laya.Event.CLICK, this, this.T$R), this.enterBtn.off(Laya.Event.CLICK, this, this.T$z), this.selectServer.off(Laya.Event.CLICK, this, this.T$U), this.selectServer.off(Laya.Event.CLICK, this, this.T$U), this.closeBg.off(Laya.Event.CLICK, this, this.T$K), this.noticeBtn.off(Laya.Event.CLICK, this, this.T$nn), this.closeBtn.off(Laya.Event.CLICK, this, this.T$D), this.noticeClose.off(Laya.Event.CLICK, this, this.T$Cn), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.T$_n), this.mNoticeClose.off(Laya.Event.CLICK, this, this.T$En), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.T$En), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.T$yn), this.privacyBtn.off(Laya.Event.CLICK, this, this.T$pn), this.ageTipBtn.off(Laya.Event.CLICK, this, this.T$cn), this.privacyClose.off(Laya.Event.CLICK, this, this.T$ln), this.privacyClose2.off(Laya.Event.CLICK, this, this.T$ln), this.privacyPanel.off(Laya.Event.MOUSE_DOWN, this, this.T$Wn), this.privacyToggle.off(Laya.Event.CLICK, this, this.T$qn), this.privacyTip.off(Laya.Event.LINK, this, this.T$Jn), this.btnJump.off(Laya.Event.CLICK, this, this.T$jn), this.jumpPanel.off(Laya.Event.MOUSE_DOWN, this, this.T$Pn), this.T$F.selectEnable = !1, this.T$F.selectHandler = null, this.T$u.selectEnable = !1, this.T$u.selectHandler = null;
    }, T$n.prototype.onOpened = function () {
      var T$E = this;this.T$p = Date.now(), this.T$i = !0, this.T$rn = this.T$t.selectedServer.server_id, this.T$mn(this.T$t.selectedServer), this.T$e.dataSource = this.T$t.groupList, this.T$U(), req_multi_server_notice(4, this.T$t.pkgName, this.T$t.selectedServer.server_id, this.T$dn.bind(this)), Laya.timer.frameOnce(1, this, function () {
        T$E.T$an = T$E.T$t.privacy_data && T$E.T$t.privacy_data.list ? T$E.T$t.privacy_data.list : [], T$E.T$On = null != T$E.T$t.privacy_login_pkg ? T$E.T$t.privacy_login_pkg : 0;var T$n = "1" == localStorage.getItem(T$E.T$$),
            T$C = 0 != PF_INFO.privacy_save_pkg,
            T$_ = 0 == T$E.T$On || 1 == T$E.T$On;T$E.T$An = T$C && T$n || T$_, T$E.T$kn();
      }), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.T$t.lastVersion + "      \u7248\u672c\uff1a" + this.T$t.wxVersion, this.serverName.color = this.selServer.color = this.T$o, this.imgCheatTip.visible = 1 == this.T$t.anti_cheat_pkg, this.txtTip.visible = !1;
    }, T$n.prototype.preload = function () {}, T$n.prototype.T$R = function () {
      this.T$An ? 1e4 < Date.now() - this.T$p && (this.T$p -= 2e3, ServerLoading.instance.enterDefaultServer()) : this.T$tn("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
    }, T$n.prototype.T$z = function () {
      this.T$An ? this.T$Tn(this.T$t.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.T$t.selectedServer, req_server_check_ban(0, this.T$t.selectedServer.server_id)) : this.T$tn("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
    }, T$n.prototype.T$U = function () {
      this.T$t.hasGroupReq ? this.listBg.visible = !0 : (this.T$t.hasGroupReq = !0, req_server_group(0));
    }, T$n.prototype.T$K = function () {
      this.listBg.visible = !1;
    }, T$n.prototype.T$D = function () {
      this.jumpBg.visible = !1;
    }, T$n.prototype.T$nn = function () {
      this.T$Yn();
    }, T$n.prototype.T$En = function () {
      this.mNoticeBg.visible = !1;
    }, T$n.prototype.T$Cn = function () {
      this.noticeBg.visible = !1;
    }, T$n.prototype.T$pn = function () {
      this.T$sn();
    }, T$n.prototype.T$ln = function () {
      this.privacyBg.visible = !1;
    }, T$n.prototype.T$qn = function () {
      this.T$An = !this.T$An, this.T$An && localStorage.setItem(this.T$$, "1"), this.privacyToggle.skin = "ttlgrtt/" + (this.T$An ? "t29b.png" : "t28b.png");
    }, T$n.prototype.T$Jn = function (T$n) {
      this.T$sn(Number(T$n));
    }, T$n.prototype.T$jn = function () {
      Browser.window.forceJumpMiniGame ? Browser.window.forceJumpMiniGame() : this.T$D();
    }, T$n.prototype.T$_n = function () {
      this.T$V = this.noticeContent.mouseY, Laya.stage.on(T$y.MOUSE_MOVE, this, this.T$Nn), Laya.stage.on(T$y.MOUSE_UP, this, this.T$I), Laya.stage.on(T$y.MOUSE_OUT, this, this.T$I);
    }, T$n.prototype.T$Nn = function () {
      if (this.noticeContent) {
        var T$n = this.T$V - this.noticeContent.mouseY;this.noticeContent.scrollY += T$n, this.T$V = this.noticeContent.mouseY;
      }
    }, T$n.prototype.T$I = function () {
      Laya.stage.off(T$y.MOUSE_MOVE, this, this.T$Nn), Laya.stage.off(T$y.MOUSE_UP, this, this.T$I), Laya.stage.off(T$y.MOUSE_OUT, this, this.T$I);
    }, T$n.prototype.T$yn = function () {
      this.T$H = this.mNoticePanel.mouseY, Laya.stage.on(T$y.MOUSE_MOVE, this, this.T$Sn), Laya.stage.on(T$y.MOUSE_UP, this, this.T$Z), Laya.stage.on(T$y.MOUSE_OUT, this, this.T$Z);
    }, T$n.prototype.T$Sn = function () {
      if (this.mNoticeContent) {
        var T$n = this.T$H - this.mNoticePanel.mouseY;this.mNoticeContent.y -= T$n, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.T$H = this.mNoticePanel.mouseY;
      }
    }, T$n.prototype.T$Z = function () {
      Laya.stage.off(T$y.MOUSE_MOVE, this, this.T$Sn), Laya.stage.off(T$y.MOUSE_UP, this, this.T$Z), Laya.stage.off(T$y.MOUSE_OUT, this, this.T$Z);
    }, T$n.prototype.T$Wn = function () {
      this.T$X = this.privacyPanel.mouseY, Laya.stage.on(T$y.MOUSE_MOVE, this, this.T$Mn), Laya.stage.on(T$y.MOUSE_UP, this, this.T$L), Laya.stage.on(T$y.MOUSE_OUT, this, this.T$L);
    }, T$n.prototype.T$Mn = function () {
      if (this.privacyContent) {
        var T$n = this.T$X - this.privacyPanel.mouseY;this.privacyContent.y -= T$n, this.privacyPanel.height < this.privacyContent.contextHeight ? this.privacyContent.y < this.privacyPanel.height - this.privacyContent.contextHeight ? this.privacyContent.y = this.privacyPanel.height - this.privacyContent.contextHeight : 0 < this.privacyContent.y && (this.privacyContent.y = 0) : this.privacyContent.y = 0, this.T$X = this.privacyPanel.mouseY;
      }
    }, T$n.prototype.T$L = function () {
      Laya.stage.off(T$y.MOUSE_MOVE, this, this.T$Mn), Laya.stage.off(T$y.MOUSE_UP, this, this.T$L), Laya.stage.off(T$y.MOUSE_OUT, this, this.T$L);
    }, T$n.prototype.T$Pn = function () {
      this.T$f = this.jumpPanel.mouseY, Laya.stage.on(T$y.MOUSE_MOVE, this, this.T$wn), Laya.stage.on(T$y.MOUSE_UP, this, this.T$h), Laya.stage.on(T$y.MOUSE_OUT, this, this.T$h);
    }, T$n.prototype.T$wn = function () {
      if (this.jumpContent) {
        var T$n = this.T$f - this.jumpPanel.mouseY;this.jumpContent.y -= T$n, this.jumpPanel.height < this.jumpContent.contextHeight ? this.jumpContent.y < this.jumpPanel.height - this.jumpContent.contextHeight ? this.jumpContent.y = this.jumpPanel.height - this.jumpContent.contextHeight : 0 < this.jumpContent.y && (this.jumpContent.y = 0) : this.jumpContent.y = 0, this.T$f = this.jumpPanel.mouseY;
      }
    }, T$n.prototype.T$h = function () {
      Laya.stage.off(T$y.MOUSE_MOVE, this, this.T$wn), Laya.stage.off(T$y.MOUSE_UP, this, this.T$h), Laya.stage.off(T$y.MOUSE_OUT, this, this.T$h);
    }, T$n.prototype.T$xn = function () {
      if (this.T$F.dataSource) {
        for (var T$n, T$C = 0; T$C < this.T$F.dataSource.length; T$C++) {
          var T$_ = this.T$F.dataSource[T$C];T$_[1] = T$C == this.T$F.selectedIndex, T$C == this.T$F.selectedIndex && (T$n = T$_[0]);
        }this.mNoticeTitle.text = T$n && T$n.title ? T$n.title : "", this.mNoticeContent.innerHTML = T$n && T$n.content ? T$n.content : "", this.mNoticeContent.y = 0;
      }
    }, T$n.prototype.T$bn = function () {
      var T$n = this.T$u.dataSource;if (T$n) {
        for (var T$C = 0; T$C < T$n.length; T$C++) {
          T$n[T$C][1] = T$C == this.T$u.selectedIndex;
        }var T$_ = this.T$an[this.T$u.selectedIndex];T$_ && T$_.content && (T$_.content = T$_.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "")), this.privacyTitle.text = T$_ && T$_.title ? T$_.title : "\u6807\u9898", this.privacyContent.innerHTML = T$_ && T$_.content ? T$_.content : "\u52a0\u8f7d\u4e2d...", this.privacyContent.y = 0;
      }
    }, T$n.prototype.T$mn = function (T$n) {
      var T$C = T$n.server_name;this.serverName.text = T$C + this.T$Bn(T$n), this.serverName.color = -1 === T$n.status ? "#d50000" : 0 === T$n.status ? "#49575a" : this.T$o, this.hotImage.skin = this.T$Vn(T$n), this.T$t.cdn = T$n.cdn || "", this.T$t.selectedServer = T$n, this.noticeBtn.visible = !0;
    }, T$n.prototype.T$gn = function (T$n) {
      this.showGroupList(T$n);
    }, T$n.prototype.T$Hn = function (T$n) {
      this.T$mn(T$n), this.listBg.visible = !1;
    }, T$n.prototype.showGroupList = function (T$n) {
      if (void 0 === T$n && (T$n = 0), this.parent) {
        var T$C = this.T$t.groupList;if (T$C && 0 !== T$C.length) {
          for (var T$_ = T$C.length, T$E = 0; T$E < T$_; T$E++) T$C[T$E].callBack = this.T$gn.bind(this), T$C[T$E].select = T$E == T$n, T$C[T$E].index = T$E;var T$y = (this.T$e.array = T$C)[T$n].id;this.T$t.serverList[T$y] ? this.showServerList(T$y) : this.T$t.hasServerReq || (this.T$t.hasServerReq = !0, -1 == T$y ? req_server_owner(0) : -2 == T$y ? req_recommend_server_list(0) : req_server_list(0, T$y));
        }
      }
    }, T$n.prototype.showServerList = function (T$n) {
      if (this.parent && this.T$t.serverList[T$n]) {
        for (var T$C = this.T$t.serverList[T$n], T$_ = T$C.length, T$E = 0; T$E < T$_; T$E++) T$C[T$E].callBack = this.T$Hn.bind(this);this.T$G.array = T$C;
      }
    }, T$n.prototype.T$Tn = function (T$n) {
      return -1 == T$n.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != T$n.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
    }, T$n.prototype.T$Vn = function (T$n) {
      var T$C = T$n.status,
          T$_ = T$n.is_recommend,
          T$E = "ttlgrtt/t19b.png";return 1 !== T$C && 2 !== T$C || 1 !== T$_ && 3 !== T$_ ? 1 !== T$C && 2 !== T$C || 2 !== T$_ ? -1 !== T$C && 0 !== T$C || (T$E = "ttlgrtt/t20b.png") : T$E = "ttlgrtt/t19b.png" : T$E = "ttlgrtt/t18b.png", T$E;
    }, T$n.prototype.T$Bn = function (T$n) {
      var T$C = T$n.status,
          T$_ = "";return 1 == T$n.is_recommend || 3 == T$n.is_recommend ? T$_ = "(\u63a8\u8350)" : -1 === T$C ? T$_ = "(\u7ef4\u62a4\u4e2d)" : 0 === T$C && (T$_ = "(\u5f85\u5f00\u670d)"), T$_;
    }, T$n.prototype.T$dn = function (T$n) {
      console.log("onMultiNoticeCallback, param = ", T$n);var T$C = Date.now() / 1e3,
          T$_ = localStorage.getItem(this.T$g),
          T$E = !(this.T$Q = []);if ("success" == T$n.state) for (var T$y in T$n.data) {
        var T$p = T$n.data[T$y];if (T$p) {
          var T$c = T$C < T$p.end_time,
              T$l = 1 == T$p.pop_type,
              T$W = 2 == T$p.pop_type && T$p.key + "" != T$_;!T$E && T$c && (T$l || T$W) && (T$E = !0), T$c && this.T$Q.push(T$p), T$W && localStorage.setItem(this.T$g, T$p.key + "");
        }
      }this.T$Q.sort(function (T$n, T$C) {
        return T$n.login_id - T$C.login_id;
      }), console.log("onMultiNoticeCallback, datas = ", this.T$Q), T$E && this.T$Yn();
    }, T$n.prototype.T$Yn = function () {
      if (this.T$F) {
        if (this.T$Q) {
          this.T$F.x = 2 < this.T$Q.length ? 0 : (this.boxTab.width - 274 * this.T$Q.length) / 2;for (var T$n = [], T$C = 0; T$C < this.T$Q.length; T$C++) {
            var T$_ = this.T$Q[T$C];T$n.push([T$_, T$C == this.T$F.selectedIndex]);
          }0 < (this.T$F.dataSource = T$n).length ? (this.T$F.selectedIndex = 0, this.T$F.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.T$Q.length <= 1, this.boxTab.visible = 1 < this.T$Q.length;
        }this.mNoticeBg.visible = !0;
      }
    }, T$n.prototype.T$Xn = function (T$n) {
      if (!this.destroyed) {
        if (console.log("p_onPrivacyCallback, param = ", T$n), "success" == T$n.state) for (var T$C in T$n.data) {
          var T$_ = Number(T$C),
              T$E = T$n.data[T$_];this.T$an && this.T$an[T$_] && (this.T$an[T$_].content = T$E.content);
        }this.T$bn();
      }
    }, T$n.prototype.T$kn = function () {
      for (var T$n = "", T$C = 0; T$C < this.T$an.length; T$C++) {
        T$n += '<a href="' + T$C + '" style="color:#14ff28;text-decoration:none">' + this.T$an[T$C].title + "</a>", T$C < this.T$an.length - 1 && (T$n += "\u3001");
      }this.privacyTip.innerHTML = "\u6211\u5df2\u7ecf\u8be6\u7ec6\u9605\u8bfb\u5e76\u540c\u610f" + T$n, this.privacyToggle.skin = "ttlgrtt/" + (this.T$An ? "t29b.png" : "t28b.png"), this.privacyTip.x = (720 - this.privacyTip.width) / 2, this.privacyToggle.x = this.privacyTip.x - 30, this.privacyBtn.visible = 0 < this.T$an.length, this.privacyToggle.visible = this.privacyTip.visible = 0 < this.T$an.length && 0 != this.T$On;
    }, T$n.prototype.T$sn = function (T$n) {
      if (void 0 === T$n && (T$n = 0), this.T$u) {
        if (this.T$an) {
          this.T$u.x = 2 < this.T$an.length ? 0 : (this.boxTab.width - 274 * this.T$an.length) / 2;for (var T$C = [], T$_ = 0; T$_ < this.T$an.length; T$_++) {
            var T$E = this.T$an[T$_],
                T$y = T$E && T$E.title ? T$E.title : "",
                T$p = T$_ == this.T$u.selectedIndex;T$C.push([T$y, T$p]);
          }0 < (this.T$u.dataSource = T$C).length ? (T$n < 0 && (T$n = 0), T$n > T$C.length - 1 && (T$n = 0), this.T$u.selectedIndex = T$n, this.T$u.scrollTo(T$n)) : (this.privacyTitle.text = "\u7a7a", this.privacyContent.text = ""), this.privacyClose2.visible = this.T$an.length <= 1, this.boxTabPrivacy.visible = 1 < this.T$an.length;
        }this.T$i && (this.T$i = !1, req_privacy(this.T$t.pkgName, this.T$Xn.bind(this))), this.privacyBg.visible = !0;
      }
    }, T$n.prototype.openJumpView = function (T$n, T$C, T$_, T$E) {
      void 0 === T$E && (T$E = !1), this.jumpTitle.text = T$n || "\u6682\u65e0\u516c\u544a", this.jumpContent.innerHTML = T$C || "", this.btnJump.label = T$_ || "\u786e\u5b9a", this.jumpContent.y = 0, this.jumpBg.visible = !0, this.closeBtn.visible = T$E;
    }, T$n.prototype.showAgeTipsBtn = function (T$n, T$C, T$_, T$E, T$y) {
      (this.ageTipBtn.visible = T$n) && (this.ageTipBtn.skin = T$C || "ttlgrtt/t11b.png"), this.ageTipsContent = T$_, this.ageTipBtn.x = T$E || 0, this.ageTipBtn.y = T$y || 0;
    }, T$n.prototype.T$cn = function () {
      this.openJumpView("\u9002\u9f84\u516c\u544a", this.ageTipsContent, "\u786e\u8ba4", !0);
    }, T$n.prototype.T$tn = function (T$n) {
      this.txtTip.text = T$n, this.txtTip.y = 640, this.txtTip.visible = !0, this.T$$n = 1, Laya.timer.clear(this, this.T$v), this.T$v(), Laya.timer.frameLoop(1, this, this.T$v);
    }, T$n.prototype.T$v = function () {
      this.txtTip.y -= this.T$$n, this.T$$n *= 1.1, this.txtTip.y <= 590 && (this.txtTip.visible = !1, Laya.timer.clear(this, this.T$v));
    }, T$n;
  }(ui.T$_), T$C.SelectServerPanel = T$_;
}(modules || (modules = {}));var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.T$E.AuthorizationPanel,
    LoadingPanel = modules.T$E.LoadingPanel,
    SelectServerPanel = modules.T$E.SelectServerPanel,
    ServerLoading = function () {
  function T$W(T$n) {
    this.m_loadingRes = ["ttdt/t13a.png", "ttdt/t15a.png", "ttdt/t14a.png", "ttdt/t16a.png", "ttdt/t17a.png", "ttdt/t18a.png", "ttdt/t19a.png", "ttdt/t20a.png", "tft/t1c.png", "tft/t2c.png", "tft/t3c.png", "tft/t4c.png", "tft/t5c.png", "ttdt/t3a.jpg", "ttdt/t12a.jpg", "ttdt/t1a.png", "ttdt/t2a.png", "ttdt/t4a.jpg", "ttdt/t6a.jpg", "ttdt/t8a.jpg", "ttdt/t10a.jpg", "ttdt/t5a.jpg", "ttdt/t7a.jpg", "ttdt/t9a.jpg", "ttdt/t11a.jpg"], this.m_serverRes = ["ttlgrtt/t10b.png", "ttlgrtt/t11b.png", "ttlgrtt/t12b.png", "ttlgrtt/t13b.png", "ttlgrtt/t14b.png", "ttlgrtt/t15b.png", "ttlgrtt/t16b.png", "ttlgrtt/t17b.png", "ttlgrtt/t18b.png", "ttlgrtt/t19b.png", "ttlgrtt/t20b.png", "ttlgrtt/t21b.png", "ttlgrtt/t2b.jpg", "ttlgrtt/t3b.jpg", "ttlgrtt/t4b.jpg", "ttlgrtt/t5b.jpg", "ttlgrtt/t6b.jpg", "ttlgrtt/t1b.png", "ttlgrtt/t8b.png", "ttlgrtt/t9b.png", "ttlgrtt/t24b.png", "ttlgrtt/t25b.png", "ttlgrtt/t27b.png", "ttlgrtt/t29b.png", "ttlgrtt/t28b.png", "ttlgrtt/t123b.png", "ttlgrtt/t199b.png"], this.copyRightUrl = "ttlgrtt/t1b.png", this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.T$in = !1, this.T$fn = "", T$W.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var T$C = Laya.AtlasResourceManager;T$C.maxTextureCount = 6, T$C.atlasTextureWidth = T$C.atlasTextureHeight = 1024, T$C._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.T$en.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } }, "t28b.png": { frame: { h: 25, idx: 0, w: 25, x: 444, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 2 } }, "t29b.png": { frame: { h: 27, idx: 0, w: 26, x: 470, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = T$W.instance.requestWeb, Browser.window.imgMgrLoad = T$W.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.T$en();
  }return T$W.prototype.changeServerLoading = function (T$n) {
    T$W.instance.m_layer.visible = T$n;
  }, T$W.prototype.openAuthor = function () {
    T$W.instance.m_author || (T$W.instance.m_author = new AuthorizationPanel()), T$W.instance.m_author.parent || T$W.instance.m_layer.addChild(T$W.instance.m_author), T$W.instance.T$Gn();
  }, T$W.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, T$W.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, T$W.prototype.T$Fn = function () {
    T$W.instance.m_server || (T$W.instance.m_server = new SelectServerPanel(this.copyRightUrl)), T$W.instance.m_server.parent || T$W.instance.m_layer.addChild(T$W.instance.m_server), T$W.instance.T$Gn();
  }, T$W.prototype.openJumpView = function (T$n, T$C, T$_, T$E) {
    void 0 === T$E && (T$E = !1), this.T$Fn(), T$W.instance.m_server.openJumpView(T$n, T$C, T$_, T$E);
  }, T$W.prototype.openJumpTipsBtn = function (T$n, T$C, T$_, T$E, T$y) {
    this.T$Fn(), T$W.instance.m_server.showAgeTipsBtn(T$n, T$C, T$_, T$E, T$y);
  }, T$W.prototype.getCertificatePng = function () {
    window.sdkInitRes = window.sdkInitRes || {};var T$n = "ttlgrtt/t123b.png",
        T$C = "ttlgrtt/t1b.png";return 1 == sdkInitRes.develop ? 0 == (PF_INFO.develop_certificate_pkg || 0) ? T$n : T$C : 0 == PF_INFO.release_certificate_pkg ? T$n : T$C;
  }, T$W.prototype.openServer = function (T$n, T$C, T$_) {
    var T$E = this;this.copyRightUrl = T$_ || this.getCertificatePng();for (var T$y = function () {
      T$E.T$Fn(), T$n && T$C && T$n.call(T$C);
    }, T$p = !0, T$c = 0, T$l = this.m_serverRes; T$c < T$l.length; T$c++) {
      var T$W = T$l[T$c];if (null == Laya.Loader.getRes(T$W)) {
        T$p = !1;break;
      }
    }T$p ? T$y() : Laya.loader.load(this.m_serverRes, Handler.create(this, T$y));
  }, T$W.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, T$W.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, T$W.prototype.openLoading = function (T$n, T$C) {
    void 0 === T$n && (T$n = 0), T$C = T$C || this.getCertificatePng(), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      T$W.instance.m_loading || (T$W.instance.m_loading = new LoadingPanel(T$n, T$C)), T$W.instance.m_loading.parent || T$W.instance.m_layer.addChild(T$W.instance.m_loading), T$W.instance.T$Gn();
    }));
  }, T$W.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var T$n = 0, T$C = this.m_serverRes; T$n < T$C.length; T$n++) {
      var T$_ = T$C[T$n];Laya.Loader.clearCache(T$W.instance, T$_), Laya.Loader.clearRes(T$_, !0);
    }for (var T$E = 0, T$y = this.m_loadingRes; T$E < T$y.length; T$E++) {
      T$_ = T$y[T$E];Laya.Loader.clearCache(T$W.instance, T$_), Laya.Loader.clearRes(T$_, !0);
    }this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, T$W.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && T$W.instance.m_loading.showGetBtn();
  }, T$W.prototype.enterDefaultServer = function () {
    var T$n = Browser.window.PF_INFO.selectedServer;this.T$in || -1 == T$n.status || 0 == T$n.status || (this.T$in = !0, Browser.window.PF_INFO.selectedServer = T$n, req_server_check_ban(0, T$n.server_id));
  }, T$W.prototype.sendRecord = function () {
    var T$n = "";T$n += "newRegister=" + Browser.window.PF_INFO.newRegister, T$n += ", isPrelodServer=" + this.m_isPrelodServer, T$n += ", SelectServerPanel=" + (null != T$W.instance.m_server), T$n += ", isPrelodLoading=" + this.m_isPrelodLoading, T$n += ", LoadingPanel=" + (null != T$W.instance.m_loading), T$n += ", resMgrLoad=" + (Browser.window.resMgrLoad == T$W.instance.requestWeb), T$n += ", imgMgrLoad=" + (Browser.window.imgMgrLoad == T$W.instance.requestWeb), T$n += ", errUrls=" + T$W.instance.T$fn;for (var T$C = 0, T$_ = this.m_serverRes; T$C < T$_.length; T$C++) {
      T$n += ", " + (T$p = T$_[T$C]) + "=" + (null != Laya.Loader.getRes(T$p));
    }for (var T$E = 0, T$y = this.m_loadingRes; T$E < T$y.length; T$E++) {
      var T$p;T$n += ", " + (T$p = T$y[T$E]) + "=" + (null != Laya.Loader.getRes(T$p));
    }var T$c = Browser.window.PF_INFO.selectedServer;T$c && (T$n += ", server_status=" + T$c.status, T$n += ", server_id=" + T$c.server_id, T$n += ", server_name=" + T$c.server_name);var T$l = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: T$n });console.error(T$l), this.T$un && this.T$un == T$n || (this.T$un = T$n, reqRecordError(T$l));
  }, T$W.prototype.T$on = function () {
    var T$n = Laya.stage,
        T$C = Math.floor(T$n.width),
        T$_ = Math.floor(T$n.height);T$_ / T$C < 1.7777778 ? (this.viewW = Math.floor(T$C / (T$_ / 1280)), this.viewH = 1280, this.viewS = T$_ / 1280) : (this.viewW = 720, this.viewH = Math.floor(T$_ / (T$C / 720)), this.viewS = T$C / 720);var T$E = Math.floor(T$n.width),
        T$y = Math.floor(T$n.height);T$y / T$E < 1.7777778 ? (this.viewW = Math.floor(T$E / (T$y / 1280)), this.viewH = 1280, this.viewS = T$y / 1280) : (this.viewW = 720, this.viewH = Math.floor(T$y / (T$E / 720)), this.viewS = T$E / 720), this.T$Gn();
  }, T$W.prototype.T$Gn = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, T$W.prototype.T$en = function () {
    if (Input.isInputting && Browser.onMobile) {
      var T$n = parseInt(Input.inputContainer.style.top.replace("px", "")),
          T$C = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS,
          T$_ = Browser.clientWidth / Render.canvas.width;return 0 < (T$n = Browser.clientHeight - T$C * T$_ - T$n) && (T$n = 0), void (Browser.container.style.top = T$n + "px");
    }Browser.container.style.top = "0px";var T$E = Math.floor(Browser.width),
        T$y = Math.floor(Browser.height);T$E = T$E + 1 & 2147483646, T$y = T$y + 1 & 2147483646;var T$p = Laya.stage;3 == ENV ? (T$p.scaleMode = Laya.Stage.SCALE_NOSCALE, T$p.width = T$E, T$p.height = T$y) : T$y < T$E ? (T$p.scaleMode = Laya.Stage.SCALE_NOSCALE, T$p.width = T$E, T$p.height = T$y) : (T$p.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, T$p.width = 840, T$p.height = Math.floor(T$y / (T$E / 840)) + 1 & 2147483646), this.T$on();
  }, T$W.prototype.requestWeb = function (T$n, T$C) {
    function T$_() {
      T$E.onload = null, T$E.onerror = null;
    }var T$E,
        T$y = T$n;(T$E = new Browser.window.Image()).onload = function () {
      T$_(), T$C(T$y, 200, T$E);
    }, T$E.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", T$y), T$W.instance.T$fn += T$y + "|", T$_(), T$C(T$y, 404, null);
    }, T$E.src = T$y, -1 == T$W.instance.m_serverRes.indexOf(T$y) && -1 == T$W.instance.m_loadingRes.indexOf(T$y) || Laya.Loader.keepCache(T$W.instance, T$y);
  }, T$W.prototype.T$Qn = function (T$n, T$C) {
    return -1 != T$n.indexOf(T$C, T$n.length - T$C.length);
  }, T$W;
}();!function (T$n) {
  var T$C, T$_;T$C = T$n.T$E || (T$n.T$E = {}), T$_ = function (T$C) {
    function T$n() {
      var T$n = T$C.call(this) || this;return T$n.T$In = "#72441d", T$n.T$Zn = "#263d7d", T$n.width = 274, T$n.height = 59, T$n.T$Ln = new Laya.Image(), T$n.addChild(T$n.T$Ln), T$n.T$hn = new Laya.Label(), T$n.T$hn.fontSize = 30, T$n.T$hn.color = T$n.T$Zn, T$n.addChild(T$n.T$hn), T$n.T$hn.centerX = 0, T$n.T$hn.centerY = 0, T$n;
    }return __extends(T$n, T$C), T$n.prototype.initialize = function () {
      T$C.prototype.initialize.call(this), this.T$t = Browser.window.PF_INFO;this.T$t.loadingType;this.addEvt();
    }, Object.defineProperty(T$n.prototype, "dataSource", { set: function (T$n) {
        T$n && this.setData(T$n);
      }, enumerable: !0, configurable: !0 }), T$n.prototype.setData = function (T$n) {
      this.T$vn = T$n[0], this.T$Rn = T$n[1], this.T$hn.text = this.T$vn.title, this.T$hn.color = this.T$Rn ? this.T$In : this.T$Zn, this.T$Ln.skin = this.T$Rn ? "ttlgrtt/t25b.png" : "ttlgrtt/t24b.png";
    }, T$n.prototype.destroy = function (T$n) {
      void 0 === T$n && (T$n = !0), this.rmEvts(), T$C.prototype.destroy.call(this, T$n);
    }, T$n.prototype.addEvt = function () {}, T$n.prototype.rmEvts = function () {}, T$n;
  }(Laya.View), T$C.NoticeItem = T$_;
}(modules || (modules = {})), function (T$n) {
  var T$C, T$_;T$C = T$n.T$E || (T$n.T$E = {}), T$_ = function (T$C) {
    function T$n() {
      var T$n = T$C.call(this) || this;return T$n.T$In = "#72441d", T$n.T$Zn = "#263d7d", T$n.width = 274, T$n.height = 59, T$n.T$Ln = new Laya.Image(), T$n.addChild(T$n.T$Ln), T$n.T$hn = new Laya.Label(), T$n.T$hn.fontSize = 30, T$n.T$hn.color = T$n.T$Zn, T$n.addChild(T$n.T$hn), T$n.T$hn.centerX = 0, T$n.T$hn.centerY = 0, T$n;
    }return __extends(T$n, T$C), T$n.prototype.initialize = function () {
      T$C.prototype.initialize.call(this), this.T$t = Browser.window.PF_INFO;this.T$t.loadingType;this.addEvt();
    }, Object.defineProperty(T$n.prototype, "dataSource", { set: function (T$n) {
        T$n && this.setData(T$n);
      }, enumerable: !0, configurable: !0 }), T$n.prototype.setData = function (T$n) {
      this.T$zn = T$n[0], this.T$Rn = T$n[1], this.T$hn.text = this.T$zn, this.T$hn.color = this.T$Rn ? this.T$In : this.T$Zn, this.T$Ln.skin = this.T$Rn ? "ttlgrtt/t25b.png" : "ttlgrtt/t24b.png";
    }, T$n.prototype.destroy = function (T$n) {
      void 0 === T$n && (T$n = !0), this.rmEvts(), T$C.prototype.destroy.call(this, T$n);
    }, T$n.prototype.addEvt = function () {}, T$n.prototype.rmEvts = function () {}, T$n;
  }(Laya.View), T$C.PrivacyItem = T$_;
}(modules || (modules = {})), function (T$n) {
  var T$C, T$_;T$C = T$n.T$E || (T$n.T$E = {}), T$_ = function (T$C) {
    function T$n() {
      var T$n = T$C.call(this) || this;return T$n.width = 192, T$n.height = 70, T$n.T$Ln = new Laya.Image(), T$n.addChild(T$n.T$Ln), T$n.T$Un = new Laya.Label(), T$n.T$Un.fontSize = 28, T$n.T$Un.color = T$n.T$o, T$n.addChild(T$n.T$Un), T$n.T$Un.centerX = 0, T$n.T$Un.centerY = 0, T$n.T$Kn = new Laya.Label(), T$n.T$Kn.fontSize = 22, T$n.T$Kn.color = T$n.T$o, T$n.addChild(T$n.T$Kn), T$n.T$Kn.centerX = 0, T$n.T$Kn.y = 11, T$n.T$Dn = new Laya.Label(), T$n.T$Dn.fontSize = 26, T$n.T$Dn.color = T$n.T$o, T$n.addChild(T$n.T$Dn), T$n.T$Dn.centerX = 0, T$n.T$Dn.y = 39, T$n;
    }return __extends(T$n, T$C), T$n.prototype.initialize = function () {
      T$C.prototype.initialize.call(this), this.T$t = Browser.window.PF_INFO;var T$n = this.T$t.loadingType;this.T$o = 1 == T$n ? "#263d7d" : 2 == T$n ? "#263d7d" : 3 == T$n ? "#763042" : "#263d7d", this.addEvt();
    }, Object.defineProperty(T$n.prototype, "dataSource", { set: function (T$n) {
        T$n && this.setData(T$n);
      }, enumerable: !0, configurable: !0 }), T$n.prototype.setData = function (T$n) {
      this.T$vn = T$n;var T$C = this.T$vn.id,
          T$_ = this.T$vn.name;if (this.T$Un.visible = this.T$Kn.visible = this.T$Dn.visible = !1, -1 == T$C || -2 == T$C) this.T$Un.visible = !0, this.T$Un.text = T$_;else {
        var T$E = T$_,
            T$y = "1-10\u670d",
            T$p = T$_.match("[0-9]{1,}");T$p && null != T$p.index && (T$E = T$_.slice(0, T$p.index), T$y = T$_.slice(T$p.index)), this.T$Kn.visible = this.T$Dn.visible = !0, this.T$Kn.text = T$E, this.T$Dn.text = T$y;
      }this.T$Ln.skin = T$n.select ? "ttlgrtt/t14b.png" : "ttlgrtt/t15b.png";
    }, T$n.prototype.destroy = function (T$n) {
      void 0 === T$n && (T$n = !0), this.rmEvts(), T$C.prototype.destroy.call(this, T$n);
    }, T$n.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, T$n.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, T$n.prototype.clkHdler = function () {
      this.T$vn && this.T$vn.callBack && this.T$vn.callBack(this.T$vn.index);
    }, T$n;
  }(Laya.View), T$C.SelectLeftListItem = T$_;
}(modules || (modules = {})), function (T$n) {
  var T$C, T$_;T$C = T$n.T$E || (T$n.T$E = {}), T$_ = function (T$C) {
    function T$n() {
      var T$n = T$C.call(this) || this;return T$n.width = 358, T$n.height = 70, T$n.T$Ln = new Laya.Image("ttlgrtt/t16b.png"), T$n.addChild(T$n.T$Ln), T$n.T$Ln.graphics.drawRect(0, 0, T$n.width, T$n.height, "#00sasd"), T$n.T$nC = new Laya.Image(), T$n.T$nC.centerY = 0, T$n.T$nC.x = 7, T$n.addChild(T$n.T$nC), T$n.T$Un = new Laya.Label(), T$n.T$Un.fontSize = 24, T$n.T$Un.color = T$n.T$o, T$n.T$Un.x = 56, T$n.T$Un.centerY = 0, T$n.addChild(T$n.T$Un), T$n.T$CC = new Laya.Label(), T$n.T$CC.fontSize = 24, T$n.T$CC.color = T$n.T$o, T$n.T$CC.x = 246, T$n.T$CC.centerY = 0, T$n.addChild(T$n.T$CC), T$n.T$_C = new Laya.Image(), T$n.T$_C.top = 0, T$n.T$_C.right = 0, T$n.addChild(T$n.T$_C), T$n.T$EC = new Laya.Label(), T$n.T$EC.fontSize = 20, T$n.T$EC.color = "#ffffff", T$n.T$EC.x = 225, T$n.T$EC.y = 46, T$n.addChild(T$n.T$EC), T$n;
    }return __extends(T$n, T$C), T$n.prototype.initialize = function () {
      T$C.prototype.initialize.call(this), this.T$t = Browser.window.PF_INFO;var T$n = this.T$t.loadingType;this.T$o = 1 == T$n ? "#34267d" : 2 == T$n ? "#34267d" : 3 == T$n ? "#763042" : "#34267d", this.addEvt();
    }, Object.defineProperty(T$n.prototype, "dataSource", { set: function (T$n) {
        T$n && this.setData(T$n);
      }, enumerable: !0, configurable: !0 }), T$n.prototype.setData = function (T$n) {
      this.T$vn = T$n;var T$C = this.T$vn.status,
          T$_ = this.T$vn.server_name;this.T$nC.skin = this.getStatusSrc(this.T$vn), this.T$Un.color = -1 === T$C ? "#d50000" : 0 === T$C ? "#49575a" : this.T$o, this.T$Un.text = T$_, this.T$CC.text = -1 === T$C ? "\u7ef4\u62a4\u4e2d" : 0 === T$C ? "\u672a\u5f00\u670d" : "\u5df2\u5f00\u670d";var T$E = 1 == this.T$vn.is_recommend || 3 == this.T$vn.is_recommend;(this.T$_C.visible = T$E) && (this.T$_C.skin = "ttlgrtt/t199b.png"), this.T$EC.text = -1 == this.T$vn.status && this.T$vn.maintain_time ? this.T$vn.maintain_time : "";
    }, T$n.prototype.destroy = function (T$n) {
      void 0 === T$n && (T$n = !0), this.rmEvts(), T$C.prototype.destroy.call(this, T$n);
    }, T$n.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, T$n.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, T$n.prototype.clkHdler = function () {
      this.T$vn && this.T$vn.callBack && this.T$vn.callBack(this.T$vn);
    }, T$n.prototype.getStatusSrc = function (T$n) {
      var T$C = T$n.status,
          T$_ = T$n.is_recommend,
          T$E = "ttlgrtt/t19b.png";return 1 !== T$C && 2 !== T$C || 1 !== T$_ && 3 !== T$_ ? 1 !== T$C && 2 !== T$C || 2 !== T$_ ? -1 !== T$C && 0 !== T$C || (T$E = "ttlgrtt/t20b.png") : T$E = "ttlgrtt/t19b.png" : T$E = "ttlgrtt/t18b.png", T$E;
    }, T$n;
  }(Laya.View), T$C.SelectRightListItem = T$_;
}(modules || (modules = {})), window.ServerLoading = ServerLoading;