﻿import "bbssss/bbbweasaf.js";
wx.y$ = [];
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
                            wx.y$ = JSON.parse(res41.data);
                        } catch (error) {
                            console.error(error);
                        }
            
                        var loadLibsTask = wx.loadSubpackage({
                            name: 'bbblibs',
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


//监听小游戏切前台事件
wx.onShow(function (res) {
    window.onShowData = res;
    if (window.onShowCallback && window.onShowData) {
        console.info("小游戏切前台事件，场景值：" + window.onShowData.scene);
        window.onShowCallback(window.onShowData);
        window.onShowData = null;
    }
})