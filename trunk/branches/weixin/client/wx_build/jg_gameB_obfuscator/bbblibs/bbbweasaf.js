var _ = wx.y$;
!function (oqrpst) {
  var ustvrq = {};function __webpack_require__(y$z01_) {
    if (ustvrq[y$z01_]) return ustvrq[y$z01_]['exports'];var fgced = ustvrq[y$z01_] = { 'exports': {}, 'id': y$z01_, 'loaded': !0x1 };return oqrpst[y$z01_]['call'](fgced['exports'], fgced, fgced['exports'], __webpack_require__), fgced['loaded'] = !0x0, fgced['exports'];
  }__webpack_require__['m'] = oqrpst, __webpack_require__['c'] = ustvrq, __webpack_require__['p'] = '', __webpack_require__(0x0);
}([function (hjfkgi, tqos, bdcfa) {
  'use strict';

  var gfbce = function (z$1) {
    {
      if (z$1 && z$1['__esModule']) return z$1;var toqspr = {};if (null != z$1) {
        for (var cgebf in z$1) Object['prototype']['hasOwnProperty']['call'](z$1, cgebf) && (toqspr[cgebf] = z$1[cgebf]);
      }return toqspr['default'] = z$1, toqspr;
    }
  }(bdcfa(0x1)),
      cdbef = bdcfa(0x4),
      yz_w$ = (svtruw = cdbef) && svtruw['__esModule'] ? svtruw : { 'default': svtruw },
      svtruw,
      yvxwzu = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
    gfbce['addEventListener'] = function (spurq, bad) {
      gfbce['document']['addEventListener'](spurq, bad);
    }, gfbce['removeEventListener'] = function (adebfc, lpnmk) {
      gfbce['document']['removeEventListener'](adebfc, lpnmk);
    }, gfbce['canvas'] && (gfbce['canvas']['addEventListener'] = gfbce['addEventListener'], gfbce['canvas']['removeEventListener'] = gfbce['removeEventListener']), yvxwzu['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new yz_w$['default']('canvas'), sharedCanvas['addEventListener'] = gfbce['addEventListener'], sharedCanvas['removeEventListener'] = gfbce['removeEventListener']);var hjfkg = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === hjfkg) {
      for (var kp in gfbce) {
        var xuyv = Object['getOwnPropertyDescriptor'](yvxwzu, kp);xuyv && !0x0 !== xuyv['configurable'] || Object['defineProperty'](window, kp, { 'value': gfbce[kp] });
      }for (var optqs in gfbce['document']) {
        var wzy$x_ = Object['getOwnPropertyDescriptor'](yvxwzu['document'], optqs);wzy$x_ && !0x0 !== wzy$x_['configurable'] || Object['defineProperty'](yvxwzu['document'], optqs, { 'value': gfbce['document'][optqs] });
      }window['parent'] = window;
    } else {
      for (var yxvzuw in gfbce) yvxwzu[yxvzuw] = gfbce[yxvzuw];yvxwzu['window'] = gfbce, window = yvxwzu, window['top'] = window['parent'] = window;
    }
  }());
}, function (yuxwvz, fcdgeh, jniml) {
  'use strict';

  Object['defineProperty'](fcdgeh, '__esModule', { 'value': !0x0 }), fcdgeh['cancelAnimationFrame'] = fcdgeh['requestAnimationFrame'] = fcdgeh['clearInterval'] = fcdgeh['clearTimeout'] = fcdgeh['setInterval'] = fcdgeh['setTimeout'] = fcdgeh['canvas'] = fcdgeh['location'] = fcdgeh['localStorage'] = fcdgeh['HTMLElement'] = fcdgeh['FileReader'] = fcdgeh['Audio'] = fcdgeh['Image'] = fcdgeh['WebSocket'] = fcdgeh['XMLHttpRequest'] = fcdgeh['navigator'] = fcdgeh['document'] = void 0x0;var dgcb = jniml(0x2);Object['keys'](dgcb)['forEach'](function (qptor) {
    'default' !== qptor && '__esModule' !== qptor && Object['defineProperty'](fcdgeh, qptor, { 'enumerable': !0x0, 'get': function () {
        return dgcb[qptor];
      } });
  });var jimhkl = jniml(0x3);Object['keys'](jimhkl)['forEach'](function (linjk) {
    'default' !== linjk && '__esModule' !== linjk && Object['defineProperty'](fcdgeh, linjk, { 'enumerable': !0x0, 'get': function () {
        return jimhkl[linjk];
      } });
  });var cfdbe = orptsq(jniml(0x9)),
      cfh = jniml(0x11),
      tsxuv = orptsq(jniml(0xa)),
      uqrpt = orptsq(jniml(0x12)),
      $_10zy = orptsq(jniml(0x13)),
      npsqr = orptsq(jniml(0x14)),
      lonkj = orptsq(jniml(0xb)),
      zxy$_w = orptsq(jniml(0xc)),
      $wy = orptsq(jniml(0x15)),
      oqps = orptsq(jniml(0x4)),
      nlkomj = orptsq(jniml(0x16));jniml = orptsq(jniml(0x17));function orptsq(rupqst) {
    return rupqst && rupqst['__esModule'] ? rupqst : { 'default': rupqst };
  }fcdgeh['document'] = tsxuv['default'], fcdgeh['navigator'] = uqrpt['default'], fcdgeh['XMLHttpRequest'] = $_10zy['default'], fcdgeh['WebSocket'] = npsqr['default'], fcdgeh['Image'] = lonkj['default'], fcdgeh['Audio'] = zxy$_w['default'], fcdgeh['FileReader'] = $wy['default'], fcdgeh['HTMLElement'] = oqps['default'], fcdgeh['localStorage'] = nlkomj['default'], fcdgeh['location'] = jniml['default'], cfdbe = (0x0, cfh['isSubContext'])() ? void 0x0 : new cfdbe['default'](), (fcdgeh['canvas'] = cfdbe, fcdgeh['setTimeout'] = setTimeout, fcdgeh['setInterval'] = setInterval, fcdgeh['clearTimeout'] = clearTimeout, fcdgeh['clearInterval'] = clearInterval, fcdgeh['requestAnimationFrame'] = requestAnimationFrame, fcdgeh['cancelAnimationFrame'] = cancelAnimationFrame);
}, function (wvst, lmiknj) {
  'use strict';

  Object['defineProperty'](lmiknj, '__esModule', { 'value': !0x0 });var xyutv = wx['getSystemInfoSync'](),
      idfh = xyutv['screenWidth'],
      sqrtup = xyutv['screenHeight'],
      xyutv = xyutv['devicePixelRatio'];idfh = lmiknj['innerWidth'] = idfh, sqrtup = lmiknj['innerHeight'] = sqrtup, lmiknj['devicePixelRatio'] = xyutv, lmiknj['screen'] = { 'availWidth': idfh, 'availHeight': sqrtup }, lmiknj['performance'] = { 'now': function () {
      return Date['now']() / 0x3e8;
    } }, lmiknj['ontouchstart'] = null, lmiknj['ontouchmove'] = null, lmiknj['ontouchend'] = null;
}, function (khlmji, _$xwyz, vwzyx$) {
  'use strict';

  Object['defineProperty'](_$xwyz, '__esModule', { 'value': !0x0 }), _$xwyz['HTMLCanvasElement'] = _$xwyz['HTMLImageElement'] = void 0x0;var mjkinl = vwzyx$(0x4);vwzyx$ = (y0z$1 = mjkinl) && y0z$1['__esModule'] ? y0z$1 : { 'default': y0z$1 };var y0z$1;function begdcf(orqts, tpsqu) {
    if (!(orqts instanceof tpsqu)) throw new TypeError('Cannot call a class as a function');
  }function _01y$z(ijh, ijgefh) {
    if (!ijh) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !ijgefh || 'object' != typeof ijgefh && 'function' != typeof ijgefh ? ijh : ijgefh;
  }function plqmo(truqs, wuvty) {
    if ('function' != typeof wuvty && null !== wuvty) throw new TypeError('Super expression must either be null or a function, not ' + typeof wuvty);truqs['prototype'] = Object['create'](wuvty && wuvty['prototype'], { 'constructor': { 'value': truqs, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), wuvty && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](truqs, wuvty) : truqs['__proto__'] = wuvty);
  }_$xwyz['HTMLImageElement'] = (plqmo(nmopl, vwzyx$['default']), nmopl);function nmopl() {
    return begdcf(this, nmopl), _01y$z(this, (nmopl['__proto__'] || Object['getPrototypeOf'](nmopl))['call'](this, 'img'));
  }_$xwyz['HTMLCanvasElement'] = (plqmo(eadcb, vwzyx$['default']), eadcb);function eadcb() {
    return begdcf(this, eadcb), _01y$z(this, (eadcb['__proto__'] || Object['getPrototypeOf'](eadcb))['call'](this, 'canvas'));
  }
}, function (jkgfi, mjonk, npqlm) {
  'use strict';

  Object['defineProperty'](mjonk, '__esModule', { 'value': !0x0 });var hmji = function (sopt, vuwtrs, xtwyuv) {
    return vuwtrs && kihgjf(sopt['prototype'], vuwtrs), xtwyuv && kihgjf(sopt, xtwyuv), sopt;
  };function kihgjf(wtuxyv, _$wzx) {
    for (var fecdhg = 0x0; fecdhg < _$wzx['length']; fecdhg++) {
      var tpsrqu = _$wzx[fecdhg];tpsrqu['enumerable'] = tpsrqu['enumerable'] || !0x1, tpsrqu['configurable'] = !0x0, 'value' in tpsrqu && (tpsrqu['writable'] = !0x0), Object['defineProperty'](wtuxyv, tpsrqu['key'], tpsrqu);
    }
  }var klnmop = npqlm(0x5),
      tvrswu = (_y$1z = klnmop) && _y$1z['__esModule'] ? _y$1z : { 'default': _y$1z },
      _y$1z,
      wvtsxu = npqlm(0x8),
      y1_0z = npqlm(0x2);(function (wruv, uzwyx) {
    if ('function' != typeof uzwyx && null !== uzwyx) throw new TypeError('Super expression must either be null or a function, not ' + typeof uzwyx);wruv['prototype'] = Object['create'](uzwyx && uzwyx['prototype'], { 'constructor': { 'value': wruv, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), uzwyx && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](wruv, uzwyx) : wruv['__proto__'] = uzwyx);
  })(vturs, tvrswu['default']), hmji(vturs, [{ 'key': 'setAttribute', 'value': function (tospqr, qsrtv) {
      this[tospqr] = qsrtv;
    } }, { 'key': 'getAttribute', 'value': function (acbfd) {
      return this[acbfd];
    } }, { 'key': 'getBoundingClientRect', 'value': function () {
      return { 'top': 0x0, 'left': 0x0, 'width': y1_0z['innerWidth'], 'height': y1_0z['innerHeight'] };
    } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
      var edgbf = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](edgbf) ? 0x0 : edgbf;
    } }, { 'key': 'clientHeight', 'get': function () {
      var yv$zx = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](yv$zx) ? 0x0 : yv$zx;
    } }]), hmji = vturs;function vturs() {
    var rponm = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';!function (qotspr, bedcfg) {
      if (!(qotspr instanceof bedcfg)) throw new TypeError('Cannot call a class as a function');
    }(this, vturs);var nospqr = function (rqtvu, jkhli) {
      if (!rqtvu) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !jkhli || 'object' != typeof jkhli && 'function' != typeof jkhli ? rqtvu : jkhli;
    }(this, (vturs['__proto__'] || Object['getPrototypeOf'](vturs))['call'](this));return nospqr['className'] = '', nospqr['childern'] = [], nospqr['style'] = { 'width': y1_0z['innerWidth'] + 'px', 'height': y1_0z['innerHeight'] + 'px' }, nospqr['insertBefore'] = wvtsxu['noop'], nospqr['innerHTML'] = '', nospqr['tagName'] = rponm['toUpperCase'](), nospqr;
  }mjonk['default'] = hmji;
}, function (qtrups, ytuxwv, gfkhji) {
  'use strict';

  Object['defineProperty'](ytuxwv, '__esModule', { 'value': !0x0 });var pquts = gfkhji(0x6),
      txvusw;(function (gfcbed, $0yxz) {
    if ('function' != typeof $0yxz && null !== $0yxz) throw new TypeError('Super expression must either be null or a function, not ' + typeof $0yxz);gfcbed['prototype'] = Object['create']($0yxz && $0yxz['prototype'], { 'constructor': { 'value': gfcbed, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), $0yxz && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](gfcbed, $0yxz) : gfcbed['__proto__'] = $0yxz);
  })(gheijf, ((txvusw = pquts) && txvusw['__esModule'] ? txvusw : { 'default': txvusw })['default']), gfkhji = gheijf;function gheijf() {
    !function (edhc, dhgeif) {
      if (!(edhc instanceof dhgeif)) throw new TypeError('Cannot call a class as a function');
    }(this, gheijf);var tsruvw = function (fdbcge, hjilm) {
      if (!fdbcge) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !hjilm || 'object' != typeof hjilm && 'function' != typeof hjilm ? fdbcge : hjilm;
    }(this, (gheijf['__proto__'] || Object['getPrototypeOf'](gheijf))['call'](this));return tsruvw['className'] = '', tsruvw['children'] = [], tsruvw;
  }ytuxwv['default'] = gfkhji;
}, function (igfej, wv$yz, ehgi) {
  'use strict';

  Object['defineProperty'](wv$yz, '__esModule', { 'value': !0x0 });var fhjge = function (ihdfg, z_y01$, qnorm) {
    return z_y01$ && soq(ihdfg['prototype'], z_y01$), qnorm && soq(ihdfg, qnorm), ihdfg;
  };function soq(uvsxwt, fheji) {
    for (var fcdbeg = 0x0; fcdbeg < fheji['length']; fcdbeg++) {
      var mnpro = fheji[fcdbeg];mnpro['enumerable'] = mnpro['enumerable'] || !0x1, mnpro['configurable'] = !0x0, 'value' in mnpro && (mnpro['writable'] = !0x0), Object['defineProperty'](uvsxwt, mnpro['key'], mnpro);
    }
  }var khjfi = ehgi(0x7),
      utsxvw;(function (gchdf, gheidf) {
    if ('function' != typeof gheidf && null !== gheidf) throw new TypeError('Super expression must either be null or a function, not ' + typeof gheidf);gchdf['prototype'] = Object['create'](gheidf && gheidf['prototype'], { 'constructor': { 'value': gchdf, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), gheidf && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](gchdf, gheidf) : gchdf['__proto__'] = gheidf);
  })(eadbf, ((utsxvw = khjfi) && utsxvw['__esModule'] ? utsxvw : { 'default': utsxvw })['default']), fhjge(eadbf, [{ 'key': 'appendChild', 'value': function ($z0y_1) {
      if (!($z0y_1 instanceof eadbf)) throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');this['childNodes']['push']($z0y_1);
    } }, { 'key': 'cloneNode', 'value': function () {
      var lighk = Object['create'](this);return Object['assign'](lighk, this), lighk;
    } }, { 'key': 'removeChild', 'value': function (yxuzvw) {
      var mropn = this['childNodes']['findIndex'](function (x_yw$) {
        return x_yw$ === yxuzvw;
      });return -0x1 < mropn ? this['childNodes']['splice'](mropn, 0x1) : null;
    } }]), fhjge = eadbf;function eadbf() {
    !function (fghji, z_2) {
      if (!(fghji instanceof z_2)) throw new TypeError('Cannot call a class as a function');
    }(this, eadbf);var y$_01z = function (pqomln, jeifhg) {
      if (!pqomln) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !jeifhg || 'object' != typeof jeifhg && 'function' != typeof jeifhg ? pqomln : jeifhg;
    }(this, (eadbf['__proto__'] || Object['getPrototypeOf'](eadbf))['call'](this));return y$_01z['childNodes'] = [], y$_01z;
  }wv$yz['default'] = fhjge;
}, function (_x$zy, ebfdca) {
  'use strict';

  Object['defineProperty'](ebfdca, '__esModule', { 'value': !0x0 });var hgfik = function (jmlokn, prsut, trsvu) {
    return prsut && hfdegc(jmlokn['prototype'], prsut), trsvu && hfdegc(jmlokn, trsvu), jmlokn;
  };function hfdegc(ormnp, dgchef) {
    for (var mrpoq = 0x0; mrpoq < dgchef['length']; mrpoq++) {
      var iheg = dgchef[mrpoq];iheg['enumerable'] = iheg['enumerable'] || !0x1, iheg['configurable'] = !0x0, 'value' in iheg && (iheg['writable'] = !0x0), Object['defineProperty'](ormnp, iheg['key'], iheg);
    }
  }var qvust = new WeakMap();hgfik(jlokn, [{ 'key': 'addEventListener', 'value': function (gchfde, mjlin) {
      var aebc = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {},
          ytuwvx = qvust['get'](this);ytuwvx || qvust['set'](this, ytuwvx = {}), ytuwvx[gchfde] || (ytuwvx[gchfde] = []), ytuwvx[gchfde]['push'](mjlin), aebc['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), aebc['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), aebc['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
    } }, { 'key': 'removeEventListener', 'value': function (wzyxv, z10$y_) {
      var hgifed = qvust['get'](this)[wzyxv];if (hgifed && 0x0 < hgifed['length']) {
        for (var febca = hgifed['length']; febca--;) if (hgifed[febca] === z10$y_) {
          hgifed['splice'](febca, 0x1);break;
        }
      }
    } }, { 'key': 'dispatchEvent', 'value': function () {
      var _0y$x = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {},
          egfcb = qvust['get'](this)[_0y$x['type']];if (egfcb) {
        for (var fkihj = 0x0; fkihj < egfcb['length']; fkihj++) egfcb[fkihj](_0y$x);
      }
    } }]), hgfik = jlokn;function jlokn() {
    !function (x0y, hgjfei) {
      if (!(x0y instanceof hgjfei)) throw new TypeError('Cannot call a class as a function');
    }(this, jlokn), qvust['set'](this, {});
  }ebfdca['default'] = hgfik;
}, function (rstuqp, nljmki) {
  'use strict';

  Object['defineProperty'](nljmki, '__esModule', { 'value': !0x0 }), nljmki['noop'] = function () {}, nljmki['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (xswuv, dchge, mklhji) {
  'use strict';

  Object['defineProperty'](dchge, '__esModule', { 'value': !0x0 }), dchge['default'] = function () {
    var zx$_0 = wx['createCanvas']();return zx$_0['type'] = 'canvas', zx$_0['__proto__']['__proto__'] = new klg['default']('canvas'), zx$_0['getContext'], (zx$_0['getBoundingClientRect'] = function () {
      return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
    }, zx$_0);
  }, mklhji(0x3);var klg = z1y(mklhji(0x4));z1y(mklhji(0xa));function z1y(jihm) {
    return jihm && jihm['__esModule'] ? jihm : { 'default': jihm };
  }
}, function (xswu, fedcb, z12_$) {
  'use strict';

  Object['defineProperty'](fedcb, '__esModule', { 'value': !0x0 });var wyv$xz = function (roqsnp) {
    {
      if (roqsnp && roqsnp['__esModule']) return roqsnp;var hjfie = {};if (null != roqsnp) {
        for (var egfdb in roqsnp) Object['prototype']['hasOwnProperty']['call'](roqsnp, egfdb) && (hjfie[egfdb] = roqsnp[egfdb]);
      }return hjfie['default'] = roqsnp, hjfie;
    }
  }(z12_$(0x1)),
      nolmjk = gjhkil(z12_$(0x4)),
      uwrvst = gjhkil(z12_$(0xb)),
      rspoqt = gjhkil(z12_$(0xc)),
      rtsuvq = gjhkil(z12_$(0x9));function gjhkil(ponkl) {
    return ponkl && ponkl['__esModule'] ? ponkl : { 'default': ponkl };
  }z12_$(0xf);var xvywzu = {},
      bdefa = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': wyv$xz, 'hidden': !0x1, 'style': {}, 'location': wyv$xz['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new nolmjk['default']('head'), 'body': new nolmjk['default']('body'), 'createElement': function (swutv) {
      return 'canvas' === swutv ? new rtsuvq['default']() : 'audio' === swutv ? new rspoqt['default']() : 'img' === swutv ? new uwrvst['default']() : new nolmjk['default'](swutv);
    }, 'getElementById': function (vyxzw$) {
      return vyxzw$ === wyv$xz['canvas']['id'] ? wyv$xz['canvas'] : null;
    }, 'getElementsByTagName': function (prqost) {
      return 'head' === prqost ? [bdefa['head']] : 'body' === prqost ? [bdefa['body']] : 'canvas' === prqost ? [wyv$xz['canvas']] : [];
    }, 'querySelector': function (eigjh) {
      return 'head' === eigjh ? bdefa['head'] : 'body' === eigjh ? bdefa['body'] : 'canvas' === eigjh || eigjh === '#' + wyv$xz['canvas']['id'] ? wyv$xz['canvas'] : null;
    }, 'querySelectorAll': function (dieg) {
      return 'head' === dieg ? [bdefa['head']] : 'body' === dieg ? [bdefa['body']] : 'canvas' === dieg ? [wyv$xz['canvas']] : [];
    }, 'addEventListener': function (eihf, ptroqs) {
      xvywzu[eihf] || (xvywzu[eihf] = []), xvywzu[eihf]['push'](ptroqs);
    }, 'removeEventListener': function (lqomp, srvqu) {
      var z_$210 = xvywzu[lqomp];if (z_$210 && 0x0 < z_$210['length']) {
        for (var zuy = z_$210['length']; zuy--;) if (z_$210[zuy] === srvqu) {
          z_$210['splice'](zuy, 0x1);break;
        }
      }
    }, 'dispatchEvent': function (edgc) {
      var pqstro = xvywzu[edgc['type']];if (pqstro) {
        for (var $y0_z = 0x0; $y0_z < pqstro['length']; $y0_z++) pqstro[$y0_z](edgc);
      }
    } };fedcb['default'] = bdefa;
}, function (ptuqrs, rptqso) {
  'use strict';

  Object['defineProperty'](rptqso, '__esModule', { 'value': !0x0 }), rptqso['default'] = function () {
    return wx['createImage']();
  };
}, function (hfejg, iehgfj, pnmkl) {
  'use strict';

  Object['defineProperty'](iehgfj, '__esModule', { 'value': !0x0 });var _2304 = function (xz_$yw, qonspr, mpqro) {
    return qonspr && klojm(xz_$yw['prototype'], qonspr), mpqro && klojm(xz_$yw, mpqro), xz_$yw;
  };function klojm(xtvswu, _4123) {
    for (var $2_3 = 0x0; $2_3 < _4123['length']; $2_3++) {
      var hlj = _4123[$2_3];hlj['enumerable'] = hlj['enumerable'] || !0x1, hlj['configurable'] = !0x0, 'value' in hlj && (hlj['writable'] = !0x0), Object['defineProperty'](xtvswu, hlj['key'], hlj);
    }
  }var okljnm = pnmkl(0xd),
      lpnok = (txwu = okljnm) && txwu['__esModule'] ? txwu : { 'default': txwu },
      txwu,
      _12z = pnmkl(0x8);function dgihf(olqp, z$0yx_) {
    if (!olqp) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !z$0yx_ || 'object' != typeof z$0yx_ && 'function' != typeof z$0yx_ ? olqp : z$0yx_;
  }var trvqu = 0x0,
      w$zvx = 0x1,
      lknji = 0x2,
      mnoplq = 0x3,
      mjhikl = 0x4,
      x$zy_0 = new WeakMap(),
      xwzy$ = new WeakMap();new WeakMap(), new WeakMap(), (function (vwt, vurwts) {
    if ('function' != typeof vurwts && null !== vurwts) throw new TypeError('Super expression must either be null or a function, not ' + typeof vurwts);vwt['prototype'] = Object['create'](vurwts && vurwts['prototype'], { 'constructor': { 'value': vwt, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), vurwts && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](vwt, vurwts) : vwt['__proto__'] = vurwts);
  }(mlij, lpnok['default']), _2304(mlij, [{ 'key': 'load', 'value': function () {
      console['warn']('HTMLAudioElement.load() is not implemented.');
    } }, { 'key': 'play', 'value': function () {
      (0x0, _12z['isSubContext'])() || x$zy_0['get'](this)['play']();
    } }, { 'key': 'pause', 'value': function () {
      (0x0, _12z['isSubContext'])() || x$zy_0['get'](this)['pause']();
    } }, { 'key': 'canPlayType', 'value': function () {
      var lknpmo = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return 'string' == typeof lknpmo && (-0x1 < lknpmo['indexOf']('audio/mpeg') || lknpmo['indexOf']('audio/mp4')) ? 'probably' : '';
    } }, { 'key': 'cloneNode', 'value': function () {
      var xzuyvw = new mlij();return (0x0, _12z['isSubContext'])() || (xzuyvw['loop'] = x$zy_0['get'](this)['loop'], xzuyvw['autoplay'] = x$zy_0['get'](this)['loop'], xzuyvw['src'] = this['src']), xzuyvw;
    } }, { 'key': 'currentTime', 'get': function () {
      return (0x0, _12z['isSubContext'])() ? 0x0 : x$zy_0['get'](this)['currentTime'];
    }, 'set': function (opsnrq) {
      (0x0, _12z['isSubContext'])() || x$zy_0['get'](this)['seek'](opsnrq);
    } }, { 'key': 'src', 'get': function () {
      return xwzy$['get'](this);
    }, 'set': function (yz_10$) {
      xwzy$['set'](this, yz_10$), (0x0, _12z['isSubContext'])() || (x$zy_0['get'](this)['src'] = yz_10$);
    } }, { 'key': 'loop', 'get': function () {
      return !(0x0, _12z['isSubContext'])() && x$zy_0['get'](this)['loop'];
    }, 'set': function (suxwtv) {
      (0x0, _12z['isSubContext'])() || (x$zy_0['get'](this)['loop'] = suxwtv);
    } }, { 'key': 'autoplay', 'get': function () {
      return !(0x0, _12z['isSubContext'])() && x$zy_0['get'](this)['autoplay'];
    }, 'set': function (psr) {
      (0x0, _12z['isSubContext'])() || (x$zy_0['get'](this)['autoplay'] = psr);
    } }, { 'key': 'paused', 'get': function () {
      return !(0x0, _12z['isSubContext'])() && x$zy_0['get'](this)['paused'];
    } }]), _2304 = mlij);function mlij(ljikg) {
    !function (tsqpr, jiklhm) {
      if (!(tsqpr instanceof jiklhm)) throw new TypeError('Cannot call a class as a function');
    }(this, mlij);var psurt = dgihf(this, (mlij['__proto__'] || Object['getPrototypeOf'](mlij))['call'](this));if (psurt['HAVE_NOTHING'] = trvqu, psurt['HAVE_METADATA'] = w$zvx, psurt['HAVE_CURRENT_DATA'] = lknji, psurt['HAVE_FUTURE_DATA'] = mnoplq, psurt['HAVE_ENOUGH_DATA'] = mjhikl, psurt['readyState'] = trvqu, (0x0, _12z['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), dgihf(psurt);xwzy$['set'](psurt, '');var nmlkop = wx['createInnerAudioContext']();return x$zy_0['set'](psurt, nmlkop), nmlkop['onCanplay'](function () {
      psurt['dispatchEvent']({ 'type': 'load' }), psurt['dispatchEvent']({ 'type': 'loadend' }), psurt['dispatchEvent']({ 'type': 'canplay' }), psurt['dispatchEvent']({ 'type': 'canplaythrough' }), psurt['dispatchEvent']({ 'type': 'loadedmetadata' }), psurt['readyState'] = lknji;
    }), nmlkop['onPlay'](function () {
      psurt['dispatchEvent']({ 'type': 'play' });
    }), nmlkop['onPause'](function () {
      psurt['dispatchEvent']({ 'type': 'pause' });
    }), nmlkop['onEnded'](function () {
      psurt['dispatchEvent']({ 'type': 'ended' }), psurt['readyState'] = mjhikl;
    }), nmlkop['onError'](function () {
      psurt['dispatchEvent']({ 'type': 'error' });
    }), ljikg && (x$zy_0['get'](psurt)['src'] = ljikg), psurt;
  }iehgfj['default'] = _2304;
}, function (pomln, hjkigl, mikjnl) {
  'use strict';

  Object['defineProperty'](hjkigl, '__esModule', { 'value': !0x0 });var badf = mikjnl(0xe),
      xsvwt;(function (tpursq, jigfh) {
    if ('function' != typeof jigfh && null !== jigfh) throw new TypeError('Super expression must either be null or a function, not ' + typeof jigfh);tpursq['prototype'] = Object['create'](jigfh && jigfh['prototype'], { 'constructor': { 'value': tpursq, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), jigfh && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](tpursq, jigfh) : tpursq['__proto__'] = jigfh);
  })(eifh, ((xsvwt = badf) && xsvwt['__esModule'] ? xsvwt : { 'default': xsvwt })['default']), mikjnl = eifh;function eifh() {
    return function ($2z_10, _z$x0y) {
      if (!($2z_10 instanceof _z$x0y)) throw new TypeError('Cannot call a class as a function');
    }(this, eifh), function (olmpnq, otsqpr) {
      if (!olmpnq) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !otsqpr || 'object' != typeof otsqpr && 'function' != typeof otsqpr ? olmpnq : otsqpr;
    }(this, (eifh['__proto__'] || Object['getPrototypeOf'](eifh))['call'](this, 'audio'));
  }hjkigl['default'] = mikjnl;
}, function (wtsuv, yzw$_, noml) {
  'use strict';

  Object['defineProperty'](yzw$_, '__esModule', { 'value': !0x0 });var twsruv = function (rvst, wvxy, edgfi) {
    return wvxy && jhikf(rvst['prototype'], wvxy), edgfi && jhikf(rvst, edgfi), rvst;
  };function jhikf(jfg, vuxs) {
    for (var gfhdei = 0x0; gfhdei < vuxs['length']; gfhdei++) {
      var vuswrt = vuxs[gfhdei];vuswrt['enumerable'] = vuswrt['enumerable'] || !0x1, vuswrt['configurable'] = !0x0, 'value' in vuswrt && (vuswrt['writable'] = !0x0), Object['defineProperty'](jfg, vuswrt['key'], vuswrt);
    }
  }var efbd = noml(0x4),
      qropnm;(function (ifehg, jhlkim) {
    if ('function' != typeof jhlkim && null !== jhlkim) throw new TypeError('Super expression must either be null or a function, not ' + typeof jhlkim);ifehg['prototype'] = Object['create'](jhlkim && jhlkim['prototype'], { 'constructor': { 'value': ifehg, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), jhlkim && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](ifehg, jhlkim) : ifehg['__proto__'] = jhlkim);
  })(mihj, ((qropnm = efbd) && qropnm['__esModule'] ? qropnm : { 'default': qropnm })['default']), twsruv(mihj, [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]), twsruv = mihj;function mihj(z1$_0) {
    return function (nmlo, qlomp) {
      if (!(nmlo instanceof qlomp)) throw new TypeError('Cannot call a class as a function');
    }(this, mihj), function (hgjkif, xuwtvs) {
      if (!hgjkif) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !xuwtvs || 'object' != typeof xuwtvs && 'function' != typeof xuwtvs ? hgjkif : xuwtvs;
    }(this, (mihj['__proto__'] || Object['getPrototypeOf'](mihj))['call'](this, z1$_0));
  }yzw$_['default'] = twsruv;
}, function (nprsqo, fb, ijlhk) {
  'use strict';

  ijlhk(0x10);
}, function (lmnokj, srpoqn, sqpot) {
  'use strict';

  var spnoqr = function (vyuxwz) {
    {
      if (vyuxwz && vyuxwz['__esModule']) return vyuxwz;var mprnoq = {};if (null != vyuxwz) {
        for (var vtqurs in vyuxwz) Object['prototype']['hasOwnProperty']['call'](vyuxwz, vtqurs) && (mprnoq[vtqurs] = vyuxwz[vtqurs]);
      }return mprnoq['default'] = vyuxwz, mprnoq;
    }
  }(sqpot(0x1)),
      xtus = sqpot(0xa),
      ihdgfe = (vtuq = xtus) && vtuq['__esModule'] ? vtuq : { 'default': vtuq },
      vtuq,
      usvqr = sqpot(0x8);function xw$_zy(ihjlgk) {
    !function (dgeb, omnklp) {
      if (!(dgeb instanceof omnklp)) throw new TypeError('Cannot call a class as a function');
    }(this, xw$_zy), this['target'] = spnoqr['canvas'], this['currentTarget'] = spnoqr['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = usvqr['noop'], this['stopPropagation'] = usvqr['noop'], this['type'] = ihjlgk;
  }function hfigej(nps) {
    return function (jkinlm) {
      var nmolqp = new xw$_zy(nps);nmolqp['touches'] = jkinlm['touches'], nmolqp['targetTouches'] = Array['prototype']['slice']['call'](jkinlm['touches']), nmolqp['changedTouches'] = jkinlm['changedTouches'], nmolqp['timeStamp'] = jkinlm['timeStamp'], ihdgfe['default']['dispatchEvent'](nmolqp);
    };
  }wx['onTouchStart'](hfigej('touchstart')), wx['onTouchMove'](hfigej('touchmove')), wx['onTouchEnd'](hfigej('touchend')), wx['onTouchCancel'](hfigej('touchcancel'));
}, function (oprtqs, $0y1_z) {
  'use strict';

  Object['defineProperty']($0y1_z, '__esModule', { 'value': !0x0 }), $0y1_z['noop'] = function () {}, $0y1_z['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (tpoqsr, pqmlon, qrpomn) {
  'use strict';

  Object['defineProperty'](pqmlon, '__esModule', { 'value': !0x0 }), qrpomn = qrpomn(0x8), qrpomn = { 'platform': wx['getSystemInfoSync']()['platform'], 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': qrpomn['noop'], 'watchPosition': qrpomn['noop'], 'clearWatch': qrpomn['noop'] } }, pqmlon['default'] = qrpomn;
}, function (edfgcb, cdefba) {
  'use strict';

  Object['defineProperty'](cdefba, '__esModule', { 'value': !0x0 });var milhk = function (lkjnm, wsuxtv, bfcea) {
    return wsuxtv && mopkn(lkjnm['prototype'], wsuxtv), bfcea && mopkn(lkjnm, bfcea), lkjnm;
  };function mopkn(uzywv, utqrs) {
    for (var opklmn = 0x0; opklmn < utqrs['length']; opklmn++) {
      var opnml = utqrs[opklmn];opnml['enumerable'] = opnml['enumerable'] || !0x1, opnml['configurable'] = !0x0, 'value' in opnml && (opnml['writable'] = !0x0), Object['defineProperty'](uzywv, opnml['key'], opnml);
    }
  }var bgdefc = new WeakMap(),
      befcg = new WeakMap(),
      knlimj = new WeakMap(),
      lkgjih = new WeakMap(),
      omklj = new WeakMap();function txuyv(xts) {
    if ('function' == typeof this['on' + xts]) {
      for (var svtwur = arguments['length'], ejhigf = Array(0x1 < svtwur ? svtwur - 0x1 : 0x0), lghkj = 0x1; lghkj < svtwur; lghkj++) ejhigf[lghkj - 0x1] = arguments[lghkj];this['on' + xts]['apply'](this, ejhigf);
    }
  }function jehfi(tqups) {
    this['readyState'] = tqups, txuyv['call'](this, 'readystatechange');
  }milhk(ustwvx, [{ 'key': 'abort', 'value': function () {
      var z0x$y = omklj['get'](this);z0x$y && z0x$y['abort']();
    } }, { 'key': 'getAllResponseHeaders', 'value': function () {
      var jhgkil = lkgjih['get'](this);return Object['keys'](jhgkil)['map'](function (mkjin) {
        return mkjin + ':\x20' + jhgkil[mkjin];
      })['join']('\x0a');
    } }, { 'key': 'getResponseHeader', 'value': function (adcebf) {
      return lkgjih['get'](this)[adcebf];
    } }, { 'key': 'open', 'value': function (moqn, purqts) {
      befcg['set'](this, moqn), bgdefc['set'](this, purqts), jehfi['call'](this, ustwvx['OPENED']);
    } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function () {
      var qlnom = this,
          $zw_x = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';if (this['readyState'] !== ustwvx['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');wx['request']({ 'data': $zw_x, 'url': bgdefc['get'](this), 'method': befcg['get'](this), 'header': knlimj['get'](this), 'responseType': this['responseType'], 'success': function (cebdfg) {
          var fcehgd = cebdfg['data'],
              heifgj = cebdfg['statusCode'],
              cebdfg = cebdfg['header'];if ('string' != typeof fcehgd && !(fcehgd instanceof ArrayBuffer)) try {
            fcehgd = JSON['stringify'](fcehgd);
          } catch (rqompn) {}if (qlnom['status'] = heifgj, lkgjih['set'](qlnom, cebdfg), txuyv['call'](qlnom, 'loadstart'), jehfi['call'](qlnom, ustwvx['HEADERS_RECEIVED']), jehfi['call'](qlnom, ustwvx['LOADING']), (qlnom['response'] = fcehgd) instanceof ArrayBuffer) {
            qlnom['responseText'] = '';var ormp = new Uint8Array(fcehgd),
                tspuq = ormp['byteLength'];for (var dihef = 0x0; dihef < tspuq; dihef++) qlnom['responseText'] += String['fromCharCode'](ormp[dihef]);
          } else qlnom['responseText'] = fcehgd;jehfi['call'](qlnom, ustwvx['DONE']), txuyv['call'](qlnom, 'load'), txuyv['call'](qlnom, 'loadend');
        }, 'fail': function (jkgihf) {
          jkgihf = jkgihf['errMsg'], (-0x1 !== jkgihf['indexOf']('abort') ? txuyv['call'](qlnom, 'abort') : txuyv['call'](qlnom, 'error', jkgihf), txuyv['call'](qlnom, 'loadend'));
        } });
    } }, { 'key': 'setRequestHeader', 'value': function ($1y_0z, mkolnp) {
      var fdabec = knlimj['get'](this);fdabec[$1y_0z] = mkolnp, knlimj['set'](this, fdabec);
    } }]), milhk = ustwvx;function ustwvx() {
    !function (jhikml, ikjlhg) {
      if (!(jhikml instanceof ikjlhg)) throw new TypeError('Cannot call a class as a function');
    }(this, ustwvx), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = !0x1, knlimj['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), lkgjih['set'](this, {});
  }milhk['UNSEND'] = 0x0, milhk['OPENED'] = 0x1, milhk['HEADERS_RECEIVED'] = 0x2, milhk['LOADING'] = 0x3, milhk['DONE'] = 0x4, cdefba['default'] = milhk;
}, function (mlkijn, lnpmq, $_0xz) {
  'use strict';

  Object['defineProperty'](lnpmq, '__esModule', { 'value': !0x0 });var _30124 = function (wtvs, ponr, bdfgc) {
    return ponr && kjm(wtvs['prototype'], ponr), bdfgc && kjm(wtvs, bdfgc), wtvs;
  };function kjm(yxvzwu, _230$1) {
    for (var ilkjn = 0x0; ilkjn < _230$1['length']; ilkjn++) {
      var nrpmq = _230$1[ilkjn];nrpmq['enumerable'] = nrpmq['enumerable'] || !0x1, nrpmq['configurable'] = !0x0, 'value' in nrpmq && (nrpmq['writable'] = !0x0), Object['defineProperty'](yxvzwu, nrpmq['key'], nrpmq);
    }
  }var qtupsr = $_0xz(0x8),
      hifged = new WeakMap();_30124(gfedhc, [{ 'key': 'close', 'value': function (zyxuvw, kjlni) {
      this['readyState'] = gfedhc['CLOSING'], hifged['get'](this)['close']({ 'code': zyxuvw, 'reason': kjlni });
    } }, { 'key': 'send', 'value': function (kjln) {
      if ('string' != typeof kjln && !(kjln instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + kjln + ' is invalid');hifged['get'](this)['send']({ 'data': kjln });
    } }]), _30124 = gfedhc;function gfedhc(pqrn) {
    var vuxwyt = this,
        $xy0z = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function (oqnmp, noq) {
      if (!(oqnmp instanceof noq)) throw new TypeError('Cannot call a class as a function');
    }(this, gfedhc), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, (0x0, qtupsr['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if ('string' != typeof pqrn || !/(^ws:\/\/)|(^wss:\/\/)/['test'](pqrn)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + pqrn + '\' is invalid');return this['url'] = pqrn, this['readyState'] = gfedhc['CONNECTING'], $xy0z = wx['connectSocket']({ 'url': pqrn, 'protocols': Array['isArray']($xy0z) ? $xy0z : [$xy0z] }), (hifged['set'](this, $xy0z), $xy0z['onClose'](function (ljkmi) {
      vuxwyt['readyState'] = gfedhc['CLOSED'], 'function' == typeof vuxwyt['onclose'] && vuxwyt['onclose'](ljkmi);
    }), $xy0z['onMessage'](function (lijhkm) {
      'function' == typeof vuxwyt['onmessage'] && vuxwyt['onmessage'](lijhkm);
    }), $xy0z['onOpen'](function () {
      vuxwyt['readyState'] = gfedhc['OPEN'], 'function' == typeof vuxwyt['onopen'] && vuxwyt['onopen']();
    }), $xy0z['onError'](function (zvuxy) {
      'function' == typeof vuxwyt['onerror'] && vuxwyt['onerror'](new Error(zvuxy['errMsg']));
    }), this);
  }_30124['CONNECTING'] = 0x0, _30124['OPEN'] = 0x1, _30124['CLOSING'] = 0x2, _30124['CLOSED'] = 0x3, lnpmq['default'] = _30124;
}, function (vywtu, qpolm, rstup) {
  'use strict';

  Object['defineProperty'](qpolm, '__esModule', { 'value': !0x0 });var vwtsux = function (ghilj, svqtur, nlkji) {
    return svqtur && vuwyzx(ghilj['prototype'], svqtur), nlkji && vuwyzx(ghilj, nlkji), ghilj;
  };function vuwyzx(vyx$, ijkghf) {
    for (var jlknmi = 0x0; jlknmi < ijkghf['length']; jlknmi++) {
      var dgfihe = ijkghf[jlknmi];dgfihe['enumerable'] = dgfihe['enumerable'] || !0x1, dgfihe['configurable'] = !0x0, 'value' in dgfihe && (dgfihe['writable'] = !0x0), Object['defineProperty'](vyx$, dgfihe['key'], dgfihe);
    }
  }var pnrqos = rstup(0x8);vwtsux(vwtrus, [{ 'key': 'construct', 'value': function () {
      if ((0x0, pnrqos['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
    } }]), vwtsux = vwtrus;function vwtrus() {
    !function (vxwuzy, qrpn) {
      if (!(vxwuzy instanceof qrpn)) throw new TypeError('Cannot call a class as a function');
    }(this, vwtrus);
  }qpolm['default'] = vwtsux;
}, function (hklmij, wvtsru, xvzy) {
  'use strict';

  Object['defineProperty'](wvtsru, '__esModule', { 'value': !0x0 });var tropsq = xvzy(0x8),
      kojmn = { get 'length'() {
      return wx['getStorageInfoSync']()['keys']['length'];
    }, 'key': function (hdfceg) {
      return wx['getStorageInfoSync']()['keys'][hdfceg];
    }, 'getItem': function (z1$_20) {
      return wx['getStorageSync'](z1$_20);
    }, 'setItem': function (rpuqts, _$z0x) {
      return wx['setStorageSync'](rpuqts, _$z0x);
    }, 'removeItem': function (rqusvt) {
      wx['removeStorageSync'](rqusvt);
    }, 'clear': function () {
      wx['clearStorageSync']();
    } },
      xwzy$v = {};xvzy = { get 'length'() {
      return Object['keys'](xwzy$v)['length'];
    }, 'key': function (vzxywu) {
      return Object['keys'](xwzy$v)[vzxywu];
    }, 'getItem': function (gfebd) {
      return xwzy$v[gfebd];
    }, 'setItem': function (jhlmik, lgkh) {
      xwzy$v[jhlmik] = lgkh;
    }, 'removeItem': function (uvswrt) {
      delete xwzy$v[uvswrt];
    }, 'clear': function () {
      xwzy$v = {};
    } }, kojmn = (0x0, tropsq['isSubContext'])() ? xvzy : kojmn, wvtsru['default'] = kojmn;
}, function (nqpmro, ilkjnm) {
  'use strict';

  Object['defineProperty'](ilkjnm, '__esModule', { 'value': !0x0 }), ilkjnm['default'] = { 'href': 'bbbgame.js', 'reload': function () {} };
}]);