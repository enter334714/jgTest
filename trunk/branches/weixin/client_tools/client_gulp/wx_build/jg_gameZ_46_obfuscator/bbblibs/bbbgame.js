var _ = wx.y$;
console[_[78]](_[35083]), window[_[35084]], wx[_[35085]](function (gljkhi) {
    if (gljkhi) {
        if (gljkhi[_[4421]]) {
            var xuvtws = window[_[565]][_[35086]][_[4123]](new RegExp(/\./, 'g'), '_'),
                z$xy_ = gljkhi[_[4421]],
                hkfgi = z$xy_[_[12608]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);
            if (hkfgi) for (var rpomqn = 0x0; rpomqn < hkfgi[_[13]]; rpomqn++) {
                if (hkfgi[rpomqn] && hkfgi[rpomqn][_[13]] > 0x0) {
                    var npk = parseInt(hkfgi[rpomqn][_[4123]](_[35087], '')[_[4123]](':', ''));
                    z$xy_ = z$xy_[_[4123]](hkfgi[rpomqn], hkfgi[rpomqn][_[4123]](':' + npk + ':', ':' + (npk - 0x2) + ':'));
                }
            }
            z$xy_ = z$xy_[_[4123]](new RegExp(_[35088], 'g'), _[35089] + xuvtws + _[27524]), z$xy_ = z$xy_[_[4123]](new RegExp(_[35090], 'g'), _[35089] + xuvtws + _[27524]), gljkhi[_[4421]] = z$xy_;
        }
        var kgj = {
            'id': window['p$DE'][_[35091]],
            'role': window['p$DE'][_[4550]],
            'level': window['p$DE'][_[35092]],
            'user': window['p$DE'][_[27415]],
            'version': window['p$DE'][_[101]],
            'cdn': window['p$DE'][_[4417]],
            'pkgName': window['p$DE'][_[27417]],
            'gamever': window[_[565]][_[35086]],
            'serverid': window['p$DE'][_[27411]] ? window['p$DE'][_[27411]][_[11801]] : 0x0,
            'systemInfo': window[_[35093]],
            'error': _[35094],
            'stack': gljkhi ? gljkhi[_[4421]] : ''
        },
            wtvxyu = JSON[_[4403]](kgj);
        console[_[125]](_[35095] + wtvxyu), (!window[_[35084]] || window[_[35084]] != kgj[_[125]]) && (window[_[35084]] = kgj[_[125]], window['p$BD'](kgj));
    }
});
import 'bbbmd5min.js';
import 'bbbzlibs.js';
window[_[35096]] = require(_[35097]);
import 'bbbindex.js';
import 'bbblibsmin.js';
import 'bbbwxmini.js';
import 'bbbinitmin.js';
console[_[78]](_[35098]), console[_[78]](_[35099]), p$BDCE({ 'title': _[35100] });
var _d$zw_ = { 'p$ABEDC': !![] };
new window[_[35101]](_d$zw_), window[_[35101]][_[148]]['p$ACDEB']();
if (window['p$ABDEC']) clearInterval(window['p$ABDEC']);
window['p$ABDEC'] = null, window['p$ACEBD'] = function ($zvxwy, vusrq) {
    if (!$zvxwy || !vusrq) return 0x0;
    $zvxwy = $zvxwy[_[15]]('.'), vusrq = vusrq[_[15]]('.');
    const jhkgl = Math[_[911]]($zvxwy[_[13]], vusrq[_[13]]);
    while ($zvxwy[_[13]] < jhkgl) {
        $zvxwy[_[29]]('0');
    }
    while (vusrq[_[13]] < jhkgl) {
        vusrq[_[29]]('0');
    }
    for (var egdb = 0x0; egdb < jhkgl; egdb++) {
        const rqv = parseInt($zvxwy[egdb]),
              $xy0z_ = parseInt(vusrq[egdb]);
        if (rqv > $xy0z_) return 0x1;else {
            if (rqv < $xy0z_) return -0x1;
        }
    }
    return 0x0;
}, window[_[35102]] = wx[_[35103]]()[_[35102]], console[_[490]](_[35104] + window[_[35102]]);
var _dpmonq = wx[_[35105]]();
_dpmonq[_[35106]](function (vyux) {
    console[_[490]](_[35107] + vyux[_[35108]]);
}), _dpmonq[_[35109]](function () {
    wx[_[35110]]({
        'title': _[35111],
        'content': _[35112],
        'showCancel': ![],
        'success': function (ceb) {
            _dpmonq[_[35113]]();
        }
    });
}), _dpmonq[_[35114]](function () {
    console[_[490]](_[35115]);
}), window['p$ACEDB'] = function () {
    console[_[490]](_[35116]);
    var yv$x = wx[_[35117]]({
        'name': _[35118],
        'success': function (svutqr) {
            console[_[490]](_[35119]), console[_[490]](svutqr), svutqr && svutqr[_[27625]] == _[35120] ? (window['p$EC'] = !![], window['p$ECDB'](), window['p$EDBC']()) : setTimeout(function () {
                window['p$ACEDB']();
            }, 0x1f4);
        },
        'fail': function (lnmpok) {
            console[_[490]](_[35121]), console[_[490]](lnmpok), setTimeout(function () {
                window['p$ACEDB']();
            }, 0x1f4);
        }
    });
    yv$x && yv$x[_[34216]](xsuvt => {});
}, window['p$ADBEC'] = function () {
    console[_[490]](_[35122]);
    var wtvsr = wx[_[35117]]({
        'name': _[35123],
        'success': function (jklonm) {
            console[_[490]](_[35124]), console[_[490]](jklonm), jklonm && jklonm[_[27625]] == _[35120] ? (window['p$DCE'] = !![], window['p$ECDB'](), window['p$EDBC']()) : setTimeout(function () {
                window['p$ADBEC']();
            }, 0x1f4);
        },
        'fail': function (swvru) {
            console[_[490]](_[35125]), console[_[490]](swvru), setTimeout(function () {
                window['p$ADBEC']();
            }, 0x1f4);
        }
    });
    wtvsr && wtvsr[_[34216]](rqnps => {});
}, window[_[35126]] = function () {
    window['p$ACEBD'](window[_[35102]], _[35127]) >= 0x0 ? (console[_[490]](_[35128] + window[_[35102]] + _[35129]), window['p$DB'](), window['p$ACEDB'](), window['p$ADBEC']()) : (window['p$DEB'](_[35130], window[_[35102]]), wx[_[35110]]({
        'title': _[6006],
        'content': _[35131]
    }));
}, window[_[35093]] = '', wx[_[35132]]({
    'success'(jnmo) {
        window[_[35093]] = _[35133] + jnmo[_[35134]] + _[35135] + jnmo[_[35136]] + _[35137] + jnmo[_[5248]] + _[35138] + jnmo[_[483]] + _[35139] + jnmo[_[27369]] + _[35140] + jnmo[_[35102]] + _[35141] + jnmo[_[9486]], console[_[490]](window[_[35093]]), console[_[490]](_[35142] + jnmo[_[30982]] + _[35143] + jnmo[_[35144]] + _[35145] + jnmo[_[35146]] + _[35147] + jnmo[_[35148]] + _[35149] + jnmo[_[35150]] + _[35151] + jnmo[_[35152]] + _[35153] + (jnmo[_[35154]] ? jnmo[_[35154]][_[325]] + ',' + jnmo[_[35154]][_[1341]] + ',' + jnmo[_[35154]][_[1343]] + ',' + jnmo[_[35154]][_[1342]] : ''));
        var nkpom = jnmo[_[483]] ? jnmo[_[483]][_[12931]]() : '',
            z0_1 = jnmo[_[35136]] ? jnmo[_[35136]][_[12931]]()[_[4123]]('\x20', '') : '';
        window['p$DE'][_[1133]] = nkpom[_[115]](_[35155]) != -0x1, window['p$DE'][_[11629]] = nkpom[_[115]](_[34473]) != -0x1, window['p$DE'][_[35156]] = nkpom[_[115]](_[35155]) != -0x1 || nkpom[_[115]](_[34473]) != -0x1, window['p$DE'][_[27060]] = nkpom[_[115]](_[35157]) != -0x1 || nkpom[_[115]](_[35158]) != -0x1, window['p$DE'][_[35159]] = jnmo[_[27369]] ? jnmo[_[27369]][_[12931]]() : '', window['p$DE']['p$ABCED'] = ![], window['p$DE']['p$ABDCE'] = 0x2;
        if (nkpom[_[115]](_[34473]) != -0x1) {
            if (jnmo[_[9486]] >= 0x18) window['p$DE']['p$ABDCE'] = 0x3;else window['p$DE']['p$ABDCE'] = 0x2;
        } else {
            if (nkpom[_[115]](_[35155]) != -0x1) {
                if (jnmo[_[9486]] && jnmo[_[9486]] >= 0x14) window['p$DE']['p$ABDCE'] = 0x3;else {
                    if (z0_1[_[115]](_[35160]) != -0x1 || z0_1[_[115]](_[35161]) != -0x1 || z0_1[_[115]](_[35162]) != -0x1 || z0_1[_[115]](_[35163]) != -0x1 || z0_1[_[115]](_[35164]) != -0x1) window['p$DE']['p$ABDCE'] = 0x2;else window['p$DE']['p$ABDCE'] = 0x3;
                }
            } else window['p$DE']['p$ABDCE'] = 0x2;
        }
        console[_[490]](_[35165] + window['p$DE']['p$ABCED'] + _[35166] + window['p$DE']['p$ABDCE']);
    }
}), wx[_[35167]]({
    'success': function (igfjhk) {
        console[_[490]](_[35168] + igfjhk[_[4526]] + _[35169] + igfjhk[_[35170]]);
    }
}), wx[_[12182]]({
    'success': function (tuvs) {
        console[_[490]](_[35171] + tuvs[_[14007]]);
    }
}), wx[_[35172]]({ 'keepScreenOn': !![] }), wx[_[12184]](function (qorns) {
    console[_[490]](_[35171] + qorns[_[14007]] + _[35173] + qorns[_[35174]]);
}), wx[_[11121]](function (mlik) {
    window['p$CB'] = mlik, window['p$EBC'] && window['p$CB'] && (console[_[78]](_[35175] + window['p$CB'][_[834]]), window['p$EBC'](window['p$CB']), window['p$CB'] = null);
}), window[_[35176]] = 0x0, window['p$ADCEB'] = 0x0, window[_[35177]] = null, wx[_[35178]](function () {
    window['p$ADCEB']++;
    var wutx = Date[_[83]]();
    (window[_[35176]] == 0x0 || wutx - window[_[35176]] > 0x1d4c0) && (console[_[96]](_[35179]), wx[_[12445]]());
    if (window['p$ADCEB'] >= 0x2) {
        window['p$ADCEB'] = 0x0, console[_[125]](_[35180]), wx[_[35181]]('0', 0x1);
        if (window['p$DE'] && window['p$DE'][_[1133]]) window['p$DEB'](_[35182], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});