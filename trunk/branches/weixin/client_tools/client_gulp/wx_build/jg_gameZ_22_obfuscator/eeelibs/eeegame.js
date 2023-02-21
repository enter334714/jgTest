var b = wx.$e;
console[b[80]](b[35067]), window[b[35068]], wx[b[35069]](function (xgm$b) {
    if (xgm$b) {
        if (xgm$b[b[4547]]) {
            var ze89l0 = window[b[593]][b[35070]][b[4248]](new RegExp(/\./, 'g'), '_'),
                povuw = xgm$b[b[4547]],
                hd4qf6 = povuw[b[12736]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
            if (hd4qf6) for (var rs$x0m = 0x0; rs$x0m < hd4qf6[b[14]]; rs$x0m++) {
                if (hd4qf6[rs$x0m] && hd4qf6[rs$x0m][b[14]] > 0x0) {
                    var el8 = parseInt(hd4qf6[rs$x0m][b[4248]](b[35071], '')[b[4248]](':', ''));
                    povuw = povuw[b[4248]](hd4qf6[rs$x0m], hd4qf6[rs$x0m][b[4248]](':' + el8 + ':', ':' + (el8 - 0x2) + ':'));
                }
            }
            povuw = povuw[b[4248]](new RegExp(b[35072], 'g'), b[35073] + ze89l0 + b[27655]), povuw = povuw[b[4248]](new RegExp(b[35074], 'g'), b[35073] + ze89l0 + b[27655]), xgm$b[b[4547]] = povuw;
        }
        var li985 = {
            'id': window[b[4545]][b[35075]],
            'role': window[b[4545]][b[4676]],
            'level': window[b[4545]][b[35076]],
            'user': window[b[4545]][b[27544]],
            'version': window[b[4545]][b[107]],
            'cdn': window[b[4545]][b[4542]],
            'pkgName': window[b[4545]][b[27546]],
            'gamever': window[b[593]][b[35070]],
            'serverid': window[b[4545]][b[27540]] ? window[b[4545]][b[27540]][b[11928]] : 0x0,
            'systemInfo': window[b[35077]],
            'error': b[35078],
            'stack': xgm$b ? xgm$b[b[4547]] : ''
        },
            c9fi = JSON[b[4528]](li985);
        console[b[141]](b[35079] + c9fi), (!window[b[35068]] || window[b[35068]] != li985[b[141]]) && (window[b[35068]] = li985[b[141]], window[b[35080]](li985));
    }
});
import 'eeemd5min.js';
import 'eeezlibs.js';
window[b[35081]] = require(b[35082]);
import 'eeeindex.js';
import 'eeelibsmin.js';
import 'eeewxmini.js';
import 'eeeinitmin.js';
console[b[80]](b[35083]), console[b[80]](b[35084]), e1G7OT({ 'title': b[35085] });
var eh6fdq4 = { 'e1UGT7O': !![] };
new window[b[35086]](eh6fdq4), window[b[35086]][b[164]][b[35087]]();
if (window[b[35088]]) clearInterval(window[b[35088]]);
window[b[35088]] = null, window[b[35089]] = function (q6dth, s0me8r) {
    if (!q6dth || !s0me8r) return 0x0;
    q6dth = q6dth[b[16]]('.'), s0me8r = s0me8r[b[16]]('.');
    const wvyuo2 = Math[b[940]](q6dth[b[14]], s0me8r[b[14]]);
    while (q6dth[b[14]] < wvyuo2) {
        q6dth[b[31]]('0');
    }
    while (s0me8r[b[14]] < wvyuo2) {
        s0me8r[b[31]]('0');
    }
    for (var xr$sm = 0x0; xr$sm < wvyuo2; xr$sm++) {
        const l8ez0 = parseInt(q6dth[xr$sm]),
              l9ci5z = parseInt(s0me8r[xr$sm]);
        if (l8ez0 > l9ci5z) return 0x1;else {
            if (l8ez0 < l9ci5z) return -0x1;
        }
    }
    return 0x0;
}, window[b[35090]] = wx[b[35091]]()[b[35090]], console[b[517]](b[35092] + window[b[35090]]);
var elz985i = wx[b[35093]]();
elz985i[b[35094]](function (bxsg$m) {
    console[b[517]](b[35095] + bxsg$m[b[35096]]);
}), elz985i[b[35097]](function () {
    wx[b[35098]]({
        'title': b[35099],
        'content': b[35100],
        'showCancel': ![],
        'success': function (gmsbx$) {
            elz985i[b[35101]]();
        }
    });
}), elz985i[b[35102]](function () {
    console[b[517]](b[35103]);
}), window[b[35104]] = function () {
    console[b[517]](b[35105]);
    var zil985 = wx[b[35106]]({
        'name': b[35107],
        'success': function (yuov2) {
            console[b[517]](b[35108]), console[b[517]](yuov2), yuov2 && yuov2[b[27757]] == b[35109] ? (window[b[35110]] = !![], window[b[35111]](), window[b[35112]]()) : setTimeout(function () {
                window[b[35104]]();
            }, 0x1f4);
        },
        'fail': function (fq59i) {
            console[b[517]](b[35113]), console[b[517]](fq59i), setTimeout(function () {
                window[b[35104]]();
            }, 0x1f4);
        }
    });
    zil985 && zil985[b[34348]](p7v => {});
}, window[b[35114]] = function () {
    console[b[517]](b[35115]);
    var _ja = wx[b[35106]]({
        'name': b[35116],
        'success': function ($sxgmb) {
            console[b[517]](b[35117]), console[b[517]]($sxgmb), $sxgmb && $sxgmb[b[27757]] == b[35109] ? (window[b[35118]] = !![], window[b[35111]](), window[b[35112]]()) : setTimeout(function () {
                window[b[35114]]();
            }, 0x1f4);
        },
        'fail': function (_njk) {
            console[b[517]](b[35119]), console[b[517]](_njk), setTimeout(function () {
                window[b[35114]]();
            }, 0x1f4);
        }
    });
    _ja && _ja[b[34348]](d_64t => {});
}, window[b[35120]] = function () {
    window[b[35089]](window[b[35090]], b[35121]) >= 0x0 ? (console[b[517]](b[35122] + window[b[35090]] + b[35123]), window[b[35124]](), window[b[35104]](), window[b[35114]]()) : (window[b[35125]](b[35126], window[b[35090]]), wx[b[35098]]({
        'title': b[6132],
        'content': b[35127]
    }));
}, window[b[35077]] = '', wx[b[35128]]({
    'success'(icf9q) {
        window[b[35077]] = b[35129] + icf9q[b[35130]] + b[35131] + icf9q[b[35132]] + b[35133] + icf9q[b[5374]] + b[35134] + icf9q[b[510]] + b[35135] + icf9q[b[27498]] + b[35136] + icf9q[b[35090]] + b[35137] + icf9q[b[9613]], console[b[517]](window[b[35077]]), console[b[517]](b[35138] + icf9q[b[31114]] + b[35139] + icf9q[b[35140]] + b[35141] + icf9q[b[35142]] + b[35143] + icf9q[b[35144]] + b[35145] + icf9q[b[35146]] + b[35147] + icf9q[b[35148]] + b[35149] + (icf9q[b[35150]] ? icf9q[b[35150]][b[347]] + ',' + icf9q[b[35150]][b[1432]] + ',' + icf9q[b[35150]][b[1434]] + ',' + icf9q[b[35150]][b[1433]] : ''));
        var q59if = icf9q[b[510]] ? icf9q[b[510]][b[13059]]() : '',
            cqi5 = icf9q[b[35132]] ? icf9q[b[35132]][b[13059]]()[b[4248]]('\x20', '') : '';
        window[b[4545]][b[1165]] = q59if[b[122]](b[35151]) != -0x1, window[b[4545]][b[11756]] = q59if[b[122]](b[35045]) != -0x1, window[b[4545]][b[35152]] = q59if[b[122]](b[35151]) != -0x1 || q59if[b[122]](b[35045]) != -0x1, window[b[4545]][b[27189]] = q59if[b[122]](b[35153]) != -0x1 || q59if[b[122]](b[35154]) != -0x1, window[b[4545]][b[35155]] = icf9q[b[27498]] ? icf9q[b[27498]][b[13059]]() : '', window[b[4545]][b[35156]] = ![], window[b[4545]][b[35157]] = 0x2;
        if (q59if[b[122]](b[35045]) != -0x1) {
            if (icf9q[b[9613]] >= 0x18) window[b[4545]][b[35157]] = 0x3;else window[b[4545]][b[35157]] = 0x2;
        } else {
            if (q59if[b[122]](b[35151]) != -0x1) {
                if (icf9q[b[9613]] && icf9q[b[9613]] >= 0x14) window[b[4545]][b[35157]] = 0x3;else {
                    if (cqi5[b[122]](b[35158]) != -0x1 || cqi5[b[122]](b[35159]) != -0x1 || cqi5[b[122]](b[35160]) != -0x1 || cqi5[b[122]](b[35161]) != -0x1 || cqi5[b[122]](b[35162]) != -0x1) window[b[4545]][b[35157]] = 0x2;else window[b[4545]][b[35157]] = 0x3;
                }
            } else window[b[4545]][b[35157]] = 0x2;
        }
        console[b[517]](b[35163] + window[b[4545]][b[35156]] + b[35164] + window[b[4545]][b[35157]]);
    }
}), wx[b[35165]]({
    'success': function (hiqdcf) {
        console[b[517]](b[35166] + hiqdcf[b[4652]] + b[35167] + hiqdcf[b[35168]]);
    }
}), wx[b[12309]]({
    'success': function (d_64th) {
        console[b[517]](b[35169] + d_64th[b[14135]]);
    }
}), wx[b[35170]]({ 'keepScreenOn': !![] }), wx[b[12311]](function (mr8s0) {
    console[b[517]](b[35169] + mr8s0[b[14135]] + b[35171] + mr8s0[b[35172]]);
}), wx[b[11248]](function (b$gs) {
    window[b[35173]] = b$gs, window[b[35174]] && window[b[35173]] && (console[b[80]](b[35175] + window[b[35173]][b[863]]), window[b[35174]](window[b[35173]]), window[b[35173]] = null);
}), window[b[35176]] = 0x0, window[b[35177]] = 0x0, window[b[35178]] = null, wx[b[35179]](function () {
    window[b[35177]]++;
    var ouwvp = Date[b[85]]();
    (window[b[35176]] == 0x0 || ouwvp - window[b[35176]] > 0x1d4c0) && (console[b[100]](b[35180]), wx[b[12573]]());
    if (window[b[35177]] >= 0x2) {
        window[b[35177]] = 0x0, console[b[141]](b[35181]), wx[b[35182]]('0', 0x1);
        if (window[b[4545]] && window[b[4545]][b[1165]]) window[b[35125]](b[35183], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});