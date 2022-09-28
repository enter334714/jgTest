var g = wx.u$;
console[g[1]](g[2]), window[g[3]], wx[g[4]](function (kigjy) {
    if (kigjy) {
        if (kigjy[g[5]]) {
            var rtf63 = window[g[6]][g[7]][g[8]](new RegExp(/\./, 'g'), '_'),
                q295 = kigjy[g[5]],
                $7loz = q295[g[9]](/(ttttttt\/tGAMEtt.js:)[0-9]{1,60}(:)/g);
            if ($7loz) for (var t3r61f = 0x0; t3r61f < $7loz[g[10]]; t3r61f++) {
                if ($7loz[t3r61f] && $7loz[t3r61f][g[10]] > 0x0) {
                    var xgjiy = parseInt($7loz[t3r61f][g[8]](g[11], '')[g[8]](':', ''));
                    q295 = q295[g[8]]($7loz[t3r61f], $7loz[t3r61f][g[8]](':' + xgjiy + ':', ':' + (xgjiy - 0x2) + ':'));
                }
            }
            q295 = q295[g[8]](new RegExp(g[12], 'g'), g[13] + rtf63 + g[14]), q295 = q295[g[8]](new RegExp(g[15], 'g'), g[13] + rtf63 + g[14]), kigjy[g[5]] = q295;
        }
        var lo$zb7 = {
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
            'stack': kigjy ? kigjy[g[5]] : ''
        },
            h_ew8k = JSON[g[28]](lo$zb7);
        console[g[29]](g[30] + h_ew8k), (!window[g[3]] || window[g[3]] != lo$zb7[g[29]]) && (window[g[3]] = lo$zb7[g[29]], window[g[31]](lo$zb7));
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
var _dkw_he = { 'pT1H4S': !![] };
new window[g[37]](_dkw_he), window[g[37]][g[38]][g[39]]();
if (window[g[40]]) clearInterval(window[g[40]]);
window[g[40]] = null, window[g[41]] = function (jk_ywn, qv5df) {
    if (!jk_ywn || !qv5df) return 0x0;
    jk_ywn = jk_ywn[g[42]]('.'), qv5df = qv5df[g[42]]('.');
    const uf5vq = Math[g[43]](jk_ywn[g[10]], qv5df[g[10]]);
    while (jk_ywn[g[10]] < uf5vq) {
        jk_ywn[g[44]]('0');
    }
    while (qv5df[g[10]] < uf5vq) {
        qv5df[g[44]]('0');
    }
    for (var v25 = 0x0; v25 < uf5vq; v25++) {
        const omz7l = parseInt(jk_ywn[v25]),
              pmzox = parseInt(qv5df[v25]);
        if (omz7l > pmzox) return 0x1;else {
            if (omz7l < pmzox) return -0x1;
        }
    }
    return 0x0;
}, window[g[45]] = wx[g[46]]()[g[45]], console[g[47]](g[48] + window[g[45]]);
var _dyjn4 = wx[g[49]]();
_dyjn4[g[50]](function ($olzb) {
    console[g[47]](g[51] + $olzb[g[52]]);
}), _dyjn4[g[53]](function () {
    wx[g[54]]({
        'title': g[55],
        'content': g[56],
        'showCancel': ![],
        'success': function ($72v9) {
            _dyjn4[g[57]]();
        }
    });
}), _dyjn4[g[58]](function () {
    console[g[47]](g[59]);
}), window[g[60]] = function () {
    console[g[47]](g[61]);
    var dv5u2q = wx[g[62]]({
        'name': g[63],
        'success': function (f361) {
            console[g[47]](g[64]), console[g[47]](f361), f361 && f361[g[65]] == g[66] ? (window[g[67]] = !![], window[g[68]](), window[g[69]]()) : setTimeout(function () {
                window[g[60]]();
            }, 0x1f4);
        },
        'fail': function (n4ygji) {
            console[g[47]](g[70]), console[g[47]](n4ygji), setTimeout(function () {
                window[g[60]]();
            }, 0x1f4);
        }
    });
    dv5u2q && dv5u2q[g[71]]($uvb9 => {});
}, window[g[72]] = function () {
    console[g[47]](g[73]);
    var zlob7$ = wx[g[62]]({
        'name': g[74],
        'success': function (jnigy) {
            console[g[47]](g[75]), console[g[47]](jnigy), jnigy && jnigy[g[65]] == g[66] ? (window[g[76]] = !![], window[g[68]](), window[g[69]]()) : setTimeout(function () {
                window[g[72]]();
            }, 0x1f4);
        },
        'fail': function (fr65qd) {
            console[g[47]](g[77]), console[g[47]](fr65qd), setTimeout(function () {
                window[g[72]]();
            }, 0x1f4);
        }
    });
    zlob7$ && zlob7$[g[71]](pig4 => {});
}, window[g[78]] = function () {
    window[g[41]](window[g[45]], g[79]) >= 0x0 ? (console[g[47]](g[80] + window[g[45]] + g[81]), window[g[82]](), window[g[60]](), window[g[72]]()) : (window[g[83]](g[84], window[g[45]]), wx[g[54]]({
        'title': g[85],
        'content': g[86]
    }));
}, window[g[26]] = '', wx[g[87]]({
    'success'(_ehw8) {
        window[g[26]] = g[88] + _ehw8[g[89]] + g[90] + _ehw8[g[91]] + g[92] + _ehw8[g[93]] + g[94] + _ehw8[g[95]] + g[96] + _ehw8[g[97]] + g[98] + _ehw8[g[45]] + g[99] + _ehw8[g[100]], console[g[47]](window[g[26]]), console[g[47]](g[101] + _ehw8[g[102]] + g[103] + _ehw8[g[104]] + g[105] + _ehw8[g[106]] + g[107] + _ehw8[g[108]] + g[109] + _ehw8[g[110]] + g[111] + _ehw8[g[112]] + g[113] + (_ehw8[g[114]] ? _ehw8[g[114]][g[115]] + ',' + _ehw8[g[114]][g[116]] + ',' + _ehw8[g[114]][g[117]] + ',' + _ehw8[g[114]][g[118]] : ''));
        var $lzo = _ehw8[g[95]] ? _ehw8[g[95]][g[119]]() : '',
            zbl9 = _ehw8[g[91]] ? _ehw8[g[91]][g[119]]()[g[8]]('\x20', '') : '';
        window[g[16]][g[120]] = $lzo[g[121]](g[122]) != -0x1, window[g[16]][g[123]] = $lzo[g[121]](g[124]) != -0x1, window[g[16]][g[125]] = $lzo[g[121]](g[122]) != -0x1 || $lzo[g[121]](g[124]) != -0x1, window[g[16]][g[126]] = $lzo[g[121]](g[127]) != -0x1 || $lzo[g[121]](g[128]) != -0x1, window[g[16]][g[129]] = _ehw8[g[97]] ? _ehw8[g[97]][g[119]]() : '', window[g[16]][g[130]] = ![], window[g[16]][g[131]] = 0x2;
        if ($lzo[g[121]](g[124]) != -0x1) {
            if (_ehw8[g[100]] >= 0x18) window[g[16]][g[131]] = 0x3;else window[g[16]][g[131]] = 0x2;
        } else {
            if ($lzo[g[121]](g[122]) != -0x1) {
                if (_ehw8[g[100]] && _ehw8[g[100]] >= 0x14) window[g[16]][g[131]] = 0x3;else {
                    if (zbl9[g[121]](g[132]) != -0x1 || zbl9[g[121]](g[133]) != -0x1 || zbl9[g[121]](g[134]) != -0x1 || zbl9[g[121]](g[135]) != -0x1 || zbl9[g[121]](g[136]) != -0x1) window[g[16]][g[131]] = 0x2;else window[g[16]][g[131]] = 0x3;
                }
            } else window[g[16]][g[131]] = 0x2;
        }
        console[g[47]](g[137] + window[g[16]][g[130]] + g[138] + window[g[16]][g[131]]);
    }
}), wx[g[139]]({
    'success': function (_nyjgk) {
        console[g[47]](g[140] + _nyjgk[g[141]] + g[142] + _nyjgk[g[143]]);
    }
}), wx[g[144]]({
    'success': function (l7oz$m) {
        console[g[47]](g[145] + l7oz$m[g[146]]);
    }
}), wx[g[147]]({ 'keepScreenOn': !![] }), wx[g[148]](function (wk8_n) {
    console[g[47]](g[145] + wk8_n[g[146]] + g[149] + wk8_n[g[150]]);
}), wx[g[151]](function (kje_wn) {
    window[g[152]] = kje_wn, window[g[153]] && window[g[152]] && (console[g[1]](g[154] + window[g[152]][g[155]]), window[g[153]](window[g[152]]), window[g[152]] = null);
}), window[g[156]] = 0x0, window[g[157]] = 0x0, window[g[158]] = null, wx[g[159]](function () {
    window[g[157]]++;
    var jwk_n = Date[g[160]]();
    (window[g[156]] == 0x0 || jwk_n - window[g[156]] > 0x1d4c0) && (console[g[161]](g[162]), wx[g[163]]());
    if (window[g[157]] >= 0x2) {
        window[g[157]] = 0x0, console[g[29]](g[164]), wx[g[165]]('0', 0x1);
        if (window[g[16]] && window[g[16]][g[120]]) window[g[83]](g[166], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});