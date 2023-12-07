(function (window, document, Laya) {
  var __un = Laya.un,
    __uns = Laya.uns,
    __static = Laya.static,
    __class = Laya.class,
    __getset = Laya.getset,
    __newvec = Laya.__newvec;

  var Browser = laya.utils.Browser,
    Event = laya.events.Event,
    EventDispatcher = laya.events.EventDispatcher;
  var HTMLImage = laya.resource.HTMLImage,
    Handler = laya.utils.Handler,
    Input = laya.display.Input,
    Loader = laya.net.Loader;
  var Matrix = laya.maths.Matrix,
    Render = laya.renders.Render,
    RunDriver = laya.utils.RunDriver,
    Sound = laya.media.Sound;
  var SoundChannel = laya.media.SoundChannel,
    SoundManager = laya.media.SoundManager,
    Stage = laya.display.Stage,
    URL = laya.net.URL;
  var Utils = laya.utils.Utils;
  //class laya.wx.mini.MiniAdpter
  var MiniAdpter = (function () {
    function MiniAdpter() { }
    __class(MiniAdpter, 'laya.wx.mini.MiniAdpter');
    MiniAdpter.getJson = function (data) {
      return JSON.parse(data);
    }

    MiniAdpter.init = function (isPosMsg, isSon) {
      (isPosMsg === void 0) && (isPosMsg = false);
      (isSon === void 0) && (isSon = false);
      if (MiniAdpter._inited) return;
      MiniAdpter.window = /*__JS__ */ window;
      if (MiniAdpter.window.navigator.userAgent.indexOf('MiniGame') < 0) return;
      MiniAdpter._inited = true;
      MiniAdpter.isZiYu = isSon;
      MiniAdpter.isPosMsgYu = isPosMsg;
      MiniAdpter.EnvConfig = {};
      if (!MiniAdpter.isZiYu) {
        MiniFileMgr.setNativeFileDir("/layaairGame");
        MiniFileMgr.existDir(MiniFileMgr.fileNativeDir, Handler.create(MiniAdpter, MiniAdpter.onMkdirCallBack));
      }
      MiniAdpter.window.focus = function () { };
      Laya['getUrlPath'] = function () { };
      MiniAdpter.window.logtime = function (str) { };
      MiniAdpter.window.alertTimeLog = function (str) { };
      MiniAdpter.window.resetShareInfo = function () { };
      MiniAdpter.window.CanvasRenderingContext2D = function () { };
      MiniAdpter.window.CanvasRenderingContext2D.prototype = MiniAdpter.window.wx.createCanvas().getContext('2d').__proto__;
      MiniAdpter.window.document.body.appendChild = function () { };
      MiniAdpter.EnvConfig.pixelRatioInt = 0;
      RunDriver.getPixelRatio = MiniAdpter.pixelRatio;
      MiniAdpter._preCreateElement = Browser.createElement;
      Browser["createElement"] = MiniAdpter.createElement;
      RunDriver.createShaderCondition = MiniAdpter.createShaderCondition;
      Utils.parseXMLFromString = MiniAdpter.parseXMLFromString;
      Input['_createInputElement'] = MiniInput['_createInputElement'];

      MiniAdpter.EnvConfig.load = Loader.prototype.load;
      Loader.prototype.load = MiniLoader.prototype.load;

      wx.onShow(function() {
        Laya.stage._setStageVisible(true);
        console.info("小游戏进入前台："+Laya.stage.isVisibility);
        
      });
      wx.onHide(function() {
        Laya.stage._setStageVisible(false);
        console.info("小游戏进入后台："+Laya.stage.isVisibility);
        
      });

      // Loader.prototype._loadImage=MiniImage.prototype._loadImage;
      if (MiniAdpter.isZiYu && isPosMsg) {
        /*__JS__ */
        wx.onMessage(function (message) {
          if (message['isLoad']) {
            MiniFileMgr.ziyuFileData[message.url] = message.data;
          }
        });
      }
    }

    MiniAdpter.onMkdirCallBack = function (errorCode, data) {
      if (!errorCode)
        MiniFileMgr.filesListObj = JSON.parse(data.data);
    }

    MiniAdpter.pixelRatio = function () {
      if (!MiniAdpter.EnvConfig.pixelRatioInt) {
        try {
          var systemInfo = /*__JS__ */ wx.getSystemInfoSync();
          MiniAdpter.EnvConfig.pixelRatioInt = systemInfo.pixelRatio;
          systemInfo = systemInfo;
          return systemInfo.pixelRatio;
        } catch (error) { }
      }
      return MiniAdpter.EnvConfig.pixelRatioInt;
    }

    MiniAdpter.createElement = function (type) {
      if (type == "canvas") {
        var _source;
        if (MiniAdpter.idx == 1) {
          if (MiniAdpter.isZiYu) {
            _source = /*__JS__ */ sharedCanvas;
            _source.style = {};
          } else {
            _source = /*__JS__ */ window.canvas;
          }
        } else {
          _source = /*__JS__ */ window.wx.createCanvas();
        }
        MiniAdpter.idx++;
        return _source;
      } else if (type == "textarea" || type == "input") {
        return MiniAdpter.onCreateInput(type);
      } else if (type == "div") {
        var node = MiniAdpter._preCreateElement(type);
        node.contains = function (value) {
          return null
        };
        node.removeChild = function (value) { };
        return node;
      } else {
        return MiniAdpter._preCreateElement(type);
      }
    }

    MiniAdpter.onCreateInput = function (type) {
      var node = MiniAdpter._preCreateElement(type);
      node.focus = MiniInput.wxinputFocus;
      node.blur = MiniInput.wxinputblur;
      node.style = {};
      node.value = 0;
      node.parentElement = {};
      node.placeholder = {};
      node.type = {};
      node.setColor = function (value) { };
      node.setType = function (value) { };
      node.setFontFace = function (value) { };
      node.addEventListener = function (value) { };
      node.contains = function (value) {
        return null
      };
      node.removeChild = function (value) { };
      return node;
    }

    MiniAdpter.createShaderCondition = function (conditionScript) {
      var _$this = this;
      var func = function () {
        var abc = conditionScript;
        return _$this[conditionScript.replace("this.", "")];
      }
      return func;
    }

    MiniAdpter.EnvConfig = null;
    MiniAdpter.window = null;
    MiniAdpter._preCreateElement = null;
    MiniAdpter._inited = false;
    MiniAdpter.wxRequest = null;
    MiniAdpter.systemInfo = null;
    MiniAdpter.version = "0.0.1";
    MiniAdpter.isZiYu = false;
    MiniAdpter.isPosMsgYu = false;
    MiniAdpter.parseXMLFromString = function (value) {
      var rst;
      var Parser;
      value = value.replace(/>\s+</g, '><');
      try {
        /*__JS__ */
        rst = (new window.Parser.DOMParser()).parseFromString(value, 'text/xml');
      } catch (error) {
        throw "需要引入xml解析库文件";
      }
      return rst;
    }

    MiniAdpter.idx = 1;
    return MiniAdpter;
  })()


  //class laya.wx.mini.MiniImage
  var MiniImage = (function () {
    function MiniImage() { }
    __class(MiniImage, 'laya.wx.mini.MiniImage');
    var __proto = MiniImage.prototype;
    __proto._loadImage = function (url) {
      var thisLoader = this;
      var isTransformUrl = false;
      if (url.indexOf("layaNativeDir/") == -1) {
        isTransformUrl = true;
        url = URL.formatURL(url);
      }
      if (!MiniFileMgr.getFileInfo(url)) {
        if (url.indexOf("http://") != -1 || url.indexOf("https://") != -1)
          MiniFileMgr.downImg(url, new Handler(MiniImage, MiniImage.onDownImgCallBack, [url, thisLoader]), url);
        else
          MiniImage.onCreateImage(url, thisLoader, true);
      } else {
        MiniImage.onCreateImage(url, thisLoader, !isTransformUrl);
      }
    }

    MiniImage.onDownImgCallBack = function (sourceUrl, thisLoader, errorCode) {
      if (!errorCode)
        MiniImage.onCreateImage(sourceUrl, thisLoader);
      else {
        thisLoader.onError(null);
      }
    }

    MiniImage.onCreateImage = function (sourceUrl, thisLoader, isLocal) {
      (isLocal === void 0) && (isLocal = false);
      var fileNativeUrl;
      if (!isLocal) {
        var fileObj = MiniFileMgr.getFileInfo(sourceUrl);
        var fileMd5Name = fileObj.md5;
        fileNativeUrl = MiniFileMgr.getFileNativePath(fileMd5Name);
      } else {
        fileNativeUrl = sourceUrl;
      }
      if (thisLoader.imgCache == null)
        thisLoader.imgCache = {};
      var image;

      function clear() {
        image.onload = null;
        image.onerror = null;
        delete thisLoader.imgCache[sourceUrl]
      };
      var onload = function () {
        clear();
        thisLoader.onLoaded(image);
      };
      var onerror = function () {
        clear();
        thisLoader.event( /*laya.events.Event.ERROR*/ "error", "Load image failed");
      }
      if (thisLoader._type == "nativeimage") {
        image = new Browser.window.Image();
        image.crossOrigin = "";
        image.onload = onload;
        image.onerror = onerror;
        image.src = fileNativeUrl;
        thisLoader.imgCache[sourceUrl] = image;
      } else {
        new HTMLImage.create(fileNativeUrl, {
          onload: onload,
          onerror: onerror,
          onCreate: function (img) {
            image = img;
            thisLoader.imgCache[sourceUrl] = img;
          }
        });
      }
    }

    return MiniImage;
  })()


  //class laya.wx.mini.MiniInput
  var MiniInput = (function () {
    function MiniInput() { }
    __class(MiniInput, 'laya.wx.mini.MiniInput');
    MiniInput._createInputElement = function () {
      Input['_initInput'](Input['area'] = Browser.createElement("textarea"));
      Input['_initInput'](Input['input'] = Browser.createElement("input"));
      Input['inputContainer'] = Browser.createElement("div");
      Input['inputContainer'].style.position = "absolute";
      Input['inputContainer'].style.zIndex = 1E5;
      Browser.container.appendChild(Input['inputContainer']);
      Input['inputContainer'].setPos = function (x, y) {
        Input['inputContainer'].style.left = x + 'px';
        Input['inputContainer'].style.top = y + 'px';
      };
      Laya.stage.on("resize", null, MiniInput._onStageResize);
      /*__JS__ */
      wx.onWindowResize && /*__JS__ */ wx.onWindowResize(function (res) {
        /*__JS__ */
        window.dispatchEvent && /*__JS__ */ window.dispatchEvent("resize");
      });
      SoundManager._soundClass = MiniSound;
      SoundManager._musicClass = MiniSound;     
      window._videoClass = MiniVideo;
    }

    MiniInput._onStageResize = function () {
      var ts = Laya.stage._canvasTransform.identity();
      ts.scale((Browser.width / Render.canvas.width / RunDriver.getPixelRatio()), Browser.height / Render.canvas.height / RunDriver.getPixelRatio());
    }

    MiniInput.wxinputFocus = function (e) {
      var _inputTarget = Input['inputElement'].target;
      if (_inputTarget && !_inputTarget.editable) {
        return;
      }
      MiniAdpter.window.wx.offKeyboardConfirm();
      MiniAdpter.window.wx.offKeyboardInput();
      MiniAdpter.window.wx.showKeyboard({
        defaultValue: _inputTarget.text,
        maxLength: _inputTarget.maxChars,
        multiple: _inputTarget.multiline,
        confirmHold: true,
        confirmType: 'done',
        success: function (res) { },
        fail: function (res) { }
      });
      MiniAdpter.window.wx.onKeyboardConfirm(function (res) {
        var str = res ? res.value : "";
        _inputTarget.text = str;
        _inputTarget.event( /*laya.events.Event.INPUT*/ "input");
        laya.wx.mini.MiniInput.inputEnter();
      })
      MiniAdpter.window.wx.onKeyboardInput(function (res) {
        var str = res ? res.value : "";
        if (!_inputTarget.multiline) {
          if (str.indexOf("\n") != -1) {
            laya.wx.mini.MiniInput.inputEnter();
            return;
          }
        }
        _inputTarget.text = str;
        _inputTarget.event( /*laya.events.Event.INPUT*/ "input");
      })
      MiniAdpter.window.wx.onKeyboardComplete(function (res) {
        var str = res ? res.value : "";
        console.log("onKeyboardComplete:",str)
        if(_inputTarget && !_inputTarget.destroyed){
          _inputTarget.text = str;
          _inputTarget.event( /*laya.events.Event.INPUT*/ "input");
          MiniAdpter.window.wx.offKeyboardComplete();
        }      
      });
    }

    MiniInput.inputEnter = function () {
      Input['inputElement'].target.focus = false;
    }

    MiniInput.wxinputblur = function () {
      MiniInput.hideKeyboard();
    }

    MiniInput.hideKeyboard = function () {      
      MiniAdpter.window.wx.offKeyboardConfirm();
      MiniAdpter.window.wx.offKeyboardInput();
      MiniAdpter.window.wx.hideKeyboard({
        success: function (res) {
          console.log('隐藏键盘')
        },
        fail: function (res) {
          console.log("隐藏键盘出错:" + (res ? res.errMsg : ""));
        }
      });
    }

    return MiniInput;
  })()


  //class laya.wx.mini.MiniLoader
  var MiniLoader = (function () {
    function MiniLoader() { }
    __class(MiniLoader, 'laya.wx.mini.MiniLoader');
    var __proto = MiniLoader.prototype;
    /**
     *
     *@param url
     *@param type
     *@param cache
     *@param group
     *@param ignoreCache
     */
    __proto.load = function (url, type, cache, group, ignoreCache) {
      // console.warn("load load   load   url:", url, "type:", type, "cache:", cache);
      // console.warn("MiniAdpter.EnvConfig.load:", MiniAdpter.EnvConfig.load.toString());
      // console.warn(" Loader.prototype.load:", Loader.prototype.load.toString());

      (cache === void 0) && (cache = true);
      (ignoreCache === void 0) && (ignoreCache = false);
      var thisLoader = this;
      thisLoader._url = url;
      if (url.indexOf("data:image") === 0) thisLoader._type = type = /*laya.net.Loader.IMAGE*/ "image";
      else {
        thisLoader._type = type || (type = thisLoader.getTypeFromUrl(url));
      }
      thisLoader._cache = cache;
      thisLoader._data = null;
      var encoding = "ascii";
      if (url.indexOf(".fnt") != -1) {
        encoding = "utf8";
      } else if (type == "arraybuffer") {
        encoding = "";
      };
      var urlType = Utils.getFileExtension(url);
      if ((MiniLoader._fileTypeArr.indexOf(urlType) != -1)) {
        MiniAdpter.EnvConfig.load.call(this, url, type, cache, group, ignoreCache);
      } else {
        if (!MiniFileMgr.getFileInfo(url)) {
          if (url.indexOf("layaNativeDir/") != -1) {
            if (MiniAdpter.isZiYu) {
              var fileData = MiniFileMgr.ziyuFileData[url];
              thisLoader.onLoaded(fileData);
              return;
            } else {
              cosnole.log("read read")
              MiniFileMgr.read(url, encoding, new Handler(MiniLoader, MiniLoader.onReadNativeCallBack, [encoding, url, type, cache, group, ignoreCache, thisLoader]));
              return;
            }
          }
          if (URL.rootPath == "")
            var fileNativeUrl = url;
          else
            fileNativeUrl = url.split(URL.rootPath)[0];
          if (url.indexOf("http://") != -1 || url.indexOf("https://") != -1) {
            MiniAdpter.EnvConfig.load.call(thisLoader, url, type, cache, group, ignoreCache);
          } else {
            MiniFileMgr.readFile(fileNativeUrl, encoding, new Handler(MiniLoader, MiniLoader.onReadNativeCallBack, [encoding, url, type, cache, group, ignoreCache, thisLoader]), url);
          }
        } else {
          MiniAdpter.EnvConfig.load.call(this, url, type, cache, group, ignoreCache);
        }
      }
    }

    __proto.resMgrLoad = function (url, callback, priority, realTime, forceTry, uncompress, limitType) {
      priority === void 0 && (priority = 0);
      realTime === void 0 && (realTime = false);
      forceTry === void 0 && (forceTry = false);
      uncompress === void 0 && (uncompress = 0);
      limitType === void 0 && (limitType = 3);
      if (url.indexOf("mpack") != -1) {
        console.log("=============resMgrLoad url:", url)
      }

     
      MiniAdpter.EnvConfig.resMgrLoad(url, (url, handle, buffer) => {
        MiniLoader.prototype.resMgrLoadCallBack(url, handle, buffer, callback);
      }, priority, realTime, forceTry, uncompress, limitType);
    }

    __proto.resMgrLoadCallBack = function (url, handle, buffer, callback) {
      console.log("buff:::", url, buffer, MiniFileMgr.fileNativeDir + "///" + MiniFileMgr.fileListName);
      callback(url, handle, buffer);
      //测试
      // MiniFileMgr.onSaveFile(url,buffer)
      
      
    }

    /**
     *清理资源
     *@param url
     *@param forceDispose
     */
    __proto.clearRes = function (url, forceDispose) {
      (forceDispose === void 0) && (forceDispose = false);
      var thisLoader = this;
      thisLoader.clearRes(url, forceDispose);
      var fileObj = MiniFileMgr.getFileInfo(url);
      if (fileObj && (url.indexOf("http://") != -1 || url.indexOf("https://") != -1)) {
        var fileMd5Name = fileObj.md5;
        var fileNativeUrl = MiniFileMgr.getFileNativePath(fileMd5Name);
        MiniFileMgr.remove(fileNativeUrl);
      }
    }

    MiniLoader.onReadNativeCallBack = function (encoding, url, type, cache, group, ignoreCache, thisLoader, errorCode, data) {
      (cache === void 0) && (cache = true);
      (ignoreCache === void 0) && (ignoreCache = false);
      (errorCode === void 0) && (errorCode = 0);
      if (!errorCode) {
        var tempData;
        if (type == /*laya.net.Loader.JSON*/ "json" || type == /*laya.net.Loader.ATLAS*/ "atlas") {
          tempData = MiniAdpter.getJson(data.data);
        } else if (type == /*laya.net.Loader.XML*/ "xml") {
          tempData = Utils.parseXMLFromString(data.data);
        } else {
          tempData = data.data;
        }
        thisLoader.onLoaded(tempData);
        if (!MiniAdpter.isZiYu && MiniAdpter.isPosMsgYu && type != /*laya.net.Loader.BUFFER*/ "arraybuffer") {
          /*__JS__ */
          wx.postMessage({
            url: url,
            data: tempData,
            isLoad: true
          });
        }
      } else if (errorCode == 1) {
        MiniAdpter.EnvConfig.load.call(thisLoader, url, type, cache, group, ignoreCache);
      }
    }

    __static(MiniLoader, ['_fileTypeArr', function () {
      return this._fileTypeArr = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]);
    return MiniLoader;
  })()


  //class laya.wx.mini.MiniFileMgr extends laya.events.EventDispatcher
  var MiniFileMgr = (function (_super) {
    function MiniFileMgr() {
      MiniFileMgr.__super.call(this);;
    }

    __class(MiniFileMgr, 'laya.wx.mini.MiniFileMgr', _super);
    MiniFileMgr.isLoadFile = function (type) {
      return MiniFileMgr._fileTypeArr.indexOf(type) != -1 ? true : false;
    }

    MiniFileMgr.getFileInfo = function (fileUrl) {
      var fileNativePath = fileUrl.split("?")[0];
      var fileObj = MiniFileMgr.filesListObj[fileNativePath];
      if (fileObj == null)
        return null;
      else
        return fileObj;
      return null;
    }

    MiniFileMgr.onFileUpdate = function (tempFilePath, readyUrl) {
      var temp = tempFilePath.split("/");
      var tempFileName = temp[temp.length - 1];
      var fileObj = MiniFileMgr.getFileInfo(readyUrl);
      if (fileObj == null)
        MiniFileMgr.onSaveFile(readyUrl, tempFileName);
      else {
        if (fileObj.readyUrl != readyUrl)
          MiniFileMgr.remove(tempFileName, readyUrl);
      }
    }

    MiniFileMgr.exits = function (fileName, callBack) {
      var nativeFileName = MiniFileMgr.getFileNativePath(fileName);
      MiniFileMgr.fs.getFileInfo({
        filePath: nativeFileName,
        success: function (data) {
          callBack != null && callBack.runWith([0, data]);
        },
        fail: function (data) {
          callBack != null && callBack.runWith([1, data]);
        }
      });
    }

    MiniFileMgr.read = function (filePath, encoding, callBack, readyUrl) {
      (encoding === void 0) && (encoding = "ascill");
      (readyUrl === void 0) && (readyUrl = "");
      var fileUrl;
      if (readyUrl != "") {
        fileUrl = MiniFileMgr.getFileNativePath(filePath)
      } else {
        fileUrl = filePath;
      }
      MiniFileMgr.fs.readFile({
        filePath: fileUrl,
        encoding: encoding,
        success: function (data) {
          callBack != null && callBack.runWith([0, data]);
        },
        fail: function (data) {
          if (data && readyUrl != "")
            MiniFileMgr.down(readyUrl, encoding, callBack, readyUrl);
          else
            callBack != null && callBack.runWith([1]);
        }
      });
    }

    MiniFileMgr.readNativeFile = function (filePath, callBack) {
      MiniFileMgr.fs.readFile({
        filePath: filePath,
        encoding: "",
        success: function (data) {
          callBack != null && callBack.runWith([0]);
        },
        fail: function (data) {
          callBack != null && callBack.runWith([1]);
        }
      });
    }

    MiniFileMgr.down = function (fileUrl, encoding, callBack, readyUrl) {
      (encoding === void 0) && (encoding = "ascill");
      (readyUrl === void 0) && (readyUrl = "");
      var savePath = MiniFileMgr.getFileNativePath(readyUrl);
      var downloadTask = MiniFileMgr.wxdown({
        url: fileUrl,
        filePath: savePath,
        success: function (data) {
          if (data.statusCode === 200)
            MiniFileMgr.readFile(data.filePath, encoding, callBack, readyUrl);
        },
        fail: function (data) {
          callBack != null && callBack.runWith([1, data]);
        }
      });
      downloadTask.onProgressUpdate(function (data) {
        callBack != null && callBack.runWith([2, data.progress]);
      });
    }

    MiniFileMgr.readFile = function (filePath, encoding, callBack, readyUrl) {
      (encoding === void 0) && (encoding = "ascill");
      (readyUrl === void 0) && (readyUrl = "");
      MiniFileMgr.fs.readFile({
        filePath: filePath,
        encoding: encoding,
        success: function (data) {
          if (filePath.indexOf("http://") != -1 || filePath.indexOf("https://") != -1)
            MiniFileMgr.onFileUpdate(filePath, readyUrl);
          callBack != null && callBack.runWith([0, data]);
        },
        fail: function (data) {
          if (data)
            callBack != null && callBack.runWith([1, data]);
        }
      });
    }

    MiniFileMgr.downImg = function (fileUrl, callBack, readyUrl) {
      (readyUrl === void 0) && (readyUrl = "");
      var downloadTask = MiniFileMgr.wxdown({
        url: fileUrl,
        success: function (data) {
          if (data.statusCode === 200) {
            MiniFileMgr.copyFile(data.tempFilePath, readyUrl, callBack);
          }
        },
        fail: function (data) {
          callBack != null && callBack.runWith([1, data]);
        }
      });
    }

    MiniFileMgr.copyFile = function (tempFilePath, readyUrl, callBack) {
      var temp = tempFilePath.split("/");
      var tempFileName = temp[temp.length - 1];
      var fileurlkey = readyUrl.split("?")[0];
      var fileObj = MiniFileMgr.getFileInfo(readyUrl);
      var saveFilePath = MiniFileMgr.getFileNativePath(tempFileName);
      MiniFileMgr.fs.copyFile({
        srcPath: tempFilePath,
        destPath: saveFilePath,
        success: function (data) {
          if (!fileObj) {
            MiniFileMgr.onSaveFile(readyUrl, tempFileName);
            callBack != null && callBack.runWith([0]);
          } else {
            if (fileObj.readyUrl != readyUrl)
              MiniFileMgr.remove(tempFileName, readyUrl, callBack);
          }
        },
        fail: function (data) {
          callBack != null && callBack.runWith([1, data]);
        }
      });
    }

    MiniFileMgr.getFileNativePath = function (fileName) {
      return laya.wx.mini.MiniFileMgr.fileNativeDir + "/" + fileName;
    }

    MiniFileMgr.remove = function (tempFileName, readyUrl, callBack) {
      (readyUrl === void 0) && (readyUrl = "");
      var fileObj = MiniFileMgr.getFileInfo(readyUrl);
      var deleteFileUrl = MiniFileMgr.getFileNativePath(fileObj.md5);
      Laya.loader.clearRes(fileObj.readyUrl);
      MiniFileMgr.fs.unlink({
        filePath: deleteFileUrl,
        success: function (data) {
          if (readyUrl != "")
            MiniFileMgr.onSaveFile(readyUrl, tempFileName);
          callBack != null && callBack.runWith([0]);
        },
        fail: function (data) { }
      });
    }
    

    MiniFileMgr.onSaveFile = function (readyUrl, md5Name) {
      var fileurlkey = readyUrl.split("?")[0];
      MiniFileMgr.filesListObj[fileurlkey] = {
        md5: md5Name,
        readyUrl: readyUrl
      };
      MiniFileMgr.fs.writeFile({
        filePath: MiniFileMgr.fileNativeDir + "/" + MiniFileMgr.fileListName,
        encoding: 'utf8',
        data: JSON.stringify(MiniFileMgr.filesListObj),
        success: function (data) {

          console.log("写入测试测试成功：",data)

         },
        fail: function (data) { 
          console.log("写入测试测试失败：", data)
        }
      });
    }

    MiniFileMgr.existDir = function (dirPath, callBack) {
      MiniFileMgr.fs.mkdir({
        dirPath: dirPath,
        success: function (data) {
          callBack != null && callBack.runWith([0, {
            data: JSON.stringify({})
          }]);
        },
        fail: function (data) {
          if (data.errMsg.indexOf("file already exists") != -1)
            MiniFileMgr.readSync(MiniFileMgr.fileListName, "utf8", callBack);
          else
            callBack != null && callBack.runWith([1, data]);
        }
      });
    }

    MiniFileMgr.readSync = function (filePath, encoding, callBack, readyUrl) {
      (encoding === void 0) && (encoding = "ascill");
      (readyUrl === void 0) && (readyUrl = "");
      var fileUrl = MiniFileMgr.getFileNativePath(filePath);
      var filesListStr
      try {
        filesListStr = MiniFileMgr.fs.readFileSync(fileUrl);
        callBack != null && callBack.runWith([0, {
          data: filesListStr
        }]);
      } catch (error) {
        callBack != null && callBack.runWith([1]);
      }
    }

    //读文件
    MiniFileMgr.readCache = function(){
      
    }

    MiniFileMgr.writeCache = function (filePath) {
      var fileurlkey = readyUrl.split("?")[0];
      MiniFileMgr.filesListObj[fileurlkey] = {
        md5: md5Name,
        readyUrl: readyUrl
      };
      MiniFileMgr.fs.writeFile({
        filePath: MiniFileMgr.fileNativeDir + "/" + MiniFileMgr.fileListName,
        encoding: 'utf8',
        data: JSON.stringify(MiniFileMgr.filesListObj),
        success: function (data) { },
        fail: function (data) { }
      });
    }


    MiniFileMgr.setNativeFileDir = function (value) {
      MiniFileMgr.fileNativeDir = /*__JS__ */ wx.env.USER_DATA_PATH + value;
    }

    MiniFileMgr.filesListObj = {};
    MiniFileMgr.fileNativeDir = null;
    MiniFileMgr.fileListName = "layaairfiles.txt";
    MiniFileMgr.ziyuFileData = {};
    __static(MiniFileMgr, ['_fileTypeArr', function () {
      return this._fileTypeArr = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this.fs = /*__JS__ */ wx.getFileSystemManager();
    }, 'wxdown', function () {
      return this.wxdown = /*__JS__ */ wx.downloadFile;
    }]);
    return MiniFileMgr;
  })(EventDispatcher)


  //class laya.wx.mini.MiniSound extends laya.events.EventDispatcher
  var MiniSound = (function (_super) {
    function MiniSound() {
      this._sound = null;
      this._chanell = null;
      /**
       *声音URL
       */
      this.url = null;
      /**
       *是否已加载完成
       */
      this.loaded = false;
      MiniSound.__super.call(this);
      this._sound = MiniSound._createSound();
      this._chanell = new MiniSoundChannel(this._sound);
    }

    __class(MiniSound, 'laya.wx.mini.MiniSound', _super);
    var __proto = MiniSound.prototype;
    /**
     *加载声音。
     *@param url 地址。
     *
     */
    __proto.load = function (url) {     
      var _$this = this;
      url = URL.formatURL(url);
      this.url = url;
      if (MiniSound._audioCache[url]) {
        this.event( /*laya.events.Event.COMPLETE*/ "complete");
        return;
      }
      function _clearSound() {
        if (MiniSound._null != undefined) {
          _$this._sound.onCanplay(MiniSound._null);
          _$this._sound.onError(MiniSound._null);
        } else {
          try {
            _$this._sound.onCanplay(null);
            _$this._sound.onError(null);
            MiniSound._null = null;
          } catch (error) {
            console.warn("[wxmini] _clearSound:"+ error);
            _$this._sound.onCanplay(onNull);
            _$this._sound.onError(onNull);
            MiniSound._null = onNull;
          }
        }
      }
      function onCanPlay() {
        // _clearSound();
        me.loaded = true;
        me.event( /*laya.events.Event.COMPLETE*/ "complete");
        MiniSound._audioCache[me.url] = me;
      }
      function onError(res) {
        console.error("errCode="+res.errCode+"  errMsg="+res.errMsg);
        // _clearSound();
        me.event( /*laya.events.Event.ERROR*/ "error");
      }
      function onNull() {
      }
      this._sound.onCanplay(onCanPlay);
      this._sound.onError(onError);
      this._sound.src = url;      
      var me = this;
    }
    /**
     *播放声音。
     *@param startTime 开始时间,单位秒
     *@param loops 循环次数,0表示一直循环
     *@return 声道 SoundChannel 对象。
     *
     */
    __proto.play = function (startTime, loops) {
      (startTime === void 0) && (startTime = 0);
      (loops === void 0) && (loops = 0);
      var tSound;
      var tchanell;
      if (this.url == SoundManager._tMusic) {
        if (!MiniSound._musicAudio) MiniSound._musicAudio = this._sound;
        tSound = MiniSound._musicAudio;
        tchanell = this._chanell;
      } else {
        tSound = this._sound;//MiniSound._createSound();
        tchanell = this._chanell;
      }
      
      tSound.src = this.url;
      tSound.startTime  = 0;
      // tSound.stop && tSound.stop();
      // tSound.volume = 1;

      // console.log("this.url tSound:",this.url,"currentTime:",tSound.currentTime,"paused:",tSound.paused)
      // tSound.pause();
      // tSound.play();
      // console.log("-----this.url tSound:",this.url,"currentTime:",tSound.currentTime,"paused:",tSound.paused)
      // var channel = new MiniSoundChannel(tSound);
      // channel.url = this.url;
      // channel.loops = loops;
      // channel.startTime = startTime;
      // channel.play();
      // SoundManager.addChannel(channel);
      // return channel;

      if(tchanell.isStopped){
        tchanell.url = this.url;
        tchanell.loops = loops;
        tchanell.startTime = startTime;
        tchanell.play();        
        SoundManager.addChannel(tchanell);
      }
      return tchanell;
    }

    /**
     *释放声音资源。
     *
     */
    __proto.dispose = function () {
      var ad = MiniSound._audioCache[this.url];
      if (ad) {
        ad.src = "";
        delete MiniSound._audioCache[this.url];
      }
    }

    /**
     *获取总时间。
     */
    __getset(0, __proto, 'duration', function () {
      return this._sound.duration;
    });

    MiniSound._createSound = function () {
      MiniSound._id++;
      var audioContext = MiniAdpter.window.wx.createInnerAudioContext({useWebAudioImplement:false});     
      return audioContext
    }

    MiniSound._musicAudio = null;
    MiniSound._id = 0;
    MiniSound._audioCache = {};
    MiniSound._null = undefined;
    return MiniSound;
  })(EventDispatcher)


  /**
   *@private
   *wxaudio 方式播放声音的音轨控制
   */
  //class laya.wx.mini.MiniSoundChannel extends laya.media.SoundChannel
  var MiniSoundChannel = (function (_super) {
    function MiniSoundChannel(audio) {
      this._audio = null;
      this._onEnd = null;
     
      MiniSoundChannel.__super.call(this);
      this.isStopped = true;
      this._audio = audio;
      this._onEnd = Utils.bind(this.__onEnd, this);
      audio.onEnded(this._onEnd);
    }

    __class(MiniSoundChannel, 'laya.wx.mini.MiniSoundChannel', _super);
    var __proto = MiniSoundChannel.prototype;
    __proto.__onEnd = function () {
      if (this.loops == 1) {
        if (this.completeHandler) {
          Laya.timer.once(10, this, this.__runComplete, [this.completeHandler], false);
          this.completeHandler = null;
        }
        this.stop();
        this.event( /*laya.events.Event.COMPLETE*/ "complete");
        return;
      }
      if (this.loops > 0) {
        this.loops--;
      }
      this.startTime = 0;
      this.play();
    }
    __proto.__onNull = function () {
      
    }
    /**
     *播放
     */
    __proto.play = function () {
      this.isStopped = false;
      SoundManager.addChannel(this);
      if (this._audio) this._audio.play();
    }

    /**
     *停止播放
     *
     */
    __proto.stop = function () {
      this.isStopped = true;
      SoundManager.removeChannel(this);
      this.completeHandler = null;
      if (!this._audio)
        return;
      this._audio.stop();

      // if (MiniSoundChannel._null != undefined) {
      //   this._audio.onEnded(MiniSoundChannel._null);
      // } else {
      //   try {
      //     this._audio.onEnded(null);
      //     MiniSoundChannel._null = null;
      //   } catch (error) {
      //     console.warn("[wxmini] stop:"+ error);
      //     this._audio.onEnded(Utils.bind(this.__onNull, this));
      //     MiniSoundChannel._null = Utils.bind(this.__onNull, this);
      //   }
      // }
      // try{
      //   this._audio.offEnded(this._onEnd);
      // }catch(error){
      //   console.warn("warn:",error)
      // }     
      // this._audio = null;
    }

    __proto.pause = function () {
      this.isStopped = true;
      this._audio.pause();
    }

    __proto.resume = function () {
      if (!this._audio)
        return;
      this.isStopped = false;
      SoundManager.addChannel(this);
      this._audio.play();
    }

    /**
     *当前播放到的位置
     *@return
     *
     */
    __getset(0, __proto, 'position', function () {
      if (!this._audio)
        return 0;
      return this._audio.currentTime;
    });

    /**
     *获取总时间。
     */
    __getset(0, __proto, 'duration', function () {
      if (!this._audio)
        return 0;
      return this._audio.duration;
    });

    /**
     *设置音量
     *@param v
     *
     */
    /**
     *获取音量
     *@return
     *
     */
    __getset(0, __proto, 'volume', function () {
      return 1;
    }, function (v) { });

    MiniSoundChannel._null = undefined;

    return MiniSoundChannel;
  })(SoundChannel)


  var MiniVideo = (function () {
    function MiniVideo() {
        this.videoend = false;
        this.videourl = "";
        this.videoElement = MiniAdpter.window.wx.createVideo({showCenterPlayBtn:false,showProgressInControlMode:false,objectFit:"fill"});
    }
    __class(MiniVideo, 'laya.wx.mini.MiniVideo');
    var __proto = MiniVideo.prototype;

    __proto.on = function (eventType, ths, callBack) {
        if (eventType == "loadedmetadata") {
            this.onPlayFunc = callBack.bind(ths);
            this.videoElement.onPlay = this.onPlayFunction.bind(this);
        }
        else if (eventType == "ended") {
            this.onEndedFunC = callBack.bind(ths);
            this.videoElement.onEnded = this.onEndedFunction.bind(this);
        }
        this.videoElement.onTimeUpdate = this.onTimeUpdateFunc.bind(this);
    }

    __proto.onTimeUpdateFunc = function (data) {
        this.position = data.position;
        this._duration = data.duration;
    }
    __proto.onPlayFunction = function () {
        if (this.videoElement)
            this.videoElement.readyState = 200;
        console.log("=====视频加载完成========");
        this.onPlayFunc != null && this.onPlayFunc();
    }
    __proto.onended = function(ths, callBack){
       this.onEndedFunC = callBack.bind(ths);
       this.videoElement.onended = this.onEndedFunction.bind(this);
    }
    __proto.onEndedFunction = function () {
        if (!this.videoElement)
            return;
        this.videoend = true;
        console.log("=====视频播放完毕========");
        this.onEndedFunC != null && this.onEndedFunC();
    }
    __proto.off = function (eventType, ths, callBack) {
        if (eventType == "loadedmetadata") {
            this.onPlayFunc = callBack.bind(ths);
            this.videoElement.offPlay = this.onPlayFunction.bind(this);
        }
        else if (eventType == "ended") {
            this.onEndedFunC = callBack.bind(ths);
            this.videoElement.offEnded = this.onEndedFunction.bind(this);
        }
    }
    __proto.load = function (url) {
        if (!this.videoElement)
            return;
        this.videoElement.src = url;
    }
    __proto.play = function () {
        if (!this.videoElement)
            return;
        this.videoend = false;
        this.videoElement.play();
    }
    __proto.pause = function () {
        if (!this.videoElement)
            return;
        this.videoend = true;
        this.videoElement.pause();
    }
    __proto.size = function (width, height) {
      if (!this.videoElement)
          return;
      this.videoElement.width = width;
      this.videoElement.height = height;
    }
    __proto.destroy = function () {
      if (this.videoElement)
          this.videoElement.destroy();
      this.videoElement = null;
      this.onEndedFunC = null;
      this.onPlayFunc = null;
      this.videoend = false;
      this.videourl = null;
    }
    __proto.reload = function () {
        if (!this.videoElement)
            return;
        this.videoElement.src = this.videourl;
    }

    __getset(0, __proto, 'duration', function () {
      return this._duration;
    });

    __getset(0, __proto, 'currentTime', function () {
      if (!this.videoElement) return 0;
      return this.videoElement.initialTime;
    }, function (value) {
      if (!this.videoElement) return;
      this.videoElement.initialTime = value;
    });

    __getset(0, __proto, 'videoWidth', function () {
      if (!this.videoElement) return 0;
      return this.videoElement.width;
    });

    __getset(0, __proto, 'videoHeight', function () {
      if (!this.videoElement) return 0;
      return this.videoElement.height;
    });

    __getset(0, __proto, 'ended', function () {
      return this.videoend;
    });

    __getset(0, __proto, 'loop', function () {
      if (!this.videoElement) return false;
      return this.videoElement.loop;
    }, function (value) {
      if (!this.videoElement) return;
      this.videoElement.loop = value;
    });

    __getset(0, __proto, 'playbackRate', function () {
      if (!this.videoElement) return 0;
      return this.videoElement.playbackRate;
    }, function (value) {
      if (!this.videoElement) return;
      this.videoElement.playbackRate = value;
    });

    __getset(0, __proto, 'muted', function () {
      if (!this.videoElement) return false;
      return this.videoElement.muted;
    }, function (value) {
      if (!this.videoElement) return;
      this.videoElement.muted = value;
    });

    __getset(0, __proto, 'paused', function () {
      if (!this.videoElement) return false;
      return this.videoElement.paused;
    });

    __getset(0, __proto, 'x', function () {
      if (!this.videoElement) return 0;
      return this.videoElement.x;
    }, function (value) {
      if (!this.videoElement) return;
      this.videoElement.x = value;
    });

    __getset(0, __proto, 'y', function () {
      if (!this.videoElement) return 0;
      return this.videoElement.y;
    }, function (value) {
      if (!this.videoElement) return;
      this.videoElement.y = value;
    });

    __getset(0, __proto, 'currentSrc', function () {
      return this.videoElement.src;
    });

 __getset(0, __proto, 'src', function () {
      if (!this.videoElement) return 0;
      return this.videoElement.src;
    }, function (value) {
      if (!this.videoElement) return;
      this.videoElement.src = value;
  });

  __getset(0, __proto, 'controls', function () {
      if (!this.videoElement) return;
      return this.videoElement.controls;
    }, function (value) {
      if (!this.videoElement) return;
      this.videoElement.controls = value;
  });

   __getset(0, __proto, 'autoplay', function () {
      if (!this.videoElement) return;
      return this.videoElement.autoplay;
    }, function (value) {
      if (!this.videoElement) return;
      this.videoElement.autoplay = value;
  });


    return MiniVideo;
  })()


})(window, document, Laya);

if (typeof define === 'function' && define.amd) {
  define('laya.core', ['require', "exports"], function (require, exports) {
    'use strict';
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    for (var i in Laya) {
      var o = Laya[i];
      o && o.__isclass && (exports[i] = o);
    }
  });
}