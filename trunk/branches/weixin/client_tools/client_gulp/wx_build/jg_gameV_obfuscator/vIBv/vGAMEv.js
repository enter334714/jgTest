var Q = wx.$v;
console[Q[360001]](Q[360002]), window[Q[360003]], wx[Q[360004]](function (gpxqwv) {
  if (gpxqwv) {
    if (gpxqwv[Q[360005]]) {
      var _hyt12 = window[Q[360006]]['game_ver'][Q[360007]](new RegExp(/\./, 'g'), '_'),
          n342ot = gpxqwv[Q[360005]],
          nt2 = n342ot[Q[360008]](/(vvvvvvv\/vGAMEv.js:)[0-9]{1,60}(:)/g);if (nt2) for (var _2n1h = 0x0; _2n1h < nt2[Q[360009]]; _2n1h++) {
        if (nt2[_2n1h] && nt2[_2n1h][Q[360009]] > 0x0) {
          var x7v5k = parseInt(nt2[_2n1h][Q[360007]](Q[360010], '')[Q[360007]](':', ''));n342ot = n342ot[Q[360007]](nt2[_2n1h], nt2[_2n1h][Q[360007]](':' + x7v5k + ':', ':' + (x7v5k - 0x2) + ':'));
        }
      }n342ot = n342ot[Q[360007]](new RegExp(Q[360011], 'g'), Q[360012] + _hyt12 + Q[360013]), n342ot = n342ot[Q[360007]](new RegExp(Q[360014], 'g'), Q[360012] + _hyt12 + Q[360013]), gpxqwv[Q[360005]] = n342ot;
    }var _16hy2 = { 'id': window['_vKD'][Q[360015]], 'role': window['_vKD'][Q[360016]], 'level': window['_vKD'][Q[360017]], 'user': window['_vKD'][Q[360018]], 'version': window['_vKD'][Q[360019]], 'cdn': window['_vKD'][Q[360020]], 'pkgName': window['_vKD'][Q[360021]], 'gamever': window[Q[360006]]['game_ver'], 'serverid': window['_vKD'][Q[360022]] ? window['_vKD'][Q[360022]][Q[360023]] : 0x0, 'systemInfo': window[Q[360024]], 'error': Q[360025], 'stack': gpxqwv ? gpxqwv[Q[360005]] : '' },
        ckm0d7 = JSON[Q[360026]](_16hy2);console[Q[360027]](Q[360028] + ckm0d7), (!window[Q[360003]] || window[Q[360003]] != _16hy2[Q[360027]]) && (window[Q[360003]] = _16hy2[Q[360027]], window['_vOK'](_16hy2));
  }
});import 'vvfvv.js';import 'vv11vv.js';window[Q[360029]] = require(Q[360030]);import 'vINDvv.js';import 'vvIB1vv.js';import 'vvMtadvv.js';import 'vvINIvv.js';console[Q[360001]](Q[360031]), console[Q[360001]](Q[360032]), _vOK$D({ 'title': Q[360033] });var vcm0jk = { '_v6ODK$': !![] };new window[Q[360034]](vcm0jk), window[Q[360034]][Q[360035]]['_v6$KDO']();if (window['_v6OKD$']) clearInterval(window['_v6OKD$']);window['_v6OKD$'] = null, window['_v6$DOK'] = function ($oifs, o4n3t2) {
  if (!$oifs || !o4n3t2) return 0x0;$oifs = $oifs[Q[360036]]('.'), o4n3t2 = o4n3t2[Q[360036]]('.');const x7v5 = Math[Q[360037]]($oifs[Q[360009]], o4n3t2[Q[360009]]);while ($oifs[Q[360009]] < x7v5) {
    $oifs[Q[360038]]('0');
  }while (o4n3t2[Q[360009]] < x7v5) {
    o4n3t2[Q[360038]]('0');
  }for (var h2yt_1 = 0x0; h2yt_1 < x7v5; h2yt_1++) {
    const yz6l8 = parseInt($oifs[h2yt_1]),
          huly6z = parseInt(o4n3t2[h2yt_1]);if (yz6l8 > huly6z) return 0x1;else {
      if (yz6l8 < huly6z) return -0x1;
    }
  }return 0x0;
}, window[Q[360039]] = wx[Q[360040]]()[Q[360039]], console[Q[360041]](Q[360042] + window[Q[360039]]);var vy6ul8 = wx[Q[360043]]();vy6ul8[Q[360044]](function (x5pk7) {
  console[Q[360041]](Q[360045] + x5pk7[Q[360046]]);
}), vy6ul8[Q[360047]](function () {
  wx[Q[360048]]({ 'title': Q[360049], 'content': Q[360050], 'showCancel': ![], 'success': function (gbxwe) {
      vy6ul8[Q[360051]]();
    } });
}), vy6ul8[Q[360052]](function () {
  console[Q[360041]](Q[360053]);
}), window['_v6$DKO'] = function () {
  console[Q[360041]](Q[360054]);var i4sfo$ = wx[Q[360055]]({ 'name': Q[360056], 'success': function (tn324o) {
      console[Q[360041]](Q[360057]), console[Q[360041]](tn324o), tn324o && tn324o[Q[360058]] == Q[360059] ? (window['_vD$'] = !![], window['_vD$KO'](), window['_vDKO$']()) : setTimeout(function () {
        window['_v6$DKO']();
      }, 0x1f4);
    }, 'fail': function (ewu8) {
      console[Q[360041]](Q[360060]), console[Q[360041]](ewu8), setTimeout(function () {
        window['_v6$DKO']();
      }, 0x1f4);
    } });i4sfo$ && i4sfo$[Q[360061]](bqe8 => {});
}, window['_v6KOD$'] = function () {
  console[Q[360041]](Q[360062]);var mc7k = wx[Q[360055]]({ 'name': Q[360063], 'success': function (mc5) {
      console[Q[360041]](Q[360064]), console[Q[360041]](mc5), mc5 && mc5[Q[360058]] == Q[360059] ? (window['_vK$D'] = !![], window['_vD$KO'](), window['_vDKO$']()) : setTimeout(function () {
        window['_v6KOD$']();
      }, 0x1f4);
    }, 'fail': function (jc0kdm) {
      console[Q[360041]](Q[360065]), console[Q[360041]](jc0kdm), setTimeout(function () {
        window['_v6KOD$']();
      }, 0x1f4);
    } });mc7k && mc7k[Q[360061]](p05k7v => {});
}, window[Q[360066]] = function () {
  window['_v6$DOK'](window[Q[360039]], Q[360067]) >= 0x0 ? (console[Q[360041]](Q[360068] + window[Q[360039]] + Q[360069]), window['_vKO'](), window['_v6$DKO'](), window['_v6KOD$']()) : (window['_vKDO'](Q[360070], window[Q[360039]]), wx[Q[360048]]({ 'title': Q[360071], 'content': Q[360072] }));
}, window[Q[360024]] = '', wx[Q[360073]]({ 'success'(qexgbw) {
    window[Q[360024]] = Q[360074] + qexgbw[Q[360075]] + Q[360076] + qexgbw[Q[360077]] + Q[360078] + qexgbw[Q[360079]] + Q[360080] + qexgbw[Q[360081]] + Q[360082] + qexgbw[Q[360083]] + Q[360084] + qexgbw[Q[360039]] + Q[360085] + qexgbw[Q[360086]], console[Q[360041]](window[Q[360024]]), console[Q[360041]](Q[360087] + qexgbw[Q[360088]] + Q[360089] + qexgbw[Q[360090]] + Q[360091] + qexgbw[Q[360092]] + Q[360093] + qexgbw[Q[360094]] + Q[360095] + qexgbw[Q[360096]] + Q[360097] + qexgbw[Q[360098]] + Q[360099] + (qexgbw[Q[360100]] ? qexgbw[Q[360100]][Q[360101]] + ',' + qexgbw[Q[360100]][Q[360102]] + ',' + qexgbw[Q[360100]][Q[360103]] + ',' + qexgbw[Q[360100]][Q[360104]] : ''));var xqwge = qexgbw[Q[360081]] ? qexgbw[Q[360081]][Q[360105]]() : '',
        vp07k = qexgbw[Q[360077]] ? qexgbw[Q[360077]][Q[360105]]()[Q[360007]]('\x20', '') : '';window['_vKD'][Q[360106]] = xqwge[Q[360107]](Q[360108]) != -0x1, window['_vKD'][Q[360109]] = xqwge[Q[360107]](Q[360110]) != -0x1, window['_vKD'][Q[360111]] = xqwge[Q[360107]](Q[360108]) != -0x1 || xqwge[Q[360107]](Q[360110]) != -0x1, window['_vKD'][Q[360112]] = xqwge[Q[360107]](Q[360113]) != -0x1 || xqwge[Q[360107]](Q[360114]) != -0x1, window['_vKD'][Q[360115]] = qexgbw[Q[360083]] ? qexgbw[Q[360083]][Q[360105]]() : '', window['_vKD']['_v6O$DK'] = ![], window['_vKD']['_v6OK$D'] = 0x2;if (xqwge[Q[360107]](Q[360110]) != -0x1) {
      if (qexgbw[Q[360086]] >= 0x18) window['_vKD']['_v6OK$D'] = 0x3;else window['_vKD']['_v6OK$D'] = 0x2;
    } else {
      if (xqwge[Q[360107]](Q[360108]) != -0x1) {
        if (qexgbw[Q[360086]] && qexgbw[Q[360086]] >= 0x14) window['_vKD']['_v6OK$D'] = 0x3;else {
          if (vp07k[Q[360107]](Q[360116]) != -0x1 || vp07k[Q[360107]](Q[360117]) != -0x1 || vp07k[Q[360107]](Q[360118]) != -0x1 || vp07k[Q[360107]](Q[360119]) != -0x1 || vp07k[Q[360107]](Q[360120]) != -0x1) window['_vKD']['_v6OK$D'] = 0x2;else window['_vKD']['_v6OK$D'] = 0x3;
        }
      } else window['_vKD']['_v6OK$D'] = 0x2;
    }console[Q[360041]](Q[360121] + window['_vKD']['_v6O$DK'] + Q[360122] + window['_vKD']['_v6OK$D']);
  } }), wx[Q[360123]]({ 'success': function (qxwgpv) {
    console[Q[360041]](Q[360124] + qxwgpv[Q[360125]] + Q[360126] + qxwgpv[Q[360127]]);
  } }), wx[Q[360128]]({ 'success': function (ueqwb8) {
    console[Q[360041]](Q[360129] + ueqwb8[Q[360130]]);
  } }), wx[Q[360131]]({ 'keepScreenOn': !![] }), wx[Q[360132]](function (pg5) {
  console[Q[360041]](Q[360129] + pg5[Q[360130]] + Q[360133] + pg5[Q[360134]]);
}), wx[Q[360135]](function (u68zly) {
  window['_v$O'] = u68zly, window['_vDO$'] && window['_v$O'] && (console[Q[360001]](Q[360136] + window['_v$O'][Q[360137]]), window['_vDO$'](window['_v$O']), window['_v$O'] = null);
}), window[Q[360138]] = 0x0, window['_v6K$DO'] = 0x0, window[Q[360139]] = null, wx[Q[360140]](function () {
  window['_v6K$DO']++;var i4osf$ = Date[Q[360141]]();(window[Q[360138]] == 0x0 || i4osf$ - window[Q[360138]] > 0x1d4c0) && (console[Q[360142]](Q[360143]), wx[Q[360144]]());if (window['_v6K$DO'] >= 0x2) {
    window['_v6K$DO'] = 0x0, console[Q[360027]](Q[360145]), wx[Q[360146]]('0', 0x1);if (window['_vKD'] && window['_vKD'][Q[360106]]) window['_vKDO'](Q[360147], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});