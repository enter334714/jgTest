var o=wx.$U;!function(o,a){a.un,a.uns;var i=a.static,l=a.class,n=a.getset,s=(a.__newvec,laya.utils.Browser),e=(laya.events.Event,laya.events.EventDispatcher),u=laya.resource.HTMLImage,c=laya.utils.Handler,t=laya.display.Input,h=laya.net.Loader,f=(laya.maths.Matrix,laya.renders.Render),v=laya.utils.RunDriver,m=(laya.media.Sound,laya.media.SoundChannel),p=laya.media.SoundManager,_=(laya.display.Stage,laya.net.URL),g=laya.utils.Utils,d=(l(an6_v,"laya.wx.mini.MiniAdpter"),an6_v.getJson=function(i){return JSON.parse(i)},an6_v.init=function(i,n){void 0===i&&(i=!1),void 0===n&&(n=!1),an6_v._inited||(an6_v.window=o).navigator.userAgent.indexOf("MiniGame")<0||(an6_v._inited=!0,an6_v.isZiYu=n,an6_v.isPosMsgYu=i,an6_v.EnvConfig={},an6_v.isZiYu||(r.setNativeFileDir("/layaairGame"),r.existDir(r.fileNativeDir,c.create(an6_v,an6_v.onMkdirCallBack))),an6_v.window.focus=function(){},a.getUrlPath=function(){},an6_v.window.logtime=function(i){},an6_v.window.alertTimeLog=function(i){},an6_v.window.resetShareInfo=function(){},an6_v.window.CanvasRenderingContext2D=function(){},an6_v.window.CanvasRenderingContext2D.prototype=an6_v.window.wx.createCanvas().getContext("2d").__proto__,an6_v.window.document.body.appendChild=function(){},an6_v.EnvConfig.pixelRatioInt=0,v.getPixelRatio=an6_v.pixelRatio,an6_v._preCreateElement=s.createElement,s.createElement=an6_v.createElement,v.createShaderCondition=an6_v.createShaderCondition,g.parseXMLFromString=an6_v.parseXMLFromString,t._createInputElement=y._createInputElement,an6_v.EnvConfig.load=h.prototype.load,h.prototype.load=E.prototype.load,an6_v.isZiYu&&i&&wx.onMessage(function(i){i.isLoad&&(r.ziyuFileData[i.url]=i.data)}))},an6_v.onMkdirCallBack=function(i,n){i||(r.filesListObj=JSON.parse(n.data))},an6_v.pixelRatio=function(){if(!an6_v.EnvConfig.pixelRatioInt)try{var i=wx.getSystemInfoSync();return an6_v.EnvConfig.pixelRatioInt=i.pixelRatio,i.pixelRatio}catch(i){}return an6_v.EnvConfig.pixelRatioInt},an6_v.createElement=function(i){return"canvas"!=i?"textarea"==i||"input"==i?an6_v.onCreateInput(i):"div"==i?((e=an6_v._preCreateElement(i)).contains=function(i){return null},e.removeChild=function(i){},e):an6_v._preCreateElement(i):(1==an6_v.idx?an6_v.isZiYu?(n=sharedCanvas).style={}:n=o.canvas:n=o.wx.createCanvas(),an6_v.idx++,n);var n;var e},an6_v.onCreateInput=function(i){i=an6_v._preCreateElement(i);return i.focus=y.wxinputFocus,i.blur=y.wxinputblur,i.style={},i.value=0,i.parentElement={},i.placeholder={},i.type={},i.setColor=function(i){},i.setType=function(i){},i.setFontFace=function(i){},i.addEventListener=function(i){},i.contains=function(i){return null},i.removeChild=function(i){},i},an6_v.createShaderCondition=function(i){var n=this;return function(){return n[i.replace("this.","")]}},an6_v.EnvConfig=null,an6_v.window=null,an6_v._preCreateElement=null,an6_v._inited=!1,an6_v.wxRequest=null,an6_v.systemInfo=null,an6_v.version="0.0.1",an6_v.isZiYu=!1,an6_v.isPosMsgYu=!1,an6_v.parseXMLFromString=function(i){var n;i=i.replace(/>\s+</g,"><");try{n=(new o.Parser.DOMParser).parseFromString(i,"text/xml")}catch(i){throw"\u9700\u8981\u5f15\u5165xml\u89e3\u6790\u5e93\u6587\u4ef6"}return n},an6_v.idx=1,an6_v),y=(l(efp$,"laya.wx.mini.MiniImage"),efp$.prototype._loadImage=function(i){var n=!1;-1==i.indexOf("layaNativeDir/")&&(n=!0,i=_.formatURL(i)),r.getFileInfo(i)?efp$.onCreateImage(i,this,!n):-1!=i.indexOf("http://")||-1!=i.indexOf("https://")?r.downImg(i,new c(efp$,efp$.onDownImgCallBack,[i,this]),i):efp$.onCreateImage(i,this,!0)},efp$.onDownImgCallBack=function(i,n,e){e?n.onError(null):efp$.onCreateImage(i,n)},efp$.onCreateImage=function(n,e,i){var t;function mqilox(){t.onload=null,t.onerror=null,delete e.imgCache[n]}i=(i=void 0===i?!1:i)?n:(i=r.getFileInfo(n).md5,r.getFileNativePath(i)),null==e.imgCache&&(e.imgCache={});function za(){mqilox(),e.onLoaded(t)}function Aa(){mqilox(),e.event("error","Load image failed")}"nativeimage"==e._type?((t=new s.window.Image).crossOrigin="",t.onload=za,t.onerror=Aa,t.src=i,e.imgCache[n]=t):new u.create(i,{onload:za,onerror:Aa,onCreate:function(i){t=i,e.imgCache[n]=i}})},l(c10b8,"laya.wx.mini.MiniInput"),c10b8._createInputElement=function(){t._initInput(t.area=s.createElement("textarea")),t._initInput(t.input=s.createElement("input")),t.inputContainer=s.createElement("div"),t.inputContainer.style.position="absolute",t.inputContainer.style.zIndex=1e5,s.container.appendChild(t.inputContainer),t.inputContainer.setPos=function(i,n){t.inputContainer.style.left=i+"px",t.inputContainer.style.top=n+"px"},a.stage.on("resize",null,c10b8._onStageResize),wx.onWindowResize&&wx.onWindowResize(function(i){o.dispatchEvent&&o.dispatchEvent("resize")}),p._soundClass=w,p._musicClass=w,o._videoClass=C},c10b8._onStageResize=function(){a.stage._canvasTransform.identity().scale(s.width/f.canvas.width/v.getPixelRatio(),s.height/f.canvas.height/v.getPixelRatio())},c10b8.wxinputFocus=function(i){var n=t.inputElement.target;n&&!n.editable||(d.window.wx.offKeyboardConfirm(),d.window.wx.offKeyboardInput(),d.window.wx.showKeyboard({defaultValue:n.text,maxLength:n.maxChars,multiple:n.multiline,confirmHold:!0,confirmType:"done",success:function(i){},fail:function(i){}}),d.window.wx.onKeyboardConfirm(function(i){i=i?i.value:"";n.text=i,n.event("input"),laya.wx.mini.MiniInput.inputEnter()}),d.window.wx.onKeyboardInput(function(i){i=i?i.value:"";n.multiline||-1==i.indexOf("\n")?(n.text=i,n.event("input")):laya.wx.mini.MiniInput.inputEnter()}))},c10b8.inputEnter=function(){t.inputElement.target.focus=!1},c10b8.wxinputblur=function(){c10b8.hideKeyboard()},c10b8.hideKeyboard=function(){d.window.wx.offKeyboardConfirm(),d.window.wx.offKeyboardInput(),d.window.wx.hideKeyboard({success:function(i){console.log("\u9690\u85cf\u952e\u76d8")},fail:function(i){console.log("\u9690\u85cf\u952e\u76d8\u51fa\u9519:"+(i?i.errMsg:""))}})},c10b8),E=(l(g95tzd,"laya.wx.mini.MiniLoader"),(F=g95tzd.prototype).load=function(i,n,e,t,o){void 0===e&&(e=!0),void 0===o&&(o=!1);var a=this;0===(a._url=i).indexOf("data:image")?a._type=n="image":a._type=n=n||a.getTypeFromUrl(i),a._cache=e,a._data=null;var l="ascii";-1!=i.indexOf(".fnt")?l="utf8":"arraybuffer"==n&&(l="");var s=g.getFileExtension(i);if(-1!=g95tzd._fileTypeArr.indexOf(s))d.EnvConfig.load.call(this,i,n,e,t,o);else if(r.getFileInfo(i))d.EnvConfig.load.call(this,i,n,e,t,o);else{if(-1!=i.indexOf("layaNativeDir/"))return d.isZiYu?(s=r.ziyuFileData[i],void a.onLoaded(s)):(cosnole.log("read read"),void r.read(i,l,new c(g95tzd,g95tzd.onReadNativeCallBack,[l,i,n,e,t,o,a])));s=""==_.rootPath?i:i.split(_.rootPath)[0],-1!=i.indexOf("http://")||-1!=i.indexOf("https://")?d.EnvConfig.load.call(a,i,n,e,t,o):r.readFile(s,l,new c(g95tzd,g95tzd.onReadNativeCallBack,[l,i,n,e,t,o,a]),i)}},F.resMgrLoad=function(i,t,n,e,o,a,l){void 0===n&&(n=0),void 0===e&&(e=!1),void 0===o&&(o=!1),void 0===a&&(a=0),void 0===l&&(l=3),-1!=i.indexOf("mpack")&&console.log("=============resMgrLoad url:",i),d.EnvConfig.resMgrLoad(i,(i,n,e)=>{g95tzd.prototype.resMgrLoadCallBack(i,n,e,t)},n,e,o,a,l)},F.resMgrLoadCallBack=function(i,n,e,t){console.log("buff:::",i,e,r.fileNativeDir+"///"+r.fileListName),t(i,n,e)},F.clearRes=function(i,n){this.clearRes(i,n=void 0===n?!1:n);n=r.getFileInfo(i);!n||-1==i.indexOf("http://")&&-1==i.indexOf("https://")||(i=n.md5,n=r.getFileNativePath(i),r.remove(n))},g95tzd.onReadNativeCallBack=function(i,n,e,t,o,a,l,s,r){void 0===t&&(t=!0),void 0===a&&(a=!1),(s=void 0===s?0:s)?1==s&&d.EnvConfig.load.call(l,n,e,t,o,a):(s="json"==e||"atlas"==e?d.getJson(r.data):"xml"==e?g.parseXMLFromString(r.data):r.data,l.onLoaded(s),!d.isZiYu&&d.isPosMsgYu&&"arraybuffer"!=e&&wx.postMessage({url:n,data:s,isLoad:!0}))},i(g95tzd,["_fileTypeArr",function(){return this._fileTypeArr=["png","jpg","bmp","jpeg","gif"]}]),g95tzd),r=(l(ihqlo,"laya.wx.mini.MiniFileMgr",e),ihqlo.isLoadFile=function(i){return-1!=ihqlo._fileTypeArr.indexOf(i)},ihqlo.getFileInfo=function(i){i=i.split("?")[0],i=ihqlo.filesListObj[i];return null==i?null:i},ihqlo.onFileUpdate=function(i,n){var i=i.split("/"),i=i[i.length-1],e=ihqlo.getFileInfo(n);null==e?ihqlo.onSaveFile(n,i):e.readyUrl!=n&&ihqlo.remove(i,n)},ihqlo.exits=function(i,n){i=ihqlo.getFileNativePath(i);ihqlo.fs.getFileInfo({filePath:i,success:function(i){null!=n&&n.runWith([0,i])},fail:function(i){null!=n&&n.runWith([1,i])}})},ihqlo.read=function(i,n,e,t){void 0===n&&(n="ascill"),i=""!=(t=void 0===t?"":t)?ihqlo.getFileNativePath(i):i,ihqlo.fs.readFile({filePath:i,encoding:n,success:function(i){null!=e&&e.runWith([0,i])},fail:function(i){i&&""!=t?ihqlo.down(t,n,e,t):null!=e&&e.runWith([1])}})},ihqlo.readNativeFile=function(i,n){ihqlo.fs.readFile({filePath:i,encoding:"",success:function(i){null!=n&&n.runWith([0])},fail:function(i){null!=n&&n.runWith([1])}})},ihqlo.down=function(i,n,e,t){void 0===n&&(n="ascill"),void 0===t&&(t="");var o=ihqlo.getFileNativePath(t);ihqlo.wxdown({url:i,filePath:o,success:function(i){200===i.statusCode&&ihqlo.readFile(i.filePath,n,e,t)},fail:function(i){null!=e&&e.runWith([1,i])}}).onProgressUpdate(function(i){null!=e&&e.runWith([2,i.progress])})},ihqlo.readFile=function(n,i,e,t){void 0===t&&(t=""),ihqlo.fs.readFile({filePath:n,encoding:i=void 0===i?"ascill":i,success:function(i){-1==n.indexOf("http://")&&-1==n.indexOf("https://")||ihqlo.onFileUpdate(n,t),null!=e&&e.runWith([0,i])},fail:function(i){i&&null!=e&&e.runWith([1,i])}})},ihqlo.downImg=function(i,n,e){void 0===e&&(e="");ihqlo.wxdown({url:i,success:function(i){200===i.statusCode&&ihqlo.copyFile(i.tempFilePath,e,n)},fail:function(i){null!=n&&n.runWith([1,i])}})},ihqlo.copyFile=function(i,n,e){var t=i.split("/"),o=t[t.length-1],a=(n.split("?")[0],ihqlo.getFileInfo(n)),t=ihqlo.getFileNativePath(o);ihqlo.fs.copyFile({srcPath:i,destPath:t,success:function(i){a?a.readyUrl!=n&&ihqlo.remove(o,n,e):(ihqlo.onSaveFile(n,o),null!=e&&e.runWith([0]))},fail:function(i){null!=e&&e.runWith([1,i])}})},ihqlo.getFileNativePath=function(i){return laya.wx.mini.MiniFileMgr.fileNativeDir+"/"+i},ihqlo.remove=function(n,e,t){void 0===e&&(e="");var i=ihqlo.getFileInfo(e),o=ihqlo.getFileNativePath(i.md5);a.loader.clearRes(i.readyUrl),ihqlo.fs.unlink({filePath:o,success:function(i){""!=e&&ihqlo.onSaveFile(e,n),null!=t&&t.runWith([0])},fail:function(i){}})},ihqlo.onSaveFile=function(i,n){var e=i.split("?")[0];ihqlo.filesListObj[e]={md5:n,readyUrl:i},ihqlo.fs.writeFile({filePath:ihqlo.fileNativeDir+"/"+ihqlo.fileListName,encoding:"utf8",data:JSON.stringify(ihqlo.filesListObj),success:function(i){console.log("\u5199\u5165\u6d4b\u8bd5\u6d4b\u8bd5\u6210\u529f\uff1a",i)},fail:function(i){console.log("\u5199\u5165\u6d4b\u8bd5\u6d4b\u8bd5\u5931\u8d25\uff1a",i)}})},ihqlo.existDir=function(i,n){ihqlo.fs.mkdir({dirPath:i,success:function(i){null!=n&&n.runWith([0,{data:JSON.stringify({})}])},fail:function(i){-1!=i.errMsg.indexOf("file already exists")?ihqlo.readSync(ihqlo.fileListName,"utf8",n):null!=n&&n.runWith([1,i])}})},ihqlo.readSync=function(i,n,e,t){void 0===n&&(n="ascill"),void 0===t&&(t="");var o,n=ihqlo.getFileNativePath(i);try{o=ihqlo.fs.readFileSync(n),null!=e&&e.runWith([0,{data:o}])}catch(i){null!=e&&e.runWith([1])}},ihqlo.readCache=function(){},ihqlo.writeCache=function(i){var n=readyUrl.split("?")[0];ihqlo.filesListObj[n]={md5:md5Name,readyUrl:readyUrl},ihqlo.fs.writeFile({filePath:ihqlo.fileNativeDir+"/"+ihqlo.fileListName,encoding:"utf8",data:JSON.stringify(ihqlo.filesListObj),success:function(i){},fail:function(i){}})},ihqlo.setNativeFileDir=function(i){ihqlo.fileNativeDir=wx.env.USER_DATA_PATH+i},ihqlo.filesListObj={},ihqlo.fileNativeDir=null,ihqlo.fileListName="layaairfiles.txt",ihqlo.ziyuFileData={},i(ihqlo,["_fileTypeArr",function(){return this._fileTypeArr=["json","ani","xml","sk","txt","atlas","swf","part","fnt","proto","lh","lav","lani","lmat","lm","ltc"]},"fs",function(){return this.fs=wx.getFileSystemManager()},"wxdown",function(){return this.wxdown=wx.downloadFile}]),ihqlo),w=(l(_6kvn,"laya.wx.mini.MiniSound",e),(F=_6kvn.prototype).load=function(i){var n;i=_.formatURL(i),this.url=i,_6kvn._audioCache[i]?this.event("complete"):(this._sound.onCanplay(function(){n.loaded=!0,n.event("complete"),_6kvn._audioCache[n.url]=n}),this._sound.onError(function(i){console.error("errCode="+i.errCode+"  errMsg="+i.errMsg),n.event("error")}),this._sound.src=i,n=this)},F.play=function(i,n){var e,t;return void 0===i&&(i=0),void 0===n&&(n=0),t=(e=this.url==p._tMusic?(_6kvn._musicAudio||(_6kvn._musicAudio=this._sound),_6kvn._musicAudio):this._sound,this._chanell),e.src=this.url,e.startTime=0,t.isStopped&&(t.url=this.url,t.loops=n,t.startTime=i,t.play(),p.addChannel(t)),t},F.dispose=function(){var i=_6kvn._audioCache[this.url];i&&(i.src="",delete _6kvn._audioCache[this.url])},n(0,F,"duration",function(){return this._sound.duration}),_6kvn._createSound=function(){return _6kvn._id++,d.window.wx.createInnerAudioContext({useWebAudioImplement:!1})},_6kvn._musicAudio=null,_6kvn._id=0,_6kvn._audioCache={},_6kvn._null=void 0,_6kvn),x=(l(xwg9,"laya.wx.mini.MiniSoundChannel",m),(i=xwg9.prototype).__onEnd=function(){if(1==this.loops)return this.completeHandler&&(a.timer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(),void this.event("complete");0<this.loops&&this.loops--,this.startTime=0,this.play()},i.__onNull=function(){},i.play=function(){this.isStopped=!1,p.addChannel(this),this._audio&&this._audio.play()},i.stop=function(){this.isStopped=!0,p.removeChannel(this),this.completeHandler=null,this._audio&&this._audio.stop()},i.pause=function(){this.isStopped=!0,this._audio.pause()},i.resume=function(){this._audio&&(this.isStopped=!1,p.addChannel(this),this._audio.play())},n(0,i,"position",function(){return this._audio?this._audio.currentTime:0}),n(0,i,"duration",function(){return this._audio?this._audio.duration:0}),n(0,i,"volume",function(){return 1},function(i){}),xwg9._null=void 0,xwg9),C=(l(jh3moi,"laya.wx.mini.MiniVideo"),(e=jh3moi.prototype).on=function(i,n,e){"loadedmetadata"==i?(this.onPlayFunc=e.bind(n),this.videoElement.onPlay=this.onPlayFunction.bind(this)):"ended"==i&&(this.onEndedFunC=e.bind(n),this.videoElement.onEnded=this.onEndedFunction.bind(this)),this.videoElement.onTimeUpdate=this.onTimeUpdateFunc.bind(this)},e.onTimeUpdateFunc=function(i){this.position=i.position,this._duration=i.duration},e.onPlayFunction=function(){this.videoElement&&(this.videoElement.readyState=200),console.log("=====\u89c6\u9891\u52a0\u8f7d\u5b8c\u6210========"),null!=this.onPlayFunc&&this.onPlayFunc()},e.onended=function(i,n){this.onEndedFunC=n.bind(i),this.videoElement.onended=this.onEndedFunction.bind(this)},e.onEndedFunction=function(){this.videoElement&&(this.videoend=!0,console.log("=====\u89c6\u9891\u64ad\u653e\u5b8c\u6bd5========"),null!=this.onEndedFunC&&this.onEndedFunC())},e.off=function(i,n,e){"loadedmetadata"==i?(this.onPlayFunc=e.bind(n),this.videoElement.offPlay=this.onPlayFunction.bind(this)):"ended"==i&&(this.onEndedFunC=e.bind(n),this.videoElement.offEnded=this.onEndedFunction.bind(this))},e.load=function(i){this.videoElement&&(this.videoElement.src=i)},e.play=function(){this.videoElement&&(this.videoend=!1,this.videoElement.play())},e.pause=function(){this.videoElement&&(this.videoend=!0,this.videoElement.pause())},e.size=function(i,n){this.videoElement&&(this.videoElement.width=i,this.videoElement.height=n)},e.destroy=function(){this.videoElement&&this.videoElement.destroy(),this.videoElement=null,this.onEndedFunC=null,this.onPlayFunc=null,this.videoend=!1,this.videourl=null},e.reload=function(){this.videoElement&&(this.videoElement.src=this.videourl)},n(0,e,"duration",function(){return this._duration}),n(0,e,"currentTime",function(){return this.videoElement?this.videoElement.initialTime:0},function(i){this.videoElement&&(this.videoElement.initialTime=i)}),n(0,e,"videoWidth",function(){return this.videoElement?this.videoElement.width:0}),n(0,e,"videoHeight",function(){return this.videoElement?this.videoElement.height:0}),n(0,e,"ended",function(){return this.videoend}),n(0,e,"loop",function(){return!!this.videoElement&&this.videoElement.loop},function(i){this.videoElement&&(this.videoElement.loop=i)}),n(0,e,"playbackRate",function(){return this.videoElement?this.videoElement.playbackRate:0},function(i){this.videoElement&&(this.videoElement.playbackRate=i)}),n(0,e,"muted",function(){return!!this.videoElement&&this.videoElement.muted},function(i){this.videoElement&&(this.videoElement.muted=i)}),n(0,e,"paused",function(){return!!this.videoElement&&this.videoElement.paused}),n(0,e,"x",function(){return this.videoElement?this.videoElement.x:0},function(i){this.videoElement&&(this.videoElement.x=i)}),n(0,e,"y",function(){return this.videoElement?this.videoElement.y:0},function(i){this.videoElement&&(this.videoElement.y=i)}),n(0,e,"currentSrc",function(){return this.videoElement.src}),n(0,e,"src",function(){return this.videoElement?this.videoElement.src:0},function(i){this.videoElement&&(this.videoElement.src=i)}),n(0,e,"controls",function(){if(this.videoElement)return this.videoElement.controls},function(i){this.videoElement&&(this.videoElement.controls=i)}),n(0,e,"autoplay",function(){if(this.videoElement)return this.videoElement.autoplay},function(i){this.videoElement&&(this.videoElement.autoplay=i)}),jh3moi);function jh3moi(){this.videoend=!1,this.videourl="",this.videoElement=d.window.wx.createVideo({showCenterPlayBtn:!1,showProgressInControlMode:!1,objectFit:"fill"})}function xwg9(i){this._audio=null,this._onEnd=null,xwg9.__super.call(this),this.isStopped=!0,this._audio=i,this._onEnd=g.bind(this.__onEnd,this),i.onEnded(this._onEnd)}function _6kvn(){this._sound=null,this._chanell=null,this.url=null,this.loaded=!1,_6kvn.__super.call(this),this._sound=_6kvn._createSound(),this._chanell=new x(this._sound)}function ihqlo(){ihqlo.__super.call(this)}function g95tzd(){}var F;function c10b8(){}function efp$(){}function an6_v(){}}(window,(document,Laya)),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(i,n){"use strict";for(var e in Object.defineProperty(n,"__esModule",{value:!0}),Laya){var t=Laya[e];t&&t.__isclass&&(n[e]=t)}});