var u = wx.$x;
import xba from '../xxaxxx/x7xx.js';
window[u[1]] = { 'wxVersion': window[u[2]][u[3]] }, window[u[4]] = ![], window[u[5]] = 0x1, window[u[6]] = 0x1, window[u[7]] = !![], window[u[8]] = !![], window['x1T$J69'] = '', window[u[9]] = ![], window[u[10]] = {
    'base_cdn': u[11],
    'cdn': u[11]
}, x169[u[12]] = {}, x169[u[13]] = '0', x169[u[14]] = window[u[1]][u[15]], x169[u[16]] = '', x169['os'] = '1', x169[u[17]] = u[18], x169[u[19]] = u[20], x169[u[21]] = u[22], x169[u[23]] = u[24], x169[u[25]] = u[26], x169[u[27]] = '1', x169[u[28]] = '', x169[u[29]] = '', x169[u[30]] = 0x0, x169[u[31]] = {}, x169[u[32]] = parseInt(x169[u[27]]), x169[u[33]] = x169[u[27]], x169[u[34]] = {}, x169['x1$6'] = u[35], x169[u[36]] = ![], x169[u[37]] = u[38], x169[u[39]] = Date[u[40]](), x169[u[41]] = u[42], x169[u[43]] = '_a', x169[u[44]] = 0x2, x169[u[45]] = 0x7c1, x169[u[15]] = window[u[1]][u[15]], x169[u[46]] = ![], x169[u[47]] = ![], x169[u[48]] = ![], x169[u[49]] = ![], window[u[50]] = 0x5, window[u[51]] = ![], window[u[52]] = ![], window[u[53]] = ![], window[u[54]] = ![], window[u[55]] = ![], window[u[56]] = ![], window[u[57]] = ![], window[u[58]] = ![], window[u[59]] = ![], window[u[60]] = null, window[u[61]] = function (eb0hkw) {
    console[u[62]](u[61], eb0hkw), wx[u[63]]({}), wx[u[64]]({
        'title': u[65],
        'content': eb0hkw,
        'success'(o5xs) {
            if (o5xs[u[66]]) console[u[62]](u[67]);else o5xs[u[68]] && console[u[62]](u[69]);
        }
    });
}, window['x1$J69'] = function (imos4x) {
    console[u[62]](u[70], imos4x), x1$69J(), wx[u[64]]({
        'title': u[65],
        'content': imos4x,
        'confirmText': u[71],
        'cancelText': u[72],
        'success'(wbe10k) {
            if (wbe10k[u[66]]) window['x16$']();else wbe10k[u[68]] && (console[u[62]](u[73]), wx[u[74]]({}));
        }
    });
}, window[u[75]] = function (mox4is) {
    console[u[62]](u[75], mox4is), wx[u[64]]({
        'title': u[65],
        'content': mox4is,
        'confirmText': u[76],
        'showCancel': ![],
        'complete'(cvund) {
            console[u[62]](u[73]), wx[u[74]]({});
        }
    });
}, window['x1$J96'] = ![], window['x1$6J9'] = function (m4sixg) {
    window['x1$J96'] = !![], wx[u[77]](m4sixg);
}, window['x1$69J'] = function () {
    window['x1$J96'] && (window['x1$J96'] = ![], wx[u[63]]({}));
}, window['x1$9J6'] = function (xoszm5) {
    window[u[78]][u[79]]['x1$9J6'](xoszm5);
}, window[u[80]] = function (lf9cj, e0kwhb) {
    xba[u[80]](lf9cj, function (y89lf7) {
        y89lf7 && y89lf7[u[81]] ? y89lf7[u[81]][u[82]] == 0x1 ? e0kwhb(!![]) : (e0kwhb(![]), console[u[83]](u[84] + y89lf7[u[81]][u[85]])) : console[u[62]](u[80], y89lf7);
    });
}, window['x1$96J'] = function (oxs5) {
    console[u[62]](u[86], oxs5);
}, window['x1$69'] = function (m52sz) {}, window['x1$96'] = function (y7f8l9, sm4g, igudv) {}, window['x1$9'] = function (djuc) {
    console[u[62]](u[87], djuc), window[u[78]][u[79]][u[88]](), window[u[78]][u[79]][u[89]](), window[u[78]][u[79]][u[90]]();
}, window['x19$'] = function (jnl9) {
    window[u[91]](0xe, u[92] + jnl9), window['x1$J69'](u[93]);
    var whe0 = {
        'id': window[u[10]][u[94]],
        'role': window[u[10]][u[95]],
        'level': window[u[10]][u[96]],
        'account': window[u[10]][u[97]],
        'version': window[u[10]][u[45]],
        'cdn': window[u[10]][u[98]],
        'pkgName': window[u[10]][u[28]],
        'gamever': window[u[2]][u[3]],
        'serverid': window[u[10]][u[34]] ? window[u[10]][u[34]][u[99]] : 0x0,
        'systemInfo': window[u[100]],
        'error': u[101],
        'stack': jnl9 ? jnl9 : u[93]
    },
        fnjcl9 = JSON[u[102]](whe0);
    console[u[103]](u[104] + fnjcl9), window['x1$6'](fnjcl9);
}, window[u[91]] = function (ufvnjc, $9yl87) {
    sendApi(x169[u[21]], u[105], {
        'game_pkg': x169[u[28]],
        'partner_id': x169[u[27]],
        'server_id': x169[u[34]] && x169[u[34]][u[99]] > 0x0 ? x169[u[34]][u[99]] : 0x0,
        'uid': x169[u[97]] > 0x0 ? x169[u[97]] : 0x0,
        'type': ufvnjc,
        'info': $9yl87
    });
}, window['x16$9'] = function (wkeh0b) {
    var wt3kb1 = JSON[u[106]](wkeh0b);
    wt3kb1[u[107]] = window[u[2]][u[3]], wt3kb1[u[108]] = window[u[10]][u[34]] ? window[u[10]][u[34]][u[99]] : 0x0, wt3kb1[u[100]] = window[u[100]];
    var fcv = JSON[u[102]](wt3kb1);
    console[u[103]](u[109] + fcv), window['x1$6'](fcv);
}, window['x169$'] = function (g4nduv, ug4ndv) {
    var flc8 = {
        'id': window[u[10]][u[94]],
        'role': window[u[10]][u[95]],
        'level': window[u[10]][u[96]],
        'account': window[u[10]][u[97]],
        'version': window[u[10]][u[45]],
        'cdn': window[u[10]][u[98]],
        'pkgName': window[u[10]][u[28]],
        'gamever': window[u[2]][u[3]],
        'serverid': window[u[10]][u[34]] ? window[u[10]][u[34]][u[99]] : 0x0,
        'systemInfo': window[u[100]],
        'error': g4nduv,
        'stack': ug4ndv
    },
        uvdng = JSON[u[102]](flc8);
    console[u[110]](u[111] + uvdng), window['x1$6'](uvdng);
}, window['x1$6'] = function (x5szo) {
    if (window[u[10]][u[112]] == u[113]) return;
    var mxoszi = x169['x1$6'] + u[114] + x169[u[97]];
    wx[u[115]]({
        'url': mxoszi,
        'method': u[116],
        'data': x5szo,
        'header': {
            'content-type': u[117],
            'cache-control': u[118]
        },
        'success': function (x4si) {
            DEBUG && console[u[62]](u[119], mxoszi, x5szo, x4si);
        },
        'fail': function (fl97c) {
            DEBUG && console[u[62]](u[119], mxoszi, x5szo, fl97c);
        },
        'complete': function () {}
    });
}, window[u[120]] = function () {
    function bt3kw() {
        return ((0x1 + Math[u[121]]()) * 0x10000 | 0x0)[u[122]](0x10)[u[123]](0x1);
    }
    return bt3kw() + bt3kw() + '-' + bt3kw() + '-' + bt3kw() + '-' + bt3kw() + '+' + bt3kw() + bt3kw() + bt3kw();
}, window['x16$'] = function () {
    console[u[62]](u[124]);
    var lf79c = xba[u[125]]();
    x169[u[33]] = lf79c[u[126]], x169[u[32]] = lf79c[u[126]], x169[u[27]] = lf79c[u[126]], x169[u[28]] = lf79c[u[127]];
    var zt65o2 = { 'game_ver': x169[u[14]] };
    x169[u[29]] = this[u[120]](), x1$6J9({ 'title': u[128] }), xba[u[129]](zt65o2, this['x19$6'][u[130]](this));
}, window['x19$6'] = function (k13w0b) {
    var pa_ = k13w0b[u[131]];
    sdkInitRes = k13w0b, console[u[62]](u[132] + pa_ + u[133] + (pa_ == 0x1) + u[134] + k13w0b[u[3]] + u[135] + window[u[1]][u[15]]);
    if (!k13w0b[u[3]] || window['x1TJ9$6'](window[u[1]][u[15]], k13w0b[u[3]]) < 0x0) console[u[62]](u[136]), x169[u[19]] = u[137], x169[u[21]] = u[138], x169[u[23]] = u[139], x169[u[98]] = u[140], x169[u[141]] = u[142], x169[u[143]] = 'xc', x169[u[46]] = ![];else window['x1TJ9$6'](window[u[1]][u[15]], k13w0b[u[3]]) == 0x0 ? (console[u[62]](u[144]), x169[u[19]] = u[20], x169[u[21]] = u[22], x169[u[23]] = u[24], x169[u[98]] = u[145], x169[u[141]] = u[142], x169[u[143]] = u[146], x169[u[46]] = !![]) : (console[u[62]](u[147]), x169[u[19]] = u[20], x169[u[21]] = u[22], x169[u[23]] = u[24], x169[u[98]] = u[145], x169[u[141]] = u[142], x169[u[143]] = u[146], x169[u[46]] = ![]);
    x169[u[30]] = config[u[148]] ? config[u[148]] : 0x0, this['x1J6$9'](), this['x1J69$'](), window[u[149]] = 0x5, x1$6J9({ 'title': u[150] }), xba[u[151]](this['x196$'][u[130]](this));
}, window[u[149]] = 0x5, window['x196$'] = function (k0weh, _hprq) {
    if (k0weh == 0x0 && _hprq && _hprq[u[152]]) {
        x169[u[153]] = _hprq[u[152]], x169[u[154]] = _hprq[u[154]];
        var szixmo = this;
        x1$6J9({ 'title': u[155] }), sendApi(x169[u[19]], u[156], {
            'platform': x169[u[17]],
            'partner_id': x169[u[27]],
            'token': _hprq[u[152]],
            'game_pkg': x169[u[28]],
            'deviceId': x169[u[29]],
            'scene': u[157] + x169[u[30]]
        }, this['x1J$69'][u[130]](this), x1J96, x19$);
    } else _hprq && _hprq[u[158]] && window[u[149]] > 0x0 && (_hprq[u[158]][u[159]](u[160]) != -0x1 || _hprq[u[158]][u[159]](u[161]) != -0x1 || _hprq[u[158]][u[159]](u[162]) != -0x1 || _hprq[u[158]][u[159]](u[163]) != -0x1 || _hprq[u[158]][u[159]](u[164]) != -0x1 || _hprq[u[158]][u[159]](u[165]) != -0x1) ? (window[u[149]]--, xba[u[151]](this['x196$'][u[130]](this))) : (window[u[91]](0x1, u[166] + k0weh + u[167] + (_hprq ? _hprq[u[158]] : '')), window['x169$'](u[168], JSON[u[102]]({
        'status': k0weh,
        'data': _hprq
    })), window['x1$J69'](u[169] + (_hprq && _hprq[u[158]] ? '，' + _hprq[u[158]] : '')));
}, window['x1J$69'] = function (wkt3b) {
    if (!wkt3b) {
        window[u[91]](0x2, u[170]), window['x169$'](u[171], u[172]), window['x1$J69'](u[173]);
        return;
    }
    if (wkt3b[u[82]] != u[174]) {
        window[u[91]](0x2, u[175] + wkt3b[u[82]]), window['x169$'](u[171], JSON[u[102]](wkt3b)), window['x1$J69'](u[176] + wkt3b[u[82]]);
        return;
    }
    if (wkt3b[u[177]] == 0x1) {
        window['x1$J69'](u[178]);
        return;
    }
    x169[u[179]] = String(wkt3b[u[97]]), x169[u[97]] = String(wkt3b[u[97]]), x169[u[180]] = String(wkt3b[u[180]]), x169[u[33]] = String(wkt3b[u[180]]), x169[u[181]] = String(wkt3b[u[181]]), x169[u[182]] = String(wkt3b[u[183]]), x169[u[184]] = String(wkt3b[u[185]]), x169[u[183]] = '';
    var c7l8f9 = this;
    x1$6J9({ 'title': u[186] });
    var cnvju = localStorage[u[187]](u[188] + x169[u[28]] + x169[u[97]]);
    if (cnvju && cnvju != '') {
        var giuv4 = Number(cnvju);
        c7l8f9[u[189]](giuv4);
    } else c7l8f9[u[190]]();
}, window[u[190]] = function () {
    var pqa_h = this;
    sendApi(x169[u[19]], u[191], {
        'partner_id': x169[u[27]],
        'uid': x169[u[97]],
        'version': x169[u[14]],
        'game_pkg': x169[u[28]],
        'device': x169[u[29]]
    }, pqa_h['x1J$96'][u[130]](pqa_h), x1J96, x19$);
}, window['x1J$96'] = function (m4xoi) {
    if (!m4xoi) {
        window[u[91]](0x3, u[192]), window['x1$J69'](u[192]);
        return;
    }
    if (m4xoi[u[82]] != u[174]) {
        window[u[91]](0x3, u[193] + m4xoi[u[82]]), window['x1$J69'](u[193] + m4xoi[u[82]]);
        return;
    }
    if (!m4xoi[u[81]] || m4xoi[u[81]][u[194]] == 0x0) {
        window[u[91]](0x3, u[195]), window['x1$J69'](u[196]);
        return;
    }
    this[u[197]](m4xoi);
}, window[u[189]] = function (d4xvgi) {
    var vnucd = this;
    sendApi(x169[u[19]], u[198], {
        'server_id': d4xvgi,
        'time': Date[u[40]]() / 0x3e8
    }, vnucd[u[199]][u[130]](vnucd), x1J96, x19$);
}, window[u[199]] = function (vfcn) {
    if (!vfcn) {
        window[u[91]](0x4, u[200]), this[u[190]]();
        return;
    }
    if (vfcn[u[82]] != u[174]) {
        window[u[91]](0x4, u[201] + vfcn[u[82]]), this[u[190]]();
        return;
    }
    if (!vfcn[u[81]] || vfcn[u[81]][u[194]] == 0x0) {
        window[u[91]](0x4, u[202]), this[u[190]]();
        return;
    }
    this[u[197]](vfcn);
}, window[u[197]] = function (xomsz5) {
    x169[u[203]] = xomsz5[u[204]] != undefined ? xomsz5[u[204]] : 0x0, x169[u[34]] = {
        'server_id': String(xomsz5[u[81]][0x0][u[99]]),
        'server_name': String(xomsz5[u[81]][0x0][u[205]]),
        'entry_ip': xomsz5[u[81]][0x0][u[206]],
        'entry_port': parseInt(xomsz5[u[81]][0x0][u[207]]),
        'status': x16J$(xomsz5[u[81]][0x0]),
        'start_time': xomsz5[u[81]][0x0][u[208]],
        'maintain_time': xomsz5[u[81]][0x0][u[209]] ? xomsz5[u[81]][0x0][u[209]] : '',
        'is_recommend': xomsz5[u[81]][0x0][u[210]],
        'cdn': x169[u[98]]
    }, this['x196J$'](), window[u[78]] && window[u[78]][u[79]][u[211]] && window[u[78]][u[79]][u[211]](sdkInitRes[u[212]], sdkInitRes[u[213]], sdkInitRes[u[214]], sdkInitRes[u[215]], sdkInitRes[u[216]]);
}, window['x196J$'] = function () {
    if (x169[u[203]] == 0x1) {
        var mx = x169[u[34]][u[217]];
        if (mx === -0x1 || mx === 0x0) {
            window[u[91]](0xf, u[218] + x169[u[34]]['id'] + u[219] + x169[u[34]][u[217]]), window['x1$J69'](mx === -0x1 ? u[220] : u[221]);
            return;
        }
        x19$J6(0x0, x169[u[34]][u[99]]), window[u[78]][u[79]][u[222]](x169[u[203]]);
    } else window[u[78]][u[79]][u[223]](), x1$69J();
    window[u[58]] = !![], window['x19J6$'](), window['x196$J']();
}, window['x1J6$9'] = function () {
    sendApi(x169[u[19]], u[224], {
        'game_pkg': x169[u[28]],
        'version_name': x169[u[143]]
    }, this[u[225]][u[130]](this), x1J96, x19$);
}, window[u[225]] = function (z5s2m) {
    if (!z5s2m) {
        window[u[91]](0x5, u[226]), window['x1$J69'](u[226]);
        return;
    }
    if (z5s2m[u[82]] != u[174]) {
        window[u[91]](0x5, u[227] + z5s2m[u[82]]), window['x1$J69'](u[227] + z5s2m[u[82]]);
        return;
    }
    if (!z5s2m[u[81]] || !z5s2m[u[81]][u[14]]) {
        window[u[91]](0x5, u[228] + (z5s2m[u[81]] && z5s2m[u[81]][u[14]])), window['x1$J69'](u[228] + (z5s2m[u[81]] && z5s2m[u[81]][u[14]]));
        return;
    }
    z5s2m[u[81]][u[229]] && z5s2m[u[81]][u[229]][u[194]] > 0xa && (x169[u[230]] = z5s2m[u[81]][u[229]], x169[u[98]] = z5s2m[u[81]][u[229]]), z5s2m[u[81]][u[14]] && (x169[u[45]] = z5s2m[u[81]][u[14]]), console[u[83]](u[231] + x169[u[45]] + u[232] + x169[u[143]]), window[u[56]] = !![], window['x19J6$'](), window['x196$J']();
}, window[u[233]], window['x1J69$'] = function () {
    sendApi(x169[u[19]], u[234], { 'game_pkg': x169[u[28]] }, this['x1J9$6'][u[130]](this), x1J96, x19$);
}, window['x1J9$6'] = function (wk61t) {
    if (wk61t && wk61t[u[82]] === u[174] && wk61t[u[81]]) {
        window[u[233]] = wk61t[u[81]];
        for (var jcnufv in wk61t[u[81]]) {
            x169[jcnufv] = wk61t[u[81]][jcnufv];
        }
        window[u[235]]();
    } else window[u[91]](0xb, u[236]), console[u[83]](u[237] + wk61t[u[82]]);
    window[u[57]] = !![], window['x196$J']();
}, window[u[235]] = function () {
    var e10kb = x169[u[46]] || x169[u[238]] && x169[u[238]] > 0x0;
    if (e10kb) {
        var j7c9 = x169[u[239]],
            kpbeh = j7c9 && j7c9[u[194]] == 0x9;
        kpbeh && (window[u[240]] = j7c9);
        var xm5zos = x169[u[241]],
            disg = xm5zos && xm5zos[u[242]]('#')[u[194]] == 0x4;
        disg && (window[u[243]] = xm5zos);
    }
}, window[u[244]] = function (ahp0, l7c89f, _haqrp, gis4dx, l7fcj, sz5x, dxi4v, soxm5, ndgujv, ktb31) {
    l7fcj = String(l7fcj);
    var ah0ebp = dxi4v,
        z2som = soxm5;
    x169[u[12]][l7fcj] = {
        'productid': l7fcj,
        'productname': ah0ebp,
        'productdesc': z2som,
        'roleid': ahp0,
        'rolename': l7c89f,
        'rolelevel': _haqrp,
        'price': sz5x,
        'callback': ndgujv
    }, sendApi(x169[u[23]], u[245], {
        'game_pkg': x169[u[28]],
        'server_id': x169[u[34]][u[99]],
        'server_name': x169[u[34]][u[205]],
        'level': _haqrp,
        'uid': x169[u[97]],
        'role_id': ahp0,
        'role_name': l7c89f,
        'product_id': l7fcj,
        'product_name': ah0ebp,
        'product_desc': z2som,
        'money': sz5x,
        'partner_id': x169[u[27]]
    }, toPayCallBack, x1J96, x19$);
}, window[u[246]] = function (mx5zos) {
    if (mx5zos && (mx5zos[u[247]] === 0xc8 || mx5zos[u[82]] == u[174])) {
        var nfcu = x169[u[12]][String(mx5zos[u[248]])];
        if (nfcu[u[249]]) nfcu[u[249]](mx5zos[u[248]], mx5zos[u[250]], -0x1);
        xba[u[251]]({
            'cpbill': mx5zos[u[250]],
            'productid': mx5zos[u[248]],
            'productname': nfcu[u[252]],
            'productdesc': nfcu[u[253]],
            'serverid': x169[u[34]][u[99]],
            'servername': x169[u[34]][u[205]],
            'roleid': nfcu[u[254]],
            'rolename': nfcu[u[255]],
            'rolelevel': nfcu[u[256]],
            'price': nfcu[u[257]],
            'extension': JSON[u[102]]({ 'cp_order_id': mx5zos[u[250]] })
        }, function (e0wk, nvjfc) {
            nfcu[u[249]] && e0wk == 0x0 && nfcu[u[249]](mx5zos[u[248]], mx5zos[u[250]], e0wk);
            console[u[83]](JSON[u[102]]({
                'type': u[258],
                'status': e0wk,
                'data': mx5zos,
                'role_name': nfcu[u[255]]
            }));
            if (e0wk === 0x0) {} else {
                if (e0wk === 0x1) {} else {
                    if (e0wk === 0x2) {}
                }
            }
        });
    } else {
        var kt1bw3 = mx5zos ? u[259] + mx5zos[u[247]] + u[260] + mx5zos[u[82]] + u[261] + mx5zos[u[83]] : u[262];
        window[u[91]](0xd, u[263] + kt1bw3), alert(kt1bw3);
    }
}, window['x1J96$'] = function () {}, window['x1$J9'] = function (ap_qe, duv4n, n9cl, gvn4d, udvnjc) {
    xba[u[264]](x169[u[34]][u[99]], x169[u[34]][u[205]] || x169[u[34]][u[99]], ap_qe, duv4n, n9cl), sendApi(x169[u[19]], u[265], {
        'game_pkg': x169[u[28]],
        'server_id': x169[u[34]][u[99]],
        'role_id': ap_qe,
        'uid': x169[u[97]],
        'role_name': duv4n,
        'role_type': gvn4d,
        'level': n9cl
    });
}, window['x1$9J'] = function (keb0hp, lc9j, msoix4, sxgd, cjnu, hbpae, cvdjun, tk31w6, jc9, ly7f9) {
    x169[u[94]] = keb0hp, x169[u[95]] = lc9j, x169[u[96]] = msoix4, xba[u[266]](x169[u[34]][u[99]], x169[u[34]][u[205]] || x169[u[34]][u[99]], keb0hp, lc9j, msoix4), sendApi(x169[u[19]], u[267], {
        'game_pkg': x169[u[28]],
        'server_id': x169[u[34]][u[99]],
        'role_id': keb0hp,
        'uid': x169[u[97]],
        'role_name': lc9j,
        'role_type': sxgd,
        'level': msoix4,
        'evolution': cjnu
    });
}, window['x1J$9'] = function (hwebk, v4dgu, ekwb0, t2w613, k0eh, duvn, _rhqpa, njf9cl, h_parq, mixs) {
    x169[u[94]] = hwebk, x169[u[95]] = v4dgu, x169[u[96]] = ekwb0, xba[u[268]](x169[u[34]][u[99]], x169[u[34]][u[205]] || x169[u[34]][u[99]], hwebk, v4dgu, ekwb0), sendApi(x169[u[19]], u[267], {
        'game_pkg': x169[u[28]],
        'server_id': x169[u[34]][u[99]],
        'role_id': hwebk,
        'uid': x169[u[97]],
        'role_name': v4dgu,
        'role_type': t2w613,
        'level': ekwb0,
        'evolution': k0eh
    });
}, window['x1J9$'] = function (szxoi) {}, window['x1$J'] = function (ewbhk0, fcljn) {
    xba[u[269]](u[269], { 'activity_id': fcljn }, function (aqr_ph) {
        ewbhk0 && ewbhk0(aqr_ph);
    });
}, window[u[270]] = function () {
    xba[u[270]]();
}, window[u[271]] = function () {
    xba[u[272]]();
}, window[u[273]] = function (lnc, vdgjnu, eb0pa, f9njlc, l9cjnf, pe0ahq, l79jf, w130kb) {
    w130kb = w130kb || x169[u[34]][u[99]], sendApi(x169[u[19]], u[274], {
        'phone': lnc,
        'role_id': vdgjnu,
        'uid': x169[u[97]],
        'game_pkg': x169[u[28]],
        'partner_id': x169[u[27]],
        'server_id': w130kb
    }, l79jf, 0x2, null, function () {
        return !![];
    });
}, window[u[275]] = function (x4msio) {
    window['x19$J'] = x4msio, window['x19$J'] && window['x1J$'] && (console[u[83]](u[276] + window['x1J$'][u[277]]), window['x19$J'](window['x1J$']), window['x1J$'] = null);
}, window['x19J$'] = function (p0ahb, t316, so25mz, gnvdu) {
    window[u[278]](u[279], {
        'game_pkg': window[u[10]][u[28]],
        'role_id': t316,
        'server_id': so25mz
    }, gnvdu);
}, window['x16$J9'] = function (xzsmo5, k16wt, jln9c) {
    function dnujc(mos25) {
        var b0wk13 = [],
            vg4n = [],
            p0heq = jln9c || window[u[2]][u[280]];
        for (var z62om5 in p0heq) {
            var ek0p = Number(z62om5);
            (!xzsmo5 || !xzsmo5[u[194]] || xzsmo5[u[159]](ek0p) != -0x1) && (vg4n[u[281]](p0heq[z62om5]), b0wk13[u[281]]([ek0p, 0x3]));
        }
        window['x1TJ9$6'](window[u[282]], u[283]) >= 0x0 ? (console[u[62]](u[284]), xba[u[285]] && xba[u[285]](vg4n, function (ujfnc) {
            console[u[62]](u[286]), console[u[62]](ujfnc);
            if (ujfnc && ujfnc[u[158]] == u[287]) for (var cfju9n in p0heq) {
                if (ujfnc[p0heq[cfju9n]] == u[288]) {
                    var ylf8 = Number(cfju9n);
                    for (var uvgjn = 0x0; uvgjn < b0wk13[u[194]]; uvgjn++) {
                        if (b0wk13[uvgjn][0x0] == ylf8) {
                            b0wk13[uvgjn][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['x1TJ9$6'](window[u[282]], u[289]) >= 0x0 ? wx[u[290]]({
                'withSubscriptions': !![],
                'success': function (rh_paq) {
                    var y$9l7 = rh_paq[u[291]][u[292]];
                    if (y$9l7) {
                        console[u[62]](u[293]), console[u[62]](y$9l7);
                        for (var uf9nc in p0heq) {
                            if (y$9l7[p0heq[uf9nc]] == u[288]) {
                                var dn4uv = Number(uf9nc);
                                for (var b1w3tk = 0x0; b1w3tk < b0wk13[u[194]]; b1w3tk++) {
                                    if (b0wk13[b1w3tk][0x0] == dn4uv) {
                                        b0wk13[b1w3tk][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[u[62]](b0wk13), k16wt && k16wt(b0wk13);
                    } else console[u[62]](u[294]), console[u[62]](rh_paq), console[u[62]](b0wk13), k16wt && k16wt(b0wk13);
                },
                'fail': function () {
                    console[u[62]](u[295]), console[u[62]](b0wk13), k16wt && k16wt(b0wk13);
                }
            }) : (console[u[62]](u[296] + window[u[282]]), console[u[62]](b0wk13), k16wt && k16wt(b0wk13));
        })) : (console[u[62]](u[297] + window[u[282]]), console[u[62]](b0wk13), k16wt && k16wt(b0wk13)), wx[u[298]](dnujc);
    }
    wx[u[299]](dnujc);
}, window['x16$9J'] = {
    'isSuccess': ![],
    'level': u[300],
    'isCharging': ![]
}, window['x16J$9'] = function (oxmiz) {
    wx[u[301]]({
        'success': function (jufc9n) {
            var mz5o2s = window['x16$9J'];
            mz5o2s[u[302]] = !![], mz5o2s[u[303]] = Number(jufc9n[u[303]])[u[304]](0x0), mz5o2s[u[305]] = jufc9n[u[305]], oxmiz && oxmiz(mz5o2s[u[302]], mz5o2s[u[303]], mz5o2s[u[305]]);
        },
        'fail': function (rqhp_a) {
            console[u[62]](u[306], rqhp_a[u[158]]);
            var eph_a = window['x16$9J'];
            oxmiz && oxmiz(eph_a[u[302]], eph_a[u[303]], eph_a[u[305]]);
        }
    });
}, window[u[307]] = function (kbw1t) {
    wx[u[307]]({
        'success': function (jgunvd) {
            kbw1t && kbw1t(!![], jgunvd);
        },
        'fail': function (mox5sz) {
            kbw1t && kbw1t(![], mox5sz);
        }
    });
}, window[u[308]] = function (wkbe) {
    if (wkbe) wx[u[308]](wkbe);
}, window[u[309]] = function (m4sgi) {
    wx[u[309]](m4sgi);
}, window[u[278]] = function (pheaq_, k30w1b, p0e, ea_hp, dnu4g, f8c9l, mo26z, l8yf7) {
    if (ea_hp == undefined) ea_hp = 0x1;
    wx[u[115]]({
        'url': pheaq_,
        'method': mo26z || u[310],
        'responseType': u[311],
        'data': k30w1b,
        'header': { 'content-type': l8yf7 || u[117] },
        'success': function (dg4i) {
            DEBUG && console[u[62]](u[312], pheaq_, info, dg4i);
            if (dg4i && dg4i[u[313]] == 0xc8) {
                var o62z = dg4i[u[81]];
                !f8c9l || f8c9l(o62z) ? p0e && p0e(o62z) : window[u[314]](pheaq_, k30w1b, p0e, ea_hp, dnu4g, f8c9l, dg4i);
            } else window[u[314]](pheaq_, k30w1b, p0e, ea_hp, dnu4g, f8c9l, dg4i);
        },
        'fail': function (mxs5o) {
            DEBUG && console[u[62]](u[315], pheaq_, info, mxs5o), window[u[314]](pheaq_, k30w1b, p0e, ea_hp, dnu4g, f8c9l, mxs5o);
        },
        'complete': function () {}
    });
}, window[u[314]] = function (whbek, j97cf, jvdn, osm52, nduc, m52ozs, cl879) {
    osm52 - 0x1 > 0x0 ? setTimeout(function () {
        window[u[278]](whbek, j97cf, jvdn, osm52 - 0x1, nduc, m52ozs);
    }, 0x3e8) : nduc && nduc(JSON[u[102]]({
        'url': whbek,
        'response': cl879
    }));
}, window[u[316]] = function ($879, i4duv, bewh0k, w0hbke, nvdjgu, pbh0e, xi4sd) {
    !bewh0k && (bewh0k = {});
    var ng4uvd = Math[u[317]](Date[u[40]]() / 0x3e8);
    bewh0k[u[185]] = ng4uvd, bewh0k[u[318]] = i4duv;
    var whebk = Object[u[319]](bewh0k)[u[320]](),
        b31wt = '',
        pe0kb = '';
    for (var lj9fc = 0x0; lj9fc < whebk[u[194]]; lj9fc++) {
        b31wt = b31wt + (lj9fc == 0x0 ? '' : '&') + whebk[lj9fc] + bewh0k[whebk[lj9fc]], pe0kb = pe0kb + (lj9fc == 0x0 ? '' : '&') + whebk[lj9fc] + '=' + encodeURIComponent(bewh0k[whebk[lj9fc]]);
    }
    b31wt = b31wt + x169[u[25]];
    var j9fcl7 = u[321] + md5(b31wt);
    send($879 + '?' + pe0kb + (pe0kb == '' ? '' : '&') + j9fcl7, null, w0hbke, nvdjgu, pbh0e, xi4sd || function (vuncj) {
        return vuncj[u[82]] == u[174];
    }, null, u[322]);
}, window['x16J9$'] = function (kphbe0, gixm4) {
    var nf9jl = 0x0;
    x169[u[34]] && (nf9jl = x169[u[34]][u[99]]), sendApi(x169[u[21]], u[323], {
        'partnerId': x169[u[27]],
        'gamePkg': x169[u[28]],
        'logTime': Math[u[317]](Date[u[40]]() / 0x3e8),
        'platformUid': x169[u[181]],
        'type': kphbe0,
        'serverId': nf9jl
    }, null, 0x2, null, function () {
        return !![];
    });
}, window['x169$J'] = function (cnjv) {
    sendApi(x169[u[19]], u[324], {
        'partner_id': x169[u[27]],
        'uid': x169[u[97]],
        'version': x169[u[14]],
        'game_pkg': x169[u[28]],
        'device': x169[u[29]]
    }, x169J$, x1J96, x19$);
}, window['x169J$'] = function (e1k0w) {
    if (e1k0w && e1k0w[u[82]] === u[174] && e1k0w[u[81]]) {
        e1k0w[u[81]][u[325]]({
            'id': -0x2,
            'name': u[326]
        }), e1k0w[u[81]][u[325]]({
            'id': -0x1,
            'name': u[327]
        }), x169[u[328]] = e1k0w[u[81]];
        if (window[u[329]]) window[u[329]][u[330]]();
    } else {
        x169[u[331]] = ![];
        var mgix = e1k0w ? e1k0w[u[82]] : '';
        window[u[91]](0x7, u[332] + mgix), window['x1$J69'](u[333] + mgix);
    }
}, window['x1$J6'] = function (o5msz) {
    sendApi(x169[u[19]], u[334], {
        'partner_id': x169[u[27]],
        'uid': x169[u[97]],
        'version': x169[u[14]],
        'game_pkg': x169[u[28]],
        'device': x169[u[29]]
    }, x1$6J, x1J96, x19$);
}, window['x1$6J'] = function (vcfun) {
    x169[u[335]] = ![];
    if (vcfun && vcfun[u[82]] === u[174] && vcfun[u[81]]) {
        for (var pqhae_ = 0x0; pqhae_ < vcfun[u[81]][u[194]]; pqhae_++) {
            vcfun[u[81]][pqhae_][u[217]] = x16J$(vcfun[u[81]][pqhae_]);
        }
        x169[u[31]][-0x1] = window[u[336]](vcfun[u[81]]), window[u[329]][u[337]](-0x1);
    } else {
        var paq = vcfun ? vcfun[u[82]] : '';
        window[u[91]](0x8, u[338] + paq), window['x1$J69'](u[339] + paq);
    }
}, window[u[340]] = function (somiz) {
    sendApi(x169[u[19]], u[334], {
        'partner_id': x169[u[27]],
        'uid': x169[u[97]],
        'version': x169[u[14]],
        'game_pkg': x169[u[28]],
        'device': x169[u[29]]
    }, somiz, x1J96, x19$);
}, window['x1J$6'] = function (y7$l98, ha0e) {
    sendApi(x169[u[19]], u[341], {
        'partner_id': x169[u[27]],
        'uid': x169[u[97]],
        'version': x169[u[14]],
        'game_pkg': x169[u[28]],
        'device': x169[u[29]],
        'server_group_id': ha0e
    }, x1J6$, x1J96, x19$);
}, window['x1J6$'] = function (uig4vd) {
    x169[u[335]] = ![];
    if (uig4vd && uig4vd[u[82]] === u[174] && uig4vd[u[81]] && uig4vd[u[81]][u[81]]) {
        var wkt613 = uig4vd[u[81]][u[342]],
            mz625 = [];
        for (var os2 = 0x0; os2 < uig4vd[u[81]][u[81]][u[194]]; os2++) {
            uig4vd[u[81]][u[81]][os2][u[217]] = x16J$(uig4vd[u[81]][u[81]][os2]), (mz625[u[194]] == 0x0 || uig4vd[u[81]][u[81]][os2][u[217]] != 0x0) && (mz625[mz625[u[194]]] = uig4vd[u[81]][u[81]][os2]);
        }
        x169[u[31]][wkt613] = window[u[336]](mz625), window[u[329]][u[337]](wkt613);
    } else {
        var c9un = uig4vd ? uig4vd[u[82]] : '';
        window[u[91]](0x9, u[343] + c9un), window['x1$J69'](u[344] + c9un);
    }
}, window[u[345]] = function (j9cnfu) {
    sendApi(x169[u[19]], u[346], {
        'partner_id': x169[u[27]],
        'uid': x169[u[97]],
        'version': x169[u[14]],
        'game_pkg': x169[u[28]],
        'device': x169[u[29]]
    }, reqServerRecommendCallBack, x1J96, x19$);
}, window[u[347]] = function (p0aqhe) {
    x169[u[335]] = ![];
    if (p0aqhe && p0aqhe[u[82]] === u[174] && p0aqhe[u[81]]) {
        for (var qepah0 = 0x0; qepah0 < p0aqhe[u[81]][u[194]]; qepah0++) {
            p0aqhe[u[81]][qepah0][u[217]] = x16J$(p0aqhe[u[81]][qepah0]);
        }
        x169[u[31]][-0x2] = window[u[336]](p0aqhe[u[81]]), window[u[329]][u[337]](-0x2);
    } else {
        var vcuf = p0aqhe ? p0aqhe[u[82]] : '';
        window[u[91]](0xa, u[348] + vcuf), alert(u[349] + vcuf);
    }
}, window[u[336]] = function (bhk0ep) {
    return bhk0ep;
}, window['x16$J'] = function (g4xdis, pqar) {
    g4xdis = g4xdis || x169[u[34]][u[99]], sendApi(x169[u[19]], u[350], {
        'type': '4',
        'game_pkg': x169[u[28]],
        'server_id': g4xdis
    }, pqar);
}, window[u[351]] = function (igxsm4, lfc87, ujgvdn, jnvucd) {
    ujgvdn = ujgvdn || x169[u[34]][u[99]], sendApi(x169[u[19]], u[352], {
        'type': igxsm4,
        'game_pkg': lfc87,
        'server_id': ujgvdn
    }, jnvucd);
}, window[u[353]] = function (k1bwe, vidx) {
    sendApi(x169[u[19]], u[354], { 'game_pkg': k1bwe }, vidx);
}, window['x16J$'] = function (b0hkp) {
    if (b0hkp) {
        if (b0hkp[u[217]] == 0x1) {
            if (b0hkp[u[355]] == 0x3) return 0x3;else return b0hkp[u[355]] == 0x1 ? 0x2 : 0x1;
        } else return b0hkp[u[217]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window['x19$J6'] = function (i4vx, msxgi4) {
    x169[u[356]] = {
        'step': i4vx,
        'server_id': msxgi4
    };
    var ufvc = this;
    x1$6J9({ 'title': u[357] }), sendApi(x169[u[19]], u[358], {
        'partner_id': x169[u[27]],
        'uid': x169[u[97]],
        'game_pkg': x169[u[28]],
        'server_id': msxgi4,
        'platform': x169[u[180]],
        'platform_uid': x169[u[181]],
        'check_login_time': x169[u[184]],
        'check_login_sign': x169[u[182]],
        'version_name': x169[u[143]]
    }, x19$6J, x1J96, x19$, function (m5xzs) {
        return m5xzs[u[82]] == u[174] || m5xzs[u[83]] == u[359] || m5xzs[u[83]] == u[360];
    });
}, window['x19$6J'] = function (gunj) {
    var pbke0h = this;
    if (gunj && gunj[u[82]] === u[174] && gunj[u[81]]) {
        var gsix4d = x169[u[34]];
        gsix4d[u[361]] = x169[u[32]], gsix4d[u[183]] = String(gunj[u[81]][u[362]]), gsix4d[u[39]] = parseInt(gunj[u[81]][u[185]]);
        if (gunj[u[81]][u[363]]) gsix4d[u[363]] = parseInt(gunj[u[81]][u[363]]);else gsix4d[u[363]] = parseInt(gunj[u[81]][u[99]]);
        gsix4d[u[364]] = 0x0, gsix4d[u[98]] = x169[u[230]], gsix4d[u[365]] = gunj[u[81]][u[366]], gsix4d[u[367]] = gunj[u[81]][u[367]];
        if (gunj[u[81]][u[368]]) gsix4d[u[368]] = parseInt(gunj[u[81]][u[368]]);
        console[u[62]](u[369] + JSON[u[102]](gsix4d[u[367]])), x169[u[203]] == 0x1 && gsix4d[u[367]] && gsix4d[u[367]][u[370]] == 0x1 && (x169[u[371]] = 0x1, window[u[78]][u[79]][u[372]]()), x19J$6();
    } else {
        if (x169[u[356]][u[373]] >= 0x3) {
            var dcjuvn = gunj ? gunj[u[82]] : '';
            window[u[91]](0xc, u[374] + dcjuvn), x19$(JSON[u[102]](gunj)), window['x1$J69'](u[375] + dcjuvn);
        } else sendApi(x169[u[19]], u[156], {
            'platform': x169[u[17]],
            'partner_id': x169[u[27]],
            'token': x169[u[153]],
            'game_pkg': x169[u[28]],
            'deviceId': x169[u[29]],
            'scene': u[157] + x169[u[30]]
        }, function (zmxso5) {
            if (!zmxso5 || zmxso5[u[82]] != u[174]) {
                window['x1$J69'](u[176] + zmxso5 && zmxso5[u[82]]);
                return;
            }
            x169[u[182]] = String(zmxso5[u[183]]), x169[u[184]] = String(zmxso5[u[185]]), setTimeout(function () {
                x19$J6(x169[u[356]][u[373]] + 0x1, x169[u[356]][u[99]]);
            }, 0x5dc);
        }, x1J96, x19$, function (ekb0ph) {
            return ekb0ph[u[82]] == u[174] || ekb0ph[u[82]] == u[376];
        });
    }
}, window['x19J$6'] = function () {
    ServerLoading[u[79]][u[222]](x169[u[203]]), window[u[51]] = !![], window['x196$J']();
}, window['x19J6$'] = function () {
    if (window[u[52]] && window[u[53]] && window[u[54]] && window[u[55]] && window[u[56]] && window[u[58]]) {
        if (!window[u[377]][u[79]]) {
            console[u[62]](u[378] + window[u[377]][u[79]]);
            var k61t3 = wx[u[379]](),
                k0b3w1 = k61t3[u[277]] ? k61t3[u[277]] : 0x0,
                z2ot56 = {
                'cdn': window[u[10]][u[98]],
                'spareCdn': window[u[10]][u[141]],
                'newRegister': window[u[10]][u[203]],
                'wxPC': window[u[10]][u[49]],
                'wxIOS': window[u[10]][u[47]],
                'wxAndroid': window[u[10]][u[48]],
                'wxParam': {
                    'limitLoad': window[u[10]]['x1T$J96'],
                    'benchmarkLevel': window[u[10]]['x1T$6J9'],
                    'wxFrom': window[u[2]][u[148]] == u[380] ? 0x1 : 0x0,
                    'wxSDKVersion': window[u[282]]
                },
                'configType': window[u[10]][u[41]],
                'exposeType': window[u[10]][u[43]],
                'scene': k0b3w1
            };
            new window[u[377]](z2ot56, window[u[10]][u[45]], window['x1T$J69']);
        }
    }
}, window['x196$J'] = function () {
    if (window[u[52]] && window[u[53]] && window[u[54]] && window[u[55]] && window[u[56]] && window[u[58]] && window[u[51]] && window[u[57]]) {
        x1$69J();
        if (!x19J6) {
            x19J6 = !![];
            if (!window[u[377]][u[79]]) window['x19J6$']();
            var gx4ids = 0x0,
                wt3k16 = wx[u[381]]();
            wt3k16 && (window[u[10]][u[382]] && (gx4ids = wt3k16[u[383]]), console[u[83]](u[384] + wt3k16[u[383]] + u[385] + wt3k16[u[386]] + u[387] + wt3k16[u[388]] + u[389] + wt3k16[u[390]] + u[391] + wt3k16[u[392]] + u[393] + wt3k16[u[394]]));
            var hap0eb = {};
            for (const b0kep in x169[u[34]]) {
                hap0eb[b0kep] = x169[u[34]][b0kep];
            }
            var cn9j = {
                'channel': window[u[10]][u[33]],
                'account': window[u[10]][u[97]],
                'userId': window[u[10]][u[179]],
                'cdn': window[u[10]][u[98]],
                'data': window[u[10]][u[81]],
                'package': window[u[10]][u[13]],
                'newRegister': window[u[10]][u[203]],
                'pkgName': window[u[10]][u[28]],
                'partnerId': window[u[10]][u[27]],
                'platform_uid': window[u[10]][u[181]],
                'deviceId': window[u[10]][u[29]],
                'selectedServer': hap0eb,
                'configType': window[u[10]][u[41]],
                'exposeType': window[u[10]][u[43]],
                'debugUsers': window[u[10]][u[37]],
                'wxMenuTop': gx4ids,
                'wxShield': window[u[10]][u[46]],
                'wx_channel': window[u[10]][u[154]]
            };
            if (window[u[233]]) for (var ehp0qa in window[u[233]]) {
                cn9j[ehp0qa] = window[u[233]][ehp0qa];
            }
            window[u[377]][u[79]][u[395]](cn9j);
            if (x169[u[34]] && x169[u[34]][u[99]]) localStorage[u[396]](u[188] + x169[u[28]] + x169[u[97]], x169[u[34]][u[99]]);
        }
    } else console[u[83]](u[397] + window[u[52]] + u[398] + window[u[53]] + u[399] + window[u[54]] + u[400] + window[u[55]] + u[401] + window[u[56]] + u[402] + window[u[58]] + u[403] + window[u[51]] + u[404] + window[u[57]]);
};