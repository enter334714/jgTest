var _ = wx.y$;
console[_[78]](_[31063]), window[_[31064]], wx[_[31065]](function (qe8iv) {
    if (qe8iv) {
        if (qe8iv[_[4179]]) {
            var r6z3x9 = window[_[562]][_[31066]][_[4358]](new RegExp(/\./, 'g'), '_'),
                ohtf = qe8iv[_[4179]],
                a0bd = ohtf[_[12118]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
            if (a0bd) for (var y2jcqk = 0x0; y2jcqk < a0bd[_[13]]; y2jcqk++) {
                if (a0bd[y2jcqk] && a0bd[y2jcqk][_[13]] > 0x0) {
                    var e18gn = parseInt(a0bd[y2jcqk][_[4358]](_[31067], '')[_[4358]](':', ''));
                    ohtf = ohtf[_[4358]](a0bd[y2jcqk], a0bd[y2jcqk][_[4358]](':' + e18gn + ':', ':' + (e18gn - 0x2) + ':'));
                }
            }
            ohtf = ohtf[_[4358]](new RegExp(_[31068], 'g'), _[31069] + r6z3x9 + _[26321]), ohtf = ohtf[_[4358]](new RegExp(_[31070], 'g'), _[31069] + r6z3x9 + _[26321]), qe8iv[_[4179]] = ohtf;
        }
        var fh7mot = {
            'id': window['p$NJ'][_[31071]],
            'role': window['p$NJ'][_[4300]],
            'level': window['p$NJ'][_[31072]],
            'user': window['p$NJ'][_[26222]],
            'version': window['p$NJ'][_[101]],
            'cdn': window['p$NJ'][_[4177]],
            'pkgName': window['p$NJ'][_[26223]],
            'gamever': window[_[562]][_[31066]],
            'serverid': window['p$NJ'][_[26217]] ? window['p$NJ'][_[26217]][_[11395]] : 0x0,
            'systemInfo': window[_[31073]],
            'error': _[31074],
            'stack': qe8iv ? qe8iv[_[4179]] : ''
        },
            s4ad0b = JSON[_[4163]](fh7mot);
        console[_[125]](_[31075] + s4ad0b), (!window[_[31064]] || window[_[31064]] != fh7mot[_[125]]) && (window[_[31064]] = fh7mot[_[125]], window['p$5N'](fh7mot));
    }
});
import 'eeemd5min.js';
import 'eeezlibs.js';
window[_[31076]] = require(_[31077]);
import 'eeeindex.js';
import 'eeelibsmin.js';
import 'eeewxmini.js';
import 'eeeinitmin.js';
console[_[78]](_[31078]), console[_[78]](_[31079]), p$5NOJ({ 'title': _[31080] });
var _dcyph7u = { 'p$D5JNO': !![] };
new window[_[31081]](_dcyph7u), window[_[31081]][_[148]]['p$DONJ5']();
if (window['p$D5NJO']) clearInterval(window['p$D5NJO']);
window['p$D5NJO'] = null, window['p$DOJ5N'] = function (rx93z6, a3r9z6) {
    if (!rx93z6 || !a3r9z6) return 0x0;
    rx93z6 = rx93z6[_[15]]('.'), a3r9z6 = a3r9z6[_[15]]('.');
    const t5of = Math[_[894]](rx93z6[_[13]], a3r9z6[_[13]]);
    while (rx93z6[_[13]] < t5of) {
        rx93z6[_[29]]('0');
    }
    while (a3r9z6[_[13]] < t5of) {
        a3r9z6[_[29]]('0');
    }
    for (var $ftm5o = 0x0; $ftm5o < t5of; $ftm5o++) {
        const mhofp7 = parseInt(rx93z6[$ftm5o]),
              pcku2y = parseInt(a3r9z6[$ftm5o]);
        if (mhofp7 > pcku2y) return 0x1;else {
            if (mhofp7 < pcku2y) return -0x1;
        }
    }
    return 0x0;
}, window[_[31082]] = wx[_[31083]]()[_[31082]], console[_[487]](_[31084] + window[_[31082]]);
var _dm$ft5 = wx[_[31085]]();
_dm$ft5[_[31086]](function (mphf) {
    console[_[487]](_[31087] + mphf[_[31088]]);
}), _dm$ft5[_[31089]](function () {
    wx[_[31090]]({
        'title': _[31091],
        'content': _[31092],
        'showCancel': ![],
        'success': function (szdba9) {
            _dm$ft5[_[31093]]();
        }
    });
}), _dm$ft5[_[31094]](function () {
    console[_[487]](_[31095]);
}), window['p$DOJN5'] = function () {
    console[_[487]](_[31096]);
    var rzd3 = wx[_[31097]]({
        'name': _[31098],
        'success': function (azbd9r) {
            console[_[487]](_[31099]), console[_[487]](azbd9r), azbd9r && azbd9r[_[26417]] == _[31100] ? (window['p$JO'] = !![], window['p$JON5'](), window['p$JN5O']()) : setTimeout(function () {
                window['p$DOJN5']();
            }, 0x1f4);
        },
        'fail': function (yhc7up) {
            console[_[487]](_[31101]), console[_[487]](yhc7up), setTimeout(function () {
                window['p$DOJN5']();
            }, 0x1f4);
        }
    });
    rzd3 && rzd3[_[30380]](u7mchp => {});
}, window['p$DN5JO'] = function () {
    console[_[487]](_[31102]);
    var ohfpm = wx[_[31097]]({
        'name': _[31103],
        'success': function (otf7m) {
            console[_[487]](_[31104]), console[_[487]](otf7m), otf7m && otf7m[_[26417]] == _[31100] ? (window['p$NOJ'] = !![], window['p$JON5'](), window['p$JN5O']()) : setTimeout(function () {
                window['p$DN5JO']();
            }, 0x1f4);
        },
        'fail': function (_jkv2q) {
            console[_[487]](_[31105]), console[_[487]](_jkv2q), setTimeout(function () {
                window['p$DN5JO']();
            }, 0x1f4);
        }
    });
    ohfpm && ohfpm[_[30380]](eq8vi_ => {});
}, window[_[31106]] = function () {
    window['p$DOJ5N'](window[_[31082]], _[31107]) >= 0x0 ? (console[_[487]](_[31108] + window[_[31082]] + _[31109]), window['p$N5'](), window['p$DOJN5'](), window['p$DN5JO']()) : (window['p$NJ5'](_[31110], window[_[31082]]), wx[_[31090]]({
        'title': _[5775],
        'content': _[31111]
    }));
}, window[_[31073]] = '', wx[_[31112]]({
    'success'($tmfoh) {
        window[_[31073]] = _[31113] + $tmfoh[_[31114]] + _[31115] + $tmfoh[_[31116]] + _[31117] + $tmfoh[_[4371]] + _[31118] + $tmfoh[_[480]] + _[31119] + $tmfoh[_[26185]] + _[31120] + $tmfoh[_[31082]] + _[31121] + $tmfoh[_[9101]], console[_[487]](window[_[31073]]), console[_[487]](_[31122] + $tmfoh[_[31123]] + _[31124] + $tmfoh[_[31125]] + _[31126] + $tmfoh[_[31127]] + _[31128] + $tmfoh[_[31129]] + _[31130] + $tmfoh[_[31131]] + _[31132] + $tmfoh[_[31133]] + _[31134] + ($tmfoh[_[31135]] ? $tmfoh[_[31135]][_[322]] + ',' + $tmfoh[_[31135]][_[1275]] + ',' + $tmfoh[_[31135]][_[1277]] + ',' + $tmfoh[_[31135]][_[1276]] : ''));
        var to5$40 = $tmfoh[_[480]] ? $tmfoh[_[480]][_[12418]]() : '',
            f4to5 = $tmfoh[_[31116]] ? $tmfoh[_[31116]][_[12418]]()[_[4358]]('\x20', '') : '';
        window['p$NJ'][_[1116]] = to5$40[_[115]](_[31136]) != -0x1, window['p$NJ'][_[11219]] = to5$40[_[115]](_[31044]) != -0x1, window['p$NJ'][_[31137]] = to5$40[_[115]](_[31136]) != -0x1 || to5$40[_[115]](_[31044]) != -0x1, window['p$NJ'][_[25907]] = to5$40[_[115]](_[31138]) != -0x1 || to5$40[_[115]](_[31139]) != -0x1, window['p$NJ'][_[31140]] = $tmfoh[_[26185]] ? $tmfoh[_[26185]][_[12418]]() : '', window['p$NJ']['p$D5OJN'] = ![], window['p$NJ']['p$D5NOJ'] = 0x2;
        if (to5$40[_[115]](_[31044]) != -0x1) {
            if ($tmfoh[_[9101]] >= 0x18) window['p$NJ']['p$D5NOJ'] = 0x3;else window['p$NJ']['p$D5NOJ'] = 0x2;
        } else {
            if (to5$40[_[115]](_[31136]) != -0x1) {
                if ($tmfoh[_[9101]] && $tmfoh[_[9101]] >= 0x14) window['p$NJ']['p$D5NOJ'] = 0x3;else {
                    if (f4to5[_[115]](_[31141]) != -0x1 || f4to5[_[115]](_[31142]) != -0x1 || f4to5[_[115]](_[31143]) != -0x1 || f4to5[_[115]](_[31144]) != -0x1 || f4to5[_[115]](_[31145]) != -0x1) window['p$NJ']['p$D5NOJ'] = 0x2;else window['p$NJ']['p$D5NOJ'] = 0x3;
                }
            } else window['p$NJ']['p$D5NOJ'] = 0x2;
        }
        console[_[487]](_[31146] + window['p$NJ']['p$D5OJN'] + _[31147] + window['p$NJ']['p$D5NOJ']);
    }
}), wx[_[31148]]({
    'success': function (l18en) {
        console[_[487]](_[31149] + l18en[_[4276]] + _[31150] + l18en[_[31151]]);
    }
}), wx[_[11776]]({
    'success': function (x63rz) {
        console[_[487]](_[31152] + x63rz[_[13284]]);
    }
}), wx[_[31153]]({ 'keepScreenOn': !![] }), wx[_[11778]](function (y2jqc) {
    console[_[487]](_[31152] + y2jqc[_[13284]] + _[31154] + y2jqc[_[31155]]);
}), wx[_[10710]](function (wne1g) {
    window['p$O5'] = wne1g, window['p$J5O'] && window['p$O5'] && (console[_[78]](_[31156] + window['p$O5'][_[817]]), window['p$J5O'](window['p$O5']), window['p$O5'] = null);
}), window[_[31157]] = 0x0, window['p$DNOJ5'] = 0x0, window[_[31158]] = null, wx[_[31159]](function () {
    window['p$DNOJ5']++;
    var radb9 = Date[_[83]]();
    (window[_[31157]] == 0x0 || radb9 - window[_[31157]] > 0x1d4c0) && (console[_[96]](_[31160]), wx[_[11955]]());
    if (window['p$DNOJ5'] >= 0x2) {
        window['p$DNOJ5'] = 0x0, console[_[125]](_[31161]), wx[_[31162]]('0', 0x1);
        if (window['p$NJ'] && window['p$NJ'][_[1116]]) window['p$NJ5'](_[31163], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});