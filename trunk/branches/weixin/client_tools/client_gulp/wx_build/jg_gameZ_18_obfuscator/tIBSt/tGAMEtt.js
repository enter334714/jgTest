console.info("0 进入游戏包");

//监听小程序错误事件。如脚本错误或 API 调用报错等
window.lastError;
wx.onError(function (error) {
  if (error) {
    if (error.message) {
      var gamever = window.config.game_ver.replace(new RegExp(/\./, "g"), "_");
      var message = error.message;
      var arr = message.match(/(ttttttt\/tGAMEtt.js:)[0-9]{1,60}(:)/g);
      if (arr) {
        for (var i = 0; i < arr.length; i++) {
          //行数减2
          if (arr[i] && arr[i].length > 0) {
            var line = parseInt(arr[i].replace("ttttttt/tGAMEtt.js:", "").replace(":", ""));
            message = message.replace(arr[i], arr[i].replace(":" + line + ":", ":" + (line - 2) + ":"));
          }
        }
      }
      message = message.replace(new RegExp("ttttttt/tGAMEtt.js", "g"), "ttttttt/main__" + gamever + ".min.js");
      message = message.replace(new RegExp("ttttttt/ttMAItttt.js", "g"), "ttttttt/main__" + gamever + ".min.js");
      error.message = message;
    }
    var info = {
      id: window.D$5$.roleId,
      role: window.D$5$.roleName,
      level: window.D$5$.roleLevel,
      user: window.D$5$.account,
      version: window.D$5$.lastVersion,
      cdn: window.D$5$.cdn,
      pkgName: window.D$5$.pkgName,
      gamever: window.config.game_ver,
      serverid: window.D$5$.selectedServer ? window.D$5$.selectedServer.server_id : 0,
      systemInfo: window.systemInfo,
      error: "MiniProgramError",
      stack: error ? error.message : ""
    };
    var infostr = JSON.stringify(info);
    console.error("脚本错误：" + infostr);
    if (!window.lastError || window.lastError != info.error) {
      window.lastError = info.error;
      window.D$Q5(info);
    }
  }
});

import "ttfttt.js";
import "tt112tt.js";
window["Parser"] = require("ttparstt.js");
import "tINDtt.js";
import "ttLIB23tt.js";
import "tWXMtadtt.js";
import "ttINItt.js";

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
D$Q54$({ title: '正在加载' });

// 每个分包的图集不一样，采用传参形式
var D$HQ$45 = {
  D$HQ$54: true
};
new window.ServerLoading(D$HQ$45);
window.ServerLoading.instance.D$H45$Q();
if (window.D$HQ5$4) clearInterval(window.D$HQ5$4);
window.D$HQ5$4 = null;

//比较版本号
window.D$H4$Q5 = function (v1, v2) {
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

window.D$H4$5Q = function () {
  console.log("protobuf 分包加载");
  var D$H5Q4$ = wx.loadSubpackage({
    name: 'tpft',
    success: function (res) {
      console.log("protobuf 分包加载成功");
      console.log(res);
      if (res && res.errMsg == "loadSubpackage:ok") {
        window.D$$4 = true;
        window.D$$45Q();
        window.D$$5Q4();
      } else {
        setTimeout(function () {
          window.D$H4$5Q();
        }, 500);
      }
    },
    fail: function (res) {
      console.log("protobuf 分包加载失败");
      console.log(res);
      setTimeout(function () {
        window.D$H4$5Q();
      }, 500);
    }
  });
  D$H5Q4$ && D$H5Q4$.onProgressUpdate(res => {
    // console.log('protobuf 下载进度:' + res.progress + '%, 已经下载的数据长度', res.totalBytesWritten, '预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
  });
};
window.D$H5Q$4 = function () {
  console.log("Main 分包加载");
  var D$H54Q$ = wx.loadSubpackage({
    name: 'ttttttt',
    success: function (res) {
      console.log("Main 分包加载成功");
      console.log(res);
      if (res && res.errMsg == "loadSubpackage:ok") {
        window.D$54$ = true;
        window.D$$45Q();
        window.D$$5Q4();
      } else {
        setTimeout(function () {
          window.D$H5Q$4();
        }, 500);
      }
    },
    fail: function (res) {
      console.log("Main 分包加载失败");
      console.log(res);
      setTimeout(function () {
        window.D$H5Q$4();
      }, 500);
    }
  });
  D$H54Q$ && D$H54Q$.onProgressUpdate(res => {
    // console.log('Main 下载进度:' + res.progress + '%, 已经下载的数据长度', res.totalBytesWritten, '预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
  });
};

window.loadSubpackages = function () {
  if (window.D$H4$Q5(window.SDKVersion, '2.1.0') >= 0) {
    //分包wx.loadSubpackage：2.1.0，SDk的wx.createUserInfoButton：2.0.1
    console.log("微信基础库版本符合最低版本要求：" + window.SDKVersion + ">=2.1.0");
    window.D$5Q();
    window.D$H4$5Q();
    window.D$H5Q$4();
  } else {
    window.D$5$Q("微信基础库版本过低", window.SDKVersion);
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
    window.D$5$.wxIOS = system.indexOf("ios") != -1;
    window.D$5$.wxAndroid = system.indexOf("android") != -1;
    window.D$5$.wxPhone = system.indexOf("ios") != -1 || system.indexOf("android") != -1;
    window.D$5$.wxPC = system.indexOf("windows") != -1 || system.indexOf("mac") != -1;
    window.D$5$.wxPlatform = res.platform ? res.platform.toLowerCase() : "";
    window.D$5$.D$HQ4$5 = false; //model.indexOf("iphonex") != -1;
    window.D$5$.D$HQ54$ = 2;
    if (system.indexOf("android") != -1) {
      //android按设备等级
      if (res.benchmarkLevel >= 24) window.D$5$.D$HQ54$ = 3;else window.D$5$.D$HQ54$ = 2;
    } else if (system.indexOf("ios") != -1) {
      //ios按型号
      if (res.benchmarkLevel && res.benchmarkLevel >= 20) window.D$5$.D$HQ54$ = 3;else if (model.indexOf("iphone5") != -1 || model.indexOf("iphone6") != -1 || model.indexOf("iphone7") != -1 || model.indexOf("iphonese") != -1 || model.indexOf("ipad") != -1) window.D$5$.D$HQ54$ = 2;else window.D$5$.D$HQ54$ = 3;
    } else {
      //PC
      window.D$5$.D$HQ54$ = 2;
    }
    console.log("加载限制：" + window.D$5$.D$HQ4$5 + "，设备限制等级：" + window.D$5$.D$HQ54$);
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
  window.D$4Q = res;
  if (window.D$$Q4 && window.D$4Q) {
    console.info("小游戏切前台事件，场景值：" + window.D$4Q.scene);
    window.D$$Q4(window.D$4Q);
    window.D$4Q = null;
  }
});

// 内存警告相关，基础库 2.0.2 开始支持
window.memoryGCTime = 0;
window.D$H54$Q = 0;
window.onMemoryWarningCallBack = null;
wx.onMemoryWarning(function () {
  window.D$H54$Q++;
  var now = Date.now();
  if (window.memoryGCTime == 0 || now - window.memoryGCTime > 120000) {
    //2分钟
    console.warn('内存警告触发GC');
    wx.triggerGC(); //微信小游戏垃圾回收;
  }
  if (window.D$H54$Q >= 2) {
    window.D$H54$Q = 0;
    console.error('第二次内存警告');
    wx.reportMonitor('0', 1); //上报微信监控
    if (window.D$5$ && window.D$5$.wxIOS) window.D$5$Q("内存警告", "");
    if (onMemoryWarningCallBack) onMemoryWarningCallBack(); //游戏内画质设为“低”
  }
});