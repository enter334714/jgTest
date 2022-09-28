var a = wx.$y;
console[a[420083]](a[420400]), window[a[420401]], wx[a[420402]](function (um5a63) {
    if (um5a63) {
        if (um5a63[a[420403]]) {
            var m5u1d = window[a[420002]][a[420003]][a[420404]](new RegExp(/\./, 'g'), '_'),
                csk89 = um5a63[a[420403]],
                n$c = csk89[a[420405]](/(yyyyy\/yyGAMEy.js:)[0-9]{1,60}(:)/g);
            if (n$c) for (var kn2c9 = 0x0; kn2c9 < n$c[a[420194]]; kn2c9++) {
                if (n$c[kn2c9] && n$c[kn2c9][a[420194]] > 0x0) {
                    var u653ma = parseInt(n$c[kn2c9][a[420404]](a[420406], '')[a[420404]](':', ''));
                    csk89 = csk89[a[420404]](n$c[kn2c9], n$c[kn2c9][a[420404]](':' + u653ma + ':', ':' + (u653ma - 0x2) + ':'));
                }
            }
            csk89 = csk89[a[420404]](new RegExp(a[420407], 'g'), a[420408] + m5u1d + a[420409]), csk89 = csk89[a[420404]](new RegExp(a[420410], 'g'), a[420408] + m5u1d + a[420409]), um5a63[a[420403]] = csk89;
        }
        var du4t1w = {
            'id': window[a[420010]][a[420094]],
            'role': window[a[420010]][a[420095]],
            'level': window[a[420010]][a[420096]],
            'user': window[a[420010]][a[420097]],
            'version': window[a[420010]][a[420045]],
            'cdn': window[a[420010]][a[420098]],
            'pkgName': window[a[420010]][a[420028]],
            'gamever': window[a[420002]][a[420003]],
            'serverid': window[a[420010]][a[420034]] ? window[a[420010]][a[420034]][a[420099]] : 0x0,
            'systemInfo': window[a[420100]],
            'error': a[420411],
            'stack': um5a63 ? um5a63[a[420403]] : ''
        },
            s798l = JSON[a[420102]](du4t1w);
        console[a[420103]](a[420412] + s798l), (!window[a[420401]] || window[a[420401]] != du4t1w[a[420103]]) && (window[a[420401]] = du4t1w[a[420103]], window['y2$S'](du4t1w));
    }
});
import 'yybfyy.js';
import 'yy11yy.js';
window[a[420413]] = require(a[420414]);
import 'yINDyy.js';
import 'yyIB1yy.js';
import 'yyMtadyy.js';
import 'yyINIyy.js';
console[a[420083]](a[420415]), console[a[420083]](a[420416]), y2$S50({ 'title': a[420417] });
var yrvzy0 = { 'y29$0S5': !![] };
new window[a[420078]](yrvzy0), window[a[420078]][a[420079]]['y295S0$']();
if (window['y29$S05']) clearInterval(window['y29$S05']);
window['y29$S05'] = null, window['y2950$S'] = function (_7sc8l, c8_ls) {
    if (!_7sc8l || !c8_ls) return 0x0;
    _7sc8l = _7sc8l[a[420418]]('.'), c8_ls = c8_ls[a[420418]]('.');
    const wtu4d1 = Math[a[420419]](_7sc8l[a[420194]], c8_ls[a[420194]]);
    while (_7sc8l[a[420194]] < wtu4d1) {
        _7sc8l[a[420276]]('0');
    }
    while (c8_ls[a[420194]] < wtu4d1) {
        c8_ls[a[420276]]('0');
    }
    for (var g$9k2 = 0x0; g$9k2 < wtu4d1; g$9k2++) {
        const l7f_s8 = parseInt(_7sc8l[g$9k2]),
              l8c_7 = parseInt(c8_ls[g$9k2]);
        if (l7f_s8 > l8c_7) return 0x1;else {
            if (l7f_s8 < l8c_7) return -0x1;
        }
    }
    return 0x0;
}, window[a[420277]] = wx[a[420420]]()[a[420277]], console[a[420062]](a[420421] + window[a[420277]]);
var yjf_o = wx[a[420422]]();
yjf_o[a[420423]](function (gkin$) {
    console[a[420062]](a[420424] + gkin$[a[420425]]);
}), yjf_o[a[420426]](function () {
    wx[a[420064]]({
        'title': a[420427],
        'content': a[420428],
        'showCancel': ![],
        'success': function (vyr0x) {
            yjf_o[a[420429]]();
        }
    });
}), yjf_o[a[420430]](function () {
    console[a[420062]](a[420431]);
}), window['y2950S$'] = function () {
    console[a[420062]](a[420432]);
    var dtwhj = wx[a[420433]]({
        'name': a[420434],
        'success': function (mda5u1) {
            console[a[420062]](a[420435]), console[a[420062]](mda5u1), mda5u1 && mda5u1[a[420158]] == a[420436] ? (window[a[420052]] = !![], window['y205S$'](), window['y20S$5']()) : setTimeout(function () {
                window['y2950S$']();
            }, 0x1f4);
        },
        'fail': function (ksc9l2) {
            console[a[420062]](a[420437]), console[a[420062]](ksc9l2), setTimeout(function () {
                window['y2950S$']();
            }, 0x1f4);
        }
    });
    dtwhj && dtwhj[a[420438]](v60yr3 => {});
}, window['y29S$05'] = function () {
    console[a[420062]](a[420439]);
    var u51dam = wx[a[420433]]({
        'name': a[420440],
        'success': function (vr30yz) {
            console[a[420062]](a[420441]), console[a[420062]](vr30yz), vr30yz && vr30yz[a[420158]] == a[420436] ? (window[a[420053]] = !![], window['y205S$'](), window['y20S$5']()) : setTimeout(function () {
                window['y29S$05']();
            }, 0x1f4);
        },
        'fail': function (g$pq) {
            console[a[420062]](a[420442]), console[a[420062]](g$pq), setTimeout(function () {
                window['y29S$05']();
            }, 0x1f4);
        }
    });
    u51dam && u51dam[a[420438]](i$2gkn => {});
}, window[a[420443]] = function () {
    window['y2950$S'](window[a[420277]], a[420444]) >= 0x0 ? (console[a[420062]](a[420445] + window[a[420277]] + a[420446]), window['y2S$'](), window['y2950S$'](), window['y29S$05']()) : (window['y2S0$'](a[420447], window[a[420277]]), wx[a[420064]]({
        'title': a[420065],
        'content': a[420448]
    }));
}, window[a[420100]] = '', wx[a[420449]]({
    'success'(giq$pn) {
        window[a[420100]] = a[420450] + giq$pn[a[420451]] + a[420452] + giq$pn[a[420453]] + a[420454] + giq$pn[a[420014]] + a[420455] + giq$pn[a[420456]] + a[420457] + giq$pn[a[420180]] + a[420458] + giq$pn[a[420277]] + a[420459] + giq$pn[a[420460]], console[a[420062]](window[a[420100]]), console[a[420062]](a[420461] + giq$pn[a[420462]] + a[420463] + giq$pn[a[420464]] + a[420465] + giq$pn[a[420466]] + a[420467] + giq$pn[a[420468]] + a[420469] + giq$pn[a[420470]] + a[420471] + giq$pn[a[420472]] + a[420473] + (giq$pn[a[420474]] ? giq$pn[a[420474]][a[420378]] + ',' + giq$pn[a[420474]][a[420381]] + ',' + giq$pn[a[420474]][a[420383]] + ',' + giq$pn[a[420474]][a[420385]] : ''));
        var wfh = giq$pn[a[420456]] ? giq$pn[a[420456]][a[420475]]() : '',
            sc29k = giq$pn[a[420453]] ? giq$pn[a[420453]][a[420475]]()[a[420404]]('\x20', '') : '';
        window[a[420010]][a[420047]] = wfh[a[420159]](a[420476]) != -0x1, window[a[420010]][a[420048]] = wfh[a[420159]](a[420477]) != -0x1, window[a[420010]][a[420377]] = wfh[a[420159]](a[420476]) != -0x1 || wfh[a[420159]](a[420477]) != -0x1, window[a[420010]][a[420049]] = wfh[a[420159]](a[420478]) != -0x1 || wfh[a[420159]](a[420016]) != -0x1, window[a[420010]][a[420112]] = giq$pn[a[420180]] ? giq$pn[a[420180]][a[420475]]() : '', window[a[420010]]['y29$50S'] = ![], window[a[420010]]['y29$S50'] = 0x2;
        if (wfh[a[420159]](a[420477]) != -0x1) {
            if (giq$pn[a[420460]] >= 0x18) window[a[420010]]['y29$S50'] = 0x3;else window[a[420010]]['y29$S50'] = 0x2;
        } else {
            if (wfh[a[420159]](a[420476]) != -0x1) {
                if (giq$pn[a[420460]] && giq$pn[a[420460]] >= 0x14) window[a[420010]]['y29$S50'] = 0x3;else {
                    if (sc29k[a[420159]](a[420479]) != -0x1 || sc29k[a[420159]](a[420480]) != -0x1 || sc29k[a[420159]](a[420481]) != -0x1 || sc29k[a[420159]](a[420482]) != -0x1 || sc29k[a[420159]](a[420483]) != -0x1) window[a[420010]]['y29$S50'] = 0x2;else window[a[420010]]['y29$S50'] = 0x3;
                }
            } else window[a[420010]]['y29$S50'] = 0x2;
        }
        console[a[420062]](a[420484] + window[a[420010]]['y29$50S'] + a[420485] + window[a[420010]]['y29$S50']);
    }
}), wx[a[420296]]({
    'success': function (c$9n2) {
        console[a[420062]](a[420486] + c$9n2[a[420298]] + a[420487] + c$9n2[a[420300]]);
    }
}), wx[a[420302]]({
    'success': function (_ls8c7) {
        console[a[420062]](a[420488] + _ls8c7[a[420489]]);
    }
}), wx[a[420490]]({ 'keepScreenOn': !![] }), wx[a[420303]](function (inp$gq) {
    console[a[420062]](a[420488] + inp$gq[a[420489]] + a[420491] + inp$gq[a[420492]]);
}), wx[a[420267]](function (mdua1) {
    window['y25$'] = mdua1, window['y20$5'] && window['y25$'] && (console[a[420083]](a[420268] + window['y25$'][a[420269]]), window['y20$5'](window['y25$']), window['y25$'] = null);
}), window[a[420493]] = 0x0, window['y29S50$'] = 0x0, window[a[420494]] = null, wx[a[420495]](function () {
    window['y29S50$']++;
    var rx0yze = Date[a[420040]]();
    (window[a[420493]] == 0x0 || rx0yze - window[a[420493]] > 0x1d4c0) && (console[a[420110]](a[420496]), wx[a[420497]]());
    if (window['y29S50$'] >= 0x2) {
        window['y29S50$'] = 0x0, console[a[420103]](a[420498]), wx[a[420499]]('0', 0x1);
        if (window[a[420010]] && window[a[420010]][a[420047]]) window['y2S0$'](a[420500], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});