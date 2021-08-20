"use strict";var ui,__extends=this&&this.__extends||function(){var b$f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b$c,b$d){b$c.__proto__=b$d}||function(b$c,b$d){for(var b$e in b$d)b$d.hasOwnProperty(b$e)&&(b$c[b$e]=b$d[b$e])};return function(b$c,b$d){function b$e(){this.constructor=b$c}b$f(b$c,b$d),b$c.prototype=null===b$d?Object.create(b$d):(b$e.prototype=b$d.prototype,new b$e)}}(),View=laya.ui.View,Dialog=laya.ui.Dialog;!function(b$e){var b$c=function(b$c){function b$d(){return b$c.call(this)||this}return __extends(b$d,b$c),b$d.prototype.createChildren=function(){b$c.prototype.createChildren.call(this),this.createView(b$e.b$c.uiView)},b$d.uiView={type:"View",props:{width:720,name:"P_WXAuthorizationViewUI",height:1280},child:[{type:"Image",props:{width:720,var:"bgImg",skin:"llllogin/2.jpg",name:"bg",height:1280,centerY:0,centerX:0}},{type:"Box",props:{y:0,width:720,right:0,height:1280},child:[{type:"Image",props:{width:720,var:"topImg",top:-139,skin:"llllogin/6.jpg",height:139,centerX:0,anchorY:1}},{type:"Image",props:{width:720,var:"btmImg",top:1280,skin:"llllogin/3.jpg",height:139,centerX:0}},{type:"Image",props:{x:-220,width:220,var:"leftImg",skin:"llllogin/4.jpg",left:-220,height:1280,centerY:0}},{type:"Image",props:{width:220,var:"rightImg",skin:"llllogin/5.jpg",left:720,height:1280,centerY:0}}]}]},b$d}(View);b$e.b$c=b$c}(ui||(ui={})),function(b$e){var b$c=function(b$c){function b$d(){return b$c.call(this)||this}return __extends(b$d,b$c),b$d.prototype.createChildren=function(){b$c.prototype.createChildren.call(this),this.createView(b$e.b$d.uiView)},b$d.uiView={type:"View",props:{width:720,name:"P_LoadingView",height:1280},child:[{type:"Image",props:{width:720,var:"bgImg",name:"bg",height:1280,centerY:0,centerX:0}},{type:"Box",props:{y:0,x:0,width:720,height:1280},child:[{type:"Image",props:{var:"topImg",centerX:0,bottom:1280,anchorY:1}},{type:"Image",props:{var:"btmImg",top:1280,centerX:0}},{type:"Image",props:{var:"leftImg",right:720,pivotX:1,centerY:0}},{type:"Image",props:{var:"rightImg",left:720,centerY:0}}]},{type:"Image",props:{var:"copyRightImg",skin:"llllogin/1.png",centerX:0,bottom:10}},{type:"Box",props:{y:963,x:0,width:720,var:"processBox1",name:"processBox1",height:130},child:[{type:"Image",props:{y:46,x:62,width:596,var:"loadingBarBg",skin:"looooooding/image_loding_bar0.png",height:27,centerX:0}},{type:"Image",props:{y:49,x:64,width:590,var:"loadingBar",skin:"looooooding/image_loding_bar1.png",height:21}},{type:"Image",props:{y:55,x:507,width:208,var:"loadingImg1",skin:"looooooding/image_loding_bar2.png",height:11}},{type:"Image",props:{y:6,x:628,width:39,var:"loadingImg2",skin:"looooooding/image_loding_bar3.png",height:116}},{type:"Label",props:{y:48,x:293,width:134,var:"percentageTips",valign:"middle",text:"88%",strokeColor:"#565353",stroke:3,height:24,fontSize:24,color:"#fbfbf9",centerX:0,bold:!1,align:"center"}}]},{type:"Box",props:{y:1065,x:0,width:720,var:"processBox2",name:"processBox2",height:17},child:[{type:"Image",props:{y:0,x:307,var:"point1",skin:"looooooding/image_login_point3.png",centerX:-45}},{type:"Image",props:{y:0,x:337,var:"point2",skin:"looooooding/image_login_point2.png",centerX:-15}},{type:"Image",props:{y:0,x:367,var:"point3",skin:"looooooding/image_login_point1.png",centerX:15}},{type:"Image",props:{y:0,x:397,var:"point4",skin:"looooooding/image_login_point1.png",centerX:45}}]},{type:"Button",props:{y:790,x:55,visible:!1,var:"getTipsBtn",stateNum:1,skin:"looooooding/1.png",name:"getTipsBtn",labelSize:30,labelFont:"SimHei",labelColors:"#af4158"},child:[{type:"Label",props:{y:155,x:146,width:323,var:"txtGetTm",text:"\u7acb\u5373\u9886\u53d6(5s)",name:"txtGetTm",height:30,fontSize:30,color:"#bd4f1e",align:"center"}}]},{type:"Label",props:{y:1107,width:500,var:"loadingTips",valign:"middle",text:"\u52a0\u8f7d\u63cf\u8ff0",height:26,fontSize:26,color:"#f2ffb5",centerX:0,bold:!1,align:"center"}},{type:"Label",props:{y:10,x:10,width:342,var:"versionTxt",valign:"middle",top:20,text:"\u7248\u672c\uff1a100",right:20,height:32,fontSize:24,color:"#163274",bold:!1,align:"right"}}]},b$d}(View);b$e.b$d=b$c}(ui||(ui={})),function(b$e){var b$c=function(b$c){function b$d(){return b$c.call(this)||this}return __extends(b$d,b$c),b$d.prototype.createChildren=function(){View.regComponent("Text",laya.display.Text),b$c.prototype.createChildren.call(this),this.createView(b$e.b$e.uiView)},b$d.uiView={type:"View",props:{width:720,name:"P_SelectServerViewUI",height:1280},child:[{type:"Image",props:{width:720,var:"bgImg",skin:"llllogin/2.jpg",name:"bg",height:1280,centerY:0,centerX:0}},{type:"Box",props:{y:0,x:0,width:720,height:1280},child:[{type:"Image",props:{width:720,var:"topImg",top:-139,skin:"llllogin/6.jpg",height:139,centerX:0}},{type:"Image",props:{width:720,var:"btmImg",top:1280,skin:"llllogin/3.jpg",height:139,centerX:0}},{type:"Image",props:{width:220,var:"leftImg",skin:"llllogin/4.jpg",left:-220,height:1280,centerY:0}},{type:"Image",props:{width:220,var:"rightImg",skin:"llllogin/5.jpg",left:720,height:1280,centerY:0}}]},{type:"Image",props:{y:845,var:"selectServer",skin:"llllogin/image_login_xuanqubg.png",centerX:0}},{type:"Image",props:{y:930,x:162,var:"hotImage",skin:"llllogin/image_login_changtong.png"}},{type:"Image",props:{var:"copyRightImg",skin:"llllogin/1.png",centerX:0,bottom:10}},{type:"Image",props:{y:1015,var:"enterBtn",stateNum:1,skin:"llllogin/btn_login_loginanniu.png",name:"enterBtn",centerX:0}},{type:"Label",props:{y:932,x:521,var:"selServer",valign:"middle",text:"\u9009\u670d>",height:32,fontSize:30,color:"#feffc0",bold:!1,align:"center"}},{type:"Label",props:{y:932,width:342,var:"serverName",valign:"middle",text:"0000000000001\u670d",height:32,fontSize:30,color:"#feffc0",centerX:0,bold:!1,align:"center"}},{type:"Label",props:{width:342,var:"versionTxt",valign:"middle",top:20,text:"\u7248\u672c\uff1a100",right:20,height:32,fontSize:24,color:"#163274",bold:!1,align:"right"}},{type:"Image",props:{y:127,x:593.5,var:"noticeBtn",skin:"llllogin/btn_login_gonggao.png"}},{type:"Image",props:{y:71,x:-2,visible:!1,var:"noticeBg",skin:"llllogin/8.png",centerY:0,centerX:0},child:[{type:"Image",props:{y:36.5,x:616,var:"noticeClose",skin:"llllogin/btn_com_chuangback.png"}},{type:"Label",props:{y:72,x:216,width:234,var:"noticeTitle",valign:"middle",text:"\u6682\u65e0\u516c\u544a",height:35,fontSize:30,color:"#ffffff",bold:!1,align:"center"}},{type:"Text",props:{y:142,x:61,wordWrap:!0,width:545,var:"noticeContent",valign:"top",overflow:"scroll",mouseEnabled:!0,leading:4,height:870,fontSize:26,color:"#212942"}}]},{type:"Image",props:{visible:!1,var:"listBg",skin:"llllogin/9.png",centerY:0,centerX:0},child:[{type:"Box",props:{y:117,x:61,width:200,var:"leftListBox",height:905}},{type:"Box",props:{y:117,x:293,width:358,var:"rightListBox",height:905}},{type:"Image",props:{y:13,x:642,var:"closeBg",skin:"llllogin/image_com_tuichu.png"}}]}]},b$d}(View);b$e.b$e=b$c}(ui||(ui={})),function(b$c){var b$d,b$e;b$d=b$c.b$f||(b$c.b$f={}),b$e=function(b$d){function b$c(){return b$d.call(this)||this}return __extends(b$c,b$d),b$c.prototype.initialize=function(){b$d.prototype.initialize.call(this),this.centerX=0,this.centerY=0,this.addEvt(),this.onOpened()},b$c.prototype.addEvt=function(){this.on(Laya.Event.CLICK,this,this.b$g)},b$c.prototype.rmEvts=function(){this.off(Laya.Event.CLICK,this,this.b$g)},b$c.prototype.onOpened=function(){this.b$h=Date.now(),ServerLoading.instance.preloadServer(),ServerLoading.instance.preloadLoading()},b$c.prototype.destroy=function(b$c){void 0===b$c&&(b$c=!0),this.rmEvts(),b$d.prototype.destroy.call(this,b$c)},b$c.prototype.b$g=function(){1e4<Date.now()-this.b$h&&(this.b$h-=1e3,Browser.window.PF_INFO.selectedServer.server_id||(ServerLoading.instance.enterDefaultServer(),ServerLoading.instance.sendRecord()))},b$c}(ui.b$c),b$d.AuthorizationPanel=b$e}(modules||(modules={})),function(b$c){var b$d,b$e,b$f,b$g,b$i,b$h;b$d=b$c.b$i||(b$c.b$i={}),b$e=Laya.Event,b$f=Laya.Image,b$g=Laya.Component,b$i=Laya.Loader,b$h=function(b$d){function b$k(){var b$c=b$d.call(this)||this;return b$c.b$j=new b$f,b$c.addChild(b$c.b$j),b$c.b$k=null,b$c.b$l=[],b$c.b$m=!1,b$c.b$n=0,b$c.b$o=!0,b$c.b$p=6,b$c.b$q=!1,b$c.on(b$e.DISPLAY,b$c,b$c.b$r),b$c.on(b$e.UNDISPLAY,b$c,b$c.b$s),b$c}return __extends(b$k,b$d),b$k.create=function(b$c,b$d,b$e,b$f,b$g,b$h,b$i){void 0===b$f&&(b$f=0),void 0===b$g&&(b$g=6),void 0===b$h&&(b$h=!0),void 0===b$i&&(b$i=!1);var b$j=new b$k;return b$j.skin(b$d,b$e,b$f),b$j.durFrm=b$g,b$j.loop=b$h,b$j.atHide=b$i,b$c&&b$c.addChild(b$j),b$j},b$k.play=function(b$c){b$c&&(b$c.visible=!0,b$c.play())},b$k.stop=function(b$c){b$c&&(b$c.visible=!1,b$c.stop())},b$k.prototype.destroy=function(b$c){Laya.timer.clear(this,this.b$t),this.off(b$e.DISPLAY,this,this.b$r),this.off(b$e.UNDISPLAY,this,this.b$s),b$d.prototype.destroy.call(this,b$c)},b$k.prototype.b$r=function(){},b$k.prototype.b$s=function(){},b$k.prototype.skin=function(b$c,b$d,b$e){if(this.b$k!=b$c){this.b$k=b$c,this.b$l=[];for(var b$f=0,b$g=b$e;b$g<=b$d;b$g++)this.b$l[b$f++]=b$c+"/"+b$g+".png";var b$h=b$i.getRes(this.b$l[0]);b$h&&(this.width=b$h.sourceWidth,this.height=b$h.sourceHeight),this.b$t()}},Object.defineProperty(b$k.prototype,"atHide",{get:function(){return this.b$q},set:function(b$c){this.b$q=b$c},enumerable:!0,configurable:!0}),Object.defineProperty(b$k.prototype,"durFrm",{set:function(b$c){this.b$p!=b$c&&(this.b$p=b$c,this.b$m&&(Laya.timer.clear(this,this.b$t),Laya.timer.loop(this.b$p*(1e3/60),this,this.b$t)))},enumerable:!0,configurable:!0}),Object.defineProperty(b$k.prototype,"loop",{set:function(b$c){this.b$o=b$c},enumerable:!0,configurable:!0}),b$k.prototype.play=function(){this.b$m&&this.stop(),this.b$m=!0,this.b$n=0,Laya.timer.loop(this.b$p*(1e3/60),this,this.b$t),this.b$t()},b$k.prototype.stop=function(){this.b$m=!1,this.b$n=0,this.b$t(),Laya.timer.clear(this,this.b$t)},b$k.prototype.pause=function(){this.b$m&&(this.b$m=!1,Laya.timer.clear(this,this.b$t))},b$k.prototype.resume=function(){this.b$m||(this.b$m=!0,Laya.timer.loop(this.b$p*(1e3/60),this,this.b$t),this.b$t())},Object.defineProperty(b$k.prototype,"isPlay",{get:function(){return this.b$m},enumerable:!0,configurable:!0}),b$k.prototype.b$t=function(){this.b$l&&0!=this.b$l.length&&(this.b$j.skin=this.b$l[this.b$n],this.b$m&&(this.b$n++,this.b$n==this.b$l.length&&(this.b$o?this.b$n=0:(Laya.timer.clear(this,this.b$t),this.b$m=!1,this.b$q&&(this.visible=!1),this.event(b$e.COMPLETE)))))},b$k}(b$g),b$d.PanelEff=b$h}(modules||(modules={})),function(b$c){var b$d,b$f,b$e;b$d=b$c.b$f||(b$c.b$f={}),b$f=b$c.b$i.PanelEff,b$e=function(b$e){function b$c(b$c){void 0===b$c&&(b$c=0);var b$d=b$e.call(this)||this;return b$d.b$u={bgImgSkin:"looooooding/3.jpg",topImgSkin:"looooooding/10.jpg",btmImgSkin:"looooooding/4.jpg",leftImgSkin:"looooooding/6.jpg",rightImgSkin:"looooooding/8.jpg",loadingBarBgSkin:"looooooding/image_loding_bar0.png",copyRightImgBottom:10,processBox1Y:963,processBox2Y:1065,loadingTipsSize:26,getTipsBtnVisible:!1},b$d.b$v={bgImgSkin:"looooooding/12.jpg",topImgSkin:"looooooding/11.jpg",btmImgSkin:"looooooding/5.jpg",leftImgSkin:"looooooding/7.jpg",rightImgSkin:"looooooding/9.jpg",loadingBarBgSkin:"looooooding/image_loding_bar02.png",copyRightImgBottom:10,processBox1Y:963,processBox2Y:1065,loadingTipsSize:26,getTipsBtnVisible:!1},b$d.b$w=0,b$d.b$x(1==b$c?b$d.b$v:b$d.b$u),b$d}return __extends(b$c,b$e),b$c.prototype.initialize=function(){if(b$e.prototype.initialize.call(this),ServerLoading.instance.preloadLoading(),this.b$y=Browser.window.PF_INFO,this.centerX=0,this.centerY=0,this.b$y){this.b$y.loadingType;this.loadingTips.color="#f2ffb5"}this.b$z=[this.point1,this.point2,this.point3,this.point4],Browser.window.watPanel=this,wxHideLoading(),ServerLoading.instance.closeAuthor(),ServerLoading.instance.closeServer(),this.onOpened()},b$c.prototype.toAllProgress=function(b$c){var b$d=this;if(-1===b$c)return b$d.b$w=0,Laya.timer.clear(this,this.toAllProgress),void Laya.timer.frameLoop(1,this,this.toAllProgress);if(-2!==b$c){b$d.b$w<.9?b$d.b$w+=(.15*Math.random()+.01)/(100*Math.random()+50):b$d.b$w<1&&(b$d.b$w+=1e-4),.9999<b$d.b$w&&(b$d.b$w=.9999,Laya.timer.clear(this,this.toAllProgress),Laya.timer.once(3e3,this,function(){.9<b$d.b$w&&toAllProgress(-1)}));var b$e=b$d.b$w,b$f=590*b$e;b$d.b$w=b$d.b$w>b$e?b$d.b$w:b$e,b$d.loadingBar.width=b$f;var b$g=b$d.loadingBar.x+b$f;b$d.loadingImg2.x=b$g-15,364<=b$g?(b$d.loadingImg1.visible=!0,b$d.loadingImg1.x=b$g-202):b$d.loadingImg1.visible=!1,b$d.percentageTips.text=(100*b$e>>0)+"%",b$d.b$w<.9999&&Laya.timer.frameLoop(1,this,this.toAllProgress)}else Laya.timer.clear(this,this.toAllProgress)},b$c.prototype.toProgress=function(b$c,b$d,b$e){1<b$c&&(b$c=1);var b$f=590*b$c;this.b$w=this.b$w>b$c?this.b$w:b$c,this.loadingBar.width=b$f;var b$g=this.loadingBar.x+b$f;this.loadingImg2.x=b$g-15,364<=b$g?(this.loadingImg1.visible=!0,this.loadingImg1.x=b$g-202):this.loadingImg1.visible=!1,this.percentageTips.text=(100*b$c>>0)+"%",this.loadingTips.text=b$d;for(var b$h=b$e-1,b$i=0;b$i<this.b$z.length;b$i++)this.b$z[b$i].skin=b$i<b$h?"looooooding/image_login_point3.png":b$h===b$i?"looooooding/image_login_point2.png":"looooooding/image_login_point1.png"},b$c.prototype.onOpened=function(){this.toProgress(.1,"\u6b63\u5728\u52a0\u8f7d\u8d44\u6e90...",1),this.toAllProgress(-1),Browser.window.toAllProgress=this.toAllProgress.bind(this),Browser.window.toProgress=this.toProgress.bind(this),this.versionTxt.text="\u8d44\u6e90\uff1a"+this.b$y.lastVersion+"      \u7248\u672c\uff1a"+this.b$y.wxVersion,this.showGetBtn()},b$c.prototype.close=function(b$c){this.resetWinFun(),Laya.timer.clear(this,this.toAllProgress),Laya.timer.clear(this,this.b$A),ServerLoading.instance.closeLoading(),this.getTipsBtn.off(Laya.Event.CLICK,this,this.b$B)},b$c.prototype.resetWinFun=function(){Browser.window.toAllProgress=function(){},Browser.window.toProgress=function(){}},b$c.prototype.destroy=function(b$c){void 0===b$c&&(b$c=!0),this.resetWinFun(),b$e.prototype.destroy.call(this,b$c)},b$c.prototype.showGetBtn=function(){this.b$y.showGetBtn&&1==this.b$y.showGetBtn&&(this.getTipsBtn.visible=!0,this.getTipsBtn.tag=!0,this.getTipsBtn.skin="looooooding/1.png",this.getTipsBtn.on(Laya.Event.CLICK,this,this.b$B),this.b$C(),this.b$D(!0))},b$c.prototype.b$B=function(){this.getTipsBtn.tag&&(this.getTipsBtn.tag=!1,this.getTipsBtn.skin="looooooding/2.png",this.b$E(),this.b$D(!1))},b$c.prototype.b$x=function(b$c){this.bgImg.skin=b$c.bgImgSkin,this.topImg.skin=b$c.topImgSkin,this.btmImg.skin=b$c.btmImgSkin,this.leftImg.skin=b$c.leftImgSkin,this.rightImg.skin=b$c.rightImgSkin,this.copyRightImg.bottom=b$c.copyRightImgBottom,this.processBox1.y=b$c.processBox1Y,this.processBox2.y=b$c.processBox2Y,this.loadingBarBg.skin=b$c.loadingBarBgSkin,this.loadingTips.fontSize=b$c.loadingTipsSize,this.getTipsBtn.visible=this.b$y.showGetBtn&&1==this.b$y.showGetBtn,this.getTipsBtn.visible?this.b$C():this.b$E(),this.b$D(this.getTipsBtn.visible)},b$c.prototype.b$C=function(){this.b$F||(this.b$F=b$f.create(this.getTipsBtn,"bbbtn",4,0,12),this.b$F.pos(161,106),this.b$F.scale(1.14,1.15)),b$f.play(this.b$F)},b$c.prototype.b$E=function(){this.b$F&&b$f.stop(this.b$F)},b$c.prototype.b$D=function(b$c){Laya.timer.clear(this,this.b$A),b$c?(this.b$G=9,this.txtGetTm.visible=!0,this.b$A(),Laya.timer.loop(1e3,this,this.b$A)):this.txtGetTm.visible=!1},b$c.prototype.b$A=function(){0<this.b$G?(this.txtGetTm.text="\u7acb\u5373\u9886\u53d6("+this.b$G+"s)",this.b$G--):(this.txtGetTm.text="",Laya.timer.clear(this,this.b$A),this.b$B())},b$c}(ui.b$d),b$d.LoadingPanel=b$e}(modules||(modules={})),function(b$c){var b$e,b$f,b$g,b$d;b$e=b$c.b$f||(b$c.b$f={}),b$f=Laya.List,b$g=Laya.Event,b$d=function(b$d){function b$c(){var b$c=b$d.call(this)||this;return b$c.b$H=0,b$c}return __extends(b$c,b$d),b$c.prototype.initialize=function(){b$d.prototype.initialize.call(this),ServerLoading.instance.preloadServer(),this.centerX=0,this.centerY=0,this.b$y=Browser.window.PF_INFO,this.b$I=new b$f,this.b$I.vScrollBarSkin="",this.b$I.itemRender=b$e.SelectLeftListItem,this.b$I.top=5,this.b$I.repeatX=1,this.b$I.spaceY=5,this.b$I.width=this.leftListBox.width,this.b$I.height=this.leftListBox.height-8,this.leftListBox.addChild(this.b$I),this.b$J=new b$f,this.b$J.vScrollBarSkin="",this.b$J.itemRender=b$e.SelectRightListItem,this.b$J.top=5,this.b$J.repeatX=1,this.b$J.spaceY=5,this.b$J.width=this.rightListBox.width,this.b$J.height=this.rightListBox.height-8,this.rightListBox.addChild(this.b$J);var b$c=this.b$y.loadingType;this.b$K=1==b$c?"#93353b":2==b$c?"#feffc0":3==b$c?"#feffc0":"#93353b",this.enterBtn.size(506,88),this.noticeBtn.visible=!1,Browser.window.initPanel=this,wxHideLoading(),this.addEvt(),this.onOpened()},b$c.prototype.addEvt=function(){this.bgImg.on(Laya.Event.CLICK,this,this.b$g),this.enterBtn.on(Laya.Event.CLICK,this,this.b$L),this.selectServer.on(Laya.Event.CLICK,this,this.b$M),this.selectServer.on(Laya.Event.CLICK,this,this.b$M),this.closeBg.on(Laya.Event.CLICK,this,this.b$N),this.noticeBtn.on(Laya.Event.CLICK,this,this.b$O),this.noticeClose.on(Laya.Event.CLICK,this,this.b$P),this.noticeContent.on(Laya.Event.MOUSE_DOWN,this,this.b$Q)},b$c.prototype.rmEvts=function(){this.bgImg.off(Laya.Event.CLICK,this,this.b$g),this.enterBtn.off(Laya.Event.CLICK,this,this.b$L),this.selectServer.off(Laya.Event.CLICK,this,this.b$M),this.selectServer.off(Laya.Event.CLICK,this,this.b$M),this.closeBg.off(Laya.Event.CLICK,this,this.b$N),this.noticeBtn.off(Laya.Event.CLICK,this,this.b$O),this.noticeClose.off(Laya.Event.CLICK,this,this.b$P),this.noticeContent.off(Laya.Event.MOUSE_DOWN,this,this.b$Q)},b$c.prototype.onOpened=function(){this.b$h=Date.now(),this.b$R=this.b$y.selectedServer.server_id,this.b$S(this.b$y.selectedServer),this.b$I.dataSource=this.b$y.groupList,this.b$M(),this.versionTxt.text="\u8d44\u6e90\uff1a"+this.b$y.lastVersion+"      \u7248\u672c\uff1a"+this.b$y.wxVersion,this.serverName.color=this.selServer.color=this.b$K},b$c.prototype.destroy=function(b$c){void 0===b$c&&(b$c=!0),this.rmEvts(),this.b$I&&(this.b$I.removeSelf(),this.b$I.destroy(),this.b$I=null),this.b$J&&(this.b$J.removeSelf(),this.b$J.destroy(),this.b$J=null),b$d.prototype.destroy.call(this,b$c)},b$c.prototype.b$g=function(){1e4<Date.now()-this.b$h&&(this.b$h-=2e3,ServerLoading.instance.enterDefaultServer())},b$c.prototype.b$N=function(){this.listBg.visible=!1},b$c.prototype.b$L=function(){this.b$T(this.b$y.selectedServer)&&(Browser.window.PF_INFO.selectedServer=this.b$y.selectedServer,req_server_check_ban(0,this.b$y.selectedServer.server_id))},b$c.prototype.b$O=function(){this.noticeBg.visible=!0,req_server_notice(this.b$y.selectedServer.server_id,this.b$U.bind(this))},b$c.prototype.b$P=function(){this.noticeBg.visible=!1},b$c.prototype.b$Q=function(){this.b$H=this.noticeContent.mouseY,Laya.stage.on(b$g.MOUSE_MOVE,this,this.b$V),Laya.stage.on(b$g.MOUSE_UP,this,this.b$W),Laya.stage.on(b$g.MOUSE_OUT,this,this.b$W)},b$c.prototype.b$V=function(){var b$c=this.b$H-this.noticeContent.mouseY;this.noticeContent.scrollY+=b$c,this.b$H=this.noticeContent.mouseY},b$c.prototype.b$W=function(){Laya.stage.off(b$g.MOUSE_MOVE,this,this.b$V),Laya.stage.off(b$g.MOUSE_UP,this,this.b$W),Laya.stage.off(b$g.MOUSE_OUT,this,this.b$W)},b$c.prototype.b$T=function(b$c){return-1==b$c.status?(alert("\u670d\u52a1\u5668\u7ef4\u62a4\u4e2d"),!1):0!=b$c.status||(alert("\u670d\u52a1\u5668\u5c1a\u672a\u5f00\u542f\uff0c\u656c\u8bf7\u671f\u5f85"),!1)},b$c.prototype.b$M=function(){this.b$y.hasGroupReq?this.listBg.visible=!0:(this.b$y.hasGroupReq=!0,req_server_group(0))},b$c.prototype.preload=function(){},b$c.prototype.getStatusSrc=function(b$c){var b$d="";return 2===b$c?b$d="llllogin/image_login_changtong.png":1===b$c?b$d="llllogin/image_login_fanmang.png":-1!==b$c&&0!==b$c||(b$d="llllogin/image_login_weihu.png"),b$d},b$c.prototype.b$S=function(b$c){this.serverName.text=-1===b$c.status?b$c.server_name+"(\u7ef4\u62a4\u4e2d)":0===b$c.status?b$c.server_name+"(\u5f85\u5f00\u670d)":b$c.server_name,this.serverName.color=-1===b$c.status?"#d50000":0===b$c.status?"#49575a":this.b$K,this.hotImage.skin=this.getStatusSrc(b$c.status),this.b$y.cdn=b$c.cdn||"",this.b$y.selectedServer=b$c,this.noticeBtn.visible=!0},b$c.prototype.b$X=function(b$c){this.showGroupList(b$c)},b$c.prototype.b$Y=function(b$c){this.b$S(b$c),this.listBg.visible=!1},b$c.prototype.b$U=function(b$c){this.noticeContent.text=b$c.data.content?b$c.data.content:"",this.noticeTitle.text=b$c.data.title?b$c.data.title:"\u6682\u65e0\u516c\u544a"},b$c.prototype.showGroupList=function(b$c){if(void 0===b$c&&(b$c=0),this.parent){var b$d=this.b$y.groupList;if(b$d&&0!==b$d.length){for(var b$e=b$d.length,b$f=0;b$f<b$e;b$f++)b$d[b$f].callBack=this.b$X.bind(this),b$d[b$f].select=b$f==b$c,b$d[b$f].index=b$f;var b$g=(this.b$I.array=b$d)[b$c].id;this.b$y.serverList[b$g]?this.showServerList(b$g):this.b$y.hasServerReq||(this.b$y.hasServerReq=!0,-1==b$g?req_server_owner(0):-2==b$g?req_recommend_server_list(0):req_server_list(0,b$g))}}},b$c.prototype.showServerList=function(b$c){if(this.parent&&this.b$y.serverList[b$c]){for(var b$d=this.b$y.serverList[b$c],b$e=b$d.length,b$f=0;b$f<b$e;b$f++)b$d[b$f].callBack=this.b$Y.bind(this);this.b$J.array=b$d}},b$c}(ui.b$e),b$e.SelectServerPanel=b$d}(modules||(modules={}));var modules,Browser=Laya.Browser,Font=Laya.Font,Input=Laya.Input,Render=Laya.Render,Handler=Laya.Handler,AuthorizationPanel=modules.b$f.AuthorizationPanel,LoadingPanel=modules.b$f.LoadingPanel,SelectServerPanel=modules.b$f.SelectServerPanel,ServerLoading=function(){function b$k(b$c){this.m_loadingRes=["looooooding/image_loding_bar0.png","looooooding/image_loding_bar02.png","looooooding/image_loding_bar1.png","looooooding/image_loding_bar2.png","looooooding/image_loding_bar3.png","looooooding/image_login_point1.png","looooooding/image_login_point2.png","looooooding/image_login_point3.png","bbbtn/0.png","bbbtn/1.png","bbbtn/2.png","bbbtn/3.png","bbbtn/4.png","looooooding/3.jpg","looooooding/12.jpg","looooooding/1.png","looooooding/2.png","looooooding/4.jpg","looooooding/6.jpg","looooooding/8.jpg","looooooding/10.jpg","looooooding/5.jpg","looooooding/7.jpg","looooooding/9.jpg","looooooding/11.jpg"],this.m_serverRes=["llllogin/btn_com_chuangback.png","llllogin/btn_login_gonggao.png","llllogin/btn_login_loginanniu.png","llllogin/btn_login_yingsi.png","llllogin/btn_xuanqu_anniuhuang.png","llllogin/btn_xuanqu_anniulan.png","llllogin/btn_xuanqu_quanniu.png","llllogin/image_com_tuichu.png","llllogin/image_login_changtong.png","llllogin/image_login_fanmang.png","llllogin/image_login_weihu.png","llllogin/image_login_xuanqubg.png","llllogin/2.jpg","llllogin/3.jpg","llllogin/4.jpg","llllogin/5.jpg","llllogin/6.jpg","llllogin/1.png","llllogin/8.png","llllogin/9.png"],this.m_isPrelodServer=!1,this.m_isPrelodLoading=!1,this.b$Z=!1,this.b$$="",b$k.instance=this,Laya.MiniAdpter.init(),Laya3D.init(0,0,!1,!1,!1),DecodeTools.init(),Laya.stage.scaleMode=Laya.Stage.SCALE_FIXED_WIDTH,Laya.stage.screenMode=Laya.Stage.SCREEN_NONE,Laya.stage.alignH=Laya.Stage.ALIGN_CENTER,Laya.stage.alignV=Laya.Stage.ALIGN_MIDDLE,Laya.stage.frameRate=Laya.Stage.FRAME_SLOW;var b$d=Laya.AtlasResourceManager;b$d.maxTextureCount=4,b$d.atlasTextureWidth=b$d.atlasTextureHeight=1024,b$d._enable(),Laya.URL.rootPath=Laya.URL.basePath="",Laya.Browser.window.addEventListener(Laya.Event.RESIZE,this.b$_.bind(this)),Laya.Loader.preLoadedMap["atlas333/create_role_atlas.atlas"]={frames:{"btn_chuangjue_kaishi.png":{frame:{h:88,idx:0,w:506,x:0,y:0},sourceSize:{h:88,w:506},spriteSourceSize:{x:0,y:0}},"btn_chuangjue_nan.png":{frame:{h:98,idx:0,w:108,x:335,y:89},sourceSize:{h:98,w:108},spriteSourceSize:{x:0,y:0}},"btn_chuangjue_nv.png":{frame:{h:98,idx:0,w:107,x:0,y:164},sourceSize:{h:98,w:107},spriteSourceSize:{x:0,y:0}},"image_chuangjue_mingbg.png":{frame:{h:74,idx:0,w:334,x:0,y:89},sourceSize:{h:74,w:334},spriteSourceSize:{x:0,y:0}},"image_chuangjue_suiji.png":{frame:{h:56,idx:0,w:52,x:444,y:89},sourceSize:{h:56,w:52},spriteSourceSize:{x:0,y:0}}},meta:{image:"create_role_atlas.png",prefix:"create_role_atlas/"}},Browser.window.resMgrLoad=b$k.instance.requestWeb,Browser.window.imgMgrLoad=b$k.instance.requestWeb,this.m_layer=new Laya.Component,this.m_layer.name="_wxLoadingLayer",Laya.stage.addChild(this.m_layer),this.b$_()}return b$k.prototype.changeServerLoading=function(b$c){b$k.instance.m_layer.visible=b$c},b$k.prototype.openAuthor=function(){b$k.instance.m_author||(b$k.instance.m_author=new AuthorizationPanel),b$k.instance.m_author.parent||b$k.instance.m_layer.addChild(b$k.instance.m_author),b$k.instance.b$a()},b$k.prototype.closeAuthor=function(){this.m_author&&this.m_author.parent&&(Laya.stage.removeChild(this.m_author),this.m_author.destroy(!0),this.m_author=null)},b$k.prototype.preloadServer=function(){this.m_isPrelodServer||(this.m_isPrelodServer=!0,Laya.loader.load(this.m_serverRes,Handler.create(this,function(){Browser.window.loadServerRes=!0,Browser.window.initMain(),Browser.window.enterToGame()})))},b$k.prototype.openServer=function(){for(var b$c=function(){b$k.instance.m_server||(b$k.instance.m_server=new SelectServerPanel),b$k.instance.m_server.parent||b$k.instance.m_layer.addChild(b$k.instance.m_server),b$k.instance.b$a()},b$d=!0,b$e=0,b$f=this.m_serverRes;b$e<b$f.length;b$e++){var b$g=b$f[b$e];if(null==Laya.Loader.getRes(b$g)){b$d=!1;break}}b$d?b$c():Laya.loader.load(this.m_serverRes,Handler.create(this,b$c))},b$k.prototype.closeServer=function(){this.m_server&&this.m_server.parent&&(Laya.stage.removeChild(this.m_server),this.m_server.destroy(!0),this.m_server=null)},b$k.prototype.preloadLoading=function(){this.m_isPrelodLoading||(this.m_isPrelodLoading=!0,Laya.loader.load(this.m_loadingRes,Handler.create(this,function(){Browser.window.loadLoadingRes=!0,Browser.window.initMain(),Browser.window.enterToGame()})))},b$k.prototype.openLoading=function(b$c){void 0===b$c&&(b$c=0),Laya.loader.load(this.m_loadingRes,Handler.create(this,function(){b$k.instance.m_loading||(b$k.instance.m_loading=new LoadingPanel(b$c)),b$k.instance.m_loading.parent||b$k.instance.m_layer.addChild(b$k.instance.m_loading),b$k.instance.b$a()}))},b$k.prototype.closeLoading=function(){this.m_loading&&this.m_loading.parent&&(Laya.stage.removeChild(this.m_loading),this.m_loading.destroy(!0),this.m_loading=null);for(var b$c=0,b$d=this.m_serverRes;b$c<b$d.length;b$c++){var b$e=b$d[b$c];Laya.Loader.clearCache(b$k.instance,b$e),Laya.Loader.clearRes(b$e,!0)}for(var b$f=0,b$g=this.m_loadingRes;b$f<b$g.length;b$f++){b$e=b$g[b$f];Laya.Loader.clearCache(b$k.instance,b$e),Laya.Loader.clearRes(b$e,!0)}this.m_layer.parent&&this.m_layer.parent.removeChild(this.m_layer)},b$k.prototype.setShowBtn=function(){this.m_loading&&this.m_loading.parent&&b$k.instance.m_loading.showGetBtn()},b$k.prototype.enterDefaultServer=function(){var b$c=Browser.window.PF_INFO.selectedServer;this.b$Z||-1==b$c.status||0==b$c.status||(this.b$Z=!0,Browser.window.PF_INFO.selectedServer=b$c,req_server_check_ban(0,b$c.server_id))},b$k.prototype.sendRecord=function(){var b$c="";b$c+="newRegister="+Browser.window.PF_INFO.newRegister,b$c+=", isPrelodServer="+this.m_isPrelodServer,b$c+=", SelectServerPanel="+(null!=b$k.instance.m_server),b$c+=", isPrelodLoading="+this.m_isPrelodLoading,b$c+=", LoadingPanel="+(null!=b$k.instance.m_loading),b$c+=", resMgrLoad="+(Browser.window.resMgrLoad==b$k.instance.requestWeb),b$c+=", imgMgrLoad="+(Browser.window.imgMgrLoad==b$k.instance.requestWeb),b$c+=", errUrls="+b$k.instance.b$$;for(var b$d=0,b$e=this.m_serverRes;b$d<b$e.length;b$d++){b$c+=", "+(b$h=b$e[b$d])+"="+(null!=Laya.Loader.getRes(b$h))}for(var b$f=0,b$g=this.m_loadingRes;b$f<b$g.length;b$f++){var b$h;b$c+=", "+(b$h=b$g[b$f])+"="+(null!=Laya.Loader.getRes(b$h))}var b$i=Browser.window.PF_INFO.selectedServer;b$i&&(b$c+=", server_status="+b$i.status,b$c+=", server_id="+b$i.server_id,b$c+=", server_name="+b$i.server_name);var b$j=JSON.stringify({error:"\u521d\u59cb\u754c\u9762\u8d85\u8fc710\u79d2",stack:b$c});console.error(b$j),this.b$b&&this.b$b==b$c||(this.b$b=b$c,reqRecordError(b$j))},b$k.prototype.b$cc=function(){var b$c=Laya.stage,b$d=Math.floor(b$c.width),b$e=Math.floor(b$c.height);b$e/b$d<1.7777778?(this.viewW=Math.floor(b$d/(b$e/1280)),this.viewH=1280,this.viewS=b$e/1280):(this.viewW=720,this.viewH=Math.floor(b$e/(b$d/720)),this.viewS=b$d/720);var b$f=Math.floor(b$c.width),b$g=Math.floor(b$c.height);b$g/b$f<1.7777778?(this.viewW=Math.floor(b$f/(b$g/1280)),this.viewH=1280,this.viewS=b$g/1280):(this.viewW=720,this.viewH=Math.floor(b$g/(b$f/720)),this.viewS=b$f/720),this.b$a()},b$k.prototype.b$a=function(){this.m_layer&&(this.m_layer.size(this.viewW,this.viewH),this.m_layer.scale(this.viewS,this.viewS,!0))},b$k.prototype.b$_=function(){if(Input.isInputting&&Browser.onMobile){var b$c=parseInt(Input.inputContainer.style.top.replace("px","")),b$d=parseInt(Input.inputElement.style.height.replace("px",""))*this.viewS,b$e=Browser.clientWidth/Render.canvas.width;return 0<(b$c=Browser.clientHeight-b$d*b$e-b$c)&&(b$c=0),void(Browser.container.style.top=b$c+"px")}Browser.container.style.top="0px";var b$f=Math.floor(Browser.width),b$g=Math.floor(Browser.height);b$f=b$f+1&2147483646,b$g=b$g+1&2147483646;var b$h=Laya.stage;3==ENV?(b$h.scaleMode=Laya.Stage.SCALE_NOSCALE,b$h.width=b$f,b$h.height=b$g):b$g<b$f?(b$h.scaleMode=Laya.Stage.SCALE_NOSCALE,b$h.width=b$f,b$h.height=b$g):(b$h.scaleMode=Laya.Stage.SCALE_FIXED_WIDTH,b$h.width=840,b$h.height=Math.floor(b$g/(b$f/840))+1&2147483646),this.b$cc()},b$k.prototype.requestWeb=function(b$c,b$d){function b$e(){b$f.onload=null,b$f.onerror=null}var b$f,b$g=b$c;(b$f=new Browser.window.Image).onload=function(){b$e(),b$d(b$g,200,b$f)},b$f.onerror=function(){console.warn("[warn] WX loadImage onerror:",b$g),b$k.instance.b$$+=b$g+"|",b$e(),b$d(b$g,404,null)},b$f.src=b$g,-1==b$k.instance.m_serverRes.indexOf(b$g)&&-1==b$k.instance.m_loadingRes.indexOf(b$g)||Laya.Loader.keepCache(b$k.instance,b$g)},b$k.prototype.b$dc=function(b$c,b$d){return-1!=b$c.indexOf(b$d,b$c.length-b$d.length)},b$k}();!function(b$c){var b$d,b$e;b$d=b$c.b$f||(b$c.b$f={}),b$e=function(b$d){function b$c(){var b$c=b$d.call(this)||this;return b$c.width=192,b$c.height=70,b$c.b$ec=new Laya.Image,b$c.addChild(b$c.b$ec),b$c.b$fc=new Laya.Label,b$c.b$fc.fontSize=30,b$c.b$fc.color=b$c.b$K,b$c.addChild(b$c.b$fc),b$c.b$fc.centerX=0,b$c.b$fc.centerY=0,b$c}return __extends(b$c,b$d),b$c.prototype.initialize=function(){b$d.prototype.initialize.call(this),this.b$y=Browser.window.PF_INFO;var b$c=this.b$y.loadingType;this.b$K=1==b$c?"#263d7d":2==b$c?"#263d7d":3==b$c?"#763042":"#263d7d",this.addEvt()},Object.defineProperty(b$c.prototype,"dataSource",{set:function(b$c){b$c&&this.setData(b$c)},enumerable:!0,configurable:!0}),b$c.prototype.setData=function(b$c){this.b$gc=b$c,this.b$fc.text=b$c.name,this.b$ec.skin=b$c.select?"llllogin/btn_xuanqu_anniuhuang.png":"llllogin/btn_xuanqu_anniulan.png"},b$c.prototype.destroy=function(b$c){void 0===b$c&&(b$c=!0),this.rmEvts(),b$d.prototype.destroy.call(this,b$c)},b$c.prototype.addEvt=function(){this.on(Laya.Event.MOUSE_UP,this,this.clkHdler)},b$c.prototype.rmEvts=function(){this.off(Laya.Event.MOUSE_UP,this,this.clkHdler)},b$c.prototype.clkHdler=function(){this.b$gc&&this.b$gc.callBack&&this.b$gc.callBack(this.b$gc.index)},b$c}(Laya.View),b$d.SelectLeftListItem=b$e}(modules||(modules={})),function(b$c){var b$d,b$e;b$d=b$c.b$f||(b$c.b$f={}),b$e=function(b$d){function b$c(){var b$c=b$d.call(this)||this;return b$c.b$ec=new Laya.Image("llllogin/btn_xuanqu_quanniu.png"),b$c.b$fc=new Laya.Label,b$c.b$fc.fontSize=30,b$c.b$fc.color=b$c.b$K,b$c.addChild(b$c.b$ec),b$c.b$hc=new Laya.Image,b$c.addChild(b$c.b$hc),b$c.width=358,b$c.height=70,b$c.addChild(b$c.b$fc),b$c.b$hc.centerY=0,b$c.b$hc.x=18,b$c.b$fc.x=80,b$c.b$fc.centerY=0,b$c.b$ec.graphics.drawRect(0,0,b$c.width,b$c.height,"#00sasd"),b$c}return __extends(b$c,b$d),b$c.prototype.initialize=function(){b$d.prototype.initialize.call(this),this.b$y=Browser.window.PF_INFO;var b$c=this.b$y.loadingType;this.b$K=1==b$c?"#34267d":2==b$c?"#34267d":3==b$c?"#763042":"#34267d",this.addEvt()},Object.defineProperty(b$c.prototype,"dataSource",{set:function(b$c){b$c&&this.setData(b$c)},enumerable:!0,configurable:!0}),b$c.prototype.setData=function(b$c){this.b$gc=b$c,this.b$fc.color=-1===b$c.status?"#d50000":0===b$c.status?"#49575a":this.b$K,this.b$fc.text=-1===b$c.status?b$c.server_name+"(\u7ef4\u62a4\u4e2d)":0===b$c.status?b$c.server_name+"(\u5f85\u5f00\u670d)":b$c.server_name,this.b$hc.skin=this.getStatusSrc(b$c.status)},b$c.prototype.destroy=function(b$c){void 0===b$c&&(b$c=!0),this.rmEvts(),b$d.prototype.destroy.call(this,b$c)},b$c.prototype.addEvt=function(){this.on(Laya.Event.MOUSE_UP,this,this.clkHdler)},b$c.prototype.rmEvts=function(){this.off(Laya.Event.MOUSE_UP,this,this.clkHdler)},b$c.prototype.clkHdler=function(){this.b$gc&&this.b$gc.callBack&&this.b$gc.callBack(this.b$gc)},b$c.prototype.getStatusSrc=function(b$c){var b$d="";return 2===b$c?b$d="llllogin/image_login_changtong.png":1===b$c?b$d="llllogin/image_login_fanmang.png":-1!==b$c&&0!==b$c||(b$d="llllogin/image_login_weihu.png"),b$d},b$c}(Laya.View),b$d.SelectRightListItem=b$e}(modules||(modules={})),window.ServerLoading=ServerLoading;