console.info("0 \u8fdb\u5165\u6e38\u620f\u5305"), window.lastError, wx.onError(function (e) {
  if (e) {
    if (e.message) {
      var o = window.config.game_ver.replace(new RegExp(/\./, "g"), "_");var n = e.message;var r = n.match(/(subPackage\/bbbgame.js:)[0-9]{1,60}(:)/g);if (r) for (var i = 0; i < r.length; i++) {
        var a = parseInt(r[i].replace("game.js:", "").replace(":", ""));n = n.replace(r[i], r[i].replace(":" + a + ":", ":" + (a - 2) + ":"));
      }n = (n = n.replace(new RegExp("game.js", "g"), "subPackage/main__" + o + ".min.js")).replace(new RegExp("lsjdflaamain.js", "g"), "subPackage/main__" + o + ".min.js"), e.message = n;
    }o = { id: window.PF_INFO.roleId, role: window.PF_INFO.roleName, level: window.PF_INFO.roleLevel, user: window.PF_INFO.account, version: window.PF_INFO.lastVersion, gamever: window.config.game_ver, cdn: window.PF_INFO.cdn, serverid: window.PF_INFO.selectedServer ? window.PF_INFO.selectedServer.server_id : 0, systemInfo: window.systemInfo, error: "MiniProgramError", stack: e ? e.message : "" };e = JSON.stringify(o);console.error("\u811a\u672c\u9519\u8bef\uff1a" + e), window.lastError && window.lastError == o.error || (window.lastError = o.error, window.clientlog(o));
  }
});import "bbbweasaf.js";import "bbbmd5min.js";import "bbbzlibs.js";window.Parser = require("bbbdomparser.js");import "bbbindex.js";import "bbblibsmin.js";import "bbbwxmini.js";import "bbbinitmin.js";console.info("1 \u521d\u59cb\u5316");const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");const verts = [1, -1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0];gl.clearColor(0, 0, 0, 0), gl.clear(gl.COLOR_BUFFER_BIT), gl.viewport(0, 0, canvas.width, canvas.height);var vrt_shader = gl.createShader(gl.VERTEX_SHADER);gl.shaderSource(vrt_shader, "attribute vec4 coords; void main() { gl_Position = coords; }"), gl.compileShader(vrt_shader);var fra_shader = gl.createShader(gl.FRAGMENT_SHADER);gl.shaderSource(fra_shader, "precision mediump float; void main() { gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); }"), gl.compileShader(fra_shader);var shaderProgram = gl.createProgram();gl.attachShader(shaderProgram, vrt_shader), gl.attachShader(shaderProgram, fra_shader), gl.linkProgram(shaderProgram), gl.useProgram(shaderProgram);var buffer = gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER, buffer), gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts), gl.STATIC_DRAW);var coords = gl.getAttribLocation(shaderProgram, "coords");function render() {
  gl.clearColor(0, 0, 0, 1), gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4), gl.flush();
}gl.vertexAttribPointer(coords, 3, gl.FLOAT, !1, 0, 0), gl.enableVertexAttribArray(coords), render(), window.loadingInterval = setInterval(function () {
  render();
}, 16), console.info("2 \u52a0\u8f7d\u6e38\u620f");var wxData = { showLoadingBtn: !0, bbblogin: { frames: { "btn_com_chuangback.png": { frame: { h: 60, idx: 0, w: 55, x: 552, y: 181 }, sourceSize: { h: 60, w: 55 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_login_gonggao.png": { frame: { h: 88, idx: 0, w: 80, x: 193, y: 260 }, sourceSize: { h: 88, w: 80 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_login_loginanniu.png": { frame: { h: 88, idx: 0, w: 506, x: 0, y: 100 }, sourceSize: { h: 88, w: 506 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_login_yingsi.png": { frame: { h: 88, idx: 0, w: 80, x: 0, y: 331 }, sourceSize: { h: 88, w: 80 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_xuanqu_anniuhuang.png": { frame: { h: 70, idx: 0, w: 192, x: 359, y: 189 }, sourceSize: { h: 70, w: 192 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_xuanqu_anniulan.png": { frame: { h: 70, idx: 0, w: 192, x: 0, y: 260 }, sourceSize: { h: 70, w: 192 }, spriteSourceSize: { x: 0, y: 0 } }, "btn_xuanqu_quanniu.png": { frame: { h: 70, idx: 0, w: 358, x: 0, y: 189 }, sourceSize: { h: 70, w: 358 }, spriteSourceSize: { x: 0, y: 0 } }, "image_com_tuichu.png": { frame: { h: 80, idx: 0, w: 80, x: 507, y: 100 }, sourceSize: { h: 146, w: 82 }, spriteSourceSize: { x: 1, y: 12 } }, "image_login_changtong.png": { frame: { h: 36, idx: 0, w: 36, x: 552, y: 242 }, sourceSize: { h: 36, w: 36 }, spriteSourceSize: { x: 0, y: 0 } }, "image_login_fanmang.png": { frame: { h: 36, idx: 0, w: 36, x: 81, y: 331 }, sourceSize: { h: 36, w: 36 }, spriteSourceSize: { x: 0, y: 0 } }, "image_login_weihu.png": { frame: { h: 36, idx: 0, w: 36, x: 118, y: 331 }, sourceSize: { h: 36, w: 36 }, spriteSourceSize: { x: 0, y: 0 } }, "image_login_xuanqubg.png": { frame: { h: 99, idx: 0, w: 580, x: 0, y: 0 }, sourceSize: { h: 137, w: 580 }, spriteSourceSize: { x: 0, y: 38 } } }, meta: { image: "bbblogin.png", prefix: "bbblogin/" } }, bbbloding: { frames: { "image_loding_bar0.png": { frame: { h: 27, idx: 0, w: 596, x: 0, y: 0 }, sourceSize: { h: 27, w: 596 }, spriteSourceSize: { x: 0, y: 0 } }, "image_loding_bar02.png": { frame: { h: 27, idx: 0, w: 596, x: 0, y: 28 }, sourceSize: { h: 27, w: 596 }, spriteSourceSize: { x: 0, y: 0 } }, "image_loding_bar1.png": { frame: { h: 25, idx: 0, w: 594, x: 0, y: 56 }, sourceSize: { h: 25, w: 594 }, spriteSourceSize: { x: 0, y: 0 } }, "image_loding_bar2.png": { frame: { h: 11, idx: 0, w: 208, x: 0, y: 199 }, sourceSize: { h: 11, w: 208 }, spriteSourceSize: { x: 0, y: 0 } }, "image_loding_bar3.png": { frame: { h: 116, idx: 0, w: 39, x: 0, y: 82 }, sourceSize: { h: 116, w: 39 }, spriteSourceSize: { x: 0, y: 0 } }, "image_login_point1.png": { frame: { h: 13, idx: 0, w: 13, x: 595, y: 56 }, sourceSize: { h: 17, w: 17 }, spriteSourceSize: { x: 2, y: 2 } }, "image_login_point2.png": { frame: { h: 17, idx: 0, w: 17, x: 40, y: 82 }, sourceSize: { h: 17, w: 17 }, spriteSourceSize: { x: 0, y: 0 } }, "image_login_point3.png": { frame: { h: 13, idx: 0, w: 13, x: 595, y: 70 }, sourceSize: { h: 17, w: 17 }, spriteSourceSize: { x: 2, y: 2 } } }, meta: { image: "bbbloding.png", prefix: "bbbloding/" } }, adga321: { frames: { "0.png": { frame: { h: 90, idx: 0, w: 217, x: 0, y: 0 }, sourceSize: { h: 111, w: 250 }, spriteSourceSize: { x: 17, y: 9 } }, "1.png": { frame: { h: 91, idx: 0, w: 219, x: 218, y: 0 }, sourceSize: { h: 111, w: 250 }, spriteSourceSize: { x: 16, y: 8 } }, "2.png": { frame: { h: 87, idx: 0, w: 222, x: 0, y: 92 }, sourceSize: { h: 111, w: 250 }, spriteSourceSize: { x: 15, y: 11 } }, "3.png": { frame: { h: 86, idx: 0, w: 221, x: 0, y: 180 }, sourceSize: { h: 111, w: 250 }, spriteSourceSize: { x: 15, y: 11 } }, "4.png": { frame: { h: 90, idx: 0, w: 215, x: 222, y: 180 }, sourceSize: { h: 111, w: 250 }, spriteSourceSize: { x: 18, y: 9 } } }, meta: { image: "adga321.png", prefix: "adga321/" } } };new window.ServerLoading(wxData), window.ServerLoading.instance.openAuthor(), window.loadingInterval && clearInterval(window.loadingInterval), window.loadingInterval = null, window.compareVersion = function (e, o) {
  if (!e || !o) return 0;e = e.split("."), o = o.split(".");var n = Math.max(e.length, o.length);for (; e.length < n;) e.push("0");for (; o.length < n;) o.push("0");for (var r = 0; r < n; r++) {
    var i = parseInt(e[r]),
        a = parseInt(o[r]);if (a < i) return 1;if (i < a) return -1;
  }return 0;
}, window.SDKVersion = wx.getSystemInfoSync().SDKVersion, console.log("\u5fae\u4fe1\u57fa\u7840\u5e93\u7248\u672c\uff1a" + window.SDKVersion);const updateManager = wx.getUpdateManager();updateManager.onCheckForUpdate(function (e) {
  console.log("\u662f\u5426\u6709\u65b0\u7248\u672c\uff1a" + e.hasUpdate);
}), updateManager.onUpdateReady(function () {
  wx.showModal({ title: "\u66f4\u65b0\u63d0\u793a", content: "\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u662f\u5426\u91cd\u542f\u5e94\u7528\uff1f", showCancel: !1, success: function (e) {
      updateManager.applyUpdate();
    } });
}), updateManager.onUpdateFailed(function () {
  console.log("\u65b0\u7248\u672c\u4e0b\u8f7d\u5931\u8d25 ");
}), window.loadProbuf = function () {
  console.log("protobuf \u5206\u5305\u52a0\u8f7d");var e = wx.loadSubpackage({ name: "bbbbbbf", success: function (e) {
      console.log("protobuf \u5206\u5305\u52a0\u8f7d\u6210\u529f"), console.log(e), e && "loadSubpackage:ok" == e.errMsg ? (window.loadProbPkg = !0, window.initMain(), window.enterToGame()) : setTimeout(function () {
        window.loadProbuf();
      }, 500);
    }, fail: function (e) {
      console.log("protobuf \u5206\u5305\u52a0\u8f7d\u5931\u8d25"), console.log(e), setTimeout(function () {
        window.loadProbuf();
      }, 500);
    } });e && e.onProgressUpdate(e => {});
}, window.loadMain = function () {
  console.log("Main \u5206\u5305\u52a0\u8f7d");var e = wx.loadSubpackage({ name: "bbbbbbbbb", success: function (e) {
      console.log("Main \u5206\u5305\u52a0\u8f7d\u6210\u529f"), console.log(e), e && "loadSubpackage:ok" == e.errMsg ? (window.loadMainPkg = !0, window.initMain(), window.enterToGame()) : setTimeout(function () {
        window.loadMain();
      }, 500);
    }, fail: function (e) {
      console.log("Main \u5206\u5305\u52a0\u8f7d\u5931\u8d25"), console.log(e), setTimeout(function () {
        window.loadMain();
      }, 500);
    } });e && e.onProgressUpdate(e => {});
}, window.loadSubpackages = function () {
  0 <= window.compareVersion(window.SDKVersion, "2.1.0") ? (console.log("\u5fae\u4fe1\u57fa\u7840\u5e93\u7248\u672c\u7b26\u5408\u6700\u4f4e\u7248\u672c\u8981\u6c42\uff1a" + window.SDKVersion + ">=2.1.0"), window.sdkInit(), window.loadProbuf(), window.loadMain()) : (window.reqRecordInfo("\u5fae\u4fe1\u57fa\u7840\u5e93\u7248\u672c\u8fc7\u4f4e:" + window.SDKVersion), wx.showModal({ title: "\u63d0\u793a", content: "\u5f53\u524d\u5fae\u4fe1\u7248\u672c\u8fc7\u4f4e\uff0c\u65e0\u6cd5\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u8bf7\u5347\u7ea7\u5230\u6700\u65b0\u5fae\u4fe1\u7248\u672c\u540e\u91cd\u8bd5\u3002" }));
}, window.systemInfo = "", wx.getSystemInfo({ success(e) {
    window.systemInfo = "\u54c1\u724c\uff1a" + e.brand + "\uff0c\u578b\u53f7\uff1a" + e.model + "\uff0c\u5fae\u4fe1\u7248\u672c\u53f7\uff1a" + e.version + "\uff0c\u7cfb\u7edf\u53ca\u7248\u672c\uff1a" + e.system + "\uff0c\u5ba2\u6237\u7aef\u5e73\u53f0\uff1a" + e.platform + "\uff0c\u57fa\u7840\u5e93\u7248\u672c\uff1a" + e.SDKVersion + "\uff0c\u8bbe\u5907\u6027\u80fd\u7b49\u7ea7\uff1a" + e.benchmarkLevel, console.log(window.systemInfo), console.log("\u8bbe\u5907\u50cf\u7d20\u6bd4\uff1a" + e.pixelRatio + "\uff0c\u5c4f\u5e55\u5bbd\u5ea6\uff1a" + e.screenWidth + "\uff0c\u5c4f\u5e55\u9ad8\u5ea6\uff1a" + e.screenHeight + "\uff0c\u53ef\u4f7f\u7528\u7a97\u53e3\u5bbd\u5ea6\uff1a" + e.windowWidth + "\uff0c\u53ef\u4f7f\u7528\u7a97\u53e3\u9ad8\u5ea6\uff1a" + e.windowHeight + "\uff0c\u72b6\u6001\u680f\u7684\u9ad8\u5ea6\uff1a" + e.statusBarHeight + "\uff0c\u5b89\u5168\u533a\u57df\uff1a" + (e.safeArea ? e.safeArea.top + "," + e.safeArea.bottom + "," + e.safeArea.left + "," + e.safeArea.right : ""));var o = e.system ? e.system.toLowerCase() : "";var n = e.model ? e.model.toLowerCase().replace(" ", "") : "";window.PF_INFO.wxIOS = -1 != o.indexOf("ios"), window.PF_INFO.wxPhone = -1 != o.indexOf("ios") || -1 != o.indexOf("android"), window.PF_INFO.wxPC = -1 != o.indexOf("windows") || -1 != o.indexOf("mac"), window.PF_INFO.wxPlatform = e.platform ? e.platform.toLowerCase() : "", window.PF_INFO.wxLimitLoad = !1, -(window.PF_INFO.wxBenchmarkLevel = 1) != o.indexOf("android") ? 24 <= e.benchmarkLevel ? window.PF_INFO.wxBenchmarkLevel = 2 : window.PF_INFO.wxBenchmarkLevel = 1 : -1 == o.indexOf("ios") || !(e.benchmarkLevel && 20 <= e.benchmarkLevel || -1 == n.indexOf("iphone5") && -1 == n.indexOf("iphone6") && -1 == n.indexOf("iphone7") && -1 == n.indexOf("iphonese") && -1 == n.indexOf("ipad")) ? window.PF_INFO.wxBenchmarkLevel = 1 : window.PF_INFO.wxBenchmarkLevel = 2, console.log("\u52a0\u8f7d\u9650\u5236\uff1a" + window.PF_INFO.wxLimitLoad + "\uff0c\u8bbe\u5907\u9650\u5236\u7b49\u7ea7\uff1a" + window.PF_INFO.wxBenchmarkLevel);
  } }), wx.getBatteryInfo({ success: function (e) {
    console.log("\u7535\u91cf\uff1a" + e.level + "%\uff0c\u662f\u5426\u6b63\u5728\u5145\u7535\uff1a" + e.isCharging);
  } }), wx.getNetworkType({ success: function (e) {
    console.log("\u7f51\u7edc\u7c7b\u578b\uff1a" + e.networkType);
  } }), wx.setKeepScreenOn({ keepScreenOn: !0 }), wx.onNetworkStatusChange(function (e) {
  console.log("\u7f51\u7edc\u7c7b\u578b\uff1a" + e.networkType + "\uff0c\u662f\u5426\u6709\u7f51\u7edc\u8fde\u63a5\uff1a" + e.isConnected);
}), wx.onShow(function (e) {
  window.onShowData = e, window.onShowCallback && window.onShowData && (console.info("\u5c0f\u6e38\u620f\u5207\u524d\u53f0\u4e8b\u4ef6\uff0c\u573a\u666f\u503c\uff1a" + window.onShowData.scene), window.onShowCallback(window.onShowData), window.onShowData = null);
}), window.memoryWarningNum = 0, window.onMemoryWarningCallBack = null, wx.onMemoryWarning(function () {
  window.memoryWarningNum++, wx.triggerGC(), 2 <= window.memoryWarningNum && (window.memoryWarningNum = 0, console.error("\u7b2c\u4e8c\u6b21\u5185\u5b58\u8b66\u544a"), wx.reportMonitor("0", 1), window.PF_INFO && window.PF_INFO.wxIOS && window.reqRecordInfo("\u5185\u5b58\u8b66\u544a"), onMemoryWarningCallBack && onMemoryWarningCallBack());
});