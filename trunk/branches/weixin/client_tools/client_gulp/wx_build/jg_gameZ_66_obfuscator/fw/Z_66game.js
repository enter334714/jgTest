var f = wx.$B;
console[f[80]](f[31250]), window[f[31251]], wx[f[31252]](function (ap48wn) {
    if (ap48wn) {
        if (ap48wn[f[4304]]) {
            var ylr3$d = window[f[590]][f[30683]][f[4483]](new RegExp(/\./, 'g'), '_'),
                qsm9h = ap48wn[f[4304]],
                gveo = qsm9h[f[12245]](/(a9y5l\/Z_66game.js:)[0-9]{1,60}(:)/g);
            if (gveo) for (var igoejv = 0x0; igoejv < gveo[f[14]]; igoejv++) {
                if (gveo[igoejv] && gveo[igoejv][f[14]] > 0x0) {
                    var igb7v = parseInt(gveo[igoejv][f[4483]](f[31253], '')[f[4483]](':', ''));
                    qsm9h = qsm9h[f[4483]](gveo[igoejv], gveo[igoejv][f[4483]](':' + igb7v + ':', ':' + (igb7v - 0x2) + ':'));
                }
            }
            qsm9h = qsm9h[f[4483]](new RegExp(f[31254], 'g'), f[31255] + ylr3$d + f[26451]), qsm9h = qsm9h[f[4483]](new RegExp(f[31256], 'g'), f[31255] + ylr3$d + f[26451]), ap48wn[f[4304]] = qsm9h;
        }
        var q8mw = {
            'id': window[f[30691]][f[30756]],
            'role': window[f[30691]][f[4425]],
            'level': window[f[30691]][f[30757]],
            'user': window[f[30691]][f[26350]],
            'version': window[f[30691]][f[107]],
            'cdn': window[f[30691]][f[4302]],
            'pkgName': window[f[30691]][f[26351]],
            'gamever': window[f[590]][f[30683]],
            'serverid': window[f[30691]][f[26345]] ? window[f[30691]][f[26345]][f[11521]] : 0x0,
            'systemInfo': window[f[30758]],
            'error': f[31257],
            'stack': ap48wn ? ap48wn[f[4304]] : ''
        },
            yjode = JSON[f[4288]](q8mw);
        console[f[141]](f[31258] + yjode), (!window[f[31251]] || window[f[31251]] != q8mw[f[141]]) && (window[f[31251]] = q8mw[f[141]], window[f[30709]](q8mw));
    }
});
import 'a3q8n.js';
import 'go.js';
window[f[31259]] = require(f[31260]);
import 'a0dky.js';
import 'j6u9a.js';
import 'fxq.js';
import 'a1lsf.js';
console[f[80]](f[31261]), console[f[80]](f[31262]), t1P7ZA({ 'title': f[31263] });
var Sj7vz = { 't19PA7Z': !![] };
new window[f[30740]](Sj7vz), window[f[30740]][f[164]][f[31220]]();
if (window[f[31264]]) clearInterval(window[f[31264]]);
window[f[31264]] = null, window[f[30789]] = function (m48pqw, fb256) {
    if (!m48pqw || !fb256) return 0x0;
    m48pqw = m48pqw[f[16]]('.'), fb256 = fb256[f[16]]('.');
    const wn8a4p = Math[f[923]](m48pqw[f[14]], fb256[f[14]]);
    while (m48pqw[f[14]] < wn8a4p) {
        m48pqw[f[31]]('0');
    }
    while (fb256[f[14]] < wn8a4p) {
        fb256[f[31]]('0');
    }
    for (var vzibg7 = 0x0; vzibg7 < wn8a4p; vzibg7++) {
        const h91xst = parseInt(m48pqw[vzibg7]),
              jgvz7i = parseInt(fb256[vzibg7]);
        if (h91xst > jgvz7i) return 0x1;else {
            if (h91xst < jgvz7i) return -0x1;
        }
    }
    return 0x0;
}, window[f[30920]] = wx[f[31265]]()[f[30920]], console[f[514]](f[31266] + window[f[30920]]);
var Sua8p4n = wx[f[31267]]();
Sua8p4n[f[31268]](function (m8ws) {
    console[f[514]](f[31269] + m8ws[f[31270]]);
}), Sua8p4n[f[31271]](function () {
    wx[f[30726]]({
        'title': f[31272],
        'content': f[31273],
        'showCancel': ![],
        'success': function (ivgoj) {
            Sua8p4n[f[31274]]();
        }
    });
}), Sua8p4n[f[31275]](function () {
    console[f[514]](f[31276]);
}), window[f[31277]] = function () {
    console[f[514]](f[31278]);
    var rjieyo = wx[f[31279]]({
        'name': f[31280],
        'success': function (vgz7b6) {
            console[f[514]](f[31281]), console[f[514]](vgz7b6), vgz7b6 && vgz7b6[f[26548]] == f[31282] ? (window[f[30717]] = !![], window[f[30865]](), window[f[30866]]()) : setTimeout(function () {
                window[f[31277]]();
            }, 0x1f4);
        },
        'fail': function (vgijoe) {
            console[f[514]](f[31283]), console[f[514]](vgijoe), setTimeout(function () {
                window[f[31277]]();
            }, 0x1f4);
        }
    });
    rjieyo && rjieyo[f[30511]](yledr => {});
}, window[f[31284]] = function () {
    console[f[514]](f[31285]);
    var stmhq9 = wx[f[31279]]({
        'name': f[31286],
        'success': function (ijogve) {
            console[f[514]](f[31287]), console[f[514]](ijogve), ijogve && ijogve[f[26548]] == f[31282] ? (window[f[30718]] = !![], window[f[30865]](), window[f[30866]]()) : setTimeout(function () {
                window[f[31284]]();
            }, 0x1f4);
        },
        'fail': function (lr_) {
            console[f[514]](f[31288]), console[f[514]](lr_), setTimeout(function () {
                window[f[31284]]();
            }, 0x1f4);
        }
    });
    stmhq9 && stmhq9[f[30511]](v6z => {});
}, window[f[31289]] = function () {
    window[f[30789]](window[f[30920]], f[31290]) >= 0x0 ? (console[f[514]](f[31291] + window[f[30920]] + f[31292]), window[f[30733]](), window[f[31277]](), window[f[31284]]()) : (window[f[30766]](f[31293], window[f[30920]]), wx[f[30726]]({
        'title': f[5900],
        'content': f[31294]
    }));
}, window[f[30758]] = '', wx[f[31295]]({
    'success'(g7vzib) {
        window[f[30758]] = f[31296] + g7vzib[f[31297]] + f[31298] + g7vzib[f[31299]] + f[31300] + g7vzib[f[4496]] + f[31301] + g7vzib[f[507]] + f[31302] + g7vzib[f[26313]] + f[31303] + g7vzib[f[30920]] + f[31304] + g7vzib[f[9227]], console[f[514]](window[f[30758]]), console[f[514]](f[31305] + g7vzib[f[31306]] + f[31307] + g7vzib[f[31308]] + f[31309] + g7vzib[f[31310]] + f[31311] + g7vzib[f[31312]] + f[31313] + g7vzib[f[31314]] + f[31315] + g7vzib[f[31316]] + f[31317] + (g7vzib[f[31318]] ? g7vzib[f[31318]][f[344]] + ',' + g7vzib[f[31318]][f[1366]] + ',' + g7vzib[f[31318]][f[1368]] + ',' + g7vzib[f[31318]][f[1367]] : ''));
        var awpm84 = g7vzib[f[507]] ? g7vzib[f[507]][f[12545]]() : '',
            qwts = g7vzib[f[31299]] ? g7vzib[f[31299]][f[12545]]()[f[4483]]('\x20', '') : '';
        window[f[30691]][f[1148]] = awpm84[f[122]](f[31319]) != -0x1, window[f[30691]][f[11345]] = awpm84[f[122]](f[31320]) != -0x1, window[f[30691]][f[31016]] = awpm84[f[122]](f[31319]) != -0x1 || awpm84[f[122]](f[31320]) != -0x1, window[f[30691]][f[26035]] = awpm84[f[122]](f[31321]) != -0x1 || awpm84[f[122]](f[30695]) != -0x1, window[f[30691]][f[30768]] = g7vzib[f[26313]] ? g7vzib[f[26313]][f[12545]]() : '', window[f[30691]][f[31012]] = ![], window[f[30691]][f[31013]] = 0x2;
        if (awpm84[f[122]](f[31320]) != -0x1) {
            if (g7vzib[f[9227]] >= 0x18) window[f[30691]][f[31013]] = 0x3;else window[f[30691]][f[31013]] = 0x2;
        } else {
            if (awpm84[f[122]](f[31319]) != -0x1) {
                if (g7vzib[f[9227]] && g7vzib[f[9227]] >= 0x14) window[f[30691]][f[31013]] = 0x3;else {
                    if (qwts[f[122]](f[31322]) != -0x1 || qwts[f[122]](f[31323]) != -0x1 || qwts[f[122]](f[31324]) != -0x1 || qwts[f[122]](f[31325]) != -0x1 || qwts[f[122]](f[31326]) != -0x1) window[f[30691]][f[31013]] = 0x2;else window[f[30691]][f[31013]] = 0x3;
                }
            } else window[f[30691]][f[31013]] = 0x2;
        }
        console[f[514]](f[31327] + window[f[30691]][f[31012]] + f[31328] + window[f[30691]][f[31013]]);
    }
}), wx[f[30940]]({
    'success': function (nu8ap4) {
        console[f[514]](f[31329] + nu8ap4[f[4401]] + f[31330] + nu8ap4[f[30942]]);
    }
}), wx[f[11902]]({
    'success': function (h09f1x) {
        console[f[514]](f[31331] + h09f1x[f[13411]]);
    }
}), wx[f[31332]]({ 'keepScreenOn': !![] }), wx[f[11904]](function (lr$d3) {
    console[f[514]](f[31331] + lr$d3[f[13411]] + f[31333] + lr$d3[f[31334]]);
}), wx[f[10836]](function (iogjv) {
    window[f[30914]] = iogjv, window[f[30913]] && window[f[30914]] && (console[f[80]](f[30915] + window[f[30914]][f[846]]), window[f[30913]](window[f[30914]]), window[f[30914]] = null);
}), window[f[31335]] = 0x0, window[f[31336]] = 0x0, window[f[31337]] = null, wx[f[31338]](function () {
    window[f[31336]]++;
    var zvio = Date[f[85]]();
    (window[f[31335]] == 0x0 || zvio - window[f[31335]] > 0x1d4c0) && (console[f[100]](f[31339]), wx[f[12082]]());
    if (window[f[31336]] >= 0x2) {
        window[f[31336]] = 0x0, console[f[141]](f[31340]), wx[f[31341]]('0', 0x1);
        if (window[f[30691]] && window[f[30691]][f[1148]]) window[f[30766]](f[31342], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});