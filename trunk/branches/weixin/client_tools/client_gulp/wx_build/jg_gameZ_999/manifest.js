//require("./myJs/index.js")
require("./js/7cwan_sdk.js")
require("./js/egret.js")
require("./js/eui.js")
require("./js/assetsmanager.js")
require("./js/game.js")
require("./js/tween.js")
require("./js/socket.js")
window.JSZip = require("./js/jszip.js")

var packthm = 'mythm';
if (window["wxdebug"] == 0)
{
	packthm = 'myDebugthm';
}
const loadTask1 = wx.loadSubpackage({
name: packthm, // name 可以填 name 或者 root
success: function (res) {
  console.log("完成 分包加载"+ packthm +"成功");
},
fail: function (res) {
  // 分包加载失败通过 fail 回调 
  console.warn( packthm +"分包加载失败");
},

compelete: function (res) {
  console.warn("分包加载"+ packthm +"完成", res);
}

});

console.log("开始分包加载myJs");
const loadTask2 = wx.loadSubpackage({
    name: 'myJs', // name 可以填 name 或者 root
    success: function (res) {
    console.log("完成 分包加载 myJs成功");
    },
    fail: function (res) {
      // 分包加载失败通过 fail 回调 
      console.warn("分包myJs加载失败");
    },

    compelete: function (res) {
      console.warn("分包加载myJs完成", res);
    }
 });


var packMain = 'myMainJs';
if (window["wxdebug"] == 0)
	packMain = 'myDebugMainJs';
else
	packMain = 'myMainJs';

console.log("开始分包加载" + packMain);
const loadTask3 = wx.loadSubpackage({
    name: packMain, // name 可以填 name 或者 root
    success: function (res) {
    console.log("完成 分包加载" + packMain +"成功");
    },
    fail: function (res) {
      // 分包加载失败通过 fail 回调 
      console.warn("分包"+ packMain+"加载失败");
    },

    compelete: function (res) {
      console.warn("分包加载"+ packMain +"完成", res);
    }
});






//require("./js/main.js")
//require("./myJs/indexLogin.js")

//require("./js/default.thm.js")
//require("./js/default.thm.min.js")
//require("./mythm/default.thm.min.js")

/*
require("./myJs/index.js")
require("./oldJs/egret.js")
require("./oldJs/egret.web.js")
//require("./js/assetsmanager.js")
require("./oldJs/eui.min.js")
require("./oldJs/res.min.js")
require("./oldJs/tween.min.js")
require("./myJs/indexLogin.js")*/
