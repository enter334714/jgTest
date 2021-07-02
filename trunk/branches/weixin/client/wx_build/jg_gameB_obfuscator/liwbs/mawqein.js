var $c = wx.$b;
console.info($c[5882]);

//监听小程序错误事件。如脚本错误或 API 调用报错等
window.lastError;
wx.onError(function (error) {
  if (error) {
    if (error.message) {
      var gamever = window.config.game_ver.replace(new RegExp(/\./, $c[5883]), $c[5884]);
      var message = error.message;
      var arr = message.match(/(subPackage\/game.js:)[0-9]{1,60}(:)/g);
      if (arr) {
        for (var i = 0; i < arr.length; i++) {
          //行数减2
          var line = parseInt(arr[i].replace($c[5885], "").replace($c[5886], ""));
          message = message.replace(arr[i], arr[i].replace($c[5887] + line + $c[5888], $c[5889] + (line - 2) + $c[5890]));
        }
      }
      message = message.replace(new RegExp($c[5891], $c[5892]), $c[5893] + gamever + $c[5894]);
      message = message.replace(new RegExp($c[5895], $c[5896]), $c[5897] + gamever + $c[5898]);
      error.message = message;
    }
    var info = {
      id: window.B_BC.roleId,
      role: window.B_BC.roleName,
      level: window.B_BC.roleLevel,
      user: window.B_BC.account,
      version: window.B_BC.lastVersion,
      gamever: window.config.game_ver,
      cdn: window.B_BC.cdn,
      serverid: window.B_BC.selectedServer ? window.B_BC.selectedServer.server_id : 0,
      B_HGF: window.B_HGF,
      error: error ? error.message : ""
    };
    var infostr = JSON.stringify(info);
    console.error($c[5899] + infostr);
    if (!window.lastError || window.lastError != info.error) {
      window.lastError = info.error;
      window.B_CDE(info);
    }
  }
});

import "wxadawew.js";
import "mdfive.js";
import "zipsjdwe.js";
window[$c[5900]] = require($c[5901]);
import "insdfdex.js";
import "liewfbs.js";
import "layawewwx.js";
import "intweol.js";

console.info($c[5902]);

//绘制白色背景
const gl = canvas.getContext($c[5903]) || canvas.getContext($c[5904]);
const verts = [1, -1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0];
gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.viewport(0, 0, canvas.width, canvas.height);
var vrt_shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vrt_shader, $c[5905]);
gl.compileShader(vrt_shader);
var fra_shader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fra_shader, $c[5906]);
gl.compileShader(fra_shader);

var shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vrt_shader);
gl.attachShader(shaderProgram, fra_shader);
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);

var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);
var coords = gl.getAttribLocation(shaderProgram, $c[5907]);
gl.vertexAttribPointer(coords, 3, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(coords);

function render() {
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  gl.flush();
}
render();
window.B_GI = setInterval(function () {
  render();
}, 16);
console.info($c[5908]);

B_BCD({ title: $c[5909] });

// 每个分包的图集不一样，采用传参形式
var B_IG = {
  B_HGI: true,
  B_HIG: { "frames": { "btn_com_chuangback.png": { "frame": { "h": 60, "idx": 0, "w": 55, "x": 193, "y": 253 }, "sourceSize": { "h": 60, "w": 55 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "btn_login_gonggao.png": { "frame": { "h": 87, "idx": 0, "w": 80, "x": 520, "y": 182 }, "sourceSize": { "h": 88, "w": 80 }, "spriteSourceSize": { "x": 0, "y": 1 } }, "btn_login_loginanniu.png": { "frame": { "h": 80, "idx": 0, "w": 245, "x": 0, "y": 111 }, "sourceSize": { "h": 88, "w": 506 }, "spriteSourceSize": { "x": 131, "y": 4 } }, "btn_login_yingsi.png": { "frame": { "h": 87, "idx": 0, "w": 80, "x": 520, "y": 270 }, "sourceSize": { "h": 88, "w": 80 }, "spriteSourceSize": { "x": 0, "y": 1 } }, "btn_xuanqu_anniuhuang.png": { "frame": { "h": 70, "idx": 0, "w": 192, "x": 246, "y": 182 }, "sourceSize": { "h": 70, "w": 192 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "btn_xuanqu_anniulan.png": { "frame": { "h": 70, "idx": 0, "w": 192, "x": 0, "y": 192 }, "sourceSize": { "h": 70, "w": 192 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "btn_xuanqu_quanniu.png": { "frame": { "h": 70, "idx": 0, "w": 358, "x": 246, "y": 111 }, "sourceSize": { "h": 70, "w": 358 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_com_tuichu.png": { "frame": { "h": 145, "idx": 0, "w": 80, "x": 439, "y": 182 }, "sourceSize": { "h": 146, "w": 82 }, "spriteSourceSize": { "x": 1, "y": 1 } }, "image_login_changtong.png": { "frame": { "h": 36, "idx": 0, "w": 36, "x": 193, "y": 192 }, "sourceSize": { "h": 36, "w": 36 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_login_fanmang.png": { "frame": { "h": 36, "idx": 0, "w": 36, "x": 0, "y": 263 }, "sourceSize": { "h": 36, "w": 36 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_login_weihu.png": { "frame": { "h": 36, "idx": 0, "w": 36, "x": 37, "y": 263 }, "sourceSize": { "h": 36, "w": 36 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_login_xuanqubg.png": { "frame": { "h": 110, "idx": 0, "w": 580, "x": 0, "y": 0 }, "sourceSize": { "h": 152, "w": 580 }, "spriteSourceSize": { "x": 0, "y": 42 } } }, "meta": { "image": $c[5910], "prefix": $c[5911] } },
  B_IGH: { "frames": { "image_loding_bar0.png": { "frame": { "h": 27, "idx": 0, "w": 596, "x": 0, "y": 0 }, "sourceSize": { "h": 27, "w": 596 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_loding_bar02.png": { "frame": { "h": 27, "idx": 0, "w": 596, "x": 0, "y": 28 }, "sourceSize": { "h": 27, "w": 596 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_loding_bar1.png": { "frame": { "h": 25, "idx": 0, "w": 594, "x": 0, "y": 56 }, "sourceSize": { "h": 25, "w": 594 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_loding_bar2.png": { "frame": { "h": 11, "idx": 0, "w": 208, "x": 0, "y": 199 }, "sourceSize": { "h": 11, "w": 208 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_loding_bar3.png": { "frame": { "h": 116, "idx": 0, "w": 39, "x": 0, "y": 82 }, "sourceSize": { "h": 116, "w": 39 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_login_point1.png": { "frame": { "h": 13, "idx": 0, "w": 13, "x": 595, "y": 56 }, "sourceSize": { "h": 17, "w": 17 }, "spriteSourceSize": { "x": 2, "y": 2 } }, "image_login_point2.png": { "frame": { "h": 17, "idx": 0, "w": 17, "x": 40, "y": 82 }, "sourceSize": { "h": 17, "w": 17 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_login_point3.png": { "frame": { "h": 13, "idx": 0, "w": 13, "x": 595, "y": 70 }, "sourceSize": { "h": 17, "w": 17 }, "spriteSourceSize": { "x": 2, "y": 2 } } }, "meta": { "image": $c[5912], "prefix": $c[5913] } },
  B_IHG: { "frames": { "0.png": { "frame": { "h": 90, "idx": 0, "w": 217, "x": 0, "y": 0 }, "sourceSize": { "h": 111, "w": 250 }, "spriteSourceSize": { "x": 17, "y": 9 } }, "1.png": { "frame": { "h": 91, "idx": 0, "w": 219, "x": 218, "y": 0 }, "sourceSize": { "h": 111, "w": 250 }, "spriteSourceSize": { "x": 16, "y": 8 } }, "2.png": { "frame": { "h": 87, "idx": 0, "w": 222, "x": 0, "y": 92 }, "sourceSize": { "h": 111, "w": 250 }, "spriteSourceSize": { "x": 15, "y": 11 } }, "3.png": { "frame": { "h": 86, "idx": 0, "w": 221, "x": 0, "y": 180 }, "sourceSize": { "h": 111, "w": 250 }, "spriteSourceSize": { "x": 15, "y": 11 } }, "4.png": { "frame": { "h": 90, "idx": 0, "w": 215, "x": 222, "y": 180 }, "sourceSize": { "h": 111, "w": 250 }, "spriteSourceSize": { "x": 18, "y": 9 } } }, "meta": { "image": $c[5914], "prefix": $c[5915] } }
};
new window.ServerLoading(B_IG);
window.ServerLoading.instance.B_IJ();
if (window.B_GI) clearInterval(window.B_GI);
window.B_GI = null;

//比较版本号
window.B_JI = function (v1, v2) {
  if (!v1 || !v2) return 0;
  v1 = v1.split($c[5916]);v2 = v2.split($c[5917]);
  const len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push($c[5918]);
  }
  while (v2.length < len) {
    v2.push($c[5919]);
  }
  for (var i = 0; i < len; i++) {
    const num1 = parseInt(v1[i]),
          num2 = parseInt(v2[i]);
    if (num1 > num2) return 1;else if (num1 < num2) return -1;
  }
  return 0;
};

window.SDKVersion = wx.getSystemInfoSync().SDKVersion;
console.log($c[5920] + window.SDKVersion);

// 版本更新相关，基础库 1.9.90 开始支持
const updateManager = wx.getUpdateManager();
updateManager.onCheckForUpdate(function (res) {
  console.log($c[5921] + res.hasUpdate);
});
updateManager.onUpdateReady(function () {
  wx.showModal({
    title: $c[5922],
    content: $c[5923],
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
  console.log($c[5924]);
});

window.B_HIJ = function () {
  console.log($c[5925]);
  var loadLibsTask = wx.loadSubpackage({
    name: $c[5926],
    success: function (res) {
      console.log($c[5927]);
      console.log(res);
      if (res && res.errMsg == $c[5928]) {
        window.B_CA = true;
        window.B_GHF();
        window.B_HFG();
      } else {
        setTimeout(function () {
          window.B_HIJ();
        }, 500);
      }
    },
    fail: function (res) {
      console.log($c[5929]);
      console.log(res);
      setTimeout(function () {
        window.B_HIJ();
      }, 500);
    }
  });
  loadLibsTask && loadLibsTask.onProgressUpdate(res => {
    // console.log('protobuf 下载进度:' + res.progress + '%, 已经下载的数据长度', res.totalBytesWritten, '预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
  });
};
window.B_HJ = function () {
  console.log($c[5930]);
  var B_JH = wx.loadSubpackage({
    name: $c[5931],
    success: function (res) {
      console.log($c[5932]);
      console.log(res);
      if (res && res.errMsg == $c[5933]) {
        window.B_BAC = true;
        window.B_GHF();
        window.B_HFG();
      } else {
        setTimeout(function () {
          window.B_HJ();
        }, 500);
      }
    },
    fail: function (res) {
      console.log($c[5934]);
      console.log(res);
      setTimeout(function () {
        window.B_HJ();
      }, 500);
    }
  });
  B_JH && B_JH.onProgressUpdate(res => {
    // console.log('Main 下载进度:' + res.progress + '%, 已经下载的数据长度', res.totalBytesWritten, '预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
  });
};

window.loadSubpackages = function () {
  if (window.B_JI(window.SDKVersion, $c[5935]) >= 0) {
    //分包wx.loadSubpackage：2.1.0，SDk的wx.createUserInfoButton：2.0.1
    console.log($c[5936] + window.SDKVersion + $c[5937]);
    // wxShowLoading({ title: '正在加载游戏' });
    window.B_CED();
    window.B_HIJ();
    window.B_HJ();
  } else {
    window.B_ED($c[5938] + window.SDKVersion);
    wx.showModal({
      title: $c[5939],
      content: $c[5940]
    });
  }
};

//获取系统信息
window.B_HGF = "";
wx.getSystemInfo({
  success(res) {
    window.B_HGF = $c[5941] + res.brand + $c[5942] + res.model + $c[5943] + res.version + $c[5944] + res.system + $c[5945] + res.platform + $c[5946] + res.SDKVersion + $c[5947] + res.benchmarkLevel;
    console.log(window.B_HGF);
    console.log($c[5948] + res.pixelRatio + $c[5949] + res.screenWidth + $c[5950] + res.screenHeight + $c[5951] + res.windowWidth + $c[5952] + res.windowHeight + $c[5953] + res.statusBarHeight + $c[5954] + (res.safeArea ? res.safeArea.top + $c[5955] + res.safeArea.bottom + $c[5956] + res.safeArea.left + $c[5957] + res.safeArea.right : ""));

    var system = res.system ? res.system.toLowerCase() : "";
    var model = res.model ? res.model.toLowerCase().replace($c[5958], "") : "";
    window.B_BC.wxIOS = system.indexOf($c[5959]) != -1;
    window.B_BC.wxPhone = system.indexOf($c[5960]) != -1 || system.indexOf($c[5961]) != -1;
    window.B_BC.wxPC = system.indexOf($c[5962]) != -1 || system.indexOf($c[5963]) != -1;
    window.B_BC.wxPlatform = res.platform ? res.platform.toLowerCase() : "";
    window.B_BC.B_GHI = false; //model.indexOf("iphonex") != -1;
    window.B_BC.B_GIH = 1;
    if (system.indexOf($c[5964]) != -1) {
      //android按设备等级
      if (res.benchmarkLevel >= 24) window.B_BC.B_GIH = 2;else window.B_BC.B_GIH = 1;
    } else if (system.indexOf($c[5965]) != -1) {
      //ios按型号
      if (res.benchmarkLevel && res.benchmarkLevel >= 20) window.B_BC.B_GIH = 2;else if (model.indexOf($c[5966]) != -1 || model.indexOf($c[5967]) != -1 || model.indexOf($c[5968]) != -1 || model.indexOf($c[5969]) != -1 || model.indexOf($c[5970]) != -1) window.B_BC.B_GIH = 1;else window.B_BC.B_GIH = 2;
    } else {
      //PC
      window.B_BC.B_GIH = 1;
    }
    console.log($c[5971] + window.B_BC.B_GHI + $c[5972] + window.B_BC.B_GIH);
  }
});
//获取设备电量
wx.getBatteryInfo({
  success: function (res) {
    console.log($c[5973] + res.level + $c[5974] + res.isCharging);
  }
});
//获取网络类型
wx.getNetworkType({
  success: function (res) {
    console.log($c[5975] + res.networkType);
  }
});
//设置是否保持常亮状态，基础库 1.4.0 开始支持。仅在当前小程序生效，离开小程序后设置失效。
wx.setKeepScreenOn({
  keepScreenOn: true
});
//监听网络状态变化事件，基础库 1.1.0 开始支持
wx.onNetworkStatusChange(function (res) {
  console.log($c[5976] + res.networkType + $c[5977] + res.isConnected);
});
//监听小游戏切前台事件
wx.onShow(function (res) {
  window.B_FED = res;
  if (window.B_FG && window.B_FED) {
    console.info($c[5978] + window.B_FED.scene);
    window.B_FG(window.B_FED);
    window.B_FED = null;
  }
});

// 内存警告相关，基础库 2.0.2 开始支持
window.B_IHJ = 0;
window.onMemoryWarningCallBack = null;
wx.onMemoryWarning(function () {

  window.B_IHJ++;
  wx.triggerGC(); //微信小游戏垃圾回收;
  if (window.B_IHJ >= 2) {
    window.B_IHJ = 0;
    console.error($c[5979]);
    wx.reportMonitor($c[5980], 1); //上报微信监控
    if (window.B_BC && window.B_BC.wxIOS) window.B_ED($c[5981]);
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