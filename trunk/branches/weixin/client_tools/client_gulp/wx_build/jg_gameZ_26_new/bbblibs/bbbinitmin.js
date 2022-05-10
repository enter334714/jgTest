"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var $d = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function ($v, $g) {
    $v.__proto__ = $g;
  } || function ($v, $g) {
    for (var $Q in $g) $g.hasOwnProperty($Q) && ($v[$Q] = $g[$Q]);
  };return function ($v, $g) {
    function $Q() {
      this.constructor = $v;
    }$d($v, $g), $v.prototype = null === $g ? Object.create($g) : ($Q.prototype = $g.prototype, new $Q());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function ($Q) {
  var $v = function ($v) {
    function $g() {
      return $v.call(this) || this;
    }return __extends($g, $v), $g.prototype.createChildren = function () {
      $v.prototype.createChildren.call(this), this.createView($Q.$v.uiView);
    }, $g.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/b2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "bbblogin/b6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "bbblogin/b3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "bbblogin/b4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "bbblogin/b5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] }, $g;
  }(View);$Q.$v = $v;
}(ui || (ui = {})), function ($Q) {
  var $v = function ($v) {
    function $g() {
      return $v.call(this) || this;
    }return __extends($g, $v), $g.prototype.createChildren = function () {
      $v.prototype.createChildren.call(this), this.createView($Q.$g.uiView);
    }, $g.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/b1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "bbbloding/a13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "bbbloding/a14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "bbbloding/a16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "bbbloding/a17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "bbbloding/a20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "bbbloding/a19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "bbbloding/a18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "bbbloding/a18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "bbbloding/a1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }] }, $g;
  }(View);$Q.$g = $v;
}(ui || (ui = {})), function ($Q) {
  var $v = function ($v) {
    function $g() {
      return $v.call(this) || this;
    }return __extends($g, $v), $g.prototype.createChildren = function () {
      View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), View.regComponent("Text", laya.display.Text), $v.prototype.createChildren.call(this), this.createView($Q.$Q.uiView);
    }, $g.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/b2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "bbblogin/b6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "bbblogin/b3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "bbblogin/b4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "bbblogin/b5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "bbblogin/b21b.png", centerX: 0 } }, { type: "Image", props: { y: 1102, var: "imgCheatTip", skin: "bbblogin/b27b.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 927, x: 159, var: "hotImage", skin: "bbblogin/b18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/b1b.png", centerX: 0, bottom: 30 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "bbblogin/b12b.png", name: "enterBtn", centerX: 0 } }, { type: "Image", props: { x: 196, visible: !1, var: "privacyToggle", skin: "bbblogin/b29b.png", bottom: 4 } }, { type: "Label", props: { y: 640, x: 0, width: 720, var: "txtTip", valign: "middle", text: "\u63d0\u793a\u5185\u5bb9", strokeColor: "#ffffff", stroke: 2, height: 32, fontSize: 32, color: "#ff0000", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }, { type: "HTMLDivElement", props: { y: 1255, x: 256, visible: !1, var: "privacyTip", height: 16 } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "bbblogin/b11b.png" } }, { type: "Image", props: { y: 257, x: 594, visible: !1, var: "privacyBtn", skin: "bbblogin/b13b.png", name: "privacyBtn" } }, { type: "Image", props: { visible: !1, var: "ageTipBtn", top: 1, scaleY: .5, scaleX: .5, name: "privacyBtn", left: 1 } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "bbblogin/b8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "bbblogin/b10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "mNoticeBg", skin: "bbblogin/b8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "bbblogin/b10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "privacyBg", skin: "bbblogin/b8b.png", name: "privacyBg", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "privacyClose", skin: "bbblogin/b10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "privacyClose2", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTabPrivacy", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "privacyTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "privacyPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "privacyContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "bbblogin/b9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "bbblogin/b17b.png" } }] }, { type: "Box", props: { width: 720, visible: !1, var: "jumpBg", mouseThrough: !1, height: 1280, centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { x: 33, width: 655, skin: "bbblogin/b8b.png", height: 994, centerY: 0, centerX: 0 } }, { type: "Button", props: { width: 274, var: "btnJump", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u8df3\u8f6c", height: 59, centerY: 436, centerX: 0 } }, { type: "Label", props: { width: 234, var: "jumpTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", fontSize: 30, color: "#ffffff", centerY: -408, centerX: 0, bold: !1, align: "center" } }, { type: "Panel", props: { x: 94, width: 545, var: "jumpPanel", height: 733, centerY: 10 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "jumpContent", height: 733 } }] }, { type: "Image", props: { x: 596, visible: !1, var: "closeBtn", skin: "bbblogin/b17b.png", name: "closeBtn", centerY: -402 } }] }] }, $g;
  }(View);$Q.$Q = $v;
}(ui || (ui = {})), function ($v) {
  var $g, $Q;$g = $v.$d || ($v.$d = {}), $Q = function ($g) {
    function $v() {
      return $g.call(this) || this;
    }return __extends($v, $g), $v.prototype.initialize = function () {
      $g.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
    }, $v.prototype.addEvt = function () {
      this.on(Laya.Event.CLICK, this, this.$r);
    }, $v.prototype.rmEvts = function () {
      this.off(Laya.Event.CLICK, this, this.$r);
    }, $v.prototype.onOpened = function () {
      this.$k = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
    }, $v.prototype.destroy = function ($v) {
      void 0 === $v && ($v = !0), this.rmEvts(), $g.prototype.destroy.call(this, $v);
    }, $v.prototype.$r = function () {
      1e4 < Date.now() - this.$k && (this.$k -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
    }, $v;
  }(ui.$v), $g.AuthorizationPanel = $Q;
}(modules || (modules = {})), function ($v) {
  var $g, $Q, $d, $r, $$, $k;$g = $v.$$ || ($v.$$ = {}), $Q = Laya.Event, $d = Laya.Image, $r = Laya.Component, $$ = Laya.Loader, $k = function ($g) {
    function $a() {
      var $v = $g.call(this) || this;return $v.$b = new $d(), $v.addChild($v.$b), $v.$a = null, $v.$M = [], $v.$Y = !1, $v.$D = 0, $v.$J = !0, $v.$p = 6, $v.$T = !1, $v.on($Q.DISPLAY, $v, $v.$t), $v.on($Q.UNDISPLAY, $v, $v.$q), $v;
    }return __extends($a, $g), $a.create = function ($v, $g, $Q, $d, $r, $k, $$) {
      void 0 === $d && ($d = 0), void 0 === $r && ($r = 6), void 0 === $k && ($k = !0), void 0 === $$ && ($$ = !1);var $b = new $a();return $b.skin($g, $Q, $d), $b.durFrm = $r, $b.loop = $k, $b.atHide = $$, $v && $v.addChild($b), $b;
    }, $a.play = function ($v) {
      $v && ($v.visible = !0, $v.play());
    }, $a.stop = function ($v) {
      $v && ($v.visible = !1, $v.stop());
    }, $a.prototype.destroy = function ($v) {
      Laya.timer.clear(this, this.$C), this.off($Q.DISPLAY, this, this.$t), this.off($Q.UNDISPLAY, this, this.$q), $g.prototype.destroy.call(this, $v);
    }, $a.prototype.$t = function () {}, $a.prototype.$q = function () {}, $a.prototype.skin = function ($v, $g, $Q) {
      if (this.$a != $v) {
        this.$a = $v, this.$M = [];for (var $d = 0, $r = $Q; $r <= $g; $r++) this.$M[$d++] = $v + "/" + $r + ".png";var $k = $$.getRes(this.$M[0]);$k && (this.width = $k.sourceWidth, this.height = $k.sourceHeight), this.$C();
      }
    }, Object.defineProperty($a.prototype, "atHide", { get: function () {
        return this.$T;
      }, set: function ($v) {
        this.$T = $v;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty($a.prototype, "durFrm", { set: function ($v) {
        this.$p != $v && (this.$p = $v, this.$Y && (Laya.timer.clear(this, this.$C), Laya.timer.loop(this.$p * (1e3 / 60), this, this.$C)));
      }, enumerable: !0, configurable: !0 }), Object.defineProperty($a.prototype, "loop", { set: function ($v) {
        this.$J = $v;
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
      this.$M && 0 != this.$M.length && (this.$b.skin = this.$M[this.$D], this.$Y && (this.$D++, this.$D == this.$M.length && (this.$J ? this.$D = 0 : (Laya.timer.clear(this, this.$C), this.$Y = !1, this.$T && (this.visible = !1), this.event($Q.COMPLETE)))));
    }, $a;
  }($r), $g.PanelEff = $k;
}(modules || (modules = {})), function ($v) {
  var $g, $Q, $d;$g = $v.$d || ($v.$d = {}), $Q = $v.$$.PanelEff, $d = function ($d) {
    function $v($v, $g) {
      void 0 === $v && ($v = 0);var $Q = $d.call(this) || this;return $Q.$G = { bgImgSkin: "bbbloding/a3a.jpg", topImgSkin: "bbbloding/a10a.jpg", btmImgSkin: "bbbloding/a4a.jpg", leftImgSkin: "bbbloding/a6a.jpg", rightImgSkin: "bbbloding/a8a.jpg", loadingBarBgSkin: "bbbloding/a13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, $Q.$s = { bgImgSkin: "bbbloding/a12a.jpg", topImgSkin: "bbbloding/a11a.jpg", btmImgSkin: "bbbloding/a5a.jpg", leftImgSkin: "bbbloding/a7a.jpg", rightImgSkin: "bbbloding/a9a.jpg", loadingBarBgSkin: "bbbloding/a15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, $Q.$A = 0, $Q.$h(1 == $v ? $Q.$s : $Q.$G), $Q.copyRightImg.skin = $g, $Q;
    }return __extends($v, $d), $v.prototype.initialize = function () {
      if ($d.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.$P = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.$P) {
        var $v = this.$P.loadingType;this.loadingTips.color = 1 == $v ? "#f2ffb5" : 2 == $v ? "#000000" : 101 == $v ? "#000000" : "#f2ffb5";
      }this.$W = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
    }, $v.prototype.toAllProgress = function ($v) {
      var $g = this;if (-1 === $v) return $g.$A = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);if (-2 !== $v) {
        $g.$A < .9 ? $g.$A += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : $g.$A < 1 && ($g.$A += 1e-4), .9999 < $g.$A && ($g.$A = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
          .9 < $g.$A && toAllProgress(-1);
        }));var $Q = $g.$A,
            $d = 590 * $Q;$g.$A = $g.$A > $Q ? $g.$A : $Q, $g.loadingBar.width = $d;var $r = $g.loadingBar.x + $d;$g.loadingImg2.x = $r - 15, 364 <= $r ? ($g.loadingImg1.visible = !0, $g.loadingImg1.x = $r - 202) : $g.loadingImg1.visible = !1, $g.percentageTips.text = (100 * $Q >> 0) + "%", $g.$A < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress);
      } else Laya.timer.clear(this, this.toAllProgress);
    }, $v.prototype.toProgress = function ($v, $g, $Q) {
      var $d = this;1 < $v && ($v = 1);var $r = 590 * $v;$d.$A = $d.$A > $v ? $d.$A : $v, $d.loadingBar.width = $r;var $k = $d.loadingBar.x + $r;$d.loadingImg2.x = $k - 15, 364 <= $k ? ($d.loadingImg1.visible = !0, $d.loadingImg1.x = $k - 202) : $d.loadingImg1.visible = !1, $d.percentageTips.text = (100 * $v >> 0) + "%", $d.loadingTips.text = $g;for (var $$ = $Q - 1, $b = 0; $b < this.$W.length; $b++) $d.$W[$b].skin = $b < $$ ? "bbbloding/a20a.png" : $$ === $b ? "bbbloding/a19a.png" : "bbbloding/a18a.png";
    }, $v.prototype.onOpened = function () {
      this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$P.lastVersion + "      \u7248\u672c\uff1a" + this.$P.wxVersion, this.showGetBtn();
    }, $v.prototype.close = function ($v) {
      this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.$F), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.$l);
    }, $v.prototype.resetWinFun = function () {
      Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
    }, $v.prototype.destroy = function ($v) {
      void 0 === $v && ($v = !0), this.resetWinFun(), $d.prototype.destroy.call(this, $v);
    }, $v.prototype.showGetBtn = function () {
      this.$P.showGetBtn && 1 == this.$P.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "bbbloding/a1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.$l), this.$o(), this.$E(!0));
    }, $v.prototype.$l = function () {
      this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "bbbloding/a2a.png", this.$V(), this.$E(!1));
    }, $v.prototype.$h = function ($v) {
      this.bgImg.skin = $v.bgImgSkin, this.topImg.skin = $v.topImgSkin, this.btmImg.skin = $v.btmImgSkin, this.leftImg.skin = $v.leftImgSkin, this.rightImg.skin = $v.rightImgSkin, this.copyRightImg.bottom = $v.copyRightImgBottom, this.processBox1.y = $v.processBox1Y, this.processBox2.y = $v.processBox2Y, this.loadingBarBg.skin = $v.loadingBarBgSkin, this.loadingTips.fontSize = $v.loadingTipsSize, this.getTipsBtn.visible = this.$P.showGetBtn && 1 == this.$P.showGetBtn, this.getTipsBtn.visible ? this.$o() : this.$V(), this.$E(this.getTipsBtn.visible);
    }, $v.prototype.$o = function () {
      this.$Z || (this.$Z = $Q.create(this.getTipsBtn, "bwxeff", 4, 0, 12), this.$Z.pos(161, 106), this.$Z.scale(1.14, 1.15)), $Q.play(this.$Z);
    }, $v.prototype.$V = function () {
      this.$Z && $Q.stop(this.$Z);
    }, $v.prototype.$E = function ($v) {
      Laya.timer.clear(this, this.$F), $v ? (this.$f = 9, this.txtGetTm.visible = !0, this.$F(), Laya.timer.loop(1e3, this, this.$F)) : this.txtGetTm.visible = !1;
    }, $v.prototype.$F = function () {
      0 < this.$f ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.$f + "s)", this.$f--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.$F), this.$l());
    }, $v;
  }(ui.$g), $g.LoadingPanel = $d;
}(modules || (modules = {})), function ($v) {
  var $g, $d, $r, $Q;$g = $v.$d || ($v.$d = {}), $d = Laya.List, $r = Laya.Event, $Q = function ($Q) {
    function $v($v) {
      void 0 === $v && ($v = "bbblogin/b1b.png");var $g = $Q.call(this) || this;return $g.$X = 0, $g.$N = "multi_notice_key", $g.$i = 0, $g.$x = 0, $g.$w = "privacy_key", $g.$m = !0, $g.$K = 0, $g.copyRightImg.skin = $v, $g;
    }return __extends($v, $Q), $v.prototype.initialize = function () {
      $Q.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.copyRightImg.skin = "", ServerLoading.instance.preloadServer(), this.$P = Browser.window.PF_INFO, this.$c = new $d(), this.$c.vScrollBarSkin = "", this.$c.itemRender = $g.SelectLeftListItem, this.$c.top = 5, this.$c.repeatX = 1, this.$c.spaceY = 5, this.$c.width = this.leftListBox.width, this.$c.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.$c), this.$B = new $d(), this.$B.vScrollBarSkin = "", this.$B.itemRender = $g.SelectRightListItem, this.$B.top = 5, this.$B.repeatX = 1, this.$B.spaceY = 5, this.$B.width = this.rightListBox.width, this.$B.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.$B), this.$j = new $d(), this.$j.hScrollBarSkin = "", this.$j.itemRender = $g.NoticeItem, this.$j.repeatY = 1, this.$j.width = this.boxTab.width, this.$j.height = this.boxTab.height, this.boxTab.addChild(this.$j), this.$L = new $d(), this.$L.hScrollBarSkin = "", this.$L.itemRender = $g.PrivacyItem, this.$L.repeatY = 1, this.$L.width = this.boxTab.width, this.$L.height = this.boxTab.height, this.boxTabPrivacy.addChild(this.$L);var $v = this.$P.loadingType;this.$H = 1 == $v ? "#feffc0" : 2 == $v ? "#feffc0" : 3 == $v ? "#feffc0" : 101 == $v ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.$n = [], this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.privacyContent.color = "#212942", this.privacyContent.style.fontSize = 26, this.privacyContent.style.lineHeight = 28, this.privacyContent.mouseEnabled = !1, this.privacyTip.color = "#ffffff", this.privacyTip.style.fontSize = 18, this.privacyTip.style.lineHeight = 18, this.privacyTip.style.stroke = 2, this.privacyTip.style.strokeColor = "#000000", this.privacyTip.style.wordWrap = !1, this.jumpContent.color = "#212942", this.jumpContent.style.fontSize = 26, this.jumpContent.style.lineHeight = 28, this.jumpContent.mouseEnabled = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
    }, $v.prototype.destroy = function ($v) {
      void 0 === $v && ($v = !0), this.rmEvts(), this.$y(), this.$e(), this.$R(), this.$z(), this.ageTipsContent = null, this.$c && (this.$c.removeSelf(), this.$c.destroy(), this.$c = null), this.$B && (this.$B.removeSelf(), this.$B.destroy(), this.$B = null), this.$j && (this.$j.removeSelf(), this.$j.destroy(), this.$j = null), this.$L && (this.$L.removeSelf(), this.$L.destroy(), this.$L = null), Laya.timer.clear(this, this.$U), $Q.prototype.destroy.call(this, $v);
    }, $v.prototype.addEvt = function () {
      this.bgImg.on(Laya.Event.CLICK, this, this.$I), this.enterBtn.on(Laya.Event.CLICK, this, this.$S), this.selectServer.on(Laya.Event.CLICK, this, this.$O), this.selectServer.on(Laya.Event.CLICK, this, this.$O), this.closeBg.on(Laya.Event.CLICK, this, this.$u), this.closeBtn.on(Laya.Event.CLICK, this, this.$vv), this.noticeBtn.on(Laya.Event.CLICK, this, this.$gv), this.noticeClose.on(Laya.Event.CLICK, this, this.$Qv), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.$dv), this.mNoticeClose.on(Laya.Event.CLICK, this, this.$rv), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.$rv), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.$kv), this.privacyBtn.on(Laya.Event.CLICK, this, this.$$v), this.ageTipBtn.on(Laya.Event.CLICK, this, this.$bv), this.privacyClose.on(Laya.Event.CLICK, this, this.$av), this.privacyClose2.on(Laya.Event.CLICK, this, this.$av), this.privacyPanel.on(Laya.Event.MOUSE_DOWN, this, this.$Mv), this.privacyToggle.on(Laya.Event.CLICK, this, this.$Yv), this.privacyTip.on(Laya.Event.LINK, this, this.$Dv), this.btnJump.on(Laya.Event.CLICK, this, this.$Jv), this.jumpPanel.on(Laya.Event.MOUSE_DOWN, this, this.$pv), this.$j.selectEnable = !0, this.$j.selectHandler = Laya.Handler.create(this, this.$Tv, null, !1), this.$L.selectEnable = !0, this.$L.selectHandler = Laya.Handler.create(this, this.$tv, null, !1);
    }, $v.prototype.rmEvts = function () {
      this.bgImg.off(Laya.Event.CLICK, this, this.$I), this.enterBtn.off(Laya.Event.CLICK, this, this.$S), this.selectServer.off(Laya.Event.CLICK, this, this.$O), this.selectServer.off(Laya.Event.CLICK, this, this.$O), this.closeBg.off(Laya.Event.CLICK, this, this.$u), this.noticeBtn.off(Laya.Event.CLICK, this, this.$gv), this.closeBtn.off(Laya.Event.CLICK, this, this.$vv), this.noticeClose.off(Laya.Event.CLICK, this, this.$Qv), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.$dv), this.mNoticeClose.off(Laya.Event.CLICK, this, this.$rv), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.$rv), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.$kv), this.privacyBtn.off(Laya.Event.CLICK, this, this.$$v), this.ageTipBtn.off(Laya.Event.CLICK, this, this.$bv), this.privacyClose.off(Laya.Event.CLICK, this, this.$av), this.privacyClose2.off(Laya.Event.CLICK, this, this.$av), this.privacyPanel.off(Laya.Event.MOUSE_DOWN, this, this.$Mv), this.privacyToggle.off(Laya.Event.CLICK, this, this.$Yv), this.privacyTip.off(Laya.Event.LINK, this, this.$Dv), this.btnJump.off(Laya.Event.CLICK, this, this.$Jv), this.jumpPanel.off(Laya.Event.MOUSE_DOWN, this, this.$pv), this.$j.selectEnable = !1, this.$j.selectHandler = null, this.$L.selectEnable = !1, this.$L.selectHandler = null;
    }, $v.prototype.onOpened = function () {
      var $d = this;this.$k = Date.now(), this.$m = !0, this.$qv = this.$P.selectedServer.server_id, this.$Cv(this.$P.selectedServer), this.$c.dataSource = this.$P.groupList, this.$O(), req_multi_server_notice(4, this.$P.pkgName, this.$P.selectedServer.server_id, this.$Gv.bind(this)), Laya.timer.frameOnce(1, this, function () {
        $d.$sv = $d.$P.privacy_data && $d.$P.privacy_data.list ? $d.$P.privacy_data.list : [], $d.$Av = null != $d.$P.privacy_login_pkg ? $d.$P.privacy_login_pkg : 0;var $v = "1" == localStorage.getItem($d.$w),
            $g = 0 != PF_INFO.privacy_save_pkg,
            $Q = 0 == $d.$Av || 1 == $d.$Av;$d.$hv = $g && $v || $Q, $d.$Pv();
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
    }, $v.prototype.$Dv = function ($v) {
      this.$ov(Number($v));
    }, $v.prototype.$Jv = function () {
      Browser.window.forceJumpMiniGame ? Browser.window.forceJumpMiniGame() : this.$vv();
    }, $v.prototype.$dv = function () {
      this.$X = this.noticeContent.mouseY, Laya.stage.on($r.MOUSE_MOVE, this, this.$Ev), Laya.stage.on($r.MOUSE_UP, this, this.$y), Laya.stage.on($r.MOUSE_OUT, this, this.$y);
    }, $v.prototype.$Ev = function () {
      if (this.noticeContent) {
        var $v = this.$X - this.noticeContent.mouseY;this.noticeContent.scrollY += $v, this.$X = this.noticeContent.mouseY;
      }
    }, $v.prototype.$y = function () {
      Laya.stage.off($r.MOUSE_MOVE, this, this.$Ev), Laya.stage.off($r.MOUSE_UP, this, this.$y), Laya.stage.off($r.MOUSE_OUT, this, this.$y);
    }, $v.prototype.$kv = function () {
      this.$i = this.mNoticePanel.mouseY, Laya.stage.on($r.MOUSE_MOVE, this, this.$Vv), Laya.stage.on($r.MOUSE_UP, this, this.$e), Laya.stage.on($r.MOUSE_OUT, this, this.$e);
    }, $v.prototype.$Vv = function () {
      if (this.mNoticeContent) {
        var $v = this.$i - this.mNoticePanel.mouseY;this.mNoticeContent.y -= $v, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.$i = this.mNoticePanel.mouseY;
      }
    }, $v.prototype.$e = function () {
      Laya.stage.off($r.MOUSE_MOVE, this, this.$Vv), Laya.stage.off($r.MOUSE_UP, this, this.$e), Laya.stage.off($r.MOUSE_OUT, this, this.$e);
    }, $v.prototype.$Mv = function () {
      this.$x = this.privacyPanel.mouseY, Laya.stage.on($r.MOUSE_MOVE, this, this.$Zv), Laya.stage.on($r.MOUSE_UP, this, this.$R), Laya.stage.on($r.MOUSE_OUT, this, this.$R);
    }, $v.prototype.$Zv = function () {
      if (this.privacyContent) {
        var $v = this.$x - this.privacyPanel.mouseY;this.privacyContent.y -= $v, this.privacyPanel.height < this.privacyContent.contextHeight ? this.privacyContent.y < this.privacyPanel.height - this.privacyContent.contextHeight ? this.privacyContent.y = this.privacyPanel.height - this.privacyContent.contextHeight : 0 < this.privacyContent.y && (this.privacyContent.y = 0) : this.privacyContent.y = 0, this.$x = this.privacyPanel.mouseY;
      }
    }, $v.prototype.$R = function () {
      Laya.stage.off($r.MOUSE_MOVE, this, this.$Zv), Laya.stage.off($r.MOUSE_UP, this, this.$R), Laya.stage.off($r.MOUSE_OUT, this, this.$R);
    }, $v.prototype.$pv = function () {
      this.$K = this.jumpPanel.mouseY, Laya.stage.on($r.MOUSE_MOVE, this, this.$fv), Laya.stage.on($r.MOUSE_UP, this, this.$z), Laya.stage.on($r.MOUSE_OUT, this, this.$z);
    }, $v.prototype.$fv = function () {
      if (this.jumpContent) {
        var $v = this.$K - this.jumpPanel.mouseY;this.jumpContent.y -= $v, this.jumpPanel.height < this.jumpContent.contextHeight ? this.jumpContent.y < this.jumpPanel.height - this.jumpContent.contextHeight ? this.jumpContent.y = this.jumpPanel.height - this.jumpContent.contextHeight : 0 < this.jumpContent.y && (this.jumpContent.y = 0) : this.jumpContent.y = 0, this.$K = this.jumpPanel.mouseY;
      }
    }, $v.prototype.$z = function () {
      Laya.stage.off($r.MOUSE_MOVE, this, this.$fv), Laya.stage.off($r.MOUSE_UP, this, this.$z), Laya.stage.off($r.MOUSE_OUT, this, this.$z);
    }, $v.prototype.$Tv = function () {
      if (this.$j.dataSource) {
        for (var $v, $g = 0; $g < this.$j.dataSource.length; $g++) {
          var $Q = this.$j.dataSource[$g];$Q[1] = $g == this.$j.selectedIndex, $g == this.$j.selectedIndex && ($v = $Q[0]);
        }this.mNoticeTitle.text = $v && $v.title ? $v.title : "", this.mNoticeContent.innerHTML = $v && $v.content ? $v.content : "", this.mNoticeContent.y = 0;
      }
    }, $v.prototype.$tv = function () {
      var $v = this.$L.dataSource;if ($v) {
        for (var $g = 0; $g < $v.length; $g++) {
          $v[$g][1] = $g == this.$L.selectedIndex;
        }var $Q = this.$sv[this.$L.selectedIndex];$Q && $Q.content && ($Q.content = $Q.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "")), this.privacyTitle.text = $Q && $Q.title ? $Q.title : "\u6807\u9898", this.privacyContent.innerHTML = $Q && $Q.content ? $Q.content : "\u52a0\u8f7d\u4e2d...", this.privacyContent.y = 0;
      }
    }, $v.prototype.$Cv = function ($v) {
      var $g = $v.server_name;this.serverName.text = $g + this.$Xv($v), this.serverName.color = -1 === $v.status ? "#d50000" : 0 === $v.status ? "#49575a" : this.$H, this.hotImage.skin = this.$Nv($v), this.$P.cdn = $v.cdn || "", this.$P.selectedServer = $v, this.noticeBtn.visible = !0;
    }, $v.prototype.$iv = function ($v) {
      this.showGroupList($v);
    }, $v.prototype.$xv = function ($v) {
      this.$Cv($v), this.listBg.visible = !1;
    }, $v.prototype.showGroupList = function ($v) {
      if (void 0 === $v && ($v = 0), this.parent) {
        var $g = this.$P.groupList;if ($g && 0 !== $g.length) {
          for (var $Q = $g.length, $d = 0; $d < $Q; $d++) $g[$d].callBack = this.$iv.bind(this), $g[$d].select = $d == $v, $g[$d].index = $d;var $r = (this.$c.array = $g)[$v].id;this.$P.serverList[$r] ? this.showServerList($r) : this.$P.hasServerReq || (this.$P.hasServerReq = !0, -1 == $r ? req_server_owner(0) : -2 == $r ? req_recommend_server_list(0) : req_server_list(0, $r));
        }
      }
    }, $v.prototype.showServerList = function ($v) {
      if (this.parent && this.$P.serverList[$v]) {
        for (var $g = this.$P.serverList[$v], $Q = $g.length, $d = 0; $d < $Q; $d++) $g[$d].callBack = this.$xv.bind(this);this.$B.array = $g;
      }
    }, $v.prototype.$Fv = function ($v) {
      return -1 == $v.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != $v.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
    }, $v.prototype.$Nv = function ($v) {
      var $g = $v.status,
          $Q = $v.is_recommend,
          $d = "bbblogin/b19b.png";return 1 !== $g && 2 !== $g || 1 !== $Q && 3 !== $Q ? 1 !== $g && 2 !== $g || 2 !== $Q ? -1 !== $g && 0 !== $g || ($d = "bbblogin/b20b.png") : $d = "bbblogin/b19b.png" : $d = "bbblogin/b18b.png", $d;
    }, $v.prototype.$Xv = function ($v) {
      var $g = $v.status,
          $Q = "";return 1 == $v.is_recommend || 3 == $v.is_recommend ? $Q = "(\u63a8\u8350)" : -1 === $g ? $Q = "(\u7ef4\u62a4\u4e2d)" : 0 === $g && ($Q = "(\u5f85\u5f00\u670d)"), $Q;
    }, $v.prototype.$Gv = function ($v) {
      console.log("onMultiNoticeCallback, param = ", $v);var $g = Date.now() / 1e3,
          $Q = localStorage.getItem(this.$N),
          $d = !(this.$n = []);if ("success" == $v.state) for (var $r in $v.data) {
        var $k = $v.data[$r];if ($k) {
          var $$ = $g < $k.end_time,
              $b = 1 == $k.pop_type,
              $a = 2 == $k.pop_type && $k.key + "" != $Q;!$d && $$ && ($b || $a) && ($d = !0), $$ && this.$n.push($k), $a && localStorage.setItem(this.$N, $k.key + "");
        }
      }this.$n.sort(function ($v, $g) {
        return $v.login_id - $g.login_id;
      }), console.log("onMultiNoticeCallback, datas = ", this.$n), $d && this.$lv();
    }, $v.prototype.$lv = function () {
      if (this.$j) {
        if (this.$n) {
          this.$j.x = 2 < this.$n.length ? 0 : (this.boxTab.width - 274 * this.$n.length) / 2;for (var $v = [], $g = 0; $g < this.$n.length; $g++) {
            var $Q = this.$n[$g];$v.push([$Q, $g == this.$j.selectedIndex]);
          }0 < (this.$j.dataSource = $v).length ? (this.$j.selectedIndex = 0, this.$j.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.$n.length <= 1, this.boxTab.visible = 1 < this.$n.length;
        }this.mNoticeBg.visible = !0;
      }
    }, $v.prototype.$wv = function ($v) {
      if (!this.destroyed) {
        if (console.log("p_onPrivacyCallback, param = ", $v), "success" == $v.state) for (var $g in $v.data) {
          var $Q = Number($g),
              $d = $v.data[$Q];this.$sv && this.$sv[$Q] && (this.$sv[$Q].content = $d.content);
        }this.$tv();
      }
    }, $v.prototype.$Pv = function () {
      for (var $v = "", $g = 0; $g < this.$sv.length; $g++) {
        $v += '<a href="' + $g + '" style="color:#14ff28;text-decoration:none">' + this.$sv[$g].title + "</a>", $g < this.$sv.length - 1 && ($v += "\u3001");
      }this.privacyTip.innerHTML = "\u6211\u5df2\u7ecf\u8be6\u7ec6\u9605\u8bfb\u5e76\u540c\u610f" + $v, this.privacyToggle.skin = "bbblogin/" + (this.$hv ? "b29b.png" : "b28b.png"), this.privacyTip.x = (720 - this.privacyTip.width) / 2, this.privacyToggle.x = this.privacyTip.x - 30, this.privacyBtn.visible = 0 < this.$sv.length, this.privacyToggle.visible = this.privacyTip.visible = 0 < this.$sv.length && 0 != this.$Av;
    }, $v.prototype.$ov = function ($v) {
      if (void 0 === $v && ($v = 0), this.$L) {
        if (this.$sv) {
          this.$L.x = 2 < this.$sv.length ? 0 : (this.boxTab.width - 274 * this.$sv.length) / 2;for (var $g = [], $Q = 0; $Q < this.$sv.length; $Q++) {
            var $d = this.$sv[$Q],
                $r = $d && $d.title ? $d.title : "",
                $k = $Q == this.$L.selectedIndex;$g.push([$r, $k]);
          }0 < (this.$L.dataSource = $g).length ? ($v < 0 && ($v = 0), $v > $g.length - 1 && ($v = 0), this.$L.selectedIndex = $v, this.$L.scrollTo($v)) : (this.privacyTitle.text = "\u7a7a", this.privacyContent.text = ""), this.privacyClose2.visible = this.$sv.length <= 1, this.boxTabPrivacy.visible = 1 < this.$sv.length;
        }this.$m && (this.$m = !1, req_privacy(this.$P.pkgName, this.$wv.bind(this))), this.privacyBg.visible = !0;
      }
    }, $v.prototype.openJumpView = function ($v, $g, $Q, $d) {
      void 0 === $d && ($d = !1), this.jumpTitle.text = $v || "\u6682\u65e0\u516c\u544a", this.jumpContent.innerHTML = $g || "", this.btnJump.label = $Q || "\u786e\u5b9a", this.jumpContent.y = 0, this.jumpBg.visible = !0, this.closeBtn.visible = $d;
    }, $v.prototype.showAgeTipsBtn = function ($v, $g, $Q, $d, $r) {
      (this.ageTipBtn.visible = $v) && (this.ageTipBtn.skin = $g || "bbblogin/b11b.png"), this.ageTipsContent = $Q, this.ageTipBtn.x = $d || 0, this.ageTipBtn.y = $r || 0;
    }, $v.prototype.$bv = function () {
      this.openJumpView("\u9002\u9f84\u516c\u544a", this.ageTipsContent, "\u786e\u8ba4", !0);
    }, $v.prototype.$Wv = function ($v) {
      this.txtTip.text = $v, this.txtTip.y = 640, this.txtTip.visible = !0, this.$mv = 1, Laya.timer.clear(this, this.$U), this.$U(), Laya.timer.frameLoop(1, this, this.$U);
    }, $v.prototype.$U = function () {
      this.txtTip.y -= this.$mv, this.$mv *= 1.1, this.txtTip.y <= 590 && (this.txtTip.visible = !1, Laya.timer.clear(this, this.$U));
    }, $v;
  }(ui.$Q), $g.SelectServerPanel = $Q;
}(modules || (modules = {}));var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.$d.AuthorizationPanel,
    LoadingPanel = modules.$d.LoadingPanel,
    SelectServerPanel = modules.$d.SelectServerPanel,
    ServerLoading = function () {
  function $a($v) {
    this.m_loadingRes = ["bbbloding/a13a.png", "bbbloding/a15a.png", "bbbloding/a14a.png", "bbbloding/a16a.png", "bbbloding/a17a.png", "bbbloding/a18a.png", "bbbloding/a19a.png", "bbbloding/a20a.png", "bwxeff/b100b.png", "bwxeff/b101b.png", "bwxeff/b102b.png", "bwxeff/b103b.png", "bwxeff/b104b.png", "bbbloding/a3a.jpg", "bbbloding/a12a.jpg", "bbbloding/a1a.png", "bbbloding/a2a.png", "bbbloding/a4a.jpg", "bbbloding/a6a.jpg", "bbbloding/a8a.jpg", "bbbloding/a10a.jpg", "bbbloding/a5a.jpg", "bbbloding/a7a.jpg", "bbbloding/a9a.jpg", "bbbloding/a11a.jpg"], this.m_serverRes = ["bbblogin/b10b.png", "bbblogin/b11b.png", "bbblogin/b12b.png", "bbblogin/b13b.png", "bbblogin/b14b.png", "bbblogin/b15b.png", "bbblogin/b16b.png", "bbblogin/b17b.png", "bbblogin/b18b.png", "bbblogin/b19b.png", "bbblogin/b20b.png", "bbblogin/b21b.png", "bbblogin/b2b.jpg", "bbblogin/b3b.jpg", "bbblogin/b4b.jpg", "bbblogin/b5b.jpg", "bbblogin/b6b.jpg", "bbblogin/b1b.png", "bbblogin/b8b.png", "bbblogin/b9b.png", "bbblogin/b24b.png", "bbblogin/b25b.png", "bbblogin/b27b.png", "bbblogin/b29b.png", "bbblogin/b28b.png", "bbblogin/b123b.png", "bbblogin/b199b.png"], this.copyRightUrl = "bbblogin/b1b.png", this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.$Kv = !1, this.$cv = "", $a.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var $g = Laya.AtlasResourceManager;$g.maxTextureCount = 6, $g.atlasTextureWidth = $g.atlasTextureHeight = 1024, $g._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.$Bv.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } }, "b28b.png": { frame: { h: 25, idx: 0, w: 25, x: 444, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 2 } }, "b29b.png": { frame: { h: 27, idx: 0, w: 26, x: 470, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = $a.instance.requestWeb, Browser.window.imgMgrLoad = $a.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.$Bv();
  }return $a.prototype.changeServerLoading = function ($v) {
    $a.instance.m_layer.visible = $v;
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
  }, $a.prototype.openJumpView = function ($v, $g, $Q, $d) {
    void 0 === $d && ($d = !1), this.$Lv(), $a.instance.m_server.openJumpView($v, $g, $Q, $d);
  }, $a.prototype.openJumpTipsBtn = function ($v, $g, $Q, $d, $r) {
    this.$Lv(), $a.instance.m_server.showAgeTipsBtn($v, $g, $Q, $d, $r);
  }, $a.prototype.getCertificatePng = function () {
    window.sdkInitRes = window.sdkInitRes || {};var $v = "bbblogin/b123b.png",
        $g = "bbblogin/b1b.png";return 1 == sdkInitRes.develop ? 0 == (PF_INFO.develop_certificate_pkg || 0) ? $v : $g : 0 == PF_INFO.release_certificate_pkg ? $v : $g;
  }, $a.prototype.openServer = function ($v, $g, $Q) {
    var $d = this;this.copyRightUrl = $Q || this.getCertificatePng();for (var $r = function () {
      $d.$Lv(), $v && $g && $v.call($g);
    }, $k = !0, $$ = 0, $b = this.m_serverRes; $$ < $b.length; $$++) {
      var $a = $b[$$];if (null == Laya.Loader.getRes($a)) {
        $k = !1;break;
      }
    }$k ? $r() : Laya.loader.load(this.m_serverRes, Handler.create(this, $r));
  }, $a.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, $a.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, $a.prototype.openLoading = function ($v, $g) {
    void 0 === $v && ($v = 0), $g = $g || this.getCertificatePng(), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      $a.instance.m_loading || ($a.instance.m_loading = new LoadingPanel($v, $g)), $a.instance.m_loading.parent || $a.instance.m_layer.addChild($a.instance.m_loading), $a.instance.$jv();
    }));
  }, $a.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var $v = 0, $g = this.m_serverRes; $v < $g.length; $v++) {
      var $Q = $g[$v];Laya.Loader.clearCache($a.instance, $Q), Laya.Loader.clearRes($Q, !0);
    }for (var $d = 0, $r = this.m_loadingRes; $d < $r.length; $d++) {
      $Q = $r[$d];Laya.Loader.clearCache($a.instance, $Q), Laya.Loader.clearRes($Q, !0);
    }this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, $a.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && $a.instance.m_loading.showGetBtn();
  }, $a.prototype.enterDefaultServer = function () {
    var $v = Browser.window.PF_INFO.selectedServer;this.$Kv || -1 == $v.status || 0 == $v.status || (this.$Kv = !0, Browser.window.PF_INFO.selectedServer = $v, req_server_check_ban(0, $v.server_id));
  }, $a.prototype.sendRecord = function () {
    var $v = "";$v += "newRegister=" + Browser.window.PF_INFO.newRegister, $v += ", isPrelodServer=" + this.m_isPrelodServer, $v += ", SelectServerPanel=" + (null != $a.instance.m_server), $v += ", isPrelodLoading=" + this.m_isPrelodLoading, $v += ", LoadingPanel=" + (null != $a.instance.m_loading), $v += ", resMgrLoad=" + (Browser.window.resMgrLoad == $a.instance.requestWeb), $v += ", imgMgrLoad=" + (Browser.window.imgMgrLoad == $a.instance.requestWeb), $v += ", errUrls=" + $a.instance.$cv;for (var $g = 0, $Q = this.m_serverRes; $g < $Q.length; $g++) {
      $v += ", " + ($k = $Q[$g]) + "=" + (null != Laya.Loader.getRes($k));
    }for (var $d = 0, $r = this.m_loadingRes; $d < $r.length; $d++) {
      var $k;$v += ", " + ($k = $r[$d]) + "=" + (null != Laya.Loader.getRes($k));
    }var $$ = Browser.window.PF_INFO.selectedServer;$$ && ($v += ", server_status=" + $$.status, $v += ", server_id=" + $$.server_id, $v += ", server_name=" + $$.server_name);var $b = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: $v });console.error($b), this.$Hv && this.$Hv == $v || (this.$Hv = $v, reqRecordError($b));
  }, $a.prototype.$nv = function () {
    var $v = Laya.stage,
        $g = Math.floor($v.width),
        $Q = Math.floor($v.height);$Q / $g < 1.7777778 ? (this.viewW = Math.floor($g / ($Q / 1280)), this.viewH = 1280, this.viewS = $Q / 1280) : (this.viewW = 720, this.viewH = Math.floor($Q / ($g / 720)), this.viewS = $g / 720);var $d = Math.floor($v.width),
        $r = Math.floor($v.height);$r / $d < 1.7777778 ? (this.viewW = Math.floor($d / ($r / 1280)), this.viewH = 1280, this.viewS = $r / 1280) : (this.viewW = 720, this.viewH = Math.floor($r / ($d / 720)), this.viewS = $d / 720), this.$jv();
  }, $a.prototype.$jv = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, $a.prototype.$Bv = function () {
    if (Input.isInputting && Browser.onMobile) {
      var $v = parseInt(Input.inputContainer.style.top.replace("px", "")),
          $g = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS,
          $Q = Browser.clientWidth / Render.canvas.width;return 0 < ($v = Browser.clientHeight - $g * $Q - $v) && ($v = 0), void (Browser.container.style.top = $v + "px");
    }Browser.container.style.top = "0px";var $d = Math.floor(Browser.width),
        $r = Math.floor(Browser.height);$d = $d + 1 & 2147483646, $r = $r + 1 & 2147483646;var $k = Laya.stage;3 == ENV ? ($k.scaleMode = Laya.Stage.SCALE_NOSCALE, $k.width = $d, $k.height = $r) : $r < $d ? ($k.scaleMode = Laya.Stage.SCALE_NOSCALE, $k.width = $d, $k.height = $r) : ($k.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, $k.width = 840, $k.height = Math.floor($r / ($d / 840)) + 1 & 2147483646), this.$nv();
  }, $a.prototype.requestWeb = function ($v, $g) {
    function $Q() {
      $d.onload = null, $d.onerror = null;
    }var $d,
        $r = $v;($d = new Browser.window.Image()).onload = function () {
      $Q(), $g($r, 200, $d);
    }, $d.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", $r), $a.instance.$cv += $r + "|", $Q(), $g($r, 404, null);
    }, $d.src = $r, -1 == $a.instance.m_serverRes.indexOf($r) && -1 == $a.instance.m_loadingRes.indexOf($r) || Laya.Loader.keepCache($a.instance, $r);
  }, $a.prototype.$yv = function ($v, $g) {
    return -1 != $v.indexOf($g, $v.length - $g.length);
  }, $a;
}();!function ($v) {
  var $g, $Q;$g = $v.$d || ($v.$d = {}), $Q = function ($g) {
    function $v() {
      var $v = $g.call(this) || this;return $v.$ev = "#72441d", $v.$Rv = "#263d7d", $v.width = 274, $v.height = 59, $v.$zv = new Laya.Image(), $v.addChild($v.$zv), $v.$Uv = new Laya.Label(), $v.$Uv.fontSize = 30, $v.$Uv.color = $v.$Rv, $v.addChild($v.$Uv), $v.$Uv.centerX = 0, $v.$Uv.centerY = 0, $v;
    }return __extends($v, $g), $v.prototype.initialize = function () {
      $g.prototype.initialize.call(this), this.$P = Browser.window.PF_INFO;this.$P.loadingType;this.addEvt();
    }, Object.defineProperty($v.prototype, "dataSource", { set: function ($v) {
        $v && this.setData($v);
      }, enumerable: !0, configurable: !0 }), $v.prototype.setData = function ($v) {
      this.$Iv = $v[0], this.$Sv = $v[1], this.$Uv.text = this.$Iv.title, this.$Uv.color = this.$Sv ? this.$ev : this.$Rv, this.$zv.skin = this.$Sv ? "bbblogin/b25b.png" : "bbblogin/b24b.png";
    }, $v.prototype.destroy = function ($v) {
      void 0 === $v && ($v = !0), this.rmEvts(), $g.prototype.destroy.call(this, $v);
    }, $v.prototype.addEvt = function () {}, $v.prototype.rmEvts = function () {}, $v;
  }(Laya.View), $g.NoticeItem = $Q;
}(modules || (modules = {})), function ($v) {
  var $g, $Q;$g = $v.$d || ($v.$d = {}), $Q = function ($g) {
    function $v() {
      var $v = $g.call(this) || this;return $v.$ev = "#72441d", $v.$Rv = "#263d7d", $v.width = 274, $v.height = 59, $v.$zv = new Laya.Image(), $v.addChild($v.$zv), $v.$Uv = new Laya.Label(), $v.$Uv.fontSize = 30, $v.$Uv.color = $v.$Rv, $v.addChild($v.$Uv), $v.$Uv.centerX = 0, $v.$Uv.centerY = 0, $v;
    }return __extends($v, $g), $v.prototype.initialize = function () {
      $g.prototype.initialize.call(this), this.$P = Browser.window.PF_INFO;this.$P.loadingType;this.addEvt();
    }, Object.defineProperty($v.prototype, "dataSource", { set: function ($v) {
        $v && this.setData($v);
      }, enumerable: !0, configurable: !0 }), $v.prototype.setData = function ($v) {
      this.$Ov = $v[0], this.$Sv = $v[1], this.$Uv.text = this.$Ov, this.$Uv.color = this.$Sv ? this.$ev : this.$Rv, this.$zv.skin = this.$Sv ? "bbblogin/b25b.png" : "bbblogin/b24b.png";
    }, $v.prototype.destroy = function ($v) {
      void 0 === $v && ($v = !0), this.rmEvts(), $g.prototype.destroy.call(this, $v);
    }, $v.prototype.addEvt = function () {}, $v.prototype.rmEvts = function () {}, $v;
  }(Laya.View), $g.PrivacyItem = $Q;
}(modules || (modules = {})), function ($v) {
  var $g, $Q;$g = $v.$d || ($v.$d = {}), $Q = function ($g) {
    function $v() {
      var $v = $g.call(this) || this;return $v.width = 192, $v.height = 70, $v.$zv = new Laya.Image(), $v.addChild($v.$zv), $v.$_v = new Laya.Label(), $v.$_v.fontSize = 28, $v.$_v.color = $v.$H, $v.addChild($v.$_v), $v.$_v.centerX = 0, $v.$_v.centerY = 0, $v.$uv = new Laya.Label(), $v.$uv.fontSize = 22, $v.$uv.color = $v.$H, $v.addChild($v.$uv), $v.$uv.centerX = 0, $v.$uv.y = 11, $v.$vg = new Laya.Label(), $v.$vg.fontSize = 26, $v.$vg.color = $v.$H, $v.addChild($v.$vg), $v.$vg.centerX = 0, $v.$vg.y = 39, $v;
    }return __extends($v, $g), $v.prototype.initialize = function () {
      $g.prototype.initialize.call(this), this.$P = Browser.window.PF_INFO;var $v = this.$P.loadingType;this.$H = 1 == $v ? "#263d7d" : 2 == $v ? "#263d7d" : 3 == $v ? "#763042" : "#263d7d", this.addEvt();
    }, Object.defineProperty($v.prototype, "dataSource", { set: function ($v) {
        $v && this.setData($v);
      }, enumerable: !0, configurable: !0 }), $v.prototype.setData = function ($v) {
      this.$Iv = $v;var $g = this.$Iv.id,
          $Q = this.$Iv.name;if (this.$_v.visible = this.$uv.visible = this.$vg.visible = !1, -1 == $g || -2 == $g) this.$_v.visible = !0, this.$_v.text = $Q;else {
        var $d = $Q,
            $r = "1-10\u670d",
            $k = $Q.match("[0-9]{1,}");$k && null != $k.index && ($d = $Q.slice(0, $k.index), $r = $Q.slice($k.index)), this.$uv.visible = this.$vg.visible = !0, this.$uv.text = $d, this.$vg.text = $r;
      }this.$zv.skin = $v.select ? "bbblogin/b14b.png" : "bbblogin/b15b.png";
    }, $v.prototype.destroy = function ($v) {
      void 0 === $v && ($v = !0), this.rmEvts(), $g.prototype.destroy.call(this, $v);
    }, $v.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, $v.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, $v.prototype.clkHdler = function () {
      this.$Iv && this.$Iv.callBack && this.$Iv.callBack(this.$Iv.index);
    }, $v;
  }(Laya.View), $g.SelectLeftListItem = $Q;
}(modules || (modules = {})), function ($v) {
  var $g, $Q;$g = $v.$d || ($v.$d = {}), $Q = function ($g) {
    function $v() {
      var $v = $g.call(this) || this;return $v.width = 358, $v.height = 70, $v.$zv = new Laya.Image("bbblogin/b16b.png"), $v.addChild($v.$zv), $v.$zv.graphics.drawRect(0, 0, $v.width, $v.height, "#00sasd"), $v.$gg = new Laya.Image(), $v.$gg.centerY = 0, $v.$gg.x = 7, $v.addChild($v.$gg), $v.$_v = new Laya.Label(), $v.$_v.fontSize = 24, $v.$_v.color = $v.$H, $v.$_v.x = 56, $v.$_v.centerY = 0, $v.addChild($v.$_v), $v.$Qg = new Laya.Label(), $v.$Qg.fontSize = 24, $v.$Qg.color = $v.$H, $v.$Qg.x = 246, $v.$Qg.centerY = 0, $v.addChild($v.$Qg), $v.$dg = new Laya.Image(), $v.$dg.top = 0, $v.$dg.right = 0, $v.addChild($v.$dg), $v.$rg = new Laya.Label(), $v.$rg.fontSize = 20, $v.$rg.color = "#ffffff", $v.$rg.x = 225, $v.$rg.y = 46, $v.addChild($v.$rg), $v;
    }return __extends($v, $g), $v.prototype.initialize = function () {
      $g.prototype.initialize.call(this), this.$P = Browser.window.PF_INFO;var $v = this.$P.loadingType;this.$H = 1 == $v ? "#34267d" : 2 == $v ? "#34267d" : 3 == $v ? "#763042" : "#34267d", this.addEvt();
    }, Object.defineProperty($v.prototype, "dataSource", { set: function ($v) {
        $v && this.setData($v);
      }, enumerable: !0, configurable: !0 }), $v.prototype.setData = function ($v) {
      this.$Iv = $v;var $g = this.$Iv.status,
          $Q = this.$Iv.server_name;this.$gg.skin = this.getStatusSrc(this.$Iv), this.$_v.color = -1 === $g ? "#d50000" : 0 === $g ? "#49575a" : this.$H, this.$_v.text = $Q, this.$Qg.text = -1 === $g ? "\u7ef4\u62a4\u4e2d" : 0 === $g ? "\u672a\u5f00\u670d" : "\u5df2\u5f00\u670d";var $d = 1 == this.$Iv.is_recommend || 3 == this.$Iv.is_recommend;(this.$dg.visible = $d) && (this.$dg.skin = "bbblogin/b199b.png"), this.$rg.text = -1 == this.$Iv.status && this.$Iv.maintain_time ? this.$Iv.maintain_time : "";
    }, $v.prototype.destroy = function ($v) {
      void 0 === $v && ($v = !0), this.rmEvts(), $g.prototype.destroy.call(this, $v);
    }, $v.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, $v.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, $v.prototype.clkHdler = function () {
      this.$Iv && this.$Iv.callBack && this.$Iv.callBack(this.$Iv);
    }, $v.prototype.getStatusSrc = function ($v) {
      var $g = $v.status,
          $Q = $v.is_recommend,
          $d = "bbblogin/b19b.png";return 1 !== $g && 2 !== $g || 1 !== $Q && 3 !== $Q ? 1 !== $g && 2 !== $g || 2 !== $Q ? -1 !== $g && 0 !== $g || ($d = "bbblogin/b20b.png") : $d = "bbblogin/b19b.png" : $d = "bbblogin/b18b.png", $d;
    }, $v;
  }(Laya.View), $g.SelectRightListItem = $Q;
}(modules || (modules = {})), window.ServerLoading = ServerLoading;