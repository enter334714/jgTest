var v = wx.$d;
console[v[0x46]](v[0x3676]), window[v[0x6bff]], wx[v[0x6c00]](function (l1vf) {
  if (l1vf) {
    if (l1vf[v[0x3ca7]]) {
      var o389h = window[v[0x3942]][v[0x6c01]][v[0x3d02]](new RegExp(/\./, 'g'), '_'),
          h895 = l1vf[v[0x3ca7]],
          bx6qm = h895[v[0x48c9]](/(ddddddddd\/dddgame.js:)[0-9]{1,60}(:)/g);if (bx6qm) for (var wvcp1 = 0x0; wvcp1 < bx6qm[v[0x236b]]; wvcp1++) {
        var pl1;bx6qm[wvcp1] && 0x0 < bx6qm[wvcp1][v[0x236b]] && (pl1 = parseInt(bx6qm[wvcp1][v[0x3d02]](v[0x3677], '')[v[0x3d02]](':', '')), h895 = h895[v[0x3d02]](bx6qm[wvcp1], bx6qm[wvcp1][v[0x3d02]](':' + pl1 + ':', ':' + (pl1 - 0x2) + ':')));
      }h895 = (h895 = h895[v[0x3d02]](new RegExp(v[0x3678], 'g'), v[0x3679] + o389h + v[0x2e9c]))[v[0x3d02]](new RegExp(v[0x367a], 'g'), v[0x3679] + o389h + v[0x2e9c]), l1vf[v[0x3ca7]] = h895;
    }o389h = { 'id': window['D$GB'][v[0x6c02]], 'role': window['D$GB'][v[0xc09]], 'level': window['D$GB'][v[0x6c03]], 'user': window['D$GB'][v[0x6593]], 'version': window['D$GB'][v[0x37ef]], 'gamever': window[v[0x3942]][v[0x6c01]], 'cdn': window['D$GB'][v[0x3ca6]], 'serverid': window['D$GB'][v[0x6591]] ? window['D$GB'][v[0x6591]][v[0x4833]] : 0x0, 'systemInfo': window[v[0x6c04]], 'error': v[0x367b], 'stack': l1vf ? l1vf[v[0x3ca7]] : '' }, l1vf = JSON[v[0x3c9d]](o389h), (console[v[0x34]](v[0x367c] + l1vf), window[v[0x6bff]] && window[v[0x6bff]] == o389h[v[0x34]] || (window[v[0x6bff]] = o389h[v[0x34]], window['D$5G'](o389h)));
  }
});import 'dddmd5min.js';import 'dddzlibs.js';window[v[0x6c05]] = require(v[0x367d]);import 'dddindex.js';import 'dddlibsmin.js';import 'dddwxmini.js';import 'dddinitmin.js';console[v[0x46]](v[0x367e]), console[v[0x46]](v[0x367f]), D$5G0B({ 'title': v[0x3680] });var zwcpvf1 = { 'D$Q05GB': !0x0 };new window[v[0x6c06]](zwcpvf1), window[v[0x6c06]][v[0x5b]]['D$Q0B5G'](), window['D$Q5B0G'] && clearInterval(window['D$Q5B0G']), window['D$Q5B0G'] = null, window['D$Q0BG5'] = function (zkb7i, bdz67) {
  if (!zkb7i || !bdz67) return 0x0;zkb7i = zkb7i[v[0x37c2]]('.'), bdz67 = bdz67[v[0x37c2]]('.');var qbkn6 = Math[v[0x1109]](zkb7i[v[0x236b]], bdz67[v[0x236b]]);for (; zkb7i[v[0x236b]] < qbkn6;) zkb7i[v[0x37cd]]('0');for (; bdz67[v[0x236b]] < qbkn6;) bdz67[v[0x37cd]]('0');for (var mbxn = 0x0; mbxn < qbkn6; mbxn++) {
    var juizk = parseInt(zkb7i[mbxn]),
        a02xm = parseInt(bdz67[mbxn]);if (a02xm < juizk) return 0x1;if (juizk < a02xm) return -0x1;
  }return 0x0;
}, window[v[0x6c07]] = wx[v[0x6c08]]()[v[0x6c07]], console[v[0x3910]](v[0x3681] + window[v[0x6c07]]);var zt1v = wx[v[0x6c09]]();zt1v[v[0x6c0a]](function (g_2) {
  console[v[0x3910]](v[0x3682] + g_2[v[0x6c0b]]);
}), zt1v[v[0x6c0c]](function () {
  wx[v[0x6c0d]]({ 'title': v[0x3683], 'content': v[0x3684], 'showCancel': !0x1, 'success': function (t4fv1) {
      zt1v[v[0x6c0e]]();
    } });
}), zt1v[v[0x6c0f]](function () {
  console[v[0x3910]](v[0x3685]);
}), window['D$QG50B'] = function () {
  console[v[0x3910]](v[0x3686]);var yfp3cl = wx[v[0x6c10]]({ 'name': v[0x3687], 'success': function (o8h953) {
      console[v[0x3910]](v[0x3688]), console[v[0x3910]](o8h953), o8h953 && v[0x3689] == o8h953[v[0x65d3]] ? (window['D$B0'] = !0x0, window['D$BG50'](), window['D$BG05']()) : setTimeout(function () {
        window['D$QG50B']();
      }, 0x1f4);
    }, 'fail': function (cpfy3l) {
      console[v[0x3910]](v[0x368a]), console[v[0x3910]](cpfy3l), setTimeout(function () {
        window['D$QG50B']();
      }, 0x1f4);
    } });yfp3cl && yfp3cl[v[0x6c11]](p9ylc => {});
}, window['D$QG05B'] = function () {
  console[v[0x3910]](v[0x368b]);var er$t = wx[v[0x6c10]]({ 'name': v[0x368c], 'success': function (h8oju) {
      console[v[0x3910]](v[0x368d]), console[v[0x3910]](h8oju), h8oju && v[0x3689] == h8oju[v[0x65d3]] ? (window['D$G0B'] = !0x0, window['D$BG50'](), window['D$BG05']()) : setTimeout(function () {
        window['D$QG05B']();
      }, 0x1f4);
    }, 'fail': function (cfply1) {
      console[v[0x3910]](v[0x368e]), console[v[0x3910]](cfply1), setTimeout(function () {
        window['D$QG05B']();
      }, 0x1f4);
    } });er$t && er$t[v[0x6c11]](uzkidj => {});
}, window[v[0x6c12]] = function () {
  0x0 <= window['D$Q0BG5'](window[v[0x6c07]], v[0x368f]) ? (console[v[0x3910]](v[0x3690] + window[v[0x6c07]] + v[0x3691]), window['D$G5'](), window['D$QG50B'](), window['D$QG05B']()) : (window['D$GB5'](v[0x3692] + window[v[0x6c07]]), wx[v[0x6c0d]]({ 'title': v[0xf11], 'content': v[0x3693] }));
}, window[v[0x6c04]] = '', wx[v[0x6c13]]({ 'success'(hl89) {
    window[v[0x6c04]] = v[0x3694] + hl89[v[0x6c14]] + v[0x3695] + hl89[v[0x6c15]] + v[0x3696] + hl89[v[0x2df8]] + v[0x3697] + hl89[v[0x3909]] + v[0x3698] + hl89[v[0x6587]] + v[0x3699] + hl89[v[0x6c07]] + v[0x369a] + hl89[v[0x4519]], console[v[0x3910]](window[v[0x6c04]]), console[v[0x3910]](v[0x369b] + hl89[v[0x6c16]] + v[0x369c] + hl89[v[0x6c17]] + v[0x369d] + hl89[v[0x6c18]] + v[0x369e] + hl89[v[0x6c19]] + v[0x369f] + hl89[v[0x6c1a]] + v[0x36a0] + hl89[v[0x6c1b]] + v[0x36a1] + (hl89[v[0x6c1c]] ? hl89[v[0x6c1c]][v[0x5e]] + ',' + hl89[v[0x6c1c]][v[0x3080]] + ',' + hl89[v[0x6c1c]][v[0x1686]] + ',' + hl89[v[0x6c1c]][v[0x1065]] : ''));var pfcvw1 = hl89[v[0x3909]] ? hl89[v[0x3909]][v[0x492f]]() : '',
        fwcvp1 = hl89[v[0x6c15]] ? hl89[v[0x6c15]][v[0x492f]]()[v[0x3d02]]('\x20', '') : '';window['D$GB'][v[0x3920]] = -0x1 != pfcvw1[v[0x37f9]](v[0x36a2]), window['D$GB'][v[0x47f4]] = -0x1 != pfcvw1[v[0x37f9]](v[0x3610]), window['D$GB'][v[0x6c1d]] = -0x1 != pfcvw1[v[0x37f9]](v[0x36a2]) || -0x1 != pfcvw1[v[0x37f9]](v[0x3610]), window['D$GB'][v[0x650b]] = -0x1 != pfcvw1[v[0x37f9]](v[0x36a3]) || -0x1 != pfcvw1[v[0x37f9]](v[0x36a4]), window['D$GB'][v[0x6c1e]] = hl89[v[0x6587]] ? hl89[v[0x6587]][v[0x492f]]() : '', window['D$GB']['D$Q5G0B'] = !0x1, -(window['D$GB']['D$Q5GB0'] = 0x1) != pfcvw1[v[0x37f9]](v[0x3610]) ? 0x18 <= hl89[v[0x4519]] ? window['D$GB']['D$Q5GB0'] = 0x2 : window['D$GB']['D$Q5GB0'] = 0x1 : -0x1 == pfcvw1[v[0x37f9]](v[0x36a2]) || !(hl89[v[0x4519]] && 0x14 <= hl89[v[0x4519]] || -0x1 == fwcvp1[v[0x37f9]](v[0x36a5]) && -0x1 == fwcvp1[v[0x37f9]](v[0x36a6]) && -0x1 == fwcvp1[v[0x37f9]](v[0x36a7]) && -0x1 == fwcvp1[v[0x37f9]](v[0x36a8]) && -0x1 == fwcvp1[v[0x37f9]](v[0x36a9])) ? window['D$GB']['D$Q5GB0'] = 0x1 : window['D$GB']['D$Q5GB0'] = 0x2, console[v[0x3910]](v[0x36aa] + window['D$GB']['D$Q5G0B'] + v[0x36ab] + window['D$GB']['D$Q5GB0']);
  } }), wx[v[0x6c1f]]({ 'success': function (qm6n) {
    console[v[0x3910]](v[0x36ac] + qm6n[v[0xbfe]] + v[0x36ad] + qm6n[v[0x6c20]]);
  } }), wx[v[0x6c21]]({ 'success': function (f41twv) {
    console[v[0x3910]](v[0x36ae] + f41twv[v[0x6c22]]);
  } }), wx[v[0x6c23]]({ 'keepScreenOn': !0x0 }), wx[v[0x6c24]](function (tev4$w) {
  console[v[0x3910]](v[0x36ae] + tev4$w[v[0x6c22]] + v[0x36af] + tev4$w[v[0x6c25]]);
}), wx[v[0x6c26]](function (v4$ewt) {
  window['D$B50'] = v4$ewt, window['D$B05'] && window['D$B50'] && (console[v[0x46]](v[0x36b0] + window['D$B50'][v[0x113]]), window['D$B05'](window['D$B50']), window['D$B50'] = null);
}), window['D$QGB50'] = 0x0, window[v[0x6c27]] = null, wx[v[0x6c28]](function () {
  window['D$QGB50']++, wx[v[0x4869]](), 0x2 <= window['D$QGB50'] && (window['D$QGB50'] = 0x0, console[v[0x34]](v[0x36b1]), wx[v[0x6c29]]('0', 0x1), window['D$GB'] && window['D$GB'][v[0x3920]] && window['D$GB5'](v[0x36b2]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});