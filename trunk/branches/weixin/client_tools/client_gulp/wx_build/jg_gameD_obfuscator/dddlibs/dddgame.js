var v = wx.$d;
console[v[0x4e]](v[0x7278]), window[v[0x7279]], wx[v[0x727a]](function (ie6dh) {
  if (ie6dh) {
    if (ie6dh[v[0x11c5]]) {
      var y$v7wp = window[v[0x22d]][v[0x727b]][v[0x1278]](new RegExp(/\./, 'g'), '_'),
          h4j_ = ie6dh[v[0x11c5]],
          uife = h4j_[v[0x2f43]](/(ddddddddd\/dddgame.js:)[0-9]{1,60}(:)/g);if (uife) for (var q0gtkf = 0x0; q0gtkf < uife[v[0xd]]; q0gtkf++) {
        if (uife[q0gtkf] && uife[q0gtkf][v[0xd]] > 0x0) {
          var ylp7$ = parseInt(uife[q0gtkf][v[0x1278]](v[0x727c], '')[v[0x1278]](':', ''));h4j_ = h4j_[v[0x1278]](uife[q0gtkf], uife[q0gtkf][v[0x1278]](':' + ylp7$ + ':', ':' + (ylp7$ - 0x2) + ':'));
        }
      }h4j_ = h4j_[v[0x1278]](new RegExp(v[0x727d], 'g'), v[0x727e] + y$v7wp + v[0x6367]), h4j_ = h4j_[v[0x1278]](new RegExp(v[0x727f], 'g'), v[0x727e] + y$v7wp + v[0x6367]), ie6dh[v[0x11c5]] = h4j_;
    }var xabr1 = { 'id': window['D$LZ'][v[0x7280]], 'role': window['D$LZ'][v[0x123e]], 'level': window['D$LZ'][v[0x7281]], 'user': window['D$LZ'][v[0x6303]], 'version': window['D$LZ'][v[0x65]], 'cdn': window['D$LZ'][v[0x11c3]], 'pkgName': window['D$LZ'][v[0x6304]], 'gamever': window[v[0x22d]][v[0x727b]], 'serverid': window['D$LZ'][v[0x62fe]] ? window['D$LZ'][v[0x62fe]][v[0x2d21]] : 0x0, 'systemInfo': window[v[0x7282]], 'error': v[0x7283], 'stack': ie6dh ? ie6dh[v[0x11c5]] : '' },
        n4h9j_ = JSON[v[0x11b5]](xabr1);console[v[0x7d]](v[0x7284] + n4h9j_), (!window[v[0x7279]] || window[v[0x7279]] != xabr1[v[0x7d]]) && (window[v[0x7279]] = xabr1[v[0x7d]], window['D$SL'](xabr1));
  }
});import 'dddmd5min.js';import 'dddzlibs.js';window[v[0x7285]] = require(v[0x7286]);import 'dddindex.js';import 'dddlibsmin.js';import 'dddwxmini.js';import 'dddinitmin.js';console[v[0x4e]](v[0x7287]), console[v[0x4e]](v[0x7288]), D$SLAZ({ 'title': v[0x7289] });var zfdeuit = { 'D$YSZLA': !![] };new window[v[0x728a]](zfdeuit), window[v[0x728a]][v[0x94]]['D$YALZS']();if (window['D$YSLZA']) clearInterval(window['D$YSLZA']);window['D$YSLZA'] = null, window['D$YAZSL'] = function (h6j4nm, jhn_46) {
  if (!h6j4nm || !jhn_46) return 0x0;h6j4nm = h6j4nm[v[0xf]]('.'), jhn_46 = jhn_46[v[0xf]]('.');const c592o3 = Math[v[0x355]](h6j4nm[v[0xd]], jhn_46[v[0xd]]);while (h6j4nm[v[0xd]] < c592o3) {
    h6j4nm[v[0x1d]]('0');
  }while (jhn_46[v[0xd]] < c592o3) {
    jhn_46[v[0x1d]]('0');
  }for (var tkduif = 0x0; tkduif < c592o3; tkduif++) {
    const rp$w81 = parseInt(h6j4nm[tkduif]),
          mdt = parseInt(jhn_46[tkduif]);if (rp$w81 > mdt) return 0x1;else {
      if (rp$w81 < mdt) return -0x1;
    }
  }return 0x0;
}, window[v[0x728b]] = wx[v[0x728c]]()[v[0x728b]], console[v[0x1e2]](v[0x728d] + window[v[0x728b]]);var zmhed6i = wx[v[0x728e]]();zmhed6i[v[0x728f]](function (kfit) {
  console[v[0x1e2]](v[0x7290] + kfit[v[0x7291]]);
}), zmhed6i[v[0x7292]](function () {
  wx[v[0x7293]]({ 'title': v[0x7294], 'content': v[0x7295], 'showCancel': ![], 'success': function (jn4h6) {
      zmhed6i[v[0x7296]]();
    } });
}), zmhed6i[v[0x7297]](function () {
  console[v[0x1e2]](v[0x7298]);
}), window['D$YAZLS'] = function () {
  console[v[0x1e2]](v[0x7299]);var tki = wx[v[0x729a]]({ 'name': v[0x729b], 'success': function (a0qxb) {
      console[v[0x1e2]](v[0x729c]), console[v[0x1e2]](a0qxb), a0qxb && a0qxb[v[0x63bb]] == v[0x729d] ? (window['D$ZA'] = !![], window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
        window['D$YAZLS']();
      }, 0x1f4);
    }, 'fail': function (x18azb) {
      console[v[0x1e2]](v[0x729e]), console[v[0x1e2]](x18azb), setTimeout(function () {
        window['D$YAZLS']();
      }, 0x1f4);
    } });tki && tki[v[0x729f]](giuf => {});
}, window['D$YLSZA'] = function () {
  console[v[0x1e2]](v[0x72a0]);var _nh49j = wx[v[0x729a]]({ 'name': v[0x72a1], 'success': function (idhm6) {
      console[v[0x1e2]](v[0x72a2]), console[v[0x1e2]](idhm6), idhm6 && idhm6[v[0x63bb]] == v[0x729d] ? (window['D$LAZ'] = !![], window['D$ZALS'](), window['D$ZLSA']()) : setTimeout(function () {
        window['D$YLSZA']();
      }, 0x1f4);
    }, 'fail': function (r8xb) {
      console[v[0x1e2]](v[0x72a3]), console[v[0x1e2]](r8xb), setTimeout(function () {
        window['D$YLSZA']();
      }, 0x1f4);
    } });_nh49j && _nh49j[v[0x729f]](ih6dme => {});
}, window[v[0x72a4]] = function () {
  window['D$YAZSL'](window[v[0x728b]], v[0x72a5]) >= 0x0 ? (console[v[0x1e2]](v[0x72a6] + window[v[0x728b]] + v[0x72a7]), window['D$LS'](), window['D$YAZLS'](), window['D$YLSZA']()) : (window['D$LZS'](v[0x72a8], window[v[0x728b]]), wx[v[0x7293]]({ 'title': v[0x18fb], 'content': v[0x72a9] }));
}, window[v[0x7282]] = '', wx[v[0x72aa]]({ 'success'(qa0bgz) {
    window[v[0x7282]] = v[0x72ab] + qa0bgz[v[0x72ac]] + v[0x72ad] + qa0bgz[v[0x72ae]] + v[0x72af] + qa0bgz[v[0x1285]] + v[0x72b0] + qa0bgz[v[0x1db]] + v[0x72b1] + qa0bgz[v[0x62e7]] + v[0x72b2] + qa0bgz[v[0x728b]] + v[0x72b3] + qa0bgz[v[0x2486]], console[v[0x1e2]](window[v[0x7282]]), console[v[0x1e2]](v[0x72b4] + qa0bgz[v[0x72b5]] + v[0x72b6] + qa0bgz[v[0x72b7]] + v[0x72b8] + qa0bgz[v[0x72b9]] + v[0x72ba] + qa0bgz[v[0x72bb]] + v[0x72bc] + qa0bgz[v[0x72bd]] + v[0x72be] + qa0bgz[v[0x72bf]] + v[0x72c0] + (qa0bgz[v[0x72c1]] ? qa0bgz[v[0x72c1]][v[0x143]] + ',' + qa0bgz[v[0x72c1]][v[0x4c0]] + ',' + qa0bgz[v[0x72c1]][v[0x4c2]] + ',' + qa0bgz[v[0x72c1]][v[0x4c1]] : ''));var x8rb = qa0bgz[v[0x1db]] ? qa0bgz[v[0x1db]][v[0x306c]]() : '',
        _3oc95 = qa0bgz[v[0x72ae]] ? qa0bgz[v[0x72ae]][v[0x306c]]()[v[0x1278]]('\x20', '') : '';window['D$LZ'][v[0x432]] = x8rb[v[0x73]](v[0x6fce]) != -0x1, window['D$LZ'][v[0x2c6f]] = x8rb[v[0x73]](v[0x6fcd]) != -0x1, window['D$LZ'][v[0x72c2]] = x8rb[v[0x73]](v[0x6fce]) != -0x1 || x8rb[v[0x73]](v[0x6fcd]) != -0x1, window['D$LZ'][v[0x61df]] = x8rb[v[0x73]](v[0x72c3]) != -0x1 || x8rb[v[0x73]](v[0x6fd3]) != -0x1, window['D$LZ'][v[0x72c4]] = qa0bgz[v[0x62e7]] ? qa0bgz[v[0x62e7]][v[0x306c]]() : '', window['D$LZ']['D$YSAZL'] = ![], window['D$LZ']['D$YSLAZ'] = 0x2;if (x8rb[v[0x73]](v[0x6fcd]) != -0x1) {
      if (qa0bgz[v[0x2486]] >= 0x18) window['D$LZ']['D$YSLAZ'] = 0x3;else window['D$LZ']['D$YSLAZ'] = 0x2;
    } else {
      if (x8rb[v[0x73]](v[0x6fce]) != -0x1) {
        if (qa0bgz[v[0x2486]] && qa0bgz[v[0x2486]] >= 0x14) window['D$LZ']['D$YSLAZ'] = 0x3;else {
          if (_3oc95[v[0x73]](v[0x72c5]) != -0x1 || _3oc95[v[0x73]](v[0x72c6]) != -0x1 || _3oc95[v[0x73]](v[0x72c7]) != -0x1 || _3oc95[v[0x73]](v[0x72c8]) != -0x1 || _3oc95[v[0x73]](v[0x72c9]) != -0x1) window['D$LZ']['D$YSLAZ'] = 0x2;else window['D$LZ']['D$YSLAZ'] = 0x3;
        }
      } else window['D$LZ']['D$YSLAZ'] = 0x2;
    }console[v[0x1e2]](v[0x72ca] + window['D$LZ']['D$YSAZL'] + v[0x72cb] + window['D$LZ']['D$YSLAZ']);
  } }), wx[v[0x72cc]]({ 'success': function ($w8r1x) {
    console[v[0x1e2]](v[0x72cd] + $w8r1x[v[0x1226]] + v[0x72ce] + $w8r1x[v[0x72cf]]);
  } }), wx[v[0x72d0]]({ 'success': function (qk0zfg) {
    console[v[0x1e2]](v[0x72d1] + qk0zfg[v[0x72d2]]);
  } }), wx[v[0x72d3]]({ 'keepScreenOn': !![] }), wx[v[0x72d4]](function (emjhn) {
  console[v[0x1e2]](v[0x72d1] + emjhn[v[0x72d2]] + v[0x72d5] + emjhn[v[0x72d6]]);
}), wx[v[0x2a85]](function (ra8bx) {
  window['D$AS'] = ra8bx, window['D$ZSA'] && window['D$AS'] && (console[v[0x4e]](v[0x72d7] + window['D$AS'][v[0x308]]), window['D$ZSA'](window['D$AS']), window['D$AS'] = null);
}), window[v[0x72d8]] = 0x0, window['D$YLAZS'] = 0x0, window[v[0x72d9]] = null, wx[v[0x72da]](function () {
  window['D$YLAZS']++;var itugf = Date[v[0x53]]();(window[v[0x72d8]] == 0x0 || itugf - window[v[0x72d8]] > 0x1d4c0) && (console[v[0x60]](v[0x72db]), wx[v[0x2eb0]]());if (window['D$YLAZS'] >= 0x2) {
    window['D$YLAZS'] = 0x0, console[v[0x7d]](v[0x72dc]), wx[v[0x72dd]]('0', 0x1);if (window['D$LZ'] && window['D$LZ'][v[0x432]]) window['D$LZS'](v[0x72de], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});