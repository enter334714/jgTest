var v = wx.$d;
console[v[0xb]](v[0x35cf]), window[v[0x6b15]], wx[v[0x6b16]](function (v4qm) {
  if (v4qm) {
    if (v4qm[v[0x3bf5]]) {
      var airjc8 = window[v[0x388e]][v[0x6b17]][v[0x3c4e]](new RegExp(/\./, 'g'), '_'),
          vfq8i3t = v4qm[v[0x3bf5]],
          l7zx_p = vfq8i3t[v[0x480a]](/(subPackage\/dddgame.js:)[0-9]{1,60}(:)/g);if (l7zx_p) for (var hd96bu2 = 0x0; hd96bu2 < l7zx_p[v[0x22df]]; hd96bu2++) {
        var yarko;l7zx_p[hd96bu2] && 0x0 < l7zx_p[hd96bu2][v[0x22df]] && (yarko = parseInt(l7zx_p[hd96bu2][v[0x3c4e]](v[0x35d0], '')[v[0x3c4e]](':', '')), vfq8i3t = vfq8i3t[v[0x3c4e]](l7zx_p[hd96bu2], l7zx_p[hd96bu2][v[0x3c4e]](':' + yarko + ':', ':' + (yarko - 0x2) + ':')));
      }vfq8i3t = (vfq8i3t = vfq8i3t[v[0x3c4e]](new RegExp(v[0x35d1], 'g'), v[0x35d2] + airjc8 + v[0x2ddc]))[v[0x3c4e]](new RegExp(v[0x35d3], 'g'), v[0x35d2] + airjc8 + v[0x2ddc]), v4qm[v[0x3bf5]] = vfq8i3t;
    }airjc8 = { 'id': window['D$W9'][v[0x6b18]], 'role': window['D$W9'][v[0xbaf]], 'level': window['D$W9'][v[0x6b19]], 'user': window['D$W9'][v[0x64b4]], 'version': window['D$W9'][v[0x373b]], 'gamever': window[v[0x388e]][v[0x6b17]], 'cdn': window['D$W9'][v[0x3bf4]], 'serverid': window['D$W9'][v[0x64b2]] ? window['D$W9'][v[0x64b2]][v[0x477a]] : 0x0, 'systemInfo': window[v[0x6b1a]], 'error': v[0x35d4], 'stack': v4qm ? v4qm[v[0x3bf5]] : '' }, v4qm = JSON[v[0x3beb]](airjc8), (console[v[0x9]](v[0x35d5] + v4qm), window[v[0x6b15]] && window[v[0x6b15]] == airjc8[v[0x9]] || (window[v[0x6b15]] = airjc8[v[0x9]], window['D$PW'](airjc8)));
  }
});import 'dddmd5min.js';import 'dddzlibs.js';window[v[0x6b1b]] = require(v[0x35d6]);import 'dddindex.js';import 'dddlibsmin.js';import 'dddwxmini.js';import 'dddinitmin.js';console[v[0xb]](v[0x35d7]), console[v[0xb]](v[0x35d8]), D$PWN9({ 'title': v[0x35d9] });var zrykgcaj = { 'D$ZNPW9': !0x0 };new window[v[0x6b1c]](zrykgcaj), window[v[0x6b1c]][v[0x24]]['D$ZN9PW'](), window['D$ZP9NW'] && clearInterval(window['D$ZP9NW']), window['D$ZP9NW'] = null, window['D$ZN9WP'] = function (yko5ej, _nx0zlp) {
  if (!yko5ej || !_nx0zlp) return 0x0;yko5ej = yko5ej[v[0x370e]]('.'), _nx0zlp = _nx0zlp[v[0x370e]]('.');var eok5yj$ = Math[v[0x1096]](yko5ej[v[0x22df]], _nx0zlp[v[0x22df]]);for (; yko5ej[v[0x22df]] < eok5yj$;) yko5ej[v[0x3719]]('0');for (; _nx0zlp[v[0x22df]] < eok5yj$;) _nx0zlp[v[0x3719]]('0');for (var wp_7znx = 0x0; wp_7znx < eok5yj$; wp_7znx++) {
    var lpzn7x_ = parseInt(yko5ej[wp_7znx]),
        k5yo$rj = parseInt(_nx0zlp[wp_7znx]);if (k5yo$rj < lpzn7x_) return 0x1;if (lpzn7x_ < k5yo$rj) return -0x1;
  }return 0x0;
}, window[v[0x6b1d]] = wx[v[0x6b1e]]()[v[0x6b1d]], console[v[0x385c]](v[0x35da] + window[v[0x6b1d]]);var zq3if8vt = wx[v[0x6b1f]]();zq3if8vt[v[0x6b20]](function (d96b2) {
  console[v[0x385c]](v[0x35db] + d96b2[v[0x6b21]]);
}), zq3if8vt[v[0x6b22]](function () {
  wx[v[0x6b23]]({ 'title': v[0x35dc], 'content': v[0x35dd], 'showCancel': !0x1, 'success': function (z7pwhx) {
      zq3if8vt[v[0x6b24]]();
    } });
}), zq3if8vt[v[0x6b25]](function () {
  console[v[0x385c]](v[0x35de]);
}), window['D$ZWPN9'] = function () {
  console[v[0x385c]](v[0x35df]);var h6bwdp = wx[v[0x6b26]]({ 'name': v[0x35e0], 'success': function (hw6d2b9) {
      console[v[0x385c]](v[0x35e1]), console[v[0x385c]](hw6d2b9), hw6d2b9 && v[0x35e2] == hw6d2b9[v[0x64f1]] ? (window['D$9N'] = !0x0, window['D$9WPN'](), window['D$9WNP']()) : setTimeout(function () {
        window['D$ZWPN9']();
      }, 0x1f4);
    }, 'fail': function (f413qtm) {
      console[v[0x385c]](v[0x35e3]), console[v[0x385c]](f413qtm), setTimeout(function () {
        window['D$ZWPN9']();
      }, 0x1f4);
    } });h6bwdp && h6bwdp[v[0x6b27]](ph7z => {});
}, window['D$ZWNP9'] = function () {
  console[v[0x385c]](v[0x35e4]);var lke05o = wx[v[0x6b26]]({ 'name': v[0x35e5], 'success': function (lzpxn7) {
      console[v[0x385c]](v[0x35e6]), console[v[0x385c]](lzpxn7), lzpxn7 && v[0x35e2] == lzpxn7[v[0x64f1]] ? (window['D$WN9'] = !0x0, window['D$9WPN'](), window['D$9WNP']()) : setTimeout(function () {
        window['D$ZWNP9']();
      }, 0x1f4);
    }, 'fail': function (qt3mf4) {
      console[v[0x385c]](v[0x35e7]), console[v[0x385c]](qt3mf4), setTimeout(function () {
        window['D$ZWNP9']();
      }, 0x1f4);
    } });lke05o && lke05o[v[0x6b27]]($5yeok => {});
}, window[v[0x6b28]] = function () {
  0x0 <= window['D$ZN9WP'](window[v[0x6b1d]], v[0x35e8]) ? (console[v[0x385c]](v[0x35e9] + window[v[0x6b1d]] + v[0x35ea]), window['D$WP'](), window['D$ZWPN9'](), window['D$ZWNP9']()) : (window['D$W9P'](v[0x35eb] + window[v[0x6b1d]]), wx[v[0x6b23]]({ 'title': v[0xea0], 'content': v[0x35ec] }));
}, window[v[0x6b1a]] = '', wx[v[0x6b29]]({ 'success'(pwzb7) {
    window[v[0x6b1a]] = v[0x35ed] + pwzb7[v[0x6b2a]] + v[0x35ee] + pwzb7[v[0x6b2b]] + v[0x35ef] + pwzb7[v[0x2d38]] + v[0x35f0] + pwzb7[v[0x3855]] + v[0x35f1] + pwzb7[v[0x64a8]] + v[0x35f2] + pwzb7[v[0x6b1d]] + v[0x35f3] + pwzb7[v[0x4460]], console[v[0x385c]](window[v[0x6b1a]]), console[v[0x385c]](v[0x35f4] + pwzb7[v[0x6b2c]] + v[0x35f5] + pwzb7[v[0x6b2d]] + v[0x35f6] + pwzb7[v[0x6b2e]] + v[0x35f7] + pwzb7[v[0x6b2f]] + v[0x35f8] + pwzb7[v[0x6b30]] + v[0x35f9] + pwzb7[v[0x6b31]] + v[0x35fa] + (pwzb7[v[0x6b32]] ? pwzb7[v[0x6b32]][v[0x27]] + ',' + pwzb7[v[0x6b32]][v[0x2fbc]] + ',' + pwzb7[v[0x6b32]][v[0x1611]] + ',' + pwzb7[v[0x6b32]][v[0xff3]] : ''));var rjigacy = pwzb7[v[0x3855]] ? pwzb7[v[0x3855]][v[0x4871]]() : '',
        qcvgi8f = pwzb7[v[0x6b2b]] ? pwzb7[v[0x6b2b]][v[0x4871]]()[v[0x3c4e]]('\x20', '') : '';window['D$W9'][v[0x386c]] = -0x1 != rjigacy[v[0x3745]](v[0x35fb]), window['D$W9'][v[0x473b]] = -0x1 != rjigacy[v[0x3745]](v[0x3569]), window['D$W9'][v[0x6b33]] = -0x1 != rjigacy[v[0x3745]](v[0x35fb]) || -0x1 != rjigacy[v[0x3745]](v[0x3569]), window['D$W9'][v[0x6429]] = -0x1 != rjigacy[v[0x3745]](v[0x35fc]) || -0x1 != rjigacy[v[0x3745]](v[0x35fd]), window['D$W9'][v[0x6b34]] = pwzb7[v[0x64a8]] ? pwzb7[v[0x64a8]][v[0x4871]]() : '', window['D$W9']['D$ZPWN9'] = !0x1, -(window['D$W9']['D$ZPW9N'] = 0x1) != rjigacy[v[0x3745]](v[0x3569]) ? 0x18 <= pwzb7[v[0x4460]] ? window['D$W9']['D$ZPW9N'] = 0x2 : window['D$W9']['D$ZPW9N'] = 0x1 : -0x1 == rjigacy[v[0x3745]](v[0x35fb]) || !(pwzb7[v[0x4460]] && 0x14 <= pwzb7[v[0x4460]] || -0x1 == qcvgi8f[v[0x3745]](v[0x35fe]) && -0x1 == qcvgi8f[v[0x3745]](v[0x35ff]) && -0x1 == qcvgi8f[v[0x3745]](v[0x3600]) && -0x1 == qcvgi8f[v[0x3745]](v[0x3601]) && -0x1 == qcvgi8f[v[0x3745]](v[0x3602])) ? window['D$W9']['D$ZPW9N'] = 0x1 : window['D$W9']['D$ZPW9N'] = 0x2, console[v[0x385c]](v[0x3603] + window['D$W9']['D$ZPWN9'] + v[0x3604] + window['D$W9']['D$ZPW9N']);
  } }), wx[v[0x6b35]]({ 'success': function (cgfv8i) {
    console[v[0x385c]](v[0x3605] + cgfv8i[v[0xba4]] + v[0x3606] + cgfv8i[v[0x6b36]]);
  } }), wx[v[0x6b37]]({ 'success': function (d7ph6b) {
    console[v[0x385c]](v[0x3607] + d7ph6b[v[0x6b38]]);
  } }), wx[v[0x6b39]]({ 'keepScreenOn': !0x0 }), wx[v[0x6b3a]](function (xlz_pn) {
  console[v[0x385c]](v[0x3607] + xlz_pn[v[0x6b38]] + v[0x3608] + xlz_pn[v[0x6b3b]]);
}), wx[v[0x6b3c]](function (c8avfgi) {
  window['D$9PN'] = c8avfgi, window['D$9NP'] && window['D$9PN'] && (console[v[0xb]](v[0x3609] + window['D$9PN'][v[0xdc]]), window['D$9NP'](window['D$9PN']), window['D$9PN'] = null);
}), window['D$ZW9PN'] = 0x0, window[v[0x6b3d]] = null, wx[v[0x6b3e]](function () {
  window['D$ZW9PN']++, wx[v[0x47aa]](), 0x2 <= window['D$ZW9PN'] && (window['D$ZW9PN'] = 0x0, console[v[0x9]](v[0x360a]), wx[v[0x6b3f]]('0', 0x1), window['D$W9'] && window['D$W9'][v[0x386c]] && window['D$W9P'](v[0x360b]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});