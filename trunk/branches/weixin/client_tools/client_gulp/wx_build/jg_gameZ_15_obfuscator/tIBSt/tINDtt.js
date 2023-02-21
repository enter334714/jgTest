var P = wx.$y;
import Tk$on8 from '../ttkttt/t6ktgt.js';
window[P[167]] = { 'wxVersion': window[P[6]][P[7]] }, window[P[168]] = ![], window[P[169]] = 0x1, window[P[170]] = 0x1, window[P[171]] = !![], window[P[172]] = !![], window[P[173]] = '', window[P[174]] = ![], window[P[16]] = {
    'base_cdn': P[175],
    'cdn': P[175]
}, P_U9[P[176]] = {}, P_U9[P[177]] = '0', P_U9[P[93]] = window[P[167]][P[178]], P_U9[P[128]] = '', P_U9['os'] = '1', P_U9[P[179]] = P[180], P_U9[P[181]] = P[182], P_U9[P[183]] = P[184], P_U9[P[185]] = P[186], P_U9[P[187]] = P[188], P_U9[P[189]] = '1', P_U9[P[23]] = '', P_U9[P[190]] = '', P_U9[P[191]] = 0x0, P_U9[P[192]] = {}, P_U9[P[193]] = parseInt(P_U9[P[189]]), P_U9[P[194]] = P_U9[P[189]], P_U9[P[24]] = {}, P_U9[P[31]] = P[195], P_U9[P[196]] = ![], P_U9[P[197]] = P[198], P_U9[P[199]] = Date[P[160]](), P_U9[P[200]] = P[201], P_U9[P[202]] = '_a', P_U9[P[203]] = '', P_U9[P[204]] = 0x2, P_U9[P[21]] = 0x7c1, P_U9[P[178]] = window[P[167]][P[178]], P_U9[P[205]] = ![], P_U9[P[120]] = ![], P_U9[P[123]] = ![], P_U9[P[126]] = ![], window[P[206]] = 0x5, window[P[207]] = ![], window[P[67]] = ![], window[P[76]] = ![], window[P[208]] = ![], window[P[209]] = ![], window[P[210]] = ![], window[P[211]] = ![], window[P[212]] = ![], window[P[213]] = ![], window[P[214]] = null, window[P[215]] = function (v06je1) {
    console[P[47]](P[215], v06je1), wx[P[216]]({}), wx[P[54]]({
        'title': P[85],
        'content': v06je1,
        'success'(vh019) {
            if (vh019[P[217]]) console[P[47]](P[218]);else vh019[P[219]] && console[P[47]](P[220]);
        }
    });
}, window[P[221]] = function (nxyg_) {
    console[P[47]](P[222], nxyg_), P_GU9V(), wx[P[54]]({
        'title': P[85],
        'content': nxyg_,
        'confirmText': P[223],
        'cancelText': P[224],
        'success'(vjh019) {
            if (vjh019[P[217]]) window[P[82]]();else vjh019[P[219]] && (console[P[47]](P[225]), wx[P[226]]({}));
        }
    });
}, window[P[227]] = function (j9ev01) {
    console[P[47]](P[227], j9ev01), wx[P[54]]({
        'title': P[85],
        'content': j9ev01,
        'confirmText': P[228],
        'showCancel': ![],
        'complete'(_lsgq) {
            console[P[47]](P[225]), wx[P[226]]({});
        }
    });
}, window[P[229]] = ![], window[P[230]] = function (t26zw) {
    window[P[229]] = !![], wx[P[231]](t26zw);
}, window[P[232]] = function () {
    window[P[229]] && (window[P[229]] = ![], wx[P[216]]({}));
}, window[P[233]] = function (mrbcl) {
    window[P[37]][P[38]][P[233]](mrbcl);
}, window[P[234]] = function (jvh190, zew6pt) {
    Tk$on8[P[234]](jvh190, function (_cl) {
        _cl && _cl[P[235]] ? _cl[P[235]][P[236]] == 0x1 ? zew6pt(!![]) : (zew6pt(![]), console[P[1]](P[237] + _cl[P[235]][P[238]])) : console[P[47]](P[234], _cl);
    });
}, window[P[239]] = function (wtfpk) {
    console[P[47]](P[240], wtfpk);
}, window[P[241]] = function (yl_sqc) {}, window[P[242]] = function (q_yxn, bu47i, ubai3) {}, window[P[243]] = function (m7cb) {
    console[P[47]](P[244], m7cb), window[P[37]][P[38]][P[245]](), window[P[37]][P[38]][P[246]](), window[P[37]][P[38]][P[247]](), window[P[248]]();
}, window[P[249]] = function ($pf2w) {
    window[P[250]](0xe, P[251] + $pf2w), window[P[221]](P[252]);
    var f2wp$k = {
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
        'error': P[253],
        'stack': $pf2w ? $pf2w : P[252]
    },
        $o2w = JSON[P[28]](f2wp$k);
    console[P[29]](P[254] + $o2w), window[P[31]]($o2w);
}, window[P[250]] = function (lcbr, fk$2do) {
    sendApi(P_U9[P[183]], P[255], {
        'game_pkg': P_U9[P[23]],
        'partner_id': P_U9[P[189]],
        'server_id': P_U9[P[24]] && P_U9[P[24]][P[25]] > 0x0 ? P_U9[P[24]][P[25]] : 0x0,
        'uid': P_U9[P[20]] > 0x0 ? P_U9[P[20]] : 0x0,
        'type': lcbr,
        'info': fk$2do
    });
}, window[P[256]] = function (_sqyl) {
    var sx_yg = JSON[P[257]](_sqyl);
    sx_yg[P[258]] = window[P[6]][P[7]], sx_yg[P[259]] = window[P[16]][P[24]] ? window[P[16]][P[24]][P[25]] : 0x0, sx_yg[P[26]] = window[P[26]];
    var odn$x = JSON[P[28]](sx_yg);
    console[P[29]](P[260] + odn$x), window[P[31]](odn$x);
}, window[P[83]] = function (xgy_sq, tw6ep) {
    var blcrm7 = {
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
        'error': xgy_sq,
        'stack': tw6ep
    },
        mrbc73 = JSON[P[28]](blcrm7);
    console[P[161]](P[261] + mrbc73), window[P[31]](mrbc73);
}, window[P[31]] = function (rml) {
    if (window[P[16]][P[129]] == P[262]) return;
    var qly_ = P_U9[P[31]] + P[263] + P_U9[P[20]];
    wx[P[264]]({
        'url': qly_,
        'method': P[265],
        'data': rml,
        'header': {
            'content-type': P[266],
            'cache-control': P[267]
        },
        'success': function ($p2k) {
            DEBUG && console[P[47]](P[268], qly_, rml, $p2k);
        },
        'fail': function (_qsylc) {
            DEBUG && console[P[47]](P[268], qly_, rml, _qsylc);
        },
        'complete': function () {}
    });
}, window[P[269]] = function () {
    function c7srml() {
        return ((0x1 + Math[P[270]]()) * 0x10000 | 0x0)[P[271]](0x10)[P[272]](0x1);
    }
    return c7srml() + c7srml() + '-' + c7srml() + '-' + c7srml() + '-' + c7srml() + '+' + c7srml() + c7srml() + c7srml();
}, window[P[82]] = function () {
    console[P[47]](P[273]);
    var $2wfko = Tk$on8[P[274]]();
    P_U9[P[194]] = $2wfko[P[275]], P_U9[P[193]] = $2wfko[P[275]], P_U9[P[189]] = $2wfko[P[275]], P_U9[P[23]] = $2wfko[P[276]];
    var $pf2wk = { 'game_ver': P_U9[P[93]] };
    P_U9[P[190]] = this[P[269]](), P_GUV9({ 'title': P[277] }), Tk$on8[P[278]]($pf2wk, this[P[279]][P[280]](this));
}, window[P[279]] = function (pvt) {
    var ofd8$ = pvt[P[281]];
    sdkInitRes = pvt, console[P[47]](P[282] + ofd8$ + P[283] + (ofd8$ == 0x1) + P[284] + pvt[P[7]] + P[285] + window[P[167]][P[178]]);
    if (!pvt[P[7]] || window[P[41]](window[P[167]][P[178]], pvt[P[7]]) < 0x0) console[P[47]](P[286]), P_U9[P[181]] = P[287], P_U9[P[183]] = P[288], P_U9[P[185]] = P[289], P_U9[P[22]] = P[290], P_U9[P[291]] = P[292], P_U9[P[293]] = 'xz', P_U9[P[205]] = ![];else window[P[41]](window[P[167]][P[178]], pvt[P[7]]) == 0x0 ? (console[P[47]](P[294]), P_U9[P[181]] = P[182], P_U9[P[183]] = P[184], P_U9[P[185]] = P[186], P_U9[P[22]] = P[295], P_U9[P[291]] = P[292], P_U9[P[293]] = P[296], P_U9[P[205]] = !![]) : (console[P[47]](P[297]), P_U9[P[181]] = P[182], P_U9[P[183]] = P[184], P_U9[P[185]] = P[186], P_U9[P[22]] = P[298], P_U9[P[291]] = P[292], P_U9[P[293]] = P[296], P_U9[P[205]] = ![]);
    P_U9[P[191]] = config[P[299]] ? config[P[299]] : 0x0, this[P[300]](), this[P[301]](), window[P[302]] = 0x5, P_GUV9({ 'title': P[303] }), Tk$on8[P[304]](this[P[305]][P[280]](this));
}, window[P[302]] = 0x5, window[P[305]] = function (dnok8, br7c) {
    if (dnok8 == 0x0 && br7c && br7c[P[306]]) {
        P_U9[P[307]] = br7c[P[306]], P_U9[P[308]] = br7c[P[308]], P_U9[P[309]] = br7c[P[309]], P_U9[P[310]] = br7c[P[310]], P_U9[P[311]] = br7c[P[311]];
        var og8xn = this;
        P_GUV9({ 'title': P[312] }), sendApi(P_U9[P[181]], P[313], {
            'platform': P_U9[P[179]],
            'partner_id': P_U9[P[189]],
            'token': br7c[P[306]],
            'game_pkg': P_U9[P[23]],
            'deviceId': P_U9[P[190]],
            'scene': P[314] + P_U9[P[191]]
        }, this[P[315]][P[280]](this), P_V9U, P_9G);
    } else br7c && br7c[P[65]] && window[P[302]] > 0x0 && (br7c[P[65]][P[121]](P[316]) != -0x1 || br7c[P[65]][P[121]](P[317]) != -0x1 || br7c[P[65]][P[121]](P[318]) != -0x1 || br7c[P[65]][P[121]](P[319]) != -0x1 || br7c[P[65]][P[121]](P[320]) != -0x1 || br7c[P[65]][P[121]](P[321]) != -0x1) ? (window[P[302]]--, Tk$on8[P[304]](this[P[305]][P[280]](this))) : (window[P[250]](0x1, P[322] + dnok8 + P[323] + (br7c ? br7c[P[65]] : '')), window[P[83]](P[324], JSON[P[28]]({
        'status': dnok8,
        'data': br7c
    })), window[P[221]](P[325] + (br7c && br7c[P[65]] ? '，' + br7c[P[65]] : '')));
}, window[P[315]] = function (_qxngy) {
    if (!_qxngy) {
        window[P[250]](0x2, P[326]), window[P[83]](P[327], P[328]), window[P[221]](P[329]);
        return;
    }
    if (_qxngy[P[236]] != P[330]) {
        window[P[250]](0x2, P[331] + _qxngy[P[236]]), window[P[83]](P[327], JSON[P[28]](_qxngy)), window[P[221]](P[332] + _qxngy[P[236]]);
        return;
    }
    if (_qxngy[P[333]] == 0x1) {
        window[P[221]](P[334]);
        return;
    }
    P_U9[P[335]] = String(_qxngy[P[20]]), P_U9[P[20]] = String(_qxngy[P[20]]), P_U9[P[97]] = String(_qxngy[P[97]]), P_U9[P[194]] = String(_qxngy[P[97]]), P_U9[P[336]] = String(_qxngy[P[336]]), P_U9[P[337]] = String(_qxngy[P[338]]), P_U9[P[339]] = String(_qxngy[P[340]]), P_U9[P[338]] = '';
    var p2fk$w = this;
    P_GUV9({ 'title': P[341] });
    var bc3m7r = localStorage[P[342]](P[343] + P_U9[P[23]] + P_U9[P[20]]);
    if (bc3m7r && bc3m7r != '') {
        var _yrlsc = Number(bc3m7r);
        p2fk$w[P[344]](_yrlsc);
    } else p2fk$w[P[345]]();
}, window[P[345]] = function () {
    var o$kd8 = this;
    sendApi(P_U9[P[181]], P[346], {
        'partner_id': P_U9[P[189]],
        'uid': P_U9[P[20]],
        'version': P_U9[P[93]],
        'game_pkg': P_U9[P[23]],
        'device': P_U9[P[190]]
    }, o$kd8[P[347]][P[280]](o$kd8), P_V9U, P_9G);
}, window[P[347]] = function (mscr_l) {
    if (!mscr_l) {
        window[P[250]](0x3, P[348]), window[P[221]](P[348]);
        return;
    }
    if (mscr_l[P[236]] != P[330]) {
        window[P[250]](0x3, P[349] + mscr_l[P[236]]), window[P[221]](P[349] + mscr_l[P[236]]);
        return;
    }
    if (!mscr_l[P[235]] || mscr_l[P[235]][P[10]] == 0x0) {
        window[P[250]](0x3, P[350]), window[P[221]](P[351]);
        return;
    }
    this[P[352]](mscr_l);
}, window[P[344]] = function (k2wf$o) {
    var s_qyx = this;
    sendApi(P_U9[P[181]], P[353], {
        'server_id': k2wf$o,
        'time': Date[P[160]]() / 0x3e8
    }, s_qyx[P[354]][P[280]](s_qyx), P_V9U, P_9G);
}, window[P[354]] = function (vej190) {
    if (!vej190) {
        window[P[250]](0x4, P[355]), this[P[345]]();
        return;
    }
    if (vej190[P[236]] != P[330]) {
        window[P[250]](0x4, P[356] + vej190[P[236]]), this[P[345]]();
        return;
    }
    if (!vej190[P[235]] || vej190[P[235]][P[10]] == 0x0) {
        window[P[250]](0x4, P[357]), this[P[345]]();
        return;
    }
    this[P[352]](vej190);
}, window[P[352]] = function (eptw6z) {
    P_U9[P[358]] = eptw6z[P[359]] != undefined ? eptw6z[P[359]] : 0x0, P_U9[P[24]] = {
        'server_id': String(eptw6z[P[235]][0x0][P[25]]),
        'server_name': String(eptw6z[P[235]][0x0][P[360]]),
        'entry_ip': eptw6z[P[235]][0x0][P[361]],
        'entry_port': parseInt(eptw6z[P[235]][0x0][P[362]]),
        'status': P_UVG(eptw6z[P[235]][0x0]),
        'start_time': eptw6z[P[235]][0x0][P[363]],
        'maintain_time': eptw6z[P[235]][0x0][P[364]] ? eptw6z[P[235]][0x0][P[364]] : '',
        'is_recommend': eptw6z[P[235]][0x0][P[365]],
        'cdn': P_U9[P[22]]
    }, this[P[366]](), window[P[37]] && window[P[37]][P[38]][P[367]] && window[P[37]][P[38]][P[367]](sdkInitRes[P[368]], sdkInitRes[P[369]], sdkInitRes[P[370]], sdkInitRes[P[371]], sdkInitRes[P[372]]);
}, window[P[366]] = function () {
    if (P_U9[P[358]] == 0x1) {
        var tz6w = P_U9[P[24]][P[373]];
        if (tz6w === -0x1 || tz6w === 0x0) {
            window[P[250]](0xf, P[374] + P_U9[P[24]]['id'] + P[375] + P_U9[P[24]][P[373]]), window[P[221]](tz6w === -0x1 ? P[376] : P[377]);
            return;
        }
        P_9GVU(0x0, P_U9[P[24]][P[25]]), window[P[37]][P[38]][P[378]](P_U9[P[358]]);
    } else window[P[37]][P[38]][P[379]](), P_GU9V();
    window[P[212]] = !![], window[P[380]](), window[P[68]](), window[P[69]]();
}, window[P[300]] = function () {
    sendApi(P_U9[P[181]], P[381], {
        'game_pkg': P_U9[P[23]],
        'version_name': P_U9[P[293]]
    }, this[P[382]][P[280]](this), P_V9U, P_9G);
}, window[P[382]] = function ($pkw2f) {
    if (!$pkw2f) {
        window[P[250]](0x5, P[383]), window[P[221]](P[383]);
        return;
    }
    if ($pkw2f[P[236]] != P[330]) {
        window[P[250]](0x5, P[384] + $pkw2f[P[236]]), window[P[221]](P[384] + $pkw2f[P[236]]);
        return;
    }
    if (!$pkw2f[P[235]] || !$pkw2f[P[235]][P[93]]) {
        window[P[250]](0x5, P[385] + ($pkw2f[P[235]] && $pkw2f[P[235]][P[93]])), window[P[221]](P[385] + ($pkw2f[P[235]] && $pkw2f[P[235]][P[93]]));
        return;
    }
    $pkw2f[P[235]][P[386]] && $pkw2f[P[235]][P[386]][P[10]] > 0xa && (P_U9[P[387]] = $pkw2f[P[235]][P[386]], P_U9[P[22]] = $pkw2f[P[235]][P[386]]), $pkw2f[P[235]][P[93]] && (P_U9[P[21]] = $pkw2f[P[235]][P[93]]), console[P[1]](P[388] + P_U9[P[21]] + P[389] + P_U9[P[293]]), window[P[210]] = !![], window[P[68]](), window[P[69]]();
}, window[P[390]], window[P[301]] = function () {
    sendApi(P_U9[P[181]], P[391], { 'game_pkg': P_U9[P[23]] }, this[P[392]][P[280]](this), P_V9U, P_9G);
}, window[P[392]] = function ($n8) {
    if ($n8 && $n8[P[236]] === P[330] && $n8[P[235]]) {
        window[P[390]] = $n8[P[235]];
        for (var l_yqsg in $n8[P[235]]) {
            P_U9[l_yqsg] = $n8[P[235]][l_yqsg];
        }
    } else window[P[250]](0xb, P[393]), console[P[1]](P[394] + $n8[P[236]]);
    window[P[211]] = !![], window[P[380]](), window[P[69]]();
}, window[P[380]] = function () {
    if (!window[P[212]] || !window[P[211]]) return;
    var $wfk2o = P_U9[P[358]] == 0x1,
        e16zv = P_U9[P[205]],
        sgy = P_U9[P[395]] && P_U9[P[395]] > 0x0;
    if (e16zv || $wfk2o && sgy) {
        var ylrc = P_U9[P[396]],
            xd$no = ylrc && ylrc[P[10]] == 0x9;
        xd$no && (window[P[397]] = ylrc);
        var qlc_y = P_U9[P[398]],
            n_gyqx = qlc_y && qlc_y[P[42]]('#')[P[10]] == 0x4;
        n_gyqx && (window[P[399]] = qlc_y);
    }
}, window[P[248]] = function () {
    window[P[397]] = null, window[P[399]] = null;
}, window[P[400]] = function (g_ylqs, i7u4, _gyxq, wzpf2t, tvzp6e, lsyr_, f$owk2, yclrs_, ok2, vt61ez) {
    tvzp6e = String(tvzp6e);
    var bc7m3 = f$owk2,
        y_rslc = yclrs_;
    P_U9[P[176]][tvzp6e] = {
        'productid': tvzp6e,
        'productname': bc7m3,
        'productdesc': y_rslc,
        'roleid': g_ylqs,
        'rolename': i7u4,
        'rolelevel': _gyxq,
        'price': lsyr_,
        'callback': ok2
    }, sendApi(P_U9[P[185]], P[401], {
        'game_pkg': P_U9[P[23]],
        'server_id': P_U9[P[24]][P[25]],
        'server_name': P_U9[P[24]][P[360]],
        'level': _gyxq,
        'uid': P_U9[P[20]],
        'role_id': g_ylqs,
        'role_name': i7u4,
        'product_id': tvzp6e,
        'product_name': bc7m3,
        'product_desc': y_rslc,
        'money': lsyr_,
        'partner_id': P_U9[P[189]]
    }, toPayCallBack, P_V9U, P_9G);
}, window[P[402]] = function (kd$no) {
    if (kd$no && (kd$no[P[403]] === 0xc8 || kd$no[P[236]] == P[330])) {
        var je901 = P_U9[P[176]][String(kd$no[P[404]])];
        if (je901[P[405]]) je901[P[405]](kd$no[P[404]], kd$no[P[406]], -0x1);
        Tk$on8[P[407]]({
            'cpbill': kd$no[P[406]],
            'productid': kd$no[P[404]],
            'productname': je901[P[408]],
            'productdesc': je901[P[409]],
            'serverid': P_U9[P[24]][P[25]],
            'servername': P_U9[P[24]][P[360]],
            'roleid': je901[P[410]],
            'rolename': je901[P[411]],
            'rolelevel': je901[P[412]],
            'price': je901[P[413]],
            'extension': JSON[P[28]]({ 'cp_order_id': kd$no[P[406]] })
        }, function (ba3i4, p2ztw) {
            je901[P[405]] && ba3i4 == 0x0 && je901[P[405]](kd$no[P[404]], kd$no[P[406]], ba3i4);
            console[P[1]](JSON[P[28]]({
                'type': P[414],
                'status': ba3i4,
                'data': kd$no,
                'role_name': je901[P[411]]
            }));
            if (ba3i4 === 0x0) {} else {
                if (ba3i4 === 0x1) {} else {
                    if (ba3i4 === 0x2) {}
                }
            }
        });
    } else {
        var rlsm_ = kd$no ? P[415] + kd$no[P[403]] + P[416] + kd$no[P[236]] + P[417] + kd$no[P[1]] : P[418];
        window[P[250]](0xd, P[419] + rlsm_), alert(rlsm_);
    }
}, window[P[420]] = function () {}, window[P[421]] = function (_sqyxg, i734ub, qsly, qsgxy, n$o8d) {
    Tk$on8[P[422]](P_U9[P[24]][P[25]], P_U9[P[24]][P[360]] || P_U9[P[24]][P[25]], _sqyxg, i734ub, qsly), sendApi(P_U9[P[181]], P[423], {
        'game_pkg': P_U9[P[23]],
        'server_id': P_U9[P[24]][P[25]],
        'role_id': _sqyxg,
        'uid': P_U9[P[20]],
        'role_name': i734ub,
        'role_type': qsgxy,
        'level': qsly
    });
}, window[P[424]] = function (h9j105, lsmr_, zpwt6e, gqnyx8, gsxqy, s_lqyc, sq_lgy, xnd8go, mcr7b, okfw) {
    P_U9[P[17]] = h9j105, P_U9[P[18]] = lsmr_, P_U9[P[19]] = zpwt6e, Tk$on8[P[425]](P_U9[P[24]][P[25]], P_U9[P[24]][P[360]] || P_U9[P[24]][P[25]], h9j105, lsmr_, zpwt6e), sendApi(P_U9[P[181]], P[426], {
        'game_pkg': P_U9[P[23]],
        'server_id': P_U9[P[24]][P[25]],
        'role_id': h9j105,
        'uid': P_U9[P[20]],
        'role_name': lsmr_,
        'role_type': gqnyx8,
        'level': zpwt6e,
        'evolution': gsxqy
    });
}, window[P[427]] = function (u3b4a, t6evp, ztpv, dno$x, lbc7m, gn_xqy, zep6t, pztev, o$8ndk, odfk2$) {
    P_U9[P[17]] = u3b4a, P_U9[P[18]] = t6evp, P_U9[P[19]] = ztpv, Tk$on8[P[428]](P_U9[P[24]][P[25]], P_U9[P[24]][P[360]] || P_U9[P[24]][P[25]], u3b4a, t6evp, ztpv), sendApi(P_U9[P[181]], P[426], {
        'game_pkg': P_U9[P[23]],
        'server_id': P_U9[P[24]][P[25]],
        'role_id': u3b4a,
        'uid': P_U9[P[20]],
        'role_name': t6evp,
        'role_type': dno$x,
        'level': ztpv,
        'evolution': lbc7m
    });
}, window[P[429]] = function (fkw2p$) {}, window[P[430]] = function (je09v1, _sxgq) {
    Tk$on8[P[431]](P[431], { 'activity_id': _sxgq }, function (x8yq) {
        je09v1 && je09v1(x8yq);
    });
}, window[P[432]] = function () {
    Tk$on8[P[432]]();
}, window[P[433]] = function () {
    Tk$on8[P[434]]();
}, window[P[435]] = function (ezvp, $ofk2, wtpz62, v6pze, wftz2, j19hv0, bia3u4, q_gyls) {
    q_gyls = q_gyls || P_U9[P[24]][P[25]], sendApi(P_U9[P[181]], P[436], {
        'phone': ezvp,
        'role_id': $ofk2,
        'uid': P_U9[P[20]],
        'game_pkg': P_U9[P[23]],
        'partner_id': P_U9[P[189]],
        'server_id': q_gyls
    }, bia3u4, 0x2, null, function () {
        return !![];
    });
}, window[P[151]] = function (wtfk) {
    window[P[153]] = wtfk, window[P[153]] && window[P[152]] && (console[P[1]](P[154] + window[P[152]][P[155]]), window[P[153]](window[P[152]]), window[P[152]] = null);
}, window[P[437]] = function (clsrm7, hj10, d$onx8, zpvte) {
    window[P[438]](P[439], {
        'game_pkg': window[P[16]][P[23]],
        'role_id': hj10,
        'server_id': d$onx8
    }, zpvte);
}, window[P[440]] = function (mrsl7c, kfo8d, ptzfw) {
    function k2fwtp(j9v0e) {
        var _lycq = [],
            yqg_ls = [],
            h1vj9 = ptzfw || window[P[6]][P[441]];
        for (var f2w$o in h1vj9) {
            var uib743 = Number(f2w$o);
            (!mrsl7c || !mrsl7c[P[10]] || mrsl7c[P[121]](uib743) != -0x1) && (yqg_ls[P[44]](h1vj9[f2w$o]), _lycq[P[44]]([uib743, 0x3]));
        }
        window[P[41]](window[P[45]], P[442]) >= 0x0 ? (console[P[47]](P[443]), Tk$on8[P[444]] && Tk$on8[P[444]](yqg_ls, function ($ofd) {
            console[P[47]](P[445]), console[P[47]]($ofd);
            if ($ofd && $ofd[P[65]] == P[446]) for (var _ycl in h1vj9) {
                if ($ofd[h1vj9[_ycl]] == P[447]) {
                    var pkw2 = Number(_ycl);
                    for (var rsy_lc = 0x0; rsy_lc < _lycq[P[10]]; rsy_lc++) {
                        if (_lycq[rsy_lc][0x0] == pkw2) {
                            _lycq[rsy_lc][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[P[41]](window[P[45]], P[448]) >= 0x0 ? wx[P[449]]({
                'withSubscriptions': !![],
                'success': function (cbml7) {
                    var t6wze = cbml7[P[450]][P[451]];
                    if (t6wze) {
                        console[P[47]](P[452]), console[P[47]](t6wze);
                        for (var sr_cl in h1vj9) {
                            if (t6wze[h1vj9[sr_cl]] == P[447]) {
                                var tzevp = Number(sr_cl);
                                for (var tp2w = 0x0; tp2w < _lycq[P[10]]; tp2w++) {
                                    if (_lycq[tp2w][0x0] == tzevp) {
                                        _lycq[tp2w][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[P[47]](_lycq), kfo8d && kfo8d(_lycq);
                    } else console[P[47]](P[453]), console[P[47]](cbml7), console[P[47]](_lycq), kfo8d && kfo8d(_lycq);
                },
                'fail': function () {
                    console[P[47]](P[454]), console[P[47]](_lycq), kfo8d && kfo8d(_lycq);
                }
            }) : (console[P[47]](P[455] + window[P[45]]), console[P[47]](_lycq), kfo8d && kfo8d(_lycq));
        })) : (console[P[47]](P[456] + window[P[45]]), console[P[47]](_lycq), kfo8d && kfo8d(_lycq)), wx[P[457]](k2fwtp);
    }
    wx[P[458]](k2fwtp);
}, window[P[459]] = {
    'isSuccess': ![],
    'level': P[460],
    'isCharging': ![]
}, window[P[461]] = function (gqxnd) {
    wx[P[139]]({
        'success': function (xn8og) {
            var iu = window[P[459]];
            iu[P[462]] = !![], iu[P[141]] = Number(xn8og[P[141]])[P[463]](0x0), iu[P[143]] = xn8og[P[143]], gqxnd && gqxnd(iu[P[462]], iu[P[141]], iu[P[143]]);
        },
        'fail': function (e6vt) {
            console[P[47]](P[464], e6vt[P[65]]);
            var mrlc7 = window[P[459]];
            gqxnd && gqxnd(mrlc7[P[462]], mrlc7[P[141]], mrlc7[P[143]]);
        }
    });
}, window[P[144]] = function ($f8okd) {
    wx[P[144]]({
        'success': function (kd8$) {
            $f8okd && $f8okd(!![], kd8$);
        },
        'fail': function (dx$n8o) {
            $f8okd && $f8okd(![], dx$n8o);
        }
    });
}, window[P[148]] = function (y_qgnx) {
    if (y_qgnx) wx[P[148]](y_qgnx);
}, window[P[465]] = function (x8nod$) {
    wx[P[465]](x8nod$);
}, window[P[438]] = function (xq_yg, pw2ftk, t6vpz, dkf$o8, s_q, dk$8n, r34bm, wepzt6) {
    if (dkf$o8 == undefined) dkf$o8 = 0x1;
    wx[P[264]]({
        'url': xq_yg,
        'method': r34bm || P[466],
        'responseType': P[467],
        'data': pw2ftk,
        'header': { 'content-type': wepzt6 || P[266] },
        'success': function (d2fko) {
            DEBUG && console[P[47]](P[468], xq_yg, info, d2fko);
            if (d2fko && d2fko[P[469]] == 0xc8) {
                var o$fdk = d2fko[P[235]];
                !dk$8n || dk$8n(o$fdk) ? t6vpz && t6vpz(o$fdk) : window[P[470]](xq_yg, pw2ftk, t6vpz, dkf$o8, s_q, dk$8n, d2fko);
            } else window[P[470]](xq_yg, pw2ftk, t6vpz, dkf$o8, s_q, dk$8n, d2fko);
        },
        'fail': function (_xnyq) {
            DEBUG && console[P[47]](P[471], xq_yg, info, _xnyq), window[P[470]](xq_yg, pw2ftk, t6vpz, dkf$o8, s_q, dk$8n, _xnyq);
        },
        'complete': function () {}
    });
}, window[P[470]] = function (fdk8o, o8$kf, ond$x, _srcly, i7bm, h9105, e6jv10) {
    _srcly - 0x1 > 0x0 ? setTimeout(function () {
        window[P[438]](fdk8o, o8$kf, ond$x, _srcly - 0x1, i7bm, h9105);
    }, 0x3e8) : i7bm && i7bm(JSON[P[28]]({
        'url': fdk8o,
        'response': e6jv10
    }));
}, window[P[472]] = function (fd2o$, s7mcl, j190e, rylc, x8dno$, fd2$, nx8$) {
    !j190e && (j190e = {});
    var k2wp = Math[P[473]](Date[P[160]]() / 0x3e8);
    j190e[P[340]] = k2wp, j190e[P[474]] = s7mcl;
    var xngy8 = Object[P[475]](j190e)[P[476]](),
        od8k$f = '',
        glsqy_ = '';
    for (var e6zvt1 = 0x0; e6zvt1 < xngy8[P[10]]; e6zvt1++) {
        od8k$f = od8k$f + (e6zvt1 == 0x0 ? '' : '&') + xngy8[e6zvt1] + j190e[xngy8[e6zvt1]], glsqy_ = glsqy_ + (e6zvt1 == 0x0 ? '' : '&') + xngy8[e6zvt1] + '=' + encodeURIComponent(j190e[xngy8[e6zvt1]]);
    }
    od8k$f = od8k$f + P_U9[P[187]];
    var mslcr_ = P[477] + md5(od8k$f);
    send(fd2o$ + '?' + glsqy_ + (glsqy_ == '' ? '' : '&') + mslcr_, null, rylc, x8dno$, fd2$, nx8$ || function (sq_lcy) {
        return sq_lcy[P[236]] == P[330];
    }, null, P[478]);
}, window[P[479]] = function (d$okn8, $p2wf) {
    var vj190e = 0x0;
    P_U9[P[24]] && (vj190e = P_U9[P[24]][P[25]]), sendApi(P_U9[P[183]], P[480], {
        'partnerId': P_U9[P[189]],
        'gamePkg': P_U9[P[23]],
        'logTime': Math[P[473]](Date[P[160]]() / 0x3e8),
        'platformUid': P_U9[P[336]],
        'type': d$okn8,
        'serverId': vj190e
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[P[481]] = function (gq_l) {
    sendApi(P_U9[P[181]], P[482], {
        'partner_id': P_U9[P[189]],
        'uid': P_U9[P[20]],
        'version': P_U9[P[93]],
        'game_pkg': P_U9[P[23]],
        'device': P_U9[P[190]]
    }, P_U9VG, P_V9U, P_9G);
}, window[P[483]] = function (pwt2z6) {
    if (pwt2z6 && pwt2z6[P[236]] === P[330] && pwt2z6[P[235]]) {
        pwt2z6[P[235]][P[484]]({
            'id': -0x2,
            'name': P[485]
        }), pwt2z6[P[235]][P[484]]({
            'id': -0x1,
            'name': P[486]
        }), P_U9[P[487]] = pwt2z6[P[235]];
        if (window[P[488]]) window[P[488]][P[489]]();
    } else {
        P_U9[P[490]] = ![];
        var y8gnqx = pwt2z6 ? pwt2z6[P[236]] : '';
        window[P[250]](0x7, P[491] + y8gnqx), window[P[221]](P[492] + y8gnqx);
    }
}, window[P[493]] = function (qx8y) {
    sendApi(P_U9[P[181]], P[494], {
        'partner_id': P_U9[P[189]],
        'uid': P_U9[P[20]],
        'version': P_U9[P[93]],
        'game_pkg': P_U9[P[23]],
        'device': P_U9[P[190]]
    }, P_GUV, P_V9U, P_9G);
}, window[P[495]] = function (b4m37) {
    P_U9[P[496]] = ![];
    if (b4m37 && b4m37[P[236]] === P[330] && b4m37[P[235]]) {
        for (var ez16tv = 0x0; ez16tv < b4m37[P[235]][P[10]]; ez16tv++) {
            b4m37[P[235]][ez16tv][P[373]] = P_UVG(b4m37[P[235]][ez16tv]);
        }
        P_U9[P[192]][-0x1] = window[P[497]](b4m37[P[235]]), window[P[488]][P[498]](-0x1);
    } else {
        var mrl_s = b4m37 ? b4m37[P[236]] : '';
        window[P[250]](0x8, P[499] + mrl_s), window[P[221]](P[500] + mrl_s);
    }
}, window[P[501]] = function (w$k) {
    sendApi(P_U9[P[181]], P[494], {
        'partner_id': P_U9[P[189]],
        'uid': P_U9[P[20]],
        'version': P_U9[P[93]],
        'game_pkg': P_U9[P[23]],
        'device': P_U9[P[190]]
    }, w$k, P_V9U, P_9G);
}, window[P[502]] = function (_rsyl, dq8g) {
    sendApi(P_U9[P[181]], P[503], {
        'partner_id': P_U9[P[189]],
        'uid': P_U9[P[20]],
        'version': P_U9[P[93]],
        'game_pkg': P_U9[P[23]],
        'device': P_U9[P[190]],
        'server_group_id': dq8g
    }, P_VUG, P_V9U, P_9G);
}, window[P[504]] = function ($ofk8) {
    P_U9[P[496]] = ![];
    if ($ofk8 && $ofk8[P[236]] === P[330] && $ofk8[P[235]] && $ofk8[P[235]][P[235]]) {
        var te1vz6 = $ofk8[P[235]][P[505]],
            c_sqy = [];
        for (var qgyx_n = 0x0; qgyx_n < $ofk8[P[235]][P[235]][P[10]]; qgyx_n++) {
            $ofk8[P[235]][P[235]][qgyx_n][P[373]] = P_UVG($ofk8[P[235]][P[235]][qgyx_n]), (c_sqy[P[10]] == 0x0 || $ofk8[P[235]][P[235]][qgyx_n][P[373]] != 0x0) && (c_sqy[c_sqy[P[10]]] = $ofk8[P[235]][P[235]][qgyx_n]);
        }
        P_U9[P[192]][te1vz6] = window[P[497]](c_sqy), window[P[488]][P[498]](te1vz6);
    } else {
        var gxyn8q = $ofk8 ? $ofk8[P[236]] : '';
        window[P[250]](0x9, P[506] + gxyn8q), window[P[221]](P[507] + gxyn8q);
    }
}, window[P[508]] = function (y_qsg) {
    sendApi(P_U9[P[181]], P[509], {
        'partner_id': P_U9[P[189]],
        'uid': P_U9[P[20]],
        'version': P_U9[P[93]],
        'game_pkg': P_U9[P[23]],
        'device': P_U9[P[190]]
    }, reqServerRecommendCallBack, P_V9U, P_9G);
}, window[P[510]] = function (xg8y) {
    P_U9[P[496]] = ![];
    if (xg8y && xg8y[P[236]] === P[330] && xg8y[P[235]]) {
        for (var ngd8 = 0x0; ngd8 < xg8y[P[235]][P[10]]; ngd8++) {
            xg8y[P[235]][ngd8][P[373]] = P_UVG(xg8y[P[235]][ngd8]);
        }
        P_U9[P[192]][-0x2] = window[P[497]](xg8y[P[235]]), window[P[488]][P[498]](-0x2);
    } else {
        var d8$kf = xg8y ? xg8y[P[236]] : '';
        window[P[250]](0xa, P[511] + d8$kf), alert(P[512] + d8$kf);
    }
}, window[P[497]] = function (w2ftkp) {
    return w2ftkp;
}, window[P[513]] = function (q8xdg, yq_x) {
    q8xdg = q8xdg || P_U9[P[24]][P[25]], sendApi(P_U9[P[181]], P[514], {
        'type': '4',
        'game_pkg': P_U9[P[23]],
        'server_id': q8xdg
    }, yq_x);
}, window[P[515]] = function (rsmc, qx_ysg, lm7cs, l_msrc) {
    lm7cs = lm7cs || P_U9[P[24]][P[25]], sendApi(P_U9[P[181]], P[516], {
        'type': rsmc,
        'game_pkg': qx_ysg,
        'server_id': lm7cs
    }, l_msrc);
}, window[P[517]] = function (qyxgs, sm7crl) {
    sendApi(P_U9[P[181]], P[518], { 'game_pkg': qyxgs }, sm7crl);
}, window[P[519]] = function (mclr7b) {
    if (mclr7b) {
        if (mclr7b[P[373]] == 0x1) {
            if (mclr7b[P[520]] == 0x3) return 0x3;else return mclr7b[P[520]] == 0x1 ? 0x2 : 0x1;
        } else return mclr7b[P[373]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[P[521]] = function (ve1j90, _lcrs) {
    P_U9[P[522]] = {
        'step': ve1j90,
        'server_id': _lcrs
    };
    var y_nq = this;
    P_GUV9({ 'title': P[523] }), sendApi(P_U9[P[181]], P[524], {
        'partner_id': P_U9[P[189]],
        'uid': P_U9[P[20]],
        'game_pkg': P_U9[P[23]],
        'server_id': _lcrs,
        'platform': P_U9[P[97]],
        'platform_uid': P_U9[P[336]],
        'check_login_time': P_U9[P[339]],
        'check_login_sign': P_U9[P[337]],
        'version_name': P_U9[P[293]]
    }, P_9GUV, P_V9U, P_9G, function ($pf) {
        return $pf[P[236]] == P[330] || $pf[P[1]] == P[525] || $pf[P[1]] == P[526];
    });
}, window[P[527]] = function (b374im) {
    var tz = this;
    if (b374im && b374im[P[236]] === P[330] && b374im[P[235]]) {
        var r43b7 = P_U9[P[24]];
        r43b7[P[528]] = P_U9[P[193]], r43b7[P[338]] = String(b374im[P[235]][P[529]]), r43b7[P[199]] = parseInt(b374im[P[235]][P[340]]);
        if (b374im[P[235]][P[530]]) r43b7[P[530]] = parseInt(b374im[P[235]][P[530]]);else r43b7[P[530]] = parseInt(b374im[P[235]][P[25]]);
        r43b7[P[531]] = 0x0, r43b7[P[22]] = P_U9[P[387]], r43b7[P[532]] = b374im[P[235]][P[533]], r43b7[P[534]] = b374im[P[235]][P[534]];
        if (b374im[P[235]][P[535]]) r43b7[P[535]] = parseInt(b374im[P[235]][P[535]]);
        console[P[47]](P[536] + JSON[P[28]](r43b7[P[534]])), P_U9[P[358]] == 0x1 && r43b7[P[534]] && r43b7[P[534]][P[537]] == 0x1 && (P_U9[P[538]] = 0x1, window[P[37]][P[38]][P[539]]()), P_9VGU();
    } else {
        if (P_U9[P[522]][P[540]] >= 0x3) {
            var pw$fk = b374im ? b374im[P[236]] : '';
            window[P[250]](0xc, P[541] + pw$fk), P_9G(JSON[P[28]](b374im)), window[P[221]](P[542] + pw$fk);
        } else sendApi(P_U9[P[181]], P[313], {
            'platform': P_U9[P[179]],
            'partner_id': P_U9[P[189]],
            'token': P_U9[P[307]],
            'game_pkg': P_U9[P[23]],
            'deviceId': P_U9[P[190]],
            'scene': P[314] + P_U9[P[191]]
        }, function (p6wtz2) {
            if (!p6wtz2 || p6wtz2[P[236]] != P[330]) {
                window[P[221]](P[332] + p6wtz2 && p6wtz2[P[236]]);
                return;
            }
            P_U9[P[337]] = String(p6wtz2[P[338]]), P_U9[P[339]] = String(p6wtz2[P[340]]), setTimeout(function () {
                P_9GVU(P_U9[P[522]][P[540]] + 0x1, P_U9[P[522]][P[25]]);
            }, 0x5dc);
        }, P_V9U, P_9G, function (pwtf) {
            return pwtf[P[236]] == P[330] || pwtf[P[236]] == P[543];
        });
    }
}, window[P[544]] = function () {
    ServerLoading[P[38]][P[378]](P_U9[P[358]]), window[P[207]] = !![], window[P[69]]();
}, window[P[68]] = function () {
    if (window[P[67]] && window[P[76]] && window[P[208]] && window[P[209]] && window[P[210]] && window[P[212]]) {
        if (!window[P[545]][P[38]]) {
            console[P[47]](P[546] + window[P[545]][P[38]]);
            var dnk$o = wx[P[547]](),
                mcbr3 = dnk$o[P[155]] ? dnk$o[P[155]] : 0x0,
                $nx8 = {
                'cdn': window[P[16]][P[22]],
                'spareCdn': window[P[16]][P[291]],
                'newRegister': window[P[16]][P[358]],
                'wxPC': window[P[16]][P[126]],
                'wxIOS': window[P[16]][P[120]],
                'wxAndroid': window[P[16]][P[123]],
                'wxParam': {
                    'limitLoad': window[P[16]][P[130]],
                    'benchmarkLevel': window[P[16]][P[131]],
                    'wxFrom': window[P[6]][P[299]] == P[548] ? 0x1 : 0x0,
                    'wxSDKVersion': window[P[45]]
                },
                'configType': window[P[16]][P[200]],
                'exposeType': window[P[16]][P[202]],
                'scene': mcbr3,
                'video_type': window[P[16]][P[309]],
                'ad_flag': window[P[16]][P[311]]
            };
            if (window[P[390]]) for (var m4bi3 in window[P[390]]) {
                if (!$nx8[m4bi3]) $nx8[m4bi3] = window[P[390]][m4bi3];
            }
            new window[P[545]]($nx8, window[P[16]][P[21]], window[P[173]]);
        }
    }
}, window[P[69]] = function () {
    if (window[P[67]] && window[P[76]] && window[P[208]] && window[P[209]] && window[P[210]] && window[P[212]] && window[P[207]] && window[P[211]]) {
        P_GU9V();
        if (!P_9VU) {
            P_9VU = !![];
            if (!window[P[545]][P[38]]) window[P[68]]();
            var ep6ztw = 0x0,
                k$df = wx[P[549]]();
            k$df && (window[P[16]][P[125]] && (ep6ztw = k$df[P[115]]), console[P[1]](P[550] + k$df[P[115]] + P[551] + k$df[P[116]] + P[552] + k$df[P[117]] + P[553] + k$df[P[118]] + P[554] + k$df[P[555]] + P[556] + k$df[P[557]]));
            var o$f8d = {};
            for (const qng8 in P_U9[P[24]]) {
                o$f8d[qng8] = P_U9[P[24]][qng8];
            }
            var wo$2f = {
                'channel': window[P[16]][P[194]],
                'account': window[P[16]][P[20]],
                'userId': window[P[16]][P[335]],
                'cdn': window[P[16]][P[22]],
                'data': window[P[16]][P[235]],
                'package': window[P[16]][P[177]],
                'newRegister': window[P[16]][P[358]],
                'pkgName': window[P[16]][P[23]],
                'partnerId': window[P[16]][P[189]],
                'platform_uid': window[P[16]][P[336]],
                'deviceId': window[P[16]][P[190]],
                'selectedServer': o$f8d,
                'configType': window[P[16]][P[200]],
                'exposeType': window[P[16]][P[202]],
                'debugUsers': window[P[16]][P[197]],
                'wxMenuTop': ep6ztw,
                'wxShield': window[P[16]][P[205]],
                'encryptParam': window[P[16]][P[203]],
                'wx_channel': window[P[16]][P[308]],
                'zsy_tp_state': window[P[16]][P[310]]
            };
            if (window[P[390]]) for (var _gysqx in window[P[390]]) {
                wo$2f[_gysqx] = window[P[390]][_gysqx];
            }
            window[P[545]][P[38]][P[558]](wo$2f);
            if (P_U9[P[24]] && P_U9[P[24]][P[25]]) localStorage[P[559]](P[343] + P_U9[P[23]] + P_U9[P[20]], P_U9[P[24]][P[25]]);
        }
    } else console[P[1]](P[560] + window[P[67]] + P[561] + window[P[76]] + P[562] + window[P[208]] + P[563] + window[P[209]] + P[564] + window[P[210]] + P[565] + window[P[212]] + P[566] + window[P[207]] + P[567] + window[P[211]]);
};