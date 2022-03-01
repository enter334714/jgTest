var O = wx.$C;
console[O[0x4e]](O[0x72a2]), window[O[0x72a3]], wx[O[0x72a4]](function (vyns_a) {
  if (vyns_a) {
    if (vyns_a[O[0x11de]]) {
      var j9dz8 = window[O[0x231]][O[0x72a5]][O[0x1291]](new RegExp(/\./, 'g'), '_'),
          zur$89 = vyns_a[O[0x11de]],
          f3174g = zur$89[O[0x2f96]](/(hhhhhhhh\/hhhhgame.js:)[0-9]{1,60}(:)/g);if (f3174g) for (var olt5km = 0x0; olt5km < f3174g[O[0xd]]; olt5km++) {
        var v13f4;f3174g[olt5km] && 0x0 < f3174g[olt5km][O[0xd]] && (v13f4 = parseInt(f3174g[olt5km][O[0x1291]](O[0x72a6], '')[O[0x1291]](':', '')), zur$89 = zur$89[O[0x1291]](f3174g[olt5km], f3174g[olt5km][O[0x1291]](':' + v13f4 + ':', ':' + (v13f4 - 0x2) + ':')));
      }zur$89 = (zur$89 = zur$89[O[0x1291]](new RegExp(O[0x72a7], 'g'), O[0x72a8] + j9dz8 + O[0x643f]))[O[0x1291]](new RegExp(O[0x72a9], 'g'), O[0x72a8] + j9dz8 + O[0x643f]), vyns_a[O[0x11de]] = zur$89;
    }j9dz8 = { 'id': window['$h6R'][O[0x72aa]], 'role': window['$h6R'][O[0x1257]], 'level': window['$h6R'][O[0x72ab]], 'user': window['$h6R'][O[0x63db]], 'version': window['$h6R'][O[0x65]], 'cdn': window['$h6R'][O[0x11dc]], 'pkgName': window['$h6R'][O[0x63dc]], 'gamever': window[O[0x231]][O[0x72a5]], 'serverid': window['$h6R'][O[0x63d6]] ? window['$h6R'][O[0x63d6]][O[0x2d3d]] : 0x0, 'systemInfo': window[O[0x72ac]], 'error': O[0x72ad], 'stack': vyns_a ? vyns_a[O[0x11de]] : '' }, vyns_a = JSON[O[0x11ce]](j9dz8), (console[O[0x7d]](O[0x72ae] + vyns_a), window[O[0x72a3]] && window[O[0x72a3]] == j9dz8[O[0x7d]] || (window[O[0x72a3]] = j9dz8[O[0x7d]], window['$hY6'](j9dz8)));
  }
});import 'hhhmd5min.js';import 'hhhzlibs.js';window[O[0x72af]] = require(O[0x72b0]);import 'hhhindex.js';import 'hhhlibsmin.js';import 'hhhwxmini.js';import 'hhhinitmin.js';console[O[0x4e]](O[0x72b1]), console[O[0x4e]](O[0x72b2]), $hY6UR({ 'title': O[0x72b3] });var h_vy_ngs = { '$hXYR6U': !0x0 };new window[O[0x72b4]](h_vy_ngs), window[O[0x72b4]][O[0x94]]['$hXU6RY'](), window['$hXY6RU'] && clearInterval(window['$hXY6RU']), window['$hXY6RU'] = null, window['$hXURY6'] = function (y_sa, ba2e6i) {
  if (!y_sa || !ba2e6i) return 0x0;y_sa = y_sa[O[0xf]]('.'), ba2e6i = ba2e6i[O[0xf]]('.');var lu5cp = Math[O[0x358]](y_sa[O[0xd]], ba2e6i[O[0xd]]);for (; y_sa[O[0xd]] < lu5cp;) y_sa[O[0x1d]]('0');for (; ba2e6i[O[0xd]] < lu5cp;) ba2e6i[O[0x1d]]('0');for (var ya6sn = 0x0; ya6sn < lu5cp; ya6sn++) {
    var zh9r = parseInt(y_sa[ya6sn]),
        xw70qh = parseInt(ba2e6i[ya6sn]);if (xw70qh < zh9r) return 0x1;if (zh9r < xw70qh) return -0x1;
  }return 0x0;
}, window[O[0x72b5]] = wx[O[0x72b6]]()[O[0x72b5]], console[O[0x1e7]](O[0x72b7] + window[O[0x72b5]]);var h_f3v4_g = wx[O[0x72b8]]();h_f3v4_g[O[0x72b9]](function (hwj9zd) {
  console[O[0x1e7]](O[0x72ba] + hwj9zd[O[0x72bb]]);
}), h_f3v4_g[O[0x72bc]](function () {
  wx[O[0x72bd]]({ 'title': O[0x72be], 'content': O[0x72bf], 'showCancel': !0x1, 'success': function (x7q14) {
      h_f3v4_g[O[0x72c0]]();
    } });
}), h_f3v4_g[O[0x72c1]](function () {
  console[O[0x1e7]](O[0x72c2]);
}), window['$hXUR6Y'] = function () {
  console[O[0x1e7]](O[0x72c3]);var n6y_as = wx[O[0x72c4]]({ 'name': O[0x72c5], 'success': function (ulcop) {
      console[O[0x1e7]](O[0x72c6]), console[O[0x1e7]](ulcop), ulcop && O[0x72c7] == ulcop[O[0x649e]] ? (window['$hRU'] = !0x0, window['$hRU6Y'](), window['$hR6YU']()) : setTimeout(function () {
        window['$hXUR6Y']();
      }, 0x1f4);
    }, 'fail': function (nvgys_) {
      console[O[0x1e7]](O[0x72c8]), console[O[0x1e7]](nvgys_), setTimeout(function () {
        window['$hXUR6Y']();
      }, 0x1f4);
    } });n6y_as && n6y_as[O[0x72c9]](hx0wq => {});
}, window['$hX6YRU'] = function () {
  console[O[0x1e7]](O[0x72ca]);var jh90wd = wx[O[0x72c4]]({ 'name': O[0x72cb], 'success': function (ur8$zp) {
      console[O[0x1e7]](O[0x72cc]), console[O[0x1e7]](ur8$zp), ur8$zp && O[0x72c7] == ur8$zp[O[0x649e]] ? (window['$h6UR'] = !0x0, window['$hRU6Y'](), window['$hR6YU']()) : setTimeout(function () {
        window['$hX6YRU']();
      }, 0x1f4);
    }, 'fail': function (d98jz) {
      console[O[0x1e7]](O[0x72cd]), console[O[0x1e7]](d98jz), setTimeout(function () {
        window['$hX6YRU']();
      }, 0x1f4);
    } });jh90wd && jh90wd[O[0x72c9]](dhzjr => {});
}, window[O[0x72ce]] = function () {
  0x0 <= window['$hXURY6'](window[O[0x72b5]], O[0x72cf]) ? (console[O[0x1e7]](O[0x72d0] + window[O[0x72b5]] + O[0x72d1]), window['$h6Y'](), window['$hXUR6Y'](), window['$hX6YRU']()) : (window['$h6RY'](O[0x72d2], window[O[0x72b5]]), wx[O[0x72bd]]({ 'title': O[0x1911], 'content': O[0x72d3] }));
}, window[O[0x72ac]] = '', wx[O[0x72d4]]({ 'success'(x10q7) {
    window[O[0x72ac]] = O[0x72d5] + x10q7[O[0x72d6]] + O[0x72d7] + x10q7[O[0x72d8]] + O[0x72d9] + x10q7[O[0x129e]] + O[0x72da] + x10q7[O[0x1e0]] + O[0x72db] + x10q7[O[0x63b9]] + O[0x72dc] + x10q7[O[0x72b5]] + O[0x72dd] + x10q7[O[0x24a3]], console[O[0x1e7]](window[O[0x72ac]]), console[O[0x1e7]](O[0x72de] + x10q7[O[0x72df]] + O[0x72e0] + x10q7[O[0x72e1]] + O[0x72e2] + x10q7[O[0x72e3]] + O[0x72e4] + x10q7[O[0x72e5]] + O[0x72e6] + x10q7[O[0x72e7]] + O[0x72e8] + x10q7[O[0x72e9]] + O[0x72ea] + (x10q7[O[0x72eb]] ? x10q7[O[0x72eb]][O[0x143]] + ',' + x10q7[O[0x72eb]][O[0x4c8]] + ',' + x10q7[O[0x72eb]][O[0x4ca]] + ',' + x10q7[O[0x72eb]][O[0x4c9]] : ''));var f3v1g = x10q7[O[0x1e0]] ? x10q7[O[0x1e0]][O[0x30c1]]() : '',
        $8ruz9 = x10q7[O[0x72d8]] ? x10q7[O[0x72d8]][O[0x30c1]]()[O[0x1291]]('\x20', '') : '';window['$h6R'][O[0x435]] = -0x1 != f3v1g[O[0x73]](O[0x72ec]), window['$h6R'][O[0x2c8b]] = -0x1 != f3v1g[O[0x73]](O[0x708f]), window['$h6R'][O[0x72ed]] = -0x1 != f3v1g[O[0x73]](O[0x72ec]) || -0x1 != f3v1g[O[0x73]](O[0x708f]), window['$h6R'][O[0x62ac]] = -0x1 != f3v1g[O[0x73]](O[0x72ee]) || -0x1 != f3v1g[O[0x73]](O[0x72ef]), window['$h6R'][O[0x72f0]] = x10q7[O[0x63b9]] ? x10q7[O[0x63b9]][O[0x30c1]]() : '', window['$h6R']['$hXYUR6'] = !0x1, window['$h6R']['$hXY6UR'] = 0x2, -0x1 != f3v1g[O[0x73]](O[0x708f]) ? 0x18 <= x10q7[O[0x24a3]] ? window['$h6R']['$hXY6UR'] = 0x3 : window['$h6R']['$hXY6UR'] = 0x2 : -0x1 == f3v1g[O[0x73]](O[0x72ec]) || !(x10q7[O[0x24a3]] && 0x14 <= x10q7[O[0x24a3]] || -0x1 == $8ruz9[O[0x73]](O[0x72f1]) && -0x1 == $8ruz9[O[0x73]](O[0x72f2]) && -0x1 == $8ruz9[O[0x73]](O[0x72f3]) && -0x1 == $8ruz9[O[0x73]](O[0x72f4]) && -0x1 == $8ruz9[O[0x73]](O[0x72f5])) ? window['$h6R']['$hXY6UR'] = 0x2 : window['$h6R']['$hXY6UR'] = 0x3, console[O[0x1e7]](O[0x72f6] + window['$h6R']['$hXYUR6'] + O[0x72f7] + window['$h6R']['$hXY6UR']);
  } }), wx[O[0x72f8]]({ 'success': function (mclt5o) {
    console[O[0x1e7]](O[0x72f9] + mclt5o[O[0x123f]] + O[0x72fa] + mclt5o[O[0x72fb]]);
  } }), wx[O[0x72fc]]({ 'success': function (aei26) {
    console[O[0x1e7]](O[0x72fd] + aei26[O[0x72fe]]);
  } }), wx[O[0x72ff]]({ 'keepScreenOn': !0x0 }), wx[O[0x7300]](function (i6a2sy) {
  console[O[0x1e7]](O[0x72fd] + i6a2sy[O[0x72fe]] + O[0x7301] + i6a2sy[O[0x7302]]);
}), wx[O[0x2aa1]](function (zw9jdh) {
  window['$hUY'] = zw9jdh, window['$hRYU'] && window['$hUY'] && (console[O[0x4e]](O[0x7303] + window['$hUY'][O[0x30b]]), window['$hRYU'](window['$hUY']), window['$hUY'] = null);
}), window[O[0x7304]] = 0x0, window['$hX6URY'] = 0x0, window[O[0x7305]] = null, wx[O[0x7306]](function () {
  window['$hX6URY']++;var _sa6ny = Date[O[0x53]]();(0x0 == window[O[0x7304]] || 0x1d4c0 < _sa6ny - window[O[0x7304]]) && (console[O[0x60]](O[0x7307]), wx[O[0x2ef9]]()), 0x2 <= window['$hX6URY'] && (window['$hX6URY'] = 0x0, console[O[0x7d]](O[0x7308]), wx[O[0x7309]]('0', 0x1), window['$h6R'] && window['$h6R'][O[0x435]] && window['$h6RY'](O[0x730a], ''), onMemoryWarningCallBack && onMemoryWarningCallBack());
});