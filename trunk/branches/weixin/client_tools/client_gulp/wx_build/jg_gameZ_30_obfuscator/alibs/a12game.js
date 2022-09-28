var c = wx.$a;
console[c[608]](c[31196]), window[c[31197]], wx[c[31198]](function ($bcy0) {
    if ($bcy0) {
        if ($bcy0[c[335]]) {
            var uge_4w = window[c[1076]][c[31199]][c[463]](new RegExp(/\./, 'g'), '_'),
                hvjxs = $bcy0[c[335]],
                uow = hvjxs[c[342]](/(a2a3a1\/a12game.js:)[0-9]{1,60}(:)/g);
            if (uow) for (var tdq = 0x0; tdq < uow[c[319]]; tdq++) {
                if (uow[tdq] && uow[tdq][c[319]] > 0x0) {
                    var we_4uo = parseInt(uow[tdq][c[463]](c[31200], '')[c[463]](':', ''));
                    hvjxs = hvjxs[c[463]](uow[tdq], uow[tdq][c[463]](':' + we_4uo + ':', ':' + (we_4uo - 0x2) + ':'));
                }
            }
            hvjxs = hvjxs[c[463]](new RegExp(c[31201], 'g'), c[31202] + uge_4w + c[26897]), hvjxs = hvjxs[c[463]](new RegExp(c[31203], 'g'), c[31202] + uge_4w + c[26897]), $bcy0[c[335]] = hvjxs;
        }
        var sfxg1 = {
            'id': window[c[31204]][c[31205]],
            'role': window[c[31204]][c[4898]],
            'level': window[c[31204]][c[31206]],
            'user': window[c[31204]][c[26798]],
            'version': window[c[31204]][c[630]],
            'cdn': window[c[31204]][c[4778]],
            'pkgName': window[c[31204]][c[26799]],
            'gamever': window[c[1076]][c[31199]],
            'serverid': window[c[31204]][c[26793]] ? window[c[31204]][c[26793]][c[11981]] : 0x0,
            'systemInfo': window[c[31207]],
            'error': c[31208],
            'stack': $bcy0 ? $bcy0[c[335]] : ''
        },
            ue2_gw = JSON[c[4764]](sfxg1);
        console[c[496]](c[31209] + ue2_gw), (!window[c[31197]] || window[c[31197]] != sfxg1[c[496]]) && (window[c[31197]] = sfxg1[c[496]], window[c[31210]](sfxg1));
    }
});
import 'a1md5min.js';
import 'ea1zlibs.js';
window[c[31211]] = require(c[31212]);
import 'a1index.js';
import 'a1ibsmin.js';
import 'a1wxmini.js';
import 'a1initmin.js';
console[c[608]](c[31213]), console[c[608]](c[31214]), jM1BE({ 'title': c[31215] });
var gy40_e = { 'j6ME1B': !![] };
new window[c[31216]](gy40_e), window[c[31216]][c[676]][c[31217]]();
if (window[c[31218]]) clearInterval(window[c[31218]]);
window[c[31218]] = null, window[c[31219]] = function (k68zqd, clbma$) {
    if (!k68zqd || !clbma$) return 0x0;
    k68zqd = k68zqd[c[441]]('.'), clbma$ = clbma$[c[441]]('.');
    const r5t7q8 = Math[c[488]](k68zqd[c[319]], clbma$[c[319]]);
    while (k68zqd[c[319]] < r5t7q8) {
        k68zqd[c[341]]('0');
    }
    while (clbma$[c[319]] < r5t7q8) {
        clbma$[c[341]]('0');
    }
    for (var ba$m = 0x0; ba$m < r5t7q8; ba$m++) {
        const qh6k = parseInt(k68zqd[ba$m]),
              uegw4 = parseInt(clbma$[ba$m]);
        if (qh6k > uegw4) return 0x1;else {
            if (qh6k < uegw4) return -0x1;
        }
    }
    return 0x0;
}, window[c[31220]] = wx[c[31221]]()[c[31220]], console[c[453]](c[31222] + window[c[31220]]);
var gy04o = wx[c[31223]]();
gy04o[c[31224]](function (fg2u) {
    console[c[453]](c[31225] + fg2u[c[31226]]);
}), gy04o[c[31227]](function () {
    wx[c[31228]]({
        'title': c[31229],
        'content': c[31230],
        'showCancel': ![],
        'success': function (_yo0c) {
            gy04o[c[31231]]();
        }
    });
}), gy04o[c[31232]](function () {
    console[c[453]](c[31233]);
}), window[c[31234]] = function () {
    console[c[453]](c[31235]);
    var rd58qt = wx[c[31236]]({
        'name': c[31237],
        'success': function (gxu2f1) {
            console[c[453]](c[31238]), console[c[453]](gxu2f1), gxu2f1 && gxu2f1[c[26992]] == c[31239] ? (window[c[31240]] = !![], window[c[31241]](), window[c[31242]]()) : setTimeout(function () {
                window[c[31234]]();
            }, 0x1f4);
        },
        'fail': function (d8k6tq) {
            console[c[453]](c[31243]), console[c[453]](d8k6tq), setTimeout(function () {
                window[c[31234]]();
            }, 0x1f4);
        }
    });
    rd58qt && rd58qt[c[30949]](zvkhn6 => {});
}, window[c[31244]] = function () {
    console[c[453]](c[31245]);
    var $l0cby = wx[c[31236]]({
        'name': c[31246],
        'success': function (xsfn1) {
            console[c[453]](c[31247]), console[c[453]](xsfn1), xsfn1 && xsfn1[c[26992]] == c[31239] ? (window[c[31248]] = !![], window[c[31241]](), window[c[31242]]()) : setTimeout(function () {
                window[c[31244]]();
            }, 0x1f4);
        },
        'fail': function (qd85rt) {
            console[c[453]](c[31249]), console[c[453]](qd85rt), setTimeout(function () {
                window[c[31244]]();
            }, 0x1f4);
        }
    });
    $l0cby && $l0cby[c[30949]](w4e_g => {});
}, window[c[31250]] = function () {
    window[c[31219]](window[c[31220]], c[31251]) >= 0x0 ? (console[c[453]](c[31252] + window[c[31220]] + c[31253]), window[c[31254]](), window[c[31234]](), window[c[31244]]()) : (window[c[31255]](c[31256], window[c[31220]]), wx[c[31228]]({
        'title': c[6364],
        'content': c[31257]
    }));
}, window[c[31207]] = '', wx[c[31258]]({
    'success'(_e2gwu) {
        window[c[31207]] = c[31259] + _e2gwu[c[31260]] + c[31261] + _e2gwu[c[31262]] + c[31263] + _e2gwu[c[4968]] + c[31264] + _e2gwu[c[998]] + c[31265] + _e2gwu[c[26761]] + c[31266] + _e2gwu[c[31220]] + c[31267] + _e2gwu[c[9687]], console[c[453]](window[c[31207]]), console[c[453]](c[31268] + _e2gwu[c[31269]] + c[31270] + _e2gwu[c[31271]] + c[31272] + _e2gwu[c[31273]] + c[31274] + _e2gwu[c[31275]] + c[31276] + _e2gwu[c[31277]] + c[31278] + _e2gwu[c[31279]] + c[31280] + (_e2gwu[c[31281]] ? _e2gwu[c[31281]][c[840]] + ',' + _e2gwu[c[31281]][c[1842]] + ',' + _e2gwu[c[31281]][c[1844]] + ',' + _e2gwu[c[31281]][c[1843]] : ''));
        var mab9l$ = _e2gwu[c[998]] ? _e2gwu[c[998]][c[368]]() : '',
            oc0b$ = _e2gwu[c[31262]] ? _e2gwu[c[31262]][c[368]]()[c[463]]('\x20', '') : '';
        window[c[31204]][c[1626]] = mab9l$[c[401]](c[31282]) != -0x1, window[c[31204]][c[11805]] = mab9l$[c[401]](c[31177]) != -0x1, window[c[31204]][c[31283]] = mab9l$[c[401]](c[31282]) != -0x1 || mab9l$[c[401]](c[31177]) != -0x1, window[c[31204]][c[26484]] = mab9l$[c[401]](c[31284]) != -0x1 || mab9l$[c[401]](c[31285]) != -0x1, window[c[31204]][c[31286]] = _e2gwu[c[26761]] ? _e2gwu[c[26761]][c[368]]() : '', window[c[31204]][c[31287]] = ![], window[c[31204]][c[31288]] = 0x2;
        if (mab9l$[c[401]](c[31177]) != -0x1) {
            if (_e2gwu[c[9687]] >= 0x18) window[c[31204]][c[31288]] = 0x3;else window[c[31204]][c[31288]] = 0x2;
        } else {
            if (mab9l$[c[401]](c[31282]) != -0x1) {
                if (_e2gwu[c[9687]] && _e2gwu[c[9687]] >= 0x14) window[c[31204]][c[31288]] = 0x3;else {
                    if (oc0b$[c[401]](c[31289]) != -0x1 || oc0b$[c[401]](c[31290]) != -0x1 || oc0b$[c[401]](c[31291]) != -0x1 || oc0b$[c[401]](c[31292]) != -0x1 || oc0b$[c[401]](c[31293]) != -0x1) window[c[31204]][c[31288]] = 0x2;else window[c[31204]][c[31288]] = 0x3;
                }
            } else window[c[31204]][c[31288]] = 0x2;
        }
        console[c[453]](c[31294] + window[c[31204]][c[31287]] + c[31295] + window[c[31204]][c[31288]]);
    }
}), wx[c[31296]]({
    'success': function (kdt8) {
        console[c[453]](c[31297] + kdt8[c[4875]] + c[31298] + kdt8[c[31299]]);
    }
}), wx[c[12362]]({
    'success': function (woue_4) {
        console[c[453]](c[31300] + woue_4[c[13866]]);
    }
}), wx[c[31301]]({ 'keepScreenOn': !![] }), wx[c[12364]](function (y0o4e) {
    console[c[453]](c[31300] + y0o4e[c[13866]] + c[31302] + y0o4e[c[31303]]);
}), wx[c[11296]](function (k6qzd8) {
    window[c[31304]] = k6qzd8, window[c[31305]] && window[c[31304]] && (console[c[608]](c[31306] + window[c[31304]][c[1329]]), window[c[31305]](window[c[31304]]), window[c[31304]] = null);
}), window[c[31307]] = 0x0, window[c[31308]] = 0x0, window[c[31309]] = null, wx[c[31310]](function () {
    window[c[31308]]++;
    var ueg4w_ = Date[c[613]]();
    (window[c[31307]] == 0x0 || ueg4w_ - window[c[31307]] > 0x1d4c0) && (console[c[510]](c[31311]), wx[c[12542]]());
    if (window[c[31308]] >= 0x2) {
        window[c[31308]] = 0x0, console[c[496]](c[31312]), wx[c[31313]]('0', 0x1);
        if (window[c[31204]] && window[c[31204]][c[1626]]) window[c[31255]](c[31314], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});