var Q = wx.$v;
console[Q[360001]](Q[360002]), window[Q[360003]], wx[Q[360004]](function (t1h_2) {
  if (t1h_2) {
    if (t1h_2[Q[360005]]) {
      var k5c07m = window[Q[360006]]['game_ver'][Q[360007]](new RegExp(/\./, 'g'), '_'),
          th_y12 = t1h_2[Q[360005]],
          l86zu = th_y12[Q[360008]](/(vvvvvvv\/vGAMEv.js:)[0-9]{1,60}(:)/g);if (l86zu) for (var iso4f$ = 0x0; iso4f$ < l86zu[Q[360009]]; iso4f$++) {
        if (l86zu[iso4f$] && l86zu[iso4f$][Q[360009]] > 0x0) {
          var vpqwg = parseInt(l86zu[iso4f$][Q[360007]](Q[360010], '')[Q[360007]](':', ''));th_y12 = th_y12[Q[360007]](l86zu[iso4f$], l86zu[iso4f$][Q[360007]](':' + vpqwg + ':', ':' + (vpqwg - 0x2) + ':'));
        }
      }th_y12 = th_y12[Q[360007]](new RegExp(Q[360011], 'g'), Q[360012] + k5c07m + Q[360013]), th_y12 = th_y12[Q[360007]](new RegExp(Q[360014], 'g'), Q[360012] + k5c07m + Q[360013]), t1h_2[Q[360005]] = th_y12;
    }var m7c0dk = { 'id': window['_vKD'][Q[360015]], 'role': window['_vKD'][Q[360016]], 'level': window['_vKD'][Q[360017]], 'user': window['_vKD'][Q[360018]], 'version': window['_vKD'][Q[360019]], 'cdn': window['_vKD'][Q[360020]], 'pkgName': window['_vKD'][Q[360021]], 'gamever': window[Q[360006]]['game_ver'], 'serverid': window['_vKD'][Q[360022]] ? window['_vKD'][Q[360022]][Q[360023]] : 0x0, 'systemInfo': window[Q[360024]], 'error': Q[360025], 'stack': t1h_2 ? t1h_2[Q[360005]] : '' },
        uhyl6 = JSON[Q[360026]](m7c0dk);console[Q[360027]](Q[360028] + uhyl6), (!window[Q[360003]] || window[Q[360003]] != m7c0dk[Q[360027]]) && (window[Q[360003]] = m7c0dk[Q[360027]], window['_vOK'](m7c0dk));
  }
});import 'vvfvv.js';import 'vv11vv.js';window[Q[360029]] = require(Q[360030]);import 'vINDvv.js';import 'vvIB1vv.js';import 'vvMtadvv.js';import 'vvINIvv.js';console[Q[360001]](Q[360031]), console[Q[360001]](Q[360032]), _vOK$D({ 'title': Q[360033] });var vlu8b6 = { '_v6ODK$': !![] };new window[Q[360034]](vlu8b6), window[Q[360034]][Q[360035]]['_v6$KDO']();if (window['_v6OKD$']) clearInterval(window['_v6OKD$']);window['_v6OKD$'] = null, window['_v6$DOK'] = function (s$fir9, wbu8eq) {
  if (!s$fir9 || !wbu8eq) return 0x0;s$fir9 = s$fir9[Q[360036]]('.'), wbu8eq = wbu8eq[Q[360036]]('.');const si$r9 = Math[Q[360037]](s$fir9[Q[360009]], wbu8eq[Q[360009]]);while (s$fir9[Q[360009]] < si$r9) {
    s$fir9[Q[360038]]('0');
  }while (wbu8eq[Q[360009]] < si$r9) {
    wbu8eq[Q[360038]]('0');
  }for (var t$o43 = 0x0; t$o43 < si$r9; t$o43++) {
    const i43so$ = parseInt(s$fir9[t$o43]),
          qxwgb = parseInt(wbu8eq[t$o43]);if (i43so$ > qxwgb) return 0x1;else {
      if (i43so$ < qxwgb) return -0x1;
    }
  }return 0x0;
}, window[Q[360039]] = wx[Q[360040]]()[Q[360039]], console[Q[360041]](Q[360042] + window[Q[360039]]);var vn24t3o = wx[Q[360043]]();vn24t3o[Q[360044]](function (mkcd7) {
  console[Q[360041]](Q[360045] + mkcd7[Q[360046]]);
}), vn24t3o[Q[360047]](function () {
  wx[Q[360048]]({ 'title': Q[360049], 'content': Q[360050], 'showCancel': ![], 'success': function (km0c) {
      vn24t3o[Q[360051]]();
    } });
}), vn24t3o[Q[360052]](function () {
  console[Q[360041]](Q[360053]);
}), window['_v6$DKO'] = function () {
  console[Q[360041]](Q[360054]);var xegqw = wx[Q[360055]]({ 'name': Q[360056], 'success': function ($4sofi) {
      console[Q[360041]](Q[360057]), console[Q[360041]]($4sofi), $4sofi && $4sofi[Q[360058]] == Q[360059] ? (window['_vD$'] = !![], window['_vD$KO'](), window['_vDKO$']()) : setTimeout(function () {
        window['_v6$DKO']();
      }, 0x1f4);
    }, 'fail': function (z_y16) {
      console[Q[360041]](Q[360060]), console[Q[360041]](z_y16), setTimeout(function () {
        window['_v6$DKO']();
      }, 0x1f4);
    } });xegqw && xegqw[Q[360061]]($irfs => {});
}, window['_v6KOD$'] = function () {
  console[Q[360041]](Q[360062]);var pwegqx = wx[Q[360055]]({ 'name': Q[360063], 'success': function (uewqb) {
      console[Q[360041]](Q[360064]), console[Q[360041]](uewqb), uewqb && uewqb[Q[360058]] == Q[360059] ? (window['_vK$D'] = !![], window['_vD$KO'](), window['_vDKO$']()) : setTimeout(function () {
        window['_v6KOD$']();
      }, 0x1f4);
    }, 'fail': function (wpeq) {
      console[Q[360041]](Q[360065]), console[Q[360041]](wpeq), setTimeout(function () {
        window['_v6KOD$']();
      }, 0x1f4);
    } });pwegqx && pwegqx[Q[360061]](y6uzlh => {});
}, window[Q[360066]] = function () {
  window['_v6$DOK'](window[Q[360039]], Q[360067]) >= 0x0 ? (console[Q[360041]](Q[360068] + window[Q[360039]] + Q[360069]), window['_vKO'](), window['_v6$DKO'](), window['_v6KOD$']()) : (window['_vKDO'](Q[360070], window[Q[360039]]), wx[Q[360048]]({ 'title': Q[360071], 'content': Q[360072] }));
}, window[Q[360024]] = '', wx[Q[360073]]({ 'success'(fio4$s) {
    window[Q[360024]] = Q[360074] + fio4$s[Q[360075]] + Q[360076] + fio4$s[Q[360077]] + Q[360078] + fio4$s[Q[360079]] + Q[360080] + fio4$s[Q[360081]] + Q[360082] + fio4$s[Q[360083]] + Q[360084] + fio4$s[Q[360039]] + Q[360085] + fio4$s[Q[360086]], console[Q[360041]](window[Q[360024]]), console[Q[360041]](Q[360087] + fio4$s[Q[360088]] + Q[360089] + fio4$s[Q[360090]] + Q[360091] + fio4$s[Q[360092]] + Q[360093] + fio4$s[Q[360094]] + Q[360095] + fio4$s[Q[360096]] + Q[360097] + fio4$s[Q[360098]] + Q[360099] + (fio4$s[Q[360100]] ? fio4$s[Q[360100]][Q[360101]] + ',' + fio4$s[Q[360100]][Q[360102]] + ',' + fio4$s[Q[360100]][Q[360103]] + ',' + fio4$s[Q[360100]][Q[360104]] : ''));var mj0 = fio4$s[Q[360081]] ? fio4$s[Q[360081]][Q[360105]]() : '',
        ue8lb = fio4$s[Q[360077]] ? fio4$s[Q[360077]][Q[360105]]()[Q[360007]]('\x20', '') : '';window['_vKD'][Q[360106]] = mj0[Q[360107]](Q[360108]) != -0x1, window['_vKD'][Q[360109]] = mj0[Q[360107]](Q[360110]) != -0x1, window['_vKD'][Q[360111]] = mj0[Q[360107]](Q[360108]) != -0x1 || mj0[Q[360107]](Q[360110]) != -0x1, window['_vKD'][Q[360112]] = mj0[Q[360107]](Q[360113]) != -0x1 || mj0[Q[360107]](Q[360114]) != -0x1, window['_vKD'][Q[360115]] = fio4$s[Q[360083]] ? fio4$s[Q[360083]][Q[360105]]() : '', window['_vKD']['_v6O$DK'] = ![], window['_vKD']['_v6OK$D'] = 0x2;if (mj0[Q[360107]](Q[360110]) != -0x1) {
      if (fio4$s[Q[360086]] >= 0x18) window['_vKD']['_v6OK$D'] = 0x3;else window['_vKD']['_v6OK$D'] = 0x2;
    } else {
      if (mj0[Q[360107]](Q[360108]) != -0x1) {
        if (fio4$s[Q[360086]] && fio4$s[Q[360086]] >= 0x14) window['_vKD']['_v6OK$D'] = 0x3;else {
          if (ue8lb[Q[360107]](Q[360116]) != -0x1 || ue8lb[Q[360107]](Q[360117]) != -0x1 || ue8lb[Q[360107]](Q[360118]) != -0x1 || ue8lb[Q[360107]](Q[360119]) != -0x1 || ue8lb[Q[360107]](Q[360120]) != -0x1) window['_vKD']['_v6OK$D'] = 0x2;else window['_vKD']['_v6OK$D'] = 0x3;
        }
      } else window['_vKD']['_v6OK$D'] = 0x2;
    }console[Q[360041]](Q[360121] + window['_vKD']['_v6O$DK'] + Q[360122] + window['_vKD']['_v6OK$D']);
  } }), wx[Q[360123]]({ 'success': function (ulz8e) {
    console[Q[360041]](Q[360124] + ulz8e[Q[360125]] + Q[360126] + ulz8e[Q[360127]]);
  } }), wx[Q[360128]]({ 'success': function (f4io$s) {
    console[Q[360041]](Q[360129] + f4io$s[Q[360130]]);
  } }), wx[Q[360131]]({ 'keepScreenOn': !![] }), wx[Q[360132]](function (kv057c) {
  console[Q[360041]](Q[360129] + kv057c[Q[360130]] + Q[360133] + kv057c[Q[360134]]);
}), wx[Q[360135]](function (k0mc7d) {
  window['_v$O'] = k0mc7d, window['_vDO$'] && window['_v$O'] && (console[Q[360001]](Q[360136] + window['_v$O'][Q[360137]]), window['_vDO$'](window['_v$O']), window['_v$O'] = null);
}), window[Q[360138]] = 0x0, window['_v6K$DO'] = 0x0, window[Q[360139]] = null, wx[Q[360140]](function () {
  window['_v6K$DO']++;var km57 = Date[Q[360141]]();(window[Q[360138]] == 0x0 || km57 - window[Q[360138]] > 0x1d4c0) && (console[Q[360142]](Q[360143]), wx[Q[360144]]());if (window['_v6K$DO'] >= 0x2) {
    window['_v6K$DO'] = 0x0, console[Q[360027]](Q[360145]), wx[Q[360146]]('0', 0x1);if (window['_vKD'] && window['_vKD'][Q[360106]]) window['_vKDO'](Q[360147], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});