///<reference path="./WeChatUI.ts"/>
///<reference path="./Config.ts"/>
// import Label = Laya.Label;  actor.ts
// import Handler = Laya.Handler;
// import Loader = Laya.Loader;
// import WebGL = Laya.WebGL;

const pack:string="8891";
var cdn:string="https://h5test.s1.l2i.cc/wx";
const tsCdn:string="https://h5test.s1.l2i.cc/wx";
const devCdn:string="https://h5test.s1.l2i.cc/wx";

//:WeChatUI.UserData;

module WeChatUI {
	import Event = Laya.Event;
//class Login extends ui.LoginViewUI {

	export class Login extends WeChatUI.LoginViewUI {

		private serverGroupArr:string;			///服务器分组数组
		private serverArr:Array<Array<ServerInfo>>;			///服务器数组

		private noticeData:Array<WeChatUI.NoticeData>;		//公告数据
		private noticTitles:string;							//公告标题

		private sdkLoginNumber:number=3;					//sdk登录次数
		private gameLoginNumber:number=3					//游戏服登录次数

		constructor() {
			super();
			this.init();
			this.onEven();
		}
	
		private init():void{
			this.sdkLoginNumber=3;
			this.gameLoginNumber=3;
			this.prompt.visible=false;
			this.centerY=0;
			this.verText.text=`游戏版本：${gameVersion}`;
			

			
			QCSDK.init({game_ver:gameVersion},(data:{develop:number}):void=>{
				if(data.develop==1){			//当develop为1的时候说明当前game_ver是提审版本
					cdn=tsCdn;
				}else{
					cdn=devCdn;
				}
				console.log("kkk sdk初始化完成  调起sdk登录");
				QCSDK.login(this.sdkLoginBack.bind(this));
				// QCSDK.login(function(){
				// 	console.log("kkk sdk初始化完成  66666");
				// });
			});

			//return;

			this.serverPanel.vScrollBar.visible=false;
			this.noticePanel.vScrollBar.visible=false;
			let a:any=this.serverList;
			a._scrollBar.visible=false;

			//this.upSelectedServer();

			this.serverGroup.selectHandler = Laya.Handler.create(this,this.choose,null,false);

			this.serverList.renderHandler = Laya.Handler.create(this,this.onListRender,null,false);
			this.serverList.selectHandler = Laya.Handler.create(this,this.chooseServer,null,false);
			this.serverList.selectEnable=true;


			this.noticeContent.color=this.nonageContent.color="#666699";
			this.noticeContent.style.fontSize=this.nonageContent.style.fontSize=22;
			this.noticeContent.style.fontFamily=this.nonageContent.style.fontFamily="SimHei";
			this.noticeContent.style.lineHeight=this.nonageContent.style.lineHeight=26;

			this.nonageContent.innerHTML=NONAGE_TEXT;

			this.nonageTitle.text="适龄提示";

			this.noticeTab.selectHandler = Laya.Handler.create(this,this.chooseNotice,null,false);

			//this.getNotice();
		}


		/** sdk登录回调 */
		private sdkLoginBack(status:number,data:{userid:string,account:string,token:string}):void{
			console.log("kkk sdk 登录返回："+status);
			if(status==0){

				var j = {};
				j["partner_id"] = 4;
				j["game_pkg"] = "lmfbs1_mhdlxyx_M";
				j["platform"] = "minGame";
				j["user_id"] = data.userid;
				j["token"] = data.token;

				let str:string = encodeURIComponent(JSON.stringify(j));
				let http = new Laya.HttpRequest();
				http.send(Config.backstage_url+"game/login/"+pack+"/" + str, null, "get")
				http.once(Laya.Event.COMPLETE, this, this.loginCallBack.bind(this)); //数据传输完成后，会返回一个data

			}else{
				this.sdkLoginNumber--;
				if(this.sdkLoginNumber>0){
					QCSDK.login(this.sdkLoginBack.bind(this));
				}else{
					this.prompt.text="SDK 登陆失败，CODE:"+status;
					this.prompt.visible=true;
				}
			}
		}

		/** 游戏服登录回调 */
		private loginCallBack(data:any):void{
			data=JSON.parse(data);
			if (!data){
				this.gameLoginNumber--;
				if(this.gameLoginNumber>0){
					QCSDK.login(this.sdkLoginBack.bind(this));
				}else{
					this.prompt.text="游戏服登陆失败，返回数据为空";
					this.prompt.visible=true;
				}
				return;
			}
			 
			if (data.errCode === 200) {
				let JiaData:UserData = new UserData();
				var data = data.data;
				var server = data.s;
				JiaData.account = data.user.openId;
				JiaData.uid = data.user.openId;
				JiaData.channel = data.channel;
				JiaData.package = data.package;
				JiaData.mac = '';
				if(!data.cdn||data.cdn==""){
					JiaData.cdn = cdn;
				}else{
					JiaData.cdn = data.cdn;
				}
				
				JiaData.rvtype = 0;
				JiaData.newregister = data.newregister;
				JiaData.sign = data.sign;
				var serverSelect = {
					'server_id': server.server_id,
					'name' : server.name,
					'server_num' : parseInt(server.server_num),
					'channel_num' : parseInt(server.channel_num),
					'server_addr' : server.server_addr,
					'server_port' : parseInt(server.server_port),
					'status' : parseInt(server.status),
					'tick' : parseInt(server.tick),
					'sign' : server.sign,
					'package' : parseInt(data.package),
					'cdn' : ''
				};
				JiaData.selected_server = serverSelect;
				userData=JiaData;

				console.log("kk",userData);
				if(userData.newregister==1){		//新用户直接走登录流程，不进行选服
					this.login();
				}else{
					this.upSelectedServer();
					this.serverName.visible=this.serverBtn.visible=this.stateImg.visible=this.huanqu.visible=this.notice.visible=this.nonage.visible=this.loginBtn.visible=true;
					this.getNotice();
				}

			}else{
				this.gameLoginNumber--;
				if(this.gameLoginNumber>0){
					QCSDK.login(this.sdkLoginBack.bind(this));
				}else{
					this.prompt.text="游戏服登陆失败，CODE:"+data.errCode;
					this.prompt.visible=true;
				}
				return;
			}
		}

		private onEven() :void{
			
			this.serverBtn.on(Event.CLICK, this, this.openDialog,[0]);
			this.closeSever.on(Event.CLICK, this, this.closeDialog,[0]);
			this.serverBG.on(Event.CLICK, this, this.closeDialog,[0]);

			this.nonage.on(Event.CLICK, this, this.openDialog,[1]);
			this.closeNonage.on(Event.CLICK, this, this.closeDialog,[1]);
			this.nonageBG.on(Event.CLICK, this, this.closeDialog,[1]);

			this.notice.on(Event.CLICK, this, this.openDialog,[2]);
			this.closeNotice.on(Event.CLICK, this, this.closeDialog,[2]);
			this.noticeBG.on(Event.CLICK, this, this.closeDialog,[2]);

			this.loginBtn.on(Event.CLICK, this, this.login);
		}


		private openDialog(type:number):void{
			if(type==0){//打开服务器列表对话框												
				this.serverPanel.visible=false;
				this.serverList.visible=false;
				this.serverBox.visible=true;
				this.req_server_list();
			}else if(type==1){//打开适龄对话框
				this.nonageBox.visible=true;
			}else if(type==2){//打开公告对话框
				this.openNotice(0);
			}
		}

		private closeDialog(type:number):void{
			if(type==0){
				this.serverBox.visible=false;
			}else if(type==1){
				this.nonageBox.visible=false;
			}else if(type==2){
				this.noticeBox.visible=false;

			}
		}

		private login():void{
			var loading: Loading = new Loading();
			Laya.stage.addChild(loading);
			this.destroy();
		}

		/** 选择服务器分组回调 */
		private choose(index:number):void{
			this.serverList.array = this.serverArr[index];
		}

		/** 选择服务器分组回调 */
		private chooseServer(index:number):void{
			userData.selected_server=this.serverArr[this.serverGroup.selectedIndex][index];
			this.upSelectedServer();
			this.serverBox.visible=false;
		}

		/** 服务器列表渲染 */
		private onListRender(item: Laya.Button, index: number): void {
			//自定义list的渲染方式
			let label: Laya.Label = item.getChildByName("itemServerName") as Laya.Label;
			let img: Laya.Image = item.getChildByName("itemServerState") as Laya.Image;
			
			let serverInfo:ServerInfo=this.serverArr[this.serverGroup.selectedIndex][index];

			label.text=serverInfo.name;

			if (serverInfo.status === 2) {
				img.skin = "login/image_xfy_ct.png";
			}else if (serverInfo.status === 1) {
				img.skin = "login/image_xfy_fm.png";
			}else if (serverInfo.status === -1) {
				img.skin = "login/image_xfy_wh.png";
			}
		}

		/** 请求服务器列表 */
		private req_server_list():void{

			let str:string = base64_encode("game/allServer/" + userData.channel + "/" + userData.package + "/" + userData.account + "/" + userData.rvtype + "/" + userData.sign);
			let hppt = new Laya.HttpRequest();
			hppt.send(Config.backstage_url + str, null, "get");
			hppt.once(Laya.Event.COMPLETE, this, this.serverListBack); //数据传输完成后，会返回一个data
			
		}

		/** 请求服务器列表回调 */
		private serverListBack(data:any):void{
			data=JSON.parse(data);
			if(!data.errCode){
				return;
			}
			for(let i:number=0;i<data.z.length;i++){
				if(i!=0){
					this.serverGroupArr=`${this.serverGroupArr},${data.z[i]}`;
				}else{
					this.serverGroupArr=`${data.z[i]}`;
				}
			}
			this.serverArr=data.s;

			this.serverGroup.labels=this.serverGroupArr;
			
			this.serverGroup.selectedIndex=0;

			//给list赋值更改list的显示
			this.serverList.array = this.serverArr[0];

			this.serverPanel.visible=true;
			this.serverList.visible=true;
		}

		/** 更新选择的服务器 */
		private upSelectedServer():void{
			this.serverName.text=userData.selected_server.name;
			if (userData.selected_server.status === 2) {
				this.stateImg.skin = "login/image_xfy_ct.png";
			}else if (userData.selected_server.status === 1) {
				this.stateImg.skin = "login/image_xfy_fm.png";
			}else if (userData.selected_server.status === -1) {
				this.stateImg.skin = "login/image_xfy_wh.png";
			}

		}


		/** 获取游戏公告 */
		private getNotice():void{

			let data={
				groupId:GROUP_ID				
			}
			let hppt = new Laya.HttpRequest();
			hppt.send(Config.notice_url , data, "post");
			hppt.once(Laya.Event.COMPLETE, this, this.noticeBack); //数据传输完成后，会返回一个data

		}

		/** 获取游戏公告回调 */
		private noticeBack(data:any):void{
			data=JSON.parse(data);
			if(data.code!=0){
				this.noticeData=[{title: '公告', contents: '暂无公告',version:0}];
				return;
			}
			this.noticeData=data.data;
			// this.noticeData.push({title: '公告1', contents: '暂无公告1',version:2});
			// this.noticeData.push({title: '公告2', contents: '暂无公告2',version:2});
			if(this.noticeData.length==0){
				this.noticeData=[{title: '公告', contents: '暂无公告',version:0}];
				return;
			}

			let openIndex:number=-1;

			
			for(let i:number=0;i<this.noticeData.length;i++){
				if(i==3){
					break;
				}
				if(i==0){
					this.noticTitles=this.noticeData[i].title;
				}else{
					this.noticTitles=`${this.noticTitles},${this.noticeData[i].title}`;
				}
				let ver=Number(localStorage.getItem("NoticeVersion"+i));   //获取数据
				if(ver==undefined){
					ver=-1;
				}
				if(openIndex==-1&&ver<this.noticeData[i].version){
					openIndex=i;
				}
			}
			

			if(userData.newregister!=1&&openIndex!=-1){				//新用户不自动弹出公告
				this.openNotice(openIndex);
				localStorage.setItem("NoticeVersion"+openIndex,this.noticeData[openIndex].version+"");
			}


		}


		/** 选择公告回调 */
		private chooseNotice(index:number):void{
			this.noticeContent.innerHTML=this.htmlDecodeByRegExp(this.noticeData[index].contents);
			this.noticeTitle.text=this.noticeData[index].title;
		}

		/** 打开公告 */
		private openNotice(index:number):void{
			this.noticeBox.visible=true;
			if(this.noticeData.length<2){
				this.noticeTab.visible=false;
			}else{
				this.noticeTab.labels=this.noticTitles;
				this.noticeTab.visible=true;
				this.noticeTab.selectedIndex=index;

				if(this.noticeData.length==2){
					this.noticeTab.skin="login/noticeBtn2.png";
				}else{
					this.noticeTab.skin="login/noticeBtn3.png";
				}
			
			}
			this.noticeContent.innerHTML=this.htmlDecodeByRegExp(this.noticeData[index].contents);
			this.noticeTitle.text=this.noticeData[index].title;
		}


		/** 去除转义 */
		private htmlDecodeByRegExp(str:string):string{  
			let temp = "";
			if(str.length == 0) return "";
			temp = str.replace(/&amp;/g,"&");
			temp = temp.replace(/&lt;/g,"<");
			temp = temp.replace(/&gt;/g,">");
			temp = temp.replace(/&nbsp;/g," ");
			temp = temp.replace(/&#39;/g,"\'");
			temp = temp.replace(/&quot;/g,"\"");
			temp = temp.replace(/&mdash;/g,"——");
			return temp;  
		}


		public destroy(): void {
			this.closeSever.off(Event.CLICK, this, this.closeDialog);
			this.serverBG.off(Event.CLICK, this, this.closeDialog);
			this.closeNonage.off(Event.CLICK, this, this.closeDialog);
			this.nonageBG.off(Event.CLICK, this, this.closeDialog);
			this.closeNotice.off(Event.CLICK, this, this.closeDialog);
			this.noticeBG.off(Event.CLICK, this, this.closeDialog);

			this.serverBtn.off(Event.CLICK, this, this.openDialog);
			this.nonage.off(Event.CLICK, this, this.openDialog);
			this.notice.off(Event.CLICK, this, this.openDialog);

			this.loginBtn.off(Event.CLICK, this, this.login);

			this.serverGroup.selectHandler.clear();
			this.serverGroup.selectHandler=null;

			this.serverList.renderHandler.clear();
			this.serverList.renderHandler=null;

			this.serverList.selectHandler.clear();
			this.serverList.selectHandler=null;

			this.noticeTab.selectHandler.clear();
			this.noticeTab.selectHandler=null;
			
			super.destroy(true);
		}
	

	
	}


	function beginLoad(){
		//DEBUG=false;
		Laya.loader.load("res/atlas/login.atlas", Laya.Handler.create(null, onLoadedComplete));
	}
	
	function onLoadedComplete(): void {
		//实例UI界面
		var login: Login = new Login();
		Laya.stage.addChild(login);
	}

	
	//初始化微信小游戏
	Laya.MiniAdpter.init();
	//程序入口
	Laya.init(720, 1280, Laya.WebGL);
	Laya.stage.scaleMode=laya.display.Stage.SCALE_FIXED_AUTO;
	Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
	Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
	Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
	//激活资源版本控制
	//Laya.ResourceVersion.enable("version.json", Laya.Handler.create(null, beginLoad), Laya.ResourceVersion.FILENAME_VERSION);

	beginLoad();



	//account_login();


}


