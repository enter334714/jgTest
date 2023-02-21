var W = wx.$l;
console[W[971]](W[972]), window[W[973]], wx[W[974]](function (zba1d) {
    if (zba1d) {
        if (zba1d[W[56]]) {
            var gy3t6 = window[W[975]][W[976]][W[243]](new RegExp(/\./, 'g'), '_'),
                k7f2w = zba1d[W[56]],
                fs7q = k7f2w[W[67]](/(ttttttt\/tGAMEtt.js:)[0-9]{1,60}(:)/g);
            if (fs7q) for (var s7w$2f = 0x0; s7w$2f < fs7q[W[31]]; s7w$2f++) {
                if (fs7q[s7w$2f] && fs7q[s7w$2f][W[31]] > 0x0) {
                    var sl3q$2 = parseInt(fs7q[s7w$2f][W[243]](W[977], '')[W[243]](':', ''));
                    k7f2w = k7f2w[W[243]](fs7q[s7w$2f], fs7q[s7w$2f][W[243]](':' + sl3q$2 + ':', ':' + (sl3q$2 - 0x2) + ':'));
                }
            }
            k7f2w = k7f2w[W[243]](new RegExp(W[978], 'g'), W[979] + gy3t6 + W[980]), k7f2w = k7f2w[W[243]](new RegExp(W[981], 'g'), W[979] + gy3t6 + W[980]), zba1d[W[56]] = k7f2w;
        }
        var a1dbz = {
            'id': window['$LDF'][W[982]],
            'role': window['$LDF'][W[983]],
            'level': window['$LDF'][W[984]],
            'user': window['$LDF'][W[985]],
            'version': window['$LDF'][W[986]],
            'cdn': window['$LDF'][W[987]],
            'pkgName': window['$LDF'][W[988]],
            'gamever': window[W[975]][W[976]],
            'serverid': window['$LDF'][W[989]] ? window['$LDF'][W[989]][W[990]] : 0x0,
            'systemInfo': window[W[991]],
            'error': W[992],
            'stack': zba1d ? zba1d[W[56]] : ''
        },
            s32ql = JSON[W[993]](a1dbz);
        console[W[333]](W[994] + s32ql), (!window[W[973]] || window[W[973]] != a1dbz[W[333]]) && (window[W[973]] = a1dbz[W[333]], window['$LND'](a1dbz));
    }
});
import 'ttfttt.js';
import 'tt112tt.js';
window[W[995]] = require(W[996]);
import 'tINDtt.js';
import 'ttLIB23tt.js';
import 'tWXMtadtt.js';
import 'ttINItt.js';
console[W[971]](W[997]), console[W[971]](W[998]), $LNDPF({ 'title': W[999] });
var L9$slq2f = { '$LTNFDP': !![] };
new window[W[1000]](L9$slq2f), window[W[1000]][W[1001]]['$LTPDFN']();
if (window['$LTNDFP']) clearInterval(window['$LTNDFP']);
window['$LTNDFP'] = null, window['$LTPFND'] = function (cwk7fe, da1b) {
    if (!cwk7fe || !da1b) return 0x0;
    cwk7fe = cwk7fe[W[201]]('.'), da1b = da1b[W[201]]('.');
    const oigrm8 = Math[W[301]](cwk7fe[W[31]], da1b[W[31]]);
    while (cwk7fe[W[31]] < oigrm8) {
        cwk7fe[W[66]]('0');
    }
    while (da1b[W[31]] < oigrm8) {
        da1b[W[66]]('0');
    }
    for (var qs3$y = 0x0; qs3$y < oigrm8; qs3$y++) {
        const $72wf = parseInt(cwk7fe[qs3$y]),
              za1dv = parseInt(da1b[qs3$y]);
        if ($72wf > za1dv) return 0x1;else {
            if ($72wf < za1dv) return -0x1;
        }
    }
    return 0x0;
}, window[W[1002]] = wx[W[1003]]()[W[1002]], console[W[225]](W[1004] + window[W[1002]]);
var L9ygot6p = wx[W[1005]]();
L9ygot6p[W[1006]](function (dv1jbz) {
    console[W[225]](W[1007] + dv1jbz[W[1008]]);
}), L9ygot6p[W[1009]](function () {
    wx[W[1010]]({
        'title': W[1011],
        'content': W[1012],
        'showCancel': ![],
        'success': function (lqs32$) {
            L9ygot6p[W[1013]]();
        }
    });
}), L9ygot6p[W[1014]](function () {
    console[W[225]](W[1015]);
}), window['$LTPFDN'] = function () {
    console[W[225]](W[1016]);
    var na04z = wx[W[1017]]({
        'name': W[1018],
        'success': function (q2$lsf) {
            console[W[225]](W[1019]), console[W[225]](q2$lsf), q2$lsf && q2$lsf[W[1020]] == W[1021] ? (window['$LFP'] = !![], window['$LFPDN'](), window['$LFDNP']()) : setTimeout(function () {
                window['$LTPFDN']();
            }, 0x1f4);
        },
        'fail': function (adbzv1) {
            console[W[225]](W[1022]), console[W[225]](adbzv1), setTimeout(function () {
                window['$LTPFDN']();
            }, 0x1f4);
        }
    });
    na04z && na04z[W[1023]](r4m0i => {});
}, window['$LTDNFP'] = function () {
    console[W[225]](W[1024]);
    var dvbz1a = wx[W[1017]]({
        'name': W[1025],
        'success': function (adbz1) {
            console[W[225]](W[1026]), console[W[225]](adbz1), adbz1 && adbz1[W[1020]] == W[1021] ? (window['$LDPF'] = !![], window['$LFPDN'](), window['$LFDNP']()) : setTimeout(function () {
                window['$LTDNFP']();
            }, 0x1f4);
        },
        'fail': function (iog8m) {
            console[W[225]](W[1027]), console[W[225]](iog8m), setTimeout(function () {
                window['$LTDNFP']();
            }, 0x1f4);
        }
    });
    dvbz1a && dvbz1a[W[1023]](ew_k7c => {});
}, window[W[1028]] = function () {
    window['$LTPFND'](window[W[1002]], W[1029]) >= 0x0 ? (console[W[225]](W[1030] + window[W[1002]] + W[1031]), window['$LDN'](), window['$LTPFDN'](), window['$LTDNFP']()) : (window['$LDFN'](W[1032], window[W[1002]]), wx[W[1010]]({
        'title': W[1033],
        'content': W[1034]
    }));
}, window[W[991]] = '', wx[W[1035]]({
    'success'(u1vdhj) {
        window[W[991]] = W[1036] + u1vdhj[W[1037]] + W[1038] + u1vdhj[W[1039]] + W[1040] + u1vdhj[W[1041]] + W[1042] + u1vdhj[W[1043]] + W[1044] + u1vdhj[W[1045]] + W[1046] + u1vdhj[W[1002]] + W[1047] + u1vdhj[W[1048]], console[W[225]](window[W[991]]), console[W[225]](W[1049] + u1vdhj[W[1050]] + W[1051] + u1vdhj[W[1052]] + W[1053] + u1vdhj[W[1054]] + W[1055] + u1vdhj[W[1056]] + W[1057] + u1vdhj[W[1058]] + W[1059] + u1vdhj[W[1060]] + W[1061] + (u1vdhj[W[1062]] ? u1vdhj[W[1062]][W[1063]] + ',' + u1vdhj[W[1062]][W[1064]] + ',' + u1vdhj[W[1062]][W[1065]] + ',' + u1vdhj[W[1062]][W[1066]] : ''));
        var vbdjz = u1vdhj[W[1043]] ? u1vdhj[W[1043]][W[103]]() : '',
            qy3pl = u1vdhj[W[1039]] ? u1vdhj[W[1039]][W[103]]()[W[243]]('\x20', '') : '';
        window['$LDF'][W[1067]] = vbdjz[W[146]](W[1068]) != -0x1, window['$LDF'][W[1069]] = vbdjz[W[146]](W[1070]) != -0x1, window['$LDF'][W[1071]] = vbdjz[W[146]](W[1068]) != -0x1 || vbdjz[W[146]](W[1070]) != -0x1, window['$LDF'][W[1072]] = vbdjz[W[146]](W[1073]) != -0x1 || vbdjz[W[146]](W[1074]) != -0x1, window['$LDF'][W[1075]] = u1vdhj[W[1045]] ? u1vdhj[W[1045]][W[103]]() : '', window['$LDF']['$LTNPFD'] = ![], window['$LDF']['$LTNDPF'] = 0x2;
        if (vbdjz[W[146]](W[1070]) != -0x1) {
            if (u1vdhj[W[1048]] >= 0x18) window['$LDF']['$LTNDPF'] = 0x3;else window['$LDF']['$LTNDPF'] = 0x2;
        } else {
            if (vbdjz[W[146]](W[1068]) != -0x1) {
                if (u1vdhj[W[1048]] && u1vdhj[W[1048]] >= 0x14) window['$LDF']['$LTNDPF'] = 0x3;else {
                    if (qy3pl[W[146]](W[1076]) != -0x1 || qy3pl[W[146]](W[1077]) != -0x1 || qy3pl[W[146]](W[1078]) != -0x1 || qy3pl[W[146]](W[1079]) != -0x1 || qy3pl[W[146]](W[1080]) != -0x1) window['$LDF']['$LTNDPF'] = 0x2;else window['$LDF']['$LTNDPF'] = 0x3;
                }
            } else window['$LDF']['$LTNDPF'] = 0x2;
        }
        console[W[225]](W[1081] + window['$LDF']['$LTNPFD'] + W[1082] + window['$LDF']['$LTNDPF']);
    }
}), wx[W[1083]]({
    'success': function (qfl$2s) {
        console[W[225]](W[1084] + qfl$2s[W[1085]] + W[1086] + qfl$2s[W[1087]]);
    }
}), wx[W[1088]]({
    'success': function (kc2fw) {
        console[W[225]](W[1089] + kc2fw[W[1090]]);
    }
}), wx[W[1091]]({ 'keepScreenOn': !![] }), wx[W[1092]](function (yl3q$p) {
    console[W[225]](W[1089] + yl3q$p[W[1090]] + W[1093] + yl3q$p[W[1094]]);
}), wx[W[1095]](function (slqy$3) {
    window['$LPN'] = slqy$3, window['$LFNP'] && window['$LPN'] && (console[W[971]](W[1096] + window['$LPN'][W[1097]]), window['$LFNP'](window['$LPN']), window['$LPN'] = null);
}), window[W[1098]] = 0x0, window['$LTDPFN'] = 0x0, window[W[1099]] = null, wx[W[1100]](function () {
    window['$LTDPFN']++;
    var ri4 = Date[W[1101]]();
    (window[W[1098]] == 0x0 || ri4 - window[W[1098]] > 0x1d4c0) && (console[W[383]](W[1102]), wx[W[1103]]());
    if (window['$LTDPFN'] >= 0x2) {
        window['$LTDPFN'] = 0x0, console[W[333]](W[1104]), wx[W[1105]]('0', 0x1);
        if (window['$LDF'] && window['$LDF'][W[1067]]) window['$LDFN'](W[1106], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});