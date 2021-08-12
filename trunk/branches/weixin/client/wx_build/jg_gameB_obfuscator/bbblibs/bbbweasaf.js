var _ = wx.y$;
var _doptqr = wx['y$'];!function (kghij) {
  var jlkni = {};function __webpack_require__(trvsuw) {
    if (jlkni[trvsuw]) return jlkni[trvsuw]['exports'];var mnl = jlkni[trvsuw] = { 'exports': {}, 'id': trvsuw, 'loaded': !0x1 };return kghij[trvsuw]['call'](mnl['exports'], mnl, mnl['exports'], __webpack_require__), mnl['loaded'] = !0x0, mnl['exports'];
  }__webpack_require__['m'] = kghij, __webpack_require__['c'] = jlkni, __webpack_require__['p'] = '', __webpack_require__(0x0);
}([function (fhjk, $zyx_w, fhjgik) {
  'use strict';

  var nmokj = function (ropts) {
    if (ropts && ropts['__esModule']) return ropts;var mrqn = {};if (null != ropts) {
      for (var y_zw$x in ropts) Object['prototype']['hasOwnProperty']['call'](ropts, y_zw$x) && (mrqn[y_zw$x] = ropts[y_zw$x]);
    }return mrqn['default'] = ropts, mrqn;
  }(fhjgik(0x1));fhjgik = fhjgik(0x4);var dfacb = fhjgik && fhjgik['__esModule'] ? fhjgik : { 'default': fhjgik },
      fchdeg = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
    nmokj['addEventListener'] = function (xy0_, pronsq) {
      nmokj['document']['addEventListener'](xy0_, pronsq);
    }, nmokj['removeEventListener'] = function (qpmonr, kmonpl) {
      nmokj['document']['removeEventListener'](qpmonr, kmonpl);
    }, nmokj['canvas'] && (nmokj['canvas']['addEventListener'] = nmokj['addEventListener'], nmokj['canvas']['removeEventListener'] = nmokj['removeEventListener']), fchdeg['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new dfacb['default']('canvas'), sharedCanvas['addEventListener'] = nmokj['addEventListener'], sharedCanvas['removeEventListener'] = nmokj['removeEventListener']);var lnopq = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === lnopq) {
      for (var swvt in nmokj) {
        var jgkhli = Object['getOwnPropertyDescriptor'](fchdeg, swvt);jgkhli && !0x0 !== jgkhli['configurable'] || Object['defineProperty'](window, swvt, { 'value': nmokj[swvt] });
      }for (var x0z_y$ in nmokj['document']) {
        var wvuz = Object['getOwnPropertyDescriptor'](fchdeg['document'], x0z_y$);wvuz && !0x0 !== wvuz['configurable'] || Object['defineProperty'](fchdeg['document'], x0z_y$, { 'value': nmokj['document'][x0z_y$] });
      }window['parent'] = window;
    } else {
      for (var nolmq in nmokj) fchdeg[nolmq] = nmokj[nolmq];fchdeg['window'] = nmokj, window = fchdeg, window['top'] = window['parent'] = window;
    }
  }());
}, function (hdgfi, ie, z$12_0) {
  'use strict';

  Object['defineProperty'](ie, '__esModule', { 'value': !0x0 }), ie['cancelAnimationFrame'] = ie['requestAnimationFrame'] = ie['clearInterval'] = ie['clearTimeout'] = ie['setInterval'] = ie['setTimeout'] = ie['canvas'] = ie['location'] = ie['localStorage'] = ie['HTMLElement'] = ie['FileReader'] = ie['Audio'] = ie['Image'] = ie['WebSocket'] = ie['XMLHttpRequest'] = ie['navigator'] = ie['document'] = void 0x0;var zvx$w = z$12_0(0x2);Object['keys'](zvx$w)['forEach'](function (hfdei) {
    'default' !== hfdei && '__esModule' !== hfdei && Object['defineProperty'](ie, hfdei, { 'enumerable': !0x0, 'get': function () {
        return zvx$w[hfdei];
      } });
  });var w$y_ = z$12_0(0x3);Object['keys'](w$y_)['forEach'](function (srtpqo) {
    'default' !== srtpqo && '__esModule' !== srtpqo && Object['defineProperty'](ie, srtpqo, { 'enumerable': !0x0, 'get': function () {
        return w$y_[srtpqo];
      } });
  });var rsqop = kgijh(z$12_0(0x9)),
      dhefcg = z$12_0(0x11),
      pqmr = kgijh(z$12_0(0xa)),
      npml = kgijh(z$12_0(0x12)),
      yuvxwz = kgijh(z$12_0(0x13)),
      hjg = kgijh(z$12_0(0x14)),
      nko = kgijh(z$12_0(0xb)),
      z$y0x = kgijh(z$12_0(0xc)),
      yvwzx = kgijh(z$12_0(0x15)),
      tprus = kgijh(z$12_0(0x4)),
      gjklhi = kgijh(z$12_0(0x16));function kgijh(cafdb) {
    return cafdb && cafdb['__esModule'] ? cafdb : { 'default': cafdb };
  }z$12_0 = kgijh(z$12_0(0x17)), ie['document'] = pqmr['default'], ie['navigator'] = npml['default'], ie['XMLHttpRequest'] = yuvxwz['default'], ie['WebSocket'] = hjg['default'], ie['Image'] = nko['default'], ie['Audio'] = z$y0x['default'], ie['FileReader'] = yvwzx['default'], ie['HTMLElement'] = tprus['default'], ie['localStorage'] = gjklhi['default'], ie['location'] = z$12_0['default'], rsqop = (0x0, dhefcg['isSubContext'])() ? void 0x0 : new rsqop['default'](), ie['canvas'] = rsqop, ie['setTimeout'] = setTimeout, ie['setInterval'] = setInterval, ie['clearTimeout'] = clearTimeout, ie['clearInterval'] = clearInterval, ie['requestAnimationFrame'] = requestAnimationFrame, ie['cancelAnimationFrame'] = cancelAnimationFrame;
}, function (vuwrs, lmjkh) {
  'use strict';

  Object['defineProperty'](lmjkh, '__esModule', { 'value': !0x0 });var ghjfk = (hilkgj = wx['getSystemInfoSync']())['screenWidth'],
      _y$zw = hilkgj['screenHeight'],
      hilkgj = hilkgj['devicePixelRatio'];ghjfk = lmjkh['innerWidth'] = ghjfk, _y$zw = lmjkh['innerHeight'] = _y$zw, lmjkh['devicePixelRatio'] = hilkgj, lmjkh['screen'] = { 'availWidth': ghjfk, 'availHeight': _y$zw }, lmjkh['performance'] = { 'now': function () {
      return Date['now']() / 0x3e8;
    } }, lmjkh['ontouchstart'] = null, lmjkh['ontouchmove'] = null, lmjkh['ontouchend'] = null;
}, function (cbaef, onmlq, nqr) {
  'use strict';

  Object['defineProperty'](onmlq, '__esModule', { 'value': !0x0 }), onmlq['HTMLCanvasElement'] = onmlq['HTMLImageElement'] = void 0x0;var idfheg = nqr(0x4);function qorspn(wuvtyx, qmnpr) {
    if (!(wuvtyx instanceof qmnpr)) throw new TypeError('Cannot call a class as a function');
  }function jkomln(fegjih, sortq) {
    if (!fegjih) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !sortq || 'object' != typeof sortq && 'function' != typeof sortq ? fegjih : sortq;
  }function xw$yz_(imhk, kmjonl) {
    if ('function' != typeof kmjonl && null !== kmjonl) throw new TypeError('Super expression must either be null or a function, not ' + typeof kmjonl);imhk['prototype'] = Object['create'](kmjonl && kmjonl['prototype'], { 'constructor': { 'value': imhk, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), kmjonl && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](imhk, kmjonl) : imhk['__proto__'] = kmjonl);
  }function lkmno() {
    return qorspn(this, lkmno), jkomln(this, (lkmno['__proto__'] || Object['getPrototypeOf'](lkmno))['call'](this, 'img'));
  }function sput() {
    return qorspn(this, sput), jkomln(this, (sput['__proto__'] || Object['getPrototypeOf'](sput))['call'](this, 'canvas'));
  }nqr = idfheg && idfheg['__esModule'] ? idfheg : { 'default': idfheg }, onmlq['HTMLImageElement'] = (xw$yz_(lkmno, nqr['default']), lkmno), onmlq['HTMLCanvasElement'] = (xw$yz_(sput, nqr['default']), sput);
}, function (rpnmoq, iljnmk, z1_$0) {
  'use strict';

  Object['defineProperty'](iljnmk, '__esModule', { 'value': !0x0 });var ebacf = function ($yzx_, zxywv$, ponsr) {
    return zxywv$ && lpn($yzx_['prototype'], zxywv$), ponsr && lpn($yzx_, ponsr), $yzx_;
  };function lpn(nlpmko, vrtusq) {
    for (var dgbe = 0x0; dgbe < vrtusq['length']; dgbe++) {
      var lhji = vrtusq[dgbe];lhji['enumerable'] = lhji['enumerable'] || !0x1, lhji['configurable'] = !0x0, 'value' in lhji && (lhji['writable'] = !0x0), Object['defineProperty'](nlpmko, lhji['key'], lhji);
    }
  }var nrqom = z1_$0(0x5);nrqom = nrqom && nrqom['__esModule'] ? nrqom : { 'default': nrqom };var lnqomp = z1_$0(0x8),
      eihgjf = z1_$0(0x2);function hdfc() {
    var wtsvru = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';!function (nqmop) {
      if (!(nqmop instanceof hdfc)) throw new TypeError('Cannot call a class as a function');
    }(this);var y0_zx$ = function (nrqspo, twsxu) {
      if (!nrqspo) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !twsxu || 'object' != typeof twsxu && 'function' != typeof twsxu ? nrqspo : twsxu;
    }(this, (hdfc['__proto__'] || Object['getPrototypeOf'](hdfc))['call'](this));return y0_zx$['className'] = '', y0_zx$['childern'] = [], y0_zx$['style'] = { 'width': eihgjf['innerWidth'] + 'px', 'height': eihgjf['innerHeight'] + 'px' }, y0_zx$['insertBefore'] = lnqomp['noop'], y0_zx$['innerHTML'] = '', y0_zx$['tagName'] = wtsvru['toUpperCase'](), y0_zx$;
  }(function (ghfij, qtsvur) {
    if ('function' != typeof qtsvur && null !== qtsvur) throw new TypeError('Super expression must either be null or a function, not ' + typeof qtsvur);ghfij['prototype'] = Object['create'](qtsvur && qtsvur['prototype'], { 'constructor': { 'value': ghfij, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), qtsvur && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](ghfij, qtsvur) : ghfij['__proto__'] = qtsvur);
  })(hdfc, nrqom['default']), ebacf(hdfc, [{ 'key': 'setAttribute', 'value': function (_zy0$x, uyx) {
      this[_zy0$x] = uyx;
    } }, { 'key': 'getAttribute', 'value': function (vutsqr) {
      return this[vutsqr];
    } }, { 'key': 'getBoundingClientRect', 'value': function () {
      return { 'top': 0x0, 'left': 0x0, 'width': eihgjf['innerWidth'], 'height': eihgjf['innerHeight'] };
    } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
      var tsxvwu = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](tsxvwu) ? 0x0 : tsxvwu;
    } }, { 'key': 'clientHeight', 'get': function () {
      var ompnr = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](ompnr) ? 0x0 : ompnr;
    } }]), ebacf = hdfc, iljnmk['default'] = ebacf;
}, function (yzxw$, nlompq, wvsux) {
  'use strict';

  Object['defineProperty'](nlompq, '__esModule', { 'value': !0x0 });var eabfcd = wvsux(0x6);function zy$vx() {
    !function (egfhc) {
      if (!(egfhc instanceof zy$vx)) throw new TypeError('Cannot call a class as a function');
    }(this);var hjge = function (snqop, wyu) {
      if (!snqop) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !wyu || 'object' != typeof wyu && 'function' != typeof wyu ? snqop : wyu;
    }(this, (zy$vx['__proto__'] || Object['getPrototypeOf'](zy$vx))['call'](this));return hjge['className'] = '', hjge['children'] = [], hjge;
  }(function (tqvrsu, feadc) {
    if ('function' != typeof feadc && null !== feadc) throw new TypeError('Super expression must either be null or a function, not ' + typeof feadc);tqvrsu['prototype'] = Object['create'](feadc && feadc['prototype'], { 'constructor': { 'value': tqvrsu, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), feadc && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](tqvrsu, feadc) : tqvrsu['__proto__'] = feadc);
  })(zy$vx, (eabfcd && eabfcd['__esModule'] ? eabfcd : { 'default': eabfcd })['default']), wvsux = zy$vx, nlompq['default'] = wvsux;
}, function (edfhg, moplq, wrtvu) {
  'use strict';

  Object['defineProperty'](moplq, '__esModule', { 'value': !0x0 });var yxvz$ = function (ploqm, yz_x0, _2$z01) {
    return yz_x0 && mnorpq(ploqm['prototype'], yz_x0), _2$z01 && mnorpq(ploqm, _2$z01), ploqm;
  };function mnorpq(mjlkin, jlmih) {
    for (var uwy = 0x0; uwy < jlmih['length']; uwy++) {
      var ehfdgc = jlmih[uwy];ehfdgc['enumerable'] = ehfdgc['enumerable'] || !0x1, ehfdgc['configurable'] = !0x0, 'value' in ehfdgc && (ehfdgc['writable'] = !0x0), Object['defineProperty'](mjlkin, ehfdgc['key'], ehfdgc);
    }
  }wrtvu = wrtvu(0x7);function ruswvt() {
    !function (psuqt) {
      if (!(psuqt instanceof ruswvt)) throw new TypeError('Cannot call a class as a function');
    }(this);var qsturv = function (konl, zwyux) {
      if (!konl) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !zwyux || 'object' != typeof zwyux && 'function' != typeof zwyux ? konl : zwyux;
    }(this, (ruswvt['__proto__'] || Object['getPrototypeOf'](ruswvt))['call'](this));return qsturv['childNodes'] = [], qsturv;
  }(function (jlmnko, cdhgfe) {
    if ('function' != typeof cdhgfe && null !== cdhgfe) throw new TypeError('Super expression must either be null or a function, not ' + typeof cdhgfe);jlmnko['prototype'] = Object['create'](cdhgfe && cdhgfe['prototype'], { 'constructor': { 'value': jlmnko, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), cdhgfe && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](jlmnko, cdhgfe) : jlmnko['__proto__'] = cdhgfe);
  })(ruswvt, (wrtvu && wrtvu['__esModule'] ? wrtvu : { 'default': wrtvu })['default']), yxvz$(ruswvt, [{ 'key': 'appendChild', 'value': function (psoqt) {
      if (!(psoqt instanceof ruswvt)) throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');this['childNodes']['push'](psoqt);
    } }, { 'key': 'cloneNode', 'value': function () {
      var _20z = Object['create'](this);return Object['assign'](_20z, this), _20z;
    } }, { 'key': 'removeChild', 'value': function (wtusxv) {
      var jhigkf = this['childNodes']['findIndex'](function (tqsor) {
        return tqsor === wtusxv;
      });return -0x1 < jhigkf ? this['childNodes']['splice'](jhigkf, 0x1) : null;
    } }]), yxvz$ = ruswvt, moplq['default'] = yxvz$;
}, function (tsorqp, eifhg) {
  'use strict';

  Object['defineProperty'](eifhg, '__esModule', { 'value': !0x0 });var nplokm = function (ijknml, prnqmo, utsvr) {
    return prnqmo && quvrt(ijknml['prototype'], prnqmo), utsvr && quvrt(ijknml, utsvr), ijknml;
  };function quvrt(olkpm, rsqput) {
    for (var pnomk = 0x0; pnomk < rsqput['length']; pnomk++) {
      var ehdfgi = rsqput[pnomk];ehdfgi['enumerable'] = ehdfgi['enumerable'] || !0x1, ehdfgi['configurable'] = !0x0, 'value' in ehdfgi && (ehdfgi['writable'] = !0x0), Object['defineProperty'](olkpm, ehdfgi['key'], ehdfgi);
    }
  }var pkmon = new WeakMap();function kmjlo() {
    !function (qrstuv) {
      if (!(qrstuv instanceof kmjlo)) throw new TypeError('Cannot call a class as a function');
    }(this), pkmon['set'](this, {});
  }nplokm(kmjlo, [{ 'key': 'addEventListener', 'value': function (ljgkih, jinkm) {
      var mlnpq = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {},
          ikjhlm = pkmon['get'](this);ikjhlm || pkmon['set'](this, ikjhlm = {}), ikjhlm[ljgkih] || (ikjhlm[ljgkih] = []), ikjhlm[ljgkih]['push'](jinkm), mlnpq['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), mlnpq['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), mlnpq['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
    } }, { 'key': 'removeEventListener', 'value': function (nlkj, rnsoqp) {
      var mrpnqo = pkmon['get'](this)[nlkj];if (mrpnqo && 0x0 < mrpnqo['length']) {
        for (var vrstqu = mrpnqo['length']; vrstqu--;) if (mrpnqo[vrstqu] === rnsoqp) {
          mrpnqo['splice'](vrstqu, 0x1);break;
        }
      }
    } }, { 'key': 'dispatchEvent', 'value': function () {
      var jghikl = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {},
          wvsx = pkmon['get'](this)[jghikl['type']];if (wvsx) {
        for (var jlhgk = 0x0; jlhgk < wvsx['length']; jlhgk++) wvsx[jlhgk](jghikl);
      }
    } }]), eifhg['default'] = kmjlo;
}, function (tsurq, tqopr) {
  'use strict';

  Object['defineProperty'](tqopr, '__esModule', { 'value': !0x0 }), tqopr['noop'] = function () {}, tqopr['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (_zxy0$, zy_01, npol) {
  'use strict';

  Object['defineProperty'](zy_01, '__esModule', { 'value': !0x0 }), zy_01['default'] = function () {
    var qtvsur = wx['createCanvas']();return qtvsur['type'] = 'canvas', qtvsur['__proto__']['__proto__'] = new dfgh['default']('canvas'), qtvsur['getContext'], qtvsur['getBoundingClientRect'] = function () {
      return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
    }, qtvsur;
  }, npol(0x3);var dfgh = gec(npol(0x4));function gec(lknjo) {
    return lknjo && lknjo['__esModule'] ? lknjo : { 'default': lknjo };
  }gec(npol(0xa));
}, function (kjghil, kjinlm, mopnl) {
  'use strict';

  Object['defineProperty'](kjinlm, '__esModule', { 'value': !0x0 });var bdefac = function (hdgcf) {
    if (hdgcf && hdgcf['__esModule']) return hdgcf;var qponmr = {};if (null != hdgcf) {
      for (var jkilmn in hdgcf) Object['prototype']['hasOwnProperty']['call'](hdgcf, jkilmn) && (qponmr[jkilmn] = hdgcf[jkilmn]);
    }return qponmr['default'] = hdgcf, qponmr;
  }(mopnl(0x1)),
      hfgdc = yvzx(mopnl(0x4)),
      dcfgbe = yvzx(mopnl(0xb)),
      vrtsuq = yvzx(mopnl(0xc)),
      _$z012 = yvzx(mopnl(0x9));function yvzx(idhge) {
    return idhge && idhge['__esModule'] ? idhge : { 'default': idhge };
  }mopnl(0xf);var ijglkh = {},
      echdg = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': bdefac, 'hidden': !0x1, 'style': {}, 'location': bdefac['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new hfgdc['default']('head'), 'body': new hfgdc['default']('body'), 'createElement': function (igkhf) {
      return 'canvas' === igkhf ? new _$z012['default']() : 'audio' === igkhf ? new vrtsuq['default']() : 'img' === igkhf ? new dcfgbe['default']() : new hfgdc['default'](igkhf);
    }, 'getElementById': function (yxwuzv) {
      return yxwuzv === bdefac['canvas']['id'] ? bdefac['canvas'] : null;
    }, 'getElementsByTagName': function (rqtpu) {
      return 'head' === rqtpu ? [echdg['head']] : 'body' === rqtpu ? [echdg['body']] : 'canvas' === rqtpu ? [bdefac['canvas']] : [];
    }, 'querySelector': function (nkpo) {
      return 'head' === nkpo ? echdg['head'] : 'body' === nkpo ? echdg['body'] : 'canvas' === nkpo || nkpo === '#' + bdefac['canvas']['id'] ? bdefac['canvas'] : null;
    }, 'querySelectorAll': function (rospq) {
      return 'head' === rospq ? [echdg['head']] : 'body' === rospq ? [echdg['body']] : 'canvas' === rospq ? [bdefac['canvas']] : [];
    }, 'addEventListener': function (fedigh, putqr) {
      ijglkh[fedigh] || (ijglkh[fedigh] = []), ijglkh[fedigh]['push'](putqr);
    }, 'removeEventListener': function (w_$y, npmqlo) {
      var _xy0z$ = ijglkh[w_$y];if (_xy0z$ && 0x0 < _xy0z$['length']) {
        for (var dgch = _xy0z$['length']; dgch--;) if (_xy0z$[dgch] === npmqlo) {
          _xy0z$['splice'](dgch, 0x1);break;
        }
      }
    }, 'dispatchEvent': function (uqtr) {
      var kjni = ijglkh[uqtr['type']];if (kjni) {
        for (var vtuyw = 0x0; vtuyw < kjni['length']; vtuyw++) kjni[vtuyw](uqtr);
      }
    } };kjinlm['default'] = echdg;
}, function (nilkj, qsuv) {
  'use strict';

  Object['defineProperty'](qsuv, '__esModule', { 'value': !0x0 }), qsuv['default'] = function () {
    return wx['createImage']();
  };
}, function ($wzvy, mrnp, vusxwt) {
  'use strict';

  Object['defineProperty'](mrnp, '__esModule', { 'value': !0x0 });var onsqp = function ($_1yz0, wsrvt, _104) {
    return wsrvt && xzy_w$($_1yz0['prototype'], wsrvt), _104 && xzy_w$($_1yz0, _104), $_1yz0;
  };function xzy_w$(xw_yz$, zyvwux) {
    for (var ln = 0x0; ln < zyvwux['length']; ln++) {
      var wtuxs = zyvwux[ln];wtuxs['enumerable'] = wtuxs['enumerable'] || !0x1, wtuxs['configurable'] = !0x0, 'value' in wtuxs && (wtuxs['writable'] = !0x0), Object['defineProperty'](xw_yz$, wtuxs['key'], wtuxs);
    }
  }var onmqlp = vusxwt(0xd);onmqlp = onmqlp && onmqlp['__esModule'] ? onmqlp : { 'default': onmqlp };var pustr = vusxwt(0x8);function tpuqr(ijhklm, troqp) {
    if (!ijhklm) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !troqp || 'object' != typeof troqp && 'function' != typeof troqp ? ijhklm : troqp;
  }var z_0$12 = 0x0,
      fkghj = 0x1,
      vsqtu = 0x2,
      fgbec = 0x3,
      gcebd = 0x4,
      orsn = new WeakMap(),
      jfeg = new WeakMap();function hejgi(inlmj) {
    !function (vwyz$) {
      if (!(vwyz$ instanceof hejgi)) throw new TypeError('Cannot call a class as a function');
    }(this);var nqosr = tpuqr(this, (hejgi['__proto__'] || Object['getPrototypeOf'](hejgi))['call'](this));if (nqosr['HAVE_NOTHING'] = z_0$12, nqosr['HAVE_METADATA'] = fkghj, nqosr['HAVE_CURRENT_DATA'] = vsqtu, nqosr['HAVE_FUTURE_DATA'] = fgbec, nqosr['HAVE_ENOUGH_DATA'] = gcebd, nqosr['readyState'] = z_0$12, (0x0, pustr['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), tpuqr(nqosr);jfeg['set'](nqosr, '');var $_z12 = wx['createInnerAudioContext']();return orsn['set'](nqosr, $_z12), $_z12['onCanplay'](function () {
      nqosr['dispatchEvent']({ 'type': 'load' }), nqosr['dispatchEvent']({ 'type': 'loadend' }), nqosr['dispatchEvent']({ 'type': 'canplay' }), nqosr['dispatchEvent']({ 'type': 'canplaythrough' }), nqosr['dispatchEvent']({ 'type': 'loadedmetadata' }), nqosr['readyState'] = vsqtu;
    }), $_z12['onPlay'](function () {
      nqosr['dispatchEvent']({ 'type': 'play' });
    }), $_z12['onPause'](function () {
      nqosr['dispatchEvent']({ 'type': 'pause' });
    }), $_z12['onEnded'](function () {
      nqosr['dispatchEvent']({ 'type': 'ended' }), nqosr['readyState'] = gcebd;
    }), $_z12['onError'](function () {
      nqosr['dispatchEvent']({ 'type': 'error' });
    }), inlmj && (orsn['get'](nqosr)['src'] = inlmj), nqosr;
  }new WeakMap(), new WeakMap(), function (mokpn, fbe) {
    if ('function' != typeof fbe && null !== fbe) throw new TypeError('Super expression must either be null or a function, not ' + typeof fbe);mokpn['prototype'] = Object['create'](fbe && fbe['prototype'], { 'constructor': { 'value': mokpn, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), fbe && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](mokpn, fbe) : mokpn['__proto__'] = fbe);
  }(hejgi, onmqlp['default']), onsqp(hejgi, [{ 'key': 'load', 'value': function () {
      console['warn']('HTMLAudioElement.load() is not implemented.');
    } }, { 'key': 'play', 'value': function () {
      (0x0, pustr['isSubContext'])() || orsn['get'](this)['play']();
    } }, { 'key': 'pause', 'value': function () {
      (0x0, pustr['isSubContext'])() || orsn['get'](this)['pause']();
    } }, { 'key': 'canPlayType', 'value': function () {
      var wutsv = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return 'string' == typeof wutsv && (-0x1 < wutsv['indexOf']('audio/mpeg') || wutsv['indexOf']('audio/mp4')) ? 'probably' : '';
    } }, { 'key': 'cloneNode', 'value': function () {
      var prus = new hejgi();return (0x0, pustr['isSubContext'])() || (prus['loop'] = orsn['get'](this)['loop'], prus['autoplay'] = orsn['get'](this)['loop'], prus['src'] = this['src']), prus;
    } }, { 'key': 'currentTime', 'get': function () {
      return (0x0, pustr['isSubContext'])() ? 0x0 : orsn['get'](this)['currentTime'];
    }, 'set': function (hecdf) {
      (0x0, pustr['isSubContext'])() || orsn['get'](this)['seek'](hecdf);
    } }, { 'key': 'src', 'get': function () {
      return jfeg['get'](this);
    }, 'set': function (lnmpok) {
      jfeg['set'](this, lnmpok), (0x0, pustr['isSubContext'])() || (orsn['get'](this)['src'] = lnmpok);
    } }, { 'key': 'loop', 'get': function () {
      return !(0x0, pustr['isSubContext'])() && orsn['get'](this)['loop'];
    }, 'set': function (opsrnq) {
      (0x0, pustr['isSubContext'])() || (orsn['get'](this)['loop'] = opsrnq);
    } }, { 'key': 'autoplay', 'get': function () {
      return !(0x0, pustr['isSubContext'])() && orsn['get'](this)['autoplay'];
    }, 'set': function (gjilh) {
      (0x0, pustr['isSubContext'])() || (orsn['get'](this)['autoplay'] = gjilh);
    } }, { 'key': 'paused', 'get': function () {
      return !(0x0, pustr['isSubContext'])() && orsn['get'](this)['paused'];
    } }]), onsqp = hejgi, mrnp['default'] = onsqp;
}, function (bfcead, wyx$_, _02$1z) {
  'use strict';

  Object['defineProperty'](wyx$_, '__esModule', { 'value': !0x0 });var mjkihl = _02$1z(0xe);function cda() {
    return function (fkh) {
      if (!(fkh instanceof cda)) throw new TypeError('Cannot call a class as a function');
    }(this), function (fgehc, fhijeg) {
      if (!fgehc) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !fhijeg || 'object' != typeof fhijeg && 'function' != typeof fhijeg ? fgehc : fhijeg;
    }(this, (cda['__proto__'] || Object['getPrototypeOf'](cda))['call'](this, 'audio'));
  }(function (lnkjom, sqtru) {
    if ('function' != typeof sqtru && null !== sqtru) throw new TypeError('Super expression must either be null or a function, not ' + typeof sqtru);lnkjom['prototype'] = Object['create'](sqtru && sqtru['prototype'], { 'constructor': { 'value': lnkjom, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), sqtru && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](lnkjom, sqtru) : lnkjom['__proto__'] = sqtru);
  })(cda, (mjkihl && mjkihl['__esModule'] ? mjkihl : { 'default': mjkihl })['default']), _02$1z = cda, wyx$_['default'] = _02$1z;
}, function (rupqs, y$zw, fgbedc) {
  'use strict';

  Object['defineProperty'](y$zw, '__esModule', { 'value': !0x0 });var zx$yvw = function ($zvx, vswrtu, yzwvx) {
    return vswrtu && lgikjh($zvx['prototype'], vswrtu), yzwvx && lgikjh($zvx, yzwvx), $zvx;
  };function lgikjh(psotr, y0$_zx) {
    for (var oqmrnp = 0x0; oqmrnp < y0$_zx['length']; oqmrnp++) {
      var noql = y0$_zx[oqmrnp];noql['enumerable'] = noql['enumerable'] || !0x1, noql['configurable'] = !0x0, 'value' in noql && (noql['writable'] = !0x0), Object['defineProperty'](psotr, noql['key'], noql);
    }
  }fgbedc = fgbedc(0x4);function tusqv(aedcbf) {
    return function (lkonmp) {
      if (!(lkonmp instanceof tusqv)) throw new TypeError('Cannot call a class as a function');
    }(this), function (stquv, tvuxw) {
      if (!stquv) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !tvuxw || 'object' != typeof tvuxw && 'function' != typeof tvuxw ? stquv : tvuxw;
    }(this, (tusqv['__proto__'] || Object['getPrototypeOf'](tusqv))['call'](this, aedcbf));
  }(function (rtuv, nmolpk) {
    if ('function' != typeof nmolpk && null !== nmolpk) throw new TypeError('Super expression must either be null or a function, not ' + typeof nmolpk);rtuv['prototype'] = Object['create'](nmolpk && nmolpk['prototype'], { 'constructor': { 'value': rtuv, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), nmolpk && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](rtuv, nmolpk) : rtuv['__proto__'] = nmolpk);
  })(tusqv, (fgbedc && fgbedc['__esModule'] ? fgbedc : { 'default': fgbedc })['default']), zx$yvw(tusqv, [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]), zx$yvw = tusqv, y$zw['default'] = zx$yvw;
}, function (urvtsq, ponk, xyzvuw) {
  'use strict';

  xyzvuw(0x10);
}, function (uswvtx, vywuxz, cgfbed) {
  'use strict';

  var egdfcb = function (mknol) {
    if (mknol && mknol['__esModule']) return mknol;var lhijm = {};if (null != mknol) {
      for (var fdbe in mknol) Object['prototype']['hasOwnProperty']['call'](mknol, fdbe) && (lhijm[fdbe] = mknol[fdbe]);
    }return lhijm['default'] = mknol, lhijm;
  }(cgfbed(0x1)),
      uvxtyw = cgfbed(0xa),
      lnqp = uvxtyw && uvxtyw['__esModule'] ? uvxtyw : { 'default': uvxtyw },
      cegdfb = cgfbed(0x8);function $3_1(gbde) {
    !function (utsr) {
      if (!(utsr instanceof $3_1)) throw new TypeError('Cannot call a class as a function');
    }(this), this['target'] = egdfcb['canvas'], this['currentTarget'] = egdfcb['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = cegdfb['noop'], this['stopPropagation'] = cegdfb['noop'], this['type'] = gbde;
  }function egdhf(vtru) {
    return function (dhgec) {
      var ecfhd = new $3_1(vtru);ecfhd['touches'] = dhgec['touches'], ecfhd['targetTouches'] = Array['prototype']['slice']['call'](dhgec['touches']), ecfhd['changedTouches'] = dhgec['changedTouches'], ecfhd['timeStamp'] = dhgec['timeStamp'], lnqp['default']['dispatchEvent'](ecfhd);
    };
  }wx['onTouchStart'](egdhf('touchstart')), wx['onTouchMove'](egdhf('touchmove')), wx['onTouchEnd'](egdhf('touchend')), wx['onTouchCancel'](egdhf('touchcancel'));
}, function (badfec, hfjikg) {
  'use strict';

  Object['defineProperty'](hfjikg, '__esModule', { 'value': !0x0 }), hfjikg['noop'] = function () {}, hfjikg['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (svuxwt, zvyxu, sopqt) {
  'use strict';

  Object['defineProperty'](zvyxu, '__esModule', { 'value': !0x0 }), sopqt = sopqt(0x8), sopqt = { 'platform': wx['getSystemInfoSync']()['platform'], 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': sopqt['noop'], 'watchPosition': sopqt['noop'], 'clearWatch': sopqt['noop'] } }, zvyxu['default'] = sopqt;
}, function (utwsvr, _$yx0z) {
  'use strict';

  Object['defineProperty'](_$yx0z, '__esModule', { 'value': !0x0 });var nmk = function (oqrspn, fegdcb, z0$_) {
    return fegdcb && nmkl(oqrspn['prototype'], fegdcb), z0$_ && nmkl(oqrspn, z0$_), oqrspn;
  };function nmkl(cdefb, efhgji) {
    for (var _3210 = 0x0; _3210 < efhgji['length']; _3210++) {
      var _yw$ = efhgji[_3210];_yw$['enumerable'] = _yw$['enumerable'] || !0x1, _yw$['configurable'] = !0x0, 'value' in _yw$ && (_yw$['writable'] = !0x0), Object['defineProperty'](cdefb, _yw$['key'], _yw$);
    }
  }var usv = new WeakMap(),
      prnosq = new WeakMap(),
      _4321 = new WeakMap(),
      wuxyt = new WeakMap(),
      jghfe = new WeakMap();function wrtsv(kjol) {
    if ('function' == typeof this['on' + kjol]) {
      for (var pqurst = arguments['length'], svuwtx = Array(0x1 < pqurst ? pqurst - 0x1 : 0x0), yzuxv = 0x1; yzuxv < pqurst; yzuxv++) svuwtx[yzuxv - 0x1] = arguments[yzuxv];this['on' + kjol]['apply'](this, svuwtx);
    }
  }function rqno(gejhi) {
    this['readyState'] = gejhi, wrtsv['call'](this, 'readystatechange');
  }function uvsw() {
    !function (rost) {
      if (!(rost instanceof uvsw)) throw new TypeError('Cannot call a class as a function');
    }(this), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = !0x1, _4321['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), wuxyt['set'](this, {});
  }nmk(uvsw, [{ 'key': 'abort', 'value': function () {
      var xtwu = jghfe['get'](this);xtwu && xtwu['abort']();
    } }, { 'key': 'getAllResponseHeaders', 'value': function () {
      var tvsu = wuxyt['get'](this);return Object['keys'](tvsu)['map'](function (olnpk) {
        return olnpk + ':\x20' + tvsu[olnpk];
      })['join']('\x0a');
    } }, { 'key': 'getResponseHeader', 'value': function (vwtrsu) {
      return wuxyt['get'](this)[vwtrsu];
    } }, { 'key': 'open', 'value': function (y_0z$1, vwzyu) {
      prnosq['set'](this, y_0z$1), usv['set'](this, vwzyu), rqno['call'](this, uvsw['OPENED']);
    } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function () {
      var pnqmor = this,
          pmlnqo = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';if (this['readyState'] !== uvsw['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');wx['request']({ 'data': pmlnqo, 'url': usv['get'](this), 'method': prnosq['get'](this), 'header': _4321['get'](this), 'responseType': this['responseType'], 'success': function (tvswru) {
          var wvzyx$ = tvswru['data'],
              _4230 = tvswru['statusCode'],
              tvswru = tvswru['header'];if ('string' != typeof wvzyx$ && !(wvzyx$ instanceof ArrayBuffer)) try {
            wvzyx$ = JSON['stringify'](wvzyx$);
          } catch (mnklp) {}if (pnqmor['status'] = _4230, wuxyt['set'](pnqmor, tvswru), wrtsv['call'](pnqmor, 'loadstart'), rqno['call'](pnqmor, uvsw['HEADERS_RECEIVED']), rqno['call'](pnqmor, uvsw['LOADING']), (pnqmor['response'] = wvzyx$) instanceof ArrayBuffer) {
            pnqmor['responseText'] = '';var jhiegf = new Uint8Array(wvzyx$),
                $10yz_ = jhiegf['byteLength'];for (var khmli = 0x0; khmli < $10yz_; khmli++) pnqmor['responseText'] += String['fromCharCode'](jhiegf[khmli]);
          } else pnqmor['responseText'] = wvzyx$;rqno['call'](pnqmor, uvsw['DONE']), wrtsv['call'](pnqmor, 'load'), wrtsv['call'](pnqmor, 'loadend');
        }, 'fail': function (gkhfij) {
          -0x1 !== (gkhfij = gkhfij['errMsg'])['indexOf']('abort') ? wrtsv['call'](pnqmor, 'abort') : wrtsv['call'](pnqmor, 'error', gkhfij), wrtsv['call'](pnqmor, 'loadend');
        } });
    } }, { 'key': 'setRequestHeader', 'value': function (svqut, mhijlk) {
      var yx$w = _4321['get'](this);yx$w[svqut] = mhijlk, _4321['set'](this, yx$w);
    } }]), (nmk = uvsw)['UNSEND'] = 0x0, nmk['OPENED'] = 0x1, nmk['HEADERS_RECEIVED'] = 0x2, nmk['LOADING'] = 0x3, nmk['DONE'] = 0x4, _$yx0z['default'] = nmk;
}, function (dbgecf, igkjhl, portsq) {
  'use strict';

  Object['defineProperty'](igkjhl, '__esModule', { 'value': !0x0 });var vwst = function ($_xy0z, $wy_zx, zxywv) {
    return $wy_zx && nkmoj($_xy0z['prototype'], $wy_zx), zxywv && nkmoj($_xy0z, zxywv), $_xy0z;
  };function nkmoj(zy0x$, nlmqo) {
    for (var ihgf = 0x0; ihgf < nlmqo['length']; ihgf++) {
      var ruvts = nlmqo[ihgf];ruvts['enumerable'] = ruvts['enumerable'] || !0x1, ruvts['configurable'] = !0x0, 'value' in ruvts && (ruvts['writable'] = !0x0), Object['defineProperty'](zy0x$, ruvts['key'], ruvts);
    }
  }var psqtu = portsq(0x8),
      turs = new WeakMap();function ropmq(vxswtu) {
    var yxz$w_ = this,
        gjkifh = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (function (vtwu) {
      if (!(vtwu instanceof ropmq)) throw new TypeError('Cannot call a class as a function');
    }(this), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, (0x0, psqtu['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if ('string' != typeof vxswtu || !/(^ws:\/\/)|(^wss:\/\/)/['test'](vxswtu)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + vxswtu + '\' is invalid');return this['url'] = vxswtu, this['readyState'] = ropmq['CONNECTING'], gjkifh = wx['connectSocket']({ 'url': vxswtu, 'protocols': Array['isArray'](gjkifh) ? gjkifh : [gjkifh] }), turs['set'](this, gjkifh), gjkifh['onClose'](function (ospqrt) {
      yxz$w_['readyState'] = ropmq['CLOSED'], 'function' == typeof yxz$w_['onclose'] && yxz$w_['onclose'](ospqrt);
    }), gjkifh['onMessage'](function (ilgkhj) {
      'function' == typeof yxz$w_['onmessage'] && yxz$w_['onmessage'](ilgkhj);
    }), gjkifh['onOpen'](function () {
      yxz$w_['readyState'] = ropmq['OPEN'], 'function' == typeof yxz$w_['onopen'] && yxz$w_['onopen']();
    }), gjkifh['onError'](function (z$vxwy) {
      'function' == typeof yxz$w_['onerror'] && yxz$w_['onerror'](new Error(z$vxwy['errMsg']));
    }), this;
  }vwst(ropmq, [{ 'key': 'close', 'value': function (cegfbd, nqpr) {
      this['readyState'] = ropmq['CLOSING'], turs['get'](this)['close']({ 'code': cegfbd, 'reason': nqpr });
    } }, { 'key': 'send', 'value': function (knjlim) {
      if ('string' != typeof knjlim && !(knjlim instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + knjlim + ' is invalid');turs['get'](this)['send']({ 'data': knjlim });
    } }]), (vwst = ropmq)['CONNECTING'] = 0x0, vwst['OPEN'] = 0x1, vwst['CLOSING'] = 0x2, vwst['CLOSED'] = 0x3, igkjhl['default'] = vwst;
}, function (wusxvt, z$vwy, $02z) {
  'use strict';

  Object['defineProperty'](z$vwy, '__esModule', { 'value': !0x0 });var ornmq = function (z_$y01, ilhgj, cdhegf) {
    return ilhgj && hcgdef(z_$y01['prototype'], ilhgj), cdhegf && hcgdef(z_$y01, cdhegf), z_$y01;
  };function hcgdef(ljn, $_10zy) {
    for (var wuxzyv = 0x0; wuxzyv < $_10zy['length']; wuxzyv++) {
      var kmonlj = $_10zy[wuxzyv];kmonlj['enumerable'] = kmonlj['enumerable'] || !0x1, kmonlj['configurable'] = !0x0, 'value' in kmonlj && (kmonlj['writable'] = !0x0), Object['defineProperty'](ljn, kmonlj['key'], kmonlj);
    }
  }var kopmln = $02z(0x8);function tvur() {
    !function (geifhj) {
      if (!(geifhj instanceof tvur)) throw new TypeError('Cannot call a class as a function');
    }(this);
  }ornmq(tvur, [{ 'key': 'construct', 'value': function () {
      if ((0x0, kopmln['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
    } }]), z$vwy['default'] = tvur;
}, function (xvzwy, pqml, trqvu) {
  'use strict';

  Object['defineProperty'](pqml, '__esModule', { 'value': !0x0 });var kfgh = trqvu(0x8),
      _y1z$0 = { get 'length'() {
      return wx['getStorageInfoSync']()['keys']['length'];
    }, 'key': function (ljmh) {
      return wx['getStorageInfoSync']()['keys'][ljmh];
    }, 'getItem': function (ikhlj) {
      return wx['getStorageSync'](ikhlj);
    }, 'setItem': function (ploqn, onmjl) {
      return wx['setStorageSync'](ploqn, onmjl);
    }, 'removeItem': function (nimljk) {
      wx['removeStorageSync'](nimljk);
    }, 'clear': function () {
      wx['clearStorageSync']();
    } },
      utsv = {};trqvu = { get 'length'() {
      return Object['keys'](utsv)['length'];
    }, 'key': function (vqtsur) {
      return Object['keys'](utsv)[vqtsur];
    }, 'getItem': function (vxywut) {
      return utsv[vxywut];
    }, 'setItem': function (_wyzx$, utqpr) {
      utsv[_wyzx$] = utqpr;
    }, 'removeItem': function (lpkmn) {
      delete utsv[lpkmn];
    }, 'clear': function () {
      utsv = {};
    } }, _y1z$0 = (0x0, kfgh['isSubContext'])() ? trqvu : _y1z$0, pqml['default'] = _y1z$0;
}, function (_$2z10, uwyt) {
  'use strict';

  Object['defineProperty'](uwyt, '__esModule', { 'value': !0x0 }), uwyt['default'] = { 'href': 'bbbgame.js', 'reload': function () {} };
}]);