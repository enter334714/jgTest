var a = wx.$y;
console[a[637]](a[37555]), window[a[37556]], wx[a[37557]](function (xf1sg) {
    if (xf1sg) {
        if (xf1sg[a[351]]) {
            var w2_eu = window[a[1130]][a[37558]][a[481]](new RegExp(/\./, 'g'), '_'),
                jnvsz = xf1sg[a[351]],
                p735t = jnvsz[a[359]](/(a2a3a1\/a12game.js:)[0-9]{1,60}(:)/g);
            if (p735t) for (var t358r = 0x0; t358r < p735t[a[335]]; t358r++) {
                if (p735t[t358r] && p735t[t358r][a[335]] > 0x0) {
                    var gxs12 = parseInt(p735t[t358r][a[481]](a[37559], '')[a[481]](':', ''));
                    jnvsz = jnvsz[a[481]](p735t[t358r], p735t[t358r][a[481]](':' + gxs12 + ':', ':' + (gxs12 - 0x2) + ':'));
                }
            }
            jnvsz = jnvsz[a[481]](new RegExp(a[37560], 'g'), a[37561] + w2_eu + a[29052]), jnvsz = jnvsz[a[481]](new RegExp(a[37562], 'g'), a[37561] + w2_eu + a[29052]), xf1sg[a[351]] = jnvsz;
        }
        var fsxg21 = {
            'id': window[a[5257]][a[37563]],
            'role': window[a[5257]][a[5388]],
            'level': window[a[5257]][a[37564]],
            'user': window[a[5257]][a[28948]],
            'version': window[a[5257]][a[660]],
            'cdn': window[a[5257]][a[5254]],
            'pkgName': window[a[5257]][a[28950]],
            'gamever': window[a[1130]][a[37558]],
            'serverid': window[a[5257]][a[28944]] ? window[a[5257]][a[28944]][a[12719]] : 0x0,
            'systemInfo': window[a[37565]],
            'error': a[37566],
            'stack': xf1sg ? xf1sg[a[351]] : ''
        },
            nxfsj = JSON[a[5240]](fsxg21);
        console[a[519]](a[37567] + nxfsj), (!window[a[37556]] || window[a[37556]] != fsxg21[a[519]]) && (window[a[37556]] = fsxg21[a[519]], window[a[37568]](fsxg21));
    }
});
import 'a1md5min.js';
import 'ea1zlibs.js';
window[a[37569]] = require(a[37570]);
import 'a1index.js';
import 'a1ibsmin.js';
import 'a1wxmini.js';
import 'a1initmin.js';
console[a[637]](a[37571]), console[a[637]](a[37572]), jM1BE({ 'title': a[37573] });
var ghjs = { 'j6ME1B': !![] };
new window[a[37574]](ghjs), window[a[37574]][a[706]][a[37575]]();
if (window[a[37576]]) clearInterval(window[a[37576]]);
window[a[37576]] = null, window[a[37577]] = function (jnhzkv, _g2wu) {
    if (!jnhzkv || !_g2wu) return 0x0;
    jnhzkv = jnhzkv[a[458]]('.'), _g2wu = _g2wu[a[458]]('.');
    const s2fg1 = Math[a[510]](jnhzkv[a[335]], _g2wu[a[335]]);
    while (jnhzkv[a[335]] < s2fg1) {
        jnhzkv[a[358]]('0');
    }
    while (_g2wu[a[335]] < s2fg1) {
        _g2wu[a[358]]('0');
    }
    for (var wu_oe4 = 0x0; wu_oe4 < s2fg1; wu_oe4++) {
        const nvjx = parseInt(jnhzkv[wu_oe4]),
              d6kzhv = parseInt(_g2wu[wu_oe4]);
        if (nvjx > d6kzhv) return 0x1;else {
            if (nvjx < d6kzhv) return -0x1;
        }
    }
    return 0x0;
}, window[a[37578]] = wx[a[37579]]()[a[37578]], console[a[471]](a[37580] + window[a[37578]]);
var gnxsfj = wx[a[37581]]();
gnxsfj[a[37582]](function (ymb$ca) {
    console[a[471]](a[37583] + ymb$ca[a[37584]]);
}), gnxsfj[a[37585]](function () {
    wx[a[37586]]({
        'title': a[37587],
        'content': a[37588],
        'showCancel': ![],
        'success': function (hdzq6) {
            gnxsfj[a[37589]]();
        }
    });
}), gnxsfj[a[37590]](function () {
    console[a[471]](a[37591]);
}), window[a[37592]] = function () {
    console[a[471]](a[37593]);
    var cybo$0 = wx[a[37594]]({
        'name': a[37595],
        'success': function (f12xsj) {
            console[a[471]](a[37596]), console[a[471]](f12xsj), f12xsj && f12xsj[a[28565]] == a[37597] ? (window[a[37598]] = !![], window[a[37599]](), window[a[37600]]()) : setTimeout(function () {
                window[a[37592]]();
            }, 0x1f4);
        },
        'fail': function (yb$) {
            console[a[471]](a[37601]), console[a[471]](yb$), setTimeout(function () {
                window[a[37592]]();
            }, 0x1f4);
        }
    });
    cybo$0 && cybo$0[a[37246]](cy4ob => {});
}, window[a[37602]] = function () {
    console[a[471]](a[37603]);
    var zdhkv = wx[a[37594]]({
        'name': a[37604],
        'success': function (c0bmy$) {
            console[a[471]](a[37605]), console[a[471]](c0bmy$), c0bmy$ && c0bmy$[a[28565]] == a[37597] ? (window[a[37606]] = !![], window[a[37599]](), window[a[37600]]()) : setTimeout(function () {
                window[a[37602]]();
            }, 0x1f4);
        },
        'fail': function (_uge2) {
            console[a[471]](a[37607]), console[a[471]](_uge2), setTimeout(function () {
                window[a[37602]]();
            }, 0x1f4);
        }
    });
    zdhkv && zdhkv[a[37246]](g1weu2 => {});
}, window[a[37608]] = function () {
    window[a[37577]](window[a[37578]], a[37609]) >= 0x0 ? (console[a[471]](a[37610] + window[a[37578]] + a[37611]), window[a[37612]](), window[a[37592]](), window[a[37602]]()) : (window[a[37613]](a[37614], window[a[37578]]), wx[a[37586]]({
        'title': a[6841],
        'content': a[37615]
    }));
}, window[a[37565]] = '', wx[a[37616]]({
    'success'(g4e_u) {
        window[a[37565]] = a[37617] + g4e_u[a[37618]] + a[37619] + g4e_u[a[37620]] + a[37621] + g4e_u[a[6089]] + a[37622] + g4e_u[a[1052]] + a[37623] + g4e_u[a[28902]] + a[37624] + g4e_u[a[37578]] + a[37625] + g4e_u[a[10366]], console[a[471]](window[a[37565]]), console[a[471]](a[37626] + g4e_u[a[33071]] + a[37627] + g4e_u[a[37628]] + a[37629] + g4e_u[a[37630]] + a[37631] + g4e_u[a[37632]] + a[37633] + g4e_u[a[37634]] + a[37635] + g4e_u[a[37636]] + a[37637] + (g4e_u[a[37638]] ? g4e_u[a[37638]][a[894]] + ',' + g4e_u[a[37638]][a[1968]] + ',' + g4e_u[a[37638]][a[1970]] + ',' + g4e_u[a[37638]][a[1969]] : ''));
        var $yb0co = g4e_u[a[1052]] ? g4e_u[a[1052]][a[385]]() : '',
            y4co0b = g4e_u[a[37620]] ? g4e_u[a[37620]][a[385]]()[a[481]]('\x20', '') : '';
        window[a[5257]][a[1695]] = $yb0co[a[418]](a[37639]) != -0x1, window[a[5257]][a[12543]] = $yb0co[a[418]](a[37529]) != -0x1, window[a[5257]][a[37640]] = $yb0co[a[418]](a[37639]) != -0x1 || $yb0co[a[418]](a[37529]) != -0x1, window[a[5257]][a[28576]] = $yb0co[a[418]](a[37641]) != -0x1 || $yb0co[a[418]](a[37642]) != -0x1, window[a[5257]][a[37643]] = g4e_u[a[28902]] ? g4e_u[a[28902]][a[385]]() : '', window[a[5257]][a[37644]] = ![], window[a[5257]][a[37645]] = 0x2;
        if ($yb0co[a[418]](a[37529]) != -0x1) {
            if (g4e_u[a[10366]] >= 0x18) window[a[5257]][a[37645]] = 0x3;else window[a[5257]][a[37645]] = 0x2;
        } else {
            if ($yb0co[a[418]](a[37639]) != -0x1) {
                if (g4e_u[a[10366]] && g4e_u[a[10366]] >= 0x14) window[a[5257]][a[37645]] = 0x3;else {
                    if (y4co0b[a[418]](a[37646]) != -0x1 || y4co0b[a[418]](a[37647]) != -0x1 || y4co0b[a[418]](a[37648]) != -0x1 || y4co0b[a[418]](a[37649]) != -0x1 || y4co0b[a[418]](a[37650]) != -0x1) window[a[5257]][a[37645]] = 0x2;else window[a[5257]][a[37645]] = 0x3;
                }
            } else window[a[5257]][a[37645]] = 0x2;
        }
        console[a[471]](a[37651] + window[a[5257]][a[37644]] + a[37652] + window[a[5257]][a[37645]]);
    }
}), wx[a[37653]]({
    'success': function (yc0$bo) {
        console[a[471]](a[37654] + yc0$bo[a[5364]] + a[37655] + yc0$bo[a[37656]]);
    }
}), wx[a[13104]]({
    'success': function (f1s2g) {
        console[a[471]](a[37657] + f1s2g[a[15152]]);
    }
}), wx[a[37658]]({ 'keepScreenOn': !![] }), wx[a[13106]](function (ri53p7) {
    console[a[471]](a[37657] + ri53p7[a[15152]] + a[37659] + ri53p7[a[37660]]);
}), wx[a[12032]](function (hknvz) {
    window[a[37661]] = hknvz, window[a[37662]] && window[a[37661]] && (console[a[637]](a[37663] + window[a[37661]][a[1396]]), window[a[37662]](window[a[37661]]), window[a[37661]] = null);
}), window[a[37664]] = 0x0, window[a[37665]] = 0x0, window[a[37666]] = null, wx[a[37667]](function () {
    window[a[37665]]++;
    var $bm0cy = Date[a[642]]();
    (window[a[37664]] == 0x0 || $bm0cy - window[a[37664]] > 0x1d4c0) && (console[a[535]](a[37668]), wx[a[13498]]());
    if (window[a[37665]] >= 0x2) {
        window[a[37665]] = 0x0, console[a[519]](a[37669]), wx[a[37670]]('0', 0x1);
        if (window[a[5257]] && window[a[5257]][a[1695]]) window[a[37613]](a[37671], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});