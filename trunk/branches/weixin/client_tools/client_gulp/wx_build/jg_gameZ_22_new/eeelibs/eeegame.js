console.info("0 \u8fdb\u5165\u6e38\u620f\u5305"), window.lastError, wx.onError(function (C$99e) {
  if (C$99e) {
    if (C$99e.message) {
      var C$99o = window.config.game_ver.replace(new RegExp(/\./, "g"), "_");var C$99n = C$99e.message;var C$99i = C$99n.match(/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);if (C$99i) for (var C$99w = 0; C$99w < C$99i.length; C$99w++) {
        var C$99r;C$99i[C$99w] && 0 < C$99i[C$99w].length && (C$99r = parseInt(C$99i[C$99w].replace("eeeeeeee/eeegame.js:", "").replace(":", "")), C$99n = C$99n.replace(C$99i[C$99w], C$99i[C$99w].replace(":" + C$99r + ":", ":" + (C$99r - 2) + ":")));
      }C$99n = (C$99n = C$99n.replace(new RegExp("eeeeeeee/eeegame.js", "g"), "eeeeeeee/main__" + C$99o + ".min.js")).replace(new RegExp("eeeeeeee/eeemain.js", "g"), "eeeeeeee/main__" + C$99o + ".min.js"), C$99e.message = C$99n;
    }C$99o = { id: window.PF_INFO.roleId, role: window.PF_INFO.roleName, level: window.PF_INFO.roleLevel, user: window.PF_INFO.account, version: window.PF_INFO.lastVersion, cdn: window.PF_INFO.cdn, pkgName: window.PF_INFO.pkgName, gamever: window.config.game_ver, serverid: window.PF_INFO.selectedServer ? window.PF_INFO.selectedServer.server_id : 0, systemInfo: window.systemInfo, error: "MiniProgramError", stack: C$99e ? C$99e.message : "" };C$99e = JSON.stringify(C$99o);console.error("\u811a\u672c\u9519\u8bef\uff1a" + C$99e), window.lastError && window.lastError == C$99o.error || (window.lastError = C$99o.error, window.clientlog(C$99o));
  }
});import "eeemd5min.js";import "eeezlibs.js";window.Parser = require("eeedomparser.js");import "eeeindex.js";import "eeelibsmin.js";import "eeewxmini.js";import "eeeinitmin.js";console.info("1 \u521d\u59cb\u5316"), console.info("2 \u52a0\u8f7d\u6e38\u620f"), wxShowLoading({ title: "\u6b63\u5728\u52a0\u8f7d" });var wxData = { showLoadingBtn: !0 };new window.ServerLoading(wxData), window.ServerLoading.instance.openAuthor(), window.loadingInterval && clearInterval(window.loadingInterval), window.loadingInterval = null, window.compareVersion = function (C$99e, C$99o) {
  if (!C$99e || !C$99o) return 0;C$99e = C$99e.split("."), C$99o = C$99o.split(".");var C$99n = Math.max(C$99e.length, C$99o.length);for (; C$99e.length < C$99n;) C$99e.push("0");for (; C$99o.length < C$99n;) C$99o.push("0");for (var C$99i = 0; C$99i < C$99n; C$99i++) {
    var C$99w = parseInt(C$99e[C$99i]),
        C$99r = parseInt(C$99o[C$99i]);if (C$99r < C$99w) return 1;if (C$99w < C$99r) return -1;
  }return 0;
}, window.SDKVersion = wx.getSystemInfoSync().SDKVersion, console.log("\u5fae\u4fe1\u57fa\u7840\u5e93\u7248\u672c\uff1a" + window.SDKVersion);var updateManager = wx.getUpdateManager();updateManager.onCheckForUpdate(function (C$99e) {
  console.log("\u662f\u5426\u6709\u65b0\u7248\u672c\uff1a" + C$99e.hasUpdate);
}), updateManager.onUpdateReady(function () {
  wx.showModal({ title: "\u66f4\u65b0\u63d0\u793a", content: "\u65b0\u7248\u672c\u5df2\u7ecf\u51c6\u5907\u597d\uff0c\u662f\u5426\u91cd\u542f\u5e94\u7528\uff1f", showCancel: !1, success: function (C$99e) {
      updateManager.applyUpdate();
    } });
}), updateManager.onUpdateFailed(function () {
  console.log("\u65b0\u7248\u672c\u4e0b\u8f7d\u5931\u8d25 ");
}), window.loadProbuf = function () {
  console.log("protobuf \u5206\u5305\u52a0\u8f7d");var C$99e = wx.loadSubpackage({ name: "eeeeeepf", success: function (C$99e) {
      console.log("protobuf \u5206\u5305\u52a0\u8f7d\u6210\u529f"), console.log(C$99e), C$99e && "loadSubpackage:ok" == C$99e.errMsg ? (window.loadProbPkg = !0, window.initMain(), window.enterToGame()) : setTimeout(function () {
        window.loadProbuf();
      }, 500);
    }, fail: function (C$99e) {
      console.log("protobuf \u5206\u5305\u52a0\u8f7d\u5931\u8d25"), console.log(C$99e), setTimeout(function () {
        window.loadProbuf();
      }, 500);
    } });C$99e && C$99e.onProgressUpdate(C$99e => {});
}, window.loadMain = function () {
  console.log("Main \u5206\u5305\u52a0\u8f7d");var C$99e = wx.loadSubpackage({ name: "eeeeeeee", success: function (C$99e) {
      console.log("Main \u5206\u5305\u52a0\u8f7d\u6210\u529f"), console.log(C$99e), C$99e && "loadSubpackage:ok" == C$99e.errMsg ? (window.loadMainPkg = !0, window.initMain(), window.enterToGame()) : setTimeout(function () {
        window.loadMain();
      }, 500);
    }, fail: function (C$99e) {
      console.log("Main \u5206\u5305\u52a0\u8f7d\u5931\u8d25"), console.log(C$99e), setTimeout(function () {
        window.loadMain();
      }, 500);
    } });C$99e && C$99e.onProgressUpdate(C$99e => {});
}, window.loadSubpackages = function () {
  0 <= window.compareVersion(window.SDKVersion, "2.1.0") ? (console.log("\u5fae\u4fe1\u57fa\u7840\u5e93\u7248\u672c\u7b26\u5408\u6700\u4f4e\u7248\u672c\u8981\u6c42\uff1a" + window.SDKVersion + ">=2.1.0"), window.sdkInit(), window.loadProbuf(), window.loadMain()) : (window.reqRecordInfo("\u5fae\u4fe1\u57fa\u7840\u5e93\u7248\u672c\u8fc7\u4f4e", window.SDKVersion), wx.showModal({ title: "\u63d0\u793a", content: "\u5f53\u524d\u5fae\u4fe1\u7248\u672c\u8fc7\u4f4e\uff0c\u65e0\u6cd5\u4f7f\u7528\u8be5\u529f\u80fd\uff0c\u8bf7\u5347\u7ea7\u5230\u6700\u65b0\u5fae\u4fe1\u7248\u672c\u540e\u91cd\u8bd5\u3002" }));
}, window.systemInfo = "", wx.getSystemInfo({ success(C$99e) {
    window.systemInfo = "\u54c1\u724c\uff1a" + C$99e.brand + "\uff0c\u578b\u53f7\uff1a" + C$99e.model + "\uff0c\u5fae\u4fe1\u7248\u672c\u53f7\uff1a" + C$99e.version + "\uff0c\u7cfb\u7edf\u53ca\u7248\u672c\uff1a" + C$99e.system + "\uff0c\u5ba2\u6237\u7aef\u5e73\u53f0\uff1a" + C$99e.platform + "\uff0c\u57fa\u7840\u5e93\u7248\u672c\uff1a" + C$99e.SDKVersion + "\uff0c\u8bbe\u5907\u6027\u80fd\u7b49\u7ea7\uff1a" + C$99e.benchmarkLevel, console.log(window.systemInfo), console.log("\u8bbe\u5907\u50cf\u7d20\u6bd4\uff1a" + C$99e.pixelRatio + "\uff0c\u5c4f\u5e55\u5bbd\u5ea6\uff1a" + C$99e.screenWidth + "\uff0c\u5c4f\u5e55\u9ad8\u5ea6\uff1a" + C$99e.screenHeight + "\uff0c\u53ef\u4f7f\u7528\u7a97\u53e3\u5bbd\u5ea6\uff1a" + C$99e.windowWidth + "\uff0c\u53ef\u4f7f\u7528\u7a97\u53e3\u9ad8\u5ea6\uff1a" + C$99e.windowHeight + "\uff0c\u72b6\u6001\u680f\u7684\u9ad8\u5ea6\uff1a" + C$99e.statusBarHeight + "\uff0c\u5b89\u5168\u533a\u57df\uff1a" + (C$99e.safeArea ? C$99e.safeArea.top + "," + C$99e.safeArea.bottom + "," + C$99e.safeArea.left + "," + C$99e.safeArea.right : ""));var C$99o = C$99e.system ? C$99e.system.toLowerCase() : "";var C$99n = C$99e.model ? C$99e.model.toLowerCase().replace(" ", "") : "";window.PF_INFO.wxIOS = -1 != C$99o.indexOf("ios"), window.PF_INFO.wxAndroid = -1 != C$99o.indexOf("android"), window.PF_INFO.wxPhone = -1 != C$99o.indexOf("ios") || -1 != C$99o.indexOf("android"), window.PF_INFO.wxPC = -1 != C$99o.indexOf("windows") || -1 != C$99o.indexOf("mac"), window.PF_INFO.wxPlatform = C$99e.platform ? C$99e.platform.toLowerCase() : "", window.PF_INFO.wxLimitLoad = !1, window.PF_INFO.wxBenchmarkLevel = 2, -1 != C$99o.indexOf("android") ? 24 <= C$99e.benchmarkLevel ? window.PF_INFO.wxBenchmarkLevel = 3 : window.PF_INFO.wxBenchmarkLevel = 2 : -1 == C$99o.indexOf("ios") || !(C$99e.benchmarkLevel && 20 <= C$99e.benchmarkLevel || -1 == C$99n.indexOf("iphone5") && -1 == C$99n.indexOf("iphone6") && -1 == C$99n.indexOf("iphone7") && -1 == C$99n.indexOf("iphonese") && -1 == C$99n.indexOf("ipad")) ? window.PF_INFO.wxBenchmarkLevel = 2 : window.PF_INFO.wxBenchmarkLevel = 3, console.log("\u52a0\u8f7d\u9650\u5236\uff1a" + window.PF_INFO.wxLimitLoad + "\uff0c\u8bbe\u5907\u9650\u5236\u7b49\u7ea7\uff1a" + window.PF_INFO.wxBenchmarkLevel);
  } }), wx.getBatteryInfo({ success: function (C$99e) {
    console.log("\u7535\u91cf\uff1a" + C$99e.level + "%\uff0c\u662f\u5426\u6b63\u5728\u5145\u7535\uff1a" + C$99e.isCharging);
  } }), wx.getNetworkType({ success: function (C$99e) {
    console.log("\u7f51\u7edc\u7c7b\u578b\uff1a" + C$99e.networkType);
  } }), wx.setKeepScreenOn({ keepScreenOn: !0 }), wx.onNetworkStatusChange(function (C$99e) {
  console.log("\u7f51\u7edc\u7c7b\u578b\uff1a" + C$99e.networkType + "\uff0c\u662f\u5426\u6709\u7f51\u7edc\u8fde\u63a5\uff1a" + C$99e.isConnected);
}), wx.onShow(function (C$99e) {
  window.onShowData = C$99e, window.onShowCallback && window.onShowData && (console.info("\u5c0f\u6e38\u620f\u5207\u524d\u53f0\u4e8b\u4ef6\uff0c\u573a\u666f\u503c\uff1a" + window.onShowData.scene), window.onShowCallback(window.onShowData), window.onShowData = null);
}), window.memoryGCTime = 0, window.memoryWarningNum = 0, window.onMemoryWarningCallBack = null, wx.onMemoryWarning(function () {
  window.memoryWarningNum++;var C$99e = Date.now();(0 == window.memoryGCTime || 12e4 < C$99e - window.memoryGCTime) && (console.warn("\u5185\u5b58\u8b66\u544a\u89e6\u53d1GC"), wx.triggerGC()), 2 <= window.memoryWarningNum && (window.memoryWarningNum = 0, console.error("\u7b2c\u4e8c\u6b21\u5185\u5b58\u8b66\u544a"), wx.reportMonitor("0", 1), window.PF_INFO && window.PF_INFO.wxIOS && window.reqRecordInfo("\u5185\u5b58\u8b66\u544a", ""), onMemoryWarningCallBack && onMemoryWarningCallBack());
});