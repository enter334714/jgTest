var p = wx.$h;
console[p[60009]](p[0x10d7f]), window[p[77282]], wx[p[77283]](function (cgfb) {
  if (cgfb) {
    if (cgfb[p[70039]]) {
      var dfeabc = window[p[69459]][p[77284]]['replace'](new RegExp(/\./, 'g'), '_'),
          lpknom = cgfb[p[70039]],
          lonmkj = lpknom[p[71677]](/(cccccccc\/cccgame.js:)[0-9]{1,60}(:)/g);if (lonmkj) for (var vwtys = 0x0; vwtys < lonmkj[p[66224]]; vwtys++) {
        var tqpors;lonmkj[vwtys] && 0x0 < lonmkj[vwtys][p[66224]] && (tqpors = parseInt(lonmkj[vwtys]['replace'](p[0x10d80], '')['replace'](':', '')), lpknom = lpknom['replace'](lonmkj[vwtys], lonmkj[vwtys]['replace'](':' + tqpors + ':', ':' + (tqpors - 0x2) + ':')));
      }lpknom = (lpknom = lpknom['replace'](new RegExp(p[0x10d81], 'g'), p[0x10d82] + dfeabc + p[0x108f4]))['replace'](new RegExp(p[0x10d83], 'g'), p[0x10d82] + dfeabc + p[0x108f4]), cgfb[p[70039]] = lpknom;
    }dfeabc = { 'id': window['$aCD'][p[77285]], 'role': window['$aCD'][p[61785]], 'level': window['$aCD'][p[77286]], 'user': window['$aCD']['account'], 'version': window['$aCD'][p[69232]], 'gamever': window[p[69459]][p[77284]], 'cdn': window['$aCD'][p[70038]], 'serverid': window['$aCD'][p[76223]] ? window['$aCD'][p[76223]][p[71605]] : 0x0, 'systemInfo': window[p[77287]], 'error': p[0x10d84], 'stack': cgfb ? cgfb[p[70039]] : '' }, cgfb = JSON[p[70032]](dfeabc), (console[p[60007]](p[0x10d85] + cgfb), window[p[77282]] && window[p[77282]] == dfeabc[p[60007]] || (window[p[77282]] = dfeabc[p[60007]], window['$aAC'](dfeabc)));
  }
});import 'cccmd5min.js';import 'ccczlibs.js';window[p[77288]] = require('cccdomparser.js');import 'cccindex.js';import 'ccclibsmin.js';import 'cccwxmini.js';import 'cccinitmin.js';console[p[60009]](p[0x10d86]), console[p[60009]](p[0x10d87]), $aACBD({ 'title': p[0x10d88] });var a_rnpq = { '$aDCE': !0x0 };new window[p[77289]](a_rnpq), window[p[77289]][p[60023]]['$aBCDE'](), window['$aCE'] && clearInterval(window['$aCE']), window['$aCE'] = null, window['$aBCED'] = function (pvsr, wtvsq) {
  if (!pvsr || !wtvsq) return 0x0;pvsr = pvsr['split']('.'), wtvsq = wtvsq['split']('.');var $z_0xy = Math[p[62668]](pvsr[p[66224]], wtvsq[p[66224]]);for (; pvsr[p[66224]] < $z_0xy;) pvsr['push']('0');for (; wtvsq[p[66224]] < $z_0xy;) wtvsq['push']('0');for (var igk = 0x0; igk < $z_0xy; igk++) {
    var eghij = parseInt(pvsr[igk]),
        dabe = parseInt(wtvsq[igk]);if (dabe < eghij) return 0x1;if (eghij < dabe) return -0x1;
  }return 0x0;
}, window[p[77290]] = wx[p[77291]]()[p[77290]], console[p[69423]](p[0x10d89] + window[p[77290]]);var a_lhimkj = wx['getUpdateManager']();a_lhimkj['onCheckForUpdate'](function (rnqpm) {
  console[p[69423]](p[0x10d8a] + rnqpm['hasUpdate']);
}), a_lhimkj['onUpdateReady'](function () {
  wx[p[77292]]({ 'title': p[0x10d8b], 'content': p[0x10d8c], 'showCancel': !0x1, 'success': function (z0x_) {
      a_lhimkj['applyUpdate']();
    } });
}), a_lhimkj['onUpdateFailed'](function () {
  console[p[69423]](p[0x10d8d]);
}), window['$aBDCE'] = function () {
  console[p[69423]]('protobuf 分包加载');var fjehi = wx['loadSubpackage']({ 'name': cccccf, 'success': function (onrmp) {
      console[p[69423]]('protobuf 分包加载成功'), console[p[69423]](onrmp), onrmp && 'loadSubpackage:ok' == onrmp[p[76261]] ? (window['$aDB'] = !0x0, window['$aDCAB'](), window['$aDCBA']()) : setTimeout(function () {
        window['$aBDCE']();
      }, 0x1f4);
    }, 'fail': function (iehgjf) {
      console[p[69423]]('protobuf 分包加载失败'), console[p[69423]](iehgjf), setTimeout(function () {
        window['$aBDCE']();
      }, 0x1f4);
    } });fjehi && fjehi['onProgressUpdate'](x$w_ => {});
}, window['$aBECD'] = function () {
  console[p[69423]](p[0x10d8e]);var ijeg = wx['loadSubpackage']({ 'name': cccccccc, 'success': function (nplq) {
      console[p[69423]](p[0x10d8f]), console[p[69423]](nplq), nplq && 'loadSubpackage:ok' == nplq[p[76261]] ? (window['$aCBD'] = !0x0, window['$aDCAB'](), window['$aDCBA']()) : setTimeout(function () {
        window['$aBECD']();
      }, 0x1f4);
    }, 'fail': function (_4312) {
      console[p[69423]](p[0x10d90]), console[p[69423]](_4312), setTimeout(function () {
        window['$aBECD']();
      }, 0x1f4);
    } });ijeg && ijeg['onProgressUpdate'](lhki => {});
}, window['loadSubpackages'] = function () {
  0x0 <= window['$aBCED'](window[p[77290]], p[0x10d91]) ? (console[p[69423]](p[0x10d92] + window[p[77290]] + p[0x10d93]), window['$aCA'](), window['$aBDCE'](), window['$aBECD']()) : (window['$aCDA'](p[0x10d94] + window[p[77290]]), wx[p[77292]]({ 'title': p[0xf37d], 'content': p[0x10d95] }));
}, window[p[77287]] = '', wx[p[77293]]({ 'success'(sxrvt) {
    window[p[77287]] = p[0x10d96] + sxrvt[p[77294]] + p[0x10d97] + sxrvt[p[77295]] + p[0x10d98] + sxrvt[p[67765]] + p[0x10d99] + sxrvt[p[69419]] + p[0x10d9a] + sxrvt['platform'] + p[0x10d9b] + sxrvt[p[77290]] + p[0x10d9c] + sxrvt[p[71191]], console[p[69423]](window[p[77287]]), console[p[69423]](p[0x10d9d] + sxrvt['pixelRatio'] + p[0x10d9e] + sxrvt[p[77296]] + p[0x10d9f] + sxrvt[p[77297]] + p[0x10da0] + sxrvt[p[77298]] + p[0x10da1] + sxrvt[p[77299]] + p[0x10da2] + sxrvt['statusBarHeight'] + p[0x10da3] + (sxrvt[p[77300]] ? sxrvt[p[77300]]['top'] + ',' + sxrvt[p[77300]][p[68098]] + ',' + sxrvt[p[77300]][p[63814]] + ',' + sxrvt[p[77300]][p[62565]] : ''));var cfdabe = sxrvt[p[69419]] ? sxrvt[p[69419]][p[71747]]() : '',
        ilkjhm = sxrvt[p[77295]] ? sxrvt[p[77295]][p[71747]]()['replace']('\x20', '') : '';window['$aCD'][p[69458]] = -0x1 != cfdabe[p[69237]](p[0x10da4]), window['$aCD'][p[71577]] = -0x1 != cfdabe[p[69237]](p[0x10d44]), window['$aCD'][p[77301]] = -0x1 != cfdabe[p[69237]](p[0x10da4]) || -0x1 != cfdabe[p[69237]](p[0x10d44]), window['$aCD'][p[76150]] = -0x1 != cfdabe[p[69237]](p[0x10d45]) || -0x1 != cfdabe[p[69237]](p[0x10da5]), window['$aCD'][p[77302]] = sxrvt['platform'] ? sxrvt['platform'][p[71747]]() : '', window['$aCD']['$aCDE'] = !0x1, -(window['$aCD']['$aCED'] = 0x1) != cfdabe[p[69237]](p[0x10d44]) ? 0x18 <= sxrvt[p[71191]] ? window['$aCD']['$aCED'] = 0x2 : window['$aCD']['$aCED'] = 0x1 : -0x1 == cfdabe[p[69237]](p[0x10da4]) || !(sxrvt[p[71191]] && 0x14 <= sxrvt[p[71191]] || -0x1 == ilkjhm[p[69237]]('iphone5') && -0x1 == ilkjhm[p[69237]]('iphone6') && -0x1 == ilkjhm[p[69237]]('iphone7') && -0x1 == ilkjhm[p[69237]]('iphonese') && -0x1 == ilkjhm[p[69237]]('ipad')) ? window['$aCD']['$aCED'] = 0x1 : window['$aCD']['$aCED'] = 0x2, console[p[69423]](p[0x10da6] + window['$aCD']['$aCDE'] + p[0x10da7] + window['$aCD']['$aCED']);
  } }), wx[p[77303]]({ 'success': function ($yx0) {
    console[p[69423]](p[0x10da8] + $yx0[p[61777]] + p[0x10da9] + $yx0[p[77304]]);
  } }), wx['getNetworkType']({ 'success': function (hdfi) {
    console[p[69423]](p[0x10daa] + hdfi['networkType']);
  } }), wx['setKeepScreenOn']({ 'keepScreenOn': !0x0 }), wx['onNetworkStatusChange'](function (hedif) {
  console[p[69423]](p[0x10daa] + hedif['networkType'] + p[0x10dab] + hedif[p[77305]]);
}), wx[p[77306]](function ($01z_) {
  window['$aDAB'] = $01z_, window['$aDBA'] && window['$aDAB'] && (console[p[60009]](p[0x10dac] + window['$aDAB'][p[60142]]), window['$aDBA'](window['$aDAB']), window['$aDAB'] = null);
}), window['$aBDE'] = 0x0, window[p[77307]] = null, wx[p[77308]](function () {
  window['$aBDE']++, wx[p[71622]](), 0x2 <= window['$aBDE'] && (window['$aBDE'] = 0x0, console[p[60007]](p[0x10dad]), wx['reportMonitor']('0', 0x1), window['$aCD'] && window['$aCD'][p[69458]] && window['$aCDA'](p[0x10dae]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});