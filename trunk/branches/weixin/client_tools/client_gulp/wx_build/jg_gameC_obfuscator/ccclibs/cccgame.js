var p = wx.$h;
console[p[20078]](p[47974]), window[p[47975]], wx[p[47976]](function (i9zob) {
  if (i9zob) {
    if (i9zob[p[24448]]) {
      var g0h_8k = window[p[20553]][p[47977]][p[24626]](new RegExp(/\./, 'g'), '_'),
          yi9beo = i9zob[p[24448]],
          xnrvw = yi9beo[p[31639]](/(cccccccc\/cccgame.js:)[0-9]{1,60}(:)/g);if (xnrvw) for (var f73a = 0x0; f73a < xnrvw[p[20013]]; f73a++) {
        if (xnrvw[f73a] && xnrvw[f73a][p[20013]] > 0x0) {
          var jct1s5 = parseInt(xnrvw[f73a][p[24626]](p[47978], '')[p[24626]](':', ''));yi9beo = yi9beo[p[24626]](xnrvw[f73a], xnrvw[f73a][p[24626]](':' + jct1s5 + ':', ':' + (jct1s5 - 0x2) + ':'));
        }
      }yi9beo = yi9beo[p[24626]](new RegExp(p[47979], 'g'), p[47980] + g0h_8k + p[44485]), yi9beo = yi9beo[p[24626]](new RegExp(p[47981], 'g'), p[47980] + g0h_8k + p[44485]), i9zob[p[24448]] = yi9beo;
    }var tcfj = { 'id': window['$aQV'][p[47982]], 'role': window['$aQV'][p[24568]], 'level': window['$aQV'][p[47983]], 'user': window['$aQV'][p[44387]], 'version': window['$aQV'][p[20101]], 'gamever': window[p[20553]][p[47977]], 'cdn': window['$aQV'][p[24447]], 'serverid': window['$aQV'][p[44382]] ? window['$aQV'][p[44382]][p[31233]] : 0x0, 'systemInfo': window[p[47984]], 'error': p[47985], 'stack': i9zob ? i9zob[p[24448]] : '' },
        h_80vg = JSON[p[24433]](tcfj);console[p[20125]](p[47986] + h_80vg), (!window[p[47975]] || window[p[47975]] != tcfj[p[20125]]) && (window[p[47975]] = tcfj[p[20125]], window['$a5Q'](tcfj));
  }
});import 'cccmd5min.js';import 'ccczlibs.js';window[p[47987]] = require(p[47988]);import 'cccindex.js';import 'ccclibsmin.js';import 'cccwxmini.js';import 'cccinitmin.js';console[p[20078]](p[47989]), console[p[20078]](p[47990]), $a5Q3V({ 'title': p[47991] });var a_dlm5sc = { '$aH35QV': !![] };new window[p[47992]](a_dlm5sc), window[p[47992]][p[20148]]['$aH3V5Q']();if (window['$aH5V3Q']) clearInterval(window['$aH5V3Q']);window['$aH5V3Q'] = null, window['$aH3VQ5'] = function (nwar4, h80_g) {
  if (!nwar4 || !h80_g) return 0x0;nwar4 = nwar4[p[20015]]('.'), h80_g = h80_g[p[20015]]('.');const fa37p = Math[p[20848]](nwar4[p[20013]], h80_g[p[20013]]);while (nwar4[p[20013]] < fa37p) {
    nwar4[p[20029]]('0');
  }while (h80_g[p[20013]] < fa37p) {
    h80_g[p[20029]]('0');
  }for (var $8eki = 0x0; $8eki < fa37p; $8eki++) {
    const t1j3s = parseInt(nwar4[$8eki]),
          he8k$ = parseInt(h80_g[$8eki]);if (t1j3s > he8k$) return 0x1;else {
      if (t1j3s < he8k$) return -0x1;
    }
  }return 0x0;
}, window[p[47993]] = wx[p[47994]]()[p[47993]], console[p[20478]](p[47995] + window[p[47993]]);var a_beiyo$ = wx[p[47996]]();a_beiyo$[p[47997]](function (k6h$e8) {
  console[p[20478]](p[47998] + k6h$e8[p[47999]]);
}), a_beiyo$[p[48000]](function () {
  wx[p[48001]]({ 'title': p[48002], 'content': p[48003], 'showCancel': ![], 'success': function (he68$) {
      a_beiyo$[p[48004]]();
    } });
}), a_beiyo$[p[48005]](function () {
  console[p[20478]](p[48006]);
}), window['$aHQ53V'] = function () {
  console[p[20478]](p[48007]);var nwpa = wx[p[48008]]({ 'name': p[48009], 'success': function (keh$86) {
      console[p[20478]](p[48010]), console[p[20478]](keh$86), keh$86 && keh$86[p[44566]] == p[48011] ? (window['$aV3'] = !![], window['$aVQ53'](), window['$aVQ35']()) : setTimeout(function () {
        window['$aHQ53V']();
      }, 0x1f4);
    }, 'fail': function (g_2x) {
      console[p[20478]](p[48012]), console[p[20478]](g_2x), setTimeout(function () {
        window['$aHQ53V']();
      }, 0x1f4);
    } });nwpa && nwpa[p[48013]](wr2vxn => {});
}, window['$aHQ35V'] = function () {
  console[p[20478]](p[48014]);var pra7w = wx[p[48008]]({ 'name': p[48015], 'success': function (ra7) {
      console[p[20478]](p[48016]), console[p[20478]](ra7), ra7 && ra7[p[44566]] == p[48011] ? (window['$aQ3V'] = !![], window['$aVQ53'](), window['$aVQ35']()) : setTimeout(function () {
        window['$aHQ35V']();
      }, 0x1f4);
    }, 'fail': function (t1sj3) {
      console[p[20478]](p[48017]), console[p[20478]](t1sj3), setTimeout(function () {
        window['$aHQ35V']();
      }, 0x1f4);
    } });pra7w && pra7w[p[48013]](t34jf7 => {});
}, window[p[48018]] = function () {
  window['$aH3VQ5'](window[p[47993]], p[48019]) >= 0x0 ? (console[p[20478]](p[48020] + window[p[47993]] + p[48021]), window['$aQ5'](), window['$aHQ53V'](), window['$aHQ35V']()) : (window['$aQV5'](p[48022], window[p[47993]]), wx[p[48001]]({ 'title': p[26344], 'content': p[48023] }));
}, window[p[47984]] = '', wx[p[48024]]({ 'success'(rnw2v) {
    window[p[47984]] = p[48025] + rnw2v[p[48026]] + p[48027] + rnw2v[p[48028]] + p[48029] + rnw2v[p[24639]] + p[48030] + rnw2v[p[20464]] + p[48031] + rnw2v[p[44358]] + p[48032] + rnw2v[p[47993]] + p[48033] + rnw2v[p[29081]], console[p[20478]](window[p[47984]]), console[p[20478]](p[48034] + rnw2v[p[48035]] + p[48036] + rnw2v[p[48037]] + p[48038] + rnw2v[p[48039]] + p[48040] + rnw2v[p[48041]] + p[48042] + rnw2v[p[48043]] + p[48044] + rnw2v[p[48045]] + p[48046] + (rnw2v[p[48047]] ? rnw2v[p[48047]][p[20320]] + ',' + rnw2v[p[48047]][p[21211]] + ',' + rnw2v[p[48047]][p[21213]] + ',' + rnw2v[p[48047]][p[21212]] : ''));var na2pwr = rnw2v[p[20464]] ? rnw2v[p[20464]][p[31892]]() : '',
        eiby$ = rnw2v[p[48028]] ? rnw2v[p[48028]][p[31892]]()[p[24626]]('\x20', '') : '';window['$aQV'][p[20507]] = na2pwr[p[20115]](p[48048]) != -0x1, window['$aQV'][p[31063]] = na2pwr[p[20115]](p[47873]) != -0x1, window['$aQV'][p[48049]] = na2pwr[p[20115]](p[48048]) != -0x1 || na2pwr[p[20115]](p[47873]) != -0x1, window['$aQV'][p[44075]] = na2pwr[p[20115]](p[47874]) != -0x1 || na2pwr[p[20115]](p[48050]) != -0x1, window['$aQV'][p[48051]] = rnw2v[p[44358]] ? rnw2v[p[44358]][p[31892]]() : '', window['$aQV']['$aH5Q3V'] = ![], window['$aQV']['$aH5QV3'] = 0x2;if (na2pwr[p[20115]](p[47873]) != -0x1) {
      if (rnw2v[p[29081]] >= 0x18) window['$aQV']['$aH5QV3'] = 0x3;else window['$aQV']['$aH5QV3'] = 0x2;
    } else {
      if (na2pwr[p[20115]](p[48048]) != -0x1) {
        if (rnw2v[p[29081]] && rnw2v[p[29081]] >= 0x14) window['$aQV']['$aH5QV3'] = 0x3;else {
          if (eiby$[p[20115]](p[48052]) != -0x1 || eiby$[p[20115]](p[48053]) != -0x1 || eiby$[p[20115]](p[48054]) != -0x1 || eiby$[p[20115]](p[48055]) != -0x1 || eiby$[p[20115]](p[48056]) != -0x1) window['$aQV']['$aH5QV3'] = 0x2;else window['$aQV']['$aH5QV3'] = 0x3;
        }
      } else window['$aQV']['$aH5QV3'] = 0x2;
    }console[p[20478]](p[48057] + window['$aQV']['$aH5Q3V'] + p[48058] + window['$aQV']['$aH5QV3']);
  } }), wx[p[48059]]({ 'success': function (zby9qo) {
    console[p[20478]](p[48060] + zby9qo[p[24544]] + p[48061] + zby9qo[p[48062]]);
  } }), wx[p[48063]]({ 'success': function (ehk$68) {
    console[p[20478]](p[48064] + ehk$68[p[48065]]);
  } }), wx[p[48066]]({ 'keepScreenOn': !![] }), wx[p[48067]](function (p4nr) {
  console[p[20478]](p[48064] + p4nr[p[48065]] + p[48068] + p4nr[p[48069]]);
}), wx[p[48070]](function (yo9ebi) {
  window['$aV53'] = yo9ebi, window['$aV35'] && window['$aV53'] && (console[p[20078]](p[48071] + window['$aV53'][p[20771]]), window['$aV35'](window['$aV53']), window['$aV53'] = null);
}), window['$aHQV53'] = 0x0, window[p[48072]] = null, wx[p[48073]](function () {
  window['$aHQV53']++, wx[p[31495]]();if (window['$aHQV53'] >= 0x2) {
    window['$aHQV53'] = 0x0, console[p[20125]](p[48074]), wx[p[48075]]('0', 0x1);if (window['$aQV'] && window['$aQV'][p[20507]]) window['$aQV5'](p[48076], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});