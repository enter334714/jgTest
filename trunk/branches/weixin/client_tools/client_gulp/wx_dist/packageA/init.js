"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) ||
        function (d, b) {
            for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p];
        };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var P_WXAuthorizationViewUI = (function (_super) {
        __extends(P_WXAuthorizationViewUI, _super);
        function P_WXAuthorizationViewUI() {
            return _super.call(this) || this;
        }
        P_WXAuthorizationViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.P_WXAuthorizationViewUI.uiView);
        };
        P_WXAuthorizationViewUI.uiView = { "type": "View", "props": { "width": 720, "name": "P_WXAuthorizationViewUI", "height": 1280 }, "child": [{ "type": "Image", "props": { "width": 720, "var": "bgImg", "skin": "wxlogin_atlas/image_login_loginbg.jpg", "name": "bg", "height": 1280, "centerY": 0, "centerX": 0 } }, { "type": "Box", "props": { "y": 0, "width": 720, "right": 0, "height": 1280 }, "child": [{ "type": "Image", "props": { "width": 720, "var": "topImg", "top": -139, "skin": "wxlogin_atlas/image_login_loginbg_top.jpg", "height": 139, "centerX": 0, "anchorY": 1 } }, { "type": "Image", "props": { "width": 720, "var": "btmImg", "top": 1280, "skin": "wxlogin_atlas/image_login_loginbg_bottom.jpg", "height": 139, "centerX": 0 } }, { "type": "Image", "props": { "x": -220, "width": 220, "var": "leftImg", "skin": "wxlogin_atlas/image_login_loginbg_left.jpg", "left": -220, "height": 1280, "centerY": 0 } }, { "type": "Image", "props": { "width": 220, "var": "rightImg", "skin": "wxlogin_atlas/image_login_loginbg_right.jpg", "left": 720, "height": 1280, "centerY": 0 } }] }] };
        return P_WXAuthorizationViewUI;
    }(View));
    ui.P_WXAuthorizationViewUI = P_WXAuthorizationViewUI;
})(ui || (ui = {}));
(function (ui) {
    var P_WXLoadingViewUI = (function (_super) {
        __extends(P_WXLoadingViewUI, _super);
        function P_WXLoadingViewUI() {
            return _super.call(this) || this;
        }
        P_WXLoadingViewUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.P_WXLoadingViewUI.uiView);
        };
        P_WXLoadingViewUI.uiView = { "type": "View", "props": { "width": 720, "name": "P_LoadingView", "height": 1280 }, "child": [{ "type": "Image", "props": { "width": 720, "var": "bgImg", "name": "bg", "height": 1280, "centerY": 0, "centerX": 0 } }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "var": "topImg", "centerX": 0, "bottom": 1280, "anchorY": 1 } }, { "type": "Image", "props": { "var": "btmImg", "top": 1280, "centerX": 0 } }, { "type": "Image", "props": { "var": "leftImg", "right": 720, "pivotX": 1, "centerY": 0 } }, { "type": "Image", "props": { "var": "rightImg", "left": 720, "centerY": 0 } }] }, { "type": "Image", "props": { "var": "copyRightImg", "skin": "wxlogin_atlas/image_denglu_txtshenpi.png", "centerX": 0, "bottom": 10 } }, { "type": "Box", "props": { "y": 963, "x": 0, "width": 720, "var": "processBox1", "name": "processBox1", "height": 130 }, "child": [{ "type": "Image", "props": { "y": 46, "x": 62, "width": 596, "var": "loadingBarBg", "skin": "wxloading_atlas/image_loding_bar0.png", "height": 27, "centerX": 0 } }, { "type": "Image", "props": { "y": 49, "x": 64, "width": 590, "var": "loadingBar", "skin": "wxloading_atlas/image_loding_bar1.png", "height": 21 } }, { "type": "Image", "props": { "y": 55, "x": 507, "width": 208, "var": "loadingImg1", "skin": "wxloading_atlas/image_loding_bar2.png", "height": 11 } }, { "type": "Image", "props": { "y": 6, "x": 628, "width": 39, "var": "loadingImg2", "skin": "wxloading_atlas/image_loding_bar3.png", "height": 116 } }, { "type": "Label", "props": { "y": 48, "x": 293, "width": 134, "var": "percentageTips", "valign": "middle", "text": "88%", "strokeColor": "#565353", "stroke": 3, "height": 24, "fontSize": 24, "color": "#fbfbf9", "centerX": 0, "bold": false, "align": "center" } }] }, { "type": "Box", "props": { "y": 1065, "x": 0, "width": 720, "var": "processBox2", "name": "processBox2", "height": 17 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 307, "var": "point1", "skin": "wxloading_atlas/image_login_point3.png", "centerX": -45 } }, { "type": "Image", "props": { "y": 0, "x": 337, "var": "point2", "skin": "wxloading_atlas/image_login_point2.png", "centerX": -15 } }, { "type": "Image", "props": { "y": 0, "x": 367, "var": "point3", "skin": "wxloading_atlas/image_login_point1.png", "centerX": 15 } }, { "type": "Image", "props": { "y": 0, "x": 397, "var": "point4", "skin": "wxloading_atlas/image_login_point1.png", "centerX": 45 } }] }, { "type": "Button", "props": { "y": 790, "x": 55, "visible": false, "var": "getTipsBtn", "stateNum": 1, "skin": "wxloading_atlas/btn_loding_abcelq0.png", "name": "getTipsBtn", "labelSize": 30, "labelFont": "SimHei", "labelColors": "#af4158" }, "child": [{ "type": "Label", "props": { "y": 155, "x": 146, "width": 323, "var": "txtGetTm", "text": "立即领取(5s)", "name": "txtGetTm", "height": 30, "fontSize": 30, "color": "#bd4f1e", "align": "center" } }] }, { "type": "Label", "props": { "y": 1107, "width": 500, "var": "loadingTips", "valign": "middle", "text": "加载描述", "height": 26, "fontSize": 26, "color": "#f2ffb5", "centerX": 0, "bold": false, "align": "center" } }, { "type": "Label", "props": { "y": 10, "x": 10, "width": 342, "var": "versionTxt", "valign": "middle", "top": 20, "text": "版本：100", "strokeColor": "#20385f", "stroke": 2, "right": 20, "height": 32, "fontSize": 24, "color": "#dfebff", "bold": false, "align": "right" } }] };
        return P_WXLoadingViewUI;
    }(View));
    ui.P_WXLoadingViewUI = P_WXLoadingViewUI;
})(ui || (ui = {}));
(function (ui) {
    var P_WXSelectServerViewUI = (function (_super) {
        __extends(P_WXSelectServerViewUI, _super);
        function P_WXSelectServerViewUI() {
            return _super.call(this) || this;
        }
        P_WXSelectServerViewUI.prototype.createChildren = function () {
            View.regComponent("HTMLDivElement", laya.html.dom.HTMLDivElement);
            View.regComponent("Text", laya.display.Text);
            _super.prototype.createChildren.call(this);
            this.createView(ui.P_WXSelectServerViewUI.uiView);
        };
        P_WXSelectServerViewUI.uiView = { "type": "View", "props": { "width": 720, "name": "P_SelectServerViewUI", "height": 1280 }, "child": [{ "type": "Image", "props": { "width": 720, "var": "bgImg", "skin": "wxlogin_atlas/image_login_loginbg.jpg", "name": "bg", "height": 1280, "centerY": 0, "centerX": 0 } }, { "type": "Box", "props": { "y": 0, "x": 0, "width": 720, "height": 1280 }, "child": [{ "type": "Image", "props": { "width": 720, "var": "topImg", "skin": "wxlogin_atlas/image_login_loginbg_top.jpg", "bottom": 1279 } }, { "type": "Image", "props": { "width": 720, "var": "btmImg", "top": 1279, "skin": "wxlogin_atlas/image_login_loginbg_bottom.jpg" } }, { "type": "Image", "props": { "var": "leftImg", "skin": "wxlogin_atlas/image_login_loginbg_left.jpg", "right": 719, "height": 1280 } }, { "type": "Image", "props": { "var": "rightImg", "skin": "wxlogin_atlas/image_login_loginbg_right.jpg", "left": 719, "height": 1280 } }] }, { "type": "Image", "props": { "y": 845, "var": "selectServer", "skin": "wxlogin_atlas/image_login_xuanqubg.png", "centerX": 0 } }, { "type": "Image", "props": { "y": 1102, "var": "imgCheatTip", "skin": "wxlogin_atlas/image_loding_txtbhcc.png", "name": "imgCheatTip", "centerX": 0 } }, { "type": "Image", "props": { "y": 930, "x": 162, "var": "hotImage", "skin": "wxlogin_atlas/image_login_changtong.png" } }, { "type": "Image", "props": { "var": "copyRightImg", "skin": "wxlogin_atlas/image_denglu_txtshenpi.png", "centerX": 0, "bottom": 30 } }, { "type": "Image", "props": { "y": 1015, "var": "enterBtn", "stateNum": 1, "skin": "wxlogin_atlas/btn_login_loginanniu.png", "name": "enterBtn", "centerX": 0 } }, { "type": "Image", "props": { "x": 196, "visible": false, "var": "privacyToggle", "skin": "wxlogin_atlas/image_xuanfu_gx1.png", "bottom": 4 } }, { "type": "Label", "props": { "y": 640, "x": 0, "width": 720, "var": "txtTip", "valign": "middle", "text": "提示内容", "strokeColor": "#ffffff", "stroke": 2, "height": 32, "fontSize": 32, "color": "#ff0000", "bold": false, "align": "center" } }, { "type": "Label", "props": { "y": 932, "x": 521, "var": "selServer", "valign": "middle", "text": "选服>", "height": 32, "fontSize": 30, "color": "#feffc0", "bold": false, "align": "center" } }, { "type": "Label", "props": { "y": 932, "width": 342, "var": "serverName", "valign": "middle", "text": "0000000000001服", "height": 32, "fontSize": 30, "color": "#feffc0", "centerX": 0, "bold": false, "align": "center" } }, { "type": "Label", "props": { "width": 342, "var": "versionTxt", "valign": "middle", "top": 20, "text": "版本：100", "strokeColor": "#20385f", "stroke": 2, "right": 20, "height": 32, "fontSize": 24, "color": "#dfebff", "bold": false, "align": "right" } }, { "type": "HTMLDivElement", "props": { "y": 1255, "x": 256, "visible": false, "var": "privacyTip", "height": 16 } }, { "type": "Image", "props": { "y": 127, "x": 593.5, "var": "noticeBtn", "skin": "wxlogin_atlas/btn_login_gonggao.png" } }, { "type": "Image", "props": { "y": 257, "x": 594, "visible": false, "var": "privacyBtn", "skin": "wxlogin_atlas/btn_login_yingsi.png", "name": "privacyBtn" } }, { "type": "Image", "props": { "y": 71, "x": -2, "visible": false, "var": "noticeBg", "skin": "wxlogin_atlas/image_login_notice.png", "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 36.5, "x": 616, "var": "noticeClose", "skin": "wxlogin_atlas/btn_com_chuangback.png" } }, { "type": "Label", "props": { "y": 72, "x": 216, "width": 234, "var": "noticeTitle", "valign": "middle", "text": "暂无公告", "height": 35, "fontSize": 30, "color": "#ffffff", "bold": false, "align": "center" } }, { "type": "Text", "props": { "y": 142, "x": 61, "wordWrap": true, "width": 545, "var": "noticeContent", "valign": "top", "overflow": "scroll", "mouseEnabled": true, "leading": 4, "height": 870, "fontSize": 26, "color": "#212942" } }] }, { "type": "Image", "props": { "y": 113, "x": 33, "visible": false, "var": "mNoticeBg", "skin": "wxlogin_atlas/image_login_notice.png", "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 36.5, "x": 616, "var": "mNoticeClose", "skin": "wxlogin_atlas/btn_com_chuangback.png" } }, { "type": "Button", "props": { "y": 904, "x": 190, "var": "mNoticeClose2", "stateNum": 1, "skin": "wxlogin_atlas/btn_com_long1.png", "labelSize": 30, "labelColors": "#263d7d,#263d7d,#263d7d,#263d7d", "label": "关闭" } }, { "type": "Box", "props": { "y": 904, "x": 34, "width": 596, "var": "boxTab", "height": 59 } }, { "type": "Label", "props": { "y": 72, "x": 216, "width": 234, "var": "mNoticeTitle", "valign": "middle", "text": "暂无公告", "height": 35, "fontSize": 30, "color": "#ffffff", "bold": false, "align": "center" } }, { "type": "Panel", "props": { "y": 142, "x": 61, "width": 545, "var": "mNoticePanel", "height": 733 }, "child": [{ "type": "HTMLDivElement", "props": { "y": 0, "x": 0, "width": 545, "var": "mNoticeContent", "height": 733 } }] }] }, { "type": "Image", "props": { "visible": false, "var": "privacyBg", "skin": "wxlogin_atlas/image_login_notice.png", "name": "privacyBg", "centerY": 0, "centerX": 0 }, "child": [{ "type": "Image", "props": { "y": 36.5, "x": 616, "var": "privacyClose", "skin": "wxlogin_atlas/btn_com_chuangback.png" } }, { "type": "Button", "props": { "y": 904, "x": 190, "var": "privacyClose2", "stateNum": 1, "skin": "wxlogin_atlas/btn_com_long1.png", "labelSize": 30, "labelColors": "#263d7d,#263d7d,#263d7d,#263d7d", "label": "关闭" } }, { "type": "Box", "props": { "y": 904, "x": 34, "width": 596, "var": "boxTabPrivacy", "height": 59 } }, { "type": "Label", "props": { "y": 72, "x": 216, "width": 234, "var": "privacyTitle", "valign": "middle", "text": "暂无公告", "height": 35, "fontSize": 30, "color": "#ffffff", "bold": false, "align": "center" } }, { "type": "Panel", "props": { "y": 142, "x": 61, "width": 545, "var": "privacyPanel", "height": 733 }, "child": [{ "type": "HTMLDivElement", "props": { "y": 0, "x": 0, "width": 545, "var": "privacyContent", "height": 733 } }] }] }, { "type": "Image", "props": { "visible": false, "var": "listBg", "skin": "wxlogin_atlas/image_xuanfu_xfbg.png", "centerY": 0, "centerX": 0 }, "child": [{ "type": "Box", "props": { "y": 117, "x": 61, "width": 200, "var": "leftListBox", "height": 905 } }, { "type": "Box", "props": { "y": 117, "x": 293, "width": 358, "var": "rightListBox", "height": 905 } }, { "type": "Image", "props": { "y": 13, "x": 642, "var": "closeBg", "skin": "wxlogin_atlas/image_com_tuichu.png" } }] }] };
        return P_WXSelectServerViewUI;
    }(View));
    ui.P_WXSelectServerViewUI = P_WXSelectServerViewUI;
})(ui || (ui = {}));
var modules;
(function (modules) {
    var n_selectServer;
    (function (n_selectServer) {
        var AuthorizationPanel = (function (_super) {
            __extends(AuthorizationPanel, _super);
            function AuthorizationPanel() {
                return _super.call(this) || this;
            }
            AuthorizationPanel.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.centerX = 0;
                this.centerY = 0;
                this.addEvt();
                this.onOpened();
            };
            AuthorizationPanel.prototype.addEvt = function () {
                this.on(Laya.Event.CLICK, this, this.p_onClickHandler);
            };
            AuthorizationPanel.prototype.rmEvts = function () {
                this.off(Laya.Event.CLICK, this, this.p_onClickHandler);
            };
            AuthorizationPanel.prototype.onOpened = function () {
                this.p_openTime = Date.now();
                ServerLoading.instance.preloadServer();
                ServerLoading.instance.preloadLoading();
            };
            AuthorizationPanel.prototype.destroy = function (destroyChild) {
                if (destroyChild === void 0) { destroyChild = true; }
                this.rmEvts();
                _super.prototype.destroy.call(this, destroyChild);
            };
            AuthorizationPanel.prototype.p_onClickHandler = function () {
                var time = Date.now();
                if (time - this.p_openTime > 10000) {
                    this.p_openTime -= 1000;
                    var server = Browser.window.PF_INFO.selectedServer;
                    if (server.server_id) {
                        ServerLoading.instance.enterDefaultServer();
                        ServerLoading.instance.sendRecord();
                    }
                }
            };
            return AuthorizationPanel;
        }(ui.P_WXAuthorizationViewUI));
        n_selectServer.AuthorizationPanel = AuthorizationPanel;
    })(n_selectServer = modules.n_selectServer || (modules.n_selectServer = {}));
})(modules || (modules = {}));
var modules;
(function (modules) {
    var n_common;
    (function (n_common) {
        var Event = Laya.Event;
        var Image = Laya.Image;
        var Component = Laya.Component;
        var Loader = Laya.Loader;
        var PanelEff = (function (_super) {
            __extends(PanelEff, _super);
            function PanelEff() {
                var _this = _super.call(this) || this;
                _this.p_img = new Image();
                _this.addChild(_this.p_img);
                _this.p_skin = null;
                _this.p_frmUrls = [];
                _this.p_isPlay = false;
                _this.p_curFrmIdx = 0;
                _this.p_loop = true;
                _this.p_frmTm = 6;
                _this.p_atHide = false;
                _this.on(Event.DISPLAY, _this, _this.p_displayHdler);
                _this.on(Event.UNDISPLAY, _this, _this.p_undisplayHdler);
                return _this;
            }
            PanelEff.create = function (parentNode, skin, maxFrmIdx, minFrmIdx, durFrm, loop, atHide) {
                if (minFrmIdx === void 0) { minFrmIdx = 0; }
                if (durFrm === void 0) { durFrm = 6; }
                if (loop === void 0) { loop = true; }
                if (atHide === void 0) { atHide = false; }
                var eff = new PanelEff();
                eff.skin(skin, maxFrmIdx, minFrmIdx);
                eff.durFrm = durFrm;
                eff.loop = loop;
                eff.atHide = atHide;
                if (parentNode) {
                    parentNode.addChild(eff);
                }
                return eff;
            };
            PanelEff.play = function (eff) {
                if (!eff)
                    return;
                eff.visible = true;
                eff.play();
            };
            PanelEff.stop = function (eff) {
                if (!eff)
                    return;
                eff.visible = false;
                eff.stop();
            };
            PanelEff.prototype.destroy = function (destroyChild) {
                Laya.timer.clear(this, this.p_loopHandler);
                this.off(Event.DISPLAY, this, this.p_displayHdler);
                this.off(Event.UNDISPLAY, this, this.p_undisplayHdler);
                _super.prototype.destroy.call(this, destroyChild);
            };
            PanelEff.prototype.p_displayHdler = function () {
            };
            PanelEff.prototype.p_undisplayHdler = function () {
            };
            PanelEff.prototype.skin = function (skin, maxIdx, minIdx) {
                if (this.p_skin == skin) {
                    return;
                }
                this.p_skin = skin;
                this.p_frmUrls = [];
                var count = 0;
                for (var i = minIdx; i <= maxIdx; i++) {
                    this.p_frmUrls[count++] = skin + "/" + i + ".png";
                }
                var texture = Loader.getRes(this.p_frmUrls[0]);
                if (texture) {
                    this.width = texture.sourceWidth;
                    this.height = texture.sourceHeight;
                }
                this.p_loopHandler();
            };
            Object.defineProperty(PanelEff.prototype, "atHide", {
                get: function () {
                    return this.p_atHide;
                },
                set: function (value) {
                    this.p_atHide = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PanelEff.prototype, "durFrm", {
                set: function (value) {
                    if (this.p_frmTm == value) {
                        return;
                    }
                    this.p_frmTm = value;
                    if (this.p_isPlay) {
                        Laya.timer.clear(this, this.p_loopHandler);
                        Laya.timer.loop(this.p_frmTm * (1000 / 60), this, this.p_loopHandler);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PanelEff.prototype, "loop", {
                set: function (value) {
                    this.p_loop = value;
                },
                enumerable: true,
                configurable: true
            });
            PanelEff.prototype.play = function () {
                if (this.p_isPlay) {
                    this.stop();
                }
                this.p_isPlay = true;
                this.p_curFrmIdx = 0;
                Laya.timer.loop(this.p_frmTm * (1000 / 60), this, this.p_loopHandler);
                this.p_loopHandler();
            };
            PanelEff.prototype.stop = function () {
                this.p_isPlay = false;
                this.p_curFrmIdx = 0;
                this.p_loopHandler();
                Laya.timer.clear(this, this.p_loopHandler);
            };
            PanelEff.prototype.pause = function () {
                if (!this.p_isPlay) {
                    return;
                }
                this.p_isPlay = false;
                Laya.timer.clear(this, this.p_loopHandler);
            };
            PanelEff.prototype.resume = function () {
                if (this.p_isPlay) {
                    return;
                }
                this.p_isPlay = true;
                Laya.timer.loop(this.p_frmTm * (1000 / 60), this, this.p_loopHandler);
                this.p_loopHandler();
            };
            Object.defineProperty(PanelEff.prototype, "isPlay", {
                get: function () {
                    return this.p_isPlay;
                },
                enumerable: true,
                configurable: true
            });
            PanelEff.prototype.p_loopHandler = function () {
                if (!this.p_frmUrls || this.p_frmUrls.length == 0)
                    return;
                this.p_img.skin = this.p_frmUrls[this.p_curFrmIdx];
                if (!this.p_isPlay)
                    return;
                this.p_curFrmIdx++;
                if (this.p_curFrmIdx == this.p_frmUrls.length) {
                    if (this.p_loop) {
                        this.p_curFrmIdx = 0;
                    }
                    else {
                        Laya.timer.clear(this, this.p_loopHandler);
                        this.p_isPlay = false;
                        if (this.p_atHide)
                            this.visible = false;
                        this.event(Event.COMPLETE);
                    }
                }
            };
            return PanelEff;
        }(Component));
        n_common.PanelEff = PanelEff;
    })(n_common = modules.n_common || (modules.n_common = {}));
})(modules || (modules = {}));
var modules;
(function (modules) {
    var n_selectServer;
    (function (n_selectServer) {
        var PanelEff = modules.n_common.PanelEff;
        var LoadingPanel = (function (_super) {
            __extends(LoadingPanel, _super);
            function LoadingPanel(newRegister) {
                if (newRegister === void 0) { newRegister = 0; }
                var _this = _super.call(this) || this;
                _this.p_uiData1 = {
                    "bgImgSkin": "wxloading_atlas/image_loading_bg.jpg",
                    "topImgSkin": "wxloading_atlas/image_loading_bg_top.jpg",
                    "btmImgSkin": "wxloading_atlas/image_loading_bg_bottom.jpg",
                    "leftImgSkin": "wxloading_atlas/image_loading_bg_left.jpg",
                    "rightImgSkin": "wxloading_atlas/image_loading_bg_right.jpg",
                    "loadingBarBgSkin": "wxloading_atlas/image_loding_bar0.png",
                    "copyRightImgBottom": 10,
                    "processBox1Y": 963,
                    "processBox2Y": 1065,
                    "loadingTipsSize": 26,
                    "getTipsBtnVisible": false,
                };
                _this.p_uiData2 = {
                    "bgImgSkin": "wxloading_atlas/image_loading_bg2.jpg",
                    "topImgSkin": "wxloading_atlas/image_loading_bg_top2.jpg",
                    "btmImgSkin": "wxloading_atlas/image_loading_bg_bottom2.jpg",
                    "leftImgSkin": "wxloading_atlas/image_loading_bg_left2.jpg",
                    "rightImgSkin": "wxloading_atlas/image_loading_bg_right2.jpg",
                    "loadingBarBgSkin": "wxloading_atlas/image_loding_bar02.png",
                    "copyRightImgBottom": 10,
                    "processBox1Y": 963,
                    "processBox2Y": 1065,
                    "loadingTipsSize": 26,
                    "getTipsBtnVisible": false,
                };
                _this.p_loadPer = 0;
                _this.p_changeLoading((newRegister == 1 ? _this.p_uiData2 : _this.p_uiData1));
                return _this;
            }
            LoadingPanel.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                ServerLoading.instance.preloadLoading();
                this.P_PFINFO = Browser.window.PF_INFO;
                this.centerX = 0;
                this.centerY = 0;
                if (this.P_PFINFO) {
                    var loadingType = this.P_PFINFO.loadingType;
                    if (loadingType == 1) {
                        this.loadingTips.color = "#f2ffb5";
                    }
                    else if (loadingType == 2) {
                        this.loadingTips.color = "#000000";
                    }
                    else if (loadingType == 101) {
                        this.loadingTips.color = "#000000";
                    }
                    else {
                        this.loadingTips.color = "#f2ffb5";
                    }
                }
                this.p_pointArr = [this.point1, this.point2, this.point3, this.point4];
                Browser.window.watPanel = this;
                wxHideLoading();
                ServerLoading.instance.closeAuthor();
                ServerLoading.instance.closeServer();
                this.onOpened();
            };
            LoadingPanel.prototype.toAllProgress = function (time) {
                var loading = this;
                if (time === -1) {
                    loading.p_loadPer = 0;
                    Laya.timer.clear(this, this.toAllProgress);
                    Laya.timer.frameLoop(1, this, this.toAllProgress);
                    return;
                }
                if (time === -2) {
                    Laya.timer.clear(this, this.toAllProgress);
                    return;
                }
                if (loading.p_loadPer < 0.9) {
                    loading.p_loadPer += (Math.random() * 0.15 + 0.01) / (Math.random() * 100 + 50);
                }
                else if (loading.p_loadPer < 1) {
                    loading.p_loadPer += 0.01 / 100;
                }
                if (loading.p_loadPer > 0.9999) {
                    loading.p_loadPer = 0.9999;
                    Laya.timer.clear(this, this.toAllProgress);
                    Laya.timer.once(3000, this, function () {
                        if (loading.p_loadPer > 0.9)
                            toAllProgress(-1);
                    });
                }
                var perValue = loading.p_loadPer;
                var pro = perValue * 590;
                loading.p_loadPer = loading.p_loadPer > perValue ? loading.p_loadPer : perValue;
                loading.loadingBar.width = pro;
                var cur = loading.loadingBar.x + pro;
                loading.loadingImg2.x = cur - 15;
                if (cur >= 162 + 202) {
                    loading.loadingImg1.visible = true;
                    loading.loadingImg1.x = cur - 202;
                }
                else {
                    loading.loadingImg1.visible = false;
                }
                loading.percentageTips.text = (perValue * 100 >> 0) + "%";
                if (loading.p_loadPer < 0.9999) {
                    Laya.timer.frameLoop(1, this, this.toAllProgress);
                }
            };
            LoadingPanel.prototype.toProgress = function (perValue, str, currTaskIndex) {
                var loading = this;
                if (perValue > 1)
                    perValue = 1;
                var pro = perValue * 590;
                loading.p_loadPer = loading.p_loadPer > perValue ? loading.p_loadPer : perValue;
                loading.loadingBar.width = pro;
                var cur = loading.loadingBar.x + pro;
                loading.loadingImg2.x = cur - 15;
                if (cur >= 162 + 202) {
                    loading.loadingImg1.visible = true;
                    loading.loadingImg1.x = cur - 202;
                }
                else {
                    loading.loadingImg1.visible = false;
                }
                loading.percentageTips.text = (perValue * 100 >> 0) + "%";
                loading.loadingTips.text = str;
                var currPage = currTaskIndex - 1;
                for (var i = 0; i < this.p_pointArr.length; i++) {
                    loading.p_pointArr[i].skin = currPage > i ? "wxloading_atlas/image_login_point3.png" : (currPage === i ? "wxloading_atlas/image_login_point2.png" : "wxloading_atlas/image_login_point1.png");
                }
            };
            LoadingPanel.prototype.onOpened = function () {
                this.toProgress(0.1, "正在加载资源...", 1);
                this.toAllProgress(-1);
                Browser.window.toAllProgress = this.toAllProgress.bind(this);
                Browser.window.toProgress = this.toProgress.bind(this);
                this.versionTxt.text = "资源：" + this.P_PFINFO.lastVersion + "      版本：" + this.P_PFINFO.wxVersion;
                this.showGetBtn();
            };
            LoadingPanel.prototype.close = function (openId) {
                this.resetWinFun();
                Laya.timer.clear(this, this.toAllProgress);
                Laya.timer.clear(this, this.p_autoGetTimer);
                ServerLoading.instance.closeLoading();
                this.getTipsBtn.off(Laya.Event.CLICK, this, this.p_getTipsBtnCLk);
            };
            LoadingPanel.prototype.resetWinFun = function () {
                Browser.window.toAllProgress = function () { };
                Browser.window.toProgress = function () { };
            };
            LoadingPanel.prototype.destroy = function (destroyChild) {
                if (destroyChild === void 0) { destroyChild = true; }
                this.resetWinFun();
                _super.prototype.destroy.call(this, destroyChild);
            };
            LoadingPanel.prototype.showGetBtn = function () {
                if (this.P_PFINFO.showGetBtn && this.P_PFINFO.showGetBtn == 1) {
                    this.getTipsBtn.visible = true;
                    this.getTipsBtn.tag = true;
                    this.getTipsBtn.skin = "wxloading_atlas/btn_loding_abcelq0.png";
                    this.getTipsBtn.on(Laya.Event.CLICK, this, this.p_getTipsBtnCLk);
                    this.p_playGetEff();
                    this.p_updAutoGetTm(true);
                }
            };
            LoadingPanel.prototype.p_getTipsBtnCLk = function () {
                if (!this.getTipsBtn.tag)
                    return;
                this.getTipsBtn.tag = false;
                this.getTipsBtn.skin = "wxloading_atlas/btn_loding_abcelq1.png";
                this.p_stopGetEff();
                this.p_updAutoGetTm(false);
            };
            LoadingPanel.prototype.p_changeLoading = function (uiData) {
                this.bgImg.skin = uiData.bgImgSkin;
                this.topImg.skin = uiData.topImgSkin;
                this.btmImg.skin = uiData.btmImgSkin;
                this.leftImg.skin = uiData.leftImgSkin;
                this.rightImg.skin = uiData.rightImgSkin;
                this.copyRightImg.bottom = uiData.copyRightImgBottom;
                this.processBox1.y = uiData.processBox1Y;
                this.processBox2.y = uiData.processBox2Y;
                this.loadingBarBg.skin = uiData.loadingBarBgSkin;
                this.loadingTips.fontSize = uiData.loadingTipsSize;
                this.getTipsBtn.visible = (this.P_PFINFO.showGetBtn && this.P_PFINFO.showGetBtn == 1);
                this.getTipsBtn.visible ? this.p_playGetEff() : this.p_stopGetEff();
                this.p_updAutoGetTm(this.getTipsBtn.visible);
            };
            LoadingPanel.prototype.p_playGetEff = function () {
                if (!this.p_getBtnEff) {
                    this.p_getBtnEff = PanelEff.create(this.getTipsBtn, "wxeff_btn_atlas", 4, 0, 12);
                    this.p_getBtnEff.pos(161, 106);
                    this.p_getBtnEff.scale(1.14, 1.15);
                }
                PanelEff.play(this.p_getBtnEff);
            };
            LoadingPanel.prototype.p_stopGetEff = function () {
                if (!this.p_getBtnEff)
                    return;
                PanelEff.stop(this.p_getBtnEff);
            };
            LoadingPanel.prototype.p_updAutoGetTm = function (isOpen) {
                Laya.timer.clear(this, this.p_autoGetTimer);
                if (isOpen) {
                    this.p_timerCount = 9;
                    this.txtGetTm.visible = true;
                    this.p_autoGetTimer();
                    Laya.timer.loop(1000, this, this.p_autoGetTimer);
                }
                else {
                    this.txtGetTm.visible = false;
                }
            };
            LoadingPanel.prototype.p_autoGetTimer = function () {
                if (this.p_timerCount > 0) {
                    this.txtGetTm.text = "\u7ACB\u5373\u9886\u53D6(" + this.p_timerCount + "s)";
                    this.p_timerCount--;
                }
                else {
                    this.txtGetTm.text = "";
                    Laya.timer.clear(this, this.p_autoGetTimer);
                    this.p_getTipsBtnCLk();
                }
            };
            return LoadingPanel;
        }(ui.P_WXLoadingViewUI));
        n_selectServer.LoadingPanel = LoadingPanel;
    })(n_selectServer = modules.n_selectServer || (modules.n_selectServer = {}));
})(modules || (modules = {}));
var modules;
(function (modules) {
    var n_selectServer;
    (function (n_selectServer) {
        var List = Laya.List;
        var Event = Laya.Event;
        var SelectServerPanel = (function (_super) {
            __extends(SelectServerPanel, _super);
            function SelectServerPanel() {
                var _this = _super.call(this) || this;
                _this.p_lastY = 0;
                _this.p_multiNoticeKey = "multi_notice_key";
                _this.p_mLastY = 0;
                _this.p_privacyLastY = 0;
                _this.p_privacyKey = "privacy_key";
                return _this;
            }
            SelectServerPanel.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.centerX = 0;
                this.centerY = 0;
                ServerLoading.instance.preloadServer();
                this.P_PFINFO = Browser.window.PF_INFO;
                this.p_leftList = new List();
                this.p_leftList.vScrollBarSkin = "";
                this.p_leftList.itemRender = n_selectServer.SelectLeftListItem;
                this.p_leftList.top = 5;
                this.p_leftList.repeatX = 1;
                this.p_leftList.spaceY = 5;
                this.p_leftList.width = this.leftListBox.width;
                this.p_leftList.height = this.leftListBox.height - 8;
                this.leftListBox.addChild(this.p_leftList);
                this.p_rightList = new List();
                this.p_rightList.vScrollBarSkin = "";
                this.p_rightList.itemRender = n_selectServer.SelectRightListItem;
                this.p_rightList.top = 5;
                this.p_rightList.repeatX = 1;
                this.p_rightList.spaceY = 5;
                this.p_rightList.width = this.rightListBox.width;
                this.p_rightList.height = this.rightListBox.height - 8;
                this.rightListBox.addChild(this.p_rightList);
                this.p_noticeList = new List();
                this.p_noticeList.hScrollBarSkin = "";
                this.p_noticeList.itemRender = n_selectServer.NoticeItem;
                this.p_noticeList.repeatY = 1;
                this.p_noticeList.width = this.boxTab.width;
                this.p_noticeList.height = this.boxTab.height;
                this.boxTab.addChild(this.p_noticeList);
                this.p_privacyList = new List();
                this.p_privacyList.hScrollBarSkin = "";
                this.p_privacyList.itemRender = n_selectServer.PrivacyItem;
                this.p_privacyList.repeatY = 1;
                this.p_privacyList.width = this.boxTab.width;
                this.p_privacyList.height = this.boxTab.height;
                this.boxTabPrivacy.addChild(this.p_privacyList);
                var loadingType = this.P_PFINFO.loadingType;
                if (loadingType == 1) {
                    this.p_serTxtColor = "#feffc0";
                    this.enterBtn.size(506, 88);
                }
                else if (loadingType == 2) {
                    this.p_serTxtColor = "#feffc0";
                    this.enterBtn.size(506, 88);
                }
                else if (loadingType == 3) {
                    this.p_serTxtColor = "#feffc0";
                    this.enterBtn.size(506, 88);
                }
                else if (loadingType == 101) {
                    this.p_serTxtColor = "#feffc0";
                    this.enterBtn.size(506, 88);
                }
                else {
                    this.p_serTxtColor = "#93353b";
                    this.enterBtn.size(506, 88);
                }
                this.p_multiNoticeData = [];
                this.noticeBtn.visible = false;
                this.mNoticeContent.color = "#212942";
                this.mNoticeContent.style.fontSize = 26;
                this.mNoticeContent.style.lineHeight = 28;
                this.mNoticeContent.mouseEnabled = false;
                this.privacyContent.color = "#212942";
                this.privacyContent.style.fontSize = 26;
                this.privacyContent.style.lineHeight = 28;
                this.privacyContent.mouseEnabled = false;
                this.privacyTip.color = "#ffffff";
                this.privacyTip.style.fontSize = 18;
                this.privacyTip.style.lineHeight = 18;
                this.privacyTip.style.stroke = 2;
                this.privacyTip.style.strokeColor = "#000000";
                this.privacyTip.style.wordWrap = false;
                Browser.window.initPanel = this;
                wxHideLoading();
                this.addEvt();
                this.onOpened();
            };
            SelectServerPanel.prototype.destroy = function (destroyChild) {
                if (destroyChild === void 0) { destroyChild = true; }
                this.rmEvts();
                this.p_mouseUpNotice();
                this.p_mouseUpMNotice();
                this.p_mouseUpPrivacy();
                if (this.p_leftList) {
                    this.p_leftList.removeSelf();
                    this.p_leftList.destroy();
                    this.p_leftList = null;
                }
                if (this.p_rightList) {
                    this.p_rightList.removeSelf();
                    this.p_rightList.destroy();
                    this.p_rightList = null;
                }
                if (this.p_noticeList) {
                    this.p_noticeList.removeSelf();
                    this.p_noticeList.destroy();
                    this.p_noticeList = null;
                }
                if (this.p_privacyList) {
                    this.p_privacyList.removeSelf();
                    this.p_privacyList.destroy();
                    this.p_privacyList = null;
                }
                Laya.timer.clear(this, this.p_tipFlyTimer);
                _super.prototype.destroy.call(this, destroyChild);
            };
            SelectServerPanel.prototype.addEvt = function () {
                this.bgImg.on(Laya.Event.CLICK, this, this.p_clickBg);
                this.enterBtn.on(Laya.Event.CLICK, this, this.p_clickEnter);
                this.selectServer.on(Laya.Event.CLICK, this, this.p_clickOpenSer);
                this.selectServer.on(Laya.Event.CLICK, this, this.p_clickOpenSer);
                this.closeBg.on(Laya.Event.CLICK, this, this.p_clickCloseSer);
                this.noticeBtn.on(Laya.Event.CLICK, this, this.p_clickOpenMNotice);
                this.noticeClose.on(Laya.Event.CLICK, this, this.p_clickCloseNotice);
                this.noticeContent.on(Laya.Event.MOUSE_DOWN, this, this.p_downClkNotice);
                this.mNoticeClose.on(Laya.Event.CLICK, this, this.p_clickCloseMNotice);
                this.mNoticeClose2.on(Laya.Event.CLICK, this, this.p_clickCloseMNotice);
                this.mNoticePanel.on(Laya.Event.MOUSE_DOWN, this, this.p_downClkMNotice);
                this.privacyBtn.on(Laya.Event.CLICK, this, this.p_clickOpenPrivacy);
                this.privacyClose.on(Laya.Event.CLICK, this, this.p_clickClosePrivacy);
                this.privacyClose2.on(Laya.Event.CLICK, this, this.p_clickClosePrivacy);
                this.privacyPanel.on(Laya.Event.MOUSE_DOWN, this, this.p_downClkPrivacy);
                this.privacyToggle.on(Laya.Event.CLICK, this, this.p_clickToggle);
                this.privacyTip.on(Laya.Event.LINK, this, this.p_clickLink);
                this.p_noticeList.selectEnable = true;
                this.p_noticeList.selectHandler = Laya.Handler.create(this, this.p_onSelMNoticeItem, null, false);
                this.p_privacyList.selectEnable = true;
                this.p_privacyList.selectHandler = Laya.Handler.create(this, this.p_onSelPrivacyItem, null, false);
            };
            SelectServerPanel.prototype.rmEvts = function () {
                this.bgImg.off(Laya.Event.CLICK, this, this.p_clickBg);
                this.enterBtn.off(Laya.Event.CLICK, this, this.p_clickEnter);
                this.selectServer.off(Laya.Event.CLICK, this, this.p_clickOpenSer);
                this.selectServer.off(Laya.Event.CLICK, this, this.p_clickOpenSer);
                this.closeBg.off(Laya.Event.CLICK, this, this.p_clickCloseSer);
                this.noticeBtn.off(Laya.Event.CLICK, this, this.p_clickOpenMNotice);
                this.noticeClose.off(Laya.Event.CLICK, this, this.p_clickCloseNotice);
                this.noticeContent.off(Laya.Event.MOUSE_DOWN, this, this.p_downClkNotice);
                this.mNoticeClose.off(Laya.Event.CLICK, this, this.p_clickCloseMNotice);
                this.mNoticeClose2.off(Laya.Event.CLICK, this, this.p_clickCloseMNotice);
                this.mNoticePanel.off(Laya.Event.MOUSE_DOWN, this, this.p_downClkMNotice);
                this.privacyBtn.off(Laya.Event.CLICK, this, this.p_clickOpenPrivacy);
                this.privacyClose.off(Laya.Event.CLICK, this, this.p_clickClosePrivacy);
                this.privacyClose2.off(Laya.Event.CLICK, this, this.p_clickClosePrivacy);
                this.privacyPanel.off(Laya.Event.MOUSE_DOWN, this, this.p_downClkPrivacy);
                this.privacyToggle.off(Laya.Event.CLICK, this, this.p_clickToggle);
                this.privacyTip.off(Laya.Event.LINK, this, this.p_clickLink);
                this.p_noticeList.selectEnable = false;
                this.p_noticeList.selectHandler = null;
                this.p_privacyList.selectEnable = false;
                this.p_privacyList.selectHandler = null;
            };
            SelectServerPanel.prototype.onOpened = function () {
                var _this = this;
                this.p_openTime = Date.now();
                this.p_isInitDone = false;
                this.p_defaultServerId = this.P_PFINFO.selectedServer.server_id;
                this.p_showServer(this.P_PFINFO.selectedServer);
                this.p_leftList.dataSource = this.P_PFINFO.groupList;
                this.p_clickOpenSer();
                req_multi_server_notice(4, this.P_PFINFO.pkgName, this.P_PFINFO.selectedServer.server_id, this.p_onMultiNoticeCallback.bind(this));
                Laya.timer.frameOnce(10, this, function () {
                    _this.p_isInitDone = true;
                    _this.p_privacyData = _this.P_PFINFO.pkg_protocol_list && _this.P_PFINFO.pkg_protocol_list.list ? _this.P_PFINFO.pkg_protocol_list.list : [];
                    _this.p_privacyBgCfg = _this.P_PFINFO.privacy_login_pkg != undefined ? _this.P_PFINFO.privacy_login_pkg : 0;
                    var isTog = localStorage.getItem(_this.p_privacyKey) == "1";
                    var isSave = PF_INFO.privacy_save_pkg != 0;
                    var isDefault = _this.p_privacyBgCfg == 0 || _this.p_privacyBgCfg == 1;
                    _this.p_isApplyPrivacy = isSave ? isTog || isDefault : isDefault;
                    _this.p_updPrivacyUI();
                });
                this.versionTxt.text = "资源：" + this.P_PFINFO.lastVersion + "      版本：" + this.P_PFINFO.wxVersion;
                this.serverName.color = this.selServer.color = this.p_serTxtColor;
                this.imgCheatTip.visible = this.P_PFINFO.anti_cheat_pkg == 1;
                this.txtTip.visible = false;
            };
            SelectServerPanel.prototype.preload = function () {
            };
            SelectServerPanel.prototype.p_clickBg = function () {
                if (!this.p_isInitDone)
                    return;
                if (this.p_isApplyPrivacy) {
                    var time = Date.now();
                    if (time - this.p_openTime > 10000) {
                        this.p_openTime -= 2000;
                        ServerLoading.instance.enterDefaultServer();
                    }
                }
                else {
                    this.p_showTip("您必须同意用户协议才可进入游戏");
                }
            };
            SelectServerPanel.prototype.p_clickEnter = function () {
                if (!this.p_isInitDone)
                    return;
                if (this.p_isApplyPrivacy) {
                    if (this.p_canSelect(this.P_PFINFO.selectedServer)) {
                        Browser.window.PF_INFO.selectedServer = this.P_PFINFO.selectedServer;
                        req_server_check_ban(0, this.P_PFINFO.selectedServer.server_id);
                    }
                }
                else {
                    this.p_showTip("您必须同意用户协议才可进入游戏");
                }
            };
            SelectServerPanel.prototype.p_clickOpenSer = function () {
                if (!this.P_PFINFO.hasGroupReq) {
                    this.P_PFINFO.hasGroupReq = true;
                    req_server_group(0);
                }
                else {
                    this.listBg.visible = true;
                }
            };
            SelectServerPanel.prototype.p_clickCloseSer = function () {
                this.listBg.visible = false;
            };
            SelectServerPanel.prototype.p_clickOpenMNotice = function () {
                this.p_openMultiNoticeView();
            };
            SelectServerPanel.prototype.p_clickCloseMNotice = function () {
                this.mNoticeBg.visible = false;
            };
            SelectServerPanel.prototype.p_clickCloseNotice = function () {
                this.noticeBg.visible = false;
            };
            SelectServerPanel.prototype.p_clickOpenPrivacy = function () {
                this.p_openPrivacyView();
            };
            SelectServerPanel.prototype.p_clickClosePrivacy = function () {
                this.privacyBg.visible = false;
            };
            SelectServerPanel.prototype.p_clickToggle = function () {
                this.p_isApplyPrivacy = !this.p_isApplyPrivacy;
                if (this.p_isApplyPrivacy)
                    localStorage.setItem(this.p_privacyKey, "1");
                this.privacyToggle.skin = "wxlogin_atlas/" + (this.p_isApplyPrivacy ? "image_xuanfu_gx1.png" : "image_xuanfu_gx0.png");
            };
            SelectServerPanel.prototype.p_clickLink = function (param) {
                this.p_openPrivacyView(Number(param));
            };
            SelectServerPanel.prototype.p_downClkNotice = function () {
                this.p_lastY = this.noticeContent.mouseY;
                Laya.stage.on(Event.MOUSE_MOVE, this, this.p_mouseMvNotice);
                Laya.stage.on(Event.MOUSE_UP, this, this.p_mouseUpNotice);
                Laya.stage.on(Event.MOUSE_OUT, this, this.p_mouseUpNotice);
            };
            SelectServerPanel.prototype.p_mouseMvNotice = function () {
                if (!this.noticeContent)
                    return;
                var offsetY = this.p_lastY - this.noticeContent.mouseY;
                this.noticeContent.scrollY += offsetY;
                this.p_lastY = this.noticeContent.mouseY;
            };
            SelectServerPanel.prototype.p_mouseUpNotice = function () {
                Laya.stage.off(Event.MOUSE_MOVE, this, this.p_mouseMvNotice);
                Laya.stage.off(Event.MOUSE_UP, this, this.p_mouseUpNotice);
                Laya.stage.off(Event.MOUSE_OUT, this, this.p_mouseUpNotice);
            };
            SelectServerPanel.prototype.p_downClkMNotice = function () {
                this.p_mLastY = this.mNoticePanel.mouseY;
                Laya.stage.on(Event.MOUSE_MOVE, this, this.p_mouseMvMNotice);
                Laya.stage.on(Event.MOUSE_UP, this, this.p_mouseUpMNotice);
                Laya.stage.on(Event.MOUSE_OUT, this, this.p_mouseUpMNotice);
            };
            SelectServerPanel.prototype.p_mouseMvMNotice = function () {
                if (!this.mNoticeContent)
                    return;
                var offsetY = this.p_mLastY - this.mNoticePanel.mouseY;
                this.mNoticeContent.y -= offsetY;
                if (this.mNoticePanel.height < this.mNoticeContent.contextHeight) {
                    if (this.mNoticeContent.y < this.mNoticePanel.height - this.mNoticeContent.contextHeight) {
                        this.mNoticeContent.y = this.mNoticePanel.height - this.mNoticeContent.contextHeight;
                    }
                    else if (this.mNoticeContent.y > 0) {
                        this.mNoticeContent.y = 0;
                    }
                }
                else {
                    this.mNoticeContent.y = 0;
                }
                this.p_mLastY = this.mNoticePanel.mouseY;
            };
            SelectServerPanel.prototype.p_mouseUpMNotice = function () {
                Laya.stage.off(Event.MOUSE_MOVE, this, this.p_mouseMvMNotice);
                Laya.stage.off(Event.MOUSE_UP, this, this.p_mouseUpMNotice);
                Laya.stage.off(Event.MOUSE_OUT, this, this.p_mouseUpMNotice);
            };
            SelectServerPanel.prototype.p_downClkPrivacy = function () {
                this.p_privacyLastY = this.privacyPanel.mouseY;
                Laya.stage.on(Event.MOUSE_MOVE, this, this.p_mouseMvPrivacy);
                Laya.stage.on(Event.MOUSE_UP, this, this.p_mouseUpPrivacy);
                Laya.stage.on(Event.MOUSE_OUT, this, this.p_mouseUpPrivacy);
            };
            SelectServerPanel.prototype.p_mouseMvPrivacy = function () {
                if (!this.privacyContent)
                    return;
                var offsetY = this.p_privacyLastY - this.privacyPanel.mouseY;
                this.privacyContent.y -= offsetY;
                if (this.privacyPanel.height < this.privacyContent.contextHeight) {
                    if (this.privacyContent.y < this.privacyPanel.height - this.privacyContent.contextHeight) {
                        this.privacyContent.y = this.privacyPanel.height - this.privacyContent.contextHeight;
                    }
                    else if (this.privacyContent.y > 0) {
                        this.privacyContent.y = 0;
                    }
                }
                else {
                    this.privacyContent.y = 0;
                }
                this.p_privacyLastY = this.privacyPanel.mouseY;
            };
            SelectServerPanel.prototype.p_mouseUpPrivacy = function () {
                Laya.stage.off(Event.MOUSE_MOVE, this, this.p_mouseMvPrivacy);
                Laya.stage.off(Event.MOUSE_UP, this, this.p_mouseUpPrivacy);
                Laya.stage.off(Event.MOUSE_OUT, this, this.p_mouseUpPrivacy);
            };
            SelectServerPanel.prototype.p_onSelMNoticeItem = function () {
                var datas = this.p_noticeList.dataSource;
                if (!datas)
                    return;
                var selData;
                for (var i = 0; i < this.p_noticeList.dataSource.length; i++) {
                    var data = this.p_noticeList.dataSource[i];
                    data[1] = i == this.p_noticeList.selectedIndex;
                    if (i == this.p_noticeList.selectedIndex) {
                        selData = data[0];
                    }
                }
                if (selData && selData.content) {
                    selData.content = selData.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "");
                }
                this.mNoticeTitle.text = selData && selData.title ? selData.title : "";
                this.mNoticeContent.innerHTML = selData && selData.content ? selData.content : "";
                this.mNoticeContent.y = 0;
            };
            SelectServerPanel.prototype.p_onSelPrivacyItem = function () {
                var datas = this.p_privacyList.dataSource;
                if (!datas)
                    return;
                var selData;
                for (var i = 0; i < this.p_privacyList.dataSource.length; i++) {
                    var data = this.p_privacyList.dataSource[i];
                    data[1] = i == this.p_privacyList.selectedIndex;
                    if (i == this.p_privacyList.selectedIndex) {
                        selData = data[0];
                    }
                }
                if (selData && selData.content) {
                    selData.content = selData.content.replace(/(<)(?!(br)).[a-zA-Z]{0,10}(>)/g, "");
                }
                this.privacyTitle.text = selData && selData.title ? selData.title : "";
                this.privacyContent.innerHTML = selData && selData.content ? selData.content : "";
                this.privacyContent.y = 0;
            };
            SelectServerPanel.prototype.p_showServer = function (server) {
                this.serverName.text = server.status === -1 ? server.server_name + "(维护中)" : server.status === 0 ? server.server_name + "(待开服)" : server.server_name;
                this.serverName.color = server.status === -1 ? "#d50000" : server.status === 0 ? "#49575a" : this.p_serTxtColor;
                this.hotImage.skin = this.getStatusSrc(server.status);
                this.P_PFINFO.cdn = server.cdn || "";
                this.P_PFINFO.selectedServer = server;
                this.noticeBtn.visible = true;
            };
            SelectServerPanel.prototype.p_leftlistClkCallBack = function (index) {
                this.showGroupList(index);
            };
            SelectServerPanel.prototype.p_rightlistClkCallBack = function (data) {
                this.p_showServer(data);
                this.listBg.visible = false;
            };
            SelectServerPanel.prototype.showGroupList = function (selectIndex) {
                if (selectIndex === void 0) { selectIndex = 0; }
                if (!this.parent)
                    return;
                var groups = this.P_PFINFO.groupList;
                if (!groups || groups.length === 0)
                    return;
                var len = groups.length;
                for (var i = 0; i < len; i++) {
                    groups[i].callBack = this.p_leftlistClkCallBack.bind(this);
                    if (i == selectIndex) {
                        groups[i].select = true;
                    }
                    else {
                        groups[i].select = false;
                    }
                    groups[i].index = i;
                }
                this.p_leftList.array = groups;
                var groupid = groups[selectIndex].id;
                if (this.P_PFINFO.serverList[groupid]) {
                    this.showServerList(groupid);
                    return;
                }
                else {
                    if (!this.P_PFINFO.hasServerReq) {
                        this.P_PFINFO.hasServerReq = true;
                        if (groupid == -1)
                            req_server_owner(0);
                        else if (groupid == -2) {
                            req_recommend_server_list(0);
                        }
                        else {
                            req_server_list(0, groupid);
                        }
                    }
                }
            };
            SelectServerPanel.prototype.showServerList = function (groupid) {
                if (!this.parent)
                    return;
                if (!this.P_PFINFO.serverList[groupid])
                    return;
                var arr = this.P_PFINFO.serverList[groupid];
                var len = arr.length;
                for (var i = 0; i < len; i++) {
                    arr[i].callBack = this.p_rightlistClkCallBack.bind(this);
                }
                this.p_rightList.array = arr;
            };
            SelectServerPanel.prototype.p_canSelect = function (server) {
                if (server.status == -1) {
                    alert("服务器维护中");
                    return false;
                }
                else if (server.status == 0) {
                    alert("服务器尚未开启，敬请期待");
                    return false;
                }
                else {
                    return true;
                }
            };
            SelectServerPanel.prototype.getStatusSrc = function (status) {
                var str = "";
                if (status === 2)
                    str = "wxlogin_atlas/image_login_changtong.png";
                else if (status === 1)
                    str = "wxlogin_atlas/image_login_fanmang.png";
                else if (status === -1 || status === 0)
                    str = "wxlogin_atlas/image_login_weihu.png";
                return str;
            };
            SelectServerPanel.prototype.p_onMultiNoticeCallback = function (param) {
                console.log("onMultiNoticeCallback, param = ", param);
                var nowTm = Date.now() / 1000;
                var key = localStorage.getItem(this.p_multiNoticeKey);
                this.p_multiNoticeData = [];
                var isPop = false;
                if (param.state == "success") {
                    for (var val in param.data) {
                        var data = param.data[val];
                        var isTm = nowTm < data.end_time;
                        var isType1 = data.pop_type == 1;
                        var isType2 = data.pop_type == 2 && (data.key + "") != key;
                        if (!isPop && isTm && (isType1 || isType2)) {
                            isPop = true;
                        }
                        if (isTm) {
                            this.p_multiNoticeData.push(data);
                        }
                        if (isType2) {
                            localStorage.setItem(this.p_multiNoticeKey, data.key + "");
                        }
                    }
                }
                this.p_multiNoticeData.sort(function (a, b) {
                    return a.login_id - b.login_id;
                });
                console.log("onMultiNoticeCallback, datas = ", this.p_multiNoticeData);
                if (isPop) {
                    this.p_openMultiNoticeView();
                }
            };
            SelectServerPanel.prototype.p_openMultiNoticeView = function () {
                if (!this.p_noticeList)
                    return;
                if (this.p_multiNoticeData) {
                    this.p_noticeList.x = this.p_multiNoticeData.length > 2 ? 0 : ((this.boxTab.width - this.p_multiNoticeData.length * 274) / 2);
                    var datas = [];
                    for (var i = 0; i < this.p_multiNoticeData.length; i++) {
                        var data = this.p_multiNoticeData[i];
                        datas.push([data, i == this.p_noticeList.selectedIndex]);
                    }
                    this.p_noticeList.dataSource = datas;
                    if (datas.length > 0) {
                        this.p_noticeList.selectedIndex = 0;
                        this.p_noticeList.scrollTo(0);
                    }
                    else {
                        this.mNoticeTitle.text = "\u6682\u65E0\u516C\u544A";
                        this.mNoticeContent.text = "";
                    }
                    this.mNoticeClose2.visible = this.p_multiNoticeData.length <= 1;
                    this.boxTab.visible = this.p_multiNoticeData.length > 1;
                }
                this.mNoticeBg.visible = true;
            };
            SelectServerPanel.prototype.p_updPrivacyUI = function () {
                var str = "";
                for (var i = 0; i < this.p_privacyData.length; i++) {
                    var data = this.p_privacyData[i];
                    str += "<a href=\"" + i + "\" style=\"color:#14ff28;text-decoration:none\">" + data.title + "</a>";
                    if (i < this.p_privacyData.length - 1)
                        str += "\u3001";
                }
                this.privacyTip.innerHTML = "\u6211\u5DF2\u7ECF\u8BE6\u7EC6\u9605\u8BFB\u5E76\u540C\u610F" + str;
                this.privacyToggle.skin = "wxlogin_atlas/" + (this.p_isApplyPrivacy ? "image_xuanfu_gx1.png" : "image_xuanfu_gx0.png");
                this.privacyTip.x = (720 - this.privacyTip.width) / 2;
                this.privacyToggle.x = this.privacyTip.x - 30;
                this.privacyBtn.visible = this.p_privacyData.length > 0;
                this.privacyToggle.visible = this.privacyTip.visible = this.p_privacyData.length > 0 && this.p_privacyBgCfg != 0;
            };
            SelectServerPanel.prototype.p_openPrivacyView = function (selIdx) {
                if (selIdx === void 0) { selIdx = 0; }
                if (!this.p_privacyList)
                    return;
                if (this.p_privacyData) {
                    this.p_privacyList.x = this.p_privacyData.length > 2 ? 0 : ((this.boxTab.width - this.p_privacyData.length * 274) / 2);
                    var datas = [];
                    for (var i = 0; i < this.p_privacyData.length; i++) {
                        var data = this.p_privacyData[i];
                        datas.push([data, i == this.p_privacyList.selectedIndex]);
                    }
                    this.p_privacyList.dataSource = datas;
                    if (datas.length > 0) {
                        this.p_privacyList.selectedIndex = selIdx;
                        this.p_privacyList.scrollTo(selIdx);
                    }
                    else {
                        this.privacyTitle.text = "\u7A7A";
                        this.privacyContent.text = "";
                    }
                    this.privacyClose2.visible = this.p_privacyData.length <= 1;
                    this.boxTabPrivacy.visible = this.p_privacyData.length > 1;
                }
                this.privacyBg.visible = true;
            };
            SelectServerPanel.prototype.p_showTip = function (tip) {
                this.txtTip.text = tip;
                this.txtTip.y = 640;
                this.txtTip.visible = true;
                this.p_tipFlySpeed = 1;
                Laya.timer.clear(this, this.p_tipFlyTimer);
                this.p_tipFlyTimer();
                Laya.timer.frameLoop(1, this, this.p_tipFlyTimer);
            };
            SelectServerPanel.prototype.p_tipFlyTimer = function () {
                this.txtTip.y -= this.p_tipFlySpeed;
                this.p_tipFlySpeed *= 1.1;
                if (this.txtTip.y <= 590) {
                    this.txtTip.visible = false;
                    Laya.timer.clear(this, this.p_tipFlyTimer);
                }
            };
            return SelectServerPanel;
        }(ui.P_WXSelectServerViewUI));
        n_selectServer.SelectServerPanel = SelectServerPanel;
    })(n_selectServer = modules.n_selectServer || (modules.n_selectServer = {}));
})(modules || (modules = {}));
var Browser = Laya.Browser;
var Font = Laya.Font;
var Input = Laya.Input;
var Render = Laya.Render;
var Handler = Laya.Handler;
var AuthorizationPanel = modules.n_selectServer.AuthorizationPanel;
var LoadingPanel = modules.n_selectServer.LoadingPanel;
var SelectServerPanel = modules.n_selectServer.SelectServerPanel;
var ServerLoading = (function () {
    function ServerLoading(data) {
        this.m_loadingRes = ["wxloading_atlas/image_loding_bar0.png", "wxloading_atlas/image_loding_bar02.png", "wxloading_atlas/image_loding_bar1.png", "wxloading_atlas/image_loding_bar2.png", "wxloading_atlas/image_loding_bar3.png", "wxloading_atlas/image_login_point1.png", "wxloading_atlas/image_login_point2.png", "wxloading_atlas/image_login_point3.png",
            "wxeff_btn_atlas/0.png", "wxeff_btn_atlas/1.png", "wxeff_btn_atlas/2.png", "wxeff_btn_atlas/3.png", "wxeff_btn_atlas/4.png",
            "wxloading_atlas/image_loading_bg.jpg", "wxloading_atlas/image_loading_bg2.jpg", "wxloading_atlas/btn_loding_abcelq0.png", "wxloading_atlas/btn_loding_abcelq1.png",
            "wxloading_atlas/image_loading_bg_bottom.jpg", "wxloading_atlas/image_loading_bg_left.jpg", "wxloading_atlas/image_loading_bg_right.jpg", "wxloading_atlas/image_loading_bg_top.jpg",
            "wxloading_atlas/image_loading_bg_bottom2.jpg", "wxloading_atlas/image_loading_bg_left2.jpg", "wxloading_atlas/image_loading_bg_right2.jpg", "wxloading_atlas/image_loading_bg_top2.jpg"];
        this.m_serverRes = ["wxlogin_atlas/btn_com_chuangback.png", "wxlogin_atlas/btn_login_gonggao.png", "wxlogin_atlas/btn_login_loginanniu.png", "wxlogin_atlas/btn_login_yingsi.png", "wxlogin_atlas/btn_xuanqu_anniuhuang.png", "wxlogin_atlas/btn_xuanqu_anniulan.png", "wxlogin_atlas/btn_xuanqu_quanniu.png", "wxlogin_atlas/image_com_tuichu.png", "wxlogin_atlas/image_login_changtong.png", "wxlogin_atlas/image_login_fanmang.png", "wxlogin_atlas/image_login_weihu.png", "wxlogin_atlas/image_login_xuanqubg.png", "wxlogin_atlas/image_login_loginbg.jpg",
            "wxlogin_atlas/image_login_loginbg_bottom.jpg", "wxlogin_atlas/image_login_loginbg_left.jpg", "wxlogin_atlas/image_login_loginbg_right.jpg", "wxlogin_atlas/image_login_loginbg_top.jpg",
            "wxlogin_atlas/image_denglu_txtshenpi.png", "wxlogin_atlas/image_login_notice.png", "wxlogin_atlas/image_xuanfu_xfbg.png",
            "wxlogin_atlas/btn_com_long0.png", "wxlogin_atlas/btn_com_long1.png", "wxlogin_atlas/image_loding_txtbhcc.png",
            "wxlogin_atlas/image_xuanfu_gx1.png", "wxlogin_atlas/image_xuanfu_gx0.png"];
        this.m_isPrelodServer = false;
        this.m_isPrelodLoading = false;
        this.p_enterServer = false;
        this.p_errUrls = "";
        ServerLoading.instance = this;
        Laya.MiniAdpter.init();
        Laya3D.init(0, 0, false, false, false);
        DecodeTools.init();
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.frameRate = Laya.Stage.FRAME_SLOW;
        var am = Laya.AtlasResourceManager;
        am.maxTextureCount = 6;
        am.atlasTextureWidth = am.atlasTextureHeight = 1024;
        am._enable();
        Laya.URL.rootPath = Laya.URL.basePath = "";
        Laya.Browser.window.addEventListener(Laya.Event.RESIZE, this.p_resetStage.bind(this));
        var preLoadedMap = Laya.Loader.preLoadedMap;
        preLoadedMap["res/atlas/create_role_atlas.atlas"] = { "frames": { "btn_chuangjue_kaishi.png": { "frame": { "h": 88, "idx": 0, "w": 506, "x": 0, "y": 0 }, "sourceSize": { "h": 88, "w": 506 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "btn_chuangjue_nan.png": { "frame": { "h": 98, "idx": 0, "w": 108, "x": 335, "y": 89 }, "sourceSize": { "h": 98, "w": 108 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "btn_chuangjue_nv.png": { "frame": { "h": 98, "idx": 0, "w": 107, "x": 0, "y": 164 }, "sourceSize": { "h": 98, "w": 107 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_chuangjue_mingbg.png": { "frame": { "h": 74, "idx": 0, "w": 334, "x": 0, "y": 89 }, "sourceSize": { "h": 74, "w": 334 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_chuangjue_suiji.png": { "frame": { "h": 56, "idx": 0, "w": 52, "x": 444, "y": 89 }, "sourceSize": { "h": 56, "w": 52 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_xuanfu_gx0.png": { "frame": { "h": 25, "idx": 0, "w": 25, "x": 444, "y": 146 }, "sourceSize": { "h": 27, "w": 26 }, "spriteSourceSize": { "x": 0, "y": 2 } }, "image_xuanfu_gx1.png": { "frame": { "h": 27, "idx": 0, "w": 26, "x": 470, "y": 146 }, "sourceSize": { "h": 27, "w": 26 }, "spriteSourceSize": { "x": 0, "y": 0 } } }, "meta": { "image": "create_role_atlas.png", "prefix": "create_role_atlas/" } };
        Browser.window.resMgrLoad = ServerLoading.instance.requestWeb;
        Browser.window.imgMgrLoad = ServerLoading.instance.requestWeb;
        this.m_layer = new Laya.Component();
        this.m_layer.name = "_wxLoadingLayer";
        Laya.stage.addChild(this.m_layer);
        this.p_resetStage();
    }
    ServerLoading.prototype.changeServerLoading = function (value) {
        ServerLoading.instance.m_layer.visible = value;
    };
    ServerLoading.prototype.openAuthor = function () {
        if (!ServerLoading.instance.m_author)
            ServerLoading.instance.m_author = new AuthorizationPanel();
        if (!ServerLoading.instance.m_author.parent) {
            ServerLoading.instance.m_layer.addChild(ServerLoading.instance.m_author);
        }
        ServerLoading.instance.p_resetWindow();
    };
    ServerLoading.prototype.closeAuthor = function () {
        if (this.m_author && this.m_author.parent) {
            Laya.stage.removeChild(this.m_author);
            this.m_author.destroy(true);
            this.m_author = null;
        }
    };
    ServerLoading.prototype.preloadServer = function () {
        if (!this.m_isPrelodServer) {
            this.m_isPrelodServer = true;
            Laya.loader.load(this.m_serverRes, Handler.create(this, function () {
                Browser.window.loadServerRes = true;
                Browser.window.initMain();
                Browser.window.enterToGame();
            }));
        }
    };
    ServerLoading.prototype.openServer = function () {
        var callback = function () {
            if (!ServerLoading.instance.m_server)
                ServerLoading.instance.m_server = new SelectServerPanel();
            if (!ServerLoading.instance.m_server.parent) {
                ServerLoading.instance.m_layer.addChild(ServerLoading.instance.m_server);
            }
            ServerLoading.instance.p_resetWindow();
        };
        var loaded = true;
        for (var _i = 0, _a = this.m_serverRes; _i < _a.length; _i++) {
            var res = _a[_i];
            if (Laya.Loader.getRes(res) == null) {
                loaded = false;
                break;
            }
        }
        if (loaded) {
            callback();
        }
        else {
            Laya.loader.load(this.m_serverRes, Handler.create(this, callback));
        }
    };
    ServerLoading.prototype.closeServer = function () {
        if (this.m_server && this.m_server.parent) {
            Laya.stage.removeChild(this.m_server);
            this.m_server.destroy(true);
            this.m_server = null;
        }
    };
    ServerLoading.prototype.preloadLoading = function () {
        if (!this.m_isPrelodLoading) {
            this.m_isPrelodLoading = true;
            Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
                Browser.window.loadLoadingRes = true;
                Browser.window.initMain();
                Browser.window.enterToGame();
            }));
        }
    };
    ServerLoading.prototype.openLoading = function (newRegister) {
        if (newRegister === void 0) { newRegister = 0; }
        Laya.loader.load(this.m_loadingRes, Handler.create(this, function () {
            if (!ServerLoading.instance.m_loading)
                ServerLoading.instance.m_loading = new LoadingPanel(newRegister);
            if (!ServerLoading.instance.m_loading.parent) {
                ServerLoading.instance.m_layer.addChild(ServerLoading.instance.m_loading);
            }
            ServerLoading.instance.p_resetWindow();
        }));
    };
    ServerLoading.prototype.closeLoading = function () {
        if (this.m_loading && this.m_loading.parent) {
            Laya.stage.removeChild(this.m_loading);
            this.m_loading.destroy(true);
            this.m_loading = null;
        }
        for (var _i = 0, _a = this.m_serverRes; _i < _a.length; _i++) {
            var res = _a[_i];
            Laya.Loader.clearCache(ServerLoading.instance, res);
            Laya.Loader.clearRes(res, true);
        }
        for (var _b = 0, _c = this.m_loadingRes; _b < _c.length; _b++) {
            var res = _c[_b];
            Laya.Loader.clearCache(ServerLoading.instance, res);
            Laya.Loader.clearRes(res, true);
        }
        if (this.m_layer.parent)
            this.m_layer.parent.removeChild(this.m_layer);
    };
    ServerLoading.prototype.setShowBtn = function () {
        if (this.m_loading && this.m_loading.parent) {
            ServerLoading.instance.m_loading.showGetBtn();
        }
    };
    ServerLoading.prototype.enterDefaultServer = function () {
        var server = Browser.window.PF_INFO.selectedServer;
        if (!this.p_enterServer && server.status != -1 && server.status != 0) {
            this.p_enterServer = true;
            Browser.window.PF_INFO.selectedServer = server;
            req_server_check_ban(0, server.server_id);
        }
    };
    ServerLoading.prototype.sendRecord = function () {
        var error = "";
        error += "newRegister=" + Browser.window.PF_INFO.newRegister;
        error += ", isPrelodServer=" + this.m_isPrelodServer;
        error += ", SelectServerPanel=" + (ServerLoading.instance.m_server != null);
        error += ", isPrelodLoading=" + this.m_isPrelodLoading;
        error += ", LoadingPanel=" + (ServerLoading.instance.m_loading != null);
        error += ", resMgrLoad=" + (Browser.window.resMgrLoad == ServerLoading.instance.requestWeb);
        error += ", imgMgrLoad=" + (Browser.window.imgMgrLoad == ServerLoading.instance.requestWeb);
        error += ", errUrls=" + ServerLoading.instance.p_errUrls;
        for (var _i = 0, _a = this.m_serverRes; _i < _a.length; _i++) {
            var res = _a[_i];
            error += ", " + res + "=" + (Laya.Loader.getRes(res) != null);
        }
        for (var _b = 0, _c = this.m_loadingRes; _b < _c.length; _b++) {
            var res = _c[_b];
            error += ", " + res + "=" + (Laya.Loader.getRes(res) != null);
        }
        var server = Browser.window.PF_INFO.selectedServer;
        if (server) {
            error += ", server_status=" + server.status;
            error += ", server_id=" + server.server_id;
            error += ", server_name=" + server.server_name;
        }
        var message = JSON.stringify({
            'error': "初始界面超过10秒",
            'stack': error,
        });
        console.error(message);
        if (!this.p_lastmsg || this.p_lastmsg != error) {
            this.p_lastmsg = error;
            reqRecordError(message);
        }
    };
    ServerLoading.prototype.p_resetUI = function () {
        var stage = Laya.stage;
        var w = Math.floor(stage.width);
        var h = Math.floor(stage.height);
        if (h / w < 1.7777778) {
            this.viewW = Math.floor(w / (h / 1280));
            this.viewH = 1280;
            this.viewS = h / 1280;
        }
        else {
            this.viewW = 720;
            this.viewH = Math.floor(h / (w / 720));
            this.viewS = w / 720;
        }
        var wNew = Math.floor(stage.width);
        var hNew = Math.floor(stage.height);
        if (hNew / wNew < 1.7777778) {
            this.viewW = Math.floor(wNew / (hNew / 1280));
            this.viewH = 1280;
            this.viewS = hNew / 1280;
        }
        else {
            this.viewW = 720;
            this.viewH = Math.floor(hNew / (wNew / 720));
            this.viewS = wNew / 720;
        }
        this.p_resetWindow();
    };
    ServerLoading.prototype.p_resetWindow = function () {
        if (this.m_layer) {
            this.m_layer.size(this.viewW, this.viewH);
            this.m_layer.scale(this.viewS, this.viewS, true);
        }
    };
    ServerLoading.prototype.p_resetStage = function () {
        if (Input.isInputting && Browser.onMobile) {
            var top_1 = parseInt(Input.inputContainer.style.top.replace("px", ""));
            var inputH = parseInt(Input.inputElement.style.height.replace("px", "")) * this.viewS;
            var rate = Browser.clientWidth / Render.canvas.width;
            top_1 = Browser.clientHeight - inputH * rate - top_1;
            if (top_1 > 0)
                top_1 = 0;
            Browser.container.style.top = top_1 + "px";
            return;
        }
        else {
            Browser.container.style.top = "0px";
        }
        var w = Math.floor(Browser.width);
        var h = Math.floor(Browser.height);
        w = (w + 1) & 0x7FFFFFFE;
        h = (h + 1) & 0x7FFFFFFE;
        var stage = Laya.stage;
        if (ENV == 3) {
            stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
            stage.width = w;
            stage.height = h;
        }
        else {
            if (w > h) {
                stage.scaleMode = Laya.Stage.SCALE_NOSCALE;
                stage.width = w;
                stage.height = h;
            }
            else {
                stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
                stage.width = 840;
                stage.height = (Math.floor(h / (w / 840)) + 1) & 0x7FFFFFFE;
            }
        }
        this.p_resetUI();
    };
    ServerLoading.prototype.requestWeb = function (_url, _callback) {
        var url = _url;
        var image;
        var clear = function () {
            image.onload = null;
            image.onerror = null;
        };
        var onload = function () {
            clear();
            _callback(url, 200, image);
        };
        var onerror = function () {
            console.warn("[warn] WX loadImage onerror:", url);
            ServerLoading.instance.p_errUrls += url + "|";
            clear();
            _callback(url, 404, null);
        };
        image = new Browser.window.Image();
        image.onload = onload;
        image.onerror = onerror;
        image.src = url;
        if (ServerLoading.instance.m_serverRes.indexOf(url) != -1 || ServerLoading.instance.m_loadingRes.indexOf(url) != -1) {
            Laya.Loader.keepCache(ServerLoading.instance, url);
        }
    };
    ServerLoading.prototype.p_endsWith = function (source, searchString) {
        return source.indexOf(searchString, source.length - searchString.length) != -1;
    };
    return ServerLoading;
}());
var modules;
(function (modules) {
    var n_selectServer;
    (function (n_selectServer) {
        var NoticeItem = (function (_super) {
            __extends(NoticeItem, _super);
            function NoticeItem() {
                var _this = _super.call(this) || this;
                _this.p_serItemLColorY = "#72441d";
                _this.p_serItemLColorN = "#263d7d";
                _this.width = 274;
                _this.height = 59;
                _this.p_btnImg = new Laya.Image();
                _this.addChild(_this.p_btnImg);
                _this.p_btnText = new Laya.Label();
                _this.p_btnText.fontSize = 30;
                _this.p_btnText.color = _this.p_serItemLColorN;
                _this.addChild(_this.p_btnText);
                _this.p_btnText.centerX = 0;
                _this.p_btnText.centerY = 0;
                return _this;
            }
            NoticeItem.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.P_PFINFO = Browser.window.PF_INFO;
                var loadingType = this.P_PFINFO.loadingType;
                if (loadingType == 1) {
                }
                else if (loadingType == 2) {
                }
                else if (loadingType == 3) {
                }
                else {
                }
                this.addEvt();
            };
            Object.defineProperty(NoticeItem.prototype, "dataSource", {
                set: function (value) {
                    if (!value)
                        return;
                    this.setData(value);
                },
                enumerable: true,
                configurable: true
            });
            NoticeItem.prototype.setData = function (value) {
                this.p_data = value[0];
                this.p_isSel = value[1];
                this.p_btnText.text = this.p_data.title;
                this.p_btnText.color = this.p_isSel ? this.p_serItemLColorY : this.p_serItemLColorN;
                this.p_btnImg.skin = this.p_isSel ? "wxlogin_atlas/btn_com_long1.png" : "wxlogin_atlas/btn_com_long0.png";
            };
            NoticeItem.prototype.destroy = function (destroyChild) {
                if (destroyChild === void 0) { destroyChild = true; }
                this.rmEvts();
                _super.prototype.destroy.call(this, destroyChild);
            };
            NoticeItem.prototype.addEvt = function () {
            };
            NoticeItem.prototype.rmEvts = function () {
            };
            return NoticeItem;
        }(Laya.View));
        n_selectServer.NoticeItem = NoticeItem;
    })(n_selectServer = modules.n_selectServer || (modules.n_selectServer = {}));
})(modules || (modules = {}));
var modules;
(function (modules) {
    var n_selectServer;
    (function (n_selectServer) {
        var PrivacyItem = (function (_super) {
            __extends(PrivacyItem, _super);
            function PrivacyItem() {
                var _this = _super.call(this) || this;
                _this.p_serItemLColorY = "#72441d";
                _this.p_serItemLColorN = "#263d7d";
                _this.width = 274;
                _this.height = 59;
                _this.p_btnImg = new Laya.Image();
                _this.addChild(_this.p_btnImg);
                _this.p_btnText = new Laya.Label();
                _this.p_btnText.fontSize = 30;
                _this.p_btnText.color = _this.p_serItemLColorN;
                _this.addChild(_this.p_btnText);
                _this.p_btnText.centerX = 0;
                _this.p_btnText.centerY = 0;
                return _this;
            }
            PrivacyItem.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.P_PFINFO = Browser.window.PF_INFO;
                var loadingType = this.P_PFINFO.loadingType;
                if (loadingType == 1) {
                }
                else if (loadingType == 2) {
                }
                else if (loadingType == 3) {
                }
                else {
                }
                this.addEvt();
            };
            Object.defineProperty(PrivacyItem.prototype, "dataSource", {
                set: function (value) {
                    if (!value)
                        return;
                    this.setData(value);
                },
                enumerable: true,
                configurable: true
            });
            PrivacyItem.prototype.setData = function (value) {
                this.p_data = value[0];
                this.p_isSel = value[1];
                this.p_btnText.text = this.p_data.title;
                this.p_btnText.color = this.p_isSel ? this.p_serItemLColorY : this.p_serItemLColorN;
                this.p_btnImg.skin = this.p_isSel ? "wxlogin_atlas/btn_com_long1.png" : "wxlogin_atlas/btn_com_long0.png";
            };
            PrivacyItem.prototype.destroy = function (destroyChild) {
                if (destroyChild === void 0) { destroyChild = true; }
                this.rmEvts();
                _super.prototype.destroy.call(this, destroyChild);
            };
            PrivacyItem.prototype.addEvt = function () {
            };
            PrivacyItem.prototype.rmEvts = function () {
            };
            return PrivacyItem;
        }(Laya.View));
        n_selectServer.PrivacyItem = PrivacyItem;
    })(n_selectServer = modules.n_selectServer || (modules.n_selectServer = {}));
})(modules || (modules = {}));
var modules;
(function (modules) {
    var n_selectServer;
    (function (n_selectServer) {
        var SelectLeftListItem = (function (_super) {
            __extends(SelectLeftListItem, _super);
            function SelectLeftListItem() {
                var _this = _super.call(this) || this;
                _this.width = 192;
                _this.height = 70;
                _this.p_btnImg = new Laya.Image();
                _this.addChild(_this.p_btnImg);
                _this.p_btnText = new Laya.Label();
                _this.p_btnText.fontSize = 30;
                _this.p_btnText.color = _this.p_serTxtColor;
                _this.addChild(_this.p_btnText);
                _this.p_btnText.centerX = 0;
                _this.p_btnText.centerY = 0;
                return _this;
            }
            SelectLeftListItem.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.P_PFINFO = Browser.window.PF_INFO;
                var loadingType = this.P_PFINFO.loadingType;
                if (loadingType == 1) {
                    this.p_serTxtColor = "#263d7d";
                }
                else if (loadingType == 2) {
                    this.p_serTxtColor = "#263d7d";
                }
                else if (loadingType == 3) {
                    this.p_serTxtColor = "#763042";
                }
                else {
                    this.p_serTxtColor = "#263d7d";
                }
                this.addEvt();
            };
            Object.defineProperty(SelectLeftListItem.prototype, "dataSource", {
                set: function (value) {
                    if (!value)
                        return;
                    this.setData(value);
                },
                enumerable: true,
                configurable: true
            });
            SelectLeftListItem.prototype.setData = function (value) {
                this.p_data = value;
                this.p_btnText.text = value.name;
                this.p_btnImg.skin = value.select ? "wxlogin_atlas/btn_xuanqu_anniuhuang.png" : "wxlogin_atlas/btn_xuanqu_anniulan.png";
            };
            SelectLeftListItem.prototype.destroy = function (destroyChild) {
                if (destroyChild === void 0) { destroyChild = true; }
                this.rmEvts();
                _super.prototype.destroy.call(this, destroyChild);
            };
            SelectLeftListItem.prototype.addEvt = function () {
                this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
            };
            SelectLeftListItem.prototype.rmEvts = function () {
                this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
            };
            SelectLeftListItem.prototype.clkHdler = function () {
                if (this.p_data && this.p_data.callBack) {
                    this.p_data.callBack(this.p_data.index);
                }
            };
            return SelectLeftListItem;
        }(Laya.View));
        n_selectServer.SelectLeftListItem = SelectLeftListItem;
    })(n_selectServer = modules.n_selectServer || (modules.n_selectServer = {}));
})(modules || (modules = {}));
var modules;
(function (modules) {
    var n_selectServer;
    (function (n_selectServer) {
        var SelectRightListItem = (function (_super) {
            __extends(SelectRightListItem, _super);
            function SelectRightListItem() {
                var _this = _super.call(this) || this;
                _this.p_btnImg = new Laya.Image("wxlogin_atlas/btn_xuanqu_quanniu.png");
                _this.p_btnText = new Laya.Label();
                _this.p_btnText.fontSize = 30;
                _this.p_btnText.color = _this.p_serTxtColor;
                _this.addChild(_this.p_btnImg);
                _this.p_statusImg = new Laya.Image();
                _this.addChild(_this.p_statusImg);
                _this.width = 358;
                _this.height = 70;
                _this.addChild(_this.p_btnText);
                _this.p_statusImg.centerY = 0;
                _this.p_statusImg.x = 18;
                _this.p_btnText.x = 80;
                _this.p_btnText.centerY = 0;
                _this.p_btnImg.graphics.drawRect(0, 0, _this.width, _this.height, "#00sasd");
                return _this;
            }
            SelectRightListItem.prototype.initialize = function () {
                _super.prototype.initialize.call(this);
                this.P_PFINFO = Browser.window.PF_INFO;
                var loadingType = this.P_PFINFO.loadingType;
                if (loadingType == 1) {
                    this.p_serTxtColor = "#34267d";
                }
                else if (loadingType == 2) {
                    this.p_serTxtColor = "#34267d";
                }
                else if (loadingType == 3) {
                    this.p_serTxtColor = "#763042";
                }
                else {
                    this.p_serTxtColor = "#34267d";
                }
                this.addEvt();
            };
            Object.defineProperty(SelectRightListItem.prototype, "dataSource", {
                set: function (value) {
                    if (!value)
                        return;
                    this.setData(value);
                },
                enumerable: true,
                configurable: true
            });
            SelectRightListItem.prototype.setData = function (value) {
                this.p_data = value;
                this.p_btnText.color = value.status === -1 ? "#d50000" : value.status === 0 ? "#49575a" : this.p_serTxtColor;
                this.p_btnText.text = value.status === -1 ? value.server_name + "(维护中)" : value.status === 0 ? value.server_name + "(待开服)" : value.server_name;
                this.p_statusImg.skin = this.getStatusSrc(value.status);
            };
            SelectRightListItem.prototype.destroy = function (destroyChild) {
                if (destroyChild === void 0) { destroyChild = true; }
                this.rmEvts();
                _super.prototype.destroy.call(this, destroyChild);
            };
            SelectRightListItem.prototype.addEvt = function () {
                this.on(Laya.Event.MOUSE_UP, this, this.clkHdler);
            };
            SelectRightListItem.prototype.rmEvts = function () {
                this.off(Laya.Event.MOUSE_UP, this, this.clkHdler);
            };
            SelectRightListItem.prototype.clkHdler = function () {
                if (this.p_data && this.p_data.callBack) {
                    this.p_data.callBack(this.p_data);
                }
            };
            SelectRightListItem.prototype.getStatusSrc = function (status) {
                var str = "";
                if (status === 2)
                    str = "wxlogin_atlas/image_login_changtong.png";
                else if (status === 1)
                    str = "wxlogin_atlas/image_login_fanmang.png";
                else if (status === -1 || status === 0)
                    str = "wxlogin_atlas/image_login_weihu.png";
                return str;
            };
            return SelectRightListItem;
        }(Laya.View));
        n_selectServer.SelectRightListItem = SelectRightListItem;
    })(n_selectServer = modules.n_selectServer || (modules.n_selectServer = {}));
})(modules || (modules = {}));
//# sourceMappingURL=init_wx_debug.js.map
window.ServerLoading = ServerLoading;