var b = wx.$e;
console[b[82]](b[37435]), window[b[37436]], wx[b[37437]](function (dompzx) {
    if (dompzx) {
        if (dompzx[b[4666]]) {
            var tewga4 = window[b[619]][b[37438]][b[4366]](new RegExp(/\./, 'g'), '_'),
                t4gjkf = dompzx[b[4666]],
                gktf$j = t4gjkf[b[13088]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
            if (gktf$j) for (var aiebwv = 0x0; aiebwv < gktf$j[b[13]]; aiebwv++) {
                if (gktf$j[aiebwv] && gktf$j[aiebwv][b[13]] > 0x0) {
                    var pj2x$o = parseInt(gktf$j[aiebwv][b[4366]](b[37439], '')[b[4366]](':', ''));
                    t4gjkf = t4gjkf[b[4366]](gktf$j[aiebwv], gktf$j[aiebwv][b[4366]](':' + pj2x$o + ':', ':' + (pj2x$o - 0x2) + ':'));
                }
            }
            t4gjkf = t4gjkf[b[4366]](new RegExp(b[37440], 'g'), b[37441] + tewga4 + b[28486]), t4gjkf = t4gjkf[b[4366]](new RegExp(b[37442], 'g'), b[37441] + tewga4 + b[28486]), dompzx[b[4666]] = t4gjkf;
        }
        var bagw = {
            'id': window[b[4664]][b[37443]],
            'role': window[b[4664]][b[4797]],
            'level': window[b[4664]][b[37444]],
            'user': window[b[4664]][b[28380]],
            'version': window[b[4664]][b[110]],
            'cdn': window[b[4664]][b[4661]],
            'pkgName': window[b[4664]][b[28382]],
            'gamever': window[b[619]][b[37438]],
            'serverid': window[b[4664]][b[28376]] ? window[b[4664]][b[28376]][b[12142]] : 0x0,
            'systemInfo': window[b[37445]],
            'error': b[37446],
            'stack': dompzx ? dompzx[b[4666]] : ''
        },
            weg4ta = JSON[b[4647]](bagw);
        console[b[144]](b[37447] + weg4ta), (!window[b[37436]] || window[b[37436]] != bagw[b[144]]) && (window[b[37436]] = bagw[b[144]], window['e1$G'](bagw));
    }
});
import 'eeemd5min.js';
import 'eeezlibs.js';
window[b[37448]] = require(b[37449]);
import 'eeeindex.js';
import 'eeelibsmin.js';
import 'eeewxmini.js';
import 'eeeinitmin.js';
console[b[82]](b[37450]), console[b[82]](b[37451]), e1$GYM({ 'title': b[37452] });
var es8h63q = { 'e1F$MGY': !![] };
new window[b[37453]](es8h63q), window[b[37453]][b[167]]['e1FYGM$']();
if (window['e1F$GMY']) clearInterval(window['e1F$GMY']);
window['e1F$GMY'] = null, window['e1FYM$G'] = function (fk$2j, $x2opm) {
    if (!fk$2j || !$x2opm) return 0x0;
    fk$2j = fk$2j[b[15]]('.'), $x2opm = $x2opm[b[15]]('.');
    const gtj4f = Math[b[188]](fk$2j[b[13]], $x2opm[b[13]]);
    while (fk$2j[b[13]] < gtj4f) {
        fk$2j[b[30]]('0');
    }
    while ($x2opm[b[13]] < gtj4f) {
        $x2opm[b[30]]('0');
    }
    for (var gj4kt = 0x0; gj4kt < gtj4f; gj4kt++) {
        const j2tkf$ = parseInt(fk$2j[gj4kt]),
              tf2k$ = parseInt($x2opm[gj4kt]);
        if (j2tkf$ > tf2k$) return 0x1;else {
            if (j2tkf$ < tf2k$) return -0x1;
        }
    }
    return 0x0;
}, window[b[37454]] = wx[b[37455]]()[b[37454]], console[b[543]](b[37456] + window[b[37454]]);
var ep$2fxj = wx[b[37457]]();
ep$2fxj[b[37458]](function (zd9p) {
    console[b[543]](b[37459] + zd9p[b[37460]]);
}), ep$2fxj[b[37461]](function () {
    wx[b[37462]]({
        'title': b[37463],
        'content': b[37464],
        'showCancel': ![],
        'success': function (n_5y7) {
            ep$2fxj[b[37465]]();
        }
    });
}), ep$2fxj[b[37466]](function () {
    console[b[543]](b[37467]);
}), window['e1FYMG$'] = function () {
    console[b[543]](b[37468]);
    var pzmdo9 = wx[b[37469]]({
        'name': b[37470],
        'success': function (katgf4) {
            console[b[543]](b[37471]), console[b[543]](katgf4), katgf4 && katgf4[b[27995]] == b[37472] ? (window[b[37473]] = !![], window['e1MYG$'](), window['e1MG$Y']()) : setTimeout(function () {
                window['e1FYMG$']();
            }, 0x1f4);
        },
        'fail': function (gk$tj) {
            console[b[543]](b[37474]), console[b[543]](gk$tj), setTimeout(function () {
                window['e1FYMG$']();
            }, 0x1f4);
        }
    });
    pzmdo9 && pzmdo9[b[36697]](h83sq6 => {});
}, window['e1FG$MY'] = function () {
    console[b[543]](b[37475]);
    var jkx$2f = wx[b[37469]]({
        'name': b[37476],
        'success': function (r507cy) {
            console[b[543]](b[37477]), console[b[543]](r507cy), r507cy && r507cy[b[27995]] == b[37472] ? (window[b[37478]] = !![], window['e1MYG$'](), window['e1MG$Y']()) : setTimeout(function () {
                window['e1FG$MY']();
            }, 0x1f4);
        },
        'fail': function (lbhiq) {
            console[b[543]](b[37479]), console[b[543]](lbhiq), setTimeout(function () {
                window['e1FG$MY']();
            }, 0x1f4);
        }
    });
    jkx$2f && jkx$2f[b[36697]](wgaet4 => {});
}, window[b[37480]] = function () {
    window['e1FYM$G'](window[b[37454]], b[37481]) >= 0x0 ? (console[b[543]](b[37482] + window[b[37454]] + b[37483]), window['e1G$'](), window['e1FYMG$'](), window['e1FG$MY']()) : (window['e1GM$'](b[37484], window[b[37454]]), wx[b[37462]]({
        'title': b[6257],
        'content': b[37485]
    }));
}, window[b[37445]] = '', wx[b[37486]]({
    'success'(avebi) {
        window[b[37445]] = b[37487] + avebi[b[37488]] + b[37489] + avebi[b[37490]] + b[37491] + avebi[b[5498]] + b[37492] + avebi[b[536]] + b[37493] + avebi[b[28334]] + b[37494] + avebi[b[37454]] + b[37495] + avebi[b[9789]], console[b[543]](window[b[37445]]), console[b[543]](b[37496] + avebi[b[32516]] + b[37497] + avebi[b[37498]] + b[37499] + avebi[b[37500]] + b[37501] + avebi[b[37502]] + b[37503] + avebi[b[37504]] + b[37505] + avebi[b[37506]] + b[37507] + (avebi[b[37508]] ? avebi[b[37508]][b[373]] + ',' + avebi[b[37508]][b[1406]] + ',' + avebi[b[37508]][b[1408]] + ',' + avebi[b[37508]][b[1407]] : ''));
        var n57cyr = avebi[b[536]] ? avebi[b[536]][b[13411]]() : '',
            $fj2 = avebi[b[37490]] ? avebi[b[37490]][b[13411]]()[b[4366]]('\x20', '') : '';
        window[b[4664]][b[1189]] = n57cyr[b[125]](b[37509]) != -0x1, window[b[4664]][b[11966]] = n57cyr[b[125]](b[37407]) != -0x1, window[b[4664]][b[37510]] = n57cyr[b[125]](b[37509]) != -0x1 || n57cyr[b[125]](b[37407]) != -0x1, window[b[4664]][b[28007]] = n57cyr[b[125]](b[37511]) != -0x1 || n57cyr[b[125]](b[37512]) != -0x1, window[b[4664]][b[37513]] = avebi[b[28334]] ? avebi[b[28334]][b[13411]]() : '', window[b[4664]]['e1F$YMG'] = ![], window[b[4664]]['e1F$GYM'] = 0x2;
        if (n57cyr[b[125]](b[37407]) != -0x1) {
            if (avebi[b[9789]] >= 0x18) window[b[4664]]['e1F$GYM'] = 0x3;else window[b[4664]]['e1F$GYM'] = 0x2;
        } else {
            if (n57cyr[b[125]](b[37509]) != -0x1) {
                if (avebi[b[9789]] && avebi[b[9789]] >= 0x14) window[b[4664]]['e1F$GYM'] = 0x3;else {
                    if ($fj2[b[125]](b[37514]) != -0x1 || $fj2[b[125]](b[37515]) != -0x1 || $fj2[b[125]](b[37516]) != -0x1 || $fj2[b[125]](b[37517]) != -0x1 || $fj2[b[125]](b[37518]) != -0x1) window[b[4664]]['e1F$GYM'] = 0x2;else window[b[4664]]['e1F$GYM'] = 0x3;
                }
            } else window[b[4664]]['e1F$GYM'] = 0x2;
        }
        console[b[543]](b[37519] + window[b[4664]]['e1F$YMG'] + b[37520] + window[b[4664]]['e1F$GYM']);
    }
}), wx[b[37521]]({
    'success': function (mpdxo) {
        console[b[543]](b[37522] + mpdxo[b[4773]] + b[37523] + mpdxo[b[37524]]);
    }
}), wx[b[12527]]({
    'success': function (hbvlq) {
        console[b[543]](b[37525] + hbvlq[b[14580]]);
    }
}), wx[b[37526]]({ 'keepScreenOn': !![] }), wx[b[12529]](function (qebvli) {
    console[b[543]](b[37525] + qebvli[b[14580]] + b[37527] + qebvli[b[37528]]);
}), wx[b[11455]](function (sq36h8) {
    window['e1Y$'] = sq36h8, window['e1M$Y'] && window['e1Y$'] && (console[b[82]](b[37529] + window['e1Y$'][b[887]]), window['e1M$Y'](window['e1Y$']), window['e1Y$'] = null);
}), window[b[37530]] = 0x0, window['e1FGYM$'] = 0x0, window[b[37531]] = null, wx[b[37532]](function () {
    window['e1FGYM$']++;
    var $m2pox = Date[b[87]]();
    (window[b[37530]] == 0x0 || $m2pox - window[b[37530]] > 0x1d4c0) && (console[b[103]](b[37533]), wx[b[12921]]());
    if (window['e1FGYM$'] >= 0x2) {
        window['e1FGYM$'] = 0x0, console[b[144]](b[37534]), wx[b[37535]]('0', 0x1);
        if (window[b[4664]] && window[b[4664]][b[1189]]) window['e1GM$'](b[37536], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});