console.info("0 进入游戏包");



//监听小程序错误事件。如脚本错误或 API 调用报错等
window.lastError;
wx.onError(function (error) {
  return;
 if (error) {
    if (error.message) {
      var gamever = window.config.game_ver.replace(new RegExp(/\./, "g"), "_");
      var message = error.message;
      var arr = message.match(/(subPackage\/game.js:)[0-9]{1,60}(:)/g);
      if (arr) {
        for (var i = 0; i < arr.length; i++) { //行数减2
          if (arr[i] && arr[i].length > 0) {
            var line = parseInt(arr[i].replace("subPackage/game.js:", "").replace(":", ""));
            message = message.replace(arr[i], arr[i].replace(":"+line+":", ":"+(line-2)+":"))
          }
        }
      }
      message = message.replace(new RegExp("subPackage/game.js", "g"), "subPackage/main__" + gamever + ".min.js");
      message = message.replace(new RegExp("subPackage/main.min.js", "g"), "subPackage/main__" + gamever + ".min.js");
      error.message = message;
    }
    var info = {
      id: window.PF_INFO.roleId,
      role: window.PF_INFO.roleName,
      level: window.PF_INFO.roleLevel,
      user: window.PF_INFO.account,
      version: window.PF_INFO.lastVersion,
      gamever: window.config.game_ver,
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


import "libs/weapp-adapter.js";
import "libs/md5.min.js";
import "libs/zlib.js";
window["Parser"] = require("libs/dom_parser.js");
import "libs/libs.min.js";
import "libs/laya.wxmini.js";
import "init.min.js";
import "index.js";
console.info("1 初始化");

console.info("2 加载游戏");
wxShowLoading({ title: '正在加载' });

// 每个分包的图集不一样，采用传参形式
var wxData = {
  showLoadingBtn: true,
}
new window.ServerLoading(wxData);
window.ServerLoading.instance.openAuthor();
if (window.loadingInterval) clearInterval(window.loadingInterval);
window.loadingInterval = null;



//比较版本号
window.compareVersion = function(v1, v2) {
  if (!v1 || !v2) return 0;
  v1 = v1.split('.'); v2 = v2.split('.');
  const len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }
  for (var i = 0; i < len; i++) {
    const num1 = parseInt(v1[i]), num2 = parseInt(v2[i]);
    if (num1 > num2) return 1;
    else if (num1 < num2) return -1;
  }
  return 0;
}

window.SDKVersion = wx.getSystemInfoSync().SDKVersion;
console.log("微信基础库版本："+window.SDKVersion);


// 版本更新相关，基础库 1.9.90 开始支持
var updateManager = wx.getUpdateManager();
updateManager.onCheckForUpdate(function (res) {
  console.log("是否有新版本："+ res.hasUpdate);
})
updateManager.onUpdateReady(function () {
  wx.showModal({
    title: '更新提示',
    content: '新版本已经准备好，是否重启应用？',
    showCancel : false, // 加了取消按钮后，实际不会触发更新
    success: function (res) {
      // if (res.confirm) { // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate();
      // } else if (res.cancel) {
      //   console.log('用户点击取消')
      // }
    }
  })
})
updateManager.onUpdateFailed(function () {
  console.log('新版本下载失败 ')
})



window.loadProbuf = function() {
  console.log("protobuf 分包加载");
  var loadProbufTask = wx.loadSubpackage({
    name: 'probuf',
    success: function(res) {
      console.log("protobuf 分包加载成功");
      console.log(res);
      if (res && res.errMsg == "loadSubpackage:ok") {
        window.loadProbPkg = true;
        window.initMain();
        window.enterToGame(); 
      } else {
        setTimeout(function() {
          window.loadProbuf();
        }, 500);
      }
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
  var loadMainTask = wx.loadSubpackage({
    name: 'main',
    success: function(res) {
      console.log("Main 分包加载成功");
      console.log(res);
      if (res && res.errMsg == "loadSubpackage:ok") {
        window.loadMainPkg = true;
        window.initMain();
        window.enterToGame(); 
      } else {
        setTimeout(function() {
          window.loadMain();
        }, 500);
      }
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

window.loadSubpackages = function () {
  if (window.compareVersion(window.SDKVersion, '2.1.0') >= 0) {   //分包wx.loadSubpackage：2.1.0，SDk的wx.createUserInfoButton：2.0.1
    console.log("微信基础库版本符合最低版本要求：" + window.SDKVersion + ">=2.1.0");
    window.sdkInit();
    window.loadProbuf();
    window.loadMain();
  } else {
    window.reqRecordInfo("微信基础库版本过低", window.SDKVersion);
    wx.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    })
  }
}


//获取系统信息
window.systemInfo = "";
wx.getSystemInfo({
  success (res) {
    window.systemInfo = "品牌："+res.brand+"，型号："+res.model+"，微信版本号："+res.version+"，系统及版本："+res.system+"，客户端平台："+res.platform+"，基础库版本："+res.SDKVersion+"，设备性能等级："+res.benchmarkLevel;
    console.log(window.systemInfo);
    console.log("设备像素比："+res.pixelRatio+"，屏幕宽度："+res.screenWidth+"，屏幕高度："+res.screenHeight+"，可使用窗口宽度："+res.windowWidth+"，可使用窗口高度："+res.windowHeight+"，状态栏的高度："+res.statusBarHeight+"，安全区域："+(res.safeArea?(res.safeArea.top+","+res.safeArea.bottom+","+res.safeArea.left+","+res.safeArea.right):""));

    var system = (res.system ? res.system.toLowerCase() : "");
    var model = (res.model ? res.model.toLowerCase().replace(" ", "") : "");
    window.PF_INFO.wxIOS = system.indexOf("ios") != -1;
    window.PF_INFO.wxAndroid = system.indexOf("android") != -1;
    window.PF_INFO.wxPhone = system.indexOf("ios") != -1 || system.indexOf("android") != -1;
    window.PF_INFO.wxPC = system.indexOf("windows") != -1 || system.indexOf("mac") != -1;
    window.PF_INFO.wxPlatform = (res.platform ? res.platform.toLowerCase() : "");
    window.PF_INFO.wxLimitLoad = false; //model.indexOf("iphonex") != -1;
    window.PF_INFO.wxBenchmarkLevel = 2;
    if (system.indexOf("android") != -1) { //android按设备等级
      if (res.benchmarkLevel >= 24) 
        window.PF_INFO.wxBenchmarkLevel = 3;
      else 
        window.PF_INFO.wxBenchmarkLevel = 2;
    } else if (system.indexOf("ios") != -1) { //ios按型号
      if(res.benchmarkLevel && res.benchmarkLevel >= 20)
        window.PF_INFO.wxBenchmarkLevel = 3;
      else if (model.indexOf("iphone5") != -1 || model.indexOf("iphone6") != -1 || model.indexOf("iphone7") != -1 
        || model.indexOf("iphonese") != -1 || model.indexOf("ipad") != -1) 
        window.PF_INFO.wxBenchmarkLevel = 2;
      else 
        window.PF_INFO.wxBenchmarkLevel = 3;
    } else { //PC
      window.PF_INFO.wxBenchmarkLevel = 2;
    }
    console.log("加载限制："+ window.PF_INFO.wxLimitLoad +"，设备限制等级："+ window.PF_INFO.wxBenchmarkLevel);
  }
})
//获取设备电量
wx.getBatteryInfo({
  success: function(res) {
    console.log("电量："+res.level+"%，是否正在充电："+res.isCharging);
  },
})
//获取网络类型
wx.getNetworkType({
  success: function(res) {
    console.log("网络类型："+res.networkType);
  },
})
//设置是否保持常亮状态，基础库 1.4.0 开始支持。仅在当前小程序生效，离开小程序后设置失效。
wx.setKeepScreenOn({
  keepScreenOn: true
})
//监听网络状态变化事件，基础库 1.1.0 开始支持
wx.onNetworkStatusChange(function (res) {
  console.log("网络类型："+res.networkType+"，是否有网络连接："+res.isConnected)
})
//监听小游戏切前台事件
wx.onShow(function (res) {
  window.onShowData = res;
  if (window.onShowCallback && window.onShowData) {
    console.info("小游戏切前台事件，场景值："+window.onShowData.scene);
    window.onShowCallback(window.onShowData);
    window.onShowData = null;
  }
})

// 内存警告相关，基础库 2.0.2 开始支持
window.memoryWarningNum = 0;
window.onMemoryWarningCallBack = null;
wx.onMemoryWarning(function () {
  window.memoryWarningNum++;
  wx.triggerGC(); //微信小游戏垃圾回收;
  if (window.memoryWarningNum >= 2) {
    window.memoryWarningNum = 0;
    console.error('第二次内存警告');
    wx.reportMonitor('0', 1);  //上报微信监控
    if(window.PF_INFO && window.PF_INFO.wxIOS) window.reqRecordInfo("内存警告", "");
    if (onMemoryWarningCallBack) onMemoryWarningCallBack();//游戏内画质设为“低”
  }
  // wx.showModal({
  //   title: '提示',
  //   content: "内存偏低，请重启微信，并重新打开小游戏",
  //   showCancel : false, 
  //   success(res) {
  //     if (window.memoryWarningNum >= 2) {
  //       window.memoryWarningNum = 0;

  //       wx.reportMonitor('0', 1);  //上报微信监控
        
  //       wx.exitMiniProgram({
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

