var Q = wx.$v;
console[Q[360001]](Q[360002]), window[Q[360003]], wx[Q[360004]](function (equw8b) {
  if (equw8b) {
    if (equw8b[Q[360005]]) {
      var c0dmaj = window[Q[360006]]['game_ver'][Q[360007]](new RegExp(/\./, 'g'), '_'),
          cm0kj = equw8b[Q[360005]],
          c750k = cm0kj[Q[360008]](/(vvvvvvv\/vGAMEv.js:)[0-9]{1,60}(:)/g);if (c750k) for (var k50mc = 0x0; k50mc < c750k[Q[360009]]; k50mc++) {
        if (c750k[k50mc] && c750k[k50mc][Q[360009]] > 0x0) {
          var t43n = parseInt(c750k[k50mc][Q[360007]](Q[360010], '')[Q[360007]](':', ''));cm0kj = cm0kj[Q[360007]](c750k[k50mc], c750k[k50mc][Q[360007]](':' + t43n + ':', ':' + (t43n - 0x2) + ':'));
        }
      }cm0kj = cm0kj[Q[360007]](new RegExp(Q[360011], 'g'), Q[360012] + c0dmaj + Q[360013]), cm0kj = cm0kj[Q[360007]](new RegExp(Q[360014], 'g'), Q[360012] + c0dmaj + Q[360013]), equw8b[Q[360005]] = cm0kj;
    }var w8qeb = { 'id': window['_vKD'][Q[360015]], 'role': window['_vKD'][Q[360016]], 'level': window['_vKD'][Q[360017]], 'user': window['_vKD'][Q[360018]], 'version': window['_vKD'][Q[360019]], 'gamever': window[Q[360006]]['game_ver'], 'cdn': window['_vKD'][Q[360020]], 'serverid': window['_vKD'][Q[360021]] ? window['_vKD'][Q[360021]][Q[360022]] : 0x0, 'systemInfo': window[Q[360023]], 'error': Q[360024], 'stack': equw8b ? equw8b[Q[360005]] : '' },
        _2ty = JSON[Q[360025]](w8qeb);console[Q[360026]](Q[360027] + _2ty), (!window[Q[360003]] || window[Q[360003]] != w8qeb[Q[360026]]) && (window[Q[360003]] = w8qeb[Q[360026]], window['_vOK'](w8qeb));
  }
});import 'vvfvv.js';import 'vv11vv.js';window[Q[360028]] = require(Q[360029]);import 'vINDvv.js';import 'vvIB1vv.js';import 'vvMtadvv.js';import 'vvINIvv.js';console[Q[360001]](Q[360030]), console[Q[360001]](Q[360031]), _vOK$D({ 'title': Q[360032] });var vbgweqx = { '_v6$OKD': !![] };new window[Q[360033]](vbgweqx), window[Q[360033]][Q[360034]]['_v6$DOK']();if (window['_v6OD$K']) clearInterval(window['_v6OD$K']);window['_v6OD$K'] = null, window['_v6$DKO'] = function (y1h_6, z8ul) {
  if (!y1h_6 || !z8ul) return 0x0;y1h_6 = y1h_6[Q[360035]]('.'), z8ul = z8ul[Q[360035]]('.');const bgexw = Math[Q[360036]](y1h_6[Q[360009]], z8ul[Q[360009]]);while (y1h_6[Q[360009]] < bgexw) {
    y1h_6[Q[360037]]('0');
  }while (z8ul[Q[360009]] < bgexw) {
    z8ul[Q[360037]]('0');
  }for (var h6uyz = 0x0; h6uyz < bgexw; h6uyz++) {
    const $oi9sf = parseInt(y1h_6[h6uyz]),
          b8equw = parseInt(z8ul[h6uyz]);if ($oi9sf > b8equw) return 0x1;else {
      if ($oi9sf < b8equw) return -0x1;
    }
  }return 0x0;
}, window[Q[360038]] = wx[Q[360039]]()[Q[360038]], console[Q[360040]](Q[360041] + window[Q[360038]]);var vhz6y_ = wx[Q[360042]]();vhz6y_[Q[360043]](function (rf$s) {
  console[Q[360040]](Q[360044] + rf$s[Q[360045]]);
}), vhz6y_[Q[360046]](function () {
  wx[Q[360047]]({ 'title': Q[360048], 'content': Q[360049], 'showCancel': ![], 'success': function (jadm0) {
      vhz6y_[Q[360050]]();
    } });
}), vhz6y_[Q[360051]](function () {
  console[Q[360040]](Q[360052]);
}), window['_v6KO$D'] = function () {
  console[Q[360040]](Q[360053]);var qgbxwe = wx[Q[360054]]({ 'name': Q[360055], 'success': function (pvxwg) {
      console[Q[360040]](Q[360056]), console[Q[360040]](pvxwg), pvxwg && pvxwg[Q[360057]] == Q[360058] ? (window['_vD$'] = !![], window['_vDKO$'](), window['_vDK$O']()) : setTimeout(function () {
        window['_v6KO$D']();
      }, 0x1f4);
    }, 'fail': function (gvqxw) {
      console[Q[360040]](Q[360059]), console[Q[360040]](gvqxw), setTimeout(function () {
        window['_v6KO$D']();
      }, 0x1f4);
    } });qgbxwe && qgbxwe[Q[360060]](md0kc => {});
}, window['_v6K$OD'] = function () {
  console[Q[360040]](Q[360061]);var i$of4 = wx[Q[360054]]({ 'name': Q[360062], 'success': function (yl61h) {
      console[Q[360040]](Q[360063]), console[Q[360040]](yl61h), yl61h && yl61h[Q[360057]] == Q[360058] ? (window['_vK$D'] = !![], window['_vDKO$'](), window['_vDK$O']()) : setTimeout(function () {
        window['_v6K$OD']();
      }, 0x1f4);
    }, 'fail': function (zl8ebu) {
      console[Q[360040]](Q[360064]), console[Q[360040]](zl8ebu), setTimeout(function () {
        window['_v6K$OD']();
      }, 0x1f4);
    } });i$of4 && i$of4[Q[360060]](zeb8ul => {});
}, window[Q[360065]] = function () {
  window['_v6$DKO'](window[Q[360038]], Q[360066]) >= 0x0 ? (console[Q[360040]](Q[360067] + window[Q[360038]] + Q[360068]), window['_vKO'](), window['_v6KO$D'](), window['_v6K$OD']()) : (window['_vKDO'](Q[360069], window[Q[360038]]), wx[Q[360047]]({ 'title': Q[360070], 'content': Q[360071] }));
}, window[Q[360023]] = '', wx[Q[360072]]({ 'success'(o$34n) {
    window[Q[360023]] = Q[360073] + o$34n[Q[360074]] + Q[360075] + o$34n[Q[360076]] + Q[360077] + o$34n[Q[360078]] + Q[360079] + o$34n[Q[360080]] + Q[360081] + o$34n[Q[360082]] + Q[360083] + o$34n[Q[360038]] + Q[360084] + o$34n[Q[360085]], console[Q[360040]](window[Q[360023]]), console[Q[360040]](Q[360086] + o$34n[Q[360087]] + Q[360088] + o$34n[Q[360089]] + Q[360090] + o$34n[Q[360091]] + Q[360092] + o$34n[Q[360093]] + Q[360094] + o$34n[Q[360095]] + Q[360096] + o$34n[Q[360097]] + Q[360098] + (o$34n[Q[360099]] ? o$34n[Q[360099]][Q[360100]] + ',' + o$34n[Q[360099]][Q[360101]] + ',' + o$34n[Q[360099]][Q[360102]] + ',' + o$34n[Q[360099]][Q[360103]] : ''));var cvk057 = o$34n[Q[360080]] ? o$34n[Q[360080]][Q[360104]]() : '',
        zy_1 = o$34n[Q[360076]] ? o$34n[Q[360076]][Q[360104]]()[Q[360007]]('\x20', '') : '';window['_vKD'][Q[360105]] = cvk057[Q[360106]](Q[360107]) != -0x1, window['_vKD'][Q[360108]] = cvk057[Q[360106]](Q[360109]) != -0x1, window['_vKD'][Q[360110]] = cvk057[Q[360106]](Q[360107]) != -0x1 || cvk057[Q[360106]](Q[360109]) != -0x1, window['_vKD'][Q[360111]] = cvk057[Q[360106]](Q[360112]) != -0x1 || cvk057[Q[360106]](Q[360113]) != -0x1, window['_vKD'][Q[360114]] = o$34n[Q[360082]] ? o$34n[Q[360082]][Q[360104]]() : '', window['_vKD']['_v6OK$D'] = ![], window['_vKD']['_v6OKD$'] = 0x2;if (cvk057[Q[360106]](Q[360109]) != -0x1) {
      if (o$34n[Q[360085]] >= 0x18) window['_vKD']['_v6OKD$'] = 0x3;else window['_vKD']['_v6OKD$'] = 0x2;
    } else {
      if (cvk057[Q[360106]](Q[360107]) != -0x1) {
        if (o$34n[Q[360085]] && o$34n[Q[360085]] >= 0x14) window['_vKD']['_v6OKD$'] = 0x3;else {
          if (zy_1[Q[360106]](Q[360115]) != -0x1 || zy_1[Q[360106]](Q[360116]) != -0x1 || zy_1[Q[360106]](Q[360117]) != -0x1 || zy_1[Q[360106]](Q[360118]) != -0x1 || zy_1[Q[360106]](Q[360119]) != -0x1) window['_vKD']['_v6OKD$'] = 0x2;else window['_vKD']['_v6OKD$'] = 0x3;
        }
      } else window['_vKD']['_v6OKD$'] = 0x2;
    }console[Q[360040]](Q[360120] + window['_vKD']['_v6OK$D'] + Q[360121] + window['_vKD']['_v6OKD$']);
  } }), wx[Q[360122]]({ 'success': function (sifo4) {
    console[Q[360040]](Q[360123] + sifo4[Q[360124]] + Q[360125] + sifo4[Q[360126]]);
  } }), wx[Q[360127]]({ 'success': function (uqeb8l) {
    console[Q[360040]](Q[360128] + uqeb8l[Q[360129]]);
  } }), wx[Q[360130]]({ 'keepScreenOn': !![] }), wx[Q[360131]](function (n2o43t) {
  console[Q[360040]](Q[360128] + n2o43t[Q[360129]] + Q[360132] + n2o43t[Q[360133]]);
}), wx[Q[360134]](function (gwbq) {
  window['_vDO$'] = gwbq, window['_vD$O'] && window['_vDO$'] && (console[Q[360001]](Q[360135] + window['_vDO$'][Q[360136]]), window['_vD$O'](window['_vDO$']), window['_vDO$'] = null);
}), window['_v6KDO$'] = 0x0, window[Q[360137]] = null, wx[Q[360138]](function () {
  window['_v6KDO$']++, wx[Q[360139]]();if (window['_v6KDO$'] >= 0x2) {
    window['_v6KDO$'] = 0x0, console[Q[360026]](Q[360140]), wx[Q[360141]]('0', 0x1);if (window['_vKD'] && window['_vKD'][Q[360105]]) window['_vKDO'](Q[360142], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});