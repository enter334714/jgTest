wx.y$ = [];var fs = wx.getFileSystemManager();wx.getFileSystemManager().unzip({ zipFilePath: "/res/files.zip", targetPath: wx.env.USER_DATA_PATH + "/f/", success: o => {
    "unzip:ok" == o.errMsg ? fs.readFile({ filePath: wx.env.USER_DATA_PATH + "/f/files", encoding: "utf8", success: function (o) {
        if ("readFile:ok" == o.errMsg && o.data) {
          try {
            wx.y$ = JSON.parse(o.data);
          } catch (o) {
            console.error(o);
          }o = wx.loadSubpackage({ name: "bbblibs", success: function (o) {
              o && o.errMsg, window.loadSubpackages();
            }, fail: function (o) {
              console.error(o);
            } });o && o.onProgressUpdate(o => {});
        }
      }, fail: function (o) {
        console.error(o.errMsg);
      } }) : console.error(o.errMsg);
  }, fail: o => {
    console.error(o.errMsg);
  } }), wx.onShow(function (o) {
  window.onShowData = o, window.onShowCallback && window.onShowData && (console.info("\u5c0f\u6e38\u620f\u5207\u524d\u53f0\u4e8b\u4ef6\uff0c\u573a\u666f\u503c\uff1a" + window.onShowData.scene), window.onShowCallback(window.onShowData), window.onShowData = null);
});