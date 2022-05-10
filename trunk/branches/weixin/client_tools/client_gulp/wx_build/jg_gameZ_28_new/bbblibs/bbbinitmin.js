"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var $Z = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function ($I, $M) {
    $I.__proto__ = $M;
  } || function ($I, $M) {
    for (var $E in $M) $M.hasOwnProperty($E) && ($I[$E] = $M[$E]);
  };return function ($I, $M) {
    function $E() {
      this.constructor = $I;
    }$Z($I, $M), $I.prototype = null === $M ? Object.create($M) : ($E.prototype = $M.prototype, new $E());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function ($E) {
  var $I = function ($I) {
    function $M() {
      return $I.call(this) || this;
    }return __extends($M, $I), $M.prototype.createChildren = function () {
      $I.prototype.createChildren.call(this), this.createView($E.$I.uiView);
    }, $M.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/b2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "bbblogin/b6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "bbblogin/b3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "bbblogin/b4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "bbblogin/b5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] }, $M;
  }(View);$E.$I = $I;
}(ui || (ui = {})), function ($E) {
  var $I = function ($I) {
    function $M() {
      return $I.call(this) || this;
    }return __extends($M, $I), $M.prototype.createChildren = function () {
      $I.prototype.createChildren.call(this), this.createView($E.$M.uiView);
    }, $M.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/b1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "bbbloding/a13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "bbbloding/a14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "bbbloding/a16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "bbbloding/a17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "bbbloding/a20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "bbbloding/a19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "bbbloding/a18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "bbbloding/a18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "bbbloding/a1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }] }, $M;
  }(View);$E.$M = $I;
}(ui || (ui = {})), function ($E) {
  var $I = function ($I) {
    function $M() {
      return $I.call(this) || this;
    }return __extends($M, $I), $M.prototype.createChildren = function () {
      View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), View.regComponent("Text", laya.display.Text), $I.prototype.createChildren.call(this), this.createView($E.$E.uiView);
    }, $M.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/b2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "bbblogin/b6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "bbblogin/b3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "bbblogin/b4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "bbblogin/b5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "bbblogin/b21b.png", centerX: 0 } }, { type: "Image", props: { y: 1102, var: "imgCheatTip", skin: "bbblogin/b27b.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 927, x: 159, var: "hotImage", skin: "bbblogin/b18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/b1b.png", centerX: 0, bottom: 30 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "bbblogin/b12b.png", name: "enterBtn", centerX: 0 } }, { type: "Image", props: { x: 196, visible: !1, var: "privacyToggle", skin: "bbblogin/b29b.png", bottom: 4 } }, { type: "Label", props: { y: 640, x: 0, width: 720, var: "txtTip", valign: "middle", text: "\u63d0\u793a\u5185\u5bb9", strokeColor: "#ffffff", stroke: 2, height: 32, fontSize: 32, color: "#ff0000", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }, { type: "HTMLDivElement", props: { y: 1255, x: 256, visible: !1, var: "privacyTip", height: 16 } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "bbblogin/b11b.png" } }, { type: "Image", props: { y: 257, x: 594, visible: !1, var: "privacyBtn", skin: "bbblogin/b13b.png", name: "privacyBtn" } }, { type: "Image", props: { visible: !1, var: "ageTipBtn", top: 1, scaleY: .5, scaleX: .5, name: "privacyBtn", left: 1 } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "bbblogin/b8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "bbblogin/b10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "mNoticeBg", skin: "bbblogin/b8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "bbblogin/b10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "privacyBg", skin: "bbblogin/b8b.png", name: "privacyBg", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "privacyClose", skin: "bbblogin/b10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "privacyClose2", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTabPrivacy", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "privacyTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "privacyPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "privacyContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "bbblogin/b9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "bbblogin/b17b.png" } }] }, { type: "Box", props: { width: 720, visible: !1, var: "jumpBg", mouseThrough: !1, height: 1280, centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { x: 33, width: 655, skin: "bbblogin/b8b.png", height: 994, centerY: 0, centerX: 0 } }, { type: "Button", props: { width: 274, var: "btnJump", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u8df3\u8f6c", height: 59, centerY: 436, centerX: 0 } }, { type: "Label", props: { width: 234, var: "jumpTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", fontSize: 30, color: "#ffffff", centerY: -408, centerX: 0, bold: !1, align: "center" } }, { type: "Panel", props: { x: 94, width: 545, var: "jumpPanel", height: 733, centerY: 10 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "jumpContent", height: 733 } }] }, { type: "Image", props: { x: 596, visible: !1, var: "closeBtn", skin: "bbblogin/b17b.png", name: "closeBtn", centerY: -402 } }] }] }, $M;
  }(View);$E.$E = $I;
}(ui || (ui = {})), function ($I) {
  var $M, $E;$M = $I.$Z || ($I.$Z = {}), $E = function ($M) {
    function $I() {
      return $M.call(this) || this;
    }return __extends($I, $M), $I.prototype.initialize = function () {
      $M.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
    }, $I.prototype.addEvt = function () {
      this.on(Laya.Event.CLICK, this, this.$i);
    }, $I.prototype.rmEvts = function () {
      this.off(Laya.Event.CLICK, this, this.$i);
    }, $I.prototype.onOpened = function () {
      this.$n = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
    }, $I.prototype.destroy = function ($I) {
      void 0 === $I && ($I = !0), this.rmEvts(), $M.prototype.destroy.call(this, $I);
    }, $I.prototype.$i = function () {
      1e4 < Date.now() - this.$n && (this.$n -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
    }, $I;
  }(ui.$I), $M.AuthorizationPanel = $E;
}(modules || (modules = {})), function ($I) {
  var $M, $E, $Z, $i, $c, $n;$M = $I.$c || ($I.$c = {}), $E = Laya.Event, $Z = Laya.Image, $i = Laya.Component, $c = Laya.Loader, $n = function ($M) {
    function $d() {
      var $I = $M.call(this) || this;return $I.$f = new $Z(), $I.addChild($I.$f), $I.$d = null, $I.$H = [], $I.$B = !1, $I.$A = 0, $I.$Q = !0, $I.$p = 6, $I.$t = !1, $I.on($E.DISPLAY, $I, $I.$V), $I.on($E.UNDISPLAY, $I, $I.$u), $I;
    }return __extends($d, $M), $d.create = function ($I, $M, $E, $Z, $i, $n, $c) {
      void 0 === $Z && ($Z = 0), void 0 === $i && ($i = 6), void 0 === $n && ($n = !0), void 0 === $c && ($c = !1);var $f = new $d();return $f.skin($M, $E, $Z), $f.durFrm = $i, $f.loop = $n, $f.atHide = $c, $I && $I.addChild($f), $f;
    }, $d.play = function ($I) {
      $I && ($I.visible = !0, $I.play());
    }, $d.stop = function ($I) {
      $I && ($I.visible = !1, $I.stop());
    }, $d.prototype.destroy = function ($I) {
      Laya.timer.clear(this, this.$N), this.off($E.DISPLAY, this, this.$V), this.off($E.UNDISPLAY, this, this.$u), $M.prototype.destroy.call(this, $I);
    }, $d.prototype.$V = function () {}, $d.prototype.$u = function () {}, $d.prototype.skin = function ($I, $M, $E) {
      if (this.$d != $I) {
        this.$d = $I, this.$H = [];for (var $Z = 0, $i = $E; $i <= $M; $i++) this.$H[$Z++] = $I + "/" + $i + ".png";var $n = $c.getRes(this.$H[0]);$n && (this.width = $n.sourceWidth, this.height = $n.sourceHeight), this.$N();
      }
    }, Object.defineProperty($d.prototype, "atHide", { get: function () {
        return this.$t;
      }, set: function ($I) {
        this.$t = $I;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty($d.prototype, "durFrm", { set: function ($I) {
        this.$p != $I && (this.$p = $I, this.$B && (Laya.timer.clear(this, this.$N), Laya.timer.loop(this.$p * (1e3 / 60), this, this.$N)));
      }, enumerable: !0, configurable: !0 }), Object.defineProperty($d.prototype, "loop", { set: function ($I) {
        this.$Q = $I;
      }, enumerable: !0, configurable: !0 }), $d.prototype.play = function () {
      this.$B && this.stop(), this.$B = !0, this.$A = 0, Laya.timer.loop(this.$p * (1e3 / 60), this, this.$N), this.$N();
    }, $d.prototype.stop = function () {
      this.$B = !1, this.$A = 0, this.$N(), Laya.timer.clear(this, this.$N);
    }, $d.prototype.pause = function () {
      this.$B && (this.$B = !1, Laya.timer.clear(this, this.$N));
    }, $d.prototype.resume = function () {
      this.$B || (this.$B = !0, Laya.timer.loop(this.$p * (1e3 / 60), this, this.$N), this.$N());
    }, Object.defineProperty($d.prototype, "isPlay", { get: function () {
        return this.$B;
      }, enumerable: !0, configurable: !0 }), $d.prototype.$N = function () {
      this.$H && 0 != this.$H.length && (this.$f.skin = this.$H[this.$A], this.$B && (this.$A++, this.$A == this.$H.length && (this.$Q ? this.$A = 0 : (Laya.timer.clear(this, this.$N), this.$B = !1, this.$t && (this.visible = !1), this.event($E.COMPLETE)))));
    }, $d;
  }($i), $M.PanelEff = $n;
}(modules || (modules = {})), function ($I) {
  var $M, $E, $Z;$M = $I.$Z || ($I.$Z = {}), $E = $I.$c.PanelEff, $Z = function ($Z) {
    function $I($I, $M) {
      void 0 === $I && ($I = 0);var $E = $Z.call(this) || this;return $E.$y = { bgImgSkin: "bbbloding/a3a.jpg", topImgSkin: "bbbloding/a10a.jpg", btmImgSkin: "bbbloding/a4a.jpg", leftImgSkin: "bbbloding/a6a.jpg", rightImgSkin: "bbbloding/a8a.jpg", loadingBarBgSkin: "bbbloding/a13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, $E.$$ = { bgImgSkin: "bbbloding/a12a.jpg", topImgSkin: "bbbloding/a11a.jpg", btmImgSkin: "bbbloding/a5a.jpg", leftImgSkin: "bbbloding/a7a.jpg", rightImgSkin: "bbbloding/a9a.jpg", loadingBarBgSkin: "bbbloding/a15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, $E.$w = 0, $E.$g(1 == $I ? $E.$$ : $E.$y), $E.copyRightImg.skin = $M, $E;
    }return __extends($I, $Z), $I.prototype.initialize = function () {
      if ($Z.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.$O = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.$O) {
        var $I = this.$O.loadingType;this.loadingTips.color = 1 == $I ? "#f2ffb5" : 2 == $I ? "#000000" : 101 == $I ? "#000000" : "#f2ffb5";
      }this.$a = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
    }, $I.prototype.toAllProgress = function ($I) {
      var $M = this;if (-1 === $I) return $M.$w = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);if (-2 !== $I) {
        $M.$w < .9 ? $M.$w += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : $M.$w < 1 && ($M.$w += 1e-4), .9999 < $M.$w && ($M.$w = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
          .9 < $M.$w && toAllProgress(-1);
        }));var $E = $M.$w,
            $Z = 590 * $E;$M.$w = $M.$w > $E ? $M.$w : $E, $M.loadingBar.width = $Z;var $i = $M.loadingBar.x + $Z;$M.loadingImg2.x = $i - 15, 364 <= $i ? ($M.loadingImg1.visible = !0, $M.loadingImg1.x = $i - 202) : $M.loadingImg1.visible = !1, $M.percentageTips.text = (100 * $E >> 0) + "%", $M.$w < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress);
      } else Laya.timer.clear(this, this.toAllProgress);
    }, $I.prototype.toProgress = function ($I, $M, $E) {
      var $Z = this;1 < $I && ($I = 1);var $i = 590 * $I;$Z.$w = $Z.$w > $I ? $Z.$w : $I, $Z.loadingBar.width = $i;var $n = $Z.loadingBar.x + $i;$Z.loadingImg2.x = $n - 15, 364 <= $n ? ($Z.loadingImg1.visible = !0, $Z.loadingImg1.x = $n - 202) : $Z.loadingImg1.visible = !1, $Z.percentageTips.text = (100 * $I >> 0) + "%", $Z.loadingTips.text = $M;for (var $c = $E - 1, $f = 0; $f < this.$a.length; $f++) $Z.$a[$f].skin = $f < $c ? "bbbloding/a20a.png" : $c === $f ? "bbbloding/a19a.png" : "bbbloding/a18a.png";
    }, $I.prototype.onOpened = function () {
      this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$O.lastVersion + "      \u7248\u672c\uff1a" + this.$O.wxVersion, this.showGetBtn();
    }, $I.prototype.close = function ($I) {
      this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.$m), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.$j);
    }, $I.prototype.resetWinFun = function () {
      Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
    }, $I.prototype.destroy = function ($I) {
      void 0 === $I && ($I = !0), this.resetWinFun(), $Z.prototype.destroy.call(this, $I);
    }, $I.prototype.showGetBtn = function () {
      this.$O.showGetBtn && 1 == this.$O.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "bbbloding/a1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.$j), this.$T(), this.$q(!0));
    }, $I.prototype.$j = function () {
      this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "bbbloding/a2a.png", this.$v(), this.$q(!1));
    }, $I.prototype.$g = function ($I) {
      this.bgImg.skin = $I.bgImgSkin, this.topImg.skin = $I.topImgSkin, this.btmImg.skin = $I.btmImgSkin, this.leftImg.skin = $I.leftImgSkin, this.rightImg.skin = $I.rightImgSkin, this.copyRightImg.bottom = $I.copyRightImgBottom, this.processBox1.y = $I.processBox1Y, this.processBox2.y = $I.processBox2Y, this.loadingBarBg.skin = $I.loadingBarBgSkin, this.loadingTips.fontSize = $I.loadingTipsSize, this.getTipsBtn.visible = this.$O.showGetBtn && 1 == this.$O.showGetBtn, this.getTipsBtn.visible ? this.$T() : this.$v(), this.$q(this.getTipsBtn.visible);
    }, $I.prototype.$T = function () {
      this.$W || (this.$W = $E.create(this.getTipsBtn, "bwxeff", 4, 0, 12), this.$W.pos(161, 106), this.$W.scale(1.14, 1.15)), $E.play(this.$W);
    }, $I.prototype.$v = function () {
      this.$W && $E.stop(this.$W);
    }, $I.prototype.$q = function ($I) {
      Laya.timer.clear(this, this.$m), $I ? (this.$R = 9, this.txtGetTm.visible = !0, this.$m(), Laya.timer.loop(1e3, this, this.$m)) : this.txtGetTm.visible = !1;
    }, $I.prototype.$m = function () {
      0 < this.$R ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.$R + "s)", this.$R--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.$m), this.$j());
    }, $I;
  }(ui.$M), $M.LoadingPanel = $Z;
}(modules || (modules = {})), function ($I) {
  var $M, $Z, $i, $E;$M = $I.$Z || ($I.$Z = {}), $Z = Laya.List, $i = Laya.Event, $E = function ($E) {
    function $I($I) {
      void 0 === $I && ($I = "bbblogin/b1b.png");var $M = $E.call(this) || this;return $M.$z = 0, $M.$L = "multi_notice_key", $M.$o = 0, $M.$S = 0, $M.$X = "privacy_key", $M.$C = !0, $M.$J = 0, $M.copyRightImg.skin = $I, $M;
    }return __extends($I, $E), $I.prototype.initialize = function () {
      $E.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.copyRightImg.skin = "", ServerLoading.instance.preloadServer(), this.$O = Browser.window.PF_INFO, this.$x = new $Z(), this.$x.vScrollBarSkin = "", this.$x.itemRender = $M.SelectLeftListItem, this.$x.top = 5, this.$x.repeatX = 1, this.$x.spaceY = 5, this.$x.width = this.leftListBox.width, this.$x.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.$x), this.$k = new $Z(), this.$k.vScrollBarSkin = "", this.$k.itemRender = $M.SelectRightListItem, this.$k.top = 5, this.$k.repeatX = 1, this.$k.spaceY = 5, this.$k.width = this.rightListBox.width, this.$k.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.$k), this.$r = new $Z(), this.$r.hScrollBarSkin = "", this.$r.itemRender = $M.NoticeItem, this.$r.repeatY = 1, this.$r.width = this.boxTab.width, this.$r.height = this.boxTab.height, this.boxTab.addChild(this.$r), this.$l = new $Z(), this.$l.hScrollBarSkin = "", this.$l.itemRender = $M.PrivacyItem, this.$l.repeatY = 1, this.$l.width = this.boxTab.width, this.$l.height = this.boxTab.height, this.boxTabPrivacy.addChild(this.$l);var $I = this.$O.loadingType;this.$F = 1 == $I ? "#feffc0" : 2 == $I ? "#feffc0" : 3 == $I ? "#feffc0" : 101 == $I ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.$e = [], this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.privacyContent.color = "#212942", this.privacyContent.style.fontSize = 26, this.privacyContent.style.lineHeight = 28, this.privacyContent.mouseEnabled = !1, this.privacyTip.color = "#ffffff", this.privacyTip.style.fontSize = 18, this.privacyTip.style.lineHeight = 18, this.privacyTip.style.stroke = 2, this.privacyTip.style.strokeColor = "#000000", this.privacyTip.style.wordWrap = !1, this.jumpContent.color = "#212942", this.jumpContent.style.fontSize = 26, this.jumpContent.style.lineHeight = 28, this.jumpContent.mouseEnabled = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
    }, $I.prototype.destroy = function ($I) {
      void 0 === $I && ($I = !0), this.rmEvts(), this.$h(), this.$P(), this.$D(), this.$G(), this.ageTipsContent = null, this.$x && (this.$x.removeSelf(), this.$x.destroy(), this.$x = null), this.$k && (this.$k.removeSelf(), this.$k.destroy(), this.$k = null), this.$r && (this.$r.removeSelf(), this.$r.destroy(), this.$r = null), this.$l && (this.$l.removeSelf(), this.$l.destroy(), this.$l = null), Laya.timer.clear(this, this.$Y), $E.prototype.destroy.call(this, $I);
    }, $I.prototype.addEvt = function () {
      this.bgImg.on(Laya.Event.CLICK, this, this.$K), this.enterBtn.on(Laya.Event.CLICK, this, this.$s), this.selectServer.on(Laya.Event.CLICK, this, this.$b), this.selectServer.on(Laya.Event.CLICK, this, this.$b), this.closeBg.on(Laya.Event.CLICK, this, this.$U), this.closeBtn.on(Laya.Event.CLICK, this, this.$II), this.noticeBtn.on(Laya.Event.CLICK, this, this.$MI), this.noticeClose.on(Laya.Event.CLICK, this, this.$EI), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.$ZI), this.mNoticeClose.on(Laya.Event.CLICK, this, this.$iI), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.$iI), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.$nI), this.privacyBtn.on(Laya.Event.CLICK, this, this.$cI), this.ageTipBtn.on(Laya.Event.CLICK, this, this.$fI), this.privacyClose.on(Laya.Event.CLICK, this, this.$dI), this.privacyClose2.on(Laya.Event.CLICK, this, this.$dI), this.privacyPanel.on(Laya.Event.MOUSE_DOWN, this, this.$HI), this.privacyToggle.on(Laya.Event.CLICK, this, this.$BI), this.privacyTip.on(Laya.Event.LINK, this, this.$AI), this.btnJump.on(Laya.Event.CLICK, this, this.$QI), this.jumpPanel.on(Laya.Event.MOUSE_DOWN, this, this.$pI), this.$r.selectEnable = !0, this.$r.selectHandler = Laya.Handler.create(this, this.$tI, null, !1), this.$l.selectEnable = !0, this.$l.selectHandler = Laya.Handler.create(this, this.$VI, null, !1);
    }, $I.prototype.rmEvts = function () {
      this.bgImg.off(Laya.Event.CLICK, this, this.$K), this.enterBtn.off(Laya.Event.CLICK, this, this.$s), this.selectServer.off(Laya.Event.CLICK, this, this.$b), this.selectServer.off(Laya.Event.CLICK, this, this.$b), this.closeBg.off(Laya.Event.CLICK, this, this.$U), this.noticeBtn.off(Laya.Event.CLICK, this, this.$MI), this.closeBtn.off(Laya.Event.CLICK, this, this.$II), this.noticeClose.off(Laya.Event.CLICK, this, this.$EI), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.$ZI), this.mNoticeClose.off(Laya.Event.CLICK, this, this.$iI), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.$iI), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.$nI), this.privacyBtn.off(Laya.Event.CLICK, this, this.$cI), this.ageTipBtn.off(Laya.Event.CLICK, this, this.$fI), this.privacyClose.off(Laya.Event.CLICK, this, this.$dI), this.privacyClose2.off(Laya.Event.CLICK, this, this.$dI), this.privacyPanel.off(Laya.Event.MOUSE_DOWN, this, this.$HI), this.privacyToggle.off(Laya.Event.CLICK, this, this.$BI), this.privacyTip.off(Laya.Event.LINK, this, this.$AI), this.btnJump.off(Laya.Event.CLICK, this, this.$QI), this.jumpPanel.off(Laya.Event.MOUSE_DOWN, this, this.$pI), this.$r.selectEnable = !1, this.$r.selectHandler = null, this.$l.selectEnable = !1, this.$l.selectHandler = null;
    }, $I.prototype.onOpened = function () {
      var $Z = this;this.$n = Date.now(), this.$C = !0, this.$uI = this.$O.selectedServer.server_id, this.$NI(this.$O.selectedServer), this.$x.dataSource = this.$O.groupList, this.$b(), req_multi_server_notice(4, this.$O.pkgName, this.$O.selectedServer.server_id, this.$yI.bind(this)), Laya.timer.frameOnce(1, this, function () {
        $Z.$$I = $Z.$O.privacy_data && $Z.$O.privacy_data.list ? $Z.$O.privacy_data.list : [], $Z.$wI = null != $Z.$O.privacy_login_pkg ? $Z.$O.privacy_login_pkg : 0;var $I = "1" == localStorage.getItem($Z.$X),
            $M = 0 != PF_INFO.privacy_save_pkg,
            $E = 0 == $Z.$wI || 1 == $Z.$wI;$Z.$gI = $M && $I || $E, $Z.$OI();
      }), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$O.lastVersion + "      \u7248\u672c\uff1a" + this.$O.wxVersion, this.serverName.color = this.selServer.color = this.$F, this.imgCheatTip.visible = 1 == this.$O.anti_cheat_pkg, this.txtTip.visible = !1;
    }, $I.prototype.preload = function () {}, $I.prototype.$K = function () {
      this.$gI ? 1e4 < Date.now() - this.$n && (this.$n -= 2e3, ServerLoading.instance.enterDefaultServer()) : this.$aI("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
    }, $I.prototype.$s = function () {
      this.$gI ? this.$mI(this.$O.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.$O.selectedServer, req_server_check_ban(0, this.$O.selectedServer.server_id)) : this.$aI("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
    }, $I.prototype.$b = function () {
      this.$O.hasGroupReq ? this.listBg.visible = !0 : (this.$O.hasGroupReq = !0, req_server_group(0));
    }, $I.prototype.$U = function () {
      this.listBg.visible = !1;
    }, $I.prototype.$II = function () {
      this.jumpBg.visible = !1;
    }, $I.prototype.$MI = function () {
      this.$jI();
    }, $I.prototype.$iI = function () {
      this.mNoticeBg.visible = !1;
    }, $I.prototype.$EI = function () {
      this.noticeBg.visible = !1;
    }, $I.prototype.$cI = function () {
      this.$TI();
    }, $I.prototype.$dI = function () {
      this.privacyBg.visible = !1;
    }, $I.prototype.$BI = function () {
      this.$gI = !this.$gI, this.$gI && localStorage.setItem(this.$X, "1"), this.privacyToggle.skin = "bbblogin/" + (this.$gI ? "b29b.png" : "b28b.png");
    }, $I.prototype.$AI = function ($I) {
      this.$TI(Number($I));
    }, $I.prototype.$QI = function () {
      Browser.window.forceJumpMiniGame ? Browser.window.forceJumpMiniGame() : this.$II();
    }, $I.prototype.$ZI = function () {
      this.$z = this.noticeContent.mouseY, Laya.stage.on($i.MOUSE_MOVE, this, this.$qI), Laya.stage.on($i.MOUSE_UP, this, this.$h), Laya.stage.on($i.MOUSE_OUT, this, this.$h);
    }, $I.prototype.$qI = function () {
      if (this.noticeContent) {
        var $I = this.$z - this.noticeContent.mouseY;this.noticeContent.scrollY += $I, this.$z = this.noticeContent.mouseY;
      }
    }, $I.prototype.$h = function () {
      Laya.stage.off($i.MOUSE_MOVE, this, this.$qI), Laya.stage.off($i.MOUSE_UP, this, this.$h), Laya.stage.off($i.MOUSE_OUT, this, this.$h);
    }, $I.prototype.$nI = function () {
      this.$o = this.mNoticePanel.mouseY, Laya.stage.on($i.MOUSE_MOVE, this, this.$vI), Laya.stage.on($i.MOUSE_UP, this, this.$P), Laya.stage.on($i.MOUSE_OUT, this, this.$P);
    }, $I.prototype.$vI = function () {
      if (this.mNoticeContent) {
        var $I = this.$o - this.mNoticePanel.mouseY;this.mNoticeContent.y -= $I, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.$o = this.mNoticePanel.mouseY;
      }
    }, $I.prototype.$P = function () {
      Laya.stage.off($i.MOUSE_MOVE, this, this.$vI), Laya.stage.off($i.MOUSE_UP, this, this.$P), Laya.stage.off($i.MOUSE_OUT, this, this.$P);
    }, $I.prototype.$HI = function () {
      this.$S = this.privacyPanel.mouseY, Laya.stage.on($i.MOUSE_MOVE, this, this.$WI), Laya.stage.on($i.MOUSE_UP, this, this.$D), Laya.stage.on($i.MOUSE_OUT, this, this.$D);
    }, $I.prototype.$WI = function () {
      if (this.privacyContent) {
        var $I = this.$S - this.privacyPanel.mouseY;this.privacyContent.y -= $I, this.privacyPanel.height < this.privacyContent.contextHeight ? this.privacyContent.y < this.privacyPanel.height - this.privacyContent.contextHeight ? this.privacyContent.y = this.privacyPanel.height - this.privacyContent.contextHeight : 0 < this.privacyContent.y && (this.privacyContent.y = 0) : this.privacyContent.y = 0, this.$S = this.privacyPanel.mouseY;
      }
    }, $I.prototype.$D = function () {
      Laya.stage.off($i.MOUSE_MOVE, this, this.$WI), Laya.stage.off($i.MOUSE_UP, this, this.$D), Laya.stage.off($i.MOUSE_OUT, this, this.$D);
    }, $I.prototype.$pI = function () {
      this.$J = this.jumpPanel.mouseY, Laya.stage.on($i.MOUSE_MOVE, this, this.$RI), Laya.stage.on($i.MOUSE_UP, this, this.$G), Laya.stage.on($i.MOUSE_OUT, this, this.$G);
    }, $I.prototype.$RI = function () {
      if (this.jumpContent) {
        var $I = this.$J - this.jumpPanel.mouseY;this.jumpContent.y -= $I, this.jumpPanel.height < this.jumpContent.contextHeight ? this.jumpContent.y < this.jumpPanel.height - this.jumpContent.contextHeight ? this.jumpContent.y = this.jumpPanel.height - this.jumpContent.contextHeight : 0 < this.jumpContent.y && (this.jumpContent.y = 0) : this.jumpContent.y = 0, this.$J = this.jumpPanel.mouseY;
      }
    }, $I.prototype.$G = function () {
      Laya.stage.off($i.MOUSE_MOVE, this, this.$RI), Laya.stage.off($i.MOUSE_UP, this, this.$G), Laya.stage.off($i.MOUSE_OUT, this, this.$G);
    }, $I.prototype.$tI = function () {
      if (this.$r.dataSource) {
        for (var $I, $M = 0; $M < this.$r.dataSource.length; $M++) {
          var $E = this.$r.dataSource[$M];$E[1] = $M == this.$r.selectedIndex, $M == this.$r.selectedIndex && ($I = $E[0]);
        }this.mNoticeTitle.text = $I && $I.title ? $I.title : "", this.mNoticeContent.innerHTML = $I && $I.content ? $I.content : "", this.mNoticeContent.y = 0;
      }
    }, $I.prototype.$VI = function () {
      var $I = this.$l.dataSource;if ($I) {
        for (var $M = 0; $M < $I.length; $M++) {
          $I[$M][1] = $M == this.$l.selectedIndex;
        }var $E = this.$$I[this.$l.selectedIndex];$E && $E.content && ($E.content = $E.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "")), this.privacyTitle.text = $E && $E.title ? $E.title : "\u6807\u9898", this.privacyContent.innerHTML = $E && $E.content ? $E.content : "\u52a0\u8f7d\u4e2d...", this.privacyContent.y = 0;
      }
    }, $I.prototype.$NI = function ($I) {
      var $M = $I.server_name;this.serverName.text = $M + this.$zI($I), this.serverName.color = -1 === $I.status ? "#d50000" : 0 === $I.status ? "#49575a" : this.$F, this.hotImage.skin = this.$LI($I), this.$O.cdn = $I.cdn || "", this.$O.selectedServer = $I, this.noticeBtn.visible = !0;
    }, $I.prototype.$oI = function ($I) {
      this.showGroupList($I);
    }, $I.prototype.$SI = function ($I) {
      this.$NI($I), this.listBg.visible = !1;
    }, $I.prototype.showGroupList = function ($I) {
      if (void 0 === $I && ($I = 0), this.parent) {
        var $M = this.$O.groupList;if ($M && 0 !== $M.length) {
          for (var $E = $M.length, $Z = 0; $Z < $E; $Z++) $M[$Z].callBack = this.$oI.bind(this), $M[$Z].select = $Z == $I, $M[$Z].index = $Z;var $i = (this.$x.array = $M)[$I].id;this.$O.serverList[$i] ? this.showServerList($i) : this.$O.hasServerReq || (this.$O.hasServerReq = !0, -1 == $i ? req_server_owner(0) : -2 == $i ? req_recommend_server_list(0) : req_server_list(0, $i));
        }
      }
    }, $I.prototype.showServerList = function ($I) {
      if (this.parent && this.$O.serverList[$I]) {
        for (var $M = this.$O.serverList[$I], $E = $M.length, $Z = 0; $Z < $E; $Z++) $M[$Z].callBack = this.$SI.bind(this);this.$k.array = $M;
      }
    }, $I.prototype.$mI = function ($I) {
      return -1 == $I.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != $I.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
    }, $I.prototype.$LI = function ($I) {
      var $M = $I.status,
          $E = $I.is_recommend,
          $Z = "bbblogin/b19b.png";return 1 !== $M && 2 !== $M || 1 !== $E && 3 !== $E ? 1 !== $M && 2 !== $M || 2 !== $E ? -1 !== $M && 0 !== $M || ($Z = "bbblogin/b20b.png") : $Z = "bbblogin/b19b.png" : $Z = "bbblogin/b18b.png", $Z;
    }, $I.prototype.$zI = function ($I) {
      var $M = $I.status,
          $E = "";return 1 == $I.is_recommend || 3 == $I.is_recommend ? $E = "(\u63a8\u8350)" : -1 === $M ? $E = "(\u7ef4\u62a4\u4e2d)" : 0 === $M && ($E = "(\u5f85\u5f00\u670d)"), $E;
    }, $I.prototype.$yI = function ($I) {
      console.log("onMultiNoticeCallback, param = ", $I);var $M = Date.now() / 1e3,
          $E = localStorage.getItem(this.$L),
          $Z = !(this.$e = []);if ("success" == $I.state) for (var $i in $I.data) {
        var $n = $I.data[$i];if ($n) {
          var $c = $M < $n.end_time,
              $f = 1 == $n.pop_type,
              $d = 2 == $n.pop_type && $n.key + "" != $E;!$Z && $c && ($f || $d) && ($Z = !0), $c && this.$e.push($n), $d && localStorage.setItem(this.$L, $n.key + "");
        }
      }this.$e.sort(function ($I, $M) {
        return $I.login_id - $M.login_id;
      }), console.log("onMultiNoticeCallback, datas = ", this.$e), $Z && this.$jI();
    }, $I.prototype.$jI = function () {
      if (this.$r) {
        if (this.$e) {
          this.$r.x = 2 < this.$e.length ? 0 : (this.boxTab.width - 274 * this.$e.length) / 2;for (var $I = [], $M = 0; $M < this.$e.length; $M++) {
            var $E = this.$e[$M];$I.push([$E, $M == this.$r.selectedIndex]);
          }0 < (this.$r.dataSource = $I).length ? (this.$r.selectedIndex = 0, this.$r.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.$e.length <= 1, this.boxTab.visible = 1 < this.$e.length;
        }this.mNoticeBg.visible = !0;
      }
    }, $I.prototype.$XI = function ($I) {
      if (!this.destroyed) {
        if (console.log("p_onPrivacyCallback, param = ", $I), "success" == $I.state) for (var $M in $I.data) {
          var $E = Number($M),
              $Z = $I.data[$E];this.$$I && this.$$I[$E] && (this.$$I[$E].content = $Z.content);
        }this.$VI();
      }
    }, $I.prototype.$OI = function () {
      for (var $I = "", $M = 0; $M < this.$$I.length; $M++) {
        $I += '<a href="' + $M + '" style="color:#14ff28;text-decoration:none">' + this.$$I[$M].title + "</a>", $M < this.$$I.length - 1 && ($I += "\u3001");
      }this.privacyTip.innerHTML = "\u6211\u5df2\u7ecf\u8be6\u7ec6\u9605\u8bfb\u5e76\u540c\u610f" + $I, this.privacyToggle.skin = "bbblogin/" + (this.$gI ? "b29b.png" : "b28b.png"), this.privacyTip.x = (720 - this.privacyTip.width) / 2, this.privacyToggle.x = this.privacyTip.x - 30, this.privacyBtn.visible = 0 < this.$$I.length, this.privacyToggle.visible = this.privacyTip.visible = 0 < this.$$I.length && 0 != this.$wI;
    }, $I.prototype.$TI = function ($I) {
      if (void 0 === $I && ($I = 0), this.$l) {
        if (this.$$I) {
          this.$l.x = 2 < this.$$I.length ? 0 : (this.boxTab.width - 274 * this.$$I.length) / 2;for (var $M = [], $E = 0; $E < this.$$I.length; $E++) {
            var $Z = this.$$I[$E],
                $i = $Z && $Z.title ? $Z.title : "",
                $n = $E == this.$l.selectedIndex;$M.push([$i, $n]);
          }0 < (this.$l.dataSource = $M).length ? ($I < 0 && ($I = 0), $I > $M.length - 1 && ($I = 0), this.$l.selectedIndex = $I, this.$l.scrollTo($I)) : (this.privacyTitle.text = "\u7a7a", this.privacyContent.text = ""), this.privacyClose2.visible = this.$$I.length <= 1, this.boxTabPrivacy.visible = 1 < this.$$I.length;
        }this.$C && (this.$C = !1, req_privacy(this.$O.pkgName, this.$XI.bind(this))), this.privacyBg.visible = !0;
      }
    }, $I.prototype.openJumpView = function ($I, $M, $E, $Z) {
      void 0 === $Z && ($Z = !1), this.jumpTitle.text = $I || "\u6682\u65e0\u516c\u544a", this.jumpContent.innerHTML = $M || "", this.btnJump.label = $E || "\u786e\u5b9a", this.jumpContent.y = 0, this.jumpBg.visible = !0, this.closeBtn.visible = $Z;
    }, $I.prototype.showAgeTipsBtn = function ($I, $M, $E, $Z, $i) {
      (this.ageTipBtn.visible = $I) && (this.ageTipBtn.skin = $M || "bbblogin/b11b.png"), this.ageTipsContent = $E, this.ageTipBtn.x = $Z || 0, this.ageTipBtn.y = $i || 0;
    }, $I.prototype.$fI = function () {
      this.openJumpView("\u9002\u9f84\u516c\u544a", this.ageTipsContent, "\u786e\u8ba4", !0);
    }, $I.prototype.$aI = function ($I) {
      this.txtTip.text = $I, this.txtTip.y = 640, this.txtTip.visible = !0, this.$CI = 1, Laya.timer.clear(this, this.$Y), this.$Y(), Laya.timer.frameLoop(1, this, this.$Y);
    }, $I.prototype.$Y = function () {
      this.txtTip.y -= this.$CI, this.$CI *= 1.1, this.txtTip.y <= 590 && (this.txtTip.visible = !1, Laya.timer.clear(this, this.$Y));
    }, $I;
  }(ui.$E), $M.SelectServerPanel = $E;
}(modules || (modules = {}));var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.$Z.AuthorizationPanel,
    LoadingPanel = modules.$Z.LoadingPanel,
    SelectServerPanel = modules.$Z.SelectServerPanel,
    ServerLoading = function () {
  function $d($I) {
    this.m_loadingRes = ["bbbloding/a13a.png", "bbbloding/a15a.png", "bbbloding/a14a.png", "bbbloding/a16a.png", "bbbloding/a17a.png", "bbbloding/a18a.png", "bbbloding/a19a.png", "bbbloding/a20a.png", "bwxeff/b100b.png", "bwxeff/b101b.png", "bwxeff/b102b.png", "bwxeff/b103b.png", "bwxeff/b104b.png", "bbbloding/a3a.jpg", "bbbloding/a12a.jpg", "bbbloding/a1a.png", "bbbloding/a2a.png", "bbbloding/a4a.jpg", "bbbloding/a6a.jpg", "bbbloding/a8a.jpg", "bbbloding/a10a.jpg", "bbbloding/a5a.jpg", "bbbloding/a7a.jpg", "bbbloding/a9a.jpg", "bbbloding/a11a.jpg"], this.m_serverRes = ["bbblogin/b10b.png", "bbblogin/b11b.png", "bbblogin/b12b.png", "bbblogin/b13b.png", "bbblogin/b14b.png", "bbblogin/b15b.png", "bbblogin/b16b.png", "bbblogin/b17b.png", "bbblogin/b18b.png", "bbblogin/b19b.png", "bbblogin/b20b.png", "bbblogin/b21b.png", "bbblogin/b2b.jpg", "bbblogin/b3b.jpg", "bbblogin/b4b.jpg", "bbblogin/b5b.jpg", "bbblogin/b6b.jpg", "bbblogin/b1b.png", "bbblogin/b8b.png", "bbblogin/b9b.png", "bbblogin/b24b.png", "bbblogin/b25b.png", "bbblogin/b27b.png", "bbblogin/b29b.png", "bbblogin/b28b.png", "bbblogin/b123b.png", "bbblogin/b199b.png"], this.copyRightUrl = "bbblogin/b1b.png", this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.$JI = !1, this.$xI = "", $d.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var $M = Laya.AtlasResourceManager;$M.maxTextureCount = 6, $M.atlasTextureWidth = $M.atlasTextureHeight = 1024, $M._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.$kI.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } }, "b28b.png": { frame: { h: 25, idx: 0, w: 25, x: 444, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 2 } }, "b29b.png": { frame: { h: 27, idx: 0, w: 26, x: 470, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = $d.instance.requestWeb, Browser.window.imgMgrLoad = $d.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.$kI();
  }return $d.prototype.changeServerLoading = function ($I) {
    $d.instance.m_layer.visible = $I;
  }, $d.prototype.openAuthor = function () {
    $d.instance.m_author || ($d.instance.m_author = new AuthorizationPanel()), $d.instance.m_author.parent || $d.instance.m_layer.addChild($d.instance.m_author), $d.instance.$rI();
  }, $d.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, $d.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, $d.prototype.$lI = function () {
    $d.instance.m_server || ($d.instance.m_server = new SelectServerPanel(this.copyRightUrl)), $d.instance.m_server.parent || $d.instance.m_layer.addChild($d.instance.m_server), $d.instance.$rI();
  }, $d.prototype.openJumpView = function ($I, $M, $E, $Z) {
    void 0 === $Z && ($Z = !1), this.$lI(), $d.instance.m_server.openJumpView($I, $M, $E, $Z);
  }, $d.prototype.openJumpTipsBtn = function ($I, $M, $E, $Z, $i) {
    this.$lI(), $d.instance.m_server.showAgeTipsBtn($I, $M, $E, $Z, $i);
  }, $d.prototype.getCertificatePng = function () {
    window.sdkInitRes = window.sdkInitRes || {};var $I = "bbblogin/b123b.png",
        $M = "bbblogin/b1b.png";return 1 == sdkInitRes.develop ? 0 == (PF_INFO.develop_certificate_pkg || 0) ? $I : $M : 0 == PF_INFO.release_certificate_pkg ? $I : $M;
  }, $d.prototype.openServer = function ($I, $M, $E) {
    var $Z = this;this.copyRightUrl = $E || this.getCertificatePng();for (var $i = function () {
      $Z.$lI(), $I && $M && $I.call($M);
    }, $n = !0, $c = 0, $f = this.m_serverRes; $c < $f.length; $c++) {
      var $d = $f[$c];if (null == Laya.Loader.getRes($d)) {
        $n = !1;break;
      }
    }$n ? $i() : Laya.loader.load(this.m_serverRes, Handler.create(this, $i));
  }, $d.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, $d.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, $d.prototype.openLoading = function ($I, $M) {
    void 0 === $I && ($I = 0), $M = $M || this.getCertificatePng(), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      $d.instance.m_loading || ($d.instance.m_loading = new LoadingPanel($I, $M)), $d.instance.m_loading.parent || $d.instance.m_layer.addChild($d.instance.m_loading), $d.instance.$rI();
    }));
  }, $d.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var $I = 0, $M = this.m_serverRes; $I < $M.length; $I++) {
      var $E = $M[$I];Laya.Loader.clearCache($d.instance, $E), Laya.Loader.clearRes($E, !0);
    }for (var $Z = 0, $i = this.m_loadingRes; $Z < $i.length; $Z++) {
      $E = $i[$Z];Laya.Loader.clearCache($d.instance, $E), Laya.Loader.clearRes($E, !0);
    }this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, $d.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && $d.instance.m_loading.showGetBtn();
  }, $d.prototype.enterDefaultServer = function () {
    var $I = Browser.window.PF_INFO.selectedServer;this.$JI || -1 == $I.status || 0 == $I.status || (this.$JI = !0, Browser.window.PF_INFO.selectedServer = $I, req_server_check_ban(0, $I.server_id));
  }, $d.prototype.sendRecord = function () {
    var $I = "";$I += "newRegister=" + Browser.window.PF_INFO.newRegister, $I += ", isPrelodServer=" + this.m_isPrelodServer, $I += ", SelectServerPanel=" + (null != $d.instance.m_server), $I += ", isPrelodLoading=" + this.m_isPrelodLoading, $I += ", LoadingPanel=" + (null != $d.instance.m_loading), $I += ", resMgrLoad=" + (Browser.window.resMgrLoad == $d.instance.requestWeb), $I += ", imgMgrLoad=" + (Browser.window.imgMgrLoad == $d.instance.requestWeb), $I += ", errUrls=" + $d.instance.$xI;for (var $M = 0, $E = this.m_serverRes; $M < $E.length; $M++) {
      $I += ", " + ($n = $E[$M]) + "=" + (null != Laya.Loader.getRes($n));
    }for (var $Z = 0, $i = this.m_loadingRes; $Z < $i.length; $Z++) {
      var $n;$I += ", " + ($n = $i[$Z]) + "=" + (null != Laya.Loader.getRes($n));
    }var $c = Browser.window.PF_INFO.selectedServer;$c && ($I += ", server_status=" + $c.status, $I += ", server_id=" + $c.server_id, $I += ", server_name=" + $c.server_name);var $f = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: $I });console.error($f), this.$FI && this.$FI == $I || (this.$FI = $I, reqRecordError($f));
  }, $d.prototype.$eI = function () {
    var $I = Laya.stage,
        $M = Math.floor($I.width),
        $E = Math.floor($I.height);$E / $M < 1.7777778 ? (this.viewW = Math.floor($M / ($E / 1280)), this.viewH = 1280, this.viewS = $E / 1280) : (this.viewW = 720, this.viewH = Math.floor($E / ($M / 720)), this.viewS = $M / 720);var $Z = Math.floor($I.width),
        $i = Math.floor($I.height);$i / $Z < 1.7777778 ? (this.viewW = Math.floor($Z / ($i / 1280)), this.viewH = 1280, this.viewS = $i / 1280) : (this.viewW = 720, this.viewH = Math.floor($i / ($Z / 720)), this.viewS = $Z / 720), this.$rI();
  }, $d.prototype.$rI = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, $d.prototype.$kI = function () {
    if (Input.isInputting && Browser.onMobile) {
      var $I = parseInt(Input.inputContainer.style.top.replace("px", "")),
          $M = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS,
          $E = Browser.clientWidth / Render.canvas.width;return 0 < ($I = Browser.clientHeight - $M * $E - $I) && ($I = 0), void (Browser.container.style.top = $I + "px");
    }Browser.container.style.top = "0px";var $Z = Math.floor(Browser.width),
        $i = Math.floor(Browser.height);$Z = $Z + 1 & 2147483646, $i = $i + 1 & 2147483646;var $n = Laya.stage;3 == ENV ? ($n.scaleMode = Laya.Stage.SCALE_NOSCALE, $n.width = $Z, $n.height = $i) : $i < $Z ? ($n.scaleMode = Laya.Stage.SCALE_NOSCALE, $n.width = $Z, $n.height = $i) : ($n.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, $n.width = 840, $n.height = Math.floor($i / ($Z / 840)) + 1 & 2147483646), this.$eI();
  }, $d.prototype.requestWeb = function ($I, $M) {
    function $E() {
      $Z.onload = null, $Z.onerror = null;
    }var $Z,
        $i = $I;($Z = new Browser.window.Image()).onload = function () {
      $E(), $M($i, 200, $Z);
    }, $Z.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", $i), $d.instance.$xI += $i + "|", $E(), $M($i, 404, null);
    }, $Z.src = $i, -1 == $d.instance.m_serverRes.indexOf($i) && -1 == $d.instance.m_loadingRes.indexOf($i) || Laya.Loader.keepCache($d.instance, $i);
  }, $d.prototype.$_I = function ($I, $M) {
    return -1 != $I.indexOf($M, $I.length - $M.length);
  }, $d;
}();!function ($I) {
  var $M, $E;$M = $I.$Z || ($I.$Z = {}), $E = function ($M) {
    function $I() {
      var $I = $M.call(this) || this;return $I.$hI = "#72441d", $I.$PI = "#263d7d", $I.width = 274, $I.height = 59, $I.$DI = new Laya.Image(), $I.addChild($I.$DI), $I.$GI = new Laya.Label(), $I.$GI.fontSize = 30, $I.$GI.color = $I.$PI, $I.addChild($I.$GI), $I.$GI.centerX = 0, $I.$GI.centerY = 0, $I;
    }return __extends($I, $M), $I.prototype.initialize = function () {
      $M.prototype.initialize.call(this), this.$O = Browser.window.PF_INFO;this.$O.loadingType;this.addEvt();
    }, Object.defineProperty($I.prototype, "dataSource", { set: function ($I) {
        $I && this.setData($I);
      }, enumerable: !0, configurable: !0 }), $I.prototype.setData = function ($I) {
      this.$YI = $I[0], this.$KI = $I[1], this.$GI.text = this.$YI.title, this.$GI.color = this.$KI ? this.$hI : this.$PI, this.$DI.skin = this.$KI ? "bbblogin/b25b.png" : "bbblogin/b24b.png";
    }, $I.prototype.destroy = function ($I) {
      void 0 === $I && ($I = !0), this.rmEvts(), $M.prototype.destroy.call(this, $I);
    }, $I.prototype.addEvt = function () {}, $I.prototype.rmEvts = function () {}, $I;
  }(Laya.View), $M.NoticeItem = $E;
}(modules || (modules = {})), function ($I) {
  var $M, $E;$M = $I.$Z || ($I.$Z = {}), $E = function ($M) {
    function $I() {
      var $I = $M.call(this) || this;return $I.$hI = "#72441d", $I.$PI = "#263d7d", $I.width = 274, $I.height = 59, $I.$DI = new Laya.Image(), $I.addChild($I.$DI), $I.$GI = new Laya.Label(), $I.$GI.fontSize = 30, $I.$GI.color = $I.$PI, $I.addChild($I.$GI), $I.$GI.centerX = 0, $I.$GI.centerY = 0, $I;
    }return __extends($I, $M), $I.prototype.initialize = function () {
      $M.prototype.initialize.call(this), this.$O = Browser.window.PF_INFO;this.$O.loadingType;this.addEvt();
    }, Object.defineProperty($I.prototype, "dataSource", { set: function ($I) {
        $I && this.setData($I);
      }, enumerable: !0, configurable: !0 }), $I.prototype.setData = function ($I) {
      this.$sI = $I[0], this.$KI = $I[1], this.$GI.text = this.$sI, this.$GI.color = this.$KI ? this.$hI : this.$PI, this.$DI.skin = this.$KI ? "bbblogin/b25b.png" : "bbblogin/b24b.png";
    }, $I.prototype.destroy = function ($I) {
      void 0 === $I && ($I = !0), this.rmEvts(), $M.prototype.destroy.call(this, $I);
    }, $I.prototype.addEvt = function () {}, $I.prototype.rmEvts = function () {}, $I;
  }(Laya.View), $M.PrivacyItem = $E;
}(modules || (modules = {})), function ($I) {
  var $M, $E;$M = $I.$Z || ($I.$Z = {}), $E = function ($M) {
    function $I() {
      var $I = $M.call(this) || this;return $I.width = 192, $I.height = 70, $I.$DI = new Laya.Image(), $I.addChild($I.$DI), $I.$bI = new Laya.Label(), $I.$bI.fontSize = 28, $I.$bI.color = $I.$F, $I.addChild($I.$bI), $I.$bI.centerX = 0, $I.$bI.centerY = 0, $I.$UI = new Laya.Label(), $I.$UI.fontSize = 22, $I.$UI.color = $I.$F, $I.addChild($I.$UI), $I.$UI.centerX = 0, $I.$UI.y = 11, $I.$IM = new Laya.Label(), $I.$IM.fontSize = 26, $I.$IM.color = $I.$F, $I.addChild($I.$IM), $I.$IM.centerX = 0, $I.$IM.y = 39, $I;
    }return __extends($I, $M), $I.prototype.initialize = function () {
      $M.prototype.initialize.call(this), this.$O = Browser.window.PF_INFO;var $I = this.$O.loadingType;this.$F = 1 == $I ? "#263d7d" : 2 == $I ? "#263d7d" : 3 == $I ? "#763042" : "#263d7d", this.addEvt();
    }, Object.defineProperty($I.prototype, "dataSource", { set: function ($I) {
        $I && this.setData($I);
      }, enumerable: !0, configurable: !0 }), $I.prototype.setData = function ($I) {
      this.$YI = $I;var $M = this.$YI.id,
          $E = this.$YI.name;if (this.$bI.visible = this.$UI.visible = this.$IM.visible = !1, -1 == $M || -2 == $M) this.$bI.visible = !0, this.$bI.text = $E;else {
        var $Z = $E,
            $i = "1-10\u670d",
            $n = $E.match("[0-9]{1,}");$n && null != $n.index && ($Z = $E.slice(0, $n.index), $i = $E.slice($n.index)), this.$UI.visible = this.$IM.visible = !0, this.$UI.text = $Z, this.$IM.text = $i;
      }this.$DI.skin = $I.select ? "bbblogin/b14b.png" : "bbblogin/b15b.png";
    }, $I.prototype.destroy = function ($I) {
      void 0 === $I && ($I = !0), this.rmEvts(), $M.prototype.destroy.call(this, $I);
    }, $I.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, $I.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, $I.prototype.clkHdler = function () {
      this.$YI && this.$YI.callBack && this.$YI.callBack(this.$YI.index);
    }, $I;
  }(Laya.View), $M.SelectLeftListItem = $E;
}(modules || (modules = {})), function ($I) {
  var $M, $E;$M = $I.$Z || ($I.$Z = {}), $E = function ($M) {
    function $I() {
      var $I = $M.call(this) || this;return $I.width = 358, $I.height = 70, $I.$DI = new Laya.Image("bbblogin/b16b.png"), $I.addChild($I.$DI), $I.$DI.graphics.drawRect(0, 0, $I.width, $I.height, "#00sasd"), $I.$MM = new Laya.Image(), $I.$MM.centerY = 0, $I.$MM.x = 7, $I.addChild($I.$MM), $I.$bI = new Laya.Label(), $I.$bI.fontSize = 24, $I.$bI.color = $I.$F, $I.$bI.x = 56, $I.$bI.centerY = 0, $I.addChild($I.$bI), $I.$EM = new Laya.Label(), $I.$EM.fontSize = 24, $I.$EM.color = $I.$F, $I.$EM.x = 246, $I.$EM.centerY = 0, $I.addChild($I.$EM), $I.$ZM = new Laya.Image(), $I.$ZM.top = 0, $I.$ZM.right = 0, $I.addChild($I.$ZM), $I.$iM = new Laya.Label(), $I.$iM.fontSize = 20, $I.$iM.color = "#ffffff", $I.$iM.x = 225, $I.$iM.y = 46, $I.addChild($I.$iM), $I;
    }return __extends($I, $M), $I.prototype.initialize = function () {
      $M.prototype.initialize.call(this), this.$O = Browser.window.PF_INFO;var $I = this.$O.loadingType;this.$F = 1 == $I ? "#34267d" : 2 == $I ? "#34267d" : 3 == $I ? "#763042" : "#34267d", this.addEvt();
    }, Object.defineProperty($I.prototype, "dataSource", { set: function ($I) {
        $I && this.setData($I);
      }, enumerable: !0, configurable: !0 }), $I.prototype.setData = function ($I) {
      this.$YI = $I;var $M = this.$YI.status,
          $E = this.$YI.server_name;this.$MM.skin = this.getStatusSrc(this.$YI), this.$bI.color = -1 === $M ? "#d50000" : 0 === $M ? "#49575a" : this.$F, this.$bI.text = $E, this.$EM.text = -1 === $M ? "\u7ef4\u62a4\u4e2d" : 0 === $M ? "\u672a\u5f00\u670d" : "\u5df2\u5f00\u670d";var $Z = 1 == this.$YI.is_recommend || 3 == this.$YI.is_recommend;(this.$ZM.visible = $Z) && (this.$ZM.skin = "bbblogin/b199b.png"), this.$iM.text = -1 == this.$YI.status && this.$YI.maintain_time ? this.$YI.maintain_time : "";
    }, $I.prototype.destroy = function ($I) {
      void 0 === $I && ($I = !0), this.rmEvts(), $M.prototype.destroy.call(this, $I);
    }, $I.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, $I.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, $I.prototype.clkHdler = function () {
      this.$YI && this.$YI.callBack && this.$YI.callBack(this.$YI);
    }, $I.prototype.getStatusSrc = function ($I) {
      var $M = $I.status,
          $E = $I.is_recommend,
          $Z = "bbblogin/b19b.png";return 1 !== $M && 2 !== $M || 1 !== $E && 3 !== $E ? 1 !== $M && 2 !== $M || 2 !== $E ? -1 !== $M && 0 !== $M || ($Z = "bbblogin/b20b.png") : $Z = "bbblogin/b19b.png" : $Z = "bbblogin/b18b.png", $Z;
    }, $I;
  }(Laya.View), $M.SelectRightListItem = $E;
}(modules || (modules = {})), window.ServerLoading = ServerLoading;