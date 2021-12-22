console.info("2 进入libs分包");

import "weapp-adapter.js";
import "zlib.js";
import "dom_parser.js";
import "index.js";
import "libs.min.js";
import "laya.qqmini.js";
import "init.min.js";

//监听小程序错误事件。如脚本错误或 API 调用报错等
window.lastError;
qq.onError(function (error) {
  if (error) {
    if (error.message) {
      var gamever = window.sdk_config.game_ver.replace(new RegExp(/\./, "g"), "_");
      var message = error.message;
      var arr = message.match(/(subPackage1\/game.js:)[0-9]{1,60}(:)/g);
      if (arr) {
        for (var i = 0; i < arr.length; i++) { //行数减2
          var line = parseInt(arr[i].replace("subPackage1/game.js:", "").replace(":", ""));
          message = message.replace(arr[i], arr[i].replace(":"+line+":", ":"+(line-2)+":"))
        }
      }
      arr = message.match(/(subPackage2\/game.js:)[0-9]{1,60}(:)/g);
      if (arr) {
        for (var i = 0; i < arr.length; i++) { //行数减2
          var line = parseInt(arr[i].replace("subPackage2/game.js:", "").replace(":", ""));
          message = message.replace(arr[i], arr[i].replace(":"+line+":", ":"+(line-2)+":"))
        }
      }
      arr = message.match(/(subPackage3\/game.js:)[0-9]{1,60}(:)/g);
      if (arr) {
          for (var i = 0; i < arr.length; i++) { //行数减2
              var line = parseInt(arr[i].replace("subPackage3/game.js:", "").replace(":", ""));
              message = message.replace(arr[i], arr[i].replace(":"+line+":", ":"+(line-2)+":"))
          }
      }
      message = message.replace(new RegExp("subPackage1/game.js", "g"), "subPackage1/main1__" + gamever + ".min.js");
      message = message.replace(new RegExp("subPackage1/main.min.js", "g"), "subPackage1/main1__" + gamever + ".min.js");
      message = message.replace(new RegExp("subPackage2/game.js", "g"), "subPackage2/main2__" + gamever + ".min.js");
      message = message.replace(new RegExp("subPackage2/main.min.js", "g"), "subPackage2/main2__" + gamever + ".min.js");
      message = message.replace(new RegExp("subPackage3/game.js", "g"), "subPackage3/main3__" + gamever + ".min.js");
      message = message.replace(new RegExp("subPackage3/main.min.js", "g"), "subPackage3/main3__" + gamever + ".min.js");
      error.message = message;
    }
    var info = {
      id: window.PF_INFO.roleId,
      role: window.PF_INFO.roleName,
      level: window.PF_INFO.roleLevel,
      user: window.PF_INFO.account,
      version: window.PF_INFO.lastVersion,
      gamever: window.sdk_config.game_ver,
      cdn: window.PF_INFO.cdn,
      serverid: (window.PF_INFO.selectedServer ? window.PF_INFO.selectedServer.server_id : 0),
      systemInfo: window.systemInfo,
      error: "MiniProgramError",
      stack: (error ? error.message : ""),
    }
    var infostr = JSON.stringify(info);
    console.error("脚本错误："+ infostr);
    if (!window.lastError || window.lastError!=info.error) {
      window.lastError = info.error;
      window.clientlog(info);
    }
  }
})


console.info("3 libs初始化完成");


window.loadProbuf = function() {
  console.log("protobuf 分包加载");
  var loadProbufTask = qq.loadSubpackage({
    name: 'probuf',
    success: function(res) {
      console.log("protobuf 分包加载成功");
      console.log(res);
      // if (res && res.errMsg == "loadSubpackage:ok") {
        window.loadProbPkg = true;
        window.initMain();
        window.enterToGame(); 
      // } else {
      //   setTimeout(function() {
      //     window.loadProbuf();
      //   }, 500);
      // }
    },
    fail: function(res) {
      console.log("protobuf 分包加载失败");
      console.log(res);
      setTimeout(function() {
        window.loadProbuf();
      }, 500);
    },
  });
  loadProbufTask && loadProbufTask.onProgressUpdate(res => {
    // console.log('protobuf 下载进度:' + res.progress + '%, 已经下载的数据长度', res.totalBytesWritten, '预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
  });
}
window.loadMain = function() {
  console.log("Main 分包加载");
  window.onRoleRecordStep(25);
  var loadMainTask = qq.loadSubpackage({
    name: 'main',
    success: function(res) {
      console.log("Main 分包加载成功");
      console.log(res);
      // if (res && res.errMsg == "loadSubpackage:ok") {
        window.onRoleRecordStep(26);
        window.loadMainPkg = true;
        window.initMain();
        window.enterToGame(); 
      // } else {
      //   setTimeout(function() {
      //     window.loadMain();
      //   }, 500);
      // }
    },
    fail: function(res) {
      console.log("Main 分包加载失败");
      console.log(res);
      setTimeout(function() {
        window.loadMain();
      }, 500);
    },
  });
  loadMainTask && loadMainTask.onProgressUpdate(res => {
    // console.log('Main 下载进度:' + res.progress + '%, 已经下载的数据长度', res.totalBytesWritten, '预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
  });
}

qq.loadGameSubpackages = function() {
  window.loadProbuf(); 
  window.loadMain();
}


//获取设备电量
qq.getBatteryInfo({
  success: function(res) {
    console.log("电量："+res.level+"%，是否正在充电："+res.isCharging);
  },
})
//获取网络类型
qq.getNetworkType({
  success: function(res) {
    console.log("网络类型："+res.networkType);
  },
})
//设置是否保持常亮状态，基础库 1.4.0 开始支持。仅在当前小程序生效，离开小程序后设置失效。
qq.setKeepScreenOn({
  keepScreenOn: true
})
//监听网络状态变化事件，基础库 1.1.0 开始支持
qq.onNetworkStatusChange(function (res) {
  console.log("网络类型："+res.networkType+"，是否有网络连接："+res.isConnected)
})


// 内存警告相关，基础库 2.0.2 开始支持
window.memoryWarningNum = 0;
window.onMemoryWarningCallBack = null;
qq.onMemoryWarning(function () {
  window.memoryWarningNum++;
  qq.triggerGC(); //QQ小游戏垃圾回收;
  if (window.memoryWarningNum >= 2) {
    window.memoryWarningNum = 0;
    console.error('第二次内存警告');
    if(window.PF_INFO && window.PF_INFO.wxIOS) window.reqRecordInfo("内存警告", "");
    if (onMemoryWarningCallBack) onMemoryWarningCallBack();//游戏内画质设为“低”
  }
  // qq.showModal({
  //   title: '提示',
  //   content: "内存偏低，请重启QQ，并重新打开小游戏",
  //   showCancel : false, 
  //   success(res) {
  //     if (window.memoryWarningNum >= 2) {
  //       window.memoryWarningNum = 0;

  //       qq.reportMonitor('0', 1);  //上报QQ监控
        
  //       qq.exitMiniProgram({
  //         success: function () {
  //           console.error('退出游戏成功！');
  //         },
  //         fail: function () {
  //           console.error('退出游戏失败！');
  //         }
  //       })
  //     }
  //   }
  // })
})


var wxData = {
  showLoadingBtn: true,
}
new window.ServerLoading(wxData);
window.ServerLoading.instance.openAuthor();
if (qq.loadingInterval) clearInterval(qq.loadingInterval);
qq.loadingInterval = null;


