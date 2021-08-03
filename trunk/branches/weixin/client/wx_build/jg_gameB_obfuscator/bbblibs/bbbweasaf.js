var _ = wx.y$;
!function (jhfik) {
  var osrpqt = {};function __webpack_require__(knjlom) {
    if (osrpqt[knjlom]) return osrpqt[knjlom]['exports'];var xwuvty = osrpqt[knjlom] = { 'exports': {}, 'id': knjlom, 'loaded': !0x1 };return jhfik[knjlom]['call'](xwuvty['exports'], xwuvty, xwuvty['exports'], __webpack_require__), xwuvty['loaded'] = !0x0, xwuvty['exports'];
  }__webpack_require__['m'] = jhfik, __webpack_require__['c'] = osrpqt, __webpack_require__['p'] = '', __webpack_require__(0x0);
}([function (tvw, vyuzxw, $0312) {
  'use strict';

  var qmpol = function (poqrm) {
    {
      if (poqrm && poqrm['__esModule']) return poqrm;var yuz = {};if (null != poqrm) {
        for (var kmnj in poqrm) Object['prototype']['hasOwnProperty']['call'](poqrm, kmnj) && (yuz[kmnj] = poqrm[kmnj]);
      }return yuz['default'] = poqrm, yuz;
    }
  }($0312(0x1)),
      romp = $0312(0x4),
      qvrsut = (jkfi = romp) && jkfi['__esModule'] ? jkfi : { 'default': jkfi },
      jkfi,
      txvwus = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
    qmpol['addEventListener'] = function (svrtuw, nopl) {
      qmpol['document']['addEventListener'](svrtuw, nopl);
    }, qmpol['removeEventListener'] = function (_zy, klnmj) {
      qmpol['document']['removeEventListener'](_zy, klnmj);
    }, qmpol['canvas'] && (qmpol['canvas']['addEventListener'] = qmpol['addEventListener'], qmpol['canvas']['removeEventListener'] = qmpol['removeEventListener']), txvwus['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new qvrsut['default']('canvas'), sharedCanvas['addEventListener'] = qmpol['addEventListener'], sharedCanvas['removeEventListener'] = qmpol['removeEventListener']);var x_y0$z = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === x_y0$z) {
      for (var ifhd in qmpol) {
        var pnol = Object['getOwnPropertyDescriptor'](txvwus, ifhd);pnol && !0x0 !== pnol['configurable'] || Object['defineProperty'](window, ifhd, { 'value': qmpol[ifhd] });
      }for (var rpomnq in qmpol['document']) {
        var zw$yx_ = Object['getOwnPropertyDescriptor'](txvwus['document'], rpomnq);zw$yx_ && !0x0 !== zw$yx_['configurable'] || Object['defineProperty'](txvwus['document'], rpomnq, { 'value': qmpol['document'][rpomnq] });
      }window['parent'] = window;
    } else {
      for (var usprt in qmpol) txvwus[usprt] = qmpol[usprt];txvwus['window'] = qmpol, window = txvwus, window['top'] = window['parent'] = window;
    }
  }());
}, function (x_z0$, _$z01y, xyvut) {
  'use strict';

  Object['defineProperty'](_$z01y, '__esModule', { 'value': !0x0 }), _$z01y['cancelAnimationFrame'] = _$z01y['requestAnimationFrame'] = _$z01y['clearInterval'] = _$z01y['clearTimeout'] = _$z01y['setInterval'] = _$z01y['setTimeout'] = _$z01y['canvas'] = _$z01y['location'] = _$z01y['localStorage'] = _$z01y['HTMLElement'] = _$z01y['FileReader'] = _$z01y['Audio'] = _$z01y['Image'] = _$z01y['WebSocket'] = _$z01y['XMLHttpRequest'] = _$z01y['navigator'] = _$z01y['document'] = void 0x0;var yx_z0$ = xyvut(0x2);Object['keys'](yx_z0$)['forEach'](function (y_x0) {
    'default' !== y_x0 && '__esModule' !== y_x0 && Object['defineProperty'](_$z01y, y_x0, { 'enumerable': !0x0, 'get': function () {
        return yx_z0$[y_x0];
      } });
  });var ehfgij = xyvut(0x3);Object['keys'](ehfgij)['forEach'](function (sptur) {
    'default' !== sptur && '__esModule' !== sptur && Object['defineProperty'](_$z01y, sptur, { 'enumerable': !0x0, 'get': function () {
        return ehfgij[sptur];
      } });
  });var z10_2 = mlnijk(xyvut(0x9)),
      klmjn = xyvut(0x11),
      pqmn = mlnijk(xyvut(0xa)),
      mijkln = mlnijk(xyvut(0x12)),
      gkifh = mlnijk(xyvut(0x13)),
      mjlkh = mlnijk(xyvut(0x14)),
      rqnom = mlnijk(xyvut(0xb)),
      xvyuwt = mlnijk(xyvut(0xc)),
      gfheij = mlnijk(xyvut(0x15)),
      _ywzx = mlnijk(xyvut(0x4)),
      tvwusr = mlnijk(xyvut(0x16));xyvut = mlnijk(xyvut(0x17));function mlnijk(edghi) {
    return edghi && edghi['__esModule'] ? edghi : { 'default': edghi };
  }_$z01y['document'] = pqmn['default'], _$z01y['navigator'] = mijkln['default'], _$z01y['XMLHttpRequest'] = gkifh['default'], _$z01y['WebSocket'] = mjlkh['default'], _$z01y['Image'] = rqnom['default'], _$z01y['Audio'] = xvyuwt['default'], _$z01y['FileReader'] = gfheij['default'], _$z01y['HTMLElement'] = _ywzx['default'], _$z01y['localStorage'] = tvwusr['default'], _$z01y['location'] = xyvut['default'], z10_2 = (0x0, klmjn['isSubContext'])() ? void 0x0 : new z10_2['default'](), (_$z01y['canvas'] = z10_2, _$z01y['setTimeout'] = setTimeout, _$z01y['setInterval'] = setInterval, _$z01y['clearTimeout'] = clearTimeout, _$z01y['clearInterval'] = clearInterval, _$z01y['requestAnimationFrame'] = requestAnimationFrame, _$z01y['cancelAnimationFrame'] = cancelAnimationFrame);
}, function (molnpk, hgcfe) {
  'use strict';

  Object['defineProperty'](hgcfe, '__esModule', { 'value': !0x0 });var _y$01z = wx['getSystemInfoSync'](),
      edfhi = _y$01z['screenWidth'],
      hifkj = _y$01z['screenHeight'],
      _y$01z = _y$01z['devicePixelRatio'];edfhi = hgcfe['innerWidth'] = edfhi, hifkj = hgcfe['innerHeight'] = hifkj, hgcfe['devicePixelRatio'] = _y$01z, hgcfe['screen'] = { 'availWidth': edfhi, 'availHeight': hifkj }, hgcfe['performance'] = { 'now': function () {
      return Date['now']() / 0x3e8;
    } }, hgcfe['ontouchstart'] = null, hgcfe['ontouchmove'] = null, hgcfe['ontouchend'] = null;
}, function ($_102z, gdchef, hgifej) {
  'use strict';

  Object['defineProperty'](gdchef, '__esModule', { 'value': !0x0 }), gdchef['HTMLCanvasElement'] = gdchef['HTMLImageElement'] = void 0x0;var fgcedh = hgifej(0x4);hgifej = (rqopns = fgcedh) && rqopns['__esModule'] ? rqopns : { 'default': rqopns };var rqopns;function rtus(zx$0_, lghjik) {
    if (!(zx$0_ instanceof lghjik)) throw new TypeError('Cannot call a class as a function');
  }function ehfdgi(trvsqu, nompq) {
    if (!trvsqu) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !nompq || 'object' != typeof nompq && 'function' != typeof nompq ? trvsqu : nompq;
  }function srqtup(ikjnm, bfdaec) {
    if ('function' != typeof bfdaec && null !== bfdaec) throw new TypeError('Super expression must either be null or a function, not ' + typeof bfdaec);ikjnm['prototype'] = Object['create'](bfdaec && bfdaec['prototype'], { 'constructor': { 'value': ikjnm, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), bfdaec && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](ikjnm, bfdaec) : ikjnm['__proto__'] = bfdaec);
  }gdchef['HTMLImageElement'] = (srqtup(zvwyux, hgifej['default']), zvwyux);function zvwyux() {
    return rtus(this, zvwyux), ehfdgi(this, (zvwyux['__proto__'] || Object['getPrototypeOf'](zvwyux))['call'](this, 'img'));
  }gdchef['HTMLCanvasElement'] = (srqtup(xuywt, hgifej['default']), xuywt);function xuywt() {
    return rtus(this, xuywt), ehfdgi(this, (xuywt['__proto__'] || Object['getPrototypeOf'](xuywt))['call'](this, 'canvas'));
  }
}, function (hkilgj, gjikh, psonqr) {
  'use strict';

  Object['defineProperty'](gjikh, '__esModule', { 'value': !0x0 });var w_$yxz = function (tqursv, orqnmp, mnqlp) {
    return orqnmp && ejgh(tqursv['prototype'], orqnmp), mnqlp && ejgh(tqursv, mnqlp), tqursv;
  };function ejgh(xwtvy, onmkp) {
    for (var kpmoln = 0x0; kpmoln < onmkp['length']; kpmoln++) {
      var mkijh = onmkp[kpmoln];mkijh['enumerable'] = mkijh['enumerable'] || !0x1, mkijh['configurable'] = !0x0, 'value' in mkijh && (mkijh['writable'] = !0x0), Object['defineProperty'](xwtvy, mkijh['key'], mkijh);
    }
  }var lnm = psonqr(0x5),
      oqpnsr = (gkfji = lnm) && gkfji['__esModule'] ? gkfji : { 'default': gkfji },
      gkfji,
      zwy = psonqr(0x8),
      wurstv = psonqr(0x2);(function (ghfd, cgfhde) {
    if ('function' != typeof cgfhde && null !== cgfhde) throw new TypeError('Super expression must either be null or a function, not ' + typeof cgfhde);ghfd['prototype'] = Object['create'](cgfhde && cgfhde['prototype'], { 'constructor': { 'value': ghfd, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), cgfhde && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](ghfd, cgfhde) : ghfd['__proto__'] = cgfhde);
  })(rosqnp, oqpnsr['default']), w_$yxz(rosqnp, [{ 'key': 'setAttribute', 'value': function (ilgj, hie) {
      this[ilgj] = hie;
    } }, { 'key': 'getAttribute', 'value': function (qosn) {
      return this[qosn];
    } }, { 'key': 'getBoundingClientRect', 'value': function () {
      return { 'top': 0x0, 'left': 0x0, 'width': wurstv['innerWidth'], 'height': wurstv['innerHeight'] };
    } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
      var $_10yz = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN']($_10yz) ? 0x0 : $_10yz;
    } }, { 'key': 'clientHeight', 'get': function () {
      var igdhf = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](igdhf) ? 0x0 : igdhf;
    } }]), w_$yxz = rosqnp;function rosqnp() {
    var ponlq = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';!function (w$vzyx, kjhif) {
      if (!(w$vzyx instanceof kjhif)) throw new TypeError('Cannot call a class as a function');
    }(this, rosqnp);var dihfeg = function (sotr, wrutvs) {
      if (!sotr) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !wrutvs || 'object' != typeof wrutvs && 'function' != typeof wrutvs ? sotr : wrutvs;
    }(this, (rosqnp['__proto__'] || Object['getPrototypeOf'](rosqnp))['call'](this));return dihfeg['className'] = '', dihfeg['childern'] = [], dihfeg['style'] = { 'width': wurstv['innerWidth'] + 'px', 'height': wurstv['innerHeight'] + 'px' }, dihfeg['insertBefore'] = zwy['noop'], dihfeg['innerHTML'] = '', dihfeg['tagName'] = ponlq['toUpperCase'](), dihfeg;
  }gjikh['default'] = w_$yxz;
}, function (fbcaed, xz_y0, mjkhil) {
  'use strict';

  Object['defineProperty'](xz_y0, '__esModule', { 'value': !0x0 });var $xzyvw = mjkhil(0x6),
      wvzyx;(function (dhecfg, uywvt) {
    if ('function' != typeof uywvt && null !== uywvt) throw new TypeError('Super expression must either be null or a function, not ' + typeof uywvt);dhecfg['prototype'] = Object['create'](uywvt && uywvt['prototype'], { 'constructor': { 'value': dhecfg, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), uywvt && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](dhecfg, uywvt) : dhecfg['__proto__'] = uywvt);
  })(ecbdfg, ((wvzyx = $xzyvw) && wvzyx['__esModule'] ? wvzyx : { 'default': wvzyx })['default']), mjkhil = ecbdfg;function ecbdfg() {
    !function (dgfei, bfcdeg) {
      if (!(dgfei instanceof bfcdeg)) throw new TypeError('Cannot call a class as a function');
    }(this, ecbdfg);var qplnom = function (_z$0yx, jikhfg) {
      if (!_z$0yx) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !jikhfg || 'object' != typeof jikhfg && 'function' != typeof jikhfg ? _z$0yx : jikhfg;
    }(this, (ecbdfg['__proto__'] || Object['getPrototypeOf'](ecbdfg))['call'](this));return qplnom['className'] = '', qplnom['children'] = [], qplnom;
  }xz_y0['default'] = mjkhil;
}, function (nloqpm, yzxw_$, hifedg) {
  'use strict';

  Object['defineProperty'](yzxw_$, '__esModule', { 'value': !0x0 });var $zxwvy = function (lmpnk, dabe, trvusq) {
    return dabe && kljnom(lmpnk['prototype'], dabe), trvusq && kljnom(lmpnk, trvusq), lmpnk;
  };function kljnom(z$w_yx, ywzvu) {
    for (var xwusvt = 0x0; xwusvt < ywzvu['length']; xwusvt++) {
      var nosp = ywzvu[xwusvt];nosp['enumerable'] = nosp['enumerable'] || !0x1, nosp['configurable'] = !0x0, 'value' in nosp && (nosp['writable'] = !0x0), Object['defineProperty'](z$w_yx, nosp['key'], nosp);
    }
  }var hej = hifedg(0x7),
      pqot;(function (ilh, omjnkl) {
    if ('function' != typeof omjnkl && null !== omjnkl) throw new TypeError('Super expression must either be null or a function, not ' + typeof omjnkl);ilh['prototype'] = Object['create'](omjnkl && omjnkl['prototype'], { 'constructor': { 'value': ilh, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), omjnkl && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](ilh, omjnkl) : ilh['__proto__'] = omjnkl);
  })(qmorn, ((pqot = hej) && pqot['__esModule'] ? pqot : { 'default': pqot })['default']), $zxwvy(qmorn, [{ 'key': 'appendChild', 'value': function (qponl) {
      if (!(qponl instanceof qmorn)) throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');this['childNodes']['push'](qponl);
    } }, { 'key': 'cloneNode', 'value': function () {
      var xsvwt = Object['create'](this);return Object['assign'](xsvwt, this), xsvwt;
    } }, { 'key': 'removeChild', 'value': function (gfdbe) {
      var wvsutx = this['childNodes']['findIndex'](function (xzwv$y) {
        return xzwv$y === gfdbe;
      });return -0x1 < wvsutx ? this['childNodes']['splice'](wvsutx, 0x1) : null;
    } }]), $zxwvy = qmorn;function qmorn() {
    !function (gfijeh, njkmo) {
      if (!(gfijeh instanceof njkmo)) throw new TypeError('Cannot call a class as a function');
    }(this, qmorn);var qpsonr = function (hifed, $012_z) {
      if (!hifed) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !$012_z || 'object' != typeof $012_z && 'function' != typeof $012_z ? hifed : $012_z;
    }(this, (qmorn['__proto__'] || Object['getPrototypeOf'](qmorn))['call'](this));return qpsonr['childNodes'] = [], qpsonr;
  }yzxw_$['default'] = $zxwvy;
}, function (turp, trpus) {
  'use strict';

  Object['defineProperty'](trpus, '__esModule', { 'value': !0x0 });var uyvxt = function (vqutsr, ighfkj, jhlkg) {
    return ighfkj && $21(vqutsr['prototype'], ighfkj), jhlkg && $21(vqutsr, jhlkg), vqutsr;
  };function $21(olq, $0z_2) {
    for (var x$zy_ = 0x0; x$zy_ < $0z_2['length']; x$zy_++) {
      var cfdab = $0z_2[x$zy_];cfdab['enumerable'] = cfdab['enumerable'] || !0x1, cfdab['configurable'] = !0x0, 'value' in cfdab && (cfdab['writable'] = !0x0), Object['defineProperty'](olq, cfdab['key'], cfdab);
    }
  }var qup = new WeakMap();uyvxt(opstq, [{ 'key': 'addEventListener', 'value': function (st, jgihkf) {
      var kigjh = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {},
          purqts = qup['get'](this);purqts || qup['set'](this, purqts = {}), purqts[st] || (purqts[st] = []), purqts[st]['push'](jgihkf), kigjh['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), kigjh['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), kigjh['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
    } }, { 'key': 'removeEventListener', 'value': function (nlmkp, z_y$w) {
      var ijgl = qup['get'](this)[nlmkp];if (ijgl && 0x0 < ijgl['length']) {
        for (var gfdeh = ijgl['length']; gfdeh--;) if (ijgl[gfdeh] === z_y$w) {
          ijgl['splice'](gfdeh, 0x1);break;
        }
      }
    } }, { 'key': 'dispatchEvent', 'value': function () {
      var fjig = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {},
          uqtvrs = qup['get'](this)[fjig['type']];if (uqtvrs) {
        for (var noplk = 0x0; noplk < uqtvrs['length']; noplk++) uqtvrs[noplk](fjig);
      }
    } }]), uyvxt = opstq;function opstq() {
    !function (ifgehj, wzyx$_) {
      if (!(ifgehj instanceof wzyx$_)) throw new TypeError('Cannot call a class as a function');
    }(this, opstq), qup['set'](this, {});
  }trpus['default'] = uyvxt;
}, function (nrmo, hcgfed) {
  'use strict';

  Object['defineProperty'](hcgfed, '__esModule', { 'value': !0x0 }), hcgfed['noop'] = function () {}, hcgfed['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (stpoq, yuxvzw, x_wy) {
  'use strict';

  Object['defineProperty'](yuxvzw, '__esModule', { 'value': !0x0 }), yuxvzw['default'] = function () {
    var cgfdbe = wx['createCanvas']();return cgfdbe['type'] = 'canvas', cgfdbe['__proto__']['__proto__'] = new rsutp['default']('canvas'), cgfdbe['getContext'], (cgfdbe['getBoundingClientRect'] = function () {
      return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
    }, cgfdbe);
  }, x_wy(0x3);var rsutp = ghifj(x_wy(0x4));ghifj(x_wy(0xa));function ghifj(kopmln) {
    return kopmln && kopmln['__esModule'] ? kopmln : { 'default': kopmln };
  }
}, function (y_1$0z, ptru, pqnosr) {
  'use strict';

  Object['defineProperty'](ptru, '__esModule', { 'value': !0x0 });var rpson = function (opqmnl) {
    {
      if (opqmnl && opqmnl['__esModule']) return opqmnl;var fdaebc = {};if (null != opqmnl) {
        for (var kljg in opqmnl) Object['prototype']['hasOwnProperty']['call'](opqmnl, kljg) && (fdaebc[kljg] = opqmnl[kljg]);
      }return fdaebc['default'] = opqmnl, fdaebc;
    }
  }(pqnosr(0x1)),
      kiml = lkjm(pqnosr(0x4)),
      rmqpon = lkjm(pqnosr(0xb)),
      egfhcd = lkjm(pqnosr(0xc)),
      pmonk = lkjm(pqnosr(0x9));function lkjm(vuxzyw) {
    return vuxzyw && vuxzyw['__esModule'] ? vuxzyw : { 'default': vuxzyw };
  }pqnosr(0xf);var hfki = {},
      wstvur = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': rpson, 'hidden': !0x1, 'style': {}, 'location': rpson['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new kiml['default']('head'), 'body': new kiml['default']('body'), 'createElement': function (chgfe) {
      return 'canvas' === chgfe ? new pmonk['default']() : 'audio' === chgfe ? new egfhcd['default']() : 'img' === chgfe ? new rmqpon['default']() : new kiml['default'](chgfe);
    }, 'getElementById': function (plkmon) {
      return plkmon === rpson['canvas']['id'] ? rpson['canvas'] : null;
    }, 'getElementsByTagName': function (xytvu) {
      return 'head' === xytvu ? [wstvur['head']] : 'body' === xytvu ? [wstvur['body']] : 'canvas' === xytvu ? [rpson['canvas']] : [];
    }, 'querySelector': function (qtrvus) {
      return 'head' === qtrvus ? wstvur['head'] : 'body' === qtrvus ? wstvur['body'] : 'canvas' === qtrvus || qtrvus === '#' + rpson['canvas']['id'] ? rpson['canvas'] : null;
    }, 'querySelectorAll': function (tsvux) {
      return 'head' === tsvux ? [wstvur['head']] : 'body' === tsvux ? [wstvur['body']] : 'canvas' === tsvux ? [rpson['canvas']] : [];
    }, 'addEventListener': function (bcfed, egfhc) {
      hfki[bcfed] || (hfki[bcfed] = []), hfki[bcfed]['push'](egfhc);
    }, 'removeEventListener': function ($xyz0, figkj) {
      var higlkj = hfki[$xyz0];if (higlkj && 0x0 < higlkj['length']) {
        for (var uvwsr = higlkj['length']; uvwsr--;) if (higlkj[uvwsr] === figkj) {
          higlkj['splice'](uvwsr, 0x1);break;
        }
      }
    }, 'dispatchEvent': function (vutxwy) {
      var xwuvy = hfki[vutxwy['type']];if (xwuvy) {
        for (var qsrutp = 0x0; qsrutp < xwuvy['length']; qsrutp++) xwuvy[qsrutp](vutxwy);
      }
    } };ptru['default'] = wstvur;
}, function (caedb, mplno) {
  'use strict';

  Object['defineProperty'](mplno, '__esModule', { 'value': !0x0 }), mplno['default'] = function () {
    return wx['createImage']();
  };
}, function (himkl, opnl, pqonsr) {
  'use strict';

  Object['defineProperty'](opnl, '__esModule', { 'value': !0x0 });var ornps = function (ljikmn, ywvxzu, hljgki) {
    return ywvxzu && jlgk(ljikmn['prototype'], ywvxzu), hljgki && jlgk(ljikmn, hljgki), ljikmn;
  };function jlgk($zxwv, yzx$vw) {
    for (var jimn = 0x0; jimn < yzx$vw['length']; jimn++) {
      var fgdeh = yzx$vw[jimn];fgdeh['enumerable'] = fgdeh['enumerable'] || !0x1, fgdeh['configurable'] = !0x0, 'value' in fgdeh && (fgdeh['writable'] = !0x0), Object['defineProperty']($zxwv, fgdeh['key'], fgdeh);
    }
  }var mljih = pqonsr(0xd),
      gijl = (tyxuw = mljih) && tyxuw['__esModule'] ? tyxuw : { 'default': tyxuw },
      tyxuw,
      rvwstu = pqonsr(0x8);function yuxwvz(eigjhf, tuxw) {
    if (!eigjhf) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !tuxw || 'object' != typeof tuxw && 'function' != typeof tuxw ? eigjhf : tuxw;
  }var ponkl = 0x0,
      dcfgb = 0x1,
      ghfeji = 0x2,
      svwru = 0x3,
      knjmlo = 0x4,
      pqo = new WeakMap(),
      uqsp = new WeakMap();new WeakMap(), new WeakMap(), (function (gbfecd, ijfkhg) {
    if ('function' != typeof ijfkhg && null !== ijfkhg) throw new TypeError('Super expression must either be null or a function, not ' + typeof ijfkhg);gbfecd['prototype'] = Object['create'](ijfkhg && ijfkhg['prototype'], { 'constructor': { 'value': gbfecd, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), ijfkhg && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](gbfecd, ijfkhg) : gbfecd['__proto__'] = ijfkhg);
  }(ehijg, gijl['default']), ornps(ehijg, [{ 'key': 'load', 'value': function () {
      console['warn']('HTMLAudioElement.load() is not implemented.');
    } }, { 'key': 'play', 'value': function () {
      (0x0, rvwstu['isSubContext'])() || pqo['get'](this)['play']();
    } }, { 'key': 'pause', 'value': function () {
      (0x0, rvwstu['isSubContext'])() || pqo['get'](this)['pause']();
    } }, { 'key': 'canPlayType', 'value': function () {
      var jkmlin = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return 'string' == typeof jkmlin && (-0x1 < jkmlin['indexOf']('audio/mpeg') || jkmlin['indexOf']('audio/mp4')) ? 'probably' : '';
    } }, { 'key': 'cloneNode', 'value': function () {
      var gidhe = new ehijg();return (0x0, rvwstu['isSubContext'])() || (gidhe['loop'] = pqo['get'](this)['loop'], gidhe['autoplay'] = pqo['get'](this)['loop'], gidhe['src'] = this['src']), gidhe;
    } }, { 'key': 'currentTime', 'get': function () {
      return (0x0, rvwstu['isSubContext'])() ? 0x0 : pqo['get'](this)['currentTime'];
    }, 'set': function (yvtux) {
      (0x0, rvwstu['isSubContext'])() || pqo['get'](this)['seek'](yvtux);
    } }, { 'key': 'src', 'get': function () {
      return uqsp['get'](this);
    }, 'set': function (lnpmko) {
      uqsp['set'](this, lnpmko), (0x0, rvwstu['isSubContext'])() || (pqo['get'](this)['src'] = lnpmko);
    } }, { 'key': 'loop', 'get': function () {
      return !(0x0, rvwstu['isSubContext'])() && pqo['get'](this)['loop'];
    }, 'set': function (dgcebf) {
      (0x0, rvwstu['isSubContext'])() || (pqo['get'](this)['loop'] = dgcebf);
    } }, { 'key': 'autoplay', 'get': function () {
      return !(0x0, rvwstu['isSubContext'])() && pqo['get'](this)['autoplay'];
    }, 'set': function (vutrsw) {
      (0x0, rvwstu['isSubContext'])() || (pqo['get'](this)['autoplay'] = vutrsw);
    } }, { 'key': 'paused', 'get': function () {
      return !(0x0, rvwstu['isSubContext'])() && pqo['get'](this)['paused'];
    } }]), ornps = ehijg);function ehijg(jkfgih) {
    !function (soprnq, vsqtur) {
      if (!(soprnq instanceof vsqtur)) throw new TypeError('Cannot call a class as a function');
    }(this, ehijg);var jkifhg = yuxwvz(this, (ehijg['__proto__'] || Object['getPrototypeOf'](ehijg))['call'](this));if (jkifhg['HAVE_NOTHING'] = ponkl, jkifhg['HAVE_METADATA'] = dcfgb, jkifhg['HAVE_CURRENT_DATA'] = ghfeji, jkifhg['HAVE_FUTURE_DATA'] = svwru, jkifhg['HAVE_ENOUGH_DATA'] = knjmlo, jkifhg['readyState'] = ponkl, (0x0, rvwstu['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), yuxwvz(jkifhg);uqsp['set'](jkifhg, '');var sportq = wx['createInnerAudioContext']();return pqo['set'](jkifhg, sportq), sportq['onCanplay'](function () {
      jkifhg['dispatchEvent']({ 'type': 'load' }), jkifhg['dispatchEvent']({ 'type': 'loadend' }), jkifhg['dispatchEvent']({ 'type': 'canplay' }), jkifhg['dispatchEvent']({ 'type': 'canplaythrough' }), jkifhg['dispatchEvent']({ 'type': 'loadedmetadata' }), jkifhg['readyState'] = ghfeji;
    }), sportq['onPlay'](function () {
      jkifhg['dispatchEvent']({ 'type': 'play' });
    }), sportq['onPause'](function () {
      jkifhg['dispatchEvent']({ 'type': 'pause' });
    }), sportq['onEnded'](function () {
      jkifhg['dispatchEvent']({ 'type': 'ended' }), jkifhg['readyState'] = knjmlo;
    }), sportq['onError'](function () {
      jkifhg['dispatchEvent']({ 'type': 'error' });
    }), jkfgih && (pqo['get'](jkifhg)['src'] = jkfgih), jkifhg;
  }opnl['default'] = ornps;
}, function (lkjon, sutrqv, omnjk) {
  'use strict';

  Object['defineProperty'](sutrqv, '__esModule', { 'value': !0x0 });var edfbgc = omnjk(0xe),
      sptr;(function (wuxyt, jifge) {
    if ('function' != typeof jifge && null !== jifge) throw new TypeError('Super expression must either be null or a function, not ' + typeof jifge);wuxyt['prototype'] = Object['create'](jifge && jifge['prototype'], { 'constructor': { 'value': wuxyt, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), jifge && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](wuxyt, jifge) : wuxyt['__proto__'] = jifge);
  })($wy_zx, ((sptr = edfbgc) && sptr['__esModule'] ? sptr : { 'default': sptr })['default']), omnjk = $wy_zx;function $wy_zx() {
    return function (_20$z, qposn) {
      if (!(_20$z instanceof qposn)) throw new TypeError('Cannot call a class as a function');
    }(this, $wy_zx), function (xuzvy, hifdeg) {
      if (!xuzvy) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !hifdeg || 'object' != typeof hifdeg && 'function' != typeof hifdeg ? xuzvy : hifdeg;
    }(this, ($wy_zx['__proto__'] || Object['getPrototypeOf']($wy_zx))['call'](this, 'audio'));
  }sutrqv['default'] = omnjk;
}, function (gehc, vxutw, uxzwyv) {
  'use strict';

  Object['defineProperty'](vxutw, '__esModule', { 'value': !0x0 });var fhijeg = function (klji, klmnj, moqpln) {
    return klmnj && tuprsq(klji['prototype'], klmnj), moqpln && tuprsq(klji, moqpln), klji;
  };function tuprsq(suvtxw, kmjlin) {
    for (var rvwst = 0x0; rvwst < kmjlin['length']; rvwst++) {
      var gbedfc = kmjlin[rvwst];gbedfc['enumerable'] = gbedfc['enumerable'] || !0x1, gbedfc['configurable'] = !0x0, 'value' in gbedfc && (gbedfc['writable'] = !0x0), Object['defineProperty'](suvtxw, gbedfc['key'], gbedfc);
    }
  }var bcefgd = uxzwyv(0x4),
      uqp;(function (gcbedf, xzy_$) {
    if ('function' != typeof xzy_$ && null !== xzy_$) throw new TypeError('Super expression must either be null or a function, not ' + typeof xzy_$);gcbedf['prototype'] = Object['create'](xzy_$ && xzy_$['prototype'], { 'constructor': { 'value': gcbedf, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), xzy_$ && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](gcbedf, xzy_$) : gcbedf['__proto__'] = xzy_$);
  })(ruvtsq, ((uqp = bcefgd) && uqp['__esModule'] ? uqp : { 'default': uqp })['default']), fhijeg(ruvtsq, [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]), fhijeg = ruvtsq;function ruvtsq($0x_yz) {
    return function (mknlj, nmqrpo) {
      if (!(mknlj instanceof nmqrpo)) throw new TypeError('Cannot call a class as a function');
    }(this, ruvtsq), function (jlinkm, noplqm) {
      if (!jlinkm) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !noplqm || 'object' != typeof noplqm && 'function' != typeof noplqm ? jlinkm : noplqm;
    }(this, (ruvtsq['__proto__'] || Object['getPrototypeOf'](ruvtsq))['call'](this, $0x_yz));
  }vxutw['default'] = fhijeg;
}, function (tuxyv, lojnkm, _0zy$x) {
  'use strict';

  _0zy$x(0x10);
}, function (wuzyv, $0y_zx, jhlmki) {
  'use strict';

  var efgh = function (qtsurp) {
    {
      if (qtsurp && qtsurp['__esModule']) return qtsurp;var qmnrop = {};if (null != qtsurp) {
        for (var omnkp in qtsurp) Object['prototype']['hasOwnProperty']['call'](qtsurp, omnkp) && (qmnrop[omnkp] = qtsurp[omnkp]);
      }return qmnrop['default'] = qtsurp, qmnrop;
    }
  }(jhlmki(0x1)),
      tvuws = jhlmki(0xa),
      kijfg = (hjgf = tvuws) && hjgf['__esModule'] ? hjgf : { 'default': hjgf },
      hjgf,
      y_z0x = jhlmki(0x8);function dfeb(twvxy) {
    !function (mnqpo, yvw) {
      if (!(mnqpo instanceof yvw)) throw new TypeError('Cannot call a class as a function');
    }(this, dfeb), this['target'] = efgh['canvas'], this['currentTarget'] = efgh['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = y_z0x['noop'], this['stopPropagation'] = y_z0x['noop'], this['type'] = twvxy;
  }function sptqro(nj) {
    return function (gijfhe) {
      var gfceh = new dfeb(nj);gfceh['touches'] = gijfhe['touches'], gfceh['targetTouches'] = Array['prototype']['slice']['call'](gijfhe['touches']), gfceh['changedTouches'] = gijfhe['changedTouches'], gfceh['timeStamp'] = gijfhe['timeStamp'], kijfg['default']['dispatchEvent'](gfceh);
    };
  }wx['onTouchStart'](sptqro('touchstart')), wx['onTouchMove'](sptqro('touchmove')), wx['onTouchEnd'](sptqro('touchend')), wx['onTouchCancel'](sptqro('touchcancel'));
}, function (tqosrp, ljkh) {
  'use strict';

  Object['defineProperty'](ljkh, '__esModule', { 'value': !0x0 }), ljkh['noop'] = function () {}, ljkh['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (oqprnm, uqptsr, uyvw) {
  'use strict';

  Object['defineProperty'](uqptsr, '__esModule', { 'value': !0x0 }), uyvw = uyvw(0x8), uyvw = { 'platform': wx['getSystemInfoSync']()['platform'], 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': uyvw['noop'], 'watchPosition': uyvw['noop'], 'clearWatch': uyvw['noop'] } }, uqptsr['default'] = uyvw;
}, function (fcade, y0z1$) {
  'use strict';

  Object['defineProperty'](y0z1$, '__esModule', { 'value': !0x0 });var qutrsp = function (molknj, klinmj, ebdcg) {
    return klinmj && jklig(molknj['prototype'], klinmj), ebdcg && jklig(molknj, ebdcg), molknj;
  };function jklig(lkpm, mjkno) {
    for (var nkijm = 0x0; nkijm < mjkno['length']; nkijm++) {
      var vwts = mjkno[nkijm];vwts['enumerable'] = vwts['enumerable'] || !0x1, vwts['configurable'] = !0x0, 'value' in vwts && (vwts['writable'] = !0x0), Object['defineProperty'](lkpm, vwts['key'], vwts);
    }
  }var svuxw = new WeakMap(),
      y_$0xz = new WeakMap(),
      kilhm = new WeakMap(),
      upqrts = new WeakMap(),
      feabc = new WeakMap();function ebadfc(qmlpn) {
    if ('function' == typeof this['on' + qmlpn]) {
      for (var lojnmk = arguments['length'], ecdfgb = Array(0x1 < lojnmk ? lojnmk - 0x1 : 0x0), njimk = 0x1; njimk < lojnmk; njimk++) ecdfgb[njimk - 0x1] = arguments[njimk];this['on' + qmlpn]['apply'](this, ecdfgb);
    }
  }function z_w$($_1320) {
    this['readyState'] = $_1320, ebadfc['call'](this, 'readystatechange');
  }qutrsp(tqpsor, [{ 'key': 'abort', 'value': function () {
      var stqurv = feabc['get'](this);stqurv && stqurv['abort']();
    } }, { 'key': 'getAllResponseHeaders', 'value': function () {
      var vsurt = upqrts['get'](this);return Object['keys'](vsurt)['map'](function (oqlpn) {
        return oqlpn + ':\x20' + vsurt[oqlpn];
      })['join']('\x0a');
    } }, { 'key': 'getResponseHeader', 'value': function (kmlnj) {
      return upqrts['get'](this)[kmlnj];
    } }, { 'key': 'open', 'value': function (kjhil, xw_y) {
      y_$0xz['set'](this, kjhil), svuxw['set'](this, xw_y), z_w$['call'](this, tqpsor['OPENED']);
    } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function () {
      var z_$y10 = this,
          hfeji = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';if (this['readyState'] !== tqpsor['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');wx['request']({ 'data': hfeji, 'url': svuxw['get'](this), 'method': y_$0xz['get'](this), 'header': kilhm['get'](this), 'responseType': this['responseType'], 'success': function (vtwusx) {
          var npqros = vtwusx['data'],
              hjiklg = vtwusx['statusCode'],
              vtwusx = vtwusx['header'];if ('string' != typeof npqros && !(npqros instanceof ArrayBuffer)) try {
            npqros = JSON['stringify'](npqros);
          } catch (mljihk) {}if (z_$y10['status'] = hjiklg, upqrts['set'](z_$y10, vtwusx), ebadfc['call'](z_$y10, 'loadstart'), z_w$['call'](z_$y10, tqpsor['HEADERS_RECEIVED']), z_w$['call'](z_$y10, tqpsor['LOADING']), (z_$y10['response'] = npqros) instanceof ArrayBuffer) {
            z_$y10['responseText'] = '';var bcdg = new Uint8Array(npqros),
                jmilh = bcdg['byteLength'];for (var vxyu = 0x0; vxyu < jmilh; vxyu++) z_$y10['responseText'] += String['fromCharCode'](bcdg[vxyu]);
          } else z_$y10['responseText'] = npqros;z_w$['call'](z_$y10, tqpsor['DONE']), ebadfc['call'](z_$y10, 'load'), ebadfc['call'](z_$y10, 'loadend');
        }, 'fail': function (mjhli) {
          mjhli = mjhli['errMsg'], (-0x1 !== mjhli['indexOf']('abort') ? ebadfc['call'](z_$y10, 'abort') : ebadfc['call'](z_$y10, 'error', mjhli), ebadfc['call'](z_$y10, 'loadend'));
        } });
    } }, { 'key': 'setRequestHeader', 'value': function (txvyu, yzuxv) {
      var $z0x = kilhm['get'](this);$z0x[txvyu] = yzuxv, kilhm['set'](this, $z0x);
    } }]), qutrsp = tqpsor;function tqpsor() {
    !function (rnpmq, qorpm) {
      if (!(rnpmq instanceof qorpm)) throw new TypeError('Cannot call a class as a function');
    }(this, tqpsor), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = !0x1, kilhm['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), upqrts['set'](this, {});
  }qutrsp['UNSEND'] = 0x0, qutrsp['OPENED'] = 0x1, qutrsp['HEADERS_RECEIVED'] = 0x2, qutrsp['LOADING'] = 0x3, qutrsp['DONE'] = 0x4, y0z1$['default'] = qutrsp;
}, function ($yxzwv, xuywv, tspuqr) {
  'use strict';

  Object['defineProperty'](xuywv, '__esModule', { 'value': !0x0 });var _243 = function (rqmonp, njlokm, ljikmh) {
    return njlokm && qsrpt(rqmonp['prototype'], njlokm), ljikmh && qsrpt(rqmonp, ljikmh), rqmonp;
  };function qsrpt(ehfij, nlmop) {
    for (var nlomk = 0x0; nlomk < nlmop['length']; nlomk++) {
      var bdaecf = nlmop[nlomk];bdaecf['enumerable'] = bdaecf['enumerable'] || !0x1, bdaecf['configurable'] = !0x0, 'value' in bdaecf && (bdaecf['writable'] = !0x0), Object['defineProperty'](ehfij, bdaecf['key'], bdaecf);
    }
  }var jglikh = tspuqr(0x8),
      kgjih = new WeakMap();_243(wyz$_, [{ 'key': 'close', 'value': function (pqmor, dhfig) {
      this['readyState'] = wyz$_['CLOSING'], kgjih['get'](this)['close']({ 'code': pqmor, 'reason': dhfig });
    } }, { 'key': 'send', 'value': function (himl) {
      if ('string' != typeof himl && !(himl instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + himl + ' is invalid');kgjih['get'](this)['send']({ 'data': himl });
    } }]), _243 = wyz$_;function wyz$_(mnoj) {
    var z2$_0 = this,
        jlik = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function ($_03, mlhki) {
      if (!($_03 instanceof mlhki)) throw new TypeError('Cannot call a class as a function');
    }(this, wyz$_), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, (0x0, jglikh['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if ('string' != typeof mnoj || !/(^ws:\/\/)|(^wss:\/\/)/['test'](mnoj)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + mnoj + '\' is invalid');return this['url'] = mnoj, this['readyState'] = wyz$_['CONNECTING'], jlik = wx['connectSocket']({ 'url': mnoj, 'protocols': Array['isArray'](jlik) ? jlik : [jlik] }), (kgjih['set'](this, jlik), jlik['onClose'](function (lkhjmi) {
      z2$_0['readyState'] = wyz$_['CLOSED'], 'function' == typeof z2$_0['onclose'] && z2$_0['onclose'](lkhjmi);
    }), jlik['onMessage'](function (qrmnop) {
      'function' == typeof z2$_0['onmessage'] && z2$_0['onmessage'](qrmnop);
    }), jlik['onOpen'](function () {
      z2$_0['readyState'] = wyz$_['OPEN'], 'function' == typeof z2$_0['onopen'] && z2$_0['onopen']();
    }), jlik['onError'](function (mljkn) {
      'function' == typeof z2$_0['onerror'] && z2$_0['onerror'](new Error(mljkn['errMsg']));
    }), this);
  }_243['CONNECTING'] = 0x0, _243['OPEN'] = 0x1, _243['CLOSING'] = 0x2, _243['CLOSED'] = 0x3, xuywv['default'] = _243;
}, function (cfdeg, rompn, defca) {
  'use strict';

  Object['defineProperty'](rompn, '__esModule', { 'value': !0x0 });var khlm = function (aebfdc, eighdf, $vxwzy) {
    return eighdf && wyvuzx(aebfdc['prototype'], eighdf), $vxwzy && wyvuzx(aebfdc, $vxwzy), aebfdc;
  };function wyvuzx(klpon, mnopqr) {
    for (var zvwyxu = 0x0; zvwyxu < mnopqr['length']; zvwyxu++) {
      var qrptsu = mnopqr[zvwyxu];qrptsu['enumerable'] = qrptsu['enumerable'] || !0x1, qrptsu['configurable'] = !0x0, 'value' in qrptsu && (qrptsu['writable'] = !0x0), Object['defineProperty'](klpon, qrptsu['key'], qrptsu);
    }
  }var sonrp = defca(0x8);khlm(qtrps, [{ 'key': 'construct', 'value': function () {
      if ((0x0, sonrp['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
    } }]), khlm = qtrps;function qtrps() {
    !function (usqvrt, wvuyzx) {
      if (!(usqvrt instanceof wvuyzx)) throw new TypeError('Cannot call a class as a function');
    }(this, qtrps);
  }rompn['default'] = khlm;
}, function (tqsrvu, lkmonp, xvwuts) {
  'use strict';

  Object['defineProperty'](lkmonp, '__esModule', { 'value': !0x0 });var x$zy0 = xvwuts(0x8),
      _y0z$x = { get 'length'() {
      return wx['getStorageInfoSync']()['keys']['length'];
    }, 'key': function (rqps) {
      return wx['getStorageInfoSync']()['keys'][rqps];
    }, 'getItem': function (kigjf) {
      return wx['getStorageSync'](kigjf);
    }, 'setItem': function (wuvsr, igjhk) {
      return wx['setStorageSync'](wuvsr, igjhk);
    }, 'removeItem': function (tspruq) {
      wx['removeStorageSync'](tspruq);
    }, 'clear': function () {
      wx['clearStorageSync']();
    } },
      daefb = {};xvwuts = { get 'length'() {
      return Object['keys'](daefb)['length'];
    }, 'key': function (lmijhk) {
      return Object['keys'](daefb)[lmijhk];
    }, 'getItem': function (oqrtp) {
      return daefb[oqrtp];
    }, 'setItem': function (kmni, vwtyux) {
      daefb[kmni] = vwtyux;
    }, 'removeItem': function (uxyvt) {
      delete daefb[uxyvt];
    }, 'clear': function () {
      daefb = {};
    } }, _y0z$x = (0x0, x$zy0['isSubContext'])() ? xvwuts : _y0z$x, lkmonp['default'] = _y0z$x;
}, function (pnqsor, pmolnq) {
  'use strict';

  Object['defineProperty'](pmolnq, '__esModule', { 'value': !0x0 }), pmolnq['default'] = { 'href': 'bbbgame.js', 'reload': function () {} };
}]);