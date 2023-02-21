var B = wx.$z;
import zm7qn3i from '../zzabzzsdk/z7sdkz.js';
window[B[1]] = { 'wxVersion': window[B[2]][B[3]] }, window[B[4]] = ![], window[B[5]] = 0x1, window[B[6]] = 0x1, window[B[7]] = !![], window[B[8]] = !![], window[B[9]] = '', window[B[10]] = ![], window[B[11]] = {
    'base_cdn': B[12],
    'cdn': B[12]
}, z0JD[B[13]] = {}, z0JD[B[14]] = '0', z0JD[B[15]] = window[B[1]][B[16]], z0JD[B[17]] = '', z0JD['os'] = '1', z0JD[B[18]] = B[19], z0JD[B[20]] = B[21], z0JD[B[22]] = B[23], z0JD[B[24]] = B[25], z0JD[B[26]] = B[27], z0JD[B[28]] = '1', z0JD[B[29]] = '', z0JD[B[30]] = '', z0JD[B[31]] = 0x0, z0JD[B[32]] = {}, z0JD[B[33]] = parseInt(z0JD[B[28]]), z0JD[B[34]] = z0JD[B[28]], z0JD[B[35]] = {}, z0JD[B[36]] = B[37], z0JD[B[38]] = ![], z0JD[B[39]] = B[40], z0JD[B[41]] = Date[B[42]](), z0JD[B[43]] = B[44], z0JD[B[45]] = '_a', z0JD[B[46]] = '', z0JD[B[47]] = 0x2, z0JD[B[48]] = 0x7c1, z0JD[B[16]] = window[B[1]][B[16]], z0JD[B[49]] = ![], z0JD[B[50]] = ![], z0JD[B[51]] = ![], z0JD[B[52]] = ![], window[B[53]] = 0x5, window[B[54]] = ![], window[B[55]] = ![], window[B[56]] = ![], window[B[57]] = ![], window[B[58]] = ![], window[B[59]] = ![], window[B[60]] = ![], window[B[61]] = ![], window[B[62]] = ![], window[B[63]] = null, window[B[64]] = function (ezstao) {
    console[B[65]](B[64], ezstao), wx[B[66]]({}), wx[B[67]]({
        'title': B[68],
        'content': ezstao,
        'success'(b528_) {
            if (b528_[B[69]]) console[B[65]](B[70]);else b528_[B[71]] && console[B[65]](B[72]);
        }
    });
}, window[B[73]] = function (gp9xh1) {
    console[B[65]](B[74], gp9xh1), z00JDY(), wx[B[67]]({
        'title': B[68],
        'content': gp9xh1,
        'confirmText': B[75],
        'cancelText': B[76],
        'success'(kyb8r) {
            if (kyb8r[B[69]]) window[B[77]]();else kyb8r[B[71]] && (console[B[65]](B[78]), wx[B[79]]({}));
        }
    });
}, window[B[80]] = function (ybdkt) {
    console[B[65]](B[80], ybdkt), wx[B[67]]({
        'title': B[68],
        'content': ybdkt,
        'confirmText': B[81],
        'showCancel': ![],
        'complete'(l7vnim) {
            console[B[65]](B[78]), wx[B[79]]({});
        }
    });
}, window[B[82]] = ![], window[B[83]] = function (sex19a) {
    window[B[82]] = !![], wx[B[84]](sex19a);
}, window[B[85]] = function () {
    window[B[82]] && (window[B[82]] = ![], wx[B[66]]({}));
}, window[B[86]] = function (tzeoa) {
    window[B[87]][B[88]][B[86]](tzeoa);
}, window[B[89]] = function (l37mni, dyotk) {
    zm7qn3i[B[89]](l37mni, function (nvli7) {
        nvli7 && nvli7[B[90]] ? nvli7[B[90]][B[91]] == 0x1 ? dyotk(!![]) : (dyotk(![]), console[B[92]](B[93] + nvli7[B[90]][B[94]])) : console[B[65]](B[89], nvli7);
    });
}, window[B[95]] = function (u05w_2) {
    console[B[65]](B[96], u05w_2);
}, window[B[97]] = function (xtsaze) {}, window[B[98]] = function (otybdk, rby8, ivl7nf) {}, window[B[99]] = function (nq7m) {
    console[B[65]](B[100], nq7m), window[B[87]][B[88]][B[101]](), window[B[87]][B[88]][B[102]](), window[B[87]][B[88]][B[103]](), window[B[104]]();
}, window[B[105]] = function (k8byrd) {
    window[B[106]](0xe, B[107] + k8byrd), window[B[73]](B[108]);
    var _wr2u5 = {
        'id': window[B[11]][B[109]],
        'role': window[B[11]][B[110]],
        'level': window[B[11]][B[111]],
        'account': window[B[11]][B[112]],
        'version': window[B[11]][B[48]],
        'cdn': window[B[11]][B[113]],
        'pkgName': window[B[11]][B[29]],
        'gamever': window[B[2]][B[3]],
        'serverid': window[B[11]][B[35]] ? window[B[11]][B[35]][B[114]] : 0x0,
        'systemInfo': window[B[115]],
        'error': B[116],
        'stack': k8byrd ? k8byrd : B[108]
    },
        zstxae = JSON[B[117]](_wr2u5);
    console[B[118]](B[119] + zstxae), window[B[36]](zstxae);
}, window[B[106]] = function (zaxets, aotzes) {
    sendApi(z0JD[B[22]], B[120], {
        'game_pkg': z0JD[B[29]],
        'partner_id': z0JD[B[28]],
        'server_id': z0JD[B[35]] && z0JD[B[35]][B[114]] > 0x0 ? z0JD[B[35]][B[114]] : 0x0,
        'uid': z0JD[B[112]] > 0x0 ? z0JD[B[112]] : 0x0,
        'type': zaxets,
        'info': aotzes
    });
}, window[B[121]] = function (odtkb) {
    var f4l6vn = JSON[B[122]](odtkb);
    f4l6vn[B[123]] = window[B[2]][B[3]], f4l6vn[B[124]] = window[B[11]][B[35]] ? window[B[11]][B[35]][B[114]] : 0x0, f4l6vn[B[115]] = window[B[115]];
    var _uwr = JSON[B[117]](f4l6vn);
    console[B[118]](B[125] + _uwr), window[B[36]](_uwr);
}, window[B[126]] = function (i7fvnl, a1h9x) {
    var h1gp94 = {
        'id': window[B[11]][B[109]],
        'role': window[B[11]][B[110]],
        'level': window[B[11]][B[111]],
        'account': window[B[11]][B[112]],
        'version': window[B[11]][B[48]],
        'cdn': window[B[11]][B[113]],
        'pkgName': window[B[11]][B[29]],
        'gamever': window[B[2]][B[3]],
        'serverid': window[B[11]][B[35]] ? window[B[11]][B[35]][B[114]] : 0x0,
        'systemInfo': window[B[115]],
        'error': i7fvnl,
        'stack': a1h9x
    },
        l7mvni = JSON[B[117]](h1gp94);
    console[B[127]](B[128] + l7mvni), window[B[36]](l7mvni);
}, window[B[36]] = function (bktydo) {
    if (window[B[11]][B[129]] == B[130]) return;
    var xe9a1s = z0JD[B[36]] + B[131] + z0JD[B[112]];
    wx[B[132]]({
        'url': xe9a1s,
        'method': B[133],
        'data': bktydo,
        'header': {
            'content-type': B[134],
            'cache-control': B[135]
        },
        'success': function (mi73l) {
            DEBUG && console[B[65]](B[136], xe9a1s, bktydo, mi73l);
        },
        'fail': function (p4gfv6) {
            DEBUG && console[B[65]](B[136], xe9a1s, bktydo, p4gfv6);
        },
        'complete': function () {}
    });
}, window[B[137]] = function () {
    function rdb8k() {
        return ((0x1 + Math[B[138]]()) * 0x10000 | 0x0)[B[139]](0x10)[B[140]](0x1);
    }
    return rdb8k() + rdb8k() + '-' + rdb8k() + '-' + rdb8k() + '-' + rdb8k() + '+' + rdb8k() + rdb8k() + rdb8k();
}, window[B[77]] = function () {
    console[B[65]](B[141]);
    var estoaz = zm7qn3i[B[142]]();
    z0JD[B[34]] = estoaz[B[143]], z0JD[B[33]] = estoaz[B[143]], z0JD[B[28]] = estoaz[B[143]], z0JD[B[29]] = estoaz[B[144]];
    var in73 = { 'game_ver': z0JD[B[15]] };
    z0JD[B[30]] = this[B[137]](), z00JYD({ 'title': B[145] }), zm7qn3i[B[146]](in73, this[B[147]][B[148]](this));
}, window[B[147]] = function (n6f4l) {
    var dzaet = n6f4l[B[149]];
    sdkInitRes = n6f4l, console[B[65]](B[150] + dzaet + B[151] + (dzaet == 0x1) + B[152] + n6f4l[B[3]] + B[153] + window[B[1]][B[16]]);
    if (!n6f4l[B[3]] || window[B[154]](window[B[1]][B[16]], n6f4l[B[3]]) < 0x0) console[B[65]](B[155]), z0JD[B[20]] = B[156], z0JD[B[22]] = B[157], z0JD[B[24]] = B[158], z0JD[B[113]] = B[159], z0JD[B[160]] = B[161], z0JD[B[162]] = 'fj', z0JD[B[49]] = ![];else window[B[154]](window[B[1]][B[16]], n6f4l[B[3]]) == 0x0 ? (console[B[65]](B[163]), z0JD[B[20]] = B[21], z0JD[B[22]] = B[23], z0JD[B[24]] = B[25], z0JD[B[113]] = B[164], z0JD[B[160]] = B[161], z0JD[B[162]] = B[165], z0JD[B[49]] = !![]) : (console[B[65]](B[166]), z0JD[B[20]] = B[21], z0JD[B[22]] = B[23], z0JD[B[24]] = B[25], z0JD[B[113]] = B[164], z0JD[B[160]] = B[161], z0JD[B[162]] = B[165], z0JD[B[49]] = ![]);
    z0JD[B[31]] = config[B[167]] ? config[B[167]] : 0x0, this[B[168]](), this[B[169]](), window[B[170]] = 0x5, z00JYD({ 'title': B[171] }), zm7qn3i[B[172]](this[B[173]][B[148]](this));
}, window[B[170]] = 0x5, window[B[173]] = function (vfln67, _u520) {
    if (vfln67 == 0x0 && _u520 && _u520[B[174]]) {
        z0JD[B[175]] = _u520[B[174]], z0JD[B[176]] = _u520[B[176]], z0JD[B[177]] = _u520[B[177]], z0JD[B[178]] = _u520[B[178]], z0JD[B[179]] = _u520[B[179]];
        var ex1s = this;
        z00JYD({ 'title': B[180] }), sendApi(z0JD[B[20]], B[181], {
            'platform': z0JD[B[18]],
            'partner_id': z0JD[B[28]],
            'token': _u520[B[174]],
            'game_pkg': z0JD[B[29]],
            'deviceId': z0JD[B[30]],
            'scene': B[182] + z0JD[B[31]]
        }, this[B[183]][B[148]](this), z0YDJ, z0D0);
    } else _u520 && _u520[B[184]] && window[B[170]] > 0x0 && (_u520[B[184]][B[185]](B[186]) != -0x1 || _u520[B[184]][B[185]](B[187]) != -0x1 || _u520[B[184]][B[185]](B[188]) != -0x1 || _u520[B[184]][B[185]](B[189]) != -0x1 || _u520[B[184]][B[185]](B[190]) != -0x1 || _u520[B[184]][B[185]](B[191]) != -0x1) ? (window[B[170]]--, zm7qn3i[B[172]](this[B[173]][B[148]](this))) : (window[B[106]](0x1, B[192] + vfln67 + B[193] + (_u520 ? _u520[B[184]] : '')), window[B[126]](B[194], JSON[B[117]]({
        'status': vfln67,
        'data': _u520
    })), window[B[73]](B[195] + (_u520 && _u520[B[184]] ? '，' + _u520[B[184]] : '')));
}, window[B[183]] = function (kdo8yb) {
    if (!kdo8yb) {
        window[B[106]](0x2, B[196]), window[B[126]](B[197], B[198]), window[B[73]](B[199]);
        return;
    }
    if (kdo8yb[B[91]] != B[200]) {
        window[B[106]](0x2, B[201] + kdo8yb[B[91]]), window[B[126]](B[197], JSON[B[117]](kdo8yb)), window[B[73]](B[202] + kdo8yb[B[91]]);
        return;
    }
    if (kdo8yb[B[203]] == 0x1) {
        window[B[73]](B[204]);
        return;
    }
    z0JD[B[205]] = String(kdo8yb[B[112]]), z0JD[B[112]] = String(kdo8yb[B[112]]), z0JD[B[206]] = String(kdo8yb[B[206]]), z0JD[B[34]] = String(kdo8yb[B[206]]), z0JD[B[207]] = String(kdo8yb[B[207]]), z0JD[B[208]] = String(kdo8yb[B[209]]), z0JD[B[210]] = String(kdo8yb[B[211]]), z0JD[B[209]] = '';
    var kdyo = this;
    z00JYD({ 'title': B[212] });
    var g64h1 = localStorage[B[213]](B[214] + z0JD[B[29]] + z0JD[B[112]]);
    if (g64h1 && g64h1 != '') {
        var y8_r = Number(g64h1);
        kdyo[B[215]](y8_r);
    } else kdyo[B[216]]();
}, window[B[216]] = function () {
    var ex9sz = this;
    sendApi(z0JD[B[20]], B[217], {
        'partner_id': z0JD[B[28]],
        'uid': z0JD[B[112]],
        'version': z0JD[B[15]],
        'game_pkg': z0JD[B[29]],
        'device': z0JD[B[30]]
    }, ex9sz[B[218]][B[148]](ex9sz), z0YDJ, z0D0);
}, window[B[218]] = function ($m73qi) {
    if (!$m73qi) {
        window[B[106]](0x3, B[219]), window[B[73]](B[219]);
        return;
    }
    if ($m73qi[B[91]] != B[200]) {
        window[B[106]](0x3, B[220] + $m73qi[B[91]]), window[B[73]](B[220] + $m73qi[B[91]]);
        return;
    }
    if (!$m73qi[B[90]] || $m73qi[B[90]][B[221]] == 0x0) {
        window[B[106]](0x3, B[222]), window[B[73]](B[223]);
        return;
    }
    this[B[224]]($m73qi);
}, window[B[215]] = function (gxh91p) {
    var ax1e9s = this;
    sendApi(z0JD[B[20]], B[225], {
        'server_id': gxh91p,
        'time': Date[B[42]]() / 0x3e8
    }, ax1e9s[B[226]][B[148]](ax1e9s), z0YDJ, z0D0);
}, window[B[226]] = function (jqi3m$) {
    if (!jqi3m$) {
        window[B[106]](0x4, B[227]), this[B[216]]();
        return;
    }
    if (jqi3m$[B[91]] != B[200]) {
        window[B[106]](0x4, B[228] + jqi3m$[B[91]]), this[B[216]]();
        return;
    }
    if (!jqi3m$[B[90]] || jqi3m$[B[90]][B[221]] == 0x0) {
        window[B[106]](0x4, B[229]), this[B[216]]();
        return;
    }
    this[B[224]](jqi3m$);
}, window[B[224]] = function (r2_5uw) {
    z0JD[B[230]] = r2_5uw[B[231]] != undefined ? r2_5uw[B[231]] : 0x0, z0JD[B[35]] = {
        'server_id': String(r2_5uw[B[90]][0x0][B[114]]),
        'server_name': String(r2_5uw[B[90]][0x0][B[232]]),
        'entry_ip': r2_5uw[B[90]][0x0][B[233]],
        'entry_port': parseInt(r2_5uw[B[90]][0x0][B[234]]),
        'status': z0JY0(r2_5uw[B[90]][0x0]),
        'start_time': r2_5uw[B[90]][0x0][B[235]],
        'maintain_time': r2_5uw[B[90]][0x0][B[236]] ? r2_5uw[B[90]][0x0][B[236]] : '',
        'is_recommend': r2_5uw[B[90]][0x0][B[237]],
        'cdn': z0JD[B[113]]
    }, this[B[238]](), window[B[87]] && window[B[87]][B[88]][B[239]] && window[B[87]][B[88]][B[239]](sdkInitRes[B[240]], sdkInitRes[B[241]], sdkInitRes[B[242]], sdkInitRes[B[243]], sdkInitRes[B[244]]);
}, window[B[245]] = null, window[B[238]] = function () {
    var odzkt = this;
    zm7qn3i[B[246]](function (xhpg9) {
        console[B[65]](B[247] + JSON[B[117]](xhpg9)), youYiCofig = xhpg9;
        window[B[245]][B[248]] == 0x1 && (z0JD[B[230]] = 0x0);
        if (z0JD[B[230]] == 0x1) {
            var hg49p = z0JD[B[35]][B[249]];
            if (hg49p === -0x1 || hg49p === 0x0) {
                window[B[106]](0xf, B[250] + z0JD[B[35]]['id'] + B[251] + z0JD[B[35]][B[249]]), window[B[73]](hg49p === -0x1 ? B[252] : B[253]);
                return;
            }
            z0D0YJ(0x0, z0JD[B[35]][B[114]]), window[B[87]][B[88]][B[254]](z0JD[B[230]]);
        } else window[B[87]][B[88]][B[255]](() => {
            var uwr52_ = window[B[245]][B[256]],
                dzokt = window[B[245]][B[248]] == 0x1;
            dzokt && window[B[87]][B[88]][B[257]](B[258], uwr52_, B[259]);
        }, odzkt), z00JDY();
        window[B[61]] = !![], window[B[260]](), window[B[261]](), window[B[262]]();
    });
}, window[B[263]] = function () {
    zm7qn3i[B[264]](function (sx1e) {
        console[B[65]](B[265] + JSON[B[117]](sx1e));
    });
}, window[B[168]] = function () {
    sendApi(z0JD[B[20]], B[266], {
        'game_pkg': z0JD[B[29]],
        'version_name': z0JD[B[162]]
    }, this[B[267]][B[148]](this), z0YDJ, z0D0);
}, window[B[267]] = function (sotzae) {
    if (!sotzae) {
        window[B[106]](0x5, B[268]), window[B[73]](B[268]);
        return;
    }
    if (sotzae[B[91]] != B[200]) {
        window[B[106]](0x5, B[269] + sotzae[B[91]]), window[B[73]](B[269] + sotzae[B[91]]);
        return;
    }
    if (!sotzae[B[90]] || !sotzae[B[90]][B[15]]) {
        window[B[106]](0x5, B[270] + (sotzae[B[90]] && sotzae[B[90]][B[15]])), window[B[73]](B[270] + (sotzae[B[90]] && sotzae[B[90]][B[15]]));
        return;
    }
    sotzae[B[90]][B[271]] && sotzae[B[90]][B[271]][B[221]] > 0xa && (z0JD[B[272]] = sotzae[B[90]][B[271]], z0JD[B[113]] = sotzae[B[90]][B[271]]), sotzae[B[90]][B[15]] && (z0JD[B[48]] = sotzae[B[90]][B[15]]), console[B[92]](B[273] + z0JD[B[48]] + B[274] + z0JD[B[162]]), window[B[59]] = !![], window[B[261]](), window[B[262]]();
}, window[B[275]], window[B[169]] = function () {
    sendApi(z0JD[B[20]], B[276], { 'game_pkg': z0JD[B[29]] }, this[B[277]][B[148]](this), z0YDJ, z0D0);
}, window[B[277]] = function (fnvl7) {
    if (fnvl7 && fnvl7[B[91]] === B[200] && fnvl7[B[90]]) {
        window[B[275]] = fnvl7[B[90]];
        for (var pgh416 in fnvl7[B[90]]) {
            z0JD[pgh416] = fnvl7[B[90]][pgh416];
        }
    } else window[B[106]](0xb, B[278]), console[B[92]](B[279] + fnvl7[B[91]]);
    window[B[60]] = !![], window[B[260]](), window[B[262]]();
}, window[B[260]] = function () {
    if (!window[B[61]] || !window[B[60]]) return;
    var xs1h9 = z0JD[B[230]] == 0x1,
        im$j = z0JD[B[49]],
        niv7lm = z0JD[B[280]] && z0JD[B[280]] > 0x0;
    if (im$j || xs1h9 && niv7lm) {
        var iq3m$7 = z0JD[B[281]],
            eyodtz = iq3m$7 && iq3m$7[B[221]] == 0x9;
        eyodtz && (window[B[282]] = iq3m$7);
        var pg1xh = z0JD[B[283]],
            dktob = pg1xh && pg1xh[B[284]]('#')[B[221]] == 0x4;
        dktob && (window[B[285]] = pg1xh);
    }
}, window[B[104]] = function () {
    window[B[282]] = null, window[B[285]] = null;
}, window[B[286]] = function (f7lniv, azeos, mi$j3q, b_k58, hsp9x, _yrbk, inlfv7, zasxe, fvl46, qnm3i7) {
    hsp9x = String(hsp9x);
    var zxe9sa = inlfv7,
        b_5k8 = zasxe;
    z0JD[B[13]][hsp9x] = {
        'productid': hsp9x,
        'productname': zxe9sa,
        'productdesc': b_5k8,
        'roleid': f7lniv,
        'rolename': azeos,
        'rolelevel': mi$j3q,
        'price': _yrbk,
        'callback': fvl46
    }, sendApi(z0JD[B[24]], B[287], {
        'game_pkg': z0JD[B[29]],
        'server_id': z0JD[B[35]][B[114]],
        'server_name': z0JD[B[35]][B[232]],
        'level': mi$j3q,
        'uid': z0JD[B[112]],
        'role_id': f7lniv,
        'role_name': azeos,
        'product_id': hsp9x,
        'product_name': zxe9sa,
        'product_desc': b_5k8,
        'money': _yrbk,
        'partner_id': z0JD[B[28]]
    }, toPayCallBack, z0YDJ, z0D0);
}, window[B[288]] = function (mn73q) {
    if (mn73q && (mn73q[B[289]] === 0xc8 || mn73q[B[91]] == B[200])) {
        var esa1x9 = z0JD[B[13]][String(mn73q[B[290]])];
        if (esa1x9[B[291]]) esa1x9[B[291]](mn73q[B[290]], mn73q[B[292]], -0x1);
        zm7qn3i[B[293]]({
            'cpbill': mn73q[B[292]],
            'productid': mn73q[B[290]],
            'productname': esa1x9[B[294]],
            'productdesc': esa1x9[B[295]],
            'serverid': z0JD[B[35]][B[114]],
            'servername': z0JD[B[35]][B[232]],
            'roleid': esa1x9[B[296]],
            'rolename': esa1x9[B[297]],
            'rolelevel': esa1x9[B[298]],
            'price': esa1x9[B[299]],
            'extension': JSON[B[117]]({ 'cp_order_id': mn73q[B[292]] })
        }, function (g61p4, i73ln) {
            esa1x9[B[291]] && g61p4 == 0x0 && esa1x9[B[291]](mn73q[B[290]], mn73q[B[292]], g61p4);
            console[B[92]](JSON[B[117]]({
                'type': B[300],
                'status': g61p4,
                'data': mn73q,
                'role_name': esa1x9[B[297]]
            }));
            if (g61p4 === 0x0) {} else {
                if (g61p4 === 0x1) {} else {
                    if (g61p4 === 0x2) {}
                }
            }
        });
    } else {
        var _rybk8 = mn73q ? B[301] + mn73q[B[289]] + B[302] + mn73q[B[91]] + B[303] + mn73q[B[92]] : B[304];
        window[B[106]](0xd, B[305] + _rybk8), alert(_rybk8);
    }
}, window[B[306]] = function () {}, window[B[307]] = function (_58b2r, atdoz, yobtk, l37m, easxtz) {
    zm7qn3i[B[308]](z0JD[B[35]][B[114]], z0JD[B[35]][B[232]] || z0JD[B[35]][B[114]], _58b2r, atdoz, yobtk), sendApi(z0JD[B[20]], B[309], {
        'game_pkg': z0JD[B[29]],
        'server_id': z0JD[B[35]][B[114]],
        'role_id': _58b2r,
        'uid': z0JD[B[112]],
        'role_name': atdoz,
        'role_type': l37m,
        'level': yobtk
    });
}, window[B[310]] = function (toszea, edtyo, r25, g4ph61, ytz, x9sp1h, bokyt, hg91px, p1hgx, mq37n) {
    z0JD[B[109]] = toszea, z0JD[B[110]] = edtyo, z0JD[B[111]] = r25, zm7qn3i[B[311]](z0JD[B[35]][B[114]], z0JD[B[35]][B[232]] || z0JD[B[35]][B[114]], toszea, edtyo, r25), sendApi(z0JD[B[20]], B[312], {
        'game_pkg': z0JD[B[29]],
        'server_id': z0JD[B[35]][B[114]],
        'role_id': toszea,
        'uid': z0JD[B[112]],
        'role_name': edtyo,
        'role_type': g4ph61,
        'level': r25,
        'evolution': ytz
    });
}, window[B[313]] = function (x9hp1g, axze9, yzoet, mqj3$i, l7min3, m$iqj3, teozda, mli7n, bkr5, yed) {
    z0JD[B[109]] = x9hp1g, z0JD[B[110]] = axze9, z0JD[B[111]] = yzoet, zm7qn3i[B[314]](z0JD[B[35]][B[114]], z0JD[B[35]][B[232]] || z0JD[B[35]][B[114]], x9hp1g, axze9, yzoet), sendApi(z0JD[B[20]], B[312], {
        'game_pkg': z0JD[B[29]],
        'server_id': z0JD[B[35]][B[114]],
        'role_id': x9hp1g,
        'uid': z0JD[B[112]],
        'role_name': axze9,
        'role_type': mqj3$i,
        'level': yzoet,
        'evolution': l7min3
    });
}, window[B[315]] = function (xhsa9) {}, window[B[316]] = function (n3mi7l, p61h4g) {
    zm7qn3i[B[317]](B[317], { 'activity_id': p61h4g }, function (fv6nl4) {
        n3mi7l && n3mi7l(fv6nl4);
    });
}, window[B[318]] = function () {
    zm7qn3i[B[318]]();
}, window[B[319]] = function () {
    zm7qn3i[B[320]]();
}, window[B[321]] = function ($qmi3, g4h, yb8r_, u20w_5, dykzo, ky_r, $7qmi3, br582) {
    br582 = br582 || z0JD[B[35]][B[114]], sendApi(z0JD[B[20]], B[322], {
        'phone': $qmi3,
        'role_id': g4h,
        'uid': z0JD[B[112]],
        'game_pkg': z0JD[B[29]],
        'partner_id': z0JD[B[28]],
        'server_id': br582
    }, $7qmi3, 0x2, null, function () {
        return !![];
    });
}, window[B[323]] = function (inmq7) {
    window[B[324]] = inmq7, window[B[324]] && window[B[325]] && (console[B[92]](B[326] + window[B[325]][B[327]]), window[B[324]](window[B[325]]), window[B[325]] = null);
}, window[B[328]] = function (sxz9e, yezot, tzdoe, mvl7n) {
    window[B[329]](B[330], {
        'game_pkg': window[B[11]][B[29]],
        'role_id': yezot,
        'server_id': tzdoe
    }, mvl7n);
}, window[B[331]] = function (g6h1p, i3nq7, sp1x9) {
    function vp6fg4(dztyk) {
        var tokydb = [],
            yob8k = [],
            tyzdoe = sp1x9 || window[B[2]][B[332]];
        for (var nf7vl6 in tyzdoe) {
            var $i3jm = Number(nf7vl6);
            (!g6h1p || !g6h1p[B[221]] || g6h1p[B[185]]($i3jm) != -0x1) && (yob8k[B[333]](tyzdoe[nf7vl6]), tokydb[B[333]]([$i3jm, 0x3]));
        }
        window[B[154]](window[B[334]], B[335]) >= 0x0 ? (console[B[65]](B[336]), zm7qn3i[B[337]] && zm7qn3i[B[337]](yob8k, function (mi7nvl) {
            console[B[65]](B[338]), console[B[65]](mi7nvl);
            if (mi7nvl && mi7nvl[B[184]] == B[339]) for (var gf64hp in tyzdoe) {
                if (mi7nvl[tyzdoe[gf64hp]] == B[340]) {
                    var saztxe = Number(gf64hp);
                    for (var ozea = 0x0; ozea < tokydb[B[221]]; ozea++) {
                        if (tokydb[ozea][0x0] == saztxe) {
                            tokydb[ozea][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[B[154]](window[B[334]], B[341]) >= 0x0 ? wx[B[342]]({
                'withSubscriptions': !![],
                'success': function (atzode) {
                    var $mjqi = atzode[B[343]][B[344]];
                    if ($mjqi) {
                        console[B[65]](B[345]), console[B[65]]($mjqi);
                        for (var exas9 in tyzdoe) {
                            if ($mjqi[tyzdoe[exas9]] == B[340]) {
                                var ghpx1 = Number(exas9);
                                for (var fn7liv = 0x0; fn7liv < tokydb[B[221]]; fn7liv++) {
                                    if (tokydb[fn7liv][0x0] == ghpx1) {
                                        tokydb[fn7liv][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[B[65]](tokydb), i3nq7 && i3nq7(tokydb);
                    } else console[B[65]](B[346]), console[B[65]](atzode), console[B[65]](tokydb), i3nq7 && i3nq7(tokydb);
                },
                'fail': function () {
                    console[B[65]](B[347]), console[B[65]](tokydb), i3nq7 && i3nq7(tokydb);
                }
            }) : (console[B[65]](B[348] + window[B[334]]), console[B[65]](tokydb), i3nq7 && i3nq7(tokydb));
        })) : (console[B[65]](B[349] + window[B[334]]), console[B[65]](tokydb), i3nq7 && i3nq7(tokydb)), wx[B[350]](vp6fg4);
    }
    wx[B[351]](vp6fg4);
}, window[B[352]] = {
    'isSuccess': ![],
    'level': B[353],
    'isCharging': ![]
}, window[B[354]] = function (oezsta) {
    wx[B[355]]({
        'success': function (rdbyk8) {
            var uwr_25 = window[B[352]];
            uwr_25[B[356]] = !![], uwr_25[B[357]] = Number(rdbyk8[B[357]])[B[358]](0x0), uwr_25[B[359]] = rdbyk8[B[359]], oezsta && oezsta(uwr_25[B[356]], uwr_25[B[357]], uwr_25[B[359]]);
        },
        'fail': function (dbo8k) {
            console[B[65]](B[360], dbo8k[B[184]]);
            var x9ps1h = window[B[352]];
            oezsta && oezsta(x9ps1h[B[356]], x9ps1h[B[357]], x9ps1h[B[359]]);
        }
    });
}, window[B[361]] = function (v7lmi) {
    wx[B[361]]({
        'success': function (px19) {
            v7lmi && v7lmi(!![], px19);
        },
        'fail': function (r8d) {
            v7lmi && v7lmi(![], r8d);
        }
    });
}, window[B[362]] = function (w_u5r) {
    if (w_u5r) wx[B[362]](w_u5r);
}, window[B[363]] = function (pf4h6g) {
    wx[B[363]](pf4h6g);
}, window[B[329]] = function ($73q, ni37l, iq$7m, _28, z9sx, h4p, zosae, imn3q7) {
    if (_28 == undefined) _28 = 0x1;
    wx[B[132]]({
        'url': $73q,
        'method': zosae || B[364],
        'responseType': B[365],
        'data': ni37l,
        'header': { 'content-type': imn3q7 || B[134] },
        'success': function (zeatx) {
            DEBUG && console[B[65]](B[366], $73q, info, zeatx);
            if (zeatx && zeatx[B[367]] == 0xc8) {
                var xzs9a = zeatx[B[90]];
                !h4p || h4p(xzs9a) ? iq$7m && iq$7m(xzs9a) : window[B[368]]($73q, ni37l, iq$7m, _28, z9sx, h4p, zeatx);
            } else window[B[368]]($73q, ni37l, iq$7m, _28, z9sx, h4p, zeatx);
        },
        'fail': function (nf6v7) {
            DEBUG && console[B[65]](B[369], $73q, info, nf6v7), window[B[368]]($73q, ni37l, iq$7m, _28, z9sx, h4p, nf6v7);
        },
        'complete': function () {}
    });
}, window[B[368]] = function (r52, eoastz, b5k, b8krd, steoaz, aex9s, gph164) {
    b8krd - 0x1 > 0x0 ? setTimeout(function () {
        window[B[329]](r52, eoastz, b5k, b8krd - 0x1, steoaz, aex9s);
    }, 0x3e8) : steoaz && steoaz(JSON[B[117]]({
        'url': r52,
        'response': gph164
    }));
}, window[B[370]] = function (hsax19, g4pfv, flgv64, zodtea, lnv6, ezadot, lfn46v) {
    !flgv64 && (flgv64 = {});
    var l64vfg = Math[B[371]](Date[B[42]]() / 0x3e8);
    flgv64[B[211]] = l64vfg, flgv64[B[372]] = g4pfv;
    var gph4f = Object[B[373]](flgv64)[B[374]](),
        b_85r = '',
        mn3il = '';
    for (var pgh14 = 0x0; pgh14 < gph4f[B[221]]; pgh14++) {
        b_85r = b_85r + (pgh14 == 0x0 ? '' : '&') + gph4f[pgh14] + flgv64[gph4f[pgh14]], mn3il = mn3il + (pgh14 == 0x0 ? '' : '&') + gph4f[pgh14] + '=' + encodeURIComponent(flgv64[gph4f[pgh14]]);
    }
    b_85r = b_85r + z0JD[B[26]];
    var oytdkb = B[375] + md5(b_85r);
    send(hsax19 + '?' + mn3il + (mn3il == '' ? '' : '&') + oytdkb, null, zodtea, lnv6, ezadot, lfn46v || function (e1sa) {
        return e1sa[B[91]] == B[200];
    }, null, B[376]);
}, window[B[377]] = function (qi3nm7, w20_) {
    var m7iq3n = 0x0;
    z0JD[B[35]] && (m7iq3n = z0JD[B[35]][B[114]]), sendApi(z0JD[B[22]], B[378], {
        'partnerId': z0JD[B[28]],
        'gamePkg': z0JD[B[29]],
        'logTime': Math[B[371]](Date[B[42]]() / 0x3e8),
        'platformUid': z0JD[B[207]],
        'type': qi3nm7,
        'serverId': m7iq3n
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[B[379]] = function (oszate) {
    sendApi(z0JD[B[20]], B[380], {
        'partner_id': z0JD[B[28]],
        'uid': z0JD[B[112]],
        'version': z0JD[B[15]],
        'game_pkg': z0JD[B[29]],
        'device': z0JD[B[30]]
    }, z0JDY0, z0YDJ, z0D0);
}, window[B[381]] = function (a91sxe) {
    if (a91sxe && a91sxe[B[91]] === B[200] && a91sxe[B[90]]) {
        a91sxe[B[90]][B[382]]({
            'id': -0x2,
            'name': B[383]
        }), a91sxe[B[90]][B[382]]({
            'id': -0x1,
            'name': B[384]
        }), z0JD[B[385]] = a91sxe[B[90]];
        if (window[B[386]]) window[B[386]][B[387]]();
    } else {
        z0JD[B[388]] = ![];
        var vnl6f7 = a91sxe ? a91sxe[B[91]] : '';
        window[B[106]](0x7, B[389] + vnl6f7), window[B[73]](B[390] + vnl6f7);
    }
}, window[B[391]] = function (etzaod) {
    sendApi(z0JD[B[20]], B[392], {
        'partner_id': z0JD[B[28]],
        'uid': z0JD[B[112]],
        'version': z0JD[B[15]],
        'game_pkg': z0JD[B[29]],
        'device': z0JD[B[30]]
    }, z00JY, z0YDJ, z0D0);
}, window[B[393]] = function (_2r5u) {
    z0JD[B[394]] = ![];
    if (_2r5u && _2r5u[B[91]] === B[200] && _2r5u[B[90]]) {
        for (var zteoy = 0x0; zteoy < _2r5u[B[90]][B[221]]; zteoy++) {
            _2r5u[B[90]][zteoy][B[249]] = z0JY0(_2r5u[B[90]][zteoy]);
        }
        z0JD[B[32]][-0x1] = window[B[395]](_2r5u[B[90]]), window[B[386]][B[396]](-0x1);
    } else {
        var u5r2_w = _2r5u ? _2r5u[B[91]] : '';
        window[B[106]](0x8, B[397] + u5r2_w), window[B[73]](B[398] + u5r2_w);
    }
}, window[B[399]] = function (p1gx9) {
    sendApi(z0JD[B[20]], B[392], {
        'partner_id': z0JD[B[28]],
        'uid': z0JD[B[112]],
        'version': z0JD[B[15]],
        'game_pkg': z0JD[B[29]],
        'device': z0JD[B[30]]
    }, p1gx9, z0YDJ, z0D0);
}, window[B[400]] = function (fil7vn, zkdy) {
    sendApi(z0JD[B[20]], B[401], {
        'partner_id': z0JD[B[28]],
        'uid': z0JD[B[112]],
        'version': z0JD[B[15]],
        'game_pkg': z0JD[B[29]],
        'device': z0JD[B[30]],
        'server_group_id': zkdy
    }, z0YJ0, z0YDJ, z0D0);
}, window[B[402]] = function (ha9xs1) {
    z0JD[B[394]] = ![];
    if (ha9xs1 && ha9xs1[B[91]] === B[200] && ha9xs1[B[90]] && ha9xs1[B[90]][B[90]]) {
        var h9xp1g = ha9xs1[B[90]][B[403]],
            nfvil7 = [];
        for (var tyokdb = 0x0; tyokdb < ha9xs1[B[90]][B[90]][B[221]]; tyokdb++) {
            ha9xs1[B[90]][B[90]][tyokdb][B[249]] = z0JY0(ha9xs1[B[90]][B[90]][tyokdb]), (nfvil7[B[221]] == 0x0 || ha9xs1[B[90]][B[90]][tyokdb][B[249]] != 0x0) && (nfvil7[nfvil7[B[221]]] = ha9xs1[B[90]][B[90]][tyokdb]);
        }
        z0JD[B[32]][h9xp1g] = window[B[395]](nfvil7), window[B[386]][B[396]](h9xp1g);
    } else {
        var u5_2w0 = ha9xs1 ? ha9xs1[B[91]] : '';
        window[B[106]](0x9, B[404] + u5_2w0), window[B[73]](B[405] + u5_2w0);
    }
}, window[B[406]] = function (hp461g) {
    sendApi(z0JD[B[20]], B[407], {
        'partner_id': z0JD[B[28]],
        'uid': z0JD[B[112]],
        'version': z0JD[B[15]],
        'game_pkg': z0JD[B[29]],
        'device': z0JD[B[30]]
    }, reqServerRecommendCallBack, z0YDJ, z0D0);
}, window[B[408]] = function (dytoez) {
    z0JD[B[394]] = ![];
    if (dytoez && dytoez[B[91]] === B[200] && dytoez[B[90]]) {
        for (var zdaoe = 0x0; zdaoe < dytoez[B[90]][B[221]]; zdaoe++) {
            dytoez[B[90]][zdaoe][B[249]] = z0JY0(dytoez[B[90]][zdaoe]);
        }
        z0JD[B[32]][-0x2] = window[B[395]](dytoez[B[90]]), window[B[386]][B[396]](-0x2);
    } else {
        var eaxz9 = dytoez ? dytoez[B[91]] : '';
        window[B[106]](0xa, B[409] + eaxz9), alert(B[410] + eaxz9);
    }
}, window[B[395]] = function (f6nv) {
    return f6nv;
}, window[B[411]] = function (g4hp, vf7l) {
    g4hp = g4hp || z0JD[B[35]][B[114]], sendApi(z0JD[B[20]], B[412], {
        'type': '4',
        'game_pkg': z0JD[B[29]],
        'server_id': g4hp
    }, vf7l);
}, window[B[413]] = function (r82u_, h64gfp, nlv6, g6lv4f) {
    nlv6 = nlv6 || z0JD[B[35]][B[114]], sendApi(z0JD[B[20]], B[414], {
        'type': r82u_,
        'game_pkg': h64gfp,
        'server_id': nlv6
    }, g6lv4f);
}, window[B[415]] = function (s1ae, yb_8k) {
    sendApi(z0JD[B[20]], B[416], { 'game_pkg': s1ae }, yb_8k);
}, window[B[417]] = function (imnq) {
    if (imnq) {
        if (imnq[B[249]] == 0x1) {
            if (imnq[B[418]] == 0x3) return 0x3;else return imnq[B[418]] == 0x1 ? 0x2 : 0x1;
        } else return imnq[B[249]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[B[419]] = function (mjq$i3, kyr8_) {
    var m7iqn = window[B[245]][B[248]] == 0x1;
    if (m7iqn) {
        var uw0 = window[B[245]][B[256]],
            m7iqn = window[B[245]][B[248]] == 0x1;
        window[B[87]][B[88]][B[257]](B[258], uw0, B[259]);
        return;
    }
    z0JD[B[420]] = {
        'step': mjq$i3,
        'server_id': kyr8_
    };
    var xpg19 = this;
    z00JYD({ 'title': B[421] }), sendApi(z0JD[B[20]], B[422], {
        'partner_id': z0JD[B[28]],
        'uid': z0JD[B[112]],
        'game_pkg': z0JD[B[29]],
        'server_id': kyr8_,
        'platform': z0JD[B[206]],
        'platform_uid': z0JD[B[207]],
        'check_login_time': z0JD[B[210]],
        'check_login_sign': z0JD[B[208]],
        'version_name': z0JD[B[162]]
    }, z0D0JY, z0YDJ, z0D0, function (fnl4) {
        return fnl4[B[91]] == B[200] || fnl4[B[92]] == B[423] || fnl4[B[92]] == B[424];
    });
}, window[B[425]] = function (hgpf) {
    var zexat = this;
    if (hgpf && hgpf[B[91]] === B[200] && hgpf[B[90]]) {
        var r5u_2 = z0JD[B[35]];
        r5u_2[B[426]] = z0JD[B[33]], r5u_2[B[209]] = String(hgpf[B[90]][B[427]]), r5u_2[B[41]] = parseInt(hgpf[B[90]][B[211]]);
        if (hgpf[B[90]][B[428]]) r5u_2[B[428]] = parseInt(hgpf[B[90]][B[428]]);else r5u_2[B[428]] = parseInt(hgpf[B[90]][B[114]]);
        r5u_2[B[429]] = 0x0, r5u_2[B[113]] = z0JD[B[272]], r5u_2[B[430]] = hgpf[B[90]][B[431]], r5u_2[B[432]] = hgpf[B[90]][B[432]];
        if (hgpf[B[90]][B[433]]) r5u_2[B[433]] = parseInt(hgpf[B[90]][B[433]]);
        console[B[65]](B[434] + JSON[B[117]](r5u_2[B[432]])), z0JD[B[230]] == 0x1 && r5u_2[B[432]] && r5u_2[B[432]][B[435]] == 0x1 && (z0JD[B[436]] = 0x1, window[B[87]][B[88]][B[437]]()), z0DY0J();
    } else {
        if (z0JD[B[420]][B[438]] >= 0x3) {
            var kzdy = hgpf ? hgpf[B[91]] : '';
            window[B[106]](0xc, B[439] + kzdy), z0D0(JSON[B[117]](hgpf)), window[B[73]](B[440] + kzdy);
        } else sendApi(z0JD[B[20]], B[181], {
            'platform': z0JD[B[18]],
            'partner_id': z0JD[B[28]],
            'token': z0JD[B[175]],
            'game_pkg': z0JD[B[29]],
            'deviceId': z0JD[B[30]],
            'scene': B[182] + z0JD[B[31]]
        }, function (g4ph) {
            if (!g4ph || g4ph[B[91]] != B[200]) {
                window[B[73]](B[202] + g4ph && g4ph[B[91]]);
                return;
            }
            z0JD[B[208]] = String(g4ph[B[209]]), z0JD[B[210]] = String(g4ph[B[211]]), setTimeout(function () {
                z0D0YJ(z0JD[B[420]][B[438]] + 0x1, z0JD[B[420]][B[114]]);
            }, 0x5dc);
        }, z0YDJ, z0D0, function (xgp9h) {
            return xgp9h[B[91]] == B[200] || xgp9h[B[91]] == B[441];
        });
    }
}, window[B[442]] = function () {
    ServerLoading[B[88]][B[254]](z0JD[B[230]]), window[B[54]] = !![], window[B[262]]();
}, window[B[261]] = function () {
    if (window[B[55]] && window[B[56]] && window[B[57]] && window[B[58]] && window[B[59]] && window[B[61]]) {
        if (!window[B[443]][B[88]]) {
            console[B[65]](B[444] + window[B[443]][B[88]]);
            var bk_5 = wx[B[445]](),
                b_rk8 = bk_5[B[327]] ? bk_5[B[327]] : 0x0,
                h91sa = {
                'cdn': window[B[11]][B[113]],
                'spareCdn': window[B[11]][B[160]],
                'newRegister': window[B[11]][B[230]],
                'wxPC': window[B[11]][B[52]],
                'wxIOS': window[B[11]][B[50]],
                'wxAndroid': window[B[11]][B[51]],
                'wxParam': {
                    'limitLoad': window[B[11]][B[446]],
                    'benchmarkLevel': window[B[11]][B[447]],
                    'wxFrom': window[B[2]][B[167]] == B[448] ? 0x1 : 0x0,
                    'wxSDKVersion': window[B[334]],
                    'qudao': B[449]
                },
                'configType': window[B[11]][B[43]],
                'exposeType': window[B[11]][B[45]],
                'scene': b_rk8,
                'video_type': window[B[11]][B[177]],
                'ad_flag': window[B[11]][B[179]]
            };
            if (window[B[275]]) for (var _ru85 in window[B[275]]) {
                if (!h91sa[_ru85]) h91sa[_ru85] = window[B[275]][_ru85];
            }
            new window[B[443]](h91sa, window[B[11]][B[48]], window[B[9]]);
        }
    }
}, window[B[262]] = function () {
    if (window[B[55]] && window[B[56]] && window[B[57]] && window[B[58]] && window[B[59]] && window[B[61]] && window[B[54]] && window[B[60]]) {
        z00JDY();
        if (!z0DYJ) {
            z0DYJ = !![];
            if (!window[B[443]][B[88]]) window[B[261]]();
            var vg6lf = 0x0,
                hxg = wx[B[450]]();
            hxg && (window[B[11]][B[451]] && (vg6lf = hxg[B[452]]), console[B[92]](B[453] + hxg[B[452]] + B[454] + hxg[B[455]] + B[456] + hxg[B[457]] + B[458] + hxg[B[459]] + B[460] + hxg[B[461]] + B[462] + hxg[B[463]]));
            var hsxp19 = {};
            for (const nlvm7i in z0JD[B[35]]) {
                hsxp19[nlvm7i] = z0JD[B[35]][nlvm7i];
            }
            var v6lgf = {
                'channel': window[B[11]][B[34]],
                'account': window[B[11]][B[112]],
                'userId': window[B[11]][B[205]],
                'cdn': window[B[11]][B[113]],
                'data': window[B[11]][B[90]],
                'package': window[B[11]][B[14]],
                'newRegister': window[B[11]][B[230]],
                'pkgName': window[B[11]][B[29]],
                'partnerId': window[B[11]][B[28]],
                'platform_uid': window[B[11]][B[207]],
                'deviceId': window[B[11]][B[30]],
                'selectedServer': hsxp19,
                'configType': window[B[11]][B[43]],
                'exposeType': window[B[11]][B[45]],
                'debugUsers': window[B[11]][B[39]],
                'wxMenuTop': vg6lf,
                'wxShield': window[B[11]][B[49]],
                'encryptParam': window[B[11]][B[46]],
                'wx_channel': window[B[11]][B[176]],
                'zsy_tp_state': window[B[11]][B[178]]
            };
            if (window[B[275]]) for (var nvlf7 in window[B[275]]) {
                v6lgf[nvlf7] = window[B[275]][nvlf7];
            }
            window[B[443]][B[88]][B[464]](v6lgf);
            if (z0JD[B[35]] && z0JD[B[35]][B[114]]) localStorage[B[465]](B[214] + z0JD[B[29]] + z0JD[B[112]], z0JD[B[35]][B[114]]);
        }
    } else console[B[92]](B[466] + window[B[55]] + B[467] + window[B[56]] + B[468] + window[B[57]] + B[469] + window[B[58]] + B[470] + window[B[59]] + B[471] + window[B[61]] + B[472] + window[B[54]] + B[473] + window[B[60]]);
}, window[B[474]] = function (zasex9) {
    if (!window[B[475]]) {
        console[B[118]](B[476]);
        return;
    }
    var datezo = zasex9[B[477]];
    datezo == 0x1 ? window[B[475]][B[478]](0x2327, zasex9) : window[B[475]][B[479]](0x2327);
};