var c = wx.$a;
import g_0we from '../a3a4/eeesdk.js';
window[c[31317]] = { 'wxVersion': window[c[1076]][c[31201]] }, window[c[31318]] = ![], window[c[31319]] = 0x1, window[c[31320]] = 0x1, window[c[31321]] = !![], window[c[31322]] = !![], window[c[31323]] = '', window[c[31324]] = ![], window[c[31206]] = {
    'base_cdn': c[31325],
    'cdn': c[31325]
}, j1E[c[31326]] = {}, j1E[c[489]] = '0', j1E[c[4968]] = window[c[31317]][c[31327]], j1E[c[31287]] = '', j1E['os'] = '1', j1E[c[31328]] = c[31329], j1E[c[31330]] = c[31331], j1E[c[31332]] = c[31333], j1E[c[31334]] = c[31335], j1E[c[31336]] = c[31337], j1E[c[24878]] = '1', j1E[c[26799]] = '', j1E[c[26801]] = '', j1E[c[31338]] = 0x0, j1E[c[31339]] = {}, j1E[c[31340]] = parseInt(j1E[c[24878]]), j1E[c[26797]] = j1E[c[24878]], j1E[c[26793]] = {}, j1E[c[31212]] = c[31341], j1E[c[31342]] = ![], j1E[c[12906]] = c[31343], j1E[c[26763]] = Date[c[613]](), j1E[c[12500]] = c[31344], j1E[c[1267]] = '_a', j1E[c[31345]] = 0x2, j1E[c[630]] = 0x7c1, j1E[c[31327]] = window[c[31317]][c[31327]], j1E[c[1291]] = ![], j1E[c[1626]] = ![], j1E[c[11805]] = ![], j1E[c[26484]] = ![], window[c[31346]] = 0x5, window[c[31347]] = ![], window[c[31242]] = ![], window[c[31250]] = ![], window[c[31348]] = ![], window[c[31349]] = ![], window[c[31350]] = ![], window[c[31351]] = ![], window[c[31352]] = ![], window[c[31353]] = ![], window[c[31354]] = null, window[c[1167]] = function (y$boc) {
    console[c[453]](c[1167], y$boc), wx[c[5248]]({}), wx[c[31230]]({
        'title': c[6364],
        'content': y$boc,
        'success'(jvnxsh) {
            if (jvnxsh[c[31355]]) console[c[453]](c[31356]);else jvnxsh[c[1072]] && console[c[453]](c[31357]);
        }
    });
}, window[c[31358]] = function (drt68) {
    console[c[453]](c[31359], drt68), jM1EB(), wx[c[31230]]({
        'title': c[6364],
        'content': drt68,
        'confirmText': c[31360],
        'cancelText': c[19510],
        'success'(j12sxf) {
            if (j12sxf[c[31355]]) window[c[31256]]();else j12sxf[c[1072]] && (console[c[453]](c[31361]), wx[c[26481]]({}));
        }
    });
}, window[c[31362]] = function (bma$lc) {
    console[c[453]](c[31362], bma$lc), wx[c[31230]]({
        'title': c[6364],
        'content': bma$lc,
        'confirmText': c[26928],
        'showCancel': ![],
        'complete'(hqzk6d) {
            console[c[453]](c[31361]), wx[c[26481]]({});
        }
    });
}, window[c[31363]] = ![], window[c[31364]] = function (clym$) {
    window[c[31363]] = !![], wx[c[5247]](clym$);
}, window[c[31365]] = function () {
    window[c[31363]] && (window[c[31363]] = ![], wx[c[5248]]({}));
}, window[c[31366]] = function (y$c0l) {
    window[c[31218]][c[676]][c[31366]](y$c0l);
}, window[c[12776]] = function (td8, nkvjz) {
    g_0we[c[12776]](td8, function (cl$) {
        cl$ && cl$[c[498]] ? cl$[c[498]][c[1815]] == 0x1 ? nkvjz(!![]) : (nkvjz(![]), console[c[608]](c[31367] + cl$[c[498]][c[31368]])) : console[c[453]](c[12776], cl$);
    });
}, window[c[31369]] = function (o40w_e) {
    console[c[453]](c[31370], o40w_e);
}, window[c[31371]] = function (a9bl$) {}, window[c[31372]] = function (mbcyl$, fs1xjn, jhknzv) {}, window[c[31373]] = function (t8d5qr) {
    console[c[453]](c[31374], t8d5qr), window[c[31218]][c[676]][c[31375]](), window[c[31218]][c[676]][c[31376]](), window[c[31218]][c[676]][c[31377]]();
}, window[c[31378]] = function (q68tdk) {
    window[c[31379]](0xe, c[31380] + q68tdk), window[c[31358]](c[31381]);
    var $mla = {
        'id': window[c[31206]][c[31207]],
        'role': window[c[31206]][c[4898]],
        'level': window[c[31206]][c[31208]],
        'account': window[c[31206]][c[26798]],
        'version': window[c[31206]][c[630]],
        'cdn': window[c[31206]][c[4778]],
        'pkgName': window[c[31206]][c[26799]],
        'gamever': window[c[1076]][c[31201]],
        'serverid': window[c[31206]][c[26793]] ? window[c[31206]][c[26793]][c[11981]] : 0x0,
        'systemInfo': window[c[31209]],
        'error': c[31382],
        'stack': q68tdk ? q68tdk : c[31381]
    },
        zhjvns = JSON[c[4764]]($mla);
    console[c[496]](c[31383] + zhjvns), window[c[31212]](zhjvns);
}, window[c[31379]] = function (g2sfx, bcy0o$) {
    sendApi(j1E[c[31332]], c[31384], {
        'game_pkg': j1E[c[26799]],
        'partner_id': j1E[c[24878]],
        'server_id': j1E[c[26793]] && j1E[c[26793]][c[11981]] > 0x0 ? j1E[c[26793]][c[11981]] : 0x0,
        'uid': j1E[c[26798]] > 0x0 ? j1E[c[26798]] : 0x0,
        'type': g2sfx,
        'info': bcy0o$
    });
}, window[c[31385]] = function (xjs1nf) {
    var y_c0 = JSON[c[452]](xjs1nf);
    y_c0[c[31386]] = window[c[1076]][c[31201]], y_c0[c[31387]] = window[c[31206]][c[26793]] ? window[c[31206]][c[26793]][c[11981]] : 0x0, y_c0[c[31209]] = window[c[31209]];
    var $bcmla = JSON[c[4764]](y_c0);
    console[c[496]](c[31388] + $bcmla), window[c[31212]]($bcmla);
}, window[c[31257]] = function (k6zvnh, gw1ue) {
    var m$la9 = {
        'id': window[c[31206]][c[31207]],
        'role': window[c[31206]][c[4898]],
        'level': window[c[31206]][c[31208]],
        'account': window[c[31206]][c[26798]],
        'version': window[c[31206]][c[630]],
        'cdn': window[c[31206]][c[4778]],
        'pkgName': window[c[31206]][c[26799]],
        'gamever': window[c[1076]][c[31201]],
        'serverid': window[c[31206]][c[26793]] ? window[c[31206]][c[26793]][c[11981]] : 0x0,
        'systemInfo': window[c[31209]],
        'error': k6zvnh,
        'stack': gw1ue
    },
        njshx = JSON[c[4764]](m$la9);
    console[c[510]](c[31389] + njshx), window[c[31212]](njshx);
}, window[c[31212]] = function (r53) {
    if (window[c[31206]][c[31288]] == c[31390]) return;
    var ybc0$ = j1E[c[31212]] + c[31391] + j1E[c[26798]];
    wx[c[1000]]({
        'url': ybc0$,
        'method': c[31133],
        'data': r53,
        'header': {
            'content-type': c[31392],
            'cache-control': c[31393]
        },
        'success': function (hkq6z) {
            DEBUG && console[c[453]](c[31394], ybc0$, r53, hkq6z);
        },
        'fail': function (uo_4e) {
            DEBUG && console[c[453]](c[31394], ybc0$, r53, uo_4e);
        },
        'complete': function () {}
    });
}, window[c[31395]] = function () {
    function hkzvd6() {
        return ((0x1 + Math[c[645]]()) * 0x10000 | 0x0)[c[338]](0x10)[c[459]](0x1);
    }
    return hkzvd6() + hkzvd6() + '-' + hkzvd6() + '-' + hkzvd6() + '-' + hkzvd6() + '+' + hkzvd6() + hkzvd6() + hkzvd6();
}, window[c[31256]] = function () {
    console[c[453]](c[31396]);
    var _uwge2 = g_0we[c[31397]]();
    j1E[c[26797]] = _uwge2[c[31398]], j1E[c[31340]] = _uwge2[c[31398]], j1E[c[24878]] = _uwge2[c[31398]], j1E[c[26799]] = _uwge2[c[31399]];
    var hk6n = { 'game_ver': j1E[c[4968]] };
    j1E[c[26801]] = this[c[31395]](), jM1BE({ 'title': c[31400] }), g_0we[c[889]](hk6n, this[c[31401]][c[308]](this));
};
var wx_develop = ![];
window[c[31401]] = function (oyc4b0) {
    var o4c_y0 = oyc4b0[c[31402]];
    sdkInitRes = oyc4b0, wx_develop = o4c_y0 == 0x1, console[c[453]](c[31403] + o4c_y0 + c[31404] + (o4c_y0 == 0x1) + c[31405] + oyc4b0[c[31201]] + c[31406] + window[c[31317]][c[31327]] + c[31407] + oyc4b0[c[31408]]);
    if (!oyc4b0[c[31201]] || window[c[31221]](window[c[31317]][c[31327]], oyc4b0[c[31201]]) < 0x0) console[c[453]](c[31409]), j1E[c[31330]] = c[31410], j1E[c[31332]] = c[31411], j1E[c[31334]] = c[31412], j1E[c[4778]] = c[31413], j1E[c[26482]] = c[31414], j1E[c[31408]] = oyc4b0[c[31408]], j1E[c[1291]] = ![];else window[c[31221]](window[c[31317]][c[31327]], oyc4b0[c[31201]]) == 0x0 ? (console[c[453]](c[31415]), j1E[c[31330]] = c[31331], j1E[c[31332]] = c[31333], j1E[c[31334]] = c[31335], j1E[c[4778]] = c[31416], j1E[c[26482]] = c[31414], j1E[c[31408]] = c[31417], j1E[c[1291]] = !![]) : (console[c[453]](c[31418]), j1E[c[31330]] = c[31331], j1E[c[31332]] = c[31333], j1E[c[31334]] = c[31335], j1E[c[4778]] = c[31416], j1E[c[26482]] = c[31414], j1E[c[31408]] = c[31417], j1E[c[1291]] = ![]);
    j1E[c[31338]] = config[c[333]] ? config[c[333]] : 0x0, this[c[31419]](), this[c[31420]](), window[c[31421]] = 0x5, jM1BE({ 'title': c[31422] }), g_0we[c[31124]](this[c[31423]][c[308]](this));
}, window[c[31421]] = 0x5, window[c[31423]] = function (p5i3r7, ewgu_4) {
    if (p5i3r7 == 0x0 && ewgu_4 && ewgu_4[c[484]]) {
        j1E[c[31424]] = ewgu_4[c[484]], j1E[c[26938]] = ewgu_4[c[26938]];
        var qk6z8 = this;
        jM1BE({ 'title': c[31425] }), sendApi(j1E[c[31330]], c[31426], {
            'platform': j1E[c[31328]],
            'partner_id': j1E[c[24878]],
            'token': ewgu_4[c[484]],
            'game_pkg': j1E[c[26799]],
            'deviceId': j1E[c[26801]],
            'scene': c[31427] + j1E[c[31338]]
        }, this[c[31428]][c[308]](this), jBE1, jEM);
    } else ewgu_4 && ewgu_4[c[26992]] && window[c[31421]] > 0x0 && (ewgu_4[c[26992]][c[401]](c[31429]) != -0x1 || ewgu_4[c[26992]][c[401]](c[31430]) != -0x1 || ewgu_4[c[26992]][c[401]](c[31431]) != -0x1 || ewgu_4[c[26992]][c[401]](c[31432]) != -0x1 || ewgu_4[c[26992]][c[401]](c[31433]) != -0x1 || ewgu_4[c[26992]][c[401]](c[31434]) != -0x1) ? (window[c[31421]]--, g_0we[c[31124]](this[c[31423]][c[308]](this))) : (window[c[31379]](0x1, c[31435] + p5i3r7 + c[31436] + (ewgu_4 ? ewgu_4[c[26992]] : '')), window[c[31257]](c[31437], JSON[c[4764]]({
        'status': p5i3r7,
        'data': ewgu_4
    })), window[c[31358]](c[31438] + (ewgu_4 && ewgu_4[c[26992]] ? '，' + ewgu_4[c[26992]] : '')));
}, window[c[31428]] = function (ug2f1w) {
    if (!ug2f1w) {
        window[c[31379]](0x2, c[31439]), window[c[31257]](c[31440], c[31441]), window[c[31358]](c[31442]);
        return;
    }
    if (ug2f1w[c[1815]] != c[10296]) {
        window[c[31379]](0x2, c[31443] + ug2f1w[c[1815]]), window[c[31257]](c[31440], JSON[c[4764]](ug2f1w)), window[c[31358]](c[31444] + ug2f1w[c[1815]]);
        return;
    }
    if (ug2f1w[c[31445]] == 0x1) {
        window[c[31358]](c[31446]);
        return;
    }
    j1E[c[19891]] = String(ug2f1w[c[26798]]), j1E[c[26798]] = String(ug2f1w[c[26798]]), j1E[c[26761]] = String(ug2f1w[c[26761]]), j1E[c[26797]] = String(ug2f1w[c[26761]]), j1E[c[26800]] = String(ug2f1w[c[26800]]), j1E[c[31447]] = String(ug2f1w[c[11964]]), j1E[c[31448]] = String(ug2f1w[c[1403]]), j1E[c[11964]] = '';
    var cabml = this;
    jM1BE({ 'title': c[31449] });
    var c$yo0 = localStorage[c[1003]](c[31450] + j1E[c[26799]] + j1E[c[26798]]);
    if (c$yo0 && c$yo0 != '') {
        var u_w = Number(c$yo0);
        cabml[c[31451]](u_w);
    } else cabml[c[31452]]();
}, window[c[31452]] = function () {
    var jnfvx = this;
    sendApi(j1E[c[31330]], c[31453], {
        'partner_id': j1E[c[24878]],
        'uid': j1E[c[26798]],
        'version': j1E[c[4968]],
        'game_pkg': j1E[c[26799]],
        'device': j1E[c[26801]]
    }, jnfvx[c[31454]][c[308]](jnfvx), jBE1, jEM);
}, window[c[31454]] = function ($cm) {
    if (!$cm) {
        window[c[31379]](0x3, c[31455]), window[c[31358]](c[31455]);
        return;
    }
    if ($cm[c[1815]] != c[10296]) {
        window[c[31379]](0x3, c[31456] + $cm[c[1815]]), window[c[31358]](c[31456] + $cm[c[1815]]);
        return;
    }
    if (!$cm[c[498]] || $cm[c[498]][c[319]] == 0x0) {
        window[c[31379]](0x3, c[31457]), window[c[31358]](c[31458]);
        return;
    }
    this[c[31459]]($cm);
}, window[c[31451]] = function (xsjnfv) {
    var x2uf1g = this;
    sendApi(j1E[c[31330]], c[31460], {
        'server_id': xsjnfv,
        'time': Date[c[613]]() / 0x3e8
    }, x2uf1g[c[31461]][c[308]](x2uf1g), jBE1, jEM);
}, window[c[31461]] = function (cboy0$) {
    if (!cboy0$) {
        window[c[31379]](0x4, c[31462]), this[c[31452]]();
        return;
    }
    if (cboy0$[c[1815]] != c[10296]) {
        window[c[31379]](0x4, c[31463] + cboy0$[c[1815]]), this[c[31452]]();
        return;
    }
    if (!cboy0$[c[498]] || cboy0$[c[498]][c[319]] == 0x0) {
        window[c[31379]](0x4, c[31464]), this[c[31452]]();
        return;
    }
    this[c[31459]](cboy0$), window[c[31218]] && window[c[31218]][c[676]][c[31465]] && window[c[31218]][c[676]][c[31465]](sdkInitRes[c[31466]], sdkInitRes[c[31467]], sdkInitRes[c[31468]], sdkInitRes[c[31469]], sdkInitRes[c[31470]]);
}, window[c[31459]] = function (w_eu2g) {
    j1E[c[1177]] = w_eu2g[c[31471]] != undefined ? w_eu2g[c[31471]] : 0x0, j1E[c[26793]] = {
        'server_id': String(w_eu2g[c[498]][0x0][c[11981]]),
        'server_name': String(w_eu2g[c[498]][0x0][c[31472]]),
        'entry_ip': w_eu2g[c[498]][0x0][c[26823]],
        'entry_port': parseInt(w_eu2g[c[498]][0x0][c[26824]]),
        'status': j1BM(w_eu2g[c[498]][0x0]),
        'start_time': w_eu2g[c[498]][0x0][c[31473]],
        'maintain_time': w_eu2g[c[498]][0x0][c[31474]] ? w_eu2g[c[498]][0x0][c[31474]] : '',
        'cdn': j1E[c[4778]]
    }, this[c[31475]]();
}, window[c[31475]] = function () {
    if (j1E[c[1177]] == 0x1) {
        var kh6vnz = j1E[c[26793]][c[635]];
        if (kh6vnz === -0x1 || kh6vnz === 0x0) {
            window[c[31379]](0xf, c[31476] + j1E[c[26793]]['id'] + c[31477] + j1E[c[26793]][c[635]]), window[c[31358]](kh6vnz === -0x1 ? c[31478] : c[31479]);
            return;
        }
        jEMB1(0x0, j1E[c[26793]][c[11981]]), window[c[31218]][c[676]][c[31480]](j1E[c[1177]]);
    } else window[c[31218]][c[676]][c[31481]](), jM1EB();
    window[c[31352]] = !![], window[c[31243]](), window[c[31244]]();
}, window[c[31419]] = function () {
    sendApi(j1E[c[31330]], c[31482], {
        'game_pkg': j1E[c[26799]],
        'version_name': j1E[c[31408]]
    }, this[c[31483]][c[308]](this), jBE1, jEM);
}, window[c[31483]] = function (vz6hd) {
    if (!vz6hd) {
        window[c[31379]](0x5, c[31484]), window[c[31358]](c[31484]);
        return;
    }
    if (vz6hd[c[1815]] != c[10296]) {
        window[c[31379]](0x5, c[31485] + vz6hd[c[1815]]), window[c[31358]](c[31485] + vz6hd[c[1815]]);
        return;
    }
    if (!vz6hd[c[498]] || !vz6hd[c[498]][c[4968]]) {
        window[c[31379]](0x5, c[31486] + (vz6hd[c[498]] && vz6hd[c[498]][c[4968]])), window[c[31358]](c[31486] + (vz6hd[c[498]] && vz6hd[c[498]][c[4968]]));
        return;
    }
    vz6hd[c[498]][c[31487]] && vz6hd[c[498]][c[31487]][c[319]] > 0xa && (j1E[c[31488]] = vz6hd[c[498]][c[31487]], j1E[c[4778]] = vz6hd[c[498]][c[31487]]), vz6hd[c[498]][c[4968]] && (j1E[c[630]] = vz6hd[c[498]][c[4968]]), console[c[608]](c[26935] + j1E[c[630]] + c[31489] + j1E[c[31408]]), window[c[31350]] = !![], window[c[31243]](), window[c[31244]]();
}, window[c[31490]], window[c[31420]] = function () {
    sendApi(j1E[c[31330]], c[31491], { 'game_pkg': j1E[c[26799]] }, this[c[31492]][c[308]](this), jBE1, jEM);
}, window[c[31492]] = function (blyc) {
    if (blyc && blyc[c[1815]] === c[10296] && blyc[c[498]]) {
        window[c[31490]] = blyc[c[498]];
        for (var _0w in blyc[c[498]]) {
            j1E[_0w] = blyc[c[498]][_0w];
        }
    } else window[c[31379]](0xb, c[31493]), console[c[608]](c[31494] + blyc[c[1815]]);
    window[c[31351]] = !![], window[c[31244]]();
}, window[c[31495]] = function (fjxsv, pt57r3, p3t, w1ueg2, sg21f, xjn, p7i5r3, w2uf1, pt53, fx21u) {
    sg21f = String(sg21f);
    var b$0lcy = p7i5r3,
        q8dr5 = w2uf1;
    j1E[c[31326]][sg21f] = {
        'productid': sg21f,
        'productname': b$0lcy,
        'productdesc': q8dr5,
        'roleid': fjxsv,
        'rolename': pt57r3,
        'rolelevel': p3t,
        'price': xjn,
        'callback': pt53
    }, sendApi(j1E[c[31334]], c[31496], {
        'game_pkg': j1E[c[26799]],
        'server_id': j1E[c[26793]][c[11981]],
        'server_name': j1E[c[26793]][c[31472]],
        'level': p3t,
        'uid': j1E[c[26798]],
        'role_id': fjxsv,
        'role_name': pt57r3,
        'product_id': sg21f,
        'product_name': b$0lcy,
        'product_desc': q8dr5,
        'money': xjn,
        'partner_id': j1E[c[24878]]
    }, toPayCallBack, jBE1, jEM);
}, window[c[31497]] = function (c$aml) {
    if (c$aml && (c$aml[c[31498]] === 0xc8 || c$aml[c[1815]] == c[10296])) {
        var x1jf = j1E[c[31326]][String(c$aml[c[31499]])];
        if (x1jf[c[855]]) x1jf[c[855]](c$aml[c[31499]], c$aml[c[31500]], -0x1);
        g_0we[c[31162]]({
            'cpbill': c$aml[c[31500]],
            'productid': c$aml[c[31499]],
            'productname': x1jf[c[31501]],
            'productdesc': x1jf[c[31502]],
            'serverid': j1E[c[26793]][c[11981]],
            'servername': j1E[c[26793]][c[31472]],
            'roleid': x1jf[c[31503]],
            'rolename': x1jf[c[31504]],
            'rolelevel': x1jf[c[31505]],
            'price': x1jf[c[28606]],
            'extension': JSON[c[4764]]({ 'cp_order_id': c$aml[c[31500]] })
        }, function (tpr3, acm$lb) {
            x1jf[c[855]] && tpr3 == 0x0 && x1jf[c[855]](c$aml[c[31499]], c$aml[c[31500]], tpr3);
            console[c[608]](JSON[c[4764]]({
                'type': c[31506],
                'status': tpr3,
                'data': c$aml,
                'role_name': x1jf[c[31504]]
            }));
            if (tpr3 === 0x0) {} else {
                if (tpr3 === 0x1) {} else {
                    if (tpr3 === 0x2) {}
                }
            }
        });
    } else {
        var cmalb$ = c$aml ? c[31507] + c$aml[c[31498]] + c[31508] + c$aml[c[1815]] + c[31509] + c$aml[c[608]] : c[31510];
        window[c[31379]](0xd, c[31511] + cmalb$), alert(cmalb$);
    }
}, window[c[31512]] = function () {}, window[c[31513]] = function (_wueo4, k6zhqd, w4e_g, o0ey_, zv6hdk) {
    g_0we[c[31189]](j1E[c[26793]][c[11981]], j1E[c[26793]][c[31472]] || j1E[c[26793]][c[11981]], _wueo4, k6zhqd, w4e_g), sendApi(j1E[c[31330]], c[31514], {
        'game_pkg': j1E[c[26799]],
        'server_id': j1E[c[26793]][c[11981]],
        'role_id': _wueo4,
        'uid': j1E[c[26798]],
        'role_name': k6zhqd,
        'role_type': o0ey_,
        'level': w4e_g
    });
}, window[c[31515]] = function (u4gw_e, oyb$c0, h6qz, y$c0bo, zkhdq, e12wgu, x1u2, my$lb, xjvsf, vk6zn) {
    j1E[c[31207]] = u4gw_e, j1E[c[4898]] = oyb$c0, j1E[c[31208]] = h6qz, g_0we[c[31190]](j1E[c[26793]][c[11981]], j1E[c[26793]][c[31472]] || j1E[c[26793]][c[11981]], u4gw_e, oyb$c0, h6qz), sendApi(j1E[c[31330]], c[31516], {
        'game_pkg': j1E[c[26799]],
        'server_id': j1E[c[26793]][c[11981]],
        'role_id': u4gw_e,
        'uid': j1E[c[26798]],
        'role_name': oyb$c0,
        'role_type': y$c0bo,
        'level': h6qz,
        'evolution': zkhdq
    });
}, window[c[31517]] = function (g2_euw, drq6t8, hqz6, tr853, d6vz, y0oc4_, ge12u, o0c4yb, dq5t, bly0c) {
    j1E[c[31207]] = g2_euw, j1E[c[4898]] = drq6t8, j1E[c[31208]] = hqz6, g_0we[c[31191]](j1E[c[26793]][c[11981]], j1E[c[26793]][c[31472]] || j1E[c[26793]][c[11981]], g2_euw, drq6t8, hqz6), sendApi(j1E[c[31330]], c[31516], {
        'game_pkg': j1E[c[26799]],
        'server_id': j1E[c[26793]][c[11981]],
        'role_id': g2_euw,
        'uid': j1E[c[26798]],
        'role_name': drq6t8,
        'role_type': tr853,
        'level': hqz6,
        'evolution': d6vz
    });
}, window[c[31518]] = function (dz6vhk) {}, window[c[31519]] = function (hkzv6) {
    g_0we[c[31144]](c[31144], function (hvn) {
        hkzv6 && hkzv6(hvn);
    });
}, window[c[24876]] = function () {
    g_0we[c[24876]]();
}, window[c[31520]] = function () {
    g_0we[c[24755]]();
}, window[c[31521]] = function (eou, mb$cyl, e4_o0y, e12, xnfvsj, ow4_0, dzhqk, jhvkn) {
    jhvkn = jhvkn || j1E[c[26793]][c[11981]], sendApi(j1E[c[31330]], c[31522], {
        'phone': eou,
        'role_id': mb$cyl,
        'uid': j1E[c[26798]],
        'game_pkg': j1E[c[26799]],
        'partner_id': j1E[c[24878]],
        'server_id': jhvkn
    }, dzhqk, 0x2, null, function () {
        return !![];
    });
}, window[c[11296]] = function (c40b) {
    window[c[31307]] = c40b, window[c[31307]] && window[c[31306]] && (console[c[608]](c[31308] + window[c[31306]][c[1329]]), window[c[31307]](window[c[31306]]), window[c[31306]] = null);
}, window[c[31523]] = function (uegw, fgux, t8r5d, r3i75) {
    window[c[558]](c[31524], {
        'game_pkg': window[c[31206]][c[26799]],
        'role_id': fgux,
        'server_id': t8r5d
    }, r3i75);
}, window[c[31525]] = function (zdvk, fxjs, k6q) {
    function $oc0yb(u_w4g) {
        var dq6kt8 = [],
            o_e0w = [],
            xf21u = k6q || window[c[1076]][c[31526]];
        for (var fsjnxv in xf21u) {
            var js1x2 = Number(fsjnxv);
            (!zdvk || !zdvk[c[319]] || zdvk[c[401]](js1x2) != -0x1) && (o_e0w[c[341]](xf21u[fsjnxv]), dq6kt8[c[341]]([js1x2, 0x3]));
        }
        window[c[31221]](window[c[31222]], c[31527]) >= 0x0 ? (console[c[453]](c[31528]), g_0we[c[31186]] && g_0we[c[31186]](o_e0w, function (rt37p) {
            console[c[453]](c[31529]), console[c[453]](rt37p);
            if (rt37p && rt37p[c[26992]] == c[31530]) for (var zkhn in xf21u) {
                if (rt37p[xf21u[zkhn]] == c[31531]) {
                    var ns = Number(zkhn);
                    for (var w1ugf = 0x0; w1ugf < dq6kt8[c[319]]; w1ugf++) {
                        if (dq6kt8[w1ugf][0x0] == ns) {
                            dq6kt8[w1ugf][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[c[31221]](window[c[31222]], c[31532]) >= 0x0 ? wx[c[31533]]({
                'withSubscriptions': !![],
                'success': function (o4) {
                    var td8r6q = o4[c[31534]][c[31535]];
                    if (td8r6q) {
                        console[c[453]](c[31536]), console[c[453]](td8r6q);
                        for (var sj2x in xf21u) {
                            if (td8r6q[xf21u[sj2x]] == c[31531]) {
                                var qh6dk = Number(sj2x);
                                for (var fnxsj = 0x0; fnxsj < dq6kt8[c[319]]; fnxsj++) {
                                    if (dq6kt8[fnxsj][0x0] == qh6dk) {
                                        dq6kt8[fnxsj][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[c[453]](dq6kt8), fxjs && fxjs(dq6kt8);
                    } else console[c[453]](c[31537]), console[c[453]](o4), console[c[453]](dq6kt8), fxjs && fxjs(dq6kt8);
                },
                'fail': function () {
                    console[c[453]](c[31538]), console[c[453]](dq6kt8), fxjs && fxjs(dq6kt8);
                }
            }) : (console[c[453]](c[31539] + window[c[31222]]), console[c[453]](dq6kt8), fxjs && fxjs(dq6kt8));
        })) : (console[c[453]](c[31540] + window[c[31222]]), console[c[453]](dq6kt8), fxjs && fxjs(dq6kt8)), wx[c[31541]]($oc0yb);
    }
    wx[c[31542]]($oc0yb);
}, window[c[31543]] = {
    'isSuccess': ![],
    'level': c[31544],
    'isCharging': ![]
}, window[c[13876]] = function (r875q) {
    wx[c[31298]]({
        'success': function (fnxsv) {
            var l0bcy$ = window[c[31543]];
            l0bcy$[c[31545]] = !![], l0bcy$[c[4875]] = Number(fnxsv[c[4875]])[c[4497]](0x0), l0bcy$[c[31301]] = fnxsv[c[31301]], r875q && r875q(l0bcy$[c[31545]], l0bcy$[c[4875]], l0bcy$[c[31301]]);
        },
        'fail': function (w1u) {
            console[c[453]](c[31546], w1u[c[26992]]);
            var yco0_4 = window[c[31543]];
            r875q && r875q(yco0_4[c[31545]], yco0_4[c[4875]], yco0_4[c[31301]]);
        }
    });
}, window[c[12362]] = function (wu_e2) {
    wx[c[12362]]({
        'success': function (nkjvz) {
            wu_e2 && wu_e2(!![], nkjvz);
        },
        'fail': function (_0y4eo) {
            wu_e2 && wu_e2(![], _0y4eo);
        }
    });
}, window[c[12364]] = function (wug2e1) {
    if (wug2e1) wx[c[12364]](wug2e1);
}, window[c[26477]] = function (guf2w) {
    wx[c[26477]](guf2w);
}, window[c[558]] = function (q68rdt, ri357p, khvn, d6vhzk, nvkz6h, xf1, ml$b9, owu_e4) {
    if (d6vhzk == undefined) d6vhzk = 0x1;
    wx[c[1000]]({
        'url': q68rdt,
        'method': ml$b9 || c[26678],
        'responseType': c[4682],
        'data': ri357p,
        'header': { 'content-type': owu_e4 || c[31392] },
        'success': function (cmab) {
            DEBUG && console[c[453]](c[31547], q68rdt, info, cmab);
            if (cmab && cmab[c[27061]] == 0xc8) {
                var ufx12 = cmab[c[498]];
                !xf1 || xf1(ufx12) ? khvn && khvn(ufx12) : window[c[31548]](q68rdt, ri357p, khvn, d6vhzk, nvkz6h, xf1, cmab);
            } else window[c[31548]](q68rdt, ri357p, khvn, d6vhzk, nvkz6h, xf1, cmab);
        },
        'fail': function (w2u_ge) {
            DEBUG && console[c[453]](c[31549], q68rdt, info, w2u_ge), window[c[31548]](q68rdt, ri357p, khvn, d6vhzk, nvkz6h, xf1, w2u_ge);
        },
        'complete': function () {}
    });
}, window[c[31548]] = function (k8zdq6, o0$c, shnvzj, ge1w, e4_wu, eou_w4, co4y0b) {
    ge1w - 0x1 > 0x0 ? setTimeout(function () {
        window[c[558]](k8zdq6, o0$c, shnvzj, ge1w - 0x1, e4_wu, eou_w4);
    }, 0x3e8) : e4_wu && e4_wu(JSON[c[4764]]({
        'url': k8zdq6,
        'response': co4y0b
    }));
}, window[c[31550]] = function (mal$9b, t7p, gu2x1, bco0$, svfxnj, h6vd, yoc0b4) {
    !gu2x1 && (gu2x1 = {});
    var yb0cl$ = Math[c[346]](Date[c[613]]() / 0x3e8);
    gu2x1[c[1403]] = yb0cl$, gu2x1[c[31551]] = t7p;
    var vnkzh6 = Object[c[318]](gu2x1)[c[509]](),
        zd6vh = '',
        f1x2s = '';
    for (var vhnxs = 0x0; vhnxs < vnkzh6[c[319]]; vhnxs++) {
        zd6vh = zd6vh + (vhnxs == 0x0 ? '' : '&') + vnkzh6[vhnxs] + gu2x1[vnkzh6[vhnxs]], f1x2s = f1x2s + (vhnxs == 0x0 ? '' : '&') + vnkzh6[vhnxs] + '=' + encodeURIComponent(gu2x1[vnkzh6[vhnxs]]);
    }
    zd6vh = zd6vh + j1E[c[31336]];
    var rtq86d = c[31552] + md5(zd6vh);
    send(mal$9b + '?' + f1x2s + (f1x2s == '' ? '' : '&') + rtq86d, null, bco0$, svfxnj, h6vd, yoc0b4 || function (al$b) {
        return al$b[c[1815]] == c[10296];
    }, null, c[31134]);
}, window[c[31553]] = function (svxnjf, labm9$) {
    var fvnx = 0x0;
    j1E[c[26793]] && (fvnx = j1E[c[26793]][c[11981]]), sendApi(j1E[c[31332]], c[31554], {
        'partnerId': j1E[c[24878]],
        'gamePkg': j1E[c[26799]],
        'logTime': Math[c[346]](Date[c[613]]() / 0x3e8),
        'platformUid': j1E[c[26800]],
        'type': svxnjf,
        'serverId': fvnx
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[c[31555]] = function (gw4) {
    sendApi(j1E[c[31330]], c[31556], {
        'partner_id': j1E[c[24878]],
        'uid': j1E[c[26798]],
        'version': j1E[c[4968]],
        'game_pkg': j1E[c[26799]],
        'device': j1E[c[26801]]
    }, j1EBM, jBE1, jEM);
}, window[c[31557]] = function (t6rdq8) {
    if (t6rdq8 && t6rdq8[c[1815]] === c[10296] && t6rdq8[c[498]]) {
        t6rdq8[c[498]][c[424]]({
            'id': -0x2,
            'name': c[31558]
        }), t6rdq8[c[498]][c[424]]({
            'id': -0x1,
            'name': c[31559]
        }), j1E[c[31560]] = t6rdq8[c[498]];
        if (window[c[12953]]) window[c[12953]][c[31561]]();
    } else {
        j1E[c[31562]] = ![];
        var _uw4o = t6rdq8 ? t6rdq8[c[1815]] : '';
        window[c[31379]](0x7, c[31563] + _uw4o), window[c[31358]](c[31564] + _uw4o);
    }
}, window[c[31565]] = function (n6k) {
    sendApi(j1E[c[31330]], c[31566], {
        'partner_id': j1E[c[24878]],
        'uid': j1E[c[26798]],
        'version': j1E[c[4968]],
        'game_pkg': j1E[c[26799]],
        'device': j1E[c[26801]]
    }, jM1B, jBE1, jEM);
}, window[c[31567]] = function (ew4o0_) {
    j1E[c[31568]] = ![];
    if (ew4o0_ && ew4o0_[c[1815]] === c[10296] && ew4o0_[c[498]]) {
        for (var h6kdq = 0x0; h6kdq < ew4o0_[c[498]][c[319]]; h6kdq++) {
            ew4o0_[c[498]][h6kdq][c[635]] = j1BM(ew4o0_[c[498]][h6kdq]);
        }
        j1E[c[31339]][-0x1] = window[c[31569]](ew4o0_[c[498]]), window[c[12953]][c[31570]](-0x1);
    } else {
        var by0cl$ = ew4o0_ ? ew4o0_[c[1815]] : '';
        window[c[31379]](0x8, c[31571] + by0cl$), window[c[31358]](c[31572] + by0cl$);
    }
}, window[c[31573]] = function (e0y4o_) {
    sendApi(j1E[c[31330]], c[31566], {
        'partner_id': j1E[c[24878]],
        'uid': j1E[c[26798]],
        'version': j1E[c[4968]],
        'game_pkg': j1E[c[26799]],
        'device': j1E[c[26801]]
    }, e0y4o_, jBE1, jEM);
}, window[c[31574]] = function ($lmab, wu4_oe) {
    sendApi(j1E[c[31330]], c[31575], {
        'partner_id': j1E[c[24878]],
        'uid': j1E[c[26798]],
        'version': j1E[c[4968]],
        'game_pkg': j1E[c[26799]],
        'device': j1E[c[26801]],
        'server_group_id': wu4_oe
    }, jB1M, jBE1, jEM);
}, window[c[31576]] = function (d8kq6t) {
    j1E[c[31568]] = ![];
    if (d8kq6t && d8kq6t[c[1815]] === c[10296] && d8kq6t[c[498]] && d8kq6t[c[498]][c[498]]) {
        var dvhz6 = d8kq6t[c[498]][c[31577]],
            w1f2g = [];
        for (var yclm$ = 0x0; yclm$ < d8kq6t[c[498]][c[498]][c[319]]; yclm$++) {
            d8kq6t[c[498]][c[498]][yclm$][c[635]] = j1BM(d8kq6t[c[498]][c[498]][yclm$]), (w1f2g[c[319]] == 0x0 || d8kq6t[c[498]][c[498]][yclm$][c[635]] != 0x0) && (w1f2g[w1f2g[c[319]]] = d8kq6t[c[498]][c[498]][yclm$]);
        }
        j1E[c[31339]][dvhz6] = window[c[31569]](w1f2g), window[c[12953]][c[31570]](dvhz6);
    } else {
        var njfs = d8kq6t ? d8kq6t[c[1815]] : '';
        window[c[31379]](0x9, c[31578] + njfs), window[c[31358]](c[31579] + njfs);
    }
}, window[c[31580]] = function (nf1xjs) {
    sendApi(j1E[c[31330]], c[31581], {
        'partner_id': j1E[c[24878]],
        'uid': j1E[c[26798]],
        'version': j1E[c[4968]],
        'game_pkg': j1E[c[26799]],
        'device': j1E[c[26801]]
    }, reqServerRecommendCallBack, jBE1, jEM);
}, window[c[31582]] = function (rp75t3) {
    j1E[c[31568]] = ![];
    if (rp75t3 && rp75t3[c[1815]] === c[10296] && rp75t3[c[498]]) {
        for (var q875 = 0x0; q875 < rp75t3[c[498]][c[319]]; q875++) {
            rp75t3[c[498]][q875][c[635]] = j1BM(rp75t3[c[498]][q875]);
        }
        j1E[c[31339]][-0x2] = window[c[31569]](rp75t3[c[498]]), window[c[12953]][c[31570]](-0x2);
    } else {
        var w1fgu2 = rp75t3 ? rp75t3[c[1815]] : '';
        window[c[31379]](0xa, c[31583] + w1fgu2), alert(c[31584] + w1fgu2);
    }
}, window[c[31569]] = function (v6khn) {
    return v6khn;
}, window[c[31585]] = function ($blcym, jzhvnk) {
    $blcym = $blcym || j1E[c[26793]][c[11981]], sendApi(j1E[c[31330]], c[31586], {
        'type': '4',
        'game_pkg': j1E[c[26799]],
        'server_id': $blcym
    }, jzhvnk);
}, window[c[31587]] = function (ow0_, xfgu2, cyml$, y0o$) {
    cyml$ = cyml$ || j1E[c[26793]][c[11981]], sendApi(j1E[c[31330]], c[31588], {
        'type': ow0_,
        'game_pkg': xfgu2,
        'server_id': cyml$
    }, y0o$);
}, window[c[31589]] = function (jsvhz, $amcl) {
    sendApi(j1E[c[31330]], c[31590], { 'game_pkg': jsvhz }, $amcl);
}, window[c[31591]] = function (mb9l) {
    if (mb9l) {
        if (mb9l[c[635]] == 0x1) {
            if (mb9l[c[31592]] == 0x1) return 0x2;else return 0x1;
        } else return mb9l[c[635]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[c[31593]] = function (m$abcl, aml$) {
    j1E[c[31594]] = {
        'step': m$abcl,
        'server_id': aml$
    };
    var gw2u1 = this;
    jM1BE({ 'title': c[31595] }), sendApi(j1E[c[31330]], c[31596], {
        'partner_id': j1E[c[24878]],
        'uid': j1E[c[26798]],
        'game_pkg': j1E[c[26799]],
        'server_id': aml$,
        'platform': j1E[c[26761]],
        'platform_uid': j1E[c[26800]],
        'check_login_time': j1E[c[31448]],
        'check_login_sign': j1E[c[31447]],
        'version_name': j1E[c[31408]]
    }, jEM1B, jBE1, jEM, function (d8rq6t) {
        return d8rq6t[c[1815]] == c[10296] || d8rq6t[c[608]] == c[31597] || d8rq6t[c[608]] == c[31598];
    });
}, window[c[31599]] = function (sf21x) {
    var o4_cy0 = this;
    if (sf21x && sf21x[c[1815]] === c[10296] && sf21x[c[498]]) {
        var dkzhv = j1E[c[26793]];
        dkzhv[c[31600]] = j1E[c[31340]], dkzhv[c[11964]] = String(sf21x[c[498]][c[31601]]), dkzhv[c[26763]] = parseInt(sf21x[c[498]][c[1403]]);
        if (sf21x[c[498]][c[26762]]) dkzhv[c[26762]] = parseInt(sf21x[c[498]][c[26762]]);else dkzhv[c[26762]] = parseInt(sf21x[c[498]][c[11981]]);
        dkzhv[c[31602]] = 0x0, dkzhv[c[4778]] = j1E[c[31488]], dkzhv[c[31603]] = sf21x[c[498]][c[31604]], dkzhv[c[31605]] = sf21x[c[498]][c[31605]];
        if (sf21x[c[498]][c[26766]]) dkzhv[c[26766]] = parseInt(sf21x[c[498]][c[26766]]);
        console[c[453]](c[31606] + JSON[c[4764]](dkzhv[c[31605]])), j1E[c[1177]] == 0x1 && dkzhv[c[31605]] && dkzhv[c[31605]][c[31607]] == 0x1 && (j1E[c[31608]] = 0x1, window[c[31218]][c[676]][c[31609]]()), jEBM1();
    } else {
        if (j1E[c[31594]][c[7440]] >= 0x3) {
            var bm$ly = sf21x ? sf21x[c[1815]] : '';
            window[c[31379]](0xc, c[31610] + bm$ly), jEM(JSON[c[4764]](sf21x)), window[c[31358]](c[31611] + bm$ly);
        } else sendApi(j1E[c[31330]], c[31426], {
            'platform': j1E[c[31328]],
            'partner_id': j1E[c[24878]],
            'token': j1E[c[31424]],
            'game_pkg': j1E[c[26799]],
            'deviceId': j1E[c[26801]],
            'scene': c[31427] + j1E[c[31338]]
        }, function (c$byo) {
            if (!c$byo || c$byo[c[1815]] != c[10296]) {
                window[c[31358]](c[31444] + c$byo && c$byo[c[1815]]);
                return;
            }
            j1E[c[31447]] = String(c$byo[c[11964]]), j1E[c[31448]] = String(c$byo[c[1403]]), setTimeout(function () {
                jEMB1(j1E[c[31594]][c[7440]] + 0x1, j1E[c[31594]][c[11981]]);
            }, 0x5dc);
        }, jBE1, jEM, function (_o4ewu) {
            return _o4ewu[c[1815]] == c[10296] || _o4ewu[c[1815]] == c[27138];
        });
    }
}, window[c[31612]] = function () {
    ServerLoading[c[676]][c[31480]](j1E[c[1177]]), window[c[31347]] = !![], window[c[31244]]();
}, window[c[31243]] = function () {
    if (window[c[31242]] && window[c[31250]] && window[c[31348]] && window[c[31349]] && window[c[31350]] && window[c[31352]]) {
        if (!window[c[31113]][c[676]]) {
            console[c[453]](c[31613] + window[c[31113]][c[676]]);
            var s2xf1j = wx[c[26463]](),
                e4ou_w = s2xf1j[c[1329]] ? s2xf1j[c[1329]] : 0x0,
                k8t6qd = {
                'cdn': window[c[31206]][c[4778]],
                'spareCdn': window[c[31206]][c[26482]],
                'newRegister': window[c[31206]][c[1177]],
                'wxPC': window[c[31206]][c[26484]],
                'wxIOS': window[c[31206]][c[1626]],
                'wxAndroid': window[c[31206]][c[11805]],
                'wxParam': {
                    'limitLoad': window[c[31206]][c[31289]],
                    'benchmarkLevel': window[c[31206]][c[31290]],
                    'wxFrom': window[c[1076]][c[333]] == c[31614] ? 0x1 : 0x0,
                    'wxSDKVersion': window[c[31222]]
                },
                'configType': window[c[31206]][c[12500]],
                'exposeType': window[c[31206]][c[1267]],
                'scene': e4ou_w
            };
            new window[c[31113]](k8t6qd, window[c[31206]][c[630]], window[c[31323]]);
        }
    }
}, window[c[31244]] = function () {
    if (window[c[31242]] && window[c[31250]] && window[c[31348]] && window[c[31349]] && window[c[31350]] && window[c[31352]] && window[c[31347]] && window[c[31351]]) {
        jM1EB();
        if (!jEB1) {
            jEB1 = !![];
            if (!window[c[31113]][c[676]]) window[c[31243]]();
            var kqt6d8 = 0x0,
                nfxjvs = wx[c[31615]]();
            nfxjvs && (window[c[31206]][c[31285]] && (kqt6d8 = nfxjvs[c[840]]), console[c[608]](c[31616] + nfxjvs[c[840]] + c[31617] + nfxjvs[c[1842]] + c[31618] + nfxjvs[c[1844]] + c[31619] + nfxjvs[c[1843]] + c[31620] + nfxjvs[c[705]] + c[31621] + nfxjvs[c[706]]));
            var gue_4 = {};
            for (const eguw21 in j1E[c[26793]]) {
                gue_4[eguw21] = j1E[c[26793]][eguw21];
            }
            var cyb4o = {
                'channel': window[c[31206]][c[26797]],
                'account': window[c[31206]][c[26798]],
                'userId': window[c[31206]][c[19891]],
                'cdn': window[c[31206]][c[4778]],
                'data': window[c[31206]][c[498]],
                'package': window[c[31206]][c[489]],
                'newRegister': window[c[31206]][c[1177]],
                'pkgName': window[c[31206]][c[26799]],
                'partnerId': window[c[31206]][c[24878]],
                'platform_uid': window[c[31206]][c[26800]],
                'deviceId': window[c[31206]][c[26801]],
                'selectedServer': gue_4,
                'configType': window[c[31206]][c[12500]],
                'exposeType': window[c[31206]][c[1267]],
                'debugUsers': window[c[31206]][c[12906]],
                'wxMenuTop': kqt6d8,
                'wxShield': window[c[31206]][c[1291]],
                'wx_channel': window[c[31206]][c[26938]]
            };
            if (window[c[31490]]) for (var u1ew in window[c[31490]]) {
                cyb4o[u1ew] = window[c[31490]][u1ew];
            }
            window[c[31113]][c[676]][c[26815]](cyb4o);
            if (j1E[c[26793]] && j1E[c[26793]][c[11981]]) localStorage[c[1007]](c[31450] + j1E[c[26799]] + j1E[c[26798]], j1E[c[26793]][c[11981]]);
        }
    } else console[c[608]](c[31622] + window[c[31242]] + c[31623] + window[c[31250]] + c[31624] + window[c[31348]] + c[31625] + window[c[31349]] + c[31626] + window[c[31350]] + c[31627] + window[c[31352]] + c[31628] + window[c[31347]] + c[31629] + window[c[31351]]);
};