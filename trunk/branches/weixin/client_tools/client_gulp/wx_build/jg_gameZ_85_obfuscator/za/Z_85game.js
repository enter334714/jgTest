var q1 = wx.f$;
console[q1[709]](q1[32441]), window[q1[32442]], wx[q1[32443]](function (on$7s) {
    if (on$7s) {
        if (on$7s[q1[443]]) {
            var mtwzbl = window[q1[1176]][q1[31878]][q1[568]](new RegExp(/\./, 'g'), '_'),
                ja_u2i = on$7s[q1[443]],
                a3_uz = ja_u2i[q1[450]](/(romt\/Z_85game.js:)[0-9]{1,60}(:)/g);
            if (a3_uz) for (var h$orfx = 0x0; h$orfx < a3_uz[q1[427]]; h$orfx++) {
                if (a3_uz[h$orfx] && a3_uz[h$orfx][q1[427]] > 0x0) {
                    var iyve = parseInt(a3_uz[h$orfx][q1[568]](q1[32444], '')[q1[568]](':', ''));
                    ja_u2i = ja_u2i[q1[568]](a3_uz[h$orfx], a3_uz[h$orfx][q1[568]](':' + iyve + ':', ':' + (iyve - 0x2) + ':'));
                }
            }
            ja_u2i = ja_u2i[q1[568]](new RegExp(q1[32445], 'g'), q1[32446] + mtwzbl + q1[27116]), ja_u2i = ja_u2i[q1[568]](new RegExp(q1[32447], 'g'), q1[32446] + mtwzbl + q1[27116]), on$7s[q1[443]] = ja_u2i;
        }
        var k6q0 = {
            'id': window[q1[31886]][q1[31951]],
            'role': window[q1[31886]][q1[4949]],
            'level': window[q1[31886]][q1[31952]],
            'user': window[q1[31886]][q1[27016]],
            'version': window[q1[31886]][q1[731]],
            'cdn': window[q1[31886]][q1[4828]],
            'pkgName': window[q1[31886]][q1[27018]],
            'gamever': window[q1[1176]][q1[31878]],
            'serverid': window[q1[31886]][q1[27012]] ? window[q1[31886]][q1[27012]][q1[76]] : 0x0,
            'systemInfo': window[q1[31953]],
            'error': q1[32448],
            'stack': on$7s ? on$7s[q1[443]] : ''
        },
            y9ive = JSON[q1[4814]](k6q0);
        console[q1[601]](q1[32449] + y9ive), (!window[q1[32442]] || window[q1[32442]] != k6q0[q1[601]]) && (window[q1[32442]] = k6q0[q1[601]], window[q1[31904]](k6q0));
    }
});
import 'rm.js';
import 'pv.js';
window[q1[32450]] = require(q1[32451]);
import 'sk.js';
import 'q5v8a.js';
import 'h3kr.js';
import 'tb.js';
console[q1[709]](q1[32452]), console[q1[709]](q1[32453]), _lIO61({ 'title': q1[32454] });
var _xchox7 = { '_lMI1O6': !![] };
new window[q1[31935]](_xchox7), window[q1[31935]][q1[777]][q1[32415]]();
if (window[q1[32455]]) clearInterval(window[q1[32455]]);
window[q1[32455]] = null, window[q1[31983]] = function ($onsc, pr0qf) {
    if (!$onsc || !pr0qf) return 0x0;
    $onsc = $onsc[q1[547]]('.'), pr0qf = pr0qf[q1[547]]('.');
    const btwmlz = Math[q1[593]]($onsc[q1[427]], pr0qf[q1[427]]);
    while ($onsc[q1[427]] < btwmlz) {
        $onsc[q1[449]]('0');
    }
    while (pr0qf[q1[427]] < btwmlz) {
        pr0qf[q1[449]]('0');
    }
    for (var oscn$7 = 0x0; oscn$7 < btwmlz; oscn$7++) {
        const a_j2 = parseInt($onsc[oscn$7]),
              cn7xo = parseInt(pr0qf[oscn$7]);
        if (a_j2 > cn7xo) return 0x1;else {
            if (a_j2 < cn7xo) return -0x1;
        }
    }
    return 0x0;
}, window[q1[32104]] = wx[q1[32456]]()[q1[32104]], console[q1[558]](q1[32457] + window[q1[32104]]);
var _xge9 = wx[q1[32458]]();
_xge9[q1[32459]](function (s8dc) {
    console[q1[558]](q1[32460] + s8dc[q1[32461]]);
}), _xge9[q1[32462]](function () {
    wx[q1[31921]]({
        'title': q1[32463],
        'content': q1[32464],
        'showCancel': ![],
        'success': function (sco$7n) {
            _xge9[q1[32465]]();
        }
    });
}), _xge9[q1[32466]](function () {
    console[q1[558]](q1[32467]);
}), window[q1[32468]] = function () {
    console[q1[558]](q1[32469]);
    var _zua43 = wx[q1[32470]]({
        'name': q1[32471],
        'success': function (rpxoh) {
            console[q1[558]](q1[32472]), console[q1[558]](rpxoh), rpxoh && rpxoh[q1[27212]] == q1[32473] ? (window[q1[31912]] = !![], window[q1[32055]](), window[q1[32056]]()) : setTimeout(function () {
                window[q1[32468]]();
            }, 0x1f4);
        },
        'fail': function (tbl) {
            console[q1[558]](q1[32474]), console[q1[558]](tbl), setTimeout(function () {
                window[q1[32468]]();
            }, 0x1f4);
        }
    });
    _zua43 && _zua43[q1[31707]](xrfoph => {});
}, window[q1[32475]] = function () {
    console[q1[558]](q1[32476]);
    var w6mlbt = wx[q1[32470]]({
        'name': q1[32477],
        'success': function (w6mkb) {
            console[q1[558]](q1[32478]), console[q1[558]](w6mkb), w6mkb && w6mkb[q1[27212]] == q1[32473] ? (window[q1[31913]] = !![], window[q1[32055]](), window[q1[32056]]()) : setTimeout(function () {
                window[q1[32475]]();
            }, 0x1f4);
        },
        'fail': function (rohf$) {
            console[q1[558]](q1[32479]), console[q1[558]](rohf$), setTimeout(function () {
                window[q1[32475]]();
            }, 0x1f4);
        }
    });
    w6mlbt && w6mlbt[q1[31707]](egjvi => {});
}, window[q1[32480]] = function () {
    window[q1[31983]](window[q1[32104]], q1[32481]) >= 0x0 ? (console[q1[558]](q1[32482] + window[q1[32104]] + q1[32483]), window[q1[31928]](), window[q1[32468]](), window[q1[32475]]()) : (window[q1[31961]](q1[32484], window[q1[32104]]), wx[q1[31921]]({
        'title': q1[6352],
        'content': q1[32485]
    }));
}, window[q1[31953]] = '', wx[q1[32486]]({
    'success'(tzblmw) {
        window[q1[31953]] = q1[32487] + tzblmw[q1[32488]] + q1[32489] + tzblmw[q1[32490]] + q1[32491] + tzblmw[q1[5637]] + q1[32492] + tzblmw[q1[1098]] + q1[32493] + tzblmw[q1[26979]] + q1[32494] + tzblmw[q1[32104]] + q1[32495] + tzblmw[q1[9733]], console[q1[558]](window[q1[31953]]), console[q1[558]](q1[32496] + tzblmw[q1[32497]] + q1[32498] + tzblmw[q1[32499]] + q1[32500] + tzblmw[q1[32501]] + q1[32502] + tzblmw[q1[32503]] + q1[32504] + tzblmw[q1[32505]] + q1[32506] + tzblmw[q1[32507]] + q1[32508] + (tzblmw[q1[32509]] ? tzblmw[q1[32509]][q1[941]] + ',' + tzblmw[q1[32509]][q1[1943]] + ',' + tzblmw[q1[32509]][q1[1945]] + ',' + tzblmw[q1[32509]][q1[1944]] : ''));
        var pq051r = tzblmw[q1[1098]] ? tzblmw[q1[1098]][q1[475]]() : '',
            zt = tzblmw[q1[32490]] ? tzblmw[q1[32490]][q1[475]]()[q1[568]]('\x20', '') : '';
        window[q1[31886]][q1[1726]] = pq051r[q1[507]](q1[32510]) != -0x1, window[q1[31886]][q1[11866]] = pq051r[q1[507]](q1[86]) != -0x1, window[q1[31886]][q1[32198]] = pq051r[q1[507]](q1[32510]) != -0x1 || pq051r[q1[507]](q1[86]) != -0x1, window[q1[31886]][q1[26699]] = pq051r[q1[507]](q1[32511]) != -0x1 || pq051r[q1[507]](q1[31890]) != -0x1, window[q1[31886]][q1[31963]] = tzblmw[q1[26979]] ? tzblmw[q1[26979]][q1[475]]() : '', window[q1[31886]][q1[32194]] = ![], window[q1[31886]][q1[32195]] = 0x2;
        if (pq051r[q1[507]](q1[86]) != -0x1) {
            if (tzblmw[q1[9733]] >= 0x18) window[q1[31886]][q1[32195]] = 0x3;else window[q1[31886]][q1[32195]] = 0x2;
        } else {
            if (pq051r[q1[507]](q1[32510]) != -0x1) {
                if (tzblmw[q1[9733]] && tzblmw[q1[9733]] >= 0x14) window[q1[31886]][q1[32195]] = 0x3;else {
                    if (zt[q1[507]](q1[32512]) != -0x1 || zt[q1[507]](q1[32513]) != -0x1 || zt[q1[507]](q1[32514]) != -0x1 || zt[q1[507]](q1[32515]) != -0x1 || zt[q1[507]](q1[32516]) != -0x1) window[q1[31886]][q1[32195]] = 0x2;else window[q1[31886]][q1[32195]] = 0x3;
                }
            } else window[q1[31886]][q1[32195]] = 0x2;
        }
        console[q1[558]](q1[32517] + window[q1[31886]][q1[32194]] + q1[32518] + window[q1[31886]][q1[32195]]);
    }
}), wx[q1[32123]]({
    'success': function (fphxr) {
        console[q1[558]](q1[32519] + fphxr[q1[4926]] + q1[32520] + fphxr[q1[32125]]);
    }
}), wx[q1[12422]]({
    'success': function (xofch) {
        console[q1[558]](q1[32521] + xofch[q1[13987]]);
    }
}), wx[q1[32522]]({ 'keepScreenOn': !![] }), wx[q1[12424]](function (lm4t3z) {
    console[q1[558]](q1[32521] + lm4t3z[q1[13987]] + q1[32523] + lm4t3z[q1[32524]]);
}), wx[q1[11357]](function (wtml6) {
    window[q1[32098]] = wtml6, window[q1[32097]] && window[q1[32098]] && (console[q1[709]](q1[32099] + window[q1[32098]][q1[1429]]), window[q1[32097]](window[q1[32098]]), window[q1[32098]] = null);
}), window[q1[32525]] = 0x0, window[q1[32526]] = 0x0, window[q1[32527]] = null, wx[q1[32528]](function () {
    window[q1[32526]]++;
    var ua3_42 = Date[q1[714]]();
    (window[q1[32525]] == 0x0 || ua3_42 - window[q1[32525]] > 0x1d4c0) && (console[q1[614]](q1[32529]), wx[q1[12609]]());
    if (window[q1[32526]] >= 0x2) {
        window[q1[32526]] = 0x0, console[q1[601]](q1[32530]), wx[q1[32531]]('0', 0x1);
        if (window[q1[31886]] && window[q1[31886]][q1[1726]]) window[q1[31961]](q1[32532], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});