var J = wx.h$;
import gyrq5o from '../Zqy10Zqy10basdZqy10/Zqy105sdkZqy10.js';
window[J[167]] = { 'wxVersion': window[J[6]][J[7]] }, window[J[168]] = ![], window[J[169]] = 0x1, window[J[170]] = 0x1, window[J[171]] = !![], window[J[172]] = !![], window[J[173]] = '', window[J[174]] = ![], window[J[16]] = {
    'base_cdn': J[175],
    'cdn': J[175]
}, J1Q4[J[176]] = {}, J1Q4[J[177]] = '0', J1Q4[J[93]] = window[J[167]][J[178]], J1Q4[J[128]] = '', J1Q4['os'] = '1', J1Q4[J[179]] = J[180], J1Q4[J[181]] = J[182], J1Q4[J[183]] = J[184], J1Q4[J[185]] = J[186], J1Q4[J[187]] = J[188], J1Q4[J[189]] = '1', J1Q4[J[23]] = '', J1Q4[J[190]] = '', J1Q4[J[191]] = 0x0, J1Q4[J[192]] = {}, J1Q4[J[193]] = parseInt(J1Q4[J[189]]), J1Q4[J[194]] = J1Q4[J[189]], J1Q4[J[24]] = {}, J1Q4[J[31]] = J[195], J1Q4[J[196]] = ![], J1Q4[J[197]] = J[198], J1Q4[J[199]] = Date[J[160]](), J1Q4[J[200]] = J[201], J1Q4[J[202]] = '_a', J1Q4[J[203]] = '', J1Q4[J[204]] = 0x2, J1Q4[J[21]] = 0x7c1, J1Q4[J[178]] = window[J[167]][J[178]], J1Q4[J[205]] = ![], J1Q4[J[120]] = ![], J1Q4[J[123]] = ![], J1Q4[J[126]] = ![], window[J[206]] = 0x5, window[J[207]] = ![], window[J[67]] = ![], window[J[76]] = ![], window[J[208]] = ![], window[J[209]] = ![], window[J[210]] = ![], window[J[211]] = ![], window[J[212]] = ![], window[J[213]] = ![], window[J[214]] = null, window[J[215]] = function (fwp92_) {
    console[J[47]](J[215], fwp92_), wx[J[216]]({}), wx[J[54]]({
        'title': J[85],
        'content': fwp92_,
        'success'(h8cd6t) {
            if (h8cd6t[J[217]]) console[J[47]](J[218]);else h8cd6t[J[219]] && console[J[47]](J[220]);
        }
    });
}, window[J[221]] = function (ybor5q) {
    console[J[47]](J[222], ybor5q), J15Q4J(), wx[J[54]]({
        'title': J[85],
        'content': ybor5q,
        'confirmText': J[223],
        'cancelText': J[224],
        'success'(i4nx13) {
            if (i4nx13[J[217]]) window[J[82]]();else i4nx13[J[219]] && (console[J[47]](J[225]), wx[J[226]]({}));
        }
    });
}, window[J[227]] = function (bgkd60) {
    console[J[47]](J[227], bgkd60), wx[J[54]]({
        'title': J[85],
        'content': bgkd60,
        'confirmText': J[228],
        'showCancel': ![],
        'complete'(gd8kc6) {
            console[J[47]](J[225]), wx[J[226]]({});
        }
    });
}, window[J[229]] = ![], window[J[230]] = function (okb0q5) {
    window[J[229]] = !![], wx[J[231]](okb0q5);
}, window[J[232]] = function () {
    window[J[229]] && (window[J[229]] = ![], wx[J[216]]({}));
}, window[J[233]] = function (wf_$) {
    window[J[37]][J[38]][J[233]](wf_$);
}, window[J[234]] = function (v5qroy, cdt) {
    gyrq5o[J[234]](v5qroy, function (e2_hz) {
        e2_hz && e2_hz[J[235]] ? e2_hz[J[235]][J[236]] == 0x1 ? cdt(!![]) : (cdt(![]), console[J[1]](J[237] + e2_hz[J[235]][J[238]])) : console[J[47]](J[234], e2_hz);
    });
}, window[J[239]] = function (c6z8ht) {
    console[J[47]](J[240], c6z8ht);
}, window[J[241]] = function (w29f$_) {}, window[J[242]] = function (ko0q5, pw_9, gd80k6) {}, window[J[243]] = function (ob0y5q) {
    console[J[47]](J[244], ob0y5q), window[J[37]][J[38]][J[245]](), window[J[37]][J[38]][J[246]](), window[J[37]][J[38]][J[247]](), window[J[248]]();
}, window[J[249]] = function (l41u) {
    window[J[250]](0xe, J[251] + l41u), window[J[221]](J[252]);
    var qvy5 = {
        'id': window[J[16]][J[17]],
        'role': window[J[16]][J[18]],
        'level': window[J[16]][J[19]],
        'account': window[J[16]][J[20]],
        'version': window[J[16]][J[21]],
        'cdn': window[J[16]][J[22]],
        'pkgName': window[J[16]][J[23]],
        'gamever': window[J[6]][J[7]],
        'serverid': window[J[16]][J[24]] ? window[J[16]][J[24]][J[25]] : 0x0,
        'systemInfo': window[J[26]],
        'error': J[253],
        'stack': l41u ? l41u : J[252]
    },
        n4ui1 = JSON[J[28]](qvy5);
    console[J[29]](J[254] + n4ui1), window[J[31]](n4ui1);
}, window[J[250]] = function (oryb5q, hce8t) {
    sendApi(J1Q4[J[183]], J[255], {
        'game_pkg': J1Q4[J[23]],
        'partner_id': J1Q4[J[189]],
        'server_id': J1Q4[J[24]] && J1Q4[J[24]][J[25]] > 0x0 ? J1Q4[J[24]][J[25]] : 0x0,
        'uid': J1Q4[J[20]] > 0x0 ? J1Q4[J[20]] : 0x0,
        'type': oryb5q,
        'info': hce8t
    });
}, window[J[256]] = function (tgdc8) {
    var una314 = JSON[J[257]](tgdc8);
    una314[J[258]] = window[J[6]][J[7]], una314[J[259]] = window[J[16]][J[24]] ? window[J[16]][J[24]][J[25]] : 0x0, una314[J[26]] = window[J[26]];
    var yorb = JSON[J[28]](una314);
    console[J[29]](J[260] + yorb), window[J[31]](yorb);
}, window[J[83]] = function (t86cdg, v7xjr) {
    var het_p = {
        'id': window[J[16]][J[17]],
        'role': window[J[16]][J[18]],
        'level': window[J[16]][J[19]],
        'account': window[J[16]][J[20]],
        'version': window[J[16]][J[21]],
        'cdn': window[J[16]][J[22]],
        'pkgName': window[J[16]][J[23]],
        'gamever': window[J[6]][J[7]],
        'serverid': window[J[16]][J[24]] ? window[J[16]][J[24]][J[25]] : 0x0,
        'systemInfo': window[J[26]],
        'error': t86cdg,
        'stack': v7xjr
    },
        rvoqy5 = JSON[J[28]](het_p);
    console[J[161]](J[261] + rvoqy5), window[J[31]](rvoqy5);
}, window[J[31]] = function (xjiv7n) {
    if (window[J[16]][J[129]] == J[262]) return;
    var jr7vy = J1Q4[J[31]] + J[263] + J1Q4[J[20]];
    wx[J[264]]({
        'url': jr7vy,
        'method': J[265],
        'data': xjiv7n,
        'header': {
            'content-type': J[266],
            'cache-control': J[267]
        },
        'success': function (k05obq) {
            DEBUG && console[J[47]](J[268], jr7vy, xjiv7n, k05obq);
        },
        'fail': function (d6th8c) {
            DEBUG && console[J[47]](J[268], jr7vy, xjiv7n, d6th8c);
        },
        'complete': function () {}
    });
}, window[J[269]] = function () {
    function jorv7() {
        return ((0x1 + Math[J[270]]()) * 0x10000 | 0x0)[J[271]](0x10)[J[272]](0x1);
    }
    return jorv7() + jorv7() + '-' + jorv7() + '-' + jorv7() + '-' + jorv7() + '+' + jorv7() + jorv7() + jorv7();
}, window[J[82]] = function () {
    console[J[47]](J[273]);
    var voqr5 = gyrq5o[J[274]]();
    J1Q4[J[194]] = voqr5[J[275]], J1Q4[J[193]] = voqr5[J[275]], J1Q4[J[189]] = voqr5[J[275]], J1Q4[J[23]] = voqr5[J[276]];
    var w2$ = { 'game_ver': J1Q4[J[93]] };
    J1Q4[J[190]] = this[J[269]](), J15QJ4({ 'title': J[277] }), gyrq5o[J[278]](w2$, this[J[279]][J[280]](this));
}, window[J[279]] = function (i1u43) {
    var vij7x = i1u43[J[281]];
    sdkInitRes = i1u43, console[J[47]](J[282] + vij7x + J[283] + (vij7x == 0x1) + J[284] + i1u43[J[7]] + J[285] + window[J[167]][J[178]] + J[286] + i1u43[J[287]]);
    if (!i1u43[J[7]] || window[J[41]](window[J[167]][J[178]], i1u43[J[7]]) < 0x0) console[J[47]](J[288]), J1Q4[J[181]] = J[289], J1Q4[J[183]] = J[290], J1Q4[J[185]] = J[291], J1Q4[J[22]] = J[292], J1Q4[J[293]] = J[294], J1Q4[J[287]] = i1u43[J[287]], J1Q4[J[205]] = ![];else window[J[41]](window[J[167]][J[178]], i1u43[J[7]]) == 0x0 ? (console[J[47]](J[295]), J1Q4[J[181]] = J[182], J1Q4[J[183]] = J[184], J1Q4[J[185]] = J[186], J1Q4[J[22]] = J[175], J1Q4[J[293]] = J[294], J1Q4[J[287]] = J[296], J1Q4[J[205]] = !![]) : (console[J[47]](J[297]), J1Q4[J[181]] = J[182], J1Q4[J[183]] = J[184], J1Q4[J[185]] = J[186], J1Q4[J[22]] = J[175], J1Q4[J[293]] = J[294], J1Q4[J[287]] = J[296], J1Q4[J[205]] = ![]);
    J1Q4[J[191]] = config[J[298]] ? config[J[298]] : 0x0, this[J[299]](), this[J[300]](), window[J[301]] = 0x5, J15QJ4({ 'title': J[302] }), gyrq5o[J[303]](this[J[304]][J[280]](this));
}, window[J[301]] = 0x5, window[J[304]] = function (y5jrvo, i4x17n) {
    if (y5jrvo == 0x0 && i4x17n && i4x17n[J[305]]) {
        J1Q4[J[306]] = i4x17n[J[305]], J1Q4[J[307]] = i4x17n[J[307]], J1Q4[J[308]] = i4x17n[J[308]], J1Q4[J[309]] = i4x17n[J[309]], J1Q4[J[310]] = i4x17n[J[310]];
        var a14u = this;
        J15QJ4({ 'title': J[311] }), sendApi(J1Q4[J[181]], J[312], {
            'platform': J1Q4[J[179]],
            'partner_id': J1Q4[J[189]],
            'token': i4x17n[J[305]],
            'game_pkg': J1Q4[J[23]],
            'deviceId': J1Q4[J[190]],
            'scene': J[313] + J1Q4[J[191]]
        }, this[J[314]][J[280]](this), J1J4Q, J145);
    } else i4x17n && i4x17n[J[65]] && window[J[301]] > 0x0 && (i4x17n[J[65]][J[121]](J[315]) != -0x1 || i4x17n[J[65]][J[121]](J[316]) != -0x1 || i4x17n[J[65]][J[121]](J[317]) != -0x1 || i4x17n[J[65]][J[121]](J[318]) != -0x1 || i4x17n[J[65]][J[121]](J[319]) != -0x1 || i4x17n[J[65]][J[121]](J[320]) != -0x1) ? (window[J[301]]--, gyrq5o[J[303]](this[J[304]][J[280]](this))) : (window[J[250]](0x1, J[321] + y5jrvo + J[322] + (i4x17n ? i4x17n[J[65]] : '')), window[J[83]](J[323], JSON[J[28]]({
        'status': y5jrvo,
        'data': i4x17n
    })), window[J[221]](J[324] + (i4x17n && i4x17n[J[65]] ? '，' + i4x17n[J[65]] : '')));
}, window[J[314]] = function (zhte_) {
    if (!zhte_) {
        window[J[250]](0x2, J[325]), window[J[83]](J[326], J[327]), window[J[221]](J[328]);
        return;
    }
    if (zhte_[J[236]] != J[329]) {
        window[J[250]](0x2, J[330] + zhte_[J[236]]), window[J[83]](J[326], JSON[J[28]](zhte_)), window[J[221]](J[331] + zhte_[J[236]]);
        return;
    }
    if (zhte_[J[332]] == 0x1) {
        window[J[221]](J[333]);
        return;
    }
    J1Q4[J[334]] = String(zhte_[J[20]]), J1Q4[J[20]] = String(zhte_[J[20]]), J1Q4[J[97]] = String(zhte_[J[97]]), J1Q4[J[194]] = String(zhte_[J[97]]), J1Q4[J[335]] = String(zhte_[J[335]]), J1Q4[J[336]] = String(zhte_[J[337]]), J1Q4[J[338]] = String(zhte_[J[339]]), J1Q4[J[337]] = '';
    var pf29 = this;
    J15QJ4({ 'title': J[340] });
    var $fw92s = localStorage[J[341]](J[342] + J1Q4[J[23]] + J1Q4[J[20]]);
    if ($fw92s && $fw92s != '') {
        var lua134 = Number($fw92s);
        pf29[J[343]](lua134);
    } else pf29[J[344]]();
}, window[J[344]] = function () {
    var _eztph = this;
    sendApi(J1Q4[J[181]], J[345], {
        'partner_id': J1Q4[J[189]],
        'uid': J1Q4[J[20]],
        'version': J1Q4[J[93]],
        'game_pkg': J1Q4[J[23]],
        'device': J1Q4[J[190]]
    }, _eztph[J[346]][J[280]](_eztph), J1J4Q, J145);
}, window[J[346]] = function (x1n7j) {
    if (!x1n7j) {
        window[J[250]](0x3, J[347]), window[J[221]](J[347]);
        return;
    }
    if (x1n7j[J[236]] != J[329]) {
        window[J[250]](0x3, J[348] + x1n7j[J[236]]), window[J[221]](J[348] + x1n7j[J[236]]);
        return;
    }
    if (!x1n7j[J[235]] || x1n7j[J[235]][J[10]] == 0x0) {
        window[J[250]](0x3, J[349]), window[J[221]](J[350]);
        return;
    }
    this[J[351]](x1n7j);
}, window[J[343]] = function (l4a3) {
    var in1jx7 = this;
    sendApi(J1Q4[J[181]], J[352], {
        'server_id': l4a3,
        'time': Date[J[160]]() / 0x3e8
    }, in1jx7[J[353]][J[280]](in1jx7), J1J4Q, J145);
}, window[J[353]] = function (ep92_w) {
    if (!ep92_w) {
        window[J[250]](0x4, J[354]), this[J[344]]();
        return;
    }
    if (ep92_w[J[236]] != J[329]) {
        window[J[250]](0x4, J[355] + ep92_w[J[236]]), this[J[344]]();
        return;
    }
    if (!ep92_w[J[235]] || ep92_w[J[235]][J[10]] == 0x0) {
        window[J[250]](0x4, J[356]), this[J[344]]();
        return;
    }
    this[J[351]](ep92_w);
}, window[J[351]] = function (j7yro) {
    J1Q4[J[357]] = j7yro[J[358]] != undefined ? j7yro[J[358]] : 0x0, J1Q4[J[24]] = {
        'server_id': String(j7yro[J[235]][0x0][J[25]]),
        'server_name': String(j7yro[J[235]][0x0][J[359]]),
        'entry_ip': j7yro[J[235]][0x0][J[360]],
        'entry_port': parseInt(j7yro[J[235]][0x0][J[361]]),
        'status': J1QJ5(j7yro[J[235]][0x0]),
        'start_time': j7yro[J[235]][0x0][J[362]],
        'maintain_time': j7yro[J[235]][0x0][J[363]] ? j7yro[J[235]][0x0][J[363]] : '',
        'is_recommend': j7yro[J[235]][0x0][J[364]],
        'cdn': J1Q4[J[22]]
    }, this[J[365]](), window[J[37]] && window[J[37]][J[38]][J[366]] && window[J[37]][J[38]][J[366]](sdkInitRes[J[367]], sdkInitRes[J[368]], sdkInitRes[J[369]], sdkInitRes[J[370]], sdkInitRes[J[371]]);
}, window[J[365]] = function () {
    if (J1Q4[J[357]] == 0x1) {
        var h8d6tc = J1Q4[J[24]][J[372]];
        if (h8d6tc === -0x1 || h8d6tc === 0x0) {
            window[J[250]](0xf, J[373] + J1Q4[J[24]]['id'] + J[374] + J1Q4[J[24]][J[372]]), window[J[221]](h8d6tc === -0x1 ? J[375] : J[376]);
            return;
        }
        J145JQ(0x0, J1Q4[J[24]][J[25]]), window[J[37]][J[38]][J[377]](J1Q4[J[357]]);
    } else window[J[37]][J[38]][J[378]](), J15Q4J();
    window[J[212]] = !![], window[J[379]](), window[J[68]](), window[J[69]]();
}, window[J[299]] = function () {
    sendApi(J1Q4[J[181]], J[380], {
        'game_pkg': J1Q4[J[23]],
        'version_name': J1Q4[J[287]]
    }, this[J[381]][J[280]](this), J1J4Q, J145);
}, window[J[381]] = function (dk6g0b) {
    if (!dk6g0b) {
        window[J[250]](0x5, J[382]), window[J[221]](J[382]);
        return;
    }
    if (dk6g0b[J[236]] != J[329]) {
        window[J[250]](0x5, J[383] + dk6g0b[J[236]]), window[J[221]](J[383] + dk6g0b[J[236]]);
        return;
    }
    if (!dk6g0b[J[235]] || !dk6g0b[J[235]][J[93]]) {
        window[J[250]](0x5, J[384] + (dk6g0b[J[235]] && dk6g0b[J[235]][J[93]])), window[J[221]](J[384] + (dk6g0b[J[235]] && dk6g0b[J[235]][J[93]]));
        return;
    }
    dk6g0b[J[235]][J[385]] && dk6g0b[J[235]][J[385]][J[10]] > 0xa && (J1Q4[J[386]] = dk6g0b[J[235]][J[385]], J1Q4[J[22]] = dk6g0b[J[235]][J[385]]), dk6g0b[J[235]][J[93]] && (J1Q4[J[21]] = dk6g0b[J[235]][J[93]]), console[J[1]](J[387] + J1Q4[J[21]] + J[388] + J1Q4[J[287]]), window[J[210]] = !![], window[J[68]](), window[J[69]]();
}, window[J[389]], window[J[300]] = function () {
    sendApi(J1Q4[J[181]], J[390], { 'game_pkg': J1Q4[J[23]] }, this[J[391]][J[280]](this), J1J4Q, J145);
}, window[J[391]] = function (i413u) {
    if (i413u && i413u[J[236]] === J[329] && i413u[J[235]]) {
        window[J[389]] = i413u[J[235]];
        for (var h2_pe in i413u[J[235]]) {
            J1Q4[h2_pe] = i413u[J[235]][h2_pe];
        }
    } else window[J[250]](0xb, J[392]), console[J[1]](J[393] + i413u[J[236]]);
    window[J[211]] = !![], window[J[379]](), window[J[69]]();
}, window[J[379]] = function () {
    if (!window[J[212]] || !window[J[211]]) return;
    var nu431i = J1Q4[J[357]] == 0x1,
        pe2h = J1Q4[J[205]],
        _wezp2 = J1Q4[J[394]] && J1Q4[J[394]] > 0x0;
    if (pe2h || nu431i && _wezp2) {
        var pe2zh_ = J1Q4[J[395]],
            jryx7 = pe2zh_ && pe2zh_[J[10]] == 0x9;
        jryx7 && (window[J[396]] = pe2zh_);
        var _p2fw9 = J1Q4[J[397]],
            o0b = _p2fw9 && _p2fw9[J[42]]('#')[J[10]] == 0x4;
        o0b && (window[J[398]] = _p2fw9);
    }
}, window[J[248]] = function () {
    window[J[396]] = null, window[J[398]] = null;
}, window[J[399]] = function (wf$29, xyj7vr, una143, c8dtg6, zh8et, x7ivjn, u1n3a, q5bgk, b6, v7jyro) {
    zh8et = String(zh8et);
    var j7x1ni = u1n3a,
        _hp2 = q5bgk;
    J1Q4[J[176]][zh8et] = {
        'productid': zh8et,
        'productname': j7x1ni,
        'productdesc': _hp2,
        'roleid': wf$29,
        'rolename': xyj7vr,
        'rolelevel': una143,
        'price': x7ivjn,
        'callback': b6
    }, sendApi(J1Q4[J[185]], J[400], {
        'game_pkg': J1Q4[J[23]],
        'server_id': J1Q4[J[24]][J[25]],
        'server_name': J1Q4[J[24]][J[359]],
        'level': una143,
        'uid': J1Q4[J[20]],
        'role_id': wf$29,
        'role_name': xyj7vr,
        'product_id': zh8et,
        'product_name': j7x1ni,
        'product_desc': _hp2,
        'money': x7ivjn,
        'partner_id': J1Q4[J[189]]
    }, toPayCallBack, J1J4Q, J145);
}, window[J[401]] = function (i1nu34) {
    if (i1nu34 && (i1nu34[J[402]] === 0xc8 || i1nu34[J[236]] == J[329])) {
        var dct8h6 = J1Q4[J[176]][String(i1nu34[J[403]])];
        if (dct8h6[J[404]]) dct8h6[J[404]](i1nu34[J[403]], i1nu34[J[405]], -0x1);
        gyrq5o[J[406]]({
            'cpbill': i1nu34[J[405]],
            'productid': i1nu34[J[403]],
            'productname': dct8h6[J[407]],
            'productdesc': dct8h6[J[408]],
            'serverid': J1Q4[J[24]][J[25]],
            'servername': J1Q4[J[24]][J[359]],
            'roleid': dct8h6[J[409]],
            'rolename': dct8h6[J[410]],
            'rolelevel': dct8h6[J[411]],
            'price': dct8h6[J[412]],
            'extension': JSON[J[28]]({ 'cp_order_id': i1nu34[J[405]] })
        }, function ($wf_92, k8d6g0) {
            dct8h6[J[404]] && $wf_92 == 0x0 && dct8h6[J[404]](i1nu34[J[403]], i1nu34[J[405]], $wf_92);
            console[J[1]](JSON[J[28]]({
                'type': J[413],
                'status': $wf_92,
                'data': i1nu34,
                'role_name': dct8h6[J[410]]
            }));
            if ($wf_92 === 0x0) {} else {
                if ($wf_92 === 0x1) {} else {
                    if ($wf_92 === 0x2) {}
                }
            }
        });
    } else {
        var zcte8 = i1nu34 ? J[414] + i1nu34[J[402]] + J[415] + i1nu34[J[236]] + J[416] + i1nu34[J[1]] : J[417];
        window[J[250]](0xd, J[418] + zcte8), alert(zcte8);
    }
}, window[J[419]] = function () {}, window[J[420]] = function (oqyrv, obyq50, hdct8, _e2zp, xnj17i) {
    gyrq5o[J[421]](J1Q4[J[24]][J[25]], J1Q4[J[24]][J[359]] || J1Q4[J[24]][J[25]], oqyrv, obyq50, hdct8), sendApi(J1Q4[J[181]], J[422], {
        'game_pkg': J1Q4[J[23]],
        'server_id': J1Q4[J[24]][J[25]],
        'role_id': oqyrv,
        'uid': J1Q4[J[20]],
        'role_name': obyq50,
        'role_type': _e2zp,
        'level': hdct8
    });
}, window[J[423]] = function (zch8e, $f2ws9, n4x3i, nx7ji, bdkg6, b5qyor, phzcet, b0dgq, i14n3, d6k80g) {
    J1Q4[J[17]] = zch8e, J1Q4[J[18]] = $f2ws9, J1Q4[J[19]] = n4x3i, gyrq5o[J[424]](J1Q4[J[24]][J[25]], J1Q4[J[24]][J[359]] || J1Q4[J[24]][J[25]], zch8e, $f2ws9, n4x3i), sendApi(J1Q4[J[181]], J[425], {
        'game_pkg': J1Q4[J[23]],
        'server_id': J1Q4[J[24]][J[25]],
        'role_id': zch8e,
        'uid': J1Q4[J[20]],
        'role_name': $f2ws9,
        'role_type': nx7ji,
        'level': n4x3i,
        'evolution': bdkg6
    });
}, window[J[426]] = function (yq5vro, dcg6t, zpehct, ivnx7j, pwf9_, p29w, ijx7, qbk0o5, byoq50, kob0q) {
    J1Q4[J[17]] = yq5vro, J1Q4[J[18]] = dcg6t, J1Q4[J[19]] = zpehct, gyrq5o[J[427]](J1Q4[J[24]][J[25]], J1Q4[J[24]][J[359]] || J1Q4[J[24]][J[25]], yq5vro, dcg6t, zpehct), sendApi(J1Q4[J[181]], J[425], {
        'game_pkg': J1Q4[J[23]],
        'server_id': J1Q4[J[24]][J[25]],
        'role_id': yq5vro,
        'uid': J1Q4[J[20]],
        'role_name': dcg6t,
        'role_type': ivnx7j,
        'level': zpehct,
        'evolution': pwf9_
    });
}, window[J[428]] = function (t86chd) {}, window[J[429]] = function (ct6hz8, p_e92w) {
    gyrq5o[J[430]](J[430], { 'activity_id': p_e92w }, function (fw9s2) {
        ct6hz8 && ct6hz8(fw9s2);
    });
}, window[J[431]] = function () {
    gyrq5o[J[431]]();
}, window[J[432]] = function () {
    gyrq5o[J[433]] && gyrq5o[J[433]]();
}, window[J[434]] = function (in7jx, yvorj, x14in, qryo5, y50qo, ojr5vy, bo05yq, k5oqb0) {
    k5oqb0 = k5oqb0 || J1Q4[J[24]][J[25]], sendApi(J1Q4[J[181]], J[435], {
        'phone': in7jx,
        'role_id': yvorj,
        'uid': J1Q4[J[20]],
        'game_pkg': J1Q4[J[23]],
        'partner_id': J1Q4[J[189]],
        'server_id': k5oqb0
    }, bo05yq, 0x2, null, function () {
        return !![];
    });
}, window[J[151]] = function (d6cg8) {
    window[J[153]] = d6cg8, window[J[153]] && window[J[152]] && (console[J[1]](J[154] + window[J[152]][J[155]]), window[J[153]](window[J[152]]), window[J[152]] = null);
}, window[J[436]] = function (jo7vry, vxjr7i, bgd60, f2_w9) {
    window[J[437]](J[438], {
        'game_pkg': window[J[16]][J[23]],
        'role_id': vxjr7i,
        'server_id': bgd60
    }, f2_w9);
}, window[J[439]] = function (pcze, u4al31, _fwp2) {
    function z2pw_(y7vjrx) {
        var n43i1u = [],
            yqov5 = [],
            ovy5j = _fwp2 || window[J[6]][J[440]];
        for (var qbyo05 in ovy5j) {
            var q0b5ok = Number(qbyo05);
            (!pcze || !pcze[J[10]] || pcze[J[121]](q0b5ok) != -0x1) && (yqov5[J[44]](ovy5j[qbyo05]), n43i1u[J[44]]([q0b5ok, 0x3]));
        }
        window[J[41]](window[J[45]], J[441]) >= 0x0 ? (console[J[47]](J[442]), gyrq5o[J[443]] && gyrq5o[J[443]](yqov5, function (oyvq5) {
            console[J[47]](J[444]), console[J[47]](oyvq5);
            if (oyvq5 && oyvq5[J[65]] == J[445]) for (var vjinx7 in ovy5j) {
                if (oyvq5[ovy5j[vjinx7]] == J[446]) {
                    var f_29w = Number(vjinx7);
                    for (var v5yrj = 0x0; v5yrj < n43i1u[J[10]]; v5yrj++) {
                        if (n43i1u[v5yrj][0x0] == f_29w) {
                            n43i1u[v5yrj][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[J[41]](window[J[45]], J[447]) >= 0x0 ? wx[J[448]]({
                'withSubscriptions': !![],
                'success': function (bk5o) {
                    var kg08d6 = bk5o[J[449]][J[450]];
                    if (kg08d6) {
                        console[J[47]](J[451]), console[J[47]](kg08d6);
                        for (var hctd68 in ovy5j) {
                            if (kg08d6[ovy5j[hctd68]] == J[446]) {
                                var bqdg = Number(hctd68);
                                for (var nxijv = 0x0; nxijv < n43i1u[J[10]]; nxijv++) {
                                    if (n43i1u[nxijv][0x0] == bqdg) {
                                        n43i1u[nxijv][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[J[47]](n43i1u), u4al31 && u4al31(n43i1u);
                    } else console[J[47]](J[452]), console[J[47]](bk5o), console[J[47]](n43i1u), u4al31 && u4al31(n43i1u);
                },
                'fail': function () {
                    console[J[47]](J[453]), console[J[47]](n43i1u), u4al31 && u4al31(n43i1u);
                }
            }) : (console[J[47]](J[454] + window[J[45]]), console[J[47]](n43i1u), u4al31 && u4al31(n43i1u));
        })) : (console[J[47]](J[455] + window[J[45]]), console[J[47]](n43i1u), u4al31 && u4al31(n43i1u)), wx[J[456]](z2pw_);
    }
    wx[J[457]](z2pw_);
}, window[J[458]] = {
    'isSuccess': ![],
    'level': J[459],
    'isCharging': ![]
}, window[J[460]] = function (ze_) {
    wx[J[139]]({
        'success': function (ztphce) {
            var a4lu = window[J[458]];
            a4lu[J[461]] = !![], a4lu[J[141]] = Number(ztphce[J[141]])[J[462]](0x0), a4lu[J[143]] = ztphce[J[143]], ze_ && ze_(a4lu[J[461]], a4lu[J[141]], a4lu[J[143]]);
        },
        'fail': function (nu34a1) {
            console[J[47]](J[463], nu34a1[J[65]]);
            var cthz6 = window[J[458]];
            ze_ && ze_(cthz6[J[461]], cthz6[J[141]], cthz6[J[143]]);
        }
    });
}, window[J[144]] = function (x31n4) {
    wx[J[144]]({
        'success': function (yqbo5r) {
            x31n4 && x31n4(!![], yqbo5r);
        },
        'fail': function (p_hez2) {
            x31n4 && x31n4(![], p_hez2);
        }
    });
}, window[J[148]] = function (fs$92w) {
    if (fs$92w) wx[J[148]](fs$92w);
}, window[J[464]] = function (o5b0qk) {
    wx[J[464]](o5b0qk);
}, window[J[437]] = function (htze8, una31, yoq5b0, gd68ct, h68t, kg0db6, jrivx, zh2ep) {
    if (gd68ct == undefined) gd68ct = 0x1;
    wx[J[264]]({
        'url': htze8,
        'method': jrivx || J[465],
        'responseType': J[466],
        'data': una31,
        'header': { 'content-type': zh2ep || J[266] },
        'success': function (he_tz) {
            DEBUG && console[J[47]](J[467], htze8, info, he_tz);
            if (he_tz && he_tz[J[468]] == 0xc8) {
                var zpthc = he_tz[J[235]];
                !kg0db6 || kg0db6(zpthc) ? yoq5b0 && yoq5b0(zpthc) : window[J[469]](htze8, una31, yoq5b0, gd68ct, h68t, kg0db6, he_tz);
            } else window[J[469]](htze8, una31, yoq5b0, gd68ct, h68t, kg0db6, he_tz);
        },
        'fail': function (okq0b) {
            DEBUG && console[J[47]](J[470], htze8, info, okq0b), window[J[469]](htze8, una31, yoq5b0, gd68ct, h68t, kg0db6, okq0b);
        },
        'complete': function () {}
    });
}, window[J[469]] = function (phze2, tzhp_, n4xi, phetz, p2ezw, _fpw92, e2_pwz) {
    phetz - 0x1 > 0x0 ? setTimeout(function () {
        window[J[437]](phze2, tzhp_, n4xi, phetz - 0x1, p2ezw, _fpw92);
    }, 0x3e8) : p2ezw && p2ezw(JSON[J[28]]({
        'url': phze2,
        'response': e2_pwz
    }));
}, window[J[471]] = function (jxin1, tdg8c, n1i3, zcteph, bry, yv7j, tdgc86) {
    !n1i3 && (n1i3 = {});
    var l4am3u = Math[J[472]](Date[J[160]]() / 0x3e8);
    n1i3[J[339]] = l4am3u, n1i3[J[473]] = tdg8c;
    var pht_ez = Object[J[474]](n1i3)[J[475]](),
        _pzew = '',
        p2_z = '';
    for (var _p9e = 0x0; _p9e < pht_ez[J[10]]; _p9e++) {
        _pzew = _pzew + (_p9e == 0x0 ? '' : '&') + pht_ez[_p9e] + n1i3[pht_ez[_p9e]], p2_z = p2_z + (_p9e == 0x0 ? '' : '&') + pht_ez[_p9e] + '=' + encodeURIComponent(n1i3[pht_ez[_p9e]]);
    }
    _pzew = _pzew + J1Q4[J[187]];
    var z2hpe_ = J[476] + md5(_pzew);
    send(jxin1 + '?' + p2_z + (p2_z == '' ? '' : '&') + z2hpe_, null, zcteph, bry, yv7j, tdgc86 || function (un3i1) {
        return un3i1[J[236]] == J[329];
    }, null, J[477]);
}, window[J[478]] = function (dc8gt, l14u) {
    var rjyv7 = 0x0;
    J1Q4[J[24]] && (rjyv7 = J1Q4[J[24]][J[25]]), sendApi(J1Q4[J[183]], J[479], {
        'partnerId': J1Q4[J[189]],
        'gamePkg': J1Q4[J[23]],
        'logTime': Math[J[472]](Date[J[160]]() / 0x3e8),
        'platformUid': J1Q4[J[335]],
        'type': dc8gt,
        'serverId': rjyv7
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[J[480]] = function (v5yorj) {
    sendApi(J1Q4[J[181]], J[481], {
        'partner_id': J1Q4[J[189]],
        'uid': J1Q4[J[20]],
        'version': J1Q4[J[93]],
        'game_pkg': J1Q4[J[23]],
        'device': J1Q4[J[190]]
    }, J1Q4J5, J1J4Q, J145);
}, window[J[482]] = function (kq0bg5) {
    if (kq0bg5 && kq0bg5[J[236]] === J[329] && kq0bg5[J[235]]) {
        kq0bg5[J[235]][J[483]]({
            'id': -0x2,
            'name': J[484]
        }), kq0bg5[J[235]][J[483]]({
            'id': -0x1,
            'name': J[485]
        }), J1Q4[J[486]] = kq0bg5[J[235]];
        if (window[J[487]]) window[J[487]][J[488]]();
    } else {
        J1Q4[J[489]] = ![];
        var g68kd = kq0bg5 ? kq0bg5[J[236]] : '';
        window[J[250]](0x7, J[490] + g68kd), window[J[221]](J[491] + g68kd);
    }
}, window[J[492]] = function (qo5yvr) {
    sendApi(J1Q4[J[181]], J[493], {
        'partner_id': J1Q4[J[189]],
        'uid': J1Q4[J[20]],
        'version': J1Q4[J[93]],
        'game_pkg': J1Q4[J[23]],
        'device': J1Q4[J[190]]
    }, J15QJ, J1J4Q, J145);
}, window[J[494]] = function ($_2w9f) {
    J1Q4[J[495]] = ![];
    if ($_2w9f && $_2w9f[J[236]] === J[329] && $_2w9f[J[235]]) {
        for (var f$w_ = 0x0; f$w_ < $_2w9f[J[235]][J[10]]; f$w_++) {
            $_2w9f[J[235]][f$w_][J[372]] = J1QJ5($_2w9f[J[235]][f$w_]);
        }
        J1Q4[J[192]][-0x1] = window[J[496]]($_2w9f[J[235]]), window[J[487]][J[497]](-0x1);
    } else {
        var y7rvxj = $_2w9f ? $_2w9f[J[236]] : '';
        window[J[250]](0x8, J[498] + y7rvxj), window[J[221]](J[499] + y7rvxj);
    }
}, window[J[500]] = function (gkc6d8) {
    sendApi(J1Q4[J[181]], J[493], {
        'partner_id': J1Q4[J[189]],
        'uid': J1Q4[J[20]],
        'version': J1Q4[J[93]],
        'game_pkg': J1Q4[J[23]],
        'device': J1Q4[J[190]]
    }, gkc6d8, J1J4Q, J145);
}, window[J[501]] = function (fsw$29, ph2_ze) {
    sendApi(J1Q4[J[181]], J[502], {
        'partner_id': J1Q4[J[189]],
        'uid': J1Q4[J[20]],
        'version': J1Q4[J[93]],
        'game_pkg': J1Q4[J[23]],
        'device': J1Q4[J[190]],
        'server_group_id': ph2_ze
    }, J1JQ5, J1J4Q, J145);
}, window[J[503]] = function (bk60gd) {
    J1Q4[J[495]] = ![];
    if (bk60gd && bk60gd[J[236]] === J[329] && bk60gd[J[235]] && bk60gd[J[235]][J[235]]) {
        var iu4n1 = bk60gd[J[235]][J[504]],
            yo5vr = [];
        for (var d8cg6t = 0x0; d8cg6t < bk60gd[J[235]][J[235]][J[10]]; d8cg6t++) {
            bk60gd[J[235]][J[235]][d8cg6t][J[372]] = J1QJ5(bk60gd[J[235]][J[235]][d8cg6t]), (yo5vr[J[10]] == 0x0 || bk60gd[J[235]][J[235]][d8cg6t][J[372]] != 0x0) && (yo5vr[yo5vr[J[10]]] = bk60gd[J[235]][J[235]][d8cg6t]);
        }
        J1Q4[J[192]][iu4n1] = window[J[496]](yo5vr), window[J[487]][J[497]](iu4n1);
    } else {
        var xirj7 = bk60gd ? bk60gd[J[236]] : '';
        window[J[250]](0x9, J[505] + xirj7), window[J[221]](J[506] + xirj7);
    }
}, window[J[507]] = function (rijv7x) {
    sendApi(J1Q4[J[181]], J[508], {
        'partner_id': J1Q4[J[189]],
        'uid': J1Q4[J[20]],
        'version': J1Q4[J[93]],
        'game_pkg': J1Q4[J[23]],
        'device': J1Q4[J[190]]
    }, reqServerRecommendCallBack, J1J4Q, J145);
}, window[J[509]] = function (fws92$) {
    J1Q4[J[495]] = ![];
    if (fws92$ && fws92$[J[236]] === J[329] && fws92$[J[235]]) {
        for (var e_pz2h = 0x0; e_pz2h < fws92$[J[235]][J[10]]; e_pz2h++) {
            fws92$[J[235]][e_pz2h][J[372]] = J1QJ5(fws92$[J[235]][e_pz2h]);
        }
        J1Q4[J[192]][-0x2] = window[J[496]](fws92$[J[235]]), window[J[487]][J[497]](-0x2);
    } else {
        var ov7rj = fws92$ ? fws92$[J[236]] : '';
        window[J[250]](0xa, J[510] + ov7rj), alert(J[511] + ov7rj);
    }
}, window[J[496]] = function (_f9w) {
    return _f9w;
}, window[J[512]] = function (pw9_2f, sw2f) {
    pw9_2f = pw9_2f || J1Q4[J[24]][J[25]], sendApi(J1Q4[J[181]], J[513], {
        'type': '4',
        'game_pkg': J1Q4[J[23]],
        'server_id': pw9_2f
    }, sw2f);
}, window[J[514]] = function (rvjoy5, _etzph, obyq0, pewz) {
    obyq0 = obyq0 || J1Q4[J[24]][J[25]], sendApi(J1Q4[J[181]], J[515], {
        'type': rvjoy5,
        'game_pkg': _etzph,
        'server_id': obyq0
    }, pewz);
}, window[J[516]] = function (_9w$2f, h8d) {
    sendApi(J1Q4[J[181]], J[517], { 'game_pkg': _9w$2f }, h8d);
}, window[J[518]] = function (ovqy5) {
    if (ovqy5) {
        if (ovqy5[J[372]] == 0x1) {
            if (ovqy5[J[519]] == 0x3) return 0x3;else return ovqy5[J[519]] == 0x1 ? 0x2 : 0x1;
        } else return ovqy5[J[372]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[J[520]] = function (f9ws$2, jvyx7r) {
    J1Q4[J[521]] = {
        'step': f9ws$2,
        'server_id': jvyx7r
    };
    var d80g6k = this;
    J15QJ4({ 'title': J[522] }), sendApi(J1Q4[J[181]], J[523], {
        'partner_id': J1Q4[J[189]],
        'uid': J1Q4[J[20]],
        'game_pkg': J1Q4[J[23]],
        'server_id': jvyx7r,
        'platform': J1Q4[J[97]],
        'platform_uid': J1Q4[J[335]],
        'check_login_time': J1Q4[J[338]],
        'check_login_sign': J1Q4[J[336]],
        'version_name': J1Q4[J[287]]
    }, J145QJ, J1J4Q, J145, function (cetph) {
        return cetph[J[236]] == J[329] || cetph[J[1]] == J[524] || cetph[J[1]] == J[525];
    });
}, window[J[526]] = function (ni1u34) {
    var g50k = this;
    if (ni1u34 && ni1u34[J[236]] === J[329] && ni1u34[J[235]]) {
        var _2ep9w = J1Q4[J[24]];
        _2ep9w[J[527]] = J1Q4[J[193]], _2ep9w[J[337]] = String(ni1u34[J[235]][J[528]]), _2ep9w[J[199]] = parseInt(ni1u34[J[235]][J[339]]);
        if (ni1u34[J[235]][J[529]]) _2ep9w[J[529]] = parseInt(ni1u34[J[235]][J[529]]);else _2ep9w[J[529]] = parseInt(ni1u34[J[235]][J[25]]);
        _2ep9w[J[530]] = 0x0, _2ep9w[J[22]] = J1Q4[J[386]], _2ep9w[J[531]] = ni1u34[J[235]][J[532]], _2ep9w[J[533]] = ni1u34[J[235]][J[533]];
        if (ni1u34[J[235]][J[534]]) _2ep9w[J[534]] = parseInt(ni1u34[J[235]][J[534]]);
        console[J[47]](J[535] + JSON[J[28]](_2ep9w[J[533]])), J1Q4[J[357]] == 0x1 && _2ep9w[J[533]] && _2ep9w[J[533]][J[536]] == 0x1 && (J1Q4[J[537]] = 0x1, window[J[37]][J[38]][J[538]]()), J14J5Q();
    } else {
        if (J1Q4[J[521]][J[539]] >= 0x3) {
            var koqb0 = ni1u34 ? ni1u34[J[236]] : '';
            window[J[250]](0xc, J[540] + koqb0), J145(JSON[J[28]](ni1u34)), window[J[221]](J[541] + koqb0);
        } else sendApi(J1Q4[J[181]], J[312], {
            'platform': J1Q4[J[179]],
            'partner_id': J1Q4[J[189]],
            'token': J1Q4[J[306]],
            'game_pkg': J1Q4[J[23]],
            'deviceId': J1Q4[J[190]],
            'scene': J[313] + J1Q4[J[191]]
        }, function (inu314) {
            if (!inu314 || inu314[J[236]] != J[329]) {
                window[J[221]](J[331] + inu314 && inu314[J[236]]);
                return;
            }
            J1Q4[J[336]] = String(inu314[J[337]]), J1Q4[J[338]] = String(inu314[J[339]]), setTimeout(function () {
                J145JQ(J1Q4[J[521]][J[539]] + 0x1, J1Q4[J[521]][J[25]]);
            }, 0x5dc);
        }, J1J4Q, J145, function (x7injv) {
            return x7injv[J[236]] == J[329] || x7injv[J[236]] == J[542];
        });
    }
}, window[J[543]] = function () {
    ServerLoading[J[38]][J[377]](J1Q4[J[357]]), window[J[207]] = !![], window[J[69]]();
}, window[J[68]] = function () {
    if (window[J[67]] && window[J[76]] && window[J[208]] && window[J[209]] && window[J[210]] && window[J[212]]) {
        if (!window[J[544]][J[38]]) {
            console[J[47]](J[545] + window[J[544]][J[38]]);
            var ehzp_ = wx[J[546]](),
                xryj7v = ehzp_[J[155]] ? ehzp_[J[155]] : 0x0,
                f$92ws = {
                'cdn': window[J[16]][J[22]],
                'spareCdn': window[J[16]][J[293]],
                'newRegister': window[J[16]][J[357]],
                'wxPC': window[J[16]][J[126]],
                'wxIOS': window[J[16]][J[120]],
                'wxAndroid': window[J[16]][J[123]],
                'wxParam': {
                    'limitLoad': window[J[16]][J[130]],
                    'benchmarkLevel': window[J[16]][J[131]],
                    'wxFrom': window[J[6]][J[298]] == J[547] ? 0x1 : 0x0,
                    'wxSDKVersion': window[J[45]],
                    'qudao': J[548]
                },
                'configType': window[J[16]][J[200]],
                'exposeType': window[J[16]][J[202]],
                'scene': xryj7v,
                'video_type': window[J[16]][J[308]],
                'ad_flag': window[J[16]][J[310]]
            };
            if (window[J[389]]) for (var kd0bqg in window[J[389]]) {
                if (!f$92ws[kd0bqg]) f$92ws[kd0bqg] = window[J[389]][kd0bqg];
            }
            new window[J[544]](f$92ws, window[J[16]][J[21]], window[J[173]]);
        }
    }
}, window[J[69]] = function () {
    if (window[J[67]] && window[J[76]] && window[J[208]] && window[J[209]] && window[J[210]] && window[J[212]] && window[J[207]] && window[J[211]]) {
        J15Q4J();
        if (!J14JQ) {
            J14JQ = !![];
            if (!window[J[544]][J[38]]) window[J[68]]();
            var yv7jrx = 0x0,
                s2f9$w = wx[J[549]]();
            s2f9$w && (window[J[16]][J[125]] && (yv7jrx = s2f9$w[J[115]]), console[J[1]](J[550] + s2f9$w[J[115]] + J[551] + s2f9$w[J[116]] + J[552] + s2f9$w[J[117]] + J[553] + s2f9$w[J[118]] + J[554] + s2f9$w[J[555]] + J[556] + s2f9$w[J[557]]));
            var t_pe = {};
            for (const o7yvrj in J1Q4[J[24]]) {
                t_pe[o7yvrj] = J1Q4[J[24]][o7yvrj];
            }
            var eh_z2 = {
                'channel': window[J[16]][J[194]],
                'account': window[J[16]][J[20]],
                'userId': window[J[16]][J[334]],
                'cdn': window[J[16]][J[22]],
                'data': window[J[16]][J[235]],
                'package': window[J[16]][J[177]],
                'newRegister': window[J[16]][J[357]],
                'pkgName': window[J[16]][J[23]],
                'partnerId': window[J[16]][J[189]],
                'platform_uid': window[J[16]][J[335]],
                'deviceId': window[J[16]][J[190]],
                'selectedServer': t_pe,
                'configType': window[J[16]][J[200]],
                'exposeType': window[J[16]][J[202]],
                'debugUsers': window[J[16]][J[197]],
                'wxMenuTop': yv7jrx,
                'wxShield': window[J[16]][J[205]],
                'encryptParam': window[J[16]][J[203]],
                'wx_channel': window[J[16]][J[307]],
                'zsy_tp_state': window[J[16]][J[309]]
            };
            if (window[J[389]]) for (var pchet in window[J[389]]) {
                eh_z2[pchet] = window[J[389]][pchet];
            }
            window[J[544]][J[38]][J[558]](eh_z2);
            if (J1Q4[J[24]] && J1Q4[J[24]][J[25]]) localStorage[J[559]](J[342] + J1Q4[J[23]] + J1Q4[J[20]], J1Q4[J[24]][J[25]]);
        }
    } else console[J[1]](J[560] + window[J[67]] + J[561] + window[J[76]] + J[562] + window[J[208]] + J[563] + window[J[209]] + J[564] + window[J[210]] + J[565] + window[J[212]] + J[566] + window[J[207]] + J[567] + window[J[211]]);
};