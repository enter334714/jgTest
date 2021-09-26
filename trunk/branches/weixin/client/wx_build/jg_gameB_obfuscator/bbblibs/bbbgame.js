var _ = wx.y$;
console[_[544]](_[27458]), window[_[27459]], wx[_[27460]](function (qtrpo) {
  if (qtrpo) {
    if (qtrpo[_[35]]) {
      var tosq = window[_[972]][_[27461]][_[165]](new RegExp(/\./, 'g'), '_'),
          tuqrv = qtrpo[_[35]],
          dfhegi = tuqrv[_[42]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);if (dfhegi) for (var jkhfig = 0x0; jkhfig < dfhegi[_[19]]; jkhfig++) {
        var z$0xy;dfhegi[jkhfig] && 0x0 < dfhegi[jkhfig][_[19]] && (z$0xy = parseInt(dfhegi[jkhfig][_[165]](_[27462], '')[_[165]](':', '')), tuqrv = tuqrv[_[165]](dfhegi[jkhfig], dfhegi[jkhfig][_[165]](':' + z$0xy + ':', ':' + (z$0xy - 0x2) + ':')));
      }tuqrv = (tuqrv = tuqrv[_[165]](new RegExp(_[27463], 'g'), _[27464] + tosq + _[24371]))[_[165]](new RegExp(_[27465], 'g'), _[27464] + tosq + _[24371]), qtrpo[_[35]] = tuqrv;
    }tosq = { 'id': window['p$DE'][_[27466]], 'role': window['p$DE'][_[4901]], 'level': window['p$DE'][_[27467]], 'user': window['p$DE'][_[24276]], 'version': window['p$DE'][_[562]], 'gamever': window[_[972]][_[27461]], 'cdn': window['p$DE'][_[4785]], 'serverid': window['p$DE'][_[24271]] ? window['p$DE'][_[24271]][_[11402]] : 0x0, 'systemInfo': window[_[27468]], 'error': _[27469], 'stack': qtrpo ? qtrpo[_[35]] : '' }, qtrpo = JSON[_[4773]](tosq), (console[_[198]](_[27470] + qtrpo), window[_[27459]] && window[_[27459]] == tosq[_[198]] || (window[_[27459]] = tosq[_[198]], window['p$BD'](tosq)));
  }
});import 'bbbmd5min.js';import 'bbbzlibs.js';window[_[27471]] = require(_[27472]);import 'bbbindex.js';import 'bbblibsmin.js';import 'bbbwxmini.js';import 'bbbinitmin.js';console[_[544]](_[27473]), console[_[544]](_[27474]), p$BDCE({ 'title': _[27475] });var _dyzvu = { 'p$ACBDE': !0x0 };new window[_[27476]](_dyzvu), window[_[27476]][_[598]]['p$ACEBD'](), window['p$ABECD'] && clearInterval(window['p$ABECD']), window['p$ABECD'] = null, window['p$ACEDB'] = function (qromnp, tvswur) {
  if (!qromnp || !tvswur) return 0x0;qromnp = qromnp[_[143]]('.'), tvswur = tvswur[_[143]]('.');var onrpqs = Math[_[190]](qromnp[_[19]], tvswur[_[19]]);for (; qromnp[_[19]] < onrpqs;) qromnp[_[41]]('0');for (; tvswur[_[19]] < onrpqs;) tvswur[_[41]]('0');for (var fcgdh = 0x0; fcgdh < onrpqs; fcgdh++) {
    var ijlhgk = parseInt(qromnp[fcgdh]),
        ehigd = parseInt(tvswur[fcgdh]);if (ehigd < ijlhgk) return 0x1;if (ijlhgk < ehigd) return -0x1;
  }return 0x0;
}, window[_[27477]] = wx[_[27478]]()[_[27477]], console[_[155]](_[27479] + window[_[27477]]);var _dwuxytv = wx[_[27480]]();_dwuxytv[_[27481]](function (vzxyw$) {
  console[_[155]](_[27482] + vzxyw$[_[27483]]);
}), _dwuxytv[_[27484]](function () {
  wx[_[27485]]({ 'title': _[27486], 'content': _[27487], 'showCancel': !0x1, 'success': function (mknji) {
      _dwuxytv[_[27488]]();
    } });
}), _dwuxytv[_[27489]](function () {
  console[_[155]](_[27490]);
}), window['p$ADBCE'] = function () {
  console[_[155]](_[27491]);var qtsor = wx[_[27492]]({ 'name': _[27493], 'success': function (lhjmk) {
      console[_[155]](_[27494]), console[_[155]](lhjmk), lhjmk && _[27495] == lhjmk[_[24439]] ? (window['p$EC'] = !0x0, window['p$EDBC'](), window['p$EDCB']()) : setTimeout(function () {
        window['p$ADBCE']();
      }, 0x1f4);
    }, 'fail': function (_1042) {
      console[_[155]](_[27496]), console[_[155]](_1042), setTimeout(function () {
        window['p$ADBCE']();
      }, 0x1f4);
    } });qtsor && qtsor[_[27497]](jmnik => {});
}, window['p$ADCBE'] = function () {
  console[_[155]](_[27498]);var z$x_ = wx[_[27492]]({ 'name': _[27499], 'success': function (vru) {
      console[_[155]](_[27500]), console[_[155]](vru), vru && _[27495] == vru[_[24439]] ? (window['p$DCE'] = !0x0, window['p$EDBC'](), window['p$EDCB']()) : setTimeout(function () {
        window['p$ADCBE']();
      }, 0x1f4);
    }, 'fail': function (nomplq) {
      console[_[155]](_[27501]), console[_[155]](nomplq), setTimeout(function () {
        window['p$ADCBE']();
      }, 0x1f4);
    } });z$x_ && z$x_[_[27497]](lijmn => {});
}, window[_[27502]] = function () {
  0x0 <= window['p$ACEDB'](window[_[27477]], _[27503]) ? (console[_[155]](_[27504] + window[_[27477]] + _[27505]), window['p$DB'](), window['p$ADBCE'](), window['p$ADCBE']()) : (window['p$DEB'](_[27506] + window[_[27477]]), wx[_[27485]]({ 'title': _[6621], 'content': _[27507] }));
}, window[_[27468]] = '', wx[_[27508]]({ 'success'(spqotr) {
    window[_[27468]] = _[27509] + spqotr[_[27510]] + _[27511] + spqotr[_[27512]] + _[27513] + spqotr[_[4971]] + _[27514] + spqotr[_[894]] + _[27515] + spqotr[_[24247]] + _[27516] + spqotr[_[27477]] + _[27517] + spqotr[_[9335]], console[_[155]](window[_[27468]]), console[_[155]](_[27518] + spqotr[_[27519]] + _[27520] + spqotr[_[27521]] + _[27522] + spqotr[_[27523]] + _[27524] + spqotr[_[27525]] + _[27526] + spqotr[_[27527]] + _[27528] + spqotr[_[27529]] + _[27530] + (spqotr[_[27531]] ? spqotr[_[27531]][_[753]] + ',' + spqotr[_[27531]][_[1618]] + ',' + spqotr[_[27531]][_[1621]] + ',' + spqotr[_[27531]][_[1620]] : ''));var ruqspt = spqotr[_[894]] ? spqotr[_[894]][_[65]]() : '',
        jkolnm = spqotr[_[27512]] ? spqotr[_[27512]][_[65]]()[_[165]]('\x20', '') : '';window['p$DE'][_[927]] = -0x1 != ruqspt[_[104]](_[27532]), window['p$DE'][_[11228]] = -0x1 != ruqspt[_[104]](_[27413]), window['p$DE'][_[27533]] = -0x1 != ruqspt[_[104]](_[27532]) || -0x1 != ruqspt[_[104]](_[27413]), window['p$DE'][_[23903]] = -0x1 != ruqspt[_[104]](_[27414]) || -0x1 != ruqspt[_[104]](_[27534]), window['p$DE'][_[27535]] = spqotr[_[24247]] ? spqotr[_[24247]][_[65]]() : '', window['p$DE']['p$ABDCE'] = !0x1, -(window['p$DE']['p$ABDEC'] = 0x1) != ruqspt[_[104]](_[27413]) ? 0x18 <= spqotr[_[9335]] ? window['p$DE']['p$ABDEC'] = 0x2 : window['p$DE']['p$ABDEC'] = 0x1 : -0x1 == ruqspt[_[104]](_[27532]) || !(spqotr[_[9335]] && 0x14 <= spqotr[_[9335]] || -0x1 == jkolnm[_[104]](_[27536]) && -0x1 == jkolnm[_[104]](_[27537]) && -0x1 == jkolnm[_[104]](_[27538]) && -0x1 == jkolnm[_[104]](_[27539]) && -0x1 == jkolnm[_[104]](_[27540])) ? window['p$DE']['p$ABDEC'] = 0x1 : window['p$DE']['p$ABDEC'] = 0x2, console[_[155]](_[27541] + window['p$DE']['p$ABDCE'] + _[27542] + window['p$DE']['p$ABDEC']);
  } }), wx[_[27543]]({ 'success': function (eabf) {
    console[_[155]](_[27544] + eabf[_[4878]] + _[27545] + eabf[_[27546]]);
  } }), wx[_[27547]]({ 'success': function (kgjf) {
    console[_[155]](_[27548] + kgjf[_[27549]]);
  } }), wx[_[27550]]({ 'keepScreenOn': !0x0 }), wx[_[27551]](function (xy0z_$) {
  console[_[155]](_[27548] + xy0z_$[_[27549]] + _[27552] + xy0z_$[_[27553]]);
}), wx[_[27554]](function ($z_210) {
  window['p$EBC'] = $z_210, window['p$ECB'] && window['p$EBC'] && (console[_[544]](_[27555] + window['p$EBC'][_[1185]]), window['p$ECB'](window['p$EBC']), window['p$EBC'] = null);
}), window['p$ADEBC'] = 0x0, window[_[27556]] = null, wx[_[27557]](function () {
  window['p$ADEBC']++, wx[_[11580]](), 0x2 <= window['p$ADEBC'] && (window['p$ADEBC'] = 0x0, console[_[198]](_[27558]), wx[_[27559]]('0', 0x1), window['p$DE'] && window['p$DE'][_[927]] && window['p$DEB'](_[27560]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});