var b = wx.$e;
console[b[80]](b[31876]), window[b[31877]], wx[b[31878]](function (iuj3n) {
    if (iuj3n) {
        if (iuj3n[b[4259]]) {
            var v7a4 = window[b[591]][b[31879]][b[4497]](new RegExp(/\./, 'g'), '_'),
                vf47_ = iuj3n[b[4259]],
                zy4f = vf47_[b[12220]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
            if (zy4f) for (var txlrgh = 0x0; txlrgh < zy4f[b[14]]; txlrgh++) {
                if (zy4f[txlrgh] && zy4f[txlrgh][b[14]] > 0x0) {
                    var om7ac_ = parseInt(zy4f[txlrgh][b[4497]](b[31880], '')[b[4497]](':', ''));
                    vf47_ = vf47_[b[4497]](zy4f[txlrgh], zy4f[txlrgh][b[4497]](':' + om7ac_ + ':', ':' + (om7ac_ - 0x2) + ':'));
                }
            }
            vf47_ = vf47_[b[4497]](new RegExp(b[31881], 'g'), b[31882] + v7a4 + b[26579]), vf47_ = vf47_[b[4497]](new RegExp(b[31883], 'g'), b[31882] + v7a4 + b[26579]), iuj3n[b[4259]] = vf47_;
        }
        var wb85d = {
            'id': window[b[31884]][b[31885]],
            'role': window[b[31884]][b[4381]],
            'level': window[b[31884]][b[31886]],
            'user': window[b[31884]][b[26477]],
            'version': window[b[31884]][b[107]],
            'cdn': window[b[31884]][b[4257]],
            'pkgName': window[b[31884]][b[26479]],
            'gamever': window[b[591]][b[31879]],
            'serverid': window[b[31884]][b[26473]] ? window[b[31884]][b[26473]][b[11489]] : 0x0,
            'systemInfo': window[b[31887]],
            'error': b[31888],
            'stack': iuj3n ? iuj3n[b[4259]] : ''
        },
            qnj3s = JSON[b[4243]](wb85d);
        console[b[141]](b[31889] + qnj3s), (!window[b[31877]] || window[b[31877]] != wb85d[b[141]]) && (window[b[31877]] = wb85d[b[141]], window[b[31890]](wb85d));
    }
});
import 'eeemd5min.js';
import 'eeezlibs.js';
window[b[31891]] = require(b[31892]);
import 'eeeindex.js';
import 'eeelibsmin.js';
import 'eeewxmini.js';
import 'eeeinitmin.js';
console[b[80]](b[31893]), console[b[80]](b[31894]), e11UG0({ 'title': b[31895] });
var ecm7o = { 'e1I10UG': !![] };
new window[b[31896]](ecm7o), window[b[31896]][b[164]][b[31897]]();
if (window[b[31898]]) clearInterval(window[b[31898]]);
window[b[31898]] = null, window[b[31899]] = function (sqnj3, sub) {
    if (!sqnj3 || !sub) return 0x0;
    sqnj3 = sqnj3[b[16]]('.'), sub = sub[b[16]]('.');
    const s9kb6 = Math[b[924]](sqnj3[b[14]], sub[b[14]]);
    while (sqnj3[b[14]] < s9kb6) {
        sqnj3[b[31]]('0');
    }
    while (sub[b[14]] < s9kb6) {
        sub[b[31]]('0');
    }
    for (var qsn3u9 = 0x0; qsn3u9 < s9kb6; qsn3u9++) {
        const nk6u = parseInt(sqnj3[qsn3u9]),
              gtlh$x = parseInt(sub[qsn3u9]);
        if (nk6u > gtlh$x) return 0x1;else {
            if (nk6u < gtlh$x) return -0x1;
        }
    }
    return 0x0;
}, window[b[31900]] = wx[b[31901]]()[b[31900]], console[b[515]](b[31902] + window[b[31900]]);
var en$j3q = wx[b[31903]]();
en$j3q[b[31904]](function (u9snqk) {
    console[b[515]](b[31905] + u9snqk[b[31906]]);
}), en$j3q[b[31907]](function () {
    wx[b[31908]]({
        'title': b[31909],
        'content': b[31910],
        'showCancel': ![],
        'success': function (n9uks6) {
            en$j3q[b[31911]]();
        }
    });
}), en$j3q[b[31912]](function () {
    console[b[515]](b[31913]);
}), window[b[31914]] = function () {
    console[b[515]](b[31915]);
    var tlg = wx[b[31916]]({
        'name': b[31917],
        'success': function (hlrztg) {
            console[b[515]](b[31918]), console[b[515]](hlrztg), hlrztg && hlrztg[b[26677]] == b[31919] ? (window[b[31920]] = !![], window[b[31921]](), window[b[31922]]()) : setTimeout(function () {
                window[b[31914]]();
            }, 0x1f4);
        },
        'fail': function (tglzhr) {
            console[b[515]](b[31923]), console[b[515]](tglzhr), setTimeout(function () {
                window[b[31914]]();
            }, 0x1f4);
        }
    });
    tlg && tlg[b[31180]](gjx$it => {});
}, window[b[31924]] = function () {
    console[b[515]](b[31925]);
    var fzhvyr = wx[b[31916]]({
        'name': b[31926],
        'success': function (njiq) {
            console[b[515]](b[31927]), console[b[515]](njiq), njiq && njiq[b[26677]] == b[31919] ? (window[b[31928]] = !![], window[b[31921]](), window[b[31922]]()) : setTimeout(function () {
                window[b[31924]]();
            }, 0x1f4);
        },
        'fail': function (d0bw58) {
            console[b[515]](b[31929]), console[b[515]](d0bw58), setTimeout(function () {
                window[b[31924]]();
            }, 0x1f4);
        }
    });
    fzhvyr && fzhvyr[b[31180]](zvfhr => {});
}, window[b[31930]] = function () {
    window[b[31899]](window[b[31900]], b[31931]) >= 0x0 ? (console[b[515]](b[31932] + window[b[31900]] + b[31933]), window[b[31934]](), window[b[31914]](), window[b[31924]]()) : (window[b[31935]](b[31936], window[b[31900]]), wx[b[31908]]({
        'title': b[5794],
        'content': b[31937]
    }));
}, window[b[31887]] = '', wx[b[31938]]({
    'success'(xi$gtj) {
        window[b[31887]] = b[31939] + xi$gtj[b[31940]] + b[31941] + xi$gtj[b[31942]] + b[31943] + xi$gtj[b[5070]] + b[31944] + xi$gtj[b[508]] + b[31945] + xi$gtj[b[26440]] + b[31946] + xi$gtj[b[31900]] + b[31947] + xi$gtj[b[9179]], console[b[515]](window[b[31887]]), console[b[515]](b[31948] + xi$gtj[b[31949]] + b[31950] + xi$gtj[b[31951]] + b[31952] + xi$gtj[b[31953]] + b[31954] + xi$gtj[b[31955]] + b[31956] + xi$gtj[b[31957]] + b[31958] + xi$gtj[b[31959]] + b[31960] + (xi$gtj[b[31961]] ? xi$gtj[b[31961]][b[345]] + ',' + xi$gtj[b[31961]][b[1368]] + ',' + xi$gtj[b[31961]][b[1370]] + ',' + xi$gtj[b[31961]][b[1369]] : ''));
        var vy4_fz = xi$gtj[b[508]] ? xi$gtj[b[508]][b[12530]]() : '',
            b65d80 = xi$gtj[b[31942]] ? xi$gtj[b[31942]][b[12530]]()[b[4497]]('\x20', '') : '';
        window[b[31884]][b[1149]] = vy4_fz[b[122]](b[31962]) != -0x1, window[b[31884]][b[11313]] = vy4_fz[b[122]](b[31424]) != -0x1, window[b[31884]][b[31963]] = vy4_fz[b[122]](b[31962]) != -0x1 || vy4_fz[b[122]](b[31424]) != -0x1, window[b[31884]][b[26159]] = vy4_fz[b[122]](b[31964]) != -0x1 || vy4_fz[b[122]](b[31965]) != -0x1, window[b[31884]][b[31966]] = xi$gtj[b[26440]] ? xi$gtj[b[26440]][b[12530]]() : '', window[b[31884]][b[31967]] = ![], window[b[31884]][b[31968]] = 0x2;
        if (vy4_fz[b[122]](b[31424]) != -0x1) {
            if (xi$gtj[b[9179]] >= 0x18) window[b[31884]][b[31968]] = 0x3;else window[b[31884]][b[31968]] = 0x2;
        } else {
            if (vy4_fz[b[122]](b[31962]) != -0x1) {
                if (xi$gtj[b[9179]] && xi$gtj[b[9179]] >= 0x14) window[b[31884]][b[31968]] = 0x3;else {
                    if (b65d80[b[122]](b[31969]) != -0x1 || b65d80[b[122]](b[31970]) != -0x1 || b65d80[b[122]](b[31971]) != -0x1 || b65d80[b[122]](b[31972]) != -0x1 || b65d80[b[122]](b[31973]) != -0x1) window[b[31884]][b[31968]] = 0x2;else window[b[31884]][b[31968]] = 0x3;
                }
            } else window[b[31884]][b[31968]] = 0x2;
        }
        console[b[515]](b[31974] + window[b[31884]][b[31967]] + b[31975] + window[b[31884]][b[31968]]);
    }
}), wx[b[31976]]({
    'success': function (hxg$) {
        console[b[515]](b[31977] + hxg$[b[4357]] + b[31978] + hxg$[b[31979]]);
    }
}), wx[b[11870]]({
    'success': function (inj$q3) {
        console[b[515]](b[31980] + inj$q3[b[13441]]);
    }
}), wx[b[31981]]({ 'keepScreenOn': !![] }), wx[b[11872]](function (jigxt) {
    console[b[515]](b[31980] + jigxt[b[13441]] + b[31982] + jigxt[b[31983]]);
}), wx[b[10804]](function (rtlgxh) {
    window[b[31984]] = rtlgxh, window[b[31985]] && window[b[31984]] && (console[b[80]](b[31986] + window[b[31984]][b[847]]), window[b[31985]](window[b[31984]]), window[b[31984]] = null);
}), window[b[31987]] = 0x0, window[b[31988]] = 0x0, window[b[31989]] = null, wx[b[31990]](function () {
    window[b[31988]]++;
    var ix$j3 = Date[b[85]]();
    (window[b[31987]] == 0x0 || ix$j3 - window[b[31987]] > 0x1d4c0) && (console[b[100]](b[31991]), wx[b[12057]]());
    if (window[b[31988]] >= 0x2) {
        window[b[31988]] = 0x0, console[b[141]](b[31992]), wx[b[31993]]('0', 0x1);
        if (window[b[31884]] && window[b[31884]][b[1149]]) window[b[31935]](b[31994], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});