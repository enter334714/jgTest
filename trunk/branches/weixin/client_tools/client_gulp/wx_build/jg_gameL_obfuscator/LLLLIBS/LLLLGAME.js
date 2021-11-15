var W = wx.$l;
console[W[160078]](W[187480]), window[W[187481]], wx[W[187482]](function (n3x0yr) {
  if (n3x0yr) {
    if (n3x0yr[W[164419]]) {
      var khb2 = window[W[160547]][W[187483]][W[164595]](new RegExp(/\./, 'g'), '_'),
          ic0mr3 = n3x0yr[W[164419]],
          pue1g6 = ic0mr3[W[171564]](/(LLLLLLLL\/LLLLGAME.js:)[0-9]{1,60}(:)/g);if (pue1g6) for (var $k2d = 0x0; $k2d < pue1g6[W[160013]]; $k2d++) {
        if (pue1g6[$k2d] && pue1g6[$k2d][W[160013]] > 0x0) {
          var vg17ue = parseInt(pue1g6[$k2d][W[164595]](W[187484], '')[W[164595]](':', ''));ic0mr3 = ic0mr3[W[164595]](pue1g6[$k2d], pue1g6[$k2d][W[164595]](':' + vg17ue + ':', ':' + (vg17ue - 0x2) + ':'));
        }
      }ic0mr3 = ic0mr3[W[164595]](new RegExp(W[187485], 'g'), W[187486] + khb2 + W[184347]), ic0mr3 = ic0mr3[W[164595]](new RegExp(W[187487], 'g'), W[187486] + khb2 + W[184347]), n3x0yr[W[164419]] = ic0mr3;
    }var o5lt9 = { 'id': window['$LHD'][W[187488]], 'role': window['$LHD'][W[164537]], 'level': window['$LHD'][W[187489]], 'user': window['$LHD'][W[184250]], 'version': window['$LHD'][W[160101]], 'gamever': window[W[160547]][W[187483]], 'cdn': window['$LHD'][W[164418]], 'serverid': window['$LHD'][W[184245]] ? window['$LHD'][W[184245]][W[171126]] : 0x0, 'systemInfo': window[W[187490]], 'error': W[187491], 'stack': n3x0yr ? n3x0yr[W[164419]] : '' },
        r03cmy = JSON[W[164404]](o5lt9);console[W[160125]](W[187492] + r03cmy), (!window[W[187481]] || window[W[187481]] != o5lt9[W[160125]]) && (window[W[187481]] = o5lt9[W[160125]], window['$LTH'](o5lt9));
  }
});import 'lllMDFIVEMIN.js';import 'lllZLIBS.js';window[W[187493]] = require(W[187494]);import 'LLLLINDEX.js';import 'llllLIBSMIN.js';import 'LLLLWXMINI.js';import 'LLLINITMIN.js';console[W[160078]](W[187495]), console[W[160078]](W[187496]), $LTH0D({ 'title': W[187497] });var L9qf59l = { '$LB0THD': !![] };new window[W[187479]](L9qf59l), window[W[187479]][W[160148]]['$LB0DTH']();if (window['$LBTD0H']) clearInterval(window['$LBTD0H']);window['$LBTD0H'] = null, window['$LB0DHT'] = function (haqjkz, abjh2k) {
  if (!haqjkz || !abjh2k) return 0x0;haqjkz = haqjkz[W[160015]]('.'), abjh2k = abjh2k[W[160015]]('.');const vo71e9 = Math[W[160842]](haqjkz[W[160013]], abjh2k[W[160013]]);while (haqjkz[W[160013]] < vo71e9) {
    haqjkz[W[160029]]('0');
  }while (abjh2k[W[160013]] < vo71e9) {
    abjh2k[W[160029]]('0');
  }for (var $sd2b8 = 0x0; $sd2b8 < vo71e9; $sd2b8++) {
    const asd$2 = parseInt(haqjkz[$sd2b8]),
          d8s4$2 = parseInt(abjh2k[$sd2b8]);if (asd$2 > d8s4$2) return 0x1;else {
      if (asd$2 < d8s4$2) return -0x1;
    }
  }return 0x0;
}, window[W[187498]] = wx[W[187499]]()[W[187498]], console[W[160471]](W[187500] + window[W[187498]]);var L9lztf = wx[W[187501]]();L9lztf[W[187502]](function (b2s8d) {
  console[W[160471]](W[187503] + b2s8d[W[187504]]);
}), L9lztf[W[187505]](function () {
  wx[W[187506]]({ 'title': W[187507], 'content': W[187508], 'showCancel': ![], 'success': function (r03nyx) {
      L9lztf[W[187509]]();
    } });
}), L9lztf[W[187510]](function () {
  console[W[160471]](W[187511]);
}), window['$LBHT0D'] = function () {
  console[W[160471]](W[187512]);var m3i0rc = wx[W[187513]]({ 'name': W[187514], 'success': function (h2jk) {
      console[W[160471]](W[187515]), console[W[160471]](h2jk), h2jk && h2jk[W[184425]] == W[187516] ? (window['$LD0'] = !![], window['$LDHT0'](), window['$LDH0T']()) : setTimeout(function () {
        window['$LBHT0D']();
      }, 0x1f4);
    }, 'fail': function (l5th) {
      console[W[160471]](W[187517]), console[W[160471]](l5th), setTimeout(function () {
        window['$LBHT0D']();
      }, 0x1f4);
    } });m3i0rc && m3i0rc[W[187518]](b2sad$ => {});
}, window['$LBH0TD'] = function () {
  console[W[160471]](W[187519]);var s$4_ = wx[W[187513]]({ 'name': W[187520], 'success': function (b2jak) {
      console[W[160471]](W[187521]), console[W[160471]](b2jak), b2jak && b2jak[W[184425]] == W[187516] ? (window['$LH0D'] = !![], window['$LDHT0'](), window['$LDH0T']()) : setTimeout(function () {
        window['$LBH0TD']();
      }, 0x1f4);
    }, 'fail': function (n_8$s) {
      console[W[160471]](W[187522]), console[W[160471]](n_8$s), setTimeout(function () {
        window['$LBH0TD']();
      }, 0x1f4);
    } });s$4_ && s$4_[W[187518]](egp16 => {});
}, window[W[187523]] = function () {
  window['$LB0DHT'](window[W[187498]], W[187524]) >= 0x0 ? (console[W[160471]](W[187525] + window[W[187498]] + W[187526]), window['$LHT'](), window['$LBHT0D'](), window['$LBH0TD']()) : (window['$LHDT'](W[187527], window[W[187498]]), wx[W[187506]]({ 'title': W[166309], 'content': W[187528] }));
}, window[W[187490]] = '', wx[W[187529]]({ 'success'(_x04yn) {
    window[W[187490]] = W[187530] + _x04yn[W[187531]] + W[187532] + _x04yn[W[187533]] + W[187534] + _x04yn[W[164608]] + W[187535] + _x04yn[W[160464]] + W[187536] + _x04yn[W[184221]] + W[187537] + _x04yn[W[187498]] + W[187538] + _x04yn[W[169037]], console[W[160471]](window[W[187490]]), console[W[160471]](W[187539] + _x04yn[W[187540]] + W[187541] + _x04yn[W[187542]] + W[187543] + _x04yn[W[187544]] + W[187545] + _x04yn[W[187546]] + W[187547] + _x04yn[W[187548]] + W[187549] + _x04yn[W[187550]] + W[187551] + (_x04yn[W[187552]] ? _x04yn[W[187552]][W[160320]] + ',' + _x04yn[W[187552]][W[161204]] + ',' + _x04yn[W[187552]][W[161206]] + ',' + _x04yn[W[187552]][W[161205]] : ''));var hakjbz = _x04yn[W[160464]] ? _x04yn[W[160464]][W[171816]]() : '',
        n0_xy3 = _x04yn[W[187533]] ? _x04yn[W[187533]][W[171816]]()[W[164595]]('\x20', '') : '';window['$LHD'][W[160501]] = hakjbz[W[160115]](W[187553]) != -0x1, window['$LHD'][W[170956]] = hakjbz[W[160115]](W[187554]) != -0x1, window['$LHD'][W[187555]] = hakjbz[W[160115]](W[187553]) != -0x1 || hakjbz[W[160115]](W[187554]) != -0x1, window['$LHD'][W[183939]] = hakjbz[W[160115]](W[187556]) != -0x1 || hakjbz[W[160115]](W[187557]) != -0x1, window['$LHD'][W[187558]] = _x04yn[W[184221]] ? _x04yn[W[184221]][W[171816]]() : '', window['$LHD']['$LBTH0D'] = ![], window['$LHD']['$LBTHD0'] = 0x2;if (hakjbz[W[160115]](W[187554]) != -0x1) {
      if (_x04yn[W[169037]] >= 0x18) window['$LHD']['$LBTHD0'] = 0x3;else window['$LHD']['$LBTHD0'] = 0x2;
    } else {
      if (hakjbz[W[160115]](W[187553]) != -0x1) {
        if (_x04yn[W[169037]] && _x04yn[W[169037]] >= 0x14) window['$LHD']['$LBTHD0'] = 0x3;else {
          if (n0_xy3[W[160115]](W[187559]) != -0x1 || n0_xy3[W[160115]](W[187560]) != -0x1 || n0_xy3[W[160115]](W[187561]) != -0x1 || n0_xy3[W[160115]](W[187562]) != -0x1 || n0_xy3[W[160115]](W[187563]) != -0x1) window['$LHD']['$LBTHD0'] = 0x2;else window['$LHD']['$LBTHD0'] = 0x3;
        }
      } else window['$LHD']['$LBTHD0'] = 0x2;
    }console[W[160471]](W[187564] + window['$LHD']['$LBTH0D'] + W[187565] + window['$LHD']['$LBTHD0']);
  } }), wx[W[187566]]({ 'success': function (kjhabz) {
    console[W[160471]](W[187567] + kjhabz[W[164513]] + W[187568] + kjhabz[W[187569]]);
  } }), wx[W[187570]]({ 'success': function (adb$s2) {
    console[W[160471]](W[187571] + adb$s2[W[187572]]);
  } }), wx[W[187573]]({ 'keepScreenOn': !![] }), wx[W[187574]](function (j2dab) {
  console[W[160471]](W[187571] + j2dab[W[187572]] + W[187575] + j2dab[W[187576]]);
}), wx[W[187577]](function (pu1ge6) {
  window['$LDT0'] = pu1ge6, window['$LD0T'] && window['$LDT0'] && (console[W[160078]](W[187578] + window['$LDT0'][W[160765]]), window['$LD0T'](window['$LDT0']), window['$LDT0'] = null);
}), window['$LBHDT0'] = 0x0, window[W[187579]] = null, wx[W[187580]](function () {
  window['$LBHDT0']++, wx[W[171367]]();if (window['$LBHDT0'] >= 0x2) {
    window['$LBHDT0'] = 0x0, console[W[160125]](W[187581]), wx[W[187582]]('0', 0x1);if (window['$LHD'] && window['$LHD'][W[160501]]) window['$LHDT'](W[187583], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});