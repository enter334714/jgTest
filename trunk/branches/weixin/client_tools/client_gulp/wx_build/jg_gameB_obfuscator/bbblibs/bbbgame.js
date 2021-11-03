var _ = wx.y$;
console[_[552]](_[27595]), window[_[27596]], wx[_[27597]](function (lkm) {
  if (lkm) {
    if (lkm[_[35]]) {
      var qoplm = window[_[980]][_[27598]][_[167]](new RegExp(/\./, 'g'), '_'),
          eb = lkm[_[35]],
          klpmon = eb[_[42]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);if (klpmon) for (var srtpoq = 0x0; srtpoq < klpmon[_[19]]; srtpoq++) {
        if (klpmon[srtpoq] && klpmon[srtpoq][_[19]] > 0x0) {
          var yzxuv = parseInt(klpmon[srtpoq][_[167]](_[27599], '')[_[167]](':', ''));eb = eb[_[167]](klpmon[srtpoq], klpmon[srtpoq][_[167]](':' + yzxuv + ':', ':' + (yzxuv - 0x2) + ':'));
        }
      }eb = eb[_[167]](new RegExp(_[27600], 'g'), _[27601] + qoplm + _[24730]), eb = eb[_[167]](new RegExp(_[27602], 'g'), _[27601] + qoplm + _[24730]), lkm[_[35]] = eb;
    }var jgfihk = { 'id': window['p$DE'][_[27603]], 'role': window['p$DE'][_[4956]], 'level': window['p$DE'][_[27604]], 'user': window['p$DE'][_[24635]], 'version': window['p$DE'][_[570]], 'gamever': window[_[980]][_[27598]], 'cdn': window['p$DE'][_[4840]], 'serverid': window['p$DE'][_[24630]] ? window['p$DE'][_[24630]][_[11530]] : 0x0, 'systemInfo': window[_[27605]], 'error': _[27606], 'stack': lkm ? lkm[_[35]] : '' },
        ejifg = JSON[_[4826]](jgfihk);console[_[200]](_[27607] + ejifg), (!window[_[27596]] || window[_[27596]] != jgfihk[_[200]]) && (window[_[27596]] = jgfihk[_[200]], window['p$BD'](jgfihk));
  }
});import 'bbbmd5min.js';import 'bbbzlibs.js';window[_[27608]] = require(_[27609]);import 'bbbindex.js';import 'bbblibsmin.js';import 'bbbwxmini.js';import 'bbbinitmin.js';console[_[552]](_[27610]), console[_[552]](_[27611]), p$BDCE({ 'title': _[27612] });var _dz$10 = { 'p$ACBDE': !![] };new window[_[27613]](_dz$10), window[_[27613]][_[606]]['p$ACEBD']();if (window['p$ABECD']) clearInterval(window['p$ABECD']);window['p$ABECD'] = null, window['p$ACEDB'] = function (lkmjo, oljmk) {
  if (!lkmjo || !oljmk) return 0x0;lkmjo = lkmjo[_[144]]('.'), oljmk = oljmk[_[144]]('.');const y$z_10 = Math[_[192]](lkmjo[_[19]], oljmk[_[19]]);while (lkmjo[_[19]] < y$z_10) {
    lkmjo[_[41]]('0');
  }while (oljmk[_[19]] < y$z_10) {
    oljmk[_[41]]('0');
  }for (var nkl = 0x0; nkl < y$z_10; nkl++) {
    const z$yv = parseInt(lkmjo[nkl]),
          prtoqs = parseInt(oljmk[nkl]);if (z$yv > prtoqs) return 0x1;else {
      if (z$yv < prtoqs) return -0x1;
    }
  }return 0x0;
}, window[_[27614]] = wx[_[27615]]()[_[27614]], console[_[157]](_[27616] + window[_[27614]]);var _dotpqs = wx[_[27617]]();_dotpqs[_[27618]](function (khlj) {
  console[_[157]](_[27619] + khlj[_[27620]]);
}), _dotpqs[_[27621]](function () {
  wx[_[27622]]({ 'title': _[27623], 'content': _[27624], 'showCancel': ![], 'success': function (strqv) {
      _dotpqs[_[27625]]();
    } });
}), _dotpqs[_[27626]](function () {
  console[_[157]](_[27627]);
}), window['p$ADBCE'] = function () {
  console[_[157]](_[27628]);var $02z_ = wx[_[27629]]({ 'name': _[27630], 'success': function (_201$3) {
      console[_[157]](_[27631]), console[_[157]](_201$3), _201$3 && _201$3[_[24801]] == _[27632] ? (window['p$EC'] = !![], window['p$EDBC'](), window['p$EDCB']()) : setTimeout(function () {
        window['p$ADBCE']();
      }, 0x1f4);
    }, 'fail': function (uvstw) {
      console[_[157]](_[27633]), console[_[157]](uvstw), setTimeout(function () {
        window['p$ADBCE']();
      }, 0x1f4);
    } });$02z_ && $02z_[_[27634]](_yz0$x => {});
}, window['p$ADCBE'] = function () {
  console[_[157]](_[27635]);var mqonp = wx[_[27629]]({ 'name': _[27636], 'success': function (mrqop) {
      console[_[157]](_[27637]), console[_[157]](mrqop), mrqop && mrqop[_[24801]] == _[27632] ? (window['p$DCE'] = !![], window['p$EDBC'](), window['p$EDCB']()) : setTimeout(function () {
        window['p$ADCBE']();
      }, 0x1f4);
    }, 'fail': function (rtwuv) {
      console[_[157]](_[27638]), console[_[157]](rtwuv), setTimeout(function () {
        window['p$ADCBE']();
      }, 0x1f4);
    } });mqonp && mqonp[_[27634]](hmkijl => {});
}, window[_[27639]] = function () {
  window['p$ACEDB'](window[_[27614]], _[27640]) >= 0x0 ? (console[_[157]](_[27641] + window[_[27614]] + _[27642]), window['p$DB'](), window['p$ADBCE'](), window['p$ADCBE']()) : (window['p$DEB'](_[27643], window[_[27614]]), wx[_[27622]]({ 'title': _[6716], 'content': _[27644] }));
}, window[_[27605]] = '', wx[_[27645]]({ 'success'(jiknlm) {
    window[_[27605]] = _[27646] + jiknlm[_[27647]] + _[27648] + jiknlm[_[27649]] + _[27650] + jiknlm[_[5026]] + _[27651] + jiknlm[_[902]] + _[27652] + jiknlm[_[24606]] + _[27653] + jiknlm[_[27614]] + _[27654] + jiknlm[_[9441]], console[_[157]](window[_[27605]]), console[_[157]](_[27655] + jiknlm[_[27656]] + _[27657] + jiknlm[_[27658]] + _[27659] + jiknlm[_[27660]] + _[27661] + jiknlm[_[27662]] + _[27663] + jiknlm[_[27664]] + _[27665] + jiknlm[_[27666]] + _[27667] + (jiknlm[_[27668]] ? jiknlm[_[27668]][_[761]] + ',' + jiknlm[_[27668]][_[1630]] + ',' + jiknlm[_[27668]][_[1632]] + ',' + jiknlm[_[27668]][_[1631]] : ''));var gkfh = jiknlm[_[902]] ? jiknlm[_[902]][_[68]]() : '',
        x$w_z = jiknlm[_[27649]] ? jiknlm[_[27649]][_[68]]()[_[167]]('\x20', '') : '';window['p$DE'][_[935]] = gkfh[_[102]](_[27669]) != -0x1, window['p$DE'][_[11360]] = gkfh[_[102]](_[27670]) != -0x1, window['p$DE'][_[27671]] = gkfh[_[102]](_[27669]) != -0x1 || gkfh[_[102]](_[27670]) != -0x1, window['p$DE'][_[24327]] = gkfh[_[102]](_[27672]) != -0x1 || gkfh[_[102]](_[27673]) != -0x1, window['p$DE'][_[27674]] = jiknlm[_[24606]] ? jiknlm[_[24606]][_[68]]() : '', window['p$DE']['p$ABDCE'] = ![], window['p$DE']['p$ABDEC'] = 0x2;if (gkfh[_[102]](_[27670]) != -0x1) {
      if (jiknlm[_[9441]] >= 0x18) window['p$DE']['p$ABDEC'] = 0x3;else window['p$DE']['p$ABDEC'] = 0x2;
    } else {
      if (gkfh[_[102]](_[27669]) != -0x1) {
        if (jiknlm[_[9441]] && jiknlm[_[9441]] >= 0x14) window['p$DE']['p$ABDEC'] = 0x3;else {
          if (x$w_z[_[102]](_[27675]) != -0x1 || x$w_z[_[102]](_[27676]) != -0x1 || x$w_z[_[102]](_[27677]) != -0x1 || x$w_z[_[102]](_[27678]) != -0x1 || x$w_z[_[102]](_[27679]) != -0x1) window['p$DE']['p$ABDEC'] = 0x2;else window['p$DE']['p$ABDEC'] = 0x3;
        }
      } else window['p$DE']['p$ABDEC'] = 0x2;
    }console[_[157]](_[27680] + window['p$DE']['p$ABDCE'] + _[27681] + window['p$DE']['p$ABDEC']);
  } }), wx[_[27682]]({ 'success': function (cbafed) {
    console[_[157]](_[27683] + cbafed[_[4933]] + _[27684] + cbafed[_[27685]]);
  } }), wx[_[27686]]({ 'success': function (suwvtx) {
    console[_[157]](_[27687] + suwvtx[_[27688]]);
  } }), wx[_[27689]]({ 'keepScreenOn': !![] }), wx[_[27690]](function (wy_$) {
  console[_[157]](_[27687] + wy_$[_[27688]] + _[27691] + wy_$[_[27692]]);
}), wx[_[27693]](function (omqpnl) {
  window['p$EBC'] = omqpnl, window['p$ECB'] && window['p$EBC'] && (console[_[552]](_[27694] + window['p$EBC'][_[1196]]), window['p$ECB'](window['p$EBC']), window['p$EBC'] = null);
}), window['p$ADEBC'] = 0x0, window[_[27695]] = null, wx[_[27696]](function () {
  window['p$ADEBC']++, wx[_[11771]]();if (window['p$ADEBC'] >= 0x2) {
    window['p$ADEBC'] = 0x0, console[_[200]](_[27697]), wx[_[27698]]('0', 0x1);if (window['p$DE'] && window['p$DE'][_[935]]) window['p$DEB'](_[27699], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});