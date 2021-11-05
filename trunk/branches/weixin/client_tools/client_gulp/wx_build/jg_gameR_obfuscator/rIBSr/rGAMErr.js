var i = wx.$R;
console[i[280000]](i[280001]), window['lastError'], wx['onError'](function (yrwm8) {
  if (yrwm8) {
    if (yrwm8[i[280002]]) {
      var jszi2x = window[i[280003]]['game_ver']['replace'](new RegExp(/\./, 'g'), '_'),
          qmre7g = yrwm8[i[280002]],
          jxo2i = qmre7g[i[280004]](/(rmmmr\/rGAMErr.js:)[0-9]{1,60}(:)/g);if (jxo2i) for (var w8km7r = 0x0; w8km7r < jxo2i[i[280005]]; w8km7r++) {
        if (jxo2i[w8km7r] && jxo2i[w8km7r][i[280005]] > 0x0) {
          var qegd7p = parseInt(jxo2i[w8km7r]['replace']('rmmmr/rGAMErr.js:', '')['replace'](':', ''));qmre7g = qmre7g['replace'](jxo2i[w8km7r], jxo2i[w8km7r]['replace'](':' + qegd7p + ':', ':' + (qegd7p - 0x2) + ':'));
        }
      }qmre7g = qmre7g['replace'](new RegExp('rmmmr/rGAMErr.js', 'g'), 'rmmmr/main__' + jszi2x + i[280006]), qmre7g = qmre7g['replace'](new RegExp('rmmmr/rrMAINrr.js', 'g'), 'rmmmr/main__' + jszi2x + i[280006]), yrwm8[i[280002]] = qmre7g;
    }var iw8k = { 'id': window['_rYE']['roleId'], 'role': window['_rYE']['roleName'], 'level': window['_rYE']['roleLevel'], 'user': window['_rYE'][i[280007]], 'version': window['_rYE']['lastVersion'], 'gamever': window[i[280003]]['game_ver'], 'cdn': window['_rYE'][i[280008]], 'serverid': window['_rYE']['selectedServer'] ? window['_rYE']['selectedServer']['server_id'] : 0x0, 'systemInfo': window[i[280009]], 'error': 'MiniProgramError', 'stack': yrwm8 ? yrwm8[i[280002]] : '' },
        tj2xzs = JSON['stringify'](iw8k);console['error'](i[280010] + tj2xzs), (!window['lastError'] || window['lastError'] != iw8k['error']) && (window['lastError'] = iw8k['error'], window['_rSY'](iw8k));
  }
});import 'rsfs32r.js';import 'rr12rr.js';window['Parser'] = require('rrparser.js');import 'rINDEXr.js';import 'rrLIB12r.js';import 'rWXMsadrr.js';import 'rrINITMINrr.js';import 'SyMiniTool.js';console[i[280000]](i[280011]), console[i[280000]](i[280012]), _rSYFE({ 'title': i[280013] });var r_ab$_1u = { '_rUFSYE': !![] };new window['ServerLoading'](r_ab$_1u), window['ServerLoading'][i[280014]]['_rUFESY']();if (window['_rUSEFY']) clearInterval(window['_rUSEFY']);window['_rUSEFY'] = null, window['_rUFEYS'] = function (svt3lz, dgfep) {
  if (!svt3lz || !dgfep) return 0x0;svt3lz = svt3lz[i[280015]]('.'), dgfep = dgfep[i[280015]]('.');const qpg = Math[i[280016]](svt3lz[i[280005]], dgfep[i[280005]]);while (svt3lz[i[280005]] < qpg) {
    svt3lz[i[280017]]('0');
  }while (dgfep[i[280005]] < qpg) {
    dgfep[i[280017]]('0');
  }for (var o8ij = 0x0; o8ij < qpg; o8ij++) {
    const t2sx3 = parseInt(svt3lz[o8ij]),
          h6fc = parseInt(dgfep[o8ij]);if (t2sx3 > h6fc) return 0x1;else {
      if (t2sx3 < h6fc) return -0x1;
    }
  }return 0x0;
}, window['SDKVersion'] = wx[i[280018]]()['SDKVersion'], console[i[280019]](i[280020] + window['SDKVersion']);var r_dnefqp = wx['getUpdateManager']();r_dnefqp['onCheckForUpdate'](function (xtsj) {
  console[i[280019]](i[280021] + xtsj[i[280022]]);
}), r_dnefqp[i[280023]](function () {
  wx[i[280024]]({ 'title': i[280025], 'content': i[280026], 'showCancel': ![], 'success': function (_h1u6a) {
      r_dnefqp[i[280027]]();
    } });
}), r_dnefqp[i[280028]](function () {
  console[i[280019]](i[280029]);
}), window['_rUYSFE'] = function () {
  console[i[280019]]('protobuf 分包加载');var v30l = wx[i[280030]]({ 'name': 'rPFr', 'success': function (ymwkr8) {
      console[i[280019]]('protobuf 分包加载成功'), console[i[280019]](ymwkr8), ymwkr8 && ymwkr8['errMsg'] == i[280031] ? (window['_rEF'] = !![], window['_rEYSF'](), window['_rEYFS']()) : setTimeout(function () {
        window['_rUYSFE']();
      }, 0x1f4);
    }, 'fail': function (dpfcn) {
      console[i[280019]]('protobuf 分包加载失败'), console[i[280019]](dpfcn), setTimeout(function () {
        window['_rUYSFE']();
      }, 0x1f4);
    } });v30l && v30l['onProgressUpdate'](fcd5n => {});
}, window['_rUYFSE'] = function () {
  console[i[280019]](i[280032]);var myr8k = wx[i[280030]]({ 'name': 'rmmmr', 'success': function (mrgkw7) {
      console[i[280019]](i[280033]), console[i[280019]](mrgkw7), mrgkw7 && mrgkw7['errMsg'] == i[280031] ? (window['_rYFE'] = !![], window['_rEYSF'](), window['_rEYFS']()) : setTimeout(function () {
        window['_rUYFSE']();
      }, 0x1f4);
    }, 'fail': function (s2t3) {
      console[i[280019]](i[280034]), console[i[280019]](s2t3), setTimeout(function () {
        window['_rUYFSE']();
      }, 0x1f4);
    } });myr8k && myr8k['onProgressUpdate'](nqfdpc => {});
}, window[i[280035]] = function () {
  window['_rUFEYS'](window['SDKVersion'], i[280036]) >= 0x0 ? (console[i[280019]](i[280037] + window['SDKVersion'] + i[280038]), window['_rYS'](), window['_rUYSFE'](), window['_rUYFSE']()) : (window['_rYES'](i[280039], window['SDKVersion']), wx[i[280024]]({ 'title': i[280040], 'content': i[280041] }));
}, window[i[280009]] = '', wx[i[280042]]({ 'success'(cd6n5) {
    window[i[280009]] = i[280043] + cd6n5['brand'] + i[280044] + cd6n5[i[280045]] + i[280046] + cd6n5['version'] + i[280047] + cd6n5[i[280048]] + i[280049] + cd6n5['platform'] + i[280050] + cd6n5['SDKVersion'] + i[280051] + cd6n5['benchmarkLevel'], console[i[280019]](window[i[280009]]), console[i[280019]](i[280052] + cd6n5[i[280053]] + i[280054] + cd6n5['screenWidth'] + i[280055] + cd6n5['screenHeight'] + i[280056] + cd6n5[i[280057]] + i[280058] + cd6n5[i[280059]] + i[280060] + cd6n5['statusBarHeight'] + i[280061] + (cd6n5['safeArea'] ? cd6n5['safeArea'][i[280062]] + ',' + cd6n5['safeArea'][i[280063]] + ',' + cd6n5['safeArea'][i[280064]] + ',' + cd6n5['safeArea']['right'] : ''));var z3tlsv = cd6n5[i[280048]] ? cd6n5[i[280048]]['toLowerCase']() : '',
        au1b = cd6n5[i[280045]] ? cd6n5[i[280045]]['toLowerCase']()['replace']('\x20', '') : '';window['_rYE'][i[280065]] = z3tlsv[i[280066]](i[280067]) != -0x1, window['_rYE']['wxAndroid'] = z3tlsv[i[280066]]('android') != -0x1, window['_rYE'][i[280068]] = z3tlsv[i[280066]](i[280067]) != -0x1 || z3tlsv[i[280066]]('android') != -0x1, window['_rYE'][i[280069]] = z3tlsv[i[280066]](i[280070]) != -0x1 || z3tlsv[i[280066]](i[280071]) != -0x1, window['_rYE']['wxPlatform'] = cd6n5['platform'] ? cd6n5['platform']['toLowerCase']() : '', window['_rYE']['_rUSYFE'] = ![], window['_rYE']['_rUSYEF'] = 0x2;if (z3tlsv[i[280066]]('android') != -0x1) {
      if (cd6n5['benchmarkLevel'] >= 0x18) window['_rYE']['_rUSYEF'] = 0x3;else window['_rYE']['_rUSYEF'] = 0x2;
    } else {
      if (z3tlsv[i[280066]](i[280067]) != -0x1) {
        if (cd6n5['benchmarkLevel'] && cd6n5['benchmarkLevel'] >= 0x14) window['_rYE']['_rUSYEF'] = 0x3;else {
          if (au1b[i[280066]](i[280072]) != -0x1 || au1b[i[280066]](i[280073]) != -0x1 || au1b[i[280066]](i[280074]) != -0x1 || au1b[i[280066]](i[280075]) != -0x1 || au1b[i[280066]](i[280076]) != -0x1) window['_rYE']['_rUSYEF'] = 0x2;else window['_rYE']['_rUSYEF'] = 0x3;
        }
      } else window['_rYE']['_rUSYEF'] = 0x2;
    }console[i[280019]](i[280077] + window['_rYE']['_rUSYFE'] + i[280078] + window['_rYE']['_rUSYEF']);
  } }), wx['getBatteryInfo']({ 'success': function (cd5nf6) {
    console[i[280019]](i[280079] + cd5nf6[i[280080]] + i[280081] + cd5nf6['isCharging']);
  } }), wx['getNetworkType']({ 'success': function (denqp) {
    console[i[280019]](i[280082] + denqp['networkType']);
  } }), wx['setKeepScreenOn']({ 'keepScreenOn': !![] }), wx['onNetworkStatusChange'](function (pg7deq) {
  console[i[280019]](i[280082] + pg7deq['networkType'] + i[280083] + pg7deq[i[280084]]);
}), wx[i[280085]](function (fn6hc5) {
  window['_rESF'] = fn6hc5, window['_rEFS'] && window['_rESF'] && (console[i[280000]](i[280086] + window['_rESF'][i[280087]]), window['_rEFS'](window['_rESF']), window['_rESF'] = null);
}), window['_rUYESF'] = 0x0, window['onMemoryWarningCallBack'] = null, wx['onMemoryWarning'](function () {
  window['_rUYESF']++, wx['triggerGC']();if (window['_rUYESF'] >= 0x2) {
    window['_rUYESF'] = 0x0, console['error'](i[280088]), wx['reportMonitor']('0', 0x1);if (window['_rYE'] && window['_rYE'][i[280065]]) window['_rYES'](i[280089], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});