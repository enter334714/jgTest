var b = wx.$e;
console[b[80]](b[31342]), window[b[31343]], wx[b[31344]](function (sqn39) {
    if (sqn39) {
        if (sqn39[b[4216]]) {
            var kb0s = window[b[590]][b[31345]][b[4454]](new RegExp(/\./, 'g'), '_'),
                iq$xj = sqn39[b[4216]],
                txhg$l = iq$xj[b[12172]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
            if (txhg$l) for (var lzyf = 0x0; lzyf < txhg$l[b[14]]; lzyf++) {
                if (txhg$l[lzyf] && txhg$l[lzyf][b[14]] > 0x0) {
                    var n3qu9s = parseInt(txhg$l[lzyf][b[4454]](b[31346], '')[b[4454]](':', ''));
                    iq$xj = iq$xj[b[4454]](txhg$l[lzyf], txhg$l[lzyf][b[4454]](':' + n3qu9s + ':', ':' + (n3qu9s - 0x2) + ':'));
                }
            }
            iq$xj = iq$xj[b[4454]](new RegExp(b[31347], 'g'), b[31348] + kb0s + b[26448]), iq$xj = iq$xj[b[4454]](new RegExp(b[31349], 'g'), b[31348] + kb0s + b[26448]), sqn39[b[4216]] = iq$xj;
        }
        var n3uiq = {
            'id': window[b[31350]][b[31351]],
            'role': window[b[31350]][b[4338]],
            'level': window[b[31350]][b[31352]],
            'user': window[b[31350]][b[26347]],
            'version': window[b[31350]][b[107]],
            'cdn': window[b[31350]][b[4214]],
            'pkgName': window[b[31350]][b[26348]],
            'gamever': window[b[590]][b[31345]],
            'serverid': window[b[31350]][b[26342]] ? window[b[31350]][b[26342]][b[11442]] : 0x0,
            'systemInfo': window[b[31353]],
            'error': b[31354],
            'stack': sqn39 ? sqn39[b[4216]] : ''
        },
            omepca = JSON[b[4200]](n3uiq);
        console[b[141]](b[31355] + omepca), (!window[b[31343]] || window[b[31343]] != n3uiq[b[141]]) && (window[b[31343]] = n3uiq[b[141]], window[b[31356]](n3uiq));
    }
});
import 'eeemd5min.js';
import 'eeezlibs.js';
window[b[31357]] = require(b[31358]);
import 'eeeindex.js';
import 'eeelibsmin.js';
import 'eeewxmini.js';
import 'eeeinitmin.js';
console[b[80]](b[31359]), console[b[80]](b[31360]), e11UG0({ 'title': b[31361] });
var ef_yvz4 = { 'e1I10UG': !![] };
new window[b[31362]](ef_yvz4), window[b[31362]][b[164]][b[31363]]();
if (window[b[31364]]) clearInterval(window[b[31364]]);
window[b[31364]] = null, window[b[31365]] = function (sb960k, k6uns) {
    if (!sb960k || !k6uns) return 0x0;
    sb960k = sb960k[b[16]]('.'), k6uns = k6uns[b[16]]('.');
    const vrhf = Math[b[923]](sb960k[b[14]], k6uns[b[14]]);
    while (sb960k[b[14]] < vrhf) {
        sb960k[b[31]]('0');
    }
    while (k6uns[b[14]] < vrhf) {
        k6uns[b[31]]('0');
    }
    for (var g$tlxh = 0x0; g$tlxh < vrhf; g$tlxh++) {
        const d8251w = parseInt(sb960k[g$tlxh]),
              d5068 = parseInt(k6uns[g$tlxh]);
        if (d8251w > d5068) return 0x1;else {
            if (d8251w < d5068) return -0x1;
        }
    }
    return 0x0;
}, window[b[31366]] = wx[b[31367]]()[b[31366]], console[b[514]](b[31368] + window[b[31366]]);
var eyhzrv = wx[b[31369]]();
eyhzrv[b[31370]](function (vfhryz) {
    console[b[514]](b[31371] + vfhryz[b[31372]]);
}), eyhzrv[b[31373]](function () {
    wx[b[31374]]({
        'title': b[31375],
        'content': b[31376],
        'showCancel': ![],
        'success': function (n3us9) {
            eyhzrv[b[31377]]();
        }
    });
}), eyhzrv[b[31378]](function () {
    console[b[514]](b[31379]);
}), window[b[31380]] = function () {
    console[b[514]](b[31381]);
    var us3nq = wx[b[31382]]({
        'name': b[31383],
        'success': function (m4a_v7) {
            console[b[514]](b[31384]), console[b[514]](m4a_v7), m4a_v7 && m4a_v7[b[26546]] == b[31385] ? (window[b[31386]] = !![], window[b[31387]](), window[b[31388]]()) : setTimeout(function () {
                window[b[31380]]();
            }, 0x1f4);
        },
        'fail': function (amc47) {
            console[b[514]](b[31389]), console[b[514]](amc47), setTimeout(function () {
                window[b[31380]]();
            }, 0x1f4);
        }
    });
    us3nq && us3nq[b[30650]](rvzhy => {});
}, window[b[31390]] = function () {
    console[b[514]](b[31391]);
    var ti$xg = wx[b[31382]]({
        'name': b[31392],
        'success': function (xl$tig) {
            console[b[514]](b[31393]), console[b[514]](xl$tig), xl$tig && xl$tig[b[26546]] == b[31385] ? (window[b[31394]] = !![], window[b[31387]](), window[b[31388]]()) : setTimeout(function () {
                window[b[31390]]();
            }, 0x1f4);
        },
        'fail': function (zfyrv4) {
            console[b[514]](b[31395]), console[b[514]](zfyrv4), setTimeout(function () {
                window[b[31390]]();
            }, 0x1f4);
        }
    });
    ti$xg && ti$xg[b[30650]](i$tgjx => {});
}, window[b[31396]] = function () {
    window[b[31365]](window[b[31366]], b[31397]) >= 0x0 ? (console[b[514]](b[31398] + window[b[31366]] + b[31399]), window[b[31400]](), window[b[31380]](), window[b[31390]]()) : (window[b[31401]](b[31402], window[b[31366]]), wx[b[31374]]({
        'title': b[5744],
        'content': b[31403]
    }));
}, window[b[31353]] = '', wx[b[31404]]({
    'success'(hy) {
        window[b[31353]] = b[31405] + hy[b[31406]] + b[31407] + hy[b[31408]] + b[31409] + hy[b[5027]] + b[31410] + hy[b[507]] + b[31411] + hy[b[26309]] + b[31412] + hy[b[31366]] + b[31413] + hy[b[9132]], console[b[514]](window[b[31353]]), console[b[514]](b[31414] + hy[b[31415]] + b[31416] + hy[b[31417]] + b[31418] + hy[b[31419]] + b[31420] + hy[b[31421]] + b[31422] + hy[b[31423]] + b[31424] + hy[b[31425]] + b[31426] + (hy[b[31427]] ? hy[b[31427]][b[344]] + ',' + hy[b[31427]][b[1366]] + ',' + hy[b[31427]][b[1368]] + ',' + hy[b[31427]][b[1367]] : ''));
        var gtjxi$ = hy[b[507]] ? hy[b[507]][b[12472]]() : '',
            grhz = hy[b[31408]] ? hy[b[31408]][b[12472]]()[b[4454]]('\x20', '') : '';
        window[b[31350]][b[1148]] = gtjxi$[b[122]](b[31428]) != -0x1, window[b[31350]][b[11266]] = gtjxi$[b[122]](b[31320]) != -0x1, window[b[31350]][b[31429]] = gtjxi$[b[122]](b[31428]) != -0x1 || gtjxi$[b[122]](b[31320]) != -0x1, window[b[31350]][b[26031]] = gtjxi$[b[122]](b[31430]) != -0x1 || gtjxi$[b[122]](b[31431]) != -0x1, window[b[31350]][b[31432]] = hy[b[26309]] ? hy[b[26309]][b[12472]]() : '', window[b[31350]][b[31433]] = ![], window[b[31350]][b[31434]] = 0x2;
        if (gtjxi$[b[122]](b[31320]) != -0x1) {
            if (hy[b[9132]] >= 0x18) window[b[31350]][b[31434]] = 0x3;else window[b[31350]][b[31434]] = 0x2;
        } else {
            if (gtjxi$[b[122]](b[31428]) != -0x1) {
                if (hy[b[9132]] && hy[b[9132]] >= 0x14) window[b[31350]][b[31434]] = 0x3;else {
                    if (grhz[b[122]](b[31435]) != -0x1 || grhz[b[122]](b[31436]) != -0x1 || grhz[b[122]](b[31437]) != -0x1 || grhz[b[122]](b[31438]) != -0x1 || grhz[b[122]](b[31439]) != -0x1) window[b[31350]][b[31434]] = 0x2;else window[b[31350]][b[31434]] = 0x3;
                }
            } else window[b[31350]][b[31434]] = 0x2;
        }
        console[b[514]](b[31440] + window[b[31350]][b[31433]] + b[31441] + window[b[31350]][b[31434]]);
    }
}), wx[b[31442]]({
    'success': function (fzlyhr) {
        console[b[514]](b[31443] + fzlyhr[b[4314]] + b[31444] + fzlyhr[b[31445]]);
    }
}), wx[b[11823]]({
    'success': function (qu9n3s) {
        console[b[514]](b[31446] + qu9n3s[b[13358]]);
    }
}), wx[b[31447]]({ 'keepScreenOn': !![] }), wx[b[11825]](function (p7om) {
    console[b[514]](b[31446] + p7om[b[13358]] + b[31448] + p7om[b[31449]]);
}), wx[b[10757]](function (fy_47) {
    window[b[31450]] = fy_47, window[b[31451]] && window[b[31450]] && (console[b[80]](b[31452] + window[b[31450]][b[846]]), window[b[31451]](window[b[31450]]), window[b[31450]] = null);
}), window[b[31453]] = 0x0, window[b[31454]] = 0x0, window[b[31455]] = null, wx[b[31456]](function () {
    window[b[31454]]++;
    var fvrh = Date[b[85]]();
    (window[b[31453]] == 0x0 || fvrh - window[b[31453]] > 0x1d4c0) && (console[b[100]](b[31457]), wx[b[12010]]());
    if (window[b[31454]] >= 0x2) {
        window[b[31454]] = 0x0, console[b[141]](b[31458]), wx[b[31459]]('0', 0x1);
        if (window[b[31350]] && window[b[31350]][b[1148]]) window[b[31401]](b[31460], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});