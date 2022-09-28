var J = wx.h$;
import gi7xjr from '../Zqy10Zqy10basdZqy10/Zqy105sdkZqy10.js';
window[J[167]] = { 'wxVersion': window[J[6]][J[7]] }, window[J[168]] = ![], window[J[169]] = 0x1, window[J[170]] = 0x1, window[J[171]] = !![], window[J[172]] = !![], window[J[173]] = '', window[J[174]] = ![], window[J[16]] = {
    'base_cdn': J[175],
    'cdn': J[175]
}, J1Q4[J[176]] = {}, J1Q4[J[177]] = '0', J1Q4[J[93]] = window[J[167]][J[178]], J1Q4[J[128]] = '', J1Q4['os'] = '1', J1Q4[J[179]] = J[180], J1Q4[J[181]] = J[182], J1Q4[J[183]] = J[184], J1Q4[J[185]] = J[186], J1Q4[J[187]] = J[188], J1Q4[J[189]] = '1', J1Q4[J[23]] = '', J1Q4[J[190]] = '', J1Q4[J[191]] = 0x0, J1Q4[J[192]] = {}, J1Q4[J[193]] = parseInt(J1Q4[J[189]]), J1Q4[J[194]] = J1Q4[J[189]], J1Q4[J[24]] = {}, J1Q4[J[31]] = J[195], J1Q4[J[196]] = ![], J1Q4[J[197]] = J[198], J1Q4[J[199]] = Date[J[160]](), J1Q4[J[200]] = J[201], J1Q4[J[202]] = '_a', J1Q4[J[203]] = 0x2, J1Q4[J[21]] = 0x7c1, J1Q4[J[178]] = window[J[167]][J[178]], J1Q4[J[204]] = ![], J1Q4[J[120]] = ![], J1Q4[J[123]] = ![], J1Q4[J[126]] = ![], window[J[205]] = 0x5, window[J[206]] = ![], window[J[67]] = ![], window[J[76]] = ![], window[J[207]] = ![], window[J[208]] = ![], window[J[209]] = ![], window[J[210]] = ![], window[J[211]] = ![], window[J[212]] = ![], window[J[213]] = null, window[J[214]] = function (oyb0q) {
    console[J[47]](J[214], oyb0q), wx[J[215]]({}), wx[J[54]]({
        'title': J[85],
        'content': oyb0q,
        'success'(phzet_) {
            if (phzet_[J[216]]) console[J[47]](J[217]);else phzet_[J[218]] && console[J[47]](J[219]);
        }
    });
}, window[J[220]] = function (kbqg05) {
    console[J[47]](J[221], kbqg05), J15Q4J(), wx[J[54]]({
        'title': J[85],
        'content': kbqg05,
        'confirmText': J[222],
        'cancelText': J[223],
        'success'(g8) {
            if (g8[J[216]]) window[J[82]]();else g8[J[218]] && (console[J[47]](J[224]), wx[J[225]]({}));
        }
    });
}, window[J[226]] = function (rixv) {
    console[J[47]](J[226], rixv), wx[J[54]]({
        'title': J[85],
        'content': rixv,
        'confirmText': J[227],
        'showCancel': ![],
        'complete'(ez_ht) {
            console[J[47]](J[224]), wx[J[225]]({});
        }
    });
}, window[J[228]] = ![], window[J[229]] = function (pchzet) {
    window[J[228]] = !![], wx[J[230]](pchzet);
}, window[J[231]] = function () {
    window[J[228]] && (window[J[228]] = ![], wx[J[215]]({}));
}, window[J[232]] = function (qk0gd) {
    window[J[37]][J[38]][J[232]](qk0gd);
}, window[J[233]] = function (bqgk05, hc8td) {
    gi7xjr[J[233]](bqgk05, function (hz2p_) {
        hz2p_ && hz2p_[J[234]] ? hz2p_[J[234]][J[235]] == 0x1 ? hc8td(!![]) : (hc8td(![]), console[J[1]](J[236] + hz2p_[J[234]][J[237]])) : console[J[47]](J[233], hz2p_);
    });
}, window[J[238]] = function ($_fw29) {
    console[J[47]](J[239], $_fw29);
}, window[J[240]] = function (la3u4m) {}, window[J[241]] = function (t6c8, mau4l3, ula341) {}, window[J[242]] = function (i14nu) {
    console[J[47]](J[243], i14nu), window[J[37]][J[38]][J[244]](), window[J[37]][J[38]][J[245]](), window[J[37]][J[38]][J[246]]();
}, window[J[247]] = function (a13n) {
    window[J[248]](0xe, J[249] + a13n), window[J[220]](J[250]);
    var zt_hp = {
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
        'error': J[251],
        'stack': a13n ? a13n : J[250]
    },
        xj1 = JSON[J[28]](zt_hp);
    console[J[29]](J[252] + xj1), window[J[31]](xj1);
}, window[J[248]] = function (ry5jv, ctepzh) {
    sendApi(J1Q4[J[183]], J[253], {
        'game_pkg': J1Q4[J[23]],
        'partner_id': J1Q4[J[189]],
        'server_id': J1Q4[J[24]] && J1Q4[J[24]][J[25]] > 0x0 ? J1Q4[J[24]][J[25]] : 0x0,
        'uid': J1Q4[J[20]] > 0x0 ? J1Q4[J[20]] : 0x0,
        'type': ry5jv,
        'info': ctepzh
    });
}, window[J[254]] = function (bqory5) {
    var n4ui = JSON[J[255]](bqory5);
    n4ui[J[256]] = window[J[6]][J[7]], n4ui[J[257]] = window[J[16]][J[24]] ? window[J[16]][J[24]][J[25]] : 0x0, n4ui[J[26]] = window[J[26]];
    var gdk60b = JSON[J[28]](n4ui);
    console[J[29]](J[258] + gdk60b), window[J[31]](gdk60b);
}, window[J[83]] = function (_zehtp, bk06) {
    var u4ni3 = {
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
        'error': _zehtp,
        'stack': bk06
    },
        y5ovjr = JSON[J[28]](u4ni3);
    console[J[161]](J[259] + y5ovjr), window[J[31]](y5ovjr);
}, window[J[31]] = function (rvjy7x) {
    if (window[J[16]][J[129]] == J[260]) return;
    var $fs9 = J1Q4[J[31]] + J[261] + J1Q4[J[20]];
    wx[J[262]]({
        'url': $fs9,
        'method': J[263],
        'data': rvjy7x,
        'header': {
            'content-type': J[264],
            'cache-control': J[265]
        },
        'success': function (xrjy7v) {
            DEBUG && console[J[47]](J[266], $fs9, rvjy7x, xrjy7v);
        },
        'fail': function (yj7o) {
            DEBUG && console[J[47]](J[266], $fs9, rvjy7x, yj7o);
        },
        'complete': function () {}
    });
}, window[J[267]] = function () {
    function r7xj() {
        return ((0x1 + Math[J[268]]()) * 0x10000 | 0x0)[J[269]](0x10)[J[270]](0x1);
    }
    return r7xj() + r7xj() + '-' + r7xj() + '-' + r7xj() + '-' + r7xj() + '+' + r7xj() + r7xj() + r7xj();
}, window[J[82]] = function () {
    console[J[47]](J[271]);
    var hctz6 = gi7xjr[J[272]]();
    J1Q4[J[194]] = hctz6[J[273]], J1Q4[J[193]] = hctz6[J[273]], J1Q4[J[189]] = hctz6[J[273]], J1Q4[J[23]] = hctz6[J[274]];
    var g68dkc = { 'game_ver': J1Q4[J[93]] };
    J1Q4[J[190]] = this[J[267]](), J15QJ4({ 'title': J[275] }), gi7xjr[J[276]](g68dkc, this[J[277]][J[278]](this));
}, window[J[277]] = function (f92_wp) {
    var ws$2f9 = f92_wp[J[279]];
    sdkInitRes = f92_wp, console[J[47]](J[280] + ws$2f9 + J[281] + (ws$2f9 == 0x1) + J[282] + f92_wp[J[7]] + J[283] + window[J[167]][J[178]] + J[284] + f92_wp[J[285]]);
    if (!f92_wp[J[7]] || window[J[41]](window[J[167]][J[178]], f92_wp[J[7]]) < 0x0) console[J[47]](J[286]), J1Q4[J[181]] = J[287], J1Q4[J[183]] = J[288], J1Q4[J[185]] = J[289], J1Q4[J[22]] = J[290], J1Q4[J[291]] = J[292], J1Q4[J[285]] = f92_wp[J[285]], J1Q4[J[204]] = ![];else window[J[41]](window[J[167]][J[178]], f92_wp[J[7]]) == 0x0 ? (console[J[47]](J[293]), J1Q4[J[181]] = J[182], J1Q4[J[183]] = J[184], J1Q4[J[185]] = J[186], J1Q4[J[22]] = J[175], J1Q4[J[291]] = J[292], J1Q4[J[285]] = J[294], J1Q4[J[204]] = !![]) : (console[J[47]](J[295]), J1Q4[J[181]] = J[182], J1Q4[J[183]] = J[184], J1Q4[J[185]] = J[186], J1Q4[J[22]] = J[175], J1Q4[J[291]] = J[292], J1Q4[J[285]] = J[294], J1Q4[J[204]] = ![]);
    J1Q4[J[191]] = config[J[296]] ? config[J[296]] : 0x0, this[J[297]](), this[J[298]](), window[J[299]] = 0x5, J15QJ4({ 'title': J[300] }), gi7xjr[J[301]](this[J[302]][J[278]](this));
}, window[J[299]] = 0x5, window[J[302]] = function (jv5r, x7ijvr) {
    if (jv5r == 0x0 && x7ijvr && x7ijvr[J[303]]) {
        J1Q4[J[304]] = x7ijvr[J[303]], J1Q4[J[305]] = x7ijvr[J[305]];
        var k680gd = this;
        J15QJ4({ 'title': J[306] }), sendApi(J1Q4[J[181]], J[307], {
            'platform': J1Q4[J[179]],
            'partner_id': J1Q4[J[189]],
            'token': x7ijvr[J[303]],
            'game_pkg': J1Q4[J[23]],
            'deviceId': J1Q4[J[190]],
            'scene': J[308] + J1Q4[J[191]]
        }, this[J[309]][J[278]](this), J1J4Q, J145);
    } else x7ijvr && x7ijvr[J[65]] && window[J[299]] > 0x0 && (x7ijvr[J[65]][J[121]](J[310]) != -0x1 || x7ijvr[J[65]][J[121]](J[311]) != -0x1 || x7ijvr[J[65]][J[121]](J[312]) != -0x1 || x7ijvr[J[65]][J[121]](J[313]) != -0x1 || x7ijvr[J[65]][J[121]](J[314]) != -0x1 || x7ijvr[J[65]][J[121]](J[315]) != -0x1) ? (window[J[299]]--, gi7xjr[J[301]](this[J[302]][J[278]](this))) : (window[J[248]](0x1, J[316] + jv5r + J[317] + (x7ijvr ? x7ijvr[J[65]] : '')), window[J[83]](J[318], JSON[J[28]]({
        'status': jv5r,
        'data': x7ijvr
    })), window[J[220]](J[319] + (x7ijvr && x7ijvr[J[65]] ? '，' + x7ijvr[J[65]] : '')));
}, window[J[309]] = function (c6thz) {
    if (!c6thz) {
        window[J[248]](0x2, J[320]), window[J[83]](J[321], J[322]), window[J[220]](J[323]);
        return;
    }
    if (c6thz[J[235]] != J[324]) {
        window[J[248]](0x2, J[325] + c6thz[J[235]]), window[J[83]](J[321], JSON[J[28]](c6thz)), window[J[220]](J[326] + c6thz[J[235]]);
        return;
    }
    if (c6thz[J[327]] == 0x1) {
        window[J[220]](J[328]);
        return;
    }
    J1Q4[J[329]] = String(c6thz[J[20]]), J1Q4[J[20]] = String(c6thz[J[20]]), J1Q4[J[97]] = String(c6thz[J[97]]), J1Q4[J[194]] = String(c6thz[J[97]]), J1Q4[J[330]] = String(c6thz[J[330]]), J1Q4[J[331]] = String(c6thz[J[332]]), J1Q4[J[333]] = String(c6thz[J[334]]), J1Q4[J[332]] = '';
    var ryqov5 = this;
    J15QJ4({ 'title': J[335] });
    var orybq = localStorage[J[336]](J[337] + J1Q4[J[23]] + J1Q4[J[20]]);
    if (orybq && orybq != '') {
        var e2zw_p = Number(orybq);
        ryqov5[J[338]](e2zw_p);
    } else ryqov5[J[339]]();
}, window[J[339]] = function () {
    var yvjr7 = this;
    sendApi(J1Q4[J[181]], J[340], {
        'partner_id': J1Q4[J[189]],
        'uid': J1Q4[J[20]],
        'version': J1Q4[J[93]],
        'game_pkg': J1Q4[J[23]],
        'device': J1Q4[J[190]]
    }, yvjr7[J[341]][J[278]](yvjr7), J1J4Q, J145);
}, window[J[341]] = function (hz_e) {
    if (!hz_e) {
        window[J[248]](0x3, J[342]), window[J[220]](J[342]);
        return;
    }
    if (hz_e[J[235]] != J[324]) {
        window[J[248]](0x3, J[343] + hz_e[J[235]]), window[J[220]](J[343] + hz_e[J[235]]);
        return;
    }
    if (!hz_e[J[234]] || hz_e[J[234]][J[10]] == 0x0) {
        window[J[248]](0x3, J[344]), window[J[220]](J[345]);
        return;
    }
    this[J[346]](hz_e);
}, window[J[338]] = function (_hz) {
    var czeht8 = this;
    sendApi(J1Q4[J[181]], J[347], {
        'server_id': _hz,
        'time': Date[J[160]]() / 0x3e8
    }, czeht8[J[348]][J[278]](czeht8), J1J4Q, J145);
}, window[J[348]] = function (_2hepz) {
    if (!_2hepz) {
        window[J[248]](0x4, J[349]), this[J[339]]();
        return;
    }
    if (_2hepz[J[235]] != J[324]) {
        window[J[248]](0x4, J[350] + _2hepz[J[235]]), this[J[339]]();
        return;
    }
    if (!_2hepz[J[234]] || _2hepz[J[234]][J[10]] == 0x0) {
        window[J[248]](0x4, J[351]), this[J[339]]();
        return;
    }
    this[J[346]](_2hepz), window[J[37]] && window[J[37]][J[38]][J[352]] && window[J[37]][J[38]][J[352]](sdkInitRes[J[353]], sdkInitRes[J[354]], sdkInitRes[J[355]], sdkInitRes[J[356]], sdkInitRes[J[357]]);
}, window[J[346]] = function (m4a3) {
    J1Q4[J[358]] = m4a3[J[359]] != undefined ? m4a3[J[359]] : 0x0, J1Q4[J[24]] = {
        'server_id': String(m4a3[J[234]][0x0][J[25]]),
        'server_name': String(m4a3[J[234]][0x0][J[360]]),
        'entry_ip': m4a3[J[234]][0x0][J[361]],
        'entry_port': parseInt(m4a3[J[234]][0x0][J[362]]),
        'status': J1QJ5(m4a3[J[234]][0x0]),
        'start_time': m4a3[J[234]][0x0][J[363]],
        'maintain_time': m4a3[J[234]][0x0][J[364]] ? m4a3[J[234]][0x0][J[364]] : '',
        'cdn': J1Q4[J[22]]
    }, this[J[365]]();
}, window[J[365]] = function () {
    if (J1Q4[J[358]] == 0x1) {
        var tgdc = J1Q4[J[24]][J[366]];
        if (tgdc === -0x1 || tgdc === 0x0) {
            window[J[248]](0xf, J[367] + J1Q4[J[24]]['id'] + J[368] + J1Q4[J[24]][J[366]]), window[J[220]](tgdc === -0x1 ? J[369] : J[370]);
            return;
        }
        J145JQ(0x0, J1Q4[J[24]][J[25]]), window[J[37]][J[38]][J[371]](J1Q4[J[358]]);
    } else window[J[37]][J[38]][J[372]](), J15Q4J();
    window[J[211]] = !![], window[J[68]](), window[J[69]]();
}, window[J[297]] = function () {
    sendApi(J1Q4[J[181]], J[373], {
        'game_pkg': J1Q4[J[23]],
        'version_name': J1Q4[J[285]]
    }, this[J[374]][J[278]](this), J1J4Q, J145);
}, window[J[374]] = function (au) {
    if (!au) {
        window[J[248]](0x5, J[375]), window[J[220]](J[375]);
        return;
    }
    if (au[J[235]] != J[324]) {
        window[J[248]](0x5, J[376] + au[J[235]]), window[J[220]](J[376] + au[J[235]]);
        return;
    }
    if (!au[J[234]] || !au[J[234]][J[93]]) {
        window[J[248]](0x5, J[377] + (au[J[234]] && au[J[234]][J[93]])), window[J[220]](J[377] + (au[J[234]] && au[J[234]][J[93]]));
        return;
    }
    au[J[234]][J[378]] && au[J[234]][J[378]][J[10]] > 0xa && (J1Q4[J[379]] = au[J[234]][J[378]], J1Q4[J[22]] = au[J[234]][J[378]]), au[J[234]][J[93]] && (J1Q4[J[21]] = au[J[234]][J[93]]), console[J[1]](J[380] + J1Q4[J[21]] + J[381] + J1Q4[J[285]]), window[J[209]] = !![], window[J[68]](), window[J[69]]();
}, window[J[382]], window[J[298]] = function () {
    sendApi(J1Q4[J[181]], J[383], { 'game_pkg': J1Q4[J[23]] }, this[J[384]][J[278]](this), J1J4Q, J145);
}, window[J[384]] = function (x7vrji) {
    if (x7vrji && x7vrji[J[235]] === J[324] && x7vrji[J[234]]) {
        window[J[382]] = x7vrji[J[234]];
        for (var yr5oq in x7vrji[J[234]]) {
            J1Q4[yr5oq] = x7vrji[J[234]][yr5oq];
        }
    } else window[J[248]](0xb, J[385]), console[J[1]](J[386] + x7vrji[J[235]]);
    window[J[210]] = !![], window[J[69]]();
}, window[J[387]] = function (ze8ht, _29f, yoj5r, td86ch, cgd8t6, k50obq, mla43, byoq0, n341ui, $2f9_) {
    cgd8t6 = String(cgd8t6);
    var f2w$s9 = mla43,
        rjvy7x = byoq0;
    J1Q4[J[176]][cgd8t6] = {
        'productid': cgd8t6,
        'productname': f2w$s9,
        'productdesc': rjvy7x,
        'roleid': ze8ht,
        'rolename': _29f,
        'rolelevel': yoj5r,
        'price': k50obq,
        'callback': n341ui
    }, sendApi(J1Q4[J[185]], J[388], {
        'game_pkg': J1Q4[J[23]],
        'server_id': J1Q4[J[24]][J[25]],
        'server_name': J1Q4[J[24]][J[360]],
        'level': yoj5r,
        'uid': J1Q4[J[20]],
        'role_id': ze8ht,
        'role_name': _29f,
        'product_id': cgd8t6,
        'product_name': f2w$s9,
        'product_desc': rjvy7x,
        'money': k50obq,
        'partner_id': J1Q4[J[189]]
    }, toPayCallBack, J1J4Q, J145);
}, window[J[389]] = function (g0dq) {
    if (g0dq && (g0dq[J[390]] === 0xc8 || g0dq[J[235]] == J[324])) {
        var t_hpe = J1Q4[J[176]][String(g0dq[J[391]])];
        if (t_hpe[J[392]]) t_hpe[J[392]](g0dq[J[391]], g0dq[J[393]], -0x1);
        gi7xjr[J[394]]({
            'cpbill': g0dq[J[393]],
            'productid': g0dq[J[391]],
            'productname': t_hpe[J[395]],
            'productdesc': t_hpe[J[396]],
            'serverid': J1Q4[J[24]][J[25]],
            'servername': J1Q4[J[24]][J[360]],
            'roleid': t_hpe[J[397]],
            'rolename': t_hpe[J[398]],
            'rolelevel': t_hpe[J[399]],
            'price': t_hpe[J[400]],
            'extension': JSON[J[28]]({ 'cp_order_id': g0dq[J[393]] })
        }, function (_wepz2, jivn7x) {
            t_hpe[J[392]] && _wepz2 == 0x0 && t_hpe[J[392]](g0dq[J[391]], g0dq[J[393]], _wepz2);
            console[J[1]](JSON[J[28]]({
                'type': J[401],
                'status': _wepz2,
                'data': g0dq,
                'role_name': t_hpe[J[398]]
            }));
            if (_wepz2 === 0x0) {} else {
                if (_wepz2 === 0x1) {} else {
                    if (_wepz2 === 0x2) {}
                }
            }
        });
    } else {
        var n3i1u4 = g0dq ? J[402] + g0dq[J[390]] + J[403] + g0dq[J[235]] + J[404] + g0dq[J[1]] : J[405];
        window[J[248]](0xd, J[406] + n3i1u4), alert(n3i1u4);
    }
}, window[J[407]] = function () {}, window[J[408]] = function (he_, tcehzp, vqyr5o, kbd60, ryvo7) {
    gi7xjr[J[409]](J1Q4[J[24]][J[25]], J1Q4[J[24]][J[360]] || J1Q4[J[24]][J[25]], he_, tcehzp, vqyr5o), sendApi(J1Q4[J[181]], J[410], {
        'game_pkg': J1Q4[J[23]],
        'server_id': J1Q4[J[24]][J[25]],
        'role_id': he_,
        'uid': J1Q4[J[20]],
        'role_name': tcehzp,
        'role_type': kbd60,
        'level': vqyr5o
    });
}, window[J[411]] = function (rxi7v, qg0db, aul34m, jo7vy, vnj7ix, w$2fs9, vxij7r, p_e29, jnx7v, ovr7yj) {
    J1Q4[J[17]] = rxi7v, J1Q4[J[18]] = qg0db, J1Q4[J[19]] = aul34m, gi7xjr[J[412]](J1Q4[J[24]][J[25]], J1Q4[J[24]][J[360]] || J1Q4[J[24]][J[25]], rxi7v, qg0db, aul34m), sendApi(J1Q4[J[181]], J[413], {
        'game_pkg': J1Q4[J[23]],
        'server_id': J1Q4[J[24]][J[25]],
        'role_id': rxi7v,
        'uid': J1Q4[J[20]],
        'role_name': qg0db,
        'role_type': jo7vy,
        'level': aul34m,
        'evolution': vnj7ix
    });
}, window[J[414]] = function (vx7ijn, pehtc, dg6t8c, yor5qv, vryj5o, gckd, f9$w2, ce8zth, nixv7j, w$s2f) {
    J1Q4[J[17]] = vx7ijn, J1Q4[J[18]] = pehtc, J1Q4[J[19]] = dg6t8c, gi7xjr[J[415]](J1Q4[J[24]][J[25]], J1Q4[J[24]][J[360]] || J1Q4[J[24]][J[25]], vx7ijn, pehtc, dg6t8c), sendApi(J1Q4[J[181]], J[413], {
        'game_pkg': J1Q4[J[23]],
        'server_id': J1Q4[J[24]][J[25]],
        'role_id': vx7ijn,
        'uid': J1Q4[J[20]],
        'role_name': pehtc,
        'role_type': yor5qv,
        'level': dg6t8c,
        'evolution': vryj5o
    });
}, window[J[416]] = function (p29_f) {}, window[J[417]] = function (t6h8d, orj7yv) {
    gi7xjr[J[418]](J[418], { 'activity_id': orj7yv }, function (n4x71) {
        t6h8d && t6h8d(n4x71);
    });
}, window[J[419]] = function () {
    gi7xjr[J[419]]();
}, window[J[420]] = function () {
    gi7xjr[J[421]] && gi7xjr[J[421]]();
}, window[J[422]] = function (a1u3, n1i4u3, k86g0, q5bko0, a34lu1, z2_hpe, jnx1i7, gq0) {
    gq0 = gq0 || J1Q4[J[24]][J[25]], sendApi(J1Q4[J[181]], J[423], {
        'phone': a1u3,
        'role_id': n1i4u3,
        'uid': J1Q4[J[20]],
        'game_pkg': J1Q4[J[23]],
        'partner_id': J1Q4[J[189]],
        'server_id': gq0
    }, jnx1i7, 0x2, null, function () {
        return !![];
    });
}, window[J[151]] = function (kd60) {
    window[J[153]] = kd60, window[J[153]] && window[J[152]] && (console[J[1]](J[154] + window[J[152]][J[155]]), window[J[153]](window[J[152]]), window[J[152]] = null);
}, window[J[424]] = function (vrjyo7, j7o, rjx7, _thep) {
    window[J[425]](J[426], {
        'game_pkg': window[J[16]][J[23]],
        'role_id': j7o,
        'server_id': rjx7
    }, _thep);
}, window[J[427]] = function (rjvyo, oy0b5q, _z2ep) {
    function _wfp9(bk6gd0) {
        var qokb5 = [],
            thc8ze = [],
            etzp_h = _z2ep || window[J[6]][J[428]];
        for (var ojrvy7 in etzp_h) {
            var j7xin1 = Number(ojrvy7);
            (!rjvyo || !rjvyo[J[10]] || rjvyo[J[121]](j7xin1) != -0x1) && (thc8ze[J[44]](etzp_h[ojrvy7]), qokb5[J[44]]([j7xin1, 0x3]));
        }
        window[J[41]](window[J[45]], J[429]) >= 0x0 ? (console[J[47]](J[430]), gi7xjr[J[431]] && gi7xjr[J[431]](thc8ze, function (j5ory) {
            console[J[47]](J[432]), console[J[47]](j5ory);
            if (j5ory && j5ory[J[65]] == J[433]) for (var c8thz6 in etzp_h) {
                if (j5ory[etzp_h[c8thz6]] == J[434]) {
                    var v7inx = Number(c8thz6);
                    for (var yrbqo5 = 0x0; yrbqo5 < qokb5[J[10]]; yrbqo5++) {
                        if (qokb5[yrbqo5][0x0] == v7inx) {
                            qokb5[yrbqo5][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[J[41]](window[J[45]], J[435]) >= 0x0 ? wx[J[436]]({
                'withSubscriptions': !![],
                'success': function (na31) {
                    var jvoyr7 = na31[J[437]][J[438]];
                    if (jvoyr7) {
                        console[J[47]](J[439]), console[J[47]](jvoyr7);
                        for (var y7vx in etzp_h) {
                            if (jvoyr7[etzp_h[y7vx]] == J[434]) {
                                var ckg68 = Number(y7vx);
                                for (var ew9_ = 0x0; ew9_ < qokb5[J[10]]; ew9_++) {
                                    if (qokb5[ew9_][0x0] == ckg68) {
                                        qokb5[ew9_][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[J[47]](qokb5), oy0b5q && oy0b5q(qokb5);
                    } else console[J[47]](J[440]), console[J[47]](na31), console[J[47]](qokb5), oy0b5q && oy0b5q(qokb5);
                },
                'fail': function () {
                    console[J[47]](J[441]), console[J[47]](qokb5), oy0b5q && oy0b5q(qokb5);
                }
            }) : (console[J[47]](J[442] + window[J[45]]), console[J[47]](qokb5), oy0b5q && oy0b5q(qokb5));
        })) : (console[J[47]](J[443] + window[J[45]]), console[J[47]](qokb5), oy0b5q && oy0b5q(qokb5)), wx[J[444]](_wfp9);
    }
    wx[J[445]](_wfp9);
}, window[J[446]] = {
    'isSuccess': ![],
    'level': J[447],
    'isCharging': ![]
}, window[J[448]] = function (ew29) {
    wx[J[139]]({
        'success': function (ryq5ob) {
            var ecpt = window[J[446]];
            ecpt[J[449]] = !![], ecpt[J[141]] = Number(ryq5ob[J[141]])[J[450]](0x0), ecpt[J[143]] = ryq5ob[J[143]], ew29 && ew29(ecpt[J[449]], ecpt[J[141]], ecpt[J[143]]);
        },
        'fail': function (w_92pf) {
            console[J[47]](J[451], w_92pf[J[65]]);
            var oq5yrb = window[J[446]];
            ew29 && ew29(oq5yrb[J[449]], oq5yrb[J[141]], oq5yrb[J[143]]);
        }
    });
}, window[J[144]] = function (zch6t8) {
    wx[J[144]]({
        'success': function (x7rjv) {
            zch6t8 && zch6t8(!![], x7rjv);
        },
        'fail': function (yvx7jr) {
            zch6t8 && zch6t8(![], yvx7jr);
        }
    });
}, window[J[148]] = function (bdkg) {
    if (bdkg) wx[J[148]](bdkg);
}, window[J[452]] = function (kdc6g8) {
    wx[J[452]](kdc6g8);
}, window[J[425]] = function (k8gd06, u1a3l, x7jvi, pt_he, kg80, d8gc6, w29_f$, cdh) {
    if (pt_he == undefined) pt_he = 0x1;
    wx[J[262]]({
        'url': k8gd06,
        'method': w29_f$ || J[453],
        'responseType': J[454],
        'data': u1a3l,
        'header': { 'content-type': cdh || J[264] },
        'success': function (yor7jv) {
            DEBUG && console[J[47]](J[455], k8gd06, info, yor7jv);
            if (yor7jv && yor7jv[J[456]] == 0xc8) {
                var j7xivn = yor7jv[J[234]];
                !d8gc6 || d8gc6(j7xivn) ? x7jvi && x7jvi(j7xivn) : window[J[457]](k8gd06, u1a3l, x7jvi, pt_he, kg80, d8gc6, yor7jv);
            } else window[J[457]](k8gd06, u1a3l, x7jvi, pt_he, kg80, d8gc6, yor7jv);
        },
        'fail': function (etcpzh) {
            DEBUG && console[J[47]](J[458], k8gd06, info, etcpzh), window[J[457]](k8gd06, u1a3l, x7jvi, pt_he, kg80, d8gc6, etcpzh);
        },
        'complete': function () {}
    });
}, window[J[457]] = function (xni13, bk0qgd, r7vojy, _wpe29, f9w2$s, u3n14, e2z_w) {
    _wpe29 - 0x1 > 0x0 ? setTimeout(function () {
        window[J[425]](xni13, bk0qgd, r7vojy, _wpe29 - 0x1, f9w2$s, u3n14);
    }, 0x3e8) : f9w2$s && f9w2$s(JSON[J[28]]({
        'url': xni13,
        'response': e2z_w
    }));
}, window[J[459]] = function (f2_p9w, ryoj5, phtcze, rv7oy, n1i4u, a314lu, jxriv) {
    !phtcze && (phtcze = {});
    var z_het = Math[J[460]](Date[J[160]]() / 0x3e8);
    phtcze[J[334]] = z_het, phtcze[J[461]] = ryoj5;
    var phcz = Object[J[462]](phtcze)[J[463]](),
        e_wz2p = '',
        _pwf9 = '';
    for (var g0d = 0x0; g0d < phcz[J[10]]; g0d++) {
        e_wz2p = e_wz2p + (g0d == 0x0 ? '' : '&') + phcz[g0d] + phtcze[phcz[g0d]], _pwf9 = _pwf9 + (g0d == 0x0 ? '' : '&') + phcz[g0d] + '=' + encodeURIComponent(phtcze[phcz[g0d]]);
    }
    e_wz2p = e_wz2p + J1Q4[J[187]];
    var thz_ep = J[464] + md5(e_wz2p);
    send(f2_p9w + '?' + _pwf9 + (_pwf9 == '' ? '' : '&') + thz_ep, null, rv7oy, n1i4u, a314lu, jxriv || function (lm3u) {
        return lm3u[J[235]] == J[324];
    }, null, J[465]);
}, window[J[466]] = function (s9f2$, n7vx) {
    var a3m4 = 0x0;
    J1Q4[J[24]] && (a3m4 = J1Q4[J[24]][J[25]]), sendApi(J1Q4[J[183]], J[467], {
        'partnerId': J1Q4[J[189]],
        'gamePkg': J1Q4[J[23]],
        'logTime': Math[J[460]](Date[J[160]]() / 0x3e8),
        'platformUid': J1Q4[J[330]],
        'type': s9f2$,
        'serverId': a3m4
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[J[468]] = function (w2z_p) {
    sendApi(J1Q4[J[181]], J[469], {
        'partner_id': J1Q4[J[189]],
        'uid': J1Q4[J[20]],
        'version': J1Q4[J[93]],
        'game_pkg': J1Q4[J[23]],
        'device': J1Q4[J[190]]
    }, J1Q4J5, J1J4Q, J145);
}, window[J[470]] = function (vr7yjx) {
    if (vr7yjx && vr7yjx[J[235]] === J[324] && vr7yjx[J[234]]) {
        vr7yjx[J[234]][J[471]]({
            'id': -0x2,
            'name': J[472]
        }), vr7yjx[J[234]][J[471]]({
            'id': -0x1,
            'name': J[473]
        }), J1Q4[J[474]] = vr7yjx[J[234]];
        if (window[J[475]]) window[J[475]][J[476]]();
    } else {
        J1Q4[J[477]] = ![];
        var ph2_ez = vr7yjx ? vr7yjx[J[235]] : '';
        window[J[248]](0x7, J[478] + ph2_ez), window[J[220]](J[479] + ph2_ez);
    }
}, window[J[480]] = function (czht8) {
    sendApi(J1Q4[J[181]], J[481], {
        'partner_id': J1Q4[J[189]],
        'uid': J1Q4[J[20]],
        'version': J1Q4[J[93]],
        'game_pkg': J1Q4[J[23]],
        'device': J1Q4[J[190]]
    }, J15QJ, J1J4Q, J145);
}, window[J[482]] = function (_2e9pw) {
    J1Q4[J[483]] = ![];
    if (_2e9pw && _2e9pw[J[235]] === J[324] && _2e9pw[J[234]]) {
        for (var alu4 = 0x0; alu4 < _2e9pw[J[234]][J[10]]; alu4++) {
            _2e9pw[J[234]][alu4][J[366]] = J1QJ5(_2e9pw[J[234]][alu4]);
        }
        J1Q4[J[192]][-0x1] = window[J[484]](_2e9pw[J[234]]), window[J[475]][J[485]](-0x1);
    } else {
        var oy7jvr = _2e9pw ? _2e9pw[J[235]] : '';
        window[J[248]](0x8, J[486] + oy7jvr), window[J[220]](J[487] + oy7jvr);
    }
}, window[J[488]] = function (ji17x) {
    sendApi(J1Q4[J[181]], J[481], {
        'partner_id': J1Q4[J[189]],
        'uid': J1Q4[J[20]],
        'version': J1Q4[J[93]],
        'game_pkg': J1Q4[J[23]],
        'device': J1Q4[J[190]]
    }, ji17x, J1J4Q, J145);
}, window[J[489]] = function (vxj7y, i3un4) {
    sendApi(J1Q4[J[181]], J[490], {
        'partner_id': J1Q4[J[189]],
        'uid': J1Q4[J[20]],
        'version': J1Q4[J[93]],
        'game_pkg': J1Q4[J[23]],
        'device': J1Q4[J[190]],
        'server_group_id': i3un4
    }, J1JQ5, J1J4Q, J145);
}, window[J[491]] = function (rj5v) {
    J1Q4[J[483]] = ![];
    if (rj5v && rj5v[J[235]] === J[324] && rj5v[J[234]] && rj5v[J[234]][J[234]]) {
        var dcg6t8 = rj5v[J[234]][J[492]],
            r7ojy = [];
        for (var u34n1i = 0x0; u34n1i < rj5v[J[234]][J[234]][J[10]]; u34n1i++) {
            rj5v[J[234]][J[234]][u34n1i][J[366]] = J1QJ5(rj5v[J[234]][J[234]][u34n1i]), (r7ojy[J[10]] == 0x0 || rj5v[J[234]][J[234]][u34n1i][J[366]] != 0x0) && (r7ojy[r7ojy[J[10]]] = rj5v[J[234]][J[234]][u34n1i]);
        }
        J1Q4[J[192]][dcg6t8] = window[J[484]](r7ojy), window[J[475]][J[485]](dcg6t8);
    } else {
        var yoq0 = rj5v ? rj5v[J[235]] : '';
        window[J[248]](0x9, J[493] + yoq0), window[J[220]](J[494] + yoq0);
    }
}, window[J[495]] = function (pez_th) {
    sendApi(J1Q4[J[181]], J[496], {
        'partner_id': J1Q4[J[189]],
        'uid': J1Q4[J[20]],
        'version': J1Q4[J[93]],
        'game_pkg': J1Q4[J[23]],
        'device': J1Q4[J[190]]
    }, reqServerRecommendCallBack, J1J4Q, J145);
}, window[J[497]] = function (wf2$) {
    J1Q4[J[483]] = ![];
    if (wf2$ && wf2$[J[235]] === J[324] && wf2$[J[234]]) {
        for (var _e2p = 0x0; _e2p < wf2$[J[234]][J[10]]; _e2p++) {
            wf2$[J[234]][_e2p][J[366]] = J1QJ5(wf2$[J[234]][_e2p]);
        }
        J1Q4[J[192]][-0x2] = window[J[484]](wf2$[J[234]]), window[J[475]][J[485]](-0x2);
    } else {
        var au43l = wf2$ ? wf2$[J[235]] : '';
        window[J[248]](0xa, J[498] + au43l), alert(J[499] + au43l);
    }
}, window[J[484]] = function (ojr7y) {
    return ojr7y;
}, window[J[500]] = function (ezt8hc, e9_w) {
    ezt8hc = ezt8hc || J1Q4[J[24]][J[25]], sendApi(J1Q4[J[181]], J[501], {
        'type': '4',
        'game_pkg': J1Q4[J[23]],
        'server_id': ezt8hc
    }, e9_w);
}, window[J[502]] = function (i1n4, nu34, vr7oyj, r5yjv) {
    vr7oyj = vr7oyj || J1Q4[J[24]][J[25]], sendApi(J1Q4[J[181]], J[503], {
        'type': i1n4,
        'game_pkg': nu34,
        'server_id': vr7oyj
    }, r5yjv);
}, window[J[504]] = function (a1u3n4, p9_2fw) {
    sendApi(J1Q4[J[181]], J[505], { 'game_pkg': a1u3n4 }, p9_2fw);
}, window[J[506]] = function (zcthpe) {
    if (zcthpe) {
        if (zcthpe[J[366]] == 0x1) {
            if (zcthpe[J[507]] == 0x1) return 0x2;else return 0x1;
        } else return zcthpe[J[366]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[J[508]] = function (_w29pe, au3) {
    J1Q4[J[509]] = {
        'step': _w29pe,
        'server_id': au3
    };
    var thcezp = this;
    J15QJ4({ 'title': J[510] }), sendApi(J1Q4[J[181]], J[511], {
        'partner_id': J1Q4[J[189]],
        'uid': J1Q4[J[20]],
        'game_pkg': J1Q4[J[23]],
        'server_id': au3,
        'platform': J1Q4[J[97]],
        'platform_uid': J1Q4[J[330]],
        'check_login_time': J1Q4[J[333]],
        'check_login_sign': J1Q4[J[331]],
        'version_name': J1Q4[J[285]]
    }, J145QJ, J1J4Q, J145, function (bo05k) {
        return bo05k[J[235]] == J[324] || bo05k[J[1]] == J[512] || bo05k[J[1]] == J[513];
    });
}, window[J[514]] = function (yoj7r) {
    var c68dgk = this;
    if (yoj7r && yoj7r[J[235]] === J[324] && yoj7r[J[234]]) {
        var pwf29 = J1Q4[J[24]];
        pwf29[J[515]] = J1Q4[J[193]], pwf29[J[332]] = String(yoj7r[J[234]][J[516]]), pwf29[J[199]] = parseInt(yoj7r[J[234]][J[334]]);
        if (yoj7r[J[234]][J[517]]) pwf29[J[517]] = parseInt(yoj7r[J[234]][J[517]]);else pwf29[J[517]] = parseInt(yoj7r[J[234]][J[25]]);
        pwf29[J[518]] = 0x0, pwf29[J[22]] = J1Q4[J[379]], pwf29[J[519]] = yoj7r[J[234]][J[520]], pwf29[J[521]] = yoj7r[J[234]][J[521]];
        if (yoj7r[J[234]][J[522]]) pwf29[J[522]] = parseInt(yoj7r[J[234]][J[522]]);
        console[J[47]](J[523] + JSON[J[28]](pwf29[J[521]])), J1Q4[J[358]] == 0x1 && pwf29[J[521]] && pwf29[J[521]][J[524]] == 0x1 && (J1Q4[J[525]] = 0x1, window[J[37]][J[38]][J[526]]()), J14J5Q();
    } else {
        if (J1Q4[J[509]][J[527]] >= 0x3) {
            var yb50q = yoj7r ? yoj7r[J[235]] : '';
            window[J[248]](0xc, J[528] + yb50q), J145(JSON[J[28]](yoj7r)), window[J[220]](J[529] + yb50q);
        } else sendApi(J1Q4[J[181]], J[307], {
            'platform': J1Q4[J[179]],
            'partner_id': J1Q4[J[189]],
            'token': J1Q4[J[304]],
            'game_pkg': J1Q4[J[23]],
            'deviceId': J1Q4[J[190]],
            'scene': J[308] + J1Q4[J[191]]
        }, function (lu314) {
            if (!lu314 || lu314[J[235]] != J[324]) {
                window[J[220]](J[326] + lu314 && lu314[J[235]]);
                return;
            }
            J1Q4[J[331]] = String(lu314[J[332]]), J1Q4[J[333]] = String(lu314[J[334]]), setTimeout(function () {
                J145JQ(J1Q4[J[509]][J[527]] + 0x1, J1Q4[J[509]][J[25]]);
            }, 0x5dc);
        }, J1J4Q, J145, function (o5yvrq) {
            return o5yvrq[J[235]] == J[324] || o5yvrq[J[235]] == J[530];
        });
    }
}, window[J[531]] = function () {
    ServerLoading[J[38]][J[371]](J1Q4[J[358]]), window[J[206]] = !![], window[J[69]]();
}, window[J[68]] = function () {
    if (window[J[67]] && window[J[76]] && window[J[207]] && window[J[208]] && window[J[209]] && window[J[211]]) {
        if (!window[J[532]][J[38]]) {
            console[J[47]](J[533] + window[J[532]][J[38]]);
            var jir7vx = wx[J[534]](),
                cteh = jir7vx[J[155]] ? jir7vx[J[155]] : 0x0,
                ix7nv = {
                'cdn': window[J[16]][J[22]],
                'spareCdn': window[J[16]][J[291]],
                'newRegister': window[J[16]][J[358]],
                'wxPC': window[J[16]][J[126]],
                'wxIOS': window[J[16]][J[120]],
                'wxAndroid': window[J[16]][J[123]],
                'wxParam': {
                    'limitLoad': window[J[16]][J[130]],
                    'benchmarkLevel': window[J[16]][J[131]],
                    'wxFrom': window[J[6]][J[296]] == J[535] ? 0x1 : 0x0,
                    'wxSDKVersion': window[J[45]]
                },
                'configType': window[J[16]][J[200]],
                'exposeType': window[J[16]][J[202]],
                'scene': cteh
            };
            new window[J[532]](ix7nv, window[J[16]][J[21]], window[J[173]]);
        }
    }
}, window[J[69]] = function () {
    if (window[J[67]] && window[J[76]] && window[J[207]] && window[J[208]] && window[J[209]] && window[J[211]] && window[J[206]] && window[J[210]]) {
        J15Q4J();
        if (!J14JQ) {
            J14JQ = !![];
            if (!window[J[532]][J[38]]) window[J[68]]();
            var kq0b5g = 0x0,
                d68k0 = wx[J[536]]();
            d68k0 && (window[J[16]][J[125]] && (kq0b5g = d68k0[J[115]]), console[J[1]](J[537] + d68k0[J[115]] + J[538] + d68k0[J[116]] + J[539] + d68k0[J[117]] + J[540] + d68k0[J[118]] + J[541] + d68k0[J[542]] + J[543] + d68k0[J[544]]));
            var c68dg = {};
            for (const _p29 in J1Q4[J[24]]) {
                c68dg[_p29] = J1Q4[J[24]][_p29];
            }
            var h6tdc = {
                'channel': window[J[16]][J[194]],
                'account': window[J[16]][J[20]],
                'userId': window[J[16]][J[329]],
                'cdn': window[J[16]][J[22]],
                'data': window[J[16]][J[234]],
                'package': window[J[16]][J[177]],
                'newRegister': window[J[16]][J[358]],
                'pkgName': window[J[16]][J[23]],
                'partnerId': window[J[16]][J[189]],
                'platform_uid': window[J[16]][J[330]],
                'deviceId': window[J[16]][J[190]],
                'selectedServer': c68dg,
                'configType': window[J[16]][J[200]],
                'exposeType': window[J[16]][J[202]],
                'debugUsers': window[J[16]][J[197]],
                'wxMenuTop': kq0b5g,
                'wxShield': window[J[16]][J[204]],
                'wx_channel': window[J[16]][J[305]]
            };
            if (window[J[382]]) for (var oy5rbq in window[J[382]]) {
                h6tdc[oy5rbq] = window[J[382]][oy5rbq];
            }
            window[J[532]][J[38]][J[545]](h6tdc);
            if (J1Q4[J[24]] && J1Q4[J[24]][J[25]]) localStorage[J[546]](J[337] + J1Q4[J[23]] + J1Q4[J[20]], J1Q4[J[24]][J[25]]);
        }
    } else console[J[1]](J[547] + window[J[67]] + J[548] + window[J[76]] + J[549] + window[J[207]] + J[550] + window[J[208]] + J[551] + window[J[209]] + J[552] + window[J[211]] + J[553] + window[J[206]] + J[554] + window[J[210]]);
};