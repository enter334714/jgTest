var $c = wx.$b;
console.info($c[0]);

//监听小程序错误事件。如脚本错误或 API 调用报错等
window.lastError;
wx.onError(function (error) {
  if (error) {
    if (error.message) {
      var gamever = window.config.game_ver.replace(new RegExp(/\./, $c[1]), $c[2]);
      var message = error.message;
      var arr = message.match(/(subPackage\/game.js:)[0-9]{1,60}(:)/g);
      if (arr) {
        for (var i = 0; i < arr.length; i++) {
          //行数减2
          var line = parseInt(arr[i].replace($c[3], "").replace($c[4], ""));
          message = message.replace(arr[i], arr[i].replace($c[5] + line + $c[6], $c[7] + (line - 2) + $c[8]));
        }
      }
      message = message.replace(new RegExp($c[9], $c[10]), $c[11] + gamever + $c[12]);
      message = message.replace(new RegExp($c[13], $c[14]), $c[15] + gamever + $c[16]);
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
    console.error($c[17] + infostr);
    if (!window.lastError || window.lastError != info.error) {
      window.lastError = info.error;
      window.B_CDE(info);
    }
  }
});

import "libs/weapp-adapter.js";
import "libs/md5.min.js";
import "libs/zlib.js";
window[$c[18]] = require($c[19]);
import "index.js";
import "libs/libs.min.js";
import "libs/laya.wxmini.js";
import "init.min.js";

console.info($c[20]);

//绘制白色背景
const gl = canvas.getContext($c[21]) || canvas.getContext($c[22]);
const verts = [1, -1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0];
gl.clearColor(0, 0, 0, 0);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.viewport(0, 0, canvas.width, canvas.height);
var vrt_shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vrt_shader, $c[23]);
gl.compileShader(vrt_shader);
var fra_shader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fra_shader, $c[24]);
gl.compileShader(fra_shader);

var shaderProgram = gl.createProgram();
gl.attachShader(shaderProgram, vrt_shader);
gl.attachShader(shaderProgram, fra_shader);
gl.linkProgram(shaderProgram);
gl.useProgram(shaderProgram);

var buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);
var coords = gl.getAttribLocation(shaderProgram, $c[25]);
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
console.info($c[26]);

B_BCD({ title: $c[27] });

// 每个分包的图集不一样，采用传参形式
var B_IG = {
  B_HGI: true,
  B_HIG: { "frames": { "btn_com_chuangback.png": { "frame": { "h": 60, "idx": 0, "w": 55, "x": 193, "y": 253 }, "sourceSize": { "h": 60, "w": 55 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "btn_login_gonggao.png": { "frame": { "h": 87, "idx": 0, "w": 80, "x": 520, "y": 182 }, "sourceSize": { "h": 88, "w": 80 }, "spriteSourceSize": { "x": 0, "y": 1 } }, "btn_login_loginanniu.png": { "frame": { "h": 80, "idx": 0, "w": 245, "x": 0, "y": 111 }, "sourceSize": { "h": 88, "w": 506 }, "spriteSourceSize": { "x": 131, "y": 4 } }, "btn_login_yingsi.png": { "frame": { "h": 87, "idx": 0, "w": 80, "x": 520, "y": 270 }, "sourceSize": { "h": 88, "w": 80 }, "spriteSourceSize": { "x": 0, "y": 1 } }, "btn_xuanqu_anniuhuang.png": { "frame": { "h": 70, "idx": 0, "w": 192, "x": 246, "y": 182 }, "sourceSize": { "h": 70, "w": 192 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "btn_xuanqu_anniulan.png": { "frame": { "h": 70, "idx": 0, "w": 192, "x": 0, "y": 192 }, "sourceSize": { "h": 70, "w": 192 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "btn_xuanqu_quanniu.png": { "frame": { "h": 70, "idx": 0, "w": 358, "x": 246, "y": 111 }, "sourceSize": { "h": 70, "w": 358 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_com_tuichu.png": { "frame": { "h": 145, "idx": 0, "w": 80, "x": 439, "y": 182 }, "sourceSize": { "h": 146, "w": 82 }, "spriteSourceSize": { "x": 1, "y": 1 } }, "image_login_changtong.png": { "frame": { "h": 36, "idx": 0, "w": 36, "x": 193, "y": 192 }, "sourceSize": { "h": 36, "w": 36 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_login_fanmang.png": { "frame": { "h": 36, "idx": 0, "w": 36, "x": 0, "y": 263 }, "sourceSize": { "h": 36, "w": 36 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_login_weihu.png": { "frame": { "h": 36, "idx": 0, "w": 36, "x": 37, "y": 263 }, "sourceSize": { "h": 36, "w": 36 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_login_xuanqubg.png": { "frame": { "h": 110, "idx": 0, "w": 580, "x": 0, "y": 0 }, "sourceSize": { "h": 152, "w": 580 }, "spriteSourceSize": { "x": 0, "y": 42 } } }, "meta": { "image": $c[28], "prefix": $c[29] } },
  B_IGH: { "frames": { "image_loding_bar0.png": { "frame": { "h": 27, "idx": 0, "w": 596, "x": 0, "y": 0 }, "sourceSize": { "h": 27, "w": 596 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_loding_bar02.png": { "frame": { "h": 27, "idx": 0, "w": 596, "x": 0, "y": 28 }, "sourceSize": { "h": 27, "w": 596 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_loding_bar1.png": { "frame": { "h": 25, "idx": 0, "w": 594, "x": 0, "y": 56 }, "sourceSize": { "h": 25, "w": 594 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_loding_bar2.png": { "frame": { "h": 11, "idx": 0, "w": 208, "x": 0, "y": 199 }, "sourceSize": { "h": 11, "w": 208 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_loding_bar3.png": { "frame": { "h": 116, "idx": 0, "w": 39, "x": 0, "y": 82 }, "sourceSize": { "h": 116, "w": 39 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_login_point1.png": { "frame": { "h": 13, "idx": 0, "w": 13, "x": 595, "y": 56 }, "sourceSize": { "h": 17, "w": 17 }, "spriteSourceSize": { "x": 2, "y": 2 } }, "image_login_point2.png": { "frame": { "h": 17, "idx": 0, "w": 17, "x": 40, "y": 82 }, "sourceSize": { "h": 17, "w": 17 }, "spriteSourceSize": { "x": 0, "y": 0 } }, "image_login_point3.png": { "frame": { "h": 13, "idx": 0, "w": 13, "x": 595, "y": 70 }, "sourceSize": { "h": 17, "w": 17 }, "spriteSourceSize": { "x": 2, "y": 2 } } }, "meta": { "image": $c[30], "prefix": $c[31] } },
  B_IHG: { "frames": { "0.png": { "frame": { "h": 90, "idx": 0, "w": 217, "x": 0, "y": 0 }, "sourceSize": { "h": 111, "w": 250 }, "spriteSourceSize": { "x": 17, "y": 9 } }, "1.png": { "frame": { "h": 91, "idx": 0, "w": 219, "x": 218, "y": 0 }, "sourceSize": { "h": 111, "w": 250 }, "spriteSourceSize": { "x": 16, "y": 8 } }, "2.png": { "frame": { "h": 87, "idx": 0, "w": 222, "x": 0, "y": 92 }, "sourceSize": { "h": 111, "w": 250 }, "spriteSourceSize": { "x": 15, "y": 11 } }, "3.png": { "frame": { "h": 86, "idx": 0, "w": 221, "x": 0, "y": 180 }, "sourceSize": { "h": 111, "w": 250 }, "spriteSourceSize": { "x": 15, "y": 11 } }, "4.png": { "frame": { "h": 90, "idx": 0, "w": 215, "x": 222, "y": 180 }, "sourceSize": { "h": 111, "w": 250 }, "spriteSourceSize": { "x": 18, "y": 9 } } }, "meta": { "image": $c[32], "prefix": $c[33] } }
};
new window.ServerLoading(B_IG);
window.ServerLoading.instance.B_IJ();
if (window.B_GI) clearInterval(window.B_GI);
window.B_GI = null;

//比较版本号
window.B_JI = function (v1, v2) {
  if (!v1 || !v2) return 0;
  v1 = v1.split($c[34]);v2 = v2.split($c[35]);
  const len = Math.max(v1.length, v2.length);
  while (v1.length < len) {
    v1.push($c[36]);
  }
  while (v2.length < len) {
    v2.push($c[37]);
  }
  for (var i = 0; i < len; i++) {
    const num1 = parseInt(v1[i]),
          num2 = parseInt(v2[i]);
    if (num1 > num2) return 1;else if (num1 < num2) return -1;
  }
  return 0;
};

window.SDKVersion = wx.getSystemInfoSync().SDKVersion;
console.log($c[38] + window.SDKVersion);

// 版本更新相关，基础库 1.9.90 开始支持
const updateManager = wx.getUpdateManager();
updateManager.onCheckForUpdate(function (res) {
  console.log($c[39] + res.hasUpdate);
});
updateManager.onUpdateReady(function () {
  wx.showModal({
    title: $c[40],
    content: $c[41],
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
  console.log($c[42]);
});

window.B_HIJ = function () {
  console.log($c[43]);
  var loadLibsTask = wx.loadSubpackage({
    name: $c[44],
    success: function (res) {
      console.log($c[45]);
      console.log(res);
      if (res && res.errMsg == $c[46]) {
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
      console.log($c[47]);
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
  console.log($c[48]);
  var B_JH = wx.loadSubpackage({
    name: $c[49],
    success: function (res) {
      console.log($c[50]);
      console.log(res);
      if (res && res.errMsg == $c[51]) {
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
      console.log($c[52]);
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
  if (window.B_JI(window.SDKVersion, $c[53]) >= 0) {
    //分包wx.loadSubpackage：2.1.0，SDk的wx.createUserInfoButton：2.0.1
    console.log($c[54] + window.SDKVersion + $c[55]);
    // wxShowLoading({ title: '正在加载游戏' });
    window.B_CED();
    window.B_HIJ();
    window.B_HJ();
  } else {
    window.B_ED($c[56] + window.SDKVersion);
    wx.showModal({
      title: $c[57],
      content: $c[58]
    });
  }
};

window.loadSubpackages = function () {
  if (window.B_JI(window.SDKVersion, $c[59]) >= 0) {
    //分包wx.loadSubpackage：2.1.0，SDk的wx.createUserInfoButton：2.0.1
    console.log($c[60] + window.SDKVersion + $c[61]);
    // wxShowLoading({ title: '正在加载游戏' });
    window.B_CED();
    window.B_HIJ();
    window.B_HJ();
  } else {
    window.B_ED($c[62] + window.SDKVersion);
    wx.showModal({
      title: $c[63],
      content: $c[64]
    });
  }
};

//获取系统信息
window.B_HGF = "";
wx.getSystemInfo({
  success(res) {
    window.B_HGF = $c[65] + res.brand + $c[66] + res.model + $c[67] + res.version + $c[68] + res.system + $c[69] + res.platform + $c[70] + res.SDKVersion + $c[71] + res.benchmarkLevel;
    console.log(window.B_HGF);
    console.log($c[72] + res.pixelRatio + $c[73] + res.screenWidth + $c[74] + res.screenHeight + $c[75] + res.windowWidth + $c[76] + res.windowHeight + $c[77] + res.statusBarHeight + $c[78] + (res.safeArea ? res.safeArea.top + $c[79] + res.safeArea.bottom + $c[80] + res.safeArea.left + $c[81] + res.safeArea.right : ""));

    var system = res.system ? res.system.toLowerCase() : "";
    var model = res.model ? res.model.toLowerCase().replace($c[82], "") : "";
    window.B_BC.wxIOS = system.indexOf($c[83]) != -1;
    window.B_BC.wxPhone = system.indexOf($c[84]) != -1 || system.indexOf($c[85]) != -1;
    window.B_BC.wxPC = system.indexOf($c[86]) != -1 || system.indexOf($c[87]) != -1;
    window.B_BC.wxPlatform = res.platform ? res.platform.toLowerCase() : "";
    window.B_BC.B_GHI = false; //model.indexOf("iphonex") != -1;
    window.B_BC.B_GIH = 1;
    if (system.indexOf($c[88]) != -1) {
      //android按设备等级
      if (res.benchmarkLevel >= 24) window.B_BC.B_GIH = 2;else window.B_BC.B_GIH = 1;
    } else if (system.indexOf($c[89]) != -1) {
      //ios按型号
      if (res.benchmarkLevel && res.benchmarkLevel >= 20) window.B_BC.B_GIH = 2;else if (model.indexOf($c[90]) != -1 || model.indexOf($c[91]) != -1 || model.indexOf($c[92]) != -1 || model.indexOf($c[93]) != -1 || model.indexOf($c[94]) != -1) window.B_BC.B_GIH = 1;else window.B_BC.B_GIH = 2;
    } else {
      //PC
      window.B_BC.B_GIH = 1;
    }
    console.log($c[95] + window.B_BC.B_GHI + $c[96] + window.B_BC.B_GIH);
  }
});
//获取设备电量
wx.getBatteryInfo({
  success: function (res) {
    console.log($c[97] + res.level + $c[98] + res.isCharging);
  }
});
//获取网络类型
wx.getNetworkType({
  success: function (res) {
    console.log($c[99] + res.networkType);
  }
});
//设置是否保持常亮状态，基础库 1.4.0 开始支持。仅在当前小程序生效，离开小程序后设置失效。
wx.setKeepScreenOn({
  keepScreenOn: true
});
//监听网络状态变化事件，基础库 1.1.0 开始支持
wx.onNetworkStatusChange(function (res) {
  console.log($c[100] + res.networkType + $c[101] + res.isConnected);
});
//监听小游戏切前台事件
wx.onShow(function (res) {
  window.B_FED = res;
  if (window.B_FG && window.B_FED) {
    console.info($c[102] + window.B_FED.scene);
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
    console.error($c[103]);
    wx.reportMonitor($c[104], 1); //上报微信监控
    if (window.B_BC && window.B_BC.wxIOS) window.B_ED($c[105]);
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