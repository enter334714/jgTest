var m = wx.$g;
console[m[72]](m[26572]), window[m[26573]], wx[m[26574]](function (aw1xhk) {
  if (aw1xhk) {
    if (aw1xhk[m[4057]]) {
      var $6ruj2 = window[m[530]][m[26575]][m[4231]](new RegExp(/\./, 'g'), '_'),
          djr6 = aw1xhk[m[4057]],
          l8qgs = djr6[m[10805]](/(gggggggg\/gggggame.js:)[0-9]{1,60}(:)/g);if (l8qgs) for (var ruj$62 = 0x0; ruj$62 < l8qgs[m[13]]; ruj$62++) {
        if (l8qgs[ruj$62] && l8qgs[ruj$62][m[13]] > 0x0) {
          var z26r$ = parseInt(l8qgs[ruj$62][m[4231]](m[26576], '')[m[4231]](':', ''));djr6 = djr6[m[4231]](l8qgs[ruj$62], l8qgs[ruj$62][m[4231]](':' + z26r$ + ':', ':' + (z26r$ - 0x2) + ':'));
        }
      }djr6 = djr6[m[4231]](new RegExp(m[26577], 'g'), m[26578] + $6ruj2 + m[23315]), djr6 = djr6[m[4231]](new RegExp(m[26579], 'g'), m[26578] + $6ruj2 + m[23315]), aw1xhk[m[4057]] = djr6;
    }var wy1kxh = { 'id': window['G$3J'][m[26580]], 'role': window['G$3J'][m[4175]], 'level': window['G$3J'][m[26581]], 'user': window['G$3J'][m[23222]], 'version': window['G$3J'][m[95]], 'gamever': window[m[530]][m[26575]], 'cdn': window['G$3J'][m[4056]], 'serverid': window['G$3J'][m[23217]] ? window['G$3J'][m[23217]][m[10398]] : 0x0, 'systemInfo': window[m[26582]], 'error': m[26583], 'stack': aw1xhk ? aw1xhk[m[4057]] : '' },
        kvwy1e = JSON[m[4042]](wy1kxh);console[m[119]](m[26584] + kvwy1e), (!window[m[26573]] || window[m[26573]] != wy1kxh[m[119]]) && (window[m[26573]] = wy1kxh[m[119]], window['G$23'](wy1kxh));
  }
});import 'gggmd5min.js';import 'gggzlibs.js';window[m[26585]] = require(m[26586]);import 'gggindex.js';import 'ggglibsmin.js';import 'gggwxmini.js';import 'ggginitmin.js';import 'XingJuBox.js';console[m[72]](m[26587]), console[m[72]](m[26588]), G$230J({ 'title': m[26589] });var gqg7evc = { 'G$V023J': !![] };new window[m[26590]](gqg7evc), window[m[26590]][m[141]]['G$V0J23']();if (window['G$V2J03']) clearInterval(window['G$V2J03']);window['G$V2J03'] = null, window['G$V0J32'] = function (vqewy, evkw1y) {
  if (!vqewy || !evkw1y) return 0x0;vqewy = vqewy[m[15]]('.'), evkw1y = evkw1y[m[15]]('.');const dt3o4f = Math[m[802]](vqewy[m[13]], evkw1y[m[13]]);while (vqewy[m[13]] < dt3o4f) {
    vqewy[m[29]]('0');
  }while (evkw1y[m[13]] < dt3o4f) {
    evkw1y[m[29]]('0');
  }for (var bp05i_ = 0x0; bp05i_ < dt3o4f; bp05i_++) {
    const j2dzr = parseInt(vqewy[bp05i_]),
          ord62 = parseInt(evkw1y[bp05i_]);if (j2dzr > ord62) return 0x1;else {
      if (j2dzr < ord62) return -0x1;
    }
  }return 0x0;
}, window[m[26591]] = wx[m[26592]]()[m[26591]], console[m[456]](m[26593] + window[m[26591]]);var gkwev7 = wx[m[26594]]();gkwev7[m[26595]](function (s8l) {
  console[m[456]](m[26596] + s8l[m[26597]]);
}), gkwev7[m[26598]](function () {
  wx[m[26599]]({ 'title': m[26600], 'content': m[26601], 'showCancel': ![], 'success': function (haxb5i) {
      gkwev7[m[26602]]();
    } });
}), gkwev7[m[26603]](function () {
  console[m[456]](m[26604]);
}), window['G$V320J'] = function () {
  console[m[456]](m[26605]);var f5_p = wx[m[26606]]({ 'name': m[26607], 'success': function (rd2z6) {
      console[m[456]](m[26608]), console[m[456]](rd2z6), rd2z6 && rd2z6[m[23392]] == m[26609] ? (window['G$J0'] = !![], window['G$J320'](), window['G$J302']()) : setTimeout(function () {
        window['G$V320J']();
      }, 0x1f4);
    }, 'fail': function (vwe7qy) {
      console[m[456]](m[26610]), console[m[456]](vwe7qy), setTimeout(function () {
        window['G$V320J']();
      }, 0x1f4);
    } });f5_p && f5_p[m[26611]](kv7ye => {});
}, window['G$V302J'] = function () {
  console[m[456]](m[26612]);var z2do63 = wx[m[26606]]({ 'name': m[26613], 'success': function (_4f3ot) {
      console[m[456]](m[26614]), console[m[456]](_4f3ot), _4f3ot && _4f3ot[m[23392]] == m[26609] ? (window['G$30J'] = !![], window['G$J320'](), window['G$J302']()) : setTimeout(function () {
        window['G$V302J']();
      }, 0x1f4);
    }, 'fail': function (v1wye) {
      console[m[456]](m[26615]), console[m[456]](v1wye), setTimeout(function () {
        window['G$V302J']();
      }, 0x1f4);
    } });z2do63 && z2do63[m[26611]](ewykh => {});
}, window[m[26616]] = function () {
  window['G$V0J32'](window[m[26591]], m[26617]) >= 0x0 ? (console[m[456]](m[26618] + window[m[26591]] + m[26619]), window['G$32'](), window['G$V320J'](), window['G$V302J']()) : (window['G$3J2'](m[26620], window[m[26591]]), wx[m[26599]]({ 'title': m[5901], 'content': m[26621] }));
}, window[m[26582]] = '', wx[m[26622]]({ 'success'(pi0_5b) {
    window[m[26582]] = m[26623] + pi0_5b[m[26624]] + m[26625] + pi0_5b[m[26626]] + m[26627] + pi0_5b[m[4244]] + m[26628] + pi0_5b[m[449]] + m[26629] + pi0_5b[m[23193]] + m[26630] + pi0_5b[m[26591]] + m[26631] + pi0_5b[m[8488]], console[m[456]](window[m[26582]]), console[m[456]](m[26632] + pi0_5b[m[26633]] + m[26634] + pi0_5b[m[26635]] + m[26636] + pi0_5b[m[26637]] + m[26638] + pi0_5b[m[26639]] + m[26640] + pi0_5b[m[26641]] + m[26642] + pi0_5b[m[26643]] + m[26644] + (pi0_5b[m[26645]] ? pi0_5b[m[26645]][m[311]] + ',' + pi0_5b[m[26645]][m[1113]] + ',' + pi0_5b[m[26645]][m[1115]] + ',' + pi0_5b[m[26645]][m[1114]] : ''));var s7cvqg = pi0_5b[m[449]] ? pi0_5b[m[449]][m[11046]]() : '',
        rj6$u2 = pi0_5b[m[26626]] ? pi0_5b[m[26626]][m[11046]]()[m[4231]]('\x20', '') : '';window['G$3J'][m[486]] = s7cvqg[m[109]](m[26646]) != -0x1, window['G$3J'][m[10235]] = s7cvqg[m[109]](m[26647]) != -0x1, window['G$3J'][m[26648]] = s7cvqg[m[109]](m[26646]) != -0x1 || s7cvqg[m[109]](m[26647]) != -0x1, window['G$3J'][m[22927]] = s7cvqg[m[109]](m[26649]) != -0x1 || s7cvqg[m[109]](m[26650]) != -0x1, window['G$3J'][m[26651]] = pi0_5b[m[23193]] ? pi0_5b[m[23193]][m[11046]]() : '', window['G$3J']['G$V230J'] = ![], window['G$3J']['G$V23J0'] = 0x2;if (s7cvqg[m[109]](m[26647]) != -0x1) {
      if (pi0_5b[m[8488]] >= 0x18) window['G$3J']['G$V23J0'] = 0x3;else window['G$3J']['G$V23J0'] = 0x2;
    } else {
      if (s7cvqg[m[109]](m[26646]) != -0x1) {
        if (pi0_5b[m[8488]] && pi0_5b[m[8488]] >= 0x14) window['G$3J']['G$V23J0'] = 0x3;else {
          if (rj6$u2[m[109]](m[26652]) != -0x1 || rj6$u2[m[109]](m[26653]) != -0x1 || rj6$u2[m[109]](m[26654]) != -0x1 || rj6$u2[m[109]](m[26655]) != -0x1 || rj6$u2[m[109]](m[26656]) != -0x1) window['G$3J']['G$V23J0'] = 0x2;else window['G$3J']['G$V23J0'] = 0x3;
        }
      } else window['G$3J']['G$V23J0'] = 0x2;
    }console[m[456]](m[26657] + window['G$3J']['G$V230J'] + m[26658] + window['G$3J']['G$V23J0']);
  } }), wx[m[26659]]({ 'success': function (p50b_) {
    console[m[456]](m[26660] + p50b_[m[4151]] + m[26661] + p50b_[m[26662]]);
  } }), wx[m[26663]]({ 'success': function (j$6z2r) {
    console[m[456]](m[26664] + j$6z2r[m[26665]]);
  } }), wx[m[26666]]({ 'keepScreenOn': !![] }), wx[m[26667]](function (zo2d4) {
  console[m[456]](m[26664] + zo2d4[m[26665]] + m[26668] + zo2d4[m[26669]]);
}), wx[m[26670]](function (r6zj$2) {
  window['G$J20'] = r6zj$2, window['G$J02'] && window['G$J20'] && (console[m[72]](m[26671] + window['G$J20'][m[731]]), window['G$J02'](window['G$J20']), window['G$J20'] = null);
}), window['G$V3J20'] = 0x0, window[m[26672]] = null, wx[m[26673]](function () {
  window['G$V3J20']++, wx['triggerGC']();if (window['G$V3J20'] >= 0x2) {
    window['G$V3J20'] = 0x0, console[m[119]](m[26674]), wx[m[26675]]('0', 0x1);if (window['G$3J'] && window['G$3J'][m[486]]) window['G$3J2'](m[26676], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});