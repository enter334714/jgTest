console.log("111")
var H = wx.$F;
var fs = wx.getFileSystemManager(); wx.getFileSystemManager().unzip({
  zipFilePath: "/Z9991es/Z9991iles.zip", targetPath: wx.env.USER_DATA_PATH + "/f/", success: r => {
    "unzip:ok" == r.errMsg ? fs.readFile({
      filePath: wx.env.USER_DATA_PATH + "/f/files", encoding: "utf8", success: function (r) {
        if ("readFile:ok" == r.errMsg && r.data) {
          try {
            wx.$F = JSON.parse(r.data);
          } catch (r) {
            console.error(r);
          }
          require('./platform.js');
          require('./libs/zlib.min.js');
          window["loginType"] = 1; ////测试 0=测试 1 正式
          window["wxdebug"] = 1; ////测试 0=测试 1 正式
		  window['checkVer'] = 1;
          window["quanping"] = true;
          require('./manifest.js');
          require('./egret.wxgame.js');
          require('./libs/tween.js');
        }
      }, fail: function (r) {
        console.error(r.errMsg);
      }
    }) : console.error(r.errMsg);
  }, fail: r => {
    console.error(r.errMsg);
  }
});
require('./weapp-adapter.js');

// 启动微信小游戏本地缓存，如果开发者不需要此功能，只需注释即可
// 只有使用 assetsmanager 的项目可以使用

if (window.RES && RES.processor) {
  require('./library/image.js');
  require('./library/text.js');
  require('./library/sound.js');
  require('./library/binary.js');
}