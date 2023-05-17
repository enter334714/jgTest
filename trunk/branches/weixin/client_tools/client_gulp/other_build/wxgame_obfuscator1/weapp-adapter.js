var H = wx.$F;
(function (modules) {
  var yq = {};function __webpack_require__(moduleId) {
    if (yq[moduleId]) return yq[moduleId]['exports'];var module = yq[moduleId] = { 'exports': {}, 'id': moduleId, 'loaded': ![] };return modules[moduleId]['call'](module['exports'], module, module['exports'], __webpack_require__), module['loaded'] = !![], module['exports'];
  }return __webpack_require__['m'] = modules, __webpack_require__['c'] = yq, __webpack_require__['p'] = '', __webpack_require__(0x0);
})([function (module, exports, __webpack_require__) {
  'use strict';

  var _window2 = __webpack_require__(0x1),
      _window = jck4x(_window2),
      up843j = __webpack_require__(0x4),
      wtsh59 = q60roz(up843j);function q60roz(pe8u) {
    return pe8u && pe8u['__esModule'] ? pe8u : { 'default': pe8u };
  }function jck4x(n$16zr) {
    if (n$16zr && n$16zr['__esModule']) return n$16zr;else {
      var auepm = {};if (n$16zr != null) for (var zrn60q in n$16zr) {
        if (Object['prototype']['hasOwnProperty']['call'](n$16zr, zrn60q)) auepm[zrn60q] = n$16zr[zrn60q];
      }return auepm['default'] = n$16zr, auepm;
    }
  }var t_xc5k = GameGlobal;function $i79() {
    _window['addEventListener'] = function (n76, kj84cx) {
      _window['document']['addEventListener'](n76, kj84cx);
    }, _window['removeEventListener'] = function (twis, _sxtc) {
      _window['document']['removeEventListener'](twis, _sxtc);
    };_window['canvas'] && (_window['canvas']['addEventListener'] = _window['addEventListener'], _window['canvas']['removeEventListener'] = _window['removeEventListener']);t_xc5k['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new wtsh59['default']('canvas'), sharedCanvas['addEventListener'] = _window['addEventListener'], sharedCanvas['removeEventListener'] = _window['removeEventListener']);var _wx$getSystemInfoSync = wx['getSystemInfoSync'](),
        wh7si = _wx$getSystemInfoSync['platform'];if (typeof __devtoolssubcontext === 'undefined' && wh7si === 'devtools') {
      for (var qoy0z in _window) {
        var i7hsw = Object['getOwnPropertyDescriptor'](t_xc5k, qoy0z);(!i7hsw || i7hsw['configurable'] === !![]) && Object['defineProperty'](window, qoy0z, { 'value': _window[qoy0z] });
      }for (var pb2ma in _window['document']) {
        var u4p3j = Object['getOwnPropertyDescriptor'](t_xc5k['document'], pb2ma);(!u4p3j || u4p3j['configurable'] === !![]) && Object['defineProperty'](t_xc5k['document'], pb2ma, { 'value': _window['document'][pb2ma] });
      }window['parent'] = window;
    } else {
      for (var p4ju8 in _window) {
        t_xc5k[p4ju8] = _window[p4ju8];
      }t_xc5k['window'] = _window, window = t_xc5k, window['top'] = window['parent'] = window;
    }
  }!GameGlobal['__isAdapterInjected'] && (GameGlobal['__isAdapterInjected'] = !![], $i79());
}, function (module, exports, __webpack_require__) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] }), exports['cancelAnimationFrame'] = exports['requestAnimationFrame'] = exports['clearInterval'] = exports['clearTimeout'] = exports['setInterval'] = exports['setTimeout'] = exports['canvas'] = exports['location'] = exports['localStorage'] = exports['HTMLElement'] = exports['FileReader'] = exports['Audio'] = exports['Image'] = exports['WebSocket'] = exports['XMLHttpRequest'] = exports['navigator'] = exports['document'] = undefined;var nr61z0 = __webpack_require__(0x2);Object['keys'](nr61z0)['forEach'](function (ihw) {
    if (ihw === 'default' || ihw === '__esModule') return;Object['defineProperty'](exports, ihw, { 'enumerable': !![], 'get': function whs9() {
        return nr61z0[ihw];
      } });
  });var c_k5t = __webpack_require__(0x3);Object['keys'](c_k5t)['forEach'](function (ckjx4) {
    if (ckjx4 === 'default' || ckjx4 === '__esModule') return;Object['defineProperty'](exports, ckjx4, { 'enumerable': !![], 'get': function o0yqdz() {
        return c_k5t[ckjx4];
      } });
  });var hw$9i7 = __webpack_require__(0x9),
      xujk4 = u3aem(hw$9i7),
      vl2e = __webpack_require__(0x11),
      _document2 = __webpack_require__(0xa),
      _document3 = u3aem(_document2),
      jku43 = __webpack_require__(0x12),
      hw95 = u3aem(jku43),
      u834jk = __webpack_require__(0x13),
      $i1n76 = u3aem(u834jk),
      ihs9wt = __webpack_require__(0x14),
      meal2 = u3aem(ihs9wt),
      n0zqr = __webpack_require__(0xb),
      pem8u3 = u3aem(n0zqr),
      mp8eu = __webpack_require__(0xc),
      ht95s = u3aem(mp8eu),
      x45_ = __webpack_require__(0x15),
      h1w$7 = u3aem(x45_),
      s5ht9 = __webpack_require__(0x4),
      eb2mla = u3aem(s5ht9),
      bl = __webpack_require__(0x16),
      ujm38 = u3aem(bl),
      uepm38 = __webpack_require__(0x17),
      j3u8k4 = u3aem(uepm38);function u3aem(u83pj4) {
    return u83pj4 && u83pj4['__esModule'] ? u83pj4 : { 'default': u83pj4 };
  }exports['document'] = _document3['default'], exports['navigator'] = hw95['default'], exports['XMLHttpRequest'] = $i1n76['default'], exports['WebSocket'] = meal2['default'], exports['Image'] = pem8u3['default'], exports['Audio'] = ht95s['default'], exports['FileReader'] = h1w$7['default'], exports['HTMLElement'] = eb2mla['default'], exports['localStorage'] = ujm38['default'], exports['location'] = j3u8k4['default'];var zn$16r = (0x0, vl2e['isSubContext'])() ? undefined : new xujk4['default']();exports['canvas'] = zn$16r, exports['setTimeout'] = setTimeout, exports['setInterval'] = setInterval, exports['clearTimeout'] = clearTimeout, exports['clearInterval'] = clearInterval, exports['requestAnimationFrame'] = requestAnimationFrame, exports['cancelAnimationFrame'] = cancelAnimationFrame;
}, function (module, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });var _wx$getSystemInfoSync = wx['getSystemInfoSync'](),
      pu83em = _wx$getSystemInfoSync['screenWidth'],
      c4_kj = _wx$getSystemInfoSync['screenHeight'],
      ht59sw = _wx$getSystemInfoSync['devicePixelRatio'],
      s5x_tc = exports['innerWidth'] = pu83em,
      kxc8j4 = exports['innerHeight'] = c4_kj;exports['devicePixelRatio'] = ht59sw;var rz0qo6 = exports['screen'] = { 'availWidth': s5x_tc, 'availHeight': kxc8j4 },
      b3mepa = exports['performance'] = { 'now': function n01z6r() {
      return Date['now']() / 0x3e8;
    } },
      i9ws7 = exports['ontouchstart'] = null,
      lbvae = exports['ontouchmove'] = null,
      zqor6 = exports['ontouchend'] = null;
}, function (module, exports, __webpack_require__) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] }), exports['HTMLCanvasElement'] = exports['HTMLImageElement'] = undefined;var rqz0d = __webpack_require__(0x4),
      inw$ = u3k48(rqz0d);function u3k48(kjux84) {
    return kjux84 && kjux84['__esModule'] ? kjux84 : { 'default': kjux84 };
  }function $in76(ebv2al, cxjk8) {
    if (!(ebv2al instanceof cxjk8)) throw new TypeError('Cannot call a class as a function');
  }function q0zor($znr, oy0zd) {
    if (!$znr) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return oy0zd && (typeof oy0zd === 'object' || typeof oy0zd === 'function') ? oy0zd : $znr;
  }function qyd(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);subClass['prototype'] = Object['create'](superClass && superClass['prototype'], { 'constructor': { 'value': subClass, 'enumerable': ![], 'writable': !![], 'configurable': !![] } });if (superClass) Object['setPrototypeOf'] ? Object['setPrototypeOf'](subClass, superClass) : subClass['__proto__'] = superClass;
  }var in7$6 = exports['HTMLImageElement'] = function (k8uxj4) {
    qyd(wsh, k8uxj4);function wsh() {
      return $in76(this, wsh), q0zor(this, (wsh['__proto__'] || Object['getPrototypeOf'](wsh))['call'](this, 'img'));
    }return wsh;
  }(inw$['default']),
      swi9ht = exports['HTMLCanvasElement'] = function (elbm2a) {
    qyd(l2bvg, elbm2a);function l2bvg() {
      return $in76(this, l2bvg), q0zor(this, (l2bvg['__proto__'] || Object['getPrototypeOf'](l2bvg))['call'](this, 'canvas'));
    }return l2bvg;
  }(inw$['default']);
}, function (module, exports, __webpack_require__) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });var _createClass = function () {
    function itsw9h(j3u, hws97i) {
      for (var upem3a = 0x0; upem3a < hws97i['length']; upem3a++) {
        var pba2e = hws97i[upem3a];pba2e['enumerable'] = pba2e['enumerable'] || ![], pba2e['configurable'] = !![];if ('value' in pba2e) pba2e['writable'] = !![];Object['defineProperty'](j3u, pba2e['key'], pba2e);
      }
    }return function (_4xk, cx4kj, ro0zq) {
      if (cx4kj) itsw9h(_4xk['prototype'], cx4kj);if (ro0zq) itsw9h(_4xk, ro0zq);return _4xk;
    };
  }(),
      i$n17w = __webpack_require__(0x5),
      tcxs5_ = twh9is(i$n17w),
      xc_5kt = __webpack_require__(0x8),
      euamp = __webpack_require__(0x2);function twh9is(em3ba) {
    return em3ba && em3ba['__esModule'] ? em3ba : { 'default': em3ba };
  }function sitwh9(twshi9, a2mep) {
    if (!(twshi9 instanceof a2mep)) throw new TypeError('Cannot call a class as a function');
  }function nr$71(bv2agl, stx_5) {
    if (!bv2agl) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return stx_5 && (typeof stx_5 === 'object' || typeof stx_5 === 'function') ? stx_5 : bv2agl;
  }function t_9sh(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);subClass['prototype'] = Object['create'](superClass && superClass['prototype'], { 'constructor': { 'value': subClass, 'enumerable': ![], 'writable': !![], 'configurable': !![] } });if (superClass) Object['setPrototypeOf'] ? Object['setPrototypeOf'](subClass, superClass) : subClass['__proto__'] = superClass;
  }var h17$ = function (i97$w) {
    t_9sh(c5_4xk, i97$w);function c5_4xk() {
      var whis = arguments['length'] > 0x0 && arguments[0x0] !== undefined ? arguments[0x0] : '';sitwh9(this, c5_4xk);var mju = nr$71(this, (c5_4xk['__proto__'] || Object['getPrototypeOf'](c5_4xk))['call'](this));return mju['className'] = '', mju['childern'] = [], mju['style'] = { 'width': euamp['innerWidth'] + 'px', 'height': euamp['innerHeight'] + 'px' }, mju['insertBefore'] = xc_5kt['noop'], mju['innerHTML'] = '', mju['tagName'] = whis['toUpperCase'](), mju;
    }return _createClass(c5_4xk, [{ 'key': 'setAttribute', 'value': function amebp3(n6z10r, s5h_9) {
        this[n6z10r] = s5h_9;
      } }, { 'key': 'getAttribute', 'value': function $z6nr1(zorq6) {
        return this[zorq6];
      } }, { 'key': 'getBoundingClientRect', 'value': function a2pe() {
        return { 'top': 0x0, 'left': 0x0, 'width': euamp['innerWidth'], 'height': euamp['innerHeight'] };
      } }, { 'key': 'focus', 'value': function mpu3() {} }, { 'key': 'clientWidth', 'get': function or60qz() {
        var p8jum = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](p8jum) ? 0x0 : p8jum;
      } }, { 'key': 'clientHeight', 'get': function n0r61z() {
        var kcxt5 = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](kcxt5) ? 0x0 : kcxt5;
      } }]), c5_4xk;
  }(tcxs5_['default']);exports['default'] = h17$;
}, function (module, exports, __webpack_require__) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });var _Node2 = __webpack_require__(0x6),
      _Node3 = j8mp(_Node2);function j8mp(hs9wt) {
    return hs9wt && hs9wt['__esModule'] ? hs9wt : { 'default': hs9wt };
  }function w7h1($w1h7, r76n1) {
    if (!($w1h7 instanceof r76n1)) throw new TypeError('Cannot call a class as a function');
  }function $n7r(_4kxc, paemu) {
    if (!_4kxc) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return paemu && (typeof paemu === 'object' || typeof paemu === 'function') ? paemu : _4kxc;
  }function vlba2(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);subClass['prototype'] = Object['create'](superClass && superClass['prototype'], { 'constructor': { 'value': subClass, 'enumerable': ![], 'writable': !![], 'configurable': !![] } });if (superClass) Object['setPrototypeOf'] ? Object['setPrototypeOf'](subClass, superClass) : subClass['__proto__'] = superClass;
  }var ema3pu = function (_Node) {
    vlba2(ct_s5x, _Node);function ct_s5x() {
      w7h1(this, ct_s5x);var xj8k = $n7r(this, (ct_s5x['__proto__'] || Object['getPrototypeOf'](ct_s5x))['call'](this));return xj8k['className'] = '', xj8k['children'] = [], xj8k;
    }return ct_s5x;
  }(_Node3['default']);exports['default'] = ema3pu;
}, function (module, exports, __webpack_require__) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });var _createClass = function () {
    function hw97i(w7$ih1, k_cx) {
      for (var kx4cj8 = 0x0; kx4cj8 < k_cx['length']; kx4cj8++) {
        var t_scx = k_cx[kx4cj8];t_scx['enumerable'] = t_scx['enumerable'] || ![], t_scx['configurable'] = !![];if ('value' in t_scx) t_scx['writable'] = !![];Object['defineProperty'](w7$ih1, t_scx['key'], t_scx);
      }
    }return function (cx4k_5, vla2bg, u8kx4j) {
      if (vla2bg) hw97i(cx4k_5['prototype'], vla2bg);if (u8kx4j) hw97i(cx4k_5, u8kx4j);return cx4k_5;
    };
  }(),
      nrz$ = __webpack_require__(0x7),
      _5k4cx = _kx54(nrz$);function _kx54(p2eba) {
    return p2eba && p2eba['__esModule'] ? p2eba : { 'default': p2eba };
  }function kxjc4(q0r6, l2aeb) {
    if (!(q0r6 instanceof l2aeb)) throw new TypeError('Cannot call a class as a function');
  }function oqzdy($1r67, ma2bpe) {
    if (!$1r67) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return ma2bpe && (typeof ma2bpe === 'object' || typeof ma2bpe === 'function') ? ma2bpe : $1r67;
  }function znqr(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);subClass['prototype'] = Object['create'](superClass && superClass['prototype'], { 'constructor': { 'value': subClass, 'enumerable': ![], 'writable': !![], 'configurable': !![] } });if (superClass) Object['setPrototypeOf'] ? Object['setPrototypeOf'](subClass, superClass) : subClass['__proto__'] = superClass;
  }var Node = function (h59tws) {
    znqr(Node, h59tws);function Node() {
      kxjc4(this, Node);var tc_s = oqzdy(this, (Node['__proto__'] || Object['getPrototypeOf'](Node))['call'](this));return tc_s['childNodes'] = [], tc_s;
    }return _createClass(Node, [{ 'key': 'appendChild', 'value': function $hw7i1(lbeav2) {
        if (lbeav2 instanceof Node) this['childNodes']['push'](lbeav2);else throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');
      } }, { 'key': 'cloneNode', 'value': function cloneNode() {
        var copyNode = Object['create'](this);return Object['assign'](copyNode, this), copyNode;
      } }, { 'key': 'removeChild', 'value': function p4ju3($hiw97) {
        var x_4k5c = this['childNodes']['findIndex'](function (x5c_k4) {
          return x5c_k4 === $hiw97;
        });if (x_4k5c > -0x1) return this['childNodes']['splice'](x_4k5c, 0x1);return null;
      } }]), Node;
  }(_5k4cx['default']);exports['default'] = Node;
}, function (module, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });var _createClass = function () {
    function n60z(r671n, c5xk4) {
      for (var r$6n17 = 0x0; r$6n17 < c5xk4['length']; r$6n17++) {
        var dy0zq = c5xk4[r$6n17];dy0zq['enumerable'] = dy0zq['enumerable'] || ![], dy0zq['configurable'] = !![];if ('value' in dy0zq) dy0zq['writable'] = !![];Object['defineProperty'](r671n, dy0zq['key'], dy0zq);
      }
    }return function (_xsct5, h$, ep2a) {
      if (h$) n60z(_xsct5['prototype'], h$);if (ep2a) n60z(_xsct5, ep2a);return _xsct5;
    };
  }();function epm3u8(sct95_, _x5c) {
    if (!(sct95_ instanceof _x5c)) throw new TypeError('Cannot call a class as a function');
  }var _kj4c = new WeakMap(),
      uj3k4 = function () {
    function ua3() {
      epm3u8(this, ua3), _kj4c['set'](this, {});
    }return _createClass(ua3, [{ 'key': 'addEventListener', 'value': function inw1$(w71ih, wi$) {
        var b3pme = arguments['length'] > 0x2 && arguments[0x2] !== undefined ? arguments[0x2] : {},
            bv2gla = _kj4c['get'](this);!bv2gla && (bv2gla = {}, _kj4c['set'](this, bv2gla)), !bv2gla[w71ih] && (bv2gla[w71ih] = []), bv2gla[w71ih]['push'](wi$), b3pme['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), b3pme['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), b3pme['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
      } }, { 'key': 'removeEventListener', 'value': function $76r(t_ck5x, _cxj4k) {
        var _5tx = _kj4c['get'](this)[t_ck5x];if (_5tx && _5tx['length'] > 0x0) for (var lb2ea = _5tx['length']; lb2ea--; lb2ea > 0x0) {
          if (_5tx[lb2ea] === _cxj4k) {
            _5tx['splice'](lb2ea, 0x1);break;
          }
        }
      } }, { 'key': 'dispatchEvent', 'value': function n7w$1() {
        var qrzo6 = arguments['length'] > 0x0 && arguments[0x0] !== undefined ? arguments[0x0] : {},
            zn60rq = _kj4c['get'](this)[qrzo6['type']];if (zn60rq) for (var iw$n17 = 0x0; iw$n17 < zn60rq['length']; iw$n17++) {
          zn60rq[iw$n17](qrzo6);
        }
      } }]), ua3;
  }();exports['default'] = uj3k4;
}, function (module, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] }), exports['noop'] = p3ambe, exports['isSubContext'] = $7w1h;function p3ambe() {}function $7w1h() {
    return typeof GameGlobal !== 'undefined' && GameGlobal['__isSubContext'] === !![];
  }
}, function (module, exports, __webpack_require__) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] }), exports['default'] = xku4j8;var _x4kcj = __webpack_require__(0x3),
      u84xk = __webpack_require__(0x4),
      g2bvla = r6n1(u84xk),
      _document = __webpack_require__(0xa),
      _document2 = r6n1(_document);function r6n1(dozqr) {
    return dozqr && dozqr['__esModule'] ? dozqr : { 'default': dozqr };
  }var el2mba = ![],
      el2ab = ![],
      ydqz0o = ![];function xku4j8() {
    var bma2pe = wx['createCanvas']();bma2pe['type'] = 'canvas', bma2pe['__proto__']['__proto__'] = new g2bvla['default']('canvas');var tc95s = bma2pe['getContext'];return bma2pe['getBoundingClientRect'] = function () {
      var hw9tsi = { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };return hw9tsi;
    }, bma2pe;
  }
}, function (module, exports, __webpack_require__) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });var _window = __webpack_require__(0x1),
      window = dr0zo(_window),
      j4u8 = __webpack_require__(0x4),
      epu38 = ea2bv(j4u8),
      ihw$1 = __webpack_require__(0xb),
      xj4c_ = ea2bv(ihw$1),
      siwt = __webpack_require__(0xc),
      peba2 = ea2bv(siwt),
      h$9i7w = __webpack_require__(0x9),
      xk54c = ea2bv(h$9i7w);__webpack_require__(0xf);function ea2bv(rqo6z) {
    return rqo6z && rqo6z['__esModule'] ? rqo6z : { 'default': rqo6z };
  }function dr0zo(i$97h) {
    if (i$97h && i$97h['__esModule']) return i$97h;else {
      var ame2 = {};if (i$97h != null) for (var rn61z in i$97h) {
        if (Object['prototype']['hasOwnProperty']['call'](i$97h, rn61z)) ame2[rn61z] = i$97h[rn61z];
      }return ame2['default'] = i$97h, ame2;
    }
  }var em83up = {},
      document = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': window, 'hidden': ![], 'style': {}, 'location': window['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new epu38['default']('head'), 'body': new epu38['default']('body'), 'createElement': function n016z(_ht5s) {
      if (_ht5s === 'canvas') return new xk54c['default']();else {
        if (_ht5s === 'audio') return new peba2['default']();else {
          if (_ht5s === 'img') return new xj4c_['default']();
        }
      }return new epu38['default'](_ht5s);
    }, 'getElementById': function mpju(jk4u) {
      if (jk4u === window['canvas']['id']) return window['canvas'];return null;
    }, 'getElementsByTagName': function n1z$6(twh5s) {
      if (twh5s === 'head') return [document['head']];else {
        if (twh5s === 'body') return [document['body']];else {
          if (twh5s === 'canvas') return [window['canvas']];
        }
      }return [];
    }, 'querySelector': function jp4u38(t_c5sx) {
      if (t_c5sx === 'head') return document['head'];else {
        if (t_c5sx === 'body') return document['body'];else {
          if (t_c5sx === 'canvas') return window['canvas'];else {
            if (t_c5sx === '#' + window['canvas']['id']) return window['canvas'];
          }
        }
      }return null;
    }, 'querySelectorAll': function wh7s(pmu3ea) {
      if (pmu3ea === 'head') return [document['head']];else {
        if (pmu3ea === 'body') return [document['body']];else {
          if (pmu3ea === 'canvas') return [window['canvas']];
        }
      }return [];
    }, 'addEventListener': function $61n(zr60n, nr6$z) {
      !em83up[zr60n] && (em83up[zr60n] = []), em83up[zr60n]['push'](nr6$z);
    }, 'removeEventListener': function h9w$7(o6q0r, ju483) {
      var $n71r6 = em83up[o6q0r];if ($n71r6 && $n71r6['length'] > 0x0) for (var ep3m8u = $n71r6['length']; ep3m8u--; ep3m8u > 0x0) {
        if ($n71r6[ep3m8u] === ju483) {
          $n71r6['splice'](ep3m8u, 0x1);break;
        }
      }
    }, 'dispatchEvent': function _cjx4(c5s9_t) {
      var c5t9s_ = em83up[c5s9_t['type']];if (c5t9s_) for (var swi7h9 = 0x0; swi7h9 < c5t9s_['length']; swi7h9++) {
        c5t9s_[swi7h9](c5s9_t);
      }
    } };exports['default'] = document;
}, function (module, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] }), exports['default'] = j8u4kx;function j8u4kx() {
    var dyz0o = wx['createImage']();return dyz0o;
  }
}, function (module, exports, __webpack_require__) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });var _createClass = function () {
    function ve2ab(e3mupa, c5_4x) {
      for (var $w1in7 = 0x0; $w1in7 < c5_4x['length']; $w1in7++) {
        var _95tsc = c5_4x[$w1in7];_95tsc['enumerable'] = _95tsc['enumerable'] || ![], _95tsc['configurable'] = !![];if ('value' in _95tsc) _95tsc['writable'] = !![];Object['defineProperty'](e3mupa, _95tsc['key'], _95tsc);
      }
    }return function (p48ju, hstwi9, ck_54) {
      if (hstwi9) ve2ab(p48ju['prototype'], hstwi9);if (ck_54) ve2ab(p48ju, ck_54);return p48ju;
    };
  }(),
      jk_x = __webpack_require__(0xd),
      u8m3pe = t_c59(jk_x),
      $h97iw = __webpack_require__(0x8);function t_c59(_t9h) {
    return _t9h && _t9h['__esModule'] ? _t9h : { 'default': _t9h };
  }function embl2(sw79hi, ael2mb) {
    if (!(sw79hi instanceof ael2mb)) throw new TypeError('Cannot call a class as a function');
  }function uepm(xk_jc, w$7hi1) {
    if (!xk_jc) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return w$7hi1 && (typeof w$7hi1 === 'object' || typeof w$7hi1 === 'function') ? w$7hi1 : xk_jc;
  }function _5s9tc(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);subClass['prototype'] = Object['create'](superClass && superClass['prototype'], { 'constructor': { 'value': subClass, 'enumerable': ![], 'writable': !![], 'configurable': !![] } });if (superClass) Object['setPrototypeOf'] ? Object['setPrototypeOf'](subClass, superClass) : subClass['__proto__'] = superClass;
  }var tw95hs = 0x0,
      rn10 = 0x1,
      $7w9ih = 0x2,
      rn$7 = 0x3,
      l2b = 0x4,
      hwst5 = new WeakMap(),
      tx5_sc = new WeakMap(),
      l2bagv = new WeakMap(),
      albv2 = new WeakMap(),
      rn1$6z = function (ckx5_4) {
    _5s9tc(ku48j, ckx5_4);function ku48j(a3eupm) {
      embl2(this, ku48j);var ck5x_ = uepm(this, (ku48j['__proto__'] || Object['getPrototypeOf'](ku48j))['call'](this));ck5x_['HAVE_NOTHING'] = tw95hs, ck5x_['HAVE_METADATA'] = rn10, ck5x_['HAVE_CURRENT_DATA'] = $7w9ih, ck5x_['HAVE_FUTURE_DATA'] = rn$7, ck5x_['HAVE_ENOUGH_DATA'] = l2b, ck5x_['readyState'] = tw95hs;if ((0x0, $h97iw['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), uepm(ck5x_);tx5_sc['set'](ck5x_, '');var mp3u8e = wx['createInnerAudioContext']();return hwst5['set'](ck5x_, mp3u8e), mp3u8e['onCanplay'](function () {
        ck5x_['dispatchEvent']({ 'type': 'load' }), ck5x_['dispatchEvent']({ 'type': 'loadend' }), ck5x_['dispatchEvent']({ 'type': 'canplay' }), ck5x_['dispatchEvent']({ 'type': 'canplaythrough' }), ck5x_['dispatchEvent']({ 'type': 'loadedmetadata' }), ck5x_['readyState'] = $7w9ih;
      }), mp3u8e['onPlay'](function () {
        ck5x_['dispatchEvent']({ 'type': 'play' });
      }), mp3u8e['onPause'](function () {
        ck5x_['dispatchEvent']({ 'type': 'pause' });
      }), mp3u8e['onEnded'](function () {
        ck5x_['dispatchEvent']({ 'type': 'ended' }), ck5x_['readyState'] = l2b;
      }), mp3u8e['onError'](function () {
        ck5x_['dispatchEvent']({ 'type': 'error' });
      }), a3eupm && (hwst5['get'](ck5x_)['src'] = a3eupm), ck5x_;
    }return _createClass(ku48j, [{ 'key': 'load', 'value': function x_k4jc() {
        console['warn']('HTMLAudioElement.load() is not implemented.');
      } }, { 'key': 'play', 'value': function t95swh() {
        !(0x0, $h97iw['isSubContext'])() && hwst5['get'](this)['play']();
      } }, { 'key': 'pause', 'value': function cx_4jk() {
        !(0x0, $h97iw['isSubContext'])() && hwst5['get'](this)['pause']();
      } }, { 'key': 'canPlayType', 'value': function bmlea() {
        var c_txk = arguments['length'] > 0x0 && arguments[0x0] !== undefined ? arguments[0x0] : '';if (typeof c_txk !== 'string') return '';if (c_txk['indexOf']('audio/mpeg') > -0x1 || c_txk['indexOf']('audio/mp4')) return 'probably';return '';
      } }, { 'key': 'cloneNode', 'value': function cloneNode() {
        var be3apm = new ku48j();return !(0x0, $h97iw['isSubContext'])() && (be3apm['loop'] = hwst5['get'](this)['loop'], be3apm['autoplay'] = hwst5['get'](this)['loop'], be3apm['src'] = this['src']), be3apm;
      } }, { 'key': 'currentTime', 'get': function r6zqn() {
        if (!(0x0, $h97iw['isSubContext'])()) return hwst5['get'](this)['currentTime'];return 0x0;
      }, 'set': function dzq0yo(s5t9c) {
        !(0x0, $h97iw['isSubContext'])() && hwst5['get'](this)['seek'](s5t9c);
      } }, { 'key': 'src', 'get': function m3ju8() {
        return tx5_sc['get'](this);
      }, 'set': function p83jum(n6$z1) {
        tx5_sc['set'](this, n6$z1), !(0x0, $h97iw['isSubContext'])() && (hwst5['get'](this)['src'] = n6$z1);
      } }, { 'key': 'loop', 'get': function evabl() {
        if (!(0x0, $h97iw['isSubContext'])()) return hwst5['get'](this)['loop'];return ![];
      }, 'set': function _ctk5(c4kj8x) {
        !(0x0, $h97iw['isSubContext'])() && (hwst5['get'](this)['loop'] = c4kj8x);
      } }, { 'key': 'autoplay', 'get': function u3k48j() {
        if (!(0x0, $h97iw['isSubContext'])()) return hwst5['get'](this)['autoplay'];return ![];
      }, 'set': function emapb3($61nz) {
        !(0x0, $h97iw['isSubContext'])() && (hwst5['get'](this)['autoplay'] = $61nz);
      } }, { 'key': 'paused', 'get': function apu3e() {
        if (!(0x0, $h97iw['isSubContext'])()) return hwst5['get'](this)['paused'];return ![];
      } }]), ku48j;
  }(u8m3pe['default']);exports['default'] = rn1$6z;
}, function (module, exports, __webpack_require__) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });var i9 = __webpack_require__(0xe),
      apm3eb = x4j(i9);function x4j(n6$i1) {
    return n6$i1 && n6$i1['__esModule'] ? n6$i1 : { 'default': n6$i1 };
  }function uepm3(rz610n, r0zdoq) {
    if (!(rz610n instanceof r0zdoq)) throw new TypeError('Cannot call a class as a function');
  }function ae2m(u4j8xk, u8mp) {
    if (!u4j8xk) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return u8mp && (typeof u8mp === 'object' || typeof u8mp === 'function') ? u8mp : u4j8xk;
  }function s9_th5(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);subClass['prototype'] = Object['create'](superClass && superClass['prototype'], { 'constructor': { 'value': subClass, 'enumerable': ![], 'writable': !![], 'configurable': !![] } });if (superClass) Object['setPrototypeOf'] ? Object['setPrototypeOf'](subClass, superClass) : subClass['__proto__'] = superClass;
  }var eambl2 = function (pu34j8) {
    s9_th5(kuj384, pu34j8);function kuj384() {
      return uepm3(this, kuj384), ae2m(this, (kuj384['__proto__'] || Object['getPrototypeOf'](kuj384))['call'](this, 'audio'));
    }return kuj384;
  }(apm3eb['default']);exports['default'] = eambl2;
}, function (module, exports, __webpack_require__) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });var _createClass = function () {
    function x_ck(n$i167, jcxk4) {
      for (var xc_t5k = 0x0; xc_t5k < jcxk4['length']; xc_t5k++) {
        var i$7w1n = jcxk4[xc_t5k];i$7w1n['enumerable'] = i$7w1n['enumerable'] || ![], i$7w1n['configurable'] = !![];if ('value' in i$7w1n) i$7w1n['writable'] = !![];Object['defineProperty'](n$i167, i$7w1n['key'], i$7w1n);
      }
    }return function (ni$71, $7w1hi, h5ts_) {
      if ($7w1hi) x_ck(ni$71['prototype'], $7w1hi);if (h5ts_) x_ck(ni$71, h5ts_);return ni$71;
    };
  }(),
      $16in = __webpack_require__(0x4),
      th95_s = p83m($16in);function p83m(elmb2a) {
    return elmb2a && elmb2a['__esModule'] ? elmb2a : { 'default': elmb2a };
  }function mp2e(nq6r0, kxtc_) {
    if (!(nq6r0 instanceof kxtc_)) throw new TypeError('Cannot call a class as a function');
  }function hw9$i(eua3, xt5sc_) {
    if (!eua3) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return xt5sc_ && (typeof xt5sc_ === 'object' || typeof xt5sc_ === 'function') ? xt5sc_ : eua3;
  }function dz0oy(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);subClass['prototype'] = Object['create'](superClass && superClass['prototype'], { 'constructor': { 'value': subClass, 'enumerable': ![], 'writable': !![], 'configurable': !![] } });if (superClass) Object['setPrototypeOf'] ? Object['setPrototypeOf'](subClass, superClass) : subClass['__proto__'] = superClass;
  }var t95_s = function (k4ux) {
    dz0oy(r0doz, k4ux);function r0doz(_5xcst) {
      return mp2e(this, r0doz), hw9$i(this, (r0doz['__proto__'] || Object['getPrototypeOf'](r0doz))['call'](this, _5xcst));
    }return _createClass(r0doz, [{ 'key': 'addTextTrack', 'value': function zo0r() {} }, { 'key': 'captureStream', 'value': function um3pa() {} }, { 'key': 'fastSeek', 'value': function ameb2l() {} }, { 'key': 'load', 'value': function zo6rq0() {} }, { 'key': 'pause', 'value': function i79sh() {} }, { 'key': 'play', 'value': function whts9i() {} }]), r0doz;
  }(th95_s['default']);exports['default'] = t95_s;
}, function (module, exports, __webpack_require__) {
  'use strict';

  __webpack_require__(0x10);
}, function (module, exports, __webpack_require__) {
  'use strict';

  var _window = __webpack_require__(0x1),
      window = rzdoq0(_window),
      _document = __webpack_require__(0xa),
      _document2 = xts_c(_document),
      hs9w5t = __webpack_require__(0x8);function xts_c(xcj_k4) {
    return xcj_k4 && xcj_k4['__esModule'] ? xcj_k4 : { 'default': xcj_k4 };
  }function rzdoq0(hsi79w) {
    if (hsi79w && hsi79w['__esModule']) return hsi79w;else {
      var n0q6r = {};if (hsi79w != null) for (var kuj843 in hsi79w) {
        if (Object['prototype']['hasOwnProperty']['call'](hsi79w, kuj843)) n0q6r[kuj843] = hsi79w[kuj843];
      }return n0q6r['default'] = hsi79w, n0q6r;
    }
  }function blga(n7r$16, zr6o0) {
    if (!(n7r$16 instanceof zr6o0)) throw new TypeError('Cannot call a class as a function');
  }var $in716 = function ukx8(l2aveb) {
    blga(this, ukx8), this['target'] = window['canvas'], this['currentTarget'] = window['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = hs9w5t['noop'], this['stopPropagation'] = hs9w5t['noop'], this['type'] = l2aveb;
  };function ujp483(qn60z) {
    return function (a2epb) {
      var _xcj4k = new $in716(qn60z);_xcj4k['touches'] = a2epb['touches'], _xcj4k['targetTouches'] = Array['prototype']['slice']['call'](a2epb['touches']), _xcj4k['changedTouches'] = a2epb['changedTouches'], _xcj4k['timeStamp'] = a2epb['timeStamp'], _document2['default']['dispatchEvent'](_xcj4k);
    };
  }wx['onTouchStart'](ujp483('touchstart')), wx['onTouchMove'](ujp483('touchmove')), wx['onTouchEnd'](ujp483('touchend')), wx['onTouchCancel'](ujp483('touchcancel'));
}, function (module, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] }), exports['noop'] = elm, exports['isSubContext'] = ju3k;function elm() {}function ju3k() {
    return typeof GameGlobal !== 'undefined' && GameGlobal['__isSubContext'] === !![];
  }
}, function (module, exports, __webpack_require__) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });var em3pb = __webpack_require__(0x8),
      _wx$getSystemInfoSync = wx['getSystemInfoSync'](),
      ni$ = _wx$getSystemInfoSync['platform'],
      jx4c8 = { 'platform': ni$, 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !![], 'geolocation': { 'getCurrentPosition': em3pb['noop'], 'watchPosition': em3pb['noop'], 'clearWatch': em3pb['noop'] } };exports['default'] = jx4c8;
}, function (module, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });var _createClass = function () {
    function ea3pu(uj8x4, cx4j8k) {
      for (var n16r0z = 0x0; n16r0z < cx4j8k['length']; n16r0z++) {
        var $w1i7h = cx4j8k[n16r0z];$w1i7h['enumerable'] = $w1i7h['enumerable'] || ![], $w1i7h['configurable'] = !![];if ('value' in $w1i7h) $w1i7h['writable'] = !![];Object['defineProperty'](uj8x4, $w1i7h['key'], $w1i7h);
      }
    }return function (xkj84, u3e8m, x4_5c) {
      if (u3e8m) ea3pu(xkj84['prototype'], u3e8m);if (x4_5c) ea3pu(xkj84, x4_5c);return xkj84;
    };
  }();function k45_c(wi$9h, kt_x5) {
    if (!(wi$9h instanceof kt_x5)) throw new TypeError('Cannot call a class as a function');
  }var jku84 = new WeakMap(),
      rq0oz = new WeakMap(),
      jxc4k_ = new WeakMap(),
      d0zqor = new WeakMap(),
      q6rn = new WeakMap();function s95_c(ydz0) {
    if (typeof this['on' + ydz0] === 'function') {
      for (var nr16 = arguments['length'], n01zr6 = Array(nr16 > 0x1 ? nr16 - 0x1 : 0x0), z01n6r = 0x1; z01n6r < nr16; z01n6r++) {
        n01zr6[z01n6r - 0x1] = arguments[z01n6r];
      }this['on' + ydz0]['apply'](this, n01zr6);
    }
  }function w5st9h(pb2) {
    this['readyState'] = pb2, s95_c['call'](this, 'readystatechange');
  }var z6n0q = function () {
    function z6rqn0() {
      k45_c(this, z6rqn0), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = ![], jxc4k_['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), d0zqor['set'](this, {});
    }return _createClass(z6rqn0, [{ 'key': 'abort', 'value': function kx_54c() {
        var t9hws = q6rn['get'](this);t9hws && t9hws['abort']();
      } }, { 'key': 'getAllResponseHeaders', 'value': function h9s5t_() {
        var sw5ht = d0zqor['get'](this);return Object['keys'](sw5ht)['map'](function (xs_c) {
          return xs_c + ':\x20' + sw5ht[xs_c];
        })['join']('\x0a');
      } }, { 'key': 'getResponseHeader', 'value': function ctx_s5(kcx) {
        return d0zqor['get'](this)[kcx];
      } }, { 'key': 'open', 'value': function i79shw(hs97iw, o06zqr) {
        rq0oz['set'](this, hs97iw), jku84['set'](this, o06zqr), w5st9h['call'](this, z6rqn0['OPENED']);
      } }, { 'key': 'overrideMimeType', 'value': function t5wh9s() {} }, { 'key': 'send', 'value': function lvabe() {
        var c_5xkt = this,
            s5wht = arguments['length'] > 0x0 && arguments[0x0] !== undefined ? arguments[0x0] : '';if (this['readyState'] !== z6rqn0['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');else wx['request']({ 'data': s5wht, 'url': jku84['get'](this), 'method': rq0oz['get'](this), 'header': jxc4k_['get'](this), 'responseType': this['responseType'], 'success': function o0zdqy($n) {
            var z61 = $n['data'],
                balvg2 = $n['statusCode'],
                j8ux = $n['header'];if (typeof z61 !== 'string' && !(z61 instanceof ArrayBuffer)) try {
              z61 = JSON['stringify'](z61);
            } catch (o6zr) {
              z61 = z61;
            }c_5xkt['status'] = balvg2, d0zqor['set'](c_5xkt, j8ux), s95_c['call'](c_5xkt, 'loadstart'), w5st9h['call'](c_5xkt, z6rqn0['HEADERS_RECEIVED']), w5st9h['call'](c_5xkt, z6rqn0['LOADING']), c_5xkt['response'] = z61;if (z61 instanceof ArrayBuffer) {
              c_5xkt['responseText'] = '';var hswi = new Uint8Array(z61),
                  wi1 = hswi['byteLength'];for (var k_tc = 0x0; k_tc < wi1; k_tc++) {
                c_5xkt['responseText'] += String['fromCharCode'](hswi[k_tc]);
              }
            } else c_5xkt['responseText'] = z61;w5st9h['call'](c_5xkt, z6rqn0['DONE']), s95_c['call'](c_5xkt, 'load'), s95_c['call'](c_5xkt, 'loadend');
          }, 'fail': function hwtis9(m3upj8) {
            var tcs5_9 = m3upj8['errMsg'];tcs5_9['indexOf']('abort') !== -0x1 ? s95_c['call'](c_5xkt, 'abort') : s95_c['call'](c_5xkt, 'error', tcs5_9), s95_c['call'](c_5xkt, 'loadend');
          } });
      } }, { 'key': 'setRequestHeader', 'value': function z6rq(k8u4xj, b2avel) {
        var u8m3ep = jxc4k_['get'](this);u8m3ep[k8u4xj] = b2avel, jxc4k_['set'](this, u8m3ep);
      } }]), z6rqn0;
  }();z6n0q['UNSEND'] = 0x0, z6n0q['OPENED'] = 0x1, z6n0q['HEADERS_RECEIVED'] = 0x2, z6n0q['LOADING'] = 0x3, z6n0q['DONE'] = 0x4, exports['default'] = z6n0q;
}, function (module, exports, __webpack_require__) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });var _createClass = function () {
    function mlea(wsi9th, hsi9) {
      for (var hw9t = 0x0; hw9t < hsi9['length']; hw9t++) {
        var rn0q = hsi9[hw9t];rn0q['enumerable'] = rn0q['enumerable'] || ![], rn0q['configurable'] = !![];if ('value' in rn0q) rn0q['writable'] = !![];Object['defineProperty'](wsi9th, rn0q['key'], rn0q);
      }
    }return function (gvlba2, zd0qo, vla) {
      if (zd0qo) mlea(gvlba2['prototype'], zd0qo);if (vla) mlea(gvlba2, vla);return gvlba2;
    };
  }(),
      oz0q6r = __webpack_require__(0x8);function zr061(oq0rz, cj4xk8) {
    if (!(oq0rz instanceof cj4xk8)) throw new TypeError('Cannot call a class as a function');
  }var lba2em = new WeakMap(),
      muea = function () {
    function e2ablv(rnz60) {
      var uk38j4 = this,
          $n71w = arguments['length'] > 0x1 && arguments[0x1] !== undefined ? arguments[0x1] : [];zr061(this, e2ablv), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3;if ((0x0, oz0q6r['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if (typeof rnz60 !== 'string' || !/(^ws:\/\/)|(^wss:\/\/)/['test'](rnz60)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + rnz60 + '\' is invalid');this['url'] = rnz60, this['readyState'] = e2ablv['CONNECTING'];var xt_5c = wx['connectSocket']({ 'url': rnz60, 'protocols': Array['isArray']($n71w) ? $n71w : [$n71w] });return lba2em['set'](this, xt_5c), xt_5c['onClose'](function (rq0nz) {
        uk38j4['readyState'] = e2ablv['CLOSED'], typeof uk38j4['onclose'] === 'function' && uk38j4['onclose'](rq0nz);
      }), xt_5c['onMessage'](function (shi7w) {
        typeof uk38j4['onmessage'] === 'function' && uk38j4['onmessage'](shi7w);
      }), xt_5c['onOpen'](function () {
        uk38j4['readyState'] = e2ablv['OPEN'], typeof uk38j4['onopen'] === 'function' && uk38j4['onopen']();
      }), xt_5c['onError'](function (emal2) {
        typeof uk38j4['onerror'] === 'function' && uk38j4['onerror'](new Error(emal2['errMsg']));
      }), this;
    }return _createClass(e2ablv, [{ 'key': 'close', 'value': function bp2e(iw71h, tiw9sh) {
        this['readyState'] = e2ablv['CLOSING'];var w1i = lba2em['get'](this);w1i['close']({ 'code': iw71h, 'reason': tiw9sh });
      } }, { 'key': 'send', 'value': function c95t_(do0zrq) {
        if (typeof do0zrq !== 'string' && !(do0zrq instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + do0zrq + ' is invalid');var wh9s7 = lba2em['get'](this);wh9s7['send']({ 'data': do0zrq });
      } }]), e2ablv;
  }();muea['CONNECTING'] = 0x0, muea['OPEN'] = 0x1, muea['CLOSING'] = 0x2, muea['CLOSED'] = 0x3, exports['default'] = muea;
}, function (module, exports, __webpack_require__) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });var _createClass = function () {
    function kj8xc(zqn0r, vbgla2) {
      for (var eabm2l = 0x0; eabm2l < vbgla2['length']; eabm2l++) {
        var xct5 = vbgla2[eabm2l];xct5['enumerable'] = xct5['enumerable'] || ![], xct5['configurable'] = !![];if ('value' in xct5) xct5['writable'] = !![];Object['defineProperty'](zqn0r, xct5['key'], xct5);
      }
    }return function (vb2la, n1r6z$, z0rn6q) {
      if (n1r6z$) kj8xc(vb2la['prototype'], n1r6z$);if (z0rn6q) kj8xc(vb2la, z0rn6q);return vb2la;
    };
  }(),
      $7h9wi = __webpack_require__(0x8);function mepb(v2bl, hi7w1$) {
    if (!(v2bl instanceof hi7w1$)) throw new TypeError('Cannot call a class as a function');
  }var wth5s = function () {
    function $16zn() {
      mepb(this, $16zn);
    }return _createClass($16zn, [{ 'key': 'construct', 'value': function yoq0dz() {
        if ((0x0, $7h9wi['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
      } }]), $16zn;
  }();exports['default'] = wth5s;
}, function (module, exports, __webpack_require__) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });var jcx8k4 = __webpack_require__(0x8),
      mj3u8p = { get 'length'() {
      var _wx$getStorageInfoSyn = wx['getStorageInfoSync'](),
          h_t59 = _wx$getStorageInfoSyn['keys'];return h_t59['length'];
    }, 'key': function e2pbma(rqn0z) {
      var _wx$getStorageInfoSyn2 = wx['getStorageInfoSync'](),
          g2vbl = _wx$getStorageInfoSyn2['keys'];return g2vbl[rqn0z];
    }, 'getItem': function x4jk(_jkc4x) {
      return wx['getStorageSync'](_jkc4x);
    }, 'setItem': function p3u48j(scx5t_, n167r) {
      return wx['setStorageSync'](scx5t_, n167r);
    }, 'removeItem': function wh7i1(xjc4k_) {
      wx['removeStorageSync'](xjc4k_);
    }, 'clear': function j48up3() {
      wx['clearStorageSync']();
    } },
      yz0oq = {},
      vblea = { get 'length'() {
      var aglbv2 = Object['keys'](yz0oq);return aglbv2['length'];
    }, 'key': function b2map(agvl2) {
      var bpma3e = Object['keys'](yz0oq);return bpma3e[agvl2];
    }, 'getItem': function qz6n0r(n$z6r) {
      return yz0oq[n$z6r];
    }, 'setItem': function l2bem(x_tk, hw$97) {
      yz0oq[x_tk] = hw$97;
    }, 'removeItem': function n60rz(nr6z$) {
      delete yz0oq[nr6z$];
    }, 'clear': function xc54() {
      yz0oq = {};
    } },
      x45kc = (0x0, jcx8k4['isSubContext'])() ? vblea : mj3u8p;exports['default'] = x45kc;
}, function (module, exports) {
  'use strict';

  Object['defineProperty'](exports, '__esModule', { 'value': !![] });var abvel = { 'href': 'game.js', 'reload': function elv2ab() {} };exports['default'] = abvel;
}]);