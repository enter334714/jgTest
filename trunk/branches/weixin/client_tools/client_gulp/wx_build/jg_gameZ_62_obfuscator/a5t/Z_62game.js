var f = wx.$B;
console[f[644]](f[966]), window[f[967]], wx[f[968]](function (x0p8r) {
    if (x0p8r) {
        if (x0p8r[f[969]]) {
            var dyp8j = window[f[438]][f[575]][f[349]](new RegExp(/\./, 'g'), '_'),
                $97f23 = x0p8r[f[969]],
                bgkrlq = $97f23[f[536]](/(xyqek\/Z_62game.js:)[0-9]{1,60}(:)/g);
            if (bgkrlq) for (var ow1_5 = 0x0; ow1_5 < bgkrlq[f[201]]; ow1_5++) {
                if (bgkrlq[ow1_5] && bgkrlq[ow1_5][f[201]] > 0x0) {
                    var xpq80r = parseInt(bgkrlq[ow1_5][f[349]](f[970], '')[f[349]](':', ''));
                    $97f23 = $97f23[f[349]](bgkrlq[ow1_5], bgkrlq[ow1_5][f[349]](':' + xpq80r + ':', ':' + (xpq80r - 0x2) + ':'));
                }
            }
            $97f23 = $97f23[f[349]](new RegExp(f[971], 'g'), f[972] + dyp8j + f[973]), $97f23 = $97f23[f[349]](new RegExp(f[974], 'g'), f[972] + dyp8j + f[973]), x0p8r[f[969]] = $97f23;
        }
        var hn2f$ = {
            'id': window[f[169]][f[664]],
            'role': window[f[169]][f[665]],
            'level': window[f[169]][f[666]],
            'user': window[f[169]][f[667]],
            'version': window[f[169]][f[231]],
            'gamever': window[f[438]][f[575]],
            'cdn': window[f[169]][f[353]],
            'serverid': window[f[169]][f[170]] ? window[f[169]][f[170]][f[171]] : 0x0,
            'systemInfo': window[f[668]],
            'error': f[975],
            'stack': x0p8r ? x0p8r[f[969]] : ''
        },
            w_5lg6 = JSON[f[507]](hn2f$);
        console[f[441]](f[976] + w_5lg6), (!window[f[967]] || window[f[967]] != hn2f$[f[441]]) && (window[f[967]] = hn2f$[f[441]], window[f[602]](hn2f$));
    }
});
import 'qtgyu.js';
import 'a8k.js';
window[f[977]] = require(f[978]);
import 'm1k.js';
import 'pklxa.js';
import 'a77a.js';
import 'a7jm.js';
console[f[644]](f[979]), console[f[644]](f[980]), t1RJSW({ 'title': f[981] });
var Sb8qxk = { 't1$RWJS': !![] };
new window[f[572]](Sb8qxk), window[f[572]][f[165]]['t1$SJWR']();
if (window['t1$RJWS']) clearInterval(window['t1$RJWS']);
window['t1$RJWS'] = null, window['t1$SWRJ'] = function (vtsio4, gklbqw) {
    if (!vtsio4 || !gklbqw) return 0x0;
    vtsio4 = vtsio4[f[449]]('.'), gklbqw = gklbqw[f[449]]('.');
    const a3 = Math[f[982]](vtsio4[f[201]], gklbqw[f[201]]);
    while (vtsio4[f[201]] < a3) {
        vtsio4[f[370]]('0');
    }
    while (gklbqw[f[201]] < a3) {
        gklbqw[f[370]]('0');
    }
    for (var pxr8 = 0x0; pxr8 < a3; pxr8++) {
        const xprk8 = parseInt(vtsio4[pxr8]),
              t4ov51 = parseInt(gklbqw[pxr8]);
        if (xprk8 > t4ov51) return 0x1;else {
            if (xprk8 < t4ov51) return -0x1;
        }
    }
    return 0x0;
}, window[f[849]] = wx[f[983]]()[f[849]], console[f[322]](f[984] + window[f[849]]);
var S_1o5 = wx[f[985]]();
S_1o5[f[986]](function (bxgrqk) {
    console[f[322]](f[987] + bxgrqk[f[988]]);
}), S_1o5[f[989]](function () {
    wx[f[625]]({
        'title': f[990],
        'content': f[991],
        'showCancel': ![],
        'success': function (t4ois) {
            S_1o5[f[992]]();
        }
    });
}), S_1o5[f[993]](function () {
    console[f[322]](f[994]);
}), window['t1$SWJR'] = function () {
    console[f[322]](f[995]);
    var l6wg5_ = wx[f[996]]({
        'name': f[997],
        'success': function (krx8q) {
            console[f[322]](f[998]), console[f[322]](krx8q), krx8q && krx8q[f[727]] == f[999] ? (window[f[617]] = !![], window[f[478]](), window[f[479]]()) : setTimeout(function () {
                window['t1$SWJR']();
            }, 0x1f4);
        },
        'fail': function (saz) {
            console[f[322]](f[1000]), console[f[322]](saz), setTimeout(function () {
                window['t1$SWJR']();
            }, 0x1f4);
        }
    });
    l6wg5_ && l6wg5_[f[1001]](yxdp => {});
}, window['t1$JRWS'] = function () {
    console[f[322]](f[1002]);
    var e2973 = wx[f[996]]({
        'name': f[1003],
        'success': function ($79f23) {
            console[f[322]](f[1004]), console[f[322]]($79f23), $79f23 && $79f23[f[727]] == f[999] ? (window[f[618]] = !![], window[f[478]](), window[f[479]]()) : setTimeout(function () {
                window['t1$JRWS']();
            }, 0x1f4);
        },
        'fail': function (klrbgq) {
            console[f[322]](f[1005]), console[f[322]](klrbgq), setTimeout(function () {
                window['t1$JRWS']();
            }, 0x1f4);
        }
    });
    e2973 && e2973[f[1001]](atsizv => {});
}, window[f[1006]] = function () {
    window['t1$SWRJ'](window[f[849]], f[1007]) >= 0x0 ? (console[f[322]](f[1008] + window[f[849]] + f[1009]), window[f[635]](), window['t1$SWJR'](), window['t1$JRWS']()) : (window[f[677]](f[1010], window[f[849]]), wx[f[625]]({
        'title': f[626],
        'content': f[1011]
    }));
}, window[f[668]] = '', wx[f[1012]]({
    'success'(e9z73) {
        window[f[668]] = f[1013] + e9z73[f[1014]] + f[1015] + e9z73[f[1016]] + f[1017] + e9z73[f[585]] + f[1018] + e9z73[f[1019]] + f[1020] + e9z73[f[747]] + f[1021] + e9z73[f[849]] + f[1022] + e9z73[f[1023]], console[f[322]](window[f[668]]), console[f[322]](f[1024] + e9z73[f[1025]] + f[1026] + e9z73[f[1027]] + f[1028] + e9z73[f[1029]] + f[1030] + e9z73[f[1031]] + f[1032] + e9z73[f[1033]] + f[1034] + e9z73[f[1035]] + f[1036] + (e9z73[f[1037]] ? e9z73[f[1037]][f[105]] + ',' + e9z73[f[1037]][f[245]] + ',' + e9z73[f[1037]][f[301]] + ',' + e9z73[f[1037]][f[68]] : ''));
        var l6wg = e9z73[f[1019]] ? e9z73[f[1019]][f[1038]]() : '',
            e72 = e9z73[f[1016]] ? e9z73[f[1016]][f[1038]]()[f[349]]('\x20', '') : '';
        window[f[169]][f[612]] = l6wg[f[527]](f[1039]) != -0x1, window[f[169]][f[613]] = l6wg[f[527]](f[1040]) != -0x1, window[f[169]][f[951]] = l6wg[f[527]](f[1039]) != -0x1 || l6wg[f[527]](f[1040]) != -0x1, window[f[169]][f[614]] = l6wg[f[527]](f[1041]) != -0x1 || l6wg[f[527]](f[586]) != -0x1, window[f[169]][f[679]] = e9z73[f[747]] ? e9z73[f[747]][f[1038]]() : '', window[f[169]]['t1$RSWJ'] = ![], window[f[169]]['t1$RJSW'] = 0x2;
        if (l6wg[f[527]](f[1040]) != -0x1) {
            if (e9z73[f[1023]] >= 0x18) window[f[169]]['t1$RJSW'] = 0x3;else window[f[169]]['t1$RJSW'] = 0x2;
        } else {
            if (l6wg[f[527]](f[1039]) != -0x1) {
                if (e9z73[f[1023]] && e9z73[f[1023]] >= 0x14) window[f[169]]['t1$RJSW'] = 0x3;else {
                    if (e72[f[527]](f[1042]) != -0x1 || e72[f[527]](f[1043]) != -0x1 || e72[f[527]](f[1044]) != -0x1 || e72[f[527]](f[1045]) != -0x1 || e72[f[527]](f[1046]) != -0x1) window[f[169]]['t1$RJSW'] = 0x2;else window[f[169]]['t1$RJSW'] = 0x3;
                }
            } else window[f[169]]['t1$RJSW'] = 0x2;
        }
        console[f[322]](f[1047] + window[f[169]]['t1$RSWJ'] + f[1048] + window[f[169]]['t1$RJSW']);
    }
}), wx[f[870]]({
    'success': function ($nu2m) {
        console[f[322]](f[1049] + $nu2m[f[872]] + f[1050] + $nu2m[f[874]]);
    }
}), wx[f[876]]({
    'success': function (bwklg6) {
        console[f[322]](f[1051] + bwklg6[f[1052]]);
    }
}), wx[f[1053]]({ 'keepScreenOn': !![] }), wx[f[877]](function (px8yd) {
    console[f[322]](f[1051] + px8yd[f[1052]] + f[1054] + px8yd[f[1055]]);
}), wx[f[839]](function (p0xyd) {
    window[f[841]] = p0xyd, window[f[840]] && window[f[841]] && (console[f[644]](f[842] + window[f[841]][f[843]]), window[f[840]](window[f[841]]), window[f[841]] = null);
}), window['t1$JSWR'] = 0x0, window[f[1056]] = null, wx[f[1057]](function () {
    window['t1$JSWR']++, wx[f[1058]]();
    if (window['t1$JSWR'] >= 0x2) {
        window['t1$JSWR'] = 0x0, console[f[441]](f[1059]), wx[f[1060]]('0', 0x1);
        if (window[f[169]] && window[f[169]][f[612]]) window[f[677]](f[1061], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});