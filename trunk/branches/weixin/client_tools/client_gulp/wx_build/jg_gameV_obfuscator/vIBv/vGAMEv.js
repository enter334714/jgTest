var Q = wx.$v;
console[Q[360001]](Q[360002]), window[Q[360003]], wx[Q[360004]](function (c5k0v7) {
  if (c5k0v7) {
    if (c5k0v7[Q[360005]]) {
      var p5gx7 = window[Q[360006]]['game_ver'][Q[360007]](new RegExp(/\./, 'g'), '_'),
          djacm0 = c5k0v7[Q[360005]],
          pw5gv = djacm0[Q[360008]](/(vvvvvvv\/vGAMEv.js:)[0-9]{1,60}(:)/g);if (pw5gv) for (var l6yu8z = 0x0; l6yu8z < pw5gv[Q[360009]]; l6yu8z++) {
        if (pw5gv[l6yu8z] && pw5gv[l6yu8z][Q[360009]] > 0x0) {
          var tn4$3 = parseInt(pw5gv[l6yu8z][Q[360007]](Q[360010], '')[Q[360007]](':', ''));djacm0 = djacm0[Q[360007]](pw5gv[l6yu8z], pw5gv[l6yu8z][Q[360007]](':' + tn4$3 + ':', ':' + (tn4$3 - 0x2) + ':'));
        }
      }djacm0 = djacm0[Q[360007]](new RegExp(Q[360011], 'g'), Q[360012] + p5gx7 + Q[360013]), djacm0 = djacm0[Q[360007]](new RegExp(Q[360014], 'g'), Q[360012] + p5gx7 + Q[360013]), c5k0v7[Q[360005]] = djacm0;
    }var gexqp = { 'id': window['_vKD'][Q[360015]], 'role': window['_vKD'][Q[360016]], 'level': window['_vKD'][Q[360017]], 'user': window['_vKD'][Q[360018]], 'version': window['_vKD'][Q[360019]], 'cdn': window['_vKD'][Q[360020]], 'pkgName': window['_vKD'][Q[360021]], 'gamever': window[Q[360006]]['game_ver'], 'serverid': window['_vKD'][Q[360022]] ? window['_vKD'][Q[360022]][Q[360023]] : 0x0, 'systemInfo': window[Q[360024]], 'error': Q[360025], 'stack': c5k0v7 ? c5k0v7[Q[360005]] : '' },
        sf9io$ = JSON[Q[360026]](gexqp);console[Q[360027]](Q[360028] + sf9io$), (!window[Q[360003]] || window[Q[360003]] != gexqp[Q[360027]]) && (window[Q[360003]] = gexqp[Q[360027]], window['_vOK'](gexqp));
  }
});import 'vvfvv.js';import 'vv11vv.js';window[Q[360029]] = require(Q[360030]);import 'vINDvv.js';import 'vvIB1vv.js';import 'vvMtadvv.js';import 'vvINIvv.js';console[Q[360001]](Q[360031]), console[Q[360001]](Q[360032]), _vOK$D({ 'title': Q[360033] });var v_yh162 = { '_v6ODK$': !![] };new window[Q[360034]](v_yh162), window[Q[360034]][Q[360035]]['_v6$KDO']();if (window['_v6OKD$']) clearInterval(window['_v6OKD$']);window['_v6OKD$'] = null, window['_v6$DOK'] = function (k5c0, pxqgw) {
  if (!k5c0 || !pxqgw) return 0x0;k5c0 = k5c0[Q[360036]]('.'), pxqgw = pxqgw[Q[360036]]('.');const mckjd = Math[Q[360037]](k5c0[Q[360009]], pxqgw[Q[360009]]);while (k5c0[Q[360009]] < mckjd) {
    k5c0[Q[360038]]('0');
  }while (pxqgw[Q[360009]] < mckjd) {
    pxqgw[Q[360038]]('0');
  }for (var c7mk0 = 0x0; c7mk0 < mckjd; c7mk0++) {
    const bqeu8l = parseInt(k5c0[c7mk0]),
          kc7d = parseInt(pxqgw[c7mk0]);if (bqeu8l > kc7d) return 0x1;else {
      if (bqeu8l < kc7d) return -0x1;
    }
  }return 0x0;
}, window[Q[360039]] = wx[Q[360040]]()[Q[360039]], console[Q[360041]](Q[360042] + window[Q[360039]]);var vdc0jkm = wx[Q[360043]]();vdc0jkm[Q[360044]](function (k50c7m) {
  console[Q[360041]](Q[360045] + k50c7m[Q[360046]]);
}), vdc0jkm[Q[360047]](function () {
  wx[Q[360048]]({ 'title': Q[360049], 'content': Q[360050], 'showCancel': ![], 'success': function (y12t) {
      vdc0jkm[Q[360051]]();
    } });
}), vdc0jkm[Q[360052]](function () {
  console[Q[360041]](Q[360053]);
}), window['_v6$DKO'] = function () {
  console[Q[360041]](Q[360054]);var jdacm = wx[Q[360055]]({ 'name': Q[360056], 'success': function (pgv5w) {
      console[Q[360041]](Q[360057]), console[Q[360041]](pgv5w), pgv5w && pgv5w[Q[360058]] == Q[360059] ? (window['_vD$'] = !![], window['_vD$KO'](), window['_vDKO$']()) : setTimeout(function () {
        window['_v6$DKO']();
      }, 0x1f4);
    }, 'fail': function (ebq8wu) {
      console[Q[360041]](Q[360060]), console[Q[360041]](ebq8wu), setTimeout(function () {
        window['_v6$DKO']();
      }, 0x1f4);
    } });jdacm && jdacm[Q[360061]](kcd => {});
}, window['_v6KOD$'] = function () {
  console[Q[360041]](Q[360062]);var n34t = wx[Q[360055]]({ 'name': Q[360063], 'success': function (pk70v) {
      console[Q[360041]](Q[360064]), console[Q[360041]](pk70v), pk70v && pk70v[Q[360058]] == Q[360059] ? (window['_vK$D'] = !![], window['_vD$KO'](), window['_vDKO$']()) : setTimeout(function () {
        window['_v6KOD$']();
      }, 0x1f4);
    }, 'fail': function (u8z6bl) {
      console[Q[360041]](Q[360065]), console[Q[360041]](u8z6bl), setTimeout(function () {
        window['_v6KOD$']();
      }, 0x1f4);
    } });n34t && n34t[Q[360061]](fosi$ => {});
}, window[Q[360066]] = function () {
  window['_v6$DOK'](window[Q[360039]], Q[360067]) >= 0x0 ? (console[Q[360041]](Q[360068] + window[Q[360039]] + Q[360069]), window['_vKO'](), window['_v6$DKO'](), window['_v6KOD$']()) : (window['_vKDO'](Q[360070], window[Q[360039]]), wx[Q[360048]]({ 'title': Q[360071], 'content': Q[360072] }));
}, window[Q[360024]] = '', wx[Q[360073]]({ 'success'(r9sf) {
    window[Q[360024]] = Q[360074] + r9sf[Q[360075]] + Q[360076] + r9sf[Q[360077]] + Q[360078] + r9sf[Q[360079]] + Q[360080] + r9sf[Q[360081]] + Q[360082] + r9sf[Q[360083]] + Q[360084] + r9sf[Q[360039]] + Q[360085] + r9sf[Q[360086]], console[Q[360041]](window[Q[360024]]), console[Q[360041]](Q[360087] + r9sf[Q[360088]] + Q[360089] + r9sf[Q[360090]] + Q[360091] + r9sf[Q[360092]] + Q[360093] + r9sf[Q[360094]] + Q[360095] + r9sf[Q[360096]] + Q[360097] + r9sf[Q[360098]] + Q[360099] + (r9sf[Q[360100]] ? r9sf[Q[360100]][Q[360101]] + ',' + r9sf[Q[360100]][Q[360102]] + ',' + r9sf[Q[360100]][Q[360103]] + ',' + r9sf[Q[360100]][Q[360104]] : ''));var gpxqwv = r9sf[Q[360081]] ? r9sf[Q[360081]][Q[360105]]() : '',
        ck7m0 = r9sf[Q[360077]] ? r9sf[Q[360077]][Q[360105]]()[Q[360007]]('\x20', '') : '';window['_vKD'][Q[360106]] = gpxqwv[Q[360107]](Q[360108]) != -0x1, window['_vKD'][Q[360109]] = gpxqwv[Q[360107]](Q[360110]) != -0x1, window['_vKD'][Q[360111]] = gpxqwv[Q[360107]](Q[360108]) != -0x1 || gpxqwv[Q[360107]](Q[360110]) != -0x1, window['_vKD'][Q[360112]] = gpxqwv[Q[360107]](Q[360113]) != -0x1 || gpxqwv[Q[360107]](Q[360114]) != -0x1, window['_vKD'][Q[360115]] = r9sf[Q[360083]] ? r9sf[Q[360083]][Q[360105]]() : '', window['_vKD']['_v6O$DK'] = ![], window['_vKD']['_v6OK$D'] = 0x2;if (gpxqwv[Q[360107]](Q[360110]) != -0x1) {
      if (r9sf[Q[360086]] >= 0x18) window['_vKD']['_v6OK$D'] = 0x3;else window['_vKD']['_v6OK$D'] = 0x2;
    } else {
      if (gpxqwv[Q[360107]](Q[360108]) != -0x1) {
        if (r9sf[Q[360086]] && r9sf[Q[360086]] >= 0x14) window['_vKD']['_v6OK$D'] = 0x3;else {
          if (ck7m0[Q[360107]](Q[360116]) != -0x1 || ck7m0[Q[360107]](Q[360117]) != -0x1 || ck7m0[Q[360107]](Q[360118]) != -0x1 || ck7m0[Q[360107]](Q[360119]) != -0x1 || ck7m0[Q[360107]](Q[360120]) != -0x1) window['_vKD']['_v6OK$D'] = 0x2;else window['_vKD']['_v6OK$D'] = 0x3;
        }
      } else window['_vKD']['_v6OK$D'] = 0x2;
    }console[Q[360041]](Q[360121] + window['_vKD']['_v6O$DK'] + Q[360122] + window['_vKD']['_v6OK$D']);
  } }), wx[Q[360123]]({ 'success': function (qu8ew) {
    console[Q[360041]](Q[360124] + qu8ew[Q[360125]] + Q[360126] + qu8ew[Q[360127]]);
  } }), wx[Q[360128]]({ 'success': function (ckdm7) {
    console[Q[360041]](Q[360129] + ckdm7[Q[360130]]);
  } }), wx[Q[360131]]({ 'keepScreenOn': !![] }), wx[Q[360132]](function ($s9if) {
  console[Q[360041]](Q[360129] + $s9if[Q[360130]] + Q[360133] + $s9if[Q[360134]]);
}), wx[Q[360135]](function (vxpg57) {
  window['_v$O'] = vxpg57, window['_vDO$'] && window['_v$O'] && (console[Q[360001]](Q[360136] + window['_v$O'][Q[360137]]), window['_vDO$'](window['_v$O']), window['_v$O'] = null);
}), window[Q[360138]] = 0x0, window['_v6K$DO'] = 0x0, window[Q[360139]] = null, wx[Q[360140]](function () {
  window['_v6K$DO']++;var v5pg7x = Date[Q[360141]]();(window[Q[360138]] == 0x0 || v5pg7x - window[Q[360138]] > 0x1d4c0) && (console[Q[360142]](Q[360143]), wx[Q[360144]]());if (window['_v6K$DO'] >= 0x2) {
    window['_v6K$DO'] = 0x0, console[Q[360027]](Q[360145]), wx[Q[360146]]('0', 0x1);if (window['_vKD'] && window['_vKD'][Q[360106]]) window['_vKDO'](Q[360147], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});