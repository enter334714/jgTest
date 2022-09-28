var f = wx.$B;
console[f[75]](f[889]), window[f[890]], wx[f[891]](function (gdbfk) {
    if (gdbfk) {
        if (gdbfk[f[892]]) {
            var pxn$i_ = window[f[1]][f[2]][f[699]](new RegExp(/\./, 'g'), '_'),
                tsrw87 = gdbfk[f[892]],
                gd2bf = tsrw87[f[851]](/(ai\/Z_63game.js:)[0-9]{1,60}(:)/g);
            if (gd2bf) for (var $rwi8x = 0x0; $rwi8x < gd2bf[f[187]]; $rwi8x++) {
                if (gd2bf[$rwi8x] && gd2bf[$rwi8x][f[187]] > 0x0) {
                    var $xrt = parseInt(gd2bf[$rwi8x][f[699]](f[893], '')[f[699]](':', ''));
                    tsrw87 = tsrw87[f[699]](gd2bf[$rwi8x], gd2bf[$rwi8x][f[699]](':' + $xrt + ':', ':' + ($xrt - 0x2) + ':'));
                }
            }
            tsrw87 = tsrw87[f[699]](new RegExp(f[894], 'g'), f[895] + pxn$i_ + f[896]), tsrw87 = tsrw87[f[699]](new RegExp(f[897], 'g'), f[895] + pxn$i_ + f[896]), gdbfk[f[892]] = tsrw87;
        }
        var kfbgd4 = {
            'id': window['t1W$'][f[86]],
            'role': window['t1W$'][f[87]],
            'level': window['t1W$'][f[88]],
            'user': window['t1W$'][f[89]],
            'version': window['t1W$'][f[42]],
            'cdn': window['t1W$'][f[90]],
            'pkgName': window['t1W$'][f[24]],
            'gamever': window[f[1]][f[2]],
            'serverid': window['t1W$'][f[30]] ? window['t1W$'][f[30]][f[91]] : 0x0,
            'systemInfo': window[f[92]],
            'error': f[898],
            'stack': gdbfk ? gdbfk[f[892]] : ''
        },
            jouq1 = JSON[f[94]](kfbgd4);
        console[f[95]](f[899] + jouq1), (!window[f[890]] || window[f[890]] != kfbgd4[f[95]]) && (window[f[890]] = kfbgd4[f[95]], window[f[31]](kfbgd4));
    }
});
import 'a0b.js';
import 'a1cj6v.js';
window[f[900]] = require(f[901]);
import 'a5v.js';
import 'eh.js';
import 'a9f.js';
import 'jdx.js';
console[f[75]](f[902]), console[f[75]](f[903]), t1XWH$({ 'title': f[904] });
var Sm90h = { 't18X$WH': !![] };
new window[f[70]](Sm90h), window[f[70]][f[71]]['t18HW$X']();
if (window['t18XW$H']) clearInterval(window['t18XW$H']);
window['t18XW$H'] = null, window['t18H$XW'] = function (t8$rx, jmoau) {
    if (!t8$rx || !jmoau) return 0x0;
    t8$rx = t8$rx[f[235]]('.'), jmoau = jmoau[f[235]]('.');
    const $78rw = Math[f[905]](t8$rx[f[187]], jmoau[f[187]]);
    while (t8$rx[f[187]] < $78rw) {
        t8$rx[f[279]]('0');
    }
    while (jmoau[f[187]] < $78rw) {
        jmoau[f[279]]('0');
    }
    for (var _pnix = 0x0; _pnix < $78rw; _pnix++) {
        const r8tws = parseInt(t8$rx[_pnix]),
              rst7w4 = parseInt(jmoau[_pnix]);
        if (r8tws > rst7w4) return 0x1;else {
            if (r8tws < rst7w4) return -0x1;
        }
    }
    return 0x0;
}, window[f[280]] = wx[f[906]]()[f[280]], console[f[53]](f[907] + window[f[280]]);
var Shy6a9 = wx[f[908]]();
Shy6a9[f[909]](function (aq1oj) {
    console[f[53]](f[910] + aq1oj[f[911]]);
}), Shy6a9[f[912]](function () {
    wx[f[55]]({
        'title': f[913],
        'content': f[914],
        'showCancel': ![],
        'success': function (i$px_) {
            Shy6a9[f[915]]();
        }
    });
}), Shy6a9[f[916]](function () {
    console[f[53]](f[917]);
}), window['t18H$WX'] = function () {
    console[f[53]](f[918]);
    var amju6y = wx[f[919]]({
        'name': f[920],
        'success': function (jau1oq) {
            console[f[53]](f[921]), console[f[53]](jau1oq), jau1oq && jau1oq[f[151]] == f[922] ? (window['t1$H'] = !![], window['t1$HWX'](), window['t1$WXH']()) : setTimeout(function () {
                window['t18H$WX']();
            }, 0x1f4);
        },
        'fail': function (s4f7kt) {
            console[f[53]](f[923]), console[f[53]](s4f7kt), setTimeout(function () {
                window['t18H$WX']();
            }, 0x1f4);
        }
    });
    amju6y && amju6y[f[924]](bfgvd2 => {});
}, window['t18WX$H'] = function () {
    console[f[53]](f[925]);
    var qaoujm = wx[f[919]]({
        'name': 'ai',
        'success': function (r8x$wi) {
            console[f[53]](f[926]), console[f[53]](r8x$wi), r8x$wi && r8x$wi[f[151]] == f[922] ? (window['t1WH$'] = !![], window['t1$HWX'](), window['t1$WXH']()) : setTimeout(function () {
                window['t18WX$H']();
            }, 0x1f4);
        },
        'fail': function (kbg2df) {
            console[f[53]](f[927]), console[f[53]](kbg2df), setTimeout(function () {
                window['t18WX$H']();
            }, 0x1f4);
        }
    });
    qaoujm && qaoujm[f[924]](b3dg => {});
}, window[f[928]] = function () {
    window['t18H$XW'](window[f[280]], f[929]) >= 0x0 ? (console[f[53]](f[930] + window[f[280]] + f[931]), window[f[64]](), window['t18H$WX'](), window['t18WX$H']()) : (window['t1W$X'](f[932], window[f[280]]), wx[f[55]]({
        'title': f[56],
        'content': f[933]
    }));
}, window[f[92]] = '', wx[f[934]]({
    'success'(tr$x) {
        window[f[92]] = f[935] + tr$x[f[936]] + f[937] + tr$x[f[938]] + f[939] + tr$x[f[10]] + f[940] + tr$x[f[941]] + f[942] + tr$x[f[173]] + f[943] + tr$x[f[280]] + f[944] + tr$x[f[945]], console[f[53]](window[f[92]]), console[f[53]](f[946] + tr$x[f[947]] + f[948] + tr$x[f[949]] + f[950] + tr$x[f[951]] + f[952] + tr$x[f[953]] + f[954] + tr$x[f[955]] + f[956] + tr$x[f[957]] + f[958] + (tr$x[f[959]] ? tr$x[f[959]][f[385]] + ',' + tr$x[f[959]][f[388]] + ',' + tr$x[f[959]][f[390]] + ',' + tr$x[f[959]][f[392]] : ''));
        var srw7t8 = tr$x[f[941]] ? tr$x[f[941]][f[960]]() : '',
            sr7 = tr$x[f[938]] ? tr$x[f[938]][f[960]]()[f[699]]('\x20', '') : '';
        window['t1W$'][f[44]] = srw7t8[f[152]](f[961]) != -0x1, window['t1W$'][f[45]] = srw7t8[f[152]](f[962]) != -0x1, window['t1W$'][f[384]] = srw7t8[f[152]](f[961]) != -0x1 || srw7t8[f[152]](f[962]) != -0x1, window['t1W$'][f[46]] = srw7t8[f[152]](f[963]) != -0x1 || srw7t8[f[152]](f[12]) != -0x1, window['t1W$'][f[104]] = tr$x[f[173]] ? tr$x[f[173]][f[960]]() : '', window['t1W$']['t18XH$W'] = ![], window['t1W$']['t18XWH$'] = 0x2;
        if (srw7t8[f[152]](f[962]) != -0x1) {
            if (tr$x[f[945]] >= 0x18) window['t1W$']['t18XWH$'] = 0x3;else window['t1W$']['t18XWH$'] = 0x2;
        } else {
            if (srw7t8[f[152]](f[961]) != -0x1) {
                if (tr$x[f[945]] && tr$x[f[945]] >= 0x14) window['t1W$']['t18XWH$'] = 0x3;else {
                    if (sr7[f[152]](f[964]) != -0x1 || sr7[f[152]](f[965]) != -0x1 || sr7[f[152]](f[966]) != -0x1 || sr7[f[152]](f[967]) != -0x1 || sr7[f[152]](f[968]) != -0x1) window['t1W$']['t18XWH$'] = 0x2;else window['t1W$']['t18XWH$'] = 0x3;
                }
            } else window['t1W$']['t18XWH$'] = 0x2;
        }
        console[f[53]](f[969] + window['t1W$']['t18XH$W'] + f[970] + window['t1W$']['t18XWH$']);
    }
}), wx[f[299]]({
    'success': function (wrts) {
        console[f[53]](f[971] + wrts[f[301]] + f[972] + wrts[f[303]]);
    }
}), wx[f[305]]({
    'success': function (yma69u) {
        console[f[53]](f[973] + yma69u[f[974]]);
    }
}), wx[f[975]]({ 'keepScreenOn': !![] }), wx[f[306]](function (xwir$8) {
    console[f[53]](f[973] + xwir$8[f[974]] + f[976] + xwir$8[f[977]]);
}), wx[f[269]](function (bv20g) {
    window[f[270]] = bv20g, window['t1$XH'] && window[f[270]] && (console[f[75]](f[271] + window[f[270]][f[272]]), window['t1$XH'](window[f[270]]), window[f[270]] = null);
}), window[f[978]] = 0x0, window['t18WH$X'] = 0x0, window[f[979]] = null, wx[f[980]](function () {
    window['t18WH$X']++;
    var h6y03 = Date[f[37]]();
    (window[f[978]] == 0x0 || h6y03 - window[f[978]] > 0x1d4c0) && (console[f[102]](f[981]), wx[f[982]]());
    if (window['t18WH$X'] >= 0x2) {
        window['t18WH$X'] = 0x0, console[f[95]](f[983]), wx[f[984]]('0', 0x1);
        if (window['t1W$'] && window['t1W$'][f[44]]) window['t1W$X'](f[985], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});