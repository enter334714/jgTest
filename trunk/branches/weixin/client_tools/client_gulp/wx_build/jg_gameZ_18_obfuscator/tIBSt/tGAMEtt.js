var v = wx.$d;
console[v[1]](v[2]), window[v[3]], wx[v[4]](function (zrykt1) {
    if (zrykt1) {
        if (zrykt1[v[5]]) {
            var y5zrt1 = window[v[6]][v[7]][v[8]](new RegExp(/\./, 'g'), '_'),
                ud3h = zrykt1[v[5]],
                w2q8oc = ud3h[v[9]](/(ttttttt\/tGAMEtt.js:)[0-9]{1,60}(:)/g);
            if (w2q8oc) for (var zft15 = 0x0; zft15 < w2q8oc[v[10]]; zft15++) {
                if (w2q8oc[zft15] && w2q8oc[zft15][v[10]] > 0x0) {
                    var q8doc2 = parseInt(w2q8oc[zft15][v[8]](v[11], '')[v[8]](':', ''));
                    ud3h = ud3h[v[8]](w2q8oc[zft15], w2q8oc[zft15][v[8]](':' + q8doc2 + ':', ':' + (q8doc2 - 0x2) + ':'));
                }
            }
            ud3h = ud3h[v[8]](new RegExp(v[12], 'g'), v[13] + y5zrt1 + v[14]), ud3h = ud3h[v[8]](new RegExp(v[15], 'g'), v[13] + y5zrt1 + v[14]), zrykt1[v[5]] = ud3h;
        }
        var pnm0b = {
            'id': window['D$5$'][v[16]],
            'role': window['D$5$'][v[17]],
            'level': window['D$5$'][v[18]],
            'user': window['D$5$'][v[19]],
            'version': window['D$5$'][v[20]],
            'cdn': window['D$5$'][v[21]],
            'pkgName': window['D$5$'][v[22]],
            'gamever': window[v[6]][v[7]],
            'serverid': window['D$5$'][v[23]] ? window['D$5$'][v[23]][v[24]] : 0x0,
            'systemInfo': window[v[25]],
            'error': v[26],
            'stack': zrykt1 ? zrykt1[v[5]] : ''
        },
            x$vj = JSON[v[27]](pnm0b);
        console[v[28]](v[29] + x$vj), (!window[v[3]] || window[v[3]] != pnm0b[v[28]]) && (window[v[3]] = pnm0b[v[28]], window['D$Q5'](pnm0b));
    }
});
import 'ttfttt.js';
import 'tt112tt.js';
window[v[30]] = require(v[31]);
import 'tINDtt.js';
import 'ttLIB23tt.js';
import 'tWXMtadtt.js';
import 'ttINItt.js';
console[v[1]](v[32]), console[v[1]](v[33]), D$Q54$({ 'title': v[34] });
var zbpnga0 = { 'D$HQ$54': !![] };
new window[v[35]](zbpnga0), window[v[35]][v[36]]['D$H45$Q']();
if (window['D$HQ5$4']) clearInterval(window['D$HQ5$4']);
window['D$HQ5$4'] = null, window['D$H4$Q5'] = function (avm, j$_79x) {
    if (!avm || !j$_79x) return 0x0;
    avm = avm[v[37]]('.'), j$_79x = j$_79x[v[37]]('.');
    const $6jxv = Math[v[38]](avm[v[10]], j$_79x[v[10]]);
    while (avm[v[10]] < $6jxv) {
        avm[v[39]]('0');
    }
    while (j$_79x[v[10]] < $6jxv) {
        j$_79x[v[39]]('0');
    }
    for (var pm0an = 0x0; pm0an < $6jxv; pm0an++) {
        const fx9_7 = parseInt(avm[pm0an]),
              a6nm0p = parseInt(j$_79x[pm0an]);
        if (fx9_7 > a6nm0p) return 0x1;else {
            if (fx9_7 < a6nm0p) return -0x1;
        }
    }
    return 0x0;
}, window[v[40]] = wx[v[41]]()[v[40]], console[v[42]](v[43] + window[v[40]]);
var zk4lh = wx[v[44]]();
zk4lh[v[45]](function (a06pvm) {
    console[v[42]](v[46] + a06pvm[v[47]]);
}), zk4lh[v[48]](function () {
    wx[v[49]]({
        'title': v[50],
        'content': v[51],
        'showCancel': ![],
        'success': function (rtky) {
            zk4lh[v[52]]();
        }
    });
}), zk4lh[v[53]](function () {
    console[v[42]](v[54]);
}), window['D$H4$5Q'] = function () {
    console[v[42]](v[55]);
    var mpav06 = wx[v[56]]({
        'name': v[57],
        'success': function (i0neg) {
            console[v[42]](v[58]), console[v[42]](i0neg), i0neg && i0neg[v[59]] == v[60] ? (window['D$$4'] = !![], window['D$$45Q'](), window['D$$5Q4']()) : setTimeout(function () {
                window['D$H4$5Q']();
            }, 0x1f4);
        },
        'fail': function (o8cw2q) {
            console[v[42]](v[61]), console[v[42]](o8cw2q), setTimeout(function () {
                window['D$H4$5Q']();
            }, 0x1f4);
        }
    });
    mpav06 && mpav06[v[62]](m$vxj6 => {});
}, window['D$H5Q$4'] = function () {
    console[v[42]](v[63]);
    var v7$j9x = wx[v[56]]({
        'name': v[64],
        'success': function (_7f15) {
            console[v[42]](v[65]), console[v[42]](_7f15), _7f15 && _7f15[v[59]] == v[60] ? (window['D$54$'] = !![], window['D$$45Q'](), window['D$$5Q4']()) : setTimeout(function () {
                window['D$H5Q$4']();
            }, 0x1f4);
        },
        'fail': function (o2) {
            console[v[42]](v[66]), console[v[42]](o2), setTimeout(function () {
                window['D$H5Q$4']();
            }, 0x1f4);
        }
    });
    v7$j9x && v7$j9x[v[62]](q28dc4 => {});
}, window[v[67]] = function () {
    window['D$H4$Q5'](window[v[40]], v[68]) >= 0x0 ? (console[v[42]](v[69] + window[v[40]] + v[70]), window['D$5Q'](), window['D$H4$5Q'](), window['D$H5Q$4']()) : (window['D$5$Q'](v[71], window[v[40]]), wx[v[49]]({
        'title': v[72],
        'content': v[73]
    }));
}, window[v[25]] = '', wx[v[74]]({
    'success'(_fx$7) {
        window[v[25]] = v[75] + _fx$7[v[76]] + v[77] + _fx$7[v[78]] + v[79] + _fx$7[v[80]] + v[81] + _fx$7[v[82]] + v[83] + _fx$7[v[84]] + v[85] + _fx$7[v[40]] + v[86] + _fx$7[v[87]], console[v[42]](window[v[25]]), console[v[42]](v[88] + _fx$7[v[89]] + v[90] + _fx$7[v[91]] + v[92] + _fx$7[v[93]] + v[94] + _fx$7[v[95]] + v[96] + _fx$7[v[97]] + v[98] + _fx$7[v[99]] + v[100] + (_fx$7[v[101]] ? _fx$7[v[101]][v[102]] + ',' + _fx$7[v[101]][v[103]] + ',' + _fx$7[v[101]][v[104]] + ',' + _fx$7[v[101]][v[105]] : ''));
        var ld834 = _fx$7[v[82]] ? _fx$7[v[82]][v[106]]() : '',
            bnap0g = _fx$7[v[78]] ? _fx$7[v[78]][v[106]]()[v[8]]('\x20', '') : '';
        window['D$5$'][v[107]] = ld834[v[108]](v[109]) != -0x1, window['D$5$'][v[110]] = ld834[v[108]](v[111]) != -0x1, window['D$5$'][v[112]] = ld834[v[108]](v[109]) != -0x1 || ld834[v[108]](v[111]) != -0x1, window['D$5$'][v[113]] = ld834[v[108]](v[114]) != -0x1 || ld834[v[108]](v[115]) != -0x1, window['D$5$'][v[116]] = _fx$7[v[84]] ? _fx$7[v[84]][v[106]]() : '', window['D$5$']['D$HQ4$5'] = ![], window['D$5$']['D$HQ54$'] = 0x2;
        if (ld834[v[108]](v[111]) != -0x1) {
            if (_fx$7[v[87]] >= 0x18) window['D$5$']['D$HQ54$'] = 0x3;else window['D$5$']['D$HQ54$'] = 0x2;
        } else {
            if (ld834[v[108]](v[109]) != -0x1) {
                if (_fx$7[v[87]] && _fx$7[v[87]] >= 0x14) window['D$5$']['D$HQ54$'] = 0x3;else {
                    if (bnap0g[v[108]](v[117]) != -0x1 || bnap0g[v[108]](v[118]) != -0x1 || bnap0g[v[108]](v[119]) != -0x1 || bnap0g[v[108]](v[120]) != -0x1 || bnap0g[v[108]](v[121]) != -0x1) window['D$5$']['D$HQ54$'] = 0x2;else window['D$5$']['D$HQ54$'] = 0x3;
                }
            } else window['D$5$']['D$HQ54$'] = 0x2;
        }
        console[v[42]](v[122] + window['D$5$']['D$HQ4$5'] + v[123] + window['D$5$']['D$HQ54$']);
    }
}), wx[v[124]]({
    'success': function (ajvm) {
        console[v[42]](v[125] + ajvm[v[126]] + v[127] + ajvm[v[128]]);
    }
}), wx[v[129]]({
    'success': function (c328d4) {
        console[v[42]](v[130] + c328d4[v[131]]);
    }
}), wx[v[132]]({ 'keepScreenOn': !![] }), wx[v[133]](function (ocqd) {
    console[v[42]](v[130] + ocqd[v[131]] + v[134] + ocqd[v[135]]);
}), wx[v[136]](function (ag0np) {
    window['D$4Q'] = ag0np, window['D$$Q4'] && window['D$4Q'] && (console[v[1]](v[137] + window['D$4Q'][v[138]]), window['D$$Q4'](window['D$4Q']), window['D$4Q'] = null);
}), window[v[139]] = 0x0, window['D$H54$Q'] = 0x0, window[v[140]] = null, wx[v[141]](function () {
    window['D$H54$Q']++;
    var j9$x7 = Date[v[142]]();
    (window[v[139]] == 0x0 || j9$x7 - window[v[139]] > 0x1d4c0) && (console[v[143]](v[144]), wx[v[145]]());
    if (window['D$H54$Q'] >= 0x2) {
        window['D$H54$Q'] = 0x0, console[v[28]](v[146]), wx[v[147]]('0', 0x1);
        if (window['D$5$'] && window['D$5$'][v[107]]) window['D$5$Q'](v[148], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});