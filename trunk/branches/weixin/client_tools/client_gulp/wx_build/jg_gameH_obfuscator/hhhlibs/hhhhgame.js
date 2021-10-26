var O = wx.$C;
console[O[257]](O[27617]), window[O[27618]], wx[O[27619]](function (aky3) {
  if (aky3) {
    if (aky3[O[4562]]) {
      var n6ld1 = window[O[720]][O[27620]][O[4736]](new RegExp(/\./, 'g'), '_'),
          v5j_z = aky3[O[4562]],
          t0ugsp = v5j_z[O[11669]](/(hhhhhhhh\/hhhhgame.js:)[0-9]{1,60}(:)/g);if (t0ugsp) for (var zehf5v = 0x0; zehf5v < t0ugsp[O[192]]; zehf5v++) {
        if (t0ugsp[zehf5v] && t0ugsp[zehf5v][O[192]] > 0x0) {
          var u0tw7 = parseInt(t0ugsp[zehf5v][O[4736]](O[27621], '')[O[4736]](':', ''));v5j_z = v5j_z[O[4736]](t0ugsp[zehf5v], t0ugsp[zehf5v][O[4736]](':' + u0tw7 + ':', ':' + (u0tw7 - 0x2) + ':'));
        }
      }v5j_z = v5j_z[O[4736]](new RegExp(O[27622], 'g'), O[27623] + n6ld1 + O[24384]), v5j_z = v5j_z[O[4736]](new RegExp(O[27624], 'g'), O[27623] + n6ld1 + O[24384]), aky3[O[4562]] = v5j_z;
    }var tpsc0g = { 'id': window['$h$G'][O[27625]], 'role': window['$h$G'][O[4679]], 'level': window['$h$G'][O[27626]], 'user': window['$h$G'][O[24287]], 'version': window['$h$G'][O[280]], 'gamever': window[O[720]][O[27620]], 'cdn': window['$h$G'][O[4561]], 'serverid': window['$h$G'][O[24282]] ? window['$h$G'][O[24282]][O[160]] : 0x0, 'systemInfo': window[O[27627]], 'error': O[27628], 'stack': aky3 ? aky3[O[4562]] : '' },
        utw02s = JSON[O[4547]](tpsc0g);console[O[304]](O[27629] + utw02s), (!window[O[27618]] || window[O[27618]] != tpsc0g[O[304]]) && (window[O[27618]] = tpsc0g[O[304]], window['$h5$'](tpsc0g));
  }
});import 'hhhmd5min.js';import 'hhhzlibs.js';window[O[27630]] = require(O[27631]);import 'hhhindex.js';import 'hhhlibsmin.js';import 'hhhwxmini.js';import 'hhhinitmin.js';console[O[257]](O[27632]), console[O[257]](O[27633]), $h5$ZG({ 'title': O[27634] });var h_dln18 = { '$hCZ5$G': !![] };new window[O[27635]](h_dln18), window[O[27635]][O[327]]['$hCZG5$']();if (window['$hC5GZ$']) clearInterval(window['$hC5GZ$']);window['$hC5GZ$'] = null, window['$hCZG$5'] = function ($rigpc, nd81) {
  if (!$rigpc || !nd81) return 0x0;$rigpc = $rigpc[O[194]]('.'), nd81 = nd81[O[194]]('.');const l8y43 = Math[O[1015]]($rigpc[O[192]], nd81[O[192]]);while ($rigpc[O[192]] < l8y43) {
    $rigpc[O[208]]('0');
  }while (nd81[O[192]] < l8y43) {
    nd81[O[208]]('0');
  }for (var scg0p$ = 0x0; scg0p$ < l8y43; scg0p$++) {
    const zqfmh = parseInt($rigpc[scg0p$]),
          s$rgcp = parseInt(nd81[scg0p$]);if (zqfmh > s$rgcp) return 0x1;else {
      if (zqfmh < s$rgcp) return -0x1;
    }
  }return 0x0;
}, window[O[27636]] = wx[O[27637]]()[O[27636]], console[O[644]](O[27638] + window[O[27636]]);var h_t0gpsc = wx[O[27639]]();h_t0gpsc[O[27640]](function (no18kl) {
  console[O[644]](O[27641] + no18kl[O[27642]]);
}), h_t0gpsc[O[27643]](function () {
  wx[O[27644]]({ 'title': O[27645], 'content': O[27646], 'showCancel': ![], 'success': function (mqxd96) {
      h_t0gpsc[O[27647]]();
    } });
}), h_t0gpsc[O[27648]](function () {
  console[O[644]](O[27649]);
}), window['$hC$5ZG'] = function () {
  console[O[644]](O[27650]);var sug = wx[O[27651]]({ 'name': O[27652], 'success': function (fqhmze) {
      console[O[644]](O[27653]), console[O[644]](fqhmze), fqhmze && fqhmze[O[24457]] == O[27654] ? (window['$hGZ'] = !![], window['$hG$5Z'](), window['$hG$Z5']()) : setTimeout(function () {
        window['$hC$5ZG']();
      }, 0x1f4);
    }, 'fail': function (hfzem5) {
      console[O[644]](O[27655]), console[O[644]](hfzem5), setTimeout(function () {
        window['$hC$5ZG']();
      }, 0x1f4);
    } });sug && sug[O[27656]](hm9fxq => {});
}, window['$hC$Z5G'] = function () {
  console[O[644]](O[27657]);var pcgir$ = wx[O[27651]]({ 'name': O[27658], 'success': function (gct0ps) {
      console[O[644]](O[27659]), console[O[644]](gct0ps), gct0ps && gct0ps[O[24457]] == O[27654] ? (window['$h$ZG'] = !![], window['$hG$5Z'](), window['$hG$Z5']()) : setTimeout(function () {
        window['$hC$Z5G']();
      }, 0x1f4);
    }, 'fail': function (b2wu7a) {
      console[O[644]](O[27660]), console[O[644]](b2wu7a), setTimeout(function () {
        window['$hC$Z5G']();
      }, 0x1f4);
    } });pcgir$ && pcgir$[O[27656]](x6n1d => {});
}, window[O[27661]] = function () {
  window['$hCZG$5'](window[O[27636]], O[27662]) >= 0x0 ? (console[O[644]](O[27663] + window[O[27636]] + O[27664]), window['$h$5'](), window['$hC$5ZG'](), window['$hC$Z5G']()) : (window['$h$G5'](O[27665], window[O[27636]]), wx[O[27644]]({ 'title': O[6441], 'content': O[27666] }));
}, window[O[27627]] = '', wx[O[27667]]({ 'success'(ejv) {
    window[O[27627]] = O[27668] + ejv[O[27669]] + O[27670] + ejv[O[27671]] + O[27672] + ejv[O[4749]] + O[27673] + ejv[O[637]] + O[27674] + ejv[O[24260]] + O[27675] + ejv[O[27636]] + O[27676] + ejv[O[9159]], console[O[644]](window[O[27627]]), console[O[644]](O[27677] + ejv[O[27678]] + O[27679] + ejv[O[27680]] + O[27681] + ejv[O[27682]] + O[27683] + ejv[O[27684]] + O[27685] + ejv[O[27686]] + O[27687] + ejv[O[27688]] + O[27689] + (ejv[O[27690]] ? ejv[O[27690]][O[496]] + ',' + ejv[O[27690]][O[1376]] + ',' + ejv[O[27690]][O[1378]] + ',' + ejv[O[27690]][O[1377]] : ''));var $cg0 = ejv[O[637]] ? ejv[O[637]][O[11920]]() : '',
        aw27ub = ejv[O[27671]] ? ejv[O[27671]][O[11920]]()[O[4736]]('\x20', '') : '';window['$h$G'][O[674]] = $cg0[O[294]](O[27691]) != -0x1, window['$h$G'][O[11074]] = $cg0[O[294]](O[17]) != -0x1, window['$h$G'][O[27692]] = $cg0[O[294]](O[27691]) != -0x1 || $cg0[O[294]](O[17]) != -0x1, window['$h$G'][O[23979]] = $cg0[O[294]](O[27693]) != -0x1 || $cg0[O[294]](O[27694]) != -0x1, window['$h$G'][O[27695]] = ejv[O[24260]] ? ejv[O[24260]][O[11920]]() : '', window['$h$G']['$hC5$ZG'] = ![], window['$h$G']['$hC5$GZ'] = 0x2;if ($cg0[O[294]](O[17]) != -0x1) {
      if (ejv[O[9159]] >= 0x18) window['$h$G']['$hC5$GZ'] = 0x3;else window['$h$G']['$hC5$GZ'] = 0x2;
    } else {
      if ($cg0[O[294]](O[27691]) != -0x1) {
        if (ejv[O[9159]] && ejv[O[9159]] >= 0x14) window['$h$G']['$hC5$GZ'] = 0x3;else {
          if (aw27ub[O[294]](O[27696]) != -0x1 || aw27ub[O[294]](O[27697]) != -0x1 || aw27ub[O[294]](O[27698]) != -0x1 || aw27ub[O[294]](O[27699]) != -0x1 || aw27ub[O[294]](O[27700]) != -0x1) window['$h$G']['$hC5$GZ'] = 0x2;else window['$h$G']['$hC5$GZ'] = 0x3;
        }
      } else window['$h$G']['$hC5$GZ'] = 0x2;
    }console[O[644]](O[27701] + window['$h$G']['$hC5$ZG'] + O[27702] + window['$h$G']['$hC5$GZ']);
  } }), wx[O[27703]]({ 'success': function (eqfmhz) {
    console[O[644]](O[27704] + eqfmhz[O[4655]] + O[27705] + eqfmhz[O[27706]]);
  } }), wx[O[27707]]({ 'success': function (xm9dq6) {
    console[O[644]](O[27708] + xm9dq6[O[27709]]);
  } }), wx[O[27710]]({ 'keepScreenOn': !![] }), wx[O[27711]](function (j_v5e) {
  console[O[644]](O[27708] + j_v5e[O[27709]] + O[27712] + j_v5e[O[27713]]);
}), wx[O[27714]](function (n9dx6) {
  window['$hG5Z'] = n9dx6, window['$hGZ5'] && window['$hG5Z'] && (console[O[257]](O[27715] + window['$hG5Z'][O[938]]), window['$hGZ5'](window['$hG5Z']), window['$hG5Z'] = null);
}), window['$hC$G5Z'] = 0x0, window[O[27716]] = null, wx[O[27717]](function () {
  window['$hC$G5Z']++, wx[O[11474]]();if (window['$hC$G5Z'] >= 0x2) {
    window['$hC$G5Z'] = 0x0, console[O[304]](O[27718]), wx[O[27719]]('0', 0x1);if (window['$h$G'] && window['$h$G'][O[674]]) window['$h$G5'](O[27720], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});