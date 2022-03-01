var k = wx.$f;
console[k[60077]](k[88200]), window[k[88201]], wx[k[88202]](function (kh50qt) {
  if (kh50qt) {
    if (kh50qt[k[64182]]) {
      var zr$e87 = window[k[60543]][k[88203]][k[64349]](new RegExp(/\./, 'g'), '_'),
          h0tmfq = kh50qt[k[64182]],
          snexwz = h0tmfq[k[71264]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (snexwz) for (var c_4o6 = 0x0; c_4o6 < snexwz[k[60013]]; c_4o6++) {
        if (snexwz[c_4o6] && snexwz[c_4o6][k[60013]] > 0x0) {
          var nsjdx = parseInt(snexwz[c_4o6][k[64349]](k[88204], '')[k[64349]](':', ''));h0tmfq = h0tmfq[k[64349]](snexwz[c_4o6], snexwz[c_4o6][k[64349]](':' + nsjdx + ':', ':' + (nsjdx - 0x2) + ':'));
        }
      }h0tmfq = h0tmfq[k[64349]](new RegExp(k[88205], 'g'), k[88206] + zr$e87 + k[84384]), h0tmfq = h0tmfq[k[64349]](new RegExp(k[88207], 'g'), k[88206] + zr$e87 + k[84384]), kh50qt[k[64182]] = h0tmfq;
    }var ifum = { 'id': window['F$L6'][k[88208]], 'role': window['F$L6'][k[64292]], 'level': window['F$L6'][k[88209]], 'user': window['F$L6'][k[84286]], 'version': window['F$L6'][k[60100]], 'cdn': window['F$L6'][k[64180]], 'pkgName': window['F$L6'][k[84287]], 'gamever': window[k[60543]][k[88203]], 'serverid': window['F$L6'][k[84281]] ? window['F$L6'][k[84281]][k[70699]] : 0x0, 'systemInfo': window[k[88210]], 'error': k[88211], 'stack': kh50qt ? kh50qt[k[64182]] : '' },
        wdxnse = JSON[k[64166]](ifum);console[k[60124]](k[88212] + wdxnse), (!window[k[88201]] || window[k[88201]] != ifum[k[60124]]) && (window[k[88201]] = ifum[k[60124]], window['F$0L'](ifum));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[88213]] = require(k[88214]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';import 'SyMiniTool.js';console[k[60077]](k[88215]), console[k[60077]](k[88216]), F$0L86({ 'title': k[88217] });var ft0hq5k = { 'F$I06L8': !![] };new window[k[88218]](ft0hq5k), window[k[88218]][k[60144]]['F$I8L60']();if (window['F$I0L68']) clearInterval(window['F$I0L68']);window['F$I0L68'] = null, window['F$I860L'] = function (_25q4, ze8$7) {
  if (!_25q4 || !ze8$7) return 0x0;_25q4 = _25q4[k[60015]]('.'), ze8$7 = ze8$7[k[60015]]('.');const vu9g = Math[k[60826]](_25q4[k[60013]], ze8$7[k[60013]]);while (_25q4[k[60013]] < vu9g) {
    _25q4[k[60029]]('0');
  }while (ze8$7[k[60013]] < vu9g) {
    ze8$7[k[60029]]('0');
  }for (var esdwn = 0x0; esdwn < vu9g; esdwn++) {
    const _ok246 = parseInt(_25q4[esdwn]),
          cdnw = parseInt(ze8$7[esdwn]);if (_ok246 > cdnw) return 0x1;else {
      if (_ok246 < cdnw) return -0x1;
    }
  }return 0x0;
}, window[k[88219]] = wx[k[88220]]()[k[88219]], console[k[60472]](k[88221] + window[k[88219]]);var fk524_6 = wx[k[88222]]();fk524_6['onCheckForUpdate'](function (bv91ug) {
  console[k[60472]](k[88223] + bv91ug[k[88224]]);
}), fk524_6[k[88225]](function () {
  wx[k[88226]]({ 'title': k[88227], 'content': k[88228], 'showCancel': ![], 'success': function (imbvtf) {
      fk524_6[k[88229]]();
    } });
}), fk524_6['onUpdateFailed'](function () {
  console[k[60472]](k[88230]);
}), window['F$I86L0'] = function () {
  console[k[60472]](k[88231]);var q04k_ = wx[k[88232]]({ 'name': k[88233], 'success': function (vubfmi) {
      console[k[60472]](k[88234]), console[k[60472]](vubfmi), vubfmi && vubfmi[k[84471]] == k[88235] ? (window['F$68'] = !![], window['F$68L0'](), window['F$6L08']()) : setTimeout(function () {
        window['F$I86L0']();
      }, 0x1f4);
    }, 'fail': function (fmtbh) {
      console[k[60472]](k[88236]), console[k[60472]](fmtbh), setTimeout(function () {
        window['F$I86L0']();
      }, 0x1f4);
    } });q04k_ && q04k_[k[87460]](ndjx => {});
}, window['F$IL068'] = function () {
  console[k[60472]](k[88237]);var zwexs = wx[k[88232]]({ 'name': k[88238], 'success': function (dxsw) {
      console[k[60472]](k[88239]), console[k[60472]](dxsw), dxsw && dxsw[k[84471]] == k[88235] ? (window['F$L86'] = !![], window['F$68L0'](), window['F$6L08']()) : setTimeout(function () {
        window['F$IL068']();
      }, 0x1f4);
    }, 'fail': function (uvfbim) {
      console[k[60472]](k[88240]), console[k[60472]](uvfbim), setTimeout(function () {
        window['F$IL068']();
      }, 0x1f4);
    } });zwexs && zwexs[k[87460]](dwnj => {});
}, window[k[88241]] = function () {
  window['F$I860L'](window[k[88219]], k[88242]) >= 0x0 ? (console[k[60472]](k[88243] + window[k[88219]] + k[88244]), window['F$L0'](), window['F$I86L0'](), window['F$IL068']()) : (window['F$L60'](k[88245], window[k[88219]]), wx[k[88226]]({ 'title': k[65878], 'content': k[88246] }));
}, window[k[88210]] = '', wx[k[88247]]({ 'success'(v9i) {
    window[k[88210]] = k[88248] + v9i[k[88249]] + k[88250] + v9i[k[88251]] + k[88252] + v9i[k[64362]] + k[88253] + v9i[k[60465]] + k[88254] + v9i[k[84252]] + k[88255] + v9i[k[88219]] + k[88256] + v9i[k[68672]], console[k[60472]](window[k[88210]]), console[k[60472]](k[88257] + v9i[k[88258]] + k[88259] + v9i[k[88260]] + k[88261] + v9i[k[88262]] + k[88263] + v9i[k[88264]] + k[88265] + v9i[k[88266]] + k[88267] + v9i[k[88268]] + k[88269] + (v9i[k[88270]] ? v9i[k[88270]][k[60316]] + ',' + v9i[k[88270]][k[61143]] + ',' + v9i[k[88270]][k[61145]] + ',' + v9i[k[88270]][k[61144]] : ''));var cnjdsw = v9i[k[60465]] ? v9i[k[60465]][k[71546]]() : '',
        q2k5_ = v9i[k[88251]] ? v9i[k[88251]][k[71546]]()[k[64349]]('\x20', '') : '';window['F$L6'][k[61007]] = cnjdsw[k[60114]](k[88271]) != -0x1, window['F$L6'][k[70534]] = cnjdsw[k[60114]](k[87671]) != -0x1, window['F$L6'][k[88272]] = cnjdsw[k[60114]](k[88271]) != -0x1 || cnjdsw[k[60114]](k[87671]) != -0x1, window['F$L6'][k[83991]] = cnjdsw[k[60114]](k[88273]) != -0x1 || cnjdsw[k[60114]](k[88274]) != -0x1, window['F$L6'][k[88275]] = v9i[k[84252]] ? v9i[k[84252]][k[71546]]() : '', window['F$L6']['F$I086L'] = ![], window['F$L6']['F$I0L86'] = 0x2;if (cnjdsw[k[60114]](k[87671]) != -0x1) {
      if (v9i[k[68672]] >= 0x18) window['F$L6']['F$I0L86'] = 0x3;else window['F$L6']['F$I0L86'] = 0x2;
    } else {
      if (cnjdsw[k[60114]](k[88271]) != -0x1) {
        if (v9i[k[68672]] && v9i[k[68672]] >= 0x14) window['F$L6']['F$I0L86'] = 0x3;else {
          if (q2k5_[k[60114]](k[88276]) != -0x1 || q2k5_[k[60114]](k[88277]) != -0x1 || q2k5_[k[60114]](k[88278]) != -0x1 || q2k5_[k[60114]](k[88279]) != -0x1 || q2k5_[k[60114]](k[88280]) != -0x1) window['F$L6']['F$I0L86'] = 0x2;else window['F$L6']['F$I0L86'] = 0x3;
        }
      } else window['F$L6']['F$I0L86'] = 0x2;
    }console[k[60472]](k[88281] + window['F$L6']['F$I086L'] + k[88282] + window['F$L6']['F$I0L86']);
  } }), wx[k[88283]]({ 'success': function (ifbmvu) {
    console[k[60472]](k[88284] + ifbmvu[k[64268]] + k[88285] + ifbmvu[k[88286]]);
  } }), wx[k[88287]]({ 'success': function (kq5_42) {
    console[k[60472]](k[88288] + kq5_42[k[88289]]);
  } }), wx[k[88290]]({ 'keepScreenOn': !![] }), wx[k[88291]](function (cowds) {
  console[k[60472]](k[88288] + cowds[k[88289]] + k[88292] + cowds[k[88293]]);
}), wx[k[70099]](function (jdsco6) {
  window['F$80'] = jdsco6, window['F$608'] && window['F$80'] && (console[k[60077]](k[88294] + window['F$80'][k[60752]]), window['F$608'](window['F$80']), window['F$80'] = null);
}), window[k[88295]] = 0x0, window['F$IL860'] = 0x0, window[k[88296]] = null, wx[k[88297]](function () {
  window['F$IL860']++;var ern = Date[k[60082]]();(window[k[88295]] == 0x0 || ern - window[k[88295]] > 0x1d4c0) && (console[k[60095]](k[88298]), wx[k[71115]]());if (window['F$IL860'] >= 0x2) {
    window['F$IL860'] = 0x0, console[k[60124]](k[88299]), wx[k[88300]]('0', 0x1);if (window['F$L6'] && window['F$L6'][k[61007]]) window['F$L60'](k[88301], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});