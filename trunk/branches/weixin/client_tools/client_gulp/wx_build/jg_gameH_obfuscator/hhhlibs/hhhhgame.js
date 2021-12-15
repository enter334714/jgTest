var O = wx.$C;
console[O[100078]](O[128537]), window[O[128538]], wx[O[128539]](function (cl$5pu) {
  if (cl$5pu) {
    if (cl$5pu[O[104486]]) {
      var cpul$5 = window[O[100550]][O[128540]][O[104664]](new RegExp(/\./, 'g'), '_'),
          tclm5o = cl$5pu[O[104486]],
          g47f3 = tclm5o[O[111832]](/(hhhhhhhh\/hhhhgame.js:)[0-9]{1,60}(:)/g);if (g47f3) for (var x01q3 = 0x0; x01q3 < g47f3[O[100013]]; x01q3++) {
        if (g47f3[x01q3] && g47f3[x01q3][O[100013]] > 0x0) {
          var vgf = parseInt(g47f3[x01q3][O[104664]](O[128541], '')[O[104664]](':', ''));tclm5o = tclm5o[O[104664]](g47f3[x01q3], g47f3[x01q3][O[104664]](':' + vgf + ':', ':' + (vgf - 0x2) + ':'));
        }
      }tclm5o = tclm5o[O[104664]](new RegExp(O[128542], 'g'), O[128543] + cpul$5 + O[124878]), tclm5o = tclm5o[O[104664]](new RegExp(O[128544], 'g'), O[128543] + cpul$5 + O[124878]), cl$5pu[O[104486]] = tclm5o;
    }var i6s2y = { 'id': window['$h6R'][O[128545]], 'role': window['$h6R'][O[104606]], 'level': window['$h6R'][O[128546]], 'user': window['$h6R'][O[124780]], 'version': window['$h6R'][O[100101]], 'gamever': window[O[100550]][O[128540]], 'cdn': window['$h6R'][O[104485]], 'serverid': window['$h6R'][O[124775]] ? window['$h6R'][O[124775]][O[111325]] : 0x0, 'systemInfo': window[O[128547]], 'error': O[128548], 'stack': cl$5pu ? cl$5pu[O[104486]] : '' },
        sn_ygv = JSON[O[104471]](i6s2y);console[O[100125]](O[128549] + sn_ygv), (!window[O[128538]] || window[O[128538]] != i6s2y[O[100125]]) && (window[O[128538]] = i6s2y[O[100125]], window['$hY6'](i6s2y));
  }
});import 'hhhmd5min.js';import 'hhhzlibs.js';window[O[128550]] = require(O[128551]);import 'hhhindex.js';import 'hhhlibsmin.js';import 'hhhwxmini.js';import 'hhhinitmin.js';console[O[100078]](O[128552]), console[O[100078]](O[128553]), $hY6UR({ 'title': O[128554] });var h_o5ktml = { '$hXYR6U': !![] };new window[O[128555]](h_o5ktml), window[O[128555]][O[100148]]['$hXU6RY']();if (window['$hXY6RU']) clearInterval(window['$hXY6RU']);window['$hXY6RU'] = null, window['$hXURY6'] = function ($uc8pl, j90hd) {
  if (!$uc8pl || !j90hd) return 0x0;$uc8pl = $uc8pl[O[100015]]('.'), j90hd = j90hd[O[100015]]('.');const dzr89j = Math[O[100846]]($uc8pl[O[100013]], j90hd[O[100013]]);while ($uc8pl[O[100013]] < dzr89j) {
    $uc8pl[O[100029]]('0');
  }while (j90hd[O[100013]] < dzr89j) {
    j90hd[O[100029]]('0');
  }for (var v4f1g = 0x0; v4f1g < dzr89j; v4f1g++) {
    const _n6ys = parseInt($uc8pl[v4f1g]),
          upcl5 = parseInt(j90hd[v4f1g]);if (_n6ys > upcl5) return 0x1;else {
      if (_n6ys < upcl5) return -0x1;
    }
  }return 0x0;
}, window[O[128556]] = wx[O[128557]]()[O[128556]], console[O[100475]](O[128558] + window[O[128556]]);var h_cul$5p = wx[O[128559]]();h_cul$5p[O[128560]](function (rjz89d) {
  console[O[100475]](O[128561] + rjz89d[O[128562]]);
}), h_cul$5p[O[128563]](function () {
  wx[O[128564]]({ 'title': O[128565], 'content': O[128566], 'showCancel': ![], 'success': function (g1f347) {
      h_cul$5p[O[128567]]();
    } });
}), h_cul$5p[O[128568]](function () {
  console[O[100475]](O[128569]);
}), window['$hXUR6Y'] = function () {
  console[O[100475]](O[128570]);var f7 = wx[O[128571]]({ 'name': O[128572], 'success': function (hj0wd) {
      console[O[100475]](O[128573]), console[O[100475]](hj0wd), hj0wd && hj0wd[O[124961]] == O[128574] ? (window['$hRU'] = !![], window['$hRU6Y'](), window['$hR6YU']()) : setTimeout(function () {
        window['$hXUR6Y']();
      }, 0x1f4);
    }, 'fail': function (nvysa_) {
      console[O[100475]](O[128575]), console[O[100475]](nvysa_), setTimeout(function () {
        window['$hXUR6Y']();
      }, 0x1f4);
    } });f7 && f7[O[128576]](klmt5o => {});
}, window['$hX6YRU'] = function () {
  console[O[100475]](O[128577]);var z$9r8 = wx[O[128571]]({ 'name': O[128578], 'success': function (v4_fg3) {
      console[O[100475]](O[128579]), console[O[100475]](v4_fg3), v4_fg3 && v4_fg3[O[124961]] == O[128574] ? (window['$h6UR'] = !![], window['$hRU6Y'](), window['$hR6YU']()) : setTimeout(function () {
        window['$hX6YRU']();
      }, 0x1f4);
    }, 'fail': function (j9dhz) {
      console[O[100475]](O[128580]), console[O[100475]](j9dhz), setTimeout(function () {
        window['$hX6YRU']();
      }, 0x1f4);
    } });z$9r8 && z$9r8[O[128576]](dh0xq => {});
}, window[O[128581]] = function () {
  window['$hXURY6'](window[O[128556]], O[128582]) >= 0x0 ? (console[O[100475]](O[128583] + window[O[128556]] + O[128584]), window['$h6Y'](), window['$hXUR6Y'](), window['$hX6YRU']()) : (window['$h6RY'](O[128585], window[O[128556]]), wx[O[128564]]({ 'title': O[106317], 'content': O[128586] }));
}, window[O[128547]] = '', wx[O[128587]]({ 'success'(ya2is) {
    window[O[128547]] = O[128588] + ya2is[O[128589]] + O[128590] + ya2is[O[128591]] + O[128592] + ya2is[O[104677]] + O[128593] + ya2is[O[100468]] + O[128594] + ya2is[O[124751]] + O[128595] + ya2is[O[128556]] + O[128596] + ya2is[O[109126]], console[O[100475]](window[O[128547]]), console[O[100475]](O[128597] + ya2is[O[128598]] + O[128599] + ya2is[O[128600]] + O[128601] + ya2is[O[128602]] + O[128603] + ya2is[O[128604]] + O[128605] + ya2is[O[128606]] + O[128607] + ya2is[O[128608]] + O[128609] + (ya2is[O[128610]] ? ya2is[O[128610]][O[100320]] + ',' + ya2is[O[128610]][O[101209]] + ',' + ya2is[O[128610]][O[101211]] + ',' + ya2is[O[128610]][O[101210]] : ''));var p8$lcu = ya2is[O[100468]] ? ya2is[O[100468]][O[112117]]() : '',
        ys62na = ya2is[O[128591]] ? ya2is[O[128591]][O[112117]]()[O[104664]]('\x20', '') : '';window['$h6R'][O[101069]] = p8$lcu[O[100115]](O[128611]) != -0x1, window['$h6R'][O[111147]] = p8$lcu[O[100115]](O[128008]) != -0x1, window['$h6R'][O[128612]] = p8$lcu[O[100115]](O[128611]) != -0x1 || p8$lcu[O[100115]](O[128008]) != -0x1, window['$h6R'][O[124468]] = p8$lcu[O[100115]](O[128613]) != -0x1 || p8$lcu[O[100115]](O[128614]) != -0x1, window['$h6R'][O[128615]] = ya2is[O[124751]] ? ya2is[O[124751]][O[112117]]() : '', window['$h6R']['$hXYUR6'] = ![], window['$h6R']['$hXY6UR'] = 0x2;if (p8$lcu[O[100115]](O[128008]) != -0x1) {
      if (ya2is[O[109126]] >= 0x18) window['$h6R']['$hXY6UR'] = 0x3;else window['$h6R']['$hXY6UR'] = 0x2;
    } else {
      if (p8$lcu[O[100115]](O[128611]) != -0x1) {
        if (ya2is[O[109126]] && ya2is[O[109126]] >= 0x14) window['$h6R']['$hXY6UR'] = 0x3;else {
          if (ys62na[O[100115]](O[128616]) != -0x1 || ys62na[O[100115]](O[128617]) != -0x1 || ys62na[O[100115]](O[128618]) != -0x1 || ys62na[O[100115]](O[128619]) != -0x1 || ys62na[O[100115]](O[128620]) != -0x1) window['$h6R']['$hXY6UR'] = 0x2;else window['$h6R']['$hXY6UR'] = 0x3;
        }
      } else window['$h6R']['$hXY6UR'] = 0x2;
    }console[O[100475]](O[128621] + window['$h6R']['$hXYUR6'] + O[128622] + window['$h6R']['$hXY6UR']);
  } }), wx[O[128623]]({ 'success': function ($cul8p) {
    console[O[100475]](O[128624] + $cul8p[O[104582]] + O[128625] + $cul8p[O[128626]]);
  } }), wx[O[128627]]({ 'success': function (l5uc$) {
    console[O[100475]](O[128628] + l5uc$[O[128629]]);
  } }), wx[O[128630]]({ 'keepScreenOn': !![] }), wx[O[128631]](function (dh9j0) {
  console[O[100475]](O[128628] + dh9j0[O[128629]] + O[128632] + dh9j0[O[128633]]);
}), wx[O[110659]](function (ia6yb) {
  window['$hUY'] = ia6yb, window['$hRYU'] && window['$hUY'] && (console[O[100078]](O[128634] + window['$hUY'][O[100769]]), window['$hRYU'](window['$hUY']), window['$hUY'] = null);
}), window['$hX6URY'] = 0x0, window[O[128635]] = null, wx[O[128636]](function () {
  window['$hX6URY']++, wx[O[111689]]();if (window['$hX6URY'] >= 0x2) {
    window['$hX6URY'] = 0x0, console[O[100125]](O[128637]), wx[O[128638]]('0', 0x1);if (window['$h6R'] && window['$h6R'][O[101069]]) window['$h6RY'](O[128639], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});