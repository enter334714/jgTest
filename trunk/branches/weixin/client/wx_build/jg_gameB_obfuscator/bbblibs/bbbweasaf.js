var _ = wx.y$;
!function (yzwvux) {
  var orpqt = {};function __webpack_require__(faebcd) {
    if (orpqt[faebcd]) return orpqt[faebcd]['exports'];var gfdch = orpqt[faebcd] = { 'exports': {}, 'id': faebcd, 'loaded': !0x1 };return yzwvux[faebcd]['call'](gfdch['exports'], gfdch, gfdch['exports'], __webpack_require__), gfdch['loaded'] = !0x0, gfdch['exports'];
  }__webpack_require__['m'] = yzwvux, __webpack_require__['c'] = orpqt, __webpack_require__['p'] = '', __webpack_require__(0x0);
}([function (ljnmk, sortpq, uwts) {
  'use strict';

  var usvrq = function (jegf) {
    {
      if (jegf && jegf['__esModule']) return jegf;var lgihjk = {};if (null != jegf) {
        for (var xwuvyt in jegf) Object['prototype']['hasOwnProperty']['call'](jegf, xwuvyt) && (lgihjk[xwuvyt] = jegf[xwuvyt]);
      }return lgihjk['default'] = jegf, lgihjk;
    }
  }(uwts(0x1)),
      jolk = uwts(0x4),
      xvty = (yxw$_ = jolk) && yxw$_['__esModule'] ? yxw$_ : { 'default': yxw$_ },
      yxw$_,
      bdceg = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
    usvrq['addEventListener'] = function (ljik, $2_0z) {
      usvrq['document']['addEventListener'](ljik, $2_0z);
    }, usvrq['removeEventListener'] = function (wz$xvy, xutvws) {
      usvrq['document']['removeEventListener'](wz$xvy, xutvws);
    }, usvrq['canvas'] && (usvrq['canvas']['addEventListener'] = usvrq['addEventListener'], usvrq['canvas']['removeEventListener'] = usvrq['removeEventListener']), bdceg['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new xvty['default']('canvas'), sharedCanvas['addEventListener'] = usvrq['addEventListener'], sharedCanvas['removeEventListener'] = usvrq['removeEventListener']);var gfdhie = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === gfdhie) {
      for (var soqpn in usvrq) {
        var gikljh = Object['getOwnPropertyDescriptor'](bdceg, soqpn);gikljh && !0x0 !== gikljh['configurable'] || Object['defineProperty'](window, soqpn, { 'value': usvrq[soqpn] });
      }for (var dhf in usvrq['document']) {
        var stpruq = Object['getOwnPropertyDescriptor'](bdceg['document'], dhf);stpruq && !0x0 !== stpruq['configurable'] || Object['defineProperty'](bdceg['document'], dhf, { 'value': usvrq['document'][dhf] });
      }window['parent'] = window;
    } else {
      for (var vuqst in usvrq) bdceg[vuqst] = usvrq[vuqst];bdceg['window'] = usvrq, window = bdceg, window['top'] = window['parent'] = window;
    }
  }());
}, function (fehcd, mlnoqp, fchgd) {
  'use strict';

  Object['defineProperty'](mlnoqp, '__esModule', { 'value': !0x0 }), mlnoqp['cancelAnimationFrame'] = mlnoqp['requestAnimationFrame'] = mlnoqp['clearInterval'] = mlnoqp['clearTimeout'] = mlnoqp['setInterval'] = mlnoqp['setTimeout'] = mlnoqp['canvas'] = mlnoqp['location'] = mlnoqp['localStorage'] = mlnoqp['HTMLElement'] = mlnoqp['FileReader'] = mlnoqp['Audio'] = mlnoqp['Image'] = mlnoqp['WebSocket'] = mlnoqp['XMLHttpRequest'] = mlnoqp['navigator'] = mlnoqp['document'] = void 0x0;var nmik = fchgd(0x2);Object['keys'](nmik)['forEach'](function (xvwstu) {
    'default' !== xvwstu && '__esModule' !== xvwstu && Object['defineProperty'](mlnoqp, xvwstu, { 'enumerable': !0x0, 'get': function () {
        return nmik[xvwstu];
      } });
  });var uwy = fchgd(0x3);Object['keys'](uwy)['forEach'](function (yz_0) {
    'default' !== yz_0 && '__esModule' !== yz_0 && Object['defineProperty'](mlnoqp, yz_0, { 'enumerable': !0x0, 'get': function () {
        return uwy[yz_0];
      } });
  });var mnroqp = mlnjo(fchgd(0x9)),
      suptrq = fchgd(0x11),
      hjfegi = mlnjo(fchgd(0xa)),
      ihmjl = mlnjo(fchgd(0x12)),
      cfdhe = mlnjo(fchgd(0x13)),
      wvuxz = mlnjo(fchgd(0x14)),
      eghfc = mlnjo(fchgd(0xb)),
      ijhlg = mlnjo(fchgd(0xc)),
      roqnsp = mlnjo(fchgd(0x15)),
      mkiljh = mlnjo(fchgd(0x4)),
      ihdfg = mlnjo(fchgd(0x16));fchgd = mlnjo(fchgd(0x17));function mlnjo(nkmji) {
    return nkmji && nkmji['__esModule'] ? nkmji : { 'default': nkmji };
  }mlnoqp['document'] = hjfegi['default'], mlnoqp['navigator'] = ihmjl['default'], mlnoqp['XMLHttpRequest'] = cfdhe['default'], mlnoqp['WebSocket'] = wvuxz['default'], mlnoqp['Image'] = eghfc['default'], mlnoqp['Audio'] = ijhlg['default'], mlnoqp['FileReader'] = roqnsp['default'], mlnoqp['HTMLElement'] = mkiljh['default'], mlnoqp['localStorage'] = ihdfg['default'], mlnoqp['location'] = fchgd['default'], mnroqp = (0x0, suptrq['isSubContext'])() ? void 0x0 : new mnroqp['default'](), (mlnoqp['canvas'] = mnroqp, mlnoqp['setTimeout'] = setTimeout, mlnoqp['setInterval'] = setInterval, mlnoqp['clearTimeout'] = clearTimeout, mlnoqp['clearInterval'] = clearInterval, mlnoqp['requestAnimationFrame'] = requestAnimationFrame, mlnoqp['cancelAnimationFrame'] = cancelAnimationFrame);
}, function (_z021$, $z_wy) {
  'use strict';

  Object['defineProperty']($z_wy, '__esModule', { 'value': !0x0 });var ifhdeg = wx['getSystemInfoSync'](),
      rmponq = ifhdeg['screenWidth'],
      ytvxu = ifhdeg['screenHeight'],
      ifhdeg = ifhdeg['devicePixelRatio'];rmponq = $z_wy['innerWidth'] = rmponq, ytvxu = $z_wy['innerHeight'] = ytvxu, $z_wy['devicePixelRatio'] = ifhdeg, $z_wy['screen'] = { 'availWidth': rmponq, 'availHeight': ytvxu }, $z_wy['performance'] = { 'now': function () {
      return Date['now']() / 0x3e8;
    } }, $z_wy['ontouchstart'] = null, $z_wy['ontouchmove'] = null, $z_wy['ontouchend'] = null;
}, function (_z0y$, otsp, pqrnom) {
  'use strict';

  Object['defineProperty'](otsp, '__esModule', { 'value': !0x0 }), otsp['HTMLCanvasElement'] = otsp['HTMLImageElement'] = void 0x0;var _$zy = pqrnom(0x4);pqrnom = (jhik = _$zy) && jhik['__esModule'] ? jhik : { 'default': jhik };var jhik;function uxstvw(rqpto, jgilhk) {
    if (!(rqpto instanceof jgilhk)) throw new TypeError('Cannot call a class as a function');
  }function nmojkl(ijlmn, ghfeji) {
    if (!ijlmn) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !ghfeji || 'object' != typeof ghfeji && 'function' != typeof ghfeji ? ijlmn : ghfeji;
  }function y$z01(wuzvxy, yvxutw) {
    if ('function' != typeof yvxutw && null !== yvxutw) throw new TypeError('Super expression must either be null or a function, not ' + typeof yvxutw);wuzvxy['prototype'] = Object['create'](yvxutw && yvxutw['prototype'], { 'constructor': { 'value': wuzvxy, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), yvxutw && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](wuzvxy, yvxutw) : wuzvxy['__proto__'] = yvxutw);
  }otsp['HTMLImageElement'] = (y$z01(kljihg, pqrnom['default']), kljihg);function kljihg() {
    return uxstvw(this, kljihg), nmojkl(this, (kljihg['__proto__'] || Object['getPrototypeOf'](kljihg))['call'](this, 'img'));
  }otsp['HTMLCanvasElement'] = (y$z01(xwvty, pqrnom['default']), xwvty);function xwvty() {
    return uxstvw(this, xwvty), nmojkl(this, (xwvty['__proto__'] || Object['getPrototypeOf'](xwvty))['call'](this, 'canvas'));
  }
}, function (mq, sqruv, dhcf) {
  'use strict';

  Object['defineProperty'](sqruv, '__esModule', { 'value': !0x0 });var mljo = function (twuv, xuyvwz, $102z) {
    return xuyvwz && eifhjg(twuv['prototype'], xuyvwz), $102z && eifhjg(twuv, $102z), twuv;
  };function eifhjg(y_z01, eidfgh) {
    for (var dcbegf = 0x0; dcbegf < eidfgh['length']; dcbegf++) {
      var orqmn = eidfgh[dcbegf];orqmn['enumerable'] = orqmn['enumerable'] || !0x1, orqmn['configurable'] = !0x0, 'value' in orqmn && (orqmn['writable'] = !0x0), Object['defineProperty'](y_z01, orqmn['key'], orqmn);
    }
  }var yw$zv = dhcf(0x5),
      sutvrq = (utrqs = yw$zv) && utrqs['__esModule'] ? utrqs : { 'default': utrqs },
      utrqs,
      w_$zx = dhcf(0x8),
      echdf = dhcf(0x2);(function (jnmokl, jhkmil) {
    if ('function' != typeof jhkmil && null !== jhkmil) throw new TypeError('Super expression must either be null or a function, not ' + typeof jhkmil);jnmokl['prototype'] = Object['create'](jhkmil && jhkmil['prototype'], { 'constructor': { 'value': jnmokl, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), jhkmil && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](jnmokl, jhkmil) : jnmokl['__proto__'] = jhkmil);
  })(mkjnol, sutvrq['default']), mljo(mkjnol, [{ 'key': 'setAttribute', 'value': function (lgji, xw$vyz) {
      this[lgji] = xw$vyz;
    } }, { 'key': 'getAttribute', 'value': function (xz0_y) {
      return this[xz0_y];
    } }, { 'key': 'getBoundingClientRect', 'value': function () {
      return { 'top': 0x0, 'left': 0x0, 'width': echdf['innerWidth'], 'height': echdf['innerHeight'] };
    } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
      var rswtu = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](rswtu) ? 0x0 : rswtu;
    } }, { 'key': 'clientHeight', 'get': function () {
      var hgeij = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](hgeij) ? 0x0 : hgeij;
    } }]), mljo = mkjnol;function mkjnol() {
    var xusv = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';!function (ife, iejfh) {
      if (!(ife instanceof iejfh)) throw new TypeError('Cannot call a class as a function');
    }(this, mkjnol);var onlj = function (qrosn, dcae) {
      if (!qrosn) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !dcae || 'object' != typeof dcae && 'function' != typeof dcae ? qrosn : dcae;
    }(this, (mkjnol['__proto__'] || Object['getPrototypeOf'](mkjnol))['call'](this));return onlj['className'] = '', onlj['childern'] = [], onlj['style'] = { 'width': echdf['innerWidth'] + 'px', 'height': echdf['innerHeight'] + 'px' }, onlj['insertBefore'] = w_$zx['noop'], onlj['innerHTML'] = '', onlj['tagName'] = xusv['toUpperCase'](), onlj;
  }sqruv['default'] = mljo;
}, function (wutrsv, fdegc, txsvw) {
  'use strict';

  Object['defineProperty'](fdegc, '__esModule', { 'value': !0x0 });var qutsrp = txsvw(0x6),
      pnlkom;(function (w_zx$, $vzwyx) {
    if ('function' != typeof $vzwyx && null !== $vzwyx) throw new TypeError('Super expression must either be null or a function, not ' + typeof $vzwyx);w_zx$['prototype'] = Object['create']($vzwyx && $vzwyx['prototype'], { 'constructor': { 'value': w_zx$, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), $vzwyx && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](w_zx$, $vzwyx) : w_zx$['__proto__'] = $vzwyx);
  })(zyvw$, ((pnlkom = qutsrp) && pnlkom['__esModule'] ? pnlkom : { 'default': pnlkom })['default']), txsvw = zyvw$;function zyvw$() {
    !function (jeig, lmjhik) {
      if (!(jeig instanceof lmjhik)) throw new TypeError('Cannot call a class as a function');
    }(this, zyvw$);var rstqp = function (vuwsxt, pqsor) {
      if (!vuwsxt) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !pqsor || 'object' != typeof pqsor && 'function' != typeof pqsor ? vuwsxt : pqsor;
    }(this, (zyvw$['__proto__'] || Object['getPrototypeOf'](zyvw$))['call'](this));return rstqp['className'] = '', rstqp['children'] = [], rstqp;
  }fdegc['default'] = txsvw;
}, function (gjiefh, yxz0, gefch) {
  'use strict';

  Object['defineProperty'](yxz0, '__esModule', { 'value': !0x0 });var yz$vx = function (debgf, fegjih, uywvt) {
    return fegjih && gkfh(debgf['prototype'], fegjih), uywvt && gkfh(debgf, uywvt), debgf;
  };function gkfh(qpnlom, yz$wvx) {
    for (var tusqvr = 0x0; tusqvr < yz$wvx['length']; tusqvr++) {
      var pnomkl = yz$wvx[tusqvr];pnomkl['enumerable'] = pnomkl['enumerable'] || !0x1, pnomkl['configurable'] = !0x0, 'value' in pnomkl && (pnomkl['writable'] = !0x0), Object['defineProperty'](qpnlom, pnomkl['key'], pnomkl);
    }
  }var x_$0y = gefch(0x7),
      nsopq;(function (nqom, npmrqo) {
    if ('function' != typeof npmrqo && null !== npmrqo) throw new TypeError('Super expression must either be null or a function, not ' + typeof npmrqo);nqom['prototype'] = Object['create'](npmrqo && npmrqo['prototype'], { 'constructor': { 'value': nqom, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), npmrqo && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](nqom, npmrqo) : nqom['__proto__'] = npmrqo);
  })(wyzx_, ((nsopq = x_$0y) && nsopq['__esModule'] ? nsopq : { 'default': nsopq })['default']), yz$vx(wyzx_, [{ 'key': 'appendChild', 'value': function (_1y0z) {
      if (!(_1y0z instanceof wyzx_)) throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');this['childNodes']['push'](_1y0z);
    } }, { 'key': 'cloneNode', 'value': function () {
      var vx$wz = Object['create'](this);return Object['assign'](vx$wz, this), vx$wz;
    } }, { 'key': 'removeChild', 'value': function (hgfiej) {
      var dgfihe = this['childNodes']['findIndex'](function (higfk) {
        return higfk === hgfiej;
      });return -0x1 < dgfihe ? this['childNodes']['splice'](dgfihe, 0x1) : null;
    } }]), yz$vx = wyzx_;function wyzx_() {
    !function ($ywv, tuswvr) {
      if (!($ywv instanceof tuswvr)) throw new TypeError('Cannot call a class as a function');
    }(this, wyzx_);var kln = function (cgfbed, vxy$w) {
      if (!cgfbed) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !vxy$w || 'object' != typeof vxy$w && 'function' != typeof vxy$w ? cgfbed : vxy$w;
    }(this, (wyzx_['__proto__'] || Object['getPrototypeOf'](wyzx_))['call'](this));return kln['childNodes'] = [], kln;
  }yxz0['default'] = yz$vx;
}, function (lnjmok, nqpoml) {
  'use strict';

  Object['defineProperty'](nqpoml, '__esModule', { 'value': !0x0 });var z_$x = function (ortsq, gihjfk, psrqn) {
    return gihjfk && cfhegd(ortsq['prototype'], gihjfk), psrqn && cfhegd(ortsq, psrqn), ortsq;
  };function cfhegd(yxzw$v, xvywz$) {
    for (var z_x0 = 0x0; z_x0 < xvywz$['length']; z_x0++) {
      var $102_3 = xvywz$[z_x0];$102_3['enumerable'] = $102_3['enumerable'] || !0x1, $102_3['configurable'] = !0x0, 'value' in $102_3 && ($102_3['writable'] = !0x0), Object['defineProperty'](yxzw$v, $102_3['key'], $102_3);
    }
  }var ihj = new WeakMap();z_$x(hgfej, [{ 'key': 'addEventListener', 'value': function (cfdh, adfc) {
      var bgecf = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {},
          fgdihe = ihj['get'](this);fgdihe || ihj['set'](this, fgdihe = {}), fgdihe[cfdh] || (fgdihe[cfdh] = []), fgdihe[cfdh]['push'](adfc), bgecf['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), bgecf['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), bgecf['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
    } }, { 'key': 'removeEventListener', 'value': function (klhmij, echfg) {
      var fjhg = ihj['get'](this)[klhmij];if (fjhg && 0x0 < fjhg['length']) {
        for (var kpolnm = fjhg['length']; kpolnm--;) if (fjhg[kpolnm] === echfg) {
          fjhg['splice'](kpolnm, 0x1);break;
        }
      }
    } }, { 'key': 'dispatchEvent', 'value': function () {
      var stwrvu = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {},
          jgeh = ihj['get'](this)[stwrvu['type']];if (jgeh) {
        for (var qsorpt = 0x0; qsorpt < jgeh['length']; qsorpt++) jgeh[qsorpt](stwrvu);
      }
    } }]), z_$x = hgfej;function hgfej() {
    !function (nmrpq, adcfbe) {
      if (!(nmrpq instanceof adcfbe)) throw new TypeError('Cannot call a class as a function');
    }(this, hgfej), ihj['set'](this, {});
  }nqpoml['default'] = z_$x;
}, function (gfhki, hfej) {
  'use strict';

  Object['defineProperty'](hfej, '__esModule', { 'value': !0x0 }), hfej['noop'] = function () {}, hfej['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (zxyw$v, gfcdbe, _2$0) {
  'use strict';

  Object['defineProperty'](gfcdbe, '__esModule', { 'value': !0x0 }), gfcdbe['default'] = function () {
    var jihfk = wx['createCanvas']();return jihfk['type'] = 'canvas', jihfk['__proto__']['__proto__'] = new lmjkni['default']('canvas'), jihfk['getContext'], (jihfk['getBoundingClientRect'] = function () {
      return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
    }, jihfk);
  }, _2$0(0x3);var lmjkni = iehd(_2$0(0x4));iehd(_2$0(0xa));function iehd(sorqnp) {
    return sorqnp && sorqnp['__esModule'] ? sorqnp : { 'default': sorqnp };
  }
}, function (chdgfe, $z1y0, kmpnlo) {
  'use strict';

  Object['defineProperty']($z1y0, '__esModule', { 'value': !0x0 });var nqplom = function (gifjkh) {
    {
      if (gifjkh && gifjkh['__esModule']) return gifjkh;var ywzv$x = {};if (null != gifjkh) {
        for (var nlpqo in gifjkh) Object['prototype']['hasOwnProperty']['call'](gifjkh, nlpqo) && (ywzv$x[nlpqo] = gifjkh[nlpqo]);
      }return ywzv$x['default'] = gifjkh, ywzv$x;
    }
  }(kmpnlo(0x1)),
      jlnok = _1y0z$(kmpnlo(0x4)),
      rsptqo = _1y0z$(kmpnlo(0xb)),
      usrwvt = _1y0z$(kmpnlo(0xc)),
      zxy$ = _1y0z$(kmpnlo(0x9));function _1y0z$(urqtvs) {
    return urqtvs && urqtvs['__esModule'] ? urqtvs : { 'default': urqtvs };
  }kmpnlo(0xf);var qmorpn = {},
      otqsp = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': nqplom, 'hidden': !0x1, 'style': {}, 'location': nqplom['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new jlnok['default']('head'), 'body': new jlnok['default']('body'), 'createElement': function (_xz$0y) {
      return 'canvas' === _xz$0y ? new zxy$['default']() : 'audio' === _xz$0y ? new usrwvt['default']() : 'img' === _xz$0y ? new rsptqo['default']() : new jlnok['default'](_xz$0y);
    }, 'getElementById': function (_z2$10) {
      return _z2$10 === nqplom['canvas']['id'] ? nqplom['canvas'] : null;
    }, 'getElementsByTagName': function (jmlhi) {
      return 'head' === jmlhi ? [otqsp['head']] : 'body' === jmlhi ? [otqsp['body']] : 'canvas' === jmlhi ? [nqplom['canvas']] : [];
    }, 'querySelector': function (mprn) {
      return 'head' === mprn ? otqsp['head'] : 'body' === mprn ? otqsp['body'] : 'canvas' === mprn || mprn === '#' + nqplom['canvas']['id'] ? nqplom['canvas'] : null;
    }, 'querySelectorAll': function (ytxwu) {
      return 'head' === ytxwu ? [otqsp['head']] : 'body' === ytxwu ? [otqsp['body']] : 'canvas' === ytxwu ? [nqplom['canvas']] : [];
    }, 'addEventListener': function (_2013$, uwtr) {
      qmorpn[_2013$] || (qmorpn[_2013$] = []), qmorpn[_2013$]['push'](uwtr);
    }, 'removeEventListener': function (ghif, afdcbe) {
      var kijgl = qmorpn[ghif];if (kijgl && 0x0 < kijgl['length']) {
        for (var nqposr = kijgl['length']; nqposr--;) if (kijgl[nqposr] === afdcbe) {
          kijgl['splice'](nqposr, 0x1);break;
        }
      }
    }, 'dispatchEvent': function (dbacef) {
      var xyvwt = qmorpn[dbacef['type']];if (xyvwt) {
        for (var edhgf = 0x0; edhgf < xyvwt['length']; edhgf++) xyvwt[edhgf](dbacef);
      }
    } };$z1y0['default'] = otqsp;
}, function (qrmpon, ehcgf) {
  'use strict';

  Object['defineProperty'](ehcgf, '__esModule', { 'value': !0x0 }), ehcgf['default'] = function () {
    return wx['createImage']();
  };
}, function (jkinm, wuxs, noqrs) {
  'use strict';

  Object['defineProperty'](wuxs, '__esModule', { 'value': !0x0 });var eacbd = function (nmpor, mqpl, zy_$) {
    return mqpl && ywvutx(nmpor['prototype'], mqpl), zy_$ && ywvutx(nmpor, zy_$), nmpor;
  };function ywvutx(milnj, efihj) {
    for (var fcdegh = 0x0; fcdegh < efihj['length']; fcdegh++) {
      var mlqp = efihj[fcdegh];mlqp['enumerable'] = mlqp['enumerable'] || !0x1, mlqp['configurable'] = !0x0, 'value' in mlqp && (mlqp['writable'] = !0x0), Object['defineProperty'](milnj, mlqp['key'], mlqp);
    }
  }var wzvxyu = noqrs(0xd),
      gehdfi = (rsnp = wzvxyu) && rsnp['__esModule'] ? rsnp : { 'default': rsnp },
      rsnp,
      yx$_ = noqrs(0x8);function kmijlh(mnkp, $zy0_1) {
    if (!mnkp) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !$zy0_1 || 'object' != typeof $zy0_1 && 'function' != typeof $zy0_1 ? mnkp : $zy0_1;
  }var hjifkg = 0x0,
      dcbeg = 0x1,
      otsrqp = 0x2,
      facbd = 0x3,
      pnkm = 0x4,
      hkmji = new WeakMap(),
      stvqu = new WeakMap();new WeakMap(), new WeakMap(), (function (squprt, utsrpq) {
    if ('function' != typeof utsrpq && null !== utsrpq) throw new TypeError('Super expression must either be null or a function, not ' + typeof utsrpq);squprt['prototype'] = Object['create'](utsrpq && utsrpq['prototype'], { 'constructor': { 'value': squprt, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), utsrpq && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](squprt, utsrpq) : squprt['__proto__'] = utsrpq);
  }($_yzxw, gehdfi['default']), eacbd($_yzxw, [{ 'key': 'load', 'value': function () {
      console['warn']('HTMLAudioElement.load() is not implemented.');
    } }, { 'key': 'play', 'value': function () {
      (0x0, yx$_['isSubContext'])() || hkmji['get'](this)['play']();
    } }, { 'key': 'pause', 'value': function () {
      (0x0, yx$_['isSubContext'])() || hkmji['get'](this)['pause']();
    } }, { 'key': 'canPlayType', 'value': function () {
      var prns = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return 'string' == typeof prns && (-0x1 < prns['indexOf']('audio/mpeg') || prns['indexOf']('audio/mp4')) ? 'probably' : '';
    } }, { 'key': 'cloneNode', 'value': function () {
      var rqvsu = new $_yzxw();return (0x0, yx$_['isSubContext'])() || (rqvsu['loop'] = hkmji['get'](this)['loop'], rqvsu['autoplay'] = hkmji['get'](this)['loop'], rqvsu['src'] = this['src']), rqvsu;
    } }, { 'key': 'currentTime', 'get': function () {
      return (0x0, yx$_['isSubContext'])() ? 0x0 : hkmji['get'](this)['currentTime'];
    }, 'set': function (gbfde) {
      (0x0, yx$_['isSubContext'])() || hkmji['get'](this)['seek'](gbfde);
    } }, { 'key': 'src', 'get': function () {
      return stvqu['get'](this);
    }, 'set': function (tvuxyw) {
      stvqu['set'](this, tvuxyw), (0x0, yx$_['isSubContext'])() || (hkmji['get'](this)['src'] = tvuxyw);
    } }, { 'key': 'loop', 'get': function () {
      return !(0x0, yx$_['isSubContext'])() && hkmji['get'](this)['loop'];
    }, 'set': function (gijkhl) {
      (0x0, yx$_['isSubContext'])() || (hkmji['get'](this)['loop'] = gijkhl);
    } }, { 'key': 'autoplay', 'get': function () {
      return !(0x0, yx$_['isSubContext'])() && hkmji['get'](this)['autoplay'];
    }, 'set': function (rstv) {
      (0x0, yx$_['isSubContext'])() || (hkmji['get'](this)['autoplay'] = rstv);
    } }, { 'key': 'paused', 'get': function () {
      return !(0x0, yx$_['isSubContext'])() && hkmji['get'](this)['paused'];
    } }]), eacbd = $_yzxw);function $_yzxw(prnsoq) {
    !function (vq, fceb) {
      if (!(vq instanceof fceb)) throw new TypeError('Cannot call a class as a function');
    }(this, $_yzxw);var ecdhfg = kmijlh(this, ($_yzxw['__proto__'] || Object['getPrototypeOf']($_yzxw))['call'](this));if (ecdhfg['HAVE_NOTHING'] = hjifkg, ecdhfg['HAVE_METADATA'] = dcbeg, ecdhfg['HAVE_CURRENT_DATA'] = otsrqp, ecdhfg['HAVE_FUTURE_DATA'] = facbd, ecdhfg['HAVE_ENOUGH_DATA'] = pnkm, ecdhfg['readyState'] = hjifkg, (0x0, yx$_['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), kmijlh(ecdhfg);stvqu['set'](ecdhfg, '');var xzwy$v = wx['createInnerAudioContext']();return hkmji['set'](ecdhfg, xzwy$v), xzwy$v['onCanplay'](function () {
      ecdhfg['dispatchEvent']({ 'type': 'load' }), ecdhfg['dispatchEvent']({ 'type': 'loadend' }), ecdhfg['dispatchEvent']({ 'type': 'canplay' }), ecdhfg['dispatchEvent']({ 'type': 'canplaythrough' }), ecdhfg['dispatchEvent']({ 'type': 'loadedmetadata' }), ecdhfg['readyState'] = otsrqp;
    }), xzwy$v['onPlay'](function () {
      ecdhfg['dispatchEvent']({ 'type': 'play' });
    }), xzwy$v['onPause'](function () {
      ecdhfg['dispatchEvent']({ 'type': 'pause' });
    }), xzwy$v['onEnded'](function () {
      ecdhfg['dispatchEvent']({ 'type': 'ended' }), ecdhfg['readyState'] = pnkm;
    }), xzwy$v['onError'](function () {
      ecdhfg['dispatchEvent']({ 'type': 'error' });
    }), prnsoq && (hkmji['get'](ecdhfg)['src'] = prnsoq), ecdhfg;
  }wuxs['default'] = eacbd;
}, function (gfeji, ghcedf, edgc) {
  'use strict';

  Object['defineProperty'](ghcedf, '__esModule', { 'value': !0x0 });var vxtyw = edgc(0xe),
      _4301;(function (chgd, postrq) {
    if ('function' != typeof postrq && null !== postrq) throw new TypeError('Super expression must either be null or a function, not ' + typeof postrq);chgd['prototype'] = Object['create'](postrq && postrq['prototype'], { 'constructor': { 'value': chgd, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), postrq && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](chgd, postrq) : chgd['__proto__'] = postrq);
  })(uxywvz, ((_4301 = vxtyw) && _4301['__esModule'] ? _4301 : { 'default': _4301 })['default']), edgc = uxywvz;function uxywvz() {
    return function (hijeg, surqp) {
      if (!(hijeg instanceof surqp)) throw new TypeError('Cannot call a class as a function');
    }(this, uxywvz), function (wy$vz, nmoklj) {
      if (!wy$vz) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !nmoklj || 'object' != typeof nmoklj && 'function' != typeof nmoklj ? wy$vz : nmoklj;
    }(this, (uxywvz['__proto__'] || Object['getPrototypeOf'](uxywvz))['call'](this, 'audio'));
  }ghcedf['default'] = edgc;
}, function (olnmkj, $_xyz, fgkih) {
  'use strict';

  Object['defineProperty']($_xyz, '__esModule', { 'value': !0x0 });var fhedgi = function (zy$_w, zxvw$, sruqtp) {
    return zxvw$ && omkjn(zy$_w['prototype'], zxvw$), sruqtp && omkjn(zy$_w, sruqtp), zy$_w;
  };function omkjn(rvutq, z_12$0) {
    for (var tvywux = 0x0; tvywux < z_12$0['length']; tvywux++) {
      var mnlpk = z_12$0[tvywux];mnlpk['enumerable'] = mnlpk['enumerable'] || !0x1, mnlpk['configurable'] = !0x0, 'value' in mnlpk && (mnlpk['writable'] = !0x0), Object['defineProperty'](rvutq, mnlpk['key'], mnlpk);
    }
  }var y0zx$ = fgkih(0x4),
      onp;(function (lnmkji, pnmok) {
    if ('function' != typeof pnmok && null !== pnmok) throw new TypeError('Super expression must either be null or a function, not ' + typeof pnmok);lnmkji['prototype'] = Object['create'](pnmok && pnmok['prototype'], { 'constructor': { 'value': lnmkji, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), pnmok && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](lnmkji, pnmok) : lnmkji['__proto__'] = pnmok);
  })(ursqtp, ((onp = y0zx$) && onp['__esModule'] ? onp : { 'default': onp })['default']), fhedgi(ursqtp, [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]), fhedgi = ursqtp;function ursqtp(gihed) {
    return function (wturs, dgfeb) {
      if (!(wturs instanceof dgfeb)) throw new TypeError('Cannot call a class as a function');
    }(this, ursqtp), function (edfhcg, efgih) {
      if (!edfhcg) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !efgih || 'object' != typeof efgih && 'function' != typeof efgih ? edfhcg : efgih;
    }(this, (ursqtp['__proto__'] || Object['getPrototypeOf'](ursqtp))['call'](this, gihed));
  }$_xyz['default'] = fhedgi;
}, function (urtqsp, pnmqor, rpqost) {
  'use strict';

  rpqost(0x10);
}, function (bfedg, pstrq, knplom) {
  'use strict';

  var iglh = function (lijkm) {
    {
      if (lijkm && lijkm['__esModule']) return lijkm;var pqstr = {};if (null != lijkm) {
        for (var gdiehf in lijkm) Object['prototype']['hasOwnProperty']['call'](lijkm, gdiehf) && (pqstr[gdiehf] = lijkm[gdiehf]);
      }return pqstr['default'] = lijkm, pqstr;
    }
  }(knplom(0x1)),
      tvxws = knplom(0xa),
      _$y0 = (idehgf = tvxws) && idehgf['__esModule'] ? idehgf : { 'default': idehgf },
      idehgf,
      cfeabd = knplom(0x8);function jkhfg(iefdg) {
    !function (spoqrt, qvst) {
      if (!(spoqrt instanceof qvst)) throw new TypeError('Cannot call a class as a function');
    }(this, jkhfg), this['target'] = iglh['canvas'], this['currentTarget'] = iglh['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = cfeabd['noop'], this['stopPropagation'] = cfeabd['noop'], this['type'] = iefdg;
  }function ihlgj(bcg) {
    return function (linjk) {
      var ojmlk = new jkhfg(bcg);ojmlk['touches'] = linjk['touches'], ojmlk['targetTouches'] = Array['prototype']['slice']['call'](linjk['touches']), ojmlk['changedTouches'] = linjk['changedTouches'], ojmlk['timeStamp'] = linjk['timeStamp'], _$y0['default']['dispatchEvent'](ojmlk);
    };
  }wx['onTouchStart'](ihlgj('touchstart')), wx['onTouchMove'](ihlgj('touchmove')), wx['onTouchEnd'](ihlgj('touchend')), wx['onTouchCancel'](ihlgj('touchcancel'));
}, function (ljkhmi, dhfgc) {
  'use strict';

  Object['defineProperty'](dhfgc, '__esModule', { 'value': !0x0 }), dhfgc['noop'] = function () {}, dhfgc['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (vswt, hmki, qrtop) {
  'use strict';

  Object['defineProperty'](hmki, '__esModule', { 'value': !0x0 }), qrtop = qrtop(0x8), qrtop = { 'platform': wx['getSystemInfoSync']()['platform'], 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': qrtop['noop'], 'watchPosition': qrtop['noop'], 'clearWatch': qrtop['noop'] } }, hmki['default'] = qrtop;
}, function (lomqp, ghkjl) {
  'use strict';

  Object['defineProperty'](ghkjl, '__esModule', { 'value': !0x0 });var xutv = function (onmklj, ghdefi, febdgc) {
    return ghdefi && y0$1_z(onmklj['prototype'], ghdefi), febdgc && y0$1_z(onmklj, febdgc), onmklj;
  };function y0$1_z(nloq, z_021) {
    for (var ormpq = 0x0; ormpq < z_021['length']; ormpq++) {
      var ehigd = z_021[ormpq];ehigd['enumerable'] = ehigd['enumerable'] || !0x1, ehigd['configurable'] = !0x0, 'value' in ehigd && (ehigd['writable'] = !0x0), Object['defineProperty'](nloq, ehigd['key'], ehigd);
    }
  }var mponqr = new WeakMap(),
      $z_0y = new WeakMap(),
      ljkmhi = new WeakMap(),
      gcfdbe = new WeakMap(),
      oqpsnr = new WeakMap();function xzuv(kimnlj) {
    if ('function' == typeof this['on' + kimnlj]) {
      for (var gilkh = arguments['length'], gcd = Array(0x1 < gilkh ? gilkh - 0x1 : 0x0), ecfgdh = 0x1; ecfgdh < gilkh; ecfgdh++) gcd[ecfgdh - 0x1] = arguments[ecfgdh];this['on' + kimnlj]['apply'](this, gcd);
    }
  }function y1(lhjikm) {
    this['readyState'] = lhjikm, xzuv['call'](this, 'readystatechange');
  }xutv(ghfecd, [{ 'key': 'abort', 'value': function () {
      var hmijl = oqpsnr['get'](this);hmijl && hmijl['abort']();
    } }, { 'key': 'getAllResponseHeaders', 'value': function () {
      var kijlmn = gcfdbe['get'](this);return Object['keys'](kijlmn)['map'](function (x$wyz) {
        return x$wyz + ':\x20' + kijlmn[x$wyz];
      })['join']('\x0a');
    } }, { 'key': 'getResponseHeader', 'value': function (xustvw) {
      return gcfdbe['get'](this)[xustvw];
    } }, { 'key': 'open', 'value': function (qmoln, vywzx) {
      $z_0y['set'](this, qmoln), mponqr['set'](this, vywzx), y1['call'](this, ghfecd['OPENED']);
    } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function () {
      var klgj = this,
          igjklh = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';if (this['readyState'] !== ghfecd['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');wx['request']({ 'data': igjklh, 'url': mponqr['get'](this), 'method': $z_0y['get'](this), 'header': ljkmhi['get'](this), 'responseType': this['responseType'], 'success': function (z20$_) {
          var stqrvu = z20$_['data'],
              klnopm = z20$_['statusCode'],
              z20$_ = z20$_['header'];if ('string' != typeof stqrvu && !(stqrvu instanceof ArrayBuffer)) try {
            stqrvu = JSON['stringify'](stqrvu);
          } catch (nqmorp) {}if (klgj['status'] = klnopm, gcfdbe['set'](klgj, z20$_), xzuv['call'](klgj, 'loadstart'), y1['call'](klgj, ghfecd['HEADERS_RECEIVED']), y1['call'](klgj, ghfecd['LOADING']), (klgj['response'] = stqrvu) instanceof ArrayBuffer) {
            klgj['responseText'] = '';var oqrmp = new Uint8Array(stqrvu),
                nrmqpo = oqrmp['byteLength'];for (var kmijl = 0x0; kmijl < nrmqpo; kmijl++) klgj['responseText'] += String['fromCharCode'](oqrmp[kmijl]);
          } else klgj['responseText'] = stqrvu;y1['call'](klgj, ghfecd['DONE']), xzuv['call'](klgj, 'load'), xzuv['call'](klgj, 'loadend');
        }, 'fail': function (tqursv) {
          tqursv = tqursv['errMsg'], (-0x1 !== tqursv['indexOf']('abort') ? xzuv['call'](klgj, 'abort') : xzuv['call'](klgj, 'error', tqursv), xzuv['call'](klgj, 'loadend'));
        } });
    } }, { 'key': 'setRequestHeader', 'value': function (ywvuxt, ecfh) {
      var kjih = ljkmhi['get'](this);kjih[ywvuxt] = ecfh, ljkmhi['set'](this, kjih);
    } }]), xutv = ghfecd;function ghfecd() {
    !function (mpqrn, rposqn) {
      if (!(mpqrn instanceof rposqn)) throw new TypeError('Cannot call a class as a function');
    }(this, ghfecd), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = !0x1, ljkmhi['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), gcfdbe['set'](this, {});
  }xutv['UNSEND'] = 0x0, xutv['OPENED'] = 0x1, xutv['HEADERS_RECEIVED'] = 0x2, xutv['LOADING'] = 0x3, xutv['DONE'] = 0x4, ghkjl['default'] = xutv;
}, function (xzv, swvxt, qnors) {
  'use strict';

  Object['defineProperty'](swvxt, '__esModule', { 'value': !0x0 });var lhkgj = function (rqsop, v$ywzx, wrvust) {
    return v$ywzx && qsrvut(rqsop['prototype'], v$ywzx), wrvust && qsrvut(rqsop, wrvust), rqsop;
  };function qsrvut(fiehgj, pqsorn) {
    for (var wuyvzx = 0x0; wuyvzx < pqsorn['length']; wuyvzx++) {
      var kighfj = pqsorn[wuyvzx];kighfj['enumerable'] = kighfj['enumerable'] || !0x1, kighfj['configurable'] = !0x0, 'value' in kighfj && (kighfj['writable'] = !0x0), Object['defineProperty'](fiehgj, kighfj['key'], kighfj);
    }
  }var psnqo = qnors(0x8),
      tquspr = new WeakMap();lhkgj(dfcegh, [{ 'key': 'close', 'value': function (eghid, qrom) {
      this['readyState'] = dfcegh['CLOSING'], tquspr['get'](this)['close']({ 'code': eghid, 'reason': qrom });
    } }, { 'key': 'send', 'value': function (wzyxv) {
      if ('string' != typeof wzyxv && !(wzyxv instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + wzyxv + ' is invalid');tquspr['get'](this)['send']({ 'data': wzyxv });
    } }]), lhkgj = dfcegh;function dfcegh(efdgb) {
    var vtsurq = this,
        rsqvu = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function (fhegc, klpmn) {
      if (!(fhegc instanceof klpmn)) throw new TypeError('Cannot call a class as a function');
    }(this, dfcegh), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, (0x0, psnqo['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if ('string' != typeof efdgb || !/(^ws:\/\/)|(^wss:\/\/)/['test'](efdgb)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + efdgb + '\' is invalid');return this['url'] = efdgb, this['readyState'] = dfcegh['CONNECTING'], rsqvu = wx['connectSocket']({ 'url': efdgb, 'protocols': Array['isArray'](rsqvu) ? rsqvu : [rsqvu] }), (tquspr['set'](this, rsqvu), rsqvu['onClose'](function (wyvu) {
      vtsurq['readyState'] = dfcegh['CLOSED'], 'function' == typeof vtsurq['onclose'] && vtsurq['onclose'](wyvu);
    }), rsqvu['onMessage'](function (lknijm) {
      'function' == typeof vtsurq['onmessage'] && vtsurq['onmessage'](lknijm);
    }), rsqvu['onOpen'](function () {
      vtsurq['readyState'] = dfcegh['OPEN'], 'function' == typeof vtsurq['onopen'] && vtsurq['onopen']();
    }), rsqvu['onError'](function (utqrvs) {
      'function' == typeof vtsurq['onerror'] && vtsurq['onerror'](new Error(utqrvs['errMsg']));
    }), this);
  }lhkgj['CONNECTING'] = 0x0, lhkgj['OPEN'] = 0x1, lhkgj['CLOSING'] = 0x2, lhkgj['CLOSED'] = 0x3, swvxt['default'] = lhkgj;
}, function (nkmojl, mihjkl, chedfg) {
  'use strict';

  Object['defineProperty'](mihjkl, '__esModule', { 'value': !0x0 });var dbacf = function (ifkh, efchd, dfeih) {
    return efchd && y0_zx$(ifkh['prototype'], efchd), dfeih && y0_zx$(ifkh, dfeih), ifkh;
  };function y0_zx$(zx$y_w, zwvyxu) {
    for (var xw$zy = 0x0; xw$zy < zwvyxu['length']; xw$zy++) {
      var ursv = zwvyxu[xw$zy];ursv['enumerable'] = ursv['enumerable'] || !0x1, ursv['configurable'] = !0x0, 'value' in ursv && (ursv['writable'] = !0x0), Object['defineProperty'](zx$y_w, ursv['key'], ursv);
    }
  }var ighjfe = chedfg(0x8);dbacf(vtuxwy, [{ 'key': 'construct', 'value': function () {
      if ((0x0, ighjfe['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
    } }]), dbacf = vtuxwy;function vtuxwy() {
    !function (gfjie, oknlp) {
      if (!(gfjie instanceof oknlp)) throw new TypeError('Cannot call a class as a function');
    }(this, vtuxwy);
  }mihjkl['default'] = dbacf;
}, function (wyz_$x, jgfk, roqpns) {
  'use strict';

  Object['defineProperty'](jgfk, '__esModule', { 'value': !0x0 });var fgkhji = roqpns(0x8),
      psrno = { get 'length'() {
      return wx['getStorageInfoSync']()['keys']['length'];
    }, 'key': function (gdebc) {
      return wx['getStorageInfoSync']()['keys'][gdebc];
    }, 'getItem': function (dgcfeh) {
      return wx['getStorageSync'](dgcfeh);
    }, 'setItem': function (xuswv, dcgfhe) {
      return wx['setStorageSync'](xuswv, dcgfhe);
    }, 'removeItem': function (ehidgf) {
      wx['removeStorageSync'](ehidgf);
    }, 'clear': function () {
      wx['clearStorageSync']();
    } },
      rqtsu = {};roqpns = { get 'length'() {
      return Object['keys'](rqtsu)['length'];
    }, 'key': function (wtvxuy) {
      return Object['keys'](rqtsu)[wtvxuy];
    }, 'getItem': function (fcgeb) {
      return rqtsu[fcgeb];
    }, 'setItem': function (fabd, optr) {
      rqtsu[fabd] = optr;
    }, 'removeItem': function (pomqln) {
      delete rqtsu[pomqln];
    }, 'clear': function () {
      rqtsu = {};
    } }, psrno = (0x0, fgkhji['isSubContext'])() ? roqpns : psrno, jgfk['default'] = psrno;
}, function (wuvxt, onpmkl) {
  'use strict';

  Object['defineProperty'](onpmkl, '__esModule', { 'value': !0x0 }), onpmkl['default'] = { 'href': 'bbbgame.js', 'reload': function () {} };
}]);