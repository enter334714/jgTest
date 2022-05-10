"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var $n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function ($B, $_) {
    $B.__proto__ = $_;
  } || function ($B, $_) {
    for (var $Z in $_) $_.hasOwnProperty($Z) && ($B[$Z] = $_[$Z]);
  };return function ($B, $_) {
    function $Z() {
      this.constructor = $B;
    }$n($B, $_), $B.prototype = null === $_ ? Object.create($_) : ($Z.prototype = $_.prototype, new $Z());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function ($Z) {
  var $B = function ($B) {
    function $_() {
      return $B.call(this) || this;
    }return __extends($_, $B), $_.prototype.createChildren = function () {
      $B.prototype.createChildren.call(this), this.createView($Z.$B.uiView);
    }, $_.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/b2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "bbblogin/b6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "bbblogin/b3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "bbblogin/b4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "bbblogin/b5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] }, $_;
  }(View);$Z.$B = $B;
}(ui || (ui = {})), function ($Z) {
  var $B = function ($B) {
    function $_() {
      return $B.call(this) || this;
    }return __extends($_, $B), $_.prototype.createChildren = function () {
      $B.prototype.createChildren.call(this), this.createView($Z.$Z.uiView);
    }, $_.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/b1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "bbbloding/a13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "bbbloding/a14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "bbbloding/a16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "bbbloding/a17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "bbbloding/a20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "bbbloding/a19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "bbbloding/a18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "bbbloding/a18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "bbbloding/a1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }] }, $_;
  }(View);$Z.$Z = $B;
}(ui || (ui = {})), function ($Z) {
  var $B = function ($B) {
    function $_() {
      return $B.call(this) || this;
    }return __extends($_, $B), $_.prototype.createChildren = function () {
      View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), View.regComponent("Text", laya.display.Text), $B.prototype.createChildren.call(this), this.createView($Z.$n.uiView);
    }, $_.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "bbblogin/b2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "bbblogin/b6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "bbblogin/b3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "bbblogin/b4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "bbblogin/b5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "bbblogin/b21b.png", centerX: 0 } }, { type: "Image", props: { y: 1102, var: "imgCheatTip", skin: "bbblogin/b27b.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 927, x: 159, var: "hotImage", skin: "bbblogin/b18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "bbblogin/b1b.png", centerX: 0, bottom: 30 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "bbblogin/b12b.png", name: "enterBtn", centerX: 0 } }, { type: "Image", props: { x: 196, visible: !1, var: "privacyToggle", skin: "bbblogin/b29b.png", bottom: 4 } }, { type: "Label", props: { y: 640, x: 0, width: 720, var: "txtTip", valign: "middle", text: "\u63d0\u793a\u5185\u5bb9", strokeColor: "#ffffff", stroke: 2, height: 32, fontSize: 32, color: "#ff0000", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }, { type: "HTMLDivElement", props: { y: 1255, x: 256, visible: !1, var: "privacyTip", height: 16 } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "bbblogin/b11b.png" } }, { type: "Image", props: { y: 257, x: 594, visible: !1, var: "privacyBtn", skin: "bbblogin/b13b.png", name: "privacyBtn" } }, { type: "Image", props: { visible: !1, var: "ageTipBtn", top: 1, scaleY: .5, scaleX: .5, name: "privacyBtn", left: 1 } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "bbblogin/b8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "bbblogin/b10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "mNoticeBg", skin: "bbblogin/b8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "bbblogin/b10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "privacyBg", skin: "bbblogin/b8b.png", name: "privacyBg", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "privacyClose", skin: "bbblogin/b10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "privacyClose2", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTabPrivacy", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "privacyTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "privacyPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "privacyContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "bbblogin/b9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "bbblogin/b17b.png" } }] }, { type: "Box", props: { width: 720, visible: !1, var: "jumpBg", mouseThrough: !1, height: 1280, centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { x: 33, width: 655, skin: "bbblogin/b8b.png", height: 994, centerY: 0, centerX: 0 } }, { type: "Button", props: { width: 274, var: "btnJump", stateNum: 1, skin: "bbblogin/b25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u8df3\u8f6c", height: 59, centerY: 436, centerX: 0 } }, { type: "Label", props: { width: 234, var: "jumpTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", fontSize: 30, color: "#ffffff", centerY: -408, centerX: 0, bold: !1, align: "center" } }, { type: "Panel", props: { x: 94, width: 545, var: "jumpPanel", height: 733, centerY: 10 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "jumpContent", height: 733 } }] }, { type: "Image", props: { x: 596, visible: !1, var: "closeBtn", skin: "bbblogin/b17b.png", name: "closeBtn", centerY: -402 } }] }] }, $_;
  }(View);$Z.$n = $B;
}(ui || (ui = {})), function ($B) {
  var $_, $Z;$_ = $B.$g || ($B.$g = {}), $Z = function ($_) {
    function $B() {
      return $_.call(this) || this;
    }return __extends($B, $_), $B.prototype.initialize = function () {
      $_.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
    }, $B.prototype.addEvt = function () {
      this.on(Laya.Event.CLICK, this, this.$q);
    }, $B.prototype.rmEvts = function () {
      this.off(Laya.Event.CLICK, this, this.$q);
    }, $B.prototype.onOpened = function () {
      this.$P = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
    }, $B.prototype.destroy = function ($B) {
      void 0 === $B && ($B = !0), this.rmEvts(), $_.prototype.destroy.call(this, $B);
    }, $B.prototype.$q = function () {
      1e4 < Date.now() - this.$P && (this.$P -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
    }, $B;
  }(ui.$B), $_.AuthorizationPanel = $Z;
}(modules || (modules = {})), function ($B) {
  var $_, $Z, $n, $g, $P, $q;$_ = $B.$k || ($B.$k = {}), $Z = Laya.Event, $n = Laya.Image, $g = Laya.Component, $P = Laya.Loader, $q = function ($_) {
    function $m() {
      var $B = $_.call(this) || this;return $B.$m = new $n(), $B.addChild($B.$m), $B.$D = null, $B.$T = [], $B.$e = !1, $B.$I = 0, $B.$A = !0, $B.$$ = 6, $B.$w = !1, $B.on($Z.DISPLAY, $B, $B.$r), $B.on($Z.UNDISPLAY, $B, $B.$j), $B;
    }return __extends($m, $_), $m.create = function ($B, $_, $Z, $n, $g, $q, $P) {
      void 0 === $n && ($n = 0), void 0 === $g && ($g = 6), void 0 === $q && ($q = !0), void 0 === $P && ($P = !1);var $k = new $m();return $k.skin($_, $Z, $n), $k.durFrm = $g, $k.loop = $q, $k.atHide = $P, $B && $B.addChild($k), $k;
    }, $m.play = function ($B) {
      $B && ($B.visible = !0, $B.play());
    }, $m.stop = function ($B) {
      $B && ($B.visible = !1, $B.stop());
    }, $m.prototype.destroy = function ($B) {
      Laya.timer.clear(this, this.$y), this.off($Z.DISPLAY, this, this.$r), this.off($Z.UNDISPLAY, this, this.$j), $_.prototype.destroy.call(this, $B);
    }, $m.prototype.$r = function () {}, $m.prototype.$j = function () {}, $m.prototype.skin = function ($B, $_, $Z) {
      if (this.$D != $B) {
        this.$D = $B, this.$T = [];for (var $n = 0, $g = $Z; $g <= $_; $g++) this.$T[$n++] = $B + "/" + $g + ".png";var $q = $P.getRes(this.$T[0]);$q && (this.width = $q.sourceWidth, this.height = $q.sourceHeight), this.$y();
      }
    }, Object.defineProperty($m.prototype, "atHide", { get: function () {
        return this.$w;
      }, set: function ($B) {
        this.$w = $B;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty($m.prototype, "durFrm", { set: function ($B) {
        this.$$ != $B && (this.$$ = $B, this.$e && (Laya.timer.clear(this, this.$y), Laya.timer.loop(this.$$ * (1e3 / 60), this, this.$y)));
      }, enumerable: !0, configurable: !0 }), Object.defineProperty($m.prototype, "loop", { set: function ($B) {
        this.$A = $B;
      }, enumerable: !0, configurable: !0 }), $m.prototype.play = function () {
      this.$e && this.stop(), this.$e = !0, this.$I = 0, Laya.timer.loop(this.$$ * (1e3 / 60), this, this.$y), this.$y();
    }, $m.prototype.stop = function () {
      this.$e = !1, this.$I = 0, this.$y(), Laya.timer.clear(this, this.$y);
    }, $m.prototype.pause = function () {
      this.$e && (this.$e = !1, Laya.timer.clear(this, this.$y));
    }, $m.prototype.resume = function () {
      this.$e || (this.$e = !0, Laya.timer.loop(this.$$ * (1e3 / 60), this, this.$y), this.$y());
    }, Object.defineProperty($m.prototype, "isPlay", { get: function () {
        return this.$e;
      }, enumerable: !0, configurable: !0 }), $m.prototype.$y = function () {
      this.$T && 0 != this.$T.length && (this.$m.skin = this.$T[this.$I], this.$e && (this.$I++, this.$I == this.$T.length && (this.$A ? this.$I = 0 : (Laya.timer.clear(this, this.$y), this.$e = !1, this.$w && (this.visible = !1), this.event($Z.COMPLETE)))));
    }, $m;
  }($g), $_.PanelEff = $q;
}(modules || (modules = {})), function ($B) {
  var $_, $Z, $n;$_ = $B.$g || ($B.$g = {}), $Z = $B.$k.PanelEff, $n = function ($n) {
    function $B($B, $_) {
      void 0 === $B && ($B = 0);var $Z = $n.call(this) || this;return $Z.$C = { bgImgSkin: "bbbloding/a3a.jpg", topImgSkin: "bbbloding/a10a.jpg", btmImgSkin: "bbbloding/a4a.jpg", leftImgSkin: "bbbloding/a6a.jpg", rightImgSkin: "bbbloding/a8a.jpg", loadingBarBgSkin: "bbbloding/a13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, $Z.$z = { bgImgSkin: "bbbloding/a12a.jpg", topImgSkin: "bbbloding/a11a.jpg", btmImgSkin: "bbbloding/a5a.jpg", leftImgSkin: "bbbloding/a7a.jpg", rightImgSkin: "bbbloding/a9a.jpg", loadingBarBgSkin: "bbbloding/a15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, $Z.$t = 0, $Z.$J(1 == $B ? $Z.$z : $Z.$C), $Z.copyRightImg.skin = $_, $Z;
    }return __extends($B, $n), $B.prototype.initialize = function () {
      if ($n.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.$N = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.$N) {
        var $B = this.$N.loadingType;this.loadingTips.color = 1 == $B ? "#f2ffb5" : 2 == $B ? "#000000" : 101 == $B ? "#000000" : "#f2ffb5";
      }this.$Q = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
    }, $B.prototype.toAllProgress = function ($B) {
      var $_ = this;if (-1 === $B) return $_.$t = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);if (-2 !== $B) {
        $_.$t < .9 ? $_.$t += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : $_.$t < 1 && ($_.$t += 1e-4), .9999 < $_.$t && ($_.$t = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
          .9 < $_.$t && toAllProgress(-1);
        }));var $Z = $_.$t,
            $n = 590 * $Z;$_.$t = $_.$t > $Z ? $_.$t : $Z, $_.loadingBar.width = $n;var $g = $_.loadingBar.x + $n;$_.loadingImg2.x = $g - 15, 364 <= $g ? ($_.loadingImg1.visible = !0, $_.loadingImg1.x = $g - 202) : $_.loadingImg1.visible = !1, $_.percentageTips.text = (100 * $Z >> 0) + "%", $_.$t < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress);
      } else Laya.timer.clear(this, this.toAllProgress);
    }, $B.prototype.toProgress = function ($B, $_, $Z) {
      var $n = this;1 < $B && ($B = 1);var $g = 590 * $B;$n.$t = $n.$t > $B ? $n.$t : $B, $n.loadingBar.width = $g;var $q = $n.loadingBar.x + $g;$n.loadingImg2.x = $q - 15, 364 <= $q ? ($n.loadingImg1.visible = !0, $n.loadingImg1.x = $q - 202) : $n.loadingImg1.visible = !1, $n.percentageTips.text = (100 * $B >> 0) + "%", $n.loadingTips.text = $_;for (var $P = $Z - 1, $k = 0; $k < this.$Q.length; $k++) $n.$Q[$k].skin = $k < $P ? "bbbloding/a20a.png" : $P === $k ? "bbbloding/a19a.png" : "bbbloding/a18a.png";
    }, $B.prototype.onOpened = function () {
      this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$N.lastVersion + "      \u7248\u672c\uff1a" + this.$N.wxVersion, this.showGetBtn();
    }, $B.prototype.close = function ($B) {
      this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.$M), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.$Y);
    }, $B.prototype.resetWinFun = function () {
      Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
    }, $B.prototype.destroy = function ($B) {
      void 0 === $B && ($B = !0), this.resetWinFun(), $n.prototype.destroy.call(this, $B);
    }, $B.prototype.showGetBtn = function () {
      this.$N.showGetBtn && 1 == this.$N.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "bbbloding/a1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.$Y), this.$l(), this.$L(!0));
    }, $B.prototype.$Y = function () {
      this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "bbbloding/a2a.png", this.$v(), this.$L(!1));
    }, $B.prototype.$J = function ($B) {
      this.bgImg.skin = $B.bgImgSkin, this.topImg.skin = $B.topImgSkin, this.btmImg.skin = $B.btmImgSkin, this.leftImg.skin = $B.leftImgSkin, this.rightImg.skin = $B.rightImgSkin, this.copyRightImg.bottom = $B.copyRightImgBottom, this.processBox1.y = $B.processBox1Y, this.processBox2.y = $B.processBox2Y, this.loadingBarBg.skin = $B.loadingBarBgSkin, this.loadingTips.fontSize = $B.loadingTipsSize, this.getTipsBtn.visible = this.$N.showGetBtn && 1 == this.$N.showGetBtn, this.getTipsBtn.visible ? this.$l() : this.$v(), this.$L(this.getTipsBtn.visible);
    }, $B.prototype.$l = function () {
      this.$V || (this.$V = $Z.create(this.getTipsBtn, "bwxeff", 4, 0, 12), this.$V.pos(161, 106), this.$V.scale(1.14, 1.15)), $Z.play(this.$V);
    }, $B.prototype.$v = function () {
      this.$V && $Z.stop(this.$V);
    }, $B.prototype.$L = function ($B) {
      Laya.timer.clear(this, this.$M), $B ? (this.$o = 9, this.txtGetTm.visible = !0, this.$M(), Laya.timer.loop(1e3, this, this.$M)) : this.txtGetTm.visible = !1;
    }, $B.prototype.$M = function () {
      0 < this.$o ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.$o + "s)", this.$o--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.$M), this.$Y());
    }, $B;
  }(ui.$Z), $_.LoadingPanel = $n;
}(modules || (modules = {})), function ($B) {
  var $_, $n, $g, $Z;$_ = $B.$g || ($B.$g = {}), $n = Laya.List, $g = Laya.Event, $Z = function ($Z) {
    function $B($B) {
      void 0 === $B && ($B = "bbblogin/b1b.png");var $_ = $Z.call(this) || this;return $_.$F = 0, $_.$u = "multi_notice_key", $_.$f = 0, $_.$b = 0, $_.$x = "privacy_key", $_.$p = !0, $_.$K = 0, $_.copyRightImg.skin = $B, $_;
    }return __extends($B, $Z), $B.prototype.initialize = function () {
      $Z.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.copyRightImg.skin = "", ServerLoading.instance.preloadServer(), this.$N = Browser.window.PF_INFO, this.$H = new $n(), this.$H.vScrollBarSkin = "", this.$H.itemRender = $_.SelectLeftListItem, this.$H.top = 5, this.$H.repeatX = 1, this.$H.spaceY = 5, this.$H.width = this.leftListBox.width, this.$H.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.$H), this.$G = new $n(), this.$G.vScrollBarSkin = "", this.$G.itemRender = $_.SelectRightListItem, this.$G.top = 5, this.$G.repeatX = 1, this.$G.spaceY = 5, this.$G.width = this.rightListBox.width, this.$G.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.$G), this.$W = new $n(), this.$W.hScrollBarSkin = "", this.$W.itemRender = $_.NoticeItem, this.$W.repeatY = 1, this.$W.width = this.boxTab.width, this.$W.height = this.boxTab.height, this.boxTab.addChild(this.$W), this.$X = new $n(), this.$X.hScrollBarSkin = "", this.$X.itemRender = $_.PrivacyItem, this.$X.repeatY = 1, this.$X.width = this.boxTab.width, this.$X.height = this.boxTab.height, this.boxTabPrivacy.addChild(this.$X);var $B = this.$N.loadingType;this.$R = 1 == $B ? "#feffc0" : 2 == $B ? "#feffc0" : 3 == $B ? "#feffc0" : 101 == $B ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.$h = [], this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.privacyContent.color = "#212942", this.privacyContent.style.fontSize = 26, this.privacyContent.style.lineHeight = 28, this.privacyContent.mouseEnabled = !1, this.privacyTip.color = "#ffffff", this.privacyTip.style.fontSize = 18, this.privacyTip.style.lineHeight = 18, this.privacyTip.style.stroke = 2, this.privacyTip.style.strokeColor = "#000000", this.privacyTip.style.wordWrap = !1, this.jumpContent.color = "#212942", this.jumpContent.style.fontSize = 26, this.jumpContent.style.lineHeight = 28, this.jumpContent.mouseEnabled = !1, Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
    }, $B.prototype.destroy = function ($B) {
      void 0 === $B && ($B = !0), this.rmEvts(), this.$s(), this.$U(), this.$S(), this.$O(), this.ageTipsContent = null, this.$H && (this.$H.removeSelf(), this.$H.destroy(), this.$H = null), this.$G && (this.$G.removeSelf(), this.$G.destroy(), this.$G = null), this.$W && (this.$W.removeSelf(), this.$W.destroy(), this.$W = null), this.$X && (this.$X.removeSelf(), this.$X.destroy(), this.$X = null), Laya.timer.clear(this, this.$d), $Z.prototype.destroy.call(this, $B);
    }, $B.prototype.addEvt = function () {
      this.bgImg.on(Laya.Event.CLICK, this, this.$a), this.enterBtn.on(Laya.Event.CLICK, this, this.$i), this.selectServer.on(Laya.Event.CLICK, this, this.$c), this.selectServer.on(Laya.Event.CLICK, this, this.$c), this.closeBg.on(Laya.Event.CLICK, this, this.$E), this.closeBtn.on(Laya.Event.CLICK, this, this.$BB), this.noticeBtn.on(Laya.Event.CLICK, this, this.$_B), this.noticeClose.on(Laya.Event.CLICK, this, this.$ZB), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.$nB), this.mNoticeClose.on(Laya.Event.CLICK, this, this.$gB), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.$gB), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.$qB), this.privacyBtn.on(Laya.Event.CLICK, this, this.$PB), this.ageTipBtn.on(Laya.Event.CLICK, this, this.$kB), this.privacyClose.on(Laya.Event.CLICK, this, this.$mB), this.privacyClose2.on(Laya.Event.CLICK, this, this.$mB), this.privacyPanel.on(Laya.Event.MOUSE_DOWN, this, this.$DB), this.privacyToggle.on(Laya.Event.CLICK, this, this.$TB), this.privacyTip.on(Laya.Event.LINK, this, this.$eB), this.btnJump.on(Laya.Event.CLICK, this, this.$IB), this.jumpPanel.on(Laya.Event.MOUSE_DOWN, this, this.$AB), this.$W.selectEnable = !0, this.$W.selectHandler = Laya.Handler.create(this, this.$$B, null, !1), this.$X.selectEnable = !0, this.$X.selectHandler = Laya.Handler.create(this, this.$wB, null, !1);
    }, $B.prototype.rmEvts = function () {
      this.bgImg.off(Laya.Event.CLICK, this, this.$a), this.enterBtn.off(Laya.Event.CLICK, this, this.$i), this.selectServer.off(Laya.Event.CLICK, this, this.$c), this.selectServer.off(Laya.Event.CLICK, this, this.$c), this.closeBg.off(Laya.Event.CLICK, this, this.$E), this.noticeBtn.off(Laya.Event.CLICK, this, this.$_B), this.closeBtn.off(Laya.Event.CLICK, this, this.$BB), this.noticeClose.off(Laya.Event.CLICK, this, this.$ZB), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.$nB), this.mNoticeClose.off(Laya.Event.CLICK, this, this.$gB), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.$gB), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.$qB), this.privacyBtn.off(Laya.Event.CLICK, this, this.$PB), this.ageTipBtn.off(Laya.Event.CLICK, this, this.$kB), this.privacyClose.off(Laya.Event.CLICK, this, this.$mB), this.privacyClose2.off(Laya.Event.CLICK, this, this.$mB), this.privacyPanel.off(Laya.Event.MOUSE_DOWN, this, this.$DB), this.privacyToggle.off(Laya.Event.CLICK, this, this.$TB), this.privacyTip.off(Laya.Event.LINK, this, this.$eB), this.btnJump.off(Laya.Event.CLICK, this, this.$IB), this.jumpPanel.off(Laya.Event.MOUSE_DOWN, this, this.$AB), this.$W.selectEnable = !1, this.$W.selectHandler = null, this.$X.selectEnable = !1, this.$X.selectHandler = null;
    }, $B.prototype.onOpened = function () {
      var $n = this;this.$P = Date.now(), this.$p = !0, this.$rB = this.$N.selectedServer.server_id, this.$jB(this.$N.selectedServer), this.$H.dataSource = this.$N.groupList, this.$c(), req_multi_server_notice(4, this.$N.pkgName, this.$N.selectedServer.server_id, this.$yB.bind(this)), Laya.timer.frameOnce(1, this, function () {
        $n.$CB = $n.$N.privacy_data && $n.$N.privacy_data.list ? $n.$N.privacy_data.list : [], $n.$zB = null != $n.$N.privacy_login_pkg ? $n.$N.privacy_login_pkg : 0;var $B = "1" == localStorage.getItem($n.$x),
            $_ = 0 != PF_INFO.privacy_save_pkg,
            $Z = 0 == $n.$zB || 1 == $n.$zB;$n.$tB = $_ && $B || $Z, $n.$JB();
      }), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$N.lastVersion + "      \u7248\u672c\uff1a" + this.$N.wxVersion, this.serverName.color = this.selServer.color = this.$R, this.imgCheatTip.visible = 1 == this.$N.anti_cheat_pkg, this.txtTip.visible = !1;
    }, $B.prototype.preload = function () {}, $B.prototype.$a = function () {
      this.$tB ? 1e4 < Date.now() - this.$P && (this.$P -= 2e3, ServerLoading.instance.enterDefaultServer()) : this.$NB("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
    }, $B.prototype.$i = function () {
      this.$tB ? this.$QB(this.$N.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.$N.selectedServer, req_server_check_ban(0, this.$N.selectedServer.server_id)) : this.$NB("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
    }, $B.prototype.$c = function () {
      this.$N.hasGroupReq ? this.listBg.visible = !0 : (this.$N.hasGroupReq = !0, req_server_group(0));
    }, $B.prototype.$E = function () {
      this.listBg.visible = !1;
    }, $B.prototype.$BB = function () {
      this.jumpBg.visible = !1;
    }, $B.prototype.$_B = function () {
      this.$MB();
    }, $B.prototype.$gB = function () {
      this.mNoticeBg.visible = !1;
    }, $B.prototype.$ZB = function () {
      this.noticeBg.visible = !1;
    }, $B.prototype.$PB = function () {
      this.$YB();
    }, $B.prototype.$mB = function () {
      this.privacyBg.visible = !1;
    }, $B.prototype.$TB = function () {
      this.$tB = !this.$tB, this.$tB && localStorage.setItem(this.$x, "1"), this.privacyToggle.skin = "bbblogin/" + (this.$tB ? "b29b.png" : "b28b.png");
    }, $B.prototype.$eB = function ($B) {
      this.$YB(Number($B));
    }, $B.prototype.$IB = function () {
      Browser.window.forceJumpMiniGame ? Browser.window.forceJumpMiniGame() : this.$BB();
    }, $B.prototype.$nB = function () {
      this.$F = this.noticeContent.mouseY, Laya.stage.on($g.MOUSE_MOVE, this, this.$lB), Laya.stage.on($g.MOUSE_UP, this, this.$s), Laya.stage.on($g.MOUSE_OUT, this, this.$s);
    }, $B.prototype.$lB = function () {
      if (this.noticeContent) {
        var $B = this.$F - this.noticeContent.mouseY;this.noticeContent.scrollY += $B, this.$F = this.noticeContent.mouseY;
      }
    }, $B.prototype.$s = function () {
      Laya.stage.off($g.MOUSE_MOVE, this, this.$lB), Laya.stage.off($g.MOUSE_UP, this, this.$s), Laya.stage.off($g.MOUSE_OUT, this, this.$s);
    }, $B.prototype.$qB = function () {
      this.$f = this.mNoticePanel.mouseY, Laya.stage.on($g.MOUSE_MOVE, this, this.$LB), Laya.stage.on($g.MOUSE_UP, this, this.$U), Laya.stage.on($g.MOUSE_OUT, this, this.$U);
    }, $B.prototype.$LB = function () {
      if (this.mNoticeContent) {
        var $B = this.$f - this.mNoticePanel.mouseY;this.mNoticeContent.y -= $B, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.$f = this.mNoticePanel.mouseY;
      }
    }, $B.prototype.$U = function () {
      Laya.stage.off($g.MOUSE_MOVE, this, this.$LB), Laya.stage.off($g.MOUSE_UP, this, this.$U), Laya.stage.off($g.MOUSE_OUT, this, this.$U);
    }, $B.prototype.$DB = function () {
      this.$b = this.privacyPanel.mouseY, Laya.stage.on($g.MOUSE_MOVE, this, this.$vB), Laya.stage.on($g.MOUSE_UP, this, this.$S), Laya.stage.on($g.MOUSE_OUT, this, this.$S);
    }, $B.prototype.$vB = function () {
      if (this.privacyContent) {
        var $B = this.$b - this.privacyPanel.mouseY;this.privacyContent.y -= $B, this.privacyPanel.height < this.privacyContent.contextHeight ? this.privacyContent.y < this.privacyPanel.height - this.privacyContent.contextHeight ? this.privacyContent.y = this.privacyPanel.height - this.privacyContent.contextHeight : 0 < this.privacyContent.y && (this.privacyContent.y = 0) : this.privacyContent.y = 0, this.$b = this.privacyPanel.mouseY;
      }
    }, $B.prototype.$S = function () {
      Laya.stage.off($g.MOUSE_MOVE, this, this.$vB), Laya.stage.off($g.MOUSE_UP, this, this.$S), Laya.stage.off($g.MOUSE_OUT, this, this.$S);
    }, $B.prototype.$AB = function () {
      this.$K = this.jumpPanel.mouseY, Laya.stage.on($g.MOUSE_MOVE, this, this.$VB), Laya.stage.on($g.MOUSE_UP, this, this.$O), Laya.stage.on($g.MOUSE_OUT, this, this.$O);
    }, $B.prototype.$VB = function () {
      if (this.jumpContent) {
        var $B = this.$K - this.jumpPanel.mouseY;this.jumpContent.y -= $B, this.jumpPanel.height < this.jumpContent.contextHeight ? this.jumpContent.y < this.jumpPanel.height - this.jumpContent.contextHeight ? this.jumpContent.y = this.jumpPanel.height - this.jumpContent.contextHeight : 0 < this.jumpContent.y && (this.jumpContent.y = 0) : this.jumpContent.y = 0, this.$K = this.jumpPanel.mouseY;
      }
    }, $B.prototype.$O = function () {
      Laya.stage.off($g.MOUSE_MOVE, this, this.$VB), Laya.stage.off($g.MOUSE_UP, this, this.$O), Laya.stage.off($g.MOUSE_OUT, this, this.$O);
    }, $B.prototype.$$B = function () {
      if (this.$W.dataSource) {
        for (var $B, $_ = 0; $_ < this.$W.dataSource.length; $_++) {
          var $Z = this.$W.dataSource[$_];$Z[1] = $_ == this.$W.selectedIndex, $_ == this.$W.selectedIndex && ($B = $Z[0]);
        }this.mNoticeTitle.text = $B && $B.title ? $B.title : "", this.mNoticeContent.innerHTML = $B && $B.content ? $B.content : "", this.mNoticeContent.y = 0;
      }
    }, $B.prototype.$wB = function () {
      var $B = this.$X.dataSource;if ($B) {
        for (var $_ = 0; $_ < $B.length; $_++) {
          $B[$_][1] = $_ == this.$X.selectedIndex;
        }var $Z = this.$CB[this.$X.selectedIndex];$Z && $Z.content && ($Z.content = $Z.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "")), this.privacyTitle.text = $Z && $Z.title ? $Z.title : "\u6807\u9898", this.privacyContent.innerHTML = $Z && $Z.content ? $Z.content : "\u52a0\u8f7d\u4e2d...", this.privacyContent.y = 0;
      }
    }, $B.prototype.$jB = function ($B) {
      var $_ = $B.server_name;this.serverName.text = $_ + this.$oB($B), this.serverName.color = -1 === $B.status ? "#d50000" : 0 === $B.status ? "#49575a" : this.$R, this.hotImage.skin = this.$FB($B), this.$N.cdn = $B.cdn || "", this.$N.selectedServer = $B, this.noticeBtn.visible = !0;
    }, $B.prototype.$uB = function ($B) {
      this.showGroupList($B);
    }, $B.prototype.$fB = function ($B) {
      this.$jB($B), this.listBg.visible = !1;
    }, $B.prototype.showGroupList = function ($B) {
      if (void 0 === $B && ($B = 0), this.parent) {
        var $_ = this.$N.groupList;if ($_ && 0 !== $_.length) {
          for (var $Z = $_.length, $n = 0; $n < $Z; $n++) $_[$n].callBack = this.$uB.bind(this), $_[$n].select = $n == $B, $_[$n].index = $n;var $g = (this.$H.array = $_)[$B].id;this.$N.serverList[$g] ? this.showServerList($g) : this.$N.hasServerReq || (this.$N.hasServerReq = !0, -1 == $g ? req_server_owner(0) : -2 == $g ? req_recommend_server_list(0) : req_server_list(0, $g));
        }
      }
    }, $B.prototype.showServerList = function ($B) {
      if (this.parent && this.$N.serverList[$B]) {
        for (var $_ = this.$N.serverList[$B], $Z = $_.length, $n = 0; $n < $Z; $n++) $_[$n].callBack = this.$fB.bind(this);this.$G.array = $_;
      }
    }, $B.prototype.$QB = function ($B) {
      return -1 == $B.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != $B.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
    }, $B.prototype.$FB = function ($B) {
      var $_ = $B.status,
          $Z = $B.is_recommend,
          $n = "bbblogin/b19b.png";return 1 !== $_ && 2 !== $_ || 1 !== $Z && 3 !== $Z ? 1 !== $_ && 2 !== $_ || 2 !== $Z ? -1 !== $_ && 0 !== $_ || ($n = "bbblogin/b20b.png") : $n = "bbblogin/b19b.png" : $n = "bbblogin/b18b.png", $n;
    }, $B.prototype.$oB = function ($B) {
      var $_ = $B.status,
          $Z = "";return 1 == $B.is_recommend || 3 == $B.is_recommend ? $Z = "(\u63a8\u8350)" : -1 === $_ ? $Z = "(\u7ef4\u62a4\u4e2d)" : 0 === $_ && ($Z = "(\u5f85\u5f00\u670d)"), $Z;
    }, $B.prototype.$yB = function ($B) {
      console.log("onMultiNoticeCallback, param = ", $B);var $_ = Date.now() / 1e3,
          $Z = localStorage.getItem(this.$u),
          $n = !(this.$h = []);if ("success" == $B.state) for (var $g in $B.data) {
        var $q = $B.data[$g];if ($q) {
          var $P = $_ < $q.end_time,
              $k = 1 == $q.pop_type,
              $m = 2 == $q.pop_type && $q.key + "" != $Z;!$n && $P && ($k || $m) && ($n = !0), $P && this.$h.push($q), $m && localStorage.setItem(this.$u, $q.key + "");
        }
      }this.$h.sort(function ($B, $_) {
        return $B.login_id - $_.login_id;
      }), console.log("onMultiNoticeCallback, datas = ", this.$h), $n && this.$MB();
    }, $B.prototype.$MB = function () {
      if (this.$W) {
        if (this.$h) {
          this.$W.x = 2 < this.$h.length ? 0 : (this.boxTab.width - 274 * this.$h.length) / 2;for (var $B = [], $_ = 0; $_ < this.$h.length; $_++) {
            var $Z = this.$h[$_];$B.push([$Z, $_ == this.$W.selectedIndex]);
          }0 < (this.$W.dataSource = $B).length ? (this.$W.selectedIndex = 0, this.$W.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.$h.length <= 1, this.boxTab.visible = 1 < this.$h.length;
        }this.mNoticeBg.visible = !0;
      }
    }, $B.prototype.$bB = function ($B) {
      if (!this.destroyed) {
        if (console.log("p_onPrivacyCallback, param = ", $B), "success" == $B.state) for (var $_ in $B.data) {
          var $Z = Number($_),
              $n = $B.data[$Z];this.$CB && this.$CB[$Z] && (this.$CB[$Z].content = $n.content);
        }this.$wB();
      }
    }, $B.prototype.$JB = function () {
      for (var $B = "", $_ = 0; $_ < this.$CB.length; $_++) {
        $B += '<a href="' + $_ + '" style="color:#14ff28;text-decoration:none">' + this.$CB[$_].title + "</a>", $_ < this.$CB.length - 1 && ($B += "\u3001");
      }this.privacyTip.innerHTML = "\u6211\u5df2\u7ecf\u8be6\u7ec6\u9605\u8bfb\u5e76\u540c\u610f" + $B, this.privacyToggle.skin = "bbblogin/" + (this.$tB ? "b29b.png" : "b28b.png"), this.privacyTip.x = (720 - this.privacyTip.width) / 2, this.privacyToggle.x = this.privacyTip.x - 30, this.privacyBtn.visible = 0 < this.$CB.length, this.privacyToggle.visible = this.privacyTip.visible = 0 < this.$CB.length && 0 != this.$zB;
    }, $B.prototype.$YB = function ($B) {
      if (void 0 === $B && ($B = 0), this.$X) {
        if (this.$CB) {
          this.$X.x = 2 < this.$CB.length ? 0 : (this.boxTab.width - 274 * this.$CB.length) / 2;for (var $_ = [], $Z = 0; $Z < this.$CB.length; $Z++) {
            var $n = this.$CB[$Z],
                $g = $n && $n.title ? $n.title : "",
                $q = $Z == this.$X.selectedIndex;$_.push([$g, $q]);
          }0 < (this.$X.dataSource = $_).length ? ($B < 0 && ($B = 0), $B > $_.length - 1 && ($B = 0), this.$X.selectedIndex = $B, this.$X.scrollTo($B)) : (this.privacyTitle.text = "\u7a7a", this.privacyContent.text = ""), this.privacyClose2.visible = this.$CB.length <= 1, this.boxTabPrivacy.visible = 1 < this.$CB.length;
        }this.$p && (this.$p = !1, req_privacy(this.$N.pkgName, this.$bB.bind(this))), this.privacyBg.visible = !0;
      }
    }, $B.prototype.openJumpView = function ($B, $_, $Z, $n) {
      void 0 === $n && ($n = !1), this.jumpTitle.text = $B || "\u6682\u65e0\u516c\u544a", this.jumpContent.innerHTML = $_ || "", this.btnJump.label = $Z || "\u786e\u5b9a", this.jumpContent.y = 0, this.jumpBg.visible = !0, this.closeBtn.visible = $n;
    }, $B.prototype.showAgeTipsBtn = function ($B, $_, $Z, $n, $g) {
      (this.ageTipBtn.visible = $B) && (this.ageTipBtn.skin = $_ || "bbblogin/b11b.png"), this.ageTipsContent = $Z, this.ageTipBtn.x = $n || 0, this.ageTipBtn.y = $g || 0;
    }, $B.prototype.$kB = function () {
      this.openJumpView("\u9002\u9f84\u516c\u544a", this.ageTipsContent, "\u786e\u8ba4", !0);
    }, $B.prototype.$NB = function ($B) {
      this.txtTip.text = $B, this.txtTip.y = 640, this.txtTip.visible = !0, this.$xB = 1, Laya.timer.clear(this, this.$d), this.$d(), Laya.timer.frameLoop(1, this, this.$d);
    }, $B.prototype.$d = function () {
      this.txtTip.y -= this.$xB, this.$xB *= 1.1, this.txtTip.y <= 590 && (this.txtTip.visible = !1, Laya.timer.clear(this, this.$d));
    }, $B;
  }(ui.$n), $_.SelectServerPanel = $Z;
}(modules || (modules = {}));var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.$g.AuthorizationPanel,
    LoadingPanel = modules.$g.LoadingPanel,
    SelectServerPanel = modules.$g.SelectServerPanel,
    ServerLoading = function () {
  function $m($B) {
    this.m_loadingRes = ["bbbloding/a13a.png", "bbbloding/a15a.png", "bbbloding/a14a.png", "bbbloding/a16a.png", "bbbloding/a17a.png", "bbbloding/a18a.png", "bbbloding/a19a.png", "bbbloding/a20a.png", "bwxeff/b100b.png", "bwxeff/b101b.png", "bwxeff/b102b.png", "bwxeff/b103b.png", "bwxeff/b104b.png", "bbbloding/a3a.jpg", "bbbloding/a12a.jpg", "bbbloding/a1a.png", "bbbloding/a2a.png", "bbbloding/a4a.jpg", "bbbloding/a6a.jpg", "bbbloding/a8a.jpg", "bbbloding/a10a.jpg", "bbbloding/a5a.jpg", "bbbloding/a7a.jpg", "bbbloding/a9a.jpg", "bbbloding/a11a.jpg"], this.m_serverRes = ["bbblogin/b10b.png", "bbblogin/b11b.png", "bbblogin/b12b.png", "bbblogin/b13b.png", "bbblogin/b14b.png", "bbblogin/b15b.png", "bbblogin/b16b.png", "bbblogin/b17b.png", "bbblogin/b18b.png", "bbblogin/b19b.png", "bbblogin/b20b.png", "bbblogin/b21b.png", "bbblogin/b2b.jpg", "bbblogin/b3b.jpg", "bbblogin/b4b.jpg", "bbblogin/b5b.jpg", "bbblogin/b6b.jpg", "bbblogin/b1b.png", "bbblogin/b8b.png", "bbblogin/b9b.png", "bbblogin/b24b.png", "bbblogin/b25b.png", "bbblogin/b27b.png", "bbblogin/b29b.png", "bbblogin/b28b.png", "bbblogin/b123b.png", "bbblogin/b199b.png"], this.copyRightUrl = "bbblogin/b1b.png", this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.$pB = !1, this.$KB = "", $m.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var $_ = Laya.AtlasResourceManager;$_.maxTextureCount = 6, $_.atlasTextureWidth = $_.atlasTextureHeight = 1024, $_._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.$HB.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } }, "b28b.png": { frame: { h: 25, idx: 0, w: 25, x: 444, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 2 } }, "b29b.png": { frame: { h: 27, idx: 0, w: 26, x: 470, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = $m.instance.requestWeb, Browser.window.imgMgrLoad = $m.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.$HB();
  }return $m.prototype.changeServerLoading = function ($B) {
    $m.instance.m_layer.visible = $B;
  }, $m.prototype.openAuthor = function () {
    $m.instance.m_author || ($m.instance.m_author = new AuthorizationPanel()), $m.instance.m_author.parent || $m.instance.m_layer.addChild($m.instance.m_author), $m.instance.$GB();
  }, $m.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, $m.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, $m.prototype.$WB = function () {
    $m.instance.m_server || ($m.instance.m_server = new SelectServerPanel(this.copyRightUrl)), $m.instance.m_server.parent || $m.instance.m_layer.addChild($m.instance.m_server), $m.instance.$GB();
  }, $m.prototype.openJumpView = function ($B, $_, $Z, $n) {
    void 0 === $n && ($n = !1), this.$WB(), $m.instance.m_server.openJumpView($B, $_, $Z, $n);
  }, $m.prototype.openJumpTipsBtn = function ($B, $_, $Z, $n, $g) {
    this.$WB(), $m.instance.m_server.showAgeTipsBtn($B, $_, $Z, $n, $g);
  }, $m.prototype.getCertificatePng = function () {
    window.sdkInitRes = window.sdkInitRes || {};var $B = "bbblogin/b123b.png",
        $_ = "bbblogin/b1b.png";return 1 == sdkInitRes.develop ? 0 == (PF_INFO.develop_certificate_pkg || 0) ? $B : $_ : 0 == PF_INFO.release_certificate_pkg ? $B : $_;
  }, $m.prototype.openServer = function ($B, $_, $Z) {
    var $n = this;this.copyRightUrl = $Z || this.getCertificatePng();for (var $g = function () {
      $n.$WB(), $B && $_ && $B.call($_);
    }, $q = !0, $P = 0, $k = this.m_serverRes; $P < $k.length; $P++) {
      var $m = $k[$P];if (null == Laya.Loader.getRes($m)) {
        $q = !1;break;
      }
    }$q ? $g() : Laya.loader.load(this.m_serverRes, Handler.create(this, $g));
  }, $m.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, $m.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, $m.prototype.openLoading = function ($B, $_) {
    void 0 === $B && ($B = 0), $_ = $_ || this.getCertificatePng(), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      $m.instance.m_loading || ($m.instance.m_loading = new LoadingPanel($B, $_)), $m.instance.m_loading.parent || $m.instance.m_layer.addChild($m.instance.m_loading), $m.instance.$GB();
    }));
  }, $m.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var $B = 0, $_ = this.m_serverRes; $B < $_.length; $B++) {
      var $Z = $_[$B];Laya.Loader.clearCache($m.instance, $Z), Laya.Loader.clearRes($Z, !0);
    }for (var $n = 0, $g = this.m_loadingRes; $n < $g.length; $n++) {
      $Z = $g[$n];Laya.Loader.clearCache($m.instance, $Z), Laya.Loader.clearRes($Z, !0);
    }this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, $m.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && $m.instance.m_loading.showGetBtn();
  }, $m.prototype.enterDefaultServer = function () {
    var $B = Browser.window.PF_INFO.selectedServer;this.$pB || -1 == $B.status || 0 == $B.status || (this.$pB = !0, Browser.window.PF_INFO.selectedServer = $B, req_server_check_ban(0, $B.server_id));
  }, $m.prototype.sendRecord = function () {
    var $B = "";$B += "newRegister=" + Browser.window.PF_INFO.newRegister, $B += ", isPrelodServer=" + this.m_isPrelodServer, $B += ", SelectServerPanel=" + (null != $m.instance.m_server), $B += ", isPrelodLoading=" + this.m_isPrelodLoading, $B += ", LoadingPanel=" + (null != $m.instance.m_loading), $B += ", resMgrLoad=" + (Browser.window.resMgrLoad == $m.instance.requestWeb), $B += ", imgMgrLoad=" + (Browser.window.imgMgrLoad == $m.instance.requestWeb), $B += ", errUrls=" + $m.instance.$KB;for (var $_ = 0, $Z = this.m_serverRes; $_ < $Z.length; $_++) {
      $B += ", " + ($q = $Z[$_]) + "=" + (null != Laya.Loader.getRes($q));
    }for (var $n = 0, $g = this.m_loadingRes; $n < $g.length; $n++) {
      var $q;$B += ", " + ($q = $g[$n]) + "=" + (null != Laya.Loader.getRes($q));
    }var $P = Browser.window.PF_INFO.selectedServer;$P && ($B += ", server_status=" + $P.status, $B += ", server_id=" + $P.server_id, $B += ", server_name=" + $P.server_name);var $k = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: $B });console.error($k), this.$XB && this.$XB == $B || (this.$XB = $B, reqRecordError($k));
  }, $m.prototype.$RB = function () {
    var $B = Laya.stage,
        $_ = Math.floor($B.width),
        $Z = Math.floor($B.height);$Z / $_ < 1.7777778 ? (this.viewW = Math.floor($_ / ($Z / 1280)), this.viewH = 1280, this.viewS = $Z / 1280) : (this.viewW = 720, this.viewH = Math.floor($Z / ($_ / 720)), this.viewS = $_ / 720);var $n = Math.floor($B.width),
        $g = Math.floor($B.height);$g / $n < 1.7777778 ? (this.viewW = Math.floor($n / ($g / 1280)), this.viewH = 1280, this.viewS = $g / 1280) : (this.viewW = 720, this.viewH = Math.floor($g / ($n / 720)), this.viewS = $n / 720), this.$GB();
  }, $m.prototype.$GB = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, $m.prototype.$HB = function () {
    if (Input.isInputting && Browser.onMobile) {
      var $B = parseInt(Input.inputContainer.style.top.replace("px", "")),
          $_ = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS,
          $Z = Browser.clientWidth / Render.canvas.width;return 0 < ($B = Browser.clientHeight - $_ * $Z - $B) && ($B = 0), void (Browser.container.style.top = $B + "px");
    }Browser.container.style.top = "0px";var $n = Math.floor(Browser.width),
        $g = Math.floor(Browser.height);$n = $n + 1 & 2147483646, $g = $g + 1 & 2147483646;var $q = Laya.stage;3 == ENV ? ($q.scaleMode = Laya.Stage.SCALE_NOSCALE, $q.width = $n, $q.height = $g) : $g < $n ? ($q.scaleMode = Laya.Stage.SCALE_NOSCALE, $q.width = $n, $q.height = $g) : ($q.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, $q.width = 840, $q.height = Math.floor($g / ($n / 840)) + 1 & 2147483646), this.$RB();
  }, $m.prototype.requestWeb = function ($B, $_) {
    function $Z() {
      $n.onload = null, $n.onerror = null;
    }var $n,
        $g = $B;($n = new Browser.window.Image()).onload = function () {
      $Z(), $_($g, 200, $n);
    }, $n.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", $g), $m.instance.$KB += $g + "|", $Z(), $_($g, 404, null);
    }, $n.src = $g, -1 == $m.instance.m_serverRes.indexOf($g) && -1 == $m.instance.m_loadingRes.indexOf($g) || Laya.Loader.keepCache($m.instance, $g);
  }, $m.prototype.$hB = function ($B, $_) {
    return -1 != $B.indexOf($_, $B.length - $_.length);
  }, $m;
}();!function ($B) {
  var $_, $Z;$_ = $B.$g || ($B.$g = {}), $Z = function ($_) {
    function $B() {
      var $B = $_.call(this) || this;return $B.$sB = "#72441d", $B.$UB = "#263d7d", $B.width = 274, $B.height = 59, $B.$SB = new Laya.Image(), $B.addChild($B.$SB), $B.$OB = new Laya.Label(), $B.$OB.fontSize = 30, $B.$OB.color = $B.$UB, $B.addChild($B.$OB), $B.$OB.centerX = 0, $B.$OB.centerY = 0, $B;
    }return __extends($B, $_), $B.prototype.initialize = function () {
      $_.prototype.initialize.call(this), this.$N = Browser.window.PF_INFO;this.$N.loadingType;this.addEvt();
    }, Object.defineProperty($B.prototype, "dataSource", { set: function ($B) {
        $B && this.setData($B);
      }, enumerable: !0, configurable: !0 }), $B.prototype.setData = function ($B) {
      this.$dB = $B[0], this.$aB = $B[1], this.$OB.text = this.$dB.title, this.$OB.color = this.$aB ? this.$sB : this.$UB, this.$SB.skin = this.$aB ? "bbblogin/b25b.png" : "bbblogin/b24b.png";
    }, $B.prototype.destroy = function ($B) {
      void 0 === $B && ($B = !0), this.rmEvts(), $_.prototype.destroy.call(this, $B);
    }, $B.prototype.addEvt = function () {}, $B.prototype.rmEvts = function () {}, $B;
  }(Laya.View), $_.NoticeItem = $Z;
}(modules || (modules = {})), function ($B) {
  var $_, $Z;$_ = $B.$g || ($B.$g = {}), $Z = function ($_) {
    function $B() {
      var $B = $_.call(this) || this;return $B.$sB = "#72441d", $B.$UB = "#263d7d", $B.width = 274, $B.height = 59, $B.$SB = new Laya.Image(), $B.addChild($B.$SB), $B.$OB = new Laya.Label(), $B.$OB.fontSize = 30, $B.$OB.color = $B.$UB, $B.addChild($B.$OB), $B.$OB.centerX = 0, $B.$OB.centerY = 0, $B;
    }return __extends($B, $_), $B.prototype.initialize = function () {
      $_.prototype.initialize.call(this), this.$N = Browser.window.PF_INFO;this.$N.loadingType;this.addEvt();
    }, Object.defineProperty($B.prototype, "dataSource", { set: function ($B) {
        $B && this.setData($B);
      }, enumerable: !0, configurable: !0 }), $B.prototype.setData = function ($B) {
      this.$iB = $B[0], this.$aB = $B[1], this.$OB.text = this.$iB, this.$OB.color = this.$aB ? this.$sB : this.$UB, this.$SB.skin = this.$aB ? "bbblogin/b25b.png" : "bbblogin/b24b.png";
    }, $B.prototype.destroy = function ($B) {
      void 0 === $B && ($B = !0), this.rmEvts(), $_.prototype.destroy.call(this, $B);
    }, $B.prototype.addEvt = function () {}, $B.prototype.rmEvts = function () {}, $B;
  }(Laya.View), $_.PrivacyItem = $Z;
}(modules || (modules = {})), function ($B) {
  var $_, $Z;$_ = $B.$g || ($B.$g = {}), $Z = function ($_) {
    function $B() {
      var $B = $_.call(this) || this;return $B.width = 192, $B.height = 70, $B.$SB = new Laya.Image(), $B.addChild($B.$SB), $B.$cB = new Laya.Label(), $B.$cB.fontSize = 28, $B.$cB.color = $B.$R, $B.addChild($B.$cB), $B.$cB.centerX = 0, $B.$cB.centerY = 0, $B.$EB = new Laya.Label(), $B.$EB.fontSize = 22, $B.$EB.color = $B.$R, $B.addChild($B.$EB), $B.$EB.centerX = 0, $B.$EB.y = 11, $B.$B_ = new Laya.Label(), $B.$B_.fontSize = 26, $B.$B_.color = $B.$R, $B.addChild($B.$B_), $B.$B_.centerX = 0, $B.$B_.y = 39, $B;
    }return __extends($B, $_), $B.prototype.initialize = function () {
      $_.prototype.initialize.call(this), this.$N = Browser.window.PF_INFO;var $B = this.$N.loadingType;this.$R = 1 == $B ? "#263d7d" : 2 == $B ? "#263d7d" : 3 == $B ? "#763042" : "#263d7d", this.addEvt();
    }, Object.defineProperty($B.prototype, "dataSource", { set: function ($B) {
        $B && this.setData($B);
      }, enumerable: !0, configurable: !0 }), $B.prototype.setData = function ($B) {
      this.$dB = $B;var $_ = this.$dB.id,
          $Z = this.$dB.name;if (this.$cB.visible = this.$EB.visible = this.$B_.visible = !1, -1 == $_ || -2 == $_) this.$cB.visible = !0, this.$cB.text = $Z;else {
        var $n = $Z,
            $g = "1-10\u670d",
            $q = $Z.match("[0-9]{1,}");$q && null != $q.index && ($n = $Z.slice(0, $q.index), $g = $Z.slice($q.index)), this.$EB.visible = this.$B_.visible = !0, this.$EB.text = $n, this.$B_.text = $g;
      }this.$SB.skin = $B.select ? "bbblogin/b14b.png" : "bbblogin/b15b.png";
    }, $B.prototype.destroy = function ($B) {
      void 0 === $B && ($B = !0), this.rmEvts(), $_.prototype.destroy.call(this, $B);
    }, $B.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, $B.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, $B.prototype.clkHdler = function () {
      this.$dB && this.$dB.callBack && this.$dB.callBack(this.$dB.index);
    }, $B;
  }(Laya.View), $_.SelectLeftListItem = $Z;
}(modules || (modules = {})), function ($B) {
  var $_, $Z;$_ = $B.$g || ($B.$g = {}), $Z = function ($_) {
    function $B() {
      var $B = $_.call(this) || this;return $B.width = 358, $B.height = 70, $B.$SB = new Laya.Image("bbblogin/b16b.png"), $B.addChild($B.$SB), $B.$SB.graphics.drawRect(0, 0, $B.width, $B.height, "#00sasd"), $B.$__ = new Laya.Image(), $B.$__.centerY = 0, $B.$__.x = 7, $B.addChild($B.$__), $B.$cB = new Laya.Label(), $B.$cB.fontSize = 24, $B.$cB.color = $B.$R, $B.$cB.x = 56, $B.$cB.centerY = 0, $B.addChild($B.$cB), $B.$Z_ = new Laya.Label(), $B.$Z_.fontSize = 24, $B.$Z_.color = $B.$R, $B.$Z_.x = 246, $B.$Z_.centerY = 0, $B.addChild($B.$Z_), $B.$n_ = new Laya.Image(), $B.$n_.top = 0, $B.$n_.right = 0, $B.addChild($B.$n_), $B.$g_ = new Laya.Label(), $B.$g_.fontSize = 20, $B.$g_.color = "#ffffff", $B.$g_.x = 225, $B.$g_.y = 46, $B.addChild($B.$g_), $B;
    }return __extends($B, $_), $B.prototype.initialize = function () {
      $_.prototype.initialize.call(this), this.$N = Browser.window.PF_INFO;var $B = this.$N.loadingType;this.$R = 1 == $B ? "#34267d" : 2 == $B ? "#34267d" : 3 == $B ? "#763042" : "#34267d", this.addEvt();
    }, Object.defineProperty($B.prototype, "dataSource", { set: function ($B) {
        $B && this.setData($B);
      }, enumerable: !0, configurable: !0 }), $B.prototype.setData = function ($B) {
      this.$dB = $B;var $_ = this.$dB.status,
          $Z = this.$dB.server_name;this.$__.skin = this.getStatusSrc(this.$dB), this.$cB.color = -1 === $_ ? "#d50000" : 0 === $_ ? "#49575a" : this.$R, this.$cB.text = $Z, this.$Z_.text = -1 === $_ ? "\u7ef4\u62a4\u4e2d" : 0 === $_ ? "\u672a\u5f00\u670d" : "\u5df2\u5f00\u670d";var $n = 1 == this.$dB.is_recommend || 3 == this.$dB.is_recommend;(this.$n_.visible = $n) && (this.$n_.skin = "bbblogin/b199b.png"), this.$g_.text = -1 == this.$dB.status && this.$dB.maintain_time ? this.$dB.maintain_time : "";
    }, $B.prototype.destroy = function ($B) {
      void 0 === $B && ($B = !0), this.rmEvts(), $_.prototype.destroy.call(this, $B);
    }, $B.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, $B.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, $B.prototype.clkHdler = function () {
      this.$dB && this.$dB.callBack && this.$dB.callBack(this.$dB);
    }, $B.prototype.getStatusSrc = function ($B) {
      var $_ = $B.status,
          $Z = $B.is_recommend,
          $n = "bbblogin/b19b.png";return 1 !== $_ && 2 !== $_ || 1 !== $Z && 3 !== $Z ? 1 !== $_ && 2 !== $_ || 2 !== $Z ? -1 !== $_ && 0 !== $_ || ($n = "bbblogin/b20b.png") : $n = "bbblogin/b19b.png" : $n = "bbblogin/b18b.png", $n;
    }, $B;
  }(Laya.View), $_.SelectRightListItem = $Z;
}(modules || (modules = {})), window.ServerLoading = ServerLoading;