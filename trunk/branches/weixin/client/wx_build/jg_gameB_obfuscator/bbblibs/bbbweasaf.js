var _ = wx.y$;
!function (ywtvu) {
  var rqnmo = {};function __webpack_require__(oqnr) {
    if (rqnmo[oqnr]) return rqnmo[oqnr]['exports'];var tvurs = rqnmo[oqnr] = { 'exports': {}, 'id': oqnr, 'loaded': !0x1 };return ywtvu[oqnr]['call'](tvurs['exports'], tvurs, tvurs['exports'], __webpack_require__), tvurs['loaded'] = !0x0, tvurs['exports'];
  }__webpack_require__['m'] = ywtvu, __webpack_require__['c'] = rqnmo, __webpack_require__['p'] = '', __webpack_require__(0x0);
}([function (hiefg, hgk, pnrs) {
  'use strict';

  var wuxvyz = function (txyuw) {
    {
      if (txyuw && txyuw['__esModule']) return txyuw;var oprnm = {};if (null != txyuw) {
        for (var rspot in txyuw) Object['prototype']['hasOwnProperty']['call'](txyuw, rspot) && (oprnm[rspot] = txyuw[rspot]);
      }return oprnm['default'] = txyuw, oprnm;
    }
  }(pnrs(0x1)),
      wy_$x = pnrs(0x4),
      $xzv = (mlknj = wy_$x) && mlknj['__esModule'] ? mlknj : { 'default': mlknj },
      mlknj,
      nqmr = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
    wuxvyz['addEventListener'] = function (zxw$, wvxuy) {
      wuxvyz['document']['addEventListener'](zxw$, wvxuy);
    }, wuxvyz['removeEventListener'] = function (xtwu, svwutx) {
      wuxvyz['document']['removeEventListener'](xtwu, svwutx);
    }, wuxvyz['canvas'] && (wuxvyz['canvas']['addEventListener'] = wuxvyz['addEventListener'], wuxvyz['canvas']['removeEventListener'] = wuxvyz['removeEventListener']), nqmr['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new $xzv['default']('canvas'), sharedCanvas['addEventListener'] = wuxvyz['addEventListener'], sharedCanvas['removeEventListener'] = wuxvyz['removeEventListener']);var ghfei = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === ghfei) {
      for (var zx_$y in wuxvyz) {
        var cbfae = Object['getOwnPropertyDescriptor'](nqmr, zx_$y);cbfae && !0x0 !== cbfae['configurable'] || Object['defineProperty'](window, zx_$y, { 'value': wuxvyz[zx_$y] });
      }for (var gebdf in wuxvyz['document']) {
        var yz$_0x = Object['getOwnPropertyDescriptor'](nqmr['document'], gebdf);yz$_0x && !0x0 !== yz$_0x['configurable'] || Object['defineProperty'](nqmr['document'], gebdf, { 'value': wuxvyz['document'][gebdf] });
      }window['parent'] = window;
    } else {
      for (var mlpqo in wuxvyz) nqmr[mlpqo] = wuxvyz[mlpqo];nqmr['window'] = wuxvyz, window = nqmr, window['top'] = window['parent'] = window;
    }
  }());
}, function (fgdh, _1$2z0, z0_21) {
  'use strict';

  Object['defineProperty'](_1$2z0, '__esModule', { 'value': !0x0 }), _1$2z0['cancelAnimationFrame'] = _1$2z0['requestAnimationFrame'] = _1$2z0['clearInterval'] = _1$2z0['clearTimeout'] = _1$2z0['setInterval'] = _1$2z0['setTimeout'] = _1$2z0['canvas'] = _1$2z0['location'] = _1$2z0['localStorage'] = _1$2z0['HTMLElement'] = _1$2z0['FileReader'] = _1$2z0['Audio'] = _1$2z0['Image'] = _1$2z0['WebSocket'] = _1$2z0['XMLHttpRequest'] = _1$2z0['navigator'] = _1$2z0['document'] = void 0x0;var debfcg = z0_21(0x2);Object['keys'](debfcg)['forEach'](function (sxwtv) {
    'default' !== sxwtv && '__esModule' !== sxwtv && Object['defineProperty'](_1$2z0, sxwtv, { 'enumerable': !0x0, 'get': function () {
        return debfcg[sxwtv];
      } });
  });var vrsqu = z0_21(0x3);Object['keys'](vrsqu)['forEach'](function (klnijm) {
    'default' !== klnijm && '__esModule' !== klnijm && Object['defineProperty'](_1$2z0, klnijm, { 'enumerable': !0x0, 'get': function () {
        return vrsqu[klnijm];
      } });
  });var vuqsr = mnjkil(z0_21(0x9)),
      wz_y = z0_21(0x11),
      jifkgh = mnjkil(z0_21(0xa)),
      imk = mnjkil(z0_21(0x12)),
      fkjhgi = mnjkil(z0_21(0x13)),
      nlpqmo = mnjkil(z0_21(0x14)),
      edab = mnjkil(z0_21(0xb)),
      npqmro = mnjkil(z0_21(0xc)),
      $zvyx = mnjkil(z0_21(0x15)),
      qopnl = mnjkil(z0_21(0x4)),
      srvqut = mnjkil(z0_21(0x16));z0_21 = mnjkil(z0_21(0x17));function mnjkil(z$yxwv) {
    return z$yxwv && z$yxwv['__esModule'] ? z$yxwv : { 'default': z$yxwv };
  }_1$2z0['document'] = jifkgh['default'], _1$2z0['navigator'] = imk['default'], _1$2z0['XMLHttpRequest'] = fkjhgi['default'], _1$2z0['WebSocket'] = nlpqmo['default'], _1$2z0['Image'] = edab['default'], _1$2z0['Audio'] = npqmro['default'], _1$2z0['FileReader'] = $zvyx['default'], _1$2z0['HTMLElement'] = qopnl['default'], _1$2z0['localStorage'] = srvqut['default'], _1$2z0['location'] = z0_21['default'], vuqsr = (0x0, wz_y['isSubContext'])() ? void 0x0 : new vuqsr['default'](), (_1$2z0['canvas'] = vuqsr, _1$2z0['setTimeout'] = setTimeout, _1$2z0['setInterval'] = setInterval, _1$2z0['clearTimeout'] = clearTimeout, _1$2z0['clearInterval'] = clearInterval, _1$2z0['requestAnimationFrame'] = requestAnimationFrame, _1$2z0['cancelAnimationFrame'] = cancelAnimationFrame);
}, function (ljkgih, kmoljn) {
  'use strict';

  Object['defineProperty'](kmoljn, '__esModule', { 'value': !0x0 });var $_z120 = wx['getSystemInfoSync'](),
      gdhefc = $_z120['screenWidth'],
      wzuxy = $_z120['screenHeight'],
      $_z120 = $_z120['devicePixelRatio'];gdhefc = kmoljn['innerWidth'] = gdhefc, wzuxy = kmoljn['innerHeight'] = wzuxy, kmoljn['devicePixelRatio'] = $_z120, kmoljn['screen'] = { 'availWidth': gdhefc, 'availHeight': wzuxy }, kmoljn['performance'] = { 'now': function () {
      return Date['now']() / 0x3e8;
    } }, kmoljn['ontouchstart'] = null, kmoljn['ontouchmove'] = null, kmoljn['ontouchend'] = null;
}, function (nlop, khfg, chdfge) {
  'use strict';

  Object['defineProperty'](khfg, '__esModule', { 'value': !0x0 }), khfg['HTMLCanvasElement'] = khfg['HTMLImageElement'] = void 0x0;var v$xzy = chdfge(0x4);chdfge = (zuxy = v$xzy) && zuxy['__esModule'] ? zuxy : { 'default': zuxy };var zuxy;function spto(nmplok, kijhf) {
    if (!(nmplok instanceof kijhf)) throw new TypeError('Cannot call a class as a function');
  }function onmlpq(nrpqso, zxywv) {
    if (!nrpqso) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !zxywv || 'object' != typeof zxywv && 'function' != typeof zxywv ? nrpqso : zxywv;
  }function rtospq(fgecdh, uytxw) {
    if ('function' != typeof uytxw && null !== uytxw) throw new TypeError('Super expression must either be null or a function, not ' + typeof uytxw);fgecdh['prototype'] = Object['create'](uytxw && uytxw['prototype'], { 'constructor': { 'value': fgecdh, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), uytxw && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](fgecdh, uytxw) : fgecdh['__proto__'] = uytxw);
  }khfg['HTMLImageElement'] = (rtospq(hlimjk, chdfge['default']), hlimjk);function hlimjk() {
    return spto(this, hlimjk), onmlpq(this, (hlimjk['__proto__'] || Object['getPrototypeOf'](hlimjk))['call'](this, 'img'));
  }khfg['HTMLCanvasElement'] = (rtospq(ilkjnm, chdfge['default']), ilkjnm);function ilkjnm() {
    return spto(this, ilkjnm), onmlpq(this, (ilkjnm['__proto__'] || Object['getPrototypeOf'](ilkjnm))['call'](this, 'canvas'));
  }
}, function (xstvw, qpnors, stxwu) {
  'use strict';

  Object['defineProperty'](qpnors, '__esModule', { 'value': !0x0 });var svtux = function (xwtv, rsqv, _$10y) {
    return rsqv && dfghie(xwtv['prototype'], rsqv), _$10y && dfghie(xwtv, _$10y), xwtv;
  };function dfghie(_zyx0$, cfae) {
    for (var plknmo = 0x0; plknmo < cfae['length']; plknmo++) {
      var svtqr = cfae[plknmo];svtqr['enumerable'] = svtqr['enumerable'] || !0x1, svtqr['configurable'] = !0x0, 'value' in svtqr && (svtqr['writable'] = !0x0), Object['defineProperty'](_zyx0$, svtqr['key'], svtqr);
    }
  }var oqnrps = stxwu(0x5),
      y_xz0 = (lknm = oqnrps) && lknm['__esModule'] ? lknm : { 'default': lknm },
      lknm,
      rtsvwu = stxwu(0x8),
      turqvs = stxwu(0x2);(function ($xwzy_, qurspt) {
    if ('function' != typeof qurspt && null !== qurspt) throw new TypeError('Super expression must either be null or a function, not ' + typeof qurspt);$xwzy_['prototype'] = Object['create'](qurspt && qurspt['prototype'], { 'constructor': { 'value': $xwzy_, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), qurspt && (Object['setPrototypeOf'] ? Object['setPrototypeOf']($xwzy_, qurspt) : $xwzy_['__proto__'] = qurspt);
  })(kinjml, y_xz0['default']), svtux(kinjml, [{ 'key': 'setAttribute', 'value': function (fhegdi, olkmp) {
      this[fhegdi] = olkmp;
    } }, { 'key': 'getAttribute', 'value': function (lijmk) {
      return this[lijmk];
    } }, { 'key': 'getBoundingClientRect', 'value': function () {
      return { 'top': 0x0, 'left': 0x0, 'width': turqvs['innerWidth'], 'height': turqvs['innerHeight'] };
    } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
      var poqns = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](poqns) ? 0x0 : poqns;
    } }, { 'key': 'clientHeight', 'get': function () {
      var efigjh = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](efigjh) ? 0x0 : efigjh;
    } }]), svtux = kinjml;function kinjml() {
    var y0x_ = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';!function (abcfd, zx$0) {
      if (!(abcfd instanceof zx$0)) throw new TypeError('Cannot call a class as a function');
    }(this, kinjml);var jhligk = function (nkjmo, feijgh) {
      if (!nkjmo) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !feijgh || 'object' != typeof feijgh && 'function' != typeof feijgh ? nkjmo : feijgh;
    }(this, (kinjml['__proto__'] || Object['getPrototypeOf'](kinjml))['call'](this));return jhligk['className'] = '', jhligk['childern'] = [], jhligk['style'] = { 'width': turqvs['innerWidth'] + 'px', 'height': turqvs['innerHeight'] + 'px' }, jhligk['insertBefore'] = rtsvwu['noop'], jhligk['innerHTML'] = '', jhligk['tagName'] = y0x_['toUpperCase'](), jhligk;
  }qpnors['default'] = svtux;
}, function (wuvy, uwtr, ilkhmj) {
  'use strict';

  Object['defineProperty'](uwtr, '__esModule', { 'value': !0x0 });var qutsrv = ilkhmj(0x6),
      lojnk;(function (fgc, egfhi) {
    if ('function' != typeof egfhi && null !== egfhi) throw new TypeError('Super expression must either be null or a function, not ' + typeof egfhi);fgc['prototype'] = Object['create'](egfhi && egfhi['prototype'], { 'constructor': { 'value': fgc, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), egfhi && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](fgc, egfhi) : fgc['__proto__'] = egfhi);
  })(yx$_, ((lojnk = qutsrv) && lojnk['__esModule'] ? lojnk : { 'default': lojnk })['default']), ilkhmj = yx$_;function yx$_() {
    !function (bdcfe, vqutr) {
      if (!(bdcfe instanceof vqutr)) throw new TypeError('Cannot call a class as a function');
    }(this, yx$_);var uwyzv = function (cfgdbe, nijkl) {
      if (!cfgdbe) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !nijkl || 'object' != typeof nijkl && 'function' != typeof nijkl ? cfgdbe : nijkl;
    }(this, (yx$_['__proto__'] || Object['getPrototypeOf'](yx$_))['call'](this));return uwyzv['className'] = '', uwyzv['children'] = [], uwyzv;
  }uwtr['default'] = ilkhmj;
}, function (gifedh, oprsn, klpmon) {
  'use strict';

  Object['defineProperty'](oprsn, '__esModule', { 'value': !0x0 });var pon = function (lkjgh, _12$0z, _$z201) {
    return _12$0z && hklmji(lkjgh['prototype'], _12$0z), _$z201 && hklmji(lkjgh, _$z201), lkjgh;
  };function hklmji(dgefi, z_$yw) {
    for (var bcade = 0x0; bcade < z_$yw['length']; bcade++) {
      var wsv = z_$yw[bcade];wsv['enumerable'] = wsv['enumerable'] || !0x1, wsv['configurable'] = !0x0, 'value' in wsv && (wsv['writable'] = !0x0), Object['defineProperty'](dgefi, wsv['key'], wsv);
    }
  }var tuwyxv = klpmon(0x7),
      wzyvux;(function (knpmol, efdig) {
    if ('function' != typeof efdig && null !== efdig) throw new TypeError('Super expression must either be null or a function, not ' + typeof efdig);knpmol['prototype'] = Object['create'](efdig && efdig['prototype'], { 'constructor': { 'value': knpmol, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), efdig && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](knpmol, efdig) : knpmol['__proto__'] = efdig);
  })(kjihlg, ((wzyvux = tuwyxv) && wzyvux['__esModule'] ? wzyvux : { 'default': wzyvux })['default']), pon(kjihlg, [{ 'key': 'appendChild', 'value': function (cefghd) {
      if (!(cefghd instanceof kjihlg)) throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');this['childNodes']['push'](cefghd);
    } }, { 'key': 'cloneNode', 'value': function () {
      var y$z10_ = Object['create'](this);return Object['assign'](y$z10_, this), y$z10_;
    } }, { 'key': 'removeChild', 'value': function (_2z10) {
      var tuwv = this['childNodes']['findIndex'](function (qmolnp) {
        return qmolnp === _2z10;
      });return -0x1 < tuwv ? this['childNodes']['splice'](tuwv, 0x1) : null;
    } }]), pon = kjihlg;function kjihlg() {
    !function ($yvwz, imlhk) {
      if (!($yvwz instanceof imlhk)) throw new TypeError('Cannot call a class as a function');
    }(this, kjihlg);var hjf = function (stoqp, jklih) {
      if (!stoqp) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !jklih || 'object' != typeof jklih && 'function' != typeof jklih ? stoqp : jklih;
    }(this, (kjihlg['__proto__'] || Object['getPrototypeOf'](kjihlg))['call'](this));return hjf['childNodes'] = [], hjf;
  }oprsn['default'] = pon;
}, function (ijmk, nqopml) {
  'use strict';

  Object['defineProperty'](nqopml, '__esModule', { 'value': !0x0 });var qupstr = function (jkin, kfjg, dcabfe) {
    return kfjg && z_$y0x(jkin['prototype'], kfjg), dcabfe && z_$y0x(jkin, dcabfe), jkin;
  };function z_$y0x(qports, rnmpqo) {
    for (var utvxw = 0x0; utvxw < rnmpqo['length']; utvxw++) {
      var wuzy = rnmpqo[utvxw];wuzy['enumerable'] = wuzy['enumerable'] || !0x1, wuzy['configurable'] = !0x0, 'value' in wuzy && (wuzy['writable'] = !0x0), Object['defineProperty'](qports, wuzy['key'], wuzy);
    }
  }var knlpmo = new WeakMap();qupstr(opqnml, [{ 'key': 'addEventListener', 'value': function (xwyvzu, wsuvtr) {
      var cdg = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {},
          vwzxyu = knlpmo['get'](this);vwzxyu || knlpmo['set'](this, vwzxyu = {}), vwzxyu[xwyvzu] || (vwzxyu[xwyvzu] = []), vwzxyu[xwyvzu]['push'](wsuvtr), cdg['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), cdg['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), cdg['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
    } }, { 'key': 'removeEventListener', 'value': function (_$wzyx, fecgh) {
      var $0xz = knlpmo['get'](this)[_$wzyx];if ($0xz && 0x0 < $0xz['length']) {
        for (var qromnp = $0xz['length']; qromnp--;) if ($0xz[qromnp] === fecgh) {
          $0xz['splice'](qromnp, 0x1);break;
        }
      }
    } }, { 'key': 'dispatchEvent', 'value': function () {
      var yx$0_z = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {},
          nmloq = knlpmo['get'](this)[yx$0_z['type']];if (nmloq) {
        for (var ihlkjg = 0x0; ihlkjg < nmloq['length']; ihlkjg++) nmloq[ihlkjg](yx$0_z);
      }
    } }]), qupstr = opqnml;function opqnml() {
    !function (rmqp, _zwy) {
      if (!(rmqp instanceof _zwy)) throw new TypeError('Cannot call a class as a function');
    }(this, opqnml), knlpmo['set'](this, {});
  }nqopml['default'] = qupstr;
}, function (rwus, kmjon) {
  'use strict';

  Object['defineProperty'](kmjon, '__esModule', { 'value': !0x0 }), kmjon['noop'] = function () {}, kmjon['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (ilkgj, $0132, zxvyuw) {
  'use strict';

  Object['defineProperty']($0132, '__esModule', { 'value': !0x0 }), $0132['default'] = function () {
    var knlj = wx['createCanvas']();return knlj['type'] = 'canvas', knlj['__proto__']['__proto__'] = new $wz_xy['default']('canvas'), knlj['getContext'], (knlj['getBoundingClientRect'] = function () {
      return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
    }, knlj);
  }, zxvyuw(0x3);var $wz_xy = nmoqr(zxvyuw(0x4));nmoqr(zxvyuw(0xa));function nmoqr(_2310) {
    return _2310 && _2310['__esModule'] ? _2310 : { 'default': _2310 };
  }
}, function (yz0$_, qpsrt, uzxywv) {
  'use strict';

  Object['defineProperty'](qpsrt, '__esModule', { 'value': !0x0 });var plomnq = function (utvwr) {
    {
      if (utvwr && utvwr['__esModule']) return utvwr;var trpqu = {};if (null != utvwr) {
        for (var y_z0$x in utvwr) Object['prototype']['hasOwnProperty']['call'](utvwr, y_z0$x) && (trpqu[y_z0$x] = utvwr[y_z0$x]);
      }return trpqu['default'] = utvwr, trpqu;
    }
  }(uzxywv(0x1)),
      rsqop = x0(uzxywv(0x4)),
      yuvx = x0(uzxywv(0xb)),
      zx_$wy = x0(uzxywv(0xc)),
      oknj = x0(uzxywv(0x9));function x0(efdac) {
    return efdac && efdac['__esModule'] ? efdac : { 'default': efdac };
  }uzxywv(0xf);var hefcdg = {},
      ijlh = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': plomnq, 'hidden': !0x1, 'style': {}, 'location': plomnq['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new rsqop['default']('head'), 'body': new rsqop['default']('body'), 'createElement': function (tursqp) {
      return 'canvas' === tursqp ? new oknj['default']() : 'audio' === tursqp ? new zx_$wy['default']() : 'img' === tursqp ? new yuvx['default']() : new rsqop['default'](tursqp);
    }, 'getElementById': function (tqrosp) {
      return tqrosp === plomnq['canvas']['id'] ? plomnq['canvas'] : null;
    }, 'getElementsByTagName': function (tyxvuw) {
      return 'head' === tyxvuw ? [ijlh['head']] : 'body' === tyxvuw ? [ijlh['body']] : 'canvas' === tyxvuw ? [plomnq['canvas']] : [];
    }, 'querySelector': function (ehgfid) {
      return 'head' === ehgfid ? ijlh['head'] : 'body' === ehgfid ? ijlh['body'] : 'canvas' === ehgfid || ehgfid === '#' + plomnq['canvas']['id'] ? plomnq['canvas'] : null;
    }, 'querySelectorAll': function (vywtux) {
      return 'head' === vywtux ? [ijlh['head']] : 'body' === vywtux ? [ijlh['body']] : 'canvas' === vywtux ? [plomnq['canvas']] : [];
    }, 'addEventListener': function (uvwt, wy$xzv) {
      hefcdg[uvwt] || (hefcdg[uvwt] = []), hefcdg[uvwt]['push'](wy$xzv);
    }, 'removeEventListener': function (qrupt, xswvu) {
      var sprtuq = hefcdg[qrupt];if (sprtuq && 0x0 < sprtuq['length']) {
        for (var tpqo = sprtuq['length']; tpqo--;) if (sprtuq[tpqo] === xswvu) {
          sprtuq['splice'](tpqo, 0x1);break;
        }
      }
    }, 'dispatchEvent': function (lgkijh) {
      var oqnplm = hefcdg[lgkijh['type']];if (oqnplm) {
        for (var rsn = 0x0; rsn < oqnplm['length']; rsn++) oqnplm[rsn](lgkijh);
      }
    } };qpsrt['default'] = ijlh;
}, function (wrvstu, cgbef) {
  'use strict';

  Object['defineProperty'](cgbef, '__esModule', { 'value': !0x0 }), cgbef['default'] = function () {
    return wx['createImage']();
  };
}, function (txuwy, $yzxv, wvxus) {
  'use strict';

  Object['defineProperty']($yzxv, '__esModule', { 'value': !0x0 });var dhfige = function (xz$wy_, gjhkl, z_$02) {
    return gjhkl && ihkg(xz$wy_['prototype'], gjhkl), z_$02 && ihkg(xz$wy_, z_$02), xz$wy_;
  };function ihkg(xvstu, oqptrs) {
    for (var spqo = 0x0; spqo < oqptrs['length']; spqo++) {
      var liknmj = oqptrs[spqo];liknmj['enumerable'] = liknmj['enumerable'] || !0x1, liknmj['configurable'] = !0x0, 'value' in liknmj && (liknmj['writable'] = !0x0), Object['defineProperty'](xvstu, liknmj['key'], liknmj);
    }
  }var jkhig = wvxus(0xd),
      zx_ = (nlkpom = jkhig) && nlkpom['__esModule'] ? nlkpom : { 'default': nlkpom },
      nlkpom,
      jlnomk = wvxus(0x8);function hegidf(xwstvu, $wzy_) {
    if (!xwstvu) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !$wzy_ || 'object' != typeof $wzy_ && 'function' != typeof $wzy_ ? xwstvu : $wzy_;
  }var rsv = 0x0,
      bgfe = 0x1,
      edghfi = 0x2,
      sqoprt = 0x3,
      xytuv = 0x4,
      inlmk = new WeakMap(),
      eghfcd = new WeakMap();new WeakMap(), new WeakMap(), (function (egdhc, wstxuv) {
    if ('function' != typeof wstxuv && null !== wstxuv) throw new TypeError('Super expression must either be null or a function, not ' + typeof wstxuv);egdhc['prototype'] = Object['create'](wstxuv && wstxuv['prototype'], { 'constructor': { 'value': egdhc, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), wstxuv && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](egdhc, wstxuv) : egdhc['__proto__'] = wstxuv);
  }(vxw$zy, zx_['default']), dhfige(vxw$zy, [{ 'key': 'load', 'value': function () {
      console['warn']('HTMLAudioElement.load() is not implemented.');
    } }, { 'key': 'play', 'value': function () {
      (0x0, jlnomk['isSubContext'])() || inlmk['get'](this)['play']();
    } }, { 'key': 'pause', 'value': function () {
      (0x0, jlnomk['isSubContext'])() || inlmk['get'](this)['pause']();
    } }, { 'key': 'canPlayType', 'value': function () {
      var zy$0_x = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return 'string' == typeof zy$0_x && (-0x1 < zy$0_x['indexOf']('audio/mpeg') || zy$0_x['indexOf']('audio/mp4')) ? 'probably' : '';
    } }, { 'key': 'cloneNode', 'value': function () {
      var jkimln = new vxw$zy();return (0x0, jlnomk['isSubContext'])() || (jkimln['loop'] = inlmk['get'](this)['loop'], jkimln['autoplay'] = inlmk['get'](this)['loop'], jkimln['src'] = this['src']), jkimln;
    } }, { 'key': 'currentTime', 'get': function () {
      return (0x0, jlnomk['isSubContext'])() ? 0x0 : inlmk['get'](this)['currentTime'];
    }, 'set': function (otrqs) {
      (0x0, jlnomk['isSubContext'])() || inlmk['get'](this)['seek'](otrqs);
    } }, { 'key': 'src', 'get': function () {
      return eghfcd['get'](this);
    }, 'set': function (xy0_) {
      eghfcd['set'](this, xy0_), (0x0, jlnomk['isSubContext'])() || (inlmk['get'](this)['src'] = xy0_);
    } }, { 'key': 'loop', 'get': function () {
      return !(0x0, jlnomk['isSubContext'])() && inlmk['get'](this)['loop'];
    }, 'set': function (mknojl) {
      (0x0, jlnomk['isSubContext'])() || (inlmk['get'](this)['loop'] = mknojl);
    } }, { 'key': 'autoplay', 'get': function () {
      return !(0x0, jlnomk['isSubContext'])() && inlmk['get'](this)['autoplay'];
    }, 'set': function (w$_xy) {
      (0x0, jlnomk['isSubContext'])() || (inlmk['get'](this)['autoplay'] = w$_xy);
    } }, { 'key': 'paused', 'get': function () {
      return !(0x0, jlnomk['isSubContext'])() && inlmk['get'](this)['paused'];
    } }]), dhfige = vxw$zy);function vxw$zy(wvy$) {
    !function (uyxzv, twsruv) {
      if (!(uyxzv instanceof twsruv)) throw new TypeError('Cannot call a class as a function');
    }(this, vxw$zy);var gkjhf = hegidf(this, (vxw$zy['__proto__'] || Object['getPrototypeOf'](vxw$zy))['call'](this));if (gkjhf['HAVE_NOTHING'] = rsv, gkjhf['HAVE_METADATA'] = bgfe, gkjhf['HAVE_CURRENT_DATA'] = edghfi, gkjhf['HAVE_FUTURE_DATA'] = sqoprt, gkjhf['HAVE_ENOUGH_DATA'] = xytuv, gkjhf['readyState'] = rsv, (0x0, jlnomk['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), hegidf(gkjhf);eghfcd['set'](gkjhf, '');var _312 = wx['createInnerAudioContext']();return inlmk['set'](gkjhf, _312), _312['onCanplay'](function () {
      gkjhf['dispatchEvent']({ 'type': 'load' }), gkjhf['dispatchEvent']({ 'type': 'loadend' }), gkjhf['dispatchEvent']({ 'type': 'canplay' }), gkjhf['dispatchEvent']({ 'type': 'canplaythrough' }), gkjhf['dispatchEvent']({ 'type': 'loadedmetadata' }), gkjhf['readyState'] = edghfi;
    }), _312['onPlay'](function () {
      gkjhf['dispatchEvent']({ 'type': 'play' });
    }), _312['onPause'](function () {
      gkjhf['dispatchEvent']({ 'type': 'pause' });
    }), _312['onEnded'](function () {
      gkjhf['dispatchEvent']({ 'type': 'ended' }), gkjhf['readyState'] = xytuv;
    }), _312['onError'](function () {
      gkjhf['dispatchEvent']({ 'type': 'error' });
    }), wvy$ && (inlmk['get'](gkjhf)['src'] = wvy$), gkjhf;
  }$yzxv['default'] = dhfige;
}, function (qsoptr, x$z_w, fiejhg) {
  'use strict';

  Object['defineProperty'](x$z_w, '__esModule', { 'value': !0x0 });var mihjkl = fiejhg(0xe),
      kmjiln;(function (cdeaf, xz$y_0) {
    if ('function' != typeof xz$y_0 && null !== xz$y_0) throw new TypeError('Super expression must either be null or a function, not ' + typeof xz$y_0);cdeaf['prototype'] = Object['create'](xz$y_0 && xz$y_0['prototype'], { 'constructor': { 'value': cdeaf, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), xz$y_0 && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](cdeaf, xz$y_0) : cdeaf['__proto__'] = xz$y_0);
  })(wzyxuv, ((kmjiln = mihjkl) && kmjiln['__esModule'] ? kmjiln : { 'default': kmjiln })['default']), fiejhg = wzyxuv;function wzyxuv() {
    return function (mqlpon, mjlnko) {
      if (!(mqlpon instanceof mjlnko)) throw new TypeError('Cannot call a class as a function');
    }(this, wzyxuv), function (fcdeh, ywzxvu) {
      if (!fcdeh) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !ywzxvu || 'object' != typeof ywzxvu && 'function' != typeof ywzxvu ? fcdeh : ywzxvu;
    }(this, (wzyxuv['__proto__'] || Object['getPrototypeOf'](wzyxuv))['call'](this, 'audio'));
  }x$z_w['default'] = fiejhg;
}, function (uqp, klonm, x_$yz0) {
  'use strict';

  Object['defineProperty'](klonm, '__esModule', { 'value': !0x0 });var fhigje = function (igfhde, sprtqo, z$xvwy) {
    return sprtqo && tsuw(igfhde['prototype'], sprtqo), z$xvwy && tsuw(igfhde, z$xvwy), igfhde;
  };function tsuw(onpkl, egfh) {
    for (var jgehfi = 0x0; jgehfi < egfh['length']; jgehfi++) {
      var swvurt = egfh[jgehfi];swvurt['enumerable'] = swvurt['enumerable'] || !0x1, swvurt['configurable'] = !0x0, 'value' in swvurt && (swvurt['writable'] = !0x0), Object['defineProperty'](onpkl, swvurt['key'], swvurt);
    }
  }var rupsqt = x_$yz0(0x4),
      opqsrn;(function (_xyw$z, gifk) {
    if ('function' != typeof gifk && null !== gifk) throw new TypeError('Super expression must either be null or a function, not ' + typeof gifk);_xyw$z['prototype'] = Object['create'](gifk && gifk['prototype'], { 'constructor': { 'value': _xyw$z, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), gifk && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](_xyw$z, gifk) : _xyw$z['__proto__'] = gifk);
  })(bdeacf, ((opqsrn = rupsqt) && opqsrn['__esModule'] ? opqsrn : { 'default': opqsrn })['default']), fhigje(bdeacf, [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]), fhigje = bdeacf;function bdeacf(spotqr) {
    return function (oqtps, sqruv) {
      if (!(oqtps instanceof sqruv)) throw new TypeError('Cannot call a class as a function');
    }(this, bdeacf), function (klji, prnosq) {
      if (!klji) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !prnosq || 'object' != typeof prnosq && 'function' != typeof prnosq ? klji : prnosq;
    }(this, (bdeacf['__proto__'] || Object['getPrototypeOf'](bdeacf))['call'](this, spotqr));
  }klonm['default'] = fhigje;
}, function (qpnoml, y10$, wtsux) {
  'use strict';

  wtsux(0x10);
}, function (klhmi, wuyzvx, vsrutw) {
  'use strict';

  var srptqo = function (kgijlh) {
    {
      if (kgijlh && kgijlh['__esModule']) return kgijlh;var gfji = {};if (null != kgijlh) {
        for (var uxtsw in kgijlh) Object['prototype']['hasOwnProperty']['call'](kgijlh, uxtsw) && (gfji[uxtsw] = kgijlh[uxtsw]);
      }return gfji['default'] = kgijlh, gfji;
    }
  }(vsrutw(0x1)),
      knlomj = vsrutw(0xa),
      hfgde = (torqs = knlomj) && torqs['__esModule'] ? torqs : { 'default': torqs },
      torqs,
      vuxwts = vsrutw(0x8);function uxswv(ijlmh) {
    !function (hkml, jkmin) {
      if (!(hkml instanceof jkmin)) throw new TypeError('Cannot call a class as a function');
    }(this, uxswv), this['target'] = srptqo['canvas'], this['currentTarget'] = srptqo['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = vuxwts['noop'], this['stopPropagation'] = vuxwts['noop'], this['type'] = ijlmh;
  }function kjgih(y$_10) {
    return function (oprmn) {
      var nrsoqp = new uxswv(y$_10);nrsoqp['touches'] = oprmn['touches'], nrsoqp['targetTouches'] = Array['prototype']['slice']['call'](oprmn['touches']), nrsoqp['changedTouches'] = oprmn['changedTouches'], nrsoqp['timeStamp'] = oprmn['timeStamp'], hfgde['default']['dispatchEvent'](nrsoqp);
    };
  }wx['onTouchStart'](kjgih('touchstart')), wx['onTouchMove'](kjgih('touchmove')), wx['onTouchEnd'](kjgih('touchend')), wx['onTouchCancel'](kjgih('touchcancel'));
}, function (nlqmpo, fbged) {
  'use strict';

  Object['defineProperty'](fbged, '__esModule', { 'value': !0x0 }), fbged['noop'] = function () {}, fbged['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (xswtu, ifhgde, gfdcbe) {
  'use strict';

  Object['defineProperty'](ifhgde, '__esModule', { 'value': !0x0 }), gfdcbe = gfdcbe(0x8), gfdcbe = { 'platform': wx['getSystemInfoSync']()['platform'], 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': gfdcbe['noop'], 'watchPosition': gfdcbe['noop'], 'clearWatch': gfdcbe['noop'] } }, ifhgde['default'] = gfdcbe;
}, function (wrtvu, w$zyx_) {
  'use strict';

  Object['defineProperty'](w$zyx_, '__esModule', { 'value': !0x0 });var cfegdb = function (lkhjm, nplmk, orqn) {
    return nplmk && suwvxt(lkhjm['prototype'], nplmk), orqn && suwvxt(lkhjm, orqn), lkhjm;
  };function suwvxt(khjlig, z12_) {
    for (var swvtur = 0x0; swvtur < z12_['length']; swvtur++) {
      var jkfgih = z12_[swvtur];jkfgih['enumerable'] = jkfgih['enumerable'] || !0x1, jkfgih['configurable'] = !0x0, 'value' in jkfgih && (jkfgih['writable'] = !0x0), Object['defineProperty'](khjlig, jkfgih['key'], jkfgih);
    }
  }var likj = new WeakMap(),
      fjigk = new WeakMap(),
      mjlin = new WeakMap(),
      dabfec = new WeakMap(),
      npoqrs = new WeakMap();function pnsqro(bfdc) {
    if ('function' == typeof this['on' + bfdc]) {
      for (var _z1$02 = arguments['length'], jlmkh = Array(0x1 < _z1$02 ? _z1$02 - 0x1 : 0x0), xy$0z = 0x1; xy$0z < _z1$02; xy$0z++) jlmkh[xy$0z - 0x1] = arguments[xy$0z];this['on' + bfdc]['apply'](this, jlmkh);
    }
  }function $20_31(qnrmop) {
    this['readyState'] = qnrmop, pnsqro['call'](this, 'readystatechange');
  }cfegdb(suwrv, [{ 'key': 'abort', 'value': function () {
      var rusvtw = npoqrs['get'](this);rusvtw && rusvtw['abort']();
    } }, { 'key': 'getAllResponseHeaders', 'value': function () {
      var ornpqm = dabfec['get'](this);return Object['keys'](ornpqm)['map'](function (opstrq) {
        return opstrq + ':\x20' + ornpqm[opstrq];
      })['join']('\x0a');
    } }, { 'key': 'getResponseHeader', 'value': function (posqn) {
      return dabfec['get'](this)[posqn];
    } }, { 'key': 'open', 'value': function (dhef, pnsqo) {
      fjigk['set'](this, dhef), likj['set'](this, pnsqo), $20_31['call'](this, suwrv['OPENED']);
    } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function () {
      var fbed = this,
          cgbdf = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';if (this['readyState'] !== suwrv['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');wx['request']({ 'data': cgbdf, 'url': likj['get'](this), 'method': fjigk['get'](this), 'header': mjlin['get'](this), 'responseType': this['responseType'], 'success': function (wvyux) {
          var svx = wvyux['data'],
              gecfbd = wvyux['statusCode'],
              wvyux = wvyux['header'];if ('string' != typeof svx && !(svx instanceof ArrayBuffer)) try {
            svx = JSON['stringify'](svx);
          } catch (_$xyw) {}if (fbed['status'] = gecfbd, dabfec['set'](fbed, wvyux), pnsqro['call'](fbed, 'loadstart'), $20_31['call'](fbed, suwrv['HEADERS_RECEIVED']), $20_31['call'](fbed, suwrv['LOADING']), (fbed['response'] = svx) instanceof ArrayBuffer) {
            fbed['responseText'] = '';var bdegcf = new Uint8Array(svx),
                utspqr = bdegcf['byteLength'];for (var $2_031 = 0x0; $2_031 < utspqr; $2_031++) fbed['responseText'] += String['fromCharCode'](bdegcf[$2_031]);
          } else fbed['responseText'] = svx;$20_31['call'](fbed, suwrv['DONE']), pnsqro['call'](fbed, 'load'), pnsqro['call'](fbed, 'loadend');
        }, 'fail': function (z$_y10) {
          z$_y10 = z$_y10['errMsg'], (-0x1 !== z$_y10['indexOf']('abort') ? pnsqro['call'](fbed, 'abort') : pnsqro['call'](fbed, 'error', z$_y10), pnsqro['call'](fbed, 'loadend'));
        } });
    } }, { 'key': 'setRequestHeader', 'value': function (rqm, $230_) {
      var xuvytw = mjlin['get'](this);xuvytw[rqm] = $230_, mjlin['set'](this, xuvytw);
    } }]), cfegdb = suwrv;function suwrv() {
    !function ($02z1, $xwv) {
      if (!($02z1 instanceof $xwv)) throw new TypeError('Cannot call a class as a function');
    }(this, suwrv), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = !0x1, mjlin['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), dabfec['set'](this, {});
  }cfegdb['UNSEND'] = 0x0, cfegdb['OPENED'] = 0x1, cfegdb['HEADERS_RECEIVED'] = 0x2, cfegdb['LOADING'] = 0x3, cfegdb['DONE'] = 0x4, w$zyx_['default'] = cfegdb;
}, function (olnqm, hiejg, lmnop) {
  'use strict';

  Object['defineProperty'](hiejg, '__esModule', { 'value': !0x0 });var yuwt = function (dabfe, afecdb, npqsor) {
    return afecdb && egfch(dabfe['prototype'], afecdb), npqsor && egfch(dabfe, npqsor), dabfe;
  };function egfch(ghkl, norsqp) {
    for (var vuwr = 0x0; vuwr < norsqp['length']; vuwr++) {
      var qsorp = norsqp[vuwr];qsorp['enumerable'] = qsorp['enumerable'] || !0x1, qsorp['configurable'] = !0x0, 'value' in qsorp && (qsorp['writable'] = !0x0), Object['defineProperty'](ghkl, qsorp['key'], qsorp);
    }
  }var mljikn = lmnop(0x8),
      bfeacd = new WeakMap();yuwt(srqon, [{ 'key': 'close', 'value': function (rnmqpo, pmrnoq) {
      this['readyState'] = srqon['CLOSING'], bfeacd['get'](this)['close']({ 'code': rnmqpo, 'reason': pmrnoq });
    } }, { 'key': 'send', 'value': function (_3102) {
      if ('string' != typeof _3102 && !(_3102 instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + _3102 + ' is invalid');bfeacd['get'](this)['send']({ 'data': _3102 });
    } }]), yuwt = srqon;function srqon(onklj) {
    var khlgj = this,
        nk = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function (ornsqp, lgihj) {
      if (!(ornsqp instanceof lgihj)) throw new TypeError('Cannot call a class as a function');
    }(this, srqon), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, (0x0, mljikn['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if ('string' != typeof onklj || !/(^ws:\/\/)|(^wss:\/\/)/['test'](onklj)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + onklj + '\' is invalid');return this['url'] = onklj, this['readyState'] = srqon['CONNECTING'], nk = wx['connectSocket']({ 'url': onklj, 'protocols': Array['isArray'](nk) ? nk : [nk] }), (bfeacd['set'](this, nk), nk['onClose'](function (yz_w$x) {
      khlgj['readyState'] = srqon['CLOSED'], 'function' == typeof khlgj['onclose'] && khlgj['onclose'](yz_w$x);
    }), nk['onMessage'](function (w$xzy_) {
      'function' == typeof khlgj['onmessage'] && khlgj['onmessage'](w$xzy_);
    }), nk['onOpen'](function () {
      khlgj['readyState'] = srqon['OPEN'], 'function' == typeof khlgj['onopen'] && khlgj['onopen']();
    }), nk['onError'](function (cbdf) {
      'function' == typeof khlgj['onerror'] && khlgj['onerror'](new Error(cbdf['errMsg']));
    }), this);
  }yuwt['CONNECTING'] = 0x0, yuwt['OPEN'] = 0x1, yuwt['CLOSING'] = 0x2, yuwt['CLOSED'] = 0x3, hiejg['default'] = yuwt;
}, function (gijlkh, hdgc, $w_zxy) {
  'use strict';

  Object['defineProperty'](hdgc, '__esModule', { 'value': !0x0 });var rnosqp = function (lomkn, jlmo, wuxzy) {
    return jlmo && tusvrw(lomkn['prototype'], jlmo), wuxzy && tusvrw(lomkn, wuxzy), lomkn;
  };function tusvrw(ifgj, jlnkm) {
    for (var sqp = 0x0; sqp < jlnkm['length']; sqp++) {
      var mkhlj = jlnkm[sqp];mkhlj['enumerable'] = mkhlj['enumerable'] || !0x1, mkhlj['configurable'] = !0x0, 'value' in mkhlj && (mkhlj['writable'] = !0x0), Object['defineProperty'](ifgj, mkhlj['key'], mkhlj);
    }
  }var mijklh = $w_zxy(0x8);rnosqp($1z0y_, [{ 'key': 'construct', 'value': function () {
      if ((0x0, mijklh['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
    } }]), rnosqp = $1z0y_;function $1z0y_() {
    !function (dghi, xwtyvu) {
      if (!(dghi instanceof xwtyvu)) throw new TypeError('Cannot call a class as a function');
    }(this, $1z0y_);
  }hdgc['default'] = rnosqp;
}, function (fdeih, pokn, vtrwu) {
  'use strict';

  Object['defineProperty'](pokn, '__esModule', { 'value': !0x0 });var tqosp = vtrwu(0x8),
      omljn = { get 'length'() {
      return wx['getStorageInfoSync']()['keys']['length'];
    }, 'key': function (ifjh) {
      return wx['getStorageInfoSync']()['keys'][ifjh];
    }, 'getItem': function (klnp) {
      return wx['getStorageSync'](klnp);
    }, 'setItem': function (dhfg, jiegh) {
      return wx['setStorageSync'](dhfg, jiegh);
    }, 'removeItem': function (ihkjgl) {
      wx['removeStorageSync'](ihkjgl);
    }, 'clear': function () {
      wx['clearStorageSync']();
    } },
      yxwz$v = {};vtrwu = { get 'length'() {
      return Object['keys'](yxwz$v)['length'];
    }, 'key': function (okmlnj) {
      return Object['keys'](yxwz$v)[okmlnj];
    }, 'getItem': function (chfegd) {
      return yxwz$v[chfegd];
    }, 'setItem': function (svruw, monklp) {
      yxwz$v[svruw] = monklp;
    }, 'removeItem': function (xswut) {
      delete yxwz$v[xswut];
    }, 'clear': function () {
      yxwz$v = {};
    } }, omljn = (0x0, tqosp['isSubContext'])() ? vtrwu : omljn, pokn['default'] = omljn;
}, function (klghij, xzy_$) {
  'use strict';

  Object['defineProperty'](xzy_$, '__esModule', { 'value': !0x0 }), xzy_$['default'] = { 'href': 'bbbgame.js', 'reload': function () {} };
}]);