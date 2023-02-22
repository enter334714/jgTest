
module WeChatUI {
    import View=laya.ui.View;

    export class LoadingViewUI extends View {
		public bgImg:Laya.Image;
		public proDiv:Laya.Box;
		public progressBg1:Laya.Image;
		public progressBg2:Laya.Image;
		public progressBar1:Laya.Image;
		public progressBar2:Laya.Image;
		public proLabel:laya.display.Text;
		public proLabel1:laya.display.Text;
		public proLabel2:laya.display.Text;
		public txt1:laya.display.Text;
		public txt2:laya.display.Text;
		public verTxt:laya.display.Text;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280,"centerX":0},"child":[{"type":"Image","props":{"y":-140,"x":-120,"var":"bgImg","skin":"login/loading_bj.jpg"}},{"type":"Box","props":{"y":1040,"x":0,"width":720,"var":"proDiv","name":"proDiv","height":240},"child":[{"type":"Image","props":{"y":-37,"x":107,"width":506,"var":"progressBg1","skin":"login/progress_jz_jdt1_0.png","height":26}},{"type":"Image","props":{"y":5,"x":107,"width":506,"var":"progressBg2","skin":"login/progress_jz_jdt1_0.png","height":26}},{"type":"Image","props":{"y":-31,"x":121,"width":478,"var":"progressBar1","skin":"login/progress_jz_jdt_1.png","height":14}},{"type":"Image","props":{"y":11,"x":121,"width":478,"var":"progressBar2","skin":"login/progress_jz_jdt_1.png","height":14}},{"type":"Text","props":{"y":-75,"x":0,"width":720,"var":"proLabel","text":"正在进入场景......","strokeColor":"#ffffff","stroke":2,"fontSize":24,"font":"SimHei","color":"#581a1a","align":"center"}},{"type":"Text","props":{"y":-36,"x":0,"width":720,"var":"proLabel1","text":"10/100%","strokeColor":"#581A1A","stroke":3,"fontSize":24,"font":"SimHei","color":"#FFFFFF","align":"center"}},{"type":"Text","props":{"y":6,"x":0,"width":720,"var":"proLabel2","text":"10/100%","strokeColor":"#581A1A","stroke":3,"fontSize":24,"font":"SimHei","color":"#FFFFFF","align":"center"}},{"type":"Text","props":{"y":51,"x":0,"width":720,"text":"首次加载耗时较长，再等等就好了哦~","strokeColor":"#000000","stroke":2,"fontSize":24,"font":"SimHei","color":"#8cff9f","align":"center"}},{"type":"Text","props":{"y":94,"x":0,"width":720,"text":"抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。","strokeColor":"#021224","stroke":2,"fontSize":20,"font":"SimHei","color":"#FFFFFF","align":"center"}},{"type":"Text","props":{"y":125,"x":0,"width":720,"text":"适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。","strokeColor":"#021224","stroke":2,"fontSize":20,"font":"SimHei","color":"#FFFFFF","align":"center"}},{"type":"Text","props":{"y":165,"x":0,"width":720,"var":"txt1","text":"审批文号：新广出审[2018]453号，著作权人：成都贪玩蛇科技有限公司，","strokeColor":"#021224","stroke":2,"fontSize":18,"font":"SimHei","color":"#FFFFFF","align":"center"}},{"type":"Text","props":{"y":195,"x":0,"width":720,"var":"txt2","text":"出版单位：北京畅元国讯科技有限公司，出版物号：ISBN 978-7-498-03918","strokeColor":"#021224","stroke":2,"fontSize":18,"font":"SimHei","color":"#FFFFFF","align":"center"}},{"type":"Text","props":{"y":222,"x":0,"width":720,"var":"verTxt","text":"游戏版本：","strokeColor":"#021224","stroke":2,"fontSize":18,"font":"SimHei","color":"#FFFFFF","align":"center"}}]}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);

            super.createChildren();
            this.createView(WeChatUI.LoadingViewUI.uiView);

        }

    }


    export class LoginViewUI extends View {
		public serverBtn:Laya.Image;
		public loginBtn:Laya.Button;
		public stateImg:Laya.Image;
		public notice:Laya.Image;
		public serverName:Laya.Label;
		public huanqu:Laya.Label;
		public verText:laya.display.Text;
		public prompt:Laya.Label;
		public serverBox:Laya.Box;
		public serverBG:Laya.Image;
		public closeSever:Laya.Image;
		public serverPanel:Laya.Panel;
		public serverGroup:Laya.Tab;
		public serverList:Laya.List;
		public serverItem:Laya.Button;
		public itemServerName:Laya.Label;
		public itemServerState:Laya.Image;
		public noticeBox:Laya.Box;
		public noticeBG:Laya.Image;
		public closeNotice:Laya.Image;
		public noticeTab:Laya.Tab;
		public noticeTitle:Laya.Label;
		public noticePanel:Laya.Panel;
		public noticeContent:laya.html.dom.HTMLDivElement;
		public nonageBox:Laya.Box;
		public nonageBG:Laya.Image;
		public closeNonage:Laya.Image;
		public nonageTitle:Laya.Label;
		public nonageContent:laya.html.dom.HTMLDivElement;
		public nonage:Laya.Image;

        public static  uiView:any ={"type":"View","props":{"width":720,"height":1280,"centerX":0},"child":[{"type":"Image","props":{"y":-140,"x":-120,"skin":"login/image_xfy_bg2.jpg"}},{"type":"Image","props":{"y":913,"x":124,"var":"serverBtn","skin":"login/btn_xfy_xq.png"}},{"type":"Button","props":{"y":1000,"x":188,"var":"loginBtn","stateNum":1,"skin":"login/btn_xfy_dlyx.png"}},{"type":"Image","props":{"y":925,"x":155,"var":"stateImg","skin":"login/image_xfy_ct.png"}},{"type":"Image","props":{"y":49,"x":541,"var":"notice","skin":"login/bth_gonggao.png"}},{"type":"Label","props":{"y":1126,"x":0,"wordWrap":true,"width":720,"text":"抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。","strokeColor":"#021224","stroke":2,"leading":6,"height":22,"fontSize":22,"font":"SimHei","color":"#FFFFFF","align":"center"}},{"type":"Label","props":{"y":926,"x":210,"width":300,"var":"serverName","fontSize":30,"font":"SimHei","color":"#51628D","align":"center"}},{"type":"Label","props":{"y":926,"x":496,"width":100,"var":"huanqu","valign":"middle","text":"换区>","height":30,"fontSize":30,"font":"SimHei","color":"#51628D","align":"center"}},{"type":"Label","props":{"y":1200,"x":0,"wordWrap":true,"width":720,"text":"著作权人：镇江微端网络科技有限公司 出版单位：上海都玩网络科技有限公司","strokeColor":"#021224","stroke":2,"fontSize":16,"font":"SimHei","color":"#FFFFFF","align":"center"}},{"type":"Label","props":{"y":1230,"x":0,"wordWrap":true,"width":720,"text":"审批文号：新广出审【2016】2609号 出版物号：ISBN ：ISBN 978-7-7979-1212-9","strokeColor":"#021224","stroke":2,"fontSize":16,"font":"SimHei","color":"#FFFFFF","align":"center"}},{"type":"Label","props":{"y":1156,"x":0,"wordWrap":true,"width":720,"text":"适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。","strokeColor":"#021224","stroke":2,"leading":6,"height":22,"fontSize":22,"font":"SimHei","color":"#FFFFFF","align":"center"}},{"type":"Text","props":{"y":1260,"x":10,"width":720,"var":"verText","text":"游戏版本：","strokeColor":"#021224","stroke":2,"fontSize":18,"font":"SimHei","color":"#FFFFFF","align":"center"}},{"type":"Label","props":{"y":727,"x":0,"wordWrap":true,"width":720,"visible":false,"var":"prompt","text":"当前服务器正在维护中","strokeColor":"#021224","stroke":2,"leading":6,"height":36,"fontSize":36,"font":"SimHei","color":"#ff3333","align":"center"}},{"type":"Box","props":{"y":-140,"x":-120,"width":960,"visible":false,"var":"serverBox","height":1560},"child":[{"type":"Image","props":{"y":0,"x":0,"width":960,"var":"serverBG","skin":"login/image_common_zz.png","sizeGrid":"1,1,1,1","height":1560,"alpha":0.7}},{"type":"Image","props":{"y":290,"x":142,"skin":"login/image_xfy_xfbg.png","mouseThrough":false,"mouseEnabled":true}},{"type":"Image","props":{"y":322,"x":763,"var":"closeSever","stateNum":1,"skin":"login/btn_tongyong_13.png"}},{"type":"Panel","props":{"y":430,"x":198,"width":182,"var":"serverPanel","vScrollBarSkin":"login/image_common_zz.png","height":695},"child":[{"type":"Tab","props":{"y":0,"x":0,"var":"serverGroup","strokeColors":"#666699,#ffffff","stateNum":2,"skin":"login/serverGroup.png","selectedIndex":0,"labelStroke":2,"labelSize":26,"labelFont":"SimHei","labelColors":"#ffffff,#996633","direction":"vertical"}}]},{"type":"List","props":{"y":429,"x":398,"width":352,"var":"serverList","vScrollBarSkin":"login/image_common_zz.png","repeatX":1,"height":692},"child":[{"type":"Button","props":{"y":0,"x":0,"var":"serverItem","stateNum":1,"skin":"login/btn_xfy_fwq.png","renderType":"render"},"child":[{"type":"Label","props":{"y":19,"x":0,"wordWrap":true,"width":352,"var":"itemServerName","text":"已有角色","name":"itemServerName","height":22,"fontSize":22,"font":"SimHei","color":"#564674","align":"center"}},{"type":"Image","props":{"y":12,"x":21,"var":"itemServerState","skin":"login/image_xfy_ct.png","name":"itemServerState"}}]}]},{"type":"Label","props":{"y":717,"x":120,"wordWrap":true,"width":720,"visible":false,"text":"当前服务器正在维护中","strokeColor":"#021224","stroke":2,"leading":6,"height":36,"fontSize":36,"font":"SimHei","color":"#ff3333","align":"center"}},{"type":"Label","props":{"y":1202,"x":382,"width":196,"text":"点击空白处退出","name":"ExitPromptText","height":28,"fontSize":28,"font":"SimHei","color":"#CACACA"}}]},{"type":"Box","props":{"y":0,"x":0,"width":720,"visible":false,"var":"noticeBox","height":1280},"child":[{"type":"Image","props":{"y":-140,"x":-120,"width":960,"var":"noticeBG","skin":"login/image_common_zz.png","sizeGrid":"1,1,1,1","height":1560,"alpha":0.7}},{"type":"Image","props":{"y":182,"x":25,"skin":"login/image_xfy_gg.png","mouseThrough":false,"mouseEnabled":true}},{"type":"Image","props":{"y":213,"x":645,"var":"closeNotice","stateNum":1,"skin":"login/btn_tongyong_13.png"}},{"type":"Tab","props":{"y":976,"x":60,"var":"noticeTab","strokeColors":"#9e4c65,#ffffff,#fffff,#9e4c65","stateNum":2,"skin":"login/noticeBtn2.png","labels":"label1,label2","labelStroke":2,"labelSize":26,"labelFont":"SimHei","labelColors":"#ffffff,#9e4c65,#9e4c65,#fffff","direction":"horizontal"}},{"type":"Label","props":{"y":252,"x":245,"width":220,"var":"noticeTitle","text":"公告","height":28,"fontSize":28,"font":"SimHei","color":"#666699","bold":true,"align":"center"}},{"type":"Label","props":{"y":1093,"x":254,"width":196,"text":"点击空白处退出","height":28,"fontSize":28,"font":"SimHei","color":"#CACACA"}},{"type":"Panel","props":{"y":323,"x":79,"width":560,"var":"noticePanel","vScrollBarSkin":"login/image_common_zz.png","height":610},"child":[{"type":"HTMLDivElement","props":{"y":0,"x":0,"width":560,"var":"noticeContent","innerHTML":"htmlText","height":886}}]}]},{"type":"Box","props":{"y":0,"x":0,"width":720,"visible":false,"var":"nonageBox","height":1280},"child":[{"type":"Image","props":{"y":-140,"x":-120,"width":960,"var":"nonageBG","skin":"login/image_common_zz.png","sizeGrid":"1,1,1,1","height":1560,"alpha":0.7}},{"type":"Image","props":{"y":182,"x":22,"skin":"login/xfy_gxbg.png","mouseThrough":false,"mouseEnabled":true}},{"type":"Image","props":{"y":213,"x":639,"var":"closeNonage","stateNum":1,"skin":"login/btn_tongyong_13.png"}},{"type":"Label","props":{"y":252,"x":245,"width":220,"var":"nonageTitle","text":"适龄提示","name":"titleLittle","height":28,"fontSize":28,"font":"SimHei","color":"#666699","bold":true,"align":"center"}},{"type":"Label","props":{"y":1093,"x":254,"width":196,"text":"点击空白处退出","height":28,"fontSize":28,"font":"SimHei","color":"#CACACA"}},{"type":"HTMLDivElement","props":{"y":318,"x":74,"width":560,"var":"nonageContent","innerHTML":"htmlText","height":700}}]},{"type":"Image","props":{"y":50,"x":647,"var":"nonage","skin":"login/img_slts_16.png"}}]};
        constructor(){ super()}
        createChildren():void {
        			View.regComponent("Text",laya.display.Text);
			View.regComponent("HTMLDivElement",laya.html.dom.HTMLDivElement);

            super.createChildren();
            this.createView(WeChatUI.LoginViewUI.uiView);

        }

    }


    
}