var _ = wx.y$;
console[_[78]](_[27172]), window[_[27173]], wx[_[27174]](function (gfkij) {
  if (gfkij) {
    if (gfkij[_[4372]]) {
      var xzvu = window[_[547]][_[27175]][_[4548]](new RegExp(/\./, 'g'), '_'),
          tpor = gfkij[_[4372]],
          tuswv = tpor[_[11376]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);if (tuswv) for (var morn = 0x0; morn < tuswv[_[13]]; morn++) {
        var xtywv;tuswv[morn] && 0x0 < tuswv[morn][_[13]] && (xtywv = parseInt(tuswv[morn][_[4548]](_[27176], '')[_[4548]](':', '')), tpor = tpor[_[4548]](tuswv[morn], tuswv[morn][_[4548]](':' + xtywv + ':', ':' + (xtywv - 0x2) + ':')));
      }tpor = (tpor = tpor[_[4548]](new RegExp(_[27177], 'g'), _[27178] + xzvu + _[23985]))[_[4548]](new RegExp(_[27179], 'g'), _[27178] + xzvu + _[23985]), gfkij[_[4372]] = tpor;
    }xzvu = { 'id': window['p$DE'][_[27180]], 'role': window['p$DE'][_[4490]], 'level': window['p$DE'][_[27181]], 'user': window['p$DE'][_[23888]], 'version': window['p$DE'][_[101]], 'gamever': window[_[547]][_[27175]], 'cdn': window['p$DE'][_[4371]], 'serverid': window['p$DE'][_[23883]] ? window['p$DE'][_[23883]][_[11003]] : 0x0, 'systemInfo': window[_[27182]], 'error': _[27183], 'stack': gfkij ? gfkij[_[4372]] : '' }, gfkij = JSON[_[4359]](xzvu), (console[_[125]](_[27184] + gfkij), window[_[27173]] && window[_[27173]] == xzvu[_[125]] || (window[_[27173]] = xzvu[_[125]], window['p$BD'](xzvu)));
  }
});import 'bbbmd5min.js';import 'bbbzlibs.js';window[_[27185]] = require(_[27186]);import 'bbbindex.js';import 'bbblibsmin.js';import 'bbbwxmini.js';import 'bbbinitmin.js';console[_[78]](_[27187]), console[_[78]](_[27188]), p$BDCE({ 'title': _[27189] });var _durw = { 'p$ACBDE': !0x0 };new window[_[27190]](_durw), window[_[27190]][_[148]]['p$ACEBD'](), window['p$ABECD'] && clearInterval(window['p$ABECD']), window['p$ABECD'] = null, window['p$ACEDB'] = function (nklop, mlikjh) {
  if (!nklop || !mlikjh) return 0x0;nklop = nklop[_[15]]('.'), mlikjh = mlikjh[_[15]]('.');var tqro = Math[_[839]](nklop[_[13]], mlikjh[_[13]]);for (; nklop[_[13]] < tqro;) nklop[_[29]]('0');for (; mlikjh[_[13]] < tqro;) mlikjh[_[29]]('0');for (var rustq = 0x0; rustq < tqro; rustq++) {
    var iklhjg = parseInt(nklop[rustq]),
        nqpsr = parseInt(mlikjh[rustq]);if (nqpsr < iklhjg) return 0x1;if (iklhjg < nqpsr) return -0x1;
  }return 0x0;
}, window[_[27191]] = wx[_[27192]]()[_[27191]], console[_[471]](_[27193] + window[_[27191]]);var _dgehfc = wx[_[27194]]();_dgehfc[_[27195]](function (nrmqo) {
  console[_[471]](_[27196] + nrmqo[_[27197]]);
}), _dgehfc[_[27198]](function () {
  wx[_[27199]]({ 'title': _[27200], 'content': _[27201], 'showCancel': !0x1, 'success': function (khlj) {
      _dgehfc[_[27202]]();
    } });
}), _dgehfc[_[27203]](function () {
  console[_[471]](_[27204]);
}), window['p$ADBCE'] = function () {
  console[_[471]](_[27205]);var fighj = wx[_[27206]]({ 'name': _[27207], 'success': function (mopnrq) {
      console[_[471]](_[27208]), console[_[471]](mopnrq), mopnrq && _[27209] == mopnrq[_[24059]] ? (window['p$EC'] = !0x0, window['p$EDBC'](), window['p$EDCB']()) : setTimeout(function () {
        window['p$ADBCE']();
      }, 0x1f4);
    }, 'fail': function (z2_$) {
      console[_[471]](_[27210]), console[_[471]](z2_$), setTimeout(function () {
        window['p$ADBCE']();
      }, 0x1f4);
    } });fighj && fighj[_[27211]](fecdh => {});
}, window['p$ADCBE'] = function () {
  console[_[471]](_[27212]);var fghi = wx[_[27206]]({ 'name': _[27213], 'success': function (ijmkhl) {
      console[_[471]](_[27214]), console[_[471]](ijmkhl), ijmkhl && _[27209] == ijmkhl[_[24059]] ? (window['p$DCE'] = !0x0, window['p$EDBC'](), window['p$EDCB']()) : setTimeout(function () {
        window['p$ADCBE']();
      }, 0x1f4);
    }, 'fail': function (wtsrvu) {
      console[_[471]](_[27215]), console[_[471]](wtsrvu), setTimeout(function () {
        window['p$ADCBE']();
      }, 0x1f4);
    } });fghi && fghi[_[27211]](lkmn => {});
}, window[_[27216]] = function () {
  0x0 <= window['p$ACEDB'](window[_[27191]], _[27217]) ? (console[_[471]](_[27218] + window[_[27191]] + _[27219]), window['p$DB'](), window['p$ADBCE'](), window['p$ADCBE']()) : (window['p$DEB'](_[27220] + window[_[27191]]), wx[_[27199]]({ 'title': _[6221], 'content': _[27221] }));
}, window[_[27182]] = '', wx[_[27222]]({ 'success'(hdfc) {
    window[_[27182]] = _[27223] + hdfc[_[27224]] + _[27225] + hdfc[_[27226]] + _[27227] + hdfc[_[4561]] + _[27228] + hdfc[_[464]] + _[27229] + hdfc[_[23859]] + _[27230] + hdfc[_[27191]] + _[27231] + hdfc[_[8937]], console[_[471]](window[_[27182]]), console[_[471]](_[27232] + hdfc[_[27233]] + _[27234] + hdfc[_[27235]] + _[27236] + hdfc[_[27237]] + _[27238] + hdfc[_[27239]] + _[27240] + hdfc[_[27241]] + _[27242] + hdfc[_[27243]] + _[27244] + (hdfc[_[27245]] ? hdfc[_[27245]][_[320]] + ',' + hdfc[_[27245]][_[1200]] + ',' + hdfc[_[27245]][_[1203]] + ',' + hdfc[_[27245]][_[1202]] : ''));var olpqmn = hdfc[_[464]] ? hdfc[_[464]][_[11628]]() : '',
        _10 = hdfc[_[27226]] ? hdfc[_[27226]][_[11628]]()[_[4548]]('\x20', '') : '';window['p$DE'][_[501]] = -0x1 != olpqmn[_[115]](_[27246]), window['p$DE'][_[10829]] = -0x1 != olpqmn[_[115]](_[27247]), window['p$DE'][_[27248]] = -0x1 != olpqmn[_[115]](_[27246]) || -0x1 != olpqmn[_[115]](_[27247]), window['p$DE'][_[23519]] = -0x1 != olpqmn[_[115]](_[27249]) || -0x1 != olpqmn[_[115]](_[27250]), window['p$DE'][_[27251]] = hdfc[_[23859]] ? hdfc[_[23859]][_[11628]]() : '', window['p$DE']['p$ABDCE'] = !0x1, -(window['p$DE']['p$ABDEC'] = 0x1) != olpqmn[_[115]](_[27247]) ? 0x18 <= hdfc[_[8937]] ? window['p$DE']['p$ABDEC'] = 0x2 : window['p$DE']['p$ABDEC'] = 0x1 : -0x1 == olpqmn[_[115]](_[27246]) || !(hdfc[_[8937]] && 0x14 <= hdfc[_[8937]] || -0x1 == _10[_[115]](_[27252]) && -0x1 == _10[_[115]](_[27253]) && -0x1 == _10[_[115]](_[27254]) && -0x1 == _10[_[115]](_[27255]) && -0x1 == _10[_[115]](_[27256])) ? window['p$DE']['p$ABDEC'] = 0x1 : window['p$DE']['p$ABDEC'] = 0x2, console[_[471]](_[27257] + window['p$DE']['p$ABDCE'] + _[27258] + window['p$DE']['p$ABDEC']);
  } }), wx[_[27259]]({ 'success': function (jgifhk) {
    console[_[471]](_[27260] + jgifhk[_[4466]] + _[27261] + jgifhk[_[27262]]);
  } }), wx[_[27263]]({ 'success': function (ruqtp) {
    console[_[471]](_[27264] + ruqtp[_[27265]]);
  } }), wx[_[27266]]({ 'keepScreenOn': !0x0 }), wx[_[27267]](function (vwy$xz) {
  console[_[471]](_[27264] + vwy$xz[_[27265]] + _[27268] + vwy$xz[_[27269]]);
}), wx[_[27270]](function (wuvtrs) {
  window['p$EBC'] = wuvtrs, window['p$ECB'] && window['p$EBC'] && (console[_[78]](_[27271] + window['p$EBC'][_[762]]), window['p$ECB'](window['p$EBC']), window['p$EBC'] = null);
}), window['p$ADEBC'] = 0x0, window[_[27272]] = null, wx[_[27273]](function () {
  window['p$ADEBC']++, wx[_[11181]](), 0x2 <= window['p$ADEBC'] && (window['p$ADEBC'] = 0x0, console[_[125]](_[27274]), wx[_[27275]]('0', 0x1), window['p$DE'] && window['p$DE'][_[501]] && window['p$DEB'](_[27276]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});