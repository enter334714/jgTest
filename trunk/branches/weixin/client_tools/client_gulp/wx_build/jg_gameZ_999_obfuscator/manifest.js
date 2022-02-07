var H = wx.$F;
var H = wx.$F;require("./libs/7cwan_sdk.js"), require("./libs/egret.js"), require("./libs/eui.js"), require("./libs/assetsmanager.js"), require("./libs/game.js"), require("./libs/tween.js"), require("./libs/socket.js"), window.JSZip = require("./libs/jszip.js");var releaseJs = "releaseJs";console.log("start load " + releaseJs);const loadTask2 = wx.loadSubpackage({ name: releaseJs, success: function (e) {
    console.log("load " + releaseJs + " ok~~");
  }, fail: function (e) {
    console.warn("load " + releaseJs + " error!");
  }, compelete: function (e) {
    console.warn("load " + releaseJs + " complete", e);
  } });var packthm = "releasethm";0 == window.wxdebug && (packthm = "debugthm"), console.log("start load " + packthm);const loadTask1 = wx.loadSubpackage({ name: packthm, success: function (e) {
    console.log("load " + packthm + " ok~~");
  }, fail: function (e) {
    console.warn("load " + packthm + " error!");
  }, compelete: function (e) {
    console.warn("load " + packthm + " complete", e);
  } });var packMain = "";packMain = 0 == window.wxdebug ? "debugMainJs" : "releaseMainJs", console.log("start load " + packMain);const loadTask3 = wx.loadSubpackage({ name: packMain, success: function (e) {
    console.log("load " + packMain + "ok~~");
  }, fail: function (e) {
    console.warn("load " + packMain + " error!");
  }, compelete: function (e) {
    console.warn("load " + packMain + " complete", e);
  } });