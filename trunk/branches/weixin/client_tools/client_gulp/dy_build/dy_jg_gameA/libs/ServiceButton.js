class ServiceBtn {
  constructor(){
    this.button = null;
  }
  create(filePath) {
    this.button = tt.createContactButton({
      type: "image", // image | text
      image: filePath,
      // text:"客服",
      style: {
        left: 0,
        top: 80,
        width: 44,
        height: 41,     
        borderWidth: 0,      
      },
      success(res) {
        console.log("create success", res);
      },
      fail(res) {
        console.log("create fail", res);
      },
      complete(res) {
        console.log("create complete", res);
      },
    });
  }

  hide(){
    if(this.button){
      this.button.hide();
    }
  }

  show(){
    if(this.button){
      this.button.show();
    }
  }

  destroy(){
    if(this.button){
      this.button.destroy();
    }
  }


  createBtn() {
    var self = this;
    tt.downloadFile({
      url: PF_INFO.cdn + "dyService/service44_41.png", // 文件地址
      success: (res) => {       
          self.create(res.tempFilePath)
      }
    });
  }
}

window.ttServiceBtn = new ServiceBtn();








//   // 点击事件
//   function handleClick() {
//     console.log("点击客服按钮");
//   }

//   button.onTap(handleClick); // 监听点击事件
//   button.offTap(handleClick); // 取消监听点击事件

//   button.show(); // 显示按钮
//   // button.hide(); // 隐藏按钮

//   // 错误处理
//   function handleError(res) {
//     console.log(res.errMsg);
//   }

//   button.onError(handleError); // 监听错误
//   button.offError(handleError); //取消监听错误

// //   button.destroy(); // 销毁按钮