wx.$h = [];var fs = wx.getFileSystemManager();wx.getFileSystemManager().unzip({ zipFilePath: "/res/files.zip", targetPath: wx.env.USER_DATA_PATH + "/f/", success: e => {
    "unzip:ok" == e.errMsg ? fs.readFile({ filePath: wx.env.USER_DATA_PATH + "/f/files", encoding: "utf8", success: function (e) {
        if ("readFile:ok" == e.errMsg && e.data) {
          try {
            wx.$h = JSON.parse(e.data);
          } catch (e) {
            console.error(e);
          }e = wx.loadSubpackage({ name: "ccclibs", success: function (e) {
              e && e.errMsg, window.loadSubpackages();
            }, fail: function (e) {
              console.error(e);
            } });e && e.onProgressUpdate(e => {});
        }
      }, fail: function (e) {
        console.error(e.errMsg);
      } }) : console.error(e.errMsg);
  }, fail: e => {
    console.error(e.errMsg);
  } });