require("weapp-adapter.js");
window.self=window;
window.DEBUG=false;
window.GROUP_ID=2;              //管理后台渠道组id ,1为外网测试组,2为崛起时光
window.gameVersion="1.0.0";     //版本号

require("./code.js");                                   //引擎代码和登录页代码
window.Parser = require("./libs/html/dom_parser");      //假如这句富文本才能正常使用
wx.setPreferredFramesPerSecond(60);

window.enterGame =()=>{
  MainRun();
  // let head = __global.document.getElementsByTagName("head")[0];
  // console.log(head);
}


/** 收到子线程消息 */
window.onWorkerMessage=(res)=>{
  console.log("收到子线程消息",res);
  if(res.type=="Decode"){
    window.DecodeCallBack(res.data);
  }


}

/** 向子线程发送解码命令 */
window.sendDecode=(datas)=>{
   console.log("MMM1",datas);
  // //window.WXWorker.postMessage({type:"Decode",data:datas});
  // console.time("test time");
  let arr=Array.prototype.slice.call(new Int8Array(datas.content[0]));
  // console.timeEnd("test time");
  // console.log(arr1);
  // let arr2=new Int8Array(arr1).buffer;
  // console.log(arr2);
  datas.arr=arr;
  window.WXWorker.postMessage({type:"Decode",data:datas});
  
}
/** 向子线程发送信息 */
window.sendMessage=(datas)=>{
  window.WXWorker.postMessage({type:"Message",data:datas});
}

// window.WXWorker= wx.createWorker('workers/routine.js');
// window.WXWorker.onMessage(window.onWorkerMessage);
// window.weChatWorker=(DecodeCallBack)=>{
//   window.DecodeCallBack=DecodeCallBack;
//   return window.WXWorker;
// }


// var head = globalThis.__global.document.getElementsByTagName("head")[0];
// var script = globalThis.__global.document.createElement('script')
// script.src = `https://h5test.s1.l2i.cc/wx/js/main.js?v=${Date.now()}`;
// head.appendChild(script);

// const sab = new Uint8Array([85, 15, 0, 70, 3, 2, 39, 0, 17, 102, 0, 75, 0, 13, 165]);
// console.log("llll",String.fromCharCode.apply(null, new Uint16Array(sab)))
// window.WXWorker.postMessage({type:"33",data:sab});
// console.log(window.WXWorker.postMessage);
//window.WXWorker.postMessage({type:"Decode",data:null});







