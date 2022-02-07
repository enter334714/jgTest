var H = wx.$F;
var H = wx.$F;var __reflect = this && this.__reflect || function (e, t, r) {
  e.__class__ = t, r ? r.push(t) : r = [t], e.__types__ = e.__types__ ? r.concat(e.__types__) : r;
};var __extends = this && this.__extends || function (e, t) {
  function r() {
    this.constructor = e;
  }for (var a in t) t.hasOwnProperty(a) && (e[a] = t[a]);r.prototype = t.prototype, e.prototype = new r();
};egret = egret || {}, function (n) {
  function WebGeolocation(e) {
    var a = r.call(this) || this;return a.onUpdate = function (e) {
      var t = new n.GeolocationEvent(n.Event.CHANGE);e = e.coords;t.altitude = e.altitude, t.heading = e.heading, t.accuracy = e.accuracy, t.latitude = e.latitude, t.longitude = e.longitude, t.speed = e.speed, t.altitudeAccuracy = e.altitudeAccuracy, a.dispatchEvent(t);
    }, a.onError = function (e) {
      var t = n.GeolocationEvent.UNAVAILABLE;e.code == e.PERMISSION_DENIED && (t = n.GeolocationEvent.PERMISSION_DENIED);var r = new n.GeolocationEvent(n.IOErrorEvent.IO_ERROR);r.errorType = t, r.errorMessage = e.message, a.dispatchEvent(r);
    }, a.geolocation = navigator.geolocation, a;
  }var e, t, r;e = n.wxgame || (n.wxgame = {}), r = n.EventDispatcher, __extends(WebGeolocation, r), WebGeolocation.prototype.start = function () {
    var e = this.geolocation;e ? this.watchId = e.watchPosition(this.onUpdate, this.onError) : this.onError({ code: 2, message: n.sys.tr(3004), PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2 });
  }, WebGeolocation.prototype.stop = function () {
    this.geolocation.clearWatch(this.watchId);
  }, t = WebGeolocation, e.WebGeolocation = t, __reflect(t.prototype, "egret.wxgame.WebGeolocation", ["egret.Geolocation"]);
}(egret = egret || {}), function (i) {
  function WebMotion() {
    var n = null !== r && r.apply(this, arguments) || this;return n.onChange = function (e) {
      var t = new i.MotionEvent(i.Event.CHANGE);var r = { x: e.acceleration.x, y: e.acceleration.y, z: e.acceleration.z };var a = { x: e.accelerationIncludingGravity.x, y: e.accelerationIncludingGravity.y, z: e.accelerationIncludingGravity.z };e = { alpha: e.rotationRate.alpha, beta: e.rotationRate.beta, gamma: e.rotationRate.gamma };t.acceleration = r, t.accelerationIncludingGravity = a, t.rotationRate = e, n.dispatchEvent(t);
    }, n;
  }var e, t, r;e = i.wxgame || (i.wxgame = {}), r = i.EventDispatcher, __extends(WebMotion, r), WebMotion.prototype.start = function () {
    window.addEventListener("devicemotion", this.onChange);
  }, WebMotion.prototype.stop = function () {
    window.removeEventListener("devicemotion", this.onChange);
  }, t = WebMotion, e.WebMotion = t, __reflect(t.prototype, "egret.wxgame.WebMotion", ["egret.Motion"]);
}(egret = egret || {}), function (t) {
  !function (e) {
    function M(e, t) {
      this.nodeType = e, this.parent = t;
    }e.XMLNode = M, __reflect(M.prototype, "egret.wxgame.XMLNode");var p = (__extends(XML, i = M), XML);function XML(e, t, r, a, n) {
      t = i.call(this, 1, t) || this;return t.attributes = {}, t.children = [], t.localName = e, t.prefix = r, t.namespace = a, t.name = n, t;
    }var i;e.XML = p, __reflect(p.prototype, "egret.wxgame.XML");var g = (__extends(XMLText, r = M), XMLText);function XMLText(e, t) {
      t = r.call(this, 3, t) || this;return t.text = e, t;
    }var r;var o;e.XMLText = g, __reflect(g.prototype, "egret.wxgame.XMLText"), t.XML = { parse: function (e) {
        o || (window.DOMParser ? o = new DOMParser() : console.error("\u6ca1\u6709 XML \u652f\u6301\u5e93\uff0c\u8bf7\u8bbf\u95ee http://developer.egret.com/cn/github/egret-docs/Engine2D/minigame/minigameFAQ/index.html#xml \u4e86\u89e3\u8be6\u60c5"));var t = o.parseFromString(e, "text/xml");var r = t.childNodes.length;for (var a = 0; a < r; a++) {
          var n = t.childNodes[a];if (1 == n.nodeType) return function parseNode(e, t) {
            if ("parsererror" == e.localName) throw new Error(e.textContent);var r = new p(e.localName, t, e.prefix, e.namespaceURI, e.nodeName);var a = e.attributes;var n = r.attributes;var i = a.length;for (var o = 0; o < i; o++) {
              var s = a[o];var c = s.name;0 != c.indexOf("xmlns:") && (n[c] = s.value, r["$" + c] = s.value);
            }var h = e.childNodes;i = h.length;var l = r.children;for (o = 0; o < i; o++) {
              var d = h[o];var u = d.nodeType;var f = null;1 == u ? f = parseNode(d, r) : 3 != u || (d = d.textContent.trim()) && (f = new g(d, r)), f && l.push(f);
            }return r;
          }(n, null);
        }return null;
      } };
  }(t.wxgame || (t.wxgame = {}));
}(egret = egret || {}), function (r) {
  function HtmlSoundChannel(e) {
    var t = a.call(this) || this;return t.$startTime = 0, t.audio = null, t.isStopped = !1, t.isEventdAdded = !1, t.onPlayEnd = function () {
      if (1 == t.$loops) return t.stop(), void t.dispatchEventWith(r.Event.SOUND_COMPLETE);0 < t.$loops && t.$loops--, t.audio.stop(), t.$play();
    }, t._volume = 1, t.audio = e, t;
  }var e, t, a;e = r.wxgame || (r.wxgame = {}), a = r.EventDispatcher, __extends(HtmlSoundChannel, a), HtmlSoundChannel.prototype.addEvent = function () {
    this.isEventdAdded || (this.isEventdAdded = !0, this.audio.onEnded(this.onPlayEnd));
  }, HtmlSoundChannel.prototype.removeEvent = function () {
    this.isEventdAdded && (this.isEventdAdded = !1, this.audio.offEnded(this.onPlayEnd));
  }, HtmlSoundChannel.prototype.$play = function () {
    var e;this.isStopped ? r.$warn(1036) : (this.addEvent(), (e = this.audio).volume = this._volume, e.seek(this.$startTime), e.play());
  }, HtmlSoundChannel.prototype.stop = function () {
    this.audio && (this.isStopped = !0, this.audio.stop(), this.removeEvent(), this.audio = null);
  }, Object.defineProperty(HtmlSoundChannel.prototype, "volume", { get: function () {
      return this._volume;
    }, set: function (e) {
      this.isStopped ? r.$warn(1036) : (this._volume = e, this.audio && (this.audio.volume = e));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(HtmlSoundChannel.prototype, "position", { get: function () {
      return this.audio ? this.audio.currentTime : 0;
    }, enumerable: !0, configurable: !0 }), t = HtmlSoundChannel, e.HtmlSoundChannel = t, __reflect(t.prototype, "egret.wxgame.HtmlSoundChannel", ["egret.SoundChannel", "egret.IEventDispatcher"]);
}(egret = egret || {}), function (i) {
  function WebVideo(e, t) {
    void 0 === t && (t = !0);var r = a.call(this) || this;return r.loaded = !1, r.closed = !1, r.heightSet = NaN, r.widthSet = NaN, r.waiting = !1, r.userPause = !1, r.userPlay = !1, r.isPlayed = !1, r.screenChanged = function (e) {
      var t = document.fullscreenEnabled || document.webkitIsFullScreen;t || (r.checkFullScreen(!1), i.Capabilities.isMobile || (r._fullscreen = t));
    }, r._fullscreen = !0, r.onVideoLoaded = function () {
      r.video.removeEventListener("canplay", r.onVideoLoaded);var e = r.video;r.loaded = !0, r.posterData && (r.posterData.width = r.getPlayWidth(), r.posterData.height = r.getPlayHeight()), e.width = e.videoWidth, e.height = e.videoHeight, window.setTimeout(function () {
        r.dispatchEventWith(i.Event.COMPLETE);
      }, 200);
    }, r.$renderNode = new i.sys.BitmapNode(), r.src = e, r.once(i.Event.ADDED_TO_STAGE, r.loadPoster, r), e && r.load(), r;
  }var r, e, a;r = i.wxgame || (i.wxgame = {}), a = i.DisplayObject, __extends(WebVideo, a), WebVideo.prototype.load = function (e, t) {
    var r = this;var a, n;void 0 === t && (t = !0), e = e || this.src, (this.src = e) || i.$error(3002), this.video && this.video.src == e || (!this.video || i.Capabilities.isMobile ? (a = document.createElement("video"), (this.video = a).controls = null) : a = this.video, a.src = e, a.setAttribute("autoplay", "autoplay"), a.setAttribute("webkit-playsinline", "true"), a.addEventListener("canplay", this.onVideoLoaded), a.addEventListener("error", function () {
      return r.onVideoError();
    }), a.addEventListener("ended", function () {
      return r.onVideoEnded();
    }), n = !1, a.addEventListener("canplay", function () {
      r.waiting = !1, n ? r.userPause ? r.pause() : r.userPlay && r.play() : (n = !0, a.pause());
    }), a.addEventListener("waiting", function () {
      r.waiting = !0;
    }), a.load(), this.videoPlay(), a.style.position = "absolute", a.style.top = "0px", a.style.zIndex = "-88888", a.style.left = "0px", a.height = 1, a.width = 1);
  }, WebVideo.prototype.play = function (t, r) {
    var a = this;if (void 0 === r && (r = !1), 0 == this.loaded) return this.load(this.src), void this.once(i.Event.COMPLETE, function (e) {
      return a.play(t, r);
    }, this);this.isPlayed = !0;var e = this.video;null != t && (e.currentTime = +t || 0), e.loop = !!r, i.Capabilities.isMobile ? e.style.zIndex = "-88888" : e.style.zIndex = "9999", e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.height = e.videoHeight, e.width = e.videoWidth, "Windows PC" != i.Capabilities.os && "Mac OS" != i.Capabilities.os && window.setTimeout(function () {
      e.width = 0;
    }, 1e3), this.checkFullScreen(this._fullscreen);
  }, WebVideo.prototype.videoPlay = function () {
    this.userPause = !1, this.waiting ? this.userPlay = !0 : (this.userPlay = !1, this.video.play());
  }, WebVideo.prototype.checkFullScreen = function (e) {
    var t = this.video;if (e) null == t.parentElement && (t.removeAttribute("webkit-playsinline"), document.body.appendChild(t)), i.stopTick(this.markDirty, this), this.goFullscreen();else if (null != t.parentElement && t.parentElement.removeChild(t), t.setAttribute("webkit-playsinline", "true"), this.setFullScreenMonitor(!1), i.startTick(this.markDirty, this), i.Capabilities.isMobile) return this.video.currentTime = 0, void this.onVideoEnded();this.videoPlay();
  }, WebVideo.prototype.goFullscreen = function () {
    var e = this.video;var t;return (e[t = r.getPrefixStyleName("requestFullscreen", e)] || e[t = r.getPrefixStyleName("requestFullScreen", e)]) && (e.removeAttribute("webkit-playsinline"), e[t](), this.setFullScreenMonitor(!0)), !0;
  }, WebVideo.prototype.setFullScreenMonitor = function (e) {
    var t = this.video;e ? (t.addEventListener("mozfullscreenchange", this.screenChanged), t.addEventListener("webkitfullscreenchange", this.screenChanged), t.addEventListener("mozfullscreenerror", this.screenError), t.addEventListener("webkitfullscreenerror", this.screenError)) : (t.removeEventListener("mozfullscreenchange", this.screenChanged), t.removeEventListener("webkitfullscreenchange", this.screenChanged), t.removeEventListener("mozfullscreenerror", this.screenError), t.removeEventListener("webkitfullscreenerror", this.screenError));
  }, WebVideo.prototype.screenError = function () {
    i.$error(3014);
  }, WebVideo.prototype.exitFullscreen = function () {
    document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.oCancelFullScreen ? document.oCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen();
  }, WebVideo.prototype.onVideoEnded = function () {
    this.pause(), this.isPlayed = !1, this.dispatchEventWith(i.Event.ENDED);
  }, WebVideo.prototype.onVideoError = function () {
    this.dispatchEventWith(i.IOErrorEvent.IO_ERROR);
  }, WebVideo.prototype.close = function () {
    var e = this;this.closed = !0, this.video.removeEventListener("canplay", this.onVideoLoaded), this.video.removeEventListener("error", function () {
      return e.onVideoError();
    }), this.video.removeEventListener("ended", function () {
      return e.onVideoEnded();
    }), this.pause(), 0 == this.loaded && this.video && (this.video.src = ""), this.video && this.video.parentElement && (this.video.parentElement.removeChild(this.video), this.video = null), this.loaded = !1;
  }, WebVideo.prototype.pause = function () {
    this.userPlay = !1, this.waiting ? this.userPause = !0 : (this.userPause = !1, i.stopTick(this.markDirty, this));
  }, Object.defineProperty(WebVideo.prototype, "volume", { get: function () {
      return this.video ? this.video.volume : 1;
    }, set: function (e) {
      this.video && (this.video.volume = e);
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(WebVideo.prototype, "position", { get: function () {
      return this.video ? this.video.currentTime : 0;
    }, set: function (e) {
      this.video && (this.video.currentTime = e);
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(WebVideo.prototype, "fullscreen", { get: function () {
      return this._fullscreen;
    }, set: function (e) {
      i.Capabilities.isMobile || (this._fullscreen = !!e, this.video && 0 == this.video.paused && this.checkFullScreen(this._fullscreen));
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(WebVideo.prototype, "bitmapData", { get: function () {
      return this.video && this.loaded ? (this._bitmapData || (this.video.width = this.video.videoWidth, this.video.height = this.video.videoHeight, this._bitmapData = new i.BitmapData(this.video), this._bitmapData.$deleteSource = !1), this._bitmapData) : null;
    }, enumerable: !0, configurable: !0 }), WebVideo.prototype.loadPoster = function () {
    var t = this;var e = this.poster;var r;e && ((r = new i.ImageLoader()).once(i.Event.COMPLETE, function (e) {
      r.data;t.posterData = r.data, t.posterData.width = t.getPlayWidth(), t.posterData.height = t.getPlayHeight();
    }, this), r.load(e));
  }, WebVideo.prototype.$measureContentBounds = function (e) {
    var t = this.bitmapData;var r = this.posterData;t || r ? e.setTo(0, 0, this.getPlayWidth(), this.getPlayHeight()) : e.setEmpty();
  }, WebVideo.prototype.getPlayWidth = function () {
    return isNaN(this.widthSet) ? this.bitmapData ? this.bitmapData.width : this.posterData ? this.posterData.width : NaN : this.widthSet;
  }, WebVideo.prototype.getPlayHeight = function () {
    return isNaN(this.heightSet) ? this.bitmapData ? this.bitmapData.height : this.posterData ? this.posterData.height : NaN : this.heightSet;
  }, WebVideo.prototype.$updateRenderNode = function () {
    var e = this.$renderNode;var t = this.bitmapData;var r = this.posterData;var a = this.getPlayWidth();var n = this.getPlayHeight();this.isPlayed && !i.Capabilities.isMobile || !r ? this.isPlayed && t && (e.image = t, e.imageWidth = t.width, e.imageHeight = t.height, i.WebGLUtils.deleteWebGLTexture(t.webGLTexture), t.webGLTexture = null, e.drawImage(0, 0, t.width, t.height, 0, 0, a, n)) : (e.image = r, e.imageWidth = a, e.imageHeight = n, e.drawImage(0, 0, r.width, r.height, 0, 0, a, n));
  }, WebVideo.prototype.markDirty = function () {
    return this.$renderDirty = !0;
  }, WebVideo.prototype.$setHeight = function (e) {
    this.heightSet = +e || 0, a.prototype.$setHeight.call(this, e);
  }, WebVideo.prototype.$setWidth = function (e) {
    this.widthSet = +e || 0, a.prototype.$setWidth.call(this, e);
  }, Object.defineProperty(WebVideo.prototype, "paused", { get: function () {
      return !this.video || this.video.paused;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(WebVideo.prototype, "length", { get: function () {
      if (this.video) return this.video.duration;throw new Error("Video not loaded!");
    }, enumerable: !0, configurable: !0 }), e = WebVideo, r.WebVideo = e, __reflect(e.prototype, "egret.wxgame.WebVideo", ["egret.Video", "egret.DisplayObject"]), i.Video = e;
}(egret = egret || {}), function (n) {
  function WebHttpRequest() {
    var e = r.call(this) || this;return e.timeout = 0, e._url = "", e._method = "", e;
  }var e, t, r;e = n.wxgame || (n.wxgame = {}), r = n.EventDispatcher, __extends(WebHttpRequest, r), Object.defineProperty(WebHttpRequest.prototype, "response", { get: function () {
      return this._response || null;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(WebHttpRequest.prototype, "responseType", { get: function () {
      return this._responseType;
    }, set: function (e) {
      this._responseType = e;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(WebHttpRequest.prototype, "withCredentials", { get: function () {
      return this._withCredentials;
    }, set: function (e) {
      this._withCredentials = e;
    }, enumerable: !0, configurable: !0 }), WebHttpRequest.prototype.open = function (e, t) {
    void 0 === t && (t = "GET"), this._url = e, this._method = t;
  }, WebHttpRequest.prototype.readFileAsync = function () {
    var t = this;function I0(e) {
      t._response = e, t.dispatchEventWith(n.Event.COMPLETE);
    }function J0() {
      t.dispatchEventWith(n.IOErrorEvent.IO_ERROR);
    }var e = wx.getFileSystemManager();"arraybuffer" == t.responseType ? e.readFile({ filePath: t._url, success: function (e) {
        e = e.data;I0(e);
      }, fail: function () {
        J0();
      } }) : e.readFile({ filePath: t._url, encoding: "utf8", success: function (e) {
        e = e.data;"json" == t.responseType && (e = JSON.parse(e)), I0(e);
      }, fail: function () {
        J0();
      } });
  }, WebHttpRequest.prototype.send = function (e) {
    var a;this._response = void 0, this.isNetUrl(this._url) ? (a = this, wx.request({ data: e, url: this._url, method: this._method, header: this.headerObj, responseType: this.responseType, success: function (e) {
        var t = e.data,
            r = e.statusCode,
            e = e.header;if (200 == r) {
          if ("string" != typeof t && !(t instanceof ArrayBuffer)) try {
            t = JSON.stringify(t);
          } catch (e) {}a._responseHeader = e, a._response = t, a.dispatchEventWith(n.Event.COMPLETE);
        } else a.dispatchEventWith(n.IOErrorEvent.IO_ERROR);
      }, fail: function (e) {
        a.dispatchEventWith(n.IOErrorEvent.IO_ERROR);
      } })) : this.readFileAsync();
  }, WebHttpRequest.prototype.isNetUrl = function (e) {
    return -1 != e.indexOf("http://") || -1 != e.indexOf("HTTP://") || -1 != e.indexOf("https://") || -1 != e.indexOf("HTTPS://");
  }, WebHttpRequest.prototype.abort = function () {}, WebHttpRequest.prototype.getAllResponseHeaders = function () {
    var t = this._responseHeader;return t ? Object.keys(t).map(function (e) {
      return e + ": " + t[e];
    }).join("\n") : null;
  }, WebHttpRequest.prototype.setRequestHeader = function (e, t) {
    this.headerObj || (this.headerObj = {}), this.headerObj[e] = t;
  }, WebHttpRequest.prototype.getResponseHeader = function (e) {
    if (!this._responseHeader) return null;e = this._responseHeader[e];return e || "";
  }, WebHttpRequest.prototype.updateProgress = function (e) {
    e.lengthComputable && n.ProgressEvent.dispatchProgressEvent(this, n.ProgressEvent.PROGRESS, e.loaded, e.total);
  }, t = WebHttpRequest, e.WebHttpRequest = t, __reflect(t.prototype, "egret.wxgame.WebHttpRequest", ["egret.HttpRequest"]), n.HttpRequest = t;
}(egret = egret || {}), function (a) {
  !function (r) {
    window.URL || window.webkitURL;var e = (t = a.EventDispatcher, __extends(WebImageLoader, t), Object.defineProperty(WebImageLoader.prototype, "crossOrigin", { get: function () {
        return this._crossOrigin;
      }, set: function (e) {
        this._hasCrossOriginSet = !0, this._crossOrigin = e;
      }, enumerable: !0, configurable: !0 }), WebImageLoader.prototype.load = function (e) {
      this.loadImage(e);
    }, WebImageLoader.prototype.loadImage = function (e) {
      var t = new Image();this.data = null, this.currentImage = t, this._hasCrossOriginSet ? this._crossOrigin && (t.crossOrigin = this._crossOrigin) : WebImageLoader.crossOrigin && (t.crossOrigin = WebImageLoader.crossOrigin), t.onload = this.onImageComplete.bind(this), t.onerror = this.onLoadError.bind(this), t.src = e;
    }, WebImageLoader.prototype.onImageComplete = function (e) {
      var t = this;e = this.getImage(e);e && (this.data = new a.BitmapData(e), r.preUploadTexture && "webgl" == a.Capabilities.renderMode && r.WebGLRenderContext.getInstance(null, null).getWebGLTexture(this.data), window.setTimeout(function () {
        t.dispatchEventWith(a.Event.COMPLETE);
      }, 0));
    }, WebImageLoader.prototype.onLoadError = function (e) {
      e = this.getImage(e);e && this.dispatchIOError(e.src);
    }, WebImageLoader.prototype.dispatchIOError = function (e) {
      var t = this;window.setTimeout(function () {
        t.hasEventListener(a.IOErrorEvent.IO_ERROR) || a.warn(1011, e), t.dispatchEventWith(a.IOErrorEvent.IO_ERROR);
      }, 0);
    }, WebImageLoader.prototype.getImage = function (e) {
      e = e.target;e.src;return e.onerror = null, e.onload = null, this.currentImage !== e ? null : (this.currentImage = null, e);
    }, WebImageLoader.crossOrigin = null, WebImageLoader);function WebImageLoader() {
      var e = null !== t && t.apply(this, arguments) || this;return e.data = null, e._crossOrigin = null, e._hasCrossOriginSet = !1, e.currentImage = null, e.request = null, e;
    }var t;r.WebImageLoader = e, __reflect(e.prototype, "egret.wxgame.WebImageLoader", ["egret.ImageLoader"]), a.ImageLoader = e;
  }(a.wxgame || (a.wxgame = {}));
}(egret = egret || {}), function (t) {
  function HTML5StageText() {
    var e = a.call(this) || this;return e.textValue = "", e.onKeyboardComplete = e.onKeyboardComplete.bind(e), e.onKeyboardInput = e.onKeyboardInput.bind(e), e;
  }var e, r, a;e = t.wxgame || (t.wxgame = {}), a = t.EventDispatcher, __extends(HTML5StageText, a), HTML5StageText.prototype.$setTextField = function (e) {
    return this.$textfield = e, !0;
  }, HTML5StageText.prototype.$addToStage = function () {}, HTML5StageText.prototype.$show = function () {
    var e = { defaultValue: this.$textfield.text, maxLength: 9999, multiple: this.$textfield.multiline, confirmHold: !0, confirmType: "done", fail: function (e) {
        console.log(e.errMsg);
      } };this.$textfield.maxChars && (e.maxLength = this.$textfield.maxChars), wx.showKeyboard(e), wx.onKeyboardConfirm(this.onKeyboardComplete), wx.onKeyboardComplete(this.onKeyboardComplete), wx.onKeyboardInput(this.onKeyboardInput), this.dispatchEvent(new t.Event("focus"));
  }, HTML5StageText.prototype.onKeyboardInput = function (e) {
    this.textValue = e.value, t.Event.dispatchEvent(this, "updateText", !1);
  }, HTML5StageText.prototype.onKeyboardComplete = function (e) {
    this.$textfield.text = e.value, this.$hide();
  }, HTML5StageText.prototype.$hide = function () {
    wx.offKeyboardComplete(), wx.offKeyboardConfirm(), wx.offKeyboardInput(), wx.hideKeyboard({}), this.dispatchEvent(new t.Event("blur"));
  }, HTML5StageText.prototype.$getText = function () {
    return this.textValue || (this.textValue = ""), this.textValue;
  }, HTML5StageText.prototype.$setText = function (e) {
    return this.textValue = e, !0;
  }, HTML5StageText.prototype.$setColor = function (e) {
    return !0;
  }, HTML5StageText.prototype.$onBlur = function () {}, HTML5StageText.prototype.$removeFromStage = function () {}, HTML5StageText.prototype.$resetStageText = function () {}, r = HTML5StageText, e.HTML5StageText = r, __reflect(r.prototype, "egret.wxgame.HTML5StageText", ["egret.StageText"]), t.StageText = r;
}(egret = egret || {}), function (o) {
  var s;o.wxgame || (o.wxgame = {}), s = null, o.sys.measureText = function (e, t, r, a, n) {
    s || ((s = o.sys.canvasHitTestBuffer.context).textAlign = "left", s.textBaseline = "middle");var i = "";return n && (i += "italic "), a && (i += "bold "), i += (r || 12) + "px ", s.font = i += t || "Arial", o.sys.measureTextWith(s, e);
  };
}(egret = egret || {}), function (o) {
  function __createCanvas__(e, t) {
    t = o.sys.createCanvas(e, t);var r = t.getContext("2d");if (void 0 === r.imageSmoothingEnabled) {
      var a = ["webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "msImageSmoothingEnabled"];var n;for (var i = a.length - 1; 0 <= i && void 0 === r[n = a[i]]; i--);try {
        Object.defineProperty(r, "imageSmoothingEnabled", { get: function () {
            return this[n];
          }, set: function (e) {
            this[n] = e;
          } });
      } catch (e) {
        r.imageSmoothingEnabled = r[n];
      }
    }return t;
  }function CanvasRenderBuffer(e, t, r) {
    this.surface = o.sys.createCanvasRenderBufferSurface(__createCanvas__, e, t, r), this.context = this.surface.getContext("2d"), this.context && (this.context.$offsetX = 0, this.context.$offsetY = 0), this.resize(e, t);
  }var e, t;e = o.wxgame || (o.wxgame = {}), Object.defineProperty(CanvasRenderBuffer.prototype, "width", { get: function () {
      return this.surface.width;
    }, enumerable: !0, configurable: !0 }), Object.defineProperty(CanvasRenderBuffer.prototype, "height", { get: function () {
      return this.surface.height;
    }, enumerable: !0, configurable: !0 }), CanvasRenderBuffer.prototype.resize = function (e, t, r) {
    o.sys.resizeCanvasRenderBuffer(this, e, t, r);
  }, CanvasRenderBuffer.prototype.getPixels = function (e, t, r, a) {
    return this.context.getImageData(e, t, r = void 0 === r ? 1 : r, a = void 0 === a ? 1 : a).data;
  }, CanvasRenderBuffer.prototype.toDataURL = function (e, t) {
    return this.surface.toDataURL(e, t);
  }, CanvasRenderBuffer.prototype.clear = function () {
    this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.surface.width, this.surface.height);
  }, CanvasRenderBuffer.prototype.destroy = function () {
    this.surface.width = this.surface.height = 0;
  }, t = CanvasRenderBuffer, e.CanvasRenderBuffer = t, __reflect(t.prototype, "egret.wxgame.CanvasRenderBuffer", ["egret.sys.RenderBuffer"]);
}(egret = egret || {}), function (i) {
  function WebTouchHandler(e, t) {
    var r = a.call(this) || this;return r.onTouchBegin = function (e) {
      var t = r.getLocation(e);r.touch.onTouchBegin(t.x, t.y, e.identifier);
    }, r.onTouchMove = function (e) {
      var t = r.getLocation(e);r.touch.onTouchMove(t.x, t.y, e.identifier);
    }, r.onTouchEnd = function (e) {
      var t = r.getLocation(e);r.touch.onTouchEnd(t.x, t.y, e.identifier);
    }, r.scaleX = 1, r.scaleY = 1, r.rotation = 0, r.canvas = t, r.touch = new i.sys.TouchHandler(e), r.addTouchListener(), r;
  }var e, t, a;e = i.wxgame || (i.wxgame = {}), a = i.HashObject, __extends(WebTouchHandler, a), WebTouchHandler.prototype.addTouchListener = function () {
    var a = this;e.isSubContext ? (wx.onTouchStart(function (e) {
      var t = e.changedTouches.length;for (var r = 0; r < t; r++) a.onTouchBegin(e.changedTouches[r]);
    }), wx.onTouchMove(function (e) {
      var t = e.changedTouches.length;for (var r = 0; r < t; r++) a.onTouchMove(e.changedTouches[r]);
    }), wx.onTouchEnd(function (e) {
      var t = e.changedTouches.length;for (var r = 0; r < t; r++) a.onTouchEnd(e.changedTouches[r]);
    }), wx.onTouchCancel(function (e) {
      var t = e.changedTouches.length;for (var r = 0; r < t; r++) a.onTouchEnd(e.changedTouches[r]);
    })) : (a.canvas.addEventListener("touchstart", function (e) {
      var t = e.changedTouches.length;for (var r = 0; r < t; r++) a.onTouchBegin(e.changedTouches[r]);a.prevent(e);
    }, !1), a.canvas.addEventListener("touchmove", function (e) {
      var t = e.changedTouches.length;for (var r = 0; r < t; r++) a.onTouchMove(e.changedTouches[r]);a.prevent(e);
    }, !1), a.canvas.addEventListener("touchend", function (e) {
      var t = e.changedTouches.length;for (var r = 0; r < t; r++) a.onTouchEnd(e.changedTouches[r]);a.prevent(e);
    }, !1), a.canvas.addEventListener("touchcancel", function (e) {
      var t = e.changedTouches.length;for (var r = 0; r < t; r++) a.onTouchEnd(e.changedTouches[r]);a.prevent(e);
    }, !1));
  }, WebTouchHandler.prototype.prevent = function (e) {
    e.stopPropagation(), 1 == e.isScroll || this.canvas.userTyping || e.preventDefault();
  }, WebTouchHandler.prototype.getLocation = function (e) {
    document.documentElement;var t = this.canvas.getBoundingClientRect();var r = t.left;var a = t.top;var n = e.pageX - r,
        r = n;e = e.pageY - a, a = e;return 90 == this.rotation ? (r = e, a = t.width - n) : -90 == this.rotation && (r = t.height - e, a = n), r /= this.scaleX, a /= this.scaleY, i.$TempPoint.setTo(Math.round(r), Math.round(a));
  }, WebTouchHandler.prototype.updateScaleMode = function (e, t, r) {
    this.scaleX = e, this.scaleY = t, this.rotation = r;
  }, WebTouchHandler.prototype.$updateMaxTouches = function () {
    this.touch.$initMaxTouches();
  }, t = WebTouchHandler, e.WebTouchHandler = t, __reflect(t.prototype, "egret.wxgame.WebTouchHandler");
}(egret = egret || {}), function (e) {
  var t;e = e.wxgame || (e.wxgame = {}), t = !0, e.WebLifeCycleHandler = function (e) {
    wx.onShow && wx.onShow(function () {
      t || (e.resume(), t = !0);
    }), wx.onHide && wx.onHide(function () {
      t && (e.pause(), t = !1);
    });
  };
}(egret = egret || {}), function (n) {
  !function (e) {
    var t = (AudioType.WEB_AUDIO = 2, AudioType.HTML5_AUDIO = 3, AudioType);function AudioType() {}e.AudioType = t, __reflect(t.prototype, "egret.wxgame.AudioType");r = n.HashObject, __extends(Html5Capatibility, r), Html5Capatibility.$init = function () {
      n.Sound = e.HtmlSound;
    }, t = Html5Capatibility;function Html5Capatibility() {
      return r.call(this) || this;
    }var r;e.Html5Capatibility = t, __reflect(t.prototype, "egret.wxgame.Html5Capatibility");var a = null;function getPrefix(e, t) {
      if (e in t) return "";e = e.charAt(0).toUpperCase() + e.substring(1, e.length);var r = ["webkit", "ms", "Moz", "O"];for (var a = 0; a < r.length; a++) if (r[a] + e in t) return r[a];return "";
    }e.getPrefixStyleName = function (e, t) {
      var r = "";return "" == (r = null != t ? getPrefix(e, t) : (null == a && (t = document.createElement("div").style, a = getPrefix("transform", t)), a)) ? e : r + e.charAt(0).toUpperCase() + e.substring(1, e.length);
    }, e.getPrefix = getPrefix;
  }(n.wxgame || (n.wxgame = {}));
}(egret = egret || {}), function (e) {
  (e = e.wxgame || (e.wxgame = {})).version = "1.3.7", e.isSubContext = !1, e.preUploadTexture = !1;
}(egret = egret || {}), function (o) {
  !function (a) {
    var n = !1;function setRenderMode(e) {
      "webgl" === e ? (e = !1, wx.createCanvas().getContext("webgl").wxBindCanvasTexture && (e = -1 < window.wx.getSystemInfoSync().system.indexOf("iOS 10")), o.Capabilities.renderMode = "webgl", o.sys.RenderBuffer = a.WebGLRenderBuffer, o.sys.systemRenderer = new a.WebGLRenderer(), o.sys.systemRenderer.wxiOS10 = e, o.sys.canvasRenderer = new o.CanvasRenderer(), o.sys.customHitTestBuffer = new a.WebGLRenderBuffer(3, 3), o.sys.canvasHitTestBuffer = new a.CanvasRenderBuffer(3, 3)) : (o.Capabilities.renderMode = "canvas", o.sys.RenderBuffer = a.CanvasRenderBuffer, o.sys.systemRenderer = new o.CanvasRenderer(), o.sys.canvasRenderer = o.sys.systemRenderer, o.sys.customHitTestBuffer = new a.CanvasRenderBuffer(3, 3), o.sys.canvasHitTestBuffer = o.sys.customHitTestBuffer);
    }o.sys.setRenderMode = setRenderMode, o.runEgret = function (e) {
      if (n && (o.sys.screenAdapter = null, o.MainContext.instance = null, o.sys.$TempStage = null), n = !0, (e = e || {}).pro) {
        null != o.pro && (o.pro.egret2dDriveMode = !0);try {
          window.startup ? window.startup() : console.error("EgretPro.js don't has function:window.startup");
        } catch (e) {
          console.error(e);
        }
      }var t;var r;a.Html5Capatibility.$init(), "webgl" == e.renderMode && (t = e.antialias, a.WebGLRenderContext.antialias = !!t), o.sys.CanvasRenderBuffer = a.CanvasRenderBuffer, setRenderMode(e.renderMode), r = e.canvasScaleFactor || (e.calculateCanvasScaleFactor ? e.calculateCanvasScaleFactor(o.sys.canvasHitTestBuffer.context) : (r = (r = o.sys.canvasHitTestBuffer.context).backingStorePixelRatio || r.webkitBackingStorePixelRatio || r.mozBackingStorePixelRatio || r.msBackingStorePixelRatio || r.oBackingStorePixelRatio || r.backingStorePixelRatio || 1, (window.devicePixelRatio || 1) / r)), o.sys.DisplayList.$canvasScaleFactor = r, function (e) {
        var t = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;t = t || function (e) {
          return window.setTimeout(e, 1e3 / 60);
        };t(function onTick() {
          t(onTick), e.update(!0);
        });
      }(o.ticker), e.screenAdapter ? o.sys.screenAdapter = e.screenAdapter : o.sys.screenAdapter || (o.sys.screenAdapter = new o.sys.DefaultScreenAdapter()), e = new a.WebPlayer({}, e), window.player = e, window.addEventListener("resize", function () {
        isNaN(i) && (i = window.setTimeout(doResize, 300));
      });
    }, o.reInit = function () {
      window.playerTest && window.playerTest.initialize();
    }, o.updateAllScreens = function () {
      n && window.player.updateScreenSize();
    };var i = NaN;function doResize() {
      i = NaN, o.updateAllScreens();
    }
  }(o.wxgame || (o.wxgame = {}));
}(egret = egret || {});var systemInfo = wx.getSystemInfoSync();var language = systemInfo.language.toLowerCase();(language = -1 < language.indexOf("zh") ? "zh_CN" : "en_US") in egret.$locale_strings && (egret.$language = language), egret.Capabilities.runtimeType = egret.RuntimeType.WXGAME, function (a) {
  function WebCapability() {}var e, t;e = a.wxgame || (a.wxgame = {}), WebCapability.detect = function () {
    var e = a.Capabilities;e.isMobile = !0;var t = wx.getSystemInfoSync();var r = t.system.toLowerCase();-1 < r.indexOf("ios") ? e.os = "iOS" : -1 < r.indexOf("android") && (e.os = "Android");t = t.language;t = -1 < t.indexOf("zh") ? "zh-CN" : "en-US", e.language = t;
  }, t = WebCapability, e.WebCapability = t, __reflect(t.prototype, "egret.wxgame.WebCapability"), t.detect();
}(egret = egret || {}), function (d) {
  function WebFps(e, t, r, a, n) {
    var i = p.call(this) || this;if (i.arrFps = [], i.arrCost = [], i.arrLog = [], !t && !r) return i;i.showFPS = t, i.showLog = r, i.arrFps = [], i.arrCost = [];var o = null == n.x ? 0 : parseInt(n.x);var s = null == n.y ? 0 : parseInt(n.y);var c = null == n.bgAlpha ? 1 : Number(n.bgAlpha);var h = null == n.size ? 12 : parseInt(n.size);var l = void 0 === n.textColor ? 0 : parseInt(n.textColor.replace("#", "0x"));n = new d.Shape();return (i.bg = n).graphics.beginFill(0, c), n.graphics.drawRect(0, 0, 10, 10), n.graphics.endFill(), n.x = o, n.y = s, t && (u.x = o + 4, u.y = s + 4, u.textColor = l, u.size = h), r && (f.x = o + 4, f.y = s + 4, f.textColor = l, f.size = h), i;
  }var e, u, f, t, p;e = d.wxgame || (d.wxgame = {}), u = new d.TextField(), f = new d.TextField(), p = d.DisplayObject, __extends(WebFps, p), WebFps.prototype.addText = function () {
    d.sys.$TempStage.addChild(this.bg), this.showFPS && d.sys.$TempStage.addChild(u), this.showLog && d.sys.$TempStage.addChild(f);
  }, WebFps.prototype.addFps = function () {}, WebFps.prototype.addLog = function () {}, WebFps.prototype.update = function (e, t) {
    var r;var a;var n;(t = void 0 === t ? !1 : t) ? (r = this.arrFps[this.arrFps.length - 1], a = this.arrCost[this.arrCost.length - 1][0], n = this.arrCost[this.arrCost.length - 1][1]) : (r = e.fps, a = e.costTicker, n = e.costRender, this.lastNumDraw = e.draw, this.arrFps.push(r), this.arrCost.push([a, n]));var i = 0;var o = this.arrFps.length;101 < o && (o = 101, this.arrFps.shift(), this.arrCost.shift());var s = this.arrFps[0];var c = this.arrFps[0];for (var h = 0; h < o; h++) {
      var l = this.arrFps[h];i += l, l < s ? s = l : c < l && (c = l);
    }e = Math.floor(i / o);u.text = r + " FPS \nmin:" + s + " max:" + c + " avg:" + e + "\nDraw " + this.lastNumDraw + "\nCost " + a + " " + n, this.resizeBG();
  }, WebFps.prototype.resizeBG = function () {
    this.addText();var e = 0;var t = 0;this.showFPS && this.showLog ? (e = Math.ceil((Math.max(u.width, f.width) + 8) / 10), t = Math.ceil((u.height + f.height + 8) / 10), f.y = this.bg.y + 4 + u.height) : this.showFPS ? (e = Math.ceil((u.width + 8) / 10), t = Math.ceil((u.height + 8) / 10)) : (e = Math.ceil((f.width + 8) / 10), t = Math.ceil((f.height + 8) / 10), f.y = this.bg.y + 4), this.bg.scaleX = e, this.bg.scaleY = t;
  }, WebFps.prototype.updateInfo = function (e) {
    this.arrLog.push(e), this.updateLogLayout();
  }, WebFps.prototype.updateWarn = function (e) {
    this.arrLog.push("[Warning]" + e), this.updateLogLayout();
  }, WebFps.prototype.updateError = function (e) {
    this.arrLog.push("[Error]" + e), this.updateLogLayout();
  }, WebFps.prototype.updateLogLayout = function () {
    f.text = this.arrLog.join("\n"), d.sys.$TempStage.height < f.y + f.height + 2 * f.size && (this.arrLog.shift(), f.text = this.arrLog.join("\n")), this.resizeBG();
  }, t = WebFps, e.WebFps = t, __reflect(t.prototype, "egret.wxgame.WebFps", ["egret.FPSDisplay"]), d.FPSDisplay = t;
}(egret = egret || {}), function (e) {
  function getOption(e) {
    var t = wx.getLaunchOptionsSync();return t.query[e] || t[e];
  }(e.wxgame || (e.wxgame = {})).getOption = getOption, e.getOption = getOption;
}(egret = egret || {}), function (d) {
  function WebPlayer(e, t) {
    var r = a.call(this) || this;return r.init(e, t), r.initOrientation(), r;
  }var u, e, a;u = d.wxgame || (d.wxgame = {}), a = d.HashObject, __extends(WebPlayer, a), WebPlayer.prototype.init = function (e, t) {
    console.log("Egret Engine Version:", d.Capabilities.engineVersion);var r = this.readOption(e, t);var a = new d.Stage();(d.sys.stage2d = a).$screen = this, a.$scaleMode = r.scaleMode, a.$orientation = r.orientation, a.$maxTouches = r.maxTouches, a.frameRate = r.frameRate, wx.setPreferredFramesPerSecond(a.frameRate), a.textureScaleFactor = r.textureScaleFactor;var n = new d.sys.RenderBuffer(void 0, void 0, !0);var i = n.surface;this.attachCanvas(e, i);t = new u.WebTouchHandler(a, i);n = new d.sys.Player(n, a, r.entryClassName);d.lifecycle.stage = a, d.lifecycle.addLifecycleListener(u.WebLifeCycleHandler), (r.showFPS || r.showLog) && n.displayFPS(r.showFPS, r.showLog, r.logFilter, r.fpsStyles), this.playerOption = r, this.container = e, this.canvas = i, this.stage = a, this.player = n, this.webTouchHandler = t, this.updateScreenSize(), this.updateMaxTouches(), n.start(), window.playerTest = n;
  }, WebPlayer.prototype.initOrientation = function () {
    var e = this;window.addEventListener("orientationchange", function () {
      window.setTimeout(function () {
        d.StageOrientationEvent.dispatchStageOrientationEvent(e.stage, d.StageOrientationEvent.ORIENTATION_CHANGE);
      }, 350);
    });
  }, WebPlayer.prototype.readOption = function (e, t) {
    var r = {};var a;r.entryClassName = t.entryClassName || "Main", r.scaleMode = t.scaleMode || d.StageScaleMode.FIXED_WIDTH, r.scaleMode && r.scaleMode != d.StageScaleMode.SHOW_ALL || (r.scaleMode = d.StageScaleMode.FIXED_WIDTH, a = d.sys.tr(4500, "showAll", "fixedWidth"), console.warn(a)), r.frameRate = t.frameRate || 30, r.contentWidth = t.contentWidth || 640, r.contentHeight = t.contentHeight || 1136, r.orientation = t.orientation || d.OrientationMode.AUTO, r.maxTouches = t.maxTouches, r.textureScaleFactor = 1, r.showFPS = t.showFPS;var n = (t.fpsStyles || "x:0,y:0,size:12,textColor:0xffffff,bgAlpha:0.9").split(",");var i = {};for (var o = 0; o < n.length; o++) {
      var s = n[o].split(":");i[s[0]] = s[1];
    }return r.fpsStyles = i, r.showLog = t.showLog, r.logFilter = "", r;
  }, WebPlayer.prototype.attachCanvas = function (e, t) {
    t = t.style;t.cursor = "inherit", t.position = "absolute", t.top = "0", t.bottom = "0", t.left = "0", t.right = "0";
  }, WebPlayer.prototype.updateScreenSize = function () {
    var e = this.canvas;var t, r, a, n, i, o, s, c, h, l;e.userTyping || (l = this.playerOption, h = (i = e.getBoundingClientRect()).width, r = i.height, i.top < (t = 0) && (r += i.top, t = -i.top), a = !1, o = (a = (n = this.stage.$orientation) != d.OrientationMode.AUTO ? n != d.OrientationMode.PORTRAIT && h < r || n == d.OrientationMode.PORTRAIT && r < h : a) ? r : h, c = a ? h : r, d.Capabilities.boundingClientWidth = o, d.Capabilities.boundingClientHeight = c, i = (s = d.sys.screenAdapter.calculateStageSize(this.stage.$scaleMode, o, c, l.contentWidth, l.contentHeight)).stageWidth, o = s.stageHeight, c = s.displayWidth, l = s.displayHeight, e.style[u.getPrefixStyleName("transformOrigin")] = "0% 0% 0px", e.width != i && (u.isSubContext || (window.sharedCanvas && (window.sharedCanvas.width = i), e.width = i)), e.height != o && (u.isSubContext || (window.sharedCanvas && (window.sharedCanvas.height = o), e.height = o)), s = 0, a ? n == d.OrientationMode.LANDSCAPE ? (s = 90, e.style.top = t + (r - c) / 2 + "px", e.style.left = (h + l) / 2 + "px") : (s = -90, e.style.top = t + (r + c) / 2 + "px", e.style.left = (h - l) / 2 + "px") : (e.style.top = t + (r - l) / 2 + "px", e.style.left = (h - c) / 2 + "px"), h = (e = c / i) * d.sys.DisplayList.$canvasScaleFactor, l = (c = l / o) * d.sys.DisplayList.$canvasScaleFactor, h = Math.ceil(h), l = Math.ceil(l), d.sys.DisplayList.$setCanvasScale(h, l), this.webTouchHandler.updateScaleMode(e, c, s), this.player.updateStageSize(i, o));
  }, WebPlayer.prototype.setContentSize = function (e, t) {
    var r = this.playerOption;r.contentWidth = e, r.contentHeight = t, this.updateScreenSize();
  }, WebPlayer.prototype.updateMaxTouches = function () {
    this.webTouchHandler.$updateMaxTouches();
  }, e = WebPlayer, u.WebPlayer = e, __reflect(e.prototype, "egret.wxgame.WebPlayer", ["egret.sys.Screen"]);
}(egret = egret || {}), function (p) {
  function convertImageToCanvas(e, t) {
    g || (g = p.sys.createCanvas(), v = g.getContext("2d"));var r = e.$getTextureWidth();var a = e.$getTextureHeight();null == t && ((t = p.$TempRectangle).x = 0, t.y = 0, t.width = r, t.height = a), t.x = Math.min(t.x, r - 1), t.y = Math.min(t.y, a - 1), t.width = Math.min(t.width, r - t.x), t.height = Math.min(t.height, a - t.y);var n = Math.floor(t.width);var i = Math.floor(t.height);var o = g;if (o.style.width = n + "px", o.style.height = i + "px", g.width = n, g.height = i, "webgl" == p.Capabilities.renderMode) {
      var s = void 0;e.$renderBuffer ? s = e : (p.sys.systemRenderer.renderClear && p.sys.systemRenderer.renderClear(), (s = new p.RenderTexture()).drawToTexture(new p.Bitmap(e)));var c = s.$renderBuffer.getPixels(t.x, t.y, n, i);var h = 0;var l = 0;for (var d = 0; d < c.length; d += 4) v.fillStyle = "rgba(" + c[d] + "," + c[d + 1] + "," + c[d + 2] + "," + c[d + 3] / 255 + ")", v.fillRect(h, l, 1, 1), ++h == n && (h = 0, l++);return e.$renderBuffer || s.dispose(), o;
    }var u = e;var f = Math.round(u.$offsetX);i = Math.round(u.$offsetY);s = u.$bitmapWidth;e = u.$bitmapHeight;return v.drawImage(u.$bitmapData.source, u.$bitmapX + t.x / p.$TextureScaleFactor, u.$bitmapY + t.y / p.$TextureScaleFactor, s * t.width / r, e * t.height / a, f, i, t.width, t.height), o;
  }var g, v;p.wxgame || (p.wxgame = {}), p.Texture.prototype.toDataURL = function (e, t, r) {
    try {
      return convertImageToCanvas(this, t).toDataURL(e, r);
    } catch (e) {
      p.$error(1033);
    }return null;
  }, p.Texture.prototype.saveToFile = function (e, t, r, a) {
    return e = convertImageToCanvas(this, r).toTempFilePathSync({ fileType: 0 <= e.indexOf("png") ? "png" : "jpg" }), wx.getFileSystemManager().saveFile({ tempFilePath: e, filePath: wx.env.USER_DATA_PATH + "/" + t, success: function (e) {} }), e;
  }, p.Texture.prototype.getPixel32 = function (e, t) {
    return p.$warn(1041, "getPixel32", "getPixels"), this.getPixels(e, t);
  }, p.Texture.prototype.getPixels = function (e, t, r, a) {
    if (void 0 === r && (r = 1), void 0 === a && (a = 1), "webgl" == p.Capabilities.renderMode) {
      var n = void 0;return this.$renderBuffer ? n = this : (n = new p.RenderTexture()).drawToTexture(new p.Bitmap(this)), n.$renderBuffer.getPixels(e, t, r, a);
    }try {
      convertImageToCanvas(this);return v.getImageData(e, t, r, a).data;
    } catch (e) {
      p.$error(1039);
    }
  };
}(egret = egret || {}), function (e) {
  function WebExternalInterface() {}var t, r;t = e.wxgame || (e.wxgame = {}), WebExternalInterface.call = function (e, t) {}, WebExternalInterface.addCallback = function (e, t) {}, r = WebExternalInterface, t.WebExternalInterface = r, __reflect(r.prototype, "egret.wxgame.WebExternalInterface", ["egret.ExternalInterface"]), e.ExternalInterface = r;
}(egret = egret || {}), function (a) {
  function WebDeviceOrientation() {
    var r = null !== n && n.apply(this, arguments) || this;return r.isStart = !1, r.onChange = function (e) {
      var t;r.isStart && ((t = new a.OrientationEvent(a.Event.CHANGE)).beta = e.beta, t.gamma = e.gamma, t.alpha = e.alpha, r.dispatchEvent(t));
    }, r;
  }var e, t, n;e = a.wxgame || (a.wxgame = {}), n = a.EventDispatcher, __extends(WebDeviceOrientation, n), WebDeviceOrientation.prototype.start = function () {
    this.isStart = !0, wx.startDeviceMotionListening({ interval: "normal" }), wx.onDeviceMotionChange(this.onChange);
  }, WebDeviceOrientation.prototype.stop = function () {
    this.isStart = !1, wx.stopDeviceMotionListening();
  }, t = WebDeviceOrientation, e.WebDeviceOrientation = t, __reflect(t.prototype, "egret.wxgame.WebDeviceOrientation", ["egret.DeviceOrientation"]);
}(egret = egret || {}), egret.DeviceOrientation = egret.wxgame.WebDeviceOrientation, function (e) {
  var t = (WXSocket.prototype.addCallBacks = function (e, t, r, a, n) {
    this.onConnect = e, this.onClose = t, this.onSocketData = r, this.onError = a, this.thisObject = n;
  }, WXSocket.prototype.connect = function (e, t) {
    this.host = e, this.port = t;t = "ws://" + this.host + ":" + this.port;this.socketTask = wx.connectSocket({ url: t }), this._bindEvent();
  }, WXSocket.prototype.connectByUrl = function (e) {
    this.socketTask = wx.connectSocket({ url: e }), this._bindEvent();
  }, WXSocket.prototype._bindEvent = function () {
    var t = this;this.socketTask.onOpen(function () {
      t.onConnect.call(t.thisObject);
    }), this.socketTask.onClose(function () {
      e.callLater(function () {
        t.onClose.call(t.thisObject);
      }, t);
    }), this.socketTask.onError(function () {
      t.onError.call(t.thisObject);
    }), this.socketTask.onMessage(function (e) {
      t.onSocketData.call(t.thisObject, e.data);
    });
  }, WXSocket.prototype.send = function (e) {
    this.socketTask.send({ data: e });
  }, WXSocket.prototype.close = function () {
    this.socketTask.close();
  }, WXSocket.prototype.disconnect = function () {
    this.close();
  }, WXSocket);function WXSocket() {
    this.host = "", this.port = 0;
  }e.WXSocket = t, __reflect(t.prototype, "egret.WXSocket", ["egret.ISocket"]), e.ISocket = t;
}(egret = egret || {}), null == window.HTMLDivElement && (window.HTMLDivElement = HTMLElement), null == window.HTMLVideoElement && (window.HTMLVideoElement = HTMLDivElement), function (e) {
  var t;e.wxgame || (e.wxgame = {}), t = "egret.BitmapData", e.registerClass(HTMLImageElement, t), e.registerClass(HTMLCanvasElement, t), e.registerClass(HTMLVideoElement, t);
}(egret = egret || {}), function (t) {
  t.$toBitmapData = function (e) {
    return e.hashCode = e.$hashCode = t.$hashCount++, e;
  };
}(egret = egret || {}), function (n) {
  var e = (WebGLUtils.compileProgram = function (e, t, r) {
    var a = WebGLUtils.compileFragmentShader(e, r);r = WebGLUtils.compileVertexShader(e, t);t = e.createProgram();return e.attachShader(t, r), e.attachShader(t, a), e.linkProgram(t), e.getProgramParameter(t, e.LINK_STATUS) || n.$warn(1020), t;
  }, WebGLUtils.compileFragmentShader = function (e, t) {
    return WebGLUtils._compileShader(e, t, e.FRAGMENT_SHADER);
  }, WebGLUtils.compileVertexShader = function (e, t) {
    return WebGLUtils._compileShader(e, t, e.VERTEX_SHADER);
  }, WebGLUtils._compileShader = function (e, t, r) {
    r = e.createShader(r);return e.shaderSource(r, t), e.compileShader(r), e.getShaderParameter(r, e.COMPILE_STATUS) ? r : null;
  }, WebGLUtils.checkCanUseWebGL = function () {
    if (null == WebGLUtils.canUseWebGL) try {
      var e = document.createElement("canvas");WebGLUtils.canUseWebGL = !(!window.WebGLRenderingContext || !e.getContext("webgl") && !e.getContext("experimental-webgl"));
    } catch (e) {
      WebGLUtils.canUseWebGL = !1;
    }return WebGLUtils.canUseWebGL;
  }, WebGLUtils.deleteWebGLTexture = function (e) {
    var t;e && (e[n.engine_default_empty_texture] ? console.warn("deleteWebGLTexture:" + n.engine_default_empty_texture) : (t = e[n.glContext]) ? t.deleteTexture(e) : console.error("deleteWebGLTexture gl = " + t));
  }, WebGLUtils.premultiplyTint = function (e, t) {
    return 1 === t ? (255 * t << 24) + e : 0 === t ? 0 : (255 * t << 24) + (((e >> 16 & 255) * t + .5 | 0) << 16) + (((e >> 8 & 255) * t + .5 | 0) << 8) + ((255 & e) * t + .5 | 0);
  }, WebGLUtils);function WebGLUtils() {}n.WebGLUtils = e, __reflect(e.prototype, "egret.WebGLUtils");
}(egret = egret || {}), function (a) {
  var e;(e = a.localStorage || (a.localStorage = {})).wxgame || (e.wxgame = {}), e.getItem = function (e) {
    return window.localStorage.getItem(e);
  }, e.setItem = function (t, r) {
    try {
      return window.localStorage.setItem(t, r), !0;
    } catch (e) {
      return a.$warn(1047, t, r), !1;
    }
  }, e.removeItem = function (e) {
    window.localStorage.removeItem(e);
  }, e.clear = function () {
    window.localStorage.clear();
  };
}(egret = egret || {}), function (a) {
  function HtmlSound() {
    var e = t.call(this) || this;return e.loaded = !1, e;
  }var n, e, t;n = a.wxgame || (a.wxgame = {}), t = a.EventDispatcher, __extends(HtmlSound, t), Object.defineProperty(HtmlSound.prototype, "length", { get: function () {
      if (this.originAudio) return this.originAudio.duration;throw new Error("sound not loaded!");
    }, enumerable: !0, configurable: !0 }), HtmlSound.prototype.load = function (e) {
    var t = this;(this.url = e) || a.$warn(3002);var r = wx.createInnerAudioContext();function onAudioLoaded() {
      removeListeners(), t.loaded = !0, t.dispatchEventWith(a.Event.COMPLETE);
    }function onAudioError() {
      removeListeners(), t.dispatchEventWith(a.IOErrorEvent.IO_ERROR);
    }function removeListeners() {
      r.offCanplay(onAudioLoaded), r.offError(onAudioError);
    }r.onCanplay(onAudioLoaded), r.onError(onAudioError), r.src = e, this.originAudio = r;
  }, HtmlSound.prototype.play = function (e, t) {
    e = +e || 0, t = +t || 0, 0 == this.loaded && a.$warn(1049);var r = new n.HtmlSoundChannel(this.originAudio);return r.$url = this.url, r.$loops = t, r.$startTime = e, r.$play(), r;
  }, HtmlSound.prototype.close = function () {
    this.originAudio && (this.originAudio.destroy(), this.originAudio = null), this.loaded = !1;
  }, HtmlSound.MUSIC = "music", HtmlSound.EFFECT = "effect", e = HtmlSound, n.HtmlSound = e, __reflect(e.prototype, "egret.wxgame.HtmlSound", ["egret.Sound"]);
}(egret = egret || {}), function (t) {
  var r;t.wxgame || (t.wxgame = {}), Object.defineProperty(t.Logger, "logLevel", { set: function (e) {
      switch (null == r && (r = { error: console.error, debug: console.debug, warn: console.warn, info: console.info, log: console.log }), e) {case t.Logger.OFF:
          console.error = function () {};case t.Logger.ERROR:
          console.warn = function () {};case t.Logger.WARN:
          console.info = function () {}, console.log = function () {};case t.Logger.INFO:
          console.debug = function () {};}switch (e) {case t.Logger.ALL:case t.Logger.DEBUG:
          console.debug = r.debug;case t.Logger.INFO:
          console.log = r.log, console.info = r.info;case t.Logger.WARN:
          console.warn = r.warn;case t.Logger.ERROR:
          console.error = r.error;}
    }, enumerable: !0, configurable: !0 });
}(egret = egret || {}), function (e) {
  function WebGLDrawCmdManager() {
    this.drawData = [], this.drawDataLen = 0;
  }var t;t = e.wxgame || (e.wxgame = {}), WebGLDrawCmdManager.prototype.pushDrawRect = function () {
    var e;0 != this.drawDataLen && 1 == this.drawData[this.drawDataLen - 1].type || ((e = this.drawData[this.drawDataLen] || {}).type = 1, e.count = 0, this.drawData[this.drawDataLen] = e, this.drawDataLen++), this.drawData[this.drawDataLen - 1].count += 2;
  }, WebGLDrawCmdManager.prototype.pushDrawTexture = function (e, t, r, a, n) {
    var i;void 0 === t && (t = 2), r ? ((i = this.drawData[this.drawDataLen] || {}).type = 0, i.texture = e, i.filter = r, i.count = t, i.textureWidth = a, i.textureHeight = n, this.drawData[this.drawDataLen] = i, this.drawDataLen++) : (0 != this.drawDataLen && 0 == this.drawData[this.drawDataLen - 1].type && e == this.drawData[this.drawDataLen - 1].texture && !this.drawData[this.drawDataLen - 1].filter || ((i = this.drawData[this.drawDataLen] || {}).type = 0, i.texture = e, i.count = 0, this.drawData[this.drawDataLen] = i, this.drawDataLen++), this.drawData[this.drawDataLen - 1].count += t);
  }, WebGLDrawCmdManager.prototype.pushChangeSmoothing = function (e, t) {
    e.smoothing = t;var r = this.drawData[this.drawDataLen] || {};r.type = 10, r.texture = e, r.smoothing = t, this.drawData[this.drawDataLen] = r, this.drawDataLen++;
  }, WebGLDrawCmdManager.prototype.pushPushMask = function (e) {
    void 0 === e && (e = 1);var t = this.drawData[this.drawDataLen] || {};t.type = 2, t.count = 2 * e, this.drawData[this.drawDataLen] = t, this.drawDataLen++;
  }, WebGLDrawCmdManager.prototype.pushPopMask = function (e) {
    void 0 === e && (e = 1);var t = this.drawData[this.drawDataLen] || {};t.type = 3, t.count = 2 * e, this.drawData[this.drawDataLen] = t, this.drawDataLen++;
  }, WebGLDrawCmdManager.prototype.pushSetBlend = function (e) {
    var t = !1;for (var r = this.drawDataLen - 1; 0 <= r; r--) {
      var a = this.drawData[r];if (a) if ((t = 0 == a.type || 1 == a.type ? !0 : t) || 4 != a.type) {
        if (4 == a.type) {
          if (a.value == e) return;break;
        }
      } else this.drawData.splice(r, 1), this.drawDataLen--;
    }var n = this.drawData[this.drawDataLen] || {};n.type = 4, n.value = e, this.drawData[this.drawDataLen] = n, this.drawDataLen++;
  }, WebGLDrawCmdManager.prototype.pushResize = function (e, t, r) {
    var a = this.drawData[this.drawDataLen] || {};a.type = 5, a.buffer = e, a.width = t, a.height = r, this.drawData[this.drawDataLen] = a, this.drawDataLen++;
  }, WebGLDrawCmdManager.prototype.pushClearColor = function () {
    var e = this.drawData[this.drawDataLen] || {};e.type = 6, this.drawData[this.drawDataLen] = e, this.drawDataLen++;
  }, WebGLDrawCmdManager.prototype.pushActivateBuffer = function (e) {
    var t = !1;for (var r = this.drawDataLen - 1; 0 <= r; r--) {
      var a = this.drawData[r];a && ((t = 4 != a.type && 7 != a.type ? !0 : t) || 7 != a.type || (this.drawData.splice(r, 1), this.drawDataLen--));
    }var n = this.drawData[this.drawDataLen] || {};n.type = 7, n.buffer = e, n.width = e.rootRenderTarget.width, n.height = e.rootRenderTarget.height, this.drawData[this.drawDataLen] = n, this.drawDataLen++;
  }, WebGLDrawCmdManager.prototype.pushEnableScissor = function (e, t, r, a) {
    var n = this.drawData[this.drawDataLen] || {};n.type = 8, n.x = e, n.y = t, n.width = r, n.height = a, this.drawData[this.drawDataLen] = n, this.drawDataLen++;
  }, WebGLDrawCmdManager.prototype.pushDisableScissor = function () {
    var e = this.drawData[this.drawDataLen] || {};e.type = 9, this.drawData[this.drawDataLen] = e, this.drawDataLen++;
  }, WebGLDrawCmdManager.prototype.clear = function () {
    for (var e = 0; e < this.drawDataLen; e++) {
      var t = this.drawData[e];t.type = 0, t.count = 0, t.texture = null, t.filter = null, t.value = "", t.buffer = null, t.width = 0, t.height = 0, t.textureWidth = 0, t.textureHeight = 0, t.smoothing = !1, t.x = 0, t.y = 0;
    }this.drawDataLen = 0;
  }, e = WebGLDrawCmdManager, t.WebGLDrawCmdManager = e, __reflect(e.prototype, "egret.wxgame.WebGLDrawCmdManager");
}(egret = egret || {}), function (k) {
  function WebGLVertexArrayObject() {
    this.vertSize = 5, this.vertByteSize = 4 * this.vertSize, this.maxQuadsCount = 2048, this.maxVertexCount = 4 * this.maxQuadsCount, this.maxIndicesCount = 6 * this.maxQuadsCount, this.vertices = null, this.indices = null, this.indicesForMesh = null, this.vertexIndex = 0, this.indexIndex = 0, this.hasMesh = !1, this._vertices = null, this._verticesFloat32View = null, this._verticesUint32View = null;var e = this.maxVertexCount * this.vertSize;this.vertices = new Float32Array(e), this._vertices = new ArrayBuffer(this.maxVertexCount * this.vertByteSize), this._verticesFloat32View = new Float32Array(this._vertices), this._verticesUint32View = new Uint32Array(this._vertices), this.vertices = this._verticesFloat32View;var t = this.maxIndicesCount;this.indices = new Uint16Array(t), this.indicesForMesh = new Uint16Array(t);for (var r = 0, a = 0; r < t; r += 6, a += 4) this.indices[r + 0] = a + 0, this.indices[r + 1] = a + 1, this.indices[r + 2] = a + 2, this.indices[r + 3] = a + 0, this.indices[r + 4] = a + 2, this.indices[r + 5] = a + 3;
  }function isIOS14Device() {
    return k.Capabilities.runtimeType == k.RuntimeType.WEB && "iOS" == k.Capabilities.os && k.Capabilities.isMobile && /iPhone OS 14/.test(window.navigator.userAgent);
  }var e, t;e = k.wxgame || (k.wxgame = {}), WebGLVertexArrayObject.prototype.reachMaxSize = function (e, t) {
    return void 0 === t && (t = 6), this.vertexIndex > this.maxVertexCount - (e = void 0 === e ? 4 : e) || this.indexIndex > this.maxIndicesCount - t;
  }, WebGLVertexArrayObject.prototype.getVertices = function () {
    return this.vertices.subarray(0, this.vertexIndex * this.vertSize);
  }, WebGLVertexArrayObject.prototype.getIndices = function () {
    return this.indices;
  }, WebGLVertexArrayObject.prototype.getMeshIndices = function () {
    return this.indicesForMesh;
  }, WebGLVertexArrayObject.prototype.changeToMeshIndices = function () {
    if (!this.hasMesh) {
      for (var e = 0, t = this.indexIndex; e < t; ++e) this.indicesForMesh[e] = this.indices[e];this.hasMesh = !0;
    }
  }, WebGLVertexArrayObject.prototype.isMesh = function () {
    return this.hasMesh;
  }, WebGLVertexArrayObject.prototype.cacheArrays = function (e, t, r, a, n, i, o, s, c, h, l, d, u, f, p) {
    var g = e.globalAlpha;g = Math.min(g, 1);var v = e.globalTintColor || 16777215;var x = e.currentTexture;g = g < 1 && x && x[k.UNPACK_PREMULTIPLY_ALPHA_WEBGL] ? k.WebGLUtils.premultiplyTint(v, g) : v + (255 * g << 24);v = e.globalMatrix;var b = v.a;var m = v.b;var T = v.c;var y = v.d;var w = v.tx;var E = v.ty;v = e.$offsetX;e = e.$offsetY;if (0 == v && 0 == e || (w = v * b + e * T + w, E = v * m + e * y + E), u || (0 == i && 0 == o || (w = i * b + o * T + w, E = i * m + o * y + E), 1 != (U = s / a) && (b *= U, m *= U), 1 != (N = c / n) && (T *= N, y *= N)), u) {
      if (isIOS14Device()) {
        var L = [];var _ = this.vertices;var R = this._verticesUint32View;var C = this.vertexIndex * this.vertSize;var W = 0,
            S = 0,
            G = 0;var B = 0,
            M = 0,
            O = 0,
            A = 0;for (W = 0, G = d.length; W < G; W += 2) S = C + 5 * W / 2, O = u[W], A = u[W + 1], B = d[W], M = d[W + 1], p ? L.push([b * O + T * A + w, m * O + y * A + E, (t + (1 - M) * n) / h, (r + B * a) / l]) : L.push([b * O + T * A + w, m * O + y * A + E, (t + B * a) / h, (r + M * n) / l]), R[S + 4] = g;for (var I = 0; I < f.length; I += 3) {
          var D = L[f[I]];_[C++] = D[0], _[C++] = D[1], _[C++] = D[2], _[C++] = D[3], R[C++] = g;D = L[f[I + 1]];_[C++] = D[0], _[C++] = D[1], _[C++] = D[2], _[C++] = D[3], R[C++] = g;D = L[f[I + 2]];_[C++] = D[0], _[C++] = D[1], _[C++] = D[2], _[C++] = D[3], R[C++] = g, _[C++] = D[0], _[C++] = D[1], _[C++] = D[2], _[C++] = D[3], R[C++] = g;
        }var P = f.length / 3;this.vertexIndex += 4 * P, this.indexIndex += 6 * P;
      } else {
        _ = this.vertices;R = this._verticesUint32View;C = this.vertexIndex * this.vertSize;W = 0, S = 0, G = 0;B = 0, M = 0, O = 0, A = 0;for (W = 0, G = d.length; W < G; W += 2) O = u[W], A = u[W + 1], B = d[W], M = d[W + 1], _[(S = C + 5 * W / 2) + 0] = b * O + T * A + w, _[S + 1] = m * O + y * A + E, p ? (_[S + 2] = (t + (1 - M) * n) / h, _[S + 3] = (r + B * a) / l) : (_[S + 2] = (t + B * a) / h, _[S + 3] = (r + M * n) / l), R[S + 4] = g;if (this.hasMesh) for (var F = 0, $ = f.length; F < $; ++F) this.indicesForMesh[this.indexIndex + F] = f[F] + this.vertexIndex;this.vertexIndex += d.length / 2, this.indexIndex += f.length;
      }
    } else {
      s = h;var U = l;c = a;var N = n;t /= s, r /= U;_ = this.vertices;R = this._verticesUint32View;C = this.vertexIndex * this.vertSize;p ? (P = a, a = n / s, n = P / U, _[C++] = w, _[C++] = E, _[C++] = a + t, _[C++] = r, R[C++] = g, _[C++] = b * c + w, _[C++] = m * c + E, _[C++] = a + t, _[C++] = n + r, R[C++] = g, _[C++] = b * c + T * N + w, _[C++] = y * N + m * c + E, _[C++] = t, _[C++] = n + r, R[C++] = g, _[C++] = T * N + w, _[C++] = y * N + E, _[C++] = t, _[C++] = r) : (a /= s, n /= U, _[C++] = w, _[C++] = E, _[C++] = t, _[C++] = r, R[C++] = g, _[C++] = b * c + w, _[C++] = m * c + E, _[C++] = a + t, _[C++] = r, R[C++] = g, _[C++] = b * c + T * N + w, _[C++] = y * N + m * c + E, _[C++] = a + t, _[C++] = n + r, R[C++] = g, _[C++] = T * N + w, _[C++] = y * N + E, _[C++] = t, _[C++] = n + r), R[C++] = g, this.hasMesh && ((N = this.indicesForMesh)[this.indexIndex + 0] = 0 + this.vertexIndex, N[this.indexIndex + 1] = 1 + this.vertexIndex, N[this.indexIndex + 2] = 2 + this.vertexIndex, N[this.indexIndex + 3] = 0 + this.vertexIndex, N[this.indexIndex + 4] = 2 + this.vertexIndex, N[this.indexIndex + 5] = 3 + this.vertexIndex), this.vertexIndex += 4, this.indexIndex += 6;
    }
  }, WebGLVertexArrayObject.prototype.clear = function () {
    this.hasMesh = !1, this.vertexIndex = 0, this.indexIndex = 0;
  }, t = WebGLVertexArrayObject, e.WebGLVertexArrayObject = t, __reflect(t.prototype, "egret.wxgame.WebGLVertexArrayObject"), e.isIOS14Device = isIOS14Device;
}(egret = egret || {}), function (r) {
  function WebGLRenderTarget(e, t, r) {
    var a = n.call(this) || this;return a.clearColor = [0, 0, 0, 0], a.useFrameBuffer = !0, a.gl = e, a._resize(t, r), a;
  }var t, e, n;t = r.wxgame || (r.wxgame = {}), n = r.HashObject, __extends(WebGLRenderTarget, n), WebGLRenderTarget.prototype._resize = function (e, t) {
    t = t || 1, (e = e || 1) < 1 && (r.warn("WebGLRenderTarget _resize width = " + e), e = 1), t < 1 && (r.warn("WebGLRenderTarget _resize height = " + t), t = 1), this.width = e, this.height = t;
  }, WebGLRenderTarget.prototype.resize = function (e, t) {
    this._resize(e, t);t = this.gl;this.frameBuffer && (t.bindTexture(t.TEXTURE_2D, this.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, this.width, this.height, 0, t.RGBA, t.UNSIGNED_BYTE, null)), this.stencilBuffer && (t.deleteRenderbuffer(this.stencilBuffer), this.stencilBuffer = null);
  }, WebGLRenderTarget.prototype.activate = function () {
    var e = this.gl;e.bindFramebuffer(e.FRAMEBUFFER, this.getFrameBuffer());
  }, WebGLRenderTarget.prototype.getFrameBuffer = function () {
    return this.useFrameBuffer ? this.frameBuffer : null;
  }, WebGLRenderTarget.prototype.initFrameBuffer = function () {
    var e;this.frameBuffer || (e = this.gl, this.texture = this.createTexture(), this.frameBuffer = e.createFramebuffer(), e.bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture, 0));
  }, WebGLRenderTarget.prototype.createTexture = function () {
    var e = t.WebGLRenderContext.getInstance(0, 0);return r.sys._createTexture(e, this.width, this.height, null);
  }, WebGLRenderTarget.prototype.clear = function (e) {
    var t = this.gl;e && this.activate(), t.colorMask(!0, !0, !0, !0), t.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], this.clearColor[3]), t.clear(t.COLOR_BUFFER_BIT);
  }, WebGLRenderTarget.prototype.enabledStencil = function () {
    var e;this.frameBuffer && !this.stencilBuffer && ((e = this.gl).bindFramebuffer(e.FRAMEBUFFER, this.frameBuffer), this.stencilBuffer = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, this.stencilBuffer), e.renderbufferStorage(e.RENDERBUFFER, e.DEPTH_STENCIL, this.width, this.height), e.framebufferRenderbuffer(e.FRAMEBUFFER, e.DEPTH_STENCIL_ATTACHMENT, e.RENDERBUFFER, this.stencilBuffer));
  }, WebGLRenderTarget.prototype.dispose = function () {
    r.WebGLUtils.deleteWebGLTexture(this.texture);
  }, e = WebGLRenderTarget, t.WebGLRenderTarget = e, __reflect(e.prototype, "egret.wxgame.WebGLRenderTarget");
}(egret = egret || {}), function (l) {
  function WebGLRenderContext(e, t, r) {
    this._defaultEmptyTexture = null, this.glID = null, this.projectionX = NaN, this.projectionY = NaN, this.contextLost = !1, this._supportedCompressedTextureInfo = [], this.$scissorState = !1, this.vertSize = 5, this.$beforeRender = function () {
      var e = this.context;e.bindBuffer(e.ARRAY_BUFFER, this.vertexBuffer), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.indexBuffer), e.disable(e.DEPTH_TEST), e.disable(e.CULL_FACE), e.enable(e.BLEND), e.disable(e.STENCIL_TEST), e.colorMask(!0, !0, !0, !0), this.setBlendMode("source-over"), e.activeTexture(e.TEXTURE0), this.currentProgram = null;
    }, this.surface = l.sys.mainCanvas(e, t), l.nativeRender || (this.initWebGL(r), this.getSupportedCompressedTexture(), this.$bufferStack = [], r = this.context, this.vertexBuffer = r.createBuffer(), this.indexBuffer = r.createBuffer(), r.bindBuffer(r.ARRAY_BUFFER, this.vertexBuffer), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, this.indexBuffer), this.drawCmdManager = new m.WebGLDrawCmdManager(), this.vao = new m.WebGLVertexArrayObject(), this.setGlobalCompositeOperation("source-over"));
  }var m, c, e;m = l.wxgame || (l.wxgame = {}), c = {}, WebGLRenderContext.getInstance = function (e, t, r) {
    return this.instance || (this.instance = new WebGLRenderContext(e, t, r), this.instance);
  }, WebGLRenderContext.prototype.pushBuffer = function (e) {
    this.$bufferStack.push(e), e != this.currentBuffer && (this.currentBuffer, this.drawCmdManager.pushActivateBuffer(e)), this.currentBuffer = e;
  }, WebGLRenderContext.prototype.popBuffer = function () {
    var e;this.$bufferStack.length <= 1 || (this.$bufferStack.pop() != (e = this.$bufferStack[this.$bufferStack.length - 1]) && this.drawCmdManager.pushActivateBuffer(e), this.currentBuffer = e);
  }, WebGLRenderContext.prototype.activateBuffer = function (e, t, r) {
    e.rootRenderTarget.activate(), this.bindIndices || this.uploadIndicesArray(this.vao.getIndices()), e.restoreStencil(), e.restoreScissor(), this.onResize(t, r);
  }, WebGLRenderContext.prototype.uploadVerticesArray = function (e) {
    var t = this.context;t.bufferData(t.ARRAY_BUFFER, e, t.STREAM_DRAW);
  }, WebGLRenderContext.prototype.uploadIndicesArray = function (e) {
    var t = this.context;t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.STATIC_DRAW), this.bindIndices = !0;
  }, WebGLRenderContext.prototype.destroy = function () {
    this.surface.width = this.surface.height = 0;
  }, WebGLRenderContext.prototype.onResize = function (e, t) {
    e = e || this.surface.width, t = t || this.surface.height, this.projectionX = e / 2, this.projectionY = -t / 2, this.context && this.context.viewport(0, 0, e, t);
  }, WebGLRenderContext.prototype.resize = function (e, t, r) {
    l.sys.resizeContext(this, e, t, r);
  }, WebGLRenderContext.prototype._buildSupportedCompressedTextureInfo = function (e) {
    var t = [];for (var r = 0, a = e; r < a.length; r++) {
      var n = a[r];if (n) {
        var i = { extensionName: n.name, supportedFormats: [] };for (var o in n) i.supportedFormats.push([o, n[o]]);if (1, 0 === i.supportedFormats.length) console.error("buildSupportedCompressedTextureInfo failed = " + n.name);else for (var o in l.log("support: " + n.name), n) l.log(o, n[o], "0x" + n[o].toString(16));t.push(i);
      }
    }return t;
  }, WebGLRenderContext.prototype.initWebGL = function (e) {
    this.onResize(), this.surface.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1), this.surface.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), !1), e ? this.setContext(e) : this.getWebGLContext();e = this.context;this.$maxTextureSize = e.getParameter(e.MAX_TEXTURE_SIZE);
  }, WebGLRenderContext.prototype.getSupportedCompressedTexture = function () {
    var e = this.context || l.sys.getContextWebGL(this.surface);this.pvrtc = e.getExtension("WEBGL_compressed_texture_pvrtc") || e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"), this.pvrtc && (this.pvrtc.name = "WEBGL_compressed_texture_pvrtc"), this.etc1 = e.getExtension("WEBGL_compressed_texture_etc1") || e.getExtension("WEBKIT_WEBGL_compressed_texture_etc1"), this.etc1 && (this.etc1.name = "WEBGL_compressed_texture_etc1"), l.Capabilities._supportedCompressedTexture ? (l.Capabilities._supportedCompressedTexture = l.Capabilities._supportedCompressedTexture || {}, l.Capabilities._supportedCompressedTexture.pvrtc = !!this.pvrtc, l.Capabilities._supportedCompressedTexture.etc1 = !!this.etc1) : (l.Capabilities.supportedCompressedTexture = l.Capabilities._supportedCompressedTexture || {}, l.Capabilities.supportedCompressedTexture.pvrtc = !!this.pvrtc, l.Capabilities.supportedCompressedTexture.etc1 = !!this.etc1), this._supportedCompressedTextureInfo = this._buildSupportedCompressedTextureInfo([this.etc1, this.pvrtc]);
  }, WebGLRenderContext.prototype.handleContextLost = function () {
    this.contextLost = !0;
  }, WebGLRenderContext.prototype.handleContextRestored = function () {
    this.initWebGL(), this.contextLost = !1;
  }, WebGLRenderContext.prototype.getWebGLContext = function () {
    var e = l.sys.getContextWebGL(this.surface);return this.setContext(e), e;
  }, WebGLRenderContext.prototype.setContext = function (e) {
    (this.context = e).id = WebGLRenderContext.glContextId++, this.glID = e.id, e.disable(e.DEPTH_TEST), e.disable(e.CULL_FACE), e.enable(e.BLEND), e.colorMask(!0, !0, !0, !0), e.activeTexture(e.TEXTURE0);
  }, WebGLRenderContext.prototype.enableStencilTest = function () {
    var e = this.context;e.enable(e.STENCIL_TEST);
  }, WebGLRenderContext.prototype.disableStencilTest = function () {
    var e = this.context;e.disable(e.STENCIL_TEST);
  }, WebGLRenderContext.prototype.enableScissorTest = function (e) {
    var t = this.context;t.enable(t.SCISSOR_TEST), t.scissor(e.x, e.y, e.width, e.height);
  }, WebGLRenderContext.prototype.disableScissorTest = function () {
    var e = this.context;e.disable(e.SCISSOR_TEST);
  }, WebGLRenderContext.prototype.getPixels = function (e, t, r, a, n) {
    var i = this.context;i.readPixels(e, t, r, a, i.RGBA, i.UNSIGNED_BYTE, n);
  }, WebGLRenderContext.prototype.createTexture = function (e) {
    return l.sys.createTexture(this, e);
  }, WebGLRenderContext.prototype.checkCompressedTextureInternalFormat = function (e, t) {
    for (var r = 0, a = e.length; r < a; ++r) {
      var n = e[r].supportedFormats;for (var i = 0, o = n.length; i < o; ++i) if (n[i][1] === t) return !0;
    }return !1;
  }, WebGLRenderContext.prototype.$debugLogCompressedTextureNotSupported = function (e, t) {
    if (!c[t]) {
      c[t] = !0, l.log("internalFormat = " + t + ":0x" + t.toString(16) + ", the current hardware does not support the corresponding compression format.");for (var r = 0, a = e.length; r < a; ++r) {
        var n = e[r];if (0 < n.supportedFormats.length) {
          l.log("support = " + n.extensionName);for (var i = 0, o = n.supportedFormats.length; i < o; ++i) {
            var s = n.supportedFormats[i];l.log(s[0] + " : " + s[1] + " : 0x" + s[1].toString(16));
          }
        }
      }
    }
  }, WebGLRenderContext.prototype.createCompressedTexture = function (e, t, r, a, n) {
    if (!this.checkCompressedTextureInternalFormat(this._supportedCompressedTextureInfo, n)) return this.$debugLogCompressedTextureNotSupported(this._supportedCompressedTextureInfo, n), this.defaultEmptyTexture;var i = this.context;var o = i.createTexture();if (o) return o[l.glContext] = i, o[l.is_compressed_texture] = !0, i.bindTexture(i.TEXTURE_2D, o), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), o[l.UNPACK_PREMULTIPLY_ALPHA_WEBGL] = !0, i.compressedTexImage2D(i.TEXTURE_2D, a, n, t, r, 0, e), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), i.bindTexture(i.TEXTURE_2D, null), o;this.contextLost = !0;
  }, WebGLRenderContext.prototype.updateTexture = function (e, t) {
    var r = this.context;r.bindTexture(r.TEXTURE_2D, e), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t);
  }, Object.defineProperty(WebGLRenderContext.prototype, "defaultEmptyTexture", { get: function () {
      var e, t;return this._defaultEmptyTexture || (e = l.sys.createCanvas(16, 16), (t = l.sys.getContext2d(e)).fillStyle = "white", t.fillRect(0, 0, 16, 16), this._defaultEmptyTexture = this.createTexture(e), this._defaultEmptyTexture[l.engine_default_empty_texture] = !0), this._defaultEmptyTexture;
    }, enumerable: !0, configurable: !0 }), WebGLRenderContext.prototype.getWebGLTexture = function (e) {
    var t;return e.webGLTexture || ("image" != e.format || e.hasCompressed2d() ? e.hasCompressed2d() && (t = e.getCompressed2dTextureData(), e.webGLTexture = this.createCompressedTexture(t.byteArray, t.width, t.height, t.level, t.glInternalFormat), !(t = e.etcAlphaMask) || (t = this.getWebGLTexture(t)) && (e.webGLTexture[l.etc_alpha_mask] = t)) : e.webGLTexture = this.createTexture(e.source), e.$deleteSource && e.webGLTexture && (e.source && (e.source.src = "", e.source = null), e.clearCompressedTextureData()), e.webGLTexture && (e.webGLTexture.smoothing = !0)), e.webGLTexture;
  }, WebGLRenderContext.prototype.clearRect = function (e, t, r, a) {
    var n, i;0 != e || 0 != t || r != this.surface.width || a != this.surface.height ? !(n = this.currentBuffer).$hasScissor && 0 == (i = n.globalMatrix).b && 0 == i.c ? (e = e * i.a + i.tx, t = t * i.d + i.ty, r *= i.a, a *= i.d, this.enableScissor(e, -t - a + n.height, r, a), this.clear(), this.disableScissor()) : (this.setGlobalCompositeOperation("destination-out"), this.drawRect(e, t, r, a), this.setGlobalCompositeOperation("source-over")) : this.clear();
  }, WebGLRenderContext.prototype.setGlobalCompositeOperation = function (e) {
    this.drawCmdManager.pushSetBlend(e);
  }, WebGLRenderContext.prototype.drawImage = function (e, t, r, a, n, i, o, s, c, h, l, d, u) {
    var f = this.currentBuffer;if (!this.contextLost && e && f) {
      var p;var g;var v;if (e.texture || e.source && e.source.texture) p = e.texture || e.source.texture, f.saveTransform(), g = f.$offsetX, v = f.$offsetY, f.useOffset(), f.transform(1, 0, 0, -1, 0, c + 2 * o);else {
        if (!e.source && !e.webGLTexture) return;p = this.getWebGLTexture(e);
      }p && (this.drawTexture(p, t, r, a, n, i, o, s, c, h, l, void 0, void 0, void 0, void 0, d, u), e.source && e.source.texture && (f.$offsetX = g, f.$offsetY = v, f.restoreTransform()));
    }
  }, WebGLRenderContext.prototype.drawMesh = function (e, t, r, a, n, i, o, s, c, h, l, d, u, f, p, g, v) {
    var x = this.currentBuffer;if (!this.contextLost && e && x) {
      var b;var m;var T;if (e.texture || e.source && e.source.texture) b = e.texture || e.source.texture, x.saveTransform(), m = x.$offsetX, T = x.$offsetY, x.useOffset(), x.transform(1, 0, 0, -1, 0, c + 2 * o);else {
        if (!e.source && !e.webGLTexture) return;b = this.getWebGLTexture(e);
      }b && (this.drawTexture(b, t, r, a, n, i, o, s, c, h, l, d, u, f, p, g, v), (e.texture || e.source && e.source.texture) && (x.$offsetX = m, x.$offsetY = T, x.restoreTransform()));
    }
  }, WebGLRenderContext.prototype.drawTexture = function (e, t, r, a, n, i, o, s, c, h, l, d, u, f, p, g, v) {
    var x = this.currentBuffer;var b;!this.contextLost && e && x && (v = m.isIOS14Device() ? (b = f && f.length / 3 || 0, f ? this.vao.reachMaxSize(4 * b, 6 * b) && this.$drawWebGL() : this.vao.reachMaxSize() && this.$drawWebGL(), null != v && e.smoothing != v && this.drawCmdManager.pushChangeSmoothing(e, v), f ? 2 * b : 2) : (u && f ? this.vao.reachMaxSize(u.length / 2, f.length) && this.$drawWebGL() : this.vao.reachMaxSize() && this.$drawWebGL(), null != v && e.smoothing != v && this.drawCmdManager.pushChangeSmoothing(e, v), d && this.vao.changeToMeshIndices(), f ? f.length / 3 : 2), this.drawCmdManager.pushDrawTexture(e, v, this.$filter, h, l), x.currentTexture = e, this.vao.cacheArrays(x, t, r, a, n, i, o, s, c, h, l, d, u, f, g));
  }, WebGLRenderContext.prototype.drawRect = function (e, t, r, a) {
    var n = this.currentBuffer;!this.contextLost && n && (this.vao.reachMaxSize() && this.$drawWebGL(), this.drawCmdManager.pushDrawRect(), n.currentTexture = null, this.vao.cacheArrays(n, 0, 0, r, a, e, t, r, a, r, a));
  }, WebGLRenderContext.prototype.pushMask = function (e, t, r, a) {
    var n = this.currentBuffer;!this.contextLost && n && (n.$stencilList.push({ x: e, y: t, width: r, height: a }), this.vao.reachMaxSize() && this.$drawWebGL(), this.drawCmdManager.pushPushMask(), n.currentTexture = null, this.vao.cacheArrays(n, 0, 0, r, a, e, t, r, a, r, a));
  }, WebGLRenderContext.prototype.popMask = function () {
    var e = this.currentBuffer;var t;!this.contextLost && e && (t = e.$stencilList.pop(), this.vao.reachMaxSize() && this.$drawWebGL(), this.drawCmdManager.pushPopMask(), e.currentTexture = null, this.vao.cacheArrays(e, 0, 0, t.width, t.height, t.x, t.y, t.width, t.height, t.width, t.height));
  }, WebGLRenderContext.prototype.clear = function () {
    this.drawCmdManager.pushClearColor();
  }, WebGLRenderContext.prototype.enableScissor = function (e, t, r, a) {
    var n = this.currentBuffer;this.drawCmdManager.pushEnableScissor(e, t, r, a), n.$hasScissor = !0;
  }, WebGLRenderContext.prototype.disableScissor = function () {
    var e = this.currentBuffer;this.drawCmdManager.pushDisableScissor(), e.$hasScissor = !1;
  }, WebGLRenderContext.prototype.$drawWebGL = function () {
    if (0 != this.drawCmdManager.drawDataLen && !this.contextLost) {
      this.uploadVerticesArray(this.vao.getVertices()), this.vao.isMesh() && this.uploadIndicesArray(this.vao.getMeshIndices());var e = this.drawCmdManager.drawDataLen;var t = 0;for (var r = 0; r < e; r++) {
        var a = this.drawCmdManager.drawData[r];t = this.drawData(a, t), 7 == a.type && (this.activatedBuffer = a.buffer), 0 != a.type && 1 != a.type && 2 != a.type && 3 != a.type || this.activatedBuffer && this.activatedBuffer.$computeDrawCall && this.activatedBuffer.$drawCalls++;
      }this.vao.isMesh() && this.uploadIndicesArray(this.vao.getIndices()), this.drawCmdManager.clear(), this.vao.clear();
    }
  }, WebGLRenderContext.prototype.drawData = function (e, t) {
    if (e) {
      var r = this.context;var a = e.filter;switch (e.type) {case 0:
          a ? "custom" === a.type ? n = m.EgretWebGLProgram.getProgram(r, a.$vertexSrc, a.$fragmentSrc, a.$shaderKey) : "colorTransform" === a.type ? n = e.texture[l.etc_alpha_mask] ? (r.activeTexture(r.TEXTURE1), r.bindTexture(r.TEXTURE_2D, e.texture[l.etc_alpha_mask]), m.EgretWebGLProgram.getProgram(r, m.EgretShaderLib.default_vert, m.EgretShaderLib.colorTransform_frag_etc_alphamask_frag, "colorTransform_frag_etc_alphamask_frag")) : m.EgretWebGLProgram.getProgram(r, m.EgretShaderLib.default_vert, m.EgretShaderLib.colorTransform_frag, "colorTransform") : "blurX" === a.type || "blurY" === a.type ? n = m.EgretWebGLProgram.getProgram(r, m.EgretShaderLib.default_vert, m.EgretShaderLib.blur_frag, "blur") : "glow" === a.type && (n = m.EgretWebGLProgram.getProgram(r, m.EgretShaderLib.default_vert, m.EgretShaderLib.glow_frag, "glow")) : e.texture[l.etc_alpha_mask] ? (n = m.EgretWebGLProgram.getProgram(r, m.EgretShaderLib.default_vert, m.EgretShaderLib.texture_etc_alphamask_frag, l.etc_alpha_mask), r.activeTexture(r.TEXTURE1), r.bindTexture(r.TEXTURE_2D, e.texture[l.etc_alpha_mask])) : n = m.EgretWebGLProgram.getProgram(r, m.EgretShaderLib.default_vert, m.EgretShaderLib.texture_frag, "texture"), this.activeProgram(r, n), this.syncUniforms(n, a, e.textureWidth, e.textureHeight), t += this.drawTextureElements(e, t);break;case 1:
          n = m.EgretWebGLProgram.getProgram(r, m.EgretShaderLib.default_vert, m.EgretShaderLib.primitive_frag, "primitive"), this.activeProgram(r, n), this.syncUniforms(n, a, e.textureWidth, e.textureHeight), t += this.drawRectElements(e, t);break;case 2:
          n = m.EgretWebGLProgram.getProgram(r, m.EgretShaderLib.default_vert, m.EgretShaderLib.primitive_frag, "primitive"), this.activeProgram(r, n), this.syncUniforms(n, a, e.textureWidth, e.textureHeight), t += this.drawPushMaskElements(e, t);break;case 3:
          n = m.EgretWebGLProgram.getProgram(r, m.EgretShaderLib.default_vert, m.EgretShaderLib.primitive_frag, "primitive"), this.activeProgram(r, n), this.syncUniforms(n, a, e.textureWidth, e.textureHeight), t += this.drawPopMaskElements(e, t);break;case 4:
          this.setBlendMode(e.value);break;case 5:
          e.buffer.rootRenderTarget.resize(e.width, e.height), this.onResize(e.width, e.height);break;case 6:
          var n;this.activatedBuffer && (0 == (n = this.activatedBuffer.rootRenderTarget).width && 0 == n.height || n.clear(!0));break;case 7:
          this.activateBuffer(e.buffer, e.width, e.height);break;case 8:
          var i = this.activatedBuffer;i && (i.rootRenderTarget && i.rootRenderTarget.enabledStencil(), i.enableScissor(e.x, e.y, e.width, e.height));break;case 9:
          (i = this.activatedBuffer) && i.disableScissor();break;case 10:
          r.bindTexture(r.TEXTURE_2D, e.texture), e.smoothing ? (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR)) : (r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.NEAREST), r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.NEAREST));}return t;
    }
  }, WebGLRenderContext.prototype.activeProgram = function (e, t) {
    if (l.pro && l.pro.egret2dDriveMode || t != this.currentProgram) {
      e.useProgram(t.id);var r = t.attributes;for (var a in r) "aVertexPosition" === a ? (e.vertexAttribPointer(r.aVertexPosition.location, 2, e.FLOAT, !1, 20, 0), e.enableVertexAttribArray(r.aVertexPosition.location)) : "aTextureCoord" === a ? (e.vertexAttribPointer(r.aTextureCoord.location, 2, e.FLOAT, !1, 20, 8), e.enableVertexAttribArray(r.aTextureCoord.location)) : "aColor" === a && (e.vertexAttribPointer(r.aColor.location, 4, e.UNSIGNED_BYTE, !0, 20, 16), e.enableVertexAttribArray(r.aColor.location));this.currentProgram = t;
    }
  }, WebGLRenderContext.prototype.syncUniforms = function (e, t, r, a) {
    var n = e.uniforms;t && t.type;for (var i in n) if ("$filterScale" != i) if ("projectionVector" === i) n[i].setValue({ x: this.projectionX, y: this.projectionY });else if ("uTextureSize" === i) n[i].setValue({ x: r, y: a });else if ("uSampler" === i) n[i].setValue(0);else if ("uSamplerAlphaMask" === i) n[i].setValue(1);else {
      var o = t.$uniforms[i];if (void 0 !== o) {
        if ("glow" == t.type || 0 == t.type.indexOf("blur")) if ("blurX" == i || "blurY" == i || "dist" == i) o *= t.$uniforms.$filterScale || 1;else if ("blur" == i && null != o.x && null != o.y) {
          var s = { x: 0, y: 0 };s.x = o.x * (null != t.$uniforms.$filterScale ? t.$uniforms.$filterScale : 1), s.y = o.y * (null != t.$uniforms.$filterScale ? t.$uniforms.$filterScale : 1), n[i].setValue(s);continue;
        }n[i].setValue(o);
      }
    }
  }, WebGLRenderContext.prototype.drawTextureElements = function (e, t) {
    return l.sys.drawTextureElements(this, e, t);
  }, WebGLRenderContext.prototype.drawRectElements = function (e, t) {
    var r = this.context;e = 3 * e.count;return r.drawElements(r.TRIANGLES, e, r.UNSIGNED_SHORT, 2 * t), e;
  }, WebGLRenderContext.prototype.drawPushMaskElements = function (e, t) {
    var r = this.context;var a = 3 * e.count;var n = this.activatedBuffer;return n && (n.rootRenderTarget && n.rootRenderTarget.enabledStencil(), 0 == n.stencilHandleCount && (n.enableStencil(), r.clear(r.STENCIL_BUFFER_BIT)), e = n.stencilHandleCount, n.stencilHandleCount++, r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.EQUAL, e, 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR), r.drawElements(r.TRIANGLES, a, r.UNSIGNED_SHORT, 2 * t), r.stencilFunc(r.EQUAL, e + 1, 255), r.colorMask(!0, !0, !0, !0), r.stencilOp(r.KEEP, r.KEEP, r.KEEP)), a;
  }, WebGLRenderContext.prototype.drawPopMaskElements = function (e, t) {
    var r = this.context;var a = 3 * e.count;e = this.activatedBuffer;return e && (e.stencilHandleCount--, 0 == e.stencilHandleCount ? e.disableStencil() : (e = e.stencilHandleCount, r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.EQUAL, e + 1, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR), r.drawElements(r.TRIANGLES, a, r.UNSIGNED_SHORT, 2 * t), r.stencilFunc(r.EQUAL, e, 255), r.colorMask(!0, !0, !0, !0), r.stencilOp(r.KEEP, r.KEEP, r.KEEP))), a;
  }, WebGLRenderContext.prototype.setBlendMode = function (e) {
    var t = this.context;e = WebGLRenderContext.blendModesForGL[e];e && t.blendFunc(e[0], e[1]);
  }, WebGLRenderContext.prototype.drawTargetWidthFilters = function (e, t) {
    var r = t,
        a = e.length;if (1 < a) for (var n = 0; n < a - 1; n++) {
      var i = e[n];var o = t.rootRenderTarget.width;var s = t.rootRenderTarget.height;o = m.WebGLRenderBuffer.create(o, s);s = Math.max(l.sys.DisplayList.$canvasScaleFactor, 2);o.setTransform(s, 0, 0, s, 0, 0), o.globalAlpha = 1, this.drawToRenderTarget(i, t, o), t != r && m.WebGLRenderBuffer.release(t), t = o;
    }var c = e[a - 1];this.drawToRenderTarget(c, t, this.currentBuffer), t != r && m.WebGLRenderBuffer.release(t);
  }, WebGLRenderContext.prototype.drawToRenderTarget = function (e, t, r) {
    var a, n, i, o, s, c, h;this.contextLost || (this.vao.reachMaxSize() && this.$drawWebGL(), this.pushBuffer(r), i = (a = t).rootRenderTarget.width, o = t.rootRenderTarget.height, "blur" == e.type && (h = e.blurXFilter, s = e.blurYFilter, e = 0 != h.blurX && 0 != s.blurY ? (n = m.WebGLRenderBuffer.create(i, o), c = Math.max(l.sys.DisplayList.$canvasScaleFactor, 2), n.setTransform(1, 0, 0, 1, 0, 0), n.transform(c, 0, 0, c, 0, 0), n.globalAlpha = 1, this.drawToRenderTarget(e.blurXFilter, t, n), t != a && m.WebGLRenderBuffer.release(t), t = n, s) : 0 === h.blurX ? s : h), r.saveTransform(), h = Math.max(l.sys.DisplayList.$canvasScaleFactor, 2), r.transform(1 / h, 0, 0, 1 / h, 0, 0), r.transform(1, 0, 0, -1, 0, o), r.currentTexture = t.rootRenderTarget.texture, this.vao.cacheArrays(r, 0, 0, i, o, 0, 0, i, o, i, o), r.restoreTransform(), this.drawCmdManager.pushDrawTexture(t.rootRenderTarget.texture, 2, e, i, o), t != a && m.WebGLRenderBuffer.release(t), this.popBuffer());
  }, WebGLRenderContext.initBlendMode = function () {
    (WebGLRenderContext.blendModesForGL = {})["source-over"] = [1, 771], WebGLRenderContext.blendModesForGL.lighter = [1, 1], WebGLRenderContext.blendModesForGL["lighter-in"] = [770, 771], WebGLRenderContext.blendModesForGL["destination-out"] = [0, 771], WebGLRenderContext.blendModesForGL["destination-in"] = [0, 770];
  }, WebGLRenderContext.glContextId = 0, WebGLRenderContext.blendModesForGL = null, e = WebGLRenderContext, m.WebGLRenderContext = e, __reflect(e.prototype, "egret.wxgame.WebGLRenderContext", ["egret.sys.RenderContext"]), e.initBlendMode(), l.sys.WebGLRenderContext = e;
}(egret = egret || {}), function (u) {
  !function (n) {
    var e = (i = u.HashObject, __extends(WebGLRenderBuffer, i), WebGLRenderBuffer.prototype.enableStencil = function () {
      this.stencilState || (this.context.enableStencilTest(), this.stencilState = !0);
    }, WebGLRenderBuffer.prototype.disableStencil = function () {
      this.stencilState && (this.context.disableStencilTest(), this.stencilState = !1);
    }, WebGLRenderBuffer.prototype.restoreStencil = function () {
      this.stencilState ? this.context.enableStencilTest() : this.context.disableStencilTest();
    }, WebGLRenderBuffer.prototype.enableScissor = function (e, t, r, a) {
      this.$scissorState || (this.$scissorState = !0, this.scissorRect.setTo(e, t, r, a), this.context.enableScissorTest(this.scissorRect));
    }, WebGLRenderBuffer.prototype.disableScissor = function () {
      this.$scissorState && (this.$scissorState = !1, this.scissorRect.setEmpty(), this.context.disableScissorTest());
    }, WebGLRenderBuffer.prototype.restoreScissor = function () {
      this.$scissorState ? this.context.enableScissorTest(this.scissorRect) : this.context.disableScissorTest();
    }, Object.defineProperty(WebGLRenderBuffer.prototype, "width", { get: function () {
        return (u.nativeRender ? this.surface : this.rootRenderTarget).width;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(WebGLRenderBuffer.prototype, "height", { get: function () {
        return (u.nativeRender ? this.surface : this.rootRenderTarget).height;
      }, enumerable: !0, configurable: !0 }), WebGLRenderBuffer.prototype.resize = function (e, t, r) {
      e = e || 1, t = t || 1, u.nativeRender ? this.surface.resize(e, t) : (this.context.pushBuffer(this), e == this.rootRenderTarget.width && t == this.rootRenderTarget.height || (this.context.drawCmdManager.pushResize(this, e, t), this.rootRenderTarget.width = e, this.rootRenderTarget.height = t), this.root && this.context.resize(e, t, r), this.context.clear(), this.context.popBuffer());
    }, WebGLRenderBuffer.prototype.getPixels = function (e, t, r, a) {
      void 0 === r && (r = 1), void 0 === a && (a = 1);var n = new Uint8Array(4 * r * a);var i;u.nativeRender ? (egret_native.activateBuffer(this), egret_native.nrGetPixels(e, t, r, a, n), egret_native.activateBuffer(null)) : (i = this.rootRenderTarget.useFrameBuffer, this.rootRenderTarget.useFrameBuffer = !0, this.rootRenderTarget.activate(), this.context.getPixels(e, t, r, a, n), this.rootRenderTarget.useFrameBuffer = i, this.rootRenderTarget.activate());var o = new Uint8Array(4 * r * a);for (var s = 0; s < a; s++) for (var c = 0; c < r; c++) {
        var h = 4 * (r * (a - s - 1) + c);var l = 4 * (r * s + c);var d = n[3 + l];o[h] = Math.round(n[l] / d * 255), o[1 + h] = Math.round(n[1 + l] / d * 255), o[2 + h] = Math.round(n[2 + l] / d * 255), o[3 + h] = n[3 + l];
      }return o;
    }, WebGLRenderBuffer.prototype.toDataURL = function (e, t) {
      return this.context.surface.toDataURL(e, t);
    }, WebGLRenderBuffer.prototype.destroy = function () {
      this.context.destroy();
    }, WebGLRenderBuffer.prototype.onRenderFinish = function () {
      this.$drawCalls = 0;
    }, WebGLRenderBuffer.prototype.drawFrameBufferToSurface = function (e, t, r, a, n, i, o, s, c) {
      void 0 === c && (c = !1), this.rootRenderTarget.useFrameBuffer = !1, this.rootRenderTarget.activate(), this.context.disableStencilTest(), this.context.disableScissorTest(), this.setTransform(1, 0, 0, 1, 0, 0), this.globalAlpha = 1, this.context.setGlobalCompositeOperation("source-over"), c && this.context.clear(), this.context.drawImage(this.rootRenderTarget, e, t, r, a, n, i, o, s, r, a, !1), this.context.$drawWebGL(), this.rootRenderTarget.useFrameBuffer = !0, this.rootRenderTarget.activate(), this.restoreStencil(), this.restoreScissor();
    }, WebGLRenderBuffer.prototype.drawSurfaceToFrameBuffer = function (e, t, r, a, n, i, o, s, c) {
      void 0 === c && (c = !1), this.rootRenderTarget.useFrameBuffer = !0, this.rootRenderTarget.activate(), this.context.disableStencilTest(), this.context.disableScissorTest(), this.setTransform(1, 0, 0, 1, 0, 0), this.globalAlpha = 1, this.context.setGlobalCompositeOperation("source-over"), c && this.context.clear(), this.context.drawImage(this.context.surface, e, t, r, a, n, i, o, s, r, a, !1), this.context.$drawWebGL(), this.rootRenderTarget.useFrameBuffer = !1, this.rootRenderTarget.activate(), this.restoreStencil(), this.restoreScissor();
    }, WebGLRenderBuffer.prototype.clear = function () {
      this.context.pushBuffer(this), this.context.clear(), this.context.popBuffer();
    }, WebGLRenderBuffer.prototype.setTransform = function (e, t, r, a, n, i) {
      var o = this.globalMatrix;o.a = e, o.b = t, o.c = r, o.d = a, o.tx = n, o.ty = i;
    }, WebGLRenderBuffer.prototype.transform = function (e, t, r, a, n, i) {
      var o = this.globalMatrix;var s = o.a;var c = o.b;var h = o.c;var l = o.d;1 == e && 0 == t && 0 == r && 1 == a || (o.a = e * s + t * h, o.b = e * c + t * l, o.c = r * s + a * h, o.d = r * c + a * l), o.tx = n * s + i * h + o.tx, o.ty = n * c + i * l + o.ty;
    }, WebGLRenderBuffer.prototype.useOffset = function () {
      var e = this;0 == e.$offsetX && 0 == e.$offsetY || (e.globalMatrix.append(1, 0, 0, 1, e.$offsetX, e.$offsetY), e.$offsetX = e.$offsetY = 0);
    }, WebGLRenderBuffer.prototype.saveTransform = function () {
      var e = this.globalMatrix;var t = this.savedGlobalMatrix;t.a = e.a, t.b = e.b, t.c = e.c, t.d = e.d, t.tx = e.tx, t.ty = e.ty;
    }, WebGLRenderBuffer.prototype.restoreTransform = function () {
      var e = this.globalMatrix;var t = this.savedGlobalMatrix;e.a = t.a, e.b = t.b, e.c = t.c, e.d = t.d, e.tx = t.tx, e.ty = t.ty;
    }, WebGLRenderBuffer.create = function (e, t) {
      var r = o.pop();var a;return r ? (r.resize(e, t), (a = r.globalMatrix).a = 1, a.b = 0, a.c = 0, a.d = 1, a.tx = 0, a.ty = 0, r.globalAlpha = 1, r.$offsetX = 0, r.$offsetY = 0) : (r = new WebGLRenderBuffer(e, t)).$computeDrawCall = !1, r;
    }, WebGLRenderBuffer.release = function (e) {
      o.push(e);
    }, WebGLRenderBuffer.autoClear = !0, WebGLRenderBuffer);function WebGLRenderBuffer(e, t, r) {
      var a = i.call(this) || this;return a.currentTexture = null, a.globalAlpha = 1, a.globalTintColor = 16777215, a.stencilState = !1, a.$stencilList = [], a.stencilHandleCount = 0, a.$scissorState = !1, a.scissorRect = new u.Rectangle(), a.$hasScissor = !1, a.$drawCalls = 0, a.$computeDrawCall = !1, a.globalMatrix = new u.Matrix(), a.savedGlobalMatrix = new u.Matrix(), a.$offsetX = 0, a.$offsetY = 0, a.context = n.WebGLRenderContext.getInstance(e, t), u.nativeRender ? (a.surface = r ? a.context.surface : new egret_native.NativeRenderSurface(a, e, t, r), a.rootRenderTarget = null) : (a.rootRenderTarget = new n.WebGLRenderTarget(a.context.context, 3, 3), e && t && a.resize(e, t), a.root = r, a.root ? (a.context.pushBuffer(a), a.surface = a.context.surface, a.$computeDrawCall = !0) : ((r = a.context.activatedBuffer) && r.rootRenderTarget.activate(), a.rootRenderTarget.initFrameBuffer(), a.surface = a.rootRenderTarget)), a;
    }var i;n.WebGLRenderBuffer = e, __reflect(e.prototype, "egret.wxgame.WebGLRenderBuffer", ["egret.sys.RenderBuffer"]);var o = [];
  }(u.wxgame || (u.wxgame = {}));
}(egret = egret || {}), function (T) {
  function WebGLRenderer() {
    this.wxiOS10 = !1, this.nestLevel = 0;
  }var y, v, x, b, e;y = T.wxgame || (T.wxgame = {}), v = ["source-over", "lighter", "destination-out"], x = "source-over", b = [], WebGLRenderer.prototype.render = function (e, t, r, a) {
    this.nestLevel++;var n = t;t = n.context;t.pushBuffer(n), n.transform(r.a, r.b, r.c, r.d, 0, 0), this.drawDisplayObject(e, n, r.tx, r.ty, !0), t.$drawWebGL();e = n.$drawCalls;n.onRenderFinish(), t.popBuffer();t = T.Matrix.create();if (r.$invertInto(t), n.transform(t.a, t.b, t.c, t.d, 0, 0), T.Matrix.release(t), this.nestLevel--, 0 === this.nestLevel) {
      6 < b.length && (b.length = 6);var i = b.length;for (var o = 0; o < i; o++) b[o].resize(0, 0);
    }return e;
  }, WebGLRenderer.prototype.drawDisplayObject = function (e, t, r, a, n) {
    var i = 0;var o;var s = e.$displayList;if (o = s && !n ? ((e.$cacheDirty || e.$renderDirty || s.$canvasScaleX != T.sys.DisplayList.$canvasScaleX || s.$canvasScaleY != T.sys.DisplayList.$canvasScaleY) && (i += s.drawToSurface()), s.$renderNode) : e.$renderDirty ? e.$getRenderNode() : e.$renderNode, e.$cacheDirty = !1, o) {
      switch (i++, t.$offsetX = r, t.$offsetY = a, o.type) {case 1:
          this.renderBitmap(o, t);break;case 2:
          this.renderText(o, t);break;case 3:
          this.renderGraphics(o, t);break;case 4:
          this.renderGroup(o, t);break;case 5:
          this.renderMesh(o, t);break;case 6:
          this.renderNormalBitmap(o, t);}t.$offsetX = 0, t.$offsetY = 0;
    }if (s && !n) return i;var c = e.$children;if (c) {
      e.sortableChildren && e.$sortDirty && e.sortChildren();var h = c.length;for (var l = 0; l < h; l++) {
        var d = c[l];var u = void 0;var f = void 0;var p = void 0;var g = void 0;1 != d.$alpha && (p = t.globalAlpha, t.globalAlpha *= d.$alpha), 16777215 !== d.tint && (g = t.globalTintColor, t.globalTintColor = d.$tintRGB);var v = void 0;var x;switch (f = d.$useTranslate ? (b = d.$getMatrix(), u = r + d.$x, f = a + d.$y, x = t.globalMatrix, (v = T.Matrix.create()).a = x.a, v.b = x.b, v.c = x.c, v.d = x.d, v.tx = x.tx, v.ty = x.ty, t.transform(b.a, b.b, b.c, b.d, u, f), u = -d.$anchorOffsetX, -d.$anchorOffsetY) : (u = r + d.$x - d.$anchorOffsetX, a + d.$y - d.$anchorOffsetY), d.$renderMode) {case 1:
            break;case 2:
            i += this.drawWithFilter(d, t, u, f);break;case 3:
            i += this.drawWithClip(d, t, u, f);break;case 4:
            i += this.drawWithScrollRect(d, t, u, f);break;default:
            i += this.drawDisplayObject(d, t, u, f);}var b;p && (t.globalAlpha = p), g && (t.globalTintColor = g), v && ((b = t.globalMatrix).a = v.a, b.b = v.b, b.c = v.c, b.d = v.d, b.tx = v.tx, b.ty = v.ty, T.Matrix.release(v));
      }
    }return i;
  }, WebGLRenderer.prototype.drawWithFilter = function (e, t, r, a) {
    var n = 0;if (e.$children && 0 == e.$children.length && (!e.$renderNode || 0 == e.$renderNode.$getRenderCount())) return n;var i = e.$filters;var o = 0 !== e.$blendMode;var s;o && (s = (s = v[e.$blendMode]) || x);var c = e.$getOriginalBounds();var h = c.x;var l = c.y;var d = c.width;var u = c.height;if (d <= 0 || u <= 0) return n;if (!e.mask && 1 == i.length && ("colorTransform" == i[0].type || "custom" === i[0].type && 0 === i[0].padding)) {
      c = this.getRenderCount(e);if (!e.$children || 1 == c) return o && t.context.setGlobalCompositeOperation(s), t.context.$filter = i[0], e.$mask ? n += this.drawWithClip(e, t, r, a) : e.$scrollRect || e.$maskRect ? n += this.drawWithScrollRect(e, t, r, a) : n += this.drawDisplayObject(e, t, r, a), t.context.$filter = null, o && t.context.setGlobalCompositeOperation(x), n;
    }var f = Math.max(T.sys.DisplayList.$canvasScaleFactor, 2);i.forEach(function (e) {
      (e instanceof T.GlowFilter || e instanceof T.BlurFilter) && (e.$uniforms.$filterScale = f, "blur" == e.type && ((e = e).blurXFilter.$uniforms.$filterScale = f, e.blurYFilter.$uniforms.$filterScale = f));
    });u = this.createRenderBuffer(f * d, f * u);return u.saveTransform(), u.transform(f, 0, 0, f, 0, 0), u.context.pushBuffer(u), e.$mask ? n += this.drawWithClip(e, u, -h, -l) : e.$scrollRect || e.$maskRect ? n += this.drawWithScrollRect(e, u, -h, -l) : n += this.drawDisplayObject(e, u, -h, -l), u.context.popBuffer(), u.restoreTransform(), 0 < n && (o && t.context.setGlobalCompositeOperation(s), n++, t.$offsetX = r + h, t.$offsetY = a + l, a = T.Matrix.create(), l = t.globalMatrix, a.a = l.a, a.b = l.b, a.c = l.c, a.d = l.d, a.tx = l.tx, a.ty = l.ty, t.useOffset(), t.context.drawTargetWidthFilters(i, u), l.a = a.a, l.b = a.b, l.c = a.c, l.d = a.d, l.tx = a.tx, l.ty = a.ty, T.Matrix.release(a), o && t.context.setGlobalCompositeOperation(x)), b.push(u), n;
  }, WebGLRenderer.prototype.getRenderCount = function (e) {
    var t = 0;var r = e.$getRenderNode();if (r && (t += r.$getRenderCount()), e.$children) for (var a = 0, n = e.$children; a < n.length; a++) {
      var i = n[a];var o = i.$filters;if (o && 0 < o.length) return 2;i.$children ? t += this.getRenderCount(i) : (i = i.$getRenderNode()) && (t += i.$getRenderCount());
    }return t;
  }, WebGLRenderer.prototype.drawWithClip = function (e, t, r, a) {
    var n = 0;var i = 0 !== e.$blendMode;var o;i && (o = (o = v[e.$blendMode]) || x);var s = e.$scrollRect || e.$maskRect;var c = e.$mask;if (c) {
      var h = c.$getMatrix();if (0 == h.a && 0 == h.b || 0 == h.c && 0 == h.d) return n;
    }if (c || e.$children && 0 != e.$children.length) {
      var l = e.$getOriginalBounds();var d = l.x;var u = l.y;var f = l.width;h = l.height;if (f <= 0 || h <= 0) return n;l = this.createRenderBuffer(f, h);var p, g;return l.context.pushBuffer(l), n += this.drawDisplayObject(e, l, -d, -u), c && ((g = this.createRenderBuffer(f, h)).context.pushBuffer(g), (p = T.Matrix.create()).copyFrom(c.$getConcatenatedMatrix()), c.$getConcatenatedMatrixAt(e, p), p.translate(-d, -u), g.setTransform(p.a, p.b, p.c, p.d, p.tx, p.ty), T.Matrix.release(p), n += this.drawDisplayObject(c, g, 0, 0), g.context.popBuffer(), l.context.setGlobalCompositeOperation("destination-in"), l.setTransform(1, 0, 0, -1, 0, g.height), c = g.rootRenderTarget.width, p = g.rootRenderTarget.height, l.context.drawTexture(g.rootRenderTarget.texture, 0, 0, c, p, 0, 0, c, p, c, p), l.setTransform(1, 0, 0, 1, 0, 0), l.context.setGlobalCompositeOperation("source-over"), g.setTransform(1, 0, 0, 1, 0, 0), b.push(g)), l.context.setGlobalCompositeOperation(x), l.context.popBuffer(), 0 < n && (n++, i && t.context.setGlobalCompositeOperation(o), s && t.context.pushMask(s.x + r, s.y + a, s.width, s.height), p = T.Matrix.create(), g = t.globalMatrix, p.a = g.a, p.b = g.b, p.c = g.c, p.d = g.d, p.tx = g.tx, p.ty = g.ty, g.append(1, 0, 0, -1, r + d, a + u + l.height), d = l.rootRenderTarget.width, u = l.rootRenderTarget.height, t.context.drawTexture(l.rootRenderTarget.texture, 0, 0, d, u, 0, 0, d, u, d, u), s && l.context.popMask(), i && t.context.setGlobalCompositeOperation(x), (u = t.globalMatrix).a = p.a, u.b = p.b, u.c = p.c, u.d = p.d, u.tx = p.tx, u.ty = p.ty, T.Matrix.release(p)), b.push(l), n;
    }return s && t.context.pushMask(s.x + r, s.y + a, s.width, s.height), i && t.context.setGlobalCompositeOperation(o), n += this.drawDisplayObject(e, t, r, a), i && t.context.setGlobalCompositeOperation(x), s && t.context.popMask(), n;
  }, WebGLRenderer.prototype.drawWithScrollRect = function (e, t, r, a) {
    var n = 0;var i = e.$scrollRect || e.$maskRect;if (i.isEmpty()) return n;e.$scrollRect && (r -= i.x, a -= i.y);var o = t.globalMatrix;var s = t.context;var c = !1;var h, l, d, u, f, p, g, v, x, b, m, T, y;return t.$hasScissor || 0 != o.b || 0 != o.c ? t.context.pushMask(i.x + r, i.y + a, i.width, i.height) : (h = o.a, l = o.d, x = o.tx, T = o.ty, m = i.x + r, v = i.y + a, d = m + i.width, b = v + i.height, g = p = f = u = void 0, g = 1 == h && 1 == l ? (u = m + x, f = v + T, p = d + x, b + T) : (y = 0, (o = h * d + x) < (i = h * m + x) && (y = i, i = o, o = y), (m = h * m + x) < (x = h * d + x) && (y = x, x = m, m = y), u = i < x ? i : x, p = m < o ? o : m, (v = m = l * v + T) < m && (y = m, m = v, v = y), (T = b = l * b + T) < b && (y = b, b = T, T = y), f = m < b ? m : b, T < v ? v : T), s.enableScissor(u, -g + t.height, p - u, g - f), c = !0), n += this.drawDisplayObject(e, t, r, a), c ? s.disableScissor() : s.popMask(), n;
  }, WebGLRenderer.prototype.drawNodeToBuffer = function (e, t, r, a) {
    var n = t;n.context.pushBuffer(n), n.setTransform(r.a, r.b, r.c, r.d, r.tx, r.ty), this.renderNode(e, t, 0, 0, a), n.context.$drawWebGL(), n.onRenderFinish(), n.context.popBuffer();
  }, WebGLRenderer.prototype.drawDisplayToBuffer = function (e, t, r) {
    var a;t.context.pushBuffer(t), r && t.setTransform(r.a, r.b, r.c, r.d, r.tx, r.ty);var n = 0;if (a = e.$renderDirty ? e.$getRenderNode() : e.$renderNode) switch (n++, a.type) {case 1:
        this.renderBitmap(a, t);break;case 2:
        this.renderText(a, t);break;case 3:
        this.renderGraphics(a, t);break;case 4:
        this.renderGroup(a, t);break;case 5:
        this.renderMesh(a, t);break;case 6:
        this.renderNormalBitmap(a, t);}var i = e.$children;if (i) {
      var o = i.length;for (var s = 0; s < o; s++) {
        var c = i[s];switch (c.$renderMode) {case 1:
            break;case 2:
            n += this.drawWithFilter(c, t, 0, 0);break;case 3:
            n += this.drawWithClip(c, t, 0, 0);break;case 4:
            n += this.drawWithScrollRect(c, t, 0, 0);break;default:
            n += this.drawDisplayObject(c, t, 0, 0);}
      }
    }return t.context.$drawWebGL(), t.onRenderFinish(), t.context.popBuffer(), n;
  }, WebGLRenderer.prototype.renderNode = function (e, t, r, a, n) {
    switch (t.$offsetX = r, t.$offsetY = a, e.type) {case 1:
        this.renderBitmap(e, t);break;case 2:
        this.renderText(e, t);break;case 3:
        this.renderGraphics(e, t, n);break;case 4:
        this.renderGroup(e, t);break;case 5:
        this.renderMesh(e, t);break;case 6:
        this.renderNormalBitmap(e, t);}
  }, WebGLRenderer.prototype.renderNormalBitmap = function (e, t) {
    var r = e.image;r && t.context.drawImage(r, e.sourceX, e.sourceY, e.sourceW, e.sourceH, e.drawX, e.drawY, e.drawW, e.drawH, e.imageWidth, e.imageHeight, e.rotated, e.smoothing);
  }, WebGLRenderer.prototype.renderBitmap = function (e, t) {
    var r = e.image;if (r) {
      var a = e.drawData;var n = a.length;var i = 0;var o = e.matrix;var s = e.blendMode;var c = e.alpha;var h;var l;var d;var u;if (o && (h = T.Matrix.create(), d = t.globalMatrix, h.a = d.a, h.b = d.b, h.c = d.c, h.d = d.d, h.tx = d.tx, h.ty = d.ty, l = t.$offsetX, d = t.$offsetY, t.useOffset(), t.transform(o.a, o.b, o.c, o.d, o.tx, o.ty)), s && t.context.setGlobalCompositeOperation(v[s]), c == c && (u = t.globalAlpha, t.globalAlpha *= c), e.filter) {
        for (t.context.$filter = e.filter; i < n;) t.context.drawImage(r, a[i++], a[i++], a[i++], a[i++], a[i++], a[i++], a[i++], a[i++], e.imageWidth, e.imageHeight, e.rotated, e.smoothing);t.context.$filter = null;
      } else for (; i < n;) t.context.drawImage(r, a[i++], a[i++], a[i++], a[i++], a[i++], a[i++], a[i++], a[i++], e.imageWidth, e.imageHeight, e.rotated, e.smoothing);s && t.context.setGlobalCompositeOperation(x), c == c && (t.globalAlpha = u), o && ((o = t.globalMatrix).a = h.a, o.b = h.b, o.c = h.c, o.d = h.d, o.tx = h.tx, o.ty = h.ty, t.$offsetX = l, t.$offsetY = d, T.Matrix.release(h));
    }
  }, WebGLRenderer.prototype.renderMesh = function (e, t) {
    var r = e.image;var a = e.drawData;var n = a.length;var i = 0;var o = e.matrix;var s = e.blendMode;var c = e.alpha;var h;var l;var d;var u;if (o && (h = T.Matrix.create(), d = t.globalMatrix, h.a = d.a, h.b = d.b, h.c = d.c, h.d = d.d, h.tx = d.tx, h.ty = d.ty, l = t.$offsetX, d = t.$offsetY, t.useOffset(), t.transform(o.a, o.b, o.c, o.d, o.tx, o.ty)), s && t.context.setGlobalCompositeOperation(v[s]), c == c && (u = t.globalAlpha, t.globalAlpha *= c), e.filter) {
      for (t.context.$filter = e.filter; i < n;) t.context.drawMesh(r, a[i++], a[i++], a[i++], a[i++], a[i++], a[i++], a[i++], a[i++], e.imageWidth, e.imageHeight, e.uvs, e.vertices, e.indices, e.bounds, e.rotated, e.smoothing);t.context.$filter = null;
    } else for (; i < n;) t.context.drawMesh(r, a[i++], a[i++], a[i++], a[i++], a[i++], a[i++], a[i++], a[i++], e.imageWidth, e.imageHeight, e.uvs, e.vertices, e.indices, e.bounds, e.rotated, e.smoothing);s && t.context.setGlobalCompositeOperation(x), c == c && (t.globalAlpha = u), o && ((o = t.globalMatrix).a = h.a, o.b = h.b, o.c = h.c, o.d = h.d, o.tx = h.tx, o.ty = h.ty, t.$offsetX = l, t.$offsetY = d, T.Matrix.release(h));
  }, WebGLRenderer.prototype.___renderText____ = function (e, t) {
    var r = e.width - e.x;var a = e.height - e.y;if (!(r <= 0 || a <= 0) && r && a && 0 !== e.drawData.length) {
      var n = T.sys.DisplayList.$canvasScaleX;var i = T.sys.DisplayList.$canvasScaleY;var o = t.context.$maxTextureSize;o < r * n && (n *= o / (r * n)), o < a * i && (i *= o / (a * i)), r *= n, a *= i;r = e.x * n;a = e.y * i;e.$canvasScaleX === n && e.$canvasScaleY === i || (e.$canvasScaleX = n, e.$canvasScaleY = i, e.dirtyRender = !0), (r || a) && t.transform(1, 0, 0, 1, r / n, a / i), e.dirtyRender && y.TextAtlasRender.analysisTextNodeAndFlushDrawLabel(e);var s = e[y.property_drawLabel];if (s && 0 < s.length) {
        var c = t.$offsetX;var h = t.$offsetY;var l;var d;var u;var f;var p;var g;for (var v = 0, x = s.length; v < x; ++v) {
          d = (l = s[v]).anchorX, u = l.anchorY, f = l.textBlocks, t.$offsetX = c + d;for (var b = 0, m = f.length; b < m; ++b) p = f[b], 0 < b && (t.$offsetX -= p.canvasWidthOffset), t.$offsetY = h + u - (p.measureHeight + (p.stroke2 ? p.canvasHeightOffset : 0)) / 2, g = p.line.page, t.context.drawTexture(g.webGLTexture, p.u, p.v, p.contentWidth, p.contentHeight, 0, 0, p.contentWidth, p.contentHeight, g.pageWidth, g.pageHeight), t.$offsetX += p.contentWidth - p.canvasWidthOffset;
        }t.$offsetX = c, t.$offsetY = h;
      }(r || a) && t.transform(1, 0, 0, 1, -r / n, -a / i), e.dirtyRender = !1;
    }
  }, WebGLRenderer.prototype.renderText = function (e, t) {
    var r, a, n, i, o, s, c, h;y.textAtlasRenderEnable ? this.___renderText____(e, t) : (r = e.width - e.x, a = e.height - e.y, r <= 0 || a <= 0 || !r || !a || 0 == e.drawData.length || (n = T.sys.DisplayList.$canvasScaleX, i = T.sys.DisplayList.$canvasScaleY, (s = t.context.$maxTextureSize) < r * n && (n *= s / (r * n)), s < a * i && (i *= s / (a * i)), r *= n, a *= i, o = e.x * n, s = e.y * i, e.$canvasScaleX == n && e.$canvasScaleY == i || (e.$canvasScaleX = n, e.$canvasScaleY = i, e.dirtyRender = !0), this.wxiOS10 ? (this.canvasRenderer || (this.canvasRenderer = new T.CanvasRenderer()), e.dirtyRender && (this.canvasRenderBuffer = new y.CanvasRenderBuffer(r, a))) : this.canvasRenderBuffer && this.canvasRenderBuffer.context ? e.dirtyRender && this.canvasRenderBuffer.resize(r, a) : (this.canvasRenderer = new T.CanvasRenderer(), this.canvasRenderBuffer = new y.CanvasRenderBuffer(r, a)), this.canvasRenderBuffer.context && (1 == n && 1 == i || this.canvasRenderBuffer.context.setTransform(n, 0, 0, i, 0, 0), o || s ? (e.dirtyRender && this.canvasRenderBuffer.context.setTransform(n, 0, 0, i, -o, -s), t.transform(1, 0, 0, 1, o / n, s / i)) : 1 == n && 1 == i || this.canvasRenderBuffer.context.setTransform(n, 0, 0, i, 0, 0), e.dirtyRender && (h = this.canvasRenderBuffer.surface, this.canvasRenderer.renderText(e, this.canvasRenderBuffer.context), this.wxiOS10 ? (h.isCanvas = !0, e.$texture = h) : (c = e.$texture) ? t.context.updateTexture(c, h) : (c = t.context.createTexture(h), e.$texture = c), e.$textureWidth = h.width, e.$textureHeight = h.height), c = e.$textureWidth, h = e.$textureHeight, t.context.drawTexture(e.$texture, 0, 0, c, h, 0, 0, c / n, h / i, c, h), (o || s) && (e.dirtyRender && this.canvasRenderBuffer.context.setTransform(n, 0, 0, i, 0, 0), t.transform(1, 0, 0, 1, -o / n, -s / i)), e.dirtyRender = !1)));
  }, WebGLRenderer.prototype.renderGraphics = function (e, t, r) {
    var a = e.width;var n = e.height;var i, o, s, c, h;a <= 0 || n <= 0 || !a || !n || 0 == e.drawData.length || (i = T.sys.DisplayList.$canvasScaleX, o = T.sys.DisplayList.$canvasScaleY, (a * i < 1 || n * o < 1) && (i = o = 1), e.$canvasScaleX == i && e.$canvasScaleY == o || (e.$canvasScaleX = i, e.$canvasScaleY = o, e.dirtyRender = !0), a *= i, n *= o, i *= (s = Math.ceil(a)) / a, o *= (h = Math.ceil(n)) / n, a = s, n = h, this.wxiOS10 ? (this.canvasRenderer || (this.canvasRenderer = new T.CanvasRenderer()), e.dirtyRender && (this.canvasRenderBuffer = new y.CanvasRenderBuffer(a, n))) : this.canvasRenderBuffer && this.canvasRenderBuffer.context ? e.dirtyRender && this.canvasRenderBuffer.resize(a, n) : (this.canvasRenderer = new T.CanvasRenderer(), this.canvasRenderBuffer = new y.CanvasRenderBuffer(a, n)), this.canvasRenderBuffer.context && (1 == i && 1 == o || this.canvasRenderBuffer.context.setTransform(i, 0, 0, o, 0, 0), (e.x || e.y) && ((e.dirtyRender || r) && this.canvasRenderBuffer.context.translate(-e.x, -e.y), t.transform(1, 0, 0, 1, e.x, e.y)), h = this.canvasRenderBuffer.surface, r ? (this.canvasRenderer.renderGraphics(e, this.canvasRenderBuffer.context, !0), c = void 0, c = this.wxiOS10 ? (h.isCanvas = !0, h) : (T.WebGLUtils.deleteWebGLTexture(h), t.context.getWebGLTexture(h)), t.context.drawTexture(c, 0, 0, a, n, 0, 0, a, n, h.width, h.height)) : (e.dirtyRender && (this.canvasRenderer.renderGraphics(e, this.canvasRenderBuffer.context), this.wxiOS10 ? (h.isCanvas = !0, e.$texture = h) : (c = e.$texture) ? t.context.updateTexture(c, h) : (c = t.context.createTexture(h), e.$texture = c), e.$textureWidth = h.width, e.$textureHeight = h.height), c = e.$textureWidth, h = e.$textureHeight, t.context.drawTexture(e.$texture, 0, 0, c, h, 0, 0, c / i, h / o, c, h)), (e.x || e.y) && ((e.dirtyRender || r) && this.canvasRenderBuffer.context.translate(e.x, e.y), t.transform(1, 0, 0, 1, -e.x, -e.y)), r || (e.dirtyRender = !1)));
  }, WebGLRenderer.prototype.renderGroup = function (e, t) {
    var r = e.matrix;var a;var n;var i;r && (a = T.Matrix.create(), i = t.globalMatrix, a.a = i.a, a.b = i.b, a.c = i.c, a.d = i.d, a.tx = i.tx, a.ty = i.ty, n = t.$offsetX, i = t.$offsetY, t.useOffset(), t.transform(r.a, r.b, r.c, r.d, r.tx, r.ty));var o = e.drawData;var s = o.length;for (var c = 0; c < s; c++) {
      var h = o[c];this.renderNode(h, t, t.$offsetX, t.$offsetY);
    }r && ((r = t.globalMatrix).a = a.a, r.b = a.b, r.c = a.c, r.d = a.d, r.tx = a.tx, r.ty = a.ty, t.$offsetX = n, t.$offsetY = i, T.Matrix.release(a));
  }, WebGLRenderer.prototype.createRenderBuffer = function (e, t) {
    var r = b.pop();return r ? (r.resize(e, t), r.setTransform(1, 0, 0, 1, 0, 0)) : (r = new y.WebGLRenderBuffer(e, t)).$computeDrawCall = !1, r;
  }, WebGLRenderer.prototype.renderClear = function () {
    var e = y.WebGLRenderContext.getInstance();var t = e.context;e.$beforeRender();var r = e.surface.width;e = e.surface.height;t.viewport(0, 0, r, e);
  }, e = WebGLRenderer, y.WebGLRenderer = e, __reflect(e.prototype, "egret.wxgame.WebGLRenderer", ["egret.sys.SystemRenderer"]);
}(egret = egret || {}), function (e) {
  function EgretWebGLAttribute(e, t, r) {
    this.gl = e, this.name = r.name, this.type = r.type, this.size = r.size, this.location = e.getAttribLocation(t, this.name), this.count = 0, this.initCount(e), this.format = e.FLOAT, this.initFormat(e);
  }var t;t = e.wxgame || (e.wxgame = {}), EgretWebGLAttribute.prototype.initCount = function (e) {
    switch (this.type) {case t.WEBGL_ATTRIBUTE_TYPE.FLOAT:case t.WEBGL_ATTRIBUTE_TYPE.BYTE:case t.WEBGL_ATTRIBUTE_TYPE.UNSIGNED_BYTE:case t.WEBGL_ATTRIBUTE_TYPE.UNSIGNED_SHORT:
        this.count = 1;break;case t.WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC2:
        this.count = 2;break;case t.WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC3:
        this.count = 3;break;case t.WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC4:
        this.count = 4;}
  }, EgretWebGLAttribute.prototype.initFormat = function (e) {
    switch (this.type) {case t.WEBGL_ATTRIBUTE_TYPE.FLOAT:case t.WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC2:case t.WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC3:case t.WEBGL_ATTRIBUTE_TYPE.FLOAT_VEC4:
        this.format = e.FLOAT;break;case t.WEBGL_ATTRIBUTE_TYPE.UNSIGNED_BYTE:
        this.format = e.UNSIGNED_BYTE;break;case t.WEBGL_ATTRIBUTE_TYPE.UNSIGNED_SHORT:
        this.format = e.UNSIGNED_SHORT;break;case t.WEBGL_ATTRIBUTE_TYPE.BYTE:
        this.format = e.BYTE;}
  }, e = EgretWebGLAttribute, t.EgretWebGLAttribute = e, __reflect(e.prototype, "egret.wxgame.EgretWebGLAttribute");
}(egret = egret || {}), function (e) {
  function loadShader(e, t, r) {
    t = e.createShader(t);return e.shaderSource(t, r), e.compileShader(t), e.getShaderParameter(t, e.COMPILE_STATUS) || (console.log("shader not compiled!"), console.log(e.getShaderInfoLog(t))), t;
  }function EgretWebGLProgram(e, t, r) {
    var a, n;this.vshaderSource = t, this.fshaderSource = r, this.vertexShader = loadShader(e, e.VERTEX_SHADER, this.vshaderSource), this.fragmentShader = loadShader(e, e.FRAGMENT_SHADER, this.fshaderSource), this.id = (a = e, n = this.vertexShader, t = this.fragmentShader, r = a.createProgram(), a.attachShader(r, n), a.attachShader(r, t), a.linkProgram(r), r), this.uniforms = function (e, t) {
      var r = {};var a = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);for (var n = 0; n < a; n++) {
        var i = e.getActiveUniform(t, n);var o = i.name;i = new s.EgretWebGLUniform(e, t, i);r[o] = i;
      }return r;
    }(e, this.id), this.attributes = function (e, t) {
      var r = {};var a = e.getProgramParameter(t, e.ACTIVE_ATTRIBUTES);for (var n = 0; n < a; n++) {
        var i = e.getActiveAttrib(t, n);var o = i.name;i = new s.EgretWebGLAttribute(e, t, i);r[o] = i;
      }return r;
    }(e, this.id);
  }var s;s = e.wxgame || (e.wxgame = {}), EgretWebGLProgram.getProgram = function (e, t, r, a) {
    return this.programCache[a] || (this.programCache[a] = new EgretWebGLProgram(e, t, r)), this.programCache[a];
  }, EgretWebGLProgram.deleteProgram = function (e, t, r, a) {}, EgretWebGLProgram.programCache = {}, e = EgretWebGLProgram, s.EgretWebGLProgram = e, __reflect(e.prototype, "egret.wxgame.EgretWebGLProgram");
}(egret = egret || {}), function (e) {
  function EgretWebGLUniform(e, t, r) {
    this.gl = e, this.name = r.name, this.type = r.type, this.size = r.size, this.location = e.getUniformLocation(t, this.name), this.setDefaultValue(), this.generateSetValue(), this.generateUpload();
  }var a;a = e.wxgame || (e.wxgame = {}), EgretWebGLUniform.prototype.setDefaultValue = function () {
    switch (this.type) {case a.WEBGL_UNIFORM_TYPE.FLOAT:case a.WEBGL_UNIFORM_TYPE.SAMPLER_2D:case a.WEBGL_UNIFORM_TYPE.SAMPLER_CUBE:case a.WEBGL_UNIFORM_TYPE.BOOL:case a.WEBGL_UNIFORM_TYPE.INT:
        this.value = 0;break;case a.WEBGL_UNIFORM_TYPE.FLOAT_VEC2:case a.WEBGL_UNIFORM_TYPE.BOOL_VEC2:case a.WEBGL_UNIFORM_TYPE.INT_VEC2:
        this.value = [0, 0];break;case a.WEBGL_UNIFORM_TYPE.FLOAT_VEC3:case a.WEBGL_UNIFORM_TYPE.BOOL_VEC3:case a.WEBGL_UNIFORM_TYPE.INT_VEC3:
        this.value = [0, 0, 0];break;case a.WEBGL_UNIFORM_TYPE.FLOAT_VEC4:case a.WEBGL_UNIFORM_TYPE.BOOL_VEC4:case a.WEBGL_UNIFORM_TYPE.INT_VEC4:
        this.value = [0, 0, 0, 0];break;case a.WEBGL_UNIFORM_TYPE.FLOAT_MAT2:
        this.value = new Float32Array([1, 0, 0, 1]);break;case a.WEBGL_UNIFORM_TYPE.FLOAT_MAT3:
        this.value = new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);break;case a.WEBGL_UNIFORM_TYPE.FLOAT_MAT4:
        this.value = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);}
  }, EgretWebGLUniform.prototype.generateSetValue = function () {
    switch (this.type) {case a.WEBGL_UNIFORM_TYPE.FLOAT:case a.WEBGL_UNIFORM_TYPE.SAMPLER_2D:case a.WEBGL_UNIFORM_TYPE.SAMPLER_CUBE:case a.WEBGL_UNIFORM_TYPE.BOOL:case a.WEBGL_UNIFORM_TYPE.INT:
        this.setValue = function (e) {
          var t = this.value !== e;this.value = e, t && this.upload();
        };break;case a.WEBGL_UNIFORM_TYPE.FLOAT_VEC2:case a.WEBGL_UNIFORM_TYPE.BOOL_VEC2:case a.WEBGL_UNIFORM_TYPE.INT_VEC2:
        this.setValue = function (e) {
          var t = this.value[0] !== e.x || this.value[1] !== e.y;this.value[0] = e.x, this.value[1] = e.y, t && this.upload();
        };break;case a.WEBGL_UNIFORM_TYPE.FLOAT_VEC3:case a.WEBGL_UNIFORM_TYPE.BOOL_VEC3:case a.WEBGL_UNIFORM_TYPE.INT_VEC3:
        this.setValue = function (e) {
          this.value[0] = e.x, this.value[1] = e.y, this.value[2] = e.z, this.upload();
        };break;case a.WEBGL_UNIFORM_TYPE.FLOAT_VEC4:case a.WEBGL_UNIFORM_TYPE.BOOL_VEC4:case a.WEBGL_UNIFORM_TYPE.INT_VEC4:
        this.setValue = function (e) {
          this.value[0] = e.x, this.value[1] = e.y, this.value[2] = e.z, this.value[3] = e.w, this.upload();
        };break;case a.WEBGL_UNIFORM_TYPE.FLOAT_MAT2:case a.WEBGL_UNIFORM_TYPE.FLOAT_MAT3:case a.WEBGL_UNIFORM_TYPE.FLOAT_MAT4:
        this.setValue = function (e) {
          this.value.set(e), this.upload();
        };}
  }, EgretWebGLUniform.prototype.generateUpload = function () {
    var t = this.gl;var e = this.type;var r = this.location;switch (e) {case a.WEBGL_UNIFORM_TYPE.FLOAT:
        this.upload = function () {
          var e = this.value;t.uniform1f(r, e);
        };break;case a.WEBGL_UNIFORM_TYPE.FLOAT_VEC2:
        this.upload = function () {
          var e = this.value;t.uniform2f(r, e[0], e[1]);
        };break;case a.WEBGL_UNIFORM_TYPE.FLOAT_VEC3:
        this.upload = function () {
          var e = this.value;t.uniform3f(r, e[0], e[1], e[2]);
        };break;case a.WEBGL_UNIFORM_TYPE.FLOAT_VEC4:
        this.upload = function () {
          var e = this.value;t.uniform4f(r, e[0], e[1], e[2], e[3]);
        };break;case a.WEBGL_UNIFORM_TYPE.SAMPLER_2D:case a.WEBGL_UNIFORM_TYPE.SAMPLER_CUBE:case a.WEBGL_UNIFORM_TYPE.BOOL:case a.WEBGL_UNIFORM_TYPE.INT:
        this.upload = function () {
          var e = this.value;t.uniform1i(r, e);
        };break;case a.WEBGL_UNIFORM_TYPE.BOOL_VEC2:case a.WEBGL_UNIFORM_TYPE.INT_VEC2:
        this.upload = function () {
          var e = this.value;t.uniform2i(r, e[0], e[1]);
        };break;case a.WEBGL_UNIFORM_TYPE.BOOL_VEC3:case a.WEBGL_UNIFORM_TYPE.INT_VEC3:
        this.upload = function () {
          var e = this.value;t.uniform3i(r, e[0], e[1], e[2]);
        };break;case a.WEBGL_UNIFORM_TYPE.BOOL_VEC4:case a.WEBGL_UNIFORM_TYPE.INT_VEC4:
        this.upload = function () {
          var e = this.value;t.uniform4i(r, e[0], e[1], e[2], e[3]);
        };break;case a.WEBGL_UNIFORM_TYPE.FLOAT_MAT2:
        this.upload = function () {
          var e = this.value;t.uniformMatrix2fv(r, !1, e);
        };break;case a.WEBGL_UNIFORM_TYPE.FLOAT_MAT3:
        this.upload = function () {
          var e = this.value;t.uniformMatrix3fv(r, !1, e);
        };break;case a.WEBGL_UNIFORM_TYPE.FLOAT_MAT4:
        this.upload = function () {
          var e = this.value;t.uniformMatrix4fv(r, !1, e);
        };}
  }, e = EgretWebGLUniform, a.EgretWebGLUniform = e, __reflect(e.prototype, "egret.wxgame.EgretWebGLUniform");
}(egret = egret || {}), function (e) {
  function EgretShaderLib() {}var t;t = e.wxgame || (e.wxgame = {}), EgretShaderLib.blur_frag = "precision mediump float;\r\nuniform vec2 blur;\r\nuniform sampler2D uSampler;\r\nvarying vec2 vTextureCoord;\r\nuniform vec2 uTextureSize;\r\nvoid main()\r\n{\r\n    const int sampleRadius = 5;\r\n    const int samples = sampleRadius * 2 + 1;\r\n    vec2 blurUv = blur / uTextureSize;\r\n    vec4 color = vec4(0, 0, 0, 0);\r\n    vec2 uv = vec2(0.0, 0.0);\r\n    blurUv /= float(sampleRadius);\r\n\r\n    for (int i = -sampleRadius; i <= sampleRadius; i++) {\r\n        uv.x = vTextureCoord.x + float(i) * blurUv.x;\r\n        uv.y = vTextureCoord.y + float(i) * blurUv.y;\r\n        color += texture2D(uSampler, uv);\r\n    }\r\n\r\n    color /= float(samples);\r\n    gl_FragColor = color;\r\n}", EgretShaderLib.colorTransform_frag = "precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nvarying vec4 vColor;\r\nuniform mat4 matrix;\r\nuniform vec4 colorAdd;\r\nuniform sampler2D uSampler;\r\n\r\nvoid main(void) {\r\n    vec4 texColor = texture2D(uSampler, vTextureCoord);\r\n    if(texColor.a > 0.) {\r\n        // \u62b5\u6d88\u9884\u4e58\u7684alpha\u901a\u9053\r\n        texColor = vec4(texColor.rgb / texColor.a, texColor.a);\r\n    }\r\n    vec4 locColor = clamp(texColor * matrix + colorAdd, 0., 1.);\r\n    gl_FragColor = vColor * vec4(locColor.rgb * locColor.a, locColor.a);\r\n}", EgretShaderLib.default_vert = "attribute vec2 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\nattribute vec4 aColor;\r\n\r\nuniform vec2 projectionVector;\r\n// uniform vec2 offsetVector;\r\n\r\nvarying vec2 vTextureCoord;\r\nvarying vec4 vColor;\r\n\r\nconst vec2 center = vec2(-1.0, 1.0);\r\n\r\nvoid main(void) {\r\n   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\r\n   vTextureCoord = aTextureCoord;\r\n   vColor = aColor;\r\n}", EgretShaderLib.glow_frag = "precision highp float;\r\nvarying vec2 vTextureCoord;\r\n\r\nuniform sampler2D uSampler;\r\n\r\nuniform float dist;\r\nuniform float angle;\r\nuniform vec4 color;\r\nuniform float alpha;\r\nuniform float blurX;\r\nuniform float blurY;\r\n// uniform vec4 quality;\r\nuniform float strength;\r\nuniform float inner;\r\nuniform float knockout;\r\nuniform float hideObject;\r\n\r\nuniform vec2 uTextureSize;\r\n\r\nfloat random(vec2 scale)\r\n{\r\n    return fract(sin(dot(gl_FragCoord.xy, scale)) * 43758.5453);\r\n}\r\n\r\nvoid main(void) {\r\n    vec2 px = vec2(1.0 / uTextureSize.x, 1.0 / uTextureSize.y);\r\n    // TODO \u81ea\u52a8\u8c03\u8282\u91c7\u6837\u6b21\u6570\uff1f\r\n    const float linearSamplingTimes = 7.0;\r\n    const float circleSamplingTimes = 12.0;\r\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\r\n    vec4 curColor;\r\n    float totalAlpha = 0.0;\r\n    float maxTotalAlpha = 0.0;\r\n    float curDistanceX = 0.0;\r\n    float curDistanceY = 0.0;\r\n    float offsetX = dist * cos(angle) * px.x;\r\n    float offsetY = dist * sin(angle) * px.y;\r\n\r\n    const float PI = 3.14159265358979323846264;\r\n    float cosAngle;\r\n    float sinAngle;\r\n    float offset = PI * 2.0 / circleSamplingTimes * random(vec2(12.9898, 78.233));\r\n    float stepX = blurX * px.x / linearSamplingTimes;\r\n    float stepY = blurY * px.y / linearSamplingTimes;\r\n    for (float a = 0.0; a <= PI * 2.0; a += PI * 2.0 / circleSamplingTimes) {\r\n        cosAngle = cos(a + offset);\r\n        sinAngle = sin(a + offset);\r\n        for (float i = 1.0; i <= linearSamplingTimes; i++) {\r\n            curDistanceX = i * stepX * cosAngle;\r\n            curDistanceY = i * stepY * sinAngle;\r\n            if (vTextureCoord.x + curDistanceX - offsetX >= 0.0 && vTextureCoord.y + curDistanceY + offsetY <= 1.0){\r\n                curColor = texture2D(uSampler, vec2(vTextureCoord.x + curDistanceX - offsetX, vTextureCoord.y + curDistanceY + offsetY));\r\n                totalAlpha += (linearSamplingTimes - i) * curColor.a;\r\n            }\r\n            maxTotalAlpha += (linearSamplingTimes - i);\r\n        }\r\n    }\r\n\r\n    ownColor.a = max(ownColor.a, 0.0001);\r\n    ownColor.rgb = ownColor.rgb / ownColor.a;\r\n\r\n    float outerGlowAlpha = (totalAlpha / maxTotalAlpha) * strength * alpha * (1. - inner) * max(min(hideObject, knockout), 1. - ownColor.a);\r\n    float innerGlowAlpha = ((maxTotalAlpha - totalAlpha) / maxTotalAlpha) * strength * alpha * inner * ownColor.a;\r\n\r\n    ownColor.a = max(ownColor.a * knockout * (1. - hideObject), 0.0001);\r\n    vec3 mix1 = mix(ownColor.rgb, color.rgb, innerGlowAlpha / (innerGlowAlpha + ownColor.a));\r\n    vec3 mix2 = mix(mix1, color.rgb, outerGlowAlpha / (innerGlowAlpha + ownColor.a + outerGlowAlpha));\r\n    float resultAlpha = min(ownColor.a + outerGlowAlpha + innerGlowAlpha, 1.);\r\n    gl_FragColor = vec4(mix2 * resultAlpha, resultAlpha);\r\n}", EgretShaderLib.primitive_frag = "precision lowp float;\r\nvarying vec2 vTextureCoord;\r\nvarying vec4 vColor;\r\n\r\nvoid main(void) {\r\n    gl_FragColor = vColor;\r\n}", EgretShaderLib.texture_frag = "precision lowp float;\r\nvarying vec2 vTextureCoord;\r\nvarying vec4 vColor;\r\nuniform sampler2D uSampler;\r\n\r\nvoid main(void) {\r\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor;\r\n}", EgretShaderLib.texture_etc_alphamask_frag = "precision lowp float;\r\nvarying vec2 vTextureCoord;\r\nvarying vec4 vColor;\r\nuniform sampler2D uSampler;\r\nuniform sampler2D uSamplerAlphaMask;\r\nvoid main(void) {\r\nfloat alpha = texture2D(uSamplerAlphaMask, vTextureCoord).r;\r\nif (alpha < 0.0039) { discard; }\r\nvec4 v4Color = texture2D(uSampler, vTextureCoord);\r\nv4Color.rgb = v4Color.rgb * alpha;\r\nv4Color.a = alpha;\r\ngl_FragColor = v4Color * vColor;\r\n}", EgretShaderLib.colorTransform_frag_etc_alphamask_frag = "precision mediump float;\r\nvarying vec2 vTextureCoord;\r\nvarying vec4 vColor;\r\nuniform mat4 matrix;\r\nuniform vec4 colorAdd;\r\nuniform sampler2D uSampler;\r\nuniform sampler2D uSamplerAlphaMask;\r\n\r\nvoid main(void){\r\nfloat alpha = texture2D(uSamplerAlphaMask, vTextureCoord).r;\r\nif (alpha < 0.0039) { discard; }\r\nvec4 texColor = texture2D(uSampler, vTextureCoord);\r\nif(texColor.a > 0.0) {\r\n // \u62b5\u6d88\u9884\u4e58\u7684alpha\u901a\u9053\r\ntexColor = vec4(texColor.rgb / texColor.a, texColor.a);\r\n}\r\nvec4 v4Color = clamp(texColor * matrix + colorAdd, 0.0, 1.0);\r\nv4Color.rgb = v4Color.rgb * alpha;\r\nv4Color.a = alpha;\r\ngl_FragColor = v4Color * vColor;\r\n}", e = EgretShaderLib, t.EgretShaderLib = e, __reflect(e.prototype, "egret.wxgame.EgretShaderLib");
}(egret = egret || {}), function (o) {
  !function (e) {
    var c = (h = o.HashObject, __extends(TextBlock, h), Object.defineProperty(TextBlock.prototype, "border", { get: function () {
        return this._border;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(TextBlock.prototype, "width", { get: function () {
        return this._width + 2 * this.border;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(TextBlock.prototype, "height", { get: function () {
        return this._height + 2 * this.border;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(TextBlock.prototype, "contentWidth", { get: function () {
        return this._width;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(TextBlock.prototype, "contentHeight", { get: function () {
        return this._height;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(TextBlock.prototype, "page", { get: function () {
        return this.line ? this.line.page : null;
      }, enumerable: !0, configurable: !0 }), TextBlock.prototype.updateUV = function () {
      var e = this.line;return !!e && (this.u = e.x + this.x + +this.border, this.v = e.y + this.y + +this.border, !0);
    }, Object.defineProperty(TextBlock.prototype, "subImageOffsetX", { get: function () {
        var e = this.line;return e ? e.x + this.x + this.border : 0;
      }, enumerable: !0, configurable: !0 }), Object.defineProperty(TextBlock.prototype, "subImageOffsetY", { get: function () {
        var e = this.line;return e ? e.y + this.y + this.border : 0;
      }, enumerable: !0, configurable: !0 }), TextBlock);function TextBlock(e, t, r, a, n, i, o, s) {
      var c = h.call(this) || this;return c._width = 0, c._height = 0, c._border = 0, c.line = null, c.x = 0, c.y = 0, c.u = 0, c.v = 0, c.tag = "", c.measureWidth = 0, c.measureHeight = 0, c.canvasWidthOffset = 0, c.canvasHeightOffset = 0, c.stroke2 = 0, c._width = e, c._height = t, c._border = s, c.measureWidth = r, c.measureHeight = a, c.canvasWidthOffset = n, c.canvasHeightOffset = i, c.stroke2 = o, c;
    }var h;e.TextBlock = c, __reflect(c.prototype, "egret.wxgame.TextBlock");var l = (r = o.HashObject, __extends(Line, r), Line.prototype.isCapacityOf = function (e) {
      if (!e) return !1;var t = 0;var r = this.lastTextBlock();return r && (t = r.x + r.width, r.y), !(t + e.width > this.maxWidth) && !(0 < this.dynamicMaxHeight && (e.height > this.dynamicMaxHeight || e.height / this.dynamicMaxHeight < .5));
    }, Line.prototype.lastTextBlock = function () {
      var e = this.textBlocks;return 0 < e.length ? e[e.length - 1] : null;
    }, Line.prototype.addTextBlock = function (e, t) {
      if (!e) return !1;if (t && !this.isCapacityOf(e)) return !1;var r = 0;var a = 0;t = this.lastTextBlock();return t && (r = t.x + t.width, a = t.y), e.x = r, e.y = a, (e.line = this).textBlocks.push(e), this.dynamicMaxHeight = Math.max(this.dynamicMaxHeight, e.height), !0;
    }, Line);function Line(e) {
      var t = r.call(this) || this;return t.page = null, t.textBlocks = [], t.dynamicMaxHeight = 0, t.maxWidth = 0, t.x = 0, t.y = 0, t.maxWidth = e, t;
    }var r;e.Line = l, __reflect(l.prototype, "egret.wxgame.Line");var a = (n = o.HashObject, __extends(Page, n), Page.prototype.addLine = function (e) {
      if (!e) return !1;var t = 0;var r = 0;var a = this.lines;return 0 < a.length && (t = (a = a[a.length - 1]).x, r = a.y + a.dynamicMaxHeight), e.maxWidth > this.pageWidth ? (console.error("line.maxWidth = " + e.maxWidth + ", this.pageWidth = " + this.pageWidth), !1) : !(r + e.dynamicMaxHeight > this.pageHeight) && (e.x = t, e.y = r, (e.page = this).lines.push(e), !0);
    }, Page);function Page(e, t) {
      var r = n.call(this) || this;return r.lines = [], r.pageWidth = 0, r.pageHeight = 0, r.webGLTexture = null, r.pageWidth = e, r.pageHeight = t, r;
    }var n;e.Page = a, __reflect(a.prototype, "egret.wxgame.Page");var t = (i = o.HashObject, __extends(Book, i), Book.prototype.addTextBlock = function (e) {
      var t = this._addTextBlock(e);if (!t) return !1;e.updateUV();var r = !1;var a = t;t = this._sortLines;for (var n = 0, i = t; n < i.length; n++) if (i[n] === a[1]) {
        r = !0;break;
      }return r || t.push(a[1]), this.sort(), !0;
    }, Book.prototype._addTextBlock = function (e) {
      if (!e) return null;if (e.width > this._maxSize || e.height > this._maxSize) return null;var t = this._sortLines;for (var r = 0, a = t.length; r < a; ++r) {
        var n = t[r];if (n.isCapacityOf(e) && n.addTextBlock(e, !1)) return [n.page, n];
      }var i = new l(this._maxSize);if (!i.addTextBlock(e, !0)) return console.error("_addTextBlock !newLine.addTextBlock(textBlock, true)"), null;var o = this._pages;for (var r = 0, s = o.length; r < s; ++r) {
        var c = o[r];if (c.addLine(i)) return [c, i];
      }var h = this.createPage(this._maxSize, this._maxSize);return h.addLine(i) ? [h, i] : (console.error("_addText newPage.addLine failed"), null);
    }, Book.prototype.createPage = function (e, t) {
      t = new a(e, t);return this._pages.push(t), t;
    }, Book.prototype.sort = function () {
      this._sortLines.length <= 1 || (this._sortLines = this._sortLines.sort(function (e, t) {
        return e.dynamicMaxHeight < t.dynamicMaxHeight ? -1 : 1;
      }));
    }, Book.prototype.createTextBlock = function (e, t, r, a, n, i, o, s) {
      s = new c(t, r, a, n, i, o, s, this._border);return this.addTextBlock(s) ? (s.tag = e, s) : null;
    }, Book);function Book(e, t) {
      var r = i.call(this) || this;return r._pages = [], r._sortLines = [], r._maxSize = 1024, r._border = 1, r._maxSize = e, r._border = t, r;
    }var i;e.Book = t, __reflect(t.prototype, "egret.wxgame.Book");
  }(o.wxgame || (o.wxgame = {}));
}(egret = egret || {}), function (x) {
  !function (p) {
    p.textAtlasRenderEnable = !1, p.__textAtlasRender__ = null;p.property_drawLabel = "DrawLabel";var g = (t = x.HashObject, __extends(DrawLabel, t), DrawLabel.prototype.clear = function () {
      this.anchorX = 0, this.anchorY = 0, this.textBlocks.length = 0;
    }, DrawLabel.create = function () {
      var e = DrawLabel.pool;return 0 === e.length && e.push(new DrawLabel()), e.pop();
    }, DrawLabel.back = function (e, t) {
      var r;e && (r = DrawLabel.pool, t && 0 <= r.indexOf(e) ? console.error("DrawLabel.back repeat") : (e.clear(), r.push(e)));
    }, DrawLabel.pool = [], DrawLabel);function DrawLabel() {
      var e = null !== t && t.apply(this, arguments) || this;return e.anchorX = 0, e.anchorY = 0, e.textBlocks = [], e;
    }var t;p.DrawLabel = g, __reflect(g.prototype, "egret.wxgame.DrawLabel");var v = (o = x.HashObject, __extends(StyleInfo, o), StyleInfo);function StyleInfo(e, t) {
      var r = o.call(this) || this;r.format = null, r.textColor = e.textColor, r.strokeColor = e.strokeColor, r.size = e.size, r.stroke = e.stroke, r.bold = e.bold, r.italic = e.italic, r.fontFamily = e.fontFamily, r.format = t, r.font = x.getFontString(e, r.format);var a = t.textColor || e.textColor;var n = t.strokeColor || e.strokeColor;var i = t.stroke || e.stroke;e = t.size || e.size;return r.description = r.font + "-" + e, r.description += "-" + x.toColorString(a), r.description += "-" + x.toColorString(n), i && (r.description += "-" + 2 * i), r;
    }var o;__reflect(v.prototype, "StyleInfo");var n = (r = x.HashObject, __extends(CharImageRender, r), CharImageRender.prototype.reset = function (e, t) {
      return this.char = e, this.styleInfo = t, this.hashCodeString = e + ":" + t.description, this.charWithStyleHashCode = x.NumberUtils.convertStringToHashCode(this.hashCodeString), this.canvasWidthOffset = 0, this.canvasHeightOffset = 0, this.stroke2 = 0, this;
    }, CharImageRender.prototype.measureAndDraw = function (e) {
      var t = e;var r, a, n, i, o, s;t && (r = this.char, a = (s = this.styleInfo.format).textColor || this.styleInfo.textColor, n = s.strokeColor || this.styleInfo.strokeColor, i = s.stroke || this.styleInfo.stroke, o = s.size || this.styleInfo.size, this.measureWidth = this.measure(r, this.styleInfo, o), this.measureHeight = o, e = this.measureWidth, s = this.measureHeight, 0 < (o = 2 * i) && (e += 2 * o, s += 2 * o), this.stroke2 = o, t.width = e = Math.ceil(e) + 4, t.height = s = Math.ceil(s) + 4, this.canvasWidthOffset = (t.width - this.measureWidth) / 2, this.canvasHeightOffset = (t.height - this.measureHeight) / 2, s = Math.pow(10, 3), this.canvasWidthOffset = Math.floor(this.canvasWidthOffset * s) / s, this.canvasHeightOffset = Math.floor(this.canvasHeightOffset * s) / s, (s = x.sys.getContext2d(t)).save(), s.textAlign = "center", s.textBaseline = "middle", s.lineJoin = "round", s.font = this.styleInfo.font, s.fillStyle = x.toColorString(a), s.strokeStyle = x.toColorString(n), s.clearRect(0, 0, t.width, t.height), i && (s.lineWidth = 2 * i, s.strokeText(r, t.width / 2, t.height / 2)), s.fillText(r, t.width / 2, t.height / 2), s.restore());
    }, CharImageRender.prototype.measure = function (e, t, r) {
      var a = CharImageRender.chineseCharactersRegExp.test(e);if (a && CharImageRender.chineseCharacterMeasureFastMap[t.font]) return CharImageRender.chineseCharacterMeasureFastMap[t.font];r = x.sys.measureText(e, t.fontFamily, r || t.size, t.bold, t.italic);return a && (CharImageRender.chineseCharacterMeasureFastMap[t.font] = r), r;
    }, CharImageRender.chineseCharactersRegExp = new RegExp("^[\u4e00-\u9fa5]$"), CharImageRender.chineseCharacterMeasureFastMap = {}, CharImageRender);function CharImageRender() {
      var e = null !== r && r.apply(this, arguments) || this;return e.char = "", e.styleInfo = null, e.hashCodeString = "", e.charWithStyleHashCode = 0, e.measureWidth = 0, e.measureHeight = 0, e.canvasWidthOffset = 0, e.canvasHeightOffset = 0, e.stroke2 = 0, e;
    }var r;__reflect(n.prototype, "CharImageRender");var e = (i = x.HashObject, __extends(TextAtlasRender, i), TextAtlasRender.analysisTextNodeAndFlushDrawLabel = function (e) {
      if (e) {
        var t;p.__textAtlasRender__ || (t = x.wxgame.WebGLRenderContext.getInstance(0, 0), p.__textAtlasRender__ = new TextAtlasRender(t, 512, 1)), e[p.property_drawLabel] = e[p.property_drawLabel] || [];var r = e[p.property_drawLabel];for (var a = 0, n = r; a < n.length; a++) {
          var i = n[a];g.back(i, !1);
        }r.length = 0;var o = e.drawData;var s;var c;var h;var l;var d = [];for (var u = 0, f = o.length; u < f; u += 4) s = o[u + 0], c = o[u + 1], h = o[u + 2], l = o[u + 3] || {}, d.length = 0, p.__textAtlasRender__.convertLabelStringToTextAtlas(h, new v(e, l), d), (i = g.create()).anchorX = s, i.anchorY = c, i.textBlocks = [].concat(d), r.push(i);
      }
    }, TextAtlasRender.prototype.convertLabelStringToTextAtlas = function (e, t, r) {
      var a = this.canvas;var n = this.charImageRender;var i = this.textBlockMap;for (var o = 0, s = e; o < s.length; o++) {
        var c = s[o];var h, l;n.reset(c, t), i[n.charWithStyleHashCode] ? r.push(i[n.charWithStyleHashCode]) : (n.measureAndDraw(a), (h = this.book.createTextBlock(c, a.width, a.height, n.measureWidth, n.measureHeight, n.canvasWidthOffset, n.canvasHeightOffset, n.stroke2)) && (r.push(h), (l = (i[n.charWithStyleHashCode] = h).page).webGLTexture || (l.webGLTexture = this.createTextTextureAtlas(l.pageWidth, l.pageHeight, !1)), c = this.webglRenderContext.context, (l.webGLTexture[x.glContext] = c).bindTexture(c.TEXTURE_2D, l.webGLTexture), c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), l.webGLTexture[x.UNPACK_PREMULTIPLY_ALPHA_WEBGL] = !0, c.texSubImage2D(c.TEXTURE_2D, 0, h.subImageOffsetX, h.subImageOffsetY, c.RGBA, c.UNSIGNED_BYTE, a), c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1)));
      }
    }, TextAtlasRender.prototype.createTextTextureAtlas = function (e, t, r) {
      var a = null;var n;return (a = r ? (n = x.sys.createCanvas(e, e), (r = x.sys.getContext2d(n)).fillStyle = "black", r.fillRect(0, 0, e, e), x.sys.createTexture(this.webglRenderContext, n)) : x.sys._createTexture(this.webglRenderContext, e, t, null)) && this.textAtlasTextureCache.push(a), a;
    }, Object.defineProperty(TextAtlasRender.prototype, "canvas", { get: function () {
        return this._canvas || (this._canvas = x.sys.createCanvas(24, 24)), this._canvas;
      }, enumerable: !0, configurable: !0 }), TextAtlasRender);function TextAtlasRender(e, t, r) {
      var a = i.call(this) || this;return a.book = null, a.charImageRender = new n(), a.textBlockMap = {}, a._canvas = null, a.textAtlasTextureCache = [], a.webglRenderContext = null, a.webglRenderContext = e, a.book = new p.Book(t, r), a;
    }var i;p.TextAtlasRender = e, __reflect(e.prototype, "egret.wxgame.TextAtlasRender");
  }(x.wxgame || (x.wxgame = {}));
}(egret = egret || {}), function (o) {
  function resizeContext(e, t, r, a) {
    var n;e && (e = (n = e).surface, a ? (e.width < t && (e.width = t, !i.isSubContext && window.sharedCanvas && (window.sharedCanvas.width = t)), e.height < r && (e.height = r, !i.isSubContext && window.sharedCanvas && (window.sharedCanvas.height = r))) : (e.width !== t && (e.width = t, !i.isSubContext && window.sharedCanvas && (window.sharedCanvas.width = t)), e.height !== r && (e.height = r, !i.isSubContext && window.sharedCanvas && (window.sharedCanvas.height = r))), n.onResize());
  }function getContext2d(e) {
    return e ? e.getContext("2d") : null;
  }var i, e;i = o.wxgame || (o.wxgame = {}), (e = i.WEBGL_ATTRIBUTE_TYPE || (i.WEBGL_ATTRIBUTE_TYPE = {}))[e.FLOAT_VEC2 = 35664] = "FLOAT_VEC2", e[e.FLOAT_VEC3 = 35665] = "FLOAT_VEC3", e[e.FLOAT_VEC4 = 35666] = "FLOAT_VEC4", e[e.FLOAT = 5126] = "FLOAT", e[e.BYTE = 65535] = "BYTE", e[e.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", e[e.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", (e = i.WEBGL_UNIFORM_TYPE || (i.WEBGL_UNIFORM_TYPE = {}))[e.FLOAT_VEC2 = 35664] = "FLOAT_VEC2", e[e.FLOAT_VEC3 = 35665] = "FLOAT_VEC3", e[e.FLOAT_VEC4 = 35666] = "FLOAT_VEC4", e[e.INT_VEC2 = 35667] = "INT_VEC2", e[e.INT_VEC3 = 35668] = "INT_VEC3", e[e.INT_VEC4 = 35669] = "INT_VEC4", e[e.BOOL = 35670] = "BOOL", e[e.BOOL_VEC2 = 35671] = "BOOL_VEC2", e[e.BOOL_VEC3 = 35672] = "BOOL_VEC3", e[e.BOOL_VEC4 = 35673] = "BOOL_VEC4", e[e.FLOAT_MAT2 = 35674] = "FLOAT_MAT2", e[e.FLOAT_MAT3 = 35675] = "FLOAT_MAT3", e[e.FLOAT_MAT4 = 35676] = "FLOAT_MAT4", e[e.SAMPLER_2D = 35678] = "SAMPLER_2D", e[e.SAMPLER_CUBE = 35680] = "SAMPLER_CUBE", e[e.BYTE = 65535] = "BYTE", e[e.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", e[e.SHORT = 5122] = "SHORT", e[e.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", e[e.INT = 5124] = "INT", e[e.UNSIGNED_INT = 5125] = "UNSIGNED_INT", e[e.FLOAT = 5126] = "FLOAT", o.sys.mainCanvas = function (e, t) {
    return window.canvas;
  }, o.sys.createCanvas = function (e, t) {
    var r = document.createElement("canvas");return isNaN(e) || isNaN(t) || (r.width = e, r.height = t), r;
  }, i.resizeContext = resizeContext, o.sys.resizeContext = resizeContext, o.sys.getContextWebGL = function (e) {
    var t = { antialias: i.WebGLRenderContext.antialias, stencil: !0 };return e ? e.getContext("webgl", t) : null;
  }, i.getContext2d = getContext2d, o.sys.getContext2d = getContext2d, o.sys.createTexture = function (e, t) {
    var r = e;var a = r.context;return t.isCanvas && a.wxBindCanvasTexture ? t : (e = a.createTexture()) ? ((e.glContext = a).bindTexture(a.TEXTURE_2D, e), a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), e[o.UNPACK_PREMULTIPLY_ALPHA_WEBGL] = !0, a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, t), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MAG_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_MIN_FILTER, a.LINEAR), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_S, a.CLAMP_TO_EDGE), a.texParameteri(a.TEXTURE_2D, a.TEXTURE_WRAP_T, a.CLAMP_TO_EDGE), t.source && (t.source.src = ""), e) : (r.contextLost = !0, null);
  }, o.sys._createTexture = function (e, t, r, a) {
    var n = e;var i = n.context;return (e = i.createTexture()) ? ((e[o.glContext] = i).bindTexture(i.TEXTURE_2D, e), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), e[o.UNPACK_PREMULTIPLY_ALPHA_WEBGL] = !0, i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, t, r, 0, i.RGBA, i.UNSIGNED_BYTE, a), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, i.LINEAR), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE), e) : (n.contextLost = !0, null);
  }, o.sys.drawTextureElements = function (e, t, r) {
    return (e = e.context).activeTexture(e.TEXTURE0), t.texture.isCanvas ? e.wxBindCanvasTexture(e.TEXTURE_2D, t.texture) : e.bindTexture(e.TEXTURE_2D, t.texture), t = 3 * t.count, e.drawElements(e.TRIANGLES, t, e.UNSIGNED_SHORT, 2 * r), t;
  }, o.sys.measureTextWith = function (e, t) {
    var r = e.measureText(t);return r ? r.width : (o.warn("wxcontext.measureText result is null or undefined;text is " + t + "; font is " + e.font), 1);
  }, o.sys.createCanvasRenderBufferSurface = function (e, t, r, a) {
    return a ? i.isSubContext ? window.sharedCanvas : window.canvas : e(t, r);
  }, o.sys.resizeCanvasRenderBuffer = function (e, t, r, a) {
    var n = e;e = n.surface, i.isSubContext || (a ? (a = !1, e.width < t && (e.width = t, "canvas" === o.Capabilities.renderMode && (window.sharedCanvas.width = t), a = !0), e.height < r && (e.height = r, "canvas" === o.Capabilities.renderMode && (window.sharedCanvas.height = r), a = !0), a || (n.context.globalCompositeOperation = "source-over", n.context.setTransform(1, 0, 0, 1, 0, 0), n.context.globalAlpha = 1)) : (e.width != t && (e.width = t, "canvas" === o.Capabilities.renderMode && (window.sharedCanvas.width = t)), e.height != r && (e.height = r, "canvas" === o.Capabilities.renderMode && (window.sharedCanvas.height = r))), n.clear());
  }, o.Geolocation = o.wxgame.WebGeolocation, o.Motion = o.wxgame.WebMotion;
}(egret = egret || {}), window.sharedCanvas && (window.sharedCanvas.isCanvas = !0);