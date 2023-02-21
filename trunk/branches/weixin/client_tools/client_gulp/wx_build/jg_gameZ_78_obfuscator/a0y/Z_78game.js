var s1 = wx.l$;
console[s1[650]](s1[977]), window[s1[978]], wx[s1[979]](function (yx2i4g) {
    if (yx2i4g) {
        if (yx2i4g[s1[980]]) {
            var h41g23 = window[s1[442]][s1[580]][s1[351]](new RegExp(/\./, 'g'), '_'),
                w9jkv = yx2i4g[s1[980]],
                wv$0 = w9jkv[s1[542]](/(he814a\/Z_78game.js:)[0-9]{1,60}(:)/g);
            if (wv$0) for (var g42iy = 0x0; g42iy < wv$0[s1[203]]; g42iy++) {
                if (wv$0[g42iy] && wv$0[g42iy][s1[203]] > 0x0) {
                    var lz7mp = parseInt(wv$0[g42iy][s1[351]](s1[981], '')[s1[351]](':', ''));
                    w9jkv = w9jkv[s1[351]](wv$0[g42iy], wv$0[g42iy][s1[351]](':' + lz7mp + ':', ':' + (lz7mp - 0x2) + ':'));
                }
            }
            w9jkv = w9jkv[s1[351]](new RegExp(s1[982], 'g'), s1[983] + h41g23 + s1[984]), w9jkv = w9jkv[s1[351]](new RegExp(s1[985], 'g'), s1[983] + h41g23 + s1[984]), yx2i4g[s1[980]] = w9jkv;
        }
        var lpf65 = {
            'id': window[s1[171]][s1[670]],
            'role': window[s1[171]][s1[671]],
            'level': window[s1[171]][s1[672]],
            'user': window[s1[171]][s1[673]],
            'version': window[s1[171]][s1[233]],
            'cdn': window[s1[171]][s1[355]],
            'pkgName': window[s1[171]][s1[315]],
            'gamever': window[s1[442]][s1[580]],
            'serverid': window[s1[171]][s1[172]] ? window[s1[171]][s1[172]][s1[173]] : 0x0,
            'systemInfo': window[s1[674]],
            'error': s1[986],
            'stack': yx2i4g ? yx2i4g[s1[980]] : ''
        },
            rq_kc = JSON[s1[513]](lpf65);
        console[s1[445]](s1[987] + rq_kc), (!window[s1[978]] || window[s1[978]] != lpf65[s1[445]]) && (window[s1[978]] = lpf65[s1[445]], window[s1[608]](lpf65));
    }
});
import 'mk.js';
import 'a8m9a.js';
window[s1[988]] = require(s1[989]);
import 'pqe.js';
import 'uf.js';
import 'a5k.js';
import 'gf.js';
console[s1[650]](s1[990]), console[s1[650]](s1[991]), _sNYWI({ 'title': s1[992] });
var _xfz7sp = { '_sTNIYW': !![] };
new window[s1[578]](_xfz7sp), window[s1[578]][s1[166]][s1[477]]();
if (window[s1[993]]) clearInterval(window[s1[993]]);
window[s1[993]] = null, window[s1[704]] = function (l5pfz, c_qkn) {
    if (!l5pfz || !c_qkn) return 0x0;
    l5pfz = l5pfz[s1[453]]('.'), c_qkn = c_qkn[s1[453]]('.');
    const krc9n_ = Math[s1[994]](l5pfz[s1[203]], c_qkn[s1[203]]);
    while (l5pfz[s1[203]] < krc9n_) {
        l5pfz[s1[372]]('0');
    }
    while (c_qkn[s1[203]] < krc9n_) {
        c_qkn[s1[372]]('0');
    }
    for (var egixy = 0x0; egixy < krc9n_; egixy++) {
        const _c9rk = parseInt(l5pfz[egixy]),
              pu7 = parseInt(c_qkn[egixy]);
        if (_c9rk > pu7) return 0x1;else {
            if (_c9rk < pu7) return -0x1;
        }
    }
    return 0x0;
}, window[s1[855]] = wx[s1[995]]()[s1[855]], console[s1[324]](s1[996] + window[s1[855]]);
var _xd08$t = wx[s1[997]]();
_xd08$t[s1[998]](function (nv9w$) {
    console[s1[324]](s1[999] + nv9w$[s1[1000]]);
}), _xd08$t[s1[1001]](function () {
    wx[s1[631]]({
        'title': s1[1002],
        'content': s1[1003],
        'showCancel': ![],
        'success': function (_amo) {
            _xd08$t[s1[1004]]();
        }
    });
}), _xd08$t[s1[1005]](function () {
    console[s1[324]](s1[1006]);
}), window[s1[1007]] = function () {
    console[s1[324]](s1[1008]);
    var $bdw0 = wx[s1[1009]]({
        'name': s1[1010],
        'success': function (ex5yi) {
            console[s1[324]](s1[1011]), console[s1[324]](ex5yi), ex5yi && ex5yi[s1[733]] == s1[1012] ? (window[s1[623]] = !![], window[s1[483]](), window[s1[484]]()) : setTimeout(function () {
                window[s1[1007]]();
            }, 0x1f4);
        },
        'fail': function (plz) {
            console[s1[324]](s1[1013]), console[s1[324]](plz), setTimeout(function () {
                window[s1[1007]]();
            }, 0x1f4);
        }
    });
    $bdw0 && $bdw0[s1[1014]](zlum7p => {});
}, window[s1[1015]] = function () {
    console[s1[324]](s1[1016]);
    var auormq = wx[s1[1009]]({
        'name': s1[1017],
        'success': function (eg6xyi) {
            console[s1[324]](s1[1018]), console[s1[324]](eg6xyi), eg6xyi && eg6xyi[s1[733]] == s1[1012] ? (window[s1[624]] = !![], window[s1[483]](), window[s1[484]]()) : setTimeout(function () {
                window[s1[1015]]();
            }, 0x1f4);
        },
        'fail': function (aormq) {
            console[s1[324]](s1[1019]), console[s1[324]](aormq), setTimeout(function () {
                window[s1[1015]]();
            }, 0x1f4);
        }
    });
    auormq && auormq[s1[1014]](_k9nr => {});
}, window[s1[1020]] = function () {
    window[s1[704]](window[s1[855]], s1[1021]) >= 0x0 ? (console[s1[324]](s1[1022] + window[s1[855]] + s1[1023]), window[s1[641]](), window[s1[1007]](), window[s1[1015]]()) : (window[s1[683]](s1[1024], window[s1[855]]), wx[s1[631]]({
        'title': s1[632],
        'content': s1[1025]
    }));
}, window[s1[674]] = '', wx[s1[1026]]({
    'success'(fpls56) {
        window[s1[674]] = s1[1027] + fpls56[s1[1028]] + s1[1029] + fpls56[s1[1030]] + s1[1031] + fpls56[s1[591]] + s1[1032] + fpls56[s1[1033]] + s1[1034] + fpls56[s1[753]] + s1[1035] + fpls56[s1[855]] + s1[1036] + fpls56[s1[1037]], console[s1[324]](window[s1[674]]), console[s1[324]](s1[1038] + fpls56[s1[1039]] + s1[1040] + fpls56[s1[1041]] + s1[1042] + fpls56[s1[1043]] + s1[1044] + fpls56[s1[1045]] + s1[1046] + fpls56[s1[1047]] + s1[1048] + fpls56[s1[1049]] + s1[1050] + (fpls56[s1[1051]] ? fpls56[s1[1051]][s1[106]] + ',' + fpls56[s1[1051]][s1[247]] + ',' + fpls56[s1[1051]][s1[303]] + ',' + fpls56[s1[1051]][s1[69]] : ''));
        var xe4gy = fpls56[s1[1033]] ? fpls56[s1[1033]][s1[1052]]() : '',
            nvjk9w = fpls56[s1[1030]] ? fpls56[s1[1030]][s1[1052]]()[s1[351]]('\x20', '') : '';
        window[s1[171]][s1[618]] = xe4gy[s1[533]](s1[1053]) != -0x1, window[s1[171]][s1[619]] = xe4gy[s1[533]](s1[1054]) != -0x1, window[s1[171]][s1[961]] = xe4gy[s1[533]](s1[1053]) != -0x1 || xe4gy[s1[533]](s1[1054]) != -0x1, window[s1[171]][s1[620]] = xe4gy[s1[533]](s1[1055]) != -0x1 || xe4gy[s1[533]](s1[592]) != -0x1, window[s1[171]][s1[685]] = fpls56[s1[753]] ? fpls56[s1[753]][s1[1052]]() : '', window[s1[171]][s1[956]] = ![], window[s1[171]][s1[957]] = 0x2;
        if (xe4gy[s1[533]](s1[1054]) != -0x1) {
            if (fpls56[s1[1037]] >= 0x18) window[s1[171]][s1[957]] = 0x3;else window[s1[171]][s1[957]] = 0x2;
        } else {
            if (xe4gy[s1[533]](s1[1053]) != -0x1) {
                if (fpls56[s1[1037]] && fpls56[s1[1037]] >= 0x14) window[s1[171]][s1[957]] = 0x3;else {
                    if (nvjk9w[s1[533]](s1[1056]) != -0x1 || nvjk9w[s1[533]](s1[1057]) != -0x1 || nvjk9w[s1[533]](s1[1058]) != -0x1 || nvjk9w[s1[533]](s1[1059]) != -0x1 || nvjk9w[s1[533]](s1[1060]) != -0x1) window[s1[171]][s1[957]] = 0x2;else window[s1[171]][s1[957]] = 0x3;
                }
            } else window[s1[171]][s1[957]] = 0x2;
        }
        console[s1[324]](s1[1061] + window[s1[171]][s1[956]] + s1[1062] + window[s1[171]][s1[957]]);
    }
}), wx[s1[876]]({
    'success': function (yg2i4x) {
        console[s1[324]](s1[1063] + yg2i4x[s1[878]] + s1[1064] + yg2i4x[s1[880]]);
    }
}), wx[s1[882]]({
    'success': function (c9_k) {
        console[s1[324]](s1[1065] + c9_k[s1[1066]]);
    }
}), wx[s1[1067]]({ 'keepScreenOn': !![] }), wx[s1[883]](function (jnk_9c) {
    console[s1[324]](s1[1065] + jnk_9c[s1[1066]] + s1[1068] + jnk_9c[s1[1069]]);
}), wx[s1[845]](function (aqmoru) {
    window[s1[847]] = aqmoru, window[s1[846]] && window[s1[847]] && (console[s1[650]](s1[848] + window[s1[847]][s1[849]]), window[s1[846]](window[s1[847]]), window[s1[847]] = null);
}), window[s1[1070]] = 0x0, window[s1[1071]] = 0x0, window[s1[1072]] = null, wx[s1[1073]](function () {
    window[s1[1071]]++;
    var zpml = Date[s1[165]]();
    (window[s1[1070]] == 0x0 || zpml - window[s1[1070]] > 0x1d4c0) && (console[s1[531]](s1[1074]), wx[s1[1075]]());
    if (window[s1[1071]] >= 0x2) {
        window[s1[1071]] = 0x0, console[s1[445]](s1[1076]), wx[s1[1077]]('0', 0x1);
        if (window[s1[171]] && window[s1[171]][s1[618]]) window[s1[683]](s1[1078], '');
        if (onMemoryWarningCallBack) onMemoryWarningCallBack();
    }
});