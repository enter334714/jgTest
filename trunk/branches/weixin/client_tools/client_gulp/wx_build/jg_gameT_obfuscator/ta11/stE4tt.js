var M=wx.$T;!function(n){var r={};function __webpack_require__(e){if(r[e])return r[e].exports;var t=r[e]={exports:{},id:e,loaded:!1};return n[e].call(t.exports,t,t.exports,__webpack_require__),t.loaded=!0,t.exports}__webpack_require__.m=n,__webpack_require__.c=r,__webpack_require__.p="",__webpack_require__(0)}([function(e,l,t){"use strict";var n=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(t(1));t=t(4);t=(t=t)&&t.__esModule?t:{default:t};var r=GameGlobal;if(!GameGlobal.__isAdapterInjected){GameGlobal.__isAdapterInjected=!0,n.addEventListener=function(e,t){n.document.addEventListener(e,t)},n.removeEventListener=function(e,t){n.document.removeEventListener(e,t)},n.canvas&&(n.canvas.addEventListener=n.addEventListener,n.canvas.removeEventListener=n.removeEventListener),r.sharedCanvas&&(sharedCanvas.__proto__.__proto__=new t.default("canvas"),sharedCanvas.addEventListener=n.addEventListener,sharedCanvas.removeEventListener=n.removeEventListener);t=wx.getSystemInfoSync().platform;if("undefined"==typeof __devtoolssubcontext&&"devtools"===t){for(var o in n){var a=Object.getOwnPropertyDescriptor(r,o);a&&!0!==a.configurable||Object.defineProperty(window,o,{value:n[o]})}for(var i in n.document){var u=Object.getOwnPropertyDescriptor(r.document,i);u&&!0!==u.configurable||Object.defineProperty(r.document,i,{value:n.document[i]})}window.parent=window}else{for(var s in n)r[s]=n[s];r.window=n,(window=r).top=window.parent=window}}},function(l,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cancelAnimationFrame=t.requestAnimationFrame=t.clearInterval=t.clearTimeout=t.setInterval=t.setTimeout=t.canvas=t.location=t.localStorage=t.HTMLElement=t.FileReader=t.Audio=t.Image=t.WebSocket=t.XMLHttpRequest=t.navigator=t.document=void 0;var n=e(2);Object.keys(n).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})});var r=e(3);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var o=_interopRequireDefault(e(9));var a=e(17);var i=_interopRequireDefault(e(10));var u=_interopRequireDefault(e(18));var s=_interopRequireDefault(e(19));var c=_interopRequireDefault(e(20));var f=_interopRequireDefault(e(11));var p=_interopRequireDefault(e(12));var d=_interopRequireDefault(e(21));var h=_interopRequireDefault(e(4));var v=_interopRequireDefault(e(22));e=_interopRequireDefault(e(23));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t.document=i.default,t.navigator=u.default,t.XMLHttpRequest=s.default,t.WebSocket=c.default,t.Image=f.default,t.Audio=p.default,t.FileReader=d.default,t.HTMLElement=h.default,t.localStorage=v.default,t.location=e.default;i=(0,a.isSubContext)()?void 0:new o.default;t.canvas=i,t.setTimeout=setTimeout,t.setInterval=setInterval,t.clearTimeout=clearTimeout,t.clearInterval=clearInterval,t.requestAnimationFrame=requestAnimationFrame,t.cancelAnimationFrame=cancelAnimationFrame},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=wx.getSystemInfoSync(),r=n.screenWidth,o=n.screenHeight,n=n.devicePixelRatio;r=t.innerWidth=r;o=t.innerHeight=o;t.devicePixelRatio=n;t.screen={availWidth:r,availHeight:o};t.performance={now:function(){return Date.now()/1e3}};t.ontouchstart=null;t.ontouchmove=null;t.ontouchend=null},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HTMLCanvasElement=t.HTMLImageElement=void 0;n=n(4);n=(n=n)&&n.__esModule?n:{default:n};function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.HTMLImageElement=(_inherits(HTMLImageElement,n.default),HTMLImageElement);function HTMLImageElement(){return _classCallCheck(this,HTMLImageElement),_possibleConstructorReturn(this,(HTMLImageElement.__proto__||Object.getPrototypeOf(HTMLImageElement)).call(this,"img"))}t.HTMLCanvasElement=(_inherits(HTMLCanvasElement,n.default),HTMLCanvasElement);function HTMLCanvasElement(){return _classCallCheck(this,HTMLCanvasElement),_possibleConstructorReturn(this,(HTMLCanvasElement.__proto__||Object.getPrototypeOf(HTMLCanvasElement)).call(this,"canvas"))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(5);o=(o=o)&&o.__esModule?o:{default:o};var a=n(8);var i=n(2);n=function(e){var t=HTMLElement;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);function HTMLElement(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";var t=this;var n=HTMLElement;if(!(t instanceof n))throw new TypeError("Cannot call a class as a function");t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(HTMLElement.__proto__||Object.getPrototypeOf(HTMLElement)).call(this));return t.className="",t.childern=[],t.style={width:i.innerWidth+"px",height:i.innerHeight+"px"},t.insertBefore=a.noop,t.innerHTML="",t.tagName=e.toUpperCase(),t}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),r(HTMLElement,[{key:"setAttribute",value:function(e,t){this[e]=t}},{key:"getAttribute",value:function(e){return this[e]}},{key:"getBoundingClientRect",value:function(){return{top:0,left:0,width:i.innerWidth,height:i.innerHeight}}},{key:"focus",value:function(){}},{key:"clientWidth",get:function(){var e=parseInt(this.style.fontSize,10)*this.innerHTML.length;return Number.isNaN(e)?0:e}},{key:"clientHeight",get:function(){var e=parseInt(this.style.fontSize,10);return Number.isNaN(e)?0:e}}]),HTMLElement}(o.default);t.default=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n=n(6);n=function(e){var t=ELement;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);function ELement(){if(!(this instanceof ELement))throw new TypeError("Cannot call a class as a function");var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ELement.__proto__||Object.getPrototypeOf(ELement)).call(this));return e.className="",e.children=[],e}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),ELement}(((n=n)&&n.__esModule?n:{default:n}).default);t.default=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n=n(7);n=function(e){var t=Node;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);function Node(){if(!(this instanceof Node))throw new TypeError("Cannot call a class as a function");var e=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Node.__proto__||Object.getPrototypeOf(Node)).call(this));return e.childNodes=[],e}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),r(Node,[{key:"appendChild",value:function(e){if(!(e instanceof Node))throw new TypeError("Failed to executed 'appendChild' on 'Node': parameter 1 is not of type 'Node'.");this.childNodes.push(e)}},{key:"cloneNode",value:function(){var e=Object.create(this);return Object.assign(e,this),e}},{key:"removeChild",value:function(t){var e=this.childNodes.findIndex(function(e){return e===t});return-1<e?this.childNodes.splice(e,1):null}}]),Node}(((n=n)&&n.__esModule?n:{default:n}).default);t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=new WeakMap;n(EventTarget,[{key:"addEventListener",value:function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};var r=o.get(this);r||o.set(this,r={}),r[e]||(r[e]=[]),r[e].push(t),n.capture&&console.warn("EventTarget.addEventListener: options.capture is not implemented."),n.once&&console.warn("EventTarget.addEventListener: options.once is not implemented."),n.passive&&console.warn("EventTarget.addEventListener: options.passive is not implemented.")}},{key:"removeEventListener",value:function(e,t){var n=o.get(this)[e];if(n&&0<n.length)for(var r=n.length;r--;)if(n[r]===t){n.splice(r,1);break}}},{key:"dispatchEvent",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};var t=o.get(this)[e.type];if(t)for(var n=0;n<t.length;n++)t[n](e)}}]);n=EventTarget;function EventTarget(){if(!(this instanceof EventTarget))throw new TypeError("Cannot call a class as a function");o.set(this,{})}t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.noop=function(){},t.isSubContext=function(){return"undefined"!=typeof GameGlobal&&!0===GameGlobal.__isSubContext}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=wx.createCanvas();e.type="canvas",e.__proto__.__proto__=new r.default("canvas");e.getContext;return e.getBoundingClientRect=function(){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight}},e};n(3);var r=_interopRequireDefault(n(4));_interopRequireDefault(n(10));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}},function(l,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(t(1));var r=_interopRequireDefault(t(4));var o=_interopRequireDefault(t(11));var a=_interopRequireDefault(t(12));var i=_interopRequireDefault(t(9));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}t(15);var u={};var s={readyState:"complete",visibilityState:"visible",documentElement:n,hidden:!1,style:{},location:n.location,ontouchstart:null,ontouchmove:null,ontouchend:null,head:new r.default("head"),body:new r.default("body"),createElement:function(e){return"canvas"===e?new i.default:"audio"===e?new a.default:"img"===e?new o.default:new r.default(e)},getElementById:function(e){return e===n.canvas.id?n.canvas:null},getElementsByTagName:function(e){return"head"===e?[s.head]:"body"===e?[s.body]:"canvas"===e?[n.canvas]:[]},querySelector:function(e){return"head"===e?s.head:"body"===e?s.body:"canvas"===e||e==="#"+n.canvas.id?n.canvas:null},querySelectorAll:function(e){return"head"===e?[s.head]:"body"===e?[s.body]:"canvas"===e?[n.canvas]:[]},addEventListener:function(e,t){u[e]||(u[e]=[]),u[e].push(t)},removeEventListener:function(e,t){var n=u[e];if(n&&0<n.length)for(var r=n.length;r--;)if(n[r]===t){n.splice(r,1);break}},dispatchEvent:function(e){var t=u[e.type];if(t)for(var n=0;n<t.length;n++)t[n](e)}};e.default=s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=wx.createImage();return e.destroy=function(){e.src=""},e}},function(u,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=t(13);r=(r=r)&&r.__esModule?r:{default:r};var o=t(8);function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var a=new WeakMap;var i=new WeakMap;new WeakMap;new WeakMap;t=function(e){var t=Audio;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);function Audio(e){if(!(this instanceof Audio))throw new TypeError("Cannot call a class as a function");var t=_possibleConstructorReturn(this,(Audio.__proto__||Object.getPrototypeOf(Audio)).call(this));if(t.HAVE_NOTHING=0,t.HAVE_METADATA=1,t.HAVE_CURRENT_DATA=2,t.HAVE_FUTURE_DATA=3,t.HAVE_ENOUGH_DATA=4,(t.readyState=0,o.isSubContext)())return console.warn("HTMLAudioElement is not supported in SubContext."),_possibleConstructorReturn(t);i.set(t,"");var n=wx.createInnerAudioContext();return a.set(t,n),n.onCanplay(function(){t.dispatchEvent({type:"load"}),t.dispatchEvent({type:"loadend"}),t.dispatchEvent({type:"canplay"}),t.dispatchEvent({type:"canplaythrough"}),t.dispatchEvent({type:"loadedmetadata"}),t.readyState=2}),n.onPlay(function(){t.dispatchEvent({type:"play"})}),n.onPause(function(){t.dispatchEvent({type:"pause"})}),n.onEnded(function(){t.dispatchEvent({type:"ended"}),t.readyState=4}),n.onError(function(){t.dispatchEvent({type:"error"})}),e&&(a.get(t).src=e),t}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),n(Audio,[{key:"load",value:function(){console.warn("HTMLAudioElement.load() is not implemented.")}},{key:"play",value:function(){(0,o.isSubContext)()||a.get(this).play()}},{key:"pause",value:function(){(0,o.isSubContext)()||a.get(this).pause()}},{key:"canPlayType",value:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";return"string"==typeof e&&(-1<e.indexOf("audio/mpeg")||e.indexOf("audio/mp4"))?"probably":""}},{key:"cloneNode",value:function(){var e=new Audio;return(0,o.isSubContext)()||(e.loop=a.get(this).loop,e.autoplay=a.get(this).loop,e.src=this.src),e}},{key:"currentTime",get:function(){return(0,o.isSubContext)()?0:a.get(this).currentTime},set:function(e){(0,o.isSubContext)()||a.get(this).seek(e)}},{key:"src",get:function(){return i.get(this)},set:function(e){i.set(this,e),(0,o.isSubContext)()||(a.get(this).src=e)}},{key:"loop",get:function(){return!(0,o.isSubContext)()&&a.get(this).loop},set:function(e){(0,o.isSubContext)()||(a.get(this).loop=e)}},{key:"autoplay",get:function(){return!(0,o.isSubContext)()&&a.get(this).autoplay},set:function(e){(0,o.isSubContext)()||(a.get(this).autoplay=e)}},{key:"paused",get:function(){return!(0,o.isSubContext)()&&a.get(this).paused}}]),Audio}(r.default);e.default=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n=n(14);n=function(e){var t=HTMLAudioElement;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);function HTMLAudioElement(){if(!(this instanceof HTMLAudioElement))throw new TypeError("Cannot call a class as a function");var e=this;var t=(HTMLAudioElement.__proto__||Object.getPrototypeOf(HTMLAudioElement)).call(this,"audio");if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),HTMLAudioElement}(((n=n)&&n.__esModule?n:{default:n}).default);t.default=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n=n(4);n=function(e){var t=HTMLMediaElement;if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);function HTMLMediaElement(e){if(!(this instanceof HTMLMediaElement))throw new TypeError("Cannot call a class as a function");var t=this;e=(HTMLMediaElement.__proto__||Object.getPrototypeOf(HTMLMediaElement)).call(this,e);if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}return t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),r(HTMLMediaElement,[{key:"addTextTrack",value:function(){}},{key:"captureStream",value:function(){}},{key:"fastSeek",value:function(){}},{key:"load",value:function(){}},{key:"pause",value:function(){}},{key:"play",value:function(){}}]),HTMLMediaElement}(((n=n)&&n.__esModule?n:{default:n}).default);t.default=n},function(e,t,n){"use strict";n(16)},function(e,t,n){"use strict";var r=function(e){{if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}}(n(1));var o=n(10);var a=(o=o)&&o.__esModule?o:{default:o};var i=n(8);function gc(e){if(!(this instanceof gc))throw new TypeError("Cannot call a class as a function");this.target=r.canvas,this.currentTarget=r.canvas,this.touches=[],this.targetTouches=[],this.changedTouches=[],this.preventDefault=i.noop,this.stopPropagation=i.noop,this.type=e}function touchEventHandlerFactory(n){return function(e){var t=new gc(n);t.touches=e.touches,t.targetTouches=Array.prototype.slice.call(e.touches),t.changedTouches=e.changedTouches,t.timeStamp=e.timeStamp,a.default.dispatchEvent(t)}}wx.onTouchStart(touchEventHandlerFactory("touchstart")),wx.onTouchMove(touchEventHandlerFactory("touchmove")),wx.onTouchEnd(touchEventHandlerFactory("touchend")),wx.onTouchCancel(touchEventHandlerFactory("touchcancel"))},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.noop=function(){},t.isSubContext=function(){return"undefined"!=typeof GameGlobal&&!0===GameGlobal.__isSubContext}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n=n(8);n={platform:wx.getSystemInfoSync().platform,language:"zh-cn",appVersion:"5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1",userAgent:"Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN",onLine:!0,geolocation:{getCurrentPosition:n.noop,watchPosition:n.noop,clearWatch:n.noop}};t.default=n},function(a,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var n=new WeakMap;var r=new WeakMap;var o=new WeakMap;var u=new WeakMap;var i=new WeakMap;function _triggerEvent(e){if("function"==typeof this["on"+e]){for(var t=arguments.length,n=Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this["on"+e].apply(this,n)}}function _changeReadyState(e){this.readyState=e,_triggerEvent.call(this,"readystatechange")}t(XMLHttpRequest,[{key:"abort",value:function(){var e=i.get(this);e&&e.abort()}},{key:"getAllResponseHeaders",value:function(){var t=u.get(this);return Object.keys(t).map(function(e){return e+": "+t[e]}).join("\n")}},{key:"getResponseHeader",value:function(e){return u.get(this)[e]}},{key:"open",value:function(e,t){r.set(this,e),n.set(this,t),_changeReadyState.call(this,XMLHttpRequest.OPENED)}},{key:"overrideMimeType",value:function(){}},{key:"send",value:function(){var i=this;var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";if(this.readyState!==XMLHttpRequest.OPENED)throw new Error("Failed to execute 'send' on 'XMLHttpRequest': The object's state must be OPENED.");wx.request({data:e,url:n.get(this),method:r.get(this),header:o.get(this),responseType:this.responseType,success:function(e){var t=e.data,n=e.statusCode,e=e.header;if("string"!=typeof t&&!(t instanceof ArrayBuffer))try{t=JSON.stringify(t)}catch(e){}if(i.status=n,u.set(i,e),_triggerEvent.call(i,"loadstart"),_changeReadyState.call(i,XMLHttpRequest.HEADERS_RECEIVED),_changeReadyState.call(i,XMLHttpRequest.LOADING),(i.response=t)instanceof ArrayBuffer){if(i.responseText="","arraybuffer"!=i.responseType){var r=new Uint8Array(t);var o=r.byteLength;for(var a=0;a<o;a++)i.responseText+=String.fromCharCode(r[a])}}else i.responseText=t;_changeReadyState.call(i,XMLHttpRequest.DONE),_triggerEvent.call(i,"load"),_triggerEvent.call(i,"loadend")},fail:function(e){e=e.errMsg;i.status=404,i.response=null,_changeReadyState.call(i,XMLHttpRequest.DONE),-1!==e.indexOf("abort")?_triggerEvent.call(i,"abort"):_triggerEvent.call(i,"error",e),_triggerEvent.call(i,"loadend")}})}},{key:"setRequestHeader",value:function(e,t){var n=o.get(this);n[e]=t,o.set(this,n)}}]);t=XMLHttpRequest;function XMLHttpRequest(){if(!(this instanceof XMLHttpRequest))throw new TypeError("Cannot call a class as a function");this.onabort=null,this.onerror=null,this.onload=null,this.onloadstart=null,this.onprogress=null,this.ontimeout=null,this.onloadend=null,this.onreadystatechange=null,this.readyState=0,this.response=null,this.responseText=null,this.responseType="",this.responseXML=null,this.status=0,this.statusText="",this.upload={},this.withCredentials=!1,o.set(this,{"content-type":"application/x-www-form-urlencoded"}),u.set(this,{})}t.UNSEND=0,t.OPENED=1,t.HEADERS_RECEIVED=2,t.LOADING=3,t.DONE=4,e.default=t},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=n(8);var i=new WeakMap;r(WebSocket,[{key:"close",value:function(e,t){this.readyState=WebSocket.CLOSING,i.get(this).close({code:e,reason:t})}},{key:"send",value:function(e){if("string"!=typeof e&&!(e instanceof ArrayBuffer))throw new TypeError("Failed to send message: The data "+e+" is invalid");i.get(this).send({data:e})}}]);n=WebSocket;function WebSocket(e){var t=this;var n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];var r=this;var o=WebSocket;if(!(r instanceof o))throw new TypeError("Cannot call a class as a function");if(this.binaryType="",this.bufferedAmount=0,this.extensions="",this.onclose=null,this.onerror=null,this.onmessage=null,this.onopen=null,this.protocol="",this.readyState=3,(0,a.isSubContext)())throw new Error("WebSocket is not supported in SubContext.");if("string"!=typeof e||!/(^ws:\/\/)|(^wss:\/\/)/.test(e))throw new TypeError("Failed to construct 'WebSocket': The URL '"+e+"' is invalid");this.url=e,this.readyState=WebSocket.CONNECTING;r=wx.connectSocket({url:e,protocols:Array.isArray(n)?n:[n]});return i.set(this,r),r.onClose(function(e){t.readyState=WebSocket.CLOSED,"function"==typeof t.onclose&&t.onclose(e)}),r.onMessage(function(e){"function"==typeof t.onmessage&&t.onmessage(e)}),r.onOpen(function(){t.readyState=WebSocket.OPEN,"function"==typeof t.onopen&&t.onopen()}),r.onError(function(e){"function"==typeof t.onerror&&t.onerror(new Error(e.errMsg))}),this}n.CONNECTING=0,n.OPEN=1,n.CLOSING=2,n.CLOSED=3,t.default=n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e};function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=n(8);function FileReader(){if(!(this instanceof FileReader))throw new TypeError("Cannot call a class as a function")}r(FileReader,[{key:"construct",value:function(){if((0,o.isSubContext)())throw new Error("FileReader is not supported in SubContext.")}}]),t.default=FileReader},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n=n(8);var r={get length(){return wx.getStorageInfoSync().keys.length},key:function(e){return wx.getStorageInfoSync().keys[e]},getItem:function(e){return wx.getStorageSync(e)},setItem:function(e,t){return wx.setStorageSync(e,t)},removeItem:function(e){wx.removeStorageSync(e)},clear:function(){wx.clearStorageSync()}};var o={};var a={get length(){return Object.keys(o).length},key:function(e){return Object.keys(o)[e]},getItem:function(e){return o[e]},setItem:function(e,t){o[e]=t},removeItem:function(e){delete o[e]},clear:function(){o={}}};n=(0,n.isSubContext)()?a:r;t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={href:"tGAMEtt.js",reload:function(){}}}]);