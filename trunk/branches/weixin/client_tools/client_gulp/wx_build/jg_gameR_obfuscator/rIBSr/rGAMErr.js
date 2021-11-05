var i = wx.$R;
console[i[280000]](i[280001]), window['lastError'], wx['onError'](function (tv3lzs) {
  if (tv3lzs) {
    if (tv3lzs[i[280002]]) {
      var i8oj = window[i[280003]]['game_ver']['replace'](new RegExp(/\./, 'g'), '_'),
          qreg7 = tv3lzs[i[280002]],
          j8oiyx = qreg7[i[280004]](/(rmmmr\/rGAMErr.js:)[0-9]{1,60}(:)/g);if (j8oiyx) for (var gdfpq = 0x0; gdfpq < j8oiyx[i[280005]]; gdfpq++) {
        if (j8oiyx[gdfpq] && j8oiyx[gdfpq][i[280005]] > 0x0) {
          var xoijy2 = parseInt(j8oiyx[gdfpq]['replace']('rmmmr/rGAMErr.js:', '')['replace'](':', ''));qreg7 = qreg7['replace'](j8oiyx[gdfpq], j8oiyx[gdfpq]['replace'](':' + xoijy2 + ':', ':' + (xoijy2 - 0x2) + ':'));
        }
      }qreg7 = qreg7['replace'](new RegExp('rmmmr/rGAMErr.js', 'g'), 'rmmmr/main__' + i8oj + i[280006]), qreg7 = qreg7['replace'](new RegExp('rmmmr/rrMAINrr.js', 'g'), 'rmmmr/main__' + i8oj + i[280006]), tv3lzs[i[280002]] = qreg7;
    }var $a914 = { 'id': window['_rYE']['roleId'], 'role': window['_rYE']['roleName'], 'level': window['_rYE']['roleLevel'], 'user': window['_rYE'][i[280007]], 'version': window['_rYE']['lastVersion'], 'gamever': window[i[280003]]['game_ver'], 'cdn': window['_rYE'][i[280008]], 'serverid': window['_rYE']['selectedServer'] ? window['_rYE']['selectedServer']['server_id'] : 0x0, 'systemInfo': window[i[280009]], 'error': 'MiniProgramError', 'stack': tv3lzs ? tv3lzs[i[280002]] : '' },
        rw8kym = JSON['stringify']($a914);console['error'](i[280010] + rw8kym), (!window['lastError'] || window['lastError'] != $a914['error']) && (window['lastError'] = $a914['error'], window['_rSY']($a914));
  }
});import 'rsfs32r.js';import 'rr12rr.js';window['Parser'] = require('rrparser.js');import 'rINDEXr.js';import 'rrLIB12r.js';import 'rWXMsadrr.js';import 'rrINITMINrr.js';import 'SyMiniTool.js';console[i[280000]](i[280011]), console[i[280000]](i[280012]), _rSYFE({ 'title': i[280013] });var r_izox2 = { '_rUFSYE': !![] };new window['ServerLoading'](r_izox2), window['ServerLoading'][i[280014]]['_rUFESY']();if (window['_rUSEFY']) clearInterval(window['_rUSEFY']);window['_rUSEFY'] = null, window['_rUFEYS'] = function (yijo8, ahb_1) {
  if (!yijo8 || !ahb_1) return 0x0;yijo8 = yijo8[i[280015]]('.'), ahb_1 = ahb_1[i[280015]]('.');const $_1aub = Math[i[280016]](yijo8[i[280005]], ahb_1[i[280005]]);while (yijo8[i[280005]] < $_1aub) {
    yijo8[i[280017]]('0');
  }while (ahb_1[i[280005]] < $_1aub) {
    ahb_1[i[280017]]('0');
  }for (var r7w8km = 0x0; r7w8km < $_1aub; r7w8km++) {
    const sij2xz = parseInt(yijo8[r7w8km]),
          ha_u61 = parseInt(ahb_1[r7w8km]);if (sij2xz > ha_u61) return 0x1;else {
      if (sij2xz < ha_u61) return -0x1;
    }
  }return 0x0;
}, window['SDKVersion'] = wx[i[280018]]()['SDKVersion'], console[i[280019]](i[280020] + window['SDKVersion']);var r_gfqedp = wx['getUpdateManager']();r_gfqedp['onCheckForUpdate'](function (sl03t) {
  console[i[280019]](i[280021] + sl03t[i[280022]]);
}), r_gfqedp[i[280023]](function () {
  wx[i[280024]]({ 'title': i[280025], 'content': i[280026], 'showCancel': ![], 'success': function (qnefdp) {
      r_gfqedp[i[280027]]();
    } });
}), r_gfqedp[i[280028]](function () {
  console[i[280019]](i[280029]);
}), window['_rUYSFE'] = function () {
  console[i[280019]]('protobuf 分包加载');var d7qep = wx[i[280030]]({ 'name': 'rPFr', 'success': function (d56cnf) {
      console[i[280019]]('protobuf 分包加载成功'), console[i[280019]](d56cnf), d56cnf && d56cnf['errMsg'] == i[280031] ? (window['_rEF'] = !![], window['_rEYSF'](), window['_rEYFS']()) : setTimeout(function () {
        window['_rUYSFE']();
      }, 0x1f4);
    }, 'fail': function (mr7egq) {
      console[i[280019]]('protobuf 分包加载失败'), console[i[280019]](mr7egq), setTimeout(function () {
        window['_rUYSFE']();
      }, 0x1f4);
    } });d7qep && d7qep['onProgressUpdate'](fh5nc => {});
}, window['_rUYFSE'] = function () {
  console[i[280019]](i[280032]);var xjzis2 = wx[i[280030]]({ 'name': 'rmmmr', 'success': function (gwrme7) {
      console[i[280019]](i[280033]), console[i[280019]](gwrme7), gwrme7 && gwrme7['errMsg'] == i[280031] ? (window['_rYFE'] = !![], window['_rEYSF'](), window['_rEYFS']()) : setTimeout(function () {
        window['_rUYFSE']();
      }, 0x1f4);
    }, 'fail': function (_n6h) {
      console[i[280019]](i[280034]), console[i[280019]](_n6h), setTimeout(function () {
        window['_rUYFSE']();
      }, 0x1f4);
    } });xjzis2 && xjzis2['onProgressUpdate'](geq7r => {});
}, window[i[280035]] = function () {
  window['_rUFEYS'](window['SDKVersion'], i[280036]) >= 0x0 ? (console[i[280019]](i[280037] + window['SDKVersion'] + i[280038]), window['_rYS'](), window['_rUYSFE'](), window['_rUYFSE']()) : (window['_rYES'](i[280039], window['SDKVersion']), wx[i[280024]]({ 'title': i[280040], 'content': i[280041] }));
}, window[i[280009]] = '', wx[i[280042]]({ 'success'(gwm7e) {
    window[i[280009]] = i[280043] + gwm7e['brand'] + i[280044] + gwm7e[i[280045]] + i[280046] + gwm7e['version'] + i[280047] + gwm7e[i[280048]] + i[280049] + gwm7e['platform'] + i[280050] + gwm7e['SDKVersion'] + i[280051] + gwm7e['benchmarkLevel'], console[i[280019]](window[i[280009]]), console[i[280019]](i[280052] + gwm7e[i[280053]] + i[280054] + gwm7e['screenWidth'] + i[280055] + gwm7e['screenHeight'] + i[280056] + gwm7e[i[280057]] + i[280058] + gwm7e[i[280059]] + i[280060] + gwm7e['statusBarHeight'] + i[280061] + (gwm7e['safeArea'] ? gwm7e['safeArea'][i[280062]] + ',' + gwm7e['safeArea'][i[280063]] + ',' + gwm7e['safeArea'][i[280064]] + ',' + gwm7e['safeArea']['right'] : ''));var wkm8yo = gwm7e[i[280048]] ? gwm7e[i[280048]]['toLowerCase']() : '',
        re7gqp = gwm7e[i[280045]] ? gwm7e[i[280045]]['toLowerCase']()['replace']('\x20', '') : '';window['_rYE'][i[280065]] = wkm8yo[i[280066]](i[280067]) != -0x1, window['_rYE']['wxAndroid'] = wkm8yo[i[280066]]('android') != -0x1, window['_rYE'][i[280068]] = wkm8yo[i[280066]](i[280067]) != -0x1 || wkm8yo[i[280066]]('android') != -0x1, window['_rYE'][i[280069]] = wkm8yo[i[280066]](i[280070]) != -0x1 || wkm8yo[i[280066]](i[280071]) != -0x1, window['_rYE']['wxPlatform'] = gwm7e['platform'] ? gwm7e['platform']['toLowerCase']() : '', window['_rYE']['_rUSYFE'] = ![], window['_rYE']['_rUSYEF'] = 0x2;if (wkm8yo[i[280066]]('android') != -0x1) {
      if (gwm7e['benchmarkLevel'] >= 0x18) window['_rYE']['_rUSYEF'] = 0x3;else window['_rYE']['_rUSYEF'] = 0x2;
    } else {
      if (wkm8yo[i[280066]](i[280067]) != -0x1) {
        if (gwm7e['benchmarkLevel'] && gwm7e['benchmarkLevel'] >= 0x14) window['_rYE']['_rUSYEF'] = 0x3;else {
          if (re7gqp[i[280066]](i[280072]) != -0x1 || re7gqp[i[280066]](i[280073]) != -0x1 || re7gqp[i[280066]](i[280074]) != -0x1 || re7gqp[i[280066]](i[280075]) != -0x1 || re7gqp[i[280066]](i[280076]) != -0x1) window['_rYE']['_rUSYEF'] = 0x2;else window['_rYE']['_rUSYEF'] = 0x3;
        }
      } else window['_rYE']['_rUSYEF'] = 0x2;
    }console[i[280019]](i[280077] + window['_rYE']['_rUSYFE'] + i[280078] + window['_rYE']['_rUSYEF']);
  } }), wx['getBatteryInfo']({ 'success': function (ls2tz3) {
    console[i[280019]](i[280079] + ls2tz3[i[280080]] + i[280081] + ls2tz3['isCharging']);
  } }), wx['getNetworkType']({ 'success': function (fegqp) {
    console[i[280019]](i[280082] + fegqp['networkType']);
  } }), wx['setKeepScreenOn']({ 'keepScreenOn': !![] }), wx['onNetworkStatusChange'](function (pdc5nf) {
  console[i[280019]](i[280082] + pdc5nf['networkType'] + i[280083] + pdc5nf[i[280084]]);
}), wx[i[280085]](function (xjsi) {
  window['_rESF'] = xjsi, window['_rEFS'] && window['_rESF'] && (console[i[280000]](i[280086] + window['_rESF'][i[280087]]), window['_rEFS'](window['_rESF']), window['_rESF'] = null);
}), window['_rUYESF'] = 0x0, window['onMemoryWarningCallBack'] = null, wx['onMemoryWarning'](function () {
  window['_rUYESF']++, wx['triggerGC']();if (window['_rUYESF'] >= 0x2) {
    window['_rUYESF'] = 0x0, console['error'](i[280088]), wx['reportMonitor']('0', 0x1);if (window['_rYE'] && window['_rYE'][i[280065]]) window['_rYES'](i[280089], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});