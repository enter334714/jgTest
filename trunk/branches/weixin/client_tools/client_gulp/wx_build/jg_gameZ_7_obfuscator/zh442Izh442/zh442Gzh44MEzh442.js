var E = wx.$F;
console[E[0x0]](E[0x1]), window[E[0x2]], wx[E[0x3]](function (noa3y) {
  if (noa3y) {
    if (noa3y[E[0x4]]) {
      var yno0 = window[E[0x5]][E[0x6]][E[0x7]](new RegExp(/\./, 'g'), '_'),
          ud_2 = noa3y[E[0x4]],
          bsd = ud_2['match'](/(zh44zh44zh44zh44zh44\/zh442Gzh44MEzh442.js:)[0-9]{1,60}(:)/g);if (bsd) for (var a7i9 = 0x0; a7i9 < bsd['length']; a7i9++) {
        if (bsd[a7i9] && bsd[a7i9]['length'] > 0x0) {
          var $6wj = parseInt(bsd[a7i9][E[0x7]]('zh44zh44zh44zh44zh44/zh442Gzh44MEzh442.js:', '')[E[0x7]](':', ''));ud_2 = ud_2[E[0x7]](bsd[a7i9], bsd[a7i9][E[0x7]](':' + $6wj + ':', ':' + ($6wj - 0x2) + ':'));
        }
      }ud_2 = ud_2[E[0x7]](new RegExp('zh44zh44zh44zh44zh44/zh442Gzh44MEzh442.js', 'g'), 'zh44zh44zh44zh44zh44/main__' + yno0 + E[0x8]), ud_2 = ud_2[E[0x7]](new RegExp('zh44zh44zh44zh44zh44/zh442Mzh44Izh442.js', 'g'), 'zh44zh44zh44zh44zh44/main__' + yno0 + E[0x8]), noa3y[E[0x4]] = ud_2;
    }var ubds = { 'id': window['hDZ'][E[0x9]], 'role': window['hDZ'][E[0xa]], 'level': window['hDZ'][E[0xb]], 'user': window['hDZ'][E[0xc]], 'version': window['hDZ'][E[0xd]], 'cdn': window['hDZ'][E[0xe]], 'pkgName': window['hDZ'][E[0xf]], 'gamever': window[E[0x5]][E[0x6]], 'serverid': window['hDZ'][E[0x10]] ? window['hDZ'][E[0x10]][E[0x11]] : 0x0, 'systemInfo': window[E[0x12]], 'error': E[0x13], 'stack': noa3y ? noa3y[E[0x4]] : '' },
        yano = JSON[E[0x14]](ubds);console[E[0x15]](E[0x16] + yano), (!window[E[0x2]] || window[E[0x2]] != ubds[E[0x15]]) && (window[E[0x2]] = ubds[E[0x15]], window['hTD'](ubds));
  }
});import 'zh44zh44bfzh44zh44.js';import 'zh44zh4411zh44zh44.js';window[E[0x17]] = require('zh44zh44parsazh44.js');import 'zh44INDzh44zh44.js';import 'zh44zh44Izh441zh44zh44.js';import 'zh44zh44Mtadzh44zh44.js';import 'zh44zh44INIzh44azh44.js';import 'SyMiniTool.js';console[E[0x0]](E[0x18]), console[E[0x0]](E[0x19]), hTDOZ({ 'title': E[0x1a] });var fqd2bu = { 'hETZDO': !![] };new window[E[0x1b]](fqd2bu), window[E[0x1b]][E[0x1c]]['hEODZT']();if (window['hETDZO']) clearInterval(window['hETDZO']);window['hETDZO'] = null, window['hEOZTD'] = function (xjl5, $15xj_) {
  if (!xjl5 || !$15xj_) return 0x0;xjl5 = xjl5[E[0x1d]]('.'), $15xj_ = $15xj_[E[0x1d]]('.');const cainp9 = Math[E[0x1e]](xjl5['length'], $15xj_['length']);while (xjl5['length'] < cainp9) {
    xjl5['push']('0');
  }while ($15xj_['length'] < cainp9) {
    $15xj_['push']('0');
  }for (var hg7kt = 0x0; hg7kt < cainp9; hg7kt++) {
    const i74tkc = parseInt(xjl5[hg7kt]),
          ctpi7 = parseInt($15xj_[hg7kt]);if (i74tkc > ctpi7) return 0x1;else {
      if (i74tkc < ctpi7) return -0x1;
    }
  }return 0x0;
}, window[E[0x1f]] = wx[E[0x20]]()[E[0x1f]], console[E[0x21]](E[0x22] + window[E[0x1f]]);var fhk7gt = wx[E[0x23]]();fhk7gt['onCheckForUpdate'](function (oay3) {
  console[E[0x21]](E[0x24] + oay3['hasUpdate']);
}), fhk7gt[E[0x25]](function () {
  wx['showModal']({ 'title': E[0x26], 'content': E[0x27], 'showCancel': ![], 'success': function (g4tkc) {
      fhk7gt[E[0x28]]();
    } });
}), fhk7gt[E[0x29]](function () {
  console[E[0x21]](E[0x2a]);
}), window['hEOZDT'] = function () {
  console[E[0x21]](E[0x2b]);var esdbr2 = wx[E[0x2c]]({ 'name': 'zh442pftzh442', 'success': function (lx_5jq) {
      console[E[0x21]](E[0x2d]), console[E[0x21]](lx_5jq), lx_5jq && lx_5jq[E[0x2e]] == E[0x2f] ? (window['hZO'] = !![], window['hZODT'](), window['hZDTO']()) : setTimeout(function () {
        window['hEOZDT']();
      }, 0x1f4);
    }, 'fail': function (yf8m0w) {
      console[E[0x21]](E[0x30]), console[E[0x21]](yf8m0w), setTimeout(function () {
        window['hEOZDT']();
      }, 0x1f4);
    } });esdbr2 && esdbr2[E[0x31]](wv6fm8 => {});
}, window['hEDTZO'] = function () {
  console[E[0x21]](E[0x32]);var ubqd2 = wx[E[0x2c]]({ 'name': 'zh44zh44zh44zh44zh44', 'success': function (j_x5ql) {
      console[E[0x21]](E[0x33]), console[E[0x21]](j_x5ql), j_x5ql && j_x5ql[E[0x2e]] == E[0x2f] ? (window['hDOZ'] = !![], window['hZODT'](), window['hZDTO']()) : setTimeout(function () {
        window['hEDTZO']();
      }, 0x1f4);
    }, 'fail': function (m3yo0) {
      console[E[0x21]](E[0x34]), console[E[0x21]](m3yo0), setTimeout(function () {
        window['hEDTZO']();
      }, 0x1f4);
    } });ubqd2 && ubqd2[E[0x31]](ynof30 => {});
}, window[E[0x35]] = function () {
  window['hEOZTD'](window[E[0x1f]], E[0x36]) >= 0x0 ? (console[E[0x21]](E[0x37] + window[E[0x1f]] + E[0x38]), window['hDT'](), window['hEOZDT'](), window['hEDTZO']()) : (window['hDZT'](E[0x39], window[E[0x1f]]), wx['showModal']({ 'title': E[0x3a], 'content': E[0x3b] }));
}, window[E[0x12]] = '', wx[E[0x3c]]({ 'success'(w80ym) {
    window[E[0x12]] = E[0x3d] + w80ym[E[0x3e]] + E[0x3f] + w80ym[E[0x40]] + E[0x41] + w80ym[E[0x42]] + E[0x43] + w80ym[E[0x44]] + E[0x45] + w80ym[E[0x46]] + E[0x47] + w80ym[E[0x1f]] + E[0x48] + w80ym['benchmarkLevel'], console[E[0x21]](window[E[0x12]]), console[E[0x21]](E[0x49] + w80ym[E[0x4a]] + E[0x4b] + w80ym['screenWidth'] + E[0x4c] + w80ym['screenHeight'] + E[0x4d] + w80ym['windowWidth'] + E[0x4e] + w80ym['windowHeight'] + E[0x4f] + w80ym['statusBarHeight'] + E[0x50] + (w80ym[E[0x51]] ? w80ym[E[0x51]][E[0x52]] + ',' + w80ym[E[0x51]][E[0x53]] + ',' + w80ym[E[0x51]][E[0x54]] + ',' + w80ym[E[0x51]]['right'] : ''));var i9pac7 = w80ym[E[0x44]] ? w80ym[E[0x44]][E[0x55]]() : '',
        pc7ti = w80ym[E[0x40]] ? w80ym[E[0x40]][E[0x55]]()[E[0x7]]('\x20', '') : '';window['hDZ'][E[0x56]] = i9pac7[E[0x57]](E[0x58]) != -0x1, window['hDZ'][E[0x59]] = i9pac7[E[0x57]](E[0x5a]) != -0x1, window['hDZ']['wxPhone'] = i9pac7[E[0x57]](E[0x58]) != -0x1 || i9pac7[E[0x57]](E[0x5a]) != -0x1, window['hDZ'][E[0x5b]] = i9pac7[E[0x57]](E[0x5c]) != -0x1 || i9pac7[E[0x57]](E[0x5d]) != -0x1, window['hDZ'][E[0x5e]] = w80ym[E[0x46]] ? w80ym[E[0x46]][E[0x55]]() : '', window['hDZ']['hETOZD'] = ![], window['hDZ']['hETDOZ'] = 0x2;if (i9pac7[E[0x57]](E[0x5a]) != -0x1) {
      if (w80ym['benchmarkLevel'] >= 0x18) window['hDZ']['hETDOZ'] = 0x3;else window['hDZ']['hETDOZ'] = 0x2;
    } else {
      if (i9pac7[E[0x57]](E[0x58]) != -0x1) {
        if (w80ym['benchmarkLevel'] && w80ym['benchmarkLevel'] >= 0x14) window['hDZ']['hETDOZ'] = 0x3;else {
          if (pc7ti[E[0x57]]('iphone5') != -0x1 || pc7ti[E[0x57]]('iphone6') != -0x1 || pc7ti[E[0x57]]('iphone7') != -0x1 || pc7ti[E[0x57]]('iphonese') != -0x1 || pc7ti[E[0x57]](E[0x5f]) != -0x1) window['hDZ']['hETDOZ'] = 0x2;else window['hDZ']['hETDOZ'] = 0x3;
        }
      } else window['hDZ']['hETDOZ'] = 0x2;
    }console[E[0x21]](E[0x60] + window['hDZ']['hETOZD'] + E[0x61] + window['hDZ']['hETDOZ']);
  } }), wx[E[0x62]]({ 'success': function (e2dqub) {
    console[E[0x21]](E[0x63] + e2dqub[E[0x64]] + E[0x65] + e2dqub['isCharging']);
  } }), wx[E[0x66]]({ 'success': function ($w1j6) {
    console[E[0x21]](E[0x67] + $w1j6[E[0x68]]);
  } }), wx[E[0x69]]({ 'keepScreenOn': !![] }), wx['onNetworkStatusChange'](function (p7i9ca) {
  console[E[0x21]](E[0x67] + p7i9ca[E[0x68]] + E[0x6a] + p7i9ca[E[0x6b]]);
}), wx['onShow'](function (m8wy) {
  window['hOT'] = m8wy, window['hZTO'] && window['hOT'] && (console[E[0x0]](E[0x6c] + window['hOT'][E[0x6d]]), window['hZTO'](window['hOT']), window['hOT'] = null);
}), window[E[0x6e]] = 0x0, window['hEDOZT'] = 0x0, window[E[0x6f]] = null, wx[E[0x70]](function () {
  window['hEDOZT']++;var xjql_ = Date[E[0x71]]();(window[E[0x6e]] == 0x0 || xjql_ - window[E[0x6e]] > 0x1d4c0) && (console[E[0x72]](E[0x73]), wx[E[0x74]]());if (window['hEDOZT'] >= 0x2) {
    window['hEDOZT'] = 0x0, console[E[0x15]](E[0x75]), wx[E[0x76]]('0', 0x1);if (window['hDZ'] && window['hDZ'][E[0x56]]) window['hDZT'](E[0x77], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});