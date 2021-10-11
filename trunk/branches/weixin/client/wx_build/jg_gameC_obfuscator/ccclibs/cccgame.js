var p = wx.$h;
console[p[60082]](p[87283]), window[p[87284]], wx[p[87285]](function (wpdb) {
  if (wpdb) {
    if (wpdb[p[64509]]) {
      var s3rd8 = window[p[60577]][p[87286]][p[64685]](new RegExp(/\./, 'g'), '_'),
          s38y = wpdb[p[64509]],
          qk62a4 = s38y[p[71591]](/(cccccccc\/cccgame.js:)[0-9]{1,60}(:)/g);if (qk62a4) for (var wdcs = 0x0; wdcs < qk62a4[p[60016]]; wdcs++) {
        var m1$_ix;qk62a4[wdcs] && 0x0 < qk62a4[wdcs][p[60016]] && (m1$_ix = parseInt(qk62a4[wdcs][p[64685]](p[87287], '')[p[64685]](':', '')), s38y = s38y[p[64685]](qk62a4[wdcs], qk62a4[wdcs][p[64685]](':' + m1$_ix + ':', ':' + (m1$_ix - 0x2) + ':')));
      }s38y = (s38y = s38y[p[64685]](new RegExp(p[87288], 'g'), p[87289] + s3rd8 + p[84297]))[p[64685]](new RegExp(p[87290], 'g'), p[87289] + s3rd8 + p[84297]), wpdb[p[64509]] = s38y;
    }s3rd8 = { 'id': window[p[87291]][p[87292]], 'role': window[p[87291]][p[64627]], 'level': window[p[87291]][p[87293]], 'user': window[p[87291]][p[84198]], 'version': window[p[87291]][p[60109]], 'gamever': window[p[60577]][p[87286]], 'cdn': window[p[87291]][p[64507]], 'serverid': window[p[87291]][p[84193]] ? window[p[87291]][p[84193]][p[71180]] : 0x0, 'systemInfo': window[p[87294]], 'error': p[87295], 'stack': wpdb ? wpdb[p[64509]] : '' }, wpdb = JSON[p[64495]](s3rd8), (console[p[60143]](p[87296] + wpdb), window[p[87284]] && window[p[87284]] == s3rd8[p[60143]] || (window[p[87284]] = s3rd8[p[60143]], window[p[87297]](s3rd8)));
  }
});import 'cccmd5min.js';import 'ccczlibs.js';window[p[87298]] = require(p[87299]);import 'cccindex.js';import 'ccclibsmin.js';import 'cccwxmini.js';import 'cccinitmin.js';console[p[60082]](p[87300]), console[p[60082]](p[87301]), wxShowLoading({ 'title': p[87302] });var wxData = { 'showLoadingBtn': !0x0 };new window[p[87303]](wxData), window[p[87303]][p[60166]][p[87304]](), window[p[87305]] && clearInterval(window[p[87305]]), window[p[87305]] = null, window[p[87306]] = function (crnwd, zfjx) {
  if (!crnwd || !zfjx) return 0x0;crnwd = crnwd[p[60018]]('.'), zfjx = zfjx[p[60018]]('.');var sncrdw = Math[p[60871]](crnwd[p[60016]], zfjx[p[60016]]);for (; crnwd[p[60016]] < sncrdw;) crnwd[p[60033]]('0');for (; zfjx[p[60016]] < sncrdw;) zfjx[p[60033]]('0');for (var i_vom = 0x0; i_vom < sncrdw; i_vom++) {
    var dbwnrs = parseInt(crnwd[i_vom]),
        ov50 = parseInt(zfjx[i_vom]);if (ov50 < dbwnrs) return 0x1;if (dbwnrs < ov50) return -0x1;
  }return 0x0;
}, window[p[87307]] = wx[p[87308]]()[p[87307]], console[p[60500]](p[87309] + window[p[87307]]);var a_pnbws = wx[p[87310]]();a_pnbws[p[87311]](function ($z_xt1) {
  console[p[60500]](p[87312] + $z_xt1[p[87313]]);
}), a_pnbws[p[87314]](function () {
  wx[p[87315]]({ 'title': p[87316], 'content': p[87317], 'showCancel': !0x1, 'success': function (bsdp) {
      a_pnbws[p[87318]]();
    } });
}), a_pnbws[p[87319]](function () {
  console[p[60500]](p[87320]);
}), window[p[87321]] = function () {
  console[p[60500]](p[87322]);var p7dn = wx[p[87323]]({ 'name': p[87324], 'success': function (fx2j) {
      console[p[60500]](p[87325]), console[p[60500]](fx2j), fx2j && p[87326] == fx2j[p[84373]] ? (window[p[87327]] = !0x0, window[p[87328]](), window[p[87329]]()) : setTimeout(function () {
        window[p[87321]]();
      }, 0x1f4);
    }, 'fail': function (dnpwb) {
      console[p[60500]](p[87330]), console[p[60500]](dnpwb), setTimeout(function () {
        window[p[87321]]();
      }, 0x1f4);
    } });p7dn && p7dn[p[87331]](nsbpwd => {});
}, window[p[87332]] = function () {
  console[p[60500]](p[87333]);var jtx1z$ = wx[p[87323]]({ 'name': p[87334], 'success': function (sncdw) {
      console[p[60500]](p[87335]), console[p[60500]](sncdw), sncdw && p[87326] == sncdw[p[84373]] ? (window[p[87336]] = !0x0, window[p[87328]](), window[p[87329]]()) : setTimeout(function () {
        window[p[87332]]();
      }, 0x1f4);
    }, 'fail': function (ftjz2k) {
      console[p[60500]](p[87337]), console[p[60500]](ftjz2k), setTimeout(function () {
        window[p[87332]]();
      }, 0x1f4);
    } });jtx1z$ && jtx1z$[p[87331]](a6q4h => {});
}, window[p[87338]] = function () {
  0x0 <= window[p[87306]](window[p[87307]], p[87339]) ? (console[p[60500]](p[87340] + window[p[87307]] + p[87341]), window[p[87342]](), window[p[87321]](), window[p[87332]]()) : (window[p[87343]](p[87344] + window[p[87307]]), wx[p[87315]]({ 'title': p[66365], 'content': p[87345] }));
}, window[p[87294]] = '', wx[p[87346]]({ 'success'(i1m_o) {
    window[p[87294]] = p[87347] + i1m_o[p[87348]] + p[87349] + i1m_o[p[87350]] + p[87351] + i1m_o[p[64698]] + p[87352] + i1m_o[p[60493]] + p[87353] + i1m_o[p[84171]] + p[87354] + i1m_o[p[87307]] + p[87355] + i1m_o[p[69093]], console[p[60500]](window[p[87294]]), console[p[60500]](p[87356] + i1m_o[p[87357]] + p[87358] + i1m_o[p[87359]] + p[87360] + i1m_o[p[87361]] + p[87362] + i1m_o[p[87363]] + p[87364] + i1m_o[p[87365]] + p[87366] + i1m_o[p[87367]] + p[87368] + (i1m_o[p[87369]] ? i1m_o[p[87369]][p[60344]] + ',' + i1m_o[p[87369]][p[61293]] + ',' + i1m_o[p[87369]][p[61295]] + ',' + i1m_o[p[87369]][p[61294]] : ''));var c3ys8 = i1m_o[p[60493]] ? i1m_o[p[60493]][p[71843]]() : '',
        g9o5v0 = i1m_o[p[87350]] ? i1m_o[p[87350]][p[71843]]()[p[64685]]('\x20', '') : '';window[p[87291]][p[60531]] = -0x1 != c3ys8[p[60124]](p[87370]), window[p[87291]][p[71009]] = -0x1 != c3ys8[p[60124]](p[87205]), window[p[87291]][p[87371]] = -0x1 != c3ys8[p[60124]](p[87370]) || -0x1 != c3ys8[p[60124]](p[87205]), window[p[87291]][p[83832]] = -0x1 != c3ys8[p[60124]](p[87206]) || -0x1 != c3ys8[p[60124]](p[87372]), window[p[87291]][p[87373]] = i1m_o[p[84171]] ? i1m_o[p[84171]][p[71843]]() : '', window[p[87291]][p[87374]] = !0x1, window[p[87291]][p[87375]] = 0x2, -0x1 != c3ys8[p[60124]](p[87205]) ? 0x18 <= i1m_o[p[69093]] ? window[p[87291]][p[87375]] = 0x3 : window[p[87291]][p[87375]] = 0x2 : -0x1 == c3ys8[p[60124]](p[87370]) || !(i1m_o[p[69093]] && 0x14 <= i1m_o[p[69093]] || -0x1 == g9o5v0[p[60124]](p[87376]) && -0x1 == g9o5v0[p[60124]](p[87377]) && -0x1 == g9o5v0[p[60124]](p[87378]) && -0x1 == g9o5v0[p[60124]](p[87379]) && -0x1 == g9o5v0[p[60124]](p[87380])) ? window[p[87291]][p[87375]] = 0x2 : window[p[87291]][p[87375]] = 0x3, console[p[60500]](p[87381] + window[p[87291]][p[87374]] + p[87382] + window[p[87291]][p[87375]]);
  } }), wx[p[87383]]({ 'success': function (z_1tx) {
    console[p[60500]](p[87384] + z_1tx[p[64603]] + p[87385] + z_1tx[p[87386]]);
  } }), wx[p[87387]]({ 'success': function (_moiv1) {
    console[p[60500]](p[87388] + _moiv1[p[87389]]);
  } }), wx[p[87390]]({ 'keepScreenOn': !0x0 }), wx[p[87391]](function (o5g9) {
  console[p[60500]](p[87388] + o5g9[p[87389]] + p[87392] + o5g9[p[87393]]);
}), wx[p[70529]](function (ztfj2x) {
  window[p[87394]] = ztfj2x, window[p[87395]] && window[p[87394]] && (console[p[60082]](p[87396] + window[p[87394]][p[60794]]), window[p[87395]](window[p[87394]]), window[p[87394]] = null);
}), window[p[87397]] = 0x0, window[p[87398]] = null, wx[p[87399]](function () {
  window[p[87397]]++, wx[p[71395]](), 0x2 <= window[p[87397]] && (window[p[87397]] = 0x0, console[p[60143]](p[87400]), wx[p[87401]]('0', 0x1), window[p[87291]] && window[p[87291]][p[60531]] && window[p[87343]](p[87402]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});