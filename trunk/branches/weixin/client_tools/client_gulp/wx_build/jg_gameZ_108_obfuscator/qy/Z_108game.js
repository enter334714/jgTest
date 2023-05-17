var _j = wx.n$;
console[_j[1232]](_j[1499]), window[_j[1500]], wx[_j[1501]](function (ex$4z) {
    if (ex$4z) {
        if (ex$4z[_j[451]]) {
            var wqits = window[_j[1054]][_j[1180]][_j[576]](new RegExp(/\./, 'g'), '_'),
                sqbwi = ex$4z[_j[451]],
                co_ = sqbwi[_j[458]](/(z2a\/Z_108game.js:)[0-9]{1,60}(:)/g);
            if (co_) for (var d1nt8l = 0x0; d1nt8l < co_[_j[435]]; d1nt8l++) {
                if (co_[d1nt8l] && co_[d1nt8l][_j[435]] > 0x0) {
                    var c37o = parseInt(co_[d1nt8l][_j[576]](_j[1502], '')[_j[576]](':', ''));
                    sqbwi = sqbwi[_j[576]](co_[d1nt8l], co_[d1nt8l][_j[576]](':' + c37o + ':', ':' + (c37o - 0x2) + ':'));
                }
            }
            sqbwi = sqbwi[_j[576]](new RegExp(_j[1503], 'g'), _j[1504] + wqits + _j[1505]), sqbwi = sqbwi[_j[576]](new RegExp(_j[1506], 'g'), _j[1504] + wqits + _j[1505]), ex$4z[_j[451]] = sqbwi;
        }
        var x$e45z = {
            'id': window['y$X5'][_j[1241]],
            'role': window['y$X5'][_j[1242]],
            'level': window['y$X5'][_j[1243]],
            'user': window['y$X5'][_j[1244]],
            'version': window['y$X5'][_j[862]],
            'cdn': window['y$X5'][_j[973]],
            'pkgName': window['y$X5'][_j[944]],
            'gamever': window[_j[1054]][_j[1180]],
            'serverid': window['y$X5'][_j[807]] ? window['y$X5'][_j[807]][_j[71]] : 0x0,
            'systemInfo': window[_j[1245]],
            'error': _j[1507],
            'stack': ex$4z ? ex$4z[_j[451]] : ''
        },
            istbw = JSON[_j[1116]](x$e45z);
        console[_j[609]](_j[1508] + istbw), (!window[_j[1500]] || window[_j[1500]] != x$e45z[_j[609]]) && (window[_j[1500]] = x$e45z[_j[609]], window['y$IX'](x$e45z));
    }
});
import 'a37o.js';
import 'dhxo.js';
window[_j[1509]] = require(_j[1510]);
import 'og8t.js';
import 'a430x0a.js';
import 'g17a.js';
import 'gpx.js';
console[_j[1232]](_j[1511]), console[_j[1232]](_j[1512]), y$IXT5({ 'title': _j[1513] });
var _qfr2pw = { 'y$HI5XT': !![] };
new window[_j[1178]](_qfr2pw), window[_j[1178]][_j[803]]['y$HTX5I']();
if (window['y$HIX5T']) clearInterval(window['y$HIX5T']);
window['y$HIX5T'] = null, window['y$HT5IX'] = function (acvm9, aumcv9) {
    if (!acvm9 || !aumcv9) return 0x0;
    acvm9 = acvm9[_j[555]]('.'), aumcv9 = aumcv9[_j[555]]('.');
    const pirw2 = Math[_j[601]](acvm9[_j[435]], aumcv9[_j[435]]);
    while (acvm9[_j[435]] < pirw2) {
        acvm9[_j[457]]('0');
    }
    while (aumcv9[_j[435]] < pirw2) {
        aumcv9[_j[457]]('0');
    }
    for (var n1btq = 0x0; n1btq < pirw2; n1btq++) {
        const v9cuka = parseInt(acvm9[n1btq]),
              xzyhe = parseInt(aumcv9[n1btq]);
        if (v9cuka > xzyhe) return 0x1;else {
            if (v9cuka < xzyhe) return -0x1;
        }
    }
    return 0x0;
}, window[_j[1397]] = wx[_j[1514]]()[_j[1397]], console[_j[566]](_j[1515] + window[_j[1397]]);
var _qkayu = wx[_j[1516]]();
_qkayu[_j[1517]](function (ayukj) {
    console[_j[566]](_j[1518] + ayukj[_j[1519]]);
}), _qkayu[_j[1520]](function () {
    wx[_j[1218]]({
        'title': _j[1521],
        'content': _j[1522],
        'showCancel': ![],
        'success': function (ocm7v) {
            _qkayu[_j[1523]]();
        }
    });
}), _qkayu[_j[1524]](function () {
    console[_j[566]](_j[1525]);
}), window['y$HT5XI'] = function () {
    console[_j[566]](_j[1526]);
    var tn1bsq = wx[_j[1527]]({
        'name': _j[1528],
        'success': function (j5xehy) {
            console[_j[566]](_j[1529]), console[_j[566]](j5xehy), j5xehy && j5xehy[_j[85]] == _j[1530] ? (window['y$5T'] = !![], window['y$5TXI'](), window['y$5XIT']()) : setTimeout(function () {
                window['y$HT5XI']();
            }, 0x1f4);
        },
        'fail': function (pwf6) {
            console[_j[566]](_j[1531]), console[_j[566]](pwf6), setTimeout(function () {
                window['y$HT5XI']();
            }, 0x1f4);
        }
    });
    tn1bsq && tn1bsq[_j[1532]](uagkv9 => {});
}, window['y$HXI5T'] = function () {
    console[_j[566]](_j[1533]);
    var ugyajk = wx[_j[1527]]({
        'name': _j[1534],
        'success': function (fwris) {
            console[_j[566]](_j[1535]), console[_j[566]](fwris), fwris && fwris[_j[85]] == _j[1530] ? (window['y$XT5'] = !![], window['y$5TXI'](), window['y$5XIT']()) : setTimeout(function () {
                window['y$HXI5T']();
            }, 0x1f4);
        },
        'fail': function (f2irwq) {
            console[_j[566]](_j[1536]), console[_j[566]](f2irwq), setTimeout(function () {
                window['y$HXI5T']();
            }, 0x1f4);
        }
    });
    ugyajk && ugyajk[_j[1532]](hg5ej => {});
}, window[_j[1537]] = function () {
    window['y$HT5IX'](window[_j[1397]], _j[1538]) >= 0x0 ? (console[_j[566]](_j[1539] + window[_j[1397]] + _j[1540]), window['y$XI'](), window['y$HT5XI'](), window['y$HXI5T']()) : (window['y$X5I'](_j[1541], window[_j[1397]]), wx[_j[1218]]({
        'title': _j[1219],
        'content': _j[1542]
    }));
}, window[_j[1245]] = '', wx[_j[1543]]({
    'success'(aug9kv) {
        window[_j[1245]] = _j[1544] + aug9kv[_j[1545]] + _j[1546] + aug9kv[_j[1547]] + _j[1548] + aug9kv[_j[1187]] + _j[1549] + aug9kv[_j[1550]] + _j[1551] + aug9kv[_j[1309]] + _j[1552] + aug9kv[_j[1397]] + _j[1553] + aug9kv[_j[1554]], console[_j[566]](window[_j[1245]]), console[_j[566]](_j[1555] + aug9kv[_j[1556]] + _j[1557] + aug9kv[_j[1558]] + _j[1559] + aug9kv[_j[1560]] + _j[1561] + aug9kv[_j[1562]] + _j[1563] + aug9kv[_j[1564]] + _j[1565] + aug9kv[_j[1566]] + _j[1567] + (aug9kv[_j[1568]] ? aug9kv[_j[1568]][_j[755]] + ',' + aug9kv[_j[1568]][_j[876]] + ',' + aug9kv[_j[1568]][_j[999]] + ',' + aug9kv[_j[1568]][_j[718]] : ''));
        var a9juk = aug9kv[_j[1550]] ? aug9kv[_j[1550]][_j[483]]() : '',
            kuajg = aug9kv[_j[1547]] ? aug9kv[_j[1547]][_j[483]]()[_j[576]]('\x20', '') : '';
        window['y$X5'][_j[1213]] = a9juk[_j[515]](_j[56]) != -0x1, window['y$X5'][_j[1214]] = a9juk[_j[515]](_j[78]) != -0x1, window['y$X5'][_j[1480]] = a9juk[_j[515]](_j[56]) != -0x1 || a9juk[_j[515]](_j[78]) != -0x1, window['y$X5'][_j[1215]] = a9juk[_j[515]](_j[1569]) != -0x1 || a9juk[_j[515]](_j[1188]) != -0x1, window['y$X5'][_j[1253]] = aug9kv[_j[1309]] ? aug9kv[_j[1309]][_j[483]]() : '', window['y$X5']['y$HIT5X'] = ![], window['y$X5']['y$HIXT5'] = 0x2;
        if (a9juk[_j[515]](_j[78]) != -0x1) {
            if (aug9kv[_j[1554]] >= 0x18) window['y$X5']['y$HIXT5'] = 0x3;else window['y$X5']['y$HIXT5'] = 0x2;
        } else {
            if (a9juk[_j[515]](_j[56]) != -0x1) {
                if (aug9kv[_j[1554]] && aug9kv[_j[1554]] >= 0x14) window['y$X5']['y$HIXT5'] = 0x3;else {
                    if (kuajg[_j[515]](_j[1570]) != -0x1 || kuajg[_j[515]](_j[1571]) != -0x1 || kuajg[_j[515]](_j[1572]) != -0x1 || kuajg[_j[515]](_j[1573]) != -0x1 || kuajg[_j[515]](_j[1574]) != -0x1) window['y$X5']['y$HIXT5'] = 0x2;else window['y$X5']['y$HIXT5'] = 0x3;
                }
            } else window['y$X5']['y$HIXT5'] = 0x2;
        }
        console[_j[566]](_j[1575] + window['y$X5']['y$HIT5X'] + _j[1576] + window['y$X5']['y$HIXT5']);
    }
}), wx[_j[1413]]({
    'success': function (acmu9) {
        console[_j[566]](_j[1577] + acmu9[_j[1415]] + _j[1578] + acmu9[_j[1417]]);
    }
}), wx[_j[1419]]({
    'success': function (p60_7) {
        console[_j[566]](_j[1579] + p60_7[_j[1580]]);
    }
}), wx[_j[1581]]({ 'keepScreenOn': !![] }), wx[_j[1420]](function (o9_cvm) {
    console[_j[566]](_j[1579] + o9_cvm[_j[1580]] + _j[1582] + o9_cvm[_j[1583]]);
}), wx[_j[1391]](function (qbstn1) {
    window['y$TI'] = qbstn1, window['y$5IT'] && window['y$TI'] && (console[_j[1232]](_j[1392] + window['y$TI'][_j[1393]]), window['y$5IT'](window['y$TI']), window['y$TI'] = null);
}), window[_j[1584]] = 0x0, window['y$HXT5I'] = 0x0, window[_j[1585]] = null, wx[_j[1586]](function () {
    window['y$HXT5I']++;
    var kcv9ua = Date[_j[802]]();
    (window[_j[1584]] == 0x0 || kcv9ua - window[_j[1584]] > 0x1d4c0) && (console[_j[622]](_j[1587]), wx[_j[1588]]());
    if (window['y$HXT5I'] >= 0x2) {
        window['y$HXT5I'] = 0x0, console[_j[609]](_j[1589]), wx[_j[1590]]('0', 0x1);
        if (window['y$X5'] && window['y$X5'][_j[1213]]) window['y$X5I'](_j[1591], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});