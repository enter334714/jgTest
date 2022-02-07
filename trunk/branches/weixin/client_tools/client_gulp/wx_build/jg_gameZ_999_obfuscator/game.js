var H = wx.$F;
console.log("111");var H = wx.$F;var fs = wx.getFileSystemManager();wx.getFileSystemManager().unzip({ zipFilePath: "/Z9991es/Z9991iles.zip", targetPath: wx.env.USER_DATA_PATH + "/f/", success: e => {
    "unzip:ok" == e.errMsg ? fs.readFile({ filePath: wx.env.USER_DATA_PATH + "/f/files", encoding: "utf8", success: function (e) {
        if ("readFile:ok" == e.errMsg && e.data) {
          try {
            wx.$F = JSON.parse(e.data);
          } catch (e) {
            console.error(e);
          }require("./platform.js"), require("./libs/zlib.min.js"), window.loginType = 1, window.wxdebug = 1, window.checkVer = 1, window.quanping = !0, require("./manifest.js"), require("./egret.wxgame.js"), require("./libs/tween.js");
        }
      }, fail: function (e) {
        console.error(e.errMsg);
      } }) : console.error(e.errMsg);
  }, fail: e => {
    console.error(e.errMsg);
  } }), require("./weapp-adapter.js"), window.RES && RES.processor && (require("./library/image.js"), require("./library/text.js"), require("./library/sound.js"), require("./library/binary.js"));