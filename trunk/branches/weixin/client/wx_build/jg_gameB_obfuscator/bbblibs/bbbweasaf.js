var _ = wx.y$;
!function (ywutxv) {
  var yz$wvx = {};function __webpack_require__(ghjfi) {
    if (yz$wvx[ghjfi]) return yz$wvx[ghjfi]['exports'];var ilhjg = yz$wvx[ghjfi] = { 'exports': {}, 'id': ghjfi, 'loaded': !0x1 };return ywutxv[ghjfi]['call'](ilhjg['exports'], ilhjg, ilhjg['exports'], __webpack_require__), ilhjg['loaded'] = !0x0, ilhjg['exports'];
  }__webpack_require__['m'] = ywutxv, __webpack_require__['c'] = yz$wvx, __webpack_require__['p'] = '', __webpack_require__(0x0);
}([function (opmnrq, x$y, rsvu) {
  'use strict';

  var wzvxy = function (fjg) {
    {
      if (fjg && fjg['__esModule']) return fjg;var yz$1_0 = {};if (null != fjg) {
        for (var omkjln in fjg) Object['prototype']['hasOwnProperty']['call'](fjg, omkjln) && (yz$1_0[omkjln] = fjg[omkjln]);
      }return yz$1_0['default'] = fjg, yz$1_0;
    }
  }(rsvu(0x1)),
      xsuvtw = rsvu(0x4),
      fhk = (fjkgi = xsuvtw) && fjkgi['__esModule'] ? fjkgi : { 'default': fjkgi },
      fjkgi,
      mnijl = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
    wzvxy['addEventListener'] = function (bfgdec, urpstq) {
      wzvxy['document']['addEventListener'](bfgdec, urpstq);
    }, wzvxy['removeEventListener'] = function (_0y$z1, _z1$2) {
      wzvxy['document']['removeEventListener'](_0y$z1, _z1$2);
    }, wzvxy['canvas'] && (wzvxy['canvas']['addEventListener'] = wzvxy['addEventListener'], wzvxy['canvas']['removeEventListener'] = wzvxy['removeEventListener']), mnijl['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new fhk['default']('canvas'), sharedCanvas['addEventListener'] = wzvxy['addEventListener'], sharedCanvas['removeEventListener'] = wzvxy['removeEventListener']);var gkl = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === gkl) {
      for (var gdhief in wzvxy) {
        var uxvzwy = Object['getOwnPropertyDescriptor'](mnijl, gdhief);uxvzwy && !0x0 !== uxvzwy['configurable'] || Object['defineProperty'](window, gdhief, { 'value': wzvxy[gdhief] });
      }for (var lpomkn in wzvxy['document']) {
        var zwy$v = Object['getOwnPropertyDescriptor'](mnijl['document'], lpomkn);zwy$v && !0x0 !== zwy$v['configurable'] || Object['defineProperty'](mnijl['document'], lpomkn, { 'value': wzvxy['document'][lpomkn] });
      }window['parent'] = window;
    } else {
      for (var vxzy in wzvxy) mnijl[vxzy] = wzvxy[vxzy];mnijl['window'] = wzvxy, window = mnijl, window['top'] = window['parent'] = window;
    }
  }());
}, function (hdef, qtsp, qpruts) {
  'use strict';

  Object['defineProperty'](qtsp, '__esModule', { 'value': !0x0 }), qtsp['cancelAnimationFrame'] = qtsp['requestAnimationFrame'] = qtsp['clearInterval'] = qtsp['clearTimeout'] = qtsp['setInterval'] = qtsp['setTimeout'] = qtsp['canvas'] = qtsp['location'] = qtsp['localStorage'] = qtsp['HTMLElement'] = qtsp['FileReader'] = qtsp['Audio'] = qtsp['Image'] = qtsp['WebSocket'] = qtsp['XMLHttpRequest'] = qtsp['navigator'] = qtsp['document'] = void 0x0;var lnpmq = qpruts(0x2);Object['keys'](lnpmq)['forEach'](function (efbac) {
    'default' !== efbac && '__esModule' !== efbac && Object['defineProperty'](qtsp, efbac, { 'enumerable': !0x0, 'get': function () {
        return lnpmq[efbac];
      } });
  });var pmnrqo = qpruts(0x3);Object['keys'](pmnrqo)['forEach'](function ($zx_0y) {
    'default' !== $zx_0y && '__esModule' !== $zx_0y && Object['defineProperty'](qtsp, $zx_0y, { 'enumerable': !0x0, 'get': function () {
        return pmnrqo[$zx_0y];
      } });
  });var dfecg = vwuxyt(qpruts(0x9)),
      pqrust = qpruts(0x11),
      wvyxzu = vwuxyt(qpruts(0xa)),
      rswvu = vwuxyt(qpruts(0x12)),
      npromq = vwuxyt(qpruts(0x13)),
      gljhk = vwuxyt(qpruts(0x14)),
      imjkhl = vwuxyt(qpruts(0xb)),
      $wzvxy = vwuxyt(qpruts(0xc)),
      $zxwyv = vwuxyt(qpruts(0x15)),
      zy0$1 = vwuxyt(qpruts(0x4)),
      potr = vwuxyt(qpruts(0x16));qpruts = vwuxyt(qpruts(0x17));function vwuxyt($yx0_z) {
    return $yx0_z && $yx0_z['__esModule'] ? $yx0_z : { 'default': $yx0_z };
  }qtsp['document'] = wvyxzu['default'], qtsp['navigator'] = rswvu['default'], qtsp['XMLHttpRequest'] = npromq['default'], qtsp['WebSocket'] = gljhk['default'], qtsp['Image'] = imjkhl['default'], qtsp['Audio'] = $wzvxy['default'], qtsp['FileReader'] = $zxwyv['default'], qtsp['HTMLElement'] = zy0$1['default'], qtsp['localStorage'] = potr['default'], qtsp['location'] = qpruts['default'], dfecg = (0x0, pqrust['isSubContext'])() ? void 0x0 : new dfecg['default'](), (qtsp['canvas'] = dfecg, qtsp['setTimeout'] = setTimeout, qtsp['setInterval'] = setInterval, qtsp['clearTimeout'] = clearTimeout, qtsp['clearInterval'] = clearInterval, qtsp['requestAnimationFrame'] = requestAnimationFrame, qtsp['cancelAnimationFrame'] = cancelAnimationFrame);
}, function (dcfeh, _zx$w) {
  'use strict';

  Object['defineProperty'](_zx$w, '__esModule', { 'value': !0x0 });var degfhi = wx['getSystemInfoSync'](),
      zy_10 = degfhi['screenWidth'],
      jikln = degfhi['screenHeight'],
      degfhi = degfhi['devicePixelRatio'];zy_10 = _zx$w['innerWidth'] = zy_10, jikln = _zx$w['innerHeight'] = jikln, _zx$w['devicePixelRatio'] = degfhi, _zx$w['screen'] = { 'availWidth': zy_10, 'availHeight': jikln }, _zx$w['performance'] = { 'now': function () {
      return Date['now']() / 0x3e8;
    } }, _zx$w['ontouchstart'] = null, _zx$w['ontouchmove'] = null, _zx$w['ontouchend'] = null;
}, function (stuxw, _$xzwy, _3014) {
  'use strict';

  Object['defineProperty'](_$xzwy, '__esModule', { 'value': !0x0 }), _$xzwy['HTMLCanvasElement'] = _$xzwy['HTMLImageElement'] = void 0x0;var ywuv = _3014(0x4);_3014 = (mnkljo = ywuv) && mnkljo['__esModule'] ? mnkljo : { 'default': mnkljo };var mnkljo;function fgcdeh(knmlop, ejhgif) {
    if (!(knmlop instanceof ejhgif)) throw new TypeError('Cannot call a class as a function');
  }function njlkm(_12034, z0$1) {
    if (!_12034) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !z0$1 || 'object' != typeof z0$1 && 'function' != typeof z0$1 ? _12034 : z0$1;
  }function lhimk(ljkmhi, uvxywt) {
    if ('function' != typeof uvxywt && null !== uvxywt) throw new TypeError('Super expression must either be null or a function, not ' + typeof uvxywt);ljkmhi['prototype'] = Object['create'](uvxywt && uvxywt['prototype'], { 'constructor': { 'value': ljkmhi, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), uvxywt && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](ljkmhi, uvxywt) : ljkmhi['__proto__'] = uvxywt);
  }_$xzwy['HTMLImageElement'] = (lhimk(fiheg, _3014['default']), fiheg);function fiheg() {
    return fgcdeh(this, fiheg), njlkm(this, (fiheg['__proto__'] || Object['getPrototypeOf'](fiheg))['call'](this, 'img'));
  }_$xzwy['HTMLCanvasElement'] = (lhimk(gkljh, _3014['default']), gkljh);function gkljh() {
    return fgcdeh(this, gkljh), njlkm(this, (gkljh['__proto__'] || Object['getPrototypeOf'](gkljh))['call'](this, 'canvas'));
  }
}, function (jefhg, sutxvw, uwsvtx) {
  'use strict';

  Object['defineProperty'](sutxvw, '__esModule', { 'value': !0x0 });var _z12$ = function (gjhie, jfkg, hkfgj) {
    return jfkg && dgbcfe(gjhie['prototype'], jfkg), hkfgj && dgbcfe(gjhie, hkfgj), gjhie;
  };function dgbcfe(qtrv, fbeadc) {
    for (var ustvx = 0x0; ustvx < fbeadc['length']; ustvx++) {
      var xwvyuz = fbeadc[ustvx];xwvyuz['enumerable'] = xwvyuz['enumerable'] || !0x1, xwvyuz['configurable'] = !0x0, 'value' in xwvyuz && (xwvyuz['writable'] = !0x0), Object['defineProperty'](qtrv, xwvyuz['key'], xwvyuz);
    }
  }var xwzvuy = uwsvtx(0x5),
      mqpro = (yzvuxw = xwzvuy) && yzvuxw['__esModule'] ? yzvuxw : { 'default': yzvuxw },
      yzvuxw,
      vuyz = uwsvtx(0x8),
      $y0z_ = uwsvtx(0x2);(function (hdegc, fedhi) {
    if ('function' != typeof fedhi && null !== fedhi) throw new TypeError('Super expression must either be null or a function, not ' + typeof fedhi);hdegc['prototype'] = Object['create'](fedhi && fedhi['prototype'], { 'constructor': { 'value': hdegc, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), fedhi && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](hdegc, fedhi) : hdegc['__proto__'] = fedhi);
  })(knmo, mqpro['default']), _z12$(knmo, [{ 'key': 'setAttribute', 'value': function (zy_0, z$201) {
      this[zy_0] = z$201;
    } }, { 'key': 'getAttribute', 'value': function (kilhjm) {
      return this[kilhjm];
    } }, { 'key': 'getBoundingClientRect', 'value': function () {
      return { 'top': 0x0, 'left': 0x0, 'width': $y0z_['innerWidth'], 'height': $y0z_['innerHeight'] };
    } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
      var rwsvt = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](rwsvt) ? 0x0 : rwsvt;
    } }, { 'key': 'clientHeight', 'get': function () {
      var zywvxu = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](zywvxu) ? 0x0 : zywvxu;
    } }]), _z12$ = knmo;function knmo() {
    var kjomn = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';!function (hcgfde, gil) {
      if (!(hcgfde instanceof gil)) throw new TypeError('Cannot call a class as a function');
    }(this, knmo);var qonmpl = function (mnik, qrtusv) {
      if (!mnik) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !qrtusv || 'object' != typeof qrtusv && 'function' != typeof qrtusv ? mnik : qrtusv;
    }(this, (knmo['__proto__'] || Object['getPrototypeOf'](knmo))['call'](this));return qonmpl['className'] = '', qonmpl['childern'] = [], qonmpl['style'] = { 'width': $y0z_['innerWidth'] + 'px', 'height': $y0z_['innerHeight'] + 'px' }, qonmpl['insertBefore'] = vuyz['noop'], qonmpl['innerHTML'] = '', qonmpl['tagName'] = kjomn['toUpperCase'](), qonmpl;
  }sutxvw['default'] = _z12$;
}, function (qptors, nlpqom, hkifg) {
  'use strict';

  Object['defineProperty'](nlpqom, '__esModule', { 'value': !0x0 });var spnqr = hkifg(0x6),
      wrvt;(function (khjigl, _4321) {
    if ('function' != typeof _4321 && null !== _4321) throw new TypeError('Super expression must either be null or a function, not ' + typeof _4321);khjigl['prototype'] = Object['create'](_4321 && _4321['prototype'], { 'constructor': { 'value': khjigl, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), _4321 && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](khjigl, _4321) : khjigl['__proto__'] = _4321);
  })($21z0_, ((wrvt = spnqr) && wrvt['__esModule'] ? wrvt : { 'default': wrvt })['default']), hkifg = $21z0_;function $21z0_() {
    !function (nlkoj, _wz) {
      if (!(nlkoj instanceof _wz)) throw new TypeError('Cannot call a class as a function');
    }(this, $21z0_);var efcgdh = function (fedihg, qnpos) {
      if (!fedihg) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !qnpos || 'object' != typeof qnpos && 'function' != typeof qnpos ? fedihg : qnpos;
    }(this, ($21z0_['__proto__'] || Object['getPrototypeOf']($21z0_))['call'](this));return efcgdh['className'] = '', efcgdh['children'] = [], efcgdh;
  }nlpqom['default'] = hkifg;
}, function (hlj, utqrsp, _z$y1) {
  'use strict';

  Object['defineProperty'](utqrsp, '__esModule', { 'value': !0x0 });var dfaceb = function (ghei, rnqpo, poqmln) {
    return rnqpo && wyvuzx(ghei['prototype'], rnqpo), poqmln && wyvuzx(ghei, poqmln), ghei;
  };function wyvuzx(uqtvsr, jnkml) {
    for (var opmknl = 0x0; opmknl < jnkml['length']; opmknl++) {
      var ustpq = jnkml[opmknl];ustpq['enumerable'] = ustpq['enumerable'] || !0x1, ustpq['configurable'] = !0x0, 'value' in ustpq && (ustpq['writable'] = !0x0), Object['defineProperty'](uqtvsr, ustpq['key'], ustpq);
    }
  }var ijlnm = _z$y1(0x7),
      egif;(function (onmpkl, imhk) {
    if ('function' != typeof imhk && null !== imhk) throw new TypeError('Super expression must either be null or a function, not ' + typeof imhk);onmpkl['prototype'] = Object['create'](imhk && imhk['prototype'], { 'constructor': { 'value': onmpkl, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), imhk && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](onmpkl, imhk) : onmpkl['__proto__'] = imhk);
  })(gjil, ((egif = ijlnm) && egif['__esModule'] ? egif : { 'default': egif })['default']), dfaceb(gjil, [{ 'key': 'appendChild', 'value': function (qtpsr) {
      if (!(qtpsr instanceof gjil)) throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');this['childNodes']['push'](qtpsr);
    } }, { 'key': 'cloneNode', 'value': function () {
      var ronqmp = Object['create'](this);return Object['assign'](ronqmp, this), ronqmp;
    } }, { 'key': 'removeChild', 'value': function (bgcfed) {
      var opk = this['childNodes']['findIndex'](function (swvxt) {
        return swvxt === bgcfed;
      });return -0x1 < opk ? this['childNodes']['splice'](opk, 0x1) : null;
    } }]), dfaceb = gjil;function gjil() {
    !function (ljkhm, osrtp) {
      if (!(ljkhm instanceof osrtp)) throw new TypeError('Cannot call a class as a function');
    }(this, gjil);var lmpko = function (uwtr, xy$_z0) {
      if (!uwtr) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !xy$_z0 || 'object' != typeof xy$_z0 && 'function' != typeof xy$_z0 ? uwtr : xy$_z0;
    }(this, (gjil['__proto__'] || Object['getPrototypeOf'](gjil))['call'](this));return lmpko['childNodes'] = [], lmpko;
  }utqrsp['default'] = dfaceb;
}, function (osrqp, vzxuwy) {
  'use strict';

  Object['defineProperty'](vzxuwy, '__esModule', { 'value': !0x0 });var x0y_z = function (hedi, _302, urspqt) {
    return _302 && gjhikl(hedi['prototype'], _302), urspqt && gjhikl(hedi, urspqt), hedi;
  };function gjhikl(sxtuvw, _24130) {
    for (var gchefd = 0x0; gchefd < _24130['length']; gchefd++) {
      var vrstw = _24130[gchefd];vrstw['enumerable'] = vrstw['enumerable'] || !0x1, vrstw['configurable'] = !0x0, 'value' in vrstw && (vrstw['writable'] = !0x0), Object['defineProperty'](sxtuvw, vrstw['key'], vrstw);
    }
  }var zyx_$w = new WeakMap();x0y_z(jlkgh, [{ 'key': 'addEventListener', 'value': function (wstuxv, $z0_1) {
      var $0_y1z = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {},
          wvyx = zyx_$w['get'](this);wvyx || zyx_$w['set'](this, wvyx = {}), wvyx[wstuxv] || (wvyx[wstuxv] = []), wvyx[wstuxv]['push']($z0_1), $0_y1z['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), $0_y1z['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), $0_y1z['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
    } }, { 'key': 'removeEventListener', 'value': function (xust, rqust) {
      var ghfi = zyx_$w['get'](this)[xust];if (ghfi && 0x0 < ghfi['length']) {
        for (var tusvqr = ghfi['length']; tusvqr--;) if (ghfi[tusvqr] === rqust) {
          ghfi['splice'](tusvqr, 0x1);break;
        }
      }
    } }, { 'key': 'dispatchEvent', 'value': function () {
      var uxswvt = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {},
          nokjlm = zyx_$w['get'](this)[uxswvt['type']];if (nokjlm) {
        for (var wtsvx = 0x0; wtsvx < nokjlm['length']; wtsvx++) nokjlm[wtsvx](uxswvt);
      }
    } }]), x0y_z = jlkgh;function jlkgh() {
    !function (qrptsu, opqnml) {
      if (!(qrptsu instanceof opqnml)) throw new TypeError('Cannot call a class as a function');
    }(this, jlkgh), zyx_$w['set'](this, {});
  }vzxuwy['default'] = x0y_z;
}, function (plok, molnjk) {
  'use strict';

  Object['defineProperty'](molnjk, '__esModule', { 'value': !0x0 }), molnjk['noop'] = function () {}, molnjk['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (fbead, gijhk, y$1z0) {
  'use strict';

  Object['defineProperty'](gijhk, '__esModule', { 'value': !0x0 }), gijhk['default'] = function () {
    var gjhlki = wx['createCanvas']();return gjhlki['type'] = 'canvas', gjhlki['__proto__']['__proto__'] = new zy_['default']('canvas'), gjhlki['getContext'], (gjhlki['getBoundingClientRect'] = function () {
      return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
    }, gjhlki);
  }, y$1z0(0x3);var zy_ = ceadfb(y$1z0(0x4));ceadfb(y$1z0(0xa));function ceadfb($_10z2) {
    return $_10z2 && $_10z2['__esModule'] ? $_10z2 : { 'default': $_10z2 };
  }
}, function (xwyz_$, fdecb, wvxstu) {
  'use strict';

  Object['defineProperty'](fdecb, '__esModule', { 'value': !0x0 });var cbedfg = function (oklpn) {
    {
      if (oklpn && oklpn['__esModule']) return oklpn;var yvuwt = {};if (null != oklpn) {
        for (var kgjfh in oklpn) Object['prototype']['hasOwnProperty']['call'](oklpn, kgjfh) && (yvuwt[kgjfh] = oklpn[kgjfh]);
      }return yvuwt['default'] = oklpn, yvuwt;
    }
  }(wvxstu(0x1)),
      nmklop = lpoqnm(wvxstu(0x4)),
      promq = lpoqnm(wvxstu(0xb)),
      yx_wz$ = lpoqnm(wvxstu(0xc)),
      rtsuqv = lpoqnm(wvxstu(0x9));function lpoqnm(pomrqn) {
    return pomrqn && pomrqn['__esModule'] ? pomrqn : { 'default': pomrqn };
  }wvxstu(0xf);var ijklhm = {},
      prtqso = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': cbedfg, 'hidden': !0x1, 'style': {}, 'location': cbedfg['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new nmklop['default']('head'), 'body': new nmklop['default']('body'), 'createElement': function (jhefg) {
      return 'canvas' === jhefg ? new rtsuqv['default']() : 'audio' === jhefg ? new yx_wz$['default']() : 'img' === jhefg ? new promq['default']() : new nmklop['default'](jhefg);
    }, 'getElementById': function (loqmnp) {
      return loqmnp === cbedfg['canvas']['id'] ? cbedfg['canvas'] : null;
    }, 'getElementsByTagName': function (zvuxw) {
      return 'head' === zvuxw ? [prtqso['head']] : 'body' === zvuxw ? [prtqso['body']] : 'canvas' === zvuxw ? [cbedfg['canvas']] : [];
    }, 'querySelector': function (becdfg) {
      return 'head' === becdfg ? prtqso['head'] : 'body' === becdfg ? prtqso['body'] : 'canvas' === becdfg || becdfg === '#' + cbedfg['canvas']['id'] ? cbedfg['canvas'] : null;
    }, 'querySelectorAll': function (_1z0$2) {
      return 'head' === _1z0$2 ? [prtqso['head']] : 'body' === _1z0$2 ? [prtqso['body']] : 'canvas' === _1z0$2 ? [cbedfg['canvas']] : [];
    }, 'addEventListener': function (dcb, fgkih) {
      ijklhm[dcb] || (ijklhm[dcb] = []), ijklhm[dcb]['push'](fgkih);
    }, 'removeEventListener': function (ehigfj, uxwtyv) {
      var nopml = ijklhm[ehigfj];if (nopml && 0x0 < nopml['length']) {
        for (var x_yw$z = nopml['length']; x_yw$z--;) if (nopml[x_yw$z] === uxwtyv) {
          nopml['splice'](x_yw$z, 0x1);break;
        }
      }
    }, 'dispatchEvent': function ($xzv) {
      var ihegjf = ijklhm[$xzv['type']];if (ihegjf) {
        for (var ponq = 0x0; ponq < ihegjf['length']; ponq++) ihegjf[ponq]($xzv);
      }
    } };fdecb['default'] = prtqso;
}, function (noql, onpqr) {
  'use strict';

  Object['defineProperty'](onpqr, '__esModule', { 'value': !0x0 }), onpqr['default'] = function () {
    return wx['createImage']();
  };
}, function (prsno, $zxwvy, qupts) {
  'use strict';

  Object['defineProperty']($zxwvy, '__esModule', { 'value': !0x0 });var ursqpt = function (z0y$_1, _yz$0, hfdceg) {
    return _yz$0 && xw$yz_(z0y$_1['prototype'], _yz$0), hfdceg && xw$yz_(z0y$_1, hfdceg), z0y$_1;
  };function xw$yz_(qpnrmo, wvru) {
    for (var wrtsuv = 0x0; wrtsuv < wvru['length']; wrtsuv++) {
      var ywuzv = wvru[wrtsuv];ywuzv['enumerable'] = ywuzv['enumerable'] || !0x1, ywuzv['configurable'] = !0x0, 'value' in ywuzv && (ywuzv['writable'] = !0x0), Object['defineProperty'](qpnrmo, ywuzv['key'], ywuzv);
    }
  }var fkgh = qupts(0xd),
      opnsq = (mknplo = fkgh) && mknplo['__esModule'] ? mknplo : { 'default': mknplo },
      mknplo,
      ghj = qupts(0x8);function nqrsp(uqvtsr, mnkp) {
    if (!uqvtsr) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !mnkp || 'object' != typeof mnkp && 'function' != typeof mnkp ? uqvtsr : mnkp;
  }var nlk = 0x0,
      ebgfdc = 0x1,
      prqom = 0x2,
      bafcde = 0x3,
      rnsqop = 0x4,
      nrposq = new WeakMap(),
      suvqr = new WeakMap();new WeakMap(), new WeakMap(), (function (kjhgif, rpqnm) {
    if ('function' != typeof rpqnm && null !== rpqnm) throw new TypeError('Super expression must either be null or a function, not ' + typeof rpqnm);kjhgif['prototype'] = Object['create'](rpqnm && rpqnm['prototype'], { 'constructor': { 'value': kjhgif, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), rpqnm && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](kjhgif, rpqnm) : kjhgif['__proto__'] = rpqnm);
  }(zvuxwy, opnsq['default']), ursqpt(zvuxwy, [{ 'key': 'load', 'value': function () {
      console['warn']('HTMLAudioElement.load() is not implemented.');
    } }, { 'key': 'play', 'value': function () {
      (0x0, ghj['isSubContext'])() || nrposq['get'](this)['play']();
    } }, { 'key': 'pause', 'value': function () {
      (0x0, ghj['isSubContext'])() || nrposq['get'](this)['pause']();
    } }, { 'key': 'canPlayType', 'value': function () {
      var hmiklj = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return 'string' == typeof hmiklj && (-0x1 < hmiklj['indexOf']('audio/mpeg') || hmiklj['indexOf']('audio/mp4')) ? 'probably' : '';
    } }, { 'key': 'cloneNode', 'value': function () {
      var xzwvy = new zvuxwy();return (0x0, ghj['isSubContext'])() || (xzwvy['loop'] = nrposq['get'](this)['loop'], xzwvy['autoplay'] = nrposq['get'](this)['loop'], xzwvy['src'] = this['src']), xzwvy;
    } }, { 'key': 'currentTime', 'get': function () {
      return (0x0, ghj['isSubContext'])() ? 0x0 : nrposq['get'](this)['currentTime'];
    }, 'set': function ($12_03) {
      (0x0, ghj['isSubContext'])() || nrposq['get'](this)['seek']($12_03);
    } }, { 'key': 'src', 'get': function () {
      return suvqr['get'](this);
    }, 'set': function ($xvw) {
      suvqr['set'](this, $xvw), (0x0, ghj['isSubContext'])() || (nrposq['get'](this)['src'] = $xvw);
    } }, { 'key': 'loop', 'get': function () {
      return !(0x0, ghj['isSubContext'])() && nrposq['get'](this)['loop'];
    }, 'set': function (wyvxut) {
      (0x0, ghj['isSubContext'])() || (nrposq['get'](this)['loop'] = wyvxut);
    } }, { 'key': 'autoplay', 'get': function () {
      return !(0x0, ghj['isSubContext'])() && nrposq['get'](this)['autoplay'];
    }, 'set': function (xwyzv) {
      (0x0, ghj['isSubContext'])() || (nrposq['get'](this)['autoplay'] = xwyzv);
    } }, { 'key': 'paused', 'get': function () {
      return !(0x0, ghj['isSubContext'])() && nrposq['get'](this)['paused'];
    } }]), ursqpt = zvuxwy);function zvuxwy(tsrpo) {
    !function (edbg, pokmln) {
      if (!(edbg instanceof pokmln)) throw new TypeError('Cannot call a class as a function');
    }(this, zvuxwy);var vuwstx = nqrsp(this, (zvuxwy['__proto__'] || Object['getPrototypeOf'](zvuxwy))['call'](this));if (vuwstx['HAVE_NOTHING'] = nlk, vuwstx['HAVE_METADATA'] = ebgfdc, vuwstx['HAVE_CURRENT_DATA'] = prqom, vuwstx['HAVE_FUTURE_DATA'] = bafcde, vuwstx['HAVE_ENOUGH_DATA'] = rnsqop, vuwstx['readyState'] = nlk, (0x0, ghj['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), nqrsp(vuwstx);suvqr['set'](vuwstx, '');var osqn = wx['createInnerAudioContext']();return nrposq['set'](vuwstx, osqn), osqn['onCanplay'](function () {
      vuwstx['dispatchEvent']({ 'type': 'load' }), vuwstx['dispatchEvent']({ 'type': 'loadend' }), vuwstx['dispatchEvent']({ 'type': 'canplay' }), vuwstx['dispatchEvent']({ 'type': 'canplaythrough' }), vuwstx['dispatchEvent']({ 'type': 'loadedmetadata' }), vuwstx['readyState'] = prqom;
    }), osqn['onPlay'](function () {
      vuwstx['dispatchEvent']({ 'type': 'play' });
    }), osqn['onPause'](function () {
      vuwstx['dispatchEvent']({ 'type': 'pause' });
    }), osqn['onEnded'](function () {
      vuwstx['dispatchEvent']({ 'type': 'ended' }), vuwstx['readyState'] = rnsqop;
    }), osqn['onError'](function () {
      vuwstx['dispatchEvent']({ 'type': 'error' });
    }), tsrpo && (nrposq['get'](vuwstx)['src'] = tsrpo), vuwstx;
  }$zxwvy['default'] = ursqpt;
}, function (sxvuwt, $wy_, $_320) {
  'use strict';

  Object['defineProperty']($wy_, '__esModule', { 'value': !0x0 });var lhjmik = $_320(0xe),
      nmlji;(function (snqrpo, nqo) {
    if ('function' != typeof nqo && null !== nqo) throw new TypeError('Super expression must either be null or a function, not ' + typeof nqo);snqrpo['prototype'] = Object['create'](nqo && nqo['prototype'], { 'constructor': { 'value': snqrpo, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), nqo && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](snqrpo, nqo) : snqrpo['__proto__'] = nqo);
  })(cadeb, ((nmlji = lhjmik) && nmlji['__esModule'] ? nmlji : { 'default': nmlji })['default']), $_320 = cadeb;function cadeb() {
    return function (jkgfhi, ejfhi) {
      if (!(jkgfhi instanceof ejfhi)) throw new TypeError('Cannot call a class as a function');
    }(this, cadeb), function (zyuv, y0_z1) {
      if (!zyuv) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !y0_z1 || 'object' != typeof y0_z1 && 'function' != typeof y0_z1 ? zyuv : y0_z1;
    }(this, (cadeb['__proto__'] || Object['getPrototypeOf'](cadeb))['call'](this, 'audio'));
  }$wy_['default'] = $_320;
}, function (hjigl, wzyx_$, vzyxuw) {
  'use strict';

  Object['defineProperty'](wzyx_$, '__esModule', { 'value': !0x0 });var snoprq = function (gjeif, lmkjn, kgjif) {
    return lmkjn && uqrp(gjeif['prototype'], lmkjn), kgjif && uqrp(gjeif, kgjif), gjeif;
  };function uqrp(v$zxy, efdhig) {
    for (var opsrnq = 0x0; opsrnq < efdhig['length']; opsrnq++) {
      var kpo = efdhig[opsrnq];kpo['enumerable'] = kpo['enumerable'] || !0x1, kpo['configurable'] = !0x0, 'value' in kpo && (kpo['writable'] = !0x0), Object['defineProperty'](v$zxy, kpo['key'], kpo);
    }
  }var wruts = vzyxuw(0x4),
      z$120_;(function (yvx$z, wvrsu) {
    if ('function' != typeof wvrsu && null !== wvrsu) throw new TypeError('Super expression must either be null or a function, not ' + typeof wvrsu);yvx$z['prototype'] = Object['create'](wvrsu && wvrsu['prototype'], { 'constructor': { 'value': yvx$z, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), wvrsu && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](yvx$z, wvrsu) : yvx$z['__proto__'] = wvrsu);
  })($201, ((z$120_ = wruts) && z$120_['__esModule'] ? z$120_ : { 'default': z$120_ })['default']), snoprq($201, [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]), snoprq = $201;function $201(ruqtsv) {
    return function (yvuxzw, vruqts) {
      if (!(yvuxzw instanceof vruqts)) throw new TypeError('Cannot call a class as a function');
    }(this, $201), function (otsrpq, sprtoq) {
      if (!otsrpq) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !sprtoq || 'object' != typeof sprtoq && 'function' != typeof sprtoq ? otsrpq : sprtoq;
    }(this, ($201['__proto__'] || Object['getPrototypeOf']($201))['call'](this, ruqtsv));
  }wzyx_$['default'] = snoprq;
}, function (xyzvwu, diehfg, nolpmq) {
  'use strict';

  nolpmq(0x10);
}, function (svxtwu, fhidge, $xz0y) {
  'use strict';

  var vxuwst = function (ecfgh) {
    {
      if (ecfgh && ecfgh['__esModule']) return ecfgh;var pqmlon = {};if (null != ecfgh) {
        for (var fbec in ecfgh) Object['prototype']['hasOwnProperty']['call'](ecfgh, fbec) && (pqmlon[fbec] = ecfgh[fbec]);
      }return pqmlon['default'] = ecfgh, pqmlon;
    }
  }($xz0y(0x1)),
      idge = $xz0y(0xa),
      lpmq = (kilgh = idge) && kilgh['__esModule'] ? kilgh : { 'default': kilgh },
      kilgh,
      hgefi = $xz0y(0x8);function loqp(tvrwu) {
    !function (ljknom, mjhki) {
      if (!(ljknom instanceof mjhki)) throw new TypeError('Cannot call a class as a function');
    }(this, loqp), this['target'] = vxuwst['canvas'], this['currentTarget'] = vxuwst['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = hgefi['noop'], this['stopPropagation'] = hgefi['noop'], this['type'] = tvrwu;
  }function npkol(xw_$y) {
    return function (onmlkj) {
      var npmklo = new loqp(xw_$y);npmklo['touches'] = onmlkj['touches'], npmklo['targetTouches'] = Array['prototype']['slice']['call'](onmlkj['touches']), npmklo['changedTouches'] = onmlkj['changedTouches'], npmklo['timeStamp'] = onmlkj['timeStamp'], lpmq['default']['dispatchEvent'](npmklo);
    };
  }wx['onTouchStart'](npkol('touchstart')), wx['onTouchMove'](npkol('touchmove')), wx['onTouchEnd'](npkol('touchend')), wx['onTouchCancel'](npkol('touchcancel'));
}, function (x_$y, _10$yz) {
  'use strict';

  Object['defineProperty'](_10$yz, '__esModule', { 'value': !0x0 }), _10$yz['noop'] = function () {}, _10$yz['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (hcgef, tpsqu, ebgcdf) {
  'use strict';

  Object['defineProperty'](tpsqu, '__esModule', { 'value': !0x0 }), ebgcdf = ebgcdf(0x8), ebgcdf = { 'platform': wx['getSystemInfoSync']()['platform'], 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': ebgcdf['noop'], 'watchPosition': ebgcdf['noop'], 'clearWatch': ebgcdf['noop'] } }, tpsqu['default'] = ebgcdf;
}, function (mlknp, fedgc) {
  'use strict';

  Object['defineProperty'](fedgc, '__esModule', { 'value': !0x0 });var ghjki = function (khljg, tvuwr, iegjhf) {
    return tvuwr && fdecab(khljg['prototype'], tvuwr), iegjhf && fdecab(khljg, iegjhf), khljg;
  };function fdecab(xwyvt, hjlg) {
    for (var fgjhk = 0x0; fgjhk < hjlg['length']; fgjhk++) {
      var roqmn = hjlg[fgjhk];roqmn['enumerable'] = roqmn['enumerable'] || !0x1, roqmn['configurable'] = !0x0, 'value' in roqmn && (roqmn['writable'] = !0x0), Object['defineProperty'](xwyvt, roqmn['key'], roqmn);
    }
  }var rsutq = new WeakMap(),
      pomnk = new WeakMap(),
      wvyzu = new WeakMap(),
      yxv$z = new WeakMap(),
      wtyu = new WeakMap();function lj(fdaec) {
    if ('function' == typeof this['on' + fdaec]) {
      for (var acbd = arguments['length'], sxwtvu = Array(0x1 < acbd ? acbd - 0x1 : 0x0), klijn = 0x1; klijn < acbd; klijn++) sxwtvu[klijn - 0x1] = arguments[klijn];this['on' + fdaec]['apply'](this, sxwtvu);
    }
  }function xwuy($_zyxw) {
    this['readyState'] = $_zyxw, lj['call'](this, 'readystatechange');
  }ghjki(ghief, [{ 'key': 'abort', 'value': function () {
      var mpnlk = wtyu['get'](this);mpnlk && mpnlk['abort']();
    } }, { 'key': 'getAllResponseHeaders', 'value': function () {
      var x$yw_z = yxv$z['get'](this);return Object['keys'](x$yw_z)['map'](function (cdh) {
        return cdh + ':\x20' + x$yw_z[cdh];
      })['join']('\x0a');
    } }, { 'key': 'getResponseHeader', 'value': function (qronmp) {
      return yxv$z['get'](this)[qronmp];
    } }, { 'key': 'open', 'value': function (gdfceb, ikjlmh) {
      pomnk['set'](this, gdfceb), rsutq['set'](this, ikjlmh), xwuy['call'](this, ghief['OPENED']);
    } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function () {
      var kmihlj = this,
          yz$_ = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';if (this['readyState'] !== ghief['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');wx['request']({ 'data': yz$_, 'url': rsutq['get'](this), 'method': pomnk['get'](this), 'header': wvyzu['get'](this), 'responseType': this['responseType'], 'success': function (txuy) {
          var feihg = txuy['data'],
              twuvy = txuy['statusCode'],
              txuy = txuy['header'];if ('string' != typeof feihg && !(feihg instanceof ArrayBuffer)) try {
            feihg = JSON['stringify'](feihg);
          } catch (jlnkim) {}if (kmihlj['status'] = twuvy, yxv$z['set'](kmihlj, txuy), lj['call'](kmihlj, 'loadstart'), xwuy['call'](kmihlj, ghief['HEADERS_RECEIVED']), xwuy['call'](kmihlj, ghief['LOADING']), (kmihlj['response'] = feihg) instanceof ArrayBuffer) {
            kmihlj['responseText'] = '';var dbaf = new Uint8Array(feihg),
                sprutq = dbaf['byteLength'];for (var tswvx = 0x0; tswvx < sprutq; tswvx++) kmihlj['responseText'] += String['fromCharCode'](dbaf[tswvx]);
          } else kmihlj['responseText'] = feihg;xwuy['call'](kmihlj, ghief['DONE']), lj['call'](kmihlj, 'load'), lj['call'](kmihlj, 'loadend');
        }, 'fail': function (zyv$w) {
          zyv$w = zyv$w['errMsg'], (-0x1 !== zyv$w['indexOf']('abort') ? lj['call'](kmihlj, 'abort') : lj['call'](kmihlj, 'error', zyv$w), lj['call'](kmihlj, 'loadend'));
        } });
    } }, { 'key': 'setRequestHeader', 'value': function (opqnrm, _z0$21) {
      var omlknj = wvyzu['get'](this);omlknj[opqnrm] = _z0$21, wvyzu['set'](this, omlknj);
    } }]), ghjki = ghief;function ghief() {
    !function (fdcghe, qorpm) {
      if (!(fdcghe instanceof qorpm)) throw new TypeError('Cannot call a class as a function');
    }(this, ghief), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = !0x1, wvyzu['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), yxv$z['set'](this, {});
  }ghjki['UNSEND'] = 0x0, ghjki['OPENED'] = 0x1, ghjki['HEADERS_RECEIVED'] = 0x2, ghjki['LOADING'] = 0x3, ghjki['DONE'] = 0x4, fedgc['default'] = ghjki;
}, function (rqtu, vtwuxs, edfch) {
  'use strict';

  Object['defineProperty'](vtwuxs, '__esModule', { 'value': !0x0 });var inmlk = function (uvsrw, yuwtv, jnmokl) {
    return yuwtv && wtvxus(uvsrw['prototype'], yuwtv), jnmokl && wtvxus(uvsrw, jnmokl), uvsrw;
  };function wtvxus(hjkgl, jikhlg) {
    for (var $_013 = 0x0; $_013 < jikhlg['length']; $_013++) {
      var yxz_0 = jikhlg[$_013];yxz_0['enumerable'] = yxz_0['enumerable'] || !0x1, yxz_0['configurable'] = !0x0, 'value' in yxz_0 && (yxz_0['writable'] = !0x0), Object['defineProperty'](hjkgl, yxz_0['key'], yxz_0);
    }
  }var lkmno = edfch(0x8),
      twsrv = new WeakMap();inmlk(uqrsvt, [{ 'key': 'close', 'value': function (cdfeg, jikhf) {
      this['readyState'] = uqrsvt['CLOSING'], twsrv['get'](this)['close']({ 'code': cdfeg, 'reason': jikhf });
    } }, { 'key': 'send', 'value': function (cfdbae) {
      if ('string' != typeof cfdbae && !(cfdbae instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + cfdbae + ' is invalid');twsrv['get'](this)['send']({ 'data': cfdbae });
    } }]), inmlk = uqrsvt;function uqrsvt(_$0132) {
    var sqop = this,
        ikhgj = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function (wsuvt, vwsutx) {
      if (!(wsuvt instanceof vwsutx)) throw new TypeError('Cannot call a class as a function');
    }(this, uqrsvt), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, (0x0, lkmno['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if ('string' != typeof _$0132 || !/(^ws:\/\/)|(^wss:\/\/)/['test'](_$0132)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + _$0132 + '\' is invalid');return this['url'] = _$0132, this['readyState'] = uqrsvt['CONNECTING'], ikhgj = wx['connectSocket']({ 'url': _$0132, 'protocols': Array['isArray'](ikhgj) ? ikhgj : [ikhgj] }), (twsrv['set'](this, ikhgj), ikhgj['onClose'](function (ptrqso) {
      sqop['readyState'] = uqrsvt['CLOSED'], 'function' == typeof sqop['onclose'] && sqop['onclose'](ptrqso);
    }), ikhgj['onMessage'](function (y$wzv) {
      'function' == typeof sqop['onmessage'] && sqop['onmessage'](y$wzv);
    }), ikhgj['onOpen'](function () {
      sqop['readyState'] = uqrsvt['OPEN'], 'function' == typeof sqop['onopen'] && sqop['onopen']();
    }), ikhgj['onError'](function (xyvz$w) {
      'function' == typeof sqop['onerror'] && sqop['onerror'](new Error(xyvz$w['errMsg']));
    }), this);
  }inmlk['CONNECTING'] = 0x0, inmlk['OPEN'] = 0x1, inmlk['CLOSING'] = 0x2, inmlk['CLOSED'] = 0x3, vtwuxs['default'] = inmlk;
}, function (xvwyut, lnji, _zy0) {
  'use strict';

  Object['defineProperty'](lnji, '__esModule', { 'value': !0x0 });var rsupqt = function (rwsuvt, z21_, _z$2) {
    return z21_ && tvuxwy(rwsuvt['prototype'], z21_), _z$2 && tvuxwy(rwsuvt, _z$2), rwsuvt;
  };function tvuxwy(lonmk, nmpq) {
    for (var ghjlk = 0x0; ghjlk < nmpq['length']; ghjlk++) {
      var sxvw = nmpq[ghjlk];sxvw['enumerable'] = sxvw['enumerable'] || !0x1, sxvw['configurable'] = !0x0, 'value' in sxvw && (sxvw['writable'] = !0x0), Object['defineProperty'](lonmk, sxvw['key'], sxvw);
    }
  }var _2$031 = _zy0(0x8);rsupqt($2_130, [{ 'key': 'construct', 'value': function () {
      if ((0x0, _2$031['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
    } }]), rsupqt = $2_130;function $2_130() {
    !function (rqvs, qposnr) {
      if (!(rqvs instanceof qposnr)) throw new TypeError('Cannot call a class as a function');
    }(this, $2_130);
  }lnji['default'] = rsupqt;
}, function (lpmnoq, ljghki, gjhkf) {
  'use strict';

  Object['defineProperty'](ljghki, '__esModule', { 'value': !0x0 });var z12$0 = gjhkf(0x8),
      kmhil = { get 'length'() {
      return wx['getStorageInfoSync']()['keys']['length'];
    }, 'key': function (utvsx) {
      return wx['getStorageInfoSync']()['keys'][utvsx];
    }, 'getItem': function (ecfbdg) {
      return wx['getStorageSync'](ecfbdg);
    }, 'setItem': function (pnqsr, knmop) {
      return wx['setStorageSync'](pnqsr, knmop);
    }, 'removeItem': function (ospqn) {
      wx['removeStorageSync'](ospqn);
    }, 'clear': function () {
      wx['clearStorageSync']();
    } },
      hfgk = {};gjhkf = { get 'length'() {
      return Object['keys'](hfgk)['length'];
    }, 'key': function (kjmnlo) {
      return Object['keys'](hfgk)[kjmnlo];
    }, 'getItem': function (ihfedg) {
      return hfgk[ihfedg];
    }, 'setItem': function (hk, trops) {
      hfgk[hk] = trops;
    }, 'removeItem': function (_32140) {
      delete hfgk[_32140];
    }, 'clear': function () {
      hfgk = {};
    } }, kmhil = (0x0, z12$0['isSubContext'])() ? gjhkf : kmhil, ljghki['default'] = kmhil;
}, function (tqupsr, spuqt) {
  'use strict';

  Object['defineProperty'](spuqt, '__esModule', { 'value': !0x0 }), spuqt['default'] = { 'href': 'bbbgame.js', 'reload': function () {} };
}]);