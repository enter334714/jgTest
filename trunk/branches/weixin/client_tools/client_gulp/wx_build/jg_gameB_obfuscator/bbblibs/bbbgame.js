var _ = wx.y$;
console[_[78]](_[27938]), window[_[27939]], wx[_[27940]](function (osr) {
  if (osr) {
    if (osr[_[4440]]) {
      var xyz0$_ = window[_[547]][_[27941]][_[4616]](new RegExp(/\./, 'g'), '_'),
          mnrqp = osr[_[4440]],
          xzw$_ = mnrqp[_[11627]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);if (xzw$_) for (var ifgjk = 0x0; ifgjk < xzw$_[_[13]]; ifgjk++) {
        if (xzw$_[ifgjk] && xzw$_[ifgjk][_[13]] > 0x0) {
          var ghfdi = parseInt(xzw$_[ifgjk][_[4616]](_[27942], '')[_[4616]](':', ''));mnrqp = mnrqp[_[4616]](xzw$_[ifgjk], xzw$_[ifgjk][_[4616]](':' + ghfdi + ':', ':' + (ghfdi - 0x2) + ':'));
        }
      }mnrqp = mnrqp[_[4616]](new RegExp(_[27943], 'g'), _[27944] + xyz0$_ + _[24471]), mnrqp = mnrqp[_[4616]](new RegExp(_[27945], 'g'), _[27944] + xyz0$_ + _[24471]), osr[_[4440]] = mnrqp;
    }var $_yz01 = { 'id': window['p$DE'][_[27946]], 'role': window['p$DE'][_[4558]], 'level': window['p$DE'][_[27947]], 'user': window['p$DE'][_[24373]], 'version': window['p$DE'][_[101]], 'gamever': window[_[547]][_[27941]], 'cdn': window['p$DE'][_[4439]], 'serverid': window['p$DE'][_[24368]] ? window['p$DE'][_[24368]][_[11223]] : 0x0, 'systemInfo': window[_[27948]], 'error': _[27949], 'stack': osr ? osr[_[4440]] : '' },
        kimnj = JSON[_[4425]]($_yz01);console[_[125]](_[27950] + kimnj), (!window[_[27939]] || window[_[27939]] != $_yz01[_[125]]) && (window[_[27939]] = $_yz01[_[125]], window['p$BD']($_yz01));
  }
});import 'bbbmd5min.js';import 'bbbzlibs.js';window[_[27951]] = require(_[27952]);import 'bbbindex.js';import 'bbblibsmin.js';import 'bbbwxmini.js';import 'bbbinitmin.js';console[_[78]](_[27953]), console[_[78]](_[27954]), p$BDCE({ 'title': _[27955] });var _djfhieg = { 'p$ACBDE': !![] };new window[_[27956]](_djfhieg), window[_[27956]][_[148]]['p$ACEBD']();if (window['p$ABECD']) clearInterval(window['p$ABECD']);window['p$ABECD'] = null, window['p$ACEDB'] = function (ops, cabdf) {
  if (!ops || !cabdf) return 0x0;ops = ops[_[15]]('.'), cabdf = cabdf[_[15]]('.');const hfki = Math[_[842]](ops[_[13]], cabdf[_[13]]);while (ops[_[13]] < hfki) {
    ops[_[29]]('0');
  }while (cabdf[_[13]] < hfki) {
    cabdf[_[29]]('0');
  }for (var jklhmi = 0x0; jklhmi < hfki; jklhmi++) {
    const utrw = parseInt(ops[jklhmi]),
          _2034 = parseInt(cabdf[jklhmi]);if (utrw > _2034) return 0x1;else {
      if (utrw < _2034) return -0x1;
    }
  }return 0x0;
}, window[_[27957]] = wx[_[27958]]()[_[27957]], console[_[471]](_[27959] + window[_[27957]]);var _dwuxvyz = wx[_[27960]]();_dwuxvyz[_[27961]](function (zxyw$) {
  console[_[471]](_[27962] + zxyw$[_[27963]]);
}), _dwuxvyz[_[27964]](function () {
  wx[_[27965]]({ 'title': _[27966], 'content': _[27967], 'showCancel': ![], 'success': function (zyvxwu) {
      _dwuxvyz[_[27968]]();
    } });
}), _dwuxvyz[_[27969]](function () {
  console[_[471]](_[27970]);
}), window['p$ADBCE'] = function () {
  console[_[471]](_[27971]);var fhdg = wx[_[27972]]({ 'name': _[27973], 'success': function (kijghf) {
      console[_[471]](_[27974]), console[_[471]](kijghf), kijghf && kijghf[_[24544]] == _[27975] ? (window['p$EC'] = !![], window['p$EDBC'](), window['p$EDCB']()) : setTimeout(function () {
        window['p$ADBCE']();
      }, 0x1f4);
    }, 'fail': function (ehijfg) {
      console[_[471]](_[27976]), console[_[471]](ehijfg), setTimeout(function () {
        window['p$ADBCE']();
      }, 0x1f4);
    } });fhdg && fhdg[_[27977]](nq => {});
}, window['p$ADCBE'] = function () {
  console[_[471]](_[27978]);var mqrnop = wx[_[27972]]({ 'name': _[27979], 'success': function (dgefch) {
      console[_[471]](_[27980]), console[_[471]](dgefch), dgefch && dgefch[_[24544]] == _[27975] ? (window['p$DCE'] = !![], window['p$EDBC'](), window['p$EDCB']()) : setTimeout(function () {
        window['p$ADCBE']();
      }, 0x1f4);
    }, 'fail': function (y$_01z) {
      console[_[471]](_[27981]), console[_[471]](y$_01z), setTimeout(function () {
        window['p$ADCBE']();
      }, 0x1f4);
    } });mqrnop && mqrnop[_[27977]](uxwzv => {});
}, window[_[27982]] = function () {
  window['p$ACEDB'](window[_[27957]], _[27983]) >= 0x0 ? (console[_[471]](_[27984] + window[_[27957]] + _[27985]), window['p$DB'](), window['p$ADBCE'](), window['p$ADCBE']()) : (window['p$DEB'](_[27986], window[_[27957]]), wx[_[27965]]({ 'title': _[6334], 'content': _[27987] }));
}, window[_[27948]] = '', wx[_[27988]]({ 'success'(hkj) {
    window[_[27948]] = _[27989] + hkj[_[27990]] + _[27991] + hkj[_[27992]] + _[27993] + hkj[_[4629]] + _[27994] + hkj[_[464]] + _[27995] + hkj[_[24344]] + _[27996] + hkj[_[27957]] + _[27997] + hkj[_[9071]], console[_[471]](window[_[27948]]), console[_[471]](_[27998] + hkj[_[27999]] + _[28000] + hkj[_[28001]] + _[28002] + hkj[_[28003]] + _[28004] + hkj[_[28005]] + _[28006] + hkj[_[28007]] + _[28008] + hkj[_[28009]] + _[28010] + (hkj[_[28011]] ? hkj[_[28011]][_[320]] + ',' + hkj[_[28011]][_[1205]] + ',' + hkj[_[28011]][_[1207]] + ',' + hkj[_[28011]][_[1206]] : ''));var faecdb = hkj[_[464]] ? hkj[_[464]][_[11880]]() : '',
        mki = hkj[_[27992]] ? hkj[_[27992]][_[11880]]()[_[4616]]('\x20', '') : '';window['p$DE'][_[501]] = faecdb[_[115]](_[28012]) != -0x1, window['p$DE'][_[11053]] = faecdb[_[115]](_[27892]) != -0x1, window['p$DE'][_[28013]] = faecdb[_[115]](_[28012]) != -0x1 || faecdb[_[115]](_[27892]) != -0x1, window['p$DE'][_[24061]] = faecdb[_[115]](_[27893]) != -0x1 || faecdb[_[115]](_[28014]) != -0x1, window['p$DE'][_[28015]] = hkj[_[24344]] ? hkj[_[24344]][_[11880]]() : '', window['p$DE']['p$ABDCE'] = ![], window['p$DE']['p$ABDEC'] = 0x2;if (faecdb[_[115]](_[27892]) != -0x1) {
      if (hkj[_[9071]] >= 0x18) window['p$DE']['p$ABDEC'] = 0x3;else window['p$DE']['p$ABDEC'] = 0x2;
    } else {
      if (faecdb[_[115]](_[28012]) != -0x1) {
        if (hkj[_[9071]] && hkj[_[9071]] >= 0x14) window['p$DE']['p$ABDEC'] = 0x3;else {
          if (mki[_[115]](_[28016]) != -0x1 || mki[_[115]](_[28017]) != -0x1 || mki[_[115]](_[28018]) != -0x1 || mki[_[115]](_[28019]) != -0x1 || mki[_[115]](_[28020]) != -0x1) window['p$DE']['p$ABDEC'] = 0x2;else window['p$DE']['p$ABDEC'] = 0x3;
        }
      } else window['p$DE']['p$ABDEC'] = 0x2;
    }console[_[471]](_[28021] + window['p$DE']['p$ABDCE'] + _[28022] + window['p$DE']['p$ABDEC']);
  } }), wx[_[28023]]({ 'success': function (dafbec) {
    console[_[471]](_[28024] + dafbec[_[4534]] + _[28025] + dafbec[_[28026]]);
  } }), wx[_[28027]]({ 'success': function (x_$wyz) {
    console[_[471]](_[28028] + x_$wyz[_[28029]]);
  } }), wx[_[28030]]({ 'keepScreenOn': !![] }), wx[_[28031]](function (bcfdea) {
  console[_[471]](_[28028] + bcfdea[_[28029]] + _[28032] + bcfdea[_[28033]]);
}), wx[_[28034]](function (srtuwv) {
  window['p$EBC'] = srtuwv, window['p$ECB'] && window['p$EBC'] && (console[_[78]](_[28035] + window['p$EBC'][_[765]]), window['p$ECB'](window['p$EBC']), window['p$EBC'] = null);
}), window['p$ADEBC'] = 0x0, window[_[28036]] = null, wx[_[28037]](function () {
  window['p$ADEBC']++, wx[_[11485]]();if (window['p$ADEBC'] >= 0x2) {
    window['p$ADEBC'] = 0x0, console[_[125]](_[28038]), wx[_[28039]]('0', 0x1);if (window['p$DE'] && window['p$DE'][_[501]]) window['p$DEB'](_[28040], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});