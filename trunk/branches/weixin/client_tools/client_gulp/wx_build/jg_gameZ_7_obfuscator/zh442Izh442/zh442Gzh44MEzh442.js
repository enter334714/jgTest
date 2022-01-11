var e = wx.$F;
console[e[600001]](e[600002]), window[e[600003]], wx[e[600004]](function (vab5q) {
  if (vab5q) {
    if (vab5q[e[600005]]) {
      var or70qx = window[e[600006]][e[600007]][e[600008]](new RegExp(/\./, 'g'), '_'),
          o7q5 = vab5q[e[600005]],
          uz1wf = o7q5[e[600009]](/(zh44zh44zh44zh44zh44\/zh442Gzh44MEzh442.js:)[0-9]{1,60}(:)/g);if (uz1wf) for (var b_2 = 0x0; b_2 < uz1wf[e[600010]]; b_2++) {
        if (uz1wf[b_2] && uz1wf[b_2][e[600010]] > 0x0) {
          var va6$b = parseInt(uz1wf[b_2][e[600008]](e[600011], '')[e[600008]](':', ''));o7q5 = o7q5[e[600008]](uz1wf[b_2], uz1wf[b_2][e[600008]](':' + va6$b + ':', ':' + (va6$b - 0x2) + ':'));
        }
      }o7q5 = o7q5[e[600008]](new RegExp(e[600012], 'g'), e[600013] + or70qx + e[600014]), o7q5 = o7q5[e[600008]](new RegExp(e[600015], 'g'), e[600013] + or70qx + e[600014]), vab5q[e[600005]] = o7q5;
    }var qxo7r0 = { 'id': window['k$E'][e[600016]], 'role': window['k$E'][e[600017]], 'level': window['k$E'][e[600018]], 'user': window['k$E'][e[600019]], 'version': window['k$E'][e[600020]], 'cdn': window['k$E'][e[600021]], 'pkgName': window['k$E']['pkgName'], 'gamever': window[e[600006]][e[600007]], 'serverid': window['k$E'][e[600022]] ? window['k$E'][e[600022]][e[600023]] : 0x0, 'systemInfo': window[e[600024]], 'error': e[600025], 'stack': vab5q ? vab5q[e[600005]] : '' },
        mri8xy = JSON[e[600026]](qxo7r0);console[e[600027]](e[600028] + mri8xy), (!window[e[600003]] || window[e[600003]] != qxo7r0[e[600027]]) && (window[e[600003]] = qxo7r0[e[600027]], window['kI$'](qxo7r0));
  }
});import 'zh44zh44bfzh44zh44.js';import 'zh44zh4411zh44zh44.js';window[e[600029]] = require(e[600030]);import 'zh44INDzh44zh44.js';import 'zh44zh44Izh441zh44zh44.js';import 'zh44zh44Mtadzh44zh44.js';import 'zh44zh44INIzh44azh44.js';import 'SyMiniTool.js';console[e[600001]](e[600031]), console[e[600001]](e[600032]), kI$TE({ 'title': e[600033] });var l_sj$ke = { 'kBIE$T': !![] };new window[e[600034]](l_sj$ke), window[e[600034]][e[600035]]['kBT$EI']();if (window['kBI$ET']) clearInterval(window['kBI$ET']);window['kBI$ET'] = null, window['kBTEI$'] = function (miy8g, g8yi3m) {
  if (!miy8g || !g8yi3m) return 0x0;miy8g = miy8g[e[600036]]('.'), g8yi3m = g8yi3m[e[600036]]('.');const r087 = Math[e[600037]](miy8g[e[600010]], g8yi3m[e[600010]]);while (miy8g[e[600010]] < r087) {
    miy8g[e[600038]]('0');
  }while (g8yi3m[e[600010]] < r087) {
    g8yi3m[e[600038]]('0');
  }for (var c4dzu = 0x0; c4dzu < r087; c4dzu++) {
    const wf1uz9 = parseInt(miy8g[c4dzu]),
          _kje$ = parseInt(g8yi3m[c4dzu]);if (wf1uz9 > _kje$) return 0x1;else {
      if (wf1uz9 < _kje$) return -0x1;
    }
  }return 0x0;
}, window[e[600039]] = wx[e[600040]]()[e[600039]], console[e[600041]](e[600042] + window[e[600039]]);var ls_$k = wx[e[600043]]();ls_$k['onCheckForUpdate'](function (g3m8iy) {
  console[e[600041]](e[600044] + g3m8iy[e[600045]]);
}), ls_$k[e[600046]](function () {
  wx[e[600047]]({ 'title': e[600048], 'content': e[600049], 'showCancel': ![], 'success': function (_s2k) {
      ls_$k[e[600050]]();
    } });
}), ls_$k[e[600051]](function () {
  console[e[600041]](e[600052]);
}), window['kBTE$I'] = function () {
  console[e[600041]](e[600053]);var wu9fl1 = wx['loadSubpackage']({ 'name': e[600054], 'success': function (wuczf) {
      console[e[600041]](e[600055]), console[e[600041]](wuczf), wuczf && wuczf[e[600056]] == 'loadSubpackage:ok' ? (window['kET'] = !![], window['kET$I'](), window['kE$IT']()) : setTimeout(function () {
        window['kBTE$I']();
      }, 0x1f4);
    }, 'fail': function (rxi8m) {
      console[e[600041]](e[600057]), console[e[600041]](rxi8m), setTimeout(function () {
        window['kBTE$I']();
      }, 0x1f4);
    } });wu9fl1 && wu9fl1[e[600058]](m3i8r => {});
}, window['kB$IET'] = function () {
  console[e[600041]](e[600059]);var z4uc9w = wx['loadSubpackage']({ 'name': e[600060], 'success': function (fl19uw) {
      console[e[600041]](e[600061]), console[e[600041]](fl19uw), fl19uw && fl19uw[e[600056]] == 'loadSubpackage:ok' ? (window['k$TE'] = !![], window['kET$I'](), window['kE$IT']()) : setTimeout(function () {
        window['kB$IET']();
      }, 0x1f4);
    }, 'fail': function (iox8r) {
      console[e[600041]](e[600062]), console[e[600041]](iox8r), setTimeout(function () {
        window['kB$IET']();
      }, 0x1f4);
    } });z4uc9w && z4uc9w[e[600058]](b5qva6 => {});
}, window['loadSubpackages'] = function () {
  window['kBTEI$'](window[e[600039]], e[600063]) >= 0x0 ? (console[e[600041]](e[600064] + window[e[600039]] + e[600065]), window['k$I'](), window['kBTE$I'](), window['kB$IET']()) : (window['k$EI'](e[600066], window[e[600039]]), wx[e[600047]]({ 'title': e[600067], 'content': e[600068] }));
}, window[e[600024]] = '', wx[e[600069]]({ 'success'(nzd4cp) {
    window[e[600024]] = e[600070] + nzd4cp[e[600071]] + e[600072] + nzd4cp[e[600073]] + e[600074] + nzd4cp[e[600075]] + e[600076] + nzd4cp[e[600077]] + e[600078] + nzd4cp[e[600079]] + e[600080] + nzd4cp[e[600039]] + e[600081] + nzd4cp['benchmarkLevel'], console[e[600041]](window[e[600024]]), console[e[600041]](e[600082] + nzd4cp[e[600083]] + e[600084] + nzd4cp[e[600085]] + e[600086] + nzd4cp[e[600087]] + e[600088] + nzd4cp[e[600089]] + e[600090] + nzd4cp[e[600091]] + e[600092] + nzd4cp[e[600093]] + e[600094] + (nzd4cp[e[600095]] ? nzd4cp[e[600095]][e[600096]] + ',' + nzd4cp[e[600095]][e[600097]] + ',' + nzd4cp[e[600095]][e[600098]] + ',' + nzd4cp[e[600095]][e[600099]] : ''));var p94dz = nzd4cp[e[600077]] ? nzd4cp[e[600077]][e[600100]]() : '',
        k_2bv = nzd4cp[e[600073]] ? nzd4cp[e[600073]][e[600100]]()[e[600008]]('\x20', '') : '';window['k$E'][e[600101]] = p94dz[e[600102]](e[600103]) != -0x1, window['k$E'][e[600104]] = p94dz[e[600102]](e[600105]) != -0x1, window['k$E'][e[600106]] = p94dz[e[600102]](e[600103]) != -0x1 || p94dz[e[600102]](e[600105]) != -0x1, window['k$E'][e[600107]] = p94dz[e[600102]](e[600108]) != -0x1 || p94dz[e[600102]](e[600109]) != -0x1, window['k$E'][e[600110]] = nzd4cp[e[600079]] ? nzd4cp[e[600079]][e[600100]]() : '', window['k$E']['kBITE$'] = ![], window['k$E']['kBI$TE'] = 0x2;if (p94dz[e[600102]](e[600105]) != -0x1) {
      if (nzd4cp['benchmarkLevel'] >= 0x18) window['k$E']['kBI$TE'] = 0x3;else window['k$E']['kBI$TE'] = 0x2;
    } else {
      if (p94dz[e[600102]](e[600103]) != -0x1) {
        if (nzd4cp['benchmarkLevel'] && nzd4cp['benchmarkLevel'] >= 0x14) window['k$E']['kBI$TE'] = 0x3;else {
          if (k_2bv[e[600102]](e[600111]) != -0x1 || k_2bv[e[600102]](e[600112]) != -0x1 || k_2bv[e[600102]](e[600113]) != -0x1 || k_2bv[e[600102]](e[600114]) != -0x1 || k_2bv[e[600102]](e[600115]) != -0x1) window['k$E']['kBI$TE'] = 0x2;else window['k$E']['kBI$TE'] = 0x3;
        }
      } else window['k$E']['kBI$TE'] = 0x2;
    }console[e[600041]](e[600116] + window['k$E']['kBITE$'] + e[600117] + window['k$E']['kBI$TE']);
  } }), wx[e[600118]]({ 'success': function (i87ox) {
    console[e[600041]](e[600119] + i87ox[e[600120]] + e[600121] + i87ox[e[600122]]);
  } }), wx['getNetworkType']({ 'success': function (pnes_) {
    console[e[600041]](e[600123] + pnes_['networkType']);
  } }), wx[e[600124]]({ 'keepScreenOn': !![] }), wx['onNetworkStatusChange'](function (a5v26b) {
  console[e[600041]](e[600123] + a5v26b['networkType'] + e[600125] + a5v26b[e[600126]]);
}), wx[e[600127]](function (ns_jek) {
  window['kTI'] = ns_jek, window['kEIT'] && window['kTI'] && (console[e[600001]](e[600128] + window['kTI'][e[600129]]), window['kEIT'](window['kTI']), window['kTI'] = null);
}), window[e[600130]] = 0x0, window['kB$TEI'] = 0x0, window['onMemoryWarningCallBack'] = null, wx[e[600131]](function () {
  window['kB$TEI']++;var $e_kj = Date[e[600132]]();(window[e[600130]] == 0x0 || $e_kj - window[e[600130]] > 0x1d4c0) && (console[e[600133]](e[600134]), wx[e[600135]]());if (window['kB$TEI'] >= 0x2) {
    window['kB$TEI'] = 0x0, console[e[600027]](e[600136]), wx[e[600137]]('0', 0x1);if (window['k$E'] && window['k$E'][e[600101]]) window['k$EI'](e[600138], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});