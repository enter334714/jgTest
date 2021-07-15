var _ = wx.y$;
!function (qstro) {
  var klmnp = {};function __webpack_require__(kilmnj) {
    if (klmnp[kilmnj]) return klmnp[kilmnj]['exports'];var y_zxw$ = klmnp[kilmnj] = { 'exports': {}, 'id': kilmnj, 'loaded': !0x1 };return qstro[kilmnj]['call'](y_zxw$['exports'], y_zxw$, y_zxw$['exports'], __webpack_require__), y_zxw$['loaded'] = !0x0, y_zxw$['exports'];
  }__webpack_require__['m'] = qstro, __webpack_require__['c'] = klmnp, __webpack_require__['p'] = '', __webpack_require__(0x0);
}([function (cefdab, mkol, yxuwv) {
  'use strict';

  var jlnkm = function (adbecf) {
    {
      if (adbecf && adbecf['__esModule']) return adbecf;var vuxwyt = {};if (null != adbecf) {
        for (var mklo in adbecf) Object['prototype']['hasOwnProperty']['call'](adbecf, mklo) && (vuxwyt[mklo] = adbecf[mklo]);
      }return vuxwyt['default'] = adbecf, vuxwyt;
    }
  }(yxuwv(0x1)),
      wuyxz = yxuwv(0x4),
      _$xz0y = (w$zv = wuyxz) && w$zv['__esModule'] ? w$zv : { 'default': w$zv },
      w$zv,
      nqpml = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
    jlnkm['addEventListener'] = function (bdafce, fijkgh) {
      jlnkm['document']['addEventListener'](bdafce, fijkgh);
    }, jlnkm['removeEventListener'] = function (ikjhfg, kjhgif) {
      jlnkm['document']['removeEventListener'](ikjhfg, kjhgif);
    }, jlnkm['canvas'] && (jlnkm['canvas']['addEventListener'] = jlnkm['addEventListener'], jlnkm['canvas']['removeEventListener'] = jlnkm['removeEventListener']), nqpml['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new _$xz0y['default']('canvas'), sharedCanvas['addEventListener'] = jlnkm['addEventListener'], sharedCanvas['removeEventListener'] = jlnkm['removeEventListener']);var rpsotq = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === rpsotq) {
      for (var kjhif in jlnkm) {
        var mjikh = Object['getOwnPropertyDescriptor'](nqpml, kjhif);mjikh && !0x0 !== mjikh['configurable'] || Object['defineProperty'](window, kjhif, { 'value': jlnkm[kjhif] });
      }for (var $_0z12 in jlnkm['document']) {
        var lkmijn = Object['getOwnPropertyDescriptor'](nqpml['document'], $_0z12);lkmijn && !0x0 !== lkmijn['configurable'] || Object['defineProperty'](nqpml['document'], $_0z12, { 'value': jlnkm['document'][$_0z12] });
      }window['parent'] = window;
    } else {
      for (var $zx_w in jlnkm) nqpml[$zx_w] = jlnkm[$zx_w];nqpml['window'] = jlnkm, window = nqpml, window['top'] = window['parent'] = window;
    }
  }());
}, function (vrtsuw, otqsrp, vrqst) {
  'use strict';

  Object['defineProperty'](otqsrp, '__esModule', { 'value': !0x0 }), otqsrp['cancelAnimationFrame'] = otqsrp['requestAnimationFrame'] = otqsrp['clearInterval'] = otqsrp['clearTimeout'] = otqsrp['setInterval'] = otqsrp['setTimeout'] = otqsrp['canvas'] = otqsrp['location'] = otqsrp['localStorage'] = otqsrp['HTMLElement'] = otqsrp['FileReader'] = otqsrp['Audio'] = otqsrp['Image'] = otqsrp['WebSocket'] = otqsrp['XMLHttpRequest'] = otqsrp['navigator'] = otqsrp['document'] = void 0x0;var ecfb = vrqst(0x2);Object['keys'](ecfb)['forEach'](function (fbcedg) {
    'default' !== fbcedg && '__esModule' !== fbcedg && Object['defineProperty'](otqsrp, fbcedg, { 'enumerable': !0x0, 'get': function () {
        return ecfb[fbcedg];
      } });
  });var giefjh = vrqst(0x3);Object['keys'](giefjh)['forEach'](function (becadf) {
    'default' !== becadf && '__esModule' !== becadf && Object['defineProperty'](otqsrp, becadf, { 'enumerable': !0x0, 'get': function () {
        return giefjh[becadf];
      } });
  });var chgefd = yxw$_z(vrqst(0x9)),
      osqrp = vrqst(0x11),
      utvwy = yxw$_z(vrqst(0xa)),
      pqmrno = yxw$_z(vrqst(0x12)),
      trsuqp = yxw$_z(vrqst(0x13)),
      rtsvu = yxw$_z(vrqst(0x14)),
      y$_xwz = yxw$_z(vrqst(0xb)),
      lmkji = yxw$_z(vrqst(0xc)),
      mok = yxw$_z(vrqst(0x15)),
      ikjlmh = yxw$_z(vrqst(0x4)),
      mplnok = yxw$_z(vrqst(0x16));vrqst = yxw$_z(vrqst(0x17));function yxw$_z(rpqos) {
    return rpqos && rpqos['__esModule'] ? rpqos : { 'default': rpqos };
  }otqsrp['document'] = utvwy['default'], otqsrp['navigator'] = pqmrno['default'], otqsrp['XMLHttpRequest'] = trsuqp['default'], otqsrp['WebSocket'] = rtsvu['default'], otqsrp['Image'] = y$_xwz['default'], otqsrp['Audio'] = lmkji['default'], otqsrp['FileReader'] = mok['default'], otqsrp['HTMLElement'] = ikjlmh['default'], otqsrp['localStorage'] = mplnok['default'], otqsrp['location'] = vrqst['default'], chgefd = (0x0, osqrp['isSubContext'])() ? void 0x0 : new chgefd['default'](), (otqsrp['canvas'] = chgefd, otqsrp['setTimeout'] = setTimeout, otqsrp['setInterval'] = setInterval, otqsrp['clearTimeout'] = clearTimeout, otqsrp['clearInterval'] = clearInterval, otqsrp['requestAnimationFrame'] = requestAnimationFrame, otqsrp['cancelAnimationFrame'] = cancelAnimationFrame);
}, function (rqvtu, poqnrs) {
  'use strict';

  Object['defineProperty'](poqnrs, '__esModule', { 'value': !0x0 });var cefgdb = wx['getSystemInfoSync'](),
      monlkp = cefgdb['screenWidth'],
      wtuvxs = cefgdb['screenHeight'],
      cefgdb = cefgdb['devicePixelRatio'];monlkp = poqnrs['innerWidth'] = monlkp, wtuvxs = poqnrs['innerHeight'] = wtuvxs, poqnrs['devicePixelRatio'] = cefgdb, poqnrs['screen'] = { 'availWidth': monlkp, 'availHeight': wtuvxs }, poqnrs['performance'] = { 'now': function () {
      return Date['now']() / 0x3e8;
    } }, poqnrs['ontouchstart'] = null, poqnrs['ontouchmove'] = null, poqnrs['ontouchend'] = null;
}, function (_zx0y, gched, lmponq) {
  'use strict';

  Object['defineProperty'](gched, '__esModule', { 'value': !0x0 }), gched['HTMLCanvasElement'] = gched['HTMLImageElement'] = void 0x0;var khgifj = lmponq(0x4);lmponq = (ifedhg = khgifj) && ifedhg['__esModule'] ? ifedhg : { 'default': ifedhg };var ifedhg;function pnqlmo(pmnklo, $013_) {
    if (!(pmnklo instanceof $013_)) throw new TypeError('Cannot call a class as a function');
  }function qurtv(gf, gbfec) {
    if (!gf) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !gbfec || 'object' != typeof gbfec && 'function' != typeof gbfec ? gf : gbfec;
  }function rmqno(ehfdgi, wyvtx) {
    if ('function' != typeof wyvtx && null !== wyvtx) throw new TypeError('Super expression must either be null or a function, not ' + typeof wyvtx);ehfdgi['prototype'] = Object['create'](wyvtx && wyvtx['prototype'], { 'constructor': { 'value': ehfdgi, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), wyvtx && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](ehfdgi, wyvtx) : ehfdgi['__proto__'] = wyvtx);
  }gched['HTMLImageElement'] = (rmqno(pnok, lmponq['default']), pnok);function pnok() {
    return pnqlmo(this, pnok), qurtv(this, (pnok['__proto__'] || Object['getPrototypeOf'](pnok))['call'](this, 'img'));
  }gched['HTMLCanvasElement'] = (rmqno(lqopmn, lmponq['default']), lqopmn);function lqopmn() {
    return pnqlmo(this, lqopmn), qurtv(this, (lqopmn['__proto__'] || Object['getPrototypeOf'](lqopmn))['call'](this, 'canvas'));
  }
}, function (bcgfed, z0_1, wvuts) {
  'use strict';

  Object['defineProperty'](z0_1, '__esModule', { 'value': !0x0 });var monprq = function (lmonpq, mjlni, geijhf) {
    return mjlni && xy_$wz(lmonpq['prototype'], mjlni), geijhf && xy_$wz(lmonpq, geijhf), lmonpq;
  };function xy_$wz(fdbaec, qvurst) {
    for (var _2014 = 0x0; _2014 < qvurst['length']; _2014++) {
      var vtuqr = qvurst[_2014];vtuqr['enumerable'] = vtuqr['enumerable'] || !0x1, vtuqr['configurable'] = !0x0, 'value' in vtuqr && (vtuqr['writable'] = !0x0), Object['defineProperty'](fdbaec, vtuqr['key'], vtuqr);
    }
  }var qsrtvu = wvuts(0x5),
      sqrop = (hejg = qsrtvu) && hejg['__esModule'] ? hejg : { 'default': hejg },
      hejg,
      qsopn = wvuts(0x8),
      ghikfj = wvuts(0x2);(function (ortqs, rusv) {
    if ('function' != typeof rusv && null !== rusv) throw new TypeError('Super expression must either be null or a function, not ' + typeof rusv);ortqs['prototype'] = Object['create'](rusv && rusv['prototype'], { 'constructor': { 'value': ortqs, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), rusv && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](ortqs, rusv) : ortqs['__proto__'] = rusv);
  })(wsuxt, sqrop['default']), monprq(wsuxt, [{ 'key': 'setAttribute', 'value': function (quvsrt, nojmlk) {
      this[quvsrt] = nojmlk;
    } }, { 'key': 'getAttribute', 'value': function (mknojl) {
      return this[mknojl];
    } }, { 'key': 'getBoundingClientRect', 'value': function () {
      return { 'top': 0x0, 'left': 0x0, 'width': ghikfj['innerWidth'], 'height': ghikfj['innerHeight'] };
    } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
      var lnmqp = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](lnmqp) ? 0x0 : lnmqp;
    } }, { 'key': 'clientHeight', 'get': function () {
      var suvxt = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](suvxt) ? 0x0 : suvxt;
    } }]), monprq = wsuxt;function wsuxt() {
    var nqspr = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';!function (_$01, hmi) {
      if (!(_$01 instanceof hmi)) throw new TypeError('Cannot call a class as a function');
    }(this, wsuxt);var rqutvs = function (kjhgl, qsnro) {
      if (!kjhgl) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !qsnro || 'object' != typeof qsnro && 'function' != typeof qsnro ? kjhgl : qsnro;
    }(this, (wsuxt['__proto__'] || Object['getPrototypeOf'](wsuxt))['call'](this));return rqutvs['className'] = '', rqutvs['childern'] = [], rqutvs['style'] = { 'width': ghikfj['innerWidth'] + 'px', 'height': ghikfj['innerHeight'] + 'px' }, rqutvs['insertBefore'] = qsopn['noop'], rqutvs['innerHTML'] = '', rqutvs['tagName'] = nqspr['toUpperCase'](), rqutvs;
  }z0_1['default'] = monprq;
}, function (_x$y, qsptru, _4320) {
  'use strict';

  Object['defineProperty'](qsptru, '__esModule', { 'value': !0x0 });var efbd = _4320(0x6),
      vuyxwt;(function (gechd, soqt) {
    if ('function' != typeof soqt && null !== soqt) throw new TypeError('Super expression must either be null or a function, not ' + typeof soqt);gechd['prototype'] = Object['create'](soqt && soqt['prototype'], { 'constructor': { 'value': gechd, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), soqt && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](gechd, soqt) : gechd['__proto__'] = soqt);
  })(mopl, ((vuyxwt = efbd) && vuyxwt['__esModule'] ? vuyxwt : { 'default': vuyxwt })['default']), _4320 = mopl;function mopl() {
    !function (uwvs, bcdae) {
      if (!(uwvs instanceof bcdae)) throw new TypeError('Cannot call a class as a function');
    }(this, mopl);var ehifgj = function (npmok, rtusw) {
      if (!npmok) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !rtusw || 'object' != typeof rtusw && 'function' != typeof rtusw ? npmok : rtusw;
    }(this, (mopl['__proto__'] || Object['getPrototypeOf'](mopl))['call'](this));return ehifgj['className'] = '', ehifgj['children'] = [], ehifgj;
  }qsptru['default'] = _4320;
}, function (x_$0yz, _234, tvwsxu) {
  'use strict';

  Object['defineProperty'](_234, '__esModule', { 'value': !0x0 });var cgefd = function (fhji, lokpnm, polmk) {
    return lokpnm && oqml(fhji['prototype'], lokpnm), polmk && oqml(fhji, polmk), fhji;
  };function oqml(vzxwy, $xyz_w) {
    for (var osnprq = 0x0; osnprq < $xyz_w['length']; osnprq++) {
      var npromq = $xyz_w[osnprq];npromq['enumerable'] = npromq['enumerable'] || !0x1, npromq['configurable'] = !0x0, 'value' in npromq && (npromq['writable'] = !0x0), Object['defineProperty'](vzxwy, npromq['key'], npromq);
    }
  }var kjfg = tvwsxu(0x7),
      gdih;(function (stp, qpomr) {
    if ('function' != typeof qpomr && null !== qpomr) throw new TypeError('Super expression must either be null or a function, not ' + typeof qpomr);stp['prototype'] = Object['create'](qpomr && qpomr['prototype'], { 'constructor': { 'value': stp, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), qpomr && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](stp, qpomr) : stp['__proto__'] = qpomr);
  })(x$zvw, ((gdih = kjfg) && gdih['__esModule'] ? gdih : { 'default': gdih })['default']), cgefd(x$zvw, [{ 'key': 'appendChild', 'value': function (dfac) {
      if (!(dfac instanceof x$zvw)) throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');this['childNodes']['push'](dfac);
    } }, { 'key': 'cloneNode', 'value': function () {
      var cfdhe = Object['create'](this);return Object['assign'](cfdhe, this), cfdhe;
    } }, { 'key': 'removeChild', 'value': function (xz$yw) {
      var y0z = this['childNodes']['findIndex'](function (idgfe) {
        return idgfe === xz$yw;
      });return -0x1 < y0z ? this['childNodes']['splice'](y0z, 0x1) : null;
    } }]), cgefd = x$zvw;function x$zvw() {
    !function (rnoqsp, ehgfij) {
      if (!(rnoqsp instanceof ehgfij)) throw new TypeError('Cannot call a class as a function');
    }(this, x$zvw);var z$xy0_ = function (uvswtr, utwvrs) {
      if (!uvswtr) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !utwvrs || 'object' != typeof utwvrs && 'function' != typeof utwvrs ? uvswtr : utwvrs;
    }(this, (x$zvw['__proto__'] || Object['getPrototypeOf'](x$zvw))['call'](this));return z$xy0_['childNodes'] = [], z$xy0_;
  }_234['default'] = cgefd;
}, function (mlkopn, utsvqr) {
  'use strict';

  Object['defineProperty'](utsvqr, '__esModule', { 'value': !0x0 });var gjeifh = function (bdfgc, nmlik, wuvy) {
    return nmlik && hfikjg(bdfgc['prototype'], nmlik), wuvy && hfikjg(bdfgc, wuvy), bdfgc;
  };function hfikjg(tsorp, klojm) {
    for (var zvuxw = 0x0; zvuxw < klojm['length']; zvuxw++) {
      var klhmij = klojm[zvuxw];klhmij['enumerable'] = klhmij['enumerable'] || !0x1, klhmij['configurable'] = !0x0, 'value' in klhmij && (klhmij['writable'] = !0x0), Object['defineProperty'](tsorp, klhmij['key'], klhmij);
    }
  }var wuxzyv = new WeakMap();gjeifh(ifje, [{ 'key': 'addEventListener', 'value': function (olnmp, wvzy$) {
      var _021z = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {},
          x$_zy0 = wuxzyv['get'](this);x$_zy0 || wuxzyv['set'](this, x$_zy0 = {}), x$_zy0[olnmp] || (x$_zy0[olnmp] = []), x$_zy0[olnmp]['push'](wvzy$), _021z['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), _021z['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), _021z['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
    } }, { 'key': 'removeEventListener', 'value': function (_1z$2, $y_xz) {
      var rqnpm = wuxzyv['get'](this)[_1z$2];if (rqnpm && 0x0 < rqnpm['length']) {
        for (var gehfcd = rqnpm['length']; gehfcd--;) if (rqnpm[gehfcd] === $y_xz) {
          rqnpm['splice'](gehfcd, 0x1);break;
        }
      }
    } }, { 'key': 'dispatchEvent', 'value': function () {
      var ywvux = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {},
          vutsw = wuxzyv['get'](this)[ywvux['type']];if (vutsw) {
        for (var mjinkl = 0x0; mjinkl < vutsw['length']; mjinkl++) vutsw[mjinkl](ywvux);
      }
    } }]), gjeifh = ifje;function ifje() {
    !function (cgbdef, jlink) {
      if (!(cgbdef instanceof jlink)) throw new TypeError('Cannot call a class as a function');
    }(this, ifje), wuxzyv['set'](this, {});
  }utsvqr['default'] = gjeifh;
}, function (uzvyx, $yxvwz) {
  'use strict';

  Object['defineProperty']($yxvwz, '__esModule', { 'value': !0x0 }), $yxvwz['noop'] = function () {}, $yxvwz['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (kighlj, urqtvs, _321$) {
  'use strict';

  Object['defineProperty'](urqtvs, '__esModule', { 'value': !0x0 }), urqtvs['default'] = function () {
    var rotsq = wx['createCanvas']();return rotsq['type'] = 'canvas', rotsq['__proto__']['__proto__'] = new klhijm['default']('canvas'), rotsq['getContext'], (rotsq['getBoundingClientRect'] = function () {
      return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
    }, rotsq);
  }, _321$(0x3);var klhijm = hjfge(_321$(0x4));hjfge(_321$(0xa));function hjfge(ikhjl) {
    return ikhjl && ikhjl['__esModule'] ? ikhjl : { 'default': ikhjl };
  }
}, function (kijhlg, hkjig, lnmpoq) {
  'use strict';

  Object['defineProperty'](hkjig, '__esModule', { 'value': !0x0 });var zw_$ = function (lkim) {
    {
      if (lkim && lkim['__esModule']) return lkim;var dhc = {};if (null != lkim) {
        for (var x0z$y in lkim) Object['prototype']['hasOwnProperty']['call'](lkim, x0z$y) && (dhc[x0z$y] = lkim[x0z$y]);
      }return dhc['default'] = lkim, dhc;
    }
  }(lnmpoq(0x1)),
      wtvusx = cae(lnmpoq(0x4)),
      cfgdbe = cae(lnmpoq(0xb)),
      lmkj = cae(lnmpoq(0xc)),
      dcbge = cae(lnmpoq(0x9));function cae(gijf) {
    return gijf && gijf['__esModule'] ? gijf : { 'default': gijf };
  }lnmpoq(0xf);var $21z0 = {},
      cfbdae = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': zw_$, 'hidden': !0x1, 'style': {}, 'location': zw_$['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new wtvusx['default']('head'), 'body': new wtvusx['default']('body'), 'createElement': function (_y$1) {
      return 'canvas' === _y$1 ? new dcbge['default']() : 'audio' === _y$1 ? new lmkj['default']() : 'img' === _y$1 ? new cfgdbe['default']() : new wtvusx['default'](_y$1);
    }, 'getElementById': function (gecfdh) {
      return gecfdh === zw_$['canvas']['id'] ? zw_$['canvas'] : null;
    }, 'getElementsByTagName': function (zyuvxw) {
      return 'head' === zyuvxw ? [cfbdae['head']] : 'body' === zyuvxw ? [cfbdae['body']] : 'canvas' === zyuvxw ? [zw_$['canvas']] : [];
    }, 'querySelector': function (jlkno) {
      return 'head' === jlkno ? cfbdae['head'] : 'body' === jlkno ? cfbdae['body'] : 'canvas' === jlkno || jlkno === '#' + zw_$['canvas']['id'] ? zw_$['canvas'] : null;
    }, 'querySelectorAll': function (afcbed) {
      return 'head' === afcbed ? [cfbdae['head']] : 'body' === afcbed ? [cfbdae['body']] : 'canvas' === afcbed ? [zw_$['canvas']] : [];
    }, 'addEventListener': function (proqnm, fhe) {
      $21z0[proqnm] || ($21z0[proqnm] = []), $21z0[proqnm]['push'](fhe);
    }, 'removeEventListener': function (ecgbd, $zvyxw) {
      var rtqsop = $21z0[ecgbd];if (rtqsop && 0x0 < rtqsop['length']) {
        for (var kjlmon = rtqsop['length']; kjlmon--;) if (rtqsop[kjlmon] === $zvyxw) {
          rtqsop['splice'](kjlmon, 0x1);break;
        }
      }
    }, 'dispatchEvent': function (rqp) {
      var hijge = $21z0[rqp['type']];if (hijge) {
        for (var z$_xw = 0x0; z$_xw < hijge['length']; z$_xw++) hijge[z$_xw](rqp);
      }
    } };hkjig['default'] = cfbdae;
}, function (gjlkh, twyuxv) {
  'use strict';

  Object['defineProperty'](twyuxv, '__esModule', { 'value': !0x0 }), twyuxv['default'] = function () {
    return wx['createImage']();
  };
}, function (hkl, qpsurt, xustw) {
  'use strict';

  Object['defineProperty'](qpsurt, '__esModule', { 'value': !0x0 });var khjif = function (jhigkl, khfijg, _420) {
    return khfijg && xvst(jhigkl['prototype'], khfijg), _420 && xvst(jhigkl, _420), jhigkl;
  };function xvst(jhigfe, uyvtxw) {
    for (var qrsvut = 0x0; qrsvut < uyvtxw['length']; qrsvut++) {
      var defcg = uyvtxw[qrsvut];defcg['enumerable'] = defcg['enumerable'] || !0x1, defcg['configurable'] = !0x0, 'value' in defcg && (defcg['writable'] = !0x0), Object['defineProperty'](jhigfe, defcg['key'], defcg);
    }
  }var _1420 = xustw(0xd),
      hfig = (x_y$z = _1420) && x_y$z['__esModule'] ? x_y$z : { 'default': x_y$z },
      x_y$z,
      $yz_ = xustw(0x8);function $_yx0(dcaefb, gkifh) {
    if (!dcaefb) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !gkifh || 'object' != typeof gkifh && 'function' != typeof gkifh ? dcaefb : gkifh;
  }var jkihg = 0x0,
      gkihl = 0x1,
      lgjkhi = 0x2,
      nomjk = 0x3,
      xwz = 0x4,
      x$_yz = new WeakMap(),
      rtusvq = new WeakMap();new WeakMap(), new WeakMap(), (function (lkgijh, ijnkml) {
    if ('function' != typeof ijnkml && null !== ijnkml) throw new TypeError('Super expression must either be null or a function, not ' + typeof ijnkml);lkgijh['prototype'] = Object['create'](ijnkml && ijnkml['prototype'], { 'constructor': { 'value': lkgijh, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), ijnkml && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](lkgijh, ijnkml) : lkgijh['__proto__'] = ijnkml);
  }(ecfhdg, hfig['default']), khjif(ecfhdg, [{ 'key': 'load', 'value': function () {
      console['warn']('HTMLAudioElement.load() is not implemented.');
    } }, { 'key': 'play', 'value': function () {
      (0x0, $yz_['isSubContext'])() || x$_yz['get'](this)['play']();
    } }, { 'key': 'pause', 'value': function () {
      (0x0, $yz_['isSubContext'])() || x$_yz['get'](this)['pause']();
    } }, { 'key': 'canPlayType', 'value': function () {
      var nmok = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return 'string' == typeof nmok && (-0x1 < nmok['indexOf']('audio/mpeg') || nmok['indexOf']('audio/mp4')) ? 'probably' : '';
    } }, { 'key': 'cloneNode', 'value': function () {
      var nmp = new ecfhdg();return (0x0, $yz_['isSubContext'])() || (nmp['loop'] = x$_yz['get'](this)['loop'], nmp['autoplay'] = x$_yz['get'](this)['loop'], nmp['src'] = this['src']), nmp;
    } }, { 'key': 'currentTime', 'get': function () {
      return (0x0, $yz_['isSubContext'])() ? 0x0 : x$_yz['get'](this)['currentTime'];
    }, 'set': function (hifjk) {
      (0x0, $yz_['isSubContext'])() || x$_yz['get'](this)['seek'](hifjk);
    } }, { 'key': 'src', 'get': function () {
      return rtusvq['get'](this);
    }, 'set': function (hefij) {
      rtusvq['set'](this, hefij), (0x0, $yz_['isSubContext'])() || (x$_yz['get'](this)['src'] = hefij);
    } }, { 'key': 'loop', 'get': function () {
      return !(0x0, $yz_['isSubContext'])() && x$_yz['get'](this)['loop'];
    }, 'set': function (_13$20) {
      (0x0, $yz_['isSubContext'])() || (x$_yz['get'](this)['loop'] = _13$20);
    } }, { 'key': 'autoplay', 'get': function () {
      return !(0x0, $yz_['isSubContext'])() && x$_yz['get'](this)['autoplay'];
    }, 'set': function ($zx_wy) {
      (0x0, $yz_['isSubContext'])() || (x$_yz['get'](this)['autoplay'] = $zx_wy);
    } }, { 'key': 'paused', 'get': function () {
      return !(0x0, $yz_['isSubContext'])() && x$_yz['get'](this)['paused'];
    } }]), khjif = ecfhdg);function ecfhdg(jlikmn) {
    !function (osrqpn, kljgh) {
      if (!(osrqpn instanceof kljgh)) throw new TypeError('Cannot call a class as a function');
    }(this, ecfhdg);var tswvr = $_yx0(this, (ecfhdg['__proto__'] || Object['getPrototypeOf'](ecfhdg))['call'](this));if (tswvr['HAVE_NOTHING'] = jkihg, tswvr['HAVE_METADATA'] = gkihl, tswvr['HAVE_CURRENT_DATA'] = lgjkhi, tswvr['HAVE_FUTURE_DATA'] = nomjk, tswvr['HAVE_ENOUGH_DATA'] = xwz, tswvr['readyState'] = jkihg, (0x0, $yz_['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), $_yx0(tswvr);rtusvq['set'](tswvr, '');var hjklm = wx['createInnerAudioContext']();return x$_yz['set'](tswvr, hjklm), hjklm['onCanplay'](function () {
      tswvr['dispatchEvent']({ 'type': 'load' }), tswvr['dispatchEvent']({ 'type': 'loadend' }), tswvr['dispatchEvent']({ 'type': 'canplay' }), tswvr['dispatchEvent']({ 'type': 'canplaythrough' }), tswvr['dispatchEvent']({ 'type': 'loadedmetadata' }), tswvr['readyState'] = lgjkhi;
    }), hjklm['onPlay'](function () {
      tswvr['dispatchEvent']({ 'type': 'play' });
    }), hjklm['onPause'](function () {
      tswvr['dispatchEvent']({ 'type': 'pause' });
    }), hjklm['onEnded'](function () {
      tswvr['dispatchEvent']({ 'type': 'ended' }), tswvr['readyState'] = xwz;
    }), hjklm['onError'](function () {
      tswvr['dispatchEvent']({ 'type': 'error' });
    }), jlikmn && (x$_yz['get'](tswvr)['src'] = jlikmn), tswvr;
  }qpsurt['default'] = khjif;
}, function (lihjkg, xtvyu, $230_) {
  'use strict';

  Object['defineProperty'](xtvyu, '__esModule', { 'value': !0x0 });var efighd = $230_(0xe),
      fhie;(function (rwtsvu, ihljgk) {
    if ('function' != typeof ihljgk && null !== ihljgk) throw new TypeError('Super expression must either be null or a function, not ' + typeof ihljgk);rwtsvu['prototype'] = Object['create'](ihljgk && ihljgk['prototype'], { 'constructor': { 'value': rwtsvu, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), ihljgk && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](rwtsvu, ihljgk) : rwtsvu['__proto__'] = ihljgk);
  })(gfjikh, ((fhie = efighd) && fhie['__esModule'] ? fhie : { 'default': fhie })['default']), $230_ = gfjikh;function gfjikh() {
    return function (vwtru, pnqros) {
      if (!(vwtru instanceof pnqros)) throw new TypeError('Cannot call a class as a function');
    }(this, gfjikh), function (tsoq, wzyvx) {
      if (!tsoq) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !wzyvx || 'object' != typeof wzyvx && 'function' != typeof wzyvx ? tsoq : wzyvx;
    }(this, (gfjikh['__proto__'] || Object['getPrototypeOf'](gfjikh))['call'](this, 'audio'));
  }xtvyu['default'] = $230_;
}, function (qurv, nkmop, z01$_) {
  'use strict';

  Object['defineProperty'](nkmop, '__esModule', { 'value': !0x0 });var _30 = function (qposn, _0, dacbe) {
    return _0 && jilg(qposn['prototype'], _0), dacbe && jilg(qposn, dacbe), qposn;
  };function jilg(edghfc, ponlm) {
    for (var qmonlp = 0x0; qmonlp < ponlm['length']; qmonlp++) {
      var xuwstv = ponlm[qmonlp];xuwstv['enumerable'] = xuwstv['enumerable'] || !0x1, xuwstv['configurable'] = !0x0, 'value' in xuwstv && (xuwstv['writable'] = !0x0), Object['defineProperty'](edghfc, xuwstv['key'], xuwstv);
    }
  }var y_xzw = z01$_(0x4),
      nplqo;(function (hiklj, hikjm) {
    if ('function' != typeof hikjm && null !== hikjm) throw new TypeError('Super expression must either be null or a function, not ' + typeof hikjm);hiklj['prototype'] = Object['create'](hikjm && hikjm['prototype'], { 'constructor': { 'value': hiklj, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), hikjm && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](hiklj, hikjm) : hiklj['__proto__'] = hikjm);
  })(sqnpor, ((nplqo = y_xzw) && nplqo['__esModule'] ? nplqo : { 'default': nplqo })['default']), _30(sqnpor, [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]), _30 = sqnpor;function sqnpor(wyxz$) {
    return function (jlmo, $z01_2) {
      if (!(jlmo instanceof $z01_2)) throw new TypeError('Cannot call a class as a function');
    }(this, sqnpor), function (lpqonm, xvyz) {
      if (!lpqonm) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !xvyz || 'object' != typeof xvyz && 'function' != typeof xvyz ? lpqonm : xvyz;
    }(this, (sqnpor['__proto__'] || Object['getPrototypeOf'](sqnpor))['call'](this, wyxz$));
  }nkmop['default'] = _30;
}, function ($1_yz, $z21_, _203$1) {
  'use strict';

  _203$1(0x10);
}, function (_z2$10, cgbfed, mkinj) {
  'use strict';

  var igfhje = function (ifg) {
    {
      if (ifg && ifg['__esModule']) return ifg;var khgij = {};if (null != ifg) {
        for (var vrust in ifg) Object['prototype']['hasOwnProperty']['call'](ifg, vrust) && (khgij[vrust] = ifg[vrust]);
      }return khgij['default'] = ifg, khgij;
    }
  }(mkinj(0x1)),
      w_$y = mkinj(0xa),
      tpqo = (ehcfg = w_$y) && ehcfg['__esModule'] ? ehcfg : { 'default': ehcfg },
      ehcfg,
      jihfeg = mkinj(0x8);function vtrqsu(hiedfg) {
    !function (jlkg, srtu) {
      if (!(jlkg instanceof srtu)) throw new TypeError('Cannot call a class as a function');
    }(this, vtrqsu), this['target'] = igfhje['canvas'], this['currentTarget'] = igfhje['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = jihfeg['noop'], this['stopPropagation'] = jihfeg['noop'], this['type'] = hiedfg;
  }function cehg(efjgih) {
    return function (mqlpn) {
      var zx$yw_ = new vtrqsu(efjgih);zx$yw_['touches'] = mqlpn['touches'], zx$yw_['targetTouches'] = Array['prototype']['slice']['call'](mqlpn['touches']), zx$yw_['changedTouches'] = mqlpn['changedTouches'], zx$yw_['timeStamp'] = mqlpn['timeStamp'], tpqo['default']['dispatchEvent'](zx$yw_);
    };
  }wx['onTouchStart'](cehg('touchstart')), wx['onTouchMove'](cehg('touchmove')), wx['onTouchEnd'](cehg('touchend')), wx['onTouchCancel'](cehg('touchcancel'));
}, function (rsuwt, osrqtp) {
  'use strict';

  Object['defineProperty'](osrqtp, '__esModule', { 'value': !0x0 }), osrqtp['noop'] = function () {}, osrqtp['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (sqvurt, ce, qnomrp) {
  'use strict';

  Object['defineProperty'](ce, '__esModule', { 'value': !0x0 }), qnomrp = qnomrp(0x8), qnomrp = { 'platform': wx['getSystemInfoSync']()['platform'], 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': qnomrp['noop'], 'watchPosition': qnomrp['noop'], 'clearWatch': qnomrp['noop'] } }, ce['default'] = qnomrp;
}, function (x_zy$, _2z1$0) {
  'use strict';

  Object['defineProperty'](_2z1$0, '__esModule', { 'value': !0x0 });var kmlon = function (difgeh, rvwuts, zxwvu) {
    return rvwuts && khigfj(difgeh['prototype'], rvwuts), zxwvu && khigfj(difgeh, zxwvu), difgeh;
  };function khigfj(fbcge, kijnl) {
    for (var fhg = 0x0; fhg < kijnl['length']; fhg++) {
      var ejfihg = kijnl[fhg];ejfihg['enumerable'] = ejfihg['enumerable'] || !0x1, ejfihg['configurable'] = !0x0, 'value' in ejfihg && (ejfihg['writable'] = !0x0), Object['defineProperty'](fbcge, ejfihg['key'], ejfihg);
    }
  }var dihg = new WeakMap(),
      $_z12 = new WeakMap(),
      $231_ = new WeakMap(),
      gihjkl = new WeakMap(),
      yzuxv = new WeakMap();function fkgjih(qmpol) {
    if ('function' == typeof this['on' + qmpol]) {
      for (var nsrpq = arguments['length'], _123$ = Array(0x1 < nsrpq ? nsrpq - 0x1 : 0x0), utqrs = 0x1; utqrs < nsrpq; utqrs++) _123$[utqrs - 0x1] = arguments[utqrs];this['on' + qmpol]['apply'](this, _123$);
    }
  }function pnkml(il) {
    this['readyState'] = il, fkgjih['call'](this, 'readystatechange');
  }kmlon(nmlij, [{ 'key': 'abort', 'value': function () {
      var prmnqo = yzuxv['get'](this);prmnqo && prmnqo['abort']();
    } }, { 'key': 'getAllResponseHeaders', 'value': function () {
      var z$_y10 = gihjkl['get'](this);return Object['keys'](z$_y10)['map'](function (usvwtr) {
        return usvwtr + ':\x20' + z$_y10[usvwtr];
      })['join']('\x0a');
    } }, { 'key': 'getResponseHeader', 'value': function (qonmr) {
      return gihjkl['get'](this)[qonmr];
    } }, { 'key': 'open', 'value': function (wsuv, mpqol) {
      $_z12['set'](this, wsuv), dihg['set'](this, mpqol), pnkml['call'](this, nmlij['OPENED']);
    } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function () {
      var rqputs = this,
          _10yz = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';if (this['readyState'] !== nmlij['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');wx['request']({ 'data': _10yz, 'url': dihg['get'](this), 'method': $_z12['get'](this), 'header': $231_['get'](this), 'responseType': this['responseType'], 'success': function (ojknm) {
          var ywuvx = ojknm['data'],
              vwurst = ojknm['statusCode'],
              ojknm = ojknm['header'];if ('string' != typeof ywuvx && !(ywuvx instanceof ArrayBuffer)) try {
            ywuvx = JSON['stringify'](ywuvx);
          } catch (suvxwt) {}if (rqputs['status'] = vwurst, gihjkl['set'](rqputs, ojknm), fkgjih['call'](rqputs, 'loadstart'), pnkml['call'](rqputs, nmlij['HEADERS_RECEIVED']), pnkml['call'](rqputs, nmlij['LOADING']), (rqputs['response'] = ywuvx) instanceof ArrayBuffer) {
            rqputs['responseText'] = '';var lmjkon = new Uint8Array(ywuvx),
                lmikjh = lmjkon['byteLength'];for (var ihlmk = 0x0; ihlmk < lmikjh; ihlmk++) rqputs['responseText'] += String['fromCharCode'](lmjkon[ihlmk]);
          } else rqputs['responseText'] = ywuvx;pnkml['call'](rqputs, nmlij['DONE']), fkgjih['call'](rqputs, 'load'), fkgjih['call'](rqputs, 'loadend');
        }, 'fail': function (kgijhf) {
          kgijhf = kgijhf['errMsg'], (-0x1 !== kgijhf['indexOf']('abort') ? fkgjih['call'](rqputs, 'abort') : fkgjih['call'](rqputs, 'error', kgijhf), fkgjih['call'](rqputs, 'loadend'));
        } });
    } }, { 'key': 'setRequestHeader', 'value': function (kijl, stpqro) {
      var qutvs = $231_['get'](this);qutvs[kijl] = stpqro, $231_['set'](this, qutvs);
    } }]), kmlon = nmlij;function nmlij() {
    !function (knjil, qtsruv) {
      if (!(knjil instanceof qtsruv)) throw new TypeError('Cannot call a class as a function');
    }(this, nmlij), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = !0x1, $231_['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), gihjkl['set'](this, {});
  }kmlon['UNSEND'] = 0x0, kmlon['OPENED'] = 0x1, kmlon['HEADERS_RECEIVED'] = 0x2, kmlon['LOADING'] = 0x3, kmlon['DONE'] = 0x4, _2z1$0['default'] = kmlon;
}, function (vuwtsr, lknjom, utp) {
  'use strict';

  Object['defineProperty'](lknjom, '__esModule', { 'value': !0x0 });var kgjil = function ($ywzx_, xzyw$v, ywzvux) {
    return xzyw$v && rvuwts($ywzx_['prototype'], xzyw$v), ywzvux && rvuwts($ywzx_, ywzvux), $ywzx_;
  };function rvuwts(jlkmh, xvy$w) {
    for (var z$y0_1 = 0x0; z$y0_1 < xvy$w['length']; z$y0_1++) {
      var jkolm = xvy$w[z$y0_1];jkolm['enumerable'] = jkolm['enumerable'] || !0x1, jkolm['configurable'] = !0x0, 'value' in jkolm && (jkolm['writable'] = !0x0), Object['defineProperty'](jlkmh, jkolm['key'], jkolm);
    }
  }var swvurt = utp(0x8),
      uzwv = new WeakMap();kgjil(ifd, [{ 'key': 'close', 'value': function (y0_$z1, wtvux) {
      this['readyState'] = ifd['CLOSING'], uzwv['get'](this)['close']({ 'code': y0_$z1, 'reason': wtvux });
    } }, { 'key': 'send', 'value': function (klnomj) {
      if ('string' != typeof klnomj && !(klnomj instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + klnomj + ' is invalid');uzwv['get'](this)['send']({ 'data': klnomj });
    } }]), kgjil = ifd;function ifd(hklmij) {
    var hdcef = this,
        zxy_ = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function (gkjfi, qmno) {
      if (!(gkjfi instanceof qmno)) throw new TypeError('Cannot call a class as a function');
    }(this, ifd), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, (0x0, swvurt['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if ('string' != typeof hklmij || !/(^ws:\/\/)|(^wss:\/\/)/['test'](hklmij)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + hklmij + '\' is invalid');return this['url'] = hklmij, this['readyState'] = ifd['CONNECTING'], zxy_ = wx['connectSocket']({ 'url': hklmij, 'protocols': Array['isArray'](zxy_) ? zxy_ : [zxy_] }), (uzwv['set'](this, zxy_), zxy_['onClose'](function (wv$yx) {
      hdcef['readyState'] = ifd['CLOSED'], 'function' == typeof hdcef['onclose'] && hdcef['onclose'](wv$yx);
    }), zxy_['onMessage'](function (oqpnrs) {
      'function' == typeof hdcef['onmessage'] && hdcef['onmessage'](oqpnrs);
    }), zxy_['onOpen'](function () {
      hdcef['readyState'] = ifd['OPEN'], 'function' == typeof hdcef['onopen'] && hdcef['onopen']();
    }), zxy_['onError'](function (rstuq) {
      'function' == typeof hdcef['onerror'] && hdcef['onerror'](new Error(rstuq['errMsg']));
    }), this);
  }kgjil['CONNECTING'] = 0x0, kgjil['OPEN'] = 0x1, kgjil['CLOSING'] = 0x2, kgjil['CLOSED'] = 0x3, lknjom['default'] = kgjil;
}, function (yvx$wz, sqoptr, $z_01) {
  'use strict';

  Object['defineProperty'](sqoptr, '__esModule', { 'value': !0x0 });var fedab = function (z1$y_, kgijh, hikjfg) {
    return kgijh && mljikh(z1$y_['prototype'], kgijh), hikjfg && mljikh(z1$y_, hikjfg), z1$y_;
  };function mljikh(tqsup, wzyx$_) {
    for (var uwyxv = 0x0; uwyxv < wzyx$_['length']; uwyxv++) {
      var $zyx_ = wzyx$_[uwyxv];$zyx_['enumerable'] = $zyx_['enumerable'] || !0x1, $zyx_['configurable'] = !0x0, 'value' in $zyx_ && ($zyx_['writable'] = !0x0), Object['defineProperty'](tqsup, $zyx_['key'], $zyx_);
    }
  }var w_zxy$ = $z_01(0x8);fedab(pqrots, [{ 'key': 'construct', 'value': function () {
      if ((0x0, w_zxy$['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
    } }]), fedab = pqrots;function pqrots() {
    !function (kijlhm, hjfgki) {
      if (!(kijlhm instanceof hjfgki)) throw new TypeError('Cannot call a class as a function');
    }(this, pqrots);
  }sqoptr['default'] = fedab;
}, function (nrpqom, _x0$zy, fkhjgi) {
  'use strict';

  Object['defineProperty'](_x0$zy, '__esModule', { 'value': !0x0 });var rmqnpo = fkhjgi(0x8),
      twsxvu = { get 'length'() {
      return wx['getStorageInfoSync']()['keys']['length'];
    }, 'key': function (badecf) {
      return wx['getStorageInfoSync']()['keys'][badecf];
    }, 'getItem': function (rtqpu) {
      return wx['getStorageSync'](rtqpu);
    }, 'setItem': function ($_20, gcfdh) {
      return wx['setStorageSync']($_20, gcfdh);
    }, 'removeItem': function (_0$y1) {
      wx['removeStorageSync'](_0$y1);
    }, 'clear': function () {
      wx['clearStorageSync']();
    } },
      fched = {};fkhjgi = { get 'length'() {
      return Object['keys'](fched)['length'];
    }, 'key': function (xzwy_) {
      return Object['keys'](fched)[xzwy_];
    }, 'getItem': function (qtvs) {
      return fched[qtvs];
    }, 'setItem': function (qvtrsu, tvswu) {
      fched[qvtrsu] = tvswu;
    }, 'removeItem': function (gfhijk) {
      delete fched[gfhijk];
    }, 'clear': function () {
      fched = {};
    } }, twsxvu = (0x0, rmqnpo['isSubContext'])() ? fkhjgi : twsxvu, _x0$zy['default'] = twsxvu;
}, function (mihjl, ptqros) {
  'use strict';

  Object['defineProperty'](ptqros, '__esModule', { 'value': !0x0 }), ptqros['default'] = { 'href': 'bbbgame.js', 'reload': function () {} };
}]);