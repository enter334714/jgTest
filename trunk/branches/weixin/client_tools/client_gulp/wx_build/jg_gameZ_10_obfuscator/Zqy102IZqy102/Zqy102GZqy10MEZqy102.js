var J = wx.h$;
console[J[0x1]](J[0x2]), window[J[0x3]], wx[J[0x4]](function (rivxj7) {
  if (rivxj7) {
    if (rivxj7[J[0x5]]) {
      var bo5kq0 = window[J[0x6]][J[0x7]][J[0x8]](new RegExp(/\./, 'g'), '_'),
          a4u3n = rivxj7[J[0x5]],
          ehcpt = a4u3n[J[0x9]](/(Zqy10Zqy10Zqy10Zqy10Zqy10\/Zqy102GZqy10MEZqy102.js:)[0-9]{1,60}(:)/g);if (ehcpt) for (var ix17n4 = 0x0; ix17n4 < ehcpt[J[0xa]]; ix17n4++) {
        if (ehcpt[ix17n4] && ehcpt[ix17n4][J[0xa]] > 0x0) {
          var bk06d = parseInt(ehcpt[ix17n4][J[0x8]](J[0xb], '')[J[0x8]](':', ''));a4u3n = a4u3n[J[0x8]](ehcpt[ix17n4], ehcpt[ix17n4][J[0x8]](':' + bk06d + ':', ':' + (bk06d - 0x2) + ':'));
        }
      }a4u3n = a4u3n[J[0x8]](new RegExp(J[0xc], 'g'), J[0xd] + bo5kq0 + J[0xe]), a4u3n = a4u3n[J[0x8]](new RegExp(J[0xf], 'g'), J[0xd] + bo5kq0 + J[0xe]), rivxj7[J[0x5]] = a4u3n;
    }var jyvro5 = { 'id': window['J1Q4'][J[0x10]], 'role': window['J1Q4'][J[0x11]], 'level': window['J1Q4'][J[0x12]], 'user': window['J1Q4'][J[0x13]], 'version': window['J1Q4'][J[0x14]], 'cdn': window['J1Q4'][J[0x15]], 'pkgName': window['J1Q4'][J[0x16]], 'gamever': window[J[0x6]][J[0x7]], 'serverid': window['J1Q4'][J[0x17]] ? window['J1Q4'][J[0x17]][J[0x18]] : 0x0, 'systemInfo': window[J[0x19]], 'error': J[0x1a], 'stack': rivxj7 ? rivxj7[J[0x5]] : '' },
        ivnj7 = JSON[J[0x1b]](jyvro5);console[J[0x1c]](J[0x1d] + ivnj7), (!window[J[0x3]] || window[J[0x3]] != jyvro5[J[0x1c]]) && (window[J[0x3]] = jyvro5[J[0x1c]], window['J15Q'](jyvro5));
  }
});import 'Zqy10Zqy10bfZqy10Zqy10.js';import 'Zqy10Zqy1011Zqy10Zqy10.js';window[J[0x1e]] = require(J[0x1f]);import 'Zqy10INDZqy10Zqy10.js';import 'Zqy10Zqy10IZqy101Zqy10Zqy10.js';import 'Zqy10Zqy10MtadZqy10Zqy10.js';import 'Zqy10Zqy10INIZqy10aZqy10.js';console[J[0x1]](J[0x20]), console[J[0x1]](J[0x21]), J15QJ4({ 'title': J[0x22] });var gpthe = { 'J1G54QJ': !![] };new window[J[0x23]](gpthe), window[J[0x23]][J[0x24]]['J1GJQ45']();if (window['J1G5Q4J']) clearInterval(window['J1G5Q4J']);window['J1G5Q4J'] = null, window['J1GJ45Q'] = function (b5qko0, ui4) {
  if (!b5qko0 || !ui4) return 0x0;b5qko0 = b5qko0[J[0x25]]('.'), ui4 = ui4[J[0x25]]('.');const ni34u1 = Math[J[0x26]](b5qko0[J[0xa]], ui4[J[0xa]]);while (b5qko0[J[0xa]] < ni34u1) {
    b5qko0[J[0x27]]('0');
  }while (ui4[J[0xa]] < ni34u1) {
    ui4[J[0x27]]('0');
  }for (var gq5k = 0x0; gq5k < ni34u1; gq5k++) {
    const bkqg0 = parseInt(b5qko0[gq5k]),
          ryjo = parseInt(ui4[gq5k]);if (bkqg0 > ryjo) return 0x1;else {
      if (bkqg0 < ryjo) return -0x1;
    }
  }return 0x0;
}, window[J[0x28]] = wx[J[0x29]]()[J[0x28]], console[J[0x2a]](J[0x2b] + window[J[0x28]]);var gdq0bg = wx[J[0x2c]]();gdq0bg[J[0x2d]](function (x7rjv) {
  console[J[0x2a]](J[0x2e] + x7rjv[J[0x2f]]);
}), gdq0bg[J[0x30]](function () {
  wx[J[0x31]]({ 'title': J[0x32], 'content': J[0x33], 'showCancel': ![], 'success': function (x71nji) {
      gdq0bg[J[0x34]]();
    } });
}), gdq0bg[J[0x35]](function () {
  console[J[0x2a]](J[0x36]);
}), window['J1GJ4Q5'] = function () {
  console[J[0x2a]](J[0x37]);var _h2pez = wx[J[0x38]]({ 'name': J[0x39], 'success': function (f$2sw9) {
      console[J[0x2a]](J[0x3a]), console[J[0x2a]](f$2sw9), f$2sw9 && f$2sw9[J[0x3b]] == J[0x3c] ? (window['J14J'] = !![], window['J14JQ5'](), window['J14Q5J']()) : setTimeout(function () {
        window['J1GJ4Q5']();
      }, 0x1f4);
    }, 'fail': function (swf2$9) {
      console[J[0x2a]](J[0x3d]), console[J[0x2a]](swf2$9), setTimeout(function () {
        window['J1GJ4Q5']();
      }, 0x1f4);
    } });_h2pez && _h2pez[J[0x3e]](pe9_w2 => {});
}, window['J1GQ54J'] = function () {
  console[J[0x2a]](J[0x3f]);var nv7ijx = wx[J[0x38]]({ 'name': J[0x40], 'success': function (injvx) {
      console[J[0x2a]](J[0x41]), console[J[0x2a]](injvx), injvx && injvx[J[0x3b]] == J[0x3c] ? (window['J1QJ4'] = !![], window['J14JQ5'](), window['J14Q5J']()) : setTimeout(function () {
        window['J1GQ54J']();
      }, 0x1f4);
    }, 'fail': function (p9_e2w) {
      console[J[0x2a]](J[0x42]), console[J[0x2a]](p9_e2w), setTimeout(function () {
        window['J1GQ54J']();
      }, 0x1f4);
    } });nv7ijx && nv7ijx[J[0x3e]](qbo05k => {});
}, window[J[0x43]] = function () {
  window['J1GJ45Q'](window[J[0x28]], J[0x44]) >= 0x0 ? (console[J[0x2a]](J[0x45] + window[J[0x28]] + J[0x46]), window['J1Q5'](), window['J1GJ4Q5'](), window['J1GQ54J']()) : (window['J1Q45'](J[0x47], window[J[0x28]]), wx[J[0x31]]({ 'title': J[0x48], 'content': J[0x49] }));
}, window[J[0x19]] = '', wx[J[0x4a]]({ 'success'(tdg68c) {
    window[J[0x19]] = J[0x4b] + tdg68c[J[0x4c]] + J[0x4d] + tdg68c[J[0x4e]] + J[0x4f] + tdg68c[J[0x50]] + J[0x51] + tdg68c[J[0x52]] + J[0x53] + tdg68c[J[0x54]] + J[0x55] + tdg68c[J[0x28]] + J[0x56] + tdg68c[J[0x57]], console[J[0x2a]](window[J[0x19]]), console[J[0x2a]](J[0x58] + tdg68c[J[0x59]] + J[0x5a] + tdg68c[J[0x5b]] + J[0x5c] + tdg68c[J[0x5d]] + J[0x5e] + tdg68c[J[0x5f]] + J[0x60] + tdg68c[J[0x61]] + J[0x62] + tdg68c[J[0x63]] + J[0x64] + (tdg68c[J[0x65]] ? tdg68c[J[0x65]][J[0x66]] + ',' + tdg68c[J[0x65]][J[0x67]] + ',' + tdg68c[J[0x65]][J[0x68]] + ',' + tdg68c[J[0x65]][J[0x69]] : ''));var i41nu3 = tdg68c[J[0x52]] ? tdg68c[J[0x52]][J[0x6a]]() : '',
        t8cdg6 = tdg68c[J[0x4e]] ? tdg68c[J[0x4e]][J[0x6a]]()[J[0x8]]('\x20', '') : '';window['J1Q4'][J[0x6b]] = i41nu3[J[0x6c]](J[0x6d]) != -0x1, window['J1Q4'][J[0x6e]] = i41nu3[J[0x6c]](J[0x6f]) != -0x1, window['J1Q4'][J[0x70]] = i41nu3[J[0x6c]](J[0x6d]) != -0x1 || i41nu3[J[0x6c]](J[0x6f]) != -0x1, window['J1Q4'][J[0x71]] = i41nu3[J[0x6c]](J[0x72]) != -0x1 || i41nu3[J[0x6c]](J[0x73]) != -0x1, window['J1Q4'][J[0x74]] = tdg68c[J[0x54]] ? tdg68c[J[0x54]][J[0x6a]]() : '', window['J1Q4']['J1G5J4Q'] = ![], window['J1Q4']['J1G5QJ4'] = 0x2;if (i41nu3[J[0x6c]](J[0x6f]) != -0x1) {
      if (tdg68c[J[0x57]] >= 0x18) window['J1Q4']['J1G5QJ4'] = 0x3;else window['J1Q4']['J1G5QJ4'] = 0x2;
    } else {
      if (i41nu3[J[0x6c]](J[0x6d]) != -0x1) {
        if (tdg68c[J[0x57]] && tdg68c[J[0x57]] >= 0x14) window['J1Q4']['J1G5QJ4'] = 0x3;else {
          if (t8cdg6[J[0x6c]](J[0x75]) != -0x1 || t8cdg6[J[0x6c]](J[0x76]) != -0x1 || t8cdg6[J[0x6c]](J[0x77]) != -0x1 || t8cdg6[J[0x6c]](J[0x78]) != -0x1 || t8cdg6[J[0x6c]](J[0x79]) != -0x1) window['J1Q4']['J1G5QJ4'] = 0x2;else window['J1Q4']['J1G5QJ4'] = 0x3;
        }
      } else window['J1Q4']['J1G5QJ4'] = 0x2;
    }console[J[0x2a]](J[0x7a] + window['J1Q4']['J1G5J4Q'] + J[0x7b] + window['J1Q4']['J1G5QJ4']);
  } }), wx[J[0x7c]]({ 'success': function (in71x4) {
    console[J[0x2a]](J[0x7d] + in71x4[J[0x7e]] + J[0x7f] + in71x4[J[0x80]]);
  } }), wx[J[0x81]]({ 'success': function (c8ht) {
    console[J[0x2a]](J[0x82] + c8ht[J[0x83]]);
  } }), wx[J[0x84]]({ 'keepScreenOn': !![] }), wx[J[0x85]](function (ws29) {
  console[J[0x2a]](J[0x82] + ws29[J[0x83]] + J[0x86] + ws29[J[0x87]]);
}), wx[J[0x88]](function (phze2) {
  window['J1J5'] = phze2, window['J145J'] && window['J1J5'] && (console[J[0x1]](J[0x89] + window['J1J5'][J[0x8a]]), window['J145J'](window['J1J5']), window['J1J5'] = null);
}), window[J[0x8b]] = 0x0, window['J1GQJ45'] = 0x0, window[J[0x8c]] = null, wx[J[0x8d]](function () {
  window['J1GQJ45']++;var i1n7x = Date[J[0x8e]]();(window[J[0x8b]] == 0x0 || i1n7x - window[J[0x8b]] > 0x1d4c0) && (console[J[0x8f]](J[0x90]), wx[J[0x91]]());if (window['J1GQJ45'] >= 0x2) {
    window['J1GQJ45'] = 0x0, console[J[0x1c]](J[0x92]), wx[J[0x93]]('0', 0x1);if (window['J1Q4'] && window['J1Q4'][J[0x6b]]) window['J1Q45'](J[0x94], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});