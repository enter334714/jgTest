var f = wx.$B;
console[f[658]](f[960]), window[f[961]], wx[f[962]](function (mxiho) {
    if (mxiho) {
        if (mxiho[f[963]]) {
            var ekh4 = window[f[587]][f[588]][f[401]](new RegExp(/\./, 'g'), '_'),
                jk9e74 = mxiho[f[963]],
                $nf_rz = jk9e74[f[572]](/(qlhdz\/Z_64game.js:)[0-9]{1,60}(:)/g);
            if ($nf_rz) for (var gowix = 0x0; gowix < $nf_rz[f[288]]; gowix++) {
                if ($nf_rz[gowix] && $nf_rz[gowix][f[288]] > 0x0) {
                    var ek47j = parseInt($nf_rz[gowix][f[401]](f[964], '')[f[401]](':', ''));
                    jk9e74 = jk9e74[f[401]]($nf_rz[gowix], $nf_rz[gowix][f[401]](':' + ek47j + ':', ':' + (ek47j - 0x2) + ':'));
                }
            }
            jk9e74 = jk9e74[f[401]](new RegExp(f[965], 'g'), f[966] + ekh4 + f[967]), jk9e74 = jk9e74[f[401]](new RegExp(f[968], 'g'), f[966] + ekh4 + f[967]), mxiho[f[963]] = jk9e74;
        }
        var q2svy = {
            'id': window[f[259]][f[669]],
            'role': window[f[259]][f[670]],
            'level': window[f[259]][f[671]],
            'user': window[f[259]][f[672]],
            'version': window[f[259]][f[318]],
            'cdn': window[f[259]][f[408]],
            'pkgName': window[f[259]][f[374]],
            'gamever': window[f[587]][f[588]],
            'serverid': window[f[259]][f[260]] ? window[f[259]][f[260]][f[83]] : 0x0,
            'systemInfo': window[f[673]],
            'error': f[969],
            'stack': mxiho ? mxiho[f[963]] : ''
        },
            qv2s8 = JSON[f[543]](q2svy);
        console[f[545]](f[970] + qv2s8), (!window[f[961]] || window[f[961]] != q2svy[f[545]]) && (window[f[961]] = q2svy[f[545]], window[f[616]](q2svy));
    }
});
import 'pe0bv.js';
import 'a7k.js';
window[f[971]] = require(f[972]);
import 'lt.js';
import 'dqh.js';
import 'xco.js';
import 'd9a.js';
console[f[658]](f[973]), console[f[658]](f[974]), t1ZLIO({ 'title': f[975] });
var Sowgxim = { 't1CZOLI': !![] };
new window[f[584]](Sowgxim), window[f[584]][f[254]][f[509]]();
if (window[f[976]]) clearInterval(window[f[976]]);
window[f[976]] = null, window[f[706]] = function (s6u8a5, igxh) {
    if (!s6u8a5 || !igxh) return 0x0;
    s6u8a5 = s6u8a5[f[977]]('.'), igxh = igxh[f[977]]('.');
    const q08yv2 = Math[f[978]](s6u8a5[f[288]], igxh[f[288]]);
    while (s6u8a5[f[288]] < q08yv2) {
        s6u8a5[f[436]]('0');
    }
    while (igxh[f[288]] < q08yv2) {
        igxh[f[436]]('0');
    }
    for (var j4e7$ = 0x0; j4e7$ < q08yv2; j4e7$++) {
        const ogpx = parseInt(s6u8a5[j4e7$]),
              qua8s2 = parseInt(igxh[j4e7$]);
        if (ogpx > qua8s2) return 0x1;else {
            if (ogpx < qua8s2) return -0x1;
        }
    }
    return 0x0;
}, window[f[839]] = wx[f[979]]()[f[839]], console[f[428]](f[980] + window[f[839]]);
var Sz_rnf$ = wx[f[981]]();
Sz_rnf$[f[982]](function (zb_rf) {
    console[f[428]](f[983] + zb_rf[f[984]]);
}), Sz_rnf$[f[985]](function () {
    wx[f[639]]({
        'title': f[986],
        'content': f[987],
        'showCancel': ![],
        'success': function (wil1x) {
            Sz_rnf$[f[988]]();
        }
    });
}), Sz_rnf$[f[989]](function () {
    console[f[428]](f[990]);
}), window[f[991]] = function () {
    console[f[428]](f[992]);
    var pmght = wx[f[993]]({
        'name': f[994],
        'success': function (phgtom) {
            console[f[428]](f[995]), console[f[428]](phgtom), phgtom && phgtom[f[729]] == f[996] ? (window[f[631]] = !![], window[f[515]](), window[f[516]]()) : setTimeout(function () {
                window[f[991]]();
            }, 0x1f4);
        },
        'fail': function (gpxho) {
            console[f[428]](f[997]), console[f[428]](gpxho), setTimeout(function () {
                window[f[991]]();
            }, 0x1f4);
        }
    });
    pmght && pmght[f[998]](r$zn_7 => {});
}, window[f[999]] = function () {
    console[f[428]](f[1000]);
    var _rbf = wx[f[993]]({
        'name': f[1001],
        'success': function (t9k4) {
            console[f[428]](f[1002]), console[f[428]](t9k4), t9k4 && t9k4[f[729]] == f[996] ? (window[f[632]] = !![], window[f[515]](), window[f[516]]()) : setTimeout(function () {
                window[f[999]]();
            }, 0x1f4);
        },
        'fail': function (hopmgt) {
            console[f[428]](f[1003]), console[f[428]](hopmgt), setTimeout(function () {
                window[f[999]]();
            }, 0x1f4);
        }
    });
    _rbf && _rbf[f[998]](j7$_n => {});
}, window[f[1004]] = function () {
    window[f[706]](window[f[839]], f[1005]) >= 0x0 ? (console[f[428]](f[1006] + window[f[839]] + f[1007]), window[f[649]](), window[f[991]](), window[f[999]]()) : (window[f[682]](f[1008], window[f[839]]), wx[f[639]]({
        'title': f[640],
        'content': f[1009]
    }));
}, window[f[673]] = '', wx[f[1010]]({
    'success'(mtkpg) {
        window[f[673]] = f[1011] + mtkpg[f[1012]] + f[1013] + mtkpg[f[1014]] + f[1015] + mtkpg[f[599]] + f[1016] + mtkpg[f[1017]] + f[1018] + mtkpg[f[748]] + f[1019] + mtkpg[f[839]] + f[1020] + mtkpg[f[1021]], console[f[428]](window[f[673]]), console[f[428]](f[1022] + mtkpg[f[1023]] + f[1024] + mtkpg[f[1025]] + f[1026] + mtkpg[f[1027]] + f[1028] + mtkpg[f[1029]] + f[1030] + mtkpg[f[1031]] + f[1032] + mtkpg[f[1033]] + f[1034] + (mtkpg[f[1035]] ? mtkpg[f[1035]][f[210]] + ',' + mtkpg[f[1035]][f[332]] + ',' + mtkpg[f[1035]][f[947]] + ',' + mtkpg[f[1035]][f[170]] : ''));
        var wl361 = mtkpg[f[1017]] ? mtkpg[f[1017]][f[1036]]() : '',
            etk49j = mtkpg[f[1014]] ? mtkpg[f[1014]][f[1036]]()[f[401]]('\x20', '') : '';
        window[f[259]][f[626]] = wl361[f[565]](f[1037]) != -0x1, window[f[259]][f[627]] = wl361[f[565]](f[91]) != -0x1, window[f[259]][f[943]] = wl361[f[565]](f[1037]) != -0x1 || wl361[f[565]](f[91]) != -0x1, window[f[259]][f[628]] = wl361[f[565]](f[1038]) != -0x1 || wl361[f[565]](f[600]) != -0x1, window[f[259]][f[684]] = mtkpg[f[748]] ? mtkpg[f[748]][f[1036]]() : '', window[f[259]][f[939]] = ![], window[f[259]][f[940]] = 0x2;
        if (wl361[f[565]](f[91]) != -0x1) {
            if (mtkpg[f[1021]] >= 0x18) window[f[259]][f[940]] = 0x3;else window[f[259]][f[940]] = 0x2;
        } else {
            if (wl361[f[565]](f[1037]) != -0x1) {
                if (mtkpg[f[1021]] && mtkpg[f[1021]] >= 0x14) window[f[259]][f[940]] = 0x3;else {
                    if (etk49j[f[565]](f[1039]) != -0x1 || etk49j[f[565]](f[1040]) != -0x1 || etk49j[f[565]](f[1041]) != -0x1 || etk49j[f[565]](f[1042]) != -0x1 || etk49j[f[565]](f[1043]) != -0x1) window[f[259]][f[940]] = 0x2;else window[f[259]][f[940]] = 0x3;
                }
            } else window[f[259]][f[940]] = 0x2;
        }
        console[f[428]](f[1044] + window[f[259]][f[939]] + f[1045] + window[f[259]][f[940]]);
    }
}), wx[f[860]]({
    'success': function (oilxw) {
        console[f[428]](f[1046] + oilxw[f[862]] + f[1047] + oilxw[f[864]]);
    }
}), wx[f[866]]({
    'success': function (oxmihg) {
        console[f[428]](f[1048] + oxmihg[f[1049]]);
    }
}), wx[f[1050]]({ 'keepScreenOn': !![] }), wx[f[867]](function (li) {
    console[f[428]](f[1048] + li[f[1049]] + f[1051] + li[f[1052]]);
}), wx[f[829]](function (oxgiwl) {
    window[f[831]] = oxgiwl, window[f[830]] && window[f[831]] && (console[f[658]](f[832] + window[f[831]][f[833]]), window[f[830]](window[f[831]]), window[f[831]] = null);
}), window[f[1053]] = 0x0, window[f[1054]] = 0x0, window[f[1055]] = null, wx[f[1056]](function () {
    window[f[1054]]++;
    var drzf_b = Date[f[253]]();
    (window[f[1053]] == 0x0 || drzf_b - window[f[1053]] > 0x1d4c0) && (console[f[562]](f[1057]), wx[f[1058]]());
    if (window[f[1054]] >= 0x2) {
        window[f[1054]] = 0x0, console[f[545]](f[1059]), wx[f[1060]]('0', 0x1);
        if (window[f[259]] && window[f[259]][f[626]]) window[f[682]](f[1061], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});