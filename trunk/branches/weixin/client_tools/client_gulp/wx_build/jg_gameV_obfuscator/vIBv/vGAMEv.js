var Q = wx.$v;
console[Q[360001]](Q[360002]), window[Q[360003]], wx[Q[360004]](function (lb347) {
  if (lb347) {
    if (lb347[Q[360005]]) {
      var dvkxw = window[Q[360006]]['game_ver'][Q[360007]](new RegExp(/\./, 'g'), '_'),
          s7l3b9 = lb347[Q[360005]],
          $vfk5w = s7l3b9[Q[360008]](/(vvvvvvv\/vGAMEv.js:)[0-9]{1,60}(:)/g);if ($vfk5w) for (var u1i_ = 0x0; u1i_ < $vfk5w[Q[360009]]; u1i_++) {
        if ($vfk5w[u1i_] && $vfk5w[u1i_][Q[360009]] > 0x0) {
          var tm82j = parseInt($vfk5w[u1i_][Q[360007]](Q[360010], '')[Q[360007]](':', ''));s7l3b9 = s7l3b9[Q[360007]]($vfk5w[u1i_], $vfk5w[u1i_][Q[360007]](':' + tm82j + ':', ':' + (tm82j - 0x2) + ':'));
        }
      }s7l3b9 = s7l3b9[Q[360007]](new RegExp(Q[360011], 'g'), Q[360012] + dvkxw + Q[360013]), s7l3b9 = s7l3b9[Q[360007]](new RegExp(Q[360014], 'g'), Q[360012] + dvkxw + Q[360013]), lb347[Q[360005]] = s7l3b9;
    }var bz46 = { 'id': window['_vGU'][Q[360015]], 'role': window['_vGU'][Q[360016]], 'level': window['_vGU'][Q[360017]], 'user': window['_vGU'][Q[360018]], 'version': window['_vGU'][Q[360019]], 'gamever': window[Q[360006]]['game_ver'], 'cdn': window['_vGU'][Q[360020]], 'serverid': window['_vGU'][Q[360021]] ? window['_vGU'][Q[360021]][Q[360022]] : 0x0, 'systemInfo': window[Q[360023]], 'error': Q[360024], 'stack': lb347 ? lb347[Q[360005]] : '' },
        iurn0z = JSON[Q[360025]](bz46);console[Q[360026]](Q[360027] + iurn0z), (!window[Q[360003]] || window[Q[360003]] != bz46[Q[360026]]) && (window[Q[360003]] = bz46[Q[360026]], window['_vQG'](bz46));
  }
});import 'vvfvv.js';import 'vv11vv.js';window[Q[360028]] = require(Q[360029]);import 'vINDvv.js';import 'vvIB1vv.js';import 'vvMtadvv.js';import 'vvINIvv.js';console[Q[360001]](Q[360030]), console[Q[360001]](Q[360031]), _vQGCU({ 'title': Q[360032] });var vcms3 = { '_vNCQGU': !![] };new window[Q[360033]](vcms3), window[Q[360033]][Q[360034]]['_vNCUQG']();if (window['_vNQUCG']) clearInterval(window['_vNQUCG']);window['_vNQUCG'] = null, window['_vNCUGQ'] = function (qe_0i, $kfeq5) {
  if (!qe_0i || !$kfeq5) return 0x0;qe_0i = qe_0i[Q[360035]]('.'), $kfeq5 = $kfeq5[Q[360035]]('.');const auz6r = Math[Q[360036]](qe_0i[Q[360009]], $kfeq5[Q[360009]]);while (qe_0i[Q[360009]] < auz6r) {
    qe_0i[Q[360037]]('0');
  }while ($kfeq5[Q[360009]] < auz6r) {
    $kfeq5[Q[360037]]('0');
  }for (var i1eq$_ = 0x0; i1eq$_ < auz6r; i1eq$_++) {
    const t8c2m = parseInt(qe_0i[i1eq$_]),
          mcs2t3 = parseInt($kfeq5[i1eq$_]);if (t8c2m > mcs2t3) return 0x1;else {
      if (t8c2m < mcs2t3) return -0x1;
    }
  }return 0x0;
}, window[Q[360038]] = wx[Q[360039]]()[Q[360038]], console[Q[360040]](Q[360041] + window[Q[360038]]);var vl6ab = wx[Q[360042]]();vl6ab[Q[360043]](function (w5$kfv) {
  console[Q[360040]](Q[360044] + w5$kfv[Q[360045]]);
}), vl6ab[Q[360046]](function () {
  wx[Q[360047]]({ 'title': Q[360048], 'content': Q[360049], 'showCancel': ![], 'success': function (jtscm) {
      vl6ab[Q[360050]]();
    } });
}), vl6ab[Q[360051]](function () {
  console[Q[360040]](Q[360052]);
}), window['_vNGQCU'] = function () {
  console[Q[360040]](Q[360053]);var zlb = wx[Q[360054]]({ 'name': Q[360055], 'success': function (wk5$fv) {
      console[Q[360040]](Q[360056]), console[Q[360040]](wk5$fv), wk5$fv && wk5$fv[Q[360057]] == Q[360058] ? (window['_vUC'] = !![], window['_vUGQC'](), window['_vUGCQ']()) : setTimeout(function () {
        window['_vNGQCU']();
      }, 0x1f4);
    }, 'fail': function (kfvw5$) {
      console[Q[360040]](Q[360059]), console[Q[360040]](kfvw5$), setTimeout(function () {
        window['_vNGQCU']();
      }, 0x1f4);
    } });zlb && zlb[Q[360060]](fe$q_ => {});
}, window['_vNGCQU'] = function () {
  console[Q[360040]](Q[360061]);var zr0iu = wx[Q[360054]]({ 'name': Q[360062], 'success': function (uni0rz) {
      console[Q[360040]](Q[360063]), console[Q[360040]](uni0rz), uni0rz && uni0rz[Q[360057]] == Q[360058] ? (window['_vGCU'] = !![], window['_vUGQC'](), window['_vUGCQ']()) : setTimeout(function () {
        window['_vNGCQU']();
      }, 0x1f4);
    }, 'fail': function (o8cyh) {
      console[Q[360040]](Q[360064]), console[Q[360040]](o8cyh), setTimeout(function () {
        window['_vNGCQU']();
      }, 0x1f4);
    } });zr0iu && zr0iu[Q[360060]](v$k5w => {});
}, window[Q[360065]] = function () {
  window['_vNCUGQ'](window[Q[360038]], Q[360066]) >= 0x0 ? (console[Q[360040]](Q[360067] + window[Q[360038]] + Q[360068]), window['_vGQ'](), window['_vNGQCU'](), window['_vNGCQU']()) : (window['_vGUQ'](Q[360069], window[Q[360038]]), wx[Q[360047]]({ 'title': Q[360070], 'content': Q[360071] }));
}, window[Q[360023]] = '', wx[Q[360072]]({ 'success'(l4b97a) {
    window[Q[360023]] = Q[360073] + l4b97a[Q[360074]] + Q[360075] + l4b97a[Q[360076]] + Q[360077] + l4b97a[Q[360078]] + Q[360079] + l4b97a[Q[360080]] + Q[360081] + l4b97a[Q[360082]] + Q[360083] + l4b97a[Q[360038]] + Q[360084] + l4b97a[Q[360085]], console[Q[360040]](window[Q[360023]]), console[Q[360040]](Q[360086] + l4b97a[Q[360087]] + Q[360088] + l4b97a[Q[360089]] + Q[360090] + l4b97a[Q[360091]] + Q[360092] + l4b97a[Q[360093]] + Q[360094] + l4b97a[Q[360095]] + Q[360096] + l4b97a[Q[360097]] + Q[360098] + (l4b97a[Q[360099]] ? l4b97a[Q[360099]][Q[360100]] + ',' + l4b97a[Q[360099]][Q[360101]] + ',' + l4b97a[Q[360099]][Q[360102]] + ',' + l4b97a[Q[360099]][Q[360103]] : ''));var iru1_ = l4b97a[Q[360080]] ? l4b97a[Q[360080]][Q[360104]]() : '',
        sm3 = l4b97a[Q[360076]] ? l4b97a[Q[360076]][Q[360104]]()[Q[360007]]('\x20', '') : '';window['_vGU'][Q[360105]] = iru1_[Q[360106]](Q[360107]) != -0x1, window['_vGU'][Q[360108]] = iru1_[Q[360106]](Q[360109]) != -0x1, window['_vGU'][Q[360110]] = iru1_[Q[360106]](Q[360107]) != -0x1 || iru1_[Q[360106]](Q[360109]) != -0x1, window['_vGU'][Q[360111]] = iru1_[Q[360106]](Q[360112]) != -0x1 || iru1_[Q[360106]](Q[360113]) != -0x1, window['_vGU'][Q[360114]] = l4b97a[Q[360082]] ? l4b97a[Q[360082]][Q[360104]]() : '', window['_vGU']['_vNQGCU'] = ![], window['_vGU']['_vNQGUC'] = 0x2;if (iru1_[Q[360106]](Q[360109]) != -0x1) {
      if (l4b97a[Q[360085]] >= 0x18) window['_vGU']['_vNQGUC'] = 0x3;else window['_vGU']['_vNQGUC'] = 0x2;
    } else {
      if (iru1_[Q[360106]](Q[360107]) != -0x1) {
        if (l4b97a[Q[360085]] && l4b97a[Q[360085]] >= 0x14) window['_vGU']['_vNQGUC'] = 0x3;else {
          if (sm3[Q[360106]](Q[360115]) != -0x1 || sm3[Q[360106]](Q[360116]) != -0x1 || sm3[Q[360106]](Q[360117]) != -0x1 || sm3[Q[360106]](Q[360118]) != -0x1 || sm3[Q[360106]](Q[360119]) != -0x1) window['_vGU']['_vNQGUC'] = 0x2;else window['_vGU']['_vNQGUC'] = 0x3;
        }
      } else window['_vGU']['_vNQGUC'] = 0x2;
    }console[Q[360040]](Q[360120] + window['_vGU']['_vNQGCU'] + Q[360121] + window['_vGU']['_vNQGUC']);
  } }), wx[Q[360122]]({ 'success': function (cohy8j) {
    console[Q[360040]](Q[360123] + cohy8j[Q[360124]] + Q[360125] + cohy8j[Q[360126]]);
  } }), wx[Q[360127]]({ 'success': function (vkwd5f) {
    console[Q[360040]](Q[360128] + vkwd5f[Q[360129]]);
  } }), wx[Q[360130]]({ 'keepScreenOn': !![] }), wx[Q[360131]](function (e$1iq_) {
  console[Q[360040]](Q[360128] + e$1iq_[Q[360129]] + Q[360132] + e$1iq_[Q[360133]]);
}), wx[Q[360134]](function (b97a4) {
  window['_vUQC'] = b97a4, window['_vUCQ'] && window['_vUQC'] && (console[Q[360001]](Q[360135] + window['_vUQC'][Q[360136]]), window['_vUCQ'](window['_vUQC']), window['_vUQC'] = null);
}), window['_vNGUQC'] = 0x0, window[Q[360137]] = null, wx[Q[360138]](function () {
  window['_vNGUQC']++, wx[Q[360139]]();if (window['_vNGUQC'] >= 0x2) {
    window['_vNGUQC'] = 0x0, console[Q[360026]](Q[360140]), wx[Q[360141]]('0', 0x1);if (window['_vGU'] && window['_vGU'][Q[360105]]) window['_vGUQ'](Q[360142], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});