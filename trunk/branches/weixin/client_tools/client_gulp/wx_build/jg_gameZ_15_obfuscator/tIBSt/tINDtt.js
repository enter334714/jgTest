var P = wx.$y;
import Tk$pwf2 from '../ttkttt/t6ktgt.js';
window[P[167]] = { 'wxVersion': window[P[6]][P[7]] }, window[P[168]] = ![], window[P[169]] = 0x1, window[P[170]] = 0x1, window[P[171]] = !![], window[P[172]] = !![], window[P[173]] = '', window[P[174]] = ![], window[P[16]] = {
    'base_cdn': P[175],
    'cdn': P[175]
}, P_U9[P[176]] = {}, P_U9[P[177]] = '0', P_U9[P[93]] = window[P[167]][P[178]], P_U9[P[128]] = '', P_U9['os'] = '1', P_U9[P[179]] = P[180], P_U9[P[181]] = P[182], P_U9[P[183]] = P[184], P_U9[P[185]] = P[186], P_U9[P[187]] = P[188], P_U9[P[189]] = '1', P_U9[P[23]] = '', P_U9[P[190]] = '', P_U9[P[191]] = 0x0, P_U9[P[192]] = {}, P_U9[P[193]] = parseInt(P_U9[P[189]]), P_U9[P[194]] = P_U9[P[189]], P_U9[P[24]] = {}, P_U9[P[31]] = P[195], P_U9[P[196]] = ![], P_U9[P[197]] = P[198], P_U9[P[199]] = Date[P[160]](), P_U9[P[200]] = P[201], P_U9[P[202]] = '_a', P_U9[P[203]] = 0x2, P_U9[P[21]] = 0x7c1, P_U9[P[178]] = window[P[167]][P[178]], P_U9[P[204]] = ![], P_U9[P[120]] = ![], P_U9[P[123]] = ![], P_U9[P[126]] = ![], window[P[205]] = 0x5, window[P[206]] = ![], window[P[67]] = ![], window[P[76]] = ![], window[P[207]] = ![], window[P[208]] = ![], window[P[209]] = ![], window[P[210]] = ![], window[P[211]] = ![], window[P[212]] = ![], window[P[213]] = null, window[P[214]] = function (ysl_r) {
    console[P[47]](P[214], ysl_r), wx[P[215]]({}), wx[P[54]]({
        'title': P[85],
        'content': ysl_r,
        'success'(t2w) {
            if (t2w[P[216]]) console[P[47]](P[217]);else t2w[P[218]] && console[P[47]](P[219]);
        }
    });
}, window[P[220]] = function (dx8no) {
    console[P[47]](P[221], dx8no), P_GU9V(), wx[P[54]]({
        'title': P[85],
        'content': dx8no,
        'confirmText': P[222],
        'cancelText': P[223],
        'success'(x8ondg) {
            if (x8ondg[P[216]]) window[P[82]]();else x8ondg[P[218]] && (console[P[47]](P[224]), wx[P[225]]({}));
        }
    });
}, window[P[226]] = function (od$8) {
    console[P[47]](P[226], od$8), wx[P[54]]({
        'title': P[85],
        'content': od$8,
        'confirmText': P[227],
        'showCancel': ![],
        'complete'(lry_) {
            console[P[47]](P[224]), wx[P[225]]({});
        }
    });
}, window[P[228]] = ![], window[P[229]] = function (xsgyq_) {
    window[P[228]] = !![], wx[P[230]](xsgyq_);
}, window[P[231]] = function () {
    window[P[228]] && (window[P[228]] = ![], wx[P[215]]({}));
}, window[P[232]] = function (vtzp6) {
    window[P[37]][P[38]][P[232]](vtzp6);
}, window[P[233]] = function (xsy_q, scr) {
    Tk$pwf2[P[233]](xsy_q, function (ej160v) {
        ej160v && ej160v[P[234]] ? ej160v[P[234]][P[235]] == 0x1 ? scr(!![]) : (scr(![]), console[P[1]](P[236] + ej160v[P[234]][P[237]])) : console[P[47]](P[233], ej160v);
    });
}, window[P[238]] = function (d2f$) {
    console[P[47]](P[239], d2f$);
}, window[P[240]] = function (dqnxg8) {}, window[P[241]] = function (zpev6t, j59h10, m_csrl) {}, window[P[242]] = function (yg8qn) {
    console[P[47]](P[243], yg8qn), window[P[37]][P[38]][P[244]](), window[P[37]][P[38]][P[245]](), window[P[37]][P[38]][P[246]]();
}, window[P[247]] = function (pzet6w) {
    window[P[248]](0xe, P[249] + pzet6w), window[P[220]](P[250]);
    var $knd8o = {
        'id': window[P[16]][P[17]],
        'role': window[P[16]][P[18]],
        'level': window[P[16]][P[19]],
        'account': window[P[16]][P[20]],
        'version': window[P[16]][P[21]],
        'cdn': window[P[16]][P[22]],
        'pkgName': window[P[16]][P[23]],
        'gamever': window[P[6]][P[7]],
        'serverid': window[P[16]][P[24]] ? window[P[16]][P[24]][P[25]] : 0x0,
        'systemInfo': window[P[26]],
        'error': P[251],
        'stack': pzet6w ? pzet6w : P[250]
    },
        b3i4m7 = JSON[P[28]]($knd8o);
    console[P[29]](P[252] + b3i4m7), window[P[31]](b3i4m7);
}, window[P[248]] = function (_gnxy, n8xdqg) {
    sendApi(P_U9[P[183]], P[253], {
        'game_pkg': P_U9[P[23]],
        'partner_id': P_U9[P[189]],
        'server_id': P_U9[P[24]] && P_U9[P[24]][P[25]] > 0x0 ? P_U9[P[24]][P[25]] : 0x0,
        'uid': P_U9[P[20]] > 0x0 ? P_U9[P[20]] : 0x0,
        'type': _gnxy,
        'info': n8xdqg
    });
}, window[P[254]] = function (e16zvt) {
    var dn8ok = JSON[P[255]](e16zvt);
    dn8ok[P[256]] = window[P[6]][P[7]], dn8ok[P[257]] = window[P[16]][P[24]] ? window[P[16]][P[24]][P[25]] : 0x0, dn8ok[P[26]] = window[P[26]];
    var m3c = JSON[P[28]](dn8ok);
    console[P[29]](P[258] + m3c), window[P[31]](m3c);
}, window[P[83]] = function (crlm7, k$fo8) {
    var ia4u = {
        'id': window[P[16]][P[17]],
        'role': window[P[16]][P[18]],
        'level': window[P[16]][P[19]],
        'account': window[P[16]][P[20]],
        'version': window[P[16]][P[21]],
        'cdn': window[P[16]][P[22]],
        'pkgName': window[P[16]][P[23]],
        'gamever': window[P[6]][P[7]],
        'serverid': window[P[16]][P[24]] ? window[P[16]][P[24]][P[25]] : 0x0,
        'systemInfo': window[P[26]],
        'error': crlm7,
        'stack': k$fo8
    },
        qxysg = JSON[P[28]](ia4u);
    console[P[161]](P[259] + qxysg), window[P[31]](qxysg);
}, window[P[31]] = function (wkfpt2) {
    if (window[P[16]][P[129]] == P[260]) return;
    var lc7rbm = P_U9[P[31]] + P[261] + P_U9[P[20]];
    wx[P[262]]({
        'url': lc7rbm,
        'method': P[263],
        'data': wkfpt2,
        'header': {
            'content-type': P[264],
            'cache-control': P[265]
        },
        'success': function (f2dk$) {
            DEBUG && console[P[47]](P[266], lc7rbm, wkfpt2, f2dk$);
        },
        'fail': function (xqd8gn) {
            DEBUG && console[P[47]](P[266], lc7rbm, wkfpt2, xqd8gn);
        },
        'complete': function () {}
    });
}, window[P[267]] = function () {
    function bmclr7() {
        return ((0x1 + Math[P[268]]()) * 0x10000 | 0x0)[P[269]](0x10)[P[270]](0x1);
    }
    return bmclr7() + bmclr7() + '-' + bmclr7() + '-' + bmclr7() + '-' + bmclr7() + '+' + bmclr7() + bmclr7() + bmclr7();
}, window[P[82]] = function () {
    console[P[47]](P[271]);
    var bmi347 = Tk$pwf2[P[272]]();
    P_U9[P[194]] = bmi347[P[273]], P_U9[P[193]] = bmi347[P[273]], P_U9[P[189]] = bmi347[P[273]], P_U9[P[23]] = bmi347[P[274]];
    var z16te = { 'game_ver': P_U9[P[93]] };
    P_U9[P[190]] = this[P[267]](), P_GUV9({ 'title': P[275] }), Tk$pwf2[P[276]](z16te, this[P[277]][P[278]](this));
}, window[P[277]] = function ($wko2f) {
    var ze6wt = $wko2f[P[279]];
    sdkInitRes = $wko2f, console[P[47]](P[280] + ze6wt + P[281] + (ze6wt == 0x1) + P[282] + $wko2f[P[7]] + P[283] + window[P[167]][P[178]]);
    if (!$wko2f[P[7]] || window[P[41]](window[P[167]][P[178]], $wko2f[P[7]]) < 0x0) console[P[47]](P[284]), P_U9[P[181]] = P[285], P_U9[P[183]] = P[286], P_U9[P[185]] = P[287], P_U9[P[22]] = P[288], P_U9[P[289]] = P[290], P_U9[P[291]] = 'xz', P_U9[P[204]] = ![];else window[P[41]](window[P[167]][P[178]], $wko2f[P[7]]) == 0x0 ? (console[P[47]](P[292]), P_U9[P[181]] = P[182], P_U9[P[183]] = P[184], P_U9[P[185]] = P[186], P_U9[P[22]] = P[293], P_U9[P[289]] = P[290], P_U9[P[291]] = P[294], P_U9[P[204]] = !![]) : (console[P[47]](P[295]), P_U9[P[181]] = P[182], P_U9[P[183]] = P[184], P_U9[P[185]] = P[186], P_U9[P[22]] = P[296], P_U9[P[289]] = P[290], P_U9[P[291]] = P[294], P_U9[P[204]] = ![]);
    P_U9[P[191]] = config[P[297]] ? config[P[297]] : 0x0, this[P[298]](), this[P[299]](), window[P[300]] = 0x5, P_GUV9({ 'title': P[301] }), Tk$pwf2[P[302]](this[P[303]][P[278]](this));
}, window[P[300]] = 0x5, window[P[303]] = function (zetw6p, vt6e) {
    if (zetw6p == 0x0 && vt6e && vt6e[P[304]]) {
        P_U9[P[305]] = vt6e[P[304]], P_U9[P[306]] = vt6e[P[306]];
        var r734mb = this;
        P_GUV9({ 'title': P[307] }), sendApi(P_U9[P[181]], P[308], {
            'platform': P_U9[P[179]],
            'partner_id': P_U9[P[189]],
            'token': vt6e[P[304]],
            'game_pkg': P_U9[P[23]],
            'deviceId': P_U9[P[190]],
            'scene': P[309] + P_U9[P[191]]
        }, this[P[310]][P[278]](this), P_V9U, P_9G);
    } else vt6e && vt6e[P[65]] && window[P[300]] > 0x0 && (vt6e[P[65]][P[121]](P[311]) != -0x1 || vt6e[P[65]][P[121]](P[312]) != -0x1 || vt6e[P[65]][P[121]](P[313]) != -0x1 || vt6e[P[65]][P[121]](P[314]) != -0x1 || vt6e[P[65]][P[121]](P[315]) != -0x1 || vt6e[P[65]][P[121]](P[316]) != -0x1) ? (window[P[300]]--, Tk$pwf2[P[302]](this[P[303]][P[278]](this))) : (window[P[248]](0x1, P[317] + zetw6p + P[318] + (vt6e ? vt6e[P[65]] : '')), window[P[83]](P[319], JSON[P[28]]({
        'status': zetw6p,
        'data': vt6e
    })), window[P[220]](P[320] + (vt6e && vt6e[P[65]] ? '，' + vt6e[P[65]] : '')));
}, window[P[310]] = function (pzevt) {
    if (!pzevt) {
        window[P[248]](0x2, P[321]), window[P[83]](P[322], P[323]), window[P[220]](P[324]);
        return;
    }
    if (pzevt[P[235]] != P[325]) {
        window[P[248]](0x2, P[326] + pzevt[P[235]]), window[P[83]](P[322], JSON[P[28]](pzevt)), window[P[220]](P[327] + pzevt[P[235]]);
        return;
    }
    if (pzevt[P[328]] == 0x1) {
        window[P[220]](P[329]);
        return;
    }
    P_U9[P[330]] = String(pzevt[P[20]]), P_U9[P[20]] = String(pzevt[P[20]]), P_U9[P[97]] = String(pzevt[P[97]]), P_U9[P[194]] = String(pzevt[P[97]]), P_U9[P[331]] = String(pzevt[P[331]]), P_U9[P[332]] = String(pzevt[P[333]]), P_U9[P[334]] = String(pzevt[P[335]]), P_U9[P[333]] = '';
    var ys_xqg = this;
    P_GUV9({ 'title': P[336] });
    var pwt2 = localStorage[P[337]](P[338] + P_U9[P[23]] + P_U9[P[20]]);
    if (pwt2 && pwt2 != '') {
        var g_qyxs = Number(pwt2);
        ys_xqg[P[339]](g_qyxs);
    } else ys_xqg[P[340]]();
}, window[P[340]] = function () {
    var v0z1 = this;
    sendApi(P_U9[P[181]], P[341], {
        'partner_id': P_U9[P[189]],
        'uid': P_U9[P[20]],
        'version': P_U9[P[93]],
        'game_pkg': P_U9[P[23]],
        'device': P_U9[P[190]]
    }, v0z1[P[342]][P[278]](v0z1), P_V9U, P_9G);
}, window[P[342]] = function (j091h5) {
    if (!j091h5) {
        window[P[248]](0x3, P[343]), window[P[220]](P[343]);
        return;
    }
    if (j091h5[P[235]] != P[325]) {
        window[P[248]](0x3, P[344] + j091h5[P[235]]), window[P[220]](P[344] + j091h5[P[235]]);
        return;
    }
    if (!j091h5[P[234]] || j091h5[P[234]][P[10]] == 0x0) {
        window[P[248]](0x3, P[345]), window[P[220]](P[346]);
        return;
    }
    this[P[347]](j091h5);
}, window[P[339]] = function (rb34m7) {
    var fk$w2p = this;
    sendApi(P_U9[P[181]], P[348], {
        'server_id': rb34m7,
        'time': Date[P[160]]() / 0x3e8
    }, fk$w2p[P[349]][P[278]](fk$w2p), P_V9U, P_9G);
}, window[P[349]] = function (wt6pez) {
    if (!wt6pez) {
        window[P[248]](0x4, P[350]), this[P[340]]();
        return;
    }
    if (wt6pez[P[235]] != P[325]) {
        window[P[248]](0x4, P[351] + wt6pez[P[235]]), this[P[340]]();
        return;
    }
    if (!wt6pez[P[234]] || wt6pez[P[234]][P[10]] == 0x0) {
        window[P[248]](0x4, P[352]), this[P[340]]();
        return;
    }
    this[P[347]](wt6pez);
}, window[P[347]] = function ($x8nd) {
    P_U9[P[353]] = $x8nd[P[354]] != undefined ? $x8nd[P[354]] : 0x0, P_U9[P[24]] = {
        'server_id': String($x8nd[P[234]][0x0][P[25]]),
        'server_name': String($x8nd[P[234]][0x0][P[355]]),
        'entry_ip': $x8nd[P[234]][0x0][P[356]],
        'entry_port': parseInt($x8nd[P[234]][0x0][P[357]]),
        'status': P_UVG($x8nd[P[234]][0x0]),
        'start_time': $x8nd[P[234]][0x0][P[358]],
        'maintain_time': $x8nd[P[234]][0x0][P[359]] ? $x8nd[P[234]][0x0][P[359]] : '',
        'is_recommend': $x8nd[P[234]][0x0][P[360]],
        'cdn': P_U9[P[22]]
    }, this[P[361]](), window[P[37]] && window[P[37]][P[38]][P[362]] && window[P[37]][P[38]][P[362]](sdkInitRes[P[363]], sdkInitRes[P[364]], sdkInitRes[P[365]], sdkInitRes[P[366]], sdkInitRes[P[367]]);
}, window[P[361]] = function () {
    if (P_U9[P[353]] == 0x1) {
        var ze10v = P_U9[P[24]][P[368]];
        if (ze10v === -0x1 || ze10v === 0x0) {
            window[P[248]](0xf, P[369] + P_U9[P[24]]['id'] + P[370] + P_U9[P[24]][P[368]]), window[P[220]](ze10v === -0x1 ? P[371] : P[372]);
            return;
        }
        P_9GVU(0x0, P_U9[P[24]][P[25]]), window[P[37]][P[38]][P[373]](P_U9[P[353]]);
    } else window[P[37]][P[38]][P[374]](), P_GU9V();
    window[P[211]] = !![], window[P[68]](), window[P[69]]();
}, window[P[298]] = function () {
    sendApi(P_U9[P[181]], P[375], {
        'game_pkg': P_U9[P[23]],
        'version_name': P_U9[P[291]]
    }, this[P[376]][P[278]](this), P_V9U, P_9G);
}, window[P[376]] = function (c_lrm) {
    if (!c_lrm) {
        window[P[248]](0x5, P[377]), window[P[220]](P[377]);
        return;
    }
    if (c_lrm[P[235]] != P[325]) {
        window[P[248]](0x5, P[378] + c_lrm[P[235]]), window[P[220]](P[378] + c_lrm[P[235]]);
        return;
    }
    if (!c_lrm[P[234]] || !c_lrm[P[234]][P[93]]) {
        window[P[248]](0x5, P[379] + (c_lrm[P[234]] && c_lrm[P[234]][P[93]])), window[P[220]](P[379] + (c_lrm[P[234]] && c_lrm[P[234]][P[93]]));
        return;
    }
    c_lrm[P[234]][P[380]] && c_lrm[P[234]][P[380]][P[10]] > 0xa && (P_U9[P[381]] = c_lrm[P[234]][P[380]], P_U9[P[22]] = c_lrm[P[234]][P[380]]), c_lrm[P[234]][P[93]] && (P_U9[P[21]] = c_lrm[P[234]][P[93]]), console[P[1]](P[382] + P_U9[P[21]] + P[383] + P_U9[P[291]]), window[P[209]] = !![], window[P[68]](), window[P[69]]();
}, window[P[384]], window[P[299]] = function () {
    sendApi(P_U9[P[181]], P[385], { 'game_pkg': P_U9[P[23]] }, this[P[386]][P[278]](this), P_V9U, P_9G);
}, window[P[386]] = function (scrl_y) {
    if (scrl_y && scrl_y[P[235]] === P[325] && scrl_y[P[234]]) {
        window[P[384]] = scrl_y[P[234]];
        for (var b4i3au in scrl_y[P[234]]) {
            P_U9[b4i3au] = scrl_y[P[234]][b4i3au];
        }
        window[P[387]]();
    } else window[P[248]](0xb, P[388]), console[P[1]](P[389] + scrl_y[P[235]]);
    window[P[210]] = !![], window[P[69]]();
}, window[P[387]] = function () {
    var rlscm7 = P_U9[P[204]] || P_U9[P[390]] && P_U9[P[390]] > 0x0;
    if (rlscm7) {
        var pkftw = P_U9[P[391]],
            $8ndko = pkftw && pkftw[P[10]] == 0x9;
        $8ndko && (window[P[392]] = pkftw);
        var v0j9h = P_U9[P[393]],
            tfwz2 = v0j9h && v0j9h[P[42]]('#')[P[10]] == 0x4;
        tfwz2 && (window[P[394]] = v0j9h);
    }
}, window[P[395]] = function (h915, noxd8g, ndxgo, l7bmcr, d8fo, wkpft2, i374ub, dx8$on, _ly, t61zev) {
    d8fo = String(d8fo);
    var $kn8o = i374ub,
        tezvp6 = dx8$on;
    P_U9[P[176]][d8fo] = {
        'productid': d8fo,
        'productname': $kn8o,
        'productdesc': tezvp6,
        'roleid': h915,
        'rolename': noxd8g,
        'rolelevel': ndxgo,
        'price': wkpft2,
        'callback': _ly
    }, sendApi(P_U9[P[185]], P[396], {
        'game_pkg': P_U9[P[23]],
        'server_id': P_U9[P[24]][P[25]],
        'server_name': P_U9[P[24]][P[355]],
        'level': ndxgo,
        'uid': P_U9[P[20]],
        'role_id': h915,
        'role_name': noxd8g,
        'product_id': d8fo,
        'product_name': $kn8o,
        'product_desc': tezvp6,
        'money': wkpft2,
        'partner_id': P_U9[P[189]]
    }, toPayCallBack, P_V9U, P_9G);
}, window[P[397]] = function ($ondx) {
    if ($ondx && ($ondx[P[398]] === 0xc8 || $ondx[P[235]] == P[325])) {
        var yr_ = P_U9[P[176]][String($ondx[P[399]])];
        if (yr_[P[400]]) yr_[P[400]]($ondx[P[399]], $ondx[P[401]], -0x1);
        Tk$pwf2[P[402]]({
            'cpbill': $ondx[P[401]],
            'productid': $ondx[P[399]],
            'productname': yr_[P[403]],
            'productdesc': yr_[P[404]],
            'serverid': P_U9[P[24]][P[25]],
            'servername': P_U9[P[24]][P[355]],
            'roleid': yr_[P[405]],
            'rolename': yr_[P[406]],
            'rolelevel': yr_[P[407]],
            'price': yr_[P[408]],
            'extension': JSON[P[28]]({ 'cp_order_id': $ondx[P[401]] })
        }, function (d$xon8, lyc_rs) {
            yr_[P[400]] && d$xon8 == 0x0 && yr_[P[400]]($ondx[P[399]], $ondx[P[401]], d$xon8);
            console[P[1]](JSON[P[28]]({
                'type': P[409],
                'status': d$xon8,
                'data': $ondx,
                'role_name': yr_[P[406]]
            }));
            if (d$xon8 === 0x0) {} else {
                if (d$xon8 === 0x1) {} else {
                    if (d$xon8 === 0x2) {}
                }
            }
        });
    } else {
        var slrm = $ondx ? P[410] + $ondx[P[398]] + P[411] + $ondx[P[235]] + P[412] + $ondx[P[1]] : P[413];
        window[P[248]](0xd, P[414] + slrm), alert(slrm);
    }
}, window[P[415]] = function () {}, window[P[416]] = function (dnxqg, e016v, e6v0j, sgyql_, glysq_) {
    Tk$pwf2[P[417]](P_U9[P[24]][P[25]], P_U9[P[24]][P[355]] || P_U9[P[24]][P[25]], dnxqg, e016v, e6v0j), sendApi(P_U9[P[181]], P[418], {
        'game_pkg': P_U9[P[23]],
        'server_id': P_U9[P[24]][P[25]],
        'role_id': dnxqg,
        'uid': P_U9[P[20]],
        'role_name': e016v,
        'role_type': sgyql_,
        'level': e6v0j
    });
}, window[P[419]] = function (yql_g, pf$2k, nogx8, oxnd$8, vj1e90, r_ycl, uib734, w2kft, ow2f, ptw26z) {
    P_U9[P[17]] = yql_g, P_U9[P[18]] = pf$2k, P_U9[P[19]] = nogx8, Tk$pwf2[P[420]](P_U9[P[24]][P[25]], P_U9[P[24]][P[355]] || P_U9[P[24]][P[25]], yql_g, pf$2k, nogx8), sendApi(P_U9[P[181]], P[421], {
        'game_pkg': P_U9[P[23]],
        'server_id': P_U9[P[24]][P[25]],
        'role_id': yql_g,
        'uid': P_U9[P[20]],
        'role_name': pf$2k,
        'role_type': oxnd$8,
        'level': nogx8,
        'evolution': vj1e90
    });
}, window[P[422]] = function (k8dof, xqd8ng, zv1et6, e6wtp, d8xno$, g8dn, $o2f, w2t6z, x$od8, qg_xys) {
    P_U9[P[17]] = k8dof, P_U9[P[18]] = xqd8ng, P_U9[P[19]] = zv1et6, Tk$pwf2[P[423]](P_U9[P[24]][P[25]], P_U9[P[24]][P[355]] || P_U9[P[24]][P[25]], k8dof, xqd8ng, zv1et6), sendApi(P_U9[P[181]], P[421], {
        'game_pkg': P_U9[P[23]],
        'server_id': P_U9[P[24]][P[25]],
        'role_id': k8dof,
        'uid': P_U9[P[20]],
        'role_name': xqd8ng,
        'role_type': e6wtp,
        'level': zv1et6,
        'evolution': d8xno$
    });
}, window[P[424]] = function (biu347) {}, window[P[425]] = function (im437, pwtez) {
    Tk$pwf2[P[426]](P[426], { 'activity_id': pwtez }, function (pwz6et) {
        im437 && im437(pwz6et);
    });
}, window[P[427]] = function () {
    Tk$pwf2[P[427]]();
}, window[P[428]] = function () {
    Tk$pwf2[P[429]]();
}, window[P[430]] = function (n$k8, ztpwe6, x8nd, x_gnyq, r7bmlc, t6ezpw, tvz6ep, gx_qyn) {
    gx_qyn = gx_qyn || P_U9[P[24]][P[25]], sendApi(P_U9[P[181]], P[431], {
        'phone': n$k8,
        'role_id': ztpwe6,
        'uid': P_U9[P[20]],
        'game_pkg': P_U9[P[23]],
        'partner_id': P_U9[P[189]],
        'server_id': gx_qyn
    }, tvz6ep, 0x2, null, function () {
        return !![];
    });
}, window[P[151]] = function (s_clmr) {
    window[P[153]] = s_clmr, window[P[153]] && window[P[152]] && (console[P[1]](P[154] + window[P[152]][P[155]]), window[P[153]](window[P[152]]), window[P[152]] = null);
}, window[P[432]] = function ($d8nox, _qnygx, m47bi3, cyqls) {
    window[P[433]](P[434], {
        'game_pkg': window[P[16]][P[23]],
        'role_id': _qnygx,
        'server_id': m47bi3
    }, cyqls);
}, window[P[435]] = function (sqx_yg, ptew6z, epwzt6) {
    function xgd(w2pzt) {
        var bui47 = [],
            ow2$kf = [],
            z6wpt = epwzt6 || window[P[6]][P[436]];
        for (var fwkp$2 in z6wpt) {
            var m7slc = Number(fwkp$2);
            (!sqx_yg || !sqx_yg[P[10]] || sqx_yg[P[121]](m7slc) != -0x1) && (ow2$kf[P[44]](z6wpt[fwkp$2]), bui47[P[44]]([m7slc, 0x3]));
        }
        window[P[41]](window[P[45]], P[437]) >= 0x0 ? (console[P[47]](P[438]), Tk$pwf2[P[439]] && Tk$pwf2[P[439]](ow2$kf, function (qx8gyn) {
            console[P[47]](P[440]), console[P[47]](qx8gyn);
            if (qx8gyn && qx8gyn[P[65]] == P[441]) for (var v6zt in z6wpt) {
                if (qx8gyn[z6wpt[v6zt]] == P[442]) {
                    var p2ftwk = Number(v6zt);
                    for (var p6zvet = 0x0; p6zvet < bui47[P[10]]; p6zvet++) {
                        if (bui47[p6zvet][0x0] == p2ftwk) {
                            bui47[p6zvet][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[P[41]](window[P[45]], P[443]) >= 0x0 ? wx[P[444]]({
                'withSubscriptions': !![],
                'success': function (twpf) {
                    var p2tw = twpf[P[445]][P[446]];
                    if (p2tw) {
                        console[P[47]](P[447]), console[P[47]](p2tw);
                        for (var sqy_l in z6wpt) {
                            if (p2tw[z6wpt[sqy_l]] == P[442]) {
                                var fkp2$w = Number(sqy_l);
                                for (var ib4m37 = 0x0; ib4m37 < bui47[P[10]]; ib4m37++) {
                                    if (bui47[ib4m37][0x0] == fkp2$w) {
                                        bui47[ib4m37][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[P[47]](bui47), ptew6z && ptew6z(bui47);
                    } else console[P[47]](P[448]), console[P[47]](twpf), console[P[47]](bui47), ptew6z && ptew6z(bui47);
                },
                'fail': function () {
                    console[P[47]](P[449]), console[P[47]](bui47), ptew6z && ptew6z(bui47);
                }
            }) : (console[P[47]](P[450] + window[P[45]]), console[P[47]](bui47), ptew6z && ptew6z(bui47));
        })) : (console[P[47]](P[451] + window[P[45]]), console[P[47]](bui47), ptew6z && ptew6z(bui47)), wx[P[452]](xgd);
    }
    wx[P[453]](xgd);
}, window[P[454]] = {
    'isSuccess': ![],
    'level': P[455],
    'isCharging': ![]
}, window[P[456]] = function (peztw6) {
    wx[P[139]]({
        'success': function (mbc73) {
            var d8gox = window[P[454]];
            d8gox[P[457]] = !![], d8gox[P[141]] = Number(mbc73[P[141]])[P[458]](0x0), d8gox[P[143]] = mbc73[P[143]], peztw6 && peztw6(d8gox[P[457]], d8gox[P[141]], d8gox[P[143]]);
        },
        'fail': function (yrcs_) {
            console[P[47]](P[459], yrcs_[P[65]]);
            var j0hv9 = window[P[454]];
            peztw6 && peztw6(j0hv9[P[457]], j0hv9[P[141]], j0hv9[P[143]]);
        }
    });
}, window[P[144]] = function (gxqd) {
    wx[P[144]]({
        'success': function (j509) {
            gxqd && gxqd(!![], j509);
        },
        'fail': function (f$k2o) {
            gxqd && gxqd(![], f$k2o);
        }
    });
}, window[P[148]] = function (ynqxg8) {
    if (ynqxg8) wx[P[148]](ynqxg8);
}, window[P[460]] = function (fdok8) {
    wx[P[460]](fdok8);
}, window[P[433]] = function (sc7ml, i4mb73, rmlc7b, gy_x, wf2kp, lr7b, wpte6z, m34b7) {
    if (gy_x == undefined) gy_x = 0x1;
    wx[P[262]]({
        'url': sc7ml,
        'method': wpte6z || P[461],
        'responseType': P[462],
        'data': i4mb73,
        'header': { 'content-type': m34b7 || P[264] },
        'success': function (nx8d$o) {
            DEBUG && console[P[47]](P[463], sc7ml, info, nx8d$o);
            if (nx8d$o && nx8d$o[P[464]] == 0xc8) {
                var twz62 = nx8d$o[P[234]];
                !lr7b || lr7b(twz62) ? rmlc7b && rmlc7b(twz62) : window[P[465]](sc7ml, i4mb73, rmlc7b, gy_x, wf2kp, lr7b, nx8d$o);
            } else window[P[465]](sc7ml, i4mb73, rmlc7b, gy_x, wf2kp, lr7b, nx8d$o);
        },
        'fail': function ($odn8x) {
            DEBUG && console[P[47]](P[466], sc7ml, info, $odn8x), window[P[465]](sc7ml, i4mb73, rmlc7b, gy_x, wf2kp, lr7b, $odn8x);
        },
        'complete': function () {}
    });
}, window[P[465]] = function (y_clsr, $kp2f, yqx_ng, biua4, lcsyr, j61ev, _rycl) {
    biua4 - 0x1 > 0x0 ? setTimeout(function () {
        window[P[433]](y_clsr, $kp2f, yqx_ng, biua4 - 0x1, lcsyr, j61ev);
    }, 0x3e8) : lcsyr && lcsyr(JSON[P[28]]({
        'url': y_clsr,
        'response': _rycl
    }));
}, window[P[467]] = function (f2kpt, ubai43, qg_sxy, xo$n, ynx_, $kndo8, wt6zp2) {
    !qg_sxy && (qg_sxy = {});
    var lqyc_ = Math[P[468]](Date[P[160]]() / 0x3e8);
    qg_sxy[P[335]] = lqyc_, qg_sxy[P[469]] = ubai43;
    var kfp$2w = Object[P[470]](qg_sxy)[P[471]](),
        qn_xgy = '',
        p2tkwf = '';
    for (var z6wet = 0x0; z6wet < kfp$2w[P[10]]; z6wet++) {
        qn_xgy = qn_xgy + (z6wet == 0x0 ? '' : '&') + kfp$2w[z6wet] + qg_sxy[kfp$2w[z6wet]], p2tkwf = p2tkwf + (z6wet == 0x0 ? '' : '&') + kfp$2w[z6wet] + '=' + encodeURIComponent(qg_sxy[kfp$2w[z6wet]]);
    }
    qn_xgy = qn_xgy + P_U9[P[187]];
    var y_lcq = P[472] + md5(qn_xgy);
    send(f2kpt + '?' + p2tkwf + (p2tkwf == '' ? '' : '&') + y_lcq, null, xo$n, ynx_, $kndo8, wt6zp2 || function ($8kndo) {
        return $8kndo[P[235]] == P[325];
    }, null, P[473]);
}, window[P[474]] = function ($2pk, nxod) {
    var v9j1h0 = 0x0;
    P_U9[P[24]] && (v9j1h0 = P_U9[P[24]][P[25]]), sendApi(P_U9[P[183]], P[475], {
        'partnerId': P_U9[P[189]],
        'gamePkg': P_U9[P[23]],
        'logTime': Math[P[468]](Date[P[160]]() / 0x3e8),
        'platformUid': P_U9[P[331]],
        'type': $2pk,
        'serverId': v9j1h0
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[P[476]] = function (xyqn_) {
    sendApi(P_U9[P[181]], P[477], {
        'partner_id': P_U9[P[189]],
        'uid': P_U9[P[20]],
        'version': P_U9[P[93]],
        'game_pkg': P_U9[P[23]],
        'device': P_U9[P[190]]
    }, P_U9VG, P_V9U, P_9G);
}, window[P[478]] = function (et16zv) {
    if (et16zv && et16zv[P[235]] === P[325] && et16zv[P[234]]) {
        et16zv[P[234]][P[479]]({
            'id': -0x2,
            'name': P[480]
        }), et16zv[P[234]][P[479]]({
            'id': -0x1,
            'name': P[481]
        }), P_U9[P[482]] = et16zv[P[234]];
        if (window[P[483]]) window[P[483]][P[484]]();
    } else {
        P_U9[P[485]] = ![];
        var i7u3b4 = et16zv ? et16zv[P[235]] : '';
        window[P[248]](0x7, P[486] + i7u3b4), window[P[220]](P[487] + i7u3b4);
    }
}, window[P[488]] = function (qly_c) {
    sendApi(P_U9[P[181]], P[489], {
        'partner_id': P_U9[P[189]],
        'uid': P_U9[P[20]],
        'version': P_U9[P[93]],
        'game_pkg': P_U9[P[23]],
        'device': P_U9[P[190]]
    }, P_GUV, P_V9U, P_9G);
}, window[P[490]] = function (u4bia3) {
    P_U9[P[491]] = ![];
    if (u4bia3 && u4bia3[P[235]] === P[325] && u4bia3[P[234]]) {
        for (var qyl_ = 0x0; qyl_ < u4bia3[P[234]][P[10]]; qyl_++) {
            u4bia3[P[234]][qyl_][P[368]] = P_UVG(u4bia3[P[234]][qyl_]);
        }
        P_U9[P[192]][-0x1] = window[P[492]](u4bia3[P[234]]), window[P[483]][P[493]](-0x1);
    } else {
        var kod = u4bia3 ? u4bia3[P[235]] : '';
        window[P[248]](0x8, P[494] + kod), window[P[220]](P[495] + kod);
    }
}, window[P[496]] = function (xgodn) {
    sendApi(P_U9[P[181]], P[489], {
        'partner_id': P_U9[P[189]],
        'uid': P_U9[P[20]],
        'version': P_U9[P[93]],
        'game_pkg': P_U9[P[23]],
        'device': P_U9[P[190]]
    }, xgodn, P_V9U, P_9G);
}, window[P[497]] = function (pt6ev, y_lcsr) {
    sendApi(P_U9[P[181]], P[498], {
        'partner_id': P_U9[P[189]],
        'uid': P_U9[P[20]],
        'version': P_U9[P[93]],
        'game_pkg': P_U9[P[23]],
        'device': P_U9[P[190]],
        'server_group_id': y_lcsr
    }, P_VUG, P_V9U, P_9G);
}, window[P[499]] = function (do8xng) {
    P_U9[P[491]] = ![];
    if (do8xng && do8xng[P[235]] === P[325] && do8xng[P[234]] && do8xng[P[234]][P[234]]) {
        var brl7mc = do8xng[P[234]][P[500]],
            _glqsy = [];
        for (var ogdn8 = 0x0; ogdn8 < do8xng[P[234]][P[234]][P[10]]; ogdn8++) {
            do8xng[P[234]][P[234]][ogdn8][P[368]] = P_UVG(do8xng[P[234]][P[234]][ogdn8]), (_glqsy[P[10]] == 0x0 || do8xng[P[234]][P[234]][ogdn8][P[368]] != 0x0) && (_glqsy[_glqsy[P[10]]] = do8xng[P[234]][P[234]][ogdn8]);
        }
        P_U9[P[192]][brl7mc] = window[P[492]](_glqsy), window[P[483]][P[493]](brl7mc);
    } else {
        var i4bau = do8xng ? do8xng[P[235]] : '';
        window[P[248]](0x9, P[501] + i4bau), window[P[220]](P[502] + i4bau);
    }
}, window[P[503]] = function (q_ycsl) {
    sendApi(P_U9[P[181]], P[504], {
        'partner_id': P_U9[P[189]],
        'uid': P_U9[P[20]],
        'version': P_U9[P[93]],
        'game_pkg': P_U9[P[23]],
        'device': P_U9[P[190]]
    }, reqServerRecommendCallBack, P_V9U, P_9G);
}, window[P[505]] = function (syxqg_) {
    P_U9[P[491]] = ![];
    if (syxqg_ && syxqg_[P[235]] === P[325] && syxqg_[P[234]]) {
        for (var o2w$kf = 0x0; o2w$kf < syxqg_[P[234]][P[10]]; o2w$kf++) {
            syxqg_[P[234]][o2w$kf][P[368]] = P_UVG(syxqg_[P[234]][o2w$kf]);
        }
        P_U9[P[192]][-0x2] = window[P[492]](syxqg_[P[234]]), window[P[483]][P[493]](-0x2);
    } else {
        var twz2f = syxqg_ ? syxqg_[P[235]] : '';
        window[P[248]](0xa, P[506] + twz2f), alert(P[507] + twz2f);
    }
}, window[P[492]] = function (jv1) {
    return jv1;
}, window[P[508]] = function (i73ub4, rsm) {
    i73ub4 = i73ub4 || P_U9[P[24]][P[25]], sendApi(P_U9[P[181]], P[509], {
        'type': '4',
        'game_pkg': P_U9[P[23]],
        'server_id': i73ub4
    }, rsm);
}, window[P[510]] = function (cl7msr, e6zvp, pz6wt2, ztpf) {
    pz6wt2 = pz6wt2 || P_U9[P[24]][P[25]], sendApi(P_U9[P[181]], P[511], {
        'type': cl7msr,
        'game_pkg': e6zvp,
        'server_id': pz6wt2
    }, ztpf);
}, window[P[512]] = function ($dofk, $2fwko) {
    sendApi(P_U9[P[181]], P[513], { 'game_pkg': $dofk }, $2fwko);
}, window[P[514]] = function (j1v0) {
    if (j1v0) {
        if (j1v0[P[368]] == 0x1) {
            if (j1v0[P[515]] == 0x3) return 0x3;else return j1v0[P[515]] == 0x1 ? 0x2 : 0x1;
        } else return j1v0[P[368]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[P[516]] = function (tz6we, u7) {
    P_U9[P[517]] = {
        'step': tz6we,
        'server_id': u7
    };
    var of$2 = this;
    P_GUV9({ 'title': P[518] }), sendApi(P_U9[P[181]], P[519], {
        'partner_id': P_U9[P[189]],
        'uid': P_U9[P[20]],
        'game_pkg': P_U9[P[23]],
        'server_id': u7,
        'platform': P_U9[P[97]],
        'platform_uid': P_U9[P[331]],
        'check_login_time': P_U9[P[334]],
        'check_login_sign': P_U9[P[332]],
        'version_name': P_U9[P[291]]
    }, P_9GUV, P_V9U, P_9G, function (vh01j9) {
        return vh01j9[P[235]] == P[325] || vh01j9[P[1]] == P[520] || vh01j9[P[1]] == P[521];
    });
}, window[P[522]] = function (l7mrs) {
    var zte6p = this;
    if (l7mrs && l7mrs[P[235]] === P[325] && l7mrs[P[234]]) {
        var wzp6t2 = P_U9[P[24]];
        wzp6t2[P[523]] = P_U9[P[193]], wzp6t2[P[333]] = String(l7mrs[P[234]][P[524]]), wzp6t2[P[199]] = parseInt(l7mrs[P[234]][P[335]]);
        if (l7mrs[P[234]][P[525]]) wzp6t2[P[525]] = parseInt(l7mrs[P[234]][P[525]]);else wzp6t2[P[525]] = parseInt(l7mrs[P[234]][P[25]]);
        wzp6t2[P[526]] = 0x0, wzp6t2[P[22]] = P_U9[P[381]], wzp6t2[P[527]] = l7mrs[P[234]][P[528]], wzp6t2[P[529]] = l7mrs[P[234]][P[529]];
        if (l7mrs[P[234]][P[530]]) wzp6t2[P[530]] = parseInt(l7mrs[P[234]][P[530]]);
        console[P[47]](P[531] + JSON[P[28]](wzp6t2[P[529]])), P_U9[P[353]] == 0x1 && wzp6t2[P[529]] && wzp6t2[P[529]][P[532]] == 0x1 && (P_U9[P[533]] = 0x1, window[P[37]][P[38]][P[534]]()), P_9VGU();
    } else {
        if (P_U9[P[517]][P[535]] >= 0x3) {
            var $nxo = l7mrs ? l7mrs[P[235]] : '';
            window[P[248]](0xc, P[536] + $nxo), P_9G(JSON[P[28]](l7mrs)), window[P[220]](P[537] + $nxo);
        } else sendApi(P_U9[P[181]], P[308], {
            'platform': P_U9[P[179]],
            'partner_id': P_U9[P[189]],
            'token': P_U9[P[305]],
            'game_pkg': P_U9[P[23]],
            'deviceId': P_U9[P[190]],
            'scene': P[309] + P_U9[P[191]]
        }, function (e6zvpt) {
            if (!e6zvpt || e6zvpt[P[235]] != P[325]) {
                window[P[220]](P[327] + e6zvpt && e6zvpt[P[235]]);
                return;
            }
            P_U9[P[332]] = String(e6zvpt[P[333]]), P_U9[P[334]] = String(e6zvpt[P[335]]), setTimeout(function () {
                P_9GVU(P_U9[P[517]][P[535]] + 0x1, P_U9[P[517]][P[25]]);
            }, 0x5dc);
        }, P_V9U, P_9G, function ($owkf2) {
            return $owkf2[P[235]] == P[325] || $owkf2[P[235]] == P[538];
        });
    }
}, window[P[539]] = function () {
    ServerLoading[P[38]][P[373]](P_U9[P[353]]), window[P[206]] = !![], window[P[69]]();
}, window[P[68]] = function () {
    if (window[P[67]] && window[P[76]] && window[P[207]] && window[P[208]] && window[P[209]] && window[P[211]]) {
        if (!window[P[540]][P[38]]) {
            console[P[47]](P[541] + window[P[540]][P[38]]);
            var pkwf$ = wx[P[542]](),
                oknd = pkwf$[P[155]] ? pkwf$[P[155]] : 0x0,
                fwtp2k = {
                'cdn': window[P[16]][P[22]],
                'spareCdn': window[P[16]][P[289]],
                'newRegister': window[P[16]][P[353]],
                'wxPC': window[P[16]][P[126]],
                'wxIOS': window[P[16]][P[120]],
                'wxAndroid': window[P[16]][P[123]],
                'wxParam': {
                    'limitLoad': window[P[16]][P[130]],
                    'benchmarkLevel': window[P[16]][P[131]],
                    'wxFrom': window[P[6]][P[297]] == P[543] ? 0x1 : 0x0,
                    'wxSDKVersion': window[P[45]]
                },
                'configType': window[P[16]][P[200]],
                'exposeType': window[P[16]][P[202]],
                'scene': oknd
            };
            new window[P[540]](fwtp2k, window[P[16]][P[21]], window[P[173]]);
        }
    }
}, window[P[69]] = function () {
    if (window[P[67]] && window[P[76]] && window[P[207]] && window[P[208]] && window[P[209]] && window[P[211]] && window[P[206]] && window[P[210]]) {
        P_GU9V();
        if (!P_9VU) {
            P_9VU = !![];
            if (!window[P[540]][P[38]]) window[P[68]]();
            var sl_qg = 0x0,
                p6t2zw = wx[P[544]]();
            p6t2zw && (window[P[16]][P[125]] && (sl_qg = p6t2zw[P[115]]), console[P[1]](P[545] + p6t2zw[P[115]] + P[546] + p6t2zw[P[116]] + P[547] + p6t2zw[P[117]] + P[548] + p6t2zw[P[118]] + P[549] + p6t2zw[P[550]] + P[551] + p6t2zw[P[552]]));
            var w2o = {};
            for (const dxong8 in P_U9[P[24]]) {
                w2o[dxong8] = P_U9[P[24]][dxong8];
            }
            var lsg_qy = {
                'channel': window[P[16]][P[194]],
                'account': window[P[16]][P[20]],
                'userId': window[P[16]][P[330]],
                'cdn': window[P[16]][P[22]],
                'data': window[P[16]][P[234]],
                'package': window[P[16]][P[177]],
                'newRegister': window[P[16]][P[353]],
                'pkgName': window[P[16]][P[23]],
                'partnerId': window[P[16]][P[189]],
                'platform_uid': window[P[16]][P[331]],
                'deviceId': window[P[16]][P[190]],
                'selectedServer': w2o,
                'configType': window[P[16]][P[200]],
                'exposeType': window[P[16]][P[202]],
                'debugUsers': window[P[16]][P[197]],
                'wxMenuTop': sl_qg,
                'wxShield': window[P[16]][P[204]],
                'wx_channel': window[P[16]][P[306]]
            };
            if (window[P[384]]) for (var e6tzp in window[P[384]]) {
                lsg_qy[e6tzp] = window[P[384]][e6tzp];
            }
            window[P[540]][P[38]][P[553]](lsg_qy);
            if (P_U9[P[24]] && P_U9[P[24]][P[25]]) localStorage[P[554]](P[338] + P_U9[P[23]] + P_U9[P[20]], P_U9[P[24]][P[25]]);
        }
    } else console[P[1]](P[555] + window[P[67]] + P[556] + window[P[76]] + P[557] + window[P[207]] + P[558] + window[P[208]] + P[559] + window[P[209]] + P[560] + window[P[211]] + P[561] + window[P[206]] + P[562] + window[P[210]]);
};