var _ = wx.y$;
console[_[0x4e]](_[0x7a1e]), window[_[0x7a1f]], wx[_[0x7a20]](function (fig85) {
  if (fig85) {
    if (fig85[_[0x12d5]]) {
      var u3y4a9 = window[_[0x232]][_[0x7a21]][_[0x1389]](new RegExp(/\./, 'g'), '_'),
          f8ri5 = fig85[_[0x12d5]],
          p239o = f8ri5[_[0x31ae]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);if (p239o) for (var gy9a = 0x0; gy9a < p239o[_[0xd]]; gy9a++) {
        if (p239o[gy9a] && p239o[gy9a][_[0xd]] > 0x0) {
          var fi5z8r = parseInt(p239o[gy9a][_[0x1389]](_[0x7a22], '')[_[0x1389]](':', ''));f8ri5 = f8ri5[_[0x1389]](p239o[gy9a], p239o[gy9a][_[0x1389]](':' + fi5z8r + ':', ':' + (fi5z8r - 0x2) + ':'));
        }
      }f8ri5 = f8ri5[_[0x1389]](new RegExp(_[0x7a23], 'g'), _[0x7a24] + u3y4a9 + _[0x686f]), f8ri5 = f8ri5[_[0x1389]](new RegExp(_[0x7a25], 'g'), _[0x7a24] + u3y4a9 + _[0x686f]), fig85[_[0x12d5]] = f8ri5;
    }var _j06qs = { 'id': window['p$UK'][_[0x7a26]], 'role': window['p$UK'][_[0x134f]], 'level': window['p$UK'][_[0x7a27]], 'user': window['p$UK'][_[0x680c]], 'version': window['p$UK'][_[0x65]], 'cdn': window['p$UK'][_[0x12d3]], 'pkgName': window['p$UK'][_[0x680d]], 'gamever': window[_[0x232]][_[0x7a21]], 'serverid': window['p$UK'][_[0x6807]] ? window['p$UK'][_[0x6807]][_[0x2eed]] : 0x0, 'systemInfo': window[_[0x7a28]], 'error': _[0x7a29], 'stack': fig85 ? fig85[_[0x12d5]] : '' },
        k8fid = JSON[_[0x12c5]](_j06qs);console[_[0x7d]](_[0x7a2a] + k8fid), (!window[_[0x7a1f]] || window[_[0x7a1f]] != _j06qs[_[0x7d]]) && (window[_[0x7a1f]] = _j06qs[_[0x7d]], window['p$NU'](_j06qs));
  }
});import 'bbbmd5min.js';import 'bbbzlibs.js';window[_[0x7a2b]] = require(_[0x7a2c]);import 'bbbindex.js';import 'bbblibsmin.js';import 'bbbwxmini.js';import 'bbbinitmin.js';console[_[0x4e]](_[0x7a2d]), console[_[0x4e]](_[0x7a2e]), p$NUBK({ 'title': _[0x7a2f] });var _d$1ou2 = { 'p$LNKUB': !![] };new window[_[0x7a30]](_d$1ou2), window[_[0x7a30]][_[0x94]]['p$LBUKN']();if (window['p$LNUKB']) clearInterval(window['p$LNUKB']);window['p$LNUKB'] = null, window['p$LBKNU'] = function (yg93, r8fg) {
  if (!yg93 || !r8fg) return 0x0;yg93 = yg93[_[0xf]]('.'), r8fg = r8fg[_[0xf]]('.');const po3u92 = Math[_[0x37b]](yg93[_[0xd]], r8fg[_[0xd]]);while (yg93[_[0xd]] < po3u92) {
    yg93[_[0x1d]]('0');
  }while (r8fg[_[0xd]] < po3u92) {
    r8fg[_[0x1d]]('0');
  }for (var clnd = 0x0; clnd < po3u92; clnd++) {
    const t7vwmx = parseInt(yg93[clnd]),
          dkize = parseInt(r8fg[clnd]);if (t7vwmx > dkize) return 0x1;else {
      if (t7vwmx < dkize) return -0x1;
    }
  }return 0x0;
}, window[_[0x7a31]] = wx[_[0x7a32]]()[_[0x7a31]], console[_[0x1e7]](_[0x7a33] + window[_[0x7a31]]);var _dapuo3 = wx[_[0x7a34]]();_dapuo3[_[0x7a35]](function (w0s6) {
  console[_[0x1e7]](_[0x7a36] + w0s6[_[0x7a37]]);
}), _dapuo3[_[0x7a38]](function () {
  wx[_[0x7a39]]({ 'title': _[0x7a3a], 'content': _[0x7a3b], 'showCancel': ![], 'success': function (kenlv) {
      _dapuo3[_[0x7a3c]]();
    } });
}), _dapuo3[_[0x7a3d]](function () {
  console[_[0x1e7]](_[0x7a3e]);
}), window['p$LBKUN'] = function () {
  console[_[0x1e7]](_[0x7a3f]);var w_t6 = wx[_[0x7a40]]({ 'name': _[0x7a41], 'success': function ($2pou1) {
      console[_[0x1e7]](_[0x7a42]), console[_[0x1e7]]($2pou1), $2pou1 && $2pou1[_[0x68ce]] == _[0x7a43] ? (window['p$KB'] = !![], window['p$KBUN'](), window['p$KUNB']()) : setTimeout(function () {
        window['p$LBKUN']();
      }, 0x1f4);
    }, 'fail': function (ya5r4) {
      console[_[0x1e7]](_[0x7a44]), console[_[0x1e7]](ya5r4), setTimeout(function () {
        window['p$LBKUN']();
      }, 0x1f4);
    } });w_t6 && w_t6[_[0x7775]](ua9po3 => {});
}, window['p$LUNKB'] = function () {
  console[_[0x1e7]](_[0x7a45]);var upo21 = wx[_[0x7a40]]({ 'name': _[0x7a46], 'success': function (sq_) {
      console[_[0x1e7]](_[0x7a47]), console[_[0x1e7]](sq_), sq_ && sq_[_[0x68ce]] == _[0x7a43] ? (window['p$UBK'] = !![], window['p$KBUN'](), window['p$KUNB']()) : setTimeout(function () {
        window['p$LUNKB']();
      }, 0x1f4);
    }, 'fail': function (_06js) {
      console[_[0x1e7]](_[0x7a48]), console[_[0x1e7]](_06js), setTimeout(function () {
        window['p$LUNKB']();
      }, 0x1f4);
    } });upo21 && upo21[_[0x7775]](ldkzi => {});
}, window[_[0x7a49]] = function () {
  window['p$LBKNU'](window[_[0x7a31]], _[0x7a4a]) >= 0x0 ? (console[_[0x1e7]](_[0x7a4b] + window[_[0x7a31]] + _[0x7a4c]), window['p$UN'](), window['p$LBKUN'](), window['p$LUNKB']()) : (window['p$UKN'](_[0x7a4d], window[_[0x7a31]]), wx[_[0x7a39]]({ 'title': _[0x1912], 'content': _[0x7a4e] }));
}, window[_[0x7a28]] = '', wx[_[0x7a4f]]({ 'success'(izfdke) {
    window[_[0x7a28]] = _[0x7a50] + izfdke[_[0x7a51]] + _[0x7a52] + izfdke[_[0x7a53]] + _[0x7a54] + izfdke[_[0x1396]] + _[0x7a55] + izfdke[_[0x1e0]] + _[0x7a56] + izfdke[_[0x67e9]] + _[0x7a57] + izfdke[_[0x7a31]] + _[0x7a58] + izfdke[_[0x260b]], console[_[0x1e7]](window[_[0x7a28]]), console[_[0x1e7]](_[0x7a59] + izfdke[_[0x7a5a]] + _[0x7a5b] + izfdke[_[0x7a5c]] + _[0x7a5d] + izfdke[_[0x7a5e]] + _[0x7a5f] + izfdke[_[0x7a60]] + _[0x7a61] + izfdke[_[0x7a62]] + _[0x7a63] + izfdke[_[0x7a64]] + _[0x7a65] + (izfdke[_[0x7a66]] ? izfdke[_[0x7a66]][_[0x142]] + ',' + izfdke[_[0x7a66]][_[0x4f1]] + ',' + izfdke[_[0x7a66]][_[0x4f3]] + ',' + izfdke[_[0x7a66]][_[0x4f2]] : ''));var ceknld = izfdke[_[0x1e0]] ? izfdke[_[0x1e0]][_[0x32da]]() : '',
        yg43 = izfdke[_[0x7a53]] ? izfdke[_[0x7a53]][_[0x32da]]()[_[0x1389]]('\x20', '') : '';window['p$UK'][_[0x459]] = ceknld[_[0x73]](_[0x7a67]) != -0x1, window['p$UK'][_[0x2e3d]] = ceknld[_[0x73]](_[0x7a0b]) != -0x1, window['p$UK'][_[0x7a68]] = ceknld[_[0x73]](_[0x7a67]) != -0x1 || ceknld[_[0x73]](_[0x7a0b]) != -0x1, window['p$UK'][_[0x66d7]] = ceknld[_[0x73]](_[0x7a69]) != -0x1 || ceknld[_[0x73]](_[0x7a6a]) != -0x1, window['p$UK'][_[0x7a6b]] = izfdke[_[0x67e9]] ? izfdke[_[0x67e9]][_[0x32da]]() : '', window['p$UK']['p$LNBKU'] = ![], window['p$UK']['p$LNUBK'] = 0x2;if (ceknld[_[0x73]](_[0x7a0b]) != -0x1) {
      if (izfdke[_[0x260b]] >= 0x18) window['p$UK']['p$LNUBK'] = 0x3;else window['p$UK']['p$LNUBK'] = 0x2;
    } else {
      if (ceknld[_[0x73]](_[0x7a67]) != -0x1) {
        if (izfdke[_[0x260b]] && izfdke[_[0x260b]] >= 0x14) window['p$UK']['p$LNUBK'] = 0x3;else {
          if (yg43[_[0x73]](_[0x7a6c]) != -0x1 || yg43[_[0x73]](_[0x7a6d]) != -0x1 || yg43[_[0x73]](_[0x7a6e]) != -0x1 || yg43[_[0x73]](_[0x7a6f]) != -0x1 || yg43[_[0x73]](_[0x7a70]) != -0x1) window['p$UK']['p$LNUBK'] = 0x2;else window['p$UK']['p$LNUBK'] = 0x3;
        }
      } else window['p$UK']['p$LNUBK'] = 0x2;
    }console[_[0x1e7]](_[0x7a71] + window['p$UK']['p$LNBKU'] + _[0x7a72] + window['p$UK']['p$LNUBK']);
  } }), wx[_[0x7a73]]({ 'success': function (lcexvn) {
    console[_[0x1e7]](_[0x7a74] + lcexvn[_[0x1336]] + _[0x7a75] + lcexvn[_[0x7a76]]);
  } }), wx[_[0x306b]]({ 'success': function (gf5ry8) {
    console[_[0x1e7]](_[0x7a77] + gf5ry8[_[0x360b]]);
  } }), wx[_[0x7a78]]({ 'keepScreenOn': !![] }), wx[_[0x306d]](function (f8r) {
  console[_[0x1e7]](_[0x7a77] + f8r[_[0x360b]] + _[0x7a79] + f8r[_[0x7a7a]]);
}), wx[_[0x2c4c]](function (ecknld) {
  window['p$BN'] = ecknld, window['p$KNB'] && window['p$BN'] && (console[_[0x4e]](_[0x7a7b] + window['p$BN'][_[0x32e]]), window['p$KNB'](window['p$BN']), window['p$BN'] = null);
}), window[_[0x7a7c]] = 0x0, window['p$LUBKN'] = 0x0, window[_[0x7a7d]] = null, wx[_[0x7a7e]](function () {
  window['p$LUBKN']++;var dieklz = Date[_[0x53]]();(window[_[0x7a7c]] == 0x0 || dieklz - window[_[0x7a7c]] > 0x1d4c0) && (console[_[0x60]](_[0x7a7f]), wx[_[0x310b]]());if (window['p$LUBKN'] >= 0x2) {
    window['p$LUBKN'] = 0x0, console[_[0x7d]](_[0x7a80]), wx[_[0x7a81]]('0', 0x1);if (window['p$UK'] && window['p$UK'][_[0x459]]) window['p$UKN'](_[0x7a82], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});