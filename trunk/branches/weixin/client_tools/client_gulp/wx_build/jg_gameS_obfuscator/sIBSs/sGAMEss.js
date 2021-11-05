var K = wx.$S;
console[K[300000]](K[300001]), window['lastError'], wx[K[300002]](function (p5shy) {
  if (p5shy) {
    if (p5shy['message']) {
      var qshpgy = window[K[300003]][K[300004]][K[300005]](new RegExp(/\./, 'g'), '_'),
          wzv9ok = p5shy['message'],
          ix2nmt = wzv9ok[K[300006]](/(smmms\/sGAMEss.js:)[0-9]{1,60}(:)/g);if (ix2nmt) for (var $adu = 0x0; $adu < ix2nmt[K[300007]]; $adu++) {
        if (ix2nmt[$adu] && ix2nmt[$adu][K[300007]] > 0x0) {
          var i9_cw0 = parseInt(ix2nmt[$adu][K[300005]]('smmms/sGAMEss.js:', '')[K[300005]](':', ''));wzv9ok = wzv9ok[K[300005]](ix2nmt[$adu], ix2nmt[$adu][K[300005]](':' + i9_cw0 + ':', ':' + (i9_cw0 - 0x2) + ':'));
        }
      }wzv9ok = wzv9ok[K[300005]](new RegExp('smmms/sGAMEss.js', 'g'), 'smmms/main__' + qshpgy + '.min.js'), wzv9ok = wzv9ok[K[300005]](new RegExp('smmms/ssMAINrs.js', 'g'), 'smmms/main__' + qshpgy + '.min.js'), p5shy['message'] = wzv9ok;
    }var xi0_cm = { 'id': window['s$X4'][K[300008]], 'role': window['s$X4'][K[300009]], 'level': window['s$X4'][K[300010]], 'user': window['s$X4'][K[300011]], 'version': window['s$X4']['lastVersion'], 'gamever': window[K[300003]][K[300004]], 'cdn': window['s$X4'][K[300012]], 'serverid': window['s$X4']['selectedServer'] ? window['s$X4']['selectedServer']['server_id'] : 0x0, 'systemInfo': window['systemInfo'], 'error': K[300013], 'stack': p5shy ? p5shy['message'] : '' },
        nxmi2_ = JSON['stringify'](xi0_cm);console[K[300014]](K[300015] + nxmi2_), (!window['lastError'] || window['lastError'] != xi0_cm[K[300014]]) && (window['lastError'] = xi0_cm[K[300014]], window['s$TX'](xi0_cm));
  }
});import 'ssfss.js';import 'ss12s.js';window['Parser'] = require('ssparses.js');import 'sINDss.js';import 'ssLIB12ss.js';import 'sWXMsadss.js';import 'ssINITsss.js';import 'SyMiniTool.js';console[K[300000]](K[300016]), console[K[300000]](K[300017]), s$TXP4({ 'title': K[300018] });var sd54e = { 's$MPTX4': !![] };new window[K[300019]](sd54e), window[K[300019]]['instance']['s$MP4TX']();if (window['s$MT4PX']) clearInterval(window['s$MT4PX']);window['s$MT4PX'] = null, window['s$MP4XT'] = function (pghy, _c0xwi) {
  if (!pghy || !_c0xwi) return 0x0;pghy = pghy['split']('.'), _c0xwi = _c0xwi['split']('.');const i0x_wc = Math[K[300020]](pghy[K[300007]], _c0xwi[K[300007]]);while (pghy[K[300007]] < i0x_wc) {
    pghy['push']('0');
  }while (_c0xwi[K[300007]] < i0x_wc) {
    _c0xwi['push']('0');
  }for (var lj6b18 = 0x0; lj6b18 < i0x_wc; lj6b18++) {
    const cwi9_0 = parseInt(pghy[lj6b18]),
          _0x = parseInt(_c0xwi[lj6b18]);if (cwi9_0 > _0x) return 0x1;else {
      if (cwi9_0 < _0x) return -0x1;
    }
  }return 0x0;
}, window['SDKVersion'] = wx['getSystemInfoSync']()['SDKVersion'], console[K[300021]](K[300022] + window['SDKVersion']);var sqpjsgy = wx[K[300023]]();sqpjsgy[K[300024]](function (sqh5yp) {
  console[K[300021]](K[300025] + sqh5yp['hasUpdate']);
}), sqpjsgy[K[300026]](function () {
  wx['showModal']({ 'title': K[300027], 'content': K[300028], 'showCancel': ![], 'success': function (_nmxi2) {
      sqpjsgy[K[300029]]();
    } });
}), sqpjsgy[K[300030]](function () {
  console[K[300021]](K[300031]);
}), window['s$MXTP4'] = function () {
  console[K[300021]](K[300032]);var g8j1qb = wx[K[300033]]({ 'name': 'sPFs', 'success': function (bq1jg) {
      console[K[300021]](K[300034]), console[K[300021]](bq1jg), bq1jg && bq1jg['errMsg'] == K[300035] ? (window['s$4P'] = !![], window['s$4XTP'](), window['s$4XPT']()) : setTimeout(function () {
        window['s$MXTP4']();
      }, 0x1f4);
    }, 'fail': function (v3z9k) {
      console[K[300021]](K[300036]), console[K[300021]](v3z9k), setTimeout(function () {
        window['s$MXTP4']();
      }, 0x1f4);
    } });g8j1qb && g8j1qb['onProgressUpdate'](xn7mt => {});
}, window['s$MXPT4'] = function () {
  console[K[300021]](K[300037]);var wozk9v = wx[K[300033]]({ 'name': 'smmms', 'success': function (u4$ad) {
      console[K[300021]](K[300038]), console[K[300021]](u4$ad), u4$ad && u4$ad['errMsg'] == K[300035] ? (window['s$XP4'] = !![], window['s$4XTP'](), window['s$4XPT']()) : setTimeout(function () {
        window['s$MXPT4']();
      }, 0x1f4);
    }, 'fail': function (x_ciw0) {
      console[K[300021]](K[300039]), console[K[300021]](x_ciw0), setTimeout(function () {
        window['s$MXPT4']();
      }, 0x1f4);
    } });wozk9v && wozk9v['onProgressUpdate'](q1pjs => {});
}, window['loadSubpackages'] = function () {
  window['s$MP4XT'](window['SDKVersion'], K[300040]) >= 0x0 ? (console[K[300021]](K[300041] + window['SDKVersion'] + K[300042]), window['s$XT'](), window['s$MXTP4'](), window['s$MXPT4']()) : (window['s$X4T'](K[300043], window['SDKVersion']), wx['showModal']({ 'title': K[300044], 'content': K[300045] }));
}, window['systemInfo'] = '', wx['getSystemInfo']({ 'success'(syd5p) {
    window['systemInfo'] = K[300046] + syd5p[K[300047]] + K[300048] + syd5p[K[300049]] + K[300050] + syd5p['version'] + K[300051] + syd5p['system'] + K[300052] + syd5p[K[300053]] + K[300054] + syd5p['SDKVersion'] + K[300055] + syd5p[K[300056]], console[K[300021]](window['systemInfo']), console[K[300021]](K[300057] + syd5p[K[300058]] + K[300059] + syd5p['screenWidth'] + K[300060] + syd5p['screenHeight'] + K[300061] + syd5p[K[300062]] + K[300063] + syd5p[K[300064]] + K[300065] + syd5p['statusBarHeight'] + K[300066] + (syd5p['safeArea'] ? syd5p['safeArea'][K[300067]] + ',' + syd5p['safeArea'][K[300068]] + ',' + syd5p['safeArea'][K[300069]] + ',' + syd5p['safeArea'][K[300070]] : ''));var nxt = syd5p['system'] ? syd5p['system']['toLowerCase']() : '',
        jsypgq = syd5p[K[300049]] ? syd5p[K[300049]]['toLowerCase']()[K[300005]]('\x20', '') : '';window['s$X4'][K[300071]] = nxt[K[300072]]('ios') != -0x1, window['s$X4'][K[300073]] = nxt[K[300072]](K[300074]) != -0x1, window['s$X4'][K[300075]] = nxt[K[300072]]('ios') != -0x1 || nxt[K[300072]](K[300074]) != -0x1, window['s$X4'][K[300076]] = nxt[K[300072]]('windows') != -0x1 || nxt[K[300072]](K[300077]) != -0x1, window['s$X4'][K[300078]] = syd5p[K[300053]] ? syd5p[K[300053]]['toLowerCase']() : '', window['s$X4']['s$MTXP4'] = ![], window['s$X4']['s$MTX4P'] = 0x2;if (nxt[K[300072]](K[300074]) != -0x1) {
      if (syd5p[K[300056]] >= 0x18) window['s$X4']['s$MTX4P'] = 0x3;else window['s$X4']['s$MTX4P'] = 0x2;
    } else {
      if (nxt[K[300072]]('ios') != -0x1) {
        if (syd5p[K[300056]] && syd5p[K[300056]] >= 0x14) window['s$X4']['s$MTX4P'] = 0x3;else {
          if (jsypgq[K[300072]](K[300079]) != -0x1 || jsypgq[K[300072]](K[300080]) != -0x1 || jsypgq[K[300072]](K[300081]) != -0x1 || jsypgq[K[300072]]('iphonese') != -0x1 || jsypgq[K[300072]](K[300082]) != -0x1) window['s$X4']['s$MTX4P'] = 0x2;else window['s$X4']['s$MTX4P'] = 0x3;
        }
      } else window['s$X4']['s$MTX4P'] = 0x2;
    }console[K[300021]](K[300083] + window['s$X4']['s$MTXP4'] + K[300084] + window['s$X4']['s$MTX4P']);
  } }), wx[K[300085]]({ 'success': function (_k9wc) {
    console[K[300021]](K[300086] + _k9wc[K[300087]] + K[300088] + _k9wc['isCharging']);
  } }), wx[K[300089]]({ 'success': function (a4dh5$) {
    console[K[300021]](K[300090] + a4dh5$[K[300091]]);
  } }), wx['setKeepScreenOn']({ 'keepScreenOn': !![] }), wx['onNetworkStatusChange'](function (ea$4du) {
  console[K[300021]](K[300090] + ea$4du[K[300091]] + K[300092] + ea$4du['isConnected']);
}), wx[K[300093]](function (d4e$a5) {
  window['s$4TP'] = d4e$a5, window['s$4PT'] && window['s$4TP'] && (console[K[300000]](K[300094] + window['s$4TP']['scene']), window['s$4PT'](window['s$4TP']), window['s$4TP'] = null);
}), window['s$MX4TP'] = 0x0, window[K[300095]] = null, wx[K[300096]](function () {
  window['s$MX4TP']++, wx[K[300097]]();if (window['s$MX4TP'] >= 0x2) {
    window['s$MX4TP'] = 0x0, console[K[300014]](K[300098]), wx[K[300099]]('0', 0x1);if (window['s$X4'] && window['s$X4'][K[300071]]) window['s$X4T'](K[300100], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});