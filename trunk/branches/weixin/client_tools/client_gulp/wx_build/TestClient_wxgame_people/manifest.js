var H = wx.$F;
require("./libs/7cwan_sdk.js");
require("./libs/egret.js");
require("./libs/eui.js");
require("./libs/assetsmanager.js");
require("./libs/game.js");
require("./libs/tween.js");
require("./libs/socket.js");
window.JSZip = require("./libs/jszip.js");

var releaseJs = 'releaseJs';
console.log("start load "+releaseJs);
const loadTask2 = wx.loadSubpackage({
  name: releaseJs,
  success: function (res) {
    console.log("load "+ releaseJs +" ok~~");
  },
  fail: function (res) {
    console.warn("load "+ releaseJs +" error!");
  },

  compelete: function (res) {
    console.warn("load "+ releaseJs +" complete", res);
  }
});

var packthm = 'releasethm';
if (window["wxdebug"] == 0) {
  packthm = 'debugthm';
}
console.log("start load "+packthm);
const loadTask1 = wx.loadSubpackage({
  name: packthm, 
  success: function (res) {
    console.log("load " + packthm + " ok~~");
  },
  fail: function (res) {
    console.warn("load " + packthm + " error!");
  },

  compelete: function (res) {
    console.warn("load " + packthm + " complete", res);
  }

});

var packMain = '';
if (window["wxdebug"] == 0) 
	packMain = 'debugMainJs';
else packMain = 'releaseMainJs';

console.log("start load " + packMain);
const loadTask3 = wx.loadSubpackage({
  name: packMain, 
  success: function (res) {
    console.log("load " + packMain + "ok~~");
  },
  fail: function (res) {
    console.warn("load " + packMain + " error!");
  },

  compelete: function (res) {
    console.warn("load " + packMain + " complete", res);
  }
});
