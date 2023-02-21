var f = wx.$B;
console[f[80]](f[35130]), window[f[35131]], wx[f[35132]](function ($d8tj) {
    if ($d8tj) {
        if ($d8tj[f[4547]]) {
            var m2dj = window[f[593]][f[34548]][f[4248]](new RegExp(/\./, 'g'), '_'),
                n64ua = $d8tj[f[4547]],
                q7oxen = n64ua[f[12736]](/(a0uhnz\/Z_61game.js:)[0-9]{1,60}(:)/g);
            if (q7oxen) for (var tkf8d = 0x0; tkf8d < q7oxen[f[14]]; tkf8d++) {
                if (q7oxen[tkf8d] && q7oxen[tkf8d][f[14]] > 0x0) {
                    var fsitk = parseInt(q7oxen[tkf8d][f[4248]](f[35133], '')[f[4248]](':', ''));
                    n64ua = n64ua[f[4248]](q7oxen[tkf8d], q7oxen[tkf8d][f[4248]](':' + fsitk + ':', ':' + (fsitk - 0x2) + ':'));
                }
            }
            n64ua = n64ua[f[4248]](new RegExp(f[35134], 'g'), f[35135] + m2dj + f[27655]), n64ua = n64ua[f[4248]](new RegExp(f[35136], 'g'), f[35135] + m2dj + f[27655]), $d8tj[f[4547]] = n64ua;
        }
        var lv9z2 = {
            'id': window[f[4545]][f[34621]],
            'role': window[f[4545]][f[4676]],
            'level': window[f[4545]][f[34622]],
            'user': window[f[4545]][f[27544]],
            'version': window[f[4545]][f[107]],
            'gamever': window[f[593]][f[34548]],
            'cdn': window[f[4545]][f[4542]],
            'serverid': window[f[4545]][f[27540]] ? window[f[4545]][f[27540]][f[11928]] : 0x0,
            'systemInfo': window[f[34623]],
            'error': f[35137],
            'stack': $d8tj ? $d8tj[f[4547]] : ''
        },
            n746ua = JSON[f[4528]](lv9z2);
        console[f[141]](f[35138] + n746ua), (!window[f[35131]] || window[f[35131]] != lv9z2[f[141]]) && (window[f[35131]] = lv9z2[f[141]], window[f[34573]](lv9z2));
    }
});
import 'f93a.js';
import 'lxe.js';
window[f[35139]] = require(f[35140]);
import 'a8wr.js';
import 'mh4b1a.js';
import 'a87y.js';
import 'g6j.js';
console[f[80]](f[35141]), console[f[80]](f[35142]), t13C75({ 'title': f[35143] });
var Sjd1z2m = { 't1G35C7': !![] };
new window[f[34604]](Sjd1z2m), window[f[34604]][f[164]][f[35101]]();
if (window[f[35144]]) clearInterval(window[f[35144]]);
window[f[35144]] = null, window[f[34652]] = function (yw64_g, a7n6u4) {
    if (!yw64_g || !a7n6u4) return 0x0;
    yw64_g = yw64_g[f[16]]('.'), a7n6u4 = a7n6u4[f[16]]('.');
    const u67ano = Math[f[940]](yw64_g[f[14]], a7n6u4[f[14]]);
    while (yw64_g[f[14]] < u67ano) {
        yw64_g[f[31]]('0');
    }
    while (a7n6u4[f[14]] < u67ano) {
        a7n6u4[f[31]]('0');
    }
    for (var dtkm$8 = 0x0; dtkm$8 < u67ano; dtkm$8++) {
        const un64a = parseInt(yw64_g[dtkm$8]),
              zmjl2 = parseInt(a7n6u4[dtkm$8]);
        if (un64a > zmjl2) return 0x1;else {
            if (un64a < zmjl2) return -0x1;
        }
    }
    return 0x0;
}, window[f[34782]] = wx[f[35145]]()[f[34782]], console[f[517]](f[35146] + window[f[34782]]);
var Svghw3 = wx[f[35147]]();
Svghw3[f[35148]](function (j2ml) {
    console[f[517]](f[35149] + j2ml[f[35150]]);
}), Svghw3[f[35151]](function () {
    wx[f[34590]]({
        'title': f[35152],
        'content': f[35153],
        'showCancel': ![],
        'success': function (iftps) {
            Svghw3[f[35154]]();
        }
    });
}), Svghw3[f[35155]](function () {
    console[f[517]](f[35156]);
}), window[f[35157]] = function () {
    console[f[517]](f[35158]);
    var a6u4y = wx[f[35159]]({
        'name': 'ge',
        'success': function (d8$1m) {
            console[f[517]](f[35160]), console[f[517]](d8$1m), d8$1m && d8$1m[f[27757]] == f[35161] ? (window[f[34581]] = !![], window[f[34729]](), window[f[34730]]()) : setTimeout(function () {
                window[f[35157]]();
            }, 0x1f4);
        },
        'fail': function (b3v5gh) {
            console[f[517]](f[35162]), console[f[517]](b3v5gh), setTimeout(function () {
                window[f[35157]]();
            }, 0x1f4);
        }
    });
    a6u4y && a6u4y[f[34348]](w_u => {});
}, window[f[35163]] = function () {
    console[f[517]](f[35164]);
    var zlj921 = wx[f[35159]]({
        'name': f[35165],
        'success': function (_wby3) {
            console[f[517]](f[35166]), console[f[517]](_wby3), _wby3 && _wby3[f[27757]] == f[35161] ? (window[f[34582]] = !![], window[f[34729]](), window[f[34730]]()) : setTimeout(function () {
                window[f[35163]]();
            }, 0x1f4);
        },
        'fail': function (whgb_3) {
            console[f[517]](f[35167]), console[f[517]](whgb_3), setTimeout(function () {
                window[f[35163]]();
            }, 0x1f4);
        }
    });
    zlj921 && zlj921[f[34348]](_wy46g => {});
}, window[f[35168]] = function () {
    window[f[34652]](window[f[34782]], f[35169]) >= 0x0 ? (console[f[517]](f[35170] + window[f[34782]] + f[35171]), window[f[34597]](), window[f[35157]](), window[f[35163]]()) : (window[f[34631]](f[35172], window[f[34782]]), wx[f[34590]]({
        'title': f[6132],
        'content': f[35173]
    }));
}, window[f[34623]] = '', wx[f[35174]]({
    'success'(vb3wg) {
        window[f[34623]] = f[35175] + vb3wg[f[35176]] + f[35177] + vb3wg[f[35178]] + f[35179] + vb3wg[f[5374]] + f[35180] + vb3wg[f[510]] + f[35181] + vb3wg[f[27498]] + f[35182] + vb3wg[f[34782]] + f[35183] + vb3wg[f[9613]], console[f[517]](window[f[34623]]), console[f[517]](f[35184] + vb3wg[f[31114]] + f[35185] + vb3wg[f[35186]] + f[35187] + vb3wg[f[35188]] + f[35189] + vb3wg[f[35190]] + f[35191] + vb3wg[f[35192]] + f[35193] + vb3wg[f[35194]] + f[35195] + (vb3wg[f[35196]] ? vb3wg[f[35196]][f[347]] + ',' + vb3wg[f[35196]][f[1432]] + ',' + vb3wg[f[35196]][f[1434]] + ',' + vb3wg[f[35196]][f[1433]] : ''));
        var tfsk = vb3wg[f[510]] ? vb3wg[f[510]][f[13059]]() : '',
            vh5l = vb3wg[f[35178]] ? vb3wg[f[35178]][f[13059]]()[f[4248]]('\x20', '') : '';
        window[f[4545]][f[1165]] = tfsk[f[122]](f[35197]) != -0x1, window[f[4545]][f[11756]] = tfsk[f[122]](f[35198]) != -0x1, window[f[4545]][f[34878]] = tfsk[f[122]](f[35197]) != -0x1 || tfsk[f[122]](f[35198]) != -0x1, window[f[4545]][f[27189]] = tfsk[f[122]](f[35199]) != -0x1 || tfsk[f[122]](f[34559]) != -0x1, window[f[4545]][f[34633]] = vb3wg[f[27498]] ? vb3wg[f[27498]][f[13059]]() : '', window[f[4545]][f[34873]] = ![], window[f[4545]][f[34874]] = 0x2;
        if (tfsk[f[122]](f[35198]) != -0x1) {
            if (vb3wg[f[9613]] >= 0x18) window[f[4545]][f[34874]] = 0x3;else window[f[4545]][f[34874]] = 0x2;
        } else {
            if (tfsk[f[122]](f[35197]) != -0x1) {
                if (vb3wg[f[9613]] && vb3wg[f[9613]] >= 0x14) window[f[4545]][f[34874]] = 0x3;else {
                    if (vh5l[f[122]](f[35200]) != -0x1 || vh5l[f[122]](f[35201]) != -0x1 || vh5l[f[122]](f[35202]) != -0x1 || vh5l[f[122]](f[35203]) != -0x1 || vh5l[f[122]](f[35204]) != -0x1) window[f[4545]][f[34874]] = 0x2;else window[f[4545]][f[34874]] = 0x3;
                }
            } else window[f[4545]][f[34874]] = 0x2;
        }
        console[f[517]](f[35205] + window[f[4545]][f[34873]] + f[35206] + window[f[4545]][f[34874]]);
    }
}), wx[f[34801]]({
    'success': function (t$m8j) {
        console[f[517]](f[35207] + t$m8j[f[4652]] + f[35208] + t$m8j[f[34803]]);
    }
}), wx[f[12309]]({
    'success': function (yu74a) {
        console[f[517]](f[35209] + yu74a[f[14135]]);
    }
}), wx[f[35210]]({ 'keepScreenOn': !![] }), wx[f[12311]](function (v59lb) {
    console[f[517]](f[35209] + v59lb[f[14135]] + f[35211] + v59lb[f[35212]]);
}), wx[f[11248]](function (y4w_g6) {
    window[f[34776]] = y4w_g6, window[f[34775]] && window[f[34776]] && (console[f[80]](f[34777] + window[f[34776]][f[863]]), window[f[34775]](window[f[34776]]), window[f[34776]] = null);
}), window[f[35213]] = 0x0, window[f[35214]] = null, wx[f[35215]](function () {
    window[f[35213]]++, wx[f[12573]]();
    if (window[f[35213]] >= 0x2) {
        window[f[35213]] = 0x0, console[f[141]](f[35216]), wx[f[35217]]('0', 0x1);
        if (window[f[4545]] && window[f[4545]][f[1165]]) window[f[34631]](f[35218], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});