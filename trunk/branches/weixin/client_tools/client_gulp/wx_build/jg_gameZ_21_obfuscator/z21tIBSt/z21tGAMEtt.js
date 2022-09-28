var v = wx.$d;
console[v[176]](v[965]), window[v[966]], wx[v[967]](function (l8udbf) {
    if (l8udbf) {
        if (l8udbf[v[968]]) {
            var k3z2vy = window[v[107]][v[108]][v[775]](new RegExp(/\./, 'g'), '_'),
                ha4pq5 = l8udbf[v[968]],
                iv = ha4pq5[v[927]](/(z21ttttttt\/z21tGAMEtt.js:)[0-9]{1,60}(:)/g);
            if (iv) for (var kwv = 0x0; kwv < iv[v[284]]; kwv++) {
                if (iv[kwv] && iv[kwv][v[284]] > 0x0) {
                    var mt0h = parseInt(iv[kwv][v[775]](v[969], '')[v[775]](':', ''));
                    ha4pq5 = ha4pq5[v[775]](iv[kwv], iv[kwv][v[775]](':' + mt0h + ':', ':' + (mt0h - 0x2) + ':'));
                }
            }
            ha4pq5 = ha4pq5[v[775]](new RegExp(v[970], 'g'), v[971] + k3z2vy + v[972]), ha4pq5 = ha4pq5[v[775]](new RegExp(v[973], 'g'), v[971] + k3z2vy + v[972]), l8udbf[v[968]] = ha4pq5;
        }
        var bu8lif = {
            'id': window['D$UX'][v[187]],
            'role': window['D$UX'][v[188]],
            'level': window['D$UX'][v[189]],
            'user': window['D$UX'][v[190]],
            'version': window['D$UX'][v[147]],
            'cdn': window['D$UX'][v[191]],
            'pkgName': window['D$UX'][v[130]],
            'gamever': window[v[107]][v[108]],
            'serverid': window['D$UX'][v[136]] ? window['D$UX'][v[136]][v[66]] : 0x0,
            'systemInfo': window[v[192]],
            'error': v[974],
            'stack': l8udbf ? l8udbf[v[968]] : ''
        },
            hp0qo4 = JSON[v[194]](bu8lif);
        console[v[195]](v[975] + hp0qo4), (!window[v[966]] || window[v[966]] != bu8lif[v[195]]) && (window[v[966]] = bu8lif[v[195]], window['D$RU'](bu8lif));
    }
});
import 'ttfttt.js';
import 'tt112tt.js';
window[v[976]] = require(v[977]);
import 'tINDtt.js';
import 'ttLIB23tt.js';
import 'tWXMtadtt.js';
import 'ttINItt.js';
console[v[176]](v[978]), console[v[176]](v[979]), D$RU7X({ 'title': v[980] });
var zck7nwy = { 'D$MRXU7': !![] };
new window[v[172]](zck7nwy), window[v[172]][v[173]]['D$M7UXR']();
if (window['D$MRUX7']) clearInterval(window['D$MRUX7']);
window['D$MRUX7'] = null, window['D$M7XRU'] = function (wyz, e7wycn) {
    if (!wyz || !e7wycn) return 0x0;
    wyz = wyz[v[332]]('.'), e7wycn = e7wycn[v[332]]('.');
    const ncyew = Math[v[981]](wyz[v[284]], e7wycn[v[284]]);
    while (wyz[v[284]] < ncyew) {
        wyz[v[364]]('0');
    }
    while (e7wycn[v[284]] < ncyew) {
        e7wycn[v[364]]('0');
    }
    for (var mgo = 0x0; mgo < ncyew; mgo++) {
        const ejc = parseInt(wyz[mgo]),
              mhq4 = parseInt(e7wycn[mgo]);
        if (ejc > mhq4) return 0x1;else {
            if (ejc < mhq4) return -0x1;
        }
    }
    return 0x0;
}, window[v[365]] = wx[v[982]]()[v[365]], console[v[156]](v[983] + window[v[365]]);
var zlb8fud = wx[v[984]]();
zlb8fud[v[985]](function (wyen7c) {
    console[v[156]](v[986] + wyen7c[v[987]]);
}), zlb8fud[v[988]](function () {
    wx[v[158]]({
        'title': v[989],
        'content': v[990],
        'showCancel': ![],
        'success': function (f1i8bl) {
            zlb8fud[v[991]]();
        }
    });
}), zlb8fud[v[992]](function () {
    console[v[156]](v[993]);
}), window['D$M7XUR'] = function () {
    console[v[156]](v[994]);
    var v2z6_ = wx[v[995]]({
        'name': v[996],
        'success': function (otg0$) {
            console[v[156]](v[997]), console[v[156]](otg0$), otg0$ && otg0$[v[248]] == v[998] ? (window['D$X7'] = !![], window['D$X7UR'](), window['D$XUR7']()) : setTimeout(function () {
                window['D$M7XUR']();
            }, 0x1f4);
        },
        'fail': function (uflib) {
            console[v[156]](v[999]), console[v[156]](uflib), setTimeout(function () {
                window['D$M7XUR']();
            }, 0x1f4);
        }
    });
    v2z6_ && v2z6_[v[1000]](fl => {});
}, window['D$MURX7'] = function () {
    console[v[156]](v[1001]);
    var ohq5p4 = wx[v[995]]({
        'name': v[1002],
        'success': function (ejn7cr) {
            console[v[156]](v[1003]), console[v[156]](ejn7cr), ejn7cr && ejn7cr[v[248]] == v[998] ? (window['D$U7X'] = !![], window['D$X7UR'](), window['D$XUR7']()) : setTimeout(function () {
                window['D$MURX7']();
            }, 0x1f4);
        },
        'fail': function (zyck3) {
            console[v[156]](v[1004]), console[v[156]](zyck3), setTimeout(function () {
                window['D$MURX7']();
            }, 0x1f4);
        }
    });
    ohq5p4 && ohq5p4[v[1000]](k3v2zy => {});
}, window[v[1005]] = function () {
    window['D$M7XRU'](window[v[365]], v[1006]) >= 0x0 ? (console[v[156]](v[1007] + window[v[365]] + v[1008]), window['D$UR'](), window['D$M7XUR'](), window['D$MURX7']()) : (window['D$UXR'](v[1009], window[v[365]]), wx[v[158]]({
        'title': v[159],
        'content': v[1010]
    }));
}, window[v[192]] = '', wx[v[1011]]({
    'success'(x4a5qp) {
        window[v[192]] = v[1012] + x4a5qp[v[1013]] + v[1014] + x4a5qp[v[1015]] + v[1016] + x4a5qp[v[116]] + v[1017] + x4a5qp[v[1018]] + v[1019] + x4a5qp[v[270]] + v[1020] + x4a5qp[v[365]] + v[1021] + x4a5qp[v[1022]], console[v[156]](window[v[192]]), console[v[156]](v[1023] + x4a5qp[v[1024]] + v[1025] + x4a5qp[v[1026]] + v[1027] + x4a5qp[v[1028]] + v[1029] + x4a5qp[v[1030]] + v[1031] + x4a5qp[v[1032]] + v[1033] + x4a5qp[v[1034]] + v[1035] + (x4a5qp[v[1036]] ? x4a5qp[v[1036]][v[463]] + ',' + x4a5qp[v[1036]][v[466]] + ',' + x4a5qp[v[1036]][v[468]] + ',' + x4a5qp[v[1036]][v[470]] : ''));
        var om$0t = x4a5qp[v[1018]] ? x4a5qp[v[1018]][v[1037]]() : '',
            wy7c3 = x4a5qp[v[1015]] ? x4a5qp[v[1015]][v[1037]]()[v[775]]('\x20', '') : '';
        window['D$UX'][v[149]] = om$0t[v[249]](v[1038]) != -0x1, window['D$UX'][v[150]] = om$0t[v[249]](v[86]) != -0x1, window['D$UX'][v[462]] = om$0t[v[249]](v[1038]) != -0x1 || om$0t[v[249]](v[86]) != -0x1, window['D$UX'][v[151]] = om$0t[v[249]](v[1039]) != -0x1 || om$0t[v[249]](v[118]) != -0x1, window['D$UX'][v[204]] = x4a5qp[v[270]] ? x4a5qp[v[270]][v[1037]]() : '', window['D$UX']['D$MR7XU'] = ![], window['D$UX']['D$MRU7X'] = 0x2;
        if (om$0t[v[249]](v[86]) != -0x1) {
            if (x4a5qp[v[1022]] >= 0x18) window['D$UX']['D$MRU7X'] = 0x3;else window['D$UX']['D$MRU7X'] = 0x2;
        } else {
            if (om$0t[v[249]](v[1038]) != -0x1) {
                if (x4a5qp[v[1022]] && x4a5qp[v[1022]] >= 0x14) window['D$UX']['D$MRU7X'] = 0x3;else {
                    if (wy7c3[v[249]](v[1040]) != -0x1 || wy7c3[v[249]](v[1041]) != -0x1 || wy7c3[v[249]](v[1042]) != -0x1 || wy7c3[v[249]](v[1043]) != -0x1 || wy7c3[v[249]](v[1044]) != -0x1) window['D$UX']['D$MRU7X'] = 0x2;else window['D$UX']['D$MRU7X'] = 0x3;
                }
            } else window['D$UX']['D$MRU7X'] = 0x2;
        }
        console[v[156]](v[1045] + window['D$UX']['D$MR7XU'] + v[1046] + window['D$UX']['D$MRU7X']);
    }
}), wx[v[384]]({
    'success': function (x59dua) {
        console[v[156]](v[1047] + x59dua[v[386]] + v[1048] + x59dua[v[388]]);
    }
}), wx[v[390]]({
    'success': function (buld8) {
        console[v[156]](v[1049] + buld8[v[1050]]);
    }
}), wx[v[1051]]({ 'keepScreenOn': !![] }), wx[v[391]](function (k2_3z) {
    console[v[156]](v[1049] + k2_3z[v[1050]] + v[1052] + k2_3z[v[1053]]);
}), wx[v[358]](function (adx9p5) {
    window['D$7R'] = adx9p5, window['D$XR7'] && window['D$7R'] && (console[v[176]](v[359] + window['D$7R'][v[360]]), window['D$XR7'](window['D$7R']), window['D$7R'] = null);
}), window[v[1054]] = 0x0, window['D$MU7XR'] = 0x0, window[v[1055]] = null, wx[v[1056]](function () {
    window['D$MU7XR']++;
    var w7ykcn = Date[v[142]]();
    (window[v[1054]] == 0x0 || w7ykcn - window[v[1054]] > 0x1d4c0) && (console[v[202]](v[1057]), wx[v[1058]]());
    if (window['D$MU7XR'] >= 0x2) {
        window['D$MU7XR'] = 0x0, console[v[195]](v[1059]), wx[v[1060]]('0', 0x1);
        if (window['D$UX'] && window['D$UX'][v[149]]) window['D$UXR'](v[1061], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});