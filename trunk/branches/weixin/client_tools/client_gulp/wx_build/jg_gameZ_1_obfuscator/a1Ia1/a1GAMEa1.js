var C = wx.$a;
console[C[460000]](C[460001]), window[C[460002]], wx[C[460003]](function (rcsv$) {
  if (rcsv$) {
    if (rcsv$[C[460004]]) {
      var z_94 = window[C[460005]][C[460006]][C[460007]](new RegExp(/\./, 'g'), '_'),
          it5dho = rcsv$[C[460004]],
          x5hoti = it5dho[C[460008]](/(aaaaa\/a1GAMEa1.js:)[0-9]{1,60}(:)/g);if (x5hoti) for (var x2hbo = 0x0; x2hbo < x5hoti[C[460009]]; x2hbo++) {
        if (x5hoti[x2hbo] && x5hoti[x2hbo][C[460009]] > 0x0) {
          var rqvl$0 = parseInt(x5hoti[x2hbo][C[460007]]('aaaaa/a1GAMEa1.js:', '')[C[460007]](':', ''));it5dho = it5dho[C[460007]](x5hoti[x2hbo], x5hoti[x2hbo][C[460007]](':' + rqvl$0 + ':', ':' + (rqvl$0 - 0x2) + ':'));
        }
      }it5dho = it5dho[C[460007]](new RegExp('aaaaa/a1GAMEa1.js', 'g'), C[460010] + z_94 + C[460011]), it5dho = it5dho[C[460007]](new RegExp('aaaaa/a1MAIa1.js', 'g'), C[460010] + z_94 + C[460011]), rcsv$[C[460004]] = it5dho;
    }var toi = { 'id': window['a14M'][C[460012]], 'role': window['a14M'][C[460013]], 'level': window['a14M'][C[460014]], 'user': window['a14M'][C[460015]], 'version': window['a14M'][C[460016]], 'gamever': window[C[460005]][C[460006]], 'cdn': window['a14M'][C[460017]], 'serverid': window['a14M'][C[460018]] ? window['a14M'][C[460018]][C[460019]] : 0x0, 'systemInfo': window[C[460020]], 'error': C[460021], 'stack': rcsv$ ? rcsv$[C[460004]] : '' },
        kyl0f6 = JSON[C[460022]](toi);console[C[460023]](C[460024] + kyl0f6), (!window[C[460002]] || window[C[460002]] != toi[C[460023]]) && (window[C[460002]] = toi[C[460023]], window['a1J4'](toi));
  }
});import 'aabfaa.js';import 'aa11aa.js';window[C[460025]] = require(C[460026]);import 'aINDaa.js';import 'aaIB1aa.js';import 'aaMtadaa.js';import 'aaINIaa.js';console[C[460000]](C[460027]), console[C[460000]](C[460028]), a1J48M({ 'title': C[460029] });var axb2pn8 = { 'a1CJM48': !![] };new window[C[460030]](axb2pn8), window[C[460030]][C[460031]]['a1C84MJ']();if (window['a1CJ4M8']) clearInterval(window['a1CJ4M8']);window['a1CJ4M8'] = null, window['a1C8MJ4'] = function (p8ox2b, f$kl) {
  if (!p8ox2b || !f$kl) return 0x0;p8ox2b = p8ox2b[C[460032]]('.'), f$kl = f$kl[C[460032]]('.');const yk07f = Math[C[460033]](p8ox2b[C[460009]], f$kl[C[460009]]);while (p8ox2b[C[460009]] < yk07f) {
    p8ox2b[C[460034]]('0');
  }while (f$kl[C[460009]] < yk07f) {
    f$kl[C[460034]]('0');
  }for (var lrq0v = 0x0; lrq0v < yk07f; lrq0v++) {
    const hx5oit = parseInt(p8ox2b[lrq0v]),
          n8xpb = parseInt(f$kl[lrq0v]);if (hx5oit > n8xpb) return 0x1;else {
      if (hx5oit < n8xpb) return -0x1;
    }
  }return 0x0;
}, window[C[460035]] = wx[C[460036]]()[C[460035]], console[C[460037]](C[460038] + window[C[460035]]);var aklyf0 = wx[C[460039]]();aklyf0[C[460040]](function (eng28) {
  console[C[460037]](C[460041] + eng28[C[460042]]);
}), aklyf0[C[460043]](function () {
  wx[C[460044]]({ 'title': C[460045], 'content': C[460046], 'showCancel': ![], 'success': function (d9j4) {
      aklyf0[C[460047]]();
    } });
}), aklyf0[C[460048]](function () {
  console[C[460037]](C[460049]);
}), window['a1C8M4J'] = function () {
  console[C[460037]](C[460050]);var v$0kf = wx[C[460051]]({ 'name': 'a1pfta1', 'success': function (lfk$0v) {
      console[C[460037]](C[460052]), console[C[460037]](lfk$0v), lfk$0v && lfk$0v[C[460053]] == C[460054] ? (window['a1M8'] = !![], window['a1M84J'](), window['a1M4J8']()) : setTimeout(function () {
        window['a1C8M4J']();
      }, 0x1f4);
    }, 'fail': function (b8x2np) {
      console[C[460037]](C[460055]), console[C[460037]](b8x2np), setTimeout(function () {
        window['a1C8M4J']();
      }, 0x1f4);
    } });v$0kf && v$0kf[C[460056]](y70fk6 => {});
}, window['a1C4JM8'] = function () {
  console[C[460037]](C[460057]);var k0lf6y = wx[C[460051]]({ 'name': C[460058], 'success': function ($vq0rl) {
      console[C[460037]](C[460059]), console[C[460037]]($vq0rl), $vq0rl && $vq0rl[C[460053]] == C[460054] ? (window['a148M'] = !![], window['a1M84J'](), window['a1M4J8']()) : setTimeout(function () {
        window['a1C4JM8']();
      }, 0x1f4);
    }, 'fail': function (xbhoti) {
      console[C[460037]](C[460060]), console[C[460037]](xbhoti), setTimeout(function () {
        window['a1C4JM8']();
      }, 0x1f4);
    } });k0lf6y && k0lf6y[C[460056]](hp2ob => {});
}, window[C[460061]] = function () {
  window['a1C8MJ4'](window[C[460035]], C[460062]) >= 0x0 ? (console[C[460037]](C[460063] + window[C[460035]] + C[460064]), window['a14J'](), window['a1C8M4J'](), window['a1C4JM8']()) : (window['a14MJ'](C[460065], window[C[460035]]), wx[C[460044]]({ 'title': C[460066], 'content': C[460067] }));
}, window[C[460020]] = '', wx[C[460068]]({ 'success'(_rvqcs) {
    window[C[460020]] = C[460069] + _rvqcs[C[460070]] + C[460071] + _rvqcs[C[460072]] + C[460073] + _rvqcs[C[460074]] + C[460075] + _rvqcs[C[460076]] + C[460077] + _rvqcs[C[460078]] + C[460079] + _rvqcs[C[460035]] + C[460080] + _rvqcs[C[460081]], console[C[460037]](window[C[460020]]), console[C[460037]](C[460082] + _rvqcs[C[460083]] + C[460084] + _rvqcs[C[460085]] + C[460086] + _rvqcs[C[460087]] + C[460088] + _rvqcs[C[460089]] + C[460090] + _rvqcs[C[460091]] + C[460092] + _rvqcs[C[460093]] + C[460094] + (_rvqcs[C[460095]] ? _rvqcs[C[460095]][C[460096]] + ',' + _rvqcs[C[460095]][C[460097]] + ',' + _rvqcs[C[460095]][C[460098]] + ',' + _rvqcs[C[460095]][C[460099]] : ''));var m4z5dj = _rvqcs[C[460076]] ? _rvqcs[C[460076]][C[460100]]() : '',
        tidj4 = _rvqcs[C[460072]] ? _rvqcs[C[460072]][C[460100]]()[C[460007]]('\x20', '') : '';window['a14M'][C[460101]] = m4z5dj[C[460102]](C[460103]) != -0x1, window['a14M'][C[460104]] = m4z5dj[C[460102]](C[460105]) != -0x1, window['a14M'][C[460106]] = m4z5dj[C[460102]](C[460103]) != -0x1 || m4z5dj[C[460102]](C[460105]) != -0x1, window['a14M'][C[460107]] = m4z5dj[C[460102]](C[460108]) != -0x1 || m4z5dj[C[460102]](C[460109]) != -0x1, window['a14M'][C[460110]] = _rvqcs[C[460078]] ? _rvqcs[C[460078]][C[460100]]() : '', window['a14M']['a1CJ8M4'] = ![], window['a14M']['a1CJ48M'] = 0x2;if (m4z5dj[C[460102]](C[460105]) != -0x1) {
      if (_rvqcs[C[460081]] >= 0x18) window['a14M']['a1CJ48M'] = 0x3;else window['a14M']['a1CJ48M'] = 0x2;
    } else {
      if (m4z5dj[C[460102]](C[460103]) != -0x1) {
        if (_rvqcs[C[460081]] && _rvqcs[C[460081]] >= 0x14) window['a14M']['a1CJ48M'] = 0x3;else {
          if (tidj4[C[460102]](C[460111]) != -0x1 || tidj4[C[460102]](C[460112]) != -0x1 || tidj4[C[460102]](C[460113]) != -0x1 || tidj4[C[460102]](C[460114]) != -0x1 || tidj4[C[460102]](C[460115]) != -0x1) window['a14M']['a1CJ48M'] = 0x2;else window['a14M']['a1CJ48M'] = 0x3;
        }
      } else window['a14M']['a1CJ48M'] = 0x2;
    }console[C[460037]](C[460116] + window['a14M']['a1CJ8M4'] + C[460117] + window['a14M']['a1CJ48M']);
  } }), wx[C[460118]]({ 'success': function (jzm9) {
    console[C[460037]](C[460119] + jzm9[C[460120]] + C[460121] + jzm9[C[460122]]);
  } }), wx[C[460123]]({ 'success': function (dm49zj) {
    console[C[460037]](C[460124] + dm49zj[C[460125]]);
  } }), wx[C[460126]]({ 'keepScreenOn': !![] }), wx[C[460127]](function (f0vk) {
  console[C[460037]](C[460124] + f0vk[C[460125]] + C[460128] + f0vk[C[460129]]);
}), wx[C[460130]](function (cs_qr) {
  window['a18J'] = cs_qr, window['a1MJ8'] && window['a18J'] && (console[C[460000]](C[460131] + window['a18J'][C[460132]]), window['a1MJ8'](window['a18J']), window['a18J'] = null);
}), window['a1C48MJ'] = 0x0, window[C[460133]] = null, wx[C[460134]](function () {
  window['a1C48MJ']++, wx[C[460135]]();if (window['a1C48MJ'] >= 0x2) {
    window['a1C48MJ'] = 0x0, console[C[460023]](C[460136]), wx[C[460137]]('0', 0x1);if (window['a14M'] && window['a14M'][C[460101]]) window['a14MJ'](C[460138], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});