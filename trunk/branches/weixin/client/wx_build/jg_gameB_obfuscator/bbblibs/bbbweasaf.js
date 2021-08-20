var _ = wx.y$;
var _dceadfb = wx['y$'],
    _dz0_yx$ = wx['y$'],
    _drqop = wx['y$'];!function (wz$x_) {
  var jgkf = {};function __webpack_require__($y0_z) {
    if (jgkf[$y0_z]) return jgkf[$y0_z]['exports'];var vwuty = jgkf[$y0_z] = { 'exports': {}, 'id': $y0_z, 'loaded': !0x1 };return wz$x_[$y0_z]['call'](vwuty['exports'], vwuty, vwuty['exports'], __webpack_require__), vwuty['loaded'] = !0x0, vwuty['exports'];
  }__webpack_require__['m'] = wz$x_, __webpack_require__['c'] = jgkf, __webpack_require__['p'] = '', __webpack_require__(0x0);
}([function (gkihf, cde, nqpor) {
  'use strict';

  var mplkon = function ($_2z01) {
    if ($_2z01 && $_2z01['__esModule']) return $_2z01;var tsrvw = {};if (null != $_2z01) {
      for (var dfcbea in $_2z01) Object['prototype']['hasOwnProperty']['call']($_2z01, dfcbea) && (tsrvw[dfcbea] = $_2z01[dfcbea]);
    }return tsrvw['default'] = $_2z01, tsrvw;
  }(nqpor(0x1));nqpor = nqpor(0x4);var bdfceg = nqpor && nqpor['__esModule'] ? nqpor : { 'default': nqpor },
      xvyw$z = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
    mplkon['addEventListener'] = function (tuvsq, knlimj) {
      mplkon['document']['addEventListener'](tuvsq, knlimj);
    }, mplkon['removeEventListener'] = function (wzx$_, kjlmi) {
      mplkon['document']['removeEventListener'](wzx$_, kjlmi);
    }, mplkon['canvas'] && (mplkon['canvas']['addEventListener'] = mplkon['addEventListener'], mplkon['canvas']['removeEventListener'] = mplkon['removeEventListener']), xvyw$z['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new bdfceg['default']('canvas'), sharedCanvas['addEventListener'] = mplkon['addEventListener'], sharedCanvas['removeEventListener'] = mplkon['removeEventListener']);var ijfhge = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === ijfhge) {
      for (var z0y1_$ in mplkon) {
        var ywuvxz = Object['getOwnPropertyDescriptor'](xvyw$z, z0y1_$);ywuvxz && !0x0 !== ywuvxz['configurable'] || Object['defineProperty'](window, z0y1_$, { 'value': mplkon[z0y1_$] });
      }for (var gkif in mplkon['document']) {
        var edbcfa = Object['getOwnPropertyDescriptor'](xvyw$z['document'], gkif);edbcfa && !0x0 !== edbcfa['configurable'] || Object['defineProperty'](xvyw$z['document'], gkif, { 'value': mplkon['document'][gkif] });
      }window['parent'] = window;
    } else {
      for (var pmk in mplkon) xvyw$z[pmk] = mplkon[pmk];xvyw$z['window'] = mplkon, window = xvyw$z, window['top'] = window['parent'] = window;
    }
  }());
}, function (cbgdf, _02, mkihlj) {
  'use strict';

  Object['defineProperty'](_02, '__esModule', { 'value': !0x0 }), _02['cancelAnimationFrame'] = _02['requestAnimationFrame'] = _02['clearInterval'] = _02['clearTimeout'] = _02['setInterval'] = _02['setTimeout'] = _02['canvas'] = _02['location'] = _02['localStorage'] = _02['HTMLElement'] = _02['FileReader'] = _02['Audio'] = _02['Image'] = _02['WebSocket'] = _02['XMLHttpRequest'] = _02['navigator'] = _02['document'] = void 0x0;var noqpm = mkihlj(0x2);Object['keys'](noqpm)['forEach'](function (y0$_z) {
    'default' !== y0$_z && '__esModule' !== y0$_z && Object['defineProperty'](_02, y0$_z, { 'enumerable': !0x0, 'get': function () {
        return noqpm[y0$_z];
      } });
  });var xvytwu = mkihlj(0x3);Object['keys'](xvytwu)['forEach'](function (tprqs) {
    'default' !== tprqs && '__esModule' !== tprqs && Object['defineProperty'](_02, tprqs, { 'enumerable': !0x0, 'get': function () {
        return xvytwu[tprqs];
      } });
  });var kghjif = defch(mkihlj(0x9)),
      moj = mkihlj(0x11),
      konl = defch(mkihlj(0xa)),
      $wyxz_ = defch(mkihlj(0x12)),
      qrpstu = defch(mkihlj(0x13)),
      hecf = defch(mkihlj(0x14)),
      mlhji = defch(mkihlj(0xb)),
      jkglhi = defch(mkihlj(0xc)),
      olqnm = defch(mkihlj(0x15)),
      txuyvw = defch(mkihlj(0x4)),
      _$2z01 = defch(mkihlj(0x16));function defch($zxvw) {
    return $zxvw && $zxvw['__esModule'] ? $zxvw : { 'default': $zxvw };
  }mkihlj = defch(mkihlj(0x17)), _02['document'] = konl['default'], _02['navigator'] = $wyxz_['default'], _02['XMLHttpRequest'] = qrpstu['default'], _02['WebSocket'] = hecf['default'], _02['Image'] = mlhji['default'], _02['Audio'] = jkglhi['default'], _02['FileReader'] = olqnm['default'], _02['HTMLElement'] = txuyvw['default'], _02['localStorage'] = _$2z01['default'], _02['location'] = mkihlj['default'], kghjif = (0x0, moj['isSubContext'])() ? void 0x0 : new kghjif['default'](), _02['canvas'] = kghjif, _02['setTimeout'] = setTimeout, _02['setInterval'] = setInterval, _02['clearTimeout'] = clearTimeout, _02['clearInterval'] = clearInterval, _02['requestAnimationFrame'] = requestAnimationFrame, _02['cancelAnimationFrame'] = cancelAnimationFrame;
}, function (ihkfj, qtsvru) {
  'use strict';

  Object['defineProperty'](qtsvru, '__esModule', { 'value': !0x0 });var ebfcgd = (_01$ = wx['getSystemInfoSync']())['screenWidth'],
      _0yz$1 = _01$['screenHeight'],
      _01$ = _01$['devicePixelRatio'];ebfcgd = qtsvru['innerWidth'] = ebfcgd, _0yz$1 = qtsvru['innerHeight'] = _0yz$1, qtsvru['devicePixelRatio'] = _01$, qtsvru['screen'] = { 'availWidth': ebfcgd, 'availHeight': _0yz$1 }, qtsvru['performance'] = { 'now': function () {
      return Date['now']() / 0x3e8;
    } }, qtsvru['ontouchstart'] = null, qtsvru['ontouchmove'] = null, qtsvru['ontouchend'] = null;
}, function (suxwt, $_xwz, nojmlk) {
  'use strict';

  Object['defineProperty']($_xwz, '__esModule', { 'value': !0x0 }), $_xwz['HTMLCanvasElement'] = $_xwz['HTMLImageElement'] = void 0x0;var mkonl = nojmlk(0x4);function kmhil(ponrs, yzuv) {
    if (!(ponrs instanceof yzuv)) throw new TypeError('Cannot call a class as a function');
  }function wtusrv(tsvuwr, z_$x0y) {
    if (!tsvuwr) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !z_$x0y || 'object' != typeof z_$x0y && 'function' != typeof z_$x0y ? tsvuwr : z_$x0y;
  }function sutvxw(rqvtus, gefhcd) {
    if ('function' != typeof gefhcd && null !== gefhcd) throw new TypeError('Super expression must either be null or a function, not ' + typeof gefhcd);rqvtus['prototype'] = Object['create'](gefhcd && gefhcd['prototype'], { 'constructor': { 'value': rqvtus, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), gefhcd && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](rqvtus, gefhcd) : rqvtus['__proto__'] = gefhcd);
  }function jigfh() {
    return kmhil(this, jigfh), wtusrv(this, (jigfh['__proto__'] || Object['getPrototypeOf'](jigfh))['call'](this, 'img'));
  }function twsux() {
    return kmhil(this, twsux), wtusrv(this, (twsux['__proto__'] || Object['getPrototypeOf'](twsux))['call'](this, 'canvas'));
  }nojmlk = mkonl && mkonl['__esModule'] ? mkonl : { 'default': mkonl }, $_xwz['HTMLImageElement'] = (sutvxw(jigfh, nojmlk['default']), jigfh), $_xwz['HTMLCanvasElement'] = (sutvxw(twsux, nojmlk['default']), twsux);
}, function (knomjl, hdgcf, kjfih) {
  'use strict';

  Object['defineProperty'](hdgcf, '__esModule', { 'value': !0x0 });var tvwsr = function (onpmrq, qnmo, lnji) {
    return qnmo && kgihlj(onpmrq['prototype'], qnmo), lnji && kgihlj(onpmrq, lnji), onpmrq;
  };function kgihlj(fijhe, uprst) {
    for (var mklni = 0x0; mklni < uprst['length']; mklni++) {
      var nokm = uprst[mklni];nokm['enumerable'] = nokm['enumerable'] || !0x1, nokm['configurable'] = !0x0, 'value' in nokm && (nokm['writable'] = !0x0), Object['defineProperty'](fijhe, nokm['key'], nokm);
    }
  }var njmko = kjfih(0x5);njmko = njmko && njmko['__esModule'] ? njmko : { 'default': njmko };var hfgik = kjfih(0x8),
      oqmnp = kjfih(0x2);function qnposr() {
    var jihkml = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';!function (rosqt) {
      if (!(rosqt instanceof qnposr)) throw new TypeError('Cannot call a class as a function');
    }(this);var vqrsut = function (x0$_y, vtsxw) {
      if (!x0$_y) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !vtsxw || 'object' != typeof vtsxw && 'function' != typeof vtsxw ? x0$_y : vtsxw;
    }(this, (qnposr['__proto__'] || Object['getPrototypeOf'](qnposr))['call'](this));return vqrsut['className'] = '', vqrsut['childern'] = [], vqrsut['style'] = { 'width': oqmnp['innerWidth'] + 'px', 'height': oqmnp['innerHeight'] + 'px' }, vqrsut['insertBefore'] = hfgik['noop'], vqrsut['innerHTML'] = '', vqrsut['tagName'] = jihkml['toUpperCase'](), vqrsut;
  }(function (ustwr, rptusq) {
    if ('function' != typeof rptusq && null !== rptusq) throw new TypeError('Super expression must either be null or a function, not ' + typeof rptusq);ustwr['prototype'] = Object['create'](rptusq && rptusq['prototype'], { 'constructor': { 'value': ustwr, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), rptusq && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](ustwr, rptusq) : ustwr['__proto__'] = rptusq);
  })(qnposr, njmko['default']), tvwsr(qnposr, [{ 'key': 'setAttribute', 'value': function (lmok, osprqn) {
      this[lmok] = osprqn;
    } }, { 'key': 'getAttribute', 'value': function (yz1$0_) {
      return this[yz1$0_];
    } }, { 'key': 'getBoundingClientRect', 'value': function () {
      return { 'top': 0x0, 'left': 0x0, 'width': oqmnp['innerWidth'], 'height': oqmnp['innerHeight'] };
    } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
      var ijmlnk = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](ijmlnk) ? 0x0 : ijmlnk;
    } }, { 'key': 'clientHeight', 'get': function () {
      var jhkfg = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](jhkfg) ? 0x0 : jhkfg;
    } }]), tvwsr = qnposr, hdgcf['default'] = tvwsr;
}, function (ptrqsu, khjm, _wy) {
  'use strict';

  Object['defineProperty'](khjm, '__esModule', { 'value': !0x0 });var edfghc = _wy(0x6);function tpqru() {
    !function (sotrqp) {
      if (!(sotrqp instanceof tpqru)) throw new TypeError('Cannot call a class as a function');
    }(this);var mpnklo = function (z$_y, fgje) {
      if (!z$_y) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !fgje || 'object' != typeof fgje && 'function' != typeof fgje ? z$_y : fgje;
    }(this, (tpqru['__proto__'] || Object['getPrototypeOf'](tpqru))['call'](this));return mpnklo['className'] = '', mpnklo['children'] = [], mpnklo;
  }(function (vsuxw, utrqps) {
    if ('function' != typeof utrqps && null !== utrqps) throw new TypeError('Super expression must either be null or a function, not ' + typeof utrqps);vsuxw['prototype'] = Object['create'](utrqps && utrqps['prototype'], { 'constructor': { 'value': vsuxw, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), utrqps && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](vsuxw, utrqps) : vsuxw['__proto__'] = utrqps);
  })(tpqru, (edfghc && edfghc['__esModule'] ? edfghc : { 'default': edfghc })['default']), _wy = tpqru, khjm['default'] = _wy;
}, function (mnplo, dgfebc, suvtrw) {
  'use strict';

  Object['defineProperty'](dgfebc, '__esModule', { 'value': !0x0 });var mqnro = function (kjonlm, uwyzx, fgeidh) {
    return uwyzx && ijmnk(kjonlm['prototype'], uwyzx), fgeidh && ijmnk(kjonlm, fgeidh), kjonlm;
  };function ijmnk(ihdfg, lnqpm) {
    for (var srtquv = 0x0; srtquv < lnqpm['length']; srtquv++) {
      var mlnojk = lnqpm[srtquv];mlnojk['enumerable'] = mlnojk['enumerable'] || !0x1, mlnojk['configurable'] = !0x0, 'value' in mlnojk && (mlnojk['writable'] = !0x0), Object['defineProperty'](ihdfg, mlnojk['key'], mlnojk);
    }
  }suvtrw = suvtrw(0x7);function zvx$() {
    !function (z$_xyw) {
      if (!(z$_xyw instanceof zvx$)) throw new TypeError('Cannot call a class as a function');
    }(this);var linj = function (ihlkjg, ptsoq) {
      if (!ihlkjg) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !ptsoq || 'object' != typeof ptsoq && 'function' != typeof ptsoq ? ihlkjg : ptsoq;
    }(this, (zvx$['__proto__'] || Object['getPrototypeOf'](zvx$))['call'](this));return linj['childNodes'] = [], linj;
  }(function (pomnqr, pknlm) {
    if ('function' != typeof pknlm && null !== pknlm) throw new TypeError('Super expression must either be null or a function, not ' + typeof pknlm);pomnqr['prototype'] = Object['create'](pknlm && pknlm['prototype'], { 'constructor': { 'value': pomnqr, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), pknlm && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](pomnqr, pknlm) : pomnqr['__proto__'] = pknlm);
  })(zvx$, (suvtrw && suvtrw['__esModule'] ? suvtrw : { 'default': suvtrw })['default']), mqnro(zvx$, [{ 'key': 'appendChild', 'value': function (_0$321) {
      if (!(_0$321 instanceof zvx$)) throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');this['childNodes']['push'](_0$321);
    } }, { 'key': 'cloneNode', 'value': function () {
      var jhiklg = Object['create'](this);return Object['assign'](jhiklg, this), jhiklg;
    } }, { 'key': 'removeChild', 'value': function (egdcfb) {
      var dhgi = this['childNodes']['findIndex'](function (fcadeb) {
        return fcadeb === egdcfb;
      });return -0x1 < dhgi ? this['childNodes']['splice'](dhgi, 0x1) : null;
    } }]), mqnro = zvx$, dgfebc['default'] = mqnro;
}, function (x$0_yz, gidh) {
  'use strict';

  Object['defineProperty'](gidh, '__esModule', { 'value': !0x0 });var urvts = function (kiljm, xzwuyv, xvtusw) {
    return xzwuyv && lhkm(kiljm['prototype'], xzwuyv), xvtusw && lhkm(kiljm, xvtusw), kiljm;
  };function lhkm(orqmpn, jkilmn) {
    for (var jmknli = 0x0; jmknli < jkilmn['length']; jmknli++) {
      var mkh = jkilmn[jmknli];mkh['enumerable'] = mkh['enumerable'] || !0x1, mkh['configurable'] = !0x0, 'value' in mkh && (mkh['writable'] = !0x0), Object['defineProperty'](orqmpn, mkh['key'], mkh);
    }
  }var kponm = new WeakMap();function nroqps() {
    !function (wsvr) {
      if (!(wsvr instanceof nroqps)) throw new TypeError('Cannot call a class as a function');
    }(this), kponm['set'](this, {});
  }urvts(nroqps, [{ 'key': 'addEventListener', 'value': function (surtvw, njiml) {
      var ejgi = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {},
          _z102 = kponm['get'](this);_z102 || kponm['set'](this, _z102 = {}), _z102[surtvw] || (_z102[surtvw] = []), _z102[surtvw]['push'](njiml), ejgi['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), ejgi['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), ejgi['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
    } }, { 'key': 'removeEventListener', 'value': function (hiljm, $_xz0) {
      var hiegd = kponm['get'](this)[hiljm];if (hiegd && 0x0 < hiegd['length']) {
        for (var sqnro = hiegd['length']; sqnro--;) if (hiegd[sqnro] === $_xz0) {
          hiegd['splice'](sqnro, 0x1);break;
        }
      }
    } }, { 'key': 'dispatchEvent', 'value': function () {
      var dbfecg = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {},
          hmkjil = kponm['get'](this)[dbfecg['type']];if (hmkjil) {
        for (var jigkhl = 0x0; jigkhl < hmkjil['length']; jigkhl++) hmkjil[jigkhl](dbfecg);
      }
    } }]), gidh['default'] = nroqps;
}, function (uvwytx, y_1$0z) {
  'use strict';

  Object['defineProperty'](y_1$0z, '__esModule', { 'value': !0x0 }), y_1$0z['noop'] = function () {}, y_1$0z['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (bcda, $xzwy, okml) {
  'use strict';

  Object['defineProperty']($xzwy, '__esModule', { 'value': !0x0 }), $xzwy['default'] = function () {
    var qtorp = wx['createCanvas']();return qtorp['type'] = 'canvas', qtorp['__proto__']['__proto__'] = new $y0x_['default']('canvas'), qtorp['getContext'], qtorp['getBoundingClientRect'] = function () {
      return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
    }, qtorp;
  }, okml(0x3);var $y0x_ = v$wyz(okml(0x4));function v$wyz(ide) {
    return ide && ide['__esModule'] ? ide : { 'default': ide };
  }v$wyz(okml(0xa));
}, function (nopl, uqrst, snpor) {
  'use strict';

  Object['defineProperty'](uqrst, '__esModule', { 'value': !0x0 });var efighj = function (xwy$zv) {
    if (xwy$zv && xwy$zv['__esModule']) return xwy$zv;var kjfgih = {};if (null != xwy$zv) {
      for (var wvx$yz in xwy$zv) Object['prototype']['hasOwnProperty']['call'](xwy$zv, wvx$yz) && (kjfgih[wvx$yz] = xwy$zv[wvx$yz]);
    }return kjfgih['default'] = xwy$zv, kjfgih;
  }(snpor(0x1)),
      xwyvt = ojklm(snpor(0x4)),
      egjfh = ojklm(snpor(0xb)),
      dcg = ojklm(snpor(0xc)),
      _wz$yx = ojklm(snpor(0x9));function ojklm(ojknl) {
    return ojknl && ojknl['__esModule'] ? ojknl : { 'default': ojknl };
  }snpor(0xf);var uyvwzx = {},
      nqompr = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': efighj, 'hidden': !0x1, 'style': {}, 'location': efighj['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new xwyvt['default']('head'), 'body': new xwyvt['default']('body'), 'createElement': function (qrstuv) {
      return 'canvas' === qrstuv ? new _wz$yx['default']() : 'audio' === qrstuv ? new dcg['default']() : 'img' === qrstuv ? new egjfh['default']() : new xwyvt['default'](qrstuv);
    }, 'getElementById': function (z2_) {
      return z2_ === efighj['canvas']['id'] ? efighj['canvas'] : null;
    }, 'getElementsByTagName': function (ikgfj) {
      return 'head' === ikgfj ? [nqompr['head']] : 'body' === ikgfj ? [nqompr['body']] : 'canvas' === ikgfj ? [efighj['canvas']] : [];
    }, 'querySelector': function (rot) {
      return 'head' === rot ? nqompr['head'] : 'body' === rot ? nqompr['body'] : 'canvas' === rot || rot === '#' + efighj['canvas']['id'] ? efighj['canvas'] : null;
    }, 'querySelectorAll': function (aedcb) {
      return 'head' === aedcb ? [nqompr['head']] : 'body' === aedcb ? [nqompr['body']] : 'canvas' === aedcb ? [efighj['canvas']] : [];
    }, 'addEventListener': function (qmnpl, rvtusq) {
      uyvwzx[qmnpl] || (uyvwzx[qmnpl] = []), uyvwzx[qmnpl]['push'](rvtusq);
    }, 'removeEventListener': function (z2$0, uyzxw) {
      var _0y1$ = uyvwzx[z2$0];if (_0y1$ && 0x0 < _0y1$['length']) {
        for (var fdcaeb = _0y1$['length']; fdcaeb--;) if (_0y1$[fdcaeb] === uyzxw) {
          _0y1$['splice'](fdcaeb, 0x1);break;
        }
      }
    }, 'dispatchEvent': function (sopq) {
      var sprqt = uyvwzx[sopq['type']];if (sprqt) {
        for (var orqsn = 0x0; orqsn < sprqt['length']; orqsn++) sprqt[orqsn](sopq);
      }
    } };uqrst['default'] = nqompr;
}, function (nojkml, zvuwy) {
  'use strict';

  Object['defineProperty'](zvuwy, '__esModule', { 'value': !0x0 }), zvuwy['default'] = function () {
    return wx['createImage']();
  };
}, function (gfi, zyxv$, hdefi) {
  'use strict';

  Object['defineProperty'](zyxv$, '__esModule', { 'value': !0x0 });var vtsqr = function (hcegdf, z$xvw, mplko) {
    return z$xvw && uzywv(hcegdf['prototype'], z$xvw), mplko && uzywv(hcegdf, mplko), hcegdf;
  };function uzywv(lnkpmo, fcbdae) {
    for (var kghjl = 0x0; kghjl < fcbdae['length']; kghjl++) {
      var kjmni = fcbdae[kghjl];kjmni['enumerable'] = kjmni['enumerable'] || !0x1, kjmni['configurable'] = !0x0, 'value' in kjmni && (kjmni['writable'] = !0x0), Object['defineProperty'](lnkpmo, kjmni['key'], kjmni);
    }
  }var rnmop = hdefi(0xd);rnmop = rnmop && rnmop['__esModule'] ? rnmop : { 'default': rnmop };var beacfd = hdefi(0x8);function cefbgd(tvqrs, vuqrst) {
    if (!tvqrs) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !vuqrst || 'object' != typeof vuqrst && 'function' != typeof vuqrst ? tvqrs : vuqrst;
  }var stuqrv = 0x0,
      mjkl = 0x1,
      sorpqn = 0x2,
      $21_z0 = 0x3,
      wsutvr = 0x4,
      giklhj = new WeakMap(),
      dcfbge = new WeakMap();function dcfbeg(kfhjg) {
    !function (jlnok) {
      if (!(jlnok instanceof dcfbeg)) throw new TypeError('Cannot call a class as a function');
    }(this);var pur = cefbgd(this, (dcfbeg['__proto__'] || Object['getPrototypeOf'](dcfbeg))['call'](this));if (pur['HAVE_NOTHING'] = stuqrv, pur['HAVE_METADATA'] = mjkl, pur['HAVE_CURRENT_DATA'] = sorpqn, pur['HAVE_FUTURE_DATA'] = $21_z0, pur['HAVE_ENOUGH_DATA'] = wsutvr, pur['readyState'] = stuqrv, (0x0, beacfd['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), cefbgd(pur);dcfbge['set'](pur, '');var kljnim = wx['createInnerAudioContext']();return giklhj['set'](pur, kljnim), kljnim['onCanplay'](function () {
      pur['dispatchEvent']({ 'type': 'load' }), pur['dispatchEvent']({ 'type': 'loadend' }), pur['dispatchEvent']({ 'type': 'canplay' }), pur['dispatchEvent']({ 'type': 'canplaythrough' }), pur['dispatchEvent']({ 'type': 'loadedmetadata' }), pur['readyState'] = sorpqn;
    }), kljnim['onPlay'](function () {
      pur['dispatchEvent']({ 'type': 'play' });
    }), kljnim['onPause'](function () {
      pur['dispatchEvent']({ 'type': 'pause' });
    }), kljnim['onEnded'](function () {
      pur['dispatchEvent']({ 'type': 'ended' }), pur['readyState'] = wsutvr;
    }), kljnim['onError'](function () {
      pur['dispatchEvent']({ 'type': 'error' });
    }), kfhjg && (giklhj['get'](pur)['src'] = kfhjg), pur;
  }new WeakMap(), new WeakMap(), function (utwsvx, moqrn) {
    if ('function' != typeof moqrn && null !== moqrn) throw new TypeError('Super expression must either be null or a function, not ' + typeof moqrn);utwsvx['prototype'] = Object['create'](moqrn && moqrn['prototype'], { 'constructor': { 'value': utwsvx, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), moqrn && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](utwsvx, moqrn) : utwsvx['__proto__'] = moqrn);
  }(dcfbeg, rnmop['default']), vtsqr(dcfbeg, [{ 'key': 'load', 'value': function () {
      console['warn']('HTMLAudioElement.load() is not implemented.');
    } }, { 'key': 'play', 'value': function () {
      (0x0, beacfd['isSubContext'])() || giklhj['get'](this)['play']();
    } }, { 'key': 'pause', 'value': function () {
      (0x0, beacfd['isSubContext'])() || giklhj['get'](this)['pause']();
    } }, { 'key': 'canPlayType', 'value': function () {
      var tspqo = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return 'string' == typeof tspqo && (-0x1 < tspqo['indexOf']('audio/mpeg') || tspqo['indexOf']('audio/mp4')) ? 'probably' : '';
    } }, { 'key': 'cloneNode', 'value': function () {
      var be = new dcfbeg();return (0x0, beacfd['isSubContext'])() || (be['loop'] = giklhj['get'](this)['loop'], be['autoplay'] = giklhj['get'](this)['loop'], be['src'] = this['src']), be;
    } }, { 'key': 'currentTime', 'get': function () {
      return (0x0, beacfd['isSubContext'])() ? 0x0 : giklhj['get'](this)['currentTime'];
    }, 'set': function (geihjf) {
      (0x0, beacfd['isSubContext'])() || giklhj['get'](this)['seek'](geihjf);
    } }, { 'key': 'src', 'get': function () {
      return dcfbge['get'](this);
    }, 'set': function (uxzwyv) {
      dcfbge['set'](this, uxzwyv), (0x0, beacfd['isSubContext'])() || (giklhj['get'](this)['src'] = uxzwyv);
    } }, { 'key': 'loop', 'get': function () {
      return !(0x0, beacfd['isSubContext'])() && giklhj['get'](this)['loop'];
    }, 'set': function (ifgje) {
      (0x0, beacfd['isSubContext'])() || (giklhj['get'](this)['loop'] = ifgje);
    } }, { 'key': 'autoplay', 'get': function () {
      return !(0x0, beacfd['isSubContext'])() && giklhj['get'](this)['autoplay'];
    }, 'set': function (fjgehi) {
      (0x0, beacfd['isSubContext'])() || (giklhj['get'](this)['autoplay'] = fjgehi);
    } }, { 'key': 'paused', 'get': function () {
      return !(0x0, beacfd['isSubContext'])() && giklhj['get'](this)['paused'];
    } }]), vtsqr = dcfbeg, zyxv$['default'] = vtsqr;
}, function (ihkmlj, ehgjfi, ighjkl) {
  'use strict';

  Object['defineProperty'](ehgjfi, '__esModule', { 'value': !0x0 });var qoprts = ighjkl(0xe);function dif() {
    return function (wsuvx) {
      if (!(wsuvx instanceof dif)) throw new TypeError('Cannot call a class as a function');
    }(this), function (ormnq, kjhim) {
      if (!ormnq) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !kjhim || 'object' != typeof kjhim && 'function' != typeof kjhim ? ormnq : kjhim;
    }(this, (dif['__proto__'] || Object['getPrototypeOf'](dif))['call'](this, 'audio'));
  }(function (x$wzvy, orpqt) {
    if ('function' != typeof orpqt && null !== orpqt) throw new TypeError('Super expression must either be null or a function, not ' + typeof orpqt);x$wzvy['prototype'] = Object['create'](orpqt && orpqt['prototype'], { 'constructor': { 'value': x$wzvy, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), orpqt && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](x$wzvy, orpqt) : x$wzvy['__proto__'] = orpqt);
  })(dif, (qoprts && qoprts['__esModule'] ? qoprts : { 'default': qoprts })['default']), ighjkl = dif, ehgjfi['default'] = ighjkl;
}, function (rqupst, qprot, _0423) {
  'use strict';

  Object['defineProperty'](qprot, '__esModule', { 'value': !0x0 });var lmnji = function (dhefi, gkij, qpnlo) {
    return gkij && tpos(dhefi['prototype'], gkij), qpnlo && tpos(dhefi, qpnlo), dhefi;
  };function tpos(yz$0x_, gjhei) {
    for (var qropts = 0x0; qropts < gjhei['length']; qropts++) {
      var dacbef = gjhei[qropts];dacbef['enumerable'] = dacbef['enumerable'] || !0x1, dacbef['configurable'] = !0x0, 'value' in dacbef && (dacbef['writable'] = !0x0), Object['defineProperty'](yz$0x_, dacbef['key'], dacbef);
    }
  }_0423 = _0423(0x4);function ihjfgk(_ywzx$) {
    return function (ijgkhl) {
      if (!(ijgkhl instanceof ihjfgk)) throw new TypeError('Cannot call a class as a function');
    }(this), function (rtqps, yzuxw) {
      if (!rtqps) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !yzuxw || 'object' != typeof yzuxw && 'function' != typeof yzuxw ? rtqps : yzuxw;
    }(this, (ihjfgk['__proto__'] || Object['getPrototypeOf'](ihjfgk))['call'](this, _ywzx$));
  }(function (ifjhe, nsqor) {
    if ('function' != typeof nsqor && null !== nsqor) throw new TypeError('Super expression must either be null or a function, not ' + typeof nsqor);ifjhe['prototype'] = Object['create'](nsqor && nsqor['prototype'], { 'constructor': { 'value': ifjhe, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), nsqor && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](ifjhe, nsqor) : ifjhe['__proto__'] = nsqor);
  })(ihjfgk, (_0423 && _0423['__esModule'] ? _0423 : { 'default': _0423 })['default']), lmnji(ihjfgk, [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]), lmnji = ihjfgk, qprot['default'] = lmnji;
}, function (cbefgd, giedfh, qmnor) {
  'use strict';

  qmnor(0x10);
}, function (eifd, pqrons, yx_z$w) {
  'use strict';

  var kilhm = function (_z0y) {
    if (_z0y && _z0y['__esModule']) return _z0y;var ns = {};if (null != _z0y) {
      for (var mlikj in _z0y) Object['prototype']['hasOwnProperty']['call'](_z0y, mlikj) && (ns[mlikj] = _z0y[mlikj]);
    }return ns['default'] = _z0y, ns;
  }(yx_z$w(0x1)),
      vustqr = yx_z$w(0xa),
      pnqmor = vustqr && vustqr['__esModule'] ? vustqr : { 'default': vustqr },
      $xzw_ = yx_z$w(0x8);function tpsurq(ojn) {
    !function (opqrsn) {
      if (!(opqrsn instanceof tpsurq)) throw new TypeError('Cannot call a class as a function');
    }(this), this['target'] = kilhm['canvas'], this['currentTarget'] = kilhm['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = $xzw_['noop'], this['stopPropagation'] = $xzw_['noop'], this['type'] = ojn;
  }function hgdei(rwsv) {
    return function ($_xw) {
      var uptqs = new tpsurq(rwsv);uptqs['touches'] = $_xw['touches'], uptqs['targetTouches'] = Array['prototype']['slice']['call']($_xw['touches']), uptqs['changedTouches'] = $_xw['changedTouches'], uptqs['timeStamp'] = $_xw['timeStamp'], pnqmor['default']['dispatchEvent'](uptqs);
    };
  }wx['onTouchStart'](hgdei('touchstart')), wx['onTouchMove'](hgdei('touchmove')), wx['onTouchEnd'](hgdei('touchend')), wx['onTouchCancel'](hgdei('touchcancel'));
}, function (bgfedc, ihgjl) {
  'use strict';

  Object['defineProperty'](ihgjl, '__esModule', { 'value': !0x0 }), ihgjl['noop'] = function () {}, ihgjl['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (qsnrop, $0_1y, sorqn) {
  'use strict';

  Object['defineProperty']($0_1y, '__esModule', { 'value': !0x0 }), sorqn = sorqn(0x8), sorqn = { 'platform': wx['getSystemInfoSync']()['platform'], 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': sorqn['noop'], 'watchPosition': sorqn['noop'], 'clearWatch': sorqn['noop'] } }, $0_1y['default'] = sorqn;
}, function (nlokj, qsurpt) {
  'use strict';

  Object['defineProperty'](qsurpt, '__esModule', { 'value': !0x0 });var $xzyv = function ($02z, ebcadf, nijlk) {
    return ebcadf && prnsoq($02z['prototype'], ebcadf), nijlk && prnsoq($02z, nijlk), $02z;
  };function prnsoq(dgfche, _z) {
    for (var mpolnq = 0x0; mpolnq < _z['length']; mpolnq++) {
      var feid = _z[mpolnq];feid['enumerable'] = feid['enumerable'] || !0x1, feid['configurable'] = !0x0, 'value' in feid && (feid['writable'] = !0x0), Object['defineProperty'](dgfche, feid['key'], feid);
    }
  }var yuzvxw = new WeakMap(),
      sqtuv = new WeakMap(),
      jkmn = new WeakMap(),
      vxst = new WeakMap(),
      nimjkl = new WeakMap();function _20134(cdbe) {
    if ('function' == typeof this['on' + cdbe]) {
      for (var iklmnj = arguments['length'], spt = Array(0x1 < iklmnj ? iklmnj - 0x1 : 0x0), prmo = 0x1; prmo < iklmnj; prmo++) spt[prmo - 0x1] = arguments[prmo];this['on' + cdbe]['apply'](this, spt);
    }
  }function qspu(efigd) {
    this['readyState'] = efigd, _20134['call'](this, 'readystatechange');
  }function kpmlon() {
    !function (dgcefh) {
      if (!(dgcefh instanceof kpmlon)) throw new TypeError('Cannot call a class as a function');
    }(this), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = !0x1, jkmn['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), vxst['set'](this, {});
  }$xzyv(kpmlon, [{ 'key': 'abort', 'value': function () {
      var kpolnm = nimjkl['get'](this);kpolnm && kpolnm['abort']();
    } }, { 'key': 'getAllResponseHeaders', 'value': function () {
      var olmnkp = vxst['get'](this);return Object['keys'](olmnkp)['map'](function (hgfce) {
        return hgfce + ':\x20' + olmnkp[hgfce];
      })['join']('\x0a');
    } }, { 'key': 'getResponseHeader', 'value': function (fdhgc) {
      return vxst['get'](this)[fdhgc];
    } }, { 'key': 'open', 'value': function (klpmo, uywvxz) {
      sqtuv['set'](this, klpmo), yuzvxw['set'](this, uywvxz), qspu['call'](this, kpmlon['OPENED']);
    } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function () {
      var wsrvtu = this,
          potrqs = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';if (this['readyState'] !== kpmlon['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');wx['request']({ 'data': potrqs, 'url': yuzvxw['get'](this), 'method': sqtuv['get'](this), 'header': jkmn['get'](this), 'responseType': this['responseType'], 'success': function (yx$0z_) {
          var ptsoqr = yx$0z_['data'],
              mnkjil = yx$0z_['statusCode'],
              yx$0z_ = yx$0z_['header'];if ('string' != typeof ptsoqr && !(ptsoqr instanceof ArrayBuffer)) try {
            ptsoqr = JSON['stringify'](ptsoqr);
          } catch (jheigf) {}if (wsrvtu['status'] = mnkjil, vxst['set'](wsrvtu, yx$0z_), _20134['call'](wsrvtu, 'loadstart'), qspu['call'](wsrvtu, kpmlon['HEADERS_RECEIVED']), qspu['call'](wsrvtu, kpmlon['LOADING']), (wsrvtu['response'] = ptsoqr) instanceof ArrayBuffer) {
            wsrvtu['responseText'] = '';var cdegf = new Uint8Array(ptsoqr),
                njilmk = cdegf['byteLength'];for (var jifg = 0x0; jifg < njilmk; jifg++) wsrvtu['responseText'] += String['fromCharCode'](cdegf[jifg]);
          } else wsrvtu['responseText'] = ptsoqr;qspu['call'](wsrvtu, kpmlon['DONE']), _20134['call'](wsrvtu, 'load'), _20134['call'](wsrvtu, 'loadend');
        }, 'fail': function (qpnso) {
          -0x1 !== (qpnso = qpnso['errMsg'])['indexOf']('abort') ? _20134['call'](wsrvtu, 'abort') : _20134['call'](wsrvtu, 'error', qpnso), _20134['call'](wsrvtu, 'loadend');
        } });
    } }, { 'key': 'setRequestHeader', 'value': function (xuwvst, x0_$y) {
      var qpsutr = jkmn['get'](this);qpsutr[xuwvst] = x0_$y, jkmn['set'](this, qpsutr);
    } }]), ($xzyv = kpmlon)['UNSEND'] = 0x0, $xzyv['OPENED'] = 0x1, $xzyv['HEADERS_RECEIVED'] = 0x2, $xzyv['LOADING'] = 0x3, $xzyv['DONE'] = 0x4, qsurpt['default'] = $xzyv;
}, function (xuzyv, lg, tqspur) {
  'use strict';

  Object['defineProperty'](lg, '__esModule', { 'value': !0x0 });var vzuxw = function (rqpnso, y$z1_0, surtwv) {
    return y$z1_0 && gefihj(rqpnso['prototype'], y$z1_0), surtwv && gefihj(rqpnso, surtwv), rqpnso;
  };function gefihj(ifhdg, hjiefg) {
    for (var rtvs = 0x0; rtvs < hjiefg['length']; rtvs++) {
      var y$wvz = hjiefg[rtvs];y$wvz['enumerable'] = y$wvz['enumerable'] || !0x1, y$wvz['configurable'] = !0x0, 'value' in y$wvz && (y$wvz['writable'] = !0x0), Object['defineProperty'](ifhdg, y$wvz['key'], y$wvz);
    }
  }var _2$01 = tqspur(0x8),
      hfdie = new WeakMap();function txusw(egifdh) {
    var x_yz$w = this,
        gdceh = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (function (nkmlij) {
      if (!(nkmlij instanceof txusw)) throw new TypeError('Cannot call a class as a function');
    }(this), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, (0x0, _2$01['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if ('string' != typeof egifdh || !/(^ws:\/\/)|(^wss:\/\/)/['test'](egifdh)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + egifdh + '\' is invalid');return this['url'] = egifdh, this['readyState'] = txusw['CONNECTING'], gdceh = wx['connectSocket']({ 'url': egifdh, 'protocols': Array['isArray'](gdceh) ? gdceh : [gdceh] }), hfdie['set'](this, gdceh), gdceh['onClose'](function (spoqnr) {
      x_yz$w['readyState'] = txusw['CLOSED'], 'function' == typeof x_yz$w['onclose'] && x_yz$w['onclose'](spoqnr);
    }), gdceh['onMessage'](function (omqnpr) {
      'function' == typeof x_yz$w['onmessage'] && x_yz$w['onmessage'](omqnpr);
    }), gdceh['onOpen'](function () {
      x_yz$w['readyState'] = txusw['OPEN'], 'function' == typeof x_yz$w['onopen'] && x_yz$w['onopen']();
    }), gdceh['onError'](function (hejf) {
      'function' == typeof x_yz$w['onerror'] && x_yz$w['onerror'](new Error(hejf['errMsg']));
    }), this;
  }vzuxw(txusw, [{ 'key': 'close', 'value': function (lojnk, tupqrs) {
      this['readyState'] = txusw['CLOSING'], hfdie['get'](this)['close']({ 'code': lojnk, 'reason': tupqrs });
    } }, { 'key': 'send', 'value': function (ecgfh) {
      if ('string' != typeof ecgfh && !(ecgfh instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + ecgfh + ' is invalid');hfdie['get'](this)['send']({ 'data': ecgfh });
    } }]), (vzuxw = txusw)['CONNECTING'] = 0x0, vzuxw['OPEN'] = 0x1, vzuxw['CLOSING'] = 0x2, vzuxw['CLOSED'] = 0x3, lg['default'] = vzuxw;
}, function (qtorps, y01z, suvw) {
  'use strict';

  Object['defineProperty'](y01z, '__esModule', { 'value': !0x0 });var klijmn = function (cfdhe, y_$z, xzvy$) {
    return y_$z && w$xzyv(cfdhe['prototype'], y_$z), xzvy$ && w$xzyv(cfdhe, xzvy$), cfdhe;
  };function w$xzyv(upst, $03) {
    for (var _3201 = 0x0; _3201 < $03['length']; _3201++) {
      var jfgie = $03[_3201];jfgie['enumerable'] = jfgie['enumerable'] || !0x1, jfgie['configurable'] = !0x0, 'value' in jfgie && (jfgie['writable'] = !0x0), Object['defineProperty'](upst, jfgie['key'], jfgie);
    }
  }var uxsvw = suvw(0x8);function ecbgfd() {
    !function (stxwu) {
      if (!(stxwu instanceof ecbgfd)) throw new TypeError('Cannot call a class as a function');
    }(this);
  }klijmn(ecbgfd, [{ 'key': 'construct', 'value': function () {
      if ((0x0, uxsvw['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
    } }]), y01z['default'] = ecbgfd;
}, function (efihjg, nqopl, fedba) {
  'use strict';

  Object['defineProperty'](nqopl, '__esModule', { 'value': !0x0 });var stwv = fedba(0x8),
      $1_z0y = { get 'length'() {
      return wx['getStorageInfoSync']()['keys']['length'];
    }, 'key': function (fjghi) {
      return wx['getStorageInfoSync']()['keys'][fjghi];
    }, 'getItem': function (vzxuw) {
      return wx['getStorageSync'](vzxuw);
    }, 'setItem': function (orpn, stuqr) {
      return wx['setStorageSync'](orpn, stuqr);
    }, 'removeItem': function (psroq) {
      wx['removeStorageSync'](psroq);
    }, 'clear': function () {
      wx['clearStorageSync']();
    } },
      ihdgfe = {};fedba = { get 'length'() {
      return Object['keys'](ihdgfe)['length'];
    }, 'key': function (zxw$_y) {
      return Object['keys'](ihdgfe)[zxw$_y];
    }, 'getItem': function (uvyxwz) {
      return ihdgfe[uvyxwz];
    }, 'setItem': function (porqns, lkgi) {
      ihdgfe[porqns] = lkgi;
    }, 'removeItem': function (zyx$wv) {
      delete ihdgfe[zyx$wv];
    }, 'clear': function () {
      ihdgfe = {};
    } }, $1_z0y = (0x0, stwv['isSubContext'])() ? fedba : $1_z0y, nqopl['default'] = $1_z0y;
}, function (nqmpl, vw$zx) {
  'use strict';

  Object['defineProperty'](vw$zx, '__esModule', { 'value': !0x0 }), vw$zx['default'] = { 'href': 'bbbgame.js', 'reload': function () {} };
}]);