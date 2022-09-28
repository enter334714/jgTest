var W = wx.$l;
console[W[960]](W[961]), window[W[962]], wx[W[963]](function ($q) {
    if ($q) {
        if ($q[W[56]]) {
            var swf27$ = window[W[964]][W[965]][W[243]](new RegExp(/\./, 'g'), '_'),
                s7$f = $q[W[56]],
                cefkw7 = s7$f[W[67]](/(ttttttt\/tGAMEtt.js:)[0-9]{1,60}(:)/g);
            if (cefkw7) for (var c7w2f = 0x0; c7w2f < cefkw7[W[31]]; c7w2f++) {
                if (cefkw7[c7w2f] && cefkw7[c7w2f][W[31]] > 0x0) {
                    var dvab1z = parseInt(cefkw7[c7w2f][W[243]](W[966], '')[W[243]](':', ''));
                    s7$f = s7$f[W[243]](cefkw7[c7w2f], cefkw7[c7w2f][W[243]](':' + dvab1z + ':', ':' + (dvab1z - 0x2) + ':'));
                }
            }
            s7$f = s7$f[W[243]](new RegExp(W[967], 'g'), W[968] + swf27$ + W[969]), s7$f = s7$f[W[243]](new RegExp(W[970], 'g'), W[968] + swf27$ + W[969]), $q[W[56]] = s7$f;
        }
        var vzbdj = {
            'id': window['$LDF'][W[971]],
            'role': window['$LDF'][W[972]],
            'level': window['$LDF'][W[973]],
            'user': window['$LDF'][W[974]],
            'version': window['$LDF'][W[975]],
            'cdn': window['$LDF'][W[976]],
            'pkgName': window['$LDF'][W[977]],
            'gamever': window[W[964]][W[965]],
            'serverid': window['$LDF'][W[978]] ? window['$LDF'][W[978]][W[979]] : 0x0,
            'systemInfo': window[W[980]],
            'error': W[981],
            'stack': $q ? $q[W[56]] : ''
        },
            otg6yp = JSON[W[982]](vzbdj);
        console[W[333]](W[983] + otg6yp), (!window[W[962]] || window[W[962]] != vzbdj[W[333]]) && (window[W[962]] = vzbdj[W[333]], window['$LND'](vzbdj));
    }
});
import 'ttfttt.js';
import 'tt112tt.js';
window[W[984]] = require(W[985]);
import 'tINDtt.js';
import 'ttLIB23tt.js';
import 'tWXMtadtt.js';
import 'ttINItt.js';
console[W[960]](W[986]), console[W[960]](W[987]), $LNDPF({ 'title': W[988] });
var L9dabz5 = { '$LTNFDP': !![] };
new window[W[989]](L9dabz5), window[W[989]][W[990]]['$LTPDFN']();
if (window['$LTNDFP']) clearInterval(window['$LTNDFP']);
window['$LTNDFP'] = null, window['$LTPFND'] = function (a054m, l3qtyp) {
    if (!a054m || !l3qtyp) return 0x0;
    a054m = a054m[W[201]]('.'), l3qtyp = l3qtyp[W[201]]('.');
    const oimgr8 = Math[W[301]](a054m[W[31]], l3qtyp[W[31]]);
    while (a054m[W[31]] < oimgr8) {
        a054m[W[66]]('0');
    }
    while (l3qtyp[W[31]] < oimgr8) {
        l3qtyp[W[66]]('0');
    }
    for (var $s2q3l = 0x0; $s2q3l < oimgr8; $s2q3l++) {
        const y36lt = parseInt(a054m[$s2q3l]),
              cf7wek = parseInt(l3qtyp[$s2q3l]);
        if (y36lt > cf7wek) return 0x1;else {
            if (y36lt < cf7wek) return -0x1;
        }
    }
    return 0x0;
}, window[W[991]] = wx[W[992]]()[W[991]], console[W[225]](W[993] + window[W[991]]);
var L9t6g8o = wx[W[994]]();
L9t6g8o[W[995]](function ($sf27w) {
    console[W[225]](W[996] + $sf27w[W[997]]);
}), L9t6g8o[W[998]](function () {
    wx[W[999]]({
        'title': W[1000],
        'content': W[1001],
        'showCancel': ![],
        'success': function (vjbd1u) {
            L9t6g8o[W[1002]]();
        }
    });
}), L9t6g8o[W[1003]](function () {
    console[W[225]](W[1004]);
}), window['$LTPFDN'] = function () {
    console[W[225]](W[1005]);
    var zvdab5 = wx[W[1006]]({
        'name': W[1007],
        'success': function ($qls23) {
            console[W[225]](W[1008]), console[W[225]]($qls23), $qls23 && $qls23[W[1009]] == W[1010] ? (window['$LFP'] = !![], window['$LFPDN'](), window['$LFDNP']()) : setTimeout(function () {
                window['$LTPFDN']();
            }, 0x1f4);
        },
        'fail': function (mn8ir) {
            console[W[225]](W[1011]), console[W[225]](mn8ir), setTimeout(function () {
                window['$LTPFDN']();
            }, 0x1f4);
        }
    });
    zvdab5 && zvdab5[W[1012]](py3$l => {});
}, window['$LTDNFP'] = function () {
    console[W[225]](W[1013]);
    var d1uj = wx[W[1006]]({
        'name': W[1014],
        'success': function (wks7f) {
            console[W[225]](W[1015]), console[W[225]](wks7f), wks7f && wks7f[W[1009]] == W[1010] ? (window['$LDPF'] = !![], window['$LFPDN'](), window['$LFDNP']()) : setTimeout(function () {
                window['$LTDNFP']();
            }, 0x1f4);
        },
        'fail': function (qlt3p) {
            console[W[225]](W[1016]), console[W[225]](qlt3p), setTimeout(function () {
                window['$LTDNFP']();
            }, 0x1f4);
        }
    });
    d1uj && d1uj[W[1012]](na4m05 => {});
}, window[W[1017]] = function () {
    window['$LTPFND'](window[W[991]], W[1018]) >= 0x0 ? (console[W[225]](W[1019] + window[W[991]] + W[1020]), window['$LDN'](), window['$LTPFDN'](), window['$LTDNFP']()) : (window['$LDFN'](W[1021], window[W[991]]), wx[W[999]]({
        'title': W[1022],
        'content': W[1023]
    }));
}, window[W[980]] = '', wx[W[1024]]({
    'success'(ew_7k) {
        window[W[980]] = W[1025] + ew_7k[W[1026]] + W[1027] + ew_7k[W[1028]] + W[1029] + ew_7k[W[1030]] + W[1031] + ew_7k[W[1032]] + W[1033] + ew_7k[W[1034]] + W[1035] + ew_7k[W[991]] + W[1036] + ew_7k[W[1037]], console[W[225]](window[W[980]]), console[W[225]](W[1038] + ew_7k[W[1039]] + W[1040] + ew_7k[W[1041]] + W[1042] + ew_7k[W[1043]] + W[1044] + ew_7k[W[1045]] + W[1046] + ew_7k[W[1047]] + W[1048] + ew_7k[W[1049]] + W[1050] + (ew_7k[W[1051]] ? ew_7k[W[1051]][W[1052]] + ',' + ew_7k[W[1051]][W[1053]] + ',' + ew_7k[W[1051]][W[1054]] + ',' + ew_7k[W[1051]][W[1055]] : ''));
        var i4r0n = ew_7k[W[1032]] ? ew_7k[W[1032]][W[103]]() : '',
            ckwe7_ = ew_7k[W[1028]] ? ew_7k[W[1028]][W[103]]()[W[243]]('\x20', '') : '';
        window['$LDF'][W[1056]] = i4r0n[W[146]](W[1057]) != -0x1, window['$LDF'][W[1058]] = i4r0n[W[146]](W[1059]) != -0x1, window['$LDF'][W[1060]] = i4r0n[W[146]](W[1057]) != -0x1 || i4r0n[W[146]](W[1059]) != -0x1, window['$LDF'][W[1061]] = i4r0n[W[146]](W[1062]) != -0x1 || i4r0n[W[146]](W[1063]) != -0x1, window['$LDF'][W[1064]] = ew_7k[W[1034]] ? ew_7k[W[1034]][W[103]]() : '', window['$LDF']['$LTNPFD'] = ![], window['$LDF']['$LTNDPF'] = 0x2;
        if (i4r0n[W[146]](W[1059]) != -0x1) {
            if (ew_7k[W[1037]] >= 0x18) window['$LDF']['$LTNDPF'] = 0x3;else window['$LDF']['$LTNDPF'] = 0x2;
        } else {
            if (i4r0n[W[146]](W[1057]) != -0x1) {
                if (ew_7k[W[1037]] && ew_7k[W[1037]] >= 0x14) window['$LDF']['$LTNDPF'] = 0x3;else {
                    if (ckwe7_[W[146]](W[1065]) != -0x1 || ckwe7_[W[146]](W[1066]) != -0x1 || ckwe7_[W[146]](W[1067]) != -0x1 || ckwe7_[W[146]](W[1068]) != -0x1 || ckwe7_[W[146]](W[1069]) != -0x1) window['$LDF']['$LTNDPF'] = 0x2;else window['$LDF']['$LTNDPF'] = 0x3;
                }
            } else window['$LDF']['$LTNDPF'] = 0x2;
        }
        console[W[225]](W[1070] + window['$LDF']['$LTNPFD'] + W[1071] + window['$LDF']['$LTNDPF']);
    }
}), wx[W[1072]]({
    'success': function (a1dzb) {
        console[W[225]](W[1073] + a1dzb[W[1074]] + W[1075] + a1dzb[W[1076]]);
    }
}), wx[W[1077]]({
    'success': function (inr8m) {
        console[W[225]](W[1078] + inr8m[W[1079]]);
    }
}), wx[W[1080]]({ 'keepScreenOn': !![] }), wx[W[1081]](function (vda1zb) {
    console[W[225]](W[1078] + vda1zb[W[1079]] + W[1082] + vda1zb[W[1083]]);
}), wx[W[1084]](function (b4az5n) {
    window['$LPN'] = b4az5n, window['$LFNP'] && window['$LPN'] && (console[W[960]](W[1085] + window['$LPN'][W[1086]]), window['$LFNP'](window['$LPN']), window['$LPN'] = null);
}), window[W[1087]] = 0x0, window['$LTDPFN'] = 0x0, window[W[1088]] = null, wx[W[1089]](function () {
    window['$LTDPFN']++;
    var g6ypo = Date[W[1090]]();
    (window[W[1087]] == 0x0 || g6ypo - window[W[1087]] > 0x1d4c0) && (console[W[383]](W[1091]), wx[W[1092]]());
    if (window['$LTDPFN'] >= 0x2) {
        window['$LTDPFN'] = 0x0, console[W[333]](W[1093]), wx[W[1094]]('0', 0x1);
        if (window['$LDF'] && window['$LDF'][W[1056]]) window['$LDFN'](W[1095], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});