var _ = wx.y$;
console[_[78]](_[29145]), window[_[29146]], wx[_[29147]](function (xzwuvy) {
  if (xzwuvy) {
    if (xzwuvy[_[4548]]) {
      var wsruvt = window[_[557]][_[29148]][_[4727]](new RegExp(/\./, 'g'), '_'),
          rqopn = xzwuvy[_[4548]],
          nqomrp = rqopn[_[12097]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);if (nqomrp) for (var x0yz$ = 0x0; x0yz$ < nqomrp[_[13]]; x0yz$++) {
        if (nqomrp[x0yz$] && nqomrp[x0yz$][_[13]] > 0x0) {
          var mqropn = parseInt(nqomrp[x0yz$][_[4727]](_[29149], '')[_[4727]](':', ''));rqopn = rqopn[_[4727]](nqomrp[x0yz$], nqomrp[x0yz$][_[4727]](':' + mqropn + ':', ':' + (mqropn - 0x2) + ':'));
        }
      }rqopn = rqopn[_[4727]](new RegExp(_[29150], 'g'), _[29151] + wsruvt + _[25442]), rqopn = rqopn[_[4727]](new RegExp(_[29152], 'g'), _[29151] + wsruvt + _[25442]), xzwuvy[_[4548]] = rqopn;
    }var hfgdie = { 'id': window['p$DE'][_[29153]], 'role': window['p$DE'][_[4669]], 'level': window['p$DE'][_[29154]], 'user': window['p$DE'][_[25342]], 'version': window['p$DE'][_[101]], 'cdn': window['p$DE'][_[4546]], 'pkgName': window['p$DE'][_[25343]], 'gamever': window[_[557]][_[29148]], 'serverid': window['p$DE'][_[25337]] ? window['p$DE'][_[25337]][_[11551]] : 0x0, 'systemInfo': window[_[29155]], 'error': _[29156], 'stack': xzwuvy ? xzwuvy[_[4548]] : '' },
        iklhmj = JSON[_[4532]](hfgdie);console[_[125]](_[29157] + iklhmj), (!window[_[29146]] || window[_[29146]] != hfgdie[_[125]]) && (window[_[29146]] = hfgdie[_[125]], window['p$BD'](hfgdie));
  }
});import 'bbbmd5min.js';import 'bbbzlibs.js';window[_[29158]] = require(_[29159]);import 'bbbindex.js';import 'bbblibsmin.js';import 'bbbwxmini.js';import 'bbbinitmin.js';console[_[78]](_[29160]), console[_[78]](_[29161]), p$BDCE({ 'title': _[29162] });var _dgkjfi = { 'p$ABEDC': !![] };new window[_[29163]](_dgkjfi), window[_[29163]][_[148]]['p$ACDEB']();if (window['p$ABDEC']) clearInterval(window['p$ABDEC']);window['p$ABDEC'] = null, window['p$ACEBD'] = function (abfec, uwvtrs) {
  if (!abfec || !uwvtrs) return 0x0;abfec = abfec[_[15]]('.'), uwvtrs = uwvtrs[_[15]]('.');const geji = Math[_[853]](abfec[_[13]], uwvtrs[_[13]]);while (abfec[_[13]] < geji) {
    abfec[_[29]]('0');
  }while (uwvtrs[_[13]] < geji) {
    uwvtrs[_[29]]('0');
  }for (var sut = 0x0; sut < geji; sut++) {
    const hjefi = parseInt(abfec[sut]),
          cfbdea = parseInt(uwvtrs[sut]);if (hjefi > cfbdea) return 0x1;else {
      if (hjefi < cfbdea) return -0x1;
    }
  }return 0x0;
}, window[_[29164]] = wx[_[29165]]()[_[29164]], console[_[482]](_[29166] + window[_[29164]]);var _dtvuwr = wx[_[29167]]();_dtvuwr[_[29168]](function (zy$x_w) {
  console[_[482]](_[29169] + zy$x_w[_[29170]]);
}), _dtvuwr[_[29171]](function () {
  wx[_[29172]]({ 'title': _[29173], 'content': _[29174], 'showCancel': ![], 'success': function (jgkhl) {
      _dtvuwr[_[29175]]();
    } });
}), _dtvuwr[_[29176]](function () {
  console[_[482]](_[29177]);
}), window['p$ACEDB'] = function () {
  console[_[482]](_[29178]);var dfbae = wx[_[29179]]({ 'name': _[29180], 'success': function (portsq) {
      console[_[482]](_[29181]), console[_[482]](portsq), portsq && portsq[_[25531]] == _[29182] ? (window['p$EC'] = !![], window['p$ECDB'](), window['p$EDBC']()) : setTimeout(function () {
        window['p$ACEDB']();
      }, 0x1f4);
    }, 'fail': function ($y_zxw) {
      console[_[482]](_[29183]), console[_[482]]($y_zxw), setTimeout(function () {
        window['p$ACEDB']();
      }, 0x1f4);
    } });dfbae && dfbae[_[29184]](opqn => {});
}, window['p$ADBEC'] = function () {
  console[_[482]](_[29185]);var zyuxv = wx[_[29179]]({ 'name': _[29186], 'success': function (_yxz$w) {
      console[_[482]](_[29187]), console[_[482]](_yxz$w), _yxz$w && _yxz$w[_[25531]] == _[29182] ? (window['p$DCE'] = !![], window['p$ECDB'](), window['p$EDBC']()) : setTimeout(function () {
        window['p$ADBEC']();
      }, 0x1f4);
    }, 'fail': function (_213) {
      console[_[482]](_[29188]), console[_[482]](_213), setTimeout(function () {
        window['p$ADBEC']();
      }, 0x1f4);
    } });zyuxv && zyuxv[_[29184]](_y$0xz => {});
}, window[_[29189]] = function () {
  window['p$ACEBD'](window[_[29164]], _[29190]) >= 0x0 ? (console[_[482]](_[29191] + window[_[29164]] + _[29192]), window['p$DB'](), window['p$ACEDB'](), window['p$ADBEC']()) : (window['p$DEB'](_[29193], window[_[29164]]), wx[_[29172]]({ 'title': _[6394], 'content': _[29194] }));
}, window[_[29155]] = '', wx[_[29195]]({ 'success'(hgifjk) {
    window[_[29155]] = _[29196] + hgifjk[_[29197]] + _[29198] + hgifjk[_[29199]] + _[29200] + hgifjk[_[4740]] + _[29201] + hgifjk[_[475]] + _[29202] + hgifjk[_[25314]] + _[29203] + hgifjk[_[29164]] + _[29204] + hgifjk[_[9348]], console[_[482]](window[_[29155]]), console[_[482]](_[29205] + hgifjk[_[29206]] + _[29207] + hgifjk[_[29208]] + _[29209] + hgifjk[_[29210]] + _[29211] + hgifjk[_[29212]] + _[29213] + hgifjk[_[29214]] + _[29215] + hgifjk[_[29216]] + _[29217] + (hgifjk[_[29218]] ? hgifjk[_[29218]][_[323]] + ',' + hgifjk[_[29218]][_[1216]] + ',' + hgifjk[_[29218]][_[1218]] + ',' + hgifjk[_[29218]][_[1217]] : ''));var efgdb = hgifjk[_[475]] ? hgifjk[_[475]][_[12394]]() : '',
        qnrpso = hgifjk[_[29199]] ? hgifjk[_[29199]][_[12394]]()[_[4727]]('\x20', '') : '';window['p$DE'][_[1074]] = efgdb[_[115]](_[29219]) != -0x1, window['p$DE'][_[11373]] = efgdb[_[115]](_[29099]) != -0x1, window['p$DE'][_[29220]] = efgdb[_[115]](_[29219]) != -0x1 || efgdb[_[115]](_[29099]) != -0x1, window['p$DE'][_[25050]] = efgdb[_[115]](_[29100]) != -0x1 || efgdb[_[115]](_[29221]) != -0x1, window['p$DE'][_[29222]] = hgifjk[_[25314]] ? hgifjk[_[25314]][_[12394]]() : '', window['p$DE']['p$ABCED'] = ![], window['p$DE']['p$ABDCE'] = 0x2;if (efgdb[_[115]](_[29099]) != -0x1) {
      if (hgifjk[_[9348]] >= 0x18) window['p$DE']['p$ABDCE'] = 0x3;else window['p$DE']['p$ABDCE'] = 0x2;
    } else {
      if (efgdb[_[115]](_[29219]) != -0x1) {
        if (hgifjk[_[9348]] && hgifjk[_[9348]] >= 0x14) window['p$DE']['p$ABDCE'] = 0x3;else {
          if (qnrpso[_[115]](_[29223]) != -0x1 || qnrpso[_[115]](_[29224]) != -0x1 || qnrpso[_[115]](_[29225]) != -0x1 || qnrpso[_[115]](_[29226]) != -0x1 || qnrpso[_[115]](_[29227]) != -0x1) window['p$DE']['p$ABDCE'] = 0x2;else window['p$DE']['p$ABDCE'] = 0x3;
        }
      } else window['p$DE']['p$ABDCE'] = 0x2;
    }console[_[482]](_[29228] + window['p$DE']['p$ABCED'] + _[29229] + window['p$DE']['p$ABDCE']);
  } }), wx[_[29230]]({ 'success': function ($120z_) {
    console[_[482]](_[29231] + $120z_[_[4645]] + _[29232] + $120z_[_[29233]]);
  } }), wx[_[29234]]({ 'success': function (jilhk) {
    console[_[482]](_[29235] + jilhk[_[29236]]);
  } }), wx[_[29237]]({ 'keepScreenOn': !![] }), wx[_[29238]](function (mjhlki) {
  console[_[482]](_[29235] + mjhlki[_[29236]] + _[29239] + mjhlki[_[29240]]);
}), wx[_[10883]](function (yw_$z) {
  window['p$CB'] = yw_$z, window['p$EBC'] && window['p$CB'] && (console[_[78]](_[29241] + window['p$CB'][_[776]]), window['p$EBC'](window['p$CB']), window['p$CB'] = null);
}), window[_[29242]] = 0x0, window['p$ADCEB'] = 0x0, window[_[29243]] = null, wx[_[29244]](function () {
  window['p$ADCEB']++;var x_yzw = Date[_[83]]();(window[_[29242]] == 0x0 || x_yzw - window[_[29242]] > 0x1d4c0) && (console[_[96]](_[29245]), wx[_[11950]]());if (window['p$ADCEB'] >= 0x2) {
    window['p$ADCEB'] = 0x0, console[_[125]](_[29246]), wx[_[29247]]('0', 0x1);if (window['p$DE'] && window['p$DE'][_[1074]]) window['p$DEB'](_[29248], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});