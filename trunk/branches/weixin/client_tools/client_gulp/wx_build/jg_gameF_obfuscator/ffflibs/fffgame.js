var k = wx.$f;
console[k[60077]](k[86632]), window[k[86633]], wx[k[86634]](function (x7er8) {
  if (x7er8) {
    if (x7er8[k[64075]]) {
      var hkt0q5 = window[k[60530]][k[86635]][k[64239]](new RegExp(/\./, 'g'), '_'),
          fibtmv = x7er8[k[64075]],
          vubimf = fibtmv[k[70757]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (vubimf) for (var oc64_ = 0x0; oc64_ < vubimf[k[60013]]; oc64_++) {
        if (vubimf[oc64_] && vubimf[oc64_][k[60013]] > 0x0) {
          var exns = parseInt(vubimf[oc64_][k[64239]](k[86636], '')[k[64239]](':', ''));fibtmv = fibtmv[k[64239]](vubimf[oc64_], vubimf[oc64_][k[64239]](':' + exns + ':', ':' + (exns - 0x2) + ':'));
        }
      }fibtmv = fibtmv[k[64239]](new RegExp(k[86637], 'g'), k[86638] + hkt0q5 + k[83253]), fibtmv = fibtmv[k[64239]](new RegExp(k[86639], 'g'), k[86638] + hkt0q5 + k[83253]), x7er8[k[64075]] = fibtmv;
    }var z$73 = { 'id': window['F$L6'][k[86640]], 'role': window['F$L6'][k[64182]], 'level': window['F$L6'][k[86641]], 'user': window['F$L6'][k[83156]], 'version': window['F$L6'][k[60100]], 'gamever': window[k[60530]][k[86635]], 'cdn': window['F$L6'][k[64074]], 'serverid': window['F$L6'][k[83151]] ? window['F$L6'][k[83151]][k[70378]] : 0x0, 'systemInfo': window[k[86642]], 'error': k[86643], 'stack': x7er8 ? x7er8[k[64075]] : '' },
        dc2oj6 = JSON[k[64060]](z$73);console[k[60124]](k[86644] + dc2oj6), (!window[k[86633]] || window[k[86633]] != z$73[k[60124]]) && (window[k[86633]] = z$73[k[60124]], window['F$0L'](z$73));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[86645]] = require(k[86646]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';import 'SyMiniTool.js';console[k[60077]](k[86647]), console[k[60077]](k[86648]), F$0L86({ 'title': k[86649] });var fwodcsj = { 'F$I80L6': !![] };new window[k[86650]](fwodcsj), window[k[86650]][k[60144]]['F$I860L']();if (window['F$I068L']) clearInterval(window['F$I068L']);window['F$I068L'] = null, window['F$I86L0'] = function (hk05q_, jwodsc) {
  if (!hk05q_ || !jwodsc) return 0x0;hk05q_ = hk05q_[k[60015]]('.'), jwodsc = jwodsc[k[60015]]('.');const exzs = Math[k[60813]](hk05q_[k[60013]], jwodsc[k[60013]]);while (hk05q_[k[60013]] < exzs) {
    hk05q_[k[60029]]('0');
  }while (jwodsc[k[60013]] < exzs) {
    jwodsc[k[60029]]('0');
  }for (var e7zrx8 = 0x0; e7zrx8 < exzs; e7zrx8++) {
    const znxse = parseInt(hk05q_[e7zrx8]),
          zxe8nw = parseInt(jwodsc[e7zrx8]);if (znxse > zxe8nw) return 0x1;else {
      if (znxse < zxe8nw) return -0x1;
    }
  }return 0x0;
}, window[k[86651]] = wx[k[86652]]()[k[86651]], console[k[60457]](k[86653] + window[k[86651]]);var fxdeswn = wx[k[86654]]();fxdeswn['onCheckForUpdate'](function (c2d6jo) {
  console[k[60457]](k[86655] + c2d6jo[k[86656]]);
}), fxdeswn[k[86657]](function () {
  wx[k[86658]]({ 'title': k[86659], 'content': k[86660], 'showCancel': ![], 'success': function (qk_254) {
      fxdeswn[k[86661]]();
    } });
}), fxdeswn['onUpdateFailed'](function () {
  console[k[60457]](k[86662]);
}), window['F$IL086'] = function () {
  console[k[60457]](k[86663]);var m0ihft = wx[k[86664]]({ 'name': k[86665], 'success': function (th5fq) {
      console[k[60457]](k[86666]), console[k[60457]](th5fq), th5fq && th5fq[k[83327]] == k[86667] ? (window['F$68'] = !![], window['F$6L08'](), window['F$6L80']()) : setTimeout(function () {
        window['F$IL086']();
      }, 0x1f4);
    }, 'fail': function (jdcw) {
      console[k[60457]](k[86668]), console[k[60457]](jdcw), setTimeout(function () {
        window['F$IL086']();
      }, 0x1f4);
    } });m0ihft && m0ihft[k[86669]](uvb9g1 => {});
}, window['F$IL806'] = function () {
  console[k[60457]](k[86670]);var t05qkh = wx[k[86664]]({ 'name': k[86671], 'success': function (ay7r$) {
      console[k[60457]](k[86672]), console[k[60457]](ay7r$), ay7r$ && ay7r$[k[83327]] == k[86667] ? (window['F$L86'] = !![], window['F$6L08'](), window['F$6L80']()) : setTimeout(function () {
        window['F$IL806']();
      }, 0x1f4);
    }, 'fail': function (nwz) {
      console[k[60457]](k[86673]), console[k[60457]](nwz), setTimeout(function () {
        window['F$IL806']();
      }, 0x1f4);
    } });t05qkh && t05qkh[k[86669]](qht5k0 => {});
}, window[k[86674]] = function () {
  window['F$I86L0'](window[k[86651]], k[86675]) >= 0x0 ? (console[k[60457]](k[86676] + window[k[86651]] + k[86677]), window['F$L0'](), window['F$IL086'](), window['F$IL806']()) : (window['F$L60'](k[86678], window[k[86651]]), wx[k[86658]]({ 'title': k[65817], 'content': k[86679] }));
}, window[k[86642]] = '', wx[k[86680]]({ 'success'(jwscd) {
    window[k[86642]] = k[86681] + jwscd[k[86682]] + k[86683] + jwscd[k[86684]] + k[86685] + jwscd[k[64252]] + k[86686] + jwscd[k[60450]] + k[86687] + jwscd[k[83127]] + k[86688] + jwscd[k[86651]] + k[86689] + jwscd[k[68399]], console[k[60457]](window[k[86642]]), console[k[60457]](k[86690] + jwscd[k[86691]] + k[86692] + jwscd[k[86693]] + k[86694] + jwscd[k[86695]] + k[86696] + jwscd[k[86697]] + k[86698] + jwscd[k[86699]] + k[86700] + jwscd[k[86701]] + k[86702] + (jwscd[k[86703]] ? jwscd[k[86703]][k[60313]] + ',' + jwscd[k[86703]][k[61125]] + ',' + jwscd[k[86703]][k[61127]] + ',' + jwscd[k[86703]][k[61126]] : ''));var cdjs6o = jwscd[k[60450]] ? jwscd[k[60450]][k[70994]]() : '',
        h0tfqm = jwscd[k[86684]] ? jwscd[k[86684]][k[70994]]()[k[64239]]('\x20', '') : '';window['F$L6'][k[60486]] = cdjs6o[k[60114]](k[86704]) != -0x1, window['F$L6'][k[70221]] = cdjs6o[k[60114]](k[86500]) != -0x1, window['F$L6'][k[86705]] = cdjs6o[k[60114]](k[86704]) != -0x1 || cdjs6o[k[60114]](k[86500]) != -0x1, window['F$L6'][k[82852]] = cdjs6o[k[60114]](k[86706]) != -0x1 || cdjs6o[k[60114]](k[86707]) != -0x1, window['F$L6'][k[86708]] = jwscd[k[83127]] ? jwscd[k[83127]][k[70994]]() : '', window['F$L6']['F$I0L86'] = ![], window['F$L6']['F$I0L68'] = 0x2;if (cdjs6o[k[60114]](k[86500]) != -0x1) {
      if (jwscd[k[68399]] >= 0x18) window['F$L6']['F$I0L68'] = 0x3;else window['F$L6']['F$I0L68'] = 0x2;
    } else {
      if (cdjs6o[k[60114]](k[86704]) != -0x1) {
        if (jwscd[k[68399]] && jwscd[k[68399]] >= 0x14) window['F$L6']['F$I0L68'] = 0x3;else {
          if (h0tfqm[k[60114]](k[86709]) != -0x1 || h0tfqm[k[60114]](k[86710]) != -0x1 || h0tfqm[k[60114]](k[86711]) != -0x1 || h0tfqm[k[60114]](k[86712]) != -0x1 || h0tfqm[k[60114]](k[86713]) != -0x1) window['F$L6']['F$I0L68'] = 0x2;else window['F$L6']['F$I0L68'] = 0x3;
        }
      } else window['F$L6']['F$I0L68'] = 0x2;
    }console[k[60457]](k[86714] + window['F$L6']['F$I0L86'] + k[86715] + window['F$L6']['F$I0L68']);
  } }), wx[k[86716]]({ 'success': function (_o6c2) {
    console[k[60457]](k[86717] + _o6c2[k[64158]] + k[86718] + _o6c2[k[86719]]);
  } }), wx[k[86720]]({ 'success': function (mfhqt0) {
    console[k[60457]](k[86721] + mfhqt0[k[86722]]);
  } }), wx[k[86723]]({ 'keepScreenOn': !![] }), wx[k[86724]](function (ry7a) {
  console[k[60457]](k[86721] + ry7a[k[86722]] + k[86725] + ry7a[k[86726]]);
}), wx[k[86727]](function (e8$z7r) {
  window['F$608'] = e8$z7r, window['F$680'] && window['F$608'] && (console[k[60077]](k[86728] + window['F$608'][k[60739]]), window['F$680'](window['F$608']), window['F$608'] = null);
}), window['F$IL608'] = 0x0, window[k[86729]] = null, wx[k[86730]](function () {
  window['F$IL608']++, wx[k[70623]]();if (window['F$IL608'] >= 0x2) {
    window['F$IL608'] = 0x0, console[k[60124]](k[86731]), wx[k[86732]]('0', 0x1);if (window['F$L6'] && window['F$L6'][k[60486]]) window['F$L60'](k[86733], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});