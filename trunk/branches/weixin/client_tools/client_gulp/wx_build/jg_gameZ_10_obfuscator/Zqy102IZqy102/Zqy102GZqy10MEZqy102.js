var J = wx.h$;
console[J[0x1]](J[0x2]), window[J[0x3]], wx[J[0x4]](function (ect8z) {
  if (ect8z) {
    if (ect8z[J[0x5]]) {
      var et_hz = window[J[0x6]][J[0x7]][J[0x8]](new RegExp(/\./, 'g'), '_'),
          epzcth = ect8z[J[0x5]],
          ch8t = epzcth[J[0x9]](/(Zqy10Zqy10Zqy10Zqy10Zqy10\/Zqy102GZqy10MEZqy102.js:)[0-9]{1,60}(:)/g);if (ch8t) for (var _9pe = 0x0; _9pe < ch8t[J[0xa]]; _9pe++) {
        if (ch8t[_9pe] && ch8t[_9pe][J[0xa]] > 0x0) {
          var n43ix = parseInt(ch8t[_9pe][J[0x8]](J[0xb], '')[J[0x8]](':', ''));epzcth = epzcth[J[0x8]](ch8t[_9pe], ch8t[_9pe][J[0x8]](':' + n43ix + ':', ':' + (n43ix - 0x2) + ':'));
        }
      }epzcth = epzcth[J[0x8]](new RegExp(J[0xc], 'g'), J[0xd] + et_hz + J[0xe]), epzcth = epzcth[J[0x8]](new RegExp(J[0xf], 'g'), J[0xd] + et_hz + J[0xe]), ect8z[J[0x5]] = epzcth;
    }var d8t6hc = { 'id': window['J1Q4'][J[0x10]], 'role': window['J1Q4'][J[0x11]], 'level': window['J1Q4'][J[0x12]], 'user': window['J1Q4'][J[0x13]], 'version': window['J1Q4'][J[0x14]], 'cdn': window['J1Q4'][J[0x15]], 'pkgName': window['J1Q4'][J[0x16]], 'gamever': window[J[0x6]][J[0x7]], 'serverid': window['J1Q4'][J[0x17]] ? window['J1Q4'][J[0x17]][J[0x18]] : 0x0, 'systemInfo': window[J[0x19]], 'error': J[0x1a], 'stack': ect8z ? ect8z[J[0x5]] : '' },
        _wp9f = JSON[J[0x1b]](d8t6hc);console[J[0x1c]](J[0x1d] + _wp9f), (!window[J[0x3]] || window[J[0x3]] != d8t6hc[J[0x1c]]) && (window[J[0x3]] = d8t6hc[J[0x1c]], window['J15Q'](d8t6hc));
  }
});import 'Zqy10Zqy10bfZqy10Zqy10.js';import 'Zqy10Zqy1011Zqy10Zqy10.js';window[J[0x1e]] = require(J[0x1f]);import 'Zqy10INDZqy10Zqy10.js';import 'Zqy10Zqy10IZqy101Zqy10Zqy10.js';import 'Zqy10Zqy10MtadZqy10Zqy10.js';import 'Zqy10Zqy10INIZqy10aZqy10.js';console[J[0x1]](J[0x20]), console[J[0x1]](J[0x21]), J15QJ4({ 'title': J[0x22] });var gmlua34 = { 'J1G54QJ': !![] };new window[J[0x23]](gmlua34), window[J[0x23]][J[0x24]]['J1GJQ45']();if (window['J1G5Q4J']) clearInterval(window['J1G5Q4J']);window['J1G5Q4J'] = null, window['J1GJ45Q'] = function (au13, yj5r) {
  if (!au13 || !yj5r) return 0x0;au13 = au13[J[0x25]]('.'), yj5r = yj5r[J[0x25]]('.');const kgdc86 = Math[J[0x26]](au13[J[0xa]], yj5r[J[0xa]]);while (au13[J[0xa]] < kgdc86) {
    au13[J[0x27]]('0');
  }while (yj5r[J[0xa]] < kgdc86) {
    yj5r[J[0x27]]('0');
  }for (var cpzt = 0x0; cpzt < kgdc86; cpzt++) {
    const by5o0 = parseInt(au13[cpzt]),
          or5qy = parseInt(yj5r[cpzt]);if (by5o0 > or5qy) return 0x1;else {
      if (by5o0 < or5qy) return -0x1;
    }
  }return 0x0;
}, window[J[0x28]] = wx[J[0x29]]()[J[0x28]], console[J[0x2a]](J[0x2b] + window[J[0x28]]);var gxj1i7n = wx[J[0x2c]]();gxj1i7n[J[0x2d]](function (jv5or) {
  console[J[0x2a]](J[0x2e] + jv5or[J[0x2f]]);
}), gxj1i7n[J[0x30]](function () {
  wx[J[0x31]]({ 'title': J[0x32], 'content': J[0x33], 'showCancel': ![], 'success': function (i7jrxv) {
      gxj1i7n[J[0x34]]();
    } });
}), gxj1i7n[J[0x35]](function () {
  console[J[0x2a]](J[0x36]);
}), window['J1GJ4Q5'] = function () {
  console[J[0x2a]](J[0x37]);var $2sw9 = wx[J[0x38]]({ 'name': J[0x39], 'success': function (n41ui3) {
      console[J[0x2a]](J[0x3a]), console[J[0x2a]](n41ui3), n41ui3 && n41ui3[J[0x3b]] == J[0x3c] ? (window['J14J'] = !![], window['J14JQ5'](), window['J14Q5J']()) : setTimeout(function () {
        window['J1GJ4Q5']();
      }, 0x1f4);
    }, 'fail': function (lm3a) {
      console[J[0x2a]](J[0x3d]), console[J[0x2a]](lm3a), setTimeout(function () {
        window['J1GJ4Q5']();
      }, 0x1f4);
    } });$2sw9 && $2sw9[J[0x3e]](ehz8c => {});
}, window['J1GQ54J'] = function () {
  console[J[0x2a]](J[0x3f]);var oyq05 = wx[J[0x38]]({ 'name': J[0x40], 'success': function (k8d6gc) {
      console[J[0x2a]](J[0x41]), console[J[0x2a]](k8d6gc), k8d6gc && k8d6gc[J[0x3b]] == J[0x3c] ? (window['J1QJ4'] = !![], window['J14JQ5'](), window['J14Q5J']()) : setTimeout(function () {
        window['J1GQ54J']();
      }, 0x1f4);
    }, 'fail': function (we9p2) {
      console[J[0x2a]](J[0x42]), console[J[0x2a]](we9p2), setTimeout(function () {
        window['J1GQ54J']();
      }, 0x1f4);
    } });oyq05 && oyq05[J[0x3e]](xrivj => {});
}, window[J[0x43]] = function () {
  window['J1GJ45Q'](window[J[0x28]], J[0x44]) >= 0x0 ? (console[J[0x2a]](J[0x45] + window[J[0x28]] + J[0x46]), window['J1Q5'](), window['J1GJ4Q5'](), window['J1GQ54J']()) : (window['J1Q45'](J[0x47], window[J[0x28]]), wx[J[0x31]]({ 'title': J[0x48], 'content': J[0x49] }));
}, window[J[0x19]] = '', wx[J[0x4a]]({ 'success'(cd68ht) {
    window[J[0x19]] = J[0x4b] + cd68ht[J[0x4c]] + J[0x4d] + cd68ht[J[0x4e]] + J[0x4f] + cd68ht[J[0x50]] + J[0x51] + cd68ht[J[0x52]] + J[0x53] + cd68ht[J[0x54]] + J[0x55] + cd68ht[J[0x28]] + J[0x56] + cd68ht[J[0x57]], console[J[0x2a]](window[J[0x19]]), console[J[0x2a]](J[0x58] + cd68ht[J[0x59]] + J[0x5a] + cd68ht[J[0x5b]] + J[0x5c] + cd68ht[J[0x5d]] + J[0x5e] + cd68ht[J[0x5f]] + J[0x60] + cd68ht[J[0x61]] + J[0x62] + cd68ht[J[0x63]] + J[0x64] + (cd68ht[J[0x65]] ? cd68ht[J[0x65]][J[0x66]] + ',' + cd68ht[J[0x65]][J[0x67]] + ',' + cd68ht[J[0x65]][J[0x68]] + ',' + cd68ht[J[0x65]][J[0x69]] : ''));var njx7 = cd68ht[J[0x52]] ? cd68ht[J[0x52]][J[0x6a]]() : '',
        wf_p92 = cd68ht[J[0x4e]] ? cd68ht[J[0x4e]][J[0x6a]]()[J[0x8]]('\x20', '') : '';window['J1Q4'][J[0x6b]] = njx7[J[0x6c]](J[0x6d]) != -0x1, window['J1Q4'][J[0x6e]] = njx7[J[0x6c]](J[0x6f]) != -0x1, window['J1Q4'][J[0x70]] = njx7[J[0x6c]](J[0x6d]) != -0x1 || njx7[J[0x6c]](J[0x6f]) != -0x1, window['J1Q4'][J[0x71]] = njx7[J[0x6c]](J[0x72]) != -0x1 || njx7[J[0x6c]](J[0x73]) != -0x1, window['J1Q4'][J[0x74]] = cd68ht[J[0x54]] ? cd68ht[J[0x54]][J[0x6a]]() : '', window['J1Q4']['J1G5J4Q'] = ![], window['J1Q4']['J1G5QJ4'] = 0x2;if (njx7[J[0x6c]](J[0x6f]) != -0x1) {
      if (cd68ht[J[0x57]] >= 0x18) window['J1Q4']['J1G5QJ4'] = 0x3;else window['J1Q4']['J1G5QJ4'] = 0x2;
    } else {
      if (njx7[J[0x6c]](J[0x6d]) != -0x1) {
        if (cd68ht[J[0x57]] && cd68ht[J[0x57]] >= 0x14) window['J1Q4']['J1G5QJ4'] = 0x3;else {
          if (wf_p92[J[0x6c]](J[0x75]) != -0x1 || wf_p92[J[0x6c]](J[0x76]) != -0x1 || wf_p92[J[0x6c]](J[0x77]) != -0x1 || wf_p92[J[0x6c]](J[0x78]) != -0x1 || wf_p92[J[0x6c]](J[0x79]) != -0x1) window['J1Q4']['J1G5QJ4'] = 0x2;else window['J1Q4']['J1G5QJ4'] = 0x3;
        }
      } else window['J1Q4']['J1G5QJ4'] = 0x2;
    }console[J[0x2a]](J[0x7a] + window['J1Q4']['J1G5J4Q'] + J[0x7b] + window['J1Q4']['J1G5QJ4']);
  } }), wx[J[0x7c]]({ 'success': function (hpz_t) {
    console[J[0x2a]](J[0x7d] + hpz_t[J[0x7e]] + J[0x7f] + hpz_t[J[0x80]]);
  } }), wx[J[0x81]]({ 'success': function (lu43) {
    console[J[0x2a]](J[0x82] + lu43[J[0x83]]);
  } }), wx[J[0x84]]({ 'keepScreenOn': !![] }), wx[J[0x85]](function (zh2pe) {
  console[J[0x2a]](J[0x82] + zh2pe[J[0x83]] + J[0x86] + zh2pe[J[0x87]]);
}), wx[J[0x88]](function (w2_e9p) {
  window['J1J5'] = w2_e9p, window['J145J'] && window['J1J5'] && (console[J[0x1]](J[0x89] + window['J1J5'][J[0x8a]]), window['J145J'](window['J1J5']), window['J1J5'] = null);
}), window[J[0x8b]] = 0x0, window['J1GQJ45'] = 0x0, window[J[0x8c]] = null, wx[J[0x8d]](function () {
  window['J1GQJ45']++;var b0g6dk = Date[J[0x8e]]();(window[J[0x8b]] == 0x0 || b0g6dk - window[J[0x8b]] > 0x1d4c0) && (console[J[0x8f]](J[0x90]), wx[J[0x91]]());if (window['J1GQJ45'] >= 0x2) {
    window['J1GQJ45'] = 0x0, console[J[0x1c]](J[0x92]), wx[J[0x93]]('0', 0x1);if (window['J1Q4'] && window['J1Q4'][J[0x6b]]) window['J1Q45'](J[0x94], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});