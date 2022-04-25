require('adapter-min.js');
__globalAdapter.init();
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
          require('./game1.js');         
        }
      }, fail: function (r) {
        console.error(r.errMsg);
      }
    }) : console.error(r.errMsg);
  }, fail: r => {
    console.error(r.errMsg);
  }
});