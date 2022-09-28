var J = wx.h$;
console[J[80]](J[31829]), window[J[31830]], wx[J[31831]](function (g5fyt6) {
    if (g5fyt6) {
        if (g5fyt6[J[4216]]) {
            var qoakb = window[J[590]][J[31512]][J[4454]](new RegExp(/\./, 'g'), '_'),
                cp_d = g5fyt6[J[4216]],
                oa1q_k = cp_d[J[12172]](/(a4vmp\/Z_67game.js:)[0-9]{1,60}(:)/g);
            if (oa1q_k) for (var w4jv = 0x0; w4jv < oa1q_k[J[14]]; w4jv++) {
                if (oa1q_k[w4jv] && oa1q_k[w4jv][J[14]] > 0x0) {
                    var hu3s8n = parseInt(oa1q_k[w4jv][J[4454]](J[31832], '')[J[4454]](':', ''));
                    cp_d = cp_d[J[4454]](oa1q_k[w4jv], oa1q_k[w4jv][J[4454]](':' + hu3s8n + ':', ':' + (hu3s8n - 0x2) + ':'));
                }
            }
            cp_d = cp_d[J[4454]](new RegExp(J[31833], 'g'), J[31834] + qoakb + J[26448]), cp_d = cp_d[J[4454]](new RegExp(J[31835], 'g'), J[31834] + qoakb + J[26448]), g5fyt6[J[4216]] = cp_d;
        }
        var _ekcmd = {
            'id': window[J[31356]][J[31571]],
            'role': window[J[31356]][J[4338]],
            'level': window[J[31356]][J[31572]],
            'user': window[J[31356]][J[26347]],
            'version': window[J[31356]][J[107]],
            'cdn': window[J[31356]][J[4214]],
            'pkgName': window[J[31356]][J[26348]],
            'gamever': window[J[590]][J[31512]],
            'serverid': window[J[31356]][J[26342]] ? window[J[31356]][J[26342]][J[11442]] : 0x0,
            'systemInfo': window[J[31573]],
            'error': J[31836],
            'stack': g5fyt6 ? g5fyt6[J[4216]] : ''
        },
            q0b1r2 = JSON[J[4200]](_ekcmd);
        console[J[141]](J[31837] + q0b1r2), (!window[J[31830]] || window[J[31830]] != _ekcmd[J[141]]) && (window[J[31830]] = _ekcmd[J[141]], window[J[31535]](_ekcmd));
    }
});
import 'rr.js';
import 'v7saz.js';
window[J[31838]] = require(J[31839]);
import 'yu.js';
import 'a7ay5a.js';
import 'a8zl2d.js';
import 'tv3iw.js';
console[J[80]](J[31840]), console[J[80]](J[31841]), J1R5PQ({ 'title': J[31842] });
var g_cdmep = { 'J1FRQ5P': !![] };
new window[J[31510]](g_cdmep), window[J[31510]][J[164]][J[31475]]();
if (window[J[31843]]) clearInterval(window[J[31843]]);
window[J[31843]] = null, window[J[31603]] = function (ft5y, lijw4$) {
    if (!ft5y || !lijw4$) return 0x0;
    ft5y = ft5y[J[16]]('.'), lijw4$ = lijw4$[J[16]]('.');
    const $6lyj = Math[J[923]](ft5y[J[14]], lijw4$[J[14]]);
    while (ft5y[J[14]] < $6lyj) {
        ft5y[J[31]]('0');
    }
    while (lijw4$[J[14]] < $6lyj) {
        lijw4$[J[31]]('0');
    }
    for (var yfjl4 = 0x0; yfjl4 < $6lyj; yfjl4++) {
        const n83 = parseInt(ft5y[yfjl4]),
              c_kme = parseInt(lijw4$[yfjl4]);
        if (n83 > c_kme) return 0x1;else {
            if (n83 < c_kme) return -0x1;
        }
    }
    return 0x0;
}, window[J[31725]] = wx[J[31844]]()[J[31725]], console[J[514]](J[31845] + window[J[31725]]);
var gaokec_ = wx[J[31846]]();
gaokec_[J[31847]](function ($4wijl) {
    console[J[514]](J[31848] + $4wijl[J[31849]]);
}), gaokec_[J[31850]](function () {
    wx[J[31548]]({
        'title': J[31851],
        'content': J[31852],
        'showCancel': ![],
        'success': function (q1kba) {
            gaokec_[J[31853]]();
        }
    });
}), gaokec_[J[31854]](function () {
    console[J[514]](J[31855]);
}), window[J[31856]] = function () {
    console[J[514]](J[31857]);
    var n8b20r = wx[J[31858]]({
        'name': J[31859],
        'success': function (mc9pd) {
            console[J[514]](J[31860]), console[J[514]](mc9pd), mc9pd && mc9pd[J[26546]] == J[31861] ? (window[J[31542]] = !![], window[J[31478]](), window[J[31479]]()) : setTimeout(function () {
                window[J[31856]]();
            }, 0x1f4);
        },
        'fail': function (q01br2) {
            console[J[514]](J[31862]), console[J[514]](q01br2), setTimeout(function () {
                window[J[31856]]();
            }, 0x1f4);
        }
    });
    n8b20r && n8b20r[J[30650]](ijw$ => {});
}, window[J[31863]] = function () {
    console[J[514]](J[31864]);
    var t9m5gp = wx[J[31858]]({
        'name': J[31865],
        'success': function (tgpf59) {
            console[J[514]](J[31866]), console[J[514]](tgpf59), tgpf59 && tgpf59[J[26546]] == J[31861] ? (window[J[31543]] = !![], window[J[31478]](), window[J[31479]]()) : setTimeout(function () {
                window[J[31863]]();
            }, 0x1f4);
        },
        'fail': function (dkc_m) {
            console[J[514]](J[31867]), console[J[514]](dkc_m), setTimeout(function () {
                window[J[31863]]();
            }, 0x1f4);
        }
    });
    t9m5gp && t9m5gp[J[30650]](q1b0r2 => {});
}, window[J[31868]] = function () {
    window[J[31603]](window[J[31725]], J[31869]) >= 0x0 ? (console[J[514]](J[31870] + window[J[31725]] + J[31871]), window[J[31555]](), window[J[31856]](), window[J[31863]]()) : (window[J[31581]](J[31872], window[J[31725]]), wx[J[31548]]({
        'title': J[5744],
        'content': J[31873]
    }));
}, window[J[31573]] = '', wx[J[31874]]({
    'success'(ecm) {
        window[J[31573]] = J[31875] + ecm[J[31876]] + J[31877] + ecm[J[31878]] + J[31879] + ecm[J[5027]] + J[31880] + ecm[J[507]] + J[31881] + ecm[J[26309]] + J[31882] + ecm[J[31725]] + J[31883] + ecm[J[9132]], console[J[514]](window[J[31573]]), console[J[514]](J[31884] + ecm[J[31885]] + J[31886] + ecm[J[31887]] + J[31888] + ecm[J[31889]] + J[31890] + ecm[J[31891]] + J[31892] + ecm[J[31893]] + J[31894] + ecm[J[31895]] + J[31896] + (ecm[J[31897]] ? ecm[J[31897]][J[344]] + ',' + ecm[J[31897]][J[1366]] + ',' + ecm[J[31897]][J[1368]] + ',' + ecm[J[31897]][J[1367]] : ''));
        var gp95f = ecm[J[507]] ? ecm[J[507]][J[12472]]() : '',
            ecdp = ecm[J[31878]] ? ecm[J[31878]][J[12472]]()[J[4454]]('\x20', '') : '';
        window[J[31356]][J[1148]] = gp95f[J[122]](J[31898]) != -0x1, window[J[31356]][J[11266]] = gp95f[J[122]](J[31899]) != -0x1, window[J[31356]][J[31814]] = gp95f[J[122]](J[31898]) != -0x1 || gp95f[J[122]](J[31899]) != -0x1, window[J[31356]][J[26031]] = gp95f[J[122]](J[31900]) != -0x1 || gp95f[J[122]](J[31522]) != -0x1, window[J[31356]][J[31583]] = ecm[J[26309]] ? ecm[J[26309]][J[12472]]() : '', window[J[31356]][J[31810]] = ![], window[J[31356]][J[31811]] = 0x2;
        if (gp95f[J[122]](J[31899]) != -0x1) {
            if (ecm[J[9132]] >= 0x18) window[J[31356]][J[31811]] = 0x3;else window[J[31356]][J[31811]] = 0x2;
        } else {
            if (gp95f[J[122]](J[31898]) != -0x1) {
                if (ecm[J[9132]] && ecm[J[9132]] >= 0x14) window[J[31356]][J[31811]] = 0x3;else {
                    if (ecdp[J[122]](J[31901]) != -0x1 || ecdp[J[122]](J[31902]) != -0x1 || ecdp[J[122]](J[31903]) != -0x1 || ecdp[J[122]](J[31904]) != -0x1 || ecdp[J[122]](J[31905]) != -0x1) window[J[31356]][J[31811]] = 0x2;else window[J[31356]][J[31811]] = 0x3;
                }
            } else window[J[31356]][J[31811]] = 0x2;
        }
        console[J[514]](J[31906] + window[J[31356]][J[31810]] + J[31907] + window[J[31356]][J[31811]]);
    }
}), wx[J[31745]]({
    'success': function (sxz3) {
        console[J[514]](J[31908] + sxz3[J[4314]] + J[31909] + sxz3[J[31747]]);
    }
}), wx[J[11823]]({
    'success': function (fl46g) {
        console[J[514]](J[31910] + fl46g[J[13358]]);
    }
}), wx[J[31911]]({ 'keepScreenOn': !![] }), wx[J[11825]](function (tgfly) {
    console[J[514]](J[31910] + tgfly[J[13358]] + J[31912] + tgfly[J[31913]]);
}), wx[J[10757]](function (g95t6) {
    window[J[31719]] = g95t6, window[J[31718]] && window[J[31719]] && (console[J[80]](J[31720] + window[J[31719]][J[846]]), window[J[31718]](window[J[31719]]), window[J[31719]] = null);
}), window[J[31914]] = 0x0, window[J[31915]] = 0x0, window[J[31916]] = null, wx[J[31917]](function () {
    window[J[31915]]++;
    var tfygl6 = Date[J[85]]();
    (window[J[31914]] == 0x0 || tfygl6 - window[J[31914]] > 0x1d4c0) && (console[J[100]](J[31918]), wx[J[12010]]());
    if (window[J[31915]] >= 0x2) {
        window[J[31915]] = 0x0, console[J[141]](J[31919]), wx[J[31920]]('0', 0x1);
        if (window[J[31356]] && window[J[31356]][J[1148]]) window[J[31581]](J[31921], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});