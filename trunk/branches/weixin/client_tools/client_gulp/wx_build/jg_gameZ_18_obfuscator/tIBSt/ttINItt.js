"use strict";

var ui,
    __extends = this && this.__extends || function () {
  var $n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function ($J, $h) {
    $J.__proto__ = $h;
  } || function ($J, $h) {
    for (var $f in $h) $h.hasOwnProperty($f) && ($J[$f] = $h[$f]);
  };return function ($J, $h) {
    function $f() {
      this.constructor = $J;
    }$n($J, $h), $J.prototype = null === $h ? Object.create($h) : ($f.prototype = $h.prototype, new $f());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function ($f) {
  var $J = function ($J) {
    function $h() {
      return $J.call(this) || this;
    }return __extends($h, $J), $h.prototype.createChildren = function () {
      $J.prototype.createChildren.call(this), this.createView($f.$J.uiView);
    }, $h.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "ttlgrtt/t2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "ttlgrtt/t6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "ttlgrtt/t3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "ttlgrtt/t4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "ttlgrtt/t5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] }, $h;
  }(View);$f.$J = $J;
}(ui || (ui = {})), function ($f) {
  var $J = function ($J) {
    function $h() {
      return $J.call(this) || this;
    }return __extends($h, $J), $h.prototype.createChildren = function () {
      $J.prototype.createChildren.call(this), this.createView($f.$h.uiView);
    }, $h.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "ttlgrtt/t1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "ttdt/t13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "ttdt/t14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "ttdt/t16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "ttdt/t17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "ttdt/t20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "ttdt/t19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "ttdt/t18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "ttdt/t18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "ttdt/t1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }] }, $h;
  }(View);$f.$h = $J;
}(ui || (ui = {})), function ($f) {
  var $J = function ($J) {
    function $h() {
      return $J.call(this) || this;
    }return __extends($h, $J), $h.prototype.createChildren = function () {
      View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), View.regComponent("Text", laya.display.Text), $J.prototype.createChildren.call(this), this.createView($f.$f.uiView);
    }, $h.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "ttlgrtt/t2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "ttlgrtt/t6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "ttlgrtt/t3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "ttlgrtt/t4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "ttlgrtt/t5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "ttlgrtt/t21b.png", centerX: 0 } }, { type: "Image", props: { y: 1102, var: "imgCheatTip", skin: "ttlgrtt/t27b.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 927, x: 159, var: "hotImage", skin: "ttlgrtt/t18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "ttlgrtt/t1b.png", centerX: 0, bottom: 30 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "ttlgrtt/t12b.png", name: "enterBtn", centerX: 0 } }, { type: "Image", props: { x: 196, visible: !1, var: "privacyToggle", skin: "ttlgrtt/t29b.png", bottom: 4 } }, { type: "Label", props: { y: 640, x: 0, width: 720, var: "txtTip", valign: "middle", text: "\u63d0\u793a\u5185\u5bb9", strokeColor: "#ffffff", stroke: 2, height: 32, fontSize: 32, color: "#ff0000", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }, { type: "HTMLDivElement", props: { y: 1255, x: 256, visible: !1, var: "privacyTip", height: 16 } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "ttlgrtt/t11b.png" } }, { type: "Image", props: { y: 257, x: 594, visible: !1, var: "privacyBtn", skin: "ttlgrtt/t13b.png", name: "privacyBtn" } }, { type: "Image", props: { left: 0, top: 0, visible: !1, var: "ageTipBtn", scaleY: .5, scaleX: .5, name: "privacyBtn" } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "ttlgrtt/t8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "ttlgrtt/t10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { visible: !1, var: "mNoticeBg", skin: "ttlgrtt/t8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "ttlgrtt/t10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "ttlgrtt/t25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "privacyBg", skin: "ttlgrtt/t8b.png", name: "privacyBg", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "privacyClose", skin: "ttlgrtt/t10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "privacyClose2", stateNum: 1, skin: "ttlgrtt/t25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTabPrivacy", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "privacyTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "privacyPanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "privacyContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "ttlgrtt/t9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "ttlgrtt/t17b.png" } }] }, { type: "Box", props: { width: 720, visible: !1, var: "jumpBg", mouseThrough: !1, height: 1280, centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { x: 33, width: 655, skin: "ttlgrtt/t8b.png", height: 994, centerY: 0, centerX: 0 } }, { type: "Button", props: { width: 274, var: "btnJump", stateNum: 1, skin: "ttlgrtt/t25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u8df3\u8f6c", height: 59, centerY: 436, centerX: 0 } }, { type: "Label", props: { width: 234, var: "jumpTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", fontSize: 30, color: "#ffffff", centerY: -408, centerX: 0, bold: !1, align: "center" } }, { type: "Panel", props: { x: 94, width: 545, var: "jumpPanel", height: 733, centerY: 10 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "jumpContent", height: 733 } }] }, { type: "Image", props: { x: 596, visible: !1, var: "closeBtn", skin: "ttlgrtt/t17b.png", name: "closeBtn", centerY: -402 } }] }] }, $h;
  }(View);$f.$f = $J;
}(ui || (ui = {})), function ($J) {
  var $h, $f;$h = $J.$n || ($J.$n = {}), $f = function ($h) {
    function $J() {
      return $h.call(this) || this;
    }return __extends($J, $h), $J.prototype.initialize = function () {
      $h.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
    }, $J.prototype.addEvt = function () {
      this.on(Laya.Event.CLICK, this, this.$L);
    }, $J.prototype.rmEvts = function () {
      this.off(Laya.Event.CLICK, this, this.$L);
    }, $J.prototype.onOpened = function () {
      this.$T = Date.now(), ServerLoading.instance.D$H$45Q(), ServerLoading.instance.preloadLoading();
    }, $J.prototype.destroy = function ($J) {
      void 0 === $J && ($J = !0), this.rmEvts(), $h.prototype.destroy.call(this, $J);
    }, $J.prototype.$L = function () {
      1e4 < Date.now() - this.$T && (this.$T -= 1e3, Browser.window.D$5$.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
    }, $J;
  }(ui.$J), $h.AuthorizationPanel = $f;
}(modules || (modules = {})), function ($J) {
  var $h, $f, $n, $L, $k, $T;$h = $J.$k || ($J.$k = {}), $f = Laya.Event, $n = Laya.Image, $L = Laya.Component, $k = Laya.Loader, $T = function ($h) {
    function $S() {
      var $J = $h.call(this) || this;return $J.$u = new $n(), $J.addChild($J.$u), $J.$S = null, $J.$Y = [], $J.$x = !1, $J.$j = 0, $J.$R = !0, $J.$l = 6, $J.$i = !1, $J.on($f.DISPLAY, $J, $J.$q), $J.on($f.UNDISPLAY, $J, $J.$o), $J;
    }return __extends($S, $h), $S.create = function ($J, $h, $f, $n, $L, $T, $k) {
      void 0 === $n && ($n = 0), void 0 === $L && ($L = 6), void 0 === $T && ($T = !0), void 0 === $k && ($k = !1);var $u = new $S();return $u.skin($h, $f, $n), $u.durFrm = $L, $u.loop = $T, $u.atHide = $k, $J && $J.addChild($u), $u;
    }, $S.play = function ($J) {
      $J && ($J.visible = !0, $J.play());
    }, $S.stop = function ($J) {
      $J && ($J.visible = !1, $J.stop());
    }, $S.prototype.destroy = function ($J) {
      Laya.timer.clear(this, this.$r), this.off($f.DISPLAY, this, this.$q), this.off($f.UNDISPLAY, this, this.$o), $h.prototype.destroy.call(this, $J);
    }, $S.prototype.$q = function () {}, $S.prototype.$o = function () {}, $S.prototype.skin = function ($J, $h, $f) {
      if (this.$S != $J) {
        this.$S = $J, this.$Y = [];for (var $n = 0, $L = $f; $L <= $h; $L++) this.$Y[$n++] = $J + "/" + $L + ".png";var $T = $k.getRes(this.$Y[0]);$T && (this.width = $T.sourceWidth, this.height = $T.sourceHeight), this.$r();
      }
    }, Object.defineProperty($S.prototype, "atHide", { get: function () {
        return this.$i;
      }, set: function ($J) {
        this.$i = $J;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty($S.prototype, "durFrm", { set: function ($J) {
        this.$l != $J && (this.$l = $J, this.$x && (Laya.timer.clear(this, this.$r), Laya.timer.loop(this.$l * (1e3 / 60), this, this.$r)));
      }, enumerable: !0, configurable: !0 }), Object.defineProperty($S.prototype, "loop", { set: function ($J) {
        this.$R = $J;
      }, enumerable: !0, configurable: !0 }), $S.prototype.play = function () {
      this.$x && this.stop(), this.$x = !0, this.$j = 0, Laya.timer.loop(this.$l * (1e3 / 60), this, this.$r), this.$r();
    }, $S.prototype.stop = function () {
      this.$x = !1, this.$j = 0, this.$r(), Laya.timer.clear(this, this.$r);
    }, $S.prototype.pause = function () {
      this.$x && (this.$x = !1, Laya.timer.clear(this, this.$r));
    }, $S.prototype.resume = function () {
      this.$x || (this.$x = !0, Laya.timer.loop(this.$l * (1e3 / 60), this, this.$r), this.$r());
    }, Object.defineProperty($S.prototype, "isPlay", { get: function () {
        return this.$x;
      }, enumerable: !0, configurable: !0 }), $S.prototype.$r = function () {
      this.$Y && 0 != this.$Y.length && (this.$u.skin = this.$Y[this.$j], this.$x && (this.$j++, this.$j == this.$Y.length && (this.$R ? this.$j = 0 : (Laya.timer.clear(this, this.$r), this.$x = !1, this.$i && (this.visible = !1), this.event($f.COMPLETE)))));
    }, $S;
  }($L), $h.PanelEff = $T;
}(modules || (modules = {})), function ($J) {
  var $h, $f, $n;$h = $J.$n || ($J.$n = {}), $f = $J.$k.PanelEff, $n = function ($n) {
    function $J($J, $h) {
      void 0 === $J && ($J = 0);var $f = $n.call(this) || this;return $f.$s = { bgImgSkin: "ttdt/t3a.jpg", topImgSkin: "ttdt/t10a.jpg", btmImgSkin: "ttdt/t4a.jpg", leftImgSkin: "ttdt/t6a.jpg", rightImgSkin: "ttdt/t8a.jpg", loadingBarBgSkin: "ttdt/t13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, $f.$d = { bgImgSkin: "ttdt/t12a.jpg", topImgSkin: "ttdt/t11a.jpg", btmImgSkin: "ttdt/t5a.jpg", leftImgSkin: "ttdt/t7a.jpg", rightImgSkin: "ttdt/t9a.jpg", loadingBarBgSkin: "ttdt/t15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, $f.$p = 0, $f.$U(1 == $J ? $f.$d : $f.$s), $f.copyRightImg.skin = $h, $f;
    }return __extends($J, $n), $J.prototype.initialize = function () {
      if ($n.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.$Q = Browser.window.D$5$, this.centerX = 0, this.centerY = 0, this.$Q) {
        var $J = this.$Q.loadingType;this.loadingTips.color = 1 == $J ? "#f2ffb5" : 2 == $J ? "#000000" : 101 == $J ? "#000000" : "#f2ffb5";
      }this.$D = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, D$Q5$4(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
    }, $J.prototype.D$Q5$ = function ($J) {
      var $h = this;if (-1 === $J) return $h.$p = 0, Laya.timer.clear(this, this.D$Q5$), void Laya.timer.frameLoop(1, this, this.D$Q5$);if (-2 !== $J) {
        $h.$p < .9 ? $h.$p += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : $h.$p < 1 && ($h.$p += 1e-4), .9999 < $h.$p && ($h.$p = .9999, Laya.timer.clear(this, this.D$Q5$), Laya.timer.once(3e3, this, function () {
          .9 < $h.$p && D$Q5$(-1);
        }));var $f = $h.$p,
            $n = 590 * $f;$h.$p = $h.$p > $f ? $h.$p : $f, $h.loadingBar.width = $n;var $L = $h.loadingBar.x + $n;$h.loadingImg2.x = $L - 15, 364 <= $L ? ($h.loadingImg1.visible = !0, $h.loadingImg1.x = $L - 202) : $h.loadingImg1.visible = !1, $h.percentageTips.text = (100 * $f >> 0) + "%", $h.$p < .9999 && Laya.timer.frameLoop(1, this, this.D$Q5$);
      } else Laya.timer.clear(this, this.D$Q5$);
    }, $J.prototype.D$Q$5 = function ($J, $h, $f) {
      var $n = this;1 < $J && ($J = 1);var $L = 590 * $J;$n.$p = $n.$p > $J ? $n.$p : $J, $n.loadingBar.width = $L;var $T = $n.loadingBar.x + $L;$n.loadingImg2.x = $T - 15, 364 <= $T ? ($n.loadingImg1.visible = !0, $n.loadingImg1.x = $T - 202) : $n.loadingImg1.visible = !1, $n.percentageTips.text = (100 * $J >> 0) + "%", $n.loadingTips.text = $h;for (var $k = $f - 1, $u = 0; $u < this.$D.length; $u++) $n.$D[$u].skin = $u < $k ? "ttdt/t20a.png" : $k === $u ? "ttdt/t19a.png" : "ttdt/t18a.png";
    }, $J.prototype.onOpened = function () {
      this.D$Q$5(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.D$Q5$(-1), Browser.window.D$Q5$ = this.D$Q5$.bind(this), Browser.window.D$Q$5 = this.D$Q$5.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$Q.lastVersion + "      \u7248\u672c\uff1a" + this.$Q.wxVersion, this.showGetBtn();
    }, $J.prototype.close = function ($J) {
      this.resetWinFun(), Laya.timer.clear(this, this.D$Q5$), Laya.timer.clear(this, this.$g), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.$F);
    }, $J.prototype.resetWinFun = function () {
      Browser.window.D$Q5$ = function () {}, Browser.window.D$Q$5 = function () {};
    }, $J.prototype.destroy = function ($J) {
      void 0 === $J && ($J = !0), this.resetWinFun(), $n.prototype.destroy.call(this, $J);
    }, $J.prototype.showGetBtn = function () {
      this.$Q.showGetBtn && 1 == this.$Q.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "ttdt/t1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.$F), this.$A(), this.$G(!0));
    }, $J.prototype.$F = function () {
      this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "ttdt/t2a.png", this.$y(), this.$G(!1));
    }, $J.prototype.$U = function ($J) {
      this.bgImg.skin = $J.bgImgSkin, this.topImg.skin = $J.topImgSkin, this.btmImg.skin = $J.btmImgSkin, this.leftImg.skin = $J.leftImgSkin, this.rightImg.skin = $J.rightImgSkin, this.copyRightImg.bottom = $J.copyRightImgBottom, this.processBox1.y = $J.processBox1Y, this.processBox2.y = $J.processBox2Y, this.loadingBarBg.skin = $J.loadingBarBgSkin, this.loadingTips.fontSize = $J.loadingTipsSize, this.getTipsBtn.visible = this.$Q.showGetBtn && 1 == this.$Q.showGetBtn, this.getTipsBtn.visible ? this.$A() : this.$y(), this.$G(this.getTipsBtn.visible);
    }, $J.prototype.$A = function () {
      this.$O || (this.$O = $f.create(this.getTipsBtn, "tft", 4, 0, 12), this.$O.pos(161, 106), this.$O.scale(1.14, 1.15)), $f.play(this.$O);
    }, $J.prototype.$y = function () {
      this.$O && $f.stop(this.$O);
    }, $J.prototype.$G = function ($J) {
      Laya.timer.clear(this, this.$g), $J ? (this.$P = 9, this.txtGetTm.visible = !0, this.$g(), Laya.timer.loop(1e3, this, this.$g)) : this.txtGetTm.visible = !1;
    }, $J.prototype.$g = function () {
      0 < this.$P ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.$P + "s)", this.$P--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.$g), this.$F());
    }, $J;
  }(ui.$h), $h.LoadingPanel = $n;
}(modules || (modules = {})), function ($J) {
  var $h, $n, $L, $f;$h = $J.$n || ($J.$n = {}), $n = Laya.List, $L = Laya.Event, $f = function ($f) {
    function $J($J) {
      void 0 === $J && ($J = "ttlgrtt/t1b.png");var $h = $f.call(this) || this;return $h.$W = 0, $h.$I = "multi_notice_key", $h.$m = 0, $h.$Z = 0, $h.$t = "privacy_key", $h.$c = !0, $h.$a = 0, $h.copyRightImg.skin = $J, $h;
    }return __extends($J, $f), $J.prototype.initialize = function () {
      $f.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.copyRightImg.skin = "", ServerLoading.instance.D$H$45Q(), this.$Q = Browser.window.D$5$, this.$B = new $n(), this.$B.vScrollBarSkin = "", this.$B.itemRender = $h.SelectLeftListItem, this.$B.top = 5, this.$B.repeatX = 1, this.$B.spaceY = 5, this.$B.width = this.leftListBox.width, this.$B.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.$B), this.$V = new $n(), this.$V.vScrollBarSkin = "", this.$V.itemRender = $h.SelectRightListItem, this.$V.top = 5, this.$V.repeatX = 1, this.$V.spaceY = 5, this.$V.width = this.rightListBox.width, this.$V.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.$V), this.$C = new $n(), this.$C.hScrollBarSkin = "", this.$C.itemRender = $h.NoticeItem, this.$C.repeatY = 1, this.$C.width = this.boxTab.width, this.$C.height = this.boxTab.height, this.boxTab.addChild(this.$C), this.$e = new $n(), this.$e.hScrollBarSkin = "", this.$e.itemRender = $h.PrivacyItem, this.$e.repeatY = 1, this.$e.width = this.boxTab.width, this.$e.height = this.boxTab.height, this.boxTabPrivacy.addChild(this.$e);var $J = this.$Q.loadingType;this.$H = 1 == $J ? "#feffc0" : 2 == $J ? "#feffc0" : 3 == $J ? "#feffc0" : 101 == $J ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.$b = [], this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.privacyContent.color = "#212942", this.privacyContent.style.fontSize = 26, this.privacyContent.style.lineHeight = 28, this.privacyContent.mouseEnabled = !1, this.privacyTip.color = "#ffffff", this.privacyTip.style.fontSize = 18, this.privacyTip.style.lineHeight = 18, this.privacyTip.style.stroke = 2, this.privacyTip.style.strokeColor = "#000000", this.privacyTip.style.wordWrap = !1, this.jumpContent.color = "#212942", this.jumpContent.style.fontSize = 26, this.jumpContent.style.lineHeight = 28, this.jumpContent.mouseEnabled = !1, Browser.window.initPanel = this, D$Q5$4(), this.addEvt(), this.onOpened();
    }, $J.prototype.destroy = function ($J) {
      void 0 === $J && ($J = !0), this.rmEvts(), this.$v(), this.$$(), this.$M(), this.$X(), this.ageTipsContent = null, this.$B && (this.$B.removeSelf(), this.$B.destroy(), this.$B = null), this.$V && (this.$V.removeSelf(), this.$V.destroy(), this.$V = null), this.$C && (this.$C.removeSelf(), this.$C.destroy(), this.$C = null), this.$e && (this.$e.removeSelf(), this.$e.destroy(), this.$e = null), Laya.timer.clear(this, this.$w), $f.prototype.destroy.call(this, $J);
    }, $J.prototype.addEvt = function () {
      this.bgImg.on(Laya.Event.CLICK, this, this.$E), this.enterBtn.on(Laya.Event.CLICK, this, this.$N), this.selectServer.on(Laya.Event.CLICK, this, this.$z), this.selectServer.on(Laya.Event.CLICK, this, this.$z), this.closeBg.on(Laya.Event.CLICK, this, this.$K), this.closeBtn.on(Laya.Event.CLICK, this, this.$JJ), this.noticeBtn.on(Laya.Event.CLICK, this, this.$hJ), this.noticeClose.on(Laya.Event.CLICK, this, this.$fJ), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.$nJ), this.mNoticeClose.on(Laya.Event.CLICK, this, this.$LJ), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.$LJ), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.$TJ), this.privacyBtn.on(Laya.Event.CLICK, this, this.$kJ), this.ageTipBtn.on(Laya.Event.CLICK, this, this.$uJ), this.privacyClose.on(Laya.Event.CLICK, this, this.$SJ), this.privacyClose2.on(Laya.Event.CLICK, this, this.$SJ), this.privacyPanel.on(Laya.Event.MOUSE_DOWN, this, this.$YJ), this.privacyToggle.on(Laya.Event.CLICK, this, this.$xJ), this.privacyTip.on(Laya.Event.LINK, this, this.$jJ), this.btnJump.on(Laya.Event.CLICK, this, this.$RJ), this.jumpPanel.on(Laya.Event.MOUSE_DOWN, this, this.$lJ), this.$C.selectEnable = !0, this.$C.selectHandler = Laya.Handler.create(this, this.$iJ, null, !1), this.$e.selectEnable = !0, this.$e.selectHandler = Laya.Handler.create(this, this.$qJ, null, !1);
    }, $J.prototype.rmEvts = function () {
      this.bgImg.off(Laya.Event.CLICK, this, this.$E), this.enterBtn.off(Laya.Event.CLICK, this, this.$N), this.selectServer.off(Laya.Event.CLICK, this, this.$z), this.selectServer.off(Laya.Event.CLICK, this, this.$z), this.closeBg.off(Laya.Event.CLICK, this, this.$K), this.noticeBtn.off(Laya.Event.CLICK, this, this.$hJ), this.closeBtn.off(Laya.Event.CLICK, this, this.$JJ), this.noticeClose.off(Laya.Event.CLICK, this, this.$fJ), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.$nJ), this.mNoticeClose.off(Laya.Event.CLICK, this, this.$LJ), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.$LJ), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.$TJ), this.privacyBtn.off(Laya.Event.CLICK, this, this.$kJ), this.ageTipBtn.off(Laya.Event.CLICK, this, this.$uJ), this.privacyClose.off(Laya.Event.CLICK, this, this.$SJ), this.privacyClose2.off(Laya.Event.CLICK, this, this.$SJ), this.privacyPanel.off(Laya.Event.MOUSE_DOWN, this, this.$YJ), this.privacyToggle.off(Laya.Event.CLICK, this, this.$xJ), this.privacyTip.off(Laya.Event.LINK, this, this.$jJ), this.btnJump.off(Laya.Event.CLICK, this, this.$RJ), this.jumpPanel.off(Laya.Event.MOUSE_DOWN, this, this.$lJ), this.$C.selectEnable = !1, this.$C.selectHandler = null, this.$e.selectEnable = !1, this.$e.selectHandler = null;
    }, $J.prototype.onOpened = function () {
      var $n = this;this.$T = Date.now(), this.$c = !0, this.$oJ = this.$Q.selectedServer.server_id, this.$rJ(this.$Q.selectedServer), this.$B.dataSource = this.$Q.groupList, this.$z(), req_multi_server_notice(4, this.$Q.pkgName, this.$Q.selectedServer.server_id, this.$_J.bind(this)), Laya.timer.frameOnce(1, this, function () {
        $n.$sJ = $n.$Q.privacy_data && $n.$Q.privacy_data.list ? $n.$Q.privacy_data.list : [], $n.$dJ = null != $n.$Q.privacy_login_pkg ? $n.$Q.privacy_login_pkg : 0;var $J = "1" == localStorage.getItem($n.$t),
            $h = 0 != D$5$.privacy_save_pkg,
            $f = 0 == $n.$dJ || 1 == $n.$dJ;$n.$pJ = $h && $J || $f, $n.$UJ();
      }), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.$Q.lastVersion + "      \u7248\u672c\uff1a" + this.$Q.wxVersion, this.serverName.color = this.selServer.color = this.$H, this.imgCheatTip.visible = 1 == this.$Q.anti_cheat_pkg, this.txtTip.visible = !1;
    }, $J.prototype.preload = function () {}, $J.prototype.$E = function () {
      this.$pJ ? 1e4 < Date.now() - this.$T && (this.$T -= 2e3, ServerLoading.instance.enterDefaultServer()) : this.$QJ("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
    }, $J.prototype.$N = function () {
      this.$pJ ? this.$DJ(this.$Q.selectedServer) && (Browser.window.D$5$.selectedServer = this.$Q.selectedServer, D$$Q45(0, this.$Q.selectedServer.server_id)) : this.$QJ("\u60a8\u5fc5\u987b\u540c\u610f\u7528\u6237\u534f\u8bae\u624d\u53ef\u8fdb\u5165\u6e38\u620f");
    }, $J.prototype.$z = function () {
      this.$Q.hasGroupReq ? this.listBg.visible = !0 : (this.$Q.hasGroupReq = !0, D$5$Q4(0));
    }, $J.prototype.$K = function () {
      this.listBg.visible = !1;
    }, $J.prototype.$JJ = function () {
      this.jumpBg.visible = !1;
    }, $J.prototype.$hJ = function () {
      this.$gJ();
    }, $J.prototype.$LJ = function () {
      this.mNoticeBg.visible = !1;
    }, $J.prototype.$fJ = function () {
      this.noticeBg.visible = !1;
    }, $J.prototype.$kJ = function () {
      this.$FJ();
    }, $J.prototype.$SJ = function () {
      this.privacyBg.visible = !1;
    }, $J.prototype.$xJ = function () {
      this.$pJ = !this.$pJ, this.$pJ && localStorage.setItem(this.$t, "1"), this.privacyToggle.skin = "ttlgrtt/" + (this.$pJ ? "t29b.png" : "t28b.png");
    }, $J.prototype.$jJ = function ($J) {
      this.$FJ(Number($J));
    }, $J.prototype.$RJ = function () {
      Browser.window.forceJumpMiniGame ? Browser.window.forceJumpMiniGame() : this.$JJ();
    }, $J.prototype.$nJ = function () {
      this.$W = this.noticeContent.mouseY, Laya.stage.on($L.MOUSE_MOVE, this, this.$AJ), Laya.stage.on($L.MOUSE_UP, this, this.$v), Laya.stage.on($L.MOUSE_OUT, this, this.$v);
    }, $J.prototype.$AJ = function () {
      if (this.noticeContent) {
        var $J = this.$W - this.noticeContent.mouseY;this.noticeContent.scrollY += $J, this.$W = this.noticeContent.mouseY;
      }
    }, $J.prototype.$v = function () {
      Laya.stage.off($L.MOUSE_MOVE, this, this.$AJ), Laya.stage.off($L.MOUSE_UP, this, this.$v), Laya.stage.off($L.MOUSE_OUT, this, this.$v);
    }, $J.prototype.$TJ = function () {
      this.$m = this.mNoticePanel.mouseY, Laya.stage.on($L.MOUSE_MOVE, this, this.$GJ), Laya.stage.on($L.MOUSE_UP, this, this.$$), Laya.stage.on($L.MOUSE_OUT, this, this.$$);
    }, $J.prototype.$GJ = function () {
      if (this.mNoticeContent) {
        var $J = this.$m - this.mNoticePanel.mouseY;this.mNoticeContent.y -= $J, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.$m = this.mNoticePanel.mouseY;
      }
    }, $J.prototype.$$ = function () {
      Laya.stage.off($L.MOUSE_MOVE, this, this.$GJ), Laya.stage.off($L.MOUSE_UP, this, this.$$), Laya.stage.off($L.MOUSE_OUT, this, this.$$);
    }, $J.prototype.$YJ = function () {
      this.$Z = this.privacyPanel.mouseY, Laya.stage.on($L.MOUSE_MOVE, this, this.$yJ), Laya.stage.on($L.MOUSE_UP, this, this.$M), Laya.stage.on($L.MOUSE_OUT, this, this.$M);
    }, $J.prototype.$yJ = function () {
      if (this.privacyContent) {
        var $J = this.$Z - this.privacyPanel.mouseY;this.privacyContent.y -= $J, this.privacyPanel.height < this.privacyContent.contextHeight ? this.privacyContent.y < this.privacyPanel.height - this.privacyContent.contextHeight ? this.privacyContent.y = this.privacyPanel.height - this.privacyContent.contextHeight : 0 < this.privacyContent.y && (this.privacyContent.y = 0) : this.privacyContent.y = 0, this.$Z = this.privacyPanel.mouseY;
      }
    }, $J.prototype.$M = function () {
      Laya.stage.off($L.MOUSE_MOVE, this, this.$yJ), Laya.stage.off($L.MOUSE_UP, this, this.$M), Laya.stage.off($L.MOUSE_OUT, this, this.$M);
    }, $J.prototype.$lJ = function () {
      this.$a = this.jumpPanel.mouseY, Laya.stage.on($L.MOUSE_MOVE, this, this.$OJ), Laya.stage.on($L.MOUSE_UP, this, this.$X), Laya.stage.on($L.MOUSE_OUT, this, this.$X);
    }, $J.prototype.$OJ = function () {
      if (this.jumpContent) {
        var $J = this.$a - this.jumpPanel.mouseY;this.jumpContent.y -= $J, this.jumpPanel.height < this.jumpContent.contextHeight ? this.jumpContent.y < this.jumpPanel.height - this.jumpContent.contextHeight ? this.jumpContent.y = this.jumpPanel.height - this.jumpContent.contextHeight : 0 < this.jumpContent.y && (this.jumpContent.y = 0) : this.jumpContent.y = 0, this.$a = this.jumpPanel.mouseY;
      }
    }, $J.prototype.$X = function () {
      Laya.stage.off($L.MOUSE_MOVE, this, this.$OJ), Laya.stage.off($L.MOUSE_UP, this, this.$X), Laya.stage.off($L.MOUSE_OUT, this, this.$X);
    }, $J.prototype.$iJ = function () {
      if (this.$C.dataSource) {
        for (var $J, $h = 0; $h < this.$C.dataSource.length; $h++) {
          var $f = this.$C.dataSource[$h];$f[1] = $h == this.$C.selectedIndex, $h == this.$C.selectedIndex && ($J = $f[0]);
        }this.mNoticeTitle.text = $J && $J.title ? $J.title : "", this.mNoticeContent.innerHTML = $J && $J.content ? $J.content : "", this.mNoticeContent.y = 0;
      }
    }, $J.prototype.$qJ = function () {
      var $J = this.$e.dataSource;if ($J) {
        for (var $h = 0; $h < $J.length; $h++) {
          $J[$h][1] = $h == this.$e.selectedIndex;
        }var $f = this.$sJ[this.$e.selectedIndex];$f && $f.content && ($f.content = $f.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "")), this.privacyTitle.text = $f && $f.title ? $f.title : "\u6807\u9898", this.privacyContent.innerHTML = $f && $f.content ? $f.content : "\u52a0\u8f7d\u4e2d...", this.privacyContent.y = 0;
      }
    }, $J.prototype.$rJ = function ($J) {
      var $h = $J.server_name;this.serverName.text = $h + this.$PJ($J), this.serverName.color = -1 === $J.status ? "#d50000" : 0 === $J.status ? "#49575a" : this.$H, this.hotImage.skin = this.$WJ($J), this.$Q.cdn = $J.cdn || "", this.$Q.selectedServer = $J, this.noticeBtn.visible = !0;
    }, $J.prototype.$IJ = function ($J) {
      this.showGroupList($J);
    }, $J.prototype.$mJ = function ($J) {
      this.$rJ($J), this.listBg.visible = !1;
    }, $J.prototype.showGroupList = function ($J) {
      if (void 0 === $J && ($J = 0), this.parent) {
        var $h = this.$Q.groupList;if ($h && 0 !== $h.length) {
          for (var $f = $h.length, $n = 0; $n < $f; $n++) $h[$n].callBack = this.$IJ.bind(this), $h[$n].select = $n == $J, $h[$n].index = $n;var $L = (this.$B.array = $h)[$J].id;this.$Q.serverList[$L] ? this.showServerList($L) : this.$Q.hasServerReq || (this.$Q.hasServerReq = !0, -1 == $L ? D$Q45(0) : -2 == $L ? D$H4$5(0) : D$4Q5(0, $L));
        }
      }
    }, $J.prototype.showServerList = function ($J) {
      if (this.parent && this.$Q.serverList[$J]) {
        for (var $h = this.$Q.serverList[$J], $f = $h.length, $n = 0; $n < $f; $n++) $h[$n].callBack = this.$mJ.bind(this);this.$V.array = $h;
      }
    }, $J.prototype.$DJ = function ($J) {
      return -1 == $J.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != $J.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
    }, $J.prototype.$WJ = function ($J) {
      var $h = $J.status,
          $f = $J.is_recommend,
          $n = "ttlgrtt/t19b.png";return 1 !== $h && 2 !== $h || 1 !== $f && 3 !== $f ? 1 !== $h && 2 !== $h || 2 !== $f ? -1 !== $h && 0 !== $h || ($n = "ttlgrtt/t20b.png") : $n = "ttlgrtt/t19b.png" : $n = "ttlgrtt/t18b.png", $n;
    }, $J.prototype.$PJ = function ($J) {
      var $h = $J.status,
          $f = "";return 1 == $J.is_recommend || 3 == $J.is_recommend ? $f = "(\u63a8\u8350)" : -1 === $h ? $f = "(\u7ef4\u62a4\u4e2d)" : 0 === $h && ($f = "(\u5f85\u5f00\u670d)"), $f;
    }, $J.prototype.$_J = function ($J) {
      console.log("onMultiNoticeCallback, param = ", $J);var $h = Date.now() / 1e3,
          $f = localStorage.getItem(this.$I),
          $n = !(this.$b = []);if ("success" == $J.state) for (var $L in $J.data) {
        var $T = $J.data[$L];if ($T) {
          var $k = $h < $T.end_time,
              $u = 1 == $T.pop_type,
              $S = 2 == $T.pop_type && $T.key + "" != $f;!$n && $k && ($u || $S) && ($n = !0), $k && this.$b.push($T), $S && localStorage.setItem(this.$I, $T.key + "");
        }
      }this.$b.sort(function ($J, $h) {
        return $J.login_id - $h.login_id;
      }), console.log("onMultiNoticeCallback, datas = ", this.$b), $n && this.$gJ();
    }, $J.prototype.$gJ = function () {
      if (this.$C) {
        if (this.$b) {
          this.$C.x = 2 < this.$b.length ? 0 : (this.boxTab.width - 274 * this.$b.length) / 2;for (var $J = [], $h = 0; $h < this.$b.length; $h++) {
            var $f = this.$b[$h];$J.push([$f, $h == this.$C.selectedIndex]);
          }0 < (this.$C.dataSource = $J).length ? (this.$C.selectedIndex = 0, this.$C.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.$b.length <= 1, this.boxTab.visible = 1 < this.$b.length;
        }this.mNoticeBg.visible = !0;
      }
    }, $J.prototype.$ZJ = function ($J) {
      if (!this.destroyed) {
        if (console.log("p_onPrivacyCallback, param = ", $J), "success" == $J.state) for (var $h in $J.data) {
          var $f = Number($h),
              $n = $J.data[$f];this.$sJ && this.$sJ[$f] && (this.$sJ[$f].content = $n.content);
        }this.$qJ();
      }
    }, $J.prototype.$UJ = function () {
      for (var $J = "", $h = 0; $h < this.$sJ.length; $h++) {
        $J += '<a href="' + $h + '" style="color:#14ff28;text-decoration:none">' + this.$sJ[$h].title + "</a>", $h < this.$sJ.length - 1 && ($J += "\u3001");
      }this.privacyTip.innerHTML = "\u6211\u5df2\u7ecf\u8be6\u7ec6\u9605\u8bfb\u5e76\u540c\u610f" + $J, this.privacyToggle.skin = "ttlgrtt/" + (this.$pJ ? "t29b.png" : "t28b.png"), this.privacyTip.x = (720 - this.privacyTip.width) / 2, this.privacyToggle.x = this.privacyTip.x - 30, this.privacyBtn.visible = 0 < this.$sJ.length, this.privacyToggle.visible = this.privacyTip.visible = 0 < this.$sJ.length && 0 != this.$dJ;
    }, $J.prototype.$FJ = function ($J) {
      if (void 0 === $J && ($J = 0), this.$e) {
        if (this.$sJ) {
          this.$e.x = 2 < this.$sJ.length ? 0 : (this.boxTab.width - 274 * this.$sJ.length) / 2;for (var $h = [], $f = 0; $f < this.$sJ.length; $f++) {
            var $n = this.$sJ[$f],
                $L = $n && $n.title ? $n.title : "",
                $T = $f == this.$e.selectedIndex;$h.push([$L, $T]);
          }0 < (this.$e.dataSource = $h).length ? ($J < 0 && ($J = 0), $J > $h.length - 1 && ($J = 0), this.$e.selectedIndex = $J, this.$e.scrollTo($J)) : (this.privacyTitle.text = "\u7a7a", this.privacyContent.text = ""), this.privacyClose2.visible = this.$sJ.length <= 1, this.boxTabPrivacy.visible = 1 < this.$sJ.length;
        }this.$c && (this.$c = !1, req_privacy(this.$Q.pkgName, this.$ZJ.bind(this))), this.privacyBg.visible = !0;
      }
    }, $J.prototype.openJumpView = function ($J, $h, $f, $n) {
      void 0 === $n && ($n = !1), this.jumpTitle.text = $J || "\u6682\u65e0\u516c\u544a", this.jumpContent.innerHTML = $h || "", this.btnJump.label = $f || "\u786e\u5b9a", this.jumpContent.y = 0, this.jumpBg.visible = !0, this.closeBtn.visible = $n;
    }, $J.prototype.showAgeTipsBtn = function ($J, $h, $f, $n, $L) {
      (this.ageTipBtn.visible = $J) && (this.ageTipBtn.skin = $h || "ttlgrtt/t11b.png"), this.ageTipsContent = $f, this.ageTipBtn.x = $n || 0, this.ageTipBtn.y = $L || 0;
    }, $J.prototype.$uJ = function () {
      this.openJumpView("\u9002\u9f84\u516c\u544a", this.ageTipsContent, "\u786e\u8ba4", !0);
    }, $J.prototype.$QJ = function ($J) {
      this.txtTip.text = $J, this.txtTip.y = 640, this.txtTip.visible = !0, this.$tJ = 1, Laya.timer.clear(this, this.$w), this.$w(), Laya.timer.frameLoop(1, this, this.$w);
    }, $J.prototype.$w = function () {
      this.txtTip.y -= this.$tJ, this.$tJ *= 1.1, this.txtTip.y <= 590 && (this.txtTip.visible = !1, Laya.timer.clear(this, this.$w));
    }, $J;
  }(ui.$f), $h.SelectServerPanel = $f;
}(modules || (modules = {}));var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.$n.AuthorizationPanel,
    LoadingPanel = modules.$n.LoadingPanel,
    SelectServerPanel = modules.$n.SelectServerPanel,
    ServerLoading = function () {
  function $S($J) {
    this.m_loadingRes = ["ttdt/t13a.png", "ttdt/t15a.png", "ttdt/t14a.png", "ttdt/t16a.png", "ttdt/t17a.png", "ttdt/t18a.png", "ttdt/t19a.png", "ttdt/t20a.png", "tft/t1c.png", "tft/t2c.png", "tft/t3c.png", "tft/t4c.png", "tft/t5c.png", "ttdt/t3a.jpg", "ttdt/t12a.jpg", "ttdt/t1a.png", "ttdt/t2a.png", "ttdt/t4a.jpg", "ttdt/t6a.jpg", "ttdt/t8a.jpg", "ttdt/t10a.jpg", "ttdt/t5a.jpg", "ttdt/t7a.jpg", "ttdt/t9a.jpg", "ttdt/t11a.jpg"], this.D$H$45 = ["ttlgrtt/t10b.png", "ttlgrtt/t11b.png", "ttlgrtt/t12b.png", "ttlgrtt/t13b.png", "ttlgrtt/t14b.png", "ttlgrtt/t15b.png", "ttlgrtt/t16b.png", "ttlgrtt/t17b.png", "ttlgrtt/t18b.png", "ttlgrtt/t19b.png", "ttlgrtt/t20b.png", "ttlgrtt/t21b.png", "ttlgrtt/t2b.jpg", "ttlgrtt/t3b.jpg", "ttlgrtt/t4b.jpg", "ttlgrtt/t5b.jpg", "ttlgrtt/t6b.jpg", "ttlgrtt/t1b.png", "ttlgrtt/t8b.png", "ttlgrtt/t9b.png", "ttlgrtt/t24b.png", "ttlgrtt/t25b.png", "ttlgrtt/t27b.png", "ttlgrtt/t29b.png", "ttlgrtt/t28b.png", "ttlgrtt/t123b.png", "ttlgrtt/t199b.png"], this.copyRightUrl = "ttlgrtt/t1b.png", this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.$cJ = !1, this.$aJ = "", $S.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var $h = Laya.AtlasResourceManager;$h.maxTextureCount = 6, $h.atlasTextureWidth = $h.atlasTextureHeight = 1024, $h._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.$BJ.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } }, "t28b.png": { frame: { h: 25, idx: 0, w: 25, x: 444, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 2 } }, "t29b.png": { frame: { h: 27, idx: 0, w: 26, x: 470, y: 146 }, sourceSize: { h: 27, w: 26 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = $S.instance.D$H5$, Browser.window.imgMgrLoad = $S.instance.D$H5$, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.$BJ();
  }return $S.prototype.D$Q$45 = function ($J) {
    $S.instance.m_layer.visible = $J;
  }, $S.prototype.D$H45$Q = function () {
    $S.instance.m_author || ($S.instance.m_author = new AuthorizationPanel()), $S.instance.m_author.parent || $S.instance.m_layer.addChild($S.instance.m_author), $S.instance.$VJ();
  }, $S.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, $S.prototype.D$H$45Q = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.D$H$45, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.D$$45Q(), Browser.window.D$$5Q4();
    })));
  }, $S.prototype.$CJ = function () {
    $S.instance.m_server || ($S.instance.m_server = new SelectServerPanel(this.copyRightUrl)), $S.instance.m_server.parent || $S.instance.m_layer.addChild($S.instance.m_server), $S.instance.$VJ();
  }, $S.prototype.openJumpView = function ($J, $h, $f, $n) {
    void 0 === $n && ($n = !1), this.$CJ(), $S.instance.m_server.openJumpView($J, $h, $f, $n);
  }, $S.prototype.openJumpTipsBtn = function ($J, $h, $f, $n, $L) {
    this.$CJ(), $S.instance.m_server.showAgeTipsBtn($J, $h, $f, $n, $L);
  }, $S.prototype.getCertificatePng = function () {
    window.sdkInitRes = window.sdkInitRes || {};var $J = "ttlgrtt/t123b.png",
        $h = "ttlgrtt/t1b.png";return 1 == sdkInitRes.develop ? 0 == (D$5$.develop_certificate_pkg || 0) ? $J : $h : 0 == D$5$.release_certificate_pkg ? $J : $h;
  }, $S.prototype.openServer = function ($J, $h, $f) {
    var $n = this;this.copyRightUrl = $f || this.getCertificatePng();for (var $L = function () {
      $n.$CJ(), $J && $h && $J.call($h);
    }, $T = !0, $k = 0, $u = this.D$H$45; $k < $u.length; $k++) {
      var $S = $u[$k];if (null == Laya.Loader.getRes($S)) {
        $T = !1;break;
      }
    }$T ? $L() : Laya.loader.load(this.D$H$45, Handler.create(this, $L));
  }, $S.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, $S.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.D$$45Q(), Browser.window.D$$5Q4();
    })));
  }, $S.prototype.openLoading = function ($J, $h) {
    void 0 === $J && ($J = 0), $h = $h || this.getCertificatePng(), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      $S.instance.m_loading || ($S.instance.m_loading = new LoadingPanel($J, $h)), $S.instance.m_loading.parent || $S.instance.m_layer.addChild($S.instance.m_loading), $S.instance.$VJ();
    }));
  }, $S.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var $J = 0, $h = this.D$H$45; $J < $h.length; $J++) {
      var $f = $h[$J];Laya.Loader.clearCache($S.instance, $f), Laya.Loader.clearRes($f, !0);
    }for (var $n = 0, $L = this.m_loadingRes; $n < $L.length; $n++) {
      $f = $L[$n];Laya.Loader.clearCache($S.instance, $f), Laya.Loader.clearRes($f, !0);
    }this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, $S.prototype.D$H$5 = function () {
    this.m_loading && this.m_loading.parent && $S.instance.m_loading.showGetBtn();
  }, $S.prototype.enterDefaultServer = function () {
    var $J = Browser.window.D$5$.selectedServer;this.$cJ || -1 == $J.status || 0 == $J.status || (this.$cJ = !0, Browser.window.D$5$.selectedServer = $J, D$$Q45(0, $J.server_id));
  }, $S.prototype.sendRecord = function () {
    var $J = "";$J += "newRegister=" + Browser.window.D$5$.newRegister, $J += ", isPrelodServer=" + this.m_isPrelodServer, $J += ", SelectServerPanel=" + (null != $S.instance.m_server), $J += ", isPrelodLoading=" + this.m_isPrelodLoading, $J += ", LoadingPanel=" + (null != $S.instance.m_loading), $J += ", resMgrLoad=" + (Browser.window.resMgrLoad == $S.instance.D$H5$), $J += ", imgMgrLoad=" + (Browser.window.imgMgrLoad == $S.instance.D$H5$), $J += ", errUrls=" + $S.instance.$aJ;for (var $h = 0, $f = this.D$H$45; $h < $f.length; $h++) {
      $J += ", " + ($T = $f[$h]) + "=" + (null != Laya.Loader.getRes($T));
    }for (var $n = 0, $L = this.m_loadingRes; $n < $L.length; $n++) {
      var $T;$J += ", " + ($T = $L[$n]) + "=" + (null != Laya.Loader.getRes($T));
    }var $k = Browser.window.D$5$.selectedServer;$k && ($J += ", server_status=" + $k.status, $J += ", server_id=" + $k.server_id, $J += ", server_name=" + $k.server_name);var $u = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: $J });console.error($u), this.$eJ && this.$eJ == $J || (this.$eJ = $J, D$5Q$($u));
  }, $S.prototype.$HJ = function () {
    var $J = Laya.stage,
        $h = Math.floor($J.width),
        $f = Math.floor($J.height);$f / $h < 1.7777778 ? (this.viewW = Math.floor($h / ($f / 1280)), this.viewH = 1280, this.viewS = $f / 1280) : (this.viewW = 720, this.viewH = Math.floor($f / ($h / 720)), this.viewS = $h / 720);var $n = Math.floor($J.width),
        $L = Math.floor($J.height);$L / $n < 1.7777778 ? (this.viewW = Math.floor($n / ($L / 1280)), this.viewH = 1280, this.viewS = $L / 1280) : (this.viewW = 720, this.viewH = Math.floor($L / ($n / 720)), this.viewS = $n / 720), this.$VJ();
  }, $S.prototype.$VJ = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, $S.prototype.$BJ = function () {
    if (Input.isInputting && Browser.onMobile) {
      var $J = parseInt(Input.inputContainer.style.top.replace("px", "")),
          $h = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS,
          $f = Browser.clientWidth / Render.canvas.width;return 0 < ($J = Browser.clientHeight - $h * $f - $J) && ($J = 0), void (Browser.container.style.top = $J + "px");
    }Browser.container.style.top = "0px";var $n = Math.floor(Browser.width),
        $L = Math.floor(Browser.height);$n = $n + 1 & 2147483646, $L = $L + 1 & 2147483646;var $T = Laya.stage;3 == ENV ? ($T.scaleMode = Laya.Stage.SCALE_NOSCALE, $T.width = $n, $T.height = $L) : $L < $n ? ($T.scaleMode = Laya.Stage.SCALE_NOSCALE, $T.width = $n, $T.height = $L) : ($T.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, $T.width = 840, $T.height = Math.floor($L / ($n / 840)) + 1 & 2147483646), this.$HJ();
  }, $S.prototype.D$H5$ = function ($J, $h) {
    function $f() {
      $n.onload = null, $n.onerror = null;
    }var $n,
        $L = $J;($n = new Browser.window.Image()).onload = function () {
      $f(), $h($L, 200, $n);
    }, $n.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", $L), $S.instance.$aJ += $L + "|", $f(), $h($L, 404, null);
    }, $n.src = $L, -1 == $S.instance.D$H$45.indexOf($L) && -1 == $S.instance.m_loadingRes.indexOf($L) || Laya.Loader.keepCache($S.instance, $L);
  }, $S.prototype.$bJ = function ($J, $h) {
    return -1 != $J.indexOf($h, $J.length - $h.length);
  }, $S;
}();!function ($J) {
  var $h, $f;$h = $J.$n || ($J.$n = {}), $f = function ($h) {
    function $J() {
      var $J = $h.call(this) || this;return $J.$vJ = "#72441d", $J.$$J = "#263d7d", $J.width = 274, $J.height = 59, $J.$MJ = new Laya.Image(), $J.addChild($J.$MJ), $J.$XJ = new Laya.Label(), $J.$XJ.fontSize = 30, $J.$XJ.color = $J.$$J, $J.addChild($J.$XJ), $J.$XJ.centerX = 0, $J.$XJ.centerY = 0, $J;
    }return __extends($J, $h), $J.prototype.initialize = function () {
      $h.prototype.initialize.call(this), this.$Q = Browser.window.D$5$;this.$Q.loadingType;this.addEvt();
    }, Object.defineProperty($J.prototype, "dataSource", { set: function ($J) {
        $J && this.setData($J);
      }, enumerable: !0, configurable: !0 }), $J.prototype.setData = function ($J) {
      this.$wJ = $J[0], this.$EJ = $J[1], this.$XJ.text = this.$wJ.title, this.$XJ.color = this.$EJ ? this.$vJ : this.$$J, this.$MJ.skin = this.$EJ ? "ttlgrtt/t25b.png" : "ttlgrtt/t24b.png";
    }, $J.prototype.destroy = function ($J) {
      void 0 === $J && ($J = !0), this.rmEvts(), $h.prototype.destroy.call(this, $J);
    }, $J.prototype.addEvt = function () {}, $J.prototype.rmEvts = function () {}, $J;
  }(Laya.View), $h.NoticeItem = $f;
}(modules || (modules = {})), function ($J) {
  var $h, $f;$h = $J.$n || ($J.$n = {}), $f = function ($h) {
    function $J() {
      var $J = $h.call(this) || this;return $J.$vJ = "#72441d", $J.$$J = "#263d7d", $J.width = 274, $J.height = 59, $J.$MJ = new Laya.Image(), $J.addChild($J.$MJ), $J.$XJ = new Laya.Label(), $J.$XJ.fontSize = 30, $J.$XJ.color = $J.$$J, $J.addChild($J.$XJ), $J.$XJ.centerX = 0, $J.$XJ.centerY = 0, $J;
    }return __extends($J, $h), $J.prototype.initialize = function () {
      $h.prototype.initialize.call(this), this.$Q = Browser.window.D$5$;this.$Q.loadingType;this.addEvt();
    }, Object.defineProperty($J.prototype, "dataSource", { set: function ($J) {
        $J && this.setData($J);
      }, enumerable: !0, configurable: !0 }), $J.prototype.setData = function ($J) {
      this.$NJ = $J[0], this.$EJ = $J[1], this.$XJ.text = this.$NJ, this.$XJ.color = this.$EJ ? this.$vJ : this.$$J, this.$MJ.skin = this.$EJ ? "ttlgrtt/t25b.png" : "ttlgrtt/t24b.png";
    }, $J.prototype.destroy = function ($J) {
      void 0 === $J && ($J = !0), this.rmEvts(), $h.prototype.destroy.call(this, $J);
    }, $J.prototype.addEvt = function () {}, $J.prototype.rmEvts = function () {}, $J;
  }(Laya.View), $h.PrivacyItem = $f;
}(modules || (modules = {})), function ($J) {
  var $h, $f;$h = $J.$n || ($J.$n = {}), $f = function ($h) {
    function $J() {
      var $J = $h.call(this) || this;return $J.width = 192, $J.height = 70, $J.$MJ = new Laya.Image(), $J.addChild($J.$MJ), $J.$zJ = new Laya.Label(), $J.$zJ.fontSize = 28, $J.$zJ.color = $J.$H, $J.addChild($J.$zJ), $J.$zJ.centerX = 0, $J.$zJ.centerY = 0, $J.$KJ = new Laya.Label(), $J.$KJ.fontSize = 22, $J.$KJ.color = $J.$H, $J.addChild($J.$KJ), $J.$KJ.centerX = 0, $J.$KJ.y = 11, $J.$Jh = new Laya.Label(), $J.$Jh.fontSize = 26, $J.$Jh.color = $J.$H, $J.addChild($J.$Jh), $J.$Jh.centerX = 0, $J.$Jh.y = 39, $J;
    }return __extends($J, $h), $J.prototype.initialize = function () {
      $h.prototype.initialize.call(this), this.$Q = Browser.window.D$5$;var $J = this.$Q.loadingType;this.$H = 1 == $J ? "#263d7d" : 2 == $J ? "#263d7d" : 3 == $J ? "#763042" : "#263d7d", this.addEvt();
    }, Object.defineProperty($J.prototype, "dataSource", { set: function ($J) {
        $J && this.setData($J);
      }, enumerable: !0, configurable: !0 }), $J.prototype.setData = function ($J) {
      this.$wJ = $J;var $h = this.$wJ.id,
          $f = this.$wJ.name;if (this.$zJ.visible = this.$KJ.visible = this.$Jh.visible = !1, -1 == $h || -2 == $h) this.$zJ.visible = !0, this.$zJ.text = $f;else {
        var $n = $f,
            $L = "1-10\u670d",
            $T = $f.match("[0-9]{1,}");$T && null != $T.index && ($n = $f.slice(0, $T.index), $L = $f.slice($T.index)), this.$KJ.visible = this.$Jh.visible = !0, this.$KJ.text = $n, this.$Jh.text = $L;
      }this.$MJ.skin = $J.select ? "ttlgrtt/t14b.png" : "ttlgrtt/t15b.png";
    }, $J.prototype.destroy = function ($J) {
      void 0 === $J && ($J = !0), this.rmEvts(), $h.prototype.destroy.call(this, $J);
    }, $J.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, $J.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, $J.prototype.clkHdler = function () {
      this.$wJ && this.$wJ.callBack && this.$wJ.callBack(this.$wJ.index);
    }, $J;
  }(Laya.View), $h.SelectLeftListItem = $f;
}(modules || (modules = {})), function ($J) {
  var $h, $f;$h = $J.$n || ($J.$n = {}), $f = function ($h) {
    function $J() {
      var $J = $h.call(this) || this;return $J.width = 358, $J.height = 70, $J.$MJ = new Laya.Image("ttlgrtt/t16b.png"), $J.addChild($J.$MJ), $J.$MJ.graphics.drawRect(0, 0, $J.width, $J.height, "#00sasd"), $J.$hh = new Laya.Image(), $J.$hh.centerY = 0, $J.$hh.x = 7, $J.addChild($J.$hh), $J.$zJ = new Laya.Label(), $J.$zJ.fontSize = 24, $J.$zJ.color = $J.$H, $J.$zJ.x = 56, $J.$zJ.centerY = 0, $J.addChild($J.$zJ), $J.$fh = new Laya.Label(), $J.$fh.fontSize = 24, $J.$fh.color = $J.$H, $J.$fh.x = 246, $J.$fh.centerY = 0, $J.addChild($J.$fh), $J.$nh = new Laya.Image(), $J.$nh.top = 0, $J.$nh.right = 0, $J.addChild($J.$nh), $J.$Lh = new Laya.Label(), $J.$Lh.fontSize = 20, $J.$Lh.color = "#ffffff", $J.$Lh.x = 225, $J.$Lh.y = 46, $J.addChild($J.$Lh), $J;
    }return __extends($J, $h), $J.prototype.initialize = function () {
      $h.prototype.initialize.call(this), this.$Q = Browser.window.D$5$;var $J = this.$Q.loadingType;this.$H = 1 == $J ? "#34267d" : 2 == $J ? "#34267d" : 3 == $J ? "#763042" : "#34267d", this.addEvt();
    }, Object.defineProperty($J.prototype, "dataSource", { set: function ($J) {
        $J && this.setData($J);
      }, enumerable: !0, configurable: !0 }), $J.prototype.setData = function ($J) {
      this.$wJ = $J;var $h = this.$wJ.status,
          $f = this.$wJ.server_name;this.$hh.skin = this.getStatusSrc(this.$wJ), this.$zJ.color = -1 === $h ? "#d50000" : 0 === $h ? "#49575a" : this.$H, this.$zJ.text = $f, this.$fh.text = -1 === $h ? "\u7ef4\u62a4\u4e2d" : 0 === $h ? "\u672a\u5f00\u670d" : "\u5df2\u5f00\u670d";var $n = 1 == this.$wJ.is_recommend || 3 == this.$wJ.is_recommend;(this.$nh.visible = $n) && (this.$nh.skin = "ttlgrtt/t199b.png"), this.$Lh.text = -1 == this.$wJ.status && this.$wJ.maintain_time ? this.$wJ.maintain_time : "";
    }, $J.prototype.destroy = function ($J) {
      void 0 === $J && ($J = !0), this.rmEvts(), $h.prototype.destroy.call(this, $J);
    }, $J.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, $J.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, $J.prototype.clkHdler = function () {
      this.$wJ && this.$wJ.callBack && this.$wJ.callBack(this.$wJ);
    }, $J.prototype.getStatusSrc = function ($J) {
      var $h = $J.status,
          $f = $J.is_recommend,
          $n = "ttlgrtt/t19b.png";return 1 !== $h && 2 !== $h || 1 !== $f && 3 !== $f ? 1 !== $h && 2 !== $h || 2 !== $f ? -1 !== $h && 0 !== $h || ($n = "ttlgrtt/t20b.png") : $n = "ttlgrtt/t19b.png" : $n = "ttlgrtt/t18b.png", $n;
    }, $J;
  }(Laya.View), $h.SelectRightListItem = $f;
}(modules || (modules = {})), window.ServerLoading = ServerLoading;