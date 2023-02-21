var m = wx.$g;
console[m[72]](m[33440]), window[m[33441]], wx[m[33442]](function (x1wa) {
    if (x1wa) {
        if (x1wa[m[4072]]) {
            var e1ywhk = window[m[548]][m[33443]][m[3778]](new RegExp(/\./, 'g'), '_'),
                ftb_0p = x1wa[m[4072]],
                mrj6$ = ftb_0p[m[11757]](/(gggggggg\/gggggame.js:)[0-9]{1,60}(:)/g);
            if (mrj6$) for (var p_50bf = 0x0; p_50bf < mrj6$[m[13]]; p_50bf++) {
                if (mrj6$[p_50bf] && mrj6$[p_50bf][m[13]] > 0x0) {
                    var fbtp_0 = parseInt(mrj6$[p_50bf][m[3778]](m[33444], '')[m[3778]](':', ''));
                    ftb_0p = ftb_0p[m[3778]](mrj6$[p_50bf], mrj6$[p_50bf][m[3778]](':' + fbtp_0 + ':', ':' + (fbtp_0 - 0x2) + ':'));
                }
            }
            ftb_0p = ftb_0p[m[3778]](new RegExp(m[33445], 'g'), m[33446] + e1ywhk + m[26334]), ftb_0p = ftb_0p[m[3778]](new RegExp(m[33447], 'g'), m[33446] + e1ywhk + m[26334]), x1wa[m[4072]] = ftb_0p;
        }
        var tpfb_0 = {
            'id': window['G$3J'][m[33448]],
            'role': window['G$3J'][m[4201]],
            'level': window['G$3J'][m[33449]],
            'user': window['G$3J'][m[26229]],
            'version': window['G$3J'][m[95]],
            'cdn': window['G$3J'][m[4068]],
            'pkgName': window['G$3J'][m[26231]],
            'gamever': window[m[548]][m[33443]],
            'serverid': window['G$3J'][m[26225]] ? window['G$3J'][m[26225]][m[11038]] : 0x0,
            'systemInfo': window[m[33450]],
            'error': m[33451],
            'stack': x1wa ? x1wa[m[4072]] : ''
        },
            o4f3t = JSON[m[4054]](tpfb_0);
        console[m[119]](m[33452] + o4f3t), (!window[m[33441]] || window[m[33441]] != tpfb_0[m[119]]) && (window[m[33441]] = tpfb_0[m[119]], window['G$23'](tpfb_0));
    }
});
import 'gggmd5min.js';
import 'gggzlibs.js';
window[m[33453]] = require(m[33454]);
import 'gggindex.js';
import 'ggglibsmin.js';
import 'gggwxmini.js';
import 'ggginitmin.js';
import 'XingJuBox.js';
console[m[72]](m[33455]), console[m[72]](m[33456]), G$230J({ 'title': m[33457] });
var gd6oz = { 'G$V2J30': !![] };
new window[m[33458]](gd6oz), window[m[33458]][m[141]]['G$V03J2']();
if (window['G$V23J0']) clearInterval(window['G$V23J0']);
window['G$V23J0'] = null, window['G$V0J23'] = function (_to4f, d3z4o) {
    if (!_to4f || !d3z4o) return 0x0;
    _to4f = _to4f[m[15]]('.'), d3z4o = d3z4o[m[15]]('.');
    const $j62ru = Math[m[871]](_to4f[m[13]], d3z4o[m[13]]);
    while (_to4f[m[13]] < $j62ru) {
        _to4f[m[29]]('0');
    }
    while (d3z4o[m[13]] < $j62ru) {
        d3z4o[m[29]]('0');
    }
    for (var sc8lg9 = 0x0; sc8lg9 < $j62ru; sc8lg9++) {
        const t_f0 = parseInt(_to4f[sc8lg9]),
              xh51 = parseInt(d3z4o[sc8lg9]);
        if (t_f0 > xh51) return 0x1;else {
            if (t_f0 < xh51) return -0x1;
        }
    }
    return 0x0;
}, window[m[33459]] = wx[m[33460]]()[m[33459]], console[m[475]](m[33461] + window[m[33459]]);
var gjz2$6 = wx[m[33462]]();
gjz2$6[m[33463]](function (_ftpb) {
    console[m[475]](m[33464] + _ftpb[m[33465]]);
}), gjz2$6[m[33466]](function () {
    wx[m[33467]]({
        'title': m[33468],
        'content': m[33469],
        'showCancel': ![],
        'success': function (qve7yw) {
            gjz2$6[m[33470]]();
        }
    });
}), gjz2$6[m[33471]](function () {
    console[m[475]](m[33472]);
}), window['G$V0J32'] = function () {
    console[m[475]](m[33473]);
    var sg7vc = wx[m[33474]]({
        'name': m[33475],
        'success': function (x1wkha) {
            console[m[475]](m[33476]), console[m[475]](x1wkha), x1wkha && x1wkha[m[26433]] == m[33477] ? (window['G$J0'] = !![], window['G$J032'](), window['G$J320']()) : setTimeout(function () {
                window['G$V0J32']();
            }, 0x1f4);
        },
        'fail': function (j2rzd6) {
            console[m[475]](m[33478]), console[m[475]](j2rzd6), setTimeout(function () {
                window['G$V0J32']();
            }, 0x1f4);
        }
    });
    sg7vc && sg7vc[m[32848]](p_tf4 => {});
}, window['G$V32J0'] = function () {
    console[m[475]](m[33479]);
    var j6u$r2 = wx[m[33474]]({
        'name': m[33480],
        'success': function (v1ywke) {
            console[m[475]](m[33481]), console[m[475]](v1ywke), v1ywke && v1ywke[m[26433]] == m[33477] ? (window['G$30J'] = !![], window['G$J032'](), window['G$J320']()) : setTimeout(function () {
                window['G$V32J0']();
            }, 0x1f4);
        },
        'fail': function (ia0bp) {
            console[m[475]](m[33482]), console[m[475]](ia0bp), setTimeout(function () {
                window['G$V32J0']();
            }, 0x1f4);
        }
    });
    j6u$r2 && j6u$r2[m[32848]](tp40_f => {});
}, window[m[33483]] = function () {
    window['G$V0J23'](window[m[33459]], m[33484]) >= 0x0 ? (console[m[475]](m[33485] + window[m[33459]] + m[33486]), window['G$32'](), window['G$V0J32'](), window['G$V32J0']()) : (window['G$3J2'](m[33487], window[m[33459]]), wx[m[33467]]({
        'title': m[5621],
        'content': m[33488]
    }));
}, window[m[33450]] = '', wx[m[33489]]({
    'success'(zrdo) {
        window[m[33450]] = m[33490] + zrdo[m[33491]] + m[33492] + zrdo[m[33493]] + m[33494] + zrdo[m[4872]] + m[33495] + zrdo[m[468]] + m[33496] + zrdo[m[26184]] + m[33497] + zrdo[m[33459]] + m[33498] + zrdo[m[8928]], console[m[475]](window[m[33450]]), console[m[475]](m[33499] + zrdo[m[29735]] + m[33500] + zrdo[m[33501]] + m[33502] + zrdo[m[33503]] + m[33504] + zrdo[m[33505]] + m[33506] + zrdo[m[33507]] + m[33508] + zrdo[m[33509]] + m[33510] + (zrdo[m[33511]] ? zrdo[m[33511]][m[316]] + ',' + zrdo[m[33511]][m[1247]] + ',' + zrdo[m[33511]][m[1249]] + ',' + zrdo[m[33511]][m[1248]] : ''));
        var jd2z6r = zrdo[m[468]] ? zrdo[m[468]][m[12068]]() : '',
            rzj2d = zrdo[m[33493]] ? zrdo[m[33493]][m[12068]]()[m[3778]]('\x20', '') : '';
        window['G$3J'][m[1048]] = jd2z6r[m[109]](m[33512]) != -0x1, window['G$3J'][m[10873]] = jd2z6r[m[109]](m[33513]) != -0x1, window['G$3J'][m[33514]] = jd2z6r[m[109]](m[33512]) != -0x1 || jd2z6r[m[109]](m[33513]) != -0x1, window['G$3J'][m[25893]] = jd2z6r[m[109]](m[33515]) != -0x1 || jd2z6r[m[109]](m[33516]) != -0x1, window['G$3J'][m[33517]] = zrdo[m[26184]] ? zrdo[m[26184]][m[12068]]() : '', window['G$3J']['G$V20J3'] = ![], window['G$3J']['G$V230J'] = 0x2;
        if (jd2z6r[m[109]](m[33513]) != -0x1) {
            if (zrdo[m[8928]] >= 0x18) window['G$3J']['G$V230J'] = 0x3;else window['G$3J']['G$V230J'] = 0x2;
        } else {
            if (jd2z6r[m[109]](m[33512]) != -0x1) {
                if (zrdo[m[8928]] && zrdo[m[8928]] >= 0x14) window['G$3J']['G$V230J'] = 0x3;else {
                    if (rzj2d[m[109]](m[33518]) != -0x1 || rzj2d[m[109]](m[33519]) != -0x1 || rzj2d[m[109]](m[33520]) != -0x1 || rzj2d[m[109]](m[33521]) != -0x1 || rzj2d[m[109]](m[33522]) != -0x1) window['G$3J']['G$V230J'] = 0x2;else window['G$3J']['G$V230J'] = 0x3;
                }
            } else window['G$3J']['G$V230J'] = 0x2;
        }
        console[m[475]](m[33523] + window['G$3J']['G$V20J3'] + m[33524] + window['G$3J']['G$V230J']);
    }
}), wx[m[33525]]({
    'success': function (d4t3o) {
        console[m[475]](m[33526] + d4t3o[m[4177]] + m[33527] + d4t3o[m[33528]]);
    }
}), wx[m[11360]]({
    'success': function (f30_t4) {
        console[m[475]](m[33529] + f30_t4[m[13108]]);
    }
}), wx[m[33530]]({ 'keepScreenOn': !![] }), wx[m[11362]](function (lgc89s) {
    console[m[475]](m[33529] + lgc89s[m[13108]] + m[33531] + lgc89s[m[33532]]);
}), wx[m[10414]](function (ixap) {
    window['G$02'] = ixap, window['G$J20'] && window['G$02'] && (console[m[72]](m[33533] + window['G$02'][m[800]]), window['G$J20'](window['G$02']), window['G$02'] = null);
}), window['memoryGCTime'] = 0x0, window['G$V30J2'] = 0x0, window[m[33534]] = null, wx[m[33535]](function () {
    window['G$V30J2']++;
    var fp_05b = Date[m[77]]();
    (window['memoryGCTime'] == 0x0 || fp_05b - window['memoryGCTime'] > 0x1d4c0) && (console[m[90]](m[33536]), wx['triggerGC']());
    if (window['G$V30J2'] >= 0x2) {
        window['G$V30J2'] = 0x0, console[m[119]](m[33537]), wx[m[33538]]('0', 0x1);
        if (window['G$3J'] && window['G$3J'][m[1048]]) window['G$3J2'](m[33539], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});