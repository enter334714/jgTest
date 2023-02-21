var g = wx.u$;
console[g[1]](g[2]), window[g[3]], wx[g[4]](function (igypx4) {
    if (igypx4) {
        if (igypx4[g[5]]) {
            var cpozml = window[g[6]][g[7]][g[8]](new RegExp(/\./, 'g'), '_'),
                $97bv2 = igypx4[g[5]],
                sh0ea8 = $97bv2[g[9]](/(ttttttt\/tGAMEtt.js:)[0-9]{1,60}(:)/g);
            if (sh0ea8) for (var icpxg4 = 0x0; icpxg4 < sh0ea8[g[10]]; icpxg4++) {
                if (sh0ea8[icpxg4] && sh0ea8[icpxg4][g[10]] > 0x0) {
                    var l9$bz7 = parseInt(sh0ea8[icpxg4][g[8]](g[11], '')[g[8]](':', ''));
                    $97bv2 = $97bv2[g[8]](sh0ea8[icpxg4], sh0ea8[icpxg4][g[8]](':' + l9$bz7 + ':', ':' + (l9$bz7 - 0x2) + ':'));
                }
            }
            $97bv2 = $97bv2[g[8]](new RegExp(g[12], 'g'), g[13] + cpozml + g[14]), $97bv2 = $97bv2[g[8]](new RegExp(g[15], 'g'), g[13] + cpozml + g[14]), igypx4[g[5]] = $97bv2;
        }
        var qu925v = {
            'id': window[g[16]][g[17]],
            'role': window[g[16]][g[18]],
            'level': window[g[16]][g[19]],
            'user': window[g[16]][g[20]],
            'version': window[g[16]][g[21]],
            'cdn': window[g[16]][g[22]],
            'pkgName': window[g[16]][g[23]],
            'gamever': window[g[6]][g[7]],
            'serverid': window[g[16]][g[24]] ? window[g[16]][g[24]][g[25]] : 0x0,
            'systemInfo': window[g[26]],
            'error': g[27],
            'stack': igypx4 ? igypx4[g[5]] : ''
        },
            vub2$ = JSON[g[28]](qu925v);
        console[g[29]](g[30] + vub2$), (!window[g[3]] || window[g[3]] != qu925v[g[29]]) && (window[g[3]] = qu925v[g[29]], window[g[31]](qu925v));
    }
});
import 'ttfttt.js';
import 'tt112tt.js';
window[g[32]] = require(g[33]);
import 'tINDtt.js';
import 'ttLIB23tt.js';
import 'tWXMtadtt.js';
import 'ttINItt.js';
console[g[1]](g[34]), console[g[1]](g[35]), p14SH({ 'title': g[36] });
var _db25u = { 'pT1H4S': !![] };
new window[g[37]](_db25u), window[g[37]][g[38]][g[39]]();
if (window[g[40]]) clearInterval(window[g[40]]);
window[g[40]] = null, window[g[41]] = function (_ygn, x4py) {
    if (!_ygn || !x4py) return 0x0;
    _ygn = _ygn[g[42]]('.'), x4py = x4py[g[42]]('.');
    const d6q = Math[g[43]](_ygn[g[10]], x4py[g[10]]);
    while (_ygn[g[10]] < d6q) {
        _ygn[g[44]]('0');
    }
    while (x4py[g[10]] < d6q) {
        x4py[g[44]]('0');
    }
    for (var ml7$oz = 0x0; ml7$oz < d6q; ml7$oz++) {
        const v5q29 = parseInt(_ygn[ml7$oz]),
              c4mpo = parseInt(x4py[ml7$oz]);
        if (v5q29 > c4mpo) return 0x1;else {
            if (v5q29 < c4mpo) return -0x1;
        }
    }
    return 0x0;
}, window[g[45]] = wx[g[46]]()[g[45]], console[g[47]](g[48] + window[g[45]]);
var _dxpomc = wx[g[49]]();
_dxpomc[g[50]](function (v592bu) {
    console[g[47]](g[51] + v592bu[g[52]]);
}), _dxpomc[g[53]](function () {
    wx[g[54]]({
        'title': g[55],
        'content': g[56],
        'showCancel': ![],
        'success': function (lo7$zm) {
            _dxpomc[g[57]]();
        }
    });
}), _dxpomc[g[58]](function () {
    console[g[47]](g[59]);
}), window[g[60]] = function () {
    console[g[47]](g[61]);
    var rd36 = wx[g[62]]({
        'name': g[63],
        'success': function (loz$m) {
            console[g[47]](g[64]), console[g[47]](loz$m), loz$m && loz$m[g[65]] == g[66] ? (window[g[67]] = !![], window[g[68]](), window[g[69]]()) : setTimeout(function () {
                window[g[60]]();
            }, 0x1f4);
        },
        'fail': function (ocmp4x) {
            console[g[47]](g[70]), console[g[47]](ocmp4x), setTimeout(function () {
                window[g[60]]();
            }, 0x1f4);
        }
    });
    rd36 && rd36[g[71]](k8nwe => {});
}, window[g[72]] = function () {
    console[g[47]](g[73]);
    var zom7cl = wx[g[62]]({
        'name': g[74],
        'success': function (v9u2$) {
            console[g[47]](g[75]), console[g[47]](v9u2$), v9u2$ && v9u2$[g[65]] == g[66] ? (window[g[76]] = !![], window[g[68]](), window[g[69]]()) : setTimeout(function () {
                window[g[72]]();
            }, 0x1f4);
        },
        'fail': function (pocl) {
            console[g[47]](g[77]), console[g[47]](pocl), setTimeout(function () {
                window[g[72]]();
            }, 0x1f4);
        }
    });
    zom7cl && zom7cl[g[71]](nigy4j => {});
}, window[g[78]] = function () {
    window[g[41]](window[g[45]], g[79]) >= 0x0 ? (console[g[47]](g[80] + window[g[45]] + g[81]), window[g[82]](), window[g[60]](), window[g[72]]()) : (window[g[83]](g[84], window[g[45]]), wx[g[54]]({
        'title': g[85],
        'content': g[86]
    }));
}, window[g[26]] = '', wx[g[87]]({
    'success'(ipy) {
        window[g[26]] = g[88] + ipy[g[89]] + g[90] + ipy[g[91]] + g[92] + ipy[g[93]] + g[94] + ipy[g[95]] + g[96] + ipy[g[97]] + g[98] + ipy[g[45]] + g[99] + ipy[g[100]], console[g[47]](window[g[26]]), console[g[47]](g[101] + ipy[g[102]] + g[103] + ipy[g[104]] + g[105] + ipy[g[106]] + g[107] + ipy[g[108]] + g[109] + ipy[g[110]] + g[111] + ipy[g[112]] + g[113] + (ipy[g[114]] ? ipy[g[114]][g[115]] + ',' + ipy[g[114]][g[116]] + ',' + ipy[g[114]][g[117]] + ',' + ipy[g[114]][g[118]] : ''));
        var _wh8se = ipy[g[95]] ? ipy[g[95]][g[119]]() : '',
            ufqv5 = ipy[g[91]] ? ipy[g[91]][g[119]]()[g[8]]('\x20', '') : '';
        window[g[16]][g[120]] = _wh8se[g[121]](g[122]) != -0x1, window[g[16]][g[123]] = _wh8se[g[121]](g[124]) != -0x1, window[g[16]][g[125]] = _wh8se[g[121]](g[122]) != -0x1 || _wh8se[g[121]](g[124]) != -0x1, window[g[16]][g[126]] = _wh8se[g[121]](g[127]) != -0x1 || _wh8se[g[121]](g[128]) != -0x1, window[g[16]][g[129]] = ipy[g[97]] ? ipy[g[97]][g[119]]() : '', window[g[16]][g[130]] = ![], window[g[16]][g[131]] = 0x2;
        if (_wh8se[g[121]](g[124]) != -0x1) {
            if (ipy[g[100]] >= 0x18) window[g[16]][g[131]] = 0x3;else window[g[16]][g[131]] = 0x2;
        } else {
            if (_wh8se[g[121]](g[122]) != -0x1) {
                if (ipy[g[100]] && ipy[g[100]] >= 0x14) window[g[16]][g[131]] = 0x3;else {
                    if (ufqv5[g[121]](g[132]) != -0x1 || ufqv5[g[121]](g[133]) != -0x1 || ufqv5[g[121]](g[134]) != -0x1 || ufqv5[g[121]](g[135]) != -0x1 || ufqv5[g[121]](g[136]) != -0x1) window[g[16]][g[131]] = 0x2;else window[g[16]][g[131]] = 0x3;
                }
            } else window[g[16]][g[131]] = 0x2;
        }
        console[g[47]](g[137] + window[g[16]][g[130]] + g[138] + window[g[16]][g[131]]);
    }
}), wx[g[139]]({
    'success': function (dv5) {
        console[g[47]](g[140] + dv5[g[141]] + g[142] + dv5[g[143]]);
    }
}), wx[g[144]]({
    'success': function (zoc7m) {
        console[g[47]](g[145] + zoc7m[g[146]]);
    }
}), wx[g[147]]({ 'keepScreenOn': !![] }), wx[g[148]](function (n4yijg) {
    console[g[47]](g[145] + n4yijg[g[146]] + g[149] + n4yijg[g[150]]);
}), wx[g[151]](function (hs8w_e) {
    window[g[152]] = hs8w_e, window[g[153]] && window[g[152]] && (console[g[1]](g[154] + window[g[152]][g[155]]), window[g[153]](window[g[152]]), window[g[152]] = null);
}), window[g[156]] = 0x0, window[g[157]] = 0x0, window[g[158]] = null, wx[g[159]](function () {
    window[g[157]]++;
    var frt1 = Date[g[160]]();
    (window[g[156]] == 0x0 || frt1 - window[g[156]] > 0x1d4c0) && (console[g[161]](g[162]), wx[g[163]]());
    if (window[g[157]] >= 0x2) {
        window[g[157]] = 0x0, console[g[29]](g[164]), wx[g[165]]('0', 0x1);
        if (window[g[16]] && window[g[16]][g[120]]) window[g[83]](g[166], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});