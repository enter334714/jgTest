var M = wx.$T;
console[M[320000]](M[320001]), window['lastError'], wx[M[320002]](function (qy0xm_) {
  if (qy0xm_) {
    if (qy0xm_[M[320003]]) {
      var m0_hx = window[M[320004]][M[320005]][M[320006]](new RegExp(/\./, 'g'), '_'),
          nbajrg = qy0xm_[M[320003]],
          q7o0ze = nbajrg['match'](/(ttttttt\/tGAMEtt.js:)[0-9]{1,60}(:)/g);if (q7o0ze) for (var l2ct4 = 0x0; l2ct4 < q7o0ze['length']; l2ct4++) {
        if (q7o0ze[l2ct4] && q7o0ze[l2ct4]['length'] > 0x0) {
          var bksu = parseInt(q7o0ze[l2ct4][M[320006]]('ttttttt/tGAMEtt.js:', '')[M[320006]](':', ''));nbajrg = nbajrg[M[320006]](q7o0ze[l2ct4], q7o0ze[l2ct4][M[320006]](':' + bksu + ':', ':' + (bksu - 0x2) + ':'));
        }
      }nbajrg = nbajrg[M[320006]](new RegExp('ttttttt/tGAMEtt.js', 'g'), 'ttttttt/main__' + m0_hx + M[320007]), nbajrg = nbajrg[M[320006]](new RegExp('ttttttt/ttMAItttt.js', 'g'), 'ttttttt/main__' + m0_hx + M[320007]), qy0xm_[M[320003]] = nbajrg;
    }var hwm5 = { 'id': window['t$ZK'][M[320008]], 'role': window['t$ZK'][M[320009]], 'level': window['t$ZK'][M[320010]], 'user': window['t$ZK']['account'], 'version': window['t$ZK']['lastVersion'], 'gamever': window[M[320004]][M[320005]], 'cdn': window['t$ZK'][M[320011]], 'serverid': window['t$ZK']['selectedServer'] ? window['t$ZK']['selectedServer'][M[320012]] : 0x0, 'systemInfo': window['systemInfo'], 'error': M[320013], 'stack': qy0xm_ ? qy0xm_[M[320003]] : '' },
        zq7eo = JSON['stringify'](hwm5);console[M[320014]](M[320015] + zq7eo), (!window['lastError'] || window['lastError'] != hwm5[M[320014]]) && (window['lastError'] = hwm5[M[320014]], window['t$MZ'](hwm5));
  }
});import 'ttfttt.js';import 'tt112tt.js';window[M[320016]] = require('ttparstt.js');import 'tINDtt.js';import 'ttLIB23tt.js';import 'tWXMtadtt.js';import 'ttINItt.js';console[M[320000]](M[320017]), console[M[320000]](M[320018]), t$MZ6K({ 'title': M[320019] });var tfoz7p = { 't$F6MZK': !![] };new window[M[320020]](tfoz7p), window[M[320020]]['instance']['t$F6KMZ']();if (window['t$FMK6Z']) clearInterval(window['t$FMK6Z']);window['t$FMK6Z'] = null, window['t$F6KZM'] = function (yq0xe_, oz0qe) {
  if (!yq0xe_ || !oz0qe) return 0x0;yq0xe_ = yq0xe_['split']('.'), oz0qe = oz0qe['split']('.');const brkjsa = Math[M[320021]](yq0xe_['length'], oz0qe['length']);while (yq0xe_['length'] < brkjsa) {
    yq0xe_[M[320022]]('0');
  }while (oz0qe['length'] < brkjsa) {
    oz0qe[M[320022]]('0');
  }for (var fqo7 = 0x0; fqo7 < brkjsa; fqo7++) {
    const kasjb = parseInt(yq0xe_[fqo7]),
          cvd$9 = parseInt(oz0qe[fqo7]);if (kasjb > cvd$9) return 0x1;else {
      if (kasjb < cvd$9) return -0x1;
    }
  }return 0x0;
}, window[M[320023]] = wx['getSystemInfoSync']()[M[320023]], console[M[320024]](M[320025] + window[M[320023]]);var tjkbau = wx['getUpdateManager']();tjkbau['onCheckForUpdate'](function (ctl24) {
  console[M[320024]](M[320026] + ctl24['hasUpdate']);
}), tjkbau['onUpdateReady'](function () {
  wx[M[320027]]({ 'title': M[320028], 'content': M[320029], 'showCancel': ![], 'success': function (y0oqxe) {
      tjkbau['applyUpdate']();
    } });
}), tjkbau['onUpdateFailed'](function () {
  console[M[320024]](M[320030]);
}), window['t$FZM6K'] = function () {
  console[M[320024]](M[320031]);var _xymw = wx[M[320032]]({ 'name': 'tpft', 'success': function (_wh56m) {
      console[M[320024]](M[320033]), console[M[320024]](_wh56m), _wh56m && _wh56m[M[320034]] == M[320035] ? (window['t$K6'] = !![], window['t$KZM6'](), window['t$KZ6M']()) : setTimeout(function () {
        window['t$FZM6K']();
      }, 0x1f4);
    }, 'fail': function (rng3) {
      console[M[320024]](M[320036]), console[M[320024]](rng3), setTimeout(function () {
        window['t$FZM6K']();
      }, 0x1f4);
    } });_xymw && _xymw['onProgressUpdate'](p7dozf => {});
}, window['t$FZ6MK'] = function () {
  console[M[320024]](M[320037]);var _m5y = wx[M[320032]]({ 'name': 'ttttttt', 'success': function (eoqzf) {
      console[M[320024]](M[320038]), console[M[320024]](eoqzf), eoqzf && eoqzf[M[320034]] == M[320035] ? (window['t$Z6K'] = !![], window['t$KZM6'](), window['t$KZ6M']()) : setTimeout(function () {
        window['t$FZ6MK']();
      }, 0x1f4);
    }, 'fail': function (rngj38) {
      console[M[320024]](M[320039]), console[M[320024]](rngj38), setTimeout(function () {
        window['t$FZ6MK']();
      }, 0x1f4);
    } });_m5y && _m5y['onProgressUpdate'](t4l => {});
}, window[M[320040]] = function () {
  window['t$F6KZM'](window[M[320023]], M[320041]) >= 0x0 ? (console[M[320024]](M[320042] + window[M[320023]] + M[320043]), window['t$ZM'](), window['t$FZM6K'](), window['t$FZ6MK']()) : (window['t$ZKM'](M[320044], window[M[320023]]), wx[M[320027]]({ 'title': M[320045], 'content': M[320046] }));
}, window['systemInfo'] = '', wx['getSystemInfo']({ 'success'(cv9t$) {
    window['systemInfo'] = M[320047] + cv9t$[M[320048]] + M[320049] + cv9t$[M[320050]] + M[320051] + cv9t$[M[320052]] + M[320053] + cv9t$['system'] + M[320054] + cv9t$['platform'] + M[320055] + cv9t$[M[320023]] + M[320056] + cv9t$[M[320057]], console[M[320024]](window['systemInfo']), console[M[320024]](M[320058] + cv9t$['pixelRatio'] + M[320059] + cv9t$['screenWidth'] + M[320060] + cv9t$['screenHeight'] + M[320061] + cv9t$['windowWidth'] + M[320062] + cv9t$['windowHeight'] + M[320063] + cv9t$['statusBarHeight'] + M[320064] + (cv9t$[M[320065]] ? cv9t$[M[320065]]['top'] + ',' + cv9t$[M[320065]]['bottom'] + ',' + cv9t$[M[320065]]['left'] + ',' + cv9t$[M[320065]]['right'] : ''));var fep = cv9t$['system'] ? cv9t$['system']['toLowerCase']() : '',
        j38grn = cv9t$[M[320050]] ? cv9t$[M[320050]]['toLowerCase']()[M[320006]]('\x20', '') : '';window['t$ZK'][M[320066]] = fep[M[320067]](M[320068]) != -0x1, window['t$ZK'][M[320069]] = fep[M[320067]](M[320070]) != -0x1, window['t$ZK'][M[320071]] = fep[M[320067]](M[320068]) != -0x1 || fep[M[320067]](M[320070]) != -0x1, window['t$ZK'][M[320072]] = fep[M[320067]](M[320073]) != -0x1 || fep[M[320067]](M[320074]) != -0x1, window['t$ZK']['wxPlatform'] = cv9t$['platform'] ? cv9t$['platform']['toLowerCase']() : '', window['t$ZK']['t$FMZ6K'] = ![], window['t$ZK']['t$FMZK6'] = 0x2;if (fep[M[320067]](M[320070]) != -0x1) {
      if (cv9t$[M[320057]] >= 0x18) window['t$ZK']['t$FMZK6'] = 0x3;else window['t$ZK']['t$FMZK6'] = 0x2;
    } else {
      if (fep[M[320067]](M[320068]) != -0x1) {
        if (cv9t$[M[320057]] && cv9t$[M[320057]] >= 0x14) window['t$ZK']['t$FMZK6'] = 0x3;else {
          if (j38grn[M[320067]](M[320075]) != -0x1 || j38grn[M[320067]](M[320076]) != -0x1 || j38grn[M[320067]](M[320077]) != -0x1 || j38grn[M[320067]](M[320078]) != -0x1 || j38grn[M[320067]](M[320079]) != -0x1) window['t$ZK']['t$FMZK6'] = 0x2;else window['t$ZK']['t$FMZK6'] = 0x3;
        }
      } else window['t$ZK']['t$FMZK6'] = 0x2;
    }console[M[320024]](M[320080] + window['t$ZK']['t$FMZ6K'] + M[320081] + window['t$ZK']['t$FMZK6']);
  } }), wx['getBatteryInfo']({ 'success': function (d7fzpo) {
    console[M[320024]](M[320082] + d7fzpo[M[320083]] + M[320084] + d7fzpo[M[320085]]);
  } }), wx['getNetworkType']({ 'success': function (w65h) {
    console[M[320024]](M[320086] + w65h['networkType']);
  } }), wx['setKeepScreenOn']({ 'keepScreenOn': !![] }), wx['onNetworkStatusChange'](function (rgbaj) {
  console[M[320024]](M[320086] + rgbaj['networkType'] + M[320087] + rgbaj['isConnected']);
}), wx[M[320088]](function (ajn) {
  window['t$KM6'] = ajn, window['t$K6M'] && window['t$KM6'] && (console[M[320000]](M[320089] + window['t$KM6'][M[320090]]), window['t$K6M'](window['t$KM6']), window['t$KM6'] = null);
}), window['t$FZKM6'] = 0x0, window[M[320091]] = null, wx[M[320092]](function () {
  window['t$FZKM6']++, wx['triggerGC']();if (window['t$FZKM6'] >= 0x2) {
    window['t$FZKM6'] = 0x0, console[M[320014]](M[320093]), wx['reportMonitor']('0', 0x1);if (window['t$ZK'] && window['t$ZK'][M[320066]]) window['t$ZKM'](M[320094], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});