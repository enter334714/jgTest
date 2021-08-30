var _ = wx.y$;
console[_[11]](_[0x34cf]), window[_[27067]], wx[_[27068]](function (y1$0_) {
  if (y1$0_) {
    if (y1$0_[_[15092]]) {
      var gehfid = window[_[14222]][_[27069]][_[15182]](new RegExp(/\./, 'g'), '_'),
          kjinml = y1$0_[_[15092]],
          igjkfh = kjinml[_[18166]](/(subPackage\/bbbgame.js:)[0-9]{1,60}(:)/g);if (igjkfh) for (var milhj = 0x0; milhj < igjkfh[_[8777]]; milhj++) {
        var fgihde;igjkfh[milhj] && 0x0 < igjkfh[milhj][_[8777]] && (fgihde = parseInt(igjkfh[milhj][_[15182]](_[0x34d0], '')[_[15182]](':', '')), kjinml = kjinml[_[15182]](igjkfh[milhj], igjkfh[milhj][_[15182]](':' + fgihde + ':', ':' + (fgihde - 0x2) + ':')));
      }kjinml = (kjinml = kjinml[_[15182]](new RegExp(_[0x34d1], 'g'), _[0x34d2] + gehfid + _[0x2d0f]))[_[15182]](new RegExp(_[0x34d3], 'g'), _[0x34d2] + gehfid + _[0x2d0f]), y1$0_[_[15092]] = kjinml;
    }gehfid = { 'id': window['p$CD'][_[27070]], 'role': window['p$CD'][_[2886]], 'level': window['p$CD'][_[27071]], 'user': window['p$CD'][_[25451]], 'version': window['p$CD'][_[13882]], 'gamever': window[_[14222]][_[27069]], 'cdn': window['p$CD'][_[15091]], 'serverid': window['p$CD'][_[25449]] ? window['p$CD'][_[25449]][_[18029]] : 0x0, 'systemInfo': window[_[27072]], 'error': _[0x34d4], 'stack': y1$0_ ? y1$0_[_[15092]] : '' }, y1$0_ = JSON[_[15082]](gehfid), (console[_[9]](_[0x34d5] + y1$0_), window[_[27067]] && window[_[27067]] == gehfid[_[9]] || (window[_[27067]] = gehfid[_[9]], window['p$AC'](gehfid)));
  }
});import 'bbbmd5min.js';import 'bbbzlibs.js';window[_[27073]] = require(_[0x34d6]);import 'bbbindex.js';import 'bbblibsmin.js';import 'bbbwxmini.js';import 'bbbinitmin.js';console[_[11]](_[0x34d7]), console[_[11]](_[0x34d8]), p$ACBD({ 'title': _[0x34d9] });var _dijkhfg = { 'p$DCE': !0x0 };new window[_[27074]](_dijkhfg), window[_[27074]][_[36]]['p$BCDE'](), window['p$CE'] && clearInterval(window['p$CE']), window['p$CE'] = null, window['p$BCED'] = function (ustrwv, jkmnil) {
  if (!ustrwv || !jkmnil) return 0x0;ustrwv = ustrwv[_[13837]]('.'), jkmnil = jkmnil[_[13837]]('.');var tusvw = Math[_[4138]](ustrwv[_[8777]], jkmnil[_[8777]]);for (; ustrwv[_[8777]] < tusvw;) ustrwv[_[13848]]('0');for (; jkmnil[_[8777]] < tusvw;) jkmnil[_[13848]]('0');for (var ljkgih = 0x0; ljkgih < tusvw; ljkgih++) {
    var x_y0$ = parseInt(ustrwv[ljkgih]),
        plqmon = parseInt(jkmnil[ljkgih]);if (plqmon < x_y0$) return 0x1;if (x_y0$ < plqmon) return -0x1;
  }return 0x0;
}, window[_[27075]] = wx[_[27076]]()[_[27075]], console[_[14171]](_[0x34da] + window[_[27075]]);var _dadcbef = wx[_[27077]]();_dadcbef[_[27078]](function (_z120$) {
  console[_[14171]](_[0x34db] + _z120$[_[27079]]);
}), _dadcbef[_[27080]](function () {
  wx[_[27081]]({ 'title': _[0x34dc], 'content': _[0x34dd], 'showCancel': !0x1, 'success': function (ghkjli) {
      _dadcbef[_[27082]]();
    } });
}), _dadcbef[_[27083]](function () {
  console[_[14171]](_[0x34de]);
}), window['p$BDCE'] = function () {
  console[_[14171]](_[0x34df]);var glijkh = wx[_[27084]]({ 'name': _[0x34e0], 'success': function (vyzux) {
      console[_[14171]](_[0x34e1]), console[_[14171]](vyzux), vyzux && _[0x34e2] == vyzux[_[25512]] ? (window['p$DB'] = !0x0, window['p$DCAB'](), window['p$DCBA']()) : setTimeout(function () {
        window['p$BDCE']();
      }, 0x1f4);
    }, 'fail': function (dbfg) {
      console[_[14171]](_[0x34e3]), console[_[14171]](dbfg), setTimeout(function () {
        window['p$BDCE']();
      }, 0x1f4);
    } });glijkh && glijkh[_[27085]](orsq => {});
}, window['p$BECD'] = function () {
  console[_[14171]](_[0x34e4]);var lknijm = wx[_[27084]]({ 'name': _[0x34e5], 'success': function (psotq) {
      console[_[14171]](_[0x34e6]), console[_[14171]](psotq), psotq && _[0x34e2] == psotq[_[25512]] ? (window['p$CBD'] = !0x0, window['p$DCAB'](), window['p$DCBA']()) : setTimeout(function () {
        window['p$BECD']();
      }, 0x1f4);
    }, 'fail': function (psroq) {
      console[_[14171]](_[0x34e7]), console[_[14171]](psroq), setTimeout(function () {
        window['p$BECD']();
      }, 0x1f4);
    } });lknijm && lknijm[_[27085]](jhigf => {});
}, window[_[27086]] = function () {
  0x0 <= window['p$BCED'](window[_[27075]], _[0x34e8]) ? (console[_[14171]](_[0x34e9] + window[_[27075]] + _[0x34ea]), window['p$CA'](), window['p$BDCE'](), window['p$BECD']()) : (window['p$CDA'](_[0x34eb] + window[_[27075]]), wx[_[27081]]({ 'title': _[0xe36], 'content': _[0x34ec] }));
}, window[_[27072]] = '', wx[_[27087]]({ 'success'(nkjlo) {
    window[_[27072]] = _[0x34ed] + nkjlo[_[27088]] + _[0x34ee] + nkjlo[_[27089]] + _[0x34ef] + nkjlo[_[11374]] + _[0x34f0] + nkjlo[_[14164]] + _[0x34f1] + nkjlo[_[25439]] + _[0x34f2] + nkjlo[_[27075]] + _[0x34f3] + nkjlo[_[17243]], console[_[14171]](window[_[27072]]), console[_[14171]](_[0x34f4] + nkjlo[_[27090]] + _[0x34f5] + nkjlo[_[27091]] + _[0x34f6] + nkjlo[_[27092]] + _[0x34f7] + nkjlo[_[27093]] + _[0x34f8] + nkjlo[_[27094]] + _[0x34f9] + nkjlo[_[27095]] + _[0x34fa] + (nkjlo[_[27096]] ? nkjlo[_[27096]][_[39]] + ',' + nkjlo[_[27096]][_[12016]] + ',' + nkjlo[_[27096]][_[5534]] + ',' + nkjlo[_[27096]][_[3977]] : ''));var xzvy$w = nkjlo[_[14164]] ? nkjlo[_[14164]][_[18269]]() : '',
        stpor = nkjlo[_[27089]] ? nkjlo[_[27089]][_[18269]]()[_[15182]]('\x20', '') : '';window['p$CD'][_[14188]] = -0x1 != xzvy$w[_[13892]](_[0x34fb]), window['p$CD'][_[17966]] = -0x1 != xzvy$w[_[13892]](_[0x349e]), window['p$CD'][_[27097]] = -0x1 != xzvy$w[_[13892]](_[0x34fb]) || -0x1 != xzvy$w[_[13892]](_[0x349e]), window['p$CD'][_[25312]] = -0x1 != xzvy$w[_[13892]](_[0x349f]) || -0x1 != xzvy$w[_[13892]](_[0x34fc]), window['p$CD'][_[27098]] = nkjlo[_[25439]] ? nkjlo[_[25439]][_[18269]]() : '', window['p$CD']['p$CDE'] = !0x1, -(window['p$CD']['p$CED'] = 0x1) != xzvy$w[_[13892]](_[0x349e]) ? 0x18 <= nkjlo[_[17243]] ? window['p$CD']['p$CED'] = 0x2 : window['p$CD']['p$CED'] = 0x1 : -0x1 == xzvy$w[_[13892]](_[0x34fb]) || !(nkjlo[_[17243]] && 0x14 <= nkjlo[_[17243]] || -0x1 == stpor[_[13892]](_[0x34fd]) && -0x1 == stpor[_[13892]](_[0x34fe]) && -0x1 == stpor[_[13892]](_[0x34ff]) && -0x1 == stpor[_[13892]](_[0x3500]) && -0x1 == stpor[_[13892]](_[0x3501])) ? window['p$CD']['p$CED'] = 0x1 : window['p$CD']['p$CED'] = 0x2, console[_[14171]](_[0x3502] + window['p$CD']['p$CDE'] + _[0x3503] + window['p$CD']['p$CED']);
  } }), wx[_[27099]]({ 'success': function (olkjmn) {
    console[_[14171]](_[0x3504] + olkjmn[_[2875]] + _[0x3505] + olkjmn[_[27100]]);
  } }), wx[_[27101]]({ 'success': function (xvuwts) {
    console[_[14171]](_[0x3506] + xvuwts[_[27102]]);
  } }), wx[_[27103]]({ 'keepScreenOn': !0x0 }), wx[_[27104]](function (tsrwuv) {
  console[_[14171]](_[0x3506] + tsrwuv[_[27102]] + _[0x3507] + tsrwuv[_[27105]]);
}), wx[_[27106]](function (tsoqr) {
  window['p$DAB'] = tsoqr, window['p$DBA'] && window['p$DAB'] && (console[_[11]](_[0x3508] + window['p$DAB'][_[218]]), window['p$DBA'](window['p$DAB']), window['p$DAB'] = null);
}), window['p$BDE'] = 0x0, window[_[27107]] = null, wx[_[27108]](function () {
  window['p$BDE']++, wx[_[18072]](), 0x2 <= window['p$BDE'] && (window['p$BDE'] = 0x0, console[_[9]](_[0x3509]), wx[_[27109]]('0', 0x1), window['p$CD'] && window['p$CD'][_[14188]] && window['p$CDA'](_[0x350a]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});