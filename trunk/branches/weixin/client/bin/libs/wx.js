//浏览器里模拟微信小游戏环境
var wx = (function () {
    function wx() {
        
    }

    /**
     * 下载文件  object = {url, success:{statusCode, tempFilePath}, fail:{errMsg:"失败"}}
     */
    wx.downloadFile = function (object) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState != 4) {
                return;
            }
            if (request.status == 200 || (request.status == 0 && request.response != null && request.response.byteLength > 0)) {
                if (object && object.success) {
                    var tempPath;
                    if (object.filePath) {
                        tempPath = object.filePath;
                        wx.cacheFiles[tempPath] = request.response;
                    } else {
                        tempPath = md5(object.url);
                        wx.tempFiles[tempPath] = request.response;
                    }
                    
                    var dataLength = request.response.byteLength;
                    var ends = object.url.substring(object.url.indexOf("."), object.url.length);
                    if (wx.canImg && (ends == ".png" || ends == ".jpg" || ends == ".webp")){  //img加载图片
                        wx.blobFiles[tempPath] = URL.createObjectURL(new Blob([request.response]));
                        wx.blobMap[wx.blobFiles[tempPath]] = tempPath;
                        if (object.filePath)
                            object.success({statusCode: 200, dataLength: dataLength, filePath: wx.blobFiles[tempPath]});
                        else
                            object.success({statusCode: 200, dataLength: dataLength, tempFilePath: wx.blobFiles[tempPath]});
                    } else {
                        if (object.filePath)
                            object.success({statusCode: 200, dataLength: dataLength, filePath: tempPath});
                        else
                            object.success({statusCode: 200, dataLength: dataLength, tempFilePath: tempPath});
                    }
                }
            }
            else {
                if (object && object.fail) object.fail({errMsg:"失败"});
            }
        };
        request.open("GET", object.url);
        request.responseType = "arraybuffer";
        request.send();
    };
    wx.getFileSystemManager = function () {
        return wx.fsm;
    };
    wx.triggerGC = function () {

    };

    /**
     * 退出当前小游戏
     */
    wx.exitMiniProgram = function (object) {
        window.location.reload();
    };

    /**
     * 复制内容  object = {data, success, fail:{errMsg:"失败"}}
     */
    wx.setClipboardData = function (object) {
        alert("复制成功");
        if (object && object.success) object.success({});
    };

    /**
     * 缓存信息
     */
    wx.getStorageInfo = function (object) {
        if (object && object.success) {
            var keys = [], currentSize = 0;
            for (const key in wx.storageMap) {
                keys.push(key);
                currentSize += 10;
            }
            object.success({keys:keys, currentSize:currentSize, limitSize:10*1024*1024});
        }
    };
    wx.getStorageSync = function (key) {
        return wx.storageMap[key];
    };
    wx.getStorage = function (object) {
        if (object && object.success) object.success(wx.storageMap[key]);
    };
    wx.setStorage = function (object) {
        if (object && object.success) {
            wx.storageMap[object.key] = object.data;
            object.success({});
        }
    };
    wx.removeStorage = function (object) {
        if (object && object.success) {
            delete wx.storageMap[key];
            object.success({});
        }
    };

    var DownloadTask = (function () {
        function DownloadTask() {
        }
        //中断下载任务
        DownloadTask.abort = function (object) {

        };
        return DownloadTask;
    }());

    var FileSystemManager = (function () {
        function FileSystemManager() {
        }
        /**
         * 读取文件  object = {filePath, encoding, success:{errMsg:"readFile:ok", data:{}}, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.readFile = function (object) {
            if (object && object.success) {
                var bytes, filePath = object.filePath;//.replace(/\//g, "_");
                if (wx.tempFiles[filePath]) bytes = wx.tempFiles[filePath];
                else if (wx.saveFiles[filePath]) bytes = wx.saveFiles[filePath];
                else if (wx.cacheFiles[filePath]) bytes = wx.cacheFiles[filePath];
                else bytes = wx.unzipFiles[filePath];
                if (bytes) {
                    object.success({errMsg:"readFile:ok", data:bytes});
                } else {
                    object.fail({errMsg:"失败"});
                }
            }
        };
        /**
         * 写入文件  object = {filePath, data, encoding, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.writeFile = function (object) {
            if (object && object.success) object.success({});
        };
        /**
         * 获取文件信息  object = {filePath, success:{size:1}, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.getFileInfo = function (object) {
            if (object && object.success) {
                var bytes;
                if (wx.tempFiles[object.filePath]) bytes = wx.tempFiles[object.filePath];
                else if (wx.saveFiles[object.filePath]) bytes = wx.saveFiles[object.filePath];
                else if (wx.cacheFiles[object.filePath]) bytes = wx.cacheFiles[object.filePath];
                else if (wx.tempFiles[wx.blobMap[object.filePath]]) bytes = wx.tempFiles[wx.blobMap[object.filePath]];
                else if (wx.saveFiles[wx.blobMap[object.filePath]]) bytes = wx.saveFiles[wx.blobMap[object.filePath]];
                else if (wx.cacheFiles[wx.blobMap[object.filePath]]) bytes = wx.cacheFiles[wx.blobMap[object.filePath]];

                if (bytes) {
                    object.success({size:bytes.byteLength});
                } else {
                    object.fail({errMsg:"失败"});
                }
            }
        };
        /**
         * 保存为本地缓存  object = {tempFilePath, success:{savedFilePath:""}, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.saveFile = function (object) {
            if (object && object.success) {
                if (object.tempFilePath.indexOf("blob:") == -1 && wx.tempFiles[object.tempFilePath]) {
                    var savePath = "save_"+ object.tempFilePath;
                    wx.saveFiles[savePath] = wx.tempFiles[object.tempFilePath];
                    delete wx.tempFiles[object.tempFilePath];
                    object.success({savedFilePath:savePath});
                } else if (object.tempFilePath.indexOf("blob:") != -1 && wx.blobMap[object.tempFilePath] && wx.tempFiles[wx.blobMap[object.tempFilePath]]){
                    var savePath = object.tempFilePath;
                    wx.saveFiles[savePath] = wx.tempFiles[wx.blobMap[object.tempFilePath]];
                    delete wx.tempFiles[wx.blobMap[object.tempFilePath]];
                    object.success({savedFilePath:savePath});
                } else if (object.tempFilePath.indexOf("blob:") != -1 && wx.blobMap[object.tempFilePath] && wx.cacheFiles[wx.blobMap[object.tempFilePath]]){
                    var savePath = object.tempFilePath;
                    object.success({savedFilePath:savePath});
                } else {
                    object.fail({fail:{errMsg:"失败"}});
                }
            }
        };  
        /**
         * 删除本地缓存  object = {filePath, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.removeSavedFile = function (object) {
            if (object && object.success) {
                delete wx.saveFiles[object.filePath];
                object.success({});
            }
        };  
        /**
         * 获取本地缓存列表  object = {success: {fileList:[{filePath, size}]}, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.getSavedFileList = function (object) {
            if (object && object.success) {
                var files = [];
                for (const key in wx.saveFiles) {
                    files.push({filePath:key, size:wx.saveFiles[key].byteLength});
                }
                object.success({fileList:files});
            }
        };  
        /**
         * 创建目录  object = {dirPath, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.mkdir = function (object) {
            if (object && object.success) object.success({});
        };
        /**
         * 删除目录  object = {dirPath, recursive, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.rmdir = function (object) {
            if (object && object.success) object.success({});
        };
        /**
         * 解压文件  object = {zipFilePath, targetPath, success:{errMsg:"unzip:ok", }, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.unzip = function (object) {
            if (object && object.success) {
                var bytes;
                if (wx.tempFiles[object.zipFilePath]) bytes = wx.tempFiles[object.zipFilePath];
                else if (wx.saveFiles[object.zipFilePath]) bytes = wx.saveFiles[object.zipFilePath];
                else if (wx.cacheFiles[object.zipFilePath]) bytes = wx.cacheFiles[object.zipFilePath];

                if (bytes) {
                    bytes = DecodeTools.decodeBuff(bytes);
                    wx.unzipFiles[object.targetPath + "res"] = bytes;
                    // wx.unzipFiles[object.targetPath.replace(/\//g, "_") + "_res"] = bytes;
                    object.success({errMsg:"unzip:ok"});
                } else {
                    object.fail({errMsg:"失败"});
                }
            }
        };
        /**
         * 删除文件  object = {filePath, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.unlink = function (object) {
            if (object && object.success) {
                delete wx.tempFiles[object.filePath];
                delete wx.cacheFiles[object.filePath];
                object.success({});
            }
        };
        /**
         * 判断文件/目录是否存在  object = {path, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.access = function (object) {
            if (object && object.success) object.success({});
        };
        /**
         * 读取目录里文件列表  object = {dirPath, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.readdir = function (object) {
            if (object && object.success) {
                var dir;
                if (object.dirPath.indexOf("/cache/")) {
                    dir = wx.cacheFiles;
                } else {
                    dir = [];
                }
                var files = [];
                for (const key in dir) {
                    files.push(key);
                }
                object.success({files:files});
            }
        };
        /**
         * 读取压缩包内的文件  object = {filePath, entries, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.readZipEntry = function (object) {
            var bytes;
            if (wx.tempFiles[object.filePath]) bytes = wx.tempFiles[object.filePath];
            else if (wx.saveFiles[object.filePath]) bytes = wx.saveFiles[object.filePath];
            else if (wx.cacheFiles[object.filePath]) bytes = wx.cacheFiles[object.filePath];
            if (bytes) {
                bytes = DecodeTools.decodeBuff(bytes);
                object.success({errMsg:"readZipEntry:ok", entries:{"res":{errMsg:"readZipEntry:ok", data:bytes}}});
            } else {
                object.fail({errMsg:"失败"});
            }
        };//

        return FileSystemManager;
    }());

    wx.env = {USER_DATA_PATH: "wxfile"};
    wx.fsm = new FileSystemManager();
    wx.storageMap = {};
    wx.cacheFiles = {};
    wx.tempFiles = {};
    wx.saveFiles = {};
    wx.unzipFiles = {};
    wx.blobFiles = {};
    wx.blobMap = {};
    wx.canImg = true;

    return wx;
}());





//浏览器里模拟QQ小游戏环境
var qq = (function () {
    function qq() {
        
    }

    /**
     * 下载文件  object = {url, success:{statusCode, tempFilePath}, fail:{errMsg:"失败"}}
     */
    qq.downloadFile = function (object) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState != 4) {
                return;
            }
            if (request.status == 200 || (request.status == 0 && request.response != null && request.response.byteLength > 0)) {
                if (object && object.success) {
                    var tempPath;
                    if (object.filePath) {
                        tempPath = object.filePath;
                        qq.cacheFiles[tempPath] = request.response;
                    } else {
                        tempPath = md5(object.url);
                        qq.tempFiles[tempPath] = request.response;
                    }
                    
                    var dataLength = request.response.byteLength;
                    var ends = object.url.substring(object.url.indexOf("."), object.url.length);
                    if (qq.canImg && (ends == ".png" || ends == ".jpg" || ends == ".webp")){  //img加载图片
                        qq.blobFiles[tempPath] = URL.createObjectURL(new Blob([request.response]));
                        qq.blobMap[qq.blobFiles[tempPath]] = tempPath;
                        if (object.filePath)
                            object.success({statusCode: 200, dataLength: dataLength, filePath: qq.blobFiles[tempPath]});
                        else
                            object.success({statusCode: 200, dataLength: dataLength, tempFilePath: qq.blobFiles[tempPath]});
                    } else {
                        if (object.filePath)
                            object.success({statusCode: 200, dataLength: dataLength, filePath: tempPath});
                        else
                            object.success({statusCode: 200, dataLength: dataLength, tempFilePath: tempPath});
                    }
                }
            }
            else {
                if (object && object.fail) object.fail({errMsg:"失败"});
            }
        };
        request.open("GET", object.url);
        request.responseType = "arraybuffer";
        request.send();
    };
    qq.getFileSystemManager = function () {
        return qq.fsm;
    };
    qq.triggerGC = function () {

    };

    /**
     * 退出当前小游戏
     */
    qq.exitMiniProgram = function (object) {
        window.location.reload();
    };

    /**
     * 复制内容  object = {data, success, fail:{errMsg:"失败"}}
     */
    qq.setClipboardData = function (object) {
        alert("复制成功");
        if (object && object.success) object.success({});
    };

    /**
     * 缓存信息
     */
    qq.getStorageInfo = function (object) {
        if (object && object.success) {
            var keys = [], currentSize = 0;
            for (const key in qq.storageMap) {
                keys.push(key);
                currentSize += 10;
            }
            object.success({keys:keys, currentSize:currentSize, limitSize:10*1024*1024});
        }
    };
    qq.getStorageSync = function (key) {
        return qq.storageMap[key];
    };
    qq.getStorage = function (object) {
        if (object && object.success) object.success(qq.storageMap[key]);
    };
    qq.setStorage = function (object) {
        if (object && object.success) {
            qq.storageMap[object.key] = object.data;
            object.success({});
        }
    };
    qq.removeStorage = function (object) {
        if (object && object.success) {
            delete qq.storageMap[key];
            object.success({});
        }
    };

    var DownloadTask = (function () {
        function DownloadTask() {
        }
        //中断下载任务
        DownloadTask.abort = function (object) {

        };
        return DownloadTask;
    }());

    var FileSystemManager = (function () {
        function FileSystemManager() {
        }
        /**
         * 读取文件  object = {filePath, encoding, success:{errMsg:"readFile:ok", data:{}}, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.readFile = function (object) {
            if (object && object.success) {
                var bytes, filePath = object.filePath;//.replace(/\//g, "_");
                if (qq.tempFiles[filePath]) bytes = qq.tempFiles[filePath];
                else if (qq.saveFiles[filePath]) bytes = qq.saveFiles[filePath];
                else if (qq.cacheFiles[filePath]) bytes = qq.cacheFiles[filePath];
                else bytes = qq.unzipFiles[filePath];
                if (bytes) {
                    object.success({errMsg:"readFile:ok", data:bytes});
                } else {
                    object.fail({errMsg:"失败"});
                }
            }
        };
        /**
         * 写入文件  object = {filePath, data, encoding, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.writeFile = function (object) {
            if (object && object.success) object.success({});
        };
        /**
         * 获取文件信息  object = {filePath, success:{size:1}, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.getFileInfo = function (object) {
            if (object && object.success) {
                var bytes;
                if (qq.tempFiles[object.filePath]) bytes = qq.tempFiles[object.filePath];
                else if (qq.saveFiles[object.filePath]) bytes = qq.saveFiles[object.filePath];
                else if (qq.cacheFiles[object.filePath]) bytes = qq.cacheFiles[object.filePath];
                else if (qq.tempFiles[qq.blobMap[object.filePath]]) bytes = qq.tempFiles[qq.blobMap[object.filePath]];
                else if (qq.saveFiles[qq.blobMap[object.filePath]]) bytes = qq.saveFiles[qq.blobMap[object.filePath]];
                else if (qq.cacheFiles[qq.blobMap[object.filePath]]) bytes = qq.cacheFiles[qq.blobMap[object.filePath]];

                if (bytes) {
                    object.success({size:bytes.byteLength});
                } else {
                    object.fail({errMsg:"失败"});
                }
            }
        };
        /**
         * 保存为本地缓存  object = {tempFilePath, success:{savedFilePath:""}, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.saveFile = function (object) {
            if (object && object.success) {
                if (object.tempFilePath.indexOf("blob:") == -1 && qq.tempFiles[object.tempFilePath]) {
                    var savePath = "save_"+ object.tempFilePath;
                    qq.saveFiles[savePath] = qq.tempFiles[object.tempFilePath];
                    delete qq.tempFiles[object.tempFilePath];
                    object.success({savedFilePath:savePath});
                } else if (object.tempFilePath.indexOf("blob:") != -1 && qq.blobMap[object.tempFilePath] && qq.tempFiles[qq.blobMap[object.tempFilePath]]){
                    var savePath = object.tempFilePath;
                    qq.saveFiles[savePath] = qq.tempFiles[qq.blobMap[object.tempFilePath]];
                    delete qq.tempFiles[qq.blobMap[object.tempFilePath]];
                    object.success({savedFilePath:savePath});
                } else if (object.tempFilePath.indexOf("blob:") != -1 && qq.blobMap[object.tempFilePath] && qq.cacheFiles[qq.blobMap[object.tempFilePath]]){
                    var savePath = object.tempFilePath;
                    object.success({savedFilePath:savePath});
                } else {
                    object.fail({fail:{errMsg:"失败"}});
                }
            }
        };  
        /**
         * 删除本地缓存  object = {filePath, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.removeSavedFile = function (object) {
            if (object && object.success) {
                delete qq.saveFiles[object.filePath];
                object.success({});
            }
        };  
        /**
         * 获取本地缓存列表  object = {success: {fileList:[{filePath, size}]}, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.getSavedFileList = function (object) {
            if (object && object.success) {
                var files = [];
                for (const key in qq.saveFiles) {
                    files.push({filePath:key, size:qq.saveFiles[key].byteLength});
                }
                object.success({fileList:files});
            }
        };  
        /**
         * 创建目录  object = {dirPath, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.mkdir = function (object) {
            if (object && object.success) object.success({});
        };
        /**
         * 删除目录  object = {dirPath, recursive, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.rmdir = function (object) {
            if (object && object.success) object.success({});
        };
        /**
         * 解压文件  object = {zipFilePath, targetPath, success:{errMsg:"unzip:ok", }, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.unzip = function (object) {
            if (object && object.success) {
                var bytes;
                if (qq.tempFiles[object.zipFilePath]) bytes = qq.tempFiles[object.zipFilePath];
                else if (qq.saveFiles[object.zipFilePath]) bytes = qq.saveFiles[object.zipFilePath];
                else if (qq.cacheFiles[object.zipFilePath]) bytes = qq.cacheFiles[object.zipFilePath];

                if (bytes) {
                    bytes = DecodeTools.decodeBuff(bytes);
                    qq.unzipFiles[object.targetPath + "res"] = bytes;
                    // qq.unzipFiles[object.targetPath.replace(/\//g, "_") + "_res"] = bytes;
                    object.success({errMsg:"unzip:ok"});
                } else {
                    object.fail({errMsg:"失败"});
                }
            }
        };
        /**
         * 删除文件  object = {filePath, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.unlink = function (object) {
            if (object && object.success) {
                delete qq.tempFiles[object.filePath];
                delete qq.cacheFiles[object.filePath];
                object.success({});
            }
        };
        /**
         * 判断文件/目录是否存在  object = {path, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.access = function (object) {
            if (object && object.success) object.success({});
        };
        /**
         * 读取目录里文件列表  object = {dirPath, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.readdir = function (object) {
            if (object && object.success) {
                var dir;
                if (object.dirPath.indexOf("/cache/")) {
                    dir = qq.cacheFiles;
                } else {
                    dir = [];
                }
                var files = [];
                for (const key in dir) {
                    files.push(key);
                }
                object.success({files:files});
            }
        };
        /**
         * 读取压缩包内的文件  object = {filePath, entries, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.readZipEntry = function (object) {
            var bytes;
            if (qq.tempFiles[object.filePath]) bytes = qq.tempFiles[object.filePath];
            else if (qq.saveFiles[object.filePath]) bytes = qq.saveFiles[object.filePath];
            else if (qq.cacheFiles[object.filePath]) bytes = qq.cacheFiles[object.filePath];
            if (bytes) {
                bytes = DecodeTools.decodeBuff(bytes);
                object.success({errMsg:"readZipEntry:ok", entries:{"res":{errMsg:"readZipEntry:ok", data:bytes}}});
            } else {
                object.fail({errMsg:"失败"});
            }
        };//

        return FileSystemManager;
    }());

    qq.env = {USER_DATA_PATH: "qqfile"};
    qq.fsm = new FileSystemManager();
    qq.storageMap = {};
    qq.cacheFiles = {};
    qq.tempFiles = {};
    qq.saveFiles = {};
    qq.unzipFiles = {};
    qq.blobFiles = {};
    qq.blobMap = {};
    qq.canImg = true;

    return qq;
}());






//浏览器里模拟VIVP小游戏环境
var qg = (function () {
    function qg() {
        
    }

    qg.triggerGC = function () {

    };
    /**
     * 退出当前小游戏
     */
    qg.exitApplication = function (object) {
        window.location.reload();
    };

    /**
     * 复制内容  object = {data, success, fail:{errMsg:"失败"}}
     */
    qg.setClipboardData = function (object) {
        alert("复制成功");
        if (object && object.success) object.success({});
    };

    var RequestTask = (function () {
        function RequestTask() {
        }
        //中断下载任务
        RequestTask.abort = function (object) {

        };
        return RequestTask;
    }());
    var DownloadTask = (function () {
        function DownloadTask() {
        }
        //中断下载任务
        DownloadTask.abort = function (object) {

        };
        return DownloadTask;
    }());

    //vivo的API
    /**
     * 请求  //url, dataType(text,json,arraybuffer), success(data, statusCode), fail(error, code), 
     */
    qg.request = function (object) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState != 4) {
                return;
            }
            if (request.status == 200 || (request.status == 0 && request.response != null && request.response.byteLength > 0)) {
                if (object && object.success) {
                    object.success(request.response, 200);
                }
            }
            else {
                if (object && object.fail) object.fail("失败","失败");
            }
        };
        request.open("GET", object.url);
        request.responseType = object.dataType;
        request.send();
    };

    /**
     * 下载文件  url, success(data(tempFilePath, statusCode)), fail(data, code), 
     */
    qg.download = function (object) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState != 4) {
                return;
            }
            if (request.status == 200 || (request.status == 0 && request.response != null && request.response.byteLength > 0)) {
                if (object && object.success) {
                    var ends = object.url.substring(object.url.indexOf("."), object.url.length);
                    var tempPath = md5(object.url) + (object.url.indexOf(".")!=-1 ? object.url.substring(object.url.lastIndexOf("."), object.url.length) : "");
                    qg.tempFiles[tempPath] = request.response;
                    if (ends == ".png" || ends == ".jpg" || ends == ".webp"){  //img加载图片
                        qg.blobFiles[tempPath] = URL.createObjectURL(new Blob([request.response]));
                        qg.blobMap[qg.blobFiles[tempPath]] = tempPath;
                        object.success({statusCode: 200, tempFilePath: qg.blobFiles[tempPath]});
                    } else {
                        object.success({statusCode: 200, tempFilePath: tempPath});
                    }
                }
            }
            else {
                if (object && object.fail) object.fail("失败","失败");
            }
        };
        request.open("GET", object.url);
        request.responseType = "arraybuffer";
        request.send();
    };
    
    /**
     * 判断文件/目录是否存在  uri(非tmp), md5
     */
    qg.accessFile = function (object) {
        if (object && object.success) object.success({});
    };
    /**
     * 获取文件信息  uri(非tmp), success(data(uri,length, lastModifiedTime)), fail(data, code), 
     */
    qg.getFileInfo = function (object) {
        if (object && object.success) {
            var bytes, filePath = object.uri;
            if (qg.tempFiles[filePath]) bytes = qg.tempFiles[filePath];
            else if (qg.cacheFiles[filePath]) bytes = qg.cacheFiles[filePath];
            else if (qg.tempFiles[qg.blobMap[filePath]]) bytes = qg.tempFiles[qg.blobMap[filePath]];
            else if (qg.cacheFiles[qg.blobMap[filePath]]) bytes = qg.cacheFiles[qg.blobMap[filePath]];

            if (bytes) {
                object.success({length:bytes.byteLength});
            } else {
                object.fail("失败","失败");
            }
        }
    };
    /**
     * 复制  srcUri, dstUri(非tmp), success(uri), fail(data, code), 
     */
    qg.copyFile = function (object) {
        if (object && object.success) {
            var savePath = object.dstUri;
            if (object.srcUri.indexOf("blob:") == -1 && qg.tempFiles[object.srcUri]) {
                qg.cacheFiles[savePath] = qg.tempFiles[object.srcUri];
                object.success(savePath);
            } else if (object.srcUri.indexOf("blob:") != -1 && qg.blobMap[object.srcUri] && qg.tempFiles[qg.blobMap[object.srcUri]]){
                qg.cacheFiles[savePath] = qg.tempFiles[qg.blobMap[object.srcUri]];
                object.success(savePath);
            } else if (object.srcUri.indexOf("blob:") != -1 && qg.blobMap[object.srcUri] && qg.cacheFiles[qg.blobMap[object.srcUri]]){
                object.success(savePath);
            } else {
                object.fail("失败","失败");
            }
        }
    };
    /**
     * 读取文件  uri(非tmp), encoding(utf8,binary), success(data(text(String/ArrayBuffer))), fail(data, code)
     */
    qg.readFile = function (object) {
        if (object && object.success) {
            var bytes, filePath = object.uri;//.replace(/\//g, "_");
            if (qg.tempFiles[filePath]) bytes = qg.tempFiles[filePath];
            else if (qg.cacheFiles[filePath]) bytes = qg.cacheFiles[filePath];
            else bytes = qg.unzipFiles[filePath];
            if (bytes) {
                object.success({text:bytes});
            } else {
                object.fail("失败","失败");
            }
        }
    };
    /**
     * 写文件  uri(非tmp), text, encoding(utf8,binary), success(uri), fail(data, code)
     */
    qg.writeFile = function (object) {
        if (object && object.success) object.success({});
    };
    /**
     * 删除文件  uri(非tmp), success(data), fail(data, code),
     */
    qg.deleteFile = function (object) {
        if (object && object.success) {
            delete qg.tempFiles[object.filePath];
            delete qg.cacheFiles[object.filePath];
            object.success({});
        }
    };
    /**
     * 解压文件  srcUri(非tmp), dstUri(非tmp), success(uri), fail(data, code)
     */
    qg.unzipFile = function (object) {
        if (object && object.success) {
            var bytes;
            if (qg.tempFiles[object.srcUri]) bytes = qg.tempFiles[object.srcUri];
            else if (qg.cacheFiles[object.srcUri]) bytes = qg.cacheFiles[object.srcUri];

            if (bytes) {
                bytes = DecodeTools.decodeBuff(bytes);
                qg.unzipFiles[object.dstUri + "res"] = bytes;
                object.success(object.srcUri);
            } else {
                object.fail("失败","失败");
            }
        }
    };
    
    
    /**
     * 创建目录  object = uri(非tmp), success(uri), fail(data, code),
     */
    qg.mkdir = function (object) {
        if (object && object.success) object.success({});
    };
    /**
     * 删除目录  object = uri(非tmp), success(uri), fail(data, code),
     */
    qg.rmdir = function (object) {
        if (object && object.success) object.success({});
    };
    /**
     * 读取目录里文件列表  uri(非tmp), success(data(fileList(uri,length, lastModifiedTime))), fail(data, code),
     */
    qg.listDir = function (object) {
        if (object && object.success) {
            var dir;
            if (object.uri.indexOf("/cache/")) {
                dir = qg.cacheFiles;
            } else {
                dir = [];
            }
            var files = [];
            for (const key in dir) {
                files.push({uri:key, length:dir[key].byteLength});
            }
            object.success({fileList:files});
        }
    };
    
    





    //oppo的API
    /**
     * 下载文件  object = {url, success:{statusCode, tempFilePath}, fail:{errMsg:"失败"}}
     */
    qg.downloadFile = function (object) {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (request.readyState != 4) {
                return;
            }
            if (request.status == 200 || (request.status == 0 && request.response != null && request.response.byteLength > 0)) {
                if (object && object.success) {
                    var tempPath;
                    if (object.filePath) {
                        tempPath = object.filePath;
                        qg.cacheFiles[tempPath] = request.response;
                    } else {
                        tempPath = md5(object.url);
                        qg.tempFiles[tempPath] = request.response;
                    }
                    
                    var ends = object.url.substring(object.url.indexOf("."), object.url.length);
                    if (ends == ".png" || ends == ".jpg" || ends == ".webp"){  //img加载图片
                        qg.blobFiles[tempPath] = URL.createObjectURL(new Blob([request.response]));
                        qg.blobMap[qg.blobFiles[tempPath]] = tempPath;
                        if (object.filePath)
                            object.success({statusCode: 200, dataLength: request.response.byteLength, filePath: qg.blobFiles[tempPath]});
                        else
                            object.success({statusCode: 200, dataLength: request.response.byteLength, tempFilePath: qg.blobFiles[tempPath]});
                    } else {
                        if (object.filePath)
                            object.success({statusCode: 200, dataLength: request.response.byteLength, filePath: tempPath});
                        else
                            object.success({statusCode: 200, dataLength: request.response.byteLength, tempFilePath: tempPath});
                    }
                }
            }
            else {
                if (object && object.fail) object.fail({errMsg:"失败"});
            }
        };
        request.open("GET", object.url);
        request.responseType = "arraybuffer";
        request.send();
    };
    qg.getFileSystemManager = function () {
        return qg.fsm;
    };
    var FileSystemManager = (function () {
        function FileSystemManager() {
        }
        /**
         * 读取文件  object = {filePath, encoding, success:{errMsg:"readFile:ok", data:{}}, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.readFile = function (object) {
            if (object && object.success) {
                var bytes, filePath = object.filePath;//.replace(/\//g, "_");
                if (qg.tempFiles[filePath]) bytes = qg.tempFiles[filePath];
                else if (qg.cacheFiles[filePath]) bytes = qg.cacheFiles[filePath];
                else bytes = qg.unzipFiles[filePath];
                if (bytes) {
                    object.success({errMsg:"readFile:ok", data:bytes});
                } else {
                    object.fail({errMsg:"失败"});
                }
            }
        };
        /**
         * 写入文件  object = {filePath, data, encoding, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.writeFile = function (object) {
            if (object && object.success) object.success({});
        };
        /**
         * 获取文件信息  object = {filePath, success:{size:1}, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.getFileInfo = function (object) {
            if (object && object.success) {
                var bytes;
                if (qg.tempFiles[object.filePath]) bytes = qg.tempFiles[object.filePath];
                else if (qg.cacheFiles[object.filePath]) bytes = qg.cacheFiles[object.filePath];
                else if (qg.tempFiles[qg.blobMap[object.filePath]]) bytes = qg.tempFiles[qg.blobMap[object.filePath]];
                else if (qg.cacheFiles[qg.blobMap[object.filePath]]) bytes = qg.cacheFiles[qg.blobMap[object.filePath]];

                if (bytes) {
                    object.success({size:bytes.byteLength});
                } else {
                    object.fail({errMsg:"失败"});
                }
            }
        };
        /**
         * 保存为本地缓存  object = {tempFilePath, success:{savedFilePath:""}, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.saveFile = function (object) {
            if (object && object.success) {
                if (object.tempFilePath.indexOf("blob:") == -1 && qg.tempFiles[object.tempFilePath]) {
                    var savePath = "save_"+ object.tempFilePath;
                    qg.cacheFiles[savePath] = qg.tempFiles[object.tempFilePath];
                    delete qg.tempFiles[object.tempFilePath];
                    object.success({savedFilePath:savePath});
                } else if (object.tempFilePath.indexOf("blob:") != -1 && qg.blobMap[object.tempFilePath] && qg.tempFiles[qg.blobMap[object.tempFilePath]]){
                    var savePath = object.tempFilePath;
                    qg.cacheFiles[savePath] = qg.tempFiles[qg.blobMap[object.tempFilePath]];
                    delete qg.tempFiles[qg.blobMap[object.tempFilePath]];
                    object.success({savedFilePath:savePath});
                } else {
                    object.fail({fail:{errMsg:"失败"}});
                }
            }
        };   
        /**
         * 创建目录  object = {dirPath, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.mkdir = function (object) {
            if (object && object.success) object.success({});
        };
        /**
         * 删除目录  object = {dirPath, recursive, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.rmdir = function (object) {
            if (object && object.success) object.success({});
        };
        /**
         * 解压文件  object = {zipFilePath, targetPath, success:{errMsg:"unzip:ok", }, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.unzip = function (object) {
            if (object && object.success) {
                var bytes;
                if (qg.tempFiles[object.zipFilePath]) bytes = qg.tempFiles[object.zipFilePath];
                else if (qg.cacheFiles[object.zipFilePath]) bytes = qg.cacheFiles[object.zipFilePath];

                if (bytes) {
                    bytes = DecodeTools.decodeBuff(bytes);
                    qg.unzipFiles[object.targetPath + "/res"] = bytes;
                    // qg.unzipFiles[object.targetPath.replace(/\//g, "_") + "_res"] = bytes;
                    object.success({errMsg:"unzip:ok"});
                } else {
                    object.fail({errMsg:"失败"});
                }
            }
        };
        /**
         * 删除文件  object = {filePath, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.unlink = function (object) {
            if (object && object.success) {
                delete qg.tempFiles[object.filePath];
                delete qg.cacheFiles[object.filePath];
                object.success({});
            }
        };
        /**
         * 判断文件/目录是否存在  object = {path, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.access = function (object) {
            if (object && object.success) object.success({});
        };
        /**
         * 读取目录里文件列表  object = {dirPath, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.readdir = function (object) {
            if (object && object.success) {
                var dir;
                if (object.dirPath.indexOf("/cache/")) {
                    dir = qg.cacheFiles;
                } else {
                    dir = [];
                }
                var files = [];
                for (const key in dir) {
                    files.push(key);
                }
                object.success({files:files});
            }
        };
        /**
         * 读取压缩包内的文件  object = {filePath, entries, success, fail:{errMsg:"失败"}}
         */
        FileSystemManager.prototype.readZipEntry = function (object) {
            var bytes;
            if (qg.tempFiles[object.filePath]) bytes = qg.tempFiles[object.filePath];
            else if (qg.cacheFiles[object.filePath]) bytes = qg.cacheFiles[object.filePath];
            if (bytes) {
                bytes = DecodeTools.decodeBuff(bytes);
                object.success({errMsg:"readZipEntry:ok", entries:{"res":{errMsg:"readZipEntry:ok", data:bytes}}});
            } else {
                object.fail({errMsg:"失败"});
            }
        };//

        return FileSystemManager;
    }());

    qg.env = {USER_DATA_PATH: "vivo_file"};
    qg.fsm = new FileSystemManager();
    qg.storageMap = {};
    qg.cacheFiles = {};
    qg.tempFiles = {};
    qg.unzipFiles = {};
    qg.blobFiles = {};
    qg.blobMap = {};
    return qg;
}());
