var _ = wx.y$;
console[_[78]](_[52387]), window[_[52388]], wx[_[52389]](function (sp_b9) {
    if (sp_b9) {
        if (sp_b9[_[4421]]) {
            var le1h2n = window[_[565]][_[52390]][_[4123]](new RegExp(/\./, 'g'), '_'),
                biqsu9 = sp_b9[_[4421]],
                n9_epi = biqsu9[_[16229]](/(bbbbbbbbb\/bbbgame.js:)[0-9]{1,60}(:)/g);
            if (n9_epi) for (var v30k6j = 0x0; v30k6j < n9_epi[_[13]]; v30k6j++) {
                if (n9_epi[v30k6j] && n9_epi[v30k6j][_[13]] > 0x0) {
                    var k3vj = parseInt(n9_epi[v30k6j][_[4123]](_[52391], '')[_[4123]](':', ''));
                    biqsu9 = biqsu9[_[4123]](n9_epi[v30k6j], n9_epi[v30k6j][_[4123]](':' + k3vj + ':', ':' + (k3vj - 0x2) + ':'));
                }
            }
            biqsu9 = biqsu9[_[4123]](new RegExp(_[52392], 'g'), _[52393] + le1h2n + _[40143]), biqsu9 = biqsu9[_[4123]](new RegExp(_[52394], 'g'), _[52393] + le1h2n + _[40143]), sp_b9[_[4421]] = biqsu9;
        }
        var v3k0j6 = {
            'id': window['p$ZA'][_[52395]],
            'role': window['p$ZA'][_[4550]],
            'level': window['p$ZA'][_[52396]],
            'user': window['p$ZA'][_[40026]],
            'version': window['p$ZA'][_[101]],
            'cdn': window['p$ZA'][_[4417]],
            'pkgName': window['p$ZA'][_[40028]],
            'gamever': window[_[565]][_[52390]],
            'serverid': window['p$ZA'][_[40021]] ? window['p$ZA'][_[40021]][_[15010]] : 0x0,
            'systemInfo': window[_[52397]],
            'error': _[52398],
            'stack': sp_b9 ? sp_b9[_[4421]] : ''
        },
            cfyrvt = JSON[_[4403]](v3k0j6);
        console[_[125]](_[52399] + cfyrvt), (!window[_[52388]] || window[_[52388]] != v3k0j6[_[125]]) && (window[_[52388]] = v3k0j6[_[125]], window['p$OZ'](v3k0j6));
    }
});
import 'bbbmd5min.js';
import 'bbbzlibs.js';
window[_[52400]] = require(_[52401]);
import 'bbbindex.js';
import 'bbblibsmin.js';
import 'bbbwxmini.js';
import 'bbbinitmin.js';
console[_[78]](_[52402]), console[_[78]](_[52403]), p$OZRA({ 'title': _[52404] });
var _dhl21n = { 'p$8OAZR': !![] };
new window[_[52405]](_dhl21n), window[_[52405]][_[148]]['p$8RZAO']();
if (window['p$8OZAR']) clearInterval(window['p$8OZAR']);
window['p$8OZAR'] = null, window['p$8RAOZ'] = function (l5$h1, p2nh_e) {
    if (!l5$h1 || !p2nh_e) return 0x0;
    l5$h1 = l5$h1[_[15]]('.'), p2nh_e = p2nh_e[_[15]]('.');
    const xmzw4 = Math[_[911]](l5$h1[_[13]], p2nh_e[_[13]]);
    while (l5$h1[_[13]] < xmzw4) {
        l5$h1[_[29]]('0');
    }
    while (p2nh_e[_[13]] < xmzw4) {
        p2nh_e[_[29]]('0');
    }
    for (var xz4mqg = 0x0; xz4mqg < xmzw4; xz4mqg++) {
        const sbu4qm = parseInt(l5$h1[xz4mqg]),
              tyrfcv = parseInt(p2nh_e[xz4mqg]);
        if (sbu4qm > tyrfcv) return 0x1;else {
            if (sbu4qm < tyrfcv) return -0x1;
        }
    }
    return 0x0;
}, window[_[52406]] = wx[_[52407]]()[_[52406]], console[_[490]](_[52408] + window[_[52406]]);
var _dubi = wx[_[52409]]();
_dubi[_[52410]](function (iqub) {
    console[_[490]](_[52411] + iqub[_[52412]]);
}), _dubi[_[52413]](function () {
    wx[_[52414]]({
        'title': _[52415],
        'content': _[52416],
        'showCancel': ![],
        'success': function (d8x3z) {
            _dubi[_[52417]]();
        }
    });
}), _dubi[_[52418]](function () {
    console[_[490]](_[52419]);
}), window['p$8RAZO'] = function () {
    console[_[490]](_[52420]);
    var ibpsu9 = wx[_[52421]]({
        'name': _[52422],
        'success': function (u9bqsi) {
            console[_[490]](_[52423]), console[_[490]](u9bqsi), u9bqsi && u9bqsi[_[40388]] == _[52424] ? (window['p$AR'] = !![], window['p$ARZO'](), window['p$AZOR']()) : setTimeout(function () {
                window['p$8RAZO']();
            }, 0x1f4);
        },
        'fail': function (oa7t) {
            console[_[490]](_[52425]), console[_[490]](oa7t), setTimeout(function () {
                window['p$8RAZO']();
            }, 0x1f4);
        }
    });
    ibpsu9 && ibpsu9[_[51005]](_pib9n => {});
}, window['p$8ZOAR'] = function () {
    console[_[490]](_[52426]);
    var gxwmz4 = wx[_[52421]]({
        'name': _[52427],
        'success': function (kj083d) {
            console[_[490]](_[52428]), console[_[490]](kj083d), kj083d && kj083d[_[40388]] == _[52424] ? (window['p$ZRA'] = !![], window['p$ARZO'](), window['p$AZOR']()) : setTimeout(function () {
                window['p$8ZOAR']();
            }, 0x1f4);
        },
        'fail': function (pi_9b) {
            console[_[490]](_[52429]), console[_[490]](pi_9b), setTimeout(function () {
                window['p$8ZOAR']();
            }, 0x1f4);
        }
    });
    gxwmz4 && gxwmz4[_[51005]](xmu4qg => {});
}, window[_[52430]] = function () {
    window['p$8RAOZ'](window[_[52406]], _[52431]) >= 0x0 ? (console[_[490]](_[52432] + window[_[52406]] + _[52433]), window['p$ZO'](), window['p$8RAZO'](), window['p$8ZOAR']()) : (window['p$ZAO'](_[52434], window[_[52406]]), wx[_[52414]]({
        'title': _[6182],
        'content': _[52435]
    }));
}, window[_[52397]] = '', wx[_[52436]]({
    'success'(yotrac) {
        window[_[52397]] = _[52437] + yotrac[_[52438]] + _[52439] + yotrac[_[52440]] + _[52441] + yotrac[_[5248]] + _[52442] + yotrac[_[483]] + _[52443] + yotrac[_[39964]] + _[52444] + yotrac[_[52406]] + _[52445] + yotrac[_[11735]], console[_[490]](window[_[52397]]), console[_[490]](_[52446] + yotrac[_[45621]] + _[52447] + yotrac[_[52448]] + _[52449] + yotrac[_[52450]] + _[52451] + yotrac[_[52452]] + _[52453] + yotrac[_[52454]] + _[52455] + yotrac[_[52456]] + _[52457] + (yotrac[_[52458]] ? yotrac[_[52458]][_[325]] + ',' + yotrac[_[52458]][_[1341]] + ',' + yotrac[_[52458]][_[1343]] + ',' + yotrac[_[52458]][_[1342]] : ''));
        var h$12 = yotrac[_[483]] ? yotrac[_[483]][_[16726]]() : '',
            smguq4 = yotrac[_[52440]] ? yotrac[_[52440]][_[16726]]()[_[4123]]('\x20', '') : '';
        window['p$ZA'][_[1133]] = h$12[_[115]](_[52459]) != -0x1, window['p$ZA'][_[14780]] = h$12[_[115]](_[52213]) != -0x1, window['p$ZA'][_[52460]] = h$12[_[115]](_[52459]) != -0x1 || h$12[_[115]](_[52213]) != -0x1, window['p$ZA'][_[39560]] = h$12[_[115]](_[52461]) != -0x1 || h$12[_[115]](_[52462]) != -0x1, window['p$ZA'][_[52463]] = yotrac[_[39964]] ? yotrac[_[39964]][_[16726]]() : '', window['p$ZA']['p$8ORAZ'] = ![], window['p$ZA']['p$8OZRA'] = 0x2;
        if (h$12[_[115]](_[52213]) != -0x1) {
            if (yotrac[_[11735]] >= 0x18) window['p$ZA']['p$8OZRA'] = 0x3;else window['p$ZA']['p$8OZRA'] = 0x2;
        } else {
            if (h$12[_[115]](_[52459]) != -0x1) {
                if (yotrac[_[11735]] && yotrac[_[11735]] >= 0x14) window['p$ZA']['p$8OZRA'] = 0x3;else {
                    if (smguq4[_[115]](_[52464]) != -0x1 || smguq4[_[115]](_[52465]) != -0x1 || smguq4[_[115]](_[52466]) != -0x1 || smguq4[_[115]](_[52467]) != -0x1 || smguq4[_[115]](_[52468]) != -0x1) window['p$ZA']['p$8OZRA'] = 0x2;else window['p$ZA']['p$8OZRA'] = 0x3;
                }
            } else window['p$ZA']['p$8OZRA'] = 0x2;
        }
        console[_[490]](_[52469] + window['p$ZA']['p$8ORAZ'] + _[52470] + window['p$ZA']['p$8OZRA']);
    }
}), wx[_[52471]]({
    'success': function ($h21l5) {
        console[_[490]](_[52472] + $h21l5[_[4526]] + _[52473] + $h21l5[_[52474]]);
    }
}), wx[_[15577]]({
    'success': function (n9pbi) {
        console[_[490]](_[52475] + n9pbi[_[18469]]);
    }
}), wx[_[52476]]({ 'keepScreenOn': !![] }), wx[_[15579]](function (gxmwz4) {
    console[_[490]](_[52475] + gxmwz4[_[18469]] + _[52477] + gxmwz4[_[52478]]);
}), wx[_[14074]](function (hne_l) {
    window['p$RO'] = hne_l, window['p$AOR'] && window['p$RO'] && (console[_[78]](_[52479] + window['p$RO'][_[834]]), window['p$AOR'](window['p$RO']), window['p$RO'] = null);
}), window[_[52480]] = 0x0, window['p$8ZRAO'] = 0x0, window[_[52481]] = null, wx[_[52482]](function () {
    window['p$8ZRAO']++;
    var yvft6r = Date[_[83]]();
    (window[_[52480]] == 0x0 || yvft6r - window[_[52480]] > 0x1d4c0) && (console[_[96]](_[52483]), wx[_[16033]]());
    if (window['p$8ZRAO'] >= 0x2) {
        window['p$8ZRAO'] = 0x0, console[_[125]](_[52484]), wx[_[52485]]('0', 0x1);
        if (window['p$ZA'] && window['p$ZA'][_[1133]]) window['p$ZAO'](_[52486], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});