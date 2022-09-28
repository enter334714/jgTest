var b = wx.$e;
console[b[80]](b[31123]), window[b[31124]], wx[b[31125]](function (jxg3i$) {
    if (jxg3i$) {
        if (jxg3i$[b[4296]]) {
            var a7cm = window[b[590]][b[31126]][b[4476]](new RegExp(/\./, 'g'), '_'),
                acpom7 = jxg3i$[b[4296]],
                hlryzt = acpom7[b[12210]](/(eeeeeeee\/eeegame.js:)[0-9]{1,60}(:)/g);
            if (hlryzt) for (var jx3q$ = 0x0; jx3q$ < hlryzt[b[14]]; jx3q$++) {
                if (hlryzt[jx3q$] && hlryzt[jx3q$][b[14]] > 0x0) {
                    var u3jsqn = parseInt(hlryzt[jx3q$][b[4476]](b[31127], '')[b[4476]](':', ''));
                    acpom7 = acpom7[b[4476]](hlryzt[jx3q$], hlryzt[jx3q$][b[4476]](':' + u3jsqn + ':', ':' + (u3jsqn - 0x2) + ':'));
                }
            }
            acpom7 = acpom7[b[4476]](new RegExp(b[31128], 'g'), b[31129] + a7cm + b[26366]), acpom7 = acpom7[b[4476]](new RegExp(b[31130], 'g'), b[31129] + a7cm + b[26366]), jxg3i$[b[4296]] = acpom7;
        }
        var _y4fzv = {
            'id': window[b[31131]][b[31132]],
            'role': window[b[31131]][b[4418]],
            'level': window[b[31131]][b[31133]],
            'user': window[b[31131]][b[26265]],
            'version': window[b[31131]][b[107]],
            'cdn': window[b[31131]][b[4294]],
            'pkgName': window[b[31131]][b[26266]],
            'gamever': window[b[590]][b[31126]],
            'serverid': window[b[31131]][b[26260]] ? window[b[31131]][b[26260]][b[11492]] : 0x0,
            'systemInfo': window[b[31134]],
            'error': b[31135],
            'stack': jxg3i$ ? jxg3i$[b[4296]] : ''
        },
            aecop = JSON[b[4280]](_y4fzv);
        console[b[141]](b[31136] + aecop), (!window[b[31124]] || window[b[31124]] != _y4fzv[b[141]]) && (window[b[31124]] = _y4fzv[b[141]], window[b[31137]](_y4fzv));
    }
});
import 'eeemd5min.js';
import 'eeezlibs.js';
window[b[31138]] = require(b[31139]);
import 'eeeindex.js';
import 'eeelibsmin.js';
import 'eeewxmini.js';
import 'eeeinitmin.js';
console[b[80]](b[31140]), console[b[80]](b[31141]), e11UG0({ 'title': b[31142] });
var efzvy4r = { 'e1I10UG': !![] };
new window[b[31143]](efzvy4r), window[b[31143]][b[164]][b[31144]]();
if (window[b[31145]]) clearInterval(window[b[31145]]);
window[b[31145]] = null, window[b[31146]] = function (xijg$t, kb6d) {
    if (!xijg$t || !kb6d) return 0x0;
    xijg$t = xijg$t[b[16]]('.'), kb6d = kb6d[b[16]]('.');
    const lthyzr = Math[b[921]](xijg$t[b[14]], kb6d[b[14]]);
    while (xijg$t[b[14]] < lthyzr) {
        xijg$t[b[31]]('0');
    }
    while (kb6d[b[14]] < lthyzr) {
        kb6d[b[31]]('0');
    }
    for (var yrvz4f = 0x0; yrvz4f < lthyzr; yrvz4f++) {
        const rvyfz = parseInt(xijg$t[yrvz4f]),
              d15 = parseInt(kb6d[yrvz4f]);
        if (rvyfz > d15) return 0x1;else {
            if (rvyfz < d15) return -0x1;
        }
    }
    return 0x0;
}, window[b[31147]] = wx[b[31148]]()[b[31147]], console[b[514]](b[31149] + window[b[31147]]);
var erhglxt = wx[b[31150]]();
erhglxt[b[31151]](function (sbk609) {
    console[b[514]](b[31152] + sbk609[b[31153]]);
}), erhglxt[b[31154]](function () {
    wx[b[31155]]({
        'title': b[31156],
        'content': b[31157],
        'showCancel': ![],
        'success': function (lyztr) {
            erhglxt[b[31158]]();
        }
    });
}), erhglxt[b[31159]](function () {
    console[b[514]](b[31160]);
}), window[b[31161]] = function () {
    console[b[514]](b[31162]);
    var xij3g$ = wx[b[31163]]({
        'name': b[31164],
        'success': function (htzryl) {
            console[b[514]](b[31165]), console[b[514]](htzryl), htzryl && htzryl[b[26468]] == b[31166] ? (window[b[31167]] = !![], window[b[31168]](), window[b[31169]]()) : setTimeout(function () {
                window[b[31161]]();
            }, 0x1f4);
        },
        'fail': function ($gijx3) {
            console[b[514]](b[31170]), console[b[514]]($gijx3), setTimeout(function () {
                window[b[31161]]();
            }, 0x1f4);
        }
    });
    xij3g$ && xij3g$[b[30421]](_7amoc => {});
}, window[b[31171]] = function () {
    console[b[514]](b[31172]);
    var ijx$3 = wx[b[31163]]({
        'name': b[31173],
        'success': function (zvyf4r) {
            console[b[514]](b[31174]), console[b[514]](zvyf4r), zvyf4r && zvyf4r[b[26468]] == b[31166] ? (window[b[31175]] = !![], window[b[31168]](), window[b[31169]]()) : setTimeout(function () {
                window[b[31171]]();
            }, 0x1f4);
        },
        'fail': function (mav4_) {
            console[b[514]](b[31176]), console[b[514]](mav4_), setTimeout(function () {
                window[b[31171]]();
            }, 0x1f4);
        }
    });
    ijx$3 && ijx$3[b[30421]](q9us3 => {});
}, window[b[31177]] = function () {
    window[b[31146]](window[b[31147]], b[31178]) >= 0x0 ? (console[b[514]](b[31179] + window[b[31147]] + b[31180]), window[b[31181]](), window[b[31161]](), window[b[31171]]()) : (window[b[31182]](b[31183], window[b[31147]]), wx[b[31155]]({
        'title': b[5893],
        'content': b[31184]
    }));
}, window[b[31134]] = '', wx[b[31185]]({
    'success'(rlhx) {
        window[b[31134]] = b[31186] + rlhx[b[31187]] + b[31188] + rlhx[b[31189]] + b[31190] + rlhx[b[4489]] + b[31191] + rlhx[b[507]] + b[31192] + rlhx[b[26228]] + b[31193] + rlhx[b[31147]] + b[31194] + rlhx[b[9218]], console[b[514]](window[b[31134]]), console[b[514]](b[31195] + rlhx[b[31196]] + b[31197] + rlhx[b[31198]] + b[31199] + rlhx[b[31200]] + b[31201] + rlhx[b[31202]] + b[31203] + rlhx[b[31204]] + b[31205] + rlhx[b[31206]] + b[31207] + (rlhx[b[31208]] ? rlhx[b[31208]][b[344]] + ',' + rlhx[b[31208]][b[1359]] + ',' + rlhx[b[31208]][b[1361]] + ',' + rlhx[b[31208]][b[1360]] : ''));
        var vhfrz = rlhx[b[507]] ? rlhx[b[507]][b[12510]]() : '',
            z4vyf_ = rlhx[b[31189]] ? rlhx[b[31189]][b[12510]]()[b[4476]]('\x20', '') : '';
        window[b[31131]][b[1146]] = vhfrz[b[122]](b[31209]) != -0x1, window[b[31131]][b[11316]] = vhfrz[b[122]](b[31101]) != -0x1, window[b[31131]][b[31210]] = vhfrz[b[122]](b[31209]) != -0x1 || vhfrz[b[122]](b[31101]) != -0x1, window[b[31131]][b[25949]] = vhfrz[b[122]](b[31211]) != -0x1 || vhfrz[b[122]](b[31212]) != -0x1, window[b[31131]][b[31213]] = rlhx[b[26228]] ? rlhx[b[26228]][b[12510]]() : '', window[b[31131]][b[31214]] = ![], window[b[31131]][b[31215]] = 0x2;
        if (vhfrz[b[122]](b[31101]) != -0x1) {
            if (rlhx[b[9218]] >= 0x18) window[b[31131]][b[31215]] = 0x3;else window[b[31131]][b[31215]] = 0x2;
        } else {
            if (vhfrz[b[122]](b[31209]) != -0x1) {
                if (rlhx[b[9218]] && rlhx[b[9218]] >= 0x14) window[b[31131]][b[31215]] = 0x3;else {
                    if (z4vyf_[b[122]](b[31216]) != -0x1 || z4vyf_[b[122]](b[31217]) != -0x1 || z4vyf_[b[122]](b[31218]) != -0x1 || z4vyf_[b[122]](b[31219]) != -0x1 || z4vyf_[b[122]](b[31220]) != -0x1) window[b[31131]][b[31215]] = 0x2;else window[b[31131]][b[31215]] = 0x3;
                }
            } else window[b[31131]][b[31215]] = 0x2;
        }
        console[b[514]](b[31221] + window[b[31131]][b[31214]] + b[31222] + window[b[31131]][b[31215]]);
    }
}), wx[b[31223]]({
    'success': function (a47vm) {
        console[b[514]](b[31224] + a47vm[b[4393]] + b[31225] + a47vm[b[31226]]);
    }
}), wx[b[11874]]({
    'success': function (fy74_) {
        console[b[514]](b[31227] + fy74_[b[13373]]);
    }
}), wx[b[31228]]({ 'keepScreenOn': !![] }), wx[b[11876]](function (_7amco) {
    console[b[514]](b[31227] + _7amco[b[13373]] + b[31229] + _7amco[b[31230]]);
}), wx[b[10819]](function (jnu3iq) {
    window[b[31231]] = jnu3iq, window[b[31232]] && window[b[31231]] && (console[b[80]](b[31233] + window[b[31231]][b[844]]), window[b[31232]](window[b[31231]]), window[b[31231]] = null);
}), window[b[31234]] = 0x0, window[b[31235]] = 0x0, window[b[31236]] = null, wx[b[31237]](function () {
    window[b[31235]]++;
    var lzyh = Date[b[85]]();
    (window[b[31234]] == 0x0 || lzyh - window[b[31234]] > 0x1d4c0) && (console[b[100]](b[31238]), wx[b[12047]]());
    if (window[b[31235]] >= 0x2) {
        window[b[31235]] = 0x0, console[b[141]](b[31239]), wx[b[31240]]('0', 0x1);
        if (window[b[31131]] && window[b[31131]][b[1146]]) window[b[31182]](b[31241], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});