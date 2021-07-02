var $c = wx.$b;
/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};

	/******/ // The require function
	/******/function __webpack_require__(moduleId) {

		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId])
			/******/return installedModules[moduleId].exports;

		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/exports: {},
			/******/id: moduleId,
			/******/loaded: false
			/******/ };

		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

		/******/ // Flag the module as loaded
		/******/module.loaded = true;

		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}

	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;

	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;

	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";

	/******/ // Load entry module and return exports
	/******/return __webpack_require__(0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	var _window2 = __webpack_require__(1);

	var _window = _interopRequireWildcard(_window2);

	var _HTMLElement = __webpack_require__(4);

	var _HTMLElement2 = _interopRequireDefault(_HTMLElement);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}newObj.default = obj;return newObj;
		}
	}

	var global = GameGlobal;

	function inject() {
		_window.addEventListener = function (type, listener) {
			_window.document.addEventListener(type, listener);
		};
		_window.removeEventListener = function (type, listener) {
			_window.document.removeEventListener(type, listener);
		};

		if (_window.canvas) {
			_window.canvas.addEventListener = _window.addEventListener;
			_window.canvas.removeEventListener = _window.removeEventListener;
		}

		if (global.sharedCanvas) {
			// eslint-disable-next-line no-undef
			sharedCanvas.__proto__.__proto__ = new _HTMLElement2.default($c[6068]);
			// eslint-disable-next-line no-undef
			sharedCanvas.addEventListener = _window.addEventListener;
			// eslint-disable-next-line no-undef
			sharedCanvas.removeEventListener = _window.removeEventListener;
		}

		var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
		    platform = _wx$getSystemInfoSync.platform;

		// 开发者工具无法重定义 window


		if (typeof __devtoolssubcontext === $c[6069] && platform === $c[6070]) {
			for (var key in _window) {
				var descriptor = Object.getOwnPropertyDescriptor(global, key);

				if (!descriptor || descriptor.configurable === true) {
					Object.defineProperty(window, key, {
						value: _window[key]
					});
				}
			}

			for (var _key in _window.document) {
				var _descriptor = Object.getOwnPropertyDescriptor(global.document, _key);

				if (!_descriptor || _descriptor.configurable === true) {
					Object.defineProperty(global.document, _key, {
						value: _window.document[_key]
					});
				}
			}
			window.parent = window;
		} else {
			for (var _key2 in _window) {
				global[_key2] = _window[_key2];
			}
			global.window = _window;
			window = global;
			window.top = window.parent = window;
		}
	}

	if (!GameGlobal.__isAdapterInjected) {
		GameGlobal.__isAdapterInjected = true;
		inject();
	}

	/***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, $c[6071], {
		value: true
	});
	exports.cancelAnimationFrame = exports.requestAnimationFrame = exports.clearInterval = exports.clearTimeout = exports.setInterval = exports.setTimeout = exports.canvas = exports.location = exports.localStorage = exports.HTMLElement = exports.FileReader = exports.Audio = exports.Image = exports.WebSocket = exports.XMLHttpRequest = exports.navigator = exports.document = undefined;

	var _WindowProperties = __webpack_require__(2);

	Object.keys(_WindowProperties).forEach(function (key) {
		if (key === $c[6072] || key === $c[6073]) return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _WindowProperties[key];
			}
		});
	});

	var _constructor = __webpack_require__(3);

	Object.keys(_constructor).forEach(function (key) {
		if (key === $c[6074] || key === $c[6075]) return;
		Object.defineProperty(exports, key, {
			enumerable: true,
			get: function get() {
				return _constructor[key];
			}
		});
	});

	var _Canvas = __webpack_require__(9);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	var _Util = __webpack_require__(17);

	var _document2 = __webpack_require__(10);

	var _document3 = _interopRequireDefault(_document2);

	var _navigator2 = __webpack_require__(18);

	var _navigator3 = _interopRequireDefault(_navigator2);

	var _XMLHttpRequest2 = __webpack_require__(19);

	var _XMLHttpRequest3 = _interopRequireDefault(_XMLHttpRequest2);

	var _WebSocket2 = __webpack_require__(20);

	var _WebSocket3 = _interopRequireDefault(_WebSocket2);

	var _Image2 = __webpack_require__(11);

	var _Image3 = _interopRequireDefault(_Image2);

	var _Audio2 = __webpack_require__(12);

	var _Audio3 = _interopRequireDefault(_Audio2);

	var _FileReader2 = __webpack_require__(21);

	var _FileReader3 = _interopRequireDefault(_FileReader2);

	var _HTMLElement2 = __webpack_require__(4);

	var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

	var _localStorage2 = __webpack_require__(22);

	var _localStorage3 = _interopRequireDefault(_localStorage2);

	var _location2 = __webpack_require__(23);

	var _location3 = _interopRequireDefault(_location2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	exports.document = _document3.default;
	exports.navigator = _navigator3.default;
	exports.XMLHttpRequest = _XMLHttpRequest3.default;
	exports.WebSocket = _WebSocket3.default;
	exports.Image = _Image3.default;
	exports.Audio = _Audio3.default;
	exports.FileReader = _FileReader3.default;
	exports.HTMLElement = _HTMLElement3.default;
	exports.localStorage = _localStorage3.default;
	exports.location = _location3.default;

	// 暴露全局的 canvas
	var canvas = (0, _Util.isSubContext)() ? undefined : new _Canvas2.default();

	exports.canvas = canvas;
	exports.setTimeout = setTimeout;
	exports.setInterval = setInterval;
	exports.clearTimeout = clearTimeout;
	exports.clearInterval = clearInterval;
	exports.requestAnimationFrame = requestAnimationFrame;
	exports.cancelAnimationFrame = cancelAnimationFrame;

	/***/
},
/* 2 */
/***/function (module, exports) {

	"use strict";

	Object.defineProperty(exports, $c[6076], {
		value: true
	});

	var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
	    screenWidth = _wx$getSystemInfoSync.screenWidth,
	    screenHeight = _wx$getSystemInfoSync.screenHeight,
	    devicePixelRatio = _wx$getSystemInfoSync.devicePixelRatio;

	var innerWidth = exports.innerWidth = screenWidth;
	var innerHeight = exports.innerHeight = screenHeight;
	exports.devicePixelRatio = devicePixelRatio;
	var screen = exports.screen = {
		availWidth: innerWidth,
		availHeight: innerHeight
	};
	var performance = exports.performance = {
		now: function now() {
			return Date.now() / 1000;
		}
	};
	var ontouchstart = exports.ontouchstart = null;
	var ontouchmove = exports.ontouchmove = null;
	var ontouchend = exports.ontouchend = null;

	/***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, $c[6077], {
		value: true
	});
	exports.HTMLCanvasElement = exports.HTMLImageElement = undefined;

	var _HTMLElement3 = __webpack_require__(4);

	var _HTMLElement4 = _interopRequireDefault(_HTMLElement3);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError($c[6078]);
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError($c[6079]);
		}return call && (typeof call === $c[6080] || typeof call === $c[6081]) ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== $c[6082] && superClass !== null) {
			throw new TypeError($c[6083] + typeof superClass);
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var HTMLImageElement = exports.HTMLImageElement = function (_HTMLElement) {
		_inherits(HTMLImageElement, _HTMLElement);

		function HTMLImageElement() {
			_classCallCheck(this, HTMLImageElement);

			return _possibleConstructorReturn(this, (HTMLImageElement.__proto__ || Object.getPrototypeOf(HTMLImageElement)).call(this, $c[6084]));
		}

		return HTMLImageElement;
	}(_HTMLElement4.default);

	var HTMLCanvasElement = exports.HTMLCanvasElement = function (_HTMLElement2) {
		_inherits(HTMLCanvasElement, _HTMLElement2);

		function HTMLCanvasElement() {
			_classCallCheck(this, HTMLCanvasElement);

			return _possibleConstructorReturn(this, (HTMLCanvasElement.__proto__ || Object.getPrototypeOf(HTMLCanvasElement)).call(this, $c[6085]));
		}

		return HTMLCanvasElement;
	}(_HTMLElement4.default);

	/***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, $c[6086], {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ($c[6087] in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _Element2 = __webpack_require__(5);

	var _Element3 = _interopRequireDefault(_Element2);

	var _util = __webpack_require__(8);

	var _WindowProperties = __webpack_require__(2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError($c[6088]);
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError($c[6089]);
		}return call && (typeof call === $c[6090] || typeof call === $c[6091]) ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== $c[6092] && superClass !== null) {
			throw new TypeError($c[6093] + typeof superClass);
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var HTMLElement = function (_Element) {
		_inherits(HTMLElement, _Element);

		function HTMLElement() {
			var tagName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

			_classCallCheck(this, HTMLElement);

			var _this = _possibleConstructorReturn(this, (HTMLElement.__proto__ || Object.getPrototypeOf(HTMLElement)).call(this));

			_this.className = '';
			_this.childern = [];
			_this.style = {
				width: _WindowProperties.innerWidth + $c[6094],
				height: _WindowProperties.innerHeight + $c[6095]
			};
			_this.insertBefore = _util.noop;
			_this.innerHTML = '';

			_this.tagName = tagName.toUpperCase();
			return _this;
		}

		_createClass(HTMLElement, [{
			key: $c[6096],
			value: function setAttribute(name, value) {
				this[name] = value;
			}
		}, {
			key: $c[6097],
			value: function getAttribute(name) {
				return this[name];
			}
		}, {
			key: $c[6098],
			value: function getBoundingClientRect() {
				return {
					top: 0,
					left: 0,
					width: _WindowProperties.innerWidth,
					height: _WindowProperties.innerHeight
				};
			}
		}, {
			key: $c[6099],
			value: function focus() {}
		}, {
			key: $c[6100],
			get: function get() {
				var ret = parseInt(this.style.fontSize, 10) * this.innerHTML.length;

				return Number.isNaN(ret) ? 0 : ret;
			}
		}, {
			key: $c[6101],
			get: function get() {
				var ret = parseInt(this.style.fontSize, 10);

				return Number.isNaN(ret) ? 0 : ret;
			}
		}]);

		return HTMLElement;
	}(_Element3.default);

	exports.default = HTMLElement;

	/***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, $c[6102], {
		value: true
	});

	var _Node2 = __webpack_require__(6);

	var _Node3 = _interopRequireDefault(_Node2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError($c[6103]);
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError($c[6104]);
		}return call && (typeof call === $c[6105] || typeof call === $c[6106]) ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== $c[6107] && superClass !== null) {
			throw new TypeError($c[6108] + typeof superClass);
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var ELement = function (_Node) {
		_inherits(ELement, _Node);

		function ELement() {
			_classCallCheck(this, ELement);

			var _this = _possibleConstructorReturn(this, (ELement.__proto__ || Object.getPrototypeOf(ELement)).call(this));

			_this.className = '';
			_this.children = [];
			return _this;
		}

		return ELement;
	}(_Node3.default);

	exports.default = ELement;

	/***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, $c[6109], {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ($c[6110] in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _EventTarget2 = __webpack_require__(7);

	var _EventTarget3 = _interopRequireDefault(_EventTarget2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError($c[6111]);
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError($c[6112]);
		}return call && (typeof call === $c[6113] || typeof call === $c[6114]) ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== $c[6115] && superClass !== null) {
			throw new TypeError($c[6116] + typeof superClass);
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var Node = function (_EventTarget) {
		_inherits(Node, _EventTarget);

		function Node() {
			_classCallCheck(this, Node);

			var _this = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this));

			_this.childNodes = [];
			return _this;
		}

		_createClass(Node, [{
			key: $c[6117],
			value: function appendChild(node) {
				if (node instanceof Node) {
					this.childNodes.push(node);
				} else {
					throw new TypeError($c[6118]);
				}
			}
		}, {
			key: $c[6119],
			value: function cloneNode() {
				var copyNode = Object.create(this);

				Object.assign(copyNode, this);
				return copyNode;
			}
		}, {
			key: $c[6120],
			value: function removeChild(node) {
				var index = this.childNodes.findIndex(function (child) {
					return child === node;
				});

				if (index > -1) {
					return this.childNodes.splice(index, 1);
				}
				return null;
			}
		}]);

		return Node;
	}(_EventTarget3.default);

	exports.default = Node;

	/***/
},
/* 7 */
/***/function (module, exports) {

	'use strict';

	Object.defineProperty(exports, $c[6121], {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ($c[6122] in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError($c[6123]);
		}
	}

	var _events = new WeakMap();

	var EventTarget = function () {
		function EventTarget() {
			_classCallCheck(this, EventTarget);

			_events.set(this, {});
		}

		_createClass(EventTarget, [{
			key: $c[6124],
			value: function addEventListener(type, listener) {
				var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

				var events = _events.get(this);

				if (!events) {
					events = {};
					_events.set(this, events);
				}
				if (!events[type]) {
					events[type] = [];
				}
				events[type].push(listener);

				if (options.capture) {
					console.warn($c[6125]);
				}
				if (options.once) {
					console.warn($c[6126]);
				}
				if (options.passive) {
					console.warn($c[6127]);
				}
			}
		}, {
			key: $c[6128],
			value: function removeEventListener(type, listener) {
				var listeners = _events.get(this)[type];

				if (listeners && listeners.length > 0) {
					for (var i = listeners.length; i--; i > 0) {
						if (listeners[i] === listener) {
							listeners.splice(i, 1);
							break;
						}
					}
				}
			}
		}, {
			key: $c[6129],
			value: function dispatchEvent() {
				var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

				var listeners = _events.get(this)[event.type];

				if (listeners) {
					for (var i = 0; i < listeners.length; i++) {
						listeners[i](event);
					}
				}
			}
		}]);

		return EventTarget;
	}();

	exports.default = EventTarget;

	/***/
},
/* 8 */
/***/function (module, exports) {

	'use strict';

	Object.defineProperty(exports, $c[6130], {
		value: true
	});
	exports.noop = noop;
	exports.isSubContext = isSubContext;
	function noop() {}

	function isSubContext() {
		return typeof GameGlobal !== $c[6131] && GameGlobal.__isSubContext === true;
	}

	/***/
},
/* 9 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, $c[6132], {
		value: true
	});
	exports.default = Canvas;

	var _constructor = __webpack_require__(3);

	var _HTMLElement = __webpack_require__(4);

	var _HTMLElement2 = _interopRequireDefault(_HTMLElement);

	var _document = __webpack_require__(10);

	var _document2 = _interopRequireDefault(_document);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	var hasModifiedCanvasPrototype = false;
	var hasInit2DContextConstructor = false;
	var hasInitWebGLContextConstructor = false;

	function Canvas() {
		var canvas = wx.createCanvas();

		canvas.type = $c[6133];

		canvas.__proto__.__proto__ = new _HTMLElement2.default($c[6134]);

		var _getContext = canvas.getContext;

		canvas.getBoundingClientRect = function () {
			var ret = {
				top: 0,
				left: 0,
				width: window.innerWidth,
				height: window.innerHeight
			};
			return ret;
		};

		return canvas;
	}

	/***/
},
/* 10 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, $c[6135], {
		value: true
	});

	var _window = __webpack_require__(1);

	var window = _interopRequireWildcard(_window);

	var _HTMLElement = __webpack_require__(4);

	var _HTMLElement2 = _interopRequireDefault(_HTMLElement);

	var _Image = __webpack_require__(11);

	var _Image2 = _interopRequireDefault(_Image);

	var _Audio = __webpack_require__(12);

	var _Audio2 = _interopRequireDefault(_Audio);

	var _Canvas = __webpack_require__(9);

	var _Canvas2 = _interopRequireDefault(_Canvas);

	__webpack_require__(15);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}newObj.default = obj;return newObj;
		}
	}

	var events = {};

	var document = {
		readyState: $c[6136],
		visibilityState: $c[6137],
		documentElement: window,
		hidden: false,
		style: {},
		location: window.location,
		ontouchstart: null,
		ontouchmove: null,
		ontouchend: null,

		head: new _HTMLElement2.default($c[6138]),
		body: new _HTMLElement2.default($c[6139]),

		createElement: function createElement(tagName) {
			if (tagName === $c[6140]) {
				return new _Canvas2.default();
			} else if (tagName === $c[6141]) {
				return new _Audio2.default();
			} else if (tagName === $c[6142]) {
				return new _Image2.default();
			}

			return new _HTMLElement2.default(tagName);
		},
		getElementById: function getElementById(id) {
			if (id === window.canvas.id) {
				return window.canvas;
			}
			return null;
		},
		getElementsByTagName: function getElementsByTagName(tagName) {
			if (tagName === $c[6143]) {
				return [document.head];
			} else if (tagName === $c[6144]) {
				return [document.body];
			} else if (tagName === $c[6145]) {
				return [window.canvas];
			}
			return [];
		},
		querySelector: function querySelector(query) {
			if (query === $c[6146]) {
				return document.head;
			} else if (query === $c[6147]) {
				return document.body;
			} else if (query === $c[6148]) {
				return window.canvas;
			} else if (query === $c[6149] + window.canvas.id) {
				return window.canvas;
			}
			return null;
		},
		querySelectorAll: function querySelectorAll(query) {
			if (query === $c[6150]) {
				return [document.head];
			} else if (query === $c[6151]) {
				return [document.body];
			} else if (query === $c[6152]) {
				return [window.canvas];
			}
			return [];
		},
		addEventListener: function addEventListener(type, listener) {
			if (!events[type]) {
				events[type] = [];
			}
			events[type].push(listener);
		},
		removeEventListener: function removeEventListener(type, listener) {
			var listeners = events[type];

			if (listeners && listeners.length > 0) {
				for (var i = listeners.length; i--; i > 0) {
					if (listeners[i] === listener) {
						listeners.splice(i, 1);
						break;
					}
				}
			}
		},
		dispatchEvent: function dispatchEvent(event) {
			var listeners = events[event.type];

			if (listeners) {
				for (var i = 0; i < listeners.length; i++) {
					listeners[i](event);
				}
			}
		}
	};

	exports.default = document;

	/***/
},
/* 11 */
/***/function (module, exports) {

	"use strict";

	Object.defineProperty(exports, $c[6153], {
		value: true
	});
	exports.default = Image;
	function Image() {
		var image = wx.createImage();

		return image;
	}

	/***/
},
/* 12 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, $c[6154], {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ($c[6155] in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _HTMLAudioElement2 = __webpack_require__(13);

	var _HTMLAudioElement3 = _interopRequireDefault(_HTMLAudioElement2);

	var _util = __webpack_require__(8);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError($c[6156]);
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError($c[6157]);
		}return call && (typeof call === $c[6158] || typeof call === $c[6159]) ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== $c[6160] && superClass !== null) {
			throw new TypeError($c[6161] + typeof superClass);
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var HAVE_NOTHING = 0;
	var HAVE_METADATA = 1;
	var HAVE_CURRENT_DATA = 2;
	var HAVE_FUTURE_DATA = 3;
	var HAVE_ENOUGH_DATA = 4;

	var _innerAudioContext = new WeakMap();
	var _src = new WeakMap();
	var _loop = new WeakMap();
	var _autoplay = new WeakMap();

	var Audio = function (_HTMLAudioElement) {
		_inherits(Audio, _HTMLAudioElement);

		function Audio(url) {
			_classCallCheck(this, Audio);

			var _this = _possibleConstructorReturn(this, (Audio.__proto__ || Object.getPrototypeOf(Audio)).call(this));

			_this.HAVE_NOTHING = HAVE_NOTHING;
			_this.HAVE_METADATA = HAVE_METADATA;
			_this.HAVE_CURRENT_DATA = HAVE_CURRENT_DATA;
			_this.HAVE_FUTURE_DATA = HAVE_FUTURE_DATA;
			_this.HAVE_ENOUGH_DATA = HAVE_ENOUGH_DATA;
			_this.readyState = HAVE_NOTHING;

			if ((0, _util.isSubContext)()) {
				console.warn($c[6162]);
				return _possibleConstructorReturn(_this);
			}

			_src.set(_this, '');

			var innerAudioContext = wx.createInnerAudioContext();

			_innerAudioContext.set(_this, innerAudioContext);

			innerAudioContext.onCanplay(function () {
				_this.dispatchEvent({ type: $c[6163] });
				_this.dispatchEvent({ type: $c[6164] });
				_this.dispatchEvent({ type: $c[6165] });
				_this.dispatchEvent({ type: $c[6166] });
				_this.dispatchEvent({ type: $c[6167] });
				_this.readyState = HAVE_CURRENT_DATA;
			});
			innerAudioContext.onPlay(function () {
				_this.dispatchEvent({ type: $c[6168] });
			});
			innerAudioContext.onPause(function () {
				_this.dispatchEvent({ type: $c[6169] });
			});
			innerAudioContext.onEnded(function () {
				_this.dispatchEvent({ type: $c[6170] });
				_this.readyState = HAVE_ENOUGH_DATA;
			});
			innerAudioContext.onError(function () {
				_this.dispatchEvent({ type: $c[6171] });
			});

			if (url) {
				_innerAudioContext.get(_this).src = url;
			}
			return _this;
		}

		_createClass(Audio, [{
			key: $c[6172],
			value: function load() {
				console.warn($c[6173]);
			}
		}, {
			key: $c[6174],
			value: function play() {
				if (!(0, _util.isSubContext)()) {
					_innerAudioContext.get(this).play();
				}
			}
		}, {
			key: $c[6175],
			value: function pause() {
				if (!(0, _util.isSubContext)()) {
					_innerAudioContext.get(this).pause();
				}
			}
		}, {
			key: $c[6176],
			value: function canPlayType() {
				var mediaType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

				if (typeof mediaType !== $c[6177]) {
					return '';
				}

				if (mediaType.indexOf($c[6178]) > -1 || mediaType.indexOf($c[6179])) {
					return $c[6180];
				}
				return '';
			}
		}, {
			key: $c[6181],
			value: function cloneNode() {
				var newAudio = new Audio();
				if (!(0, _util.isSubContext)()) {
					newAudio.loop = _innerAudioContext.get(this).loop;
					newAudio.autoplay = _innerAudioContext.get(this).loop;
					newAudio.src = this.src;
				}
				return newAudio;
			}
		}, {
			key: $c[6182],
			get: function get() {
				if (!(0, _util.isSubContext)()) {
					return _innerAudioContext.get(this).currentTime;
				}
				return 0;
			},
			set: function set(value) {
				if (!(0, _util.isSubContext)()) {
					_innerAudioContext.get(this).seek(value);
				}
			}
		}, {
			key: $c[6183],
			get: function get() {
				return _src.get(this);
			},
			set: function set(value) {
				_src.set(this, value);
				if (!(0, _util.isSubContext)()) {
					_innerAudioContext.get(this).src = value;
				}
			}
		}, {
			key: $c[6184],
			get: function get() {
				if (!(0, _util.isSubContext)()) {
					return _innerAudioContext.get(this).loop;
				}
				return false;
			},
			set: function set(value) {
				if (!(0, _util.isSubContext)()) {
					_innerAudioContext.get(this).loop = value;
				}
			}
		}, {
			key: $c[6185],
			get: function get() {
				if (!(0, _util.isSubContext)()) {
					return _innerAudioContext.get(this).autoplay;
				}
				return false;
			},
			set: function set(value) {
				if (!(0, _util.isSubContext)()) {
					_innerAudioContext.get(this).autoplay = value;
				}
			}
		}, {
			key: $c[6186],
			get: function get() {
				if (!(0, _util.isSubContext)()) {
					return _innerAudioContext.get(this).paused;
				}
				return false;
			}
		}]);

		return Audio;
	}(_HTMLAudioElement3.default);

	exports.default = Audio;

	/***/
},
/* 13 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, $c[6187], {
		value: true
	});

	var _HTMLMediaElement2 = __webpack_require__(14);

	var _HTMLMediaElement3 = _interopRequireDefault(_HTMLMediaElement2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError($c[6188]);
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError($c[6189]);
		}return call && (typeof call === $c[6190] || typeof call === $c[6191]) ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== $c[6192] && superClass !== null) {
			throw new TypeError($c[6193] + typeof superClass);
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var HTMLAudioElement = function (_HTMLMediaElement) {
		_inherits(HTMLAudioElement, _HTMLMediaElement);

		function HTMLAudioElement() {
			_classCallCheck(this, HTMLAudioElement);

			return _possibleConstructorReturn(this, (HTMLAudioElement.__proto__ || Object.getPrototypeOf(HTMLAudioElement)).call(this, $c[6194]));
		}

		return HTMLAudioElement;
	}(_HTMLMediaElement3.default);

	exports.default = HTMLAudioElement;

	/***/
},
/* 14 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, $c[6195], {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ($c[6196] in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _HTMLElement2 = __webpack_require__(4);

	var _HTMLElement3 = _interopRequireDefault(_HTMLElement2);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError($c[6197]);
		}
	}

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError($c[6198]);
		}return call && (typeof call === $c[6199] || typeof call === $c[6200]) ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== $c[6201] && superClass !== null) {
			throw new TypeError($c[6202] + typeof superClass);
		}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var HTMLMediaElement = function (_HTMLElement) {
		_inherits(HTMLMediaElement, _HTMLElement);

		function HTMLMediaElement(type) {
			_classCallCheck(this, HTMLMediaElement);

			return _possibleConstructorReturn(this, (HTMLMediaElement.__proto__ || Object.getPrototypeOf(HTMLMediaElement)).call(this, type));
		}

		_createClass(HTMLMediaElement, [{
			key: $c[6203],
			value: function addTextTrack() {}
		}, {
			key: $c[6204],
			value: function captureStream() {}
		}, {
			key: $c[6205],
			value: function fastSeek() {}
		}, {
			key: $c[6206],
			value: function load() {}
		}, {
			key: $c[6207],
			value: function pause() {}
		}, {
			key: $c[6208],
			value: function play() {}
		}]);

		return HTMLMediaElement;
	}(_HTMLElement3.default);

	exports.default = HTMLMediaElement;

	/***/
},
/* 15 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(16);

	/***/
},
/* 16 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	var _window = __webpack_require__(1);

	var window = _interopRequireWildcard(_window);

	var _document = __webpack_require__(10);

	var _document2 = _interopRequireDefault(_document);

	var _util = __webpack_require__(8);

	function _interopRequireDefault(obj) {
		return obj && obj.__esModule ? obj : { default: obj };
	}

	function _interopRequireWildcard(obj) {
		if (obj && obj.__esModule) {
			return obj;
		} else {
			var newObj = {};if (obj != null) {
				for (var key in obj) {
					if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
				}
			}newObj.default = obj;return newObj;
		}
	}

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError($c[6209]);
		}
	}

	var TouchEvent = function TouchEvent(type) {
		_classCallCheck(this, TouchEvent);

		this.target = window.canvas;
		this.currentTarget = window.canvas;
		this.touches = [];
		this.targetTouches = [];
		this.changedTouches = [];
		this.preventDefault = _util.noop;
		this.stopPropagation = _util.noop;

		this.type = type;
	};

	function touchEventHandlerFactory(type) {
		return function (event) {
			var touchEvent = new TouchEvent(type);

			touchEvent.touches = event.touches;
			touchEvent.targetTouches = Array.prototype.slice.call(event.touches);
			touchEvent.changedTouches = event.changedTouches;
			touchEvent.timeStamp = event.timeStamp;
			_document2.default.dispatchEvent(touchEvent);
		};
	}

	wx.onTouchStart(touchEventHandlerFactory($c[6210]));
	wx.onTouchMove(touchEventHandlerFactory($c[6211]));
	wx.onTouchEnd(touchEventHandlerFactory($c[6212]));
	wx.onTouchCancel(touchEventHandlerFactory($c[6213]));

	/***/
},
/* 17 */
/***/function (module, exports) {

	'use strict';

	Object.defineProperty(exports, $c[6214], {
		value: true
	});
	exports.noop = noop;
	exports.isSubContext = isSubContext;
	function noop() {}

	function isSubContext() {
		return typeof GameGlobal !== $c[6215] && GameGlobal.__isSubContext === true;
	}

	/***/
},
/* 18 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, $c[6216], {
		value: true
	});

	var _util = __webpack_require__(8);

	// TODO 需要 wx.getSystemInfo 获取更详细信息
	var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
	    platform = _wx$getSystemInfoSync.platform;

	var navigator = {
		platform: platform,
		language: $c[6217],
		appVersion: '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
		userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN',
		onLine: true, // TODO 用 wx.getNetworkStateChange 和 wx.onNetworkStateChange 来返回真实的状态

		// TODO 用 wx.getLocation 来封装 geolocation
		geolocation: {
			getCurrentPosition: _util.noop,
			watchPosition: _util.noop,
			clearWatch: _util.noop
		}
	};

	exports.default = navigator;

	/***/
},
/* 19 */
/***/function (module, exports) {

	'use strict';

	Object.defineProperty(exports, $c[6218], {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ($c[6219] in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError($c[6220]);
		}
	}

	var _url = new WeakMap();
	var _method = new WeakMap();
	var _requestHeader = new WeakMap();
	var _responseHeader = new WeakMap();
	var _requestTask = new WeakMap();

	function _triggerEvent(type) {
		if (typeof this[$c[6221] + type] === $c[6222]) {
			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				args[_key - 1] = arguments[_key];
			}

			this[$c[6223] + type].apply(this, args);
		}
	}

	function _changeReadyState(readyState) {
		this.readyState = readyState;
		_triggerEvent.call(this, $c[6224]);
	}

	var XMLHttpRequest = function () {
		// TODO 没法模拟 HEADERS_RECEIVED 和 LOADING 两个状态
		function XMLHttpRequest() {
			_classCallCheck(this, XMLHttpRequest);

			this.onabort = null;
			this.onerror = null;
			this.onload = null;
			this.onloadstart = null;
			this.onprogress = null;
			this.ontimeout = null;
			this.onloadend = null;
			this.onreadystatechange = null;
			this.readyState = 0;
			this.response = null;
			this.responseText = null;
			this.responseType = '';
			this.responseXML = null;
			this.status = 0;
			this.statusText = '';
			this.upload = {};
			this.withCredentials = false;

			_requestHeader.set(this, {
				'content-type': $c[6225]
			});
			_responseHeader.set(this, {});
		}

		/*
   * TODO 这一批事件应该是在 XMLHttpRequestEventTarget.prototype 上面的
   */

		_createClass(XMLHttpRequest, [{
			key: $c[6226],
			value: function abort() {
				var myRequestTask = _requestTask.get(this);

				if (myRequestTask) {
					myRequestTask.abort();
				}
			}
		}, {
			key: $c[6227],
			value: function getAllResponseHeaders() {
				var responseHeader = _responseHeader.get(this);

				return Object.keys(responseHeader).map(function (header) {
					return header + $c[6228] + responseHeader[header];
				}).join('\n');
			}
		}, {
			key: $c[6229],
			value: function getResponseHeader(header) {
				return _responseHeader.get(this)[header];
			}
		}, {
			key: $c[6230],
			value: function open(method, url /* async, user, password 这几个参数在小程序内不支持*/) {
				_method.set(this, method);
				_url.set(this, url);
				_changeReadyState.call(this, XMLHttpRequest.OPENED);
			}
		}, {
			key: $c[6231],
			value: function overrideMimeType() {}
		}, {
			key: $c[6232],
			value: function send() {
				var _this = this;

				var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

				if (this.readyState !== XMLHttpRequest.OPENED) {
					throw new Error($c[6233]);
				} else {
					wx.request({
						data: data,
						url: _url.get(this),
						method: _method.get(this),
						header: _requestHeader.get(this),
						responseType: this.responseType,
						success: function success(_ref) {
							var data = _ref.data,
							    statusCode = _ref.statusCode,
							    header = _ref.header;

							if (typeof data !== $c[6234] && !(data instanceof ArrayBuffer)) {
								try {
									data = JSON.stringify(data);
								} catch (e) {
									data = data;
								}
							}

							_this.status = statusCode;
							_responseHeader.set(_this, header);
							_triggerEvent.call(_this, $c[6235]);
							_changeReadyState.call(_this, XMLHttpRequest.HEADERS_RECEIVED);
							_changeReadyState.call(_this, XMLHttpRequest.LOADING);

							_this.response = data;

							if (data instanceof ArrayBuffer) {
								_this.responseText = '';
								var bytes = new Uint8Array(data);
								var len = bytes.byteLength;

								for (var i = 0; i < len; i++) {
									_this.responseText += String.fromCharCode(bytes[i]);
								}
							} else {
								_this.responseText = data;
							}
							_changeReadyState.call(_this, XMLHttpRequest.DONE);
							_triggerEvent.call(_this, $c[6236]);
							_triggerEvent.call(_this, $c[6237]);
						},
						fail: function fail(_ref2) {
							var errMsg = _ref2.errMsg;

							// TODO 规范错误
							if (errMsg.indexOf($c[6238]) !== -1) {
								_triggerEvent.call(_this, $c[6239]);
							} else {
								_triggerEvent.call(_this, $c[6240], errMsg);
							}
							_triggerEvent.call(_this, $c[6241]);
						}
					});
				}
			}
		}, {
			key: $c[6242],
			value: function setRequestHeader(header, value) {
				var myHeader = _requestHeader.get(this);

				myHeader[header] = value;
				_requestHeader.set(this, myHeader);
			}
		}]);

		return XMLHttpRequest;
	}();

	XMLHttpRequest.UNSEND = 0;
	XMLHttpRequest.OPENED = 1;
	XMLHttpRequest.HEADERS_RECEIVED = 2;
	XMLHttpRequest.LOADING = 3;
	XMLHttpRequest.DONE = 4;
	exports.default = XMLHttpRequest;

	/***/
},
/* 20 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, $c[6243], {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ($c[6244] in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _util = __webpack_require__(8);

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError($c[6245]);
		}
	}

	var _socketTask = new WeakMap();

	var WebSocket = function () {
		// TODO 更新 binaryType
		// The connection is in the process of closing.
		// The connection is not yet open.
		function WebSocket(url) {
			var _this = this;

			var protocols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

			_classCallCheck(this, WebSocket);

			this.binaryType = '';
			this.bufferedAmount = 0;
			this.extensions = '';
			this.onclose = null;
			this.onerror = null;
			this.onmessage = null;
			this.onopen = null;
			this.protocol = '';
			this.readyState = 3;

			if ((0, _util.isSubContext)()) {
				throw new Error($c[6246]);
			}

			if (typeof url !== $c[6247] || !/(^ws:\/\/)|(^wss:\/\/)/.test(url)) {
				throw new TypeError($c[6248] + url + $c[6249]);
			}

			this.url = url;
			this.readyState = WebSocket.CONNECTING;

			var socketTask = wx.connectSocket({
				url: url,
				protocols: Array.isArray(protocols) ? protocols : [protocols]
			});

			_socketTask.set(this, socketTask);

			socketTask.onClose(function (res) {
				_this.readyState = WebSocket.CLOSED;
				if (typeof _this.onclose === $c[6250]) {
					_this.onclose(res);
				}
			});

			socketTask.onMessage(function (res) {
				if (typeof _this.onmessage === $c[6251]) {
					_this.onmessage(res);
				}
			});

			socketTask.onOpen(function () {
				_this.readyState = WebSocket.OPEN;
				if (typeof _this.onopen === $c[6252]) {
					_this.onopen();
				}
			});

			socketTask.onError(function (res) {
				if (typeof _this.onerror === $c[6253]) {
					_this.onerror(new Error(res.errMsg));
				}
			});

			return this;
		} // TODO 小程序内目前获取不到，实际上需要根据服务器选择的 sub-protocol 返回
		// TODO 更新 bufferedAmount
		// The connection is closed or couldn't be opened.

		// The connection is open and ready to communicate.


		_createClass(WebSocket, [{
			key: $c[6254],
			value: function close(code, reason) {
				this.readyState = WebSocket.CLOSING;
				var socketTask = _socketTask.get(this);

				socketTask.close({
					code: code,
					reason: reason
				});
			}
		}, {
			key: $c[6255],
			value: function send(data) {
				if (typeof data !== $c[6256] && !(data instanceof ArrayBuffer)) {
					throw new TypeError($c[6257] + data + $c[6258]);
				}

				var socketTask = _socketTask.get(this);

				socketTask.send({
					data: data
				});
			}
		}]);

		return WebSocket;
	}();

	WebSocket.CONNECTING = 0;
	WebSocket.OPEN = 1;
	WebSocket.CLOSING = 2;
	WebSocket.CLOSED = 3;
	exports.default = WebSocket;

	/***/
},
/* 21 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, $c[6259], {
		value: true
	});

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ($c[6260] in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
			}
		}return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
		};
	}();

	var _util = __webpack_require__(8);

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError($c[6261]);
		}
	}

	/*
  * TODO 使用 wx.readFile 来封装 FileReader
  */
	var FileReader = function () {
		function FileReader() {
			_classCallCheck(this, FileReader);
		}

		_createClass(FileReader, [{
			key: $c[6262],
			value: function construct() {
				if ((0, _util.isSubContext)()) {
					throw new Error($c[6263]);
				}
			}
		}]);

		return FileReader;
	}();

	exports.default = FileReader;

	/***/
},
/* 22 */
/***/function (module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, $c[6264], {
		value: true
	});

	var _util = __webpack_require__(8);

	var mainContext = {
		get length() {
			var _wx$getStorageInfoSyn = wx.getStorageInfoSync(),
			    keys = _wx$getStorageInfoSyn.keys;

			return keys.length;
		},

		key: function key(n) {
			var _wx$getStorageInfoSyn2 = wx.getStorageInfoSync(),
			    keys = _wx$getStorageInfoSyn2.keys;

			return keys[n];
		},
		getItem: function getItem(key) {
			return wx.getStorageSync(key);
		},
		setItem: function setItem(key, value) {
			return wx.setStorageSync(key, value);
		},
		removeItem: function removeItem(key) {
			wx.removeStorageSync(key);
		},
		clear: function clear() {
			wx.clearStorageSync();
		}
	};

	var memLocalStorage = {};

	var subContext = {
		get length() {
			var keys = Object.keys(memLocalStorage);

			return keys.length;
		},

		key: function key(n) {
			var keys = Object.keys(memLocalStorage);

			return keys[n];
		},
		getItem: function getItem(key) {
			return memLocalStorage[key];
		},
		setItem: function setItem(key, value) {
			memLocalStorage[key] = value;
		},
		removeItem: function removeItem(key) {
			delete memLocalStorage[key];
		},
		clear: function clear() {
			memLocalStorage = {};
		}
	};

	var localStorage = (0, _util.isSubContext)() ? subContext : mainContext;

	exports.default = localStorage;

	/***/
},
/* 23 */
/***/function (module, exports) {

	'use strict';

	Object.defineProperty(exports, $c[6265], {
		value: true
	});
	var location = {
		href: $c[6266],
		reload: function reload() {}
	};

	exports.default = location;

	/***/
}]
/******/);