var f = wx.$B;
import S$piw8x from '../no24o/a9y.js';
window[f[0]] = { 'wxVersion': window[f[1]][f[2]] }, window[f[3]] = ![], window['t1$W'] = 0x1, window[f[4]] = 0x1, window['t1HW$'] = !![], window[f[5]] = !![], window['t18XHW$'] = '', window[f[6]] = ![], window['t1W$'] = {
    'base_cdn': f[7],
    'cdn': f[7]
}, t1W$[f[8]] = {}, t1W$[f[9]] = '0', t1W$[f[10]] = window[f[0]][f[11]], t1W$[f[12]] = '', t1W$['os'] = '1', t1W$[f[13]] = f[14], t1W$[f[15]] = f[16], t1W$[f[17]] = f[18], t1W$[f[19]] = f[20], t1W$[f[21]] = f[22], t1W$[f[23]] = '1', t1W$[f[24]] = '', t1W$[f[25]] = '', t1W$[f[26]] = 0x0, t1W$[f[27]] = {}, t1W$[f[28]] = parseInt(t1W$[f[23]]), t1W$[f[29]] = t1W$[f[23]], t1W$[f[30]] = {}, t1W$[f[31]] = f[32], t1W$[f[33]] = ![], t1W$[f[34]] = f[35], t1W$[f[36]] = Date[f[37]](), t1W$[f[38]] = f[39], t1W$[f[40]] = '_a', t1W$[f[41]] = '', t1W$[f[42]] = 0x2, t1W$[f[43]] = 0x7c1, t1W$[f[11]] = window[f[0]][f[11]], t1W$[f[44]] = ![], t1W$[f[45]] = ![], t1W$[f[46]] = ![], t1W$[f[47]] = ![], window['t1H$W'] = 0x5, window['t1H$'] = ![], window['t1$H'] = ![], window['t1WH$'] = ![], window[f[48]] = ![], window[f[49]] = ![], window['t1W$H'] = ![], window[f[50]] = ![], window[f[51]] = ![], window['t1$HW'] = ![], window[f[52]] = null, window[f[53]] = function (jyum6a) {
    console[f[54]](f[53], jyum6a), wx[f[55]]({}), wx[f[56]]({
        'title': f[57],
        'content': jyum6a,
        'success'(x_8i$) {
            if (x_8i$[f[58]]) console[f[54]](f[59]);else x_8i$[f[60]] && console[f[54]](f[61]);
        }
    });
}, window['t1XHW$'] = function (sw74t) {
    console[f[54]](f[62], sw74t), t1XW$H(), wx[f[56]]({
        'title': f[57],
        'content': sw74t,
        'confirmText': f[63],
        'cancelText': f[64],
        'success'(t$r7) {
            if (t$r7[f[58]]) window[f[65]]();else t$r7[f[60]] && (console[f[54]](f[66]), wx[f[67]]({}));
        }
    });
}, window[f[68]] = function (gkb4) {
    console[f[54]](f[68], gkb4), wx[f[56]]({
        'title': f[57],
        'content': gkb4,
        'confirmText': f[69],
        'showCancel': ![],
        'complete'(o1ulq) {
            console[f[54]](f[66]), wx[f[67]]({});
        }
    });
}, window['t1XH$W'] = ![], window['t1XWH$'] = function (v3690h) {
    window['t1XH$W'] = !![], wx[f[70]](v3690h);
}, window['t1XW$H'] = function () {
    window['t1XH$W'] && (window['t1XH$W'] = ![], wx[f[55]]({}));
}, window['t1X$HW'] = function (h3v96) {
    window[f[71]][f[72]]['t1X$HW'](h3v96);
}, window[f[73]] = function (g320vh, i_npx$) {
    S$piw8x[f[73]](g320vh, function (y6mjau) {
        y6mjau && y6mjau[f[74]] ? y6mjau[f[74]][f[75]] == 0x1 ? i_npx$(!![]) : (i_npx$(![]), console[f[76]](f[77] + y6mjau[f[74]][f[78]])) : console[f[54]](f[73], y6mjau);
    });
}, window['t1X$WH'] = function (olqze1) {
    console[f[54]](f[79], olqze1);
}, window['t1XW$'] = function ($ixw8) {}, window['t1X$W'] = function (ip8$x, uqja1o, ymu6aj) {}, window['t1X$'] = function (rt47) {
    console[f[54]](f[80], rt47), window[f[71]][f[72]][f[81]](), window[f[71]][f[72]][f[82]](), window[f[71]][f[72]][f[83]](), window[f[84]]();
}, window['t1$X'] = function (ks7fd) {
    window[f[85]](0xe, f[86] + ks7fd), window['t1XHW$'](f[87]);
    var ujql1o = {
        'id': window['t1W$'][f[88]],
        'role': window['t1W$'][f[89]],
        'level': window['t1W$'][f[90]],
        'account': window['t1W$'][f[91]],
        'version': window['t1W$'][f[43]],
        'cdn': window['t1W$'][f[92]],
        'pkgName': window['t1W$'][f[24]],
        'gamever': window[f[1]][f[2]],
        'serverid': window['t1W$'][f[30]] ? window['t1W$'][f[30]][f[93]] : 0x0,
        'systemInfo': window[f[94]],
        'error': f[95],
        'stack': ks7fd ? ks7fd : f[87]
    },
        ay6m = JSON[f[96]](ujql1o);
    console[f[97]](f[98] + ay6m), window[f[31]](ay6m);
}, window[f[85]] = function (_$8xi, stwr47) {
    sendApi(t1W$[f[17]], f[99], {
        'game_pkg': t1W$[f[24]],
        'partner_id': t1W$[f[23]],
        'server_id': t1W$[f[30]] && t1W$[f[30]][f[93]] > 0x0 ? t1W$[f[30]][f[93]] : 0x0,
        'uid': t1W$[f[91]] > 0x0 ? t1W$[f[91]] : 0x0,
        'type': _$8xi,
        'info': stwr47
    });
}, window['t1WX$'] = function (g23vb0) {
    var a69mh = JSON[f[100]](g23vb0);
    a69mh[f[101]] = window[f[1]][f[2]], a69mh[f[102]] = window['t1W$'][f[30]] ? window['t1W$'][f[30]][f[93]] : 0x0, a69mh[f[94]] = window[f[94]];
    var zl1q5e = JSON[f[96]](a69mh);
    console[f[97]](f[103] + zl1q5e), window[f[31]](zl1q5e);
}, window['t1W$X'] = function (rk4, hamy9) {
    var fdgv = {
        'id': window['t1W$'][f[88]],
        'role': window['t1W$'][f[89]],
        'level': window['t1W$'][f[90]],
        'account': window['t1W$'][f[91]],
        'version': window['t1W$'][f[43]],
        'cdn': window['t1W$'][f[92]],
        'pkgName': window['t1W$'][f[24]],
        'gamever': window[f[1]][f[2]],
        'serverid': window['t1W$'][f[30]] ? window['t1W$'][f[30]][f[93]] : 0x0,
        'systemInfo': window[f[94]],
        'error': rk4,
        'stack': hamy9
    },
        fk47sd = JSON[f[96]](fdgv);
    console[f[104]](f[105] + fk47sd), window[f[31]](fk47sd);
}, window[f[31]] = function (dkbg) {
    if (window['t1W$'][f[106]] == f[107]) return;
    var omuaj = t1W$[f[31]] + f[108] + t1W$[f[91]];
    wx[f[109]]({
        'url': omuaj,
        'method': f[110],
        'data': dkbg,
        'header': {
            'content-type': f[111],
            'cache-control': f[112]
        },
        'success': function (kd4sbf) {
            DEBUG && console[f[54]](f[113], omuaj, dkbg, kd4sbf);
        },
        'fail': function (wr8tx) {
            DEBUG && console[f[54]](f[113], omuaj, dkbg, wr8tx);
        },
        'complete': function () {}
    });
}, window[f[114]] = function () {
    function maqujo() {
        return ((0x1 + Math[f[115]]()) * 0x10000 | 0x0)[f[116]](0x10)[f[117]](0x1);
    }
    return maqujo() + maqujo() + '-' + maqujo() + '-' + maqujo() + '-' + maqujo() + '+' + maqujo() + maqujo() + maqujo();
}, window[f[65]] = function () {
    console[f[54]](f[118]);
    var y6jmu = S$piw8x[f[119]]();
    t1W$[f[29]] = y6jmu[f[120]], t1W$[f[28]] = y6jmu[f[120]], t1W$[f[23]] = y6jmu[f[120]], t1W$[f[24]] = y6jmu[f[121]];
    var h03vg2 = { 'game_ver': t1W$[f[10]] };
    t1W$[f[25]] = this[f[114]](), t1XWH$({ 'title': f[122] }), S$piw8x[f[123]](h03vg2, this['t1$XW'][f[124]](this));
}, window['t1$XW'] = function (bd4gfk) {
    var lqe1o = bd4gfk[f[125]];
    sdkInitRes = bd4gfk, console[f[54]](f[126] + lqe1o + f[127] + (lqe1o == 0x1) + f[128] + bd4gfk[f[2]] + f[129] + window[f[0]][f[11]] + f[130] + bd4gfk[f[131]]);
    if (!bd4gfk[f[2]] || window['t18H$XW'](window[f[0]][f[11]], bd4gfk[f[2]]) < 0x0) console[f[54]](f[132]), t1W$[f[15]] = f[133], t1W$[f[17]] = f[134], t1W$[f[19]] = f[135], t1W$[f[92]] = f[136], t1W$[f[137]] = f[138], t1W$[f[131]] = bd4gfk[f[131]], t1W$[f[44]] = ![];else window['t18H$XW'](window[f[0]][f[11]], bd4gfk[f[2]]) == 0x0 ? (console[f[54]](f[139]), t1W$[f[15]] = f[16], t1W$[f[17]] = f[18], t1W$[f[19]] = f[20], t1W$[f[92]] = f[140], t1W$[f[137]] = f[138], t1W$[f[131]] = f[141], t1W$[f[44]] = !![]) : (console[f[54]](f[142]), t1W$[f[15]] = f[16], t1W$[f[17]] = f[18], t1W$[f[19]] = f[20], t1W$[f[92]] = f[140], t1W$[f[137]] = f[138], t1W$[f[131]] = f[141], t1W$[f[44]] = ![]);
    t1W$[f[26]] = config[f[143]] ? config[f[143]] : 0x0, this['t1HWX$'](), this['t1HW$X'](), window[f[144]] = 0x5, t1XWH$({ 'title': f[145] }), S$piw8x[f[146]](this['t1$WX'][f[124]](this));
}, window[f[144]] = 0x5, window['t1$WX'] = function (g4dkbf, m0y6) {
    if (g4dkbf == 0x0 && m0y6 && m0y6[f[147]]) {
        t1W$[f[148]] = m0y6[f[147]], t1W$[f[149]] = m0y6[f[149]], t1W$[f[150]] = m0y6[f[150]], t1W$[f[151]] = m0y6[f[151]], t1W$[f[152]] = m0y6[f[152]];
        var r7w4 = this;
        t1XWH$({ 'title': f[153] }), sendApi(t1W$[f[15]], f[154], {
            'platform': t1W$[f[13]],
            'partner_id': t1W$[f[23]],
            'token': m0y6[f[147]],
            'game_pkg': t1W$[f[24]],
            'deviceId': t1W$[f[25]],
            'scene': f[155] + t1W$[f[26]]
        }, this['t1HXW$'][f[124]](this), t1H$W, t1$X);
    } else m0y6 && m0y6[f[156]] && window[f[144]] > 0x0 && (m0y6[f[156]][f[157]](f[158]) != -0x1 || m0y6[f[156]][f[157]](f[159]) != -0x1 || m0y6[f[156]][f[157]](f[160]) != -0x1 || m0y6[f[156]][f[157]](f[161]) != -0x1 || m0y6[f[156]][f[157]](f[162]) != -0x1 || m0y6[f[156]][f[157]](f[163]) != -0x1) ? (window[f[144]]--, S$piw8x[f[146]](this['t1$WX'][f[124]](this))) : (window[f[85]](0x1, f[164] + g4dkbf + f[165] + (m0y6 ? m0y6[f[156]] : '')), window['t1W$X'](f[166], JSON[f[96]]({
        'status': g4dkbf,
        'data': m0y6
    })), window['t1XHW$'](f[167] + (m0y6 && m0y6[f[156]] ? '，' + m0y6[f[156]] : '')));
}, window['t1HXW$'] = function (p$i8w) {
    if (!p$i8w) {
        window[f[85]](0x2, f[168]), window['t1W$X'](f[169], f[170]), window['t1XHW$'](f[171]);
        return;
    }
    if (p$i8w[f[75]] != f[172]) {
        window[f[85]](0x2, f[173] + p$i8w[f[75]]), window['t1W$X'](f[169], JSON[f[96]](p$i8w)), window['t1XHW$'](f[174] + p$i8w[f[75]]);
        return;
    }
    if (p$i8w[f[175]] == 0x1) {
        window['t1XHW$'](f[176]);
        return;
    }
    t1W$[f[177]] = String(p$i8w[f[91]]), t1W$[f[91]] = String(p$i8w[f[91]]), t1W$[f[178]] = String(p$i8w[f[178]]), t1W$[f[29]] = String(p$i8w[f[178]]), t1W$[f[179]] = String(p$i8w[f[179]]), t1W$[f[180]] = String(p$i8w[f[181]]), t1W$[f[182]] = String(p$i8w[f[183]]), t1W$[f[181]] = '';
    var fbds = this;
    t1XWH$({ 'title': f[184] });
    var d2fbgv = localStorage[f[185]](f[186] + t1W$[f[24]] + t1W$[f[91]]);
    if (d2fbgv && d2fbgv != '') {
        var uyma6 = Number(d2fbgv);
        fbds[f[187]](uyma6);
    } else fbds[f[188]]();
}, window[f[188]] = function () {
    var qo1ujl = this;
    sendApi(t1W$[f[15]], f[189], {
        'partner_id': t1W$[f[23]],
        'uid': t1W$[f[91]],
        'version': t1W$[f[10]],
        'game_pkg': t1W$[f[24]],
        'device': t1W$[f[25]]
    }, qo1ujl['t1HX$W'][f[124]](qo1ujl), t1H$W, t1$X);
}, window['t1HX$W'] = function (nxip_$) {
    if (!nxip_$) {
        window[f[85]](0x3, f[190]), window['t1XHW$'](f[190]);
        return;
    }
    if (nxip_$[f[75]] != f[172]) {
        window[f[85]](0x3, f[191] + nxip_$[f[75]]), window['t1XHW$'](f[191] + nxip_$[f[75]]);
        return;
    }
    if (!nxip_$[f[74]] || nxip_$[f[74]][f[192]] == 0x0) {
        window[f[85]](0x3, f[193]), window['t1XHW$'](f[194]);
        return;
    }
    this[f[195]](nxip_$);
}, window[f[187]] = function (ouajmq) {
    var hgv32 = this;
    sendApi(t1W$[f[15]], f[196], {
        'server_id': ouajmq,
        'time': Date[f[37]]() / 0x3e8
    }, hgv32[f[197]][f[124]](hgv32), t1H$W, t1$X);
}, window[f[197]] = function (dkfb4) {
    if (!dkfb4) {
        window[f[85]](0x4, f[198]), this[f[188]]();
        return;
    }
    if (dkfb4[f[75]] != f[172]) {
        window[f[85]](0x4, f[199] + dkfb4[f[75]]), this[f[188]]();
        return;
    }
    if (!dkfb4[f[74]] || dkfb4[f[74]][f[192]] == 0x0) {
        window[f[85]](0x4, f[200]), this[f[188]]();
        return;
    }
    this[f[195]](dkfb4);
}, window[f[195]] = function (wtr7$8) {
    t1W$[f[201]] = wtr7$8[f[202]] != undefined ? wtr7$8[f[202]] : 0x0, t1W$[f[30]] = {
        'server_id': String(wtr7$8[f[74]][0x0][f[93]]),
        'server_name': String(wtr7$8[f[74]][0x0][f[203]]),
        'entry_ip': wtr7$8[f[74]][0x0][f[204]],
        'entry_port': parseInt(wtr7$8[f[74]][0x0][f[205]]),
        'status': t1WHX(wtr7$8[f[74]][0x0]),
        'start_time': wtr7$8[f[74]][0x0][f[206]],
        'maintain_time': wtr7$8[f[74]][0x0][f[207]] ? wtr7$8[f[74]][0x0][f[207]] : '',
        'is_recommend': wtr7$8[f[74]][0x0][f[208]],
        'cdn': t1W$[f[92]]
    }, this['t1$WHX'](), window[f[71]] && window[f[71]][f[72]][f[209]] && window[f[71]][f[72]][f[209]](sdkInitRes[f[210]], sdkInitRes[f[211]], sdkInitRes[f[212]], sdkInitRes[f[213]], sdkInitRes[f[214]]);
}, window['t1$WHX'] = function () {
    if (t1W$[f[201]] == 0x1) {
        var b2fdv = t1W$[f[30]][f[215]];
        if (b2fdv === -0x1 || b2fdv === 0x0) {
            window[f[85]](0xf, f[216] + t1W$[f[30]]['id'] + f[217] + t1W$[f[30]][f[215]]), window['t1XHW$'](b2fdv === -0x1 ? f[218] : f[219]);
            return;
        }
        t1$XHW(0x0, t1W$[f[30]][f[93]]), window[f[71]][f[72]][f[220]](t1W$[f[201]]);
    } else window[f[71]][f[72]][f[221]](), t1XW$H();
    window[f[51]] = !![], window[f[222]](), window['t1$HWX'](), window['t1$WXH']();
}, window['t1HWX$'] = function () {
    sendApi(t1W$[f[15]], f[223], {
        'game_pkg': t1W$[f[24]],
        'version_name': t1W$[f[131]]
    }, this[f[224]][f[124]](this), t1H$W, t1$X);
}, window[f[224]] = function (x8rtw$) {
    if (!x8rtw$) {
        window[f[85]](0x5, f[225]), window['t1XHW$'](f[225]);
        return;
    }
    if (x8rtw$[f[75]] != f[172]) {
        window[f[85]](0x5, f[226] + x8rtw$[f[75]]), window['t1XHW$'](f[226] + x8rtw$[f[75]]);
        return;
    }
    if (!x8rtw$[f[74]] || !x8rtw$[f[74]][f[10]]) {
        window[f[85]](0x5, f[227] + (x8rtw$[f[74]] && x8rtw$[f[74]][f[10]])), window['t1XHW$'](f[227] + (x8rtw$[f[74]] && x8rtw$[f[74]][f[10]]));
        return;
    }
    x8rtw$[f[74]][f[228]] && x8rtw$[f[74]][f[228]][f[192]] > 0xa && (t1W$[f[229]] = x8rtw$[f[74]][f[228]], t1W$[f[92]] = x8rtw$[f[74]][f[228]]), x8rtw$[f[74]][f[10]] && (t1W$[f[43]] = x8rtw$[f[74]][f[10]]), console[f[76]](f[230] + t1W$[f[43]] + f[231] + t1W$[f[131]]), window['t1W$H'] = !![], window['t1$HWX'](), window['t1$WXH']();
}, window[f[232]], window['t1HW$X'] = function () {
    sendApi(t1W$[f[15]], f[233], { 'game_pkg': t1W$[f[24]] }, this['t1H$XW'][f[124]](this), t1H$W, t1$X);
}, window['t1H$XW'] = function (yuaj6) {
    if (yuaj6 && yuaj6[f[75]] === f[172] && yuaj6[f[74]]) {
        window[f[232]] = yuaj6[f[74]];
        for (var ya69m in yuaj6[f[74]]) {
            t1W$[ya69m] = yuaj6[f[74]][ya69m];
        }
    } else window[f[85]](0xb, f[234]), console[f[76]](f[235] + yuaj6[f[75]]);
    window[f[50]] = !![], window[f[222]](), window['t1$WXH']();
}, window[f[222]] = function () {
    if (!window[f[51]] || !window[f[50]]) return;
    var fkt7 = t1W$[f[201]] == 0x1,
        hym69 = t1W$[f[44]],
        uy6jam = t1W$[f[236]] && t1W$[f[236]] > 0x0;
    if (hym69 || fkt7 && uy6jam) {
        var r74tsw = t1W$[f[237]],
            luq1o = r74tsw && r74tsw[f[192]] == 0x9;
        luq1o && (window[f[238]] = r74tsw);
        var rws7 = t1W$[f[239]],
            s7tkf4 = rws7 && rws7[f[240]]('#')[f[192]] == 0x4;
        s7tkf4 && (window[f[241]] = rws7);
    }
}, window[f[84]] = function () {
    window[f[238]] = null, window[f[241]] = null;
}, window[f[242]] = function (kf47s, pw$8ix, x$8wp, ks47tr, juomaq, w7$r8t, skr, qmouj, lo1zj, mqjoua) {
    juomaq = String(juomaq);
    var fbgd = skr,
        a69hy = qmouj;
    t1W$[f[8]][juomaq] = {
        'productid': juomaq,
        'productname': fbgd,
        'productdesc': a69hy,
        'roleid': kf47s,
        'rolename': pw$8ix,
        'rolelevel': x$8wp,
        'price': w7$r8t,
        'callback': lo1zj
    }, sendApi(t1W$[f[19]], f[243], {
        'game_pkg': t1W$[f[24]],
        'server_id': t1W$[f[30]][f[93]],
        'server_name': t1W$[f[30]][f[203]],
        'level': x$8wp,
        'uid': t1W$[f[91]],
        'role_id': kf47s,
        'role_name': pw$8ix,
        'product_id': juomaq,
        'product_name': fbgd,
        'product_desc': a69hy,
        'money': w7$r8t,
        'partner_id': t1W$[f[23]]
    }, toPayCallBack, t1H$W, t1$X);
}, window[f[244]] = function (e5q1) {
    if (e5q1 && (e5q1[f[245]] === 0xc8 || e5q1[f[75]] == f[172])) {
        var r$8ixw = t1W$[f[8]][String(e5q1[f[246]])];
        if (r$8ixw[f[247]]) r$8ixw[f[247]](e5q1[f[246]], e5q1[f[248]], -0x1);
        S$piw8x[f[249]]({
            'cpbill': e5q1[f[248]],
            'productid': e5q1[f[246]],
            'productname': r$8ixw[f[250]],
            'productdesc': r$8ixw[f[251]],
            'serverid': t1W$[f[30]][f[93]],
            'servername': t1W$[f[30]][f[203]],
            'roleid': r$8ixw[f[252]],
            'rolename': r$8ixw[f[253]],
            'rolelevel': r$8ixw[f[254]],
            'price': r$8ixw[f[255]],
            'extension': JSON[f[96]]({ 'cp_order_id': e5q1[f[248]] })
        }, function (fd4s7k, kbgd4) {
            r$8ixw[f[247]] && fd4s7k == 0x0 && r$8ixw[f[247]](e5q1[f[246]], e5q1[f[248]], fd4s7k);
            console[f[76]](JSON[f[96]]({
                'type': f[256],
                'status': fd4s7k,
                'data': e5q1,
                'role_name': r$8ixw[f[253]]
            }));
            if (fd4s7k === 0x0) {} else {
                if (fd4s7k === 0x1) {} else {
                    if (fd4s7k === 0x2) {}
                }
            }
        });
    } else {
        var ksf7t4 = e5q1 ? f[257] + e5q1[f[245]] + f[258] + e5q1[f[75]] + f[259] + e5q1[f[76]] : f[260];
        window[f[85]](0xd, f[261] + ksf7t4), alert(ksf7t4);
    }
}, window['t1H$WX'] = function () {}, window['t1XH$'] = function (inpx_, tw78, uoamq, vh320, h6a9ym) {
    S$piw8x[f[262]](t1W$[f[30]][f[93]], t1W$[f[30]][f[203]] || t1W$[f[30]][f[93]], inpx_, tw78, uoamq), sendApi(t1W$[f[15]], f[263], {
        'game_pkg': t1W$[f[24]],
        'server_id': t1W$[f[30]][f[93]],
        'role_id': inpx_,
        'uid': t1W$[f[91]],
        'role_name': tw78,
        'role_type': vh320,
        'level': uoamq
    });
}, window['t1X$H'] = function (k4fsd7, ljou1, yma9u6, mh0y96, sk4dbf, bkd2g, twr$8, t7kf4s, jumy6a, juyao) {
    t1W$[f[88]] = k4fsd7, t1W$[f[89]] = ljou1, t1W$[f[90]] = yma9u6, S$piw8x[f[264]](t1W$[f[30]][f[93]], t1W$[f[30]][f[203]] || t1W$[f[30]][f[93]], k4fsd7, ljou1, yma9u6), sendApi(t1W$[f[15]], f[265], {
        'game_pkg': t1W$[f[24]],
        'server_id': t1W$[f[30]][f[93]],
        'role_id': k4fsd7,
        'uid': t1W$[f[91]],
        'role_name': ljou1,
        'role_type': mh0y96,
        'level': yma9u6,
        'evolution': sk4dbf
    });
}, window['t1HX$'] = function (h9mya, t74rws, t$7w8, $w8pix, um9ay6, u9am6, m9uya, jyau6m, d47, r$xw) {
    t1W$[f[88]] = h9mya, t1W$[f[89]] = t74rws, t1W$[f[90]] = t$7w8, S$piw8x[f[266]](t1W$[f[30]][f[93]], t1W$[f[30]][f[203]] || t1W$[f[30]][f[93]], h9mya, t74rws, t$7w8), sendApi(t1W$[f[15]], f[265], {
        'game_pkg': t1W$[f[24]],
        'server_id': t1W$[f[30]][f[93]],
        'role_id': h9mya,
        'uid': t1W$[f[91]],
        'role_name': t74rws,
        'role_type': $w8pix,
        'level': t$7w8,
        'evolution': um9ay6
    });
}, window['t1H$X'] = function (r$w8t) {}, window[f[267]] = function (a9yu, j1o) {
    S$piw8x[f[268]](f[268], { 'activity_id': j1o }, function (twr4) {
        a9yu && a9yu(twr4);
    });
}, window[f[269]] = function () {
    S$piw8x[f[269]]();
}, window[f[270]] = function () {
    S$piw8x[f[271]]();
}, window[f[272]] = function (r$8i, rix, tfs74k, r8t7ws, eqz51l, joqlu1, qjua1, $w8t7r) {
    $w8t7r = $w8t7r || t1W$[f[30]][f[93]], sendApi(t1W$[f[15]], f[273], {
        'phone': r$8i,
        'role_id': rix,
        'uid': t1W$[f[91]],
        'game_pkg': t1W$[f[24]],
        'partner_id': t1W$[f[23]],
        'server_id': $w8t7r
    }, qjua1, 0x2, null, function () {
        return !![];
    });
}, window[f[274]] = function (ha96my) {
    window['t1$XH'] = ha96my, window['t1$XH'] && window[f[275]] && (console[f[76]](f[276] + window[f[275]][f[277]]), window['t1$XH'](window[f[275]]), window[f[275]] = null), setTimeout(() => {
        wx[f[278]]({
            'menus': [f[279], f[280]]
        });
    }, 0x7d0);
}, window['t1$HX'] = function (ouyma, vg03h2, iw$, ajuoym) {
    window[f[281]](f[282], {
        'game_pkg': window['t1W$'][f[24]],
        'role_id': vg03h2,
        'server_id': iw$
    }, ajuoym);
}, window['t1WXH$'] = function ($8ip, a9muy6, jyum) {
    function gbfkd2(_ipx$) {
        var dkgf2b = [],
            sd47k = [],
            bg23vd = jyum || window[f[1]][f[283]];
        for (var oaju in bg23vd) {
            var f2gvb = Number(oaju);
            (!$8ip || !$8ip[f[192]] || $8ip[f[157]](f2gvb) != -0x1) && (sd47k[f[284]](bg23vd[oaju]), dkgf2b[f[284]]([f2gvb, 0x3]));
        }
        window['t18H$XW'](window[f[285]], f[286]) >= 0x0 ? (console[f[54]](f[287]), S$piw8x[f[288]] && S$piw8x[f[288]](sd47k, function (kf7) {
            console[f[54]](f[289]), console[f[54]](kf7);
            if (kf7 && kf7[f[156]] == f[290]) for (var kbfs4d in bg23vd) {
                if (kf7[bg23vd[kbfs4d]] == f[291]) {
                    var ol1jzq = Number(kbfs4d);
                    for (var e51zql = 0x0; e51zql < dkgf2b[f[192]]; e51zql++) {
                        if (dkgf2b[e51zql][0x0] == ol1jzq) {
                            dkgf2b[e51zql][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['t18H$XW'](window[f[285]], f[292]) >= 0x0 ? wx[f[293]]({
                'withSubscriptions': !![],
                'success': function ($xriw) {
                    var ws7t = $xriw[f[294]][f[295]];
                    if (ws7t) {
                        console[f[54]](f[296]), console[f[54]](ws7t);
                        for (var pn$ix in bg23vd) {
                            if (ws7t[bg23vd[pn$ix]] == f[291]) {
                                var v093h2 = Number(pn$ix);
                                for (var ts74kf = 0x0; ts74kf < dkgf2b[f[192]]; ts74kf++) {
                                    if (dkgf2b[ts74kf][0x0] == v093h2) {
                                        dkgf2b[ts74kf][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[f[54]](dkgf2b), a9muy6 && a9muy6(dkgf2b);
                    } else console[f[54]](f[297]), console[f[54]]($xriw), console[f[54]](dkgf2b), a9muy6 && a9muy6(dkgf2b);
                },
                'fail': function () {
                    console[f[54]](f[298]), console[f[54]](dkgf2b), a9muy6 && a9muy6(dkgf2b);
                }
            }) : (console[f[54]](f[299] + window[f[285]]), console[f[54]](dkgf2b), a9muy6 && a9muy6(dkgf2b));
        })) : (console[f[54]](f[300] + window[f[285]]), console[f[54]](dkgf2b), a9muy6 && a9muy6(dkgf2b)), wx[f[301]](gbfkd2);
    }
    wx[f[302]](gbfkd2);
}, window['t1WX$H'] = {
    'isSuccess': ![],
    'level': f[303],
    'isCharging': ![]
}, window['t1WHX$'] = function (ymuoj) {
    wx[f[304]]({
        'success': function (jqlo1z) {
            var h963y0 = window['t1WX$H'];
            h963y0[f[305]] = !![], h963y0[f[306]] = Number(jqlo1z[f[306]])[f[307]](0x0), h963y0[f[308]] = jqlo1z[f[308]], ymuoj && ymuoj(h963y0[f[305]], h963y0[f[306]], h963y0[f[308]]);
        },
        'fail': function (a6m9h) {
            console[f[54]](f[309], a6m9h[f[156]]);
            var q1le5z = window['t1WX$H'];
            ymuoj && ymuoj(q1le5z[f[305]], q1le5z[f[306]], q1le5z[f[308]]);
        }
    });
}, window[f[310]] = function (s47rtw) {
    wx[f[310]]({
        'success': function (v39h6) {
            s47rtw && s47rtw(!![], v39h6);
        },
        'fail': function (v2039) {
            s47rtw && s47rtw(![], v2039);
        }
    });
}, window[f[311]] = function (m9a6) {
    if (m9a6) wx[f[311]](m9a6);
}, window[f[312]] = function (v0gb) {
    wx[f[312]](v0gb);
}, window[f[281]] = function (h9m6a, tf7s4, dgvf2, tr78sw, ua9m6, $8xwtr, zjol1q, d32gb) {
    if (tr78sw == undefined) tr78sw = 0x1;
    wx[f[109]]({
        'url': h9m6a,
        'method': zjol1q || f[313],
        'responseType': f[314],
        'data': tf7s4,
        'header': { 'content-type': d32gb || f[111] },
        'success': function (le5q1) {
            DEBUG && console[f[54]](f[315], h9m6a, info, le5q1);
            if (le5q1 && le5q1[f[316]] == 0xc8) {
                var mouyaj = le5q1[f[74]];
                !$8xwtr || $8xwtr(mouyaj) ? dgvf2 && dgvf2(mouyaj) : window[f[317]](h9m6a, tf7s4, dgvf2, tr78sw, ua9m6, $8xwtr, le5q1);
            } else window[f[317]](h9m6a, tf7s4, dgvf2, tr78sw, ua9m6, $8xwtr, le5q1);
        },
        'fail': function (tx8r$w) {
            DEBUG && console[f[54]](f[318], h9m6a, info, tx8r$w), window[f[317]](h9m6a, tf7s4, dgvf2, tr78sw, ua9m6, $8xwtr, tx8r$w);
        },
        'complete': function () {}
    });
}, window[f[317]] = function (l1qozj, wi8$xp, my9a6u, auyomj, zqj1l, _$xip8, gb2fd) {
    auyomj - 0x1 > 0x0 ? setTimeout(function () {
        window[f[281]](l1qozj, wi8$xp, my9a6u, auyomj - 0x1, zqj1l, _$xip8);
    }, 0x3e8) : zqj1l && zqj1l(JSON[f[96]]({
        'url': l1qozj,
        'response': gb2fd
    }));
}, window[f[319]] = function (mh690, aoqujm, i8pw, wtxr8$, w7$r, tr47, w78srt) {
    !i8pw && (i8pw = {});
    var ulqo = Math[f[320]](Date[f[37]]() / 0x3e8);
    i8pw[f[183]] = ulqo, i8pw[f[321]] = aoqujm;
    var gvh203 = Object[f[322]](i8pw)[f[323]](),
        hg03 = '',
        qu1ol = '';
    for (var ozjl = 0x0; ozjl < gvh203[f[192]]; ozjl++) {
        hg03 = hg03 + (ozjl == 0x0 ? '' : '&') + gvh203[ozjl] + i8pw[gvh203[ozjl]], qu1ol = qu1ol + (ozjl == 0x0 ? '' : '&') + gvh203[ozjl] + '=' + encodeURIComponent(i8pw[gvh203[ozjl]]);
    }
    hg03 = hg03 + t1W$[f[21]];
    var g2bdf = f[324] + md5(hg03);
    send(mh690 + '?' + qu1ol + (qu1ol == '' ? '' : '&') + g2bdf, null, wtxr8$, w7$r, tr47, w78srt || function (yua9m) {
        return yua9m[f[75]] == f[172];
    }, null, f[325]);
}, window['t1WH$X'] = function (v3d2bg, g0b3v2) {
    var mayj = 0x0;
    t1W$[f[30]] && (mayj = t1W$[f[30]][f[93]]), sendApi(t1W$[f[17]], f[326], {
        'partnerId': t1W$[f[23]],
        'gamePkg': t1W$[f[24]],
        'logTime': Math[f[320]](Date[f[37]]() / 0x3e8),
        'platformUid': t1W$[f[179]],
        'type': v3d2bg,
        'serverId': mayj
    }, null, 0x2, null, function () {
        return !![];
    });
}, window['t1W$XH'] = function (u1ql) {
    sendApi(t1W$[f[15]], f[327], {
        'partner_id': t1W$[f[23]],
        'uid': t1W$[f[91]],
        'version': t1W$[f[10]],
        'game_pkg': t1W$[f[24]],
        'device': t1W$[f[25]]
    }, t1W$HX, t1H$W, t1$X);
}, window['t1W$HX'] = function (l1ujoq) {
    if (l1ujoq && l1ujoq[f[75]] === f[172] && l1ujoq[f[74]]) {
        l1ujoq[f[74]][f[328]]({
            'id': -0x2,
            'name': f[329]
        }), l1ujoq[f[74]][f[328]]({
            'id': -0x1,
            'name': f[330]
        }), t1W$[f[331]] = l1ujoq[f[74]];
        if (window[f[332]]) window[f[332]][f[333]]();
    } else {
        t1W$[f[334]] = ![];
        var bk2df = l1ujoq ? l1ujoq[f[75]] : '';
        window[f[85]](0x7, f[335] + bk2df), window['t1XHW$'](f[336] + bk2df);
    }
}, window[f[337]] = function (kbf4) {
    sendApi(t1W$[f[15]], f[338], {
        'partner_id': t1W$[f[23]],
        'uid': t1W$[f[91]],
        'version': t1W$[f[10]],
        'game_pkg': t1W$[f[24]],
        'device': t1W$[f[25]]
    }, t1XWH, t1H$W, t1$X);
}, window[f[339]] = function (ajumqo) {
    t1W$[f[340]] = ![];
    if (ajumqo && ajumqo[f[75]] === f[172] && ajumqo[f[74]]) {
        for (var b4kgd = 0x0; b4kgd < ajumqo[f[74]][f[192]]; b4kgd++) {
            ajumqo[f[74]][b4kgd][f[215]] = t1WHX(ajumqo[f[74]][b4kgd]);
        }
        t1W$[f[27]][-0x1] = window[f[341]](ajumqo[f[74]]), window[f[332]][f[342]](-0x1);
    } else {
        var zoqj1l = ajumqo ? ajumqo[f[75]] : '';
        window[f[85]](0x8, f[343] + zoqj1l), window['t1XHW$'](f[344] + zoqj1l);
    }
}, window[f[345]] = function ($tr78w) {
    sendApi(t1W$[f[15]], f[338], {
        'partner_id': t1W$[f[23]],
        'uid': t1W$[f[91]],
        'version': t1W$[f[10]],
        'game_pkg': t1W$[f[24]],
        'device': t1W$[f[25]]
    }, $tr78w, t1H$W, t1$X);
}, window[f[346]] = function (r8w$xi, oayum) {
    sendApi(t1W$[f[15]], f[347], {
        'partner_id': t1W$[f[23]],
        'uid': t1W$[f[91]],
        'version': t1W$[f[10]],
        'game_pkg': t1W$[f[24]],
        'device': t1W$[f[25]],
        'server_group_id': oayum
    }, t1HWX, t1H$W, t1$X);
}, window[f[348]] = function (_xpin) {
    t1W$[f[340]] = ![];
    if (_xpin && _xpin[f[75]] === f[172] && _xpin[f[74]] && _xpin[f[74]][f[74]]) {
        var ujlq1o = _xpin[f[74]][f[349]],
            zelq1 = [];
        for (var y3h096 = 0x0; y3h096 < _xpin[f[74]][f[74]][f[192]]; y3h096++) {
            _xpin[f[74]][f[74]][y3h096][f[215]] = t1WHX(_xpin[f[74]][f[74]][y3h096]), (zelq1[f[192]] == 0x0 || _xpin[f[74]][f[74]][y3h096][f[215]] != 0x0) && (zelq1[zelq1[f[192]]] = _xpin[f[74]][f[74]][y3h096]);
        }
        t1W$[f[27]][ujlq1o] = window[f[341]](zelq1), window[f[332]][f[342]](ujlq1o);
    } else {
        var zoljq1 = _xpin ? _xpin[f[75]] : '';
        window[f[85]](0x9, f[350] + zoljq1), window['t1XHW$'](f[351] + zoljq1);
    }
}, window['t18H$W'] = function (jmaquo) {
    sendApi(t1W$[f[15]], f[352], {
        'partner_id': t1W$[f[23]],
        'uid': t1W$[f[91]],
        'version': t1W$[f[10]],
        'game_pkg': t1W$[f[24]],
        'device': t1W$[f[25]]
    }, reqServerRecommendCallBack, t1H$W, t1$X);
}, window[f[353]] = function (v03hg) {
    t1W$[f[340]] = ![];
    if (v03hg && v03hg[f[75]] === f[172] && v03hg[f[74]]) {
        for (var uojaym = 0x0; uojaym < v03hg[f[74]][f[192]]; uojaym++) {
            v03hg[f[74]][uojaym][f[215]] = t1WHX(v03hg[f[74]][uojaym]);
        }
        t1W$[f[27]][-0x2] = window[f[341]](v03hg[f[74]]), window[f[332]][f[342]](-0x2);
    } else {
        var i$xr = v03hg ? v03hg[f[75]] : '';
        window[f[85]](0xa, f[354] + i$xr), alert(f[355] + i$xr);
    }
}, window[f[341]] = function (xni$) {
    return xni$;
}, window[f[356]] = function (f2bg, x8p$iw) {
    f2bg = f2bg || t1W$[f[30]][f[93]], sendApi(t1W$[f[15]], f[357], {
        'type': '4',
        'game_pkg': t1W$[f[24]],
        'server_id': f2bg
    }, x8p$iw);
}, window[f[358]] = function (u6a9ym, p$ix8_, ujo1l, z5q1e) {
    ujo1l = ujo1l || t1W$[f[30]][f[93]], sendApi(t1W$[f[15]], f[359], {
        'type': u6a9ym,
        'game_pkg': p$ix8_,
        'server_id': ujo1l
    }, z5q1e);
}, window[f[360]] = function (vdf2b, h0936y) {
    sendApi(t1W$[f[15]], f[361], { 'game_pkg': vdf2b }, h0936y);
}, window[f[362]] = function (h9my6a) {
    if (h9my6a) {
        if (h9my6a[f[215]] == 0x1) {
            if (h9my6a[f[363]] == 0x3) return 0x3;else return h9my6a[f[363]] == 0x1 ? 0x2 : 0x1;
        } else return h9my6a[f[215]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window['t1$XHW'] = function (px8$_i, uj1ol) {
    t1W$[f[364]] = {
        'step': px8$_i,
        'server_id': uj1ol
    };
    var i8x$p_ = this;
    t1XWH$({ 'title': f[365] }), sendApi(t1W$[f[15]], f[366], {
        'partner_id': t1W$[f[23]],
        'uid': t1W$[f[91]],
        'game_pkg': t1W$[f[24]],
        'server_id': uj1ol,
        'platform': t1W$[f[178]],
        'platform_uid': t1W$[f[179]],
        'check_login_time': t1W$[f[182]],
        'check_login_sign': t1W$[f[180]],
        'version_name': t1W$[f[131]]
    }, t1$XWH, t1H$W, t1$X, function (dsf74) {
        return dsf74[f[75]] == f[172] || dsf74[f[76]] == f[367] || dsf74[f[76]] == f[368];
    });
}, window['t1$XWH'] = function (hg023v) {
    var $8iwp = this;
    if (hg023v && hg023v[f[75]] === f[172] && hg023v[f[74]]) {
        var i8$rxw = t1W$[f[30]];
        i8$rxw[f[369]] = t1W$[f[28]], i8$rxw[f[181]] = String(hg023v[f[74]][f[370]]), i8$rxw[f[36]] = parseInt(hg023v[f[74]][f[183]]);
        if (hg023v[f[74]][f[371]]) i8$rxw[f[371]] = parseInt(hg023v[f[74]][f[371]]);else i8$rxw[f[371]] = parseInt(hg023v[f[74]][f[93]]);
        i8$rxw[f[372]] = 0x0, i8$rxw[f[92]] = t1W$[f[229]], i8$rxw[f[373]] = hg023v[f[74]][f[374]], i8$rxw[f[375]] = hg023v[f[74]][f[375]];
        if (hg023v[f[74]][f[376]]) i8$rxw[f[376]] = parseInt(hg023v[f[74]][f[376]]);
        console[f[54]](f[377] + JSON[f[96]](i8$rxw[f[375]])), t1W$[f[201]] == 0x1 && i8$rxw[f[375]] && i8$rxw[f[375]][f[378]] == 0x1 && (t1W$[f[379]] = 0x1, window[f[71]][f[72]]['t18$W']()), t1$HXW();
    } else {
        if (t1W$[f[364]][f[380]] >= 0x3) {
            var b2g3vd = hg023v ? hg023v[f[75]] : '';
            window[f[85]](0xc, f[381] + b2g3vd), t1$X(JSON[f[96]](hg023v)), window['t1XHW$'](f[382] + b2g3vd);
        } else sendApi(t1W$[f[15]], f[154], {
            'platform': t1W$[f[13]],
            'partner_id': t1W$[f[23]],
            'token': t1W$[f[148]],
            'game_pkg': t1W$[f[24]],
            'deviceId': t1W$[f[25]],
            'scene': f[155] + t1W$[f[26]]
        }, function (wr$t8) {
            if (!wr$t8 || wr$t8[f[75]] != f[172]) {
                window['t1XHW$'](f[174] + wr$t8 && wr$t8[f[75]]);
                return;
            }
            t1W$[f[180]] = String(wr$t8[f[181]]), t1W$[f[182]] = String(wr$t8[f[183]]), setTimeout(function () {
                t1$XHW(t1W$[f[364]][f[380]] + 0x1, t1W$[f[364]][f[93]]);
            }, 0x5dc);
        }, t1H$W, t1$X, function (x8$r) {
            return x8$r[f[75]] == f[172] || x8$r[f[75]] == f[383];
        });
    }
}, window['t1$HXW'] = function () {
    ServerLoading[f[72]][f[220]](t1W$[f[201]]), window['t1H$'] = !![], window['t1$WXH']();
}, window['t1$HWX'] = function () {
    if (window['t1$H'] && window['t1WH$'] && window[f[48]] && window[f[49]] && window['t1W$H'] && window[f[51]]) {
        if (!window[f[384]][f[72]]) {
            console[f[54]](f[385] + window[f[384]][f[72]]);
            var p_$xni = wx[f[386]](),
                ojaqu1 = p_$xni[f[277]] ? p_$xni[f[277]] : 0x0,
                xtr$8 = {
                'cdn': window['t1W$'][f[92]],
                'spareCdn': window['t1W$'][f[137]],
                'newRegister': window['t1W$'][f[201]],
                'wxPC': window['t1W$'][f[47]],
                'wxIOS': window['t1W$'][f[45]],
                'wxAndroid': window['t1W$'][f[46]],
                'wxParam': {
                    'limitLoad': window['t1W$']['t18XH$W'],
                    'benchmarkLevel': window['t1W$']['t18XWH$'],
                    'wxFrom': window[f[1]][f[143]] == f[387] ? 0x1 : 0x0,
                    'wxSDKVersion': window[f[285]]
                },
                'configType': window['t1W$'][f[38]],
                'exposeType': window['t1W$'][f[40]],
                'scene': ojaqu1,
                'video_type': window['t1W$'][f[150]],
                'ad_flag': window['t1W$'][f[152]]
            };
            if (window[f[232]]) for (var vg2b in window[f[232]]) {
                if (!xtr$8[vg2b]) xtr$8[vg2b] = window[f[232]][vg2b];
            }
            new window[f[384]](xtr$8, window['t1W$'][f[43]], window['t18XHW$']);
        }
    }
}, window['t1$WXH'] = function () {
    if (window['t1$H'] && window['t1WH$'] && window[f[48]] && window[f[49]] && window['t1W$H'] && window[f[51]] && window['t1H$'] && window[f[50]]) {
        t1XW$H();
        if (!t1$HW) {
            t1$HW = !![];
            if (!window[f[384]][f[72]]) window['t1$HWX']();
            var k4sd7f = 0x0,
                juay6m = wx[f[388]]();
            juay6m && (window['t1W$'][f[389]] && (k4sd7f = juay6m[f[390]]), console[f[76]](f[391] + juay6m[f[390]] + f[392] + juay6m[f[393]] + f[394] + juay6m[f[395]] + f[396] + juay6m[f[397]] + f[398] + juay6m[f[399]] + f[400] + juay6m[f[401]]));
            var eqol1 = {};
            for (const oq1jlz in t1W$[f[30]]) {
                eqol1[oq1jlz] = t1W$[f[30]][oq1jlz];
            }
            var ujmaq = {
                'channel': window['t1W$'][f[29]],
                'account': window['t1W$'][f[91]],
                'userId': window['t1W$'][f[177]],
                'cdn': window['t1W$'][f[92]],
                'data': window['t1W$'][f[74]],
                'package': window['t1W$'][f[9]],
                'newRegister': window['t1W$'][f[201]],
                'pkgName': window['t1W$'][f[24]],
                'partnerId': window['t1W$'][f[23]],
                'platform_uid': window['t1W$'][f[179]],
                'deviceId': window['t1W$'][f[25]],
                'selectedServer': eqol1,
                'configType': window['t1W$'][f[38]],
                'exposeType': window['t1W$'][f[40]],
                'debugUsers': window['t1W$'][f[34]],
                'wxMenuTop': k4sd7f,
                'wxShield': window['t1W$'][f[44]],
                'encryptParam': window['t1W$'][f[41]],
                'wx_channel': window['t1W$'][f[149]],
                'zsy_tp_state': window['t1W$'][f[151]]
            };
            if (window[f[232]]) for (var rixw$ in window[f[232]]) {
                ujmaq[rixw$] = window[f[232]][rixw$];
            }
            window[f[384]][f[72]]['t1$W8'](ujmaq);
            if (t1W$[f[30]] && t1W$[f[30]][f[93]]) localStorage[f[402]](f[186] + t1W$[f[24]] + t1W$[f[91]], t1W$[f[30]][f[93]]);
        }
    } else console[f[76]](f[403] + window['t1$H'] + f[404] + window['t1WH$'] + f[405] + window[f[48]] + f[406] + window[f[49]] + f[407] + window['t1W$H'] + f[408] + window[f[51]] + f[409] + window['t1H$'] + f[410] + window[f[50]]);
};