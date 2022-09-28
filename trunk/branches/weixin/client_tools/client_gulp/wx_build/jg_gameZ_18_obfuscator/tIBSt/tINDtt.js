var v = wx.$d;
import zylktru from '../ttkttt/t6ktgt.js';
window[v[149]] = { 'wxVersion': window[v[6]][v[7]] }, window[v[150]] = ![], window['D$$5'] = 0x1, window[v[151]] = 0x1, window['D$45$'] = !![], window[v[152]] = !![], window['D$HQ45$'] = '', window[v[153]] = ![], window['D$5$'] = {
    'base_cdn': v[154],
    'cdn': v[154]
}, D$5$[v[155]] = {}, D$5$[v[156]] = '0', D$5$[v[80]] = window[v[149]][v[157]], D$5$[v[115]] = '', D$5$['os'] = '1', D$5$[v[158]] = v[159], D$5$[v[160]] = v[161], D$5$[v[162]] = v[163], D$5$[v[164]] = v[165], D$5$[v[166]] = v[167], D$5$[v[168]] = '1', D$5$[v[22]] = '', D$5$[v[169]] = '', D$5$[v[170]] = 0x0, D$5$[v[171]] = {}, D$5$[v[172]] = parseInt(D$5$[v[168]]), D$5$[v[173]] = D$5$[v[168]], D$5$[v[23]] = {}, D$5$['D$Q5'] = v[174], D$5$[v[175]] = ![], D$5$[v[176]] = v[177], D$5$[v[178]] = Date[v[142]](), D$5$[v[179]] = v[180], D$5$[v[181]] = '_a', D$5$[v[182]] = 0x2, D$5$[v[20]] = 0x7c1, D$5$[v[157]] = window[v[149]][v[157]], D$5$[v[183]] = ![], D$5$[v[107]] = ![], D$5$[v[110]] = ![], D$5$[v[113]] = ![], window['D$4$5'] = 0x5, window['D$4$'] = ![], window['D$$4'] = ![], window['D$54$'] = ![], window[v[184]] = ![], window[v[185]] = ![], window['D$5$4'] = ![], window['D$45'] = ![], window['D$54'] = ![], window['D$$45'] = ![], window[v[186]] = null, window[v[187]] = function (z7_f15) {
    console[v[42]](v[187], z7_f15), wx[v[188]]({}), wx[v[49]]({
        'title': v[72],
        'content': z7_f15,
        'success'($9_xj7) {
            if ($9_xj7[v[189]]) console[v[42]](v[190]);else $9_xj7[v[191]] && console[v[42]](v[192]);
        }
    });
}, window['D$Q45$'] = function (bengi) {
    console[v[42]](v[193], bengi), D$Q5$4(), wx[v[49]]({
        'title': v[72],
        'content': bengi,
        'confirmText': v[194],
        'cancelText': v[195],
        'success'(agbp0n) {
            if (agbp0n[v[189]]) window['D$5Q']();else agbp0n[v[191]] && (console[v[42]](v[196]), wx[v[197]]({}));
        }
    });
}, window[v[198]] = function (d24c83) {
    console[v[42]](v[198], d24c83), wx[v[49]]({
        'title': v[72],
        'content': d24c83,
        'confirmText': v[199],
        'showCancel': ![],
        'complete'(h42) {
            console[v[42]](v[196]), wx[v[197]]({});
        }
    });
}, window['D$Q4$5'] = ![], window['D$Q54$'] = function (y1trzk) {
    window['D$Q4$5'] = !![], wx[v[200]](y1trzk);
}, window['D$Q5$4'] = function () {
    window['D$Q4$5'] && (window['D$Q4$5'] = ![], wx[v[188]]({}));
}, window['D$Q$45'] = function (n0beag) {
    window[v[35]][v[36]]['D$Q$45'](n0beag);
}, window[v[201]] = function (m60pn, ltruky) {
    zylktru[v[201]](m60pn, function (jxmp6v) {
        jxmp6v && jxmp6v[v[202]] ? jxmp6v[v[202]][v[203]] == 0x1 ? ltruky(!![]) : (ltruky(![]), console[v[1]](v[204] + jxmp6v[v[202]][v[205]])) : console[v[42]](v[201], jxmp6v);
    });
}, window['D$Q$54'] = function (rfzt) {
    console[v[42]](v[206], rfzt);
}, window['D$Q5$'] = function (uytkr) {}, window['D$Q$5'] = function (o2cq8, g0abn, d2h) {}, window['D$Q$'] = function (y51zt) {
    console[v[42]](v[207], y51zt), window[v[35]][v[36]][v[208]](), window[v[35]][v[36]][v[209]](), window[v[35]][v[36]][v[210]]();
}, window['D$$Q'] = function (jpm6) {
    window[v[211]](0xe, v[212] + jpm6), window['D$Q45$'](v[213]);
    var mpjxv = {
        'id': window['D$5$'][v[16]],
        'role': window['D$5$'][v[17]],
        'level': window['D$5$'][v[18]],
        'account': window['D$5$'][v[19]],
        'version': window['D$5$'][v[20]],
        'cdn': window['D$5$'][v[21]],
        'pkgName': window['D$5$'][v[22]],
        'gamever': window[v[6]][v[7]],
        'serverid': window['D$5$'][v[23]] ? window['D$5$'][v[23]][v[24]] : 0x0,
        'systemInfo': window[v[25]],
        'error': v[214],
        'stack': jpm6 ? jpm6 : v[213]
    },
        ztrku = JSON[v[27]](mpjxv);
    console[v[28]](v[215] + ztrku), window['D$Q5'](ztrku);
}, window[v[211]] = function (v6jx$9, fz5rt) {
    sendApi(D$5$[v[162]], v[216], {
        'game_pkg': D$5$[v[22]],
        'partner_id': D$5$[v[168]],
        'server_id': D$5$[v[23]] && D$5$[v[23]][v[24]] > 0x0 ? D$5$[v[23]][v[24]] : 0x0,
        'uid': D$5$[v[19]] > 0x0 ? D$5$[v[19]] : 0x0,
        'type': v6jx$9,
        'info': fz5rt
    });
}, window['D$5Q$'] = function (j9_x$) {
    var rftz51 = JSON[v[217]](j9_x$);
    rftz51[v[218]] = window[v[6]][v[7]], rftz51[v[219]] = window['D$5$'][v[23]] ? window['D$5$'][v[23]][v[24]] : 0x0, rftz51[v[25]] = window[v[25]];
    var klhu34 = JSON[v[27]](rftz51);
    console[v[28]](v[220] + klhu34), window['D$Q5'](klhu34);
}, window['D$5$Q'] = function (ulkyht, jv$6x) {
    var $59f7_ = {
        'id': window['D$5$'][v[16]],
        'role': window['D$5$'][v[17]],
        'level': window['D$5$'][v[18]],
        'account': window['D$5$'][v[19]],
        'version': window['D$5$'][v[20]],
        'cdn': window['D$5$'][v[21]],
        'pkgName': window['D$5$'][v[22]],
        'gamever': window[v[6]][v[7]],
        'serverid': window['D$5$'][v[23]] ? window['D$5$'][v[23]][v[24]] : 0x0,
        'systemInfo': window[v[25]],
        'error': ulkyht,
        'stack': jv$6x
    },
        v0mp6 = JSON[v[27]]($59f7_);
    console[v[143]](v[221] + v0mp6), window['D$Q5'](v0mp6);
}, window['D$Q5'] = function (oc2wq8) {
    if (window['D$5$'][v[116]] == v[222]) return;
    var hl3yu = D$5$['D$Q5'] + v[223] + D$5$[v[19]];
    wx[v[224]]({
        'url': hl3yu,
        'method': v[225],
        'data': oc2wq8,
        'header': {
            'content-type': v[226],
            'cache-control': v[227]
        },
        'success': function (ytulr) {
            DEBUG && console[v[42]](v[228], hl3yu, oc2wq8, ytulr);
        },
        'fail': function (rkzyu) {
            DEBUG && console[v[42]](v[228], hl3yu, oc2wq8, rkzyu);
        },
        'complete': function () {}
    });
}, window[v[229]] = function () {
    function f_71z5() {
        return ((0x1 + Math[v[230]]()) * 0x10000 | 0x0)[v[231]](0x10)[v[232]](0x1);
    }
    return f_71z5() + f_71z5() + '-' + f_71z5() + '-' + f_71z5() + '-' + f_71z5() + '+' + f_71z5() + f_71z5() + f_71z5();
}, window['D$5Q'] = function () {
    console[v[42]](v[233]);
    var v9$j7x = zylktru[v[234]]();
    D$5$[v[173]] = v9$j7x[v[235]], D$5$[v[172]] = v9$j7x[v[235]], D$5$[v[168]] = v9$j7x[v[235]], D$5$[v[22]] = v9$j7x[v[236]];
    var f5$9_7 = { 'game_ver': D$5$[v[80]] };
    D$5$[v[169]] = this[v[229]](), D$Q54$({ 'title': v[237] }), zylktru[v[238]](f5$9_7, this['D$$Q5'][v[239]](this));
}, window['D$$Q5'] = function ($7x_9f) {
    var nbpam0 = $7x_9f[v[240]];
    sdkInitRes = $7x_9f, console[v[42]](v[241] + nbpam0 + v[242] + (nbpam0 == 0x1) + v[243] + $7x_9f[v[7]] + v[244] + window[v[149]][v[157]]);
    if (!$7x_9f[v[7]] || window['D$H4$Q5'](window[v[149]][v[157]], $7x_9f[v[7]]) < 0x0) console[v[42]](v[245]), D$5$[v[160]] = v[246], D$5$[v[162]] = v[247], D$5$[v[164]] = v[248], D$5$[v[21]] = v[249], D$5$[v[250]] = v[251], D$5$[v[252]] = 'sj', D$5$[v[183]] = ![];else window['D$H4$Q5'](window[v[149]][v[157]], $7x_9f[v[7]]) == 0x0 ? (console[v[42]](v[253]), D$5$[v[160]] = v[161], D$5$[v[162]] = v[163], D$5$[v[164]] = v[165], D$5$[v[21]] = v[254], D$5$[v[250]] = v[251], D$5$[v[252]] = v[255], D$5$[v[183]] = !![]) : (console[v[42]](v[256]), D$5$[v[160]] = v[161], D$5$[v[162]] = v[163], D$5$[v[164]] = v[165], D$5$[v[21]] = v[257], D$5$[v[250]] = v[251], D$5$[v[252]] = v[255], D$5$[v[183]] = ![]);
    D$5$[v[170]] = config[v[258]] ? config[v[258]] : 0x0, this['D$45Q$'](), this['D$45$Q'](), window[v[259]] = 0x5, D$Q54$({ 'title': v[260] }), zylktru[v[261]](this['D$$5Q'][v[239]](this));
}, window[v[259]] = 0x5, window['D$$5Q'] = function (turlky, $jx7v9) {
    if (turlky == 0x0 && $jx7v9 && $jx7v9[v[262]]) {
        D$5$[v[263]] = $jx7v9[v[262]], D$5$[v[264]] = $jx7v9[v[264]];
        var vmap6j = this;
        D$Q54$({ 'title': v[265] }), sendApi(D$5$[v[160]], v[266], {
            'platform': D$5$[v[158]],
            'partner_id': D$5$[v[168]],
            'token': $jx7v9[v[262]],
            'game_pkg': D$5$[v[22]],
            'deviceId': D$5$[v[169]],
            'scene': v[267] + D$5$[v[170]]
        }, this['D$4Q5$'][v[239]](this), D$4$5, D$$Q);
    } else $jx7v9 && $jx7v9[v[59]] && window[v[259]] > 0x0 && ($jx7v9[v[59]][v[108]](v[268]) != -0x1 || $jx7v9[v[59]][v[108]](v[269]) != -0x1 || $jx7v9[v[59]][v[108]](v[270]) != -0x1 || $jx7v9[v[59]][v[108]](v[271]) != -0x1 || $jx7v9[v[59]][v[108]](v[272]) != -0x1 || $jx7v9[v[59]][v[108]](v[273]) != -0x1) ? (window[v[259]]--, zylktru[v[261]](this['D$$5Q'][v[239]](this))) : (window[v[211]](0x1, v[274] + turlky + v[275] + ($jx7v9 ? $jx7v9[v[59]] : '')), window['D$5$Q'](v[276], JSON[v[27]]({
        'status': turlky,
        'data': $jx7v9
    })), window['D$Q45$'](v[277] + ($jx7v9 && $jx7v9[v[59]] ? '，' + $jx7v9[v[59]] : '')));
}, window['D$4Q5$'] = function (tf5r1z) {
    if (!tf5r1z) {
        window[v[211]](0x2, v[278]), window['D$5$Q'](v[279], v[280]), window['D$Q45$'](v[281]);
        return;
    }
    if (tf5r1z[v[203]] != v[282]) {
        window[v[211]](0x2, v[283] + tf5r1z[v[203]]), window['D$5$Q'](v[279], JSON[v[27]](tf5r1z)), window['D$Q45$'](v[284] + tf5r1z[v[203]]);
        return;
    }
    if (tf5r1z[v[285]] == 0x1) {
        window['D$Q45$'](v[286]);
        return;
    }
    D$5$[v[287]] = String(tf5r1z[v[19]]), D$5$[v[19]] = String(tf5r1z[v[19]]), D$5$[v[84]] = String(tf5r1z[v[84]]), D$5$[v[173]] = String(tf5r1z[v[84]]), D$5$[v[288]] = String(tf5r1z[v[288]]), D$5$[v[289]] = String(tf5r1z[v[290]]), D$5$[v[291]] = String(tf5r1z[v[292]]), D$5$[v[290]] = '';
    var xv9 = this;
    D$Q54$({ 'title': v[293] });
    var lykr = localStorage[v[294]](v[295] + D$5$[v[22]] + D$5$[v[19]]);
    if (lykr && lykr != '') {
        var rkyut = Number(lykr);
        xv9[v[296]](rkyut);
    } else xv9[v[297]]();
}, window[v[297]] = function () {
    var ma6jpv = this;
    sendApi(D$5$[v[160]], v[298], {
        'partner_id': D$5$[v[168]],
        'uid': D$5$[v[19]],
        'version': D$5$[v[80]],
        'game_pkg': D$5$[v[22]],
        'device': D$5$[v[169]]
    }, ma6jpv['D$4Q$5'][v[239]](ma6jpv), D$4$5, D$$Q);
}, window['D$4Q$5'] = function ($x7_9) {
    if (!$x7_9) {
        window[v[211]](0x3, v[299]), window['D$Q45$'](v[299]);
        return;
    }
    if ($x7_9[v[203]] != v[282]) {
        window[v[211]](0x3, v[300] + $x7_9[v[203]]), window['D$Q45$'](v[300] + $x7_9[v[203]]);
        return;
    }
    if (!$x7_9[v[202]] || $x7_9[v[202]][v[10]] == 0x0) {
        window[v[211]](0x3, v[301]), window['D$Q45$'](v[302]);
        return;
    }
    this[v[303]]($x7_9);
}, window[v[296]] = function (tykzr) {
    var mvapj = this;
    sendApi(D$5$[v[160]], v[304], {
        'server_id': tykzr,
        'time': Date[v[142]]() / 0x3e8
    }, mvapj[v[305]][v[239]](mvapj), D$4$5, D$$Q);
}, window[v[305]] = function (f9$5_) {
    if (!f9$5_) {
        window[v[211]](0x4, v[306]), this[v[297]]();
        return;
    }
    if (f9$5_[v[203]] != v[282]) {
        window[v[211]](0x4, v[307] + f9$5_[v[203]]), this[v[297]]();
        return;
    }
    if (!f9$5_[v[202]] || f9$5_[v[202]][v[10]] == 0x0) {
        window[v[211]](0x4, v[308]), this[v[297]]();
        return;
    }
    this[v[303]](f9$5_);
}, window[v[303]] = function (g0nbi) {
    D$5$[v[309]] = g0nbi[v[310]] != undefined ? g0nbi[v[310]] : 0x0, D$5$[v[23]] = {
        'server_id': String(g0nbi[v[202]][0x0][v[24]]),
        'server_name': String(g0nbi[v[202]][0x0][v[311]]),
        'entry_ip': g0nbi[v[202]][0x0][v[312]],
        'entry_port': parseInt(g0nbi[v[202]][0x0][v[313]]),
        'status': D$54Q(g0nbi[v[202]][0x0]),
        'start_time': g0nbi[v[202]][0x0][v[314]],
        'maintain_time': g0nbi[v[202]][0x0][v[315]] ? g0nbi[v[202]][0x0][v[315]] : '',
        'is_recommend': g0nbi[v[202]][0x0][v[316]],
        'cdn': D$5$[v[21]]
    }, this['D$$54Q'](), window[v[35]] && window[v[35]][v[36]][v[317]] && window[v[35]][v[36]][v[317]](sdkInitRes[v[318]], sdkInitRes[v[319]], sdkInitRes[v[320]], sdkInitRes[v[321]], sdkInitRes[v[322]]);
}, window['D$$54Q'] = function () {
    var xjv$79 = this;
    if (D$5$[v[309]] == 0x1) {
        var d2834 = D$5$[v[23]][v[323]];
        if (d2834 === -0x1 || d2834 === 0x0) {
            window[v[211]](0xf, v[324] + D$5$[v[23]]['id'] + v[325] + D$5$[v[23]][v[323]]), window['D$Q45$'](d2834 === -0x1 ? v[326] : v[327]);
            return;
        }
        D$$Q45(0x0, D$5$[v[23]][v[24]]), window[v[35]][v[36]][v[328]](D$5$[v[309]]);
    } else window[v[35]][v[36]][v[329]](), D$Q5$4();
    window['D$54'] = !![], window['D$$45Q'](), window['D$$5Q4']();
}, window['D$45Q$'] = function () {
    sendApi(D$5$[v[160]], v[330], {
        'game_pkg': D$5$[v[22]],
        'version_name': D$5$[v[252]]
    }, this[v[331]][v[239]](this), D$4$5, D$$Q);
}, window[v[331]] = function (gin0b) {
    if (!gin0b) {
        window[v[211]](0x5, v[332]), window['D$Q45$'](v[332]);
        return;
    }
    if (gin0b[v[203]] != v[282]) {
        window[v[211]](0x5, v[333] + gin0b[v[203]]), window['D$Q45$'](v[333] + gin0b[v[203]]);
        return;
    }
    if (!gin0b[v[202]] || !gin0b[v[202]][v[80]]) {
        window[v[211]](0x5, v[334] + (gin0b[v[202]] && gin0b[v[202]][v[80]])), window['D$Q45$'](v[334] + (gin0b[v[202]] && gin0b[v[202]][v[80]]));
        return;
    }
    gin0b[v[202]][v[335]] && gin0b[v[202]][v[335]][v[10]] > 0xa && (D$5$[v[336]] = gin0b[v[202]][v[335]], D$5$[v[21]] = gin0b[v[202]][v[335]]), gin0b[v[202]][v[80]] && (D$5$[v[20]] = gin0b[v[202]][v[80]]), console[v[1]](v[337] + D$5$[v[20]] + v[338] + D$5$[v[252]]), window['D$5$4'] = !![], window['D$$45Q'](), window['D$$5Q4']();
}, window[v[339]], window['D$45$Q'] = function () {
    sendApi(D$5$[v[160]], v[340], { 'game_pkg': D$5$[v[22]] }, this['D$4$Q5'][v[239]](this), D$4$5, D$$Q);
}, window['D$4$Q5'] = function (tzr51) {
    if (tzr51 && tzr51[v[203]] === v[282] && tzr51[v[202]]) {
        window[v[339]] = tzr51[v[202]];
        for (var vx6pm in tzr51[v[202]]) {
            D$5$[vx6pm] = tzr51[v[202]][vx6pm];
        }
        window[v[341]]();
    } else window[v[211]](0xb, v[342]), console[v[1]](v[343] + tzr51[v[203]]);
    window['D$45'] = !![], window['D$$5Q4']();
}, window[v[341]] = function () {
    var avm6jp = D$5$[v[183]] || D$5$[v[344]] && D$5$[v[344]] > 0x0;
    if (avm6jp) {
        var t15rz = D$5$[v[345]],
            bien0 = t15rz && t15rz[v[10]] == 0x9;
        bien0 && (window[v[346]] = t15rz);
        var f915_ = D$5$[v[347]],
            c34d2 = f915_ && f915_[v[37]]('#')[v[10]] == 0x4;
        c34d2 && (window[v[348]] = f915_);
    }
}, window[v[349]] = function (ltkhuy, n0bapm, u3lh4k, pganb0, wocq2, lyktur, hkl3yu, c82qwo, p6vamj, e0ginb) {
    wocq2 = String(wocq2);
    var q82c4 = hkl3yu,
        uhky3l = c82qwo;
    D$5$[v[155]][wocq2] = {
        'productid': wocq2,
        'productname': q82c4,
        'productdesc': uhky3l,
        'roleid': ltkhuy,
        'rolename': n0bapm,
        'rolelevel': u3lh4k,
        'price': lyktur,
        'callback': p6vamj
    }, sendApi(D$5$[v[164]], v[350], {
        'game_pkg': D$5$[v[22]],
        'server_id': D$5$[v[23]][v[24]],
        'server_name': D$5$[v[23]][v[311]],
        'level': u3lh4k,
        'uid': D$5$[v[19]],
        'role_id': ltkhuy,
        'role_name': n0bapm,
        'product_id': wocq2,
        'product_name': q82c4,
        'product_desc': uhky3l,
        'money': lyktur,
        'partner_id': D$5$[v[168]]
    }, toPayCallBack, D$4$5, D$$Q);
}, window[v[351]] = function ($x9j_7) {
    if ($x9j_7 && ($x9j_7[v[352]] === 0xc8 || $x9j_7[v[203]] == v[282])) {
        var v0a = D$5$[v[155]][String($x9j_7[v[353]])];
        if (v0a[v[354]]) v0a[v[354]]($x9j_7[v[353]], $x9j_7[v[355]], -0x1);
        zylktru[v[356]]({
            'cpbill': $x9j_7[v[355]],
            'productid': $x9j_7[v[353]],
            'productname': v0a[v[357]],
            'productdesc': v0a[v[358]],
            'serverid': D$5$[v[23]][v[24]],
            'servername': D$5$[v[23]][v[311]],
            'roleid': v0a[v[359]],
            'rolename': v0a[v[360]],
            'rolelevel': v0a[v[361]],
            'price': v0a[v[362]],
            'extension': JSON[v[27]]({ 'cp_order_id': $x9j_7[v[355]] })
        }, function (hltyu, rtlk) {
            v0a[v[354]] && hltyu == 0x0 && v0a[v[354]]($x9j_7[v[353]], $x9j_7[v[355]], hltyu);
            console[v[1]](JSON[v[27]]({
                'type': v[363],
                'status': hltyu,
                'data': $x9j_7,
                'role_name': v0a[v[360]]
            }));
            if (hltyu === 0x0) {} else {
                if (hltyu === 0x1) {} else {
                    if (hltyu === 0x2) {}
                }
            }
        });
    } else {
        var v$xm6 = $x9j_7 ? v[364] + $x9j_7[v[352]] + v[365] + $x9j_7[v[203]] + v[366] + $x9j_7[v[1]] : v[367];
        window[v[211]](0xd, v[368] + v$xm6), alert(v$xm6);
    }
}, window['D$4$5Q'] = function () {}, window['D$Q4$'] = function (hyl3k, kz1tyr, jpmv6a, ja6vmp, ienbg) {
    zylktru[v[369]](D$5$[v[23]][v[24]], D$5$[v[23]][v[311]] || D$5$[v[23]][v[24]], hyl3k, kz1tyr, jpmv6a), sendApi(D$5$[v[160]], v[370], {
        'game_pkg': D$5$[v[22]],
        'server_id': D$5$[v[23]][v[24]],
        'role_id': hyl3k,
        'uid': D$5$[v[19]],
        'role_name': kz1tyr,
        'role_type': ja6vmp,
        'level': jpmv6a
    });
}, window['D$Q$4'] = function (cq, c2w8o, cd3842, cwo8q, qd248, yrtk1z, v7x$, $975_, d238h4, xjp6vm) {
    D$5$[v[16]] = cq, D$5$[v[17]] = c2w8o, D$5$[v[18]] = cd3842, zylktru[v[371]](D$5$[v[23]][v[24]], D$5$[v[23]][v[311]] || D$5$[v[23]][v[24]], cq, c2w8o, cd3842), sendApi(D$5$[v[160]], v[372], {
        'game_pkg': D$5$[v[22]],
        'server_id': D$5$[v[23]][v[24]],
        'role_id': cq,
        'uid': D$5$[v[19]],
        'role_name': c2w8o,
        'role_type': cwo8q,
        'level': cd3842,
        'evolution': qd248
    });
}, window['D$4Q$'] = function (y5zt1, mpv06a, q2od8, z51frt, dh4382, d3lh8, zy1, f$_x79, cq4, d843hl) {
    D$5$[v[16]] = y5zt1, D$5$[v[17]] = mpv06a, D$5$[v[18]] = q2od8, zylktru[v[373]](D$5$[v[23]][v[24]], D$5$[v[23]][v[311]] || D$5$[v[23]][v[24]], y5zt1, mpv06a, q2od8), sendApi(D$5$[v[160]], v[372], {
        'game_pkg': D$5$[v[22]],
        'server_id': D$5$[v[23]][v[24]],
        'role_id': y5zt1,
        'uid': D$5$[v[19]],
        'role_name': mpv06a,
        'role_type': z51frt,
        'level': q2od8,
        'evolution': dh4382
    });
}, window['D$4$Q'] = function (manp6) {}, window['D$Q4'] = function (tr5y1, rtkul) {
    zylktru[v[374]](v[374], { 'activity_id': rtkul }, function (na0p6m) {
        tr5y1 && tr5y1(na0p6m);
    });
}, window[v[375]] = function () {
    zylktru[v[375]]();
}, window[v[376]] = function () {
    zylktru[v[377]]();
}, window[v[378]] = function (ktuyrl, jvpmx, d8lh3, d28c3, z_f75, ba0e, vpmj6a, hl) {
    hl = hl || D$5$[v[23]][v[24]], sendApi(D$5$[v[160]], v[379], {
        'phone': ktuyrl,
        'role_id': jvpmx,
        'uid': D$5$[v[19]],
        'game_pkg': D$5$[v[22]],
        'partner_id': D$5$[v[168]],
        'server_id': hl
    }, vpmj6a, 0x2, null, function () {
        return !![];
    });
}, window[v[136]] = function (cow8q2) {
    window['D$$Q4'] = cow8q2, window['D$$Q4'] && window['D$4Q'] && (console[v[1]](v[137] + window['D$4Q'][v[138]]), window['D$$Q4'](window['D$4Q']), window['D$4Q'] = null);
}, window['D$$4Q'] = function (lhtkyu, hdl, uhdl34, c43d2) {
    window[v[380]](v[381], {
        'game_pkg': window['D$5$'][v[22]],
        'role_id': hdl,
        'server_id': uhdl34
    }, c43d2);
}, window['D$5Q4$'] = function (ul3k4h, _j97x, fzr_15) {
    function nabg0e(pba0g) {
        var zr1f5 = [],
            p6m0na = [],
            p0anm = fzr_15 || window[v[6]][v[382]];
        for (var hldu3 in p0anm) {
            var vm6paj = Number(hldu3);
            (!ul3k4h || !ul3k4h[v[10]] || ul3k4h[v[108]](vm6paj) != -0x1) && (p6m0na[v[39]](p0anm[hldu3]), zr1f5[v[39]]([vm6paj, 0x3]));
        }
        window['D$H4$Q5'](window[v[40]], v[383]) >= 0x0 ? (console[v[42]](v[384]), zylktru[v[385]] && zylktru[v[385]](p6m0na, function (xjvm6p) {
            console[v[42]](v[386]), console[v[42]](xjvm6p);
            if (xjvm6p && xjvm6p[v[59]] == v[387]) for (var zfr5 in p0anm) {
                if (xjvm6p[p0anm[zfr5]] == v[388]) {
                    var _5$f97 = Number(zfr5);
                    for (var f75_$9 = 0x0; f75_$9 < zr1f5[v[10]]; f75_$9++) {
                        if (zr1f5[f75_$9][0x0] == _5$f97) {
                            zr1f5[f75_$9][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['D$H4$Q5'](window[v[40]], v[389]) >= 0x0 ? wx[v[390]]({
                'withSubscriptions': !![],
                'success': function (mpvjx) {
                    var f1597_ = mpvjx[v[391]][v[392]];
                    if (f1597_) {
                        console[v[42]](v[393]), console[v[42]](f1597_);
                        for (var _z15r in p0anm) {
                            if (f1597_[p0anm[_z15r]] == v[388]) {
                                var cwo28q = Number(_z15r);
                                for (var yltuhk = 0x0; yltuhk < zr1f5[v[10]]; yltuhk++) {
                                    if (zr1f5[yltuhk][0x0] == cwo28q) {
                                        zr1f5[yltuhk][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[v[42]](zr1f5), _j97x && _j97x(zr1f5);
                    } else console[v[42]](v[394]), console[v[42]](mpvjx), console[v[42]](zr1f5), _j97x && _j97x(zr1f5);
                },
                'fail': function () {
                    console[v[42]](v[395]), console[v[42]](zr1f5), _j97x && _j97x(zr1f5);
                }
            }) : (console[v[42]](v[396] + window[v[40]]), console[v[42]](zr1f5), _j97x && _j97x(zr1f5));
        })) : (console[v[42]](v[397] + window[v[40]]), console[v[42]](zr1f5), _j97x && _j97x(zr1f5)), wx[v[398]](nabg0e);
    }
    wx[v[399]](nabg0e);
}, window['D$5Q$4'] = {
    'isSuccess': ![],
    'level': v[400],
    'isCharging': ![]
}, window['D$54Q$'] = function ($9_7) {
    wx[v[124]]({
        'success': function (ng0be) {
            var d4h3 = window['D$5Q$4'];
            d4h3[v[401]] = !![], d4h3[v[126]] = Number(ng0be[v[126]])[v[402]](0x0), d4h3[v[128]] = ng0be[v[128]], $9_7 && $9_7(d4h3[v[401]], d4h3[v[126]], d4h3[v[128]]);
        },
        'fail': function (pjm6va) {
            console[v[42]](v[403], pjm6va[v[59]]);
            var c8d2q4 = window['D$5Q$4'];
            $9_7 && $9_7(c8d2q4[v[401]], c8d2q4[v[126]], c8d2q4[v[128]]);
        }
    });
}, window[v[129]] = function (dhl384) {
    wx[v[129]]({
        'success': function (uhkl34) {
            dhl384 && dhl384(!![], uhkl34);
        },
        'fail': function (x7jv$) {
            dhl384 && dhl384(![], x7jv$);
        }
    });
}, window[v[133]] = function (f9_7$5) {
    if (f9_7$5) wx[v[133]](f9_7$5);
}, window[v[404]] = function (vxjm$6) {
    wx[v[404]](vxjm$6);
}, window[v[380]] = function (napm6, l43dh, $jm, x9vj7, u34hl, $57f9, k1rzy, bi0neg) {
    if (x9vj7 == undefined) x9vj7 = 0x1;
    wx[v[224]]({
        'url': napm6,
        'method': k1rzy || v[405],
        'responseType': v[406],
        'data': l43dh,
        'header': { 'content-type': bi0neg || v[226] },
        'success': function (k4lu3) {
            DEBUG && console[v[42]](v[407], napm6, info, k4lu3);
            if (k4lu3 && k4lu3[v[408]] == 0xc8) {
                var eigb = k4lu3[v[202]];
                !$57f9 || $57f9(eigb) ? $jm && $jm(eigb) : window[v[409]](napm6, l43dh, $jm, x9vj7, u34hl, $57f9, k4lu3);
            } else window[v[409]](napm6, l43dh, $jm, x9vj7, u34hl, $57f9, k4lu3);
        },
        'fail': function (mjp6x) {
            DEBUG && console[v[42]](v[410], napm6, info, mjp6x), window[v[409]](napm6, l43dh, $jm, x9vj7, u34hl, $57f9, mjp6x);
        },
        'complete': function () {}
    });
}, window[v[409]] = function (d4u3lh, d2q, f7_95, _17f5z, tz1r5f, pbga0n, gb0ine) {
    _17f5z - 0x1 > 0x0 ? setTimeout(function () {
        window[v[380]](d4u3lh, d2q, f7_95, _17f5z - 0x1, tz1r5f, pbga0n);
    }, 0x3e8) : tz1r5f && tz1r5f(JSON[v[27]]({
        'url': d4u3lh,
        'response': gb0ine
    }));
}, window[v[411]] = function (qwoc8, geab0, vm$6x, bngae0, pmn0b, jv$7x, fz5t) {
    !vm$6x && (vm$6x = {});
    var zryukt = Math[v[412]](Date[v[142]]() / 0x3e8);
    vm$6x[v[292]] = zryukt, vm$6x[v[413]] = geab0;
    var _j97$x = Object[v[414]](vm$6x)[v[415]](),
        mav60p = '',
        x_7$9j = '';
    for (var nga = 0x0; nga < _j97$x[v[10]]; nga++) {
        mav60p = mav60p + (nga == 0x0 ? '' : '&') + _j97$x[nga] + vm$6x[_j97$x[nga]], x_7$9j = x_7$9j + (nga == 0x0 ? '' : '&') + _j97$x[nga] + '=' + encodeURIComponent(vm$6x[_j97$x[nga]]);
    }
    mav60p = mav60p + D$5$[v[166]];
    var m6pvja = v[416] + md5(mav60p);
    send(qwoc8 + '?' + x_7$9j + (x_7$9j == '' ? '' : '&') + m6pvja, null, bngae0, pmn0b, jv$7x, fz5t || function (yktrl) {
        return yktrl[v[203]] == v[282];
    }, null, v[417]);
}, window['D$54$Q'] = function (m6na0, ylhukt) {
    var cq8w2 = 0x0;
    D$5$[v[23]] && (cq8w2 = D$5$[v[23]][v[24]]), sendApi(D$5$[v[162]], v[418], {
        'partnerId': D$5$[v[168]],
        'gamePkg': D$5$[v[22]],
        'logTime': Math[v[412]](Date[v[142]]() / 0x3e8),
        'platformUid': D$5$[v[288]],
        'type': m6na0,
        'serverId': cq8w2
    }, null, 0x2, null, function () {
        return !![];
    });
}, window['D$5$Q4'] = function (vpx6j) {
    sendApi(D$5$[v[160]], v[419], {
        'partner_id': D$5$[v[168]],
        'uid': D$5$[v[19]],
        'version': D$5$[v[80]],
        'game_pkg': D$5$[v[22]],
        'device': D$5$[v[169]]
    }, D$5$4Q, D$4$5, D$$Q);
}, window['D$5$4Q'] = function (d48c3) {
    if (d48c3 && d48c3[v[203]] === v[282] && d48c3[v[202]]) {
        d48c3[v[202]][v[420]]({
            'id': -0x2,
            'name': v[421]
        }), d48c3[v[202]][v[420]]({
            'id': -0x1,
            'name': v[422]
        }), D$5$[v[423]] = d48c3[v[202]];
        if (window[v[424]]) window[v[424]][v[425]]();
    } else {
        D$5$[v[426]] = ![];
        var g0ieb = d48c3 ? d48c3[v[203]] : '';
        window[v[211]](0x7, v[427] + g0ieb), window['D$Q45$'](v[428] + g0ieb);
    }
}, window['D$Q45'] = function (mxjv$) {
    sendApi(D$5$[v[160]], v[429], {
        'partner_id': D$5$[v[168]],
        'uid': D$5$[v[19]],
        'version': D$5$[v[80]],
        'game_pkg': D$5$[v[22]],
        'device': D$5$[v[169]]
    }, D$Q54, D$4$5, D$$Q);
}, window['D$Q54'] = function (j6v9$x) {
    D$5$[v[430]] = ![];
    if (j6v9$x && j6v9$x[v[203]] === v[282] && j6v9$x[v[202]]) {
        for (var c8d43 = 0x0; c8d43 < j6v9$x[v[202]][v[10]]; c8d43++) {
            j6v9$x[v[202]][c8d43][v[323]] = D$54Q(j6v9$x[v[202]][c8d43]);
        }
        D$5$[v[171]][-0x1] = window[v[431]](j6v9$x[v[202]]), window[v[424]][v[432]](-0x1);
    } else {
        var j7v = j6v9$x ? j6v9$x[v[203]] : '';
        window[v[211]](0x8, v[433] + j7v), window['D$Q45$'](v[434] + j7v);
    }
}, window[v[435]] = function (yltku) {
    sendApi(D$5$[v[160]], v[429], {
        'partner_id': D$5$[v[168]],
        'uid': D$5$[v[19]],
        'version': D$5$[v[80]],
        'game_pkg': D$5$[v[22]],
        'device': D$5$[v[169]]
    }, yltku, D$4$5, D$$Q);
}, window['D$4Q5'] = function (vjxm6, yrtukl) {
    sendApi(D$5$[v[160]], v[436], {
        'partner_id': D$5$[v[168]],
        'uid': D$5$[v[19]],
        'version': D$5$[v[80]],
        'game_pkg': D$5$[v[22]],
        'device': D$5$[v[169]],
        'server_group_id': yrtukl
    }, D$45Q, D$4$5, D$$Q);
}, window['D$45Q'] = function (q4c8d2) {
    D$5$[v[430]] = ![];
    if (q4c8d2 && q4c8d2[v[203]] === v[282] && q4c8d2[v[202]] && q4c8d2[v[202]][v[202]]) {
        var x9j7$ = q4c8d2[v[202]][v[437]],
            p0bag = [];
        for (var qcdo28 = 0x0; qcdo28 < q4c8d2[v[202]][v[202]][v[10]]; qcdo28++) {
            q4c8d2[v[202]][v[202]][qcdo28][v[323]] = D$54Q(q4c8d2[v[202]][v[202]][qcdo28]), (p0bag[v[10]] == 0x0 || q4c8d2[v[202]][v[202]][qcdo28][v[323]] != 0x0) && (p0bag[p0bag[v[10]]] = q4c8d2[v[202]][v[202]][qcdo28]);
        }
        D$5$[v[171]][x9j7$] = window[v[431]](p0bag), window[v[424]][v[432]](x9j7$);
    } else {
        var _57f = q4c8d2 ? q4c8d2[v[203]] : '';
        window[v[211]](0x9, v[438] + _57f), window['D$Q45$'](v[439] + _57f);
    }
}, window['D$H4$5'] = function (ku3yhl) {
    sendApi(D$5$[v[160]], v[440], {
        'partner_id': D$5$[v[168]],
        'uid': D$5$[v[19]],
        'version': D$5$[v[80]],
        'game_pkg': D$5$[v[22]],
        'device': D$5$[v[169]]
    }, reqServerRecommendCallBack, D$4$5, D$$Q);
}, window[v[441]] = function (npa6m) {
    D$5$[v[430]] = ![];
    if (npa6m && npa6m[v[203]] === v[282] && npa6m[v[202]]) {
        for (var od8c2 = 0x0; od8c2 < npa6m[v[202]][v[10]]; od8c2++) {
            npa6m[v[202]][od8c2][v[323]] = D$54Q(npa6m[v[202]][od8c2]);
        }
        D$5$[v[171]][-0x2] = window[v[431]](npa6m[v[202]]), window[v[424]][v[432]](-0x2);
    } else {
        var rzkuty = npa6m ? npa6m[v[203]] : '';
        window[v[211]](0xa, v[442] + rzkuty), alert(v[443] + rzkuty);
    }
}, window[v[431]] = function (u3khy) {
    return u3khy;
}, window['D$5Q4'] = function (e0nib, utlyk) {
    e0nib = e0nib || D$5$[v[23]][v[24]], sendApi(D$5$[v[160]], v[444], {
        'type': '4',
        'game_pkg': D$5$[v[22]],
        'server_id': e0nib
    }, utlyk);
}, window[v[445]] = function (lyuk3h, lu4k3, ktyurz, av0p6m) {
    ktyurz = ktyurz || D$5$[v[23]][v[24]], sendApi(D$5$[v[160]], v[446], {
        'type': lyuk3h,
        'game_pkg': lu4k3,
        'server_id': ktyurz
    }, av0p6m);
}, window[v[447]] = function (ni0ebg, vj79$) {
    sendApi(D$5$[v[160]], v[448], { 'game_pkg': ni0ebg }, vj79$);
}, window['D$54Q'] = function (f9$5) {
    if (f9$5) {
        if (f9$5[v[323]] == 0x1) {
            if (f9$5[v[449]] == 0x3) return 0x3;else return f9$5[v[449]] == 0x1 ? 0x2 : 0x1;
        } else return f9$5[v[323]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window['D$$Q45'] = function (d2qco, r_z1) {
    D$5$[v[450]] = {
        'step': d2qco,
        'server_id': r_z1
    }, D$Q54$({ 'title': v[451] }), sendApi(D$5$[v[160]], v[452], {
        'partner_id': D$5$[v[168]],
        'uid': D$5$[v[19]],
        'game_pkg': D$5$[v[22]],
        'server_id': r_z1,
        'platform': D$5$[v[84]],
        'platform_uid': D$5$[v[288]],
        'check_login_time': D$5$[v[291]],
        'check_login_sign': D$5$[v[289]],
        'version_name': D$5$[v[252]]
    }, D$$Q54, D$4$5, D$$Q, function (c4d28) {
        return c4d28[v[203]] == v[282] || c4d28[v[1]] == v[453] || c4d28[v[1]] == v[454];
    });
}, window['D$$Q54'] = function (m$jv6) {
    var bnp0ga = this;
    if (m$jv6 && m$jv6[v[203]] === v[282] && m$jv6[v[202]]) {
        var _975 = D$5$[v[23]];
        _975[v[455]] = D$5$[v[172]], _975[v[290]] = String(m$jv6[v[202]][v[456]]), _975[v[178]] = parseInt(m$jv6[v[202]][v[292]]);
        if (m$jv6[v[202]][v[457]]) _975[v[457]] = parseInt(m$jv6[v[202]][v[457]]);else _975[v[457]] = parseInt(m$jv6[v[202]][v[24]]);
        _975[v[458]] = 0x0, _975[v[21]] = D$5$[v[336]], _975[v[459]] = m$jv6[v[202]][v[460]], _975[v[461]] = m$jv6[v[202]][v[461]];
        if (m$jv6[v[202]][v[462]]) _975[v[462]] = parseInt(m$jv6[v[202]][v[462]]);
        console[v[42]](v[463] + JSON[v[27]](_975[v[461]])), D$5$[v[309]] == 0x1 && _975[v[461]] && _975[v[461]][v[464]] == 0x1 && (D$5$[v[465]] = 0x1, window[v[35]][v[36]]['D$H$5']()), D$$4Q5();
    } else {
        if (D$5$[v[450]][v[466]] >= 0x3) {
            var v6mxp = m$jv6 ? m$jv6[v[203]] : '';
            window[v[211]](0xc, v[467] + v6mxp), D$$Q(JSON[v[27]](m$jv6)), window['D$Q45$'](v[468] + v6mxp);
        } else sendApi(D$5$[v[160]], v[266], {
            'platform': D$5$[v[158]],
            'partner_id': D$5$[v[168]],
            'token': D$5$[v[263]],
            'game_pkg': D$5$[v[22]],
            'deviceId': D$5$[v[169]],
            'scene': v[267] + D$5$[v[170]]
        }, function (x_j$97) {
            if (!x_j$97 || x_j$97[v[203]] != v[282]) {
                window['D$Q45$'](v[284] + x_j$97 && x_j$97[v[203]]);
                return;
            }
            D$5$[v[289]] = String(x_j$97[v[290]]), D$5$[v[291]] = String(x_j$97[v[292]]), setTimeout(function () {
                D$$Q45(D$5$[v[450]][v[466]] + 0x1, D$5$[v[450]][v[24]]);
            }, 0x5dc);
        }, D$4$5, D$$Q, function (hulytk) {
            return hulytk[v[203]] == v[282] || hulytk[v[203]] == v[469];
        });
    }
}, window['D$$4Q5'] = function () {
    ServerLoading[v[36]][v[328]](D$5$[v[309]]), window['D$4$'] = !![], window['D$$5Q4']();
}, window['D$$45Q'] = function () {
    if (window['D$$4'] && window['D$54$'] && window[v[184]] && window[v[185]] && window['D$5$4'] && window['D$54']) {
        if (!window[v[470]][v[36]]) {
            console[v[42]](v[471] + window[v[470]][v[36]]);
            var l4h83 = wx[v[472]](),
                egin0 = l4h83[v[138]] ? l4h83[v[138]] : 0x0,
                l8hd4 = {
                'cdn': window['D$5$'][v[21]],
                'spareCdn': window['D$5$'][v[250]],
                'newRegister': window['D$5$'][v[309]],
                'wxPC': window['D$5$'][v[113]],
                'wxIOS': window['D$5$'][v[107]],
                'wxAndroid': window['D$5$'][v[110]],
                'wxParam': {
                    'limitLoad': window['D$5$']['D$HQ4$5'],
                    'benchmarkLevel': window['D$5$']['D$HQ54$'],
                    'wxFrom': window[v[6]][v[258]] == v[473] ? 0x1 : 0x0,
                    'wxSDKVersion': window[v[40]]
                },
                'configType': window['D$5$'][v[179]],
                'exposeType': window['D$5$'][v[181]],
                'scene': egin0
            };
            new window[v[470]](l8hd4, window['D$5$'][v[20]], window['D$HQ45$']);
        }
    }
}, window['D$$5Q4'] = function () {
    if (window['D$$4'] && window['D$54$'] && window[v[184]] && window[v[185]] && window['D$5$4'] && window['D$54'] && window['D$4$'] && window['D$45']) {
        D$Q5$4();
        if (!D$$45) {
            D$$45 = !![];
            if (!window[v[470]][v[36]]) window['D$$45Q']();
            var ei0gb = 0x0,
                $xj79v = wx[v[474]]();
            $xj79v && (window['D$5$'][v[112]] && (ei0gb = $xj79v[v[102]]), console[v[1]](v[475] + $xj79v[v[102]] + v[476] + $xj79v[v[103]] + v[477] + $xj79v[v[104]] + v[478] + $xj79v[v[105]] + v[479] + $xj79v[v[480]] + v[481] + $xj79v[v[482]]));
            var l4uhk = {};
            for (const _zrf51 in D$5$[v[23]]) {
                l4uhk[_zrf51] = D$5$[v[23]][_zrf51];
            }
            var $x97v = {
                'channel': window['D$5$'][v[173]],
                'account': window['D$5$'][v[19]],
                'userId': window['D$5$'][v[287]],
                'cdn': window['D$5$'][v[21]],
                'data': window['D$5$'][v[202]],
                'package': window['D$5$'][v[156]],
                'newRegister': window['D$5$'][v[309]],
                'pkgName': window['D$5$'][v[22]],
                'partnerId': window['D$5$'][v[168]],
                'platform_uid': window['D$5$'][v[288]],
                'deviceId': window['D$5$'][v[169]],
                'selectedServer': l4uhk,
                'configType': window['D$5$'][v[179]],
                'exposeType': window['D$5$'][v[181]],
                'debugUsers': window['D$5$'][v[176]],
                'wxMenuTop': ei0gb,
                'wxShield': window['D$5$'][v[183]],
                'wx_channel': window['D$5$'][v[264]]
            };
            if (window[v[339]]) for (var yuzr in window[v[339]]) {
                $x97v[yuzr] = window[v[339]][yuzr];
            }
            window[v[470]][v[36]]['D$$5H']($x97v);
            if (D$5$[v[23]] && D$5$[v[23]][v[24]]) localStorage[v[483]](v[295] + D$5$[v[22]] + D$5$[v[19]], D$5$[v[23]][v[24]]);
        }
    } else console[v[1]](v[484] + window['D$$4'] + v[485] + window['D$54$'] + v[486] + window[v[184]] + v[487] + window[v[185]] + v[488] + window['D$5$4'] + v[489] + window['D$54'] + v[490] + window['D$4$'] + v[491] + window['D$45']);
};