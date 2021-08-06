var p = wx.$h;
!function (ighjl) {
  var bfec = {};function __webpack_require__(pklnmo) {
    if (bfec[pklnmo]) return bfec[pklnmo]['exports'];var _1z0 = bfec[pklnmo] = { 'exports': {}, 'id': pklnmo, 'loaded': !0x1 };return ighjl[pklnmo]['call'](_1z0['exports'], _1z0, _1z0['exports'], __webpack_require__), _1z0['loaded'] = !0x0, _1z0['exports'];
  }__webpack_require__['m'] = ighjl, __webpack_require__['c'] = bfec, __webpack_require__['p'] = '', __webpack_require__(0x0);
}([function (adfec, hklgji, wy_$z) {
  'use strict';
  var vtxswr = function (giedhf) {
    {
      if (giedhf && giedhf['__esModule']) return giedhf;var glhji = {};if (null != giedhf) {
        for (var decfg in giedhf) Object['prototype']['hasOwnProperty']['call'](giedhf, decfg) && (glhji[decfg] = giedhf[decfg]);
      }return glhji['default'] = giedhf, glhji;
    }
  }(wy_$z(0x1)),
      $_12z0 = wy_$z(0x4),
      feid = (moqln = $_12z0) && moqln['__esModule'] ? moqln : { 'default': moqln },
      moqln,
      gfjih = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
    vtxswr['addEventListener'] = function (wqvrst, ikmlj) {
      vtxswr['document']['addEventListener'](wqvrst, ikmlj);
    }, vtxswr['removeEventListener'] = function (nimlk, xtyv) {
      vtxswr['document']['removeEventListener'](nimlk, xtyv);
    }, vtxswr['canvas'] && (vtxswr['canvas']['addEventListener'] = vtxswr['addEventListener'], vtxswr['canvas']['removeEventListener'] = vtxswr['removeEventListener']), gfjih['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new feid['default']('canvas'), sharedCanvas['addEventListener'] = vtxswr['addEventListener'], sharedCanvas['removeEventListener'] = vtxswr['removeEventListener']);var twvqr = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === twvqr) {
      for (var sqoptr in vtxswr) {
        var dcbeg = Object['getOwnPropertyDescriptor'](gfjih, sqoptr);dcbeg && !0x0 !== dcbeg['configurable'] || Object['defineProperty'](window, sqoptr, { 'value': vtxswr[sqoptr] });
      }for (var knoml in vtxswr['document']) {
        var jfgeih = Object['getOwnPropertyDescriptor'](gfjih['document'], knoml);jfgeih && !0x0 !== jfgeih['configurable'] || Object['defineProperty'](gfjih['document'], knoml, { 'value': vtxswr['document'][knoml] });
      }window['parent'] = window;
    } else {
      for (var rtpso in vtxswr) gfjih[rtpso] = vtxswr[rtpso];gfjih['window'] = vtxswr, window = gfjih, window['top'] = window['parent'] = window;
    }
  }());
}, function (vxzwy$, jlni, nkolpm) {
  'use strict';
  Object['defineProperty'](jlni, '__esModule', { 'value': !0x0 }), jlni['cancelAnimationFrame'] = jlni['requestAnimationFrame'] = jlni['clearInterval'] = jlni['clearTimeout'] = jlni['setInterval'] = jlni['setTimeout'] = jlni['canvas'] = jlni['location'] = jlni['localStorage'] = jlni['HTMLElement'] = jlni['FileReader'] = jlni['Audio'] = jlni['Image'] = jlni['WebSocket'] = jlni['XMLHttpRequest'] = jlni['navigator'] = jlni['document'] = void 0x0;var ad = nkolpm(0x2);Object['keys'](ad)['forEach'](function (yvxw$) {
    'default' !== yvxw$ && '__esModule' !== yvxw$ && Object['defineProperty'](jlni, yvxw$, { 'enumerable': !0x0, 'get': function () {
        return ad[yvxw$];
      } });
  });var ywtxv = nkolpm(0x3);Object['keys'](ywtxv)['forEach'](function (wsvrqt) {
    'default' !== wsvrqt && '__esModule' !== wsvrqt && Object['defineProperty'](jlni, wsvrqt, { 'enumerable': !0x0, 'get': function () {
        return ywtxv[wsvrqt];
      } });
  });var bfedc = dgief(nkolpm(0x9)),
      y_wzx$ = nkolpm(0x11),
      ijkhf = dgief(nkolpm(0xa)),
      rwsvqt = dgief(nkolpm(0x12)),
      rtvw = dgief(nkolpm(0x13)),
      $z1y0_ = dgief(nkolpm(0x14)),
      _yx$wz = dgief(nkolpm(0xb)),
      fcdhge = dgief(nkolpm(0xc)),
      jighe = dgief(nkolpm(0x15)),
      y$_xzw = dgief(nkolpm(0x4)),
      noqlp = dgief(nkolpm(0x16));nkolpm = dgief(nkolpm(0x17));function dgief(inmljk) {
    return inmljk && inmljk['__esModule'] ? inmljk : { 'default': inmljk };
  }jlni['document'] = ijkhf['default'], jlni['navigator'] = rwsvqt['default'], jlni['XMLHttpRequest'] = rtvw['default'], jlni['WebSocket'] = $z1y0_['default'], jlni['Image'] = _yx$wz['default'], jlni['Audio'] = fcdhge['default'], jlni['FileReader'] = jighe['default'], jlni['HTMLElement'] = y$_xzw['default'], jlni['localStorage'] = noqlp['default'], jlni['location'] = nkolpm['default'], bfedc = (0x0, y_wzx$['isSubContext'])() ? void 0x0 : new bfedc['default'](), (jlni['canvas'] = bfedc, jlni['setTimeout'] = setTimeout, jlni['setInterval'] = setInterval, jlni['clearTimeout'] = clearTimeout, jlni['clearInterval'] = clearInterval, jlni['requestAnimationFrame'] = requestAnimationFrame, jlni['cancelAnimationFrame'] = cancelAnimationFrame);
}, function (oqrpt, zyx_0) {
  'use strict';
  Object['defineProperty'](zyx_0, '__esModule', { 'value': !0x0 });var wtyvxs = wx['getSystemInfoSync'](),
      kmilh = wtyvxs['screenWidth'],
      ifdge = wtyvxs['screenHeight'],
      wtyvxs = wtyvxs['devicePixelRatio'];kmilh = zyx_0['innerWidth'] = kmilh, ifdge = zyx_0['innerHeight'] = ifdge, zyx_0['devicePixelRatio'] = wtyvxs, zyx_0['screen'] = { 'availWidth': kmilh, 'availHeight': ifdge }, zyx_0['performance'] = { 'now': function () {
      return Date['now']() / 0x3e8;
    } }, zyx_0['ontouchstart'] = null, zyx_0['ontouchmove'] = null, zyx_0['ontouchend'] = null;
}, function (dcbaef, spqrt, rnqps) {
  'use strict';
  Object['defineProperty'](spqrt, '__esModule', { 'value': !0x0 }), spqrt['HTMLCanvasElement'] = spqrt['HTMLImageElement'] = void 0x0;var hgced = rnqps(0x4);rnqps = (igefjh = hgced) && igefjh['__esModule'] ? igefjh : { 'default': igefjh };var igefjh;function mljk(cafbde, hgcdfe) {
    if (!(cafbde instanceof hgcdfe)) throw new TypeError('Cannot call a class as a function');
  }function x_z0y$(aedcb, jlknom) {
    if (!aedcb) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !jlknom || 'object' != typeof jlknom && 'function' != typeof jlknom ? aedcb : jlknom;
  }function lonpk(cgdhf, kmolnj) {
    if ('function' != typeof kmolnj && null !== kmolnj) throw new TypeError('Super expression must either be null or a function, not ' + typeof kmolnj);cgdhf['prototype'] = Object['create'](kmolnj && kmolnj['prototype'], { 'constructor': { 'value': cgdhf, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), kmolnj && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](cgdhf, kmolnj) : cgdhf['__proto__'] = kmolnj);
  }spqrt['HTMLImageElement'] = (lonpk(dfeac, rnqps['default']), dfeac);function dfeac() {
    return mljk(this, dfeac), x_z0y$(this, (dfeac['__proto__'] || Object['getPrototypeOf'](dfeac))['call'](this, 'img'));
  }spqrt['HTMLCanvasElement'] = (lonpk(zw$x, rnqps['default']), zw$x);function zw$x() {
    return mljk(this, zw$x), x_z0y$(this, (zw$x['__proto__'] || Object['getPrototypeOf'](zw$x))['call'](this, 'canvas'));
  }
}, function (gcdhe, badfe, _$0y) {
  'use strict';
  Object['defineProperty'](badfe, '__esModule', { 'value': !0x0 });var qsrpon = function (plmnoq, mljhik, vrxtsw) {
    return mljhik && hdig(plmnoq['prototype'], mljhik), vrxtsw && hdig(plmnoq, vrxtsw), plmnoq;
  };function hdig(egfdbc, ehjigf) {
    for (var jiehf = 0x0; jiehf < ehjigf['length']; jiehf++) {
      var tsqw = ehjigf[jiehf];tsqw['enumerable'] = tsqw['enumerable'] || !0x1, tsqw['configurable'] = !0x0, 'value' in tsqw && (tsqw['writable'] = !0x0), Object['defineProperty'](egfdbc, tsqw['key'], tsqw);
    }
  }var gkjihf = _$0y(0x5),
      ljmih = (bdfcg = gkjihf) && bdfcg['__esModule'] ? bdfcg : { 'default': bdfcg },
      bdfcg,
      cebgf = _$0y(0x8),
      nqml = _$0y(0x2);(function (ptqros, z_1$y0) {
    if ('function' != typeof z_1$y0 && null !== z_1$y0) throw new TypeError('Super expression must either be null or a function, not ' + typeof z_1$y0);ptqros['prototype'] = Object['create'](z_1$y0 && z_1$y0['prototype'], { 'constructor': { 'value': ptqros, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), z_1$y0 && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](ptqros, z_1$y0) : ptqros['__proto__'] = z_1$y0);
  })(lhmki, ljmih['default']), qsrpon(lhmki, [{ 'key': 'setAttribute', 'value': function (stywvx, qrsot) {
      this[stywvx] = qrsot;
    } }, { 'key': 'getAttribute', 'value': function (dgihe) {
      return this[dgihe];
    } }, { 'key': 'getBoundingClientRect', 'value': function () {
      return { 'top': 0x0, 'left': 0x0, 'width': nqml['innerWidth'], 'height': nqml['innerHeight'] };
    } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
      var lqpnom = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](lqpnom) ? 0x0 : lqpnom;
    } }, { 'key': 'clientHeight', 'get': function () {
      var y0z_1 = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](y0z_1) ? 0x0 : y0z_1;
    } }]), qsrpon = lhmki;function lhmki() {
    var rqwt = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';!function (x$_0y, trqsop) {
      if (!(x$_0y instanceof trqsop)) throw new TypeError('Cannot call a class as a function');
    }(this, lhmki);var proqn = function (rnops, $2z_1) {
      if (!rnops) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !$2z_1 || 'object' != typeof $2z_1 && 'function' != typeof $2z_1 ? rnops : $2z_1;
    }(this, (lhmki['__proto__'] || Object['getPrototypeOf'](lhmki))['call'](this));return proqn['className'] = '', proqn['childern'] = [], proqn['style'] = { 'width': nqml['innerWidth'] + 'px', 'height': nqml['innerHeight'] + 'px' }, proqn['insertBefore'] = cebgf['noop'], proqn['innerHTML'] = '', proqn['tagName'] = rqwt['toUpperCase'](), proqn;
  }badfe['default'] = qsrpon;
}, function (yz$x_w, _2104, rnmqop) {
  'use strict';
  Object['defineProperty'](_2104, '__esModule', { 'value': !0x0 });var tqorp = rnmqop(0x6),
      ptosr;(function (twsvq, y_w$x) {
    if ('function' != typeof y_w$x && null !== y_w$x) throw new TypeError('Super expression must either be null or a function, not ' + typeof y_w$x);twsvq['prototype'] = Object['create'](y_w$x && y_w$x['prototype'], { 'constructor': { 'value': twsvq, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), y_w$x && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](twsvq, y_w$x) : twsvq['__proto__'] = y_w$x);
  })(w$xvzy, ((ptosr = tqorp) && ptosr['__esModule'] ? ptosr : { 'default': ptosr })['default']), rnmqop = w$xvzy;function w$xvzy() {
    !function (edbfc, wtvyzx) {
      if (!(edbfc instanceof wtvyzx)) throw new TypeError('Cannot call a class as a function');
    }(this, w$xvzy);var omnkpl = function (vtzyxw, $12_z0) {
      if (!vtzyxw) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !$12_z0 || 'object' != typeof $12_z0 && 'function' != typeof $12_z0 ? vtzyxw : $12_z0;
    }(this, (w$xvzy['__proto__'] || Object['getPrototypeOf'](w$xvzy))['call'](this));return omnkpl['className'] = '', omnkpl['children'] = [], omnkpl;
  }_2104['default'] = rnmqop;
}, function (lnpomq, lkihgj, rnmqo) {
  'use strict';
  Object['defineProperty'](lkihgj, '__esModule', { 'value': !0x0 });var lomjk = function (fdbgec, hmijl, ysvtxw) {
    return hmijl && klhjm(fdbgec['prototype'], hmijl), ysvtxw && klhjm(fdbgec, ysvtxw), fdbgec;
  };function klhjm(tqw, srtvpq) {
    for (var dhgfc = 0x0; dhgfc < srtvpq['length']; dhgfc++) {
      var jmlo = srtvpq[dhgfc];jmlo['enumerable'] = jmlo['enumerable'] || !0x1, jmlo['configurable'] = !0x0, 'value' in jmlo && (jmlo['writable'] = !0x0), Object['defineProperty'](tqw, jmlo['key'], jmlo);
    }
  }var mqrnpo = rnmqo(0x7),
      ghfecd;(function (rnqomp, eihfjg) {
    if ('function' != typeof eihfjg && null !== eihfjg) throw new TypeError('Super expression must either be null or a function, not ' + typeof eihfjg);rnqomp['prototype'] = Object['create'](eihfjg && eihfjg['prototype'], { 'constructor': { 'value': rnqomp, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), eihfjg && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](rnqomp, eihfjg) : rnqomp['__proto__'] = eihfjg);
  })(khmjil, ((ghfecd = mqrnpo) && ghfecd['__esModule'] ? ghfecd : { 'default': ghfecd })['default']), lomjk(khmjil, [{ 'key': 'appendChild', 'value': function (twvxz) {
      if (!(twvxz instanceof khmjil)) throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');this['childNodes']['push'](twvxz);
    } }, { 'key': 'cloneNode', 'value': function () {
      var nkomlp = Object['create'](this);return Object['assign'](nkomlp, this), nkomlp;
    } }, { 'key': 'removeChild', 'value': function (xz_$wy) {
      var $0y_z1 = this['childNodes']['findIndex'](function (rqpvs) {
        return rqpvs === xz_$wy;
      });return -0x1 < $0y_z1 ? this['childNodes']['splice']($0y_z1, 0x1) : null;
    } }]), lomjk = khmjil;function khmjil() {
    !function (fkgji, lknopm) {
      if (!(fkgji instanceof lknopm)) throw new TypeError('Cannot call a class as a function');
    }(this, khmjil);var z2_$1 = function (mqlpn, _13) {
      if (!mqlpn) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !_13 || 'object' != typeof _13 && 'function' != typeof _13 ? mqlpn : _13;
    }(this, (khmjil['__proto__'] || Object['getPrototypeOf'](khmjil))['call'](this));return z2_$1['childNodes'] = [], z2_$1;
  }lkihgj['default'] = lomjk;
}, function (efgjih, y10$) {
  'use strict';
  Object['defineProperty'](y10$, '__esModule', { 'value': !0x0 });var roqmp = function (txvzy, jlkg, wvz$y) {
    return jlkg && cgbdfe(txvzy['prototype'], jlkg), wvz$y && cgbdfe(txvzy, wvz$y), txvzy;
  };function cgbdfe(snqro, wsrtv) {
    for (var fadbe = 0x0; fadbe < wsrtv['length']; fadbe++) {
      var ropmn = wsrtv[fadbe];ropmn['enumerable'] = ropmn['enumerable'] || !0x1, ropmn['configurable'] = !0x0, 'value' in ropmn && (ropmn['writable'] = !0x0), Object['defineProperty'](snqro, ropmn['key'], ropmn);
    }
  }var xtwrvs = new WeakMap();roqmp(qrnomp, [{ 'key': 'addEventListener', 'value': function (ormp, tsqvrw) {
      var wrsvtq = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {},
          egcfh = xtwrvs['get'](this);egcfh || xtwrvs['set'](this, egcfh = {}), egcfh[ormp] || (egcfh[ormp] = []), egcfh[ormp]['push'](tsqvrw), wrsvtq['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), wrsvtq['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), wrsvtq['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
    } }, { 'key': 'removeEventListener', 'value': function (mihljk, vst) {
      var zvty = xtwrvs['get'](this)[mihljk];if (zvty && 0x0 < zvty['length']) {
        for (var ysvwt = zvty['length']; ysvwt--;) if (zvty[ysvwt] === vst) {
          zvty['splice'](ysvwt, 0x1);break;
        }
      }
    } }, { 'key': 'dispatchEvent', 'value': function () {
      var wvxty = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {},
          otsp = xtwrvs['get'](this)[wvxty['type']];if (otsp) {
        for (var bdcfge = 0x0; bdcfge < otsp['length']; bdcfge++) otsp[bdcfge](wvxty);
      }
    } }]), roqmp = qrnomp;function qrnomp() {
    !function (fcbdg, xz$_) {
      if (!(fcbdg instanceof xz$_)) throw new TypeError('Cannot call a class as a function');
    }(this, qrnomp), xtwrvs['set'](this, {});
  }y10$['default'] = roqmp;
}, function (xzv$, vqtwsr) {
  'use strict';
  Object['defineProperty'](vqtwsr, '__esModule', { 'value': !0x0 }), vqtwsr['noop'] = function () {}, vqtwsr['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (hi, rvxswt, ikf) {
  'use strict';
  Object['defineProperty'](rvxswt, '__esModule', { 'value': !0x0 }), rvxswt['default'] = function () {
    var onljk = wx['createCanvas']();return onljk['type'] = 'canvas', onljk['__proto__']['__proto__'] = new _0z$21['default']('canvas'), onljk['getContext'], (onljk['getBoundingClientRect'] = function () {
      return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
    }, onljk);
  }, ikf(0x3);var _0z$21 = _y10(ikf(0x4));_y10(ikf(0xa));function _y10(w$vxz) {
    return w$vxz && w$vxz['__esModule'] ? w$vxz : { 'default': w$vxz };
  }
}, function (qvtwsr, olkp, qrptos) {
  'use strict';
  Object['defineProperty'](olkp, '__esModule', { 'value': !0x0 });var ptrqv = function (egi) {
    {
      if (egi && egi['__esModule']) return egi;var mikjn = {};if (null != egi) {
        for (var wtvsrx in egi) Object['prototype']['hasOwnProperty']['call'](egi, wtvsrx) && (mikjn[wtvsrx] = egi[wtvsrx]);
      }return mikjn['default'] = egi, mikjn;
    }
  }(qrptos(0x1)),
      z12_$ = rqtsv(qrptos(0x4)),
      bdfaec = rqtsv(qrptos(0xb)),
      rqptv = rqtsv(qrptos(0xc)),
      ijm = rqtsv(qrptos(0x9));function rqtsv(mlnjo) {
    return mlnjo && mlnjo['__esModule'] ? mlnjo : { 'default': mlnjo };
  }qrptos(0xf);var wy_ = {},
      hifdge = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': ptrqv, 'hidden': !0x1, 'style': {}, 'location': ptrqv['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new z12_$['default']('head'), 'body': new z12_$['default']('body'), 'createElement': function (mpoln) {
      return 'canvas' === mpoln ? new ijm['default']() : 'audio' === mpoln ? new rqptv['default']() : 'img' === mpoln ? new bdfaec['default']() : new z12_$['default'](mpoln);
    }, 'getElementById': function (hdieg) {
      return hdieg === ptrqv['canvas']['id'] ? ptrqv['canvas'] : null;
    }, 'getElementsByTagName': function (mhij) {
      return 'head' === mhij ? [hifdge['head']] : 'body' === mhij ? [hifdge['body']] : 'canvas' === mhij ? [ptrqv['canvas']] : [];
    }, 'querySelector': function (gdfeb) {
      return 'head' === gdfeb ? hifdge['head'] : 'body' === gdfeb ? hifdge['body'] : 'canvas' === gdfeb || gdfeb === '#' + ptrqv['canvas']['id'] ? ptrqv['canvas'] : null;
    }, 'querySelectorAll': function (ijlknm) {
      return 'head' === ijlknm ? [hifdge['head']] : 'body' === ijlknm ? [hifdge['body']] : 'canvas' === ijlknm ? [ptrqv['canvas']] : [];
    }, 'addEventListener': function (dcbfeg, mpklo) {
      wy_[dcbfeg] || (wy_[dcbfeg] = []), wy_[dcbfeg]['push'](mpklo);
    }, 'removeEventListener': function (vzyxw, kjlgh) {
      var yzx0$_ = wy_[vzyxw];if (yzx0$_ && 0x0 < yzx0$_['length']) {
        for (var gilh = yzx0$_['length']; gilh--;) if (yzx0$_[gilh] === kjlgh) {
          yzx0$_['splice'](gilh, 0x1);break;
        }
      }
    }, 'dispatchEvent': function (jmkno) {
      var fdebcg = wy_[jmkno['type']];if (fdebcg) {
        for (var fcebd = 0x0; fcebd < fdebcg['length']; fcebd++) fdebcg[fcebd](jmkno);
      }
    } };olkp['default'] = hifdge;
}, function (mhilkj, _21) {
  'use strict';
  Object['defineProperty'](_21, '__esModule', { 'value': !0x0 }), _21['default'] = function () {
    return wx['createImage']();
  };
}, function (z$x, bdcge, y_x0) {
  'use strict';
  Object['defineProperty'](bdcge, '__esModule', { 'value': !0x0 });var spvrq = function (dihfeg, tsr, onkmpl) {
    return tsr && fjhgi(dihfeg['prototype'], tsr), onkmpl && fjhgi(dihfeg, onkmpl), dihfeg;
  };function fjhgi(idhgf, gcde) {
    for (var ifjkh = 0x0; ifjkh < gcde['length']; ifjkh++) {
      var lmkno = gcde[ifjkh];lmkno['enumerable'] = lmkno['enumerable'] || !0x1, lmkno['configurable'] = !0x0, 'value' in lmkno && (lmkno['writable'] = !0x0), Object['defineProperty'](idhgf, lmkno['key'], lmkno);
    }
  }var jnoklm = y_x0(0xd),
      glkjih = (x0zy_$ = jnoklm) && x0zy_$['__esModule'] ? x0zy_$ : { 'default': x0zy_$ },
      x0zy_$,
      ihljm = y_x0(0x8);function okln(vqtp, wsrtx) {
    if (!vqtp) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !wsrtx || 'object' != typeof wsrtx && 'function' != typeof wsrtx ? vqtp : wsrtx;
  }var swtrq = 0x0,
      nmplok = 0x1,
      _01$yz = 0x2,
      psrv = 0x3,
      mnik = 0x4,
      fghj = new WeakMap(),
      qtps = new WeakMap();new WeakMap(), new WeakMap(), (function (poqml, tprso) {
    if ('function' != typeof tprso && null !== tprso) throw new TypeError('Super expression must either be null or a function, not ' + typeof tprso);poqml['prototype'] = Object['create'](tprso && tprso['prototype'], { 'constructor': { 'value': poqml, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), tprso && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](poqml, tprso) : poqml['__proto__'] = tprso);
  }(limnkj, glkjih['default']), spvrq(limnkj, [{ 'key': 'load', 'value': function () {
      console['warn']('HTMLAudioElement.load() is not implemented.');
    } }, { 'key': 'play', 'value': function () {
      (0x0, ihljm['isSubContext'])() || fghj['get'](this)['play']();
    } }, { 'key': 'pause', 'value': function () {
      (0x0, ihljm['isSubContext'])() || fghj['get'](this)['pause']();
    } }, { 'key': 'canPlayType', 'value': function () {
      var ptsor = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return 'string' == typeof ptsor && (-0x1 < ptsor['indexOf']('audio/mpeg') || ptsor['indexOf']('audio/mp4')) ? 'probably' : '';
    } }, { 'key': 'cloneNode', 'value': function () {
      var abcefd = new limnkj();return (0x0, ihljm['isSubContext'])() || (abcefd['loop'] = fghj['get'](this)['loop'], abcefd['autoplay'] = fghj['get'](this)['loop'], abcefd['src'] = this['src']), abcefd;
    } }, { 'key': 'currentTime', 'get': function () {
      return (0x0, ihljm['isSubContext'])() ? 0x0 : fghj['get'](this)['currentTime'];
    }, 'set': function (roqnps) {
      (0x0, ihljm['isSubContext'])() || fghj['get'](this)['seek'](roqnps);
    } }, { 'key': 'src', 'get': function () {
      return qtps['get'](this);
    }, 'set': function (wtxsr) {
      qtps['set'](this, wtxsr), (0x0, ihljm['isSubContext'])() || (fghj['get'](this)['src'] = wtxsr);
    } }, { 'key': 'loop', 'get': function () {
      return !(0x0, ihljm['isSubContext'])() && fghj['get'](this)['loop'];
    }, 'set': function (qtwsr) {
      (0x0, ihljm['isSubContext'])() || (fghj['get'](this)['loop'] = qtwsr);
    } }, { 'key': 'autoplay', 'get': function () {
      return !(0x0, ihljm['isSubContext'])() && fghj['get'](this)['autoplay'];
    }, 'set': function (db) {
      (0x0, ihljm['isSubContext'])() || (fghj['get'](this)['autoplay'] = db);
    } }, { 'key': 'paused', 'get': function () {
      return !(0x0, ihljm['isSubContext'])() && fghj['get'](this)['paused'];
    } }]), spvrq = limnkj);function limnkj(xrvwt) {
    !function (nmklij, yxwvs) {
      if (!(nmklij instanceof yxwvs)) throw new TypeError('Cannot call a class as a function');
    }(this, limnkj);var hjgfie = okln(this, (limnkj['__proto__'] || Object['getPrototypeOf'](limnkj))['call'](this));if (hjgfie['HAVE_NOTHING'] = swtrq, hjgfie['HAVE_METADATA'] = nmplok, hjgfie['HAVE_CURRENT_DATA'] = _01$yz, hjgfie['HAVE_FUTURE_DATA'] = psrv, hjgfie['HAVE_ENOUGH_DATA'] = mnik, hjgfie['readyState'] = swtrq, (0x0, ihljm['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), okln(hjgfie);qtps['set'](hjgfie, '');var hcgefd = wx['createInnerAudioContext']();return fghj['set'](hjgfie, hcgefd), hcgefd['onCanplay'](function () {
      hjgfie['dispatchEvent']({ 'type': 'load' }), hjgfie['dispatchEvent']({ 'type': 'loadend' }), hjgfie['dispatchEvent']({ 'type': 'canplay' }), hjgfie['dispatchEvent']({ 'type': 'canplaythrough' }), hjgfie['dispatchEvent']({ 'type': 'loadedmetadata' }), hjgfie['readyState'] = _01$yz;
    }), hcgefd['onPlay'](function () {
      hjgfie['dispatchEvent']({ 'type': 'play' });
    }), hcgefd['onPause'](function () {
      hjgfie['dispatchEvent']({ 'type': 'pause' });
    }), hcgefd['onEnded'](function () {
      hjgfie['dispatchEvent']({ 'type': 'ended' }), hjgfie['readyState'] = mnik;
    }), hcgefd['onError'](function () {
      hjgfie['dispatchEvent']({ 'type': 'error' });
    }), xrvwt && (fghj['get'](hjgfie)['src'] = xrvwt), hjgfie;
  }bdcge['default'] = spvrq;
}, function (dfceba, orqst, rqnop) {
  'use strict';
  Object['defineProperty'](orqst, '__esModule', { 'value': !0x0 });var y1_z0 = rqnop(0xe),
      acefdb;(function (rxwts, vtw) {
    if ('function' != typeof vtw && null !== vtw) throw new TypeError('Super expression must either be null or a function, not ' + typeof vtw);rxwts['prototype'] = Object['create'](vtw && vtw['prototype'], { 'constructor': { 'value': rxwts, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), vtw && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](rxwts, vtw) : rxwts['__proto__'] = vtw);
  })(xtzyv, ((acefdb = y1_z0) && acefdb['__esModule'] ? acefdb : { 'default': acefdb })['default']), rqnop = xtzyv;function xtzyv() {
    return function (cabf, rtvsxw) {
      if (!(cabf instanceof rtvsxw)) throw new TypeError('Cannot call a class as a function');
    }(this, xtzyv), function (x$zvwy, xvwyt) {
      if (!x$zvwy) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !xvwyt || 'object' != typeof xvwyt && 'function' != typeof xvwyt ? x$zvwy : xvwyt;
    }(this, (xtzyv['__proto__'] || Object['getPrototypeOf'](xtzyv))['call'](this, 'audio'));
  }orqst['default'] = rqnop;
}, function (ytxzv, jihlkm, vyxz$) {
  'use strict';
  Object['defineProperty'](jihlkm, '__esModule', { 'value': !0x0 });var ecbadf = function (wysxv, z_x, dfce) {
    return z_x && egfih(wysxv['prototype'], z_x), dfce && egfih(wysxv, dfce), wysxv;
  };function egfih(mlnpoq, opqts) {
    for (var yz_w$x = 0x0; yz_w$x < opqts['length']; yz_w$x++) {
      var _z1y = opqts[yz_w$x];_z1y['enumerable'] = _z1y['enumerable'] || !0x1, _z1y['configurable'] = !0x0, 'value' in _z1y && (_z1y['writable'] = !0x0), Object['defineProperty'](mlnpoq, _z1y['key'], _z1y);
    }
  }var hejgif = vyxz$(0x4),
      psr;(function (tzywvx, igfjhk) {
    if ('function' != typeof igfjhk && null !== igfjhk) throw new TypeError('Super expression must either be null or a function, not ' + typeof igfjhk);tzywvx['prototype'] = Object['create'](igfjhk && igfjhk['prototype'], { 'constructor': { 'value': tzywvx, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), igfjhk && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](tzywvx, igfjhk) : tzywvx['__proto__'] = igfjhk);
  })(kilg, ((psr = hejgif) && psr['__esModule'] ? psr : { 'default': psr })['default']), ecbadf(kilg, [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]), ecbadf = kilg;function kilg(mnrqop) {
    return function (pqon, fhikg) {
      if (!(pqon instanceof fhikg)) throw new TypeError('Cannot call a class as a function');
    }(this, kilg), function (kljimn, rwvsx) {
      if (!kljimn) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !rwvsx || 'object' != typeof rwvsx && 'function' != typeof rwvsx ? kljimn : rwvsx;
    }(this, (kilg['__proto__'] || Object['getPrototypeOf'](kilg))['call'](this, mnrqop));
  }jihlkm['default'] = ecbadf;
}, function (xwytvz, mnoplk, kolp) {
  'use strict';
  kolp(0x10);
}, function (efhj, dgbfe, rxsvt) {
  'use strict';
  var eji = function (osrqn) {
    {
      if (osrqn && osrqn['__esModule']) return osrqn;var gefhid = {};if (null != osrqn) {
        for (var nlkmo in osrqn) Object['prototype']['hasOwnProperty']['call'](osrqn, nlkmo) && (gefhid[nlkmo] = osrqn[nlkmo]);
      }return gefhid['default'] = osrqn, gefhid;
    }
  }(rxsvt(0x1)),
      cfehg = rxsvt(0xa),
      dcbae = (syvxw = cfehg) && syvxw['__esModule'] ? syvxw : { 'default': syvxw },
      syvxw,
      cbaed = rxsvt(0x8);function svtqpr(eghfdi) {
    !function (fhgijk, gjlhik) {
      if (!(fhgijk instanceof gjlhik)) throw new TypeError('Cannot call a class as a function');
    }(this, svtqpr), this['target'] = eji['canvas'], this['currentTarget'] = eji['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = cbaed['noop'], this['stopPropagation'] = cbaed['noop'], this['type'] = eghfdi;
  }function onplq(stropq) {
    return function (cfeadb) {
      var tswr = new svtqpr(stropq);tswr['touches'] = cfeadb['touches'], tswr['targetTouches'] = Array['prototype']['slice']['call'](cfeadb['touches']), tswr['changedTouches'] = cfeadb['changedTouches'], tswr['timeStamp'] = cfeadb['timeStamp'], dcbae['default']['dispatchEvent'](tswr);
    };
  }wx['onTouchStart'](onplq('touchstart')), wx['onTouchMove'](onplq('touchmove')), wx['onTouchEnd'](onplq('touchend')), wx['onTouchCancel'](onplq('touchcancel'));
}, function (zy_$01, sport) {
  'use strict';
  Object['defineProperty'](sport, '__esModule', { 'value': !0x0 }), sport['noop'] = function () {}, sport['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (dgefb, defgh, mqnrpo) {
  'use strict';
  Object['defineProperty'](defgh, '__esModule', { 'value': !0x0 }), mqnrpo = mqnrpo(0x8), mqnrpo = { 'platform': wx['getSystemInfoSync']()['platform'], 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': mqnrpo['noop'], 'watchPosition': mqnrpo['noop'], 'clearWatch': mqnrpo['noop'] } }, defgh['default'] = mqnrpo;
}, function (lpokn, x$0_z) {
  'use strict';
  Object['defineProperty'](x$0_z, '__esModule', { 'value': !0x0 });var plnmo = function (glhkj, spnqro, gifed) {
    return spnqro && ifgje(glhkj['prototype'], spnqro), gifed && ifgje(glhkj, gifed), glhkj;
  };function ifgje(dgfcb, y1_z) {
    for (var onr = 0x0; onr < y1_z['length']; onr++) {
      var vrsqw = y1_z[onr];vrsqw['enumerable'] = vrsqw['enumerable'] || !0x1, vrsqw['configurable'] = !0x0, 'value' in vrsqw && (vrsqw['writable'] = !0x0), Object['defineProperty'](dgfcb, vrsqw['key'], vrsqw);
    }
  }var mknjlo = new WeakMap(),
      jhfe = new WeakMap(),
      $0_y = new WeakMap(),
      ijhmk = new WeakMap(),
      _1$320 = new WeakMap();function gefhdc(omkjn) {
    if ('function' == typeof this['on' + omkjn]) {
      for (var nkmoj = arguments['length'], gfhik = Array(0x1 < nkmoj ? nkmoj - 0x1 : 0x0), zxvtw = 0x1; zxvtw < nkmoj; zxvtw++) gfhik[zxvtw - 0x1] = arguments[zxvtw];this['on' + omkjn]['apply'](this, gfhik);
    }
  }function qswtvr(xsyvtw) {
    this['readyState'] = xsyvtw, gefhdc['call'](this, 'readystatechange');
  }plnmo(_z21$0, [{ 'key': 'abort', 'value': function () {
      var qrosnp = _1$320['get'](this);qrosnp && qrosnp['abort']();
    } }, { 'key': 'getAllResponseHeaders', 'value': function () {
      var psroq = ijhmk['get'](this);return Object['keys'](psroq)['map'](function (lijkhm) {
        return lijkhm + ':\x20' + psroq[lijkhm];
      })['join']('\x0a');
    } }, { 'key': 'getResponseHeader', 'value': function (ljnmk) {
      return ijhmk['get'](this)[ljnmk];
    } }, { 'key': 'open', 'value': function (cadfb, bdefc) {
      jhfe['set'](this, cadfb), mknjlo['set'](this, bdefc), qswtvr['call'](this, _z21$0['OPENED']);
    } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function () {
      var nlpomq = this,
          ighdfe = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';if (this['readyState'] !== _z21$0['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');wx['request']({ 'data': ighdfe, 'url': mknjlo['get'](this), 'method': jhfe['get'](this), 'header': $0_y['get'](this), 'responseType': this['responseType'], 'success': function (fgcdhe) {
          var kihjf = fgcdhe['data'],
              dfebc = fgcdhe['statusCode'],
              fgcdhe = fgcdhe['header'];if ('string' != typeof kihjf && !(kihjf instanceof ArrayBuffer)) try {
            kihjf = JSON['stringify'](kihjf);
          } catch (jlomnk) {}if (nlpomq['status'] = dfebc, ijhmk['set'](nlpomq, fgcdhe), gefhdc['call'](nlpomq, 'loadstart'), qswtvr['call'](nlpomq, _z21$0['HEADERS_RECEIVED']), qswtvr['call'](nlpomq, _z21$0['LOADING']), (nlpomq['response'] = kihjf) instanceof ArrayBuffer) {
            nlpomq['responseText'] = '';var yx$wz_ = new Uint8Array(kihjf),
                pmnlqo = yx$wz_['byteLength'];for (var vtzxyw = 0x0; vtzxyw < pmnlqo; vtzxyw++) nlpomq['responseText'] += String['fromCharCode'](yx$wz_[vtzxyw]);
          } else nlpomq['responseText'] = kihjf;qswtvr['call'](nlpomq, _z21$0['DONE']), gefhdc['call'](nlpomq, 'load'), gefhdc['call'](nlpomq, 'loadend');
        }, 'fail': function (wyz_x$) {
          wyz_x$ = wyz_x$['errMsg'], (-0x1 !== wyz_x$['indexOf']('abort') ? gefhdc['call'](nlpomq, 'abort') : gefhdc['call'](nlpomq, 'error', wyz_x$), gefhdc['call'](nlpomq, 'loadend'));
        } });
    } }, { 'key': 'setRequestHeader', 'value': function (eidfhg, wtzx) {
      var $z_xwy = $0_y['get'](this);$z_xwy[eidfhg] = wtzx, $0_y['set'](this, $z_xwy);
    } }]), plnmo = _z21$0;function _z21$0() {
    !function (zywtx, rotsp) {
      if (!(zywtx instanceof rotsp)) throw new TypeError('Cannot call a class as a function');
    }(this, _z21$0), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = !0x1, $0_y['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), ijhmk['set'](this, {});
  }plnmo['UNSEND'] = 0x0, plnmo['OPENED'] = 0x1, plnmo['HEADERS_RECEIVED'] = 0x2, plnmo['LOADING'] = 0x3, plnmo['DONE'] = 0x4, x$0_z['default'] = plnmo;
}, function (cafdbe, jkfg, yxws) {
  'use strict';
  Object['defineProperty'](jkfg, '__esModule', { 'value': !0x0 });var jlig = function (lponmq, qlm, $1z_2) {
    return qlm && mkpno(lponmq['prototype'], qlm), $1z_2 && mkpno(lponmq, $1z_2), lponmq;
  };function mkpno(xwzytv, egdifh) {
    for (var mrqno = 0x0; mrqno < egdifh['length']; mrqno++) {
      var lqnpo = egdifh[mrqno];lqnpo['enumerable'] = lqnpo['enumerable'] || !0x1, lqnpo['configurable'] = !0x0, 'value' in lqnpo && (lqnpo['writable'] = !0x0), Object['defineProperty'](xwzytv, lqnpo['key'], lqnpo);
    }
  }var higfde = yxws(0x8),
      adbf = new WeakMap();jlig(adcebf, [{ 'key': 'close', 'value': function (fabdec, jfigk) {
      this['readyState'] = adcebf['CLOSING'], adbf['get'](this)['close']({ 'code': fabdec, 'reason': jfigk });
    } }, { 'key': 'send', 'value': function (khjigf) {
      if ('string' != typeof khjigf && !(khjigf instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + khjigf + ' is invalid');adbf['get'](this)['send']({ 'data': khjigf });
    } }]), jlig = adcebf;function adcebf(dfeb) {
    var ligkj = this,
        txrws = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function (ghjeif, hgijfe) {
      if (!(ghjeif instanceof hgijfe)) throw new TypeError('Cannot call a class as a function');
    }(this, adcebf), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, (0x0, higfde['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if ('string' != typeof dfeb || !/(^ws:\/\/)|(^wss:\/\/)/['test'](dfeb)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + dfeb + '\' is invalid');return this['url'] = dfeb, this['readyState'] = adcebf['CONNECTING'], txrws = wx['connectSocket']({ 'url': dfeb, 'protocols': Array['isArray'](txrws) ? txrws : [txrws] }), (adbf['set'](this, txrws), txrws['onClose'](function (yztxw) {
      ligkj['readyState'] = adcebf['CLOSED'], 'function' == typeof ligkj['onclose'] && ligkj['onclose'](yztxw);
    }), txrws['onMessage'](function (xwtsyv) {
      'function' == typeof ligkj['onmessage'] && ligkj['onmessage'](xwtsyv);
    }), txrws['onOpen'](function () {
      ligkj['readyState'] = adcebf['OPEN'], 'function' == typeof ligkj['onopen'] && ligkj['onopen']();
    }), txrws['onError'](function (qsnop) {
      'function' == typeof ligkj['onerror'] && ligkj['onerror'](new Error(qsnop['errMsg']));
    }), this);
  }jlig['CONNECTING'] = 0x0, jlig['OPEN'] = 0x1, jlig['CLOSING'] = 0x2, jlig['CLOSED'] = 0x3, jkfg['default'] = jlig;
}, function ($3_10, nlpomk, glijkh) {
  'use strict';
  Object['defineProperty'](nlpomk, '__esModule', { 'value': !0x0 });var hecd = function (hdcgfe, strpq, ihkjgf) {
    return strpq && z$v(hdcgfe['prototype'], strpq), ihkjgf && z$v(hdcgfe, ihkjgf), hdcgfe;
  };function z$v($vyzxw, wz_$x) {
    for (var vxrwts = 0x0; vxrwts < wz_$x['length']; vxrwts++) {
      var ihdgf = wz_$x[vxrwts];ihdgf['enumerable'] = ihdgf['enumerable'] || !0x1, ihdgf['configurable'] = !0x0, 'value' in ihdgf && (ihdgf['writable'] = !0x0), Object['defineProperty']($vyzxw, ihdgf['key'], ihdgf);
    }
  }var gfbced = glijkh(0x8);hecd(eabf, [{ 'key': 'construct', 'value': function () {
      if ((0x0, gfbced['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
    } }]), hecd = eabf;function eabf() {
    !function (jihfkg, _0321) {
      if (!(jihfkg instanceof _0321)) throw new TypeError('Cannot call a class as a function');
    }(this, eabf);
  }nlpomk['default'] = hecd;
}, function (mjknl, pqtrv, wtrsv) {
  'use strict';
  Object['defineProperty'](pqtrv, '__esModule', { 'value': !0x0 });var wsxrtv = wtrsv(0x8),
      tzvwyx = { get 'length'() {
      return wx['getStorageInfoSync']()['keys']['length'];
    }, 'key': function (qmprno) {
      return wx['getStorageInfoSync']()['keys'][qmprno];
    }, 'getItem': function (kifgjh) {
      return wx['getStorageSync'](kifgjh);
    }, 'setItem': function (vsxwy, yxzwv) {
      return wx['setStorageSync'](vsxwy, yxzwv);
    }, 'removeItem': function (qtwvs) {
      wx['removeStorageSync'](qtwvs);
    }, 'clear': function () {
      wx['clearStorageSync']();
    } },
      fdgceh = {};wtrsv = { get 'length'() {
      return Object['keys'](fdgceh)['length'];
    }, 'key': function (qnomlp) {
      return Object['keys'](fdgceh)[qnomlp];
    }, 'getItem': function (gjhki) {
      return fdgceh[gjhki];
    }, 'setItem': function (tvrxws, xstwvy) {
      fdgceh[tvrxws] = xstwvy;
    }, 'removeItem': function (fgeij) {
      delete fdgceh[fgeij];
    }, 'clear': function () {
      fdgceh = {};
    } }, tzvwyx = (0x0, wsxrtv['isSubContext'])() ? wtrsv : tzvwyx, pqtrv['default'] = tzvwyx;
}, function (wtxyz, ecghf) {
  'use strict';
  Object['defineProperty'](ecghf, '__esModule', { 'value': !0x0 }), ecghf['default'] = { 'href': 'cccgame.js', 'reload': function () {} };
}]);