var B=wx.$z;!function(o,a){a.un,a.uns;var i=a.static,d=a.class,e=a.getset,l=(a.__newvec,laya.utils.Browser),n=(laya.events.Event,laya.events.EventDispatcher),r=laya.resource.HTMLImage,f=laya.utils.Handler,t=laya.display.Input,c=laya.net.Loader,h=(laya.maths.Matrix,laya.renders.Render),m=laya.utils.RunDriver,w=(laya.media.Sound,laya.media.SoundChannel),v=laya.media.SoundManager,p=(laya.display.Stage,laya.net.URL),y=laya.utils.Utils,u=(d(wmz9d,"laya.wx.mini.MiniAdpter"),wmz9d.getJson=function(i){return JSON.parse(i)},wmz9d.init=function(i,e){void 0===i&&(i=!1),void 0===e&&(e=!1),wmz9d._inited||(wmz9d.window=o).navigator.userAgent.indexOf("MiniGame")<0||(wmz9d._inited=!0,wmz9d.isZiYu=e,wmz9d.isPosMsgYu=i,wmz9d.EnvConfig={},wmz9d.isZiYu||(s.setNativeFileDir("/layaairGame"),s.existDir(s.fileNativeDir,f.create(wmz9d,wmz9d.onMkdirCallBack))),wmz9d.window.focus=function(){},a.getUrlPath=function(){},wmz9d.window.logtime=function(i){},wmz9d.window.alertTimeLog=function(i){},wmz9d.window.resetShareInfo=function(){},wmz9d.window.CanvasRenderingContext2D=function(){},wmz9d.window.CanvasRenderingContext2D.prototype=wmz9d.window.wx.createCanvas().getContext("2d").__proto__,wmz9d.window.document.body.appendChild=function(){},wmz9d.EnvConfig.pixelRatioInt=0,m.getPixelRatio=wmz9d.pixelRatio,wmz9d._preCreateElement=l.createElement,l.createElement=wmz9d.createElement,m.createShaderCondition=wmz9d.createShaderCondition,y.parseXMLFromString=wmz9d.parseXMLFromString,t._createInputElement=z._createInputElement,wmz9d.EnvConfig.load=c.prototype.load,c.prototype.load=g.prototype.load,wmz9d.isZiYu&&i&&wx.onMessage(function(i){i.isLoad&&(s.ziyuFileData[i.url]=i.data)}))},wmz9d.onMkdirCallBack=function(i,e){i||(s.filesListObj=JSON.parse(e.data))},wmz9d.pixelRatio=function(){if(!wmz9d.EnvConfig.pixelRatioInt)try{var i=wx.getSystemInfoSync();return wmz9d.EnvConfig.pixelRatioInt=i.pixelRatio,i.pixelRatio}catch(i){}return wmz9d.EnvConfig.pixelRatioInt},wmz9d.createElement=function(i){return"canvas"!=i?"textarea"==i||"input"==i?wmz9d.onCreateInput(i):"div"==i?((n=wmz9d._preCreateElement(i)).contains=function(i){return null},n.removeChild=function(i){},n):wmz9d._preCreateElement(i):(1==wmz9d.idx?wmz9d.isZiYu?(e=sharedCanvas).style={}:e=o.canvas:e=o.wx.createCanvas(),wmz9d.idx++,e);var e;var n},wmz9d.onCreateInput=function(i){i=wmz9d._preCreateElement(i);return i.focus=z.wxinputFocus,i.blur=z.wxinputblur,i.style={},i.value=0,i.parentElement={},i.placeholder={},i.type={},i.setColor=function(i){},i.setType=function(i){},i.setFontFace=function(i){},i.addEventListener=function(i){},i.contains=function(i){return null},i.removeChild=function(i){},i},wmz9d.createShaderCondition=function(i){var e=this;return function(){return e[i.replace("this.","")]}},wmz9d.EnvConfig=null,wmz9d.window=null,wmz9d._preCreateElement=null,wmz9d._inited=!1,wmz9d.wxRequest=null,wmz9d.systemInfo=null,wmz9d.version="0.0.1",wmz9d.isZiYu=!1,wmz9d.isPosMsgYu=!1,wmz9d.parseXMLFromString=function(i){var e;i=i.replace(/>\s+</g,"><");try{e=(new o.Parser.DOMParser).parseFromString(i,"text/xml")}catch(i){throw"\u9700\u8981\u5f15\u5165xml\u89e3\u6790\u5e93\u6587\u4ef6"}return e},wmz9d.idx=1,wmz9d),z=(d(d83x61,"laya.wx.mini.MiniImage"),d83x61.prototype._loadImage=function(i){var e=!1;-1==i.indexOf("layaNativeDir/")&&(e=!0,i=p.formatURL(i)),s.getFileInfo(i)?d83x61.onCreateImage(i,this,!e):-1!=i.indexOf("http://")||-1!=i.indexOf("https://")?s.downImg(i,new f(d83x61,d83x61.onDownImgCallBack,[i,this]),i):d83x61.onCreateImage(i,this,!0)},d83x61.onDownImgCallBack=function(i,e,n){n?e.onError(null):d83x61.onCreateImage(i,e)},d83x61.onCreateImage=function(e,n,i){var t;function jgaq(){t.onload=null,t.onerror=null,delete n.imgCache[e]}i=(i=void 0===i?!1:i)?e:(i=s.getFileInfo(e).md5,s.getFileNativePath(i)),null==n.imgCache&&(n.imgCache={});function za(){jgaq(),n.onLoaded(t)}function Aa(){jgaq(),n.event("error","Load image failed")}"nativeimage"==n._type?((t=new l.window.Image).crossOrigin="",t.onload=za,t.onerror=Aa,t.src=i,n.imgCache[e]=t):new r.create(i,{onload:za,onerror:Aa,onCreate:function(i){t=i,n.imgCache[e]=i}})},d(n0q,"laya.wx.mini.MiniInput"),n0q._createInputElement=function(){t._initInput(t.area=l.createElement("textarea")),t._initInput(t.input=l.createElement("input")),t.inputContainer=l.createElement("div"),t.inputContainer.style.position="absolute",t.inputContainer.style.zIndex=1e5,l.container.appendChild(t.inputContainer),t.inputContainer.setPos=function(i,e){t.inputContainer.style.left=i+"px",t.inputContainer.style.top=e+"px"},a.stage.on("resize",null,n0q._onStageResize),wx.onWindowResize&&wx.onWindowResize(function(i){o.dispatchEvent&&o.dispatchEvent("resize")}),v._soundClass=E,v._musicClass=E,o._videoClass=_},n0q._onStageResize=function(){a.stage._canvasTransform.identity().scale(l.width/h.canvas.width/m.getPixelRatio(),l.height/h.canvas.height/m.getPixelRatio())},n0q.wxinputFocus=function(i){var e=t.inputElement.target;e&&!e.editable||(u.window.wx.offKeyboardConfirm(),u.window.wx.offKeyboardInput(),u.window.wx.showKeyboard({defaultValue:e.text,maxLength:e.maxChars,multiple:e.multiline,confirmHold:!0,confirmType:"done",success:function(i){},fail:function(i){}}),u.window.wx.onKeyboardConfirm(function(i){i=i?i.value:"";e.text=i,e.event("input"),laya.wx.mini.MiniInput.inputEnter()}),u.window.wx.onKeyboardInput(function(i){i=i?i.value:"";e.multiline||-1==i.indexOf("\n")?(e.text=i,e.event("input")):laya.wx.mini.MiniInput.inputEnter()}))},n0q.inputEnter=function(){t.inputElement.target.focus=!1},n0q.wxinputblur=function(){n0q.hideKeyboard()},n0q.hideKeyboard=function(){u.window.wx.offKeyboardConfirm(),u.window.wx.offKeyboardInput(),u.window.wx.hideKeyboard({success:function(i){console.log("\u9690\u85cf\u952e\u76d8")},fail:function(i){console.log("\u9690\u85cf\u952e\u76d8\u51fa\u9519:"+(i?i.errMsg:""))}})},n0q),g=(d(sibu7o,"laya.wx.mini.MiniLoader"),(C=sibu7o.prototype).load=function(i,e,n,t,o){void 0===n&&(n=!0),void 0===o&&(o=!1);var a=this;0===(a._url=i).indexOf("data:image")?a._type=e="image":a._type=e=e||a.getTypeFromUrl(i),a._cache=n,a._data=null;var d="ascii";-1!=i.indexOf(".fnt")?d="utf8":"arraybuffer"==e&&(d="");var l=y.getFileExtension(i);if(-1!=sibu7o._fileTypeArr.indexOf(l))u.EnvConfig.load.call(this,i,e,n,t,o);else if(s.getFileInfo(i))u.EnvConfig.load.call(this,i,e,n,t,o);else{if(-1!=i.indexOf("layaNativeDir/"))return u.isZiYu?(l=s.ziyuFileData[i],void a.onLoaded(l)):(cosnole.log("read read"),void s.read(i,d,new f(sibu7o,sibu7o.onReadNativeCallBack,[d,i,e,n,t,o,a])));l=""==p.rootPath?i:i.split(p.rootPath)[0],-1!=i.indexOf("http://")||-1!=i.indexOf("https://")?u.EnvConfig.load.call(a,i,e,n,t,o):s.readFile(l,d,new f(sibu7o,sibu7o.onReadNativeCallBack,[d,i,e,n,t,o,a]),i)}},C.resMgrLoad=function(i,t,e,n,o,a,d){void 0===e&&(e=0),void 0===n&&(n=!1),void 0===o&&(o=!1),void 0===a&&(a=0),void 0===d&&(d=3),-1!=i.indexOf("mpack")&&console.log("=============resMgrLoad url:",i),u.EnvConfig.resMgrLoad(i,(i,e,n)=>{sibu7o.prototype.resMgrLoadCallBack(i,e,n,t)},e,n,o,a,d)},C.resMgrLoadCallBack=function(i,e,n,t){console.log("buff:::",i,n,s.fileNativeDir+"///"+s.fileListName),t(i,e,n)},C.clearRes=function(i,e){this.clearRes(i,e=void 0===e?!1:e);e=s.getFileInfo(i);!e||-1==i.indexOf("http://")&&-1==i.indexOf("https://")||(i=e.md5,e=s.getFileNativePath(i),s.remove(e))},sibu7o.onReadNativeCallBack=function(i,e,n,t,o,a,d,l,s){void 0===t&&(t=!0),void 0===a&&(a=!1),(l=void 0===l?0:l)?1==l&&u.EnvConfig.load.call(d,e,n,t,o,a):(l="json"==n||"atlas"==n?u.getJson(s.data):"xml"==n?y.parseXMLFromString(s.data):s.data,d.onLoaded(l),!u.isZiYu&&u.isPosMsgYu&&"arraybuffer"!=n&&wx.postMessage({url:e,data:l,isLoad:!0}))},i(sibu7o,["_fileTypeArr",function(){return this._fileTypeArr=["png","jpg","bmp","jpeg","gif"]}]),sibu7o),s=(d(f39dzw,"laya.wx.mini.MiniFileMgr",n),f39dzw.isLoadFile=function(i){return-1!=f39dzw._fileTypeArr.indexOf(i)},f39dzw.getFileInfo=function(i){i=i.split("?")[0],i=f39dzw.filesListObj[i];return null==i?null:i},f39dzw.onFileUpdate=function(i,e){var i=i.split("/"),i=i[i.length-1],n=f39dzw.getFileInfo(e);null==n?f39dzw.onSaveFile(e,i):n.readyUrl!=e&&f39dzw.remove(i,e)},f39dzw.exits=function(i,e){i=f39dzw.getFileNativePath(i);f39dzw.fs.getFileInfo({filePath:i,success:function(i){null!=e&&e.runWith([0,i])},fail:function(i){null!=e&&e.runWith([1,i])}})},f39dzw.read=function(i,e,n,t){void 0===e&&(e="ascill"),i=""!=(t=void 0===t?"":t)?f39dzw.getFileNativePath(i):i,f39dzw.fs.readFile({filePath:i,encoding:e,success:function(i){null!=n&&n.runWith([0,i])},fail:function(i){i&&""!=t?f39dzw.down(t,e,n,t):null!=n&&n.runWith([1])}})},f39dzw.readNativeFile=function(i,e){f39dzw.fs.readFile({filePath:i,encoding:"",success:function(i){null!=e&&e.runWith([0])},fail:function(i){null!=e&&e.runWith([1])}})},f39dzw.down=function(i,e,n,t){void 0===e&&(e="ascill"),void 0===t&&(t="");var o=f39dzw.getFileNativePath(t);f39dzw.wxdown({url:i,filePath:o,success:function(i){200===i.statusCode&&f39dzw.readFile(i.filePath,e,n,t)},fail:function(i){null!=n&&n.runWith([1,i])}}).onProgressUpdate(function(i){null!=n&&n.runWith([2,i.progress])})},f39dzw.readFile=function(e,i,n,t){void 0===t&&(t=""),f39dzw.fs.readFile({filePath:e,encoding:i=void 0===i?"ascill":i,success:function(i){-1==e.indexOf("http://")&&-1==e.indexOf("https://")||f39dzw.onFileUpdate(e,t),null!=n&&n.runWith([0,i])},fail:function(i){i&&null!=n&&n.runWith([1,i])}})},f39dzw.downImg=function(i,e,n){void 0===n&&(n="");f39dzw.wxdown({url:i,success:function(i){200===i.statusCode&&f39dzw.copyFile(i.tempFilePath,n,e)},fail:function(i){null!=e&&e.runWith([1,i])}})},f39dzw.copyFile=function(i,e,n){var t=i.split("/"),o=t[t.length-1],a=(e.split("?")[0],f39dzw.getFileInfo(e)),t=f39dzw.getFileNativePath(o);f39dzw.fs.copyFile({srcPath:i,destPath:t,success:function(i){a?a.readyUrl!=e&&f39dzw.remove(o,e,n):(f39dzw.onSaveFile(e,o),null!=n&&n.runWith([0]))},fail:function(i){null!=n&&n.runWith([1,i])}})},f39dzw.getFileNativePath=function(i){return laya.wx.mini.MiniFileMgr.fileNativeDir+"/"+i},f39dzw.remove=function(e,n,t){void 0===n&&(n="");var i=f39dzw.getFileInfo(n),o=f39dzw.getFileNativePath(i.md5);a.loader.clearRes(i.readyUrl),f39dzw.fs.unlink({filePath:o,success:function(i){""!=n&&f39dzw.onSaveFile(n,e),null!=t&&t.runWith([0])},fail:function(i){}})},f39dzw.onSaveFile=function(i,e){var n=i.split("?")[0];f39dzw.filesListObj[n]={md5:e,readyUrl:i},f39dzw.fs.writeFile({filePath:f39dzw.fileNativeDir+"/"+f39dzw.fileListName,encoding:"utf8",data:JSON.stringify(f39dzw.filesListObj),success:function(i){console.log("\u5199\u5165\u6d4b\u8bd5\u6d4b\u8bd5\u6210\u529f\uff1a",i)},fail:function(i){console.log("\u5199\u5165\u6d4b\u8bd5\u6d4b\u8bd5\u5931\u8d25\uff1a",i)}})},f39dzw.existDir=function(i,e){f39dzw.fs.mkdir({dirPath:i,success:function(i){null!=e&&e.runWith([0,{data:JSON.stringify({})}])},fail:function(i){-1!=i.errMsg.indexOf("file already exists")?f39dzw.readSync(f39dzw.fileListName,"utf8",e):null!=e&&e.runWith([1,i])}})},f39dzw.readSync=function(i,e,n,t){void 0===e&&(e="ascill"),void 0===t&&(t="");var o,e=f39dzw.getFileNativePath(i);try{o=f39dzw.fs.readFileSync(e),null!=n&&n.runWith([0,{data:o}])}catch(i){null!=n&&n.runWith([1])}},f39dzw.readCache=function(){},f39dzw.writeCache=function(i){var e=readyUrl.split("?")[0];f39dzw.filesListObj[e]={md5:md5Name,readyUrl:readyUrl},f39dzw.fs.writeFile({filePath:f39dzw.fileNativeDir+"/"+f39dzw.fileListName,encoding:"utf8",data:JSON.stringify(f39dzw.filesListObj),success:function(i){},fail:function(i){}})},f39dzw.setNativeFileDir=function(i){f39dzw.fileNativeDir=wx.env.USER_DATA_PATH+i},f39dzw.filesListObj={},f39dzw.fileNativeDir=null,f39dzw.fileListName="layaairfiles.txt",f39dzw.ziyuFileData={},i(f39dzw,["_fileTypeArr",function(){return this._fileTypeArr=["json","ani","xml","sk","txt","atlas","swf","part","fnt","proto","lh","lav","lani","lmat","lm","ltc"]},"fs",function(){return this.fs=wx.getFileSystemManager()},"wxdown",function(){return this.wxdown=wx.downloadFile}]),f39dzw),E=(d(uiosrj,"laya.wx.mini.MiniSound",n),(C=uiosrj.prototype).load=function(i){var e;i=p.formatURL(i),this.url=i,uiosrj._audioCache[i]?this.event("complete"):(this._sound.onCanplay(function(){e.loaded=!0,e.event("complete"),uiosrj._audioCache[e.url]=e}),this._sound.onError(function(i){console.error("errCode="+i.errCode+"  errMsg="+i.errMsg),e.event("error")}),this._sound.src=i,e=this)},C.play=function(i,e){var n,t;return void 0===i&&(i=0),void 0===e&&(e=0),t=(n=this.url==v._tMusic?(uiosrj._musicAudio||(uiosrj._musicAudio=this._sound),uiosrj._musicAudio):this._sound,this._chanell),n.src=this.url,n.startTime=0,t.isStopped&&(t.url=this.url,t.loops=e,t.startTime=i,t.play(),v.addChannel(t)),t},C.dispose=function(){var i=uiosrj._audioCache[this.url];i&&(i.src="",delete uiosrj._audioCache[this.url])},e(0,C,"duration",function(){return this._sound.duration}),uiosrj._createSound=function(){return uiosrj._id++,u.window.wx.createInnerAudioContext({useWebAudioImplement:!1})},uiosrj._musicAudio=null,uiosrj._id=0,uiosrj._audioCache={},uiosrj._null=void 0,uiosrj),x=(d(naqhm,"laya.wx.mini.MiniSoundChannel",w),(i=naqhm.prototype).__onEnd=function(){if(1==this.loops)return this.completeHandler&&(a.timer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(),void this.event("complete");0<this.loops&&this.loops--,this.startTime=0,this.play()},i.__onNull=function(){},i.play=function(){this.isStopped=!1,v.addChannel(this),this._audio&&this._audio.play()},i.stop=function(){this.isStopped=!0,v.removeChannel(this),this.completeHandler=null,this._audio&&this._audio.stop()},i.pause=function(){this.isStopped=!0,this._audio.pause()},i.resume=function(){this._audio&&(this.isStopped=!1,v.addChannel(this),this._audio.play())},e(0,i,"position",function(){return this._audio?this._audio.currentTime:0}),e(0,i,"duration",function(){return this._audio?this._audio.duration:0}),e(0,i,"volume",function(){return 1},function(i){}),naqhm._null=void 0,naqhm),_=(d(sjrugo,"laya.wx.mini.MiniVideo"),(n=sjrugo.prototype).on=function(i,e,n){"loadedmetadata"==i?(this.onPlayFunc=n.bind(e),this.videoElement.onPlay=this.onPlayFunction.bind(this)):"ended"==i&&(this.onEndedFunC=n.bind(e),this.videoElement.onEnded=this.onEndedFunction.bind(this)),this.videoElement.onTimeUpdate=this.onTimeUpdateFunc.bind(this)},n.onTimeUpdateFunc=function(i){this.position=i.position,this._duration=i.duration},n.onPlayFunction=function(){this.videoElement&&(this.videoElement.readyState=200),console.log("=====\u89c6\u9891\u52a0\u8f7d\u5b8c\u6210========"),null!=this.onPlayFunc&&this.onPlayFunc()},n.onended=function(i,e){this.onEndedFunC=e.bind(i),this.videoElement.onended=this.onEndedFunction.bind(this)},n.onEndedFunction=function(){this.videoElement&&(this.videoend=!0,console.log("=====\u89c6\u9891\u64ad\u653e\u5b8c\u6bd5========"),null!=this.onEndedFunC&&this.onEndedFunC())},n.off=function(i,e,n){"loadedmetadata"==i?(this.onPlayFunc=n.bind(e),this.videoElement.offPlay=this.onPlayFunction.bind(this)):"ended"==i&&(this.onEndedFunC=n.bind(e),this.videoElement.offEnded=this.onEndedFunction.bind(this))},n.load=function(i){this.videoElement&&(this.videoElement.src=i)},n.play=function(){this.videoElement&&(this.videoend=!1,this.videoElement.play())},n.pause=function(){this.videoElement&&(this.videoend=!0,this.videoElement.pause())},n.size=function(i,e){this.videoElement&&(this.videoElement.width=i,this.videoElement.height=e)},n.destroy=function(){this.videoElement&&this.videoElement.destroy(),this.videoElement=null,this.onEndedFunC=null,this.onPlayFunc=null,this.videoend=!1,this.videourl=null},n.reload=function(){this.videoElement&&(this.videoElement.src=this.videourl)},e(0,n,"duration",function(){return this._duration}),e(0,n,"currentTime",function(){return this.videoElement?this.videoElement.initialTime:0},function(i){this.videoElement&&(this.videoElement.initialTime=i)}),e(0,n,"videoWidth",function(){return this.videoElement?this.videoElement.width:0}),e(0,n,"videoHeight",function(){return this.videoElement?this.videoElement.height:0}),e(0,n,"ended",function(){return this.videoend}),e(0,n,"loop",function(){return!!this.videoElement&&this.videoElement.loop},function(i){this.videoElement&&(this.videoElement.loop=i)}),e(0,n,"playbackRate",function(){return this.videoElement?this.videoElement.playbackRate:0},function(i){this.videoElement&&(this.videoElement.playbackRate=i)}),e(0,n,"muted",function(){return!!this.videoElement&&this.videoElement.muted},function(i){this.videoElement&&(this.videoElement.muted=i)}),e(0,n,"paused",function(){return!!this.videoElement&&this.videoElement.paused}),e(0,n,"x",function(){return this.videoElement?this.videoElement.x:0},function(i){this.videoElement&&(this.videoElement.x=i)}),e(0,n,"y",function(){return this.videoElement?this.videoElement.y:0},function(i){this.videoElement&&(this.videoElement.y=i)}),e(0,n,"currentSrc",function(){return this.videoElement.src}),e(0,n,"src",function(){return this.videoElement?this.videoElement.src:0},function(i){this.videoElement&&(this.videoElement.src=i)}),e(0,n,"controls",function(){if(this.videoElement)return this.videoElement.controls},function(i){this.videoElement&&(this.videoElement.controls=i)}),e(0,n,"autoplay",function(){if(this.videoElement)return this.videoElement.autoplay},function(i){this.videoElement&&(this.videoElement.autoplay=i)}),sjrugo);function sjrugo(){this.videoend=!1,this.videourl="",this.videoElement=u.window.wx.createVideo({showCenterPlayBtn:!1,showProgressInControlMode:!1,objectFit:"fill"})}function naqhm(i){this._audio=null,this._onEnd=null,naqhm.__super.call(this),this.isStopped=!0,this._audio=i,this._onEnd=y.bind(this.__onEnd,this),i.onEnded(this._onEnd)}function uiosrj(){this._sound=null,this._chanell=null,this.url=null,this.loaded=!1,uiosrj.__super.call(this),this._sound=uiosrj._createSound(),this._chanell=new x(this._sound)}function f39dzw(){f39dzw.__super.call(this)}function sibu7o(){}var C;function n0q(){}function d83x61(){}function wmz9d(){}}(window,(document,Laya)),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(i,e){"use strict";for(var n in Object.defineProperty(e,"__esModule",{value:!0}),Laya){var t=Laya[n];t&&t.__isclass&&(e[n]=t)}});