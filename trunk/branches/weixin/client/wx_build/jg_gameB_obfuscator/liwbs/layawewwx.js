var $c = wx.$b;
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
  var MiniAdpter = function () {
    function MiniAdpter() {}
    __class(MiniAdpter, $c[670]);
    MiniAdpter.getJson = function (data) {
      return JSON.parse(data);
    };

    MiniAdpter.init = function (isPosMsg, isSon) {
      isPosMsg === void 0 && (isPosMsg = false);
      isSon === void 0 && (isSon = false);
      if (MiniAdpter._inited) return;
      MiniAdpter.window = /*__JS__ */window;
      if (MiniAdpter.window.navigator.userAgent.indexOf($c[671]) < 0) return;
      MiniAdpter._inited = true;
      MiniAdpter.isZiYu = isSon;
      MiniAdpter.isPosMsgYu = isPosMsg;
      MiniAdpter.EnvConfig = {};
      if (!MiniAdpter.isZiYu) {
        MiniFileMgr.setNativeFileDir($c[672]);
        MiniFileMgr.existDir(MiniFileMgr.fileNativeDir, Handler.create(MiniAdpter, MiniAdpter.onMkdirCallBack));
      }
      MiniAdpter.window.focus = function () {};
      Laya[$c[673]] = function () {};
      MiniAdpter.window.logtime = function (str) {};
      MiniAdpter.window.alertTimeLog = function (str) {};
      MiniAdpter.window.resetShareInfo = function () {};
      MiniAdpter.window.CanvasRenderingContext2D = function () {};
      MiniAdpter.window.CanvasRenderingContext2D.prototype = MiniAdpter.window.wx.createCanvas().getContext($c[674]).__proto__;
      MiniAdpter.window.document.body.appendChild = function () {};
      MiniAdpter.EnvConfig.pixelRatioInt = 0;
      RunDriver.getPixelRatio = MiniAdpter.pixelRatio;
      MiniAdpter._preCreateElement = Browser.createElement;
      Browser[$c[675]] = MiniAdpter.createElement;
      RunDriver.createShaderCondition = MiniAdpter.createShaderCondition;
      Utils.parseXMLFromString = MiniAdpter.parseXMLFromString;
      Input[$c[676]] = MiniInput[$c[677]];

      MiniAdpter.EnvConfig.load = Loader.prototype.load;
      Loader.prototype.load = MiniLoader.prototype.load;

      // Loader.prototype._loadImage=MiniImage.prototype._loadImage;
      if (MiniAdpter.isZiYu && isPosMsg) {
        /*__JS__ */
        wx.onMessage(function (message) {
          if (message[$c[678]]) {
            MiniFileMgr.ziyuFileData[message.url] = message.data;
          }
        });
      }
    };

    MiniAdpter.onMkdirCallBack = function (errorCode, data) {
      if (!errorCode) MiniFileMgr.filesListObj = JSON.parse(data.data);
    };

    MiniAdpter.pixelRatio = function () {
      if (!MiniAdpter.EnvConfig.pixelRatioInt) {
        try {
          var B_HGF = /*__JS__ */wx.getSystemInfoSync();
          MiniAdpter.EnvConfig.pixelRatioInt = B_HGF.pixelRatio;
          B_HGF = B_HGF;
          return B_HGF.pixelRatio;
        } catch (error) {}
      }
      return MiniAdpter.EnvConfig.pixelRatioInt;
    };

    MiniAdpter.createElement = function (type) {
      if (type == $c[679]) {
        var _source;
        if (MiniAdpter.idx == 1) {
          if (MiniAdpter.isZiYu) {
            _source = /*__JS__ */sharedCanvas;
            _source.style = {};
          } else {
            _source = /*__JS__ */window.canvas;
          }
        } else {
          _source = /*__JS__ */window.wx.createCanvas();
        }
        MiniAdpter.idx++;
        return _source;
      } else if (type == $c[680] || type == $c[681]) {
        return MiniAdpter.onCreateInput(type);
      } else if (type == $c[682]) {
        var node = MiniAdpter._preCreateElement(type);
        node.contains = function (value) {
          return null;
        };
        node.removeChild = function (value) {};
        return node;
      } else {
        return MiniAdpter._preCreateElement(type);
      }
    };

    MiniAdpter.onCreateInput = function (type) {
      var node = MiniAdpter._preCreateElement(type);
      node.focus = MiniInput.wxinputFocus;
      node.blur = MiniInput.wxinputblur;
      node.style = {};
      node.value = 0;
      node.parentElement = {};
      node.placeholder = {};
      node.type = {};
      node.setColor = function (value) {};
      node.setType = function (value) {};
      node.setFontFace = function (value) {};
      node.addEventListener = function (value) {};
      node.contains = function (value) {
        return null;
      };
      node.removeChild = function (value) {};
      return node;
    };

    MiniAdpter.createShaderCondition = function (conditionScript) {
      var _$this = this;
      var func = function () {
        var abc = conditionScript;
        return _$this[conditionScript.replace($c[683], "")];
      };
      return func;
    };

    MiniAdpter.EnvConfig = null;
    MiniAdpter.window = null;
    MiniAdpter._preCreateElement = null;
    MiniAdpter._inited = false;
    MiniAdpter.wxRequest = null;
    MiniAdpter.B_HGF = null;
    MiniAdpter.version = $c[684];
    MiniAdpter.isZiYu = false;
    MiniAdpter.isPosMsgYu = false;
    MiniAdpter.parseXMLFromString = function (value) {
      var rst;
      var Parser;
      value = value.replace(/>\s+</g, $c[685]);
      try {
        /*__JS__ */
        rst = new window.Parser.DOMParser().parseFromString(value, $c[686]);
      } catch (error) {
        throw $c[687];
      }
      return rst;
    };

    MiniAdpter.idx = 1;
    return MiniAdpter;
  }();

  //class laya.wx.mini.MiniImage
  var MiniImage = function () {
    function MiniImage() {}
    __class(MiniImage, $c[688]);
    var __proto = MiniImage.prototype;
    __proto._loadImage = function (url) {
      var thisLoader = this;
      var isTransformUrl = false;
      if (url.indexOf($c[689]) == -1) {
        isTransformUrl = true;
        url = URL.formatURL(url);
      }
      if (!MiniFileMgr.getFileInfo(url)) {
        if (url.indexOf($c[690]) != -1 || url.indexOf($c[691]) != -1) MiniFileMgr.downImg(url, new Handler(MiniImage, MiniImage.onDownImgCallBack, [url, thisLoader]), url);else MiniImage.onCreateImage(url, thisLoader, true);
      } else {
        MiniImage.onCreateImage(url, thisLoader, !isTransformUrl);
      }
    };

    MiniImage.onDownImgCallBack = function (sourceUrl, thisLoader, errorCode) {
      if (!errorCode) MiniImage.onCreateImage(sourceUrl, thisLoader);else {
        thisLoader.onError(null);
      }
    };

    MiniImage.onCreateImage = function (sourceUrl, thisLoader, isLocal) {
      isLocal === void 0 && (isLocal = false);
      var fileNativeUrl;
      if (!isLocal) {
        var fileObj = MiniFileMgr.getFileInfo(sourceUrl);
        var fileMd5Name = fileObj.md5;
        fileNativeUrl = MiniFileMgr.getFileNativePath(fileMd5Name);
      } else {
        fileNativeUrl = sourceUrl;
      }
      if (thisLoader.imgCache == null) thisLoader.imgCache = {};
      var image;

      function clear() {
        image.onload = null;
        image.onerror = null;
        delete thisLoader.imgCache[sourceUrl];
      };
      var onload = function () {
        clear();
        thisLoader.onLoaded(image);
      };
      var onerror = function () {
        clear();
        thisLoader.event( /*laya.events.Event.ERROR*/$c[692], $c[693]);
      };
      if (thisLoader._type == $c[694]) {
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
    };

    return MiniImage;
  }();

  //class laya.wx.mini.MiniInput
  var MiniInput = function () {
    function MiniInput() {}
    __class(MiniInput, $c[695]);
    MiniInput._createInputElement = function () {
      Input[$c[696]](Input[$c[697]] = Browser.createElement($c[698]));
      Input[$c[699]](Input[$c[700]] = Browser.createElement($c[701]));
      Input[$c[702]] = Browser.createElement($c[703]);
      Input[$c[704]].style.position = $c[705];
      Input[$c[706]].style.zIndex = 1E5;
      Browser.container.appendChild(Input[$c[707]]);
      Input[$c[708]].setPos = function (x, y) {
        Input[$c[709]].style.left = x + $c[710];
        Input[$c[711]].style.top = y + $c[712];
      };
      Laya.stage.on($c[713], null, MiniInput._onStageResize);
      /*__JS__ */
      wx.onWindowResize && /*__JS__ */wx.onWindowResize(function (res) {
        /*__JS__ */
        window.dispatchEvent && /*__JS__ */window.dispatchEvent($c[714]);
      });
      SoundManager._soundClass = MiniSound;
      SoundManager._musicClass = MiniSound;
    };

    MiniInput._onStageResize = function () {
      var ts = Laya.stage._canvasTransform.identity();
      ts.scale(Browser.width / Render.canvas.width / RunDriver.getPixelRatio(), Browser.height / Render.canvas.height / RunDriver.getPixelRatio());
    };

    MiniInput.wxinputFocus = function (e) {
      var _inputTarget = Input[$c[715]].target;
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
        confirmType: $c[716],
        success: function (res) {},
        fail: function (res) {}
      });
      MiniAdpter.window.wx.onKeyboardConfirm(function (res) {
        var str = res ? res.value : "";
        _inputTarget.text = str;
        _inputTarget.event( /*laya.events.Event.INPUT*/$c[717]);
        laya.wx.mini.MiniInput.inputEnter();
      });
      MiniAdpter.window.wx.onKeyboardInput(function (res) {
        var str = res ? res.value : "";
        if (!_inputTarget.multiline) {
          if (str.indexOf("\n") != -1) {
            laya.wx.mini.MiniInput.inputEnter();
            return;
          }
        }
        _inputTarget.text = str;
        _inputTarget.event( /*laya.events.Event.INPUT*/$c[718]);
      });
    };

    MiniInput.inputEnter = function () {
      Input[$c[719]].target.focus = false;
    };

    MiniInput.wxinputblur = function () {
      MiniInput.hideKeyboard();
    };

    MiniInput.hideKeyboard = function () {
      MiniAdpter.window.wx.offKeyboardConfirm();
      MiniAdpter.window.wx.offKeyboardInput();
      MiniAdpter.window.wx.hideKeyboard({
        success: function (res) {
          console.log($c[720]);
        },
        fail: function (res) {
          console.log($c[721] + (res ? res.errMsg : ""));
        }
      });
    };

    return MiniInput;
  }();

  //class laya.wx.mini.MiniLoader
  var MiniLoader = function () {
    function MiniLoader() {}
    __class(MiniLoader, $c[722]);
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

      cache === void 0 && (cache = true);
      ignoreCache === void 0 && (ignoreCache = false);
      var thisLoader = this;
      thisLoader._url = url;
      if (url.indexOf($c[723]) === 0) thisLoader._type = type = /*laya.net.Loader.IMAGE*/$c[724];else {
        thisLoader._type = type || (type = thisLoader.getTypeFromUrl(url));
      }
      thisLoader._cache = cache;
      thisLoader._data = null;
      var encoding = $c[725];
      if (url.indexOf($c[726]) != -1) {
        encoding = $c[727];
      } else if (type == $c[728]) {
        encoding = "";
      };
      var urlType = Utils.getFileExtension(url);
      if (MiniLoader._fileTypeArr.indexOf(urlType) != -1) {
        MiniAdpter.EnvConfig.load.call(this, url, type, cache, group, ignoreCache);
      } else {
        if (!MiniFileMgr.getFileInfo(url)) {
          if (url.indexOf($c[729]) != -1) {
            if (MiniAdpter.isZiYu) {
              var fileData = MiniFileMgr.ziyuFileData[url];
              thisLoader.onLoaded(fileData);
              return;
            } else {
              cosnole.log($c[730]);
              MiniFileMgr.read(url, encoding, new Handler(MiniLoader, MiniLoader.onReadNativeCallBack, [encoding, url, type, cache, group, ignoreCache, thisLoader]));
              return;
            }
          }
          if (URL.rootPath == "") var fileNativeUrl = url;else fileNativeUrl = url.split(URL.rootPath)[0];
          if (url.indexOf($c[731]) != -1 || url.indexOf($c[732]) != -1) {
            MiniAdpter.EnvConfig.load.call(thisLoader, url, type, cache, group, ignoreCache);
          } else {
            MiniFileMgr.readFile(fileNativeUrl, encoding, new Handler(MiniLoader, MiniLoader.onReadNativeCallBack, [encoding, url, type, cache, group, ignoreCache, thisLoader]), url);
          }
        } else {
          MiniAdpter.EnvConfig.load.call(this, url, type, cache, group, ignoreCache);
        }
      }
    };

    __proto.resMgrLoad = function (url, callback, priority, realTime, forceTry, uncompress, limitType) {
      priority === void 0 && (priority = 0);
      realTime === void 0 && (realTime = false);
      forceTry === void 0 && (forceTry = false);
      uncompress === void 0 && (uncompress = 0);
      limitType === void 0 && (limitType = 3);
      if (url.indexOf($c[733]) != -1) {
        console.log($c[734], url);
      }

      MiniAdpter.EnvConfig.resMgrLoad(url, (url, handle, buffer) => {
        MiniLoader.prototype.resMgrLoadCallBack(url, handle, buffer, callback);
      }, priority, realTime, forceTry, uncompress, limitType);
    };

    __proto.resMgrLoadCallBack = function (url, handle, buffer, callback) {
      console.log($c[735], url, buffer, MiniFileMgr.fileNativeDir + $c[736] + MiniFileMgr.fileListName);
      callback(url, handle, buffer);
      //测试
      // MiniFileMgr.onSaveFile(url,buffer)

    };

    /**
     *清理资源
     *@param url
     *@param forceDispose
     */
    __proto.clearRes = function (url, forceDispose) {
      forceDispose === void 0 && (forceDispose = false);
      var thisLoader = this;
      thisLoader.clearRes(url, forceDispose);
      var fileObj = MiniFileMgr.getFileInfo(url);
      if (fileObj && (url.indexOf($c[737]) != -1 || url.indexOf($c[738]) != -1)) {
        var fileMd5Name = fileObj.md5;
        var fileNativeUrl = MiniFileMgr.getFileNativePath(fileMd5Name);
        MiniFileMgr.remove(fileNativeUrl);
      }
    };

    MiniLoader.onReadNativeCallBack = function (encoding, url, type, cache, group, ignoreCache, thisLoader, errorCode, data) {
      cache === void 0 && (cache = true);
      ignoreCache === void 0 && (ignoreCache = false);
      errorCode === void 0 && (errorCode = 0);
      if (!errorCode) {
        var tempData;
        if (type == /*laya.net.Loader.JSON*/$c[739] || type == /*laya.net.Loader.ATLAS*/$c[740]) {
          tempData = MiniAdpter.getJson(data.data);
        } else if (type == /*laya.net.Loader.XML*/$c[741]) {
          tempData = Utils.parseXMLFromString(data.data);
        } else {
          tempData = data.data;
        }
        thisLoader.onLoaded(tempData);
        if (!MiniAdpter.isZiYu && MiniAdpter.isPosMsgYu && type != /*laya.net.Loader.BUFFER*/$c[742]) {
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
    };

    __static(MiniLoader, [$c[743], function () {
      return this._fileTypeArr = [$c[744], $c[745], $c[746], $c[747], $c[748]];
    }]);
    return MiniLoader;
  }();

  //class laya.wx.mini.MiniFileMgr extends laya.events.EventDispatcher
  var MiniFileMgr = function (_super) {
    function MiniFileMgr() {
      MiniFileMgr.__super.call(this);;
    }

    __class(MiniFileMgr, $c[749], _super);
    MiniFileMgr.isLoadFile = function (type) {
      return MiniFileMgr._fileTypeArr.indexOf(type) != -1 ? true : false;
    };

    MiniFileMgr.getFileInfo = function (fileUrl) {
      var fileNativePath = fileUrl.split($c[750])[0];
      var fileObj = MiniFileMgr.filesListObj[fileNativePath];
      if (fileObj == null) return null;else return fileObj;
      return null;
    };

    MiniFileMgr.onFileUpdate = function (tempFilePath, readyUrl) {
      var temp = tempFilePath.split($c[751]);
      var tempFileName = temp[temp.length - 1];
      var fileObj = MiniFileMgr.getFileInfo(readyUrl);
      if (fileObj == null) MiniFileMgr.onSaveFile(readyUrl, tempFileName);else {
        if (fileObj.readyUrl != readyUrl) MiniFileMgr.remove(tempFileName, readyUrl);
      }
    };

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
    };

    MiniFileMgr.read = function (filePath, encoding, callBack, readyUrl) {
      encoding === void 0 && (encoding = $c[752]);
      readyUrl === void 0 && (readyUrl = "");
      var fileUrl;
      if (readyUrl != "") {
        fileUrl = MiniFileMgr.getFileNativePath(filePath);
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
          if (data && readyUrl != "") MiniFileMgr.down(readyUrl, encoding, callBack, readyUrl);else callBack != null && callBack.runWith([1]);
        }
      });
    };

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
    };

    MiniFileMgr.down = function (fileUrl, encoding, callBack, readyUrl) {
      encoding === void 0 && (encoding = $c[753]);
      readyUrl === void 0 && (readyUrl = "");
      var savePath = MiniFileMgr.getFileNativePath(readyUrl);
      var downloadTask = MiniFileMgr.wxdown({
        url: fileUrl,
        filePath: savePath,
        success: function (data) {
          if (data.statusCode === 200) MiniFileMgr.readFile(data.filePath, encoding, callBack, readyUrl);
        },
        fail: function (data) {
          callBack != null && callBack.runWith([1, data]);
        }
      });
      downloadTask.onProgressUpdate(function (data) {
        callBack != null && callBack.runWith([2, data.progress]);
      });
    };

    MiniFileMgr.readFile = function (filePath, encoding, callBack, readyUrl) {
      encoding === void 0 && (encoding = $c[754]);
      readyUrl === void 0 && (readyUrl = "");
      MiniFileMgr.fs.readFile({
        filePath: filePath,
        encoding: encoding,
        success: function (data) {
          if (filePath.indexOf($c[755]) != -1 || filePath.indexOf($c[756]) != -1) MiniFileMgr.onFileUpdate(filePath, readyUrl);
          callBack != null && callBack.runWith([0, data]);
        },
        fail: function (data) {
          if (data) callBack != null && callBack.runWith([1, data]);
        }
      });
    };

    MiniFileMgr.downImg = function (fileUrl, callBack, readyUrl) {
      readyUrl === void 0 && (readyUrl = "");
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
    };

    MiniFileMgr.copyFile = function (tempFilePath, readyUrl, callBack) {
      var temp = tempFilePath.split($c[757]);
      var tempFileName = temp[temp.length - 1];
      var fileurlkey = readyUrl.split($c[758])[0];
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
            if (fileObj.readyUrl != readyUrl) MiniFileMgr.remove(tempFileName, readyUrl, callBack);
          }
        },
        fail: function (data) {
          callBack != null && callBack.runWith([1, data]);
        }
      });
    };

    MiniFileMgr.getFileNativePath = function (fileName) {
      return laya.wx.mini.MiniFileMgr.fileNativeDir + $c[759] + fileName;
    };

    MiniFileMgr.remove = function (tempFileName, readyUrl, callBack) {
      readyUrl === void 0 && (readyUrl = "");
      var fileObj = MiniFileMgr.getFileInfo(readyUrl);
      var deleteFileUrl = MiniFileMgr.getFileNativePath(fileObj.md5);
      Laya.loader.clearRes(fileObj.readyUrl);
      MiniFileMgr.fs.unlink({
        filePath: deleteFileUrl,
        success: function (data) {
          if (readyUrl != "") MiniFileMgr.onSaveFile(readyUrl, tempFileName);
          callBack != null && callBack.runWith([0]);
        },
        fail: function (data) {}
      });
    };

    MiniFileMgr.onSaveFile = function (readyUrl, md5Name) {
      var fileurlkey = readyUrl.split($c[760])[0];
      MiniFileMgr.filesListObj[fileurlkey] = {
        md5: md5Name,
        readyUrl: readyUrl
      };
      MiniFileMgr.fs.writeFile({
        filePath: MiniFileMgr.fileNativeDir + $c[761] + MiniFileMgr.fileListName,
        encoding: $c[762],
        data: JSON.stringify(MiniFileMgr.filesListObj),
        success: function (data) {

          console.log($c[763], data);
        },
        fail: function (data) {
          console.log($c[764], data);
        }
      });
    };

    MiniFileMgr.existDir = function (dirPath, callBack) {
      MiniFileMgr.fs.mkdir({
        dirPath: dirPath,
        success: function (data) {
          callBack != null && callBack.runWith([0, {
            data: JSON.stringify({})
          }]);
        },
        fail: function (data) {
          if (data.errMsg.indexOf($c[765]) != -1) MiniFileMgr.readSync(MiniFileMgr.fileListName, $c[766], callBack);else callBack != null && callBack.runWith([1, data]);
        }
      });
    };

    MiniFileMgr.readSync = function (filePath, encoding, callBack, readyUrl) {
      encoding === void 0 && (encoding = $c[767]);
      readyUrl === void 0 && (readyUrl = "");
      var fileUrl = MiniFileMgr.getFileNativePath(filePath);
      var filesListStr;
      try {
        filesListStr = MiniFileMgr.fs.readFileSync(fileUrl);
        callBack != null && callBack.runWith([0, {
          data: filesListStr
        }]);
      } catch (error) {
        callBack != null && callBack.runWith([1]);
      }
    };

    //读文件
    MiniFileMgr.readCache = function () {};

    MiniFileMgr.writeCache = function (filePath) {
      var fileurlkey = readyUrl.split($c[768])[0];
      MiniFileMgr.filesListObj[fileurlkey] = {
        md5: md5Name,
        readyUrl: readyUrl
      };
      MiniFileMgr.fs.writeFile({
        filePath: MiniFileMgr.fileNativeDir + $c[769] + MiniFileMgr.fileListName,
        encoding: $c[770],
        data: JSON.stringify(MiniFileMgr.filesListObj),
        success: function (data) {},
        fail: function (data) {}
      });
    };

    MiniFileMgr.setNativeFileDir = function (value) {
      MiniFileMgr.fileNativeDir = /*__JS__ */wx.env.USER_DATA_PATH + value;
    };

    MiniFileMgr.filesListObj = {};
    MiniFileMgr.fileNativeDir = null;
    MiniFileMgr.fileListName = $c[771];
    MiniFileMgr.ziyuFileData = {};
    __static(MiniFileMgr, [$c[772], function () {
      return this._fileTypeArr = [$c[773], $c[774], $c[775], $c[776], $c[777], $c[778], $c[779], $c[780], $c[781], $c[782], $c[783], $c[784], $c[785], $c[786], $c[787], $c[788]];
    }, $c[789], function () {
      return this.fs = /*__JS__ */wx.getFileSystemManager();
    }, $c[790], function () {
      return this.wxdown = /*__JS__ */wx.downloadFile;
    }]);
    return MiniFileMgr;
  }(EventDispatcher);

  //class laya.wx.mini.MiniSound extends laya.events.EventDispatcher
  var MiniSound = function (_super) {
    function MiniSound() {
      this._sound = null;
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
    }

    __class(MiniSound, $c[791], _super);
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
        this.event( /*laya.events.Event.COMPLETE*/$c[792]);
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
            console.warn($c[793] + error);
            _$this._sound.onCanplay(onNull);
            _$this._sound.onError(onNull);
            MiniSound._null = onNull;
          }
        }
      }
      function onCanPlay() {
        _clearSound();
        me.loaded = true;
        me.event( /*laya.events.Event.COMPLETE*/$c[794]);
        MiniSound._audioCache[me.url] = me;
      }
      function onError(res) {
        console.error($c[795] + res.errCode + $c[796] + res.errMsg);
        _clearSound();
        me.event( /*laya.events.Event.ERROR*/$c[797]);
      }
      function onNull() {}
      this._sound.onCanplay(onCanPlay);
      this._sound.onError(onError);
      this._sound.src = url;
      var me = this;
    };

    /**
     *播放声音。
     *@param startTime 开始时间,单位秒
     *@param loops 循环次数,0表示一直循环
     *@return 声道 SoundChannel 对象。
     *
     */
    __proto.play = function (startTime, loops) {
      startTime === void 0 && (startTime = 0);
      loops === void 0 && (loops = 0);
      var tSound;
      if (this.url == SoundManager._tMusic) {
        if (!MiniSound._musicAudio) MiniSound._musicAudio = MiniSound._createSound();
        tSound = MiniSound._musicAudio;
      } else {
        tSound = MiniSound._createSound();
      }
      tSound.src = this.url;
      var channel = new MiniSoundChannel(tSound);
      channel.url = this.url;
      channel.loops = loops;
      channel.startTime = startTime;
      channel.play();
      SoundManager.addChannel(channel);
      return channel;
    };

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
    };

    /**
     *获取总时间。
     */
    __getset(0, __proto, $c[798], function () {
      return this._sound.duration;
    });

    MiniSound._createSound = function () {
      MiniSound._id++;
      return MiniAdpter.window.wx.createInnerAudioContext();
    };

    MiniSound._musicAudio = null;
    MiniSound._id = 0;
    MiniSound._audioCache = {};
    MiniSound._null = undefined;
    return MiniSound;
  }(EventDispatcher);

  /**
   *@private
   *wxaudio 方式播放声音的音轨控制
   */
  //class laya.wx.mini.MiniSoundChannel extends laya.media.SoundChannel
  var MiniSoundChannel = function (_super) {
    function MiniSoundChannel(audio) {
      this._audio = null;
      this._onEnd = null;
      MiniSoundChannel.__super.call(this);
      this._audio = audio;
      this._onEnd = Utils.bind(this.__onEnd, this);
      audio.onEnded(this._onEnd);
    }

    __class(MiniSoundChannel, $c[799], _super);
    var __proto = MiniSoundChannel.prototype;
    __proto.__onEnd = function () {
      if (this.loops == 1) {
        if (this.completeHandler) {
          Laya.timer.once(10, this, this.__runComplete, [this.completeHandler], false);
          this.completeHandler = null;
        }
        this.stop();
        this.event( /*laya.events.Event.COMPLETE*/$c[800]);
        return;
      }
      if (this.loops > 0) {
        this.loops--;
      }
      this.startTime = 0;
      this.play();
    };
    __proto.__onNull = function () {};
    /**
     *播放
     */
    __proto.play = function () {
      this.isStopped = false;
      SoundManager.addChannel(this);
      if (this._audio) this._audio.play();
    };

    /**
     *停止播放
     *
     */
    __proto.stop = function () {
      this.isStopped = true;
      SoundManager.removeChannel(this);
      this.completeHandler = null;
      if (!this._audio) return;
      this._audio.stop();

      if (MiniSoundChannel._null != undefined) {
        this._audio.onEnded(MiniSoundChannel._null);
      } else {
        try {
          this._audio.onEnded(null);
          MiniSoundChannel._null = null;
        } catch (error) {
          console.warn($c[801] + error);
          this._audio.onEnded(Utils.bind(this.__onNull, this));
          MiniSoundChannel._null = Utils.bind(this.__onNull, this);
        }
      }
      this._audio = null;
    };

    __proto.pause = function () {
      this.isStopped = true;
      this._audio.pause();
    };

    __proto.resume = function () {
      if (!this._audio) return;
      this.isStopped = false;
      SoundManager.addChannel(this);
      this._audio.play();
    };

    /**
     *当前播放到的位置
     *@return
     *
     */
    __getset(0, __proto, $c[802], function () {
      if (!this._audio) return 0;
      return this._audio.currentTime;
    });

    /**
     *获取总时间。
     */
    __getset(0, __proto, $c[803], function () {
      if (!this._audio) return 0;
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
    __getset(0, __proto, $c[804], function () {
      return 1;
    }, function (v) {});

    MiniSoundChannel._null = undefined;

    return MiniSoundChannel;
  }(SoundChannel);
})(window, document, Laya);

if (typeof define === $c[805] && define.amd) {
  define($c[806], [$c[807], $c[808]], function (require, exports) {
    'use strict';

    Object.defineProperty(exports, $c[809], {
      value: true
    });
    for (var i in Laya) {
      var o = Laya[i];
      o && o.__isclass && (exports[i] = o);
    }
  });
}