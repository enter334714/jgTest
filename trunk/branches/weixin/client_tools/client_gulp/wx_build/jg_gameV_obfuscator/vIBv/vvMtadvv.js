var Q=wx.$v;!function(o,a){a.un,a.uns;var i=a.static,l=a.class,e=a.getset,s=(a.__newvec,laya.utils.Browser),n=(laya.events.Event,laya.events.EventDispatcher),d=laya.resource.HTMLImage,f=laya.utils.Handler,t=laya.display.Input,c=laya.net.Loader,h=(laya.maths.Matrix,laya.renders.Render),v=laya.utils.RunDriver,m=(laya.media.Sound,laya.media.SoundChannel),p=laya.media.SoundManager,y=(laya.display.Stage,laya.net.URL),g=laya.utils.Utils,u=(l(f$ir9s,"laya.wx.mini.MiniAdpter"),f$ir9s.getJson=function(i){return JSON.parse(i)},f$ir9s.init=function(i,e){void 0===i&&(i=!1),void 0===e&&(e=!1),f$ir9s._inited||(f$ir9s.window=o).navigator.userAgent.indexOf("MiniGame")<0||(f$ir9s._inited=!0,f$ir9s.isZiYu=e,f$ir9s.isPosMsgYu=i,f$ir9s.EnvConfig={},f$ir9s.isZiYu||(r.setNativeFileDir("/layaairGame"),r.existDir(r.fileNativeDir,f.create(f$ir9s,f$ir9s.onMkdirCallBack))),f$ir9s.window.focus=function(){},a.getUrlPath=function(){},f$ir9s.window.logtime=function(i){},f$ir9s.window.alertTimeLog=function(i){},f$ir9s.window.resetShareInfo=function(){},f$ir9s.window.CanvasRenderingContext2D=function(){},f$ir9s.window.CanvasRenderingContext2D.prototype=f$ir9s.window.wx.createCanvas().getContext("2d").__proto__,f$ir9s.window.document.body.appendChild=function(){},f$ir9s.EnvConfig.pixelRatioInt=0,v.getPixelRatio=f$ir9s.pixelRatio,f$ir9s._preCreateElement=s.createElement,s.createElement=f$ir9s.createElement,v.createShaderCondition=f$ir9s.createShaderCondition,g.parseXMLFromString=f$ir9s.parseXMLFromString,t._createInputElement=_._createInputElement,f$ir9s.EnvConfig.load=c.prototype.load,c.prototype.load=w.prototype.load,f$ir9s.isZiYu&&i&&wx.onMessage(function(i){i.isLoad&&(r.ziyuFileData[i.url]=i.data)}))},f$ir9s.onMkdirCallBack=function(i,e){i||(r.filesListObj=JSON.parse(e.data))},f$ir9s.pixelRatio=function(){if(!f$ir9s.EnvConfig.pixelRatioInt)try{var i=wx.getSystemInfoSync();return f$ir9s.EnvConfig.pixelRatioInt=i.pixelRatio,i.pixelRatio}catch(i){}return f$ir9s.EnvConfig.pixelRatioInt},f$ir9s.createElement=function(i){return"canvas"!=i?"textarea"==i||"input"==i?f$ir9s.onCreateInput(i):"div"==i?((n=f$ir9s._preCreateElement(i)).contains=function(i){return null},n.removeChild=function(i){},n):f$ir9s._preCreateElement(i):(1==f$ir9s.idx?f$ir9s.isZiYu?(e=sharedCanvas).style={}:e=o.canvas:e=o.wx.createCanvas(),f$ir9s.idx++,e);var e;var n},f$ir9s.onCreateInput=function(i){i=f$ir9s._preCreateElement(i);return i.focus=_.wxinputFocus,i.blur=_.wxinputblur,i.style={},i.value=0,i.parentElement={},i.placeholder={},i.type={},i.setColor=function(i){},i.setType=function(i){},i.setFontFace=function(i){},i.addEventListener=function(i){},i.contains=function(i){return null},i.removeChild=function(i){},i},f$ir9s.createShaderCondition=function(i){var e=this;return function(){return e[i.replace("this.","")]}},f$ir9s.EnvConfig=null,f$ir9s.window=null,f$ir9s._preCreateElement=null,f$ir9s._inited=!1,f$ir9s.wxRequest=null,f$ir9s.systemInfo=null,f$ir9s.version="0.0.1",f$ir9s.isZiYu=!1,f$ir9s.isPosMsgYu=!1,f$ir9s.parseXMLFromString=function(i){var e;i=i.replace(/>\s+</g,"><");try{e=(new o.Parser.DOMParser).parseFromString(i,"text/xml")}catch(i){throw"\u9700\u8981\u5f15\u5165xml\u89e3\u6790\u5e93\u6587\u4ef6"}return e},f$ir9s.idx=1,f$ir9s),_=(l(_123nt,"laya.wx.mini.MiniImage"),_123nt.prototype._loadImage=function(i){var e=!1;-1==i.indexOf("layaNativeDir/")&&(e=!0,i=y.formatURL(i)),r.getFileInfo(i)?_123nt.onCreateImage(i,this,!e):-1!=i.indexOf("http://")||-1!=i.indexOf("https://")?r.downImg(i,new f(_123nt,_123nt.onDownImgCallBack,[i,this]),i):_123nt.onCreateImage(i,this,!0)},_123nt.onDownImgCallBack=function(i,e,n){n?e.onError(null):_123nt.onCreateImage(i,e)},_123nt.onCreateImage=function(e,n,i){var t;function qeub8l(){t.onload=null,t.onerror=null,delete n.imgCache[e]}i=(i=void 0===i?!1:i)?e:(i=r.getFileInfo(e).md5,r.getFileNativePath(i)),null==n.imgCache&&(n.imgCache={});function za(){qeub8l(),n.onLoaded(t)}function Aa(){qeub8l(),n.event("error","Load image failed")}"nativeimage"==n._type?((t=new s.window.Image).crossOrigin="",t.onload=za,t.onerror=Aa,t.src=i,n.imgCache[e]=t):new d.create(i,{onload:za,onerror:Aa,onCreate:function(i){t=i,n.imgCache[e]=i}})},l(lzh6y1,"laya.wx.mini.MiniInput"),lzh6y1._createInputElement=function(){t._initInput(t.area=s.createElement("textarea")),t._initInput(t.input=s.createElement("input")),t.inputContainer=s.createElement("div"),t.inputContainer.style.position="absolute",t.inputContainer.style.zIndex=1e5,s.container.appendChild(t.inputContainer),t.inputContainer.setPos=function(i,e){t.inputContainer.style.left=i+"px",t.inputContainer.style.top=e+"px"},a.stage.on("resize",null,lzh6y1._onStageResize),wx.onWindowResize&&wx.onWindowResize(function(i){o.dispatchEvent&&o.dispatchEvent("resize")}),p._soundClass=E,p._musicClass=E,o._videoClass=C},lzh6y1._onStageResize=function(){a.stage._canvasTransform.identity().scale(s.width/h.canvas.width/v.getPixelRatio(),s.height/h.canvas.height/v.getPixelRatio())},lzh6y1.wxinputFocus=function(i){var e=t.inputElement.target;e&&!e.editable||(u.window.wx.offKeyboardConfirm(),u.window.wx.offKeyboardInput(),u.window.wx.showKeyboard({defaultValue:e.text,maxLength:e.maxChars,multiple:e.multiline,confirmHold:!0,confirmType:"done",success:function(i){},fail:function(i){}}),u.window.wx.onKeyboardConfirm(function(i){i=i?i.value:"";e.text=i,e.event("input"),laya.wx.mini.MiniInput.inputEnter()}),u.window.wx.onKeyboardInput(function(i){i=i?i.value:"";e.multiline||-1==i.indexOf("\n")?(e.text=i,e.event("input")):laya.wx.mini.MiniInput.inputEnter()}))},lzh6y1.inputEnter=function(){t.inputElement.target.focus=!1},lzh6y1.wxinputblur=function(){lzh6y1.hideKeyboard()},lzh6y1.hideKeyboard=function(){u.window.wx.offKeyboardConfirm(),u.window.wx.offKeyboardInput(),u.window.wx.hideKeyboard({success:function(i){console.log("\u9690\u85cf\u952e\u76d8")},fail:function(i){console.log("\u9690\u85cf\u952e\u76d8\u51fa\u9519:"+(i?i.errMsg:""))}})},lzh6y1),w=(l(xbqwe,"laya.wx.mini.MiniLoader"),(k=xbqwe.prototype).load=function(i,e,n,t,o){void 0===n&&(n=!0),void 0===o&&(o=!1);var a=this;0===(a._url=i).indexOf("data:image")?a._type=e="image":a._type=e=e||a.getTypeFromUrl(i),a._cache=n,a._data=null;var l="ascii";-1!=i.indexOf(".fnt")?l="utf8":"arraybuffer"==e&&(l="");var s=g.getFileExtension(i);if(-1!=xbqwe._fileTypeArr.indexOf(s))u.EnvConfig.load.call(this,i,e,n,t,o);else if(r.getFileInfo(i))u.EnvConfig.load.call(this,i,e,n,t,o);else{if(-1!=i.indexOf("layaNativeDir/"))return u.isZiYu?(s=r.ziyuFileData[i],void a.onLoaded(s)):(cosnole.log("read read"),void r.read(i,l,new f(xbqwe,xbqwe.onReadNativeCallBack,[l,i,e,n,t,o,a])));s=""==y.rootPath?i:i.split(y.rootPath)[0],-1!=i.indexOf("http://")||-1!=i.indexOf("https://")?u.EnvConfig.load.call(a,i,e,n,t,o):r.readFile(s,l,new f(xbqwe,xbqwe.onReadNativeCallBack,[l,i,e,n,t,o,a]),i)}},k.resMgrLoad=function(i,t,e,n,o,a,l){void 0===e&&(e=0),void 0===n&&(n=!1),void 0===o&&(o=!1),void 0===a&&(a=0),void 0===l&&(l=3),-1!=i.indexOf("mpack")&&console.log("=============resMgrLoad url:",i),u.EnvConfig.resMgrLoad(i,(i,e,n)=>{xbqwe.prototype.resMgrLoadCallBack(i,e,n,t)},e,n,o,a,l)},k.resMgrLoadCallBack=function(i,e,n,t){console.log("buff:::",i,n,r.fileNativeDir+"///"+r.fileListName),t(i,e,n)},k.clearRes=function(i,e){this.clearRes(i,e=void 0===e?!1:e);e=r.getFileInfo(i);!e||-1==i.indexOf("http://")&&-1==i.indexOf("https://")||(i=e.md5,e=r.getFileNativePath(i),r.remove(e))},xbqwe.onReadNativeCallBack=function(i,e,n,t,o,a,l,s,r){void 0===t&&(t=!0),void 0===a&&(a=!1),(s=void 0===s?0:s)?1==s&&u.EnvConfig.load.call(l,e,n,t,o,a):(s="json"==n||"atlas"==n?u.getJson(r.data):"xml"==n?g.parseXMLFromString(r.data):r.data,l.onLoaded(s),!u.isZiYu&&u.isPosMsgYu&&"arraybuffer"!=n&&wx.postMessage({url:e,data:s,isLoad:!0}))},i(xbqwe,["_fileTypeArr",function(){return this._fileTypeArr=["png","jpg","bmp","jpeg","gif"]}]),xbqwe),r=(l(k750v,"laya.wx.mini.MiniFileMgr",n),k750v.isLoadFile=function(i){return-1!=k750v._fileTypeArr.indexOf(i)},k750v.getFileInfo=function(i){i=i.split("?")[0],i=k750v.filesListObj[i];return null==i?null:i},k750v.onFileUpdate=function(i,e){var i=i.split("/"),i=i[i.length-1],n=k750v.getFileInfo(e);null==n?k750v.onSaveFile(e,i):n.readyUrl!=e&&k750v.remove(i,e)},k750v.exits=function(i,e){i=k750v.getFileNativePath(i);k750v.fs.getFileInfo({filePath:i,success:function(i){null!=e&&e.runWith([0,i])},fail:function(i){null!=e&&e.runWith([1,i])}})},k750v.read=function(i,e,n,t){void 0===e&&(e="ascill"),i=""!=(t=void 0===t?"":t)?k750v.getFileNativePath(i):i,k750v.fs.readFile({filePath:i,encoding:e,success:function(i){null!=n&&n.runWith([0,i])},fail:function(i){i&&""!=t?k750v.down(t,e,n,t):null!=n&&n.runWith([1])}})},k750v.readNativeFile=function(i,e){k750v.fs.readFile({filePath:i,encoding:"",success:function(i){null!=e&&e.runWith([0])},fail:function(i){null!=e&&e.runWith([1])}})},k750v.down=function(i,e,n,t){void 0===e&&(e="ascill"),void 0===t&&(t="");var o=k750v.getFileNativePath(t);k750v.wxdown({url:i,filePath:o,success:function(i){200===i.statusCode&&k750v.readFile(i.filePath,e,n,t)},fail:function(i){null!=n&&n.runWith([1,i])}}).onProgressUpdate(function(i){null!=n&&n.runWith([2,i.progress])})},k750v.readFile=function(e,i,n,t){void 0===t&&(t=""),k750v.fs.readFile({filePath:e,encoding:i=void 0===i?"ascill":i,success:function(i){-1==e.indexOf("http://")&&-1==e.indexOf("https://")||k750v.onFileUpdate(e,t),null!=n&&n.runWith([0,i])},fail:function(i){i&&null!=n&&n.runWith([1,i])}})},k750v.downImg=function(i,e,n){void 0===n&&(n="");k750v.wxdown({url:i,success:function(i){200===i.statusCode&&k750v.copyFile(i.tempFilePath,n,e)},fail:function(i){null!=e&&e.runWith([1,i])}})},k750v.copyFile=function(i,e,n){var t=i.split("/"),o=t[t.length-1],a=(e.split("?")[0],k750v.getFileInfo(e)),t=k750v.getFileNativePath(o);k750v.fs.copyFile({srcPath:i,destPath:t,success:function(i){a?a.readyUrl!=e&&k750v.remove(o,e,n):(k750v.onSaveFile(e,o),null!=n&&n.runWith([0]))},fail:function(i){null!=n&&n.runWith([1,i])}})},k750v.getFileNativePath=function(i){return laya.wx.mini.MiniFileMgr.fileNativeDir+"/"+i},k750v.remove=function(e,n,t){void 0===n&&(n="");var i=k750v.getFileInfo(n),o=k750v.getFileNativePath(i.md5);a.loader.clearRes(i.readyUrl),k750v.fs.unlink({filePath:o,success:function(i){""!=n&&k750v.onSaveFile(n,e),null!=t&&t.runWith([0])},fail:function(i){}})},k750v.onSaveFile=function(i,e){var n=i.split("?")[0];k750v.filesListObj[n]={md5:e,readyUrl:i},k750v.fs.writeFile({filePath:k750v.fileNativeDir+"/"+k750v.fileListName,encoding:"utf8",data:JSON.stringify(k750v.filesListObj),success:function(i){console.log("\u5199\u5165\u6d4b\u8bd5\u6d4b\u8bd5\u6210\u529f\uff1a",i)},fail:function(i){console.log("\u5199\u5165\u6d4b\u8bd5\u6d4b\u8bd5\u5931\u8d25\uff1a",i)}})},k750v.existDir=function(i,e){k750v.fs.mkdir({dirPath:i,success:function(i){null!=e&&e.runWith([0,{data:JSON.stringify({})}])},fail:function(i){-1!=i.errMsg.indexOf("file already exists")?k750v.readSync(k750v.fileListName,"utf8",e):null!=e&&e.runWith([1,i])}})},k750v.readSync=function(i,e,n,t){void 0===e&&(e="ascill"),void 0===t&&(t="");var o,e=k750v.getFileNativePath(i);try{o=k750v.fs.readFileSync(e),null!=n&&n.runWith([0,{data:o}])}catch(i){null!=n&&n.runWith([1])}},k750v.readCache=function(){},k750v.writeCache=function(i){var e=readyUrl.split("?")[0];k750v.filesListObj[e]={md5:md5Name,readyUrl:readyUrl},k750v.fs.writeFile({filePath:k750v.fileNativeDir+"/"+k750v.fileListName,encoding:"utf8",data:JSON.stringify(k750v.filesListObj),success:function(i){},fail:function(i){}})},k750v.setNativeFileDir=function(i){k750v.fileNativeDir=wx.env.USER_DATA_PATH+i},k750v.filesListObj={},k750v.fileNativeDir=null,k750v.fileListName="layaairfiles.txt",k750v.ziyuFileData={},i(k750v,["_fileTypeArr",function(){return this._fileTypeArr=["json","ani","xml","sk","txt","atlas","swf","part","fnt","proto","lh","lav","lani","lmat","lm","ltc"]},"fs",function(){return this.fs=wx.getFileSystemManager()},"wxdown",function(){return this.wxdown=wx.downloadFile}]),k750v),E=(l(t_hy12,"laya.wx.mini.MiniSound",n),(k=t_hy12.prototype).load=function(i){var e;i=y.formatURL(i),this.url=i,t_hy12._audioCache[i]?this.event("complete"):(this._sound.onCanplay(function(){e.loaded=!0,e.event("complete"),t_hy12._audioCache[e.url]=e}),this._sound.onError(function(i){console.error("errCode="+i.errCode+"  errMsg="+i.errMsg),e.event("error")}),this._sound.src=i,e=this)},k.play=function(i,e){var n,t;return void 0===i&&(i=0),void 0===e&&(e=0),t=(n=this.url==p._tMusic?(t_hy12._musicAudio||(t_hy12._musicAudio=this._sound),t_hy12._musicAudio):this._sound,this._chanell),n.src=this.url,n.startTime=0,t.isStopped&&(t.url=this.url,t.loops=e,t.startTime=i,t.play(),p.addChannel(t)),t},k.dispose=function(){var i=t_hy12._audioCache[this.url];i&&(i.src="",delete t_hy12._audioCache[this.url])},e(0,k,"duration",function(){return this._sound.duration}),t_hy12._createSound=function(){return t_hy12._id++,u.window.wx.createInnerAudioContext({useWebAudioImplement:!1})},t_hy12._musicAudio=null,t_hy12._id=0,t_hy12._audioCache={},t_hy12._null=void 0,t_hy12),x=(l(qgxe,"laya.wx.mini.MiniSoundChannel",m),(i=qgxe.prototype).__onEnd=function(){if(1==this.loops)return this.completeHandler&&(a.timer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(),void this.event("complete");0<this.loops&&this.loops--,this.startTime=0,this.play()},i.__onNull=function(){},i.play=function(){this.isStopped=!1,p.addChannel(this),this._audio&&this._audio.play()},i.stop=function(){this.isStopped=!0,p.removeChannel(this),this.completeHandler=null,this._audio&&this._audio.stop()},i.pause=function(){this.isStopped=!0,this._audio.pause()},i.resume=function(){this._audio&&(this.isStopped=!1,p.addChannel(this),this._audio.play())},e(0,i,"position",function(){return this._audio?this._audio.currentTime:0}),e(0,i,"duration",function(){return this._audio?this._audio.duration:0}),e(0,i,"volume",function(){return 1},function(i){}),qgxe._null=void 0,qgxe),C=(l(k7v5px,"laya.wx.mini.MiniVideo"),(n=k7v5px.prototype).on=function(i,e,n){"loadedmetadata"==i?(this.onPlayFunc=n.bind(e),this.videoElement.onPlay=this.onPlayFunction.bind(this)):"ended"==i&&(this.onEndedFunC=n.bind(e),this.videoElement.onEnded=this.onEndedFunction.bind(this)),this.videoElement.onTimeUpdate=this.onTimeUpdateFunc.bind(this)},n.onTimeUpdateFunc=function(i){this.position=i.position,this._duration=i.duration},n.onPlayFunction=function(){this.videoElement&&(this.videoElement.readyState=200),console.log("=====\u89c6\u9891\u52a0\u8f7d\u5b8c\u6210========"),null!=this.onPlayFunc&&this.onPlayFunc()},n.onended=function(i,e){this.onEndedFunC=e.bind(i),this.videoElement.onended=this.onEndedFunction.bind(this)},n.onEndedFunction=function(){this.videoElement&&(this.videoend=!0,console.log("=====\u89c6\u9891\u64ad\u653e\u5b8c\u6bd5========"),null!=this.onEndedFunC&&this.onEndedFunC())},n.off=function(i,e,n){"loadedmetadata"==i?(this.onPlayFunc=n.bind(e),this.videoElement.offPlay=this.onPlayFunction.bind(this)):"ended"==i&&(this.onEndedFunC=n.bind(e),this.videoElement.offEnded=this.onEndedFunction.bind(this))},n.load=function(i){this.videoElement&&(this.videoElement.src=i)},n.play=function(){this.videoElement&&(this.videoend=!1,this.videoElement.play())},n.pause=function(){this.videoElement&&(this.videoend=!0,this.videoElement.pause())},n.size=function(i,e){this.videoElement&&(this.videoElement.width=i,this.videoElement.height=e)},n.destroy=function(){this.videoElement&&this.videoElement.destroy(),this.videoElement=null,this.onEndedFunC=null,this.onPlayFunc=null,this.videoend=!1,this.videourl=null},n.reload=function(){this.videoElement&&(this.videoElement.src=this.videourl)},e(0,n,"duration",function(){return this._duration}),e(0,n,"currentTime",function(){return this.videoElement?this.videoElement.initialTime:0},function(i){this.videoElement&&(this.videoElement.initialTime=i)}),e(0,n,"videoWidth",function(){return this.videoElement?this.videoElement.width:0}),e(0,n,"videoHeight",function(){return this.videoElement?this.videoElement.height:0}),e(0,n,"ended",function(){return this.videoend}),e(0,n,"loop",function(){return!!this.videoElement&&this.videoElement.loop},function(i){this.videoElement&&(this.videoElement.loop=i)}),e(0,n,"playbackRate",function(){return this.videoElement?this.videoElement.playbackRate:0},function(i){this.videoElement&&(this.videoElement.playbackRate=i)}),e(0,n,"muted",function(){return!!this.videoElement&&this.videoElement.muted},function(i){this.videoElement&&(this.videoElement.muted=i)}),e(0,n,"paused",function(){return!!this.videoElement&&this.videoElement.paused}),e(0,n,"x",function(){return this.videoElement?this.videoElement.x:0},function(i){this.videoElement&&(this.videoElement.x=i)}),e(0,n,"y",function(){return this.videoElement?this.videoElement.y:0},function(i){this.videoElement&&(this.videoElement.y=i)}),e(0,n,"currentSrc",function(){return this.videoElement.src}),e(0,n,"src",function(){return this.videoElement?this.videoElement.src:0},function(i){this.videoElement&&(this.videoElement.src=i)}),e(0,n,"controls",function(){if(this.videoElement)return this.videoElement.controls},function(i){this.videoElement&&(this.videoElement.controls=i)}),e(0,n,"autoplay",function(){if(this.videoElement)return this.videoElement.autoplay},function(i){this.videoElement&&(this.videoElement.autoplay=i)}),k7v5px);function k7v5px(){this.videoend=!1,this.videourl="",this.videoElement=u.window.wx.createVideo({showCenterPlayBtn:!1,showProgressInControlMode:!1,objectFit:"fill"})}function qgxe(i){this._audio=null,this._onEnd=null,qgxe.__super.call(this),this.isStopped=!0,this._audio=i,this._onEnd=g.bind(this.__onEnd,this),i.onEnded(this._onEnd)}function t_hy12(){this._sound=null,this._chanell=null,this.url=null,this.loaded=!1,t_hy12.__super.call(this),this._sound=t_hy12._createSound(),this._chanell=new x(this._sound)}function k750v(){k750v.__super.call(this)}function xbqwe(){}var k;function lzh6y1(){}function _123nt(){}function f$ir9s(){}}(window,(document,Laya)),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(i,e){"use strict";for(var n in Object.defineProperty(e,"__esModule",{value:!0}),Laya){var t=Laya[n];t&&t.__isclass&&(e[n]=t)}});