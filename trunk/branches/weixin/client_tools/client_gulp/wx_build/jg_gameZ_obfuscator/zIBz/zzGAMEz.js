var B = wx.$z;
console[B[1047]](B[1414]), window[B[1415]], wx[B[1416]](function (v76ln) {
    if (v76ln) {
        if (v76ln[B[56]]) {
            var kbtydo = window[B[961]][B[962]][B[243]](new RegExp(/\./, 'g'), '_'),
                p1hg = v76ln[B[56]],
                f6l4gv = p1hg[B[67]](/(zzzzz\/zzGAMEz.js:)[0-9]{1,60}(:)/g);
            if (f6l4gv) for (var taeosz = 0x0; taeosz < f6l4gv[B[31]]; taeosz++) {
                if (f6l4gv[taeosz] && f6l4gv[taeosz][B[31]] > 0x0) {
                    var x91hsa = parseInt(f6l4gv[taeosz][B[243]](B[1417], '')[B[243]](':', ''));
                    p1hg = p1hg[B[243]](f6l4gv[taeosz], f6l4gv[taeosz][B[243]](':' + x91hsa + ':', ':' + (x91hsa - 0x2) + ':'));
                }
            }
            p1hg = p1hg[B[243]](new RegExp(B[1418], 'g'), B[1419] + kbtydo + B[1420]), p1hg = p1hg[B[243]](new RegExp(B[1421], 'g'), B[1419] + kbtydo + B[1420]), v76ln[B[56]] = p1hg;
        }
        var xza = {
            'id': window[B[970]][B[1063]],
            'role': window[B[970]][B[1064]],
            'level': window[B[970]][B[1065]],
            'user': window[B[970]][B[1066]],
            'version': window[B[970]][B[1005]],
            'cdn': window[B[970]][B[1067]],
            'pkgName': window[B[970]][B[987]],
            'gamever': window[B[961]][B[962]],
            'serverid': window[B[970]][B[993]] ? window[B[970]][B[993]][B[1068]] : 0x0,
            'systemInfo': window[B[1069]],
            'error': B[1422],
            'stack': v76ln ? v76ln[B[56]] : ''
        },
            vfp64g = JSON[B[1071]](xza);
        console[B[333]](B[1423] + vfp64g), (!window[B[1415]] || window[B[1415]] != xza[B[333]]) && (window[B[1415]] = xza[B[333]], window[B[994]](xza));
    }
});
import 'zzbfzz.js';
import 'zz11zz.js';
window[B[1424]] = require(B[1425]);
import 'zINDzz.js';
import 'zzIB1zz.js';
import 'zzMtadzz.js';
import 'zzINIzz.js';
console[B[1047]](B[1426]), console[B[1047]](B[1427]), z00JYD({ 'title': B[1428] });
var zydobk8 = { 'z0R0DJY': !![] };
new window[B[1043]](zydobk8), window[B[1043]][B[1044]][B[1429]]();
if (window[B[1430]]) clearInterval(window[B[1430]]);
window[B[1430]] = null, window[B[1102]] = function (_205wu, dtozey) {
    if (!_205wu || !dtozey) return 0x0;
    _205wu = _205wu[B[201]]('.'), dtozey = dtozey[B[201]]('.');
    const zoed = Math[B[301]](_205wu[B[31]], dtozey[B[31]]);
    while (_205wu[B[31]] < zoed) {
        _205wu[B[66]]('0');
    }
    while (dtozey[B[31]] < zoed) {
        dtozey[B[66]]('0');
    }
    for (var d8kr = 0x0; d8kr < zoed; d8kr++) {
        const $qmi = parseInt(_205wu[d8kr]),
              l6fv = parseInt(dtozey[d8kr]);
        if ($qmi > l6fv) return 0x1;else {
            if ($qmi < l6fv) return -0x1;
        }
    }
    return 0x0;
}, window[B[1273]] = wx[B[1431]]()[B[1273]], console[B[225]](B[1432] + window[B[1273]]);
var zetsazx = wx[B[1433]]();
zetsazx[B[1434]](function (v7fnl6) {
    console[B[225]](B[1435] + v7fnl6[B[1436]]);
}), zetsazx[B[1437]](function () {
    wx[B[1023]]({
        'title': B[1438],
        'content': B[1439],
        'showCancel': ![],
        'success': function (ea1s9) {
            zetsazx[B[1440]]();
        }
    });
}), zetsazx[B[1441]](function () {
    console[B[225]](B[1442]);
}), window[B[1443]] = function () {
    console[B[225]](B[1444]);
    var tdeoz = wx[B[1445]]({
        'name': B[1446],
        'success': function (zaxet) {
            console[B[225]](B[1447]), console[B[225]](zaxet), zaxet && zaxet[B[1127]] == B[1448] ? (window[B[1012]] = !![], window[B[1201]](), window[B[1202]]()) : setTimeout(function () {
                window[B[1443]]();
            }, 0x1f4);
        },
        'fail': function (yezotd) {
            console[B[225]](B[1449]), console[B[225]](yezotd), setTimeout(function () {
                window[B[1443]]();
            }, 0x1f4);
        }
    });
    tdeoz && tdeoz[B[1450]](e9asz => {});
}, window[B[1451]] = function () {
    console[B[225]](B[1452]);
    var p14g6 = wx[B[1445]]({
        'name': B[1453],
        'success': function (kbr85) {
            console[B[225]](B[1454]), console[B[225]](kbr85), kbr85 && kbr85[B[1127]] == B[1448] ? (window[B[1013]] = !![], window[B[1201]](), window[B[1202]]()) : setTimeout(function () {
                window[B[1451]]();
            }, 0x1f4);
        },
        'fail': function (doybt) {
            console[B[225]](B[1455]), console[B[225]](doybt), setTimeout(function () {
                window[B[1451]]();
            }, 0x1f4);
        }
    });
    p14g6 && p14g6[B[1450]](yetdoz => {});
}, window[B[1456]] = function () {
    window[B[1102]](window[B[1273]], B[1457]) >= 0x0 ? (console[B[225]](B[1458] + window[B[1273]] + B[1459]), window[B[1033]](), window[B[1443]](), window[B[1451]]()) : (window[B[1078]](B[1460], window[B[1273]]), wx[B[1023]]({
        'title': B[1024],
        'content': B[1461]
    }));
}, window[B[1069]] = '', wx[B[1462]]({
    'success'(ztydeo) {
        window[B[1069]] = B[1463] + ztydeo[B[1464]] + B[1465] + ztydeo[B[1466]] + B[1467] + ztydeo[B[973]] + B[1468] + ztydeo[B[1469]] + B[1470] + ztydeo[B[1148]] + B[1471] + ztydeo[B[1273]] + B[1472] + ztydeo[B[1473]], console[B[225]](window[B[1069]]), console[B[225]](B[1474] + ztydeo[B[1475]] + B[1476] + ztydeo[B[1477]] + B[1478] + ztydeo[B[1479]] + B[1480] + ztydeo[B[1481]] + B[1482] + ztydeo[B[1483]] + B[1484] + ztydeo[B[1485]] + B[1486] + (ztydeo[B[1487]] ? ztydeo[B[1487]][B[1386]] + ',' + ztydeo[B[1487]][B[1389]] + ',' + ztydeo[B[1487]][B[1391]] + ',' + ztydeo[B[1487]][B[1393]] : ''));
        var nlv67f = ztydeo[B[1469]] ? ztydeo[B[1469]][B[103]]() : '',
            g6fvp = ztydeo[B[1466]] ? ztydeo[B[1466]][B[103]]()[B[243]]('\x20', '') : '';
        window[B[970]][B[1007]] = nlv67f[B[146]](B[1488]) != -0x1, window[B[970]][B[1008]] = nlv67f[B[146]](B[1489]) != -0x1, window[B[970]][B[1385]] = nlv67f[B[146]](B[1488]) != -0x1 || nlv67f[B[146]](B[1489]) != -0x1, window[B[970]][B[1009]] = nlv67f[B[146]](B[1490]) != -0x1 || nlv67f[B[146]](B[975]) != -0x1, window[B[970]][B[1080]] = ztydeo[B[1148]] ? ztydeo[B[1148]][B[103]]() : '', window[B[970]][B[1381]] = ![], window[B[970]][B[1382]] = 0x2;
        if (nlv67f[B[146]](B[1489]) != -0x1) {
            if (ztydeo[B[1473]] >= 0x18) window[B[970]][B[1382]] = 0x3;else window[B[970]][B[1382]] = 0x2;
        } else {
            if (nlv67f[B[146]](B[1488]) != -0x1) {
                if (ztydeo[B[1473]] && ztydeo[B[1473]] >= 0x14) window[B[970]][B[1382]] = 0x3;else {
                    if (g6fvp[B[146]](B[1491]) != -0x1 || g6fvp[B[146]](B[1492]) != -0x1 || g6fvp[B[146]](B[1493]) != -0x1 || g6fvp[B[146]](B[1494]) != -0x1 || g6fvp[B[146]](B[1495]) != -0x1) window[B[970]][B[1382]] = 0x2;else window[B[970]][B[1382]] = 0x3;
                }
            } else window[B[970]][B[1382]] = 0x2;
        }
        console[B[225]](B[1496] + window[B[970]][B[1381]] + B[1497] + window[B[970]][B[1382]]);
    }
}), wx[B[1294]]({
    'success': function (i3$7qm) {
        console[B[225]](B[1498] + i3$7qm[B[1296]] + B[1499] + i3$7qm[B[1298]]);
    }
}), wx[B[1300]]({
    'success': function (w_250u) {
        console[B[225]](B[1500] + w_250u[B[1501]]);
    }
}), wx[B[1502]]({ 'keepScreenOn': !![] }), wx[B[1301]](function (tzaxes) {
    console[B[225]](B[1500] + tzaxes[B[1501]] + B[1503] + tzaxes[B[1504]]);
}), wx[B[1263]](function (_520) {
    window[B[1265]] = _520, window[B[1264]] && window[B[1265]] && (console[B[1047]](B[1266] + window[B[1265]][B[1267]]), window[B[1264]](window[B[1265]]), window[B[1265]] = null);
}), window[B[1505]] = 0x0, window[B[1506]] = 0x0, window[B[1507]] = null, wx[B[1508]](function () {
    window[B[1506]]++;
    var rbkyd = Date[B[1000]]();
    (window[B[1505]] == 0x0 || rbkyd - window[B[1505]] > 0x1d4c0) && (console[B[383]](B[1509]), wx[B[1510]]());
    if (window[B[1506]] >= 0x2) {
        window[B[1506]] = 0x0, console[B[333]](B[1511]), wx[B[1512]]('0', 0x1);
        if (window[B[970]] && window[B[970]][B[1007]]) window[B[1078]](B[1513], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});