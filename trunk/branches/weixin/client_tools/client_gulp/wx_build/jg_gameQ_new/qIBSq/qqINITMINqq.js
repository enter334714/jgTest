"use strict";
var ui,
    __extends = this && this.__extends || function () {
  var qR = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (qS, q_) {
    qS.__proto__ = q_;
  } || function (qS, q_) {
    for (var qa in q_) q_.hasOwnProperty(qa) && (qS[qa] = q_[qa]);
  };return function (qS, q_) {
    function qa() {
      this.constructor = qS;
    }qR(qS, q_), qS.prototype = null === q_ ? Object.create(q_) : (qa.prototype = q_.prototype, new qa());
  };
}(),
    View = laya.ui.View,
    Dialog = laya.ui.Dialog;!function (qa) {
  var qS = function (qS) {
    function q_() {
      return qS.call(this) || this;
    }return __extends(q_, qS), q_.prototype.createChildren = function () {
      qS.prototype.createChildren.call(this), this.createView(qa.qS.uiView);
    }, q_.uiView = { type: "View", props: { width: 720, name: "P_WXAuthorizationViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "qlgqq/q2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, width: 720, right: 0, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", top: -139, skin: "qlgqq/q6b.jpg", height: 139, centerX: 0, anchorY: 1 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1280, skin: "qlgqq/q3b.jpg", height: 139, centerX: 0 } }, { type: "Image", props: { x: -220, width: 220, var: "leftImg", skin: "qlgqq/q4b.jpg", left: -220, height: 1280, centerY: 0 } }, { type: "Image", props: { width: 220, var: "rightImg", skin: "qlgqq/q5b.jpg", left: 720, height: 1280, centerY: 0 } }] }] }, q_;
  }(View);qa.qS = qS;
}(ui || (ui = {})), function (qa) {
  var qS = function (qS) {
    function q_() {
      return qS.call(this) || this;
    }return __extends(q_, qS), q_.prototype.createChildren = function () {
      qS.prototype.createChildren.call(this), this.createView(qa.q_.uiView);
    }, q_.uiView = { type: "View", props: { width: 720, name: "P_LoadingView", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { var: "topImg", centerX: 0, bottom: 1280, anchorY: 1 } }, { type: "Image", props: { var: "btmImg", top: 1280, centerX: 0 } }, { type: "Image", props: { var: "leftImg", right: 720, pivotX: 1, centerY: 0 } }, { type: "Image", props: { var: "rightImg", left: 720, centerY: 0 } }] }, { type: "Image", props: { var: "copyRightImg", skin: "qlgqq/q1b.png", centerX: 0, bottom: 10 } }, { type: "Box", props: { y: 963, x: 0, width: 720, var: "processBox1", name: "processBox1", height: 130 }, child: [{ type: "Image", props: { y: 46, x: 62, width: 596, var: "loadingBarBg", skin: "qqdiq/q13a.png", height: 27, centerX: 0 } }, { type: "Image", props: { y: 49, x: 64, width: 590, var: "loadingBar", skin: "qqdiq/q14a.png", height: 21 } }, { type: "Image", props: { y: 55, x: 507, width: 208, var: "loadingImg1", skin: "qqdiq/q16a.png", height: 11 } }, { type: "Image", props: { y: 6, x: 628, width: 39, var: "loadingImg2", skin: "qqdiq/q17a.png", height: 116 } }, { type: "Label", props: { y: 48, x: 293, width: 134, var: "percentageTips", valign: "middle", text: "88%", strokeColor: "#565353", stroke: 3, height: 24, fontSize: 24, color: "#fbfbf9", centerX: 0, bold: !1, align: "center" } }] }, { type: "Box", props: { y: 1065, x: 0, width: 720, var: "processBox2", name: "processBox2", height: 17 }, child: [{ type: "Image", props: { y: 0, x: 307, var: "point1", skin: "qqdiq/q20a.png", centerX: -45 } }, { type: "Image", props: { y: 0, x: 337, var: "point2", skin: "qqdiq/q19a.png", centerX: -15 } }, { type: "Image", props: { y: 0, x: 367, var: "point3", skin: "qqdiq/q18a.png", centerX: 15 } }, { type: "Image", props: { y: 0, x: 397, var: "point4", skin: "qqdiq/q18a.png", centerX: 45 } }] }, { type: "Button", props: { y: 790, x: 55, visible: !1, var: "getTipsBtn", stateNum: 1, skin: "qqdiq/q1a.png", name: "getTipsBtn", labelSize: 30, labelFont: "SimHei", labelColors: "#af4158" }, child: [{ type: "Label", props: { y: 155, x: 146, width: 323, var: "txtGetTm", text: "\u7acb\u5373\u9886\u53d6(5s)", name: "txtGetTm", height: 30, fontSize: 30, color: "#bd4f1e", align: "center" } }] }, { type: "Label", props: { y: 1107, width: 500, var: "loadingTips", valign: "middle", text: "\u52a0\u8f7d\u63cf\u8ff0", height: 26, fontSize: 26, color: "#f2ffb5", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { y: 10, x: 10, width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }] }, q_;
  }(View);qa.q_ = qS;
}(ui || (ui = {})), function (qa) {
  var qS = function (qS) {
    function q_() {
      return qS.call(this) || this;
    }return __extends(q_, qS), q_.prototype.createChildren = function () {
      View.regComponent("Text", laya.display.Text), View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement), qS.prototype.createChildren.call(this), this.createView(qa.qa.uiView);
    }, q_.uiView = { type: "View", props: { width: 720, name: "P_SelectServerViewUI", height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "bgImg", skin: "qlgqq/q2b.jpg", name: "bg", height: 1280, centerY: 0, centerX: 0 } }, { type: "Box", props: { y: 0, x: 0, width: 720, height: 1280 }, child: [{ type: "Image", props: { width: 720, var: "topImg", skin: "qlgqq/q6b.jpg", bottom: 1279 } }, { type: "Image", props: { width: 720, var: "btmImg", top: 1279, skin: "qlgqq/q3b.jpg" } }, { type: "Image", props: { var: "leftImg", skin: "qlgqq/q4b.jpg", right: 719, height: 1280 } }, { type: "Image", props: { var: "rightImg", skin: "qlgqq/q5b.jpg", left: 719, height: 1280 } }] }, { type: "Image", props: { y: 845, var: "selectServer", skin: "qlgqq/q21b.png", centerX: 0 } }, { type: "Image", props: { y: 1111, var: "imgCheatTip", skin: "qlgqq/q27b.png", name: "imgCheatTip", centerX: 0 } }, { type: "Image", props: { y: 930, x: 162, var: "hotImage", skin: "qlgqq/q18b.png" } }, { type: "Image", props: { var: "copyRightImg", skin: "qlgqq/q1b.png", centerX: 0, bottom: 10 } }, { type: "Image", props: { y: 1015, var: "enterBtn", stateNum: 1, skin: "qlgqq/q12b.png", name: "enterBtn", centerX: 0 } }, { type: "Label", props: { y: 932, x: 521, var: "selServer", valign: "middle", text: "\u9009\u670d>", height: 32, fontSize: 30, color: "#feffc0", bold: !1, align: "center" } }, { type: "Label", props: { y: 932, width: 342, var: "serverName", valign: "middle", text: "0000000000001\u670d", height: 32, fontSize: 30, color: "#feffc0", centerX: 0, bold: !1, align: "center" } }, { type: "Label", props: { width: 342, var: "versionTxt", valign: "middle", top: 20, text: "\u7248\u672c\uff1a100", strokeColor: "#20385f", stroke: 2, right: 20, height: 32, fontSize: 24, color: "#dfebff", bold: !1, align: "right" } }, { type: "Image", props: { y: 127, x: 593.5, var: "noticeBtn", skin: "qlgqq/q11b.png" } }, { type: "Image", props: { y: 71, x: -2, visible: !1, var: "noticeBg", skin: "qlgqq/q8b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "noticeClose", skin: "qlgqq/q10b.png" } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "noticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Text", props: { y: 142, x: 61, wordWrap: !0, width: 545, var: "noticeContent", valign: "top", overflow: "scroll", mouseEnabled: !0, leading: 4, height: 870, fontSize: 26, color: "#212942" } }] }, { type: "Image", props: { y: 113, x: 33, visible: !1, var: "mNoticeBg", skin: "qlgqq/q26b.png", centerY: 0, centerX: 0 }, child: [{ type: "Image", props: { y: 36.5, x: 616, var: "mNoticeClose", skin: "qlgqq/q10b.png" } }, { type: "Button", props: { y: 904, x: 190, var: "mNoticeClose2", stateNum: 1, skin: "qlgqq/q25b.png", labelSize: 30, labelColors: "#263d7d,#263d7d,#263d7d,#263d7d", label: "\u5173\u95ed" } }, { type: "Box", props: { y: 904, x: 34, width: 596, var: "boxTab", height: 59 } }, { type: "Label", props: { y: 72, x: 216, width: 234, var: "mNoticeTitle", valign: "middle", text: "\u6682\u65e0\u516c\u544a", height: 35, fontSize: 30, color: "#ffffff", bold: !1, align: "center" } }, { type: "Panel", props: { y: 142, x: 61, width: 545, var: "mNoticePanel", height: 733 }, child: [{ type: "HTMLDivElement", props: { y: 0, x: 0, width: 545, var: "mNoticeContent", height: 733 } }] }] }, { type: "Image", props: { visible: !1, var: "listBg", skin: "qlgqq/q9b.png", centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { y: 117, x: 61, width: 200, var: "leftListBox", height: 905 } }, { type: "Box", props: { y: 117, x: 293, width: 358, var: "rightListBox", height: 905 } }, { type: "Image", props: { y: 13, x: 642, var: "closeBg", skin: "qlgqq/q17b.png" } }] }] }, q_;
  }(View);qa.qa = qS;
}(ui || (ui = {})), function (qS) {
  var q_, qa;q_ = qS.qR || (qS.qR = {}), qa = function (q_) {
    function qS() {
      return q_.call(this) || this;
    }return __extends(qS, q_), qS.prototype.initialize = function () {
      q_.prototype.initialize.call(this), this.centerX = 0, this.centerY = 0, this.addEvt(), this.onOpened();
    }, qS.prototype.addEvt = function () {
      this.on(Laya.Event.CLICK, this, this.qJ);
    }, qS.prototype.rmEvts = function () {
      this.off(Laya.Event.CLICK, this, this.qJ);
    }, qS.prototype.onOpened = function () {
      this.qV = Date.now(), ServerLoading.instance.preloadServer(), ServerLoading.instance.preloadLoading();
    }, qS.prototype.destroy = function (qS) {
      void 0 === qS && (qS = !0), this.rmEvts(), q_.prototype.destroy.call(this, qS);
    }, qS.prototype.qJ = function () {
      1e4 < Date.now() - this.qV && (this.qV -= 1e3, Browser.window.PF_INFO.selectedServer.server_id && (ServerLoading.instance.enterDefaultServer(), ServerLoading.instance.sendRecord()));
    }, qS;
  }(ui.qS), q_.AuthorizationPanel = qa;
}(modules || (modules = {})), function (qS) {
  var q_, qa, qR, qJ, qW, qV;q_ = qS.qW || (qS.qW = {}), qa = Laya.Event, qR = Laya.Image, qJ = Laya.Component, qW = Laya.Loader, qV = function (q_) {
    function qz() {
      var qS = q_.call(this) || this;return qS.qk = new qR(), qS.addChild(qS.qk), qS.qz = null, qS.qb = [], qS.qH = !1, qS.qL = 0, qS.qC = !0, qS.qG = 6, qS.qt = !1, qS.on(qa.DISPLAY, qS, qS.qo), qS.on(qa.UNDISPLAY, qS, qS.q$), qS;
    }return __extends(qz, q_), qz.create = function (qS, q_, qa, qR, qJ, qV, qW) {
      void 0 === qR && (qR = 0), void 0 === qJ && (qJ = 6), void 0 === qV && (qV = !0), void 0 === qW && (qW = !1);var qk = new qz();return qk.skin(q_, qa, qR), qk.durFrm = qJ, qk.loop = qV, qk.atHide = qW, qS && qS.addChild(qk), qk;
    }, qz.play = function (qS) {
      qS && (qS.visible = !0, qS.play());
    }, qz.stop = function (qS) {
      qS && (qS.visible = !1, qS.stop());
    }, qz.prototype.destroy = function (qS) {
      Laya.timer.clear(this, this.qF), this.off(qa.DISPLAY, this, this.qo), this.off(qa.UNDISPLAY, this, this.q$), q_.prototype.destroy.call(this, qS);
    }, qz.prototype.qo = function () {}, qz.prototype.q$ = function () {}, qz.prototype.skin = function (qS, q_, qa) {
      if (this.qz != qS) {
        this.qz = qS, this.qb = [];for (var qR = 0, qJ = qa; qJ <= q_; qJ++) this.qb[qR++] = qS + "/" + qJ + ".png";var qV = qW.getRes(this.qb[0]);qV && (this.width = qV.sourceWidth, this.height = qV.sourceHeight), this.qF();
      }
    }, Object.defineProperty(qz.prototype, "atHide", { get: function () {
        return this.qt;
      }, set: function (qS) {
        this.qt = qS;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(qz.prototype, "durFrm", { set: function (qS) {
        this.qG != qS && (this.qG = qS, this.qH && (Laya.timer.clear(this, this.qF), Laya.timer.loop(this.qG * (1e3 / 60), this, this.qF)));
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(qz.prototype, "loop", { set: function (qS) {
        this.qC = qS;
      }, enumerable: !0, configurable: !0 }), qz.prototype.play = function () {
      this.qH && this.stop(), this.qH = !0, this.qL = 0, Laya.timer.loop(this.qG * (1e3 / 60), this, this.qF), this.qF();
    }, qz.prototype.stop = function () {
      this.qH = !1, this.qL = 0, this.qF(), Laya.timer.clear(this, this.qF);
    }, qz.prototype.pause = function () {
      this.qH && (this.qH = !1, Laya.timer.clear(this, this.qF));
    }, qz.prototype.resume = function () {
      this.qH || (this.qH = !0, Laya.timer.loop(this.qG * (1e3 / 60), this, this.qF), this.qF());
    }, Object.defineProperty(qz.prototype, "isPlay", { get: function () {
        return this.qH;
      }, enumerable: !0, configurable: !0 }), qz.prototype.qF = function () {
      this.qb && 0 != this.qb.length && (this.qk.skin = this.qb[this.qL], this.qH && (this.qL++, this.qL == this.qb.length && (this.qC ? this.qL = 0 : (Laya.timer.clear(this, this.qF), this.qH = !1, this.qt && (this.visible = !1), this.event(qa.COMPLETE)))));
    }, qz;
  }(qJ), q_.PanelEff = qV;
}(modules || (modules = {})), function (qS) {
  var q_, qR, qa;q_ = qS.qR || (qS.qR = {}), qR = qS.qW.PanelEff, qa = function (qa) {
    function qS(qS) {
      void 0 === qS && (qS = 0);var q_ = qa.call(this) || this;return q_.qT = { bgImgSkin: "qqdiq/q3a.jpg", topImgSkin: "qqdiq/q10a.jpg", btmImgSkin: "qqdiq/q4a.jpg", leftImgSkin: "qqdiq/q6a.jpg", rightImgSkin: "qqdiq/q8a.jpg", loadingBarBgSkin: "qqdiq/q13a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, q_.qD = { bgImgSkin: "qqdiq/q12a.jpg", topImgSkin: "qqdiq/q11a.jpg", btmImgSkin: "qqdiq/q5a.jpg", leftImgSkin: "qqdiq/q7a.jpg", rightImgSkin: "qqdiq/q9a.jpg", loadingBarBgSkin: "qqdiq/q15a.png", copyRightImgBottom: 10, processBox1Y: 963, processBox2Y: 1065, loadingTipsSize: 26, getTipsBtnVisible: !1 }, q_.qj = 0, q_.qQ(1 == qS ? q_.qD : q_.qT), q_;
    }return __extends(qS, qa), qS.prototype.initialize = function () {
      if (qa.prototype.initialize.call(this), ServerLoading.instance.preloadLoading(), this.qm = Browser.window.PF_INFO, this.centerX = 0, this.centerY = 0, this.qm) {
        var qS = this.qm.loadingType;this.loadingTips.color = 1 == qS ? "#f2ffb5" : 2 == qS ? "#000000" : "#f2ffb5";
      }this.qq = [this.point1, this.point2, this.point3, this.point4], Browser.window.watPanel = this, wxHideLoading(), ServerLoading.instance.closeAuthor(), ServerLoading.instance.closeServer(), this.onOpened();
    }, qS.prototype.toAllProgress = function (qS) {
      var q_ = this;if (-1 === qS) return q_.qj = 0, Laya.timer.clear(this, this.toAllProgress), void Laya.timer.frameLoop(1, this, this.toAllProgress);if (-2 !== qS) {
        q_.qj < .9 ? q_.qj += (.15 * Math.random() + .01) / (100 * Math.random() + 50) : q_.qj < 1 && (q_.qj += 1e-4), .9999 < q_.qj && (q_.qj = .9999, Laya.timer.clear(this, this.toAllProgress), Laya.timer.once(3e3, this, function () {
          .9 < q_.qj && toAllProgress(-1);
        }));var qa = q_.qj,
            qR = 590 * qa;q_.qj = q_.qj > qa ? q_.qj : qa, q_.loadingBar.width = qR;var qJ = q_.loadingBar.x + qR;q_.loadingImg2.x = qJ - 15, 364 <= qJ ? (q_.loadingImg1.visible = !0, q_.loadingImg1.x = qJ - 202) : q_.loadingImg1.visible = !1, q_.percentageTips.text = (100 * qa >> 0) + "%", q_.qj < .9999 && Laya.timer.frameLoop(1, this, this.toAllProgress);
      } else Laya.timer.clear(this, this.toAllProgress);
    }, qS.prototype.toProgress = function (qS, q_, qa) {
      var qR = this;1 < qS && (qS = 1);var qJ = 590 * qS;qR.qj = qR.qj > qS ? qR.qj : qS, qR.loadingBar.width = qJ;var qV = qR.loadingBar.x + qJ;qR.loadingImg2.x = qV - 15, 364 <= qV ? (qR.loadingImg1.visible = !0, qR.loadingImg1.x = qV - 202) : qR.loadingImg1.visible = !1, qR.percentageTips.text = (100 * qS >> 0) + "%", qR.loadingTips.text = q_;for (var qW = qa - 1, qk = 0; qk < this.qq.length; qk++) qR.qq[qk].skin = qk < qW ? "qqdiq/q20a.png" : qW === qk ? "qqdiq/q19a.png" : "qqdiq/q18a.png";
    }, qS.prototype.onOpened = function () {
      this.toProgress(.1, "\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...", 1), this.toAllProgress(-1), Browser.window.toAllProgress = this.toAllProgress.bind(this), Browser.window.toProgress = this.toProgress.bind(this), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.qm.lastVersion + "      \u7248\u672c\uff1a" + this.qm.wxVersion, this.showGetBtn();
    }, qS.prototype.close = function (qS) {
      this.resetWinFun(), Laya.timer.clear(this, this.toAllProgress), Laya.timer.clear(this, this.qN), ServerLoading.instance.closeLoading(), this.getTipsBtn.off(Laya.Event.CLICK, this, this.qn);
    }, qS.prototype.resetWinFun = function () {
      Browser.window.toAllProgress = function () {}, Browser.window.toProgress = function () {};
    }, qS.prototype.destroy = function (qS) {
      void 0 === qS && (qS = !0), this.resetWinFun(), qa.prototype.destroy.call(this, qS);
    }, qS.prototype.showGetBtn = function () {
      this.qm.showGetBtn && 1 == this.qm.showGetBtn && (this.getTipsBtn.visible = !0, this.getTipsBtn.tag = !0, this.getTipsBtn.skin = "qqdiq/q1a.png", this.getTipsBtn.on(Laya.Event.CLICK, this, this.qn), this.ql(), this.qB(!0));
    }, qS.prototype.qn = function () {
      this.getTipsBtn.tag && (this.getTipsBtn.tag = !1, this.getTipsBtn.skin = "qqdiq/q2a.png", this.qI(), this.qB(!1));
    }, qS.prototype.qQ = function (qS) {
      this.bgImg.skin = qS.bgImgSkin, this.topImg.skin = qS.topImgSkin, this.btmImg.skin = qS.btmImgSkin, this.leftImg.skin = qS.leftImgSkin, this.rightImg.skin = qS.rightImgSkin, this.copyRightImg.bottom = qS.copyRightImgBottom, this.processBox1.y = qS.processBox1Y, this.processBox2.y = qS.processBox2Y, this.loadingBarBg.skin = qS.loadingBarBgSkin, this.loadingTips.fontSize = qS.loadingTipsSize, this.getTipsBtn.visible = this.qm.showGetBtn && 1 == this.qm.showGetBtn, this.getTipsBtn.visible ? this.ql() : this.qI(), this.qB(this.getTipsBtn.visible);
    }, qS.prototype.ql = function () {
      this.qA || (this.qA = qR.create(this.getTipsBtn, "qfq", 4, 0, 12), this.qA.pos(161, 106), this.qA.scale(1.14, 1.15)), qR.play(this.qA);
    }, qS.prototype.qI = function () {
      this.qA && qR.stop(this.qA);
    }, qS.prototype.qB = function (qS) {
      Laya.timer.clear(this, this.qN), qS ? (this.qX = 9, this.txtGetTm.visible = !0, this.qN(), Laya.timer.loop(1e3, this, this.qN)) : this.txtGetTm.visible = !1;
    }, qS.prototype.qN = function () {
      0 < this.qX ? (this.txtGetTm.text = "\u7acb\u5373\u9886\u53d6(" + this.qX + "s)", this.qX--) : (this.txtGetTm.text = "", Laya.timer.clear(this, this.qN), this.qn());
    }, qS;
  }(ui.q_), q_.LoadingPanel = qa;
}(modules || (modules = {})), function (qS) {
  var qa, qR, qJ, q_;qa = qS.qR || (qS.qR = {}), qR = Laya.List, qJ = Laya.Event, q_ = function (q_) {
    function qS() {
      var qS = q_.call(this) || this;return qS.qh = 0, qS.qu = "multi_notice_key", qS.qK = 0, qS;
    }return __extends(qS, q_), qS.prototype.initialize = function () {
      q_.prototype.initialize.call(this), ServerLoading.instance.preloadServer(), this.centerX = 0, this.centerY = 0, this.qm = Browser.window.PF_INFO, this.qP = new qR(), this.qP.vScrollBarSkin = "", this.qP.itemRender = qa.SelectLeftListItem, this.qP.top = 5, this.qP.repeatX = 1, this.qP.spaceY = 5, this.qP.width = this.leftListBox.width, this.qP.height = this.leftListBox.height - 8, this.leftListBox.addChild(this.qP), this.qM = new qR(), this.qM.vScrollBarSkin = "", this.qM.itemRender = qa.SelectRightListItem, this.qM.top = 5, this.qM.repeatX = 1, this.qM.spaceY = 5, this.qM.width = this.rightListBox.width, this.qM.height = this.rightListBox.height - 8, this.rightListBox.addChild(this.qM), this.qr = new qR(), this.qr.hScrollBarSkin = "", this.qr.itemRender = qa.NoticeItem, this.qr.repeatY = 1, this.qr.width = this.boxTab.width, this.qr.height = this.boxTab.height, this.boxTab.addChild(this.qr);var qS = this.qm.loadingType;this.qe = 1 == qS ? "#feffc0" : 2 == qS ? "#feffc0" : 3 == qS ? "#feffc0" : 101 == qS ? "#feffc0" : "#93353b", this.enterBtn.size(506, 88), this.noticeBtn.visible = !1, this.mNoticeContent.color = "#212942", this.mNoticeContent.style.fontSize = 26, this.mNoticeContent.style.lineHeight = 28, this.mNoticeContent.mouseEnabled = !1, this.qg = [], Browser.window.initPanel = this, wxHideLoading(), this.addEvt(), this.onOpened();
    }, qS.prototype.addEvt = function () {
      this.bgImg.on(Laya.Event.CLICK, this, this.qJ), this.enterBtn.on(Laya.Event.CLICK, this, this.qx), this.selectServer.on(Laya.Event.CLICK, this, this.qs), this.selectServer.on(Laya.Event.CLICK, this, this.qs), this.closeBg.on(Laya.Event.CLICK, this, this.qU), this.noticeBtn.on(Laya.Event.CLICK, this, this.qf), this.noticeClose.on(Laya.Event.CLICK, this, this.qY), this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.qi), this.mNoticeClose.on(Laya.Event.CLICK, this, this.qZ), this.mNoticeClose2.on(Laya.Event.CLICK, this, this.qZ), this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.qp), this.qr.selectEnable = !0, this.qr.selectHandler = Laya.Handler.create(this, this.qc, null, !1);
    }, qS.prototype.rmEvts = function () {
      this.bgImg.off(Laya.Event.CLICK, this, this.qJ), this.enterBtn.off(Laya.Event.CLICK, this, this.qx), this.selectServer.off(Laya.Event.CLICK, this, this.qs), this.selectServer.off(Laya.Event.CLICK, this, this.qs), this.closeBg.off(Laya.Event.CLICK, this, this.qU), this.noticeBtn.off(Laya.Event.CLICK, this, this.qf), this.noticeClose.off(Laya.Event.CLICK, this, this.qY), this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.qi), this.mNoticeClose.off(Laya.Event.CLICK, this, this.qZ), this.mNoticeClose2.off(Laya.Event.CLICK, this, this.qZ), this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.qp), this.qr.selectEnable = !1, this.qr.selectHandler = null;
    }, qS.prototype.onOpened = function () {
      this.qV = Date.now(), this.qy = this.qm.selectedServer.server_id, this.qE(this.qm.selectedServer), this.qP.dataSource = this.qm.groupList, this.qs(), this.versionTxt.text = "\u8d44\u6e90\uff1a" + this.qm.lastVersion + "      \u7248\u672c\uff1a" + this.qm.wxVersion, this.serverName.color = this.selServer.color = this.qe, this.imgCheatTip.visible = 1 == this.qm.anti_cheat_pkg, req_multi_server_notice(4, this.qm.pkgName, this.qm.selectedServer.server_id, this.qO.bind(this));
    }, qS.prototype.destroy = function (qS) {
      void 0 === qS && (qS = !0), this.rmEvts(), this.qw(), this.qv(), this.qP && (this.qP.removeSelf(), this.qP.destroy(), this.qP = null), this.qM && (this.qM.removeSelf(), this.qM.destroy(), this.qM = null), this.qr && (this.qr.removeSelf(), this.qr.destroy(), this.qr = null), q_.prototype.destroy.call(this, qS);
    }, qS.prototype.qJ = function () {
      1e4 < Date.now() - this.qV && (this.qV -= 2e3, ServerLoading.instance.enterDefaultServer());
    }, qS.prototype.qU = function () {
      this.listBg.visible = !1;
    }, qS.prototype.qx = function () {
      this.qd(this.qm.selectedServer) && (Browser.window.PF_INFO.selectedServer = this.qm.selectedServer, req_server_check_ban(0, this.qm.selectedServer.server_id));
    }, qS.prototype.qf = function () {
      this.qSS();
    }, qS.prototype.qY = function () {
      this.noticeBg.visible = !1;
    }, qS.prototype.qi = function () {
      this.qh = this.noticeContent.mouseY, Laya.stage.on(qJ.MOUSE_MOVE, this, this.q_S), Laya.stage.on(qJ.MOUSE_UP, this, this.qw), Laya.stage.on(qJ.MOUSE_OUT, this, this.qw);
    }, qS.prototype.q_S = function () {
      if (this.noticeContent) {
        var qS = this.qh - this.noticeContent.mouseY;this.noticeContent.scrollY += qS, this.qh = this.noticeContent.mouseY;
      }
    }, qS.prototype.qw = function () {
      Laya.stage.off(qJ.MOUSE_MOVE, this, this.q_S), Laya.stage.off(qJ.MOUSE_UP, this, this.qw), Laya.stage.off(qJ.MOUSE_OUT, this, this.qw);
    }, qS.prototype.qd = function (qS) {
      return -1 == qS.status ? (alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"), !1) : 0 != qS.status || (alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"), !1);
    }, qS.prototype.qs = function () {
      this.qm.hasGroupReq ? this.listBg.visible = !0 : (this.qm.hasGroupReq = !0, req_server_group(0));
    }, qS.prototype.qO = function (qS) {
      console.log("onMultiNoticeCallback, param = ", qS);var q_ = Date.now() / 1e3,
          qa = localStorage.getItem(this.qu),
          qR = !(this.qg = []);if ("success" == qS.state) for (var qJ in qS.data) {
        var qV = qS.data[qJ],
            qW = q_ < qV.end_time,
            qk = 1 == qV.pop_type,
            qz = 2 == qV.pop_type && qV.key + "" != qa;!qR && qW && (qk || qz) && (qR = !0), qW && this.qg.push(qV), qz && localStorage.setItem(this.qu, qV.key + "");
      }this.qg.sort(function (qS, q_) {
        return qS.login_id - q_.login_id;
      }), console.log("onMultiNoticeCallback, datas = ", this.qg), qR && this.qSS();
    }, qS.prototype.preload = function () {}, qS.prototype.getStatusSrc = function (qS) {
      var q_ = "";return 2 === qS ? q_ = "qlgqq/q18b.png" : 1 === qS ? q_ = "qlgqq/q19b.png" : -1 !== qS && 0 !== qS || (q_ = "qlgqq/q20b.png"), q_;
    }, qS.prototype.qE = function (qS) {
      this.serverName.text = -1 === qS.status ? qS.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === qS.status ? qS.server_name + "(\u5f85\u5f00\u670d)" : qS.server_name, this.serverName.color = -1 === qS.status ? "#d50000" : 0 === qS.status ? "#49575a" : this.qe, this.hotImage.skin = this.getStatusSrc(qS.status), this.qm.cdn = qS.cdn || "", this.qm.selectedServer = qS, this.noticeBtn.visible = !0;
    }, qS.prototype.qaS = function (qS) {
      this.showGroupList(qS);
    }, qS.prototype.qRS = function (qS) {
      this.qE(qS), this.listBg.visible = !1;
    }, qS.prototype.qJS = function (qS) {
      this.noticeContent && (this.noticeContent.text = qS.data.content ? qS.data.content : "", this.noticeTitle.text = qS.data.title ? qS.data.title : "\u6682\u65e0\u516c\u544a");
    }, qS.prototype.showGroupList = function (qS) {
      if (void 0 === qS && (qS = 0), this.parent) {
        var q_ = this.qm.groupList;if (q_ && 0 !== q_.length) {
          for (var qa = q_.length, qR = 0; qR < qa; qR++) q_[qR].callBack = this.qaS.bind(this), q_[qR].select = qR == qS, q_[qR].index = qR;var qJ = (this.qP.array = q_)[qS].id;this.qm.serverList[qJ] ? this.showServerList(qJ) : this.qm.hasServerReq || (this.qm.hasServerReq = !0, -1 == qJ ? req_server_owner(0) : -2 == qJ ? req_recommend_server_list(0) : req_server_list(0, qJ));
        }
      }
    }, qS.prototype.showServerList = function (qS) {
      if (this.parent && this.qm.serverList[qS]) {
        for (var q_ = this.qm.serverList[qS], qa = q_.length, qR = 0; qR < qa; qR++) q_[qR].callBack = this.qRS.bind(this);this.qM.array = q_;
      }
    }, qS.prototype.qSS = function () {
      if (this.qr) {
        if (this.qg) {
          this.qr.x = 2 < this.qg.length ? 0 : (this.boxTab.width - 274 * this.qg.length) / 2;for (var qS = [], q_ = 0; q_ < this.qg.length; q_++) {
            var qa = this.qg[q_];qS.push([qa, q_ == this.qr.selectedIndex]);
          }0 < (this.qr.dataSource = qS).length ? (this.qr.selectedIndex = 0, this.qr.scrollTo(0)) : (this.mNoticeTitle.text = "\u6682\u65e0\u516c\u544a", this.mNoticeContent.text = ""), this.mNoticeClose2.visible = this.qg.length <= 1, this.boxTab.visible = 1 < this.qg.length;
        }this.mNoticeBg.visible = !0;
      }
    }, qS.prototype.qZ = function () {
      this.mNoticeBg.visible = !1;
    }, qS.prototype.qc = function () {
      if (this.qr.dataSource) {
        for (var qS, q_ = 0; q_ < this.qr.dataSource.length; q_++) {
          var qa = this.qr.dataSource[q_];qa[1] = q_ == this.qr.selectedIndex, q_ == this.qr.selectedIndex && (qS = qa[0]);
        }qS && qS.content && (qS.content = qS.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "")), this.mNoticeTitle.text = qS && qS.title ? qS.title : "", this.mNoticeContent.innerHTML = qS && qS.content ? qS.content : "", this.mNoticeContent.y = 0;
      }
    }, qS.prototype.qp = function () {
      this.qK = this.mNoticePanel.mouseY, Laya.stage.on(qJ.MOUSE_MOVE, this, this.qVS), Laya.stage.on(qJ.MOUSE_UP, this, this.qv), Laya.stage.on(qJ.MOUSE_OUT, this, this.qv);
    }, qS.prototype.qVS = function () {
      if (this.mNoticeContent) {
        var qS = this.qK - this.mNoticePanel.mouseY;this.mNoticeContent.y -= qS, this.mNoticePanel.height < this.mNoticeContent.contextHeight ? this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight ? this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight : 0 < this.mNoticeContent.y && (this.mNoticeContent.y = 0) : this.mNoticeContent.y = 0, this.qK = this.mNoticePanel.mouseY;
      }
    }, qS.prototype.qv = function () {
      Laya.stage.off(qJ.MOUSE_MOVE, this, this.qVS), Laya.stage.off(qJ.MOUSE_UP, this, this.qv), Laya.stage.off(qJ.MOUSE_OUT, this, this.qv);
    }, qS;
  }(ui.qa), qa.SelectServerPanel = q_;
}(modules || (modules = {}));var modules,
    Browser = Laya.Browser,
    Font = Laya.Font,
    Input = Laya.Input,
    Render = Laya.Render,
    Handler = Laya.Handler,
    AuthorizationPanel = modules.qR.AuthorizationPanel,
    LoadingPanel = modules.qR.LoadingPanel,
    SelectServerPanel = modules.qR.SelectServerPanel,
    ServerLoading = function () {
  function qz(qS) {
    this.m_loadingRes = ["qqdiq/q13a.png", "qqdiq/q15a.png", "qqdiq/q14a.png", "qqdiq/q16a.png", "qqdiq/q17a.png", "qqdiq/q18a.png", "qqdiq/q19a.png", "qqdiq/q20a.png", "qfq/q1c.png", "qfq/q2c.png", "qfq/q3c.png", "qfq/q4c.png", "qfq/q5c.png", "qqdiq/q3a.jpg", "qqdiq/q12a.jpg", "qqdiq/q1a.png", "qqdiq/q2a.png", "qqdiq/q4a.jpg", "qqdiq/q6a.jpg", "qqdiq/q8a.jpg", "qqdiq/q10a.jpg", "qqdiq/q5a.jpg", "qqdiq/q7a.jpg", "qqdiq/q9a.jpg", "qqdiq/q11a.jpg"], this.m_serverRes = ["qlgqq/q10b.png", "qlgqq/q11b.png", "qlgqq/q12b.png", "qlgqq/q13b.png", "qlgqq/q14b.png", "qlgqq/q15b.png", "qlgqq/q16b.png", "qlgqq/q17b.png", "qlgqq/q18b.png", "qlgqq/q19b.png", "qlgqq/q20b.png", "qlgqq/q21b.png", "qlgqq/q2b.jpg", "qlgqq/q3b.jpg", "qlgqq/q4b.jpg", "qlgqq/q5b.jpg", "qlgqq/q6b.jpg", "qlgqq/q1b.png", "qlgqq/q8b.png", "qlgqq/q9b.png", "qlgqq/q24b.png", "qlgqq/q25b.png", "qlgqq/q23b.png", "qlgqq/q26b.png", "qlgqq/q27b.png"], this.m_isPrelodServer = !1, this.m_isPrelodLoading = !1, this.qWS = !1, this.qkS = "", qz.instance = this, Laya.MiniAdpter.init(), Laya3D.init(0, 0, !1, !1, !1), DecodeTools.init(), Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, Laya.stage.screenMode = Laya.Stage.SCREEN_NONE, Laya.stage.alignH = Laya.Stage.ALIGN_CENTER, Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE, Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;var q_ = Laya.AtlasResourceManager;q_.maxTextureCount = 4, q_.atlasTextureWidth = q_.atlasTextureHeight = 1024, q_._enable(), Laya.URL.rootPath = Laya.URL.basePath = "", Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.qzS.bind(this)), Laya.Loader.preLoadedMap["res/atlas/create_role_atlas.atlas"] = { frames: { "btn_chuangjue_kaishi.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 0 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nan.png": { frame: { h: 98, idx: 0, w: 108, x: 335, y: 89 }, sourceSize: { h: 98, w: 108 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_chuangjue_nv.png": { frame: { h: 98, idx: 0, w: 107, x: 0, y: 164 }, sourceSize: { h: 98, w: 107 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_mingbg.png": { frame: { h: 74, idx: 0, w: 334, x: 0, y: 89 }, sourceSize: { h: 74, w: 334 }, spriteSourceSize: { x: 0, y: 0 } }, "image_chuangjue_suiji.png": { frame: { h: 56, idx: 0, w: 52, x: 444, y: 89 }, sourceSize: { h: 56, w: 52 }, spriteSourceSize: { x: 0, y: 0 } } }, meta: { image: "create_role_atlas.png", prefix: "create_role_atlas/" } }, Browser.window.resMgrLoad = qz.instance.requestWeb, Browser.window.imgMgrLoad = qz.instance.requestWeb, this.m_layer = new Laya.Component(), this.m_layer.name = "_wxLoadingLayer", Laya.stage.addChild(this.m_layer), this.qzS();
  }return qz.prototype.changeServerLoading = function (qS) {
    qz.instance.m_layer.visible = qS;
  }, qz.prototype.openAuthor = function () {
    qz.instance.m_author || (qz.instance.m_author = new AuthorizationPanel()), qz.instance.m_author.parent || qz.instance.m_layer.addChild(qz.instance.m_author), qz.instance.qbS();
  }, qz.prototype.closeAuthor = function () {
    this.m_author && this.m_author.parent && (Laya.stage.removeChild(this.m_author), this.m_author.destroy(!0), this.m_author = null);
  }, qz.prototype.preloadServer = function () {
    this.m_isPrelodServer || (this.m_isPrelodServer = !0, Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
      Browser.window.loadServerRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, qz.prototype.openServer = function () {
    for (var qS = function () {
      qz.instance.m_server || (qz.instance.m_server = new SelectServerPanel()), qz.instance.m_server.parent || qz.instance.m_layer.addChild(qz.instance.m_server), qz.instance.qbS();
    }, q_ = !0, qa = 0, qR = this.m_serverRes; qa < qR.length; qa++) {
      var qJ = qR[qa];if (null == Laya.Loader.getRes(qJ)) {
        q_ = !1;break;
      }
    }q_ ? qS() : Laya.loader.load(this.m_serverRes, Handler.create(this, qS));
  }, qz.prototype.closeServer = function () {
    this.m_server && this.m_server.parent && (Laya.stage.removeChild(this.m_server), this.m_server.destroy(!0), this.m_server = null);
  }, qz.prototype.preloadLoading = function () {
    this.m_isPrelodLoading || (this.m_isPrelodLoading = !0, Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      Browser.window.loadLoadingRes = !0, Browser.window.initMain(), Browser.window.enterToGame();
    })));
  }, qz.prototype.openLoading = function (qS) {
    void 0 === qS && (qS = 0), Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
      qz.instance.m_loading || (qz.instance.m_loading = new LoadingPanel(qS)), qz.instance.m_loading.parent || qz.instance.m_layer.addChild(qz.instance.m_loading), qz.instance.qbS();
    }));
  }, qz.prototype.closeLoading = function () {
    this.m_loading && this.m_loading.parent && (Laya.stage.removeChild(this.m_loading), this.m_loading.destroy(!0), this.m_loading = null);for (var qS = 0, q_ = this.m_serverRes; qS < q_.length; qS++) {
      var qa = q_[qS];Laya.Loader.clearCache(qz.instance, qa), Laya.Loader.clearRes(qa, !0);
    }for (var qR = 0, qJ = this.m_loadingRes; qR < qJ.length; qR++) {
      qa = qJ[qR];Laya.Loader.clearCache(qz.instance, qa), Laya.Loader.clearRes(qa, !0);
    }this.m_layer.parent && this.m_layer.parent.removeChild(this.m_layer);
  }, qz.prototype.setShowBtn = function () {
    this.m_loading && this.m_loading.parent && qz.instance.m_loading.showGetBtn();
  }, qz.prototype.enterDefaultServer = function () {
    var qS = Browser.window.PF_INFO.selectedServer;this.qWS || -1 == qS.status || 0 == qS.status || (this.qWS = !0, Browser.window.PF_INFO.selectedServer = qS, req_server_check_ban(0, qS.server_id));
  }, qz.prototype.sendRecord = function () {
    var qS = "";qS += "newRegister=" + Browser.window.PF_INFO.newRegister, qS += ", isPrelodServer=" + this.m_isPrelodServer, qS += ", SelectServerPanel=" + (null != qz.instance.m_server), qS += ", isPrelodLoading=" + this.m_isPrelodLoading, qS += ", LoadingPanel=" + (null != qz.instance.m_loading), qS += ", resMgrLoad=" + (Browser.window.resMgrLoad == qz.instance.requestWeb), qS += ", imgMgrLoad=" + (Browser.window.imgMgrLoad == qz.instance.requestWeb), qS += ", errUrls=" + qz.instance.qkS;for (var q_ = 0, qa = this.m_serverRes; q_ < qa.length; q_++) {
      qS += ", " + (qV = qa[q_]) + "=" + (null != Laya.Loader.getRes(qV));
    }for (var qR = 0, qJ = this.m_loadingRes; qR < qJ.length; qR++) {
      var qV;qS += ", " + (qV = qJ[qR]) + "=" + (null != Laya.Loader.getRes(qV));
    }var qW = Browser.window.PF_INFO.selectedServer;qW && (qS += ", server_status=" + qW.status, qS += ", server_id=" + qW.server_id, qS += ", server_name=" + qW.server_name);var qk = JSON.stringify({ error: "\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2", stack: qS });console.error(qk), this.qHS && this.qHS == qS || (this.qHS = qS, reqRecordError(qk));
  }, qz.prototype.qLS = function () {
    var qS = Laya.stage,
        q_ = Math.floor(qS.width),
        qa = Math.floor(qS.height);qa / q_ < 1.7777778 ? (this.viewW = Math.floor(q_ / (qa / 1280)), this.viewH = 1280, this.viewS = qa / 1280) : (this.viewW = 720, this.viewH = Math.floor(qa / (q_ / 720)), this.viewS = q_ / 720);var qR = Math.floor(qS.width),
        qJ = Math.floor(qS.height);qJ / qR < 1.7777778 ? (this.viewW = Math.floor(qR / (qJ / 1280)), this.viewH = 1280, this.viewS = qJ / 1280) : (this.viewW = 720, this.viewH = Math.floor(qJ / (qR / 720)), this.viewS = qR / 720), this.qbS();
  }, qz.prototype.qbS = function () {
    this.m_layer && (this.m_layer.size(this.viewW, this.viewH), this.m_layer.scale(this.viewS, this.viewS, !0));
  }, qz.prototype.qzS = function () {
    if (Input.isInputting && Browser.onMobile) {
      var qS = parseInt(Input.inputContainer.style.top.replace("px", "")),
          q_ = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS,
          qa = Browser.clientWidth / Render.canvas.width;return 0 < (qS = Browser.clientHeight - q_ * qa - qS) && (qS = 0), void (Browser.container.style.top = qS + "px");
    }Browser.container.style.top = "0px";var qR = Math.floor(Browser.width),
        qJ = Math.floor(Browser.height);qR = qR + 1 & 2147483646, qJ = qJ + 1 & 2147483646;var qV = Laya.stage;3 == ENV ? (qV.scaleMode = Laya.Stage.SCALE_NOSCALE, qV.width = qR, qV.height = qJ) : qJ < qR ? (qV.scaleMode = Laya.Stage.SCALE_NOSCALE, qV.width = qR, qV.height = qJ) : (qV.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH, qV.width = 840, qV.height = Math.floor(qJ / (qR / 840)) + 1 & 2147483646), this.qLS();
  }, qz.prototype.requestWeb = function (qS, q_) {
    function qa() {
      qR.onload = null, qR.onerror = null;
    }var qR,
        qJ = qS;(qR = new Browser.window.Image()).onload = function () {
      qa(), q_(qJ, 200, qR);
    }, qR.onerror = function () {
      console.warn("[warn] WX loadImage onerror:", qJ), qz.instance.qkS += qJ + "|", qa(), q_(qJ, 404, null);
    }, qR.src = qJ, -1 == qz.instance.m_serverRes.indexOf(qJ) && -1 == qz.instance.m_loadingRes.indexOf(qJ) || Laya.Loader.keepCache(qz.instance, qJ);
  }, qz.prototype.qCS = function (qS, q_) {
    return -1 != qS.indexOf(q_, qS.length - q_.length);
  }, qz;
}();!function (qS) {
  var q_, qa;q_ = qS.qR || (qS.qR = {}), qa = function (q_) {
    function qS() {
      var qS = q_.call(this) || this;return qS.qGS = "#72441d", qS.qtS = "#263d7d", qS.width = 274, qS.height = 59, qS.qoS = new Laya.Image(), qS.addChild(qS.qoS), qS.q$S = new Laya.Label(), qS.q$S.fontSize = 30, qS.q$S.color = qS.qtS, qS.addChild(qS.q$S), qS.q$S.centerX = 0, qS.q$S.centerY = 0, qS;
    }return __extends(qS, q_), qS.prototype.initialize = function () {
      q_.prototype.initialize.call(this), this.qm = Browser.window.PF_INFO;this.qm.loadingType;this.addEvt();
    }, Object.defineProperty(qS.prototype, "dataSource", { set: function (qS) {
        qS && this.setData(qS);
      }, enumerable: !0, configurable: !0 }), qS.prototype.setData = function (qS) {
      this.qFS = qS[0], this.qTS = qS[1], this.q$S.text = this.qFS.title, this.q$S.color = this.qTS ? this.qGS : this.qtS, this.qoS.skin = this.qTS ? "qlgqq/q25b.png" : "qlgqq/q24b.png";
    }, qS.prototype.destroy = function (qS) {
      void 0 === qS && (qS = !0), this.rmEvts(), q_.prototype.destroy.call(this, qS);
    }, qS.prototype.addEvt = function () {}, qS.prototype.rmEvts = function () {}, qS;
  }(Laya.View), q_.NoticeItem = qa;
}(modules || (modules = {})), function (qS) {
  var q_, qa;q_ = qS.qR || (qS.qR = {}), qa = function (q_) {
    function qS() {
      var qS = q_.call(this) || this;return qS.width = 192, qS.height = 70, qS.qoS = new Laya.Image(), qS.addChild(qS.qoS), qS.q$S = new Laya.Label(), qS.q$S.fontSize = 30, qS.q$S.color = qS.qe, qS.addChild(qS.q$S), qS.q$S.centerX = 0, qS.q$S.centerY = 0, qS;
    }return __extends(qS, q_), qS.prototype.initialize = function () {
      q_.prototype.initialize.call(this), this.qm = Browser.window.PF_INFO;var qS = this.qm.loadingType;this.qe = 1 == qS ? "#263d7d" : 2 == qS ? "#263d7d" : 3 == qS ? "#763042" : "#263d7d", this.addEvt();
    }, Object.defineProperty(qS.prototype, "dataSource", { set: function (qS) {
        qS && this.setData(qS);
      }, enumerable: !0, configurable: !0 }), qS.prototype.setData = function (qS) {
      this.qFS = qS, this.q$S.text = qS.name, this.qoS.skin = qS.select ? "qlgqq/q14b.png" : "qlgqq/q15b.png";
    }, qS.prototype.destroy = function (qS) {
      void 0 === qS && (qS = !0), this.rmEvts(), q_.prototype.destroy.call(this, qS);
    }, qS.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, qS.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, qS.prototype.clkHdler = function () {
      this.qFS && this.qFS.callBack && this.qFS.callBack(this.qFS.index);
    }, qS;
  }(Laya.View), q_.SelectLeftListItem = qa;
}(modules || (modules = {})), function (qS) {
  var q_, qa;q_ = qS.qR || (qS.qR = {}), qa = function (q_) {
    function qS() {
      var qS = q_.call(this) || this;return qS.qoS = new Laya.Image("qlgqq/q16b.png"), qS.q$S = new Laya.Label(), qS.q$S.fontSize = 30, qS.q$S.color = qS.qe, qS.addChild(qS.qoS), qS.qDS = new Laya.Image(), qS.addChild(qS.qDS), qS.width = 358, qS.height = 70, qS.addChild(qS.q$S), qS.qDS.centerY = 0, qS.qDS.x = 18, qS.q$S.x = 80, qS.q$S.centerY = 0, qS.qoS.graphics.drawRect(0, 0, qS.width, qS.height, "#00sasd"), qS;
    }return __extends(qS, q_), qS.prototype.initialize = function () {
      q_.prototype.initialize.call(this), this.qm = Browser.window.PF_INFO;var qS = this.qm.loadingType;this.qe = 1 == qS ? "#34267d" : 2 == qS ? "#34267d" : 3 == qS ? "#763042" : "#34267d", this.addEvt();
    }, Object.defineProperty(qS.prototype, "dataSource", { set: function (qS) {
        qS && this.setData(qS);
      }, enumerable: !0, configurable: !0 }), qS.prototype.setData = function (qS) {
      this.qFS = qS, this.q$S.color = -1 === qS.status ? "#d50000" : 0 === qS.status ? "#49575a" : this.qe, this.q$S.text = -1 === qS.status ? qS.server_name + "(\u7ef4\u62a4\u4e2d)" : 0 === qS.status ? qS.server_name + "(\u5f85\u5f00\u670d)" : qS.server_name, this.qDS.skin = this.getStatusSrc(qS.status);
    }, qS.prototype.destroy = function (qS) {
      void 0 === qS && (qS = !0), this.rmEvts(), q_.prototype.destroy.call(this, qS);
    }, qS.prototype.addEvt = function () {
      this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, qS.prototype.rmEvts = function () {
      this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
    }, qS.prototype.clkHdler = function () {
      this.qFS && this.qFS.callBack && this.qFS.callBack(this.qFS);
    }, qS.prototype.getStatusSrc = function (qS) {
      var q_ = "";return 2 === qS ? q_ = "qlgqq/q18b.png" : 1 === qS ? q_ = "qlgqq/q19b.png" : -1 !== qS && 0 !== qS || (q_ = "qlgqq/q20b.png"), q_;
    }, qS;
  }(Laya.View), q_.SelectRightListItem = qa;
}(modules || (modules = {})), window.ServerLoading = ServerLoading;