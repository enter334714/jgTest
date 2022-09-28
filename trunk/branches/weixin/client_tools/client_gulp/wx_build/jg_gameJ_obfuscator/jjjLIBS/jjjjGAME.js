var S = wx.$J;
console[S[540078]](S[572238]), window[S[572239]], wx[S[572240]](function (ygosc) {
    return;
    if (ygosc) {
        if (ygosc[S[544134]]) {
            var ulbe4p = window[S[540563]][S[571745]][S[544372]](new RegExp(/\./, 'g'), '_'),
                u4gc0l = ygosc[S[544134]],
                k6sy7o = u4gc0l[S[552093]](/(jjjjjjjjjj\/jjjjGAME.js:)[0-9]{1,60}(:)/g);
            if (k6sy7o) for (var ul0g4c = 0x0; ul0g4c < k6sy7o[S[540013]]; ul0g4c++) {
                if (k6sy7o[ul0g4c] && k6sy7o[ul0g4c][S[540013]] > 0x0) {
                    var s6ykg = parseInt(k6sy7o[ul0g4c][S[544372]](S[572241], '')[S[544372]](':', ''));
                    u4gc0l = u4gc0l[S[544372]](k6sy7o[ul0g4c], k6sy7o[ul0g4c][S[544372]](':' + s6ykg + ':', ':' + (s6ykg - 0x2) + ':'));
                }
            }
            u4gc0l = u4gc0l[S[544372]](new RegExp(S[572242], 'g'), S[572243] + ulbe4p + S[566449]), u4gc0l = u4gc0l[S[544372]](new RegExp(S[572244], 'g'), S[572243] + ulbe4p + S[566449]), ygosc[S[544134]] = u4gc0l;
        }
        var ub0lc4 = {
            'id': window['$j9A'][S[571794]],
            'role': window['$j9A'][S[544256]],
            'level': window['$j9A'][S[571795]],
            'user': window['$j9A'][S[566349]],
            'version': window['$j9A'][S[540101]],
            'cdn': window['$j9A'][S[544132]],
            'pkgName': window['$j9A'][S[566351]],
            'gamever': window[S[540563]][S[571745]],
            'serverid': window['$j9A'][S[566345]] ? window['$j9A'][S[566345]][S[551363]] : 0x0,
            'systemInfo': window[S[571796]],
            'error': S[572245],
            'stack': ygosc ? ygosc[S[544134]] : ''
        },
            ogcly0 = JSON[S[544118]](ub0lc4);
        console[S[540125]](S[572246] + ogcly0), (!window[S[572239]] || window[S[572239]] != ub0lc4[S[540125]]) && (window[S[572239]] = ub0lc4[S[540125]], window['$j39'](ub0lc4));
    }
});
import 'jjjMDFIVEMIN.js';
import 'jjjZLIBS.js';
window[S[572247]] = require(S[572248]);
import 'jjjLIBSMIN.js';
import 'jjjWXMINI.js';
import 'jjjINITMIN.js';
import 'jjjINDEX.js';
console[S[540078]](S[572249]), console[S[540078]](S[572250]), $j39SA({ 'title': S[572251] });
var j1_zx892i = { '$jI3A9S': !![] };
new window[S[571783]](j1_zx892i), window[S[571783]][S[540148]]['$jIS9A3']();
if (window['$jI39AS']) clearInterval(window['$jI39AS']);
window['$jI39AS'] = null, window['$jISA39'] = function (jn5pe, scog0) {
    if (!jn5pe || !scog0) return 0x0;
    jn5pe = jn5pe[S[540015]]('.'), scog0 = scog0[S[540015]]('.');
    const hxa$z = Math[S[540895]](jn5pe[S[540013]], scog0[S[540013]]);
    while (jn5pe[S[540013]] < hxa$z) {
        jn5pe[S[540029]]('0');
    }
    while (scog0[S[540013]] < hxa$z) {
        scog0[S[540029]]('0');
    }
    for (var df1rm = 0x0; df1rm < hxa$z; df1rm++) {
        const gos0yc = parseInt(jn5pe[df1rm]),
              buep4n = parseInt(scog0[df1rm]);
        if (gos0yc > buep4n) return 0x1;else {
            if (gos0yc < buep4n) return -0x1;
        }
    }
    return 0x0;
}, window[S[571925]] = wx[S[572252]]()[S[571925]], console[S[540488]](S[572253] + window[S[571925]]);
var j1_f2m1q = wx[S[572254]]();
j1_f2m1q[S[572255]](function (mrkf67) {
    console[S[540488]](S[572256] + mrkf67[S[572257]]);
}), j1_f2m1q[S[572258]](function () {
    wx[S[571775]]({
        'title': S[572259],
        'content': S[572260],
        'showCancel': ![],
        'success': function (y7os6k) {
            j1_f2m1q[S[572261]]();
        }
    });
}), j1_f2m1q[S[572262]](function () {
    console[S[540488]](S[572263]);
}), window['$jISA93'] = function () {
    console[S[540488]](S[572264]);
    var go6ks = wx[S[572265]]({
        'name': S[572266],
        'success': function (sygko0) {
            console[S[540488]](S[572267]), console[S[540488]](sygko0), sygko0 && sygko0[S[566546]] == S[572268] ? (window['$jAS'] = !![], window['$jAS93'](), window['$jA93S']()) : setTimeout(function () {
                window['$jISA93']();
            }, 0x1f4);
        },
        'fail': function (ok7ys) {
            console[S[540488]](S[572269]), console[S[540488]](ok7ys), setTimeout(function () {
                window['$jISA93']();
            }, 0x1f4);
        }
    });
    go6ks && go6ks[S[571049]](le4bpu => {});
}, window['$jI93AS'] = function () {
    console[S[540488]](S[572270]);
    var epbj5n = wx[S[572265]]({
        'name': S[572271],
        'success': function (fmqd12) {
            console[S[540488]](S[572272]), console[S[540488]](fmqd12), fmqd12 && fmqd12[S[566546]] == S[572268] ? (window['$j9SA'] = !![], window['$jAS93'](), window['$jA93S']()) : setTimeout(function () {
                window['$jI93AS']();
            }, 0x1f4);
        },
        'fail': function (l4peub) {
            console[S[540488]](S[572273]), console[S[540488]](l4peub), setTimeout(function () {
                window['$jI93AS']();
            }, 0x1f4);
        }
    });
    epbj5n && epbj5n[S[571049]](xiqd28 => {});
}, window[S[572274]] = function () {
    window['$jISA39'](window[S[571925]], S[572275]) >= 0x0 ? (console[S[540488]](S[572276] + window[S[571925]] + S[572277]), window['$j93'](), window['$jISA93'](), window['$jI93AS']()) : (window['$j9A3'](S[572278], window[S[571925]]), wx[S[571775]]({
        'title': S[545669],
        'content': S[572279]
    }));
}, window[S[571796]] = '', wx[S[572280]]({
    'success'(zax9i) {
        window[S[571796]] = S[572281] + zax9i[S[572282]] + S[572283] + zax9i[S[572284]] + S[572285] + zax9i[S[544945]] + S[572286] + zax9i[S[540481]] + S[572287] + zax9i[S[566312]] + S[572288] + zax9i[S[571925]] + S[572289] + zax9i[S[549053]], console[S[540488]](window[S[571796]]), console[S[540488]](S[572290] + zax9i[S[572291]] + S[572292] + zax9i[S[572293]] + S[572294] + zax9i[S[572295]] + S[572296] + zax9i[S[572297]] + S[572298] + zax9i[S[572299]] + S[572300] + zax9i[S[572301]] + S[572302] + (zax9i[S[572303]] ? zax9i[S[572303]][S[540323]] + ',' + zax9i[S[572303]][S[541277]] + ',' + zax9i[S[572303]][S[541279]] + ',' + zax9i[S[572303]][S[541278]] : ''));
        var jw5pn = zax9i[S[540481]] ? zax9i[S[540481]][S[552403]]() : '',
            c4el = zax9i[S[572284]] ? zax9i[S[572284]][S[552403]]()[S[544372]]('\x20', '') : '';
        window['$j9A'][S[541117]] = jw5pn[S[540115]](S[572304]) != -0x1, window['$j9A'][S[551187]] = jw5pn[S[540115]](S[571720]) != -0x1, window['$j9A'][S[572002]] = jw5pn[S[540115]](S[572304]) != -0x1 || jw5pn[S[540115]](S[571720]) != -0x1, window['$j9A'][S[566031]] = jw5pn[S[540115]](S[572305]) != -0x1 || jw5pn[S[540115]](S[571753]) != -0x1, window['$j9A'][S[571804]] = zax9i[S[566312]] ? zax9i[S[566312]][S[552403]]() : '', window['$j9A']['$jI3SA9'] = ![], window['$j9A']['$jI39SA'] = 0x2;
        if (jw5pn[S[540115]](S[571720]) != -0x1) {
            if (zax9i[S[549053]] >= 0x18) window['$j9A']['$jI39SA'] = 0x3;else window['$j9A']['$jI39SA'] = 0x2;
        } else {
            if (jw5pn[S[540115]](S[572304]) != -0x1) {
                if (zax9i[S[549053]] && zax9i[S[549053]] >= 0x14) window['$j9A']['$jI39SA'] = 0x3;else {
                    if (c4el[S[540115]](S[572306]) != -0x1 || c4el[S[540115]](S[572307]) != -0x1 || c4el[S[540115]](S[572308]) != -0x1 || c4el[S[540115]](S[572309]) != -0x1 || c4el[S[540115]](S[572310]) != -0x1) window['$j9A']['$jI39SA'] = 0x2;else window['$j9A']['$jI39SA'] = 0x3;
                }
            } else window['$j9A']['$jI39SA'] = 0x2;
        }
        console[S[540488]](S[572311] + window['$j9A']['$jI3SA9'] + S[572312] + window['$j9A']['$jI39SA']);
    }
}), wx[S[571943]]({
    'success': function (g6oyk) {
        console[S[540488]](S[572313] + g6oyk[S[544232]] + S[572314] + g6oyk[S[571945]]);
    }
}), wx[S[551744]]({
    'success': function (uen4b) {
        console[S[540488]](S[572315] + uen4b[S[553314]]);
    }
}), wx[S[572316]]({ 'keepScreenOn': !![] }), wx[S[551746]](function (ucg4) {
    console[S[540488]](S[572315] + ucg4[S[553314]] + S[572317] + ucg4[S[572318]]);
}), wx[S[550678]](function (z9a8x) {
    window['$jS3'] = z9a8x, window['$jA3S'] && window['$jS3'] && (console[S[540078]](S[571922] + window['$jS3'][S[540818]]), window['$jA3S'](window['$jS3']), window['$jS3'] = null);
}), window[S[572319]] = 0x0, window['$jI9SA3'] = 0x0, window[S[572320]] = null, wx[S[572321]](function () {
    window['$jI9SA3']++;
    var jbpn5e = Date[S[540083]]();
    (window[S[572319]] == 0x0 || jbpn5e - window[S[572319]] > 0x1d4c0) && (console[S[540096]](S[572322]), wx[S[551930]]());
    if (window['$jI9SA3'] >= 0x2) {
        window['$jI9SA3'] = 0x0, console[S[540125]](S[572323]), wx[S[572324]]('0', 0x1);
        if (window['$j9A'] && window['$j9A'][S[541117]]) window['$j9A3'](S[572325], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});