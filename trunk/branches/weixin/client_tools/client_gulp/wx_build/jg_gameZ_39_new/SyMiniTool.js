var __extends = this && this.__extends || function () {
  var e = function (t, i) {
    return (e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, i) {
      t.__proto__ = i;
    } || function (t, i) {
      for (var e in i) i.hasOwnProperty(e) && (t[e] = i[e]);
    })(t, i);
  };return function (t, i) {
    function __() {
      this.constructor = t;
    }e(t, i), t.prototype = null === i ? Object.create(i) : (__.prototype = i.prototype, new __());
  };
}();var sygame = window.Sygame;var test = !1;var Global = function () {
  function Global() {}return Global.init = function () {
    this.sygame = test ? { channel: "3477d2273abd484ba2a0e04ad4971b3c", role_id: void 0, openid: "oxmOf5biumkGash-Xht9FVAlswVk", appid: "wx2936121c4817bf46" } : sygame;
  }, Global.getTimeStamp = function () {
    return new Date().getTime();
  }, Global.setResMap = function (t, i) {
    this.resMap[t] = t + "?" + i;
  }, Global.getResMap = function (t) {
    return this.resMap[t];
  }, Global.resMap = {}, Global;
}();var minitool = function () {
  function minitool() {
    this.getIcon = "https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png", this.copyIcon = "https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png", Global.init(), this.getBoxCheckoutCode();
  }return minitool.prototype.send = function (t, i, e, o, a) {
    void 0 === o && (o = "get"), void 0 === a && (a = null);var n = new Laya.HttpRequest();n.http.timeout = 1e4, n.once(Laya.Event.COMPLETE, this, i), n.once(Laya.Event.ERROR, this, e), n.send(t, a, o, "text");
  }, minitool.prototype.postSidebarApi = function () {
    var t = Global.sygame.openid;t = `&channel=${Global.sygame.channel}&wecha_id=` + t;this.send("https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi" + t, this.completeHandler, this.errorHandler);
  }, minitool.prototype.getBoxCheckoutCode = function () {
    var t = Sygame.SY_CONF.commitId;this.send("https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode", this.getBoxCheckoutCodeRes, this.errorHandler, "post", { commitId: t });
  }, minitool.prototype.getBoxCheckoutCodeRes = function (t) {
    t = JSON.parse(t);console.log("getBoxCheckoutCode:", t), 1001 == t.status ? 4001 == t.info ? this.postSidebarApi() : console.error("\u76db\u4e5f\u76d2\u5b50 \u4e0d\u663e\u793a" + t) : console.error("\u76db\u4e5f\u76d2\u5b50 getBoxCheckoutCodeRes \u5176\u4ed6\u9519\u8bef" + t);
  }, minitool.prototype.completeHandler = function (t) {
    var i = JSON.parse(t);switch (console.log(i), i.status) {case 1001:
        var e = [];i.msg.basics_image_url && e.push({ url: i.msg.basics_image_url, type: Laya.Loader.IMAGE }), i.msg.public_code && e.push({ url: i.msg.public_code, type: Laya.Loader.IMAGE }), i.msg.vip_customer_service && e.push({ url: i.msg.vip_customer_service, type: Laya.Loader.IMAGE }), i.msg.vip_customer_service_not_add && e.push({ url: i.msg.vip_customer_service_not_add, type: Laya.Loader.IMAGE }), i.msg.game_center_image_url && e.push({ url: i.msg.game_center_image_url, type: Laya.Loader.IMAGE }), i.msg.vip_qrcode && e.push({ url: i.msg.vip_qrcode, type: Laya.Loader.IMAGE }), i.msg.getIcon && e.push({ url: this.getIcon, type: Laya.Loader.IMAGE }), i.msg.copyIcon && e.push({ url: this.copyIcon, type: Laya.Loader.IMAGE });for (var o = 0, a = i.msg.follow_gift_list; o < a.length; o++) {
          var n = a[o];e.push({ url: n.url, type: Laya.Loader.IMAGE });
        }for (var r = 0, s = i.msg.vip_box_list; r < s.length; r++) {
          n = s[r];e.push({ url: n.url, type: Laya.Loader.IMAGE });
        }for (var l = 0; l < e.length; l++) Global.setResMap(e[l].url, Global.getTimeStamp()), e[l].url = Global.getResMap(e[l].url);Laya.loader.load(e, Laya.Handler.create(this, this.initGame)), this.data = i.msg;break;case 1002:
        Toast.msg("\u7a7a\u7684\u6e38\u620fchannel");break;case 1003:
        Toast.msg("\u9519\u8bef\u7684\u6e38\u620fchannel");break;case 1004:
        Toast.msg("\u672a\u627e\u5230\u5bf9\u5e94\u6e38\u620f\u5927\u7c7b");break;case 1005:
        Toast.msg("\u672a\u8bbe\u7f6e\u4fa7\u8fb9\u680f");}
  }, minitool.prototype.errorHandler = function (t) {}, minitool.prototype.initGame = function () {
    new MainController(this).show();
  }, minitool;
}();var MainController = function () {
  function MainController(t) {
    this.page = 3, this.rolePriceData = {}, this.boxlist = [], this.donwX = 0, this.downY = 0, this.tool = t;
  }return MainController.prototype.setChildMouseThroughs = function (t) {
    var i = t._childs || [];for (var e = 0; e < i.length; e++) i[e] && (i[e].mouseThrough = !0);
  }, MainController.prototype.show = function () {
    if ("1" === this.tool.data.on) {
      this.main = new ui.demoui.MainUI(), Laya.stage.addChild(this.main), this.main.mouseThrough = !0;var t = this.main._childs || [];for (var i = 0; i < t.length; i++) t[i].mouseThrough = !0;this.setChildMouseThroughs(this.main._childs), this.setChildMouseThroughs(this.main._childs[0]), this.initIcon(), this.initEvent(), this.initView(), Toast.init(), this.main.bg.x = -750;
    }
  }, MainController.prototype.initView = function () {
    var t = this;var i = this.tool.data.follow_down_words.replace(/\\n/g, "\n");this.main.box_1_lab_info.text = i;for (var e = 1; e <= this.tool.data.follow_gift_list.length; e++) {
      var o = this.tool.data.follow_gift_list[e - 1];this.main["box_1_img_" + e].skin = o.url, this.main["box_1_lab_" + e].text = o.name;
    }for (e = 1; e <= this.tool.data.vip_box_list.length; e++) {
      o = this.tool.data.vip_box_list[e - 1];this.main["box_2_img_" + e].skin = o.url, this.main["box_2_lab_" + e].text = o.name;
    }this.main.box_2_lab_m_1.text = "\u65b9\u6cd5\u4e00\uff1a\u5355\u65e5\u5145\u503c" + +this.tool.data.x + "\u5143", this.main.box_2_lab_m_2.text = "\u65b9\u6cd5\u4e8c\uff1a\u5386\u53f2\u7d2f\u8ba1\u5145\u503c" + +this.tool.data.y + "\u5143", this.main.box_2_lab_v_1.text = (this.rolePriceData.todayPrice || 0) + "/" + +this.tool.data.x + "\u5143", this.main.box_2_lab_v_2.text = (this.rolePriceData.allPrice || 0) + "/" + +this.tool.data.y + "\u5143", this.main.box_2_btn_copy.skin = this.tool.copyIcon, this.main.box_2_btn_get.skin = this.tool.getIcon, this.main.box_2_btn_copy.visible = !1, this.main.box_2_btn_get.on(Laya.Event.CLICK, this, function () {
      0 != t.rolePriceData.is_vip ? (t.main.box_2_lab_wx.text = this.rolePriceData.vip_wx, t.main.box_2_btn_copy.visible = !0) : Toast.msg("\u8bf7\u5148\u83b7\u53d6vip\u8d44\u683c");
    }), this.main.box_2_btn_copy.on(Laya.Event.CLICK, this, function () {
      t.copyText(this.rolePriceData.vip_wx);
    }), this.main.box_2_addclick.on(Laya.Event.CLICK, this, function () {
      0 != t.rolePriceData.is_vip && (this.main.box_help_qrcode.skin = t.rolePriceData.vip_qrcode, t.main.box_help.visible = !0);
    }), this.main.box_help_close.on(Laya.Event.CLICK, this, function () {
      t.main.box_help.visible = !1;
    }), this.main.box_help_bg.skin = this.tool.data.vip_customer_service_not_add, this.main.box_help_qrcode.skin = t.rolePriceData.vip_qrcode, this.main.box_help_qrcode.scaleX = 160 / this.main.box_help_qrcode.width, this.main.box_help_qrcode.scaleY = 160 / this.main.box_help_qrcode.width, this.main.box_3_panel.vScrollBar.visible = !1, this.main.box_3_panel.vScrollBarSkin = "common_atlas/scrollBar.png";
  }, MainController.prototype.initIcon = function () {
    this.icon = new Laya.Image(), this.icon.skin = this.tool.data.basics_image_url, this.icon.x = 0, this.icon.y = 200, this.icon.width = 102, this.icon.height = 111, this.main.addChild(this.icon), this.icon.on(Laya.Event.MOUSE_DOWN, this, this.iconPress), this.icon.on(Laya.Event.MOUSE_UP, this, this.iconUp), this.icon.on(Laya.Event.MOUSE_WHEEL, this, this.iconMove), this.dragRect = new Laya.Rectangle(-this.icon.width / 2, 0, Laya.stage.width, Laya.stage.height - this.icon.height / 2);
  }, MainController.prototype.initEvent = function () {
    var t = this;this.main.btn_1.on(Laya.Event.CLICK, this, function () {
      1 != t.page && t.page1();
    }), this.main.btn_2.on(Laya.Event.CLICK, this, function () {
      2 != t.page && t.page2();
    }), this.main.btn_3.on(Laya.Event.CLICK, this, function () {
      3 != t.page && t.page3();
    }), this.main.btn_close.on(Laya.Event.CLICK, this, function () {
      t.main.bg.x = -750, t.icon.visible = !0;
    });
  }, MainController.prototype.initBoard = function () {
    this.isInitBoard = !0, this.page1();
  }, MainController.prototype.showBoard = function () {
    this.main.bg.x = 0, this.icon.visible = !1;var t = PF_INFO.selectedServer.server_id;var i = PF_INFO.selectedServer.server_name;var e = PF_INFO.roleId;var o = PF_INFO.roleName;var a = Global.sygame.openid;t = `&role_id=${Global.sygame.role_id}&channel=${Global.sygame.channel}&server_id=${t}&server_name=${i}&wecha_id=${a}&role_id=${e}&role_name=` + o;this.tool.send("https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId" + t, this.rolePriceHandler.bind(this), this.roleError.bind(this));
  }, MainController.prototype.page1 = function () {
    this.page = 1, MainController.prototype.page1Bg || (MainController.prototype.page1Bg = new Laya.Image(this.tool.data.public_code), this.main.bg.addChildAt(MainController.prototype.page1Bg, 0)), MainController.prototype.page1Bg && (MainController.prototype.page1Bg.visible = !0), MainController.prototype.page2Bg && (MainController.prototype.page2Bg.visible = !1), MainController.prototype.page3Bg && (MainController.prototype.page3Bg.visible = !1), this.main.box_1_show.visible = !0, this.main.box_2_show.visible = !1, this.main.box_3_show.visible = !1;
  }, MainController.prototype.page2 = function () {
    this.page = 2, MainController.prototype.page2Bg || (MainController.prototype.page2Bg = new Laya.Image(this.tool.data.vip_customer_service), this.main.bg.addChildAt(MainController.prototype.page2Bg, 0)), MainController.prototype.page1Bg && (MainController.prototype.page1Bg.visible = !1), MainController.prototype.page2Bg && (MainController.prototype.page2Bg.visible = !0), MainController.prototype.page3Bg && (MainController.prototype.page3Bg.visible = !1), this.main.box_1_show.visible = !1, this.main.box_2_show.visible = !0, this.main.box_3_show.visible = !1;
  }, MainController.prototype.page3 = function () {
    this.page = 3, MainController.prototype.page3Bg || (MainController.prototype.page3Bg = new Laya.Image(this.tool.data.game_center_image_url), this.main.bg.addChildAt(MainController.prototype.page3Bg, 0)), MainController.prototype.page1Bg && (MainController.prototype.page1Bg.visible = !1), MainController.prototype.page2Bg && (MainController.prototype.page2Bg.visible = !1), MainController.prototype.page3Bg && (MainController.prototype.page3Bg.visible = !0), MainController.prototype.page1Bg.visible = !1, this.main.bg.skin = this.tool.data.game_center_image_url, this.main.box_1_show.visible = !1, this.main.box_2_show.visible = !1, this.main.box_3_show.visible = !0, this.sendBox || this.getBoxList(0), this.sendBox = !0, sygame && sygame.syClickOpenBox();
  }, MainController.prototype.getBoxList = function (i) {
    var e = this;sygame && sygame.syGetBoxList({ page: i, count: 12 }).then(function (t) {
      t = t.data;1001 == t.status ? t.data && t.data.length && (e.boxlist = e.boxlist.concat(t.data), i++, e.getBoxList(i)) : e.boxListHandler();
    });
  }, MainController.prototype.copyText = function (t) {
    try {
      wx.setClipboardData({ data: t, success: function (t) {
          console.log("\u590d\u5236\u6210\u529f:", t);
        } });
    } catch (t) {}
  }, MainController.prototype.rolePriceHandler = function (t) {
    this.rolePriceData = JSON.parse(t), 1001 === this.rolePriceData.status && (this.main.box_2_lab_v_1.text = (this.rolePriceData.todayPrice || 0) + "/" + +this.tool.data.x + "\u5143", this.main.box_2_lab_v_2.text = (this.rolePriceData.allPrice || 0) + "/" + +this.tool.data.y + "\u5143");
  }, MainController.prototype.roleError = function () {}, MainController.prototype.boxListHandler = function () {
    var s = this;for (var t = 0; t < this.boxlist.length; t++) !function (t) {
      var i = s.boxlist[t];var e = new ui.demoui.BoxItemUI();e.icon.skin = i.icon, e.title.text = i.title, e.x = t % 3 * 160, e.y = 160 * (t / 3 ^ 0), s.main.box_3_panel.addChild(e);var o = { appid: Global.sygame.appid, game_id: i.game_id, jump_appid: i.jump_appid, jump_path: i.jump_path, tunnel_id: i.tunnel_id, uv: 0, wecha_id: Global.sygame.openid };var a = i.preview_img;var n = i.jump_type;var r = i.kf_session;e.on(Laya.Event.CLICK, s, function () {
        sygame && sygame.syClickBox({ game_id: i.game_id, tunnel_id: i.tunnel_id, jump_appid: i.jump_appid, jump_path: i.jump_path }).then(function (t) {
          "0" === n ? wx.navigateToMiniProgram({ appId: o.jump_appid, path: o.jump_path, fail: function (t) {
              a && wx.previewImage({ urls: [a] });
            } }) : "1" === n ? a && wx.previewImage({ urls: [a] }) : "2" === n && r && wx.openCustomerServiceConversation({ sessionFrom: r, showMessageCard: !0, sendMessageTitle: "", sendMessagePath: "", sendMessageImg: "" });
        });
      });
    }(t);
  }, MainController.prototype.boxListError = function () {}, MainController.prototype.boxClickHandler = function () {}, MainController.prototype.iconPress = function (t) {
    this.donwX = t.target.x, this.donwY = t.target.y, this.icon.startDrag(this.dragRect), this.isMove = !1, this.isPress = !0;
  }, MainController.prototype.iconMove = function (t) {
    this.isMove = !0;
  }, MainController.prototype.iconUp = function (t) {
    var i = t.target.x;t = t.target.y;this.icon.stopDrag(), i == this.donwX && this.donwY == t && (this.isInitBoard || this.initBoard(), this.showBoard()), this.isMove = !1, this.isPress = !1;
  }, MainController;
}();var ui;!function (t) {
  function BoxItemUI() {
    return e.call(this) || this;
  }var i, e;i = t.demoui || (t.demoui = {}), e = laya.ui.View, __extends(BoxItemUI, e), BoxItemUI.prototype.createChildren = function () {
    laya.ui.View.regComponent("Text", laya.display.Text), e.prototype.createChildren.call(this), this.createView(t.demoui.BoxItemUI.uiView);
  }, BoxItemUI.uiView = { type: "View", props: { width: 180, height: 160 }, child: [{ type: "Image", props: { y: 3, x: 32, width: 115, var: "icon", height: 115 }, child: [{ type: "Text", props: { y: 121, x: -33, width: 180, var: "title", valign: "middle", height: 34, fontSize: 22, color: "#441d1c", align: "center" } }] }] }, i.BoxItemUI = BoxItemUI;
}(ui = ui || {}), function (t) {
  function MainUI() {
    return e.call(this) || this;
  }var i, e;i = t.demoui || (t.demoui = {}), e = laya.ui.View, __extends(MainUI, e), MainUI.prototype.createChildren = function () {
    laya.ui.View.regComponent("Text", laya.display.Text), e.prototype.createChildren.call(this), this.createView(t.demoui.MainUI.uiView);
  }, MainUI.uiView = { type: "View", props: { y: 0, x: 0, width: 750, top: 0, right: 0, left: 0, height: 1334, bottom: 0 }, child: [{ type: "Box", props: { width: 750, height: 1334, centerY: 0 }, child: [{ type: "Image", props: { y: 0, x: 0, width: 750, var: "bg", height: 1334 }, child: [{ type: "Image", props: { width: 750, visible: !1, var: "box_1_show", height: 1334, centerY: 0 }, child: [{ type: "Text", props: { y: 595, x: 46, width: 464, var: "box_1_lab_info", leading: 10, height: 151, fontSize: 24, color: "#a959ee" } }, { type: "HBox", props: { y: 750, x: 20, width: 510, space: 53, height: 120, align: "top" }, child: [{ type: "Image", props: { width: 88, var: "box_1_img_1", height: 88 }, child: [{ type: "Text", props: { y: 96, x: -16, width: 119, var: "box_1_lab_1", height: 22, fontSize: 18, color: "#a959ee", align: "center" } }] }, { type: "Image", props: { y: 10, x: 10, width: 88, var: "box_1_img_2", height: 88 }, child: [{ type: "Text", props: { y: 96, x: -16, width: 119, var: "box_1_lab_2", height: 22, fontSize: 18, color: "#a959ee", align: "center" } }] }, { type: "Image", props: { y: 20, x: 20, width: 88, var: "box_1_img_3", height: 88 }, child: [{ type: "Text", props: { y: 96, x: -16, width: 119, var: "box_1_lab_3", height: 22, fontSize: 18, color: "#a959ee", align: "center" } }] }, { type: "Image", props: { y: 30, x: 30, width: 88, var: "box_1_img_4", height: 88 }, child: [{ type: "Text", props: { y: 96, x: -16, width: 119, var: "box_1_lab_4", height: 22, fontSize: 18, color: "#a959ee", align: "center" } }] }] }] }, { type: "Image", props: { y: 0, x: 0, visible: !1, var: "box_2_show" }, child: [{ type: "HBox", props: { y: 544, x: 24, width: 500, space: 44, height: 86, align: "top" }, child: [{ type: "Image", props: { y: 2.5, x: 0, width: 88, var: "box_2_img_1", scaleY: .74, scaleX: .74, height: 88 }, child: [{ type: "Text", props: { y: 95, x: -27, width: 143, var: "box_2_lab_1", height: 26, fontSize: 26, color: "#a959ee", align: "center" } }] }, { type: "Image", props: { y: 12, x: 10, width: 88, var: "box_2_img_2", scaleY: .74, scaleX: .74, height: 88 }, child: [{ type: "Text", props: { y: 95, x: -27, width: 143, var: "box_2_lab_2", height: 26, fontSize: 26, color: "#a959ee", align: "center" } }] }, { type: "Image", props: { y: 22, x: 20, width: 88, var: "box_2_img_3", scaleY: .74, scaleX: .74, height: 88 }, child: [{ type: "Text", props: { y: 95, x: -27, width: 143, var: "box_2_lab_3", height: 26, fontSize: 26, color: "#a959ee", align: "center" } }] }, { type: "Image", props: { y: 32, x: 30, width: 88, var: "box_2_img_4", scaleY: .74, scaleX: .74, height: 88 }, child: [{ type: "Text", props: { y: 95, x: -27, width: 143, var: "box_2_lab_4", height: 26, fontSize: 26, color: "#a959ee", align: "center" } }] }, { type: "Image", props: { y: 42, x: 40, width: 88, var: "box_2_img_5", scaleY: .74, scaleX: .74, height: 88 }, child: [{ type: "Text", props: { y: 95, x: -27, width: 143, var: "box_2_lab_5", height: 26, fontSize: 26, color: "#a959ee", align: "center" } }] }] }, { type: "Box", props: { y: 900, x: 0, width: 545, height: 68 }, child: [{ type: "Text", props: { y: 0, x: 40, width: 290, var: "box_2_lab_m_1", text: "\u65b9\u6cd5\u4e00\uff1a\u5355\u65e5\u5145\u503c1000\u5143", height: 29, fontSize: 20, color: "#ff0300" } }, { type: "Text", props: { y: 30, x: 40, width: 290, var: "box_2_lab_m_2", text: "\u65b9\u6cd5\u4e00\uff1a\u5386\u53f2\u7d2f\u8ba1\u5145\u503c1000\u5143", height: 29, fontSize: 20, color: "#ff0300" } }, { type: "Text", props: { y: 0, x: 321, width: 164, var: "box_2_lab_v_1", text: "1000/1000\u5143", height: 29, fontSize: 20, color: "#ff0300", align: "right" } }, { type: "Text", props: { y: 30, x: 321, width: 164, var: "box_2_lab_v_2", text: "1000/1000\u5143", height: 29, fontSize: 20, color: "#ff0300", align: "right" } }] }, { type: "Image", props: { y: 426, x: 345, width: 102, var: "box_2_btn_get", stateNum: 1, height: 38 } }, { type: "Image", props: { y: 426, x: 345, width: 102, var: "box_2_btn_copy", stateNum: 1, height: 38 } }, { type: "Button", props: { y: 466, x: 294, width: 201, var: "box_2_addclick", stateNum: 1, height: 27 } }, { type: "Text", props: { y: 316, x: 378, width: 163, var: "box_2_lab_wx", height: 31, fontSize: 26, color: "#a959ee", align: "left" } }] }, { type: "Image", props: { y: 0, x: 0, visible: !1, var: "box_3_show" }, child: [{ type: "Panel", props: { y: 245, x: 16, width: 513, var: "box_3_panel", vScrollBarSkin: "", height: 670 } }] }, { type: "Button", props: { y: 968, x: 0, width: 187, var: "btn_1", height: 87 } }, { type: "Button", props: { y: 968, x: 186, width: 187, var: "btn_2", height: 87 } }, { type: "Button", props: { y: 968, x: 375, width: 187, var: "btn_3", height: 87 } }, { type: "Button", props: { y: 515, x: 558, width: 37, var: "btn_close", height: 143 } }, { type: "Box", props: { width: 750, visible: !1, var: "box_help", height: 1334 }, child: [{ type: "Sprite", props: { y: 0, x: 0, mouseThrough: !1, alpha: .7 }, child: [{ type: "Rect", props: { width: 750, lineWidth: 1, height: 1334, fillColor: "#000000" } }] }, { type: "Image", props: { y: 344, x: 40, width: 466, var: "box_help_bg", height: 515 }, child: [{ type: "Button", props: { y: -1, x: 416, width: 51, var: "box_help_close", height: 40 } }, { type: "Image", props: { y: 63, x: 152, width: 160, var: "box_help_qrcode", height: 160 } }] }] }] }] }] }, i.MainUI = MainUI;
}(ui = ui || {}), function (t) {
  function ToastUI() {
    return e.call(this) || this;
  }var i, e;i = t.demoui || (t.demoui = {}), e = laya.ui.View, __extends(ToastUI, e), ToastUI.prototype.createChildren = function () {
    laya.ui.View.regComponent("Text", laya.display.Text), e.prototype.createChildren.call(this), this.createView(t.demoui.ToastUI.uiView);
  }, ToastUI.uiView = { type: "View", props: { width: 750, height: 1334 }, child: [{ type: "Box", props: { width: 300, height: 50, centerY: 0, centerX: 0 }, child: [{ type: "Box", props: { width: 300, height: 50, centerX: 0, alpha: .5 }, child: [{ type: "Rect", props: { width: 300, lineWidth: 1, height: 50, fillColor: "#382f2f" } }] }, { type: "Text", props: { width: 300, var: "lab_msg", valign: "middle", text: "text", height: 50, fontSize: 24, color: "#ffffff", align: "center" } }] }] }, i.ToastUI = ToastUI;
}(ui = ui || {});var Toast = function () {
  function Toast() {}return Toast.init = function () {
    this.ui || (this.ui = new ui.demoui.ToastUI(), this.ui.visible = !1, Laya.stage.addChild(this.ui));
  }, Toast.msg = function (t) {
    var i = this;this.ui || Toast.init(), this.ui.visible = !0, this.ui.lab_msg.text = t, clearTimeout(this.interval), this.interval = setTimeout(function () {
      i.ui.visible = !1;
    }, 2e3);
  }, Toast;
}();window.minitool = minitool;