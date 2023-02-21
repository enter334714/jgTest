var b = wx.$e;
console[b[1261]](b[1563]), window[b[1564]], wx[b[1565]](function (tw$aie) {
    if (tw$aie) {
        if (tw$aie[b[131]]) {
            var zbc67d = window[b[1065]][b[1193]][b[261]](new RegExp(/\./, 'g'), '_'),
                cd7zr = tw$aie[b[131]],
                t4wve = cd7zr[b[138]](/(z49ssubPackage\/z49sgame.js:)[0-9]{1,60}(:)/g);
            if (t4wve) for (var cbdz7 = 0x0; cbdz7 < t4wve[b[115]]; cbdz7++) {
                if (t4wve[cbdz7] && t4wve[cbdz7][b[115]] > 0x0) {
                    var omg1x = parseInt(t4wve[cbdz7][b[261]](b[1566], '')[b[261]](':', ''));
                    cd7zr = cd7zr[b[261]](t4wve[cbdz7], t4wve[cbdz7][b[261]](':' + omg1x + ':', ':' + (omg1x - 0x2) + ':'));
                }
            }
            cd7zr = cd7zr[b[261]](new RegExp(b[1567], 'g'), b[1568] + zbc67d + b[1569]), cd7zr = cd7zr[b[261]](new RegExp(b[1570], 'g'), b[1568] + zbc67d + b[1569]), tw$aie[b[131]] = cd7zr;
        }
        var z7pcb = {
            'id': window[b[807]][b[1273]],
            'role': window[b[807]][b[1274]],
            'level': window[b[807]][b[1275]],
            'user': window[b[807]][b[1276]],
            'version': window[b[807]][b[865]],
            'cdn': window[b[807]][b[985]],
            'pkgName': window[b[807]][b[947]],
            'gamever': window[b[1065]][b[1193]],
            'serverid': window[b[807]][b[808]] ? window[b[807]][b[808]][b[76]] : 0x0,
            'systemInfo': window[b[1277]],
            'error': b[1571],
            'stack': tw$aie ? tw$aie[b[131]] : ''
        },
            go0m = JSON[b[1131]](z7pcb);
        console[b[294]](b[1572] + go0m), (!window[b[1564]] || window[b[1564]] != z7pcb[b[294]]) && (window[b[1564]] = z7pcb[b[294]], window[b[1220]](z7pcb));
    }
});
import 'ot3a.js';
import 'a47ybr.js';
window[b[1573]] = require(b[1574]);
import 'serlo.js';
import 'hnh.js';
import 'wq.js';
import 're4pp.js';
console[b[1261]](b[1575]), console[b[1261]](b[1576]), e1NIDZ({ 'title': b[1577] });
var ewt4r = { 'e1ANZID': !![] };
new window[b[1191]](ewt4r), window[b[1191]][b[802]][b[1097]]();
if (window[b[1578]]) clearInterval(window[b[1578]]);
window[b[1578]] = null, window[b[1306]] = function (_k0$ia, vwe$at) {
    if (!_k0$ia || !vwe$at) return 0x0;
    _k0$ia = _k0$ia[b[239]]('.'), vwe$at = vwe$at[b[239]]('.');
    const d7zr84 = Math[b[286]](_k0$ia[b[115]], vwe$at[b[115]]);
    while (_k0$ia[b[115]] < d7zr84) {
        _k0$ia[b[137]]('0');
    }
    while (vwe$at[b[115]] < d7zr84) {
        vwe$at[b[137]]('0');
    }
    for (var q25nsu = 0x0; q25nsu < d7zr84; q25nsu++) {
        const atkei$ = parseInt(_k0$ia[q25nsu]),
              nuhlq2 = parseInt(vwe$at[q25nsu]);
        if (atkei$ > nuhlq2) return 0x1;else {
            if (atkei$ < nuhlq2) return -0x1;
        }
    }
    return 0x0;
}, window[b[1446]] = wx[b[1579]]()[b[1446]], console[b[251]](b[1580] + window[b[1446]]);
var evt4ew8 = wx[b[1581]]();
evt4ew8[b[1582]](function (z4dr) {
    console[b[251]](b[1583] + z4dr[b[1584]]);
}), evt4ew8[b[1585]](function () {
    wx[b[1243]]({
        'title': b[1586],
        'content': b[1587],
        'showCancel': ![],
        'success': function (f9m0og) {
            evt4ew8[b[1588]]();
        }
    });
}), evt4ew8[b[1589]](function () {
    console[b[251]](b[1590]);
}), window[b[1591]] = function () {
    console[b[251]](b[1592]);
    var s325q = wx[b[1593]]({
        'name': b[1594],
        'success': function (i_e) {
            console[b[251]](b[1595]), console[b[251]](i_e), i_e && i_e[b[1331]] == b[1596] ? (window[b[1235]] = !![], window[b[1102]](), window[b[1103]]()) : setTimeout(function () {
                window[b[1591]]();
            }, 0x1f4);
        },
        'fail': function (_kia) {
            console[b[251]](b[1597]), console[b[251]](_kia), setTimeout(function () {
                window[b[1591]]();
            }, 0x1f4);
        }
    });
    s325q && s325q[b[1598]](mx9go => {});
}, window[b[1599]] = function () {
    console[b[251]](b[1600]);
    var i$teak = wx[b[1593]]({
        'name': b[1601],
        'success': function (j2snq5) {
            console[b[251]](b[1602]), console[b[251]](j2snq5), j2snq5 && j2snq5[b[1331]] == b[1596] ? (window[b[1236]] = !![], window[b[1102]](), window[b[1103]]()) : setTimeout(function () {
                window[b[1599]]();
            }, 0x1f4);
        },
        'fail': function (xg9omf) {
            console[b[251]](b[1603]), console[b[251]](xg9omf), setTimeout(function () {
                window[b[1599]]();
            }, 0x1f4);
        }
    });
    i$teak && i$teak[b[1598]](c6pb => {});
}, window[b[1604]] = function () {
    window[b[1306]](window[b[1446]], b[1605]) >= 0x0 ? (console[b[251]](b[1606] + window[b[1446]] + b[1607]), window[b[1253]](), window[b[1591]](), window[b[1599]]()) : (window[b[1285]](b[1608], window[b[1446]]), wx[b[1243]]({
        'title': b[1244],
        'content': b[1609]
    }));
}, window[b[1277]] = '', wx[b[1610]]({
    'success'(br7z4d) {
        window[b[1277]] = b[1611] + br7z4d[b[1612]] + b[1613] + br7z4d[b[1614]] + b[1615] + br7z4d[b[1203]] + b[1616] + br7z4d[b[1617]] + b[1618] + br7z4d[b[1351]] + b[1619] + br7z4d[b[1446]] + b[1620] + br7z4d[b[1621]], console[b[251]](window[b[1277]]), console[b[251]](b[1622] + br7z4d[b[1623]] + b[1624] + br7z4d[b[1625]] + b[1626] + br7z4d[b[1627]] + b[1628] + br7z4d[b[1629]] + b[1630] + br7z4d[b[1631]] + b[1632] + br7z4d[b[1633]] + b[1634] + (br7z4d[b[1635]] ? br7z4d[b[1635]][b[743]] + ',' + br7z4d[b[1635]][b[879]] + ',' + br7z4d[b[1635]][b[935]] + ',' + br7z4d[b[1635]][b[706]] : ''));
        var _ikf90 = br7z4d[b[1617]] ? br7z4d[b[1617]][b[164]]() : '',
            l2nyuh = br7z4d[b[1614]] ? br7z4d[b[1614]][b[164]]()[b[261]]('\x20', '') : '';
        window[b[807]][b[1230]] = _ikf90[b[197]](b[1636]) != -0x1, window[b[807]][b[1231]] = _ikf90[b[197]](b[83]) != -0x1, window[b[807]][b[1547]] = _ikf90[b[197]](b[1636]) != -0x1 || _ikf90[b[197]](b[83]) != -0x1, window[b[807]][b[1232]] = _ikf90[b[197]](b[1637]) != -0x1 || _ikf90[b[197]](b[1204]) != -0x1, window[b[807]][b[1287]] = br7z4d[b[1351]] ? br7z4d[b[1351]][b[164]]() : '', window[b[807]][b[1543]] = ![], window[b[807]][b[1544]] = 0x2;
        if (_ikf90[b[197]](b[83]) != -0x1) {
            if (br7z4d[b[1621]] >= 0x18) window[b[807]][b[1544]] = 0x3;else window[b[807]][b[1544]] = 0x2;
        } else {
            if (_ikf90[b[197]](b[1636]) != -0x1) {
                if (br7z4d[b[1621]] && br7z4d[b[1621]] >= 0x14) window[b[807]][b[1544]] = 0x3;else {
                    if (l2nyuh[b[197]](b[1638]) != -0x1 || l2nyuh[b[197]](b[1639]) != -0x1 || l2nyuh[b[197]](b[1640]) != -0x1 || l2nyuh[b[197]](b[1641]) != -0x1 || l2nyuh[b[197]](b[1642]) != -0x1) window[b[807]][b[1544]] = 0x2;else window[b[807]][b[1544]] = 0x3;
                }
            } else window[b[807]][b[1544]] = 0x2;
        }
        console[b[251]](b[1643] + window[b[807]][b[1543]] + b[1644] + window[b[807]][b[1544]]);
    }
}), wx[b[1466]]({
    'success': function (zrcdb) {
        console[b[251]](b[1645] + zrcdb[b[1468]] + b[1646] + zrcdb[b[1470]]);
    }
}), wx[b[1472]]({
    'success': function (un5q2h) {
        console[b[251]](b[1647] + un5q2h[b[1648]]);
    }
}), wx[b[1649]]({ 'keepScreenOn': !![] }), wx[b[1473]](function (xgo13) {
    console[b[251]](b[1647] + xgo13[b[1648]] + b[1650] + xgo13[b[1651]]);
}), wx[b[1436]](function (a$_kei) {
    window[b[1438]] = a$_kei, window[b[1437]] && window[b[1438]] && (console[b[1261]](b[1439] + window[b[1438]][b[1440]]), window[b[1437]](window[b[1438]]), window[b[1438]] = null);
}), window[b[1652]] = 0x0, window[b[1653]] = 0x0, window[b[1654]] = null, wx[b[1655]](function () {
    window[b[1653]]++;
    var zdvr48 = Date[b[801]]();
    (window[b[1652]] == 0x0 || zdvr48 - window[b[1652]] > 0x1d4c0) && (console[b[308]](b[1656]), wx[b[1657]]());
    if (window[b[1653]] >= 0x2) {
        window[b[1653]] = 0x0, console[b[294]](b[1658]), wx[b[1659]]('0', 0x1);
        if (window[b[807]] && window[b[807]][b[1230]]) window[b[1285]](b[1660], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});