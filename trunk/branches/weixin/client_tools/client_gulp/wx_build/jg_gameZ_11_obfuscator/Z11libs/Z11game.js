var B = wx.$z;
console[B[0x1]](B[0x2]), window[B[0x3]], wx[B[0x4]](function (x8p316) {
  if (x8p316) {
    if (x8p316[B[0x5]]) {
      var $lty52 = window[B[0x6]][B[0x7]][B[0x8]](new RegExp(/\./, 'g'), '_'),
          nwq = x8p316[B[0x5]],
          dfwmz = nwq[B[0x9]](/(Z11Z11Z11\/Z11game.js:)[0-9]{1,60}(:)/g);if (dfwmz) for (var jreg_o = 0x0; jreg_o < dfwmz[B[0xa]]; jreg_o++) {
        if (dfwmz[jreg_o] && dfwmz[jreg_o][B[0xa]] > 0x0) {
          var d316f9 = parseInt(dfwmz[jreg_o][B[0x8]](B[0xb], '')[B[0x8]](':', ''));nwq = nwq[B[0x8]](dfwmz[jreg_o], dfwmz[jreg_o][B[0x8]](':' + d316f9 + ':', ':' + (d316f9 - 0x2) + ':'));
        }
      }nwq = nwq[B[0x8]](new RegExp(B[0xc], 'g'), B[0xd] + $lty52 + B[0xe]), nwq = nwq[B[0x8]](new RegExp(B[0xf], 'g'), B[0xd] + $lty52 + B[0xe]), x8p316[B[0x5]] = nwq;
    }var ub57y = { 'id': window[B[0x10]][B[0x11]], 'role': window[B[0x10]][B[0x12]], 'level': window[B[0x10]][B[0x13]], 'user': window[B[0x10]][B[0x14]], 'version': window[B[0x10]][B[0x15]], 'cdn': window[B[0x10]][B[0x16]], 'pkgName': window[B[0x10]][B[0x17]], 'gamever': window[B[0x6]][B[0x7]], 'serverid': window[B[0x10]][B[0x18]] ? window[B[0x10]][B[0x18]][B[0x19]] : 0x0, 'systemInfo': window[B[0x1a]], 'error': B[0x1b], 'stack': x8p316 ? x8p316[B[0x5]] : '' },
        $yb = JSON[B[0x1c]](ub57y);console[B[0x1d]](B[0x1e] + $yb), (!window[B[0x3]] || window[B[0x3]] != ub57y[B[0x1d]]) && (window[B[0x3]] = ub57y[B[0x1d]], window[B[0x1f]](ub57y));
  }
});import 'Z11md5min.js';import 'Z11zlibs.js';window[B[0x20]] = require(B[0x21]);import 'Z11index.js';import 'Z11libsmin.js';import 'Z11wxmini.js';import 'Z11initmin.js';console[B[0x1]](B[0x22]), console[B[0x1]](B[0x23]), z0Y7GL({ 'title': B[0x24] });var zwqmh0 = { 'z04YL7G': !![] };new window[B[0x25]](zwqmh0), window[B[0x25]][B[0x26]][B[0x27]]();if (window[B[0x28]]) clearInterval(window[B[0x28]]);window[B[0x28]] = null, window[B[0x29]] = function (_nqg, y7t52b) {
  if (!_nqg || !y7t52b) return 0x0;_nqg = _nqg[B[0x2a]]('.'), y7t52b = y7t52b[B[0x2a]]('.');const fz396d = Math[B[0x2b]](_nqg[B[0xa]], y7t52b[B[0xa]]);while (_nqg[B[0xa]] < fz396d) {
    _nqg[B[0x2c]]('0');
  }while (y7t52b[B[0xa]] < fz396d) {
    y7t52b[B[0x2c]]('0');
  }for (var f0wmz9 = 0x0; f0wmz9 < fz396d; f0wmz9++) {
    const r_jage = parseInt(_nqg[f0wmz9]),
          mzhwn = parseInt(y7t52b[f0wmz9]);if (r_jage > mzhwn) return 0x1;else {
      if (r_jage < mzhwn) return -0x1;
    }
  }return 0x0;
}, window[B[0x2d]] = wx[B[0x2e]]()[B[0x2d]], console[B[0x2f]](B[0x30] + window[B[0x2d]]);var zj_gaeq = wx[B[0x31]]();zj_gaeq[B[0x32]](function (r7ios) {
  console[B[0x2f]](B[0x33] + r7ios[B[0x34]]);
}), zj_gaeq[B[0x35]](function () {
  wx[B[0x36]]({ 'title': B[0x37], 'content': B[0x38], 'showCancel': ![], 'success': function (mwhf0) {
      zj_gaeq[B[0x39]]();
    } });
}), zj_gaeq[B[0x3a]](function () {
  console[B[0x2f]](B[0x3b]);
}), window[B[0x3c]] = function () {
  console[B[0x2f]](B[0x3d]);var nqe_ah = wx[B[0x3e]]({ 'name': B[0x3f], 'success': function (n_ahe) {
      console[B[0x2f]](B[0x40]), console[B[0x2f]](n_ahe), n_ahe && n_ahe[B[0x41]] == B[0x42] ? (window[B[0x43]] = !![], window[B[0x44]](), window[B[0x45]]()) : setTimeout(function () {
        window[B[0x3c]]();
      }, 0x1f4);
    }, 'fail': function (u57si) {
      console[B[0x2f]](B[0x46]), console[B[0x2f]](u57si), setTimeout(function () {
        window[B[0x3c]]();
      }, 0x1f4);
    } });nqe_ah && nqe_ah[B[0x47]](hnwz0 => {});
}, window[B[0x48]] = function () {
  console[B[0x2f]](B[0x49]);var gne_aq = wx[B[0x3e]]({ 'name': B[0x4a], 'success': function (eagnq_) {
      console[B[0x2f]](B[0x4b]), console[B[0x2f]](eagnq_), eagnq_ && eagnq_[B[0x41]] == B[0x42] ? (window[B[0x4c]] = !![], window[B[0x44]](), window[B[0x45]]()) : setTimeout(function () {
        window[B[0x48]]();
      }, 0x1f4);
    }, 'fail': function (urgsoj) {
      console[B[0x2f]](B[0x4d]), console[B[0x2f]](urgsoj), setTimeout(function () {
        window[B[0x48]]();
      }, 0x1f4);
    } });gne_aq && gne_aq[B[0x47]](_eojg => {});
}, window[B[0x4e]] = function () {
  window[B[0x29]](window[B[0x2d]], B[0x4f]) >= 0x0 ? (console[B[0x2f]](B[0x50] + window[B[0x2d]] + B[0x51]), window[B[0x52]](), window[B[0x3c]](), window[B[0x48]]()) : (window[B[0x53]](B[0x54], window[B[0x2d]]), wx[B[0x36]]({ 'title': B[0x55], 'content': B[0x56] }));
}, window[B[0x1a]] = '', wx[B[0x57]]({ 'success'(ty7b2) {
    window[B[0x1a]] = B[0x58] + ty7b2[B[0x59]] + B[0x5a] + ty7b2[B[0x5b]] + B[0x5c] + ty7b2[B[0x5d]] + B[0x5e] + ty7b2[B[0x5f]] + B[0x60] + ty7b2[B[0x61]] + B[0x62] + ty7b2[B[0x2d]] + B[0x63] + ty7b2[B[0x64]], console[B[0x2f]](window[B[0x1a]]), console[B[0x2f]](B[0x65] + ty7b2[B[0x66]] + B[0x67] + ty7b2[B[0x68]] + B[0x69] + ty7b2[B[0x6a]] + B[0x6b] + ty7b2[B[0x6c]] + B[0x6d] + ty7b2[B[0x6e]] + B[0x6f] + ty7b2[B[0x70]] + B[0x71] + (ty7b2[B[0x72]] ? ty7b2[B[0x72]][B[0x73]] + ',' + ty7b2[B[0x72]][B[0x74]] + ',' + ty7b2[B[0x72]][B[0x75]] + ',' + ty7b2[B[0x72]][B[0x76]] : ''));var b$2 = ty7b2[B[0x5f]] ? ty7b2[B[0x5f]][B[0x77]]() : '',
        osg = ty7b2[B[0x5b]] ? ty7b2[B[0x5b]][B[0x77]]()[B[0x8]]('\x20', '') : '';window[B[0x10]][B[0x78]] = b$2[B[0x79]](B[0x7a]) != -0x1, window[B[0x10]][B[0x7b]] = b$2[B[0x79]](B[0x7c]) != -0x1, window[B[0x10]][B[0x7d]] = b$2[B[0x79]](B[0x7a]) != -0x1 || b$2[B[0x79]](B[0x7c]) != -0x1, window[B[0x10]][B[0x7e]] = b$2[B[0x79]](B[0x7f]) != -0x1 || b$2[B[0x79]](B[0x80]) != -0x1, window[B[0x10]][B[0x81]] = ty7b2[B[0x61]] ? ty7b2[B[0x61]][B[0x77]]() : '', window[B[0x10]][B[0x82]] = ![], window[B[0x10]][B[0x83]] = 0x2;if (b$2[B[0x79]](B[0x7c]) != -0x1) {
      if (ty7b2[B[0x64]] >= 0x18) window[B[0x10]][B[0x83]] = 0x3;else window[B[0x10]][B[0x83]] = 0x2;
    } else {
      if (b$2[B[0x79]](B[0x7a]) != -0x1) {
        if (ty7b2[B[0x64]] && ty7b2[B[0x64]] >= 0x14) window[B[0x10]][B[0x83]] = 0x3;else {
          if (osg[B[0x79]](B[0x84]) != -0x1 || osg[B[0x79]](B[0x85]) != -0x1 || osg[B[0x79]](B[0x86]) != -0x1 || osg[B[0x79]](B[0x87]) != -0x1 || osg[B[0x79]](B[0x88]) != -0x1) window[B[0x10]][B[0x83]] = 0x2;else window[B[0x10]][B[0x83]] = 0x3;
        }
      } else window[B[0x10]][B[0x83]] = 0x2;
    }console[B[0x2f]](B[0x89] + window[B[0x10]][B[0x82]] + B[0x8a] + window[B[0x10]][B[0x83]]);
  } }), wx[B[0x8b]]({ 'success': function (y2b5t$) {
    console[B[0x2f]](B[0x8c] + y2b5t$[B[0x8d]] + B[0x8e] + y2b5t$[B[0x8f]]);
  } }), wx[B[0x90]]({ 'success': function ($bt52y) {
    console[B[0x2f]](B[0x91] + $bt52y[B[0x92]]);
  } }), wx[B[0x93]]({ 'keepScreenOn': !![] }), wx[B[0x94]](function (g_qane) {
  console[B[0x2f]](B[0x91] + g_qane[B[0x92]] + B[0x95] + g_qane[B[0x96]]);
}), wx[B[0x97]](function (ty2$vl) {
  window[B[0x98]] = ty2$vl, window[B[0x99]] && window[B[0x98]] && (console[B[0x1]](B[0x9a] + window[B[0x98]][B[0x9b]]), window[B[0x99]](window[B[0x98]]), window[B[0x98]] = null);
}), window[B[0x9c]] = 0x0, window[B[0x9d]] = 0x0, window[B[0x9e]] = null, wx[B[0x9f]](function () {
  window[B[0x9d]]++;var _ajge = Date[B[0xa0]]();(window[B[0x9c]] == 0x0 || _ajge - window[B[0x9c]] > 0x1d4c0) && (console[B[0xa1]](B[0xa2]), wx[B[0xa3]]());if (window[B[0x9d]] >= 0x2) {
    window[B[0x9d]] = 0x0, console[B[0x1d]](B[0xa4]), wx[B[0xa5]]('0', 0x1);if (window[B[0x10]] && window[B[0x10]][B[0x78]]) window[B[0x53]](B[0xa6], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});