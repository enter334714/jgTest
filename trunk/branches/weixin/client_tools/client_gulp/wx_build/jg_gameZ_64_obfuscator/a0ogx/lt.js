var f = wx.$B;
import Sxowi1l from '../a0cc/ru6f.js';
window[f[679]] = { 'wxVersion': window[f[541]][f[680]] }, window[f[681]] = ![], window[f[682]] = 0x1, window[f[683]] = 0x1, window[f[684]] = !![], window[f[685]] = !![], window[f[686]] = '', window[f[687]] = ![], window[f[272]] = {
    'base_cdn': f[688],
    'cdn': f[688]
}, t1LO[f[689]] = {}, t1LO[f[690]] = '0', t1LO[f[691]] = window[f[679]][f[335]], t1LO[f[692]] = '', t1LO['os'] = '1', t1LO[f[693]] = f[694], t1LO[f[695]] = f[696], t1LO[f[697]] = f[698], t1LO[f[699]] = f[700], t1LO[f[701]] = f[702], t1LO[f[703]] = '1', t1LO[f[415]] = '', t1LO[f[704]] = '', t1LO[f[705]] = 0x0, t1LO[f[462]] = {}, t1LO[f[706]] = parseInt(t1LO[f[703]]), t1LO[f[707]] = t1LO[f[703]], t1LO[f[273]] = {}, t1LO[f[708]] = f[709], t1LO[f[710]] = ![], t1LO[f[711]] = f[712], t1LO[f[713]] = Date[f[266]](), t1LO[f[714]] = f[715], t1LO[f[716]] = '_a', t1LO[f[717]] = '', t1LO[f[318]] = 0x2, t1LO[f[333]] = 0x7c1, t1LO[f[335]] = window[f[679]][f[335]], t1LO[f[422]] = ![], t1LO[f[718]] = ![], t1LO[f[719]] = ![], t1LO[f[720]] = ![], window[f[721]] = 0x5, window[f[722]] = ![], window[f[723]] = ![], window[f[724]] = ![], window[f[581]] = ![], window[f[594]] = ![], window[f[725]] = ![], window[f[726]] = ![], window[f[727]] = ![], window[f[728]] = ![], window[f[587]] = null, window[f[729]] = function ($47nj9) {
    console[f[424]](f[729], $47nj9), wx[f[730]]({}), wx[f[731]]({
        'title': f[732],
        'content': $47nj9,
        'success'(t9k4p) {
            if (t9k4p[f[733]]) console[f[424]](f[734]);else t9k4p[f[735]] && console[f[424]](f[736]);
        }
    });
}, window[f[737]] = function (bznfr_) {
    console[f[424]](f[738], bznfr_), t1ZLOI(), wx[f[731]]({
        'title': f[732],
        'content': bznfr_,
        'confirmText': f[739],
        'cancelText': f[740],
        'success'(rzd_bf) {
            if (rzd_bf[f[733]]) window[f[741]]();else rzd_bf[f[735]] && (console[f[424]](f[742]), wx[f[426]]({}));
        }
    });
}, window[f[743]] = function (pxhgom) {
    console[f[424]](f[743], pxhgom), wx[f[731]]({
        'title': f[732],
        'content': pxhgom,
        'confirmText': f[744],
        'showCancel': ![],
        'complete'(squ2a8) {
            console[f[424]](f[742]), wx[f[426]]({});
        }
    });
}, window[f[745]] = ![], window[f[746]] = function (lu315) {
    window[f[745]] = !![], wx[f[747]](lu315);
}, window[f[748]] = function () {
    window[f[745]] && (window[f[745]] = ![], wx[f[730]]({}));
}, window[f[575]] = function (y8q2v0) {
    window[f[677]][f[267]][f[575]](y8q2v0);
}, window[f[100]] = function (qv08y, mhpxgo) {
    Sxowi1l[f[100]](qv08y, function (u1l356) {
        u1l356 && u1l356[f[468]] ? u1l356[f[468]][f[467]] == 0x1 ? mhpxgo(!![]) : (mhpxgo(![]), console[f[749]](f[750] + u1l356[f[468]][f[751]])) : console[f[424]](f[100], u1l356);
    });
}, window[f[752]] = function (wlxog) {
    console[f[424]](f[753], wlxog);
}, window[f[324]] = function (oixl) {}, window[f[329]] = function (oxmhgi, sq6u, tpk4) {}, window[f[754]] = function (j$49e) {
    console[f[424]](f[755], j$49e), window[f[677]][f[267]][f[322]](), window[f[677]][f[267]][f[323]](), window[f[677]][f[267]][f[339]](), window[f[756]]();
}, window[f[757]] = function (wgomi) {
    window[f[758]](0xe, f[759] + wgomi), window[f[737]](f[760]);
    var himx = {
        'id': window[f[272]][f[761]],
        'role': window[f[272]][f[762]],
        'level': window[f[272]][f[763]],
        'account': window[f[272]][f[764]],
        'version': window[f[272]][f[333]],
        'cdn': window[f[272]][f[455]],
        'pkgName': window[f[272]][f[415]],
        'gamever': window[f[541]][f[680]],
        'serverid': window[f[272]][f[273]] ? window[f[272]][f[273]][f[83]] : 0x0,
        'systemInfo': window[f[765]],
        'error': f[766],
        'stack': wgomi ? wgomi : f[760]
    },
        w6153 = JSON[f[612]](himx);
    console[f[544]](f[767] + w6153), window[f[708]](w6153);
}, window[f[758]] = function (xigmoh, av8qs) {
    sendApi(t1LO[f[697]], f[768], {
        'game_pkg': t1LO[f[415]],
        'partner_id': t1LO[f[703]],
        'server_id': t1LO[f[273]] && t1LO[f[273]][f[83]] > 0x0 ? t1LO[f[273]][f[83]] : 0x0,
        'uid': t1LO[f[764]] > 0x0 ? t1LO[f[764]] : 0x0,
        'type': xigmoh,
        'info': av8qs
    });
}, window[f[769]] = function (n$94) {
    var w15l63 = JSON[f[770]](n$94);
    w15l63[f[771]] = window[f[541]][f[680]], w15l63[f[772]] = window[f[272]][f[273]] ? window[f[272]][f[273]][f[83]] : 0x0, w15l63[f[765]] = window[f[765]];
    var mhoi = JSON[f[612]](w15l63);
    console[f[544]](f[773] + mhoi), window[f[708]](mhoi);
}, window[f[774]] = function ($n7_zr, lix13) {
    var frzbn_ = {
        'id': window[f[272]][f[761]],
        'role': window[f[272]][f[762]],
        'level': window[f[272]][f[763]],
        'account': window[f[272]][f[764]],
        'version': window[f[272]][f[333]],
        'cdn': window[f[272]][f[455]],
        'pkgName': window[f[272]][f[415]],
        'gamever': window[f[541]][f[680]],
        'serverid': window[f[272]][f[273]] ? window[f[272]][f[273]][f[83]] : 0x0,
        'systemInfo': window[f[765]],
        'error': $n7_zr,
        'stack': lix13
    },
        giowmx = JSON[f[612]](frzbn_);
    console[f[630]](f[775] + giowmx), window[f[708]](giowmx);
}, window[f[708]] = function ($nj_7r) {
    if (window[f[272]][f[776]] == f[777]) return;
    var j_7n$ = t1LO[f[708]] + f[778] + t1LO[f[764]];
    wx[f[779]]({
        'url': j_7n$,
        'method': f[35],
        'data': $nj_7r,
        'header': {
            'content-type': f[780],
            'cache-control': f[781]
        },
        'success': function (tephk) {
            DEBUG && console[f[424]](f[782], j_7n$, $nj_7r, tephk);
        },
        'fail': function (hptek) {
            DEBUG && console[f[424]](f[782], j_7n$, $nj_7r, hptek);
        },
        'complete': function () {}
    });
}, window[f[783]] = function () {
    function fzbnr() {
        return ((0x1 + Math[f[326]]()) * 0x10000 | 0x0)[f[784]](0x10)[f[591]](0x1);
    }
    return fzbnr() + fzbnr() + '-' + fzbnr() + '-' + fzbnr() + '-' + fzbnr() + '+' + fzbnr() + fzbnr() + fzbnr();
}, window[f[741]] = function () {
    console[f[424]](f[785]);
    var k7j9e = Sxowi1l[f[786]]();
    t1LO[f[707]] = k7j9e[f[787]], t1LO[f[706]] = k7j9e[f[787]], t1LO[f[703]] = k7j9e[f[787]], t1LO[f[415]] = k7j9e[f[542]];
    var s6qa8 = { 'game_ver': t1LO[f[691]] };
    t1LO[f[704]] = this[f[783]](), t1ZLIO({ 'title': f[788] }), Sxowi1l[f[95]](s6qa8, this[f[789]][f[331]](this));
}, window[f[789]] = function (t94ekj) {
    var hep4t = t94ekj[f[588]];
    sdkInitRes = t94ekj, console[f[424]](f[790] + hep4t + f[791] + (hep4t == 0x1) + f[792] + t94ekj[f[680]] + f[793] + window[f[679]][f[335]] + f[794] + t94ekj[f[795]]);
    if (!t94ekj[f[680]] || window[f[796]](window[f[679]][f[335]], t94ekj[f[680]]) < 0x0) console[f[424]](f[797]), t1LO[f[695]] = f[798], t1LO[f[697]] = f[799], t1LO[f[699]] = f[800], t1LO[f[455]] = f[801], t1LO[f[802]] = f[803], t1LO[f[795]] = t94ekj[f[795]], t1LO[f[422]] = ![];else window[f[796]](window[f[679]][f[335]], t94ekj[f[680]]) == 0x0 ? (console[f[424]](f[804]), t1LO[f[695]] = f[696], t1LO[f[697]] = f[698], t1LO[f[699]] = f[700], t1LO[f[455]] = f[688], t1LO[f[802]] = f[803], t1LO[f[795]] = f[805], t1LO[f[422]] = !![]) : (console[f[424]](f[806]), t1LO[f[695]] = f[696], t1LO[f[697]] = f[698], t1LO[f[699]] = f[700], t1LO[f[455]] = f[688], t1LO[f[802]] = f[803], t1LO[f[795]] = f[805], t1LO[f[422]] = ![]);
    t1LO[f[705]] = config[f[807]] ? config[f[807]] : 0x0, this[f[808]](), this[f[809]](), window[f[810]] = 0x5, t1ZLIO({ 'title': f[811] }), Sxowi1l[f[19]](this[f[812]][f[331]](this));
}, window[f[810]] = 0x5, window[f[812]] = function (gtho, n479$j) {
    if (gtho == 0x0 && n479$j && n479$j[f[29]]) {
        t1LO[f[813]] = n479$j[f[29]], t1LO[f[814]] = n479$j[f[814]], t1LO[f[815]] = n479$j[f[815]], t1LO[f[816]] = n479$j[f[816]], t1LO[f[817]] = n479$j[f[817]];
        var hopmxg = this;
        t1ZLIO({ 'title': f[818] }), sendApi(t1LO[f[695]], f[819], {
            'platform': t1LO[f[693]],
            'partner_id': t1LO[f[703]],
            'token': n479$j[f[29]],
            'game_pkg': t1LO[f[415]],
            'deviceId': t1LO[f[704]],
            'scene': f[820] + t1LO[f[705]]
        }, this[f[821]][f[331]](this), t1IOL, t1OZ);
    } else n479$j && n479$j[f[822]] && window[f[810]] > 0x0 && (n479$j[f[822]][f[632]](f[823]) != -0x1 || n479$j[f[822]][f[632]](f[824]) != -0x1 || n479$j[f[822]][f[632]](f[825]) != -0x1 || n479$j[f[822]][f[632]](f[826]) != -0x1 || n479$j[f[822]][f[632]](f[827]) != -0x1 || n479$j[f[822]][f[632]](f[828]) != -0x1) ? (window[f[810]]--, Sxowi1l[f[19]](this[f[812]][f[331]](this))) : (window[f[758]](0x1, f[829] + gtho + f[830] + (n479$j ? n479$j[f[822]] : '')), window[f[774]](f[831], JSON[f[612]]({
        'status': gtho,
        'data': n479$j
    })), window[f[737]](f[832] + (n479$j && n479$j[f[822]] ? '，' + n479$j[f[822]] : '')));
}, window[f[821]] = function (li31) {
    if (!li31) {
        window[f[758]](0x2, f[833]), window[f[774]](f[834], f[835]), window[f[737]](f[836]);
        return;
    }
    if (li31[f[467]] != f[466]) {
        window[f[758]](0x2, f[837] + li31[f[467]]), window[f[774]](f[834], JSON[f[612]](li31)), window[f[737]](f[838] + li31[f[467]]);
        return;
    }
    if (li31[f[839]] == 0x1) {
        window[f[737]](f[840]);
        return;
    }
    t1LO[f[28]] = String(li31[f[764]]), t1LO[f[764]] = String(li31[f[764]]), t1LO[f[841]] = String(li31[f[841]]), t1LO[f[707]] = String(li31[f[841]]), t1LO[f[842]] = String(li31[f[842]]), t1LO[f[843]] = String(li31[f[844]]), t1LO[f[845]] = String(li31[f[846]]), t1LO[f[844]] = '';
    var nfz$_ = this;
    t1ZLIO({ 'title': f[847] });
    var sq8av = localStorage[f[420]](f[848] + t1LO[f[415]] + t1LO[f[764]]);
    if (sq8av && sq8av != '') {
        var _frnb = Number(sq8av);
        nfz$_[f[849]](_frnb);
    } else nfz$_[f[850]]();
}, window[f[850]] = function () {
    var j79ek = this;
    sendApi(t1LO[f[695]], f[851], {
        'partner_id': t1LO[f[703]],
        'uid': t1LO[f[764]],
        'version': t1LO[f[691]],
        'game_pkg': t1LO[f[415]],
        'device': t1LO[f[704]]
    }, j79ek[f[852]][f[331]](j79ek), t1IOL, t1OZ);
}, window[f[852]] = function (aqs28v) {
    if (!aqs28v) {
        window[f[758]](0x3, f[853]), window[f[737]](f[853]);
        return;
    }
    if (aqs28v[f[467]] != f[466]) {
        window[f[758]](0x3, f[854] + aqs28v[f[467]]), window[f[737]](f[854] + aqs28v[f[467]]);
        return;
    }
    if (!aqs28v[f[468]] || aqs28v[f[468]][f[303]] == 0x0) {
        window[f[758]](0x3, f[855]), window[f[737]](f[856]);
        return;
    }
    this[f[857]](aqs28v);
}, window[f[849]] = function (wglxi) {
    var q8asu6 = this;
    sendApi(t1LO[f[695]], f[858], {
        'server_id': wglxi,
        'time': Date[f[266]]() / 0x3e8
    }, q8asu6[f[859]][f[331]](q8asu6), t1IOL, t1OZ);
}, window[f[859]] = function (zrb_nf) {
    if (!zrb_nf) {
        window[f[758]](0x4, f[860]), this[f[850]]();
        return;
    }
    if (zrb_nf[f[467]] != f[466]) {
        window[f[758]](0x4, f[861] + zrb_nf[f[467]]), this[f[850]]();
        return;
    }
    if (!zrb_nf[f[468]] || zrb_nf[f[468]][f[303]] == 0x0) {
        window[f[758]](0x4, f[862]), this[f[850]]();
        return;
    }
    this[f[857]](zrb_nf);
}, window[f[857]] = function (pgomhx) {
    t1LO[f[601]] = pgomhx[f[863]] != undefined ? pgomhx[f[863]] : 0x0, t1LO[f[273]] = {
        'server_id': String(pgomhx[f[468]][0x0][f[83]]),
        'server_name': String(pgomhx[f[468]][0x0][f[454]]),
        'entry_ip': pgomhx[f[468]][0x0][f[864]],
        'entry_port': parseInt(pgomhx[f[468]][0x0][f[865]]),
        'status': t1LIZ(pgomhx[f[468]][0x0]),
        'start_time': pgomhx[f[468]][0x0][f[866]],
        'maintain_time': pgomhx[f[468]][0x0][f[362]] ? pgomhx[f[468]][0x0][f[362]] : '',
        'is_recommend': pgomhx[f[468]][0x0][f[357]],
        'cdn': t1LO[f[455]]
    }, this[f[867]](), window[f[677]] && window[f[677]][f[267]][f[585]] && window[f[677]][f[267]][f[585]](sdkInitRes[f[868]], sdkInitRes[f[869]], sdkInitRes[f[870]], sdkInitRes[f[871]], sdkInitRes[f[872]]);
}, window[f[867]] = function () {
    if (t1LO[f[601]] == 0x1) {
        var sqy2v8 = t1LO[f[273]][f[358]];
        if (sqy2v8 === -0x1 || sqy2v8 === 0x0) {
            window[f[758]](0xf, f[873] + t1LO[f[273]]['id'] + f[874] + t1LO[f[273]][f[358]]), window[f[737]](sqy2v8 === -0x1 ? f[875] : f[876]);
            return;
        }
        t1OZIL(0x0, t1LO[f[273]][f[83]]), window[f[677]][f[267]][f[595]](t1LO[f[601]]);
    } else window[f[677]][f[267]][f[593]](), t1ZLOI();
    window[f[727]] = !![], window[f[877]](), window[f[582]](), window[f[583]]();
}, window[f[808]] = function () {
    sendApi(t1LO[f[695]], f[878], {
        'game_pkg': t1LO[f[415]],
        'version_name': t1LO[f[795]]
    }, this[f[879]][f[331]](this), t1IOL, t1OZ);
}, window[f[879]] = function (glw) {
    if (!glw) {
        window[f[758]](0x5, f[880]), window[f[737]](f[880]);
        return;
    }
    if (glw[f[467]] != f[466]) {
        window[f[758]](0x5, f[881] + glw[f[467]]), window[f[737]](f[881] + glw[f[467]]);
        return;
    }
    if (!glw[f[468]] || !glw[f[468]][f[691]]) {
        window[f[758]](0x5, f[882] + (glw[f[468]] && glw[f[468]][f[691]])), window[f[737]](f[882] + (glw[f[468]] && glw[f[468]][f[691]]));
        return;
    }
    glw[f[468]][f[883]] && glw[f[468]][f[883]][f[303]] > 0xa && (t1LO[f[884]] = glw[f[468]][f[883]], t1LO[f[455]] = glw[f[468]][f[883]]), glw[f[468]][f[691]] && (t1LO[f[333]] = glw[f[468]][f[691]]), console[f[749]](f[885] + t1LO[f[333]] + f[886] + t1LO[f[795]]), window[f[725]] = !![], window[f[582]](), window[f[583]]();
}, window[f[887]], window[f[809]] = function () {
    sendApi(t1LO[f[695]], f[888], { 'game_pkg': t1LO[f[415]] }, this[f[889]][f[331]](this), t1IOL, t1OZ);
}, window[f[889]] = function (owlxig) {
    if (owlxig && owlxig[f[467]] === f[466] && owlxig[f[468]]) {
        window[f[887]] = owlxig[f[468]];
        for (var l6u53 in owlxig[f[468]]) {
            t1LO[l6u53] = owlxig[f[468]][l6u53];
        }
    } else window[f[758]](0xb, f[890]), console[f[749]](f[891] + owlxig[f[467]]);
    window[f[726]] = !![], window[f[877]](), window[f[583]]();
}, window[f[877]] = function () {
    if (!window[f[727]] || !window[f[726]]) return;
    var yvq20 = t1LO[f[601]] == 0x1,
        r_7$z = t1LO[f[422]],
        e4p9t = t1LO[f[892]] && t1LO[f[892]] > 0x0;
    if (r_7$z || yvq20 && e4p9t) {
        var wgoil = t1LO[f[893]],
            t4j9k = wgoil && wgoil[f[303]] == 0x9;
        t4j9k && (window[f[894]] = wgoil);
        var bn_rzf = t1LO[f[895]],
            pogxm = bn_rzf && bn_rzf[f[552]]('#')[f[303]] == 0x4;
        pogxm && (window[f[549]] = bn_rzf);
    }
}, window[f[756]] = function () {
    window[f[894]] = null, window[f[549]] = null;
}, window[f[896]] = function (as56, l65w1, s2q8, ixmho, $r97n, sq2yv, $n9j47, q82ysv, _7$jn, gkp) {
    $r97n = String($r97n);
    var wgomx = $n9j47,
        h4pkt = q82ysv;
    t1LO[f[689]][$r97n] = {
        'productid': $r97n,
        'productname': wgomx,
        'productdesc': h4pkt,
        'roleid': as56,
        'rolename': l65w1,
        'rolelevel': s2q8,
        'price': sq2yv,
        'callback': _7$jn
    }, sendApi(t1LO[f[699]], f[897], {
        'game_pkg': t1LO[f[415]],
        'server_id': t1LO[f[273]][f[83]],
        'server_name': t1LO[f[273]][f[454]],
        'level': s2q8,
        'uid': t1LO[f[764]],
        'role_id': as56,
        'role_name': l65w1,
        'product_id': $r97n,
        'product_name': wgomx,
        'product_desc': h4pkt,
        'money': sq2yv,
        'partner_id': t1LO[f[703]]
    }, toPayCallBack, t1IOL, t1OZ);
}, window[f[898]] = function (mkthpe) {
    if (mkthpe && (mkthpe[f[899]] === 0xc8 || mkthpe[f[467]] == f[466])) {
        var iw3xl1 = t1LO[f[689]][String(mkthpe[f[900]])];
        if (iw3xl1[f[901]]) iw3xl1[f[901]](mkthpe[f[900]], mkthpe[f[902]], -0x1);
        Sxowi1l[f[65]]({
            'cpbill': mkthpe[f[902]],
            'productid': mkthpe[f[900]],
            'productname': iw3xl1[f[903]],
            'productdesc': iw3xl1[f[904]],
            'serverid': t1LO[f[273]][f[83]],
            'servername': t1LO[f[273]][f[454]],
            'roleid': iw3xl1[f[905]],
            'rolename': iw3xl1[f[906]],
            'rolelevel': iw3xl1[f[907]],
            'price': iw3xl1[f[908]],
            'extension': JSON[f[612]]({ 'cp_order_id': mkthpe[f[902]] })
        }, function (d_brf, oxi1) {
            iw3xl1[f[901]] && d_brf == 0x0 && iw3xl1[f[901]](mkthpe[f[900]], mkthpe[f[902]], d_brf);
            console[f[749]](JSON[f[612]]({
                'type': f[909],
                'status': d_brf,
                'data': mkthpe,
                'role_name': iw3xl1[f[906]]
            }));
            if (d_brf === 0x0) {} else {
                if (d_brf === 0x1) {} else {
                    if (d_brf === 0x2) {}
                }
            }
        });
    } else {
        var xolw1i = mkthpe ? f[910] + mkthpe[f[899]] + f[911] + mkthpe[f[467]] + f[912] + mkthpe[f[749]] : f[913];
        window[f[758]](0xd, f[914] + xolw1i), alert(xolw1i);
    }
}, window[f[915]] = function () {}, window[f[916]] = function (tk49pe, j9e4, kp94t, $rzf, s28vqy) {
    Sxowi1l[f[97]](t1LO[f[273]][f[83]], t1LO[f[273]][f[454]] || t1LO[f[273]][f[83]], tk49pe, j9e4, kp94t), sendApi(t1LO[f[695]], f[917], {
        'game_pkg': t1LO[f[415]],
        'server_id': t1LO[f[273]][f[83]],
        'role_id': tk49pe,
        'uid': t1LO[f[764]],
        'role_name': j9e4,
        'role_type': $rzf,
        'level': kp94t
    });
}, window[f[918]] = function (pgkthm, r$nf_z, z7r_n, u8as6q, f_brdz, _zfr$, ej479k, w63l1, fbnz, il53w) {
    t1LO[f[761]] = pgkthm, t1LO[f[762]] = r$nf_z, t1LO[f[763]] = z7r_n, Sxowi1l[f[98]](t1LO[f[273]][f[83]], t1LO[f[273]][f[454]] || t1LO[f[273]][f[83]], pgkthm, r$nf_z, z7r_n), sendApi(t1LO[f[695]], f[919], {
        'game_pkg': t1LO[f[415]],
        'server_id': t1LO[f[273]][f[83]],
        'role_id': pgkthm,
        'uid': t1LO[f[764]],
        'role_name': r$nf_z,
        'role_type': u8as6q,
        'level': z7r_n,
        'evolution': f_brdz
    });
}, window[f[920]] = function (qv0y, kgtmp, xglow, thekm, u36a, z$_rn, $_znr7, il3w1, j9ke4, mhgo) {
    t1LO[f[761]] = qv0y, t1LO[f[762]] = kgtmp, t1LO[f[763]] = xglow, Sxowi1l[f[99]](t1LO[f[273]][f[83]], t1LO[f[273]][f[454]] || t1LO[f[273]][f[83]], qv0y, kgtmp, xglow), sendApi(t1LO[f[695]], f[919], {
        'game_pkg': t1LO[f[415]],
        'server_id': t1LO[f[273]][f[83]],
        'role_id': qv0y,
        'uid': t1LO[f[764]],
        'role_name': kgtmp,
        'role_type': thekm,
        'level': xglow,
        'evolution': u36a
    });
}, window[f[921]] = function (vy8q02) {}, window[f[922]] = function (iw1x3l, gxiolw) {
    Sxowi1l[f[46]](f[46], { 'activity_id': gxiolw }, function (li13w) {
        iw1x3l && iw1x3l(li13w);
    });
}, window[f[96]] = function () {
    Sxowi1l[f[96]]();
}, window[f[923]] = function () {
    Sxowi1l[f[924]] && Sxowi1l[f[924]]();
}, window[f[925]] = function (kgpmth, rfbd_z, e97$4, kmtg, v28y0, iow1, omgphx, pgmoht) {
    pgmoht = pgmoht || t1LO[f[273]][f[83]], sendApi(t1LO[f[695]], f[926], {
        'phone': kgpmth,
        'role_id': rfbd_z,
        'uid': t1LO[f[764]],
        'game_pkg': t1LO[f[415]],
        'partner_id': t1LO[f[703]],
        'server_id': pgmoht
    }, omgphx, 0x2, null, function () {
        return !![];
    });
}, window[f[927]] = function (svqa28) {
    window[f[928]] = svqa28, window[f[928]] && window[f[929]] && (console[f[749]](f[930] + window[f[929]][f[931]]), window[f[928]](window[f[929]]), window[f[929]] = null);
}, window[f[932]] = function (ep9t4, j$9r7n, gxwmio, u85as) {
    window[f[933]](f[934], {
        'game_pkg': window[f[272]][f[415]],
        'role_id': j$9r7n,
        'server_id': gxwmio
    }, u85as);
}, window[f[935]] = function (rn7_$j, b_rfzd, mhkt) {
    function k94p(y8qv2) {
        var as53u = [],
            r7n9j = [],
            hp4 = mhkt || window[f[541]][f[936]];
        for (var j97rn in hp4) {
            var lw3i5 = Number(j97rn);
            (!rn7_$j || !rn7_$j[f[303]] || rn7_$j[f[632]](lw3i5) != -0x1) && (r7n9j[f[472]](hp4[j97rn]), as53u[f[472]]([lw3i5, 0x3]));
        }
        window[f[796]](window[f[937]], f[938]) >= 0x0 ? (console[f[424]](f[939]), Sxowi1l[f[940]] && Sxowi1l[f[940]](r7n9j, function (l6u513) {
            console[f[424]](f[941]), console[f[424]](l6u513);
            if (l6u513 && l6u513[f[822]] == f[942]) for (var je$4 in hp4) {
                if (l6u513[hp4[je$4]] == f[943]) {
                    var tmpkg = Number(je$4);
                    for (var s563ua = 0x0; s563ua < as53u[f[303]]; s563ua++) {
                        if (as53u[s563ua][0x0] == tmpkg) {
                            as53u[s563ua][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[f[796]](window[f[937]], f[944]) >= 0x0 ? wx[f[945]]({
                'withSubscriptions': !![],
                'success': function (s6a53u) {
                    var r_zfd = s6a53u[f[946]][f[947]];
                    if (r_zfd) {
                        console[f[424]](f[948]), console[f[424]](r_zfd);
                        for (var l1ixw in hp4) {
                            if (r_zfd[hp4[l1ixw]] == f[943]) {
                                var z$n_7r = Number(l1ixw);
                                for (var oiwglx = 0x0; oiwglx < as53u[f[303]]; oiwglx++) {
                                    if (as53u[oiwglx][0x0] == z$n_7r) {
                                        as53u[oiwglx][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[f[424]](as53u), b_rfzd && b_rfzd(as53u);
                    } else console[f[424]](f[949]), console[f[424]](s6a53u), console[f[424]](as53u), b_rfzd && b_rfzd(as53u);
                },
                'fail': function () {
                    console[f[424]](f[950]), console[f[424]](as53u), b_rfzd && b_rfzd(as53u);
                }
            }) : (console[f[424]](f[951] + window[f[937]]), console[f[424]](as53u), b_rfzd && b_rfzd(as53u));
        })) : (console[f[424]](f[952] + window[f[937]]), console[f[424]](as53u), b_rfzd && b_rfzd(as53u)), wx[f[953]](k94p);
    }
    wx[f[954]](k94p);
}, window[f[955]] = {
    'isSuccess': ![],
    'level': f[956],
    'isCharging': ![]
}, window[f[957]] = function (zr_db) {
    wx[f[958]]({
        'success': function (hmgp) {
            var $rz_7n = window[f[955]];
            $rz_7n[f[959]] = !![], $rz_7n[f[960]] = Number(hmgp[f[960]])[f[961]](0x0), $rz_7n[f[962]] = hmgp[f[962]], zr_db && zr_db($rz_7n[f[959]], $rz_7n[f[960]], $rz_7n[f[962]]);
        },
        'fail': function (r_bfn) {
            console[f[424]](f[963], r_bfn[f[822]]);
            var tpmog = window[f[955]];
            zr_db && zr_db(tpmog[f[959]], tpmog[f[960]], tpmog[f[962]]);
        }
    });
}, window[f[964]] = function (xowigm) {
    wx[f[964]]({
        'success': function (liw) {
            xowigm && xowigm(!![], liw);
        },
        'fail': function (_$r7z) {
            xowigm && xowigm(![], _$r7z);
        }
    });
}, window[f[965]] = function (frb_d) {
    if (frb_d) wx[f[965]](frb_d);
}, window[f[966]] = function (e4kp) {
    wx[f[966]](e4kp);
}, window[f[933]] = function (qa82s, $_7jn, y80v2, l3u156, r$f_z, i13l5w, xphomg, je9t4) {
    if (l3u156 == undefined) l3u156 = 0x1;
    wx[f[779]]({
        'url': qa82s,
        'method': xphomg || f[967],
        'responseType': f[328],
        'data': $_7jn,
        'header': { 'content-type': je9t4 || f[780] },
        'success': function (uas635) {
            DEBUG && console[f[424]](f[968], qa82s, info, uas635);
            if (uas635 && uas635[f[969]] == 0xc8) {
                var hpke4t = uas635[f[468]];
                !i13l5w || i13l5w(hpke4t) ? y80v2 && y80v2(hpke4t) : window[f[970]](qa82s, $_7jn, y80v2, l3u156, r$f_z, i13l5w, uas635);
            } else window[f[970]](qa82s, $_7jn, y80v2, l3u156, r$f_z, i13l5w, uas635);
        },
        'fail': function (xi3lw1) {
            DEBUG && console[f[424]](f[971], qa82s, info, xi3lw1), window[f[970]](qa82s, $_7jn, y80v2, l3u156, r$f_z, i13l5w, xi3lw1);
        },
        'complete': function () {}
    });
}, window[f[970]] = function (gxoiw, a82suq, j49k, hxgpom, xmgoh, zfr$_n, _7$jnr) {
    hxgpom - 0x1 > 0x0 ? setTimeout(function () {
        window[f[933]](gxoiw, a82suq, j49k, hxgpom - 0x1, xmgoh, zfr$_n);
    }, 0x3e8) : xmgoh && xmgoh(JSON[f[612]]({
        'url': gxoiw,
        'response': _7$jnr
    }));
}, window[f[972]] = function (ix13wl, ogtph, frz$_, e49$7j, ekp4h, tp4k, njr7$9) {
    !frz$_ && (frz$_ = {});
    var wmxog = Math[f[543]](Date[f[266]]() / 0x3e8);
    frz$_[f[846]] = wmxog, frz$_[f[973]] = ogtph;
    var znfrb_ = Object[f[974]](frz$_)[f[473]](),
        rfd_ = '',
        j49ke7 = '';
    for (var frz_n$ = 0x0; frz_n$ < znfrb_[f[303]]; frz_n$++) {
        rfd_ = rfd_ + (frz_n$ == 0x0 ? '' : '&') + znfrb_[frz_n$] + frz$_[znfrb_[frz_n$]], j49ke7 = j49ke7 + (frz_n$ == 0x0 ? '' : '&') + znfrb_[frz_n$] + '=' + encodeURIComponent(frz$_[znfrb_[frz_n$]]);
    }
    rfd_ = rfd_ + t1LO[f[701]];
    var j79n4$ = f[975] + md5(rfd_);
    send(ix13wl + '?' + j49ke7 + (j49ke7 == '' ? '' : '&') + j79n4$, null, e49$7j, ekp4h, tp4k, njr7$9 || function (a2uq) {
        return a2uq[f[467]] == f[466];
    }, null, f[37]);
}, window[f[976]] = function (p4ekht, wiogx) {
    var ek7j = 0x0;
    t1LO[f[273]] && (ek7j = t1LO[f[273]][f[83]]), sendApi(t1LO[f[697]], f[977], {
        'partnerId': t1LO[f[703]],
        'gamePkg': t1LO[f[415]],
        'logTime': Math[f[543]](Date[f[266]]() / 0x3e8),
        'platformUid': t1LO[f[842]],
        'type': p4ekht,
        'serverId': ek7j
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[f[978]] = function (gmtop) {
    sendApi(t1LO[f[695]], f[979], {
        'partner_id': t1LO[f[703]],
        'uid': t1LO[f[764]],
        'version': t1LO[f[691]],
        'game_pkg': t1LO[f[415]],
        'device': t1LO[f[704]]
    }, t1LOIZ, t1IOL, t1OZ);
}, window[f[980]] = function (nr7_j$) {
    if (nr7_j$ && nr7_j$[f[467]] === f[466] && nr7_j$[f[468]]) {
        nr7_j$[f[468]][f[981]]({
            'id': -0x2,
            'name': f[982]
        }), nr7_j$[f[468]][f[981]]({
            'id': -0x1,
            'name': f[983]
        }), t1LO[f[414]] = nr7_j$[f[468]];
        if (window[f[404]]) window[f[404]][f[456]]();
    } else {
        t1LO[f[437]] = ![];
        var yq2sv = nr7_j$ ? nr7_j$[f[467]] : '';
        window[f[758]](0x7, f[984] + yq2sv), window[f[737]](f[985] + yq2sv);
    }
}, window[f[986]] = function (ogmhx) {
    sendApi(t1LO[f[695]], f[987], {
        'partner_id': t1LO[f[703]],
        'uid': t1LO[f[764]],
        'version': t1LO[f[691]],
        'game_pkg': t1LO[f[415]],
        'device': t1LO[f[704]]
    }, t1ZLI, t1IOL, t1OZ);
}, window[f[988]] = function (otpmgh) {
    t1LO[f[464]] = ![];
    if (otpmgh && otpmgh[f[467]] === f[466] && otpmgh[f[468]]) {
        for (var lix1ow = 0x0; lix1ow < otpmgh[f[468]][f[303]]; lix1ow++) {
            otpmgh[f[468]][lix1ow][f[358]] = t1LIZ(otpmgh[f[468]][lix1ow]);
        }
        t1LO[f[462]][-0x1] = window[f[989]](otpmgh[f[468]]), window[f[404]][f[463]](-0x1);
    } else {
        var mixogh = otpmgh ? otpmgh[f[467]] : '';
        window[f[758]](0x8, f[990] + mixogh), window[f[737]](f[991] + mixogh);
    }
}, window[f[992]] = function (xwi1lo) {
    sendApi(t1LO[f[695]], f[987], {
        'partner_id': t1LO[f[703]],
        'uid': t1LO[f[764]],
        'version': t1LO[f[691]],
        'game_pkg': t1LO[f[415]],
        'device': t1LO[f[704]]
    }, xwi1lo, t1IOL, t1OZ);
}, window[f[993]] = function (nz$7r_, ogphmx) {
    sendApi(t1LO[f[695]], f[994], {
        'partner_id': t1LO[f[703]],
        'uid': t1LO[f[764]],
        'version': t1LO[f[691]],
        'game_pkg': t1LO[f[415]],
        'device': t1LO[f[704]],
        'server_group_id': ogphmx
    }, t1ILZ, t1IOL, t1OZ);
}, window[f[995]] = function (lox1iw) {
    t1LO[f[464]] = ![];
    if (lox1iw && lox1iw[f[467]] === f[466] && lox1iw[f[468]] && lox1iw[f[468]][f[468]]) {
        var j9r$n = lox1iw[f[468]][f[996]],
            as8vq = [];
        for (var k4hpte = 0x0; k4hpte < lox1iw[f[468]][f[468]][f[303]]; k4hpte++) {
            lox1iw[f[468]][f[468]][k4hpte][f[358]] = t1LIZ(lox1iw[f[468]][f[468]][k4hpte]), (as8vq[f[303]] == 0x0 || lox1iw[f[468]][f[468]][k4hpte][f[358]] != 0x0) && (as8vq[as8vq[f[303]]] = lox1iw[f[468]][f[468]][k4hpte]);
        }
        t1LO[f[462]][j9r$n] = window[f[989]](as8vq), window[f[404]][f[463]](j9r$n);
    } else {
        var mtpho = lox1iw ? lox1iw[f[467]] : '';
        window[f[758]](0x9, f[997] + mtpho), window[f[737]](f[998] + mtpho);
    }
}, window[f[999]] = function ($47) {
    sendApi(t1LO[f[695]], f[1000], {
        'partner_id': t1LO[f[703]],
        'uid': t1LO[f[764]],
        'version': t1LO[f[691]],
        'game_pkg': t1LO[f[415]],
        'device': t1LO[f[704]]
    }, reqServerRecommendCallBack, t1IOL, t1OZ);
}, window[f[1001]] = function (k4t9j) {
    t1LO[f[464]] = ![];
    if (k4t9j && k4t9j[f[467]] === f[466] && k4t9j[f[468]]) {
        for (var k4ejt9 = 0x0; k4ejt9 < k4t9j[f[468]][f[303]]; k4ejt9++) {
            k4t9j[f[468]][k4ejt9][f[358]] = t1LIZ(k4t9j[f[468]][k4ejt9]);
        }
        t1LO[f[462]][-0x2] = window[f[989]](k4t9j[f[468]]), window[f[404]][f[463]](-0x2);
    } else {
        var dzb_f = k4t9j ? k4t9j[f[467]] : '';
        window[f[758]](0xa, f[1002] + dzb_f), alert(f[1003] + dzb_f);
    }
}, window[f[989]] = function (tkeph) {
    return tkeph;
}, window[f[1004]] = function (jnr$, l31u5) {
    jnr$ = jnr$ || t1LO[f[273]][f[83]], sendApi(t1LO[f[695]], f[1005], {
        'type': '4',
        'game_pkg': t1LO[f[415]],
        'server_id': jnr$
    }, l31u5);
}, window[f[1006]] = function (wi31l, xmiwgo, xwmi, hmkept) {
    xwmi = xwmi || t1LO[f[273]][f[83]], sendApi(t1LO[f[695]], f[1007], {
        'type': wi31l,
        'game_pkg': xmiwgo,
        'server_id': xwmi
    }, hmkept);
}, window[f[1008]] = function (aqu86s, fn_bz) {
    sendApi(t1LO[f[695]], f[1009], { 'game_pkg': aqu86s }, fn_bz);
}, window[f[1010]] = function (hgtmpk) {
    if (hgtmpk) {
        if (hgtmpk[f[358]] == 0x1) {
            if (hgtmpk[f[1011]] == 0x3) return 0x3;else return hgtmpk[f[1011]] == 0x1 ? 0x2 : 0x1;
        } else return hgtmpk[f[358]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[f[1012]] = function (gpxmh, xw1i) {
    t1LO[f[1013]] = {
        'step': gpxmh,
        'server_id': xw1i
    };
    var pe49 = this;
    t1ZLIO({ 'title': f[1014] }), sendApi(t1LO[f[695]], f[1015], {
        'partner_id': t1LO[f[703]],
        'uid': t1LO[f[764]],
        'game_pkg': t1LO[f[415]],
        'server_id': xw1i,
        'platform': t1LO[f[841]],
        'platform_uid': t1LO[f[842]],
        'check_login_time': t1LO[f[845]],
        'check_login_sign': t1LO[f[843]],
        'version_name': t1LO[f[795]]
    }, t1OZLI, t1IOL, t1OZ, function (w1i3lx) {
        return w1i3lx[f[467]] == f[466] || w1i3lx[f[749]] == f[1016] || w1i3lx[f[749]] == f[1017];
    });
}, window[f[1018]] = function ($n497j) {
    var pgmho = this;
    if ($n497j && $n497j[f[467]] === f[466] && $n497j[f[468]]) {
        var _frzd = t1LO[f[273]];
        _frzd[f[1019]] = t1LO[f[706]], _frzd[f[844]] = String($n497j[f[468]][f[1020]]), _frzd[f[713]] = parseInt($n497j[f[468]][f[846]]);
        if ($n497j[f[468]][f[1021]]) _frzd[f[1021]] = parseInt($n497j[f[468]][f[1021]]);else _frzd[f[1021]] = parseInt($n497j[f[468]][f[83]]);
        _frzd[f[1022]] = 0x0, _frzd[f[455]] = t1LO[f[884]], _frzd[f[1023]] = $n497j[f[468]][f[1024]], _frzd[f[1025]] = $n497j[f[468]][f[1025]];
        if ($n497j[f[468]][f[1026]]) _frzd[f[1026]] = parseInt($n497j[f[468]][f[1026]]);
        console[f[424]](f[1027] + JSON[f[612]](_frzd[f[1025]])), t1LO[f[601]] == 0x1 && _frzd[f[1025]] && _frzd[f[1025]][f[1028]] == 0x1 && (t1LO[f[336]] = 0x1, window[f[677]][f[267]][f[599]]()), t1OIZL();
    } else {
        if (t1LO[f[1013]][f[1029]] >= 0x3) {
            var k9p = $n497j ? $n497j[f[467]] : '';
            window[f[758]](0xc, f[1030] + k9p), t1OZ(JSON[f[612]]($n497j)), window[f[737]](f[1031] + k9p);
        } else sendApi(t1LO[f[695]], f[819], {
            'platform': t1LO[f[693]],
            'partner_id': t1LO[f[703]],
            'token': t1LO[f[813]],
            'game_pkg': t1LO[f[415]],
            'deviceId': t1LO[f[704]],
            'scene': f[820] + t1LO[f[705]]
        }, function (p49ek) {
            if (!p49ek || p49ek[f[467]] != f[466]) {
                window[f[737]](f[838] + p49ek && p49ek[f[467]]);
                return;
            }
            t1LO[f[843]] = String(p49ek[f[844]]), t1LO[f[845]] = String(p49ek[f[846]]), setTimeout(function () {
                t1OZIL(t1LO[f[1013]][f[1029]] + 0x1, t1LO[f[1013]][f[83]]);
            }, 0x5dc);
        }, t1IOL, t1OZ, function (_$nr7j) {
            return _$nr7j[f[467]] == f[466] || _$nr7j[f[467]] == f[1032];
        });
    }
}, window[f[1033]] = function () {
    ServerLoading[f[267]][f[595]](t1LO[f[601]]), window[f[722]] = !![], window[f[583]]();
}, window[f[582]] = function () {
    if (window[f[723]] && window[f[724]] && window[f[581]] && window[f[594]] && window[f[725]] && window[f[727]]) {
        if (!window[f[1034]][f[267]]) {
            console[f[424]](f[1035] + window[f[1034]][f[267]]);
            var htgk = wx[f[1036]](),
                nz_brf = htgk[f[931]] ? htgk[f[931]] : 0x0,
                tj4e = {
                'cdn': window[f[272]][f[455]],
                'spareCdn': window[f[272]][f[802]],
                'newRegister': window[f[272]][f[601]],
                'wxPC': window[f[272]][f[720]],
                'wxIOS': window[f[272]][f[718]],
                'wxAndroid': window[f[272]][f[719]],
                'wxParam': {
                    'limitLoad': window[f[272]][f[1037]],
                    'benchmarkLevel': window[f[272]][f[1038]],
                    'wxFrom': window[f[541]][f[807]] == f[1039] ? 0x1 : 0x0,
                    'wxSDKVersion': window[f[937]]
                },
                'configType': window[f[272]][f[714]],
                'exposeType': window[f[272]][f[716]],
                'scene': nz_brf,
                'video_type': window[f[272]][f[815]],
                'ad_flag': window[f[272]][f[817]]
            };
            if (window[f[887]]) for (var z_$frn in window[f[887]]) {
                if (!tj4e[z_$frn]) tj4e[z_$frn] = window[f[887]][z_$frn];
            }
            new window[f[1034]](tj4e, window[f[272]][f[333]], window[f[686]]);
        }
    }
}, window[f[583]] = function () {
    if (window[f[723]] && window[f[724]] && window[f[581]] && window[f[594]] && window[f[725]] && window[f[727]] && window[f[722]] && window[f[726]]) {
        t1ZLOI();
        if (!t1OIL) {
            t1OIL = !![];
            if (!window[f[1034]][f[267]]) window[f[582]]();
            var uq2as8 = 0x0,
                a5su68 = wx[f[1040]]();
            a5su68 && (window[f[272]][f[1041]] && (uq2as8 = a5su68[f[207]]), console[f[749]](f[1042] + a5su68[f[207]] + f[1043] + a5su68[f[347]] + f[1044] + a5su68[f[403]] + f[1045] + a5su68[f[170]] + f[1046] + a5su68[f[295]] + f[1047] + a5su68[f[297]]));
            var _rznb = {};
            for (const sv2q8 in t1LO[f[273]]) {
                _rznb[sv2q8] = t1LO[f[273]][sv2q8];
            }
            var pet4k9 = {
                'channel': window[f[272]][f[707]],
                'account': window[f[272]][f[764]],
                'userId': window[f[272]][f[28]],
                'cdn': window[f[272]][f[455]],
                'data': window[f[272]][f[468]],
                'package': window[f[272]][f[690]],
                'newRegister': window[f[272]][f[601]],
                'pkgName': window[f[272]][f[415]],
                'partnerId': window[f[272]][f[703]],
                'platform_uid': window[f[272]][f[842]],
                'deviceId': window[f[272]][f[704]],
                'selectedServer': _rznb,
                'configType': window[f[272]][f[714]],
                'exposeType': window[f[272]][f[716]],
                'debugUsers': window[f[272]][f[711]],
                'wxMenuTop': uq2as8,
                'wxShield': window[f[272]][f[422]],
                'encryptParam': window[f[272]][f[717]],
                'wx_channel': window[f[272]][f[814]],
                'zsy_tp_state': window[f[272]][f[816]]
            };
            if (window[f[887]]) for (var q8s2a in window[f[887]]) {
                pet4k9[q8s2a] = window[f[887]][q8s2a];
            }
            window[f[1034]][f[267]][f[1048]](pet4k9);
            if (t1LO[f[273]] && t1LO[f[273]][f[83]]) localStorage[f[438]](f[848] + t1LO[f[415]] + t1LO[f[764]], t1LO[f[273]][f[83]]);
        }
    } else console[f[749]](f[1049] + window[f[723]] + f[1050] + window[f[724]] + f[1051] + window[f[581]] + f[1052] + window[f[594]] + f[1053] + window[f[725]] + f[1054] + window[f[727]] + f[1055] + window[f[722]] + f[1056] + window[f[726]]);
};