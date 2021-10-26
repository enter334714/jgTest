var k = wx.$f;
console[k[77]](k[26300]), window[k[26301]], wx[k[26302]](function (u9eaq) {
  if (u9eaq) {
    if (u9eaq[k[4028]]) {
      var h7xzm = window[k[530]][k[26303]][k[4192]](new RegExp(/\./, 'g'), '_'),
          ki3rb_ = u9eaq[k[4028]],
          bko = ki3rb_[k[10649]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (bko) for (var qa59 = 0x0; qa59 < bko[k[13]]; qa59++) {
        if (bko[qa59] && bko[qa59][k[13]] > 0x0) {
          var xum9 = parseInt(bko[qa59][k[4192]](k[26304], '')[k[4192]](':', ''));ki3rb_ = ki3rb_[k[4192]](bko[qa59], bko[qa59][k[4192]](':' + xum9 + ':', ':' + (xum9 - 0x2) + ':'));
        }
      }ki3rb_ = ki3rb_[k[4192]](new RegExp(k[26305], 'g'), k[26306] + h7xzm + k[23003]), ki3rb_ = ki3rb_[k[4192]](new RegExp(k[26307], 'g'), k[26306] + h7xzm + k[23003]), u9eaq[k[4028]] = ki3rb_;
    }var n40r_y = { 'id': window['F$ZG'][k[26308]], 'role': window['F$ZG'][k[4135]], 'level': window['F$ZG'][k[26309]], 'user': window['F$ZG'][k[22907]], 'version': window['F$ZG'][k[100]], 'gamever': window[k[530]][k[26303]], 'cdn': window['F$ZG'][k[4027]], 'serverid': window['F$ZG'][k[22902]] ? window['F$ZG'][k[22902]][k[10248]] : 0x0, 'systemInfo': window[k[26310]], 'error': k[26311], 'stack': u9eaq ? u9eaq[k[4028]] : '' },
        b3$iok = JSON[k[4013]](n40r_y);console[k[124]](k[26312] + b3$iok), (!window[k[26301]] || window[k[26301]] != n40r_y[k[124]]) && (window[k[26301]] = n40r_y[k[124]], window['F$0Z'](n40r_y));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[26313]] = require(k[26314]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';import 'SyMiniTool.js';console[k[77]](k[26315]), console[k[77]](k[26316]), F$0ZRG({ 'title': k[26317] });var fz9em = { 'F$1R0ZG': !![] };new window[k[26318]](fz9em), window[k[26318]][k[144]]['F$1RG0Z']();if (window['F$10GRZ']) clearInterval(window['F$10GRZ']);window['F$10GRZ'] = null, window['F$1RGZ0'] = function (cj640y, uhme9) {
  if (!cj640y || !uhme9) return 0x0;cj640y = cj640y[k[15]]('.'), uhme9 = uhme9[k[15]]('.');const vupqa = Math[k[813]](cj640y[k[13]], uhme9[k[13]]);while (cj640y[k[13]] < vupqa) {
    cj640y[k[29]]('0');
  }while (uhme9[k[13]] < vupqa) {
    uhme9[k[29]]('0');
  }for (var ue5ma = 0x0; ue5ma < vupqa; ue5ma++) {
    const u5pvaq = parseInt(cj640y[ue5ma]),
          s1d8t2 = parseInt(uhme9[ue5ma]);if (u5pvaq > s1d8t2) return 0x1;else {
      if (u5pvaq < s1d8t2) return -0x1;
    }
  }return 0x0;
}, window[k[26319]] = wx[k[26320]]()[k[26319]], console[k[457]](k[26321] + window[k[26319]]);var ffsw821 = wx[k[26322]]();ffsw821['onCheckForUpdate'](function (s82vdt) {
  console[k[457]](k[26323] + s82vdt[k[26324]]);
}), ffsw821[k[26325]](function () {
  wx[k[26326]]({ 'title': k[26327], 'content': k[26328], 'showCancel': ![], 'success': function (ze9x) {
      ffsw821[k[26329]]();
    } });
}), ffsw821['onUpdateFailed'](function () {
  console[k[457]](k[26330]);
}), window['F$1Z0RG'] = function () {
  console[k[457]](k[26331]);var j1fcw6 = wx[k[26332]]({ 'name': k[26333], 'success': function (_0ryn4) {
      console[k[457]](k[26334]), console[k[457]](_0ryn4), _0ryn4 && _0ryn4[k[23069]] == k[26335] ? (window['F$GR'] = !![], window['F$GZ0R'](), window['F$GZR0']()) : setTimeout(function () {
        window['F$1Z0RG']();
      }, 0x1f4);
    }, 'fail': function (fw6c1) {
      console[k[457]](k[26336]), console[k[457]](fw6c1), setTimeout(function () {
        window['F$1Z0RG']();
      }, 0x1f4);
    } });j1fcw6 && j1fcw6[k[26337]](q95p => {});
}, window['F$1ZR0G'] = function () {
  console[k[457]](k[26338]);var w12fc = wx[k[26332]]({ 'name': k[26339], 'success': function (pd2vt) {
      console[k[457]](k[26340]), console[k[457]](pd2vt), pd2vt && pd2vt[k[23069]] == k[26335] ? (window['F$ZRG'] = !![], window['F$GZ0R'](), window['F$GZR0']()) : setTimeout(function () {
        window['F$1ZR0G']();
      }, 0x1f4);
    }, 'fail': function (p5vqau) {
      console[k[457]](k[26341]), console[k[457]](p5vqau), setTimeout(function () {
        window['F$1ZR0G']();
      }, 0x1f4);
    } });w12fc && w12fc[k[26337]](j6wfy => {});
}, window[k[26342]] = function () {
  window['F$1RGZ0'](window[k[26319]], k[26343]) >= 0x0 ? (console[k[457]](k[26344] + window[k[26319]] + k[26345]), window['F$Z0'](), window['F$1Z0RG'](), window['F$1ZR0G']()) : (window['F$ZG0'](k[26346], window[k[26319]]), wx[k[26326]]({ 'title': k[5766], 'content': k[26347] }));
}, window[k[26310]] = '', wx[k[26348]]({ 'success'(meu95) {
    window[k[26310]] = k[26349] + meu95[k[26350]] + k[26351] + meu95[k[26352]] + k[26353] + meu95[k[4205]] + k[26354] + meu95[k[450]] + k[26355] + meu95[k[22880]] + k[26356] + meu95[k[26319]] + k[26357] + meu95[k[8334]], console[k[457]](window[k[26310]]), console[k[457]](k[26358] + meu95[k[26359]] + k[26360] + meu95[k[26361]] + k[26362] + meu95[k[26363]] + k[26364] + meu95[k[26365]] + k[26366] + meu95[k[26367]] + k[26368] + meu95[k[26369]] + k[26370] + (meu95[k[26371]] ? meu95[k[26371]][k[313]] + ',' + meu95[k[26371]][k[1123]] + ',' + meu95[k[26371]][k[1125]] + ',' + meu95[k[26371]][k[1124]] : ''));var b0_rn4 = meu95[k[450]] ? meu95[k[450]][k[10885]]() : '',
        j06y4n = meu95[k[26352]] ? meu95[k[26352]][k[10885]]()[k[4192]]('\x20', '') : '';window['F$ZG'][k[486]] = b0_rn4[k[114]](k[26372]) != -0x1, window['F$ZG'][k[10091]] = b0_rn4[k[114]](k[26187]) != -0x1, window['F$ZG'][k[26373]] = b0_rn4[k[114]](k[26372]) != -0x1 || b0_rn4[k[114]](k[26187]) != -0x1, window['F$ZG'][k[22606]] = b0_rn4[k[114]](k[26374]) != -0x1 || b0_rn4[k[114]](k[26375]) != -0x1, window['F$ZG'][k[26376]] = meu95[k[22880]] ? meu95[k[22880]][k[10885]]() : '', window['F$ZG']['F$10ZRG'] = ![], window['F$ZG']['F$10ZGR'] = 0x2;if (b0_rn4[k[114]](k[26187]) != -0x1) {
      if (meu95[k[8334]] >= 0x18) window['F$ZG']['F$10ZGR'] = 0x3;else window['F$ZG']['F$10ZGR'] = 0x2;
    } else {
      if (b0_rn4[k[114]](k[26372]) != -0x1) {
        if (meu95[k[8334]] && meu95[k[8334]] >= 0x14) window['F$ZG']['F$10ZGR'] = 0x3;else {
          if (j06y4n[k[114]](k[26377]) != -0x1 || j06y4n[k[114]](k[26378]) != -0x1 || j06y4n[k[114]](k[26379]) != -0x1 || j06y4n[k[114]](k[26380]) != -0x1 || j06y4n[k[114]](k[26381]) != -0x1) window['F$ZG']['F$10ZGR'] = 0x2;else window['F$ZG']['F$10ZGR'] = 0x3;
        }
      } else window['F$ZG']['F$10ZGR'] = 0x2;
    }console[k[457]](k[26382] + window['F$ZG']['F$10ZRG'] + k[26383] + window['F$ZG']['F$10ZGR']);
  } }), wx[k[26384]]({ 'success': function (psvdqt) {
    console[k[457]](k[26385] + psvdqt[k[4111]] + k[26386] + psvdqt[k[26387]]);
  } }), wx[k[26388]]({ 'success': function (c6jwyf) {
    console[k[457]](k[26389] + c6jwyf[k[26390]]);
  } }), wx[k[26391]]({ 'keepScreenOn': !![] }), wx[k[26392]](function (am9uhe) {
  console[k[457]](k[26389] + am9uhe[k[26390]] + k[26393] + am9uhe[k[26394]]);
}), wx[k[26395]](function (jwf1c6) {
  window['F$G0R'] = jwf1c6, window['F$GR0'] && window['F$G0R'] && (console[k[77]](k[26396] + window['F$G0R'][k[739]]), window['F$GR0'](window['F$G0R']), window['F$G0R'] = null);
}), window['F$1ZG0R'] = 0x0, window[k[26397]] = null, wx[k[26398]](function () {
  window['F$1ZG0R']++, wx[k[10462]]();if (window['F$1ZG0R'] >= 0x2) {
    window['F$1ZG0R'] = 0x0, console[k[124]](k[26399]), wx[k[26400]]('0', 0x1);if (window['F$ZG'] && window['F$ZG'][k[486]]) window['F$ZG0'](k[26401], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});