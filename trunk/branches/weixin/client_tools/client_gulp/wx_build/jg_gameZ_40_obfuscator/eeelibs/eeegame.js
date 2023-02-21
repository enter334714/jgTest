var b = wx.$e;
console[b[80]](b[35055]), window[b[35056]], wx[b[35057]](function (yhz) {
    if (yhz) {
        if (yhz[b[4547]]) {
            var ocepa = window[b[593]][b[35058]][b[4248]](new RegExp(/\./, 'g'), '_'),
                opcmae = yhz[b[4547]],
                ix$gl = opcmae[b[12727]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
            if (ix$gl) for (var qu9kn = 0x0; qu9kn < ix$gl[b[14]]; qu9kn++) {
                if (ix$gl[qu9kn] && ix$gl[qu9kn][b[14]] > 0x0) {
                    var hlx$t = parseInt(ix$gl[qu9kn][b[4248]](b[35059], '')[b[4248]](':', ''));
                    opcmae = opcmae[b[4248]](ix$gl[qu9kn], ix$gl[qu9kn][b[4248]](':' + hlx$t + ':', ':' + (hlx$t - 0x2) + ':'));
                }
            }
            opcmae = opcmae[b[4248]](new RegExp(b[35060], 'g'), b[35061] + ocepa + b[27645]), opcmae = opcmae[b[4248]](new RegExp(b[35062], 'g'), b[35061] + ocepa + b[27645]), yhz[b[4547]] = opcmae;
        }
        var b680d = {
            'id': window[b[4545]][b[35063]],
            'role': window[b[4545]][b[4676]],
            'level': window[b[4545]][b[35064]],
            'user': window[b[4545]][b[27534]],
            'version': window[b[4545]][b[107]],
            'cdn': window[b[4545]][b[4542]],
            'pkgName': window[b[4545]][b[27536]],
            'gamever': window[b[593]][b[35058]],
            'serverid': window[b[4545]][b[27530]] ? window[b[4545]][b[27530]][b[11919]] : 0x0,
            'systemInfo': window[b[35065]],
            'error': b[35066],
            'stack': yhz ? yhz[b[4547]] : ''
        },
            b60d5 = JSON[b[4528]](b680d);
        console[b[141]](b[35067] + b60d5), (!window[b[35056]] || window[b[35056]] != b680d[b[141]]) && (window[b[35056]] = b680d[b[141]], window[b[35068]](b680d));
    }
});
import 'eeemd5min.js';
import 'eeezlibs.js';
window[b[35069]] = require(b[35070]);
import 'eeeindex.js';
import 'eeelibsmin.js';
import 'eeewxmini.js';
import 'eeeinitmin.js';
console[b[80]](b[35071]), console[b[80]](b[35072]), e11UG0({ 'title': b[35073] });
var en$qij3 = { 'e1I10UG': !![] };
new window[b[35074]](en$qij3), window[b[35074]][b[164]][b[35075]]();
if (window[b[35076]]) clearInterval(window[b[35076]]);
window[b[35076]] = null, window[b[35077]] = function ($glx, ryzlhf) {
    if (!$glx || !ryzlhf) return 0x0;
    $glx = $glx[b[16]]('.'), ryzlhf = ryzlhf[b[16]]('.');
    const zfhyr = Math[b[940]]($glx[b[14]], ryzlhf[b[14]]);
    while ($glx[b[14]] < zfhyr) {
        $glx[b[31]]('0');
    }
    while (ryzlhf[b[14]] < zfhyr) {
        ryzlhf[b[31]]('0');
    }
    for (var b58w0d = 0x0; b58w0d < zfhyr; b58w0d++) {
        const b9suk6 = parseInt($glx[b58w0d]),
              j3xg$ = parseInt(ryzlhf[b58w0d]);
        if (b9suk6 > j3xg$) return 0x1;else {
            if (b9suk6 < j3xg$) return -0x1;
        }
    }
    return 0x0;
}, window[b[35078]] = wx[b[35079]]()[b[35078]], console[b[517]](b[35080] + window[b[35078]]);
var ev74f_ = wx[b[35081]]();
ev74f_[b[35082]](function (nus9qk) {
    console[b[517]](b[35083] + nus9qk[b[35084]]);
}), ev74f_[b[35085]](function () {
    wx[b[35086]]({
        'title': b[35087],
        'content': b[35088],
        'showCancel': ![],
        'success': function (rghxlt) {
            ev74f_[b[35089]]();
        }
    });
}), ev74f_[b[35090]](function () {
    console[b[517]](b[35091]);
}), window[b[35092]] = function () {
    console[b[517]](b[35093]);
    var qnsj3 = wx[b[35094]]({
        'name': b[35095],
        'success': function (_47yf) {
            console[b[517]](b[35096]), console[b[517]](_47yf), _47yf && _47yf[b[27747]] == b[35097] ? (window[b[35098]] = !![], window[b[35099]](), window[b[35100]]()) : setTimeout(function () {
                window[b[35092]]();
            }, 0x1f4);
        },
        'fail': function (x$ti) {
            console[b[517]](b[35101]), console[b[517]](x$ti), setTimeout(function () {
                window[b[35092]]();
            }, 0x1f4);
        }
    });
    qnsj3 && qnsj3[b[34338]](jqn$3 => {});
}, window[b[35102]] = function () {
    console[b[517]](b[35103]);
    var b9usk6 = wx[b[35094]]({
        'name': b[35104],
        'success': function (a_47fv) {
            console[b[517]](b[35105]), console[b[517]](a_47fv), a_47fv && a_47fv[b[27747]] == b[35097] ? (window[b[35106]] = !![], window[b[35099]](), window[b[35100]]()) : setTimeout(function () {
                window[b[35102]]();
            }, 0x1f4);
        },
        'fail': function (qj3ni$) {
            console[b[517]](b[35107]), console[b[517]](qj3ni$), setTimeout(function () {
                window[b[35102]]();
            }, 0x1f4);
        }
    });
    b9usk6 && b9usk6[b[34338]](yzvrf4 => {});
}, window[b[35108]] = function () {
    window[b[35077]](window[b[35078]], b[35109]) >= 0x0 ? (console[b[517]](b[35110] + window[b[35078]] + b[35111]), window[b[35112]](), window[b[35092]](), window[b[35102]]()) : (window[b[35113]](b[35114], window[b[35078]]), wx[b[35086]]({
        'title': b[6132],
        'content': b[35115]
    }));
}, window[b[35065]] = '', wx[b[35116]]({
    'success'(n9qku) {
        window[b[35065]] = b[35117] + n9qku[b[35118]] + b[35119] + n9qku[b[35120]] + b[35121] + n9qku[b[5374]] + b[35122] + n9qku[b[510]] + b[35123] + n9qku[b[27488]] + b[35124] + n9qku[b[35078]] + b[35125] + n9qku[b[9613]], console[b[517]](window[b[35065]]), console[b[517]](b[35126] + n9qku[b[31104]] + b[35127] + n9qku[b[35128]] + b[35129] + n9qku[b[35130]] + b[35131] + n9qku[b[35132]] + b[35133] + n9qku[b[35134]] + b[35135] + n9qku[b[35136]] + b[35137] + (n9qku[b[35138]] ? n9qku[b[35138]][b[347]] + ',' + n9qku[b[35138]][b[1432]] + ',' + n9qku[b[35138]][b[1434]] + ',' + n9qku[b[35138]][b[1433]] : ''));
        var fy4r = n9qku[b[510]] ? n9qku[b[510]][b[13050]]() : '',
            w1d2 = n9qku[b[35120]] ? n9qku[b[35120]][b[13050]]()[b[4248]]('\x20', '') : '';
        window[b[4545]][b[1165]] = fy4r[b[122]](b[35139]) != -0x1, window[b[4545]][b[11747]] = fy4r[b[122]](b[34605]) != -0x1, window[b[4545]][b[35140]] = fy4r[b[122]](b[35139]) != -0x1 || fy4r[b[122]](b[34605]) != -0x1, window[b[4545]][b[27180]] = fy4r[b[122]](b[35141]) != -0x1 || fy4r[b[122]](b[35142]) != -0x1, window[b[4545]][b[35143]] = n9qku[b[27488]] ? n9qku[b[27488]][b[13050]]() : '', window[b[4545]][b[35144]] = ![], window[b[4545]][b[35145]] = 0x2;
        if (fy4r[b[122]](b[34605]) != -0x1) {
            if (n9qku[b[9613]] >= 0x18) window[b[4545]][b[35145]] = 0x3;else window[b[4545]][b[35145]] = 0x2;
        } else {
            if (fy4r[b[122]](b[35139]) != -0x1) {
                if (n9qku[b[9613]] && n9qku[b[9613]] >= 0x14) window[b[4545]][b[35145]] = 0x3;else {
                    if (w1d2[b[122]](b[35146]) != -0x1 || w1d2[b[122]](b[35147]) != -0x1 || w1d2[b[122]](b[35148]) != -0x1 || w1d2[b[122]](b[35149]) != -0x1 || w1d2[b[122]](b[35150]) != -0x1) window[b[4545]][b[35145]] = 0x2;else window[b[4545]][b[35145]] = 0x3;
                }
            } else window[b[4545]][b[35145]] = 0x2;
        }
        console[b[517]](b[35151] + window[b[4545]][b[35144]] + b[35152] + window[b[4545]][b[35145]]);
    }
}), wx[b[35153]]({
    'success': function (d5281) {
        console[b[517]](b[35154] + d5281[b[4652]] + b[35155] + d5281[b[35156]]);
    }
}), wx[b[12300]]({
    'success': function (rzlgh) {
        console[b[517]](b[35157] + rzlgh[b[14126]]);
    }
}), wx[b[35158]]({ 'keepScreenOn': !![] }), wx[b[12302]](function (d0b58w) {
    console[b[517]](b[35157] + d0b58w[b[14126]] + b[35159] + d0b58w[b[35160]]);
}), wx[b[11239]](function (hxt) {
    window[b[35161]] = hxt, window[b[35162]] && window[b[35161]] && (console[b[80]](b[35163] + window[b[35161]][b[863]]), window[b[35162]](window[b[35161]]), window[b[35161]] = null);
}), window[b[35164]] = 0x0, window[b[35165]] = 0x0, window[b[35166]] = null, wx[b[35167]](function () {
    window[b[35165]]++;
    var yhlzrt = Date[b[85]]();
    (window[b[35164]] == 0x0 || yhlzrt - window[b[35164]] > 0x1d4c0) && (console[b[100]](b[35168]), wx[b[12564]]());
    if (window[b[35165]] >= 0x2) {
        window[b[35165]] = 0x0, console[b[141]](b[35169]), wx[b[35170]]('0', 0x1);
        if (window[b[4545]] && window[b[4545]][b[1165]]) window[b[35113]](b[35171], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});