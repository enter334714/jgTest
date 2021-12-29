var _ = wx.y$;
console[_[78]](_[28976]), window[_[28977]], wx[_[28978]](function (jkigfh) {
  if (jkigfh) {
    if (jkigfh[_[4525]]) {
      var deba = window[_[555]][_[28979]][_[4703]](new RegExp(/\./, 'g'), '_'),
          zxw$y_ = jkigfh[_[4525]],
          xz$ywv = zxw$y_[_[12054]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);if (xz$ywv) for (var _102$ = 0x0; _102$ < xz$ywv[_[13]]; _102$++) {
        if (xz$ywv[_102$] && xz$ywv[_102$][_[13]] > 0x0) {
          var $10_y = parseInt(xz$ywv[_102$][_[4703]](_[28980], '')[_[4703]](':', ''));zxw$y_ = zxw$y_[_[4703]](xz$ywv[_102$], xz$ywv[_102$][_[4703]](':' + $10_y + ':', ':' + ($10_y - 0x2) + ':'));
        }
      }zxw$y_ = zxw$y_[_[4703]](new RegExp(_[28981], 'g'), _[28982] + deba + _[25319]), zxw$y_ = zxw$y_[_[4703]](new RegExp(_[28983], 'g'), _[28982] + deba + _[25319]), jkigfh[_[4525]] = zxw$y_;
    }var _$0z2 = { 'id': window['p$DE'][_[28984]], 'role': window['p$DE'][_[4645]], 'level': window['p$DE'][_[28985]], 'user': window['p$DE'][_[25219]], 'version': window['p$DE'][_[101]], 'gamever': window[_[555]][_[28979]], 'cdn': window['p$DE'][_[4524]], 'serverid': window['p$DE'][_[25214]] ? window['p$DE'][_[25214]][_[11510]] : 0x0, 'systemInfo': window[_[28986]], 'error': _[28987], 'stack': jkigfh ? jkigfh[_[4525]] : '' },
        y_z$10 = JSON[_[4510]](_$0z2);console[_[125]](_[28988] + y_z$10), (!window[_[28977]] || window[_[28977]] != _$0z2[_[125]]) && (window[_[28977]] = _$0z2[_[125]], window['p$BD'](_$0z2));
  }
});import 'bbbmd5min.js';import 'bbbzlibs.js';window[_[28989]] = require(_[28990]);import 'bbbindex.js';import 'bbblibsmin.js';import 'bbbwxmini.js';import 'bbbinitmin.js';console[_[78]](_[28991]), console[_[78]](_[28992]), p$BDCE({ 'title': _[28993] });var _dmopqln = { 'p$ABEDC': !![] };new window[_[28994]](_dmopqln), window[_[28994]][_[148]]['p$ACDEB']();if (window['p$ABDEC']) clearInterval(window['p$ABDEC']);window['p$ABDEC'] = null, window['p$ACEBD'] = function (pomqnr, fiheg) {
  if (!pomqnr || !fiheg) return 0x0;pomqnr = pomqnr[_[15]]('.'), fiheg = fiheg[_[15]]('.');const mkojnl = Math[_[851]](pomqnr[_[13]], fiheg[_[13]]);while (pomqnr[_[13]] < mkojnl) {
    pomqnr[_[29]]('0');
  }while (fiheg[_[13]] < mkojnl) {
    fiheg[_[29]]('0');
  }for (var eidgf = 0x0; eidgf < mkojnl; eidgf++) {
    const pn = parseInt(pomqnr[eidgf]),
          zwyxuv = parseInt(fiheg[eidgf]);if (pn > zwyxuv) return 0x1;else {
      if (pn < zwyxuv) return -0x1;
    }
  }return 0x0;
}, window[_[28995]] = wx[_[28996]]()[_[28995]], console[_[480]](_[28997] + window[_[28995]]);var _dtvqru = wx[_[28998]]();_dtvqru[_[28999]](function (wu) {
  console[_[480]](_[29000] + wu[_[29001]]);
}), _dtvqru[_[29002]](function () {
  wx[_[29003]]({ 'title': _[29004], 'content': _[29005], 'showCancel': ![], 'success': function (wrts) {
      _dtvqru[_[29006]]();
    } });
}), _dtvqru[_[29007]](function () {
  console[_[480]](_[29008]);
}), window['p$ACEDB'] = function () {
  console[_[480]](_[29009]);var $_ywz = wx[_[29010]]({ 'name': _[29011], 'success': function (hfdcg) {
      console[_[480]](_[29012]), console[_[480]](hfdcg), hfdcg && hfdcg[_[25405]] == _[29013] ? (window['p$EC'] = !![], window['p$ECDB'](), window['p$EDBC']()) : setTimeout(function () {
        window['p$ACEDB']();
      }, 0x1f4);
    }, 'fail': function (twuxvy) {
      console[_[480]](_[29014]), console[_[480]](twuxvy), setTimeout(function () {
        window['p$ACEDB']();
      }, 0x1f4);
    } });$_ywz && $_ywz[_[29015]](rpst => {});
}, window['p$ADBEC'] = function () {
  console[_[480]](_[29016]);var lmjno = wx[_[29010]]({ 'name': _[29017], 'success': function (qstrvu) {
      console[_[480]](_[29018]), console[_[480]](qstrvu), qstrvu && qstrvu[_[25405]] == _[29013] ? (window['p$DCE'] = !![], window['p$ECDB'](), window['p$EDBC']()) : setTimeout(function () {
        window['p$ADBEC']();
      }, 0x1f4);
    }, 'fail': function (mrqo) {
      console[_[480]](_[29019]), console[_[480]](mrqo), setTimeout(function () {
        window['p$ADBEC']();
      }, 0x1f4);
    } });lmjno && lmjno[_[29015]](nlpko => {});
}, window[_[29020]] = function () {
  window['p$ACEBD'](window[_[28995]], _[29021]) >= 0x0 ? (console[_[480]](_[29022] + window[_[28995]] + _[29023]), window['p$DB'](), window['p$ACEDB'](), window['p$ADBEC']()) : (window['p$DEB'](_[29024], window[_[28995]]), wx[_[29003]]({ 'title': _[6361], 'content': _[29025] }));
}, window[_[28986]] = '', wx[_[29026]]({ 'success'(yxv) {
    window[_[28986]] = _[29027] + yxv[_[29028]] + _[29029] + yxv[_[29030]] + _[29031] + yxv[_[4716]] + _[29032] + yxv[_[473]] + _[29033] + yxv[_[25189]] + _[29034] + yxv[_[28995]] + _[29035] + yxv[_[9309]], console[_[480]](window[_[28986]]), console[_[480]](_[29036] + yxv[_[29037]] + _[29038] + yxv[_[29039]] + _[29040] + yxv[_[29041]] + _[29042] + yxv[_[29043]] + _[29044] + yxv[_[29045]] + _[29046] + yxv[_[29047]] + _[29048] + (yxv[_[29049]] ? yxv[_[29049]][_[320]] + ',' + yxv[_[29049]][_[1213]] + ',' + yxv[_[29049]][_[1215]] + ',' + yxv[_[29049]][_[1214]] : ''));var abedcf = yxv[_[473]] ? yxv[_[473]][_[12339]]() : '',
        trqps = yxv[_[29030]] ? yxv[_[29030]][_[12339]]()[_[4703]]('\x20', '') : '';window['p$DE'][_[1072]] = abedcf[_[115]](_[29050]) != -0x1, window['p$DE'][_[11332]] = abedcf[_[115]](_[28538]) != -0x1, window['p$DE'][_[29051]] = abedcf[_[115]](_[29050]) != -0x1 || abedcf[_[115]](_[28538]) != -0x1, window['p$DE'][_[24908]] = abedcf[_[115]](_[28539]) != -0x1 || abedcf[_[115]](_[29052]) != -0x1, window['p$DE'][_[29053]] = yxv[_[25189]] ? yxv[_[25189]][_[12339]]() : '', window['p$DE']['p$ABCED'] = ![], window['p$DE']['p$ABDCE'] = 0x2;if (abedcf[_[115]](_[28538]) != -0x1) {
      if (yxv[_[9309]] >= 0x18) window['p$DE']['p$ABDCE'] = 0x3;else window['p$DE']['p$ABDCE'] = 0x2;
    } else {
      if (abedcf[_[115]](_[29050]) != -0x1) {
        if (yxv[_[9309]] && yxv[_[9309]] >= 0x14) window['p$DE']['p$ABDCE'] = 0x3;else {
          if (trqps[_[115]](_[29054]) != -0x1 || trqps[_[115]](_[29055]) != -0x1 || trqps[_[115]](_[29056]) != -0x1 || trqps[_[115]](_[29057]) != -0x1 || trqps[_[115]](_[29058]) != -0x1) window['p$DE']['p$ABDCE'] = 0x2;else window['p$DE']['p$ABDCE'] = 0x3;
        }
      } else window['p$DE']['p$ABDCE'] = 0x2;
    }console[_[480]](_[29059] + window['p$DE']['p$ABCED'] + _[29060] + window['p$DE']['p$ABDCE']);
  } }), wx[_[29061]]({ 'success': function (xwyv$z) {
    console[_[480]](_[29062] + xwyv$z[_[4621]] + _[29063] + xwyv$z[_[29064]]);
  } }), wx[_[29065]]({ 'success': function ($30_) {
    console[_[480]](_[29066] + $30_[_[29067]]);
  } }), wx[_[29068]]({ 'keepScreenOn': !![] }), wx[_[29069]](function (tqrsop) {
  console[_[480]](_[29066] + tqrsop[_[29067]] + _[29070] + tqrsop[_[29071]]);
}), wx[_[10843]](function (mpnkl) {
  window['p$CB'] = mpnkl, window['p$EBC'] && window['p$CB'] && (console[_[78]](_[29072] + window['p$CB'][_[774]]), window['p$EBC'](window['p$CB']), window['p$CB'] = null);
}), window['p$ADCEB'] = 0x0, window[_[29073]] = null, wx[_[29074]](function () {
  window['p$ADCEB']++, wx[_[11908]]();if (window['p$ADCEB'] >= 0x2) {
    window['p$ADCEB'] = 0x0, console[_[125]](_[29075]), wx[_[29076]]('0', 0x1);if (window['p$DE'] && window['p$DE'][_[1072]]) window['p$DEB'](_[29077], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});