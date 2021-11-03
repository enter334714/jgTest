var c = wx.$o;
console['info'](c[220000]), window['lastError'], wx['onError'](function (h8zprc) {
  if (h8zprc) {
    if (h8zprc[c[220001]]) {
      var p5mq = window['config'][c[220002]][c[220003]](new RegExp(/\./, 'g'), '_'),
          w4xg = h8zprc[c[220001]],
          crphz = w4xg[c[220004]](/(ooooooo\/oooGAME.js:)[0-9]{1,60}(:)/g);if (crphz) for (var bog9 = 0x0; bog9 < crphz[c[220005]]; bog9++) {
        var mrt5p;crphz[bog9] && 0x0 < crphz[bog9][c[220005]] && (mrt5p = parseInt(crphz[bog9][c[220003]]('ooooooo/oooGAME.js:', '')[c[220003]](':', '')), w4xg = w4xg[c[220003]](crphz[bog9], crphz[bog9][c[220003]](':' + mrt5p + ':', ':' + (mrt5p - 0x2) + ':')));
      }w4xg = (w4xg = w4xg[c[220003]](new RegExp('ooooooo/oooGAME.js', 'g'), 'ooooooo/main__' + p5mq + c[220006]))[c[220003]](new RegExp('ooooooo/ooooMAIN.js', 'g'), 'ooooooo/main__' + p5mq + c[220006]), h8zprc[c[220001]] = w4xg;
    }p5mq = { 'id': window['_oAE']['roleId'], 'role': window['_oAE']['roleName'], 'level': window['_oAE']['roleLevel'], 'user': window['_oAE']['account'], 'version': window['_oAE']['lastVersion'], 'gamever': window['config'][c[220002]], 'cdn': window['_oAE'][c[220007]], 'serverid': window['_oAE'][c[220008]] ? window['_oAE'][c[220008]][c[220009]] : 0x0, 'systemInfo': window['systemInfo'], 'error': 'MiniProgramError', 'stack': h8zprc ? h8zprc[c[220001]] : '' }, h8zprc = JSON[c[220010]](p5mq), (console['error'](c[220011] + h8zprc), window['lastError'] && window['lastError'] == p5mq['error'] || (window['lastError'] = p5mq['error'], window['_oUA'](p5mq)));
  }
});import 'oooMDadfa.js';import 'oooasdf.js';window[c[220012]] = require('oooooparse.js');import 'oooooINDEX.js';import 'ooooLIBsdsa.js';import 'oooWXMsad.js';import 'ooooINITMIN.js';import 'SyMiniTool.js';console['info'](c[220013]), console['info'](c[220014]), _oUA8E({ 'title': c[220015] });var o_$e_ky0 = { '_oQ8UAE': !0x0 };new window['ServerLoading'](o_$e_ky0), window['ServerLoading'][c[220016]]['_oQ8EUA'](), window['_oQUE8A'] && clearInterval(window['_oQUE8A']), window['_oQUE8A'] = null, window['_oQ8EAU'] = function (rstq5, o9gxf4) {
  if (!rstq5 || !o9gxf4) return 0x0;rstq5 = rstq5[c[220017]]('.'), o9gxf4 = o9gxf4[c[220017]]('.');var fw94x1 = Math[c[220018]](rstq5[c[220005]], o9gxf4[c[220005]]);for (; rstq5[c[220005]] < fw94x1;) rstq5[c[220019]]('0');for (; o9gxf4[c[220005]] < fw94x1;) o9gxf4[c[220019]]('0');for (var t5pqr = 0x0; t5pqr < fw94x1; t5pqr++) {
    var ohzbc = parseInt(rstq5[t5pqr]),
        _y3eun = parseInt(o9gxf4[t5pqr]);if (_y3eun < ohzbc) return 0x1;if (ohzbc < _y3eun) return -0x1;
  }return 0x0;
}, window['SDKVersion'] = wx['getSystemInfoSync']()['SDKVersion'], console['log'](c[220020] + window['SDKVersion']);var o__3uvln = wx[c[220021]]();o__3uvln['onCheckForUpdate'](function ($k0j) {
  console['log'](c[220022] + $k0j[c[220023]]);
}), o__3uvln['onUpdateReady'](function () {
  wx['showModal']({ 'title': c[220024], 'content': c[220025], 'showCancel': !0x1, 'success': function (ald63) {
      o__3uvln[c[220026]]();
    } });
}), o__3uvln['onUpdateFailed'](function () {
  console['log'](c[220027]);
}), window['_oQAU8E'] = function () {
  console['log']('protobuf 分包加载');var q7ms = wx['loadSubpackage']({ 'name': 'oooooPF', 'success': function (i2wd16) {
      console['log']('protobuf 分包加载成功'), console['log'](i2wd16), i2wd16 && 'loadSubpackage:ok' == i2wd16[c[220028]] ? (window['_oE8'] = !0x0, window['_oEAU8'](), window['_oEA8U']()) : setTimeout(function () {
        window['_oQAU8E']();
      }, 0x1f4);
    }, 'fail': function ($_k0e) {
      console['log']('protobuf 分包加载失败'), console['log']($_k0e), setTimeout(function () {
        window['_oQAU8E']();
      }, 0x1f4);
    } });q7ms && q7ms['onProgressUpdate'](ox49g => {});
}, window['_oQA8UE'] = function () {
  console['log'](c[220029]);var gohx4b = wx['loadSubpackage']({ 'name': 'ooooooo', 'success': function (x9ob) {
      console['log'](c[220030]), console['log'](x9ob), x9ob && 'loadSubpackage:ok' == x9ob[c[220028]] ? (window['_oA8E'] = !0x0, window['_oEAU8'](), window['_oEA8U']()) : setTimeout(function () {
        window['_oQA8UE']();
      }, 0x1f4);
    }, 'fail': function (b49xog) {
      console['log'](c[220031]), console['log'](b49xog), setTimeout(function () {
        window['_oQA8UE']();
      }, 0x1f4);
    } });gohx4b && gohx4b['onProgressUpdate'](mrpq5 => {});
}, window['loadSubpackages'] = function () {
  0x0 <= window['_oQ8EAU'](window['SDKVersion'], c[220032]) ? (console['log'](c[220033] + window['SDKVersion'] + c[220034]), window['_oAU'](), window['_oQAU8E'](), window['_oQA8UE']()) : (window['_oAEU'](c[220035], window['SDKVersion']), wx['showModal']({ 'title': c[220036], 'content': c[220037] }));
}, window['systemInfo'] = '', wx['getSystemInfo']({ 'success'(ox94f) {
    window['systemInfo'] = c[220038] + ox94f[c[220039]] + c[220040] + ox94f['model'] + c[220041] + ox94f['version'] + c[220042] + ox94f[c[220043]] + c[220044] + ox94f['platform'] + c[220045] + ox94f['SDKVersion'] + c[220046] + ox94f[c[220047]], console['log'](window['systemInfo']), console['log'](c[220048] + ox94f['pixelRatio'] + c[220049] + ox94f[c[220050]] + c[220051] + ox94f[c[220052]] + c[220053] + ox94f['windowWidth'] + c[220054] + ox94f['windowHeight'] + c[220055] + ox94f[c[220056]] + c[220057] + (ox94f[c[220058]] ? ox94f[c[220058]]['top'] + ',' + ox94f[c[220058]]['bottom'] + ',' + ox94f[c[220058]][c[220059]] + ',' + ox94f[c[220058]][c[220060]] : ''));var al36v = ox94f[c[220043]] ? ox94f[c[220043]]['toLowerCase']() : '',
        idl6a = ox94f['model'] ? ox94f['model']['toLowerCase']()[c[220003]]('\x20', '') : '';window['_oAE'][c[220061]] = -0x1 != al36v[c[220062]]('ios'), window['_oAE']['wxAndroid'] = -0x1 != al36v[c[220062]]('android'), window['_oAE']['wxPhone'] = -0x1 != al36v[c[220062]]('ios') || -0x1 != al36v[c[220062]]('android'), window['_oAE'][c[220063]] = -0x1 != al36v[c[220062]]('windows') || -0x1 != al36v[c[220062]](c[220064]), window['_oAE']['wxPlatform'] = ox94f['platform'] ? ox94f['platform']['toLowerCase']() : '', window['_oAE']['_oQUA8E'] = !0x1, window['_oAE']['_oQUAE8'] = 0x2, -0x1 != al36v[c[220062]]('android') ? 0x18 <= ox94f[c[220047]] ? window['_oAE']['_oQUAE8'] = 0x3 : window['_oAE']['_oQUAE8'] = 0x2 : -0x1 == al36v[c[220062]]('ios') || !(ox94f[c[220047]] && 0x14 <= ox94f[c[220047]] || -0x1 == idl6a[c[220062]]('iphone5') && -0x1 == idl6a[c[220062]]('iphone6') && -0x1 == idl6a[c[220062]]('iphone7') && -0x1 == idl6a[c[220062]]('iphonese') && -0x1 == idl6a[c[220062]](c[220065])) ? window['_oAE']['_oQUAE8'] = 0x2 : window['_oAE']['_oQUAE8'] = 0x3, console['log'](c[220066] + window['_oAE']['_oQUA8E'] + c[220067] + window['_oAE']['_oQUAE8']);
  } }), wx['getBatteryInfo']({ 'success': function (bx94o) {
    console['log'](c[220068] + bx94o[c[220069]] + c[220070] + bx94o[c[220071]]);
  } }), wx['getNetworkType']({ 'success': function (x94fwg) {
    console['log'](c[220072] + x94fwg['networkType']);
  } }), wx[c[220073]]({ 'keepScreenOn': !0x0 }), wx['onNetworkStatusChange'](function (a6l3dv) {
  console['log'](c[220072] + a6l3dv['networkType'] + c[220074] + a6l3dv['isConnected']);
}), wx['onShow'](function (wi1x9f) {
  window['_oEU8'] = wi1x9f, window['_oE8U'] && window['_oEU8'] && (console['info'](c[220075] + window['_oEU8'][c[220076]]), window['_oE8U'](window['_oEU8']), window['_oEU8'] = null);
}), window['_oQAEU8'] = 0x0, window['onMemoryWarningCallBack'] = null, wx['onMemoryWarning'](function () {
  window['_oQAEU8']++, wx[c[220077]](), 0x2 <= window['_oQAEU8'] && (window['_oQAEU8'] = 0x0, console['error'](c[220078]), wx['reportMonitor']('0', 0x1), window['_oAE'] && window['_oAE'][c[220061]] && window['_oAEU'](c[220079], ''), onMemoryWarningCallBack && onMemoryWarningCallBack());
});