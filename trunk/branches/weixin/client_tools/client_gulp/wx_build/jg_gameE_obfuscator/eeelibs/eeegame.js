var b = wx.$e;
console[b[30075]](b[56412]), window['lastError'], wx['onError'](function (i5fk9) {
  if (i5fk9) {
    if (i5fk9[b[33840]]) {
      var v$gw12 = window[b[30497]][b[56413]][b[34004]](new RegExp(/\./, 'g'), '_'),
          _bst3 = i5fk9[b[33840]],
          hldnpq = _bst3[b[40560]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);if (hldnpq) for (var r20w$v = 0x0; r20w$v < hldnpq[b[30012]]; r20w$v++) {
        if (hldnpq[r20w$v] && hldnpq[r20w$v][b[30012]] > 0x0) {
          var jpki5f = parseInt(hldnpq[r20w$v][b[34004]](b[56414], '')[b[34004]](':', ''));_bst3 = _bst3[b[34004]](hldnpq[r20w$v], hldnpq[r20w$v][b[34004]](':' + jpki5f + ':', ':' + (jpki5f - 0x2) + ':'));
        }
      }_bst3 = _bst3[b[34004]](new RegExp(b[56415], 'g'), b[56416] + v$gw12 + b[52979]), _bst3 = _bst3[b[34004]](new RegExp(b[56417], 'g'), b[56416] + v$gw12 + b[52979]), i5fk9[b[33840]] = _bst3;
    }var s3eb = { 'id': window['E$RG'][b[56418]], 'role': window['E$RG'][b[33950]], 'level': window['E$RG'][b[56419]], 'user': window['E$RG'][b[52890]], 'version': window['E$RG'][b[30097]], 'gamever': window[b[30497]][b[56413]], 'cdn': window['E$RG'][b[33839]], 'serverid': window['E$RG'][b[52885]] ? window['E$RG'][b[52885]][b[40146]] : 0x0, 'systemInfo': window[b[56420]], 'error': 'MiniProgramError', 'stack': i5fk9 ? i5fk9[b[33840]] : '' },
        qnlhu = JSON[b[33825]](s3eb);console[b[30121]](b[56421] + qnlhu), (!window['lastError'] || window['lastError'] != s3eb[b[30121]]) && (window['lastError'] = s3eb[b[30121]], window['E$QR'](s3eb));
  }
});import 'eeemd5min.js';import 'eeezlibs.js';window[b[56422]] = require(b[56423]);import 'eeeindex.js';import 'eeelibsmin.js';import 'eeewxmini.js';import 'eeeinitmin.js';console[b[30075]](b[56424]), console[b[30075]](b[56425]), E$QRJG({ 'title': b[56426] });var esunqe8 = { 'E$YJQRG': !![] };new window[b[56427]](esunqe8), window[b[56427]][b[30144]]['E$YJGQR']();if (window['E$YQGJR']) clearInterval(window['E$YQGJR']);window['E$YQGJR'] = null, window['E$YJGRQ'] = function (v2$1wg, mx6z7) {
  if (!v2$1wg || !mx6z7) return 0x0;v2$1wg = v2$1wg[b[30014]]('.'), mx6z7 = mx6z7[b[30014]]('.');const a$0rov = Math[b[30773]](v2$1wg[b[30012]], mx6z7[b[30012]]);while (v2$1wg[b[30012]] < a$0rov) {
    v2$1wg[b[30028]]('0');
  }while (mx6z7[b[30012]] < a$0rov) {
    mx6z7[b[30028]]('0');
  }for (var s8unq = 0x0; s8unq < a$0rov; s8unq++) {
    const vw$20g = parseInt(v2$1wg[s8unq]),
          bs_3t = parseInt(mx6z7[s8unq]);if (vw$20g > bs_3t) return 0x1;else {
      if (vw$20g < bs_3t) return -0x1;
    }
  }return 0x0;
}, window[b[56428]] = wx[b[56429]]()[b[56428]], console[b[30422]](b[56430] + window[b[56428]]);var ehdpql = wx[b[56431]]();ehdpql[b[56432]](function (phlkfi) {
  console[b[30422]](b[56433] + phlkfi[b[56434]]);
}), ehdpql[b[56435]](function () {
  wx[b[56436]]({ 'title': b[56437], 'content': b[56438], 'showCancel': ![], 'success': function (qlhpid) {
      ehdpql[b[56439]]();
    } });
}), ehdpql[b[56440]](function () {
  console[b[30422]](b[56441]);
}), window['E$YRQJG'] = function () {
  console[b[30422]](b[56442]);var rvo$0a = wx[b[56443]]({ 'name': b[56444], 'success': function (mj59z) {
      console[b[30422]](b[56445]), console[b[30422]](mj59z), mj59z && mj59z[b[53048]] == b[56446] ? (window['E$GJ'] = !![], window['E$GRQJ'](), window['E$GRJQ']()) : setTimeout(function () {
        window['E$YRQJG']();
      }, 0x1f4);
    }, 'fail': function (mg7x6) {
      console[b[30422]](b[56447]), console[b[30422]](mg7x6), setTimeout(function () {
        window['E$YRQJG']();
      }, 0x1f4);
    } });rvo$0a && rvo$0a[b[56448]](qph => {});
}, window['E$YRJQG'] = function () {
  console[b[30422]](b[56449]);var m761g = wx[b[56443]]({ 'name': b[56450], 'success': function ($w12g) {
      console[b[30422]](b[56451]), console[b[30422]]($w12g), $w12g && $w12g[b[53048]] == b[56446] ? (window['E$RJG'] = !![], window['E$GRQJ'](), window['E$GRJQ']()) : setTimeout(function () {
        window['E$YRJQG']();
      }, 0x1f4);
    }, 'fail': function (x7m61z) {
      console[b[30422]](b[56452]), console[b[30422]](x7m61z), setTimeout(function () {
        window['E$YRJQG']();
      }, 0x1f4);
    } });m761g && m761g[b[56448]](hjip => {});
}, window[b[56453]] = function () {
  window['E$YJGRQ'](window[b[56428]], b[56454]) >= 0x0 ? (console[b[30422]](b[56455] + window[b[56428]] + b[56456]), window['E$RQ'](), window['E$YRQJG'](), window['E$YRJQG']()) : (window['E$RGQ'](b[56457], window[b[56428]]), wx[b[56436]]({ 'title': b[35601], 'content': b[56458] }));
}, window[b[56420]] = '', wx[b[56459]]({ 'success'(nlqu) {
    window[b[56420]] = b[56460] + nlqu[b[56461]] + b[56462] + nlqu[b[56463]] + b[56464] + nlqu[b[34017]] + b[56465] + nlqu[b[30415]] + b[56466] + nlqu[b[52863]] + b[56467] + nlqu[b[56428]] + b[56468] + nlqu[b[38191]], console[b[30422]](window[b[56420]]), console[b[30422]](b[56469] + nlqu[b[56470]] + b[56471] + nlqu[b[56472]] + b[56473] + nlqu[b[56474]] + b[56475] + nlqu[b[56476]] + b[56477] + nlqu[b[56478]] + b[56479] + nlqu[b[56480]] + b[56481] + (nlqu[b[56482]] ? nlqu[b[56482]][b[30301]] + ',' + nlqu[b[56482]][b[31039]] + ',' + nlqu[b[56482]][b[31041]] + ',' + nlqu[b[56482]][b[31040]] : ''));var dlfpih = nlqu[b[30415]] ? nlqu[b[30415]][b[40809]]() : '',
        k57jz9 = nlqu[b[56463]] ? nlqu[b[56463]][b[40809]]()[b[34004]]('\x20', '') : '';window['E$RG'][b[30452]] = dlfpih[b[30111]](b[56163]) != -0x1, window['E$RG'][b[40001]] = dlfpih[b[30111]](b[56162]) != -0x1, window['E$RG'][b[56483]] = dlfpih[b[30111]](b[56163]) != -0x1 || dlfpih[b[30111]](b[56162]) != -0x1, window['E$RG'][b[52608]] = dlfpih[b[30111]](b[56484]) != -0x1 || dlfpih[b[30111]](b[56168]) != -0x1, window['E$RG'][b[56485]] = nlqu[b[52863]] ? nlqu[b[52863]][b[40809]]() : '', window['E$RG']['E$YQRJG'] = ![], window['E$RG']['E$YQRGJ'] = 0x2;if (dlfpih[b[30111]](b[56162]) != -0x1) {
      if (nlqu[b[38191]] >= 0x18) window['E$RG']['E$YQRGJ'] = 0x3;else window['E$RG']['E$YQRGJ'] = 0x2;
    } else {
      if (dlfpih[b[30111]](b[56163]) != -0x1) {
        if (nlqu[b[38191]] && nlqu[b[38191]] >= 0x14) window['E$RG']['E$YQRGJ'] = 0x3;else {
          if (k57jz9[b[30111]](b[56486]) != -0x1 || k57jz9[b[30111]](b[56487]) != -0x1 || k57jz9[b[30111]](b[56488]) != -0x1 || k57jz9[b[30111]](b[56489]) != -0x1 || k57jz9[b[30111]](b[56490]) != -0x1) window['E$RG']['E$YQRGJ'] = 0x2;else window['E$RG']['E$YQRGJ'] = 0x3;
        }
      } else window['E$RG']['E$YQRGJ'] = 0x2;
    }console[b[30422]](b[56491] + window['E$RG']['E$YQRJG'] + b[56492] + window['E$RG']['E$YQRGJ']);
  } }), wx[b[56493]]({ 'success': function ($r0v2w) {
    console[b[30422]](b[56494] + $r0v2w[b[33929]] + b[56495] + $r0v2w[b[56496]]);
  } }), wx[b[56497]]({ 'success': function (pifkjh) {
    console[b[30422]](b[56498] + pifkjh[b[56499]]);
  } }), wx[b[56500]]({ 'keepScreenOn': !![] }), wx[b[56501]](function (v0ra$w) {
  console[b[30422]](b[56498] + v0ra$w[b[56499]] + b[56502] + v0ra$w[b[56503]]);
}), wx[b[56504]](function (gm1x26) {
  window['E$GQJ'] = gm1x26, window['E$GJQ'] && window['E$GQJ'] && (console[b[30075]](b[56505] + window['E$GQJ'][b[30696]]), window['E$GJQ'](window['E$GQJ']), window['E$GQJ'] = null);
}), window['E$YRGQJ'] = 0x0, window[b[56506]] = null, wx[b[56507]](function () {
  window['E$YRGQJ']++, wx[b[40372]]();if (window['E$YRGQJ'] >= 0x2) {
    window['E$YRGQJ'] = 0x0, console[b[30121]](b[56508]), wx[b[56509]]('0', 0x1);if (window['E$RG'] && window['E$RG'][b[30452]]) window['E$RGQ'](b[56510], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});