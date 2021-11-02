var k = wx.$f;
console[k[60077]](k[86138]), window[k[86139]], wx[k[86140]](function (uimvfb) {
  if (uimvfb) {
    if (uimvfb[k[64028]]) {
      var _q4k5 = window[k[60530]][k[86141]][k[64192]](new RegExp(/\./, 'g'), '_'),
          $r3y = uimvfb[k[64028]],
          h0qmft = $r3y[k[70649]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (h0qmft) for (var k_2465 = 0x0; k_2465 < h0qmft[k[60013]]; k_2465++) {
        if (h0qmft[k_2465] && h0qmft[k_2465][k[60013]] > 0x0) {
          var rxze8 = parseInt(h0qmft[k_2465][k[64192]](k[86142], '')[k[64192]](':', ''));$r3y = $r3y[k[64192]](h0qmft[k_2465], h0qmft[k_2465][k[64192]](':' + rxze8 + ':', ':' + (rxze8 - 0x2) + ':'));
        }
      }$r3y = $r3y[k[64192]](new RegExp(k[86143], 'g'), k[86144] + _q4k5 + k[83005]), $r3y = $r3y[k[64192]](new RegExp(k[86145], 'g'), k[86144] + _q4k5 + k[83005]), uimvfb[k[64028]] = $r3y;
    }var _04q5k = { 'id': window['F$L6'][k[86146]], 'role': window['F$L6'][k[64135]], 'level': window['F$L6'][k[86147]], 'user': window['F$L6'][k[82909]], 'version': window['F$L6'][k[60100]], 'gamever': window[k[60530]][k[86141]], 'cdn': window['F$L6'][k[64027]], 'serverid': window['F$L6'][k[82904]] ? window['F$L6'][k[82904]][k[70248]] : 0x0, 'systemInfo': window[k[86148]], 'error': k[86149], 'stack': uimvfb ? uimvfb[k[64028]] : '' },
        bm1vui = JSON[k[64013]](_04q5k);console[k[60124]](k[86150] + bm1vui), (!window[k[86139]] || window[k[86139]] != _04q5k[k[60124]]) && (window[k[86139]] = _04q5k[k[60124]], window['F$0L'](_04q5k));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[86151]] = require(k[86152]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';import 'SyMiniTool.js';console[k[60077]](k[86153]), console[k[60077]](k[86154]), F$0L86({ 'title': k[86155] });var fcdwjn = { 'F$I80L6': !![] };new window[k[86156]](fcdwjn), window[k[86156]][k[60144]]['F$I860L']();if (window['F$I068L']) clearInterval(window['F$I068L']);window['F$I068L'] = null, window['F$I86L0'] = function (q4_2k5, wn8ezx) {
  if (!q4_2k5 || !wn8ezx) return 0x0;q4_2k5 = q4_2k5[k[60015]]('.'), wn8ezx = wn8ezx[k[60015]]('.');const t5hq0k = Math[k[60813]](q4_2k5[k[60013]], wn8ezx[k[60013]]);while (q4_2k5[k[60013]] < t5hq0k) {
    q4_2k5[k[60029]]('0');
  }while (wn8ezx[k[60013]] < t5hq0k) {
    wn8ezx[k[60029]]('0');
  }for (var $7pay = 0x0; $7pay < t5hq0k; $7pay++) {
    const tifhmb = parseInt(q4_2k5[$7pay]),
          fbmvt = parseInt(wn8ezx[$7pay]);if (tifhmb > fbmvt) return 0x1;else {
      if (tifhmb < fbmvt) return -0x1;
    }
  }return 0x0;
}, window[k[86157]] = wx[k[86158]]()[k[86157]], console[k[60457]](k[86159] + window[k[86157]]);var f$7p3ay = wx[k[86160]]();f$7p3ay['onCheckForUpdate'](function (t0mhq) {
  console[k[60457]](k[86161] + t0mhq[k[86162]]);
}), f$7p3ay[k[86163]](function () {
  wx[k[86164]]({ 'title': k[86165], 'content': k[86166], 'showCancel': ![], 'success': function (nze8x) {
      f$7p3ay[k[86167]]();
    } });
}), f$7p3ay['onUpdateFailed'](function () {
  console[k[60457]](k[86168]);
}), window['F$IL086'] = function () {
  console[k[60457]](k[86169]);var o6c = wx[k[86170]]({ 'name': k[86171], 'success': function (vib91u) {
      console[k[60457]](k[86172]), console[k[60457]](vib91u), vib91u && vib91u[k[83076]] == k[86173] ? (window['F$68'] = !![], window['F$6L08'](), window['F$6L80']()) : setTimeout(function () {
        window['F$IL086']();
      }, 0x1f4);
    }, 'fail': function (xz78er) {
      console[k[60457]](k[86174]), console[k[60457]](xz78er), setTimeout(function () {
        window['F$IL086']();
      }, 0x1f4);
    } });o6c && o6c[k[86175]](kt50hq => {});
}, window['F$IL806'] = function () {
  console[k[60457]](k[86176]);var odcwjs = wx[k[86170]]({ 'name': k[86177], 'success': function (y37pa$) {
      console[k[60457]](k[86178]), console[k[60457]](y37pa$), y37pa$ && y37pa$[k[83076]] == k[86173] ? (window['F$L86'] = !![], window['F$6L08'](), window['F$6L80']()) : setTimeout(function () {
        window['F$IL806']();
      }, 0x1f4);
    }, 'fail': function (xjsndw) {
      console[k[60457]](k[86179]), console[k[60457]](xjsndw), setTimeout(function () {
        window['F$IL806']();
      }, 0x1f4);
    } });odcwjs && odcwjs[k[86175]](bi1uv9 => {});
}, window[k[86180]] = function () {
  window['F$I86L0'](window[k[86157]], k[86181]) >= 0x0 ? (console[k[60457]](k[86182] + window[k[86157]] + k[86183]), window['F$L0'](), window['F$IL086'](), window['F$IL806']()) : (window['F$L60'](k[86184], window[k[86157]]), wx[k[86164]]({ 'title': k[65766], 'content': k[86185] }));
}, window[k[86148]] = '', wx[k[86186]]({ 'success'(xnzse) {
    window[k[86148]] = k[86187] + xnzse[k[86188]] + k[86189] + xnzse[k[86190]] + k[86191] + xnzse[k[64205]] + k[86192] + xnzse[k[60450]] + k[86193] + xnzse[k[82882]] + k[86194] + xnzse[k[86157]] + k[86195] + xnzse[k[68334]], console[k[60457]](window[k[86148]]), console[k[60457]](k[86196] + xnzse[k[86197]] + k[86198] + xnzse[k[86199]] + k[86200] + xnzse[k[86201]] + k[86202] + xnzse[k[86203]] + k[86204] + xnzse[k[86205]] + k[86206] + xnzse[k[86207]] + k[86208] + (xnzse[k[86209]] ? xnzse[k[86209]][k[60313]] + ',' + xnzse[k[86209]][k[61123]] + ',' + xnzse[k[86209]][k[61125]] + ',' + xnzse[k[86209]][k[61124]] : ''));var fq5th0 = xnzse[k[60450]] ? xnzse[k[60450]][k[70885]]() : '',
        wodsc = xnzse[k[86190]] ? xnzse[k[86190]][k[70885]]()[k[64192]]('\x20', '') : '';window['F$L6'][k[60486]] = fq5th0[k[60114]](k[86210]) != -0x1, window['F$L6'][k[70091]] = fq5th0[k[60114]](k[86211]) != -0x1, window['F$L6'][k[86212]] = fq5th0[k[60114]](k[86210]) != -0x1 || fq5th0[k[60114]](k[86211]) != -0x1, window['F$L6'][k[82608]] = fq5th0[k[60114]](k[86213]) != -0x1 || fq5th0[k[60114]](k[86214]) != -0x1, window['F$L6'][k[86215]] = xnzse[k[82882]] ? xnzse[k[82882]][k[70885]]() : '', window['F$L6']['F$I0L86'] = ![], window['F$L6']['F$I0L68'] = 0x2;if (fq5th0[k[60114]](k[86211]) != -0x1) {
      if (xnzse[k[68334]] >= 0x18) window['F$L6']['F$I0L68'] = 0x3;else window['F$L6']['F$I0L68'] = 0x2;
    } else {
      if (fq5th0[k[60114]](k[86210]) != -0x1) {
        if (xnzse[k[68334]] && xnzse[k[68334]] >= 0x14) window['F$L6']['F$I0L68'] = 0x3;else {
          if (wodsc[k[60114]](k[86216]) != -0x1 || wodsc[k[60114]](k[86217]) != -0x1 || wodsc[k[60114]](k[86218]) != -0x1 || wodsc[k[60114]](k[86219]) != -0x1 || wodsc[k[60114]](k[86220]) != -0x1) window['F$L6']['F$I0L68'] = 0x2;else window['F$L6']['F$I0L68'] = 0x3;
        }
      } else window['F$L6']['F$I0L68'] = 0x2;
    }console[k[60457]](k[86221] + window['F$L6']['F$I0L86'] + k[86222] + window['F$L6']['F$I0L68']);
  } }), wx[k[86223]]({ 'success': function (j6d2oc) {
    console[k[60457]](k[86224] + j6d2oc[k[64111]] + k[86225] + j6d2oc[k[86226]]);
  } }), wx[k[86227]]({ 'success': function (vfitbm) {
    console[k[60457]](k[86228] + vfitbm[k[86229]]);
  } }), wx[k[86230]]({ 'keepScreenOn': !![] }), wx[k[86231]](function (h5k0q_) {
  console[k[60457]](k[86228] + h5k0q_[k[86229]] + k[86232] + h5k0q_[k[86233]]);
}), wx[k[86234]](function (py3$7a) {
  window['F$608'] = py3$7a, window['F$680'] && window['F$608'] && (console[k[60077]](k[86235] + window['F$608'][k[60739]]), window['F$680'](window['F$608']), window['F$608'] = null);
}), window['F$IL608'] = 0x0, window[k[86236]] = null, wx[k[86237]](function () {
  window['F$IL608']++, wx[k[70462]]();if (window['F$IL608'] >= 0x2) {
    window['F$IL608'] = 0x0, console[k[60124]](k[86238]), wx[k[86239]]('0', 0x1);if (window['F$L6'] && window['F$L6'][k[60486]]) window['F$L60'](k[86240], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});