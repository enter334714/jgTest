var g = wx.$Q;
console[g[260001]](g[260002]), window[g[260003]], wx[g[260004]](function (jmh14) {
    if (jmh14) {
        if (jmh14[g[260005]]) {
            var f0la2p = window[g[260006]][g[260007]][g[260008]](new RegExp(/\./, 'g'), '_'),
                drtz$ = jmh14[g[260005]],
                blpgfa = drtz$[g[260009]](/(qmmmq\/qGAMEqq.js:)[0-9]{1,60}(:)/g);
            if (blpgfa) for (var x52f = 0x0; x52f < blpgfa[g[260010]]; x52f++) {
                if (blpgfa[x52f] && blpgfa[x52f][g[260010]] > 0x0) {
                    var paglib = parseInt(blpgfa[x52f][g[260008]](g[260011], '')[g[260008]](':', ''));
                    drtz$ = drtz$[g[260008]](blpgfa[x52f], blpgfa[x52f][g[260008]](':' + paglib + ':', ':' + (paglib - 0x2) + ':'));
                }
            }
            drtz$ = drtz$[g[260008]](new RegExp(g[260012], 'g'), g[260013] + f0la2p + g[260014]), drtz$ = drtz$[g[260008]](new RegExp(g[260015], 'g'), g[260013] + f0la2p + g[260014]), jmh14[g[260005]] = drtz$;
        }
        var bpagl = {
            'id': window[g[260016]][g[260017]],
            'role': window[g[260016]][g[260018]],
            'level': window[g[260016]][g[260019]],
            'user': window[g[260016]][g[260020]],
            'version': window[g[260016]][g[260021]],
            'cdn': window[g[260016]][g[260022]],
            'pkgName': window[g[260016]][g[260023]],
            'gamever': window[g[260006]][g[260007]],
            'serverid': window[g[260016]][g[260024]] ? window[g[260016]][g[260024]][g[260025]] : 0x0,
            'systemInfo': window[g[260026]],
            'error': g[260027],
            'stack': jmh14 ? jmh14[g[260005]] : ''
        },
            h4m81 = JSON[g[260028]](bpagl);
        console[g[260029]](g[260030] + h4m81), (!window[g[260003]] || window[g[260003]] != bpagl[g[260029]]) && (window[g[260003]] = bpagl[g[260029]], window[g[260031]](bpagl));
    }
});
import 'qsfs32q.js';
import 'qq12qq.js';
window[g[260032]] = require(g[260033]);
import 'qINDEXq.js';
import 'qqLIB12q.js';
import 'qWXMsadqq.js';
import 'qqINITMINqq.js';
console[g[260001]](g[260034]), console[g[260001]](g[260035]), _qYOU7({ 'title': g[260036] });
var q_z$rdc = { '_qAY7OU': !![] };
new window[g[260037]](q_z$rdc), window[g[260037]][g[260038]][g[260039]]();
if (window[g[260040]]) clearInterval(window[g[260040]]);
window[g[260040]] = null, window[g[260041]] = function (y23x05, bavi) {
    if (!y23x05 || !bavi) return 0x0;
    y23x05 = y23x05[g[260042]]('.'), bavi = bavi[g[260042]]('.');
    const $9oze_ = Math[g[260043]](y23x05[g[260010]], bavi[g[260010]]);
    while (y23x05[g[260010]] < $9oze_) {
        y23x05[g[260044]]('0');
    }
    while (bavi[g[260010]] < $9oze_) {
        bavi[g[260044]]('0');
    }
    for (var sju8wq = 0x0; sju8wq < $9oze_; sju8wq++) {
        const m1on46 = parseInt(y23x05[sju8wq]),
              drtkc = parseInt(bavi[sju8wq]);
        if (m1on46 > drtkc) return 0x1;else {
            if (m1on46 < drtkc) return -0x1;
        }
    }
    return 0x0;
}, window[g[260045]] = wx[g[260046]]()[g[260045]], console[g[260047]](g[260048] + window[g[260045]]);
var q_dctz = wx[g[260049]]();
q_dctz[g[260050]](function ($_ezr9) {
    console[g[260047]](g[260051] + $_ezr9[g[260052]]);
}), q_dctz[g[260053]](function () {
    wx[g[260054]]({
        'title': g[260055],
        'content': g[260056],
        'showCancel': ![],
        'success': function (sq8uwj) {
            q_dctz[g[260057]]();
        }
    });
}), q_dctz[g[260058]](function () {
    console[g[260047]](g[260059]);
}), window[g[260060]] = function () {
    console[g[260047]](g[260061]);
    var dkryt = wx[g[260062]]({
        'name': g[260063],
        'success': function (fpbga) {
            console[g[260047]](g[260064]), console[g[260047]](fpbga), fpbga && fpbga[g[260065]] == g[260066] ? (window[g[260067]] = !![], window[g[260068]](), window[g[260069]]()) : setTimeout(function () {
                window[g[260060]]();
            }, 0x1f4);
        },
        'fail': function (_$9eon) {
            console[g[260047]](g[260070]), console[g[260047]](_$9eon), setTimeout(function () {
                window[g[260060]]();
            }, 0x1f4);
        }
    });
    dkryt && dkryt[g[260071]](ctd$ => {});
}, window[g[260072]] = function () {
    console[g[260047]](g[260073]);
    var livga = wx[g[260062]]({
        'name': g[260074],
        'success': function (m9oe6) {
            console[g[260047]](g[260075]), console[g[260047]](m9oe6), m9oe6 && m9oe6[g[260065]] == g[260066] ? (window[g[260076]] = !![], window[g[260068]](), window[g[260069]]()) : setTimeout(function () {
                window[g[260072]]();
            }, 0x1f4);
        },
        'fail': function (vlgabi) {
            console[g[260047]](g[260077]), console[g[260047]](vlgabi), setTimeout(function () {
                window[g[260072]]();
            }, 0x1f4);
        }
    });
    livga && livga[g[260071]](yxkt35 => {});
}, window[g[260078]] = function () {
    window[g[260041]](window[g[260045]], g[260079]) >= 0x0 ? (console[g[260047]](g[260080] + window[g[260045]] + g[260081]), window[g[260082]](), window[g[260060]](), window[g[260072]]()) : (window[g[260083]](g[260084], window[g[260045]]), wx[g[260054]]({
        'title': g[260085],
        'content': g[260086]
    }));
}, window[g[260026]] = '', wx[g[260087]]({
    'success'(px03f2) {
        window[g[260026]] = g[260088] + px03f2[g[260089]] + g[260090] + px03f2[g[260091]] + g[260092] + px03f2[g[260093]] + g[260094] + px03f2[g[260095]] + g[260096] + px03f2[g[260097]] + g[260098] + px03f2[g[260045]] + g[260099] + px03f2[g[260100]], console[g[260047]](window[g[260026]]), console[g[260047]](g[260101] + px03f2[g[260102]] + g[260103] + px03f2[g[260104]] + g[260105] + px03f2[g[260106]] + g[260107] + px03f2[g[260108]] + g[260109] + px03f2[g[260110]] + g[260111] + px03f2[g[260112]] + g[260113] + (px03f2[g[260114]] ? px03f2[g[260114]][g[260115]] + ',' + px03f2[g[260114]][g[260116]] + ',' + px03f2[g[260114]][g[260117]] + ',' + px03f2[g[260114]][g[260118]] : ''));
        var ws8ju = px03f2[g[260095]] ? px03f2[g[260095]][g[260119]]() : '',
            fpblga = px03f2[g[260091]] ? px03f2[g[260091]][g[260119]]()[g[260008]]('\x20', '') : '';
        window[g[260016]][g[260120]] = ws8ju[g[260121]](g[260122]) != -0x1, window[g[260016]][g[260123]] = ws8ju[g[260121]](g[260124]) != -0x1, window[g[260016]][g[260125]] = ws8ju[g[260121]](g[260122]) != -0x1 || ws8ju[g[260121]](g[260124]) != -0x1, window[g[260016]][g[260126]] = ws8ju[g[260121]](g[260127]) != -0x1 || ws8ju[g[260121]](g[260128]) != -0x1, window[g[260016]][g[260129]] = px03f2[g[260097]] ? px03f2[g[260097]][g[260119]]() : '', window[g[260016]][g[260130]] = ![], window[g[260016]][g[260131]] = 0x2;
        if (ws8ju[g[260121]](g[260124]) != -0x1) {
            if (px03f2[g[260100]] >= 0x18) window[g[260016]][g[260131]] = 0x3;else window[g[260016]][g[260131]] = 0x2;
        } else {
            if (ws8ju[g[260121]](g[260122]) != -0x1) {
                if (px03f2[g[260100]] && px03f2[g[260100]] >= 0x14) window[g[260016]][g[260131]] = 0x3;else {
                    if (fpblga[g[260121]](g[260132]) != -0x1 || fpblga[g[260121]](g[260133]) != -0x1 || fpblga[g[260121]](g[260134]) != -0x1 || fpblga[g[260121]](g[260135]) != -0x1 || fpblga[g[260121]](g[260136]) != -0x1) window[g[260016]][g[260131]] = 0x2;else window[g[260016]][g[260131]] = 0x3;
                }
            } else window[g[260016]][g[260131]] = 0x2;
        }
        console[g[260047]](g[260137] + window[g[260016]][g[260130]] + g[260138] + window[g[260016]][g[260131]]);
    }
}), wx[g[260139]]({
    'success': function (re9z$) {
        console[g[260047]](g[260140] + re9z$[g[260141]] + g[260142] + re9z$[g[260143]]);
    }
}), wx[g[260144]]({
    'success': function (y23x50) {
        console[g[260047]](g[260145] + y23x50[g[260146]]);
    }
}), wx[g[260147]]({ 'keepScreenOn': !![] }), wx[g[260148]](function (bigp) {
    console[g[260047]](g[260145] + bigp[g[260146]] + g[260149] + bigp[g[260150]]);
}), wx[g[260151]](function (cdktrz) {
    window[g[260152]] = cdktrz, window[g[260153]] && window[g[260152]] && (console[g[260001]](g[260154] + window[g[260152]][g[260155]]), window[g[260153]](window[g[260152]]), window[g[260152]] = null);
}), window[g[260156]] = 0x0, window[g[260157]] = 0x0, window[g[260158]] = null, wx[g[260159]](function () {
    window[g[260157]]++;
    var jhs48 = Date[g[260160]]();
    (window[g[260156]] == 0x0 || jhs48 - window[g[260156]] > 0x1d4c0) && (console[g[260161]](g[260162]), wx[g[260163]]());
    if (window[g[260157]] >= 0x2) {
        window[g[260157]] = 0x0, console[g[260029]](g[260164]), wx[g[260165]]('0', 0x1);
        if (window[g[260016]] && window[g[260016]][g[260120]]) window[g[260083]](g[260166], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});