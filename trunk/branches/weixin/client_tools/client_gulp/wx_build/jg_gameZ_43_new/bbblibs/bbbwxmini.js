!function (o, l) {
  l.un, l.uns;var i = l.static,
      a = l.class,
      n = l.getset;l.__newvec;var r = laya.utils.Browser,
      e = (laya.events.Event, laya.events.EventDispatcher);var s = laya.resource.HTMLImage,
      c = laya.utils.Handler,
      t = laya.display.Input,
      f = laya.net.Loader;laya.maths.Matrix;var h = laya.renders.Render,
      M = laya.utils.RunDriver;laya.media.Sound;var p = laya.media.SoundChannel,
      v = laya.media.SoundManager,
      m = (laya.display.Stage, laya.net.URL);var g = laya.utils.Utils;a(MiniAdpter, "laya.wx.mini.MiniAdpter"), MiniAdpter.getJson = function (i) {
    return JSON.parse(i);
  }, MiniAdpter.init = function (i, n) {
    void 0 === i && (i = !1), void 0 === n && (n = !1), MiniAdpter._inited || (MiniAdpter.window = o).navigator.userAgent.indexOf("MiniGame") < 0 || (MiniAdpter._inited = !0, MiniAdpter.isZiYu = n, MiniAdpter.isPosMsgYu = i, MiniAdpter.EnvConfig = {}, MiniAdpter.isZiYu || (d.setNativeFileDir("/layaairGame"), d.existDir(d.fileNativeDir, c.create(MiniAdpter, MiniAdpter.onMkdirCallBack))), MiniAdpter.window.focus = function () {}, l.getUrlPath = function () {}, MiniAdpter.window.logtime = function (i) {}, MiniAdpter.window.alertTimeLog = function (i) {}, MiniAdpter.window.resetShareInfo = function () {}, MiniAdpter.window.CanvasRenderingContext2D = function () {}, MiniAdpter.window.CanvasRenderingContext2D.prototype = MiniAdpter.window.wx.createCanvas().getContext("2d").__proto__, MiniAdpter.window.document.body.appendChild = function () {}, MiniAdpter.EnvConfig.pixelRatioInt = 0, M.getPixelRatio = MiniAdpter.pixelRatio, MiniAdpter._preCreateElement = r.createElement, r.createElement = MiniAdpter.createElement, M.createShaderCondition = MiniAdpter.createShaderCondition, g.parseXMLFromString = MiniAdpter.parseXMLFromString, t._createInputElement = F._createInputElement, MiniAdpter.EnvConfig.load = f.prototype.load, f.prototype.load = y.prototype.load, MiniAdpter.isZiYu && i && wx.onMessage(function (i) {
      i.isLoad && (d.ziyuFileData[i.url] = i.data);
    }));
  }, MiniAdpter.onMkdirCallBack = function (i, n) {
    i || (d.filesListObj = JSON.parse(n.data));
  }, MiniAdpter.pixelRatio = function () {
    if (!MiniAdpter.EnvConfig.pixelRatioInt) try {
      var i = wx.getSystemInfoSync();return MiniAdpter.EnvConfig.pixelRatioInt = i.pixelRatio, i.pixelRatio;
    } catch (i) {}return MiniAdpter.EnvConfig.pixelRatioInt;
  }, MiniAdpter.createElement = function (i) {
    return "canvas" != i ? "textarea" == i || "input" == i ? MiniAdpter.onCreateInput(i) : "div" == i ? ((e = MiniAdpter._preCreateElement(i)).contains = function (i) {
      return null;
    }, e.removeChild = function (i) {}, e) : MiniAdpter._preCreateElement(i) : (1 == MiniAdpter.idx ? MiniAdpter.isZiYu ? (n = sharedCanvas).style = {} : n = o.canvas : n = o.wx.createCanvas(), MiniAdpter.idx++, n);var n;var e;
  }, MiniAdpter.onCreateInput = function (i) {
    i = MiniAdpter._preCreateElement(i);return i.focus = F.wxinputFocus, i.blur = F.wxinputblur, i.style = {}, i.value = 0, i.parentElement = {}, i.placeholder = {}, i.type = {}, i.setColor = function (i) {}, i.setType = function (i) {}, i.setFontFace = function (i) {}, i.addEventListener = function (i) {}, i.contains = function (i) {
      return null;
    }, i.removeChild = function (i) {}, i;
  }, MiniAdpter.createShaderCondition = function (i) {
    var n = this;return function () {
      return n[i.replace("this.", "")];
    };
  }, MiniAdpter.EnvConfig = null, MiniAdpter.window = null, MiniAdpter._preCreateElement = null, MiniAdpter._inited = !1, MiniAdpter.wxRequest = null, MiniAdpter.systemInfo = null, MiniAdpter.version = "0.0.1", MiniAdpter.isZiYu = !1, MiniAdpter.isPosMsgYu = !1, MiniAdpter.parseXMLFromString = function (i) {
    var n;i = i.replace(/>\s+</g, "><");try {
      n = new o.Parser.DOMParser().parseFromString(i, "text/xml");
    } catch (i) {
      throw "\u9700\u8981\u5f15\u5165xml\u89e3\u6790\u5e93\u6587\u4ef6";
    }return n;
  }, MiniAdpter.idx = 1;var u = MiniAdpter;function MiniAdpter() {}a(MiniImage, "laya.wx.mini.MiniImage"), MiniImage.prototype._loadImage = function (i) {
    var n = !1;-1 == i.indexOf("layaNativeDir/") && (n = !0, i = m.formatURL(i)), d.getFileInfo(i) ? MiniImage.onCreateImage(i, this, !n) : -1 != i.indexOf("http://") || -1 != i.indexOf("https://") ? d.downImg(i, new c(MiniImage, MiniImage.onDownImgCallBack, [i, this]), i) : MiniImage.onCreateImage(i, this, !0);
  }, MiniImage.onDownImgCallBack = function (i, n, e) {
    e ? n.onError(null) : MiniImage.onCreateImage(i, n);
  }, MiniImage.onCreateImage = function (n, e, i) {
    var t;function clear() {
      t.onload = null, t.onerror = null, delete e.imgCache[n];
    }i = (i = void 0 === i ? !1 : i) ? n : (i = d.getFileInfo(n).md5, d.getFileNativePath(i)), null == e.imgCache && (e.imgCache = {});function ks() {
      clear(), e.onLoaded(t);
    }function As() {
      clear(), e.event("error", "Load image failed");
    }"nativeimage" == e._type ? ((t = new r.window.Image()).crossOrigin = "", t.onload = ks, t.onerror = As, t.src = i, e.imgCache[n] = t) : new s.create(i, { onload: ks, onerror: As, onCreate: function (i) {
        t = i, e.imgCache[n] = i;
      } });
  };function MiniImage() {}a(MiniInput, "laya.wx.mini.MiniInput"), MiniInput._createInputElement = function () {
    t._initInput(t.area = r.createElement("textarea")), t._initInput(t.input = r.createElement("input")), t.inputContainer = r.createElement("div"), t.inputContainer.style.position = "absolute", t.inputContainer.style.zIndex = 1e5, r.container.appendChild(t.inputContainer), t.inputContainer.setPos = function (i, n) {
      t.inputContainer.style.left = i + "px", t.inputContainer.style.top = n + "px";
    }, l.stage.on("resize", null, MiniInput._onStageResize), wx.onWindowResize && wx.onWindowResize(function (i) {
      o.dispatchEvent && o.dispatchEvent("resize");
    }), v._soundClass = E, v._musicClass = E, o._videoClass = x;
  }, MiniInput._onStageResize = function () {
    l.stage._canvasTransform.identity().scale(r.width / h.canvas.width / M.getPixelRatio(), r.height / h.canvas.height / M.getPixelRatio());
  }, MiniInput.wxinputFocus = function (i) {
    var n = t.inputElement.target;n && !n.editable || (u.window.wx.offKeyboardConfirm(), u.window.wx.offKeyboardInput(), u.window.wx.showKeyboard({ defaultValue: n.text, maxLength: n.maxChars, multiple: n.multiline, confirmHold: !0, confirmType: "done", success: function (i) {}, fail: function (i) {} }), u.window.wx.onKeyboardConfirm(function (i) {
      i = i ? i.value : "";n.text = i, n.event("input"), laya.wx.mini.MiniInput.inputEnter();
    }), u.window.wx.onKeyboardInput(function (i) {
      i = i ? i.value : "";n.multiline || -1 == i.indexOf("\n") ? (n.text = i, n.event("input")) : laya.wx.mini.MiniInput.inputEnter();
    }));
  }, MiniInput.inputEnter = function () {
    t.inputElement.target.focus = !1;
  }, MiniInput.wxinputblur = function () {
    MiniInput.hideKeyboard();
  }, MiniInput.hideKeyboard = function () {
    u.window.wx.offKeyboardConfirm(), u.window.wx.offKeyboardInput(), u.window.wx.hideKeyboard({ success: function (i) {
        console.log("\u9690\u85cf\u952e\u76d8");
      }, fail: function (i) {
        console.log("\u9690\u85cf\u952e\u76d8\u51fa\u9519:" + (i ? i.errMsg : ""));
      } });
  };var F = MiniInput;function MiniInput() {}a(MiniLoader, "laya.wx.mini.MiniLoader"), (w = MiniLoader.prototype).load = function (i, n, e, t, o) {
    void 0 === e && (e = !0), void 0 === o && (o = !1);var l = this;0 === (l._url = i).indexOf("data:image") ? l._type = n = "image" : l._type = n = n || l.getTypeFromUrl(i), l._cache = e, l._data = null;var a = "ascii";-1 != i.indexOf(".fnt") ? a = "utf8" : "arraybuffer" == n && (a = "");var r = g.getFileExtension(i);if (-1 != MiniLoader._fileTypeArr.indexOf(r)) u.EnvConfig.load.call(this, i, n, e, t, o);else if (d.getFileInfo(i)) u.EnvConfig.load.call(this, i, n, e, t, o);else {
      if (-1 != i.indexOf("layaNativeDir/")) return u.isZiYu ? (r = d.ziyuFileData[i], void l.onLoaded(r)) : (cosnole.log("read read"), void d.read(i, a, new c(MiniLoader, MiniLoader.onReadNativeCallBack, [a, i, n, e, t, o, l])));r = "" == m.rootPath ? i : i.split(m.rootPath)[0], -1 != i.indexOf("http://") || -1 != i.indexOf("https://") ? u.EnvConfig.load.call(l, i, n, e, t, o) : d.readFile(r, a, new c(MiniLoader, MiniLoader.onReadNativeCallBack, [a, i, n, e, t, o, l]), i);
    }
  }, w.resMgrLoad = function (i, t, n, e, o, l, a) {
    void 0 === n && (n = 0), void 0 === e && (e = !1), void 0 === o && (o = !1), void 0 === l && (l = 0), void 0 === a && (a = 3), -1 != i.indexOf("mpack") && console.log("=============resMgrLoad url:", i), u.EnvConfig.resMgrLoad(i, (i, n, e) => {
      MiniLoader.prototype.resMgrLoadCallBack(i, n, e, t);
    }, n, e, o, l, a);
  }, w.resMgrLoadCallBack = function (i, n, e, t) {
    console.log("buff:::", i, e, d.fileNativeDir + "///" + d.fileListName), t(i, n, e);
  }, w.clearRes = function (i, n) {
    this.clearRes(i, n = void 0 === n ? !1 : n);n = d.getFileInfo(i);!n || -1 == i.indexOf("http://") && -1 == i.indexOf("https://") || (i = n.md5, n = d.getFileNativePath(i), d.remove(n));
  }, MiniLoader.onReadNativeCallBack = function (i, n, e, t, o, l, a, r, d) {
    void 0 === t && (t = !0), void 0 === l && (l = !1), (r = void 0 === r ? 0 : r) ? 1 == r && u.EnvConfig.load.call(a, n, e, t, o, l) : (r = "json" == e || "atlas" == e ? u.getJson(d.data) : "xml" == e ? g.parseXMLFromString(d.data) : d.data, a.onLoaded(r), !u.isZiYu && u.isPosMsgYu && "arraybuffer" != e && wx.postMessage({ url: n, data: r, isLoad: !0 }));
  }, i(MiniLoader, ["_fileTypeArr", function () {
    return this._fileTypeArr = ["png", "jpg", "bmp", "jpeg", "gif"];
  }]);var y = MiniLoader;function MiniLoader() {}a(MiniFileMgr, "laya.wx.mini.MiniFileMgr", e), MiniFileMgr.isLoadFile = function (i) {
    return -1 != MiniFileMgr._fileTypeArr.indexOf(i);
  }, MiniFileMgr.getFileInfo = function (i) {
    i = i.split("?")[0];i = MiniFileMgr.filesListObj[i];return null == i ? null : i;
  }, MiniFileMgr.onFileUpdate = function (i, n) {
    i = i.split("/");i = i[i.length - 1];var e = MiniFileMgr.getFileInfo(n);null == e ? MiniFileMgr.onSaveFile(n, i) : e.readyUrl != n && MiniFileMgr.remove(i, n);
  }, MiniFileMgr.exits = function (i, n) {
    i = MiniFileMgr.getFileNativePath(i);MiniFileMgr.fs.getFileInfo({ filePath: i, success: function (i) {
        null != n && n.runWith([0, i]);
      }, fail: function (i) {
        null != n && n.runWith([1, i]);
      } });
  }, MiniFileMgr.read = function (i, n, e, t) {
    void 0 === n && (n = "ascill"), i = "" != (t = void 0 === t ? "" : t) ? MiniFileMgr.getFileNativePath(i) : i, MiniFileMgr.fs.readFile({ filePath: i, encoding: n, success: function (i) {
        null != e && e.runWith([0, i]);
      }, fail: function (i) {
        i && "" != t ? MiniFileMgr.down(t, n, e, t) : null != e && e.runWith([1]);
      } });
  }, MiniFileMgr.readNativeFile = function (i, n) {
    MiniFileMgr.fs.readFile({ filePath: i, encoding: "", success: function (i) {
        null != n && n.runWith([0]);
      }, fail: function (i) {
        null != n && n.runWith([1]);
      } });
  }, MiniFileMgr.down = function (i, n, e, t) {
    void 0 === n && (n = "ascill"), void 0 === t && (t = "");var o = MiniFileMgr.getFileNativePath(t);MiniFileMgr.wxdown({ url: i, filePath: o, success: function (i) {
        200 === i.statusCode && MiniFileMgr.readFile(i.filePath, n, e, t);
      }, fail: function (i) {
        null != e && e.runWith([1, i]);
      } }).onProgressUpdate(function (i) {
      null != e && e.runWith([2, i.progress]);
    });
  }, MiniFileMgr.readFile = function (n, i, e, t) {
    void 0 === t && (t = ""), MiniFileMgr.fs.readFile({ filePath: n, encoding: i = void 0 === i ? "ascill" : i, success: function (i) {
        -1 == n.indexOf("http://") && -1 == n.indexOf("https://") || MiniFileMgr.onFileUpdate(n, t), null != e && e.runWith([0, i]);
      }, fail: function (i) {
        i && null != e && e.runWith([1, i]);
      } });
  }, MiniFileMgr.downImg = function (i, n, e) {
    void 0 === e && (e = "");MiniFileMgr.wxdown({ url: i, success: function (i) {
        200 === i.statusCode && MiniFileMgr.copyFile(i.tempFilePath, e, n);
      }, fail: function (i) {
        null != n && n.runWith([1, i]);
      } });
  }, MiniFileMgr.copyFile = function (i, n, e) {
    var t = i.split("/");var o = t[t.length - 1];n.split("?")[0];var l = MiniFileMgr.getFileInfo(n);t = MiniFileMgr.getFileNativePath(o);MiniFileMgr.fs.copyFile({ srcPath: i, destPath: t, success: function (i) {
        l ? l.readyUrl != n && MiniFileMgr.remove(o, n, e) : (MiniFileMgr.onSaveFile(n, o), null != e && e.runWith([0]));
      }, fail: function (i) {
        null != e && e.runWith([1, i]);
      } });
  }, MiniFileMgr.getFileNativePath = function (i) {
    return laya.wx.mini.MiniFileMgr.fileNativeDir + "/" + i;
  }, MiniFileMgr.remove = function (n, e, t) {
    void 0 === e && (e = "");var i = MiniFileMgr.getFileInfo(e);var o = MiniFileMgr.getFileNativePath(i.md5);l.loader.clearRes(i.readyUrl), MiniFileMgr.fs.unlink({ filePath: o, success: function (i) {
        "" != e && MiniFileMgr.onSaveFile(e, n), null != t && t.runWith([0]);
      }, fail: function (i) {} });
  }, MiniFileMgr.onSaveFile = function (i, n) {
    var e = i.split("?")[0];MiniFileMgr.filesListObj[e] = { md5: n, readyUrl: i }, MiniFileMgr.fs.writeFile({ filePath: MiniFileMgr.fileNativeDir + "/" + MiniFileMgr.fileListName, encoding: "utf8", data: JSON.stringify(MiniFileMgr.filesListObj), success: function (i) {
        console.log("\u5199\u5165\u6d4b\u8bd5\u6d4b\u8bd5\u6210\u529f\uff1a", i);
      }, fail: function (i) {
        console.log("\u5199\u5165\u6d4b\u8bd5\u6d4b\u8bd5\u5931\u8d25\uff1a", i);
      } });
  }, MiniFileMgr.existDir = function (i, n) {
    MiniFileMgr.fs.mkdir({ dirPath: i, success: function (i) {
        null != n && n.runWith([0, { data: JSON.stringify({}) }]);
      }, fail: function (i) {
        -1 != i.errMsg.indexOf("file already exists") ? MiniFileMgr.readSync(MiniFileMgr.fileListName, "utf8", n) : null != n && n.runWith([1, i]);
      } });
  }, MiniFileMgr.readSync = function (i, n, e, t) {
    void 0 === n && (n = "ascill"), void 0 === t && (t = "");n = MiniFileMgr.getFileNativePath(i);var o;try {
      o = MiniFileMgr.fs.readFileSync(n), null != e && e.runWith([0, { data: o }]);
    } catch (i) {
      null != e && e.runWith([1]);
    }
  }, MiniFileMgr.readCache = function () {}, MiniFileMgr.writeCache = function (i) {
    var n = readyUrl.split("?")[0];MiniFileMgr.filesListObj[n] = { md5: md5Name, readyUrl: readyUrl }, MiniFileMgr.fs.writeFile({ filePath: MiniFileMgr.fileNativeDir + "/" + MiniFileMgr.fileListName, encoding: "utf8", data: JSON.stringify(MiniFileMgr.filesListObj), success: function (i) {}, fail: function (i) {} });
  }, MiniFileMgr.setNativeFileDir = function (i) {
    MiniFileMgr.fileNativeDir = wx.env.USER_DATA_PATH + i;
  }, MiniFileMgr.filesListObj = {}, MiniFileMgr.fileNativeDir = null, MiniFileMgr.fileListName = "layaairfiles.txt", MiniFileMgr.ziyuFileData = {}, i(MiniFileMgr, ["_fileTypeArr", function () {
    return this._fileTypeArr = ["json", "ani", "xml", "sk", "txt", "atlas", "swf", "part", "fnt", "proto", "lh", "lav", "lani", "lmat", "lm", "ltc"];
  }, "fs", function () {
    return this.fs = wx.getFileSystemManager();
  }, "wxdown", function () {
    return this.wxdown = wx.downloadFile;
  }]);var d = MiniFileMgr;function MiniFileMgr() {
    MiniFileMgr.__super.call(this);
  }a(MiniSound, "laya.wx.mini.MiniSound", e), (w = MiniSound.prototype).load = function (i) {
    var n;i = m.formatURL(i), this.url = i, MiniSound._audioCache[i] ? this.event("complete") : (this._sound.onCanplay(function () {
      n.loaded = !0, n.event("complete"), MiniSound._audioCache[n.url] = n;
    }), this._sound.onError(function (i) {
      console.error("errCode=" + i.errCode + "  errMsg=" + i.errMsg), n.event("error");
    }), this._sound.src = i, n = this);
  }, w.play = function (i, n) {
    var e;var t;return void 0 === i && (i = 0), void 0 === n && (n = 0), t = (e = this.url == v._tMusic ? (MiniSound._musicAudio || (MiniSound._musicAudio = this._sound), MiniSound._musicAudio) : this._sound, this._chanell), e.src = this.url, e.startTime = 0, t.isStopped && (t.url = this.url, t.loops = n, t.startTime = i, t.play(), v.addChannel(t)), t;
  }, w.dispose = function () {
    var i = MiniSound._audioCache[this.url];i && (i.src = "", delete MiniSound._audioCache[this.url]);
  }, n(0, w, "duration", function () {
    return this._sound.duration;
  }), MiniSound._createSound = function () {
    return MiniSound._id++, u.window.wx.createInnerAudioContext({ useWebAudioImplement: !1 });
  }, MiniSound._musicAudio = null, MiniSound._id = 0, MiniSound._audioCache = {}, MiniSound._null = void 0;var E = MiniSound;function MiniSound() {
    this._sound = null, this._chanell = null, this.url = null, this.loaded = !1, MiniSound.__super.call(this), this._sound = MiniSound._createSound(), this._chanell = new _(this._sound);
  }var w;a(MiniSoundChannel, "laya.wx.mini.MiniSoundChannel", p), (i = MiniSoundChannel.prototype).__onEnd = function () {
    if (1 == this.loops) return this.completeHandler && (l.timer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), void this.event("complete");0 < this.loops && this.loops--, this.startTime = 0, this.play();
  }, i.__onNull = function () {}, i.play = function () {
    this.isStopped = !1, v.addChannel(this), this._audio && this._audio.play();
  }, i.stop = function () {
    this.isStopped = !0, v.removeChannel(this), this.completeHandler = null, this._audio && this._audio.stop();
  }, i.pause = function () {
    this.isStopped = !0, this._audio.pause();
  }, i.resume = function () {
    this._audio && (this.isStopped = !1, v.addChannel(this), this._audio.play());
  }, n(0, i, "position", function () {
    return this._audio ? this._audio.currentTime : 0;
  }), n(0, i, "duration", function () {
    return this._audio ? this._audio.duration : 0;
  }), n(0, i, "volume", function () {
    return 1;
  }, function (i) {}), MiniSoundChannel._null = void 0;var _ = MiniSoundChannel;function MiniSoundChannel(i) {
    this._audio = null, this._onEnd = null, MiniSoundChannel.__super.call(this), this.isStopped = !0, this._audio = i, this._onEnd = g.bind(this.__onEnd, this), i.onEnded(this._onEnd);
  }a(MiniVideo, "laya.wx.mini.MiniVideo"), (e = MiniVideo.prototype).on = function (i, n, e) {
    "loadedmetadata" == i ? (this.onPlayFunc = e.bind(n), this.videoElement.onPlay = this.onPlayFunction.bind(this)) : "ended" == i && (this.onEndedFunC = e.bind(n), this.videoElement.onEnded = this.onEndedFunction.bind(this)), this.videoElement.onTimeUpdate = this.onTimeUpdateFunc.bind(this);
  }, e.onTimeUpdateFunc = function (i) {
    this.position = i.position, this._duration = i.duration;
  }, e.onPlayFunction = function () {
    this.videoElement && (this.videoElement.readyState = 200), console.log("=====\u89c6\u9891\u52a0\u8f7d\u5b8c\u6210========"), null != this.onPlayFunc && this.onPlayFunc();
  }, e.onended = function (i, n) {
    this.onEndedFunC = n.bind(i), this.videoElement.onended = this.onEndedFunction.bind(this);
  }, e.onEndedFunction = function () {
    this.videoElement && (this.videoend = !0, console.log("=====\u89c6\u9891\u64ad\u653e\u5b8c\u6bd5========"), null != this.onEndedFunC && this.onEndedFunC());
  }, e.off = function (i, n, e) {
    "loadedmetadata" == i ? (this.onPlayFunc = e.bind(n), this.videoElement.offPlay = this.onPlayFunction.bind(this)) : "ended" == i && (this.onEndedFunC = e.bind(n), this.videoElement.offEnded = this.onEndedFunction.bind(this));
  }, e.load = function (i) {
    this.videoElement && (this.videoElement.src = i);
  }, e.play = function () {
    this.videoElement && (this.videoend = !1, this.videoElement.play());
  }, e.pause = function () {
    this.videoElement && (this.videoend = !0, this.videoElement.pause());
  }, e.size = function (i, n) {
    this.videoElement && (this.videoElement.width = i, this.videoElement.height = n);
  }, e.destroy = function () {
    this.videoElement && this.videoElement.destroy(), this.videoElement = null, this.onEndedFunC = null, this.onPlayFunc = null, this.videoend = !1, this.videourl = null;
  }, e.reload = function () {
    this.videoElement && (this.videoElement.src = this.videourl);
  }, n(0, e, "duration", function () {
    return this._duration;
  }), n(0, e, "currentTime", function () {
    return this.videoElement ? this.videoElement.initialTime : 0;
  }, function (i) {
    this.videoElement && (this.videoElement.initialTime = i);
  }), n(0, e, "videoWidth", function () {
    return this.videoElement ? this.videoElement.width : 0;
  }), n(0, e, "videoHeight", function () {
    return this.videoElement ? this.videoElement.height : 0;
  }), n(0, e, "ended", function () {
    return this.videoend;
  }), n(0, e, "loop", function () {
    return !!this.videoElement && this.videoElement.loop;
  }, function (i) {
    this.videoElement && (this.videoElement.loop = i);
  }), n(0, e, "playbackRate", function () {
    return this.videoElement ? this.videoElement.playbackRate : 0;
  }, function (i) {
    this.videoElement && (this.videoElement.playbackRate = i);
  }), n(0, e, "muted", function () {
    return !!this.videoElement && this.videoElement.muted;
  }, function (i) {
    this.videoElement && (this.videoElement.muted = i);
  }), n(0, e, "paused", function () {
    return !!this.videoElement && this.videoElement.paused;
  }), n(0, e, "x", function () {
    return this.videoElement ? this.videoElement.x : 0;
  }, function (i) {
    this.videoElement && (this.videoElement.x = i);
  }), n(0, e, "y", function () {
    return this.videoElement ? this.videoElement.y : 0;
  }, function (i) {
    this.videoElement && (this.videoElement.y = i);
  }), n(0, e, "currentSrc", function () {
    return this.videoElement.src;
  }), n(0, e, "src", function () {
    return this.videoElement ? this.videoElement.src : 0;
  }, function (i) {
    this.videoElement && (this.videoElement.src = i);
  }), n(0, e, "controls", function () {
    if (this.videoElement) return this.videoElement.controls;
  }, function (i) {
    this.videoElement && (this.videoElement.controls = i);
  }), n(0, e, "autoplay", function () {
    if (this.videoElement) return this.videoElement.autoplay;
  }, function (i) {
    this.videoElement && (this.videoElement.autoplay = i);
  });var x = MiniVideo;function MiniVideo() {
    this.videoend = !1, this.videourl = "", this.videoElement = u.window.wx.createVideo({ showCenterPlayBtn: !1, showProgressInControlMode: !1, objectFit: "fill" });
  }
}(window, (document, Laya)), "function" == typeof define && define.amd && define("laya.core", ["require", "exports"], function (i, n) {
  "use strict";
  for (var e in Object.defineProperty(n, "__esModule", { value: !0 }), Laya) {
    var t = Laya[e];t && t.__isclass && (n[e] = t);
  }
});