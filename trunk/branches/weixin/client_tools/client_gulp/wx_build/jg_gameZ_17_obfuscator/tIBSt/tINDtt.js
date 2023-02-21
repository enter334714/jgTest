var g = wx.u$;
import _df63dr from '../ttkttt/t6ktgt.js';
window[g[167]] = { 'wxVersion': window[g[6]][g[7]] }, window[g[168]] = ![], window[g[169]] = 0x1, window[g[170]] = 0x1, window[g[171]] = !![], window[g[172]] = !![], window[g[173]] = '', window[g[174]] = ![], window[g[16]] = {
    'base_cdn': g[175],
    'cdn': g[175]
}, p4H[g[176]] = {}, p4H[g[177]] = '0', p4H[g[93]] = window[g[167]][g[178]], p4H[g[128]] = '', p4H['os'] = '1', p4H[g[179]] = g[180], p4H[g[181]] = g[182], p4H[g[183]] = g[184], p4H[g[185]] = g[186], p4H[g[187]] = g[188], p4H[g[189]] = '1', p4H[g[23]] = '', p4H[g[190]] = '', p4H[g[191]] = 0x0, p4H[g[192]] = {}, p4H[g[193]] = parseInt(p4H[g[189]]), p4H[g[194]] = p4H[g[189]], p4H[g[24]] = {}, p4H[g[31]] = g[195], p4H[g[196]] = ![], p4H[g[197]] = g[198], p4H[g[199]] = Date[g[160]](), p4H[g[200]] = g[201], p4H[g[202]] = '_a', p4H[g[203]] = '', p4H[g[204]] = 0x2, p4H[g[21]] = 0x7c1, p4H[g[178]] = window[g[167]][g[178]], p4H[g[205]] = ![], p4H[g[120]] = ![], p4H[g[123]] = ![], p4H[g[126]] = ![], window[g[206]] = 0x5, window[g[207]] = ![], window[g[67]] = ![], window[g[76]] = ![], window[g[208]] = ![], window[g[209]] = ![], window[g[210]] = ![], window[g[211]] = ![], window[g[212]] = ![], window[g[213]] = ![], window[g[214]] = null, window[g[215]] = function (gxc4ip) {
    console[g[47]](g[215], gxc4ip), wx[g[216]]({}), wx[g[54]]({
        'title': g[85],
        'content': gxc4ip,
        'success'(mxoc4p) {
            if (mxoc4p[g[217]]) console[g[47]](g[218]);else mxoc4p[g[219]] && console[g[47]](g[220]);
        }
    });
}, window[g[221]] = function (oplzm) {
    console[g[47]](g[222], oplzm), p14HS(), wx[g[54]]({
        'title': g[85],
        'content': oplzm,
        'confirmText': g[223],
        'cancelText': g[224],
        'success'(oxzpc) {
            if (oxzpc[g[217]]) window[g[82]]();else oxzpc[g[219]] && (console[g[47]](g[225]), wx[g[226]]({}));
        }
    });
}, window[g[227]] = function (jkniyg) {
    console[g[47]](g[227], jkniyg), wx[g[54]]({
        'title': g[85],
        'content': jkniyg,
        'confirmText': g[228],
        'showCancel': ![],
        'complete'(dtrf36) {
            console[g[47]](g[225]), wx[g[226]]({});
        }
    });
}, window[g[229]] = ![], window[g[230]] = function (qd5fr) {
    window[g[229]] = !![], wx[g[231]](qd5fr);
}, window[g[232]] = function () {
    window[g[229]] && (window[g[229]] = ![], wx[g[216]]({}));
}, window[g[233]] = function (xy4gi) {
    window[g[37]][g[38]][g[233]](xy4gi);
}, window[g[234]] = function (gpicx, ekn8) {
    _df63dr[g[234]](gpicx, function (ixg4y) {
        ixg4y && ixg4y[g[235]] ? ixg4y[g[235]][g[236]] == 0x1 ? ekn8(!![]) : (ekn8(![]), console[g[1]](g[237] + ixg4y[g[235]][g[238]])) : console[g[47]](g[234], ixg4y);
    });
}, window[g[239]] = function (sa8e) {
    console[g[47]](g[240], sa8e);
}, window[g[241]] = function (ywknj) {}, window[g[242]] = function (opmczx, $27bv, mox4p) {}, window[g[243]] = function ($29vb7) {
    console[g[47]](g[244], $29vb7), window[g[37]][g[38]][g[245]](), window[g[37]][g[38]][g[246]](), window[g[37]][g[38]][g[247]](), window[g[248]]();
}, window[g[249]] = function (_jnk) {
    window[g[250]](0xe, g[251] + _jnk), window[g[221]](g[252]);
    var pcm = {
        'id': window[g[16]][g[17]],
        'role': window[g[16]][g[18]],
        'level': window[g[16]][g[19]],
        'account': window[g[16]][g[20]],
        'version': window[g[16]][g[21]],
        'cdn': window[g[16]][g[22]],
        'pkgName': window[g[16]][g[23]],
        'gamever': window[g[6]][g[7]],
        'serverid': window[g[16]][g[24]] ? window[g[16]][g[24]][g[25]] : 0x0,
        'systemInfo': window[g[26]],
        'error': g[253],
        'stack': _jnk ? _jnk : g[252]
    },
        gjn_k = JSON[g[28]](pcm);
    console[g[29]](g[254] + gjn_k), window[g[31]](gjn_k);
}, window[g[250]] = function (gxpyi, ek_n8w) {
    sendApi(p4H[g[183]], g[255], {
        'game_pkg': p4H[g[23]],
        'partner_id': p4H[g[189]],
        'server_id': p4H[g[24]] && p4H[g[24]][g[25]] > 0x0 ? p4H[g[24]][g[25]] : 0x0,
        'uid': p4H[g[20]] > 0x0 ? p4H[g[20]] : 0x0,
        'type': gxpyi,
        'info': ek_n8w
    });
}, window[g[256]] = function (n_gjk) {
    var ngjiky = JSON[g[257]](n_gjk);
    ngjiky[g[258]] = window[g[6]][g[7]], ngjiky[g[259]] = window[g[16]][g[24]] ? window[g[16]][g[24]][g[25]] : 0x0, ngjiky[g[26]] = window[g[26]];
    var knje_w = JSON[g[28]](ngjiky);
    console[g[29]](g[260] + knje_w), window[g[31]](knje_w);
}, window[g[83]] = function (tr63df, e0sa) {
    var pmci4x = {
        'id': window[g[16]][g[17]],
        'role': window[g[16]][g[18]],
        'level': window[g[16]][g[19]],
        'account': window[g[16]][g[20]],
        'version': window[g[16]][g[21]],
        'cdn': window[g[16]][g[22]],
        'pkgName': window[g[16]][g[23]],
        'gamever': window[g[6]][g[7]],
        'serverid': window[g[16]][g[24]] ? window[g[16]][g[24]][g[25]] : 0x0,
        'systemInfo': window[g[26]],
        'error': tr63df,
        'stack': e0sa
    },
        ynjgi4 = JSON[g[28]](pmci4x);
    console[g[161]](g[261] + ynjgi4), window[g[31]](ynjgi4);
}, window[g[31]] = function (eash8) {
    if (window[g[16]][g[129]] == g[262]) return;
    var hwe8s = p4H[g[31]] + g[263] + p4H[g[20]];
    wx[g[264]]({
        'url': hwe8s,
        'method': g[265],
        'data': eash8,
        'header': {
            'content-type': g[266],
            'cache-control': g[267]
        },
        'success': function (vfdq5u) {
            DEBUG && console[g[47]](g[268], hwe8s, eash8, vfdq5u);
        },
        'fail': function (xygj4) {
            DEBUG && console[g[47]](g[268], hwe8s, eash8, xygj4);
        },
        'complete': function () {}
    });
}, window[g[269]] = function () {
    function jgi4n() {
        return ((0x1 + Math[g[270]]()) * 0x10000 | 0x0)[g[271]](0x10)[g[272]](0x1);
    }
    return jgi4n() + jgi4n() + '-' + jgi4n() + '-' + jgi4n() + '-' + jgi4n() + '+' + jgi4n() + jgi4n() + jgi4n();
}, window[g[82]] = function () {
    console[g[47]](g[273]);
    var d5uqfv = _df63dr[g[274]]();
    p4H[g[194]] = d5uqfv[g[275]], p4H[g[193]] = d5uqfv[g[275]], p4H[g[189]] = d5uqfv[g[275]], p4H[g[23]] = d5uqfv[g[276]];
    var q25u = { 'game_ver': p4H[g[93]] };
    p4H[g[190]] = this[g[269]](), p14SH({ 'title': g[277] }), _df63dr[g[278]](q25u, this[g[279]][g[280]](this));
}, window[g[279]] = function (cp4x) {
    var hw8sea = cp4x[g[281]];
    sdkInitRes = cp4x, console[g[47]](g[282] + hw8sea + g[283] + (hw8sea == 0x1) + g[284] + cp4x[g[7]] + g[285] + window[g[167]][g[178]]);
    if (!cp4x[g[7]] || window[g[41]](window[g[167]][g[178]], cp4x[g[7]]) < 0x0) console[g[47]](g[286]), p4H[g[181]] = g[287], p4H[g[183]] = g[288], p4H[g[185]] = g[289], p4H[g[22]] = g[290], p4H[g[291]] = g[292], p4H[g[293]] = 'sq', p4H[g[205]] = ![];else window[g[41]](window[g[167]][g[178]], cp4x[g[7]]) == 0x0 ? (console[g[47]](g[294]), p4H[g[181]] = g[182], p4H[g[183]] = g[184], p4H[g[185]] = g[186], p4H[g[22]] = g[295], p4H[g[291]] = g[292], p4H[g[293]] = g[296], p4H[g[205]] = !![]) : (console[g[47]](g[297]), p4H[g[181]] = g[182], p4H[g[183]] = g[184], p4H[g[185]] = g[186], p4H[g[22]] = g[295], p4H[g[291]] = g[292], p4H[g[293]] = g[296], p4H[g[205]] = ![]);
    p4H[g[191]] = config[g[298]] ? config[g[298]] : 0x0, this[g[299]](), this[g[300]](), window[g[301]] = 0x5, p14SH({ 'title': g[302] }), _df63dr[g[303]](this[g[304]][g[280]](this));
}, window[g[301]] = 0x5, window[g[304]] = function (icg4xp, ykg_j) {
    if (icg4xp == 0x0 && ykg_j && ykg_j[g[305]]) {
        p4H[g[306]] = ykg_j[g[305]], p4H[g[307]] = ykg_j[g[307]], p4H[g[308]] = ykg_j[g[308]], p4H[g[309]] = ykg_j[g[309]], p4H[g[310]] = ykg_j[g[310]];
        var ub5v92 = this;
        p14SH({ 'title': g[311] }), sendApi(p4H[g[181]], g[312], {
            'platform': p4H[g[179]],
            'partner_id': p4H[g[189]],
            'token': ykg_j[g[305]],
            'game_pkg': p4H[g[23]],
            'deviceId': p4H[g[190]],
            'scene': g[313] + p4H[g[191]]
        }, this[g[314]][g[280]](this), pSH4, pH1);
    } else ykg_j && ykg_j[g[65]] && window[g[301]] > 0x0 && (ykg_j[g[65]][g[121]](g[315]) != -0x1 || ykg_j[g[65]][g[121]](g[316]) != -0x1 || ykg_j[g[65]][g[121]](g[317]) != -0x1 || ykg_j[g[65]][g[121]](g[318]) != -0x1 || ykg_j[g[65]][g[121]](g[319]) != -0x1 || ykg_j[g[65]][g[121]](g[320]) != -0x1) ? (window[g[301]]--, _df63dr[g[303]](this[g[304]][g[280]](this))) : (window[g[250]](0x1, g[321] + icg4xp + g[322] + (ykg_j ? ykg_j[g[65]] : '')), window[g[83]](g[323], JSON[g[28]]({
        'status': icg4xp,
        'data': ykg_j
    })), window[g[221]](g[324] + (ykg_j && ykg_j[g[65]] ? '，' + ykg_j[g[65]] : '')));
}, window[g[314]] = function (igynkj) {
    if (!igynkj) {
        window[g[250]](0x2, g[325]), window[g[83]](g[326], g[327]), window[g[221]](g[328]);
        return;
    }
    if (igynkj[g[236]] != g[329]) {
        window[g[250]](0x2, g[330] + igynkj[g[236]]), window[g[83]](g[326], JSON[g[28]](igynkj)), window[g[221]](g[331] + igynkj[g[236]]);
        return;
    }
    if (igynkj[g[332]] == 0x1) {
        window[g[221]](g[333]);
        return;
    }
    p4H[g[334]] = String(igynkj[g[20]]), p4H[g[20]] = String(igynkj[g[20]]), p4H[g[97]] = String(igynkj[g[97]]), p4H[g[194]] = String(igynkj[g[97]]), p4H[g[335]] = String(igynkj[g[335]]), p4H[g[336]] = String(igynkj[g[337]]), p4H[g[338]] = String(igynkj[g[339]]), p4H[g[337]] = '';
    var hek8w_ = this;
    p14SH({ 'title': g[340] });
    var ipxy4 = localStorage[g[341]](g[342] + p4H[g[23]] + p4H[g[20]]);
    if (ipxy4 && ipxy4 != '') {
        var kw8e_n = Number(ipxy4);
        hek8w_[g[343]](kw8e_n);
    } else hek8w_[g[344]]();
}, window[g[344]] = function () {
    var e8kh = this;
    sendApi(p4H[g[181]], g[345], {
        'partner_id': p4H[g[189]],
        'uid': p4H[g[20]],
        'version': p4H[g[93]],
        'game_pkg': p4H[g[23]],
        'device': p4H[g[190]]
    }, e8kh[g[346]][g[280]](e8kh), pSH4, pH1);
}, window[g[346]] = function (jgnik) {
    if (!jgnik) {
        window[g[250]](0x3, g[347]), window[g[221]](g[347]);
        return;
    }
    if (jgnik[g[236]] != g[329]) {
        window[g[250]](0x3, g[348] + jgnik[g[236]]), window[g[221]](g[348] + jgnik[g[236]]);
        return;
    }
    if (!jgnik[g[235]] || jgnik[g[235]][g[10]] == 0x0) {
        window[g[250]](0x3, g[349]), window[g[221]](g[350]);
        return;
    }
    this[g[351]](jgnik);
}, window[g[343]] = function (_ewkj) {
    var _jknyg = this;
    sendApi(p4H[g[181]], g[352], {
        'server_id': _ewkj,
        'time': Date[g[160]]() / 0x3e8
    }, _jknyg[g[353]][g[280]](_jknyg), pSH4, pH1);
}, window[g[353]] = function (lpocmz) {
    if (!lpocmz) {
        window[g[250]](0x4, g[354]), this[g[344]]();
        return;
    }
    if (lpocmz[g[236]] != g[329]) {
        window[g[250]](0x4, g[355] + lpocmz[g[236]]), this[g[344]]();
        return;
    }
    if (!lpocmz[g[235]] || lpocmz[g[235]][g[10]] == 0x0) {
        window[g[250]](0x4, g[356]), this[g[344]]();
        return;
    }
    this[g[351]](lpocmz);
}, window[g[351]] = function (nijyg) {
    p4H[g[357]] = nijyg[g[358]] != undefined ? nijyg[g[358]] : 0x0, p4H[g[24]] = {
        'server_id': String(nijyg[g[235]][0x0][g[25]]),
        'server_name': String(nijyg[g[235]][0x0][g[359]]),
        'entry_ip': nijyg[g[235]][0x0][g[360]],
        'entry_port': parseInt(nijyg[g[235]][0x0][g[361]]),
        'status': p4S1(nijyg[g[235]][0x0]),
        'start_time': nijyg[g[235]][0x0][g[362]],
        'maintain_time': nijyg[g[235]][0x0][g[363]] ? nijyg[g[235]][0x0][g[363]] : '',
        'is_recommend': nijyg[g[235]][0x0][g[364]],
        'cdn': p4H[g[22]]
    }, this[g[365]](), window[g[37]] && window[g[37]][g[38]][g[366]] && window[g[37]][g[38]][g[366]](sdkInitRes[g[367]], sdkInitRes[g[368]], sdkInitRes[g[369]], sdkInitRes[g[370]], sdkInitRes[g[371]]);
}, window[g[365]] = function () {
    if (p4H[g[357]] == 0x1) {
        var ix4m = p4H[g[24]][g[372]];
        if (ix4m === -0x1 || ix4m === 0x0) {
            window[g[250]](0xf, g[373] + p4H[g[24]]['id'] + g[374] + p4H[g[24]][g[372]]), window[g[221]](ix4m === -0x1 ? g[375] : g[376]);
            return;
        }
        pH1S4(0x0, p4H[g[24]][g[25]]), window[g[37]][g[38]][g[377]](p4H[g[357]]);
    } else window[g[37]][g[38]][g[378]](), p14HS();
    window[g[212]] = !![], window[g[379]](), window[g[68]](), window[g[69]]();
}, window[g[299]] = function () {
    sendApi(p4H[g[181]], g[380], {
        'game_pkg': p4H[g[23]],
        'version_name': p4H[g[293]]
    }, this[g[381]][g[280]](this), pSH4, pH1);
}, window[g[381]] = function (ngi) {
    if (!ngi) {
        window[g[250]](0x5, g[382]), window[g[221]](g[382]);
        return;
    }
    if (ngi[g[236]] != g[329]) {
        window[g[250]](0x5, g[383] + ngi[g[236]]), window[g[221]](g[383] + ngi[g[236]]);
        return;
    }
    if (!ngi[g[235]] || !ngi[g[235]][g[93]]) {
        window[g[250]](0x5, g[384] + (ngi[g[235]] && ngi[g[235]][g[93]])), window[g[221]](g[384] + (ngi[g[235]] && ngi[g[235]][g[93]]));
        return;
    }
    ngi[g[235]][g[385]] && ngi[g[235]][g[385]][g[10]] > 0xa && (p4H[g[386]] = ngi[g[235]][g[385]], p4H[g[22]] = ngi[g[235]][g[385]]), ngi[g[235]][g[93]] && (p4H[g[21]] = ngi[g[235]][g[93]]), console[g[1]](g[387] + p4H[g[21]] + g[388] + p4H[g[293]]), window[g[210]] = !![], window[g[68]](), window[g[69]]();
}, window[g[389]], window[g[300]] = function () {
    sendApi(p4H[g[181]], g[390], { 'game_pkg': p4H[g[23]] }, this[g[391]][g[280]](this), pSH4, pH1);
}, window[g[391]] = function (se80h) {
    if (se80h && se80h[g[236]] === g[329] && se80h[g[235]]) {
        window[g[389]] = se80h[g[235]];
        for (var plomcz in se80h[g[235]]) {
            p4H[plomcz] = se80h[g[235]][plomcz];
        }
    } else window[g[250]](0xb, g[392]), console[g[1]](g[393] + se80h[g[236]]);
    window[g[211]] = !![], window[g[379]](), window[g[69]]();
}, window[g[379]] = function () {
    if (!window[g[212]] || !window[g[211]]) return;
    var gj4yi = p4H[g[357]] == 0x1,
        kj_ywn = p4H[g[205]],
        giy4n = p4H[g[394]] && p4H[g[394]] > 0x0;
    if (kj_ywn || gj4yi && giy4n) {
        var wyj_n = p4H[g[395]],
            rd3tf = wyj_n && wyj_n[g[10]] == 0x9;
        rd3tf && (window[g[396]] = wyj_n);
        var qv2 = p4H[g[397]],
            iyjn4 = qv2 && qv2[g[42]]('#')[g[10]] == 0x4;
        iyjn4 && (window[g[398]] = qv2);
    }
}, window[g[248]] = function () {
    window[g[396]] = null, window[g[398]] = null;
}, window[g[399]] = function ($972bv, o7zm$, drt63f, qf6dt, pxic4g, zmx, cz7mol, kewnj_, bvu$9, o7clzm) {
    pxic4g = String(pxic4g);
    var b$v29u = cz7mol,
        tf6rq = kewnj_;
    p4H[g[176]][pxic4g] = {
        'productid': pxic4g,
        'productname': b$v29u,
        'productdesc': tf6rq,
        'roleid': $972bv,
        'rolename': o7zm$,
        'rolelevel': drt63f,
        'price': zmx,
        'callback': bvu$9
    }, sendApi(p4H[g[185]], g[400], {
        'game_pkg': p4H[g[23]],
        'server_id': p4H[g[24]][g[25]],
        'server_name': p4H[g[24]][g[359]],
        'level': drt63f,
        'uid': p4H[g[20]],
        'role_id': $972bv,
        'role_name': o7zm$,
        'product_id': pxic4g,
        'product_name': b$v29u,
        'product_desc': tf6rq,
        'money': zmx,
        'partner_id': p4H[g[189]]
    }, toPayCallBack, pSH4, pH1);
}, window[g[401]] = function (kewj) {
    if (kewj && (kewj[g[402]] === 0xc8 || kewj[g[236]] == g[329])) {
        var rfqd6t = p4H[g[176]][String(kewj[g[403]])];
        if (rfqd6t[g[404]]) rfqd6t[g[404]](kewj[g[403]], kewj[g[405]], -0x1);
        _df63dr[g[406]]({
            'cpbill': kewj[g[405]],
            'productid': kewj[g[403]],
            'productname': rfqd6t[g[407]],
            'productdesc': rfqd6t[g[408]],
            'serverid': p4H[g[24]][g[25]],
            'servername': p4H[g[24]][g[359]],
            'roleid': rfqd6t[g[409]],
            'rolename': rfqd6t[g[410]],
            'rolelevel': rfqd6t[g[411]],
            'price': rfqd6t[g[412]],
            'extension': JSON[g[28]]({ 'cp_order_id': kewj[g[405]] })
        }, function (vu9q52, sewa8h) {
            rfqd6t[g[404]] && vu9q52 == 0x0 && rfqd6t[g[404]](kewj[g[403]], kewj[g[405]], vu9q52);
            console[g[1]](JSON[g[28]]({
                'type': g[413],
                'status': vu9q52,
                'data': kewj,
                'role_name': rfqd6t[g[410]]
            }));
            if (vu9q52 === 0x0) {} else {
                if (vu9q52 === 0x1) {} else {
                    if (vu9q52 === 0x2) {}
                }
            }
        });
    } else {
        var m7olz$ = kewj ? g[414] + kewj[g[402]] + g[415] + kewj[g[236]] + g[416] + kewj[g[1]] : g[417];
        window[g[250]](0xd, g[418] + m7olz$), alert(m7olz$);
    }
}, window[g[419]] = function () {}, window[g[420]] = function (b72$l, l7zm$, aeswh8, plmcoz, e_jkw) {
    _df63dr[g[421]](p4H[g[24]][g[25]], p4H[g[24]][g[359]] || p4H[g[24]][g[25]], b72$l, l7zm$, aeswh8), sendApi(p4H[g[181]], g[422], {
        'game_pkg': p4H[g[23]],
        'server_id': p4H[g[24]][g[25]],
        'role_id': b72$l,
        'uid': p4H[g[20]],
        'role_name': l7zm$,
        'role_type': plmcoz,
        'level': aeswh8
    });
}, window[g[423]] = function ($ob7z, lcm, nke_wj, xpcz, gxi4yj, oclpmz, k_whe, uv259q, zb79, mp4ox) {
    p4H[g[17]] = $ob7z, p4H[g[18]] = lcm, p4H[g[19]] = nke_wj, _df63dr[g[424]](p4H[g[24]][g[25]], p4H[g[24]][g[359]] || p4H[g[24]][g[25]], $ob7z, lcm, nke_wj), sendApi(p4H[g[181]], g[425], {
        'game_pkg': p4H[g[23]],
        'server_id': p4H[g[24]][g[25]],
        'role_id': $ob7z,
        'uid': p4H[g[20]],
        'role_name': lcm,
        'role_type': xpcz,
        'level': nke_wj,
        'evolution': gxi4yj
    });
}, window[g[426]] = function (mlzcpo, waeh, v$92b, q5vu2d, shwa8e, q925, ompcz, z7l$om, jn_wy, ft6dr) {
    p4H[g[17]] = mlzcpo, p4H[g[18]] = waeh, p4H[g[19]] = v$92b, _df63dr[g[427]](p4H[g[24]][g[25]], p4H[g[24]][g[359]] || p4H[g[24]][g[25]], mlzcpo, waeh, v$92b), sendApi(p4H[g[181]], g[425], {
        'game_pkg': p4H[g[23]],
        'server_id': p4H[g[24]][g[25]],
        'role_id': mlzcpo,
        'uid': p4H[g[20]],
        'role_name': waeh,
        'role_type': q5vu2d,
        'level': v$92b,
        'evolution': shwa8e
    });
}, window[g[428]] = function (ol$7mz) {}, window[g[429]] = function (pomczl, igny4j) {
    _df63dr[g[430]](g[430], { 'activity_id': igny4j }, function ($27v) {
        pomczl && pomczl($27v);
    });
}, window[g[431]] = function () {
    _df63dr[g[431]]();
}, window[g[432]] = function () {
    _df63dr[g[433]]();
}, window[g[434]] = function (j4in, qrtf6, g_jnky, l7b9$2, ngij, z$b97, lbz7$9, opc4m) {
    opc4m = opc4m || p4H[g[24]][g[25]], sendApi(p4H[g[181]], g[435], {
        'phone': j4in,
        'role_id': qrtf6,
        'uid': p4H[g[20]],
        'game_pkg': p4H[g[23]],
        'partner_id': p4H[g[189]],
        'server_id': opc4m
    }, lbz7$9, 0x2, null, function () {
        return !![];
    });
}, window[g[151]] = function ($2bl9) {
    window[g[153]] = $2bl9, window[g[153]] && window[g[152]] && (console[g[1]](g[154] + window[g[152]][g[155]]), window[g[153]](window[g[152]]), window[g[152]] = null);
}, window[g[436]] = function (cmx4p, wjnke, kw_e8h, yknwj_) {
    window[g[437]](g[438], {
        'game_pkg': window[g[16]][g[23]],
        'role_id': wjnke,
        'server_id': kw_e8h
    }, yknwj_);
}, window[g[439]] = function (i4pcmx, cipx4, v5du2) {
    function zmpolc(zxmp) {
        var z$9b7l = [],
            x4ocp = [],
            e8n_w = v5du2 || window[g[6]][g[440]];
        for (var wa8h in e8n_w) {
            var $bu9v = Number(wa8h);
            (!i4pcmx || !i4pcmx[g[10]] || i4pcmx[g[121]]($bu9v) != -0x1) && (x4ocp[g[44]](e8n_w[wa8h]), z$9b7l[g[44]]([$bu9v, 0x3]));
        }
        window[g[41]](window[g[45]], g[441]) >= 0x0 ? (console[g[47]](g[442]), _df63dr[g[443]] && _df63dr[g[443]](x4ocp, function (opm4c) {
            console[g[47]](g[444]), console[g[47]](opm4c);
            if (opm4c && opm4c[g[65]] == g[445]) for (var yngjk in e8n_w) {
                if (opm4c[e8n_w[yngjk]] == g[446]) {
                    var l$7o = Number(yngjk);
                    for (var igjk = 0x0; igjk < z$9b7l[g[10]]; igjk++) {
                        if (z$9b7l[igjk][0x0] == l$7o) {
                            z$9b7l[igjk][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[g[41]](window[g[45]], g[447]) >= 0x0 ? wx[g[448]]({
                'withSubscriptions': !![],
                'success': function (ahs) {
                    var c4 = ahs[g[449]][g[450]];
                    if (c4) {
                        console[g[47]](g[451]), console[g[47]](c4);
                        for (var uq25d in e8n_w) {
                            if (c4[e8n_w[uq25d]] == g[446]) {
                                var trf36d = Number(uq25d);
                                for (var zoc7l = 0x0; zoc7l < z$9b7l[g[10]]; zoc7l++) {
                                    if (z$9b7l[zoc7l][0x0] == trf36d) {
                                        z$9b7l[zoc7l][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[g[47]](z$9b7l), cipx4 && cipx4(z$9b7l);
                    } else console[g[47]](g[452]), console[g[47]](ahs), console[g[47]](z$9b7l), cipx4 && cipx4(z$9b7l);
                },
                'fail': function () {
                    console[g[47]](g[453]), console[g[47]](z$9b7l), cipx4 && cipx4(z$9b7l);
                }
            }) : (console[g[47]](g[454] + window[g[45]]), console[g[47]](z$9b7l), cipx4 && cipx4(z$9b7l));
        })) : (console[g[47]](g[455] + window[g[45]]), console[g[47]](z$9b7l), cipx4 && cipx4(z$9b7l)), wx[g[456]](zmpolc);
    }
    wx[g[457]](zmpolc);
}, window[g[458]] = {
    'isSuccess': ![],
    'level': g[459],
    'isCharging': ![]
}, window[g[460]] = function (g_kny) {
    wx[g[139]]({
        'success': function (hkew) {
            var _kjwen = window[g[458]];
            _kjwen[g[461]] = !![], _kjwen[g[141]] = Number(hkew[g[141]])[g[462]](0x0), _kjwen[g[143]] = hkew[g[143]], g_kny && g_kny(_kjwen[g[461]], _kjwen[g[141]], _kjwen[g[143]]);
        },
        'fail': function (d2) {
            console[g[47]](g[463], d2[g[65]]);
            var d6fu5 = window[g[458]];
            g_kny && g_kny(d6fu5[g[461]], d6fu5[g[141]], d6fu5[g[143]]);
        }
    });
}, window[g[144]] = function (xpcg) {
    wx[g[144]]({
        'success': function (mxzop) {
            xpcg && xpcg(!![], mxzop);
        },
        'fail': function (zblo$7) {
            xpcg && xpcg(![], zblo$7);
        }
    });
}, window[g[148]] = function (jig4yx) {
    if (jig4yx) wx[g[148]](jig4yx);
}, window[g[464]] = function (u5vq9) {
    wx[g[464]](u5vq9);
}, window[g[437]] = function (mpxo, vu259, jxyg, giyxp, mzlcop, b59v2u, khw8_e, gnj_y) {
    if (giyxp == undefined) giyxp = 0x1;
    wx[g[264]]({
        'url': mpxo,
        'method': khw8_e || g[465],
        'responseType': g[466],
        'data': vu259,
        'header': { 'content-type': gnj_y || g[266] },
        'success': function (qvu25) {
            DEBUG && console[g[47]](g[467], mpxo, info, qvu25);
            if (qvu25 && qvu25[g[468]] == 0xc8) {
                var cgxp = qvu25[g[235]];
                !b59v2u || b59v2u(cgxp) ? jxyg && jxyg(cgxp) : window[g[469]](mpxo, vu259, jxyg, giyxp, mzlcop, b59v2u, qvu25);
            } else window[g[469]](mpxo, vu259, jxyg, giyxp, mzlcop, b59v2u, qvu25);
        },
        'fail': function (mcxip4) {
            DEBUG && console[g[47]](g[470], mpxo, info, mcxip4), window[g[469]](mpxo, vu259, jxyg, giyxp, mzlcop, b59v2u, mcxip4);
        },
        'complete': function () {}
    });
}, window[g[469]] = function (clpomz, bl729, dvq2, vq2u, zoxpmc, yxij4, duqv5) {
    vq2u - 0x1 > 0x0 ? setTimeout(function () {
        window[g[437]](clpomz, bl729, dvq2, vq2u - 0x1, zoxpmc, yxij4);
    }, 0x3e8) : zoxpmc && zoxpmc(JSON[g[28]]({
        'url': clpomz,
        'response': duqv5
    }));
}, window[g[471]] = function ($zob, wen_jk, gnkjiy, d6trf, b7l9$2, qvdfu5, gynj4i) {
    !gnkjiy && (gnkjiy = {});
    var y4pi = Math[g[472]](Date[g[160]]() / 0x3e8);
    gnkjiy[g[339]] = y4pi, gnkjiy[g[473]] = wen_jk;
    var qr6dtf = Object[g[474]](gnkjiy)[g[475]](),
        pom4 = '',
        h8_wek = '';
    for (var jixgy4 = 0x0; jixgy4 < qr6dtf[g[10]]; jixgy4++) {
        pom4 = pom4 + (jixgy4 == 0x0 ? '' : '&') + qr6dtf[jixgy4] + gnkjiy[qr6dtf[jixgy4]], h8_wek = h8_wek + (jixgy4 == 0x0 ? '' : '&') + qr6dtf[jixgy4] + '=' + encodeURIComponent(gnkjiy[qr6dtf[jixgy4]]);
    }
    pom4 = pom4 + p4H[g[187]];
    var we_k = g[476] + md5(pom4);
    send($zob + '?' + h8_wek + (h8_wek == '' ? '' : '&') + we_k, null, d6trf, b7l9$2, qvdfu5, gynj4i || function (kw_e8n) {
        return kw_e8n[g[236]] == g[329];
    }, null, g[477]);
}, window[g[478]] = function ($lm7z, c7lzom) {
    var xi4cpg = 0x0;
    p4H[g[24]] && (xi4cpg = p4H[g[24]][g[25]]), sendApi(p4H[g[183]], g[479], {
        'partnerId': p4H[g[189]],
        'gamePkg': p4H[g[23]],
        'logTime': Math[g[472]](Date[g[160]]() / 0x3e8),
        'platformUid': p4H[g[335]],
        'type': $lm7z,
        'serverId': xi4cpg
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[g[480]] = function (b9l7z$) {
    sendApi(p4H[g[181]], g[481], {
        'partner_id': p4H[g[189]],
        'uid': p4H[g[20]],
        'version': p4H[g[93]],
        'game_pkg': p4H[g[23]],
        'device': p4H[g[190]]
    }, p4HS1, pSH4, pH1);
}, window[g[482]] = function (cpzoml) {
    if (cpzoml && cpzoml[g[236]] === g[329] && cpzoml[g[235]]) {
        cpzoml[g[235]][g[483]]({
            'id': -0x2,
            'name': g[484]
        }), cpzoml[g[235]][g[483]]({
            'id': -0x1,
            'name': g[485]
        }), p4H[g[486]] = cpzoml[g[235]];
        if (window[g[487]]) window[g[487]][g[488]]();
    } else {
        p4H[g[489]] = ![];
        var cpxo4m = cpzoml ? cpzoml[g[236]] : '';
        window[g[250]](0x7, g[490] + cpxo4m), window[g[221]](g[491] + cpxo4m);
    }
}, window[g[492]] = function (d25v) {
    sendApi(p4H[g[181]], g[493], {
        'partner_id': p4H[g[189]],
        'uid': p4H[g[20]],
        'version': p4H[g[93]],
        'game_pkg': p4H[g[23]],
        'device': p4H[g[190]]
    }, p14S, pSH4, pH1);
}, window[g[494]] = function (vb729) {
    p4H[g[495]] = ![];
    if (vb729 && vb729[g[236]] === g[329] && vb729[g[235]]) {
        for (var jk_ny = 0x0; jk_ny < vb729[g[235]][g[10]]; jk_ny++) {
            vb729[g[235]][jk_ny][g[372]] = p4S1(vb729[g[235]][jk_ny]);
        }
        p4H[g[192]][-0x1] = window[g[496]](vb729[g[235]]), window[g[487]][g[497]](-0x1);
    } else {
        var f5dvuq = vb729 ? vb729[g[236]] : '';
        window[g[250]](0x8, g[498] + f5dvuq), window[g[221]](g[499] + f5dvuq);
    }
}, window[g[500]] = function (u2d) {
    sendApi(p4H[g[181]], g[493], {
        'partner_id': p4H[g[189]],
        'uid': p4H[g[20]],
        'version': p4H[g[93]],
        'game_pkg': p4H[g[23]],
        'device': p4H[g[190]]
    }, u2d, pSH4, pH1);
}, window[g[501]] = function (uq5dv2, jg_n) {
    sendApi(p4H[g[181]], g[502], {
        'partner_id': p4H[g[189]],
        'uid': p4H[g[20]],
        'version': p4H[g[93]],
        'game_pkg': p4H[g[23]],
        'device': p4H[g[190]],
        'server_group_id': jg_n
    }, pS41, pSH4, pH1);
}, window[g[503]] = function (sw_) {
    p4H[g[495]] = ![];
    if (sw_ && sw_[g[236]] === g[329] && sw_[g[235]] && sw_[g[235]][g[235]]) {
        var hw8e_k = sw_[g[235]][g[504]],
            l$7ozm = [];
        for (var lom$z7 = 0x0; lom$z7 < sw_[g[235]][g[235]][g[10]]; lom$z7++) {
            sw_[g[235]][g[235]][lom$z7][g[372]] = p4S1(sw_[g[235]][g[235]][lom$z7]), (l$7ozm[g[10]] == 0x0 || sw_[g[235]][g[235]][lom$z7][g[372]] != 0x0) && (l$7ozm[l$7ozm[g[10]]] = sw_[g[235]][g[235]][lom$z7]);
        }
        p4H[g[192]][hw8e_k] = window[g[496]](l$7ozm), window[g[487]][g[497]](hw8e_k);
    } else {
        var kew8n = sw_ ? sw_[g[236]] : '';
        window[g[250]](0x9, g[505] + kew8n), window[g[221]](g[506] + kew8n);
    }
}, window[g[507]] = function (ew_kh8) {
    sendApi(p4H[g[181]], g[508], {
        'partner_id': p4H[g[189]],
        'uid': p4H[g[20]],
        'version': p4H[g[93]],
        'game_pkg': p4H[g[23]],
        'device': p4H[g[190]]
    }, reqServerRecommendCallBack, pSH4, pH1);
}, window[g[509]] = function (bv92$) {
    p4H[g[495]] = ![];
    if (bv92$ && bv92$[g[236]] === g[329] && bv92$[g[235]]) {
        for (var $vb792 = 0x0; $vb792 < bv92$[g[235]][g[10]]; $vb792++) {
            bv92$[g[235]][$vb792][g[372]] = p4S1(bv92$[g[235]][$vb792]);
        }
        p4H[g[192]][-0x2] = window[g[496]](bv92$[g[235]]), window[g[487]][g[497]](-0x2);
    } else {
        var fudq56 = bv92$ ? bv92$[g[236]] : '';
        window[g[250]](0xa, g[510] + fudq56), alert(g[511] + fudq56);
    }
}, window[g[496]] = function (lb92$7) {
    return lb92$7;
}, window[g[512]] = function (n4jgyi, yx4igp) {
    n4jgyi = n4jgyi || p4H[g[24]][g[25]], sendApi(p4H[g[181]], g[513], {
        'type': '4',
        'game_pkg': p4H[g[23]],
        'server_id': n4jgyi
    }, yx4igp);
}, window[g[514]] = function (xmczp, vdq, f5r6dq, ozb$) {
    f5r6dq = f5r6dq || p4H[g[24]][g[25]], sendApi(p4H[g[181]], g[515], {
        'type': xmczp,
        'game_pkg': vdq,
        'server_id': f5r6dq
    }, ozb$);
}, window[g[516]] = function (ud6qf, d5uq2v) {
    sendApi(p4H[g[181]], g[517], { 'game_pkg': ud6qf }, d5uq2v);
}, window[g[518]] = function (mzcplo) {
    if (mzcplo) {
        if (mzcplo[g[372]] == 0x1) {
            if (mzcplo[g[519]] == 0x3) return 0x3;else return mzcplo[g[519]] == 0x1 ? 0x2 : 0x1;
        } else return mzcplo[g[372]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[g[520]] = function (a0hes8, rf6q) {
    p4H[g[521]] = {
        'step': a0hes8,
        'server_id': rf6q
    };
    var ehas80 = this;
    p14SH({ 'title': g[522] }), sendApi(p4H[g[181]], g[523], {
        'partner_id': p4H[g[189]],
        'uid': p4H[g[20]],
        'game_pkg': p4H[g[23]],
        'server_id': rf6q,
        'platform': p4H[g[97]],
        'platform_uid': p4H[g[335]],
        'check_login_time': p4H[g[338]],
        'check_login_sign': p4H[g[336]],
        'version_name': p4H[g[293]]
    }, pH14S, pSH4, pH1, function (enwk_j) {
        return enwk_j[g[236]] == g[329] || enwk_j[g[1]] == g[524] || enwk_j[g[1]] == g[525];
    });
}, window[g[526]] = function (t31rf) {
    var ml$zo7 = this;
    if (t31rf && t31rf[g[236]] === g[329] && t31rf[g[235]]) {
        var p4ix = p4H[g[24]];
        p4ix[g[527]] = p4H[g[193]], p4ix[g[337]] = String(t31rf[g[235]][g[528]]), p4ix[g[199]] = parseInt(t31rf[g[235]][g[339]]);
        if (t31rf[g[235]][g[529]]) p4ix[g[529]] = parseInt(t31rf[g[235]][g[529]]);else p4ix[g[529]] = parseInt(t31rf[g[235]][g[25]]);
        p4ix[g[530]] = 0x0, p4ix[g[22]] = p4H[g[386]], p4ix[g[531]] = t31rf[g[235]][g[532]], p4ix[g[533]] = t31rf[g[235]][g[533]];
        if (t31rf[g[235]][g[534]]) p4ix[g[534]] = parseInt(t31rf[g[235]][g[534]]);
        console[g[47]](g[535] + JSON[g[28]](p4ix[g[533]])), p4H[g[357]] == 0x1 && p4ix[g[533]] && p4ix[g[533]][g[536]] == 0x1 && (p4H[g[537]] = 0x1, window[g[37]][g[38]][g[538]]()), pHS14();
    } else {
        if (p4H[g[521]][g[539]] >= 0x3) {
            var ngyj4i = t31rf ? t31rf[g[236]] : '';
            window[g[250]](0xc, g[540] + ngyj4i), pH1(JSON[g[28]](t31rf)), window[g[221]](g[541] + ngyj4i);
        } else sendApi(p4H[g[181]], g[312], {
            'platform': p4H[g[179]],
            'partner_id': p4H[g[189]],
            'token': p4H[g[306]],
            'game_pkg': p4H[g[23]],
            'deviceId': p4H[g[190]],
            'scene': g[313] + p4H[g[191]]
        }, function (mczl) {
            if (!mczl || mczl[g[236]] != g[329]) {
                window[g[221]](g[331] + mczl && mczl[g[236]]);
                return;
            }
            p4H[g[336]] = String(mczl[g[337]]), p4H[g[338]] = String(mczl[g[339]]), setTimeout(function () {
                pH1S4(p4H[g[521]][g[539]] + 0x1, p4H[g[521]][g[25]]);
            }, 0x5dc);
        }, pSH4, pH1, function (qu2) {
            return qu2[g[236]] == g[329] || qu2[g[236]] == g[542];
        });
    }
}, window[g[543]] = function () {
    ServerLoading[g[38]][g[377]](p4H[g[357]]), window[g[207]] = !![], window[g[69]]();
}, window[g[68]] = function () {
    if (window[g[67]] && window[g[76]] && window[g[208]] && window[g[209]] && window[g[210]] && window[g[212]]) {
        if (!window[g[544]][g[38]]) {
            console[g[47]](g[545] + window[g[544]][g[38]]);
            var hw8e_s = wx[g[546]](),
                df5r6q = hw8e_s[g[155]] ? hw8e_s[g[155]] : 0x0,
                olmcpz = {
                'cdn': window[g[16]][g[22]],
                'spareCdn': window[g[16]][g[291]],
                'newRegister': window[g[16]][g[357]],
                'wxPC': window[g[16]][g[126]],
                'wxIOS': window[g[16]][g[120]],
                'wxAndroid': window[g[16]][g[123]],
                'wxParam': {
                    'limitLoad': window[g[16]][g[130]],
                    'benchmarkLevel': window[g[16]][g[131]],
                    'wxFrom': window[g[6]][g[298]] == g[547] ? 0x1 : 0x0,
                    'wxSDKVersion': window[g[45]]
                },
                'configType': window[g[16]][g[200]],
                'exposeType': window[g[16]][g[202]],
                'scene': df5r6q,
                'video_type': window[g[16]][g[308]],
                'ad_flag': window[g[16]][g[310]]
            };
            if (window[g[389]]) for (var q52duv in window[g[389]]) {
                if (!olmcpz[q52duv]) olmcpz[q52duv] = window[g[389]][q52duv];
            }
            new window[g[544]](olmcpz, window[g[16]][g[21]], window[g[173]]);
        }
    }
}, window[g[69]] = function () {
    if (window[g[67]] && window[g[76]] && window[g[208]] && window[g[209]] && window[g[210]] && window[g[212]] && window[g[207]] && window[g[211]]) {
        p14HS();
        if (!pHS4) {
            pHS4 = !![];
            if (!window[g[544]][g[38]]) window[g[68]]();
            var vu29q = 0x0,
                fr613 = wx[g[548]]();
            fr613 && (window[g[16]][g[125]] && (vu29q = fr613[g[115]]), console[g[1]](g[549] + fr613[g[115]] + g[550] + fr613[g[116]] + g[551] + fr613[g[117]] + g[552] + fr613[g[118]] + g[553] + fr613[g[554]] + g[555] + fr613[g[556]]));
            var pmlco = {};
            for (const khew8 in p4H[g[24]]) {
                pmlco[khew8] = p4H[g[24]][khew8];
            }
            var tdq6r = {
                'channel': window[g[16]][g[194]],
                'account': window[g[16]][g[20]],
                'userId': window[g[16]][g[334]],
                'cdn': window[g[16]][g[22]],
                'data': window[g[16]][g[235]],
                'package': window[g[16]][g[177]],
                'newRegister': window[g[16]][g[357]],
                'pkgName': window[g[16]][g[23]],
                'partnerId': window[g[16]][g[189]],
                'platform_uid': window[g[16]][g[335]],
                'deviceId': window[g[16]][g[190]],
                'selectedServer': pmlco,
                'configType': window[g[16]][g[200]],
                'exposeType': window[g[16]][g[202]],
                'debugUsers': window[g[16]][g[197]],
                'wxMenuTop': vu29q,
                'wxShield': window[g[16]][g[205]],
                'encryptParam': window[g[16]][g[203]],
                'wx_channel': window[g[16]][g[307]],
                'zsy_tp_state': window[g[16]][g[309]]
            };
            if (window[g[389]]) for (var q5u2 in window[g[389]]) {
                tdq6r[q5u2] = window[g[389]][q5u2];
            }
            window[g[544]][g[38]][g[557]](tdq6r);
            if (p4H[g[24]] && p4H[g[24]][g[25]]) localStorage[g[558]](g[342] + p4H[g[23]] + p4H[g[20]], p4H[g[24]][g[25]]);
        }
    } else console[g[1]](g[559] + window[g[67]] + g[560] + window[g[76]] + g[561] + window[g[208]] + g[562] + window[g[209]] + g[563] + window[g[210]] + g[564] + window[g[212]] + g[565] + window[g[207]] + g[566] + window[g[211]]);
};