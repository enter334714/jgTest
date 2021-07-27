!function (e, r) {
  r.un, r.uns;var n = r.static,
      t = r.class,
      o = r.getset;r.__newvec;var a = laya.utils.Browser,
      l = (laya.events.Event, laya.events.EventDispatcher);var u = laya.resource.HTMLImage,
      d = laya.utils.Handler,
      s = laya.display.Input,
      c = laya.net.Loader;laya.maths.Matrix;var i = laya.renders.Render,
      M = laya.utils.RunDriver;laya.media.Sound;var f = laya.media.SoundChannel,
      p = laya.media.SoundManager,
      g = (laya.display.Stage, laya.net.URL);var h = laya.utils.Utils;var v = (t(MiniAdpter, "laya.wx.mini.MiniAdpter"), MiniAdpter.getJson = function (i) {
    return JSON.parse(i);
  }, MiniAdpter.init = function (i, n) {
    void 0 === i && (i = !1), void 0 === n && (n = !1), MiniAdpter._inited || (MiniAdpter.window = e).navigator.userAgent.indexOf("MiniGame") < 0 || (MiniAdpter._inited = !0, MiniAdpter.isZiYu = n, MiniAdpter.isPosMsgYu = i, MiniAdpter.EnvConfig = {}, MiniAdpter.isZiYu || (_.setNativeFileDir("/layaairGame"), _.existDir(_.fileNativeDir, d.create(MiniAdpter, MiniAdpter.onMkdirCallBack))), MiniAdpter.window.focus = function () {}, r.getUrlPath = function () {}, MiniAdpter.window.logtime = function (i) {}, MiniAdpter.window.alertTimeLog = function (i) {}, MiniAdpter.window.resetShareInfo = function () {}, MiniAdpter.window.CanvasRenderingContext2D = function () {}, MiniAdpter.window.CanvasRenderingContext2D.prototype = MiniAdpter.window.wx.createCanvas().getContext("2d").__proto__, MiniAdpter.window.document.body.appendChild = function () {}, MiniAdpter.EnvConfig.pixelRatioInt = 0, M.getPixelRatio = MiniAdpter.pixelRatio, MiniAdpter._preCreateElement = a.createElement, a.createElement = MiniAdpter.createElement, M.createShaderCondition = MiniAdpter.createShaderCondition, h.parseXMLFromString = MiniAdpter.parseXMLFromString, s._createInputElement = m._createInputElement, MiniAdpter.EnvConfig.load = c.prototype.load, c.prototype.load = F.prototype.load, MiniAdpter.isZiYu && i && wx.onMessage(function (i) {
      i.isLoad && (_.ziyuFileData[i.url] = i.data);
    }));
  }, MiniAdpter.onMkdirCallBack = function (i, n) {
    i || (_.filesListObj = JSON.parse(n.data));
  }, MiniAdpter.pixelRatio = function () {
    if (!MiniAdpter.EnvConfig.pixelRatioInt) try {
      var i = wx.getSystemInfoSync();return MiniAdpter.EnvConfig.pixelRatioInt = i.pixelRatio, i.pixelRatio;
    } catch (i) {}return MiniAdpter.EnvConfig.pixelRatioInt;
  }, MiniAdpter.createElement = function (i) {
    var n;if ("canvas" == i) return 1 == MiniAdpter.idx ? MiniAdpter.isZiYu ? (n = sharedCanvas).style = {} : n = e.canvas : n = e.wx.createCanvas(), MiniAdpter.idx++, n;if ("textarea" == i || "input" == i) return MiniAdpter.onCreateInput(i);if ("div" != i) return MiniAdpter._preCreateElement(i);i = MiniAdpter._preCreateElement(i);return i.contains = function (i) {
      return null;
    }, i.removeChild = function (i) {}, i;
  }, MiniAdpter.onCreateInput = function (i) {
    i = MiniAdpter._preCreateElement(i);return i.focus = m.wxinputFocus, i.blur = m.wxinputblur, i.style = {}, i.value = 0, i.parentElement = {}, i.placeholder = {}, i.type = {}, i.setColor = function (i) {}, i.setType = function (i) {}, i.setFontFace = function (i) {}, i.addEventListener = function (i) {}, i.contains = function (i) {
      return null;
    }, i.removeChild = function (i) {}, i;
  }, MiniAdpter.createShaderCondition = function (i) {
    var n = this;return function () {
      return n[i.replace("this.", "")];
    };
  }, MiniAdpter.EnvConfig = null, MiniAdpter.window = null, MiniAdpter._preCreateElement = null, MiniAdpter._inited = !1, MiniAdpter.wxRequest = null, MiniAdpter.systemInfo = null, MiniAdpter.version = "0.0.1", MiniAdpter.isZiYu = !1, MiniAdpter.isPosMsgYu = !1, MiniAdpter.parseXMLFromString = function (i) {
    var n;i = i.replace(/>\s+</g, "><");try {
      n = new e.Parser.DOMParser().parseFromString(i, "text/xml");
    } catch (i) {
      throw "\u9700\u8981\u5f15\u5165xml\u89e3\u6790\u5e93\u6587\u4ef6";
    }return n;
  }, MiniAdpter.idx = 1, MiniAdpter);function MiniAdpter() {}t(MiniImage, "laya.wx.mini.MiniImage"), MiniImage.prototype._loadImage = function (i) {
    var n = !1;-1 == i.indexOf("layaNativeDir/") && (n = !0, i = g.formatURL(i)), _.getFileInfo(i) ? MiniImage.onCreateImage(i, this, !n) : -1 != i.indexOf("http://") || -1 != i.indexOf("https://") ? _.downImg(i, new d(MiniImage, MiniImage.onDownImgCallBack, [i, this]), i) : MiniImage.onCreateImage(i, this, !0);
  }, MiniImage.onDownImgCallBack = function (i, n, e) {
    e ? n.onError(null) : MiniImage.onCreateImage(i, n);
  }, MiniImage.onCreateImage = function (n, e, i) {
    var t;var o;function clear() {
      o.onload = null, o.onerror = null, delete e.imgCache[n];
    }t = (i = void 0 === i ? !1 : i) ? n : (r = _.getFileInfo(n).md5, _.getFileNativePath(r)), null == e.imgCache && (e.imgCache = {});i = function () {
      clear(), e.onLoaded(o);
    };var r = function () {
      clear(), e.event("error", "Load image failed");
    };"nativeimage" == e._type ? ((o = new a.window.Image()).crossOrigin = "", o.onload = i, o.onerror = r, o.src = t, e.imgCache[n] = o) : new u.create(t, { onload: i, onerror: r, onCreate: function (i) {
        o = i, e.imgCache[n] = i;
      } });
  };function MiniImage() {}var m = (t(MiniInput, "laya.wx.mini.MiniInput"), MiniInput._createInputElement = function () {
    s._initInput(s.area = a.createElement("textarea")), s._initInput(s.input = a.createElement("input")), s.inputContainer = a.createElement("div"), s.inputContainer.style.position = "absolute", s.inputContainer.style.zIndex = 1e5, a.container.appendChild(s.inputContainer), s.inputContainer.setPos = function (i, n) {
      s.inputContainer.style.left = i + "px", s.inputContainer.style.top = n + "px";
    }, r.stage.on("resize", null, MiniInput._onStageResize), wx.onWindowResize && wx.onWindowResize(function (i) {
      e.dispatchEvent && e.dispatchEvent("resize");
    }), p._soundClass = y, p._musicClass = y;
  }, MiniInput._onStageResize = function () {
    r.stage._canvasTransform.identity().scale(a.width / i.canvas.width / M.getPixelRatio(), a.height / i.canvas.height / M.getPixelRatio());
  }, MiniInput.wxinputFocus = function (i) {
    var n = s.inputElement.target;n && !n.editable || (v.window.wx.offKeyboardConfirm(), v.window.wx.offKeyboardInput(), v.window.wx.showKeyboard({ defaultValue: n.text, maxLength: n.maxChars, multiple: n.multiline, confirmHold: !0, confirmType: "done", success: function (i) {}, fail: function (i) {} }), v.window.wx.onKeyboardConfirm(function (i) {
      i = i ? i.value : "";n.text = i, n.event("input"), laya.wx.mini.MiniInput.inputEnter();
    }), v.window.wx.onKeyboardInput(function (i) {
      i = i ? i.value : "";n.multiline || -1 == i.indexOf("\n") ? (n.text = i, n.event("input")) : laya.wx.mini.MiniInput.inputEnter();
    }));
  }, MiniInput.inputEnter = function () {
    s.inputElement.target.focus = !1;
  }, MiniInput.wxinputblur = function () {
    MiniInput.hideKeyboard();
  }, MiniInput.hideKeyboard = function () {
    v.window.wx.offKeyboardConfirm(), v.window.wx.offKeyboardInput(), v.window.wx.hideKeyboard({ success: function (i) {
        console.log("\u9690\u85cf\u952e\u76d8");
      }, fail: function (i) {
        console.log("\u9690\u85cf\u952e\u76d8\u51fa\u9519:" + (i ? i.errMsg : ""));
      } });
  }, MiniInput);function MiniInput() {}var F = function () {
    function MiniLoader() {}t(MiniLoader, "laya.wx.mini.MiniLoader");var i = MiniLoader.prototype;return i.load = function (i, n, e, t, o) {
      void 0 === e && (e = !0), void 0 === o && (o = !1);var r = this;0 === (r._url = i).indexOf("data:image") ? r._type = n = "image" : r._type = n = n || r.getTypeFromUrl(i), r._cache = e, r._data = null;var a = "ascii";-1 != i.indexOf(".fnt") ? a = "utf8" : "arraybuffer" == n && (a = "");var l = h.getFileExtension(i);if (-1 != MiniLoader._fileTypeArr.indexOf(l)) v.EnvConfig.load.call(this, i, n, e, t, o);else if (_.getFileInfo(i)) v.EnvConfig.load.call(this, i, n, e, t, o);else {
        if (-1 != i.indexOf("layaNativeDir/")) {
          if (v.isZiYu) {
            var u = _.ziyuFileData[i];return void r.onLoaded(u);
          }return cosnole.log("read read"), void _.read(i, a, new d(MiniLoader, MiniLoader.onReadNativeCallBack, [a, i, n, e, t, o, r]));
        }u = "" == g.rootPath ? i : i.split(g.rootPath)[0], -1 != i.indexOf("http://") || -1 != i.indexOf("https://") ? v.EnvConfig.load.call(r, i, n, e, t, o) : _.readFile(u, a, new d(MiniLoader, MiniLoader.onReadNativeCallBack, [a, i, n, e, t, o, r]), i);
      }
    }, i.resMgrLoad = function (i, t, n, e, o, r, a) {
      void 0 === n && (n = 0), void 0 === e && (e = !1), void 0 === o && (o = !1), void 0 === r && (r = 0), void 0 === a && (a = 3), -1 != i.indexOf("mpack") && console.log("=============resMgrLoad url:", i), v.EnvConfig.resMgrLoad(i, (i, n, e) => {
        MiniLoader.prototype.resMgrLoadCallBack(i, n, e, t);
      }, n, e, o, r, a);
    }, i.resMgrLoadCallBack = function (i, n, e, t) {
      console.log("buff:::", i, e, _.fileNativeDir + "///" + _.fileListName), t(i, n, e);
    }, i.clearRes = function (i, n) {
      this.clearRes(i, n = void 0 === n ? !1 : n);n = _.getFileInfo(i);!n || -1 == i.indexOf("http://") && -1 == i.indexOf("https://") || (n = n.md5, n = _.getFileNativePath(n), _.remove(n));
    }, MiniLoader.onReadNativeCallBack = function (i, n, e, t, o, r, a, l, u) {
      void 0 === t && (t = !0), void 0 === r && (r = !1), (l = void 0 === l ? 0 : l) ? 1 == l && v.EnvConfig.load.call(a, n, e, t, o, r) : (u = "json" == e || "atlas" == e ? v.getJson(u.data) : "xml" == e ? h.parseXMLFromString(u.data) : u.data, a.onLoaded(u), !v.isZiYu && v.isPosMsgYu && "arraybuffer" != e && wx.postMessage({ url: n, data: u, isLoad: !0 }));
    }, n(MiniLoader, ["_fileTypeArr", function () {
      return this._fileTypeArr = ["png", "jpg", "bmp", "jpeg", "gif"];
    }]), MiniLoader;
  }();var _ = (t(MiniFileMgr, "laya.wx.mini.MiniFileMgr", l), MiniFileMgr.isLoadFile = function (i) {
    return -1 != MiniFileMgr._fileTypeArr.indexOf(i);
  }, MiniFileMgr.getFileInfo = function (i) {
    i = i.split("?")[0];i = MiniFileMgr.filesListObj[i];return null == i ? null : i;
  }, MiniFileMgr.onFileUpdate = function (i, n) {
    var e = i.split("/");i = e[e.length - 1];e = MiniFileMgr.getFileInfo(n);null == e ? MiniFileMgr.onSaveFile(n, i) : e.readyUrl != n && MiniFileMgr.remove(i, n);
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
    var t = i.split("/");var o = t[t.length - 1];n.split("?")[0];var r = MiniFileMgr.getFileInfo(n);t = MiniFileMgr.getFileNativePath(o);MiniFileMgr.fs.copyFile({ srcPath: i, destPath: t, success: function (i) {
        r ? r.readyUrl != n && MiniFileMgr.remove(o, n, e) : (MiniFileMgr.onSaveFile(n, o), null != e && e.runWith([0]));
      }, fail: function (i) {
        null != e && e.runWith([1, i]);
      } });
  }, MiniFileMgr.getFileNativePath = function (i) {
    return laya.wx.mini.MiniFileMgr.fileNativeDir + "/" + i;
  }, MiniFileMgr.remove = function (n, e, t) {
    void 0 === e && (e = "");var i = MiniFileMgr.getFileInfo(e);var o = MiniFileMgr.getFileNativePath(i.md5);r.loader.clearRes(i.readyUrl), MiniFileMgr.fs.unlink({ filePath: o, success: function (i) {
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
    void 0 === n && (n = "ascill"), void 0 === t && (t = "");i = MiniFileMgr.getFileNativePath(i);var o;try {
      o = MiniFileMgr.fs.readFileSync(i), null != e && e.runWith([0, { data: o }]);
    } catch (i) {
      null != e && e.runWith([1]);
    }
  }, MiniFileMgr.readCache = function () {}, MiniFileMgr.writeCache = function (i) {
    var n = readyUrl.split("?")[0];MiniFileMgr.filesListObj[n] = { md5: md5Name, readyUrl: readyUrl }, MiniFileMgr.fs.writeFile({ filePath: MiniFileMgr.fileNativeDir + "/" + MiniFileMgr.fileListName, encoding: "utf8", data: JSON.stringify(MiniFileMgr.filesListObj), success: function (i) {}, fail: function (i) {} });
  }, MiniFileMgr.setNativeFileDir = function (i) {
    MiniFileMgr.fileNativeDir = wx.env.USER_DATA_PATH + i;
  }, MiniFileMgr.filesListObj = {}, MiniFileMgr.fileNativeDir = null, MiniFileMgr.fileListName = "layaairfiles.txt", MiniFileMgr.ziyuFileData = {}, n(MiniFileMgr, ["_fileTypeArr", function () {
    return this._fileTypeArr = ["json", "ani", "xml", "sk", "txt", "atlas", "swf", "part", "fnt", "proto", "lh", "lav", "lani", "lmat", "lm", "ltc"];
  }, "fs", function () {
    return this.fs = wx.getFileSystemManager();
  }, "wxdown", function () {
    return this.wxdown = wx.downloadFile;
  }]), MiniFileMgr);function MiniFileMgr() {
    MiniFileMgr.__super.call(this);
  }var y = function () {
    function MiniSound() {
      this._sound = null, this.url = null, this.loaded = !1, MiniSound.__super.call(this), this._sound = MiniSound._createSound();
    }t(MiniSound, "laya.wx.mini.MiniSound", l);var i = MiniSound.prototype;return i.load = function (i) {
      var n = this;var e;function _clearSound() {
        if (null != MiniSound._null) n._sound.onCanplay(MiniSound._null), n._sound.onError(MiniSound._null);else try {
          n._sound.onCanplay(null), n._sound.onError(null), MiniSound._null = null;
        } catch (i) {
          console.warn("[wxmini] _clearSound:" + i), n._sound.onCanplay(onNull), n._sound.onError(onNull), MiniSound._null = onNull;
        }
      }function onNull() {}i = g.formatURL(i), this.url = i, MiniSound._audioCache[i] ? this.event("complete") : (this._sound.onCanplay(function () {
        _clearSound(), e.loaded = !0, e.event("complete"), MiniSound._audioCache[e.url] = e;
      }), this._sound.onError(function (i) {
        console.error("errCode=" + i.errCode + "  errMsg=" + i.errMsg), _clearSound(), e.event("error");
      }), this._sound.src = i, e = this);
    }, i.play = function (i, n) {
      void 0 === i && (i = 0), void 0 === n && (n = 0), (e = this.url == p._tMusic ? (MiniSound._musicAudio || (MiniSound._musicAudio = MiniSound._createSound()), MiniSound._musicAudio) : MiniSound._createSound()).src = this.url;var e = new w(e);return e.url = this.url, e.loops = n, e.startTime = i, e.play(), p.addChannel(e), e;
    }, i.dispose = function () {
      var i = MiniSound._audioCache[this.url];i && (i.src = "", delete MiniSound._audioCache[this.url]);
    }, o(0, i, "duration", function () {
      return this._sound.duration;
    }), MiniSound._createSound = function () {
      return MiniSound._id++, v.window.wx.createInnerAudioContext();
    }, MiniSound._musicAudio = null, MiniSound._id = 0, MiniSound._audioCache = {}, MiniSound._null = void 0, MiniSound;
  }();var w = function () {
    function MiniSoundChannel(i) {
      this._audio = null, this._onEnd = null, MiniSoundChannel.__super.call(this), this._audio = i, this._onEnd = h.bind(this.__onEnd, this), i.onEnded(this._onEnd);
    }t(MiniSoundChannel, "laya.wx.mini.MiniSoundChannel", f);var i = MiniSoundChannel.prototype;return i.__onEnd = function () {
      if (1 == this.loops) return this.completeHandler && (r.timer.once(10, this, this.__runComplete, [this.completeHandler], !1), this.completeHandler = null), this.stop(), void this.event("complete");0 < this.loops && this.loops--, this.startTime = 0, this.play();
    }, i.__onNull = function () {}, i.play = function () {
      this.isStopped = !1, p.addChannel(this), this._audio && this._audio.play();
    }, i.stop = function () {
      if (this.isStopped = !0, p.removeChannel(this), this.completeHandler = null, this._audio) {
        if (this._audio.stop(), null != MiniSoundChannel._null) this._audio.onEnded(MiniSoundChannel._null);else try {
          this._audio.onEnded(null), MiniSoundChannel._null = null;
        } catch (i) {
          console.warn("[wxmini] stop:" + i), this._audio.onEnded(h.bind(this.__onNull, this)), MiniSoundChannel._null = h.bind(this.__onNull, this);
        }this._audio = null;
      }
    }, i.pause = function () {
      this.isStopped = !0, this._audio.pause();
    }, i.resume = function () {
      this._audio && (this.isStopped = !1, p.addChannel(this), this._audio.play());
    }, o(0, i, "position", function () {
      return this._audio ? this._audio.currentTime : 0;
    }), o(0, i, "duration", function () {
      return this._audio ? this._audio.duration : 0;
    }), o(0, i, "volume", function () {
      return 1;
    }, function (i) {}), MiniSoundChannel._null = void 0, MiniSoundChannel;
  }();
}(window, (document, Laya)), "function" == typeof define && define.amd && define("laya.core", ["require", "exports"], function (i, n) {
  "use strict";
  for (var e in Object.defineProperty(n, "__esModule", { value: !0 }), Laya) {
    var t = Laya[e];t && t.__isclass && (n[e] = t);
  }
});