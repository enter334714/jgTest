console.info("0 进入游戏包");

//监听小程序错误事件。如脚本错误或 API 调用报错等
window.lastError;
qg.onError(function (error) {
  if (error) {
    if (error.message) {
      var gamever = window.config.game_ver.replace(new RegExp(/\./, "g"), "_");
      var message = error.message;
      var arr = message.match(/(subPackage\/game.js:)[0-9]{1,60}(:)/g);
      if (arr) {
        for (var i = 0; i < arr.length; i++) { //行数减2
          var line = parseInt(arr[i].replace("subPackage/game.js:", "").replace(":", ""));
          message = message.replace(arr[i], arr[i].replace(":"+line+":", ":"+(line-2)+":"))
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
      stack: (error ? (error.message+"\n"+error.message) : ""),
    }
    var infostr = JSON.stringify(info);
    console.error("脚本错误："+ infostr);
    if (!window.lastError || window.lastError!=info.error) {
      window.lastError = info.error;
      window.clientlog(info);
    }
  }
})


import "./libs/qgame-adapter";
import "./libs/md5_min";
import "./libs/zlib";
window["Parser"] = require("./libs/dom_parser");
import "./index";
import "./libs/libs_min";
import "./libs/laya_vvmini";
import "./init_min";


console.info("1 初始化");

Laya.Stage.FRAME_SLOW="fast"; //vivo小游戏需要60帧，锁屏下需要30帧
Laya.Stage.FRAME_SLEEP="slow";

// 每个分包的图集不一样，采用传参形式
var wxData = {
  showLoadingBtn: true,
  wxlogin_atlas: {"frames":{"btn_com_chuangback.png":{"frame":{"h":60,"idx":0,"w":55,"x":193,"y":253},"sourceSize":{"h":60,"w":55},"spriteSourceSize":{"x":0,"y":0}},"btn_login_gonggao.png":{"frame":{"h":87,"idx":0,"w":80,"x":520,"y":182},"sourceSize":{"h":88,"w":80},"spriteSourceSize":{"x":0,"y":1}},"btn_login_loginanniu.png":{"frame":{"h":80,"idx":0,"w":245,"x":0,"y":111},"sourceSize":{"h":88,"w":506},"spriteSourceSize":{"x":131,"y":4}},"btn_login_yingsi.png":{"frame":{"h":87,"idx":0,"w":80,"x":520,"y":270},"sourceSize":{"h":88,"w":80},"spriteSourceSize":{"x":0,"y":1}},"btn_xuanqu_anniuhuang.png":{"frame":{"h":70,"idx":0,"w":192,"x":246,"y":182},"sourceSize":{"h":70,"w":192},"spriteSourceSize":{"x":0,"y":0}},"btn_xuanqu_anniulan.png":{"frame":{"h":70,"idx":0,"w":192,"x":0,"y":192},"sourceSize":{"h":70,"w":192},"spriteSourceSize":{"x":0,"y":0}},"btn_xuanqu_quanniu.png":{"frame":{"h":70,"idx":0,"w":358,"x":246,"y":111},"sourceSize":{"h":70,"w":358},"spriteSourceSize":{"x":0,"y":0}},"image_com_tuichu.png":{"frame":{"h":145,"idx":0,"w":80,"x":439,"y":182},"sourceSize":{"h":146,"w":82},"spriteSourceSize":{"x":1,"y":1}},"image_login_changtong.png":{"frame":{"h":36,"idx":0,"w":36,"x":193,"y":192},"sourceSize":{"h":36,"w":36},"spriteSourceSize":{"x":0,"y":0}},"image_login_fanmang.png":{"frame":{"h":36,"idx":0,"w":36,"x":0,"y":263},"sourceSize":{"h":36,"w":36},"spriteSourceSize":{"x":0,"y":0}},"image_login_weihu.png":{"frame":{"h":36,"idx":0,"w":36,"x":37,"y":263},"sourceSize":{"h":36,"w":36},"spriteSourceSize":{"x":0,"y":0}},"image_login_xuanqubg.png":{"frame":{"h":110,"idx":0,"w":580,"x":0,"y":0},"sourceSize":{"h":152,"w":580},"spriteSourceSize":{"x":0,"y":42}}},"meta":{"image":"wxlogin_atlas.png","prefix":"wxlogin_atlas/"}},
  wxloading_atlas: {"frames":{"image_loding_bar0.png":{"frame":{"h":27,"idx":0,"w":596,"x":0,"y":0},"sourceSize":{"h":27,"w":596},"spriteSourceSize":{"x":0,"y":0}},"image_loding_bar02.png":{"frame":{"h":27,"idx":0,"w":596,"x":0,"y":28},"sourceSize":{"h":27,"w":596},"spriteSourceSize":{"x":0,"y":0}},"image_loding_bar1.png":{"frame":{"h":25,"idx":0,"w":594,"x":0,"y":56},"sourceSize":{"h":25,"w":594},"spriteSourceSize":{"x":0,"y":0}},"image_loding_bar2.png":{"frame":{"h":11,"idx":0,"w":208,"x":0,"y":199},"sourceSize":{"h":11,"w":208},"spriteSourceSize":{"x":0,"y":0}},"image_loding_bar3.png":{"frame":{"h":116,"idx":0,"w":39,"x":0,"y":82},"sourceSize":{"h":116,"w":39},"spriteSourceSize":{"x":0,"y":0}},"image_login_point1.png":{"frame":{"h":13,"idx":0,"w":13,"x":595,"y":56},"sourceSize":{"h":17,"w":17},"spriteSourceSize":{"x":2,"y":2}},"image_login_point2.png":{"frame":{"h":17,"idx":0,"w":17,"x":40,"y":82},"sourceSize":{"h":17,"w":17},"spriteSourceSize":{"x":0,"y":0}},"image_login_point3.png":{"frame":{"h":13,"idx":0,"w":13,"x":595,"y":70},"sourceSize":{"h":17,"w":17},"spriteSourceSize":{"x":2,"y":2}}},"meta":{"image":"wxloading_atlas.png","prefix":"wxloading_atlas/"}},
  wxeff_btn_atlas: {"frames":{"0.png":{"frame":{"h":90,"idx":0,"w":217,"x":0,"y":0},"sourceSize":{"h":111,"w":250},"spriteSourceSize":{"x":17,"y":9}},"1.png":{"frame":{"h":91,"idx":0,"w":219,"x":218,"y":0},"sourceSize":{"h":111,"w":250},"spriteSourceSize":{"x":16,"y":8}},"2.png":{"frame":{"h":87,"idx":0,"w":222,"x":0,"y":92},"sourceSize":{"h":111,"w":250},"spriteSourceSize":{"x":15,"y":11}},"3.png":{"frame":{"h":86,"idx":0,"w":221,"x":0,"y":180},"sourceSize":{"h":111,"w":250},"spriteSourceSize":{"x":15,"y":11}},"4.png":{"frame":{"h":90,"idx":0,"w":215,"x":222,"y":180},"sourceSize":{"h":111,"w":250},"spriteSourceSize":{"x":18,"y":9}}},"meta":{"image":"wxeff_btn_atlas.png","prefix":"wxeff_btn_atlas/"}}
}
new window.ServerLoading(wxData);
window.ServerLoading.instance.openAuthor();



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

window.SDKVersion = qg.getSystemInfoSync().platformVersionCode;
console.log("vivo基础库版本："+window.SDKVersion);


// 版本更新相关
if (window.SDKVersion >= 1083) { 
  const updateManager = qg.getUpdateManager();
  updateManager.onCheckForUpdate(function (res) {
    console.log("是否有新版本："+ res.hasUpdate);
  })
  updateManager.onUpdateReady(function () {
    qg.showDialog({
      title: '更新提示',
      message: '新版本已经准备好，是否重启应用？',
      buttons: [{text:'确定'}],
      success: function (res) {
          updateManager.applyUpdate();
      }
    })
  })
  updateManager.onUpdateFailed(function () {
    console.log('新版本下载失败 ')
  })
} else {
  qg.onUpdateReady(function(res) {
    console.log(`新版本已经准备好${res}`)
    if(res == 1) {
        qg.applyUpdate();    
    }
  });
}




window.loadProbuf = function() {
  console.log("protobuf 分包加载");
  var loadLibsTask = qg.loadSubpackage({
    name: 'probuf',
    success: function(res) {
      console.log("protobuf 分包加载成功");
      console.log(res);
      if (res) {
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
  loadLibsTask && loadLibsTask.onProgressUpdate(res => {
    // console.log('protobuf 下载进度:' + res.progress + '%, 已经下载的数据长度', res.totalBytesWritten, '预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
  });
}
window.loadMain = function() {
  console.log("Main 分包加载");
  var loadMainTask = qg.loadSubpackage({
    name: 'sub',
    success: function(res) {
      console.log("Main 分包加载成功");
      console.log(res);
      if (res) {
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


if (window.SDKVersion >= 1052) {   //分包qg.loadSubpackage：1052
  console.log("vivo基础库版本符合最低版本要求："+window.SDKVersion+">=1052");
  window.sdkInit();
  window.loadProbuf(); 
  window.loadMain();
} else {
  require('probuf');
  require('sub');
  window.reqRecordInfo("vivo基础库版本过低:" + window.SDKVersion);
} 


//获取系统信息
window.systemInfo = "";
qg.getSystemInfo({
  success (res) {
    window.systemInfo = "品牌："+res.brand+"，型号："+res.model+"，系统及版本："+res.osType+","+res.osVersionName+","+res.osVersionCode+"，运行平台版本名："+res.platformVersionName+"，运行平台版本号："+res.platformVersionCode;
    console.log(window.systemInfo);
    console.log("屏幕宽度："+res.screenWidth+"，屏幕高度："+res.screenHeight+"，刘海屏高度："+res.statusBarHeight+"，安全区域："+(res.safeArea?(res.safeArea.top+","+res.safeArea.bottom+","+res.safeArea.left+","+res.safeArea.right):""));

    var system = (res.osType ? res.osType.toLowerCase() : "");
    var model = (res.model ? res.model.toLowerCase().replace(" ", "") : "");
    window.PF_INFO.wxIOS = system.indexOf("ios") != -1;
    window.PF_INFO.wxAndroid = system.indexOf("android") != -1;
    window.PF_INFO.wxPhone = system.indexOf("ios") != -1 || system.indexOf("android") != -1;
    window.PF_INFO.wxPC = system.indexOf("windows") != -1 || system.indexOf("mac") != -1;
    window.PF_INFO.wxPlatform = (res.platform ? res.platform.toLowerCase() : "");
    window.PF_INFO.wxLimitLoad = false; //model.indexOf("iphonex") != -1;
    window.PF_INFO.wxBenchmarkLevel = 1;
    if (system.indexOf("android") != -1) { //android按设备等级
      if (res.benchmarkLevel >= 24) 
        window.PF_INFO.wxBenchmarkLevel = 2;
      else 
        window.PF_INFO.wxBenchmarkLevel = 1;
    } else if (system.indexOf("ios") != -1) { //ios按型号
      if(res.benchmarkLevel && res.benchmarkLevel >= 20)
        window.PF_INFO.wxBenchmarkLevel = 2;
      else if (model.indexOf("iphone5") != -1 || model.indexOf("iphone6") != -1 || model.indexOf("iphone7") != -1 
        || model.indexOf("iphonese") != -1 || model.indexOf("ipad") != -1) 
        window.PF_INFO.wxBenchmarkLevel = 1;
      else 
        window.PF_INFO.wxBenchmarkLevel = 2;
    } else { //PC
      window.PF_INFO.wxBenchmarkLevel = 1;
    }
    console.log("加载限制："+ window.PF_INFO.wxLimitLoad +"，设备限制等级："+ window.PF_INFO.wxBenchmarkLevel);
  }
})
//获取设备电量
qg.getBatteryInfo({
  success: function(res) {
    console.log("电量："+(res.level*100)+"%，是否正在充电："+res.isCharging);
  },
})
//获取网络类型
qg.getNetworkType({
  success: function(res) {
    console.log("网络类型："+res.type);
  },
})
//设置是否保持常亮状态，基础库 1.4.0 开始支持。仅在当前小程序生效，离开小程序后设置失效。
qg.setKeepScreenOn({
  keepSrceenOn: true
})
//监听网络状态变化事件，基础库 1.1.0 开始支持
qg.subscribeNetworkStatus(function (res) {
  console.log("网络类型："+res.type+"，是否按照流量计费："+res.metered)
})
//监听小游戏切前台事件
qg.onShow(function (res) {
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
// qg.onMemoryWarning(function () {
//   window.memoryWarningNum++;
//   qg.triggerGC(); //vivo小游戏垃圾回收;
//   if (window.memoryWarningNum >= 2) {
//     window.memoryWarningNum = 0;
//     console.error('第二次内存警告');
//     if(window.PF_INFO && window.PF_INFO.wxIOS) window.reqRecordInfo("内存警告");
//     if (onMemoryWarningCallBack) onMemoryWarningCallBack();//游戏内画质设为“低”
//   }
// })

