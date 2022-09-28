var m = wx.$g;
import gs87 from '../gggsdk/gggsdk.js';
window[m[30513]] = { 'wxVersion': window[m[546]][m[30415]] }, window['DEBUG'] = ![], window['G$J3'] = 0x1, window[m[30514]] = 0x1, window['G$03J'] = !![], window[m[30515]] = !![], window['G$V203J'] = '', window[m[30516]] = ![], window['G$3J'] = {
    'base_cdn': m[30517],
    'cdn': m[30517]
}, G$3J[m[30518]] = {}, G$3J[m[24943]] = '0', G$3J[m[4595]] = window[m[30513]][m[30519]], G$3J[m[30489]] = '', G$3J['os'] = '1', G$3J[m[30520]] = m[30521], G$3J[m[30522]] = m[30523], G$3J[m[30524]] = m[30525], G$3J[m[30526]] = m[30527], G$3J[m[30528]] = 'MQx0mYlUWO5XYKvgAIPKWgK1w722GKih', G$3J[m[11371]] = '1', G$3J[m[25249]] = '', G$3J[m[25251]] = '', G$3J[m[30529]] = 0x0, G$3J[m[30530]] = {}, G$3J[m[30531]] = parseInt(G$3J[m[11371]]), G$3J[m[11380]] = G$3J[m[11371]], G$3J[m[25243]] = {}, G$3J['G$23'] = m[30532], G$3J[m[30533]] = ![], G$3J[m[11503]] = m[30534], G$3J[m[25212]] = Date[m[77]](), G$3J[m[11096]] = m[30535], G$3J[m[737]] = '_a', G$3J[m[30536]] = 0x2, G$3J[m[95]] = 0x7c1, G$3J[m[30519]] = window[m[30513]][m[30519]], G$3J[m[751]] = ![], G$3J[m[1032]] = ![], G$3J[m[10472]] = ![], G$3J[m[24946]] = ![], window['G$0J3'] = 0x5, window['G$0J'] = ![], window['G$J0'] = ![], window['G$30J'] = ![], window[m[30537]] = ![], window[m[30538]] = ![], window['G$3J0'] = ![], window['G$03'] = ![], window['G$30'] = ![], window['G$J03'] = ![], window[m[30539]] = null, window[m[639]] = function (t3f0) {
    console[m[473]](m[639], t3f0), wx[m[4132]]({}), wx[m[30439]]({
        'title': m[5312],
        'content': t3f0,
        'success'(i5axp) {
            if (i5axp[m[30540]]) console[m[473]](m[30541]);else i5axp[m[542]] && console[m[473]](m[30542]);
        }
    });
}, window['G$203J'] = function (weyv) {
    console[m[473]](m[30543], weyv), G$23J0(), wx[m[30439]]({
        'title': m[5312],
        'content': weyv,
        'confirmText': m[30544],
        'cancelText': m[18054],
        'success'(jr62z$) {
            if (jr62z$[m[30540]]) window['G$32']();else jr62z$[m[542]] && (console[m[473]](m[30545]), wx[m[24941]]({}));
        }
    });
}, window[m[30546]] = function (doz326) {
    console[m[473]](m[30546], doz326), wx[m[30439]]({
        'title': m[5312],
        'content': doz326,
        'confirmText': m[25374],
        'showCancel': ![],
        'complete'(ipb5_0) {
            console[m[473]](m[30545]), wx[m[24941]]({});
        }
    });
}, window['G$20J3'] = ![], window['G$230J'] = function (a5hbx) {
    window['G$20J3'] = !![], wx[m[4131]](a5hbx);
}, window['G$23J0'] = function () {
    window['G$20J3'] && (window['G$20J3'] = ![], wx[m[4132]]({}));
}, window['G$2J03'] = function (gcvq7e) {
    window[m[30430]][m[141]]['G$2J03'](gcvq7e);
}, window[m[11381]] = function (u$6mrj, f0tp) {
    gs87[m[11381]](u$6mrj, function (u$62rj) {
        u$62rj && u$62rj[m[11]] ? u$62rj[m[11]][m[1164]] == 0x1 ? f0tp(!![]) : (f0tp(![]), console[m[72]](m[30547] + u$62rj[m[11]][m[30548]])) : console[m[473]](m[11381], u$62rj);
    });
}, window['G$2J30'] = function (t3fo_) {
    console[m[473]](m[30549], t3fo_);
}, window['G$23J'] = function (cls8q) {}, window['G$2J3'] = function (jru6$m, vweky, p05_i) {}, window['G$2J'] = function (tf_3) {
    console[m[473]]('toEnterGame', tf_3), window[m[30430]][m[141]][m[30550]](), window[m[30430]][m[141]][m[30551]](), window[m[30430]][m[141]][m[30552]]();
}, window['G$J2'] = function (ge7v) {
    window[m[30553]](0xe, m[30554] + ge7v), window['G$203J'](m[30555]);
    var uj2 = {
        'id': window['G$3J'][m[30420]],
        'role': window['G$3J'][m[3932]],
        'level': window['G$3J'][m[30421]],
        'account': window['G$3J'][m[25247]],
        'version': window['G$3J'][m[95]],
        'cdn': window['G$3J'][m[3808]],
        'pkgName': window['G$3J'][m[25249]],
        'gamever': window[m[546]][m[30415]],
        'serverid': window['G$3J'][m[25243]] ? window['G$3J'][m[25243]][m[10641]] : 0x0,
        'systemInfo': window[m[30422]],
        'error': m[30556],
        'stack': ge7v ? ge7v : m[30555]
    },
        z62$r = JSON[m[3794]](uj2);
    console[m[119]](m[30557] + z62$r), window['G$23'](z62$r);
}, window[m[30553]] = function (pi05ab, o2z3) {
    sendApi(G$3J[m[30524]], m[30558], {
        'game_pkg': G$3J[m[25249]],
        'partner_id': G$3J[m[11371]],
        'server_id': G$3J[m[25243]] && G$3J[m[25243]][m[10641]] > 0x0 ? G$3J[m[25243]][m[10641]] : 0x0,
        'uid': G$3J[m[25247]] > 0x0 ? G$3J[m[25247]] : 0x0,
        'type': pi05ab,
        'info': o2z3
    });
}, window['G$32J'] = function (y7vqw) {
    var ru$j26 = JSON[m[516]](y7vqw);
    ru$j26[m[30559]] = window[m[546]][m[30415]], ru$j26[m[30560]] = window['G$3J'][m[25243]] ? window['G$3J'][m[25243]][m[10641]] : 0x0, ru$j26[m[30422]] = window[m[30422]];
    var e7wkv = JSON[m[3794]](ru$j26);
    console[m[119]](m[30561] + e7wkv), window['G$23'](e7wkv);
}, window['G$3J2'] = function (t4oz3d, v7wkye) {
    var djr26z = {
        'id': window['G$3J'][m[30420]],
        'role': window['G$3J'][m[3932]],
        'level': window['G$3J'][m[30421]],
        'account': window['G$3J'][m[25247]],
        'version': window['G$3J'][m[95]],
        'cdn': window['G$3J'][m[3808]],
        'pkgName': window['G$3J'][m[25249]],
        'gamever': window[m[546]][m[30415]],
        'serverid': window['G$3J'][m[25243]] ? window['G$3J'][m[25243]][m[10641]] : 0x0,
        'systemInfo': window[m[30422]],
        'error': t4oz3d,
        'stack': v7wkye
    },
        yvweq7 = JSON[m[3794]](djr26z);
    console[m[90]](m[30562] + yvweq7), window['G$23'](yvweq7);
}, window['G$23'] = function (qgye7) {
    if (window['G$3J'][m[30490]] == m[30563]) return;
    var _4ft = G$3J['G$23'] + m[30564] + G$3J[m[25247]];
    wx[m[468]]({
        'url': _4ft,
        'method': m[30565],
        'data': qgye7,
        'header': {
            'content-type': m[30566],
            'cache-control': m[30567]
        },
        'success': function (s9g8) {
            DEBUG && console[m[473]](m[30568], _4ft, qgye7, s9g8);
        },
        'fail': function (h1y) {
            DEBUG && console[m[473]](m[30568], _4ft, qgye7, h1y);
        },
        'complete': function () {}
    });
}, window[m[30569]] = function () {
    function oz6d3() {
        return ((0x1 + Math[m[113]]()) * 0x10000 | 0x0)[m[263]](0x10)[m[488]](0x1);
    }
    return oz6d3() + oz6d3() + '-' + oz6d3() + '-' + oz6d3() + '-' + oz6d3() + '+' + oz6d3() + oz6d3() + oz6d3();
}, window['G$32'] = function () {
    console[m[473]](m[30570]);
    var egq7c = gs87[m[30571]]();
    G$3J[m[11380]] = egq7c[m[30572]], G$3J[m[30531]] = egq7c[m[30572]], G$3J[m[11371]] = egq7c[m[30572]], G$3J[m[25249]] = egq7c[m[30573]];
    var ia51xh = { 'game_ver': G$3J[m[4595]] };
    G$3J[m[25251]] = this[m[30569]](), G$230J({ 'title': m[30574] }), gs87[m[359]](ia51xh, this['G$J23'][m[68]](this));
}, window['G$J23'] = function (o34ftd) {
    var p4ft0_ = o34ftd[m[30575]];
    sdkInitRes = o34ftd, console[m[473]](m[30576] + p4ft0_ + m[30577] + (p4ft0_ == 0x1) + m[30578] + o34ftd[m[30415]] + m[30579] + window[m[30513]][m[30519]]);
    if (!o34ftd[m[30415]] || window['G$V0J23'](window[m[30513]][m[30519]], o34ftd[m[30415]]) < 0x0) console[m[473]](m[30580]), G$3J[m[30522]] = m[30581], G$3J[m[30524]] = m[30582], G$3J[m[30526]] = m[30583], G$3J[m[3808]] = m[30584], G$3J[m[24942]] = m[30585], G$3J[m[30586]] = 'ws', G$3J[m[751]] = ![];else window['G$V0J23'](window[m[30513]][m[30519]], o34ftd[m[30415]]) == 0x0 ? (console[m[473]](m[30587]), G$3J[m[30522]] = m[30523], G$3J[m[30524]] = m[30525], G$3J[m[30526]] = m[30527], G$3J[m[3808]] = m[30588], G$3J[m[24942]] = m[30585], G$3J[m[30586]] = m[30589], G$3J[m[751]] = !![]) : (console[m[473]](m[30590]), G$3J[m[30522]] = m[30523], G$3J[m[30524]] = m[30525], G$3J[m[30526]] = m[30527], G$3J[m[3808]] = m[30588], G$3J[m[24942]] = m[30585], G$3J[m[30586]] = m[30589], G$3J[m[751]] = ![]);
    G$3J[m[30529]] = config[m[30295]] ? config[m[30295]] : 0x0, this['G$032J'](), this['G$03J2'](), window[m[30591]] = 0x5, G$230J({ 'title': m[30592] }), gs87[m[30593]](this['G$J32'][m[68]](this));
}, window[m[30591]] = 0x5, window['G$J32'] = function (vykw7, kxyh1) {
    if (vykw7 == 0x0 && kxyh1 && kxyh1[m[30387]]) {
        G$3J[m[30594]] = kxyh1[m[30387]], G$3J[m[25383]] = kxyh1[m[25383]], G$3J[m[30595]] = kxyh1[m[30595]];
        var pf4 = this;
        G$230J({ 'title': m[30596] }), sendApi(G$3J[m[30522]], m[30597], {
            'platform': G$3J[m[30520]],
            'partner_id': G$3J[m[11371]],
            'token': kxyh1[m[30387]],
            'game_pkg': G$3J[m[25249]],
            'deviceId': G$3J[m[25251]],
            'scene': m[30598] + G$3J[m[30529]]
        }, this['G$023J'][m[68]](this), G$0J3, G$J2);
    } else kxyh1 && kxyh1[m[25439]] && window[m[30591]] > 0x0 && (kxyh1[m[25439]][m[109]](m[30599]) != -0x1 || kxyh1[m[25439]][m[109]](m[30600]) != -0x1 || kxyh1[m[25439]][m[109]](m[30601]) != -0x1 || kxyh1[m[25439]][m[109]](m[30602]) != -0x1 || kxyh1[m[25439]][m[109]](m[30603]) != -0x1 || kxyh1[m[25439]][m[109]](m[30604]) != -0x1) ? (window[m[30591]]--, gs87[m[30593]](this['G$J32'][m[68]](this))) : (window[m[30553]](0x1, m[30605] + vykw7 + m[30606] + (kxyh1 ? kxyh1[m[25439]] : '')), window['G$3J2'](m[30607], JSON[m[3794]]({
        'status': vykw7,
        'data': kxyh1
    })), window['G$203J'](m[30608] + (kxyh1 && kxyh1[m[25439]] ? '，' + kxyh1[m[25439]] : '')));
}, window['G$023J'] = function (ahx1i) {
    if (!ahx1i) {
        window[m[30553]](0x2, m[30609]), window['G$3J2'](m[30610], m[30611]), window['G$203J'](m[30612]);
        return;
    }
    if (ahx1i[m[1164]] != m[9077]) {
        window[m[30553]](0x2, m[30613] + ahx1i[m[1164]]), window['G$3J2'](m[30610], JSON[m[3794]](ahx1i)), window['G$203J'](m[30614] + ahx1i[m[1164]]);
        return;
    }
    if (ahx1i[m[30615]] == 0x1) {
        window['G$203J'](m[30616]);
        return;
    }
    G$3J[m[11369]] = String(ahx1i[m[25247]]), G$3J[m[25247]] = String(ahx1i[m[25247]]), G$3J[m[25210]] = String(ahx1i[m[25210]]), G$3J[m[11380]] = String(ahx1i[m[25210]]), G$3J[m[25250]] = String(ahx1i[m[25250]]), G$3J[m[30617]] = String(ahx1i[m[10626]]), G$3J[m[30618]] = String(ahx1i[m[853]]), G$3J[m[10626]] = '';
    var y1vew = this;
    G$230J({ 'title': m[30619] });
    var z3o2 = localStorage[m[471]](m[30620] + G$3J[m[25249]] + G$3J[m[25247]]);
    if (z3o2 && z3o2 != '') {
        var f_0bp5 = Number(z3o2);
        y1vew[m[30621]](f_0bp5);
    } else y1vew[m[30622]]();
}, window[m[30622]] = function () {
    var _pt0f = this;
    sendApi(G$3J[m[30522]], m[30623], {
        'partner_id': G$3J[m[11371]],
        'uid': G$3J[m[25247]],
        'version': G$3J[m[4595]],
        'game_pkg': G$3J[m[25249]],
        'device': G$3J[m[25251]]
    }, _pt0f['G$02J3'][m[68]](_pt0f), G$0J3, G$J2);
}, window['G$02J3'] = function (veqc7g) {
    if (!veqc7g) {
        window[m[30553]](0x3, m[30624]), window['G$203J'](m[30624]);
        return;
    }
    if (veqc7g[m[1164]] != m[9077]) {
        window[m[30553]](0x3, m[30625] + veqc7g[m[1164]]), window['G$203J'](m[30625] + veqc7g[m[1164]]);
        return;
    }
    if (!veqc7g[m[11]] || veqc7g[m[11]][m[13]] == 0x0) {
        window[m[30553]](0x3, m[30626]), window['G$203J'](m[30627]);
        return;
    }
    this[m[30628]](veqc7g);
}, window[m[30621]] = function (gc8s7) {
    var xh1ai = this;
    sendApi(G$3J[m[30522]], m[30629], {
        'server_id': gc8s7,
        'time': Date[m[77]]() / 0x3e8
    }, xh1ai[m[30630]][m[68]](xh1ai), G$0J3, G$J2);
}, window[m[30630]] = function (z6r$j2) {
    if (!z6r$j2) {
        window[m[30553]](0x4, m[30631]), this[m[30622]]();
        return;
    }
    if (z6r$j2[m[1164]] != m[9077]) {
        window[m[30553]](0x4, m[30632] + z6r$j2[m[1164]]), this[m[30622]]();
        return;
    }
    if (!z6r$j2[m[11]] || z6r$j2[m[11]][m[13]] == 0x0) {
        window[m[30553]](0x4, m[30633]), this[m[30622]]();
        return;
    }
    this[m[30628]](z6r$j2);
}, window[m[30628]] = function (d2zjr6) {
    G$3J[m[649]] = d2zjr6[m[30634]] != undefined ? d2zjr6[m[30634]] : 0x0, G$3J[m[25243]] = {
        'server_id': String(d2zjr6[m[11]][0x0][m[10641]]),
        'server_name': String(d2zjr6[m[11]][0x0][m[25248]]),
        'entry_ip': d2zjr6[m[11]][0x0][m[25271]],
        'entry_port': parseInt(d2zjr6[m[11]][0x0][m[25272]]),
        'status': G$302(d2zjr6[m[11]][0x0]),
        'start_time': d2zjr6[m[11]][0x0][m[30635]],
        'maintain_time': d2zjr6[m[11]][0x0][m[30636]] ? d2zjr6[m[11]][0x0][m[30636]] : '',
        'is_recommend': d2zjr6[m[11]][0x0][m[30637]],
        'cdn': G$3J[m[3808]]
    }, this['G$J302'](), window[m[30430]] && window[m[30430]][m[141]][m[30638]] && window[m[30430]][m[141]][m[30638]](sdkInitRes[m[30639]], sdkInitRes[m[30640]], sdkInitRes[m[30641]], sdkInitRes[m[30642]], sdkInitRes[m[30643]]);
}, window['G$J302'] = function () {
    if (G$3J[m[649]] == 0x1) {
        var qsg7c = G$3J[m[25243]][m[100]];
        if (qsg7c === -0x1 || qsg7c === 0x0) {
            window[m[30553]](0xf, m[30644] + G$3J[m[25243]]['id'] + m[30645] + G$3J[m[25243]][m[100]]), window['G$203J'](qsg7c === -0x1 ? m[30646] : m[30647]);
            return;
        }
        G$J203(0x0, G$3J[m[25243]][m[10641]]), window[m[30430]][m[141]][m[30648]](G$3J[m[649]]);
    } else window[m[30430]][m[141]][m[30649]](), G$23J0();
    window['G$30'] = !![], window['G$J032'](), window['G$J320']();
}, window['G$032J'] = function () {
    sendApi(G$3J[m[30522]], m[30650], {
        'game_pkg': G$3J[m[25249]],
        'version_name': G$3J[m[30586]]
    }, this[m[30651]][m[68]](this), G$0J3, G$J2);
}, window[m[30651]] = function (r6u$2j) {
    if (!r6u$2j) {
        window[m[30553]](0x5, m[30652]), window['G$203J'](m[30652]);
        return;
    }
    if (r6u$2j[m[1164]] != m[9077]) {
        window[m[30553]](0x5, m[30653] + r6u$2j[m[1164]]), window['G$203J'](m[30653] + r6u$2j[m[1164]]);
        return;
    }
    if (!r6u$2j[m[11]] || !r6u$2j[m[11]][m[4595]]) {
        window[m[30553]](0x5, m[30654] + (r6u$2j[m[11]] && r6u$2j[m[11]][m[4595]])), window['G$203J'](m[30654] + (r6u$2j[m[11]] && r6u$2j[m[11]][m[4595]]));
        return;
    }
    r6u$2j[m[11]][m[30655]] && r6u$2j[m[11]][m[30655]][m[13]] > 0xa && (G$3J[m[30656]] = r6u$2j[m[11]][m[30655]], G$3J[m[3808]] = r6u$2j[m[11]][m[30655]]), r6u$2j[m[11]][m[4595]] && (G$3J[m[95]] = r6u$2j[m[11]][m[4595]]), console[m[72]](m[25380] + G$3J[m[95]] + m[30657] + G$3J[m[30586]]), window['G$3J0'] = !![], window['G$J032'](), window['G$J320']();
}, window[m[30658]], window['G$03J2'] = function () {
    sendApi(G$3J[m[30522]], m[30659], { 'game_pkg': G$3J[m[25249]] }, this['G$0J23'][m[68]](this), G$0J3, G$J2);
}, window['G$0J23'] = function (c78sg) {
    if (c78sg && c78sg[m[1164]] === m[9077] && c78sg[m[11]]) {
        window[m[30658]] = c78sg[m[11]];
        for (var g9c in c78sg[m[11]]) {
            G$3J[g9c] = c78sg[m[11]][g9c];
        }
        window[m[30660]]();
    } else window[m[30553]](0xb, m[30661]), console[m[72]](m[30662] + c78sg[m[1164]]);
    window['G$03'] = !![], window['G$J320']();
}, window[m[30660]] = function () {
    var _tfo4 = G$3J[m[751]] || G$3J[m[25140]] && G$3J[m[25140]] > 0x0;
    if (_tfo4) {
        var gl8qs = G$3J[m[25141]],
            $urj62 = gl8qs && gl8qs[m[13]] == 0x9;
        $urj62 && (window[m[27663]] = gl8qs);
        var ozt3 = G$3J[m[25142]],
            wey7 = ozt3 && ozt3[m[15]]('#')[m[13]] == 0x4;
        wey7 && (window[m[11194]] = ozt3);
    }
}, window[m[30663]] = function (rm$u, oz32, d6orz, kw1hax, ih1xa5, ib5_p, od23z4, wk7ey, u6r2j$, bi_p5) {
    ih1xa5 = String(ih1xa5);
    var dt3f4o = od23z4,
        o423z = wk7ey;
    G$3J[m[30518]][ih1xa5] = {
        'productid': ih1xa5,
        'productname': dt3f4o,
        'productdesc': o423z,
        'roleid': rm$u,
        'rolename': oz32,
        'rolelevel': d6orz,
        'price': ib5_p,
        'callback': u6r2j$
    }, sendApi(G$3J[m[30526]], m[30664], {
        'game_pkg': G$3J[m[25249]],
        'server_id': G$3J[m[25243]][m[10641]],
        'server_name': G$3J[m[25243]][m[25248]],
        'level': d6orz,
        'uid': G$3J[m[25247]],
        'role_id': rm$u,
        'role_name': oz32,
        'product_id': ih1xa5,
        'product_name': dt3f4o,
        'product_desc': o423z,
        'money': ib5_p,
        'partner_id': G$3J[m[11371]]
    }, toPayCallBack, G$0J3, G$J2);
}, window[m[30665]] = function (dzo32) {
    if (dzo32 && (dzo32[m[30666]] === 0xc8 || dzo32[m[1164]] == m[9077])) {
        var ky1xhw = G$3J[m[30518]][String(dzo32[m[30667]])];
        if (ky1xhw[m[326]]) ky1xhw[m[326]](dzo32[m[30667]], dzo32[m[30668]], -0x1);
        gs87[m[30669]]({
            'cpbill': dzo32[m[30668]],
            'productid': dzo32[m[30667]],
            'productname': ky1xhw[m[30670]],
            'productdesc': ky1xhw[m[30671]],
            'serverid': G$3J[m[25243]][m[10641]],
            'servername': G$3J[m[25243]][m[25248]],
            'roleid': ky1xhw[m[11375]],
            'rolename': ky1xhw[m[11376]],
            'rolelevel': ky1xhw[m[30672]],
            'price': ky1xhw[m[27072]],
            'extension': JSON[m[3794]]({ 'cp_order_id': dzo32[m[30668]] })
        }, function (sg8cq7, ibxa5) {
            ky1xhw[m[326]] && sg8cq7 == 0x0 && ky1xhw[m[326]](dzo32[m[30667]], dzo32[m[30668]], sg8cq7);
            console[m[72]](JSON[m[3794]]({
                'type': m[30673],
                'status': sg8cq7,
                'data': dzo32,
                'role_name': ky1xhw[m[11376]]
            }));
            if (sg8cq7 === 0x0) {} else {
                if (sg8cq7 === 0x1) {} else {
                    if (sg8cq7 === 0x2) {}
                }
            }
        });
    } else {
        var wkey7v = dzo32 ? m[30674] + dzo32[m[30666]] + m[30675] + dzo32[m[1164]] + m[30676] + dzo32[m[72]] : m[30677];
        window[m[30553]](0xd, m[30678] + wkey7v), alert(wkey7v);
    }
}, window['G$0J32'] = function () {}, window['G$20J'] = function (v7yg, cs7gv, gvsc7, pbxi5a, whx) {
    gs87[m[30679]](G$3J[m[25243]][m[10641]], G$3J[m[25243]][m[25248]] || G$3J[m[25243]][m[10641]], v7yg, cs7gv, gvsc7), sendApi(G$3J[m[30522]], m[30680], {
        'game_pkg': G$3J[m[25249]],
        'server_id': G$3J[m[25243]][m[10641]],
        'role_id': v7yg,
        'uid': G$3J[m[25247]],
        'role_name': cs7gv,
        'role_type': pbxi5a,
        'level': gvsc7
    });
}, window['G$2J0'] = function (ujm$, k1whx, lsg89, xwyhk1, f3odt4, c8lg9s, j6zr$, o43td, t_34, aihk1x) {
    G$3J[m[30420]] = ujm$, G$3J[m[3932]] = k1whx, G$3J[m[30421]] = lsg89, gs87['logEnterGame'](G$3J[m[25243]][m[10641]], G$3J[m[25243]][m[25248]] || G$3J[m[25243]][m[10641]], ujm$, k1whx, lsg89, c8lg9s, { 'rolepower': j6zr$ }), sendApi(G$3J[m[30522]], m[30681], {
        'game_pkg': G$3J[m[25249]],
        'server_id': G$3J[m[25243]][m[10641]],
        'role_id': ujm$,
        'uid': G$3J[m[25247]],
        'role_name': k1whx,
        'role_type': xwyhk1,
        'level': lsg89,
        'evolution': f3odt4
    });
}, window['G$02J'] = function (q7weyv, w7kyv, ujrm6, t_bfp0, zo362d, ft_34, d43o2z, odz432, t4p_f0, w1xak) {
    G$3J[m[30420]] = q7weyv, G$3J[m[3932]] = w7kyv, G$3J[m[30421]] = ujrm6, gs87[m[30682]](G$3J[m[25243]][m[10641]], G$3J[m[25243]][m[25248]] || G$3J[m[25243]][m[10641]], q7weyv, w7kyv, ujrm6), sendApi(G$3J[m[30522]], m[30681], {
        'game_pkg': G$3J[m[25249]],
        'server_id': G$3J[m[25243]][m[10641]],
        'role_id': q7weyv,
        'uid': G$3J[m[25247]],
        'role_name': w7kyv,
        'role_type': t_bfp0,
        'level': ujrm6,
        'evolution': zo362d
    });
}, window['G$0J2'] = function (tf34_o) {}, window['G$20'] = function (q7cgsv, $r6) {
    gs87[m[30683]](m[30683], { 'activity_id': $r6 }, function (veq7wy) {
        q7cgsv && q7cgsv(veq7wy);
    });
}, window[m[23310]] = function () {
    gs87[m[30684]](G$3J[m[25243]][m[10641]], G$3J[m[25243]][m[25248]] || G$3J[m[25243]][m[10641]], G$3J[m[30420]], G$3J[m[3932]], G$3J[m[30421]]);
}, window['microPortGuide'] = function () {
    gs87[m[23198]]();
}, window[m[30685]] = function (u2r6j, iahxb, z26jrd, kwy7v, jr6dz, baipx, xha5i1, vwye) {
    vwye = vwye || G$3J[m[25243]][m[10641]], sendApi(G$3J[m[30522]], m[30686], {
        'phone': u2r6j,
        'role_id': iahxb,
        'uid': G$3J[m[25247]],
        'game_pkg': G$3J[m[25249]],
        'partner_id': G$3J[m[11371]],
        'server_id': vwye
    }, xha5i1, 0x2, null, function () {
        return !![];
    });
}, window[m[10012]] = function (y1kwhx) {
    window['G$J20'] = y1kwhx, window['G$J20'] && window['G$02'] && (console[m[72]](m[30506] + window['G$02'][m[784]]), window['G$J20'](window['G$02']), window['G$02'] = null);
}, window['G$J02'] = function (ihxb, p5b0ia, vewyk, ba50) {
    window[m[22]](m[30687], {
        'game_pkg': window['G$3J'][m[25249]],
        'role_id': p5b0ia,
        'server_id': vewyk
    }, ba50);
}, window['G$320J'] = function (d63o2, o43f, whye1k) {
    function z2o6(q7vy) {
        var keyvw7 = [],
            f_tpb = [],
            xky1wh = whye1k || window[m[546]][m[30688]];
        for (var _bp05 in xky1wh) {
            var qv7wey = Number(_bp05);
            (!d63o2 || !d63o2[m[13]] || d63o2[m[109]](qv7wey) != -0x1) && (f_tpb[m[29]](xky1wh[_bp05]), keyvw7[m[29]]([qv7wey, 0x3]));
        }
        window['G$V0J23'](window[m[30431]], m[30689]) >= 0x0 ? (console[m[473]](m[30690]), gs87[m[30691]] && gs87[m[30691]](f_tpb, function (z6dr2j) {
            console[m[473]](m[30692]), console[m[473]](z6dr2j);
            if (z6dr2j && z6dr2j[m[25439]] == m[30693]) for (var bipa5 in xky1wh) {
                if (z6dr2j[xky1wh[bipa5]] == m[30694]) {
                    var d6zo = Number(bipa5);
                    for (var i5hx1a = 0x0; i5hx1a < keyvw7[m[13]]; i5hx1a++) {
                        if (keyvw7[i5hx1a][0x0] == d6zo) {
                            keyvw7[i5hx1a][0x1] = 0x1;
                            break;
                        }
                    }
                }
            }
            window['G$V0J23'](window[m[30431]], m[30695]) >= 0x0 ? wx[m[30696]]({
                'withSubscriptions': !![],
                'success': function (bf_05p) {
                    var _otf = bf_05p[m[30697]][m[30698]];
                    if (_otf) {
                        console[m[473]](m[30699]), console[m[473]](_otf);
                        for (var qc7g8 in xky1wh) {
                            if (_otf[xky1wh[qc7g8]] == m[30694]) {
                                var wkyhx = Number(qc7g8);
                                for (var hi1axk = 0x0; hi1axk < keyvw7[m[13]]; hi1axk++) {
                                    if (keyvw7[hi1axk][0x0] == wkyhx) {
                                        keyvw7[hi1axk][0x1] = 0x2;
                                        break;
                                    }
                                }
                            }
                        }
                        console[m[473]](keyvw7), o43f && o43f(keyvw7);
                    } else console[m[473]](m[30700]), console[m[473]](bf_05p), console[m[473]](keyvw7), o43f && o43f(keyvw7);
                },
                'fail': function () {
                    console[m[473]](m[30701]), console[m[473]](keyvw7), o43f && o43f(keyvw7);
                }
            }) : (console[m[473]](m[30702] + window[m[30431]]), console[m[473]](keyvw7), o43f && o43f(keyvw7));
        })) : (console[m[473]](m[30703] + window[m[30431]]), console[m[473]](keyvw7), o43f && o43f(keyvw7)), wx[m[30704]](z2o6);
    }
    wx[m[30705]](z2o6);
}, window['G$32J0'] = {
    'isSuccess': ![],
    'level': m[30706],
    'isCharging': ![]
}, window['G$302J'] = function (cgl8s) {
    wx[m[30498]]({
        'success': function (zd2ro) {
            var axhkw = window['G$32J0'];
            axhkw[m[30707]] = !![], axhkw[m[3908]] = Number(zd2ro[m[3908]])[m[3529]](0x0), axhkw[m[30501]] = zd2ro[m[30501]], cgl8s && cgl8s(axhkw[m[30707]], axhkw[m[3908]], axhkw[m[30501]]);
        },
        'fail': function (axh1) {
            console[m[473]](m[30708], axh1[m[25439]]);
            var rz62jd = window['G$32J0'];
            cgl8s && cgl8s(rz62jd[m[30707]], rz62jd[m[3908]], rz62jd[m[30501]]);
        }
    });
}, window[m[10963]] = function (kwh1x) {
    wx[m[10963]]({
        'success': function (wkve1y) {
            kwh1x && kwh1x(!![], wkve1y);
        },
        'fail': function (sgcl89) {
            kwh1x && kwh1x(![], sgcl89);
        }
    });
}, window[m[10965]] = function (kxih) {
    if (kxih) wx[m[10965]](kxih);
}, window[m[24937]] = function (f34otd) {
    wx[m[24937]](f34otd);
}, window[m[22]] = function (eqcvg7, xhia1k, cvq7e, j6$urm, zd632, geyq, r6j2d, qs7cv) {
    if (j6$urm == undefined) j6$urm = 0x1;
    wx[m[468]]({
        'url': eqcvg7,
        'method': r6j2d || 'GET',
        'responseType': m[3711],
        'data': xhia1k,
        'header': { 'content-type': qs7cv || m[30566] },
        'success': function (j$ru26) {
            DEBUG && console[m[473]](m[30709], eqcvg7, info, j$ru26);
            if (j$ru26 && j$ru26[m[25509]] == 0xc8) {
                var eyg7q = j$ru26[m[11]];
                !geyq || geyq(eyg7q) ? cvq7e && cvq7e(eyg7q) : window[m[30710]](eqcvg7, xhia1k, cvq7e, j6$urm, zd632, geyq, j$ru26);
            } else window[m[30710]](eqcvg7, xhia1k, cvq7e, j6$urm, zd632, geyq, j$ru26);
        },
        'fail': function (j2ur6) {
            DEBUG && console[m[473]](m[30711], eqcvg7, info, j2ur6), window[m[30710]](eqcvg7, xhia1k, cvq7e, j6$urm, zd632, geyq, j2ur6);
        },
        'complete': function () {}
    });
}, window[m[30710]] = function (qcgve, gy, kh1aix, xhwa1, dzo62, t3do4z, xhi5b) {
    xhwa1 - 0x1 > 0x0 ? setTimeout(function () {
        window[m[22]](qcgve, gy, kh1aix, xhwa1 - 0x1, dzo62, t3do4z);
    }, 0x3e8) : dzo62 && dzo62(JSON[m[3794]]({
        'url': qcgve,
        'response': xhi5b
    }));
}, window[m[30712]] = function (xbpa5i, vs7qc, ewk1yv, vy7eq, g8cs9l, vqc7s, o4d32) {
    !ewk1yv && (ewk1yv = {});
    var g98slc = Math[m[112]](Date[m[77]]() / 0x3e8);
    ewk1yv[m[853]] = g98slc, ewk1yv[m[30713]] = vs7qc;
    var w1yek = Object[m[255]](ewk1yv)[m[1036]](),
        s7gv = '',
        f_0t4 = '';
    for (var b0p_tf = 0x0; b0p_tf < w1yek[m[13]]; b0p_tf++) {
        s7gv = s7gv + (b0p_tf == 0x0 ? '' : '&') + w1yek[b0p_tf] + ewk1yv[w1yek[b0p_tf]], f_0t4 = f_0t4 + (b0p_tf == 0x0 ? '' : '&') + w1yek[b0p_tf] + '=' + encodeURIComponent(ewk1yv[w1yek[b0p_tf]]);
    }
    s7gv = s7gv + G$3J[m[30528]];
    var ib5xp = m[30714] + md5(s7gv);
    send(xbpa5i + '?' + f_0t4 + (f_0t4 == '' ? '' : '&') + ib5xp, null, vy7eq, g8cs9l, vqc7s, o4d32 || function (xai5pb) {
        return xai5pb[m[1164]] == m[9077];
    }, null, m[30715]);
}, window['G$30J2'] = function (ibxha, jr6mu) {
    var pt4f_0 = 0x0;
    G$3J[m[25243]] && (pt4f_0 = G$3J[m[25243]][m[10641]]), sendApi(G$3J[m[30524]], m[30716], {
        'partnerId': G$3J[m[11371]],
        'gamePkg': G$3J[m[25249]],
        'logTime': Math[m[112]](Date[m[77]]() / 0x3e8),
        'platformUid': G$3J[m[25250]],
        'type': ibxha,
        'serverId': pt4f_0
    }, null, 0x2, null, function () {
        return !![];
    });
}, window['G$3J20'] = function (sq78c) {
    sendApi(G$3J[m[30522]], 'Server.getServerGroup', {
        'partner_id': G$3J[m[11371]],
        'uid': G$3J[m[25247]],
        'version': G$3J[m[4595]],
        'game_pkg': G$3J[m[25249]],
        'device': G$3J[m[25251]]
    }, G$3J02, G$0J3, G$J2);
}, window['G$3J02'] = function (z2or6d) {
    if (z2or6d && z2or6d[m[1164]] === m[9077] && z2or6d[m[11]]) {
        z2or6d[m[11]][m[4792]]({
            'id': -0x2,
            'name': m[30717]
        }), z2or6d[m[11]][m[4792]]({
            'id': -0x1,
            'name': m[30718]
        }), G$3J[m[30719]] = z2or6d[m[11]];
        if (window[m[11547]]) window[m[11547]]['showGroupList']();
    } else {
        G$3J['hasGroupReq'] = ![];
        var pb0f5_ = z2or6d ? z2or6d[m[1164]] : '';
        window[m[30553]](0x7, 'Server.getServerGroup fail: ' + pb0f5_), window['G$203J']('reqServerGroupCallBack ' + pb0f5_);
    }
}, window['G$203'] = function (pf4t_0) {
    sendApi(G$3J[m[30522]], m[30720], {
        'partner_id': G$3J[m[11371]],
        'uid': G$3J[m[25247]],
        'version': G$3J[m[4595]],
        'game_pkg': G$3J[m[25249]],
        'device': G$3J[m[25251]]
    }, G$230, G$0J3, G$J2);
}, window['G$230'] = function (kax1wh) {
    G$3J[m[30721]] = ![];
    if (kax1wh && kax1wh[m[1164]] === m[9077] && kax1wh[m[11]]) {
        for (var ib_p50 = 0x0; ib_p50 < kax1wh[m[11]][m[13]]; ib_p50++) {
            kax1wh[m[11]][ib_p50][m[100]] = G$302(kax1wh[m[11]][ib_p50]);
        }
        G$3J[m[30530]][-0x1] = window[m[30722]](kax1wh[m[11]]), window[m[11547]][m[30723]](-0x1);
    } else {
        var o6zdr = kax1wh ? kax1wh[m[1164]] : '';
        window[m[30553]](0x8, m[30724] + o6zdr), window['G$203J'](m[30725] + o6zdr);
    }
}, window[m[30726]] = function (t0f34) {
    sendApi(G$3J[m[30522]], m[30720], {
        'partner_id': G$3J[m[11371]],
        'uid': G$3J[m[25247]],
        'version': G$3J[m[4595]],
        'game_pkg': G$3J[m[25249]],
        'device': G$3J[m[25251]]
    }, t0f34, G$0J3, G$J2);
}, window['G$023'] = function (vyewq, s8glq) {
    sendApi(G$3J[m[30522]], 'Server.getServerByGroup', {
        'partner_id': G$3J[m[11371]],
        'uid': G$3J[m[25247]],
        'version': G$3J[m[4595]],
        'game_pkg': G$3J[m[25249]],
        'device': G$3J[m[25251]],
        'server_group_id': s8glq
    }, G$032, G$0J3, G$J2);
}, window['G$032'] = function (xkh1a) {
    G$3J[m[30721]] = ![];
    if (xkh1a && xkh1a[m[1164]] === m[9077] && xkh1a[m[11]] && xkh1a[m[11]][m[11]]) {
        var h1aw = xkh1a[m[11]][m[30727]],
            _4fpt0 = [];
        for (var qcg7s = 0x0; qcg7s < xkh1a[m[11]][m[11]][m[13]]; qcg7s++) {
            xkh1a[m[11]][m[11]][qcg7s][m[100]] = G$302(xkh1a[m[11]][m[11]][qcg7s]), (_4fpt0[m[13]] == 0x0 || xkh1a[m[11]][m[11]][qcg7s][m[100]] != 0x0) && (_4fpt0[_4fpt0[m[13]]] = xkh1a[m[11]][m[11]][qcg7s]);
        }
        G$3J[m[30530]][h1aw] = window[m[30722]](_4fpt0), window[m[11547]][m[30723]](h1aw);
    } else {
        var _5 = xkh1a ? xkh1a[m[1164]] : '';
        window[m[30553]](0x9, 'Server.getServerByGroup fail: ' + _5), window['G$203J'](m[30728] + _5);
    }
}, window['G$V0J3'] = function (p4_t0f) {
    sendApi(G$3J[m[30522]], m[30729], {
        'partner_id': G$3J[m[11371]],
        'uid': G$3J[m[25247]],
        'version': G$3J[m[4595]],
        'game_pkg': G$3J[m[25249]],
        'device': G$3J[m[25251]]
    }, reqServerRecommendCallBack, G$0J3, G$J2);
}, window[m[30730]] = function (d3f4ot) {
    G$3J[m[30721]] = ![];
    if (d3f4ot && d3f4ot[m[1164]] === m[9077] && d3f4ot[m[11]]) {
        for (var xahib5 = 0x0; xahib5 < d3f4ot[m[11]][m[13]]; xahib5++) {
            d3f4ot[m[11]][xahib5][m[100]] = G$302(d3f4ot[m[11]][xahib5]);
        }
        G$3J[m[30530]][-0x2] = window[m[30722]](d3f4ot[m[11]]), window[m[11547]][m[30723]](-0x2);
    } else {
        var dz432o = d3f4ot ? d3f4ot[m[1164]] : '';
        window[m[30553]](0xa, m[30731] + dz432o), alert(m[30732] + dz432o);
    }
}, window[m[30722]] = function (k1veyw) {
    return k1veyw;
}, window['G$320'] = function (zrdo2, a1xki) {
    zrdo2 = zrdo2 || G$3J[m[25243]][m[10641]], sendApi(G$3J[m[30522]], m[30733], {
        'type': '4',
        'game_pkg': G$3J[m[25249]],
        'server_id': zrdo2
    }, a1xki);
}, window[m[30734]] = function (axik1, z26$jr, otf4d3, tf034_) {
    otf4d3 = otf4d3 || G$3J[m[25243]][m[10641]], sendApi(G$3J[m[30522]], m[30735], {
        'type': axik1,
        'game_pkg': z26$jr,
        'server_id': otf4d3
    }, tf034_);
}, window[m[30736]] = function (_f4o3t, sq7g8c) {
    sendApi(G$3J[m[30522]], m[30737], { 'game_pkg': _f4o3t }, sq7g8c);
}, window['G$302'] = function ($j6mur) {
    if ($j6mur) {
        if ($j6mur[m[100]] == 0x1) {
            if ($j6mur[m[30738]] == 0x3) return 0x3;else return $j6mur[m[30738]] == 0x1 ? 0x2 : 0x1;
        } else return $j6mur[m[100]] == 0x0 ? 0x0 : -0x1;
    }
    return -0x1;
}, window['G$J203'] = function (do4z, qwy) {
    G$3J[m[30739]] = {
        'step': do4z,
        'server_id': qwy
    };
    var a0bip5 = this;
    G$230J({ 'title': m[30740] }), sendApi(G$3J[m[30522]], m[30741], {
        'partner_id': G$3J[m[11371]],
        'uid': G$3J[m[25247]],
        'game_pkg': G$3J[m[25249]],
        'server_id': qwy,
        'platform': G$3J[m[25210]],
        'platform_uid': G$3J[m[25250]],
        'check_login_time': G$3J[m[30618]],
        'check_login_sign': G$3J[m[30617]],
        'version_name': G$3J[m[30586]]
    }, G$J230, G$0J3, G$J2, function (evk7) {
        return evk7[m[1164]] == m[9077] || evk7[m[72]] == m[30742] || evk7[m[72]] == m[30743];
    });
}, window['G$J230'] = function (ro26z) {
    var wyh1x = this;
    if (ro26z && ro26z[m[1164]] === m[9077] && ro26z[m[11]]) {
        var j6rdz2 = G$3J[m[25243]];
        j6rdz2[m[30744]] = G$3J[m[30531]], j6rdz2[m[10626]] = String(ro26z[m[11]][m[30745]]), j6rdz2[m[25212]] = parseInt(ro26z[m[11]][m[853]]);
        if (ro26z[m[11]][m[25211]]) j6rdz2[m[25211]] = parseInt(ro26z[m[11]][m[25211]]);else j6rdz2[m[25211]] = parseInt(ro26z[m[11]][m[10641]]);
        j6rdz2[m[30746]] = 0x0, j6rdz2[m[3808]] = G$3J[m[30656]], j6rdz2[m[30747]] = ro26z[m[11]][m[30748]], j6rdz2[m[30749]] = ro26z[m[11]][m[30749]];
        if (ro26z[m[11]][m[25215]]) j6rdz2[m[25215]] = parseInt(ro26z[m[11]][m[25215]]);
        console[m[473]](m[30750] + JSON[m[3794]](j6rdz2[m[30749]])), G$3J[m[649]] == 0x1 && j6rdz2[m[30749]] && j6rdz2[m[30749]][m[30751]] == 0x1 && (G$3J['showGetBtn'] = 0x1, window[m[30430]][m[141]]['G$VJ3']()), G$J023();
    } else {
        if (G$3J[m[30739]][m[6336]] >= 0x3) {
            var qcv7e = ro26z ? ro26z[m[1164]] : '';
            window[m[30553]](0xc, m[30752] + qcv7e), G$J2(JSON[m[3794]](ro26z)), window['G$203J'](m[30753] + qcv7e);
        } else sendApi(G$3J[m[30522]], m[30597], {
            'platform': G$3J[m[30520]],
            'partner_id': G$3J[m[11371]],
            'token': G$3J[m[30594]],
            'game_pkg': G$3J[m[25249]],
            'deviceId': G$3J[m[25251]],
            'scene': m[30598] + G$3J[m[30529]]
        }, function (q7evyw) {
            if (!q7evyw || q7evyw[m[1164]] != m[9077]) {
                window['G$203J'](m[30614] + q7evyw && q7evyw[m[1164]]);
                return;
            }
            G$3J[m[30617]] = String(q7evyw[m[10626]]), G$3J[m[30618]] = String(q7evyw[m[853]]), setTimeout(function () {
                G$J203(G$3J[m[30739]][m[6336]] + 0x1, G$3J[m[30739]][m[10641]]);
            }, 0x5dc);
        }, G$0J3, G$J2, function (c9gl8) {
            return c9gl8[m[1164]] == m[9077] || c9gl8[m[1164]] == m[25587];
        });
    }
}, window['G$J023'] = function () {
    ServerLoading[m[141]][m[30648]](G$3J[m[649]]), window['G$0J'] = !![], window['G$J320']();
}, window['G$J032'] = function () {
    if (window['G$J0'] && window['G$30J'] && window[m[30537]] && window[m[30538]] && window['G$3J0'] && window['G$30']) {
        if (!window[m[30010]][m[141]]) {
            console[m[473]](m[30754] + window[m[30010]][m[141]]);
            var dfto = wx[m[24923]](),
                ecv7g = dfto[m[784]] ? dfto[m[784]] : 0x0,
                _3ft0 = {
                'cdn': window['G$3J'][m[3808]],
                'spareCdn': window['G$3J'][m[24942]],
                'newRegister': window['G$3J'][m[649]],
                'wxPC': window['G$3J'][m[24946]],
                'wxIOS': window['G$3J'][m[1032]],
                'wxAndroid': window['G$3J'][m[10472]],
                'wxParam': {
                    'limitLoad': window['G$3J']['G$V20J3'],
                    'benchmarkLevel': window['G$3J']['G$V230J'],
                    'wxFrom': window[m[546]][m[30295]] == m[30755] ? 0x1 : 0x0,
                    'wxSDKVersion': window[m[30431]]
                },
                'configType': window['G$3J'][m[11096]],
                'exposeType': window['G$3J'][m[737]],
                'scene': ecv7g
            };
            new window[m[30010]](_3ft0, window['G$3J'][m[95]], window['G$V203J']);
        }
    }
}, window['G$J320'] = function () {
    if (window['G$J0'] && window['G$30J'] && window[m[30537]] && window[m[30538]] && window['G$3J0'] && window['G$30'] && window['G$0J'] && window['G$03']) {
        G$23J0();
        if (!G$J03) {
            G$J03 = !![];
            if (!window[m[30010]][m[141]]) window['G$J032']();
            var cqsv7g = 0x0,
                dzr62 = wx[m[30756]]();
            dzr62 && (window['G$3J'][m[30487]] && (cqsv7g = dzr62[m[314]]), console[m[72]](m[30757] + dzr62[m[314]] + m[30758] + dzr62[m[1183]] + m[30759] + dzr62[m[1185]] + m[30760] + dzr62[m[1184]] + m[30761] + dzr62[m[172]] + m[30762] + dzr62[m[173]]));
            var lgsqc = {};
            for (const o32dz4 in G$3J[m[25243]]) {
                lgsqc[o32dz4] = G$3J[m[25243]][o32dz4];
            }
            var hbxai5 = {
                'channel': window['G$3J'][m[11380]],
                'account': window['G$3J'][m[25247]],
                'userId': window['G$3J'][m[11369]],
                'cdn': window['G$3J'][m[3808]],
                'data': window['G$3J'][m[11]],
                'package': window['G$3J'][m[24943]],
                'newRegister': window['G$3J'][m[649]],
                'pkgName': window['G$3J'][m[25249]],
                'partnerId': window['G$3J'][m[11371]],
                'platform_uid': window['G$3J'][m[25250]],
                'deviceId': window['G$3J'][m[25251]],
                'selectedServer': lgsqc,
                'configType': window['G$3J'][m[11096]],
                'exposeType': window['G$3J'][m[737]],
                'debugUsers': window['G$3J'][m[11503]],
                'wxMenuTop': cqsv7g,
                'wxShield': window['G$3J'][m[751]],
                'wx_channel': window['G$3J'][m[25383]]
            };
            if (window[m[30658]]) for (var _f0ptb in window[m[30658]]) {
                hbxai5[_f0ptb] = window[m[30658]][_f0ptb];
            }
            window[m[30010]][m[141]]['G$J3V'](hbxai5), setTimeout(() => {
                new XingJuBoxMain();
            }, 0x1388);
            if (G$3J[m[25243]] && G$3J[m[25243]][m[10641]]) localStorage[m[476]](m[30620] + G$3J[m[25249]] + G$3J[m[25247]], G$3J[m[25243]][m[10641]]);
        }
    } else console[m[72]](m[30763] + window['G$J0'] + m[30764] + window['G$30J'] + m[30765] + window[m[30537]] + m[30766] + window[m[30538]] + m[30767] + window['G$3J0'] + m[30768] + window['G$30'] + m[30769] + window['G$0J'] + m[30770] + window['G$03']);
};