var b = wx.$e;
import exd089 from '../a55a/fv8a.js';
window[b[640]] = { 'wxVersion': window[b[641]]['game_ver'] }, window[b[642]] = ![], window['e1J$'] = 0x1, window[b[643]] = 0x1, window['e1F$J'] = !![], window[b[644]] = !![], window['e1R4F$J'] = '', window[b[645]] = ![], window['e1$J'] = {
    'base_cdn': b[646],
    'cdn': b[646]
}, e1$J[b[647]] = {}, e1$J[b[589]] = '0', e1$J[b[648]] = window[b[640]][b[649]], e1$J[b[650]] = '', e1$J['os'] = '1', e1$J[b[651]] = b[652], e1$J[b[653]] = b[654], e1$J[b[655]] = b[656], e1$J[b[657]] = b[658], e1$J[b[659]] = b[660], e1$J[b[661]] = '1', e1$J[b[662]] = '', e1$J['device_id'] = '', e1$J[b[663]] = 0x0, e1$J[b[664]] = {}, e1$J[b[665]] = parseInt(e1$J[b[661]]), e1$J[b[666]] = e1$J[b[661]], e1$J[b[667]] = {}, e1$J['e14$'] = b[668], e1$J[b[669]] = ![], e1$J[b[670]] = b[671], e1$J[b[672]] = Date[b[673]](), e1$J[b[674]] = b[675], e1$J[b[676]] = '_a', e1$J[b[677]] = '', e1$J[b[678]] = 0x2, e1$J[b[679]] = 0x7c1, e1$J[b[649]] = window[b[640]][b[649]], e1$J[b[680]] = ![], e1$J[b[681]] = ![], e1$J[b[682]] = ![], e1$J[b[683]] = ![], window['e1FJ$'] = 0x5, window[b[684]] = ![], window[b[685]] = ![], window['e1$FJ'] = ![], window[b[686]] = ![], window[b[687]] = ![], window['e1$JF'] = ![], window['e1F$'] = ![], window['e1$F'] = ![], window['e1JF$'] = ![], window[b[688]] = null, window[b[689]] = function ($i4mc3) {
    console[b[553]](b[689], $i4mc3), wx[b[690]]({}), wx[b[691]]({
        'title': b[692],
        'content': $i4mc3,
        'success'(tkb75o) {
            if (tkb75o[b[693]]) console[b[553]](b[694]);else tkb75o[b[695]] && console[b[553]](b[696]);
        }
    });
}, window['e14F$J'] = function (fjvbag) {
    console[b[553]](b[697], fjvbag), e14$JF(), wx[b[691]]({
        'title': b[692],
        'content': fjvbag,
        'confirmText': b[698],
        'cancelText': b[699],
        'success'(_9dl$) {
            if (_9dl$[b[693]]) window['e1$4']();else _9dl$[b[695]] && (console[b[553]](b[700]), wx[b[701]]({}));
        }
    });
}, window[b[702]] = function (cmi4q3) {
    console[b[553]](b[702], cmi4q3), wx[b[691]]({
        'title': b[692],
        'content': cmi4q3,
        'confirmText': b[703],
        'showCancel': ![],
        'complete'(o5tb7) {
            console[b[553]](b[700]), wx[b[701]]({});
        }
    });
}, window['e14FJ$'] = ![], window['e14$FJ'] = function (nwz6s) {
    window['e14FJ$'] = !![], wx[b[704]](nwz6s);
}, window['e14$JF'] = function () {
    window['e14FJ$'] && (window['e14FJ$'] = ![], wx[b[690]]({}));
}, window['e14JF$'] = function (gbafvj) {
    window[b[705]][b[706]]['e14JF$'](gbafvj);
}, window[b[91]] = function (j2ays, x0d8) {
    exd089[b[91]](j2ays, function (vyaj2g) {
        vyaj2g && vyaj2g[b[598]] ? vyaj2g[b[598]][b[707]] == 0x1 ? x0d8(!![]) : (x0d8(![]), console[b[708]](b[709] + vyaj2g[b[598]][b[710]])) : console[b[553]](b[91], vyaj2g);
    });
}, window['e14J$F'] = function (sy2jav) {
    console[b[553]](b[711], sy2jav);
}, window['e14$J'] = function (dx90_) {}, window['e14J$'] = function (c$l4i, i3c4, li4c$m) {}, window[b[712]] = function (fyva) {
    console[b[553]](b[713], fyva), window[b[705]][b[706]][b[714]](), window[b[705]][b[706]][b[715]](), window[b[705]][b[706]][b[716]](), window[b[717]]();
}, window[b[718]] = function (krt5o) {
    window[b[719]](0xe, b[720] + krt5o), window['e14F$J'](b[721]);
    var tgavfb = {
        'id': window['e1$J'][b[722]],
        'role': window['e1$J'][b[723]],
        'level': window['e1$J'][b[724]],
        'account': window['e1$J'][b[725]],
        'version': window['e1$J'][b[679]],
        'cdn': window['e1$J'][b[726]],
        'pkgName': window['e1$J'][b[662]],
        'gamever': window[b[641]]['game_ver'],
        'serverid': window['e1$J'][b[667]] ? window['e1$J'][b[667]][b[62]] : 0x0,
        'systemInfo': window[b[727]],
        'error': b[728],
        'stack': krt5o ? krt5o : b[721]
    },
        r8xu7 = JSON[b[729]](tgavfb);
    console[b[596]](b[730] + r8xu7), window['e14$'](r8xu7);
}, window[b[719]] = function (m$_lc0, _80dx) {
    sendApi(e1$J[b[655]], b[731], {
        'game_pkg': e1$J[b[662]],
        'partner_id': e1$J[b[661]],
        'server_id': e1$J[b[667]] && e1$J[b[667]][b[62]] > 0x0 ? e1$J[b[667]][b[62]] : 0x0,
        'uid': e1$J[b[725]] > 0x0 ? e1$J[b[725]] : 0x0,
        'type': m$_lc0,
        'info': _80dx
    });
}, window['e1$4J'] = function (x7ru8o) {
    var eh1znp = JSON[b[552]](x7ru8o);
    eh1znp[b[732]] = window[b[641]]['game_ver'], eh1znp[b[733]] = window['e1$J'][b[667]] ? window['e1$J'][b[667]][b[62]] : 0x0, eh1znp[b[727]] = window[b[727]];
    var ez1pn = JSON[b[729]](eh1znp);
    console[b[596]](b[734] + ez1pn), window['e14$'](ez1pn);
}, window['e1$J4'] = function (xur7o8, d0l8_) {
    var gbkftv = {
        'id': window['e1$J'][b[722]],
        'role': window['e1$J'][b[723]],
        'level': window['e1$J'][b[724]],
        'account': window['e1$J'][b[725]],
        'version': window['e1$J'][b[679]],
        'cdn': window['e1$J'][b[726]],
        'pkgName': window['e1$J'][b[662]],
        'gamever': window[b[641]]['game_ver'],
        'serverid': window['e1$J'][b[667]] ? window['e1$J'][b[667]][b[62]] : 0x0,
        'systemInfo': window[b[727]],
        'error': xur7o8,
        'stack': d0l8_
    },
        qc4im = JSON[b[729]](gbkftv);
    console[b[609]](b[735] + qc4im), window['e14$'](qc4im);
}, window['e14$'] = function (jsy62) {
    if (window['e1$J'][b[736]] == b[737]) return;
    var mi4$c3 = e1$J['e14$'] + b[738] + e1$J[b[725]];
    wx[b[739]]({
        'url': mi4$c3,
        'method': b[24],
        'data': jsy62,
        'header': {
            'content-type': b[740],
            'cache-control': b[741]
        },
        'success': function (w6ez) {
            DEBUG && console[b[553]](b[742], mi4$c3, jsy62, w6ez);
        },
        'fail': function (ic4$3) {
            DEBUG && console[b[553]](b[742], mi4$c3, jsy62, ic4$3);
        },
        'complete': function () {}
    });
}, window[b[743]] = function () {
    function d0ux() {
        return ((0x1 + Math[b[744]]()) * 0x10000 | 0x0)[b[441]](0x10)[b[559]](0x1);
    }
    return d0ux() + d0ux() + '-' + d0ux() + '-' + d0ux() + '-' + d0ux() + '+' + d0ux() + d0ux() + d0ux();
}, window['e1$4'] = function () {
    console[b[553]](b[745]);
    var fgkbt = exd089[b[746]]();
    e1$J[b[666]] = fgkbt[b[747]], e1$J[b[665]] = fgkbt[b[747]], e1$J[b[661]] = fgkbt[b[747]], e1$J[b[662]] = fgkbt['game_pkg'];
    var o57ur = { 'game_ver': e1$J[b[648]] };
    e1$J['device_id'] = this[b[743]](), e14$FJ({ 'title': b[748] }), exd089[b[84]](o57ur, this['e1J4$'][b[412]](this));
}, window['e1J4$'] = function (bk57ft) {
    var pe = bk57ft[b[749]];
    sdkInitRes = bk57ft, console[b[553]](b[750] + pe + b[751] + (pe == 0x1) + b[752] + bk57ft['game_ver'] + b[753] + window[b[640]][b[649]] + b[754] + bk57ft[b[755]]);
    if (!bk57ft['game_ver'] || window['e1RFJ4$'](window[b[640]][b[649]], bk57ft['game_ver']) < 0x0) console[b[553]](b[756]), e1$J[b[653]] = b[757], e1$J[b[655]] = b[758], e1$J[b[657]] = b[759], e1$J[b[726]] = b[760], e1$J[b[761]] = b[762], e1$J[b[755]] = bk57ft[b[755]], e1$J[b[680]] = ![];else window['e1RFJ4$'](window[b[640]][b[649]], bk57ft['game_ver']) == 0x0 ? (console[b[553]](b[763]), e1$J[b[653]] = b[654], e1$J[b[655]] = b[656], e1$J[b[657]] = b[658], e1$J[b[726]] = b[764], e1$J[b[761]] = b[762], e1$J[b[755]] = b[765], e1$J[b[680]] = !![]) : (console[b[553]](b[766]), e1$J[b[653]] = b[654], e1$J[b[655]] = b[656], e1$J[b[657]] = b[658], e1$J[b[726]] = b[764], e1$J[b[761]] = b[762], e1$J[b[755]] = b[765], e1$J[b[680]] = ![]);
    e1$J[b[663]] = config[b[436]] ? config[b[436]] : 0x0, this['e1F$4J'](), this['e1F$J4'](), window[b[767]] = 0x5, e14$FJ({ 'title': b[768] }), exd089[b[13]](this['e1J$4'][b[412]](this));
}, window[b[767]] = 0x5, window['e1J$4'] = function (ewzn1h, x8d9_0) {
    if (ewzn1h == 0x0 && x8d9_0 && x8d9_0[b[584]]) {
        e1$J[b[769]] = x8d9_0[b[584]], e1$J[b[770]] = x8d9_0[b[770]], e1$J[b[771]] = x8d9_0[b[771]], e1$J[b[772]] = x8d9_0[b[772]], e1$J[b[773]] = x8d9_0[b[773]];
        var s6wzh = this;
        e14$FJ({ 'title': b[774] }), sendApi(e1$J[b[653]], b[775], {
            'platform': e1$J[b[651]],
            'partner_id': e1$J[b[661]],
            'token': x8d9_0[b[584]],
            'game_pkg': e1$J[b[662]],
            'deviceId': e1$J['device_id'],
            'scene': b[776] + e1$J[b[663]]
        }, this['e1F4$J'][b[412]](this), e1FJ$, e1J4);
    } else x8d9_0 && x8d9_0[b[777]] && window[b[767]] > 0x0 && (x8d9_0[b[777]][b[502]](b[778]) != -0x1 || x8d9_0[b[777]][b[502]](b[779]) != -0x1 || x8d9_0[b[777]][b[502]](b[780]) != -0x1 || x8d9_0[b[777]][b[502]](b[781]) != -0x1 || x8d9_0[b[777]][b[502]](b[782]) != -0x1 || x8d9_0[b[777]][b[502]](b[783]) != -0x1) ? (window[b[767]]--, exd089[b[13]](this['e1J$4'][b[412]](this))) : (window[b[719]](0x1, b[784] + ewzn1h + b[785] + (x8d9_0 ? x8d9_0[b[777]] : '')), window['e1$J4'](b[786], JSON[b[729]]({
        'status': ewzn1h,
        'data': x8d9_0
    })), window['e14F$J'](b[787] + (x8d9_0 && x8d9_0[b[777]] ? '，' + x8d9_0[b[777]] : '')));
}, window['e1F4$J'] = function (nhs6zw) {
    if (!nhs6zw) {
        window[b[719]](0x2, b[788]), window['e1$J4'](b[789], b[790]), window['e14F$J'](b[791]);
        return;
    }
    if (nhs6zw[b[707]] != b[792]) {
        window[b[719]](0x2, b[793] + nhs6zw[b[707]]), window['e1$J4'](b[789], JSON[b[729]](nhs6zw)), window['e14F$J'](b[794] + nhs6zw[b[707]]);
        return;
    }
    e1$J[b[795]] = String(nhs6zw[b[725]]), e1$J[b[725]] = String(nhs6zw[b[725]]), e1$J[b[796]] = String(nhs6zw[b[796]]), e1$J[b[666]] = String(nhs6zw[b[796]]), e1$J[b[797]] = String(nhs6zw[b[797]]), e1$J[b[798]] = String(nhs6zw[b[799]]), e1$J[b[800]] = String(nhs6zw[b[801]]), e1$J[b[799]] = '';
    var r7x5o = this;
    e14$FJ({ 'title': b[802] });
    var gbtfvk = localStorage[b[803]](b[804] + e1$J[b[662]] + e1$J[b[725]]);
    if (gbtfvk && gbtfvk != '') {
        var c34$im = Number(gbtfvk);
        r7x5o[b[805]](c34$im);
    } else r7x5o[b[806]]();
}, window[b[806]] = function () {
    var rou = this;
    sendApi(e1$J[b[653]], b[807], {
        'partner_id': e1$J[b[661]],
        'uid': e1$J[b[725]],
        'version': e1$J[b[648]],
        'game_pkg': e1$J[b[662]],
        'device': e1$J['device_id']
    }, rou['e1F4J$'][b[412]](rou), e1FJ$, e1J4);
}, window['e1F4J$'] = function (ur5x) {
    if (!ur5x) {
        window[b[719]](0x3, b[808]), window['e14F$J'](b[808]);
        return;
    }
    if (ur5x[b[707]] != b[792]) {
        window[b[719]](0x3, b[809] + ur5x[b[707]]), window['e14F$J'](b[809] + ur5x[b[707]]);
        return;
    }
    if (!ur5x[b[598]] || ur5x[b[598]][b[422]] == 0x0) {
        window[b[719]](0x3, b[810]), window['e14F$J'](b[811]);
        return;
    }
    this[b[812]](ur5x);
}, window[b[805]] = function (afgt) {
    var _$cmli = this;
    sendApi(e1$J[b[653]], b[813], {
        'server_id': afgt,
        'time': Date[b[673]]() / 0x3e8
    }, _$cmli[b[814]][b[412]](_$cmli), e1FJ$, e1J4);
}, window[b[814]] = function (bf5k7) {
    if (!bf5k7) {
        window[b[719]](0x4, b[815]), this[b[806]]();
        return;
    }
    if (bf5k7[b[707]] != b[792]) {
        window[b[719]](0x4, b[816] + bf5k7[b[707]]), this[b[806]]();
        return;
    }
    if (!bf5k7[b[598]] || bf5k7[b[598]][b[422]] == 0x0) {
        window[b[719]](0x4, b[817]), this[b[806]]();
        return;
    }
    this[b[812]](bf5k7);
}, window[b[812]] = function (mdl0) {
    e1$J[b[818]] = mdl0[b[819]] != undefined ? mdl0[b[819]] : 0x0, e1$J[b[667]] = {
        'server_id': String(mdl0[b[598]][0x0][b[62]]),
        'server_name': String(mdl0[b[598]][0x0][b[820]]),
        'entry_ip': mdl0[b[598]][0x0][b[821]],
        'entry_port': parseInt(mdl0[b[598]][0x0][b[822]]),
        'status': e1$F4(mdl0[b[598]][0x0]),
        'start_time': mdl0[b[598]][0x0][b[823]],
        'maintain_time': mdl0[b[598]][0x0][b[824]] ? mdl0[b[598]][0x0][b[824]] : '',
        'is_recommend': mdl0[b[598]][0x0][b[825]],
        'cdn': e1$J[b[726]]
    }, this['e1J$F4'](), window[b[705]] && window[b[705]][b[706]][b[826]] && window[b[705]][b[706]][b[826]](sdkInitRes[b[827]], sdkInitRes['sdk_age_adaptation_icon'], sdkInitRes['sdk_age_adaptation_content'], sdkInitRes['coordinate_x'], sdkInitRes['coordinate_y']);
}, window[b[828]] = null, window['e1J$F4'] = function () {
    var d$_l0 = this;
    exd089[b[92]](function (zwn6hs) {
        console[b[553]](b[829] + JSON[b[729]](zwn6hs)), youYiCofig = zwn6hs;
        window[b[828]][b[830]] == 0x1 && (e1$J[b[818]] = 0x0);
        if (e1$J[b[818]] == 0x1) {
            var i4qm3 = e1$J[b[667]][b[831]];
            if (i4qm3 === -0x1 || i4qm3 === 0x0) {
                window[b[719]](0xf, b[832] + e1$J[b[667]]['id'] + b[833] + e1$J[b[667]][b[831]]), window['e14F$J'](i4qm3 === -0x1 ? b[834] : b[835]);
                return;
            }
            e1J4F$(0x0, e1$J[b[667]][b[62]]), window[b[705]][b[706]][b[836]](e1$J[b[818]]);
        } else window[b[705]][b[706]][b[837]](() => {
            var kfbtvg = window[b[828]][b[838]],
                _$mli = window[b[828]][b[830]] == 0x1;
            _$mli && window[b[705]][b[706]][b[839]](b[840], kfbtvg, b[35]);
        }, d$_l0), e14$JF();
        window['e1$F'] = !![], window[b[841]](), window['e1JF$4'](), window['e1J$4F']();
    });
}, window[b[842]] = function () {
    exd089[b[93]](function (hnew6z) {
        console[b[553]](b[843] + JSON[b[729]](hnew6z));
    });
}, window['e1F$4J'] = function () {
    sendApi(e1$J[b[653]], b[844], {
        'game_pkg': e1$J[b[662]],
        'version_name': e1$J[b[755]]
    }, this[b[845]][b[412]](this), e1FJ$, e1J4);
}, window[b[845]] = function (kbtv) {
    if (!kbtv) {
        window[b[719]](0x5, b[846]), window['e14F$J'](b[846]);
        return;
    }
    if (kbtv[b[707]] != b[792]) {
        window[b[719]](0x5, b[847] + kbtv[b[707]]), window['e14F$J'](b[847] + kbtv[b[707]]);
        return;
    }
    if (!kbtv[b[598]] || !kbtv[b[598]][b[648]]) {
        window[b[719]](0x5, b[848] + (kbtv[b[598]] && kbtv[b[598]][b[648]])), window['e14F$J'](b[848] + (kbtv[b[598]] && kbtv[b[598]][b[648]]));
        return;
    }
    kbtv[b[598]][b[849]] && kbtv[b[598]][b[849]][b[422]] > 0xa && (e1$J['base_cdn'] = kbtv[b[598]][b[849]], e1$J[b[726]] = kbtv[b[598]][b[849]]), kbtv[b[598]][b[648]] && (e1$J[b[679]] = kbtv[b[598]][b[648]]), console[b[708]](b[850] + e1$J[b[679]] + b[851] + e1$J[b[755]]), window['e1$JF'] = !![], window['e1JF$4'](), window['e1J$4F']();
}, window[b[852]], window['e1F$J4'] = function () {
    sendApi(e1$J[b[653]], b[853], { 'game_pkg': e1$J[b[662]] }, this['e1FJ4$'][b[412]](this), e1FJ$, e1J4);
}, window['e1FJ4$'] = function (r7k5ou) {
    if (r7k5ou && r7k5ou[b[707]] === b[792] && r7k5ou[b[598]]) {
        window[b[852]] = r7k5ou[b[598]];
        for (var yjs2 in r7k5ou[b[598]]) {
            e1$J[yjs2] = r7k5ou[b[598]][yjs2];
        }
    } else window[b[719]](0xb, b[854]), console[b[708]](b[855] + r7k5ou[b[707]]);
    window['e1F$'] = !![], window[b[841]](), window['e1J$4F']();
}, window[b[841]] = function () {
    if (!window['e1$F'] || !window['e1F$']) return;
    var mqci3 = e1$J[b[818]] == 0x1,
        btvkf = e1$J[b[680]],
        gvabf = e1$J[b[856]] && e1$J[b[856]] > 0x0;
    if (btvkf || mqci3 && gvabf) {
        var sjavy2 = e1$J[b[857]],
            s62wn = sjavy2 && sjavy2[b[422]] == 0x9;
        s62wn && (window[b[858]] = sjavy2);
        var l$_cim = e1$J[b[859]],
            gatbfv = l$_cim && l$_cim[b[542]]('#')[b[422]] == 0x4;
        gatbfv && (window[b[860]] = l$_cim);
    }
}, window[b[717]] = function () {
    window[b[858]] = null, window[b[860]] = null;
}, window[b[861]] = function (wns6h, t57bok, jbavgf, gvtkbf, hsyw, gyj2v, i43$c, yjvfa, f5gbt, l$icm_) {
    hsyw = String(hsyw);
    var yv2jsa = i43$c,
        svjay = yjvfa;
    e1$J[b[647]][hsyw] = {
        'productid': hsyw,
        'productname': yv2jsa,
        'productdesc': svjay,
        'roleid': wns6h,
        'rolename': t57bok,
        'rolelevel': jbavgf,
        'price': gyj2v,
        'callback': f5gbt
    }, sendApi(e1$J[b[657]], b[862], {
        'game_pkg': e1$J[b[662]],
        'server_id': e1$J[b[667]][b[62]],
        'server_name': e1$J[b[667]][b[820]],
        'level': jbavgf,
        'uid': e1$J[b[725]],
        'role_id': wns6h,
        'role_name': t57bok,
        'product_id': hsyw,
        'product_name': yv2jsa,
        'product_desc': svjay,
        'money': gyj2v,
        'partner_id': e1$J[b[661]]
    }, toPayCallBack, e1FJ$, e1J4);
}, window[b[863]] = function (tbk7f) {
    if (tbk7f && (tbk7f[b[864]] === 0xc8 || tbk7f[b[707]] == b[792])) {
        var _0$l = e1$J[b[647]][String(tbk7f[b[865]])];
        if (_0$l[b[866]]) _0$l[b[866]](tbk7f[b[865]], tbk7f[b[867]], -0x1);
        exd089[b[54]]({
            'cpbill': tbk7f[b[867]],
            'productid': tbk7f[b[865]],
            'productname': _0$l[b[868]],
            'productdesc': _0$l[b[869]],
            'serverid': e1$J[b[667]][b[62]],
            'servername': e1$J[b[667]][b[820]],
            'roleid': _0$l[b[870]],
            'rolename': _0$l[b[871]],
            'rolelevel': _0$l[b[872]],
            'price': _0$l[b[873]],
            'extension': JSON[b[729]]({ 'cp_order_id': tbk7f[b[867]] })
        }, function (m$i3, z6w) {
            _0$l[b[866]] && m$i3 == 0x0 && _0$l[b[866]](tbk7f[b[865]], tbk7f[b[867]], m$i3);
            console[b[708]](JSON[b[729]]({
                'type': b[874],
                'status': m$i3,
                'data': tbk7f,
                'role_name': _0$l[b[871]]
            }));
            if (m$i3 === 0x0) {} else {
                if (m$i3 === 0x1) {} else {
                    if (m$i3 === 0x2) {}
                }
            }
        });
    } else {
        var $md_l = tbk7f ? b[875] + tbk7f[b[864]] + b[876] + tbk7f[b[707]] + b[877] + tbk7f[b[708]] : b[878];
        window[b[719]](0xd, b[879] + $md_l), alert($md_l);
    }
}, window['e1FJ$4'] = function () {}, window[b[880]] = function (l0_d98, ro7tk5, m$c4li, gayj2, bvfgk) {
    exd089[b[86]](e1$J[b[667]][b[62]], e1$J[b[667]][b[820]] || e1$J[b[667]][b[62]], l0_d98, ro7tk5, m$c4li), sendApi(e1$J[b[653]], 'User.create_role', {
        'game_pkg': e1$J[b[662]],
        'server_id': e1$J[b[667]][b[62]],
        'role_id': l0_d98,
        'uid': e1$J[b[725]],
        'role_name': ro7tk5,
        'role_type': gayj2,
        'level': m$c4li
    });
}, window[b[881]] = function (rx89, dr8x9, x9or8, zweh6n, kbtvfg, z1enp, ktb5, vfbatg, gvft, enph1) {
    e1$J[b[722]] = rx89, e1$J[b[723]] = dr8x9, e1$J[b[724]] = x9or8, exd089[b[87]](e1$J[b[667]][b[62]], e1$J[b[667]][b[820]] || e1$J[b[667]][b[62]], rx89, dr8x9, x9or8), sendApi(e1$J[b[653]], 'User.update_role', {
        'game_pkg': e1$J[b[662]],
        'server_id': e1$J[b[667]][b[62]],
        'role_id': rx89,
        'uid': e1$J[b[725]],
        'role_name': dr8x9,
        'role_type': zweh6n,
        'level': x9or8,
        'evolution': kbtvfg
    });
}, window[b[882]] = function (o5xu, sjv2ay, $im34c, henwz, ayvfgj, ml_c$i, s6whn2, a62jsy, jgav2y, m_l$0) {
    e1$J[b[722]] = o5xu, e1$J[b[723]] = sjv2ay, e1$J[b[724]] = $im34c, exd089[b[88]](e1$J[b[667]][b[62]], e1$J[b[667]][b[820]] || e1$J[b[667]][b[62]], o5xu, sjv2ay, $im34c), sendApi(e1$J[b[653]], 'User.update_role', {
        'game_pkg': e1$J[b[662]],
        'server_id': e1$J[b[667]][b[62]],
        'role_id': o5xu,
        'uid': e1$J[b[725]],
        'role_name': sjv2ay,
        'role_type': henwz,
        'level': $im34c,
        'evolution': ayvfgj
    });
}, window[b[883]] = function (hn6z) {}, window[b[884]] = function (bgvta, c_lim$) {
    exd089[b[37]](b[37], { 'activity_id': c_lim$ }, function (_ld$m) {
        bgvta && bgvta(_ld$m);
    });
}, window[b[85]] = function () {
    exd089[b[85]]();
}, window[b[885]] = function () {
    exd089[b[96]]();
}, window[b[886]] = function ($0_d, $0mlc_, hzewn1, abtgvf, ajgf, d8_x09, gvbat, dux0) {
    dux0 = dux0 || e1$J[b[667]][b[62]], sendApi(e1$J[b[653]], b[887], {
        'phone': $0_d,
        'role_id': $0mlc_,
        'uid': e1$J[b[725]],
        'game_pkg': e1$J[b[662]],
        'partner_id': e1$J[b[661]],
        'server_id': dux0
    }, gvbat, 0x2, null, function () {
        return !![];
    });
}, window[b[888]] = function (s26w) {
    window[b[889]] = s26w, window[b[889]] && window[b[890]] && (console[b[708]](b[891] + window[b[890]][b[892]]), window[b[889]](window[b[890]]), window[b[890]] = null);
}, window[b[893]] = function (bgt5fk, gbavjf, eh1wzn, shnwz) {
    window[b[894]](b[895], {
        'game_pkg': window['e1$J'][b[662]],
        'role_id': gbavjf,
        'server_id': eh1wzn
    }, shnwz);
}, window['e1$4FJ'] = function (obt5k7, o7b5k, lm$c_i) {
    function v2ysa(sjayv) {
        var x098d_ = [],
            hz6nsw = [],
            hwn26 = lm$c_i || window[b[641]][b[896]];
        for (var tbfvga in hwn26) {
            var jgy2 = Number(tbfvga);
            (!obt5k7 || !obt5k7[b[422]] || obt5k7[b[502]](jgy2) != -0x1) && (hz6nsw[b[444]](hwn26[tbfvga]), x098d_[b[444]]([jgy2, 0x3]));
        }
        window['e1RFJ4$'](window[b[897]], b[898]) >= 0x0 ? (console[b[553]](b[899]), exd089[b[81]] && exd089[b[81]](hz6nsw, function (n1wzeh) {
            console[b[553]](b[900]), console[b[553]](n1wzeh);
            if (n1wzeh && n1wzeh[b[777]] == b[901]) for (var $0m_c in hwn26) {
                if (n1wzeh[hwn26[$0m_c]] == b[902]) {
                    var jgvfa = Number($0m_c);
                    for (var l0c$m_ = 0x0; l0c$m_ < x098d_[b[422]]; l0c$m_++) {
                        if (x098d_[l0c$m_][0x0] == jgvfa) {
                            x098d_[l0c$m_][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['e1RFJ4$'](window[b[897]], b[903]) >= 0x0 ? wx[b[904]]({
                'withSubscriptions': !![],
                'success': function (u8xro) {
                    var cl$4im = u8xro[b[905]][b[906]];
                    if (cl$4im) {
                        console[b[553]](b[907]), console[b[553]](cl$4im);
                        for (var c_i$ in hwn26) {
                            if (cl$4im[hwn26[c_i$]] == b[902]) {
                                var ne1p = Number(c_i$);
                                for (var zph1n = 0x0; zph1n < x098d_[b[422]]; zph1n++) {
                                    if (x098d_[zph1n][0x0] == ne1p) {
                                        x098d_[zph1n][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[b[553]](x098d_), o7b5k && o7b5k(x098d_);
                    } else console[b[553]](b[908]), console[b[553]](u8xro), console[b[553]](x098d_), o7b5k && o7b5k(x098d_);
                },
                'fail': function () {
                    console[b[553]](b[909]), console[b[553]](x098d_), o7b5k && o7b5k(x098d_);
                }
            }) : (console[b[553]](b[910] + window[b[897]]), console[b[553]](x098d_), o7b5k && o7b5k(x098d_));
        })) : (console[b[553]](b[911] + window[b[897]]), console[b[553]](x098d_), o7b5k && o7b5k(x098d_)), wx[b[912]](v2ysa);
    }
    wx[b[913]](v2ysa);
}, window['e1$4JF'] = {
    'isSuccess': ![],
    'level': b[914],
    'isCharging': ![]
}, window['e1$F4J'] = function (ayjv2) {
    wx[b[915]]({
        'success': function (tko7r5) {
            var i$c_l = window['e1$4JF'];
            i$c_l[b[916]] = !![], i$c_l[b[917]] = Number(tko7r5[b[917]])[b[918]](0x0), i$c_l[b[919]] = tko7r5[b[919]], ayjv2 && ayjv2(i$c_l[b[916]], i$c_l[b[917]], i$c_l[b[919]]);
        },
        'fail': function (hnw6s2) {
            console[b[553]](b[920], hnw6s2[b[777]]);
            var nw2sh6 = window['e1$4JF'];
            ayjv2 && ayjv2(nw2sh6[b[916]], nw2sh6[b[917]], nw2sh6[b[919]]);
        }
    });
}, window[b[921]] = function (cmi_l) {
    wx[b[921]]({
        'success': function (ze1hp) {
            cmi_l && cmi_l(!![], ze1hp);
        },
        'fail': function (y2js6w) {
            cmi_l && cmi_l(![], y2js6w);
        }
    });
}, window[b[922]] = function (nwh26s) {
    if (nwh26s) wx[b[922]](nwh26s);
}, window[b[923]] = function (va2jys) {
    wx[b[923]](va2jys);
}, window[b[894]] = function (favjg, _cl$m0, wn1ehz, urok57, x980u, vgktf, q4mi3c, tf57) {
    if (urok57 == undefined) urok57 = 0x1;
    wx[b[739]]({
        'url': favjg,
        'method': q4mi3c || b[924],
        'responseType': b[925],
        'data': _cl$m0,
        'header': { 'content-type': tf57 || b[740] },
        'success': function (fvbjag) {
            DEBUG && console[b[553]](b[926], favjg, info, fvbjag);
            if (fvbjag && fvbjag[b[927]] == 0xc8) {
                var yvsa2 = fvbjag[b[598]];
                !vgktf || vgktf(yvsa2) ? wn1ehz && wn1ehz(yvsa2) : window[b[928]](favjg, _cl$m0, wn1ehz, urok57, x980u, vgktf, fvbjag);
            } else window[b[928]](favjg, _cl$m0, wn1ehz, urok57, x980u, vgktf, fvbjag);
        },
        'fail': function (dl098_) {
            DEBUG && console[b[553]](b[929], favjg, info, dl098_), window[b[928]](favjg, _cl$m0, wn1ehz, urok57, x980u, vgktf, dl098_);
        },
        'complete': function () {}
    });
}, window[b[928]] = function (zhw1, q3mi, yvagj2, mi4, jvgy2a, xo8ur9, tok) {
    mi4 - 0x1 > 0x0 ? setTimeout(function () {
        window[b[894]](zhw1, q3mi, yvagj2, mi4 - 0x1, jvgy2a, xo8ur9);
    }, 0x3e8) : jvgy2a && jvgy2a(JSON[b[729]]({
        'url': zhw1,
        'response': tok
    }));
}, window[b[930]] = function (r5ou, yvfagj, vjayfg, $d_l09, ftkb7, uxo78r, d8l_) {
    !vjayfg && (vjayfg = {});
    var jas2y = Math[b[449]](Date[b[673]]() / 0x3e8);
    vjayfg[b[801]] = jas2y, vjayfg[b[931]] = yvfagj;
    var jafgyv = Object[b[421]](vjayfg)[b[608]](),
        bfjgav = '',
        tk57ro = '';
    for (var sjy2 = 0x0; sjy2 < jafgyv[b[422]]; sjy2++) {
        bfjgav = bfjgav + (sjy2 == 0x0 ? '' : '&') + jafgyv[sjy2] + vjayfg[jafgyv[sjy2]], tk57ro = tk57ro + (sjy2 == 0x0 ? '' : '&') + jafgyv[sjy2] + '=' + encodeURIComponent(vjayfg[jafgyv[sjy2]]);
    }
    bfjgav = bfjgav + e1$J[b[659]];
    var cim$4 = b[932] + md5(bfjgav);
    send(r5ou + '?' + tk57ro + (tk57ro == '' ? '' : '&') + cim$4, null, $d_l09, ftkb7, uxo78r, d8l_ || function (wz6n) {
        return wz6n[b[707]] == b[792];
    }, null, b[26]);
}, window['e1$FJ4'] = function (tork, wjs2) {
    var fjva = 0x0;
    e1$J[b[667]] && (fjva = e1$J[b[667]][b[62]]), sendApi(e1$J[b[655]], b[933], {
        'partnerId': e1$J[b[661]],
        'gamePkg': e1$J[b[662]],
        'logTime': Math[b[449]](Date[b[673]]() / 0x3e8),
        'platformUid': e1$J[b[797]],
        'type': tork,
        'serverId': fjva
    }, null, 0x2, null, function () {
        return !![];
    });
}, window['e1$J4F'] = function (hzs6wn) {
    sendApi(e1$J[b[653]], b[934], {
        'partner_id': e1$J[b[661]],
        'uid': e1$J[b[725]],
        'version': e1$J[b[648]],
        'game_pkg': e1$J[b[662]],
        'device': e1$J['device_id']
    }, e1$JF4, e1FJ$, e1J4);
}, window['e1$JF4'] = function (ux9rd8) {
    if (ux9rd8 && ux9rd8[b[707]] === b[792] && ux9rd8[b[598]]) {
        ux9rd8[b[598]][b[525]]({
            'id': -0x2,
            'name': b[935]
        }), ux9rd8[b[598]][b[525]]({
            'id': -0x1,
            'name': b[936]
        }), e1$J[b[937]] = ux9rd8[b[598]];
        if (window[b[938]]) window[b[938]][b[939]]();
    } else {
        e1$J[b[940]] = ![];
        var ruo8x9 = ux9rd8 ? ux9rd8[b[707]] : '';
        window[b[719]](0x7, b[941] + ruo8x9), window['e14F$J'](b[942] + ruo8x9);
    }
}, window['e14F$'] = function (lcm_$0) {
    sendApi(e1$J[b[653]], b[943], {
        'partner_id': e1$J[b[661]],
        'uid': e1$J[b[725]],
        'version': e1$J[b[648]],
        'game_pkg': e1$J[b[662]],
        'device': e1$J['device_id']
    }, e14$F, e1FJ$, e1J4);
}, window['e14$F'] = function (ajfvgb) {
    e1$J[b[944]] = ![];
    if (ajfvgb && ajfvgb[b[707]] === b[792] && ajfvgb[b[598]]) {
        for (var vbgtfk = 0x0; vbgtfk < ajfvgb[b[598]][b[422]]; vbgtfk++) {
            ajfvgb[b[598]][vbgtfk][b[831]] = e1$F4(ajfvgb[b[598]][vbgtfk]);
        }
        e1$J[b[664]][-0x1] = window[b[945]](ajfvgb[b[598]]), window[b[938]][b[946]](-0x1);
    } else {
        var c0lm_$ = ajfvgb ? ajfvgb[b[707]] : '';
        window[b[719]](0x8, b[947] + c0lm_$), window['e14F$J'](b[948] + c0lm_$);
    }
}, window[b[949]] = function ($_0l9) {
    sendApi(e1$J[b[653]], b[943], {
        'partner_id': e1$J[b[661]],
        'uid': e1$J[b[725]],
        'version': e1$J[b[648]],
        'game_pkg': e1$J[b[662]],
        'device': e1$J['device_id']
    }, $_0l9, e1FJ$, e1J4);
}, window['e1F4$'] = function (o87ux, nszh6w) {
    sendApi(e1$J[b[653]], b[950], {
        'partner_id': e1$J[b[661]],
        'uid': e1$J[b[725]],
        'version': e1$J[b[648]],
        'game_pkg': e1$J[b[662]],
        'device': e1$J['device_id'],
        'server_group_id': nszh6w
    }, e1F$4, e1FJ$, e1J4);
}, window['e1F$4'] = function (uk57r) {
    e1$J[b[944]] = ![];
    if (uk57r && uk57r[b[707]] === b[792] && uk57r[b[598]] && uk57r[b[598]][b[598]]) {
        var f7b5tk = uk57r[b[598]][b[951]],
            o7k = [];
        for (var he1nw = 0x0; he1nw < uk57r[b[598]][b[598]][b[422]]; he1nw++) {
            uk57r[b[598]][b[598]][he1nw][b[831]] = e1$F4(uk57r[b[598]][b[598]][he1nw]), (o7k[b[422]] == 0x0 || uk57r[b[598]][b[598]][he1nw][b[831]] != 0x0) && (o7k[o7k[b[422]]] = uk57r[b[598]][b[598]][he1nw]);
        }
        e1$J[b[664]][f7b5tk] = window[b[945]](o7k), window[b[938]][b[946]](f7b5tk);
    } else {
        var a2vgyj = uk57r ? uk57r[b[707]] : '';
        window[b[719]](0x9, b[952] + a2vgyj), window['e14F$J'](b[953] + a2vgyj);
    }
}, window['e1RFJ$'] = function (yjav2) {
    sendApi(e1$J[b[653]], b[954], {
        'partner_id': e1$J[b[661]],
        'uid': e1$J[b[725]],
        'version': e1$J[b[648]],
        'game_pkg': e1$J[b[662]],
        'device': e1$J['device_id']
    }, reqServerRecommendCallBack, e1FJ$, e1J4);
}, window[b[955]] = function (m0l$d_) {
    e1$J[b[944]] = ![];
    if (m0l$d_ && m0l$d_[b[707]] === b[792] && m0l$d_[b[598]]) {
        for (var w26jys = 0x0; w26jys < m0l$d_[b[598]][b[422]]; w26jys++) {
            m0l$d_[b[598]][w26jys][b[831]] = e1$F4(m0l$d_[b[598]][w26jys]);
        }
        e1$J[b[664]][-0x2] = window[b[945]](m0l$d_[b[598]]), window[b[938]][b[946]](-0x2);
    } else {
        var zhep = m0l$d_ ? m0l$d_[b[707]] : '';
        window[b[719]](0xa, b[956] + zhep), alert(b[957] + zhep);
    }
}, window[b[945]] = function ($_ml0c) {
    return $_ml0c;
}, window['e1$4F'] = function ($_d90, y2s6wj) {
    $_d90 = $_d90 || e1$J[b[667]][b[62]], sendApi(e1$J[b[653]], b[958], {
        'type': '4',
        'game_pkg': e1$J[b[662]],
        'server_id': $_d90
    }, y2s6wj);
}, window[b[959]] = function (dx0_89, i4mqc3, tr57ko, bagtv) {
    tr57ko = tr57ko || e1$J[b[667]][b[62]], sendApi(e1$J[b[653]], b[960], {
        'type': dx0_89,
        'game_pkg': i4mqc3,
        'server_id': tr57ko
    }, bagtv);
}, window[b[961]] = function (nwh6, whz6) {
    sendApi(e1$J[b[653]], b[962], { 'game_pkg': nwh6 }, whz6);
}, window['e1$F4'] = function (n6swh) {
    if (n6swh) {
        if (n6swh[b[831]] == 0x1) {
            if (n6swh['online_status'] == 0x3) return 0x3;else return n6swh['online_status'] == 0x1 ? 0x2 : 0x1;
        } else return n6swh[b[831]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window['e1J4F$'] = function (_d908, miqc43) {
    var $mc43 = window[b[828]][b[830]] == 0x1;
    if ($mc43) {
        var t5ro7k = window[b[828]][b[838]],
            $mc43 = window[b[828]][b[830]] == 0x1;
        window[b[705]][b[706]][b[839]](b[840], t5ro7k, b[35]);
        return;
    }
    e1$J[b[963]] = {
        'step': _d908,
        'server_id': miqc43
    };
    var gfjba = this;
    e14$FJ({ 'title': b[964] }), sendApi(e1$J[b[653]], b[965], {
        'partner_id': e1$J[b[661]],
        'uid': e1$J[b[725]],
        'game_pkg': e1$J[b[662]],
        'server_id': miqc43,
        'platform': e1$J[b[796]],
        'platform_uid': e1$J[b[797]],
        'check_login_time': e1$J[b[800]],
        'check_login_sign': e1$J[b[798]],
        'version_name': e1$J[b[755]]
    }, e1J4$F, e1FJ$, e1J4, function (_0x9) {
        return _0x9[b[707]] == b[792] || _0x9[b[708]] == 'time_err' || _0x9[b[708]] == b[966];
    });
}, window['e1J4$F'] = function (gtkbf) {
    var r78x = this;
    if (gtkbf && gtkbf[b[707]] === b[792] && gtkbf[b[598]]) {
        var bvjfag = e1$J[b[667]];
        bvjfag[b[967]] = e1$J[b[665]], bvjfag[b[799]] = String(gtkbf[b[598]][b[968]]), bvjfag[b[672]] = parseInt(gtkbf[b[598]][b[801]]);
        if (gtkbf[b[598]][b[969]]) bvjfag[b[969]] = parseInt(gtkbf[b[598]][b[969]]);else bvjfag[b[969]] = parseInt(gtkbf[b[598]][b[62]]);
        bvjfag[b[970]] = 0x0, bvjfag[b[726]] = e1$J['base_cdn'], bvjfag[b[971]] = gtkbf[b[598]][b[972]], bvjfag[b[973]] = gtkbf[b[598]][b[973]];
        if (gtkbf[b[598]][b[974]]) bvjfag[b[974]] = parseInt(gtkbf[b[598]][b[974]]);
        console[b[553]](b[975] + JSON[b[729]](bvjfag[b[973]])), e1$J[b[818]] == 0x1 && bvjfag[b[973]] && bvjfag[b[973]][b[976]] == 0x1 && (e1$J[b[977]] = 0x1, window[b[705]][b[706]]['e1RJ$']()), e1JF4$();
    } else {
        if (e1$J[b[963]][b[978]] >= 0x3) {
            var du8x = gtkbf ? gtkbf[b[707]] : '';
            window[b[719]](0xc, b[979] + du8x), e1J4(JSON[b[729]](gtkbf)), window['e14F$J'](b[980] + du8x);
        } else sendApi(e1$J[b[653]], b[775], {
            'platform': e1$J[b[651]],
            'partner_id': e1$J[b[661]],
            'token': e1$J[b[769]],
            'game_pkg': e1$J[b[662]],
            'deviceId': e1$J['device_id'],
            'scene': b[776] + e1$J[b[663]]
        }, function (n6zsw) {
            if (!n6zsw || n6zsw[b[707]] != b[792]) {
                window['e14F$J'](b[794] + n6zsw && n6zsw[b[707]]);
                return;
            }
            e1$J[b[798]] = String(n6zsw[b[799]]), e1$J[b[800]] = String(n6zsw[b[801]]), setTimeout(function () {
                e1J4F$(e1$J[b[963]][b[978]] + 0x1, e1$J[b[963]][b[62]]);
            }, 0x5dc);
        }, e1FJ$, e1J4, function (wsjy2) {
            return wsjy2[b[707]] == b[792] || wsjy2[b[707]] == b[981];
        });
    }
}, window['e1JF4$'] = function () {
    ServerLoading[b[706]][b[836]](e1$J[b[818]]), window[b[684]] = !![], window['e1J$4F']();
}, window['e1JF$4'] = function () {
    if (window[b[685]] && window['e1$FJ'] && window[b[686]] && window[b[687]] && window['e1$JF'] && window['e1$F']) {
        if (!window[b[982]][b[706]]) {
            console[b[553]](b[983] + window[b[982]][b[706]]);
            var _c0l = wx[b[90]](),
                y26ajs = _c0l[b[892]] ? _c0l[b[892]] : 0x0,
                fkt5gb = {
                'cdn': window['e1$J'][b[726]],
                'spareCdn': window['e1$J'][b[761]],
                'newRegister': window['e1$J'][b[818]],
                'wxPC': window['e1$J'][b[683]],
                'wxIOS': window['e1$J'][b[681]],
                'wxAndroid': window['e1$J'][b[682]],
                'wxParam': {
                    'limitLoad': window['e1$J']['e1R4FJ$'],
                    'benchmarkLevel': window['e1$J']['e1R4$FJ'],
                    'wxFrom': window[b[641]][b[436]] == b[984] ? 0x1 : 0x0,
                    'wxSDKVersion': window[b[897]],
                    'qudao': b[985]
                },
                'configType': window['e1$J'][b[674]],
                'exposeType': window['e1$J'][b[676]],
                'scene': y26ajs,
                'video_type': window['e1$J'][b[771]],
                'ad_flag': window['e1$J'][b[773]]
            };
            if (window[b[852]]) for (var okb75t in window[b[852]]) {
                if (!fkt5gb[okb75t]) fkt5gb[okb75t] = window[b[852]][okb75t];
            }
            new window[b[982]](fkt5gb, window['e1$J'][b[679]], window['e1R4F$J']);
        }
    }
}, window['e1J$4F'] = function () {
    if (window[b[685]] && window['e1$FJ'] && window[b[686]] && window[b[687]] && window['e1$JF'] && window['e1$F'] && window[b[684]] && window['e1F$']) {
        e14$JF();
        if (!e1JF$) {
            e1JF$ = !![];
            if (!window[b[982]][b[706]]) window['e1JF$4']();
            var _$lc0 = 0x0,
                ehw6 = wx[b[986]]();
            ehw6 && (window['e1$J'][b[987]] && (_$lc0 = ehw6[b[988]]), console[b[708]](b[989] + ehw6[b[988]] + b[990] + ehw6[b[991]] + b[992] + ehw6[b[993]] + b[994] + ehw6[b[995]] + b[996] + ehw6[b[997]] + b[998] + ehw6[b[999]]));
            var _$mlc = {};
            for (const yg in e1$J[b[667]]) {
                _$mlc[yg] = e1$J[b[667]][yg];
            }
            var $0d_ = {
                'channel': window['e1$J'][b[666]],
                'account': window['e1$J'][b[725]],
                'userId': window['e1$J'][b[795]],
                'cdn': window['e1$J'][b[726]],
                'data': window['e1$J'][b[598]],
                'package': window['e1$J'][b[589]],
                'newRegister': window['e1$J'][b[818]],
                'pkgName': window['e1$J'][b[662]],
                'partnerId': window['e1$J'][b[661]],
                'platform_uid': window['e1$J'][b[797]],
                'deviceId': window['e1$J']['device_id'],
                'selectedServer': _$mlc,
                'configType': window['e1$J'][b[674]],
                'exposeType': window['e1$J'][b[676]],
                'debugUsers': window['e1$J'][b[670]],
                'wxMenuTop': _$lc0,
                'wxShield': window['e1$J'][b[680]],
                'encryptParam': window['e1$J'][b[677]],
                'wx_channel': window['e1$J'][b[770]],
                'zsy_tp_state': window['e1$J'][b[772]]
            };
            if (window[b[852]]) for (var m$lci in window[b[852]]) {
                $0d_[m$lci] = window[b[852]][m$lci];
            }
            window[b[982]][b[706]]['e1J$R']($0d_);
            if (e1$J[b[667]] && e1$J[b[667]][b[62]]) localStorage[b[1000]](b[804] + e1$J[b[662]] + e1$J[b[725]], e1$J[b[667]][b[62]]);
        }
    } else console[b[708]](b[1001] + window[b[685]] + b[1002] + window['e1$FJ'] + b[1003] + window[b[686]] + b[1004] + window[b[687]] + b[1005] + window['e1$JF'] + b[1006] + window['e1$F'] + b[1007] + window[b[684]] + b[1008] + window['e1F$']);
};