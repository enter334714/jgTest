var b = wx.$e;
console[b[603]](b[31382]), window[b[31383]], wx[b[31384]](function (lt$ix) {
    if (lt$ix) {
        if (lt$ix[b[331]]) {
            var tyhzrl = window[b[1071]][b[31385]][b[459]](new RegExp(/\./, 'g'), '_'),
                s096k = lt$ix[b[331]],
                rzyhtl = s096k[b[338]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
            if (rzyhtl) for (var n9suk = 0x0; n9suk < rzyhtl[b[315]]; n9suk++) {
                if (rzyhtl[n9suk] && rzyhtl[n9suk][b[315]] > 0x0) {
                    var xh$ = parseInt(rzyhtl[n9suk][b[459]](b[31386], '')[b[459]](':', ''));
                    s096k = s096k[b[459]](rzyhtl[n9suk], rzyhtl[n9suk][b[459]](':' + xh$ + ':', ':' + (xh$ - 0x2) + ':'));
                }
            }
            s096k = s096k[b[459]](new RegExp(b[31387], 'g'), b[31388] + tyhzrl + b[27307]), s096k = s096k[b[459]](new RegExp(b[31389], 'g'), b[31388] + tyhzrl + b[27307]), lt$ix[b[331]] = s096k;
        }
        var usqn = {
            'id': window[b[31390]][b[31391]],
            'role': window[b[31390]][b[5536]],
            'level': window[b[31390]][b[31392]],
            'user': window[b[31390]][b[27208]],
            'version': window[b[31390]][b[625]],
            'cdn': window[b[31390]][b[5415]],
            'pkgName': window[b[31390]][b[27209]],
            'gamever': window[b[1071]][b[31385]],
            'serverid': window[b[31390]][b[27203]] ? window[b[31390]][b[27203]][b[12594]] : 0x0,
            'systemInfo': window[b[31393]],
            'error': b[31394],
            'stack': lt$ix ? lt$ix[b[331]] : ''
        },
            n3sjuq = JSON[b[5401]](usqn);
        console[b[492]](b[31395] + n3sjuq), (!window[b[31383]] || window[b[31383]] != usqn[b[492]]) && (window[b[31383]] = usqn[b[492]], window[b[31396]](usqn));
    }
});
import 'eeemd5min.js';
import 'eeezlibs.js';
window[b[31397]] = require(b[31398]);
import 'eeeindex.js';
import 'eeelibsmin.js';
import 'eeewxmini.js';
import 'eeeinitmin.js';
console[b[603]](b[31399]), console[b[603]](b[31400]), e11UG0({ 'title': b[31401] });
var eb58d0 = { 'e1I10UG': !![] };
new window[b[31402]](eb58d0), window[b[31402]][b[671]][b[31403]]();
if (window[b[31404]]) clearInterval(window[b[31404]]);
window[b[31404]] = null, window[b[31405]] = function (rgtzhl, ytzhrl) {
    if (!rgtzhl || !ytzhrl) return 0x0;
    rgtzhl = rgtzhl[b[437]]('.'), ytzhrl = ytzhrl[b[437]]('.');
    const unq9s = Math[b[484]](rgtzhl[b[315]], ytzhrl[b[315]]);
    while (rgtzhl[b[315]] < unq9s) {
        rgtzhl[b[337]]('0');
    }
    while (ytzhrl[b[315]] < unq9s) {
        ytzhrl[b[337]]('0');
    }
    for (var _4f7 = 0x0; _4f7 < unq9s; _4f7++) {
        const bkd90 = parseInt(rgtzhl[_4f7]),
              q$xi3 = parseInt(ytzhrl[_4f7]);
        if (bkd90 > q$xi3) return 0x1;else {
            if (bkd90 < q$xi3) return -0x1;
        }
    }
    return 0x0;
}, window[b[31406]] = wx[b[31407]]()[b[31406]], console[b[449]](b[31408] + window[b[31406]]);
var ein3 = wx[b[31409]]();
ein3[b[31410]](function (ji$xg) {
    console[b[449]](b[31411] + ji$xg[b[31412]]);
}), ein3[b[31413]](function () {
    wx[b[31414]]({
        'title': b[31415],
        'content': b[31416],
        'showCancel': ![],
        'success': function (ti$lg) {
            ein3[b[31417]]();
        }
    });
}), ein3[b[31418]](function () {
    console[b[449]](b[31419]);
}), window[b[31420]] = function () {
    console[b[449]](b[31421]);
    var igtx$ = wx[b[31422]]({
        'name': b[31423],
        'success': function (jn3i$) {
            console[b[449]](b[31424]), console[b[449]](jn3i$), jn3i$ && jn3i$[b[27401]] == b[31425] ? (window[b[31426]] = !![], window[b[31427]](), window[b[31428]]()) : setTimeout(function () {
                window[b[31420]]();
            }, 0x1f4);
        },
        'fail': function (w85bd) {
            console[b[449]](b[31429]), console[b[449]](w85bd), setTimeout(function () {
                window[b[31420]]();
            }, 0x1f4);
        }
    });
    igtx$ && igtx$[b[31149]](_cao => {});
}, window[b[31430]] = function () {
    console[b[449]](b[31431]);
    var j3x = wx[b[31422]]({
        'name': b[31432],
        'success': function (va7f_4) {
            console[b[449]](b[31433]), console[b[449]](va7f_4), va7f_4 && va7f_4[b[27401]] == b[31425] ? (window[b[31434]] = !![], window[b[31427]](), window[b[31428]]()) : setTimeout(function () {
                window[b[31430]]();
            }, 0x1f4);
        },
        'fail': function ($i) {
            console[b[449]](b[31435]), console[b[449]]($i), setTimeout(function () {
                window[b[31430]]();
            }, 0x1f4);
        }
    });
    j3x && j3x[b[31149]](flyhrz => {});
}, window[b[31436]] = function () {
    window[b[31405]](window[b[31406]], b[31437]) >= 0x0 ? (console[b[449]](b[31438] + window[b[31406]] + b[31439]), window[b[31440]](), window[b[31420]](), window[b[31430]]()) : (window[b[31441]](b[31442], window[b[31406]]), wx[b[31414]]({
        'title': b[7002],
        'content': b[31443]
    }));
}, window[b[31393]] = '', wx[b[31444]]({
    'success'(qusk9n) {
        window[b[31393]] = b[31445] + qusk9n[b[31446]] + b[31447] + qusk9n[b[31448]] + b[31449] + qusk9n[b[5606]] + b[31450] + qusk9n[b[993]] + b[31451] + qusk9n[b[27173]] + b[31452] + qusk9n[b[31406]] + b[31453] + qusk9n[b[10320]], console[b[449]](window[b[31393]]), console[b[449]](b[31454] + qusk9n[b[31455]] + b[31456] + qusk9n[b[31457]] + b[31458] + qusk9n[b[31459]] + b[31460] + qusk9n[b[31461]] + b[31462] + qusk9n[b[31463]] + b[31464] + qusk9n[b[31465]] + b[31466] + (qusk9n[b[31467]] ? qusk9n[b[31467]][b[835]] + ',' + qusk9n[b[31467]][b[1828]] + ',' + qusk9n[b[31467]][b[1830]] + ',' + qusk9n[b[31467]][b[1829]] : ''));
        var lzghrt = qusk9n[b[993]] ? qusk9n[b[993]][b[364]]() : '',
            qs = qusk9n[b[31448]] ? qusk9n[b[31448]][b[364]]()[b[459]]('\x20', '') : '';
        window[b[31390]][b[1618]] = lzghrt[b[397]](b[31468]) != -0x1, window[b[31390]][b[12418]] = lzghrt[b[397]](b[31372]) != -0x1, window[b[31390]][b[31469]] = lzghrt[b[397]](b[31468]) != -0x1 || lzghrt[b[397]](b[31372]) != -0x1, window[b[31390]][b[26900]] = lzghrt[b[397]](b[31470]) != -0x1 || lzghrt[b[397]](b[31471]) != -0x1, window[b[31390]][b[31472]] = qusk9n[b[27173]] ? qusk9n[b[27173]][b[364]]() : '', window[b[31390]][b[31473]] = ![], window[b[31390]][b[31474]] = 0x2;
        if (lzghrt[b[397]](b[31372]) != -0x1) {
            if (qusk9n[b[10320]] >= 0x18) window[b[31390]][b[31474]] = 0x3;else window[b[31390]][b[31474]] = 0x2;
        } else {
            if (lzghrt[b[397]](b[31468]) != -0x1) {
                if (qusk9n[b[10320]] && qusk9n[b[10320]] >= 0x14) window[b[31390]][b[31474]] = 0x3;else {
                    if (qs[b[397]](b[31475]) != -0x1 || qs[b[397]](b[31476]) != -0x1 || qs[b[397]](b[31477]) != -0x1 || qs[b[397]](b[31478]) != -0x1 || qs[b[397]](b[31479]) != -0x1) window[b[31390]][b[31474]] = 0x2;else window[b[31390]][b[31474]] = 0x3;
                }
            } else window[b[31390]][b[31474]] = 0x2;
        }
        console[b[449]](b[31480] + window[b[31390]][b[31473]] + b[31481] + window[b[31390]][b[31474]]);
    }
}), wx[b[31482]]({
    'success': function (y_7) {
        console[b[449]](b[31483] + y_7[b[5512]] + b[31484] + y_7[b[31485]]);
    }
}), wx[b[12976]]({
    'success': function (cma74_) {
        console[b[449]](b[31486] + cma74_[b[14413]]);
    }
}), wx[b[31487]]({ 'keepScreenOn': !![] }), wx[b[12978]](function (zrt) {
    console[b[449]](b[31486] + zrt[b[14413]] + b[31488] + zrt[b[31489]]);
}), wx[b[11921]](function (tjxgi) {
    window[b[31490]] = tjxgi, window[b[31491]] && window[b[31490]] && (console[b[603]](b[31492] + window[b[31490]][b[1321]]), window[b[31491]](window[b[31490]]), window[b[31490]] = null);
}), window[b[31493]] = 0x0, window[b[31494]] = 0x0, window[b[31495]] = null, wx[b[31496]](function () {
    window[b[31494]]++;
    var nsu3jq = Date[b[608]]();
    (window[b[31493]] == 0x0 || nsu3jq - window[b[31493]] > 0x1d4c0) && (console[b[506]](b[31497]), wx[b[13137]]());
    if (window[b[31494]] >= 0x2) {
        window[b[31494]] = 0x0, console[b[492]](b[31498]), wx[b[31499]]('0', 0x1);
        if (window[b[31390]] && window[b[31390]][b[1618]]) window[b[31441]](b[31500], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});