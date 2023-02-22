
///<reference path="./WeChatUI.ts"/>
module WeChatUI {
  //require("js/main.js");

export class Loading extends WeChatUI.LoadingViewUI {

    //  private start:number;

    private maxWidth:number;

    private maxProgress:number=6;
    private nowProgress:number;

    private nowProgress2:number;      //上方的进度

    constructor() {
      super();
      this.init();
      this.onEven();
    }

    arr:[];

    private init():void{
      this.verTxt.text=`游戏版本：${gameVersion}`;
      loadView=this;
      this.centerY=0;
      this.nowProgress=0;
      this.nowProgress2=0;
     
      this.maxWidth=this.progressBar1.width;

      this.progressBar1.width=this.progressBar2.width=0;
      this.proLabel1.text=this.proLabel2.text="0%";

      //this.proLabel.text="加载主程序.....";
      this.arr=[]
      this.upProgress("加载主程序.....");

    //  this.loadMain();

      let loadTask:wx.LoadSubpackageTask = wx.loadSubpackage({
        name: 'wechat_main', // name 可以填 name 或者 root
        success: function(res) {
          // 分包加载成功后通过 success 回调
          console.log("分包加载成功   ",res);   
          Laya.URL.basePath ="http://192.168.31.223:8901/bin";
          enterGame(userData);

        },
        fail: function(res) {
          // 分包加载失败通过 fail 回调
          console.log("分包加载失败   ",res);
        }
      });

      loadTask.onProgressUpdate((res:wx.Res)=>{
        // this.progressBar1.width=this.maxWidth*(res.progress/100);
        // this.proLabel1.text=res.progress+"%";
        console.log('下载进度', res.progress);
        console.log('已经下载的数据长度', res.totalBytesWritten);
        console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
      });
     // enterGame(userData.uid,"");
      Laya.timer.loop(100,this,this.upProgress2);
    }

    // private loadMain():void{
    //   console.log("开始加载");
    //   Laya.URL.basePath ="http://192.168.31.223:8901/bin";
    //   let http:Laya.HttpRequest= new Laya.HttpRequest();
                
    //   let succ=(text: string)=>{
    //     console.log("加载完成");
    //     MainCode=new Function(text);
    //     console.log(MainCode);
    //     MainCode();
    //   }
    //   let fail=()=>{

    //   }
    //   http.once(Laya.Event.COMPLETE, this,succ); //数据传输完成后，会返回一个data
    //   http.once(Laya.Event.ERROR, this, fail);
    //   http.send(Laya.URL.basePath+`/main.txt`, null, "get","text");

    // }

    public upProgress(text:string):void{
      //if(this.nowProgress==this.m)
     // console.log("8888------",text);
      if(this.nowProgress==this.maxProgress){
        return;
      }
    //  console.log("8888++++++",text);
      this.nowProgress++;
      this.nowProgress2=0;
      let p:number=this.nowProgress/this.maxProgress;
      this.progressBar2.width=p*this.maxWidth;
      this.proLabel2.text=Math.floor(p*100)+"%";

      this.proLabel.text=text;
      if(this.nowProgress==this.maxProgress){
        Laya.timer.once(loadingTime,this,this.open);
      }
    }

    public upProgress2():void{
      if(this.nowProgress2<99){
        this.nowProgress2++;
        this.progressBar1.width=this.nowProgress2/100*this.maxWidth;
        this.proLabel1.text=this.nowProgress2+"%";
      }
      
    }

    private open():void{
      this.destroy();
      MainResetStage();
    }

    


    private onEven() :void{
    
    }


    public destroy(): void {
      Laya.timer.clearAll(this);
      loadView=null;
      super.destroy(true);
    }


}





}