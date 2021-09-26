var k = wx.$f;
console[k[77]](k[26163]), window[k[26164]], wx[k[26165]](function (s$z_2) {
  if (s$z_2) {
    if (s$z_2[k[4009]]) {
      var jk0wb = window[k[530]][k[26166]][k[4173]](new RegExp(/\./, 'g'), '_'),
          ig3hm = s$z_2[k[4009]],
          _scm = ig3hm[k[10519]](/(ffffffff\/fffgame.js:)[0-9]{1,60}(:)/g);if (_scm) for (var pg9c3 = 0x0; pg9c3 < _scm[k[13]]; pg9c3++) {
        var evry81;_scm[pg9c3] && 0x0 < _scm[pg9c3][k[13]] && (evry81 = parseInt(_scm[pg9c3][k[4173]](k[26167], '')[k[4173]](':', '')), ig3hm = ig3hm[k[4173]](_scm[pg9c3], _scm[pg9c3][k[4173]](':' + evry81 + ':', ':' + (evry81 - 0x2) + ':')));
      }ig3hm = (ig3hm = ig3hm[k[4173]](new RegExp(k[26168], 'g'), k[26169] + jk0wb + k[22764]))[k[4173]](new RegExp(k[26170], 'g'), k[26169] + jk0wb + k[22764]), s$z_2[k[4009]] = ig3hm;
    }jk0wb = { 'id': window['F$5G'][k[26171]], 'role': window['F$5G'][k[4116]], 'level': window['F$5G'][k[26172]], 'user': window['F$5G'][k[22668]], 'version': window['F$5G'][k[100]], 'gamever': window[k[530]][k[26166]], 'cdn': window['F$5G'][k[4008]], 'serverid': window['F$5G'][k[22663]] ? window['F$5G'][k[22663]][k[10169]] : 0x0, 'systemInfo': window[k[26173]], 'error': k[26174], 'stack': s$z_2 ? s$z_2[k[4009]] : '' }, s$z_2 = JSON[k[3996]](jk0wb), (console[k[124]](k[26175] + s$z_2), window[k[26164]] && window[k[26164]] == jk0wb[k[124]] || (window[k[26164]] = jk0wb[k[124]], window['F$E5'](jk0wb)));
  }
});import 'fffmd5min.js';import 'fffzlibs.js';window[k[26176]] = require(k[26177]);import 'fffindex.js';import 'ffflibsmin.js';import 'fffwxmini.js';import 'fffinitmin.js';console[k[77]](k[26178]), console[k[77]](k[26179]), F$E5ZG({ 'title': k[26180] });var ftkwaj = { 'F$BZE5G': !0x0 };new window[k[26181]](ftkwaj), window[k[26181]][k[144]]['F$BZGE5'](), window['F$BEGZ5'] && clearInterval(window['F$BEGZ5']), window['F$BEGZ5'] = null, window['F$BZG5E'] = function (qj2awk, v81rey) {
  if (!qj2awk || !v81rey) return 0x0;qj2awk = qj2awk[k[15]]('.'), v81rey = v81rey[k[15]]('.');var jb0k7 = Math[k[810]](qj2awk[k[13]], v81rey[k[13]]);for (; qj2awk[k[13]] < jb0k7;) qj2awk[k[29]]('0');for (; v81rey[k[13]] < jb0k7;) v81rey[k[29]]('0');for (var sz2q$x = 0x0; sz2q$x < jb0k7; sz2q$x++) {
    var d4ounf = parseInt(qj2awk[sz2q$x]),
        s_2$xz = parseInt(v81rey[sz2q$x]);if (s_2$xz < d4ounf) return 0x1;if (d4ounf < s_2$xz) return -0x1;
  }return 0x0;
}, window[k[26182]] = wx[k[26183]]()[k[26182]], console[k[457]](k[26184] + window[k[26182]]);var fmc3g = wx[k[26185]]();fmc3g['onCheckForUpdate'](function (fuob75) {
  console[k[457]](k[26186] + fuob75[k[26187]]);
}), fmc3g[k[26188]](function () {
  wx[k[26189]]({ 'title': k[26190], 'content': k[26191], 'showCancel': !0x1, 'success': function (awkt0j) {
      fmc3g[k[26192]]();
    } });
}), fmc3g['onUpdateFailed'](function () {
  console[k[457]](k[26193]);
}), window['F$B5EZG'] = function () {
  console[k[457]](k[26194]);var o5d4fu = wx[k[26195]]({ 'name': k[26196], 'success': function (x2zqas) {
      console[k[457]](k[26197]), console[k[457]](x2zqas), x2zqas && k[26198] == x2zqas[k[22828]] ? (window['F$GZ'] = !0x0, window['F$G5EZ'](), window['F$G5ZE']()) : setTimeout(function () {
        window['F$B5EZG']();
      }, 0x1f4);
    }, 'fail': function (aqs2z) {
      console[k[457]](k[26199]), console[k[457]](aqs2z), setTimeout(function () {
        window['F$B5EZG']();
      }, 0x1f4);
    } });o5d4fu && o5d4fu[k[26200]](outb => {});
}, window['F$B5ZEG'] = function () {
  console[k[457]](k[26201]);var f4onud = wx[k[26195]]({ 'name': k[26202], 'success': function (un4of) {
      console[k[457]](k[26203]), console[k[457]](un4of), un4of && k[26198] == un4of[k[22828]] ? (window['F$5ZG'] = !0x0, window['F$G5EZ'](), window['F$G5ZE']()) : setTimeout(function () {
        window['F$B5ZEG']();
      }, 0x1f4);
    }, 'fail': function (ajwt0) {
      console[k[457]](k[26204]), console[k[457]](ajwt0), setTimeout(function () {
        window['F$B5ZEG']();
      }, 0x1f4);
    } });f4onud && f4onud[k[26200]](igpm9 => {});
}, window[k[26205]] = function () {
  0x0 <= window['F$BZG5E'](window[k[26182]], k[26206]) ? (console[k[457]](k[26207] + window[k[26182]] + k[26208]), window['F$5E'](), window['F$B5EZG'](), window['F$B5ZEG']()) : (window['F$5GE'](k[26209] + window[k[26182]]), wx[k[26189]]({ 'title': k[5709], 'content': k[26210] }));
}, window[k[26173]] = '', wx[k[26211]]({ 'success'(z$spc_) {
    window[k[26173]] = k[26212] + z$spc_[k[26213]] + k[26214] + z$spc_[k[26215]] + k[26216] + z$spc_[k[4186]] + k[26217] + z$spc_[k[450]] + k[26218] + z$spc_[k[22639]] + k[26219] + z$spc_[k[26182]] + k[26220] + z$spc_[k[8274]], console[k[457]](window[k[26173]]), console[k[457]](k[26221] + z$spc_[k[26222]] + k[26223] + z$spc_[k[26224]] + k[26225] + z$spc_[k[26226]] + k[26227] + z$spc_[k[26228]] + k[26229] + z$spc_[k[26230]] + k[26231] + z$spc_[k[26232]] + k[26233] + (z$spc_[k[26234]] ? z$spc_[k[26234]][k[313]] + ',' + z$spc_[k[26234]][k[1121]] + ',' + z$spc_[k[26234]][k[1124]] + ',' + z$spc_[k[26234]][k[1123]] : ''));var yer8 = z$spc_[k[450]] ? z$spc_[k[450]][k[10753]]() : '',
        eyr18 = z$spc_[k[26215]] ? z$spc_[k[26215]][k[10753]]()[k[4173]]('\x20', '') : '';window['F$5G'][k[486]] = -0x1 != yer8[k[114]](k[26235]), window['F$5G'][k[10008]] = -0x1 != yer8[k[114]](k[26074]), window['F$5G'][k[26236]] = -0x1 != yer8[k[114]](k[26235]) || -0x1 != yer8[k[114]](k[26074]), window['F$5G'][k[22300]] = -0x1 != yer8[k[114]](k[26237]) || -0x1 != yer8[k[114]](k[26238]), window['F$5G'][k[26239]] = z$spc_[k[22639]] ? z$spc_[k[22639]][k[10753]]() : '', window['F$5G']['F$BE5ZG'] = !0x1, -(window['F$5G']['F$BE5GZ'] = 0x1) != yer8[k[114]](k[26074]) ? 0x18 <= z$spc_[k[8274]] ? window['F$5G']['F$BE5GZ'] = 0x2 : window['F$5G']['F$BE5GZ'] = 0x1 : -0x1 == yer8[k[114]](k[26235]) || !(z$spc_[k[8274]] && 0x14 <= z$spc_[k[8274]] || -0x1 == eyr18[k[114]](k[26240]) && -0x1 == eyr18[k[114]](k[26241]) && -0x1 == eyr18[k[114]](k[26242]) && -0x1 == eyr18[k[114]](k[26243]) && -0x1 == eyr18[k[114]](k[26244])) ? window['F$5G']['F$BE5GZ'] = 0x1 : window['F$5G']['F$BE5GZ'] = 0x2, console[k[457]](k[26245] + window['F$5G']['F$BE5ZG'] + k[26246] + window['F$5G']['F$BE5GZ']);
  } }), wx[k[26247]]({ 'success': function (czp$s_) {
    console[k[457]](k[26248] + czp$s_[k[4092]] + k[26249] + czp$s_[k[26250]]);
  } }), wx[k[26251]]({ 'success': function (_$cp3m) {
    console[k[457]](k[26252] + _$cp3m[k[26253]]);
  } }), wx[k[26254]]({ 'keepScreenOn': !0x0 }), wx[k[26255]](function ($z_sp) {
  console[k[457]](k[26252] + $z_sp[k[26253]] + k[26256] + $z_sp[k[26257]]);
}), wx[k[26258]](function (g9m3h) {
  window['F$GEZ'] = g9m3h, window['F$GZE'] && window['F$GEZ'] && (console[k[77]](k[26259] + window['F$GEZ'][k[736]]), window['F$GZE'](window['F$GEZ']), window['F$GEZ'] = null);
}), window['F$B5GEZ'] = 0x0, window[k[26260]] = null, wx[k[26261]](function () {
  window['F$B5GEZ']++, wx[k[10333]](), 0x2 <= window['F$B5GEZ'] && (window['F$B5GEZ'] = 0x0, console[k[124]](k[26262]), wx[k[26263]]('0', 0x1), window['F$5G'] && window['F$5G'][k[486]] && window['F$5GE'](k[26264]), onMemoryWarningCallBack && onMemoryWarningCallBack());
});