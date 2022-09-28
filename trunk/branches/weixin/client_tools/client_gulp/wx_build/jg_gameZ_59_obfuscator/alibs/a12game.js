var c = wx.$a;
console[c[80]](c[31196]), window[c[31197]], wx[c[31198]](function (_we2ug) {
    if (_we2ug) {
        if (_we2ug[c[4304]]) {
            var $bca = window[c[590]][c[31199]][c[4483]](new RegExp(/\./, 'g'), '_'),
                sxnjvf = _we2ug[c[4304]],
                u2egw1 = sxnjvf[c[12245]](/(a2a3a1\/a12game.js:)[0-9]{1,60}(:)/g);
            if (u2egw1) for (var $0yoc = 0x0; $0yoc < u2egw1[c[14]]; $0yoc++) {
                if (u2egw1[$0yoc] && u2egw1[$0yoc][c[14]] > 0x0) {
                    var pt3r7 = parseInt(u2egw1[$0yoc][c[4483]](c[31200], '')[c[4483]](':', ''));
                    sxnjvf = sxnjvf[c[4483]](u2egw1[$0yoc], u2egw1[$0yoc][c[4483]](':' + pt3r7 + ':', ':' + (pt3r7 - 0x2) + ':'));
                }
            }
            sxnjvf = sxnjvf[c[4483]](new RegExp(c[31201], 'g'), c[31202] + $bca + c[26451]), sxnjvf = sxnjvf[c[4483]](new RegExp(c[31203], 'g'), c[31202] + $bca + c[26451]), _we2ug[c[4304]] = sxnjvf;
        }
        var a$clbm = {
            'id': window[c[31204]][c[31205]],
            'role': window[c[31204]][c[4425]],
            'level': window[c[31204]][c[31206]],
            'user': window[c[31204]][c[26350]],
            'version': window[c[31204]][c[107]],
            'cdn': window[c[31204]][c[4302]],
            'pkgName': window[c[31204]][c[26351]],
            'gamever': window[c[590]][c[31199]],
            'serverid': window[c[31204]][c[26345]] ? window[c[31204]][c[26345]][c[11521]] : 0x0,
            'systemInfo': window[c[31207]],
            'error': c[31208],
            'stack': _we2ug ? _we2ug[c[4304]] : ''
        },
            x2g1 = JSON[c[4288]](a$clbm);
        console[c[141]](c[31209] + x2g1), (!window[c[31197]] || window[c[31197]] != a$clbm[c[141]]) && (window[c[31197]] = a$clbm[c[141]], window[c[31210]](a$clbm));
    }
});
import 'a1md5min.js';
import 'ea1zlibs.js';
window[c[31211]] = require(c[31212]);
import 'a1index.js';
import 'a1ibsmin.js';
import 'a1wxmini.js';
import 'a1initmin.js';
console[c[80]](c[31213]), console[c[80]](c[31214]), jM1BE({ 'title': c[31215] });
var gk6qzd8 = { 'j6ME1B': !![] };
new window[c[31216]](gk6qzd8), window[c[31216]][c[164]][c[31217]]();
if (window[c[31218]]) clearInterval(window[c[31218]]);
window[c[31218]] = null, window[c[31219]] = function (wfg, mc$bla) {
    if (!wfg || !mc$bla) return 0x0;
    wfg = wfg[c[16]]('.'), mc$bla = mc$bla[c[16]]('.');
    const w4uoe = Math[c[923]](wfg[c[14]], mc$bla[c[14]]);
    while (wfg[c[14]] < w4uoe) {
        wfg[c[31]]('0');
    }
    while (mc$bla[c[14]] < w4uoe) {
        mc$bla[c[31]]('0');
    }
    for (var e0o_4 = 0x0; e0o_4 < w4uoe; e0o_4++) {
        const y0bc$l = parseInt(wfg[e0o_4]),
              trq8 = parseInt(mc$bla[e0o_4]);
        if (y0bc$l > trq8) return 0x1;else {
            if (y0bc$l < trq8) return -0x1;
        }
    }
    return 0x0;
}, window[c[31220]] = wx[c[31221]]()[c[31220]], console[c[514]](c[31222] + window[c[31220]]);
var gbalm$9 = wx[c[31223]]();
gbalm$9[c[31224]](function (_0o4y) {
    console[c[514]](c[31225] + _0o4y[c[31226]]);
}), gbalm$9[c[31227]](function () {
    wx[c[31228]]({
        'title': c[31229],
        'content': c[31230],
        'showCancel': ![],
        'success': function (y0co_4) {
            gbalm$9[c[31231]]();
        }
    });
}), gbalm$9[c[31232]](function () {
    console[c[514]](c[31233]);
}), window[c[31234]] = function () {
    console[c[514]](c[31235]);
    var gxu1f2 = wx[c[31236]]({
        'name': c[31237],
        'success': function (b$lmca) {
            console[c[514]](c[31238]), console[c[514]](b$lmca), b$lmca && b$lmca[c[26548]] == c[31239] ? (window[c[31240]] = !![], window[c[31241]](), window[c[31242]]()) : setTimeout(function () {
                window[c[31234]]();
            }, 0x1f4);
        },
        'fail': function (z6dhv) {
            console[c[514]](c[31243]), console[c[514]](z6dhv), setTimeout(function () {
                window[c[31234]]();
            }, 0x1f4);
        }
    });
    gxu1f2 && gxu1f2[c[30511]](_ew4g => {});
}, window[c[31244]] = function () {
    console[c[514]](c[31245]);
    var yobc0 = wx[c[31236]]({
        'name': c[31246],
        'success': function (kq8) {
            console[c[514]](c[31247]), console[c[514]](kq8), kq8 && kq8[c[26548]] == c[31239] ? (window[c[31248]] = !![], window[c[31241]](), window[c[31242]]()) : setTimeout(function () {
                window[c[31244]]();
            }, 0x1f4);
        },
        'fail': function (dhz6q) {
            console[c[514]](c[31249]), console[c[514]](dhz6q), setTimeout(function () {
                window[c[31244]]();
            }, 0x1f4);
        }
    });
    yobc0 && yobc0[c[30511]](sxf2g => {});
}, window[c[31250]] = function () {
    window[c[31219]](window[c[31220]], c[31251]) >= 0x0 ? (console[c[514]](c[31252] + window[c[31220]] + c[31253]), window[c[31254]](), window[c[31234]](), window[c[31244]]()) : (window[c[31255]](c[31256], window[c[31220]]), wx[c[31228]]({
        'title': c[5900],
        'content': c[31257]
    }));
}, window[c[31207]] = '', wx[c[31258]]({
    'success'($m9ab) {
        window[c[31207]] = c[31259] + $m9ab[c[31260]] + c[31261] + $m9ab[c[31262]] + c[31263] + $m9ab[c[4496]] + c[31264] + $m9ab[c[507]] + c[31265] + $m9ab[c[26313]] + c[31266] + $m9ab[c[31220]] + c[31267] + $m9ab[c[9227]], console[c[514]](window[c[31207]]), console[c[514]](c[31268] + $m9ab[c[31269]] + c[31270] + $m9ab[c[31271]] + c[31272] + $m9ab[c[31273]] + c[31274] + $m9ab[c[31275]] + c[31276] + $m9ab[c[31277]] + c[31278] + $m9ab[c[31279]] + c[31280] + ($m9ab[c[31281]] ? $m9ab[c[31281]][c[344]] + ',' + $m9ab[c[31281]][c[1366]] + ',' + $m9ab[c[31281]][c[1368]] + ',' + $m9ab[c[31281]][c[1367]] : ''));
        var g4w_eu = $m9ab[c[507]] ? $m9ab[c[507]][c[12545]]() : '',
            dzvkh6 = $m9ab[c[31262]] ? $m9ab[c[31262]][c[12545]]()[c[4483]]('\x20', '') : '';
        window[c[31204]][c[1148]] = g4w_eu[c[122]](c[31282]) != -0x1, window[c[31204]][c[11345]] = g4w_eu[c[122]](c[31177]) != -0x1, window[c[31204]][c[31283]] = g4w_eu[c[122]](c[31282]) != -0x1 || g4w_eu[c[122]](c[31177]) != -0x1, window[c[31204]][c[26035]] = g4w_eu[c[122]](c[31284]) != -0x1 || g4w_eu[c[122]](c[31285]) != -0x1, window[c[31204]][c[31286]] = $m9ab[c[26313]] ? $m9ab[c[26313]][c[12545]]() : '', window[c[31204]][c[31287]] = ![], window[c[31204]][c[31288]] = 0x2;
        if (g4w_eu[c[122]](c[31177]) != -0x1) {
            if ($m9ab[c[9227]] >= 0x18) window[c[31204]][c[31288]] = 0x3;else window[c[31204]][c[31288]] = 0x2;
        } else {
            if (g4w_eu[c[122]](c[31282]) != -0x1) {
                if ($m9ab[c[9227]] && $m9ab[c[9227]] >= 0x14) window[c[31204]][c[31288]] = 0x3;else {
                    if (dzvkh6[c[122]](c[31289]) != -0x1 || dzvkh6[c[122]](c[31290]) != -0x1 || dzvkh6[c[122]](c[31291]) != -0x1 || dzvkh6[c[122]](c[31292]) != -0x1 || dzvkh6[c[122]](c[31293]) != -0x1) window[c[31204]][c[31288]] = 0x2;else window[c[31204]][c[31288]] = 0x3;
                }
            } else window[c[31204]][c[31288]] = 0x2;
        }
        console[c[514]](c[31294] + window[c[31204]][c[31287]] + c[31295] + window[c[31204]][c[31288]]);
    }
}), wx[c[31296]]({
    'success': function (kqz8d) {
        console[c[514]](c[31297] + kqz8d[c[4401]] + c[31298] + kqz8d[c[31299]]);
    }
}), wx[c[11902]]({
    'success': function (yob) {
        console[c[514]](c[31300] + yob[c[13411]]);
    }
}), wx[c[31301]]({ 'keepScreenOn': !![] }), wx[c[11904]](function (geuw_4) {
    console[c[514]](c[31300] + geuw_4[c[13411]] + c[31302] + geuw_4[c[31303]]);
}), wx[c[10836]](function (xu2g) {
    window[c[31304]] = xu2g, window[c[31305]] && window[c[31304]] && (console[c[80]](c[31306] + window[c[31304]][c[846]]), window[c[31305]](window[c[31304]]), window[c[31304]] = null);
}), window[c[31307]] = 0x0, window[c[31308]] = 0x0, window[c[31309]] = null, wx[c[31310]](function () {
    window[c[31308]]++;
    var mycbl$ = Date[c[85]]();
    (window[c[31307]] == 0x0 || mycbl$ - window[c[31307]] > 0x1d4c0) && (console[c[100]](c[31311]), wx[c[12082]]());
    if (window[c[31308]] >= 0x2) {
        window[c[31308]] = 0x0, console[c[141]](c[31312]), wx[c[31313]]('0', 0x1);
        if (window[c[31204]] && window[c[31204]][c[1148]]) window[c[31255]](c[31314], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});