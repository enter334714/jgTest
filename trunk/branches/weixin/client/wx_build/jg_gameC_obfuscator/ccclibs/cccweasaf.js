var p = wx.$h;
!function (ecgdfh) {
  var $_0z12 = {};function __webpack_require__($wv) {
    if ($_0z12[$wv]) return $_0z12[$wv]['exports'];var gefd = $_0z12[$wv] = { 'exports': {}, 'id': $wv, 'loaded': !0x1 };return ecgdfh[$wv]['call'](gefd['exports'], gefd, gefd['exports'], __webpack_require__), gefd['loaded'] = !0x0, gefd['exports'];
  }__webpack_require__['m'] = ecgdfh, __webpack_require__['c'] = $_0z12, __webpack_require__['p'] = '', __webpack_require__(0x0);
}([function (qlnpmo, wyv$zx, _3412) {
  'use strict';
  var vwtqs = function (diegfh) {
    {
      if (diegfh && diegfh['__esModule']) return diegfh;var lmkpn = {};if (null != diegfh) {
        for (var mkhlij in diegfh) Object['prototype']['hasOwnProperty']['call'](diegfh, mkhlij) && (lmkpn[mkhlij] = diegfh[mkhlij]);
      }return lmkpn['default'] = diegfh, lmkpn;
    }
  }(_3412(0x1)),
      xytwz = _3412(0x4),
      mhklij = (x_$wz = xytwz) && x_$wz['__esModule'] ? x_$wz : { 'default': x_$wz },
      x_$wz,
      oqtrp = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
    vwtqs['addEventListener'] = function (kjlon, _z$2) {
      vwtqs['document']['addEventListener'](kjlon, _z$2);
    }, vwtqs['removeEventListener'] = function ($zyvw, lomjn) {
      vwtqs['document']['removeEventListener']($zyvw, lomjn);
    }, vwtqs['canvas'] && (vwtqs['canvas']['addEventListener'] = vwtqs['addEventListener'], vwtqs['canvas']['removeEventListener'] = vwtqs['removeEventListener']), oqtrp['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new mhklij['default']('canvas'), sharedCanvas['addEventListener'] = vwtqs['addEventListener'], sharedCanvas['removeEventListener'] = vwtqs['removeEventListener']);var hgjikf = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === hgjikf) {
      for (var fjkigh in vwtqs) {
        var vqtw = Object['getOwnPropertyDescriptor'](oqtrp, fjkigh);vqtw && !0x0 !== vqtw['configurable'] || Object['defineProperty'](window, fjkigh, { 'value': vwtqs[fjkigh] });
      }for (var glhkj in vwtqs['document']) {
        var knmloj = Object['getOwnPropertyDescriptor'](oqtrp['document'], glhkj);knmloj && !0x0 !== knmloj['configurable'] || Object['defineProperty'](oqtrp['document'], glhkj, { 'value': vwtqs['document'][glhkj] });
      }window['parent'] = window;
    } else {
      for (var jkol in vwtqs) oqtrp[jkol] = vwtqs[jkol];oqtrp['window'] = vwtqs, window = oqtrp, window['top'] = window['parent'] = window;
    }
  }());
}, function (pnql, zyx$, rqwt) {
  'use strict';
  Object['defineProperty'](zyx$, '__esModule', { 'value': !0x0 }), zyx$['cancelAnimationFrame'] = zyx$['requestAnimationFrame'] = zyx$['clearInterval'] = zyx$['clearTimeout'] = zyx$['setInterval'] = zyx$['setTimeout'] = zyx$['canvas'] = zyx$['location'] = zyx$['localStorage'] = zyx$['HTMLElement'] = zyx$['FileReader'] = zyx$['Audio'] = zyx$['Image'] = zyx$['WebSocket'] = zyx$['XMLHttpRequest'] = zyx$['navigator'] = zyx$['document'] = void 0x0;var _3402 = rqwt(0x2);Object['keys'](_3402)['forEach'](function (fbdea) {
    'default' !== fbdea && '__esModule' !== fbdea && Object['defineProperty'](zyx$, fbdea, { 'enumerable': !0x0, 'get': function () {
        return _3402[fbdea];
      } });
  });var lpomn = rqwt(0x3);Object['keys'](lpomn)['forEach'](function (syxvw) {
    'default' !== syxvw && '__esModule' !== syxvw && Object['defineProperty'](zyx$, syxvw, { 'enumerable': !0x0, 'get': function () {
        return lpomn[syxvw];
      } });
  });var $ywzx_ = gfeih(rqwt(0x9)),
      kmlop = rqwt(0x11),
      cfgdhe = gfeih(rqwt(0xa)),
      _20$z1 = gfeih(rqwt(0x12)),
      dehgi = gfeih(rqwt(0x13)),
      vwts = gfeih(rqwt(0x14)),
      hkfg = gfeih(rqwt(0xb)),
      z$_xy = gfeih(rqwt(0xc)),
      $_1y0 = gfeih(rqwt(0x15)),
      ikglj = gfeih(rqwt(0x4)),
      kighf = gfeih(rqwt(0x16));rqwt = gfeih(rqwt(0x17));function gfeih(xrvtw) {
    return xrvtw && xrvtw['__esModule'] ? xrvtw : { 'default': xrvtw };
  }zyx$['document'] = cfgdhe['default'], zyx$['navigator'] = _20$z1['default'], zyx$['XMLHttpRequest'] = dehgi['default'], zyx$['WebSocket'] = vwts['default'], zyx$['Image'] = hkfg['default'], zyx$['Audio'] = z$_xy['default'], zyx$['FileReader'] = $_1y0['default'], zyx$['HTMLElement'] = ikglj['default'], zyx$['localStorage'] = kighf['default'], zyx$['location'] = rqwt['default'], $ywzx_ = (0x0, kmlop['isSubContext'])() ? void 0x0 : new $ywzx_['default'](), (zyx$['canvas'] = $ywzx_, zyx$['setTimeout'] = setTimeout, zyx$['setInterval'] = setInterval, zyx$['clearTimeout'] = clearTimeout, zyx$['clearInterval'] = clearInterval, zyx$['requestAnimationFrame'] = requestAnimationFrame, zyx$['cancelAnimationFrame'] = cancelAnimationFrame);
}, function (igkhlj, twqrs) {
  'use strict';
  Object['defineProperty'](twqrs, '__esModule', { 'value': !0x0 });var nqspr = wx['getSystemInfoSync'](),
      qswtvr = nqspr['screenWidth'],
      soptr = nqspr['screenHeight'],
      nqspr = nqspr['devicePixelRatio'];qswtvr = twqrs['innerWidth'] = qswtvr, soptr = twqrs['innerHeight'] = soptr, twqrs['devicePixelRatio'] = nqspr, twqrs['screen'] = { 'availWidth': qswtvr, 'availHeight': soptr }, twqrs['performance'] = { 'now': function () {
      return Date['now']() / 0x3e8;
    } }, twqrs['ontouchstart'] = null, twqrs['ontouchmove'] = null, twqrs['ontouchend'] = null;
}, function (jklm, wtyxs, vtwsrq) {
  'use strict';
  Object['defineProperty'](wtyxs, '__esModule', { 'value': !0x0 }), wtyxs['HTMLCanvasElement'] = wtyxs['HTMLImageElement'] = void 0x0;var jkhgif = vtwsrq(0x4);vtwsrq = (jlnkm = jkhgif) && jlnkm['__esModule'] ? jlnkm : { 'default': jlnkm };var jlnkm;function badf(_$yzw, xyzv$) {
    if (!(_$yzw instanceof xyzv$)) throw new TypeError('Cannot call a class as a function');
  }function loqp(yw$x_z, vyxtzw) {
    if (!yw$x_z) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !vyxtzw || 'object' != typeof vyxtzw && 'function' != typeof vyxtzw ? yw$x_z : vyxtzw;
  }function pqnso($xvzyw, $02_1) {
    if ('function' != typeof $02_1 && null !== $02_1) throw new TypeError('Super expression must either be null or a function, not ' + typeof $02_1);$xvzyw['prototype'] = Object['create']($02_1 && $02_1['prototype'], { 'constructor': { 'value': $xvzyw, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), $02_1 && (Object['setPrototypeOf'] ? Object['setPrototypeOf']($xvzyw, $02_1) : $xvzyw['__proto__'] = $02_1);
  }wtyxs['HTMLImageElement'] = (pqnso(sqtop, vtwsrq['default']), sqtop);function sqtop() {
    return badf(this, sqtop), loqp(this, (sqtop['__proto__'] || Object['getPrototypeOf'](sqtop))['call'](this, 'img'));
  }wtyxs['HTMLCanvasElement'] = (pqnso(minkjl, vtwsrq['default']), minkjl);function minkjl() {
    return badf(this, minkjl), loqp(this, (minkjl['__proto__'] || Object['getPrototypeOf'](minkjl))['call'](this, 'canvas'));
  }
}, function (yxw$v, lkjmh, rtvqw) {
  'use strict';
  Object['defineProperty'](lkjmh, '__esModule', { 'value': !0x0 });var oqml = function (yw$vzx, gkhjf, rtvqp) {
    return gkhjf && mnqlp(yw$vzx['prototype'], gkhjf), rtvqp && mnqlp(yw$vzx, rtvqp), yw$vzx;
  };function mnqlp(_413, bcdfe) {
    for (var fhgced = 0x0; fhgced < bcdfe['length']; fhgced++) {
      var kom = bcdfe[fhgced];kom['enumerable'] = kom['enumerable'] || !0x1, kom['configurable'] = !0x0, 'value' in kom && (kom['writable'] = !0x0), Object['defineProperty'](_413, kom['key'], kom);
    }
  }var bdcgef = rtvqw(0x5),
      rpnmqo = (ef = bdcgef) && ef['__esModule'] ? ef : { 'default': ef },
      ef,
      ropnm = rtvqw(0x8),
      orpqns = rtvqw(0x2);(function (zwtvy, hfegid) {
    if ('function' != typeof hfegid && null !== hfegid) throw new TypeError('Super expression must either be null or a function, not ' + typeof hfegid);zwtvy['prototype'] = Object['create'](hfegid && hfegid['prototype'], { 'constructor': { 'value': zwtvy, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), hfegid && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](zwtvy, hfegid) : zwtvy['__proto__'] = hfegid);
  })(rtwsqv, rpnmqo['default']), oqml(rtwsqv, [{ 'key': 'setAttribute', 'value': function (vxzytw, fikg) {
      this[vxzytw] = fikg;
    } }, { 'key': 'getAttribute', 'value': function (otqsr) {
      return this[otqsr];
    } }, { 'key': 'getBoundingClientRect', 'value': function () {
      return { 'top': 0x0, 'left': 0x0, 'width': orpqns['innerWidth'], 'height': orpqns['innerHeight'] };
    } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
      var ghjf = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](ghjf) ? 0x0 : ghjf;
    } }, { 'key': 'clientHeight', 'get': function () {
      var hfgdc = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](hfgdc) ? 0x0 : hfgdc;
    } }]), oqml = rtwsqv;function rtwsqv() {
    var nmqr = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';!function (qrsvt, poqml) {
      if (!(qrsvt instanceof poqml)) throw new TypeError('Cannot call a class as a function');
    }(this, rtwsqv);var nmjlo = function (ecfhgd, fcedb) {
      if (!ecfhgd) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !fcedb || 'object' != typeof fcedb && 'function' != typeof fcedb ? ecfhgd : fcedb;
    }(this, (rtwsqv['__proto__'] || Object['getPrototypeOf'](rtwsqv))['call'](this));return nmjlo['className'] = '', nmjlo['childern'] = [], nmjlo['style'] = { 'width': orpqns['innerWidth'] + 'px', 'height': orpqns['innerHeight'] + 'px' }, nmjlo['insertBefore'] = ropnm['noop'], nmjlo['innerHTML'] = '', nmjlo['tagName'] = nmqr['toUpperCase'](), nmjlo;
  }lkjmh['default'] = oqml;
}, function (gfdche, xtyzv, fecgd) {
  'use strict';
  Object['defineProperty'](xtyzv, '__esModule', { 'value': !0x0 });var moqpr = fecgd(0x6),
      mlnoqp;(function (edhfig, omkp) {
    if ('function' != typeof omkp && null !== omkp) throw new TypeError('Super expression must either be null or a function, not ' + typeof omkp);edhfig['prototype'] = Object['create'](omkp && omkp['prototype'], { 'constructor': { 'value': edhfig, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), omkp && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](edhfig, omkp) : edhfig['__proto__'] = omkp);
  })(vxzwy, ((mlnoqp = moqpr) && mlnoqp['__esModule'] ? mlnoqp : { 'default': mlnoqp })['default']), fecgd = vxzwy;function vxzwy() {
    !function (nmjikl, chfegd) {
      if (!(nmjikl instanceof chfegd)) throw new TypeError('Cannot call a class as a function');
    }(this, vxzwy);var ifjgh = function (fhigkj, vrtq) {
      if (!fhigkj) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !vrtq || 'object' != typeof vrtq && 'function' != typeof vrtq ? fhigkj : vrtq;
    }(this, (vxzwy['__proto__'] || Object['getPrototypeOf'](vxzwy))['call'](this));return ifjgh['className'] = '', ifjgh['children'] = [], ifjgh;
  }xtyzv['default'] = fecgd;
}, function (kjnli, kojl, fdegh) {
  'use strict';
  Object['defineProperty'](kojl, '__esModule', { 'value': !0x0 });var jmink = function (onmljk, $yz_0, qrmonp) {
    return $yz_0 && lgikj(onmljk['prototype'], $yz_0), qrmonp && lgikj(onmljk, qrmonp), onmljk;
  };function lgikj(tsvxrw, lmkojn) {
    for (var qts = 0x0; qts < lmkojn['length']; qts++) {
      var sqrv = lmkojn[qts];sqrv['enumerable'] = sqrv['enumerable'] || !0x1, sqrv['configurable'] = !0x0, 'value' in sqrv && (sqrv['writable'] = !0x0), Object['defineProperty'](tsvxrw, sqrv['key'], sqrv);
    }
  }var fghik = fdegh(0x7),
      pqvst;(function (wvsxty, omqnl) {
    if ('function' != typeof omqnl && null !== omqnl) throw new TypeError('Super expression must either be null or a function, not ' + typeof omqnl);wvsxty['prototype'] = Object['create'](omqnl && omqnl['prototype'], { 'constructor': { 'value': wvsxty, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), omqnl && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](wvsxty, omqnl) : wvsxty['__proto__'] = omqnl);
  })(jnmlk, ((pqvst = fghik) && pqvst['__esModule'] ? pqvst : { 'default': pqvst })['default']), jmink(jnmlk, [{ 'key': 'appendChild', 'value': function (qnrsp) {
      if (!(qnrsp instanceof jnmlk)) throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');this['childNodes']['push'](qnrsp);
    } }, { 'key': 'cloneNode', 'value': function () {
      var fgehd = Object['create'](this);return Object['assign'](fgehd, this), fgehd;
    } }, { 'key': 'removeChild', 'value': function (mikhjl) {
      var y$1 = this['childNodes']['findIndex'](function (qormnp) {
        return qormnp === mikhjl;
      });return -0x1 < y$1 ? this['childNodes']['splice'](y$1, 0x1) : null;
    } }]), jmink = jnmlk;function jnmlk() {
    !function (ijlkm, egfijh) {
      if (!(ijlkm instanceof egfijh)) throw new TypeError('Cannot call a class as a function');
    }(this, jnmlk);var jhigef = function (tvrsq, tvqrsw) {
      if (!tvrsq) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !tvqrsw || 'object' != typeof tvqrsw && 'function' != typeof tvqrsw ? tvrsq : tvqrsw;
    }(this, (jnmlk['__proto__'] || Object['getPrototypeOf'](jnmlk))['call'](this));return jhigef['childNodes'] = [], jhigef;
  }kojl['default'] = jmink;
}, function (yxw$, gdfcb) {
  'use strict';
  Object['defineProperty'](gdfcb, '__esModule', { 'value': !0x0 });var cdefhg = function (wz$xyv, ospr, opsnq) {
    return ospr && cgebd(wz$xyv['prototype'], ospr), opsnq && cgebd(wz$xyv, opsnq), wz$xyv;
  };function cgebd(yxvwtz, jkimn) {
    for (var z$wvy = 0x0; z$wvy < jkimn['length']; z$wvy++) {
      var pots = jkimn[z$wvy];pots['enumerable'] = pots['enumerable'] || !0x1, pots['configurable'] = !0x0, 'value' in pots && (pots['writable'] = !0x0), Object['defineProperty'](yxvwtz, pots['key'], pots);
    }
  }var wstrxv = new WeakMap();cdefhg(hljkg, [{ 'key': 'addEventListener', 'value': function (bedf, w$yxz) {
      var wvzy$ = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {},
          qtopsr = wstrxv['get'](this);qtopsr || wstrxv['set'](this, qtopsr = {}), qtopsr[bedf] || (qtopsr[bedf] = []), qtopsr[bedf]['push'](w$yxz), wvzy$['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), wvzy$['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), wvzy$['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
    } }, { 'key': 'removeEventListener', 'value': function (cdgf, xvwsrt) {
      var dgbce = wstrxv['get'](this)[cdgf];if (dgbce && 0x0 < dgbce['length']) {
        for (var edbafc = dgbce['length']; edbafc--;) if (dgbce[edbafc] === xvwsrt) {
          dgbce['splice'](edbafc, 0x1);break;
        }
      }
    } }, { 'key': 'dispatchEvent', 'value': function () {
      var mlon = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {},
          gkjhl = wstrxv['get'](this)[mlon['type']];if (gkjhl) {
        for (var dbcfeg = 0x0; dbcfeg < gkjhl['length']; dbcfeg++) gkjhl[dbcfeg](mlon);
      }
    } }]), cdefhg = hljkg;function hljkg() {
    !function (wz$_x, npmqor) {
      if (!(wz$_x instanceof npmqor)) throw new TypeError('Cannot call a class as a function');
    }(this, hljkg), wstrxv['set'](this, {});
  }gdfcb['default'] = cdefhg;
}, function (ecgdfb, milkh) {
  'use strict';
  Object['defineProperty'](milkh, '__esModule', { 'value': !0x0 }), milkh['noop'] = function () {}, milkh['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (w$zvx, romqnp, gched) {
  'use strict';
  Object['defineProperty'](romqnp, '__esModule', { 'value': !0x0 }), romqnp['default'] = function () {
    var khigjf = wx['createCanvas']();return khigjf['type'] = 'canvas', khigjf['__proto__']['__proto__'] = new $vy['default']('canvas'), khigjf['getContext'], (khigjf['getBoundingClientRect'] = function () {
      return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
    }, khigjf);
  }, gched(0x3);var $vy = spnro(gched(0x4));spnro(gched(0xa));function spnro(_10432) {
    return _10432 && _10432['__esModule'] ? _10432 : { 'default': _10432 };
  }
}, function (qopnsr, fbcea, yswvxt) {
  'use strict';
  Object['defineProperty'](fbcea, '__esModule', { 'value': !0x0 });var wtrvsx = function (hfgedc) {
    {
      if (hfgedc && hfgedc['__esModule']) return hfgedc;var txsyv = {};if (null != hfgedc) {
        for (var moknlj in hfgedc) Object['prototype']['hasOwnProperty']['call'](hfgedc, moknlj) && (txsyv[moknlj] = hfgedc[moknlj]);
      }return txsyv['default'] = hfgedc, txsyv;
    }
  }(yswvxt(0x1)),
      dfeabc = fchde(yswvxt(0x4)),
      zvxy = fchde(yswvxt(0xb)),
      dcgbfe = fchde(yswvxt(0xc)),
      kolnjm = fchde(yswvxt(0x9));function fchde(snqpo) {
    return snqpo && snqpo['__esModule'] ? snqpo : { 'default': snqpo };
  }yswvxt(0xf);var hgce = {},
      spnroq = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': wtrvsx, 'hidden': !0x1, 'style': {}, 'location': wtrvsx['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new dfeabc['default']('head'), 'body': new dfeabc['default']('body'), 'createElement': function ($01_y) {
      return 'canvas' === $01_y ? new kolnjm['default']() : 'audio' === $01_y ? new dcgbfe['default']() : 'img' === $01_y ? new zvxy['default']() : new dfeabc['default']($01_y);
    }, 'getElementById': function (klhijm) {
      return klhijm === wtrvsx['canvas']['id'] ? wtrvsx['canvas'] : null;
    }, 'getElementsByTagName': function ($3_) {
      return 'head' === $3_ ? [spnroq['head']] : 'body' === $3_ ? [spnroq['body']] : 'canvas' === $3_ ? [wtrvsx['canvas']] : [];
    }, 'querySelector': function (zy_1) {
      return 'head' === zy_1 ? spnroq['head'] : 'body' === zy_1 ? spnroq['body'] : 'canvas' === zy_1 || zy_1 === '#' + wtrvsx['canvas']['id'] ? wtrvsx['canvas'] : null;
    }, 'querySelectorAll': function (hdgif) {
      return 'head' === hdgif ? [spnroq['head']] : 'body' === hdgif ? [spnroq['body']] : 'canvas' === hdgif ? [wtrvsx['canvas']] : [];
    }, 'addEventListener': function (edfhgi, egcdh) {
      hgce[edfhgi] || (hgce[edfhgi] = []), hgce[edfhgi]['push'](egcdh);
    }, 'removeEventListener': function (fejih, rsvxt) {
      var _xz$ = hgce[fejih];if (_xz$ && 0x0 < _xz$['length']) {
        for (var tsywv = _xz$['length']; tsywv--;) if (_xz$[tsywv] === rsvxt) {
          _xz$['splice'](tsywv, 0x1);break;
        }
      }
    }, 'dispatchEvent': function (klmjin) {
      var fbegdc = hgce[klmjin['type']];if (fbegdc) {
        for (var dhgife = 0x0; dhgife < fbegdc['length']; dhgife++) fbegdc[dhgife](klmjin);
      }
    } };fbcea['default'] = spnroq;
}, function (ormqnp, _02z1) {
  'use strict';
  Object['defineProperty'](_02z1, '__esModule', { 'value': !0x0 }), _02z1['default'] = function () {
    return wx['createImage']();
  };
}, function (srtqvw, jlihg, qorpsn) {
  'use strict';
  Object['defineProperty'](jlihg, '__esModule', { 'value': !0x0 });var hijf = function (dceb, adecbf, loqm) {
    return adecbf && inkjm(dceb['prototype'], adecbf), loqm && inkjm(dceb, loqm), dceb;
  };function inkjm(rnopsq, mkjnl) {
    for (var khlj = 0x0; khlj < mkjnl['length']; khlj++) {
      var wv$zxy = mkjnl[khlj];wv$zxy['enumerable'] = wv$zxy['enumerable'] || !0x1, wv$zxy['configurable'] = !0x0, 'value' in wv$zxy && (wv$zxy['writable'] = !0x0), Object['defineProperty'](rnopsq, wv$zxy['key'], wv$zxy);
    }
  }var _zw$yx = qorpsn(0xd),
      becdgf = (vrsqw = _zw$yx) && vrsqw['__esModule'] ? vrsqw : { 'default': vrsqw },
      vrsqw,
      y0$_z1 = qorpsn(0x8);function ywz$_x($zvxy, fhgjie) {
    if (!$zvxy) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !fhgjie || 'object' != typeof fhgjie && 'function' != typeof fhgjie ? $zvxy : fhgjie;
  }var mlonpq = 0x0,
      cedb = 0x1,
      pnsroq = 0x2,
      vswtyx = 0x3,
      efidgh = 0x4,
      pmonkl = new WeakMap(),
      lmpo = new WeakMap();new WeakMap(), new WeakMap(), (function (sqvtp, mklpno) {
    if ('function' != typeof mklpno && null !== mklpno) throw new TypeError('Super expression must either be null or a function, not ' + typeof mklpno);sqvtp['prototype'] = Object['create'](mklpno && mklpno['prototype'], { 'constructor': { 'value': sqvtp, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), mklpno && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](sqvtp, mklpno) : sqvtp['__proto__'] = mklpno);
  }(qopsrt, becdgf['default']), hijf(qopsrt, [{ 'key': 'load', 'value': function () {
      console['warn']('HTMLAudioElement.load() is not implemented.');
    } }, { 'key': 'play', 'value': function () {
      (0x0, y0$_z1['isSubContext'])() || pmonkl['get'](this)['play']();
    } }, { 'key': 'pause', 'value': function () {
      (0x0, y0$_z1['isSubContext'])() || pmonkl['get'](this)['pause']();
    } }, { 'key': 'canPlayType', 'value': function () {
      var wztxy = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return 'string' == typeof wztxy && (-0x1 < wztxy['indexOf']('audio/mpeg') || wztxy['indexOf']('audio/mp4')) ? 'probably' : '';
    } }, { 'key': 'cloneNode', 'value': function () {
      var hkljim = new qopsrt();return (0x0, y0$_z1['isSubContext'])() || (hkljim['loop'] = pmonkl['get'](this)['loop'], hkljim['autoplay'] = pmonkl['get'](this)['loop'], hkljim['src'] = this['src']), hkljim;
    } }, { 'key': 'currentTime', 'get': function () {
      return (0x0, y0$_z1['isSubContext'])() ? 0x0 : pmonkl['get'](this)['currentTime'];
    }, 'set': function (cehg) {
      (0x0, y0$_z1['isSubContext'])() || pmonkl['get'](this)['seek'](cehg);
    } }, { 'key': 'src', 'get': function () {
      return lmpo['get'](this);
    }, 'set': function (likjmh) {
      lmpo['set'](this, likjmh), (0x0, y0$_z1['isSubContext'])() || (pmonkl['get'](this)['src'] = likjmh);
    } }, { 'key': 'loop', 'get': function () {
      return !(0x0, y0$_z1['isSubContext'])() && pmonkl['get'](this)['loop'];
    }, 'set': function (kifg) {
      (0x0, y0$_z1['isSubContext'])() || (pmonkl['get'](this)['loop'] = kifg);
    } }, { 'key': 'autoplay', 'get': function () {
      return !(0x0, y0$_z1['isSubContext'])() && pmonkl['get'](this)['autoplay'];
    }, 'set': function ($_01z) {
      (0x0, y0$_z1['isSubContext'])() || (pmonkl['get'](this)['autoplay'] = $_01z);
    } }, { 'key': 'paused', 'get': function () {
      return !(0x0, y0$_z1['isSubContext'])() && pmonkl['get'](this)['paused'];
    } }]), hijf = qopsrt);function qopsrt(ehdfig) {
    !function (eigf, wy$zvx) {
      if (!(eigf instanceof wy$zvx)) throw new TypeError('Cannot call a class as a function');
    }(this, qopsrt);var psnq = ywz$_x(this, (qopsrt['__proto__'] || Object['getPrototypeOf'](qopsrt))['call'](this));if (psnq['HAVE_NOTHING'] = mlonpq, psnq['HAVE_METADATA'] = cedb, psnq['HAVE_CURRENT_DATA'] = pnsroq, psnq['HAVE_FUTURE_DATA'] = vswtyx, psnq['HAVE_ENOUGH_DATA'] = efidgh, psnq['readyState'] = mlonpq, (0x0, y0$_z1['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), ywz$_x(psnq);lmpo['set'](psnq, '');var yzxvw$ = wx['createInnerAudioContext']();return pmonkl['set'](psnq, yzxvw$), yzxvw$['onCanplay'](function () {
      psnq['dispatchEvent']({ 'type': 'load' }), psnq['dispatchEvent']({ 'type': 'loadend' }), psnq['dispatchEvent']({ 'type': 'canplay' }), psnq['dispatchEvent']({ 'type': 'canplaythrough' }), psnq['dispatchEvent']({ 'type': 'loadedmetadata' }), psnq['readyState'] = pnsroq;
    }), yzxvw$['onPlay'](function () {
      psnq['dispatchEvent']({ 'type': 'play' });
    }), yzxvw$['onPause'](function () {
      psnq['dispatchEvent']({ 'type': 'pause' });
    }), yzxvw$['onEnded'](function () {
      psnq['dispatchEvent']({ 'type': 'ended' }), psnq['readyState'] = efidgh;
    }), yzxvw$['onError'](function () {
      psnq['dispatchEvent']({ 'type': 'error' });
    }), ehdfig && (pmonkl['get'](psnq)['src'] = ehdfig), psnq;
  }jlihg['default'] = hijf;
}, function (nors, rtvsq, xytvz) {
  'use strict';
  Object['defineProperty'](rtvsq, '__esModule', { 'value': !0x0 });var aefdc = xytvz(0xe),
      ecdfgb;(function ($yxz0_, jhmikl) {
    if ('function' != typeof jhmikl && null !== jhmikl) throw new TypeError('Super expression must either be null or a function, not ' + typeof jhmikl);$yxz0_['prototype'] = Object['create'](jhmikl && jhmikl['prototype'], { 'constructor': { 'value': $yxz0_, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), jhmikl && (Object['setPrototypeOf'] ? Object['setPrototypeOf']($yxz0_, jhmikl) : $yxz0_['__proto__'] = jhmikl);
  })(ihjklm, ((ecdfgb = aefdc) && ecdfgb['__esModule'] ? ecdfgb : { 'default': ecdfgb })['default']), xytvz = ihjklm;function ihjklm() {
    return function (_zxw, jkhilm) {
      if (!(_zxw instanceof jkhilm)) throw new TypeError('Cannot call a class as a function');
    }(this, ihjklm), function (qsrno, qomnrp) {
      if (!qsrno) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !qomnrp || 'object' != typeof qomnrp && 'function' != typeof qomnrp ? qsrno : qomnrp;
    }(this, (ihjklm['__proto__'] || Object['getPrototypeOf'](ihjklm))['call'](this, 'audio'));
  }rtvsq['default'] = xytvz;
}, function (ifhk, mrnp, aefbcd) {
  'use strict';
  Object['defineProperty'](mrnp, '__esModule', { 'value': !0x0 });var txvysw = function (sxwvty, gbefdc, opmrnq) {
    return gbefdc && $_12z(sxwvty['prototype'], gbefdc), opmrnq && $_12z(sxwvty, opmrnq), sxwvty;
  };function $_12z(kplnom, wtsvq) {
    for (var kljni = 0x0; kljni < wtsvq['length']; kljni++) {
      var oprsqn = wtsvq[kljni];oprsqn['enumerable'] = oprsqn['enumerable'] || !0x1, oprsqn['configurable'] = !0x0, 'value' in oprsqn && (oprsqn['writable'] = !0x0), Object['defineProperty'](kplnom, oprsqn['key'], oprsqn);
    }
  }var qsotrp = aefbcd(0x4),
      heigd;(function (xvyz$w, ejfig) {
    if ('function' != typeof ejfig && null !== ejfig) throw new TypeError('Super expression must either be null or a function, not ' + typeof ejfig);xvyz$w['prototype'] = Object['create'](ejfig && ejfig['prototype'], { 'constructor': { 'value': xvyz$w, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), ejfig && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](xvyz$w, ejfig) : xvyz$w['__proto__'] = ejfig);
  })(onqm, ((heigd = qsotrp) && heigd['__esModule'] ? heigd : { 'default': heigd })['default']), txvysw(onqm, [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]), txvysw = onqm;function onqm(mkilh) {
    return function (mnqpo, yzxv$w) {
      if (!(mnqpo instanceof yzxv$w)) throw new TypeError('Cannot call a class as a function');
    }(this, onqm), function (klmjhi, ecdbaf) {
      if (!klmjhi) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !ecdbaf || 'object' != typeof ecdbaf && 'function' != typeof ecdbaf ? klmjhi : ecdbaf;
    }(this, (onqm['__proto__'] || Object['getPrototypeOf'](onqm))['call'](this, mkilh));
  }mrnp['default'] = txvysw;
}, function (hjlik, hgidef, swtvr) {
  'use strict';
  swtvr(0x10);
}, function (wqrvt, jihgfk, w$zxvy) {
  'use strict';
  var bedfg = function (likjn) {
    {
      if (likjn && likjn['__esModule']) return likjn;var lqpmn = {};if (null != likjn) {
        for (var hfidg in likjn) Object['prototype']['hasOwnProperty']['call'](likjn, hfidg) && (lqpmn[hfidg] = likjn[hfidg]);
      }return lqpmn['default'] = likjn, lqpmn;
    }
  }(w$zxvy(0x1)),
      swtyv = w$zxvy(0xa),
      prsnoq = (pqtros = swtyv) && pqtros['__esModule'] ? pqtros : { 'default': pqtros },
      pqtros,
      $23_1 = w$zxvy(0x8);function y$0_z(geidf) {
    !function (gdbcfe, rpqomn) {
      if (!(gdbcfe instanceof rpqomn)) throw new TypeError('Cannot call a class as a function');
    }(this, y$0_z), this['target'] = bedfg['canvas'], this['currentTarget'] = bedfg['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = $23_1['noop'], this['stopPropagation'] = $23_1['noop'], this['type'] = geidf;
  }function pmlno(xwsyv) {
    return function (swytx) {
      var egdfc = new y$0_z(xwsyv);egdfc['touches'] = swytx['touches'], egdfc['targetTouches'] = Array['prototype']['slice']['call'](swytx['touches']), egdfc['changedTouches'] = swytx['changedTouches'], egdfc['timeStamp'] = swytx['timeStamp'], prsnoq['default']['dispatchEvent'](egdfc);
    };
  }wx['onTouchStart'](pmlno('touchstart')), wx['onTouchMove'](pmlno('touchmove')), wx['onTouchEnd'](pmlno('touchend')), wx['onTouchCancel'](pmlno('touchcancel'));
}, function (degch, yvztxw) {
  'use strict';
  Object['defineProperty'](yvztxw, '__esModule', { 'value': !0x0 }), yvztxw['noop'] = function () {}, yvztxw['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (knpml, moljk, z01_y$) {
  'use strict';
  Object['defineProperty'](moljk, '__esModule', { 'value': !0x0 }), z01_y$ = z01_y$(0x8), z01_y$ = { 'platform': wx['getSystemInfoSync']()['platform'], 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': z01_y$['noop'], 'watchPosition': z01_y$['noop'], 'clearWatch': z01_y$['noop'] } }, moljk['default'] = z01_y$;
}, function (fhgce, mnlokp) {
  'use strict';
  Object['defineProperty'](mnlokp, '__esModule', { 'value': !0x0 });var sxtvyw = function (z10_2$, trwvqs, txwvy) {
    return trwvqs && txvs(z10_2$['prototype'], trwvqs), txwvy && txvs(z10_2$, txwvy), z10_2$;
  };function txvs(fjkgi, rqvt) {
    for (var vtyxzw = 0x0; vtyxzw < rqvt['length']; vtyxzw++) {
      var pmlnqo = rqvt[vtyxzw];pmlnqo['enumerable'] = pmlnqo['enumerable'] || !0x1, pmlnqo['configurable'] = !0x0, 'value' in pmlnqo && (pmlnqo['writable'] = !0x0), Object['defineProperty'](fjkgi, pmlnqo['key'], pmlnqo);
    }
  }var vsrp = new WeakMap(),
      x$_wy = new WeakMap(),
      nmpok = new WeakMap(),
      oqrpm = new WeakMap(),
      nlmjok = new WeakMap();function fcgdh(ztwvxy) {
    if ('function' == typeof this['on' + ztwvxy]) {
      for (var likjnm = arguments['length'], igefhd = Array(0x1 < likjnm ? likjnm - 0x1 : 0x0), deifg = 0x1; deifg < likjnm; deifg++) igefhd[deifg - 0x1] = arguments[deifg];this['on' + ztwvxy]['apply'](this, igefhd);
    }
  }function x_y0z(qvsp) {
    this['readyState'] = qvsp, fcgdh['call'](this, 'readystatechange');
  }sxtvyw(vrtsq, [{ 'key': 'abort', 'value': function () {
      var pqonl = nlmjok['get'](this);pqonl && pqonl['abort']();
    } }, { 'key': 'getAllResponseHeaders', 'value': function () {
      var fdeabc = oqrpm['get'](this);return Object['keys'](fdeabc)['map'](function (nros) {
        return nros + ':\x20' + fdeabc[nros];
      })['join']('\x0a');
    } }, { 'key': 'getResponseHeader', 'value': function (_3240) {
      return oqrpm['get'](this)[_3240];
    } }, { 'key': 'open', 'value': function (yxz$wv, zyvx) {
      x$_wy['set'](this, yxz$wv), vsrp['set'](this, zyvx), x_y0z['call'](this, vrtsq['OPENED']);
    } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function () {
      var $2z0_ = this,
          lhkijm = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';if (this['readyState'] !== vrtsq['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');wx['request']({ 'data': lhkijm, 'url': vsrp['get'](this), 'method': x$_wy['get'](this), 'header': nmpok['get'](this), 'responseType': this['responseType'], 'success': function (jhige) {
          var gcedfh = jhige['data'],
              osnr = jhige['statusCode'],
              jhige = jhige['header'];if ('string' != typeof gcedfh && !(gcedfh instanceof ArrayBuffer)) try {
            gcedfh = JSON['stringify'](gcedfh);
          } catch (rpno) {}if ($2z0_['status'] = osnr, oqrpm['set']($2z0_, jhige), fcgdh['call']($2z0_, 'loadstart'), x_y0z['call']($2z0_, vrtsq['HEADERS_RECEIVED']), x_y0z['call']($2z0_, vrtsq['LOADING']), ($2z0_['response'] = gcedfh) instanceof ArrayBuffer) {
            $2z0_['responseText'] = '';var qnmlo = new Uint8Array(gcedfh),
                ihglj = qnmlo['byteLength'];for (var _zy$xw = 0x0; _zy$xw < ihglj; _zy$xw++) $2z0_['responseText'] += String['fromCharCode'](qnmlo[_zy$xw]);
          } else $2z0_['responseText'] = gcedfh;x_y0z['call']($2z0_, vrtsq['DONE']), fcgdh['call']($2z0_, 'load'), fcgdh['call']($2z0_, 'loadend');
        }, 'fail': function (kfghi) {
          kfghi = kfghi['errMsg'], (-0x1 !== kfghi['indexOf']('abort') ? fcgdh['call']($2z0_, 'abort') : fcgdh['call']($2z0_, 'error', kfghi), fcgdh['call']($2z0_, 'loadend'));
        } });
    } }, { 'key': 'setRequestHeader', 'value': function (nlpkmo, rqtps) {
      var gfch = nmpok['get'](this);gfch[nlpkmo] = rqtps, nmpok['set'](this, gfch);
    } }]), sxtvyw = vrtsq;function vrtsq() {
    !function (qonm, moklnj) {
      if (!(qonm instanceof moklnj)) throw new TypeError('Cannot call a class as a function');
    }(this, vrtsq), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = !0x1, nmpok['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), oqrpm['set'](this, {});
  }sxtvyw['UNSEND'] = 0x0, sxtvyw['OPENED'] = 0x1, sxtvyw['HEADERS_RECEIVED'] = 0x2, sxtvyw['LOADING'] = 0x3, sxtvyw['DONE'] = 0x4, mnlokp['default'] = sxtvyw;
}, function (ghlj, xyzw_$, z_0$21) {
  'use strict';
  Object['defineProperty'](xyzw_$, '__esModule', { 'value': !0x0 });var kjlhig = function (qnoplm, nlopqm, efjh) {
    return nlopqm && xstvr(qnoplm['prototype'], nlopqm), efjh && xstvr(qnoplm, efjh), qnoplm;
  };function xstvr(zwyx_$, $_y) {
    for (var twysx = 0x0; twysx < $_y['length']; twysx++) {
      var hcdgf = $_y[twysx];hcdgf['enumerable'] = hcdgf['enumerable'] || !0x1, hcdgf['configurable'] = !0x0, 'value' in hcdgf && (hcdgf['writable'] = !0x0), Object['defineProperty'](zwyx_$, hcdgf['key'], hcdgf);
    }
  }var ihgkl = z_0$21(0x8),
      hgkfji = new WeakMap();kjlhig(rqmnp, [{ 'key': 'close', 'value': function (tzwyvx, yw_$xz) {
      this['readyState'] = rqmnp['CLOSING'], hgkfji['get'](this)['close']({ 'code': tzwyvx, 'reason': yw_$xz });
    } }, { 'key': 'send', 'value': function (ojmnk) {
      if ('string' != typeof ojmnk && !(ojmnk instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + ojmnk + ' is invalid');hgkfji['get'](this)['send']({ 'data': ojmnk });
    } }]), kjlhig = rqmnp;function rqmnp(nprs) {
    var fadbce = this,
        nosprq = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function (ghejif, _34021) {
      if (!(ghejif instanceof _34021)) throw new TypeError('Cannot call a class as a function');
    }(this, rqmnp), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, (0x0, ihgkl['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if ('string' != typeof nprs || !/(^ws:\/\/)|(^wss:\/\/)/['test'](nprs)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + nprs + '\' is invalid');return this['url'] = nprs, this['readyState'] = rqmnp['CONNECTING'], nosprq = wx['connectSocket']({ 'url': nprs, 'protocols': Array['isArray'](nosprq) ? nosprq : [nosprq] }), (hgkfji['set'](this, nosprq), nosprq['onClose'](function (eihgf) {
      fadbce['readyState'] = rqmnp['CLOSED'], 'function' == typeof fadbce['onclose'] && fadbce['onclose'](eihgf);
    }), nosprq['onMessage'](function (rxtv) {
      'function' == typeof fadbce['onmessage'] && fadbce['onmessage'](rxtv);
    }), nosprq['onOpen'](function () {
      fadbce['readyState'] = rqmnp['OPEN'], 'function' == typeof fadbce['onopen'] && fadbce['onopen']();
    }), nosprq['onError'](function (hlgi) {
      'function' == typeof fadbce['onerror'] && fadbce['onerror'](new Error(hlgi['errMsg']));
    }), this);
  }kjlhig['CONNECTING'] = 0x0, kjlhig['OPEN'] = 0x1, kjlhig['CLOSING'] = 0x2, kjlhig['CLOSED'] = 0x3, xyzw_$['default'] = kjlhig;
}, function (xvwtsr, lkhm, lokjn) {
  'use strict';
  Object['defineProperty'](lkhm, '__esModule', { 'value': !0x0 });var qnmop = function (y1z0, lpmqon, hjikl) {
    return lpmqon && egijhf(y1z0['prototype'], lpmqon), hjikl && egijhf(y1z0, hjikl), y1z0;
  };function egijhf(jhie, txywsv) {
    for (var cafd = 0x0; cafd < txywsv['length']; cafd++) {
      var z$20 = txywsv[cafd];z$20['enumerable'] = z$20['enumerable'] || !0x1, z$20['configurable'] = !0x0, 'value' in z$20 && (z$20['writable'] = !0x0), Object['defineProperty'](jhie, z$20['key'], z$20);
    }
  }var $zxywv = lokjn(0x8);qnmop(trqp, [{ 'key': 'construct', 'value': function () {
      if ((0x0, $zxywv['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
    } }]), qnmop = trqp;function trqp() {
    !function (fdcgb, jnoklm) {
      if (!(fdcgb instanceof jnoklm)) throw new TypeError('Cannot call a class as a function');
    }(this, trqp);
  }lkhm['default'] = qnmop;
}, function (z0_x$, cghefd, xwz_y$) {
  'use strict';
  Object['defineProperty'](cghefd, '__esModule', { 'value': !0x0 });var nrqsp = xwz_y$(0x8),
      cadfbe = { get 'length'() {
      return wx['getStorageInfoSync']()['keys']['length'];
    }, 'key': function (lkimhj) {
      return wx['getStorageInfoSync']()['keys'][lkimhj];
    }, 'getItem': function (lnikj) {
      return wx['getStorageSync'](lnikj);
    }, 'setItem': function (qprons, z0_1$2) {
      return wx['setStorageSync'](qprons, z0_1$2);
    }, 'removeItem': function (sqpnor) {
      wx['removeStorageSync'](sqpnor);
    }, 'clear': function () {
      wx['clearStorageSync']();
    } },
      jhegf = {};xwz_y$ = { get 'length'() {
      return Object['keys'](jhegf)['length'];
    }, 'key': function (heifjg) {
      return Object['keys'](jhegf)[heifjg];
    }, 'getItem': function (orspn) {
      return jhegf[orspn];
    }, 'setItem': function (jkiln, $xz_y0) {
      jhegf[jkiln] = $xz_y0;
    }, 'removeItem': function (oqrns) {
      delete jhegf[oqrns];
    }, 'clear': function () {
      jhegf = {};
    } }, cadfbe = (0x0, nrqsp['isSubContext'])() ? xwz_y$ : cadfbe, cghefd['default'] = cadfbe;
}, function (gjlih, fhgije) {
  'use strict';
  Object['defineProperty'](fhgije, '__esModule', { 'value': !0x0 }), fhgije['default'] = { 'href': 'cccgame.js', 'reload': function () {} };
}]);