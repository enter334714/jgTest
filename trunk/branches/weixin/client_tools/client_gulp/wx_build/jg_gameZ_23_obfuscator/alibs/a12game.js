var c = wx.$a;
console[c[611]](c[35049]), window[c[35050]], wx[c[35051]](function (u12e) {
    if (u12e) {
        if (u12e[c[338]]) {
            var ycb$0o = window[c[1082]][c[35052]][c[466]](new RegExp(/\./, 'g'), '_'),
                nvxhs = u12e[c[338]],
                eu_g2 = nvxhs[c[345]](/(a2a3a1\/a12game.js:)[0-9]{1,60}(:)/g);
            if (eu_g2) for (var f1sxj2 = 0x0; f1sxj2 < eu_g2[c[322]]; f1sxj2++) {
                if (eu_g2[f1sxj2] && eu_g2[f1sxj2][c[322]] > 0x0) {
                    var qt875r = parseInt(eu_g2[f1sxj2][c[466]](c[35053], '')[c[466]](':', ''));
                    nvxhs = nvxhs[c[466]](eu_g2[f1sxj2], eu_g2[f1sxj2][c[466]](':' + qt875r + ':', ':' + (qt875r - 0x2) + ':'));
                }
            }
            nvxhs = nvxhs[c[466]](new RegExp(c[35054], 'g'), c[35055] + ycb$0o + c[28095]), nvxhs = nvxhs[c[466]](new RegExp(c[35056], 'g'), c[35055] + ycb$0o + c[28095]), u12e[c[338]] = nvxhs;
        }
        var nvjhxs = {
            'id': window[c[5021]][c[35057]],
            'role': window[c[5021]][c[5150]],
            'level': window[c[5021]][c[35058]],
            'user': window[c[5021]][c[27986]],
            'version': window[c[5021]][c[633]],
            'cdn': window[c[5021]][c[5018]],
            'pkgName': window[c[5021]][c[27988]],
            'gamever': window[c[1082]][c[35052]],
            'serverid': window[c[5021]][c[27982]] ? window[c[5021]][c[27982]][c[12381]] : 0x0,
            'systemInfo': window[c[35059]],
            'error': c[35060],
            'stack': u12e ? u12e[c[338]] : ''
        },
            g4ue = JSON[c[5004]](nvjhxs);
        console[c[499]](c[35061] + g4ue), (!window[c[35050]] || window[c[35050]] != nvjhxs[c[499]]) && (window[c[35050]] = nvjhxs[c[499]], window[c[35062]](nvjhxs));
    }
});
import 'a1md5min.js';
import 'ea1zlibs.js';
window[c[35063]] = require(c[35064]);
import 'a1index.js';
import 'a1ibsmin.js';
import 'a1wxmini.js';
import 'a1initmin.js';
console[c[611]](c[35065]), console[c[611]](c[35066]), jM1BE({ 'title': c[35067] });
var gzh6dkv = { 'j6ME1B': !![] };
new window[c[35068]](gzh6dkv), window[c[35068]][c[679]][c[35069]]();
if (window[c[35070]]) clearInterval(window[c[35070]]);
window[c[35070]] = null, window[c[35071]] = function ($clby, ba9$l) {
    if (!$clby || !ba9$l) return 0x0;
    $clby = $clby[c[444]]('.'), ba9$l = ba9$l[c[444]]('.');
    const sn1fx = Math[c[491]]($clby[c[322]], ba9$l[c[322]]);
    while ($clby[c[322]] < sn1fx) {
        $clby[c[344]]('0');
    }
    while (ba9$l[c[322]] < sn1fx) {
        ba9$l[c[344]]('0');
    }
    for (var $cbym = 0x0; $cbym < sn1fx; $cbym++) {
        const byo0 = parseInt($clby[$cbym]),
              mcabl$ = parseInt(ba9$l[$cbym]);
        if (byo0 > mcabl$) return 0x1;else {
            if (byo0 < mcabl$) return -0x1;
        }
    }
    return 0x0;
}, window[c[35072]] = wx[c[35073]]()[c[35072]], console[c[456]](c[35074] + window[c[35072]]);
var geu2wg1 = wx[c[35075]]();
geu2wg1[c[35076]](function (xu) {
    console[c[456]](c[35077] + xu[c[35078]]);
}), geu2wg1[c[35079]](function () {
    wx[c[35080]]({
        'title': c[35081],
        'content': c[35082],
        'showCancel': ![],
        'success': function (zhnj) {
            geu2wg1[c[35083]]();
        }
    });
}), geu2wg1[c[35084]](function () {
    console[c[456]](c[35085]);
}), window[c[35086]] = function () {
    console[c[456]](c[35087]);
    var gew2_ = wx[c[35088]]({
        'name': c[35089],
        'success': function (w4_0e) {
            console[c[456]](c[35090]), console[c[456]](w4_0e), w4_0e && w4_0e[c[28195]] == c[35091] ? (window[c[35092]] = !![], window[c[35093]](), window[c[35094]]()) : setTimeout(function () {
                window[c[35086]]();
            }, 0x1f4);
        },
        'fail': function (s2f1) {
            console[c[456]](c[35095]), console[c[456]](s2f1), setTimeout(function () {
                window[c[35086]]();
            }, 0x1f4);
        }
    });
    gew2_ && gew2_[c[34773]](ug_4w => {});
}, window[c[35096]] = function () {
    console[c[456]](c[35097]);
    var yoc40 = wx[c[35088]]({
        'name': c[35098],
        'success': function (_u4g) {
            console[c[456]](c[35099]), console[c[456]](_u4g), _u4g && _u4g[c[28195]] == c[35091] ? (window[c[35100]] = !![], window[c[35093]](), window[c[35094]]()) : setTimeout(function () {
                window[c[35096]]();
            }, 0x1f4);
        },
        'fail': function (c$ab) {
            console[c[456]](c[35101]), console[c[456]](c$ab), setTimeout(function () {
                window[c[35096]]();
            }, 0x1f4);
        }
    });
    yoc40 && yoc40[c[34773]](kv6zd => {});
}, window[c[35102]] = function () {
    window[c[35071]](window[c[35072]], c[35103]) >= 0x0 ? (console[c[456]](c[35104] + window[c[35072]] + c[35105]), window[c[35106]](), window[c[35086]](), window[c[35096]]()) : (window[c[35107]](c[35108], window[c[35072]]), wx[c[35080]]({
        'title': c[6599],
        'content': c[35109]
    }));
}, window[c[35059]] = '', wx[c[35110]]({
    'success'(njhvk) {
        window[c[35059]] = c[35111] + njhvk[c[35112]] + c[35113] + njhvk[c[35114]] + c[35115] + njhvk[c[5848]] + c[35116] + njhvk[c[1004]] + c[35117] + njhvk[c[27940]] + c[35118] + njhvk[c[35072]] + c[35119] + njhvk[c[10075]], console[c[456]](window[c[35059]]), console[c[456]](c[35120] + njhvk[c[31545]] + c[35121] + njhvk[c[35122]] + c[35123] + njhvk[c[35124]] + c[35125] + njhvk[c[35126]] + c[35127] + njhvk[c[35128]] + c[35129] + njhvk[c[35130]] + c[35131] + (njhvk[c[35132]] ? njhvk[c[35132]][c[846]] + ',' + njhvk[c[35132]][c[1911]] + ',' + njhvk[c[35132]][c[1913]] + ',' + njhvk[c[35132]][c[1912]] : ''));
        var jhnvkz = njhvk[c[1004]] ? njhvk[c[1004]][c[371]]() : '',
            obc4y0 = njhvk[c[35114]] ? njhvk[c[35114]][c[371]]()[c[466]]('\x20', '') : '';
        window[c[5021]][c[1646]] = jhnvkz[c[404]](c[35133]) != -0x1, window[c[5021]][c[12209]] = jhnvkz[c[404]](c[35030]) != -0x1, window[c[5021]][c[35134]] = jhnvkz[c[404]](c[35133]) != -0x1 || jhnvkz[c[404]](c[35030]) != -0x1, window[c[5021]][c[27633]] = jhnvkz[c[404]](c[35135]) != -0x1 || jhnvkz[c[404]](c[35136]) != -0x1, window[c[5021]][c[35137]] = njhvk[c[27940]] ? njhvk[c[27940]][c[371]]() : '', window[c[5021]][c[35138]] = ![], window[c[5021]][c[35139]] = 0x2;
        if (jhnvkz[c[404]](c[35030]) != -0x1) {
            if (njhvk[c[10075]] >= 0x18) window[c[5021]][c[35139]] = 0x3;else window[c[5021]][c[35139]] = 0x2;
        } else {
            if (jhnvkz[c[404]](c[35133]) != -0x1) {
                if (njhvk[c[10075]] && njhvk[c[10075]] >= 0x14) window[c[5021]][c[35139]] = 0x3;else {
                    if (obc4y0[c[404]](c[35140]) != -0x1 || obc4y0[c[404]](c[35141]) != -0x1 || obc4y0[c[404]](c[35142]) != -0x1 || obc4y0[c[404]](c[35143]) != -0x1 || obc4y0[c[404]](c[35144]) != -0x1) window[c[5021]][c[35139]] = 0x2;else window[c[5021]][c[35139]] = 0x3;
                }
            } else window[c[5021]][c[35139]] = 0x2;
        }
        console[c[456]](c[35145] + window[c[5021]][c[35138]] + c[35146] + window[c[5021]][c[35139]]);
    }
}), wx[c[35147]]({
    'success': function (gw1ue) {
        console[c[456]](c[35148] + gw1ue[c[5126]] + c[35149] + gw1ue[c[35150]]);
    }
}), wx[c[12762]]({
    'success': function (bl$am) {
        console[c[456]](c[35151] + bl$am[c[14583]]);
    }
}), wx[c[35152]]({ 'keepScreenOn': !![] }), wx[c[12764]](function ($mbcly) {
    console[c[456]](c[35151] + $mbcly[c[14583]] + c[35153] + $mbcly[c[35154]]);
}), wx[c[11701]](function (cmb$ly) {
    window[c[35155]] = cmb$ly, window[c[35156]] && window[c[35155]] && (console[c[611]](c[35157] + window[c[35155]][c[1349]]), window[c[35156]](window[c[35155]]), window[c[35155]] = null);
}), window[c[35158]] = 0x0, window[c[35159]] = 0x0, window[c[35160]] = null, wx[c[35161]](function () {
    window[c[35159]]++;
    var qk68 = Date[c[616]]();
    (window[c[35158]] == 0x0 || qk68 - window[c[35158]] > 0x1d4c0) && (console[c[513]](c[35162]), wx[c[13026]]());
    if (window[c[35159]] >= 0x2) {
        window[c[35159]] = 0x0, console[c[499]](c[35163]), wx[c[35164]]('0', 0x1);
        if (window[c[5021]] && window[c[5021]][c[1646]]) window[c[35107]](c[35165], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});