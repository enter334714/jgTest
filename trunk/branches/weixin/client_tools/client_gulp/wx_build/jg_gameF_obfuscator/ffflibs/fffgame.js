var k = wx.$f;
console[k[60077]](k[86632]), window[k[86633]], wx[k[86634]](function (bi9v) {
  if (bi9v) {
    if (bi9v[k[64075]]) {
      var miftv = window[k[60530]][k[86635]][k[64239]](new RegExp(/\./, 'g'), '_'),
          f05htq = bi9v[k[64075]],
          cwodjs = f05htq[k[70757]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (cwodjs) for (var umb1iv = 0x0; umb1iv < cwodjs[k[60013]]; umb1iv++) {
        if (cwodjs[umb1iv] && cwodjs[umb1iv][k[60013]] > 0x0) {
          var jwdxsn = parseInt(cwodjs[umb1iv][k[64239]](k[86636], '')[k[64239]](':', ''));f05htq = f05htq[k[64239]](cwodjs[umb1iv], cwodjs[umb1iv][k[64239]](':' + jwdxsn + ':', ':' + (jwdxsn - 0x2) + ':'));
        }
      }f05htq = f05htq[k[64239]](new RegExp(k[86637], 'g'), k[86638] + miftv + k[83253]), f05htq = f05htq[k[64239]](new RegExp(k[86639], 'g'), k[86638] + miftv + k[83253]), bi9v[k[64075]] = f05htq;
    }var wsdenx = { 'id': window['F$L6'][k[86640]], 'role': window['F$L6'][k[64182]], 'level': window['F$L6'][k[86641]], 'user': window['F$L6'][k[83156]], 'version': window['F$L6'][k[60100]], 'gamever': window[k[60530]][k[86635]], 'cdn': window['F$L6'][k[64074]], 'serverid': window['F$L6'][k[83151]] ? window['F$L6'][k[83151]][k[70378]] : 0x0, 'systemInfo': window[k[86642]], 'error': k[86643], 'stack': bi9v ? bi9v[k[64075]] : '' },
        _426ko = JSON[k[64060]](wsdenx);console[k[60124]](k[86644] + _426ko), (!window[k[86633]] || window[k[86633]] != wsdenx[k[60124]]) && (window[k[86633]] = wsdenx[k[60124]], window['F$0L'](wsdenx));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[86645]] = require(k[86646]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';import 'SyMiniTool.js';console[k[60077]](k[86647]), console[k[60077]](k[86648]), F$0L86({ 'title': k[86649] });var fk54q_ = { 'F$I80L6': !![] };new window[k[86650]](fk54q_), window[k[86650]][k[60144]]['F$I860L']();if (window['F$I068L']) clearInterval(window['F$I068L']);window['F$I068L'] = null, window['F$I86L0'] = function (co4_26, u9vbi1) {
  if (!co4_26 || !u9vbi1) return 0x0;co4_26 = co4_26[k[60015]]('.'), u9vbi1 = u9vbi1[k[60015]]('.');const tfm0i = Math[k[60813]](co4_26[k[60013]], u9vbi1[k[60013]]);while (co4_26[k[60013]] < tfm0i) {
    co4_26[k[60029]]('0');
  }while (u9vbi1[k[60013]] < tfm0i) {
    u9vbi1[k[60029]]('0');
  }for (var v91bug = 0x0; v91bug < tfm0i; v91bug++) {
    const wznxe = parseInt(co4_26[v91bug]),
          csjd = parseInt(u9vbi1[v91bug]);if (wznxe > csjd) return 0x1;else {
      if (wznxe < csjd) return -0x1;
    }
  }return 0x0;
}, window[k[86651]] = wx[k[86652]]()[k[86651]], console[k[60457]](k[86653] + window[k[86651]]);var fwsjnx = wx[k[86654]]();fwsjnx['onCheckForUpdate'](function (thmif) {
  console[k[60457]](k[86655] + thmif[k[86656]]);
}), fwsjnx[k[86657]](function () {
  wx[k[86658]]({ 'title': k[86659], 'content': k[86660], 'showCancel': ![], 'success': function (_24k65) {
      fwsjnx[k[86661]]();
    } });
}), fwsjnx['onUpdateFailed'](function () {
  console[k[60457]](k[86662]);
}), window['F$IL086'] = function () {
  console[k[60457]](k[86663]);var fhtmib = wx[k[86664]]({ 'name': k[86665], 'success': function (nzexw) {
      console[k[60457]](k[86666]), console[k[60457]](nzexw), nzexw && nzexw[k[83327]] == k[86667] ? (window['F$68'] = !![], window['F$6L08'](), window['F$6L80']()) : setTimeout(function () {
        window['F$IL086']();
      }, 0x1f4);
    }, 'fail': function (osjwdc) {
      console[k[60457]](k[86668]), console[k[60457]](osjwdc), setTimeout(function () {
        window['F$IL086']();
      }, 0x1f4);
    } });fhtmib && fhtmib[k[86669]](xwezs => {});
}, window['F$IL806'] = function () {
  console[k[60457]](k[86670]);var dxjsn = wx[k[86664]]({ 'name': k[86671], 'success': function (bivm1) {
      console[k[60457]](k[86672]), console[k[60457]](bivm1), bivm1 && bivm1[k[83327]] == k[86667] ? (window['F$L86'] = !![], window['F$6L08'](), window['F$6L80']()) : setTimeout(function () {
        window['F$IL806']();
      }, 0x1f4);
    }, 'fail': function (tkhq5) {
      console[k[60457]](k[86673]), console[k[60457]](tkhq5), setTimeout(function () {
        window['F$IL806']();
      }, 0x1f4);
    } });dxjsn && dxjsn[k[86669]](nswcd => {});
};window['F$I86L0'](window[k[86651]], k[86674]) >= 0x0 ? (console[k[60457]](k[86675] + window[k[86651]] + k[86676]), window['F$L0'](), window['F$IL086'](), window['F$IL806']()) : (window['F$L60'](k[86677], window[k[86651]]), wx[k[86658]]({ 'title': k[65817], 'content': k[86678] }));window[k[86642]] = '', wx[k[86679]]({ 'success'(j6sodc) {
    window[k[86642]] = k[86680] + j6sodc[k[86681]] + k[86682] + j6sodc[k[86683]] + k[86684] + j6sodc[k[64252]] + k[86685] + j6sodc[k[60450]] + k[86686] + j6sodc[k[83127]] + k[86687] + j6sodc[k[86651]] + k[86688] + j6sodc[k[68399]], console[k[60457]](window[k[86642]]), console[k[60457]](k[86689] + j6sodc[k[86690]] + k[86691] + j6sodc[k[86692]] + k[86693] + j6sodc[k[86694]] + k[86695] + j6sodc[k[86696]] + k[86697] + j6sodc[k[86698]] + k[86699] + j6sodc[k[86700]] + k[86701] + (j6sodc[k[86702]] ? j6sodc[k[86702]][k[60313]] + ',' + j6sodc[k[86702]][k[61125]] + ',' + j6sodc[k[86702]][k[61127]] + ',' + j6sodc[k[86702]][k[61126]] : ''));var _ko2 = j6sodc[k[60450]] ? j6sodc[k[60450]][k[70994]]() : '',
        bfmhit = j6sodc[k[86683]] ? j6sodc[k[86683]][k[70994]]()[k[64239]]('\x20', '') : '';window['F$L6'][k[60486]] = _ko2[k[60114]](k[86703]) != -0x1, window['F$L6'][k[70221]] = _ko2[k[60114]](k[86500]) != -0x1, window['F$L6'][k[86704]] = _ko2[k[60114]](k[86703]) != -0x1 || _ko2[k[60114]](k[86500]) != -0x1, window['F$L6'][k[82852]] = _ko2[k[60114]](k[86705]) != -0x1 || _ko2[k[60114]](k[86706]) != -0x1, window['F$L6'][k[86707]] = j6sodc[k[83127]] ? j6sodc[k[83127]][k[70994]]() : '', window['F$L6']['F$I0L86'] = ![], window['F$L6']['F$I0L68'] = 0x2;if (_ko2[k[60114]](k[86500]) != -0x1) {
      if (j6sodc[k[68399]] >= 0x18) window['F$L6']['F$I0L68'] = 0x3;else window['F$L6']['F$I0L68'] = 0x2;
    } else {
      if (_ko2[k[60114]](k[86703]) != -0x1) {
        if (j6sodc[k[68399]] && j6sodc[k[68399]] >= 0x14) window['F$L6']['F$I0L68'] = 0x3;else {
          if (bfmhit[k[60114]](k[86708]) != -0x1 || bfmhit[k[60114]](k[86709]) != -0x1 || bfmhit[k[60114]](k[86710]) != -0x1 || bfmhit[k[60114]](k[86711]) != -0x1 || bfmhit[k[60114]](k[86712]) != -0x1) window['F$L6']['F$I0L68'] = 0x2;else window['F$L6']['F$I0L68'] = 0x3;
        }
      } else window['F$L6']['F$I0L68'] = 0x2;
    }console[k[60457]](k[86713] + window['F$L6']['F$I0L86'] + k[86714] + window['F$L6']['F$I0L68']);
  } }), wx[k[86715]]({ 'success': function ($yp7) {
    console[k[60457]](k[86716] + $yp7[k[64158]] + k[86717] + $yp7[k[86718]]);
  } }), wx[k[86719]]({ 'success': function (fh0tqm) {
    console[k[60457]](k[86720] + fh0tqm[k[86721]]);
  } }), wx[k[86722]]({ 'keepScreenOn': !![] }), wx[k[86723]](function (bmhtf) {
  console[k[60457]](k[86720] + bmhtf[k[86721]] + k[86724] + bmhtf[k[86725]]);
}), wx[k[86726]](function (hfmtbi) {
  window['F$608'] = hfmtbi, window['F$680'] && window['F$608'] && (console[k[60077]](k[86727] + window['F$608'][k[60739]]), window['F$680'](window['F$608']), window['F$608'] = null);
}), window['F$IL608'] = 0x0, window[k[86728]] = null, wx[k[86729]](function () {
  window['F$IL608']++, wx[k[70623]]();if (window['F$IL608'] >= 0x2) {
    window['F$IL608'] = 0x0, console[k[60124]](k[86730]), wx[k[86731]]('0', 0x1);if (window['F$L6'] && window['F$L6'][k[60486]]) window['F$L60'](k[86732], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});