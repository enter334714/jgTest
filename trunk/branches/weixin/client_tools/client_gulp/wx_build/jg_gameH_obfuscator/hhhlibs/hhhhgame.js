var O = wx.$C;
console[O[0x4e]](O[0x75a1]), window[O[0x75a2]], wx[O[0x75a3]](function (eaib2) {
  if (eaib2) {
    if (eaib2[O[0x1234]]) {
      var u8$rz9 = window[O[0x22e]][O[0x75a4]][O[0x12e6]](new RegExp(/\./, 'g'), '_'),
          nyv = eaib2[O[0x1234]],
          wjh90d = nyv[O[0x3033]](/(hhhhhhhh\/hhhhgame.js:)[0-9]{1,60}(:)/g);if (wjh90d) for (var $8ruc = 0x0; $8ruc < wjh90d[O[0xd]]; $8ruc++) {
        if (wjh90d[$8ruc] && wjh90d[$8ruc][O[0xd]] > 0x0) {
          var v4_f3 = parseInt(wjh90d[$8ruc][O[0x12e6]](O[0x75a5], '')[O[0x12e6]](':', ''));nyv = nyv[O[0x12e6]](wjh90d[$8ruc], wjh90d[$8ruc][O[0x12e6]](':' + v4_f3 + ':', ':' + (v4_f3 - 0x2) + ':'));
        }
      }nyv = nyv[O[0x12e6]](new RegExp(O[0x75a6], 'g'), O[0x75a7] + u8$rz9 + O[0x6574]), nyv = nyv[O[0x12e6]](new RegExp(O[0x75a8], 'g'), O[0x75a7] + u8$rz9 + O[0x6574]), eaib2[O[0x1234]] = nyv;
    }var _vsy = { 'id': window['$h6R'][O[0x75a9]], 'role': window['$h6R'][O[0x12ad]], 'level': window['$h6R'][O[0x75aa]], 'user': window['$h6R'][O[0x6511]], 'version': window['$h6R'][O[0x65]], 'cdn': window['$h6R'][O[0x1232]], 'pkgName': window['$h6R'][O[0x6512]], 'gamever': window[O[0x22e]][O[0x75a4]], 'serverid': window['$h6R'][O[0x650c]] ? window['$h6R'][O[0x650c]][O[0x2dcb]] : 0x0, 'systemInfo': window[O[0x75ab]], 'error': O[0x75ac], 'stack': eaib2 ? eaib2[O[0x1234]] : '' },
        ea2b = JSON[O[0x1224]](_vsy);console[O[0x7d]](O[0x75ad] + ea2b), (!window[O[0x75a2]] || window[O[0x75a2]] != _vsy[O[0x7d]]) && (window[O[0x75a2]] = _vsy[O[0x7d]], window['$hY6'](_vsy));
  }
});import 'hhhmd5min.js';import 'hhhzlibs.js';window[O[0x75ae]] = require(O[0x75af]);import 'hhhindex.js';import 'hhhlibsmin.js';import 'hhhwxmini.js';import 'hhhinitmin.js';console[O[0x4e]](O[0x75b0]), console[O[0x4e]](O[0x75b1]), $hY6UR({ 'title': O[0x75b2] });var h_w9hd0j = { '$hXYR6U': !![] };new window[O[0x75b3]](h_w9hd0j), window[O[0x75b3]][O[0x94]]['$hXU6RY']();if (window['$hXY6RU']) clearInterval(window['$hXY6RU']);window['$hXY6RU'] = null, window['$hXURY6'] = function (d9rjz, u$8lpc) {
  if (!d9rjz || !u$8lpc) return 0x0;d9rjz = d9rjz[O[0xf]]('.'), u$8lpc = u$8lpc[O[0xf]]('.');const rz8d9 = Math[O[0x35c]](d9rjz[O[0xd]], u$8lpc[O[0xd]]);while (d9rjz[O[0xd]] < rz8d9) {
    d9rjz[O[0x1d]]('0');
  }while (u$8lpc[O[0xd]] < rz8d9) {
    u$8lpc[O[0x1d]]('0');
  }for (var _nsavy = 0x0; _nsavy < rz8d9; _nsavy++) {
    const b2aiy = parseInt(d9rjz[_nsavy]),
          v34f_ = parseInt(u$8lpc[_nsavy]);if (b2aiy > v34f_) return 0x1;else {
      if (b2aiy < v34f_) return -0x1;
    }
  }return 0x0;
}, window[O[0x75b4]] = wx[O[0x75b5]]()[O[0x75b4]], console[O[0x1e2]](O[0x75b6] + window[O[0x75b4]]);var h__snyg = wx[O[0x75b7]]();h__snyg[O[0x75b8]](function (a2i6e) {
  console[O[0x1e2]](O[0x75b9] + a2i6e[O[0x75ba]]);
}), h__snyg[O[0x75bb]](function () {
  wx[O[0x75bc]]({ 'title': O[0x75bd], 'content': O[0x75be], 'showCancel': ![], 'success': function (_gyn) {
      h__snyg[O[0x75bf]]();
    } });
}), h__snyg[O[0x75c0]](function () {
  console[O[0x1e2]](O[0x75c1]);
}), window['$hXUR6Y'] = function () {
  console[O[0x1e2]](O[0x75c2]);var y2s6ai = wx[O[0x75c3]]({ 'name': O[0x75c4], 'success': function (r9jhzd) {
      console[O[0x1e2]](O[0x75c5]), console[O[0x1e2]](r9jhzd), r9jhzd && r9jhzd[O[0x65d3]] == O[0x75c6] ? (window['$hRU'] = !![], window['$hRU6Y'](), window['$hR6YU']()) : setTimeout(function () {
        window['$hXUR6Y']();
      }, 0x1f4);
    }, 'fail': function (q30x71) {
      console[O[0x1e2]](O[0x75c7]), console[O[0x1e2]](q30x71), setTimeout(function () {
        window['$hXUR6Y']();
      }, 0x1f4);
    } });y2s6ai && y2s6ai[O[0x72d2]](lpcu5$ => {});
}, window['$hX6YRU'] = function () {
  console[O[0x1e2]](O[0x75c8]);var e26ia = wx[O[0x75c3]]({ 'name': O[0x75c9], 'success': function (uolpc5) {
      console[O[0x1e2]](O[0x75ca]), console[O[0x1e2]](uolpc5), uolpc5 && uolpc5[O[0x65d3]] == O[0x75c6] ? (window['$h6UR'] = !![], window['$hRU6Y'](), window['$hR6YU']()) : setTimeout(function () {
        window['$hX6YRU']();
      }, 0x1f4);
    }, 'fail': function (by6ai) {
      console[O[0x1e2]](O[0x75cb]), console[O[0x1e2]](by6ai), setTimeout(function () {
        window['$hX6YRU']();
      }, 0x1f4);
    } });e26ia && e26ia[O[0x72d2]](rz8dj => {});
}, window[O[0x75cc]] = function () {
  window['$hXURY6'](window[O[0x75b4]], O[0x75cd]) >= 0x0 ? (console[O[0x1e2]](O[0x75ce] + window[O[0x75b4]] + O[0x75cf]), window['$h6Y'](), window['$hXUR6Y'](), window['$hX6YRU']()) : (window['$h6RY'](O[0x75d0], window[O[0x75b4]]), wx[O[0x75bc]]({ 'title': O[0x1975], 'content': O[0x75d1] }));
}, window[O[0x75ab]] = '', wx[O[0x75d2]]({ 'success'(xq0wh) {
    window[O[0x75ab]] = O[0x75d3] + xq0wh[O[0x75d4]] + O[0x75d5] + xq0wh[O[0x75d6]] + O[0x75d7] + xq0wh[O[0x12f3]] + O[0x75d8] + xq0wh[O[0x1db]] + O[0x75d9] + xq0wh[O[0x64ee]] + O[0x75da] + xq0wh[O[0x75b4]] + O[0x75db] + xq0wh[O[0x251c]], console[O[0x1e2]](window[O[0x75ab]]), console[O[0x1e2]](O[0x75dc] + xq0wh[O[0x75dd]] + O[0x75de] + xq0wh[O[0x75df]] + O[0x75e0] + xq0wh[O[0x75e1]] + O[0x75e2] + xq0wh[O[0x75e3]] + O[0x75e4] + xq0wh[O[0x75e5]] + O[0x75e6] + xq0wh[O[0x75e7]] + O[0x75e8] + (xq0wh[O[0x75e9]] ? xq0wh[O[0x75e9]][O[0x13e]] + ',' + xq0wh[O[0x75e9]][O[0x4d2]] + ',' + xq0wh[O[0x75e9]][O[0x4d4]] + ',' + xq0wh[O[0x75e9]][O[0x4d3]] : ''));var _y6asn = xq0wh[O[0x1db]] ? xq0wh[O[0x1db]][O[0x3160]]() : '',
        p5ocu = xq0wh[O[0x75d6]] ? xq0wh[O[0x75d6]][O[0x3160]]()[O[0x12e6]]('\x20', '') : '';window['$h6R'][O[0x43a]] = _y6asn[O[0x73]](O[0x75ea]) != -0x1, window['$h6R'][O[0x2d19]] = _y6asn[O[0x73]](O[0x7516]) != -0x1, window['$h6R'][O[0x75eb]] = _y6asn[O[0x73]](O[0x75ea]) != -0x1 || _y6asn[O[0x73]](O[0x7516]) != -0x1, window['$h6R'][O[0x63e0]] = _y6asn[O[0x73]](O[0x75ec]) != -0x1 || _y6asn[O[0x73]](O[0x75ed]) != -0x1, window['$h6R'][O[0x75ee]] = xq0wh[O[0x64ee]] ? xq0wh[O[0x64ee]][O[0x3160]]() : '', window['$h6R']['$hXYUR6'] = ![], window['$h6R']['$hXY6UR'] = 0x2;if (_y6asn[O[0x73]](O[0x7516]) != -0x1) {
      if (xq0wh[O[0x251c]] >= 0x18) window['$h6R']['$hXY6UR'] = 0x3;else window['$h6R']['$hXY6UR'] = 0x2;
    } else {
      if (_y6asn[O[0x73]](O[0x75ea]) != -0x1) {
        if (xq0wh[O[0x251c]] && xq0wh[O[0x251c]] >= 0x14) window['$h6R']['$hXY6UR'] = 0x3;else {
          if (p5ocu[O[0x73]](O[0x75ef]) != -0x1 || p5ocu[O[0x73]](O[0x75f0]) != -0x1 || p5ocu[O[0x73]](O[0x75f1]) != -0x1 || p5ocu[O[0x73]](O[0x75f2]) != -0x1 || p5ocu[O[0x73]](O[0x75f3]) != -0x1) window['$h6R']['$hXY6UR'] = 0x2;else window['$h6R']['$hXY6UR'] = 0x3;
        }
      } else window['$h6R']['$hXY6UR'] = 0x2;
    }console[O[0x1e2]](O[0x75f4] + window['$h6R']['$hXYUR6'] + O[0x75f5] + window['$h6R']['$hXY6UR']);
  } }), wx[O[0x75f6]]({ 'success': function ($rup8) {
    console[O[0x1e2]](O[0x75f7] + $rup8[O[0x1295]] + O[0x75f8] + $rup8[O[0x75f9]]);
  } }), wx[O[0x2f5d]]({ 'success': function (nays_6) {
    console[O[0x1e2]](O[0x75fa] + nays_6[O[0x3454]]);
  } }), wx[O[0x75fb]]({ 'keepScreenOn': !![] }), wx[O[0x2f5f]](function (p$r8zu) {
  console[O[0x1e2]](O[0x75fa] + p$r8zu[O[0x3454]] + O[0x75fc] + p$r8zu[O[0x75fd]]);
}), wx[O[0x2b2d]](function (rdjz9) {
  window['$hUY'] = rdjz9, window['$hRYU'] && window['$hUY'] && (console[O[0x4e]](O[0x75fe] + window['$hUY'][O[0x30f]]), window['$hRYU'](window['$hUY']), window['$hUY'] = null);
}), window[O[0x75ff]] = 0x0, window['$hX6URY'] = 0x0, window[O[0x7600]] = null, wx[O[0x7601]](function () {
  window['$hX6URY']++;var lpuc5 = Date[O[0x53]]();(window[O[0x75ff]] == 0x0 || lpuc5 - window[O[0x75ff]] > 0x1d4c0) && (console[O[0x60]](O[0x7602]), wx[O[0x2f93]]());if (window['$hX6URY'] >= 0x2) {
    window['$hX6URY'] = 0x0, console[O[0x7d]](O[0x7603]), wx[O[0x7604]]('0', 0x1);if (window['$h6R'] && window['$h6R'][O[0x43a]]) window['$h6RY'](O[0x7605], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});