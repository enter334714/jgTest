var G = wx.$E;
console[G[580000]](G[580001]), window[G[580002]], wx[G[580003]](function (vr9uq) {
  if (vr9uq) {
    if (vr9uq[G[580004]]) {
      var c64kb = window[G[580005]][G[580006]][G[580007]](new RegExp(/\./, 'g'), '_'),
          k5jc6 = vr9uq[G[580004]],
          z03ts = k5jc6[G[580008]](/(DD88DD88DD88DD88DD88\/DD882GDD88MEDD882.js:)[0-9]{1,60}(:)/g);if (z03ts) for (var $kjc6 = 0x0; $kjc6 < z03ts[G[580009]]; $kjc6++) {
        if (z03ts[$kjc6] && z03ts[$kjc6][G[580009]] > 0x0) {
          var s02t_ = parseInt(z03ts[$kjc6][G[580007]](G[580010], '')[G[580007]](':', ''));k5jc6 = k5jc6[G[580007]](z03ts[$kjc6], z03ts[$kjc6][G[580007]](':' + s02t_ + ':', ':' + (s02t_ - 0x2) + ':'));
        }
      }k5jc6 = k5jc6[G[580007]](new RegExp(G[580011], 'g'), G[580012] + c64kb + G[580013]), k5jc6 = k5jc6[G[580007]](new RegExp(G[580014], 'g'), G[580012] + c64kb + G[580013]), vr9uq[G[580004]] = k5jc6;
    }var t1_dsi = { 'id': window['E1R_'][G[580015]], 'role': window['E1R_'][G[580016]], 'level': window['E1R_'][G[580017]], 'user': window['E1R_'][G[580018]], 'version': window['E1R_'][G[580019]], 'gamever': window[G[580005]][G[580006]], 'cdn': window['E1R_'][G[580020]], 'serverid': window['E1R_'][G[580021]] ? window['E1R_'][G[580021]][G[580022]] : 0x0, 'systemInfo': window[G[580023]], 'error': G[580024], 'stack': vr9uq ? vr9uq[G[580004]] : '' },
        i6k5jd = JSON[G[580025]](t1_dsi);console[G[580026]](G[580027] + i6k5jd), (!window[G[580002]] || window[G[580002]] != t1_dsi[G[580026]]) && (window[G[580002]] = t1_dsi[G[580026]], window['E1DR'](t1_dsi));
  }
});import 'DD88DD88bfDD88DD88.js';import 'DD88DD8811DD88DD88.js';window[G[580028]] = require(G[580029]);import 'DD88INDDD88DD88.js';import 'DD88DD88IDD881DD88DD88.js';import 'DD88DD88MtadDD88DD88.js';import 'DD88DD88INIDD88aDD88.js';console[G[580000]](G[580030]), console[G[580000]](G[580031]), E1DR6_({ 'title': G[580032] });var Ei5j6dk = { 'E1CD_R6': !![] };new window[G[580033]](Ei5j6dk), window[G[580033]][G[580034]]['E1C6R_D']();if (window['E1CDR_6']) clearInterval(window['E1CDR_6']);window['E1CDR_6'] = null, window['E1C6_DR'] = function (w7mb8f, j15di) {
  if (!w7mb8f || !j15di) return 0x0;w7mb8f = w7mb8f[G[580035]]('.'), j15di = j15di[G[580035]]('.');const j$d65 = Math[G[580036]](w7mb8f[G[580009]], j15di[G[580009]]);while (w7mb8f[G[580009]] < j$d65) {
    w7mb8f[G[580037]]('0');
  }while (j15di[G[580009]] < j$d65) {
    j15di[G[580037]]('0');
  }for (var f87wr = 0x0; f87wr < j$d65; f87wr++) {
    const qrw8f = parseInt(w7mb8f[f87wr]),
          s_30t = parseInt(j15di[f87wr]);if (qrw8f > s_30t) return 0x1;else {
      if (qrw8f < s_30t) return -0x1;
    }
  }return 0x0;
}, window[G[580038]] = wx[G[580039]]()[G[580038]], console[G[580040]](G[580041] + window[G[580038]]);var E_ds1ti = wx[G[580042]]();E_ds1ti[G[580043]](function (rhaqu) {
  console[G[580040]](G[580044] + rhaqu[G[580045]]);
}), E_ds1ti[G[580046]](function () {
  wx[G[580047]]({ 'title': G[580048], 'content': G[580049], 'showCancel': ![], 'success': function (qra) {
      E_ds1ti[G[580050]]();
    } });
}), E_ds1ti[G[580051]](function () {
  console[G[580040]](G[580052]);
}), window['E1C6_RD'] = function () {
  console[G[580040]](G[580053]);var guhaq9 = wx[G[580054]]({ 'name': G[580055], 'success': function (nyopxl) {
      console[G[580040]](G[580056]), console[G[580040]](nyopxl), nyopxl && nyopxl[G[580057]] == G[580058] ? (window['E1_6'] = !![], window['E1_6RD'](), window['E1_RD6']()) : setTimeout(function () {
        window['E1C6_RD']();
      }, 0x1f4);
    }, 'fail': function (bk$6c) {
      console[G[580040]](G[580059]), console[G[580040]](bk$6c), setTimeout(function () {
        window['E1C6_RD']();
      }, 0x1f4);
    } });guhaq9 && guhaq9[G[580060]](ki56 => {});
}, window['E1CRD_6'] = function () {
  console[G[580040]](G[580061]);var bf47m8 = wx[G[580054]]({ 'name': G[580062], 'success': function (p9yug) {
      console[G[580040]](G[580063]), console[G[580040]](p9yug), p9yug && p9yug[G[580057]] == G[580058] ? (window['E1R6_'] = !![], window['E1_6RD'](), window['E1_RD6']()) : setTimeout(function () {
        window['E1CRD_6']();
      }, 0x1f4);
    }, 'fail': function ($ckb4) {
      console[G[580040]](G[580064]), console[G[580040]]($ckb4), setTimeout(function () {
        window['E1CRD_6']();
      }, 0x1f4);
    } });bf47m8 && bf47m8[G[580060]](oplynx => {});
};window['E1C6_DR'](window[G[580038]], G[580065]) >= 0x0 ? (console[G[580040]](G[580066] + window[G[580038]] + G[580067]), window['E1RD'](), window['E1C6_RD'](), window['E1CRD_6']()) : (window['E1R_D'](G[580068], window[G[580038]]), wx[G[580047]]({ 'title': G[580069], 'content': G[580070] }));window[G[580023]] = '', wx[G[580071]]({ 'success'(lnhp) {
    window[G[580023]] = G[580072] + lnhp[G[580073]] + G[580074] + lnhp[G[580075]] + G[580076] + lnhp[G[580077]] + G[580078] + lnhp[G[580079]] + G[580080] + lnhp[G[580081]] + G[580082] + lnhp[G[580038]] + G[580083] + lnhp[G[580084]], console[G[580040]](window[G[580023]]), console[G[580040]](G[580085] + lnhp[G[580086]] + G[580087] + lnhp[G[580088]] + G[580089] + lnhp[G[580090]] + G[580091] + lnhp[G[580092]] + G[580093] + lnhp[G[580094]] + G[580095] + lnhp[G[580096]] + G[580097] + (lnhp[G[580098]] ? lnhp[G[580098]][G[580099]] + ',' + lnhp[G[580098]][G[580100]] + ',' + lnhp[G[580098]][G[580101]] + ',' + lnhp[G[580098]][G[580102]] : ''));var yxglnp = lnhp[G[580079]] ? lnhp[G[580079]][G[580103]]() : '',
        $4b6c = lnhp[G[580075]] ? lnhp[G[580075]][G[580103]]()[G[580007]]('\x20', '') : '';window['E1R_'][G[580104]] = yxglnp[G[580105]](G[580106]) != -0x1, window['E1R_'][G[580107]] = yxglnp[G[580105]](G[580108]) != -0x1, window['E1R_'][G[580109]] = yxglnp[G[580105]](G[580106]) != -0x1 || yxglnp[G[580105]](G[580108]) != -0x1, window['E1R_'][G[580110]] = yxglnp[G[580105]](G[580111]) != -0x1 || yxglnp[G[580105]](G[580112]) != -0x1, window['E1R_'][G[580113]] = lnhp[G[580081]] ? lnhp[G[580081]][G[580103]]() : '', window['E1R_']['E1CD6_R'] = ![], window['E1R_']['E1CDR6_'] = 0x2;if (yxglnp[G[580105]](G[580108]) != -0x1) {
      if (lnhp[G[580084]] >= 0x18) window['E1R_']['E1CDR6_'] = 0x3;else window['E1R_']['E1CDR6_'] = 0x2;
    } else {
      if (yxglnp[G[580105]](G[580106]) != -0x1) {
        if (lnhp[G[580084]] && lnhp[G[580084]] >= 0x14) window['E1R_']['E1CDR6_'] = 0x3;else {
          if ($4b6c[G[580105]](G[580114]) != -0x1 || $4b6c[G[580105]](G[580115]) != -0x1 || $4b6c[G[580105]](G[580116]) != -0x1 || $4b6c[G[580105]](G[580117]) != -0x1 || $4b6c[G[580105]](G[580118]) != -0x1) window['E1R_']['E1CDR6_'] = 0x2;else window['E1R_']['E1CDR6_'] = 0x3;
        }
      } else window['E1R_']['E1CDR6_'] = 0x2;
    }console[G[580040]](G[580119] + window['E1R_']['E1CD6_R'] + G[580120] + window['E1R_']['E1CDR6_']);
  } }), wx[G[580121]]({ 'success': function (vwaqr8) {
    console[G[580040]](G[580122] + vwaqr8[G[580123]] + G[580124] + vwaqr8[G[580125]]);
  } }), wx[G[580126]]({ 'success': function (rwv87f) {
    console[G[580040]](G[580127] + rwv87f[G[580128]]);
  } }), wx[G[580129]]({ 'keepScreenOn': !![] }), wx[G[580130]](function (gpuh9) {
  console[G[580040]](G[580127] + gpuh9[G[580128]] + G[580131] + gpuh9[G[580132]]);
}), wx[G[580133]](function (tz3s02) {
  window['E16D'] = tz3s02, window['E1_D6'] && window['E16D'] && (console[G[580000]](G[580134] + window['E16D'][G[580135]]), window['E1_D6'](window['E16D']), window['E16D'] = null);
}), window['E1CR6_D'] = 0x0, window[G[580136]] = null, wx[G[580137]](function () {
  window['E1CR6_D']++, wx[G[580138]]();if (window['E1CR6_D'] >= 0x2) {
    window['E1CR6_D'] = 0x0, console[G[580026]](G[580139]), wx[G[580140]]('0', 0x1);if (window['E1R_'] && window['E1R_'][G[580104]]) window['E1R_D'](G[580141], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});