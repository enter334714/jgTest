!function (t, a) {
  a.un, a.uns;var i = a.static,
      n = a.class,
      o = a.getset;a.__newvec;var r = laya.utils.Browser,
      l = (laya.events.Event, laya.events.EventDispatcher);var s = laya.resource.HTMLImage,
      c = laya.utils.Handler,
      e = laya.display.Input,
      M = laya.net.Loader;laya.maths.Matrix;var f = laya.renders.Render,
      p = laya.utils.RunDriver;laya.media.Sound;var g = laya.media.SoundChannel,
      h = laya.media.SoundManager,
      v = (laya.display.Stage, laya.net.URL);var m = laya.utils.Utils;n(MiniAdpter, "laya.wx.mini.MiniAdpter"), MiniAdpter.getJson = function (i) {
    return JSON.parse(i);
  }, MiniAdpter.init = function (i, n) {
    void 0 === i && (i = !1), void 0 === n && (n = !1), MiniAdpter._inited || (MiniAdpter.window = t).navigator.userAgent.indexOf("MiniGame") < 0 || (MiniAdpter._inited = !0, MiniAdpter.isZiYu = n, MiniAdpter.isPosMsgYu = i, MiniAdpter.EnvConfig = {}, MiniAdpter.isZiYu || (u.setNativeFileDir("/layaairGame"), u.existDir(u.fileNativeDir, c.create(MiniAdpter, MiniAdpter.onMkdirCallBack))), MiniAdpter.window.focus = function () {}, a.getUrlPath = function () {}, MiniAdpter.window.logtime = function (i) {}, MiniAdpter.window.alertTimeLog = function (i) {}, MiniAdpter.window.resetShareInfo = function () {}, MiniAdpter.window.CanvasRenderingContext2D = function () {}, MiniAdpter.window.CanvasRenderingContext2D.prototype = MiniAdpter.window.wx.createCanvas().getContext("2d").__proto__, MiniAdpter.window.document.body.appendChild = function () {}, MiniAdpter.EnvConfig.pixelRatioInt = 0, p.getPixelRatio = MiniAdpter.pixelRatio, MiniAdpter._preCreateElement = r.createElement, r.createElement = MiniAdpter.createElement, p.createShaderCondition = MiniAdpter.createShaderCondition, m.parseXMLFromString = MiniAdpter.parseXMLFromString, e._createInputElement = F._createInputElement, MiniAdpter.EnvConfig.load = M.prototype.load, M.prototype.load = _.prototype.load, MiniAdpter.isZiYu && i && wx.onMessage(function (i) {
      i.isLoad && (u.ziyuFileData[i.url] = i.data);
    }));
  }, MiniAdpter.onMkdirCallBack = function (i, n) {
    i || (u.filesListObj = JSON.parse(n.data));
  }, MiniAdpter.pixelRatio = function () {
    if (!MiniAdpter.EnvConfig.pixelRatioInt) try {
      var i = wx.getSystemInfoSync();return MiniAdpter.EnvConfig.pixelRatioInt = i.pixelRatio, i.pixelRatio;
    } catch (i) {}return MiniAdpter.EnvConfig.pixelRatioInt;
  }, MiniAdpter.createElement = function (i) {
    return "canvas" != i ? "textarea" == i || "input" == i ? MiniAdpter.onCreateInput(i) : "div" == i ? ((e = MiniAdpter._preCreateElement(i)).contains = function (i) {
      return null;
    }, e.removeChild = function (i) {}, e) : MiniAdpter._preCreateElement(i) : (1 == MiniAdpter.idx ? MiniAdpter.isZiYu ? (n = sharedCanvas).style = {} : n = t.canvas : n = t.wx.createCanvas(), MiniAdpter.idx++, n);var n;var e;
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
      n = new t.Parser.DOMParser().parseFromString(i, "text/xml");
    } catch (i) {
      throw "\u9700\u8981\u5f15\u5165xml\u89e3\u6790\u5e93\u6587\u4ef6";
    }return n;
  }, MiniAdpter.idx = 1;var d = MiniAdpter;function MiniAdpter() {}n(MiniImage, "laya.wx.mini.MiniImage"), MiniImage.prototype._loadImage = function (i) {
    var n = !1;-1 == i.indexOf("layaNativeDir/") && (n = !0, i = v.formatURL(i)), u.getFileInfo(i) ? MiniImage.onCreateImage(i, this, !n) : -1 != i.indexOf("http://") || -1 != i.indexOf("https://") ? u.downImg(i, new c(MiniImage, MiniImage.onDownImgCallBack, [i, this]), i) : MiniImage.onCreateImage(i, this, !0);
  }, MiniImage.onDownImgCallBack = function (i, n, e) {
    e ? n.onError(null) : MiniImage.onCreateImage(i, n);
  }, MiniImage.onCreateImage = function (n, e, i) {
    var t;function clear() {
      t.onload = null, t.onerror = null, delete e.imgCache[n];
    }i = (i = void 0 === i ? !1 : i) ? n : (i = u.getFileInfo(n).md5, u.getFileNativePath(i)), null == e.imgCache && (e.imgCache = {});function xa() {
      clear(), e.onLoaded(t);
    }function ya() {
      clear(), e.event("error", "Load image failed");
    }"nativeimage" == e._type ? ((t = new r.window.Image()).crossOrigin = "", t.onload = xa, t.onerror = ya, t.src = i, e.imgCache[n] = t) : new s.create(i, { onload: xa, onerror: ya, onCreate: function (i) {
        t = i, e.imgCache[n] = i;
      } });
  };function MiniImage() {}n(MiniInput, "laya.wx.mini.MiniInput"), MiniInput._createInputElement = function () {
    e._initInput(e.area = r.createElement("textarea")), e._initInput(e.input = r.createElement("input")), e.inputContainer = r.createElement("div"), e.inputContainer.style.position = "absolute", e.inputContainer.style.zIndex = 1e5, r.container.appendChild(e.inputContainer), e.inputContainer.setPos = function (i, n) {
      e.inputContainer.style.left = i + "px", e.inputContainer.style.top = n + "px";
    }, a.stage.on("resize", null, MiniInput._onStageResize), wx.onWindowResize && wx.onWindowResize(function (i) {
      t.dispatchEvent && t.dispatchEvent("resize");
    }), h._soundClass = y, h._musicClass = y;
  }, MiniInput._onStageResize = function () {
    a.stage._canvasTransform.identity().scale(r.width / f.canvas.width / p.getPixelRatio(), r.height / f.canvas.height / p.getPixelRatio());
  }, MiniInput.wxinputFocus = function (i) {
    var n = e.inputElement.target;n && !n.editable || (d.window.wx.offKeyboardConfirm(), d.window.wx.offKeyboardInput(), d.window.wx.showKeyboard({ defaultValue: n.text, maxLength: n.maxChars, multiple: n.multiline, confirmHold: !0, confirmType: "done", success: function (i) {}, fail: function (i) {} }), d.window.wx.onKeyboardConfirm(function (i) {
      i = i ? i.value : "";n.text = i, n.event("input"), laya.wx.mini.MiniInput.inputEnter();
    }), d.window.wx.onKeyboardInput(function (i) {
      i = i ? i.value : "";n.multiline || -1 == i.indexOf("\n") ? (n.text = i, n.event("input")) : laya.wx.mini.MiniInput.inputEnter();
    }));
  }, MiniInput.inputEnter = function () {
    e.inputElement.target.focus = !1;
  }, MiniInput.wxinputblur = function () {
    MiniInput.hideKeyboard();
  }, MiniInput.hideKeyboard = function () {
    d.window.wx.offKeyboardConfirm(), d.window.wx.offKeyboardInput(), d.window.wx.hideKeyboard({ success: function (i) {
        console.log("\u9690\u85cf\u952e\u76d8");
      }, fail: function (i) {
        console.log("\u9690\u85cf\u952e\u76d8\u51fa\u9519:" + (i ? i.errMsg : ""));
      } });
  };var F = MiniInput;function MiniInput() {}n(MiniLoader, "laya.wx.mini.MiniLoader"), (w = MiniLoader.prototype).load = function (i, n, e, t, o) {
    void 0 === e && (e = !0), void 0 === o && (o = !1);var a = this;0 === (a._url = i).indexOf("data:image") ? a._type = n = "image" : a._type = n = n || a.getTypeFromUrl(i), a._cache = e, a._data = null;var r = "ascii";-1 != i.indexOf(".fnt") ? r = "utf8" : "arraybuffer" == n && (r = "");var l = m.getFileExtension(i);if (-1 != MiniLoader._fileTypeArr.indexOf(l)) d.EnvConfig.load.call(this, i, n, e, t, o);else if (u.getFileInfo(i)) d.EnvConfig.load.call(this, i, n, e, t, o);else {
      if (-1 != i.indexOf("layaNativeDir/")) return d.isZiYu ? (l = u.ziyuFileData[i], void a.onLoaded(l)) : (cosnole.log("read read"), void u.read(i, r, new c(MiniLoader, MiniLoader.onReadNativeCallBack, [r, i, n, e, t, o, a])));l = "" == v.rootPath ? i : i.split(v.rootPath)[0], -1 != i.indexOf("http://") || -1 != i.indexOf("https://") ? d.EnvConfig.load.call(a, i, n, e, t, o) : u.readFile(l, r, new c(MiniLoader, MiniLoader.onReadNativeCallBack, [r, i, n, e, t, o, a]), i);
    }
  }, w.resMgrLoad = function (i, t, n, e, o, a, r) {
    void 0 === n && (n = 0), void 0 === e && (e = !1), void 0 === o && (o = !1), void 0 === a && (a = 0), void 0 === r && (r = 3), -1 != i.indexOf("mpack") && console.log("=============resMgrLoad url:", i), d.EnvConfig.resMgrLoad(i, (i, n, e) => {
      MiniLoader.prototype.resMgrLoadCallBack(i, n, e, t);
    }, n, e, o, a, r);
  }, w.resMgrLoadCallBack = function (i, n, e, t) {
    console.log("buff:::", i, e, u.fileNativeDir + "///" + u.fileListName), t(i, n, e);
  }, w.clearRes = function (i, n) {
    this.clearRes(i, n = void 0 === n ? !1 : n);n = u.getFileInfo(i);!n || -1 == i.indexOf("http://") && -1 == i.indexOf("https://") || (i = n.md5, n = u.getFileNativePath(i), u.remove(n));
  }, MiniLoader.onReadNativeCallBack = function (i, n, e, t, o, a, r, l, u) {
    void 0 === t && (t = !0), void 0 === a && (a = !1), (l = void 0 === l ? 0 : l) ? 1 == l && d.EnvConfig.load.call(r, n, e, t, o, a) : (l = "json" == e || "atlas" == e ? d.getJson(u.data) : "xml" == e ? m.parseXMLFromString(u.data) : u.data, r.onLoaded(l), !d.isZiYu && d.isPosMsgYu && "arraybuffer" != e && wx.postMessage({ url: n, data: l, isLoad: !0 }));
  }, i(MiniLoader, ["_fileTypeArr", function () {
    return this._fileTypeArr = ["png", "jpg", "bmp", "jpeg", "gif"];
  }]);var _ = MiniLoader;function MiniLoader() {}n(MiniFileMgr, "laya.wx.mini.MiniFileMgr", l), MiniFileMgr.isLoadFile = function (i) {
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
    var t = i.split("/");var o = t[t.length - 1];n.split("?")[0];var a = MiniFileMgr.getFileInfo(n);t = MiniFileMgr.getFileNativePath(o);MiniFileMgr.fs.copyFile({ srcPath: i, destPath: t, success: function (i) {
        a ? a.readyUrl != n && MiniFileMgr.remove(o, n, e) : (MiniFileMgr.onSaveFile(n, o), null != e && e.runWith([0]));
      }, fail: function (i) {
        null != e && e.runWith([1, i]);
      } });
  }, MiniFileMgr.getFileNativePath = function (i) {
    return laya.wx.mini.MiniFileMgr.fileNativeDir + "/" + i;
  }, MiniFileMgr.remove = function (n, e, t) {
    void 0 === e && (e = "");var i = MiniFileMgr.getFileInfo(e);var o = MiniFileMgr.getFileNativePath(i.md5);a.loader.clearRes(i.readyUrl), MiniFileMgr.fs.unlink({ filePath: o, success: function (i) {
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
  }]);var u = MiniFileMgr;function MiniFileMgr() {
    MiniFileMgr.__super.call(this);
  }n(MiniSound, "laya.wx.mini.MiniSound", l), (w = MiniSound.prototype).load = function (i) {
    var n = this;var e;function _clearSound() {
      if (null != MiniSound._null) n._sound.onCanplay(MiniSound._null), n._sound.onError(MiniSound._null);else try {
        n._sound.onCanplay(null), n._sound.onError(null), MiniSound._null = null;
      } catch (i) {
        console.warn("[wxmini] _clearSound:" + i), n._sound.onCanplay(onNull), n._sound.onError(onNull), MiniSound._null = onNull;
      }
    }function onNull() {}i = v.formatURL(i), this.url = i, MiniSound._audioCache[i] ? this.event("complete") : (this._sound.onCanplay(function () {
      _clearSound(), e.loaded = !0, e.event("complete"), MiniSound._audioCache[e.url] = e;
    }), this._sound.onError(function (i) {
      console.error("errCode=" + i.errCode + "  errMsg=" + i.errMsg), _clearSound(), e.event("error");
    }), this._sound.src = i, e = this);
  }, w.play = function (i, n) {
    void 0 === i && (i = 0), void 0 === n && (n = 0), (e = this.url == h._tMusic ? (MiniSound._musicAudio || (MiniSound._musicAudio = MiniSound._createSound()), MiniSound._musicAudio) : MiniSound._createSound()).src = this.url;var e = new x(e);return e.url = this.url, e.loops = n, e.startTime = i, e.play(), h.addChannel(e), e;
  }, w.dispose = function () {
    var i = MiniSound._audioCache[this.url];i && (i.src = "", delete MiniSound._audioCache[this.url]);
  }, o(0, w, "duration", function () {
    return this._sound.duration;
  }), MiniSound._createSound = function () {
    return MiniSound._id++, d.window.wx.createInnerAudioContext();
  }, MiniSound._musicAudio = null, MiniSound._id = 0, MiniSound._audioCache = {}, MiniSound._null = void 0;var y = MiniSound;function MiniSound() {
    this._sound = null, this.url = null, this.loaded = !1, MiniSound.__super.call(this), this._sound = MiniSound._createSound();
  }var w;n(MiniSoundChannel, "laya.wx.mini.MiniSoundChannel", g), (i = MiniSoundChannel.prototype).__onEnd = function () {
    if (1 == this.loops) return this.completeHandler && (a.timer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), void this.event("complete");0 < this.loops && this.loops--, this.startTime = 0, this.play();
  }, i.__onNull = function () {}, i.play = function () {
    this.isStopped = !1, h.addChannel(this), this._audio && this._audio.play();
  }, i.stop = function () {
    if (this.isStopped = !0, h.removeChannel(this), this.completeHandler = null, this._audio) {
      if (this._audio.stop(), null != MiniSoundChannel._null) this._audio.onEnded(MiniSoundChannel._null);else try {
        this._audio.onEnded(null), MiniSoundChannel._null = null;
      } catch (i) {
        console.warn("[wxmini] stop:" + i), this._audio.onEnded(m.bind(this.__onNull, this)), MiniSoundChannel._null = m.bind(this.__onNull, this);
      }this._audio = null;
    }
  }, i.pause = function () {
    this.isStopped = !0, this._audio.pause();
  }, i.resume = function () {
    this._audio && (this.isStopped = !1, h.addChannel(this), this._audio.play());
  }, o(0, i, "position", function () {
    return this._audio ? this._audio.currentTime : 0;
  }), o(0, i, "duration", function () {
    return this._audio ? this._audio.duration : 0;
  }), o(0, i, "volume", function () {
    return 1;
  }, function (i) {}), MiniSoundChannel._null = void 0;var x = MiniSoundChannel;function MiniSoundChannel(i) {
    this._audio = null, this._onEnd = null, MiniSoundChannel.__super.call(this), this._audio = i, this._onEnd = m.bind(this.__onEnd, this), i.onEnded(this._onEnd);
  }
}(window, (document, Laya)), "function" == typeof define && define.amd && define("laya.core", ["require", "exports"], function (i, n) {
  "use strict";
  for (var e in Object.defineProperty(n, "__esModule", { value: !0 }), Laya) {
    var t = Laya[e];t && t.__isclass && (n[e] = t);
  }
});