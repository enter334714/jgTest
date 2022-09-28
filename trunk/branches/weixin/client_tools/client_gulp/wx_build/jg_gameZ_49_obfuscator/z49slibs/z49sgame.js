var b = wx.$e;
console[b[654]](b[956]), window[b[957]], wx[b[958]](function (jsx31) {
    if (jsx31) {
        if (jsx31[b[959]]) {
            var wtiea$ = window[b[583]][b[584]][b[398]](new RegExp(/\./, 'g'), '_'),
                qu5h2n = jsx31[b[959]],
                $0ak_ = qu5h2n[b[569]](/(z49ssubPackage\/z49sgame.js:)[0-9]{1,60}(:)/g);
            if ($0ak_) for (var josx13 = 0x0; josx13 < $0ak_[b[284]]; josx13++) {
                if ($0ak_[josx13] && $0ak_[josx13][b[284]] > 0x0) {
                    var mk09 = parseInt($0ak_[josx13][b[398]](b[960], '')[b[398]](':', ''));
                    qu5h2n = qu5h2n[b[398]]($0ak_[josx13], $0ak_[josx13][b[398]](':' + mk09 + ':', ':' + (mk09 - 0x2) + ':'));
                }
            }
            qu5h2n = qu5h2n[b[398]](new RegExp(b[961], 'g'), b[962] + wtiea$ + b[963]), qu5h2n = qu5h2n[b[398]](new RegExp(b[964], 'g'), b[962] + wtiea$ + b[963]), jsx31[b[959]] = qu5h2n;
        }
        var tveaw = {
            'id': window[b[255]][b[665]],
            'role': window[b[255]][b[666]],
            'level': window[b[255]][b[667]],
            'user': window[b[255]][b[668]],
            'version': window[b[255]][b[314]],
            'cdn': window[b[255]][b[405]],
            'pkgName': window[b[255]][b[371]],
            'gamever': window[b[583]][b[584]],
            'serverid': window[b[255]][b[256]] ? window[b[255]][b[256]][b[76]] : 0x0,
            'systemInfo': window[b[669]],
            'error': b[965],
            'stack': jsx31 ? jsx31[b[959]] : ''
        },
            ox1mg3 = JSON[b[540]](tveaw);
        console[b[542]](b[966] + ox1mg3), (!window[b[957]] || window[b[957]] != tveaw[b[542]]) && (window[b[957]] = tveaw[b[542]], window[b[612]](tveaw));
    }
});
import 'ot3a.js';
import 'a47ybr.js';
window[b[967]] = require(b[968]);
import 'serlo.js';
import 'hnh.js';
import 'wq.js';
import 're4pp.js';
console[b[654]](b[969]), console[b[654]](b[970]), e1NIDZ({ 'title': b[971] });
var ee$v8tw = { 'e1ANZID': !![] };
new window[b[581]](ee$v8tw), window[b[581]][b[250]][b[506]]();
if (window[b[972]]) clearInterval(window[b[972]]);
window[b[972]] = null, window[b[702]] = function (ewit$, p6) {
    if (!ewit$ || !p6) return 0x0;
    ewit$ = ewit$[b[973]]('.'), p6 = p6[b[973]]('.');
    const k$0ia = Math[b[974]](ewit$[b[284]], p6[b[284]]);
    while (ewit$[b[284]] < k$0ia) {
        ewit$[b[433]]('0');
    }
    while (p6[b[284]] < k$0ia) {
        p6[b[433]]('0');
    }
    for (var i$ak = 0x0; i$ak < k$0ia; i$ak++) {
        const k0mf9_ = parseInt(ewit$[i$ak]),
              m0f_9k = parseInt(p6[i$ak]);
        if (k0mf9_ > m0f_9k) return 0x1;else {
            if (k0mf9_ < m0f_9k) return -0x1;
        }
    }
    return 0x0;
}, window[b[836]] = wx[b[975]]()[b[836]], console[b[425]](b[976] + window[b[836]]);
var ej5sq2 = wx[b[977]]();
ej5sq2[b[978]](function (ae$k_) {
    console[b[425]](b[979] + ae$k_[b[980]]);
}), ej5sq2[b[981]](function () {
    wx[b[635]]({
        'title': b[982],
        'content': b[983],
        'showCancel': ![],
        'success': function (s2jq5n) {
            ej5sq2[b[984]]();
        }
    });
}), ej5sq2[b[985]](function () {
    console[b[425]](b[986]);
}), window[b[987]] = function () {
    console[b[425]](b[988]);
    var _k0i = wx[b[989]]({
        'name': b[990],
        'success': function (q25snu) {
            console[b[425]](b[991]), console[b[425]](q25snu), q25snu && q25snu[b[726]] == b[992] ? (window[b[627]] = !![], window[b[512]](), window[b[513]]()) : setTimeout(function () {
                window[b[987]]();
            }, 0x1f4);
        },
        'fail': function (o91m) {
            console[b[425]](b[993]), console[b[425]](o91m), setTimeout(function () {
                window[b[987]]();
            }, 0x1f4);
        }
    });
    _k0i && _k0i[b[994]](vd8r4z => {});
}, window[b[995]] = function () {
    console[b[425]](b[996]);
    var r8v4z = wx[b[989]]({
        'name': b[997],
        'success': function (kiae$t) {
            console[b[425]](b[998]), console[b[425]](kiae$t), kiae$t && kiae$t[b[726]] == b[992] ? (window[b[628]] = !![], window[b[512]](), window[b[513]]()) : setTimeout(function () {
                window[b[995]]();
            }, 0x1f4);
        },
        'fail': function (bd4r7z) {
            console[b[425]](b[999]), console[b[425]](bd4r7z), setTimeout(function () {
                window[b[995]]();
            }, 0x1f4);
        }
    });
    r8v4z && r8v4z[b[994]](ogx3m => {});
}, window[b[1000]] = function () {
    window[b[702]](window[b[836]], b[1001]) >= 0x0 ? (console[b[425]](b[1002] + window[b[836]] + b[1003]), window[b[645]](), window[b[987]](), window[b[995]]()) : (window[b[678]](b[1004], window[b[836]]), wx[b[635]]({
        'title': b[636],
        'content': b[1005]
    }));
}, window[b[669]] = '', wx[b[1006]]({
    'success'(l2nu) {
        window[b[669]] = b[1007] + l2nu[b[1008]] + b[1009] + l2nu[b[1010]] + b[1011] + l2nu[b[595]] + b[1012] + l2nu[b[1013]] + b[1014] + l2nu[b[746]] + b[1015] + l2nu[b[836]] + b[1016] + l2nu[b[1017]], console[b[425]](window[b[669]]), console[b[425]](b[1018] + l2nu[b[1019]] + b[1020] + l2nu[b[1021]] + b[1022] + l2nu[b[1023]] + b[1024] + l2nu[b[1025]] + b[1026] + l2nu[b[1027]] + b[1028] + l2nu[b[1029]] + b[1030] + (l2nu[b[1031]] ? l2nu[b[1031]][b[206]] + ',' + l2nu[b[1031]][b[328]] + ',' + l2nu[b[1031]][b[943]] + ',' + l2nu[b[1031]][b[166]] : ''));
        var kta$ = l2nu[b[1013]] ? l2nu[b[1013]][b[1032]]() : '',
            v8t4w = l2nu[b[1010]] ? l2nu[b[1010]][b[1032]]()[b[398]]('\x20', '') : '';
        window[b[255]][b[622]] = kta$[b[562]](b[1033]) != -0x1, window[b[255]][b[623]] = kta$[b[562]](b[83]) != -0x1, window[b[255]][b[939]] = kta$[b[562]](b[1033]) != -0x1 || kta$[b[562]](b[83]) != -0x1, window[b[255]][b[624]] = kta$[b[562]](b[1034]) != -0x1 || kta$[b[562]](b[596]) != -0x1, window[b[255]][b[680]] = l2nu[b[746]] ? l2nu[b[746]][b[1032]]() : '', window[b[255]][b[935]] = ![], window[b[255]][b[936]] = 0x2;
        if (kta$[b[562]](b[83]) != -0x1) {
            if (l2nu[b[1017]] >= 0x18) window[b[255]][b[936]] = 0x3;else window[b[255]][b[936]] = 0x2;
        } else {
            if (kta$[b[562]](b[1033]) != -0x1) {
                if (l2nu[b[1017]] && l2nu[b[1017]] >= 0x14) window[b[255]][b[936]] = 0x3;else {
                    if (v8t4w[b[562]](b[1035]) != -0x1 || v8t4w[b[562]](b[1036]) != -0x1 || v8t4w[b[562]](b[1037]) != -0x1 || v8t4w[b[562]](b[1038]) != -0x1 || v8t4w[b[562]](b[1039]) != -0x1) window[b[255]][b[936]] = 0x2;else window[b[255]][b[936]] = 0x3;
                }
            } else window[b[255]][b[936]] = 0x2;
        }
        console[b[425]](b[1040] + window[b[255]][b[935]] + b[1041] + window[b[255]][b[936]]);
    }
}), wx[b[856]]({
    'success': function (fg9m_0) {
        console[b[425]](b[1042] + fg9m_0[b[858]] + b[1043] + fg9m_0[b[860]]);
    }
}), wx[b[862]]({
    'success': function ($_0k) {
        console[b[425]](b[1044] + $_0k[b[1045]]);
    }
}), wx[b[1046]]({ 'keepScreenOn': !![] }), wx[b[863]](function (vaw$te) {
    console[b[425]](b[1044] + vaw$te[b[1045]] + b[1047] + vaw$te[b[1048]]);
}), wx[b[826]](function (t84vw) {
    window[b[828]] = t84vw, window[b[827]] && window[b[828]] && (console[b[654]](b[829] + window[b[828]][b[830]]), window[b[827]](window[b[828]]), window[b[828]] = null);
}), window[b[1049]] = 0x0, window[b[1050]] = 0x0, window[b[1051]] = null, wx[b[1052]](function () {
    window[b[1050]]++;
    var w$te8 = Date[b[249]]();
    (window[b[1049]] == 0x0 || w$te8 - window[b[1049]] > 0x1d4c0) && (console[b[559]](b[1053]), wx[b[1054]]());
    if (window[b[1050]] >= 0x2) {
        window[b[1050]] = 0x0, console[b[542]](b[1055]), wx[b[1056]]('0', 0x1);
        if (window[b[255]] && window[b[255]][b[622]]) window[b[678]](b[1057], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});