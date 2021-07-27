var _ = wx.y$;
!function (_2z10$) {
  var _4012 = {};function __webpack_require__(qpsrto) {
    if (_4012[qpsrto]) return _4012[qpsrto]['exports'];var spn = _4012[qpsrto] = { 'exports': {}, 'id': qpsrto, 'loaded': !0x1 };return _2z10$[qpsrto]['call'](spn['exports'], spn, spn['exports'], __webpack_require__), spn['loaded'] = !0x0, spn['exports'];
  }__webpack_require__['m'] = _2z10$, __webpack_require__['c'] = _4012, __webpack_require__['p'] = '', __webpack_require__(0x0);
}([function (_$y10z, zw$yx_, tpsq) {
  'use strict';

  var omlnp = function (egfcb) {
    {
      if (egfcb && egfcb['__esModule']) return egfcb;var dhfieg = {};if (null != egfcb) {
        for (var efj in egfcb) Object['prototype']['hasOwnProperty']['call'](egfcb, efj) && (dhfieg[efj] = egfcb[efj]);
      }return dhfieg['default'] = egfcb, dhfieg;
    }
  }(tpsq(0x1)),
      befdgc = tpsq(0x4),
      jfih = (svwtu = befdgc) && svwtu['__esModule'] ? svwtu : { 'default': svwtu },
      svwtu,
      komlj = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
    omlnp['addEventListener'] = function (njkmli, eih) {
      omlnp['document']['addEventListener'](njkmli, eih);
    }, omlnp['removeEventListener'] = function (hkfgij, becafd) {
      omlnp['document']['removeEventListener'](hkfgij, becafd);
    }, omlnp['canvas'] && (omlnp['canvas']['addEventListener'] = omlnp['addEventListener'], omlnp['canvas']['removeEventListener'] = omlnp['removeEventListener']), komlj['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new jfih['default']('canvas'), sharedCanvas['addEventListener'] = omlnp['addEventListener'], sharedCanvas['removeEventListener'] = omlnp['removeEventListener']);var tqupr = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === tqupr) {
      for (var utxwv in omlnp) {
        var $ywzv = Object['getOwnPropertyDescriptor'](komlj, utxwv);$ywzv && !0x0 !== $ywzv['configurable'] || Object['defineProperty'](window, utxwv, { 'value': omlnp[utxwv] });
      }for (var $10y_ in omlnp['document']) {
        var z0$xy_ = Object['getOwnPropertyDescriptor'](komlj['document'], $10y_);z0$xy_ && !0x0 !== z0$xy_['configurable'] || Object['defineProperty'](komlj['document'], $10y_, { 'value': omlnp['document'][$10y_] });
      }window['parent'] = window;
    } else {
      for (var ifgh in omlnp) komlj[ifgh] = omlnp[ifgh];komlj['window'] = omlnp, window = komlj, window['top'] = window['parent'] = window;
    }
  }());
}, function (monkl, ghjfik, z$_02) {
  'use strict';

  Object['defineProperty'](ghjfik, '__esModule', { 'value': !0x0 }), ghjfik['cancelAnimationFrame'] = ghjfik['requestAnimationFrame'] = ghjfik['clearInterval'] = ghjfik['clearTimeout'] = ghjfik['setInterval'] = ghjfik['setTimeout'] = ghjfik['canvas'] = ghjfik['location'] = ghjfik['localStorage'] = ghjfik['HTMLElement'] = ghjfik['FileReader'] = ghjfik['Audio'] = ghjfik['Image'] = ghjfik['WebSocket'] = ghjfik['XMLHttpRequest'] = ghjfik['navigator'] = ghjfik['document'] = void 0x0;var nlmpq = z$_02(0x2);Object['keys'](nlmpq)['forEach'](function (urpsq) {
    'default' !== urpsq && '__esModule' !== urpsq && Object['defineProperty'](ghjfik, urpsq, { 'enumerable': !0x0, 'get': function () {
        return nlmpq[urpsq];
      } });
  });var fhgk = z$_02(0x3);Object['keys'](fhgk)['forEach'](function (adcebf) {
    'default' !== adcebf && '__esModule' !== adcebf && Object['defineProperty'](ghjfik, adcebf, { 'enumerable': !0x0, 'get': function () {
        return fhgk[adcebf];
      } });
  });var ceb = _$1zy0(z$_02(0x9)),
      orqsnp = z$_02(0x11),
      x$y0_z = _$1zy0(z$_02(0xa)),
      uwvyx = _$1zy0(z$_02(0x12)),
      nomlpq = _$1zy0(z$_02(0x13)),
      fegcdh = _$1zy0(z$_02(0x14)),
      ptsr = _$1zy0(z$_02(0xb)),
      xuvts = _$1zy0(z$_02(0xc)),
      qomnpr = _$1zy0(z$_02(0x15)),
      mljhi = _$1zy0(z$_02(0x4)),
      oqrtps = _$1zy0(z$_02(0x16));z$_02 = _$1zy0(z$_02(0x17));function _$1zy0(egfh) {
    return egfh && egfh['__esModule'] ? egfh : { 'default': egfh };
  }ghjfik['document'] = x$y0_z['default'], ghjfik['navigator'] = uwvyx['default'], ghjfik['XMLHttpRequest'] = nomlpq['default'], ghjfik['WebSocket'] = fegcdh['default'], ghjfik['Image'] = ptsr['default'], ghjfik['Audio'] = xuvts['default'], ghjfik['FileReader'] = qomnpr['default'], ghjfik['HTMLElement'] = mljhi['default'], ghjfik['localStorage'] = oqrtps['default'], ghjfik['location'] = z$_02['default'], ceb = (0x0, orqsnp['isSubContext'])() ? void 0x0 : new ceb['default'](), (ghjfik['canvas'] = ceb, ghjfik['setTimeout'] = setTimeout, ghjfik['setInterval'] = setInterval, ghjfik['clearTimeout'] = clearTimeout, ghjfik['clearInterval'] = clearInterval, ghjfik['requestAnimationFrame'] = requestAnimationFrame, ghjfik['cancelAnimationFrame'] = cancelAnimationFrame);
}, function (efdcbg, qpur) {
  'use strict';

  Object['defineProperty'](qpur, '__esModule', { 'value': !0x0 });var egdfh = wx['getSystemInfoSync'](),
      hief = egdfh['screenWidth'],
      _2413 = egdfh['screenHeight'],
      egdfh = egdfh['devicePixelRatio'];hief = qpur['innerWidth'] = hief, _2413 = qpur['innerHeight'] = _2413, qpur['devicePixelRatio'] = egdfh, qpur['screen'] = { 'availWidth': hief, 'availHeight': _2413 }, qpur['performance'] = { 'now': function () {
      return Date['now']() / 0x3e8;
    } }, qpur['ontouchstart'] = null, qpur['ontouchmove'] = null, qpur['ontouchend'] = null;
}, function (dgecbf, qrnspo, dhfige) {
  'use strict';

  Object['defineProperty'](qrnspo, '__esModule', { 'value': !0x0 }), qrnspo['HTMLCanvasElement'] = qrnspo['HTMLImageElement'] = void 0x0;var yxvu = dhfige(0x4);dhfige = (sqtpor = yxvu) && sqtpor['__esModule'] ? sqtpor : { 'default': sqtpor };var sqtpor;function hjlmi(x_yz0, rtuvq) {
    if (!(x_yz0 instanceof rtuvq)) throw new TypeError('Cannot call a class as a function');
  }function qsvt($21_z0, xyzvwu) {
    if (!$21_z0) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !xyzvwu || 'object' != typeof xyzvwu && 'function' != typeof xyzvwu ? $21_z0 : xyzvwu;
  }function _z0x$y(nqsro, nqlpo) {
    if ('function' != typeof nqlpo && null !== nqlpo) throw new TypeError('Super expression must either be null or a function, not ' + typeof nqlpo);nqsro['prototype'] = Object['create'](nqlpo && nqlpo['prototype'], { 'constructor': { 'value': nqsro, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), nqlpo && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](nqsro, nqlpo) : nqsro['__proto__'] = nqlpo);
  }qrnspo['HTMLImageElement'] = (_z0x$y(jmlnk, dhfige['default']), jmlnk);function jmlnk() {
    return hjlmi(this, jmlnk), qsvt(this, (jmlnk['__proto__'] || Object['getPrototypeOf'](jmlnk))['call'](this, 'img'));
  }qrnspo['HTMLCanvasElement'] = (_z0x$y(sru, dhfige['default']), sru);function sru() {
    return hjlmi(this, sru), qsvt(this, (sru['__proto__'] || Object['getPrototypeOf'](sru))['call'](this, 'canvas'));
  }
}, function (qnpmro, fehgcd, $0_xz) {
  'use strict';

  Object['defineProperty'](fehgcd, '__esModule', { 'value': !0x0 });var txswv = function (svrw, qptsor, qpornm) {
    return qptsor && oqpr(svrw['prototype'], qptsor), qpornm && oqpr(svrw, qpornm), svrw;
  };function oqpr(pqsrtu, cbegdf) {
    for (var cefabd = 0x0; cefabd < cbegdf['length']; cefabd++) {
      var jgefi = cbegdf[cefabd];jgefi['enumerable'] = jgefi['enumerable'] || !0x1, jgefi['configurable'] = !0x0, 'value' in jgefi && (jgefi['writable'] = !0x0), Object['defineProperty'](pqsrtu, jgefi['key'], jgefi);
    }
  }var vstx = $0_xz(0x5),
      fgbdc = (ilkjm = vstx) && ilkjm['__esModule'] ? ilkjm : { 'default': ilkjm },
      ilkjm,
      fhedgc = $0_xz(0x8),
      hijklm = $0_xz(0x2);(function (dfgch, wyz_$) {
    if ('function' != typeof wyz_$ && null !== wyz_$) throw new TypeError('Super expression must either be null or a function, not ' + typeof wyz_$);dfgch['prototype'] = Object['create'](wyz_$ && wyz_$['prototype'], { 'constructor': { 'value': dfgch, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), wyz_$ && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](dfgch, wyz_$) : dfgch['__proto__'] = wyz_$);
  })(iklnmj, fgbdc['default']), txswv(iklnmj, [{ 'key': 'setAttribute', 'value': function (nljkmi, komnp) {
      this[nljkmi] = komnp;
    } }, { 'key': 'getAttribute', 'value': function (orqsn) {
      return this[orqsn];
    } }, { 'key': 'getBoundingClientRect', 'value': function () {
      return { 'top': 0x0, 'left': 0x0, 'width': hijklm['innerWidth'], 'height': hijklm['innerHeight'] };
    } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
      var nospq = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](nospq) ? 0x0 : nospq;
    } }, { 'key': 'clientHeight', 'get': function () {
      var y_1$ = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](y_1$) ? 0x0 : y_1$;
    } }]), txswv = iklnmj;function iklnmj() {
    var $1230 = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';!function (jonlkm, adcb) {
      if (!(jonlkm instanceof adcb)) throw new TypeError('Cannot call a class as a function');
    }(this, iklnmj);var kpnml = function (vtsxwu, vyzxwu) {
      if (!vtsxwu) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !vyzxwu || 'object' != typeof vyzxwu && 'function' != typeof vyzxwu ? vtsxwu : vyzxwu;
    }(this, (iklnmj['__proto__'] || Object['getPrototypeOf'](iklnmj))['call'](this));return kpnml['className'] = '', kpnml['childern'] = [], kpnml['style'] = { 'width': hijklm['innerWidth'] + 'px', 'height': hijklm['innerHeight'] + 'px' }, kpnml['insertBefore'] = fhedgc['noop'], kpnml['innerHTML'] = '', kpnml['tagName'] = $1230['toUpperCase'](), kpnml;
  }fehgcd['default'] = txswv;
}, function (_$y10, vz$w, vrtus) {
  'use strict';

  Object['defineProperty'](vz$w, '__esModule', { 'value': !0x0 });var onsqr = vrtus(0x6),
      $_x0y;(function (w$yvxz, wur) {
    if ('function' != typeof wur && null !== wur) throw new TypeError('Super expression must either be null or a function, not ' + typeof wur);w$yvxz['prototype'] = Object['create'](wur && wur['prototype'], { 'constructor': { 'value': w$yvxz, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), wur && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](w$yvxz, wur) : w$yvxz['__proto__'] = wur);
  })(qrusv, (($_x0y = onsqr) && $_x0y['__esModule'] ? $_x0y : { 'default': $_x0y })['default']), vrtus = qrusv;function qrusv() {
    !function (fdgh, jkhf) {
      if (!(fdgh instanceof jkhf)) throw new TypeError('Cannot call a class as a function');
    }(this, qrusv);var nsor = function (bcfge, $xy_w) {
      if (!bcfge) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !$xy_w || 'object' != typeof $xy_w && 'function' != typeof $xy_w ? bcfge : $xy_w;
    }(this, (qrusv['__proto__'] || Object['getPrototypeOf'](qrusv))['call'](this));return nsor['className'] = '', nsor['children'] = [], nsor;
  }vz$w['default'] = vrtus;
}, function (pruqts, sutvq, ebacd) {
  'use strict';

  Object['defineProperty'](sutvq, '__esModule', { 'value': !0x0 });var xvstwu = function (uvtrq, rsuqp, dhgf) {
    return rsuqp && vuzy(uvtrq['prototype'], rsuqp), dhgf && vuzy(uvtrq, dhgf), uvtrq;
  };function vuzy(y$zvxw, upqsr) {
    for (var ijegh = 0x0; ijegh < upqsr['length']; ijegh++) {
      var ebfdcg = upqsr[ijegh];ebfdcg['enumerable'] = ebfdcg['enumerable'] || !0x1, ebfdcg['configurable'] = !0x0, 'value' in ebfdcg && (ebfdcg['writable'] = !0x0), Object['defineProperty'](y$zvxw, ebfdcg['key'], ebfdcg);
    }
  }var qurps = ebacd(0x7),
      wyzvx;(function ($xzwv, higfe) {
    if ('function' != typeof higfe && null !== higfe) throw new TypeError('Super expression must either be null or a function, not ' + typeof higfe);$xzwv['prototype'] = Object['create'](higfe && higfe['prototype'], { 'constructor': { 'value': $xzwv, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), higfe && (Object['setPrototypeOf'] ? Object['setPrototypeOf']($xzwv, higfe) : $xzwv['__proto__'] = higfe);
  })(lokmj, ((wyzvx = qurps) && wyzvx['__esModule'] ? wyzvx : { 'default': wyzvx })['default']), xvstwu(lokmj, [{ 'key': 'appendChild', 'value': function (rqvus) {
      if (!(rqvus instanceof lokmj)) throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');this['childNodes']['push'](rqvus);
    } }, { 'key': 'cloneNode', 'value': function () {
      var jkigh = Object['create'](this);return Object['assign'](jkigh, this), jkigh;
    } }, { 'key': 'removeChild', 'value': function (edbcg) {
      var kihfj = this['childNodes']['findIndex'](function (ighkfj) {
        return ighkfj === edbcg;
      });return -0x1 < kihfj ? this['childNodes']['splice'](kihfj, 0x1) : null;
    } }]), xvstwu = lokmj;function lokmj() {
    !function (acbf, ornp) {
      if (!(acbf instanceof ornp)) throw new TypeError('Cannot call a class as a function');
    }(this, lokmj);var kmnj = function (_04132, rsnoq) {
      if (!_04132) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !rsnoq || 'object' != typeof rsnoq && 'function' != typeof rsnoq ? _04132 : rsnoq;
    }(this, (lokmj['__proto__'] || Object['getPrototypeOf'](lokmj))['call'](this));return kmnj['childNodes'] = [], kmnj;
  }sutvq['default'] = xvstwu;
}, function (bad, wsvru) {
  'use strict';

  Object['defineProperty'](wsvru, '__esModule', { 'value': !0x0 });var stuxwv = function (yxzw_, utvsr, poqlmn) {
    return utvsr && ghfik(yxzw_['prototype'], utvsr), poqlmn && ghfik(yxzw_, poqlmn), yxzw_;
  };function ghfik(_40321, nrosp) {
    for (var mjnli = 0x0; mjnli < nrosp['length']; mjnli++) {
      var jegf = nrosp[mjnli];jegf['enumerable'] = jegf['enumerable'] || !0x1, jegf['configurable'] = !0x0, 'value' in jegf && (jegf['writable'] = !0x0), Object['defineProperty'](_40321, jegf['key'], jegf);
    }
  }var lmjnk = new WeakMap();stuxwv(w$yxz, [{ 'key': 'addEventListener', 'value': function (bfca, deacfb) {
      var oqmrp = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {},
          vuxytw = lmjnk['get'](this);vuxytw || lmjnk['set'](this, vuxytw = {}), vuxytw[bfca] || (vuxytw[bfca] = []), vuxytw[bfca]['push'](deacfb), oqmrp['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), oqmrp['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), oqmrp['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
    } }, { 'key': 'removeEventListener', 'value': function (gdfbc, _$2103) {
      var $_0zxy = lmjnk['get'](this)[gdfbc];if ($_0zxy && 0x0 < $_0zxy['length']) {
        for (var turvsw = $_0zxy['length']; turvsw--;) if ($_0zxy[turvsw] === _$2103) {
          $_0zxy['splice'](turvsw, 0x1);break;
        }
      }
    } }, { 'key': 'dispatchEvent', 'value': function () {
      var nljki = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {},
          roqpm = lmjnk['get'](this)[nljki['type']];if (roqpm) {
        for (var _yxz0 = 0x0; _yxz0 < roqpm['length']; _yxz0++) roqpm[_yxz0](nljki);
      }
    } }]), stuxwv = w$yxz;function w$yxz() {
    !function (wutsx, ghfkij) {
      if (!(wutsx instanceof ghfkij)) throw new TypeError('Cannot call a class as a function');
    }(this, w$yxz), lmjnk['set'](this, {});
  }wsvru['default'] = stuxwv;
}, function (kjmln, prnq) {
  'use strict';

  Object['defineProperty'](prnq, '__esModule', { 'value': !0x0 }), prnq['noop'] = function () {}, prnq['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (omrnpq, vxzuw, urtvs) {
  'use strict';

  Object['defineProperty'](vxzuw, '__esModule', { 'value': !0x0 }), vxzuw['default'] = function () {
    var wrus = wx['createCanvas']();return wrus['type'] = 'canvas', wrus['__proto__']['__proto__'] = new fjkhgi['default']('canvas'), wrus['getContext'], (wrus['getBoundingClientRect'] = function () {
      return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
    }, wrus);
  }, urtvs(0x3);var fjkhgi = miljn(urtvs(0x4));miljn(urtvs(0xa));function miljn($12_z0) {
    return $12_z0 && $12_z0['__esModule'] ? $12_z0 : { 'default': $12_z0 };
  }
}, function (rpnsoq, _03$, vyu) {
  'use strict';

  Object['defineProperty'](_03$, '__esModule', { 'value': !0x0 });var nqpr = function (ghide) {
    {
      if (ghide && ghide['__esModule']) return ghide;var jklh = {};if (null != ghide) {
        for (var mpqon in ghide) Object['prototype']['hasOwnProperty']['call'](ghide, mpqon) && (jklh[mpqon] = ghide[mpqon]);
      }return jklh['default'] = ghide, jklh;
    }
  }(vyu(0x1)),
      lnmpk = wtsuvr(vyu(0x4)),
      pkmnol = wtsuvr(vyu(0xb)),
      otpsr = wtsuvr(vyu(0xc)),
      yvxuzw = wtsuvr(vyu(0x9));function wtsuvr(svtwur) {
    return svtwur && svtwur['__esModule'] ? svtwur : { 'default': svtwur };
  }vyu(0xf);var chef = {},
      zxuyv = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': nqpr, 'hidden': !0x1, 'style': {}, 'location': nqpr['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new lnmpk['default']('head'), 'body': new lnmpk['default']('body'), 'createElement': function (hced) {
      return 'canvas' === hced ? new yvxuzw['default']() : 'audio' === hced ? new otpsr['default']() : 'img' === hced ? new pkmnol['default']() : new lnmpk['default'](hced);
    }, 'getElementById': function (nspo) {
      return nspo === nqpr['canvas']['id'] ? nqpr['canvas'] : null;
    }, 'getElementsByTagName': function (nm) {
      return 'head' === nm ? [zxuyv['head']] : 'body' === nm ? [zxuyv['body']] : 'canvas' === nm ? [nqpr['canvas']] : [];
    }, 'querySelector': function (hjlk) {
      return 'head' === hjlk ? zxuyv['head'] : 'body' === hjlk ? zxuyv['body'] : 'canvas' === hjlk || hjlk === '#' + nqpr['canvas']['id'] ? nqpr['canvas'] : null;
    }, 'querySelectorAll': function (rqotsp) {
      return 'head' === rqotsp ? [zxuyv['head']] : 'body' === rqotsp ? [zxuyv['body']] : 'canvas' === rqotsp ? [nqpr['canvas']] : [];
    }, 'addEventListener': function ($zy, egdbcf) {
      chef[$zy] || (chef[$zy] = []), chef[$zy]['push'](egdbcf);
    }, 'removeEventListener': function (dbfe, jfgehi) {
      var y0z_x = chef[dbfe];if (y0z_x && 0x0 < y0z_x['length']) {
        for (var tuvrws = y0z_x['length']; tuvrws--;) if (y0z_x[tuvrws] === jfgehi) {
          y0z_x['splice'](tuvrws, 0x1);break;
        }
      }
    }, 'dispatchEvent': function (tprusq) {
      var xuzwvy = chef[tprusq['type']];if (xuzwvy) {
        for (var $_yx0 = 0x0; $_yx0 < xuzwvy['length']; $_yx0++) xuzwvy[$_yx0](tprusq);
      }
    } };_03$['default'] = zxuyv;
}, function (ghilj, gfijhk) {
  'use strict';

  Object['defineProperty'](gfijhk, '__esModule', { 'value': !0x0 }), gfijhk['default'] = function () {
    return wx['createImage']();
  };
}, function ($_0xyz, lokjmn, gdhef) {
  'use strict';

  Object['defineProperty'](lokjmn, '__esModule', { 'value': !0x0 });var zyxwuv = function (gfkhij, plonmq, iljhgk) {
    return plonmq && sopnq(gfkhij['prototype'], plonmq), iljhgk && sopnq(gfkhij, iljhgk), gfkhij;
  };function sopnq(tvsr, ebfac) {
    for (var $yxvz = 0x0; $yxvz < ebfac['length']; $yxvz++) {
      var urwtvs = ebfac[$yxvz];urwtvs['enumerable'] = urwtvs['enumerable'] || !0x1, urwtvs['configurable'] = !0x0, 'value' in urwtvs && (urwtvs['writable'] = !0x0), Object['defineProperty'](tvsr, urwtvs['key'], urwtvs);
    }
  }var hfeijg = gdhef(0xd),
      nolmq = (_xwy = hfeijg) && _xwy['__esModule'] ? _xwy : { 'default': _xwy },
      _xwy,
      omnpql = gdhef(0x8);function txsvw(gehijf, $01y_z) {
    if (!gehijf) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !$01y_z || 'object' != typeof $01y_z && 'function' != typeof $01y_z ? gehijf : $01y_z;
  }var qotprs = 0x0,
      y1$0_z = 0x1,
      tpqrso = 0x2,
      glk = 0x3,
      rost = 0x4,
      _zxy0 = new WeakMap(),
      ljmok = new WeakMap();new WeakMap(), new WeakMap(), (function (xzy$0_, xwz$_) {
    if ('function' != typeof xwz$_ && null !== xwz$_) throw new TypeError('Super expression must either be null or a function, not ' + typeof xwz$_);xzy$0_['prototype'] = Object['create'](xwz$_ && xwz$_['prototype'], { 'constructor': { 'value': xzy$0_, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), xwz$_ && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](xzy$0_, xwz$_) : xzy$0_['__proto__'] = xwz$_);
  }(edchg, nolmq['default']), zyxwuv(edchg, [{ 'key': 'load', 'value': function () {
      console['warn']('HTMLAudioElement.load() is not implemented.');
    } }, { 'key': 'play', 'value': function () {
      (0x0, omnpql['isSubContext'])() || _zxy0['get'](this)['play']();
    } }, { 'key': 'pause', 'value': function () {
      (0x0, omnpql['isSubContext'])() || _zxy0['get'](this)['pause']();
    } }, { 'key': 'canPlayType', 'value': function () {
      var mjlkin = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return 'string' == typeof mjlkin && (-0x1 < mjlkin['indexOf']('audio/mpeg') || mjlkin['indexOf']('audio/mp4')) ? 'probably' : '';
    } }, { 'key': 'cloneNode', 'value': function () {
      var inlmk = new edchg();return (0x0, omnpql['isSubContext'])() || (inlmk['loop'] = _zxy0['get'](this)['loop'], inlmk['autoplay'] = _zxy0['get'](this)['loop'], inlmk['src'] = this['src']), inlmk;
    } }, { 'key': 'currentTime', 'get': function () {
      return (0x0, omnpql['isSubContext'])() ? 0x0 : _zxy0['get'](this)['currentTime'];
    }, 'set': function (eafcb) {
      (0x0, omnpql['isSubContext'])() || _zxy0['get'](this)['seek'](eafcb);
    } }, { 'key': 'src', 'get': function () {
      return ljmok['get'](this);
    }, 'set': function (npmoq) {
      ljmok['set'](this, npmoq), (0x0, omnpql['isSubContext'])() || (_zxy0['get'](this)['src'] = npmoq);
    } }, { 'key': 'loop', 'get': function () {
      return !(0x0, omnpql['isSubContext'])() && _zxy0['get'](this)['loop'];
    }, 'set': function (xvuwts) {
      (0x0, omnpql['isSubContext'])() || (_zxy0['get'](this)['loop'] = xvuwts);
    } }, { 'key': 'autoplay', 'get': function () {
      return !(0x0, omnpql['isSubContext'])() && _zxy0['get'](this)['autoplay'];
    }, 'set': function (jikh) {
      (0x0, omnpql['isSubContext'])() || (_zxy0['get'](this)['autoplay'] = jikh);
    } }, { 'key': 'paused', 'get': function () {
      return !(0x0, omnpql['isSubContext'])() && _zxy0['get'](this)['paused'];
    } }]), zyxwuv = edchg);function edchg(fecgdb) {
    !function (vrtusw, rtso) {
      if (!(vrtusw instanceof rtso)) throw new TypeError('Cannot call a class as a function');
    }(this, edchg);var qopns = txsvw(this, (edchg['__proto__'] || Object['getPrototypeOf'](edchg))['call'](this));if (qopns['HAVE_NOTHING'] = qotprs, qopns['HAVE_METADATA'] = y1$0_z, qopns['HAVE_CURRENT_DATA'] = tpqrso, qopns['HAVE_FUTURE_DATA'] = glk, qopns['HAVE_ENOUGH_DATA'] = rost, qopns['readyState'] = qotprs, (0x0, omnpql['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), txsvw(qopns);ljmok['set'](qopns, '');var pnqml = wx['createInnerAudioContext']();return _zxy0['set'](qopns, pnqml), pnqml['onCanplay'](function () {
      qopns['dispatchEvent']({ 'type': 'load' }), qopns['dispatchEvent']({ 'type': 'loadend' }), qopns['dispatchEvent']({ 'type': 'canplay' }), qopns['dispatchEvent']({ 'type': 'canplaythrough' }), qopns['dispatchEvent']({ 'type': 'loadedmetadata' }), qopns['readyState'] = tpqrso;
    }), pnqml['onPlay'](function () {
      qopns['dispatchEvent']({ 'type': 'play' });
    }), pnqml['onPause'](function () {
      qopns['dispatchEvent']({ 'type': 'pause' });
    }), pnqml['onEnded'](function () {
      qopns['dispatchEvent']({ 'type': 'ended' }), qopns['readyState'] = rost;
    }), pnqml['onError'](function () {
      qopns['dispatchEvent']({ 'type': 'error' });
    }), fecgdb && (_zxy0['get'](qopns)['src'] = fecgdb), qopns;
  }lokjmn['default'] = zyxwuv;
}, function (zyxuvw, jnkiml, purst) {
  'use strict';

  Object['defineProperty'](jnkiml, '__esModule', { 'value': !0x0 });var $zyw_x = purst(0xe),
      _0zx$y;(function (vwyz, gjikl) {
    if ('function' != typeof gjikl && null !== gjikl) throw new TypeError('Super expression must either be null or a function, not ' + typeof gjikl);vwyz['prototype'] = Object['create'](gjikl && gjikl['prototype'], { 'constructor': { 'value': vwyz, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), gjikl && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](vwyz, gjikl) : vwyz['__proto__'] = gjikl);
  })(z$0_y1, ((_0zx$y = $zyw_x) && _0zx$y['__esModule'] ? _0zx$y : { 'default': _0zx$y })['default']), purst = z$0_y1;function z$0_y1() {
    return function (pmnok, olnjkm) {
      if (!(pmnok instanceof olnjkm)) throw new TypeError('Cannot call a class as a function');
    }(this, z$0_y1), function (bcedfg, ruvq) {
      if (!bcedfg) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !ruvq || 'object' != typeof ruvq && 'function' != typeof ruvq ? bcedfg : ruvq;
    }(this, (z$0_y1['__proto__'] || Object['getPrototypeOf'](z$0_y1))['call'](this, 'audio'));
  }jnkiml['default'] = purst;
}, function (mopqnl, onqsp, lkihjm) {
  'use strict';

  Object['defineProperty'](onqsp, '__esModule', { 'value': !0x0 });var pnrsoq = function (hlgkij, hmijk, npmlok) {
    return hmijk && y0x_(hlgkij['prototype'], hmijk), npmlok && y0x_(hlgkij, npmlok), hlgkij;
  };function y0x_(ytxvw, vw$xzy) {
    for (var xy$w_ = 0x0; xy$w_ < vw$xzy['length']; xy$w_++) {
      var uwyxvt = vw$xzy[xy$w_];uwyxvt['enumerable'] = uwyxvt['enumerable'] || !0x1, uwyxvt['configurable'] = !0x0, 'value' in uwyxvt && (uwyxvt['writable'] = !0x0), Object['defineProperty'](ytxvw, uwyxvt['key'], uwyxvt);
    }
  }var tsqvu = lkihjm(0x4),
      nkjiml;(function (mkni, nlmjok) {
    if ('function' != typeof nlmjok && null !== nlmjok) throw new TypeError('Super expression must either be null or a function, not ' + typeof nlmjok);mkni['prototype'] = Object['create'](nlmjok && nlmjok['prototype'], { 'constructor': { 'value': mkni, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), nlmjok && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](mkni, nlmjok) : mkni['__proto__'] = nlmjok);
  })(khijgl, ((nkjiml = tsqvu) && nkjiml['__esModule'] ? nkjiml : { 'default': nkjiml })['default']), pnrsoq(khijgl, [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]), pnrsoq = khijgl;function khijgl(iejf) {
    return function (gfedih, sr) {
      if (!(gfedih instanceof sr)) throw new TypeError('Cannot call a class as a function');
    }(this, khijgl), function (sronpq, qutv) {
      if (!sronpq) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !qutv || 'object' != typeof qutv && 'function' != typeof qutv ? sronpq : qutv;
    }(this, (khijgl['__proto__'] || Object['getPrototypeOf'](khijgl))['call'](this, iejf));
  }onqsp['default'] = pnrsoq;
}, function (tuwvr, pokmn, z$y10_) {
  'use strict';

  z$y10_(0x10);
}, function (fdechg, rmnqpo, klgijh) {
  'use strict';

  var mnrqop = function (_$0z) {
    {
      if (_$0z && _$0z['__esModule']) return _$0z;var turqv = {};if (null != _$0z) {
        for (var yxzuwv in _$0z) Object['prototype']['hasOwnProperty']['call'](_$0z, yxzuwv) && (turqv[yxzuwv] = _$0z[yxzuwv]);
      }return turqv['default'] = _$0z, turqv;
    }
  }(klgijh(0x1)),
      lomnj = klgijh(0xa),
      utywv = (gbedc = lomnj) && gbedc['__esModule'] ? gbedc : { 'default': gbedc },
      gbedc,
      pusrtq = klgijh(0x8);function $xvyw(eafcd) {
    !function (ompnqr, vzxyw) {
      if (!(ompnqr instanceof vzxyw)) throw new TypeError('Cannot call a class as a function');
    }(this, $xvyw), this['target'] = mnrqop['canvas'], this['currentTarget'] = mnrqop['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = pusrtq['noop'], this['stopPropagation'] = pusrtq['noop'], this['type'] = eafcd;
  }function uwvty(psnr) {
    return function (xuwyz) {
      var jkminl = new $xvyw(psnr);jkminl['touches'] = xuwyz['touches'], jkminl['targetTouches'] = Array['prototype']['slice']['call'](xuwyz['touches']), jkminl['changedTouches'] = xuwyz['changedTouches'], jkminl['timeStamp'] = xuwyz['timeStamp'], utywv['default']['dispatchEvent'](jkminl);
    };
  }wx['onTouchStart'](uwvty('touchstart')), wx['onTouchMove'](uwvty('touchmove')), wx['onTouchEnd'](uwvty('touchend')), wx['onTouchCancel'](uwvty('touchcancel'));
}, function (klomjn, hegdfc) {
  'use strict';

  Object['defineProperty'](hegdfc, '__esModule', { 'value': !0x0 }), hegdfc['noop'] = function () {}, hegdfc['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (nkilmj, hfgjei, hcedfg) {
  'use strict';

  Object['defineProperty'](hfgjei, '__esModule', { 'value': !0x0 }), hcedfg = hcedfg(0x8), hcedfg = { 'platform': wx['getSystemInfoSync']()['platform'], 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': hcedfg['noop'], 'watchPosition': hcedfg['noop'], 'clearWatch': hcedfg['noop'] } }, hfgjei['default'] = hcedfg;
}, function (hklmij, z$x_w) {
  'use strict';

  Object['defineProperty'](z$x_w, '__esModule', { 'value': !0x0 });var dcebfa = function (_130, uwy, ihlmkj) {
    return uwy && zy_01$(_130['prototype'], uwy), ihlmkj && zy_01$(_130, ihlmkj), _130;
  };function zy_01$(pmoln, xvw) {
    for (var fghedi = 0x0; fghedi < xvw['length']; fghedi++) {
      var $wz = xvw[fghedi];$wz['enumerable'] = $wz['enumerable'] || !0x1, $wz['configurable'] = !0x0, 'value' in $wz && ($wz['writable'] = !0x0), Object['defineProperty'](pmoln, $wz['key'], $wz);
    }
  }var cedb = new WeakMap(),
      fkijg = new WeakMap(),
      dbefac = new WeakMap(),
      kjlmo = new WeakMap(),
      uwvz = new WeakMap();function tsro(kplnmo) {
    if ('function' == typeof this['on' + kplnmo]) {
      for (var wtrsuv = arguments['length'], jminlk = Array(0x1 < wtrsuv ? wtrsuv - 0x1 : 0x0), wzuy = 0x1; wzuy < wtrsuv; wzuy++) jminlk[wzuy - 0x1] = arguments[wzuy];this['on' + kplnmo]['apply'](this, jminlk);
    }
  }function w_$zx(xywvz$) {
    this['readyState'] = xywvz$, tsro['call'](this, 'readystatechange');
  }dcebfa(_x$w, [{ 'key': 'abort', 'value': function () {
      var jmlnik = uwvz['get'](this);jmlnik && jmlnik['abort']();
    } }, { 'key': 'getAllResponseHeaders', 'value': function () {
      var rspon = kjlmo['get'](this);return Object['keys'](rspon)['map'](function (plnm) {
        return plnm + ':\x20' + rspon[plnm];
      })['join']('\x0a');
    } }, { 'key': 'getResponseHeader', 'value': function (rqopm) {
      return kjlmo['get'](this)[rqopm];
    } }, { 'key': 'open', 'value': function (kihlm, $z_012) {
      fkijg['set'](this, kihlm), cedb['set'](this, $z_012), w_$zx['call'](this, _x$w['OPENED']);
    } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function () {
      var spoqt = this,
          wuxvts = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';if (this['readyState'] !== _x$w['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');wx['request']({ 'data': wuxvts, 'url': cedb['get'](this), 'method': fkijg['get'](this), 'header': dbefac['get'](this), 'responseType': this['responseType'], 'success': function (jghefi) {
          var _20$31 = jghefi['data'],
              rpsqo = jghefi['statusCode'],
              jghefi = jghefi['header'];if ('string' != typeof _20$31 && !(_20$31 instanceof ArrayBuffer)) try {
            _20$31 = JSON['stringify'](_20$31);
          } catch (qrosnp) {}if (spoqt['status'] = rpsqo, kjlmo['set'](spoqt, jghefi), tsro['call'](spoqt, 'loadstart'), w_$zx['call'](spoqt, _x$w['HEADERS_RECEIVED']), w_$zx['call'](spoqt, _x$w['LOADING']), (spoqt['response'] = _20$31) instanceof ArrayBuffer) {
            spoqt['responseText'] = '';var gbecd = new Uint8Array(_20$31),
                gfjehi = gbecd['byteLength'];for (var x$yvz = 0x0; x$yvz < gfjehi; x$yvz++) spoqt['responseText'] += String['fromCharCode'](gbecd[x$yvz]);
          } else spoqt['responseText'] = _20$31;w_$zx['call'](spoqt, _x$w['DONE']), tsro['call'](spoqt, 'load'), tsro['call'](spoqt, 'loadend');
        }, 'fail': function (hlkmij) {
          hlkmij = hlkmij['errMsg'], (-0x1 !== hlkmij['indexOf']('abort') ? tsro['call'](spoqt, 'abort') : tsro['call'](spoqt, 'error', hlkmij), tsro['call'](spoqt, 'loadend'));
        } });
    } }, { 'key': 'setRequestHeader', 'value': function (_23$0, hjiegf) {
      var tuvsxw = dbefac['get'](this);tuvsxw[_23$0] = hjiegf, dbefac['set'](this, tuvsxw);
    } }]), dcebfa = _x$w;function _x$w() {
    !function (ijfhg, _20) {
      if (!(ijfhg instanceof _20)) throw new TypeError('Cannot call a class as a function');
    }(this, _x$w), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = !0x1, dbefac['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), kjlmo['set'](this, {});
  }dcebfa['UNSEND'] = 0x0, dcebfa['OPENED'] = 0x1, dcebfa['HEADERS_RECEIVED'] = 0x2, dcebfa['LOADING'] = 0x3, dcebfa['DONE'] = 0x4, z$x_w['default'] = dcebfa;
}, function (opsq, yxu, dgihe) {
  'use strict';

  Object['defineProperty'](yxu, '__esModule', { 'value': !0x0 });var rtqso = function (degbcf, nrpo, urstwv) {
    return nrpo && fjhge(degbcf['prototype'], nrpo), urstwv && fjhge(degbcf, urstwv), degbcf;
  };function fjhge(yzw$v, rqtsop) {
    for (var gfebdc = 0x0; gfebdc < rqtsop['length']; gfebdc++) {
      var _yw$zx = rqtsop[gfebdc];_yw$zx['enumerable'] = _yw$zx['enumerable'] || !0x1, _yw$zx['configurable'] = !0x0, 'value' in _yw$zx && (_yw$zx['writable'] = !0x0), Object['defineProperty'](yzw$v, _yw$zx['key'], _yw$zx);
    }
  }var ebcf = dgihe(0x8),
      vx$z = new WeakMap();rtqso(xtwyu, [{ 'key': 'close', 'value': function (himljk, imjhk) {
      this['readyState'] = xtwyu['CLOSING'], vx$z['get'](this)['close']({ 'code': himljk, 'reason': imjhk });
    } }, { 'key': 'send', 'value': function (vtyxw) {
      if ('string' != typeof vtyxw && !(vtyxw instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + vtyxw + ' is invalid');vx$z['get'](this)['send']({ 'data': vtyxw });
    } }]), rtqso = xtwyu;function xtwyu(txuyvw) {
    var jnolkm = this,
        ghidf = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function (srptuq, ehjgfi) {
      if (!(srptuq instanceof ehjgfi)) throw new TypeError('Cannot call a class as a function');
    }(this, xtwyu), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, (0x0, ebcf['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if ('string' != typeof txuyvw || !/(^ws:\/\/)|(^wss:\/\/)/['test'](txuyvw)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + txuyvw + '\' is invalid');return this['url'] = txuyvw, this['readyState'] = xtwyu['CONNECTING'], ghidf = wx['connectSocket']({ 'url': txuyvw, 'protocols': Array['isArray'](ghidf) ? ghidf : [ghidf] }), (vx$z['set'](this, ghidf), ghidf['onClose'](function (rusvqt) {
      jnolkm['readyState'] = xtwyu['CLOSED'], 'function' == typeof jnolkm['onclose'] && jnolkm['onclose'](rusvqt);
    }), ghidf['onMessage'](function (dgehi) {
      'function' == typeof jnolkm['onmessage'] && jnolkm['onmessage'](dgehi);
    }), ghidf['onOpen'](function () {
      jnolkm['readyState'] = xtwyu['OPEN'], 'function' == typeof jnolkm['onopen'] && jnolkm['onopen']();
    }), ghidf['onError'](function (qpnrso) {
      'function' == typeof jnolkm['onerror'] && jnolkm['onerror'](new Error(qpnrso['errMsg']));
    }), this);
  }rtqso['CONNECTING'] = 0x0, rtqso['OPEN'] = 0x1, rtqso['CLOSING'] = 0x2, rtqso['CLOSED'] = 0x3, yxu['default'] = rtqso;
}, function (wvyz$x, jnomkl, $02_z) {
  'use strict';

  Object['defineProperty'](jnomkl, '__esModule', { 'value': !0x0 });var opqns = function ($zxyw, ghefdc, ehdcfg) {
    return ghefdc && kihfjg($zxyw['prototype'], ghefdc), ehdcfg && kihfjg($zxyw, ehdcfg), $zxyw;
  };function kihfjg(fcgh, fed) {
    for (var ilk = 0x0; ilk < fed['length']; ilk++) {
      var ifehjg = fed[ilk];ifehjg['enumerable'] = ifehjg['enumerable'] || !0x1, ifehjg['configurable'] = !0x0, 'value' in ifehjg && (ifehjg['writable'] = !0x0), Object['defineProperty'](fcgh, ifehjg['key'], ifehjg);
    }
  }var w_yzx = $02_z(0x8);opqns(gchfed, [{ 'key': 'construct', 'value': function () {
      if ((0x0, w_yzx['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
    } }]), opqns = gchfed;function gchfed() {
    !function (jfik, nmor) {
      if (!(jfik instanceof nmor)) throw new TypeError('Cannot call a class as a function');
    }(this, gchfed);
  }jnomkl['default'] = opqns;
}, function (lnoqpm, qnspr, lpnmko) {
  'use strict';

  Object['defineProperty'](qnspr, '__esModule', { 'value': !0x0 });var ligk = lpnmko(0x8),
      ilhgk = { get 'length'() {
      return wx['getStorageInfoSync']()['keys']['length'];
    }, 'key': function (edg) {
      return wx['getStorageInfoSync']()['keys'][edg];
    }, 'getItem': function (_yxw) {
      return wx['getStorageSync'](_yxw);
    }, 'setItem': function (_0x$y, ilhgj) {
      return wx['setStorageSync'](_0x$y, ilhgj);
    }, 'removeItem': function (oqrspn) {
      wx['removeStorageSync'](oqrspn);
    }, 'clear': function () {
      wx['clearStorageSync']();
    } },
      bfeda = {};lpnmko = { get 'length'() {
      return Object['keys'](bfeda)['length'];
    }, 'key': function (z0$1_2) {
      return Object['keys'](bfeda)[z0$1_2];
    }, 'getItem': function ($0z) {
      return bfeda[$0z];
    }, 'setItem': function (x$zwy_, prtoq) {
      bfeda[x$zwy_] = prtoq;
    }, 'removeItem': function (hcfge) {
      delete bfeda[hcfge];
    }, 'clear': function () {
      bfeda = {};
    } }, ilhgk = (0x0, ligk['isSubContext'])() ? lpnmko : ilhgk, qnspr['default'] = ilhgk;
}, function (kfhgi, lkjg) {
  'use strict';

  Object['defineProperty'](lkjg, '__esModule', { 'value': !0x0 }), lkjg['default'] = { 'href': 'bbbgame.js', 'reload': function () {} };
}]);