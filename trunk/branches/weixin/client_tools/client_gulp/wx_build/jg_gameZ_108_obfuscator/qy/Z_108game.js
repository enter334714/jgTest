var _j = wx.n$;
console[_j[1233]](_j[1500]), window[_j[1501]], wx[_j[1502]](function (o_70m) {
    if (o_70m) {
        if (o_70m[_j[452]]) {
            var mco_ = window[_j[1055]][_j[1181]][_j[577]](new RegExp(/\./, 'g'), '_'),
                o7630_ = o_70m[_j[452]],
                rsqb = o7630_[_j[459]](/(z2a\/Z_108game.js:)[0-9]{1,60}(:)/g);
            if (rsqb) for (var eygjh = 0x0; eygjh < rsqb[_j[436]]; eygjh++) {
                if (rsqb[eygjh] && rsqb[eygjh][_j[436]] > 0x0) {
                    var ja9g = parseInt(rsqb[eygjh][_j[577]](_j[1503], '')[_j[577]](':', ''));
                    o7630_ = o7630_[_j[577]](rsqb[eygjh], rsqb[eygjh][_j[577]](':' + ja9g + ':', ':' + (ja9g - 0x2) + ':'));
                }
            }
            o7630_ = o7630_[_j[577]](new RegExp(_j[1504], 'g'), _j[1505] + mco_ + _j[1506]), o7630_ = o7630_[_j[577]](new RegExp(_j[1507], 'g'), _j[1505] + mco_ + _j[1506]), o_70m[_j[452]] = o7630_;
        }
        var a9uvkg = {
            'id': window['y$X5'][_j[1242]],
            'role': window['y$X5'][_j[1243]],
            'level': window['y$X5'][_j[1244]],
            'user': window['y$X5'][_j[1245]],
            'version': window['y$X5'][_j[863]],
            'cdn': window['y$X5'][_j[974]],
            'pkgName': window['y$X5'][_j[945]],
            'gamever': window[_j[1055]][_j[1181]],
            'serverid': window['y$X5'][_j[808]] ? window['y$X5'][_j[808]][_j[71]] : 0x0,
            'systemInfo': window[_j[1246]],
            'error': _j[1508],
            'stack': o_70m ? o_70m[_j[452]] : ''
        },
            o_m370 = JSON[_j[1117]](a9uvkg);
        console[_j[610]](_j[1509] + o_m370), (!window[_j[1501]] || window[_j[1501]] != a9uvkg[_j[610]]) && (window[_j[1501]] = a9uvkg[_j[610]], window['y$IX'](a9uvkg));
    }
});
import 'a37o.js';
import 'dhxo.js';
window[_j[1510]] = require(_j[1511]);
import 'og8t.js';
import 'a430x0a.js';
import 'g17a.js';
import 'gpx.js';
console[_j[1233]](_j[1512]), console[_j[1233]](_j[1513]), y$IXT5({ 'title': _j[1514] });
var _qv7_ = { 'y$HI5XT': !![] };
new window[_j[1179]](_qv7_), window[_j[1179]][_j[804]]['y$HTX5I']();
if (window['y$HIX5T']) clearInterval(window['y$HIX5T']);
window['y$HIX5T'] = null, window['y$HT5IX'] = function (h5yjk, ag9vu) {
    if (!h5yjk || !ag9vu) return 0x0;
    h5yjk = h5yjk[_j[556]]('.'), ag9vu = ag9vu[_j[556]]('.');
    const ns1q = Math[_j[602]](h5yjk[_j[436]], ag9vu[_j[436]]);
    while (h5yjk[_j[436]] < ns1q) {
        h5yjk[_j[458]]('0');
    }
    while (ag9vu[_j[436]] < ns1q) {
        ag9vu[_j[458]]('0');
    }
    for (var bnqts1 = 0x0; bnqts1 < ns1q; bnqts1++) {
        const f3p62 = parseInt(h5yjk[bnqts1]),
              cou9m = parseInt(ag9vu[bnqts1]);
        if (f3p62 > cou9m) return 0x1;else {
            if (f3p62 < cou9m) return -0x1;
        }
    }
    return 0x0;
}, window[_j[1398]] = wx[_j[1515]]()[_j[1398]], console[_j[567]](_j[1516] + window[_j[1398]]);
var _qf6302p = wx[_j[1517]]();
_qf6302p[_j[1518]](function (hzyx) {
    console[_j[567]](_j[1519] + hzyx[_j[1520]]);
}), _qf6302p[_j[1521]](function () {
    wx[_j[1219]]({
        'title': _j[1522],
        'content': _j[1523],
        'showCancel': ![],
        'success': function (rip2wf) {
            _qf6302p[_j[1524]]();
        }
    });
}), _qf6302p[_j[1525]](function () {
    console[_j[567]](_j[1526]);
}), window['y$HT5XI'] = function () {
    console[_j[567]](_j[1527]);
    var yugka = wx[_j[1528]]({
        'name': _j[1529],
        'success': function (gujka9) {
            console[_j[567]](_j[1530]), console[_j[567]](gujka9), gujka9 && gujka9[_j[85]] == _j[1531] ? (window['y$5T'] = !![], window['y$5TXI'](), window['y$5XIT']()) : setTimeout(function () {
                window['y$HT5XI']();
            }, 0x1f4);
        },
        'fail': function (fiw2q) {
            console[_j[567]](_j[1532]), console[_j[567]](fiw2q), setTimeout(function () {
                window['y$HT5XI']();
            }, 0x1f4);
        }
    });
    yugka && yugka[_j[1533]](b1stn => {});
}, window['y$HXI5T'] = function () {
    console[_j[567]](_j[1534]);
    var f20rp = wx[_j[1528]]({
        'name': _j[1535],
        'success': function (aucv) {
            console[_j[567]](_j[1536]), console[_j[567]](aucv), aucv && aucv[_j[85]] == _j[1531] ? (window['y$XT5'] = !![], window['y$5TXI'](), window['y$5XIT']()) : setTimeout(function () {
                window['y$HXI5T']();
            }, 0x1f4);
        },
        'fail': function (cv9am) {
            console[_j[567]](_j[1537]), console[_j[567]](cv9am), setTimeout(function () {
                window['y$HXI5T']();
            }, 0x1f4);
        }
    });
    f20rp && f20rp[_j[1533]](n1sqb => {});
}, window[_j[1538]] = function () {
    window['y$HT5IX'](window[_j[1398]], _j[1539]) >= 0x0 ? (console[_j[567]](_j[1540] + window[_j[1398]] + _j[1541]), window['y$XI'](), window['y$HT5XI'](), window['y$HXI5T']()) : (window['y$X5I'](_j[1542], window[_j[1398]]), wx[_j[1219]]({
        'title': _j[1220],
        'content': _j[1543]
    }));
}, window[_j[1246]] = '', wx[_j[1544]]({
    'success'(cvamu9) {
        window[_j[1246]] = _j[1545] + cvamu9[_j[1546]] + _j[1547] + cvamu9[_j[1548]] + _j[1549] + cvamu9[_j[1188]] + _j[1550] + cvamu9[_j[1551]] + _j[1552] + cvamu9[_j[1310]] + _j[1553] + cvamu9[_j[1398]] + _j[1554] + cvamu9[_j[1555]], console[_j[567]](window[_j[1246]]), console[_j[567]](_j[1556] + cvamu9[_j[1557]] + _j[1558] + cvamu9[_j[1559]] + _j[1560] + cvamu9[_j[1561]] + _j[1562] + cvamu9[_j[1563]] + _j[1564] + cvamu9[_j[1565]] + _j[1566] + cvamu9[_j[1567]] + _j[1568] + (cvamu9[_j[1569]] ? cvamu9[_j[1569]][_j[756]] + ',' + cvamu9[_j[1569]][_j[877]] + ',' + cvamu9[_j[1569]][_j[1000]] + ',' + cvamu9[_j[1569]][_j[719]] : ''));
        var a9gukj = cvamu9[_j[1551]] ? cvamu9[_j[1551]][_j[484]]() : '',
            iswbqr = cvamu9[_j[1548]] ? cvamu9[_j[1548]][_j[484]]()[_j[577]]('\x20', '') : '';
        window['y$X5'][_j[1214]] = a9gukj[_j[516]](_j[56]) != -0x1, window['y$X5'][_j[1215]] = a9gukj[_j[516]](_j[78]) != -0x1, window['y$X5'][_j[1481]] = a9gukj[_j[516]](_j[56]) != -0x1 || a9gukj[_j[516]](_j[78]) != -0x1, window['y$X5'][_j[1216]] = a9gukj[_j[516]](_j[1570]) != -0x1 || a9gukj[_j[516]](_j[1189]) != -0x1, window['y$X5'][_j[1254]] = cvamu9[_j[1310]] ? cvamu9[_j[1310]][_j[484]]() : '', window['y$X5']['y$HIT5X'] = ![], window['y$X5']['y$HIXT5'] = 0x2;
        if (a9gukj[_j[516]](_j[78]) != -0x1) {
            if (cvamu9[_j[1555]] >= 0x18) window['y$X5']['y$HIXT5'] = 0x3;else window['y$X5']['y$HIXT5'] = 0x2;
        } else {
            if (a9gukj[_j[516]](_j[56]) != -0x1) {
                if (cvamu9[_j[1555]] && cvamu9[_j[1555]] >= 0x14) window['y$X5']['y$HIXT5'] = 0x3;else {
                    if (iswbqr[_j[516]](_j[1571]) != -0x1 || iswbqr[_j[516]](_j[1572]) != -0x1 || iswbqr[_j[516]](_j[1573]) != -0x1 || iswbqr[_j[516]](_j[1574]) != -0x1 || iswbqr[_j[516]](_j[1575]) != -0x1) window['y$X5']['y$HIXT5'] = 0x2;else window['y$X5']['y$HIXT5'] = 0x3;
                }
            } else window['y$X5']['y$HIXT5'] = 0x2;
        }
        console[_j[567]](_j[1576] + window['y$X5']['y$HIT5X'] + _j[1577] + window['y$X5']['y$HIXT5']);
    }
}), wx[_j[1414]]({
    'success': function (hgye5) {
        console[_j[567]](_j[1578] + hgye5[_j[1416]] + _j[1579] + hgye5[_j[1418]]);
    }
}), wx[_j[1420]]({
    'success': function (t8l1dn) {
        console[_j[567]](_j[1580] + t8l1dn[_j[1581]]);
    }
}), wx[_j[1582]]({ 'keepScreenOn': !![] }), wx[_j[1421]](function (kgyaju) {
    console[_j[567]](_j[1580] + kgyaju[_j[1581]] + _j[1583] + kgyaju[_j[1584]]);
}), wx[_j[1392]](function (tsqinb) {
    window['y$TI'] = tsqinb, window['y$5IT'] && window['y$TI'] && (console[_j[1233]](_j[1393] + window['y$TI'][_j[1394]]), window['y$5IT'](window['y$TI']), window['y$TI'] = null);
}), window[_j[1585]] = 0x0, window['y$HXT5I'] = 0x0, window[_j[1586]] = null, wx[_j[1587]](function () {
    window['y$HXT5I']++;
    var wpfr62 = Date[_j[803]]();
    (window[_j[1585]] == 0x0 || wpfr62 - window[_j[1585]] > 0x1d4c0) && (console[_j[623]](_j[1588]), wx[_j[1589]]());
    if (window['y$HXT5I'] >= 0x2) {
        window['y$HXT5I'] = 0x0, console[_j[610]](_j[1590]), wx[_j[1591]]('0', 0x1);
        if (window['y$X5'] && window['y$X5'][_j[1214]]) window['y$X5I'](_j[1592], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});