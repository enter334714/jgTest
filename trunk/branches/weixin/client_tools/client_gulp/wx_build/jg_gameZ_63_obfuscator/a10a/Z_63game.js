var f = wx.$B;
console[f[76]](f[915]), window[f[916]], wx[f[917]](function (s4rtw) {
    if (s4rtw) {
        if (s4rtw[f[918]]) {
            var z1el5 = window[f[1]][f[2]][f[725]](new RegExp(/\./, 'g'), '_'),
                pw$8x = s4rtw[f[918]],
                ah6my = pw$8x[f[879]](/(ai\/Z_63game.js:)[0-9]{1,60}(:)/g);
            if (ah6my) for (var u9a6m = 0x0; u9a6m < ah6my[f[192]]; u9a6m++) {
                if (ah6my[u9a6m] && ah6my[u9a6m][f[192]] > 0x0) {
                    var rw$8tx = parseInt(ah6my[u9a6m][f[725]](f[919], '')[f[725]](':', ''));
                    pw$8x = pw$8x[f[725]](ah6my[u9a6m], ah6my[u9a6m][f[725]](':' + rw$8tx + ':', ':' + (rw$8tx - 0x2) + ':'));
                }
            }
            pw$8x = pw$8x[f[725]](new RegExp(f[920], 'g'), f[921] + z1el5 + f[922]), pw$8x = pw$8x[f[725]](new RegExp(f[923], 'g'), f[921] + z1el5 + f[922]), s4rtw[f[918]] = pw$8x;
        }
        var qzjo1 = {
            'id': window['t1W$'][f[88]],
            'role': window['t1W$'][f[89]],
            'level': window['t1W$'][f[90]],
            'user': window['t1W$'][f[91]],
            'version': window['t1W$'][f[43]],
            'cdn': window['t1W$'][f[92]],
            'pkgName': window['t1W$'][f[24]],
            'gamever': window[f[1]][f[2]],
            'serverid': window['t1W$'][f[30]] ? window['t1W$'][f[30]][f[93]] : 0x0,
            'systemInfo': window[f[94]],
            'error': f[924],
            'stack': s4rtw ? s4rtw[f[918]] : ''
        },
            trws7 = JSON[f[96]](qzjo1);
        console[f[97]](f[925] + trws7), (!window[f[916]] || window[f[916]] != qzjo1[f[97]]) && (window[f[916]] = qzjo1[f[97]], window[f[31]](qzjo1));
    }
});
import 'a0b.js';
import 'a1cj6v.js';
window[f[926]] = require(f[927]);
import 'a5v.js';
import 'eh.js';
import 'a9f.js';
import 'jdx.js';
console[f[76]](f[928]), console[f[76]](f[929]), t1XWH$({ 'title': f[930] });
var Samqjuo = { 't18X$WH': !![] };
new window[f[71]](Samqjuo), window[f[71]][f[72]]['t18HW$X']();
if (window['t18XW$H']) clearInterval(window['t18XW$H']);
window['t18XW$H'] = null, window['t18H$XW'] = function (lzeq5, ma96uy) {
    if (!lzeq5 || !ma96uy) return 0x0;
    lzeq5 = lzeq5[f[240]]('.'), ma96uy = ma96uy[f[240]]('.');
    const ghv032 = Math[f[931]](lzeq5[f[192]], ma96uy[f[192]]);
    while (lzeq5[f[192]] < ghv032) {
        lzeq5[f[284]]('0');
    }
    while (ma96uy[f[192]] < ghv032) {
        ma96uy[f[284]]('0');
    }
    for (var ksb4 = 0x0; ksb4 < ghv032; ksb4++) {
        const ljqz1o = parseInt(lzeq5[ksb4]),
              wr$t87 = parseInt(ma96uy[ksb4]);
        if (ljqz1o > wr$t87) return 0x1;else {
            if (ljqz1o < wr$t87) return -0x1;
        }
    }
    return 0x0;
}, window[f[285]] = wx[f[932]]()[f[285]], console[f[54]](f[933] + window[f[285]]);
var Sfdb2vg = wx[f[934]]();
Sfdb2vg[f[935]](function (a9hm) {
    console[f[54]](f[936] + a9hm[f[937]]);
}), Sfdb2vg[f[938]](function () {
    wx[f[56]]({
        'title': f[939],
        'content': f[940],
        'showCancel': ![],
        'success': function (uom) {
            Sfdb2vg[f[941]]();
        }
    });
}), Sfdb2vg[f[942]](function () {
    console[f[54]](f[943]);
}), window['t18H$WX'] = function () {
    console[f[54]](f[944]);
    var gvf2db = wx[f[945]]({
        'name': f[946],
        'success': function (l1z5) {
            console[f[54]](f[947]), console[f[54]](l1z5), l1z5 && l1z5[f[156]] == f[948] ? (window['t1$H'] = !![], window['t1$HWX'](), window['t1$WXH']()) : setTimeout(function () {
                window['t18H$WX']();
            }, 0x1f4);
        },
        'fail': function (uyja6) {
            console[f[54]](f[949]), console[f[54]](uyja6), setTimeout(function () {
                window['t18H$WX']();
            }, 0x1f4);
        }
    });
    gvf2db && gvf2db[f[950]](nx => {});
}, window['t18WX$H'] = function () {
    console[f[54]](f[951]);
    var qze1o = wx[f[945]]({
        'name': 'ai',
        'success': function (r7k4) {
            console[f[54]](f[952]), console[f[54]](r7k4), r7k4 && r7k4[f[156]] == f[948] ? (window['t1WH$'] = !![], window['t1$HWX'](), window['t1$WXH']()) : setTimeout(function () {
                window['t18WX$H']();
            }, 0x1f4);
        },
        'fail': function (tsrw8) {
            console[f[54]](f[953]), console[f[54]](tsrw8), setTimeout(function () {
                window['t18WX$H']();
            }, 0x1f4);
        }
    });
    qze1o && qze1o[f[950]](u6ya9 => {});
}, window[f[954]] = function () {
    window['t18H$XW'](window[f[285]], f[955]) >= 0x0 ? (console[f[54]](f[956] + window[f[285]] + f[957]), window[f[65]](), window['t18H$WX'](), window['t18WX$H']()) : (window['t1W$X'](f[958], window[f[285]]), wx[f[56]]({
        'title': f[57],
        'content': f[959]
    }));
}, window[f[94]] = '', wx[f[960]]({
    'success'(mqjou) {
        window[f[94]] = f[961] + mqjou[f[962]] + f[963] + mqjou[f[964]] + f[965] + mqjou[f[10]] + f[966] + mqjou[f[967]] + f[968] + mqjou[f[178]] + f[969] + mqjou[f[285]] + f[970] + mqjou[f[971]], console[f[54]](window[f[94]]), console[f[54]](f[972] + mqjou[f[973]] + f[974] + mqjou[f[975]] + f[976] + mqjou[f[977]] + f[978] + mqjou[f[979]] + f[980] + mqjou[f[981]] + f[982] + mqjou[f[983]] + f[984] + (mqjou[f[985]] ? mqjou[f[985]][f[390]] + ',' + mqjou[f[985]][f[393]] + ',' + mqjou[f[985]][f[395]] + ',' + mqjou[f[985]][f[397]] : ''));
        var bk2d = mqjou[f[967]] ? mqjou[f[967]][f[986]]() : '',
            iwr8x = mqjou[f[964]] ? mqjou[f[964]][f[986]]()[f[725]]('\x20', '') : '';
        window['t1W$'][f[45]] = bk2d[f[157]](f[987]) != -0x1, window['t1W$'][f[46]] = bk2d[f[157]](f[988]) != -0x1, window['t1W$'][f[389]] = bk2d[f[157]](f[987]) != -0x1 || bk2d[f[157]](f[988]) != -0x1, window['t1W$'][f[47]] = bk2d[f[157]](f[989]) != -0x1 || bk2d[f[157]](f[12]) != -0x1, window['t1W$'][f[106]] = mqjou[f[178]] ? mqjou[f[178]][f[986]]() : '', window['t1W$']['t18XH$W'] = ![], window['t1W$']['t18XWH$'] = 0x2;
        if (bk2d[f[157]](f[988]) != -0x1) {
            if (mqjou[f[971]] >= 0x18) window['t1W$']['t18XWH$'] = 0x3;else window['t1W$']['t18XWH$'] = 0x2;
        } else {
            if (bk2d[f[157]](f[987]) != -0x1) {
                if (mqjou[f[971]] && mqjou[f[971]] >= 0x14) window['t1W$']['t18XWH$'] = 0x3;else {
                    if (iwr8x[f[157]](f[990]) != -0x1 || iwr8x[f[157]](f[991]) != -0x1 || iwr8x[f[157]](f[992]) != -0x1 || iwr8x[f[157]](f[993]) != -0x1 || iwr8x[f[157]](f[994]) != -0x1) window['t1W$']['t18XWH$'] = 0x2;else window['t1W$']['t18XWH$'] = 0x3;
                }
            } else window['t1W$']['t18XWH$'] = 0x2;
        }
        console[f[54]](f[995] + window['t1W$']['t18XH$W'] + f[996] + window['t1W$']['t18XWH$']);
    }
}), wx[f[304]]({
    'success': function (bkdg2) {
        console[f[54]](f[997] + bkdg2[f[306]] + f[998] + bkdg2[f[308]]);
    }
}), wx[f[310]]({
    'success': function (hy6m9a) {
        console[f[54]](f[999] + hy6m9a[f[1000]]);
    }
}), wx[f[1001]]({ 'keepScreenOn': !![] }), wx[f[311]](function (ma9y6u) {
    console[f[54]](f[999] + ma9y6u[f[1000]] + f[1002] + ma9y6u[f[1003]]);
}), wx[f[274]](function (kdg4bf) {
    window[f[275]] = kdg4bf, window['t1$XH'] && window[f[275]] && (console[f[76]](f[276] + window[f[275]][f[277]]), window['t1$XH'](window[f[275]]), window[f[275]] = null);
}), window[f[1004]] = 0x0, window['t18WH$X'] = 0x0, window[f[1005]] = null, wx[f[1006]](function () {
    window['t18WH$X']++;
    var amuq = Date[f[37]]();
    (window[f[1004]] == 0x0 || amuq - window[f[1004]] > 0x1d4c0) && (console[f[104]](f[1007]), wx[f[1008]]());
    if (window['t18WH$X'] >= 0x2) {
        window['t18WH$X'] = 0x0, console[f[97]](f[1009]), wx[f[1010]]('0', 0x1);
        if (window['t1W$'] && window['t1W$'][f[45]]) window['t1W$X'](f[1011], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});