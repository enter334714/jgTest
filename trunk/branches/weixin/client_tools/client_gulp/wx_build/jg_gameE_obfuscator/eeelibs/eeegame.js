console.info("0 进入游戏包");

//监听小程序错误事件。如脚本错误或 API 调用报错等
window.lastError;
wx.onError(function (error) {
  if (error) {
    if (error.message) {
      var gamever = window.config.game_ver.replace(new RegExp(/\./, "g"), "_");
      var message = error.message;
      var arr = message.match(/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
      if (arr) {
        for (var i = 0; i < arr.length; i++) {
          //行数减2
          if (arr[i] && arr[i].length > 0) {
            var line = parseInt(arr[i].replace("eeeeeeee/eeegame.js:", "").replace(":", ""));
            message = message.replace(arr[i], arr[i].replace(":" + line + ":", ":" + (line - 2) + ":"));
          }
        }
      }
      message = message.replace(new RegExp("eeeeeeee/eeegame.js", "g"), "eeeeeeee/main__" + gamever + ".min.js");
      message = message.replace(new RegExp("eeeeeeee/eeemain.js", "g"), "eeeeeeee/main__" + gamever + ".min.js");
      error.message = message;
    }
    var info = {
      id: window.E$E3.roleId,
      role: window.E$E3.roleName,
      level: window.E$E3.roleLevel,
      user: window.E$E3.account,
      version: window.E$E3.lastVersion,
      gamever: window.config.game_ver,
      cdn: window.E$E3.cdn,
      serverid: window.E$E3.selectedServer ? window.E$E3.selectedServer.server_id : 0,
      systemInfo: window.systemInfo,
      error: "MiniProgramError",
      stack: error ? error.message : ""
    };
    var infostr = JSON.stringify(info);
    console.error("脚本错误：" + infostr);
    if (!window.lastError || window.lastError != info.error) {
      window.lastError = info.error;
      window.E$_E(info);
    }
  }
});

import "eeemd5min.js";
import "eeezlibs.js";
window["Parser"] = require("eeedomparser.js");
import "eeeindex.js";
import "eeelibsmin.js";
import "eeewxmini.js";
import "eeeinitmin.js";

console.info("1 初始化");

//绘制白色背景
// const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
// const verts = [1,-1,0, -1,-1,0, 1,1,0, -1,1,0];
// gl.clearColor(0,0,0,0);
// gl.clear(gl.COLOR_BUFFER_BIT);
// gl.viewport(0,0,canvas.width, canvas.height);
// var vrt_shader = gl.createShader(gl.VERTEX_SHADER);
// gl.shaderSource(vrt_shader, "attribute vec4 coords; void main() { gl_Position = coords; }");
// gl.compileShader(vrt_shader);
// var fra_shader = gl.createShader(gl.FRAGMENT_SHADER);
// gl.shaderSource(fra_shader, "precision mediump float; void main() { gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); }");
// gl.compileShader(fra_shader);

// var shaderProgram = gl.createProgram();
// gl.attachShader(shaderProgram, vrt_shader);
// gl.attachShader(shaderProgram, fra_shader);
// gl.linkProgram(shaderProgram);
// gl.useProgram(shaderProgram);

// var buffer = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
// gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);
// var coords = gl.getAttribLocation(shaderProgram,'coords');
// gl.vertexAttribPointer(coords, 3, gl.FLOAT, false, 0,0);
// gl.enableVertexAttribArray(coords);

// function render() {
//   gl.clearColor(0.0, 0.0, 0.0, 1.0);
//   gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
//   gl.flush();
// }
// render();
// window.loadingInterval = setInterval(function(){
//   render();
// }, 16)
console.info("2 加载游戏");
E$_EP3({ title: '正在加载' });

// 每个分包的图集不一样，采用传参形式
var E$Q_3EP = {
  E$QP_E3: true
};
new window.ServerLoading(E$Q_3EP);
window.ServerLoading.instance.E$QP3_E();
if (window.E$Q_3PE) clearInterval(window.E$Q_3PE);
window.E$Q_3PE = null;

//比较版本号
window.E$QP3E_ = function (v1, v2) {
  if (!v1 || !v2) return 0;
  v1 = v1.split('.');v2 = v2.split('.');
  const len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push('0');
  }
  while (v2.length < len) {
    v2.push('0');
  }
  for (var i = 0; i < len; i++) {
    const num1 = parseInt(v1[i]),
          num2 = parseInt(v2[i]);
    if (num1 > num2) return 1;else if (num1 < num2) return -1;
  }
  return 0;
};

window.SDKVersion = wx.getSystemInfoSync().SDKVersion;
console.log("微信基础库版本：" + window.SDKVersion);

// 版本更新相关，基础库 1.9.90 开始支持
var updateManager = wx.getUpdateManager();
updateManager.onCheckForUpdate(function (res) {
  console.log("是否有新版本：" + res.hasUpdate);
});
updateManager.onUpdateReady(function () {
  wx.showModal({
    title: '更新提示',
    content: '新版本已经准备好，是否重启应用？',
    showCancel: false, // 加了取消按钮后，实际不会触发更新
    success: function (res) {
      // if (res.confirm) { // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
      updateManager.applyUpdate();
      // } else if (res.cancel) {
      //   console.log('用户点击取消')
      // }
    }
  });
});
updateManager.onUpdateFailed(function () {
  console.log('新版本下载失败 ');
});

window.E$QE_P3 = function () {
  console.log("protobuf 分包加载");
  var E$QE_3P = wx.loadSubpackage({
    name: 'eeeeeepf',
    success: function (res) {
      console.log("protobuf 分包加载成功");
      console.log(res);
      if (res && res.errMsg == "loadSubpackage:ok") {
        window.E$3P = true;
        window.E$3E_P();
        window.E$3EP_();
      } else {
        setTimeout(function () {
          window.E$QE_P3();
        }, 500);
      }
    },
    fail: function (res) {
      console.log("protobuf 分包加载失败");
      console.log(res);
      setTimeout(function () {
        window.E$QE_P3();
      }, 500);
    }
  });
  E$QE_3P && E$QE_3P.onProgressUpdate(res => {
    // console.log('protobuf 下载进度:' + res.progress + '%, 已经下载的数据长度', res.totalBytesWritten, '预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
  });
};
window.E$QEP_3 = function () {
  console.log("Main 分包加载");
  var E$QEP3_ = wx.loadSubpackage({
    name: 'eeeeeeee',
    success: function (res) {
      console.log("Main 分包加载成功");
      console.log(res);
      if (res && res.errMsg == "loadSubpackage:ok") {
        window.E$EP3 = true;
        window.E$3E_P();
        window.E$3EP_();
      } else {
        setTimeout(function () {
          window.E$QEP_3();
        }, 500);
      }
    },
    fail: function (res) {
      console.log("Main 分包加载失败");
      console.log(res);
      setTimeout(function () {
        window.E$QEP_3();
      }, 500);
    }
  });
  E$QEP3_ && E$QEP3_.onProgressUpdate(res => {
    // console.log('Main 下载进度:' + res.progress + '%, 已经下载的数据长度', res.totalBytesWritten, '预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
  });
};

window.loadSubpackages = function () {
  if (window.E$QP3E_(window.SDKVersion, '2.1.0') >= 0) {
    //分包wx.loadSubpackage：2.1.0，SDk的wx.createUserInfoButton：2.0.1
    console.log("微信基础库版本符合最低版本要求：" + window.SDKVersion + ">=2.1.0");
    window.E$E_();
    window.E$QE_P3();
    window.E$QEP_3();
  } else {
    window.E$E3_("微信基础库版本过低", window.SDKVersion);
    wx.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    });
  }
};

//获取系统信息
window.systemInfo = "";
wx.getSystemInfo({
  success(res) {
    window.systemInfo = "品牌：" + res.brand + "，型号：" + res.model + "，微信版本号：" + res.version + "，系统及版本：" + res.system + "，客户端平台：" + res.platform + "，基础库版本：" + res.SDKVersion + "，设备性能等级：" + res.benchmarkLevel;
    console.log(window.systemInfo);
    console.log("设备像素比：" + res.pixelRatio + "，屏幕宽度：" + res.screenWidth + "，屏幕高度：" + res.screenHeight + "，可使用窗口宽度：" + res.windowWidth + "，可使用窗口高度：" + res.windowHeight + "，状态栏的高度：" + res.statusBarHeight + "，安全区域：" + (res.safeArea ? res.safeArea.top + "," + res.safeArea.bottom + "," + res.safeArea.left + "," + res.safeArea.right : ""));

    var system = res.system ? res.system.toLowerCase() : "";
    var model = res.model ? res.model.toLowerCase().replace(" ", "") : "";
    window.E$E3.wxIOS = system.indexOf("ios") != -1;
    window.E$E3.wxAndroid = system.indexOf("android") != -1;
    window.E$E3.wxPhone = system.indexOf("ios") != -1 || system.indexOf("android") != -1;
    window.E$E3.wxPC = system.indexOf("windows") != -1 || system.indexOf("mac") != -1;
    window.E$E3.wxPlatform = res.platform ? res.platform.toLowerCase() : "";
    window.E$E3.E$Q_EP3 = false; //model.indexOf("iphonex") != -1;
    window.E$E3.E$Q_E3P = 2;
    if (system.indexOf("android") != -1) {
      //android按设备等级
      if (res.benchmarkLevel >= 24) window.E$E3.E$Q_E3P = 3;else window.E$E3.E$Q_E3P = 2;
    } else if (system.indexOf("ios") != -1) {
      //ios按型号
      if (res.benchmarkLevel && res.benchmarkLevel >= 20) window.E$E3.E$Q_E3P = 3;else if (model.indexOf("iphone5") != -1 || model.indexOf("iphone6") != -1 || model.indexOf("iphone7") != -1 || model.indexOf("iphonese") != -1 || model.indexOf("ipad") != -1) window.E$E3.E$Q_E3P = 2;else window.E$E3.E$Q_E3P = 3;
    } else {
      //PC
      window.E$E3.E$Q_E3P = 2;
    }
    console.log("加载限制：" + window.E$E3.E$Q_EP3 + "，设备限制等级：" + window.E$E3.E$Q_E3P);
  }
});
//获取设备电量
wx.getBatteryInfo({
  success: function (res) {
    console.log("电量：" + res.level + "%，是否正在充电：" + res.isCharging);
  }
});
//获取网络类型
wx.getNetworkType({
  success: function (res) {
    console.log("网络类型：" + res.networkType);
  }
});
//设置是否保持常亮状态，基础库 1.4.0 开始支持。仅在当前小程序生效，离开小程序后设置失效。
wx.setKeepScreenOn({
  keepScreenOn: true
});
//监听网络状态变化事件，基础库 1.1.0 开始支持
wx.onNetworkStatusChange(function (res) {
  console.log("网络类型：" + res.networkType + "，是否有网络连接：" + res.isConnected);
});
//监听小游戏切前台事件
wx.onShow(function (res) {
  window.E$3_P = res;
  if (window.E$3P_ && window.E$3_P) {
    console.info("小游戏切前台事件，场景值：" + window.E$3_P.scene);
    window.E$3P_(window.E$3_P);
    window.E$3_P = null;
  }
});

// 内存警告相关，基础库 2.0.2 开始支持
window.E$QE3_P = 0;
window.onMemoryWarningCallBack = null;
wx.onMemoryWarning(function () {
  window.E$QE3_P++;
  wx.triggerGC(); //微信小游戏垃圾回收;
  if (window.E$QE3_P >= 2) {
    window.E$QE3_P = 0;
    console.error('第二次内存警告');
    wx.reportMonitor('0', 1); //上报微信监控
    if (window.E$E3 && window.E$E3.wxIOS) window.E$E3_("内存警告", "");
    if (onMemoryWarningCallBack) onMemoryWarningCallBack(); //游戏内画质设为“低”
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
});