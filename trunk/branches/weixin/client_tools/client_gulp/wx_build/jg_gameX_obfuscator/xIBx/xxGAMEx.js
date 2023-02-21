var u = wx.$x;
console[u[1051]](u[1361]), window[u[1362]], wx[u[1363]](function (l8f9y7) {
    if (l8f9y7) {
        if (l8f9y7[u[56]]) {
            var e0qaph = window[u[972]][u[973]][u[243]](new RegExp(/\./, 'g'), '_'),
                t26w31 = l8f9y7[u[56]],
                lcf78 = t26w31[u[67]](/(xxxxxxxxx\/xxGAMEx.js:)[0-9]{1,60}(:)/g);
            if (lcf78) for (var dvg4i = 0x0; dvg4i < lcf78[u[31]]; dvg4i++) {
                if (lcf78[dvg4i] && lcf78[dvg4i][u[31]] > 0x0) {
                    var vudngj = parseInt(lcf78[dvg4i][u[243]](u[1364], '')[u[243]](':', ''));
                    t26w31 = t26w31[u[243]](lcf78[dvg4i], lcf78[dvg4i][u[243]](':' + vudngj + ':', ':' + (vudngj - 0x2) + ':'));
                }
            }
            t26w31 = t26w31[u[243]](new RegExp(u[1365], 'g'), u[1366] + e0qaph + u[1367]), t26w31 = t26w31[u[243]](new RegExp(u[1368], 'g'), u[1366] + e0qaph + u[1367]), l8f9y7[u[56]] = t26w31;
        }
        var toz2 = {
            'id': window[u[980]][u[1063]],
            'role': window[u[980]][u[1064]],
            'level': window[u[980]][u[1065]],
            'user': window[u[980]][u[1066]],
            'version': window[u[980]][u[1015]],
            'cdn': window[u[980]][u[1067]],
            'pkgName': window[u[980]][u[997]],
            'gamever': window[u[972]][u[973]],
            'serverid': window[u[980]][u[1003]] ? window[u[980]][u[1003]][u[1068]] : 0x0,
            'systemInfo': window[u[1069]],
            'error': u[1369],
            'stack': l8f9y7 ? l8f9y7[u[56]] : ''
        },
            hpa0 = JSON[u[1071]](toz2);
        console[u[333]](u[1370] + hpa0), (!window[u[1362]] || window[u[1362]] != toz2[u[333]]) && (window[u[1362]] = toz2[u[333]], window['x1$6'](toz2));
    }
});
import 'xxfxx.js';
import 'xx11xx.js';
window[u[1371]] = require(u[1372]);
import 'xINDxx.js';
import 'xxIB1xx.js';
import 'xxMtadxx.js';
import 'xxINIxxx.js';
console[u[1051]](u[1373]), console[u[1051]](u[1374]), x1$6J9({ 'title': u[1375] });
var xuvjcdn = { 'x1T$96J': !![] };
new window[u[1047]](xuvjcdn), window[u[1047]][u[1048]]['x1TJ69$']();
if (window['x1T$69J']) clearInterval(window['x1T$69J']);
window['x1T$69J'] = null, window['x1TJ9$6'] = function (s4xidg, omi4s) {
    if (!s4xidg || !omi4s) return 0x0;
    s4xidg = s4xidg[u[201]]('.'), omi4s = omi4s[u[201]]('.');
    const n4 = Math[u[301]](s4xidg[u[31]], omi4s[u[31]]);
    while (s4xidg[u[31]] < n4) {
        s4xidg[u[66]]('0');
    }
    while (omi4s[u[31]] < n4) {
        omi4s[u[66]]('0');
    }
    for (var gudjvn = 0x0; gudjvn < n4; gudjvn++) {
        const hb0pk = parseInt(s4xidg[gudjvn]),
              igdv = parseInt(omi4s[gudjvn]);
        if (hb0pk > igdv) return 0x1;else {
            if (hb0pk < igdv) return -0x1;
        }
    }
    return 0x0;
}, window[u[1242]] = wx[u[1376]]()[u[1242]], console[u[225]](u[1377] + window[u[1242]]);
var xe0hbw = wx[u[1378]]();
xe0hbw[u[1379]](function (phar) {
    console[u[225]](u[1380] + phar[u[1381]]);
}), xe0hbw[u[1382]](function () {
    wx[u[1033]]({
        'title': u[1383],
        'content': u[1384],
        'showCancel': ![],
        'success': function (imosz) {
            xe0hbw[u[1385]]();
        }
    });
}), xe0hbw[u[1386]](function () {
    console[u[225]](u[1387]);
}), window['x1TJ96$'] = function () {
    console[u[225]](u[1388]);
    var pahe0 = wx[u[1389]]({
        'name': u[1390],
        'success': function (ixgd) {
            console[u[225]](u[1391]), console[u[225]](ixgd), ixgd && ixgd[u[1122]] == u[1392] ? (window[u[1022]] = !![], window['x19J6$'](), window['x196$J']()) : setTimeout(function () {
                window['x1TJ96$']();
            }, 0x1f4);
        },
        'fail': function (so2z5) {
            console[u[225]](u[1393]), console[u[225]](so2z5), setTimeout(function () {
                window['x1TJ96$']();
            }, 0x1f4);
        }
    });
    pahe0 && pahe0[u[1394]](s2m5oz => {});
}, window['x1T6$9J'] = function () {
    console[u[225]](u[1395]);
    var dx4gis = wx[u[1389]]({
        'name': u[1396],
        'success': function (ujdncv) {
            console[u[225]](u[1397]), console[u[225]](ujdncv), ujdncv && ujdncv[u[1122]] == u[1392] ? (window[u[1023]] = !![], window['x19J6$'](), window['x196$J']()) : setTimeout(function () {
                window['x1T6$9J']();
            }, 0x1f4);
        },
        'fail': function (wk0e1) {
            console[u[225]](u[1398]), console[u[225]](wk0e1), setTimeout(function () {
                window['x1T6$9J']();
            }, 0x1f4);
        }
    });
    dx4gis && dx4gis[u[1394]](u4gdv => {});
}, window[u[1399]] = function () {
    window['x1TJ9$6'](window[u[1242]], u[1400]) >= 0x0 ? (console[u[225]](u[1401] + window[u[1242]] + u[1402]), window['x16$'](), window['x1TJ96$'](), window['x1T6$9J']()) : (window['x169$'](u[1403], window[u[1242]]), wx[u[1033]]({
        'title': u[1034],
        'content': u[1404]
    }));
}, window[u[1069]] = '', wx[u[1405]]({
    'success'(w3k0) {
        window[u[1069]] = u[1406] + w3k0[u[1407]] + u[1408] + w3k0[u[1409]] + u[1410] + w3k0[u[983]] + u[1411] + w3k0[u[1412]] + u[1413] + w3k0[u[1143]] + u[1414] + w3k0[u[1242]] + u[1415] + w3k0[u[1416]], console[u[225]](window[u[1069]]), console[u[225]](u[1417] + w3k0[u[1418]] + u[1419] + w3k0[u[1420]] + u[1421] + w3k0[u[1422]] + u[1423] + w3k0[u[1424]] + u[1425] + w3k0[u[1426]] + u[1427] + w3k0[u[1428]] + u[1429] + (w3k0[u[1430]] ? w3k0[u[1430]][u[1339]] + ',' + w3k0[u[1430]][u[1342]] + ',' + w3k0[u[1430]][u[1344]] + ',' + w3k0[u[1430]][u[1346]] : ''));
        var gudvj = w3k0[u[1412]] ? w3k0[u[1412]][u[103]]() : '',
            l9jf7 = w3k0[u[1409]] ? w3k0[u[1409]][u[103]]()[u[243]]('\x20', '') : '';
        window[u[980]][u[1017]] = gudvj[u[146]](u[1431]) != -0x1, window[u[980]][u[1018]] = gudvj[u[146]](u[1432]) != -0x1, window[u[980]][u[1338]] = gudvj[u[146]](u[1431]) != -0x1 || gudvj[u[146]](u[1432]) != -0x1, window[u[980]][u[1019]] = gudvj[u[146]](u[1433]) != -0x1 || gudvj[u[146]](u[985]) != -0x1, window[u[980]][u[1078]] = w3k0[u[1143]] ? w3k0[u[1143]][u[103]]() : '', window[u[980]]['x1T$J96'] = ![], window[u[980]]['x1T$6J9'] = 0x2;
        if (gudvj[u[146]](u[1432]) != -0x1) {
            if (w3k0[u[1416]] >= 0x18) window[u[980]]['x1T$6J9'] = 0x3;else window[u[980]]['x1T$6J9'] = 0x2;
        } else {
            if (gudvj[u[146]](u[1431]) != -0x1) {
                if (w3k0[u[1416]] && w3k0[u[1416]] >= 0x14) window[u[980]]['x1T$6J9'] = 0x3;else {
                    if (l9jf7[u[146]](u[1434]) != -0x1 || l9jf7[u[146]](u[1435]) != -0x1 || l9jf7[u[146]](u[1436]) != -0x1 || l9jf7[u[146]](u[1437]) != -0x1 || l9jf7[u[146]](u[1438]) != -0x1) window[u[980]]['x1T$6J9'] = 0x2;else window[u[980]]['x1T$6J9'] = 0x3;
                }
            } else window[u[980]]['x1T$6J9'] = 0x2;
        }
        console[u[225]](u[1439] + window[u[980]]['x1T$J96'] + u[1440] + window[u[980]]['x1T$6J9']);
    }
}), wx[u[1261]]({
    'success': function (lnc9fj) {
        console[u[225]](u[1441] + lnc9fj[u[1263]] + u[1442] + lnc9fj[u[1265]]);
    }
}), wx[u[1267]]({
    'success': function (bh0kwe) {
        console[u[225]](u[1443] + bh0kwe[u[1444]]);
    }
}), wx[u[1445]]({ 'keepScreenOn': !![] }), wx[u[1268]](function (hb0we) {
    console[u[225]](u[1443] + hb0we[u[1444]] + u[1446] + hb0we[u[1447]]);
}), wx[u[1236]](function (kb0w1e) {
    window['x1J$'] = kb0w1e, window['x19$J'] && window['x1J$'] && (console[u[1051]](u[1237] + window['x1J$'][u[1238]]), window['x19$J'](window['x1J$']), window['x1J$'] = null);
}), window[u[1448]] = 0x0, window['x1T6J9$'] = 0x0, window[u[1449]] = null, wx[u[1450]](function () {
    window['x1T6J9$']++;
    var y8l7$9 = Date[u[1009]]();
    (window[u[1448]] == 0x0 || y8l7$9 - window[u[1448]] > 0x1d4c0) && (console[u[383]](u[1451]), wx[u[1452]]());
    if (window['x1T6J9$'] >= 0x2) {
        window['x1T6J9$'] = 0x0, console[u[333]](u[1453]), wx[u[1454]]('0', 0x1);
        if (window[u[980]] && window[u[980]][u[1017]]) window['x169$'](u[1455], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});