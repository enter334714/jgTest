var f = wx.$B;
console[f[80]](f[31823]), window[f[31824]], wx[f[31825]](function (is4$) {
    if (is4$) {
        if (is4$[f[4216]]) {
            var e9g8 = window[f[590]][f[31258]][f[4454]](new RegExp(/\./, 'g'), '_'),
                r9gl = is4$[f[4216]],
                xqywop = r9gl[f[12172]](/(a2o\/Z_72game.js:)[0-9]{1,60}(:)/g);
            if (xqywop) for (var yz5b_n = 0x0; yz5b_n < xqywop[f[14]]; yz5b_n++) {
                if (xqywop[yz5b_n] && xqywop[yz5b_n][f[14]] > 0x0) {
                    var er8g97 = parseInt(xqywop[yz5b_n][f[4454]](f[31826], '')[f[4454]](':', ''));
                    r9gl = r9gl[f[4454]](xqywop[yz5b_n], xqywop[yz5b_n][f[4454]](':' + er8g97 + ':', ':' + (er8g97 - 0x2) + ':'));
                }
            }
            r9gl = r9gl[f[4454]](new RegExp(f[31827], 'g'), f[31828] + e9g8 + f[26448]), r9gl = r9gl[f[4454]](new RegExp(f[31829], 'g'), f[31828] + e9g8 + f[26448]), is4$[f[4216]] = r9gl;
        }
        var rg9lu = {
            'id': window[f[31266]][f[31331]],
            'role': window[f[31266]][f[4338]],
            'level': window[f[31266]][f[31332]],
            'user': window[f[31266]][f[26347]],
            'version': window[f[31266]][f[107]],
            'cdn': window[f[31266]][f[4214]],
            'pkgName': window[f[31266]][f[26348]],
            'gamever': window[f[590]][f[31258]],
            'serverid': window[f[31266]][f[26342]] ? window[f[31266]][f[26342]][f[11442]] : 0x0,
            'systemInfo': window[f[31333]],
            'error': f[31830],
            'stack': is4$ ? is4$[f[4216]] : ''
        },
            px_y5z = JSON[f[4200]](rg9lu);
        console[f[141]](f[31831] + px_y5z), (!window[f[31824]] || window[f[31824]] != rg9lu[f[141]]) && (window[f[31824]] = rg9lu[f[141]], window[f[31284]](rg9lu));
    }
});
import 'p0u.js';
import 'slv.js';
window[f[31832]] = require(f[31833]);
import 'a4c.js';
import 'c6g.js';
import 'dto3a.js';
import 'qcdq.js';
console[f[80]](f[31834]), console[f[80]](f[31835]), t1BKWY({ 'title': f[31836] });
var Sdaq0o = { 't1OBYKW': !![] };
new window[f[31315]](Sdaq0o), window[f[31315]][f[164]][f[31794]]();
if (window[f[31837]]) clearInterval(window[f[31837]]);
window[f[31837]] = null, window[f[31364]] = function (bz5n_, q0d2o) {
    if (!bz5n_ || !q0d2o) return 0x0;
    bz5n_ = bz5n_[f[16]]('.'), q0d2o = q0d2o[f[16]]('.');
    const wopaqx = Math[f[923]](bz5n_[f[14]], q0d2o[f[14]]);
    while (bz5n_[f[14]] < wopaqx) {
        bz5n_[f[31]]('0');
    }
    while (q0d2o[f[14]] < wopaqx) {
        q0d2o[f[31]]('0');
    }
    for (var kv602m = 0x0; kv602m < wopaqx; kv602m++) {
        const ur79 = parseInt(bz5n_[kv602m]),
              vk260 = parseInt(q0d2o[kv602m]);
        if (ur79 > vk260) return 0x1;else {
            if (ur79 < vk260) return -0x1;
        }
    }
    return 0x0;
}, window[f[31493]] = wx[f[31838]]()[f[31493]], console[f[514]](f[31839] + window[f[31493]]);
var Sy5pzx = wx[f[31840]]();
Sy5pzx[f[31841]](function (a2oqd0) {
    console[f[514]](f[31842] + a2oqd0[f[31843]]);
}), Sy5pzx[f[31844]](function () {
    wx[f[31301]]({
        'title': f[31845],
        'content': f[31846],
        'showCancel': ![],
        'success': function (oq0a) {
            Sy5pzx[f[31847]]();
        }
    });
}), Sy5pzx[f[31848]](function () {
    console[f[514]](f[31849]);
}), window[f[31850]] = function () {
    console[f[514]](f[31851]);
    var ugl1 = wx[f[31852]]({
        'name': 'ou',
        'success': function (nyzb_5) {
            console[f[514]](f[31853]), console[f[514]](nyzb_5), nyzb_5 && nyzb_5[f[26546]] == f[31854] ? (window[f[31292]] = !![], window[f[31438]](), window[f[31439]]()) : setTimeout(function () {
                window[f[31850]]();
            }, 0x1f4);
        },
        'fail': function (b5z_yn) {
            console[f[514]](f[31855]), console[f[514]](b5z_yn), setTimeout(function () {
                window[f[31850]]();
            }, 0x1f4);
        }
    });
    ugl1 && ugl1[f[30650]](dma0v => {});
}, window[f[31856]] = function () {
    console[f[514]](f[31857]);
    var greu7 = wx[f[31852]]({
        'name': f[31858],
        'success': function (yxwpq) {
            console[f[514]](f[31859]), console[f[514]](yxwpq), yxwpq && yxwpq[f[26546]] == f[31854] ? (window[f[31293]] = !![], window[f[31438]](), window[f[31439]]()) : setTimeout(function () {
                window[f[31856]]();
            }, 0x1f4);
        },
        'fail': function (w5pxz) {
            console[f[514]](f[31860]), console[f[514]](w5pxz), setTimeout(function () {
                window[f[31856]]();
            }, 0x1f4);
        }
    });
    greu7 && greu7[f[30650]](_ynb5 => {});
}, window[f[31861]] = function () {
    window[f[31364]](window[f[31493]], f[31862]) >= 0x0 ? (console[f[514]](f[31863] + window[f[31493]] + f[31864]), window[f[31308]](), window[f[31850]](), window[f[31856]]()) : (window[f[31341]](f[31865], window[f[31493]]), wx[f[31301]]({
        'title': f[5744],
        'content': f[31866]
    }));
}, window[f[31333]] = '', wx[f[31867]]({
    'success'(qoa2d) {
        window[f[31333]] = f[31868] + qoa2d[f[31869]] + f[31870] + qoa2d[f[31871]] + f[31872] + qoa2d[f[5027]] + f[31873] + qoa2d[f[507]] + f[31874] + qoa2d[f[26309]] + f[31875] + qoa2d[f[31493]] + f[31876] + qoa2d[f[9132]], console[f[514]](window[f[31333]]), console[f[514]](f[31877] + qoa2d[f[31878]] + f[31879] + qoa2d[f[31880]] + f[31881] + qoa2d[f[31882]] + f[31883] + qoa2d[f[31884]] + f[31885] + qoa2d[f[31886]] + f[31887] + qoa2d[f[31888]] + f[31889] + (qoa2d[f[31890]] ? qoa2d[f[31890]][f[344]] + ',' + qoa2d[f[31890]][f[1366]] + ',' + qoa2d[f[31890]][f[1368]] + ',' + qoa2d[f[31890]][f[1367]] : ''));
        var tgul1 = qoa2d[f[507]] ? qoa2d[f[507]][f[12472]]() : '',
            grl1u = qoa2d[f[31871]] ? qoa2d[f[31871]][f[12472]]()[f[4454]]('\x20', '') : '';
        window[f[31266]][f[1148]] = tgul1[f[122]](f[31891]) != -0x1, window[f[31266]][f[11266]] = tgul1[f[122]](f[31892]) != -0x1, window[f[31266]][f[31589]] = tgul1[f[122]](f[31891]) != -0x1 || tgul1[f[122]](f[31892]) != -0x1, window[f[31266]][f[26031]] = tgul1[f[122]](f[31893]) != -0x1 || tgul1[f[122]](f[31270]) != -0x1, window[f[31266]][f[31343]] = qoa2d[f[26309]] ? qoa2d[f[26309]][f[12472]]() : '', window[f[31266]][f[31585]] = ![], window[f[31266]][f[31586]] = 0x2;
        if (tgul1[f[122]](f[31892]) != -0x1) {
            if (qoa2d[f[9132]] >= 0x18) window[f[31266]][f[31586]] = 0x3;else window[f[31266]][f[31586]] = 0x2;
        } else {
            if (tgul1[f[122]](f[31891]) != -0x1) {
                if (qoa2d[f[9132]] && qoa2d[f[9132]] >= 0x14) window[f[31266]][f[31586]] = 0x3;else {
                    if (grl1u[f[122]](f[31894]) != -0x1 || grl1u[f[122]](f[31895]) != -0x1 || grl1u[f[122]](f[31896]) != -0x1 || grl1u[f[122]](f[31897]) != -0x1 || grl1u[f[122]](f[31898]) != -0x1) window[f[31266]][f[31586]] = 0x2;else window[f[31266]][f[31586]] = 0x3;
                }
            } else window[f[31266]][f[31586]] = 0x2;
        }
        console[f[514]](f[31899] + window[f[31266]][f[31585]] + f[31900] + window[f[31266]][f[31586]]);
    }
}), wx[f[31513]]({
    'success': function ($4hs3i) {
        console[f[514]](f[31901] + $4hs3i[f[4314]] + f[31902] + $4hs3i[f[31515]]);
    }
}), wx[f[11823]]({
    'success': function (j3r9) {
        console[f[514]](f[31903] + j3r9[f[13358]]);
    }
}), wx[f[31904]]({ 'keepScreenOn': !![] }), wx[f[11825]](function (re7j8) {
    console[f[514]](f[31903] + re7j8[f[13358]] + f[31905] + re7j8[f[31906]]);
}), wx[f[10757]](function (r8793j) {
    window[f[31487]] = r8793j, window[f[31486]] && window[f[31487]] && (console[f[80]](f[31488] + window[f[31487]][f[846]]), window[f[31486]](window[f[31487]]), window[f[31487]] = null);
}), window[f[31907]] = 0x0, window[f[31908]] = 0x0, window[f[31909]] = null, wx[f[31910]](function () {
    window[f[31908]]++;
    var sjh43 = Date[f[85]]();
    (window[f[31907]] == 0x0 || sjh43 - window[f[31907]] > 0x1d4c0) && (console[f[100]](f[31911]), wx[f[12010]]());
    if (window[f[31908]] >= 0x2) {
        window[f[31908]] = 0x0, console[f[141]](f[31912]), wx[f[31913]]('0', 0x1);
        if (window[f[31266]] && window[f[31266]][f[1148]]) window[f[31341]](f[31914], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});