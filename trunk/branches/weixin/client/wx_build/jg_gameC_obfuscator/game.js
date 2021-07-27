wx.$h = [];
var fs = wx.getFileSystemManager();
wx.getFileSystemManager().unzip({
    zipFilePath: "/res/files.zip",
    targetPath: wx.env.USER_DATA_PATH + "/f/",
    success: (res51) => {
        if (res51.errMsg == "unzip:ok") {
            fs.readFile({
                filePath: wx.env.USER_DATA_PATH + "/f/files", encoding: "utf8",
                success: function (res41) {
                    if (res41.errMsg == "readFile:ok" && res41.data) {
                        try {
                            wx.$h = JSON.parse(res41.data);
                        } catch (error) {
                            console.error(error);
                        }
            
                        var loadLibsTask = wx.loadSubpackage({
                            name: 'ccclibs',
                            success: function(res) {
                                if (res && res.errMsg == "loadSubpackage:ok") {
                                } else {
                                }
                                window.loadSubpackages();
                            },
                            fail: function(res) {
                                console.error(res);
                            },
                        });
                        loadLibsTask && loadLibsTask.onProgressUpdate(res => {
                        });
                    }
                },
                fail: function (res42) {
                    console.error(res42.errMsg);
                }
            });
        } else {
            console.error(res51.errMsg);
        }
    },
    fail: (res52) => {
        console.error(res52.errMsg);
    }
});
