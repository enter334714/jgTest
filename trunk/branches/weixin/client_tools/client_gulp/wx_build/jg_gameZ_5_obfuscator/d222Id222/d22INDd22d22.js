var F = wx.$D;
import Dcu03e from '../d22d22basdd22/d225sdkd22.js';
window[F[560626]] = { 'wxVersion': window[F[560005]][F[560006]] }, window[F[560627]] = ![], window[F[560628]] = 0x1, window[F[560629]] = 0x1, window[F[560630]] = !![], window[F[560631]] = !![], window[F[560632]] = '', window[F[560633]] = ![], window[F[560015]] = {
    'base_cdn': F[560634],
    'cdn': F[560634]
}, D124[F[560635]] = {}, D124[F[560636]] = '0', D124[F[560091]] = window[F[560626]][F[560372]], D124[F[560126]] = '', D124['os'] = '1', D124[F[560637]] = F[560638], D124[F[560639]] = F[560640], D124[F[560641]] = F[560642], D124[F[560643]] = F[560644], D124[F[560645]] = F[560646], D124[F[560647]] = '1', D124[F[560426]] = '', D124[F[560648]] = '', D124[F[560649]] = 0x0, D124[F[560465]] = {}, D124[F[560650]] = parseInt(D124[F[560647]]), D124[F[560651]] = D124[F[560647]], D124[F[560022]] = {}, D124[F[560029]] = F[560652], D124[F[560653]] = ![], D124[F[560654]] = F[560655], D124[F[560656]] = Date[F[560310]](), D124[F[560657]] = F[560658], D124[F[560659]] = '_a', D124[F[560356]] = 0x2, D124[F[560020]] = 0x7c1, D124[F[560372]] = window[F[560626]][F[560372]], D124[F[560660]] = ![], D124[F[560118]] = ![], D124[F[560121]] = ![], D124[F[560124]] = ![], window[F[560661]] = 0x5, window[F[560662]] = ![], window[F[560065]] = ![], window[F[560074]] = ![], window[F[560562]] = ![], window[F[560571]] = ![], window[F[560663]] = ![], window[F[560664]] = ![], window[F[560665]] = ![], window[F[560666]] = ![], window[F[560566]] = null, window[F[560667]] = function (p9uf7b) {
    console[F[560045]](F[560667], p9uf7b), wx[F[560668]]({}), wx[F[560052]]({
        'title': F[560083],
        'content': p9uf7b,
        'success'(stve0) {
            if (stve0[F[560669]]) console[F[560045]](F[560670]);else stve0[F[560671]] && console[F[560045]](F[560672]);
        }
    });
}, window[F[560673]] = function (su3ec0) {
    console[F[560045]](F[560674], su3ec0), D1I24X(), wx[F[560052]]({
        'title': F[560083],
        'content': su3ec0,
        'confirmText': F[560675],
        'cancelText': F[560676],
        'success'(m_lizo) {
            if (m_lizo[F[560669]]) window[F[560080]]();else m_lizo[F[560671]] && (console[F[560045]](F[560677]), wx[F[560678]]({}));
        }
    });
}, window[F[560679]] = function (h_irz) {
    console[F[560045]](F[560679], h_irz), wx[F[560052]]({
        'title': F[560083],
        'content': h_irz,
        'confirmText': F[560680],
        'showCancel': ![],
        'complete'(zliom) {
            console[F[560045]](F[560677]), wx[F[560678]]({});
        }
    });
}, window[F[560681]] = ![], window[F[560682]] = function (z_miol) {
    window[F[560681]] = !![], wx[F[560683]](z_miol);
}, window[F[560684]] = function () {
    window[F[560681]] && (window[F[560681]] = ![], wx[F[560668]]({}));
}, window[F[560557]] = function (i_ozl) {
    window[F[560035]][F[560036]][F[560557]](i_ozl);
}, window[F[560685]] = function (h2rnz, te3s) {
    Dcu03e[F[560685]](h2rnz, function (wvtkqs) {
        wvtkqs && wvtkqs[F[560481]] ? wvtkqs[F[560481]][F[560480]] == 0x1 ? te3s(!![]) : (te3s(![]), console[F[560000]](F[560686] + wvtkqs[F[560481]][F[560687]])) : console[F[560045]](F[560685], wvtkqs);
    });
}, window[F[560688]] = function (kxj6ga) {
    console[F[560045]](F[560689], kxj6ga);
}, window[F[560362]] = function (rz2n1) {}, window[F[560367]] = function (hrz2_i, moga5l, x6jgk) {}, window[F[560690]] = function (eu3p0c) {
    console[F[560045]](F[560691], eu3p0c), window[F[560035]][F[560036]][F[560360]](), window[F[560035]][F[560036]][F[560361]](), window[F[560035]][F[560036]][F[560376]]();
}, window[F[560692]] = function ($hn18y) {
    window[F[560693]](0xe, F[560694] + $hn18y), window[F[560673]](F[560695]);
    var nhr2z1 = {
        'id': window[F[560015]][F[560016]],
        'role': window[F[560015]][F[560017]],
        'level': window[F[560015]][F[560018]],
        'account': window[F[560015]][F[560019]],
        'version': window[F[560015]][F[560020]],
        'cdn': window[F[560015]][F[560021]],
        'pkgName': window[F[560015]][F[560426]],
        'gamever': window[F[560005]][F[560006]],
        'serverid': window[F[560015]][F[560022]] ? window[F[560015]][F[560022]][F[560023]] : 0x0,
        'systemInfo': window[F[560024]],
        'error': F[560696],
        'stack': $hn18y ? $hn18y : F[560695]
    },
        n8hr12 = JSON[F[560026]](nhr2z1);
    console[F[560027]](F[560697] + n8hr12), window[F[560029]](n8hr12);
}, window[F[560693]] = function (vwqtk6, a65xj) {
    sendApi(D124[F[560641]], F[560698], {
        'game_pkg': D124[F[560426]],
        'partner_id': D124[F[560647]],
        'server_id': D124[F[560022]] && D124[F[560022]][F[560023]] > 0x0 ? D124[F[560022]][F[560023]] : 0x0,
        'uid': D124[F[560019]] > 0x0 ? D124[F[560019]] : 0x0,
        'type': vwqtk6,
        'info': a65xj
    });
}, window[F[560699]] = function (z_h2r) {
    var b39upf = JSON[F[560700]](z_h2r);
    b39upf[F[560701]] = window[F[560005]][F[560006]], b39upf[F[560702]] = window[F[560015]][F[560022]] ? window[F[560015]][F[560022]][F[560023]] : 0x0, b39upf[F[560024]] = window[F[560024]];
    var r8hn2 = JSON[F[560026]](b39upf);
    console[F[560027]](F[560703] + r8hn2), window[F[560029]](r8hn2);
}, window[F[560081]] = function (hzn1r2, lmga5) {
    var t3sce0 = {
        'id': window[F[560015]][F[560016]],
        'role': window[F[560015]][F[560017]],
        'level': window[F[560015]][F[560018]],
        'account': window[F[560015]][F[560019]],
        'version': window[F[560015]][F[560020]],
        'cdn': window[F[560015]][F[560021]],
        'pkgName': window[F[560015]][F[560426]],
        'gamever': window[F[560005]][F[560006]],
        'serverid': window[F[560015]][F[560022]] ? window[F[560015]][F[560022]][F[560023]] : 0x0,
        'systemInfo': window[F[560024]],
        'error': hzn1r2,
        'stack': lmga5
    },
        up3fb9 = JSON[F[560026]](t3sce0);
    console[F[560606]](F[560704] + up3fb9), window[F[560029]](up3fb9);
}, window[F[560029]] = function (u3bpc) {
    if (window[F[560015]][F[560127]] == F[560705]) return;
    var h_i = D124[F[560029]] + F[560706] + D124[F[560019]];
    wx[F[560707]]({
        'url': h_i,
        'method': F[560708],
        'data': u3bpc,
        'header': {
            'content-type': F[560709],
            'cache-control': F[560710]
        },
        'success': function ($n1yh8) {
            DEBUG && console[F[560045]](F[560711], h_i, u3bpc, $n1yh8);
        },
        'fail': function (moi5) {
            DEBUG && console[F[560045]](F[560711], h_i, u3bpc, moi5);
        },
        'complete': function () {}
    });
}, window[F[560712]] = function () {
    function l_ziom() {
        return ((0x1 + Math[F[560364]]()) * 0x10000 | 0x0)[F[560713]](0x10)[F[560714]](0x1);
    }
    return l_ziom() + l_ziom() + '-' + l_ziom() + '-' + l_ziom() + '-' + l_ziom() + '+' + l_ziom() + l_ziom() + l_ziom();
}, window[F[560080]] = function () {
    console[F[560045]](F[560715]);
    var u0p3c = Dcu03e[F[560716]]();
    D124[F[560651]] = u0p3c[F[560717]], D124[F[560650]] = u0p3c[F[560717]], D124[F[560647]] = u0p3c[F[560717]], D124[F[560426]] = u0p3c[F[560718]];
    var goaml = { 'game_ver': D124[F[560091]] };
    D124[F[560648]] = this[F[560712]](), D1I2X4({ 'title': F[560719] }), Dcu03e[F[560525]](goaml, this[F[560720]][F[560369]](this));
}, window[F[560720]] = function (jgkx6a) {
    var p0ub3c = jgkx6a[F[560567]];
    sdkInitRes = jgkx6a, console[F[560045]](F[560721] + p0ub3c + F[560722] + (p0ub3c == 0x1) + F[560723] + jgkx6a[F[560006]] + F[560724] + window[F[560626]][F[560372]]);
    if (!jgkx6a[F[560006]] || window[F[560039]](window[F[560626]][F[560372]], jgkx6a[F[560006]]) < 0x0) console[F[560045]](F[560725]), D124[F[560639]] = F[560726], D124[F[560641]] = F[560727], D124[F[560643]] = F[560728], D124[F[560021]] = F[560729], D124[F[560730]] = F[560731], D124[F[560732]] = 'jh', D124[F[560660]] = ![];else window[F[560039]](window[F[560626]][F[560372]], jgkx6a[F[560006]]) == 0x0 ? (console[F[560045]](F[560733]), D124[F[560639]] = F[560640], D124[F[560641]] = F[560642], D124[F[560643]] = F[560644], D124[F[560021]] = F[560734], D124[F[560730]] = F[560731], D124[F[560732]] = F[560735], D124[F[560660]] = !![]) : (console[F[560045]](F[560736]), D124[F[560639]] = F[560640], D124[F[560641]] = F[560642], D124[F[560643]] = F[560644], D124[F[560021]] = F[560734], D124[F[560730]] = F[560731], D124[F[560732]] = F[560735], D124[F[560660]] = ![]);
    D124[F[560649]] = config[F[560737]] ? config[F[560737]] : 0x0, this[F[560738]](), this[F[560739]](), window[F[560740]] = 0x5, D1I2X4({ 'title': F[560741] }), Dcu03e[F[560742]](this[F[560743]][F[560369]](this));
}, window[F[560740]] = 0x5, window[F[560743]] = function (pu39fb, e0s3t) {
    if (pu39fb == 0x0 && e0s3t && e0s3t[F[560744]]) {
        D124[F[560745]] = e0s3t[F[560744]], D124[F[560746]] = e0s3t[F[560746]];
        var nhy81 = this;
        D1I2X4({ 'title': F[560747] }), sendApi(D124[F[560639]], F[560748], {
            'platform': D124[F[560637]],
            'partner_id': D124[F[560647]],
            'token': e0s3t[F[560744]],
            'game_pkg': D124[F[560426]],
            'deviceId': D124[F[560648]],
            'scene': F[560749] + D124[F[560649]]
        }, this[F[560750]][F[560369]](this), D1X42, D14I);
    } else e0s3t && e0s3t[F[560063]] && window[F[560740]] > 0x0 && (e0s3t[F[560063]][F[560119]](F[560751]) != -0x1 || e0s3t[F[560063]][F[560119]](F[560752]) != -0x1 || e0s3t[F[560063]][F[560119]](F[560753]) != -0x1 || e0s3t[F[560063]][F[560119]](F[560754]) != -0x1 || e0s3t[F[560063]][F[560119]](F[560755]) != -0x1 || e0s3t[F[560063]][F[560119]](F[560756]) != -0x1) ? (window[F[560740]]--, Dcu03e[F[560742]](this[F[560743]][F[560369]](this))) : (window[F[560693]](0x1, F[560757] + pu39fb + F[560758] + (e0s3t ? e0s3t[F[560063]] : '')), window[F[560081]](F[560759], JSON[F[560026]]({
        'status': pu39fb,
        'data': e0s3t
    })), window[F[560673]](F[560760] + (e0s3t && e0s3t[F[560063]] ? '，' + e0s3t[F[560063]] : '')));
}, window[F[560750]] = function (kwaxj) {
    if (!kwaxj) {
        window[F[560693]](0x2, F[560761]), window[F[560081]](F[560762], F[560763]), window[F[560673]](F[560764]);
        return;
    }
    if (kwaxj[F[560480]] != F[560479]) {
        window[F[560693]](0x2, F[560765] + kwaxj[F[560480]]), window[F[560081]](F[560762], JSON[F[560026]](kwaxj)), window[F[560673]](F[560766] + kwaxj[F[560480]]);
        return;
    }
    if (kwaxj[F[560767]] == 0x1) {
        window[F[560673]](F[560768]);
        return;
    }
    D124[F[560769]] = String(kwaxj[F[560019]]), D124[F[560019]] = String(kwaxj[F[560019]]), D124[F[560095]] = String(kwaxj[F[560095]]), D124[F[560651]] = String(kwaxj[F[560095]]), D124[F[560770]] = String(kwaxj[F[560770]]), D124[F[560771]] = String(kwaxj[F[560772]]), D124[F[560773]] = String(kwaxj[F[560774]]), D124[F[560772]] = '';
    var upc03e = this;
    D1I2X4({ 'title': F[560775] });
    var g6jka = localStorage[F[560431]](F[560776] + D124[F[560426]] + D124[F[560019]]);
    if (g6jka && g6jka != '') {
        var pf79b = Number(g6jka);
        upc03e[F[560777]](pf79b);
    } else upc03e[F[560778]]();
}, window[F[560778]] = function () {
    var $h2n = this;
    sendApi(D124[F[560639]], F[560779], {
        'partner_id': D124[F[560647]],
        'uid': D124[F[560019]],
        'version': D124[F[560091]],
        'game_pkg': D124[F[560426]],
        'device': D124[F[560648]]
    }, $h2n[F[560780]][F[560369]]($h2n), D1X42, D14I);
}, window[F[560780]] = function (zhnr12) {
    if (!zhnr12) {
        window[F[560693]](0x3, F[560781]), window[F[560673]](F[560781]);
        return;
    }
    if (zhnr12[F[560480]] != F[560479]) {
        window[F[560693]](0x3, F[560782] + zhnr12[F[560480]]), window[F[560673]](F[560782] + zhnr12[F[560480]]);
        return;
    }
    if (!zhnr12[F[560481]] || zhnr12[F[560481]][F[560009]] == 0x0) {
        window[F[560693]](0x3, F[560783]), window[F[560673]](F[560784]);
        return;
    }
    this[F[560785]](zhnr12);
}, window[F[560777]] = function (u79bp) {
    var _iorl = this;
    sendApi(D124[F[560639]], F[560786], {
        'server_id': u79bp,
        'time': Date[F[560310]]() / 0x3e8
    }, _iorl[F[560787]][F[560369]](_iorl), D1X42, D14I);
}, window[F[560787]] = function (xkq) {
    if (!xkq) {
        window[F[560693]](0x4, F[560788]), this[F[560778]]();
        return;
    }
    if (xkq[F[560480]] != F[560479]) {
        window[F[560693]](0x4, F[560789] + xkq[F[560480]]), this[F[560778]]();
        return;
    }
    if (!xkq[F[560481]] || xkq[F[560481]][F[560009]] == 0x0) {
        window[F[560693]](0x4, F[560790]), this[F[560778]]();
        return;
    }
    this[F[560785]](xkq), window[F[560035]] && window[F[560035]][F[560036]][F[560564]] && window[F[560035]][F[560036]][F[560564]](sdkInitRes[F[560791]], sdkInitRes[F[560792]], sdkInitRes[F[560793]], sdkInitRes[F[560794]], sdkInitRes[F[560795]]);
}, window[F[560785]] = function (sqkwt) {
    D124[F[560578]] = sqkwt[F[560796]] != undefined ? sqkwt[F[560796]] : 0x0, D124[F[560022]] = {
        'server_id': String(sqkwt[F[560481]][0x0][F[560023]]),
        'server_name': String(sqkwt[F[560481]][0x0][F[560455]]),
        'entry_ip': sqkwt[F[560481]][0x0][F[560797]],
        'entry_port': parseInt(sqkwt[F[560481]][0x0][F[560798]]),
        'status': D12XI(sqkwt[F[560481]][0x0]),
        'start_time': sqkwt[F[560481]][0x0][F[560799]],
        'maintain_time': sqkwt[F[560481]][0x0][F[560470]] ? sqkwt[F[560481]][0x0][F[560470]] : '',
        'cdn': D124[F[560021]]
    }, this[F[560800]]();
}, window[F[560800]] = function () {
    if (D124[F[560578]] == 0x1) {
        var i_l2r = D124[F[560022]][F[560456]];
        if (i_l2r === -0x1 || i_l2r === 0x0) {
            window[F[560693]](0xf, F[560801] + D124[F[560022]]['id'] + F[560802] + D124[F[560022]][F[560456]]), window[F[560673]](i_l2r === -0x1 ? F[560803] : F[560804]);
            return;
        }
        D14IX2(0x0, D124[F[560022]][F[560023]]), window[F[560035]][F[560036]][F[560572]](D124[F[560578]]);
    } else window[F[560035]][F[560036]][F[560570]](), D1I24X();
    window[F[560665]] = !![], window[F[560066]](), window[F[560067]]();
}, window[F[560738]] = function () {
    sendApi(D124[F[560639]], F[560805], {
        'game_pkg': D124[F[560426]],
        'version_name': D124[F[560732]]
    }, this[F[560806]][F[560369]](this), D1X42, D14I);
}, window[F[560806]] = function ($281) {
    if (!$281) {
        window[F[560693]](0x5, F[560807]), window[F[560673]](F[560807]);
        return;
    }
    if ($281[F[560480]] != F[560479]) {
        window[F[560693]](0x5, F[560808] + $281[F[560480]]), window[F[560673]](F[560808] + $281[F[560480]]);
        return;
    }
    if (!$281[F[560481]] || !$281[F[560481]][F[560091]]) {
        window[F[560693]](0x5, F[560809] + ($281[F[560481]] && $281[F[560481]][F[560091]])), window[F[560673]](F[560809] + ($281[F[560481]] && $281[F[560481]][F[560091]]));
        return;
    }
    $281[F[560481]][F[560810]] && $281[F[560481]][F[560810]][F[560009]] > 0xa && (D124[F[560811]] = $281[F[560481]][F[560810]], D124[F[560021]] = $281[F[560481]][F[560810]]), $281[F[560481]][F[560091]] && (D124[F[560020]] = $281[F[560481]][F[560091]]), console[F[560000]](F[560812] + D124[F[560020]] + F[560813] + D124[F[560732]]), window[F[560663]] = !![], window[F[560066]](), window[F[560067]]();
}, window[F[560814]], window[F[560739]] = function () {
    sendApi(D124[F[560639]], F[560815], { 'game_pkg': D124[F[560426]] }, this[F[560816]][F[560369]](this), D1X42, D14I);
}, window[F[560816]] = function (_g5om) {
    if (_g5om && _g5om[F[560480]] === F[560479] && _g5om[F[560481]]) {
        window[F[560814]] = _g5om[F[560481]];
        for (var p94f7b in _g5om[F[560481]]) {
            D124[p94f7b] = _g5om[F[560481]][p94f7b];
        }
    } else window[F[560693]](0xb, F[560817]), console[F[560000]](F[560818] + _g5om[F[560480]]);
    window[F[560664]] = !![], window[F[560067]]();
}, window[F[560819]] = function (o5i, qvwks, n81$yh, svt0ce, qvw6k, vw6q, b93cpu, g6xkaj, tesc, e3cs0) {
    qvw6k = String(qvw6k);
    var ja5xg6 = b93cpu,
        a5gmlo = g6xkaj;
    D124[F[560635]][qvw6k] = {
        'productid': qvw6k,
        'productname': ja5xg6,
        'productdesc': a5gmlo,
        'roleid': o5i,
        'rolename': qvwks,
        'rolelevel': n81$yh,
        'price': vw6q,
        'callback': tesc
    }, sendApi(D124[F[560643]], F[560820], {
        'game_pkg': D124[F[560426]],
        'server_id': D124[F[560022]][F[560023]],
        'server_name': D124[F[560022]][F[560455]],
        'level': n81$yh,
        'uid': D124[F[560019]],
        'role_id': o5i,
        'role_name': qvwks,
        'product_id': qvw6k,
        'product_name': ja5xg6,
        'product_desc': a5gmlo,
        'money': vw6q,
        'partner_id': D124[F[560647]]
    }, toPayCallBack, D1X42, D14I);
}, window[F[560821]] = function (ihr12z) {
    if (ihr12z && (ihr12z[F[560822]] === 0xc8 || ihr12z[F[560480]] == F[560479])) {
        var svtwqk = D124[F[560635]][String(ihr12z[F[560823]])];
        if (svtwqk[F[560824]]) svtwqk[F[560824]](ihr12z[F[560823]], ihr12z[F[560825]], -0x1);
        Dcu03e[F[560826]]({
            'cpbill': ihr12z[F[560825]],
            'productid': ihr12z[F[560823]],
            'productname': svtwqk[F[560827]],
            'productdesc': svtwqk[F[560828]],
            'serverid': D124[F[560022]][F[560023]],
            'servername': D124[F[560022]][F[560455]],
            'roleid': svtwqk[F[560829]],
            'rolename': svtwqk[F[560830]],
            'rolelevel': svtwqk[F[560831]],
            'price': svtwqk[F[560832]],
            'extension': JSON[F[560026]]({ 'cp_order_id': ihr12z[F[560825]] })
        }, function (l_zor, l2i_z) {
            svtwqk[F[560824]] && l_zor == 0x0 && svtwqk[F[560824]](ihr12z[F[560823]], ihr12z[F[560825]], l_zor);
            console[F[560000]](JSON[F[560026]]({
                'type': F[560833],
                'status': l_zor,
                'data': ihr12z,
                'role_name': svtwqk[F[560830]]
            }));
            if (l_zor === 0x0) {} else {
                if (l_zor === 0x1) {} else {
                    if (l_zor === 0x2) {}
                }
            }
        });
    } else {
        var rozl_i = ihr12z ? F[560834] + ihr12z[F[560822]] + F[560835] + ihr12z[F[560480]] + F[560836] + ihr12z[F[560000]] : F[560837];
        window[F[560693]](0xd, F[560838] + rozl_i), alert(rozl_i);
    }
}, window[F[560839]] = function () {}, window[F[560840]] = function (wtvseq, _2irl, cup30b, b7fp49, uc39p) {
    Dcu03e[F[560841]](D124[F[560022]][F[560023]], D124[F[560022]][F[560455]] || D124[F[560022]][F[560023]], wtvseq, _2irl, cup30b), sendApi(D124[F[560639]], F[560842], {
        'game_pkg': D124[F[560426]],
        'server_id': D124[F[560022]][F[560023]],
        'role_id': wtvseq,
        'uid': D124[F[560019]],
        'role_name': _2irl,
        'role_type': b7fp49,
        'level': cup30b
    });
}, window[F[560843]] = function (agjo, q6vtkw, _im5, use, h18$, r_lzi2, aog, bpc30, p9b47, xjwa) {
    D124[F[560016]] = agjo, D124[F[560017]] = q6vtkw, D124[F[560018]] = _im5, Dcu03e[F[560844]](D124[F[560022]][F[560023]], D124[F[560022]][F[560455]] || D124[F[560022]][F[560023]], agjo, q6vtkw, _im5), sendApi(D124[F[560639]], F[560845], {
        'game_pkg': D124[F[560426]],
        'server_id': D124[F[560022]][F[560023]],
        'role_id': agjo,
        'uid': D124[F[560019]],
        'role_name': q6vtkw,
        'role_type': use,
        'level': _im5,
        'evolution': h18$
    });
}, window[F[560846]] = function (c0etv, g5ojma, zmiol_, lmao5, m5agx, bu30pc, qxkwj6, kwtvqs, ev0sq, jkx6g) {
    D124[F[560016]] = c0etv, D124[F[560017]] = g5ojma, D124[F[560018]] = zmiol_, Dcu03e[F[560847]](D124[F[560022]][F[560023]], D124[F[560022]][F[560455]] || D124[F[560022]][F[560023]], c0etv, g5ojma, zmiol_), sendApi(D124[F[560639]], F[560845], {
        'game_pkg': D124[F[560426]],
        'server_id': D124[F[560022]][F[560023]],
        'role_id': c0etv,
        'uid': D124[F[560019]],
        'role_name': g5ojma,
        'role_type': lmao5,
        'level': zmiol_,
        'evolution': m5agx
    });
}, window[F[560848]] = function (ri1) {}, window[F[560849]] = function (hz_ir2) {
    Dcu03e[F[560850]](F[560850], function (epc0u3) {
        hz_ir2 && hz_ir2(epc0u3);
    });
}, window[F[560851]] = function () {
    Dcu03e[F[560851]]();
}, window[F[560852]] = function () {
    Dcu03e[F[560853]]();
}, window[F[560854]] = function (xwjk6a, hrz_i2, xakg6, lrzo, s0u, q6kxwv, sectv0, miol_z) {
    miol_z = miol_z || D124[F[560022]][F[560023]], sendApi(D124[F[560639]], F[560855], {
        'phone': xwjk6a,
        'role_id': hrz_i2,
        'uid': D124[F[560019]],
        'game_pkg': D124[F[560426]],
        'partner_id': D124[F[560647]],
        'server_id': miol_z
    }, sectv0, 0x2, null, function () {
        return !![];
    });
}, window[F[560149]] = function (qkvw6) {
    window[F[560151]] = qkvw6, window[F[560151]] && window[F[560150]] && (console[F[560000]](F[560152] + window[F[560150]][F[560153]]), window[F[560151]](window[F[560150]]), window[F[560150]] = null);
}, window[F[560856]] = function (k6wtqv, cte0sv, sqtkv, bc30u) {
    window[F[560857]](F[560858], {
        'game_pkg': window[F[560015]][F[560426]],
        'role_id': cte0sv,
        'server_id': sqtkv
    }, bc30u);
}, window[F[560859]] = function (p79bf, kajgx6, pfu97b) {
    function ioml(ori_l) {
        var irolz_ = [],
            ola5g = [],
            ozrl = pfu97b || window[F[560005]][F[560860]];
        for (var vs0tqe in ozrl) {
            var buc9p3 = Number(vs0tqe);
            (!p79bf || !p79bf[F[560009]] || p79bf[F[560119]](buc9p3) != -0x1) && (ola5g[F[560042]](ozrl[vs0tqe]), irolz_[F[560042]]([buc9p3, 0x3]));
        }
        window[F[560039]](window[F[560043]], F[560861]) >= 0x0 ? (console[F[560045]](F[560862]), Dcu03e[F[560863]] && Dcu03e[F[560863]](ola5g, function (g6axkj) {
            console[F[560045]](F[560864]), console[F[560045]](g6axkj);
            if (g6axkj && g6axkj[F[560063]] == F[560865]) for (var wv6q in ozrl) {
                if (g6axkj[ozrl[wv6q]] == F[560866]) {
                    var i_5mo = Number(wv6q);
                    for (var tvswq = 0x0; tvswq < irolz_[F[560009]]; tvswq++) {
                        if (irolz_[tvswq][0x0] == i_5mo) {
                            irolz_[tvswq][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window[F[560039]](window[F[560043]], F[560867]) >= 0x0 ? wx[F[560868]]({
                'withSubscriptions': !![],
                'success': function (qwsvkt) {
                    var sc0e3u = qwsvkt[F[560869]][F[560870]];
                    if (sc0e3u) {
                        console[F[560045]](F[560871]), console[F[560045]](sc0e3u);
                        for (var qwvtes in ozrl) {
                            if (sc0e3u[ozrl[qwvtes]] == F[560866]) {
                                var mlo5_ = Number(qwvtes);
                                for (var ri12h = 0x0; ri12h < irolz_[F[560009]]; ri12h++) {
                                    if (irolz_[ri12h][0x0] == mlo5_) {
                                        irolz_[ri12h][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[F[560045]](irolz_), kajgx6 && kajgx6(irolz_);
                    } else console[F[560045]](F[560872]), console[F[560045]](qwsvkt), console[F[560045]](irolz_), kajgx6 && kajgx6(irolz_);
                },
                'fail': function () {
                    console[F[560045]](F[560873]), console[F[560045]](irolz_), kajgx6 && kajgx6(irolz_);
                }
            }) : (console[F[560045]](F[560874] + window[F[560043]]), console[F[560045]](irolz_), kajgx6 && kajgx6(irolz_));
        })) : (console[F[560045]](F[560875] + window[F[560043]]), console[F[560045]](irolz_), kajgx6 && kajgx6(irolz_)), wx[F[560876]](ioml);
    }
    wx[F[560877]](ioml);
}, window[F[560878]] = {
    'isSuccess': ![],
    'level': F[560879],
    'isCharging': ![]
}, window[F[560880]] = function (_z2ri) {
    wx[F[560137]]({
        'success': function (c0te3) {
            var i2zhr = window[F[560878]];
            i2zhr[F[560881]] = !![], i2zhr[F[560139]] = Number(c0te3[F[560139]])[F[560882]](0x0), i2zhr[F[560141]] = c0te3[F[560141]], _z2ri && _z2ri(i2zhr[F[560881]], i2zhr[F[560139]], i2zhr[F[560141]]);
        },
        'fail': function (oi5_) {
            console[F[560045]](F[560883], oi5_[F[560063]]);
            var vqst0 = window[F[560878]];
            _z2ri && _z2ri(vqst0[F[560881]], vqst0[F[560139]], vqst0[F[560141]]);
        }
    });
}, window[F[560142]] = function (c0s3eu) {
    wx[F[560142]]({
        'success': function (uc03p) {
            c0s3eu && c0s3eu(!![], uc03p);
        },
        'fail': function (e3cts) {
            c0s3eu && c0s3eu(![], e3cts);
        }
    });
}, window[F[560146]] = function (jx65ga) {
    if (jx65ga) wx[F[560146]](jx65ga);
}, window[F[560884]] = function (_r2zh) {
    wx[F[560884]](_r2zh);
}, window[F[560857]] = function (gk6a, lizr2_, vse0tc, tkq6vw, cupe3, nhr2, xka6jg, r_ih2) {
    if (tkq6vw == undefined) tkq6vw = 0x1;
    wx[F[560707]]({
        'url': gk6a,
        'method': xka6jg || F[560885],
        'responseType': F[560366],
        'data': lizr2_,
        'header': { 'content-type': r_ih2 || F[560709] },
        'success': function (ue0c3) {
            DEBUG && console[F[560045]](F[560886], gk6a, info, ue0c3);
            if (ue0c3 && ue0c3[F[560887]] == 0xc8) {
                var xkawj = ue0c3[F[560481]];
                !nhr2 || nhr2(xkawj) ? vse0tc && vse0tc(xkawj) : window[F[560888]](gk6a, lizr2_, vse0tc, tkq6vw, cupe3, nhr2, ue0c3);
            } else window[F[560888]](gk6a, lizr2_, vse0tc, tkq6vw, cupe3, nhr2, ue0c3);
        },
        'fail': function (ml_5i) {
            DEBUG && console[F[560045]](F[560889], gk6a, info, ml_5i), window[F[560888]](gk6a, lizr2_, vse0tc, tkq6vw, cupe3, nhr2, ml_5i);
        },
        'complete': function () {}
    });
}, window[F[560888]] = function (xjka6g, pubc93, _iz2, s0tqve, kxa6g, gkjxa6, u30bp) {
    s0tqve - 0x1 > 0x0 ? setTimeout(function () {
        window[F[560857]](xjka6g, pubc93, _iz2, s0tqve - 0x1, kxa6g, gkjxa6);
    }, 0x3e8) : kxa6g && kxa6g(JSON[F[560026]]({
        'url': xjka6g,
        'response': u30bp
    }));
}, window[F[560890]] = function (uc3p0, o_mzi, a5gjm, cve0t, oriz_, tksqv, lzimo_) {
    !a5gjm && (a5gjm = {});
    var _zoril = Math[F[560590]](Date[F[560310]]() / 0x3e8);
    a5gjm[F[560774]] = _zoril, a5gjm[F[560891]] = o_mzi;
    var rizh21 = Object[F[560892]](a5gjm)[F[560485]](),
        x5gam = '',
        uc30es = '';
    for (var _zl2r = 0x0; _zl2r < rizh21[F[560009]]; _zl2r++) {
        x5gam = x5gam + (_zl2r == 0x0 ? '' : '&') + rizh21[_zl2r] + a5gjm[rizh21[_zl2r]], uc30es = uc30es + (_zl2r == 0x0 ? '' : '&') + rizh21[_zl2r] + '=' + encodeURIComponent(a5gjm[rizh21[_zl2r]]);
    }
    x5gam = x5gam + D124[F[560645]];
    var _lioz = F[560893] + md5(x5gam);
    send(uc3p0 + '?' + uc30es + (uc30es == '' ? '' : '&') + _lioz, null, cve0t, oriz_, tksqv, lzimo_ || function (ml_go) {
        return ml_go[F[560480]] == F[560479];
    }, null, F[560894]);
}, window[F[560895]] = function (hirz2_, vkqsw) {
    var fu3b9p = 0x0;
    D124[F[560022]] && (fu3b9p = D124[F[560022]][F[560023]]), sendApi(D124[F[560641]], F[560896], {
        'partnerId': D124[F[560647]],
        'gamePkg': D124[F[560426]],
        'logTime': Math[F[560590]](Date[F[560310]]() / 0x3e8),
        'platformUid': D124[F[560770]],
        'type': hirz2_,
        'serverId': fu3b9p
    }, null, 0x2, null, function () {
        return !![];
    });
}, window[F[560897]] = function (o_lizr) {
    sendApi(D124[F[560639]], F[560898], {
        'partner_id': D124[F[560647]],
        'uid': D124[F[560019]],
        'version': D124[F[560091]],
        'game_pkg': D124[F[560426]],
        'device': D124[F[560648]]
    }, D124XI, D1X42, D14I);
}, window[F[560899]] = function (rzio_) {
    if (rzio_ && rzio_[F[560480]] === F[560479] && rzio_[F[560481]]) {
        rzio_[F[560481]][F[560900]]({
            'id': -0x2,
            'name': F[560901]
        }), rzio_[F[560481]][F[560900]]({
            'id': -0x1,
            'name': F[560902]
        }), D124[F[560425]] = rzio_[F[560481]];
        if (window[F[560416]]) window[F[560416]][F[560459]]();
    } else {
        D124[F[560436]] = ![];
        var pf4b79 = rzio_ ? rzio_[F[560480]] : '';
        window[F[560693]](0x7, F[560903] + pf4b79), window[F[560673]](F[560904] + pf4b79);
    }
}, window[F[560905]] = function (jxma) {
    sendApi(D124[F[560639]], F[560906], {
        'partner_id': D124[F[560647]],
        'uid': D124[F[560019]],
        'version': D124[F[560091]],
        'game_pkg': D124[F[560426]],
        'device': D124[F[560648]]
    }, D1I2X, D1X42, D14I);
}, window[F[560907]] = function (wkvqs) {
    D124[F[560467]] = ![];
    if (wkvqs && wkvqs[F[560480]] === F[560479] && wkvqs[F[560481]]) {
        for (var jkw6q = 0x0; jkw6q < wkvqs[F[560481]][F[560009]]; jkw6q++) {
            wkvqs[F[560481]][jkw6q][F[560456]] = D12XI(wkvqs[F[560481]][jkw6q]);
        }
        D124[F[560465]][-0x1] = window[F[560908]](wkvqs[F[560481]]), window[F[560416]][F[560466]](-0x1);
    } else {
        var ih2rz1 = wkvqs ? wkvqs[F[560480]] : '';
        window[F[560693]](0x8, F[560909] + ih2rz1), window[F[560673]](F[560910] + ih2rz1);
    }
}, window[F[560911]] = function (xkqvw6) {
    sendApi(D124[F[560639]], F[560906], {
        'partner_id': D124[F[560647]],
        'uid': D124[F[560019]],
        'version': D124[F[560091]],
        'game_pkg': D124[F[560426]],
        'device': D124[F[560648]]
    }, xkqvw6, D1X42, D14I);
}, window[F[560912]] = function (n218r, bu3p0c) {
    sendApi(D124[F[560639]], F[560913], {
        'partner_id': D124[F[560647]],
        'uid': D124[F[560019]],
        'version': D124[F[560091]],
        'game_pkg': D124[F[560426]],
        'device': D124[F[560648]],
        'server_group_id': bu3p0c
    }, D1X2I, D1X42, D14I);
}, window[F[560914]] = function (kaxj6w) {
    D124[F[560467]] = ![];
    if (kaxj6w && kaxj6w[F[560480]] === F[560479] && kaxj6w[F[560481]] && kaxj6w[F[560481]][F[560481]]) {
        var q0tsev = kaxj6w[F[560481]][F[560915]],
            fp49 = [];
        for (var h1zi2r = 0x0; h1zi2r < kaxj6w[F[560481]][F[560481]][F[560009]]; h1zi2r++) {
            kaxj6w[F[560481]][F[560481]][h1zi2r][F[560456]] = D12XI(kaxj6w[F[560481]][F[560481]][h1zi2r]), (fp49[F[560009]] == 0x0 || kaxj6w[F[560481]][F[560481]][h1zi2r][F[560456]] != 0x0) && (fp49[fp49[F[560009]]] = kaxj6w[F[560481]][F[560481]][h1zi2r]);
        }
        D124[F[560465]][q0tsev] = window[F[560908]](fp49), window[F[560416]][F[560466]](q0tsev);
    } else {
        var gm5x = kaxj6w ? kaxj6w[F[560480]] : '';
        window[F[560693]](0x9, F[560916] + gm5x), window[F[560673]](F[560917] + gm5x);
    }
}, window[F[560918]] = function (pb39f) {
    sendApi(D124[F[560639]], F[560919], {
        'partner_id': D124[F[560647]],
        'uid': D124[F[560019]],
        'version': D124[F[560091]],
        'game_pkg': D124[F[560426]],
        'device': D124[F[560648]]
    }, reqServerRecommendCallBack, D1X42, D14I);
}, window[F[560920]] = function (w6xvqk) {
    D124[F[560467]] = ![];
    if (w6xvqk && w6xvqk[F[560480]] === F[560479] && w6xvqk[F[560481]]) {
        for (var gl5aom = 0x0; gl5aom < w6xvqk[F[560481]][F[560009]]; gl5aom++) {
            w6xvqk[F[560481]][gl5aom][F[560456]] = D12XI(w6xvqk[F[560481]][gl5aom]);
        }
        D124[F[560465]][-0x2] = window[F[560908]](w6xvqk[F[560481]]), window[F[560416]][F[560466]](-0x2);
    } else {
        var x5g6a = w6xvqk ? w6xvqk[F[560480]] : '';
        window[F[560693]](0xa, F[560921] + x5g6a), alert(F[560922] + x5g6a);
    }
}, window[F[560908]] = function (qw6tvk) {
    return qw6tvk;
}, window[F[560923]] = function (j6kxag, i2_hz) {
    j6kxag = j6kxag || D124[F[560022]][F[560023]], sendApi(D124[F[560639]], F[560924], {
        'type': '4',
        'game_pkg': D124[F[560426]],
        'server_id': j6kxag
    }, i2_hz);
}, window[F[560925]] = function (xj6wq, f7pb, tskvw, gom5a) {
    tskvw = tskvw || D124[F[560022]][F[560023]], sendApi(D124[F[560639]], F[560926], {
        'type': xj6wq,
        'game_pkg': f7pb,
        'server_id': tskvw
    }, gom5a);
}, window[F[560927]] = function (tves0c, j5agom) {
    sendApi(D124[F[560639]], F[560928], { 'game_pkg': tves0c }, j5agom);
}, window[F[560929]] = function (vqkw) {
    if (vqkw) {
        if (vqkw[F[560456]] == 0x1) {
            if (vqkw[F[560930]] == 0x1) return 0x2;else return 0x1;
        } else return vqkw[F[560456]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window[F[560931]] = function (alg5, mi5ol) {
    D124[F[560932]] = {
        'step': alg5,
        'server_id': mi5ol
    };
    var riz1h = this;
    D1I2X4({ 'title': F[560933] }), sendApi(D124[F[560639]], F[560934], {
        'partner_id': D124[F[560647]],
        'uid': D124[F[560019]],
        'game_pkg': D124[F[560426]],
        'server_id': mi5ol,
        'platform': D124[F[560095]],
        'platform_uid': D124[F[560770]],
        'check_login_time': D124[F[560773]],
        'check_login_sign': D124[F[560771]],
        'version_name': D124[F[560732]]
    }, D14I2X, D1X42, D14I, function (_hzir) {
        return _hzir[F[560480]] == F[560479] || _hzir[F[560000]] == F[560935] || _hzir[F[560000]] == F[560936];
    });
}, window[F[560937]] = function (vkwqs) {
    var sue0c = this;
    if (vkwqs && vkwqs[F[560480]] === F[560479] && vkwqs[F[560481]]) {
        var kwtsqv = D124[F[560022]];
        kwtsqv[F[560938]] = D124[F[560650]], kwtsqv[F[560772]] = String(vkwqs[F[560481]][F[560939]]), kwtsqv[F[560656]] = parseInt(vkwqs[F[560481]][F[560774]]);
        if (vkwqs[F[560481]][F[560940]]) kwtsqv[F[560940]] = parseInt(vkwqs[F[560481]][F[560940]]);else kwtsqv[F[560940]] = parseInt(vkwqs[F[560481]][F[560023]]);
        kwtsqv[F[560941]] = 0x0, kwtsqv[F[560021]] = D124[F[560811]], kwtsqv[F[560942]] = vkwqs[F[560481]][F[560943]], kwtsqv[F[560944]] = vkwqs[F[560481]][F[560944]];
        if (vkwqs[F[560481]][F[560945]]) kwtsqv[F[560945]] = parseInt(vkwqs[F[560481]][F[560945]]);
        console[F[560045]](F[560946] + JSON[F[560026]](kwtsqv[F[560944]])), D124[F[560578]] == 0x1 && kwtsqv[F[560944]] && kwtsqv[F[560944]][F[560947]] == 0x1 && (D124[F[560373]] = 0x1, window[F[560035]][F[560036]][F[560576]]()), D14XI2();
    } else {
        if (D124[F[560932]][F[560948]] >= 0x3) {
            var e0s3cu = vkwqs ? vkwqs[F[560480]] : '';
            window[F[560693]](0xc, F[560949] + e0s3cu), D14I(JSON[F[560026]](vkwqs)), window[F[560673]](F[560950] + e0s3cu);
        } else sendApi(D124[F[560639]], F[560748], {
            'platform': D124[F[560637]],
            'partner_id': D124[F[560647]],
            'token': D124[F[560745]],
            'game_pkg': D124[F[560426]],
            'deviceId': D124[F[560648]],
            'scene': F[560749] + D124[F[560649]]
        }, function (bfpu7) {
            if (!bfpu7 || bfpu7[F[560480]] != F[560479]) {
                window[F[560673]](F[560766] + bfpu7 && bfpu7[F[560480]]);
                return;
            }
            D124[F[560771]] = String(bfpu7[F[560772]]), D124[F[560773]] = String(bfpu7[F[560774]]), setTimeout(function () {
                D14IX2(D124[F[560932]][F[560948]] + 0x1, D124[F[560932]][F[560023]]);
            }, 0x5dc);
        }, D1X42, D14I, function (jk6agx) {
            return jk6agx[F[560480]] == F[560479] || jk6agx[F[560480]] == F[560951];
        });
    }
}, window[F[560952]] = function () {
    ServerLoading[F[560036]][F[560572]](D124[F[560578]]), window[F[560662]] = !![], window[F[560067]]();
}, window[F[560066]] = function () {
    if (window[F[560065]] && window[F[560074]] && window[F[560562]] && window[F[560571]] && window[F[560663]] && window[F[560665]]) {
        if (!window[F[560953]][F[560036]]) {
            console[F[560045]](F[560954] + window[F[560953]][F[560036]]);
            var tqwvsk = wx[F[560955]](),
                jxwqk6 = tqwvsk[F[560153]] ? tqwvsk[F[560153]] : 0x0,
                ts3c0 = {
                'cdn': window[F[560015]][F[560021]],
                'spareCdn': window[F[560015]][F[560730]],
                'newRegister': window[F[560015]][F[560578]],
                'wxPC': window[F[560015]][F[560124]],
                'wxIOS': window[F[560015]][F[560118]],
                'wxAndroid': window[F[560015]][F[560121]],
                'wxParam': {
                    'limitLoad': window[F[560015]][F[560128]],
                    'benchmarkLevel': window[F[560015]][F[560129]],
                    'wxFrom': window[F[560005]][F[560737]] == F[560956] ? 0x1 : 0x0,
                    'wxSDKVersion': window[F[560043]]
                },
                'configType': window[F[560015]][F[560657]],
                'exposeType': window[F[560015]][F[560659]],
                'scene': jxwqk6
            };
            new window[F[560953]](ts3c0, window[F[560015]][F[560020]], window[F[560632]]);
        }
    }
}, window[F[560067]] = function () {
    if (window[F[560065]] && window[F[560074]] && window[F[560562]] && window[F[560571]] && window[F[560663]] && window[F[560665]] && window[F[560662]] && window[F[560664]]) {
        D1I24X();
        if (!D14X2) {
            D14X2 = !![];
            if (!window[F[560953]][F[560036]]) window[F[560066]]();
            var wseq = 0x0,
                zi2h1 = wx[F[560957]]();
            zi2h1 && (window[F[560015]][F[560123]] && (wseq = zi2h1[F[560113]]), console[F[560000]](F[560958] + zi2h1[F[560113]] + F[560959] + zi2h1[F[560114]] + F[560960] + zi2h1[F[560115]] + F[560961] + zi2h1[F[560116]] + F[560962] + zi2h1[F[560334]] + F[560963] + zi2h1[F[560336]]));
            var v6k = {};
            for (const f7p4b in D124[F[560022]]) {
                v6k[f7p4b] = D124[F[560022]][f7p4b];
            }
            var tq0e = {
                'channel': window[F[560015]][F[560651]],
                'account': window[F[560015]][F[560019]],
                'userId': window[F[560015]][F[560769]],
                'cdn': window[F[560015]][F[560021]],
                'data': window[F[560015]][F[560481]],
                'package': window[F[560015]][F[560636]],
                'newRegister': window[F[560015]][F[560578]],
                'pkgName': window[F[560015]][F[560426]],
                'partnerId': window[F[560015]][F[560647]],
                'platform_uid': window[F[560015]][F[560770]],
                'deviceId': window[F[560015]][F[560648]],
                'selectedServer': v6k,
                'configType': window[F[560015]][F[560657]],
                'exposeType': window[F[560015]][F[560659]],
                'debugUsers': window[F[560015]][F[560654]],
                'wxMenuTop': wseq,
                'wxShield': window[F[560015]][F[560660]],
                'wx_channel': window[F[560015]][F[560746]]
            };
            if (window[F[560814]]) for (var c30et in window[F[560814]]) {
                tq0e[c30et] = window[F[560814]][c30et];
            }
            window[F[560953]][F[560036]][F[560964]](tq0e);
            if (D124[F[560022]] && D124[F[560022]][F[560023]]) localStorage[F[560437]](F[560776] + D124[F[560426]] + D124[F[560019]], D124[F[560022]][F[560023]]);
        }
    } else console[F[560000]](F[560965] + window[F[560065]] + F[560966] + window[F[560074]] + F[560967] + window[F[560562]] + F[560968] + window[F[560571]] + F[560969] + window[F[560663]] + F[560970] + window[F[560665]] + F[560971] + window[F[560662]] + F[560972] + window[F[560664]]);
};