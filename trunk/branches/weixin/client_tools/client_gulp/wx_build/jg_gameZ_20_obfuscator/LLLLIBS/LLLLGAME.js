var W = wx.$l;
console[W[78]](W[31468]), window[W[31469]], wx[W[31470]](function (pqh4s5) {
    if (pqh4s5) {
        if (pqh4s5[W[4134]]) {
            var ky37 = window[W[563]][W[31471]][W[4372]](new RegExp(/\./, 'g'), '_'),
                il86b1 = pqh4s5[W[4134]],
                kv2y = il86b1[W[12093]](/(LLLLLLLL\/LLLLGAME.js:)[0-9]{1,60}(:)/g);
            if (kv2y) for (var $h0qm = 0x0; $h0qm < kv2y[W[13]]; $h0qm++) {
                if (kv2y[$h0qm] && kv2y[$h0qm][W[13]] > 0x0) {
                    var q4h0mo = parseInt(kv2y[$h0qm][W[4372]](W[31472], '')[W[4372]](':', ''));
                    il86b1 = il86b1[W[4372]](kv2y[$h0qm], kv2y[$h0qm][W[4372]](':' + q4h0mo + ':', ':' + (q4h0mo - 0x2) + ':'));
                }
            }
            il86b1 = il86b1[W[4372]](new RegExp(W[31473], 'g'), W[31474] + ky37 + W[26449]), il86b1 = il86b1[W[4372]](new RegExp(W[31475], 'g'), W[31474] + ky37 + W[26449]), pqh4s5[W[4134]] = il86b1;
        }
        var _1i2v = {
            'id': window['$LUX'][W[31476]],
            'role': window['$LUX'][W[4256]],
            'level': window['$LUX'][W[31477]],
            'user': window['$LUX'][W[26349]],
            'version': window['$LUX'][W[101]],
            'cdn': window['$LUX'][W[4132]],
            'pkgName': window['$LUX'][W[26351]],
            'gamever': window[W[563]][W[31471]],
            'serverid': window['$LUX'][W[26345]] ? window['$LUX'][W[26345]][W[11363]] : 0x0,
            'systemInfo': window[W[31478]],
            'error': W[31479],
            'stack': pqh4s5 ? pqh4s5[W[4134]] : ''
        },
            mt$go0 = JSON[W[4118]](_1i2v);
        console[W[125]](W[31480] + mt$go0), (!window[W[31469]] || window[W[31469]] != _1i2v[W[125]]) && (window[W[31469]] = _1i2v[W[125]], window['$LRU'](_1i2v));
    }
});
import 'lllMDFIVEMIN.js';
import 'lllZLIBS.js';
window[W[31481]] = require(W[31482]);
import 'LLLLINDEX.js';
import 'llllLIBSMIN.js';
import 'LLLLWXMINI.js';
import 'LLLINITMIN.js';
console[W[78]](W[31483]), console[W[78]](W[31484]), $LRU7X({ 'title': W[31485] });
var L9df8ul = { '$LMRXU7': !![] };
new window[W[31467]](L9df8ul), window[W[31467]][W[148]]['$LM7UXR']();
if (window['$LMRUX7']) clearInterval(window['$LMRUX7']);
window['$LMRUX7'] = null, window['$LM7XRU'] = function (buf8d, jernc) {
    if (!buf8d || !jernc) return 0x0;
    buf8d = buf8d[W[15]]('.'), jernc = jernc[W[15]]('.');
    const iub8 = Math[W[895]](buf8d[W[13]], jernc[W[13]]);
    while (buf8d[W[13]] < iub8) {
        buf8d[W[29]]('0');
    }
    while (jernc[W[13]] < iub8) {
        jernc[W[29]]('0');
    }
    for (var ycn7kw = 0x0; ycn7kw < iub8; ycn7kw++) {
        const t0mh$o = parseInt(buf8d[ycn7kw]),
              i18b6l = parseInt(jernc[ycn7kw]);
        if (t0mh$o > i18b6l) return 0x1;else {
            if (t0mh$o < i18b6l) return -0x1;
        }
    }
    return 0x0;
}, window[W[31486]] = wx[W[31487]]()[W[31486]], console[W[488]](W[31488] + window[W[31486]]);
var L9qh4pso = wx[W[31489]]();
L9qh4pso[W[31490]](function (l68ib1) {
    console[W[488]](W[31491] + l68ib1[W[31492]]);
}), L9qh4pso[W[31493]](function () {
    wx[W[31494]]({
        'title': W[31495],
        'content': W[31496],
        'showCancel': ![],
        'success': function (nrecj) {
            L9qh4pso[W[31497]]();
        }
    });
}), L9qh4pso[W[31498]](function () {
    console[W[488]](W[31499]);
}), window['$LM7XUR'] = function () {
    console[W[488]](W[31500]);
    var e7njr = wx[W[31501]]({
        'name': W[31502],
        'success': function (ilb861) {
            console[W[488]](W[31503]), console[W[488]](ilb861), ilb861 && ilb861[W[26546]] == W[31504] ? (window['$LX7'] = !![], window['$LX7UR'](), window['$LXUR7']()) : setTimeout(function () {
                window['$LM7XUR']();
            }, 0x1f4);
        },
        'fail': function (g0mto) {
            console[W[488]](W[31505]), console[W[488]](g0mto), setTimeout(function () {
                window['$LM7XUR']();
            }, 0x1f4);
        }
    });
    e7njr && e7njr[W[31049]](w3czy => {});
}, window['$LMURX7'] = function () {
    console[W[488]](W[31506]);
    var l81b6 = wx[W[31501]]({
        'name': W[31507],
        'success': function (apx5) {
            console[W[488]](W[31508]), console[W[488]](apx5), apx5 && apx5[W[26546]] == W[31504] ? (window['$LU7X'] = !![], window['$LX7UR'](), window['$LXUR7']()) : setTimeout(function () {
                window['$LMURX7']();
            }, 0x1f4);
        },
        'fail': function (yv3) {
            console[W[488]](W[31509]), console[W[488]](yv3), setTimeout(function () {
                window['$LMURX7']();
            }, 0x1f4);
        }
    });
    l81b6 && l81b6[W[31049]](z6v3_2 => {});
}, window[W[31510]] = function () {
    window['$LM7XRU'](window[W[31486]], W[31511]) >= 0x0 ? (console[W[488]](W[31512] + window[W[31486]] + W[31513]), window['$LUR'](), window['$LM7XUR'](), window['$LMURX7']()) : (window['$LUXR'](W[31514], window[W[31486]]), wx[W[31494]]({
        'title': W[5669],
        'content': W[31515]
    }));
}, window[W[31478]] = '', wx[W[31516]]({
    'success'(m4q0) {
        window[W[31478]] = W[31517] + m4q0[W[31518]] + W[31519] + m4q0[W[31520]] + W[31521] + m4q0[W[4945]] + W[31522] + m4q0[W[481]] + W[31523] + m4q0[W[26312]] + W[31524] + m4q0[W[31486]] + W[31525] + m4q0[W[9053]], console[W[488]](window[W[31478]]), console[W[488]](W[31526] + m4q0[W[31527]] + W[31528] + m4q0[W[31529]] + W[31530] + m4q0[W[31531]] + W[31532] + m4q0[W[31533]] + W[31534] + m4q0[W[31535]] + W[31536] + m4q0[W[31537]] + W[31538] + (m4q0[W[31539]] ? m4q0[W[31539]][W[323]] + ',' + m4q0[W[31539]][W[1277]] + ',' + m4q0[W[31539]][W[1279]] + ',' + m4q0[W[31539]][W[1278]] : ''));
        var $tog0m = m4q0[W[481]] ? m4q0[W[481]][W[12403]]() : '',
            f8bld = m4q0[W[31520]] ? m4q0[W[31520]][W[12403]]()[W[4372]]('\x20', '') : '';
        window['$LUX'][W[1117]] = $tog0m[W[115]](W[31540]) != -0x1, window['$LUX'][W[11187]] = $tog0m[W[115]](W[31541]) != -0x1, window['$LUX'][W[31542]] = $tog0m[W[115]](W[31540]) != -0x1 || $tog0m[W[115]](W[31541]) != -0x1, window['$LUX'][W[26031]] = $tog0m[W[115]](W[31543]) != -0x1 || $tog0m[W[115]](W[31544]) != -0x1, window['$LUX'][W[31545]] = m4q0[W[26312]] ? m4q0[W[26312]][W[12403]]() : '', window['$LUX']['$LMR7XU'] = ![], window['$LUX']['$LMRU7X'] = 0x2;
        if ($tog0m[W[115]](W[31541]) != -0x1) {
            if (m4q0[W[9053]] >= 0x18) window['$LUX']['$LMRU7X'] = 0x3;else window['$LUX']['$LMRU7X'] = 0x2;
        } else {
            if ($tog0m[W[115]](W[31540]) != -0x1) {
                if (m4q0[W[9053]] && m4q0[W[9053]] >= 0x14) window['$LUX']['$LMRU7X'] = 0x3;else {
                    if (f8bld[W[115]](W[31546]) != -0x1 || f8bld[W[115]](W[31547]) != -0x1 || f8bld[W[115]](W[31548]) != -0x1 || f8bld[W[115]](W[31549]) != -0x1 || f8bld[W[115]](W[31550]) != -0x1) window['$LUX']['$LMRU7X'] = 0x2;else window['$LUX']['$LMRU7X'] = 0x3;
                }
            } else window['$LUX']['$LMRU7X'] = 0x2;
        }
        console[W[488]](W[31551] + window['$LUX']['$LMR7XU'] + W[31552] + window['$LUX']['$LMRU7X']);
    }
}), wx[W[31553]]({
    'success': function (dau9xf) {
        console[W[488]](W[31554] + dau9xf[W[4232]] + W[31555] + dau9xf[W[31556]]);
    }
}), wx[W[11744]]({
    'success': function (a5sp4) {
        console[W[488]](W[31557] + a5sp4[W[13314]]);
    }
}), wx[W[31558]]({ 'keepScreenOn': !![] }), wx[W[11746]](function (pa9sx5) {
    console[W[488]](W[31557] + pa9sx5[W[13314]] + W[31559] + pa9sx5[W[31560]]);
}), wx[W[10678]](function (xdu95a) {
    window['$L7R'] = xdu95a, window['$LXR7'] && window['$L7R'] && (console[W[78]](W[31561] + window['$L7R'][W[818]]), window['$LXR7'](window['$L7R']), window['$L7R'] = null);
}), window[W[31562]] = 0x0, window['$LMU7XR'] = 0x0, window[W[31563]] = null, wx[W[31564]](function () {
    window['$LMU7XR']++;
    var p04hq = Date[W[83]]();
    (window[W[31562]] == 0x0 || p04hq - window[W[31562]] > 0x1d4c0) && (console[W[96]](W[31565]), wx[W[11930]]());
    if (window['$LMU7XR'] >= 0x2) {
        window['$LMU7XR'] = 0x0, console[W[125]](W[31566]), wx[W[31567]]('0', 0x1);
        if (window['$LUX'] && window['$LUX'][W[1117]]) window['$LUXR'](W[31568], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});