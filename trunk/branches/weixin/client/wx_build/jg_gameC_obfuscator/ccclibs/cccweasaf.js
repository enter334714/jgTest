var p = wx.$h;
!function (_$2031) {
  var z2 = {};function __webpack_require__(zw$_y) {
    if (z2[zw$_y]) return z2[zw$_y]['exports'];var jknmil = z2[zw$_y] = { 'exports': {}, 'id': zw$_y, 'loaded': !0x1 };return _$2031[zw$_y]['call'](jknmil['exports'], jknmil, jknmil['exports'], __webpack_require__), jknmil['loaded'] = !0x0, jknmil['exports'];
  }__webpack_require__['m'] = _$2031, __webpack_require__['c'] = z2, __webpack_require__['p'] = '', __webpack_require__(0x0);
}([function (lnomk, hgkf, ijhgkf) {
  'use strict';
  var mlknp = function (_1zy0) {
    {
      if (_1zy0 && _1zy0['__esModule']) return _1zy0;var yvstw = {};if (null != _1zy0) {
        for (var svtxyw in _1zy0) Object['prototype']['hasOwnProperty']['call'](_1zy0, svtxyw) && (yvstw[svtxyw] = _1zy0[svtxyw]);
      }return yvstw['default'] = _1zy0, yvstw;
    }
  }(ijhgkf(0x1)),
      ywtxv = ijhgkf(0x4),
      _x = (klihjg = ywtxv) && klihjg['__esModule'] ? klihjg : { 'default': klihjg },
      klihjg,
      fdacb = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
    mlknp['addEventListener'] = function (iegfhj, egdc) {
      mlknp['document']['addEventListener'](iegfhj, egdc);
    }, mlknp['removeEventListener'] = function (qstvr, rtwqvs) {
      mlknp['document']['removeEventListener'](qstvr, rtwqvs);
    }, mlknp['canvas'] && (mlknp['canvas']['addEventListener'] = mlknp['addEventListener'], mlknp['canvas']['removeEventListener'] = mlknp['removeEventListener']), fdacb['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new _x['default']('canvas'), sharedCanvas['addEventListener'] = mlknp['addEventListener'], sharedCanvas['removeEventListener'] = mlknp['removeEventListener']);var vz$yw = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === vz$yw) {
      for (var $12_0 in mlknp) {
        var qtops = Object['getOwnPropertyDescriptor'](fdacb, $12_0);qtops && !0x0 !== qtops['configurable'] || Object['defineProperty'](window, $12_0, { 'value': mlknp[$12_0] });
      }for (var ljkhig in mlknp['document']) {
        var hdfieg = Object['getOwnPropertyDescriptor'](fdacb['document'], ljkhig);hdfieg && !0x0 !== hdfieg['configurable'] || Object['defineProperty'](fdacb['document'], ljkhig, { 'value': mlknp['document'][ljkhig] });
      }window['parent'] = window;
    } else {
      for (var y0z$ in mlknp) fdacb[y0z$] = mlknp[y0z$];fdacb['window'] = mlknp, window = fdacb, window['top'] = window['parent'] = window;
    }
  }());
}, function (hgidf, bfcdeg, xyz_0) {
  'use strict';
  Object['defineProperty'](bfcdeg, '__esModule', { 'value': !0x0 }), bfcdeg['cancelAnimationFrame'] = bfcdeg['requestAnimationFrame'] = bfcdeg['clearInterval'] = bfcdeg['clearTimeout'] = bfcdeg['setInterval'] = bfcdeg['setTimeout'] = bfcdeg['canvas'] = bfcdeg['location'] = bfcdeg['localStorage'] = bfcdeg['HTMLElement'] = bfcdeg['FileReader'] = bfcdeg['Audio'] = bfcdeg['Image'] = bfcdeg['WebSocket'] = bfcdeg['XMLHttpRequest'] = bfcdeg['navigator'] = bfcdeg['document'] = void 0x0;var inlm = xyz_0(0x2);Object['keys'](inlm)['forEach'](function (ihdfge) {
    'default' !== ihdfge && '__esModule' !== ihdfge && Object['defineProperty'](bfcdeg, ihdfge, { 'enumerable': !0x0, 'get': function () {
        return inlm[ihdfge];
      } });
  });var gfdbec = xyz_0(0x3);Object['keys'](gfdbec)['forEach'](function (bdcfe) {
    'default' !== bdcfe && '__esModule' !== bdcfe && Object['defineProperty'](bfcdeg, bdcfe, { 'enumerable': !0x0, 'get': function () {
        return gfdbec[bdcfe];
      } });
  });var pqm = rnpoqs(xyz_0(0x9)),
      qolpmn = xyz_0(0x11),
      z$vxyw = rnpoqs(xyz_0(0xa)),
      $wvx = rnpoqs(xyz_0(0x12)),
      npors = rnpoqs(xyz_0(0x13)),
      _1403 = rnpoqs(xyz_0(0x14)),
      lmojk = rnpoqs(xyz_0(0xb)),
      edfcgh = rnpoqs(xyz_0(0xc)),
      hgeidf = rnpoqs(xyz_0(0x15)),
      dihfge = rnpoqs(xyz_0(0x4)),
      y_z$01 = rnpoqs(xyz_0(0x16));xyz_0 = rnpoqs(xyz_0(0x17));function rnpoqs(efdgh) {
    return efdgh && efdgh['__esModule'] ? efdgh : { 'default': efdgh };
  }bfcdeg['document'] = z$vxyw['default'], bfcdeg['navigator'] = $wvx['default'], bfcdeg['XMLHttpRequest'] = npors['default'], bfcdeg['WebSocket'] = _1403['default'], bfcdeg['Image'] = lmojk['default'], bfcdeg['Audio'] = edfcgh['default'], bfcdeg['FileReader'] = hgeidf['default'], bfcdeg['HTMLElement'] = dihfge['default'], bfcdeg['localStorage'] = y_z$01['default'], bfcdeg['location'] = xyz_0['default'], pqm = (0x0, qolpmn['isSubContext'])() ? void 0x0 : new pqm['default'](), (bfcdeg['canvas'] = pqm, bfcdeg['setTimeout'] = setTimeout, bfcdeg['setInterval'] = setInterval, bfcdeg['clearTimeout'] = clearTimeout, bfcdeg['clearInterval'] = clearInterval, bfcdeg['requestAnimationFrame'] = requestAnimationFrame, bfcdeg['cancelAnimationFrame'] = cancelAnimationFrame);
}, function (khji, romnp) {
  'use strict';
  Object['defineProperty'](romnp, '__esModule', { 'value': !0x0 });var gfhde = wx['getSystemInfoSync'](),
      xy_wz$ = gfhde['screenWidth'],
      _1230$ = gfhde['screenHeight'],
      gfhde = gfhde['devicePixelRatio'];xy_wz$ = romnp['innerWidth'] = xy_wz$, _1230$ = romnp['innerHeight'] = _1230$, romnp['devicePixelRatio'] = gfhde, romnp['screen'] = { 'availWidth': xy_wz$, 'availHeight': _1230$ }, romnp['performance'] = { 'now': function () {
      return Date['now']() / 0x3e8;
    } }, romnp['ontouchstart'] = null, romnp['ontouchmove'] = null, romnp['ontouchend'] = null;
}, function (hfjegi, ifjhg, hgefi) {
  'use strict';
  Object['defineProperty'](ifjhg, '__esModule', { 'value': !0x0 }), ifjhg['HTMLCanvasElement'] = ifjhg['HTMLImageElement'] = void 0x0;var pmql = hgefi(0x4);hgefi = (psvrq = pmql) && psvrq['__esModule'] ? psvrq : { 'default': psvrq };var psvrq;function ifghe(tsyvx, fjkihg) {
    if (!(tsyvx instanceof fjkihg)) throw new TypeError('Cannot call a class as a function');
  }function efca(prmqo, igjeh) {
    if (!prmqo) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !igjeh || 'object' != typeof igjeh && 'function' != typeof igjeh ? prmqo : igjeh;
  }function snprqo(pqlo, ilkgjh) {
    if ('function' != typeof ilkgjh && null !== ilkgjh) throw new TypeError('Super expression must either be null or a function, not ' + typeof ilkgjh);pqlo['prototype'] = Object['create'](ilkgjh && ilkgjh['prototype'], { 'constructor': { 'value': pqlo, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), ilkgjh && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](pqlo, ilkgjh) : pqlo['__proto__'] = ilkgjh);
  }ifjhg['HTMLImageElement'] = (snprqo(rtvqsw, hgefi['default']), rtvqsw);function rtvqsw() {
    return ifghe(this, rtvqsw), efca(this, (rtvqsw['__proto__'] || Object['getPrototypeOf'](rtvqsw))['call'](this, 'img'));
  }ifjhg['HTMLCanvasElement'] = (snprqo(yxz_$0, hgefi['default']), yxz_$0);function yxz_$0() {
    return ifghe(this, yxz_$0), efca(this, (yxz_$0['__proto__'] || Object['getPrototypeOf'](yxz_$0))['call'](this, 'canvas'));
  }
}, function (eihjg, edifh, khjf) {
  'use strict';
  Object['defineProperty'](edifh, '__esModule', { 'value': !0x0 });var lijmn = function (dbae, ropst, jiklhg) {
    return ropst && svtwy(dbae['prototype'], ropst), jiklhg && svtwy(dbae, jiklhg), dbae;
  };function svtwy(dfacbe, z$xwvy) {
    for (var mnpolk = 0x0; mnpolk < z$xwvy['length']; mnpolk++) {
      var nkojl = z$xwvy[mnpolk];nkojl['enumerable'] = nkojl['enumerable'] || !0x1, nkojl['configurable'] = !0x0, 'value' in nkojl && (nkojl['writable'] = !0x0), Object['defineProperty'](dfacbe, nkojl['key'], nkojl);
    }
  }var zy_1 = khjf(0x5),
      yxtv = (jkhmi = zy_1) && jkhmi['__esModule'] ? jkhmi : { 'default': jkhmi },
      jkhmi,
      nklji = khjf(0x8),
      efgj = khjf(0x2);(function (fgedih, fcdheg) {
    if ('function' != typeof fcdheg && null !== fcdheg) throw new TypeError('Super expression must either be null or a function, not ' + typeof fcdheg);fgedih['prototype'] = Object['create'](fcdheg && fcdheg['prototype'], { 'constructor': { 'value': fgedih, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), fcdheg && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](fgedih, fcdheg) : fgedih['__proto__'] = fcdheg);
  })(vwtsy, yxtv['default']), lijmn(vwtsy, [{ 'key': 'setAttribute', 'value': function (mnlpok, fghid) {
      this[mnlpok] = fghid;
    } }, { 'key': 'getAttribute', 'value': function (_20$13) {
      return this[_20$13];
    } }, { 'key': 'getBoundingClientRect', 'value': function () {
      return { 'top': 0x0, 'left': 0x0, 'width': efgj['innerWidth'], 'height': efgj['innerHeight'] };
    } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
      var ijeh = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](ijeh) ? 0x0 : ijeh;
    } }, { 'key': 'clientHeight', 'get': function () {
      var mknjlo = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](mknjlo) ? 0x0 : mknjlo;
    } }]), lijmn = vwtsy;function vwtsy() {
    var bcgfe = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';!function (dhiefg, jg) {
      if (!(dhiefg instanceof jg)) throw new TypeError('Cannot call a class as a function');
    }(this, vwtsy);var rpqns = function (yvzx$, jhfg) {
      if (!yvzx$) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !jhfg || 'object' != typeof jhfg && 'function' != typeof jhfg ? yvzx$ : jhfg;
    }(this, (vwtsy['__proto__'] || Object['getPrototypeOf'](vwtsy))['call'](this));return rpqns['className'] = '', rpqns['childern'] = [], rpqns['style'] = { 'width': efgj['innerWidth'] + 'px', 'height': efgj['innerHeight'] + 'px' }, rpqns['insertBefore'] = nklji['noop'], rpqns['innerHTML'] = '', rpqns['tagName'] = bcgfe['toUpperCase'](), rpqns;
  }edifh['default'] = lijmn;
}, function (kjimh, kilhjg, onpmlk) {
  'use strict';
  Object['defineProperty'](kilhjg, '__esModule', { 'value': !0x0 });var rqops = onpmlk(0x6),
      pqnrom;(function (qopts, nsoqrp) {
    if ('function' != typeof nsoqrp && null !== nsoqrp) throw new TypeError('Super expression must either be null or a function, not ' + typeof nsoqrp);qopts['prototype'] = Object['create'](nsoqrp && nsoqrp['prototype'], { 'constructor': { 'value': qopts, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), nsoqrp && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](qopts, nsoqrp) : qopts['__proto__'] = nsoqrp);
  })(klnom, ((pqnrom = rqops) && pqnrom['__esModule'] ? pqnrom : { 'default': pqnrom })['default']), onpmlk = klnom;function klnom() {
    !function (gkjihf, gbfcd) {
      if (!(gkjihf instanceof gbfcd)) throw new TypeError('Cannot call a class as a function');
    }(this, klnom);var rsqnp = function (feghj, gilj) {
      if (!feghj) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !gilj || 'object' != typeof gilj && 'function' != typeof gilj ? feghj : gilj;
    }(this, (klnom['__proto__'] || Object['getPrototypeOf'](klnom))['call'](this));return rsqnp['className'] = '', rsqnp['children'] = [], rsqnp;
  }kilhjg['default'] = onpmlk;
}, function (vsxtyw, $xyzvw, gkhfj) {
  'use strict';
  Object['defineProperty']($xyzvw, '__esModule', { 'value': !0x0 });var knmloj = function (ejhi, gf, dfeabc) {
    return gf && swyvxt(ejhi['prototype'], gf), dfeabc && swyvxt(ejhi, dfeabc), ejhi;
  };function swyvxt(gchde, kjonm) {
    for (var kghl = 0x0; kghl < kjonm['length']; kghl++) {
      var qmnopl = kjonm[kghl];qmnopl['enumerable'] = qmnopl['enumerable'] || !0x1, qmnopl['configurable'] = !0x0, 'value' in qmnopl && (qmnopl['writable'] = !0x0), Object['defineProperty'](gchde, qmnopl['key'], qmnopl);
    }
  }var gcbd = gkhfj(0x7),
      kmljhi;(function (ehjgfi, khjfig) {
    if ('function' != typeof khjfig && null !== khjfig) throw new TypeError('Super expression must either be null or a function, not ' + typeof khjfig);ehjgfi['prototype'] = Object['create'](khjfig && khjfig['prototype'], { 'constructor': { 'value': ehjgfi, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), khjfig && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](ehjgfi, khjfig) : ehjgfi['__proto__'] = khjfig);
  })(jihgkf, ((kmljhi = gcbd) && kmljhi['__esModule'] ? kmljhi : { 'default': kmljhi })['default']), knmloj(jihgkf, [{ 'key': 'appendChild', 'value': function (z0$21_) {
      if (!(z0$21_ instanceof jihgkf)) throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');this['childNodes']['push'](z0$21_);
    } }, { 'key': 'cloneNode', 'value': function () {
      var txwrsv = Object['create'](this);return Object['assign'](txwrsv, this), txwrsv;
    } }, { 'key': 'removeChild', 'value': function (egdhfi) {
      var wtsxrv = this['childNodes']['findIndex'](function (lokjnm) {
        return lokjnm === egdhfi;
      });return -0x1 < wtsxrv ? this['childNodes']['splice'](wtsxrv, 0x1) : null;
    } }]), knmloj = jihgkf;function jihgkf() {
    !function (tzwyx, y_xz$) {
      if (!(tzwyx instanceof y_xz$)) throw new TypeError('Cannot call a class as a function');
    }(this, jihgkf);var rnpqs = function (hmljk, lihkg) {
      if (!hmljk) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !lihkg || 'object' != typeof lihkg && 'function' != typeof lihkg ? hmljk : lihkg;
    }(this, (jihgkf['__proto__'] || Object['getPrototypeOf'](jihgkf))['call'](this));return rnpqs['childNodes'] = [], rnpqs;
  }$xyzvw['default'] = knmloj;
}, function (khjfg, klmhij) {
  'use strict';
  Object['defineProperty'](klmhij, '__esModule', { 'value': !0x0 });var mlkin = function (y0, ecgh, ponqlm) {
    return ecgh && mpnlo(y0['prototype'], ecgh), ponqlm && mpnlo(y0, ponqlm), y0;
  };function mpnlo(pqvrst, ihgfk) {
    for (var lpoqm = 0x0; lpoqm < ihgfk['length']; lpoqm++) {
      var mklin = ihgfk[lpoqm];mklin['enumerable'] = mklin['enumerable'] || !0x1, mklin['configurable'] = !0x0, 'value' in mklin && (mklin['writable'] = !0x0), Object['defineProperty'](pqvrst, mklin['key'], mklin);
    }
  }var mknpo = new WeakMap();mlkin(ysxtvw, [{ 'key': 'addEventListener', 'value': function (prsvt, nmkjlo) {
      var fdehc = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {},
          vyzx$w = mknpo['get'](this);vyzx$w || mknpo['set'](this, vyzx$w = {}), vyzx$w[prsvt] || (vyzx$w[prsvt] = []), vyzx$w[prsvt]['push'](nmkjlo), fdehc['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), fdehc['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), fdehc['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
    } }, { 'key': 'removeEventListener', 'value': function (onplmq, gihfkj) {
      var fbce = mknpo['get'](this)[onplmq];if (fbce && 0x0 < fbce['length']) {
        for (var plonkm = fbce['length']; plonkm--;) if (fbce[plonkm] === gihfkj) {
          fbce['splice'](plonkm, 0x1);break;
        }
      }
    } }, { 'key': 'dispatchEvent', 'value': function () {
      var z_y = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {},
          jmlkn = mknpo['get'](this)[z_y['type']];if (jmlkn) {
        for (var hgejfi = 0x0; hgejfi < jmlkn['length']; hgejfi++) jmlkn[hgejfi](z_y);
      }
    } }]), mlkin = ysxtvw;function ysxtvw() {
    !function (cbadef, oqrstp) {
      if (!(cbadef instanceof oqrstp)) throw new TypeError('Cannot call a class as a function');
    }(this, ysxtvw), mknpo['set'](this, {});
  }klmhij['default'] = mlkin;
}, function (dfghe, glki) {
  'use strict';
  Object['defineProperty'](glki, '__esModule', { 'value': !0x0 }), glki['noop'] = function () {}, glki['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (onp, idefh, wrqsvt) {
  'use strict';
  Object['defineProperty'](idefh, '__esModule', { 'value': !0x0 }), idefh['default'] = function () {
    var fehc = wx['createCanvas']();return fehc['type'] = 'canvas', fehc['__proto__']['__proto__'] = new jhgfi['default']('canvas'), fehc['getContext'], (fehc['getBoundingClientRect'] = function () {
      return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
    }, fehc);
  }, wrqsvt(0x3);var jhgfi = njko(wrqsvt(0x4));njko(wrqsvt(0xa));function njko(jimhlk) {
    return jimhlk && jimhlk['__esModule'] ? jimhlk : { 'default': jimhlk };
  }
}, function (mqln, srqt, jhlk) {
  'use strict';
  Object['defineProperty'](srqt, '__esModule', { 'value': !0x0 });var pomnlq = function (z0y1_$) {
    {
      if (z0y1_$ && z0y1_$['__esModule']) return z0y1_$;var igj = {};if (null != z0y1_$) {
        for (var ehfdig in z0y1_$) Object['prototype']['hasOwnProperty']['call'](z0y1_$, ehfdig) && (igj[ehfdig] = z0y1_$[ehfdig]);
      }return igj['default'] = z0y1_$, igj;
    }
  }(jhlk(0x1)),
      fcg = stpvqr(jhlk(0x4)),
      mljk = stpvqr(jhlk(0xb)),
      omjnl = stpvqr(jhlk(0xc)),
      idefhg = stpvqr(jhlk(0x9));function stpvqr(mpolk) {
    return mpolk && mpolk['__esModule'] ? mpolk : { 'default': mpolk };
  }jhlk(0xf);var qoplnm = {},
      ghdfi = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': pomnlq, 'hidden': !0x1, 'style': {}, 'location': pomnlq['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new fcg['default']('head'), 'body': new fcg['default']('body'), 'createElement': function (vwyx$z) {
      return 'canvas' === vwyx$z ? new idefhg['default']() : 'audio' === vwyx$z ? new omjnl['default']() : 'img' === vwyx$z ? new mljk['default']() : new fcg['default'](vwyx$z);
    }, 'getElementById': function (jmlokn) {
      return jmlokn === pomnlq['canvas']['id'] ? pomnlq['canvas'] : null;
    }, 'getElementsByTagName': function (lpkmn) {
      return 'head' === lpkmn ? [ghdfi['head']] : 'body' === lpkmn ? [ghdfi['body']] : 'canvas' === lpkmn ? [pomnlq['canvas']] : [];
    }, 'querySelector': function (xy$z_) {
      return 'head' === xy$z_ ? ghdfi['head'] : 'body' === xy$z_ ? ghdfi['body'] : 'canvas' === xy$z_ || xy$z_ === '#' + pomnlq['canvas']['id'] ? pomnlq['canvas'] : null;
    }, 'querySelectorAll': function (orpstq) {
      return 'head' === orpstq ? [ghdfi['head']] : 'body' === orpstq ? [ghdfi['body']] : 'canvas' === orpstq ? [pomnlq['canvas']] : [];
    }, 'addEventListener': function (_z10$2, okjm) {
      qoplnm[_z10$2] || (qoplnm[_z10$2] = []), qoplnm[_z10$2]['push'](okjm);
    }, 'removeEventListener': function (nropmq, qmlnp) {
      var jlhkim = qoplnm[nropmq];if (jlhkim && 0x0 < jlhkim['length']) {
        for (var rpnsqo = jlhkim['length']; rpnsqo--;) if (jlhkim[rpnsqo] === qmlnp) {
          jlhkim['splice'](rpnsqo, 0x1);break;
        }
      }
    }, 'dispatchEvent': function (dceghf) {
      var rpqmn = qoplnm[dceghf['type']];if (rpqmn) {
        for (var $_wyx = 0x0; $_wyx < rpqmn['length']; $_wyx++) rpqmn[$_wyx](dceghf);
      }
    } };srqt['default'] = ghdfi;
}, function (ecbda, zw_xy) {
  'use strict';
  Object['defineProperty'](zw_xy, '__esModule', { 'value': !0x0 }), zw_xy['default'] = function () {
    return wx['createImage']();
  };
}, function (vxwz, jkfhg, jlkm) {
  'use strict';
  Object['defineProperty'](jkfhg, '__esModule', { 'value': !0x0 });var bcfaed = function (cfdgh, y_10$z, txzw) {
    return y_10$z && mlnokj(cfdgh['prototype'], y_10$z), txzw && mlnokj(cfdgh, txzw), cfdgh;
  };function mlnokj(jighl, ijmlkn) {
    for (var ideg = 0x0; ideg < ijmlkn['length']; ideg++) {
      var opmnk = ijmlkn[ideg];opmnk['enumerable'] = opmnk['enumerable'] || !0x1, opmnk['configurable'] = !0x0, 'value' in opmnk && (opmnk['writable'] = !0x0), Object['defineProperty'](jighl, opmnk['key'], opmnk);
    }
  }var jolk = jlkm(0xd),
      nkojm = (qlomn = jolk) && qlomn['__esModule'] ? qlomn : { 'default': qlomn },
      qlomn,
      ifhjge = jlkm(0x8);function ljgki(ebac, $31_2) {
    if (!ebac) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !$31_2 || 'object' != typeof $31_2 && 'function' != typeof $31_2 ? ebac : $31_2;
  }var xwz$v = 0x0,
      vpqr = 0x1,
      ecdfb = 0x2,
      lnq = 0x3,
      _10z = 0x4,
      ponqml = new WeakMap(),
      tpvsrq = new WeakMap();new WeakMap(), new WeakMap(), (function (lqno, srwvqt) {
    if ('function' != typeof srwvqt && null !== srwvqt) throw new TypeError('Super expression must either be null or a function, not ' + typeof srwvqt);lqno['prototype'] = Object['create'](srwvqt && srwvqt['prototype'], { 'constructor': { 'value': lqno, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), srwvqt && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](lqno, srwvqt) : lqno['__proto__'] = srwvqt);
  }(ighfde, nkojm['default']), bcfaed(ighfde, [{ 'key': 'load', 'value': function () {
      console['warn']('HTMLAudioElement.load() is not implemented.');
    } }, { 'key': 'play', 'value': function () {
      (0x0, ifhjge['isSubContext'])() || ponqml['get'](this)['play']();
    } }, { 'key': 'pause', 'value': function () {
      (0x0, ifhjge['isSubContext'])() || ponqml['get'](this)['pause']();
    } }, { 'key': 'canPlayType', 'value': function () {
      var ghljk = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return 'string' == typeof ghljk && (-0x1 < ghljk['indexOf']('audio/mpeg') || ghljk['indexOf']('audio/mp4')) ? 'probably' : '';
    } }, { 'key': 'cloneNode', 'value': function () {
      var lnmokp = new ighfde();return (0x0, ifhjge['isSubContext'])() || (lnmokp['loop'] = ponqml['get'](this)['loop'], lnmokp['autoplay'] = ponqml['get'](this)['loop'], lnmokp['src'] = this['src']), lnmokp;
    } }, { 'key': 'currentTime', 'get': function () {
      return (0x0, ifhjge['isSubContext'])() ? 0x0 : ponqml['get'](this)['currentTime'];
    }, 'set': function (lkpomn) {
      (0x0, ifhjge['isSubContext'])() || ponqml['get'](this)['seek'](lkpomn);
    } }, { 'key': 'src', 'get': function () {
      return tpvsrq['get'](this);
    }, 'set': function (tros) {
      tpvsrq['set'](this, tros), (0x0, ifhjge['isSubContext'])() || (ponqml['get'](this)['src'] = tros);
    } }, { 'key': 'loop', 'get': function () {
      return !(0x0, ifhjge['isSubContext'])() && ponqml['get'](this)['loop'];
    }, 'set': function (_20143) {
      (0x0, ifhjge['isSubContext'])() || (ponqml['get'](this)['loop'] = _20143);
    } }, { 'key': 'autoplay', 'get': function () {
      return !(0x0, ifhjge['isSubContext'])() && ponqml['get'](this)['autoplay'];
    }, 'set': function (vtxys) {
      (0x0, ifhjge['isSubContext'])() || (ponqml['get'](this)['autoplay'] = vtxys);
    } }, { 'key': 'paused', 'get': function () {
      return !(0x0, ifhjge['isSubContext'])() && ponqml['get'](this)['paused'];
    } }]), bcfaed = ighfde);function ighfde(mnojkl) {
    !function (igfeh, x$0_) {
      if (!(igfeh instanceof x$0_)) throw new TypeError('Cannot call a class as a function');
    }(this, ighfde);var ronq = ljgki(this, (ighfde['__proto__'] || Object['getPrototypeOf'](ighfde))['call'](this));if (ronq['HAVE_NOTHING'] = xwz$v, ronq['HAVE_METADATA'] = vpqr, ronq['HAVE_CURRENT_DATA'] = ecdfb, ronq['HAVE_FUTURE_DATA'] = lnq, ronq['HAVE_ENOUGH_DATA'] = _10z, ronq['readyState'] = xwz$v, (0x0, ifhjge['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), ljgki(ronq);tpvsrq['set'](ronq, '');var tvwrsx = wx['createInnerAudioContext']();return ponqml['set'](ronq, tvwrsx), tvwrsx['onCanplay'](function () {
      ronq['dispatchEvent']({ 'type': 'load' }), ronq['dispatchEvent']({ 'type': 'loadend' }), ronq['dispatchEvent']({ 'type': 'canplay' }), ronq['dispatchEvent']({ 'type': 'canplaythrough' }), ronq['dispatchEvent']({ 'type': 'loadedmetadata' }), ronq['readyState'] = ecdfb;
    }), tvwrsx['onPlay'](function () {
      ronq['dispatchEvent']({ 'type': 'play' });
    }), tvwrsx['onPause'](function () {
      ronq['dispatchEvent']({ 'type': 'pause' });
    }), tvwrsx['onEnded'](function () {
      ronq['dispatchEvent']({ 'type': 'ended' }), ronq['readyState'] = _10z;
    }), tvwrsx['onError'](function () {
      ronq['dispatchEvent']({ 'type': 'error' });
    }), mnojkl && (ponqml['get'](ronq)['src'] = mnojkl), ronq;
  }jkfhg['default'] = bcfaed;
}, function (dehfgi, hgjfik, jhgkl) {
  'use strict';
  Object['defineProperty'](hgjfik, '__esModule', { 'value': !0x0 });var onrsqp = jhgkl(0xe),
      y_z0x;(function (tyvs, cbfea) {
    if ('function' != typeof cbfea && null !== cbfea) throw new TypeError('Super expression must either be null or a function, not ' + typeof cbfea);tyvs['prototype'] = Object['create'](cbfea && cbfea['prototype'], { 'constructor': { 'value': tyvs, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), cbfea && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](tyvs, cbfea) : tyvs['__proto__'] = cbfea);
  })(qsvrp, ((y_z0x = onrsqp) && y_z0x['__esModule'] ? y_z0x : { 'default': y_z0x })['default']), jhgkl = qsvrp;function qsvrp() {
    return function (jmkin, klmj) {
      if (!(jmkin instanceof klmj)) throw new TypeError('Cannot call a class as a function');
    }(this, qsvrp), function (qorspt, ljhgki) {
      if (!qorspt) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !ljhgki || 'object' != typeof ljhgki && 'function' != typeof ljhgki ? qorspt : ljhgki;
    }(this, (qsvrp['__proto__'] || Object['getPrototypeOf'](qsvrp))['call'](this, 'audio'));
  }hgjfik['default'] = jhgkl;
}, function (de, qsnro, nljmok) {
  'use strict';
  Object['defineProperty'](qsnro, '__esModule', { 'value': !0x0 });var $0yxz = function (zwv$x, klopm, x0y$z_) {
    return klopm && oqpnrm(zwv$x['prototype'], klopm), x0y$z_ && oqpnrm(zwv$x, x0y$z_), zwv$x;
  };function oqpnrm(hkgfi, omkp) {
    for (var gkljhi = 0x0; gkljhi < omkp['length']; gkljhi++) {
      var srvwt = omkp[gkljhi];srvwt['enumerable'] = srvwt['enumerable'] || !0x1, srvwt['configurable'] = !0x0, 'value' in srvwt && (srvwt['writable'] = !0x0), Object['defineProperty'](hkgfi, srvwt['key'], srvwt);
    }
  }var hjlkg = nljmok(0x4),
      xstwyv;(function (ropmn, $13_0) {
    if ('function' != typeof $13_0 && null !== $13_0) throw new TypeError('Super expression must either be null or a function, not ' + typeof $13_0);ropmn['prototype'] = Object['create']($13_0 && $13_0['prototype'], { 'constructor': { 'value': ropmn, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), $13_0 && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](ropmn, $13_0) : ropmn['__proto__'] = $13_0);
  })(zyvwt, ((xstwyv = hjlkg) && xstwyv['__esModule'] ? xstwyv : { 'default': xstwyv })['default']), $0yxz(zyvwt, [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]), $0yxz = zyvwt;function zyvwt(_4203) {
    return function (xtsvrw, twqsvr) {
      if (!(xtsvrw instanceof twqsvr)) throw new TypeError('Cannot call a class as a function');
    }(this, zyvwt), function (lkhij, $_0y) {
      if (!lkhij) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !$_0y || 'object' != typeof $_0y && 'function' != typeof $_0y ? lkhij : $_0y;
    }(this, (zyvwt['__proto__'] || Object['getPrototypeOf'](zyvwt))['call'](this, _4203));
  }qsnro['default'] = $0yxz;
}, function (wtxrv, z_x, jhilk) {
  'use strict';
  jhilk(0x10);
}, function (psoqr, _1$zy, $xzy_w) {
  'use strict';
  var wsrvt = function (sqrwt) {
    {
      if (sqrwt && sqrwt['__esModule']) return sqrwt;var srtwqv = {};if (null != sqrwt) {
        for (var lknop in sqrwt) Object['prototype']['hasOwnProperty']['call'](sqrwt, lknop) && (srtwqv[lknop] = sqrwt[lknop]);
      }return srtwqv['default'] = sqrwt, srtwqv;
    }
  }($xzy_w(0x1)),
      qoprn = $xzy_w(0xa),
      ecdhfg = (dfeghc = qoprn) && dfeghc['__esModule'] ? dfeghc : { 'default': dfeghc },
      dfeghc,
      swvxtr = $xzy_w(0x8);function $023_($xywz_) {
    !function (yz1$0_, nijklm) {
      if (!(yz1$0_ instanceof nijklm)) throw new TypeError('Cannot call a class as a function');
    }(this, $023_), this['target'] = wsrvt['canvas'], this['currentTarget'] = wsrvt['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = swvxtr['noop'], this['stopPropagation'] = swvxtr['noop'], this['type'] = $xywz_;
  }function fecbd(z2$0) {
    return function (nilk) {
      var yvzwtx = new $023_(z2$0);yvzwtx['touches'] = nilk['touches'], yvzwtx['targetTouches'] = Array['prototype']['slice']['call'](nilk['touches']), yvzwtx['changedTouches'] = nilk['changedTouches'], yvzwtx['timeStamp'] = nilk['timeStamp'], ecdhfg['default']['dispatchEvent'](yvzwtx);
    };
  }wx['onTouchStart'](fecbd('touchstart')), wx['onTouchMove'](fecbd('touchmove')), wx['onTouchEnd'](fecbd('touchend')), wx['onTouchCancel'](fecbd('touchcancel'));
}, function (z210_$, cehfd) {
  'use strict';
  Object['defineProperty'](cehfd, '__esModule', { 'value': !0x0 }), cehfd['noop'] = function () {}, cehfd['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (gdhife, y$1z_0, fdgch) {
  'use strict';
  Object['defineProperty'](y$1z_0, '__esModule', { 'value': !0x0 }), fdgch = fdgch(0x8), fdgch = { 'platform': wx['getSystemInfoSync']()['platform'], 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': fdgch['noop'], 'watchPosition': fdgch['noop'], 'clearWatch': fdgch['noop'] } }, y$1z_0['default'] = fdgch;
}, function (npmo, mnopql) {
  'use strict';
  Object['defineProperty'](mnopql, '__esModule', { 'value': !0x0 });var dcfbg = function (dfebgc, oqspr, rtpqvs) {
    return oqspr && z20$(dfebgc['prototype'], oqspr), rtpqvs && z20$(dfebgc, rtpqvs), dfebgc;
  };function z20$(lhgjk, fgchd) {
    for (var imjhkl = 0x0; imjhkl < fgchd['length']; imjhkl++) {
      var vyzxt = fgchd[imjhkl];vyzxt['enumerable'] = vyzxt['enumerable'] || !0x1, vyzxt['configurable'] = !0x0, 'value' in vyzxt && (vyzxt['writable'] = !0x0), Object['defineProperty'](lhgjk, vyzxt['key'], vyzxt);
    }
  }var lmikjh = new WeakMap(),
      $_20z1 = new WeakMap(),
      vqrtp = new WeakMap(),
      hgjifk = new WeakMap(),
      giej = new WeakMap();function qrpons(hmjkli) {
    if ('function' == typeof this['on' + hmjkli]) {
      for (var jgieh = arguments['length'], stxvwr = Array(0x1 < jgieh ? jgieh - 0x1 : 0x0), y$0_x = 0x1; y$0_x < jgieh; y$0_x++) stxvwr[y$0_x - 0x1] = arguments[y$0_x];this['on' + hmjkli]['apply'](this, stxvwr);
    }
  }function lonqmp(imk) {
    this['readyState'] = imk, qrpons['call'](this, 'readystatechange');
  }dcfbg(hgde, [{ 'key': 'abort', 'value': function () {
      var gfech = giej['get'](this);gfech && gfech['abort']();
    } }, { 'key': 'getAllResponseHeaders', 'value': function () {
      var qlmopn = hgjifk['get'](this);return Object['keys'](qlmopn)['map'](function (jfhkgi) {
        return jfhkgi + ':\x20' + qlmopn[jfhkgi];
      })['join']('\x0a');
    } }, { 'key': 'getResponseHeader', 'value': function (qnsrp) {
      return hgjifk['get'](this)[qnsrp];
    } }, { 'key': 'open', 'value': function (hgcdef, qsrtv) {
      $_20z1['set'](this, hgcdef), lmikjh['set'](this, qsrtv), lonqmp['call'](this, hgde['OPENED']);
    } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function () {
      var twsvxr = this,
          wvxsty = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';if (this['readyState'] !== hgde['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');wx['request']({ 'data': wvxsty, 'url': lmikjh['get'](this), 'method': $_20z1['get'](this), 'header': vqrtp['get'](this), 'responseType': this['responseType'], 'success': function (mnqopl) {
          var fcedbg = mnqopl['data'],
              soptq = mnqopl['statusCode'],
              mnqopl = mnqopl['header'];if ('string' != typeof fcedbg && !(fcedbg instanceof ArrayBuffer)) try {
            fcedbg = JSON['stringify'](fcedbg);
          } catch (minklj) {}if (twsvxr['status'] = soptq, hgjifk['set'](twsvxr, mnqopl), qrpons['call'](twsvxr, 'loadstart'), lonqmp['call'](twsvxr, hgde['HEADERS_RECEIVED']), lonqmp['call'](twsvxr, hgde['LOADING']), (twsvxr['response'] = fcedbg) instanceof ArrayBuffer) {
            twsvxr['responseText'] = '';var gkijl = new Uint8Array(fcedbg),
                mlhkji = gkijl['byteLength'];for (var tvwsrq = 0x0; tvwsrq < mlhkji; tvwsrq++) twsvxr['responseText'] += String['fromCharCode'](gkijl[tvwsrq]);
          } else twsvxr['responseText'] = fcedbg;lonqmp['call'](twsvxr, hgde['DONE']), qrpons['call'](twsvxr, 'load'), qrpons['call'](twsvxr, 'loadend');
        }, 'fail': function (twvrxs) {
          twvrxs = twvrxs['errMsg'], (-0x1 !== twvrxs['indexOf']('abort') ? qrpons['call'](twsvxr, 'abort') : qrpons['call'](twsvxr, 'error', twvrxs), qrpons['call'](twsvxr, 'loadend'));
        } });
    } }, { 'key': 'setRequestHeader', 'value': function (debfcg, zx_0) {
      var mhjkli = vqrtp['get'](this);mhjkli[debfcg] = zx_0, vqrtp['set'](this, mhjkli);
    } }]), dcfbg = hgde;function hgde() {
    !function (pnqsr, cebgdf) {
      if (!(pnqsr instanceof cebgdf)) throw new TypeError('Cannot call a class as a function');
    }(this, hgde), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = !0x1, vqrtp['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), hgjifk['set'](this, {});
  }dcfbg['UNSEND'] = 0x0, dcfbg['OPENED'] = 0x1, dcfbg['HEADERS_RECEIVED'] = 0x2, dcfbg['LOADING'] = 0x3, dcfbg['DONE'] = 0x4, mnopql['default'] = dcfbg;
}, function (njilmk, jmko, vqtrs) {
  'use strict';
  Object['defineProperty'](jmko, '__esModule', { 'value': !0x0 });var ji = function (xv$wz, dgehfi, pknlm) {
    return dgehfi && fdecab(xv$wz['prototype'], dgehfi), pknlm && fdecab(xv$wz, pknlm), xv$wz;
  };function fdecab(gfeijh, vrpq) {
    for (var vrqsp = 0x0; vrqsp < vrpq['length']; vrqsp++) {
      var lijhmk = vrpq[vrqsp];lijhmk['enumerable'] = lijhmk['enumerable'] || !0x1, lijhmk['configurable'] = !0x0, 'value' in lijhmk && (lijhmk['writable'] = !0x0), Object['defineProperty'](gfeijh, lijhmk['key'], lijhmk);
    }
  }var xywvts = vqtrs(0x8),
      $120z = new WeakMap();ji(dgefb, [{ 'key': 'close', 'value': function (acbe, lnmkj) {
      this['readyState'] = dgefb['CLOSING'], $120z['get'](this)['close']({ 'code': acbe, 'reason': lnmkj });
    } }, { 'key': 'send', 'value': function (xywtvs) {
      if ('string' != typeof xywtvs && !(xywtvs instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + xywtvs + ' is invalid');$120z['get'](this)['send']({ 'data': xywtvs });
    } }]), ji = dgefb;function dgefb(ptsor) {
    var $xwzv = this,
        efhigd = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function (y1_$0, qptrso) {
      if (!(y1_$0 instanceof qptrso)) throw new TypeError('Cannot call a class as a function');
    }(this, dgefb), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, (0x0, xywvts['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if ('string' != typeof ptsor || !/(^ws:\/\/)|(^wss:\/\/)/['test'](ptsor)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + ptsor + '\' is invalid');return this['url'] = ptsor, this['readyState'] = dgefb['CONNECTING'], efhigd = wx['connectSocket']({ 'url': ptsor, 'protocols': Array['isArray'](efhigd) ? efhigd : [efhigd] }), ($120z['set'](this, efhigd), efhigd['onClose'](function (mpokn) {
      $xwzv['readyState'] = dgefb['CLOSED'], 'function' == typeof $xwzv['onclose'] && $xwzv['onclose'](mpokn);
    }), efhigd['onMessage'](function (klhmj) {
      'function' == typeof $xwzv['onmessage'] && $xwzv['onmessage'](klhmj);
    }), efhigd['onOpen'](function () {
      $xwzv['readyState'] = dgefb['OPEN'], 'function' == typeof $xwzv['onopen'] && $xwzv['onopen']();
    }), efhigd['onError'](function (lnmkji) {
      'function' == typeof $xwzv['onerror'] && $xwzv['onerror'](new Error(lnmkji['errMsg']));
    }), this);
  }ji['CONNECTING'] = 0x0, ji['OPEN'] = 0x1, ji['CLOSING'] = 0x2, ji['CLOSED'] = 0x3, jmko['default'] = ji;
}, function (gdihfe, nmrpo, ihfgj) {
  'use strict';
  Object['defineProperty'](nmrpo, '__esModule', { 'value': !0x0 });var w$vy = function (gcdhef, vsrqt, nmkojl) {
    return vsrqt && mkopnl(gcdhef['prototype'], vsrqt), nmkojl && mkopnl(gcdhef, nmkojl), gcdhef;
  };function mkopnl(mhl, jkmilh) {
    for (var efjhg = 0x0; efjhg < jkmilh['length']; efjhg++) {
      var rpoqn = jkmilh[efjhg];rpoqn['enumerable'] = rpoqn['enumerable'] || !0x1, rpoqn['configurable'] = !0x0, 'value' in rpoqn && (rpoqn['writable'] = !0x0), Object['defineProperty'](mhl, rpoqn['key'], rpoqn);
    }
  }var ywtsxv = ihfgj(0x8);w$vy(z$wyx_, [{ 'key': 'construct', 'value': function () {
      if ((0x0, ywtsxv['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
    } }]), w$vy = z$wyx_;function z$wyx_() {
    !function (zy01_$, _201$z) {
      if (!(zy01_$ instanceof _201$z)) throw new TypeError('Cannot call a class as a function');
    }(this, z$wyx_);
  }nmrpo['default'] = w$vy;
}, function (z$_02, ecdab, vstq) {
  'use strict';
  Object['defineProperty'](ecdab, '__esModule', { 'value': !0x0 });var jklno = vstq(0x8),
      kjmhl = { get 'length'() {
      return wx['getStorageInfoSync']()['keys']['length'];
    }, 'key': function (vzw$xy) {
      return wx['getStorageInfoSync']()['keys'][vzw$xy];
    }, 'getItem': function ($z0_xy) {
      return wx['getStorageSync']($z0_xy);
    }, 'setItem': function (afcdbe, $1_03) {
      return wx['setStorageSync'](afcdbe, $1_03);
    }, 'removeItem': function (hjklmi) {
      wx['removeStorageSync'](hjklmi);
    }, 'clear': function () {
      wx['clearStorageSync']();
    } },
      fehjig = {};vstq = { get 'length'() {
      return Object['keys'](fehjig)['length'];
    }, 'key': function ($y0zx_) {
      return Object['keys'](fehjig)[$y0zx_];
    }, 'getItem': function (swtx) {
      return fehjig[swtx];
    }, 'setItem': function (zx$_wy, kjilhm) {
      fehjig[zx$_wy] = kjilhm;
    }, 'removeItem': function (monq) {
      delete fehjig[monq];
    }, 'clear': function () {
      fehjig = {};
    } }, kjmhl = (0x0, jklno['isSubContext'])() ? vstq : kjmhl, ecdab['default'] = kjmhl;
}, function (gjkl, sqtpo) {
  'use strict';
  Object['defineProperty'](sqtpo, '__esModule', { 'value': !0x0 }), sqtpo['default'] = { 'href': 'cccgame.js', 'reload': function () {} };
}]);