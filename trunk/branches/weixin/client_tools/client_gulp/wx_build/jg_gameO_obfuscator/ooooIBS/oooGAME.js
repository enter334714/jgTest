var c = wx.$o;
console['info'](c[220000]), window['lastError'], wx['onError'](function (_neku) {
  if (_neku) {
    if (_neku[c[220001]]) {
      var v_3nyu = window['config'][c[220002]][c[220003]](new RegExp(/\./, 'g'), '_'),
          oz8ch = _neku[c[220001]],
          bghx = oz8ch[c[220004]](/(ooooooo\/oooGAME.js:)[0-9]{1,60}(:)/g);if (bghx) for (var ald6v = 0x0; ald6v < bghx[c[220005]]; ald6v++) {
        var ia2d16;bghx[ald6v] && 0x0 < bghx[ald6v][c[220005]] && (ia2d16 = parseInt(bghx[ald6v][c[220003]]('ooooooo/oooGAME.js:', '')[c[220003]](':', '')), oz8ch = oz8ch[c[220003]](bghx[ald6v], bghx[ald6v][c[220003]](':' + ia2d16 + ':', ':' + (ia2d16 - 0x2) + ':')));
      }oz8ch = (oz8ch = oz8ch[c[220003]](new RegExp('ooooooo/oooGAME.js', 'g'), 'ooooooo/main__' + v_3nyu + c[220006]))[c[220003]](new RegExp('ooooooo/ooooMAIN.js', 'g'), 'ooooooo/main__' + v_3nyu + c[220006]), _neku[c[220001]] = oz8ch;
    }v_3nyu = { 'id': window['_oAE']['roleId'], 'role': window['_oAE']['roleName'], 'level': window['_oAE']['roleLevel'], 'user': window['_oAE']['account'], 'version': window['_oAE']['lastVersion'], 'gamever': window['config'][c[220002]], 'cdn': window['_oAE'][c[220007]], 'serverid': window['_oAE'][c[220008]] ? window['_oAE'][c[220008]][c[220009]] : 0x0, 'systemInfo': window['systemInfo'], 'error': 'MiniProgramError', 'stack': _neku ? _neku[c[220001]] : '' }, _neku = JSON[c[220010]](v_3nyu), (console['error'](c[220011] + _neku), window['lastError'] && window['lastError'] == v_3nyu['error'] || (window['lastError'] = v_3nyu['error'], window['_oUA'](v_3nyu)));
  }
});import 'oooMDadfa.js';import 'oooasdf.js';window[c[220012]] = require('oooooparse.js');import 'oooooINDEX.js';import 'ooooLIBsdsa.js';import 'oooWXMsad.js';import 'ooooINITMIN.js';import 'SyMiniTool.js';console['info'](c[220013]), console['info'](c[220014]), _oUA8E({ 'title': c[220015] });var o_x9wf1i = { '_oQ8UAE': !0x0 };new window['ServerLoading'](o_x9wf1i), window['ServerLoading'][c[220016]]['_oQ8EUA'](), window['_oQUE8A'] && clearInterval(window['_oQUE8A']), window['_oQUE8A'] = null, window['_oQ8EAU'] = function (mr5cp, k$_ey0) {
  if (!mr5cp || !k$_ey0) return 0x0;mr5cp = mr5cp[c[220017]]('.'), k$_ey0 = k$_ey0[c[220017]]('.');var m75tq = Math[c[220018]](mr5cp[c[220005]], k$_ey0[c[220005]]);for (; mr5cp[c[220005]] < m75tq;) mr5cp[c[220019]]('0');for (; k$_ey0[c[220005]] < m75tq;) k$_ey0[c[220019]]('0');for (var ghb4ox = 0x0; ghb4ox < m75tq; ghb4ox++) {
    var gfw49 = parseInt(mr5cp[ghb4ox]),
        pr5mc8 = parseInt(k$_ey0[ghb4ox]);if (pr5mc8 < gfw49) return 0x1;if (gfw49 < pr5mc8) return -0x1;
  }return 0x0;
}, window['SDKVersion'] = wx['getSystemInfoSync']()['SDKVersion'], console['log'](c[220020] + window['SDKVersion']);var o_xw194 = wx[c[220021]]();o_xw194['onCheckForUpdate'](function (ghobz8) {
  console['log'](c[220022] + ghobz8[c[220023]]);
}), o_xw194['onUpdateReady'](function () {
  wx['showModal']({ 'title': c[220024], 'content': c[220025], 'showCancel': !0x1, 'success': function (hbc8z) {
      o_xw194[c[220026]]();
    } });
}), o_xw194['onUpdateFailed'](function () {
  console['log'](c[220027]);
}), window['_oQAU8E'] = function () {
  console['log']('protobuf 分包加载');var al3v6d = wx['loadSubpackage']({ 'name': 'oooooPF', 'success': function (obz4gh) {
      console['log']('protobuf 分包加载成功'), console['log'](obz4gh), obz4gh && 'loadSubpackage:ok' == obz4gh[c[220028]] ? (window['_oE8'] = !0x0, window['_oEAU8'](), window['_oEA8U']()) : setTimeout(function () {
        window['_oQAU8E']();
      }, 0x1f4);
    }, 'fail': function (vuny3) {
      console['log']('protobuf 分包加载失败'), console['log'](vuny3), setTimeout(function () {
        window['_oQAU8E']();
      }, 0x1f4);
    } });al3v6d && al3v6d['onProgressUpdate'](yjk => {});
}, window['_oQA8UE'] = function () {
  console['log'](c[220029]);var qmr5p = wx['loadSubpackage']({ 'name': 'ooooooo', 'success': function (mpt5) {
      console['log'](c[220030]), console['log'](mpt5), mpt5 && 'loadSubpackage:ok' == mpt5[c[220028]] ? (window['_oA8E'] = !0x0, window['_oEAU8'](), window['_oEA8U']()) : setTimeout(function () {
        window['_oQA8UE']();
      }, 0x1f4);
    }, 'fail': function (cmtp5) {
      console['log'](c[220031]), console['log'](cmtp5), setTimeout(function () {
        window['_oQA8UE']();
      }, 0x1f4);
    } });qmr5p && qmr5p['onProgressUpdate'](_yk0e => {});
}, window['loadSubpackages'] = function () {
  0x0 <= window['_oQ8EAU'](window['SDKVersion'], c[220032]) ? (console['log'](c[220033] + window['SDKVersion'] + c[220034]), window['_oAU'](), window['_oQAU8E'](), window['_oQA8UE']()) : (window['_oAEU'](c[220035], window['SDKVersion']), wx['showModal']({ 'title': c[220036], 'content': c[220037] }));
}, window['systemInfo'] = '', wx['getSystemInfo']({ 'success'(wf19x4) {
    window['systemInfo'] = c[220038] + wf19x4[c[220039]] + c[220040] + wf19x4['model'] + c[220041] + wf19x4['version'] + c[220042] + wf19x4[c[220043]] + c[220044] + wf19x4['platform'] + c[220045] + wf19x4['SDKVersion'] + c[220046] + wf19x4[c[220047]], console['log'](window['systemInfo']), console['log'](c[220048] + wf19x4['pixelRatio'] + c[220049] + wf19x4[c[220050]] + c[220051] + wf19x4[c[220052]] + c[220053] + wf19x4['windowWidth'] + c[220054] + wf19x4['windowHeight'] + c[220055] + wf19x4[c[220056]] + c[220057] + (wf19x4[c[220058]] ? wf19x4[c[220058]]['top'] + ',' + wf19x4[c[220058]]['bottom'] + ',' + wf19x4[c[220058]][c[220059]] + ',' + wf19x4[c[220058]][c[220060]] : ''));var v_un3y = wf19x4[c[220043]] ? wf19x4[c[220043]]['toLowerCase']() : '',
        _uye3n = wf19x4['model'] ? wf19x4['model']['toLowerCase']()[c[220003]]('\x20', '') : '';window['_oAE'][c[220061]] = -0x1 != v_un3y[c[220062]]('ios'), window['_oAE']['wxAndroid'] = -0x1 != v_un3y[c[220062]]('android'), window['_oAE']['wxPhone'] = -0x1 != v_un3y[c[220062]]('ios') || -0x1 != v_un3y[c[220062]]('android'), window['_oAE'][c[220063]] = -0x1 != v_un3y[c[220062]]('windows') || -0x1 != v_un3y[c[220062]](c[220064]), window['_oAE']['wxPlatform'] = wf19x4['platform'] ? wf19x4['platform']['toLowerCase']() : '', window['_oAE']['_oQUA8E'] = !0x1, window['_oAE']['_oQUAE8'] = 0x2, -0x1 != v_un3y[c[220062]]('android') ? 0x18 <= wf19x4[c[220047]] ? window['_oAE']['_oQUAE8'] = 0x3 : window['_oAE']['_oQUAE8'] = 0x2 : -0x1 == v_un3y[c[220062]]('ios') || !(wf19x4[c[220047]] && 0x14 <= wf19x4[c[220047]] || -0x1 == _uye3n[c[220062]]('iphone5') && -0x1 == _uye3n[c[220062]]('iphone6') && -0x1 == _uye3n[c[220062]]('iphone7') && -0x1 == _uye3n[c[220062]]('iphonese') && -0x1 == _uye3n[c[220062]](c[220065])) ? window['_oAE']['_oQUAE8'] = 0x2 : window['_oAE']['_oQUAE8'] = 0x3, console['log'](c[220066] + window['_oAE']['_oQUA8E'] + c[220067] + window['_oAE']['_oQUAE8']);
  } }), wx['getBatteryInfo']({ 'success': function (u_y3e) {
    console['log'](c[220068] + u_y3e[c[220069]] + c[220070] + u_y3e[c[220071]]);
  } }), wx['getNetworkType']({ 'success': function (t7qs5) {
    console['log'](c[220072] + t7qs5['networkType']);
  } }), wx[c[220073]]({ 'keepScreenOn': !0x0 }), wx['onNetworkStatusChange'](function (tm5qp) {
  console['log'](c[220072] + tm5qp['networkType'] + c[220074] + tm5qp['isConnected']);
}), wx['onShow'](function (m5ptrc) {
  window['_oEU8'] = m5ptrc, window['_oE8U'] && window['_oEU8'] && (console['info'](c[220075] + window['_oEU8'][c[220076]]), window['_oE8U'](window['_oEU8']), window['_oEU8'] = null);
}), window['_oQAEU8'] = 0x0, window['onMemoryWarningCallBack'] = null, wx['onMemoryWarning'](function () {
  window['_oQAEU8']++, wx[c[220077]](), 0x2 <= window['_oQAEU8'] && (window['_oQAEU8'] = 0x0, console['error'](c[220078]), wx['reportMonitor']('0', 0x1), window['_oAE'] && window['_oAE'][c[220061]] && window['_oAEU'](c[220079], ''), onMemoryWarningCallBack && onMemoryWarningCallBack());
});