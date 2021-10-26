"use strict";

var ui,
    __extends = this && this.__extends || function () {
  var Ed = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (Ea, Eb) {
    Ea.__proto__ = Eb;
  } || function (Ea, Eb) {
    for (var Ec in Eb) Eb.hasOwnProperty(Ec) && (Ea[Ec] = Eb[Ec]);
  };return function (Ea, Eb) {
    function Ec() {
      this.constructor = Ea;
    }Ed(Ea, Eb), Ea.prototype = null === Eb ? Object.create(Eb) : (Ec.prototype = Eb.prototype, new Ec());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (Ec) {
  var Ea = function (Ea) {
    function Eb() {
      return Ea.call(this) || this;
    }return __extends(Eb, Ea), Eb.prototype.createChildren = function () {
      Ea.prototype.createChildren.call(this), this.createView(Ec.Ea.uiView);
    }, Eb.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "eeelogin/e2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "eeelogin/e6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "eeelogin/e3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "eeelogin/e4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "eeelogin/e5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] }, Eb;
  }(View);Ec.Ea = Ea;
}(ui || (ui = {})), function (Ec) {
  var Ea = function (Ea) {
    function Eb() {
      return Ea.call(this) || this;
    }return __extends(Eb, Ea), Eb.prototype.createChildren = function () {
      Ea.prototype.createChildren.call(this), this.createView(Ec.Eb.uiView);
    }, Eb.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "eeelogin/e1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "eeeloding/e13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "eeeloding/e14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "eeeloding/e16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "eeeloding/e17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "eeeloding/e20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "eeeloding/e19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "eeeloding/e18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "eeeloding/e18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "eeeloding/e1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", right: 20, height: 32, fontSize: 24, color: "#163274", bold: !1, align: "right" } }] }, Eb;
  }(View);Ec.Eb = Ea;
}(ui || (ui = {})), function (Ec) {
  var Ea = function (Ea) {
    function Eb() {
      return Ea.call(this) || this;
    }return __extends(Eb, Ea), Eb.prototype.createChildren = function () {
      View.regComponent("Text", laya.display.Text), View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), Ea.prototype.createChildren.call(this), this.createView(Ec.Ec.uiView);
    }, Eb.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "eeelogin/e2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "eeelogin/e6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "eeelogin/e3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "eeelogin/e4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "eeelogin/e5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "eeelogin/e21b.png", centerX: 0 } }, { type: "Image", props: { y: 1111, var: "imgCheatTip", skin: "eeelogin/image_loding_txtbhcc.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 930, x: 162, var: "hotImage", skin: "eeelogin/e18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "eeelogin/e1b.png", centerX: 0, bottom: 10 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "eeelogin/e12b.png", name: "enterBtn", centerX: 0 } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", right: 20, height: 32, fontSize: 24, color: "#163274", bold: !1, align: "right" } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "eeelogin/e11b.png" } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "eeelogin/e8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "eeelogin/e10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { y: 113, x: 33, visible: !1, var: "mNoticeBg", skin: "eeelogin/e26b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "eeelogin/e10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "eeelogin/e25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "eeelogin/e9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "eeelogin/e17b.png" } }] }] }, Eb;
  }(View);Ec.Ec = Ea;
}(ui || (ui = {})), function (Ea) {
  var Eb, Ec;Eb = Ea.Ed || (Ea.Ed = {}), Ec = function (Eb) {
    function Ea() {
      return Eb.call(this) || this;
    }return __extends(Ea, Eb), Ea.prototype.initialize = function () {
      Eb.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
    }, Ea.prototype.addEvt = function () {
      this.on(Laya.Event.CLICK, this, this.Ee);
    }, Ea.prototype.rmEvts = function () {
      this.off(Laya.Event.CLICK, this, this.Ee);
    }, Ea.prototype.onOpened = function () {
      this.Ef = Date.now(), ServerLoading.instance.E$Q3E_P(), ServerLoading.instance.preloadLoading();
    }, Ea.prototype.destroy = function (Ea) {
      void 0 === Ea && (Ea = !0), this.rmEvts(), Eb.prototype.destroy.call(this, Ea);
    }, Ea.prototype.Ee = function () {
      1e4 < Date.now() - this.Ef && (this.Ef -= 1e3, Browser.window.E$E3.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
    }, Ea;
  }(ui.Ea), Eb.AuthorizationPanel = Ec;
}(modules || (modules = {})), function (Ea) {
  var Eb, Ec, Ed, Ee, Eg, Ef;Eb = Ea.Eg || (Ea.Eg = {}), Ec = Laya.Event, Ed = Laya.Image, Ee = Laya.Component, Eg = Laya.Loader, Ef = function (Eb) {
    function Ek() {
      var Ea = Eb.call(this) || this;return Ea.Eh = new Ed(), Ea.addChild(Ea.Eh), Ea.Ek = null, Ea.El = [], Ea.Em = !1, Ea.En = 0, Ea.Eo = !0, Ea.Ep = 6, Ea.Eq = !1, Ea.on(Ec.DISPLAY, Ea, Ea.Er), Ea.on(Ec.UNDISPLAY, Ea, Ea.Es), Ea;
    }return __extends(Ek, Eb), Ek.create = function (Ea, Eb, Ec, Ed, Ee, Ef, Eg) {
      void 0 === Ed && (Ed = 0), void 0 === Ee && (Ee = 6), void 0 === Ef && (Ef = !0), void 0 === Eg && (Eg = !1);var Eh = new Ek();return Eh.skin(Eb, Ec, Ed), Eh.durFrm = Ee, Eh.loop = Ef, Eh.atHide = Eg, Ea && Ea.addChild(Eh), Eh;
    }, Ek.play = function (Ea) {
      Ea && (Ea.visible = !0, Ea.play());
    }, Ek.stop = function (Ea) {
      Ea && (Ea.visible = !1, Ea.stop());
    }, Ek.prototype.destroy = function (Ea) {
      Laya.timer.clear(this, this.Et), this.off(Ec.DISPLAY, this, this.Er), this.off(Ec.UNDISPLAY, this, this.Es), Eb.prototype.destroy.call(this, Ea);
    }, Ek.prototype.Er = function () {}, Ek.prototype.Es = function () {}, Ek.prototype.skin = function (Ea, Eb, Ec) {
      if (this.Ek != Ea) {
        this.Ek = Ea, this.El = [];for (var Ed = 0, Ee = Ec; Ee <= Eb; Ee++) this.El[Ed++] = Ea + "/" + Ee + ".png";var Ef = Eg.getRes(this.El[0]);Ef && (this.width = Ef.sourceWidth, this.height = Ef.sourceHeight), this.Et();
      }
    }, Object.defineProperty(Ek.prototype, "atHide", { get: function () {
        return this.Eq;
      }, set: function (Ea) {
        this.Eq = Ea;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(Ek.prototype, "durFrm", { set: function (Ea) {
        this.Ep != Ea && (this.Ep = Ea, this.Em && (Laya.timer.clear(this, this.Et), Laya.timer.loop(this.Ep * (1e3 / 60), this, this.Et)));
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(Ek.prototype, "loop", { set: function (Ea) {
        this.Eo = Ea;
      }, enumerable: !0, configurable: !0 }), Ek.prototype.play = function () {
      this.Em && this.stop(), this.Em = !0, this.En = 0, Laya.timer.loop(this.Ep * (1e3 / 60), this, this.Et), this.Et();
    }, Ek.prototype.stop = function () {
      this.Em = !1, this.En = 0, this.Et(), Laya.timer.clear(this, this.Et);
    }, Ek.prototype.pause = function () {
      this.Em && (this.Em = !1, Laya.timer.clear(this, this.Et));
    }, Ek.prototype.resume = function () {
      this.Em || (this.Em = !0, Laya.timer.loop(this.Ep * (1e3 / 60), this, this.Et), this.Et());
    }, Object.defineProperty(Ek.prototype, "isPlay", { get: function () {
        return this.Em;
      }, enumerable: !0, configurable: !0 }), Ek.prototype.Et = function () {
      this.El && 0 != this.El.length && (this.Eh.skin = this.El[this.En], this.Em && (this.En++, this.En == this.El.length && (this.Eo ? this.En = 0 : (Laya.timer.clear(this, this.Et), this.Em = !1, this.Eq && (this.visible = !1), this.event(Ec.COMPLETE)))));
    }, Ek;
  }(Ee), Eb.PanelEff = Ef;
}(modules || (modules = {})), function (Ea) {
  var Eb, Ed, Ec;Eb = Ea.Ed || (Ea.Ed = {}), Ed = Ea.Eg.PanelEff, Ec = function (Ec) {
    function Ea(Ea) {
      void 0 === Ea && (Ea = 0);var Eb = Ec.call(this) || this;return Eb.Eu = { bgImgSkin: "eeeloding/e3a.jpg", topImgSkin: "eeeloding/e10a.jpg", btmImgSkin: "eeeloding/e4a.jpg", leftImgSkin: "eeeloding/e6a.jpg", rightImgSkin: "eeeloding/e8a.jpg", loadingBarBgSkin: "eeeloding/e13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, Eb.Ev = { bgImgSkin: "eeeloding/e12a.jpg", topImgSkin: "eeeloding/e11a.jpg", btmImgSkin: "eeeloding/e5a.jpg", leftImgSkin: "eeeloding/e7a.jpg", rightImgSkin: "eeeloding/e9a.jpg", loadingBarBgSkin: "eeeloding/e15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, Eb.Ew = 0, Eb.Ex(1 == Ea ? Eb.Ev : Eb.Eu), Eb;
    }return __extends(Ea, Ec), Ea.prototype.initialize = function () {
      if (Ec.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.Ey = Browser.window.E$E3, this.centerX = 0, this.centerY = 0, this.Ey) {
        var Ea = this.Ey.loadingType;this.loadingTips.color = 1 == Ea ? "#f2ffb5" : 2 == Ea ? "#000000" : "#f2ffb5";
      }this.Ez = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, E$_E3P(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
    }, Ea.prototype.E$_E3 = function (Ea) {
      var Eb = this;if (-1 === Ea) return Eb.Ew = 0, Laya.timer.clear(this, this.E$_E3), void Laya.timer.frameLoop(1, this, this.E$_E3);if (-2 !== Ea) {
        Eb.Ew < .9 ? Eb.Ew += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : Eb.Ew < 1 && (Eb.Ew += 1e-4), .9999 < Eb.Ew && (Eb.Ew = .9999, Laya.timer.clear(this, this.E$_E3), Laya.timer.once(3e3, this, function () {
          .9 < Eb.Ew && E$_E3(-1);
        }));var Ec = Eb.Ew,
            Ed = 590 * Ec;Eb.Ew = Eb.Ew > Ec ? Eb.Ew : Ec, Eb.loadingBar.width = Ed;var Ee = Eb.loadingBar.x + Ed;Eb.loadingImg2.x = Ee - 15, 364 <= Ee ? (Eb.loadingImg1.visible = !0, Eb.loadingImg1.x = Ee - 202) : Eb.loadingImg1.visible = !1, Eb.percentageTips.text = (100 * Ec >> 0) + "%", Eb.Ew < .9999 && Laya.timer.frameLoop(1, this, this.E$_E3);
      } else Laya.timer.clear(this, this.E$_E3);
    }, Ea.prototype.E$_3E = function (Ea, Eb, Ec) {
      var Ed = this;1 < Ea && (Ea = 1);var Ee = 590 * Ea;Ed.Ew = Ed.Ew > Ea ? Ed.Ew : Ea, Ed.loadingBar.width = Ee;var Ef = Ed.loadingBar.x + Ee;Ed.loadingImg2.x = Ef - 15, 364 <= Ef ? (Ed.loadingImg1.visible = !0, Ed.loadingImg1.x = Ef - 202) : Ed.loadingImg1.visible = !1, Ed.percentageTips.text = (100 * Ea >> 0) + "%", Ed.loadingTips.text = Eb;for (var Eg = Ec - 1, Eh = 0; Eh < this.Ez.length; Eh++) Ed.Ez[Eh].skin = Eh < Eg ? "eeeloding/e20a.png" : Eg === Eh ? "eeeloding/e19a.png" : "eeeloding/e18a.png";
    }, Ea.prototype.onOpened = function () {
      this.E$_3E(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.E$_E3(-1), Browser.window.E$_E3 = this.E$_E3.bind(this), Browser.window.E$_3E = this.E$_3E.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.Ey.lastVersion + "      \u7248\u672c\uff1a" + this.Ey.wxVersion, this.showGetBtn();
    }, Ea.prototype.close = function (Ea) {
      this.resetWinFun(), Laya.timer.clear(this, this.E$_E3), Laya.timer.clear(this, this.EA), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.EB);
    }, Ea.prototype.resetWinFun = function () {
      Browser.window.E$_E3 = function () {}, Browser.window.E$_3E = function () {};
    }, Ea.prototype.destroy = function (Ea) {
      void 0 === Ea && (Ea = !0), this.resetWinFun(), Ec.prototype.destroy.call(this, Ea);
    }, Ea.prototype.showGetBtn = function () {
      this.Ey.showGetBtn && 1 == this.Ey.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "eeeloding/e1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.EB), this.EC(), this.ED(!0));
    }, Ea.prototype.EB = function () {
      this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "eeeloding/e2a.png", this.EE(), this.ED(!1));
    }, Ea.prototype.Ex = function (Ea) {
      this.bgImg.skin = Ea.bgImgSkin, this.topImg.skin = Ea.topImgSkin, this.btmImg.skin = Ea.btmImgSkin, this.leftImg.skin = Ea.leftImgSkin, this.rightImg.skin = Ea.rightImgSkin, this.copyRightImg.bottom = Ea.copyRightImgBottom, this.processBox1.y = Ea.processBox1Y, this.processBox2.y = Ea.processBox2Y, this.loadingBarBg.skin = Ea.loadingBarBgSkin, this.loadingTips.fontSize = Ea.loadingTipsSize, this.getTipsBtn.visible = this.Ey.showGetBtn && 1 == this.Ey.showGetBtn, this.getTipsBtn.visible ? this.EC() : this.EE(), this.ED(this.getTipsBtn.visible);
    }, Ea.prototype.EC = function () {
      this.EF || (this.EF = Ed.create(this.getTipsBtn, "eewxeff", 4, 0, 12), this.EF.pos(161, 106), this.EF.scale(1.14, 1.15)), Ed.play(this.EF);
    }, Ea.prototype.EE = function () {
      this.EF && Ed.stop(this.EF);
    }, Ea.prototype.ED = function (Ea) {
      Laya.timer.clear(this, this.EA), Ea ? (this.EG = 9, this.txtGetTm.visible = !0, this.EA(), Laya.timer.loop(1e3, this, this.EA)) : this.txtGetTm.visible = !1;
    }, Ea.prototype.EA = function () {
      0 < this.EG ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.EG + "s)", this.EG--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.EA), this.EB());
    }, Ea;
  }(ui.Eb), Eb.LoadingPanel = Ec;
}(modules || (modules = {})), function (Ea) {
  var Ec, Ed, Ee, Eb;Ec = Ea.Ed || (Ea.Ed = {}), Ed = Laya.List, Ee = Laya.Event, Eb = function (Eb) {
    function Ea() {
      var Ea = Eb.call(this) || this;return Ea.EH = 0, Ea.EI = "multi_notice_key", Ea.EJ = 0, Ea;
    }return __extends(Ea, Eb), Ea.prototype.initialize = function () {
      Eb.prototype.initialize.call(this), ServerLoading.instance.E$Q3E_P(), this.centerX = 0, this.centerY = 0, this.Ey = Browser.window.E$E3, this.EK = new Ed(), this.EK.vScrollBarSkin = "", this.EK.itemRender = Ec.SelectLeftListItem, this.EK.top = 5, this.EK.repeatX = 1, this.EK.spaceY = 5, this.EK.width = this.leftListBox.width, this.EK.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.EK), this.EL = new Ed(), this.EL.vScrollBarSkin = "", this.EL.itemRender = Ec.SelectRightListItem, this.EL.top = 5, this.EL.repeatX = 1, this.EL.spaceY = 5, this.EL.width = this.rightListBox.width, this.EL.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.EL), this.EM = new Ed(), this.EM.hScrollBarSkin = "", this.EM.itemRender = Ec.NoticeItem, this.EM.repeatY = 1, this.EM.width = this.boxTab.width, this.EM.height = this.boxTab.height, this.boxTab.addChild(this.EM);var Ea = this.Ey.loadingType;this.EN = 1 == Ea ? "#93353b" : 2 == Ea ? "#feffc0" : 3 == Ea ? "#feffc0" : 101 == Ea ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.EO = [], Browser.window.initPanel = this, E$_E3P(), this.addEvt(), this.onOpened();
    }, Ea.prototype.addEvt = function () {
      this.bgImg.on(Laya.Event.CLICK, this, this.Ee), this.enterBtn.on(Laya.Event.CLICK, this, this.EP), this.selectServer.on(Laya.Event.CLICK, this, this.EQ), this.selectServer.on(Laya.Event.CLICK, this, this.EQ), this.closeBg.on(Laya.Event.CLICK, this, this.ER), this.noticeBtn.on(Laya.Event.CLICK, this, this.ES), this.noticeClose.on(Laya.Event.CLICK, this, this.ET), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.EU), this.mNoticeClose.on(Laya.Event.CLICK, this, this.EV), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.EV), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.EW), this.EM.selectEnable = !0, this.EM.selectHandler = Laya.Handler.create(this, this.EX, null, !1);
    }, Ea.prototype.rmEvts = function () {
      this.bgImg.off(Laya.Event.CLICK, this, this.Ee), this.enterBtn.off(Laya.Event.CLICK, this, this.EP), this.selectServer.off(Laya.Event.CLICK, this, this.EQ), this.selectServer.off(Laya.Event.CLICK, this, this.EQ), this.closeBg.off(Laya.Event.CLICK, this, this.ER), this.noticeBtn.off(Laya.Event.CLICK, this, this.ES), this.noticeClose.off(Laya.Event.CLICK, this, this.ET), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.EU), this.mNoticeClose.off(Laya.Event.CLICK, this, this.EV), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.EV), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.EW), this.EM.selectEnable = !1, this.EM.selectHandler = null;
    }, Ea.prototype.onOpened = function () {
      this.Ef = Date.now(), this.EY = this.Ey.selectedServer.server_id, this.EZ(this.Ey.selectedServer), this.EK.dataSource = this.Ey.groupList, this.EQ(), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.Ey.lastVersion + "      \u7248\u672c\uff1a" + this.Ey.wxVersion, this.serverName.color = this.selServer.color = this.EN, this.imgCheatTip.visible = 1 == this.Ey.anti_cheat_pkg, req_multi_server_notice(4, this.Ey.pkgName, this.Ey.selectedServer.server_id, this.E$.bind(this));
    }, Ea.prototype.destroy = function (Ea) {
      void 0 === Ea && (Ea = !0), this.rmEvts(), this.E_(), this.Ei(), this.EK && (this.EK.removeSelf(), this.EK.destroy(), this.EK = null), this.EL && (this.EL.removeSelf(), this.EL.destroy(), this.EL = null), this.EM && (this.EM.removeSelf(), this.EM.destroy(), this.EM = null), Eb.prototype.destroy.call(this, Ea);
    }, Ea.prototype.Ee = function () {
      1e4 < Date.now() - this.Ef && (this.Ef -= 2e3, ServerLoading.instance.enterDefaultServer());
    }, Ea.prototype.ER = function () {
      this.listBg.visible = !1;
    }, Ea.prototype.EP = function () {
      this.Ej(this.Ey.selectedServer) && (Browser.window.E$E3.selectedServer = this.Ey.selectedServer, E$3_EP(0, this.Ey.selectedServer.server_id));
    }, Ea.prototype.ES = function () {
      this.Eaa();
    }, Ea.prototype.ET = function () {
      this.noticeBg.visible = !1;
    }, Ea.prototype.EU = function () {
      this.EH = this.noticeContent.mouseY, Laya.stage.on(Ee.MOUSE_MOVE, this, this.Eba), Laya.stage.on(Ee.MOUSE_UP, this, this.E_), Laya.stage.on(Ee.MOUSE_OUT, this, this.E_);
    }, Ea.prototype.Eba = function () {
      if (this.noticeContent) {
        var Ea = this.EH - this.noticeContent.mouseY;this.noticeContent.scrollY += Ea, this.EH = this.noticeContent.mouseY;
      }
    }, Ea.prototype.E_ = function () {
      Laya.stage.off(Ee.MOUSE_MOVE, this, this.Eba), Laya.stage.off(Ee.MOUSE_UP, this, this.E_), Laya.stage.off(Ee.MOUSE_OUT, this, this.E_);
    }, Ea.prototype.Ej = function (Ea) {
      return -1 == Ea.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != Ea.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
    }, Ea.prototype.EQ = function () {
      this.Ey.hasGroupReq ? this.listBg.visible = !0 : (this.Ey.hasGroupReq = !0, E$E3P_(0));
    }, Ea.prototype.E$ = function (Ea) {
      console.log("onMultiNoticeCallback, param = ", Ea);var Eb = Date.now() / 1e3,
          Ec = localStorage.getItem(this.EI);if (this.EO = [], "success" == Ea.state) for (var Ed in Ea.data) {
        var Ee = Ea.data[Ed],
            Ef = Eb < Ee.end_time,
            Eg = 1 == Ee.pop_type,
            Eh = 2 == Ee.pop_type && Ee.key + "" != Ec;Ef && (Eg || Eh) && this.EO.push(Ee), Eh && localStorage.setItem(this.EI, Ee.key + "");
      }this.EO.sort(function (Ea, Eb) {
        return Ea.login_id - Eb.login_id;
      }), console.log("onMultiNoticeCallback, datas = ", this.EO), 0 < this.EO.length && this.Eaa();
    }, Ea.prototype.preload = function () {}, Ea.prototype.getStatusSrc = function (Ea) {
      var Eb = "";return 2 === Ea ? Eb = "eeelogin/e18b.png" : 1 === Ea ? Eb = "eeelogin/e19b.png" : -1 !== Ea && 0 !== Ea || (Eb = "eeelogin/e20b.png"), Eb;
    }, Ea.prototype.EZ = function (Ea) {
      this.serverName.text = -1 === Ea.status ? Ea.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === Ea.status ? Ea.server_name + "(\u5f85\u5f00\u670d)" : Ea.server_name, this.serverName.color = -1 === Ea.status ? "#d50000" : 0 === Ea.status ? "#49575a" : this.EN, this.hotImage.skin = this.getStatusSrc(Ea.status), this.Ey.cdn = Ea.cdn || "", this.Ey.selectedServer = Ea, this.noticeBtn.visible = !0;
    }, Ea.prototype.Eca = function (Ea) {
      this.showGroupList(Ea);
    }, Ea.prototype.Eda = function (Ea) {
      this.EZ(Ea), this.listBg.visible = !1;
    }, Ea.prototype.Eea = function (Ea) {
      this.noticeContent && (this.noticeContent.text = Ea.data.content ? Ea.data.content : "", this.noticeTitle.text = Ea.data.title ? Ea.data.title : "\u6682\u65e0\u516c\u544a");
    }, Ea.prototype.showGroupList = function (Ea) {
      if (void 0 === Ea && (Ea = 0), this.parent) {
        var Eb = this.Ey.groupList;if (Eb && 0 !== Eb.length) {
          for (var Ec = Eb.length, Ed = 0; Ed < Ec; Ed++) Eb[Ed].callBack = this.Eca.bind(this), Eb[Ed].select = Ed == Ea, Eb[Ed].index = Ed;var Ee = (this.EK.array = Eb)[Ea].id;this.Ey.serverList[Ee] ? this.showServerList(Ee) : this.Ey.hasServerReq || (this.Ey.hasServerReq = !0, -1 == Ee ? E$_EP(0) : -2 == Ee ? E$QEP3(0) : E$PE_(0, Ee));
        }
      }
    }, Ea.prototype.showServerList = function (Ea) {
      if (this.parent && this.Ey.serverList[Ea]) {
        for (var Eb = this.Ey.serverList[Ea], Ec = Eb.length, Ed = 0; Ed < Ec; Ed++) Eb[Ed].callBack = this.Eda.bind(this);this.EL.array = Eb;
      }
    }, Ea.prototype.Eaa = function () {
      if (this.EM) {
        if (this.EO) {
          this.EM.x = 2 < this.EO.length ? 0 : (this.boxTab.width - 274 * this.EO.length) / 2;for (var Ea = [], Eb = 0; Eb < this.EO.length; Eb++) {
            var Ec = this.EO[Eb];Ea.push([Ec, Eb == this.EM.selectedIndex]);
          }0 < (this.EM.dataSource = Ea).length ? (this.EM.selectedIndex = 0, this.EM.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.EO.length <= 1, this.boxTab.visible = 1 < this.EO.length;
        }this.mNoticeBg.visible = !0;
      }
    }, Ea.prototype.EV = function () {
      this.mNoticeBg.visible = !1;
    }, Ea.prototype.EX = function () {
      if (this.EM.dataSource) {
        for (var Ea, Eb = 0; Eb < this.EM.dataSource.length; Eb++) {
          var Ec = this.EM.dataSource[Eb];Ec[1] = Eb == this.EM.selectedIndex, Eb == this.EM.selectedIndex && (Ea = Ec[0]);
        }this.mNoticeTitle.text = Ea && Ea.title ? Ea.title : "", this.mNoticeContent.innerHTML = Ea && Ea.content ? Ea.content : "", this.mNoticeContent.y = 0;
      }
    }, Ea.prototype.EW = function () {
      this.EJ = this.mNoticePanel.mouseY, Laya.stage.on(Ee.MOUSE_MOVE, this, this.Efa), Laya.stage.on(Ee.MOUSE_UP, this, this.Ei), Laya.stage.on(Ee.MOUSE_OUT, this, this.Ei);
    }, Ea.prototype.Efa = function () {
      if (this.mNoticeContent) {
        var Ea = this.EJ - this.mNoticePanel.mouseY;this.mNoticeContent.y -= Ea, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.EJ = this.mNoticePanel.mouseY;
      }
    }, Ea.prototype.Ei = function () {
      Laya.stage.off(Ee.MOUSE_MOVE, this, this.Efa), Laya.stage.off(Ee.MOUSE_UP, this, this.Ei), Laya.stage.off(Ee.MOUSE_OUT, this, this.Ei);
    }, Ea;
  }(ui.Ec), Ec.SelectServerPanel = Eb;
}(modules || (modules = {}));var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.Ed.AuthorizationPanel,
    LoadingPanel = modules.Ed.LoadingPanel,
    SelectServerPanel = modules.Ed.SelectServerPanel,
    ServerLoading = function () {
  function Ek(Ea) {
    this.m_loadingRes = ["eeeloding/e13a.png", "eeeloding/e15a.png", "eeeloding/e14a.png", "eeeloding/e16a.png", "eeeloding/e17a.png", "eeeloding/e18a.png", "eeeloding/e19a.png", "eeeloding/e20a.png", "eewxeff/e1c.png", "eewxeff/e2c.png", "eewxeff/e3c.png", "eewxeff/e4c.png", "eewxeff/e5c.png", "eeeloding/e3a.jpg", "eeeloding/e12a.jpg", "eeeloding/e1a.png", "eeeloding/e2a.png", "eeeloding/e4a.jpg", "eeeloding/e6a.jpg", "eeeloding/e8a.jpg", "eeeloding/e10a.jpg", "eeeloding/e5a.jpg", "eeeloding/e7a.jpg", "eeeloding/e9a.jpg", "eeeloding/e11a.jpg"], this.E$Q3EP = ["eeelogin/e10b.png", "eeelogin/e11b.png", "eeelogin/e12b.png", "eeelogin/e13b.png", "eeelogin/e14b.png", "eeelogin/e15b.png", "eeelogin/e16b.png", "eeelogin/e17b.png", "eeelogin/e18b.png", "eeelogin/e19b.png", "eeelogin/e20b.png", "eeelogin/e21b.png", "eeelogin/e2b.jpg", "eeelogin/e3b.jpg", "eeelogin/e4b.jpg", "eeelogin/e5b.jpg", "eeelogin/e6b.jpg", "eeelogin/e1b.png", "eeelogin/e8b.png", "eeelogin/e9b.png", "eeelogin/e24b.png", "eeelogin/e25b.png", "eeelogin/e23b.png", "eeelogin/e26b.png", "eeelogin/image_loding_txtbhcc.png"], this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.Ega = !1, this.Eha = "", Ek.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var Eb = Laya.AtlasResourceManager;Eb.maxTextureCount = 4, Eb.atlasTextureWidth = Eb.atlasTextureHeight = 1024, Eb._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.Eka.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = Ek.instance.E$Q3E, Browser.window.imgMgrLoad = Ek.instance.E$Q3E, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.Eka();
  }return Ek.prototype.E$_3PE = function (Ea) {
    Ek.instance.m_layer.visible = Ea;
  }, Ek.prototype.E$QP3_E = function () {
    Ek.instance.m_author || (Ek.instance.m_author = new AuthorizationPanel()), Ek.instance.m_author.parent || Ek.instance.m_layer.addChild(Ek.instance.m_author), Ek.instance.Ela();
  }, Ek.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, Ek.prototype.E$Q3E_P = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.E$Q3EP, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.E$3E_P(), Browser.window.E$3EP_();
    })));
  }, Ek.prototype.openServer = function () {
    for (var Ea = function () {
      Ek.instance.m_server || (Ek.instance.m_server = new SelectServerPanel()), Ek.instance.m_server.parent || Ek.instance.m_layer.addChild(Ek.instance.m_server), Ek.instance.Ela();
    }, Eb = !0, Ec = 0, Ed = this.E$Q3EP; Ec < Ed.length; Ec++) {
      var Ee = Ed[Ec];if (null == Laya.Loader.getRes(Ee)) {
        Eb = !1;break;
      }
    }Eb ? Ea() : Laya.loader.load(this.E$Q3EP, Handler.create(this, Ea));
  }, Ek.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, Ek.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.E$3E_P(), Browser.window.E$3EP_();
    })));
  }, Ek.prototype.openLoading = function (Ea) {
    void 0 === Ea && (Ea = 0), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Ek.instance.m_loading || (Ek.instance.m_loading = new LoadingPanel(Ea)), Ek.instance.m_loading.parent || Ek.instance.m_layer.addChild(Ek.instance.m_loading), Ek.instance.Ela();
    }));
  }, Ek.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var Ea = 0, Eb = this.E$Q3EP; Ea < Eb.length; Ea++) {
      var Ec = Eb[Ea];Laya.Loader.clearCache(Ek.instance, Ec), Laya.Loader.clearRes(Ec, !0);
    }for (var Ed = 0, Ee = this.m_loadingRes; Ed < Ee.length; Ed++) {
      Ec = Ee[Ed];Laya.Loader.clearCache(Ek.instance, Ec), Laya.Loader.clearRes(Ec, !0);
    }this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, Ek.prototype.E$Q3 = function () {
    this.m_loading && this.m_loading.parent && Ek.instance.m_loading.showGetBtn();
  }, Ek.prototype.enterDefaultServer = function () {
    var Ea = Browser.window.E$E3.selectedServer;this.Ega || -1 == Ea.status || 0 == Ea.status || (this.Ega = !0, Browser.window.E$E3.selectedServer = Ea, E$3_EP(0, Ea.server_id));
  }, Ek.prototype.sendRecord = function () {
    var Ea = "";Ea += "newRegister=" + Browser.window.E$E3.newRegister, Ea += ", isPrelodServer=" + this.m_isPrelodServer, Ea += ", SelectServerPanel=" + (null != Ek.instance.m_server), Ea += ", isPrelodLoading=" + this.m_isPrelodLoading, Ea += ", LoadingPanel=" + (null != Ek.instance.m_loading), Ea += ", resMgrLoad=" + (Browser.window.resMgrLoad == Ek.instance.E$Q3E), Ea += ", imgMgrLoad=" + (Browser.window.imgMgrLoad == Ek.instance.E$Q3E), Ea += ", errUrls=" + Ek.instance.Eha;for (var Eb = 0, Ec = this.E$Q3EP; Eb < Ec.length; Eb++) {
      Ea += ", " + (Ef = Ec[Eb]) + "=" + (null != Laya.Loader.getRes(Ef));
    }for (var Ed = 0, Ee = this.m_loadingRes; Ed < Ee.length; Ed++) {
      var Ef;Ea += ", " + (Ef = Ee[Ed]) + "=" + (null != Laya.Loader.getRes(Ef));
    }var Eg = Browser.window.E$E3.selectedServer;Eg && (Ea += ", server_status=" + Eg.status, Ea += ", server_id=" + Eg.server_id, Ea += ", server_name=" + Eg.server_name);var Eh = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: Ea });console.error(Eh), this.Ema && this.Ema == Ea || (this.Ema = Ea, E$E_3(Eh));
  }, Ek.prototype.Ena = function () {
    var Ea = Laya.stage,
        Eb = Math.floor(Ea.width),
        Ec = Math.floor(Ea.height);Ec / Eb < 1.7777778 ? (this.viewW = Math.floor(Eb / (Ec / 1280)), this.viewH = 1280, this.viewS = Ec / 1280) : (this.viewW = 720, this.viewH = Math.floor(Ec / (Eb / 720)), this.viewS = Eb / 720);var Ed = Math.floor(Ea.width),
        Ee = Math.floor(Ea.height);Ee / Ed < 1.7777778 ? (this.viewW = Math.floor(Ed / (Ee / 1280)), this.viewH = 1280, this.viewS = Ee / 1280) : (this.viewW = 720, this.viewH = Math.floor(Ee / (Ed / 720)), this.viewS = Ed / 720), this.Ela();
  }, Ek.prototype.Ela = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, Ek.prototype.Eka = function () {
    if (Input.isInputting && Browser.onMobile) {
      var Ea = parseInt(Input.inputContainer.style.top.replace("px", "")),
          Eb = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS,
          Ec = Browser.clientWidth / Render.canvas.width;return 0 < (Ea = Browser.clientHeight - Eb * Ec - Ea) && (Ea = 0), void (Browser.container.style.top = Ea + "px");
    }Browser.container.style.top = "0px";var Ed = Math.floor(Browser.width),
        Ee = Math.floor(Browser.height);Ed = Ed + 1 & 2147483646, Ee = Ee + 1 & 2147483646;var Ef = Laya.stage;3 == ENV ? (Ef.scaleMode = Laya.Stage.SCALE_NOSCALE, Ef.width = Ed, Ef.height = Ee) : Ee < Ed ? (Ef.scaleMode = Laya.Stage.SCALE_NOSCALE, Ef.width = Ed, Ef.height = Ee) : (Ef.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Ef.width = 840, Ef.height = Math.floor(Ee / (Ed / 840)) + 1 & 2147483646), this.Ena();
  }, Ek.prototype.E$Q3E = function (Ea, Eb) {
    function Ec() {
      Ed.onload = null, Ed.onerror = null;
    }var Ed,
        Ee = Ea;(Ed = new Browser.window.Image()).onload = function () {
      Ec(), Eb(Ee, 200, Ed);
    }, Ed.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", Ee), Ek.instance.Eha += Ee + "|", Ec(), Eb(Ee, 404, null);
    }, Ed.src = Ee, -1 == Ek.instance.E$Q3EP.indexOf(Ee) && -1 == Ek.instance.m_loadingRes.indexOf(Ee) || Laya.Loader.keepCache(Ek.instance, Ee);
  }, Ek.prototype.Eoa = function (Ea, Eb) {
    return -1 != Ea.indexOf(Eb, Ea.length - Eb.length);
  }, Ek;
}();!function (Ea) {
  var Eb, Ec;Eb = Ea.Ed || (Ea.Ed = {}), Ec = function (Eb) {
    function Ea() {
      var Ea = Eb.call(this) || this;return Ea.Epa = "#72441d", Ea.Eqa = "#263d7d", Ea.width = 274, Ea.height = 59, Ea.Era = new Laya.Image(), Ea.addChild(Ea.Era), Ea.Esa = new Laya.Label(), Ea.Esa.fontSize = 30, Ea.Esa.color = Ea.Eqa, Ea.addChild(Ea.Esa), Ea.Esa.centerX = 0, Ea.Esa.centerY = 0, Ea;
    }return __extends(Ea, Eb), Ea.prototype.initialize = function () {
      Eb.prototype.initialize.call(this), this.Ey = Browser.window.E$E3;this.Ey.loadingType;this.addEvt();
    }, Object.defineProperty(Ea.prototype, "dataSource", { set: function (Ea) {
        Ea && this.setData(Ea);
      }, enumerable: !0, configurable: !0 }), Ea.prototype.setData = function (Ea) {
      this.Eta = Ea[0], this.Eua = Ea[1], this.Esa.text = this.Eta.title, this.Esa.color = this.Eua ? this.Epa : this.Eqa, this.Era.skin = this.Eua ? "eeelogin/e25b.png" : "eeelogin/e24b.png";
    }, Ea.prototype.destroy = function (Ea) {
      void 0 === Ea && (Ea = !0), this.rmEvts(), Eb.prototype.destroy.call(this, Ea);
    }, Ea.prototype.addEvt = function () {}, Ea.prototype.rmEvts = function () {}, Ea;
  }(Laya.View), Eb.NoticeItem = Ec;
}(modules || (modules = {})), function (Ea) {
  var Eb, Ec;Eb = Ea.Ed || (Ea.Ed = {}), Ec = function (Eb) {
    function Ea() {
      var Ea = Eb.call(this) || this;return Ea.width = 192, Ea.height = 70, Ea.Era = new Laya.Image(), Ea.addChild(Ea.Era), Ea.Esa = new Laya.Label(), Ea.Esa.fontSize = 30, Ea.Esa.color = Ea.EN, Ea.addChild(Ea.Esa), Ea.Esa.centerX = 0, Ea.Esa.centerY = 0, Ea;
    }return __extends(Ea, Eb), Ea.prototype.initialize = function () {
      Eb.prototype.initialize.call(this), this.Ey = Browser.window.E$E3;var Ea = this.Ey.loadingType;this.EN = 1 == Ea ? "#263d7d" : 2 == Ea ? "#263d7d" : 3 == Ea ? "#763042" : "#263d7d", this.addEvt();
    }, Object.defineProperty(Ea.prototype, "dataSource", { set: function (Ea) {
        Ea && this.setData(Ea);
      }, enumerable: !0, configurable: !0 }), Ea.prototype.setData = function (Ea) {
      this.Eta = Ea, this.Esa.text = Ea.name, this.Era.skin = Ea.select ? "eeelogin/e14b.png" : "eeelogin/e15b.png";
    }, Ea.prototype.destroy = function (Ea) {
      void 0 === Ea && (Ea = !0), this.rmEvts(), Eb.prototype.destroy.call(this, Ea);
    }, Ea.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, Ea.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, Ea.prototype.clkHdler = function () {
      this.Eta && this.Eta.callBack && this.Eta.callBack(this.Eta.index);
    }, Ea;
  }(Laya.View), Eb.SelectLeftListItem = Ec;
}(modules || (modules = {})), function (Ea) {
  var Eb, Ec;Eb = Ea.Ed || (Ea.Ed = {}), Ec = function (Eb) {
    function Ea() {
      var Ea = Eb.call(this) || this;return Ea.Era = new Laya.Image("eeelogin/e16b.png"), Ea.Esa = new Laya.Label(), Ea.Esa.fontSize = 30, Ea.Esa.color = Ea.EN, Ea.addChild(Ea.Era), Ea.Eva = new Laya.Image(), Ea.addChild(Ea.Eva), Ea.width = 358, Ea.height = 70, Ea.addChild(Ea.Esa), Ea.Eva.centerY = 0, Ea.Eva.x = 18, Ea.Esa.x = 80, Ea.Esa.centerY = 0, Ea.Era.graphics.drawRect(0, 0, Ea.width, Ea.height, "#00sasd"), Ea;
    }return __extends(Ea, Eb), Ea.prototype.initialize = function () {
      Eb.prototype.initialize.call(this), this.Ey = Browser.window.E$E3;var Ea = this.Ey.loadingType;this.EN = 1 == Ea ? "#34267d" : 2 == Ea ? "#34267d" : 3 == Ea ? "#763042" : "#34267d", this.addEvt();
    }, Object.defineProperty(Ea.prototype, "dataSource", { set: function (Ea) {
        Ea && this.setData(Ea);
      }, enumerable: !0, configurable: !0 }), Ea.prototype.setData = function (Ea) {
      this.Eta = Ea, this.Esa.color = -1 === Ea.status ? "#d50000" : 0 === Ea.status ? "#49575a" : this.EN, this.Esa.text = -1 === Ea.status ? Ea.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === Ea.status ? Ea.server_name + "(\u5f85\u5f00\u670d)" : Ea.server_name, this.Eva.skin = this.getStatusSrc(Ea.status);
    }, Ea.prototype.destroy = function (Ea) {
      void 0 === Ea && (Ea = !0), this.rmEvts(), Eb.prototype.destroy.call(this, Ea);
    }, Ea.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, Ea.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, Ea.prototype.clkHdler = function () {
      this.Eta && this.Eta.callBack && this.Eta.callBack(this.Eta);
    }, Ea.prototype.getStatusSrc = function (Ea) {
      var Eb = "";return 2 === Ea ? Eb = "eeelogin/e18b.png" : 1 === Ea ? Eb = "eeelogin/e19b.png" : -1 !== Ea && 0 !== Ea || (Eb = "eeelogin/e20b.png"), Eb;
    }, Ea;
  }(Laya.View), Eb.SelectRightListItem = Ec;
}(modules || (modules = {})), window.ServerLoading = ServerLoading;