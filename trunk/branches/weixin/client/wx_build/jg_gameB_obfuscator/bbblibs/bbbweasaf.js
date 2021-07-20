var _ = wx.y$;
!function (tpu) {
  var cde = {};function __webpack_require__(wuvyz) {
    if (cde[wuvyz]) return cde[wuvyz]['exports'];var fikjgh = cde[wuvyz] = { 'exports': {}, 'id': wuvyz, 'loaded': !0x1 };return tpu[wuvyz]['call'](fikjgh['exports'], fikjgh, fikjgh['exports'], __webpack_require__), fikjgh['loaded'] = !0x0, fikjgh['exports'];
  }__webpack_require__['m'] = tpu, __webpack_require__['c'] = cde, __webpack_require__['p'] = '', __webpack_require__(0x0);
}([function (wzxy$_, gfjeih, sutrqp) {
  'use strict';

  var vw$xyz = function (uxtwy) {
    {
      if (uxtwy && uxtwy['__esModule']) return uxtwy;var zx$vy = {};if (null != uxtwy) {
        for (var $1_0zy in uxtwy) Object['prototype']['hasOwnProperty']['call'](uxtwy, $1_0zy) && (zx$vy[$1_0zy] = uxtwy[$1_0zy]);
      }return zx$vy['default'] = uxtwy, zx$vy;
    }
  }(sutrqp(0x1)),
      xwz$ = sutrqp(0x4),
      fgiejh = (khjfi = xwz$) && khjfi['__esModule'] ? khjfi : { 'default': khjfi },
      khjfi,
      _0$yxz = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
    vw$xyz['addEventListener'] = function (njklm, rqpnm) {
      vw$xyz['document']['addEventListener'](njklm, rqpnm);
    }, vw$xyz['removeEventListener'] = function (otsq, jfhige) {
      vw$xyz['document']['removeEventListener'](otsq, jfhige);
    }, vw$xyz['canvas'] && (vw$xyz['canvas']['addEventListener'] = vw$xyz['addEventListener'], vw$xyz['canvas']['removeEventListener'] = vw$xyz['removeEventListener']), _0$yxz['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new fgiejh['default']('canvas'), sharedCanvas['addEventListener'] = vw$xyz['addEventListener'], sharedCanvas['removeEventListener'] = vw$xyz['removeEventListener']);var tsvrq = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === tsvrq) {
      for (var mplqn in vw$xyz) {
        var $2z0_1 = Object['getOwnPropertyDescriptor'](_0$yxz, mplqn);$2z0_1 && !0x0 !== $2z0_1['configurable'] || Object['defineProperty'](window, mplqn, { 'value': vw$xyz[mplqn] });
      }for (var gebcf in vw$xyz['document']) {
        var rnqsop = Object['getOwnPropertyDescriptor'](_0$yxz['document'], gebcf);rnqsop && !0x0 !== rnqsop['configurable'] || Object['defineProperty'](_0$yxz['document'], gebcf, { 'value': vw$xyz['document'][gebcf] });
      }window['parent'] = window;
    } else {
      for (var fjgki in vw$xyz) _0$yxz[fjgki] = vw$xyz[fjgki];_0$yxz['window'] = vw$xyz, window = _0$yxz, window['top'] = window['parent'] = window;
    }
  }());
}, function (ornp, psrtqo, yw$xv) {
  'use strict';

  Object['defineProperty'](psrtqo, '__esModule', { 'value': !0x0 }), psrtqo['cancelAnimationFrame'] = psrtqo['requestAnimationFrame'] = psrtqo['clearInterval'] = psrtqo['clearTimeout'] = psrtqo['setInterval'] = psrtqo['setTimeout'] = psrtqo['canvas'] = psrtqo['location'] = psrtqo['localStorage'] = psrtqo['HTMLElement'] = psrtqo['FileReader'] = psrtqo['Audio'] = psrtqo['Image'] = psrtqo['WebSocket'] = psrtqo['XMLHttpRequest'] = psrtqo['navigator'] = psrtqo['document'] = void 0x0;var ifgj = yw$xv(0x2);Object['keys'](ifgj)['forEach'](function (rvqst) {
    'default' !== rvqst && '__esModule' !== rvqst && Object['defineProperty'](psrtqo, rvqst, { 'enumerable': !0x0, 'get': function () {
        return ifgj[rvqst];
      } });
  });var xz$0 = yw$xv(0x3);Object['keys'](xz$0)['forEach'](function (ifhjkg) {
    'default' !== ifhjkg && '__esModule' !== ifhjkg && Object['defineProperty'](psrtqo, ifhjkg, { 'enumerable': !0x0, 'get': function () {
        return xz$0[ifhjkg];
      } });
  });var bgdfc = vsqrt(yw$xv(0x9)),
      vstrqu = yw$xv(0x11),
      $wzy = vsqrt(yw$xv(0xa)),
      $x_ywz = vsqrt(yw$xv(0x12)),
      yxw_$ = vsqrt(yw$xv(0x13)),
      ronpmq = vsqrt(yw$xv(0x14)),
      imhlj = vsqrt(yw$xv(0xb)),
      vwyt = vsqrt(yw$xv(0xc)),
      uxyzvw = vsqrt(yw$xv(0x15)),
      fcbad = vsqrt(yw$xv(0x4)),
      xvuzyw = vsqrt(yw$xv(0x16));yw$xv = vsqrt(yw$xv(0x17));function vsqrt(lhjik) {
    return lhjik && lhjik['__esModule'] ? lhjik : { 'default': lhjik };
  }psrtqo['document'] = $wzy['default'], psrtqo['navigator'] = $x_ywz['default'], psrtqo['XMLHttpRequest'] = yxw_$['default'], psrtqo['WebSocket'] = ronpmq['default'], psrtqo['Image'] = imhlj['default'], psrtqo['Audio'] = vwyt['default'], psrtqo['FileReader'] = uxyzvw['default'], psrtqo['HTMLElement'] = fcbad['default'], psrtqo['localStorage'] = xvuzyw['default'], psrtqo['location'] = yw$xv['default'], bgdfc = (0x0, vstrqu['isSubContext'])() ? void 0x0 : new bgdfc['default'](), (psrtqo['canvas'] = bgdfc, psrtqo['setTimeout'] = setTimeout, psrtqo['setInterval'] = setInterval, psrtqo['clearTimeout'] = clearTimeout, psrtqo['clearInterval'] = clearInterval, psrtqo['requestAnimationFrame'] = requestAnimationFrame, psrtqo['cancelAnimationFrame'] = cancelAnimationFrame);
}, function (vsrwut, $vwzy) {
  'use strict';

  Object['defineProperty']($vwzy, '__esModule', { 'value': !0x0 });var nlkomp = wx['getSystemInfoSync'](),
      usptr = nlkomp['screenWidth'],
      uqprst = nlkomp['screenHeight'],
      nlkomp = nlkomp['devicePixelRatio'];usptr = $vwzy['innerWidth'] = usptr, uqprst = $vwzy['innerHeight'] = uqprst, $vwzy['devicePixelRatio'] = nlkomp, $vwzy['screen'] = { 'availWidth': usptr, 'availHeight': uqprst }, $vwzy['performance'] = { 'now': function () {
      return Date['now']() / 0x3e8;
    } }, $vwzy['ontouchstart'] = null, $vwzy['ontouchmove'] = null, $vwzy['ontouchend'] = null;
}, function (sroqt, oqmlp, kij) {
  'use strict';

  Object['defineProperty'](oqmlp, '__esModule', { 'value': !0x0 }), oqmlp['HTMLCanvasElement'] = oqmlp['HTMLImageElement'] = void 0x0;var feidh = kij(0x4);kij = ($y_ = feidh) && $y_['__esModule'] ? $y_ : { 'default': $y_ };var $y_;function rvsuq(mqnpl, _z1$0y) {
    if (!(mqnpl instanceof _z1$0y)) throw new TypeError('Cannot call a class as a function');
  }function eijg(x$zwy, utvrs) {
    if (!x$zwy) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !utvrs || 'object' != typeof utvrs && 'function' != typeof utvrs ? x$zwy : utvrs;
  }function srwtu(_w$x, caefbd) {
    if ('function' != typeof caefbd && null !== caefbd) throw new TypeError('Super expression must either be null or a function, not ' + typeof caefbd);_w$x['prototype'] = Object['create'](caefbd && caefbd['prototype'], { 'constructor': { 'value': _w$x, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), caefbd && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](_w$x, caefbd) : _w$x['__proto__'] = caefbd);
  }oqmlp['HTMLImageElement'] = (srwtu(_4230, kij['default']), _4230);function _4230() {
    return rvsuq(this, _4230), eijg(this, (_4230['__proto__'] || Object['getPrototypeOf'](_4230))['call'](this, 'img'));
  }oqmlp['HTMLCanvasElement'] = (srwtu(ghecdf, kij['default']), ghecdf);function ghecdf() {
    return rvsuq(this, ghecdf), eijg(this, (ghecdf['__proto__'] || Object['getPrototypeOf'](ghecdf))['call'](this, 'canvas'));
  }
}, function (jhgefi, vzxuy, $_ywz) {
  'use strict';

  Object['defineProperty'](vzxuy, '__esModule', { 'value': !0x0 });var z$wyx_ = function (dghecf, njkl, kjhlmi) {
    return njkl && njlm(dghecf['prototype'], njkl), kjhlmi && njlm(dghecf, kjhlmi), dghecf;
  };function njlm(egcfdh, dcabf) {
    for (var $z01y_ = 0x0; $z01y_ < dcabf['length']; $z01y_++) {
      var suwvr = dcabf[$z01y_];suwvr['enumerable'] = suwvr['enumerable'] || !0x1, suwvr['configurable'] = !0x0, 'value' in suwvr && (suwvr['writable'] = !0x0), Object['defineProperty'](egcfdh, suwvr['key'], suwvr);
    }
  }var hfgde = $_ywz(0x5),
      y$_x0z = (khigjf = hfgde) && khigjf['__esModule'] ? khigjf : { 'default': khigjf },
      khigjf,
      dfeb = $_ywz(0x8),
      strpqo = $_ywz(0x2);(function (ustrw, rutqvs) {
    if ('function' != typeof rutqvs && null !== rutqvs) throw new TypeError('Super expression must either be null or a function, not ' + typeof rutqvs);ustrw['prototype'] = Object['create'](rutqvs && rutqvs['prototype'], { 'constructor': { 'value': ustrw, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), rutqvs && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](ustrw, rutqvs) : ustrw['__proto__'] = rutqvs);
  })(bgfcde, y$_x0z['default']), z$wyx_(bgfcde, [{ 'key': 'setAttribute', 'value': function (tqor, xzwv$) {
      this[tqor] = xzwv$;
    } }, { 'key': 'getAttribute', 'value': function (_z02$) {
      return this[_z02$];
    } }, { 'key': 'getBoundingClientRect', 'value': function () {
      return { 'top': 0x0, 'left': 0x0, 'width': strpqo['innerWidth'], 'height': strpqo['innerHeight'] };
    } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
      var vxwuty = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](vxwuty) ? 0x0 : vxwuty;
    } }, { 'key': 'clientHeight', 'get': function () {
      var hgkl = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](hgkl) ? 0x0 : hgkl;
    } }]), z$wyx_ = bgfcde;function bgfcde() {
    var ljikhg = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';!function (_zy0$x, twsxu) {
      if (!(_zy0$x instanceof twsxu)) throw new TypeError('Cannot call a class as a function');
    }(this, bgfcde);var kmlhji = function (wzx$y, nproqs) {
      if (!wzx$y) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !nproqs || 'object' != typeof nproqs && 'function' != typeof nproqs ? wzx$y : nproqs;
    }(this, (bgfcde['__proto__'] || Object['getPrototypeOf'](bgfcde))['call'](this));return kmlhji['className'] = '', kmlhji['childern'] = [], kmlhji['style'] = { 'width': strpqo['innerWidth'] + 'px', 'height': strpqo['innerHeight'] + 'px' }, kmlhji['insertBefore'] = dfeb['noop'], kmlhji['innerHTML'] = '', kmlhji['tagName'] = ljikhg['toUpperCase'](), kmlhji;
  }vzxuy['default'] = z$wyx_;
}, function (x_y$wz, kmjno, mlihk) {
  'use strict';

  Object['defineProperty'](kmjno, '__esModule', { 'value': !0x0 });var efdgc = mlihk(0x6),
      z1_0$2;(function (tvurw, zw$v) {
    if ('function' != typeof zw$v && null !== zw$v) throw new TypeError('Super expression must either be null or a function, not ' + typeof zw$v);tvurw['prototype'] = Object['create'](zw$v && zw$v['prototype'], { 'constructor': { 'value': tvurw, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), zw$v && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](tvurw, zw$v) : tvurw['__proto__'] = zw$v);
  })(z01_$2, ((z1_0$2 = efdgc) && z1_0$2['__esModule'] ? z1_0$2 : { 'default': z1_0$2 })['default']), mlihk = z01_$2;function z01_$2() {
    !function (lkpmn, befd) {
      if (!(lkpmn instanceof befd)) throw new TypeError('Cannot call a class as a function');
    }(this, z01_$2);var onlp = function (y_$0zx, noprqm) {
      if (!y_$0zx) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !noprqm || 'object' != typeof noprqm && 'function' != typeof noprqm ? y_$0zx : noprqm;
    }(this, (z01_$2['__proto__'] || Object['getPrototypeOf'](z01_$2))['call'](this));return onlp['className'] = '', onlp['children'] = [], onlp;
  }kmjno['default'] = mlihk;
}, function ($2z01, ruqpt, yz_1$0) {
  'use strict';

  Object['defineProperty'](ruqpt, '__esModule', { 'value': !0x0 });var figkj = function (hlkjgi, nomjlk, defbg) {
    return nomjlk && yvxz(hlkjgi['prototype'], nomjlk), defbg && yvxz(hlkjgi, defbg), hlkjgi;
  };function yvxz(monpr, $z_0) {
    for (var limjn = 0x0; limjn < $z_0['length']; limjn++) {
      var qpnomr = $z_0[limjn];qpnomr['enumerable'] = qpnomr['enumerable'] || !0x1, qpnomr['configurable'] = !0x0, 'value' in qpnomr && (qpnomr['writable'] = !0x0), Object['defineProperty'](monpr, qpnomr['key'], qpnomr);
    }
  }var klno = yz_1$0(0x7),
      lmopkn;(function (poqst, rqnsp) {
    if ('function' != typeof rqnsp && null !== rqnsp) throw new TypeError('Super expression must either be null or a function, not ' + typeof rqnsp);poqst['prototype'] = Object['create'](rqnsp && rqnsp['prototype'], { 'constructor': { 'value': poqst, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), rqnsp && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](poqst, rqnsp) : poqst['__proto__'] = rqnsp);
  })(oljnmk, ((lmopkn = klno) && lmopkn['__esModule'] ? lmopkn : { 'default': lmopkn })['default']), figkj(oljnmk, [{ 'key': 'appendChild', 'value': function (xz$0y) {
      if (!(xz$0y instanceof oljnmk)) throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');this['childNodes']['push'](xz$0y);
    } }, { 'key': 'cloneNode', 'value': function () {
      var torpqs = Object['create'](this);return Object['assign'](torpqs, this), torpqs;
    } }, { 'key': 'removeChild', 'value': function (ropnmq) {
      var dghcef = this['childNodes']['findIndex'](function (gbce) {
        return gbce === ropnmq;
      });return -0x1 < dghcef ? this['childNodes']['splice'](dghcef, 0x1) : null;
    } }]), figkj = oljnmk;function oljnmk() {
    !function (vtuxy, jhfei) {
      if (!(vtuxy instanceof jhfei)) throw new TypeError('Cannot call a class as a function');
    }(this, oljnmk);var deihf = function (mknjl, vswru) {
      if (!mknjl) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !vswru || 'object' != typeof vswru && 'function' != typeof vswru ? mknjl : vswru;
    }(this, (oljnmk['__proto__'] || Object['getPrototypeOf'](oljnmk))['call'](this));return deihf['childNodes'] = [], deihf;
  }ruqpt['default'] = figkj;
}, function (ihglk, $0y_) {
  'use strict';

  Object['defineProperty']($0y_, '__esModule', { 'value': !0x0 });var _230 = function (gfbce, dfhec, zywvxu) {
    return dfhec && tspoqr(gfbce['prototype'], dfhec), zywvxu && tspoqr(gfbce, zywvxu), gfbce;
  };function tspoqr(lkih, fecd) {
    for (var mol = 0x0; mol < fecd['length']; mol++) {
      var ihjge = fecd[mol];ihjge['enumerable'] = ihjge['enumerable'] || !0x1, ihjge['configurable'] = !0x0, 'value' in ihjge && (ihjge['writable'] = !0x0), Object['defineProperty'](lkih, ihjge['key'], ihjge);
    }
  }var $1z0 = new WeakMap();_230(_20$13, [{ 'key': 'addEventListener', 'value': function (kjlnmi, ghfiej) {
      var pqso = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {},
          qptus = $1z0['get'](this);qptus || $1z0['set'](this, qptus = {}), qptus[kjlnmi] || (qptus[kjlnmi] = []), qptus[kjlnmi]['push'](ghfiej), pqso['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), pqso['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), pqso['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
    } }, { 'key': 'removeEventListener', 'value': function ($30_21, spqtro) {
      var lpqn = $1z0['get'](this)[$30_21];if (lpqn && 0x0 < lpqn['length']) {
        for (var vsutrq = lpqn['length']; vsutrq--;) if (lpqn[vsutrq] === spqtro) {
          lpqn['splice'](vsutrq, 0x1);break;
        }
      }
    } }, { 'key': 'dispatchEvent', 'value': function () {
      var qplmno = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {},
          _21034 = $1z0['get'](this)[qplmno['type']];if (_21034) {
        for (var sqonrp = 0x0; sqonrp < _21034['length']; sqonrp++) _21034[sqonrp](qplmno);
      }
    } }]), _230 = _20$13;function _20$13() {
    !function (gkifj, bg) {
      if (!(gkifj instanceof bg)) throw new TypeError('Cannot call a class as a function');
    }(this, _20$13), $1z0['set'](this, {});
  }$0y_['default'] = _230;
}, function (rsupq, nosp) {
  'use strict';

  Object['defineProperty'](nosp, '__esModule', { 'value': !0x0 }), nosp['noop'] = function () {}, nosp['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (_23, hkfij, mjkhli) {
  'use strict';

  Object['defineProperty'](hkfij, '__esModule', { 'value': !0x0 }), hkfij['default'] = function () {
    var gbcd = wx['createCanvas']();return gbcd['type'] = 'canvas', gbcd['__proto__']['__proto__'] = new dhie['default']('canvas'), gbcd['getContext'], (gbcd['getBoundingClientRect'] = function () {
      return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
    }, gbcd);
  }, mjkhli(0x3);var dhie = urptqs(mjkhli(0x4));urptqs(mjkhli(0xa));function urptqs(wuytxv) {
    return wuytxv && wuytxv['__esModule'] ? wuytxv : { 'default': wuytxv };
  }
}, function (hefgdi, x_z$y0, hgijkf) {
  'use strict';

  Object['defineProperty'](x_z$y0, '__esModule', { 'value': !0x0 });var njkml = function (uyt) {
    {
      if (uyt && uyt['__esModule']) return uyt;var adecf = {};if (null != uyt) {
        for (var jolk in uyt) Object['prototype']['hasOwnProperty']['call'](uyt, jolk) && (adecf[jolk] = uyt[jolk]);
      }return adecf['default'] = uyt, adecf;
    }
  }(hgijkf(0x1)),
      qtusp = _zyx0(hgijkf(0x4)),
      _$z01 = _zyx0(hgijkf(0xb)),
      rvtswu = _zyx0(hgijkf(0xc)),
      tqsvr = _zyx0(hgijkf(0x9));function _zyx0(uvzwy) {
    return uvzwy && uvzwy['__esModule'] ? uvzwy : { 'default': uvzwy };
  }hgijkf(0xf);var $0_213 = {},
      yvuxt = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': njkml, 'hidden': !0x1, 'style': {}, 'location': njkml['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new qtusp['default']('head'), 'body': new qtusp['default']('body'), 'createElement': function (ikhjlg) {
      return 'canvas' === ikhjlg ? new tqsvr['default']() : 'audio' === ikhjlg ? new rvtswu['default']() : 'img' === ikhjlg ? new _$z01['default']() : new qtusp['default'](ikhjlg);
    }, 'getElementById': function (lmjnki) {
      return lmjnki === njkml['canvas']['id'] ? njkml['canvas'] : null;
    }, 'getElementsByTagName': function (rtuvqs) {
      return 'head' === rtuvqs ? [yvuxt['head']] : 'body' === rtuvqs ? [yvuxt['body']] : 'canvas' === rtuvqs ? [njkml['canvas']] : [];
    }, 'querySelector': function (x_$z0y) {
      return 'head' === x_$z0y ? yvuxt['head'] : 'body' === x_$z0y ? yvuxt['body'] : 'canvas' === x_$z0y || x_$z0y === '#' + njkml['canvas']['id'] ? njkml['canvas'] : null;
    }, 'querySelectorAll': function (_z2$) {
      return 'head' === _z2$ ? [yvuxt['head']] : 'body' === _z2$ ? [yvuxt['body']] : 'canvas' === _z2$ ? [njkml['canvas']] : [];
    }, 'addEventListener': function (qrvstu, moknj) {
      $0_213[qrvstu] || ($0_213[qrvstu] = []), $0_213[qrvstu]['push'](moknj);
    }, 'removeEventListener': function ($_z0yx, olmj) {
      var cbf = $0_213[$_z0yx];if (cbf && 0x0 < cbf['length']) {
        for (var swurtv = cbf['length']; swurtv--;) if (cbf[swurtv] === olmj) {
          cbf['splice'](swurtv, 0x1);break;
        }
      }
    }, 'dispatchEvent': function (lkni) {
      var mlki = $0_213[lkni['type']];if (mlki) {
        for (var tvsruw = 0x0; tvsruw < mlki['length']; tvsruw++) mlki[tvsruw](lkni);
      }
    } };x_z$y0['default'] = yvuxt;
}, function (bfdcea, rpnoqm) {
  'use strict';

  Object['defineProperty'](rpnoqm, '__esModule', { 'value': !0x0 }), rpnoqm['default'] = function () {
    return wx['createImage']();
  };
}, function (fgdbe, dgcbfe, jhglk) {
  'use strict';

  Object['defineProperty'](dgcbfe, '__esModule', { 'value': !0x0 });var $2103_ = function (ifhgk, nmoqpl, ihjkl) {
    return nmoqpl && _yz10(ifhgk['prototype'], nmoqpl), ihjkl && _yz10(ifhgk, ihjkl), ifhgk;
  };function _yz10(klg, srqptu) {
    for (var fjhei = 0x0; fjhei < srqptu['length']; fjhei++) {
      var khjif = srqptu[fjhei];khjif['enumerable'] = khjif['enumerable'] || !0x1, khjif['configurable'] = !0x0, 'value' in khjif && (khjif['writable'] = !0x0), Object['defineProperty'](klg, khjif['key'], khjif);
    }
  }var ytvuxw = jhglk(0xd),
      qrmo = (kjhl = ytvuxw) && kjhl['__esModule'] ? kjhl : { 'default': kjhl },
      kjhl,
      nsqrop = jhglk(0x8);function _10$(ljig, kjg) {
    if (!ljig) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !kjg || 'object' != typeof kjg && 'function' != typeof kjg ? ljig : kjg;
  }var $z10_ = 0x0,
      inmjl = 0x1,
      vtsqr = 0x2,
      ljhkig = 0x3,
      lknpmo = 0x4,
      lmonpq = new WeakMap(),
      z120$_ = new WeakMap();new WeakMap(), new WeakMap(), (function (ljknmi, hdfei) {
    if ('function' != typeof hdfei && null !== hdfei) throw new TypeError('Super expression must either be null or a function, not ' + typeof hdfei);ljknmi['prototype'] = Object['create'](hdfei && hdfei['prototype'], { 'constructor': { 'value': ljknmi, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), hdfei && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](ljknmi, hdfei) : ljknmi['__proto__'] = hdfei);
  }(mnpoql, qrmo['default']), $2103_(mnpoql, [{ 'key': 'load', 'value': function () {
      console['warn']('HTMLAudioElement.load() is not implemented.');
    } }, { 'key': 'play', 'value': function () {
      (0x0, nsqrop['isSubContext'])() || lmonpq['get'](this)['play']();
    } }, { 'key': 'pause', 'value': function () {
      (0x0, nsqrop['isSubContext'])() || lmonpq['get'](this)['pause']();
    } }, { 'key': 'canPlayType', 'value': function () {
      var vwustx = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return 'string' == typeof vwustx && (-0x1 < vwustx['indexOf']('audio/mpeg') || vwustx['indexOf']('audio/mp4')) ? 'probably' : '';
    } }, { 'key': 'cloneNode', 'value': function () {
      var usvwr = new mnpoql();return (0x0, nsqrop['isSubContext'])() || (usvwr['loop'] = lmonpq['get'](this)['loop'], usvwr['autoplay'] = lmonpq['get'](this)['loop'], usvwr['src'] = this['src']), usvwr;
    } }, { 'key': 'currentTime', 'get': function () {
      return (0x0, nsqrop['isSubContext'])() ? 0x0 : lmonpq['get'](this)['currentTime'];
    }, 'set': function (fgech) {
      (0x0, nsqrop['isSubContext'])() || lmonpq['get'](this)['seek'](fgech);
    } }, { 'key': 'src', 'get': function () {
      return z120$_['get'](this);
    }, 'set': function (uwvs) {
      z120$_['set'](this, uwvs), (0x0, nsqrop['isSubContext'])() || (lmonpq['get'](this)['src'] = uwvs);
    } }, { 'key': 'loop', 'get': function () {
      return !(0x0, nsqrop['isSubContext'])() && lmonpq['get'](this)['loop'];
    }, 'set': function (zxwyv) {
      (0x0, nsqrop['isSubContext'])() || (lmonpq['get'](this)['loop'] = zxwyv);
    } }, { 'key': 'autoplay', 'get': function () {
      return !(0x0, nsqrop['isSubContext'])() && lmonpq['get'](this)['autoplay'];
    }, 'set': function (ihjlgk) {
      (0x0, nsqrop['isSubContext'])() || (lmonpq['get'](this)['autoplay'] = ihjlgk);
    } }, { 'key': 'paused', 'get': function () {
      return !(0x0, nsqrop['isSubContext'])() && lmonpq['get'](this)['paused'];
    } }]), $2103_ = mnpoql);function mnpoql(mqorp) {
    !function (plomn, chdegf) {
      if (!(plomn instanceof chdegf)) throw new TypeError('Cannot call a class as a function');
    }(this, mnpoql);var vrt = _10$(this, (mnpoql['__proto__'] || Object['getPrototypeOf'](mnpoql))['call'](this));if (vrt['HAVE_NOTHING'] = $z10_, vrt['HAVE_METADATA'] = inmjl, vrt['HAVE_CURRENT_DATA'] = vtsqr, vrt['HAVE_FUTURE_DATA'] = ljhkig, vrt['HAVE_ENOUGH_DATA'] = lknpmo, vrt['readyState'] = $z10_, (0x0, nsqrop['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), _10$(vrt);z120$_['set'](vrt, '');var ifhegd = wx['createInnerAudioContext']();return lmonpq['set'](vrt, ifhegd), ifhegd['onCanplay'](function () {
      vrt['dispatchEvent']({ 'type': 'load' }), vrt['dispatchEvent']({ 'type': 'loadend' }), vrt['dispatchEvent']({ 'type': 'canplay' }), vrt['dispatchEvent']({ 'type': 'canplaythrough' }), vrt['dispatchEvent']({ 'type': 'loadedmetadata' }), vrt['readyState'] = vtsqr;
    }), ifhegd['onPlay'](function () {
      vrt['dispatchEvent']({ 'type': 'play' });
    }), ifhegd['onPause'](function () {
      vrt['dispatchEvent']({ 'type': 'pause' });
    }), ifhegd['onEnded'](function () {
      vrt['dispatchEvent']({ 'type': 'ended' }), vrt['readyState'] = lknpmo;
    }), ifhegd['onError'](function () {
      vrt['dispatchEvent']({ 'type': 'error' });
    }), mqorp && (lmonpq['get'](vrt)['src'] = mqorp), vrt;
  }dgcbfe['default'] = $2103_;
}, function (gefd, surqvt, fkihjg) {
  'use strict';

  Object['defineProperty'](surqvt, '__esModule', { 'value': !0x0 });var cdefhg = fkihjg(0xe),
      kihjgl;(function (w$xy_, eijhf) {
    if ('function' != typeof eijhf && null !== eijhf) throw new TypeError('Super expression must either be null or a function, not ' + typeof eijhf);w$xy_['prototype'] = Object['create'](eijhf && eijhf['prototype'], { 'constructor': { 'value': w$xy_, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), eijhf && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](w$xy_, eijhf) : w$xy_['__proto__'] = eijhf);
  })(_x0$zy, ((kihjgl = cdefhg) && kihjgl['__esModule'] ? kihjgl : { 'default': kihjgl })['default']), fkihjg = _x0$zy;function _x0$zy() {
    return function (hecfdg, xz$w_y) {
      if (!(hecfdg instanceof xz$w_y)) throw new TypeError('Cannot call a class as a function');
    }(this, _x0$zy), function (jolkm, debg) {
      if (!jolkm) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !debg || 'object' != typeof debg && 'function' != typeof debg ? jolkm : debg;
    }(this, (_x0$zy['__proto__'] || Object['getPrototypeOf'](_x0$zy))['call'](this, 'audio'));
  }surqvt['default'] = fkihjg;
}, function (ptrq, bdcfae, fkijhg) {
  'use strict';

  Object['defineProperty'](bdcfae, '__esModule', { 'value': !0x0 });var opqlm = function (dgefbc, mrqpno, suvrwt) {
    return mrqpno && edcghf(dgefbc['prototype'], mrqpno), suvrwt && edcghf(dgefbc, suvrwt), dgefbc;
  };function edcghf(nqrm, jlmkn) {
    for (var klighj = 0x0; klighj < jlmkn['length']; klighj++) {
      var ebad = jlmkn[klighj];ebad['enumerable'] = ebad['enumerable'] || !0x1, ebad['configurable'] = !0x0, 'value' in ebad && (ebad['writable'] = !0x0), Object['defineProperty'](nqrm, ebad['key'], ebad);
    }
  }var z_02$ = fkijhg(0x4),
      opmn;(function (kmjlh, $zyvw) {
    if ('function' != typeof $zyvw && null !== $zyvw) throw new TypeError('Super expression must either be null or a function, not ' + typeof $zyvw);kmjlh['prototype'] = Object['create']($zyvw && $zyvw['prototype'], { 'constructor': { 'value': kmjlh, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), $zyvw && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](kmjlh, $zyvw) : kmjlh['__proto__'] = $zyvw);
  })(cghedf, ((opmn = z_02$) && opmn['__esModule'] ? opmn : { 'default': opmn })['default']), opqlm(cghedf, [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]), opqlm = cghedf;function cghedf(bcea) {
    return function (z2$01, adcfbe) {
      if (!(z2$01 instanceof adcfbe)) throw new TypeError('Cannot call a class as a function');
    }(this, cghedf), function (twuyv, gdcf) {
      if (!twuyv) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !gdcf || 'object' != typeof gdcf && 'function' != typeof gdcf ? twuyv : gdcf;
    }(this, (cghedf['__proto__'] || Object['getPrototypeOf'](cghedf))['call'](this, bcea));
  }bdcfae['default'] = opqlm;
}, function (komnpl, yxuwvz, qpnro) {
  'use strict';

  qpnro(0x10);
}, function (dgfhec, lomqpn, qrpn) {
  'use strict';

  var omljk = function (ifhjgk) {
    {
      if (ifhjgk && ifhjgk['__esModule']) return ifhjgk;var srtqp = {};if (null != ifhjgk) {
        for (var psrqno in ifhjgk) Object['prototype']['hasOwnProperty']['call'](ifhjgk, psrqno) && (srtqp[psrqno] = ifhjgk[psrqno]);
      }return srtqp['default'] = ifhjgk, srtqp;
    }
  }(qrpn(0x1)),
      nmpl = qrpn(0xa),
      inmlj = (rwvt = nmpl) && rwvt['__esModule'] ? rwvt : { 'default': rwvt },
      rwvt,
      _3$012 = qrpn(0x8);function fbc(uzvwyx) {
    !function (nqpmor, efigh) {
      if (!(nqpmor instanceof efigh)) throw new TypeError('Cannot call a class as a function');
    }(this, fbc), this['target'] = omljk['canvas'], this['currentTarget'] = omljk['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = _3$012['noop'], this['stopPropagation'] = _3$012['noop'], this['type'] = uzvwyx;
  }function yzu(dabec) {
    return function (qprut) {
      var qosrn = new fbc(dabec);qosrn['touches'] = qprut['touches'], qosrn['targetTouches'] = Array['prototype']['slice']['call'](qprut['touches']), qosrn['changedTouches'] = qprut['changedTouches'], qosrn['timeStamp'] = qprut['timeStamp'], inmlj['default']['dispatchEvent'](qosrn);
    };
  }wx['onTouchStart'](yzu('touchstart')), wx['onTouchMove'](yzu('touchmove')), wx['onTouchEnd'](yzu('touchend')), wx['onTouchCancel'](yzu('touchcancel'));
}, function ($0y_x, hifde) {
  'use strict';

  Object['defineProperty'](hifde, '__esModule', { 'value': !0x0 }), hifde['noop'] = function () {}, hifde['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (jmkon, hdgec, egcdbf) {
  'use strict';

  Object['defineProperty'](hdgec, '__esModule', { 'value': !0x0 }), egcdbf = egcdbf(0x8), egcdbf = { 'platform': wx['getSystemInfoSync']()['platform'], 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': egcdbf['noop'], 'watchPosition': egcdbf['noop'], 'clearWatch': egcdbf['noop'] } }, hdgec['default'] = egcdbf;
}, function (z$_0y, noljmk) {
  'use strict';

  Object['defineProperty'](noljmk, '__esModule', { 'value': !0x0 });var $1y0z = function (jkgfh, fdceb, uqrtsp) {
    return fdceb && sorqtp(jkgfh['prototype'], fdceb), uqrtsp && sorqtp(jkgfh, uqrtsp), jkgfh;
  };function sorqtp(nqos, edchfg) {
    for (var dghfe = 0x0; dghfe < edchfg['length']; dghfe++) {
      var x0z$ = edchfg[dghfe];x0z$['enumerable'] = x0z$['enumerable'] || !0x1, x0z$['configurable'] = !0x0, 'value' in x0z$ && (x0z$['writable'] = !0x0), Object['defineProperty'](nqos, x0z$['key'], x0z$);
    }
  }var hdgc = new WeakMap(),
      jhfie = new WeakMap(),
      ijeh = new WeakMap(),
      kjlhm = new WeakMap(),
      tq = new WeakMap();function omqrnp(nsrq) {
    if ('function' == typeof this['on' + nsrq]) {
      for (var pnmroq = arguments['length'], knjml = Array(0x1 < pnmroq ? pnmroq - 0x1 : 0x0), jnmklo = 0x1; jnmklo < pnmroq; jnmklo++) knjml[jnmklo - 0x1] = arguments[jnmklo];this['on' + nsrq]['apply'](this, knjml);
    }
  }function twusvr(wvzy$x) {
    this['readyState'] = wvzy$x, omqrnp['call'](this, 'readystatechange');
  }$1y0z(rpoqmn, [{ 'key': 'abort', 'value': function () {
      var fdeba = tq['get'](this);fdeba && fdeba['abort']();
    } }, { 'key': 'getAllResponseHeaders', 'value': function () {
      var otsrq = kjlhm['get'](this);return Object['keys'](otsrq)['map'](function (jhilmk) {
        return jhilmk + ':\x20' + otsrq[jhilmk];
      })['join']('\x0a');
    } }, { 'key': 'getResponseHeader', 'value': function (xwvt) {
      return kjlhm['get'](this)[xwvt];
    } }, { 'key': 'open', 'value': function (lonkmp, x_0$yz) {
      jhfie['set'](this, lonkmp), hdgc['set'](this, x_0$yz), twusvr['call'](this, rpoqmn['OPENED']);
    } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function () {
      var npqmol = this,
          mkolpn = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';if (this['readyState'] !== rpoqmn['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');wx['request']({ 'data': mkolpn, 'url': hdgc['get'](this), 'method': jhfie['get'](this), 'header': ijeh['get'](this), 'responseType': this['responseType'], 'success': function (lpmqon) {
          var ropsqn = lpmqon['data'],
              dfcg = lpmqon['statusCode'],
              lpmqon = lpmqon['header'];if ('string' != typeof ropsqn && !(ropsqn instanceof ArrayBuffer)) try {
            ropsqn = JSON['stringify'](ropsqn);
          } catch (mlpok) {}if (npqmol['status'] = dfcg, kjlhm['set'](npqmol, lpmqon), omqrnp['call'](npqmol, 'loadstart'), twusvr['call'](npqmol, rpoqmn['HEADERS_RECEIVED']), twusvr['call'](npqmol, rpoqmn['LOADING']), (npqmol['response'] = ropsqn) instanceof ArrayBuffer) {
            npqmol['responseText'] = '';var z_01 = new Uint8Array(ropsqn),
                lomnp = z_01['byteLength'];for (var defghi = 0x0; defghi < lomnp; defghi++) npqmol['responseText'] += String['fromCharCode'](z_01[defghi]);
          } else npqmol['responseText'] = ropsqn;twusvr['call'](npqmol, rpoqmn['DONE']), omqrnp['call'](npqmol, 'load'), omqrnp['call'](npqmol, 'loadend');
        }, 'fail': function (qonprs) {
          qonprs = qonprs['errMsg'], (-0x1 !== qonprs['indexOf']('abort') ? omqrnp['call'](npqmol, 'abort') : omqrnp['call'](npqmol, 'error', qonprs), omqrnp['call'](npqmol, 'loadend'));
        } });
    } }, { 'key': 'setRequestHeader', 'value': function (mnplk, fihgj) {
      var _1043 = ijeh['get'](this);_1043[mnplk] = fihgj, ijeh['set'](this, _1043);
    } }]), $1y0z = rpoqmn;function rpoqmn() {
    !function ($zyw, lik) {
      if (!($zyw instanceof lik)) throw new TypeError('Cannot call a class as a function');
    }(this, rpoqmn), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = !0x1, ijeh['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), kjlhm['set'](this, {});
  }$1y0z['UNSEND'] = 0x0, $1y0z['OPENED'] = 0x1, $1y0z['HEADERS_RECEIVED'] = 0x2, $1y0z['LOADING'] = 0x3, $1y0z['DONE'] = 0x4, noljmk['default'] = $1y0z;
}, function (usrtvq, dfeabc, edfh) {
  'use strict';

  Object['defineProperty'](dfeabc, '__esModule', { 'value': !0x0 });var wyzx$ = function (vxyz$, mjnkl, mnikj) {
    return mjnkl && opqsn(vxyz$['prototype'], mjnkl), mnikj && opqsn(vxyz$, mnikj), vxyz$;
  };function opqsn(hgfc, z201) {
    for (var jhlkmi = 0x0; jhlkmi < z201['length']; jhlkmi++) {
      var ecabd = z201[jhlkmi];ecabd['enumerable'] = ecabd['enumerable'] || !0x1, ecabd['configurable'] = !0x0, 'value' in ecabd && (ecabd['writable'] = !0x0), Object['defineProperty'](hgfc, ecabd['key'], ecabd);
    }
  }var $y_01z = edfh(0x8),
      jgfkih = new WeakMap();wyzx$(pqno, [{ 'key': 'close', 'value': function (ywz_, yxuvt) {
      this['readyState'] = pqno['CLOSING'], jgfkih['get'](this)['close']({ 'code': ywz_, 'reason': yxuvt });
    } }, { 'key': 'send', 'value': function (nmklpo) {
      if ('string' != typeof nmklpo && !(nmklpo instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + nmklpo + ' is invalid');jgfkih['get'](this)['send']({ 'data': nmklpo });
    } }]), wyzx$ = pqno;function pqno(_xz$yw) {
    var npkom = this,
        zy_xw = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function (sut, $3201_) {
      if (!(sut instanceof $3201_)) throw new TypeError('Cannot call a class as a function');
    }(this, pqno), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, (0x0, $y_01z['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if ('string' != typeof _xz$yw || !/(^ws:\/\/)|(^wss:\/\/)/['test'](_xz$yw)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + _xz$yw + '\' is invalid');return this['url'] = _xz$yw, this['readyState'] = pqno['CONNECTING'], zy_xw = wx['connectSocket']({ 'url': _xz$yw, 'protocols': Array['isArray'](zy_xw) ? zy_xw : [zy_xw] }), (jgfkih['set'](this, zy_xw), zy_xw['onClose'](function (qsvut) {
      npkom['readyState'] = pqno['CLOSED'], 'function' == typeof npkom['onclose'] && npkom['onclose'](qsvut);
    }), zy_xw['onMessage'](function (fige) {
      'function' == typeof npkom['onmessage'] && npkom['onmessage'](fige);
    }), zy_xw['onOpen'](function () {
      npkom['readyState'] = pqno['OPEN'], 'function' == typeof npkom['onopen'] && npkom['onopen']();
    }), zy_xw['onError'](function (orpstq) {
      'function' == typeof npkom['onerror'] && npkom['onerror'](new Error(orpstq['errMsg']));
    }), this);
  }wyzx$['CONNECTING'] = 0x0, wyzx$['OPEN'] = 0x1, wyzx$['CLOSING'] = 0x2, wyzx$['CLOSED'] = 0x3, dfeabc['default'] = wyzx$;
}, function (qpmnol, jlikmn, _$0yz1) {
  'use strict';

  Object['defineProperty'](jlikmn, '__esModule', { 'value': !0x0 });var jhikf = function (fbcg, yx0$z_, mpknlo) {
    return yx0$z_ && fdgecb(fbcg['prototype'], yx0$z_), mpknlo && fdgecb(fbcg, mpknlo), fbcg;
  };function fdgecb(hfijge, lnkmoj) {
    for (var vzxw$y = 0x0; vzxw$y < lnkmoj['length']; vzxw$y++) {
      var qrsonp = lnkmoj[vzxw$y];qrsonp['enumerable'] = qrsonp['enumerable'] || !0x1, qrsonp['configurable'] = !0x0, 'value' in qrsonp && (qrsonp['writable'] = !0x0), Object['defineProperty'](hfijge, qrsonp['key'], qrsonp);
    }
  }var _31420 = _$0yz1(0x8);jhikf(jlikn, [{ 'key': 'construct', 'value': function () {
      if ((0x0, _31420['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
    } }]), jhikf = jlikn;function jlikn() {
    !function (olpmq, jkhfi) {
      if (!(olpmq instanceof jkhfi)) throw new TypeError('Cannot call a class as a function');
    }(this, jlikn);
  }jlikmn['default'] = jhikf;
}, function (_2z$, xvzw, hecg) {
  'use strict';

  Object['defineProperty'](xvzw, '__esModule', { 'value': !0x0 });var kfjg = hecg(0x8),
      fjeigh = { get 'length'() {
      return wx['getStorageInfoSync']()['keys']['length'];
    }, 'key': function (kihfj) {
      return wx['getStorageInfoSync']()['keys'][kihfj];
    }, 'getItem': function (pnomqr) {
      return wx['getStorageSync'](pnomqr);
    }, 'setItem': function (mljko, tvswur) {
      return wx['setStorageSync'](mljko, tvswur);
    }, 'removeItem': function (opqlmn) {
      wx['removeStorageSync'](opqlmn);
    }, 'clear': function () {
      wx['clearStorageSync']();
    } },
      qtruv = {};hecg = { get 'length'() {
      return Object['keys'](qtruv)['length'];
    }, 'key': function (utrwsv) {
      return Object['keys'](qtruv)[utrwsv];
    }, 'getItem': function (xytuvw) {
      return qtruv[xytuvw];
    }, 'setItem': function (_$xy0z, truqsv) {
      qtruv[_$xy0z] = truqsv;
    }, 'removeItem': function (spnqr) {
      delete qtruv[spnqr];
    }, 'clear': function () {
      qtruv = {};
    } }, fjeigh = (0x0, kfjg['isSubContext'])() ? hecg : fjeigh, xvzw['default'] = fjeigh;
}, function (_4301, utrsq) {
  'use strict';

  Object['defineProperty'](utrsq, '__esModule', { 'value': !0x0 }), utrsq['default'] = { 'href': 'bbbgame.js', 'reload': function () {} };
}]);