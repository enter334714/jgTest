var _ = wx.y$;
console[_[78]](_[27946]), window[_[27947]], wx[_[27948]](function (dhgefc) {
  if (dhgefc) {
    if (dhgefc[_[4440]]) {
      var ytxvwu = window[_[547]][_[27949]][_[4616]](new RegExp(/\./, 'g'), '_'),
          prtqus = dhgefc[_[4440]],
          ejfig = prtqus[_[11627]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);if (ejfig) for (var mnlji = 0x0; mnlji < ejfig[_[13]]; mnlji++) {
        if (ejfig[mnlji] && ejfig[mnlji][_[13]] > 0x0) {
          var swtxuv = parseInt(ejfig[mnlji][_[4616]](_[27950], '')[_[4616]](':', ''));prtqus = prtqus[_[4616]](ejfig[mnlji], ejfig[mnlji][_[4616]](':' + swtxuv + ':', ':' + (swtxuv - 0x2) + ':'));
        }
      }prtqus = prtqus[_[4616]](new RegExp(_[27951], 'g'), _[27952] + ytxvwu + _[24471]), prtqus = prtqus[_[4616]](new RegExp(_[27953], 'g'), _[27952] + ytxvwu + _[24471]), dhgefc[_[4440]] = prtqus;
    }var beac = { 'id': window['p$DE'][_[27954]], 'role': window['p$DE'][_[4558]], 'level': window['p$DE'][_[27955]], 'user': window['p$DE'][_[24373]], 'version': window['p$DE'][_[101]], 'gamever': window[_[547]][_[27949]], 'cdn': window['p$DE'][_[4439]], 'serverid': window['p$DE'][_[24368]] ? window['p$DE'][_[24368]][_[11223]] : 0x0, 'systemInfo': window[_[27956]], 'error': _[27957], 'stack': dhgefc ? dhgefc[_[4440]] : '' },
        onpsrq = JSON[_[4425]](beac);console[_[125]](_[27958] + onpsrq), (!window[_[27947]] || window[_[27947]] != beac[_[125]]) && (window[_[27947]] = beac[_[125]], window['p$BD'](beac));
  }
});import 'bbbmd5min.js';import 'bbbzlibs.js';window[_[27959]] = require(_[27960]);import 'bbbindex.js';import 'bbblibsmin.js';import 'bbbwxmini.js';import 'bbbinitmin.js';console[_[78]](_[27961]), console[_[78]](_[27962]), p$BDCE({ 'title': _[27963] });var _dadbf = { 'p$ACBDE': !![] };new window[_[27964]](_dadbf), window[_[27964]][_[148]]['p$ACEBD']();if (window['p$ABECD']) clearInterval(window['p$ABECD']);window['p$ABECD'] = null, window['p$ACEDB'] = function (orpsqt, fadec) {
  if (!orpsqt || !fadec) return 0x0;orpsqt = orpsqt[_[15]]('.'), fadec = fadec[_[15]]('.');const xwzv$y = Math[_[842]](orpsqt[_[13]], fadec[_[13]]);while (orpsqt[_[13]] < xwzv$y) {
    orpsqt[_[29]]('0');
  }while (fadec[_[13]] < xwzv$y) {
    fadec[_[29]]('0');
  }for (var torpqs = 0x0; torpqs < xwzv$y; torpqs++) {
    const mkjnol = parseInt(orpsqt[torpqs]),
          jkhfg = parseInt(fadec[torpqs]);if (mkjnol > jkhfg) return 0x1;else {
      if (mkjnol < jkhfg) return -0x1;
    }
  }return 0x0;
}, window[_[27965]] = wx[_[27966]]()[_[27965]], console[_[471]](_[27967] + window[_[27965]]);var _dhmil = wx[_[27968]]();_dhmil[_[27969]](function (vustxw) {
  console[_[471]](_[27970] + vustxw[_[27971]]);
}), _dhmil[_[27972]](function () {
  wx[_[27973]]({ 'title': _[27974], 'content': _[27975], 'showCancel': ![], 'success': function (ormn) {
      _dhmil[_[27976]]();
    } });
}), _dhmil[_[27977]](function () {
  console[_[471]](_[27978]);
}), window['p$ADBCE'] = function () {
  console[_[471]](_[27979]);var $1zy0 = wx[_[27980]]({ 'name': _[27981], 'success': function (gehfj) {
      console[_[471]](_[27982]), console[_[471]](gehfj), gehfj && gehfj[_[24552]] == _[27983] ? (window['p$EC'] = !![], window['p$EDBC'](), window['p$EDCB']()) : setTimeout(function () {
        window['p$ADBCE']();
      }, 0x1f4);
    }, 'fail': function (nplq) {
      console[_[471]](_[27984]), console[_[471]](nplq), setTimeout(function () {
        window['p$ADBCE']();
      }, 0x1f4);
    } });$1zy0 && $1zy0[_[27985]](nklojm => {});
}, window['p$ADCBE'] = function () {
  console[_[471]](_[27986]);var usxv = wx[_[27980]]({ 'name': _[27987], 'success': function (xz0y$_) {
      console[_[471]](_[27988]), console[_[471]](xz0y$_), xz0y$_ && xz0y$_[_[24552]] == _[27983] ? (window['p$DCE'] = !![], window['p$EDBC'](), window['p$EDCB']()) : setTimeout(function () {
        window['p$ADCBE']();
      }, 0x1f4);
    }, 'fail': function (sptur) {
      console[_[471]](_[27989]), console[_[471]](sptur), setTimeout(function () {
        window['p$ADCBE']();
      }, 0x1f4);
    } });usxv && usxv[_[27985]](fedacb => {});
}, window[_[27990]] = function () {
  window['p$ACEDB'](window[_[27965]], _[27991]) >= 0x0 ? (console[_[471]](_[27992] + window[_[27965]] + _[27993]), window['p$DB'](), window['p$ADBCE'](), window['p$ADCBE']()) : (window['p$DEB'](_[27994], window[_[27965]]), wx[_[27973]]({ 'title': _[6334], 'content': _[27995] }));
}, window[_[27956]] = '', wx[_[27996]]({ 'success'(qu) {
    window[_[27956]] = _[27997] + qu[_[27998]] + _[27999] + qu[_[28000]] + _[28001] + qu[_[4629]] + _[28002] + qu[_[464]] + _[28003] + qu[_[24344]] + _[28004] + qu[_[27965]] + _[28005] + qu[_[9071]], console[_[471]](window[_[27956]]), console[_[471]](_[28006] + qu[_[28007]] + _[28008] + qu[_[28009]] + _[28010] + qu[_[28011]] + _[28012] + qu[_[28013]] + _[28014] + qu[_[28015]] + _[28016] + qu[_[28017]] + _[28018] + (qu[_[28019]] ? qu[_[28019]][_[320]] + ',' + qu[_[28019]][_[1205]] + ',' + qu[_[28019]][_[1207]] + ',' + qu[_[28019]][_[1206]] : ''));var hefgdc = qu[_[464]] ? qu[_[464]][_[11880]]() : '',
        wzx_y = qu[_[28000]] ? qu[_[28000]][_[11880]]()[_[4616]]('\x20', '') : '';window['p$DE'][_[501]] = hefgdc[_[115]](_[28020]) != -0x1, window['p$DE'][_[11053]] = hefgdc[_[115]](_[27900]) != -0x1, window['p$DE'][_[28021]] = hefgdc[_[115]](_[28020]) != -0x1 || hefgdc[_[115]](_[27900]) != -0x1, window['p$DE'][_[24061]] = hefgdc[_[115]](_[27901]) != -0x1 || hefgdc[_[115]](_[28022]) != -0x1, window['p$DE'][_[28023]] = qu[_[24344]] ? qu[_[24344]][_[11880]]() : '', window['p$DE']['p$ABDCE'] = ![], window['p$DE']['p$ABDEC'] = 0x2;if (hefgdc[_[115]](_[27900]) != -0x1) {
      if (qu[_[9071]] >= 0x18) window['p$DE']['p$ABDEC'] = 0x3;else window['p$DE']['p$ABDEC'] = 0x2;
    } else {
      if (hefgdc[_[115]](_[28020]) != -0x1) {
        if (qu[_[9071]] && qu[_[9071]] >= 0x14) window['p$DE']['p$ABDEC'] = 0x3;else {
          if (wzx_y[_[115]](_[28024]) != -0x1 || wzx_y[_[115]](_[28025]) != -0x1 || wzx_y[_[115]](_[28026]) != -0x1 || wzx_y[_[115]](_[28027]) != -0x1 || wzx_y[_[115]](_[28028]) != -0x1) window['p$DE']['p$ABDEC'] = 0x2;else window['p$DE']['p$ABDEC'] = 0x3;
        }
      } else window['p$DE']['p$ABDEC'] = 0x2;
    }console[_[471]](_[28029] + window['p$DE']['p$ABDCE'] + _[28030] + window['p$DE']['p$ABDEC']);
  } }), wx[_[28031]]({ 'success': function (z2_10$) {
    console[_[471]](_[28032] + z2_10$[_[4534]] + _[28033] + z2_10$[_[28034]]);
  } }), wx[_[28035]]({ 'success': function (srpnqo) {
    console[_[471]](_[28036] + srpnqo[_[28037]]);
  } }), wx[_[28038]]({ 'keepScreenOn': !![] }), wx[_[28039]](function (xzw_) {
  console[_[471]](_[28036] + xzw_[_[28037]] + _[28040] + xzw_[_[28041]]);
}), wx[_[28042]](function (caebf) {
  window['p$EBC'] = caebf, window['p$ECB'] && window['p$EBC'] && (console[_[78]](_[28043] + window['p$EBC'][_[765]]), window['p$ECB'](window['p$EBC']), window['p$EBC'] = null);
}), window['p$ADEBC'] = 0x0, window[_[28044]] = null, wx[_[28045]](function () {
  window['p$ADEBC']++, wx[_[11485]]();if (window['p$ADEBC'] >= 0x2) {
    window['p$ADEBC'] = 0x0, console[_[125]](_[28046]), wx[_[28047]]('0', 0x1);if (window['p$DE'] && window['p$DE'][_[501]]) window['p$DEB'](_[28048], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});