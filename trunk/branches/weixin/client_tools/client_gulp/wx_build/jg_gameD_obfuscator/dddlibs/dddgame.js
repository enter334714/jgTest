var v = wx.$d;
console[v[0x4e]](v[0x7427]), window[v[0x7428]], wx[v[0x7429]](function (tgquf) {
  if (tgquf) {
    if (tgquf[v[0x11de]]) {
      var uqtg = window[v[0x231]][v[0x742a]][v[0x1291]](new RegExp(/\./, 'g'), '_'),
          c943_n = tgquf[v[0x11de]],
          xq0zba = c943_n[v[0x2f9a]](/(ddddddddd\/dddgame.js:)[0-9]{1,60}(:)/g);if (xq0zba) for (var dem6j = 0x0; dem6j < xq0zba[v[0xd]]; dem6j++) {
        var n_j34;xq0zba[dem6j] && 0x0 < xq0zba[dem6j][v[0xd]] && (n_j34 = parseInt(xq0zba[dem6j][v[0x1291]](v[0x742b], '')[v[0x1291]](':', '')), c943_n = c943_n[v[0x1291]](xq0zba[dem6j], xq0zba[dem6j][v[0x1291]](':' + n_j34 + ':', ':' + (n_j34 - 0x2) + ':')));
      }c943_n = (c943_n = c943_n[v[0x1291]](new RegExp(v[0x742c], 'g'), v[0x742d] + uqtg + v[0x6449]))[v[0x1291]](new RegExp(v[0x742e], 'g'), v[0x742d] + uqtg + v[0x6449]), tgquf[v[0x11de]] = c943_n;
    }uqtg = { 'id': window['D$LZ'][v[0x742f]], 'role': window['D$LZ'][v[0x1257]], 'level': window['D$LZ'][v[0x7430]], 'user': window['D$LZ'][v[0x63e5]], 'version': window['D$LZ'][v[0x65]], 'cdn': window['D$LZ'][v[0x11dc]], 'pkgName': window['D$LZ'][v[0x63e6]], 'gamever': window[v[0x231]][v[0x742a]], 'serverid': window['D$LZ'][v[0x63e0]] ? window['D$LZ'][v[0x63e0]][v[0x2d41]] : 0x0, 'systemInfo': window[v[0x7431]], 'error': v[0x7432], 'stack': tgquf ? tgquf[v[0x11de]] : '' }, tgquf = JSON[v[0x11ce]](uqtg), (console[v[0x7d]](v[0x7433] + tgquf), window[v[0x7428]] && window[v[0x7428]] == uqtg[v[0x7d]] || (window[v[0x7428]] = uqtg[v[0x7d]], window['D$SL'](uqtg)));
  }
});import 'dddmd5min.js';import 'dddzlibs.js';window[v[0x7434]] = require(v[0x7435]);import 'dddindex.js';import 'dddlibsmin.js';import 'dddwxmini.js';import 'dddinitmin.js';console[v[0x4e]](v[0x7436]), console[v[0x4e]](v[0x7437]), D$SLAZ({ 'title': v[0x7438] });var zbr1 = { 'D$YSZLA': !0x0 };new window[v[0x7439]](zbr1), window[v[0x7439]][v[0x94]]['D$YALZS'](), window['D$YSLZA'] && clearInterval(window['D$YSLZA']), window['D$YSLZA'] = null, window['D$YAZSL'] = function (ftik, ba80x) {
  if (!ftik || !ba80x) return 0x0;ftik = ftik[v[0xf]]('.'), ba80x = ba80x[v[0xf]]('.');var eih6m = Math[v[0x358]](ftik[v[0xd]], ba80x[v[0xd]]);for (; ftik[v[0xd]] < eih6m;) ftik[v[0x1d]]('0');for (; ba80x[v[0xd]] < eih6m;) ba80x[v[0x1d]]('0');for (var yp$v = 0x0; yp$v < eih6m; yp$v++) {
    var abz0qx = parseInt(ftik[yp$v]),
        x8br1w = parseInt(ba80x[yp$v]);if (x8br1w < abz0qx) return 0x1;if (abz0qx < x8br1w) return -0x1;
  }return 0x0;
}, window[v[0x743a]] = wx[v[0x743b]]()[v[0x743a]], console[v[0x1e7]](v[0x743c] + window[v[0x743a]]);var zmdu6 = wx[v[0x743d]]();zmdu6[v[0x743e]](function (eudt) {
  console[v[0x1e7]](v[0x743f] + eudt[v[0x7440]]);
}), zmdu6[v[0x7441]](function () {
  wx[v[0x7442]]({ 'title': v[0x7443], 'content': v[0x7444], 'showCancel': !0x1, 'success': function (xb1r8w) {
      zmdu6[v[0x7445]]();
    } });
}), zmdu6[v[0x7446]](function () {
  console[v[0x1e7]](v[0x7447]);
}), window['D$YAZLS'] = function () {
  console[v[0x1e7]](v[0x7448]);var zqga0k = wx[v[0x7449]]({ 'name': v[0x744a], 'success': function (a1rbx8) {
      console[v[0x1e7]](v[0x744b]), console[v[0x1e7]](a1rbx8), a1rbx8 && v[0x744c] == a1rbx8[v[0x64a8]] ? (window['D$ZA'] = !0x0, window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
        window['D$YAZLS']();
      }, 0x1f4);
    }, 'fail': function (ehjnm6) {
      console[v[0x1e7]](v[0x744d]), console[v[0x1e7]](ehjnm6), setTimeout(function () {
        window['D$YAZLS']();
      }, 0x1f4);
    } });zqga0k && zqga0k[v[0x70dd]](r$1x8 => {});
}, window['D$YLSZA'] = function () {
  console[v[0x1e7]](v[0x744e]);var editf = wx[v[0x7449]]({ 'name': v[0x744f], 'success': function (jde6) {
      console[v[0x1e7]](v[0x7450]), console[v[0x1e7]](jde6), jde6 && v[0x744c] == jde6[v[0x64a8]] ? (window['D$LAZ'] = !0x0, window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
        window['D$YLSZA']();
      }, 0x1f4);
    }, 'fail': function (u6edm) {
      console[v[0x1e7]](v[0x7451]), console[v[0x1e7]](u6edm), setTimeout(function () {
        window['D$YLSZA']();
      }, 0x1f4);
    } });editf && editf[v[0x70dd]](k0gqaz => {});
}, window[v[0x7452]] = function () {
  0x0 <= window['D$YAZSL'](window[v[0x743a]], v[0x7453]) ? (console[v[0x1e7]](v[0x7454] + window[v[0x743a]] + v[0x7455]), window['D$LS'](), window['D$YAZLS'](), window['D$YLSZA']()) : (window['D$LZS'](v[0x7456], window[v[0x743a]]), wx[v[0x7442]]({ 'title': v[0x1915], 'content': v[0x7457] }));
}, window[v[0x7431]] = '', wx[v[0x7458]]({ 'success'(eftd) {
    window[v[0x7431]] = v[0x7459] + eftd[v[0x745a]] + v[0x745b] + eftd[v[0x745c]] + v[0x745d] + eftd[v[0x129e]] + v[0x745e] + eftd[v[0x1e0]] + v[0x745f] + eftd[v[0x63c3]] + v[0x7460] + eftd[v[0x743a]] + v[0x7461] + eftd[v[0x24a7]], console[v[0x1e7]](window[v[0x7431]]), console[v[0x1e7]](v[0x7462] + eftd[v[0x7463]] + v[0x7464] + eftd[v[0x7465]] + v[0x7466] + eftd[v[0x7467]] + v[0x7468] + eftd[v[0x7469]] + v[0x746a] + eftd[v[0x746b]] + v[0x746c] + eftd[v[0x746d]] + v[0x746e] + (eftd[v[0x746f]] ? eftd[v[0x746f]][v[0x143]] + ',' + eftd[v[0x746f]][v[0x4c8]] + ',' + eftd[v[0x746f]][v[0x4ca]] + ',' + eftd[v[0x746f]][v[0x4c9]] : ''));var umtdi = eftd[v[0x1e0]] ? eftd[v[0x1e0]][v[0x30c5]]() : '',
        ietf = eftd[v[0x745c]] ? eftd[v[0x745c]][v[0x30c5]]()[v[0x1291]]('\x20', '') : '';window['D$LZ'][v[0x435]] = -0x1 != umtdi[v[0x73]](v[0x7311]), window['D$LZ'][v[0x2c8f]] = -0x1 != umtdi[v[0x73]](v[0x7310]), window['D$LZ'][v[0x7470]] = -0x1 != umtdi[v[0x73]](v[0x7311]) || -0x1 != umtdi[v[0x73]](v[0x7310]), window['D$LZ'][v[0x62b6]] = -0x1 != umtdi[v[0x73]](v[0x7471]) || -0x1 != umtdi[v[0x73]](v[0x7472]), window['D$LZ'][v[0x7473]] = eftd[v[0x63c3]] ? eftd[v[0x63c3]][v[0x30c5]]() : '', window['D$LZ']['D$YSAZL'] = !0x1, window['D$LZ']['D$YSLAZ'] = 0x2, -0x1 != umtdi[v[0x73]](v[0x7310]) ? 0x18 <= eftd[v[0x24a7]] ? window['D$LZ']['D$YSLAZ'] = 0x3 : window['D$LZ']['D$YSLAZ'] = 0x2 : -0x1 == umtdi[v[0x73]](v[0x7311]) || !(eftd[v[0x24a7]] && 0x14 <= eftd[v[0x24a7]] || -0x1 == ietf[v[0x73]](v[0x7474]) && -0x1 == ietf[v[0x73]](v[0x7475]) && -0x1 == ietf[v[0x73]](v[0x7476]) && -0x1 == ietf[v[0x73]](v[0x7477]) && -0x1 == ietf[v[0x73]](v[0x7478])) ? window['D$LZ']['D$YSLAZ'] = 0x2 : window['D$LZ']['D$YSLAZ'] = 0x3, console[v[0x1e7]](v[0x7479] + window['D$LZ']['D$YSAZL'] + v[0x747a] + window['D$LZ']['D$YSLAZ']);
  } }), wx[v[0x747b]]({ 'success': function (co2935) {
    console[v[0x1e7]](v[0x747c] + co2935[v[0x123f]] + v[0x747d] + co2935[v[0x747e]]);
  } }), wx[v[0x747f]]({ 'success': function (hjme) {
    console[v[0x1e7]](v[0x7480] + hjme[v[0x7481]]);
  } }), wx[v[0x7482]]({ 'keepScreenOn': !0x0 }), wx[v[0x7483]](function (aqxb0z) {
  console[v[0x1e7]](v[0x7480] + aqxb0z[v[0x7481]] + v[0x7484] + aqxb0z[v[0x7485]]);
}), wx[v[0x2aa5]](function (tugif) {
  window['D$AS'] = tugif, window['D$ZSA'] && window['D$AS'] && (console[v[0x4e]](v[0x7486] + window['D$AS'][v[0x30b]]), window['D$ZSA'](window['D$AS']), window['D$AS'] = null);
}), window[v[0x7487]] = 0x0, window['D$YLAZS'] = 0x0, window[v[0x7488]] = null, wx[v[0x7489]](function () {
  window['D$YLAZS']++;var rp$wv7 = Date[v[0x53]]();(0x0 == window[v[0x7487]] || 0x1d4c0 < rp$wv7 - window[v[0x7487]]) && (console[v[0x60]](v[0x748a]), wx[v[0x2efd]]()), 0x2 <= window['D$YLAZS'] && (window['D$YLAZS'] = 0x0, console[v[0x7d]](v[0x748b]), wx[v[0x748c]]('0', 0x1), window['D$LZ'] && window['D$LZ'][v[0x435]] && window['D$LZS'](v[0x748d], ''), onMemoryWarningCallBack && onMemoryWarningCallBack());
});