var p = wx.$h;
!function (fgiehj) {
  var dbcfa = {};function __webpack_require__(ifkghj) {
    if (dbcfa[ifkghj]) return dbcfa[ifkghj]['exports'];var tyxvsw = dbcfa[ifkghj] = { 'exports': {}, 'id': ifkghj, 'loaded': !0x1 };return fgiehj[ifkghj]['call'](tyxvsw['exports'], tyxvsw, tyxvsw['exports'], __webpack_require__), tyxvsw['loaded'] = !0x0, tyxvsw['exports'];
  }__webpack_require__['m'] = fgiehj, __webpack_require__['c'] = dbcfa, __webpack_require__['p'] = '', __webpack_require__(0x0);
}([function (_0$1z, linj, porsnq) {
  'use strict';
  var pqno = function (_2$z10) {
    {
      if (_2$z10 && _2$z10['__esModule']) return _2$z10;var z1_$y = {};if (null != _2$z10) {
        for (var wrvt in _2$z10) Object['prototype']['hasOwnProperty']['call'](_2$z10, wrvt) && (z1_$y[wrvt] = _2$z10[wrvt]);
      }return z1_$y['default'] = _2$z10, z1_$y;
    }
  }(porsnq(0x1)),
      $x_wy = porsnq(0x4),
      glijh = (dfghi = $x_wy) && dfghi['__esModule'] ? dfghi : { 'default': dfghi },
      dfghi,
      abefd = GameGlobal;GameGlobal['__isAdapterInjected'] || (GameGlobal['__isAdapterInjected'] = !0x0, function () {
    pqno['addEventListener'] = function (pomr, nmkl) {
      pqno['document']['addEventListener'](pomr, nmkl);
    }, pqno['removeEventListener'] = function (edhfig, wtyzxv) {
      pqno['document']['removeEventListener'](edhfig, wtyzxv);
    }, pqno['canvas'] && (pqno['canvas']['addEventListener'] = pqno['addEventListener'], pqno['canvas']['removeEventListener'] = pqno['removeEventListener']), abefd['sharedCanvas'] && (sharedCanvas['__proto__']['__proto__'] = new glijh['default']('canvas'), sharedCanvas['addEventListener'] = pqno['addEventListener'], sharedCanvas['removeEventListener'] = pqno['removeEventListener']);var opqlnm = wx['getSystemInfoSync']()['platform'];if ('undefined' == typeof __devtoolssubcontext && 'devtools' === opqlnm) {
      for (var xvwzyt in pqno) {
        var cgebdf = Object['getOwnPropertyDescriptor'](abefd, xvwzyt);cgebdf && !0x0 !== cgebdf['configurable'] || Object['defineProperty'](window, xvwzyt, { 'value': pqno[xvwzyt] });
      }for (var wz$y in pqno['document']) {
        var ehcgd = Object['getOwnPropertyDescriptor'](abefd['document'], wz$y);ehcgd && !0x0 !== ehcgd['configurable'] || Object['defineProperty'](abefd['document'], wz$y, { 'value': pqno['document'][wz$y] });
      }window['parent'] = window;
    } else {
      for (var yx_z$0 in pqno) abefd[yx_z$0] = pqno[yx_z$0];abefd['window'] = pqno, window = abefd, window['top'] = window['parent'] = window;
    }
  }());
}, function (becdaf, z$x0_y, _$yz10) {
  'use strict';
  Object['defineProperty'](z$x0_y, '__esModule', { 'value': !0x0 }), z$x0_y['cancelAnimationFrame'] = z$x0_y['requestAnimationFrame'] = z$x0_y['clearInterval'] = z$x0_y['clearTimeout'] = z$x0_y['setInterval'] = z$x0_y['setTimeout'] = z$x0_y['canvas'] = z$x0_y['location'] = z$x0_y['localStorage'] = z$x0_y['HTMLElement'] = z$x0_y['FileReader'] = z$x0_y['Audio'] = z$x0_y['Image'] = z$x0_y['WebSocket'] = z$x0_y['XMLHttpRequest'] = z$x0_y['navigator'] = z$x0_y['document'] = void 0x0;var ijklmn = _$yz10(0x2);Object['keys'](ijklmn)['forEach'](function (opqrn) {
    'default' !== opqrn && '__esModule' !== opqrn && Object['defineProperty'](z$x0_y, opqrn, { 'enumerable': !0x0, 'get': function () {
        return ijklmn[opqrn];
      } });
  });var efchd = _$yz10(0x3);Object['keys'](efchd)['forEach'](function (hdefc) {
    'default' !== hdefc && '__esModule' !== hdefc && Object['defineProperty'](z$x0_y, hdefc, { 'enumerable': !0x0, 'get': function () {
        return efchd[hdefc];
      } });
  });var xw$yz = qomp(_$yz10(0x9)),
      lnpkm = _$yz10(0x11),
      oqlm = qomp(_$yz10(0xa)),
      srqwv = qomp(_$yz10(0x12)),
      gceh = qomp(_$yz10(0x13)),
      ptvqr = qomp(_$yz10(0x14)),
      xwtsyv = qomp(_$yz10(0xb)),
      mkijh = qomp(_$yz10(0xc)),
      rnpqm = qomp(_$yz10(0x15)),
      fegcd = qomp(_$yz10(0x4)),
      ikml = qomp(_$yz10(0x16));_$yz10 = qomp(_$yz10(0x17));function qomp(pmrqo) {
    return pmrqo && pmrqo['__esModule'] ? pmrqo : { 'default': pmrqo };
  }z$x0_y['document'] = oqlm['default'], z$x0_y['navigator'] = srqwv['default'], z$x0_y['XMLHttpRequest'] = gceh['default'], z$x0_y['WebSocket'] = ptvqr['default'], z$x0_y['Image'] = xwtsyv['default'], z$x0_y['Audio'] = mkijh['default'], z$x0_y['FileReader'] = rnpqm['default'], z$x0_y['HTMLElement'] = fegcd['default'], z$x0_y['localStorage'] = ikml['default'], z$x0_y['location'] = _$yz10['default'], xw$yz = (0x0, lnpkm['isSubContext'])() ? void 0x0 : new xw$yz['default'](), (z$x0_y['canvas'] = xw$yz, z$x0_y['setTimeout'] = setTimeout, z$x0_y['setInterval'] = setInterval, z$x0_y['clearTimeout'] = clearTimeout, z$x0_y['clearInterval'] = clearInterval, z$x0_y['requestAnimationFrame'] = requestAnimationFrame, z$x0_y['cancelAnimationFrame'] = cancelAnimationFrame);
}, function (efhjg, $203) {
  'use strict';
  Object['defineProperty']($203, '__esModule', { 'value': !0x0 });var stpqv = wx['getSystemInfoSync'](),
      x$zy = stpqv['screenWidth'],
      jikl = stpqv['screenHeight'],
      stpqv = stpqv['devicePixelRatio'];x$zy = $203['innerWidth'] = x$zy, jikl = $203['innerHeight'] = jikl, $203['devicePixelRatio'] = stpqv, $203['screen'] = { 'availWidth': x$zy, 'availHeight': jikl }, $203['performance'] = { 'now': function () {
      return Date['now']() / 0x3e8;
    } }, $203['ontouchstart'] = null, $203['ontouchmove'] = null, $203['ontouchend'] = null;
}, function (wvqs, mlkni, $ywzxv) {
  'use strict';
  Object['defineProperty'](mlkni, '__esModule', { 'value': !0x0 }), mlkni['HTMLCanvasElement'] = mlkni['HTMLImageElement'] = void 0x0;var vtwqr = $ywzxv(0x4);$ywzxv = (rsqtpo = vtwqr) && rsqtpo['__esModule'] ? rsqtpo : { 'default': rsqtpo };var rsqtpo;function zxyw$(pno, ijhml) {
    if (!(pno instanceof ijhml)) throw new TypeError('Cannot call a class as a function');
  }function twzyx(rqpnos, rqpt) {
    if (!rqpnos) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !rqpt || 'object' != typeof rqpt && 'function' != typeof rqpt ? rqpnos : rqpt;
  }function z$(klnjmo, ebdfcg) {
    if ('function' != typeof ebdfcg && null !== ebdfcg) throw new TypeError('Super expression must either be null or a function, not ' + typeof ebdfcg);klnjmo['prototype'] = Object['create'](ebdfcg && ebdfcg['prototype'], { 'constructor': { 'value': klnjmo, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), ebdfcg && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](klnjmo, ebdfcg) : klnjmo['__proto__'] = ebdfcg);
  }mlkni['HTMLImageElement'] = (z$(jlihk, $ywzxv['default']), jlihk);function jlihk() {
    return zxyw$(this, jlihk), twzyx(this, (jlihk['__proto__'] || Object['getPrototypeOf'](jlihk))['call'](this, 'img'));
  }mlkni['HTMLCanvasElement'] = (z$(zy_$x0, $ywzxv['default']), zy_$x0);function zy_$x0() {
    return zxyw$(this, zy_$x0), twzyx(this, (zy_$x0['__proto__'] || Object['getPrototypeOf'](zy_$x0))['call'](this, 'canvas'));
  }
}, function (osq, lqon, klighj) {
  'use strict';
  Object['defineProperty'](lqon, '__esModule', { 'value': !0x0 });var vxyzw$ = function (vxzy, fghik, hejg) {
    return fghik && z$xvy(vxzy['prototype'], fghik), hejg && z$xvy(vxzy, hejg), vxzy;
  };function z$xvy(z1_$0, noqm) {
    for (var ifhje = 0x0; ifhje < noqm['length']; ifhje++) {
      var lnompk = noqm[ifhje];lnompk['enumerable'] = lnompk['enumerable'] || !0x1, lnompk['configurable'] = !0x0, 'value' in lnompk && (lnompk['writable'] = !0x0), Object['defineProperty'](z1_$0, lnompk['key'], lnompk);
    }
  }var qmnlpo = klighj(0x5),
      wyxsvt = (jihgkl = qmnlpo) && jihgkl['__esModule'] ? jihgkl : { 'default': jihgkl },
      jihgkl,
      qnrpos = klighj(0x8),
      gfhjie = klighj(0x2);(function (hilmkj, qonpl) {
    if ('function' != typeof qonpl && null !== qonpl) throw new TypeError('Super expression must either be null or a function, not ' + typeof qonpl);hilmkj['prototype'] = Object['create'](qonpl && qonpl['prototype'], { 'constructor': { 'value': hilmkj, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), qonpl && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](hilmkj, qonpl) : hilmkj['__proto__'] = qonpl);
  })(dgfehc, wyxsvt['default']), vxyzw$(dgfehc, [{ 'key': 'setAttribute', 'value': function (hjmik, vzxty) {
      this[hjmik] = vzxty;
    } }, { 'key': 'getAttribute', 'value': function (jlkmhi) {
      return this[jlkmhi];
    } }, { 'key': 'getBoundingClientRect', 'value': function () {
      return { 'top': 0x0, 'left': 0x0, 'width': gfhjie['innerWidth'], 'height': gfhjie['innerHeight'] };
    } }, { 'key': 'focus', 'value': function () {} }, { 'key': 'clientWidth', 'get': function () {
      var khmij = parseInt(this['style']['fontSize'], 0xa) * this['innerHTML']['length'];return Number['isNaN'](khmij) ? 0x0 : khmij;
    } }, { 'key': 'clientHeight', 'get': function () {
      var wsyxt = parseInt(this['style']['fontSize'], 0xa);return Number['isNaN'](wsyxt) ? 0x0 : wsyxt;
    } }]), vxyzw$ = dgfehc;function dgfehc() {
    var kijghf = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';!function (qmlnpo, stvxrw) {
      if (!(qmlnpo instanceof stvxrw)) throw new TypeError('Cannot call a class as a function');
    }(this, dgfehc);var gbefd = function (heid, ghie) {
      if (!heid) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !ghie || 'object' != typeof ghie && 'function' != typeof ghie ? heid : ghie;
    }(this, (dgfehc['__proto__'] || Object['getPrototypeOf'](dgfehc))['call'](this));return gbefd['className'] = '', gbefd['childern'] = [], gbefd['style'] = { 'width': gfhjie['innerWidth'] + 'px', 'height': gfhjie['innerHeight'] + 'px' }, gbefd['insertBefore'] = qnrpos['noop'], gbefd['innerHTML'] = '', gbefd['tagName'] = kijghf['toUpperCase'](), gbefd;
  }lqon['default'] = vxyzw$;
}, function (ywtxvs, mkpol, wsvq) {
  'use strict';
  Object['defineProperty'](mkpol, '__esModule', { 'value': !0x0 });var stqpo = wsvq(0x6),
      sonqrp;(function (rsvtpq, stvqw) {
    if ('function' != typeof stvqw && null !== stvqw) throw new TypeError('Super expression must either be null or a function, not ' + typeof stvqw);rsvtpq['prototype'] = Object['create'](stvqw && stvqw['prototype'], { 'constructor': { 'value': rsvtpq, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), stvqw && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](rsvtpq, stvqw) : rsvtpq['__proto__'] = stvqw);
  })(idehg, ((sonqrp = stqpo) && sonqrp['__esModule'] ? sonqrp : { 'default': sonqrp })['default']), wsvq = idehg;function idehg() {
    !function (mlnki, npl) {
      if (!(mlnki instanceof npl)) throw new TypeError('Cannot call a class as a function');
    }(this, idehg);var oqprst = function (ikmlh, _1243) {
      if (!ikmlh) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !_1243 || 'object' != typeof _1243 && 'function' != typeof _1243 ? ikmlh : _1243;
    }(this, (idehg['__proto__'] || Object['getPrototypeOf'](idehg))['call'](this));return oqprst['className'] = '', oqprst['children'] = [], oqprst;
  }mkpol['default'] = wsvq;
}, function (pln, hkmlj, zwvxt) {
  'use strict';
  Object['defineProperty'](hkmlj, '__esModule', { 'value': !0x0 });var sprqo = function (_402, ystvx, xvzw$y) {
    return ystvx && kijlgh(_402['prototype'], ystvx), xvzw$y && kijlgh(_402, xvzw$y), _402;
  };function kijlgh(svqtrp, kjnli) {
    for (var wvyxst = 0x0; wvyxst < kjnli['length']; wvyxst++) {
      var xytzwv = kjnli[wvyxst];xytzwv['enumerable'] = xytzwv['enumerable'] || !0x1, xytzwv['configurable'] = !0x0, 'value' in xytzwv && (xytzwv['writable'] = !0x0), Object['defineProperty'](svqtrp, xytzwv['key'], xytzwv);
    }
  }var fgide = zwvxt(0x7),
      vtxsy;(function (inmkj, pml) {
    if ('function' != typeof pml && null !== pml) throw new TypeError('Super expression must either be null or a function, not ' + typeof pml);inmkj['prototype'] = Object['create'](pml && pml['prototype'], { 'constructor': { 'value': inmkj, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), pml && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](inmkj, pml) : inmkj['__proto__'] = pml);
  })(vstqw, ((vtxsy = fgide) && vtxsy['__esModule'] ? vtxsy : { 'default': vtxsy })['default']), sprqo(vstqw, [{ 'key': 'appendChild', 'value': function (fjhegi) {
      if (!(fjhegi instanceof vstqw)) throw new TypeError('Failed to executed \'appendChild\' on \'Node\': parameter 1 is not of type \'Node\'.');this['childNodes']['push'](fjhegi);
    } }, { 'key': 'cloneNode', 'value': function () {
      var pmkol = Object['create'](this);return Object['assign'](pmkol, this), pmkol;
    } }, { 'key': 'removeChild', 'value': function (jokmnl) {
      var z$1_y = this['childNodes']['findIndex'](function (xsvr) {
        return xsvr === jokmnl;
      });return -0x1 < z$1_y ? this['childNodes']['splice'](z$1_y, 0x1) : null;
    } }]), sprqo = vstqw;function vstqw() {
    !function (tyxvz, rotq) {
      if (!(tyxvz instanceof rotq)) throw new TypeError('Cannot call a class as a function');
    }(this, vstqw);var qsvrt = function (_0zyx, vwyxts) {
      if (!_0zyx) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !vwyxts || 'object' != typeof vwyxts && 'function' != typeof vwyxts ? _0zyx : vwyxts;
    }(this, (vstqw['__proto__'] || Object['getPrototypeOf'](vstqw))['call'](this));return qsvrt['childNodes'] = [], qsvrt;
  }hkmlj['default'] = sprqo;
}, function (_y0z$, zy_$01) {
  'use strict';
  Object['defineProperty'](zy_$01, '__esModule', { 'value': !0x0 });var gkihj = function (vtqws, sqonrp, lnikm) {
    return sqonrp && hgfeid(vtqws['prototype'], sqonrp), lnikm && hgfeid(vtqws, lnikm), vtqws;
  };function hgfeid(konmp, qorpnm) {
    for (var tzvyw = 0x0; tzvyw < qorpnm['length']; tzvyw++) {
      var ecbdg = qorpnm[tzvyw];ecbdg['enumerable'] = ecbdg['enumerable'] || !0x1, ecbdg['configurable'] = !0x0, 'value' in ecbdg && (ecbdg['writable'] = !0x0), Object['defineProperty'](konmp, ecbdg['key'], ecbdg);
    }
  }var $yvw = new WeakMap();gkihj(zwyxvt, [{ 'key': 'addEventListener', 'value': function (acdfbe, jilkgh) {
      var ecdhfg = 0x2 < arguments['length'] && void 0x0 !== arguments[0x2] ? arguments[0x2] : {},
          z$y10_ = $yvw['get'](this);z$y10_ || $yvw['set'](this, z$y10_ = {}), z$y10_[acdfbe] || (z$y10_[acdfbe] = []), z$y10_[acdfbe]['push'](jilkgh), ecdhfg['capture'] && console['warn']('EventTarget.addEventListener: options.capture is not implemented.'), ecdhfg['once'] && console['warn']('EventTarget.addEventListener: options.once is not implemented.'), ecdhfg['passive'] && console['warn']('EventTarget.addEventListener: options.passive is not implemented.');
    } }, { 'key': 'removeEventListener', 'value': function (_2013$, z$y01) {
      var _w$yzx = $yvw['get'](this)[_2013$];if (_w$yzx && 0x0 < _w$yzx['length']) {
        for (var soptrq = _w$yzx['length']; soptrq--;) if (_w$yzx[soptrq] === z$y01) {
          _w$yzx['splice'](soptrq, 0x1);break;
        }
      }
    } }, { 'key': 'dispatchEvent', 'value': function () {
      var klmjhi = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : {},
          ompknl = $yvw['get'](this)[klmjhi['type']];if (ompknl) {
        for (var limkj = 0x0; limkj < ompknl['length']; limkj++) ompknl[limkj](klmjhi);
      }
    } }]), gkihj = zwyxvt;function zwyxvt() {
    !function (jonm, cgedf) {
      if (!(jonm instanceof cgedf)) throw new TypeError('Cannot call a class as a function');
    }(this, zwyxvt), $yvw['set'](this, {});
  }zy_$01['default'] = gkihj;
}, function (oprqmn, srnpqo) {
  'use strict';
  Object['defineProperty'](srnpqo, '__esModule', { 'value': !0x0 }), srnpqo['noop'] = function () {}, srnpqo['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (tyzwvx, ytvwsx, omknlj) {
  'use strict';
  Object['defineProperty'](ytvwsx, '__esModule', { 'value': !0x0 }), ytvwsx['default'] = function () {
    var kjmnlo = wx['createCanvas']();return kjmnlo['type'] = 'canvas', kjmnlo['__proto__']['__proto__'] = new dhfgie['default']('canvas'), kjmnlo['getContext'], (kjmnlo['getBoundingClientRect'] = function () {
      return { 'top': 0x0, 'left': 0x0, 'width': window['innerWidth'], 'height': window['innerHeight'] };
    }, kjmnlo);
  }, omknlj(0x3);var dhfgie = gkjfi(omknlj(0x4));gkjfi(omknlj(0xa));function gkjfi(afcb) {
    return afcb && afcb['__esModule'] ? afcb : { 'default': afcb };
  }
}, function (dfigeh, hegdc, vwztyx) {
  'use strict';
  Object['defineProperty'](hegdc, '__esModule', { 'value': !0x0 });var hmjkl = function (hjgfk) {
    {
      if (hjgfk && hjgfk['__esModule']) return hjgfk;var oknljm = {};if (null != hjgfk) {
        for (var eifh in hjgfk) Object['prototype']['hasOwnProperty']['call'](hjgfk, eifh) && (oknljm[eifh] = hjgfk[eifh]);
      }return oknljm['default'] = hjgfk, oknljm;
    }
  }(vwztyx(0x1)),
      qmnpl = kgih(vwztyx(0x4)),
      jikgfh = kgih(vwztyx(0xb)),
      gfied = kgih(vwztyx(0xc)),
      nspor = kgih(vwztyx(0x9));function kgih(dgecb) {
    return dgecb && dgecb['__esModule'] ? dgecb : { 'default': dgecb };
  }vwztyx(0xf);var omqpln = {},
      ponq = { 'readyState': 'complete', 'visibilityState': 'visible', 'documentElement': hmjkl, 'hidden': !0x1, 'style': {}, 'location': hmjkl['location'], 'ontouchstart': null, 'ontouchmove': null, 'ontouchend': null, 'head': new qmnpl['default']('head'), 'body': new qmnpl['default']('body'), 'createElement': function (onkmjl) {
      return 'canvas' === onkmjl ? new nspor['default']() : 'audio' === onkmjl ? new gfied['default']() : 'img' === onkmjl ? new jikgfh['default']() : new qmnpl['default'](onkmjl);
    }, 'getElementById': function (hefgdi) {
      return hefgdi === hmjkl['canvas']['id'] ? hmjkl['canvas'] : null;
    }, 'getElementsByTagName': function (ghkf) {
      return 'head' === ghkf ? [ponq['head']] : 'body' === ghkf ? [ponq['body']] : 'canvas' === ghkf ? [hmjkl['canvas']] : [];
    }, 'querySelector': function (vxywz$) {
      return 'head' === vxywz$ ? ponq['head'] : 'body' === vxywz$ ? ponq['body'] : 'canvas' === vxywz$ || vxywz$ === '#' + hmjkl['canvas']['id'] ? hmjkl['canvas'] : null;
    }, 'querySelectorAll': function (iklgh) {
      return 'head' === iklgh ? [ponq['head']] : 'body' === iklgh ? [ponq['body']] : 'canvas' === iklgh ? [hmjkl['canvas']] : [];
    }, 'addEventListener': function (pqomrn, xy_0$) {
      omqpln[pqomrn] || (omqpln[pqomrn] = []), omqpln[pqomrn]['push'](xy_0$);
    }, 'removeEventListener': function (z$_x0, x_zw$) {
      var higjlk = omqpln[z$_x0];if (higjlk && 0x0 < higjlk['length']) {
        for (var $_z0yx = higjlk['length']; $_z0yx--;) if (higjlk[$_z0yx] === x_zw$) {
          higjlk['splice']($_z0yx, 0x1);break;
        }
      }
    }, 'dispatchEvent': function (onqsp) {
      var jihkf = omqpln[onqsp['type']];if (jihkf) {
        for (var om = 0x0; om < jihkf['length']; om++) jihkf[om](onqsp);
      }
    } };hegdc['default'] = ponq;
}, function (norpqs, $x_y0z) {
  'use strict';
  Object['defineProperty']($x_y0z, '__esModule', { 'value': !0x0 }), $x_y0z['default'] = function () {
    return wx['createImage']();
  };
}, function (gihfde, fhkijg, z1y_$0) {
  'use strict';
  Object['defineProperty'](fhkijg, '__esModule', { 'value': !0x0 });var qvrt = function (mqlopn, vsxwr, snprq) {
    return vsxwr && bcdegf(mqlopn['prototype'], vsxwr), snprq && bcdegf(mqlopn, snprq), mqlopn;
  };function bcdegf(xtwsr, wvxtr) {
    for (var lmjokn = 0x0; lmjokn < wvxtr['length']; lmjokn++) {
      var z0y1_ = wvxtr[lmjokn];z0y1_['enumerable'] = z0y1_['enumerable'] || !0x1, z0y1_['configurable'] = !0x0, 'value' in z0y1_ && (z0y1_['writable'] = !0x0), Object['defineProperty'](xtwsr, z0y1_['key'], z0y1_);
    }
  }var lkigh = z1y_$0(0xd),
      gihejf = (nkjmil = lkigh) && nkjmil['__esModule'] ? nkjmil : { 'default': nkjmil },
      nkjmil,
      mjhki = z1y_$0(0x8);function _413(vyw$zx, bcefgd) {
    if (!vyw$zx) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !bcefgd || 'object' != typeof bcefgd && 'function' != typeof bcefgd ? vyw$zx : bcefgd;
  }var njikm = 0x0,
      $_210 = 0x1,
      y$xvz = 0x2,
      wqvsr = 0x3,
      nrmqop = 0x4,
      ljmikh = new WeakMap(),
      wqrtvs = new WeakMap();new WeakMap(), new WeakMap(), (function (jeigh, lhkgi) {
    if ('function' != typeof lhkgi && null !== lhkgi) throw new TypeError('Super expression must either be null or a function, not ' + typeof lhkgi);jeigh['prototype'] = Object['create'](lhkgi && lhkgi['prototype'], { 'constructor': { 'value': jeigh, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), lhkgi && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](jeigh, lhkgi) : jeigh['__proto__'] = lhkgi);
  }(rptsq, gihejf['default']), qvrt(rptsq, [{ 'key': 'load', 'value': function () {
      console['warn']('HTMLAudioElement.load() is not implemented.');
    } }, { 'key': 'play', 'value': function () {
      (0x0, mjhki['isSubContext'])() || ljmikh['get'](this)['play']();
    } }, { 'key': 'pause', 'value': function () {
      (0x0, mjhki['isSubContext'])() || ljmikh['get'](this)['pause']();
    } }, { 'key': 'canPlayType', 'value': function () {
      var qpsotr = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';return 'string' == typeof qpsotr && (-0x1 < qpsotr['indexOf']('audio/mpeg') || qpsotr['indexOf']('audio/mp4')) ? 'probably' : '';
    } }, { 'key': 'cloneNode', 'value': function () {
      var fghedc = new rptsq();return (0x0, mjhki['isSubContext'])() || (fghedc['loop'] = ljmikh['get'](this)['loop'], fghedc['autoplay'] = ljmikh['get'](this)['loop'], fghedc['src'] = this['src']), fghedc;
    } }, { 'key': 'currentTime', 'get': function () {
      return (0x0, mjhki['isSubContext'])() ? 0x0 : ljmikh['get'](this)['currentTime'];
    }, 'set': function (rspqt) {
      (0x0, mjhki['isSubContext'])() || ljmikh['get'](this)['seek'](rspqt);
    } }, { 'key': 'src', 'get': function () {
      return wqrtvs['get'](this);
    }, 'set': function (prvt) {
      wqrtvs['set'](this, prvt), (0x0, mjhki['isSubContext'])() || (ljmikh['get'](this)['src'] = prvt);
    } }, { 'key': 'loop', 'get': function () {
      return !(0x0, mjhki['isSubContext'])() && ljmikh['get'](this)['loop'];
    }, 'set': function (osrqnp) {
      (0x0, mjhki['isSubContext'])() || (ljmikh['get'](this)['loop'] = osrqnp);
    } }, { 'key': 'autoplay', 'get': function () {
      return !(0x0, mjhki['isSubContext'])() && ljmikh['get'](this)['autoplay'];
    }, 'set': function (vxwstr) {
      (0x0, mjhki['isSubContext'])() || (ljmikh['get'](this)['autoplay'] = vxwstr);
    } }, { 'key': 'paused', 'get': function () {
      return !(0x0, mjhki['isSubContext'])() && ljmikh['get'](this)['paused'];
    } }]), qvrt = rptsq);function rptsq(gifkhj) {
    !function (wqtvrs, ljhig) {
      if (!(wqtvrs instanceof ljhig)) throw new TypeError('Cannot call a class as a function');
    }(this, rptsq);var txzvwy = _413(this, (rptsq['__proto__'] || Object['getPrototypeOf'](rptsq))['call'](this));if (txzvwy['HAVE_NOTHING'] = njikm, txzvwy['HAVE_METADATA'] = $_210, txzvwy['HAVE_CURRENT_DATA'] = y$xvz, txzvwy['HAVE_FUTURE_DATA'] = wqvsr, txzvwy['HAVE_ENOUGH_DATA'] = nrmqop, txzvwy['readyState'] = njikm, (0x0, mjhki['isSubContext'])()) return console['warn']('HTMLAudioElement is not supported in SubContext.'), _413(txzvwy);wqrtvs['set'](txzvwy, '');var tqorps = wx['createInnerAudioContext']();return ljmikh['set'](txzvwy, tqorps), tqorps['onCanplay'](function () {
      txzvwy['dispatchEvent']({ 'type': 'load' }), txzvwy['dispatchEvent']({ 'type': 'loadend' }), txzvwy['dispatchEvent']({ 'type': 'canplay' }), txzvwy['dispatchEvent']({ 'type': 'canplaythrough' }), txzvwy['dispatchEvent']({ 'type': 'loadedmetadata' }), txzvwy['readyState'] = y$xvz;
    }), tqorps['onPlay'](function () {
      txzvwy['dispatchEvent']({ 'type': 'play' });
    }), tqorps['onPause'](function () {
      txzvwy['dispatchEvent']({ 'type': 'pause' });
    }), tqorps['onEnded'](function () {
      txzvwy['dispatchEvent']({ 'type': 'ended' }), txzvwy['readyState'] = nrmqop;
    }), tqorps['onError'](function () {
      txzvwy['dispatchEvent']({ 'type': 'error' });
    }), gifkhj && (ljmikh['get'](txzvwy)['src'] = gifkhj), txzvwy;
  }fhkijg['default'] = qvrt;
}, function (xwyz, khlmi, lnikjm) {
  'use strict';
  Object['defineProperty'](khlmi, '__esModule', { 'value': !0x0 });var ecdfg = lnikjm(0xe),
      tyvz;(function (mnqpr, jgfi) {
    if ('function' != typeof jgfi && null !== jgfi) throw new TypeError('Super expression must either be null or a function, not ' + typeof jgfi);mnqpr['prototype'] = Object['create'](jgfi && jgfi['prototype'], { 'constructor': { 'value': mnqpr, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), jgfi && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](mnqpr, jgfi) : mnqpr['__proto__'] = jgfi);
  })(qosp, ((tyvz = ecdfg) && tyvz['__esModule'] ? tyvz : { 'default': tyvz })['default']), lnikjm = qosp;function qosp() {
    return function (spnor, orspqn) {
      if (!(spnor instanceof orspqn)) throw new TypeError('Cannot call a class as a function');
    }(this, qosp), function (plqnm, okmn) {
      if (!plqnm) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !okmn || 'object' != typeof okmn && 'function' != typeof okmn ? plqnm : okmn;
    }(this, (qosp['__proto__'] || Object['getPrototypeOf'](qosp))['call'](this, 'audio'));
  }khlmi['default'] = lnikjm;
}, function (jlihkm, x$_zyw, ecgdfh) {
  'use strict';
  Object['defineProperty'](x$_zyw, '__esModule', { 'value': !0x0 });var xtzvwy = function (lmpqno, sxrwt, rpsvq) {
    return sxrwt && nmijk(lmpqno['prototype'], sxrwt), rpsvq && nmijk(lmpqno, rpsvq), lmpqno;
  };function nmijk(fhec, komlj) {
    for (var wrtxs = 0x0; wrtxs < komlj['length']; wrtxs++) {
      var zvxw = komlj[wrtxs];zvxw['enumerable'] = zvxw['enumerable'] || !0x1, zvxw['configurable'] = !0x0, 'value' in zvxw && (zvxw['writable'] = !0x0), Object['defineProperty'](fhec, zvxw['key'], zvxw);
    }
  }var kjgfi = ecgdfh(0x4),
      gedfcb;(function (hgdefi, ljgkhi) {
    if ('function' != typeof ljgkhi && null !== ljgkhi) throw new TypeError('Super expression must either be null or a function, not ' + typeof ljgkhi);hgdefi['prototype'] = Object['create'](ljgkhi && ljgkhi['prototype'], { 'constructor': { 'value': hgdefi, 'enumerable': !0x1, 'writable': !0x0, 'configurable': !0x0 } }), ljgkhi && (Object['setPrototypeOf'] ? Object['setPrototypeOf'](hgdefi, ljgkhi) : hgdefi['__proto__'] = ljgkhi);
  })(tzwyvx, ((gedfcb = kjgfi) && gedfcb['__esModule'] ? gedfcb : { 'default': gedfcb })['default']), xtzvwy(tzwyvx, [{ 'key': 'addTextTrack', 'value': function () {} }, { 'key': 'captureStream', 'value': function () {} }, { 'key': 'fastSeek', 'value': function () {} }, { 'key': 'load', 'value': function () {} }, { 'key': 'pause', 'value': function () {} }, { 'key': 'play', 'value': function () {} }]), xtzvwy = tzwyvx;function tzwyvx(kijmln) {
    return function (ljimnk, rnmopq) {
      if (!(ljimnk instanceof rnmopq)) throw new TypeError('Cannot call a class as a function');
    }(this, tzwyvx), function (higjkl, hmlik) {
      if (!higjkl) throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return !hmlik || 'object' != typeof hmlik && 'function' != typeof hmlik ? higjkl : hmlik;
    }(this, (tzwyvx['__proto__'] || Object['getPrototypeOf'](tzwyvx))['call'](this, kijmln));
  }x$_zyw['default'] = xtzvwy;
}, function (gkih, xtzwvy, knomjl) {
  'use strict';
  knomjl(0x10);
}, function (stxvyw, mhlkj, knmol) {
  'use strict';
  var _120z$ = function (lnkpo) {
    {
      if (lnkpo && lnkpo['__esModule']) return lnkpo;var pqnrmo = {};if (null != lnkpo) {
        for (var $0_z12 in lnkpo) Object['prototype']['hasOwnProperty']['call'](lnkpo, $0_z12) && (pqnrmo[$0_z12] = lnkpo[$0_z12]);
      }return pqnrmo['default'] = lnkpo, pqnrmo;
    }
  }(knmol(0x1)),
      txyvsw = knmol(0xa),
      lomkp = (bgcdfe = txyvsw) && bgcdfe['__esModule'] ? bgcdfe : { 'default': bgcdfe },
      bgcdfe,
      pkoml = knmol(0x8);function ghd(kgihl) {
    !function (jegif, xyw$) {
      if (!(jegif instanceof xyw$)) throw new TypeError('Cannot call a class as a function');
    }(this, ghd), this['target'] = _120z$['canvas'], this['currentTarget'] = _120z$['canvas'], this['touches'] = [], this['targetTouches'] = [], this['changedTouches'] = [], this['preventDefault'] = pkoml['noop'], this['stopPropagation'] = pkoml['noop'], this['type'] = kgihl;
  }function mrnpqo(qrv) {
    return function (zwy$) {
      var vwrsq = new ghd(qrv);vwrsq['touches'] = zwy$['touches'], vwrsq['targetTouches'] = Array['prototype']['slice']['call'](zwy$['touches']), vwrsq['changedTouches'] = zwy$['changedTouches'], vwrsq['timeStamp'] = zwy$['timeStamp'], lomkp['default']['dispatchEvent'](vwrsq);
    };
  }wx['onTouchStart'](mrnpqo('touchstart')), wx['onTouchMove'](mrnpqo('touchmove')), wx['onTouchEnd'](mrnpqo('touchend')), wx['onTouchCancel'](mrnpqo('touchcancel'));
}, function (trwqv, jinlkm) {
  'use strict';
  Object['defineProperty'](jinlkm, '__esModule', { 'value': !0x0 }), jinlkm['noop'] = function () {}, jinlkm['isSubContext'] = function () {
    return 'undefined' != typeof GameGlobal && !0x0 === GameGlobal['__isSubContext'];
  };
}, function (ytxsvw, _$yxwz, rvtxws) {
  'use strict';
  Object['defineProperty'](_$yxwz, '__esModule', { 'value': !0x0 }), rvtxws = rvtxws(0x8), rvtxws = { 'platform': wx['getSystemInfoSync']()['platform'], 'language': 'zh-cn', 'appVersion': '5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1', 'userAgent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3_1 like Mac OS X) AppleWebKit/603.1.30 (KHTML, like Gecko) Mobile/14E8301 MicroMessenger/6.6.0 MiniGame NetType/WIFI Language/zh_CN', 'onLine': !0x0, 'geolocation': { 'getCurrentPosition': rvtxws['noop'], 'watchPosition': rvtxws['noop'], 'clearWatch': rvtxws['noop'] } }, _$yxwz['default'] = rvtxws;
}, function (pqsor, kfhij) {
  'use strict';
  Object['defineProperty'](kfhij, '__esModule', { 'value': !0x0 });var klhji = function (xswty, jolkm, otqspr) {
    return jolkm && kfhgij(xswty['prototype'], jolkm), otqspr && kfhgij(xswty, otqspr), xswty;
  };function kfhgij(olkpnm, xwrst) {
    for (var lmknji = 0x0; lmknji < xwrst['length']; lmknji++) {
      var khljmi = xwrst[lmknji];khljmi['enumerable'] = khljmi['enumerable'] || !0x1, khljmi['configurable'] = !0x0, 'value' in khljmi && (khljmi['writable'] = !0x0), Object['defineProperty'](olkpnm, khljmi['key'], khljmi);
    }
  }var vqtwrs = new WeakMap(),
      $_021 = new WeakMap(),
      gfcdhe = new WeakMap(),
      wtxvy = new WeakMap(),
      qnorm = new WeakMap();function cefhdg(torps) {
    if ('function' == typeof this['on' + torps]) {
      for (var qpmro = arguments['length'], ighfej = Array(0x1 < qpmro ? qpmro - 0x1 : 0x0), $2z1_0 = 0x1; $2z1_0 < qpmro; $2z1_0++) ighfej[$2z1_0 - 0x1] = arguments[$2z1_0];this['on' + torps]['apply'](this, ighfej);
    }
  }function jhgifk($y0xz) {
    this['readyState'] = $y0xz, cefhdg['call'](this, 'readystatechange');
  }klhji(bfged, [{ 'key': 'abort', 'value': function () {
      var xrtwsv = qnorm['get'](this);xrtwsv && xrtwsv['abort']();
    } }, { 'key': 'getAllResponseHeaders', 'value': function () {
      var psn = wtxvy['get'](this);return Object['keys'](psn)['map'](function (txsr) {
        return txsr + ':\x20' + psn[txsr];
      })['join']('\x0a');
    } }, { 'key': 'getResponseHeader', 'value': function (hei) {
      return wtxvy['get'](this)[hei];
    } }, { 'key': 'open', 'value': function (nmlokp, wrsxvt) {
      $_021['set'](this, nmlokp), vqtwrs['set'](this, wrsxvt), jhgifk['call'](this, bfged['OPENED']);
    } }, { 'key': 'overrideMimeType', 'value': function () {} }, { 'key': 'send', 'value': function () {
      var qotsr = this,
          vwsrt = 0x0 < arguments['length'] && void 0x0 !== arguments[0x0] ? arguments[0x0] : '';if (this['readyState'] !== bfged['OPENED']) throw new Error('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');wx['request']({ 'data': vwsrt, 'url': vqtwrs['get'](this), 'method': $_021['get'](this), 'header': gfcdhe['get'](this), 'responseType': this['responseType'], 'success': function (pqtvr) {
          var xvyzt = pqtvr['data'],
              cgfbe = pqtvr['statusCode'],
              pqtvr = pqtvr['header'];if ('string' != typeof xvyzt && !(xvyzt instanceof ArrayBuffer)) try {
            xvyzt = JSON['stringify'](xvyzt);
          } catch (y10$_z) {}if (qotsr['status'] = cgfbe, wtxvy['set'](qotsr, pqtvr), cefhdg['call'](qotsr, 'loadstart'), jhgifk['call'](qotsr, bfged['HEADERS_RECEIVED']), jhgifk['call'](qotsr, bfged['LOADING']), (qotsr['response'] = xvyzt) instanceof ArrayBuffer) {
            qotsr['responseText'] = '';var vsqtp = new Uint8Array(xvyzt),
                prqnm = vsqtp['byteLength'];for (var edg = 0x0; edg < prqnm; edg++) qotsr['responseText'] += String['fromCharCode'](vsqtp[edg]);
          } else qotsr['responseText'] = xvyzt;jhgifk['call'](qotsr, bfged['DONE']), cefhdg['call'](qotsr, 'load'), cefhdg['call'](qotsr, 'loadend');
        }, 'fail': function (_1$32) {
          _1$32 = _1$32['errMsg'], (-0x1 !== _1$32['indexOf']('abort') ? cefhdg['call'](qotsr, 'abort') : cefhdg['call'](qotsr, 'error', _1$32), cefhdg['call'](qotsr, 'loadend'));
        } });
    } }, { 'key': 'setRequestHeader', 'value': function (zy0$_x, pmlonk) {
      var zwtvy = gfcdhe['get'](this);zwtvy[zy0$_x] = pmlonk, gfcdhe['set'](this, zwtvy);
    } }]), klhji = bfged;function bfged() {
    !function (qpnros, xtsw) {
      if (!(qpnros instanceof xtsw)) throw new TypeError('Cannot call a class as a function');
    }(this, bfged), this['onabort'] = null, this['onerror'] = null, this['onload'] = null, this['onloadstart'] = null, this['onprogress'] = null, this['ontimeout'] = null, this['onloadend'] = null, this['onreadystatechange'] = null, this['readyState'] = 0x0, this['response'] = null, this['responseText'] = null, this['responseType'] = '', this['responseXML'] = null, this['status'] = 0x0, this['statusText'] = '', this['upload'] = {}, this['withCredentials'] = !0x1, gfcdhe['set'](this, { 'content-type': 'application/x-www-form-urlencoded' }), wtxvy['set'](this, {});
  }klhji['UNSEND'] = 0x0, klhji['OPENED'] = 0x1, klhji['HEADERS_RECEIVED'] = 0x2, klhji['LOADING'] = 0x3, klhji['DONE'] = 0x4, kfhij['default'] = klhji;
}, function (rptqv, pqrvt, chfe) {
  'use strict';
  Object['defineProperty'](pqrvt, '__esModule', { 'value': !0x0 });var lkjmin = function (vzxywt, lhij, z$xy_) {
    return lhij && $zyxv(vzxywt['prototype'], lhij), z$xy_ && $zyxv(vzxywt, z$xy_), vzxywt;
  };function $zyxv(orsqn, qlmpo) {
    for (var mkijhl = 0x0; mkijhl < qlmpo['length']; mkijhl++) {
      var mjkhi = qlmpo[mkijhl];mjkhi['enumerable'] = mjkhi['enumerable'] || !0x1, mjkhi['configurable'] = !0x0, 'value' in mjkhi && (mjkhi['writable'] = !0x0), Object['defineProperty'](orsqn, mjkhi['key'], mjkhi);
    }
  }var zywvtx = chfe(0x8),
      z0_2$1 = new WeakMap();lkjmin(hgc, [{ 'key': 'close', 'value': function (idhf, $xw_z) {
      this['readyState'] = hgc['CLOSING'], z0_2$1['get'](this)['close']({ 'code': idhf, 'reason': $xw_z });
    } }, { 'key': 'send', 'value': function (oprmn) {
      if ('string' != typeof oprmn && !(oprmn instanceof ArrayBuffer)) throw new TypeError('Failed to send message: The data ' + oprmn + ' is invalid');z0_2$1['get'](this)['send']({ 'data': oprmn });
    } }]), lkjmin = hgc;function hgc(omq) {
    var vtxrs = this,
        zyw_$ = 0x1 < arguments['length'] && void 0x0 !== arguments[0x1] ? arguments[0x1] : [];if (!function (sonrq, fdbgc) {
      if (!(sonrq instanceof fdbgc)) throw new TypeError('Cannot call a class as a function');
    }(this, hgc), this['binaryType'] = '', this['bufferedAmount'] = 0x0, this['extensions'] = '', this['onclose'] = null, this['onerror'] = null, this['onmessage'] = null, this['onopen'] = null, this['protocol'] = '', this['readyState'] = 0x3, (0x0, zywvtx['isSubContext'])()) throw new Error('WebSocket is not supported in SubContext.');if ('string' != typeof omq || !/(^ws:\/\/)|(^wss:\/\/)/['test'](omq)) throw new TypeError('Failed to construct \'WebSocket\': The URL \'' + omq + '\' is invalid');return this['url'] = omq, this['readyState'] = hgc['CONNECTING'], zyw_$ = wx['connectSocket']({ 'url': omq, 'protocols': Array['isArray'](zyw_$) ? zyw_$ : [zyw_$] }), (z0_2$1['set'](this, zyw_$), zyw_$['onClose'](function (gkjli) {
      vtxrs['readyState'] = hgc['CLOSED'], 'function' == typeof vtxrs['onclose'] && vtxrs['onclose'](gkjli);
    }), zyw_$['onMessage'](function (trswq) {
      'function' == typeof vtxrs['onmessage'] && vtxrs['onmessage'](trswq);
    }), zyw_$['onOpen'](function () {
      vtxrs['readyState'] = hgc['OPEN'], 'function' == typeof vtxrs['onopen'] && vtxrs['onopen']();
    }), zyw_$['onError'](function (vwtrq) {
      'function' == typeof vtxrs['onerror'] && vtxrs['onerror'](new Error(vwtrq['errMsg']));
    }), this);
  }lkjmin['CONNECTING'] = 0x0, lkjmin['OPEN'] = 0x1, lkjmin['CLOSING'] = 0x2, lkjmin['CLOSED'] = 0x3, pqrvt['default'] = lkjmin;
}, function (opnr, rswvq, z12$0) {
  'use strict';
  Object['defineProperty'](rswvq, '__esModule', { 'value': !0x0 });var hdfgc = function (dfbceg, x_0zy, rswt) {
    return x_0zy && xsrvw(dfbceg['prototype'], x_0zy), rswt && xsrvw(dfbceg, rswt), dfbceg;
  };function xsrvw(y_0xz, sptrq) {
    for (var txyvz = 0x0; txyvz < sptrq['length']; txyvz++) {
      var _1034 = sptrq[txyvz];_1034['enumerable'] = _1034['enumerable'] || !0x1, _1034['configurable'] = !0x0, 'value' in _1034 && (_1034['writable'] = !0x0), Object['defineProperty'](y_0xz, _1034['key'], _1034);
    }
  }var rsopnq = z12$0(0x8);hdfgc(lqnop, [{ 'key': 'construct', 'value': function () {
      if ((0x0, rsopnq['isSubContext'])()) throw new Error('FileReader is not supported in SubContext.');
    } }]), hdfgc = lqnop;function lqnop() {
    !function (ljhm, rwtxv) {
      if (!(ljhm instanceof rwtxv)) throw new TypeError('Cannot call a class as a function');
    }(this, lqnop);
  }rswvq['default'] = hdfgc;
}, function (twzxvy, _13$, rstpv) {
  'use strict';
  Object['defineProperty'](_13$, '__esModule', { 'value': !0x0 });var ihfed = rstpv(0x8),
      igkjl = { get 'length'() {
      return wx['getStorageInfoSync']()['keys']['length'];
    }, 'key': function (jiklmn) {
      return wx['getStorageInfoSync']()['keys'][jiklmn];
    }, 'getItem': function (qmorn) {
      return wx['getStorageSync'](qmorn);
    }, 'setItem': function (zxtw, qplm) {
      return wx['setStorageSync'](zxtw, qplm);
    }, 'removeItem': function (lmjikh) {
      wx['removeStorageSync'](lmjikh);
    }, 'clear': function () {
      wx['clearStorageSync']();
    } },
      ihl = {};rstpv = { get 'length'() {
      return Object['keys'](ihl)['length'];
    }, 'key': function (kljmih) {
      return Object['keys'](ihl)[kljmih];
    }, 'getItem': function (x_wyz$) {
      return ihl[x_wyz$];
    }, 'setItem': function (lmnqp, kjomn) {
      ihl[lmnqp] = kjomn;
    }, 'removeItem': function (dfcea) {
      delete ihl[dfcea];
    }, 'clear': function () {
      ihl = {};
    } }, igkjl = (0x0, ihfed['isSubContext'])() ? rstpv : igkjl, _13$['default'] = igkjl;
}, function (noqspr, bacefd) {
  'use strict';
  Object['defineProperty'](bacefd, '__esModule', { 'value': !0x0 }), bacefd['default'] = { 'href': 'cccgame.js', 'reload': function () {} };
}]);