var _ = wx.y$;
console[_[78]](_[27607]), window[_[27608]], wx[_[27609]](function (hkijg) {
  if (hkijg) {
    if (hkijg[_[4393]]) {
      var gbef = window[_[547]][_[27610]][_[4569]](new RegExp(/\./, 'g'), '_'),
          surpqt = hkijg[_[4393]],
          qmon = surpqt[_[11515]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);if (qmon) for (var dbgfec = 0x0; dbgfec < qmon[_[13]]; dbgfec++) {
        if (qmon[dbgfec] && qmon[dbgfec][_[13]] > 0x0) {
          var chefg = parseInt(qmon[dbgfec][_[4569]](_[27611], '')[_[4569]](':', ''));surpqt = surpqt[_[4569]](qmon[dbgfec], qmon[dbgfec][_[4569]](':' + chefg + ':', ':' + (chefg - 0x2) + ':'));
        }
      }surpqt = surpqt[_[4569]](new RegExp(_[27612], 'g'), _[27613] + gbef + _[24235]), surpqt = surpqt[_[4569]](new RegExp(_[27614], 'g'), _[27613] + gbef + _[24235]), hkijg[_[4393]] = surpqt;
    }var _01234 = { 'id': window['p$DE'][_[27615]], 'role': window['p$DE'][_[4511]], 'level': window['p$DE'][_[27616]], 'user': window['p$DE'][_[24138]], 'version': window['p$DE'][_[101]], 'gamever': window[_[547]][_[27610]], 'cdn': window['p$DE'][_[4392]], 'serverid': window['p$DE'][_[24133]] ? window['p$DE'][_[24133]][_[11088]] : 0x0, 'systemInfo': window[_[27617]], 'error': _[27618], 'stack': hkijg ? hkijg[_[4393]] : '' },
        xwtu = JSON[_[4378]](_01234);console[_[125]](_[27619] + xwtu), (!window[_[27608]] || window[_[27608]] != _01234[_[125]]) && (window[_[27608]] = _01234[_[125]], window['p$BD'](_01234));
  }
});import 'bbbmd5min.js';import 'bbbzlibs.js';window[_[27620]] = require(_[27621]);import 'bbbindex.js';import 'bbblibsmin.js';import 'bbbwxmini.js';import 'bbbinitmin.js';console[_[78]](_[27622]), console[_[78]](_[27623]), p$BDCE({ 'title': _[27624] });var _dyuwtx = { 'p$ACBDE': !![] };new window[_[27625]](_dyuwtx), window[_[27625]][_[148]]['p$ACEBD']();if (window['p$ABECD']) clearInterval(window['p$ABECD']);window['p$ABECD'] = null, window['p$ACEDB'] = function (fbdca, noljkm) {
  if (!fbdca || !noljkm) return 0x0;fbdca = fbdca[_[15]]('.'), noljkm = noljkm[_[15]]('.');const nmjlik = Math[_[842]](fbdca[_[13]], noljkm[_[13]]);while (fbdca[_[13]] < nmjlik) {
    fbdca[_[29]]('0');
  }while (noljkm[_[13]] < nmjlik) {
    noljkm[_[29]]('0');
  }for (var $_yz0x = 0x0; $_yz0x < nmjlik; $_yz0x++) {
    const spot = parseInt(fbdca[$_yz0x]),
          jmnkli = parseInt(noljkm[$_yz0x]);if (spot > jmnkli) return 0x1;else {
      if (spot < jmnkli) return -0x1;
    }
  }return 0x0;
}, window[_[27626]] = wx[_[27627]]()[_[27626]], console[_[471]](_[27628] + window[_[27626]]);var _dtsrquv = wx[_[27629]]();_dtsrquv[_[27630]](function (tusrqv) {
  console[_[471]](_[27631] + tusrqv[_[27632]]);
}), _dtsrquv[_[27633]](function () {
  wx[_[27634]]({ 'title': _[27635], 'content': _[27636], 'showCancel': ![], 'success': function (vuzy) {
      _dtsrquv[_[27637]]();
    } });
}), _dtsrquv[_[27638]](function () {
  console[_[471]](_[27639]);
}), window['p$ADBCE'] = function () {
  console[_[471]](_[27640]);var gje = wx[_[27641]]({ 'name': _[27642], 'success': function (qrost) {
      console[_[471]](_[27643]), console[_[471]](qrost), qrost && qrost[_[24308]] == _[27644] ? (window['p$EC'] = !![], window['p$EDBC'](), window['p$EDCB']()) : setTimeout(function () {
        window['p$ADBCE']();
      }, 0x1f4);
    }, 'fail': function (gfihje) {
      console[_[471]](_[27645]), console[_[471]](gfihje), setTimeout(function () {
        window['p$ADBCE']();
      }, 0x1f4);
    } });gje && gje[_[27646]](rsut => {});
}, window['p$ADCBE'] = function () {
  console[_[471]](_[27647]);var nprso = wx[_[27641]]({ 'name': _[27648], 'success': function (hjgief) {
      console[_[471]](_[27649]), console[_[471]](hjgief), hjgief && hjgief[_[24308]] == _[27644] ? (window['p$DCE'] = !![], window['p$EDBC'](), window['p$EDCB']()) : setTimeout(function () {
        window['p$ADCBE']();
      }, 0x1f4);
    }, 'fail': function (rutqp) {
      console[_[471]](_[27650]), console[_[471]](rutqp), setTimeout(function () {
        window['p$ADCBE']();
      }, 0x1f4);
    } });nprso && nprso[_[27646]](bdef => {});
}, window[_[27651]] = function () {
  window['p$ACEDB'](window[_[27626]], _[27652]) >= 0x0 ? (console[_[471]](_[27653] + window[_[27626]] + _[27654]), window['p$DB'](), window['p$ADBCE'](), window['p$ADCBE']()) : (window['p$DEB'](_[27655], window[_[27626]]), wx[_[27634]]({ 'title': _[6281], 'content': _[27656] }));
}, window[_[27617]] = '', wx[_[27657]]({ 'success'(mkonlp) {
    window[_[27617]] = _[27658] + mkonlp[_[27659]] + _[27660] + mkonlp[_[27661]] + _[27662] + mkonlp[_[4582]] + _[27663] + mkonlp[_[464]] + _[27664] + mkonlp[_[24111]] + _[27665] + mkonlp[_[27626]] + _[27666] + mkonlp[_[9001]], console[_[471]](window[_[27617]]), console[_[471]](_[27667] + mkonlp[_[27668]] + _[27669] + mkonlp[_[27670]] + _[27671] + mkonlp[_[27672]] + _[27673] + mkonlp[_[27674]] + _[27675] + mkonlp[_[27676]] + _[27677] + mkonlp[_[27678]] + _[27679] + (mkonlp[_[27680]] ? mkonlp[_[27680]][_[320]] + ',' + mkonlp[_[27680]][_[1203]] + ',' + mkonlp[_[27680]][_[1205]] + ',' + mkonlp[_[27680]][_[1204]] : ''));var igfdh = mkonlp[_[464]] ? mkonlp[_[464]][_[11767]]() : '',
        qotrs = mkonlp[_[27661]] ? mkonlp[_[27661]][_[11767]]()[_[4569]]('\x20', '') : '';window['p$DE'][_[501]] = igfdh[_[115]](_[27681]) != -0x1, window['p$DE'][_[10918]] = igfdh[_[115]](_[27561]) != -0x1, window['p$DE'][_[27682]] = igfdh[_[115]](_[27681]) != -0x1 || igfdh[_[115]](_[27561]) != -0x1, window['p$DE'][_[23829]] = igfdh[_[115]](_[27562]) != -0x1 || igfdh[_[115]](_[27683]) != -0x1, window['p$DE'][_[27684]] = mkonlp[_[24111]] ? mkonlp[_[24111]][_[11767]]() : '', window['p$DE']['p$ABDCE'] = ![], window['p$DE']['p$ABDEC'] = 0x2;if (igfdh[_[115]](_[27561]) != -0x1) {
      if (mkonlp[_[9001]] >= 0x18) window['p$DE']['p$ABDEC'] = 0x3;else window['p$DE']['p$ABDEC'] = 0x2;
    } else {
      if (igfdh[_[115]](_[27681]) != -0x1) {
        if (mkonlp[_[9001]] && mkonlp[_[9001]] >= 0x14) window['p$DE']['p$ABDEC'] = 0x3;else {
          if (qotrs[_[115]](_[27685]) != -0x1 || qotrs[_[115]](_[27686]) != -0x1 || qotrs[_[115]](_[27687]) != -0x1 || qotrs[_[115]](_[27688]) != -0x1 || qotrs[_[115]](_[27689]) != -0x1) window['p$DE']['p$ABDEC'] = 0x2;else window['p$DE']['p$ABDEC'] = 0x3;
        }
      } else window['p$DE']['p$ABDEC'] = 0x2;
    }console[_[471]](_[27690] + window['p$DE']['p$ABDCE'] + _[27691] + window['p$DE']['p$ABDEC']);
  } }), wx[_[27692]]({ 'success': function (upqtr) {
    console[_[471]](_[27693] + upqtr[_[4487]] + _[27694] + upqtr[_[27695]]);
  } }), wx[_[27696]]({ 'success': function (gchdfe) {
    console[_[471]](_[27697] + gchdfe[_[27698]]);
  } }), wx[_[27699]]({ 'keepScreenOn': !![] }), wx[_[27700]](function (potrsq) {
  console[_[471]](_[27697] + potrsq[_[27698]] + _[27701] + potrsq[_[27702]]);
}), wx[_[27703]](function (egjfi) {
  window['p$EBC'] = egjfi, window['p$ECB'] && window['p$EBC'] && (console[_[78]](_[27704] + window['p$EBC'][_[765]]), window['p$ECB'](window['p$EBC']), window['p$EBC'] = null);
}), window['p$ADEBC'] = 0x0, window[_[27705]] = null, wx[_[27706]](function () {
  window['p$ADEBC']++, wx[_[11319]]();if (window['p$ADEBC'] >= 0x2) {
    window['p$ADEBC'] = 0x0, console[_[125]](_[27707]), wx[_[27708]]('0', 0x1);if (window['p$DE'] && window['p$DE'][_[501]]) window['p$DEB'](_[27709], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});