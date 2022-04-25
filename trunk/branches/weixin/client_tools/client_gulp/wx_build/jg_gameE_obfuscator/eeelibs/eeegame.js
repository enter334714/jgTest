var b = wx.$e;
console[b[40082]](b[70528]), window[b[70529]], wx[b[70530]](function (gl$htx) {
  if (gl$htx) {
    if (gl$htx[b[44863]]) {
      var thg$lx = window[b[40588]][b[70531]][b[45043]](new RegExp(/\./, 'g'), '_'),
          qiujn3 = gl$htx[b[44863]],
          zvyh = qiujn3[b[52570]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);if (zvyh) for (var rz4yvf = 0x0; rz4yvf < zvyh[b[40016]]; rz4yvf++) {
        if (zvyh[rz4yvf] && zvyh[rz4yvf][b[40016]] > 0x0) {
          var hgtlrx = parseInt(zvyh[rz4yvf][b[45043]](b[70532], '')[b[45043]](':', ''));qiujn3 = qiujn3[b[45043]](zvyh[rz4yvf], zvyh[rz4yvf][b[45043]](':' + hgtlrx + ':', ':' + (hgtlrx - 0x2) + ':'));
        }
      }qiujn3 = qiujn3[b[45043]](new RegExp(b[70533], 'g'), b[70534] + thg$lx + b[66273]), qiujn3 = qiujn3[b[45043]](new RegExp(b[70535], 'g'), b[70534] + thg$lx + b[66273]), gl$htx[b[44863]] = qiujn3;
    }var ghrtxl = { 'id': window[b[70536]][b[70537]], 'role': window[b[70536]][b[44984]], 'level': window[b[70536]][b[70538]], 'user': window[b[70536]][b[66172]], 'version': window[b[70536]][b[40109]], 'cdn': window[b[70536]][b[44861]], 'pkgName': window[b[70536]][b[66173]], 'gamever': window[b[40588]][b[70531]], 'serverid': window[b[70536]][b[66167]] ? window[b[70536]][b[66167]][b[51940]] : 0x0, 'systemInfo': window[b[70539]], 'error': b[70540], 'stack': gl$htx ? gl$htx[b[44863]] : '' },
        w5b = JSON[b[44847]](ghrtxl);console[b[40143]](b[70541] + w5b), (!window[b[70529]] || window[b[70529]] != ghrtxl[b[40143]]) && (window[b[70529]] = ghrtxl[b[40143]], window[b[70542]](ghrtxl));
  }
});import 'eeemd5min.js';import 'eeezlibs.js';window[b[70543]] = require(b[70544]);import 'eeeindex.js';import 'eeelibsmin.js';import 'eeewxmini.js';import 'eeeinitmin.js';console[b[40082]](b[70545]), console[b[40082]](b[70546]), e11UG0({ 'title': b[70547] });var egrtlz = { 'e1I10UG': !![] };new window[b[70548]](egrtlz), window[b[70548]][b[40166]][b[70549]]();if (window[b[70550]]) clearInterval(window[b[70550]]);window[b[70550]] = null, window[b[70551]] = function (_z4v, $gtj) {
  if (!_z4v || !$gtj) return 0x0;_z4v = _z4v[b[40018]]('.'), $gtj = $gtj[b[40018]]('.');const ceom = Math[b[40907]](_z4v[b[40016]], $gtj[b[40016]]);while (_z4v[b[40016]] < ceom) {
    _z4v[b[40033]]('0');
  }while ($gtj[b[40016]] < ceom) {
    $gtj[b[40033]]('0');
  }for (var jqs = 0x0; jqs < ceom; jqs++) {
    const sujq = parseInt(_z4v[jqs]),
          _yvz4 = parseInt($gtj[jqs]);if (sujq > _yvz4) return 0x1;else {
      if (sujq < _yvz4) return -0x1;
    }
  }return 0x0;
}, window[b[70552]] = wx[b[70553]]()[b[70552]], console[b[40511]](b[70554] + window[b[70552]]);var erztglh = wx[b[70555]]();erztglh[b[70556]](function (rghtzl) {
  console[b[40511]](b[70557] + rghtzl[b[70558]]);
}), erztglh[b[70559]](function () {
  wx[b[70560]]({ 'title': b[70561], 'content': b[70562], 'showCancel': ![], 'success': function (yzrflh) {
      erztglh[b[70563]]();
    } });
}), erztglh[b[70564]](function () {
  console[b[40511]](b[70565]);
}), window[b[70566]] = function () {
  console[b[40511]](b[70567]);var rylfhz = wx[b[70568]]({ 'name': b[70569], 'success': function (hfr) {
      console[b[40511]](b[70570]), console[b[40511]](hfr), hfr && hfr[b[66370]] == b[70571] ? (window[b[70572]] = !![], window[b[70573]](), window[b[70574]]()) : setTimeout(function () {
        window[b[70566]]();
      }, 0x1f4);
    }, 'fail': function (yt) {
      console[b[40511]](b[70575]), console[b[40511]](yt), setTimeout(function () {
        window[b[70566]]();
      }, 0x1f4);
    } });rylfhz && rylfhz[b[69841]](v_f7 => {});
}, window[b[70576]] = function () {
  console[b[40511]](b[70577]);var ryflz = wx[b[70568]]({ 'name': b[70578], 'success': function ($gilt) {
      console[b[40511]](b[70579]), console[b[40511]]($gilt), $gilt && $gilt[b[66370]] == b[70571] ? (window[b[70580]] = !![], window[b[70573]](), window[b[70574]]()) : setTimeout(function () {
        window[b[70576]]();
      }, 0x1f4);
    }, 'fail': function (g3$xj) {
      console[b[40511]](b[70581]), console[b[40511]](g3$xj), setTimeout(function () {
        window[b[70576]]();
      }, 0x1f4);
    } });ryflz && ryflz[b[69841]](aempo => {});
}, window[b[70582]] = function () {
  window[b[70551]](window[b[70552]], b[70583]) >= 0x0 ? (console[b[40511]](b[70584] + window[b[70552]] + b[70585]), window[b[70586]](), window[b[70566]](), window[b[70576]]()) : (window[b[70587]](b[70588], window[b[70552]]), wx[b[70560]]({ 'title': b[46726], 'content': b[70589] }));
}, window[b[70539]] = '', wx[b[70590]]({ 'success'(v4f7_a) {
    window[b[70539]] = b[70591] + v4f7_a[b[70592]] + b[70593] + v4f7_a[b[70594]] + b[70595] + v4f7_a[b[45056]] + b[70596] + v4f7_a[b[40504]] + b[70597] + v4f7_a[b[66137]] + b[70598] + v4f7_a[b[70552]] + b[70599] + v4f7_a[b[49701]], console[b[40511]](window[b[70539]]), console[b[40511]](b[70600] + v4f7_a[b[70601]] + b[70602] + v4f7_a[b[70603]] + b[70604] + v4f7_a[b[70605]] + b[70606] + v4f7_a[b[70607]] + b[70608] + v4f7_a[b[70609]] + b[70610] + v4f7_a[b[70611]] + b[70612] + (v4f7_a[b[70613]] ? v4f7_a[b[70613]][b[40342]] + ',' + v4f7_a[b[70613]][b[41345]] + ',' + v4f7_a[b[70613]][b[41347]] + ',' + v4f7_a[b[70613]][b[41346]] : ''));var k06b9 = v4f7_a[b[40504]] ? v4f7_a[b[40504]][b[52876]]() : '',
        tj$xig = v4f7_a[b[70594]] ? v4f7_a[b[70594]][b[52876]]()[b[45043]]('\x20', '') : '';window[b[70536]][b[41132]] = k06b9[b[40124]](b[70614]) != -0x1, window[b[70536]][b[51762]] = k06b9[b[40124]](b[70089]) != -0x1, window[b[70536]][b[70615]] = k06b9[b[40124]](b[70614]) != -0x1 || k06b9[b[40124]](b[70089]) != -0x1, window[b[70536]][b[65867]] = k06b9[b[40124]](b[70616]) != -0x1 || k06b9[b[40124]](b[70617]) != -0x1, window[b[70536]][b[70618]] = v4f7_a[b[66137]] ? v4f7_a[b[66137]][b[52876]]() : '', window[b[70536]][b[70619]] = ![], window[b[70536]][b[70620]] = 0x2;if (k06b9[b[40124]](b[70089]) != -0x1) {
      if (v4f7_a[b[49701]] >= 0x18) window[b[70536]][b[70620]] = 0x3;else window[b[70536]][b[70620]] = 0x2;
    } else {
      if (k06b9[b[40124]](b[70614]) != -0x1) {
        if (v4f7_a[b[49701]] && v4f7_a[b[49701]] >= 0x14) window[b[70536]][b[70620]] = 0x3;else {
          if (tj$xig[b[40124]](b[70621]) != -0x1 || tj$xig[b[40124]](b[70622]) != -0x1 || tj$xig[b[40124]](b[70623]) != -0x1 || tj$xig[b[40124]](b[70624]) != -0x1 || tj$xig[b[40124]](b[70625]) != -0x1) window[b[70536]][b[70620]] = 0x2;else window[b[70536]][b[70620]] = 0x3;
        }
      } else window[b[70536]][b[70620]] = 0x2;
    }console[b[40511]](b[70626] + window[b[70536]][b[70619]] + b[70627] + window[b[70536]][b[70620]]);
  } }), wx[b[70628]]({ 'success': function (frlhyz) {
    console[b[40511]](b[70629] + frlhyz[b[44960]] + b[70630] + frlhyz[b[70631]]);
  } }), wx[b[52342]]({ 'success': function (tlhgx) {
    console[b[40511]](b[70632] + tlhgx[b[53658]]);
  } }), wx[b[70633]]({ 'keepScreenOn': !![] }), wx[b[52344]](function (y74f_) {
  console[b[40511]](b[70632] + y74f_[b[53658]] + b[70634] + y74f_[b[70635]]);
}), wx[b[51268]](function (b6s90) {
  window[b[70636]] = b6s90, window[b[70637]] && window[b[70636]] && (console[b[40082]](b[70638] + window[b[70636]][b[40830]]), window[b[70637]](window[b[70636]]), window[b[70636]] = null);
}), window[b[70639]] = 0x0, window[b[70640]] = 0x0, window[b[70641]] = null, wx[b[70642]](function () {
  window[b[70640]]++;var ns9kq = Date[b[40087]]();(window[b[70639]] == 0x0 || ns9kq - window[b[70639]] > 0x1d4c0) && (console[b[40102]](b[70643]), wx[b[52414]]());if (window[b[70640]] >= 0x2) {
    window[b[70640]] = 0x0, console[b[40143]](b[70644]), wx[b[70645]]('0', 0x1);if (window[b[70536]] && window[b[70536]][b[41132]]) window[b[70587]](b[70646], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});