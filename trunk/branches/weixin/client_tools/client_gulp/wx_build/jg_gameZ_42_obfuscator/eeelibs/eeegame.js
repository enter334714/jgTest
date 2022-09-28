var b = wx.$e;
console[b[80]](b[31345]), window[b[31346]], wx[b[31347]](function (nksu69) {
    if (nksu69) {
        if (nksu69[b[4216]]) {
            var ma_4v = window[b[590]][b[31348]][b[4454]](new RegExp(/\./, 'g'), '_'),
                a_mc47 = nksu69[b[4216]],
                hyvz = a_mc47[b[12172]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
            if (hyvz) for (var am4_c = 0x0; am4_c < hyvz[b[14]]; am4_c++) {
                if (hyvz[am4_c] && hyvz[am4_c][b[14]] > 0x0) {
                    var rvyz = parseInt(hyvz[am4_c][b[4454]](b[31349], '')[b[4454]](':', ''));
                    a_mc47 = a_mc47[b[4454]](hyvz[am4_c], hyvz[am4_c][b[4454]](':' + rvyz + ':', ':' + (rvyz - 0x2) + ':'));
                }
            }
            a_mc47 = a_mc47[b[4454]](new RegExp(b[31350], 'g'), b[31351] + ma_4v + b[26448]), a_mc47 = a_mc47[b[4454]](new RegExp(b[31352], 'g'), b[31351] + ma_4v + b[26448]), nksu69[b[4216]] = a_mc47;
        }
        var $i3jq = {
            'id': window[b[31353]][b[31354]],
            'role': window[b[31353]][b[4338]],
            'level': window[b[31353]][b[31355]],
            'user': window[b[31353]][b[26347]],
            'version': window[b[31353]][b[107]],
            'cdn': window[b[31353]][b[4214]],
            'pkgName': window[b[31353]][b[26348]],
            'gamever': window[b[590]][b[31348]],
            'serverid': window[b[31353]][b[26342]] ? window[b[31353]][b[26342]][b[11442]] : 0x0,
            'systemInfo': window[b[31356]],
            'error': b[31357],
            'stack': nksu69 ? nksu69[b[4216]] : ''
        },
            oc_ma = JSON[b[4200]]($i3jq);
        console[b[141]](b[31358] + oc_ma), (!window[b[31346]] || window[b[31346]] != $i3jq[b[141]]) && (window[b[31346]] = $i3jq[b[141]], window[b[31359]]($i3jq));
    }
});
import 'eeemd5min.js';
import 'eeezlibs.js';
window[b[31360]] = require(b[31361]);
import 'eeeindex.js';
import 'eeelibsmin.js';
import 'eeewxmini.js';
import 'eeeinitmin.js';
console[b[80]](b[31362]), console[b[80]](b[31363]), e11UG0({ 'title': b[31364] });
var ed6k09 = { 'e1I10UG': !![] };
new window[b[31365]](ed6k09), window[b[31365]][b[164]][b[31366]]();
if (window[b[31367]]) clearInterval(window[b[31367]]);
window[b[31367]] = null, window[b[31368]] = function (yrhfvz, glh$tx) {
    if (!yrhfvz || !glh$tx) return 0x0;
    yrhfvz = yrhfvz[b[16]]('.'), glh$tx = glh$tx[b[16]]('.');
    const a_4m7v = Math[b[923]](yrhfvz[b[14]], glh$tx[b[14]]);
    while (yrhfvz[b[14]] < a_4m7v) {
        yrhfvz[b[31]]('0');
    }
    while (glh$tx[b[14]] < a_4m7v) {
        glh$tx[b[31]]('0');
    }
    for (var ujsn3 = 0x0; ujsn3 < a_4m7v; ujsn3++) {
        const njsqu = parseInt(yrhfvz[ujsn3]),
              gl$thx = parseInt(glh$tx[ujsn3]);
        if (njsqu > gl$thx) return 0x1;else {
            if (njsqu < gl$thx) return -0x1;
        }
    }
    return 0x0;
}, window[b[31369]] = wx[b[31370]]()[b[31369]], console[b[514]](b[31371] + window[b[31369]]);
var exi3qj = wx[b[31372]]();
exi3qj[b[31373]](function (vyrf4z) {
    console[b[514]](b[31374] + vyrf4z[b[31375]]);
}), exi3qj[b[31376]](function () {
    wx[b[31377]]({
        'title': b[31378],
        'content': b[31379],
        'showCancel': ![],
        'success': function (yv4_fz) {
            exi3qj[b[31380]]();
        }
    });
}), exi3qj[b[31381]](function () {
    console[b[514]](b[31382]);
}), window[b[31383]] = function () {
    console[b[514]](b[31384]);
    var hrlztg = wx[b[31385]]({
        'name': b[31386],
        'success': function (a7cop) {
            console[b[514]](b[31387]), console[b[514]](a7cop), a7cop && a7cop[b[26546]] == b[31388] ? (window[b[31389]] = !![], window[b[31390]](), window[b[31391]]()) : setTimeout(function () {
                window[b[31383]]();
            }, 0x1f4);
        },
        'fail': function (hlrxgt) {
            console[b[514]](b[31392]), console[b[514]](hlrxgt), setTimeout(function () {
                window[b[31383]]();
            }, 0x1f4);
        }
    });
    hrlztg && hrlztg[b[30650]](j3qx$i => {});
}, window[b[31393]] = function () {
    console[b[514]](b[31394]);
    var jt$ix = wx[b[31385]]({
        'name': b[31395],
        'success': function (zvyf4) {
            console[b[514]](b[31396]), console[b[514]](zvyf4), zvyf4 && zvyf4[b[26546]] == b[31388] ? (window[b[31397]] = !![], window[b[31390]](), window[b[31391]]()) : setTimeout(function () {
                window[b[31393]]();
            }, 0x1f4);
        },
        'fail': function (sk9bu6) {
            console[b[514]](b[31398]), console[b[514]](sk9bu6), setTimeout(function () {
                window[b[31393]]();
            }, 0x1f4);
        }
    });
    jt$ix && jt$ix[b[30650]](ks906 => {});
}, window[b[31399]] = function () {
    window[b[31368]](window[b[31369]], b[31400]) >= 0x0 ? (console[b[514]](b[31401] + window[b[31369]] + b[31402]), window[b[31403]](), window[b[31383]](), window[b[31393]]()) : (window[b[31404]](b[31405], window[b[31369]]), wx[b[31377]]({
        'title': b[5744],
        'content': b[31406]
    }));
}, window[b[31356]] = '', wx[b[31407]]({
    'success'(_7v4y) {
        window[b[31356]] = b[31408] + _7v4y[b[31409]] + b[31410] + _7v4y[b[31411]] + b[31412] + _7v4y[b[5027]] + b[31413] + _7v4y[b[507]] + b[31414] + _7v4y[b[26309]] + b[31415] + _7v4y[b[31369]] + b[31416] + _7v4y[b[9132]], console[b[514]](window[b[31356]]), console[b[514]](b[31417] + _7v4y[b[31418]] + b[31419] + _7v4y[b[31420]] + b[31421] + _7v4y[b[31422]] + b[31423] + _7v4y[b[31424]] + b[31425] + _7v4y[b[31426]] + b[31427] + _7v4y[b[31428]] + b[31429] + (_7v4y[b[31430]] ? _7v4y[b[31430]][b[344]] + ',' + _7v4y[b[31430]][b[1366]] + ',' + _7v4y[b[31430]][b[1368]] + ',' + _7v4y[b[31430]][b[1367]] : ''));
        var unks96 = _7v4y[b[507]] ? _7v4y[b[507]][b[12472]]() : '',
            qjx$i = _7v4y[b[31411]] ? _7v4y[b[31411]][b[12472]]()[b[4454]]('\x20', '') : '';
        window[b[31353]][b[1148]] = unks96[b[122]](b[31431]) != -0x1, window[b[31353]][b[11266]] = unks96[b[122]](b[30892]) != -0x1, window[b[31353]][b[31432]] = unks96[b[122]](b[31431]) != -0x1 || unks96[b[122]](b[30892]) != -0x1, window[b[31353]][b[26031]] = unks96[b[122]](b[31433]) != -0x1 || unks96[b[122]](b[31434]) != -0x1, window[b[31353]][b[31435]] = _7v4y[b[26309]] ? _7v4y[b[26309]][b[12472]]() : '', window[b[31353]][b[31436]] = ![], window[b[31353]][b[31437]] = 0x2;
        if (unks96[b[122]](b[30892]) != -0x1) {
            if (_7v4y[b[9132]] >= 0x18) window[b[31353]][b[31437]] = 0x3;else window[b[31353]][b[31437]] = 0x2;
        } else {
            if (unks96[b[122]](b[31431]) != -0x1) {
                if (_7v4y[b[9132]] && _7v4y[b[9132]] >= 0x14) window[b[31353]][b[31437]] = 0x3;else {
                    if (qjx$i[b[122]](b[31438]) != -0x1 || qjx$i[b[122]](b[31439]) != -0x1 || qjx$i[b[122]](b[31440]) != -0x1 || qjx$i[b[122]](b[31441]) != -0x1 || qjx$i[b[122]](b[31442]) != -0x1) window[b[31353]][b[31437]] = 0x2;else window[b[31353]][b[31437]] = 0x3;
                }
            } else window[b[31353]][b[31437]] = 0x2;
        }
        console[b[514]](b[31443] + window[b[31353]][b[31436]] + b[31444] + window[b[31353]][b[31437]]);
    }
}), wx[b[31445]]({
    'success': function (m74v_a) {
        console[b[514]](b[31446] + m74v_a[b[4314]] + b[31447] + m74v_a[b[31448]]);
    }
}), wx[b[11823]]({
    'success': function (a4_mc7) {
        console[b[514]](b[31449] + a4_mc7[b[13358]]);
    }
}), wx[b[31450]]({ 'keepScreenOn': !![] }), wx[b[11825]](function (acm74) {
    console[b[514]](b[31449] + acm74[b[13358]] + b[31451] + acm74[b[31452]]);
}), wx[b[10757]](function (zhlyr) {
    window[b[31453]] = zhlyr, window[b[31454]] && window[b[31453]] && (console[b[80]](b[31455] + window[b[31453]][b[846]]), window[b[31454]](window[b[31453]]), window[b[31453]] = null);
}), window[b[31456]] = 0x0, window[b[31457]] = 0x0, window[b[31458]] = null, wx[b[31459]](function () {
    window[b[31457]]++;
    var wd512 = Date[b[85]]();
    (window[b[31456]] == 0x0 || wd512 - window[b[31456]] > 0x1d4c0) && (console[b[100]](b[31460]), wx[b[12010]]());
    if (window[b[31457]] >= 0x2) {
        window[b[31457]] = 0x0, console[b[141]](b[31461]), wx[b[31462]]('0', 0x1);
        if (window[b[31353]] && window[b[31353]][b[1148]]) window[b[31404]](b[31463], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});