var _$ = wx.x$;
!function (zxuwy) {
  var ghij = {};function __webpack_require__(tqpru) {
    if (ghij[tqpru]) return ghij[tqpru]['exports'];var swurt = ghij[tqpru] = { 'exports': {}, 'id': tqpru, 'loaded': !0x1 };return zxuwy[tqpru]['call'](swurt['exports'], swurt, swurt['exports'], __webpack_require__), swurt['loaded'] = !0x0, swurt['exports'];
  }__webpack_require__['m'] = zxuwy, __webpack_require__['c'] = ghij, __webpack_require__['p'] = '', __webpack_require__(0x0);
}([function (nsqp, dhefgi, il) {
  'use strict';

  var degfhi = function (v$wzxy) {
    {
      if (v$wzxy && v$wzxy['__esModule']) return v$wzxy;var $y0zxw = {};if (null != v$wzxy) {
        for (var kigjh in v$wzxy) Object['prototype']['hasOwnProperty']['call'](v$wzxy, kigjh) && ($y0zxw[kigjh] = v$wzxy[kigjh]);
      }return $y0zxw['default'] = v$wzxy, $y0zxw;
    }
  }(il(0x1)),
      mijlh = il(0x4),
      jlkhmi = (facbe = mijlh) && facbe['__esModule'] ? facbe : { 'default': facbe },
      facbe,
      jklom = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
    degfhi['addEventListener'] = function (chf, imknl) {
      degfhi['document']['addEventListener'](chf, imknl);
    }, degfhi['removeEventListener'] = function (fdh, tsxvwu) {
      degfhi['document']['removeEventListener'](fdh, tsxvwu);
    }, degfhi['canvas'] && (degfhi['canvas']['addEventListener'] = degfhi['addEventListener'], degfhi['canvas']['removeEventListener'] = degfhi['removeEventListener']), jklom['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new jlkhmi['default']('canvas'), sharedCanvas['addEventListener'] = degfhi['addEventListener'], sharedCanvas['removeEventListener'] = degfhi['removeEventListener']);var $ywz0 = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === $ywz0) {
      for (var lmkonp in degfhi) {
        var jlkmi = Object['getOwnPropertyDescriptor'](jklom, lmkonp);jlkmi && !0x0 !== jlkmi['configurable'] || Object['defineProperty'](window, lmkonp, { 'value': degfhi[lmkonp] });
      }for (var ijhlkg in degfhi['document']) {
        var eifhjg = Object['getOwnPropertyDescriptor'](jklom['document'], ijhlkg);eifhjg && !0x0 !== eifhjg['configurable'] || Object['defineProperty'](jklom['document'], ijhlkg, { 'value': degfhi['document'][ijhlkg] });
      }window['parent'] = window;
    } else {
      for (var tsrwvu in degfhi) jklom[tsrwvu] = degfhi[tsrwvu];jklom['window'] = degfhi, window = jklom, window['top'] = window['parent'] = window;
    }
  }());
}, function (mkonlp, z2$01y, xwvzyu) {
  'use strict';

  Object['defineProperty'](z2$01y, '__esModule', { 'value': !0x0 }), z2$01y['cancelAnimationFrame'] = z2$01y['requestAnimationFrame'] = z2$01y['clearInterval'] = z2$01y['clearTimeout'] = z2$01y['setInterval'] = z2$01y['setTimeout'] = z2$01y['canvas'] = z2$01y['location'] = z2$01y['localStorage'] = z2$01y['HTMLElement'] = z2$01y['FileReader'] = z2$01y['Audio'] = z2$01y['Image'] = z2$01y['WebSocket'] = z2$01y['XMLHttpRequest'] = z2$01y['navigator'] = z2$01y['document'] = void 0x0;var nomklj = xwvzyu(0x2);Object['keys'](nomklj)['forEach'](function ($0yxzw) {
    'default' !== $0yxzw && '__esModule' !== $0yxzw && Object['defineProperty'](z2$01y, $0yxzw, { 'enumerable': !0x0, 'get': function () {
        return nomklj[$0yxzw];
      } });
  });var jgkhf = xwvzyu(0x3);Object['keys'](jgkhf)['forEach'](function (xutvwy) {
    'default' !== xutvwy && '__esModule' !== xutvwy && Object['defineProperty'](z2$01y, xutvwy, { 'enumerable': !0x0, 'get': function () {
        return jgkhf[xutvwy];
      } });
  });var uwsvx = pmqro(xwvzyu(0x9)),
      nqrsp = xwvzyu(0x11),
      qrvtsu = pmqro(xwvzyu(0xa)),
      nmpol = pmqro(xwvzyu(0x12)),
      svurqt = pmqro(xwvzyu(0x13)),
      rvstw = pmqro(xwvzyu(0x14)),
      lnojk = pmqro(xwvzyu(0xb)),
      qtsu = pmqro(xwvzyu(0xc)),
      nopm = pmqro(xwvzyu(0x15)),
      tqsrop = pmqro(xwvzyu(0x4)),
      xyut = pmqro(xwvzyu(0x16));xwvzyu = pmqro(xwvzyu(0x17));function pmqro(bcgefd) {
    return bcgefd && bcgefd['__esModule'] ? bcgefd : { 'default': bcgefd };
  }z2$01y['document'] = qrvtsu['default'], z2$01y['navigator'] = nmpol['default'], z2$01y['XMLHttpRequest'] = svurqt['default'], z2$01y['WebSocket'] = rvstw['default'], z2$01y['Image'] = lnojk['default'], z2$01y['Audio'] = qtsu['default'], z2$01y['FileReader'] = nopm['default'], z2$01y['HTMLElement'] = tqsrop['default'], z2$01y['localStorage'] = xyut['default'], z2$01y['location'] = xwvzyu['default'], uwsvx = (0x0, nqrsp['isSubContext'])() ? void 0x0 : new uwsvx['default'](), (z2$01y['canvas'] = uwsvx, z2$01y['setTimeout'] = setTimeout, z2$01y['setInterval'] = setInterval, z2$01y['clearTimeout'] = clearTimeout, z2$01y['clearInterval'] = clearInterval, z2$01y['requestAnimationFrame'] = requestAnimationFrame, z2$01y['cancelAnimationFrame'] = cancelAnimationFrame);
}, function (tvusx, dghc) {
  'use strict';

  Object['defineProperty'](dghc, '__esModule', { 'value': !0x0 });var $xz1 = wx['getSystemInfoSync'](),
      $xwyvz = $xz1['screenWidth'],
      pqn = $xz1['screenHeight'],
      $xz1 = $xz1['devicePixelRatio'];$xwyvz = dghc['innerWidth'] = $xwyvz, pqn = dghc['innerHeight'] = pqn, dghc['devicePixelRatio'] = $xz1, dghc['screen'] = { 'availWidth': $xwyvz, 'availHeight': pqn }, dghc['performance'] = { 'now': function () {
      return Date['now']() / 0x3e8;
    } }, dghc['ontouchstart'] = null, dghc['ontouchmove'] = null, dghc['ontouchend'] = null;
}, function (cdgfbe, prsutq, yxw0$z) {
  'use strict';

  Object['defineProperty'](prsutq, '__esModule', { 'value': !0x0 }), prsutq['HTMLCanvasElement'] = prsutq['HTMLImageElement'] = void 0x0;var pmknlo = yxw0$z(0x4);yxw0$z = (iljhkg = pmknlo) && iljhkg['__esModule'] ? iljhkg : { 'default': iljhkg };var iljhkg;function vqsr(ijhlm, ljigk) {
    if (!(ijhlm instanceof ljigk)) throw new TypeError('Cannot call a class as a function');
  }function opsrt(qsurt, osnqpr) {
    if (!qsurt) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !osnqpr || 'object' != typeof osnqpr && 'function' != typeof osnqpr ? qsurt : osnqpr;
  }function xywtuv(qrtvu, bfaed) {
    if ('function' != typeof bfaed && null !== bfaed) throw new TypeError('Super expression must either be null or a function, not ' + typeof bfaed);qrtvu['prototype'] = Object['create'](bfaed && bfaed['prototype'], { 'constructor': { 'value': qrtvu, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), bfaed && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](qrtvu, bfaed) : qrtvu['__proto__'] = bfaed);
  }prsutq['HTMLImageElement'] = (xywtuv(z0$xy, yxw0$z['default']), z0$xy);function z0$xy() {
    return vqsr(this, z0$xy), opsrt(this, (z0$xy['__proto__'] || Object['getPrototypeOf'](z0$xy))['call'](this, 'img'));
  }prsutq['HTMLCanvasElement'] = (xywtuv(rvtuqs, yxw0$z['default']), rvtuqs);function rvtuqs() {
    return vqsr(this, rvtuqs), opsrt(this, (rvtuqs['__proto__'] || Object['getPrototypeOf'](rvtuqs))['call'](this, 'canvas'));
  }
}, function (onmrp, lnpmq, gdcfbe) {
  'use strict';

  Object['defineProperty'](lnpmq, '__esModule', { 'value': !0x0 });var $30412 = function (jgfie, rqspno, $13z2) {
    return rqspno && cefadb(jgfie['prototype'], rqspno), $13z2 && cefadb(jgfie, $13z2), jgfie;
  };function cefadb(hlijg, nkmolp) {
    for (var quvrs = 0x0; quvrs < nkmolp['length']; quvrs++) {
      var xvzy$ = nkmolp[quvrs];xvzy$['enumerable'] = xvzy$['enumerable'] || !0x1, xvzy$['configurable'] = !0x0, 'value' in xvzy$ && (xvzy$['writable'] = !0x0), Object['defineProperty'](hlijg, xvzy$['key'], xvzy$);
    }
  }var xwy0z = gdcfbe(0x5),
      z32$01 = (dieh = xwy0z) && dieh['__esModule'] ? dieh : { 'default': dieh },
      dieh,
      ehgcd = gdcfbe(0x8),
      xuvywt = gdcfbe(0x2);(function (eac, lijnmk) {
    if ('function' != typeof lijnmk && null !== lijnmk) throw new TypeError('Super expression must either be null or a function, not ' + typeof lijnmk);eac['prototype'] = Object['create'](lijnmk && lijnmk['prototype'], { 'constructor': { 'value': eac, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), lijnmk && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](eac, lijnmk) : eac['__proto__'] = lijnmk);
  })(posrqt, z32$01['default']), $30412(posrqt, [{ 'key': 'setAttribute', 'value': function (dhfcg, qsuv) {
      this[dhfcg] = qsuv;
    } }, { 'key': 'getAttribute', 'value': function (jigkh) {
      return this[jigkh];
    } }, { 'key': 'getBoundingClientRect', 'value': function () {
      return { 'top': 0x0, 'left': 0x0, 'width': xuvywt['innerWidth'], 'height': xuvywt['innerHeight'] };
    } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
      var hkimj = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](hkimj) ? 0x0 : hkimj;
    } }, { 'key': 'clientHeight', 'get': function () {
      var $0yxwz = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN']($0yxwz) ? 0x0 : $0yxwz;
    } }]), $30412 = posrqt;function posrqt() {
    var lkmnij = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';!function (nkopl, gfeih) {
      if (!(nkopl instanceof gfeih)) throw new TypeError('Cannot call a class as a function');
    }(this, posrqt);var w0xy$ = function (mojl, ospqrn) {
      if (!mojl) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !ospqrn || 'object' != typeof ospqrn && 'function' != typeof ospqrn ? mojl : ospqrn;
    }(this, (posrqt['__proto__'] || Object['getPrototypeOf'](posrqt))['call'](this));return w0xy$['className'] = '', w0xy$['childern'] = [], w0xy$['style'] = { 'width': xuvywt['innerWidth'] + 'px', 'height': xuvywt['innerHeight'] + 'px' }, w0xy$['insertBefore'] = ehgcd['noop'], w0xy$['innerHTML'] = '', w0xy$['tagName'] = lkmnij['toUpperCase'](), w0xy$;
  }lnpmq['default'] = $30412;
}, function ($zyxvw, fedigh, z02y) {
  'use strict';

  Object['defineProperty'](fedigh, '__esModule', { 'value': !0x0 });var bcgdfe = z02y(0x6),
      swvrtu;(function (qonml, adecf) {
    if ('function' != typeof adecf && null !== adecf) throw new TypeError('Super expression must either be null or a function, not ' + typeof adecf);qonml['prototype'] = Object['create'](adecf && adecf['prototype'], { 'constructor': { 'value': qonml, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), adecf && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](qonml, adecf) : qonml['__proto__'] = adecf);
  })(qopnr, ((swvrtu = bcgdfe) && swvrtu['__esModule'] ? swvrtu : { 'default': swvrtu })['default']), z02y = qopnr;function qopnr() {
    !function (pqtos, sqp) {
      if (!(pqtos instanceof sqp)) throw new TypeError('Cannot call a class as a function');
    }(this, qopnr);var yxvzwu = function (xy0zw, y102) {
      if (!xy0zw) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !y102 || 'object' != typeof y102 && 'function' != typeof y102 ? xy0zw : y102;
    }(this, (qopnr['__proto__'] || Object['getPrototypeOf'](qopnr))['call'](this));return yxvzwu['className'] = '', yxvzwu['children'] = [], yxvzwu;
  }fedigh['default'] = z02y;
}, function (qopnlm, fbced, oplkn) {
  'use strict';

  Object['defineProperty'](fbced, '__esModule', { 'value': !0x0 });var nkljo = function (gjhik, srpoqn, imkhj) {
    return srpoqn && beda(gjhik['prototype'], srpoqn), imkhj && beda(gjhik, imkhj), gjhik;
  };function beda(hdfegi, fdaeb) {
    for (var mhilk = 0x0; mhilk < fdaeb['length']; mhilk++) {
      var zy012$ = fdaeb[mhilk];zy012$['enumerable'] = zy012$['enumerable'] || !0x1, zy012$['configurable'] = !0x0, 'value' in zy012$ && (zy012$['writable'] = !0x0), Object['defineProperty'](hdfegi, zy012$['key'], zy012$);
    }
  }var knpoml = oplkn(0x7),
      urwt;(function (mkli, pklmn) {
    if ('function' != typeof pklmn && null !== pklmn) throw new TypeError('Super expression must either be null or a function, not ' + typeof pklmn);mkli['prototype'] = Object['create'](pklmn && pklmn['prototype'], { 'constructor': { 'value': mkli, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), pklmn && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](mkli, pklmn) : mkli['__proto__'] = pklmn);
  })(wutrv, ((urwt = knpoml) && urwt['__esModule'] ? urwt : { 'default': urwt })['default']), nkljo(wutrv, [{ 'key': 'appendChild', 'value': function (cbae) {
      if (!(cbae instanceof wutrv)) throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');this['childNodes']['push'](cbae);
    } }, { 'key': 'cloneNode', 'value': function () {
      var mrqnop = Object['create'](this);return Object['assign'](mrqnop, this), mrqnop;
    } }, { 'key': 'removeChild', 'value': function (utvq) {
      var cfgdh = this['childNodes']['findIndex'](function (ejhfi) {
        return ejhfi === utvq;
      });return -0x1 < cfgdh ? this['childNodes']['splice'](cfgdh, 0x1) : null;
    } }]), nkljo = wutrv;function wutrv() {
    !function (lghikj, qspnro) {
      if (!(lghikj instanceof qspnro)) throw new TypeError('Cannot call a class as a function');
    }(this, wutrv);var fchge = function (zyvxw$, wv$) {
      if (!zyvxw$) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !wv$ || 'object' != typeof wv$ && 'function' != typeof wv$ ? zyvxw$ : wv$;
    }(this, (wutrv['__proto__'] || Object['getPrototypeOf'](wutrv))['call'](this));return fchge['childNodes'] = [], fchge;
  }fbced['default'] = nkljo;
}, function (ehigfd, zx0y) {
  'use strict';

  Object['defineProperty'](zx0y, '__esModule', { 'value': !0x0 });var yx1$ = function (kimh, fged, eabfdc) {
    return fged && opml(kimh['prototype'], fged), eabfdc && opml(kimh, eabfdc), kimh;
  };function opml(cfbg, lmhki) {
    for (var qmorn = 0x0; qmorn < lmhki['length']; qmorn++) {
      var uvxs = lmhki[qmorn];uvxs['enumerable'] = uvxs['enumerable'] || !0x1, uvxs['configurable'] = !0x0, 'value' in uvxs && (uvxs['writable'] = !0x0), Object['defineProperty'](cfbg, uvxs['key'], uvxs);
    }
  }var yvw$ = new WeakMap();yx1$(vytux, [{ 'key': 'addEventListener', 'value': function (klmjo, bfdeac) {
      var vrstq = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {},
          qnpm = yvw$['get'](this);qnpm || yvw$['set'](this, qnpm = {}), qnpm[klmjo] || (qnpm[klmjo] = []), qnpm[klmjo]['push'](bfdeac), vrstq['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), vrstq['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), vrstq['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
    } }, { 'key': 'removeEventListener', 'value': function (uvxst, uvwtsx) {
      var klojm = yvw$['get'](this)[uvxst];if (klojm && 0x0 < klojm['length']) {
        for (var fhdi = klojm['length']; fhdi--;) if (klojm[fhdi] === uvwtsx) {
          klojm['splice'](fhdi, 0x1);break;
        }
      }
    } }, { 'key': 'dispatchEvent', 'value': function () {
      var mjni = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {},
          jgikh = yvw$['get'](this)[mjni['type']];if (jgikh) {
        for (var yxzvw = 0x0; yxzvw < jgikh['length']; yxzvw++) jgikh[yxzvw](mjni);
      }
    } }]), yx1$ = vytux;function vytux() {
    !function (chfgd, abfdce) {
      if (!(chfgd instanceof abfdce)) throw new TypeError('Cannot call a class as a function');
    }(this, vytux), yvw$['set'](this, {});
  }zx0y['default'] = yx1$;
}, function ($0z321, $z310) {
  'use strict';

  Object['defineProperty']($z310, '__esModule', { 'value': !0x0 }), $z310['noop'] = function () {}, $z310['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (hdfei, tspo, nomk) {
  'use strict';

  Object['defineProperty'](tspo, '__esModule', { 'value': !0x0 }), tspo['default'] = function () {
    var y0wz = wx['createCanvas']();return y0wz['type'] = 'canvas', y0wz['__proto__']['__proto__'] = new snqrpo['default']('canvas'), y0wz['getContext'], (y0wz['getBoundingClientRect'] = function () {
      return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
    }, y0wz);
  }, nomk(0x3);var snqrpo = uqrsv(nomk(0x4));uqrsv(nomk(0xa));function uqrsv(njmlok) {
    return njmlok && njmlok['__esModule'] ? njmlok : { 'default': njmlok };
  }
}, function (mnqop, z12y$0, nlkp) {
  'use strict';

  Object['defineProperty'](z12y$0, '__esModule', { 'value': !0x0 });var qnlpmo = function (qprtso) {
    {
      if (qprtso && qprtso['__esModule']) return qprtso;var uxst = {};if (null != qprtso) {
        for (var nloqp in qprtso) Object['prototype']['hasOwnProperty']['call'](qprtso, nloqp) && (uxst[nloqp] = qprtso[nloqp]);
      }return uxst['default'] = qprtso, uxst;
    }
  }(nlkp(0x1)),
      tposrq = xy0w$(nlkp(0x4)),
      xvwzy$ = xy0w$(nlkp(0xb)),
      uyxwt = xy0w$(nlkp(0xc)),
      zyx$v = xy0w$(nlkp(0x9));function xy0w$(svwt) {
    return svwt && svwt['__esModule'] ? svwt : { 'default': svwt };
  }nlkp(0xf);var qrupst = {},
      mkoljn = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': qnlpmo, 'hidden': !0x1, 'style': {}, 'location': qnlpmo['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new tposrq['default']('head'), 'body': new tposrq['default']('body'), 'createElement': function (nrospq) {
      return 'canvas' === nrospq ? new zyx$v['default']() : 'audio' === nrospq ? new uyxwt['default']() : 'img' === nrospq ? new xvwzy$['default']() : new tposrq['default'](nrospq);
    }, 'getElementById': function (cdegfb) {
      return cdegfb === qnlpmo['canvas']['id'] ? qnlpmo['canvas'] : null;
    }, 'getElementsByTagName': function (pnqol) {
      return 'head' === pnqol ? [mkoljn['head']] : 'body' === pnqol ? [mkoljn['body']] : 'canvas' === pnqol ? [qnlpmo['canvas']] : [];
    }, 'querySelector': function (olnmjk) {
      return 'head' === olnmjk ? mkoljn['head'] : 'body' === olnmjk ? mkoljn['body'] : 'canvas' === olnmjk || olnmjk === '#' + qnlpmo['canvas']['id'] ? qnlpmo['canvas'] : null;
    }, 'querySelectorAll': function (ors) {
      return 'head' === ors ? [mkoljn['head']] : 'body' === ors ? [mkoljn['body']] : 'canvas' === ors ? [qnlpmo['canvas']] : [];
    }, 'addEventListener': function (ijlhg, tvuws) {
      qrupst[ijlhg] || (qrupst[ijlhg] = []), qrupst[ijlhg]['push'](tvuws);
    }, 'removeEventListener': function (ihjmkl, jnli) {
      var gkfij = qrupst[ihjmkl];if (gkfij && 0x0 < gkfij['length']) {
        for (var ceabd = gkfij['length']; ceabd--;) if (gkfij[ceabd] === jnli) {
          gkfij['splice'](ceabd, 0x1);break;
        }
      }
    }, 'dispatchEvent': function (kjfhgi) {
      var x$vwy = qrupst[kjfhgi['type']];if (x$vwy) {
        for (var qvtrsu = 0x0; qvtrsu < x$vwy['length']; qvtrsu++) x$vwy[qvtrsu](kjfhgi);
      }
    } };z12y$0['default'] = mkoljn;
}, function (njlimk, y21$0) {
  'use strict';

  Object['defineProperty'](y21$0, '__esModule', { 'value': !0x0 }), y21$0['default'] = function () {
    return wx['createImage']();
  };
}, function (twsrvu, y0xwz, psoq) {
  'use strict';

  Object['defineProperty'](y0xwz, '__esModule', { 'value': !0x0 });var y0z$1 = function (xtvyw, vyuzxw, ptsrq) {
    return vyuzxw && fcgde(xtvyw['prototype'], vyuzxw), ptsrq && fcgde(xtvyw, ptsrq), xtvyw;
  };function fcgde(y2z$01, lop) {
    for (var mrpn = 0x0; mrpn < lop['length']; mrpn++) {
      var fghc = lop[mrpn];fghc['enumerable'] = fghc['enumerable'] || !0x1, fghc['configurable'] = !0x0, 'value' in fghc && (fghc['writable'] = !0x0), Object['defineProperty'](y2z$01, fghc['key'], fghc);
    }
  }var rusv = psoq(0xd),
      xv$yz = (kmiln = rusv) && kmiln['__esModule'] ? kmiln : { 'default': kmiln },
      kmiln,
      $zxvw = psoq(0x8);function z$y012(nmplok, lmnk) {
    if (!nmplok) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !lmnk || 'object' != typeof lmnk && 'function' != typeof lmnk ? nmplok : lmnk;
  }var ostqpr = 0x0,
      cadb = 0x1,
      nkmjol = 0x2,
      jehigf = 0x3,
      imkhl = 0x4,
      xusvwt = new WeakMap(),
      $0xy = new WeakMap();new WeakMap(), new WeakMap(), (function (gjfih, ihfjk) {
    if ('function' != typeof ihfjk && null !== ihfjk) throw new TypeError('Super expression must either be null or a function, not ' + typeof ihfjk);gjfih['prototype'] = Object['create'](ihfjk && ihfjk['prototype'], { 'constructor': { 'value': gjfih, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), ihfjk && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](gjfih, ihfjk) : gjfih['__proto__'] = ihfjk);
  }(x$zyw0, xv$yz['default']), y0z$1(x$zyw0, [{ 'key': 'load', 'value': function () {
      console['warn']('HTMLAudioElement.load() is not implemented.');
    } }, { 'key': 'play', 'value': function () {
      (0x0, $zxvw['isSubContext'])() || xusvwt['get'](this)['play']();
    } }, { 'key': 'pause', 'value': function () {
      (0x0, $zxvw['isSubContext'])() || xusvwt['get'](this)['pause']();
    } }, { 'key': 'canPlayType', 'value': function () {
      var rmq = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return 'string' == typeof rmq && (-0x1 < rmq['indexOf']('audio/mpeg') || rmq['indexOf']('audio/mp4')) ? 'probably' : '';
    } }, { 'key': 'cloneNode', 'value': function () {
      var $13042 = new x$zyw0();return (0x0, $zxvw['isSubContext'])() || ($13042['loop'] = xusvwt['get'](this)['loop'], $13042['autoplay'] = xusvwt['get'](this)['loop'], $13042['src'] = this['src']), $13042;
    } }, { 'key': 'currentTime', 'get': function () {
      return (0x0, $zxvw['isSubContext'])() ? 0x0 : xusvwt['get'](this)['currentTime'];
    }, 'set': function ($xvzy) {
      (0x0, $zxvw['isSubContext'])() || xusvwt['get'](this)['seek']($xvzy);
    } }, { 'key': 'src', 'get': function () {
      return $0xy['get'](this);
    }, 'set': function (ostpr) {
      $0xy['set'](this, ostpr), (0x0, $zxvw['isSubContext'])() || (xusvwt['get'](this)['src'] = ostpr);
    } }, { 'key': 'loop', 'get': function () {
      return !(0x0, $zxvw['isSubContext'])() && xusvwt['get'](this)['loop'];
    }, 'set': function (tuqps) {
      (0x0, $zxvw['isSubContext'])() || (xusvwt['get'](this)['loop'] = tuqps);
    } }, { 'key': 'autoplay', 'get': function () {
      return !(0x0, $zxvw['isSubContext'])() && xusvwt['get'](this)['autoplay'];
    }, 'set': function (fhigjk) {
      (0x0, $zxvw['isSubContext'])() || (xusvwt['get'](this)['autoplay'] = fhigjk);
    } }, { 'key': 'paused', 'get': function () {
      return !(0x0, $zxvw['isSubContext'])() && xusvwt['get'](this)['paused'];
    } }]), y0z$1 = x$zyw0);function x$zyw0(rvuwt) {
    !function (pmonk, kjligh) {
      if (!(pmonk instanceof kjligh)) throw new TypeError('Cannot call a class as a function');
    }(this, x$zyw0);var ywzux = z$y012(this, (x$zyw0['__proto__'] || Object['getPrototypeOf'](x$zyw0))['call'](this));if (ywzux['HAVE_NOTHING'] = ostqpr, ywzux['HAVE_METADATA'] = cadb, ywzux['HAVE_CURRENT_DATA'] = nkmjol, ywzux['HAVE_FUTURE_DATA'] = jehigf, ywzux['HAVE_ENOUGH_DATA'] = imkhl, ywzux['readyState'] = ostqpr, (0x0, $zxvw['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), z$y012(ywzux);$0xy['set'](ywzux, '');var mqpon = wx['createInnerAudioContext']();return xusvwt['set'](ywzux, mqpon), mqpon['onCanplay'](function () {
      ywzux['dispatchEvent']({ 'type': 'load' }), ywzux['dispatchEvent']({ 'type': 'loadend' }), ywzux['dispatchEvent']({ 'type': 'canplay' }), ywzux['dispatchEvent']({ 'type': 'canplaythrough' }), ywzux['dispatchEvent']({ 'type': 'loadedmetadata' }), ywzux['readyState'] = nkmjol;
    }), mqpon['onPlay'](function () {
      ywzux['dispatchEvent']({ 'type': 'play' });
    }), mqpon['onPause'](function () {
      ywzux['dispatchEvent']({ 'type': 'pause' });
    }), mqpon['onEnded'](function () {
      ywzux['dispatchEvent']({ 'type': 'ended' }), ywzux['readyState'] = imkhl;
    }), mqpon['onError'](function () {
      ywzux['dispatchEvent']({ 'type': 'error' });
    }), rvuwt && (xusvwt['get'](ywzux)['src'] = rvuwt), ywzux;
  }y0xwz['default'] = y0z$1;
}, function (yz, yz10, ebfcgd) {
  'use strict';

  Object['defineProperty'](yz10, '__esModule', { 'value': !0x0 });var nrosq = ebfcgd(0xe),
      uxzv;(function ($0xz, hdfegc) {
    if ('function' != typeof hdfegc && null !== hdfegc) throw new TypeError('Super expression must either be null or a function, not ' + typeof hdfegc);$0xz['prototype'] = Object['create'](hdfegc && hdfegc['prototype'], { 'constructor': { 'value': $0xz, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), hdfegc && (Object['setPrototypeOf'] ? Object['setPrototypeOf']($0xz, hdfegc) : $0xz['__proto__'] = hdfegc);
  })(tuy, ((uxzv = nrosq) && uxzv['__esModule'] ? uxzv : { 'default': uxzv })['default']), ebfcgd = tuy;function tuy() {
    return function (imkjlh, jhfgk) {
      if (!(imkjlh instanceof jhfgk)) throw new TypeError('Cannot call a class as a function');
    }(this, tuy), function (dfeig, vtws) {
      if (!dfeig) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !vtws || 'object' != typeof vtws && 'function' != typeof vtws ? dfeig : vtws;
    }(this, (tuy['__proto__'] || Object['getPrototypeOf'](tuy))['call'](this, 'audio'));
  }yz10['default'] = ebfcgd;
}, function (z$1y2, ijeg, lponqm) {
  'use strict';

  Object['defineProperty'](ijeg, '__esModule', { 'value': !0x0 });var jgei = function (zxy$1, kplonm, kmjno) {
    return kplonm && ifhed(zxy$1['prototype'], kplonm), kmjno && ifhed(zxy$1, kmjno), zxy$1;
  };function ifhed(xz01$y, uqtr) {
    for (var z$ = 0x0; z$ < uqtr['length']; z$++) {
      var jnmol = uqtr[z$];jnmol['enumerable'] = jnmol['enumerable'] || !0x1, jnmol['configurable'] = !0x0, 'value' in jnmol && (jnmol['writable'] = !0x0), Object['defineProperty'](xz01$y, jnmol['key'], jnmol);
    }
  }var nqlpm = lponqm(0x4),
      hlkij;(function (twyxv, qpnorm) {
    if ('function' != typeof qpnorm && null !== qpnorm) throw new TypeError('Super expression must either be null or a function, not ' + typeof qpnorm);twyxv['prototype'] = Object['create'](qpnorm && qpnorm['prototype'], { 'constructor': { 'value': twyxv, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), qpnorm && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](twyxv, qpnorm) : twyxv['__proto__'] = qpnorm);
  })($yxw0z, ((hlkij = nqlpm) && hlkij['__esModule'] ? hlkij : { 'default': hlkij })['default']), jgei($yxw0z, [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]), jgei = $yxw0z;function $yxw0z(hdfecg) {
    return function (gfjeh, xwtsvu) {
      if (!(gfjeh instanceof xwtsvu)) throw new TypeError('Cannot call a class as a function');
    }(this, $yxw0z), function (vywuxt, fdgcbe) {
      if (!vywuxt) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !fdgcbe || 'object' != typeof fdgcbe && 'function' != typeof fdgcbe ? vywuxt : fdgcbe;
    }(this, ($yxw0z['__proto__'] || Object['getPrototypeOf']($yxw0z))['call'](this, hdfecg));
  }ijeg['default'] = jgei;
}, function (oplmnk, gbfdc, mkonlj) {
  'use strict';

  mkonlj(0x10);
}, function (pmok, fheigd, knimj) {
  'use strict';

  var lqop = function (cbaefd) {
    {
      if (cbaefd && cbaefd['__esModule']) return cbaefd;var yzxwvu = {};if (null != cbaefd) {
        for (var nkpmlo in cbaefd) Object['prototype']['hasOwnProperty']['call'](cbaefd, nkpmlo) && (yzxwvu[nkpmlo] = cbaefd[nkpmlo]);
      }return yzxwvu['default'] = cbaefd, yzxwvu;
    }
  }(knimj(0x1)),
      ijkhf = knimj(0xa),
      ompn = (z$21 = ijkhf) && z$21['__esModule'] ? z$21 : { 'default': z$21 },
      z$21,
      fjhie = knimj(0x8);function uxwytv(pqsnor) {
    !function (nikjlm, mpqrno) {
      if (!(nikjlm instanceof mpqrno)) throw new TypeError('Cannot call a class as a function');
    }(this, uxwytv), this['target'] = lqop['canvas'], this['currentTarget'] = lqop['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = fjhie['noop'], this['stopPropagation'] = fjhie['noop'], this['type'] = pqsnor;
  }function fechgd(ejghif) {
    return function (turvw) {
      var gefji = new uxwytv(ejghif);gefji['touches'] = turvw['touches'], gefji['targetTouches'] = Array['prototype']['slice']['call'](turvw['touches']), gefji['changedTouches'] = turvw['changedTouches'], gefji['timeStamp'] = turvw['timeStamp'], ompn['default']['dispatchEvent'](gefji);
    };
  }wx['onTouchStart'](fechgd('touchstart')), wx['onTouchMove'](fechgd('touchmove')), wx['onTouchEnd'](fechgd('touchend')), wx['onTouchCancel'](fechgd('touchcancel'));
}, function (edgcf, moqpnr) {
  'use strict';

  Object['defineProperty'](moqpnr, '__esModule', { 'value': !0x0 }), moqpnr['noop'] = function () {}, moqpnr['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (pkonl, efgdhi, uyxwzv) {
  'use strict';

  Object['defineProperty'](efgdhi, '__esModule', { 'value': !0x0 }), uyxwzv = uyxwzv(0x8), uyxwzv = { 'platform': wx['getSystemInfoSync']()['platform'], 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': uyxwzv['noop'], 'watchPosition': uyxwzv['noop'], 'clearWatch': uyxwzv['noop'] } }, efgdhi['default'] = uyxwzv;
}, function (fbacde, vyzu) {
  'use strict';

  Object['defineProperty'](vyzu, '__esModule', { 'value': !0x0 });var kjlhi = function (fgkijh, utyxv, ronqps) {
    return utyxv && lkghji(fgkijh['prototype'], utyxv), ronqps && lkghji(fgkijh, ronqps), fgkijh;
  };function lkghji(nqop, wuyvt) {
    for (var nmrop = 0x0; nmrop < wuyvt['length']; nmrop++) {
      var uxvwz = wuyvt[nmrop];uxvwz['enumerable'] = uxvwz['enumerable'] || !0x1, uxvwz['configurable'] = !0x0, 'value' in uxvwz && (uxvwz['writable'] = !0x0), Object['defineProperty'](nqop, uxvwz['key'], uxvwz);
    }
  }var srqup = new WeakMap(),
      kjmn = new WeakMap(),
      qpsru = new WeakMap(),
      nkpoml = new WeakMap(),
      okmnp = new WeakMap();function ijkhlm(sqrvut) {
    if ('function' == typeof this['on' + sqrvut]) {
      for (var xz1$0 = arguments['length'], uyt = Array(0x1 < xz1$0 ? xz1$0 - 0x1 : 0x0), zyvw = 0x1; zyvw < xz1$0; zyvw++) uyt[zyvw - 0x1] = arguments[zyvw];this['on' + sqrvut]['apply'](this, uyt);
    }
  }function sropt(decfgh) {
    this['readyState'] = decfgh, ijkhlm['call'](this, 'readystatechange');
  }kjlhi(strupq, [{ 'key': 'abort', 'value': function () {
      var gbcef = okmnp['get'](this);gbcef && gbcef['abort']();
    } }, { 'key': 'getAllResponseHeaders', 'value': function () {
      var vyzxw$ = nkpoml['get'](this);return Object['keys'](vyzxw$)['map'](function (qtuspr) {
        return qtuspr + ':\x20' + vyzxw$[qtuspr];
      })['join']('\x0a');
    } }, { 'key': 'getResponseHeader', 'value': function (kon) {
      return nkpoml['get'](this)[kon];
    } }, { 'key': 'open', 'value': function (kifhj, zxvwy$) {
      kjmn['set'](this, kifhj), srqup['set'](this, zxvwy$), sropt['call'](this, strupq['OPENED']);
    } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function () {
      var nmoplk = this,
          kigjhl = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';if (this['readyState'] !== strupq['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');wx['request']({ 'data': kigjhl, 'url': srqup['get'](this), 'method': kjmn['get'](this), 'header': qpsru['get'](this), 'responseType': this['responseType'], 'success': function (komnp) {
          var lkinj = komnp['data'],
              omnpr = komnp['statusCode'],
              komnp = komnp['header'];if ('string' != typeof lkinj && !(lkinj instanceof ArrayBuffer)) try {
            lkinj = JSON['stringify'](lkinj);
          } catch (nqrps) {}if (nmoplk['status'] = omnpr, nkpoml['set'](nmoplk, komnp), ijkhlm['call'](nmoplk, 'loadstart'), sropt['call'](nmoplk, strupq['HEADERS_RECEIVED']), sropt['call'](nmoplk, strupq['LOADING']), (nmoplk['response'] = lkinj) instanceof ArrayBuffer) {
            nmoplk['responseText'] = '';var rtuvq = new Uint8Array(lkinj),
                opknlm = rtuvq['byteLength'];for (var w$x0z = 0x0; w$x0z < opknlm; w$x0z++) nmoplk['responseText'] += String['fromCharCode'](rtuvq[w$x0z]);
          } else nmoplk['responseText'] = lkinj;sropt['call'](nmoplk, strupq['DONE']), ijkhlm['call'](nmoplk, 'load'), ijkhlm['call'](nmoplk, 'loadend');
        }, 'fail': function (kpnolm) {
          kpnolm = kpnolm['errMsg'], (-0x1 !== kpnolm['indexOf']('abort') ? ijkhlm['call'](nmoplk, 'abort') : ijkhlm['call'](nmoplk, 'error', kpnolm), ijkhlm['call'](nmoplk, 'loadend'));
        } });
    } }, { 'key': 'setRequestHeader', 'value': function (kompln, twsuxv) {
      var wutrs = qpsru['get'](this);wutrs[kompln] = twsuxv, qpsru['set'](this, wutrs);
    } }]), kjlhi = strupq;function strupq() {
    !function (wytuxv, plomkn) {
      if (!(wytuxv instanceof plomkn)) throw new TypeError('Cannot call a class as a function');
    }(this, strupq), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = !0x1, qpsru['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), nkpoml['set'](this, {});
  }kjlhi['UNSEND'] = 0x0, kjlhi['OPENED'] = 0x1, kjlhi['HEADERS_RECEIVED'] = 0x2, kjlhi['LOADING'] = 0x3, kjlhi['DONE'] = 0x4, vyzu['default'] = kjlhi;
}, function (nlokj, wtusrv, utsrw) {
  'use strict';

  Object['defineProperty'](wtusrv, '__esModule', { 'value': !0x0 });var jlin = function (ponkl, usvxw, mpoknl) {
    return usvxw && tuvwrs(ponkl['prototype'], usvxw), mpoknl && tuvwrs(ponkl, mpoknl), ponkl;
  };function tuvwrs(prnmqo, rtvqs) {
    for (var fghedc = 0x0; fghedc < rtvqs['length']; fghedc++) {
      var edcbgf = rtvqs[fghedc];edcbgf['enumerable'] = edcbgf['enumerable'] || !0x1, edcbgf['configurable'] = !0x0, 'value' in edcbgf && (edcbgf['writable'] = !0x0), Object['defineProperty'](prnmqo, edcbgf['key'], edcbgf);
    }
  }var z$xyvw = utsrw(0x8),
      nqsp = new WeakMap();jlin(fdbeac, [{ 'key': 'close', 'value': function (qustpr, ihfgkj) {
      this['readyState'] = fdbeac['CLOSING'], nqsp['get'](this)['close']({ 'code': qustpr, 'reason': ihfgkj });
    } }, { 'key': 'send', 'value': function (fehgid) {
      if ('string' != typeof fehgid && !(fehgid instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + fehgid + ' is invalid');nqsp['get'](this)['send']({ 'data': fehgid });
    } }]), jlin = fdbeac;function fdbeac(w$xzv) {
    var $1320 = this,
        tqprus = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function (degfb, jmnlok) {
      if (!(degfb instanceof jmnlok)) throw new TypeError('Cannot call a class as a function');
    }(this, fdbeac), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, (0x0, z$xyvw['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if ('string' != typeof w$xzv || !/(^ws:\/\/)|(^wss:\/\/)/['test'](w$xzv)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + w$xzv + '\' is invalid');return this['url'] = w$xzv, this['readyState'] = fdbeac['CONNECTING'], tqprus = wx['connectSocket']({ 'url': w$xzv, 'protocols': Array['isArray'](tqprus) ? tqprus : [tqprus] }), (nqsp['set'](this, tqprus), tqprus['onClose'](function (z0xyw) {
      $1320['readyState'] = fdbeac['CLOSED'], 'function' == typeof $1320['onclose'] && $1320['onclose'](z0xyw);
    }), tqprus['onMessage'](function (nkmo) {
      'function' == typeof $1320['onmessage'] && $1320['onmessage'](nkmo);
    }), tqprus['onOpen'](function () {
      $1320['readyState'] = fdbeac['OPEN'], 'function' == typeof $1320['onopen'] && $1320['onopen']();
    }), tqprus['onError'](function (zxw0$y) {
      'function' == typeof $1320['onerror'] && $1320['onerror'](new Error(zxw0$y['errMsg']));
    }), this);
  }jlin['CONNECTING'] = 0x0, jlin['OPEN'] = 0x1, jlin['CLOSING'] = 0x2, jlin['CLOSED'] = 0x3, wtusrv['default'] = jlin;
}, function (qsrnpo, vw$xzy, stuq) {
  'use strict';

  Object['defineProperty'](vw$xzy, '__esModule', { 'value': !0x0 });var cea = function (faebd, z012y$, ruvsw) {
    return z012y$ && hlikjg(faebd['prototype'], z012y$), ruvsw && hlikjg(faebd, ruvsw), faebd;
  };function hlikjg(y$2z, rqsput) {
    for (var vsuwtx = 0x0; vsuwtx < rqsput['length']; vsuwtx++) {
      var $y21z0 = rqsput[vsuwtx];$y21z0['enumerable'] = $y21z0['enumerable'] || !0x1, $y21z0['configurable'] = !0x0, 'value' in $y21z0 && ($y21z0['writable'] = !0x0), Object['defineProperty'](y$2z, $y21z0['key'], $y21z0);
    }
  }var efbcdg = stuq(0x8);cea(adbce, [{ 'key': 'construct', 'value': function () {
      if ((0x0, efbcdg['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
    } }]), cea = adbce;function adbce() {
    !function (pqmnl, onkpl) {
      if (!(pqmnl instanceof onkpl)) throw new TypeError('Cannot call a class as a function');
    }(this, adbce);
  }vw$xzy['default'] = cea;
}, function (ej, egfihd, yxzvwu) {
  'use strict';

  Object['defineProperty'](egfihd, '__esModule', { 'value': !0x0 });var ehjfig = yxzvwu(0x8),
      xyzvwu = { get 'length'() {
      return wx['getStorageInfoSync']()['keys']['length'];
    }, 'key': function (sponq) {
      return wx['getStorageInfoSync']()['keys'][sponq];
    }, 'getItem': function (oqtp) {
      return wx['getStorageSync'](oqtp);
    }, 'setItem': function (dhfg, fjghei) {
      return wx['setStorageSync'](dhfg, fjghei);
    }, 'removeItem': function (fdea) {
      wx['removeStorageSync'](fdea);
    }, 'clear': function () {
      wx['clearStorageSync']();
    } },
      efgdb = {};yxzvwu = { get 'length'() {
      return Object['keys'](efgdb)['length'];
    }, 'key': function (mklopn) {
      return Object['keys'](efgdb)[mklopn];
    }, 'getItem': function (pqstu) {
      return efgdb[pqstu];
    }, 'setItem': function (bgedfc, nlkjo) {
      efgdb[bgedfc] = nlkjo;
    }, 'removeItem': function (nkomj) {
      delete efgdb[nkomj];
    }, 'clear': function () {
      efgdb = {};
    } }, xyzvwu = (0x0, ehjfig['isSubContext'])() ? yxzvwu : xyzvwu, egfihd['default'] = xyzvwu;
}, function (jkihfg, kh) {
  'use strict';

  Object['defineProperty'](kh, '__esModule', { 'value': !0x0 }), kh['default'] = { 'href': 'mttttn.js', 'reload': function () {} };
}]);