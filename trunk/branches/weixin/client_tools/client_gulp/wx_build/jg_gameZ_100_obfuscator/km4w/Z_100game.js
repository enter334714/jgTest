var f = wx.$B;
console[f[734]](f[1563]), window[f[1564]], wx[f[1565]](function (mjpz) {
    if (mjpz) {
        if (mjpz[f[40]]) {
            var vg3o = window[f[648]][f[649]][f[169]](new RegExp(/\./, 'g'), '_'),
                t4x0_ = mjpz[f[40]],
                bf6s = t4x0_[f[47]](/(pn2kf\/Z_100game.js:)[0-9]{1,60}(:)/g);
            if (bf6s) for (var t58rw4 = 0x0; t58rw4 < bf6s[f[24]]; t58rw4++) {
                if (bf6s[t58rw4] && bf6s[t58rw4][f[24]] > 0x0) {
                    var o$lg = parseInt(bf6s[t58rw4][f[169]](f[1566], '')[f[169]](':', ''));
                    t4x0_ = t4x0_[f[169]](bf6s[t58rw4], bf6s[t58rw4][f[169]](':' + o$lg + ':', ':' + (o$lg - 0x2) + ':'));
                }
            }
            t4x0_ = t4x0_[f[169]](new RegExp(f[1567], 'g'), f[1568] + vg3o + f[1569]), t4x0_ = t4x0_[f[169]](new RegExp(f[1570], 'g'), f[1568] + vg3o + f[1569]), mjpz[f[40]] = t4x0_;
        }
        var f9abd = {
            'id': window[f[657]][f[751]],
            'role': window[f[657]][f[752]],
            'level': window[f[657]][f[753]],
            'user': window[f[657]][f[754]],
            'version': window[f[657]][f[693]],
            'cdn': window[f[657]][f[755]],
            'pkgName': window[f[657]][f[674]],
            'gamever': window[f[648]][f[649]],
            'serverid': window[f[657]][f[680]] ? window[f[657]][f[680]][f[618]] : 0x0,
            'systemInfo': window[f[756]],
            'error': f[1571],
            'stack': mjpz ? mjpz[f[40]] : ''
        },
            hzqyeu = JSON[f[758]](f9abd);
        console[f[202]](f[1572] + hzqyeu), (!window[f[1564]] || window[f[1564]] != f9abd[f[202]]) && (window[f[1564]] = f9abd[f[202]], window[f[681]](f9abd));
    }
});
import 'a8mk.js';
import 'lu9o.js';
window[f[1573]] = require(f[1574]);
import 'a3u3a.js';
import 'mvkl.js';
import 'a4k.js';
import 'wdb.js';
console[f[734]](f[1575]), console[f[734]](f[1576]), t191EQ({ 'title': f[1577] });
var Smzpyj = { 't109Q1E': !![] };
new window[f[731]](Smzpyj), window[f[731]][f[732]][f[1478]]();
if (window[f[1578]]) clearInterval(window[f[1578]]);
window[f[1578]] = null, window[f[789]] = function (pmqzn, kx0t9_) {
    if (!pmqzn || !kx0t9_) return 0x0;
    pmqzn = pmqzn[f[148]]('.'), kx0t9_ = kx0t9_[f[148]]('.');
    const ol3g2v = Math[f[194]](pmqzn[f[24]], kx0t9_[f[24]]);
    while (pmqzn[f[24]] < ol3g2v) {
        pmqzn[f[46]]('0');
    }
    while (kx0t9_[f[24]] < ol3g2v) {
        kx0t9_[f[46]]('0');
    }
    for (var k9x = 0x0; k9x < ol3g2v; k9x++) {
        const dbfa6s = parseInt(pmqzn[k9x]),
              u6ds = parseInt(kx0t9_[k9x]);
        if (dbfa6s > u6ds) return 0x1;else {
            if (dbfa6s < u6ds) return -0x1;
        }
    }
    return 0x0;
}, window[f[945]] = wx[f[1579]]()[f[945]], console[f[159]](f[1580] + window[f[945]]);
var Snm$p1 = wx[f[1581]]();
Snm$p1[f[1582]](function (jpn$) {
    console[f[159]](f[1583] + jpn$[f[1584]]);
}), Snm$p1[f[1585]](function () {
    wx[f[711]]({
        'title': f[1586],
        'content': f[1587],
        'showCancel': ![],
        'success': function (j1$o2) {
            Snm$p1[f[1588]]();
        }
    });
}), Snm$p1[f[1589]](function () {
    console[f[159]](f[1590]);
}), window[f[1591]] = function () {
    console[f[159]](f[1592]);
    var l3go = wx[f[1593]]({
        'name': f[1594],
        'success': function ($mj1np) {
            console[f[159]](f[1595]), console[f[159]]($mj1np), $mj1np && $mj1np[f[814]] == f[1596] ? (window[f[700]] = !![], window[f[884]](), window[f[885]]()) : setTimeout(function () {
                window[f[1591]]();
            }, 0x1f4);
        },
        'fail': function (neqzy) {
            console[f[159]](f[1597]), console[f[159]](neqzy), setTimeout(function () {
                window[f[1591]]();
            }, 0x1f4);
        }
    });
    l3go && l3go[f[1598]](sak9d_ => {});
}, window[f[1599]] = function () {
    console[f[159]](f[1600]);
    var pyeqn = wx[f[1593]]({
        'name': f[1601],
        'success': function (uqh6ey) {
            console[f[159]](f[1602]), console[f[159]](uqh6ey), uqh6ey && uqh6ey[f[814]] == f[1596] ? (window[f[701]] = !![], window[f[884]](), window[f[885]]()) : setTimeout(function () {
                window[f[1599]]();
            }, 0x1f4);
        },
        'fail': function (_sa) {
            console[f[159]](f[1603]), console[f[159]](_sa), setTimeout(function () {
                window[f[1599]]();
            }, 0x1f4);
        }
    });
    pyeqn && pyeqn[f[1598]](_k5xt0 => {});
}, window[f[1604]] = function () {
    window[f[789]](window[f[945]], f[1605]) >= 0x0 ? (console[f[159]](f[1606] + window[f[945]] + f[1607]), window[f[721]](), window[f[1591]](), window[f[1599]]()) : (window[f[765]](f[1608], window[f[945]]), wx[f[711]]({
        'title': f[712],
        'content': f[1609]
    }));
}, window[f[756]] = '', wx[f[1610]]({
    'success'(_9ksda) {
        window[f[756]] = f[1611] + _9ksda[f[1612]] + f[1613] + _9ksda[f[1614]] + f[1615] + _9ksda[f[660]] + f[1616] + _9ksda[f[1617]] + f[1618] + _9ksda[f[834]] + f[1619] + _9ksda[f[945]] + f[1620] + _9ksda[f[1621]], console[f[159]](window[f[756]]), console[f[159]](f[1622] + _9ksda[f[1623]] + f[1624] + _9ksda[f[1625]] + f[1626] + _9ksda[f[1627]] + f[1628] + _9ksda[f[1629]] + f[1630] + _9ksda[f[1631]] + f[1632] + _9ksda[f[1633]] + f[1634] + (_9ksda[f[1635]] ? _9ksda[f[1635]][f[1057]] + ',' + _9ksda[f[1635]][f[1060]] + ',' + _9ksda[f[1635]][f[1062]] + ',' + _9ksda[f[1635]][f[1064]] : ''));
        var r875 = _9ksda[f[1617]] ? _9ksda[f[1617]][f[72]]() : '',
            yquz = _9ksda[f[1614]] ? _9ksda[f[1614]][f[72]]()[f[169]]('\x20', '') : '';
        window[f[657]][f[695]] = r875[f[106]](f[1636]) != -0x1, window[f[657]][f[696]] = r875[f[106]](f[625]) != -0x1, window[f[657]][f[1056]] = r875[f[106]](f[1636]) != -0x1 || r875[f[106]](f[625]) != -0x1, window[f[657]][f[697]] = r875[f[106]](f[1637]) != -0x1 || r875[f[106]](f[662]) != -0x1, window[f[657]][f[767]] = _9ksda[f[834]] ? _9ksda[f[834]][f[72]]() : '', window[f[657]][f[1051]] = ![], window[f[657]][f[1052]] = 0x2;
        if (r875[f[106]](f[625]) != -0x1) {
            if (_9ksda[f[1621]] >= 0x18) window[f[657]][f[1052]] = 0x3;else window[f[657]][f[1052]] = 0x2;
        } else {
            if (r875[f[106]](f[1636]) != -0x1) {
                if (_9ksda[f[1621]] && _9ksda[f[1621]] >= 0x14) window[f[657]][f[1052]] = 0x3;else {
                    if (yquz[f[106]](f[1638]) != -0x1 || yquz[f[106]](f[1639]) != -0x1 || yquz[f[106]](f[1640]) != -0x1 || yquz[f[106]](f[1641]) != -0x1 || yquz[f[106]](f[1642]) != -0x1) window[f[657]][f[1052]] = 0x2;else window[f[657]][f[1052]] = 0x3;
                }
            } else window[f[657]][f[1052]] = 0x2;
        }
        console[f[159]](f[1643] + window[f[657]][f[1051]] + f[1644] + window[f[657]][f[1052]]);
    }
}), wx[f[965]]({
    'success': function (w05r) {
        console[f[159]](f[1645] + w05r[f[967]] + f[1646] + w05r[f[969]]);
    }
}), wx[f[971]]({
    'success': function (ypezh) {
        console[f[159]](f[1647] + ypezh[f[1648]]);
    }
}), wx[f[1649]]({ 'keepScreenOn': !![] }), wx[f[972]](function (vg3li2) {
    console[f[159]](f[1647] + vg3li2[f[1648]] + f[1650] + vg3li2[f[1651]]);
}), wx[f[935]](function (nypqmz) {
    window[f[937]] = nypqmz, window[f[936]] && window[f[937]] && (console[f[734]](f[938] + window[f[937]][f[939]]), window[f[936]](window[f[937]]), window[f[937]] = null);
}), window[f[1652]] = 0x0, window[f[1653]] = 0x0, window[f[1654]] = null, wx[f[1655]](function () {
    window[f[1653]]++;
    var fbh6ud = Date[f[687]]();
    (window[f[1652]] == 0x0 || fbh6ud - window[f[1652]] > 0x1d4c0) && (console[f[215]](f[1656]), wx[f[1657]]());
    if (window[f[1653]] >= 0x2) {
        window[f[1653]] = 0x0, console[f[202]](f[1658]), wx[f[1659]]('0', 0x1);
        if (window[f[657]] && window[f[657]][f[695]]) window[f[765]](f[1660], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});