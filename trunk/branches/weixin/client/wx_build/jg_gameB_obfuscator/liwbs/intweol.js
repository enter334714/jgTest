"use strict";
var $c = wx.$b;
var ui,
    __extends = this && this.__extends || function () {
  var c$f = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (c$a, c$b) {
    c$a.__proto__ = c$b;
  } || function (c$a, c$b) {
    for (var c$e in c$b) c$b.hasOwnProperty(c$e) && (c$a[c$e] = c$b[c$e]);
  };return function (c$a, c$b) {
    function c$e() {
      this.constructor = c$a;
    }c$f(c$a, c$b), c$a.prototype = null === c$b ? Object.create(c$b) : (c$e.prototype = c$b.prototype, new c$e());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (c$e) {
  var c$a = function (c$a) {
    function c$b() {
      return c$a.call(this) || this;
    }return __extends(c$b, c$a), c$b.prototype.createChildren = function () {
      c$a.prototype.createChildren.call(this), this.createView(c$e.c$a.uiView);
    }, c$b.uiView = { type: $c[382], props: { width: 720, name: $c[383], height: 1280 }, child: [{ type: $c[384], props: { width: 720, var: $c[385], skin: $c[386], name: $c[387], height: 1280, centerY: 0, centerX: 0 } }, { type: $c[388], props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: $c[389], props: { width: 720, var: $c[390], top: -139, skin: $c[391], height: 139, centerX: 0, anchorY: 1 } }, { type: $c[392], props: { width: 720, var: $c[393], top: 1280, skin: $c[394], height: 139, centerX: 0 } }, { type: $c[395], props: { x: -220, width: 220, var: $c[396], skin: $c[397], left: -220, height: 1280, centerY: 0 } }, { type: $c[398], props: { width: 220, var: $c[399], skin: $c[400], left: 720, height: 1280, centerY: 0 } }] }] }, c$b;
  }(View);c$e.c$a = c$a;
}(ui || (ui = {})), function (c$e) {
  var c$a = function (c$a) {
    function c$b() {
      return c$a.call(this) || this;
    }return __extends(c$b, c$a), c$b.prototype.createChildren = function () {
      c$a.prototype.createChildren.call(this), this.createView(c$e.c$b.uiView);
    }, c$b.uiView = { type: $c[401], props: { width: 720, name: $c[402], height: 1280 }, child: [{ type: $c[403], props: { width: 720, var: $c[404], name: $c[405], height: 1280, centerY: 0, centerX: 0 } }, { type: $c[406], props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: $c[407], props: { var: $c[408], centerX: 0, bottom: 1280, anchorY: 1 } }, { type: $c[409], props: { var: $c[410], top: 1280, centerX: 0 } }, { type: $c[411], props: { var: $c[412], right: 720, pivotX: 1, centerY: 0 } }, { type: $c[413], props: { var: $c[414], left: 720, centerY: 0 } }] }, { type: $c[415], props: { var: $c[416], skin: $c[417], centerX: 0, bottom: 10 } }, { type: $c[418], props: { y: 963, x: 0, width: 720, var: $c[419], name: $c[420], height: 130 }, child: [{ type: $c[421], props: { y: 46, x: 62, width: 596, var: $c[422], skin: $c[423], height: 27, centerX: 0 } }, { type: $c[424], props: { y: 49, x: 64, width: 590, var: $c[425], skin: $c[426], height: 21 } }, { type: $c[427], props: { y: 55, x: 507, width: 208, var: $c[428], skin: $c[429], height: 11 } }, { type: $c[430], props: { y: 6, x: 628, width: 39, var: $c[431], skin: $c[432], height: 116 } }, { type: $c[433], props: { y: 48, x: 293, width: 134, var: $c[434], valign: $c[435], text: $c[436], strokeColor: $c[437], stroke: 3, height: 24, fontSize: 24, color: $c[438], centerX: 0, bold: !1, align: $c[439] } }] }, { type: $c[440], props: { y: 1065, x: 0, width: 720, var: $c[441], name: $c[442], height: 17 }, child: [{ type: $c[443], props: { y: 0, x: 307, var: $c[444], skin: $c[445], centerX: -45 } }, { type: $c[446], props: { y: 0, x: 337, var: $c[447], skin: $c[448], centerX: -15 } }, { type: $c[449], props: { y: 0, x: 367, var: $c[450], skin: $c[451], centerX: 15 } }, { type: $c[452], props: { y: 0, x: 397, var: $c[453], skin: $c[454], centerX: 45 } }] }, { type: $c[455], props: { y: 790, x: 55, visible: !1, var: $c[456], stateNum: 1, skin: $c[457], name: $c[458], labelSize: 30, labelFont: $c[459], labelColors: $c[460] }, child: [{ type: $c[461], props: { y: 155, x: 146, width: 323, var: $c[462], text: $c[463], name: $c[464], height: 30, fontSize: 30, color: $c[465], align: $c[466] } }] }, { type: $c[467], props: { y: 1107, width: 500, var: $c[468], valign: $c[469], text: $c[470], height: 26, fontSize: 26, color: $c[471], centerX: 0, bold: !1, align: $c[472] } }, { type: $c[473], props: { y: 10, x: 10, width: 342, var: $c[474], valign: $c[475], top: 20, text: $c[476], right: 20, height: 32, fontSize: 24, color: $c[477], bold: !1, align: $c[478] } }] }, c$b;
  }(View);c$e.c$b = c$a;
}(ui || (ui = {})), function (c$e) {
  var c$a = function (c$a) {
    function c$b() {
      return c$a.call(this) || this;
    }return __extends(c$b, c$a), c$b.prototype.createChildren = function () {
      View.regComponent($c[479], laya.display.Text), c$a.prototype.createChildren.call(this), this.createView(c$e.c$e.uiView);
    }, c$b.uiView = { type: $c[480], props: { width: 720, name: $c[481], height: 1280 }, child: [{ type: $c[482], props: { width: 720, var: $c[483], skin: $c[484], name: $c[485], height: 1280, centerY: 0, centerX: 0 } }, { type: $c[486], props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: $c[487], props: { width: 720, var: $c[488], top: -139, skin: $c[489], height: 139, centerX: 0 } }, { type: $c[490], props: { width: 720, var: $c[491], top: 1280, skin: $c[492], height: 139, centerX: 0 } }, { type: $c[493], props: { width: 220, var: $c[494], skin: $c[495], left: -220, height: 1280, centerY: 0 } }, { type: $c[496], props: { width: 220, var: $c[497], skin: $c[498], left: 720, height: 1280, centerY: 0 } }] }, { type: $c[499], props: { y: 845, var: $c[500], skin: $c[501], centerX: 0 } }, { type: $c[502], props: { y: 930, x: 162, var: $c[503], skin: $c[504] } }, { type: $c[505], props: { var: $c[506], skin: $c[507], centerX: 0, bottom: 10 } }, { type: $c[508], props: { y: 1015, var: $c[509], stateNum: 1, skin: $c[510], name: $c[511], centerX: 0 } }, { type: $c[512], props: { y: 932, x: 521, var: $c[513], valign: $c[514], text: $c[515], height: 32, fontSize: 30, color: $c[516], bold: !1, align: $c[517] } }, { type: $c[518], props: { y: 932, width: 342, var: $c[519], valign: $c[520], text: $c[521], height: 32, fontSize: 30, color: $c[522], centerX: 0, bold: !1, align: $c[523] } }, { type: $c[524], props: { width: 342, var: $c[525], valign: $c[526], top: 20, text: $c[527], right: 20, height: 32, fontSize: 24, color: $c[528], bold: !1, align: $c[529] } }, { type: $c[530], props: { y: 127, x: 593.5, var: $c[531], skin: $c[532] } }, { type: $c[533], props: { y: 71, x: -2, visible: !1, var: $c[534], skin: $c[535], centerY: 0, centerX: 0 }, child: [{ type: $c[536], props: { y: 36.5, x: 616, var: $c[537], skin: $c[538] } }, { type: $c[539], props: { y: 72, x: 216, width: 234, var: $c[540], valign: $c[541], text: $c[542], height: 35, fontSize: 30, color: $c[543], bold: !1, align: $c[544] } }, { type: $c[545], props: { y: 142, x: 61, wordWrap: !0, width: 545, var: $c[546], valign: $c[547], overflow: $c[548], mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: $c[549] } }] }, { type: $c[550], props: { visible: !1, var: $c[551], skin: $c[552], centerY: 0, centerX: 0 }, child: [{ type: $c[553], props: { y: 117, x: 61, width: 200, var: $c[554], height: 905 } }, { type: $c[555], props: { y: 117, x: 293, width: 358, var: $c[556], height: 905 } }, { type: $c[557], props: { y: 13, x: 642, var: $c[558], skin: $c[559] } }] }] }, c$b;
  }(View);c$e.c$e = c$a;
}(ui || (ui = {})), function (c$a) {
  var c$b, c$e;c$b = c$a.c$f || (c$a.c$f = {}), c$e = function (c$b) {
    function c$a() {
      return c$b.call(this) || this;
    }return __extends(c$a, c$b), c$a.prototype.initialize = function () {
      c$b.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, B_BDC(), this.addEvt(), this.onOpened();
    }, c$a.prototype.addEvt = function () {}, c$a.prototype.rmEvts = function () {}, c$a.prototype.onOpened = function () {
      ServerLoading.instance.B_IJK(), ServerLoading.instance.preloadLoading();
    }, c$a.prototype.destroy = function (c$a) {
      void 0 === c$a && (c$a = !0), this.rmEvts(), c$b.prototype.destroy.call(this, c$a);
    }, c$a;
  }(ui.c$a), c$b.AuthorizationPanel = c$e;
}(modules || (modules = {})), function (c$a) {
  var c$b, c$e, c$f, c$g, c$i, c$h;c$b = c$a.c$g || (c$a.c$g = {}), c$e = Laya.Event, c$f = Laya.Image, c$g = Laya.Component, c$i = Laya.Loader, c$h = function (c$b) {
    function c$k() {
      var c$a = c$b.call(this) || this;return c$a.c$h = new c$f(), c$a.addChild(c$a.c$h), c$a.c$i = null, c$a.c$j = [], c$a.c$k = !1, c$a.c$l = 0, c$a.c$m = !0, c$a.c$n = 6, c$a.c$o = !1, c$a.on(c$e.DISPLAY, c$a, c$a.c$p), c$a.on(c$e.UNDISPLAY, c$a, c$a.c$q), c$a;
    }return __extends(c$k, c$b), c$k.create = function (c$a, c$b, c$e, c$f, c$g, c$h, c$i) {
      void 0 === c$f && (c$f = 0), void 0 === c$g && (c$g = 6), void 0 === c$h && (c$h = !0), void 0 === c$i && (c$i = !1);var c$j = new c$k();return c$j.skin(c$b, c$e, c$f), c$j.durFrm = c$g, c$j.loop = c$h, c$j.atHide = c$i, c$a && c$a.addChild(c$j), c$j;
    }, c$k.play = function (c$a) {
      c$a && (c$a.visible = !0, c$a.play());
    }, c$k.stop = function (c$a) {
      c$a && (c$a.visible = !1, c$a.stop());
    }, c$k.prototype.destroy = function (c$a) {
      Laya.timer.clear(this, this.c$r), this.off(c$e.DISPLAY, this, this.c$p), this.off(c$e.UNDISPLAY, this, this.c$q), c$b.prototype.destroy.call(this, c$a);
    }, c$k.prototype.c$p = function () {}, c$k.prototype.c$q = function () {}, c$k.prototype.skin = function (c$a, c$b, c$e) {
      if (this.c$i != c$a) {
        this.c$i = c$a, this.c$j = [];for (var c$f = 0, c$g = c$e; c$g <= c$b; c$g++) this.c$j[c$f++] = c$a + $c[560] + c$g + $c[561];var c$h = c$i.getRes(this.c$j[0]);c$h && (this.width = c$h.sourceWidth, this.height = c$h.sourceHeight), this.c$r();
      }
    }, Object.defineProperty(c$k.prototype, $c[562], { get: function () {
        return this.c$o;
      }, set: function (c$a) {
        this.c$o = c$a;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(c$k.prototype, $c[563], { set: function (c$a) {
        this.c$n != c$a && (this.c$n = c$a, this.c$k && (Laya.timer.clear(this, this.c$r), Laya.timer.loop(this.c$n * (1e3 / 60), this, this.c$r)));
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(c$k.prototype, $c[564], { set: function (c$a) {
        this.c$m = c$a;
      }, enumerable: !0, configurable: !0 }), c$k.prototype.play = function () {
      this.c$k && this.stop(), this.c$k = !0, this.c$l = 0, Laya.timer.loop(this.c$n * (1e3 / 60), this, this.c$r), this.c$r();
    }, c$k.prototype.stop = function () {
      this.c$k = !1, this.c$l = 0, this.c$r(), Laya.timer.clear(this, this.c$r);
    }, c$k.prototype.pause = function () {
      this.c$k && (this.c$k = !1, Laya.timer.clear(this, this.c$r));
    }, c$k.prototype.resume = function () {
      this.c$k || (this.c$k = !0, Laya.timer.loop(this.c$n * (1e3 / 60), this, this.c$r), this.c$r());
    }, Object.defineProperty(c$k.prototype, $c[565], { get: function () {
        return this.c$k;
      }, enumerable: !0, configurable: !0 }), c$k.prototype.c$r = function () {
      this.c$j && 0 != this.c$j.length && (this.c$h.skin = this.c$j[this.c$l], this.c$k && (this.c$l++, this.c$l == this.c$j.length && (this.c$m ? this.c$l = 0 : (Laya.timer.clear(this, this.c$r), this.c$k = !1, this.c$o && (this.visible = !1), this.event(c$e.COMPLETE)))));
    }, c$k;
  }(c$g), c$b.PanelEff = c$h;
}(modules || (modules = {})), function (c$a) {
  var c$b, c$f, c$e;c$b = c$a.c$f || (c$a.c$f = {}), c$f = c$a.c$g.PanelEff, c$e = function (c$e) {
    function c$a(c$a) {
      void 0 === c$a && (c$a = 0);var c$b = c$e.call(this) || this;return c$b.c$s = { bgImgSkin: $c[566], topImgSkin: $c[567], btmImgSkin: $c[568], leftImgSkin: $c[569], rightImgSkin: $c[570], loadingBarBgSkin: $c[571], copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, c$b.c$t = { bgImgSkin: $c[572], topImgSkin: $c[573], btmImgSkin: $c[574], leftImgSkin: $c[575], rightImgSkin: $c[576], loadingBarBgSkin: $c[577], copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, c$b.c$u = 0, c$b.c$v(1 == c$a ? c$b.c$t : c$b.c$s), c$b;
    }return __extends(c$a, c$e), c$a.prototype.initialize = function () {
      if (c$e.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.c$w = Browser.window.B_BC, this.centerX = 0, this.centerY = 0, this.c$w) {
        var c$a = this.c$w.loadingType;this.loadingTips.color = 1 == c$a ? $c[578] : 2 == c$a ? $c[579] : $c[580];
      }this.c$x = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, B_BDC(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
    }, c$a.prototype.B_CBD = function (c$a) {
      var c$b = this;if (-1 === c$a) return c$b.c$u = 0, Laya.timer.clear(this, this.B_CBD), void Laya.timer.frameLoop(1, this, this.B_CBD);if (-2 !== c$a) {
        c$b.c$u < .9 ? c$b.c$u += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : c$b.c$u < 1 && (c$b.c$u += 1e-4), .9999 < c$b.c$u && (c$b.c$u = .9999, Laya.timer.clear(this, this.B_CBD), Laya.timer.once(3e3, this, function () {
          .9 < c$b.c$u && B_CBD(-1);
        }));var c$e = c$b.c$u,
            c$f = 590 * c$e;c$b.c$u = c$b.c$u > c$e ? c$b.c$u : c$e, c$b.loadingBar.width = c$f;var c$g = c$b.loadingBar.x + c$f;c$b.loadingImg2.x = c$g - 15, 364 <= c$g ? (c$b.loadingImg1.visible = !0, c$b.loadingImg1.x = c$g - 202) : c$b.loadingImg1.visible = !1, c$b.percentageTips.text = (100 * c$e >> 0) + $c[581], c$b.c$u < .9999 && Laya.timer.frameLoop(1, this, this.B_CBD);
      } else Laya.timer.clear(this, this.B_CBD);
    }, c$a.prototype.B_CDB = function (c$a, c$b, c$e) {
      1 < c$a && (c$a = 1);var c$f = 590 * c$a;this.c$u = this.c$u > c$a ? this.c$u : c$a, this.loadingBar.width = c$f;var c$g = this.loadingBar.x + c$f;this.loadingImg2.x = c$g - 15, 364 <= c$g ? (this.loadingImg1.visible = !0, this.loadingImg1.x = c$g - 202) : this.loadingImg1.visible = !1, this.percentageTips.text = (100 * c$a >> 0) + $c[582], this.loadingTips.text = c$b;for (var c$h = c$e - 1, c$i = 0; c$i < this.c$x.length; c$i++) this.c$x[c$i].skin = c$i < c$h ? $c[583] : c$h === c$i ? $c[584] : $c[585];
    }, c$a.prototype.onOpened = function () {
      this.B_CDB(.1, $c[586], 1), this.B_CBD(-1), Browser.window.B_CBD = this.B_CBD.bind(this), Browser.window.B_CDB = this.B_CDB.bind(this), this.versionTxt.text = $c[587] + this.c$w.lastVersion + $c[588] + this.c$w.wxVersion, this.showGetBtn();
    }, c$a.prototype.close = function (c$a) {
      this.resetWinFun(), Laya.timer.clear(this, this.B_CBD), Laya.timer.clear(this, this.c$y), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.c$z);
    }, c$a.prototype.resetWinFun = function () {
      Browser.window.B_CBD = function () {}, Browser.window.B_CDB = function () {};
    }, c$a.prototype.destroy = function (c$a) {
      void 0 === c$a && (c$a = !0), this.resetWinFun(), c$e.prototype.destroy.call(this, c$a);
    }, c$a.prototype.showGetBtn = function () {
      this.c$w.showGetBtn && 1 == this.c$w.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = $c[589], this.getTipsBtn.on(Laya.Event.CLICK, this, this.c$z), this.c$A(), this.c$B(!0));
    }, c$a.prototype.c$z = function () {
      this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = $c[590], this.c$C(), this.c$B(!1));
    }, c$a.prototype.c$v = function (c$a) {
      this.bgImg.skin = c$a.bgImgSkin, this.topImg.skin = c$a.topImgSkin, this.btmImg.skin = c$a.btmImgSkin, this.leftImg.skin = c$a.leftImgSkin, this.rightImg.skin = c$a.rightImgSkin, this.copyRightImg.bottom = c$a.copyRightImgBottom, this.processBox1.y = c$a.processBox1Y, this.processBox2.y = c$a.processBox2Y, this.loadingBarBg.skin = c$a.loadingBarBgSkin, this.loadingTips.fontSize = c$a.loadingTipsSize, this.getTipsBtn.visible = this.c$w.showGetBtn && 1 == this.c$w.showGetBtn, this.getTipsBtn.visible ? this.c$A() : this.c$C(), this.c$B(this.getTipsBtn.visible);
    }, c$a.prototype.c$A = function () {
      this.c$D || (this.c$D = c$f.create(this.getTipsBtn, $c[591], 4, 0, 12), this.c$D.pos(161, 106), this.c$D.scale(1.14, 1.15)), c$f.play(this.c$D);
    }, c$a.prototype.c$C = function () {
      this.c$D && c$f.stop(this.c$D);
    }, c$a.prototype.c$B = function (c$a) {
      Laya.timer.clear(this, this.c$y), c$a ? (this.c$E = 9, this.txtGetTm.visible = !0, this.c$y(), Laya.timer.loop(1e3, this, this.c$y)) : this.txtGetTm.visible = !1;
    }, c$a.prototype.c$y = function () {
      0 < this.c$E ? (this.txtGetTm.text = $c[592] + this.c$E + $c[593], this.c$E--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.c$y), this.c$z());
    }, c$a;
  }(ui.c$b), c$b.LoadingPanel = c$e;
}(modules || (modules = {})), function (c$a) {
  var c$e, c$f, c$g, c$b;c$e = c$a.c$f || (c$a.c$f = {}), c$f = Laya.List, c$g = Laya.Event, c$b = function (c$b) {
    function c$a() {
      var c$a = c$b.call(this) || this;return c$a.c$F = 0, c$a;
    }return __extends(c$a, c$b), c$a.prototype.initialize = function () {
      c$b.prototype.initialize.call(this), ServerLoading.instance.B_IJK(), this.centerX = 0, this.centerY = 0, this.c$w = Browser.window.B_BC, this.c$G = new c$f(), this.c$G.vScrollBarSkin = "", this.c$G.itemRender = c$e.SelectLeftListItem, this.c$G.top = 5, this.c$G.repeatX = 1, this.c$G.spaceY = 5, this.c$G.width = this.leftListBox.width, this.c$G.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.c$G), this.c$H = new c$f(), this.c$H.vScrollBarSkin = "", this.c$H.itemRender = c$e.SelectRightListItem, this.c$H.top = 5, this.c$H.repeatX = 1, this.c$H.spaceY = 5, this.c$H.width = this.rightListBox.width, this.c$H.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.c$H);var c$a = this.c$w.loadingType;this.c$I = 1 == c$a ? $c[594] : 2 == c$a ? $c[595] : 3 == c$a ? $c[596] : $c[597], this.noticeBtn.visible = !1, Browser.window.initPanel = this, B_BDC(), ServerLoading.instance.closeAuthor(), this.addEvt(), this.onOpened();
    }, c$a.prototype.addEvt = function () {
      this.enterBtn.on(Laya.Event.CLICK, this, this.c$J), this.selectServer.on(Laya.Event.CLICK, this, this.c$K), this.selectServer.on(Laya.Event.CLICK, this, this.c$K), this.closeBg.on(Laya.Event.CLICK, this, this.c$L), this.noticeBtn.on(Laya.Event.CLICK, this, this.c$M), this.noticeClose.on(Laya.Event.CLICK, this, this.c$N), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.c$O);
    }, c$a.prototype.rmEvts = function () {
      this.enterBtn.off(Laya.Event.CLICK, this, this.c$J), this.selectServer.off(Laya.Event.CLICK, this, this.c$K), this.selectServer.off(Laya.Event.CLICK, this, this.c$K), this.closeBg.off(Laya.Event.CLICK, this, this.c$L), this.noticeBtn.off(Laya.Event.CLICK, this, this.c$M), this.noticeClose.off(Laya.Event.CLICK, this, this.c$N), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.c$O);
    }, c$a.prototype.onOpened = function () {
      this.c$P = this.c$w.selectedServer.server_id, this.c$Q(this.c$w.selectedServer), this.c$G.dataSource = this.c$w.groupList, this.c$K(), this.versionTxt.text = $c[598] + this.c$w.lastVersion + $c[599] + this.c$w.wxVersion, this.serverName.color = this.selServer.color = this.c$I;
    }, c$a.prototype.destroy = function (c$a) {
      void 0 === c$a && (c$a = !0), this.rmEvts(), this.c$G && (this.c$G.removeSelf(), this.c$G.destroy(), this.c$G = null), this.c$H && (this.c$H.removeSelf(), this.c$H.destroy(), this.c$H = null), c$b.prototype.destroy.call(this, c$a);
    }, c$a.prototype.c$L = function () {
      this.listBg.visible = !1;
    }, c$a.prototype.c$J = function () {
      this.c$R(this.c$w.selectedServer) && (Browser.window.B_BC.selectedServer = this.c$w.selectedServer, B_FH(0, this.c$w.selectedServer.server_id));
    }, c$a.prototype.c$M = function () {
      this.noticeBg.visible = !0, B_FGH(this.c$w.selectedServer.server_id, this.c$S.bind(this));
    }, c$a.prototype.c$N = function () {
      this.noticeBg.visible = !1;
    }, c$a.prototype.c$O = function () {
      this.c$F = this.noticeContent.mouseY, Laya.stage.on(c$g.MOUSE_MOVE, this, this.c$T), Laya.stage.on(c$g.MOUSE_UP, this, this.c$U), Laya.stage.on(c$g.MOUSE_OUT, this, this.c$U);
    }, c$a.prototype.c$T = function () {
      var c$a = this.c$F - this.noticeContent.mouseY;this.noticeContent.scrollY += c$a, this.c$F = this.noticeContent.mouseY;
    }, c$a.prototype.c$U = function () {
      Laya.stage.off(c$g.MOUSE_MOVE, this, this.c$T), Laya.stage.off(c$g.MOUSE_UP, this, this.c$U), Laya.stage.off(c$g.MOUSE_OUT, this, this.c$U);
    }, c$a.prototype.c$R = function (c$a) {
      return -1 == c$a.status ? (alert($c[600]), !1) : 0 != c$a.status || (alert($c[601]), !1);
    }, c$a.prototype.c$K = function () {
      this.c$w.hasGroupReq ? this.listBg.visible = !0 : (this.c$w.hasGroupReq = !0, B_FEG(0));
    }, c$a.prototype.preload = function () {}, c$a.prototype.getStatusSrc = function (c$a) {
      var c$b = "";return 2 === c$a ? c$b = $c[602] : 1 === c$a ? c$b = $c[603] : -1 !== c$a && 0 !== c$a || (c$b = $c[604]), c$b;
    }, c$a.prototype.c$Q = function (c$a) {
      this.serverName.text = -1 === c$a.status ? c$a.server_name + $c[605] : 0 === c$a.status ? c$a.server_name + $c[606] : c$a.server_name, this.serverName.color = -1 === c$a.status ? $c[607] : 0 === c$a.status ? $c[608] : this.c$I, this.hotImage.skin = this.getStatusSrc(c$a.status), this.c$w.cdn = c$a.cdn || "", this.c$w.selectedServer = c$a, this.noticeBtn.visible = !0;
    }, c$a.prototype.c$V = function (c$a) {
      this.showGroupList(c$a);
    }, c$a.prototype.c$W = function (c$a) {
      this.c$Q(c$a), this.listBg.visible = !1;
    }, c$a.prototype.c$S = function (c$a) {
      this.noticeContent.text = c$a.data.content ? c$a.data.content : "", this.noticeTitle.text = c$a.data.title ? c$a.data.title : $c[609];
    }, c$a.prototype.showGroupList = function (c$a) {
      if (void 0 === c$a && (c$a = 0), this.parent) {
        var c$b = this.c$w.groupList;if (c$b && 0 !== c$b.length) {
          for (var c$e = c$b.length, c$f = 0; c$f < c$e; c$f++) c$b[c$f].callBack = this.c$V.bind(this), c$b[c$f].select = c$f == c$a, c$b[c$f].index = c$f;var c$g = (this.c$G.array = c$b)[c$a].id;this.c$w.serverList[c$g] ? this.showServerList(c$g) : this.c$w.hasServerReq || (this.c$w.hasServerReq = !0, -1 == c$g ? B_GEF(0) : -2 == c$g ? B_JIK(0) : B_GH(0, c$g));
        }
      }
    }, c$a.prototype.showServerList = function (c$a) {
      if (this.parent && this.c$w.serverList[c$a]) {
        for (var c$b = this.c$w.serverList[c$a], c$e = c$b.length, c$f = 0; c$f < c$e; c$f++) c$b[c$f].callBack = this.c$W.bind(this);this.c$H.array = c$b;
      }
    }, c$a;
  }(ui.c$e), c$e.SelectServerPanel = c$b;
}(modules || (modules = {}));var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.c$f.AuthorizationPanel,
    LoadingPanel = modules.c$f.LoadingPanel,
    SelectServerPanel = modules.c$f.SelectServerPanel,
    ServerLoading = function () {
  function c$f(c$a) {
    this.B_JKI = [$c[610], $c[611], $c[612], $c[613], $c[614], $c[615]], this.B_KIJ = [$c[616], $c[617], $c[618], $c[619], $c[620], $c[621], $c[622], $c[623], $c[624]], this.B_KJI = [$c[625], $c[626]], this.B_KL = [$c[627], $c[628], $c[629], $c[630], $c[631], $c[632], $c[633]], this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, c$f.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var c$b = Laya.AtlasResourceManager;c$b.maxTextureCount = 4, c$b.atlasTextureWidth = c$b.atlasTextureHeight = 1024, c$b._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.c$X.bind(this)), c$a.B_HGI || (this.B_KIJ = []);var c$e = Laya.Loader.preLoadedMap;c$e[$c[634]] = c$a.B_HIG, c$e[$c[635]] = c$a.B_IGH, c$e[$c[636]] = c$a.B_IHG, c$e[$c[637]] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: $c[638], prefix: $c[639] } }, Browser.window.resMgrLoad = c$f.instance.B_LK, Browser.window.imgMgrLoad = c$f.instance.B_LK, this.m_layer = new Laya.Component(), this.m_layer.name = $c[640], Laya.stage.addChild(this.m_layer), this.c$X();
  }return c$f.prototype.B_BD = function (c$a) {
    c$f.instance.m_layer.visible = c$a;
  }, c$f.prototype.B_IJ = function () {
    c$f.instance.m_author || (c$f.instance.m_author = new AuthorizationPanel()), c$f.instance.m_author.parent || c$f.instance.m_layer.addChild(c$f.instance.m_author), c$f.instance.c$Y();
  }, c$f.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, c$f.prototype.B_IJK = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.B_KJI), Laya.loader.load(this.B_KL));
  }, c$f.prototype.openServer = function () {
    Laya.loader.load(this.B_KJI, Handler.create(this, function () {
      c$f.instance.m_server || (c$f.instance.m_server = new SelectServerPanel()), c$f.instance.m_server.parent || c$f.instance.m_layer.addChild(c$f.instance.m_server), c$f.instance.c$Y();
    }));
  }, c$f.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, c$f.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.B_JKI), this.B_KIJ && this.B_KIJ.length && Laya.loader.load(this.B_KIJ));
  }, c$f.prototype.openLoading = function (c$a) {
    void 0 === c$a && (c$a = 0);var c$b = 1 == c$a && this.B_KIJ.length ? this.B_KIJ : this.B_JKI;Laya.loader.load(c$b, Handler.create(this, function () {
      c$f.instance.m_loading || (c$f.instance.m_loading = new LoadingPanel(c$a)), c$f.instance.m_loading.parent || c$f.instance.m_layer.addChild(c$f.instance.m_loading), c$f.instance.c$Y();
    }));
  }, c$f.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var c$a = 0, c$b = this.B_KJI; c$a < c$b.length; c$a++) {
      var c$e = c$b[c$a];Laya.Loader.clearRes(c$e, !0);
    }for (var c$f = 0, c$g = this.B_KL; c$f < c$g.length; c$f++) {
      c$e = c$g[c$f];Laya.Loader.clearRes(c$e, !0);
    }for (var c$h = 0, c$i = this.B_JKI; c$h < c$i.length; c$h++) {
      c$e = c$i[c$h];Laya.Loader.clearRes(c$e, !0);
    }for (var c$j = 0, c$k = this.B_KIJ; c$j < c$k.length; c$j++) {
      c$e = c$k[c$j];Laya.Loader.clearRes(c$e, !0);
    }this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, c$f.prototype.B_JKL = function () {
    this.m_loading && this.m_loading.parent && c$f.instance.m_loading.showGetBtn();
  }, c$f.prototype.c$Z = function () {
    var c$a = Laya.stage,
        c$b = Math.floor(c$a.width),
        c$e = Math.floor(c$a.height);c$e / c$b < 1.7777778 ? (this.viewW = Math.floor(c$b / (c$e / 1280)), this.viewH = 1280, this.viewS = c$e / 1280) : (this.viewW = 720, this.viewH = Math.floor(c$e / (c$b / 720)), this.viewS = c$b / 720);var c$f = Math.floor(c$a.width),
        c$g = Math.floor(c$a.height);c$g / c$f < 1.7777778 ? (this.viewW = Math.floor(c$f / (c$g / 1280)), this.viewH = 1280, this.viewS = c$g / 1280) : (this.viewW = 720, this.viewH = Math.floor(c$g / (c$f / 720)), this.viewS = c$f / 720), this.c$Y();
  }, c$f.prototype.c$Y = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, c$f.prototype.c$X = function () {
    if (Input.isInputting && Browser.onMobile) {
      var c$a = parseInt(Input.inputContainer.style.top.replace($c[641], "")),
          c$b = parseInt(Input.inputElement.style.height.replace($c[642], "")) * this.viewS,
          c$e = Browser.clientWidth / Render.canvas.width;return 0 < (c$a = Browser.clientHeight - c$b * c$e - c$a) && (c$a = 0), void (Browser.container.style.top = c$a + $c[643]);
    }Browser.container.style.top = $c[644];var c$f = Math.floor(Browser.width),
        c$g = Math.floor(Browser.height);c$f = c$f + 1 & 2147483646, c$g = c$g + 1 & 2147483646;var c$h = Laya.stage;c$g < c$f ? (c$h.scaleMode = Laya.Stage.SCALE_NOSCALE, c$h.width = c$f, c$h.height = c$g) : (c$h.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, c$h.width = 840, c$h.height = Math.floor(c$g / (c$f / 840)) + 1 & 2147483646), this.c$Z();
  }, c$f.prototype.B_LK = function (c$a, c$b) {
    function c$e() {
      c$f.onload = null, c$f.onerror = null;
    }var c$f,
        c$g = c$a,
        c$h = c$a;c$h && 0 < c$h.indexOf($c[645]) || B_BC.cdn;(c$f = new Browser.window.Image()).onload = function () {
      c$e(), c$b(c$g, 200, c$f);
    }, c$f.onerror = function () {
      console.warn($c[646], c$g), c$e(), c$b(c$g, 404, null);
    }, c$f.src = c$g;
  }, c$f.prototype.c$$ = function (c$a, c$b, c$e, c$f) {
    var c$g = c$a.toLowerCase();c$e && (this.c$_(c$g, $c[647]) || this.c$_(c$g, $c[648])) && (c$e = DecodeTools.decodeImage(new Uint8Array(c$e))), c$f(c$a, c$b, c$e);
  }, c$f.prototype.c$_ = function (c$a, c$b) {
    return -1 != c$a.indexOf(c$b, c$a.length - c$b.length);
  }, c$f;
}();!function (c$a) {
  var c$b, c$e;c$b = c$a.c$f || (c$a.c$f = {}), c$e = function (c$b) {
    function c$a() {
      var c$a = c$b.call(this) || this;return c$a.width = 192, c$a.height = 70, c$a.c$c = new Laya.Image(), c$a.addChild(c$a.c$c), c$a.c$d = new Laya.Label(), c$a.c$d.fontSize = 30, c$a.c$d.color = c$a.c$I, c$a.addChild(c$a.c$d), c$a.c$d.centerX = 0, c$a.c$d.centerY = 0, c$a;
    }return __extends(c$a, c$b), c$a.prototype.initialize = function () {
      c$b.prototype.initialize.call(this), this.c$w = Browser.window.B_BC;var c$a = this.c$w.loadingType;this.c$I = 1 == c$a ? $c[649] : 2 == c$a ? $c[650] : 3 == c$a ? $c[651] : $c[652], this.addEvt();
    }, Object.defineProperty(c$a.prototype, $c[653], { set: function (c$a) {
        c$a && this.setData(c$a);
      }, enumerable: !0, configurable: !0 }), c$a.prototype.setData = function (c$a) {
      this.c$aa = c$a, this.c$d.text = c$a.name, this.c$c.skin = c$a.select ? $c[654] : $c[655];
    }, c$a.prototype.destroy = function (c$a) {
      void 0 === c$a && (c$a = !0), this.rmEvts(), c$b.prototype.destroy.call(this, c$a);
    }, c$a.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, c$a.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, c$a.prototype.clkHdler = function () {
      this.c$aa.callBack && this.c$aa.callBack(this.c$aa.index);
    }, c$a;
  }(Laya.View), c$b.SelectLeftListItem = c$e;
}(modules || (modules = {})), function (c$a) {
  var c$b, c$e;c$b = c$a.c$f || (c$a.c$f = {}), c$e = function (c$b) {
    function c$a() {
      var c$a = c$b.call(this) || this;return c$a.c$c = new Laya.Image($c[656]), c$a.c$d = new Laya.Label(), c$a.c$d.fontSize = 30, c$a.c$d.color = c$a.c$I, c$a.addChild(c$a.c$c), c$a.c$ba = new Laya.Image(), c$a.addChild(c$a.c$ba), c$a.width = 358, c$a.height = 70, c$a.addChild(c$a.c$d), c$a.c$ba.centerY = 0, c$a.c$ba.x = 18, c$a.c$d.x = 80, c$a.c$d.centerY = 0, c$a.c$c.graphics.drawRect(0, 0, c$a.width, c$a.height, $c[657]), c$a;
    }return __extends(c$a, c$b), c$a.prototype.initialize = function () {
      c$b.prototype.initialize.call(this), this.c$w = Browser.window.B_BC;var c$a = this.c$w.loadingType;this.c$I = 1 == c$a ? $c[658] : 2 == c$a ? $c[659] : 3 == c$a ? $c[660] : $c[661], this.addEvt();
    }, Object.defineProperty(c$a.prototype, $c[662], { set: function (c$a) {
        c$a && this.setData(c$a);
      }, enumerable: !0, configurable: !0 }), c$a.prototype.setData = function (c$a) {
      this.c$aa = c$a, this.c$d.color = -1 === c$a.status ? $c[663] : 0 === c$a.status ? $c[664] : this.c$I, this.c$d.text = -1 === c$a.status ? c$a.server_name + $c[665] : 0 === c$a.status ? c$a.server_name + $c[666] : c$a.server_name, this.c$ba.skin = this.getStatusSrc(c$a.status);
    }, c$a.prototype.destroy = function (c$a) {
      void 0 === c$a && (c$a = !0), this.rmEvts(), c$b.prototype.destroy.call(this, c$a);
    }, c$a.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, c$a.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, c$a.prototype.clkHdler = function () {
      this.c$aa.callBack && this.c$aa.callBack(this.c$aa);
    }, c$a.prototype.getStatusSrc = function (c$a) {
      var c$b = "";return 2 === c$a ? c$b = $c[667] : 1 === c$a ? c$b = $c[668] : -1 !== c$a && 0 !== c$a || (c$b = $c[669]), c$b;
    }, c$a;
  }(Laya.View), c$b.SelectRightListItem = c$e;
}(modules || (modules = {}));
window.ServerLoading = ServerLoading;