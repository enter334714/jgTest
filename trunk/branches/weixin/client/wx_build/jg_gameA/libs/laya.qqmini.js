
(function (window, document, Laya) {
    var __un = Laya.un,
    __uns = Laya.uns,
    __static = Laya.static,
    __class = Laya.class,
    __getset = Laya.getset,
    __newvec = Laya.__newvec;

    var Browser = laya.utils.Browser,
    Config = Laya.Config,
    Event = laya.events.Event,
    EventDispatcher = laya.events.EventDispatcher;
    var HTMLImage = laya.resource.HTMLImage,
    Handler = laya.utils.Handler,
    Input = laya.display.Input,
    Loader = laya.net.Loader;
  var Matrix = laya.maths.Matrix,
    Render = laya.renders.Render,
    RunDriver = laya.utils.RunDriver;
    var SoundChannel = laya.media.SoundChannel,
    SoundManager = laya.media.SoundManager,
    Stage = laya.display.Stage,
    URL = laya.net.URL;
    var Utils = laya.utils.Utils;

    //class laya.qq.mini.MiniAdpter
    var MiniAdpter = (function () {
        function MiniAdpter() {}
        __class(MiniAdpter, 'laya.qq.mini.MiniAdpter');
        MiniAdpter.getJson = function (data) {
            return JSON.parse(data);
        }

        MiniAdpter.enable = function () {
            MiniAdpter.init(Laya.isWXPosMsg, Laya.isWXOpenDataContext);
        }

        MiniAdpter.init = function (isPosMsg, isSon) {
            (isPosMsg === void 0) && (isPosMsg = false);
            (isSon === void 0) && (isSon = false);
            if (MiniAdpter._inited) return;
            MiniAdpter._inited = true;
            MiniAdpter.window = /*__JS__ */ window;
            if (!MiniAdpter.window.hasOwnProperty("qq")) return;
            if (MiniAdpter.window.navigator.userAgent.indexOf('MiniGame') < 0) return;
            MiniAdpter.isZiYu = isSon;
            MiniAdpter.isPosMsgYu = isPosMsg;
            MiniAdpter.EnvConfig = {};
            if (!MiniAdpter.isZiYu) {
                MiniFileMgr.setNativeFileDir("/layaairGame");
                MiniFileMgr.existDir(MiniFileMgr.fileNativeDir, Handler.create(MiniAdpter, MiniAdpter.onMkdirCallBack));
            }
            MiniAdpter.systemInfo = /*__JS__ */ qq.getSystemInfoSync();
            MiniAdpter.window.focus = function () {};
            Laya['_getUrlPath'] = function () {
                return "";
            };
            MiniAdpter.window.logtime = function (str) {};
            MiniAdpter.window.alertTimeLog = function (str) {};
            MiniAdpter.window.resetShareInfo = function () {};
            MiniAdpter.window.CanvasRenderingContext2D = function () {};
            MiniAdpter.window.CanvasRenderingContext2D.prototype = MiniAdpter.window.qq.createCanvas().getContext('2d').__proto__;
            MiniAdpter.window.document.body.appendChild = function () {};
            MiniAdpter.EnvConfig.pixelRatioInt = 0;
            Browser["_pixelRatio"] = MiniAdpter.pixelRatio();
            MiniAdpter._preCreateElement = Browser.createElement;
            Browser["createElement"] = MiniAdpter.createElement;
            RunDriver.createShaderCondition = MiniAdpter.createShaderCondition;
            Utils['parseXMLFromString'] = MiniAdpter.parseXMLFromString;
            Input['_createInputElement'] = MiniInput['_createInputElement'];
            MiniAdpter.EnvConfig.load = Loader.prototype.load;
            Loader.prototype.load = MiniLoader.prototype.load;
            // Loader.prototype._loadImage = MiniImage.prototype._loadImage;
            MiniAdpter.window.qq.onMessage(MiniAdpter._onMessage);
            Config.useRetinalCanvas = true;
        }

        MiniAdpter._onMessage = function (data) {
            switch (data.type) {
            case "changeMatrix":
                Laya.stage.transform.identity();
                Laya.stage._width = data.w;
                Laya.stage._height = data.h;
                Laya.stage._canvasTransform = new Matrix(data.a, data.b, data.c, data.d, data.tx, data.ty);
                break;
            case "display":
                Laya.stage.frameRate = data.rate || /*laya.display.Stage.FRAME_FAST*/ "fast";
                break;
            case "undisplay":
                Laya.stage.frameRate = /*laya.display.Stage.FRAME_SLEEP*/ "sleep";
                break;
            }
            if (data['isLoad'] == "opendatacontext") {
                if (data.url) {
                    MiniFileMgr.ziyuFileData[data.url] = data.atlasdata;
                    MiniFileMgr.ziyuFileTextureData[data.imgReadyUrl] = data.imgNativeUrl;
                }
            } else if (data['isLoad'] == "openJsondatacontext") {
                if (data.url) {
                    MiniFileMgr.ziyuFileData[data.url] = data.atlasdata;
                }
            } else if (data['isLoad'] == "openJsondatacontextPic") {
                MiniFileMgr.ziyuFileTextureData[data.imgReadyUrl] = data.imgNativeUrl;
            }
        }


        MiniAdpter.onMkdirCallBack = function (errorCode, data) {
            if (!errorCode) {
                MiniFileMgr.filesListObj = JSON.parse(data.data);
                MiniFileMgr.fakeObj = MiniFileMgr.filesListObj;
            }
        }

        MiniAdpter.pixelRatio = function () {
            if (!MiniAdpter.EnvConfig.pixelRatioInt) {
                try {
                    MiniAdpter.EnvConfig.pixelRatioInt = MiniAdpter.systemInfo.pixelRatio;
                    return MiniAdpter.systemInfo.pixelRatio;
                } catch (error) {}
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
                    _source = /*__JS__ */ window.qq.createCanvas();
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
                node.removeChild = function (value) {};
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
            node.setColor = function (value) {};
            node.setType = function (value) {};
            node.setFontFace = function (value) {};
            node.addEventListener = function (value) {};
            node.contains = function (value) {
                return null
            };
            node.removeChild = function (value) {};
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
        MiniAdpter.systemInfo = null;
        MiniAdpter.isZiYu = false;
        MiniAdpter.isPosMsgYu = false;
        MiniAdpter.parseXMLFromString = function (value) {
            var rst;
            var Parser;
            value = value.replace(/>\s+</g, '><');
            try {
                /*__JS__ */
                rst = (new window.DOMParser()).parseFromString(value, 'text/xml');
            } catch (error) {
                throw "需要引入xml解析库文件";
            }
            return rst;
        }

        MiniAdpter.idx = 1;
        __static(MiniAdpter,
            ['nativefiles', function () {
                    return this.nativefiles = ["layaNativeDir", "wxlocal"];
                }
            ]);
        return MiniAdpter;
    })()

    /**@private **/
    //class laya.qq.mini.MiniImage
    var MiniImage = (function () {
        function MiniImage() {}
        __class(MiniImage, 'laya.qq.mini.MiniImage');
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
                thisLoader.event(/*laya.events.Event.ERROR*/ "error", "Load image failed");
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

    /**@private **/
    //class laya.qq.mini.MiniInput
    var MiniInput = (function () {
        function MiniInput() {}
        __class(MiniInput, 'laya.qq.mini.MiniInput', null, 'MiniInput');
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
            qq.onWindowResize && /*__JS__ */ qq.onWindowResize(function (res) {
                /*__JS__ */
                window.dispatchEvent && /*__JS__ */ window.dispatchEvent("resize");
            });
            SoundManager._soundClass = MiniSound;
            SoundManager._musicClass = MiniSound;
            var model = MiniAdpter.systemInfo.model;
            var system = MiniAdpter.systemInfo.system;
            if (model.indexOf("iPhone") != -1) {
                Browser.onIPhone = true;
                Browser.onIOS = true;
                Browser.onIPad = true;
                Browser.onAndroid = false;
            }
            if (system.indexOf("Android") != -1 || system.indexOf("Adr") != -1) {
                Browser.onAndroid = true;
                Browser.onIPhone = false;
                Browser.onIOS = false;
                Browser.onIPad = false;
            }
        }

        MiniInput._onStageResize = function () {
            var ts = Laya.stage._canvasTransform.identity();
            ts.scale((Browser.width / Render.canvas.width / Browser.pixelRatio), Browser.height / Render.canvas.height / Browser.pixelRatio);
        }

        MiniInput.wxinputFocus = function (e) {
            var _inputTarget = Input['inputElement'].target;
            if (_inputTarget && !_inputTarget.editable) {
                return;
            }
            MiniAdpter.window.qq.offKeyboardConfirm();
            MiniAdpter.window.qq.offKeyboardInput();
            MiniAdpter.window.qq.showKeyboard({
                defaultValue: _inputTarget.text,
                maxLength: _inputTarget.maxChars,
                multiple: _inputTarget.multiline,
                confirmHold: true,
                confirmType: 'done',
                success: function (res) {},
                fail: function (res) {}
            });
            MiniAdpter.window.qq.onKeyboardConfirm(function (res) {
                var str = res ? res.value : "";
                _inputTarget.text = str;
                _inputTarget.event(/*laya.events.Event.INPUT*/ "input");
                laya.qq.mini.MiniInput.inputEnter();
            })
            MiniAdpter.window.qq.onKeyboardInput(function (res) {
                var str = res ? res.value : "";
                if (!_inputTarget.multiline) {
                    if (str.indexOf("\n") != -1) {
                        laya.qq.mini.MiniInput.inputEnter();
                        return;
                    }
                }
                _inputTarget.text = str;
                _inputTarget.event(/*laya.events.Event.INPUT*/ "input");
            });
        }

        MiniInput.inputEnter = function () {
            Input['inputElement'].target.focus = false;
        }

        MiniInput.wxinputblur = function () {
            MiniInput.hideKeyboard();
        }

        MiniInput.hideKeyboard = function () {
            MiniAdpter.window.qq.offKeyboardConfirm();
            MiniAdpter.window.qq.offKeyboardInput();
            MiniAdpter.window.qq.hideKeyboard({
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

    /**@private **/
    //class laya.qq.mini.MiniLoader
  var MiniLoader = (function () {
    function MiniLoader() { }

        __class(MiniLoader, 'laya.qq.mini.MiniLoader');
        var __proto = MiniLoader.prototype;
        /**
         *@private
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
                if (!MiniAdpter.isZiYu && MiniAdpter.isPosMsgYu && type != /*laya.net.Loader.BUFFER*/ "arraybuffer") {
                    /*__JS__ */
                    qq.postMessage({
                        url: url,
                        data: tempData,
                        isLoad: "filedata"
                    });
                }
                thisLoader.onLoaded(tempData);
            } else if (errorCode == 1) {
                MiniAdpter.EnvConfig.load.call(thisLoader, url, type, cache, group, ignoreCache);
            }
        }

    __static(MiniLoader, ['_fileTypeArr', function () {
      return this._fileTypeArr = ['png', 'jpg', 'bmp', 'jpeg', 'gif'];
    }]);
    return MiniLoader;
  })()

    /**@private **/
    //class laya.qq.mini.MiniFileMgr
  var MiniFileMgr = (function (_super) {
    function MiniFileMgr() {
      MiniFileMgr.__super.call(this);;
    }

    __class(MiniFileMgr, 'laya.qq.mini.MiniFileMgr', _super);
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
      return laya.qq.mini.MiniFileMgr.fileNativeDir + "/" + fileName;
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
        MiniFileMgr.fileNativeDir = qq.env.USER_DATA_PATH + value;
    }

    MiniFileMgr.filesListObj = {};
    MiniFileMgr.fileNativeDir = null;
    MiniFileMgr.fileListName = "layaairfiles.txt";
    MiniFileMgr.ziyuFileData = {};
    __static(MiniFileMgr, ['_fileTypeArr', function () {
      return this._fileTypeArr = ['json', 'ani', 'xml', 'sk', 'txt', 'atlas', 'swf', 'part', 'fnt', 'proto', 'lh', 'lav', 'lani', 'lmat', 'lm', 'ltc'];
    }, 'fs', function () {
      return this.fs = /*__JS__ */ qq.getFileSystemManager();
    }, 'wxdown', function () {
      return this.wxdown = /*__JS__ */ qq.downloadFile;
    }]);
    return MiniFileMgr;
  })(EventDispatcher)


    /**@private **/
    //class laya.qq.mini.MiniSound extends laya.events.EventDispatcher
    var MiniSound = (function (_super) {
        function MiniSound() {
            /**@private **/
            this._sound = null;
            /**
             *@private
             *声音URL
             */
            this.url = null;
            /**
             *@private
             *是否已加载完成
             */
            this.loaded = false;
            MiniSound.__super.call(this);
        }

        __class(MiniSound, 'laya.qq.mini.MiniSound', _super);
        var __proto = MiniSound.prototype;
        /**
         *@private
         *加载声音。
         *@param url 地址。
         *
         */
        __proto.load = function (url) {
            url = URL.formatURL(url);
            this.url = url;
            if (MiniSound._audioCache[url]) {
                this.event(/*laya.events.Event.COMPLETE*/ "complete");
                return;
            }
            this._sound = MiniSound._createSound();
            this._sound.src = url;
            this._sound.onCanplay(MiniSound.bindToThis(this.onCanPlay, this));
            this._sound.onError(MiniSound.bindToThis(this.onError, this));
        }

        /**@private **/
        __proto.onError = function (error) {
            this.event(/*laya.events.Event.ERROR*/ "error");
            this._sound.offError(null);
        }

        /**@private **/
        __proto.onCanPlay = function () {
            this.loaded = true;
            this.event(/*laya.events.Event.COMPLETE*/ "complete");
            this._sound.offCanplay(null);
        }

        /**
         *@private
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
            if (this.url == SoundManager._tMusic) {
                if (!MiniSound._musicAudio) MiniSound._musicAudio = MiniSound._createSound();
                tSound = MiniSound._musicAudio;
            } else {
                tSound = MiniSound._createSound();
            }
            if (!tSound) return null;
            tSound.src = this.url;
            var channel = new MiniSoundChannel(tSound, this);
            channel.url = this.url;
            channel.loops = loops;
            channel.loop = (loops === 0 ? true : false);
            channel.startTime = startTime;
            channel.play();
            SoundManager.addChannel(channel);
            return channel;
        }

        /**
         *@private
         *释放声音资源。
         *
         */
        __proto.dispose = function () {
            var ad = MiniSound._audioCache[this.readyUrl];
            if (ad) {
                ad.src = "";
                if (ad._sound) {
                    ad._sound.destroy();
                    ad._sound = null;
                    ad = null;
                }
                delete MiniSound._audioCache[this.readyUrl];
            }
        }

        /**
         *@private
         *获取总时间。
         */
        __getset(0, __proto, 'duration', function () {
            return this._sound.duration;
        });

        MiniSound._createSound = function () {
            MiniSound._id++;
            return MiniAdpter.window.qq.createInnerAudioContext();
        }

        MiniSound.bindToThis = function (fun, scope) {
            var rst = fun;
            /*__JS__ */
            rst = fun.bind(scope); ;
            return rst;
        }

        MiniSound._musicAudio = null;
        MiniSound._id = 0;
        MiniSound._audioCache = {};
        return MiniSound;
    })(EventDispatcher)

    /**@private **/
    //class laya.qq.mini.MiniSoundChannel extends laya.media.SoundChannel
    var MiniSoundChannel = (function (_super) {
        function MiniSoundChannel(audio, miniSound) {
            /**@private **/
            this._audio = null;
            /**@private **/
            this._onEnd = null;
            /**@private **/
            this._miniSound = null;
            MiniSoundChannel.__super.call(this);
            this._audio = audio;
            this._miniSound = miniSound;
            this._onEnd = MiniSoundChannel.bindToThis(this.__onEnd, this);
            audio.onEnded(this._onEnd);
        }

        __class(MiniSoundChannel, 'laya.qq.mini.MiniSoundChannel', _super);
        var __proto = MiniSoundChannel.prototype;
        /**@private **/
        __proto.__onEnd = function () {
            MiniSound._audioCache[this.url] = this._miniSound;
            if (this.loops == 1) {
                if (this.completeHandler) {
                    Laya.timer.once(10, this, this.__runComplete, [this.completeHandler], false);
                    this.completeHandler = null;
                }
                this.stop();
                this.event(/*laya.events.Event.COMPLETE*/ "complete");
                return;
            }
            if (this.loops > 0) {
                this.loops--;
            }
            this.startTime = 0;
            this.play();
        }
        /**
         *@private
         *播放
         */
        __proto.play = function () {
            this.isStopped = false;
            SoundManager.addChannel(this);
            if (this._audio)
                this._audio.play();
        }

        /**
         *@private
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
            this._audio.offEnded(null);
            this._miniSound.dispose();
            this._miniSound = null;
            this._audio = null;
            this._onEnd = null;
        }

        /**@private **/
        __proto.pause = function () {
            this.isStopped = true;
            this._audio.pause();
        }

        /**@private **/
        __proto.resume = function () {
            if (!this._audio)
                return;
            this.isStopped = false;
            SoundManager.addChannel(this);
            this._audio.play();
        }

        /**
         *设置开始时间
         *@param time
         */
        __getset(0, __proto, 'startTime', null, function (time) {
            if (this._audio) {
                this._audio.startTime = time;
            }
        });

        /**@private **/
        /**
         *@private
         *自动播放
         *@param value
         */
        __getset(0, __proto, 'autoplay', function () {
            return this._audio.autoplay;
        }, function (value) {
            this._audio.autoplay = value;
        });

        /**
         *@private
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
         *@private
         *获取总时间。
         */
        __getset(0, __proto, 'duration', function () {
            if (!this._audio)
                return 0;
            return this._audio.duration;
        });

        /**@private **/
        /**@private **/
        __getset(0, __proto, 'loop', function () {
            return this._audio.loop;
        }, function (value) {
            this._audio.loop = value;
        });

        /**
         *@private
         *设置音量
         *@param v
         *
         */
        /**
         *@private
         *获取音量
         *@return
         */
        __getset(0, __proto, 'volume', function () {
            if (!this._audio)
                return 1;
            return this._audio.volume;
        }, function (v) {
            if (!this._audio)
                return;
            this._audio.volume = v;
        });

        MiniSoundChannel.bindToThis = function (fun, scope) {
            var rst = fun;
            /*__JS__ */
            rst = fun.bind(scope); ;
            return rst;
        }

        return MiniSoundChannel;
    })(SoundChannel)

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