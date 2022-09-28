var f = wx.$B;
import Sv690 from '../no24o/a9y.js';
window[f[0]] = { 'wxVersion': window[f[1]][f[2]] }, window[f[3]] = ![], window['t1$W'] = 0x1, window[f[4]] = 0x1, window['t1HW$'] = !![], window[f[5]] = !![], window['t18XHW$'] = '', window[f[6]] = ![], window['t1W$'] = {
    'base_cdn': f[7],
    'cdn': f[7]
}, t1W$[f[8]] = {}, t1W$[f[9]] = '0', t1W$[f[10]] = window[f[0]][f[11]], t1W$[f[12]] = '', t1W$['os'] = '1', t1W$[f[13]] = f[14], t1W$[f[15]] = f[16], t1W$[f[17]] = f[18], t1W$[f[19]] = f[20], t1W$[f[21]] = f[22], t1W$[f[23]] = '1', t1W$[f[24]] = '', t1W$[f[25]] = '', t1W$[f[26]] = 0x0, t1W$[f[27]] = {}, t1W$[f[28]] = parseInt(t1W$[f[23]]), t1W$[f[29]] = t1W$[f[23]], t1W$[f[30]] = {}, t1W$[f[31]] = f[32], t1W$[f[33]] = ![], t1W$[f[34]] = f[35], t1W$[f[36]] = Date[f[37]](), t1W$[f[38]] = f[39], t1W$[f[40]] = '_a', t1W$[f[41]] = 0x2, t1W$[f[42]] = 0x7c1, t1W$[f[11]] = window[f[0]][f[11]], t1W$[f[43]] = ![], t1W$[f[44]] = ![], t1W$[f[45]] = ![], t1W$[f[46]] = ![], window['t1H$W'] = 0x5, window['t1H$'] = ![], window['t1$H'] = ![], window['t1WH$'] = ![], window[f[47]] = ![], window[f[48]] = ![], window['t1W$H'] = ![], window[f[49]] = ![], window[f[50]] = ![], window['t1$HW'] = ![], window[f[51]] = null, window[f[52]] = function (e5zl) {
    console[f[53]](f[52], e5zl), wx[f[54]]({}), wx[f[55]]({
        'title': f[56],
        'content': e5zl,
        'success'(k4gfdb) {
            if (k4gfdb[f[57]]) console[f[53]](f[58]);else k4gfdb[f[59]] && console[f[53]](f[60]);
        }
    });
}, window['t1XHW$'] = function (fk7ts) {
    console[f[53]](f[61], fk7ts), t1XW$H(), wx[f[55]]({
        'title': f[56],
        'content': fk7ts,
        'confirmText': f[62],
        'cancelText': f[63],
        'success'(l1ze5) {
            if (l1ze5[f[57]]) window[f[64]]();else l1ze5[f[59]] && (console[f[53]](f[65]), wx[f[66]]({}));
        }
    });
}, window[f[67]] = function (d4f7ks) {
    console[f[53]](f[67], d4f7ks), wx[f[55]]({
        'title': f[56],
        'content': d4f7ks,
        'confirmText': f[68],
        'showCancel': ![],
        'complete'(ghv32) {
            console[f[53]](f[65]), wx[f[66]]({});
        }
    });
}, window['t1XH$W'] = ![], window['t1XWH$'] = function (tw$x) {
    window['t1XH$W'] = !![], wx[f[69]](tw$x);
}, window['t1XW$H'] = function () {
    window['t1XH$W'] && (window['t1XH$W'] = ![], wx[f[54]]({}));
}, window['t1X$HW'] = function (st7wr) {
    window[f[70]][f[71]]['t1X$HW'](st7wr);
}, window[f[72]] = function (wst78r, yj6m) {
    Sv690[f[72]](wst78r, function (jmyua6) {
        jmyua6 && jmyua6[f[73]] ? jmyua6[f[73]][f[74]] == 0x1 ? yj6m(!![]) : (yj6m(![]), console[f[75]](f[76] + jmyua6[f[73]][f[77]])) : console[f[53]](f[72], jmyua6);
    });
}, window['t1X$WH'] = function (xpi8$w) {
    console[f[53]](f[78], xpi8$w);
}, window['t1XW$'] = function (zlqj1o) {}, window['t1X$W'] = function (aym96, sb4dfk, am6u9y) {}, window['t1X$'] = function ($7wr8t) {
    console[f[53]](f[79], $7wr8t), window[f[70]][f[71]][f[80]](), window[f[70]][f[71]][f[81]](), window[f[70]][f[71]][f[82]]();
}, window['t1$X'] = function (ksft47) {
    window[f[83]](0xe, f[84] + ksft47), window['t1XHW$'](f[85]);
    var v3b = {
        'id': window['t1W$'][f[86]],
        'role': window['t1W$'][f[87]],
        'level': window['t1W$'][f[88]],
        'account': window['t1W$'][f[89]],
        'version': window['t1W$'][f[42]],
        'cdn': window['t1W$'][f[90]],
        'pkgName': window['t1W$'][f[24]],
        'gamever': window[f[1]][f[2]],
        'serverid': window['t1W$'][f[30]] ? window['t1W$'][f[30]][f[91]] : 0x0,
        'systemInfo': window[f[92]],
        'error': f[93],
        'stack': ksft47 ? ksft47 : f[85]
    },
        _px$ni = JSON[f[94]](v3b);
    console[f[95]](f[96] + _px$ni), window[f[31]](_px$ni);
}, window[f[83]] = function (oj1q, gdvb) {
    sendApi(t1W$[f[17]], f[97], {
        'game_pkg': t1W$[f[24]],
        'partner_id': t1W$[f[23]],
        'server_id': t1W$[f[30]] && t1W$[f[30]][f[91]] > 0x0 ? t1W$[f[30]][f[91]] : 0x0,
        'uid': t1W$[f[89]] > 0x0 ? t1W$[f[89]] : 0x0,
        'type': oj1q,
        'info': gdvb
    });
}, window['t1WX$'] = function (vh29) {
    var h3y960 = JSON[f[98]](vh29);
    h3y960[f[99]] = window[f[1]][f[2]], h3y960[f[100]] = window['t1W$'][f[30]] ? window['t1W$'][f[30]][f[91]] : 0x0, h3y960[f[92]] = window[f[92]];
    var umqo = JSON[f[94]](h3y960);
    console[f[95]](f[101] + umqo), window[f[31]](umqo);
}, window['t1W$X'] = function (gfd2bv, z1joq) {
    var ojaum = {
        'id': window['t1W$'][f[86]],
        'role': window['t1W$'][f[87]],
        'level': window['t1W$'][f[88]],
        'account': window['t1W$'][f[89]],
        'version': window['t1W$'][f[42]],
        'cdn': window['t1W$'][f[90]],
        'pkgName': window['t1W$'][f[24]],
        'gamever': window[f[1]][f[2]],
        'serverid': window['t1W$'][f[30]] ? window['t1W$'][f[30]][f[91]] : 0x0,
        'systemInfo': window[f[92]],
        'error': gfd2bv,
        'stack': z1joq
    },
        gf4kdb = JSON[f[94]](ojaum);
    console[f[102]](f[103] + gf4kdb), window[f[31]](gf4kdb);
}, window[f[31]] = function (rts87) {
    if (window['t1W$'][f[104]] == f[105]) return;
    var rst = t1W$[f[31]] + f[106] + t1W$[f[89]];
    wx[f[107]]({
        'url': rst,
        'method': f[108],
        'data': rts87,
        'header': {
            'content-type': f[109],
            'cache-control': f[110]
        },
        'success': function ($p8xwi) {
            DEBUG && console[f[53]](f[111], rst, rts87, $p8xwi);
        },
        'fail': function (w$7tr) {
            DEBUG && console[f[53]](f[111], rst, rts87, w$7tr);
        },
        'complete': function () {}
    });
}, window[f[112]] = function () {
    function mu96y() {
        return ((0x1 + Math[f[113]]()) * 0x10000 | 0x0)[f[114]](0x10)[f[115]](0x1);
    }
    return mu96y() + mu96y() + '-' + mu96y() + '-' + mu96y() + '-' + mu96y() + '+' + mu96y() + mu96y() + mu96y();
}, window[f[64]] = function () {
    console[f[53]](f[116]);
    var vg2b = Sv690[f[117]]();
    t1W$[f[29]] = vg2b[f[118]], t1W$[f[28]] = vg2b[f[118]], t1W$[f[23]] = vg2b[f[118]], t1W$[f[24]] = vg2b[f[119]];
    var $tw87 = { 'game_ver': t1W$[f[10]] };
    t1W$[f[25]] = this[f[112]](), t1XWH$({ 'title': f[120] }), Sv690[f[121]]($tw87, this['t1$XW'][f[122]](this));
}, window['t1$XW'] = function (uqamj) {
    var pnxi_$ = uqamj[f[123]];
    sdkInitRes = uqamj, console[f[53]](f[124] + pnxi_$ + f[125] + (pnxi_$ == 0x1) + f[126] + uqamj[f[2]] + f[127] + window[f[0]][f[11]] + f[128] + uqamj[f[129]]);
    if (!uqamj[f[2]] || window['t18H$XW'](window[f[0]][f[11]], uqamj[f[2]]) < 0x0) console[f[53]](f[130]), t1W$[f[15]] = f[131], t1W$[f[17]] = f[132], t1W$[f[19]] = f[133], t1W$[f[90]] = f[134], t1W$[f[135]] = f[136], t1W$[f[129]] = uqamj[f[129]], t1W$[f[43]] = ![];else window['t18H$XW'](window[f[0]][f[11]], uqamj[f[2]]) == 0x0 ? (console[f[53]](f[137]), t1W$[f[15]] = f[16], t1W$[f[17]] = f[18], t1W$[f[19]] = f[20], t1W$[f[90]] = f[138], t1W$[f[135]] = f[136], t1W$[f[129]] = f[139], t1W$[f[43]] = !![]) : (console[f[53]](f[140]), t1W$[f[15]] = f[16], t1W$[f[17]] = f[18], t1W$[f[19]] = f[20], t1W$[f[90]] = f[138], t1W$[f[135]] = f[136], t1W$[f[129]] = f[139], t1W$[f[43]] = ![]);
    t1W$[f[26]] = config[f[141]] ? config[f[141]] : 0x0, this['t1HWX$'](), this['t1HW$X'](), window[f[142]] = 0x5, t1XWH$({ 'title': f[143] }), Sv690[f[144]](this['t1$WX'][f[122]](this));
}, window[f[142]] = 0x5, window['t1$WX'] = function (ay6m9h, ljzq1) {
    if (ay6m9h == 0x0 && ljzq1 && ljzq1[f[145]]) {
        t1W$[f[146]] = ljzq1[f[145]], t1W$[f[147]] = ljzq1[f[147]];
        var qjl1ou = this;
        t1XWH$({ 'title': f[148] }), sendApi(t1W$[f[15]], f[149], {
            'platform': t1W$[f[13]],
            'partner_id': t1W$[f[23]],
            'token': ljzq1[f[145]],
            'game_pkg': t1W$[f[24]],
            'deviceId': t1W$[f[25]],
            'scene': f[150] + t1W$[f[26]]
        }, this['t1HXW$'][f[122]](this), t1H$W, t1$X);
    } else ljzq1 && ljzq1[f[151]] && window[f[142]] > 0x0 && (ljzq1[f[151]][f[152]](f[153]) != -0x1 || ljzq1[f[151]][f[152]](f[154]) != -0x1 || ljzq1[f[151]][f[152]](f[155]) != -0x1 || ljzq1[f[151]][f[152]](f[156]) != -0x1 || ljzq1[f[151]][f[152]](f[157]) != -0x1 || ljzq1[f[151]][f[152]](f[158]) != -0x1) ? (window[f[142]]--, Sv690[f[144]](this['t1$WX'][f[122]](this))) : (window[f[83]](0x1, f[159] + ay6m9h + f[160] + (ljzq1 ? ljzq1[f[151]] : '')), window['t1W$X'](f[161], JSON[f[94]]({
        'status': ay6m9h,
        'data': ljzq1
    })), window['t1XHW$'](f[162] + (ljzq1 && ljzq1[f[151]] ? '，' + ljzq1[f[151]] : '')));
}, window['t1HXW$'] = function (fkgb4d) {
    if (!fkgb4d) {
        window[f[83]](0x2, f[163]), window['t1W$X'](f[164], f[165]), window['t1XHW$'](f[166]);
        return;
    }
    if (fkgb4d[f[74]] != f[167]) {
        window[f[83]](0x2, f[168] + fkgb4d[f[74]]), window['t1W$X'](f[164], JSON[f[94]](fkgb4d)), window['t1XHW$'](f[169] + fkgb4d[f[74]]);
        return;
    }
    if (fkgb4d[f[170]] == 0x1) {
        window['t1XHW$'](f[171]);
        return;
    }
    t1W$[f[172]] = String(fkgb4d[f[89]]), t1W$[f[89]] = String(fkgb4d[f[89]]), t1W$[f[173]] = String(fkgb4d[f[173]]), t1W$[f[29]] = String(fkgb4d[f[173]]), t1W$[f[174]] = String(fkgb4d[f[174]]), t1W$[f[175]] = String(fkgb4d[f[176]]), t1W$[f[177]] = String(fkgb4d[f[178]]), t1W$[f[176]] = '';
    var my6uja = this;
    t1XWH$({ 'title': f[179] });
    var s74fk = localStorage[f[180]](f[181] + t1W$[f[24]] + t1W$[f[89]]);
    if (s74fk && s74fk != '') {
        var $iwpx = Number(s74fk);
        my6uja[f[182]]($iwpx);
    } else my6uja[f[183]]();
}, window[f[183]] = function () {
    var dfb2kg = this;
    sendApi(t1W$[f[15]], f[184], {
        'partner_id': t1W$[f[23]],
        'uid': t1W$[f[89]],
        'version': t1W$[f[10]],
        'game_pkg': t1W$[f[24]],
        'device': t1W$[f[25]]
    }, dfb2kg['t1HX$W'][f[122]](dfb2kg), t1H$W, t1$X);
}, window['t1HX$W'] = function ($8xip) {
    if (!$8xip) {
        window[f[83]](0x3, f[185]), window['t1XHW$'](f[185]);
        return;
    }
    if ($8xip[f[74]] != f[167]) {
        window[f[83]](0x3, f[186] + $8xip[f[74]]), window['t1XHW$'](f[186] + $8xip[f[74]]);
        return;
    }
    if (!$8xip[f[73]] || $8xip[f[73]][f[187]] == 0x0) {
        window[f[83]](0x3, f[188]), window['t1XHW$'](f[189]);
        return;
    }
    this[f[190]]($8xip);
}, window[f[182]] = function (rw$78t) {
    var mau6y9 = this;
    sendApi(t1W$[f[15]], f[191], {
        'server_id': rw$78t,
        'time': Date[f[37]]() / 0x3e8
    }, mau6y9[f[192]][f[122]](mau6y9), t1H$W, t1$X);
}, window[f[192]] = function (o1ujlq) {
    if (!o1ujlq) {
        window[f[83]](0x4, f[193]), this[f[183]]();
        return;
    }
    if (o1ujlq[f[74]] != f[167]) {
        window[f[83]](0x4, f[194] + o1ujlq[f[74]]), this[f[183]]();
        return;
    }
    if (!o1ujlq[f[73]] || o1ujlq[f[73]][f[187]] == 0x0) {
        window[f[83]](0x4, f[195]), this[f[183]]();
        return;
    }
    this[f[190]](o1ujlq);
}, window[f[190]] = function (q1leo) {
    t1W$[f[196]] = q1leo[f[197]] != undefined ? q1leo[f[197]] : 0x0, t1W$[f[30]] = {
        'server_id': String(q1leo[f[73]][0x0][f[91]]),
        'server_name': String(q1leo[f[73]][0x0][f[198]]),
        'entry_ip': q1leo[f[73]][0x0][f[199]],
        'entry_port': parseInt(q1leo[f[73]][0x0][f[200]]),
        'status': t1WHX(q1leo[f[73]][0x0]),
        'start_time': q1leo[f[73]][0x0][f[201]],
        'maintain_time': q1leo[f[73]][0x0][f[202]] ? q1leo[f[73]][0x0][f[202]] : '',
        'is_recommend': q1leo[f[73]][0x0][f[203]],
        'cdn': t1W$[f[90]]
    }, this['t1$WHX'](), window[f[70]] && window[f[70]][f[71]][f[204]] && window[f[70]][f[71]][f[204]](sdkInitRes[f[205]], sdkInitRes[f[206]], sdkInitRes[f[207]], sdkInitRes[f[208]], sdkInitRes[f[209]]);
}, window['t1$WHX'] = function () {
    if (t1W$[f[196]] == 0x1) {
        var d4bgf = t1W$[f[30]][f[210]];
        if (d4bgf === -0x1 || d4bgf === 0x0) {
            window[f[83]](0xf, f[211] + t1W$[f[30]]['id'] + f[212] + t1W$[f[30]][f[210]]), window['t1XHW$'](d4bgf === -0x1 ? f[213] : f[214]);
            return;
        }
        t1$XHW(0x0, t1W$[f[30]][f[91]]), window[f[70]][f[71]][f[215]](t1W$[f[196]]);
    } else window[f[70]][f[71]][f[216]](), t1XW$H();
    window[f[50]] = !![], window['t1$HWX'](), window['t1$WXH']();
}, window['t1HWX$'] = function () {
    sendApi(t1W$[f[15]], f[217], {
        'game_pkg': t1W$[f[24]],
        'version_name': t1W$[f[129]]
    }, this[f[218]][f[122]](this), t1H$W, t1$X);
}, window[f[218]] = function (rk) {
    if (!rk) {
        window[f[83]](0x5, f[219]), window['t1XHW$'](f[219]);
        return;
    }
    if (rk[f[74]] != f[167]) {
        window[f[83]](0x5, f[220] + rk[f[74]]), window['t1XHW$'](f[220] + rk[f[74]]);
        return;
    }
    if (!rk[f[73]] || !rk[f[73]][f[10]]) {
        window[f[83]](0x5, f[221] + (rk[f[73]] && rk[f[73]][f[10]])), window['t1XHW$'](f[221] + (rk[f[73]] && rk[f[73]][f[10]]));
        return;
    }
    rk[f[73]][f[222]] && rk[f[73]][f[222]][f[187]] > 0xa && (t1W$[f[223]] = rk[f[73]][f[222]], t1W$[f[90]] = rk[f[73]][f[222]]), rk[f[73]][f[10]] && (t1W$[f[42]] = rk[f[73]][f[10]]), console[f[75]](f[224] + t1W$[f[42]] + f[225] + t1W$[f[129]]), window['t1W$H'] = !![], window['t1$HWX'](), window['t1$WXH']();
}, window[f[226]], window['t1HW$X'] = function () {
    sendApi(t1W$[f[15]], f[227], { 'game_pkg': t1W$[f[24]] }, this['t1H$XW'][f[122]](this), t1H$W, t1$X);
}, window['t1H$XW'] = function (omaqju) {
    if (omaqju && omaqju[f[74]] === f[167] && omaqju[f[73]]) {
        window[f[226]] = omaqju[f[73]];
        for (var gvbd32 in omaqju[f[73]]) {
            t1W$[gvbd32] = omaqju[f[73]][gvbd32];
        }
        window[f[228]]();
    } else window[f[83]](0xb, f[229]), console[f[75]](f[230] + omaqju[f[74]]);
    window[f[49]] = !![], window['t1$WXH']();
}, window[f[228]] = function () {
    var x_$inp = t1W$[f[43]] || t1W$[f[231]] && t1W$[f[231]] > 0x0;
    if (x_$inp) {
        var aqouj = t1W$[f[232]],
            mouyj = aqouj && aqouj[f[187]] == 0x9;
        mouyj && (window[f[233]] = aqouj);
        var s8tw7 = t1W$[f[234]],
            oqua = s8tw7 && s8tw7[f[235]]('#')[f[187]] == 0x4;
        oqua && (window[f[236]] = s8tw7);
    }
}, window[f[237]] = function (p$8x_i, u6ymaj, qzo1le, tw4sr, eoqzl1, aojqmu, aum, $r8txw, ds7kf, a9y6mu) {
    eoqzl1 = String(eoqzl1);
    var $pi_nx = aum,
        ahy69 = $r8txw;
    t1W$[f[8]][eoqzl1] = {
        'productid': eoqzl1,
        'productname': $pi_nx,
        'productdesc': ahy69,
        'roleid': p$8x_i,
        'rolename': u6ymaj,
        'rolelevel': qzo1le,
        'price': aojqmu,
        'callback': ds7kf
    }, sendApi(t1W$[f[19]], f[238], {
        'game_pkg': t1W$[f[24]],
        'server_id': t1W$[f[30]][f[91]],
        'server_name': t1W$[f[30]][f[198]],
        'level': qzo1le,
        'uid': t1W$[f[89]],
        'role_id': p$8x_i,
        'role_name': u6ymaj,
        'product_id': eoqzl1,
        'product_name': $pi_nx,
        'product_desc': ahy69,
        'money': aojqmu,
        'partner_id': t1W$[f[23]]
    }, toPayCallBack, t1H$W, t1$X);
}, window[f[239]] = function (p8w$x) {
    if (p8w$x && (p8w$x[f[240]] === 0xc8 || p8w$x[f[74]] == f[167])) {
        var m690 = t1W$[f[8]][String(p8w$x[f[241]])];
        if (m690[f[242]]) m690[f[242]](p8w$x[f[241]], p8w$x[f[243]], -0x1);
        Sv690[f[244]]({
            'cpbill': p8w$x[f[243]],
            'productid': p8w$x[f[241]],
            'productname': m690[f[245]],
            'productdesc': m690[f[246]],
            'serverid': t1W$[f[30]][f[91]],
            'servername': t1W$[f[30]][f[198]],
            'roleid': m690[f[247]],
            'rolename': m690[f[248]],
            'rolelevel': m690[f[249]],
            'price': m690[f[250]],
            'extension': JSON[f[94]]({ 'cp_order_id': p8w$x[f[243]] })
        }, function (aujoy, jluo) {
            m690[f[242]] && aujoy == 0x0 && m690[f[242]](p8w$x[f[241]], p8w$x[f[243]], aujoy);
            console[f[75]](JSON[f[94]]({
                'type': f[251],
                'status': aujoy,
                'data': p8w$x,
                'role_name': m690[f[248]]
            }));
            if (aujoy === 0x0) {} else {
                if (aujoy === 0x1) {} else {
                    if (aujoy === 0x2) {}
                }
            }
        });
    } else {
        var t7sw4r = p8w$x ? f[252] + p8w$x[f[240]] + f[253] + p8w$x[f[74]] + f[254] + p8w$x[f[75]] : f[255];
        window[f[83]](0xd, f[256] + t7sw4r), alert(t7sw4r);
    }
}, window['t1H$WX'] = function () {}, window['t1XH$'] = function (r4t7, r4k7st, x$8p_, q1ojzl, f2vb) {
    Sv690[f[257]](t1W$[f[30]][f[91]], t1W$[f[30]][f[198]] || t1W$[f[30]][f[91]], r4t7, r4k7st, x$8p_), sendApi(t1W$[f[15]], f[258], {
        'game_pkg': t1W$[f[24]],
        'server_id': t1W$[f[30]][f[91]],
        'role_id': r4t7,
        'uid': t1W$[f[89]],
        'role_name': r4k7st,
        'role_type': q1ojzl,
        'level': x$8p_
    });
}, window['t1X$H'] = function (qlo1zj, tr4w7, jmauq, fk4gb, iw$, ts4r7k, $t7wr, f7skt4, kbf4d, ezlqo1) {
    t1W$[f[86]] = qlo1zj, t1W$[f[87]] = tr4w7, t1W$[f[88]] = jmauq, Sv690[f[259]](t1W$[f[30]][f[91]], t1W$[f[30]][f[198]] || t1W$[f[30]][f[91]], qlo1zj, tr4w7, jmauq), sendApi(t1W$[f[15]], f[260], {
        'game_pkg': t1W$[f[24]],
        'server_id': t1W$[f[30]][f[91]],
        'role_id': qlo1zj,
        'uid': t1W$[f[89]],
        'role_name': tr4w7,
        'role_type': fk4gb,
        'level': jmauq,
        'evolution': iw$
    });
}, window['t1HX$'] = function (hy06m, oz1qe, mh96y, oa1, g32b, ix$r8w, bkfdg4, dfb4kg, v302hg, wts74r) {
    t1W$[f[86]] = hy06m, t1W$[f[87]] = oz1qe, t1W$[f[88]] = mh96y, Sv690[f[261]](t1W$[f[30]][f[91]], t1W$[f[30]][f[198]] || t1W$[f[30]][f[91]], hy06m, oz1qe, mh96y), sendApi(t1W$[f[15]], f[260], {
        'game_pkg': t1W$[f[24]],
        'server_id': t1W$[f[30]][f[91]],
        'role_id': hy06m,
        'uid': t1W$[f[89]],
        'role_name': oz1qe,
        'role_type': oa1,
        'level': mh96y,
        'evolution': g32b
    });
}, window['t1H$X'] = function (fkt4s) {}, window[f[262]] = function (i$8x_p, l1quo) {
    Sv690[f[263]](f[263], { 'activity_id': l1quo }, function (mh6ya9) {
        i$8x_p && i$8x_p(mh6ya9);
    });
}, window[f[264]] = function () {
    Sv690[f[264]]();
}, window[f[265]] = function () {
    Sv690[f[266]]();
}, window[f[267]] = function (rix8, wix8$p, mjaoy, $ix8, zl1j, l1qze5, uajqo, st87wr) {
    st87wr = st87wr || t1W$[f[30]][f[91]], sendApi(t1W$[f[15]], f[268], {
        'phone': rix8,
        'role_id': wix8$p,
        'uid': t1W$[f[89]],
        'game_pkg': t1W$[f[24]],
        'partner_id': t1W$[f[23]],
        'server_id': st87wr
    }, uajqo, 0x2, null, function () {
        return !![];
    });
}, window[f[269]] = function (pn$x) {
    window['t1$XH'] = pn$x, window['t1$XH'] && window[f[270]] && (console[f[75]](f[271] + window[f[270]][f[272]]), window['t1$XH'](window[f[270]]), window[f[270]] = null), setTimeout(() => {
        wx[f[273]]({
            'menus': [f[274], f[275]]
        });
    }, 0x7d0);
}, window['t1$HX'] = function (mju6y, stk7f, x8wir, oayjmu) {
    window[f[276]](f[277], {
        'game_pkg': window['t1W$'][f[24]],
        'role_id': stk7f,
        'server_id': x8wir
    }, oayjmu);
}, window['t1WXH$'] = function (fsd4k, ma6u9y, ym9a6h) {
    function nx$p_(uj1ao) {
        var o1uj = [],
            sr7t4 = [],
            qo1j = ym9a6h || window[f[1]][f[278]];
        for (var dv32bg in qo1j) {
            var v6h30 = Number(dv32bg);
            (!fsd4k || !fsd4k[f[187]] || fsd4k[f[152]](v6h30) != -0x1) && (sr7t4[f[279]](qo1j[dv32bg]), o1uj[f[279]]([v6h30, 0x3]));
        }
        window['t18H$XW'](window[f[280]], f[281]) >= 0x0 ? (console[f[53]](f[282]), Sv690[f[283]] && Sv690[f[283]](sr7t4, function (fbsdk4) {
            console[f[53]](f[284]), console[f[53]](fbsdk4);
            if (fbsdk4 && fbsdk4[f[151]] == f[285]) for (var x$w8ip in qo1j) {
                if (fbsdk4[qo1j[x$w8ip]] == f[286]) {
                    var dkf7s = Number(x$w8ip);
                    for (var t7$8wr = 0x0; t7$8wr < o1uj[f[187]]; t7$8wr++) {
                        if (o1uj[t7$8wr][0x0] == dkf7s) {
                            o1uj[t7$8wr][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['t18H$XW'](window[f[280]], f[287]) >= 0x0 ? wx[f[288]]({
                'withSubscriptions': !![],
                'success': function (bd2fkg) {
                    var tr8ws7 = bd2fkg[f[289]][f[290]];
                    if (tr8ws7) {
                        console[f[53]](f[291]), console[f[53]](tr8ws7);
                        for (var yuaj6m in qo1j) {
                            if (tr8ws7[qo1j[yuaj6m]] == f[286]) {
                                var fbgd2k = Number(yuaj6m);
                                for (var ir$8 = 0x0; ir$8 < o1uj[f[187]]; ir$8++) {
                                    if (o1uj[ir$8][0x0] == fbgd2k) {
                                        o1uj[ir$8][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[f[53]](o1uj), ma6u9y && ma6u9y(o1uj);
                    } else console[f[53]](f[292]), console[f[53]](bd2fkg), console[f[53]](o1uj), ma6u9y && ma6u9y(o1uj);
                },
                'fail': function () {
                    console[f[53]](f[293]), console[f[53]](o1uj), ma6u9y && ma6u9y(o1uj);
                }
            }) : (console[f[53]](f[294] + window[f[280]]), console[f[53]](o1uj), ma6u9y && ma6u9y(o1uj));
        })) : (console[f[53]](f[295] + window[f[280]]), console[f[53]](o1uj), ma6u9y && ma6u9y(o1uj)), wx[f[296]](nx$p_);
    }
    wx[f[297]](nx$p_);
}, window['t1WX$H'] = {
    'isSuccess': ![],
    'level': f[298],
    'isCharging': ![]
}, window['t1WHX$'] = function (wix8p) {
    wx[f[299]]({
        'success': function (i8xrw$) {
            var m9au6y = window['t1WX$H'];
            m9au6y[f[300]] = !![], m9au6y[f[301]] = Number(i8xrw$[f[301]])[f[302]](0x0), m9au6y[f[303]] = i8xrw$[f[303]], wix8p && wix8p(m9au6y[f[300]], m9au6y[f[301]], m9au6y[f[303]]);
        },
        'fail': function (kgbd4f) {
            console[f[53]](f[304], kgbd4f[f[151]]);
            var tfks47 = window['t1WX$H'];
            wix8p && wix8p(tfks47[f[300]], tfks47[f[301]], tfks47[f[303]]);
        }
    });
}, window[f[305]] = function (yjoaum) {
    wx[f[305]]({
        'success': function (v32gh) {
            yjoaum && yjoaum(!![], v32gh);
        },
        'fail': function (rx8t$w) {
            yjoaum && yjoaum(![], rx8t$w);
        }
    });
}, window[f[306]] = function (_ix$np) {
    if (_ix$np) wx[f[306]](_ix$np);
}, window[f[307]] = function (h30y69) {
    wx[f[307]](h30y69);
}, window[f[276]] = function (iwr8, ghv230, _ip8x$, r7wts4, bvd32, fsk, myjou, mu6ja) {
    if (r7wts4 == undefined) r7wts4 = 0x1;
    wx[f[107]]({
        'url': iwr8,
        'method': myjou || f[308],
        'responseType': f[309],
        'data': ghv230,
        'header': { 'content-type': mu6ja || f[109] },
        'success': function (oaumy) {
            DEBUG && console[f[53]](f[310], iwr8, info, oaumy);
            if (oaumy && oaumy[f[311]] == 0xc8) {
                var dfs74 = oaumy[f[73]];
                !fsk || fsk(dfs74) ? _ip8x$ && _ip8x$(dfs74) : window[f[312]](iwr8, ghv230, _ip8x$, r7wts4, bvd32, fsk, oaumy);
            } else window[f[312]](iwr8, ghv230, _ip8x$, r7wts4, bvd32, fsk, oaumy);
        },
        'fail': function (ju1qo) {
            DEBUG && console[f[53]](f[313], iwr8, info, ju1qo), window[f[312]](iwr8, ghv230, _ip8x$, r7wts4, bvd32, fsk, ju1qo);
        },
        'complete': function () {}
    });
}, window[f[312]] = function (_inx$, jqamu, xrwi$, wr$t8, ws4r, ya69h, g2fbvd) {
    wr$t8 - 0x1 > 0x0 ? setTimeout(function () {
        window[f[276]](_inx$, jqamu, xrwi$, wr$t8 - 0x1, ws4r, ya69h);
    }, 0x3e8) : ws4r && ws4r(JSON[f[94]]({
        'url': _inx$,
        'response': g2fbvd
    }));
}, window[f[314]] = function (s4rt7w, yhm9a6, eqz51l, kfst7, stf74k, vb2gdf, bgdk2) {
    !eqz51l && (eqz51l = {});
    var x_8i$p = Math[f[315]](Date[f[37]]() / 0x3e8);
    eqz51l[f[178]] = x_8i$p, eqz51l[f[316]] = yhm9a6;
    var y6mha9 = Object[f[317]](eqz51l)[f[318]](),
        t8w$r7 = '',
        dgv3b2 = '';
    for (var ezl1qo = 0x0; ezl1qo < y6mha9[f[187]]; ezl1qo++) {
        t8w$r7 = t8w$r7 + (ezl1qo == 0x0 ? '' : '&') + y6mha9[ezl1qo] + eqz51l[y6mha9[ezl1qo]], dgv3b2 = dgv3b2 + (ezl1qo == 0x0 ? '' : '&') + y6mha9[ezl1qo] + '=' + encodeURIComponent(eqz51l[y6mha9[ezl1qo]]);
    }
    t8w$r7 = t8w$r7 + t1W$[f[21]];
    var vdb2g = f[319] + md5(t8w$r7);
    send(s4rt7w + '?' + dgv3b2 + (dgv3b2 == '' ? '' : '&') + vdb2g, null, kfst7, stf74k, vb2gdf, bgdk2 || function (lo1jqu) {
        return lo1jqu[f[74]] == f[167];
    }, null, f[320]);
}, window['t1WH$X'] = function (fsdk47, mya6h) {
    var a9myu6 = 0x0;
    t1W$[f[30]] && (a9myu6 = t1W$[f[30]][f[91]]), sendApi(t1W$[f[17]], f[321], {
        'partnerId': t1W$[f[23]],
        'gamePkg': t1W$[f[24]],
        'logTime': Math[f[315]](Date[f[37]]() / 0x3e8),
        'platformUid': t1W$[f[174]],
        'type': fsdk47,
        'serverId': a9myu6
    }, null, 0x2, null, function () {
        return !![];
    });
}, window['t1W$XH'] = function (f7kd4) {
    sendApi(t1W$[f[15]], f[322], {
        'partner_id': t1W$[f[23]],
        'uid': t1W$[f[89]],
        'version': t1W$[f[10]],
        'game_pkg': t1W$[f[24]],
        'device': t1W$[f[25]]
    }, t1W$HX, t1H$W, t1$X);
}, window['t1W$HX'] = function (gd2f) {
    if (gd2f && gd2f[f[74]] === f[167] && gd2f[f[73]]) {
        gd2f[f[73]][f[323]]({
            'id': -0x2,
            'name': f[324]
        }), gd2f[f[73]][f[323]]({
            'id': -0x1,
            'name': f[325]
        }), t1W$[f[326]] = gd2f[f[73]];
        if (window[f[327]]) window[f[327]][f[328]]();
    } else {
        t1W$[f[329]] = ![];
        var fbgd4k = gd2f ? gd2f[f[74]] : '';
        window[f[83]](0x7, f[330] + fbgd4k), window['t1XHW$'](f[331] + fbgd4k);
    }
}, window[f[332]] = function (st7f) {
    sendApi(t1W$[f[15]], f[333], {
        'partner_id': t1W$[f[23]],
        'uid': t1W$[f[89]],
        'version': t1W$[f[10]],
        'game_pkg': t1W$[f[24]],
        'device': t1W$[f[25]]
    }, t1XWH, t1H$W, t1$X);
}, window[f[334]] = function (lzj1oq) {
    t1W$[f[335]] = ![];
    if (lzj1oq && lzj1oq[f[74]] === f[167] && lzj1oq[f[73]]) {
        for (var oumayj = 0x0; oumayj < lzj1oq[f[73]][f[187]]; oumayj++) {
            lzj1oq[f[73]][oumayj][f[210]] = t1WHX(lzj1oq[f[73]][oumayj]);
        }
        t1W$[f[27]][-0x1] = window[f[336]](lzj1oq[f[73]]), window[f[327]][f[337]](-0x1);
    } else {
        var umqajo = lzj1oq ? lzj1oq[f[74]] : '';
        window[f[83]](0x8, f[338] + umqajo), window['t1XHW$'](f[339] + umqajo);
    }
}, window[f[340]] = function (zq5) {
    sendApi(t1W$[f[15]], f[333], {
        'partner_id': t1W$[f[23]],
        'uid': t1W$[f[89]],
        'version': t1W$[f[10]],
        'game_pkg': t1W$[f[24]],
        'device': t1W$[f[25]]
    }, zq5, t1H$W, t1$X);
}, window[f[341]] = function (t8$w, aym6uj) {
    sendApi(t1W$[f[15]], f[342], {
        'partner_id': t1W$[f[23]],
        'uid': t1W$[f[89]],
        'version': t1W$[f[10]],
        'game_pkg': t1W$[f[24]],
        'device': t1W$[f[25]],
        'server_group_id': aym6uj
    }, t1HWX, t1H$W, t1$X);
}, window[f[343]] = function ($px8_) {
    t1W$[f[335]] = ![];
    if ($px8_ && $px8_[f[74]] === f[167] && $px8_[f[73]] && $px8_[f[73]][f[73]]) {
        var w8i$x = $px8_[f[73]][f[344]],
            ql1zo = [];
        for (var zl1q5 = 0x0; zl1q5 < $px8_[f[73]][f[73]][f[187]]; zl1q5++) {
            $px8_[f[73]][f[73]][zl1q5][f[210]] = t1WHX($px8_[f[73]][f[73]][zl1q5]), (ql1zo[f[187]] == 0x0 || $px8_[f[73]][f[73]][zl1q5][f[210]] != 0x0) && (ql1zo[ql1zo[f[187]]] = $px8_[f[73]][f[73]][zl1q5]);
        }
        t1W$[f[27]][w8i$x] = window[f[336]](ql1zo), window[f[327]][f[337]](w8i$x);
    } else {
        var ujmoa = $px8_ ? $px8_[f[74]] : '';
        window[f[83]](0x9, f[345] + ujmoa), window['t1XHW$'](f[346] + ujmoa);
    }
}, window['t18H$W'] = function (qmoau) {
    sendApi(t1W$[f[15]], f[347], {
        'partner_id': t1W$[f[23]],
        'uid': t1W$[f[89]],
        'version': t1W$[f[10]],
        'game_pkg': t1W$[f[24]],
        'device': t1W$[f[25]]
    }, reqServerRecommendCallBack, t1H$W, t1$X);
}, window[f[348]] = function (k2bdgf) {
    t1W$[f[335]] = ![];
    if (k2bdgf && k2bdgf[f[74]] === f[167] && k2bdgf[f[73]]) {
        for (var jomaq = 0x0; jomaq < k2bdgf[f[73]][f[187]]; jomaq++) {
            k2bdgf[f[73]][jomaq][f[210]] = t1WHX(k2bdgf[f[73]][jomaq]);
        }
        t1W$[f[27]][-0x2] = window[f[336]](k2bdgf[f[73]]), window[f[327]][f[337]](-0x2);
    } else {
        var t4ks7r = k2bdgf ? k2bdgf[f[74]] : '';
        window[f[83]](0xa, f[349] + t4ks7r), alert(f[350] + t4ks7r);
    }
}, window[f[336]] = function (dg2fvb) {
    return dg2fvb;
}, window[f[351]] = function (jmuyao, p_xni$) {
    jmuyao = jmuyao || t1W$[f[30]][f[91]], sendApi(t1W$[f[15]], f[352], {
        'type': '4',
        'game_pkg': t1W$[f[24]],
        'server_id': jmuyao
    }, p_xni$);
}, window[f[353]] = function ($7t8w, ay9u6, m6u9, qjz1ol) {
    m6u9 = m6u9 || t1W$[f[30]][f[91]], sendApi(t1W$[f[15]], f[354], {
        'type': $7t8w,
        'game_pkg': ay9u6,
        'server_id': m6u9
    }, qjz1ol);
}, window[f[355]] = function (r7tk4, gvfd) {
    sendApi(t1W$[f[15]], f[356], { 'game_pkg': r7tk4 }, gvfd);
}, window[f[357]] = function (g2h03) {
    if (g2h03) {
        if (g2h03[f[210]] == 0x1) {
            if (g2h03[f[358]] == 0x3) return 0x3;else return g2h03[f[358]] == 0x1 ? 0x2 : 0x1;
        } else return g2h03[f[210]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window['t1$XHW'] = function (ouqjma, vh936) {
    t1W$[f[359]] = {
        'step': ouqjma,
        'server_id': vh936
    };
    var sdkbf = this;
    t1XWH$({ 'title': f[360] }), sendApi(t1W$[f[15]], f[361], {
        'partner_id': t1W$[f[23]],
        'uid': t1W$[f[89]],
        'game_pkg': t1W$[f[24]],
        'server_id': vh936,
        'platform': t1W$[f[173]],
        'platform_uid': t1W$[f[174]],
        'check_login_time': t1W$[f[177]],
        'check_login_sign': t1W$[f[175]],
        'version_name': t1W$[f[129]]
    }, t1$XWH, t1H$W, t1$X, function (x$_p8) {
        return x$_p8[f[74]] == f[167] || x$_p8[f[75]] == f[362] || x$_p8[f[75]] == f[363];
    });
}, window['t1$XWH'] = function (w7$t8) {
    var ujoa1q = this;
    if (w7$t8 && w7$t8[f[74]] === f[167] && w7$t8[f[73]]) {
        var oqlu1 = t1W$[f[30]];
        oqlu1[f[364]] = t1W$[f[28]], oqlu1[f[176]] = String(w7$t8[f[73]][f[365]]), oqlu1[f[36]] = parseInt(w7$t8[f[73]][f[178]]);
        if (w7$t8[f[73]][f[366]]) oqlu1[f[366]] = parseInt(w7$t8[f[73]][f[366]]);else oqlu1[f[366]] = parseInt(w7$t8[f[73]][f[91]]);
        oqlu1[f[367]] = 0x0, oqlu1[f[90]] = t1W$[f[223]], oqlu1[f[368]] = w7$t8[f[73]][f[369]], oqlu1[f[370]] = w7$t8[f[73]][f[370]];
        if (w7$t8[f[73]][f[371]]) oqlu1[f[371]] = parseInt(w7$t8[f[73]][f[371]]);
        console[f[53]](f[372] + JSON[f[94]](oqlu1[f[370]])), t1W$[f[196]] == 0x1 && oqlu1[f[370]] && oqlu1[f[370]][f[373]] == 0x1 && (t1W$[f[374]] = 0x1, window[f[70]][f[71]]['t18$W']()), t1$HXW();
    } else {
        if (t1W$[f[359]][f[375]] >= 0x3) {
            var maj6 = w7$t8 ? w7$t8[f[74]] : '';
            window[f[83]](0xc, f[376] + maj6), t1$X(JSON[f[94]](w7$t8)), window['t1XHW$'](f[377] + maj6);
        } else sendApi(t1W$[f[15]], f[149], {
            'platform': t1W$[f[13]],
            'partner_id': t1W$[f[23]],
            'token': t1W$[f[146]],
            'game_pkg': t1W$[f[24]],
            'deviceId': t1W$[f[25]],
            'scene': f[150] + t1W$[f[26]]
        }, function (oleq1) {
            if (!oleq1 || oleq1[f[74]] != f[167]) {
                window['t1XHW$'](f[169] + oleq1 && oleq1[f[74]]);
                return;
            }
            t1W$[f[175]] = String(oleq1[f[176]]), t1W$[f[177]] = String(oleq1[f[178]]), setTimeout(function () {
                t1$XHW(t1W$[f[359]][f[375]] + 0x1, t1W$[f[359]][f[91]]);
            }, 0x5dc);
        }, t1H$W, t1$X, function (hvg302) {
            return hvg302[f[74]] == f[167] || hvg302[f[74]] == f[378];
        });
    }
}, window['t1$HXW'] = function () {
    ServerLoading[f[71]][f[215]](t1W$[f[196]]), window['t1H$'] = !![], window['t1$WXH']();
}, window['t1$HWX'] = function () {
    if (window['t1$H'] && window['t1WH$'] && window[f[47]] && window[f[48]] && window['t1W$H'] && window[f[50]]) {
        if (!window[f[379]][f[71]]) {
            console[f[53]](f[380] + window[f[379]][f[71]]);
            var leq1z5 = wx[f[381]](),
                k4bgdf = leq1z5[f[272]] ? leq1z5[f[272]] : 0x0,
                uoamjq = {
                'cdn': window['t1W$'][f[90]],
                'spareCdn': window['t1W$'][f[135]],
                'newRegister': window['t1W$'][f[196]],
                'wxPC': window['t1W$'][f[46]],
                'wxIOS': window['t1W$'][f[44]],
                'wxAndroid': window['t1W$'][f[45]],
                'wxParam': {
                    'limitLoad': window['t1W$']['t18XH$W'],
                    'benchmarkLevel': window['t1W$']['t18XWH$'],
                    'wxFrom': window[f[1]][f[141]] == f[382] ? 0x1 : 0x0,
                    'wxSDKVersion': window[f[280]]
                },
                'configType': window['t1W$'][f[38]],
                'exposeType': window['t1W$'][f[40]],
                'scene': k4bgdf
            };
            new window[f[379]](uoamjq, window['t1W$'][f[42]], window['t18XHW$']);
        }
    }
}, window['t1$WXH'] = function () {
    if (window['t1$H'] && window['t1WH$'] && window[f[47]] && window[f[48]] && window['t1W$H'] && window[f[50]] && window['t1H$'] && window[f[49]]) {
        t1XW$H();
        if (!t1$HW) {
            t1$HW = !![];
            if (!window[f[379]][f[71]]) window['t1$HWX']();
            var a96ymu = 0x0,
                omajuq = wx[f[383]]();
            omajuq && (window['t1W$'][f[384]] && (a96ymu = omajuq[f[385]]), console[f[75]](f[386] + omajuq[f[385]] + f[387] + omajuq[f[388]] + f[389] + omajuq[f[390]] + f[391] + omajuq[f[392]] + f[393] + omajuq[f[394]] + f[395] + omajuq[f[396]]));
            var ix8w$p = {};
            for (const ipx$_8 in t1W$[f[30]]) {
                ix8w$p[ipx$_8] = t1W$[f[30]][ipx$_8];
            }
            var k7t4fs = {
                'channel': window['t1W$'][f[29]],
                'account': window['t1W$'][f[89]],
                'userId': window['t1W$'][f[172]],
                'cdn': window['t1W$'][f[90]],
                'data': window['t1W$'][f[73]],
                'package': window['t1W$'][f[9]],
                'newRegister': window['t1W$'][f[196]],
                'pkgName': window['t1W$'][f[24]],
                'partnerId': window['t1W$'][f[23]],
                'platform_uid': window['t1W$'][f[174]],
                'deviceId': window['t1W$'][f[25]],
                'selectedServer': ix8w$p,
                'configType': window['t1W$'][f[38]],
                'exposeType': window['t1W$'][f[40]],
                'debugUsers': window['t1W$'][f[34]],
                'wxMenuTop': a96ymu,
                'wxShield': window['t1W$'][f[43]],
                'wx_channel': window['t1W$'][f[147]]
            };
            if (window[f[226]]) for (var fb4sd in window[f[226]]) {
                k7t4fs[fb4sd] = window[f[226]][fb4sd];
            }
            window[f[379]][f[71]]['t1$W8'](k7t4fs);
            if (t1W$[f[30]] && t1W$[f[30]][f[91]]) localStorage[f[397]](f[181] + t1W$[f[24]] + t1W$[f[89]], t1W$[f[30]][f[91]]);
        }
    } else console[f[75]](f[398] + window['t1$H'] + f[399] + window['t1WH$'] + f[400] + window[f[47]] + f[401] + window[f[48]] + f[402] + window['t1W$H'] + f[403] + window[f[50]] + f[404] + window['t1H$'] + f[405] + window[f[49]]);
};