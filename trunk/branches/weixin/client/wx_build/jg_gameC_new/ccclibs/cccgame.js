console.info("0 \u8fdb\u5165\u6e38\u620f\u5305"), window.lastError, wx.onError(function (o) {
  if (o) {
    if (o.message) {
      var n = window.config.game_ver.replace(new RegExp(/\./, "g"), "_");var e = o.message;var i = e.match(/(cccccccc\/cccgame.js:)[0-9]{1,60}(:)/g);if (i) for (var w = 0; w < i.length; w++) {
        var c;i[w] && 0 < i[w].length && (c = parseInt(i[w].replace("cccccccc/cccgame.js:", "").replace(":", "")), e = e.replace(i[w], i[w].replace(":" + c + ":", ":" + (c - 2) + ":")));
      }e = (e = e.replace(new RegExp("cccccccc/cccgame.js", "g"), "cccccccc/main__" + n + ".min.js")).replace(new RegExp("cccccccc/ccccccccmain.js", "g"), "cccccccc/main__" + n + ".min.js"), o.message = e;
    }n = { id: window.PF_INFO.roleId, role: window.PF_INFO.roleName, level: window.PF_INFO.roleLevel, user: window.PF_INFO.account, version: window.PF_INFO.lastVersion, gamever: window.config.game_ver, cdn: window.PF_INFO.cdn, serverid: window.PF_INFO.selectedServer ? window.PF_INFO.selectedServer.server_id : 0, systemInfo: window.systemInfo, error: "MiniProgramError", stack: o ? o.message : "" };o = JSON.stringify(n);console.error("\u811a\u672c\u9519\u8bef\uff1a" + o), window.lastError && window.lastError == n.error || (window.lastError = n.error, window.clientlog(n));
  }
});import "cccmd5min.js";import "ccczlibs.js";window.Parser = require("cccdomparser.js");import "cccindex.js";import "ccclibsmin.js";import "cccwxmini.js";import "cccinitmin.js";console.info("1 \u521d\u59cb\u5316"), console.info("2 \u52a0\u8f7d\u6e38\u620f"), wxShowLoading({ title: "\u6b63\u5728\u52a0\u8f7d" });var wxData = { showLoadingBtn: !0 };new window.ServerLoading(wxData), window.ServerLoading.instance.openAuthor(), window.loadingInterval && clearInterval(window.loadingInterval), window.loadingInterval = null, window.compareVersion = function (o, n) {
  if (!o || !n) return 0;o = o.split("."), n = n.split(".");var e = Math.max(o.length, n.length);for (; o.length < e;) o.push("0");for (; n.length < e;) n.push("0");for (var i = 0; i < e; i++) {
    var w = parseInt(o[i]),
        c = parseInt(n[i]);if (c < w) return 1;if (w < c) return -1;
  }return 0;
}, window.SDKVersion = wx.getSystemInfoSync().SDKVersion, console.log("\u5fae\u4fe1\u57fa\u7840\u5e93\u7248\u672c\uff1a" + window.SDKVersion);var updateManager = wx.getUpdateManager();updateManager.onCheckForUpdate(function (o) {
  console.log("\u662f\u5426\u6709\u65b0\u7248\u672c\uff1a" + o.hasUpdate);
}), updateManager.onUpdateReady(function () {
  wx.showModal({ title: "\u66f4\u65b0\u63d0\u793a", content: "\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u662f\u5426\u91cd\u542f\u5e94\u7528\uff1f", showCancel: !1, success: function (o) {
      updateManager.applyUpdate();
    } });
}), updateManager.onUpdateFailed(function () {
  console.log("\u65b0\u7248\u672c\u4e0b\u8f7d\u5931\u8d25 ");
}), window.loadProbuf = function () {
  console.log("protobuf \u5206\u5305\u52a0\u8f7d");var o = wx.loadSubpackage({ name: cccccf, success: function (o) {
      console.log("protobuf \u5206\u5305\u52a0\u8f7d\u6210\u529f"), console.log(o), o && "loadSubpackage:ok" == o.errMsg ? (window.loadProbPkg = !0, window.initMain(), window.enterToGame()) : setTimeout(function () {
        window.loadProbuf();
      }, 500);
    }, fail: function (o) {
      console.log("protobuf \u5206\u5305\u52a0\u8f7d\u5931\u8d25"), console.log(o), setTimeout(function () {
        window.loadProbuf();
      }, 500);
    } });o && o.onProgressUpdate(o => {});
}, window.loadMain = function () {
  console.log("Main \u5206\u5305\u52a0\u8f7d");var o = wx.loadSubpackage({ name: cccccccc, success: function (o) {
      console.log("Main \u5206\u5305\u52a0\u8f7d\u6210\u529f"), console.log(o), o && "loadSubpackage:ok" == o.errMsg ? (window.loadMainPkg = !0, window.initMain(), window.enterToGame()) : setTimeout(function () {
        window.loadMain();
      }, 500);
    }, fail: function (o) {
      console.log("Main \u5206\u5305\u52a0\u8f7d\u5931\u8d25"), console.log(o), setTimeout(function () {
        window.loadMain();
      }, 500);
    } });o && o.onProgressUpdate(o => {});
}, window.loadSubpackages = function () {
  0 <= window.compareVersion(window.SDKVersion, "2.1.0") ? (console.log("\u5fae\u4fe1\u57fa\u7840\u5e93\u7248\u672c\u7b26\u5408\u6700\u4f4e\u7248\u672c\u8981\u6c42\uff1a" + window.SDKVersion + ">=2.1.0"), window.sdkInit(), window.loadProbuf(), window.loadMain()) : (window.reqRecordInfo("\u5fae\u4fe1\u57fa\u7840\u5e93\u7248\u672c\u8fc7\u4f4e:" + window.SDKVersion), wx.showModal({ title: "\u63d0\u793a", content: "\u5f53\u524d\u5fae\u4fe1\u7248\u672c\u8fc7\u4f4e\uff0c\u65e0\u6cd5\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u8bf7\u5347\u7ea7\u5230\u6700\u65b0\u5fae\u4fe1\u7248\u672c\u540e\u91cd\u8bd5\u3002" }));
}, window.systemInfo = "", wx.getSystemInfo({ success(o) {
    window.systemInfo = "\u54c1\u724c\uff1a" + o.brand + "\uff0c\u578b\u53f7\uff1a" + o.model + "\uff0c\u5fae\u4fe1\u7248\u672c\u53f7\uff1a" + o.version + "\uff0c\u7cfb\u7edf\u53ca\u7248\u672c\uff1a" + o.system + "\uff0c\u5ba2\u6237\u7aef\u5e73\u53f0\uff1a" + o.platform + "\uff0c\u57fa\u7840\u5e93\u7248\u672c\uff1a" + o.SDKVersion + "\uff0c\u8bbe\u5907\u6027\u80fd\u7b49\u7ea7\uff1a" + o.benchmarkLevel, console.log(window.systemInfo), console.log("\u8bbe\u5907\u50cf\u7d20\u6bd4\uff1a" + o.pixelRatio + "\uff0c\u5c4f\u5e55\u5bbd\u5ea6\uff1a" + o.screenWidth + "\uff0c\u5c4f\u5e55\u9ad8\u5ea6\uff1a" + o.screenHeight + "\uff0c\u53ef\u4f7f\u7528\u7a97\u53e3\u5bbd\u5ea6\uff1a" + o.windowWidth + "\uff0c\u53ef\u4f7f\u7528\u7a97\u53e3\u9ad8\u5ea6\uff1a" + o.windowHeight + "\uff0c\u72b6\u6001\u680f\u7684\u9ad8\u5ea6\uff1a" + o.statusBarHeight + "\uff0c\u5b89\u5168\u533a\u57df\uff1a" + (o.safeArea ? o.safeArea.top + "," + o.safeArea.bottom + "," + o.safeArea.left + "," + o.safeArea.right : ""));var n = o.system ? o.system.toLowerCase() : "";var e = o.model ? o.model.toLowerCase().replace(" ", "") : "";window.PF_INFO.wxIOS = -1 != n.indexOf("ios"), window.PF_INFO.wxAndroid = -1 != n.indexOf("android"), window.PF_INFO.wxPhone = -1 != n.indexOf("ios") || -1 != n.indexOf("android"), window.PF_INFO.wxPC = -1 != n.indexOf("windows") || -1 != n.indexOf("mac"), window.PF_INFO.wxPlatform = o.platform ? o.platform.toLowerCase() : "", window.PF_INFO.wxLimitLoad = !1, -(window.PF_INFO.wxBenchmarkLevel = 1) != n.indexOf("android") ? 24 <= o.benchmarkLevel ? window.PF_INFO.wxBenchmarkLevel = 2 : window.PF_INFO.wxBenchmarkLevel = 1 : -1 == n.indexOf("ios") || !(o.benchmarkLevel && 20 <= o.benchmarkLevel || -1 == e.indexOf("iphone5") && -1 == e.indexOf("iphone6") && -1 == e.indexOf("iphone7") && -1 == e.indexOf("iphonese") && -1 == e.indexOf("ipad")) ? window.PF_INFO.wxBenchmarkLevel = 1 : window.PF_INFO.wxBenchmarkLevel = 2, console.log("\u52a0\u8f7d\u9650\u5236\uff1a" + window.PF_INFO.wxLimitLoad + "\uff0c\u8bbe\u5907\u9650\u5236\u7b49\u7ea7\uff1a" + window.PF_INFO.wxBenchmarkLevel);
  } }), wx.getBatteryInfo({ success: function (o) {
    console.log("\u7535\u91cf\uff1a" + o.level + "%\uff0c\u662f\u5426\u6b63\u5728\u5145\u7535\uff1a" + o.isCharging);
  } }), wx.getNetworkType({ success: function (o) {
    console.log("\u7f51\u7edc\u7c7b\u578b\uff1a" + o.networkType);
  } }), wx.setKeepScreenOn({ keepScreenOn: !0 }), wx.onNetworkStatusChange(function (o) {
  console.log("\u7f51\u7edc\u7c7b\u578b\uff1a" + o.networkType + "\uff0c\u662f\u5426\u6709\u7f51\u7edc\u8fde\u63a5\uff1a" + o.isConnected);
}), wx.onShow(function (o) {
  window.onShowData = o, window.onShowCallback && window.onShowData && (console.info("\u5c0f\u6e38\u620f\u5207\u524d\u53f0\u4e8b\u4ef6\uff0c\u573a\u666f\u503c\uff1a" + window.onShowData.scene), window.onShowCallback(window.onShowData), window.onShowData = null);
}), window.memoryWarningNum = 0, window.onMemoryWarningCallBack = null, wx.onMemoryWarning(function () {
  window.memoryWarningNum++, wx.triggerGC(), 2 <= window.memoryWarningNum && (window.memoryWarningNum = 0, console.error("\u7b2c\u4e8c\u6b21\u5185\u5b58\u8b66\u544a"), wx.reportMonitor("0", 1), window.PF_INFO && window.PF_INFO.wxIOS && window.reqRecordInfo("\u5185\u5b58\u8b66\u544a"), onMemoryWarningCallBack && onMemoryWarningCallBack());
});