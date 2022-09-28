var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//@ts-ignore
var sygame = window["Sygame"];
var test = false;
var Global = /** @class */ (function () {
    function Global() {
    }
    Global.init = function () {
        if (test) {
            this.sygame = {
                channel: "3477d2273abd484ba2a0e04ad4971b3c",
                role_id: undefined,
                openid: "oxmOf5biumkGash-Xht9FVAlswVk",
                appid: "wx2936121c4817bf46"
            };
        }
        else {
            this.sygame = sygame;
        }
    };
    Global.getTimeStamp = function () {
        return new Date().getTime();
    };
    Global.setResMap = function (url, timestamp) {
        this.resMap[url] = url + "?" + timestamp;
    };
    Global.getResMap = function (url) {
        return this.resMap[url];
    };
    Global.resMap = {};
    return Global;
}());
// 程序入口
var minitool = /** @class */ (function () {
    function minitool() {
        this.getIcon = "https://wx.11babay.cn/uploads/f/fkccc1532944783/5/2/c/7/60dc442c4fbc5.png";
        this.copyIcon = "https://wx.11babay.cn/uploads/f/fkccc1532944783/3/0/1/7/60dc4409dce39.png";
        Global.init();

        this.getBoxCheckoutCode();
    }
    minitool.prototype.send = function (url, complete, error, type, data) {
        if (type === void 0) { type = "get"; }
        if (data === void 0) { data = "" || null; }
        var xhr = new Laya.HttpRequest();
        xhr.http.timeout = 10000; //设置超时时间；
        xhr.once(Laya.Event.COMPLETE, this, complete);
        xhr.once(Laya.Event.ERROR, this, error);
        xhr.send(url, data, type, "text");
    };
    minitool.prototype.postSidebarApi = function () {
        var openId = Global.sygame.openid;
        var param = `&channel=${Global.sygame.channel}&wecha_id=${openId}`
        this.send("https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApi"+param, this.completeHandler, this.errorHandler);
    };

    minitool.prototype.getBoxCheckoutCode = function () {
        // "POST",{commitId:sygame.SY_CONF.commitId}
        var commitId = Sygame.SY_CONF.commitId
        this.send("https://docater1.cn/index.php?g=Wap&m=MiniGame&a=getBoxCheckoutCode", this.getBoxCheckoutCodeRes, this.errorHandler, "post", { commitId: commitId });
    };

    minitool.prototype.getBoxCheckoutCodeRes = function (e) {
        var data = JSON.parse(e);
        console.log("getBoxCheckoutCode:", data)
        if (data.status == 1001) {
            var info = data.info;
            if(info == 4001){
                this.postSidebarApi();
            }else{
                console.error("盛也盒子 不显示" + data)
            }
        } else {
            console.error("盛也盒子 getBoxCheckoutCodeRes 其他错误" + data)
        }      
    };

    minitool.prototype.completeHandler = function (e) {
        var data = JSON.parse(e);
        console.log(data);
        switch (data.status) {
            case 1001:
                var srcArray = [
                    // { url: data.msg.basics_image_url, type: Laya.Loader.IMAGE },
                    // { url: data.msg.public_code, type: Laya.Loader.IMAGE },
                    // { url: data.msg.vip_customer_service, type: Laya.Loader.IMAGE },
                    // { url: data.msg.vip_customer_service_not_add, type: Laya.Loader.IMAGE },
                    // { url: data.msg.game_center_image_url, type: Laya.Loader.IMAGE },
                    // { url: data.msg.vip_qrcode, type: Laya.Loader.IMAGE },
                    // { url: this.getIcon, type: Laya.Loader.IMAGE },
                    // { url: this.copyIcon, type: Laya.Loader.IMAGE }
                ];
                data.msg.basics_image_url && srcArray.push({ url: data.msg.basics_image_url, type: Laya.Loader.IMAGE });
                data.msg.public_code && srcArray.push({ url: data.msg.public_code, type: Laya.Loader.IMAGE });
                data.msg.vip_customer_service && srcArray.push({ url: data.msg.vip_customer_service, type: Laya.Loader.IMAGE });
                data.msg.vip_customer_service_not_add && srcArray.push({ url: data.msg.vip_customer_service_not_add, type: Laya.Loader.IMAGE });
                data.msg.game_center_image_url && srcArray.push({ url: data.msg.game_center_image_url, type: Laya.Loader.IMAGE });
                data.msg.vip_qrcode && srcArray.push({ url: data.msg.vip_qrcode, type: Laya.Loader.IMAGE });
                data.msg.getIcon && srcArray.push({ url: this.getIcon, type: Laya.Loader.IMAGE });
                data.msg.copyIcon && srcArray.push({ url: this.copyIcon, type: Laya.Loader.IMAGE });
                for (var _i = 0, _a = data.msg.follow_gift_list; _i < _a.length; _i++) {
                    var item = _a[_i];
                    srcArray.push({ url: item.url, type: Laya.Loader.IMAGE });
                }
                for (var _b = 0, _c = data.msg.vip_box_list; _b < _c.length; _b++) {
                    var item = _c[_b];
                    srcArray.push({ url: item.url, type: Laya.Loader.IMAGE });
                }
                for (var i = 0; i < srcArray.length; i++) {
                    Global.setResMap(srcArray[i].url, Global.getTimeStamp());
                    srcArray[i].url = Global.getResMap(srcArray[i].url);
                }
                //srcArray.push({ url: "res/atlas/res.atlas", type: Laya.Loader.ATLAS });                
                Laya.loader.load(srcArray, Laya.Handler.create(this, this.initGame));
                this.data = data.msg;
                break;
            case 1002:
                Toast.msg("空的游戏channel");
                break;
            case 1003:
                Toast.msg("错误的游戏channel");
                break;
            case 1004:
                Toast.msg("未找到对应游戏大类");
                break;
            case 1005:
                Toast.msg("未设置侧边栏");
                break;
        }
    };
    minitool.prototype.errorHandler = function (e) {
    };
    minitool.prototype.initGame = function () {
        //console.log("资源加载完成");
        var mainc = new MainController(this);
        mainc.show();
    };
    return minitool;
}());
/*
* name;
*/
var MainController = /** @class */ (function () {
    function MainController(tool) {
        this.page = 3;
        this.rolePriceData = {};
        this.boxlist = [];
        this.donwX = 0;
        this.downY = 0;
        this.tool = tool;
    }
    MainController.prototype.setChildMouseThroughs = function (node) {
        var childs = node._childs || [];
        for (var i = 0; i < childs.length; i++) {
            if (childs[i]) {
                childs[i].mouseThrough = true;
            }
        }
    };
    MainController.prototype.show = function () {     
        if (this.tool.data.on === '1') {
            this.main = new ui.demoui.MainUI();
            Laya.stage.addChild(this.main);
            this.main.mouseThrough = true;
            //@ts-ignore
            var childs = this.main._childs || [];
            for (var i = 0; i < childs.length; i++) {
                childs[i].mouseThrough = true;
            }
            this.setChildMouseThroughs(this.main._childs);
            this.setChildMouseThroughs(this.main._childs[0]);
            this.initIcon();
            this.initEvent();
            this.initView();
            Toast.init();
            this.main.bg.x = -750;
        }
    };
    MainController.prototype.initView = function () {
        var _this = this;
        //page_1
        var word = this.tool.data.follow_down_words.replace(/\\n/g, "\n");
        this.main.box_1_lab_info.text = word;
        for (var i = 1; i <= this.tool.data.follow_gift_list.length; i++) {
            var item = this.tool.data.follow_gift_list[i - 1];
            //@ts-ignore
            this.main["box_1_img_" + i].skin = item.url; //Laya.loader.getRes(Global.getResMap(item.url));
            //@ts-ignore
            this.main["box_1_lab_" + i].text = item.name;
        }
        //page_2
        for (var i = 1; i <= this.tool.data.vip_box_list.length; i++) {
            var item = this.tool.data.vip_box_list[i - 1];
            //@ts-ignore
            this.main["box_2_img_" + i].skin = item.url; //Laya.loader.getRes(Global.getResMap(item.url));
            //@ts-ignore
            this.main["box_2_lab_" + i].text = item.name;
        }
        this.main.box_2_lab_m_1.text = "\u65B9\u6CD5\u4E00\uFF1A\u5355\u65E5\u5145\u503C" + +this.tool.data.x + "\u5143";
        this.main.box_2_lab_m_2.text = "\u65B9\u6CD5\u4E8C\uFF1A\u5386\u53F2\u7D2F\u8BA1\u5145\u503C" + +this.tool.data.y + "\u5143";
        this.main.box_2_lab_v_1.text = (this.rolePriceData.todayPrice || 0) + "/" + +this.tool.data.x + "\u5143";
        this.main.box_2_lab_v_2.text = (this.rolePriceData.allPrice || 0) + "/" + +this.tool.data.y + "\u5143";
        this.main.box_2_btn_copy.skin = this.tool.copyIcon; //Laya.loader.getRes(Global.getResMap(this.tool.copyIcon));
        this.main.box_2_btn_get.skin = this.tool.getIcon; //Laya.loader.getRes(Global.getResMap(this.tool.getIcon));
        this.main.box_2_btn_copy.visible = false;
        this.main.box_2_btn_get.on(Laya.Event.CLICK, this, function () {
            if (_this.rolePriceData.is_vip == 0) {
                Toast.msg("请先获取vip资格");
                return;
            }
            _this.main.box_2_lab_wx.text = this.rolePriceData.vip_wx;
            _this.main.box_2_btn_copy.visible = true;
        });
        this.main.box_2_btn_copy.on(Laya.Event.CLICK, this, function () {
            _this.copyText(this.rolePriceData.vip_wx);
        });
        this.main.box_2_addclick.on(Laya.Event.CLICK, this, function () {
            if (_this.rolePriceData.is_vip == 0)
                return;
            this.main.box_help_qrcode.skin =_this.rolePriceData.vip_qrcode;
            _this.main.box_help.visible = true;
        });
        this.main.box_help_close.on(Laya.Event.CLICK, this, function () {
            _this.main.box_help.visible = false;
        });
        //二维码界面
        this.main.box_help_bg.skin = this.tool.data.vip_customer_service_not_add; //Laya.loader.getRes(Global.getResMap(this.tool.data.vip_customer_service_not_add));
        this.main.box_help_qrcode.skin =_this.rolePriceData.vip_qrcode; //Laya.loader.getRes(Global.getResMap(this.tool.data.vip_qrcode));
        this.main.box_help_qrcode.scaleX = 160 / this.main.box_help_qrcode.width;
        this.main.box_help_qrcode.scaleY = 160 / this.main.box_help_qrcode.width;
        //page_3
        this.main.box_3_panel.vScrollBar.visible = false;
        this.main.box_3_panel.vScrollBarSkin = "common_atlas/scrollBar.png";
    };
    MainController.prototype.initIcon = function () {
        this.icon = new Laya.Image();
        this.icon.skin = this.tool.data.basics_image_url; //Laya.loader.getRes(Global.getResMap(this.tool.data.basics_image_url));
        this.icon.x = 0;
        this.icon.y = 200;
        this.icon.width = 102; //this.icon.texture.width;
        this.icon.height = 111; //this.icon.texture.height;
        this.main.addChild(this.icon);
        this.icon.on(Laya.Event.MOUSE_DOWN, this, this.iconPress);
        this.icon.on(Laya.Event.MOUSE_UP, this, this.iconUp);
        this.icon.on(Laya.Event.MOUSE_WHEEL, this, this.iconMove);
        this.dragRect = new Laya.Rectangle(-this.icon.width / 2, 0, Laya.stage.width, Laya.stage.height - this.icon.height / 2);
        //console.log(Laya.stage.width, Laya.stage.height);
    };
    MainController.prototype.initEvent = function () {
        var _this = this;
        this.main.btn_1.on(Laya.Event.CLICK, this, function () {
            if (_this.page == 1)
                return;
            _this.page1();
        });
        this.main.btn_2.on(Laya.Event.CLICK, this, function () {
            if (_this.page == 2)
                return;
            _this.page2();
        });
        this.main.btn_3.on(Laya.Event.CLICK, this, function () {
            if (_this.page == 3)
                return;
            _this.page3();
        });
        this.main.btn_close.on(Laya.Event.CLICK, this, function () {
            // TweenJS.create(this.main.bg).to({ x: -750 }, 300);
            _this.main.bg.x = -750;
            _this.icon.visible = true;
        });
    };
    MainController.prototype.initBoard = function () {
        this.isInitBoard = true;
        //this.main.bg.texture = Laya.loader.getRes(this.game.data.game_center_image_url);
        this.page1();
    };
    MainController.prototype.showBoard = function () {
        this.main.bg.x = 0;
        // TweenJS.create(this.main.bg).to({ x: 0 }, 300);
        this.icon.visible = false;
        var serverId = PF_INFO.selectedServer.server_id;
        var serverName = PF_INFO.selectedServer.server_name;       
        var roleId = PF_INFO.roleId;
        var roleName = PF_INFO.roleName;
        var openId = Global.sygame.openid;
        var param = `&role_id=${Global.sygame.role_id}&channel=${Global.sygame.channel}&server_id=${serverId}&server_name=${serverName}&wecha_id=${openId}&role_id=${roleId}&role_name=${roleName}`;
        this.tool.send("https://docater1.cn/index.php?g=Wap&m=MiniGame&a=sidebarApiRoleId"+param, this.rolePriceHandler.bind(this), this.roleError.bind(this));
    };
    MainController.prototype.page1 = function () {
        this.page = 1;
        if(!MainController.prototype.page1Bg){
            MainController.prototype.page1Bg = new Laya.Image(this.tool.data.public_code);
            this.main.bg.addChildAt(MainController.prototype.page1Bg,0)
        }
        if(MainController.prototype.page1Bg) MainController.prototype.page1Bg.visible = true; 
        if(MainController.prototype.page2Bg) MainController.prototype.page2Bg.visible = false; 
        if(MainController.prototype.page3Bg) MainController.prototype.page3Bg.visible = false;       
        //  this.main.bg.skin =  this.tool.data.public_code; //Laya.loader.getRes(Global.getResMap(this.tool.data.public_code));
        this.main.box_1_show.visible = true;
        this.main.box_2_show.visible = false;
        this.main.box_3_show.visible = false;
    };
    MainController.prototype.page2 = function () {
        this.page = 2;
        if(!MainController.prototype.page2Bg){
            MainController.prototype.page2Bg = new Laya.Image(this.tool.data.vip_customer_service);
            this.main.bg.addChildAt(MainController.prototype.page2Bg,0)
        }
        if(MainController.prototype.page1Bg) MainController.prototype.page1Bg.visible = false; 
        if(MainController.prototype.page2Bg) MainController.prototype.page2Bg.visible = true; 
        if(MainController.prototype.page3Bg) MainController.prototype.page3Bg.visible = false;    
        // this.main.bg.skin = this.tool.data.vip_customer_service; //Laya.loader.getRes(Global.getResMap(this.tool.data.vip_customer_service));
        this.main.box_1_show.visible = false;
        this.main.box_2_show.visible = true;
        this.main.box_3_show.visible = false;
    };
    MainController.prototype.page3 = function () {
        this.page = 3;
        if(!MainController.prototype.page3Bg){
            MainController.prototype.page3Bg = new Laya.Image(this.tool.data.game_center_image_url);
            this.main.bg.addChildAt(MainController.prototype.page3Bg,0)
        }
        if(MainController.prototype.page1Bg) MainController.prototype.page1Bg.visible = false; 
        if(MainController.prototype.page2Bg) MainController.prototype.page2Bg.visible = false; 
        if(MainController.prototype.page3Bg) MainController.prototype.page3Bg.visible = true;    
        MainController.prototype.page1Bg.visible = false;
        this.main.bg.skin = this.tool.data.game_center_image_url; //Laya.loader.getRes(Global.getResMap(this.tool.data.game_center_image_url));
        this.main.box_1_show.visible = false;
        this.main.box_2_show.visible = false;
        this.main.box_3_show.visible = true;
        this.sendBox || this.getBoxList(0);
        this.sendBox = true;
        sygame && sygame.syClickOpenBox();
        //this.boxListHandler();
    };
    MainController.prototype.getBoxList = function (n) {
        var _this = this;
        if (sygame) {
            //@ts-ignore
            sygame.syGetBoxList({ page: n, count: 12 }).then(function (res) {
                var json = res.data;
                if (json.status == 1001) {
                    if (json.data && json.data.length) {
                        _this.boxlist = _this.boxlist.concat(json.data);
                        n++;
                        _this.getBoxList(n);
                    }
                }
                else {
                    //over
                    //console.log("over");
                    _this.boxListHandler();
                }
            });
        }
    };
    MainController.prototype.copyText = function (str) {
        try {
            //@ts-ignore
            wx.setClipboardData({
                data: str,
                success: function (res) {
                    console.log("复制成功:", res);
                },
            });
        }
        catch (e) {
        }
    };
    MainController.prototype.rolePriceHandler = function (e) {
        this.rolePriceData = JSON.parse(e);
        switch (this.rolePriceData.status) {
            case 1001: //成功返回值 - todayPrice=用户今日充值；allPrice=用户总充值；is_vip=是否达到该游戏设置的VIP开关，1-是；0-不是
                this.main.box_2_lab_v_1.text = (this.rolePriceData.todayPrice || 0) + "/" + +this.tool.data.x + "\u5143";
                this.main.box_2_lab_v_2.text = (this.rolePriceData.allPrice || 0) + "/" + +this.tool.data.y + "\u5143";
                break;
            case 1002: //空的角色id
                break;
            case 1003: //角色id不存在
                break;
        }
    };
    MainController.prototype.roleError = function () {
    };
    MainController.prototype.boxListHandler = function () {
        var _loop_1 = function (i) {
            var item = this_1.boxlist[i];
            var itemui = new ui.demoui.BoxItemUI;
            itemui.icon.skin = item.icon;
            itemui.title.text = item.title;
            itemui.x = 160 * (i % 3);
            itemui.y = 160 * (i / 3 ^ 0);
            this_1.main.box_3_panel.addChild(itemui);
            var postData = {
                appid: Global.sygame.appid,
                game_id: item.game_id,
                jump_appid: item.jump_appid,
                jump_path: item.jump_path,
                tunnel_id: item.tunnel_id,
                uv: 0,
                wecha_id: Global.sygame.openid
            };
            var preview_img = item.preview_img;
            var jump_type = item.jump_type;
            var kf_session = item.kf_session;
            itemui.on(Laya.Event.CLICK, this_1, function () {
                if (sygame) {
                    sygame.syClickBox({ game_id: item.game_id, tunnel_id: item.tunnel_id, jump_appid: item.jump_appid, jump_path: item.jump_path }).then(function (e) {
                        if (jump_type === "0") {
                            //@ts-ignore
                            wx.navigateToMiniProgram({
                                appId: postData.jump_appid, path: postData.jump_path, fail: function (res) {
                                    if (!preview_img)
                                        return;
                                    wx.previewImage({
                                        urls: [preview_img]
                                    });
                                }
                            });
                        }
                        else if (jump_type === "1") {
                            // 预览海报
                            if (!preview_img)
                                return;
                            wx.previewImage({
                                urls: [preview_img]
                            });
                        }
                        else if (jump_type === "2") {
                            // 进入客服消息
                            if (!kf_session)
                                return;
                            wx.openCustomerServiceConversation({
                                sessionFrom: kf_session,
                                showMessageCard: true,
                                sendMessageTitle: '',
                                sendMessagePath: '',
                                sendMessageImg: ''
                            });
                        }
                    });
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < this.boxlist.length; i++) {
            _loop_1(i);
        }
    };
    MainController.prototype.boxListError = function () {
    };
    MainController.prototype.boxClickHandler = function () {
    };
    //////////////////////////////////////图标拖拽
    MainController.prototype.iconPress = function (e) {
        this.donwX = e.target.x;
        this.donwY = e.target.y;
        this.icon.startDrag(this.dragRect);
        this.isMove = false;
        this.isPress = true;
    };
    MainController.prototype.iconMove = function (e) {
        this.isMove = true;
    };
    MainController.prototype.iconUp = function (e) {
        var targetX = e.target.x;
        var targetY = e.target.y;
        this.icon.stopDrag();
        if (targetX == this.donwX && this.donwY == targetY) {
            this.isInitBoard || this.initBoard();
            this.showBoard();
        }
        this.isMove = false;
        this.isPress = false;
    };
    return MainController;
}());
////////////////////////////
// import View=laya.ui.View;
// import Dialog=laya.ui.Dialog;
var ui;
(function (ui) {
    var demoui;
    (function (demoui) {
        var BoxItemUI = /** @class */ (function (_super) {
            __extends(BoxItemUI, _super);
            function BoxItemUI() {
                return _super.call(this) || this;
            }
            BoxItemUI.prototype.createChildren = function () {
                laya.ui.View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.demoui.BoxItemUI.uiView);
            };
            BoxItemUI.uiView = { "type": "View", "props": { "width": 180, "height": 160 }, "child": [{ "type": "Image", "props": { "y": 3, "x": 32, "width": 115, "var": "icon", "height": 115 }, "child": [{ "type": "Text", "props": { "y": 121, "x": -33, "width": 180, "var": "title", "valign": "middle", "height": 34, "fontSize": 22, "color": "#441d1c", "align": "center" } }] }] };
            return BoxItemUI;
        }(laya.ui.View));
        demoui.BoxItemUI = BoxItemUI;
    })(demoui = ui.demoui || (ui.demoui = {}));
})(ui || (ui = {}));
(function (ui) {
    var demoui;
    (function (demoui) {
        var MainUI = /** @class */ (function (_super) {
            __extends(MainUI, _super);
            function MainUI() {
                return _super.call(this) || this;
            }
            MainUI.prototype.createChildren = function () {
                laya.ui.View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.demoui.MainUI.uiView);
            };
            MainUI.uiView = { "type": "View", "props": { "y": 0, "x": 0, "width": 750, "top": 0, "right": 0, "left": 0, "height": 1334, "bottom": 0 }, "child": [{ "type": "Box", "props": { "width": 750, "height": 1334, "centerY": 0 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 750, "var": "bg", "height": 1334 }, "child": [{ "type": "Image", "props": { "width": 750, "visible": false, "var": "box_1_show", "height": 1334, "centerY": 0 }, "child": [{ "type": "Text", "props": { "y": 595, "x": 46, "width": 464, "var": "box_1_lab_info", "leading": 10, "height": 151, "fontSize": 24, "color": "#a959ee" } }, { "type": "HBox", "props": { "y": 750, "x": 20, "width": 510, "space": 53, "height": 120, "align": "top" }, "child": [{ "type": "Image", "props": { "width": 88, "var": "box_1_img_1", "height": 88 }, "child": [{ "type": "Text", "props": { "y": 96, "x": -16, "width": 119, "var": "box_1_lab_1", "height": 22, "fontSize": 18, "color": "#a959ee", "align": "center" } }] }, { "type": "Image", "props": { "y": 10, "x": 10, "width": 88, "var": "box_1_img_2", "height": 88 }, "child": [{ "type": "Text", "props": { "y": 96, "x": -16, "width": 119, "var": "box_1_lab_2", "height": 22, "fontSize": 18, "color": "#a959ee", "align": "center" } }] }, { "type": "Image", "props": { "y": 20, "x": 20, "width": 88, "var": "box_1_img_3", "height": 88 }, "child": [{ "type": "Text", "props": { "y": 96, "x": -16, "width": 119, "var": "box_1_lab_3", "height": 22, "fontSize": 18, "color": "#a959ee", "align": "center" } }] }, { "type": "Image", "props": { "y": 30, "x": 30, "width": 88, "var": "box_1_img_4", "height": 88 }, "child": [{ "type": "Text", "props": { "y": 96, "x": -16, "width": 119, "var": "box_1_lab_4", "height": 22, "fontSize": 18, "color": "#a959ee", "align": "center" } }] }] }] }, { "type": "Image", "props": { "y": 0, "x": 0, "visible": false, "var": "box_2_show" }, "child": [{ "type": "HBox", "props": { "y": 544, "x": 24, "width": 500, "space": 44, "height": 86, "align": "top" }, "child": [{ "type": "Image", "props": { "y": 2.5, "x": 0, "width": 88, "var": "box_2_img_1", "scaleY": 0.74, "scaleX": 0.74, "height": 88 }, "child": [{ "type": "Text", "props": { "y": 95, "x": -27, "width": 143, "var": "box_2_lab_1", "height": 26, "fontSize": 26, "color": "#a959ee", "align": "center" } }] }, { "type": "Image", "props": { "y": 12, "x": 10, "width": 88, "var": "box_2_img_2", "scaleY": 0.74, "scaleX": 0.74, "height": 88 }, "child": [{ "type": "Text", "props": { "y": 95, "x": -27, "width": 143, "var": "box_2_lab_2", "height": 26, "fontSize": 26, "color": "#a959ee", "align": "center" } }] }, { "type": "Image", "props": { "y": 22, "x": 20, "width": 88, "var": "box_2_img_3", "scaleY": 0.74, "scaleX": 0.74, "height": 88 }, "child": [{ "type": "Text", "props": { "y": 95, "x": -27, "width": 143, "var": "box_2_lab_3", "height": 26, "fontSize": 26, "color": "#a959ee", "align": "center" } }] }, { "type": "Image", "props": { "y": 32, "x": 30, "width": 88, "var": "box_2_img_4", "scaleY": 0.74, "scaleX": 0.74, "height": 88 }, "child": [{ "type": "Text", "props": { "y": 95, "x": -27, "width": 143, "var": "box_2_lab_4", "height": 26, "fontSize": 26, "color": "#a959ee", "align": "center" } }] }, { "type": "Image", "props": { "y": 42, "x": 40, "width": 88, "var": "box_2_img_5", "scaleY": 0.74, "scaleX": 0.74, "height": 88 }, "child": [{ "type": "Text", "props": { "y": 95, "x": -27, "width": 143, "var": "box_2_lab_5", "height": 26, "fontSize": 26, "color": "#a959ee", "align": "center" } }] }] }, { "type": "Box", "props": { "y": 900, "x": 0, "width": 545, "height": 68 }, "child": [{ "type": "Text", "props": { "y": 0, "x": 40, "width": 290, "var": "box_2_lab_m_1", "text": "方法一：单日充值1000元", "height": 29, "fontSize": 20, "color": "#ff0300" } }, { "type": "Text", "props": { "y": 30, "x": 40, "width": 290, "var": "box_2_lab_m_2", "text": "方法一：历史累计充值1000元", "height": 29, "fontSize": 20, "color": "#ff0300" } }, { "type": "Text", "props": { "y": 0, "x": 321, "width": 164, "var": "box_2_lab_v_1", "text": "1000/1000元", "height": 29, "fontSize": 20, "color": "#ff0300", "align": "right" } }, { "type": "Text", "props": { "y": 30, "x": 321, "width": 164, "var": "box_2_lab_v_2", "text": "1000/1000元", "height": 29, "fontSize": 20, "color": "#ff0300", "align": "right" } }] }, { "type": "Image", "props": { "y": 426, "x": 345, "width": 102, "var": "box_2_btn_get", "stateNum": 1, "height": 38 } }, { "type": "Image", "props": { "y": 426, "x": 345, "width": 102, "var": "box_2_btn_copy", "stateNum": 1, "height": 38 } }, { "type": "Button", "props": { "y": 466, "x": 294, "width": 201, "var": "box_2_addclick", "stateNum": 1, "height": 27 } }, { "type": "Text", "props": { "y": 316, "x": 378, "width": 163, "var": "box_2_lab_wx", "height": 31, "fontSize": 26, "color": "#a959ee", "align": "left" } }] }, { "type": "Image", "props": { "y": 0, "x": 0, "visible": false, "var": "box_3_show" }, "child": [{ "type": "Panel", "props": { "y": 245, "x": 16, "width": 513, "var": "box_3_panel", "vScrollBarSkin": "", "height": 670 } }] }, { "type": "Button", "props": { "y": 968, "x": 0, "width": 187, "var": "btn_1", "height": 87 } }, { "type": "Button", "props": { "y": 968, "x": 186, "width": 187, "var": "btn_2", "height": 87 } }, { "type": "Button", "props": { "y": 968, "x": 375, "width": 187, "var": "btn_3", "height": 87 } }, { "type": "Button", "props": { "y": 515, "x": 558, "width": 37, "var": "btn_close", "height": 143 } }, { "type": "Box", "props": { "width": 750, "visible": false, "var": "box_help", "height": 1334 }, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "mouseThrough": false, "alpha": 0.7 }, "child": [{ "type": "Rect", "props": { "width": 750, "lineWidth": 1, "height": 1334, "fillColor": "#000000" } }] }, { "type": "Image", "props": { "y": 344, "x": 40, "width": 466, "var": "box_help_bg", "height": 515 }, "child": [{ "type": "Button", "props": { "y": -1, "x": 416, "width": 51, "var": "box_help_close", "height": 40 } }, { "type": "Image", "props": { "y": 63, "x": 152, "width": 160, "var": "box_help_qrcode", "height": 160 } }] }] }] }] }] };
            return MainUI;
        }(laya.ui.View));
        demoui.MainUI = MainUI;
    })(demoui = ui.demoui || (ui.demoui = {}));
})(ui || (ui = {}));
(function (ui) {
    var demoui;
    (function (demoui) {
        var ToastUI = /** @class */ (function (_super) {
            __extends(ToastUI, _super);
            function ToastUI() {
                return _super.call(this) || this;
            }
            ToastUI.prototype.createChildren = function () {
                laya.ui.View.regComponent("Text", laya.display.Text);
                _super.prototype.createChildren.call(this);
                this.createView(ui.demoui.ToastUI.uiView);
            };
            ToastUI.uiView = { "type": "View", "props": { "width": 750, "height": 1334 }, "child": [{ "type": "Box", "props": { "width": 300, "height": 50, "centerY": 0, "centerX": 0 }, "child": [{ "type": "Box", "props": { "width": 300, "height": 50, "centerX": 0, "alpha": 0.5 }, "child": [{ "type": "Rect", "props": { "width": 300, "lineWidth": 1, "height": 50, "fillColor": "#382f2f" } }] }, { "type": "Text", "props": { "width": 300, "var": "lab_msg", "valign": "middle", "text": "text", "height": 50, "fontSize": 24, "color": "#ffffff", "align": "center" } }] }] };
            return ToastUI;
        }(laya.ui.View));
        demoui.ToastUI = ToastUI;
    })(demoui = ui.demoui || (ui.demoui = {}));
})(ui || (ui = {}));
/////////////////////////
/*
* name;
*/
var Toast = /** @class */ (function () {
    function Toast() {
    }
    Toast.init = function () {
        if (!this.ui) {
            this.ui = new ui.demoui.ToastUI();
            this.ui.visible = false;
            Laya.stage.addChild(this.ui);
        }
    };
    Toast.msg = function (text) {
        var _this = this;
        if (!this.ui) {
            Toast.init();
        }
        this.ui.visible = true;
        this.ui.lab_msg.text = text;
        clearTimeout(this.interval);
        this.interval = setTimeout(function () {
            _this.ui.visible = false;
        }, 2000);
    };
    return Toast;
}());
//@ts-ignore
window["minitool"] = minitool;
//# sourceMappingURL=SyMiniTool.js.map