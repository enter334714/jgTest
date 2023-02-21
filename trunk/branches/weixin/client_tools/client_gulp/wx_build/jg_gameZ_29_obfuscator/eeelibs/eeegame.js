var b = wx.$e;
console[b[80]](b[34975]), window[b[34976]], wx[b[34977]](function (y783) {
    if (y783) {
        if (y783[b[4454]]) {
            var m9odp = window[b[592]][b[34978]][b[4155]](new RegExp(/\./, 'g'), '_'),
                lsi = y783[b[4454]],
                lvhqsi = lsi[b[12643]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
            if (lvhqsi) for (var ktawg = 0x0; ktawg < lvhqsi[b[14]]; ktawg++) {
                if (lvhqsi[ktawg] && lvhqsi[ktawg][b[14]] > 0x0) {
                    var webia = parseInt(lvhqsi[ktawg][b[4155]](b[34979], '')[b[4155]](':', ''));
                    lsi = lsi[b[4155]](lvhqsi[ktawg], lvhqsi[ktawg][b[4155]](':' + webia + ':', ':' + (webia - 0x2) + ':'));
                }
            }
            lsi = lsi[b[4155]](new RegExp(b[34980], 'g'), b[34981] + m9odp + b[27561]), lsi = lsi[b[4155]](new RegExp(b[34982], 'g'), b[34981] + m9odp + b[27561]), y783[b[4454]] = lsi;
        }
        var evbw = {
            'id': window[b[4452]][b[34983]],
            'role': window[b[4452]][b[4583]],
            'level': window[b[4452]][b[34984]],
            'user': window[b[4452]][b[27450]],
            'version': window[b[4452]][b[107]],
            'cdn': window[b[4452]][b[4449]],
            'pkgName': window[b[4452]][b[27452]],
            'gamever': window[b[592]][b[34978]],
            'serverid': window[b[4452]][b[27446]] ? window[b[4452]][b[27446]][b[11835]] : 0x0,
            'systemInfo': window[b[34985]],
            'error': b[34986],
            'stack': y783 ? y783[b[4454]] : ''
        },
            mp2ox = JSON[b[4435]](evbw);
        console[b[141]](b[34987] + mp2ox), (!window[b[34976]] || window[b[34976]] != evbw[b[141]]) && (window[b[34976]] = evbw[b[141]], window['e1$G'](evbw));
    }
});
import 'eeemd5min.js';
import 'eeezlibs.js';
window[b[34988]] = require(b[34989]);
import 'eeeindex.js';
import 'eeelibsmin.js';
import 'eeewxmini.js';
import 'eeeinitmin.js';
console[b[80]](b[34990]), console[b[80]](b[34991]), e1$GYM({ 'title': b[34992] });
var ed9zo1 = { 'e1F$MGY': !![] };
new window[b[34993]](ed9zo1), window[b[34993]][b[164]]['e1FYGM$']();
if (window['e1F$GMY']) clearInterval(window['e1F$GMY']);
window['e1F$GMY'] = null, window['e1FYM$G'] = function ($pjxo2, b4eaw) {
    if (!$pjxo2 || !b4eaw) return 0x0;
    $pjxo2 = $pjxo2[b[16]]('.'), b4eaw = b4eaw[b[16]]('.');
    const hlqis = Math[b[939]]($pjxo2[b[14]], b4eaw[b[14]]);
    while ($pjxo2[b[14]] < hlqis) {
        $pjxo2[b[31]]('0');
    }
    while (b4eaw[b[14]] < hlqis) {
        b4eaw[b[31]]('0');
    }
    for (var silqvh = 0x0; silqvh < hlqis; silqvh++) {
        const $jpx = parseInt($pjxo2[silqvh]),
              ftg$k = parseInt(b4eaw[silqvh]);
        if ($jpx > ftg$k) return 0x1;else {
            if ($jpx < ftg$k) return -0x1;
        }
    }
    return 0x0;
}, window[b[34994]] = wx[b[34995]]()[b[34994]], console[b[516]](b[34996] + window[b[34994]]);
var eievw = wx[b[34997]]();
eievw[b[34998]](function (yc75nr) {
    console[b[516]](b[34999] + yc75nr[b[35000]]);
}), eievw[b[35001]](function () {
    wx[b[35002]]({
        'title': b[35003],
        'content': b[35004],
        'showCancel': ![],
        'success': function (waev4) {
            eievw[b[35005]]();
        }
    });
}), eievw[b[35006]](function () {
    console[b[516]](b[35007]);
}), window['e1FYMG$'] = function () {
    console[b[516]](b[35008]);
    var isl = wx[b[35009]]({
        'name': b[35010],
        'success': function (f$xjp) {
            console[b[516]](b[35011]), console[b[516]](f$xjp), f$xjp && f$xjp[b[27663]] == b[35012] ? (window[b[35013]] = !![], window['e1MYG$'](), window['e1MG$Y']()) : setTimeout(function () {
                window['e1FYMG$']();
            }, 0x1f4);
        },
        'fail': function (iqlevb) {
            console[b[516]](b[35014]), console[b[516]](iqlevb), setTimeout(function () {
                window['e1FYMG$']();
            }, 0x1f4);
        }
    });
    isl && isl[b[34254]](mpx2zo => {});
}, window['e1FG$MY'] = function () {
    console[b[516]](b[35015]);
    var zmop9 = wx[b[35009]]({
        'name': b[35016],
        'success': function (v4ebw) {
            console[b[516]](b[35017]), console[b[516]](v4ebw), v4ebw && v4ebw[b[27663]] == b[35012] ? (window[b[35018]] = !![], window['e1MYG$'](), window['e1MG$Y']()) : setTimeout(function () {
                window['e1FG$MY']();
            }, 0x1f4);
        },
        'fail': function (t$gfj) {
            console[b[516]](b[35019]), console[b[516]](t$gfj), setTimeout(function () {
                window['e1FG$MY']();
            }, 0x1f4);
        }
    });
    zmop9 && zmop9[b[34254]](tgaw => {});
}, window[b[35020]] = function () {
    window['e1FYM$G'](window[b[34994]], b[35021]) >= 0x0 ? (console[b[516]](b[35022] + window[b[34994]] + b[35023]), window['e1G$'](), window['e1FYMG$'](), window['e1FG$MY']()) : (window['e1GM$'](b[35024], window[b[34994]]), wx[b[35002]]({
        'title': b[6039],
        'content': b[35025]
    }));
}, window[b[34985]] = '', wx[b[35026]]({
    'success'(tgka) {
        window[b[34985]] = b[35027] + tgka[b[35028]] + b[35029] + tgka[b[35030]] + b[35031] + tgka[b[5281]] + b[35032] + tgka[b[509]] + b[35033] + tgka[b[27404]] + b[35034] + tgka[b[34994]] + b[35035] + tgka[b[9520]], console[b[516]](window[b[34985]]), console[b[516]](b[35036] + tgka[b[31020]] + b[35037] + tgka[b[35038]] + b[35039] + tgka[b[35040]] + b[35041] + tgka[b[35042]] + b[35043] + tgka[b[35044]] + b[35045] + tgka[b[35046]] + b[35047] + (tgka[b[35048]] ? tgka[b[35048]][b[346]] + ',' + tgka[b[35048]][b[1373]] + ',' + tgka[b[35048]][b[1375]] + ',' + tgka[b[35048]][b[1374]] : ''));
        var t$kf2j = tgka[b[509]] ? tgka[b[509]][b[12966]]() : '',
            q6s8h3 = tgka[b[35030]] ? tgka[b[35030]][b[12966]]()[b[4155]]('\x20', '') : '';
        window[b[4452]][b[1164]] = t$kf2j[b[122]](b[35049]) != -0x1, window[b[4452]][b[11663]] = t$kf2j[b[122]](b[34953]) != -0x1, window[b[4452]][b[35050]] = t$kf2j[b[122]](b[35049]) != -0x1 || t$kf2j[b[122]](b[34953]) != -0x1, window[b[4452]][b[27095]] = t$kf2j[b[122]](b[35051]) != -0x1 || t$kf2j[b[122]](b[35052]) != -0x1, window[b[4452]][b[35053]] = tgka[b[27404]] ? tgka[b[27404]][b[12966]]() : '', window[b[4452]]['e1F$YMG'] = ![], window[b[4452]]['e1F$GYM'] = 0x2;
        if (t$kf2j[b[122]](b[34953]) != -0x1) {
            if (tgka[b[9520]] >= 0x18) window[b[4452]]['e1F$GYM'] = 0x3;else window[b[4452]]['e1F$GYM'] = 0x2;
        } else {
            if (t$kf2j[b[122]](b[35049]) != -0x1) {
                if (tgka[b[9520]] && tgka[b[9520]] >= 0x14) window[b[4452]]['e1F$GYM'] = 0x3;else {
                    if (q6s8h3[b[122]](b[35054]) != -0x1 || q6s8h3[b[122]](b[35055]) != -0x1 || q6s8h3[b[122]](b[35056]) != -0x1 || q6s8h3[b[122]](b[35057]) != -0x1 || q6s8h3[b[122]](b[35058]) != -0x1) window[b[4452]]['e1F$GYM'] = 0x2;else window[b[4452]]['e1F$GYM'] = 0x3;
                }
            } else window[b[4452]]['e1F$GYM'] = 0x2;
        }
        console[b[516]](b[35059] + window[b[4452]]['e1F$YMG'] + b[35060] + window[b[4452]]['e1F$GYM']);
    }
}), wx[b[35061]]({
    'success': function (taweg4) {
        console[b[516]](b[35062] + taweg4[b[4559]] + b[35063] + taweg4[b[35064]]);
    }
}), wx[b[12216]]({
    'success': function (gt4) {
        console[b[516]](b[35065] + gt4[b[14042]]);
    }
}), wx[b[35066]]({ 'keepScreenOn': !![] }), wx[b[12218]](function (zmdopx) {
    console[b[516]](b[35065] + zmdopx[b[14042]] + b[35067] + zmdopx[b[35068]]);
}), wx[b[11155]](function (e4bvaw) {
    window['e1Y$'] = e4bvaw, window['e1M$Y'] && window['e1Y$'] && (console[b[80]](b[35069] + window['e1Y$'][b[862]]), window['e1M$Y'](window['e1Y$']), window['e1Y$'] = null);
}), window[b[35070]] = 0x0, window['e1FGYM$'] = 0x0, window[b[35071]] = null, wx[b[35072]](function () {
    window['e1FGYM$']++;
    var t$kfj2 = Date[b[85]]();
    (window[b[35070]] == 0x0 || t$kfj2 - window[b[35070]] > 0x1d4c0) && (console[b[100]](b[35073]), wx[b[12480]]());
    if (window['e1FGYM$'] >= 0x2) {
        window['e1FGYM$'] = 0x0, console[b[141]](b[35074]), wx[b[35075]]('0', 0x1);
        if (window[b[4452]] && window[b[4452]][b[1164]]) window['e1GM$'](b[35076], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});