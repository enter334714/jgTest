!function (C$99o, C$99l) {
  C$99l.un, C$99l.uns;var C$99i = C$99l.static,
      C$99a = C$99l.class,
      C$99n = C$99l.getset;C$99l.__newvec;var C$99d = laya.utils.Browser,
      C$99e = (laya.events.Event, laya.events.EventDispatcher);var C$99s = laya.resource.HTMLImage,
      C$99c = laya.utils.Handler,
      C$99t = laya.display.Input,
      C$99f = laya.net.Loader;laya.maths.Matrix;var C$99h = laya.renders.Render,
      C$99M = laya.utils.RunDriver;laya.media.Sound;var C$99p = laya.media.SoundChannel,
      C$99v = laya.media.SoundManager,
      C$99m = (laya.display.Stage, laya.net.URL);var C$99g = laya.utils.Utils;C$99a(MiniAdpter, "laya.wx.mini.MiniAdpter"), MiniAdpter.getJson = function (C$99i) {
    return JSON.parse(C$99i);
  }, MiniAdpter.init = function (C$99i, C$99n) {
    void 0 === C$99i && (C$99i = !1), void 0 === C$99n && (C$99n = !1), MiniAdpter._inited || (MiniAdpter.window = C$99o).navigator.userAgent.indexOf("MiniGame") < 0 || (MiniAdpter._inited = !0, MiniAdpter.isZiYu = C$99n, MiniAdpter.isPosMsgYu = C$99i, MiniAdpter.EnvConfig = {}, MiniAdpter.isZiYu || (C$99r.setNativeFileDir("/layaairGame"), C$99r.existDir(C$99r.fileNativeDir, C$99c.create(MiniAdpter, MiniAdpter.onMkdirCallBack))), MiniAdpter.window.focus = function () {}, C$99l.getUrlPath = function () {}, MiniAdpter.window.logtime = function (C$99i) {}, MiniAdpter.window.alertTimeLog = function (C$99i) {}, MiniAdpter.window.resetShareInfo = function () {}, MiniAdpter.window.CanvasRenderingContext2D = function () {}, MiniAdpter.window.CanvasRenderingContext2D.prototype = MiniAdpter.window.wx.createCanvas().getContext("2d").__proto__, MiniAdpter.window.document.body.appendChild = function () {}, MiniAdpter.EnvConfig.pixelRatioInt = 0, C$99M.getPixelRatio = MiniAdpter.pixelRatio, MiniAdpter._preCreateElement = C$99d.createElement, C$99d.createElement = MiniAdpter.createElement, C$99M.createShaderCondition = MiniAdpter.createShaderCondition, C$99g.parseXMLFromString = MiniAdpter.parseXMLFromString, C$99t._createInputElement = C$99F._createInputElement, MiniAdpter.EnvConfig.load = C$99f.prototype.load, C$99f.prototype.load = C$99y.prototype.load, MiniAdpter.isZiYu && C$99i && wx.onMessage(function (C$99i) {
      C$99i.isLoad && (C$99r.ziyuFileData[C$99i.url] = C$99i.data);
    }));
  }, MiniAdpter.onMkdirCallBack = function (C$99i, C$99n) {
    C$99i || (C$99r.filesListObj = JSON.parse(C$99n.data));
  }, MiniAdpter.pixelRatio = function () {
    if (!MiniAdpter.EnvConfig.pixelRatioInt) try {
      var C$99i = wx.getSystemInfoSync();return MiniAdpter.EnvConfig.pixelRatioInt = C$99i.pixelRatio, C$99i.pixelRatio;
    } catch (C$99i) {}return MiniAdpter.EnvConfig.pixelRatioInt;
  }, MiniAdpter.createElement = function (C$99i) {
    return "canvas" != C$99i ? "textarea" == C$99i || "input" == C$99i ? MiniAdpter.onCreateInput(C$99i) : "div" == C$99i ? ((C$99e = MiniAdpter._preCreateElement(C$99i)).contains = function (C$99i) {
      return null;
    }, C$99e.removeChild = function (C$99i) {}, C$99e) : MiniAdpter._preCreateElement(C$99i) : (1 == MiniAdpter.idx ? MiniAdpter.isZiYu ? (C$99n = sharedCanvas).style = {} : C$99n = C$99o.canvas : C$99n = C$99o.wx.createCanvas(), MiniAdpter.idx++, C$99n);var C$99n;var C$99e;
  }, MiniAdpter.onCreateInput = function (C$99i) {
    C$99i = MiniAdpter._preCreateElement(C$99i);return C$99i.focus = C$99F.wxinputFocus, C$99i.blur = C$99F.wxinputblur, C$99i.style = {}, C$99i.value = 0, C$99i.parentElement = {}, C$99i.placeholder = {}, C$99i.type = {}, C$99i.setColor = function (C$99i) {}, C$99i.setType = function (C$99i) {}, C$99i.setFontFace = function (C$99i) {}, C$99i.addEventListener = function (C$99i) {}, C$99i.contains = function (C$99i) {
      return null;
    }, C$99i.removeChild = function (C$99i) {}, C$99i;
  }, MiniAdpter.createShaderCondition = function (C$99i) {
    var C$99n = this;return function () {
      return C$99n[C$99i.replace("this.", "")];
    };
  }, MiniAdpter.EnvConfig = null, MiniAdpter.window = null, MiniAdpter._preCreateElement = null, MiniAdpter._inited = !1, MiniAdpter.wxRequest = null, MiniAdpter.systemInfo = null, MiniAdpter.version = "0.0.1", MiniAdpter.isZiYu = !1, MiniAdpter.isPosMsgYu = !1, MiniAdpter.parseXMLFromString = function (C$99i) {
    var C$99n;C$99i = C$99i.replace(/>\s+</g, "><");try {
      C$99n = new C$99o.Parser.DOMParser().parseFromString(C$99i, "text/xml");
    } catch (C$99i) {
      throw "\u9700\u8981\u5f15\u5165xml\u89e3\u6790\u5e93\u6587\u4ef6";
    }return C$99n;
  }, MiniAdpter.idx = 1;var C$99u = MiniAdpter;function MiniAdpter() {}C$99a(MiniImage, "laya.wx.mini.MiniImage"), MiniImage.prototype._loadImage = function (C$99i) {
    var C$99n = !1;-1 == C$99i.indexOf("layaNativeDir/") && (C$99n = !0, C$99i = C$99m.formatURL(C$99i)), C$99r.getFileInfo(C$99i) ? MiniImage.onCreateImage(C$99i, this, !C$99n) : -1 != C$99i.indexOf("http://") || -1 != C$99i.indexOf("https://") ? C$99r.downImg(C$99i, new C$99c(MiniImage, MiniImage.onDownImgCallBack, [C$99i, this]), C$99i) : MiniImage.onCreateImage(C$99i, this, !0);
  }, MiniImage.onDownImgCallBack = function (C$99i, C$99n, C$99e) {
    C$99e ? C$99n.onError(null) : MiniImage.onCreateImage(C$99i, C$99n);
  }, MiniImage.onCreateImage = function (C$99n, C$99e, C$99i) {
    var C$99t;function clear() {
      C$99t.onload = null, C$99t.onerror = null, delete C$99e.imgCache[C$99n];
    }C$99i = (C$99i = void 0 === C$99i ? !1 : C$99i) ? C$99n : (C$99i = C$99r.getFileInfo(C$99n).md5, C$99r.getFileNativePath(C$99i)), null == C$99e.imgCache && (C$99e.imgCache = {});function C$99ks() {
      clear(), C$99e.onLoaded(C$99t);
    }function C$99As() {
      clear(), C$99e.event("error", "Load image failed");
    }"nativeimage" == C$99e._type ? ((C$99t = new C$99d.window.Image()).crossOrigin = "", C$99t.onload = C$99ks, C$99t.onerror = C$99As, C$99t.src = C$99i, C$99e.imgCache[C$99n] = C$99t) : new C$99s.create(C$99i, { onload: C$99ks, onerror: C$99As, onCreate: function (C$99i) {
        C$99t = C$99i, C$99e.imgCache[C$99n] = C$99i;
      } });
  };function MiniImage() {}C$99a(MiniInput, "laya.wx.mini.MiniInput"), MiniInput._createInputElement = function () {
    C$99t._initInput(C$99t.area = C$99d.createElement("textarea")), C$99t._initInput(C$99t.input = C$99d.createElement("input")), C$99t.inputContainer = C$99d.createElement("div"), C$99t.inputContainer.style.position = "absolute", C$99t.inputContainer.style.zIndex = 1e5, C$99d.container.appendChild(C$99t.inputContainer), C$99t.inputContainer.setPos = function (C$99i, C$99n) {
      C$99t.inputContainer.style.left = C$99i + "px", C$99t.inputContainer.style.top = C$99n + "px";
    }, C$99l.stage.on("resize", null, MiniInput._onStageResize), wx.onWindowResize && wx.onWindowResize(function (C$99i) {
      C$99o.dispatchEvent && C$99o.dispatchEvent("resize");
    }), C$99v._soundClass = C$99E, C$99v._musicClass = C$99E, C$99o._videoClass = C$99_;
  }, MiniInput._onStageResize = function () {
    C$99l.stage._canvasTransform.identity().scale(C$99d.width / C$99h.canvas.width / C$99M.getPixelRatio(), C$99d.height / C$99h.canvas.height / C$99M.getPixelRatio());
  }, MiniInput.wxinputFocus = function (C$99i) {
    var C$99n = C$99t.inputElement.target;C$99n && !C$99n.editable || (C$99u.window.wx.offKeyboardConfirm(), C$99u.window.wx.offKeyboardInput(), C$99u.window.wx.showKeyboard({ defaultValue: C$99n.text, maxLength: C$99n.maxChars, multiple: C$99n.multiline, confirmHold: !0, confirmType: "done", success: function (C$99i) {}, fail: function (C$99i) {} }), C$99u.window.wx.onKeyboardConfirm(function (C$99i) {
      C$99i = C$99i ? C$99i.value : "";C$99n.text = C$99i, C$99n.event("input"), laya.wx.mini.MiniInput.inputEnter();
    }), C$99u.window.wx.onKeyboardInput(function (C$99i) {
      C$99i = C$99i ? C$99i.value : "";C$99n.multiline || -1 == C$99i.indexOf("\n") ? (C$99n.text = C$99i, C$99n.event("input")) : laya.wx.mini.MiniInput.inputEnter();
    }));
  }, MiniInput.inputEnter = function () {
    C$99t.inputElement.target.focus = !1;
  }, MiniInput.wxinputblur = function () {
    MiniInput.hideKeyboard();
  }, MiniInput.hideKeyboard = function () {
    C$99u.window.wx.offKeyboardConfirm(), C$99u.window.wx.offKeyboardInput(), C$99u.window.wx.hideKeyboard({ success: function (C$99i) {
        console.log("\u9690\u85cf\u952e\u76d8");
      }, fail: function (C$99i) {
        console.log("\u9690\u85cf\u952e\u76d8\u51fa\u9519:" + (C$99i ? C$99i.errMsg : ""));
      } });
  };var C$99F = MiniInput;function MiniInput() {}C$99a(MiniLoader, "laya.wx.mini.MiniLoader"), (C$99w = MiniLoader.prototype).load = function (C$99i, C$99n, C$99e, C$99t, C$99o) {
    void 0 === C$99e && (C$99e = !0), void 0 === C$99o && (C$99o = !1);0 === (this._url = C$99i).indexOf("data:image") ? this._type = C$99n = "image" : this._type = C$99n = C$99n || this.getTypeFromUrl(C$99i), this._cache = C$99e, this._data = null;var C$99l = "ascii";-1 != C$99i.indexOf(".fnt") ? C$99l = "utf8" : "arraybuffer" == C$99n && (C$99l = "");var C$99a = C$99g.getFileExtension(C$99i);if (-1 != MiniLoader._fileTypeArr.indexOf(C$99a)) C$99u.EnvConfig.load.call(this, C$99i, C$99n, C$99e, C$99t, C$99o);else if (C$99r.getFileInfo(C$99i)) C$99u.EnvConfig.load.call(this, C$99i, C$99n, C$99e, C$99t, C$99o);else {
      if (-1 != C$99i.indexOf("layaNativeDir/")) return C$99u.isZiYu ? (C$99a = C$99r.ziyuFileData[C$99i], void this.onLoaded(C$99a)) : (cosnole.log("read read"), void C$99r.read(C$99i, C$99l, new C$99c(MiniLoader, MiniLoader.onReadNativeCallBack, [C$99l, C$99i, C$99n, C$99e, C$99t, C$99o, this])));C$99a = "" == C$99m.rootPath ? C$99i : C$99i.split(C$99m.rootPath)[0], -1 != C$99i.indexOf("http://") || -1 != C$99i.indexOf("https://") ? C$99u.EnvConfig.load.call(this, C$99i, C$99n, C$99e, C$99t, C$99o) : C$99r.readFile(C$99a, C$99l, new C$99c(MiniLoader, MiniLoader.onReadNativeCallBack, [C$99l, C$99i, C$99n, C$99e, C$99t, C$99o, this]), C$99i);
    }
  }, C$99w.resMgrLoad = function (C$99i, C$99t, C$99n, C$99e, C$99o, C$99l, C$99a) {
    void 0 === C$99n && (C$99n = 0), void 0 === C$99e && (C$99e = !1), void 0 === C$99o && (C$99o = !1), void 0 === C$99l && (C$99l = 0), void 0 === C$99a && (C$99a = 3), -1 != C$99i.indexOf("mpack") && console.log("=============resMgrLoad url:", C$99i), C$99u.EnvConfig.resMgrLoad(C$99i, (C$99i, C$99n, C$99e) => {
      MiniLoader.prototype.resMgrLoadCallBack(C$99i, C$99n, C$99e, C$99t);
    }, C$99n, C$99e, C$99o, C$99l, C$99a);
  }, C$99w.resMgrLoadCallBack = function (C$99i, C$99n, C$99e, C$99t) {
    console.log("buff:::", C$99i, C$99e, C$99r.fileNativeDir + "///" + C$99r.fileListName), C$99t(C$99i, C$99n, C$99e);
  }, C$99w.clearRes = function (C$99i, C$99n) {
    this.clearRes(C$99i, C$99n = void 0 === C$99n ? !1 : C$99n);C$99n = C$99r.getFileInfo(C$99i);!C$99n || -1 == C$99i.indexOf("http://") && -1 == C$99i.indexOf("https://") || (C$99i = C$99n.md5, C$99n = C$99r.getFileNativePath(C$99i), C$99r.remove(C$99n));
  }, MiniLoader.onReadNativeCallBack = function (C$99i, C$99n, C$99e, C$99t, C$99o, C$99l, C$99a, C$99r, C$99d) {
    void 0 === C$99t && (C$99t = !0), void 0 === C$99l && (C$99l = !1), (C$99r = void 0 === C$99r ? 0 : C$99r) ? 1 == C$99r && C$99u.EnvConfig.load.call(C$99a, C$99n, C$99e, C$99t, C$99o, C$99l) : (C$99r = "json" == C$99e || "atlas" == C$99e ? C$99u.getJson(C$99d.data) : "xml" == C$99e ? C$99g.parseXMLFromString(C$99d.data) : C$99d.data, C$99a.onLoaded(C$99r), !C$99u.isZiYu && C$99u.isPosMsgYu && "arraybuffer" != C$99e && wx.postMessage({ url: C$99n, data: C$99r, isLoad: !0 }));
  }, C$99i(MiniLoader, ["_fileTypeArr", function () {
    return this._fileTypeArr = ["png", "jpg", "bmp", "jpeg", "gif"];
  }]);var C$99y = MiniLoader;function MiniLoader() {}C$99a(MiniFileMgr, "laya.wx.mini.MiniFileMgr", C$99e), MiniFileMgr.isLoadFile = function (C$99i) {
    return -1 != MiniFileMgr._fileTypeArr.indexOf(C$99i);
  }, MiniFileMgr.getFileInfo = function (C$99i) {
    C$99i = C$99i.split("?")[0];C$99i = MiniFileMgr.filesListObj[C$99i];return null == C$99i ? null : C$99i;
  }, MiniFileMgr.onFileUpdate = function (C$99i, C$99n) {
    C$99i = C$99i.split("/");C$99i = C$99i[C$99i.length - 1];var C$99e = MiniFileMgr.getFileInfo(C$99n);null == C$99e ? MiniFileMgr.onSaveFile(C$99n, C$99i) : C$99e.readyUrl != C$99n && MiniFileMgr.remove(C$99i, C$99n);
  }, MiniFileMgr.exits = function (C$99i, C$99n) {
    C$99i = MiniFileMgr.getFileNativePath(C$99i);MiniFileMgr.fs.getFileInfo({ filePath: C$99i, success: function (C$99i) {
        null != C$99n && C$99n.runWith([0, C$99i]);
      }, fail: function (C$99i) {
        null != C$99n && C$99n.runWith([1, C$99i]);
      } });
  }, MiniFileMgr.read = function (C$99i, C$99n, C$99e, C$99t) {
    void 0 === C$99n && (C$99n = "ascill"), C$99i = "" != (C$99t = void 0 === C$99t ? "" : C$99t) ? MiniFileMgr.getFileNativePath(C$99i) : C$99i, MiniFileMgr.fs.readFile({ filePath: C$99i, encoding: C$99n, success: function (C$99i) {
        null != C$99e && C$99e.runWith([0, C$99i]);
      }, fail: function (C$99i) {
        C$99i && "" != C$99t ? MiniFileMgr.down(C$99t, C$99n, C$99e, C$99t) : null != C$99e && C$99e.runWith([1]);
      } });
  }, MiniFileMgr.readNativeFile = function (C$99i, C$99n) {
    MiniFileMgr.fs.readFile({ filePath: C$99i, encoding: "", success: function (C$99i) {
        null != C$99n && C$99n.runWith([0]);
      }, fail: function (C$99i) {
        null != C$99n && C$99n.runWith([1]);
      } });
  }, MiniFileMgr.down = function (C$99i, C$99n, C$99e, C$99t) {
    void 0 === C$99n && (C$99n = "ascill"), void 0 === C$99t && (C$99t = "");var C$99o = MiniFileMgr.getFileNativePath(C$99t);MiniFileMgr.wxdown({ url: C$99i, filePath: C$99o, success: function (C$99i) {
        200 === C$99i.statusCode && MiniFileMgr.readFile(C$99i.filePath, C$99n, C$99e, C$99t);
      }, fail: function (C$99i) {
        null != C$99e && C$99e.runWith([1, C$99i]);
      } }).onProgressUpdate(function (C$99i) {
      null != C$99e && C$99e.runWith([2, C$99i.progress]);
    });
  }, MiniFileMgr.readFile = function (C$99n, C$99i, C$99e, C$99t) {
    void 0 === C$99t && (C$99t = ""), MiniFileMgr.fs.readFile({ filePath: C$99n, encoding: C$99i = void 0 === C$99i ? "ascill" : C$99i, success: function (C$99i) {
        -1 == C$99n.indexOf("http://") && -1 == C$99n.indexOf("https://") || MiniFileMgr.onFileUpdate(C$99n, C$99t), null != C$99e && C$99e.runWith([0, C$99i]);
      }, fail: function (C$99i) {
        C$99i && null != C$99e && C$99e.runWith([1, C$99i]);
      } });
  }, MiniFileMgr.downImg = function (C$99i, C$99n, C$99e) {
    void 0 === C$99e && (C$99e = "");MiniFileMgr.wxdown({ url: C$99i, success: function (C$99i) {
        200 === C$99i.statusCode && MiniFileMgr.copyFile(C$99i.tempFilePath, C$99e, C$99n);
      }, fail: function (C$99i) {
        null != C$99n && C$99n.runWith([1, C$99i]);
      } });
  }, MiniFileMgr.copyFile = function (C$99i, C$99n, C$99e) {
    var C$99t = C$99i.split("/");var C$99o = C$99t[C$99t.length - 1];C$99n.split("?")[0];var C$99l = MiniFileMgr.getFileInfo(C$99n);C$99t = MiniFileMgr.getFileNativePath(C$99o);MiniFileMgr.fs.copyFile({ srcPath: C$99i, destPath: C$99t, success: function (C$99i) {
        C$99l ? C$99l.readyUrl != C$99n && MiniFileMgr.remove(C$99o, C$99n, C$99e) : (MiniFileMgr.onSaveFile(C$99n, C$99o), null != C$99e && C$99e.runWith([0]));
      }, fail: function (C$99i) {
        null != C$99e && C$99e.runWith([1, C$99i]);
      } });
  }, MiniFileMgr.getFileNativePath = function (C$99i) {
    return laya.wx.mini.MiniFileMgr.fileNativeDir + "/" + C$99i;
  }, MiniFileMgr.remove = function (C$99n, C$99e, C$99t) {
    void 0 === C$99e && (C$99e = "");var C$99i = MiniFileMgr.getFileInfo(C$99e);var C$99o = MiniFileMgr.getFileNativePath(C$99i.md5);C$99l.loader.clearRes(C$99i.readyUrl), MiniFileMgr.fs.unlink({ filePath: C$99o, success: function (C$99i) {
        "" != C$99e && MiniFileMgr.onSaveFile(C$99e, C$99n), null != C$99t && C$99t.runWith([0]);
      }, fail: function (C$99i) {} });
  }, MiniFileMgr.onSaveFile = function (C$99i, C$99n) {
    var C$99e = C$99i.split("?")[0];MiniFileMgr.filesListObj[C$99e] = { md5: C$99n, readyUrl: C$99i }, MiniFileMgr.fs.writeFile({ filePath: MiniFileMgr.fileNativeDir + "/" + MiniFileMgr.fileListName, encoding: "utf8", data: JSON.stringify(MiniFileMgr.filesListObj), success: function (C$99i) {
        console.log("\u5199\u5165\u6d4b\u8bd5\u6d4b\u8bd5\u6210\u529f\uff1a", C$99i);
      }, fail: function (C$99i) {
        console.log("\u5199\u5165\u6d4b\u8bd5\u6d4b\u8bd5\u5931\u8d25\uff1a", C$99i);
      } });
  }, MiniFileMgr.existDir = function (C$99i, C$99n) {
    MiniFileMgr.fs.mkdir({ dirPath: C$99i, success: function (C$99i) {
        null != C$99n && C$99n.runWith([0, { data: JSON.stringify({}) }]);
      }, fail: function (C$99i) {
        -1 != C$99i.errMsg.indexOf("file already exists") ? MiniFileMgr.readSync(MiniFileMgr.fileListName, "utf8", C$99n) : null != C$99n && C$99n.runWith([1, C$99i]);
      } });
  }, MiniFileMgr.readSync = function (C$99i, C$99n, C$99e, C$99t) {
    void 0 === C$99n && (C$99n = "ascill"), void 0 === C$99t && (C$99t = "");C$99n = MiniFileMgr.getFileNativePath(C$99i);var C$99o;try {
      C$99o = MiniFileMgr.fs.readFileSync(C$99n), null != C$99e && C$99e.runWith([0, { data: C$99o }]);
    } catch (C$99i) {
      null != C$99e && C$99e.runWith([1]);
    }
  }, MiniFileMgr.readCache = function () {}, MiniFileMgr.writeCache = function (C$99i) {
    var C$99n = readyUrl.split("?")[0];MiniFileMgr.filesListObj[C$99n] = { md5: md5Name, readyUrl: readyUrl }, MiniFileMgr.fs.writeFile({ filePath: MiniFileMgr.fileNativeDir + "/" + MiniFileMgr.fileListName, encoding: "utf8", data: JSON.stringify(MiniFileMgr.filesListObj), success: function (C$99i) {}, fail: function (C$99i) {} });
  }, MiniFileMgr.setNativeFileDir = function (C$99i) {
    MiniFileMgr.fileNativeDir = wx.env.USER_DATA_PATH + C$99i;
  }, MiniFileMgr.filesListObj = {}, MiniFileMgr.fileNativeDir = null, MiniFileMgr.fileListName = "layaairfiles.txt", MiniFileMgr.ziyuFileData = {}, C$99i(MiniFileMgr, ["_fileTypeArr", function () {
    return this._fileTypeArr = ["json", "ani", "xml", "sk", "txt", "atlas", "swf", "part", "fnt", "proto", "lh", "lav", "lani", "lmat", "lm", "ltc"];
  }, "fs", function () {
    return this.fs = wx.getFileSystemManager();
  }, "wxdown", function () {
    return this.wxdown = wx.downloadFile;
  }]);var C$99r = MiniFileMgr;function MiniFileMgr() {
    MiniFileMgr.__super.call(this);
  }C$99a(MiniSound, "laya.wx.mini.MiniSound", C$99e), (C$99w = MiniSound.prototype).load = function (C$99i) {
    var C$99n;C$99i = C$99m.formatURL(C$99i), this.url = C$99i, MiniSound._audioCache[C$99i] ? this.event("complete") : (this._sound.onCanplay(function () {
      C$99n.loaded = !0, C$99n.event("complete"), MiniSound._audioCache[C$99n.url] = C$99n;
    }), this._sound.onError(function (C$99i) {
      console.error("errCode=" + C$99i.errCode + "  errMsg=" + C$99i.errMsg), C$99n.event("error");
    }), this._sound.src = C$99i, C$99n = this);
  }, C$99w.play = function (C$99i, C$99n) {
    var C$99e;var C$99t;return void 0 === C$99i && (C$99i = 0), void 0 === C$99n && (C$99n = 0), C$99t = (C$99e = this.url == C$99v._tMusic ? (MiniSound._musicAudio || (MiniSound._musicAudio = this._sound), MiniSound._musicAudio) : this._sound, this._chanell), C$99e.src = this.url, C$99e.startTime = 0, C$99t.isStopped && (C$99t.url = this.url, C$99t.loops = C$99n, C$99t.startTime = C$99i, C$99t.play(), C$99v.addChannel(C$99t)), C$99t;
  }, C$99w.dispose = function () {
    var C$99i = MiniSound._audioCache[this.url];C$99i && (C$99i.src = "", delete MiniSound._audioCache[this.url]);
  }, C$99n(0, C$99w, "duration", function () {
    return this._sound.duration;
  }), MiniSound._createSound = function () {
    return MiniSound._id++, C$99u.window.wx.createInnerAudioContext({ useWebAudioImplement: !1 });
  }, MiniSound._musicAudio = null, MiniSound._id = 0, MiniSound._audioCache = {}, MiniSound._null = void 0;var C$99E = MiniSound;function MiniSound() {
    this._sound = null, this._chanell = null, this.url = null, this.loaded = !1, MiniSound.__super.call(this), this._sound = MiniSound._createSound(), this._chanell = new C$99C(this._sound);
  }var C$99w;C$99a(MiniSoundChannel, "laya.wx.mini.MiniSoundChannel", C$99p), (C$99i = MiniSoundChannel.prototype).__onEnd = function () {
    if (1 == this.loops) return this.completeHandler && (C$99l.timer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), void this.event("complete");0 < this.loops && this.loops--, this.startTime = 0, this.play();
  }, C$99i.__onNull = function () {}, C$99i.play = function () {
    this.isStopped = !1, C$99v.addChannel(this), this._audio && this._audio.play();
  }, C$99i.stop = function () {
    this.isStopped = !0, C$99v.removeChannel(this), this.completeHandler = null, this._audio && this._audio.stop();
  }, C$99i.pause = function () {
    this.isStopped = !0, this._audio.pause();
  }, C$99i.resume = function () {
    this._audio && (this.isStopped = !1, C$99v.addChannel(this), this._audio.play());
  }, C$99n(0, C$99i, "position", function () {
    return this._audio ? this._audio.currentTime : 0;
  }), C$99n(0, C$99i, "duration", function () {
    return this._audio ? this._audio.duration : 0;
  }), C$99n(0, C$99i, "volume", function () {
    return 1;
  }, function (C$99i) {}), MiniSoundChannel._null = void 0;var C$99C = MiniSoundChannel;function MiniSoundChannel(C$99i) {
    this._audio = null, this._onEnd = null, MiniSoundChannel.__super.call(this), this.isStopped = !0, this._audio = C$99i, this._onEnd = C$99g.bind(this.__onEnd, this), C$99i.onEnded(this._onEnd);
  }C$99a(MiniVideo, "laya.wx.mini.MiniVideo"), (C$99e = MiniVideo.prototype).on = function (C$99i, C$99n, C$99e) {
    "loadedmetadata" == C$99i ? (this.onPlayFunc = C$99e.bind(C$99n), this.videoElement.onPlay = this.onPlayFunction.bind(this)) : "ended" == C$99i && (this.onEndedFunC = C$99e.bind(C$99n), this.videoElement.onEnded = this.onEndedFunction.bind(this)), this.videoElement.onTimeUpdate = this.onTimeUpdateFunc.bind(this);
  }, C$99e.onTimeUpdateFunc = function (C$99i) {
    this.position = C$99i.position, this._duration = C$99i.duration;
  }, C$99e.onPlayFunction = function () {
    this.videoElement && (this.videoElement.readyState = 200), console.log("=====\u89c6\u9891\u52a0\u8f7d\u5b8c\u6210========"), null != this.onPlayFunc && this.onPlayFunc();
  }, C$99e.onended = function (C$99i, C$99n) {
    this.onEndedFunC = C$99n.bind(C$99i), this.videoElement.onended = this.onEndedFunction.bind(this);
  }, C$99e.onEndedFunction = function () {
    this.videoElement && (this.videoend = !0, console.log("=====\u89c6\u9891\u64ad\u653e\u5b8c\u6bd5========"), null != this.onEndedFunC && this.onEndedFunC());
  }, C$99e.off = function (C$99i, C$99n, C$99e) {
    "loadedmetadata" == C$99i ? (this.onPlayFunc = C$99e.bind(C$99n), this.videoElement.offPlay = this.onPlayFunction.bind(this)) : "ended" == C$99i && (this.onEndedFunC = C$99e.bind(C$99n), this.videoElement.offEnded = this.onEndedFunction.bind(this));
  }, C$99e.load = function (C$99i) {
    this.videoElement && (this.videoElement.src = C$99i);
  }, C$99e.play = function () {
    this.videoElement && (this.videoend = !1, this.videoElement.play());
  }, C$99e.pause = function () {
    this.videoElement && (this.videoend = !0, this.videoElement.pause());
  }, C$99e.size = function (C$99i, C$99n) {
    this.videoElement && (this.videoElement.width = C$99i, this.videoElement.height = C$99n);
  }, C$99e.destroy = function () {
    this.videoElement && this.videoElement.destroy(), this.videoElement = null, this.onEndedFunC = null, this.onPlayFunc = null, this.videoend = !1, this.videourl = null;
  }, C$99e.reload = function () {
    this.videoElement && (this.videoElement.src = this.videourl);
  }, C$99n(0, C$99e, "duration", function () {
    return this._duration;
  }), C$99n(0, C$99e, "currentTime", function () {
    return this.videoElement ? this.videoElement.initialTime : 0;
  }, function (C$99i) {
    this.videoElement && (this.videoElement.initialTime = C$99i);
  }), C$99n(0, C$99e, "videoWidth", function () {
    return this.videoElement ? this.videoElement.width : 0;
  }), C$99n(0, C$99e, "videoHeight", function () {
    return this.videoElement ? this.videoElement.height : 0;
  }), C$99n(0, C$99e, "ended", function () {
    return this.videoend;
  }), C$99n(0, C$99e, "loop", function () {
    return !!this.videoElement && this.videoElement.loop;
  }, function (C$99i) {
    this.videoElement && (this.videoElement.loop = C$99i);
  }), C$99n(0, C$99e, "playbackRate", function () {
    return this.videoElement ? this.videoElement.playbackRate : 0;
  }, function (C$99i) {
    this.videoElement && (this.videoElement.playbackRate = C$99i);
  }), C$99n(0, C$99e, "muted", function () {
    return !!this.videoElement && this.videoElement.muted;
  }, function (C$99i) {
    this.videoElement && (this.videoElement.muted = C$99i);
  }), C$99n(0, C$99e, "paused", function () {
    return !!this.videoElement && this.videoElement.paused;
  }), C$99n(0, C$99e, "x", function () {
    return this.videoElement ? this.videoElement.x : 0;
  }, function (C$99i) {
    this.videoElement && (this.videoElement.x = C$99i);
  }), C$99n(0, C$99e, "y", function () {
    return this.videoElement ? this.videoElement.y : 0;
  }, function (C$99i) {
    this.videoElement && (this.videoElement.y = C$99i);
  }), C$99n(0, C$99e, "currentSrc", function () {
    return this.videoElement.src;
  }), C$99n(0, C$99e, "src", function () {
    return this.videoElement ? this.videoElement.src : 0;
  }, function (C$99i) {
    this.videoElement && (this.videoElement.src = C$99i);
  }), C$99n(0, C$99e, "controls", function () {
    if (this.videoElement) return this.videoElement.controls;
  }, function (C$99i) {
    this.videoElement && (this.videoElement.controls = C$99i);
  }), C$99n(0, C$99e, "autoplay", function () {
    if (this.videoElement) return this.videoElement.autoplay;
  }, function (C$99i) {
    this.videoElement && (this.videoElement.autoplay = C$99i);
  });var C$99_ = MiniVideo;function MiniVideo() {
    this.videoend = !1, this.videourl = "", this.videoElement = C$99u.window.wx.createVideo({ showCenterPlayBtn: !1, showProgressInControlMode: !1, objectFit: "fill" });
  }
}(window, (document, Laya)), "function" == typeof define && define.amd && define("laya.core", ["require", "exports"], function (C$99i, C$99n) {
  "use strict";
  for (var C$99e in Object.defineProperty(C$99n, "__esModule", { value: !0 }), Laya) {
    var C$99t = Laya[C$99e];C$99t && C$99t.__isclass && (C$99n[C$99e] = C$99t);
  }
});