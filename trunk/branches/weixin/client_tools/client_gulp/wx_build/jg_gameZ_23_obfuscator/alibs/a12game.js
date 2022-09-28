var c = wx.$a;
console[c[540]](c[541]), window[c[542]], wx[c[543]](function (cy4o_) {
  if (cy4o_) {
    if (cy4o_[c[331]]) {
      var d5qr8 = window[c[544]][c[545]][c[459]](new RegExp(/\./, 'g'), '_'),
          bm9 = cy4o_[c[331]],
          lmbac$ = bm9[c[338]](/(a2a3a1\/a12game.js:)[0-9]{1,60}(:)/g);if (lmbac$) for (var guwf1 = 0x0; guwf1 < lmbac$[c[315]]; guwf1++) {
        if (lmbac$[guwf1] && lmbac$[guwf1][c[315]] > 0x0) {
          var l0b$cy = parseInt(lmbac$[guwf1][c[459]](c[546], '')[c[459]](':', ''));bm9 = bm9[c[459]](lmbac$[guwf1], lmbac$[guwf1][c[459]](':' + l0b$cy + ':', ':' + (l0b$cy - 0x2) + ':'));
        }
      }bm9 = bm9[c[459]](new RegExp(c[547], 'g'), c[548] + d5qr8 + c[549]), bm9 = bm9[c[459]](new RegExp(c[550], 'g'), c[548] + d5qr8 + c[549]), cy4o_[c[331]] = bm9;
    }var _y40e = { 'id': window[c[551]][c[552]], 'role': window[c[551]][c[553]], 'level': window[c[551]][c[554]], 'user': window[c[551]][c[555]], 'version': window[c[551]][c[556]], 'cdn': window[c[551]][c[557]], 'pkgName': window[c[551]][c[558]], 'gamever': window[c[544]][c[545]], 'serverid': window[c[551]][c[559]] ? window[c[551]][c[559]][c[560]] : 0x0, 'systemInfo': window[c[561]], 'error': c[562], 'stack': cy4o_ ? cy4o_[c[331]] : '' },
        gew2 = JSON[c[563]](_y40e);console[c[492]](c[564] + gew2), (!window[c[542]] || window[c[542]] != _y40e[c[492]]) && (window[c[542]] = _y40e[c[492]], window[c[565]](_y40e));
  }
});import 'a1md5min.js';import 'ea1zlibs.js';window[c[566]] = require(c[567]);import 'a1index.js';import 'a1ibsmin.js';import 'a1wxmini.js';import 'a1initmin.js';console[c[540]](c[568]), console[c[540]](c[569]), jM1BE({ 'title': c[570] });var gk6z8 = { 'j6ME1B': !![] };new window[c[571]](gk6z8), window[c[571]][c[572]][c[573]]();if (window[c[574]]) clearInterval(window[c[574]]);window[c[574]] = null, window[c[575]] = function (td6, q85tr7) {
  if (!td6 || !q85tr7) return 0x0;td6 = td6[c[437]]('.'), q85tr7 = q85tr7[c[437]]('.');const x21fug = Math[c[484]](td6[c[315]], q85tr7[c[315]]);while (td6[c[315]] < x21fug) {
    td6[c[337]]('0');
  }while (q85tr7[c[315]] < x21fug) {
    q85tr7[c[337]]('0');
  }for (var $lcbma = 0x0; $lcbma < x21fug; $lcbma++) {
    const f2w1u = parseInt(td6[$lcbma]),
          xfu2 = parseInt(q85tr7[$lcbma]);if (f2w1u > xfu2) return 0x1;else {
      if (f2w1u < xfu2) return -0x1;
    }
  }return 0x0;
}, window[c[576]] = wx[c[577]]()[c[576]], console[c[449]](c[578] + window[c[576]]);var gri53 = wx[c[579]]();gri53[c[580]](function (fw21g) {
  console[c[449]](c[581] + fw21g[c[582]]);
}), gri53[c[583]](function () {
  wx[c[584]]({ 'title': c[585], 'content': c[586], 'showCancel': ![], 'success': function (khvnz) {
      gri53[c[587]]();
    } });
}), gri53[c[588]](function () {
  console[c[449]](c[589]);
}), window[c[590]] = function () {
  console[c[449]](c[591]);var n1sjfx = wx[c[592]]({ 'name': c[593], 'success': function (b$clma) {
      console[c[449]](c[594]), console[c[449]](b$clma), b$clma && b$clma[c[595]] == c[596] ? (window[c[597]] = !![], window[c[598]](), window[c[599]]()) : setTimeout(function () {
        window[c[590]]();
      }, 0x1f4);
    }, 'fail': function (k6dhzv) {
      console[c[449]](c[600]), console[c[449]](k6dhzv), setTimeout(function () {
        window[c[590]]();
      }, 0x1f4);
    } });n1sjfx && n1sjfx[c[601]](ue_ow4 => {});
}, window[c[602]] = function () {
  console[c[449]](c[603]);var g12sxf = wx[c[592]]({ 'name': c[604], 'success': function (sfnvjx) {
      console[c[449]](c[605]), console[c[449]](sfnvjx), sfnvjx && sfnvjx[c[595]] == c[596] ? (window[c[606]] = !![], window[c[598]](), window[c[599]]()) : setTimeout(function () {
        window[c[602]]();
      }, 0x1f4);
    }, 'fail': function (oc4_) {
      console[c[449]](c[607]), console[c[449]](oc4_), setTimeout(function () {
        window[c[602]]();
      }, 0x1f4);
    } });g12sxf && g12sxf[c[601]](hkn6v => {});
}, window[c[608]] = function () {
  window[c[575]](window[c[576]], c[609]) >= 0x0 ? (console[c[449]](c[610] + window[c[576]] + c[611]), window[c[612]](), window[c[590]](), window[c[602]]()) : (window[c[613]](c[614], window[c[576]]), wx[c[584]]({ 'title': c[615], 'content': c[616] }));
}, window[c[561]] = '', wx[c[617]]({ 'success'(p3t57r) {
    window[c[561]] = c[618] + p3t57r[c[619]] + c[620] + p3t57r[c[621]] + c[622] + p3t57r[c[623]] + c[624] + p3t57r[c[625]] + c[626] + p3t57r[c[627]] + c[628] + p3t57r[c[576]] + c[629] + p3t57r[c[630]], console[c[449]](window[c[561]]), console[c[449]](c[631] + p3t57r[c[632]] + c[633] + p3t57r[c[634]] + c[635] + p3t57r[c[636]] + c[637] + p3t57r[c[638]] + c[639] + p3t57r[c[640]] + c[641] + p3t57r[c[642]] + c[643] + (p3t57r[c[644]] ? p3t57r[c[644]][c[645]] + ',' + p3t57r[c[644]][c[646]] + ',' + p3t57r[c[644]][c[647]] + ',' + p3t57r[c[644]][c[648]] : ''));var n1xj = p3t57r[c[625]] ? p3t57r[c[625]][c[364]]() : '',
        nsjvh = p3t57r[c[621]] ? p3t57r[c[621]][c[364]]()[c[459]]('\x20', '') : '';window[c[551]][c[649]] = n1xj[c[397]](c[650]) != -0x1, window[c[551]][c[651]] = n1xj[c[397]](c[652]) != -0x1, window[c[551]][c[653]] = n1xj[c[397]](c[650]) != -0x1 || n1xj[c[397]](c[652]) != -0x1, window[c[551]][c[654]] = n1xj[c[397]](c[655]) != -0x1 || n1xj[c[397]](c[656]) != -0x1, window[c[551]][c[657]] = p3t57r[c[627]] ? p3t57r[c[627]][c[364]]() : '', window[c[551]][c[658]] = ![], window[c[551]][c[659]] = 0x2;if (n1xj[c[397]](c[652]) != -0x1) {
      if (p3t57r[c[630]] >= 0x18) window[c[551]][c[659]] = 0x3;else window[c[551]][c[659]] = 0x2;
    } else {
      if (n1xj[c[397]](c[650]) != -0x1) {
        if (p3t57r[c[630]] && p3t57r[c[630]] >= 0x14) window[c[551]][c[659]] = 0x3;else {
          if (nsjvh[c[397]](c[660]) != -0x1 || nsjvh[c[397]](c[661]) != -0x1 || nsjvh[c[397]](c[662]) != -0x1 || nsjvh[c[397]](c[663]) != -0x1 || nsjvh[c[397]](c[664]) != -0x1) window[c[551]][c[659]] = 0x2;else window[c[551]][c[659]] = 0x3;
        }
      } else window[c[551]][c[659]] = 0x2;
    }console[c[449]](c[665] + window[c[551]][c[658]] + c[666] + window[c[551]][c[659]]);
  } }), wx[c[667]]({ 'success': function (almb9$) {
    console[c[449]](c[668] + almb9$[c[669]] + c[670] + almb9$[c[671]]);
  } }), wx[c[672]]({ 'success': function (svhnxj) {
    console[c[449]](c[673] + svhnxj[c[674]]);
  } }), wx[c[675]]({ 'keepScreenOn': !![] }), wx[c[676]](function (wf1u2g) {
  console[c[449]](c[673] + wf1u2g[c[674]] + c[677] + wf1u2g[c[678]]);
}), wx[c[679]](function (rt8573) {
  window[c[680]] = rt8573, window[c[681]] && window[c[680]] && (console[c[540]](c[682] + window[c[680]][c[683]]), window[c[681]](window[c[680]]), window[c[680]] = null);
}), window[c[684]] = 0x0, window[c[685]] = 0x0, window[c[686]] = null, wx[c[687]](function () {
  window[c[685]]++;var nsfx1j = Date[c[688]]();(window[c[684]] == 0x0 || nsfx1j - window[c[684]] > 0x1d4c0) && (console[c[506]](c[689]), wx[c[690]]());if (window[c[685]] >= 0x2) {
    window[c[685]] = 0x0, console[c[492]](c[691]), wx[c[692]]('0', 0x1);if (window[c[551]] && window[c[551]][c[649]]) window[c[613]](c[693], '');if (onMemoryWarningCallBack) onMemoryWarningCallBack();
  }
});