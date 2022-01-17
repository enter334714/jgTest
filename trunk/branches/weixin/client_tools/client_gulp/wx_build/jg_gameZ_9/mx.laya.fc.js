(function (exports) {
    'use strict';

    class MxFc extends Laya.Sprite {
        constructor() {
            super();
            this.owner = this;
            this.btn = null;
            this.allSpr = null;
            this.btnSpr = null;
            this.back = null;
            this.btn0 = null;
            this.btn1 = null;
            this.btn2 = null;
            this.btnRed = null;
            this._secMaskbg = null;
            this._secPage = null;
            this.secPageCloseBtn = null;
            this.secPagePic = null;
            this.isMove = false;
            this.stageX = null;
            this.stageY = null;

            this.staW = null;
            this.staH = null;

            this.startPos = {x:0,y:0};         // 浮标初始位置
            this.noTouchTime = null;
            this.noTouchFunId = null;
            
            this.url_zskf = null;         // 专属客服  图片链接
            this.url_gzh = null;          // 微信公众号 图片链接
            this.appId = null;
            this.btnClicked = false;     // 是否点击过按钮
            this.hongdianSec = -1;       //   -1 不显示     0立即显示   3--3分钟显示
            this.tihuanFlag = 1;         //   1 开始创建时不会自动缩回去     0 开始创建时会自动缩回去 
            this.redTouchFunId = -1;     // 红点settimeout函数ID
            this.zOrder = 999;
            window.moosnowHeavy2 = window["moosnowHeavy"] || window["moosnowH5Sdk"];
            this.baseUrl = "https://liteplay-1253992229.cos.ap-guangzhou.myqcloud.com/"; 
            this.init();
            Laya.stage.addChild(this);
            
        }
        __winResize() {
            this.staW = Laya.stage.width;
            this.staH = Laya.stage.height;
            this.allSpr.x = this.startPos.x;
            this.allSpr.y = this.startPos.y;
            this._secMaskbg.graphics.clear(Laya.stage.width, Laya.stage.height);
            this._secMaskbg.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#585858");
        }
        get mx_Image() {
            return this.owner;
        }

        getResConfigData(callback){
            window.moosnowHeavy2.getConfigData((data)=>{
                if(callback){
                    callback(data);
                }
            })
        }
        init() {
            var self = this;
            this.appId = window.moosnowHeavy2.getAppId();
            this.staW = Laya.stage.width;
            this.staH = Laya.stage.height;
            console.log("init 初始化的时候 ------",this.staW,this.staH);
            this.getResConfigData((data) => {
                if(data){
                    self.url_zskf = data["kefuQrcode"];
                    self.url_gzh = data["wxgzh"];
                    self.startPos.x = data["fbcswz"][0];
                    self.startPos.y = data["fbcswz"][1];
                    self.noTouchTime = Number(data["caidanmiaoshu"]);
                    self.hongdianSec = Number(data["hodianmiaoshui"]);
                    self.tihuanFlag = Number(data["tihuan"]);
                    self.createImg();
                    self.addEventListener();
                    self._secMaskbg.on(Laya.Event.CLICK, self, self.onSecMaskBgBtnClick);
                    self.secPageCloseBtn.on(Laya.Event.CLICK, self, self.onclicksecPageCloseBtn);
                    self.__winResize();
                    setTimeout(()=>{
                        self.btn.alpha = 1;
                        if(self.hongdianSec == -1){
                            // 不显示
                        }else if(self.hongdianSec == 0){   // 立即显示
                            self.btnRed.visible = true;
                        }else if(self.hongdianSec > 0){
                            self.redTouchFunId = setTimeout(()=>{
                                self.btnRed.visible = true;
                            },60*1000*self.hongdianSec)
                        }
                        if(self.tihuanFlag == 0){
                            self.noTouchFunId = setTimeout(self.noTouchHide.bind(self),1000*self.noTouchTime);
                        }
                    },500);
                } 
            })
        }

        addEventListener(){
            // this.btn.on(Laya.Event.CLICK, this, this.onclickBtn);
            this.btn0.on(Laya.Event.CLICK, this, this.onclickBtn);
            this.btn1.on(Laya.Event.CLICK, this, this.onclickBtn);
            this.btn2.on(Laya.Event.CLICK, this, this.onclickBtn);
            this.btn.on(Laya.Event.MOUSE_DOWN, this, this.touch);
            this.btn.on(Laya.Event.MOUSE_UP, this, this.touch);
            this.btn.on(Laya.Event.MOUSE_OUT, this, this.touch);
            Laya.stage.on(Laya.Event.MOUSE_MOVE, this, this.touch);
            Laya.stage.on(Laya.Event.RESIZE, this, this.__winResize);
            
        }

        removeEventListener(){
            this.btn0.off(Laya.Event.CLICK, this, this.onclickBtn);
            this.btn1.off(Laya.Event.CLICK, this, this.onclickBtn);
            this.btn2.off(Laya.Event.CLICK, this, this.onclickBtn);
            this.btn.off(Laya.Event.MOUSE_DOWN, this, this.touch);
            this.btn.off(Laya.Event.MOUSE_UP, this, this.touch);
            this.btn.off(Laya.Event.MOUSE_OUT, this, this.touch);
            Laya.stage.off(Laya.Event.MOUSE_MOVE, this, this.touch);
            Laya.stage.off(Laya.Event.RESIZE, this, this.__winResize);
        }
        onSecMaskBgBtnClick(){
            this._secPage.visible = false;
            this.addEventListener();
        }
        onclicksecPageCloseBtn(){
            this._secPage.visible = false;
            this.addEventListener();
        }
        onclickBtn(e){
            console.log("点击了btn按钮88888-------",e.stageX,e.stageY);
            switch(e.currentTarget){
                case this.btn0://在线客服
                    console.log("点击了在线客服333333333----");
                    var UA = navigator.userAgent;
                    var isWeixin = /MicroMessenger/gi.test(UA);
                    if (window['wx'] && window['wx'].openCustomerServiceConversation) {   // 小游戏
                        window['wx'].openCustomerServiceConversation({
                            sessionFrom: "",
                            showMessageCard: false,
                            sendMessageTitle: "点击-返回游戏",
                            sendMessageImg: "http://www.qq.com/shareicon/kefu.jpg",
                            success: () => { },
                            fail: () => { },
                            complete: () => { },
                        })
                    }
                    else{  // app
                        window["injectedObject"].openCustomerServiceChat();
                    }
                    break;
                case this.btn1://专属客服
                    console.log("点击了专属客服44444444----");
                    var self = this;
                    this.getResConfigData((data) => {
                        if(data){
                                self.url_zskf = data["kefuQrcode"];
                                // self.graphics.graphics.clear();
                                // self.secPagePic.loadImage("");
                                self.secPagePic.skin = "";
                                self.secPagePic.skin = self.url_zskf;
                                if (null != self.secPagePic && !self.secPagePic.destroyed) {
                                    self.secPagePic.pos(Laya.stage.width/2, Laya.stage.height  * 0.5);
                                    self.secPagePic.visible = true;
                                    self._secPage.visible = true;
                                    self.removeEventListener();
                                }
                                // self.secPagePic.loadImage(self.url_zskf,null,null,null,null,Laya.Handler.create(self, function () {   
                                    
                                // }));
                            }
                        }
                    );
                    break;
                case this.btn2://公众号
                    console.log("点击了公众号55555555----");
                    var self = this;
                    this.getResConfigData((data) => {
                        if(data){
                                self.url_gzh = data["wxgzh"];
                                // self.graphics.graphics.clear();
                                // self.secPagePic.loadImage("");
                                self.secPagePic.skin = "";
                                self.secPagePic.skin = self.url_gzh;
                                if (null != self.secPagePic && !self.secPagePic.destroyed) {                                   
                                    self.secPagePic.pos(Laya.stage.width/2, Laya.stage.height  * 0.5);
                                    // self.secPagePic.pos((Laya.stage.width - self.secPagePic.width) * 0.5, (Laya.stage.height - self.secPagePic.height) * 0.5 - 50);
                                    self.secPagePic.visible = true;
                                    self._secPage.visible = true;
                                    self.removeEventListener();
                                }
                                // self.secPagePic.loadImage(self.url_gzh,null,null,null,null,Laya.Handler.create(self, function () {   
                                   
                                // }));
                            }
                        }
                    );
                    break;
            }
        }
        noTouchHide(){
            if (this.allSpr.x < this.staW/2 - 60) {
                this.allSpr.x = -60;
                this.btnRed.x = 57;
                this.btnRed.y = 72;
            }
            else {
                this.allSpr.x = this.staW - 40;
                this.btnRed.x = 13;
                this.btnRed.y = 72;
            }
    
            if (this.allSpr.y < -60) {
                this.allSpr.y = -60
            }
            else if (this.allSpr.y > this.staH - 60) {
                this.allSpr.y = this.staH - 60;
            }
            this.btnSpr.visible = false;
            this.btn.alpha = 0.5;
            console.log("666666666 noTouchHide----------",this.allSpr.x,this.allSpr.y);
        }
        touch(e){
            if (e.type == "mousedown") {        
                this.isMove = true;
                this.stageX = e.stageX;
                this.stageY = e.stageY;
                clearTimeout(this.noTouchFunId);
            }
            else if (e.type == "mousemove") {
                clearTimeout(this.noTouchFunId);
                if (this.isMove) {
                    this.btn.alpha = 1;
                    this.allSpr.x = e.stageX - 54;
                    this.allSpr.y = e.stageY - 54;
    
                    if (this.allSpr.x > this.staW/2) {
                        this.btnSpr.x = -this.staW/2 + 8;
                    }
                    else {
                        this.btnSpr.x = 0;
                    }
                }
            }
            else {
                this.isMove = false;
                console.log(" Math.abs(this.stageX - e.stageX) Math.abs(this.stageY - e.stageY) --------",Math.abs(this.stageX - e.stageX),Math.abs(this.stageY - e.stageY),e.type)
                if (Math.abs(this.stageX - e.stageX) < 1 && Math.abs(this.stageY - e.stageY) < 1) {
                    if(e.type == "mouseup"){
                        this.btnSpr.visible = !this.btnSpr.visible;
                        if (this.btnSpr.visible) {
                            this.btn.alpha = 1;
                        }
                        else {
                            this.btn.alpha = 0.5;
                        }
                    }
                    this.btnRed.visible = false;
                    if(this.redTouchFunId != -1){
                        this.redTouchFunId = -1
                        clearTimeout(this.redTouchFunId);
                    }
                }
    
                if (this.allSpr.x < this.staW/2) {
                    this.allSpr.x = 0;
                }
                else {
                    this.allSpr.x = this.staW - 108;
                }
                this.btnRed.x = 45;
                this.btnRed.y = 72;
                
                if (this.allSpr.y < 0) {
                    this.allSpr.y = 0
                }
                else if (this.allSpr.y > this.staH - 108) {
                    this.allSpr.y = this.staH - 108;
                }
                clearTimeout(this.noTouchFunId);
                this.noTouchFunId = setTimeout(this.noTouchHide.bind(this),1000*this.noTouchTime);     
            }
        }
        createImg() {
            this.allSpr = new Laya.Sprite();
            this.addChild(this.allSpr);
            this.allSpr.x = this.startPos.x;
            this.allSpr.y = this.startPos.y;
            this.btnSpr = new Laya.Sprite();
		    this.allSpr.addChild(this.btnSpr);

            this.btnSpr.visible = false;
            this.back = new Laya.Sprite();
            this.back.loadImage(this.baseUrl+"mx_fc/fc_back.png");
            this.back.x = 100;
            this.back.y = 12;
            this.btnSpr.addChild(this.back);

            this.btn = new Laya.Sprite();
            this.btn.loadImage(this.baseUrl+"mx_fc/fc_btn.png");
		    this.allSpr.addChild(this.btn);

            this.btnRed = new Laya.Sprite();
            this.btnRed.loadImage(this.baseUrl+"mx_fc/fc_redpoint.png");
            this.allSpr.addChild(this.btnRed);
            this.btnRed.x = 45;
            this.btnRed.y = 72;
            this.btnRed.visible = false;

            this.btn0 = new Laya.Sprite();
            this.btn0.loadImage(this.baseUrl+"mx_fc/fc_icon0.png");
            this.btn0.x = 120;
            this.btn0.y = 19;
            this.btnSpr.addChild(this.btn0);

            this.btn1 = new Laya.Sprite();
            this.btn1.loadImage(this.baseUrl+"mx_fc/fc_icon1.png");
            this.btn1.x = 206;
            this.btn1.y = 17;
            this.btnSpr.addChild(this.btn1);

            this.btn2 = new Laya.Sprite();
            this.btn2.loadImage(this.baseUrl+"mx_fc/fc_icon2.png");
            this.btn2.x = 291;
            this.btn2.y = 23;
            this.btnSpr.addChild(this.btn2);

            this._secPage = new Laya.Sprite();
            this._secPage.x = 0;
            this._secPage.y = 0;
            this._secPage.size(Laya.stage.width,Laya.stage.height);
            this._secPage.visible = false;
            this._secPage.zOrder = 1000;
            Laya.stage.addChild(this._secPage);

            this._secMaskbg = new Laya.Sprite();
            this._secMaskbg.x = 0;
            this._secMaskbg.y = 0;
            this._secMaskbg.size(Laya.stage.width,Laya.stage.height);
            this._secMaskbg.mouseEnable = true;
            this._secMaskbg.mouseThrough = false;
            this._secMaskbg.graphics.clear(Laya.stage.width, Laya.stage.height);
            this._secMaskbg.graphics.drawRect(0, 0, Laya.stage.width, Laya.stage.height, "#585858");
            this._secMaskbg.alpha = 0.5;
            this._secPage.addChild(this._secMaskbg);

            this.secPagePic = new Laya.Image();
            this.secPagePic.anchorX = 0.5;
            this.secPagePic.anchorY = 0.5;
            // this.secPagePic.size(Laya.stage.width-200,500);
            this._secPage.addChild(this.secPagePic);

            this.secPageCloseBtn = new Laya.Sprite();
            this.secPageCloseBtn.loadImage(this.baseUrl+"mx_fc/close_btn.png");
            this.secPageCloseBtn.x = Laya.stage.width - 90;
            this.secPageCloseBtn.y = Laya.stage.height/2 - 350;
            this._secPage.addChild(this.secPageCloseBtn);

        }
    }
    exports.MxFc = MxFc;
}(window));