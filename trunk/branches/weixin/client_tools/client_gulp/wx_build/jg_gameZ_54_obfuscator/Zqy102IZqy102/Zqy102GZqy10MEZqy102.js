var J = wx.h$;
console[J[1]](J[2]), window[J[3]], wx[J[4]](function (b0gk5) {
    if (b0gk5) {
        if (b0gk5[J[5]]) {
            var l3am4 = window[J[6]][J[7]][J[8]](new RegExp(/\./, 'g'), '_'),
                ni1xj7 = b0gk5[J[5]],
                ml43ua = ni1xj7[J[9]](/(Zqy10Zqy10Zqy10Zqy10Zqy10\/Zqy102GZqy10MEZqy102.js:)[0-9]{1,60}(:)/g);
            if (ml43ua) for (var w92$f = 0x0; w92$f < ml43ua[J[10]]; w92$f++) {
                if (ml43ua[w92$f] && ml43ua[w92$f][J[10]] > 0x0) {
                    var gq0kdb = parseInt(ml43ua[w92$f][J[8]](J[11], '')[J[8]](':', ''));
                    ni1xj7 = ni1xj7[J[8]](ml43ua[w92$f], ml43ua[w92$f][J[8]](':' + gq0kdb + ':', ':' + (gq0kdb - 0x2) + ':'));
                }
            }
            ni1xj7 = ni1xj7[J[8]](new RegExp(J[12], 'g'), J[13] + l3am4 + J[14]), ni1xj7 = ni1xj7[J[8]](new RegExp(J[15], 'g'), J[13] + l3am4 + J[14]), b0gk5[J[5]] = ni1xj7;
        }
        var u4ma = {
            'id': window[J[16]][J[17]],
            'role': window[J[16]][J[18]],
            'level': window[J[16]][J[19]],
            'user': window[J[16]][J[20]],
            'version': window[J[16]][J[21]],
            'cdn': window[J[16]][J[22]],
            'pkgName': window[J[16]][J[23]],
            'gamever': window[J[6]][J[7]],
            'serverid': window[J[16]][J[24]] ? window[J[16]][J[24]][J[25]] : 0x0,
            'systemInfo': window[J[26]],
            'error': J[27],
            'stack': b0gk5 ? b0gk5[J[5]] : ''
        },
            dt6gc = JSON[J[28]](u4ma);
        console[J[29]](J[30] + dt6gc), (!window[J[3]] || window[J[3]] != u4ma[J[29]]) && (window[J[3]] = u4ma[J[29]], window[J[31]](u4ma));
    }
});
import 'Zqy10Zqy10bfZqy10Zqy10.js';
import 'Zqy10Zqy1011Zqy10Zqy10.js';
window[J[32]] = require(J[33]);
import 'Zqy10INDZqy10Zqy10.js';
import 'Zqy10Zqy10IZqy101Zqy10Zqy10.js';
import 'Zqy10Zqy10MtadZqy10Zqy10.js';
import 'Zqy10Zqy10INIZqy10aZqy10.js';
console[J[1]](J[34]), console[J[1]](J[35]), J15QJ4({ 'title': J[36] });
var gk6bg = { 'J1G54QJ': !![] };
new window[J[37]](gk6bg), window[J[37]][J[38]][J[39]]();
if (window[J[40]]) clearInterval(window[J[40]]);
window[J[40]] = null, window[J[41]] = function (pz_t, kbqd) {
    if (!pz_t || !kbqd) return 0x0;
    pz_t = pz_t[J[42]]('.'), kbqd = kbqd[J[42]]('.');
    const tgc6d = Math[J[43]](pz_t[J[10]], kbqd[J[10]]);
    while (pz_t[J[10]] < tgc6d) {
        pz_t[J[44]]('0');
    }
    while (kbqd[J[10]] < tgc6d) {
        kbqd[J[44]]('0');
    }
    for (var ory5qb = 0x0; ory5qb < tgc6d; ory5qb++) {
        const v5qro = parseInt(pz_t[ory5qb]),
              nui13 = parseInt(kbqd[ory5qb]);
        if (v5qro > nui13) return 0x1;else {
            if (v5qro < nui13) return -0x1;
        }
    }
    return 0x0;
}, window[J[45]] = wx[J[46]]()[J[45]], console[J[47]](J[48] + window[J[45]]);
var gew29 = wx[J[49]]();
gew29[J[50]](function (ht8z) {
    console[J[47]](J[51] + ht8z[J[52]]);
}), gew29[J[53]](function () {
    wx[J[54]]({
        'title': J[55],
        'content': J[56],
        'showCancel': ![],
        'success': function (d0b6gk) {
            gew29[J[57]]();
        }
    });
}), gew29[J[58]](function () {
    console[J[47]](J[59]);
}), window[J[60]] = function () {
    console[J[47]](J[61]);
    var tg8d = wx[J[62]]({
        'name': J[63],
        'success': function (w$92f_) {
            console[J[47]](J[64]), console[J[47]](w$92f_), w$92f_ && w$92f_[J[65]] == J[66] ? (window[J[67]] = !![], window[J[68]](), window[J[69]]()) : setTimeout(function () {
                window[J[60]]();
            }, 0x1f4);
        },
        'fail': function (zh_e) {
            console[J[47]](J[70]), console[J[47]](zh_e), setTimeout(function () {
                window[J[60]]();
            }, 0x1f4);
        }
    });
    tg8d && tg8d[J[71]](cdtg8 => {});
}, window[J[72]] = function () {
    console[J[47]](J[73]);
    var w$9_f2 = wx[J[62]]({
        'name': J[74],
        'success': function (d0qkb) {
            console[J[47]](J[75]), console[J[47]](d0qkb), d0qkb && d0qkb[J[65]] == J[66] ? (window[J[76]] = !![], window[J[68]](), window[J[69]]()) : setTimeout(function () {
                window[J[72]]();
            }, 0x1f4);
        },
        'fail': function (n14) {
            console[J[47]](J[77]), console[J[47]](n14), setTimeout(function () {
                window[J[72]]();
            }, 0x1f4);
        }
    });
    w$9_f2 && w$9_f2[J[71]]($wfs => {});
}, window[J[78]] = function () {
    window[J[41]](window[J[45]], J[79]) >= 0x0 ? (console[J[47]](J[80] + window[J[45]] + J[81]), window[J[82]](), window[J[60]](), window[J[72]]()) : (window[J[83]](J[84], window[J[45]]), wx[J[54]]({
        'title': J[85],
        'content': J[86]
    }));
}, window[J[26]] = '', wx[J[87]]({
    'success'(xiv7n) {
        window[J[26]] = J[88] + xiv7n[J[89]] + J[90] + xiv7n[J[91]] + J[92] + xiv7n[J[93]] + J[94] + xiv7n[J[95]] + J[96] + xiv7n[J[97]] + J[98] + xiv7n[J[45]] + J[99] + xiv7n[J[100]], console[J[47]](window[J[26]]), console[J[47]](J[101] + xiv7n[J[102]] + J[103] + xiv7n[J[104]] + J[105] + xiv7n[J[106]] + J[107] + xiv7n[J[108]] + J[109] + xiv7n[J[110]] + J[111] + xiv7n[J[112]] + J[113] + (xiv7n[J[114]] ? xiv7n[J[114]][J[115]] + ',' + xiv7n[J[114]][J[116]] + ',' + xiv7n[J[114]][J[117]] + ',' + xiv7n[J[114]][J[118]] : ''));
        var y7vjro = xiv7n[J[95]] ? xiv7n[J[95]][J[119]]() : '',
            vi7jx = xiv7n[J[91]] ? xiv7n[J[91]][J[119]]()[J[8]]('\x20', '') : '';
        window[J[16]][J[120]] = y7vjro[J[121]](J[122]) != -0x1, window[J[16]][J[123]] = y7vjro[J[121]](J[124]) != -0x1, window[J[16]][J[125]] = y7vjro[J[121]](J[122]) != -0x1 || y7vjro[J[121]](J[124]) != -0x1, window[J[16]][J[126]] = y7vjro[J[121]](J[127]) != -0x1 || y7vjro[J[121]](J[128]) != -0x1, window[J[16]][J[129]] = xiv7n[J[97]] ? xiv7n[J[97]][J[119]]() : '', window[J[16]][J[130]] = ![], window[J[16]][J[131]] = 0x2;
        if (y7vjro[J[121]](J[124]) != -0x1) {
            if (xiv7n[J[100]] >= 0x18) window[J[16]][J[131]] = 0x3;else window[J[16]][J[131]] = 0x2;
        } else {
            if (y7vjro[J[121]](J[122]) != -0x1) {
                if (xiv7n[J[100]] && xiv7n[J[100]] >= 0x14) window[J[16]][J[131]] = 0x3;else {
                    if (vi7jx[J[121]](J[132]) != -0x1 || vi7jx[J[121]](J[133]) != -0x1 || vi7jx[J[121]](J[134]) != -0x1 || vi7jx[J[121]](J[135]) != -0x1 || vi7jx[J[121]](J[136]) != -0x1) window[J[16]][J[131]] = 0x2;else window[J[16]][J[131]] = 0x3;
                }
            } else window[J[16]][J[131]] = 0x2;
        }
        console[J[47]](J[137] + window[J[16]][J[130]] + J[138] + window[J[16]][J[131]]);
    }
}), wx[J[139]]({
    'success': function (qbg0) {
        console[J[47]](J[140] + qbg0[J[141]] + J[142] + qbg0[J[143]]);
    }
}), wx[J[144]]({
    'success': function (in7x) {
        console[J[47]](J[145] + in7x[J[146]]);
    }
}), wx[J[147]]({ 'keepScreenOn': !![] }), wx[J[148]](function (u3m) {
    console[J[47]](J[145] + u3m[J[146]] + J[149] + u3m[J[150]]);
}), wx[J[151]](function (cg68t) {
    window[J[152]] = cg68t, window[J[153]] && window[J[152]] && (console[J[1]](J[154] + window[J[152]][J[155]]), window[J[153]](window[J[152]]), window[J[152]] = null);
}), window[J[156]] = 0x0, window[J[157]] = 0x0, window[J[158]] = null, wx[J[159]](function () {
    window[J[157]]++;
    var td86c = Date[J[160]]();
    (window[J[156]] == 0x0 || td86c - window[J[156]] > 0x1d4c0) && (console[J[161]](J[162]), wx[J[163]]());
    if (window[J[157]] >= 0x2) {
        window[J[157]] = 0x0, console[J[29]](J[164]), wx[J[165]]('0', 0x1);
        if (window[J[16]] && window[J[16]][J[120]]) window[J[83]](J[166], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});