var p = wx.$h;
!function (pqrvt) {
  var storqp = {};function __webpack_require__(z_xw) {
    if (storqp[z_xw]) return storqp[z_xw]['exports'];var nlpk = storqp[z_xw] = { 'exports': {}, 'id': z_xw, 'loaded': !0x1 };return pqrvt[z_xw]['call'](nlpk['exports'], nlpk, nlpk['exports'], __webpack_require__), nlpk['loaded'] = !0x0, nlpk['exports'];
  }__webpack_require__['m'] = pqrvt, __webpack_require__['c'] = storqp, __webpack_require__['p'] = '', __webpack_require__(0x0);
}([function (igejhf, klmihj, vtyx) {
  'use strict';

  var minkj = function (mlnkj) {
    {
      if (mlnkj && mlnkj['__esModule']) return mlnkj;var pnl = {};if (null != mlnkj) {
        for (var pomqr in mlnkj) Object['prototype']['hasOwnProperty']['call'](mlnkj, pomqr) && (pnl[pomqr] = mlnkj[pomqr]);
      }return pnl['default'] = mlnkj, pnl;
    }
  }(vtyx(0x1)),
      osq = vtyx(0x4),
      oknjm = (rtqvw = osq) && rtqvw['__esModule'] ? rtqvw : { 'default': rtqvw },
      rtqvw,
      _z1y = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
    minkj['addEventListener'] = function (tsrpvq, cfhdg) {
      minkj['document']['addEventListener'](tsrpvq, cfhdg);
    }, minkj['removeEventListener'] = function (sty, iefhdg) {
      minkj['document']['removeEventListener'](sty, iefhdg);
    }, minkj['canvas'] && (minkj['canvas']['addEventListener'] = minkj['addEventListener'], minkj['canvas']['removeEventListener'] = minkj['removeEventListener']), _z1y['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new oknjm['default']('canvas'), sharedCanvas['addEventListener'] = minkj['addEventListener'], sharedCanvas['removeEventListener'] = minkj['removeEventListener']);var hgljk = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === hgljk) {
      for (var fhgki in minkj) {
        var _13$20 = Object['getOwnPropertyDescriptor'](_z1y, fhgki);_13$20 && !0x0 !== _13$20['configurable'] || Object['defineProperty'](window, fhgki, { 'value': minkj[fhgki] });
      }for (var olpqn in minkj['document']) {
        var imnlk = Object['getOwnPropertyDescriptor'](_z1y['document'], olpqn);imnlk && !0x0 !== imnlk['configurable'] || Object['defineProperty'](_z1y['document'], olpqn, { 'value': minkj['document'][olpqn] });
      }window['parent'] = window;
    } else {
      for (var fhiged in minkj) _z1y[fhiged] = minkj[fhiged];_z1y['window'] = minkj, window = _z1y, window['top'] = window['parent'] = window;
    }
  }());
}, function ($203, torq, _$02z) {
  'use strict';

  Object['defineProperty'](torq, '__esModule', { 'value': !0x0 }), torq['cancelAnimationFrame'] = torq['requestAnimationFrame'] = torq['clearInterval'] = torq['clearTimeout'] = torq['setInterval'] = torq['setTimeout'] = torq['canvas'] = torq['location'] = torq['localStorage'] = torq['HTMLElement'] = torq['FileReader'] = torq['Audio'] = torq['Image'] = torq['WebSocket'] = torq['XMLHttpRequest'] = torq['navigator'] = torq['document'] = void 0x0;var pso = _$02z(0x2);Object['keys'](pso)['forEach'](function (qvtspr) {
    'default' !== qvtspr && '__esModule' !== qvtspr && Object['defineProperty'](torq, qvtspr, { 'enumerable': !0x0, 'get': function () {
        return pso[qvtspr];
      } });
  });var efdgh = _$02z(0x3);Object['keys'](efdgh)['forEach'](function (vwtsrq) {
    'default' !== vwtsrq && '__esModule' !== vwtsrq && Object['defineProperty'](torq, vwtsrq, { 'enumerable': !0x0, 'get': function () {
        return efdgh[vwtsrq];
      } });
  });var rqmpon = _yz$xw(_$02z(0x9)),
      bca = _$02z(0x11),
      xsvty = _yz$xw(_$02z(0xa)),
      _$xzw = _yz$xw(_$02z(0x12)),
      dbace = _yz$xw(_$02z(0x13)),
      dfgecb = _yz$xw(_$02z(0x14)),
      ilgjk = _yz$xw(_$02z(0xb)),
      jeihfg = _yz$xw(_$02z(0xc)),
      eidhg = _yz$xw(_$02z(0x15)),
      hfidg = _yz$xw(_$02z(0x4)),
      imhljk = _yz$xw(_$02z(0x16));_$02z = _yz$xw(_$02z(0x17));function _yz$xw(oqmnl) {
    return oqmnl && oqmnl['__esModule'] ? oqmnl : { 'default': oqmnl };
  }torq['document'] = xsvty['default'], torq['navigator'] = _$xzw['default'], torq['XMLHttpRequest'] = dbace['default'], torq['WebSocket'] = dfgecb['default'], torq['Image'] = ilgjk['default'], torq['Audio'] = jeihfg['default'], torq['FileReader'] = eidhg['default'], torq['HTMLElement'] = hfidg['default'], torq['localStorage'] = imhljk['default'], torq['location'] = _$02z['default'], rqmpon = (0x0, bca['isSubContext'])() ? void 0x0 : new rqmpon['default'](), (torq['canvas'] = rqmpon, torq['setTimeout'] = setTimeout, torq['setInterval'] = setInterval, torq['clearTimeout'] = clearTimeout, torq['clearInterval'] = clearInterval, torq['requestAnimationFrame'] = requestAnimationFrame, torq['cancelAnimationFrame'] = cancelAnimationFrame);
}, function (cfgeb, w_$zyx) {
  'use strict';

  Object['defineProperty'](w_$zyx, '__esModule', { 'value': !0x0 });var dcefba = wx['getSystemInfoSync'](),
      lhikjg = dcefba['screenWidth'],
      vrqst = dcefba['screenHeight'],
      dcefba = dcefba['devicePixelRatio'];lhikjg = w_$zyx['innerWidth'] = lhikjg, vrqst = w_$zyx['innerHeight'] = vrqst, w_$zyx['devicePixelRatio'] = dcefba, w_$zyx['screen'] = { 'availWidth': lhikjg, 'availHeight': vrqst }, w_$zyx['performance'] = { 'now': function () {
      return Date['now']() / 0x3e8;
    } }, w_$zyx['ontouchstart'] = null, w_$zyx['ontouchmove'] = null, w_$zyx['ontouchend'] = null;
}, function (fhegc, z$y01_, rxvts) {
  'use strict';

  Object['defineProperty'](z$y01_, '__esModule', { 'value': !0x0 }), z$y01_['HTMLCanvasElement'] = z$y01_['HTMLImageElement'] = void 0x0;var _1z0$y = rxvts(0x4);rxvts = (xwy$v = _1z0$y) && xwy$v['__esModule'] ? xwy$v : { 'default': xwy$v };var xwy$v;function lkjim(pmnol, jfih) {
    if (!(pmnol instanceof jfih)) throw new TypeError('Cannot call a class as a function');
  }function _z0yx(fgebdc, trqws) {
    if (!fgebdc) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !trqws || 'object' != typeof trqws && 'function' != typeof trqws ? fgebdc : trqws;
  }function z0y$1_(hecdfg, lihmj) {
    if ('function' != typeof lihmj && null !== lihmj) throw new TypeError('Super expression must either be null or a function, not ' + typeof lihmj);hecdfg['prototype'] = Object['create'](lihmj && lihmj['prototype'], { 'constructor': { 'value': hecdfg, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), lihmj && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](hecdfg, lihmj) : hecdfg['__proto__'] = lihmj);
  }z$y01_['HTMLImageElement'] = (z0y$1_(z_10$y, rxvts['default']), z_10$y);function z_10$y() {
    return lkjim(this, z_10$y), _z0yx(this, (z_10$y['__proto__'] || Object['getPrototypeOf'](z_10$y))['call'](this, 'img'));
  }z$y01_['HTMLCanvasElement'] = (z0y$1_(_y01$z, rxvts['default']), _y01$z);function _y01$z() {
    return lkjim(this, _y01$z), _z0yx(this, (_y01$z['__proto__'] || Object['getPrototypeOf'](_y01$z))['call'](this, 'canvas'));
  }
}, function (qtros, mlpoqn, _wzyx) {
  'use strict';

  Object['defineProperty'](mlpoqn, '__esModule', { 'value': !0x0 });var kmlhji = function (hdgfie, sxr, lkmop) {
    return sxr && vxstyw(hdgfie['prototype'], sxr), lkmop && vxstyw(hdgfie, lkmop), hdgfie;
  };function vxstyw(pqots, jigk) {
    for (var tsxw = 0x0; tsxw < jigk['length']; tsxw++) {
      var mihjl = jigk[tsxw];mihjl['enumerable'] = mihjl['enumerable'] || !0x1, mihjl['configurable'] = !0x0, 'value' in mihjl && (mihjl['writable'] = !0x0), Object['defineProperty'](pqots, mihjl['key'], mihjl);
    }
  }var oqpr = _wzyx(0x5),
      zw$xv = (fbca = oqpr) && fbca['__esModule'] ? fbca : { 'default': fbca },
      fbca,
      gdbfe = _wzyx(0x8),
      edcfhg = _wzyx(0x2);(function (lnkomj, klig) {
    if ('function' != typeof klig && null !== klig) throw new TypeError('Super expression must either be null or a function, not ' + typeof klig);lnkomj['prototype'] = Object['create'](klig && klig['prototype'], { 'constructor': { 'value': lnkomj, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), klig && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](lnkomj, klig) : lnkomj['__proto__'] = klig);
  })(fhcgd, zw$xv['default']), kmlhji(fhcgd, [{ 'key': 'setAttribute', 'value': function (snorp, $_z1y0) {
      this[snorp] = $_z1y0;
    } }, { 'key': 'getAttribute', 'value': function (gjkihl) {
      return this[gjkihl];
    } }, { 'key': 'getBoundingClientRect', 'value': function () {
      return { 'top': 0x0, 'left': 0x0, 'width': edcfhg['innerWidth'], 'height': edcfhg['innerHeight'] };
    } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
      var jlhkm = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](jlhkm) ? 0x0 : jlhkm;
    } }, { 'key': 'clientHeight', 'get': function () {
      var _y$1 = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](_y$1) ? 0x0 : _y$1;
    } }]), kmlhji = fhcgd;function fhcgd() {
    var x$wyvz = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';!function (gefdi, vxws) {
      if (!(gefdi instanceof vxws)) throw new TypeError('Cannot call a class as a function');
    }(this, fhcgd);var injkm = function (x0z$_y, x0) {
      if (!x0z$_y) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !x0 || 'object' != typeof x0 && 'function' != typeof x0 ? x0z$_y : x0;
    }(this, (fhcgd['__proto__'] || Object['getPrototypeOf'](fhcgd))['call'](this));return injkm['className'] = '', injkm['childern'] = [], injkm['style'] = { 'width': edcfhg['innerWidth'] + 'px', 'height': edcfhg['innerHeight'] + 'px' }, injkm['insertBefore'] = gdbfe['noop'], injkm['innerHTML'] = '', injkm['tagName'] = x$wyvz['toUpperCase'](), injkm;
  }mlpoqn['default'] = kmlhji;
}, function (qsprv, eghfij, nporq) {
  'use strict';

  Object['defineProperty'](eghfij, '__esModule', { 'value': !0x0 });var stpv = nporq(0x6),
      kmopl;(function (kijgfh, sptqo) {
    if ('function' != typeof sptqo && null !== sptqo) throw new TypeError('Super expression must either be null or a function, not ' + typeof sptqo);kijgfh['prototype'] = Object['create'](sptqo && sptqo['prototype'], { 'constructor': { 'value': kijgfh, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), sptqo && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](kijgfh, sptqo) : kijgfh['__proto__'] = sptqo);
  })(zy1$, ((kmopl = stpv) && kmopl['__esModule'] ? kmopl : { 'default': kmopl })['default']), nporq = zy1$;function zy1$() {
    !function (onpqml, sqortp) {
      if (!(onpqml instanceof sqortp)) throw new TypeError('Cannot call a class as a function');
    }(this, zy1$);var _ywzx$ = function (x_zw$y, lnmi) {
      if (!x_zw$y) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !lnmi || 'object' != typeof lnmi && 'function' != typeof lnmi ? x_zw$y : lnmi;
    }(this, (zy1$['__proto__'] || Object['getPrototypeOf'](zy1$))['call'](this));return _ywzx$['className'] = '', _ywzx$['children'] = [], _ywzx$;
  }eghfij['default'] = nporq;
}, function (stqopr, lgkih, vsqptr) {
  'use strict';

  Object['defineProperty'](lgkih, '__esModule', { 'value': !0x0 });var y$_xw = function (lpokn, nqprmo, rvwtq) {
    return nqprmo && spornq(lpokn['prototype'], nqprmo), rvwtq && spornq(lpokn, rvwtq), lpokn;
  };function spornq(tsrvxw, fedhg) {
    for (var mjnilk = 0x0; mjnilk < fedhg['length']; mjnilk++) {
      var kmnlji = fedhg[mjnilk];kmnlji['enumerable'] = kmnlji['enumerable'] || !0x1, kmnlji['configurable'] = !0x0, 'value' in kmnlji && (kmnlji['writable'] = !0x0), Object['defineProperty'](tsrvxw, kmnlji['key'], kmnlji);
    }
  }var hfgdie = vsqptr(0x7),
      qrpsn;(function (yz$10, dcbaef) {
    if ('function' != typeof dcbaef && null !== dcbaef) throw new TypeError('Super expression must either be null or a function, not ' + typeof dcbaef);yz$10['prototype'] = Object['create'](dcbaef && dcbaef['prototype'], { 'constructor': { 'value': yz$10, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), dcbaef && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](yz$10, dcbaef) : yz$10['__proto__'] = dcbaef);
  })(_4320, ((qrpsn = hfgdie) && qrpsn['__esModule'] ? qrpsn : { 'default': qrpsn })['default']), y$_xw(_4320, [{ 'key': 'appendChild', 'value': function (ytv) {
      if (!(ytv instanceof _4320)) throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');this['childNodes']['push'](ytv);
    } }, { 'key': 'cloneNode', 'value': function () {
      var fgkihj = Object['create'](this);return Object['assign'](fgkihj, this), fgkihj;
    } }, { 'key': 'removeChild', 'value': function (mijnk) {
      var fejhi = this['childNodes']['findIndex'](function (nrqpm) {
        return nrqpm === mijnk;
      });return -0x1 < fejhi ? this['childNodes']['splice'](fejhi, 0x1) : null;
    } }]), y$_xw = _4320;function _4320() {
    !function (hkijfg, hkljm) {
      if (!(hkijfg instanceof hkljm)) throw new TypeError('Cannot call a class as a function');
    }(this, _4320);var jkhli = function (lknji, dehfgi) {
      if (!lknji) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !dehfgi || 'object' != typeof dehfgi && 'function' != typeof dehfgi ? lknji : dehfgi;
    }(this, (_4320['__proto__'] || Object['getPrototypeOf'](_4320))['call'](this));return jkhli['childNodes'] = [], jkhli;
  }lgkih['default'] = y$_xw;
}, function (svrp, njlk) {
  'use strict';

  Object['defineProperty'](njlk, '__esModule', { 'value': !0x0 });var jkfgi = function (fdeca, mjknli, no) {
    return mjknli && hkfi(fdeca['prototype'], mjknli), no && hkfi(fdeca, no), fdeca;
  };function hkfi(yzwvxt, inkmjl) {
    for (var xrvt = 0x0; xrvt < inkmjl['length']; xrvt++) {
      var bafecd = inkmjl[xrvt];bafecd['enumerable'] = bafecd['enumerable'] || !0x1, bafecd['configurable'] = !0x0, 'value' in bafecd && (bafecd['writable'] = !0x0), Object['defineProperty'](yzwvxt, bafecd['key'], bafecd);
    }
  }var ghlkij = new WeakMap();jkfgi(yz10, [{ 'key': 'addEventListener', 'value': function (qnos, geijh) {
      var pnmqol = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {},
          yvtxzw = ghlkij['get'](this);yvtxzw || ghlkij['set'](this, yvtxzw = {}), yvtxzw[qnos] || (yvtxzw[qnos] = []), yvtxzw[qnos]['push'](geijh), pnmqol['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), pnmqol['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), pnmqol['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
    } }, { 'key': 'removeEventListener', 'value': function (cgbfd, wz$y) {
      var rtqspo = ghlkij['get'](this)[cgbfd];if (rtqspo && 0x0 < rtqspo['length']) {
        for (var tvswq = rtqspo['length']; tvswq--;) if (rtqspo[tvswq] === wz$y) {
          rtqspo['splice'](tvswq, 0x1);break;
        }
      }
    } }, { 'key': 'dispatchEvent', 'value': function () {
      var xztyw = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {},
          trwqv = ghlkij['get'](this)[xztyw['type']];if (trwqv) {
        for (var edghcf = 0x0; edghcf < trwqv['length']; edghcf++) trwqv[edghcf](xztyw);
      }
    } }]), jkfgi = yz10;function yz10() {
    !function (wtvsy, sqtpvr) {
      if (!(wtvsy instanceof sqtpvr)) throw new TypeError('Cannot call a class as a function');
    }(this, yz10), ghlkij['set'](this, {});
  }njlk['default'] = jkfgi;
}, function (jklmni, ijhkm) {
  'use strict';

  Object['defineProperty'](ijhkm, '__esModule', { 'value': !0x0 }), ijhkm['noop'] = function () {}, ijhkm['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (kljgih, ljhmk, ehigfd) {
  'use strict';

  Object['defineProperty'](ljhmk, '__esModule', { 'value': !0x0 }), ljhmk['default'] = function () {
    var wtrvs = wx['createCanvas']();return wtrvs['type'] = 'canvas', wtrvs['__proto__']['__proto__'] = new imklj['default']('canvas'), wtrvs['getContext'], (wtrvs['getBoundingClientRect'] = function () {
      return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
    }, wtrvs);
  }, ehigfd(0x3);var imklj = orqpm(ehigfd(0x4));orqpm(ehigfd(0xa));function orqpm(olpnmk) {
    return olpnmk && olpnmk['__esModule'] ? olpnmk : { 'default': olpnmk };
  }
}, function (nmjlik, ijfh, vwyxz$) {
  'use strict';

  Object['defineProperty'](ijfh, '__esModule', { 'value': !0x0 });var rospn = function (trwvxs) {
    {
      if (trwvxs && trwvxs['__esModule']) return trwvxs;var xwsvt = {};if (null != trwvxs) {
        for (var y_ in trwvxs) Object['prototype']['hasOwnProperty']['call'](trwvxs, y_) && (xwsvt[y_] = trwvxs[y_]);
      }return xwsvt['default'] = trwvxs, xwsvt;
    }
  }(vwyxz$(0x1)),
      figedh = rsvp(vwyxz$(0x4)),
      mlnjik = rsvp(vwyxz$(0xb)),
      wysxtv = rsvp(vwyxz$(0xc)),
      jgil = rsvp(vwyxz$(0x9));function rsvp(fkjgih) {
    return fkjgih && fkjgih['__esModule'] ? fkjgih : { 'default': fkjgih };
  }vwyxz$(0xf);var tswq = {},
      rstpoq = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': rospn, 'hidden': !0x1, 'style': {}, 'location': rospn['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new figedh['default']('head'), 'body': new figedh['default']('body'), 'createElement': function (yztxv) {
      return 'canvas' === yztxv ? new jgil['default']() : 'audio' === yztxv ? new wysxtv['default']() : 'img' === yztxv ? new mlnjik['default']() : new figedh['default'](yztxv);
    }, 'getElementById': function (oprnqm) {
      return oprnqm === rospn['canvas']['id'] ? rospn['canvas'] : null;
    }, 'getElementsByTagName': function (fdhi) {
      return 'head' === fdhi ? [rstpoq['head']] : 'body' === fdhi ? [rstpoq['body']] : 'canvas' === fdhi ? [rospn['canvas']] : [];
    }, 'querySelector': function (gfdi) {
      return 'head' === gfdi ? rstpoq['head'] : 'body' === gfdi ? rstpoq['body'] : 'canvas' === gfdi || gfdi === '#' + rospn['canvas']['id'] ? rospn['canvas'] : null;
    }, 'querySelectorAll': function (spnqor) {
      return 'head' === spnqor ? [rstpoq['head']] : 'body' === spnqor ? [rstpoq['body']] : 'canvas' === spnqor ? [rospn['canvas']] : [];
    }, 'addEventListener': function (gihjfe, _$xzwy) {
      tswq[gihjfe] || (tswq[gihjfe] = []), tswq[gihjfe]['push'](_$xzwy);
    }, 'removeEventListener': function (z1y_$0, fbgcde) {
      var cafed = tswq[z1y_$0];if (cafed && 0x0 < cafed['length']) {
        for (var molnq = cafed['length']; molnq--;) if (cafed[molnq] === fbgcde) {
          cafed['splice'](molnq, 0x1);break;
        }
      }
    }, 'dispatchEvent': function (tvrs) {
      var rpqts = tswq[tvrs['type']];if (rpqts) {
        for (var egdchf = 0x0; egdchf < rpqts['length']; egdchf++) rpqts[egdchf](tvrs);
      }
    } };ijfh['default'] = rstpoq;
}, function (cfeh, pnlo) {
  'use strict';

  Object['defineProperty'](pnlo, '__esModule', { 'value': !0x0 }), pnlo['default'] = function () {
    return wx['createImage']();
  };
}, function (efbdcg, nqopm, xtv) {
  'use strict';

  Object['defineProperty'](nqopm, '__esModule', { 'value': !0x0 });var swtxy = function (nlqmp, rvwstq, edgh) {
    return rvwstq && fbecda(nlqmp['prototype'], rvwstq), edgh && fbecda(nlqmp, edgh), nlqmp;
  };function fbecda(kghfi, echf) {
    for (var xsvtwy = 0x0; xsvtwy < echf['length']; xsvtwy++) {
      var lihj = echf[xsvtwy];lihj['enumerable'] = lihj['enumerable'] || !0x1, lihj['configurable'] = !0x0, 'value' in lihj && (lihj['writable'] = !0x0), Object['defineProperty'](kghfi, lihj['key'], lihj);
    }
  }var plnomk = xtv(0xd),
      ihgkf = (lmhik = plnomk) && lmhik['__esModule'] ? lmhik : { 'default': lmhik },
      lmhik,
      ifehgd = xtv(0x8);function fecdgh(vtwqsr, jgkhil) {
    if (!vtwqsr) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !jgkhil || 'object' != typeof jgkhil && 'function' != typeof jgkhil ? vtwqsr : jgkhil;
  }var kihmjl = 0x0,
      wtsrx = 0x1,
      ijlmh = 0x2,
      fbdeac = 0x3,
      snqorp = 0x4,
      optq = new WeakMap(),
      $1_yz0 = new WeakMap();new WeakMap(), new WeakMap(), (function (swvt, ihgef) {
    if ('function' != typeof ihgef && null !== ihgef) throw new TypeError('Super expression must either be null or a function, not ' + typeof ihgef);swvt['prototype'] = Object['create'](ihgef && ihgef['prototype'], { 'constructor': { 'value': swvt, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), ihgef && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](swvt, ihgef) : swvt['__proto__'] = ihgef);
  }(wsyvt, ihgkf['default']), swtxy(wsyvt, [{ 'key': 'load', 'value': function () {
      console['warn']('HTMLAudioElement.load() is not implemented.');
    } }, { 'key': 'play', 'value': function () {
      (0x0, ifehgd['isSubContext'])() || optq['get'](this)['play']();
    } }, { 'key': 'pause', 'value': function () {
      (0x0, ifehgd['isSubContext'])() || optq['get'](this)['pause']();
    } }, { 'key': 'canPlayType', 'value': function () {
      var mknj = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return 'string' == typeof mknj && (-0x1 < mknj['indexOf']('audio/mpeg') || mknj['indexOf']('audio/mp4')) ? 'probably' : '';
    } }, { 'key': 'cloneNode', 'value': function () {
      var rvstxw = new wsyvt();return (0x0, ifehgd['isSubContext'])() || (rvstxw['loop'] = optq['get'](this)['loop'], rvstxw['autoplay'] = optq['get'](this)['loop'], rvstxw['src'] = this['src']), rvstxw;
    } }, { 'key': 'currentTime', 'get': function () {
      return (0x0, ifehgd['isSubContext'])() ? 0x0 : optq['get'](this)['currentTime'];
    }, 'set': function (ebadfc) {
      (0x0, ifehgd['isSubContext'])() || optq['get'](this)['seek'](ebadfc);
    } }, { 'key': 'src', 'get': function () {
      return $1_yz0['get'](this);
    }, 'set': function (lkinmj) {
      $1_yz0['set'](this, lkinmj), (0x0, ifehgd['isSubContext'])() || (optq['get'](this)['src'] = lkinmj);
    } }, { 'key': 'loop', 'get': function () {
      return !(0x0, ifehgd['isSubContext'])() && optq['get'](this)['loop'];
    }, 'set': function (rxwt) {
      (0x0, ifehgd['isSubContext'])() || (optq['get'](this)['loop'] = rxwt);
    } }, { 'key': 'autoplay', 'get': function () {
      return !(0x0, ifehgd['isSubContext'])() && optq['get'](this)['autoplay'];
    }, 'set': function (onklm) {
      (0x0, ifehgd['isSubContext'])() || (optq['get'](this)['autoplay'] = onklm);
    } }, { 'key': 'paused', 'get': function () {
      return !(0x0, ifehgd['isSubContext'])() && optq['get'](this)['paused'];
    } }]), swtxy = wsyvt);function wsyvt(qsrpv) {
    !function (omprn, gcdef) {
      if (!(omprn instanceof gcdef)) throw new TypeError('Cannot call a class as a function');
    }(this, wsyvt);var wztyx = fecdgh(this, (wsyvt['__proto__'] || Object['getPrototypeOf'](wsyvt))['call'](this));if (wztyx['HAVE_NOTHING'] = kihmjl, wztyx['HAVE_METADATA'] = wtsrx, wztyx['HAVE_CURRENT_DATA'] = ijlmh, wztyx['HAVE_FUTURE_DATA'] = fbdeac, wztyx['HAVE_ENOUGH_DATA'] = snqorp, wztyx['readyState'] = kihmjl, (0x0, ifehgd['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), fecdgh(wztyx);$1_yz0['set'](wztyx, '');var ijkhm = wx['createInnerAudioContext']();return optq['set'](wztyx, ijkhm), ijkhm['onCanplay'](function () {
      wztyx['dispatchEvent']({ 'type': 'load' }), wztyx['dispatchEvent']({ 'type': 'loadend' }), wztyx['dispatchEvent']({ 'type': 'canplay' }), wztyx['dispatchEvent']({ 'type': 'canplaythrough' }), wztyx['dispatchEvent']({ 'type': 'loadedmetadata' }), wztyx['readyState'] = ijlmh;
    }), ijkhm['onPlay'](function () {
      wztyx['dispatchEvent']({ 'type': 'play' });
    }), ijkhm['onPause'](function () {
      wztyx['dispatchEvent']({ 'type': 'pause' });
    }), ijkhm['onEnded'](function () {
      wztyx['dispatchEvent']({ 'type': 'ended' }), wztyx['readyState'] = snqorp;
    }), ijkhm['onError'](function () {
      wztyx['dispatchEvent']({ 'type': 'error' });
    }), qsrpv && (optq['get'](wztyx)['src'] = qsrpv), wztyx;
  }nqopm['default'] = swtxy;
}, function (sron, twrqsv, hjilmk) {
  'use strict';

  Object['defineProperty'](twrqsv, '__esModule', { 'value': !0x0 });var jhfgie = hjilmk(0xe),
      fjihg;(function (zxtwvy, wvsxr) {
    if ('function' != typeof wvsxr && null !== wvsxr) throw new TypeError('Super expression must either be null or a function, not ' + typeof wvsxr);zxtwvy['prototype'] = Object['create'](wvsxr && wvsxr['prototype'], { 'constructor': { 'value': zxtwvy, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), wvsxr && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](zxtwvy, wvsxr) : zxtwvy['__proto__'] = wvsxr);
  })(higk, ((fjihg = jhfgie) && fjihg['__esModule'] ? fjihg : { 'default': fjihg })['default']), hjilmk = higk;function higk() {
    return function (hdegfi, efbgcd) {
      if (!(hdegfi instanceof efbgcd)) throw new TypeError('Cannot call a class as a function');
    }(this, higk), function (kljhg, xyw$z_) {
      if (!kljhg) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !xyw$z_ || 'object' != typeof xyw$z_ && 'function' != typeof xyw$z_ ? kljhg : xyw$z_;
    }(this, (higk['__proto__'] || Object['getPrototypeOf'](higk))['call'](this, 'audio'));
  }twrqsv['default'] = hjilmk;
}, function ($01_23, ornqpm, _03$1) {
  'use strict';

  Object['defineProperty'](ornqpm, '__esModule', { 'value': !0x0 });var lnjok = function (stvrxw, lkpmon, $zy0x_) {
    return lkpmon && nkjom(stvrxw['prototype'], lkpmon), $zy0x_ && nkjom(stvrxw, $zy0x_), stvrxw;
  };function nkjom(nmopql, lqpmn) {
    for (var txsvr = 0x0; txsvr < lqpmn['length']; txsvr++) {
      var abcfed = lqpmn[txsvr];abcfed['enumerable'] = abcfed['enumerable'] || !0x1, abcfed['configurable'] = !0x0, 'value' in abcfed && (abcfed['writable'] = !0x0), Object['defineProperty'](nmopql, abcfed['key'], abcfed);
    }
  }var jikhgf = _03$1(0x4),
      $z_21;(function (bfe, pnsoqr) {
    if ('function' != typeof pnsoqr && null !== pnsoqr) throw new TypeError('Super expression must either be null or a function, not ' + typeof pnsoqr);bfe['prototype'] = Object['create'](pnsoqr && pnsoqr['prototype'], { 'constructor': { 'value': bfe, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), pnsoqr && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](bfe, pnsoqr) : bfe['__proto__'] = pnsoqr);
  })(hfkig, (($z_21 = jikhgf) && $z_21['__esModule'] ? $z_21 : { 'default': $z_21 })['default']), lnjok(hfkig, [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]), lnjok = hfkig;function hfkig(becgf) {
    return function (qotpr, xvsr) {
      if (!(qotpr instanceof xvsr)) throw new TypeError('Cannot call a class as a function');
    }(this, hfkig), function (acedfb, lnmkj) {
      if (!acedfb) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !lnmkj || 'object' != typeof lnmkj && 'function' != typeof lnmkj ? acedfb : lnmkj;
    }(this, (hfkig['__proto__'] || Object['getPrototypeOf'](hfkig))['call'](this, becgf));
  }ornqpm['default'] = lnjok;
}, function ($01_yz, kfjgih, vrspt) {
  'use strict';

  vrspt(0x10);
}, function (sqonr, fghjki, dfeg) {
  'use strict';

  var tvpsr = function (cgdhef) {
    {
      if (cgdhef && cgdhef['__esModule']) return cgdhef;var efhgid = {};if (null != cgdhef) {
        for (var sytwvx in cgdhef) Object['prototype']['hasOwnProperty']['call'](cgdhef, sytwvx) && (efhgid[sytwvx] = cgdhef[sytwvx]);
      }return efhgid['default'] = cgdhef, efhgid;
    }
  }(dfeg(0x1)),
      edfchg = dfeg(0xa),
      tsyxwv = (iklj = edfchg) && iklj['__esModule'] ? iklj : { 'default': iklj },
      iklj,
      dfegh = dfeg(0x8);function xvrst(pvrtsq) {
    !function (xwsvyt, fdcebg) {
      if (!(xwsvyt instanceof fdcebg)) throw new TypeError('Cannot call a class as a function');
    }(this, xvrst), this['target'] = tvpsr['canvas'], this['currentTarget'] = tvpsr['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = dfegh['noop'], this['stopPropagation'] = dfegh['noop'], this['type'] = pvrtsq;
  }function mjikln(gdiefh) {
    return function (hedgfc) {
      var ijkglh = new xvrst(gdiefh);ijkglh['touches'] = hedgfc['touches'], ijkglh['targetTouches'] = Array['prototype']['slice']['call'](hedgfc['touches']), ijkglh['changedTouches'] = hedgfc['changedTouches'], ijkglh['timeStamp'] = hedgfc['timeStamp'], tsyxwv['default']['dispatchEvent'](ijkglh);
    };
  }wx['onTouchStart'](mjikln('touchstart')), wx['onTouchMove'](mjikln('touchmove')), wx['onTouchEnd'](mjikln('touchend')), wx['onTouchCancel'](mjikln('touchcancel'));
}, function (prtoqs, daeb) {
  'use strict';

  Object['defineProperty'](daeb, '__esModule', { 'value': !0x0 }), daeb['noop'] = function () {}, daeb['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (igjhf, ihdegf, nsrqop) {
  'use strict';

  Object['defineProperty'](ihdegf, '__esModule', { 'value': !0x0 }), nsrqop = nsrqop(0x8), nsrqop = { 'platform': wx['getSystemInfoSync']()['platform'], 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': nsrqop['noop'], 'watchPosition': nsrqop['noop'], 'clearWatch': nsrqop['noop'] } }, ihdegf['default'] = nsrqop;
}, function (rpoqnm, fcdaeb) {
  'use strict';

  Object['defineProperty'](fcdaeb, '__esModule', { 'value': !0x0 });var vxsrt = function (nlmki, cbef, sprto) {
    return cbef && kjon(nlmki['prototype'], cbef), sprto && kjon(nlmki, sprto), nlmki;
  };function kjon($yvzxw, fihgde) {
    for (var mqopnr = 0x0; mqopnr < fihgde['length']; mqopnr++) {
      var vtsqw = fihgde[mqopnr];vtsqw['enumerable'] = vtsqw['enumerable'] || !0x1, vtsqw['configurable'] = !0x0, 'value' in vtsqw && (vtsqw['writable'] = !0x0), Object['defineProperty']($yvzxw, vtsqw['key'], vtsqw);
    }
  }var jef = new WeakMap(),
      ystvx = new WeakMap(),
      jklg = new WeakMap(),
      syw = new WeakMap(),
      _$yzx = new WeakMap();function vrsqw(lmpqon) {
    if ('function' == typeof this['on' + lmpqon]) {
      for (var rpqvt = arguments['length'], y0z1_ = Array(0x1 < rpqvt ? rpqvt - 0x1 : 0x0), olkj = 0x1; olkj < rpqvt; olkj++) y0z1_[olkj - 0x1] = arguments[olkj];this['on' + lmpqon]['apply'](this, y0z1_);
    }
  }function gedfih(v$wyxz) {
    this['readyState'] = v$wyxz, vrsqw['call'](this, 'readystatechange');
  }vxsrt(xrwvt, [{ 'key': 'abort', 'value': function () {
      var kijmhl = _$yzx['get'](this);kijmhl && kijmhl['abort']();
    } }, { 'key': 'getAllResponseHeaders', 'value': function () {
      var edfabc = syw['get'](this);return Object['keys'](edfabc)['map'](function (lnkm) {
        return lnkm + ':\x20' + edfabc[lnkm];
      })['join']('\x0a');
    } }, { 'key': 'getResponseHeader', 'value': function (jfig) {
      return syw['get'](this)[jfig];
    } }, { 'key': 'open', 'value': function ($2z10_, ilmkjh) {
      ystvx['set'](this, $2z10_), jef['set'](this, ilmkjh), gedfih['call'](this, xrwvt['OPENED']);
    } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function () {
      var hfgide = this,
          okmlnp = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';if (this['readyState'] !== xrwvt['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');wx['request']({ 'data': okmlnp, 'url': jef['get'](this), 'method': ystvx['get'](this), 'header': jklg['get'](this), 'responseType': this['responseType'], 'success': function ($13) {
          var yxw$v = $13['data'],
              _2$310 = $13['statusCode'],
              $13 = $13['header'];if ('string' != typeof yxw$v && !(yxw$v instanceof ArrayBuffer)) try {
            yxw$v = JSON['stringify'](yxw$v);
          } catch (jlkhi) {}if (hfgide['status'] = _2$310, syw['set'](hfgide, $13), vrsqw['call'](hfgide, 'loadstart'), gedfih['call'](hfgide, xrwvt['HEADERS_RECEIVED']), gedfih['call'](hfgide, xrwvt['LOADING']), (hfgide['response'] = yxw$v) instanceof ArrayBuffer) {
            hfgide['responseText'] = '';var nlq = new Uint8Array(yxw$v),
                tporq = nlq['byteLength'];for (var xvtzw = 0x0; xvtzw < tporq; xvtzw++) hfgide['responseText'] += String['fromCharCode'](nlq[xvtzw]);
          } else hfgide['responseText'] = yxw$v;gedfih['call'](hfgide, xrwvt['DONE']), vrsqw['call'](hfgide, 'load'), vrsqw['call'](hfgide, 'loadend');
        }, 'fail': function (hgec) {
          hgec = hgec['errMsg'], (-0x1 !== hgec['indexOf']('abort') ? vrsqw['call'](hfgide, 'abort') : vrsqw['call'](hfgide, 'error', hgec), vrsqw['call'](hfgide, 'loadend'));
        } });
    } }, { 'key': 'setRequestHeader', 'value': function (gbcefd, cgfebd) {
      var yz1_0 = jklg['get'](this);yz1_0[gbcefd] = cgfebd, jklg['set'](this, yz1_0);
    } }]), vxsrt = xrwvt;function xrwvt() {
    !function (sopqrn, kfjg) {
      if (!(sopqrn instanceof kfjg)) throw new TypeError('Cannot call a class as a function');
    }(this, xrwvt), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = !0x1, jklg['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), syw['set'](this, {});
  }vxsrt['UNSEND'] = 0x0, vxsrt['OPENED'] = 0x1, vxsrt['HEADERS_RECEIVED'] = 0x2, vxsrt['LOADING'] = 0x3, vxsrt['DONE'] = 0x4, fcdaeb['default'] = vxsrt;
}, function (rtpvsq, okpml, rsvwq) {
  'use strict';

  Object['defineProperty'](okpml, '__esModule', { 'value': !0x0 });var kilm = function (rsqnop, $xzvw, nkmolj) {
    return $xzvw && trqpvs(rsqnop['prototype'], $xzvw), nkmolj && trqpvs(rsqnop, nkmolj), rsqnop;
  };function trqpvs(trswqv, ropqs) {
    for (var vtsxwy = 0x0; vtsxwy < ropqs['length']; vtsxwy++) {
      var nmkl = ropqs[vtsxwy];nmkl['enumerable'] = nmkl['enumerable'] || !0x1, nmkl['configurable'] = !0x0, 'value' in nmkl && (nmkl['writable'] = !0x0), Object['defineProperty'](trswqv, nmkl['key'], nmkl);
    }
  }var vqpst = rsvwq(0x8),
      mkljon = new WeakMap();kilm(omqpnr, [{ 'key': 'close', 'value': function (eadc, mijnlk) {
      this['readyState'] = omqpnr['CLOSING'], mkljon['get'](this)['close']({ 'code': eadc, 'reason': mijnlk });
    } }, { 'key': 'send', 'value': function (noklpm) {
      if ('string' != typeof noklpm && !(noklpm instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + noklpm + ' is invalid');mkljon['get'](this)['send']({ 'data': noklpm });
    } }]), kilm = omqpnr;function omqpnr(hedfig) {
    var omnklp = this,
        ywsvt = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function (hgeji, nolpkm) {
      if (!(hgeji instanceof nolpkm)) throw new TypeError('Cannot call a class as a function');
    }(this, omqpnr), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, (0x0, vqpst['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if ('string' != typeof hedfig || !/(^ws:\/\/)|(^wss:\/\/)/['test'](hedfig)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + hedfig + '\' is invalid');return this['url'] = hedfig, this['readyState'] = omqpnr['CONNECTING'], ywsvt = wx['connectSocket']({ 'url': hedfig, 'protocols': Array['isArray'](ywsvt) ? ywsvt : [ywsvt] }), (mkljon['set'](this, ywsvt), ywsvt['onClose'](function (ijgkhl) {
      omnklp['readyState'] = omqpnr['CLOSED'], 'function' == typeof omnklp['onclose'] && omnklp['onclose'](ijgkhl);
    }), ywsvt['onMessage'](function (rnoqs) {
      'function' == typeof omnklp['onmessage'] && omnklp['onmessage'](rnoqs);
    }), ywsvt['onOpen'](function () {
      omnklp['readyState'] = omqpnr['OPEN'], 'function' == typeof omnklp['onopen'] && omnklp['onopen']();
    }), ywsvt['onError'](function (cefgbd) {
      'function' == typeof omnklp['onerror'] && omnklp['onerror'](new Error(cefgbd['errMsg']));
    }), this);
  }kilm['CONNECTING'] = 0x0, kilm['OPEN'] = 0x1, kilm['CLOSING'] = 0x2, kilm['CLOSED'] = 0x3, okpml['default'] = kilm;
}, function (z120, jomln, srnqop) {
  'use strict';

  Object['defineProperty'](jomln, '__esModule', { 'value': !0x0 });var _4021 = function (mhjli, ot, vqwt) {
    return ot && _40123(mhjli['prototype'], ot), vqwt && _40123(mhjli, vqwt), mhjli;
  };function _40123(eihjg, fgechd) {
    for (var edfbg = 0x0; edfbg < fgechd['length']; edfbg++) {
      var qornps = fgechd[edfbg];qornps['enumerable'] = qornps['enumerable'] || !0x1, qornps['configurable'] = !0x0, 'value' in qornps && (qornps['writable'] = !0x0), Object['defineProperty'](eihjg, qornps['key'], qornps);
    }
  }var tvrwq = srnqop(0x8);_4021(ifghej, [{ 'key': 'construct', 'value': function () {
      if ((0x0, tvrwq['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
    } }]), _4021 = ifghej;function ifghej() {
    !function (sqrpn, mjnolk) {
      if (!(sqrpn instanceof mjnolk)) throw new TypeError('Cannot call a class as a function');
    }(this, ifghej);
  }jomln['default'] = _4021;
}, function (_20134, lomjn, trsxwv) {
  'use strict';

  Object['defineProperty'](lomjn, '__esModule', { 'value': !0x0 });var rsvtqw = trsxwv(0x8),
      bedfg = { get 'length'() {
      return wx['getStorageInfoSync']()['keys']['length'];
    }, 'key': function (oqprsn) {
      return wx['getStorageInfoSync']()['keys'][oqprsn];
    }, 'getItem': function (edighf) {
      return wx['getStorageSync'](edighf);
    }, 'setItem': function (lkmjon, fkgihj) {
      return wx['setStorageSync'](lkmjon, fkgihj);
    }, 'removeItem': function ($x0) {
      wx['removeStorageSync']($x0);
    }, 'clear': function () {
      wx['clearStorageSync']();
    } },
      _4312 = {};trsxwv = { get 'length'() {
      return Object['keys'](_4312)['length'];
    }, 'key': function (gfeid) {
      return Object['keys'](_4312)[gfeid];
    }, 'getItem': function (xyz_0) {
      return _4312[xyz_0];
    }, 'setItem': function (stqpr, _zxw$y) {
      _4312[stqpr] = _zxw$y;
    }, 'removeItem': function (omnkpl) {
      delete _4312[omnkpl];
    }, 'clear': function () {
      _4312 = {};
    } }, bedfg = (0x0, rsvtqw['isSubContext'])() ? trsxwv : bedfg, lomjn['default'] = bedfg;
}, function (hj, dgcfeb) {
  'use strict';

  Object['defineProperty'](dgcfeb, '__esModule', { 'value': !0x0 }), dgcfeb['default'] = { 'href': 'cccgame.js', 'reload': function () {} };
}]);