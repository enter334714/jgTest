var b = wx.$e;
console[b[80]](b[31878]), window[b[31879]], wx[b[31880]](function (xjg$it) {
    if (xjg$it) {
        if (xjg$it[b[4259]]) {
            var squn3 = window[b[591]][b[31881]][b[4497]](new RegExp(/\./, 'g'), '_'),
                q3jsn = xjg$it[b[4259]],
                u9s3 = q3jsn[b[12220]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
            if (u9s3) for (var bw5d8 = 0x0; bw5d8 < u9s3[b[14]]; bw5d8++) {
                if (u9s3[bw5d8] && u9s3[bw5d8][b[14]] > 0x0) {
                    var w58d0b = parseInt(u9s3[bw5d8][b[4497]](b[31882], '')[b[4497]](':', ''));
                    q3jsn = q3jsn[b[4497]](u9s3[bw5d8], u9s3[bw5d8][b[4497]](':' + w58d0b + ':', ':' + (w58d0b - 0x2) + ':'));
                }
            }
            q3jsn = q3jsn[b[4497]](new RegExp(b[31883], 'g'), b[31884] + squn3 + b[26579]), q3jsn = q3jsn[b[4497]](new RegExp(b[31885], 'g'), b[31884] + squn3 + b[26579]), xjg$it[b[4259]] = q3jsn;
        }
        var rglxh = {
            'id': window[b[31886]][b[31887]],
            'role': window[b[31886]][b[4381]],
            'level': window[b[31886]][b[31888]],
            'user': window[b[31886]][b[26477]],
            'version': window[b[31886]][b[107]],
            'cdn': window[b[31886]][b[4257]],
            'pkgName': window[b[31886]][b[26479]],
            'gamever': window[b[591]][b[31881]],
            'serverid': window[b[31886]][b[26473]] ? window[b[31886]][b[26473]][b[11489]] : 0x0,
            'systemInfo': window[b[31889]],
            'error': b[31890],
            'stack': xjg$it ? xjg$it[b[4259]] : ''
        },
            zlfhyr = JSON[b[4243]](rglxh);
        console[b[141]](b[31891] + zlfhyr), (!window[b[31879]] || window[b[31879]] != rglxh[b[141]]) && (window[b[31879]] = rglxh[b[141]], window[b[31892]](rglxh));
    }
});
import 'eeemd5min.js';
import 'eeezlibs.js';
window[b[31893]] = require(b[31894]);
import 'eeeindex.js';
import 'eeelibsmin.js';
import 'eeewxmini.js';
import 'eeeinitmin.js';
console[b[80]](b[31895]), console[b[80]](b[31896]), e11UG0({ 'title': b[31897] });
var elrhgz = { 'e1I10UG': !![] };
new window[b[31898]](elrhgz), window[b[31898]][b[164]][b[31899]]();
if (window[b[31900]]) clearInterval(window[b[31900]]);
window[b[31900]] = null, window[b[31901]] = function (w08d25, hlfyrz) {
    if (!w08d25 || !hlfyrz) return 0x0;
    w08d25 = w08d25[b[16]]('.'), hlfyrz = hlfyrz[b[16]]('.');
    const yr4fzv = Math[b[924]](w08d25[b[14]], hlfyrz[b[14]]);
    while (w08d25[b[14]] < yr4fzv) {
        w08d25[b[31]]('0');
    }
    while (hlfyrz[b[14]] < yr4fzv) {
        hlfyrz[b[31]]('0');
    }
    for (var _y74vf = 0x0; _y74vf < yr4fzv; _y74vf++) {
        const $glxh = parseInt(w08d25[_y74vf]),
              v74af_ = parseInt(hlfyrz[_y74vf]);
        if ($glxh > v74af_) return 0x1;else {
            if ($glxh < v74af_) return -0x1;
        }
    }
    return 0x0;
}, window[b[31902]] = wx[b[31903]]()[b[31902]], console[b[515]](b[31904] + window[b[31902]]);
var eemoapc = wx[b[31905]]();
eemoapc[b[31906]](function (unq39) {
    console[b[515]](b[31907] + unq39[b[31908]]);
}), eemoapc[b[31909]](function () {
    wx[b[31910]]({
        'title': b[31911],
        'content': b[31912],
        'showCancel': ![],
        'success': function (lyrth) {
            eemoapc[b[31913]]();
        }
    });
}), eemoapc[b[31914]](function () {
    console[b[515]](b[31915]);
}), window[b[31916]] = function () {
    console[b[515]](b[31917]);
    var rzfhv = wx[b[31918]]({
        'name': b[31919],
        'success': function (x$glth) {
            console[b[515]](b[31920]), console[b[515]](x$glth), x$glth && x$glth[b[26677]] == b[31921] ? (window[b[31922]] = !![], window[b[31923]](), window[b[31924]]()) : setTimeout(function () {
                window[b[31916]]();
            }, 0x1f4);
        },
        'fail': function (b586) {
            console[b[515]](b[31925]), console[b[515]](b586), setTimeout(function () {
                window[b[31916]]();
            }, 0x1f4);
        }
    });
    rzfhv && rzfhv[b[31180]](campoe => {});
}, window[b[31926]] = function () {
    console[b[515]](b[31927]);
    var moaecp = wx[b[31918]]({
        'name': b[31928],
        'success': function (k0d9) {
            console[b[515]](b[31929]), console[b[515]](k0d9), k0d9 && k0d9[b[26677]] == b[31921] ? (window[b[31930]] = !![], window[b[31923]](), window[b[31924]]()) : setTimeout(function () {
                window[b[31926]]();
            }, 0x1f4);
        },
        'fail': function (hrfzy) {
            console[b[515]](b[31931]), console[b[515]](hrfzy), setTimeout(function () {
                window[b[31926]]();
            }, 0x1f4);
        }
    });
    moaecp && moaecp[b[31180]](yzhvf => {});
}, window[b[31932]] = function () {
    window[b[31901]](window[b[31902]], b[31933]) >= 0x0 ? (console[b[515]](b[31934] + window[b[31902]] + b[31935]), window[b[31936]](), window[b[31916]](), window[b[31926]]()) : (window[b[31937]](b[31938], window[b[31902]]), wx[b[31910]]({
        'title': b[5794],
        'content': b[31939]
    }));
}, window[b[31889]] = '', wx[b[31940]]({
    'success'(ecopma) {
        window[b[31889]] = b[31941] + ecopma[b[31942]] + b[31943] + ecopma[b[31944]] + b[31945] + ecopma[b[5070]] + b[31946] + ecopma[b[508]] + b[31947] + ecopma[b[26440]] + b[31948] + ecopma[b[31902]] + b[31949] + ecopma[b[9179]], console[b[515]](window[b[31889]]), console[b[515]](b[31950] + ecopma[b[31951]] + b[31952] + ecopma[b[31953]] + b[31954] + ecopma[b[31955]] + b[31956] + ecopma[b[31957]] + b[31958] + ecopma[b[31959]] + b[31960] + ecopma[b[31961]] + b[31962] + (ecopma[b[31963]] ? ecopma[b[31963]][b[345]] + ',' + ecopma[b[31963]][b[1368]] + ',' + ecopma[b[31963]][b[1370]] + ',' + ecopma[b[31963]][b[1369]] : ''));
        var htxl$ = ecopma[b[508]] ? ecopma[b[508]][b[12530]]() : '',
            n9kqsu = ecopma[b[31944]] ? ecopma[b[31944]][b[12530]]()[b[4497]]('\x20', '') : '';
        window[b[31886]][b[1149]] = htxl$[b[122]](b[31964]) != -0x1, window[b[31886]][b[11313]] = htxl$[b[122]](b[31426]) != -0x1, window[b[31886]][b[31965]] = htxl$[b[122]](b[31964]) != -0x1 || htxl$[b[122]](b[31426]) != -0x1, window[b[31886]][b[26159]] = htxl$[b[122]](b[31966]) != -0x1 || htxl$[b[122]](b[31967]) != -0x1, window[b[31886]][b[31968]] = ecopma[b[26440]] ? ecopma[b[26440]][b[12530]]() : '', window[b[31886]][b[31969]] = ![], window[b[31886]][b[31970]] = 0x2;
        if (htxl$[b[122]](b[31426]) != -0x1) {
            if (ecopma[b[9179]] >= 0x18) window[b[31886]][b[31970]] = 0x3;else window[b[31886]][b[31970]] = 0x2;
        } else {
            if (htxl$[b[122]](b[31964]) != -0x1) {
                if (ecopma[b[9179]] && ecopma[b[9179]] >= 0x14) window[b[31886]][b[31970]] = 0x3;else {
                    if (n9kqsu[b[122]](b[31971]) != -0x1 || n9kqsu[b[122]](b[31972]) != -0x1 || n9kqsu[b[122]](b[31973]) != -0x1 || n9kqsu[b[122]](b[31974]) != -0x1 || n9kqsu[b[122]](b[31975]) != -0x1) window[b[31886]][b[31970]] = 0x2;else window[b[31886]][b[31970]] = 0x3;
                }
            } else window[b[31886]][b[31970]] = 0x2;
        }
        console[b[515]](b[31976] + window[b[31886]][b[31969]] + b[31977] + window[b[31886]][b[31970]]);
    }
}), wx[b[31978]]({
    'success': function (w8d521) {
        console[b[515]](b[31979] + w8d521[b[4357]] + b[31980] + w8d521[b[31981]]);
    }
}), wx[b[11870]]({
    'success': function (l$xit) {
        console[b[515]](b[31982] + l$xit[b[13441]]);
    }
}), wx[b[31983]]({ 'keepScreenOn': !![] }), wx[b[11872]](function (mopec) {
    console[b[515]](b[31982] + mopec[b[13441]] + b[31984] + mopec[b[31985]]);
}), wx[b[10804]](function (wd805b) {
    window[b[31986]] = wd805b, window[b[31987]] && window[b[31986]] && (console[b[80]](b[31988] + window[b[31986]][b[847]]), window[b[31987]](window[b[31986]]), window[b[31986]] = null);
}), window[b[31989]] = 0x0, window[b[31990]] = 0x0, window[b[31991]] = null, wx[b[31992]](function () {
    window[b[31990]]++;
    var fvhyr = Date[b[85]]();
    (window[b[31989]] == 0x0 || fvhyr - window[b[31989]] > 0x1d4c0) && (console[b[100]](b[31993]), wx[b[12057]]());
    if (window[b[31990]] >= 0x2) {
        window[b[31990]] = 0x0, console[b[141]](b[31994]), wx[b[31995]]('0', 0x1);
        if (window[b[31886]] && window[b[31886]][b[1149]]) window[b[31937]](b[31996], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});