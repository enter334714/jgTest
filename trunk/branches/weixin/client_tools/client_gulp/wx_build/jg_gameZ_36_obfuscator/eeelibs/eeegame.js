var b = wx.$e;
console[b[611]](b[35055]), window[b[35056]], wx[b[35057]](function (ztyh) {
    if (ztyh) {
        if (ztyh[b[338]]) {
            var bd05w8 = window[b[1082]][b[35058]][b[466]](new RegExp(/\./, 'g'), '_'),
                zyfvh = ztyh[b[338]],
                zhrlgt = zyfvh[b[345]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
            if (zhrlgt) for (var cpoam = 0x0; cpoam < zhrlgt[b[322]]; cpoam++) {
                if (zhrlgt[cpoam] && zhrlgt[cpoam][b[322]] > 0x0) {
                    var yzhfr = parseInt(zhrlgt[cpoam][b[466]](b[35059], '')[b[466]](':', ''));
                    zyfvh = zyfvh[b[466]](zhrlgt[cpoam], zhrlgt[cpoam][b[466]](':' + yzhfr + ':', ':' + (yzhfr - 0x2) + ':'));
                }
            }
            zyfvh = zyfvh[b[466]](new RegExp(b[35060], 'g'), b[35061] + bd05w8 + b[28095]), zyfvh = zyfvh[b[466]](new RegExp(b[35062], 'g'), b[35061] + bd05w8 + b[28095]), ztyh[b[338]] = zyfvh;
        }
        var kqsn9 = {
            'id': window[b[5021]][b[35063]],
            'role': window[b[5021]][b[5150]],
            'level': window[b[5021]][b[35064]],
            'user': window[b[5021]][b[27986]],
            'version': window[b[5021]][b[633]],
            'cdn': window[b[5021]][b[5018]],
            'pkgName': window[b[5021]][b[27988]],
            'gamever': window[b[1082]][b[35058]],
            'serverid': window[b[5021]][b[27982]] ? window[b[5021]][b[27982]][b[12381]] : 0x0,
            'systemInfo': window[b[35065]],
            'error': b[35066],
            'stack': ztyh ? ztyh[b[338]] : ''
        },
            bd0k65 = JSON[b[5004]](kqsn9);
        console[b[499]](b[35067] + bd0k65), (!window[b[35056]] || window[b[35056]] != kqsn9[b[499]]) && (window[b[35056]] = kqsn9[b[499]], window[b[35068]](kqsn9));
    }
});
import 'eeemd5min.js';
import 'eeezlibs.js';
window[b[35069]] = require(b[35070]);
import 'eeeindex.js';
import 'eeelibsmin.js';
import 'eeewxmini.js';
import 'eeeinitmin.js';
console[b[611]](b[35071]), console[b[611]](b[35072]), e11UG0({ 'title': b[35073] });
var etlhrg = { 'e1I10UG': !![] };
new window[b[35074]](etlhrg), window[b[35074]][b[679]][b[35075]]();
if (window[b[35076]]) clearInterval(window[b[35076]]);
window[b[35076]] = null, window[b[35077]] = function (ryfzlh, un93q) {
    if (!ryfzlh || !un93q) return 0x0;
    ryfzlh = ryfzlh[b[444]]('.'), un93q = un93q[b[444]]('.');
    const tig$ = Math[b[491]](ryfzlh[b[322]], un93q[b[322]]);
    while (ryfzlh[b[322]] < tig$) {
        ryfzlh[b[344]]('0');
    }
    while (un93q[b[322]] < tig$) {
        un93q[b[344]]('0');
    }
    for (var qs93 = 0x0; qs93 < tig$; qs93++) {
        const ac7_ = parseInt(ryfzlh[qs93]),
              lryz = parseInt(un93q[qs93]);
        if (ac7_ > lryz) return 0x1;else {
            if (ac7_ < lryz) return -0x1;
        }
    }
    return 0x0;
}, window[b[35078]] = wx[b[35079]]()[b[35078]], console[b[456]](b[35080] + window[b[35078]]);
var eu3jqsn = wx[b[35081]]();
eu3jqsn[b[35082]](function (fav7) {
    console[b[456]](b[35083] + fav7[b[35084]]);
}), eu3jqsn[b[35085]](function () {
    wx[b[35086]]({
        'title': b[35087],
        'content': b[35088],
        'showCancel': ![],
        'success': function (vrzyh) {
            eu3jqsn[b[35089]]();
        }
    });
}), eu3jqsn[b[35090]](function () {
    console[b[456]](b[35091]);
}), window[b[35092]] = function () {
    console[b[456]](b[35093]);
    var ilg$x = wx[b[35094]]({
        'name': b[35095],
        'success': function (knqsu) {
            console[b[456]](b[35096]), console[b[456]](knqsu), knqsu && knqsu[b[28195]] == b[35097] ? (window[b[35098]] = !![], window[b[35099]](), window[b[35100]]()) : setTimeout(function () {
                window[b[35092]]();
            }, 0x1f4);
        },
        'fail': function ($gi3j) {
            console[b[456]](b[35101]), console[b[456]]($gi3j), setTimeout(function () {
                window[b[35092]]();
            }, 0x1f4);
        }
    });
    ilg$x && ilg$x[b[34773]](wd85b => {});
}, window[b[35102]] = function () {
    console[b[456]](b[35103]);
    var m7poca = wx[b[35094]]({
        'name': b[35104],
        'success': function (apoc7m) {
            console[b[456]](b[35105]), console[b[456]](apoc7m), apoc7m && apoc7m[b[28195]] == b[35097] ? (window[b[35106]] = !![], window[b[35099]](), window[b[35100]]()) : setTimeout(function () {
                window[b[35102]]();
            }, 0x1f4);
        },
        'fail': function (dk605) {
            console[b[456]](b[35107]), console[b[456]](dk605), setTimeout(function () {
                window[b[35102]]();
            }, 0x1f4);
        }
    });
    m7poca && m7poca[b[34773]](lxth$g => {});
}, window[b[35108]] = function () {
    window[b[35077]](window[b[35078]], b[35109]) >= 0x0 ? (console[b[456]](b[35110] + window[b[35078]] + b[35111]), window[b[35112]](), window[b[35092]](), window[b[35102]]()) : (window[b[35113]](b[35114], window[b[35078]]), wx[b[35086]]({
        'title': b[6599],
        'content': b[35115]
    }));
}, window[b[35065]] = '', wx[b[35116]]({
    'success'(unksq) {
        window[b[35065]] = b[35117] + unksq[b[35118]] + b[35119] + unksq[b[35120]] + b[35121] + unksq[b[5848]] + b[35122] + unksq[b[1004]] + b[35123] + unksq[b[27940]] + b[35124] + unksq[b[35078]] + b[35125] + unksq[b[10075]], console[b[456]](window[b[35065]]), console[b[456]](b[35126] + unksq[b[31545]] + b[35127] + unksq[b[35128]] + b[35129] + unksq[b[35130]] + b[35131] + unksq[b[35132]] + b[35133] + unksq[b[35134]] + b[35135] + unksq[b[35136]] + b[35137] + (unksq[b[35138]] ? unksq[b[35138]][b[846]] + ',' + unksq[b[35138]][b[1911]] + ',' + unksq[b[35138]][b[1913]] + ',' + unksq[b[35138]][b[1912]] : ''));
        var m7oa = unksq[b[1004]] ? unksq[b[1004]][b[371]]() : '',
            yrzvfh = unksq[b[35120]] ? unksq[b[35120]][b[371]]()[b[466]]('\x20', '') : '';
        window[b[5021]][b[1646]] = m7oa[b[404]](b[35139]) != -0x1, window[b[5021]][b[12209]] = m7oa[b[404]](b[35033]) != -0x1, window[b[5021]][b[35140]] = m7oa[b[404]](b[35139]) != -0x1 || m7oa[b[404]](b[35033]) != -0x1, window[b[5021]][b[27633]] = m7oa[b[404]](b[35141]) != -0x1 || m7oa[b[404]](b[35142]) != -0x1, window[b[5021]][b[35143]] = unksq[b[27940]] ? unksq[b[27940]][b[371]]() : '', window[b[5021]][b[35144]] = ![], window[b[5021]][b[35145]] = 0x2;
        if (m7oa[b[404]](b[35033]) != -0x1) {
            if (unksq[b[10075]] >= 0x18) window[b[5021]][b[35145]] = 0x3;else window[b[5021]][b[35145]] = 0x2;
        } else {
            if (m7oa[b[404]](b[35139]) != -0x1) {
                if (unksq[b[10075]] && unksq[b[10075]] >= 0x14) window[b[5021]][b[35145]] = 0x3;else {
                    if (yrzvfh[b[404]](b[35146]) != -0x1 || yrzvfh[b[404]](b[35147]) != -0x1 || yrzvfh[b[404]](b[35148]) != -0x1 || yrzvfh[b[404]](b[35149]) != -0x1 || yrzvfh[b[404]](b[35150]) != -0x1) window[b[5021]][b[35145]] = 0x2;else window[b[5021]][b[35145]] = 0x3;
                }
            } else window[b[5021]][b[35145]] = 0x2;
        }
        console[b[456]](b[35151] + window[b[5021]][b[35144]] + b[35152] + window[b[5021]][b[35145]]);
    }
}), wx[b[35153]]({
    'success': function (gx$jti) {
        console[b[456]](b[35154] + gx$jti[b[5126]] + b[35155] + gx$jti[b[35156]]);
    }
}), wx[b[12762]]({
    'success': function (b0k96d) {
        console[b[456]](b[35157] + b0k96d[b[14583]]);
    }
}), wx[b[35158]]({ 'keepScreenOn': !![] }), wx[b[12764]](function (_fy4v7) {
    console[b[456]](b[35157] + _fy4v7[b[14583]] + b[35159] + _fy4v7[b[35160]]);
}), wx[b[11701]](function (igxl) {
    window[b[35161]] = igxl, window[b[35162]] && window[b[35161]] && (console[b[611]](b[35163] + window[b[35161]][b[1349]]), window[b[35162]](window[b[35161]]), window[b[35161]] = null);
}), window[b[35164]] = 0x0, window[b[35165]] = 0x0, window[b[35166]] = null, wx[b[35167]](function () {
    window[b[35165]]++;
    var jq3x = Date[b[616]]();
    (window[b[35164]] == 0x0 || jq3x - window[b[35164]] > 0x1d4c0) && (console[b[513]](b[35168]), wx[b[13026]]());
    if (window[b[35165]] >= 0x2) {
        window[b[35165]] = 0x0, console[b[499]](b[35169]), wx[b[35170]]('0', 0x1);
        if (window[b[5021]] && window[b[5021]][b[1646]]) window[b[35113]](b[35171], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});