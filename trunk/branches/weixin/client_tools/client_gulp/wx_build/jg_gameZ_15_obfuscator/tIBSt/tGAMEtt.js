var P = wx.$y;
console[P[1]](P[2]), window[P[3]], wx[P[4]](function (jv910) {
    if (jv910) {
        if (jv910[P[5]]) {
            var u3bi47 = window[P[6]][P[7]][P[8]](new RegExp(/\./, 'g'), '_'),
                d$ox8 = jv910[P[5]],
                rcml_s = d$ox8[P[9]](/(ttttttt\/tGAMEtt.js:)[0-9]{1,60}(:)/g);
            if (rcml_s) for (var b4a3i = 0x0; b4a3i < rcml_s[P[10]]; b4a3i++) {
                if (rcml_s[b4a3i] && rcml_s[b4a3i][P[10]] > 0x0) {
                    var kw2tf = parseInt(rcml_s[b4a3i][P[8]](P[11], '')[P[8]](':', ''));
                    d$ox8 = d$ox8[P[8]](rcml_s[b4a3i], rcml_s[b4a3i][P[8]](':' + kw2tf + ':', ':' + (kw2tf - 0x2) + ':'));
                }
            }
            d$ox8 = d$ox8[P[8]](new RegExp(P[12], 'g'), P[13] + u3bi47 + P[14]), d$ox8 = d$ox8[P[8]](new RegExp(P[15], 'g'), P[13] + u3bi47 + P[14]), jv910[P[5]] = d$ox8;
        }
        var tpwze = {
            'id': window[P[16]][P[17]],
            'role': window[P[16]][P[18]],
            'level': window[P[16]][P[19]],
            'user': window[P[16]][P[20]],
            'version': window[P[16]][P[21]],
            'cdn': window[P[16]][P[22]],
            'pkgName': window[P[16]][P[23]],
            'gamever': window[P[6]][P[7]],
            'serverid': window[P[16]][P[24]] ? window[P[16]][P[24]][P[25]] : 0x0,
            'systemInfo': window[P[26]],
            'error': P[27],
            'stack': jv910 ? jv910[P[5]] : ''
        },
            $xodn8 = JSON[P[28]](tpwze);
        console[P[29]](P[30] + $xodn8), (!window[P[3]] || window[P[3]] != tpwze[P[29]]) && (window[P[3]] = tpwze[P[29]], window[P[31]](tpwze));
    }
});
import 'ttfttt.js';
import 'tt112tt.js';
window[P[32]] = require(P[33]);
import 'tINDtt.js';
import 'ttLIB23tt.js';
import 'tWXMtadtt.js';
import 'ttINItt.js';
console[P[1]](P[34]), console[P[1]](P[35]), P_GUV9({ 'title': P[36] });
var T_rysc = { 'P__G9UV': !![] };
new window[P[37]](T_rysc), window[P[37]][P[38]][P[39]]();
if (window[P[40]]) clearInterval(window[P[40]]);
window[P[40]] = null, window[P[41]] = function (lqy, tvp) {
    if (!lqy || !tvp) return 0x0;
    lqy = lqy[P[42]]('.'), tvp = tvp[P[42]]('.');
    const lr7smc = Math[P[43]](lqy[P[10]], tvp[P[10]]);
    while (lqy[P[10]] < lr7smc) {
        lqy[P[44]]('0');
    }
    while (tvp[P[10]] < lr7smc) {
        tvp[P[44]]('0');
    }
    for (var tz6wp = 0x0; tz6wp < lr7smc; tz6wp++) {
        const fpwk2 = parseInt(lqy[tz6wp]),
              of$2 = parseInt(tvp[tz6wp]);
        if (fpwk2 > of$2) return 0x1;else {
            if (fpwk2 < of$2) return -0x1;
        }
    }
    return 0x0;
}, window[P[45]] = wx[P[46]]()[P[45]], console[P[47]](P[48] + window[P[45]]);
var Tf$w2 = wx[P[49]]();
Tf$w2[P[50]](function (g8nqxd) {
    console[P[47]](P[51] + g8nqxd[P[52]]);
}), Tf$w2[P[53]](function () {
    wx[P[54]]({
        'title': P[55],
        'content': P[56],
        'showCancel': ![],
        'success': function (qngy_x) {
            Tf$w2[P[57]]();
        }
    });
}), Tf$w2[P[58]](function () {
    console[P[47]](P[59]);
}), window[P[60]] = function () {
    console[P[47]](P[61]);
    var cr_m = wx[P[62]]({
        'name': P[63],
        'success': function (lr_scm) {
            console[P[47]](P[64]), console[P[47]](lr_scm), lr_scm && lr_scm[P[65]] == P[66] ? (window[P[67]] = !![], window[P[68]](), window[P[69]]()) : setTimeout(function () {
                window[P[60]]();
            }, 0x1f4);
        },
        'fail': function (d8n$ko) {
            console[P[47]](P[70]), console[P[47]](d8n$ko), setTimeout(function () {
                window[P[60]]();
            }, 0x1f4);
        }
    });
    cr_m && cr_m[P[71]](evtz16 => {});
}, window[P[72]] = function () {
    console[P[47]](P[73]);
    var r_mls = wx[P[62]]({
        'name': P[74],
        'success': function (rcs7ml) {
            console[P[47]](P[75]), console[P[47]](rcs7ml), rcs7ml && rcs7ml[P[65]] == P[66] ? (window[P[76]] = !![], window[P[68]](), window[P[69]]()) : setTimeout(function () {
                window[P[72]]();
            }, 0x1f4);
        },
        'fail': function (ftpwk) {
            console[P[47]](P[77]), console[P[47]](ftpwk), setTimeout(function () {
                window[P[72]]();
            }, 0x1f4);
        }
    });
    r_mls && r_mls[P[71]](wpzt => {});
}, window[P[78]] = function () {
    window[P[41]](window[P[45]], P[79]) >= 0x0 ? (console[P[47]](P[80] + window[P[45]] + P[81]), window[P[82]](), window[P[60]](), window[P[72]]()) : (window[P[83]](P[84], window[P[45]]), wx[P[54]]({
        'title': P[85],
        'content': P[86]
    }));
}, window[P[26]] = '', wx[P[87]]({
    'success'(p$w2fk) {
        window[P[26]] = P[88] + p$w2fk[P[89]] + P[90] + p$w2fk[P[91]] + P[92] + p$w2fk[P[93]] + P[94] + p$w2fk[P[95]] + P[96] + p$w2fk[P[97]] + P[98] + p$w2fk[P[45]] + P[99] + p$w2fk[P[100]], console[P[47]](window[P[26]]), console[P[47]](P[101] + p$w2fk[P[102]] + P[103] + p$w2fk[P[104]] + P[105] + p$w2fk[P[106]] + P[107] + p$w2fk[P[108]] + P[109] + p$w2fk[P[110]] + P[111] + p$w2fk[P[112]] + P[113] + (p$w2fk[P[114]] ? p$w2fk[P[114]][P[115]] + ',' + p$w2fk[P[114]][P[116]] + ',' + p$w2fk[P[114]][P[117]] + ',' + p$w2fk[P[114]][P[118]] : ''));
        var okdf$2 = p$w2fk[P[95]] ? p$w2fk[P[95]][P[119]]() : '',
            d8$ofk = p$w2fk[P[91]] ? p$w2fk[P[91]][P[119]]()[P[8]]('\x20', '') : '';
        window[P[16]][P[120]] = okdf$2[P[121]](P[122]) != -0x1, window[P[16]][P[123]] = okdf$2[P[121]](P[124]) != -0x1, window[P[16]][P[125]] = okdf$2[P[121]](P[122]) != -0x1 || okdf$2[P[121]](P[124]) != -0x1, window[P[16]][P[126]] = okdf$2[P[121]](P[127]) != -0x1 || okdf$2[P[121]](P[128]) != -0x1, window[P[16]][P[129]] = p$w2fk[P[97]] ? p$w2fk[P[97]][P[119]]() : '', window[P[16]][P[130]] = ![], window[P[16]][P[131]] = 0x2;
        if (okdf$2[P[121]](P[124]) != -0x1) {
            if (p$w2fk[P[100]] >= 0x18) window[P[16]][P[131]] = 0x3;else window[P[16]][P[131]] = 0x2;
        } else {
            if (okdf$2[P[121]](P[122]) != -0x1) {
                if (p$w2fk[P[100]] && p$w2fk[P[100]] >= 0x14) window[P[16]][P[131]] = 0x3;else {
                    if (d8$ofk[P[121]](P[132]) != -0x1 || d8$ofk[P[121]](P[133]) != -0x1 || d8$ofk[P[121]](P[134]) != -0x1 || d8$ofk[P[121]](P[135]) != -0x1 || d8$ofk[P[121]](P[136]) != -0x1) window[P[16]][P[131]] = 0x2;else window[P[16]][P[131]] = 0x3;
                }
            } else window[P[16]][P[131]] = 0x2;
        }
        console[P[47]](P[137] + window[P[16]][P[130]] + P[138] + window[P[16]][P[131]]);
    }
}), wx[P[139]]({
    'success': function (mi7b3) {
        console[P[47]](P[140] + mi7b3[P[141]] + P[142] + mi7b3[P[143]]);
    }
}), wx[P[144]]({
    'success': function (nxyq8) {
        console[P[47]](P[145] + nxyq8[P[146]]);
    }
}), wx[P[147]]({ 'keepScreenOn': !![] }), wx[P[148]](function (yqgls) {
    console[P[47]](P[145] + yqgls[P[146]] + P[149] + yqgls[P[150]]);
}), wx[P[151]](function (b3u4ia) {
    window[P[152]] = b3u4ia, window[P[153]] && window[P[152]] && (console[P[1]](P[154] + window[P[152]][P[155]]), window[P[153]](window[P[152]]), window[P[152]] = null);
}), window[P[156]] = 0x0, window[P[157]] = 0x0, window[P[158]] = null, wx[P[159]](function () {
    window[P[157]]++;
    var bm43 = Date[P[160]]();
    (window[P[156]] == 0x0 || bm43 - window[P[156]] > 0x1d4c0) && (console[P[161]](P[162]), wx[P[163]]());
    if (window[P[157]] >= 0x2) {
        window[P[157]] = 0x0, console[P[29]](P[164]), wx[P[165]]('0', 0x1);
        if (window[P[16]] && window[P[16]][P[120]]) window[P[83]](P[166], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});